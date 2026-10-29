((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,R,A2,G,F,E,A3,A4,A5,A6,S,T,A7,A8,M,A9,H,Aa,Ab,U,V,W,Ac,Ad,X,Ae,Af,Ag,Y,Ah,Ai,K,Aj,Z,A_,O,P,L,Q,C={
bCh(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCh=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vg(null,""),$async$bCh)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n5(b1)
s=A.c2(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dq(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cS(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.S.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qP(t,a1,B.hB,"book",E.F7),$async$bCh)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Q8(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.KO(l)?y.l:y.i)
for(j=J.a4(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cC
g=a8.h(0,"title")
a9=B.a.i(A.t(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.t(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.z(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1Z(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCh,v)},
agv(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agv=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vg(null,""),$async$agv)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n5(b6)
s=x.S
r=A.de(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a1M(new A.M(r,new C.fzx(),r.$ti.k("M<ak.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fzw(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.S.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agv)
case 6:l=c5
k=F.Q8(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.anJ(s,D.dna,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.S.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agv)
case 10:l=c5
k=l==null?null:F.Q8(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.da(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kZ(a5,a2.k("kZ<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a4(a9)
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
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cD(new A.bc(h,s),new C.fzy(),s.k("J.E"),p)
p=F.a1M(A.pc(p,3,A.a3(p).k("J.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1Z(s,b9),$async$agv)
case 13:b5=c5
for(s=J.a4(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anJ(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agv,v)},
hoa(d,e,f){return A.cb(null,B.w.j(0.65),!1,null,new C.fIK(e,f),d,null,!0,!0,x.g2)},
anJ:function anJ(d,e,f){this.a=d
this.b=e
this.c=f},
fzx:function fzx(){},
fzw:function fzw(d){this.a=d},
fzy:function fzy(){},
fIK:function fIK(d,e){this.a=d
this.b=e},
bA7(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bA7=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b4(b1,new C.fon())){u=null
w=1
break}t=B.d.d7(b1,new C.foo())
s=$.W()
r=new A.qZ()
q=A.Db(r,D.aMm)
p=A.N()
p.r=B.c.gp(0)
q.aZ(D.aMm,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bQ
o.e=B.fC
n=new C.fou(t)
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
a3=new A.aO(s.r,B.ao,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b5(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aP(a3,o)}else{p=A.a([],x.v)
a3=new A.aO(s.r,B.ao,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.L)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bA(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aP(a3,o)}w=4
return A.b(r.pE().zi(520,160),$async$bA7)
case 4:w=3
return A.b(b3.hu(B.fZ),$async$bA7)
case 3:b0=b3
u=b0==null?null:J.eT(B.dD.gaN(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bA7,v)},
fxd(d){return C.i1A(d)},
i1A(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fxd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bfD()
n=d.x!=null&&d.yZ(null).length===0
if(d.x!=null)t=n?D.zh:D.Ib
else t=d.gTr()?D.Ib:D.aHo
w=3
return A.b(C.bA7(d.ax),$async$fxd)
case 3:s=f
p.a=null
if(s!=null)p.a=A.ams(s)
r=A.a3W(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aHo}else{p.c=C.wH(q,!0)
p.b=n?D.zh:D.Ib}r.a2G(A.fSU(new C.fxf(p,d,new C.fxg(),t,n,o),null,D.bvu,B.wc))
u=r.k7(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fxd,v)},
fDR(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fDR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fxd(d),$async$fDR)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.Gq(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fDR,v)},
fon:function fon(){},
foo:function foo(){},
fou:function fou(d){this.a=d},
fxg:function fxg(){},
fxf:function fxf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fxe:function fxe(){},
fJb(d,e){var w=0,v=A.j(x.H)
var $async$fJb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,B.w.j(0.55),!0,null,new C.fJf(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fJb)
case 2:return A.h(null,v)}})
return A.i($async$fJb,v)},
bCK(d,e,f,g){return C.i93(d,e,f,g)},
i93(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bCK=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cI.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.J(x.q).f.U(D.eXo)
w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.fJ7(g,r,f),d,null,!0,!0,x.H),$async$bCK)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bCK,v)},
fJg(d,e){var w=0,v=A.j(x.H)
var $async$fJg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,null,!0,null,new C.fJj(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fJg)
case 2:return A.h(null,v)}})
return A.i($async$fJg,v)},
aXU:function aXU(d,e){this.c=d
this.a=e},
c1e:function c1e(){},
ba_:function ba_(d,e){this.b=d
this.a=e},
fJf:function fJf(d,e){this.a=d
this.b=e},
fJc:function fJc(d){this.a=d},
fJd:function fJd(d,e,f){this.a=d
this.b=e
this.c=f},
fJe:function fJe(d,e){this.a=d
this.b=e},
fJ7:function fJ7(d,e,f){this.a=d
this.b=e
this.c=f},
fJ5:function fJ5(d){this.a=d},
fJ6:function fJ6(d,e,f){this.a=d
this.b=e
this.c=f},
fJj:function fJj(d,e){this.a=d
this.b=e},
fJh:function fJh(d){this.a=d},
fJi:function fJi(d,e,f){this.a=d
this.b=e
this.c=f},
fsd(d,e){var w=0,v=A.j(x.y),u,t
var $async$fsd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1x(d),$async$fsd)
case 3:t=g
J.nr(t,new C.fse(e))
u=A.ah9(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fsd,v)},
fse:function fse(d){this.a=d},
anQ:function anQ(d,e,f){this.c=d
this.d=e
this.a=f},
aC5:function aC5(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dFu:function dFu(d,e){this.a=d
this.b=e},
dFf:function dFf(d,e){this.a=d
this.b=e},
dFi:function dFi(d,e,f){this.a=d
this.b=e
this.c=f},
dFh:function dFh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFg:function dFg(d,e){this.a=d
this.b=e},
dFj:function dFj(d,e){this.a=d
this.b=e},
dFd:function dFd(){},
dFe:function dFe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFc:function dFc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dEY:function dEY(d){this.a=d},
dEZ:function dEZ(d,e,f){this.a=d
this.b=e
this.c=f},
dF_:function dF_(d,e){this.a=d
this.b=e},
dEX:function dEX(d){this.a=d},
dF4:function dF4(d,e){this.a=d
this.b=e},
dEW:function dEW(d){this.a=d},
dF5:function dF5(d,e,f){this.a=d
this.b=e
this.c=f},
dF6:function dF6(d,e,f){this.a=d
this.b=e
this.c=f},
dEV:function dEV(d,e){this.a=d
this.b=e},
dF7:function dF7(d,e,f){this.a=d
this.b=e
this.c=f},
dEU:function dEU(d,e){this.a=d
this.b=e},
dF8:function dF8(d,e){this.a=d
this.b=e},
dET:function dET(d){this.a=d},
dF9:function dF9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dER:function dER(){},
dEL:function dEL(d){this.a=d},
dEM:function dEM(d){this.a=d},
dES:function dES(d,e){this.a=d
this.b=e},
dFa:function dFa(d,e){this.a=d
this.b=e},
dEQ:function dEQ(d){this.a=d},
dFb:function dFb(d){this.a=d},
dEP:function dEP(){},
dF0:function dF0(d,e){this.a=d
this.b=e},
dEO:function dEO(d){this.a=d},
dF1:function dF1(d,e,f){this.a=d
this.b=e
this.c=f},
dEN:function dEN(d,e){this.a=d
this.b=e},
dEK:function dEK(d,e){this.a=d
this.b=e},
dF2:function dF2(d){this.a=d},
dF3:function dF3(d,e,f){this.a=d
this.b=e
this.c=f},
dFx:function dFx(){},
dFy:function dFy(d,e){this.a=d
this.b=e},
dFv:function dFv(d){this.a=d},
dFw:function dFw(d){this.a=d},
dFr:function dFr(d,e){this.a=d
this.b=e},
dFs:function dFs(d){this.a=d},
dFk:function dFk(d,e,f){this.a=d
this.b=e
this.c=f},
dFl:function dFl(d,e,f){this.a=d
this.b=e
this.c=f},
dFm:function dFm(d,e,f){this.a=d
this.b=e
this.c=f},
dFn:function dFn(d,e,f){this.a=d
this.b=e
this.c=f},
dFo:function dFo(d,e,f){this.a=d
this.b=e
this.c=f},
dFp:function dFp(d,e,f){this.a=d
this.b=e
this.c=f},
dFq:function dFq(d,e,f){this.a=d
this.b=e
this.c=f},
dFz:function dFz(){},
dFA:function dFA(){},
dFB:function dFB(){},
dFC:function dFC(d){this.a=d},
dFt:function dFt(d,e){this.a=d
this.b=e},
hkm(d){return B.d.dM(D.a1I,new C.fsO(d),new C.fsP())},
ua:function ua(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fsO:function fsO(d){this.a=d},
fsP:function fsP(){},
akb:function akb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aTH:function aTH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
So:function So(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdC:function bdC(){this.d=$
this.c=this.a=null},
d5j:function d5j(d,e){this.a=d
this.b=e},
d5h:function d5h(d,e){this.a=d
this.b=e},
d5i:function d5i(){},
d5k:function d5k(d,e){this.a=d
this.b=e},
h58(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.nc(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
KA(d,e){return C.i0d(d,e)},
i0d(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$KA=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$KA)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.S.aI(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.da(p,x.f)
o=A.cD(o,new C.fuS(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a_<J.E>")
o=A.C(new A.a_(o,new C.fuT(),n),n.k("J.E"))
B.d.b0(o,new C.fuU())
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
return A.i($async$KA,v)},
AL(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AL=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$AL)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fHQ(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.S.ao(r,null)),$async$AL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AL,v)},
aPR(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aPR=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KA(d,e),$async$aPR)
case 2:u=h
t=J.cF(u)
s=t.bg(u,new C.fQ_(f))
if(s===-1)t.cj(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AL(d,e,u),$async$aPR)
case 3:return A.h(null,v)}})
return A.i($async$aPR,v)},
bAz(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAz=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KA(d,e),$async$bAz)
case 2:u=h
J.nr(u,new C.fs5(f))
w=3
return A.b(C.AL(d,e,u),$async$bAz)
case 3:return A.h(null,v)}})
return A.i($async$bAz,v)},
bAO(d,e){return C.i0c(d,e)},
i0c(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bAO=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bAO)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.MH
w=1
break}p=B.S.aI(0,q,null)
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
if(D.Cn.ai(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a3k,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a2I,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a2D,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.cST,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Hm(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.MH
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.MH
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAO,v)},
Rc(d,e,f){return C.i8A(d,e,f)},
i8A(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Rc=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Rc)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.S.ao(f.ag(),null)),$async$Rc)
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
return A.i($async$Rc,v)},
QG(d,e){return C.i0e(d,e)},
i0e(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QG=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$QG)
case 7:r=g
q=r.t8("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KA(d,e),$async$QG)
case 8:if(!j.cI(g)){n=B.a.i(d.toLowerCase())
m=J.lp(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QG)
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
return A.i($async$QG,v)},
afQ(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QG(d,e),$async$afQ)
case 3:s=g
r=J.a4(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.az(),$async$afQ)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afQ)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afQ,v)},
a2b(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2b=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QG(d,e),$async$a2b)
case 2:s=h
J.hu(s,f)
w=3
return A.b(A.az(),$async$a2b)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2b)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2b)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2b)
case 6:return A.h(null,v)}})
return A.i($async$a2b,v)},
nc:function nc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fuS:function fuS(){},
fuT:function fuT(){},
fuU:function fuU(){},
fHQ:function fHQ(){},
fQ_:function fQ_(d){this.a=d},
fs5:function fs5(d){this.a=d},
Hm:function Hm(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bN3:function bN3(d){this.a=d},
i8T(d,e,f,g,h,i,j){return A.a6(d,!1).ck(A.e8(new C.fIo(j,i,f,e,h,g),!0,null,x.H))},
QD(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QD=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QG(h,g),$async$QD)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.J(x.q).f.U(D.aOq)
u=!1
w=1
break}w=4
return A.b(C.hoa(d,f,e),$async$QD)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afQ(h,g),$async$QD)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nc(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.AL(h,r,p),$async$QD)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Rc(h,r,new C.Hm("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QD)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QD,v)},
fIo:function fIo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
YW:function YW(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
az9:function az9(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d5Z:function d5Z(d){this.a=d},
d5Y:function d5Y(d,e){this.a=d
this.b=e},
d5N:function d5N(d,e){this.a=d
this.b=e},
d5K:function d5K(d,e){this.a=d
this.b=e},
d5l:function d5l(d){this.a=d},
d5m:function d5m(d,e){this.a=d
this.b=e},
d5O:function d5O(d){this.a=d},
d5u:function d5u(d){this.a=d},
d5s:function d5s(d){this.a=d},
d5t:function d5t(d){this.a=d},
d5v:function d5v(d){this.a=d},
d5L:function d5L(d){this.a=d},
d5M:function d5M(){},
d5q:function d5q(d){this.a=d},
d5r:function d5r(d,e){this.a=d
this.b=e},
d5w:function d5w(d){this.a=d},
d5x:function d5x(d,e){this.a=d
this.b=e},
d5X:function d5X(d){this.a=d},
d5W:function d5W(d,e){this.a=d
this.b=e},
d5V:function d5V(d){this.a=d},
d5H:function d5H(d){this.a=d},
d5G:function d5G(d){this.a=d},
d5I:function d5I(d){this.a=d},
d5n:function d5n(d,e){this.a=d
this.b=e},
d5J:function d5J(d,e){this.a=d
this.b=e},
d5A:function d5A(d){this.a=d},
d5B:function d5B(d){this.a=d},
d5z:function d5z(){},
d5C:function d5C(d){this.a=d},
d5D:function d5D(d){this.a=d},
d5E:function d5E(d,e){this.a=d
this.b=e},
d5F:function d5F(d,e,f){this.a=d
this.b=e
this.c=f},
d5y:function d5y(d,e){this.a=d
this.b=e},
d5Q:function d5Q(d){this.a=d},
d5P:function d5P(){},
d5R:function d5R(d){this.a=d},
d5S:function d5S(d){this.a=d},
d5T:function d5T(d){this.a=d},
d5U:function d5U(d,e){this.a=d
this.b=e},
d5o:function d5o(d){this.a=d},
d5p:function d5p(d){this.a=d},
Z_:function Z_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdX:function bdX(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d7J:function d7J(d){this.a=d},
d7K:function d7K(d){this.a=d},
d7I:function d7I(d){this.a=d},
d7L:function d7L(d){this.a=d},
d7H:function d7H(d){this.a=d},
d7M:function d7M(d){this.a=d},
d7G:function d7G(d){this.a=d},
d7N:function d7N(d,e){this.a=d
this.b=e},
d7F:function d7F(d,e){this.a=d
this.b=e},
d7O:function d7O(d,e){this.a=d
this.b=e},
YY:function YY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aei:function aei(d,e,f){this.a=d
this.b=e
this.c=f},
aza:function aza(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d6d:function d6d(d,e){this.a=d
this.b=e},
d6c:function d6c(d,e){this.a=d
this.b=e},
d6h:function d6h(d){this.a=d},
d6g:function d6g(d,e){this.a=d
this.b=e},
d6e:function d6e(d){this.a=d},
d6f:function d6f(d){this.a=d},
d6i:function d6i(d){this.a=d},
d6j:function d6j(d){this.a=d},
d6b:function d6b(d,e){this.a=d
this.b=e},
d6a:function d6a(d,e){this.a=d
this.b=e},
JG:function JG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ye:function Ye(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cEO:function cEO(d){this.a=d},
cEP:function cEP(){},
cEQ:function cEQ(d){this.a=d},
bbc:function bbc(d,e,f){this.b=d
this.c=e
this.a=f},
bb3:function bb3(d,e){this.b=d
this.a=e},
ub:function ub(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yw:function Yw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bba:function bba(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cYf:function cYf(d,e,f){this.a=d
this.b=e
this.c=f},
cYe:function cYe(d,e){this.a=d
this.b=e},
cYE:function cYE(d){this.a=d},
cYr:function cYr(){},
cYF:function cYF(d){this.a=d},
cYq:function cYq(){},
cYG:function cYG(d,e){this.a=d
this.b=e},
cYp:function cYp(d,e){this.a=d
this.b=e},
cYH:function cYH(d,e){this.a=d
this.b=e},
cYo:function cYo(d,e){this.a=d
this.b=e},
cYI:function cYI(d){this.a=d},
cYn:function cYn(){},
cYJ:function cYJ(d,e){this.a=d
this.b=e},
cYm:function cYm(d,e){this.a=d
this.b=e},
cYK:function cYK(d){this.a=d},
cYz:function cYz(d,e){this.a=d
this.b=e},
cYL:function cYL(d){this.a=d},
cYM:function cYM(d){this.a=d},
cYO:function cYO(d){this.a=d},
cYP:function cYP(d){this.a=d},
cYy:function cYy(d,e){this.a=d
this.b=e},
cYQ:function cYQ(d,e){this.a=d
this.b=e},
aG9:function aG9(d){this.a=d},
bgq:function bgq(d){this.a=d},
b9o:function b9o(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
i_b(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahm(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.fsS(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a_<1>"),q=q.k("cQ<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xT)m.push(l===D.ZK?"male":"female")
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
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.a_(a4,new C.fsQ(u,f),p),new C.fsR(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i_c(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahm(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fsX(v,e)
q=new C.fsV(v)
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
d=A.dc(new A.bc(p,d),d.k("J.E"))
n=A.C(d,A.a3(d).k("co.E"))
B.d.fo(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.f_(l,new C.fsW(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hLQ(d,e,f,g){var w,v,u=C.i_d(d,e)
if(u<=0||f.length<=u)return new A.adT(!1,D.Cb,f)
if(g.t(0,e.a))return new A.adT(!1,D.Cb,f)
w=A.U(f).c
v=A.de(f,0,A.dJ(u,"count",x.S),w).dI(0)
return new A.adT(!0,A.de(f,u,null,w).dI(0),v)},
hLR(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahm(d3),d2=d1.length
if(d2===0)return D.fWY
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.c8(0,t.a,new C.d6q(t))}s=new C.d6H(v)
d2=x.h
r=A.T(w,d2)
q=new C.d6z(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d6y(r)
l=A.T(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ci(l.c8(0,k,new C.d6r()),o)}h=new C.d6x(s)
g=new C.d6w(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a_<J.E>")
f=A.C(new A.a_(new A.bc(v,p),new C.d6s(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gI(0):B.d.gI(f)
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
a9=new C.d6F(new C.d6B(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gak6(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.et([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.L(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.re(J.dG(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d6p(a2,new C.d6G(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.n(0,b8,new C.Fy(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.JO(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.C(new A.cu(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bK(0,new C.d6t(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gR(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.f_(j,new C.d6u(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.b0(o,new C.d6v())
c6.push(new C.aIf(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bdH(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hjR(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(d)
return w==null?null:w.b[1]},
hec(d,e,f,g,h,i,j,k,l,m,n){return new C.Zz(k,f,j,e,l,n,m,d,g,h,i,null)},
aB6(d,e,f,g,h,i,j){return new C.bhm(i,d,e,f,j,h,g,null)},
aoY:function aoY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCG:function aCG(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dTt:function dTt(d){this.a=d},
dTs:function dTs(d){this.a=d},
dTv:function dTv(d,e){this.a=d
this.b=e},
dTw:function dTw(d,e){this.a=d
this.b=e},
dTx:function dTx(d){this.a=d},
dTr:function dTr(d,e){this.a=d
this.b=e},
dTu:function dTu(d){this.a=d},
dTz:function dTz(d){this.a=d},
dTy:function dTy(d,e){this.a=d
this.b=e},
aoS:function aoS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCD:function aCD(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dSU:function dSU(d){this.a=d},
dSS:function dSS(d){this.a=d},
dST:function dST(d){this.a=d},
dSV:function dSV(d,e){this.a=d
this.b=e},
dSP:function dSP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSn:function dSn(d){this.a=d},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSC:function dSC(d){this.a=d},
dSA:function dSA(d){this.a=d},
dSB:function dSB(d,e){this.a=d
this.b=e},
dSD:function dSD(d){this.a=d},
dSE:function dSE(d,e){this.a=d
this.b=e},
dSO:function dSO(d,e){this.a=d
this.b=e},
dSM:function dSM(d,e){this.a=d
this.b=e},
dSL:function dSL(d,e){this.a=d
this.b=e},
dSH:function dSH(d,e){this.a=d
this.b=e},
dSG:function dSG(d){this.a=d},
dSI:function dSI(d,e){this.a=d
this.b=e},
dSF:function dSF(d){this.a=d},
dSJ:function dSJ(d){this.a=d},
dSK:function dSK(d){this.a=d},
dSN:function dSN(d,e){this.a=d
this.b=e},
dSb:function dSb(d,e){this.a=d
this.b=e},
dSc:function dSc(d,e){this.a=d
this.b=e},
dSX:function dSX(d,e,f){this.a=d
this.b=e
this.c=f},
dSR:function dSR(d,e,f){this.a=d
this.b=e
this.c=f},
dSQ:function dSQ(d){this.a=d},
dSd:function dSd(d){this.a=d},
dSe:function dSe(d){this.a=d},
dSf:function dSf(){},
dSg:function dSg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSk:function dSk(d,e){this.a=d
this.b=e},
dSj:function dSj(d,e){this.a=d
this.b=e},
dSi:function dSi(d){this.a=d},
dSl:function dSl(d,e){this.a=d
this.b=e},
dSh:function dSh(d){this.a=d},
dSW:function dSW(d){this.a=d},
dSx:function dSx(){},
dSy:function dSy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSw:function dSw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSs:function dSs(d,e,f){this.a=d
this.b=e
this.c=f},
dSr:function dSr(d,e,f){this.a=d
this.b=e
this.c=f},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSt:function dSt(d){this.a=d},
dSu:function dSu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSv:function dSv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSz:function dSz(d,e){this.a=d
this.b=e},
dT3:function dT3(){},
dT4:function dT4(d,e){this.a=d
this.b=e},
dT5:function dT5(d){this.a=d},
dT6:function dT6(d,e){this.a=d
this.b=e},
dT_:function dT_(d){this.a=d},
dSY:function dSY(d,e){this.a=d
this.b=e},
dT0:function dT0(d,e){this.a=d
this.b=e},
dT1:function dT1(d,e){this.a=d
this.b=e},
dT2:function dT2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dT7:function dT7(d){this.a=d},
dSZ:function dSZ(d){this.a=d},
dSm:function dSm(d){this.a=d},
bdF:function bdF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d6n:function d6n(d){this.a=d},
d6m:function d6m(d,e){this.a=d
this.b=e},
d6o:function d6o(d){this.a=d},
d6l:function d6l(d,e){this.a=d
this.b=e},
fsS:function fsS(d,e){this.a=d
this.b=e},
fsT:function fsT(d){this.a=d},
fsU:function fsU(){},
fsQ:function fsQ(d,e){this.a=d
this.b=e},
fsR:function fsR(){},
fsX:function fsX(d,e){this.a=d
this.b=e},
fsY:function fsY(d){this.a=d},
fsZ:function fsZ(){},
fsV:function fsV(d){this.a=d},
fsW:function fsW(d,e){this.a=d
this.b=e},
JO:function JO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fy:function Fy(d,e){this.a=d
this.b=e},
bdH:function bdH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d6q:function d6q(d){this.a=d},
d6H:function d6H(d){this.a=d},
d6z:function d6z(d){this.a=d},
d6A:function d6A(){},
d6y:function d6y(d){this.a=d},
d6r:function d6r(){},
d6x:function d6x(d){this.a=d},
d6w:function d6w(d,e){this.a=d
this.b=e},
d6s:function d6s(d){this.a=d},
d6B:function d6B(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d6C:function d6C(d){this.a=d},
d6D:function d6D(d){this.a=d},
d6E:function d6E(){},
d6F:function d6F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d6G:function d6G(){},
d6p:function d6p(d,e,f,g,h,i,j,k,l,m){var _=this
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
d6t:function d6t(d,e){this.a=d
this.b=e},
d6u:function d6u(d){this.a=d},
d6v:function d6v(){},
aIf:function aIf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdI:function bdI(d,e){this.b=d
this.a=e},
d6I:function d6I(){},
d6J:function d6J(d){this.a=d},
d6K:function d6K(d){this.a=d},
d6L:function d6L(){},
bhn:function bhn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcM:function bcM(d,e){this.b=d
this.a=e},
bv4:function bv4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fau:function fau(d){this.a=d},
bkJ:function bkJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eMp:function eMp(d){this.a=d},
eMo:function eMo(d,e){this.a=d
this.b=e},
Zz:function Zz(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aB4:function aB4(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dmA:function dmA(d,e){this.a=d
this.b=e},
dmz:function dmz(d){this.a=d},
dmx:function dmx(d){this.a=d},
dmy:function dmy(d){this.a=d},
dmJ:function dmJ(d){this.a=d},
dmK:function dmK(d){this.a=d},
dmI:function dmI(d,e){this.a=d
this.b=e},
dmL:function dmL(){},
dmO:function dmO(d){this.a=d},
dmH:function dmH(d,e){this.a=d
this.b=e},
dmN:function dmN(){},
dmP:function dmP(d){this.a=d},
dmG:function dmG(d,e){this.a=d
this.b=e},
dmQ:function dmQ(d){this.a=d},
dmF:function dmF(d){this.a=d},
dmR:function dmR(d){this.a=d},
dmE:function dmE(d){this.a=d},
dmS:function dmS(d){this.a=d},
dmD:function dmD(d){this.a=d},
dmT:function dmT(d){this.a=d},
dmC:function dmC(d){this.a=d},
dmU:function dmU(d){this.a=d},
dmB:function dmB(d,e){this.a=d
this.b=e},
dmM:function dmM(d){this.a=d},
acJ:function acJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhm:function bhm(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acI:function acI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhl:function bhl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dmV:function dmV(d){this.a=d},
dmW:function dmW(d,e){this.a=d
this.b=e},
aB5:function aB5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHh:function aHh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acK:function acK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dn4:function dn4(d){this.a=d},
JC:function JC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h94(d){var w=d.S,v=x.N
return w.j2(w,new C.c7M(),v,v)},
hDl(d){var w=d.bC
if(w>=0)return w
return 5},
h96(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h94(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h95(d,e){var w=C.h96(d,e)
if(w!=null&&w.cb(new A.S(Date.now(),0,!1)))return!0
return!1},
hDm(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.h94(d),w,w)
u=C.h96(d,e)
t=u!=null&&u.cb(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bR(A.dC(30,0,0,0,0,0).a).a7().ac())
d.S=v},
aZj(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZj=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.le(t,B.HZ),$async$aZj)
case 3:if(l){u=!0
w=1
break}u=A.kT(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.HZ,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZj,v)},
c7M:function c7M(){},
hDj(){var w,v=$.ps(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.h_(u)},
Ig(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Ig=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$Ig)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_family_tree_backup_codes_v1",null,!1,B.bI),$async$Ig)
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
return A.i($async$Ig,v)},
a6K(d){return C.hDk(d)},
hDk(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6K=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6K)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hF("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,B.cH,null),$async$a6K)
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
return A.i($async$a6K,v)},
c7L(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c7L=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Ig(),$async$c7L)
case 3:t=m.jv(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
q=r.b
if(s.b(q)){p=J.a4(q)
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
return A.i($async$c7L,v)},
Nc(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Nc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c7L(d),$async$Nc)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Ig(),$async$Nc)
case 6:s=f
r=J.a4(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dO(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a7().ac())
r.n(s,t,o)
w=9
return A.b(C.a6K(s),$async$Nc)
case 9:case 8:u=t
w=1
break
case 5:n=C.hDj()
w=10
return A.b(C.Ig(),$async$Nc)
case 10:s=f
J.aG(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a7().ac(),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=11
return A.b(C.a6K(s),$async$Nc)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Nc,v)},
aZi(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Ig(),$async$aZi)
case 3:t=f
for(s=J.dl(t),r=s.gdL(t),r=r.dI(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6K(t),$async$aZi)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZi,v)},
a6L(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6L=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aoX(d,e),$async$a6L)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Nc(d),$async$a6L)
case 7:w=4
break
case 5:w=8
return A.b(C.aZi(d),$async$a6L)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6L,v)},
aoR(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aoR=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aoX(f,e),$async$aoR)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$aoR)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Ig(),$async$aoR)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a4(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoR,v)},
aZh(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZh)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Ig(),$async$aZh)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a4(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZh,v)},
hDn(){var w,v=$.ps(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.h_(u)},
aoU(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aoU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$aoU)
case 3:if(!g){u=null
w=1
break}t=C.hDn()
w=4
return A.b(A.UI(),$async$aoU)
case 4:s=g
r=B.dJ.aJ(B.S.ao(d.eQ(),null))
r=B.cS.gcz().aJ(r)
q=e?999:2
J.aG(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=5
return A.b(A.a6M(s),$async$aoU)
case 5:p=e?999:2
u=new A.a_L("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoU,v)},
aoT(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoT=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.UI(),$async$aoT)
case 3:p=a0
o=J.a4(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a4(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aZh(J.k(l==null?"":l),j),$async$aoT)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cf.cw(0,B.cI.aJ(t))
s=C.h97(r)}catch(f){q=A.aa(f)
$.am.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dO(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a7().ac())
o.n(p,g,l)}w=5
return A.b(A.a6M(p),$async$aoT)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoT,v)},
h97(d){var w,v,u,t,s=null
try{w=B.S.aI(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hDp(A.a2(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fTX(d){var w=0,v=A.j(x.m),u,t,s
var $async$fTX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aoT(t[1])
w=1
break}u=null
w=1
break}u=C.h97(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTX,v)},
hDp(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.da(v,x.f)
u=A.cD(u,new C.c7O(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a_<J.E>")
s=A.C(new A.a_(u,new C.c7P(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jv(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.da(l,u)
n=A.cD(n,new C.c7Q(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a_<J.E>")
j=A.C(new A.a_(n,new C.c7R(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aoV(h,w,s,r,q)},
aoX(d,e){var w=0,v=A.j(x.y),u,t
var $async$aoX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.N3(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Az(d),$async$aoX)
case 3:u=t.cI(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoX,v)},
c7X(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c7X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Az(d),$async$c7X)
case 3:t=s.b6(f,new C.c7Y(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.c7Z())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c7X,v)},
UJ(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$UJ=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aoX(e,d),$async$UJ)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Nc(e),$async$UJ)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Az(e),$async$UJ)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dG(r,new C.c7V(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a4(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c7W(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KA(e,o),$async$UJ)
case 14:n=i
if(J.cI(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aoV(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UJ,v)},
aZm(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZm=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UJ(d,e,f,g),$async$aZm)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.Gg(A.JK(q.eQ(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZm,v)},
aZl(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZl=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UJ(d,e,f,g),$async$aZl)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aoU(r,f),$async$aZl)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFi(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZl,v)},
UK(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UK=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fTX(a0),$async$UK)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aoR(g.a,d,e,f,s,r),$async$UK)
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
return A.b(C.bAp(e,j),$async$UK)
case 12:case 11:w=13
return A.b(C.ah7(e,j,s),$async$UK)
case 13:h=n.h(0,i)
w=h!=null&&J.cI(h)?14:15
break
case 14:w=16
return A.b(C.AL(e,i,h),$async$UK)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.boj(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UK,v)},
aoV:function aoV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7T:function c7T(){},
c7U:function c7U(){},
c7S:function c7S(){},
c7O:function c7O(){},
c7P:function c7P(){},
c7Q:function c7Q(){},
c7R:function c7R(){},
c7Y:function c7Y(){},
c7Z:function c7Z(){},
c7V:function c7V(d){this.a=d},
c7W:function c7W(d){this.a=d},
h1j(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hA(d,new C.aoW(w,e,g,i,f,h,null),!0,null,x.H)},
d6k(d,e,f,g,h,i,j,k){return new C.bdE(i,e,k,j,g,f,h,d,null)},
aoW:function aoW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCF:function aCF(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dTg:function dTg(d){this.a=d},
dTh:function dTh(d,e,f){this.a=d
this.b=e
this.c=f},
dTl:function dTl(d,e){this.a=d
this.b=e},
dTm:function dTm(d){this.a=d},
dTd:function dTd(d){this.a=d},
dTe:function dTe(d,e){this.a=d
this.b=e},
dTf:function dTf(d,e){this.a=d
this.b=e},
dTk:function dTk(d){this.a=d},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTi:function dTi(){},
dTo:function dTo(d){this.a=d},
dTp:function dTp(d,e){this.a=d
this.b=e},
dTn:function dTn(d,e){this.a=d
this.b=e},
d6M:function d6M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdG:function bdG(d,e,f){this.d=d
this.e=e
this.a=f},
ac_:function ac_(d,e,f){this.c=d
this.d=e
this.a=f},
bdE:function bdE(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdJ:function bdJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZU:function ZU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCE:function aCE(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dT8:function dT8(d,e){this.a=d
this.b=e},
dT9:function dT9(d){this.a=d},
dTa:function dTa(d){this.a=d},
dTb:function dTb(d){this.a=d},
dTc:function dTc(d){this.a=d},
ZV:function ZV(d){this.a=d},
biQ:function biQ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dTq:function dTq(d,e){this.a=d
this.b=e},
aXT(d,e){return new C.aXS(d,e,null)},
aXS:function aXS(d,e,f){this.c=d
this.d=e
this.a=f},
i1F(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
i92(d){return A.bR(B.K,null,new C.fIR(new C.tK(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hb_(d,e){return new C.arR(e,d,null)},
aPx(d,e,f,g,h,i,j){var w=C.i1F(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5N(w,!0,null),null),B.aq)
return I.aOU(e,B.bT,f,g,h,i,j)},
ly:function ly(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5N:function a5N(d,e,f){this.c=d
this.d=e
this.a=f},
biw:function biw(d,e){var _=this
_.e=_.d=$
_.cP$=d
_.b1$=e
_.c=_.a=null},
dEC:function dEC(d){this.a=d},
dED:function dED(){},
dEE:function dEE(d,e){this.a=d
this.b=e},
biv:function biv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fIR:function fIR(d){this.a=d},
fIQ:function fIQ(d,e){this.a=d
this.b=e},
fIP:function fIP(d,e){this.a=d
this.b=e},
fIO:function fIO(d,e){this.a=d
this.b=e},
arR:function arR(d,e,f){this.c=d
this.d=e
this.a=f},
cfs:function cfs(d,e){this.a=d
this.b=e},
aKB:function aKB(){},
i8O(d){var w=null
return A.cb(w,w,!0,w,new C.fId(),d,w,!0,!0,x.e2)},
i9Y(d,e,f,g,h){var w=null
return A.cb(w,w,!0,w,new C.fPH(h,g,f,e),d,w,!0,!0,x.N)},
i8Q(d,e){var w=null
return A.cb(w,w,!0,w,new C.fIi(e),d,w,!0,!0,x.dY)},
i8P(d){var w=null
return A.cb(w,w,!0,w,new C.fIh(),d,w,!0,!0,x.c5)},
aSs:function aSs(d,e){this.a=d
this.b=e},
aSr:function aSr(d){this.a=d},
aQt:function aQt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fId:function fId(){},
fPH:function fPH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIi:function fIi(d){this.a=d},
fIh:function fIh(){},
Yy:function Yy(d,e){this.c=d
this.a=e},
axV:function axV(){var _=this
_.d=$
_.c=_.a=_.e=null},
cZ1:function cZ1(d){this.a=d},
cZ2:function cZ2(d){this.a=d},
cZ0:function cZ0(d,e){this.a=d
this.b=e},
cZ3:function cZ3(d){this.a=d},
cZ4:function cZ4(d){this.a=d},
Yx:function Yx(d){this.a=d},
axU:function axU(){this.d=$
this.c=this.a=null},
cYY:function cYY(d){this.a=d},
cYZ:function cYZ(d){this.a=d},
cZ_:function cZ_(d){this.a=d},
Y5:function Y5(d){this.a=d},
awE:function awE(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cwB:function cwB(){},
cwH:function cwH(d){this.a=d},
cwI:function cwI(d){this.a=d},
cwJ:function cwJ(d){this.a=d},
cwG:function cwG(){},
cwK:function cwK(d){this.a=d},
cwL:function cwL(d){this.a=d},
cwF:function cwF(){},
cwM:function cwM(d,e){this.a=d
this.b=e},
cwE:function cwE(d,e){this.a=d
this.b=e},
cwC:function cwC(d,e){this.a=d
this.b=e},
cwN:function cwN(d){this.a=d},
cwD:function cwD(){},
cwO:function cwO(d){this.a=d},
a0F:function a0F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
buX:function buX(){this.d=$
this.c=this.a=null},
f9X:function f9X(d,e){this.a=d
this.b=e},
f9Y:function f9Y(d){this.a=d},
f9Z:function f9Z(d,e){this.a=d
this.b=e},
ab2:function ab2(d,e){this.a=d
this.b=e},
Fl:function Fl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
buV:function buV(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
f9V:function f9V(d,e){this.a=d
this.b=e},
awx:function awx(d,e){this.c=d
this.a=e},
buW:function buW(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
f9W:function f9W(d){this.a=d},
buU:function buU(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aMM:function aMM(){},
aMN:function aMN(){},
bCm(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bv(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oE(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fGS(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d7(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d7(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.N,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d7(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.d7(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Xv(A.d7(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aP9(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aP9=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hY().l6(85,1280,B.eI),$async$aP9)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fl(),$async$aP9)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.haZ()
w=9
return A.b(C.cfr(q,r),$async$aP9)
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
return A.i($async$aP9,v)},
aPv(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPv=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cfo(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gal(g.split(",")):g
p=B.cI.aJ(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.W().Lo(p,!0,null,i).d6(0,B.fI),$async$aPv)
case 9:n=a1
w=10
return A.b(n.m1(),$async$aPv)
case 10:m=a1
w=11
return A.b(J.ahx(m).hu(B.fZ),$async$aPv)
case 11:l=a1
J.ahx(m).q()
if(l==null){w=8
break}i=J.eT(B.dD.gaN(l))
k="data:image/png;base64,"+B.cS.gcz().aJ(i)
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
return A.i($async$aPv,v)},
fGS:function fGS(){},
tK:function tK(d){this.a=d},
arQ:function arQ(d,e,f){this.c=d
this.d=e
this.a=f},
aEa:function aEa(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eJz:function eJz(d,e){this.a=d
this.b=e},
eJq:function eJq(d){this.a=d},
eJr:function eJr(d){this.a=d},
eJx:function eJx(d,e){this.a=d
this.b=e},
eJw:function eJw(d,e){this.a=d
this.b=e},
eJt:function eJt(d,e){this.a=d
this.b=e},
eJs:function eJs(d,e){this.a=d
this.b=e},
eJu:function eJu(d){this.a=d},
eJv:function eJv(d,e){this.a=d
this.b=e},
eJy:function eJy(d,e){this.a=d
this.b=e},
eJl:function eJl(d,e){this.a=d
this.b=e},
eJp:function eJp(d){this.a=d},
eJo:function eJo(d,e){this.a=d
this.b=e},
eJn:function eJn(d){this.a=d},
eJA:function eJA(d,e){this.a=d
this.b=e},
eJB:function eJB(d,e){this.a=d
this.b=e},
eJm:function eJm(d,e){this.a=d
this.b=e},
hnG(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a7().ac(),"project",v],x.N,x.z)},
fGT(d,e,f){var w=0,v=A.j(x.N),u
var $async$fGT=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.S.ao(C.hnG(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGT,v)},
bCo(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fGT(!0,d,e),$async$bCo)
case 4:w=3
return A.b(r.arO(g,d,e.a),$async$bCo)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.S.ao(C.hnG(d,e,null),null))
u="NGMY_WS:"+B.kj.gcz().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCo,v)},
hfy(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h10(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d0(s,"NGMYWSSYNC2|"))return!0
if(J.d0(s,"NGMY_WS:"))return!0
if(J.f1(s,t))return!0
if(J.d0(s,"{"))try{w=B.S.aI(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i6I(d){var w,v,u,t=C.hfy(d)
if(t==null)return null
if(C.h10(t))return t
w=B.a.cK(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.h10(v))return v}u=B.a.cK(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.h10(v))return v}return null},
h1_(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d0(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d0(q,"NGMY_WS:")){v=B.cf.cw(0,B.cI.aJ(J.mG(q,8)))
w=t.a(B.S.aI(0,v,r))}else w=t.a(B.S.aI(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fWv(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bCn(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.arN(t[1]),$async$bCn)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h1_(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h1_(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCn,v)},
h0Z(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lh(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bBV(){var w=0,v=A.j(x.o),u,t
var $async$bBV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gr(),$async$bBV)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h1_(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBV,v)},
hoy(d,e,f,g){return A.bR(B.K,null,new C.fPx(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fPx:function fPx(d,e,f){this.a=d
this.b=e
this.c=f},
ad4:function ad4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eJD:function eJD(d,e){this.a=d
this.b=e},
eJE:function eJE(d,e){this.a=d
this.b=e},
eJF:function eJF(d,e){this.a=d
this.b=e},
eJG:function eJG(d,e){this.a=d
this.b=e},
eJC:function eJC(d){this.a=d},
arK:function arK(d,e,f){this.c=d
this.d=e
this.a=f},
bkc:function bkc(){var _=this
_.c=_.a=_.e=_.d=null},
eJg:function eJg(d,e){this.a=d
this.b=e},
eJh:function eJh(d){this.a=d},
eJi:function eJi(d){this.a=d},
arP:function arP(d){this.a=d},
aE9:function aE9(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eJk:function eJk(d){this.a=d},
eJj:function eJj(d){this.a=d},
hGD(d,e,f,g,h){return new C.NP(h,g,d,e,f,null)},
aIX:function aIX(d,e){this.a=d
this.b=e},
NP:function NP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEb:function aEb(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eK2:function eK2(){},
eJZ:function eJZ(d,e){this.a=d
this.b=e},
eK_:function eK_(d){this.a=d},
eJK:function eJK(d){this.a=d},
eJI:function eJI(d){this.a=d},
eJJ:function eJJ(d){this.a=d},
eJT:function eJT(d,e){this.a=d
this.b=e},
eJQ:function eJQ(d,e){this.a=d
this.b=e},
eJR:function eJR(d,e){this.a=d
this.b=e},
eJS:function eJS(d,e,f){this.a=d
this.b=e
this.c=f},
eJO:function eJO(d,e,f){this.a=d
this.b=e
this.c=f},
eJM:function eJM(d){this.a=d},
eJN:function eJN(d){this.a=d},
eJP:function eJP(d){this.a=d},
eK5:function eK5(d){this.a=d},
eK4:function eK4(d){this.a=d},
eK6:function eK6(d){this.a=d},
eK3:function eK3(d){this.a=d},
eJH:function eJH(d){this.a=d},
eJL:function eJL(d,e){this.a=d
this.b=e},
eK1:function eK1(d,e){this.a=d
this.b=e},
eK0:function eK0(d,e){this.a=d
this.b=e},
eJW:function eJW(d){this.a=d},
eJX:function eJX(d){this.a=d},
eJY:function eJY(d,e){this.a=d
this.b=e},
eJV:function eJV(d,e){this.a=d
this.b=e},
eJU:function eJU(d,e,f){this.a=d
this.b=e
this.c=f},
bwI:function bwI(){},
Aq(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afz(d,e,f){return C.hWc(d,e,f)},
hWc(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afz=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$afz)
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
return A.i($async$afz,v)},
afy(d,e){return C.hWb(d,e)},
hWb(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afy=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afy)
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
return A.i($async$afy,v)},
hUY(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Ss(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzq(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzq=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b1y(q),$async$bzq)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPv(q,!1),$async$bzq)
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
return A.i($async$bzq,v)},
huq(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qX(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qX(p,J.k(u==null?"":u),1,o,q)},
fWv(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.da(s,x.f)
w=A.cD(w,new C.cw_(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a_<J.E>")
r=A.C(new A.a_(w,new C.cw0(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lh(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
i_7(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.ZK
case"female":case"f":return D.ajn
default:return D.xT}},
hkn(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h59(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i_7(v==null?j:J.k(v))
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
l=J.A(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.hX(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i_9(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.MI
case"viewer":return D.ku
default:return D.tO}},
i_a(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gh(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bAG(d,e){return B.a.i(e.toLowerCase())===C.Gh(d,e)&&d.y!==D.ku},
tV(d,e){var w,v=d.y
if(v===D.ku)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gh(d,e))return!0
if(v===D.MI)return!0
v=d.e
return new A.M(v,A.h14(),A.U(v).k("M<1,n>")).t(0,w)},
hZA(d){return J.dG(d,new C.frY()).gM(0)},
fQ6(d){var w=0,v=A.j(x.y),u,t
var $async$fQ6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Az(d),$async$fQ6)
case 3:u=t.qT(f,new C.fQ7(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQ6,v)},
bAp(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Az(d),$async$bAp)
case 3:t=g
if(J.qT(t,new C.fqb(e))){w=1
break}if(C.hZA(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAp,v)},
akd(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.da(n,x.f)
w=A.cD(w,new C.bN4(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a_<J.E>")
m=A.C(new A.a_(w,new C.bN5(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bN6(),x.N)
t=A.C(l,l.$ti.k("ak.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.A(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bi(J.k(r==null?"":r))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.aJ(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.N(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kB(l,w,v,!s,t,m,r,q,p,C.i_9(o==null?null:J.k(o)))},
hkw(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CH(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R9(d),$async$CH)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$CH)
case 4:t=f
w=5
return A.b(t.a5J(0),$async$CH)
case 5:w=6
return A.b(C.fhu(t,l),$async$CH)
case 6:s=f
if(J.cI(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a4(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hg8(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oD(l,n),$async$CH)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hg8(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oD(l,n),$async$CH)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CH,v)},
fhu(d,e){return C.hSr(d,e)},
hSr(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fhu=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a4(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Aq(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.S.aI(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aV(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Aq(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.S.aI(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fWv(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Aq(a9)+"_"+n))
i=C.hUY(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1y(h),$async$fhu)
case 17:g=b1
if(g!=null){i=i.Ss(g)
p=!0}case 16:J.ci(q,i)
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
case 8:J.Rk(q,new C.fhv())
if(p&&J.ad(q)!==0)C.oD(a9,q)
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
return A.i($async$fhu,v)},
bAR(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bAR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.R9(d),$async$bAR)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CH(r),$async$bAR)
case 4:t=p.aV(g)
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
return A.i($async$bAR,v)},
hg8(d){var w,v,u,t
try{w=B.S.aI(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.da(w,x.f)
v=A.cD(v,new C.fdb(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a_<J.E>")
v=A.C(new A.a_(v,new C.fdc(),u),u.k("J.E"))
B.d.b0(v,new C.fdd())
return v}catch(t){v=A.a([],x.D)
return v}},
oD(d,e){return C.i8E(d,e)},
i8E(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oD=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.R9(b2),$async$oD)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oD)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Aq(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.S.aI(0,p,null)),new C.fI4(),a2).fM(0)
a2=J.b6(b3,new C.fI5(),a2).c0(0,new C.fI6())
n=A.dc(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ea(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f1(n,m)?17:18
break
case 17:a5=C.Aq(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a82(l),$async$oD)
case 19:t=21
a5=C.Aq(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.S.aI(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a82(a5==null?null:J.k(a5)),$async$oD)
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
return A.b(C.afy(r,"ngmy_worksheet_item_v3_"+C.Aq(a8)+"_"+m),$async$oD)
case 29:w=30
return A.b(C.afy(r,"ngmy_worksheet_thumb_v3_"+C.Aq(a8)+"_"+m),$async$oD)
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
case 14:case 10:a2=J.cF(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bzq(h),$async$oD)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afz(r,"ngmy_worksheet_thumb_v3_"+C.Aq(a8)+"_"+a4,f),$async$oD)
case 40:g=i.Ss(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afy(r,"ngmy_worksheet_thumb_v3_"+C.Aq(a8)+"_"+a4),$async$oD)
case 41:g=i.Ss(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afy(r,"ngmy_worksheet_thumb_v3_"+C.Aq(a8)+"_"+a4),$async$oD)
case 42:case 34:a4=i.a
w=43
return A.b(C.afz(r,"ngmy_worksheet_item_v3_"+C.Aq(a8)+"_"+a4,B.S.ao(g.ag(),null)),$async$oD)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ci(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afz(r,"ngmy_worksheets_index_v3_"+C.Aq(a8),B.S.ao(q,null)),$async$oD)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.fI7(q))
a4=a3.$ti.k("cQ<1,a5<n,@>>")
a7=A.C(new A.cQ(a3,new C.fI8(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afz(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.S.ao(a0,null)),$async$oD)
case 45:w=46
return A.b(J.htx(r),$async$oD)
case 46:if(a2.gcl(b3)&&J.ad(q)===0){u=!1
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
return A.i($async$oD,v)},
L_(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$L_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CH(d),$async$L_)
case 3:t=g
s=J.cF(t)
r=s.bg(t,new C.fQ5(e))
if(r===-1)s.cj(t,0,e)
else s.n(t,r,e)
u=C.oD(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$L_,v)},
bAD(d,e){var w=0,v=A.j(x.H),u
var $async$bAD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CH(d),$async$bAD)
case 2:u=g
J.nr(u,new C.fsp(e))
w=3
return A.b(C.oD(d,u),$async$bAD)
case 3:return A.h(null,v)}})
return A.i($async$bAD,v)},
Gj(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Gj)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.S.aI(0,i,null)
if(x.j.b(t)){j=J.da(t,x.f)
j=A.cD(j,new C.fuY(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a_<J.E>")
r=A.C(new A.a_(j,new C.fuZ(),s),s.k("J.E"))
B.d.b0(r,new C.fv_())
k=r}}catch(h){}w=4
return A.b(C.fdW(d),$async$Gj)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hSO(k,p,d)
j=A.U(o)
s=j.k("M<1,a5<n,@>>")
s=A.C(new A.M(o,new C.fv0(),s),s.k("ak.E"))
n=B.S.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qm(d,o),$async$Gj)
case 7:case 6:j=j.k("a_<1>")
m=A.C(new A.a_(o,new C.fv1(d),j),j.k("J.E"))
if(m.length!==0)C.aO3(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gj,v)},
fHR(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fHR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qm(d,e),$async$fHR)
case 3:t=J.dG(e,new C.fHS(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aO3(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHR,v)},
a2h(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2h=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a2h)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.S.aI(0,l,null)
if(x.j.b(u)){m=J.da(u,x.f)
m=A.cD(m,new C.fQ0(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a_<J.E>")
s=A.C(new A.a_(m,new C.fQ1(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qf(o,new C.fQ2(e))
if(B.a.i(e.x).length===0&&C.tV(e,d)){m=B.a.i(d.toLowerCase())
p=e.aDl(e.y===D.ku?D.ku:D.tO,m)}else p=e
if(q===-1)J.pw(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.Qm(d,o),$async$a2h)
case 3:w=C.tV(p,d)?4:5
break
case 4:w=6
return A.b(C.aO2(C.Gh(p,d),p),$async$a2h)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2h,v)},
aOe(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gj(d),$async$aOe)
case 2:u=g
t=J.cF(u)
s=A.re(t.eO(u,new C.fs6(e)))
t.bp(u,new C.fs7(e))
w=3
return A.b(C.Qm(d,u),$async$aOe)
case 3:w=s!=null&&C.bAG(s,d)?4:5
break
case 4:w=6
return A.b(C.fdf(e),$async$aOe)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOe,v)},
ahm(d){var w=d.f,v=A.U(w).k("a_<1>")
w=A.C(new A.a_(w,new C.fQc(),v),v.k("J.E"))
return w},
fZF(d,e){var w,v=d.f,u=A.re(new A.a_(v,new C.frD(e),A.U(v).k("a_<1>")))
v=C.ahm(d)
w=A.U(v).k("a_<1>")
v=A.C(new A.a_(v,new C.frE(e,u),w),w.k("J.E"))
B.d.b0(v,new C.frF())
return v},
i_d(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hoC(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.fZF(d,u),new C.fPI(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i0K(d,e){var w
if(e==null||e.length===0)return 1
w=C.fZF(d,e)
if(w.length===0)return 1
return new A.M(w,new C.fvK(),A.U(w).k("M<1,H>")).fd(0,B.Aa)+1},
i8x(d){var w,v=C.ahm(d)
if(v.length===0)return null
w=new A.a_(v,new C.fHL(),A.U(v).k("a_<1>"))
if(!w.gam(0))return w.gI(0)
return B.d.gI(v)},
i_8(d){return A.F(["id",d.a,"name",d.b,"gender",C.hkn(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i0F(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.xT?n:q.c
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
d=q.aDg(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cIF(a1,w,a3.d,a2.y,s,a0,v)},
Az(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$Az=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Az)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.S.aI(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.da(t,x.f)
p=A.cD(p,new C.fuV(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a_<J.E>")
p=A.C(new A.a_(p,new C.fuW(),s),s.k("J.E"))
B.d.b0(p,new C.fuX())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Az,v)},
ah7(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ah7=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tO:D.ku
a7=C.Gh(b2,b3)
w=2
return A.b(C.Az(b1),$async$ah7)
case 2:a8=b5
a9=J.cF(a8)
b0=a9.bg(a8,new C.fHG(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAp(b1,b2),$async$ah7)
case 5:case 4:if(b0===-1){u=b2.aDl(a6,a7)
a9.cj(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.xT?i:l.c
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
s.n(0,m,l.aDg(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tO:D.ku
u=t.yy(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qm(b1,a8),$async$ah7)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aO2(B.a.i(b3.toLowerCase()),u),$async$ah7)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ah7,v)},
hgw(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a7().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("M<1,a5<n,@>>"),k=A.C(new A.M(m,C.hnO(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a7().ac(),"updatedAt",o],r,x.K),"createdAt",s.a7().ac(),"updatedAt",o],r,x.z)},
hgx(d,e){var w=new A.S(Date.now(),0,!1).a7().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("M<1,a5<n,@>>")
u=A.C(new A.M(u,C.hnO(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a7().ac(),"updatedAt",w],x.N,x.z)},
hQr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a4(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akd(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.M(j,A.h14(),A.U(j).k("M<1,n>")).c0(0,new C.fdJ())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tO
else s=B.d.t(t,u)?D.MI:D.ku
return w.aDl(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akd(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.da(q,h)
h=A.cD(h,new C.fdK(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a_<J.E>")
o=A.C(new A.a_(h,new C.fdL(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fdM(),x.N).c0(0,new C.fdN())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tO
else s=B.d.t(t,u)?D.MI:D.ku
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.S(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kB(h,r,p,!m,t,o,l,j,v,s)},
fdW(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fdW=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fe_()
h=x.N
g=x.z
w=7
return A.b(A.iL(A.a([A.lo("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bI),r.$2(A.lo("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bI),"collaborator"),r.$2(A.lo("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bI),"public")],x.cl),x.U),$async$fdW)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.h2(l,o)
J.h2(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.L)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.fdX(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a_<J.E>")
l=A.C(new A.a_(h,new C.fdY(),l),l.k("J.E"))
B.d.b0(l,new C.fdZ())
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
return A.i($async$fdW,v)},
hSO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a4(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fi9(),v).c0(0,new C.fia())
t=A.dc(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gh(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.ku){m=q.e
m=!new A.M(m,A.h14(),A.U(m).k("M<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i0F(l,v)
o=C.Gh(k,w)
p=v.d
s.n(0,u,o===w?k.bbg(p,D.tO):k.bbg(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.b0(j,new C.fib())
return j},
Qm(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Qm)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fkF(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.S.ao(s,null)),$async$Qm)
case 3:return A.h(null,v)}})
return A.i($async$Qm,v)},
aO2(d,e){return C.hXY(d,e)},
hXY(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aO2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lR("family_trees",A.a([C.hgw(e,d)],p),null,B.cH),$async$aO2)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lR("family_trees",A.a([C.hgx(e,d)],p),null,B.cH),$async$aO2)
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
return A.i($async$aO2,v)},
aO3(d,e){return C.hXZ(d,e)},
hXZ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aO3=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("M<1,a5<n,@>>")
m=n.k("ak.E")
l=A.C(new A.M(e,new C.fpv(d),n),m)
r=l
w=7
return A.b(A.lR("family_trees",r,null,B.cH),$async$aO3)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.M(e,new C.fpw(d),n),m)
p=k
w=8
return A.b(A.lR("family_trees",p,null,B.cH),$async$aO3)
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
return A.i($async$aO3,v)},
fdf(d){return C.hPM(d)},
hPM(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fdf=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QK("family_trees",A.F(["id",d],x.N,x.z),null,B.cH),$async$fdf)
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
return A.i($async$fdf,v)},
qX:function qX(d,e,f,g,h){var _=this
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
cw2:function cw2(){},
cw1:function cw1(){},
cw_:function cw_(){},
cw0:function cw0(){},
Hn:function Hn(d,e){this.a=d
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
akc:function akc(d,e){this.a=d
this.b=e},
frY:function frY(){},
fQ7:function fQ7(d){this.a=d},
fqb:function fqb(d){this.a=d},
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
bN8:function bN8(){},
bN7:function bN7(){},
bN4:function bN4(){},
bN5:function bN5(){},
bN6:function bN6(){},
fhv:function fhv(){},
fdb:function fdb(){},
fdc:function fdc(){},
fdd:function fdd(){},
fI4:function fI4(){},
fI5:function fI5(){},
fI6:function fI6(){},
fI7:function fI7(d){this.a=d},
fI8:function fI8(){},
fQ5:function fQ5(d){this.a=d},
fsp:function fsp(d){this.a=d},
fuY:function fuY(){},
fuZ:function fuZ(){},
fv_:function fv_(){},
fv0:function fv0(){},
fv1:function fv1(d){this.a=d},
fHS:function fHS(d){this.a=d},
fQ0:function fQ0(){},
fQ1:function fQ1(){},
fQ2:function fQ2(d){this.a=d},
fs6:function fs6(d){this.a=d},
fs7:function fs7(d){this.a=d},
fQc:function fQc(){},
frD:function frD(d){this.a=d},
frE:function frE(d,e){this.a=d
this.b=e},
frF:function frF(){},
fPI:function fPI(d){this.a=d},
fvK:function fvK(){},
fHL:function fHL(){},
fuV:function fuV(){},
fuW:function fuW(){},
fuX:function fuX(){},
fHG:function fHG(d){this.a=d},
fdJ:function fdJ(){},
fdK:function fdK(){},
fdL:function fdL(){},
fdM:function fdM(){},
fdN:function fdN(){},
fe_:function fe_(){},
fe0:function fe0(d){this.a=d},
fdX:function fdX(d){this.a=d},
fdY:function fdY(){},
fdZ:function fdZ(){},
fi9:function fi9(){},
fia:function fia(){},
fib:function fib(){},
fkF:function fkF(){},
fpv:function fpv(d){this.a=d},
fpw:function fpw(d){this.a=d},
cw3:function cw3(d,e){this.a=d
this.b=e},
cw4:function cw4(d,e){this.a=d
this.b=e},
aGe:function aGe(d,e,f){this.a=d
this.b=e
this.c=f},
b7R:function b7R(){this.b=this.a=0},
b7Q:function b7Q(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
buY:function buY(){},
wH(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcd()+"/"+w.gct()+"/"+w.gcg()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gnd()),2,"0")+":"+B.a.aT(B.o.u(w.gGa()),2,"0")},
hGA(){var w,v=$.ps(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"WS"+B.d.h_(u)},
arL(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arL)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bI),$async$arL)
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
return A.i($async$arL,v)},
arM(d){return C.hGB(d)},
hGB(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arM=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arM)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hF("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,B.cH,null),$async$arM)
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
return A.i($async$arM,v)},
arO(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$arO=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arO)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hGA()
w=4
return A.b(C.arL(),$async$arO)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aG(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cS.gcz().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=5
return A.b(C.arM(r),$async$arO)
case 5:u=new A.a_L("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arO,v)},
arN(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$arN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$arN)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arL(),$async$arN)
case 4:q=f
p=J.a4(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a4(o)
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
try{s=B.cf.cw(0,B.cI.aJ(t))}catch(h){r=A.aa(h)
$.am.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dO(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a7().ac())
p.n(q,i,m)}w=5
return A.b(C.arM(q),$async$arN)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arN,v)},
haZ(){var w=new A.S(Date.now(),0,!1).a7()
return"wst_"+(1000*w.a+w.b)+"_"+B.cG.aA(999999)},
hGC(d){var w,v,u,t,s,r,q
try{w=A.afY(d)
if(w==null)return d
v=w
if(J.L5(v)>960||J.L4(v)>960){s=v
r=J.L5(v)>=J.L4(v)?960:null
v=A.afX(s,J.L4(v)>J.L5(v)?960:null,B.O3,r)}s=v
u=A.alA(82).SP(s,B.yD)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cfr(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cfr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hGC(e)
$.cfn.n(0,s,t)
u=C.bCq(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfr,v)},
b1y(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1y=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d0(l,"data:image")){u=null
w=1
break}t=4
r=J.f1(l,",")?B.d.gal(J.lq(l,",")):l
q=B.cI.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.haZ()
w=7
return A.b(C.cfr(p,q),$async$b1y)
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
return A.i($async$b1y,v)},
cfo(d){var w=0,v=A.j(x.T),u,t,s
var $async$cfo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cfq(s),$async$cfo)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcz().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfo,v)},
a82(d){var w=0,v=A.j(x.H),u,t
var $async$a82=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hnH(d)
if(t==null){w=1
break}$.cfn.W(0,t)
w=3
return A.b(C.bCp(t),$async$a82)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a82,v)},
bCq(d,e){return C.i6L(d,e)},
i6L(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCq=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMZ
w=7
return A.b(n==null?$.aMZ=I.fYE():n,$async$bCq)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mH(r,"thumbs","readwrite")
B.iJ.mk(J.mF(p,"thumbs"),q,l)
w=8
return A.b(J.pv(p),$async$bCq)
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
return A.i($async$bCq,v)},
bCp(d){return C.i6J(d)},
i6J(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCp=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMZ
w=7
return A.b(o==null?$.aMZ=I.fYE():o,$async$bCp)
case 7:r=f
q=J.mH(r,"thumbs","readwrite")
B.iJ.FG(J.mF(q,"thumbs"),m)
w=8
return A.b(J.pv(q),$async$bCp)
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
return A.i($async$bCp,v)}},D,Ak,Al,A0,Am,An,Ao,I
J=c[1]
A=c[0]
B=c[2]
A1=c[77]
N=c[237]
R=c[152]
A2=c[221]
G=c[202]
F=c[31]
E=c[212]
A3=c[113]
A4=c[223]
A5=c[111]
A6=c[190]
S=c[99]
T=c[102]
A7=c[220]
A8=c[37]
M=c[219]
A9=c[80]
H=c[88]
Aa=c[159]
Ab=c[118]
U=c[162]
V=c[233]
W=c[191]
Ac=c[182]
Ad=c[194]
X=c[189]
Ae=c[65]
Af=c[238]
Ag=c[71]
Y=c[206]
Ah=c[30]
Ai=c[112]
K=c[184]
Aj=c[195]
Z=c[236]
A_=c[229]
O=c[104]
P=c[98]
L=c[136]
Q=c[69]
C=a.updateHolder(c[6],C)
D=c[232]
Ak=c[70]
Al=c[200]
A0=c[235]
Am=c[234]
An=c[103]
Ao=c[56]
I=c[54]
C.anJ.prototype={}
C.aXU.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bfD(),f=h.x!=null&&h.yZ(i).length===0
if(h.x!=null)w=f?B.aZ:B.bz
else w=h.gTr()?B.bz:B.dU
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bfg,B.q,1)
s=x.p
r=A.p(i,A.w(A.a([A.p(i,D.eMX,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h8,i,i,i),B.R,D.ffj,B.at,A.d(C.wH(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fbe,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b_v,i,i,i,i,B.YK,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.h_E(h.d)
o=A.p(B.A,C.aXT(A.fy4(h.e,n),30),B.f,i,i,new A.o(B.lK,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f6F,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.w(A.a([o,B.P,n,B.bD,D.ffB,B.ac,A.p(i,A.w(A.a([D.fuZ,B.bD,A.d(A.AB(h.c),i,i,i,i,i,i,D.f1H,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f9,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.ahs,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.q,1)
l=j.aPZ("Original due",C.wH(h.r,!1))
n=j.aPZ("Current due",C.wH(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.R,A.p(i,A.w(A.a([l,B.P,n,B.R,A.p(i,A.d(h.gaK9(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AY,i,i,1/0),B.R,j.cef(),B.P,j.c1L(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bm,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.R,A.p(i,A.w(A.a([D.fgx,B.at,A.d(q,i,i,i,i,i,i,D.f5X,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bm,i,i,1/0)],s))}if(h.gaEW()){q=A.m(14)
o=A.I(B.cr,B.q,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.w(A.a([D.fwg,B.P,A.bw(A.m(12),A.el(new A.a7(1/0,88,A.b3(i,i,i,new A.VA(h.ax,B.M,D.eQK,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Fd,i,i,i)],s))}p.push(B.aB)
p.push(D.fov)
return A.p(i,A.w(A.a([r,new A.D(B.ahv,A.w(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.O,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aPZ(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a81,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f2G,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cef(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8T(B.dU,u,"Not paid yet")
w=t.yZ(null).length
v=w===0?B.aZ:B.bz
return this.a8T(v,u,C.wH(t.x,!0))},
c1L(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8T(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8T(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a81,u,u,u)
v=A.U(d).k("M<1,hm>")
v=A.C(new A.M(d,new C.c1e(),v),v.k("ak.E"))
return A.w(A.a([w,B.am,A.bW(B.bA,v,B.bq,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8T(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a81,w,w,w),1),new A.dq(1,B.co,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dN,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.ba_.prototype={
a4(d,e){new A.VA(this.b,B.M,e,!0,3.5,null).a4(d,e)},
av(d){return d.b!==this.b}}
C.anQ.prototype={
T(){return new C.aC5(A.a([],x.bp))},
ge1(){return this.c}}
C.aC5.prototype={
a_(){this.a1()
this.Ix()},
Ix(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ix=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1x(t.a.c),$async$Ix)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dFu(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Ix,v)},
aRW(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.bs:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bs:B.bl).j(0.22)
w=A.m(10)
return A.bs(v,new A.b4(4,r,new A.ay(u,1,B.q,-1)),v,B.bm,v,v,v,v,!0,new A.b4(4,w,new A.ay((this.a.d.a?B.bs:B.bl).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aY8),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aRV(d){return this.aRW(d,null)},
P7(d){return this.chP(d)},
chP(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$P7=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gw:B.eI
w=7
return A.b(new A.hY().C1(72,900,900,n),$async$P7)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fl(),$async$P7)
case 8:p=f
n=B.cS.gcz().aJ(p)
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
if(n!=null)n.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$P7,v)},
b_v(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.m(10),n=A.I((q?B.bs:B.bl).j(0.18),B.q,1)
if(d)q=B.cY
else q=s.a.d.a?B.bs:B.bl
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.az,r,r,r,r,r,r,r,r,12.5,r,r,B.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bs:B.bl
t=x.p
u=A.E(A.w(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fx(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cD,s.a.d.a?B.bs:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jF,D.br9,r,r,r)},
D0(d){return this.byT(d)},
byS(){return this.D0(null)},
byT(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D0=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.as(new A.bb(a4,B.b5,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.k0(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ab(p,2)}o=new A.as(new A.bb(a4,B.b5,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.bb(a4,B.b5,B.aN),s)
if(a3){a4=new A.S(Date.now(),0,!1).bR(6048e8)
m=A.c1(a4.gcg(),a4.gcd(),a4.gct(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcg(),a4.gcd(),a4.gct(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bo(a4,!0,x.cT)
i=a3?null:A.h_E(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.w5?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hT(B.w.j(0.55),!0,"Dismiss",a4,new C.dFd(),new C.dFe(a2,t,a5,r,new C.dFf(a2,t),o,n,j),B.eH,!0,x.y),$async$D0)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d5(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.J(x.q).f.U(D.eX5)
w=1
break}a0=a2.d
if(a0==null){t.c.J(x.q).f.U(D.eVL)
w=1
break}a1=A.fy4(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.w5?"male":"female"
w=7
return A.b(A.ahl(a3,A.h7I(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$D0)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.w5?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a9(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcg(),a3.gcd(),a3.gct(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcg(),a4.gcd(),a4.gct(),0,0,0,0,0)))a5.cKO(a2.a)
w=8
return A.b(A.ahl(t.a.c,a5),$async$D0)
case 8:case 5:w=9
return A.b(t.Ix(),$async$D0)
case 9:case 1:return A.h(u,v)}})
return A.i($async$D0,v)},
aSy(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aQ
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bs:B.bl).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aXT(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aQ:B.az
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b8,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ah)},
RO(d){return this.czq(d)},
czq(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$RO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hT(B.w.j(0.55),!0,"Dismiss",s,new C.dFx(),new C.dFy(t,d),B.hx,!0,x.y),$async$RO)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahl(t.a.c,d),$async$RO)
case 7:w=8
return A.b(t.Ix(),$async$RO)
case 8:case 1:return A.h(u,v)}})
return A.i($async$RO,v)},
NM(d,e){return this.bJG(0,e)},
bJG(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l2(s,"Cancel","Delete",e.b+" \xb7 "+A.AB(e.c)+" will be removed from this device.","Delete this debt?"),$async$NM)
case 3:if(!g){w=1
break}w=4
return A.b(C.fsd(t.a.c,e.a),$async$NM)
case 4:w=5
return A.b(t.Ix(),$async$NM)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NM,v)},
aeo(d){return this.cbI(d)},
cbI(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bR(B.K,null,new C.dFr(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aeo)
case 2:return A.h(null,v)}})
return A.i($async$aeo,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e8Y
w=J.dG(m.d,new C.dFz())
v=A.C(w,w.$ti.k("J.E"))
w=J.dG(m.d,new C.dFA())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cJ(v,0,new C.dFB())
w=A.m(18)
s=m.a.d.a
r=s?D.cot:D.axP
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.q,1)
s=A.p(l,D.bQQ,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.av,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.az,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.m(12),A.aL(!1,A.m(12),!0,D.e8m,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dFC(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ah)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cvE("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AB(t)
r=A.a([A.p(l,A.w(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b5E(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.ahp,l,l,l),B.aB],p)
if(J.cn(m.d)){w=m.a.d.a
s=w?B.e_:B.c
q=A.m(18)
o=A.I((w?B.bs:B.bl).j(0.12),B.q,1)
n=A.p(l,D.bLM,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.az,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.w(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.btz,l,l,1/0))}else{w=m.gch7()
s=A.C(new A.M(v,w,A.U(v).k("M<1,r>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bvd,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.M(u,w,A.U(u).k("M<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.w(r,B.aj,l,B.e,B.j,0,B.p)},
b5E(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bs:B.bl).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aQ:B.az
return A.p(u,A.w(A.a([q,B.bD,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ej,u,u,u)},
cvE(d,e){return this.b5E(!1,d,e)},
ch8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yZ(j).length,h=d.beQ()
if(d.x!=null){w=d.yZ(j).length
v=w===0?B.cY:B.bz}else if(d.gTr())v=B.bz
else{if(h)w=B.cY
else w=k.a.d.a?B.bs:B.bl
v=w}if(d.x!=null){w=d.yZ(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wH(u,!1)}else{u.toString
t="Paid "+C.wH(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wH(w,!1)+" \xb7 "+i+" missed":"Due "+C.wH(w,!1)}w=k.a.d.a?B.e_:B.c
u=A.m(18)
if(d.gTr()&&d.x==null)s=B.bz.j(0.35)
else s=(k.a.d.a?B.bs:B.bl).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bo:B.lK
o=A.I(d.gTr()&&d.x==null?B.bz.j(0.45):B.cY.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.h_E(d.d)
o=A.p(B.A,A.dd(C.aXT(A.fy4(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.az
m=x.p
n=A.a([new A.dq(1,B.co,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaEW())B.d.v(n,A.a([B.ec,A.X(B.N8,B.cY.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cV,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.N,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.AB(d.c)
l=k.a.d.a?B.aQ:B.az
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(V.ah9,A.B(A.a([o,B.bd,p,B.ab,A.w(A.a([n,B.bD,A.X(B.ey,(k.a.d.a?B.bs:B.bl).j(0.5),j,j,j,18)],m),B.dA,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dFt(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ah),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.ua.prototype={}
C.akb.prototype={
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
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aC(a0,A.p(a0,A.X(B.cD,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a7))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iY,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aue,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Fv,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f6(m,A.B(l,B.m,a0,B.e,B.O,0,a0,a0),B.f,B.ei)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bqn,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bn,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fr,A.w(a2,u,a0,B.e,B.O,0,B.p),a0),1))
n.push(D.eRv)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vo,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lk,A.w(a2,B.m,a0,B.e,B.O,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hm,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.brz,a0,a0,a0,a0)}}
C.aTH.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bn:B.cF,q,B.N,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cV,n],m)
if(p.z)o.push(new A.D(B.vl,n,q))
return new A.D(B.da,A.w(o,B.m,q,B.e,B.O,0,B.p),q)}}
C.So.prototype={
T(){return new C.bdC()}}
C.bdC.prototype={
gbXN(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e8T,D.e8Z],l)
for(w=0;w<8;++w){v=D.a1I[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Gh:B.BG
q=t===s
r=A.X(r,q?B.eB:B.c2,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.y(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bC(1,B.bh,new A.y(v.c,n,A1.Df,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.ay(B.eB,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aC(n,new A.D(B.eC,A.w(A.a([new A.D(B.ms,new A.cm(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DL(!0,new C.akb(v,q.d,q.e,new C.d5i(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d5j(o,v),n,n,n,n,n,n,!1,B.a7))}k.push(new A.D(D.brS,A.bG(D.fBC,new C.d5k(o,d),A.bn(B.b6,n,n,n,n,B.oi,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bl(!0,new A.cT(new A.aY(0,1/0,0,m.a.b*0.9),A.cw(k,n,D.bw4,n,n,B.ag,!0),n),!0,!1,B.af,!0,!0)}}
C.nc.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a7().ac()],x.N,x.z)},
bbs(d,e,f){return new C.nc(this.a,e,d,f)}}
C.Hm.prototype={
wh(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hm(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aDa(d){var w=null
return this.wh(w,w,w,w,w,d,w,w,w,w,w,w)},
cGC(d){var w=null
return this.wh(w,w,w,w,d,w,w,w,w,w,w,w)},
bbq(d,e,f){var w=null
return this.wh(d,w,w,w,w,w,w,w,e,w,f,w)},
cHg(d){var w=null
return this.wh(w,w,w,w,w,w,d,w,w,w,w,w)},
cHp(d){var w=null
return this.wh(w,w,w,w,w,w,w,w,w,d,w,w)},
cGA(d){var w=null
return this.wh(w,w,w,d,w,w,w,w,w,w,w,w)},
cHr(d){var w=null
return this.wh(w,w,w,w,w,w,w,w,w,w,w,d)},
cGx(d){var w=null
return this.wh(w,w,d,w,w,w,w,w,w,w,w,w)},
cGs(d){var w=null
return this.wh(w,d,w,w,w,w,w,w,w,w,w,w)},
Fy(d){var w=null
return this.wh(w,w,w,w,w,w,w,d,w,w,w,w)},
cHz(d,e,f,g,h,i,j,k,l,m,n){return this.wh(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cEe(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bN3(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Cn.ged(D.Cn))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a3k)
q=l.$2("frame",D.a2I)
l=l.$2("texture",D.a2D)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cHz(p,u,t,q,r,A.qN(d.h(0,"ribbon"))?A.FT(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.YW.prototype={
T(){return new C.az9(A.a([],x.I),D.MH)},
ge1(){return this.c}}
C.az9.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zp(0,1)
w=$.aw()
v.z=new A.as(B.as,w)
v.Q=new A.as(B.as,w)
v.kV()
w=v.a
C.bAO(w.c,w.d).bz(new C.d5Z(v),x.fL)},
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
kV(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KA(s.c,s.d),$async$kV)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d5N(t,r))
t.auZ()
case 1:return A.h(u,v)}})
return A.i($async$kV,v)},
garz(){var w,v=this
if(!J.cn(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
auZ(){var w,v,u=this.garz(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
ca8(d){this.m(new C.d5K(this,d))
this.auZ()},
N7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$N7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nc(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aPR(r.c,r.d,s),$async$N7)
case 3:w=4
return A.b(t.kV(),$async$N7)
case 4:if(t.c==null||J.cn(t.d)){w=1
break}q=J.qf(t.d,new C.d5l(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d5m(t,p))
t.auZ()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B2(p+1,B.ct,B.kS),$async$N7)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$N7,v)},
AI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.garz()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aPR(o.c,o.d,new C.nc(s,r,q,new A.S(p,0,!1))),$async$AI)
case 3:w=4
return A.b(t.kV(),$async$AI)
case 4:if(t.c==null){w=1
break}t.m(new C.d5O(t))
case 1:return A.h(u,v)}})
return A.i($async$AI,v)},
NN(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.garz()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.d5u(r),s,null,!0,!0,x.y),$async$NN)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAz(s.c,s.d,r.a),$async$NN)
case 4:t.m(new C.d5v(t))
w=5
return A.b(t.kV(),$async$NN)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Tu(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
yi(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AI(),$async$yi)
case 5:case 4:if(t.c==null){w=1
break}w=J.cI(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.QD(s,r.r,o,p,q),$async$yi)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hoa(s,r.x,r.r),$async$yi)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KA(s.c,s.d),$async$yi)
case 10:l=e
for(s=n.d,r=J.cF(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.nc(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AL(r.c,r.d,l),$async$yi)
case 11:w=12
return A.b(t.kV(),$async$yi)
case 12:r=t.c
if(r==null){w=1
break}r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yi,v)},
a06(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a06=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AI(),$async$a06)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyg(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.yK,new C.d5L(t),new C.d5M())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.ms("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gR(o)
p.push(new F.ms(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h1g(o,new F.ri(s,r,"",p,new F.ut(q.d,null,null,null,null,"","","")),null),$async$a06)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a06,v)},
Nv(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Nv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AI(),$async$Nv)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bR(D.acK,null,new C.d5q(t),s,!0,!0,!0,P.a6f,!1,!1,x.N),$async$Nv)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cGC(r)
t.m(new C.d5r(t,q))
s=t.a
w=7
return A.b(C.Rc(s.c,s.d,q),$async$Nv)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nv,v)},
WD(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(D.acK,null,new C.d5w(t),r,!0,!0,!0,P.a6f,!1,!1,x.e),$async$WD)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d5x(t,s))
r=t.a
w=4
return A.b(C.Rc(r.c,r.d,s),$async$WD)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B2(0,B.dV,B.oJ)
case 1:return A.h(u,v)}})
return A.i($async$WD,v)},
bOX(d){var w=d.bU(),v=B.a.aT(B.o.u(w.gcd()),2,"0"),u=B.a.aT(B.o.u(w.gct()),2,"0")
return""+w.gcg()+"-"+v+"-"+u},
gyg(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bX1()
if(r.e)w=D.abA
else if(J.cn(r.d)){w=r.y
v=r.gyg(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f19,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A_.aiq,new C.Ye(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kn.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aC(q,A.p(q,D.eMK,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dQ.j(0.45),B.J,18)],x.V),E.vW,B.n),q,q,q,q,B.YU,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcDl(),q,q,q,q,q,q,!1,B.a7))
w.push(B.R)
w.push(A.hi(D.bI0,D.fB5,r.gaLT(),q))
B.d.v(u,w)}w=A.av(A.c9(A.w(u,B.m,q,B.e,B.O,0,B.p),B.r,q,B.y,q,B.ex,q,q,B.ag),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kn.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.N,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dR:B.A8
u=A.w(A.a([new A.D(D.bsT,w,q),A.E(A.IH(v,new C.d5X(r),J.ad(r.d)+1,q,r.gca7(),u,B.aO),1),r.bBM()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c7(q,D.ae5,new A.an(B.W,q,B.b0,B.r,A.a([D.aL1,A.bl(!0,A.w(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bX1(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cI(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JG(B.dX,"AI",h.gbzF(),!0))
if(h.a.f)f.push(new C.JG(B.ni,"Cover",h.gbKf(),!1))
if(h.a.f)f.push(new C.JG(B.ym,"Header",h.gbFd(),!1))
if(J.cI(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JG(B.u2,"Print",h.gcj8(),!1))
if(h.a.f&&J.cI(h.d)&&h.r>=0){v=h.w
u=v?B.hn:B.jo
t=v?"Save":"Edit"
f.push(new C.JG(u,t,v?h.gcpo():new C.d5H(h),!1))}if(h.a.f)f.push(new C.JG(B.hz,"Add page",h.gaLT(),!1))
v=C.hkm(h.y.Q)
u=h.gyg(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dpU
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jV.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.kn,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bp(k,k,k,k),g,new A.a8(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kn.j(0.85)
p.push(new A.bC(1,B.bh,A.aC(B.c7,A.w(A.a([k,B.bD,new A.y(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.O,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a7),g))}return new C.akb(v,u,t+" \xb7 "+s+" "+r,new C.d5I(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AI(),$async$zL)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=F.a1M(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.d5n(t,p),s,null,!0,!0,x.N),$async$zL)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yi(),$async$zL)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DB(),$async$zL)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fb("Swahili (Kiswahili)",!0),$async$zL)
case 18:w=16
break
case 17:w=19
return A.b(t.cA4(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zL)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zL,v)},
Yy(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jV.j(0.3),B.q,1),r=x.p
return new A.D(B.cB,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vW,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.w(A.a([A.d(f,w,w,w,w,w,w,A9.Ty,w,w,w),A.d(g,w,w,w,w,w,w,A3.Ts,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d5J(d,h),w,w,w,w,w,w,w),w)},
DB(){return this.bOr()},
bOr(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DB=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.d5A(r),a7,null,!0,!0,x.ei),$async$DB)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eS("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cb(null,null,!1,null,new C.d5B(o),a7,null,!0,!0,x.H).fh(new C.d5C(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.ci(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yK[a1]
J.ci(j,i.a)}w=8
return A.b(C.agv(a0,a7,new C.d5D(o),d,l,e,j),$async$DB)
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
if(l!=null&&a6.a)A.a6(l,!0).eN()
l=o
l.shY($.aw())
J.aQh(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.J(x.q).f
j=n
l.U(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcl(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bbs(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AL(j.c,j.d,l),$async$DB)
case 11:w=12
return A.b(r.kV(),$async$DB)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yK[a1].a)
a5=l.cEe(j,12,a7)
l=r.a
w=15
return A.b(C.Rc(l.c,l.d,a5),$async$DB)
case 15:if(r.c!=null)r.m(new C.d5E(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B2(0,B.dV,B.oJ)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.J(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b2(a3?A.cqw("Undo",new C.d5F(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ef,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DB,v)},
Fb(d,e){return this.cA5(d,e)},
cA4(d){return this.Fb(d,!1)},
cA5(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fb=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eS("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cb(null,null,!1,null,new C.d5Q(a0),k,null,!0,!0,x.H).fh(new C.d5R(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ci(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1Z(m,new C.d5S(a0)),$async$Fb)
case 10:w=8
break
case 9:w=11
return A.b(C.bCh(new C.d5T(a0),m,a2),$async$Fb)
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
if(o!=null&&f.a)A.a6(o,!0).eN()
o=a0
o.shY($.aw())
J.aQh(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.J(x.q).f
k=q
o.U(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bbs(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AL(k.c,k.d,o),$async$Fb)
case 12:w=13
return A.b(r.kV(),$async$Fb)
case 13:o=r.c
if(o==null){w=1
break}o=o.J(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(A.cqw("Undo",new C.d5U(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fb,v)},
bBM(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d5o(v):u
r=A.aH(u,u,u,u,A.X(D.bDG,s?D.kn:B.b1,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cI(v.d)&&!v.w&&v.r>=0)s=A.hi(A.X(B.vA,B.ES,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.ES,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbJP(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kn.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d5p(v):u
return A.bl(!0,new A.D(D.bsH,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.ey,t<J.ad(v.d)?D.kn:B.b1,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.Z_.prototype={
T(){return new C.bdX(new A.as(B.as,$.aw()))}}
C.bdX.prototype={
ga1e(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbNa(){var w,v=this.ga1e()
A:{if("cover"===v){w=D.cUH
break A}if("book"===v){w=D.cQw
break A}w=D.dii
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jV.j(0.5),n=x.p,m=A.B(A.a([D.dpV,B.av,D.by5,A.aH(q,q,q,q,B.lr,q,q,q,new C.d7J(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j6(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d7K(r),r.ga1e()==="page",q,q,q,q))
if(r.a.d)l.push(A.j6(q,q,q,D.fvN,q,new C.d7L(r),r.ga1e()==="book",q,q,q,q))
l.push(A.j6(q,q,q,D.fj8,q,new C.d7M(r),r.ga1e()==="cover",q,q,q,q))
l=A.bW(B.bA,l,B.bq,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kI,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dn,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbNa(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mI(q,B.c.j(0.08),new A.y(s,q,B.J_,q,q,q,q,q,q,q,q,q),B.hE,new C.d7N(r,s),q,q,q,q))}return A.eJ(q,E.AE,A.c9(A.w(A.a([m,B.R,D.fz0,B.am,l,B.ac,k,B.P,A.bW(B.bA,w,B.bq,6,6),B.aB,A.dn(D.bHY,D.fzO,new C.d7O(r,d),A.bn(B.b6,q,q,q,q,B.oi,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.at,D.fu4],n),B.F,q,B.e,B.O,0,B.p),B.r,q,B.y,q,B.fB,q,q,B.ag),q,q,q,D.ai8,B.d0,q,new A.b7(p,new A.ay(o,1.4,B.q,-1)),q)}}
C.YY.prototype={
T(){return new C.aza(A.a([],x.Y))},
ge1(){return this.c}}
C.aei.prototype={}
C.aza.prototype={
a_(){this.a1()
this.kV()},
kV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QG(p.c,p.d),$async$kV)
case 3:o=e
n=A.a([],x.Y)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bAO(r.c,q),$async$kV)
case 6:j=e
i=J
w=7
return A.b(C.KA(t.a.c,q),$async$kV)
case 7:m.push(new l.aei(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d6d(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kV,v)},
b6P(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
PO(d,e){return this.cbG(0,e)},
cbG(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$PO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).ck(A.e8(new C.d6c(u,e),!0,null,x.y)),$async$PO)
case 2:t=g
w=3
return A.b(u.kV(),$async$PO)
case 3:if(t===!0&&u.c!=null)u.c.J(x.q).f.U(D.aOu)
return A.h(null,v)}})
return A.i($async$PO,v)},
Fe(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.J(x.q).f.U(D.aOq)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afQ(s.c,s.d),$async$Fe)
case 5:q=e
w=6
return A.b(t.kV(),$async$Fe)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.PO(0,B.d.hm(t.d,new C.d6h(q))),$async$Fe)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QD(p,s.f,r,n,o),$async$Fe)
case 10:m=e
w=11
return A.b(t.kV(),$async$Fe)
case 11:if(m&&t.c!=null)t.c.J(x.q).f.U(D.aOu)
case 1:return A.h(u,v)}})
return A.i($async$Fe,v)},
Pi(d,e){return this.cn6(0,e)},
cn6(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.d6g(t,e),s,null,!0,!0,x.y),$async$Pi)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2b(s.c,s.d,e.a),$async$Pi)
case 4:w=5
return A.b(t.kV(),$async$Pi)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pi,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bBP(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jV.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aC(n,new A.fH(0.7142857142857143,A.p(n,A.w(A.a([D.dpW,B.ac,D.e81,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kn.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b8,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcDh(),n,n,n,n,n,n,!1,B.a7))}w=A.m(22)
v=A.I(E.jV.j(0.85),B.q,1.6)
s=A.aC(n,A.p(n,D.bPE,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jV.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d6i(d),n,n,n,n,n,n,!1,B.a7)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jV.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.bd,D.bys,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.f0e,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h8,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bVp,B.n),n,n,n,Am.Ma,D.bqP,n,n,n)
if(o.e)k=D.abA
else k=k.length===0?D.b4x:A.cq(new C.d6j(k))
return A.c7(n,D.ae5,new A.an(B.W,n,B.b0,B.r,A.a([D.aL1,A.bl(!0,A.w(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bBP(d){var w,v,u=this,t=null,s=u.b6P(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f6(B.A,new A.a7(300,420,new C.Ye(d.b,s,r,t),t),B.f,B.du),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aC(t,A.p(t,D.bOX,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b1,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d6a(u,d),t,t,t,t,t,t,!1,B.a7),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.f_P,t,t,t)
v=r===1?"page":"pages"
return A.aC(t,A.w(A.a([new A.fH(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kn.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d6b(u,d),t,t,t,t,t,t,!1,B.a7)}}
C.JG.prototype={}
C.Ye.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.yK,new C.cEO(m),new C.cEP()),j=m.c,i=D.Cn.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lZ:B.b8
v=new C.cEQ(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e5l,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bbc(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.air,8,0.85,2.2),v.$4(D.bvw,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.air,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.D(D.bvs,A.b3(l,l,l,new C.bb3(h,l),B.au),l),0,0,0))
r=A.X(D.awT[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aue,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.D(D.bvX,A.w(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aG9(l),D.eQD),l,l,l,46,0,l))
return A.p(l,A.bw(D.aag,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aag,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbc.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eM()
f.dC(11)
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
h=new A.aO(k.r,B.ao,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bF())
k=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbL().a.snapshot()
o.drawPath((h.e=new A.cC(k)).a,r)
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
av(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bb3.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bQ
for(w=e.a,v=e.b,v=[D.eHL,new A.cA([w,0,-1,1]),new A.cA([0,v,1,-1]),new A.cA([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aO(l,B.ao,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.H()
s=n.gbL().a.snapshot()
w.drawPath((n.e=new A.cC(s)).a,m)
m.delete()
s=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
av(d){return!d.b.A(0,this.b)}}
C.ub.prototype={}
C.Yw.prototype={
T(){return new C.bba()}}
C.bba.prototype={
go4(){var w=this.d
return w===$?this.d=this.a.c:w},
gyg(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b5,B.aN),$.aw())}return v},
gaAn(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b5,B.aN),$.aw())}return v},
gaq7(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b5,B.aN),$.aw())}return v},
q(){var w=this,v=w.gyg(0),u=v.S$=$.aw()
v.P$=0
v=w.gaAn()
v.S$=u
v.P$=0
v=w.gaq7()
v.S$=u
v.P$=0
w.a2()},
aqK(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j6(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cYf(this,f,u),e===u,s,s,s,s))}return A.bW(B.bA,r,B.bq,6,8)},
awq(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kH,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go4(),a0=f.gyg(0),a1=a0.a.a,a2=f.gaAn(),a3=a2.a.a,a4=f.gaq7(),a5=d.bbq(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f6(B.A,new A.a7(270,370,new C.Ye(a5,d,f.a.e,e),e),B.f,B.du),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.awq("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYE(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.awq("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYF(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yK[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b1
q=r.a===q
o=new A.ay(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aC(e,A.w(A.a([p,B.cV,new A.y(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.N,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYG(f,t),e,e,e,e,e,e,!1,B.a7))}v=A.bW(B.bA,v,B.bq,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aT(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eB:B.K,2,B.q,-1)
q.push(A.aC(e,A.p(e,A.X(D.awT[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYH(f,n),e,e,e,e,e,e,!1,B.a7))}q=A.bW(B.bA,q,B.bq,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.awq("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYI(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mN,e,e,e)
m=A.a([],w)
for(l=D.Cn.gdL(D.Cn),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eB:B.b1
g=r.e===i
o=new A.ay(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aC(e,A.w(A.a([j,B.bD,new A.y(i,e,new A.G(!0,h,e,e,e,e,10,B.N,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.O,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYJ(f,k),e,e,e,e,e,e,!1,B.a7))}m=A.bW(B.bA,m,B.bq,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mN,e,e,e)
k=f.go4()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bl(!0,new A.cT(new A.aY(0,1/0,0,a1.a.b*0.92),A.cw(A.a([D.fty,B.ac,d,B.aR,a0,B.R,a2,B.aB,D.fzA,B.P,v,B.aB,D.ftH,B.P,q,B.aB,a4,B.aB,p,B.P,m,B.aB,l,A.kY(e,9,""+B.k.V(f.go4().f),36,18,new C.cYK(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mN,e,e,e),B.am,f.aqK(D.a3k,f.go4().r,new C.cYL(f),D.dlt),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mN,e,e,e),B.am,f.aqK(D.a2I,f.go4().w,new C.cYM(f),D.dly),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mN,e,e,e),B.am,f.aqK(D.a2D,f.go4().x,new C.cYO(f),D.dmZ),B.am,A.iE(e,B.b6,e,B.af,e,new C.cYP(f),e,e,e,D.fo1,f.go4().z),B.by,A.bG(D.fso,new C.cYQ(f,a6),A.bn(B.b6,e,e,e,e,B.oi,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,An.Mm,e,e,B.ag,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aG9.prototype={
a4(d,e){var w,v,u,t=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
t.F(new A.b5(0,0))
w=e.a
t.F(new A.ap(w,0))
v=e.b
t.F(new A.ap(w,v))
t.F(new A.ap(w/2,v-12))
t.F(new A.ap(0,v))
t.F(new A.bF())
u=A.N()
u.sar(D.bW4.aw(0,new A.a9(0,0,0+w,0+v)))
d.aP(t,u)},
av(d){return!1}}
C.bgq.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.sar(D.bV5.aw(0,new A.a9(0,0,a3,a4)))
a5.aZ(new A.a9(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eM()
u.dC(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cUG[u.aA(9)]
j=u.aA(14)
J.by(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.bx(i,B.he)
g=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sar(new A.a8(B.a3,B.a8,B.x,A.a([f,k,e],t),a0,a0).aw(0,i))
d=g.H()
w.drawRRect(A.er(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jV.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c_(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jV.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c_(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aA(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.sar(D.bUs.aw(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c_(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.js
d=p.H()
w.drawRect(A.c_(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b8_.j(0.72).gp(0)
a5.aZ(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.sar(new A.bT(B.A,0.5,B.x,a0,0,A.a([D.beR.j(0.22),B.K],t),a0,a0).aw(0,A.bU(new A.u(w,a2),a1)))
a5.af(new A.u(w,a2),a1,a4)},
av(d){return!1}}
C.b9o.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kO(new A.o(A.aq(D.kn,D.bjj,w/4),o,new A.bO(B.Y,new A.ay(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.K9,o,o,B.n),B.be,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aGG,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jV.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.w(t,B.m,o,B.qa,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aXS,u,D.bW2,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dm,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aG9(o),D.eQy),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTH(p.y,r,G.iy,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iy.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fdw,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iy.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iy.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f4I,!0,B.a4,B.zx,B.an,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fdo,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iy.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.B(A.a([A.E(A.p(o,o,B.f,D.EG.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fr,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.EG.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.EG.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iy.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Xv(A.d7(A.a([A.d7(o,o,o,o,o,o,o,o,o,D.f7O,B.a.ap(k,0,1)),A.d7(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iy.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.c9(A.w(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ag)}s.push(A.E(n,1))
s.push(new A.D(B.i1,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iy.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bw(B.K9,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.bv_,A.w(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c0(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.be),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.K9,v,D.bWz,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.aoY.prototype={
T(){return new C.aCG(A.a([],x._))},
br(){return this.r.$0()},
pR(){return this.w.$0()},
ge1(){return this.c}}
C.aCG.prototype={
a_(){var w,v
this.a1()
this.vO()
w=this.a
v=w.c
if(v.length!==0)C.a6L(v,w.e,w.d.w)},
vD(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h1j(r,t.e,!1,s.w,new C.dTt(u),null,s),$async$vD)
case 2:w=3
return A.b(u.vO(),$async$vD)
case 3:return A.h(null,v)}})
return A.i($async$vD,v)},
a_g(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h1j(r,t.e,!0,s.w,new C.dTs(u),null,s),$async$a_g)
case 2:w=3
return A.b(u.vO(),$async$a_g)
case 3:return A.h(null,v)}})
return A.i($async$a_g,v)},
vO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Az(q.a.c),$async$vO)
case 7:p=e
if(q.c!=null)n=q.e||J.cI(p)
else n=!1
if(n)q.m(new C.dTv(q,p))
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
return A.b(C.Gj(q.a.c).d6(0,B.pP),$async$vO)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dTw(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dTx(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vO,v)},
Oh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Oh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.J(s).f.U(D.eUa)
w=3
return A.b(C.Gj(t.a.c),$async$Oh)
case 3:r=e
w=4
return A.b(C.fHR(t.a.c,r),$async$Oh)
case 4:q=e
w=5
return A.b(C.Gj(t.a.c),$async$Oh)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dTr(t,p))
o=t.c.J(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(null,null,null,q?B.dz:B.cR,null,B.r,null,s,null,B.mp,null,null,null,null,null,null,null,null,null,null))
t.a.pR()
case 1:return A.h(u,v)}})
return A.i($async$Oh,v)},
HM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i8P(l),$async$HM)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hDl(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZj(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HM)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hkw(r)
o=Date.now()
n=t.a.c
m=new C.kB(l,r.toUpperCase(),p,!0,B.T,D.Cb,new A.S(o,0,!1),0,n,D.tO)
w=5
return A.b(C.a2h(n,m),$async$HM)
case 5:w=6
return A.b(t.vO(),$async$HM)
case 6:t.a.br()
t.a.pR()
if(t.c==null){w=1
break}t.Eo(m)
case 1:return A.h(u,v)}})
return A.i($async$HM,v)},
Eo(d){return this.cdI(d)},
cdI(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Eo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Az(u.a.c),$async$Eo)
case 2:n=l.re(k.dG(f,new C.dTu(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hA(m,new C.aoS(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Eo)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2h(u.a.c,o),$async$Eo)
case 6:case 5:w=7
return A.b(u.vO(),$async$Eo)
case 7:u.a.pR()
return A.h(null,v)}})
return A.i($async$Eo,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tK(p)
if(r.e)return A.av(A.mJ(q,p?B.bs:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.cn(r.d)){w=p?B.e_:B.c
v=A.m(15)
u=A.aF(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bJ2,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gccM(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fl(A.p(q,A.w(A.a([u,B.aR,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dY,A.bG(D.fAR,r.gaPV(),A.bn(B.bU,q,q,q,q,q,Al.YX,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.buW,q,q,1/0),15,B.af,1.05,D.a8X,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b7],v)
if(J.cI(r.d))w.push(A.aH(q,q,q,q,A.X(B.yt,B.aV,q,q,q,q),q,q,q,new C.dTz(r),q,q,q,q,"Sync family trees with database",q))
if(J.cI(r.d))w.push(A.aH(q,q,q,q,A.X(B.yk,B.aV,q,q,q,q),q,q,q,r.gaf3(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.any,D.fgX,r.gaPV(),A.bn(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fl(r.cAa(J.q(r.d,s),o),14,B.af,1,D.a8X,q))
B.d.v(w,u)}return A.w(A.a([p,B.aB,A.w(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cAa(d,e){var w=null,v=e.a,u=v?B.e_:B.c,t=A.m(14),s=A.I((v?B.e1:B.bN).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.em,10)],x.V),q=A.m(14),p=A.p(w,D.bI6,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gao0(),m=d.d?"":" \xb7 Public",l=d.y===D.ku?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bD,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bB,A.B(A.a([p,B.bd,l,A.X(B.MT,v?B.bs:B.bl,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dTy(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoS.prototype={
T(){return new C.aCD(A.a([],x._),A.aX(x.N),A.b71())},
br(){return this.r.$0()},
ge1(){return this.c}}
C.aCD.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.abX()
w=u.a
v=w.c
if(v.length!==0)C.a6L(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a2b(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xJ("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dSU(r),s,null,!0,!0,x.y),$async$a2b)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jg()
t.m(new C.dSV(t,r))
w=4
return A.b(t.vF(),$async$a2b)
case 4:t.a.br()
t.xJ(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2b,v)},
cq2(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dSP(w,f,d,e))},
aSa(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e9(w,v,0,1)
u.jJ(q,q,1,1)
this.w.sp(0,u)},
b94(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eG(new Float64Array(16))
q.e2(r)
w=q.Cw()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.e9(r,u,0,1)
t.jJ(v,v,1,1)
t.e9(-r,-u,0,1)
t.iD(0,q)
s.sp(0,t)},
abX(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Az(u.a.c),$async$abX)
case 2:t=s.re(r.dG(e,new C.dSn(u)))
if(t!=null&&u.c!=null)u.m(new C.dSo(u,t))
return A.h(null,v)}})
return A.i($async$abX,v)},
xJ(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vD(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h1j(o,t,!1,r,new C.dSC(u),q.a,s),$async$vD)
case 2:n=A
m=J
w=3
return A.b(C.Gj(u.a.c),$async$vD)
case 3:p=n.re(m.dG(e,new C.dSD(u)))
if(p!=null&&u.c!=null)u.m(new C.dSE(u,p))
return A.h(null,v)}})
return A.i($async$vD,v)},
Jg(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cv(w,0)},
vF(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2h(t,s),$async$vF)
case 2:return A.h(null,v)}})
return A.i($async$vF,v)},
a0M(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tV(q,t.a.c)){t.xJ("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i9Y(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0M)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Jg()
t.m(new C.dSO(t,r))
w=4
return A.b(t.vF(),$async$a0M)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0M,v)},
a_u(){return this.cdK()},
cdK(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tV(q,t.a.c)){t.xJ("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dSM(r,new C.tK(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_u)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jg()
t.m(new C.dSN(r,t))
w=4
return A.b(t.vF(),$async$a_u)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_u,v)},
Vt(d){return this.byQ(d)},
byQ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tV(r,t.a.c)){t.xJ("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dSb(t,d),r,null,!0,!0,x.P),$async$Vt)
case 3:s=f
if(s==null){w=1
break}t.Jg()
t.m(new C.dSc(t,s))
w=4
return A.b(t.vF(),$async$Vt)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vt,v)},
a2x(d){return this.cCi(d)},
cCi(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2x=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cb(null,null,!0,null,new C.dSX(u,d,new C.tK(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2x)
case 2:return A.h(null,v)}})
return A.i($async$a2x,v)},
ca2(d){var w=this,v=w.d
v===$&&A.c()
if(C.tV(v,w.a.c))w.NX(d)
else w.a2x(d)},
ahx(d,e){return this.cu0(d,e)},
cu0(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.dSR(new C.tK(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahx)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahx,v)},
HR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.ku?3:5
break
case 3:w=6
return A.b(C.fQ6(t.a.c),$async$HR)
case 6:s=e
o=t.a
r=C.h95(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahx(!s,!r),$async$HR)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bAG(o,t.a.c)){t.xJ("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l2(o,"Cancel","Remove",q.y===D.ku?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HR)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOe(t.a.c,t.d.a),$async$HR)
case 11:t.a.br()
o=t.c
if(o==null){w=1
break}A.iN(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HR,v)},
a9v(d){return this.bJX(d)},
bJX(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9v=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tV(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b4(s,new C.dSd(p))){o=A.U(s)
p.a=A.re(new A.cQ(new A.a_(s,new C.dSe(d),o.k("a_<1>")),new C.dSf(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.Jg()
t.m(new C.dSg(t,s,d,q))
w=3
return A.b(t.vF(),$async$a9v)
case 3:t.xJ(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9v,v)},
NX(d){return this.bM4(d)},
bM4(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tV(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2x(d),$async$NX)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.dSk(t,d),r,null,!0,!0,x.P),$async$NX)
case 6:s=f
if(s==null){w=1
break}t.Jg()
t.m(new C.dSl(t,s))
w=7
return A.b(t.vF(),$async$NX)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NX,v)},
cAw(){var w=this,v=w.d
v===$&&A.c()
if(!C.tV(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dSW(w))
w.vF()},
Yk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bAG(n,t.a.c)){t.xJ("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.as(B.as,s)
q=t.d.e
p=A.bo(new A.M(q,t.gc8x(),A.U(q).k("M<1,n>")).c0(0,new C.dSx()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dSy(t,new C.tK(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Yk)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Jg()
t.m(new C.dSz(t,p))
w=4
return A.b(t.vF(),$async$Yk)
case 4:t.xJ("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Yk,v)},
c8y(d){return B.a.i(d.toLowerCase())},
ccx(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tV(v,w)
t=r.d
s=C.i_c(t)
C.i8T(q,t.b,u,C.i_b(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tK(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a_(l,new C.dT3(),A.U(l).k("a_<1>")).gM(0)
l=n?B.bZ:B.ix
v=A.X(B.a_7,n?B.bs:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.D(B.B1,A.aL(!1,o,!0,new A.D(B.hN,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.O,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dT4(p,d),o,o,o,o,o,o,o),o),new A.D(B.nd,p.bX2(m),o)],u)
if(p.d.y===D.ku){t=B.rt.j(0.15)
s=A.m(12)
r=A.I(B.rt.j(0.45),B.q,1)
q=C.Gh(p.d,p.a.c)
v.push(new A.D(B.xF,A.p(o,A.B(A.a([D.bNk,B.av,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iD,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b7],u)
if(C.tV(p.d,p.a.c)&&p.e.length!==0)u.push(new C.JC("Undo",B.rh,p.gcAv(),m,o,o))
u.push(new C.JC("Family Book",D.bCM,p.gccw(),m,B.ti,o))
if(C.tV(p.d,p.a.c))u.push(new C.JC("Display settings",B.BM,p.gcdJ(),m,B.aZ,o))
u.push(new C.JC("Sync",B.yk,p.gaf3(),m,o,o))
t=p.d
if(t.y===D.ku||C.bAG(t,p.a.c)){t=p.d.y===D.ku?"Remove shared tree":"Delete tree"
u.push(new C.JC(t,B.e6,p.gbK6(),m,B.h0,o))}if(C.tV(p.d,p.a.c))u.push(new C.JC("Add member",B.vM,new C.dT5(p),m,B.bU,o))
v.push(new A.D(A0.ahC,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gao0()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cq(new C.dT6(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a_b:X.MU,o,o,o,o,o)
v.push(A.av(A.hi(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dT7(p),o),o,o,o))}return A.c7(o,l,A.bl(!0,A.w(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bX2(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fx.j(0.35),B.dm,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.yd,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bQo,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaf3(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f34,m,m,m)
r=r.gao0()
p=n.d.gao0()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.w(A.a([q,B.bD,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a5,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tV(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bNw,m,m,m,n.gcnr(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jp:B.mx
r=r?"Private":"Public"
r=A.E(n.aun(q,"Privacy",r,n.a.d.w?n.gczu():m),1)
q=A.E(n.aun(B.yl,"Tree code",n.d.c,new C.dSm(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.aun(D.bEv,"Collaborators",p,n.gc0A()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.ku){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aF(!1,B.a1,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.D(B.fJ,A.B(A.a([A.X(B.oT,B.c,m,m,m,14),B.ec,A.d("View only",m,m,m,m,m,m,B.aPH,m,m,m)],o),B.m,m,B.e,B.O,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ah)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.Fh,A.w(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bUx,B.n),m,m,m,m,m,m,m,1/0)},
aun(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.D(L.aiL,A.w(A.a([A.X(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uI,A.d(f,w,1,B.a2,w,w,w,O.zB,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)}}
C.bdF.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bdI(s,t),new A.ar(w,v))],x.p)
r=r.gdL(r)
B.d.v(u,r.dt(r,new C.d6n(this),x.l))
r=s.c
B.d.v(u,new A.M(r,new C.d6o(this),A.U(r).k("M<1,r>")))
return new A.D(B.tL,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.JO.prototype={}
C.Fy.prototype={}
C.bdH.prototype={
gbhz(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIf.prototype={}
C.bdI.prototype={
bLK(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.N()
v.r=B.bC.j(0.75).gp(0)
v.c=2
v.d=B.bQ
d.bE(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ao,null,null,A.a([],x.v))
q=w+5.5
t.F(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.F(new A.pB(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.F(new A.pB(u+4.95,r,u+9.9,s,u,q))
t.F(new A.bF())
q=A.N()
q.r=B.c.gp(0)
d.af(new A.u(u,w),9,q)
q=A.N()
q.r=B.bC.gp(0)
d.aP(t,q)},
bLI(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.d6I())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b4(a0,new C.d6J(f))
t=new A.M(a0,new C.d6K(f),A.U(a0).k("M<1,K>")).c0(0,new C.d6L()).cJ(0,1/0,B.v1)
w=f.a
d.bE(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lV(m)
i=Math.min(10,l/2)
l=$.W()
h=A.a([],q)
g=new A.aO(l.r,B.ao,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cV(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cV(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbL().a.snapshot()
r.drawPath((g.e=new A.cC(n)).a,k)
k.delete()}},
a4(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.N()
w.r=B.bU.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bQ
w.e=B.fC
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bLI(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bLK(d,w,q.a,q.b)}},
av(d){return d.b!==this.b}}
C.bhn.prototype={
gc6m(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dih
switch(w.c.a){case 0:return D.cMn
case 1:return D.cXv
case 2:return D.dcG}},
gc6p(){var w=this.c,v=C.hjR(w.w),u=C.hjR(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc6m(),p=t.c,o=I.bBA(p.f),n=t.gc6p(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.az:B.c,j=A.I(r?B.az:B.c,B.q,2)
if(o!=null)w=A.ta(B.A,s,B.ci,B.bT,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hU(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fy,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.az:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fd1,s,s,s),B.f,s,s,new A.o(B.ce,s,w,j,s,s,B.n),s,s,s,s,D.bwN,s,s,s),s,s,s,-6,-4,s))}k=r?B.cu:B.c
j=A.m(8)
w=A.I(B.d.gI(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cu,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a5,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aC(s,new A.a7(84,112,A.w(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.w(p,B.m,s,B.e,B.O,0,B.p),B.f,s,D.aZL,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bwY,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a7)}}
C.bcM.prototype={
a4(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.baJ
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
av(d){return d.b!==this.b}}
C.bv4.prototype={
B(d){var w=this,v=null,u=new C.fau(w),t=w.c,s=t?B.cu:B.c,r=A.m(12),q=u.$3(B.hz,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.fd,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yi,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.w(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.fd,v,v,v,1,v,v,v,v,v,22),u.$3(B.al6,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.O,0,B.p),B.f,s,4,v,B.dq,v,v,v,B.ah)}}
C.bkJ.prototype={
B(d){var w=this,v=null,u=B.bU.j(0.15),t=A.I(B.bU,B.q,2),s=w.e,r=x.p
t=A.aC(v,A.p(v,A.w(A.a([A.X(s?K.a_b:X.MU,B.bU,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f9o,v,v,v)],r),B.m,v,B.b8,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a7)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f7n,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.M(s,new C.eMp(w),A.U(s).k("M<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.w(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Zz.prototype={
T(){return new C.aB4()},
br(){return this.Q.$0()},
ge1(){return this.w}}
C.aB4.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.as(new A.bb(t,B.b5,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.as(new A.bb(t,B.b5,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.as(new A.bb(t,B.b5,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.as(new A.bb(t,B.b5,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.as(new A.bb(t,B.b5,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.as(new A.bb(t,B.b5,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xT:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i0K(w.r,w.f)
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
Pj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Pj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h95(p.y,p.w)
w=3
return A.b(A.le(t.a.w,B.HZ),$async$Pj)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZj(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Pj)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hDm(p.y,p.w)
t.a.br()
case 5:w=7
return A.b(Ao.Gs(78,800),$async$Pj)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dmA(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Pj,v)},
c6o(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hX(B.o.u(1000*Date.now()),w,D.xT,null,null,null,"","","","","",1,!1,0)
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
s=v.aDg(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
a96(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a96=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dmz(r),s,null,!0,!0,x.y),$async$a96)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a96,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tK(j),h=l.a.e,g=A.U(h).k("a_<1>"),f=A.C(new A.a_(h,new C.dmJ(l),g),g.k("J.E"))
h=j?B.e_:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bvh,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.az,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.ht(A.aL(!1,k,!0,new A.D(B.lR,A.X(B.e6,B.oG,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbGL(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jA:B.iU
t=I.bBA(l.as)
if(l.as==null)s=A.X(B.oL,j?B.bs:B.bl,k,k,k,40)
else s=k
s=A.av(A.aC(k,new A.an(B.W,k,B.aa,B.r,A.a([A.h3(u,t,s,k,42),A.ao(0,A.h3(B.bU,k,D.bHa,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc6l(),k,k,k,k,k,k,!1,B.a7),k,k,k)
t=l.d
t===$&&A.c()
t=C.aB6(t,"Full name",B.mt,1,1,i,B.m4)
u=l.y
u===$&&A.c()
u=A.w(A.a([t,B.R,new C.bhl(i,u,new C.dmK(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.boV],q)
o=l.a.e
B.d.v(p,new A.M(o,new C.dmL(),A.U(o).k("M<1,eE<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.boX],q)
B.d.v(q,new A.M(f,new C.dmN(),A.U(f).k("M<1,eE<n?>>")))
o=A.w(A.a([t,B.am,new C.acI(i,r,"Who is their parent?",p,new C.dmO(l),k,o),B.aB,n,B.am,new C.acI(i,m,"Who is their spouse / partner?",q,new C.dmP(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aB6(q,"Birth date",D.ak9,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aB6(m,"Birth place",B.a_q,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aB6(n,"Date of death (if deceased)",D.amn,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aB6(p,"Occupation",B.a0t,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aB,s,B.by,new C.acJ(i,"Identity",u,k),B.ac,new C.acJ(i,"Family links",o,k),B.ac,new C.acJ(i,"Life details",A.w(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aB6(r,"Notes",B.kY,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aB5(i,"Child order",l.cdX(l.at),new C.dmQ(l),new C.dmR(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fZF(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dmS(l):k
B.d.v(r,A.a([B.R,new C.aB5(i,"Visible in tree",u,w,new C.dmT(l),k)],v))}r.push(B.R)
w=j?B.jA:B.iU
u=A.m(14)
t=A.I(j?B.e1:B.bN,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iE(k,B.bU,k,B.af,k,new C.dmU(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ahd,k,k,k))
r.push(B.by)
w=j?B.aQ:B.az
j=j?B.e1:B.bN
r.push(A.B(A.a([A.E(A.dU(B.nz,new C.dmM(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cl,k,new A.b7(A.m(14),B.Y),new A.ay(j,1,B.q,-1),k,k,k,k)),1),B.bd,A.E(A.bG(D.eMU,l.gc6n(),A.bn(B.aV,k,k,0,B.c,k,B.cl,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ek(B.hc,k,B.af,h,new A.a7(420,k,A.c9(A.w(r,B.aj,k,B.e,B.O,0,B.p),B.r,k,B.y,k,k,k,k,B.ag),k),D.ai4,k,B.aht,new A.b7(g,B.Y),k,k)},
cdX(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acJ.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jA:B.iU,s=A.m(16)
return A.w(A.a([new A.D(D.aiu,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e1:B.bN,B.q,1),s,w,w,B.n),w,w,w,w,B.bm,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhm.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e_:B.c,r=A.m(12),q=A.I((t?B.e1:B.bN).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aQ:B.az,u,u,u,u,u,u,u,u,14,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.ez,u,B.vq,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cw,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acI.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e_:B.c,s=A.m(12),r=A.I((u?B.e1:B.bN).j(0.85),B.q,1),q=A.X(B.rb,u?B.bs:B.bl,v,v,v,v),p=A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,14,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e_:B.c
return A.p(v,new A.Dq(A.Sf(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cw,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kV,v,v,v)}}
C.bhl.prototype={
B(d){var w=new C.dmV(this)
return A.B(A.a([w.$3(D.ZK,"Male",B.ND),B.ab,w.$3(D.ajn,"Female",B.Nq),B.ab,w.$3(D.xT,"Other",B.nj)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aB5.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jA:B.iU,r=A.m(14),q=A.I(t?B.e1:B.bN,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.az,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.w(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHh(u,B.yi,w.f,v),B.bp,new C.aHh(u,B.hz,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ej,v,v,v)}}
C.aHh.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.e_:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bU
else t=(s.c.a?B.bs:B.bl).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ah)}}
C.acK.prototype={
bPz(d){switch(d.a){case 0:return B.bU
case 1:return B.bC
case 2:return B.cU}},
bPA(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aWu(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
A6(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e_:B.c
u=A.m(12)
t=A.I((w?B.e1:B.bN).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bU,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bl,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.w(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.az,p,p,p,p,p,p,p,p,14,p,p,B.N,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cB,B.xC,p,p,1/0)},
adz(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jA:B.iU,s=A.m(16),r=A.I(v?B.e1:B.bN,B.q,1)
return A.w(A.a([new A.D(D.aiu,u,w),A.p(w,A.w(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hoC(r,q),o=q.c,n=t.bPz(o),m=I.bBA(q.f),l=t.e.a,k=l?B.e_:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.ku?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a5,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.h3(u,m,m==null?A.X(B.oL,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ek,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bPA(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mr,s,s,s),s,s,s)
u=x.p
i=A.a([t.A6("Full name",i,B.mt)],u)
if(p>0)i.push(t.A6("Child order","#"+p,B.Nw))
r=A.a([h,B.at,r,B.aR,l,B.R,v,B.by,t.adz("Identity",i),B.ac,t.adz("Life details",A.a([t.A6("Birth date",q.w,D.ak9),t.A6("Birth place",q.x,B.a_q),t.A6("Date of death",q.y,D.amn),t.A6("Occupation",q.z,B.a0t)],u)),B.ac,t.adz("Family links",A.a([t.A6("1. Parent",t.aWu(q.d),B.FM),t.A6("2. Spouse",t.aWu(q.e),B.Np)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adz("Notes",A.a([t.A6("Notes",q,B.kY)],u))],u))
r.push(B.by)
r.push(A.bG(B.Jh,new C.dn4(d),A.bn(B.aV,s,s,s,s,s,B.cl,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eJ(s,k,new A.cT(B.lD,A.c9(A.w(r,B.aj,s,B.e,B.O,0,B.p),B.r,s,B.y,s,B.xI,s,s,B.ag),s),s,s,s,B.Fk,B.d0,s,new A.b7(j,B.Y),s)}}
C.JC.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xL,A.ht(A.aF(!1,B.a1,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ah),u,v.c,u,u),u)}}
C.aoV.prototype={
eQ(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a7().ac())
w=u.c
v=A.U(w).k("M<1,a5<n,@>>")
w=A.C(new A.M(w,new C.c7T(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j2(w,new C.c7U(),t,x.U))
return s}}
C.aoW.prototype={
T(){return new C.aCF(A.a([],x.bF))},
gdd(){return this.c}}
C.aCF.prototype={
a_(){this.a1()
this.Jn()},
Jn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Jn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c7X(t.a.c),$async$Jn)
case 3:r=e
w=4
return A.b(C.Az(t.a.c),$async$Jn)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qT(q,new C.dTg(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dTh(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Jn,v)},
yh(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
K5(d,e){return this.cCS(d,e)},
cCS(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$K5=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dTl(q,e))
t=3
w=6
return A.b(d.$0(),$async$K5)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dTm(q))
$.eV.mr()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$K5,v)},
X7(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p4(r,s.c,s.e),$async$X7)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.K5(new C.dTd(t),"Preparing download\u2026"),$async$X7)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X7,v)},
Xb(d){return this.bNx(d)},
bNx(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p4(r,s.c,s.e),$async$Xb)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.K5(new C.dTe(t,d),"Preparing file\u2026"),$async$Xb)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xb,v)},
afq(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afq=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.x4.c6().LR(B.Qw,B.tP,!0),$async$afq)
case 7:r=e
o=r
q=o==null?null:J.fp(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aH.gam(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jp(o,0,null)
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
case 6:u=A.Gr()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afq,v)},
XO(d){return this.bXX(d)},
bXX(d){var w=0,v=A.j(x.H),u=this
var $async$XO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.K5(new C.dTf(u,d),"Restoring family trees\u2026"),$async$XO)
case 2:return A.h(null,v)}})
return A.i($async$XO,v)},
XN(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afq(),$async$XN)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.XO(s),$async$XN)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XN,v)},
a1C(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p4(r,s.c,s.e),$async$a1C)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.K5(new C.dTk(t),"Creating QR code\u2026"),$async$a1C)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1C,v)},
a1d(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CI()){t.yh("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).ck(A.e8(new C.dTi(),!0,null,x.N)),$async$a1d)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XO(r),$async$a1d)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1d,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.At:B.ix,m=o?D.afI:B.aQ,l=o?B.aK:B.bN,k=o?B.aQ:B.az,j=new C.d6M(n,m,l,k,o?B.bJ:B.bl)
l=A.aH(p,p,p,p,A.X(B.eD,k,p,p,p,20),p,p,p,new C.dTo(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eD(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d6k(!0,B.jr,B.aP,B.aP,q.r?p:q.gctP(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcpY()
t.push(A.E(C.d6k(!s,B.j_,B.b6,B.bu,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d6k(!1,B.hA,B.aV,B.bU,q.r?p:q.gbNq(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d6k(!1,M.yo,B.aF,B.aM,q.r?p:q.gbXU(),j,s,"Upload backup file"),1))
l=A.a([new C.bdG(v,l,p),B.kF,new C.ac_(j,"QR restore",p),B.R,t,B.d7,new C.ac_(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kF,new C.ac_(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dTp(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cw(l,p,B.YT,p,p,B.ag,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dm,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bl(!0,A.p(p,A.B(A.a([K.aO8,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.N,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.B7,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c7(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d6M.prototype={}
C.bdG.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.kb,28)],x.V)
t=A.ao(p,A.X(B.u6,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bPW,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oj,A.E(A.w(A.a([D.fhW,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bXK,B.n),p,p,p,p,p,p,p,p)}}
C.ac_.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bdE.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aP.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aP.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aF(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eF(A.dd(new A.D(E.Yx,A.w(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.r7,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bD,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cw,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)}}
C.bdJ.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eF(new A.D(B.eR,A.B(A.a([A.p(v,D.bP8,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.r7,v,v,v),B.bd,A.E(A.w(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hA,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.ZU.prototype={
T(){return new C.aCE()},
gdd(){return this.c}}
C.aCE.prototype={
a_(){this.a1()
this.a8D()},
a8D(){var w=0,v=A.j(x.H),u=this,t
var $async$a8D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b0X(u.a.c,B.CN),$async$a8D)
case 2:t=e
if(u.c!=null)u.m(new C.dT8(u,t))
return A.h(null,v)}})
return A.i($async$a8D,v)},
agO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dT9(q))
t=4
p=A.haK(q.a.d,B.CN)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ar9(n.e,m,l,B.CN,p,n.f),$async$agO)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dTa(q))
q.c.J(x.q).f.U(D.eVj)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.aa(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.ef(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dTb(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agO,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jf:B.pI,n=p?B.ib:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eD(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fxB,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pM(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.w(A.a([B.P,u,B.by,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b8,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.br,q,q,q,q,q,q,q,q,q,q,q,B.N,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcpG()
if(u)u=B.IO
else u=A.X(r.e===!0?B.hn:B.ak8,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.eC(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aV,q,B.fO,q,q,q,new A.ay(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i1,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a7(1/0,q,A.bG(B.zH,new C.dTc(d),A.bn(B.aV,q,q,q,q,B.fO,q,q,q,q,q,q)),q))
return A.c7(m,o,new A.D(B.a9,A.w(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.ZV.prototype={
T(){return new C.biQ(A.z3(B.xr,B.nG,B.ub))}}
C.biQ.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c7(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fpL,w,w,w,1,w,!0),B.w,A.z2(this.d,B.bT,new C.dTq(this,d)),w,!1,!1,w,w)}}
C.aXS.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Q0,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.ly.prototype={}
C.a5N.prototype={
T(){return new C.biw(null,null)}}
C.biw.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tE,v,1,v,w)
w.e=A.bj(v,B.pO,v,1,v,w)
w.a.toString
w.d.cI(0)
w.e.cI(0)},
bt(d){var w,v,u=this
u.bG(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cI(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cI(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.buc()},
B(d){var w,v,u=this,t=B.d.dM(D.a3b,new C.dEC(u),new C.dED())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.ctm(A.c6(new A.h8(A.a([w,v],x.dS)),new C.dEE(u,t),null),!0)}}
C.biv.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b_M(d,e)
break
case"house":p.m3(d,e,D.d16)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdB()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m8(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AP(d,e,12)
p.xS(d,e,B.ld,5,14)
break
case"grocery":p.ceG(d,e)
break
case"calculator":p.cen(d,e)
break
case"lumber":p.ceO(d,e)
break
case"kitchen":p.ceJ(d,e)
break
case"landscape":p.m3(d,e,D.d1C)
s=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.F(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.F(new A.cV(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.F(new A.cV(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.F(new A.ap(t,w))
s.F(new A.ap(0,w))
s.F(new A.bF())
w=A.N()
w.r=B.eA.j(0.85).gp(0)
d.aP(s,w)
p.AP(d,e,8)
p.xS(d,e,B.iX,4,18)
break
case"plumbing":p.ceX(d,e)
break
case"electrical":p.m3(d,e,D.dbY)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.aZ(new A.a9(0,0,0+e.a,0+e.b),u)
p.m8(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m8(d,e,B.lI.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AP(d,e,10)
break
case"store":p.cf6(d,e)
break
case"paint_remodel":p.ceS(d,e)
break
case"roofing":p.ceZ(d,e)
break
case"warehouse":p.cfd(d,e)
break
case"vehicles":p.cfb(d,e)
break
case"farm":p.ceA(d,e)
break
case"restaurant":p.ceY(d,e)
break
case"tools":p.cf9(d,e)
break
case"wallet":p.cfc(d,e)
break
case"concrete":p.cet(d,e)
break
case"blueprint":p.cel(d,e)
break
default:p.b_M(d,e)}},
m3(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.sar(new A.a8(B.ax,B.aC,B.x,f,null,null).aw(0,v))
d.aZ(v,w)},
m8(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gdB()/2-h
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
xS(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdB()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AP(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.E(s*0.17,0.9)
p=B.k.E(s*0.23,0.85)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b_M(d,e){var w,v=this
v.m3(d,e,D.daA)
w=v.c
v.m8(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m8(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bLE(d,e,B.hY,w)
v.xS(d,e,B.c.j(0.7),6,8)},
bLE(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c_(new A.a9(16,q,t,q+3)),p)
p.delete()}},
ceG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m3(d,e,D.cid)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.d_q[B.o.E(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m8(d,e,B.c.j(0.35),w,16)
j.xS(d,e,B.iX,5,12)},
cen(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m3(d,e,D.cik)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdB()
$.W()
q=A.N()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.af(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h6(g,g,g,g,g,B.a4,B.c6,g,B.dS,B.c5)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d3b[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saV(0,new A.eq(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eo()
p.a4(d,new A.u(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cim[o]
l=B.kl.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saV(0,new A.eq(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eo()
p.a4(d,new A.u(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m8(d,e,B.c.j(0.35),w*1.5,14)
h.m8(d,e,B.eB.j(0.55),-v*3.141592653589793*2,8)
h.m8(d,e,B.Au.j(0.4),r*2.8,22)
h.xS(d,e,B.px,8,10)
h.AP(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
ceO(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,Z.avM)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a9(20,q,u,q+10),B.hD)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h5,B.oy,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.er(p),n)
n.delete()}m.m8(d,e,B.h5.j(0.35),w,15)
m.AP(d,e,8)},
ceJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m3(d,e,D.d_V)
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
k.delete()}j.m8(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.xS(d,e,B.qL,4,14)},
ceX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m3(d,e,D.cQ9)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.W()
n=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xS(d,e,B.oE,6,12)
l.m8(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cf6(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m3(d,e,D.cvL)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a9(q,14,q+u,22),B.io)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.fb,B.bL,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}n.m8(d,e,B.c.j(0.3),w,16)
n.AP(d,e,8)
n.xS(d,e,B.v7,5,13)},
ceS(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.cVU)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bx(new A.a9(q,p,q+8,p+(18+r*22)),B.hf)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.iu,B.dv,B.bL,B.eu][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.er(p),o)
o.delete()}this.m8(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ceZ(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.cTr)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xS(d,e,B.cr,7,11)},
cfd(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.cys)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bx(new A.a9(p,o,p+(t-r*8),o+16),B.hD)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cr,B.aQ,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}this.m8(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cfb(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.dfP)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.bx(new A.a9(r,q,r+28,q+8),B.hD)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}this.AP(d,e,6)},
ceA(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.cZx)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.N()
s.r=B.lI.j(0.75).gp(0)
d.af(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.hk.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m8(d,e,B.lI.j(0.35),w,14)},
ceY(d,e){var w,v,u,t,s,r,q,p,o=this
o.m3(d,e,D.d0W)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cg(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c_(r),p)
p.delete()}o.xS(d,e,B.qL,5,16)
o.AP(d,e,7)},
cf9(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,D.dds)
w=m.c
v=w*3.141592653589793
m.m8(d,e,B.oy.j(0.55),v*3,10)
m.m8(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.oy.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cfc(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,D.dgm)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a9(p,o,p+36,o+22),B.io)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iX,B.lI,q).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}m.AP(d,e,9)
m.m8(d,e,B.c.j(0.4),w*2.2,12)},
cet(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.d5R)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.u(v,u),34)
$.W()
s=A.N()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.f8(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bN.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cel(d,e){var w,v,u,t,s,r,q,p
this.m3(d,e,D.d1W)
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
d.aZ(new A.a9(0,p,0+v,p+6),u)
this.m8(d,e,B.ld.j(0.45),-t*3.141592653589793*2,11)},
av(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.arR.prototype={
ZT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aP9(),$async$ZT)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a82(s),$async$ZT)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$ZT,v)},
afr(d){return this.chs(d)},
chs(d){var w=0,v=A.j(x.H),u=this,t
var $async$afr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i92(d),$async$afr)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afr,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jA:B.iU
w=x.p
v=A.a([C.aPx(!0,B.qD,1/0,B.pW,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c0(new A.bI(B.b_,t,t,new A.D(B.vk,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.N,t,t,!0,t,t,t,t,t,B.awJ,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b_,B.b4,B.x,u,t,t),B.n),B.be))}v.push(A.ao(8,A.B(A.a([A.E(A.dn(D.bIW,D.fej,new C.cfs(this,d),A.bn(B.aV,t,t,t,B.c,t,B.jE,t,t,t,t,B.cc)),1),B.ab,A.E(A.eC(D.bR9,D.fsO,this.gc8v(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jE,t,t,D.aYi,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fH(1.7777777777777777,A.aF(!1,B.a1,!0,B.qD,new A.an(B.W,t,B.b0,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ah),t)}}
C.aKB.prototype={
aR(){this.b_()
this.aY()
this.dJ()},
q(){var w=this,v=w.b1$
if(v!=null)v.a3(0,w.gdD())
w.b1$=null
w.a2()}}
C.aSs.prototype={}
C.aSr.prototype={}
C.aQt.prototype={}
C.Yy.prototype={
T(){return new C.axV()}}
C.axV.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b5,B.aN)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
JX(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.J(x.q).f.U(D.eVO)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aSs(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e_:B.c,k=A.m(20),j=A.p(n,D.bQP,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.az,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bD,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aH(n,n,n,n,A.X(B.cD,m?B.bs:B.bl,n,n,n,n),n,n,n,new C.cZ1(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cw,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hb_(new C.cZ2(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.az,n,n,n,n,n,n,n,n,n,n,n,B.a5,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jA:B.iU
r=A.m(12)
q=A.m(12)
p=m?B.e1:B.bN
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.ay(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cZ3(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,R.IV,n,n,n,n)
u=m?B.aQ:B.az
m=m?B.e1:B.bN
return A.eJ(n,l,new A.cT(B.lD,A.c9(A.w(A.a([j,B.aR,i,B.at,w,B.P,v,B.aR,t,B.by,A.B(A.a([A.E(A.dU(B.de,new C.cZ4(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cl,n,new A.b7(A.m(12),B.Y),new A.ay(m,1,B.q,-1),n,n,n,n)),1),B.av,A.E(A.bG(D.ft2,o.ga1W(),A.bn(B.aV,n,n,n,B.c,n,B.cl,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.O,0,B.p),B.r,n,B.y,n,B.B8,n,n,B.ag),n),n,n,n,W.B9,B.d0,n,new A.b7(k,B.Y),n)}}
C.Yx.prototype={
T(){return new C.axU()}}
C.axU.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.as(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
JX(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.J(x.q).f.U(D.eTv)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aSr(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e_:B.c,n=A.m(20),m=A.p(q,D.bNp,B.f,q,q,new A.o(B.bU.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bD,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aH(q,q,q,q,A.X(B.cD,p?B.bs:B.bl,q,q,q,q),q,q,q,new C.cYY(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.ajV,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.av,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,q,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jA:B.iU
t=A.m(12)
s=A.m(12)
r=p?B.e1:B.bN
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.ay(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cYZ(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kG,q,q,q,q)
w=p?B.aQ:B.az
p=p?B.e1:B.bN
return A.eJ(q,o,new A.cT(B.lD,A.c9(A.w(A.a([m,B.aR,l,B.aB,v,B.by,A.B(A.a([A.E(A.dU(B.de,new C.cZ_(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cl,q,new A.b7(A.m(12),B.Y),new A.ay(p,1,B.q,-1),q,q,q,q)),1),B.av,A.E(A.bG(D.fzR,this.ga1W(),A.bn(B.bU,q,q,q,B.c,q,B.cl,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.O,0,B.p),B.r,q,B.y,q,B.B8,q,q,B.ag),q),q,q,q,W.B9,B.d0,q,new A.b7(n,B.Y),q)}}
C.Y5.prototype={
T(){return new C.awE()}}
C.awE.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.as(B.as,w)
v.e!==$&&A.aP()
v.e=new A.as(new A.bb("1",B.b5,B.aN),w)
v.f!==$&&A.aP()
v.f=new A.as(B.as,w)
v.r!==$&&A.aP()
v.r=new A.as(B.as,w)},
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
gJi(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaiE(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gb2G(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aND(d){var w,v=B.k.D(this.gJi()+d,0.25,999999),u=B.k.k0(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ab(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saV(0,u)
this.m(new C.cwB())},
ax0(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jA:B.iU,s=A.m(14),r=A.m(14)
u=u?B.e1:B.bN
return A.bs(w,new A.b4(4,s,B.dg),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.ay(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.aam),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c8w(d,e,f){return this.ax0(d,e,f,null)},
JX(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaiE()<=0){s.c.J(x.q).f.U(D.eXF)
return}r=s.c
r.toString
v=s.gJi()
u=s.gaiE()
t=s.gb2G()
A.a6(r,!1).O(new C.aQt(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tK(n),l=n?B.e_:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bU.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bGT,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bD,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cw,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aH(o,o,o,o,A.X(B.cD,n?B.bs:B.bl,o,o,o,o),o,o,o,new C.cwH(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.ax0(m,"Item name (optional)","Lumber, paint, labor\u2026",B.NC),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,R.IV,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jA:B.iU
t=A.m(14)
s=A.I(n?B.e1:B.bN,B.q,1)
r=A.aH(o,o,o,o,A.X(B.yi,n?B.aQ:B.az,o,o,o,20),o,o,o,new C.cwI(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bSH,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cwJ(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hz,n?B.aQ:B.az,o,o,o,20),o,o,o,new C.cwK(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.O,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,16,o,o,B.N,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.av,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.ax0(m,"Amount","0.00",B.i2),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cwL(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.M(D.cWm,new C.cwM(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.P,s,B.ac,A.bW(B.bA,u,B.bq,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c8w(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cwN(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kG,o,o,o,o)],w))}i.push(B.aR)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.N,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJi()===B.k.k0(p.gJi())?B.k.N(p.gJi()):p.gJi()
s=p.gb2G()
r=A.AB(p.gaiE())
i.push(A.p(o,A.B(A.a([A.E(A.w(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCm(p.gJi()*p.gaiE(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jl,o,o,o))
i.push(B.by)
j=A.m(14)
h=n?B.e1:B.bN
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cl,o,new A.b7(j,B.Y),new A.ay(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,o,o,o,B.N,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cwO(d),h),1),B.av,A.E(A.dn(D.anr,D.fvQ,p.ga1W(),A.bn(B.aV,o,o,0,B.c,o,B.cl,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eJ(o,l,new A.cT(V.aaL,A.c9(A.w(i,B.aj,o,B.e,B.O,0,B.p),B.r,o,B.y,o,Ad.r5,o,o,B.ag),o),o,o,o,B.Mj,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0F.prototype={
T(){return new C.buX()}}
C.buX.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,B.b5,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e_:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.az,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jA:B.iU
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b4(4,A.m(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f9X(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dU(B.de,new C.f9Y(d),s),1)
r=A.bn(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eJ(s,q,new A.D(B.B8,A.w(A.a([o,B.aB,v,B.aR,A.B(A.a([u,B.av,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f9Z(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.O,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.ab2.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.Fl.prototype={
T(){return new C.buV(null,null)}}
C.buV.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bpu,null,1,null,v)
w.cI(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bwA()},
gby0(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bU,B.aZ],x.O)
case 2:return A.a([B.bv,B.aV,B.aZ],x.O)
case 3:return A.a([B.aP,B.ce,B.jW],x.O)
case 4:return A.a([B.hw,B.bU,B.fc],x.O)
case 0:return A.a([B.aV,B.bU,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ev(A.c6(v,new C.f9V(this,new C.tK(w.ax.a===B.I)),null),null)}}
C.awx.prototype={
T(){return new C.buW(null,null)}}
C.buW.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n8,null,1,null,v)
w.cI(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bwB()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f9W(this),null)}}
C.buU.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aT(w,w))
u=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
u.F(new A.iJ(v))
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
d.aP(u,w)
w=A.x2(u)
t=A.a([],x.f5)
w=new A.vw(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jT('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Hd(w,r)
w.js()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aR2(d,q,r,o,0,0.2,4.2,0.92)
p.aR2(d,q,r,s,0.52,0.11,3.2,0.58)}},
aR2(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hwz(e.a.a,e,t,t+f*i,!0),r=A.bAJ(s.gbL().a.getBounds())
$.W()
w=A.N()
w.b=B.ae
w.c=j
w.d=B.bQ
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a8(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.H1,null).aw(0,r))
d.aP(s,w)},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aMM.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.b_()
this.aY()
this.by()}}
C.aMN.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.b_()
this.aY()
this.by()}}
C.tK.prototype={}
C.arQ.prototype={
T(){return new C.aEa()},
ge1(){return this.c}}
C.aEa.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.agi()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.L_(w,v)
this.a2()},
agi(){var w=0,v=A.j(x.H),u=this,t,s
var $async$agi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bAR(t.c,t.d.a),$async$agi)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eJz(u,s))
return A.h(null,v)}})
return A.i($async$agi,v)},
PJ(){var w=0,v=A.j(x.H),u=this,t,s
var $async$PJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eJq(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.L_(t,s),$async$PJ)
case 2:if(u.c!=null)u.m(new C.eJr(u))
return A.h(null,v)}})
return A.i($async$PJ,v)},
Qe(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.eJx(t,new C.tK(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Qe)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a82(q),$async$Qe)
case 6:case 5:t.m(new C.eJy(t,r))
w=7
return A.b(t.PJ(),$async$Qe)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Qe,v)},
Vn(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i8O(r),$async$Vn)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eJl(t,new C.qX(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.PJ(),$async$Vn)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vn,v)},
cdy(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hoy(t,new C.eJp(u),w,v)},
aap(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.ay(v,2.5,B.q,-1),B.Y,B.Y,new A.ay(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aY4,w,w,B.n),w,22,w,w,w,w,w,22)},
a9u(d){return this.bJU(d)},
bJU(d){var w=0,v=A.j(x.H),u=this
var $async$a9u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eJo(u,d))
w=2
return A.b(u.PJ(),$async$a9u)
case 2:return A.h(null,v)}})
return A.i($async$a9u,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bZ:B.ix,d=A.m(8),a0=A.X(Q.a_8,f?B.bs:B.bl,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.Fr,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.O,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eJA(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b0,B.r,A.a([A.bw(A.m(22),C.aPx(!0,A.m(22),1/0,B.pW,g,d,1/0),B.aq),A.ao(10,A.dn(D.bLs,D.fy7,h.gb0y(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h9,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eV,22),new A.ac(-4,B.G,B.bU.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b0,B.r,A.a([C.aPx(!0,A.m(16),1/0,B.N4,g,r.c,1/0),A.c0(g,new A.o(g,g,g,g,g,new A.a8(B.b_,B.b4,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.be),A.ao(g,h.aap(!0),g,g,8,g,8,g),A.ao(g,A.cu6(h.aap(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cu6(h.aap(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cu6(h.aap(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dn(D.bHs,D.frO,h.gb0y(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h9,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bUh,B.n),g,g,g,g,B.lR,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.az,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b7x,B.nN,B.h7],u):A.a([B.aZ,B.aV,B.bU],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eV,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jH,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h8,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bCm(h.d.gwT(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cw,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.fU.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aP.j(0.28),B.cJ,14)],t)
j=B.aP.j(0.22)
i=A.m(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.bu3,A.B(A.a([o,B.av,A.aF(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eF(new A.D(Ai.B3,A.w(A.a([A.p(g,D.an0,B.f,g,g,new A.o(j,g,A.I(B.aP.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.h1,D.fh0],a1),B.m,g,B.e,B.O,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcdx(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ah)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aR,w,B.P,u,B.by,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.az,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b7,A.dn(Ak.a0P,D.feV,h.gbyt(),A.bn(B.aV,g,g,g,B.c,g,B.iD,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.e_:B.c
v=A.m(14)
u=A.I(f?B.e1:B.bN,B.q,1)
t=A.X(B.a_t,f?B.bs:B.bl,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.az,g,g,g,g,g,g,g,g,g,g,g,B.N,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.w(A.a([t,B.R,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.r6,g,g,1/0))}else B.d.v(d,new A.M(w,new C.eJB(h,new C.tK(f)),A.U(w).k("M<1,r>")))
if(h.e)d.push(new A.D(B.AX,A.av(A.mJ(g,f?B.bs:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c7(g,e,A.bl(!0,A.w(A.a([new A.D(B.B1,a0,g),A.E(A.c9(A.w(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xJ,g,g,B.ag),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bC5(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e_:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b_Q,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.hP:B.hb,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.az,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcSX()
v=A.AB(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.F,u,B.b8,B.O,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bU.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bCm(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h9,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DQ(A.B(A.a([m,A.E(new A.D(B.ah6,A.B(A.a([l,B.bd,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cD,(r?B.bs:B.bl).j(0.75),u,u,u,20),u,u,u,new C.eJm(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aZH,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.ad4.prototype={
Ej(d){return this.bLg(d)},
bLg(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ej=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p4(d,o,!1),$async$Ej)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bN(Ac.AV,null,x.H),$async$Ej)
case 4:s=t.d
w=5
return A.b(C.fGT(!0,o,s),$async$Ej)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gg(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$Ej)
case 6:p=f
w=7
return A.b(A.p3(o,!1),$async$Ej)
case 7:if(d.e==null){w=1
break}d.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ej,v)},
ZU(d){return this.ctQ(d)},
ctQ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p4(d,s,!1),$async$ZU)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hA(d,new C.arK(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p3(s,!1),$async$ZU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZU,v)},
PK(d){return this.cpT(d)},
cpT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hA(d,D.aG9,!0,"NgmyWorksheetProjectScan",x.N),$async$PK)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCn(s),$async$PK)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.J(x.q).f.U(D.eWO)
w=1
break}q=C.h0Z(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$PK)
case 5:if(d.e==null){w=1
break}d.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PK,v)},
ZV(d){return this.cBO(d)},
cBO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bBV(),$async$ZV)
case 3:s=f
if(s==null){w=1
break}r=C.h0Z(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$ZV)
case 4:if(d.e==null){w=1
break}d.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ZV,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tK(u),s=w.d.d.length,r=u?B.e_:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kb,36)],x.V),o=x.p
return A.bl(!0,new A.D(B.vr,A.p(v,A.w(A.a([w.csn(d,t,s),new A.D(D.btt,A.w(A.a([w.b3B(t,"QR restore"),B.R,A.B(A.a([w.aZv(t,!0,B.jr,B.aP,B.aP,new C.eJD(w,d),"Show to scan","QR code"),B.av,w.ax1(t,B.j_,B.b6,B.bu,new C.eJE(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d7,w.b3B(t,"Backup files"),B.R,A.B(A.a([w.ax1(t,B.hA,B.aV,B.bU,new C.eJF(w,d),"Full copy","Backup file"),B.av,w.ax1(t,M.yo,B.aF,B.aM,new C.eJG(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.O,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
csn(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f_,B.cY,B.fx],k):A.a([B.aZ,B.aV,B.bU],k)
w=A.ao(l,A.X(B.u6,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kT,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aPx(!0,A.m(13),64,D.bCF,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aQG,l,l,l)
r=C.bCm(r.gwT(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.btR,A.w(A.a([v,A.B(A.a([s,B.er,A.E(A.w(A.a([u,B.at,t,B.P,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fL,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cD,B.c.j(0.85),l,l,l,l),l,l,l,new C.eJC(d),l,l,l,A.nz(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aNY,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b3B(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aZv(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.afI:B.aQ
if(e)w=B.aP.j(o?0.45:0.35)
else{w=o?B.e1:B.bN
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aP.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.r7,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.az,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eF(new A.D(E.Yx,A.w(A.a([t,B.ac,u,B.bD,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cw,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
ax1(d,e,f,g,h,i,j){return this.aZv(d,!1,e,f,g,h,i,j)}}
C.arK.prototype={
T(){return new C.bkc()}}
C.bkc.prototype={
a_(){this.a1()
this.aeb()},
aeb(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aeb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCo(p.c,p.d),$async$aeb)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eJg(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eJh(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeb,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.At:B.ix,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eD,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eJi(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zv],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.f_,B.cY,B.fx],s):A.a([B.aZ,B.aV,B.bU],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eV,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dj,B.L,h,h)
p=C.bCm(p.gwT(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.w(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fL,h,h,h)],u),B.m,h,B.b8,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.YS,h,h,1/0)
t=g?D.bgS:B.c
q=A.m(24)
p=A.I(w?B.aP.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dm,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a7s,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e8n)
else{m=A.m(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pM(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bP,h,h,h))}}o.push(B.aR)
n=w?B.aP:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aP:B.aV).j(0.35),B.q,1)
k=w?B.Nm:B.NT
k=A.X(k,w?B.aP:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.av,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a5,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iD,h,h,h))
return A.c7(h,f,A.bl(!0,A.w(A.a([new A.D(A7.Mw,e,h),A.E(A.c9(A.w(A.a([s,B.aR,A.p(h,A.w(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tN,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.aif,h,h,B.ag),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arP.prototype={
T(){return new C.aE9(A.z3(B.LM,B.nG,B.ub))}}
C.aE9.prototype={
q(){this.d.q()
this.a2()},
aLE(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iN(w,d)},
c9n(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i6I(t)
if(s!=null){this.aLE(s)
return}r=C.hfy(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aLE(B.a.i(B.a.b2(r,B.a.cK(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eD(A.a([A.aH(t,t,t,t,A.X(u.f?B.rc:A2.Ns,t,t,t,t,t),t,t,t,new C.eJk(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.At,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.frH,t,t,t,1,t,!0),q=A.z2(u.d,B.bT,u.gc9m()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c7(r,B.w,new A.an(B.W,t,B.b0,B.r,A.a([q,p,A.ao(32,A.p(t,D.fqv,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jl,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIX.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.NP.prototype={
T(){return new C.aEb(D.a9E,A.a([],x.D))},
br(){return this.r.$0()},
ge1(){return this.c}}
C.aEb.prototype={
gczK(){return J.bDw(this.e,0,new C.eK2())},
a_(){this.a1()
$.aW.bZ$.push(this)
this.vC()},
q(){$.aW.hI(this)
this.a2()},
j_(d){if(d===B.fv)this.vC()},
vC(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CH(q.a.c).d6(0,B.k2),$async$vC)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eJZ(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eK_(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vC,v)},
HL(d){return this.bI2(d)},
bI1(){return this.HL(null)},
bI2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i8Q(l,d),$async$HL)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lh(l,r,q,D.d63,new A.S(Date.now(),0,!1))
w=4
return A.b(C.L_(t.a.c,p),$async$HL)
case 4:o=f
w=5
return A.b(t.vC(),$async$HL)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.J(x.q).f.U(D.eTZ)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.J(q).f.U(D.eVI)
else n.J(q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.En(m)
case 1:return A.h(u,v)}})
return A.i($async$HL,v)},
En(d){return this.cdj(d)},
cdj(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$En=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hA(s,new C.arQ(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$En)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.L_(u.a.c,t),$async$En)
case 5:case 4:w=6
return A.b(u.vC(),$async$En)
case 6:return A.h(null,v)}})
return A.i($async$En,v)},
vo(d){return this.bXZ(d)},
bXZ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bBV(),$async$vo)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hA(r,D.aG9,!0,"NgmyWorksheetProjectScan",x.N),$async$vo)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCn(q),$async$vo)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.J(x.q).f
r.U(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h0Z(s)
w=15
return A.b(C.L_(t.a.c,p),$async$vo)
case 15:o=f
w=16
return A.b(t.vC(),$async$vo)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.J(x.q).f.U(D.eVN)
w=1
break}r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.En(p)
case 1:return A.h(u,v)}})
return A.i($async$vo,v)},
Nz(d){return this.bGI(d)},
bGI(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cb(null,null,!0,null,new C.eJK(d),s,null,!0,!0,x.y),$async$Nz)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oD(t.a.c,A.a([],x.D)),$async$Nz)
case 6:w=7
return A.b(t.vC(),$async$Nz)
case 7:s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(D.eU3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nz,v)},
cdw(d){var w=this.c
w.toString
A.bR(B.K,null,new C.eJT(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b4c(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jA
else w=B.c
v=A.m(16)
u=A.I(p?B.e1:B.bN,B.q,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.az,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.w(A.a([s,B.ac,t,B.bD,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vq,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
a_p(d,e){return this.cdk(d,e)},
cdk(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_p=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(B.K,null,new C.eJO(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_p)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hoy(r,new C.eJP(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NB(d,e),$async$a_p)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_p,v)},
b19(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.ay
else t=h.a?B.aQ:B.az
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.B7,A.B(A.a([s,B.bd,t,A.X(B.ey,w?B.bs:B.bl,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah)},
cka(d,e,f,g,h,i){return this.b19(!1,d,e,f,g,h,i)},
NB(d,e){return this.bGS(d,e)},
bGS(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l2(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NB)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAD(t.a.c,d.a),$async$NB)
case 6:w=7
return A.b(t.vC(),$async$NB)
case 7:r=t.c
if(r==null){w=1
break}r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NB,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tK(o),m=o?B.bZ:B.ix
if(q.f)o=D.b5q
else{w=q.bBg(n)
v=q.bX3(n)
u=q.gbyn()
if(o)t=B.jA
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aR,new C.Fl(A.p(p,A.B(A.a([q.aAz(N.N3,"Projects",n,D.a9E),q.aAz(B.vC,"Cashier",n,D.aVu),q.aAz(B.FM,"Family Tree",n,D.h3q)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ek,0.95,u,p),B.by],r)
w=q.d
if(w===D.a9E){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.az,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b7,new C.awx(q.gaPP(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.ckc(n)],r))}else{o=q.a
if(w===D.aVu)u.push(new C.anQ(o.c,n,p))
else{w=q.r
u.push(new C.aoY(o.c,o.d,o.e,o.f,new C.eK5(q),new C.eK6(q),new A.cx(w,x.b4)))}}o=A.c9(A.w(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.Mq,p,p,B.ag)}return A.c7(p,m,A.bl(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bBg(d){var w=null,v=A.m(8),u=d.a,t=A.X(Q.a_8,u?B.bs:B.bl,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kU,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.O,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eJH(this),w,w,w,w,w,w,w)},
gbyn(){switch(this.d.a){case 0:return D.a8W
case 1:return D.fV4
case 2:return D.a8X}},
bX3(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cy,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bNf,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.byb,A.aF(!1,B.a1,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bKM,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eJL(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.Fl(A.p(w,A.w(A.a([new A.D(E.YD,s,w),A.p(w,A.w(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.AB(this.gczK()),w,w,w,w,w,w,D.fbm,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vp,B.jl,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fV3,w)},
aAz(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bl
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bl
return A.E(A.aF(!1,B.a1,!0,u,A.aL(!1,s,!0,A.df(u,A.B(A.a([w,B.ec,new A.dq(1,B.co,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b8,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iB,u,u,u,B.Fs,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eK1(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),1)},
ckc(d){var w,v,u,t,s,r,q=this,p=null
if(J.cn(q.e)){w=d.a
v=w?B.e_:B.c
u=A.m(15)
t=A.p(p,D.bKR,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eV,28)],x.V),D.bWK,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.az,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fl(A.p(p,A.w(A.a([t,B.d7,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dY,A.B(A.a([A.E(q.aRo(B.j_,"Scan QR",new C.eJW(q),d),1),B.av,A.E(q.aRo(M.yo,"Upload file",new C.eJX(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fBI,q.gaPP(),A.bn(B.aV,p,p,p,B.c,B.fO,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.buV,1.05,D.a8W,p)}w=J.b6(q.e,new C.eJY(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Fl(A.w(w,B.m,p,B.e,B.j,0,B.p),16,B.bS,1,D.a8W,p)},
aRo(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aF(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.w(A.a([A.X(d,B.aZ,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.f9O,B.L,w,w)],x.p),B.m,w,B.e,B.O,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.agZ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)},
ckb(d,e){var w,v,u=null,t=e.a,s=t?B.e_:B.c,r=A.m(14),q=A.I(t?B.e1:B.bN,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.em,10)],x.V),o=A.m(14),n=t?B.bs:B.bl
n=A.bw(B.Vh,new A.fH(1.7777777777777777,C.aPx(!0,B.fw,1/0,N.N3,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.w(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.az,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.AB(d.gwT()),u,u,u,u,u,u,D.f7X,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aL(!1,o,!0,A.w(A.a([n,new A.D(B.bB,A.B(A.a([v,A.aH(u,u,u,u,A.X(Ag.NF,t?B.bs:B.bl,u,u,u,u),u,u,u,new C.eJU(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eJV(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e5,u,u,u,1/0)}}
C.bwI.prototype={}
C.qX.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcSX(){var w,v,u,t,s=this.c
if(s===B.k.k0(s))w=B.o.u(B.k.N(s))
else{v=B.k.ab(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lh.prototype={
gwT(){return B.d.cJ(this.d,0,new C.cw2())},
ag(){var w=this,v=w.d,u=A.U(v).k("M<1,a5<n,@>>")
v=A.C(new A.M(v,new C.cw1(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bbh(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lh(w.a,w.b,v,u,w.e)},
baZ(d){return this.bbh(d,null)},
Ss(d){return this.bbh(null,d)}}
C.Hn.prototype={
a5(){return"FamilyGender."+this.b}}
C.hX.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hkn(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDg(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hX(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.akc.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kB.prototype={
gao0(){var w=this.f
return new A.a_(w,new C.bN8(),A.U(w).k("a_<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.U(v).k("M<1,a5<n,@>>")
v=A.C(new A.M(v,new C.bN7(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i_a(w.y)],x.N,x.z)},
yy(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kB(w.a,v,u,t,s,r,w.r,q,p,o)},
bbg(d,e){var w=null
return this.yy(w,w,d,e,w,w,w,w)},
cIF(d,e,f,g,h,i,j){return this.yy(d,e,f,g,h,i,j,null)},
aDl(d,e){var w=null
return this.yy(w,w,w,d,w,w,e,w)},
cH8(d){var w=null
return this.yy(w,w,w,w,w,w,d,w)},
cHw(d){var w=null
return this.yy(w,w,w,w,w,w,w,d)},
aD7(d){var w=null
return this.yy(w,w,w,w,d,w,w,w)},
cIa(d,e,f){var w=null
return this.yy(w,d,w,e,w,w,f,w)},
cGW(d){var w=null
return this.yy(w,w,d,w,w,w,w,w)},
cHJ(d,e){var w=null
return this.yy(d,w,w,w,w,e,w,w)}}
C.cw3.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cw4.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aGe.prototype={}
C.b7R.prototype={
bA(d){this.a=d.a
this.b=d.b},
cU(d){var w=new C.b7R()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b7Q.prototype={
gwb(){return!0},
gFU(){return this.z.b<this.b.length},
aT0(d){switch(0){case 0:return d.a.c}},
aSI(d){switch(0){case 0:return d.a.d}},
bQt(d,e){switch(0){case 0:return new A.hK(d,e)}},
bPR(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h4(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iC(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.H7(b4)
switch(0){case 0:v=b5.b
u=new A.ky(0,v,0,1/0)
t=w===B.Th
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fN(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h4(b4,u,!0)
f=b1.aT0(g)
f.toString
e=b1.aSI(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGe(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGe(k,j,i))}d=s.length
switch(0){case 0:q=b5.cu(new A.hK(m,l))
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
for(q=B.d.fN(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aT0(g)
e=b1.aSI(g)
e.toString
a9=b1.bPR(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bQt(a6,a3+a9)
b0=g.a
g.a=new A.iC(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h0(d){var w,v,u,t,s,r=this
r.lh(d)
w=d.b
w.i8()
v=A.dp()
u=r.a
v.e9(u.a,u.b,0,1)
w.oU(0,v)
for(u=r.z,u=B.d.dq(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h0(d)
w.nh(0)},
Gp(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i8(){return this.z}}
C.buY.prototype={}
var z=a.updateTypes(["aA<~>()","R(hX)","R(kB)","~()","R(nc)","a5<n,@>(kB)","H(kB,kB)","n(hX)","kB(a5<@,@>)","R(lh)","R(ub)","nc(a5<@,@>)","ub()","H(lh,lh)","hX(a5<@,@>)","a5<n,@>(hX)","R(qX)","aA<~>(lh)","eE<n?>(hX)","H(hX,hX)","n?(hX)","a5<n,@>(nc)","Zz(Y)","n(n)","acK(Y)","r(oe)","H(nc,nc)","hX(hX)","cL(bv<n,Fy>)","cL(JO)","~(hX)","H?(hX)","hX()","ai<hX>()","R(ua)","R(JO)","D(hX)","~(Hn)","R(aei)","r(Hn,n,a0)","YY(Y)","bv<n,ai<a5<n,@>>>(n,ai<nc>)","~(H)","+count,id,name(H,n,n)(kB)","kB(kB)","ZU(Y)","ZV(Y)","R(ly)","ly()","n(kB)","a0F(Y)","Yy(Y)","Yx(Y)","YW(Y)","Z_(Y)","r(qX)","ad4(Y)","~(lZ)","aA<~>([n?])","K(K,lh)","r(lh)","K(K,qX)","a5<n,@>(qX)","qX(a5<@,@>)","Yw(Y)","So(Y)","cr(Hm)","lh(a5<@,@>)","ua()","n(lh)","a5<n,@>(lh)","n(S)","H(hX)","kB(a5<n,@>)","Y5(Y)"])
C.fzx.prototype={
$1(d){return d.a+" "+d.b},
$S:118}
C.fzw.prototype={
bkq(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qP(s,d,B.hB,"book",E.F7),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.KO(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bkq(d)},
$S:297}
C.fzy.prototype={
$1(d){return d.b},
$S:118}
C.fIK.prototype={
$1(d){var w=null
return A.eJ(w,B.K,new F.Pa(this.a,this.b,w),w,w,0,B.Yy,B.d0,w,w,w)},
$S:47}
C.fon.prototype={
$1(d){return d!=null},
$S:235}
C.foo.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:235}
C.fou.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:161}
C.fxg.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fb(d,w,w,w,A.h7(w,B.rC,w,w,w,w,w,w,w,B.ds,w,w,10.5,w,B.el,w,!0,w,w,w,w),w),u=f?B.el:B.vx
return new A.nK(D.bqx,A.a9i(A.a([new A.fP(130,w,v),new A.yL(1,B.FF,A.fb(e,w,w,w,A.h7(w,g==null?D.eaF:g,w,w,w,w,w,w,w,B.ds,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xn,B.lt))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1915}
C.fxf.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vo(999)
f=A.wW(A.lt(h,A.fb("Cashier",h,h,h,A.h7(h,D.zh,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.el,h,!0,h,h,h,h),h),h,new A.kz(D.eaw,h,f,B.hH,h),h,h,D.br0,h))
w=A.wW(A.fb("Debt receipt",h,h,h,A.h7(h,h,h,h,h,h,h,h,h,B.ds,h,h,22,h,B.el,h,!0,h,h,h,h),h))
v=A.wW(A.fb(C.wH(new A.S(Date.now(),0,!1),!0),h,h,h,D.a7z,h))
u=A.vo(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fb(s,h,h,h,A.h7(h,h,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.el,h,!0,h,h,h,h),h)
r=A.fb("Person who owes",h,h,h,D.a7z,h)
q=A.vo(10)
p=x.C
u=A.lt(h,A.yG(A.a([s,new A.fP(h,2,h),r,new A.fP(h,10,h),A.lt(h,A.yG(A.a([A.fb("Amount owed",h,h,h,D.a7z,h),new A.fP(h,2,h),A.fb(A.AB(t.c),h,h,h,A.h7(h,D.zh,h,h,h,h,h,h,h,B.ds,h,h,20,h,B.el,h,!0,h,h,h,h),h)],p),B.qZ,B.lt),h,new A.kz(B.p5,h,q,B.hH,h),h,h,D.bqe,1/0)],p),B.qZ,B.lt),h,new A.kz(E.aHp,h,u,B.hH,h),h,h,D.bs2,1/0)
q=new A.nt(D.eaz,0.9,B.kM)
r=A.vo(12)
s=i.c
o=s.$2("Original due",C.wH(t.r,!1))
n=s.$2("Current due",C.wH(t.f,!1))
m=i.d
l=new A.nt(m,1.1,B.kM)
k=A.vo(8)
j=i.a
k=A.a([o,n,new A.fP(h,6,h),A.lt(h,A.wW(A.fb(t.gaK9(),h,h,h,A.h7(h,m,h,h,h,h,h,h,h,B.ds,h,h,11,h,B.el,h,!0,0.5,h,h,h),h)),h,new A.kz(h,new A.px(l,l,l,l),k,B.hH,h),h,h,D.br8,1/0),new A.fP(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zh))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zh))
else{n=A.fb("Missed days ("+n+")",h,h,h,A.h7(h,B.rC,h,h,h,h,h,h,h,B.ds,h,h,10.5,h,B.el,h,!0,h,h,h,h),h)
m=A.U(o).k("M<1,RX>")
o=A.C(new A.M(o,new C.fxe(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fP(h,4,h),n,new A.fP(h,6,h),new C.b7Q(5,5,new C.b7R(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fP(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fP(h,8,h),w,new A.fP(h,3,h),v,new A.fP(h,16,h),u,new A.fP(h,10,h),A.lt(h,A.yG(k,B.xn,B.lt),h,new A.kz(h,new A.px(q,q,q,q),r,B.hH,h),h,h,B.aha,1/0)],p)
w=j.a
if(w!=null){v=new A.nt(B.Ia,1,B.kM)
B.d.v(f,A.a([new A.fP(h,16,h),A.fb("Debtor signature",h,h,h,A.h7(h,B.rC,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.el,h,!0,h,h,h,h),h),new A.fP(h,6,h),A.lt(h,new A.HD(w,B.Vs,h,h),h,new A.kz(h,new A.px(v,v,v,v),A.vo(6),B.hH,h),82,h,B.Mu,1/0)],p))}f.push(new A.fP(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fb(w,h,h,h,D.f0T,h))
f.push(new A.fP(h,18,h))
f.push(A.wW(A.fb("NGMY.ORG",h,h,h,A.h7(h,D.zh,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.el,h,!0,1.8,h,h,h),h)))
return f},
$S:358}
C.fxe.prototype={
$1(d){var w=null,v=new A.nt(D.Ib,0.7,B.kM),u=A.vo(999)
return A.lt(w,A.fb(C.wH(d,!1),w,w,w,A.h7(w,D.Ib,w,w,w,w,w,w,w,B.ds,w,w,9.5,w,B.el,w,!0,w,w,w,w),w),w,new A.kz(w,new A.px(v,v,v,v),u,B.hH,w),w,w,D.bwg,w)},
$S:1916}
C.c1e.prototype={
$1(d){var w=null,v=B.bz.j(0.08),u=A.m(999),t=A.I(B.bz.j(0.28),B.q,1)
return A.p(w,A.d(C.wH(d,!1),w,w,w,w,w,w,D.f7r,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eC,w,w,w)},
$S:1917}
C.fJf.prototype={
$1(d){var w=null,v=A.aI(d,B.bV,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bO7,w,w,w,new C.fJc(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eJ(w,B.K,new A.cT(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.D(B.Yo,A.w(A.a([new A.bI(B.a8,w,w,t,w),new A.dq(1,B.co,A.c9(A.w(A.a([new A.ev(new C.aXU(r,w),s),B.R,A.B(A.a([A.E(A.eC(B.yA,D.fy3,new C.fJd(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f9,w,new A.b7(A.m(14),B.Y),new A.ay(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dn(B.a0F,D.fuC,new C.fJe(r,d),A.bn(B.aZ,w,w,w,B.c,w,B.f9,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.O,0,B.p),B.r,w,B.y,w,w,w,w,B.ag),w)],p),B.m,w,B.e,B.O,0,B.p),w),B.f,B.az,0,w,w,w,w,w,B.ah),w),w,w,0,Aj.YL,B.d0,w,w,w)},
$S:47}
C.fJc.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fJd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gb9()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m_(2.5),$async$$0)
case 4:w=3
return A.b(e.hu(B.fZ),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eT(B.dD.gaN(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rU(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fJe.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fDR(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.J(x.q).f
s.U(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fJ7.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eJ(w,B.az,A.w(A.a([new A.D(D.brR,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.ny,w,w,w),1),A.aH(w,w,w,w,B.lr,w,w,w,new C.fJ5(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.co,new A.D(B.fW,A.bw(A.m(14),A.fM(t,B.A,w,w,B.ci,B.du,!1,w,!1,w,w),B.aq),w),w),new A.D(B.M8,new A.a7(1/0,w,A.dn(B.oW,D.aR7,new C.fJ6(t,this.c,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.O,0,B.p),w,w,w,B.Mk,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fJ5.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fJ6.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rU(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fJj.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eJ(w,B.az,new A.D(D.brZ,A.w(A.a([A.B(A.a([D.bxi,A.aH(w,w,w,w,B.lr,w,w,w,new C.fJh(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.ev(A.bw(A.m(14),A.p(w,A.b3(w,w,w,new C.ba_(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dn(B.oW,D.aR7,new C.fJi(t,s,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.O,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fJh.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fJi.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gb9()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m_(2.5),$async$$0)
case 4:w=3
return A.b(e.hu(B.fZ),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eT(B.dD.gaN(s))
w=5
return A.b(A.rU(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fse.prototype={
$1(d){return d.a===this.a},
$S:256}
C.dFu.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dFf.prototype={
bjF(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e_:B.c
s=u.a
w=2
return A.b(A.bR(t,null,new C.dFi(s,q,e),p,!0,!0,!1,B.Ir,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dFj(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bjF(d,e)},
$S:1918}
C.dFi.prototype={
$1(d){var w,v=null,u=this.c===B.w5,t=u?D.dcc:D.d8i
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.az,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bl(!0,new A.D(K.ahK,A.w(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ii(!0,v,v,B.y,L.aOf,new C.dFh(this.a,w,t,d),t.length,v,B.dR,B.ag,!0)],x.p),B.aj,v,B.e,B.O,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dFh.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bs:B.bl).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aXT(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dFg(t.d,r),s,s,s,s,s,s,s)},
$S:186}
C.dFg.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dFj.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dFd.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:95}
C.dFe.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.ct,e,v)
return new A.cZ(e,!1,A.ip(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e0(new C.dFc(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ah),v,v,v),v,new A.bf(t,new A.bq(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:31}
C.dFc.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bV,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e_:B.c,f=A.m(14),e=A.I((h?B.bs:B.bl).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.ek,A.X(B.cD,i.a.d.a?B.bs:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dEY(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aRV("Name")
r=l.a
q=r.d==null?k:new C.dEZ(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bo:B.lK
n=A.I(B.cY.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bb9(new A.D(B.fA,A.aL(!1,p,!0,A.p(B.A,C.aXT(m==null?"\ud83d\udc64":A.fy4(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kG,k,B.a7j,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aSy("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dF_(r,a0),r.d===B.w5),1),B.ab,A.E(i.aSy("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dF4(r,a0),r.d===B.a4i),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bI(B.a3,k,k,A.hi(D.bMv,D.fwp,new C.dF5(r,l.e,a0),A.fx(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.ue(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aRW("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dW,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bs:B.bl).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wH(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.w(A.a([t,B.bD,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bJm],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bm,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dF6(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ah))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aRV("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b_v(r.b.length!==0,B.mt,new C.dF7(r,i,a0),new C.dF8(r,a0),"Upload from gallery","ID photo"))
v.push(i.b_v(r.c.length!==0,D.bCD,new C.dF9(r,i,d,a0),new C.dFa(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ah.a78("Signature (optional)",t,new C.dFb(a0),new C.dF0(a0,t),new C.dF1(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bs:B.bl
s=(i?B.bs:B.bl).j(0.28)
s=A.E(A.dU(E.aR0,new C.dF2(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.tH,k,new A.b7(A.m(10),B.Y),new A.ay(s,1,B.q,-1),k,k,k,k)),1)
t=A.bn(B.cY,k,k,k,B.c,k,B.tH,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uK,k,k,k),new C.dF3(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.c9(A.w(v,B.aj,k,B.e,B.O,0,B.p),B.r,k,B.y,k,k,k,k,B.ag),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vt,B.jl,k,k,360)},
$S:164}
C.dEY.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dEZ.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dF_.prototype={
$0(){return this.b.$1(new C.dEX(this.a))},
$S:0}
C.dEX.prototype={
$0(){var w=this.a
w.d=B.w5
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dF4.prototype={
$0(){return this.b.$1(new C.dEW(this.a))},
$S:0}
C.dEW.prototype={
$0(){var w=this.a
w.d=B.a4i
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dF5.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dF6.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wL(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dEV(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEV.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcg(),w.gcd(),w.gct(),0,0,0,0,0)},
$S:0}
C.dF7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.P7(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dEU(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEU.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dF8.prototype={
$0(){return this.b.$1(new C.dET(this.a))},
$S:0}
C.dET.prototype={
$0(){return this.a.b=""},
$S:0}
C.dF9.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e_:B.c
w=3
return A.b(A.bR(q,null,new C.dER(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.P7(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dES(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dER.prototype={
$1(d){var w=null
return A.bl(!0,A.w(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amS,w,w,w,w,new C.dEL(d),!1,w,w,w,w,w,w,w,D.fmV,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amQ,w,w,w,w,new C.dEM(d),!1,w,w,w,w,w,w,w,D.ftE,w,w,w)],x.p),B.m,w,B.e,B.O,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dEL.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dEM.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dES.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dFa.prototype={
$0(){return this.b.$1(new C.dEQ(this.a))},
$S:0}
C.dEQ.prototype={
$0(){return this.a.c=""},
$S:0}
C.dFb.prototype={
$0(){return this.a.$1(new C.dEP())},
$S:0}
C.dEP.prototype={
$0(){},
$S:0}
C.dF0.prototype={
$0(){return this.a.$1(new C.dEO(this.b))},
$S:0}
C.dEO.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dF1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahe(u.a,null,null,new C.dEN(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEN.prototype={
$4(d,e,f,g){this.a.$1(new C.dEK(this.b,d))},
$S:439}
C.dEK.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dF2.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dF3.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.J(x.q).f.U(D.eXE)
return}if(w.a.d==null){w.c.J(x.q).f.U(D.eUA)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dFx.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:95}
C.dFy.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e_:B.c,n=A.m(14),m=A.I((p?B.bs:B.bl).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.az,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AB(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yZ(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yZ(r).length>0?B.bz:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bl
t=(q?B.bs:B.bl).j(0.28)
s=x.p
return new A.cZ(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.w(A.a([p,B.P,v,u,B.aB,A.B(A.a([A.E(A.dU(B.nz,new C.dFv(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jE,r,new A.b7(A.m(10),B.Y),new A.ay(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fu2,new C.dFw(d),A.bn(B.cY,r,r,r,B.c,r,B.jE,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.O,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Ba,E.YD,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ah),r,r,r),r)},
$S:31}
C.dFv.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dFw.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dFr.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dFs(r),p=r.a.d.a,o=p?B.e_:B.c,n=A.m(14),m=A.I((p?B.bs:B.bl).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.az,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AB(l.c),s,s,s,s,s,s,D.f8V,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iy((r.a.d.a?B.bs:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_t,"View receipt",new C.dFk(r,d,l))
u=l.x!=null
t=u?B.rh:B.pZ
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.brW,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dFl(r,d,l)),q.$3$icon$label$onTap(B.Br,"Edit",new C.dFm(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mt,"View / download ID",new C.dFn(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bCC,"View / download selfie",new C.dFo(r,d,l)))
if(l.gaEW())p.push(q.$3$icon$label$onTap(A6.a0w,"View / download signature",new C.dFp(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bz,B.e6,"Delete",new C.dFq(r,d,l)))
p.push(B.at)
return A.bl(!0,new A.D(B.vp,A.p(s,A.w(p,B.m,s,B.e,B.O,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dFs.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.az
else w=d
return A.aL(!1,v,!0,new A.D(B.eR,A.B(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1919}
C.dFk.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fJb(w,this.c)},
$S:0}
C.dFl.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.RO(this.c)},
$S:0}
C.dFm.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.D0(this.c)},
$S:0}
C.dFn.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCK(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dFo.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCK(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dFp.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fJg(w,this.c)},
$S:0}
C.dFq.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.NM(0,this.c)},
$S:0}
C.dFz.prototype={
$1(d){return d.x==null},
$S:256}
C.dFA.prototype={
$1(d){return d.x!=null},
$S:256}
C.dFB.prototype={
$2(d,e){return d+e.c},
$S:1920}
C.dFC.prototype={
$0(){return this.a.byS()},
$S:0}
C.dFt.prototype={
$0(){return this.a.aeo(this.b)},
$S:0}
C.fsO.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fsP.prototype={
$0(){return B.d.gI(D.a1I)},
$S:z+68}
C.d5j.prototype={
$0(){var w=this.a
return w.m(new C.d5h(w,this.b))},
$S:0}
C.d5h.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d5i.prototype={
$0(){},
$S:0}
C.d5k.prototype={
$0(){var w=this.a.gbXN()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fuS.prototype={
$1(d){return C.h58(A.a2(d,x.N,x.z))},
$S:z+11}
C.fuT.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fuU.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aM(w,v)
return d.d.aM(0,e.d)},
$S:z+26}
C.fHQ.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fQ_.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fs5.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bN3.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f1(e,v)?v:null},
$S:1921}
C.fIo.prototype={
$1(d){var w=this
return new C.YY(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d5Z.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d5Y(w,d))},
$S:z+66}
C.d5Y.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5N.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cI(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d5K.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d5l.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d5m.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d5O.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d5u.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e_:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d5s(d),w,w),A.bG(B.wr,new C.d5t(d),A.bn(B.mW,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d5s.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d5t.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d5v.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d5L.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d5M.prototype={
$0(){return B.d.gI(D.yK)},
$S:z+12}
C.d5q.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyg(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.So(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d5r.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5w.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Yw(v,u,J.ad(w.d),null)},
$S:z+64}
C.d5x.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5X.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aC(s,new C.Ye(r.y,r.gyg(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d5V(r),s,s,s,s,s,s,!1,B.a7)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9o(v,e,w,u,t,r.gbOW(),C.hkm(r.y.Q),r.gyg(0),s)
w=t}return A.c6(q,new C.d5W(r,e),new A.D(B.YE,w,s))},
$S:1922}
C.d5W.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcZ(t).ay){t=this.b
u=x.cy.a(B.d.gcZ(u.f.f)).guH(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dp()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fC(v*3.141592653589793*0.5)
return A.ft(B.a3,A.dd(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d5V.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aG2(B.pM,B.iC)},
$S:0}
C.d5H.prototype={
$0(){var w=this.a
return w.m(new C.d5G(w))},
$S:0}
C.d5G.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d5I.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.d5n.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jV.j(0.5),r=x.p,q=A.a([D.flx,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cn(p.d)?"Write this book":"Write a new book"
q.push(p.Yy(d,B.dX,w,J.cn(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Yy(d,L.akJ,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cI(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cB,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kn.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cB,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kn.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Yy(d,A_.alS,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Yy(d,B.q4,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Yy(d,B.q4,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eJ(u,E.AE,A.bl(!0,new A.D(A5.xG,A.w(q,B.F,u,B.e,B.O,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ai8,B.d0,u,new A.b7(t,new A.ay(s,1.4,B.q,-1)),u)},
$S:47}
C.d5J.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.d5A.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cI(w.d)
return new C.Z_(v,J.cI(w.d),w.r+1,null)},
$S:z+54}
C.d5B.prototype={
$1(d){var w=null
return A.ok(!1,A.ek(w,w,w,E.AE,new A.kh(this.a,new C.d5z(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:334}
C.d5z.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7_,B.oj,A.E(A.d(e,w,w,w,w,w,w,B.iN,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:747}
C.d5C.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d5D.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:189}
C.d5E.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5F.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AL(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Rc(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d5y(s,t))
w=4
return A.b(s.kV(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5y.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5Q.prototype={
$1(d){var w=null
return A.ok(!1,A.ek(w,w,w,E.AE,new A.kh(this.a,new C.d5P(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:334}
C.d5P.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7_,B.oj,A.E(A.d(e,w,w,w,w,w,w,B.iN,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:747}
C.d5R.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d5S.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:189}
C.d5T.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:189}
C.d5U.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AL(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kV(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5o.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bgI(B.pM,U.LW)},
$S:0}
C.d5p.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aG2(B.pM,U.LW)},
$S:0}
C.d7J.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7K.prototype={
$1(d){var w=this.a
return w.m(new C.d7I(w))},
$S:8}
C.d7I.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d7L.prototype={
$1(d){var w=this.a
return w.m(new C.d7H(w))},
$S:8}
C.d7H.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d7M.prototype={
$1(d){var w=this.a
return w.m(new C.d7G(w))},
$S:8}
C.d7G.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d7N.prototype={
$0(){var w=this.a
return w.m(new C.d7F(w,this.b))},
$S:0}
C.d7F.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d7O.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1e()
A.a6(this.b,!1).O(new A.bo0(w,v))},
$S:0}
C.d6d.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d6c.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.YW(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d6h.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d6g.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b6P(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hE,v,v,v)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d6e(d),v,v),A.bG(B.wr,new C.d6f(d),A.bn(B.mW,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AE,w,v,v,v,v,D.fkp,v)},
$S:19}
C.d6e.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d6f.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d6i.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d6j.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.c9(A.bW(B.bA,r,B.bq,18,14),B.r,t,B.y,t,D.bsR,t,t,B.ag)},
$S:335}
C.d6b.prototype={
$0(){return this.a.PO(0,this.b)},
$S:0}
C.d6a.prototype={
$0(){return this.a.Pi(0,this.b)},
$S:0}
C.cEO.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cEP.prototype={
$0(){return B.d.gI(D.yK)},
$S:z+12}
C.cEQ.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.D(d,A.c0(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.be),w),0,0,0)},
$S:1924}
C.cYf.prototype={
$1(d){return this.a.m(new C.cYe(this.b,this.c))},
$S:8}
C.cYe.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cYE.prototype={
$1(d){return this.a.m(new C.cYr())},
$S:2}
C.cYr.prototype={
$0(){},
$S:0}
C.cYF.prototype={
$1(d){return this.a.m(new C.cYq())},
$S:2}
C.cYq.prototype={
$0(){},
$S:0}
C.cYG.prototype={
$0(){var w=this.a
return w.m(new C.cYp(w,this.b))},
$S:0}
C.cYp.prototype={
$0(){var w=this.a
return w.d=w.go4().Fy(this.b.a)},
$S:0}
C.cYH.prototype={
$0(){var w=this.a
return w.m(new C.cYo(w,this.b))},
$S:0}
C.cYo.prototype={
$0(){var w=this.a
return w.d=w.go4().cGs(this.b)},
$S:0}
C.cYI.prototype={
$1(d){return this.a.m(new C.cYn())},
$S:2}
C.cYn.prototype={
$0(){},
$S:0}
C.cYJ.prototype={
$0(){var w=this.a
return w.m(new C.cYm(w,this.b))},
$S:0}
C.cYm.prototype={
$0(){var w=this.a
return w.d=w.go4().cGx(this.b.a)},
$S:0}
C.cYK.prototype={
$1(d){var w=this.a
return w.m(new C.cYz(w,d))},
$S:6}
C.cYz.prototype={
$0(){var w=this.a
return w.d=w.go4().cHr(this.b)},
$S:0}
C.cYL.prototype={
$1(d){var w=this.a
return w.d=w.go4().aDa(d)},
$S:2}
C.cYM.prototype={
$1(d){var w=this.a
return w.d=w.go4().cGA(d)},
$S:2}
C.cYO.prototype={
$1(d){var w=this.a
return w.d=w.go4().cHp(d)},
$S:2}
C.cYP.prototype={
$1(d){var w=this.a
return w.m(new C.cYy(w,d))},
$S:8}
C.cYy.prototype={
$0(){var w=this.a
return w.d=w.go4().cHg(this.b)},
$S:0}
C.cYQ.prototype={
$0(){var w=this.a,v=w.go4(),u=B.a.i(w.gyg(0).a.a),t=B.a.i(w.gaAn().a.a)
u=v.bbq(B.a.i(w.gaq7().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.dTt.prototype={
$0(){var w=this.a
w.vO()
w.a.br()
w.a.pR()},
$S:0}
C.dTs.prototype={
$0(){var w=this.a
w.vO()
w.a.br()
w.a.pR()},
$S:0}
C.dTv.prototype={
$0(){var w=this,v=w.b
if(J.cI(v)||J.cn(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dTw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTx.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dTr.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dTu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dTz.prototype={
$0(){this.a.Oh()
return null},
$S:0}
C.dTy.prototype={
$0(){return this.a.Eo(this.b)},
$S:0}
C.dSU.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dSS(d),w,w),r=A.bn(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dST(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dSS.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dST.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dSV.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cGW(this.b)},
$S:0}
C.dSP.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aSa(w.b,w.c,w.d)},
$S:9}
C.dSn.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dSo.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gj(t.a.c),$async$$0)
case 2:s=r.re(q.dG(e,new C.dSA(t)))
if(s!=null&&t.c!=null)t.m(new C.dSB(t,s))
t.a.br()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSA.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSD.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSO.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cHJ(C.hkw(w),w)},
$S:0}
C.dSM.prototype={
$1(d){return new A.e0(new C.dSL(this.a,this.b),null)},
$S:21}
C.dSL.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.e_:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.amv,v,v,v,p>0?new C.dSH(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.w(A.a([r,B.aR,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.an3,v,v,v,new C.dSI(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.O,0,B.p)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSJ(d),v,v),A.bG(B.pk,new C.dSK(d),A.bn(B.bU,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:171}
C.dSH.prototype={
$0(){return this.b.$1(new C.dSG(this.a))},
$S:0}
C.dSG.prototype={
$0(){return--this.a.a},
$S:0}
C.dSI.prototype={
$0(){return this.b.$1(new C.dSF(this.a))},
$S:0}
C.dSF.prototype={
$0(){return++this.a.a},
$S:0}
C.dSJ.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dSK.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dSN.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cHw(this.a.a)
w.r.a9(0)},
$S:0}
C.dSb.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahm(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hec(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dSc.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aD7(w)},
$S:0}
C.dSX.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acK(this.b,w,this.c,null)},
$S:z+24}
C.dSR.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e_:B.c,t=A.m(20),s=A.X(B.ln,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.w(p,B.m,w,B.e,B.O,0,B.p)
return A.ek(A.a([A.bG(D.fvd,new C.dSQ(d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b8,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dSQ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dSd.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dSe.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dSf.prototype={
$1(d){return d.a},
$S:z+7}
C.dSg.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hX(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aD7(w)},
$S:0}
C.dSk.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahm(q)
w=A.U(q).k("a_<1>")
q=A.C(new A.a_(q,new C.dSi(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hec(v.e,null,r,v.f,v.r,new C.dSj(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dSj.prototype={
$0(){return this.a.a9v(this.b)},
$S:0}
C.dSi.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dSl.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("M<1,hX>")
w=A.C(new A.M(w,new C.dSh(this.b),v),v.k("ak.E"))
u.d=t.aD7(w)},
$S:0}
C.dSh.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dSW.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dSx.prototype={
$1(d){return d.length!==0},
$S:3}
C.dSy.prototype={
$1(d){var w=this
return new A.e0(new C.dSw(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dSw.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e_:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.az,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.M(o,new C.dSs(u,e,o),A.U(o).k("M<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.m5,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.w(p,B.aj,v,B.e,B.O,0,B.p)
t=w.a
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSt(d),v,v),A.bG(B.Jj,new C.dSu(t,u,o,e),A.bn(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fix,new C.dSv(t,u,o,d),A.bn(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:171}
C.dSs.prototype={
$1(d){var w=null
return A.dL(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bQ4,w,w,w,new C.dSr(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1925}
C.dSr.prototype={
$0(){return this.a.$1(new C.dSp(this.b,this.c))},
$S:0}
C.dSp.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dSt.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dSu.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dSq(w.c,u))
v.bO(0,B.c8)}},
$S:0}
C.dSq.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dSv.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.dSz.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cIa(this.b,D.tO,C.Gh(v,w.a.c))},
$S:0}
C.dT3.prototype={
$1(d){return d.as},
$S:z+1}
C.dT4.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iN(this.b,w)},
$S:0}
C.dT5.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i8x(v)
return w.Vt(v==null?null:v.a)},
$S:0}
C.dT6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hLR(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cq2(new A.ar(u,t),v.gbhz(),new A.ar(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cOE:D.cN2
q=A.I(s?B.dr:D.bb1,B.q,1)
p=A.m(22)
o=A.bZ(0,A.b3(m,m,m,new C.bcM(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.un(new A.Q(n,n,n,n),new A.a7(u,t,new C.bdF(l.d,v,l.f,w,new C.dT_(l),l.gca1(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bv4(s,new C.dT0(l,e),new C.dT1(l,e),new C.dT2(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b_,B.b4,B.x,r,m,m),B.n),m,m,m,A0.ahe,m,m,m,m)},
$S:224}
C.dT_.prototype={
$1(d){var w=this.a
w.m(new C.dSY(w,d))},
$S:2}
C.dSY.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dT0.prototype={
$0(){var w=this.b
return this.a.b94(1.25,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dT1.prototype={
$0(){var w=this.b
return this.a.b94(0.8,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dT2.prototype={
$0(){var w=this,v=w.b
return w.a.aSa(new A.ar(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.ar(w.c,w.d),w.e.gbhz())},
$S:0}
C.dT7.prototype={
$0(){var w=this.a
return w.m(new C.dSZ(w))},
$S:0}
C.dSZ.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dSm.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fK(new A.fD(s.c)),$async$$0)
case 2:t.xJ("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6n.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhn(u,C.hoC(v.c,u),new C.d6m(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d6m.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d6o.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bkJ(d.d,d.c,u.f.t(0,d.a),new C.d6l(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d6l.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fsS.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.re(new A.cQ(new A.a_(v,new C.fsT(d),w.k("a_<1>")),new C.fsU(),w.k("cQ<1,n>")))},
$S:z+20}
C.fsT.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fsU.prototype={
$1(d){return d.a},
$S:z+7}
C.fsQ.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fsR.prototype={
$1(d){return d.b},
$S:z+7}
C.fsX.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.re(new A.cQ(new A.a_(v,new C.fsY(d),w.k("a_<1>")),new C.fsZ(),w.k("cQ<1,n>")))},
$S:z+20}
C.fsY.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fsZ.prototype={
$1(d){return d.a},
$S:z+7}
C.fsV.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fsW.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d6q.prototype={
$0(){return this.a},
$S:z+32}
C.d6H.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:264}
C.d6z.prototype={
$2(d,e){var w=this.a.c8(0,d,new C.d6A()),v=J.a4(w)
if(!v.t(w,e))v.L(w,e)},
$S:112}
C.d6A.prototype={
$0(){return A.a([],x.s)},
$S:748}
C.d6y.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f1(w,e)
return w===!0},
$S:333}
C.d6r.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d6x.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d6w.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.Cb:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gR(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.Cb:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1927}
C.d6s.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d6B.prototype={
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
break}A:{s=u.gR(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.L(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.Cb:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.b4(w,new C.d6C(r)))w.push(r)}}B.d.bp(w,new C.d6D(a8))
B.d.b0(w,new C.d6E())
q=C.hLQ(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eyU],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.L)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
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
else j.push(d)}}a0=(B.d.gI(k)+B.d.gal(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bnL(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1928}
C.d6C.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d6D.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d6E.prototype={
$2(d,e){return B.o.aM(d.Q,e.Q)},
$S:z+19}
C.d6F.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a4(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cJ(0,0,B.pr)+88-w.gI(n).a}else u=0
for(w=J.a4(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:693}
C.d6G.prototype={
$1(d){return 16+d*156},
$S:246}
C.d6p.prototype={
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
t.n(0,d,new C.Fy(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Fy(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Fy(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.JO(d,new A.u(e+t,w),s,s.length))}},
$S:189}
C.d6t.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIf(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:112}
C.d6u.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d6v.prototype={
$2(d,e){return B.k.aM(d.a,e.a)},
$S:749}
C.d6I.prototype={
$2(d,e){return B.k.aM(d.a,e.a)},
$S:749}
C.d6J.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:463}
C.d6K.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:197}
C.d6L.prototype={
$1(d){return d>=0.5},
$S:119}
C.fau.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.ht(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cu,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1930}
C.eMp.prototype={
$1(d){var w=null,v=A.m(8),u=B.bU.j(0.12),t=A.m(8)
return new A.D(B.nb,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f4E,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Mt,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eMo(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eMo.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dmA.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dmz.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nw,B.L,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dmx(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mh,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dmy(d),w,w)],x.p),B.b8,B.B_,w,u,D.bu5,w,D.bw1,new A.b7(v,B.Y),w,w)},
$S:19}
C.dmx.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dmy.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dmJ.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dmK.prototype={
$1(d){var w=this.a
return w.m(new C.dmI(w,d))},
$S:z+37}
C.dmI.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmL.prototype={
$1(d){var w=null
return A.qj(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmO.prototype={
$1(d){var w=this.a
return w.m(new C.dmH(w,d))},
$S:33}
C.dmH.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dmN.prototype={
$1(d){var w=null
return A.qj(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmP.prototype={
$1(d){var w=this.a
return w.m(new C.dmG(w,d))},
$S:33}
C.dmG.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dmQ.prototype={
$0(){var w=this.a
return w.m(new C.dmF(w))},
$S:0}
C.dmF.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dmR.prototype={
$0(){var w=this.a
return w.m(new C.dmE(w))},
$S:0}
C.dmE.prototype={
$0(){return++this.a.at},
$S:0}
C.dmS.prototype={
$0(){var w=this.a
return w.m(new C.dmD(w))},
$S:0}
C.dmD.prototype={
$0(){return--this.a.ax},
$S:0}
C.dmT.prototype={
$0(){var w=this.a
return w.m(new C.dmC(w))},
$S:0}
C.dmC.prototype={
$0(){return++this.a.ax},
$S:0}
C.dmU.prototype={
$1(d){var w=this.a
return w.m(new C.dmB(w,d))},
$S:8}
C.dmB.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dmM.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dmV.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bU.j(0.18)
else w=q.c.a?B.e_:B.c
v=A.m(12)
if(p)u=B.bU
else u=(q.c.a?B.e1:B.bN).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bU
else t=q.c.a?B.bs:B.bl
t=A.X(f,t,r,r,r,18)
if(p)s=B.bU
else s=q.c.a?B.bs:B.bl
return A.E(A.aF(!1,B.a1,!0,r,A.aL(!1,o,!0,A.df(r,A.w(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eH,r,r,r,B.jE,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dmW(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
$S:z+39}
C.dmW.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dn4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c7M.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:97}
C.c7T.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c7U.prototype={
$2(d,e){var w=J.b6(e,new C.c7S(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c7S.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c7O.prototype={
$1(d){return C.akd(A.a2(d,x.N,x.z))},
$S:z+8}
C.c7P.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c7Q.prototype={
$1(d){return C.h58(A.a2(d,x.N,x.z))},
$S:z+11}
C.c7R.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c7Y.prototype={
$1(d){return new A.aFk(d.f.length,d.a,d.b)},
$S:z+43}
C.c7Z.prototype={
$2(d,e){return B.a.aM(d.c,e.c)},
$S:642}
C.c7V.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c7W.prototype={
$1(d){return d.cH8(C.Gh(d,this.a))},
$S:z+44}
C.dTg.prototype={
$1(d){return C.tV(d,this.a.a.c)},
$S:z+2}
C.dTh.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dTl.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dTm.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dTd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZm(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yh("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p3(r.c,r.e),$async$$0)
case 4:s.yh(p)
w=5
return A.b(s.Jn(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTe.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZm(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yh("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p3(r.c,r.e),$async$$0)
case 4:s.yh(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.UK(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yh("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yh("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yh("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Jn(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.yh(B.a.ef(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dTk.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZl(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yh("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).ck(A.e8(new C.dTj(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p3(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTj.prototype={
$1(d){var w=this.b
return new C.ZU(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dTi.prototype={
$1(d){return D.fZb},
$S:z+46}
C.dTo.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dTp.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dTn(w,d)
return new A.D(B.da,new C.bdJ(this.b,d.c,d.a,w,null),null)},
$S:1931}
C.dTn.prototype={
$0(){return this.a.Xb(this.b.b)},
$S:0}
C.dT8.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dT9.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dTa.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dTb.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dTc.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dTq.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:191}
C.dEC.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dED.prototype={
$0(){return B.d.gI(D.a3b)},
$S:z+48}
C.dEE.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cUQ,44),w,w,w),w,w,new C.biv(u,t,v,w),B.au)},
$S:71}
C.fIR.prototype={
$1(d){return A.oO(new C.fIQ(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:143}
C.fIQ.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e_:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rB,24)],x.V),o=r?B.e1:B.bN
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bU.j(0.18)],x.O)
w=A.p(t,D.bKB,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.az,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.w(A.a([B.R,o,new A.D(E.aid,A.B(A.a([w,B.bd,A.E(A.w(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.ii(!0,t,e,B.y,D.eSN,new C.fIP(this.b,s),20,B.ahO,t,B.ag,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kL,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:115}
C.fIP.prototype={
$2(d,e){var w=null,v=D.a3b[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.e1:B.bN,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.em,8)],x.V),p=A.m(15),o=A.E(new C.a5N(v.a,!0,w),1),n=s?B.jA:B.iU,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.az,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eF(A.bw(p,A.w(A.a([o,A.p(w,A.w(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bs:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.lj,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fIO(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)},
$S:77}
C.fIO.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cfs.prototype={
$0(){return this.a.afr(this.b)},
$S:0}
C.fId.prototype={
$1(d){return D.fVs},
$S:z+74}
C.fPH.prototype={
$1(d){var w=this
return new C.a0F(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fIi.prototype={
$1(d){return new C.Yy(this.a,null)},
$S:z+51}
C.fIh.prototype={
$1(d){return D.fWr},
$S:z+52}
C.cZ1.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZ2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cZ0(w,d))},
$S:33}
C.cZ0.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cZ3.prototype={
$1(d){return this.a.JX()},
$S:2}
C.cZ4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cYY.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cYZ.prototype={
$1(d){return this.a.JX()},
$S:2}
C.cZ_.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cwB.prototype={
$0(){},
$S:0}
C.cwH.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cwI.prototype={
$0(){return this.a.aND(-1)},
$S:0}
C.cwJ.prototype={
$1(d){return this.a.m(new C.cwG())},
$S:2}
C.cwG.prototype={
$0(){},
$S:0}
C.cwK.prototype={
$0(){return this.a.aND(1)},
$S:0}
C.cwL.prototype={
$1(d){return this.a.m(new C.cwF())},
$S:2}
C.cwF.prototype={
$0(){},
$S:0}
C.cwM.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e1:B.bN
return A.ud(u,u,B.aZ,r,u,new C.cwE(t,d),B.Bb,s,w,u,new A.ay(v,1,B.q,-1),B.cc)},
$S:1932}
C.cwE.prototype={
$1(d){var w=this.a
return w.m(new C.cwC(w,this.b))},
$S:8}
C.cwC.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cwN.prototype={
$1(d){return this.a.m(new C.cwD())},
$S:2}
C.cwD.prototype={
$0(){},
$S:0}
C.cwO.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.f9X.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.f9Y.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.f9Z.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.f9V.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gby0()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bw0,new A.ev(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.buU(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:71}
C.f9W.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dC.az(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aV,B.bU,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aF(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eF(D.e8y,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.db(-1.2+t,-0.5),new A.db(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
$S:140}
C.fGS.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.eJz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eJq.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eJr.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eJx.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eJw(w,this.b),null)},
$S:21}
C.eJw.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e_:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eJ(w,u,new A.D(B.ai6,A.w(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.hb_(new C.eJt(r,e),r.a),B.aB,A.B(A.a([A.E(A.dU(B.de,new C.eJu(d),w),1),B.av,A.E(A.bG(B.TY,new C.eJv(r,d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.O,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:99}
C.eJt.prototype={
$1(d){return this.b.$1(new C.eJs(this.a,d))},
$S:33}
C.eJs.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eJu.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJv.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eJy.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Ss(this.b)},
$S:0}
C.eJl.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.baZ(w)},
$S:0}
C.eJp.prototype={
$1(d){return this.bk7(d)},
bk7(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.L_(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iN(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eJo.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a_<1>")
w=A.C(new A.a_(w,new C.eJn(this.b),v),v.k("J.E"))
u.d=t.baZ(w)},
$S:0}
C.eJn.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eJA.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iN(this.b,w)},
$S:0}
C.eJB.prototype={
$1(d){return this.a.bC5(d,this.b)},
$S:z+55}
C.eJm.prototype={
$0(){return this.a.a9u(this.b)},
$S:0}
C.fPx.prototype={
$1(d){return new C.ad4(this.a,this.b,this.c,null)},
$S:z+56}
C.eJD.prototype={
$0(){return this.a.ZU(this.b)},
$S:0}
C.eJE.prototype={
$0(){return this.a.PK(this.b)},
$S:0}
C.eJF.prototype={
$0(){return this.a.Ej(this.b)},
$S:0}
C.eJG.prototype={
$0(){return this.a.ZV(this.b)},
$S:0}
C.eJC.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJg.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eJh.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eJi.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pX(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eJj(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJj.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eK2.prototype={
$2(d,e){return d+e.gwT()},
$S:z+59}
C.eJZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eK_.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eJK.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e_:B.c,s=A.m(24),r=A.p(v,D.bL0,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.az
u=u?B.e1:B.bN
w=x.p
return A.eJ(v,t,new A.D(B.xK,A.w(A.a([r,B.aR,q,B.P,p,B.d7,A.B(A.a([A.E(A.dU(B.nz,new C.eJI(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.f9,v,new A.b7(A.m(14),B.Y),new A.ay(u,1,B.q,-1),v,v,v,v)),1),B.av,A.E(A.bG(D.fyY,new C.eJJ(d),A.bn(B.ay,v,v,v,v,v,B.f9,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.O,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:47}
C.eJI.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eJJ.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eJT.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e_:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fN,28)],x.V),g=k?D.d0p:B.a2w,f=x.p
g=A.p(m,A.w(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eMY,B.at,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cw,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.aia,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b4c(B.b6,B.j_,new C.eJQ(v,d),l,"Camera import","Scan QR"),1),B.av,A.E(v.b4c(B.cA,M.yo,new C.eJR(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bKp,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.az,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bl(!0,new A.D(B.vr,A.p(m,A.w(A.a([g,new A.D(B.ai7,A.w(A.a([w,B.R,u,B.by,t,B.R,A.aF(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.bd,n,A.X(B.ey,k?B.bs:B.bl,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eJS(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.O,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eJQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vo("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJR.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vo("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJS.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Nz(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJO.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e_:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eV,24)],x.V),k=o?B.e1:B.bN
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bs:B.bl
u=A.bw(w,new A.a7(48,48,C.aPx(!0,A.m(12),48,N.N3,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.az,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AB(v.gwT())
s=x.p
r=this.a
return A.bl(!0,new A.D(B.vr,A.p(q,A.w(A.a([B.R,k,new A.D(D.ai4,A.B(A.a([u,B.bd,A.E(A.w(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.AR,r.cka(B.u6,B.aV,new C.eJM(d),p,"QR code or backup file","Transfer project"),r.b19(!0,B.e6,B.ay,new C.eJN(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.O,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eJM.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eJN.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eJP.prototype={
$1(d){return this.bk8(d)},
bk8(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.L_(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vC(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eK5.prototype={
$0(){var w=this.a
w.a.br()
w.m(new C.eK4(w))},
$S:0}
C.eK4.prototype={
$0(){return this.a.r++},
$S:0}
C.eK6.prototype={
$0(){var w=this.a
return w.m(new C.eK3(w))},
$S:0}
C.eK3.prototype={
$0(){return this.a.r++},
$S:0}
C.eJH.prototype={
$0(){var w=this.a.c
w.toString
return A.iN(w,null)},
$S:0}
C.eJL.prototype={
$0(){return this.a.cdw(this.b)},
$S:0}
C.eK1.prototype={
$0(){var w=this.a
return w.m(new C.eK0(w,this.b))},
$S:0}
C.eK0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eJW.prototype={
$0(){return this.a.vo("scan")},
$S:0}
C.eJX.prototype={
$0(){return this.a.vo("file")},
$S:0}
C.eJY.prototype={
$1(d){return this.a.ckb(d,this.b)},
$S:z+60}
C.eJV.prototype={
$0(){return this.a.En(this.b)},
$S:0}
C.eJU.prototype={
$0(){return this.a.a_p(this.b,this.c)},
$S:0}
C.cw2.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cw1.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cw_.prototype={
$1(d){return C.huq(A.a2(d,x.N,x.z))},
$S:z+63}
C.cw0.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.frY.prototype={
$1(d){return d.y===D.ku},
$S:z+2}
C.fQ7.prototype={
$1(d){return C.bAG(d,this.a)},
$S:z+2}
C.fqb.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bN8.prototype={
$1(d){return!d.as},
$S:z+1}
C.bN7.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bN4.prototype={
$1(d){return C.h59(A.a2(d,x.N,x.z))},
$S:z+14}
C.bN5.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bN6.prototype={
$1(d){return J.k(d)},
$S:17}
C.fhv.prototype={
$2(d,e){return e.e.aM(0,d.e)},
$S:z+13}
C.fdb.prototype={
$1(d){return C.fWv(A.a2(d,x.N,x.z))},
$S:z+67}
C.fdc.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fdd.prototype={
$2(d,e){return e.e.aM(0,d.e)},
$S:z+13}
C.fI4.prototype={
$1(d){return J.k(d)},
$S:17}
C.fI5.prototype={
$1(d){return d.a},
$S:z+69}
C.fI6.prototype={
$1(d){return d.length!==0},
$S:3}
C.fI7.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fI8.prototype={
$1(d){return d.Ss(null).ag()},
$S:z+70}
C.fQ5.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fsp.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fuY.prototype={
$1(d){return C.akd(A.a2(d,x.N,x.z))},
$S:z+8}
C.fuZ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fv_.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fv0.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fv1.prototype={
$1(d){return C.tV(d,this.a)},
$S:z+2}
C.fHS.prototype={
$1(d){return C.tV(d,this.a)},
$S:z+2}
C.fQ0.prototype={
$1(d){return C.akd(A.a2(d,x.N,x.z))},
$S:z+8}
C.fQ1.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fQ2.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fs6.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fs7.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fQc.prototype={
$1(d){return!d.as},
$S:z+1}
C.frD.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.frE.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.frF.prototype={
$2(d,e){return B.o.aM(d.Q,e.Q)},
$S:z+19}
C.fPI.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fvK.prototype={
$1(d){return d.Q},
$S:z+72}
C.fHL.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fuV.prototype={
$1(d){return C.akd(A.a2(d,x.N,x.z))},
$S:z+8}
C.fuW.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fuX.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fHG.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fdJ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fdK.prototype={
$1(d){return C.h59(A.a2(d,x.N,x.z))},
$S:z+14}
C.fdL.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fdM.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fdN.prototype={
$1(d){return d.length!==0},
$S:3}
C.fe_.prototype={
$2(d,e){return d.eP(new C.fe0(e))},
$S:1933}
C.fe0.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c9},
$S:1934}
C.fdX.prototype={
$1(d){return C.hQr(d,this.a)},
$S:z+73}
C.fdY.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fdZ.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fi9.prototype={
$1(d){return d.a},
$S:z+49}
C.fia.prototype={
$1(d){return d.length!==0},
$S:3}
C.fib.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fkF.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fpv.prototype={
$1(d){return C.hgw(d,C.Gh(d,this.a))},
$S:z+5}
C.fpw.prototype={
$1(d){return C.hgx(d,C.Gh(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKB.prototype
w.buc=w.q
w=C.aMM.prototype
w.bwA=w.q
w=C.aMN.prototype
w.bwB=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aC5.prototype,"gch7","ch8",25)
var s
w(s=C.az9.prototype,"gca7","ca8",42)
v(s,"gaLT","N7",0)
v(s,"gcpo","AI",0)
v(s,"gbJP","NN",0)
v(s,"gcDl","yi",0)
v(s,"gcj8","a06",0)
v(s,"gbFd","Nv",0)
v(s,"gbKf","WD",0)
w(s,"gbOW","bOX",71)
v(s,"gbzF","zL",0)
v(C.aza.prototype,"gcDh","Fe",0)
v(s=C.aCG.prototype,"gaf3","vD",0)
v(s,"gccM","a_g",0)
v(s,"gaPV","HM",0)
v(s=C.aCD.prototype,"gczu","a2b",0)
v(s,"gaf3","vD",0)
v(s,"gcnr","a0M",0)
v(s,"gcdJ","a_u",0)
w(s,"gca1","ca2",30)
v(s,"gbK6","HR",0)
v(s,"gcAv","cAw",3)
v(s,"gc0A","Yk",0)
w(s,"gc8x","c8y",23)
v(s,"gccw","ccx",3)
v(s=C.aB4.prototype,"gc6l","Pj",0)
v(s,"gc6n","c6o",3)
v(s,"gbGL","a96",0)
v(s=C.aCF.prototype,"gbNq","X7",0)
v(s,"gbXU","XN",0)
v(s,"gctP","a1C",0)
v(s,"gcpY","a1d",0)
v(C.aCE.prototype,"gcpG","agO",0)
v(C.arR.prototype,"gc8v","ZT",0)
v(C.axV.prototype,"ga1W","JX",3)
v(C.axU.prototype,"ga1W","JX",3)
v(C.awE.prototype,"ga1W","JX",3)
v(s=C.aEa.prototype,"gb0y","Qe",0)
v(s,"gbyt","Vn",0)
v(s,"gcdx","cdy",3)
w(C.aE9.prototype,"gc9m","c9n",57)
u(C.aEb.prototype,"gaPP",0,0,null,["$1","$0"],["HL","bI1"],58,0,0)
t(C,"hnO","i_8",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.anJ,C.ua,C.nc,C.Hm,C.aei,C.JG,C.ub,C.JO,C.Fy,C.bdH,C.aIf,C.aoV,C.d6M,C.ly,C.aSs,C.aSr,C.aQt,C.tK,C.qX,C.lh,C.hX,C.kB,C.aGe])
u(A.hV,[C.fzx,C.fzw,C.fzy,C.fIK,C.fon,C.foo,C.fou,C.fxg,C.fxf,C.fxe,C.c1e,C.fJf,C.fJ7,C.fJj,C.fse,C.dFi,C.dFd,C.dFe,C.dER,C.dEN,C.dFx,C.dFy,C.dFr,C.dFs,C.dFz,C.dFA,C.fsO,C.fuS,C.fuT,C.fHQ,C.fQ_,C.fs5,C.fIo,C.d5Z,C.d5l,C.d5u,C.d5L,C.d5q,C.d5w,C.d5n,C.d5A,C.d5B,C.d5z,C.d5Q,C.d5P,C.d7K,C.d7L,C.d7M,C.d6c,C.d6h,C.d6g,C.cEO,C.cEQ,C.cYf,C.cYE,C.cYF,C.cYI,C.cYK,C.cYL,C.cYM,C.cYO,C.cYP,C.dTu,C.dSU,C.dSP,C.dSn,C.dSA,C.dSD,C.dSM,C.dSb,C.dSX,C.dSR,C.dSd,C.dSe,C.dSf,C.dSk,C.dSi,C.dSh,C.dSx,C.dSy,C.dSs,C.dT3,C.dT_,C.d6n,C.d6o,C.fsS,C.fsT,C.fsU,C.fsQ,C.fsR,C.fsX,C.fsY,C.fsZ,C.fsV,C.fsW,C.d6H,C.d6x,C.d6s,C.d6C,C.d6D,C.d6G,C.d6u,C.d6J,C.d6K,C.d6L,C.fau,C.eMp,C.dmz,C.dmJ,C.dmK,C.dmL,C.dmO,C.dmN,C.dmP,C.dmU,C.dmV,C.c7T,C.c7S,C.c7O,C.c7P,C.c7Q,C.c7R,C.c7Y,C.c7V,C.c7W,C.dTg,C.dTj,C.dTi,C.dTp,C.dTq,C.dEC,C.fIR,C.fId,C.fPH,C.fIi,C.fIh,C.cZ2,C.cZ3,C.cYZ,C.cwJ,C.cwL,C.cwM,C.cwE,C.cwN,C.f9X,C.fGS,C.eJx,C.eJt,C.eJp,C.eJn,C.eJB,C.fPx,C.eJK,C.eJT,C.eJO,C.eJP,C.eJY,C.cw1,C.cw_,C.cw0,C.frY,C.fQ7,C.fqb,C.bN8,C.bN7,C.bN4,C.bN5,C.bN6,C.fdb,C.fdc,C.fI4,C.fI5,C.fI6,C.fI7,C.fI8,C.fQ5,C.fsp,C.fuY,C.fuZ,C.fv0,C.fv1,C.fHS,C.fQ0,C.fQ1,C.fQ2,C.fs6,C.fs7,C.fQc,C.frD,C.frE,C.fPI,C.fvK,C.fHL,C.fuV,C.fuW,C.fHG,C.fdJ,C.fdK,C.fdL,C.fdM,C.fdN,C.fe0,C.fdX,C.fdY,C.fi9,C.fia,C.fkF,C.fpv,C.fpw])
u(A.au,[C.aXU,C.akb,C.aTH,C.Ye,C.b9o,C.bdF,C.bhn,C.bv4,C.bkJ,C.acJ,C.bhm,C.acI,C.bhl,C.aB5,C.aHh,C.acK,C.JC,C.bdG,C.ac_,C.bdE,C.bdJ,C.aXS,C.arR,C.ad4])
u(A.mM,[C.ba_,C.bbc,C.bb3,C.aG9,C.bgq,C.bdI,C.bcM,C.biv,C.buU])
u(A.j7,[C.fJc,C.fJd,C.fJe,C.fJ5,C.fJ6,C.fJh,C.fJi,C.dFu,C.dFg,C.dFj,C.dEY,C.dEZ,C.dF_,C.dEX,C.dF4,C.dEW,C.dF5,C.dF6,C.dEV,C.dF7,C.dEU,C.dF8,C.dET,C.dF9,C.dEL,C.dEM,C.dES,C.dFa,C.dEQ,C.dFb,C.dEP,C.dF0,C.dEO,C.dF1,C.dEK,C.dF2,C.dF3,C.dFv,C.dFw,C.dFk,C.dFl,C.dFm,C.dFn,C.dFo,C.dFp,C.dFq,C.dFC,C.dFt,C.fsP,C.d5j,C.d5h,C.d5i,C.d5k,C.d5Y,C.d5N,C.d5K,C.d5m,C.d5O,C.d5s,C.d5t,C.d5v,C.d5M,C.d5r,C.d5x,C.d5V,C.d5H,C.d5G,C.d5I,C.d5J,C.d5C,C.d5E,C.d5F,C.d5y,C.d5R,C.d5U,C.d5o,C.d5p,C.d7J,C.d7I,C.d7H,C.d7G,C.d7N,C.d7F,C.d7O,C.d6d,C.d6e,C.d6f,C.d6i,C.d6b,C.d6a,C.cEP,C.cYe,C.cYr,C.cYq,C.cYG,C.cYp,C.cYH,C.cYo,C.cYn,C.cYJ,C.cYm,C.cYz,C.cYy,C.cYQ,C.dTt,C.dTs,C.dTv,C.dTw,C.dTx,C.dTr,C.dTz,C.dTy,C.dSS,C.dST,C.dSV,C.dSo,C.dSC,C.dSB,C.dSE,C.dSO,C.dSH,C.dSG,C.dSI,C.dSF,C.dSJ,C.dSK,C.dSN,C.dSc,C.dSQ,C.dSg,C.dSj,C.dSl,C.dSW,C.dSr,C.dSp,C.dSt,C.dSu,C.dSq,C.dSv,C.dSz,C.dT4,C.dT5,C.dSY,C.dT0,C.dT1,C.dT2,C.dT7,C.dSZ,C.dSm,C.d6m,C.d6l,C.d6q,C.d6A,C.d6r,C.eMo,C.dmA,C.dmx,C.dmy,C.dmI,C.dmH,C.dmG,C.dmQ,C.dmF,C.dmR,C.dmE,C.dmS,C.dmD,C.dmT,C.dmC,C.dmB,C.dmM,C.dmW,C.dn4,C.dTh,C.dTl,C.dTm,C.dTd,C.dTe,C.dTf,C.dTk,C.dTo,C.dTn,C.dT8,C.dT9,C.dTa,C.dTb,C.dTc,C.dED,C.fIO,C.cfs,C.cZ1,C.cZ0,C.cZ4,C.cYY,C.cZ_,C.cwB,C.cwH,C.cwI,C.cwG,C.cwK,C.cwF,C.cwC,C.cwD,C.cwO,C.f9Y,C.f9Z,C.eJz,C.eJq,C.eJr,C.eJs,C.eJu,C.eJv,C.eJy,C.eJl,C.eJo,C.eJA,C.eJm,C.eJD,C.eJE,C.eJF,C.eJG,C.eJC,C.eJg,C.eJh,C.eJi,C.eJk,C.eJj,C.eJZ,C.eK_,C.eJI,C.eJJ,C.eJQ,C.eJR,C.eJS,C.eJM,C.eJN,C.eK5,C.eK4,C.eK6,C.eK3,C.eJH,C.eJL,C.eK1,C.eK0,C.eJW,C.eJX,C.eJV,C.eJU])
u(A.ag,[C.anQ,C.So,C.YW,C.Z_,C.YY,C.Yw,C.aoY,C.aoS,C.Zz,C.aoW,C.ZU,C.ZV,C.a5N,C.Yy,C.Yx,C.Y5,C.a0F,C.Fl,C.awx,C.arQ,C.arK,C.arP,C.NP])
u(A.ah,[C.aC5,C.bdC,C.az9,C.bdX,C.aza,C.bba,C.aCG,C.aCD,C.aB4,C.aCF,C.aCE,C.biQ,C.aKB,C.axV,C.axU,C.awE,C.buX,C.aMM,C.aMN,C.aEa,C.bkc,C.aE9,C.bwI])
u(A.kj,[C.dFf,C.dFh,C.dFc,C.dFB,C.fuU,C.bN3,C.d5X,C.d5W,C.d5D,C.d5S,C.d5T,C.d6j,C.dSL,C.dSw,C.dT6,C.d6z,C.d6y,C.d6w,C.d6B,C.d6E,C.d6F,C.d6p,C.d6t,C.d6v,C.d6I,C.c7M,C.c7U,C.c7Z,C.dEE,C.fIQ,C.fIP,C.f9V,C.f9W,C.eJw,C.eK2,C.cw2,C.fhv,C.fdd,C.fv_,C.frF,C.fuX,C.fe_,C.fdZ,C.fib])
t(C.biw,C.aKB)
u(A.ma,[C.ab2,C.aIX,C.Hn,C.akc,C.cw3,C.cw4])
t(C.buV,C.aMM)
t(C.buW,C.aMN)
t(C.aEb,C.bwI)
t(C.b7R,A.b7F)
t(C.buY,A.a5t)
t(C.b7Q,C.buY)
w(C.aKB,A.eR)
w(C.aMM,A.ca)
w(C.aMN,A.ca)
v(C.bwI,A.ey)
v(C.buY,A.j1)})()
A.jW(b.typeUniverse,JSON.parse('{"aXU":{"au":[],"r":[]},"ba_":{"aB":[]},"anQ":{"ag":[],"r":[]},"aC5":{"ah":["anQ"]},"So":{"ag":[],"r":[]},"akb":{"au":[],"r":[]},"aTH":{"au":[],"r":[]},"bdC":{"ah":["So"]},"YW":{"ag":[],"r":[]},"Z_":{"ag":[],"r":[]},"YY":{"ag":[],"r":[]},"Yw":{"ag":[],"r":[]},"az9":{"ah":["YW"]},"bdX":{"ah":["Z_"]},"aza":{"ah":["YY"]},"Ye":{"au":[],"r":[]},"bbc":{"aB":[]},"bb3":{"aB":[]},"bba":{"ah":["Yw"]},"aG9":{"aB":[]},"bgq":{"aB":[]},"b9o":{"au":[],"r":[]},"aoY":{"ag":[],"r":[]},"aoS":{"ag":[],"r":[]},"Zz":{"ag":[],"r":[]},"acK":{"au":[],"r":[]},"aCG":{"ah":["aoY"]},"aCD":{"ah":["aoS"]},"bdF":{"au":[],"r":[]},"bdI":{"aB":[]},"bhn":{"au":[],"r":[]},"bcM":{"aB":[]},"bv4":{"au":[],"r":[]},"bkJ":{"au":[],"r":[]},"aB4":{"ah":["Zz"]},"acJ":{"au":[],"r":[]},"bhm":{"au":[],"r":[]},"acI":{"au":[],"r":[]},"bhl":{"au":[],"r":[]},"aB5":{"au":[],"r":[]},"aHh":{"au":[],"r":[]},"JC":{"au":[],"r":[]},"aoW":{"ag":[],"r":[]},"ZU":{"ag":[],"r":[]},"ZV":{"ag":[],"r":[]},"aCF":{"ah":["aoW"]},"bdG":{"au":[],"r":[]},"ac_":{"au":[],"r":[]},"bdE":{"au":[],"r":[]},"bdJ":{"au":[],"r":[]},"aCE":{"ah":["ZU"]},"biQ":{"ah":["ZV"]},"aXS":{"au":[],"r":[]},"a5N":{"ag":[],"r":[]},"biw":{"ah":["a5N"]},"biv":{"aB":[]},"arR":{"au":[],"r":[]},"Yy":{"ag":[],"r":[]},"Yx":{"ag":[],"r":[]},"Y5":{"ag":[],"r":[]},"a0F":{"ag":[],"r":[]},"axV":{"ah":["Yy"]},"axU":{"ah":["Yx"]},"awE":{"ah":["Y5"]},"buX":{"ah":["a0F"]},"Fl":{"ag":[],"r":[]},"awx":{"ag":[],"r":[]},"buV":{"ah":["Fl"]},"buW":{"ah":["awx"]},"buU":{"aB":[]},"arQ":{"ag":[],"r":[]},"aEa":{"ah":["arQ"]},"ad4":{"au":[],"r":[]},"arK":{"ag":[],"r":[]},"arP":{"ag":[],"r":[]},"bkc":{"ah":["arK"]},"aE9":{"ah":["arP"]},"NP":{"ag":[],"r":[]},"aEb":{"ah":["NP"],"ey":[]},"b7Q":{"j1":[],"ff":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQt"),Q:w("qX"),n:w("bk<n,n>"),c5:w("aSr"),dY:w("aSs"),d:w("eE<n?>"),e:w("Hm"),B:w("nc"),P:w("hX"),k:w("kB"),x:w("aA<~>"),f5:w("O<a2E>"),V:w("O<ac>"),t:w("O<qX>"),O:w("O<v>"),ac:w("O<eE<n?>>"),I:w("O<nc>"),u:w("O<hX>"),_:w("O<kB>"),cl:w("O<aA<ai<a5<n,@>>>>"),R:w("O<ne>"),cq:w("O<ai<+(K,K)>>"),ez:w("O<a5<n,aD>>"),gE:w("O<a5<n,n>>"),c7:w("O<a5<n,@>>"),fD:w("O<ms>"),bp:w("O<oe>"),g:w("O<u>"),v:w("O<hr>"),L:w("O<+(n,n)>"),G:w("O<+(K,K)>"),bF:w("O<+count,id,name(H,n,n)>"),A:w("O<cR>"),s:w("O<n>"),aS:w("O<iQ>"),p:w("O<r>"),C:w("O<ff>"),D:w("O<lh>"),fp:w("O<JG>"),M:w("O<JO>"),gZ:w("O<aGe>"),Y:w("O<aei>"),E:w("O<aIf>"),F:w("O<K>"),dC:w("O<H>"),dS:w("O<aB?>"),d4:w("O<n?>"),J:w("cs<ah<ag>>"),b:w("ai<nc>"),do:w("ai<hX>"),r:w("ai<kB>"),U:w("ai<a5<n,@>>"),gk:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),h:w("ai<n>"),c:w("ai<lh>"),j:w("ai<@>"),fK:w("bv<n,n>"),d2:w("bv<n,ai<a5<n,@>>>"),a:w("a5<n,@>"),f:w("a5<@,@>"),gv:w("M<n,Ho>"),w:w("iA"),g2:w("ri"),bV:w("anJ"),fL:w("cr"),K:w("aD"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(K,ai<hX>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bq<K>"),gc:w("dI"),b4:w("cx<H>"),W:w("kh<n>"),l:w("r"),cM:w("ff"),i:w("lh"),cc:w("Fy"),bw:w("acI<n?>"),cy:w("JQ"),q:w("n0"),y:w("R"),gR:w("K"),z:w("@"),S:w("H"),eK:w("ai<kB>?"),m:w("aoV?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pV?"),T:w("n?"),aD:w("dI?"),o:w("lh?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXS=new A.bp(B.hg,B.bG,B.hg,B.bG)
D.aag=new A.bp(B.hg,B.iL,B.hg,B.iL)
D.aY4=new A.bp(B.io,B.bG,B.bG,B.bG)
D.aY8=new A.ay(B.cY,1.4,B.q,-1)
D.aYi=new A.ay(B.ad,1,B.q,-1)
D.aZH=new A.aY(0,1/0,64,1/0)
D.aZL=new A.aY(0,84,0,1/0)
D.axP=w([B.lK,B.qW,B.c],x.O)
D.bVS=new A.a8(B.ax,B.aC,B.x,D.axP,null,null)
D.b_v=new A.o(null,null,null,null,null,D.bVS,B.n)
D.d_U=w([B.aV,B.bU],x.O)
D.bXZ=new A.a8(B.b_,B.b4,B.x,D.d_U,null,null)
D.b_Q=new A.o(null,null,null,null,null,D.bXZ,B.n)
D.b63=new A.fj(null,null,null,null,null,E.jV,null,null,null,null)
D.abA=new A.cp(B.A,null,null,D.b63,null)
D.kn=new A.v(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f2D=new A.G(!0,D.kn,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flM=new A.y("No books on the shelf yet.",null,D.f2D,null,null,null,null,null,null,null,null,null)
D.e8z=new A.D(B.o_,D.flM,null)
D.b4x=new A.cp(B.A,null,null,D.e8z,null)
D.b5q=new A.cp(B.A,null,null,Y.VP,null)
D.b7x=new A.v(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b8_=new A.v(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.acK=new A.v(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.baJ=new A.v(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.bb1=new A.v(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ae5=new A.v(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.beR=new A.v(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bfg=new A.v(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.EG=new A.v(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bgS=new A.v(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bjj=new A.v(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.afI=new A.v(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fgf=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.boV=new A.eE(null,D.fgf,B.eZ,null,x.d)
D.foY=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.boX=new A.eE(null,D.foY,B.eZ,null,x.d)
D.bpu=new A.ba(38e5)
D.bqe=new A.ie(0,10,0,10)
D.bqn=new A.Q(0,1,0,0)
D.bqx=new A.ie(0,4,0,4)
D.bqP=new A.Q(10,10,14,10)
D.br0=new A.ie(10,4,10,4)
D.br8=new A.ie(10,8,10,8)
D.br9=new A.Q(10,8,8,8)
D.brz=new A.Q(12,6,12,2)
D.brR=new A.Q(14,10,6,6)
D.brS=new A.Q(14,12,14,0)
D.brW=new A.Q(14,12,14,8)
D.brZ=new A.Q(14,12,8,14)
D.bs2=new A.ie(14,14,14,14)
D.bsH=new A.Q(16,2,16,10)
D.bsR=new A.Q(16,6,16,30)
D.bsT=new A.Q(16,6,16,8)
D.ai4=new A.Q(18,16,18,8)
D.btt=new A.Q(18,20,18,22)
D.ai8=new A.Q(18,24,18,24)
D.btz=new A.Q(18,30,18,30)
D.btR=new A.Q(20,10,12,20)
D.bu3=new A.Q(20,18,16,18)
D.bu5=new A.Q(20,18,20,6)
D.buV=new A.Q(24,32,24,28)
D.buW=new A.Q(24,36,24,32)
D.bv_=new A.Q(26,26,24,14)
D.bvd=new A.Q(2,4,2,8)
D.bvh=new A.Q(30,0,30,0)
D.bvs=new A.Q(38,22,22,22)
D.air=new A.Q(40,24,24,24)
D.bvu=new A.ie(40,40,40,40)
D.bvw=new A.Q(46,30,30,30)
D.aiu=new A.Q(4,0,0,8)
D.bvX=new A.Q(56,40,40,40)
D.bw0=new A.Q(1.25,1.25,1.25,1.25)
D.bw1=new A.Q(60,0,60,0)
D.bw4=new A.Q(6,14,6,16)
D.bwg=new A.ie(7,3,7,3)
D.bwN=new A.Q(5,1.5,5,1.5)
D.bwY=new A.Q(6,2.5,6,2.5)
D.fAX=new A.y("Signature",null,B.ny,null,null,null,null,null,null,null,null,null)
D.bxi=new A.bC(1,B.bh,D.fAX,null)
D.fy5=new A.y("Tell the AI what to fix",null,B.dj,null,null,null,null,null,null,null,null,null)
D.by5=new A.bC(1,B.bh,D.fy5,null)
D.f9V=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA3=new A.y("Worksheets",null,D.f9V,null,null,null,null,null,null,null,null,null)
D.fa2=new A.G(!0,E.acj,null,null,null,null,13,B.cw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyW=new A.y("Track your project spending",null,D.fa2,null,null,null,null,null,null,null,null,null)
D.cT0=w([D.fA3,B.at,D.fyW],x.p)
D.bmc=new A.fl(B.ag,B.e,B.j,B.F,null,B.p,null,0,D.cT0,null)
D.byb=new A.bC(1,B.bh,D.bmc,null)
D.f5c=new A.G(!0,E.jV,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffs=new A.y("FAMILY LIBRARY",null,D.f5c,null,null,null,null,null,null,null,null,null)
D.bys=new A.bC(1,B.bh,D.ffs,null)
D.MH=new C.Hm("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.ZK=new C.Hn(0,"male")
D.ajn=new C.Hn(1,"female")
D.xT=new C.Hn(2,"unknown")
D.tO=new C.akc(0,"owner")
D.MI=new C.akc(1,"editor")
D.ku=new C.akc(2,"viewer")
D.ak9=new A.a0(61199,"MaterialIcons",!1)
D.bCC=new A.a0(61504,"MaterialIcons",!1)
D.bCD=new A.a0(61505,"MaterialIcons",!1)
D.bCF=new A.a0(61587,"MaterialIcons",!1)
D.bCM=new A.a0(61890,"MaterialIcons",!1)
D.bDG=new A.a0(63034,"MaterialIcons",!0)
D.bEv=new A.a0(63429,"MaterialIcons",!1)
D.amn=new A.a0(984520,"MaterialIcons",!1)
D.bDb=new A.a0(62776,"MaterialIcons",!1)
D.bGT=new A.ae(D.bDb,26,B.aZ,null,null,null)
D.bBA=new A.a0(57648,"MaterialIcons",!1)
D.bHa=new A.ae(D.bBA,14,B.c,null,null,null)
D.bHs=new A.ae(B.FO,17,null,null,null,null)
D.bHY=new A.ae(E.a_D,null,null,null,null,null)
D.bI0=new A.ae(B.jo,18,E.jV,null,null,null)
D.a_p=new A.a0(62044,"MaterialIcons",!1)
D.bI6=new A.ae(D.a_p,null,B.aV,null,null,null)
D.bIW=new A.ae(B.dX,16,null,null,null,null)
D.bJ2=new A.ae(D.a_p,32,B.aV,null,null,null)
D.bJm=new A.ae(E.aka,18,B.cY,null,null,null)
D.bKp=new A.ae(B.FY,22,B.ay,null,null,null)
D.bKB=new A.ae(B.dX,22,B.aZ,null,null,null)
D.bKM=new A.ae(Q.a_u,22,B.c,null,null,null)
D.bKR=new A.ae(B.tY,52,B.c,null,null,null)
D.bL0=new A.ae(B.FY,30,B.ay,null,null,null)
D.an0=new A.ae(B.u6,22,B.c,null,null,null)
D.bLs=new A.ae(B.dX,17,null,null,null,null)
D.bLM=new A.ae(B.vM,26,B.cY,null,null,null)
D.bMv=new A.ae(B.a_P,16,null,null,null,null)
D.bNf=new A.ae(B.tY,24,B.c,null,null,null)
D.bNk=new A.ae(B.N9,20,B.rt,null,null,null)
D.bNp=new A.ae(B.FM,null,B.bU,null,null,null)
D.bNw=new A.ae(B.jo,18,B.c,null,null,null)
D.bO7=new A.ae(B.cD,22,B.ad,null,null,null)
D.bOX=new A.ae(B.e6,16,B.ad,null,null,null)
D.bP8=new A.ae(D.a_p,20,B.aV,null,null,null)
D.anr=new A.ae(B.hn,20,null,null,null,null)
D.bPE=new A.ae(B.cD,18,D.kn,null,null,null)
D.bPW=new A.ae(B.yd,28,B.c,null,null,null)
D.bQ4=new A.ae(B.N_,null,B.h0,null,null,null)
D.bQo=new A.ae(B.yd,24,B.c,null,null,null)
D.bQP=new A.ae(B.tY,null,B.aV,null,null,null)
D.bQQ=new A.ae(B.jH,20,B.cY,null,null,null)
D.bR9=new A.ae(B.FO,16,null,null,null,null)
D.bSH=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ez,!0,null,null,null,null)
D.d76=w([B.bv,B.aV,B.fc,B.aZ],x.O)
D.bUh=new A.a8(B.ax,B.aC,B.x,D.d76,null,null)
D.bfN=new A.v(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.blf=new A.v(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cPU=w([D.bfN,D.blf],x.O)
D.bUs=new A.a8(B.b_,B.b4,B.x,D.cPU,null,null)
D.d1F=w([B.f_,B.fx,B.fc],x.O)
D.bUx=new A.a8(B.ax,B.aC,B.x,D.d1F,null,null)
D.aeH=new A.v(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b80=new A.v(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cRR=w([D.aeH,D.b80],x.O)
D.bV5=new A.a8(B.b_,B.b4,B.x,D.cRR,null,null)
D.bbd=new A.v(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.axb=w([D.bbd,D.aeH],x.O)
D.bVp=new A.a8(B.ax,B.aC,B.x,D.axb,null,null)
D.adD=new A.v(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bdl=new A.v(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d0R=w([D.adD,D.bdl],x.O)
D.bW2=new A.a8(B.a3,B.a8,B.x,D.d0R,null,null)
D.ddr=w([B.bz,B.n1],x.O)
D.bW4=new A.a8(B.b_,B.b4,B.x,D.ddr,null,null)
D.bfI=new A.v(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.deh=w([D.bfI,D.kn,D.kn,P.X9],x.O)
D.dgw=w([0,0.07,0.9,1],x.F)
D.bWz=new A.a8(B.a3,B.a8,B.x,D.deh,D.dgw,null)
D.bWK=new A.a8(B.ax,B.aC,B.x,B.QI,null,null)
D.dd0=w([B.aZ,B.aV,B.bU],x.O)
D.bXK=new A.a8(B.ax,B.aC,B.x,D.dd0,null,null)
D.cid=w([B.bv,B.aZ,B.f_],x.O)
D.cik=w([B.bu,B.aE,B.jb],x.O)
D.cim=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bem=new A.v(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cot=w([D.bem,E.aeo],x.O)
D.e4n=new A.u(1,2)
D.eP9=new A.cR(B.aW,D.e4n,3)
D.aue=w([D.eP9],x.A)
D.cvL=w([B.h4,B.ce,B.fb],x.O)
D.cys=w([B.bJ,B.br,B.bo],x.O)
D.byV=new C.ua("classic","Classic leather","Gold-edged brown leather",D.axb,E.jV,E.jV,"\u2766",B.L,!0,!1,!1,!1)
D.b7l=new A.v(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bk9=new A.v(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cUB=w([D.b7l,D.bk9],x.O)
D.aes=new A.v(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.byQ=new C.ua("ornate","Ornate gold","Double gold border and flourishes",D.cUB,D.aes,D.aes,"\u2726",B.L,!0,!0,!0,!1)
D.baS=new A.v(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bgu=new A.v(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cMR=w([D.baS,D.bgu],x.O)
D.byP=new C.ua("parchment","Parchment","Old paper with dark ink",D.cMR,D.EG,G.iy,"\u2767",B.L,!0,!1,!1,!0)
D.ac1=new A.v(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.biA=new A.v(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.dbn=w([D.ac1,D.biA],x.O)
D.bdX=new A.v(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bhX=new A.v(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.byS=new C.ua("minimal","Clean paper","Plain and elegant, like a printed book",D.dbn,D.bdX,D.bhX,"",B.L,!0,!0,!1,!0)
D.byU=new C.ua("midnight","Midnight","Deep blue with silver stars",L.axt,B.cr,B.bK,"\u2727",B.L,!0,!0,!1,!1)
D.byO=new C.ua("emerald","Emerald library","Green cloth, title on the left",Z.auC,E.jV,B.h5,"\u25c6",B.bg,!0,!1,!1,!1)
D.bj0=new A.v(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d9H=w([B.eq,D.bj0],x.O)
D.bf_=new A.v(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bg5=new A.v(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.byT=new C.ua("rose","Rose vintage","Burgundy with rose-gold lettering",D.d9H,D.bf_,D.bg5,"\u2740",B.L,!0,!1,!0,!1)
D.ddW=w([B.cu,O.mj],x.O)
D.byR=new C.ua("modern","Modern","Dark, bold, left-aligned",D.ddW,B.aP,B.c,"",B.bg,!1,!0,!1,!1)
D.a1I=w([D.byV,D.byQ,D.byP,D.byS,D.byU,D.byO,D.byT,D.byR],A.ax("O<ua>"))
D.cMn=w([B.bU,B.bk],x.O)
D.bfy=new A.v(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cN2=w([D.ac1,D.bfy],x.O)
D.baO=new A.v(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cOE=w([D.baO,B.d9],x.O)
D.cQ9=w([B.b9,B.iR,B.oz],x.O)
D.cQw=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b7X=new A.v(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bcG=new A.v(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dgs=w([D.adD,D.b7X,D.bcG],x.O)
D.byW=new C.ub("leather","Leather",D.dgs,"vintage")
D.cXz=w([B.di,B.KY,A4.Wm],x.O)
D.bz2=new C.ub("midnight","Midnight",D.cXz,"starry")
D.cQa=w([B.eA,B.dZ,B.lf],x.O)
D.bz1=new C.ub("forest","Forest",D.cQa,"story")
D.dim=w([B.eQ,B.eq,B.kq],x.O)
D.byZ=new C.ub("burgundy","Burgundy",D.dim,"royal")
D.cy1=w([B.aE,B.pB,B.nH],x.O)
D.bz_=new C.ub("royal","Royal",D.cy1,"royal")
D.cSt=w([B.br,B.cu,O.mj],x.O)
D.byX=new C.ub("charcoal","Charcoal",D.cSt,"geo")
D.dgA=w([B.cg,B.dQ,B.xa],x.O)
D.bz0=new C.ub("sunset","Sunset",D.dgA,"sunset")
D.dhg=w([B.iR,B.EH,B.Wp],x.O)
D.byY=new C.ub("ocean","Ocean",D.dhg,"band")
D.yK=w([D.byW,D.bz2,D.bz1,D.byZ,D.bz_,D.byX,D.bz0,D.byY],A.ax("O<ub>"))
D.cST=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cTr=w([B.ak,B.aK,B.M],x.O)
D.cUG=w([B.eq,B.dZ,B.di,B.fz,B.xe,B.cY,B.jZ,B.ee,B.d5],x.O)
D.cUH=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ePa=new A.cR(B.dq,B.dE,8)
D.cUQ=w([D.ePa],x.A)
D.cVU=w([B.bX,B.dQ,B.ko],x.O)
D.cWm=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cXv=w([B.bX,B.hi],x.O)
D.cZx=w([B.aM,B.xb,B.x2],x.O)
D.d_q=w([B.bL,B.ca,B.dv,B.aM],x.O)
D.d_V=w([B.jd,B.cg,B.tj],x.O)
D.d0p=w([B.f_,B.cY],x.O)
D.d0W=w([B.cs,B.fl,B.hl],x.O)
D.d16=w([B.aP,B.bk,B.di],x.O)
D.d1C=w([B.eu,B.cZ,B.dZ],x.O)
D.d1W=w([B.dL,B.di,B.KY],x.O)
D.d3b=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a2D=w(["leather","linen","plain","stars","rays"],x.s)
D.bGz=new A.a0(985219,"MaterialIcons",!1)
D.bG7=new A.a0(983781,"MaterialIcons",!1)
D.awT=w([B.akz,B.i3,B.lS,B.i4,D.bGz,B.G9,B.pY,D.bG7,L.ama,B.yf,B.q_,B.mv],A.ax("O<a0>"))
D.a2I=w(["double","single","corners","none"],x.s)
D.d5R=w([B.dy,B.bl,B.ee],x.O)
D.d63=w([],x.t)
D.Cb=w([],x.u)
D.d8i=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.daA=w([B.aF,B.fl,B.fz],x.O)
D.dbY=w([B.bW,B.mX,B.Xj],x.O)
D.dcc=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dvk=new C.ly("construction","Construction","Jobsite & builds",B.y5)
D.dvr=new C.ly("house","Home Build","Houses & rooms",B.vH)
D.dvh=new C.ly("grocery","Grocery","Store & pantry",B.a0k)
D.dvg=new C.ly("calculator","Calculations","Math & estimates",B.Nk)
D.dvp=new C.ly("lumber","Materials","Lumber & supplies",B.NA)
D.dvd=new C.ly("kitchen","Kitchen","Remodel & meals",Aa.aln)
D.bG4=new A.a0(983756,"MaterialIcons",!1)
D.dvi=new C.ly("landscape","Landscaping","Yard & garden",D.bG4)
D.dvc=new C.ly("plumbing","Plumbing","Pipes & water",B.q7)
D.dvs=new C.ly("electrical","Electrical","Wiring & power",B.ha)
D.dva=new C.ly("store","Retail Shop","Daily business",B.kZ)
D.dvb=new C.ly("paint_remodel","Paint & Remodel","Colors & walls",Ab.a_V)
D.bFt=new A.a0(983311,"MaterialIcons",!1)
D.dvo=new C.ly("roofing","Roofing","Roofs & exteriors",D.bFt)
D.bGh=new A.a0(983986,"MaterialIcons",!1)
D.dv9=new C.ly("warehouse","Warehouse","Storage & stock",D.bGh)
D.dvm=new C.ly("vehicles","Vehicles","Fleet & transport",B.Ga)
D.bDd=new A.a0(62785,"MaterialIcons",!1)
D.dvf=new C.ly("farm","Farm","Crops & livestock",D.bDd)
D.dve=new C.ly("restaurant","Restaurant","Food & catering",B.u4)
D.dvl=new C.ly("tools","Tools","Workshop gear",B.G5)
D.dvq=new C.ly("wallet","Cash & Wallet","Quick spending",B.jH)
D.bEq=new A.a0(63395,"MaterialIcons",!1)
D.dvn=new C.ly("concrete","Concrete","Foundation work",D.bEq)
D.dvj=new C.ly("blueprint","Blueprint","Plans & design",Af.akF)
D.a3b=w([D.dvk,D.dvr,D.dvh,D.dvg,D.dvp,D.dvd,D.dvi,D.dvc,D.dvs,D.dva,D.dvb,D.dvo,D.dv9,D.dvm,D.dvf,D.dve,D.dvl,D.dvq,D.dvn,D.dvj],A.ax("O<ly>"))
D.dcG=w([B.bs,B.bl],x.O)
D.dds=w([B.ia,B.nM,B.dH],x.O)
D.a3k=w(["top","middle","bottom"],x.s)
D.dfP=w([B.cn,B.bk,B.di],x.O)
D.dgm=w([B.b2,B.cZ,B.dZ],x.O)
D.dih=w([B.bJ,B.ak],x.O)
D.dii=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e1Y={top:0,middle:1,bottom:2}
D.dlt=new A.bk(D.e1Y,["Top","Middle","Bottom"],x.n)
D.e1A={double:0,single:1,corners:2,none:3}
D.dly=new A.bk(D.e1A,["Double line","One line","Corners","None"],x.n)
D.e2M={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dmZ=new A.bk(D.e2M,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dna=new A.bk(B.i7,[],A.ax("bk<H,+(n,n)>"))
D.e1Q={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Cn=new A.bk(D.e1Q,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<n,H>"))
D.dpU=new F.MI(32,null)
D.dpV=new F.MI(40,null)
D.dpW=new F.MI(46,null)
D.aG9=new C.arP(null)
D.e5l=new A.u(8,14)
D.fmo=new A.y("Write a new book",null,B.hF,null,B.L,null,null,null,null,null,null,null)
D.e81=new A.D(B.kV,D.fmo,null)
D.amB=new A.ae(B.hz,18,B.c,null,null,null)
D.ffO=new A.y("Add",null,B.m6,null,null,null,null,null,null,null,null,null)
D.d_F=w([D.amB,B.qo,D.ffO],x.p)
D.eN4=new A.cm(B.aO,B.e,B.O,B.m,null,B.p,null,0,D.d_F,null)
D.e8m=new A.D(B.nZ,D.eN4,null)
D.e8n=new A.D(E.agV,Y.VP,null)
D.f9Q=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiP=new A.y("New Project",null,D.f9Q,null,null,null,null,null,null,null,null,null)
D.d3y=w([D.amB,B.ab,D.fiP],x.p)
D.eN7=new A.cm(B.aO,B.e,B.O,B.m,null,B.p,null,0,D.d3y,null)
D.e8y=new A.D(B.iD,D.eN7,null)
D.flb=new A.y("Choose your header",null,T.qs,null,null,null,null,null,null,null,null,null)
D.e8T=new A.D(B.hO,D.flb,null)
D.b6i=new A.fj(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eRP=new A.a7(22,22,D.b6i,null)
D.b4t=new A.cp(B.A,null,null,D.eRP,null)
D.e8Y=new A.D(B.Yi,D.b4t,null)
D.bsb=new A.Q(14,2,14,6)
D.fyF=new A.y("The top of your book. Tap a design to see it.",null,S.Di,null,null,null,null,null,null,null,null,null)
D.e8Z=new A.D(D.bsb,D.fyF,null)
D.eaw=new A.iO(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eaz=new A.iO(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aHo=new A.iO(1,0.9607843137254902,0.48627450980392156,0)
D.Ib=new A.iO(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zh=new A.iO(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eaF=new A.iO(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fYx=new C.bgq(null)
D.bnk=new A.mj(D.fYx,null,B.au,null,null)
D.aL1=new A.cL(0,0,0,0,null,null,D.bnk,null)
D.eyU=new A.z(-42,42)
D.eHL=new A.cA([0,0,1,1])
D.aMm=new A.a9(0,0,520,160)
D.fyd=new A.y("Let the AI write it from your tree",null,B.ke,null,B.L,null,null,null,null,null,null,null)
D.bzz=new A.dq(1,B.co,D.fyd,null)
D.cXu=w([E.a0N,B.ab,D.bzz],x.p)
D.eMK=new A.cm(B.aO,B.e,B.O,B.m,null,B.p,null,0,D.cXu,null)
D.fft=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.daT=w([D.anr,B.ab,D.fft],x.p)
D.eMU=new A.cm(B.aO,B.b8,B.j,B.m,null,B.p,null,0,D.daT,null)
D.bKG=new A.ae(B.hP,14,B.aZ,null,null,null)
D.f3R=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fje=new A.y("Cashier",null,D.f3R,null,null,null,null,null,null,null,null,null)
D.d43=w([D.bKG,B.bp,D.fje],x.p)
D.eMX=new A.cm(B.aO,B.e,B.O,B.m,null,B.p,null,0,D.d43,null)
D.ffu=new A.y("Transfer & settings",null,B.dj,null,null,null,null,null,null,null,null,null)
D.bxW=new A.bC(1,B.bh,D.ffu,null)
D.cPD=w([D.an0,B.av,D.bxW],x.p)
D.eMY=new A.cm(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cPD,null)
D.eQy=new A.ar(16,40)
D.eQD=new A.ar(22,64)
D.eQK=new A.ar(280,88)
D.eRv=new A.a7(30,null,null,null)
D.eSN=new A.hM(2,12,12,1.05,null)
D.fiV=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eTv=new A.b1(D.fiV,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fj9=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aOq=new A.b1(D.fj9,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.frf=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eTZ=new A.b1(D.frf,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fBv=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eU3=new A.b1(D.fBv,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fl9=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eUa=new A.b1(D.fl9,null,null,null,null,null,null,null,null,null,null,null,null,B.fI,!1,null,null,null,B.r,null)
D.fyS=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aOu=new A.b1(D.fyS,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fg4=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eUA=new A.b1(D.fg4,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fCa=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eVj=new A.b1(D.fCa,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fx8=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eVI=new A.b1(D.fx8,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fBz=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eVL=new A.b1(D.fBz,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fsN=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eVN=new A.b1(D.fsN,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fmZ=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eVO=new A.b1(D.fmZ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fn_=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eWO=new A.b1(D.fn_,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fiX=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eX5=new A.b1(D.fiX,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fkP=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eXo=new A.b1(D.fkP,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fsi=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eXE=new A.b1(D.fsi,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fnN=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eXF=new A.b1(D.fnN,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f_P=new A.G(!0,D.kn,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0e=new A.G(!0,D.kn,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0T=new A.rC(!0,B.rC,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f19=new A.G(!0,D.kn,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1H=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7z=new A.rC(!0,B.S3,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2G=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f34=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4E=new A.G(!0,null,null,null,null,null,8,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4I=new A.G(!0,G.iy,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5X=new A.G(!0,B.M,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6F=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7n=new A.G(!0,B.bU,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7r=new A.G(!0,B.bz,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7O=new A.G(!0,D.EG,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7X=new A.G(!0,B.aZ,null,null,null,null,13,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8V=new A.G(!0,B.cY,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9o=new A.G(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9O=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbe=new A.G(!0,B.ak,null,null,null,null,11.5,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbm=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQG=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a81=new A.G(!0,B.ak,null,null,null,null,12,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd1=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdo=new A.G(!0,G.iy,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdw=new A.G(!0,G.iy,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fej=new A.y("Themes",null,B.pa,null,null,null,null,null,null,null,null,null)
D.feV=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f4n=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffj=new A.y("Debt receipt",null,D.f4n,null,B.L,null,null,null,null,null,null,null)
D.aQB=new A.G(!0,B.ak,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffB=new A.y("Person who owes",null,D.aQB,null,null,null,null,null,null,null,null,null)
D.fgx=new A.y("Notes",null,B.a7I,null,null,null,null,null,null,null,null,null)
D.fgX=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f3m=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh0=new A.y("Share",null,D.f3m,null,null,null,null,null,null,null,null,null)
D.fhW=new A.y("Move your family trees",null,D.aQG,null,null,null,null,null,null,null,null,null)
D.fix=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fj8=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fkp=new A.y("Remove this book?",null,B.hs,null,null,null,null,null,null,null,null,null)
D.aR7=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.flx=new A.y("What should the AI do?",null,B.dj,null,null,null,null,null,null,null,null,null)
D.fmV=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fo1=new A.y("Ribbon bookmark",null,B.iN,null,null,null,null,null,null,null,null,null)
D.fb8=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fov=new A.y("NGMY.ORG",null,D.fb8,null,B.L,null,null,null,null,null,null,null)
D.fpL=new A.y("Scan family tree QR",null,B.cz,null,null,null,null,null,null,null,null,null)
D.f7G=new A.G(!0,B.c,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqv=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f7G,null,B.L,null,null,null,null,null,null,null)
D.frH=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.frO=new A.y("Thumbnail",null,B.pa,null,null,null,null,null,null,null,null,null)
D.fso=new A.y("Save the cover",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fsO=new A.y("Your photos",null,B.pa,null,null,null,null,null,null,null,null,null)
D.ft2=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fty=new A.y("Design your cover",null,T.qs,null,null,null,null,null,null,null,null,null)
D.ftE=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.ftH=new A.y("PICTURE",null,H.mN,null,null,null,null,null,null,null,null,null)
D.fu2=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fu4=new A.y("You can undo it right after.",null,S.zD,null,null,null,null,null,null,null,null,null)
D.fuC=new A.y("Print",null,B.uK,null,null,null,null,null,null,null,null,null)
D.fuZ=new A.y("Amount owed",null,D.aQB,null,null,null,null,null,null,null,null,null)
D.fvd=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fvN=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fvQ=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fwg=new A.y("Debtor signature",null,B.a7I,null,null,null,null,null,null,null,null,null)
D.fwp=new A.y("Change icon",null,E.aPS,null,null,null,null,null,null,null,null,null)
D.fxB=new A.y("Family tree QR",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fy3=new A.y("Download",null,B.uK,null,null,null,null,null,null,null,null,null)
D.fy7=new A.y("Change",null,B.pa,null,null,null,null,null,null,null,null,null)
D.fyY=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fz0=new A.y("WHAT SHOULD IT CHANGE?",null,H.mN,null,null,null,null,null,null,null,null,null)
D.fzA=new A.y("COLOUR",null,H.mN,null,null,null,null,null,null,null,null,null)
D.fzO=new A.y("Do it",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fzR=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fAR=new A.y("Create Family Tree",null,B.eX,null,null,null,null,null,null,null,null,null)
D.eZO=new A.G(!0,E.jV,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB5=new A.y("Write the first page myself",null,D.eZO,null,null,null,null,null,null,null,null,null)
D.fBC=new A.y("Use this header",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fBI=new A.y("Create Project",null,E.aQk,null,null,null,null,null,null,null,null,null)
D.fV3=new C.ab2(1,"header")
D.a8W=new C.ab2(2,"projects")
D.fV4=new C.ab2(3,"cashier")
D.a8X=new C.ab2(4,"familyTree")
D.h5J=new C.cw3(0,"start")
D.h5K=new C.cw4(0,"start")
D.fVs=new C.Y5(null)
D.fWr=new C.Yx(null)
D.dn7=new A.bk(B.i7,[],A.ax("bk<n,Fy>"))
D.d6r=w([],x.E)
D.d6s=w([],x.M)
D.fWY=new C.bdH(D.dn7,D.d6r,D.d6s,0,0,null,null)
D.fZb=new C.ZV(null)
D.a9E=new C.aIX(0,"projects")
D.aVu=new C.aIX(1,"cashier")
D.h3q=new C.aIX(2,"familyTree")})()};
(a=>{a["GSuHyigWQcbjARSpmm66NNbR8SI="]=a.current})($__dart_deferred_initializers__);