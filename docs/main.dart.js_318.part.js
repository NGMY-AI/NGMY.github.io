((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,R,A2,G,F,E,A3,A4,A5,A6,S,T,A7,A8,M,A9,H,Aa,Ab,U,V,W,Ac,Ad,X,Ae,Af,Ag,Y,Ah,Ai,K,Aj,Z,A_,O,P,L,Q,C={
bCl(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCl=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vh(null,""),$async$bCl)
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
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qO(t,a1,B.hq,E.F3),$async$bCl)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Q9(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.KP(l)?y.l:y.i)
for(j=J.a5(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cC
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1Y(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCl,v)},
agw(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agw=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vh(null,""),$async$agw)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n5(b6)
s=x.S
r=A.de(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a1L(new A.M(r,new C.fzv(),r.$ti.k("M<ak.E,m>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fzu(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agw)
case 6:l=c5
k=F.Q9(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.anL(s,D.dmS,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agw)
case 10:l=c5
k=l==null?null:F.Q9(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.da(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.l_(a5,a2.k("l_<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
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
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cF(new A.bc(h,s),new C.fzw(),s.k("J.E"),p)
p=F.a1L(A.pc(p,3,A.a3(p).k("J.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.C(new A.cu(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1Y(s,b9),$async$agw)
case 13:b5=c5
for(s=J.a5(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anL(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agw,v)},
ho4(d,e,f){return A.cb(null,B.w.j(0.65),!1,null,new C.fII(e,f),d,null,!0,!0,x.g2)},
anL:function anL(d,e,f){this.a=d
this.b=e
this.c=f},
fzv:function fzv(){},
fzu:function fzu(d){this.a=d},
fzw:function fzw(){},
fII:function fII(d,e){this.a=d
this.b=e},
bAb(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bAb=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b5(b1,new C.fok())){u=null
w=1
break}t=B.d.d7(b1,new C.fol())
s=$.W()
r=new A.qY()
q=A.Db(r,D.aMh)
p=A.N()
p.r=B.c.gp(0)
q.aZ(D.aMh,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bQ
o.e=B.fC
n=new C.foq(t)
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
if(a8!=null)a7.bC(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bC(a8)
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
if(a8!=null)a7.bC(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bC(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aP(a3,o)}w=4
return A.b(r.pE().zh(520,160),$async$bAb)
case 4:w=3
return A.b(b3.ht(B.fY),$async$bAb)
case 3:b0=b3
u=b0==null?null:J.eT(B.dD.gaM(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAb,v)},
fxb(d){return C.i1y(d)},
i1y(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fxb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bfw()
n=d.x!=null&&d.yY(null).length===0
if(d.x!=null)t=n?D.zh:D.I7
else t=d.gTq()?D.I7:D.aHj
w=3
return A.b(C.bAb(d.ax),$async$fxb)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amu(s)
r=A.a3V(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aHj}else{p.c=C.wI(q,!0)
p.b=n?D.zh:D.I7}r.a2D(A.fSS(new C.fxd(p,d,new C.fxe(),t,n,o),null,D.bvi,B.wc))
u=r.k7(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fxb,v)},
fDP(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fDP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fxb(d),$async$fDP)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.Gq(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fDP,v)},
fok:function fok(){},
fol:function fol(){},
foq:function foq(d){this.a=d},
fxe:function fxe(){},
fxd:function fxd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fxc:function fxc(){},
fJ9(d,e){var w=0,v=A.j(x.H)
var $async$fJ9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,B.w.j(0.55),!0,null,new C.fJd(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fJ9)
case 2:return A.h(null,v)}})
return A.i($async$fJ9,v)},
bCP(d,e,f,g){return C.i90(d,e,f,g)},
i90(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bCP=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gal(e.split(",")):e
r=B.cG.aJ(t)}catch(q){r=null}if(r==null||r.length===0){d.J(x.q).f.U(D.eX_)
w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.fJ5(g,r,f),d,null,!0,!0,x.H),$async$bCP)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bCP,v)},
fJe(d,e){var w=0,v=A.j(x.H)
var $async$fJe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cb(null,null,!0,null,new C.fJh(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fJe)
case 2:return A.h(null,v)}})
return A.i($async$fJe,v)},
aXW:function aXW(d,e){this.c=d
this.a=e},
c1j:function c1j(){},
ba2:function ba2(d,e){this.b=d
this.a=e},
fJd:function fJd(d,e){this.a=d
this.b=e},
fJa:function fJa(d){this.a=d},
fJb:function fJb(d,e,f){this.a=d
this.b=e
this.c=f},
fJc:function fJc(d,e){this.a=d
this.b=e},
fJ5:function fJ5(d,e,f){this.a=d
this.b=e
this.c=f},
fJ3:function fJ3(d){this.a=d},
fJ4:function fJ4(d,e,f){this.a=d
this.b=e
this.c=f},
fJh:function fJh(d,e){this.a=d
this.b=e},
fJf:function fJf(d){this.a=d},
fJg:function fJg(d,e,f){this.a=d
this.b=e
this.c=f},
fs8(d,e){var w=0,v=A.j(x.y),u,t
var $async$fs8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1w(d),$async$fs8)
case 3:t=g
J.nr(t,new C.fs9(e))
u=A.ahb(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fs8,v)},
fs9:function fs9(d){this.a=d},
anS:function anS(d,e,f){this.c=d
this.d=e
this.a=f},
aC7:function aC7(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dFz:function dFz(d,e){this.a=d
this.b=e},
dFk:function dFk(d,e){this.a=d
this.b=e},
dFn:function dFn(d,e,f){this.a=d
this.b=e
this.c=f},
dFm:function dFm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFl:function dFl(d,e){this.a=d
this.b=e},
dFo:function dFo(d,e){this.a=d
this.b=e},
dFi:function dFi(){},
dFj:function dFj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFh:function dFh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dF2:function dF2(d){this.a=d},
dF3:function dF3(d,e,f){this.a=d
this.b=e
this.c=f},
dF4:function dF4(d,e){this.a=d
this.b=e},
dF1:function dF1(d){this.a=d},
dF9:function dF9(d,e){this.a=d
this.b=e},
dF0:function dF0(d){this.a=d},
dFa:function dFa(d,e,f){this.a=d
this.b=e
this.c=f},
dFb:function dFb(d,e,f){this.a=d
this.b=e
this.c=f},
dF_:function dF_(d,e){this.a=d
this.b=e},
dFc:function dFc(d,e,f){this.a=d
this.b=e
this.c=f},
dEZ:function dEZ(d,e){this.a=d
this.b=e},
dFd:function dFd(d,e){this.a=d
this.b=e},
dEY:function dEY(d){this.a=d},
dFe:function dFe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dEW:function dEW(){},
dEQ:function dEQ(d){this.a=d},
dER:function dER(d){this.a=d},
dEX:function dEX(d,e){this.a=d
this.b=e},
dFf:function dFf(d,e){this.a=d
this.b=e},
dEV:function dEV(d){this.a=d},
dFg:function dFg(d){this.a=d},
dEU:function dEU(){},
dF5:function dF5(d,e){this.a=d
this.b=e},
dET:function dET(d){this.a=d},
dF6:function dF6(d,e,f){this.a=d
this.b=e
this.c=f},
dES:function dES(d,e){this.a=d
this.b=e},
dEP:function dEP(d,e){this.a=d
this.b=e},
dF7:function dF7(d){this.a=d},
dF8:function dF8(d,e,f){this.a=d
this.b=e
this.c=f},
dFC:function dFC(){},
dFD:function dFD(d,e){this.a=d
this.b=e},
dFA:function dFA(d){this.a=d},
dFB:function dFB(d){this.a=d},
dFw:function dFw(d,e){this.a=d
this.b=e},
dFx:function dFx(d){this.a=d},
dFp:function dFp(d,e,f){this.a=d
this.b=e
this.c=f},
dFq:function dFq(d,e,f){this.a=d
this.b=e
this.c=f},
dFr:function dFr(d,e,f){this.a=d
this.b=e
this.c=f},
dFs:function dFs(d,e,f){this.a=d
this.b=e
this.c=f},
dFt:function dFt(d,e,f){this.a=d
this.b=e
this.c=f},
dFu:function dFu(d,e,f){this.a=d
this.b=e
this.c=f},
dFv:function dFv(d,e,f){this.a=d
this.b=e
this.c=f},
dFE:function dFE(){},
dFF:function dFF(){},
dFG:function dFG(){},
dFH:function dFH(d){this.a=d},
dFy:function dFy(d,e){this.a=d
this.b=e},
hkh(d){return B.d.dM(D.a1F,new C.fsJ(d),new C.fsK())},
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
fsJ:function fsJ(d){this.a=d},
fsK:function fsK(){},
akd:function akd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aTJ:function aTJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
So:function So(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdF:function bdF(){this.d=$
this.c=this.a=null},
d5o:function d5o(d,e){this.a=d
this.b=e},
d5m:function d5m(d,e){this.a=d
this.b=e},
d5n:function d5n(){},
d5p:function d5p(d,e){this.a=d
this.b=e},
h53(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.nc(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
KA(d,e){return C.i0b(d,e)},
i0b(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$KA=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$KA)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.R.aI(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.da(p,x.f)
o=A.cF(o,new C.fuN(),o.$ti.k("J.E"),x.B)
n=A.a3(o).k("a_<J.E>")
o=A.C(new A.a_(o,new C.fuO(),n),n.k("J.E"))
B.d.b2(o,new C.fuP())
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
AM(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aA(),$async$AM)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fHO(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$AM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AM,v)},
aPT(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aPT=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KA(d,e),$async$aPT)
case 2:u=h
t=J.cG(u)
s=t.be(u,new C.fPY(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AM(d,e,u),$async$aPT)
case 3:return A.h(null,v)}})
return A.i($async$aPT,v)},
bAD(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAD=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KA(d,e),$async$bAD)
case 2:u=h
J.nr(u,new C.fs0(f))
w=3
return A.b(C.AM(d,e,u),$async$bAD)
case 3:return A.h(null,v)}})
return A.i($async$bAD,v)},
bAS(d,e){return C.i0a(d,e)},
i0a(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bAS=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aA(),$async$bAS)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.MG
w=1
break}p=B.R.aI(0,q,null)
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
if(D.Cm.ai(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a3h,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a2F,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a2A,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.cSE,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.Hm(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.MG
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.MG
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAS,v)},
Rc(d,e,f){return C.i8x(d,e,f)},
i8x(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Rc=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aA(),$async$Rc)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ag(),null)),$async$Rc)
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
QH(d,e){return C.i0c(d,e)},
i0c(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QH=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aA(),$async$QH)
case 7:r=g
q=r.t8("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KA(d,e),$async$QH)
case 8:if(!j.cz(g)){n=B.a.i(d.toLowerCase())
m=J.lr(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QH)
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
return A.i($async$QH,v)},
afQ(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QH(d,e),$async$afQ)
case 3:s=g
r=J.a5(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.L(s,t)
w=5
return A.b(A.aA(),$async$afQ)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afQ)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afQ,v)},
a2a(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2a=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QH(d,e),$async$a2a)
case 2:s=h
J.hF(s,f)
w=3
return A.b(A.aA(),$async$a2a)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2a)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2a)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2a)
case 6:return A.h(null,v)}})
return A.i($async$a2a,v)},
nc:function nc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fuN:function fuN(){},
fuO:function fuO(){},
fuP:function fuP(){},
fHO:function fHO(){},
fPY:function fPY(d){this.a=d},
fs0:function fs0(d){this.a=d},
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
bN8:function bN8(d){this.a=d},
i8Q(d,e,f,g,h,i,j){return A.a6(d,!1).cl(A.e8(new C.fIm(j,i,f,e,h,g),!0,null,x.H))},
QE(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QE=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QH(h,g),$async$QE)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.J(x.q).f.U(D.aOk)
u=!1
w=1
break}w=4
return A.b(C.ho4(d,f,e),$async$QE)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afQ(h,g),$async$QE)
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
return A.b(C.AM(h,r,p),$async$QE)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Rc(h,r,new C.Hm("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QE)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QE,v)},
fIm:function fIm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
YV:function YV(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azb:function azb(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d63:function d63(d){this.a=d},
d62:function d62(d,e){this.a=d
this.b=e},
d5S:function d5S(d,e){this.a=d
this.b=e},
d5P:function d5P(d,e){this.a=d
this.b=e},
d5q:function d5q(d){this.a=d},
d5r:function d5r(d,e){this.a=d
this.b=e},
d5T:function d5T(d){this.a=d},
d5z:function d5z(d){this.a=d},
d5x:function d5x(d){this.a=d},
d5y:function d5y(d){this.a=d},
d5A:function d5A(d){this.a=d},
d5Q:function d5Q(d){this.a=d},
d5R:function d5R(){},
d5v:function d5v(d){this.a=d},
d5w:function d5w(d,e){this.a=d
this.b=e},
d5B:function d5B(d){this.a=d},
d5C:function d5C(d,e){this.a=d
this.b=e},
d61:function d61(d){this.a=d},
d60:function d60(d,e){this.a=d
this.b=e},
d6_:function d6_(d){this.a=d},
d5M:function d5M(d){this.a=d},
d5L:function d5L(d){this.a=d},
d5N:function d5N(d){this.a=d},
d5s:function d5s(d,e){this.a=d
this.b=e},
d5O:function d5O(d,e){this.a=d
this.b=e},
d5F:function d5F(d){this.a=d},
d5G:function d5G(d){this.a=d},
d5E:function d5E(){},
d5H:function d5H(d){this.a=d},
d5I:function d5I(d){this.a=d},
d5J:function d5J(d,e){this.a=d
this.b=e},
d5K:function d5K(d,e,f){this.a=d
this.b=e
this.c=f},
d5D:function d5D(d,e){this.a=d
this.b=e},
d5V:function d5V(d){this.a=d},
d5U:function d5U(){},
d5W:function d5W(d){this.a=d},
d5X:function d5X(d){this.a=d},
d5Y:function d5Y(d){this.a=d},
d5Z:function d5Z(d,e){this.a=d
this.b=e},
d5t:function d5t(d){this.a=d},
d5u:function d5u(d){this.a=d},
YZ:function YZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be_:function be_(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d7O:function d7O(d){this.a=d},
d7P:function d7P(d){this.a=d},
d7N:function d7N(d){this.a=d},
d7Q:function d7Q(d){this.a=d},
d7M:function d7M(d){this.a=d},
d7R:function d7R(d){this.a=d},
d7L:function d7L(d){this.a=d},
d7S:function d7S(d,e){this.a=d
this.b=e},
d7K:function d7K(d,e){this.a=d
this.b=e},
d7T:function d7T(d,e){this.a=d
this.b=e},
YX:function YX(d,e,f,g,h,i,j){var _=this
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
azc:function azc(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d6i:function d6i(d,e){this.a=d
this.b=e},
d6h:function d6h(d,e){this.a=d
this.b=e},
d6m:function d6m(d){this.a=d},
d6l:function d6l(d,e){this.a=d
this.b=e},
d6j:function d6j(d){this.a=d},
d6k:function d6k(d){this.a=d},
d6n:function d6n(d){this.a=d},
d6o:function d6o(d){this.a=d},
d6g:function d6g(d,e){this.a=d
this.b=e},
d6f:function d6f(d,e){this.a=d
this.b=e},
JG:function JG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yd:function Yd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cET:function cET(d){this.a=d},
cEU:function cEU(){},
cEV:function cEV(d){this.a=d},
bbf:function bbf(d,e,f){this.b=d
this.c=e
this.a=f},
bb6:function bb6(d,e){this.b=d
this.a=e},
ub:function ub(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yv:function Yv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbd:function bbd(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cYk:function cYk(d,e,f){this.a=d
this.b=e
this.c=f},
cYj:function cYj(d,e){this.a=d
this.b=e},
cYJ:function cYJ(d){this.a=d},
cYw:function cYw(){},
cYK:function cYK(d){this.a=d},
cYv:function cYv(){},
cYL:function cYL(d,e){this.a=d
this.b=e},
cYu:function cYu(d,e){this.a=d
this.b=e},
cYM:function cYM(d,e){this.a=d
this.b=e},
cYt:function cYt(d,e){this.a=d
this.b=e},
cYN:function cYN(d){this.a=d},
cYs:function cYs(){},
cYO:function cYO(d,e){this.a=d
this.b=e},
cYr:function cYr(d,e){this.a=d
this.b=e},
cYP:function cYP(d){this.a=d},
cYE:function cYE(d,e){this.a=d
this.b=e},
cYQ:function cYQ(d){this.a=d},
cYR:function cYR(d){this.a=d},
cYT:function cYT(d){this.a=d},
cYU:function cYU(d){this.a=d},
cYD:function cYD(d,e){this.a=d
this.b=e},
cYV:function cYV(d,e){this.a=d
this.b=e},
aGb:function aGb(d){this.a=d},
bgt:function bgt(d){this.a=d},
b9r:function b9r(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
i_9(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aho(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.fsN(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a_<1>"),q=q.k("cQ<1,m>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xU)m.push(l===D.ZH?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.k_(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.k_(h,a2,a2)-A.k_(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.a_(a4,new C.fsL(u,f),p),new C.fsM(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i_a(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aho(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fsS(v,e)
q=new C.fsQ(v)
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
for(l=B.d.gae(e),k=new A.f_(l,new C.fsR(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hLJ(d,e,f,g){var w,v,u=C.i_b(d,e)
if(u<=0||f.length<=u)return new A.adT(!1,D.Ca,f)
if(g.t(0,e.a))return new A.adT(!1,D.Ca,f)
w=A.U(f).c
v=A.de(f,0,A.dJ(u,"count",x.S),w).dI(0)
return new A.adT(!0,A.de(f,u,null,w).dI(0),v)},
hLK(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aho(d3),d2=d1.length
if(d2===0)return D.fVV
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d6v(t))}s=new C.d6M(v)
d2=x.h
r=A.T(w,d2)
q=new C.d6E(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d6D(r)
l=A.T(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ci(l.cg(0,k,new C.d6w()),o)}h=new C.d6C(s)
g=new C.d6B(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a_<J.E>")
f=A.C(new A.a_(new A.bc(v,p),new C.d6x(h),o),o.k("J.E"))
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
a9=new C.d6K(new C.d6G(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gak3(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.et([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.L(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.rd(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d6u(a2,new C.d6L(),b6,a3,b4,v,a4,a5,a6,b5)
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
a3.bK(0,new C.d6y(c6,b4))
for(d2=new A.cK(a4,a4.$ti.k("cK<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gR(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.f_(j,new C.d6z(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.b2(o,new C.d6A())
c6.push(new C.aIh(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bdK(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hjM(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
he6(d,e,f,g,h,i,j,k,l,m,n){return new C.Zy(k,f,j,e,l,n,m,d,g,h,i,null)},
aB8(d,e,f,g,h,i,j){return new C.bhp(i,d,e,f,j,h,g,null)},
ap_:function ap_(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCI:function aCI(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dTy:function dTy(d){this.a=d},
dTx:function dTx(d){this.a=d},
dTA:function dTA(d,e){this.a=d
this.b=e},
dTB:function dTB(d,e){this.a=d
this.b=e},
dTC:function dTC(d){this.a=d},
dTw:function dTw(d,e){this.a=d
this.b=e},
dTz:function dTz(d){this.a=d},
dTE:function dTE(d){this.a=d},
dTD:function dTD(d,e){this.a=d
this.b=e},
aoU:function aoU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCF:function aCF(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dSZ:function dSZ(d){this.a=d},
dSX:function dSX(d){this.a=d},
dSY:function dSY(d){this.a=d},
dT_:function dT_(d,e){this.a=d
this.b=e},
dSU:function dSU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSs:function dSs(d){this.a=d},
dSt:function dSt(d,e){this.a=d
this.b=e},
dSH:function dSH(d){this.a=d},
dSF:function dSF(d){this.a=d},
dSG:function dSG(d,e){this.a=d
this.b=e},
dSI:function dSI(d){this.a=d},
dSJ:function dSJ(d,e){this.a=d
this.b=e},
dST:function dST(d,e){this.a=d
this.b=e},
dSR:function dSR(d,e){this.a=d
this.b=e},
dSQ:function dSQ(d,e){this.a=d
this.b=e},
dSM:function dSM(d,e){this.a=d
this.b=e},
dSL:function dSL(d){this.a=d},
dSN:function dSN(d,e){this.a=d
this.b=e},
dSK:function dSK(d){this.a=d},
dSO:function dSO(d){this.a=d},
dSP:function dSP(d){this.a=d},
dSS:function dSS(d,e){this.a=d
this.b=e},
dSg:function dSg(d,e){this.a=d
this.b=e},
dSh:function dSh(d,e){this.a=d
this.b=e},
dT1:function dT1(d,e,f){this.a=d
this.b=e
this.c=f},
dSW:function dSW(d,e,f){this.a=d
this.b=e
this.c=f},
dSV:function dSV(d){this.a=d},
dSi:function dSi(d){this.a=d},
dSj:function dSj(d){this.a=d},
dSk:function dSk(){},
dSl:function dSl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSp:function dSp(d,e){this.a=d
this.b=e},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSn:function dSn(d){this.a=d},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSm:function dSm(d){this.a=d},
dT0:function dT0(d){this.a=d},
dSC:function dSC(){},
dSD:function dSD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSB:function dSB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSx:function dSx(d,e,f){this.a=d
this.b=e
this.c=f},
dSw:function dSw(d,e,f){this.a=d
this.b=e
this.c=f},
dSu:function dSu(d,e){this.a=d
this.b=e},
dSy:function dSy(d){this.a=d},
dSz:function dSz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSv:function dSv(d,e){this.a=d
this.b=e},
dSA:function dSA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSE:function dSE(d,e){this.a=d
this.b=e},
dT8:function dT8(){},
dT9:function dT9(d,e){this.a=d
this.b=e},
dTa:function dTa(d){this.a=d},
dTb:function dTb(d,e){this.a=d
this.b=e},
dT4:function dT4(d){this.a=d},
dT2:function dT2(d,e){this.a=d
this.b=e},
dT5:function dT5(d,e){this.a=d
this.b=e},
dT6:function dT6(d,e){this.a=d
this.b=e},
dT7:function dT7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dTc:function dTc(d){this.a=d},
dT3:function dT3(d){this.a=d},
dSr:function dSr(d){this.a=d},
bdI:function bdI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d6s:function d6s(d){this.a=d},
d6r:function d6r(d,e){this.a=d
this.b=e},
d6t:function d6t(d){this.a=d},
d6q:function d6q(d,e){this.a=d
this.b=e},
fsN:function fsN(d,e){this.a=d
this.b=e},
fsO:function fsO(d){this.a=d},
fsP:function fsP(){},
fsL:function fsL(d,e){this.a=d
this.b=e},
fsM:function fsM(){},
fsS:function fsS(d,e){this.a=d
this.b=e},
fsT:function fsT(d){this.a=d},
fsU:function fsU(){},
fsQ:function fsQ(d){this.a=d},
fsR:function fsR(d,e){this.a=d
this.b=e},
JO:function JO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Fy:function Fy(d,e){this.a=d
this.b=e},
bdK:function bdK(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d6v:function d6v(d){this.a=d},
d6M:function d6M(d){this.a=d},
d6E:function d6E(d){this.a=d},
d6F:function d6F(){},
d6D:function d6D(d){this.a=d},
d6w:function d6w(){},
d6C:function d6C(d){this.a=d},
d6B:function d6B(d,e){this.a=d
this.b=e},
d6x:function d6x(d){this.a=d},
d6G:function d6G(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d6H:function d6H(d){this.a=d},
d6I:function d6I(d){this.a=d},
d6J:function d6J(){},
d6K:function d6K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d6L:function d6L(){},
d6u:function d6u(d,e,f,g,h,i,j,k,l,m){var _=this
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
d6y:function d6y(d,e){this.a=d
this.b=e},
d6z:function d6z(d){this.a=d},
d6A:function d6A(){},
aIh:function aIh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdL:function bdL(d,e){this.b=d
this.a=e},
d6N:function d6N(){},
d6O:function d6O(d){this.a=d},
d6P:function d6P(d){this.a=d},
d6Q:function d6Q(){},
bhq:function bhq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcP:function bcP(d,e){this.b=d
this.a=e},
bv7:function bv7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
far:function far(d){this.a=d},
bkM:function bkM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eMm:function eMm(d){this.a=d},
eMl:function eMl(d,e){this.a=d
this.b=e},
Zy:function Zy(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aB6:function aB6(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dmF:function dmF(d,e){this.a=d
this.b=e},
dmE:function dmE(d){this.a=d},
dmC:function dmC(d){this.a=d},
dmD:function dmD(d){this.a=d},
dmO:function dmO(d){this.a=d},
dmP:function dmP(d){this.a=d},
dmN:function dmN(d,e){this.a=d
this.b=e},
dmQ:function dmQ(){},
dmT:function dmT(d){this.a=d},
dmM:function dmM(d,e){this.a=d
this.b=e},
dmS:function dmS(){},
dmU:function dmU(d){this.a=d},
dmL:function dmL(d,e){this.a=d
this.b=e},
dmV:function dmV(d){this.a=d},
dmK:function dmK(d){this.a=d},
dmW:function dmW(d){this.a=d},
dmJ:function dmJ(d){this.a=d},
dmX:function dmX(d){this.a=d},
dmI:function dmI(d){this.a=d},
dmY:function dmY(d){this.a=d},
dmH:function dmH(d){this.a=d},
dmZ:function dmZ(d){this.a=d},
dmG:function dmG(d,e){this.a=d
this.b=e},
dmR:function dmR(d){this.a=d},
acJ:function acJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhp:function bhp(d,e,f,g,h,i,j,k){var _=this
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
bho:function bho(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dn_:function dn_(d){this.a=d},
dn0:function dn0(d,e){this.a=d
this.b=e},
aB7:function aB7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHj:function aHj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acK:function acK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dn9:function dn9(d){this.a=d},
JC:function JC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h8Z(d){var w=d.T,v=x.N
return w.j2(w,new C.c7R(),v,v)},
hDe(d){var w=d.bA
if(w>=0)return w
return 5},
h90(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h8Z(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h9_(d,e){var w=C.h90(d,e)
if(w!=null&&w.cc(new A.S(Date.now(),0,!1)))return!0
return!1},
hDf(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.h8Z(d),w,w)
u=C.h90(d,e)
t=u!=null&&u.cc(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bR(A.dC(30,0,0,0,0,0).a).a7().ac())
d.T=v},
aZl(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZl=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lf(t,B.HV),$async$aZl)
case 3:if(l){u=!0
w=1
break}u=A.kU(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.HV,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZl,v)},
c7R:function c7R(){},
hDc(){var w,v=$.ps(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.h_(u)},
Ig(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Ig=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$Ig)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_family_tree_backup_codes_v1",null,!1,B.bH),$async$Ig)
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
a6K(d){return C.hDd(d)},
hDd(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6K=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$a6K)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hE("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,B.cI,null),$async$a6K)
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
c7Q(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c7Q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Ig(),$async$c7Q)
case 3:t=m.jy(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
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
return A.i($async$c7Q,v)},
Nd(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Nd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c7Q(d),$async$Nd)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Ig(),$async$Nd)
case 6:s=f
r=J.a5(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dW(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a7().ac())
r.n(s,t,o)
w=9
return A.b(C.a6K(s),$async$Nd)
case 9:case 8:u=t
w=1
break
case 5:n=C.hDc()
w=10
return A.b(C.Ig(),$async$Nd)
case 10:s=f
J.aF(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a7().ac(),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=11
return A.b(C.a6K(s),$async$Nd)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Nd,v)},
aZk(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Ig(),$async$aZk)
case 3:t=f
for(s=J.dl(t),r=s.gdL(t),r=r.dI(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6K(t),$async$aZk)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZk,v)},
a6L(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6L=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aoZ(d,e),$async$a6L)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Nd(d),$async$a6L)
case 7:w=4
break
case 5:w=8
return A.b(C.aZk(d),$async$a6L)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6L,v)},
aoT(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aoT=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aoZ(f,e),$async$aoT)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c3(),$async$aoT)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Ig(),$async$aoT)
case 7:q=o.q(k,t)
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
return A.i($async$aoT,v)},
aZj(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c3(),$async$aZj)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Ig(),$async$aZj)
case 4:t=q.q(g,r)
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
return A.i($async$aZj,v)},
hDg(){var w,v=$.ps(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.h_(u)},
aoW(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aoW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$aoW)
case 3:if(!g){u=null
w=1
break}t=C.hDg()
w=4
return A.b(A.UI(),$async$aoW)
case 4:s=g
r=B.dJ.aJ(B.R.ao(d.eP(),null))
r=B.cS.gcz().aJ(r)
q=e?999:2
J.aF(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=5
return A.b(A.a6M(s),$async$aoW)
case 5:p=e?999:2
u=new A.a_L("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoW,v)},
aoV(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aoV=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.UI(),$async$aoV)
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
return A.b(C.aZj(J.k(l==null?"":l),j),$async$aoV)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c9.ca(0,B.cG.aJ(t))
s=C.h91(r)}catch(f){q=A.aa(f)
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
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a7().ac())
o.n(p,g,l)}w=5
return A.b(A.a6M(p),$async$aoV)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoV,v)},
h91(d){var w,v,u,t,s=null
try{w=B.R.aI(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hDi(A.a2(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fTV(d){var w=0,v=A.j(x.m),u,t,s
var $async$fTV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aoV(t[1])
w=1
break}u=null
w=1
break}u=C.h91(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTV,v)},
hDi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.da(v,x.f)
u=A.cF(u,new C.c7T(),u.$ti.k("J.E"),x.k)
t=A.a3(u).k("a_<J.E>")
s=A.C(new A.a_(u,new C.c7U(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jy(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.da(l,u)
n=A.cF(n,new C.c7V(),n.$ti.k("J.E"),o)
k=A.a3(n).k("a_<J.E>")
j=A.C(new A.a_(n,new C.c7W(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aoX(h,w,s,r,q)},
aoZ(d,e){var w=0,v=A.j(x.y),u,t
var $async$aoZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.N4(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AA(d),$async$aoZ)
case 3:u=t.cz(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aoZ,v)},
c81(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c81=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AA(d),$async$c81)
case 3:t=s.b6(f,new C.c82(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.b2(t,new C.c83())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c81,v)},
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
return A.b(C.aoZ(e,d),$async$UJ)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Nd(e),$async$UJ)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AA(e),$async$UJ)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c8_(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a5(r)
if(t.gam(r)){u=null
w=1
break}t=t.dt(r,new C.c80(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KA(e,o),$async$UJ)
case 14:n=i
if(J.cz(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.aoX(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UJ,v)},
aZo(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZo=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UJ(d,e,f,g),$async$aZo)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.Gg(A.JK(q.eP(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZo,v)},
aZn(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZn=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UJ(d,e,f,g),$async$aZn)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aoW(r,f),$async$aZn)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFk(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZn,v)},
UK(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UK=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fTV(a0),$async$UK)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aoT(g.a,d,e,f,s,r),$async$UK)
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
return A.b(C.bAt(e,j),$async$UK)
case 12:case 11:w=13
return A.b(C.ah9(e,j,s),$async$UK)
case 13:h=n.h(0,i)
w=h!=null&&J.cz(h)?14:15
break
case 14:w=16
return A.b(C.AM(e,i,h),$async$UK)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bom(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UK,v)},
aoX:function aoX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c7Y:function c7Y(){},
c7Z:function c7Z(){},
c7X:function c7X(){},
c7T:function c7T(){},
c7U:function c7U(){},
c7V:function c7V(){},
c7W:function c7W(){},
c82:function c82(){},
c83:function c83(){},
c8_:function c8_(d){this.a=d},
c80:function c80(d){this.a=d},
h1e(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hy(d,new C.aoY(w,e,g,i,f,h,null),!0,null,x.H)},
d6p(d,e,f,g,h,i,j,k){return new C.bdH(i,e,k,j,g,f,h,d,null)},
aoY:function aoY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCH:function aCH(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dTl:function dTl(d){this.a=d},
dTm:function dTm(d,e,f){this.a=d
this.b=e
this.c=f},
dTq:function dTq(d,e){this.a=d
this.b=e},
dTr:function dTr(d){this.a=d},
dTi:function dTi(d){this.a=d},
dTj:function dTj(d,e){this.a=d
this.b=e},
dTk:function dTk(d,e){this.a=d
this.b=e},
dTp:function dTp(d){this.a=d},
dTo:function dTo(d,e){this.a=d
this.b=e},
dTn:function dTn(){},
dTt:function dTt(d){this.a=d},
dTu:function dTu(d,e){this.a=d
this.b=e},
dTs:function dTs(d,e){this.a=d
this.b=e},
d6R:function d6R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdJ:function bdJ(d,e,f){this.d=d
this.e=e
this.a=f},
ac_:function ac_(d,e,f){this.c=d
this.d=e
this.a=f},
bdH:function bdH(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdM:function bdM(d,e,f,g,h){var _=this
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
aCG:function aCG(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dTd:function dTd(d,e){this.a=d
this.b=e},
dTe:function dTe(d){this.a=d},
dTf:function dTf(d){this.a=d},
dTg:function dTg(d){this.a=d},
dTh:function dTh(d){this.a=d},
ZV:function ZV(d){this.a=d},
biT:function biT(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dTv:function dTv(d,e){this.a=d
this.b=e},
aXV(d,e){return new C.aXU(d,e,null)},
aXU:function aXU(d,e,f){this.c=d
this.d=e
this.a=f},
i1D(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b4(d,11)},
i9_(d){return A.bR(B.K,null,new C.fIP(new C.tJ(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
haU(d,e){return new C.arT(e,d,null)},
aPz(d,e,f,g,h,i,j){var w=C.i1D(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5N(w,!0,null),null),B.aq)
return I.aOV(e,B.bT,f,g,h,i,j)},
lA:function lA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5N:function a5N(d,e,f){this.c=d
this.d=e
this.a=f},
biz:function biz(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b3$=e
_.c=_.a=null},
dEH:function dEH(d){this.a=d},
dEI:function dEI(){},
dEJ:function dEJ(d,e){this.a=d
this.b=e},
biy:function biy(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fIP:function fIP(d){this.a=d},
fIO:function fIO(d,e){this.a=d
this.b=e},
fIN:function fIN(d,e){this.a=d
this.b=e},
fIM:function fIM(d,e){this.a=d
this.b=e},
arT:function arT(d,e,f){this.c=d
this.d=e
this.a=f},
cfx:function cfx(d,e){this.a=d
this.b=e},
aKD:function aKD(){},
i8L(d){var w=null
return A.cb(w,w,!0,w,new C.fIb(),d,w,!0,!0,x.e2)},
i9V(d,e,f,g,h){var w=null
return A.cb(w,w,!0,w,new C.fPF(h,g,f,e),d,w,!0,!0,x.N)},
i8N(d,e){var w=null
return A.cb(w,w,!0,w,new C.fIg(e),d,w,!0,!0,x.dY)},
i8M(d){var w=null
return A.cb(w,w,!0,w,new C.fIf(),d,w,!0,!0,x.c5)},
aSu:function aSu(d,e){this.a=d
this.b=e},
aSt:function aSt(d){this.a=d},
aQv:function aQv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIb:function fIb(){},
fPF:function fPF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIg:function fIg(d){this.a=d},
fIf:function fIf(){},
Yx:function Yx(d,e){this.c=d
this.a=e},
axX:function axX(){var _=this
_.d=$
_.c=_.a=_.e=null},
cZ6:function cZ6(d){this.a=d},
cZ7:function cZ7(d){this.a=d},
cZ5:function cZ5(d,e){this.a=d
this.b=e},
cZ8:function cZ8(d){this.a=d},
cZ9:function cZ9(d){this.a=d},
Yw:function Yw(d){this.a=d},
axW:function axW(){this.d=$
this.c=this.a=null},
cZ2:function cZ2(d){this.a=d},
cZ3:function cZ3(d){this.a=d},
cZ4:function cZ4(d){this.a=d},
Y4:function Y4(d){this.a=d},
awG:function awG(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cwG:function cwG(){},
cwM:function cwM(d){this.a=d},
cwN:function cwN(d){this.a=d},
cwO:function cwO(d){this.a=d},
cwL:function cwL(){},
cwP:function cwP(d){this.a=d},
cwQ:function cwQ(d){this.a=d},
cwK:function cwK(){},
cwR:function cwR(d,e){this.a=d
this.b=e},
cwJ:function cwJ(d,e){this.a=d
this.b=e},
cwH:function cwH(d,e){this.a=d
this.b=e},
cwS:function cwS(d){this.a=d},
cwI:function cwI(){},
cwT:function cwT(d){this.a=d},
a0F:function a0F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bv_:function bv_(){this.d=$
this.c=this.a=null},
f9U:function f9U(d,e){this.a=d
this.b=e},
f9V:function f9V(d){this.a=d},
f9W:function f9W(d,e){this.a=d
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
buY:function buY(d,e){var _=this
_.d=$
_.bt$=d
_.a8$=e
_.c=_.a=null},
f9S:function f9S(d,e){this.a=d
this.b=e},
awz:function awz(d,e){this.c=d
this.a=e},
buZ:function buZ(d,e){var _=this
_.d=$
_.bt$=d
_.a8$=e
_.c=_.a=null},
f9T:function f9T(d){this.a=d},
buX:function buX(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aMO:function aMO(){},
aMP:function aMP(){},
bCq(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bv(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oE(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fGQ(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d7(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d7(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.N,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d7(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.d7(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Xu(A.d7(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aPb(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aPb=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hY().l5(85,1280,B.eH),$async$aPb)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fl(),$async$aPb)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.haT()
w=9
return A.b(C.cfw(q,r),$async$aPb)
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
return A.i($async$aPb,v)},
aPx(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPx=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cft(g)
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
return A.b($.W().Lm(p,!0,null,i).cO(0,B.fI),$async$aPx)
case 9:n=a1
w=10
return A.b(n.m1(),$async$aPx)
case 10:m=a1
w=11
return A.b(J.ahz(m).ht(B.fY),$async$aPx)
case 11:l=a1
J.ahz(m).q()
if(l==null){w=8
break}i=J.eT(B.dD.gaM(l))
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
return A.i($async$aPx,v)},
fGQ:function fGQ(){},
tJ:function tJ(d){this.a=d},
arS:function arS(d,e,f){this.c=d
this.d=e
this.a=f},
aEc:function aEc(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eJw:function eJw(d,e){this.a=d
this.b=e},
eJn:function eJn(d){this.a=d},
eJo:function eJo(d){this.a=d},
eJu:function eJu(d,e){this.a=d
this.b=e},
eJt:function eJt(d,e){this.a=d
this.b=e},
eJq:function eJq(d,e){this.a=d
this.b=e},
eJp:function eJp(d,e){this.a=d
this.b=e},
eJr:function eJr(d){this.a=d},
eJs:function eJs(d,e){this.a=d
this.b=e},
eJv:function eJv(d,e){this.a=d
this.b=e},
eJi:function eJi(d,e){this.a=d
this.b=e},
eJm:function eJm(d){this.a=d},
eJl:function eJl(d,e){this.a=d
this.b=e},
eJk:function eJk(d){this.a=d},
eJx:function eJx(d,e){this.a=d
this.b=e},
eJy:function eJy(d,e){this.a=d
this.b=e},
eJj:function eJj(d,e){this.a=d
this.b=e},
hnA(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a7().ac(),"project",v],x.N,x.z)},
fGR(d,e,f){var w=0,v=A.j(x.N),u
var $async$fGR=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hnA(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGR,v)},
bCs(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fGR(!0,d,e),$async$bCs)
case 4:w=3
return A.b(r.arQ(g,d,e.a),$async$bCs)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dJ.aJ(B.R.ao(C.hnA(d,e,null),null))
u="NGMY_WS:"+B.ki.gcz().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCs,v)},
hfs(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h0W(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d0(s,"NGMYWSSYNC2|"))return!0
if(J.d0(s,"NGMY_WS:"))return!0
if(J.f1(s,t))return!0
if(J.d0(s,"{"))try{w=B.R.aI(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i6G(d){var w,v,u,t=C.hfs(d)
if(t==null)return null
if(C.h0W(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b4(t,w))
if(C.h0W(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b4(t,u))
if(C.h0W(v))return v}return null},
h0V(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d0(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d0(q,"NGMY_WS:")){v=B.c9.ca(0,B.cG.aJ(J.mH(q,8)))
w=t.a(B.R.aI(0,v,r))}else w=t.a(B.R.aI(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fWt(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bCr(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.arP(t[1]),$async$bCr)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h0V(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h0V(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCr,v)},
h0U(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.li(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bBZ(){var w=0,v=A.j(x.o),u,t
var $async$bBZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Gr(),$async$bBZ)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h0V(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBZ,v)},
hos(d,e,f,g){return A.bR(B.K,null,new C.fPv(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fPv:function fPv(d,e,f){this.a=d
this.b=e
this.c=f},
ad4:function ad4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eJA:function eJA(d,e){this.a=d
this.b=e},
eJB:function eJB(d,e){this.a=d
this.b=e},
eJC:function eJC(d,e){this.a=d
this.b=e},
eJD:function eJD(d,e){this.a=d
this.b=e},
eJz:function eJz(d){this.a=d},
arM:function arM(d,e,f){this.c=d
this.d=e
this.a=f},
bkf:function bkf(){var _=this
_.c=_.a=_.e=_.d=null},
eJd:function eJd(d,e){this.a=d
this.b=e},
eJe:function eJe(d){this.a=d},
eJf:function eJf(d){this.a=d},
arR:function arR(d){this.a=d},
aEb:function aEb(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eJh:function eJh(d){this.a=d},
eJg:function eJg(d){this.a=d},
hGw(d,e,f,g,h){return new C.NQ(h,g,d,e,f,null)},
aIZ:function aIZ(d,e){this.a=d
this.b=e},
NQ:function NQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEd:function aEd(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eK_:function eK_(){},
eJW:function eJW(d,e){this.a=d
this.b=e},
eJX:function eJX(d){this.a=d},
eJH:function eJH(d){this.a=d},
eJF:function eJF(d){this.a=d},
eJG:function eJG(d){this.a=d},
eJQ:function eJQ(d,e){this.a=d
this.b=e},
eJN:function eJN(d,e){this.a=d
this.b=e},
eJO:function eJO(d,e){this.a=d
this.b=e},
eJP:function eJP(d,e,f){this.a=d
this.b=e
this.c=f},
eJL:function eJL(d,e,f){this.a=d
this.b=e
this.c=f},
eJJ:function eJJ(d){this.a=d},
eJK:function eJK(d){this.a=d},
eJM:function eJM(d){this.a=d},
eK2:function eK2(d){this.a=d},
eK1:function eK1(d){this.a=d},
eK3:function eK3(d){this.a=d},
eK0:function eK0(d){this.a=d},
eJE:function eJE(d){this.a=d},
eJI:function eJI(d,e){this.a=d
this.b=e},
eJZ:function eJZ(d,e){this.a=d
this.b=e},
eJY:function eJY(d,e){this.a=d
this.b=e},
eJT:function eJT(d){this.a=d},
eJU:function eJU(d){this.a=d},
eJV:function eJV(d,e){this.a=d
this.b=e},
eJS:function eJS(d,e){this.a=d
this.b=e},
eJR:function eJR(d,e,f){this.a=d
this.b=e
this.c=f},
bwL:function bwL(){},
Ar(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
afz(d,e,f){return C.hWa(d,e,f)},
hWa(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afz=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$afz)
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
afy(d,e){return C.hW9(d,e)},
hW9(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
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
hUW(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Sr(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzu(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzu=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b1A(q),$async$bzu)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPx(q,!1),$async$bzu)
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
return A.i($async$bzu,v)},
huj(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qW(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qW(p,J.k(u==null?"":u),1,o,q)},
fWt(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.da(s,x.f)
w=A.cF(w,new C.cw4(),w.$ti.k("J.E"),x.Q)
v=A.a3(w).k("a_<J.E>")
r=A.C(new A.a_(w,new C.cw5(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.li(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
i_5(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.ZH
case"female":case"f":return D.aji
default:return D.xU}},
hki(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h54(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i_5(v==null?j:J.k(v))
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
i_7(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.MH
case"viewer":return D.kt
default:return D.tO}},
i_8(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gh(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bAK(d,e){return B.a.i(e.toLowerCase())===C.Gh(d,e)&&d.y!==D.kt},
tV(d,e){var w,v=d.y
if(v===D.kt)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gh(d,e))return!0
if(v===D.MH)return!0
v=d.e
return new A.M(v,A.h1_(),A.U(v).k("M<1,m>")).t(0,w)},
hZy(d){return J.dH(d,new C.frT()).gM(0)},
fQ4(d){var w=0,v=A.j(x.y),u,t
var $async$fQ4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AA(d),$async$fQ4)
case 3:u=t.qS(f,new C.fQ5(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQ4,v)},
bAt(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AA(d),$async$bAt)
case 3:t=g
if(J.qS(t,new C.fq8(e))){w=1
break}if(C.hZy(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAt,v)},
akf(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.da(n,x.f)
w=A.cF(w,new C.bN9(),w.$ti.k("J.E"),x.P)
v=A.a3(w).k("a_<J.E>")
m=A.C(new A.a_(w,new C.bNa(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bNb(),x.N)
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
return new C.kD(l,w,v,!s,t,m,r,q,p,C.i_7(o==null?null:J.k(o)))},
hkr(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CH(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ra(d),$async$CH)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aA(),$async$CH)
case 4:t=f
w=5
return A.b(t.a5F(0),$async$CH)
case 5:w=6
return A.b(C.fhv(t,l),$async$CH)
case 6:s=f
if(J.cz(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a5(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hg2(o)
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
case 12:n=C.hg2(m)
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
fhv(d,e){return C.hSp(d,e)},
hSp(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fhv=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a5(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Ar(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.R.aI(0,a5,null)
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
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Ar(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aI(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fWt(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Ar(a9)+"_"+n))
i=C.hUW(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1A(h),$async$fhv)
case 17:g=b1
if(g!=null){i=i.Sr(g)
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
case 8:J.Rk(q,new C.fhw())
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
return A.i($async$fhv,v)},
bAV(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bAV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ra(d),$async$bAV)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CH(r),$async$bAV)
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
return A.i($async$bAV,v)},
hg2(d){var w,v,u,t
try{w=B.R.aI(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.da(w,x.f)
v=A.cF(v,new C.fdc(),v.$ti.k("J.E"),x.i)
u=A.a3(v).k("a_<J.E>")
v=A.C(new A.a_(v,new C.fdd(),u),u.k("J.E"))
B.d.b2(v,new C.fde())
return v}catch(t){v=A.a([],x.D)
return v}},
oD(d,e){return C.i8B(d,e)},
i8B(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oD=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Ra(b2),$async$oD)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aA(),$async$oD)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Ar(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aI(0,p,null)),new C.fI2(),a2).fM(0)
a2=J.b6(b3,new C.fI3(),a2).c_(0,new C.fI4())
n=A.dc(a2,a2.$ti.k("J.E"))
a2=o,a2=A.ea(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f1(n,m)?17:18
break
case 17:a5=C.Ar(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a82(l),$async$oD)
case 19:t=21
a5=C.Ar(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aI(0,k,null)
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
return A.b(C.afy(r,"ngmy_worksheet_item_v3_"+C.Ar(a8)+"_"+m),$async$oD)
case 29:w=30
return A.b(C.afy(r,"ngmy_worksheet_thumb_v3_"+C.Ar(a8)+"_"+m),$async$oD)
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
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bzu(h),$async$oD)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afz(r,"ngmy_worksheet_thumb_v3_"+C.Ar(a8)+"_"+a4,f),$async$oD)
case 40:g=i.Sr(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afy(r,"ngmy_worksheet_thumb_v3_"+C.Ar(a8)+"_"+a4),$async$oD)
case 41:g=i.Sr(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afy(r,"ngmy_worksheet_thumb_v3_"+C.Ar(a8)+"_"+a4),$async$oD)
case 42:case 34:a4=i.a
w=43
return A.b(C.afz(r,"ngmy_worksheet_item_v3_"+C.Ar(a8)+"_"+a4,B.R.ao(g.ag(),null)),$async$oD)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ci(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afz(r,"ngmy_worksheets_index_v3_"+C.Ar(a8),B.R.ao(q,null)),$async$oD)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.fI5(q))
a4=a3.$ti.k("cQ<1,a4<m,@>>")
a7=A.C(new A.cQ(a3,new C.fI6(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afz(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$oD)
case 45:w=46
return A.b(J.htq(r),$async$oD)
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
return A.i($async$oD,v)},
L0(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$L0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CH(d),$async$L0)
case 3:t=g
s=J.cG(t)
r=s.be(t,new C.fQ3(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.oD(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$L0,v)},
bAH(d,e){var w=0,v=A.j(x.H),u
var $async$bAH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CH(d),$async$bAH)
case 2:u=g
J.nr(u,new C.fsk(e))
w=3
return A.b(C.oD(d,u),$async$bAH)
case 3:return A.h(null,v)}})
return A.i($async$bAH,v)},
Gj(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$Gj)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aI(0,i,null)
if(x.j.b(t)){j=J.da(t,x.f)
j=A.cF(j,new C.fuT(),j.$ti.k("J.E"),x.k)
s=A.a3(j).k("a_<J.E>")
r=A.C(new A.a_(j,new C.fuU(),s),s.k("J.E"))
B.d.b2(r,new C.fuV())
k=r}}catch(h){}w=4
return A.b(C.fdX(d),$async$Gj)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hSM(k,p,d)
j=A.U(o)
s=j.k("M<1,a4<m,@>>")
s=A.C(new A.M(o,new C.fuW(),s),s.k("ak.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qn(d,o),$async$Gj)
case 7:case 6:j=j.k("a_<1>")
m=A.C(new A.a_(o,new C.fuX(d),j),j.k("J.E"))
if(m.length!==0)C.aO5(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gj,v)},
fHP(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fHP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qn(d,e),$async$fHP)
case 3:t=J.dH(e,new C.fHQ(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aO5(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHP,v)},
a2g(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2g=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aA(),$async$a2g)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aI(0,l,null)
if(x.j.b(u)){m=J.da(u,x.f)
m=A.cF(m,new C.fPZ(),m.$ti.k("J.E"),x.k)
t=A.a3(m).k("a_<J.E>")
s=A.C(new A.a_(m,new C.fQ_(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qe(o,new C.fQ0(e))
if(B.a.i(e.x).length===0&&C.tV(e,d)){m=B.a.i(d.toLowerCase())
p=e.aDg(e.y===D.kt?D.kt:D.tO,m)}else p=e
if(q===-1)J.pw(o,0,p)
else J.aF(o,q,p)
w=3
return A.b(C.Qn(d,o),$async$a2g)
case 3:w=C.tV(p,d)?4:5
break
case 4:w=6
return A.b(C.aO4(C.Gh(p,d),p),$async$a2g)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2g,v)},
aOg(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gj(d),$async$aOg)
case 2:u=g
t=J.cG(u)
s=A.rd(t.eO(u,new C.fs1(e)))
t.bp(u,new C.fs2(e))
w=3
return A.b(C.Qn(d,u),$async$aOg)
case 3:w=s!=null&&C.bAK(s,d)?4:5
break
case 4:w=6
return A.b(C.fdg(e),$async$aOg)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOg,v)},
aho(d){var w=d.f,v=A.U(w).k("a_<1>")
w=A.C(new A.a_(w,new C.fQa(),v),v.k("J.E"))
return w},
fZC(d,e){var w,v=d.f,u=A.rd(new A.a_(v,new C.fry(e),A.U(v).k("a_<1>")))
v=C.aho(d)
w=A.U(v).k("a_<1>")
v=A.C(new A.a_(v,new C.frz(e,u),w),w.k("J.E"))
B.d.b2(v,new C.frA())
return v},
i_b(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
how(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.be(C.fZC(d,u),new C.fPG(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i0I(d,e){var w
if(e==null||e.length===0)return 1
w=C.fZC(d,e)
if(w.length===0)return 1
return new A.M(w,new C.fvF(),A.U(w).k("M<1,H>")).fd(0,B.A9)+1},
i8u(d){var w,v=C.aho(d)
if(v.length===0)return null
w=new A.a_(v,new C.fHJ(),A.U(v).k("a_<1>"))
if(!w.gam(0))return w.gI(0)
return B.d.gI(v)},
i_6(d){return A.F(["id",d.a,"name",d.b,"gender",C.hki(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i0D(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.xU?n:q.c
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
d=q.aDb(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cIx(a1,w,a3.d,a2.y,s,a0,v)},
AA(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$AA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aA(),$async$AA)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aI(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.da(t,x.f)
p=A.cF(p,new C.fuQ(),p.$ti.k("J.E"),x.k)
s=A.a3(p).k("a_<J.E>")
p=A.C(new A.a_(p,new C.fuR(),s),s.k("J.E"))
B.d.b2(p,new C.fuS())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AA,v)},
ah9(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ah9=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tO:D.kt
a7=C.Gh(b2,b3)
w=2
return A.b(C.AA(b1),$async$ah9)
case 2:a8=b5
a9=J.cG(a8)
b0=a9.be(a8,new C.fHE(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAt(b1,b2),$async$ah9)
case 5:case 4:if(b0===-1){u=b2.aDg(a6,a7)
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
i=i!==D.xU?i:l.c
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
s.n(0,m,l.aDb(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tO:D.kt
u=t.yx(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qn(b1,a8),$async$ah9)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aO4(B.a.i(b3.toLowerCase()),u),$async$ah9)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ah9,v)},
hgq(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a7().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("M<1,a4<m,@>>"),k=A.C(new A.M(m,C.hnI(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a7().ac(),"updatedAt",o],r,x.K),"createdAt",s.a7().ac(),"updatedAt",o],r,x.z)},
hgr(d,e){var w=new A.S(Date.now(),0,!1).a7().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("M<1,a4<m,@>>")
u=A.C(new A.M(u,C.hnI(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a7().ac(),"updatedAt",w],x.N,x.z)},
hQp(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a5(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akf(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.M(j,A.h1_(),A.U(j).k("M<1,m>")).c_(0,new C.fdK())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tO
else s=B.d.t(t,u)?D.MH:D.kt
return w.aDg(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akf(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.da(q,h)
h=A.cF(h,new C.fdL(),h.$ti.k("J.E"),x.P)
p=A.a3(h).k("a_<J.E>")
o=A.C(new A.a_(h,new C.fdM(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fdN(),x.N).c_(0,new C.fdO())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tO
else s=B.d.t(t,u)?D.MH:D.kt
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
return new C.kD(h,r,p,!m,t,o,l,j,v,s)},
fdX(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fdX=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fe0()
h=x.N
g=x.z
w=7
return A.b(A.iN(A.a([A.lq("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bH),r.$2(A.lq("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bH),"collaborator"),r.$2(A.lq("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bH),"public")],x.cl),x.U),$async$fdX)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.h1(l,o)
J.h1(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.L)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aF(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cF(new A.bc(l,h),new C.fdY(a0),h.k("J.E"),x.k)
l=A.a3(h).k("a_<J.E>")
l=A.C(new A.a_(h,new C.fdZ(),l),l.k("J.E"))
B.d.b2(l,new C.fe_())
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
return A.i($async$fdX,v)},
hSM(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a5(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.fia(),v).c_(0,new C.fib())
t=A.dc(u,u.$ti.k("J.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gh(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kt){m=q.e
m=!new A.M(m,A.h1_(),A.U(m).k("M<1,m>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i0D(l,v)
o=C.Gh(k,w)
p=v.d
s.n(0,u,o===w?k.bb9(p,D.tO):k.bb9(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.b2(j,new C.fic())
return j},
Qn(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aA(),$async$Qn)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fkC(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$Qn)
case 3:return A.h(null,v)}})
return A.i($async$Qn,v)},
aO4(d,e){return C.hXW(d,e)},
hXW(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aO4=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lS("family_trees",A.a([C.hgq(e,d)],p),null,B.cI),$async$aO4)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lS("family_trees",A.a([C.hgr(e,d)],p),null,B.cI),$async$aO4)
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
return A.i($async$aO4,v)},
aO5(d,e){return C.hXX(d,e)},
hXX(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aO5=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("M<1,a4<m,@>>")
m=n.k("ak.E")
l=A.C(new A.M(e,new C.fps(d),n),m)
r=l
w=7
return A.b(A.lS("family_trees",r,null,B.cI),$async$aO5)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.M(e,new C.fpt(d),n),m)
p=k
w=8
return A.b(A.lS("family_trees",p,null,B.cI),$async$aO5)
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
return A.i($async$aO5,v)},
fdg(d){return C.hPK(d)},
hPK(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fdg=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QL("family_trees",A.F(["id",d],x.N,x.z),null,B.cI),$async$fdg)
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
return A.i($async$fdg,v)},
qW:function qW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
li:function li(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cw7:function cw7(){},
cw6:function cw6(){},
cw4:function cw4(){},
cw5:function cw5(){},
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
ake:function ake(d,e){this.a=d
this.b=e},
frT:function frT(){},
fQ5:function fQ5(d){this.a=d},
fq8:function fq8(d){this.a=d},
kD:function kD(d,e,f,g,h,i,j,k,l,m){var _=this
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
bNd:function bNd(){},
bNc:function bNc(){},
bN9:function bN9(){},
bNa:function bNa(){},
bNb:function bNb(){},
fhw:function fhw(){},
fdc:function fdc(){},
fdd:function fdd(){},
fde:function fde(){},
fI2:function fI2(){},
fI3:function fI3(){},
fI4:function fI4(){},
fI5:function fI5(d){this.a=d},
fI6:function fI6(){},
fQ3:function fQ3(d){this.a=d},
fsk:function fsk(d){this.a=d},
fuT:function fuT(){},
fuU:function fuU(){},
fuV:function fuV(){},
fuW:function fuW(){},
fuX:function fuX(d){this.a=d},
fHQ:function fHQ(d){this.a=d},
fPZ:function fPZ(){},
fQ_:function fQ_(){},
fQ0:function fQ0(d){this.a=d},
fs1:function fs1(d){this.a=d},
fs2:function fs2(d){this.a=d},
fQa:function fQa(){},
fry:function fry(d){this.a=d},
frz:function frz(d,e){this.a=d
this.b=e},
frA:function frA(){},
fPG:function fPG(d){this.a=d},
fvF:function fvF(){},
fHJ:function fHJ(){},
fuQ:function fuQ(){},
fuR:function fuR(){},
fuS:function fuS(){},
fHE:function fHE(d){this.a=d},
fdK:function fdK(){},
fdL:function fdL(){},
fdM:function fdM(){},
fdN:function fdN(){},
fdO:function fdO(){},
fe0:function fe0(){},
fe1:function fe1(d){this.a=d},
fdY:function fdY(d){this.a=d},
fdZ:function fdZ(){},
fe_:function fe_(){},
fia:function fia(){},
fib:function fib(){},
fic:function fic(){},
fkC:function fkC(){},
fps:function fps(d){this.a=d},
fpt:function fpt(d){this.a=d},
cw8:function cw8(d,e){this.a=d
this.b=e},
cw9:function cw9(d,e){this.a=d
this.b=e},
aGg:function aGg(d,e,f){this.a=d
this.b=e
this.c=f},
b7U:function b7U(){this.b=this.a=0},
b7T:function b7T(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bv0:function bv0(){},
wI(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gce()+"/"+w.gcu()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gnc()),2,"0")+":"+B.a.aT(B.o.u(w.gG8()),2,"0")},
hGt(){var w,v=$.ps(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.h_(u)},
arN(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arN=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arN)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f5("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bH),$async$arN)
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
return A.i($async$arN,v)},
arO(d){return C.hGu(d)},
hGu(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arO=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arO)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hE("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,B.cI,null),$async$arO)
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
return A.i($async$arO,v)},
arQ(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$arQ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c3(),$async$arQ)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hGt()
w=4
return A.b(C.arN(),$async$arQ)
case 4:r=h
q=B.a.i(e)
p=B.dJ.aJ(t)
J.aF(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cS.gcz().aJ(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],x.N,x.K))
w=5
return A.b(C.arO(r),$async$arQ)
case 5:u=new A.a_L("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arQ,v)},
arP(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$arP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c3(),$async$arP)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arN(),$async$arP)
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
try{s=B.c9.ca(0,B.cG.aJ(t))}catch(h){r=A.aa(h)
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
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a7().ac())
p.n(q,i,m)}w=5
return A.b(C.arO(q),$async$arP)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arP,v)},
haT(){var w=new A.S(Date.now(),0,!1).a7()
return"wst_"+(1000*w.a+w.b)+"_"+B.cH.aB(999999)},
hGv(d){var w,v,u,t,s,r,q
try{w=A.afY(d)
if(w==null)return d
v=w
if(J.L6(v)>960||J.L5(v)>960){s=v
r=J.L6(v)>=J.L5(v)?960:null
v=A.afX(s,J.L5(v)>J.L6(v)?960:null,B.O2,r)}s=v
u=A.alC(82).SO(s,B.yD)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cfw(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cfw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hGv(e)
$.cfs.n(0,s,t)
u=C.bCu(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfw,v)},
b1A(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1A=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d0(l,"data:image")){u=null
w=1
break}t=4
r=J.f1(l,",")?B.d.gal(J.ls(l,",")):l
q=B.cG.aJ(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.haT()
w=7
return A.b(C.cfw(p,q),$async$b1A)
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
return A.i($async$b1A,v)},
cft(d){var w=0,v=A.j(x.T),u,t,s
var $async$cft=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cfv(s),$async$cft)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcz().aJ(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cft,v)},
a82(d){var w=0,v=A.j(x.H),u,t
var $async$a82=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hnB(d)
if(t==null){w=1
break}$.cfs.W(0,t)
w=3
return A.b(C.bCt(t),$async$a82)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a82,v)},
bCu(d,e){return C.i6J(d,e)},
i6J(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCu=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aN0
w=7
return A.b(n==null?$.aN0=I.fYB():n,$async$bCu)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mI(r,"thumbs","readwrite")
B.iI.mk(J.mG(p,"thumbs"),q,l)
w=8
return A.b(J.pv(p),$async$bCu)
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
return A.i($async$bCu,v)},
bCt(d){return C.i6H(d)},
i6H(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCt=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aN0
w=7
return A.b(o==null?$.aN0=I.fYB():o,$async$bCt)
case 7:r=f
q=J.mI(r,"thumbs","readwrite")
B.iI.FE(J.mG(q,"thumbs"),m)
w=8
return A.b(J.pv(q),$async$bCt)
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
return A.i($async$bCt,v)}},D,Ak,Al,A0,Am,An,Ao,I
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
S=c[102]
T=c[101]
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
Af=c[71]
Ag=c[238]
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
C.anL.prototype={}
C.aXW.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bfw(),f=h.x!=null&&h.yY(i).length===0
if(h.x!=null)w=f?B.aZ:B.bz
else w=h.gTq()?B.bz:B.dU
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.I(D.bf7,B.q,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eMx,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h8,i,i,i),B.S,D.feV,B.at,A.d(C.wI(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.faQ,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b_n,i,i,i,i,B.YH,i,i,i)
q=A.n(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.h_A(h.d)
o=A.p(B.A,C.aXV(A.fy2(h.e,n),30),B.f,i,i,new A.o(B.lK,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.f6g,B.L,i,i)
m=A.n(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.v(A.a([o,B.O,n,B.bD,D.ffc,B.ac,A.p(i,A.v(A.a([D.fuy,B.bD,A.d(A.AC(h.c),i,i,i,i,i,i,D.f1i,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f9,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,p,q,i,i,B.n),i,i,i,i,K.ahn,i,i,i)
p=A.n(16)
m=A.I(B.aL,B.q,1)
l=j.aPT("Original due",C.wI(h.r,!1))
n=j.aPT("Current due",C.wI(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.O,n,B.S,A.p(i,A.d(h.gaK3(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.AX,i,i,1/0),B.S,j.ce8(),B.O,j.c1D(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bm,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fg8,B.at,A.d(q,i,i,i,i,i,i,D.f5y,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bm,i,i,1/0)],s))}if(h.gaER()){q=A.n(14)
o=A.I(B.cr,B.q,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fvQ,B.O,A.bw(A.n(12),A.el(new A.a7(1/0,88,A.b3(i,i,i,new A.VA(h.ax,B.M,D.eQl,!0,3.5,i),B.au),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.F9,i,i,i)],s))}p.push(B.aB)
p.push(D.fo4)
return A.p(i,A.v(A.a([r,new A.D(B.ahq,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aPT(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a7Z,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f2h,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
ce8(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a8P(B.dU,u,"Not paid yet")
w=t.yY(null).length
v=w===0?B.aZ:B.bz
return this.a8P(v,u,C.wI(t.x,!0))},
c1D(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a8P(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a8P(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a7Z,u,u,u)
v=A.U(d).k("M<1,hl>")
v=A.C(new A.M(d,new C.c1j(),v),v.k("ak.E"))
return A.v(A.a([w,B.am,A.bY(B.bA,v,B.bq,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a8P(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a7Z,w,w,w),1),new A.dq(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dM,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.ba2.prototype={
a4(d,e){new A.VA(this.b,B.M,e,!0,3.5,null).a4(d,e)},
au(d){return d.b!==this.b}}
C.anS.prototype={
S(){return new C.aC7(A.a([],x.bp))},
ge1(){return this.c}}
C.aC7.prototype={
a_(){this.a1()
this.Iv()},
Iv(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Iv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1w(t.a.c),$async$Iv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dFz(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Iv,v)},
aRR(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aQ,s=A.l(v,v,u?B.br:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.br:B.bk).j(0.22)
w=A.n(10)
return A.bs(v,new A.b4(4,r,new A.ay(u,1,B.q,-1)),v,B.bm,v,v,v,v,!0,new A.b4(4,w,new A.ay((this.a.d.a?B.br:B.bk).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.n(10),D.aY0),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aRQ(d){return this.aRR(d,null)},
P5(d){return this.chI(d)},
chI(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$P5=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Gs:B.eH
w=7
return A.b(new A.hY().C0(72,900,900,n),$async$P5)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fl(),$async$P5)
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
return A.i($async$P5,v)},
b_p(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aQ,o=A.n(10),n=A.I((q?B.br:B.bk).j(0.18),B.q,1)
if(d)q=B.cY
else q=s.a.d.a?B.br:B.bk
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.az,r,r,r,r,r,r,r,r,12.5,r,r,B.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.br:B.bk
t=x.p
u=A.E(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fx(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cd)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.X(B.cD,s.a.d.a?B.br:B.bk,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cd))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jF,D.bqY,r,r,r)},
D_(d){return this.byM(d)},
byL(){return this.D_(null)},
byM(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D_=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
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
m=A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bo(a4,!0,x.cT)
i=a3?null:A.h_A(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.w5?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hT(B.w.j(0.55),!0,"Dismiss",a4,new C.dFi(),new C.dFj(a2,t,a5,r,new C.dFk(a2,t),o,n,j),B.eG,!0,x.y),$async$D_)
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
break}if(f.length===0||e<=0){t.c.J(x.q).f.U(D.eWH)
w=1
break}a0=a2.d
if(a0==null){t.c.J(x.q).f.U(D.eVm)
w=1
break}a1=A.fy2(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.w5?"male":"female"
w=7
return A.b(A.ahn(a3,A.h7C(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$D_)
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
a3=A.c1(a3.gcj(),a3.gce(),a3.gcu(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcj(),a4.gce(),a4.gcu(),0,0,0,0,0)))a5.cKG(a2.a)
w=8
return A.b(A.ahn(t.a.c,a5),$async$D_)
case 8:case 5:w=9
return A.b(t.Iv(),$async$D_)
case 9:case 1:return A.h(u,v)}})
return A.i($async$D_,v)},
aSt(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aQ
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cY
else s=(this.a.d.a?B.br:B.bk).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aXV(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aQ:B.az
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b8,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ah)},
RM(d){return this.czj(d)},
czj(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$RM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hT(B.w.j(0.55),!0,"Dismiss",s,new C.dFC(),new C.dFD(t,d),B.hy,!0,x.y),$async$RM)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahn(t.a.c,d),$async$RM)
case 7:w=8
return A.b(t.Iv(),$async$RM)
case 8:case 1:return A.h(u,v)}})
return A.i($async$RM,v)},
NK(d,e){return this.bJz(0,e)},
bJz(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l3(s,"Cancel","Delete",e.b+" \xb7 "+A.AC(e.c)+" will be removed from this device.","Delete this debt?"),$async$NK)
case 3:if(!g){w=1
break}w=4
return A.b(C.fs8(t.a.c,e.a),$async$NK)
case 4:w=5
return A.b(t.Iv(),$async$NK)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NK,v)},
ael(d){return this.cbB(d)},
cbB(d){var w=0,v=A.j(x.H),u=this,t
var $async$ael=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bR(B.K,null,new C.dFw(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ael)
case 2:return A.h(null,v)}})
return A.i($async$ael,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e8z
w=J.dH(m.d,new C.dFE())
v=A.C(w,w.$ti.k("J.E"))
w=J.dH(m.d,new C.dFF())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cI(v,0,new C.dFG())
w=A.n(18)
s=m.a.d.a
r=s?D.cof:D.axK
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.q,1)
s=A.p(l,D.bQE,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.av,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.az,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a1,!0,A.n(12),A.aL(!1,A.n(12),!0,D.e7Y,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dFH(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ah)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cvx("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AC(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b5y(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.ahk,l,l,l),B.aB],p)
if(J.cn(m.d)){w=m.a.d.a
s=w?B.e_:B.c
q=A.n(18)
o=A.I((w?B.br:B.bk).j(0.12),B.q,1)
n=A.p(l,D.bLA,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.az,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.at,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bk,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.btn,l,l,1/0))}else{w=m.gch0()
s=A.C(new A.M(v,w,A.U(v).k("M<1,r>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bv1,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.br:B.bk,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.M(u,w,A.U(u).k("M<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b5y(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.I((v.a.d.a?B.br:B.bk).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.br:B.bk,u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aQ:B.az
return A.p(u,A.v(A.a([q,B.bD,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ej,u,u,u)},
cvx(d,e){return this.b5y(!1,d,e)},
ch1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yY(j).length,h=d.beJ()
if(d.x!=null){w=d.yY(j).length
v=w===0?B.cY:B.bz}else if(d.gTq())v=B.bz
else{if(h)w=B.cY
else w=k.a.d.a?B.br:B.bk
v=w}if(d.x!=null){w=d.yY(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wI(u,!1)}else{u.toString
t="Paid "+C.wI(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wI(w,!1)+" \xb7 "+i+" missed":"Due "+C.wI(w,!1)}w=k.a.d.a?B.e_:B.c
u=A.n(18)
if(d.gTq()&&d.x==null)s=B.bz.j(0.35)
else s=(k.a.d.a?B.br:B.bk).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bo:B.lK
o=A.I(d.gTq()&&d.x==null?B.bz.j(0.45):B.cY.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.h_A(d.d)
o=A.p(B.A,A.dd(C.aXV(A.fy2(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.az
m=x.p
n=A.a([new A.dq(1,B.cn,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaER())B.d.v(n,A.a([B.ec,A.X(B.N7,B.cY.j(0.8),j,j,j,14)],m))
p=A.E(A.v(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cV,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.N,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.AC(d.c)
l=k.a.d.a?B.aQ:B.az
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aG(!1,B.a1,!0,j,A.aL(!1,q,!0,new A.D(V.ah4,A.B(A.a([o,B.bd,p,B.ab,A.v(A.a([n,B.bD,A.X(B.ey,(k.a.d.a?B.br:B.bk).j(0.5),j,j,j,18)],m),B.dA,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dFy(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ah),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.da,j,j,j,j)}}
C.ua.prototype={}
C.akd.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bg
u=v?B.F:B.m
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.q,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aD(a0,A.p(a0,A.X(B.cD,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a7))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iX,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.au9,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Fr,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f6(m,A.B(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eh)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bqb,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cF:B.bn,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fr,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eR6)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vo,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lk,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hm,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.brn,a0,a0,a0,a0)}}
C.aTJ.prototype={
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
return new A.D(B.da,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.So.prototype={
S(){return new C.bdF()}}
C.bdF.prototype={
gbXE(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e8u,D.e8A],l)
for(w=0;w<8;++w){v=D.a1F[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Gd:B.BF
q=t===s
r=A.X(r,q?B.eA:B.c2,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.y(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bC(1,B.bh,new A.y(v.c,n,A1.De,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aT(24,24)
p=new A.ay(B.eA,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bp(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aD(n,new A.D(B.eB,A.v(A.a([new A.D(B.mr,new A.cm(B.aO,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DL(!0,new C.akd(v,q.d,q.e,new C.d5n(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d5o(o,v),n,n,n,n,n,n,!1,B.a7))}k.push(new A.D(D.brG,A.bG(D.fB8,new C.d5p(o,d),A.bn(B.b6,n,n,n,n,B.oj,n,n,new A.b7(A.n(16),B.Y),n,n,n)),n))
return A.bl(!0,new A.cT(new A.aY(0,1/0,0,m.a.b*0.9),A.cw(k,n,D.bvT,n,n,B.ag,!0),n),!0,!1,B.af,!0,!0)}}
C.nc.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a7().ac()],x.N,x.z)},
bbl(d,e,f){return new C.nc(this.a,e,d,f)}}
C.Hm.prototype={
wg(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hm(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aD5(d){var w=null
return this.wg(w,w,w,w,w,d,w,w,w,w,w,w)},
cGu(d){var w=null
return this.wg(w,w,w,w,d,w,w,w,w,w,w,w)},
bbj(d,e,f){var w=null
return this.wg(d,w,w,w,w,w,w,w,e,w,f,w)},
cH8(d){var w=null
return this.wg(w,w,w,w,w,w,d,w,w,w,w,w)},
cHh(d){var w=null
return this.wg(w,w,w,w,w,w,w,w,w,d,w,w)},
cGs(d){var w=null
return this.wg(w,w,w,d,w,w,w,w,w,w,w,w)},
cHj(d){var w=null
return this.wg(w,w,w,w,w,w,w,w,w,w,w,d)},
cGp(d){var w=null
return this.wg(w,w,d,w,w,w,w,w,w,w,w,w)},
cGk(d){var w=null
return this.wg(w,d,w,w,w,w,w,w,w,w,w,w)},
Fx(d){var w=null
return this.wg(w,w,w,w,w,w,w,d,w,w,w,w)},
cHr(d,e,f,g,h,i,j,k,l,m,n){return this.wg(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cE6(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bN8(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Cm.gee(D.Cm))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a3h)
q=l.$2("frame",D.a2F)
l=l.$2("texture",D.a2A)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cHr(p,u,t,q,r,A.qM(d.h(0,"ribbon"))?A.FT(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.YV.prototype={
S(){return new C.azb(A.a([],x.I),D.MG)},
ge1(){return this.c}}
C.azb.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zq(0,1)
w=$.aw()
v.z=new A.as(B.as,w)
v.Q=new A.as(B.as,w)
v.kU()
w=v.a
C.bAS(w.c,w.d).bB(new C.d63(v),x.fL)},
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
kU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KA(s.c,s.d),$async$kU)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d5S(t,r))
t.auU()
case 1:return A.h(u,v)}})
return A.i($async$kU,v)},
garw(){var w,v=this
if(!J.cn(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
auU(){var w,v,u=this.garw(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
ca1(d){this.m(new C.d5P(this,d))
this.auU()},
N5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$N5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nc(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aPT(r.c,r.d,s),$async$N5)
case 3:w=4
return A.b(t.kU(),$async$N5)
case 4:if(t.c==null||J.cn(t.d)){w=1
break}q=J.qe(t.d,new C.d5q(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d5r(t,p))
t.auU()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B1(p+1,B.ct,B.kS),$async$N5)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$N5,v)},
AH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.garw()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aPT(o.c,o.d,new C.nc(s,r,q,new A.S(p,0,!1))),$async$AH)
case 3:w=4
return A.b(t.kU(),$async$AH)
case 4:if(t.c==null){w=1
break}t.m(new C.d5T(t))
case 1:return A.h(u,v)}})
return A.i($async$AH,v)},
NL(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.garw()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.d5z(r),s,null,!0,!0,x.y),$async$NL)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAD(s.c,s.d,r.a),$async$NL)
case 4:t.m(new C.d5A(t))
w=5
return A.b(t.kU(),$async$NL)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Tt(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$NL,v)},
yh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AH(),$async$yh)
case 5:case 4:if(t.c==null){w=1
break}w=J.cz(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.QE(s,r.r,o,p,q),$async$yh)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.ho4(s,r.x,r.r),$async$yh)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KA(s.c,s.d),$async$yh)
case 10:l=e
for(s=n.d,r=J.cG(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.L(l,new C.nc(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AM(r.c,r.d,l),$async$yh)
case 11:w=12
return A.b(t.kU(),$async$yh)
case 12:r=t.c
if(r==null){w=1
break}r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yh,v)},
a03(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a03=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AH(),$async$a03)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyf(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.yK,new C.d5Q(t),new C.d5R())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mt("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gR(o)
p.push(new F.mt(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h1b(o,new F.rh(s,r,"",p,new F.ut(q.d,null,null,null,null,"","","")),null),$async$a03)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a03,v)},
Nt(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Nt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AH(),$async$Nt)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bR(D.acH,null,new C.d5v(t),s,!0,!0,!0,P.a6c,!1,!1,x.N),$async$Nt)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cGu(r)
t.m(new C.d5w(t,q))
s=t.a
w=7
return A.b(C.Rc(s.c,s.d,q),$async$Nt)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nt,v)},
WC(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(D.acH,null,new C.d5B(t),r,!0,!0,!0,P.a6c,!1,!1,x.e),$async$WC)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d5C(t,s))
r=t.a
w=4
return A.b(C.Rc(r.c,r.d,s),$async$WC)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B1(0,B.dV,B.oJ)
case 1:return A.h(u,v)}})
return A.i($async$WC,v)},
bOP(d){var w=d.bT(),v=B.a.aT(B.o.u(w.gce()),2,"0"),u=B.a.aT(B.o.u(w.gcu()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gyf(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bWS()
if(r.e)w=D.abw
else if(J.cn(r.d)){w=r.y
v=r.gyf(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f0L,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A_.ail,new C.Yd(w,v,0,q),q),q),B.by,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.km.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.by],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aD(q,A.p(q,D.eMk,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dQ.j(0.45),B.J,18)],x.V),E.vW,B.n),q,q,q,q,B.YR,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcDd(),q,q,q,q,q,q,!1,B.a7))
w.push(B.S)
w.push(A.hh(D.bHP,D.fAC,r.gaLN(),q))
B.d.v(u,w)}w=A.av(A.c9(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.ex,q,q,B.ag),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.km.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.N,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dR:B.A7
u=A.v(A.a([new A.D(D.bsH,w,q),A.E(A.IH(v,new C.d61(r),J.ad(r.d)+1,q,r.gca0(),u,B.aO),1),r.bBF()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c7(q,D.ae1,new A.an(B.W,q,B.b0,B.r,A.a([D.aKX,A.bl(!0,A.v(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bWS(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cz(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JG(B.dX,"AI",h.gbzy(),!0))
if(h.a.f)f.push(new C.JG(B.ni,"Cover",h.gbK8(),!1))
if(h.a.f)f.push(new C.JG(B.yn,"Header",h.gbF6(),!1))
if(J.cz(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JG(B.u2,"Print",h.gcj1(),!1))
if(h.a.f&&J.cz(h.d)&&h.r>=0){v=h.w
u=v?B.hn:B.jn
t=v?"Save":"Edit"
f.push(new C.JG(u,t,v?h.gcph():new C.d5M(h),!1))}if(h.a.f)f.push(new C.JG(B.hA,"Add page",h.gaLN(),!1))
v=C.hkh(h.y.Q)
u=h.gyf(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dpv
else{k=new A.aT(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jV.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.km,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bp(k,k,k,k),g,new A.a8(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.km.j(0.85)
p.push(new A.bC(1,B.bh,A.aD(B.c7,A.v(A.a([k,B.bD,new A.y(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a7),g))}return new C.akd(v,u,t+" \xb7 "+s+" "+r,new C.d5N(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AH(),$async$zK)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=F.a1L(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.d5s(t,p),s,null,!0,!0,x.N),$async$zK)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yh(),$async$zK)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DA(),$async$zK)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fa("Swahili (Kiswahili)",!0),$async$zK)
case 18:w=16
break
case 17:w=19
return A.b(t.czX(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zK)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zK,v)},
Yv(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.I(E.jV.j(0.3),B.q,1),r=x.p
return new A.D(B.cB,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vW,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.v(A.a([A.d(f,w,w,w,w,w,w,A9.Tx,w,w,w),A.d(g,w,w,w,w,w,w,A3.Tr,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d5O(d,h),w,w,w,w,w,w,w),w)},
DA(){return this.bOj()},
bOj(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DA=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.d5F(r),a7,null,!0,!0,x.ei),$async$DA)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eS("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cb(null,null,!1,null,new C.d5G(o),a7,null,!0,!0,x.H).fh(new C.d5H(a6))
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
return A.b(C.agw(a0,a7,new C.d5I(o),d,l,e,j),$async$DA)
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
l.shX($.aw())
J.aQj(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.J(x.q).f
j=n
l.U(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gco(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bbl(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AM(j.c,j.d,l),$async$DA)
case 11:w=12
return A.b(r.kU(),$async$DA)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yK[a1].a)
a5=l.cE6(j,12,a7)
l=r.a
w=15
return A.b(C.Rc(l.c,l.d,a5),$async$DA)
case 15:if(r.c!=null)r.m(new C.d5J(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B1(0,B.dV,B.oJ)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.J(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b2(a3?A.cqB("Undo",new C.d5K(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ee,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DA,v)},
Fa(d,e){return this.czY(d,e)},
czX(d){return this.Fa(d,!1)},
czY(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fa=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eS("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cb(null,null,!1,null,new C.d5V(a0),k,null,!0,!0,x.H).fh(new C.d5W(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.ci(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1Y(m,new C.d5X(a0)),$async$Fa)
case 10:w=8
break
case 9:w=11
return A.b(C.bCl(new C.d5Y(a0),m,a2),$async$Fa)
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
o.shX($.aw())
J.aQj(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.J(x.q).f
k=q
o.U(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bbl(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AM(k.c,k.d,o),$async$Fa)
case 12:w=13
return A.b(r.kU(),$async$Fa)
case 13:o=r.c
if(o==null){w=1
break}o=o.J(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(A.cqB("Undo",new C.d5Z(r,d),null),null,null,null,null,B.r,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fa,v)},
bBF(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d5t(v):u
r=A.aH(u,u,u,u,A.X(D.bDu,s?D.km:B.b2,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cz(v.d)&&!v.w&&v.r>=0)s=A.hh(A.X(B.vA,B.EO,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.EO,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbJI(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.km.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.av(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d5u(v):u
return A.bl(!0,new A.D(D.bsv,A.B(A.a([r,s,A.aH(u,u,u,u,A.X(B.ey,t<J.ad(v.d)?D.km:B.b2,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.YZ.prototype={
S(){return new C.be_(new A.as(B.as,$.aw()))}}
C.be_.prototype={
ga1b(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
gbN2(){var w,v=this.ga1b()
A:{if("cover"===v){w=D.cUs
break A}if("book"===v){w=D.cQi
break A}w=D.di0
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.n(26),o=E.jV.j(0.5),n=x.p,m=A.B(A.a([D.dpw,B.av,D.bxU,A.aH(q,q,q,q,B.lr,q,q,q,new C.d7O(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j8(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d7P(r),r.ga1b()==="page",q,q,q,q))
if(r.a.d)l.push(A.j8(q,q,q,D.fvm,q,new C.d7Q(r),r.ga1b()==="book",q,q,q,q))
l.push(A.j8(q,q,q,D.fiK,q,new C.d7R(r),r.ga1b()==="cover",q,q,q,q))
l=A.bY(B.bA,l,B.bq,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.T,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b4(4,A.n(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kH,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dn,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbN2(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mJ(q,B.c.j(0.08),new A.y(s,q,B.IX,q,q,q,q,q,q,q,q,q),B.hE,new C.d7S(r,s),q,q,q,q))}return A.eJ(q,E.AD,A.c9(A.v(A.a([m,B.S,D.fyz,B.am,l,B.ac,k,B.O,A.bY(B.bA,w,B.bq,6,6),B.aB,A.dn(D.bHM,D.fzl,new C.d7T(r,d),A.bn(B.b6,q,q,q,q,B.oj,q,q,new A.b7(A.n(16),B.Y),q,q,q)),B.at,D.ftE],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fB,q,q,B.ag),q,q,q,D.ai3,B.d0,q,new A.b7(p,new A.ay(o,1.4,B.q,-1)),q)}}
C.YX.prototype={
S(){return new C.azc(A.a([],x.Y))},
ge1(){return this.c}}
C.aei.prototype={}
C.azc.prototype={
a_(){this.a1()
this.kU()},
kU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QH(p.c,p.d),$async$kU)
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
return A.b(C.bAS(r.c,q),$async$kU)
case 6:j=e
i=J
w=7
return A.b(C.KA(t.a.c,q),$async$kU)
case 7:m.push(new l.aei(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d6i(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kU,v)},
b6J(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
PM(d,e){return this.cbz(0,e)},
cbz(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$PM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cl(A.e8(new C.d6h(u,e),!0,null,x.y)),$async$PM)
case 2:t=g
w=3
return A.b(u.kU(),$async$PM)
case 3:if(t===!0&&u.c!=null)u.c.J(x.q).f.U(D.aOo)
return A.h(null,v)}})
return A.i($async$PM,v)},
Fd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.J(x.q).f.U(D.aOk)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afQ(s.c,s.d),$async$Fd)
case 5:q=e
w=6
return A.b(t.kU(),$async$Fd)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.PM(0,B.d.hr(t.d,new C.d6m(q))),$async$Fd)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QE(p,s.f,r,n,o),$async$Fd)
case 10:m=e
w=11
return A.b(t.kU(),$async$Fd)
case 11:if(m&&t.c!=null)t.c.J(x.q).f.U(D.aOo)
case 1:return A.h(u,v)}})
return A.i($async$Fd,v)},
Pg(d,e){return this.cn_(0,e)},
cn_(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.d6l(t,e),s,null,!0,!0,x.y),$async$Pg)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2a(s.c,s.d,e.a),$async$Pg)
case 4:w=5
return A.b(t.kU(),$async$Pg)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pg,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bBI(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.I(E.jV.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aD(n,new A.fH(0.7142857142857143,A.p(n,A.v(A.a([D.dpx,B.ac,D.e7D,B.at,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.km.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b8,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcD9(),n,n,n,n,n,n,!1,B.a7))}w=A.n(22)
v=A.I(E.jV.j(0.85),B.q,1.6)
s=A.aD(n,A.p(n,D.bPs,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jV.j(0.6),B.q,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d6n(d),n,n,n,n,n,n,!1,B.a7)
r=A.n(14)
q=B.w.j(0.3)
p=A.I(E.jV.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.bd,D.byg,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.f_Q,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h8,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bVb,B.n),n,n,n,Am.M9,D.bqD,n,n,n)
if(o.e)k=D.abw
else k=k.length===0?D.b4p:A.cq(new C.d6o(k))
return A.c7(n,D.ae1,new A.an(B.W,n,B.b0,B.r,A.a([D.aKX,A.bl(!0,A.v(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bBI(d){var w,v,u=this,t=null,s=u.b6J(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.f6(B.A,new A.a7(300,420,new C.Yd(d.b,s,r,t),t),B.f,B.du),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aD(t,A.p(t,D.bOL,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b2,B.q,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d6f(u,d),t,t,t,t,t,t,!1,B.a7),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.f_q,t,t,t)
v=r===1?"page":"pages"
return A.aD(t,A.v(A.a([new A.fH(0.7142857142857143,new A.an(B.W,t,B.aa,B.r,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.km.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d6g(u,d),t,t,t,t,t,t,!1,B.a7)}}
C.JG.prototype={}
C.Yd.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.yK,new C.cET(m),new C.cEU()),j=m.c,i=D.Cm.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lZ:B.b8
v=new C.cEV(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e4X,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b3(l,l,l,new C.bbf(j.x,h,l),B.au),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aT(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bp(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aim,8,0.85,2.2),v.$4(D.bvk,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aim,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.D(D.bvg,A.b3(l,l,l,new C.bb6(h,l),B.au),l),0,0,0))
r=A.X(D.awO[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.au9,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cF,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aP,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.D(D.bvL,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aGb(l),D.eQe),l,l,l,46,0,l))
return A.p(l,A.bw(D.aac,new A.an(B.W,l,B.aa,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aac,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbf.prototype={
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
k=h.gbM().a.snapshot()
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
au(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bb6.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bQ
for(w=e.a,v=e.b,v=[D.eHl,new A.cC([w,0,-1,1]),new A.cC([0,v,1,-1]),new A.cC([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
s=n.gbM().a.snapshot()
w.drawPath((n.e=new A.cE(s)).a,m)
m.delete()
s=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
au(d){return!d.b.A(0,this.b)}}
C.ub.prototype={}
C.Yv.prototype={
S(){return new C.bbd()}}
C.bbd.prototype={
go4(){var w=this.d
return w===$?this.d=this.a.c:w},
gyf(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.bb(w.b,B.b5,B.aN),$.aw())}return v},
gaAi(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.bb(w.c,B.b5,B.aN),$.aw())}return v},
gaq4(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.bb(w.y,B.b5,B.aN),$.aw())}return v},
q(){var w=this,v=w.gyf(0),u=v.T$=$.aw()
v.P$=0
v=w.gaAi()
v.T$=u
v.P$=0
v=w.gaq4()
v.T$=u
v.P$=0
w.a2()},
aqH(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j8(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cYk(this,f,u),e===u,s,s,s,s))}return A.bY(B.bA,r,B.bq,6,8)},
awl(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b4(4,A.n(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.kG,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go4(),a0=f.gyf(0),a1=a0.a.a,a2=f.gaAi(),a3=a2.a.a,a4=f.gaq4(),a5=d.bbj(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a7(190,260,A.f6(B.A,new A.a7(270,370,new C.Yd(a5,d,f.a.e,e),e),B.f,B.du),e),e,e,e)
a0=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.awl("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYJ(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.awl("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYK(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yK[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b2
q=r.a===q
o=new A.ay(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aD(e,A.v(A.a([p,B.cV,new A.y(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.N,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYL(f,t),e,e,e,e,e,e,!1,B.a7))}v=A.bY(B.bA,v,B.bq,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aT(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eA:B.K,2,B.q,-1)
q.push(A.aD(e,A.p(e,A.X(D.awO[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bp(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYM(f,n),e,e,e,e,e,e,!1,B.a7))}q=A.bY(B.bA,q,B.bq,8,8)
a4=A.aM(e,B.T,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.awl("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cYN(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dn,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mM,e,e,e)
m=A.a([],w)
for(l=D.Cm.gdL(D.Cm),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eA:B.b2
g=r.e===i
o=new A.ay(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aD(e,A.v(A.a([j,B.bD,new A.y(i,e,new A.G(!0,h,e,e,e,e,10,B.N,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cYO(f,k),e,e,e,e,e,e,!1,B.a7))}m=A.bY(B.bA,m,B.bq,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mM,e,e,e)
k=f.go4()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bl(!0,new A.cT(new A.aY(0,1/0,0,a1.a.b*0.92),A.cw(A.a([D.ft7,B.ac,d,B.aP,a0,B.S,a2,B.aB,D.fz8,B.O,v,B.aB,D.ftg,B.O,q,B.aB,a4,B.aB,p,B.O,m,B.aB,l,A.kZ(e,9,""+B.k.V(f.go4().f),36,18,new C.cYP(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mM,e,e,e),B.am,f.aqH(D.a3h,f.go4().r,new C.cYQ(f),D.dla),B.ac,A.d("BORDER",e,e,e,e,e,e,H.mM,e,e,e),B.am,f.aqH(D.a2F,f.go4().w,new C.cYR(f),D.dlf),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mM,e,e,e),B.am,f.aqH(D.a2A,f.go4().x,new C.cYT(f),D.dmG),B.am,A.iG(e,B.b6,e,B.af,e,new C.cYU(f),e,e,e,D.fnC,f.go4().z),B.by,A.bG(D.frY,new C.cYV(f,a6),A.bn(B.b6,e,e,e,e,B.oj,e,e,new A.b7(A.n(16),B.Y),e,e,e))],w),e,An.Ml,e,e,B.ag,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aGb.prototype={
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
u.saq(D.bVR.av(0,new A.a9(0,0,0+w,0+v)))
d.aP(t,u)},
au(d){return!1}}
C.bgt.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.saq(D.bUS.av(0,new A.a9(0,0,a3,a4)))
a5.aZ(new A.a9(0,0,a3,a4),w)
v=B.k.dw(a2/112)
u=new A.eM()
u.dC(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.cUr[u.aB(9)]
j=u.aB(14)
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
g.saq(new A.a8(B.a3,B.a8,B.x,A.a([f,k,e],t),a0,a0).av(0,i))
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
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.saq(D.bUe.av(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c_(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jr
d=p.H()
w.drawRect(A.c_(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b7S.j(0.72).gp(0)
a5.aZ(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.saq(new A.bT(B.A,0.5,B.x,a0,0,A.a([D.beI.j(0.22),B.K],t),a0,a0).av(0,A.bU(new A.u(w,a2),a1)))
a5.af(new A.u(w,a2),a1,a4)},
au(d){return!1}}
C.b9r.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kP(new A.o(A.aq(D.km,D.bj8,w/4),o,new A.bO(B.Y,new A.ay(B.w.j(0.12),1,B.q,-1),B.Y,B.Y),B.K6,o,o,B.n),B.be,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aGB,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aT(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jV.j(0.6),o,o,new A.bp(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.q8,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aXK,u,D.bVP,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dm,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aGb(o),D.eQ9),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTJ(p.y,r,G.iw,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iw.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fd7,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iw.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.ez,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iw.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.f4j,!0,B.a4,B.zx,B.an,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fd_,o,o,o),B.at,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iw.j(0.5),o,o,o,o,o,o,o,o,11,B.cF,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.B(A.a([A.E(A.p(o,o,B.f,D.EC.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fr,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.EC.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.EC.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iw.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Xu(A.d7(A.a([A.d7(o,o,o,o,o,o,o,o,o,D.f7p,B.a.ap(k,0,1)),A.d7(o,o,o,o,o,o,o,o,o,o,B.a.b4(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iw.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.c9(A.v(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ag)}s.push(A.E(n,1))
s.push(new A.D(B.i0,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iw.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bw(B.K6,new A.an(B.W,o,B.aa,B.r,A.a([t,new A.D(D.buO,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.c0(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.be),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.K6,v,D.bWl,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.r,l,o)}}
C.ap_.prototype={
S(){return new C.aCI(A.a([],x._))},
br(){return this.r.$0()},
pR(){return this.w.$0()},
ge1(){return this.c}}
C.aCI.prototype={
a_(){var w,v
this.a1()
this.vN()
w=this.a
v=w.c
if(v.length!==0)C.a6L(v,w.e,w.d.w)},
vC(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h1e(r,t.e,!1,s.w,new C.dTy(u),null,s),$async$vC)
case 2:w=3
return A.b(u.vN(),$async$vC)
case 3:return A.h(null,v)}})
return A.i($async$vC,v)},
a_d(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h1e(r,t.e,!0,s.w,new C.dTx(u),null,s),$async$a_d)
case 2:w=3
return A.b(u.vN(),$async$a_d)
case 3:return A.h(null,v)}})
return A.i($async$a_d,v)},
vN(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vN=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AA(q.a.c),$async$vN)
case 7:p=e
if(q.c!=null)n=q.e||J.cz(p)
else n=!1
if(n)q.m(new C.dTA(q,p))
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
return A.b(C.Gj(q.a.c).cO(0,B.pN),$async$vN)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dTB(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dTC(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vN,v)},
Of(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Of=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.J(s).f.U(D.eTM)
w=3
return A.b(C.Gj(t.a.c),$async$Of)
case 3:r=e
w=4
return A.b(C.fHP(t.a.c,r),$async$Of)
case 4:q=e
w=5
return A.b(C.Gj(t.a.c),$async$Of)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dTw(t,p))
o=t.c.J(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(null,null,null,q?B.dy:B.cR,null,B.r,null,s,null,B.mo,null,null,null,null,null,null,null,null,null,null))
t.a.pR()
case 1:return A.h(u,v)}})
return A.i($async$Of,v)},
HK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i8M(l),$async$HK)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hDe(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZl(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HK)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hkr(r)
o=Date.now()
n=t.a.c
m=new C.kD(l,r.toUpperCase(),p,!0,B.T,D.Ca,new A.S(o,0,!1),0,n,D.tO)
w=5
return A.b(C.a2g(n,m),$async$HK)
case 5:w=6
return A.b(t.vN(),$async$HK)
case 6:t.a.br()
t.a.pR()
if(t.c==null){w=1
break}t.En(m)
case 1:return A.h(u,v)}})
return A.i($async$HK,v)},
En(d){return this.cdB(d)},
cdB(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$En=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AA(u.a.c),$async$En)
case 2:n=l.rd(k.dH(f,new C.dTz(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hy(m,new C.aoU(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$En)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2g(u.a.c,o),$async$En)
case 6:case 5:w=7
return A.b(u.vN(),$async$En)
case 7:u.a.pR()
return A.h(null,v)}})
return A.i($async$En,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tJ(p)
if(r.e)return A.av(A.mK(q,p?B.br:B.bk,q,q,q,q,q,q,q,q),q,q,q)
if(J.cn(r.d)){w=p?B.e_:B.c
v=A.n(15)
u=A.aG(!1,B.a1,!0,q,A.aL(!1,q,!0,A.p(q,D.bIR,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gccF(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fl(A.p(q,A.v(A.a([u,B.aP,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bk,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dY,A.bG(D.fAn,r.gaPP(),A.bn(B.bU,q,q,q,q,q,Al.YU,q,new A.b7(A.n(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.buK,q,q,1/0),15,B.af,1.05,D.a8T,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b7],v)
if(J.cz(r.d))w.push(A.aH(q,q,q,q,A.X(B.yu,B.aV,q,q,q,q),q,q,q,new C.dTE(r),q,q,q,q,"Sync family trees with database",q))
if(J.cz(r.d))w.push(A.aH(q,q,q,q,A.X(B.yl,B.aV,q,q,q,q),q,q,q,r.gaf0(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.ant,D.fgy,r.gaPP(),A.bn(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fl(r.cA2(J.q(r.d,s),o),14,B.af,1,D.a8T,q))
B.d.v(w,u)}return A.v(A.a([p,B.aB,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cA2(d,e){var w=null,v=e.a,u=v?B.e_:B.c,t=A.n(14),s=A.I((v?B.e1:B.bN).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.em,10)],x.V),q=A.n(14),p=A.p(w,D.bHV,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.ganY(),m=d.d?"":" \xb7 Public",l=d.y===D.kt?" \xb7 View only":"",k=x.p
l=A.E(A.v(A.a([o,B.bD,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aG(!1,B.a1,!0,w,A.aL(!1,q,!0,new A.D(B.bB,A.B(A.a([p,B.bd,l,A.X(B.MS,v?B.br:B.bk,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dTD(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aoU.prototype={
S(){return new C.aCF(A.a([],x._),A.aX(x.N),A.b74())},
br(){return this.r.$0()},
ge1(){return this.c}}
C.aCF.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.abT()
w=u.a
v=w.c
if(v.length!==0)C.a6L(v,w.e,w.d.w)},
q(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a2()},
a28(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a28=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xI("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dSZ(r),s,null,!0,!0,x.y),$async$a28)
case 3:if(e!==!0||t.c==null){w=1
break}t.Je()
t.m(new C.dT_(t,r))
w=4
return A.b(t.vE(),$async$a28)
case 4:t.a.br()
t.xI(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a28,v)},
cpW(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.dSU(w,f,d,e))},
aS5(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.ea(w,v,0,1)
u.jI(q,q,1,1)
this.w.sp(0,u)},
b8Y(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eG(new Float64Array(16))
q.e2(r)
w=q.Cv()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.ea(r,u,0,1)
t.jI(v,v,1,1)
t.ea(-r,-u,0,1)
t.iB(0,q)
s.sp(0,t)},
abT(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$abT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AA(u.a.c),$async$abT)
case 2:t=s.rd(r.dH(e,new C.dSs(u)))
if(t!=null&&u.c!=null)u.m(new C.dSt(u,t))
return A.h(null,v)}})
return A.i($async$abT,v)},
xI(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vC(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h1e(o,t,!1,r,new C.dSH(u),q.a,s),$async$vC)
case 2:n=A
m=J
w=3
return A.b(C.Gj(u.a.c),$async$vC)
case 3:p=n.rd(m.dH(e,new C.dSI(u)))
if(p!=null&&u.c!=null)u.m(new C.dSJ(u,p))
return A.h(null,v)}})
return A.i($async$vC,v)},
Je(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cw(w,0)},
vE(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2g(t,s),$async$vE)
case 2:return A.h(null,v)}})
return A.i($async$vE,v)},
a0J(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tV(q,t.a.c)){t.xI("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i9V(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0J)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Je()
t.m(new C.dST(t,r))
w=4
return A.b(t.vE(),$async$a0J)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0J,v)},
a_r(){return this.cdD()},
cdD(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_r=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tV(q,t.a.c)){t.xI("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dSR(r,new C.tJ(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_r)
case 3:if(e!==!0||t.c==null){w=1
break}t.Je()
t.m(new C.dSS(r,t))
w=4
return A.b(t.vE(),$async$a_r)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_r,v)},
Vs(d){return this.byJ(d)},
byJ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tV(r,t.a.c)){t.xI("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dSg(t,d),r,null,!0,!0,x.P),$async$Vs)
case 3:s=f
if(s==null){w=1
break}t.Je()
t.m(new C.dSh(t,s))
w=4
return A.b(t.vE(),$async$Vs)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vs,v)},
a2u(d){return this.cCa(d)},
cCa(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cb(null,null,!0,null,new C.dT1(u,d,new C.tJ(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2u)
case 2:return A.h(null,v)}})
return A.i($async$a2u,v)},
c9W(d){var w=this,v=w.d
v===$&&A.c()
if(C.tV(v,w.a.c))w.NV(d)
else w.a2u(d)},
ahu(d,e){return this.ctU(d,e)},
ctU(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cb(null,null,!0,null,new C.dSW(new C.tJ(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahu)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahu,v)},
HP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kt?3:5
break
case 3:w=6
return A.b(C.fQ4(t.a.c),$async$HP)
case 6:s=e
o=t.a
r=C.h9_(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahu(!s,!r),$async$HP)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bAK(o,t.a.c)){t.xI("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l3(o,"Cancel","Remove",q.y===D.kt?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HP)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOg(t.a.c,t.d.a),$async$HP)
case 11:t.a.br()
o=t.c
if(o==null){w=1
break}A.iQ(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HP,v)},
a9r(d){return this.bJQ(d)},
bJQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tV(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b5(s,new C.dSi(p))){o=A.U(s)
p.a=A.rd(new A.cQ(new A.a_(s,new C.dSj(d),o.k("a_<1>")),new C.dSk(),o.k("cQ<1,m>")))}q=p.a
if(q==null)q=d.d
t.Je()
t.m(new C.dSl(t,s,d,q))
w=3
return A.b(t.vE(),$async$a9r)
case 3:t.xI(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9r,v)},
NV(d){return this.bLY(d)},
bLY(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tV(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2u(d),$async$NV)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cb(null,null,!0,null,new C.dSp(t,d),r,null,!0,!0,x.P),$async$NV)
case 6:s=f
if(s==null){w=1
break}t.Je()
t.m(new C.dSq(t,s))
w=7
return A.b(t.vE(),$async$NV)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NV,v)},
cAo(){var w=this,v=w.d
v===$&&A.c()
if(!C.tV(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dT0(w))
w.vE()},
Yh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bAK(n,t.a.c)){t.xI("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.as(B.as,s)
q=t.d.e
p=A.bo(new A.M(q,t.gc8p(),A.U(q).k("M<1,m>")).c_(0,new C.dSC()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dSD(t,new C.tJ(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Yh)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Je()
t.m(new C.dSE(t,p))
w=4
return A.b(t.vE(),$async$Yh)
case 4:t.xI("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Yh,v)},
c8q(d){return B.a.i(d.toLowerCase())},
ccq(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tV(v,w)
t=r.d
s=C.i_a(t)
C.i8Q(q,t.b,u,C.i_9(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tJ(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a_(l,new C.dT8(),A.U(l).k("a_<1>")).gM(0)
l=n?B.bY:B.iv
v=A.X(B.a_4,n?B.br:B.bk,o,o,o,18)
u=x.p
v=A.a([new A.D(B.B0,A.aL(!1,o,!0,new A.D(B.hM,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bk,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dT9(p,d),o,o,o,o,o,o,o),o),new A.D(B.nd,p.bWT(m),o)],u)
if(p.d.y===D.kt){t=B.rt.j(0.15)
s=A.n(12)
r=A.I(B.rt.j(0.45),B.q,1)
q=C.Gh(p.d,p.a.c)
v.push(new A.D(B.xG,A.p(o,A.B(A.a([D.bN8,B.av,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iC,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b7],u)
if(C.tV(p.d,p.a.c)&&p.e.length!==0)u.push(new C.JC("Undo",B.rh,p.gcAn(),m,o,o))
u.push(new C.JC("Family Book",D.bCA,p.gccp(),m,B.ti,o))
if(C.tV(p.d,p.a.c))u.push(new C.JC("Display settings",B.BL,p.gcdC(),m,B.aZ,o))
u.push(new C.JC("Sync",B.yl,p.gaf0(),m,o,o))
t=p.d
if(t.y===D.kt||C.bAK(t,p.a.c)){t=p.d.y===D.kt?"Remove shared tree":"Delete tree"
u.push(new C.JC(t,B.e6,p.gbK_(),m,B.h_,o))}if(C.tV(p.d,p.a.c))u.push(new C.JC("Add member",B.vM,new C.dTa(p),m,B.bU,o))
v.push(new A.D(A0.ahx,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.ganY()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bk,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cq(new C.dTb(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a_8:X.MT,o,o,o,o,o)
v.push(A.av(A.hh(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dTc(p),o),o,o,o))}return A.c7(o,l,A.bl(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bWT(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fx.j(0.35),B.dm,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.X(B.ye,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a1,!0,m,A.aL(!1,m,!0,A.p(m,D.bQc,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaf0(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f2G,m,m,m)
r=r.ganY()
p=n.d.ganY()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.v(A.a([q,B.bD,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a5,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tV(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bNk,m,m,m,n.gcnk(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jo:B.mw
r=r?"Private":"Public"
r=A.E(n.aui(q,"Privacy",r,n.a.d.w?n.gczn():m),1)
q=A.E(n.aui(B.ym,"Tree code",n.d.c,new C.dSr(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.aui(D.bEj,"Collaborators",p,n.gc0s()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kt){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aG(!1,B.a1,!0,A.n(999),A.aL(!1,A.n(999),!0,new A.D(B.fJ,A.B(A.a([A.X(B.oT,B.c,m,m,m,14),B.ec,A.d("View only",m,m,m,m,m,m,B.aPB,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ah)],o))}return A.p(m,A.bw(u,new A.an(B.W,m,B.aa,B.r,A.a([t,new A.D(B.Fd,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bUj,B.n),m,m,m,m,m,m,m,1/0)},
aui(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a1,!0,A.n(14),A.aL(!1,A.n(14),!0,new A.D(L.aiG,A.v(A.a([A.X(d,B.c,w,w,w,18),B.at,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uI,A.d(f,w,1,B.a2,w,w,w,O.zB,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)}}
C.bdI.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bI
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bdL(s,t),new A.ar(w,v))],x.p)
r=r.gdL(r)
B.d.v(u,r.dt(r,new C.d6s(this),x.l))
r=s.c
B.d.v(u,new A.M(r,new C.d6t(this),A.U(r).k("M<1,r>")))
return new A.D(B.tL,new A.a7(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.JO.prototype={}
C.Fy.prototype={}
C.bdK.prototype={
gbhr(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIh.prototype={}
C.bdL.prototype={
bLD(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
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
bLB(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b2(a0,new C.d6N())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b5(a0,new C.d6O(f))
t=new A.M(a0,new C.d6P(f),A.U(a0).k("M<1,K>")).c_(0,new C.d6Q()).cI(0,1/0,B.v1)
w=f.a
d.bE(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lW(m)
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
n=g.gbM().a.snapshot()
r.drawPath((g.e=new A.cE(n)).a,k)
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
if(r!=null&&r.length!==0)this.bLB(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bLD(d,w,q.a,q.b)}},
au(d){return d.b!==this.b}}
C.bhq.prototype={
gc6e(){var w=this.c
if(B.a.i(w.y).length!==0)return D.di_
switch(w.c.a){case 0:return D.cM9
case 1:return D.cXg
case 2:return D.dco}},
gc6h(){var w=this.c,v=C.hjM(w.w),u=C.hjM(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc6e(),p=t.c,o=I.bBE(p.f),n=t.gc6h(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cJ,10)],m),k=r?B.az:B.c,j=A.I(r?B.az:B.c,B.q,2)
if(o!=null)w=A.t9(B.A,s,B.ci,B.bT,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hU(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Fu,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.I(r?B.az:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fcD,s,s,s),B.f,s,s,new A.o(B.cf,s,w,j,s,s,B.n),s,s,s,s,D.bwB,s,s,s),s,s,s,-6,-4,s))}k=r?B.cx:B.c
j=A.n(8)
w=A.I(B.d.gI(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dE,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cx,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bk,s,s,s,s,s,s,s,s,7.5,s,s,B.a5,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aD(s,new A.a7(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.at,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aZD,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bwM,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a7)}}
C.bcP.prototype={
a4(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.baB
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
au(d){return d.b!==this.b}}
C.bv7.prototype={
B(d){var w=this,v=null,u=new C.far(w),t=w.c,s=t?B.cx:B.c,r=A.n(12),q=u.$3(B.hA,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.fd,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yj,"Zoom out",w.e)
return A.aG(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.fd,v,v,v,1,v,v,v,v,v,22),u.$3(B.al1,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dq,v,v,v,B.ah)}}
C.bkM.prototype={
B(d){var w=this,v=null,u=B.bU.j(0.15),t=A.I(B.bU,B.q,2),s=w.e,r=x.p
t=A.aD(v,A.p(v,A.v(A.a([A.X(s?K.a_8:X.MT,B.bU,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.f9_,v,v,v)],r),B.m,v,B.b8,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a7)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.f6Z,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.M(s,new C.eMm(w),A.U(s).k("M<1,r>")))
B.d.v(u,t)}return new A.a7(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Zy.prototype={
S(){return new C.aB6()},
br(){return this.Q.$0()},
ge1(){return this.w}}
C.aB6.prototype={
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
r.y=t==null?D.xU:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i0I(w.r,w.f)
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
Ph(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ph=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h9_(p.y,p.w)
w=3
return A.b(A.lf(t.a.w,B.HV),$async$Ph)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZl(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Ph)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hDf(p.y,p.w)
t.a.br()
case 5:w=7
return A.b(Ao.Gs(78,800),$async$Ph)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dmF(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Ph,v)},
c6g(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hX(B.o.u(1000*Date.now()),w,D.xU,null,null,null,"","","","","",1,!1,0)
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
s=v.aDb(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
a92(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a92=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.dmE(r),s,null,!0,!0,x.y),$async$a92)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a92,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tJ(j),h=l.a.e,g=A.U(h).k("a_<1>"),f=A.C(new A.a_(h,new C.dmO(l),g),g.k("J.E"))
h=j?B.e_:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bv5,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.az,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hs(A.aL(!1,k,!0,new A.D(B.lR,A.X(B.e6,B.oG,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbGE(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jA:B.iT
t=I.bBE(l.as)
if(l.as==null)s=A.X(B.oL,j?B.br:B.bk,k,k,k,40)
else s=k
s=A.av(A.aD(k,new A.an(B.W,k,B.aa,B.r,A.a([A.h2(u,t,s,k,42),A.ao(0,A.h2(B.bU,k,D.bGZ,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc6d(),k,k,k,k,k,k,!1,B.a7),k,k,k)
t=l.d
t===$&&A.c()
t=C.aB8(t,"Full name",B.ms,1,1,i,B.m4)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bho(i,u,new C.dmP(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.boJ],q)
o=l.a.e
B.d.v(p,new A.M(o,new C.dmQ(),A.U(o).k("M<1,eE<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.boL],q)
B.d.v(q,new A.M(f,new C.dmS(),A.U(f).k("M<1,eE<m?>>")))
o=A.v(A.a([t,B.am,new C.acI(i,r,"Who is their parent?",p,new C.dmT(l),k,o),B.aB,n,B.am,new C.acI(i,m,"Who is their spouse / partner?",q,new C.dmU(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aB8(q,"Birth date",D.ak4,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aB8(m,"Birth place",B.a_n,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aB8(n,"Date of death (if deceased)",D.ami,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aB8(p,"Occupation",B.a0q,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.r,w,k),B.aB,s,B.by,new C.acJ(i,"Identity",u,k),B.ac,new C.acJ(i,"Family links",o,k),B.ac,new C.acJ(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aB8(r,"Notes",B.kY,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aB7(i,"Child order",l.cdQ(l.at),new C.dmV(l),new C.dmW(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fZC(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dmX(l):k
B.d.v(r,A.a([B.S,new C.aB7(i,"Visible in tree",u,w,new C.dmY(l),k)],v))}r.push(B.S)
w=j?B.jA:B.iT
u=A.n(14)
t=A.I(j?B.e1:B.bN,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iG(k,B.bU,k,B.af,k,new C.dmZ(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.br:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ah8,k,k,k))
r.push(B.by)
w=j?B.aQ:B.az
j=j?B.e1:B.bN
r.push(A.B(A.a([A.E(A.dT(B.nz,new C.dmR(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cl,k,new A.b7(A.n(14),B.Y),new A.ay(j,1,B.q,-1),k,k,k,k)),1),B.bd,A.E(A.bG(D.eMu,l.gc6f(),A.bn(B.aV,k,k,0,B.c,k,B.cl,k,new A.b7(A.n(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.at)
return A.ek(B.hc,k,B.af,h,new A.a7(420,k,A.c9(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ag),k),D.ai_,k,B.aho,new A.b7(g,B.Y),k,k)},
cdQ(d){var w=B.o.E(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.E(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acJ.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jA:B.iT,s=A.n(16)
return A.v(A.a([new A.D(D.aip,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e1:B.bN,B.q,1),s,w,w,B.n),w,w,w,w,B.bm,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhp.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e_:B.c,r=A.n(12),q=A.I((t?B.e1:B.bN).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aQ:B.az,u,u,u,u,u,u,u,u,14,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.T,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.ez,u,B.vq,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.br:B.bk,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acI.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e_:B.c,s=A.n(12),r=A.I((u?B.e1:B.bN).j(0.85),B.q,1),q=A.X(B.rb,u?B.br:B.bk,v,v,v,v),p=A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,14,v,v,B.a5,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e_:B.c
return A.p(v,new A.Dq(A.Sf(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.br:B.bk,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kV,v,v,v)}}
C.bho.prototype={
B(d){var w=new C.dn_(this)
return A.B(A.a([w.$3(D.ZH,"Male",B.NC),B.ab,w.$3(D.aji,"Female",B.Np),B.ab,w.$3(D.xU,"Other",B.nj)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aB7.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jA:B.iT,r=A.n(14),q=A.I(t?B.e1:B.bN,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.az,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.br:B.bk,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHj(u,B.yj,w.f,v),B.bp,new C.aHj(u,B.hA,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ej,v,v,v)}}
C.aHj.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.e_:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bU
else t=(s.c.a?B.br:B.bk).j(0.4)
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ah)}}
C.acK.prototype={
bPq(d){switch(d.a){case 0:return B.bU
case 1:return B.bC
case 2:return B.cU}},
bPr(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aWp(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
A5(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e_:B.c
u=A.n(12)
t=A.I((w?B.e1:B.bN).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bU,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.br:B.bk,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.v(A.a([q,B.at,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.az,p,p,p,p,p,p,p,p,14,p,p,B.N,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cB,B.xD,p,p,1/0)},
adw(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jA:B.iT,s=A.n(16),r=A.I(v?B.e1:B.bN,B.q,1)
return A.v(A.a([new A.D(D.aip,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.how(r,q),o=q.c,n=t.bPq(o),m=I.bBE(q.f),l=t.e.a,k=l?B.e_:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kt?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.br:B.bk,s,s,s,s,s,s,s,s,12,s,s,B.a5,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.h2(u,m,m==null?A.X(B.oL,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ek,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.I(n.j(0.45),B.q,1)
v=A.av(A.p(s,A.d(t.bPr(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mq,s,s,s),s,s,s)
u=x.p
i=A.a([t.A5("Full name",i,B.ms)],u)
if(p>0)i.push(t.A5("Child order","#"+p,B.Nv))
r=A.a([h,B.at,r,B.aP,l,B.S,v,B.by,t.adw("Identity",i),B.ac,t.adw("Life details",A.a([t.A5("Birth date",q.w,D.ak4),t.A5("Birth place",q.x,B.a_n),t.A5("Date of death",q.y,D.ami),t.A5("Occupation",q.z,B.a0q)],u)),B.ac,t.adw("Family links",A.a([t.A5("1. Parent",t.aWp(q.d),B.FI),t.A5("2. Spouse",t.aWp(q.e),B.No)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adw("Notes",A.a([t.A5("Notes",q,B.kY)],u))],u))
r.push(B.by)
r.push(A.bG(B.Je,new C.dn9(d),A.bn(B.aV,s,s,s,s,s,B.cl,s,new A.b7(A.n(14),B.Y),s,s,s)))
return A.eJ(s,k,new A.cT(B.lD,A.c9(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xJ,s,s,B.ag),s),s,s,s,B.Fg,B.d0,s,new A.b7(j,B.Y),s)}}
C.JC.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.br:B.bk
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.xM,A.hs(A.aG(!1,B.a1,!0,A.n(8),A.aL(!1,A.n(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ah),u,v.c,u,u),u)}}
C.aoX.prototype={
eP(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a7().ac())
w=u.c
v=A.U(w).k("M<1,a4<m,@>>")
w=A.C(new A.M(w,new C.c7Y(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j2(w,new C.c7Z(),t,x.U))
return s}}
C.aoY.prototype={
S(){return new C.aCH(A.a([],x.bF))},
gdd(){return this.c}}
C.aCH.prototype={
a_(){this.a1()
this.Jl()},
Jl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Jl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c81(t.a.c),$async$Jl)
case 3:r=e
w=4
return A.b(C.AA(t.a.c),$async$Jl)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qS(q,new C.dTl(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dTm(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Jl,v)},
yg(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.U(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
K3(d,e){return this.cCK(d,e)},
cCK(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$K3=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dTq(q,e))
t=3
w=6
return A.b(d.$0(),$async$K3)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dTr(q))
$.eV.mr()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$K3,v)},
X6(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p4(r,s.c,s.e),$async$X6)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.K3(new C.dTi(t),"Preparing download\u2026"),$async$X6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X6,v)},
Xa(d){return this.bNp(d)},
bNp(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p4(r,s.c,s.e),$async$Xa)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.K3(new C.dTj(t,d),"Preparing file\u2026"),$async$Xa)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xa,v)},
afn(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.x5.c7().LP(B.Qw,B.tP,!0),$async$afn)
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
o=A.js(o,0,null)
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
return A.i($async$afn,v)},
XM(d){return this.bXO(d)},
bXO(d){var w=0,v=A.j(x.H),u=this
var $async$XM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.K3(new C.dTk(u,d),"Restoring family trees\u2026"),$async$XM)
case 2:return A.h(null,v)}})
return A.i($async$XM,v)},
XL(){var w=0,v=A.j(x.H),u,t=this,s
var $async$XL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afn(),$async$XL)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.XM(s),$async$XL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XL,v)},
a1z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p4(r,s.c,s.e),$async$a1z)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.K3(new C.dTp(t),"Creating QR code\u2026"),$async$a1z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1z,v)},
a1a(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CI()){t.yg("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cl(A.e8(new C.dTn(),!0,null,x.N)),$async$a1a)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.XM(r),$async$a1a)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1a,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.As:B.iv,m=o?D.afE:B.aQ,l=o?B.aK:B.bN,k=o?B.aQ:B.az,j=new C.d6R(n,m,l,k,o?B.bJ:B.bk)
l=A.aH(p,p,p,p,A.X(B.eC,k,p,p,p,20),p,p,p,new C.dTt(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eD(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d6p(!0,B.jq,B.aR,B.aR,q.r?p:q.gctI(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gcpR()
t.push(A.E(C.d6p(!s,B.iZ,B.b6,B.bu,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d6p(!1,B.hB,B.aV,B.bU,q.r?p:q.gbNi(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d6p(!1,M.yp,B.aF,B.aM,q.r?p:q.gbXL(),j,s,"Upload backup file"),1))
l=A.a([new C.bdJ(v,l,p),B.kE,new C.ac_(j,"QR restore",p),B.S,t,B.d7,new C.ac_(j,"Backup files",p),B.S,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kE,new C.ac_(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dTu(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cw(l,p,B.YQ,p,p,B.ag,!1)],u)
if(q.r){v=A.n(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dm,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bl(!0,A.p(p,A.B(A.a([K.aO2,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.N,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.B6,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c7(w,n,new A.an(B.W,p,B.aa,B.r,l,p),p,!1,!1,p,p)}}
C.d6R.prototype={}
C.bdJ.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.ka,28)],x.V)
t=A.ao(p,A.X(B.u6,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.r,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bPK,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.ok,A.E(A.v(A.a([D.fhx,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bXw,B.n),p,p,p,p,p,p,p,p)}}
C.ac_.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bdH.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aR.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aR.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aG(!1,B.a1,!0,q,A.aL(!1,o,!0,A.eF(A.dd(new A.D(E.Yu,A.v(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.r7,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bD,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)}}
C.bdM.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aG(!1,B.a1,!0,v,A.aL(!1,u,!0,A.eF(new A.D(B.eQ,A.B(A.a([A.p(v,D.bOX,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.r7,v,v,v),B.bd,A.E(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hB,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.ZU.prototype={
S(){return new C.aCG()},
gdd(){return this.c}}
C.aCG.prototype={
a_(){this.a1()
this.a8z()},
a8z(){var w=0,v=A.j(x.H),u=this,t
var $async$a8z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b0Z(u.a.c,B.CM),$async$a8z)
case 2:t=e
if(u.c!=null)u.m(new C.dTd(u,t))
return A.h(null,v)}})
return A.i($async$a8z,v)},
agL(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$agL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dTe(q))
t=4
p=A.haE(q.a.d,B.CM)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.arb(n.e,m,l,B.CM,p,n.f),$async$agL)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dTf(q))
q.c.J(x.q).f.U(D.eUV)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.aa(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.eg(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dTg(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agL,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.je:B.pH,n=p?B.ia:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eD(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fxa,q,q,q,1,q,!0)
w=A.n(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pM(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.v(A.a([B.O,u,B.by,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b8,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bt,q,q,q,q,q,q,q,q,q,q,q,B.N,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcpz()
if(u)u=B.IK
else u=A.X(r.e===!0?B.hn:B.ak3,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.eC(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aV,q,B.fO,q,q,q,new A.ay(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i0,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a7(1/0,q,A.bG(B.zG,new C.dTh(d),A.bn(B.aV,q,q,q,q,B.fO,q,q,q,q,q,q)),q))
return A.c7(m,o,new A.D(B.a9,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.ZV.prototype={
S(){return new C.biT(A.z4(B.xr,B.nG,B.ub))}}
C.biT.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.c7(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fpl,w,w,w,1,w,!0),B.w,A.z3(this.d,B.bT,new C.dTv(this,d)),w,!1,!1,w,w)}}
C.aXU.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Q0,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lA.prototype={}
C.a5N.prototype={
S(){return new C.biz(null,null)}}
C.biz.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tE,v,1,v,w)
w.e=A.bj(v,B.pM,v,1,v,w)
w.a.toString
w.d.cH(0)
w.e.cH(0)},
bu(d){var w,v,u=this
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
this.bu5()},
B(d){var w,v,u=this,t=B.d.dM(D.a38,new C.dEH(u),new C.dEI())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.ctr(A.c6(new A.h7(A.a([w,v],x.dS)),new C.dEJ(u,t),null),!0)}}
C.biy.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b_G(d,e)
break
case"house":p.m3(d,e,D.d0S)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdB()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m8(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AO(d,e,12)
p.xR(d,e,B.ld,5,14)
break
case"grocery":p.cez(d,e)
break
case"calculator":p.ceg(d,e)
break
case"lumber":p.ceH(d,e)
break
case"kitchen":p.ceC(d,e)
break
case"landscape":p.m3(d,e,D.d1n)
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
w.r=B.eF.j(0.85).gp(0)
d.aP(s,w)
p.AO(d,e,8)
p.xR(d,e,B.iW,4,18)
break
case"plumbing":p.ceQ(d,e)
break
case"electrical":p.m3(d,e,D.dbG)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.aZ(new A.a9(0,0,0+e.a,0+e.b),u)
p.m8(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m8(d,e,B.lI.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AO(d,e,10)
break
case"store":p.cf_(d,e)
break
case"paint_remodel":p.ceL(d,e)
break
case"roofing":p.ceS(d,e)
break
case"warehouse":p.cf6(d,e)
break
case"vehicles":p.cf4(d,e)
break
case"farm":p.cet(d,e)
break
case"restaurant":p.ceR(d,e)
break
case"tools":p.cf2(d,e)
break
case"wallet":p.cf5(d,e)
break
case"concrete":p.cem(d,e)
break
case"blueprint":p.cee(d,e)
break
default:p.b_G(d,e)}},
m3(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.saq(new A.a8(B.ax,B.aC,B.x,f,null,null).av(0,v))
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
xR(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdB()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AO(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.E(s*0.17,0.9)
p=B.k.E(s*0.23,0.85)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b_G(d,e){var w,v=this
v.m3(d,e,D.dai)
w=v.c
v.m8(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m8(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bLx(d,e,B.hY,w)
v.xR(d,e,B.c.j(0.7),6,8)},
bLx(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c_(new A.a9(16,q,t,q+3)),p)
p.delete()}},
cez(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m3(d,e,D.ci_)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.E(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.E(s,2)
$.W()
l=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.d_b[B.o.E(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m8(d,e,B.c.j(0.35),w,16)
j.xR(d,e,B.iW,5,12)},
ceg(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m3(d,e,D.ci6)
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
p=A.h5(g,g,g,g,g,B.a4,B.c6,g,B.dS,B.c5)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d2W[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.E(o,2)
p.saV(0,new A.eq(r,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ep()
p.a4(d,new A.u(t*(0.08+B.o.E(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ci8[o]
l=B.kk.j(0.28+0.3*Math.sin(n))
k=B.o.E(o,2)
p.saV(0,new A.eq(m,g,g,B.cO,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.ep()
p.a4(d,new A.u(t*(0.55+B.o.E(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m8(d,e,B.c.j(0.35),w*1.5,14)
h.m8(d,e,B.eA.j(0.55),-v*3.141592653589793*2,8)
h.m8(d,e,B.At.j(0.4),r*2.8,22)
h.xR(d,e,B.pw,8,10)
h.AO(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.E(w+o*0.22,0.9)
$.W()
r=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
ceH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,Z.avH)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a9(20,q,u,q+10),B.hD)
$.W()
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.h5,B.oy,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.er(p),n)
n.delete()}m.m8(d,e,B.h5.j(0.35),w,15)
m.AO(d,e,8)},
ceC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m3(d,e,D.d_G)
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
j.xR(d,e,B.qL,4,14)},
ceQ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m3(d,e,D.cPW)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.E(s,0.12)
$.W()
n=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xR(d,e,B.oE,6,12)
l.m8(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cf_(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m3(d,e,D.cvx)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a9(q,14,q+u,22),B.im)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.fb,B.bL,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}n.m8(d,e,B.c.j(0.3),w,16)
n.AO(d,e,8)
n.xR(d,e,B.v7,5,13)},
ceL(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.cVE)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.E(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bx(new A.a9(q,p,q+8,p+(18+r*22)),B.hf)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.is,B.dv,B.bL,B.eu][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.er(p),o)
o.delete()}this.m8(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ceS(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.cTc)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.E(v+s*0.12,0.75))
q=B.o.E(s,4)*0.22
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xR(d,e,B.cr,7,11)},
cf6(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.cye)
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
cf4(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.dfy)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.E(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.E(s,2)*0.08)
q=A.bx(new A.a9(r,q,r+28,q+8),B.hD)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.er(q),o)
o.delete()}this.AO(d,e,6)},
cet(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.cZj)
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
ceR(d,e){var w,v,u,t,s,r,q,p,o=this
o.m3(d,e,D.d0H)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cg(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c_(r),p)
p.delete()}o.xR(d,e,B.qL,5,16)
o.AO(d,e,7)},
cf2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,D.dda)
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
cf5(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,D.dg5)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a9(p,o,p+36,o+22),B.im)
$.W()
p=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iW,B.lI,q).gp(0)
n=p.H()
s.drawRRect(A.er(o),n)
n.delete()}m.AO(d,e,9)
m.m8(d,e,B.c.j(0.4),w*2.2,12)},
cem(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.d5A)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.u(v,u),34)
$.W()
s=A.N()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.f7(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.at(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bN.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cee(d,e){var w,v,u,t,s,r,q,p
this.m3(d,e,D.d1G)
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
au(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.arT.prototype={
ZQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aPb(),$async$ZQ)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a82(s),$async$ZQ)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$ZQ,v)},
afo(d){return this.chl(d)},
chl(d){var w=0,v=A.j(x.H),u=this,t
var $async$afo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i9_(d),$async$afo)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afo,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jA:B.iT
w=x.p
v=A.a([C.aPz(!0,B.qC,1/0,B.pU,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c0(new A.bI(B.b_,t,t,new A.D(B.vk,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.N,t,t,!0,t,t,t,t,t,B.awE,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b_,B.b4,B.x,u,t,t),B.n),B.be))}v.push(A.ao(8,A.B(A.a([A.E(A.dn(D.bIK,D.fdV,new C.cfx(this,d),A.bn(B.aV,t,t,t,B.c,t,B.jE,t,t,t,t,B.cd)),1),B.ab,A.E(A.eC(D.bQY,D.fsn,this.gc8n(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jE,t,t,D.aYa,t,t,t,B.cd)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fH(1.7777777777777777,A.aG(!1,B.a1,!0,B.qC,new A.an(B.W,t,B.b0,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ah),t)}}
C.aKD.prototype={
aS(){this.b_()
this.aY()
this.dJ()},
q(){var w=this,v=w.b3$
if(v!=null)v.a3(0,w.gdD())
w.b3$=null
w.a2()}}
C.aSu.prototype={}
C.aSt.prototype={}
C.aQv.prototype={}
C.Yx.prototype={
S(){return new C.axX()}}
C.axX.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b5,B.aN)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
JV(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.J(x.q).f.U(D.eVp)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aSu(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e_:B.c,k=A.n(20),j=A.p(n,D.bQD,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.az,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.v(A.a([i,B.bD,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bk,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aH(n,n,n,n,A.X(B.cD,m?B.br:B.bk,n,n,n,n),n,n,n,new C.cZ6(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bk,n,n,n,n,n,n,n,n,12,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.br:B.bk,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.haU(new C.cZ7(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.az,n,n,n,n,n,n,n,n,n,n,n,B.a5,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jA:B.iT
r=A.n(12)
q=A.n(12)
p=m?B.e1:B.bN
t=A.aM(n,B.T,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b4(4,r,B.dg),n,n,n,n,n,n,!0,new A.b4(4,q,new A.ay(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cZ8(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,R.IR,n,n,n,n)
u=m?B.aQ:B.az
m=m?B.e1:B.bN
return A.eJ(n,l,new A.cT(B.lD,A.c9(A.v(A.a([j,B.aP,i,B.at,w,B.O,v,B.aP,t,B.by,A.B(A.a([A.E(A.dT(B.de,new C.cZ9(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cl,n,new A.b7(A.n(12),B.Y),new A.ay(m,1,B.q,-1),n,n,n,n)),1),B.av,A.E(A.bG(D.fsC,o.ga1T(),A.bn(B.aV,n,n,n,B.c,n,B.cl,n,new A.b7(A.n(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.B7,n,n,B.ag),n),n,n,n,W.B8,B.d0,n,new A.b7(k,B.Y),n)}}
C.Yw.prototype={
S(){return new C.axW()}}
C.axW.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.as(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
JV(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.J(x.q).f.U(D.eT6)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aSt(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e_:B.c,n=A.n(20),m=A.p(q,D.bNd,B.f,q,q,new A.o(B.bU.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.v(A.a([l,B.bD,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.br:B.bk,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aH(q,q,q,q,A.X(B.cD,p?B.br:B.bk,q,q,q,q),q,q,q,new C.cZ2(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.n(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.ajQ,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.av,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.az,q,q,q,q,q,q,q,q,q,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jA:B.iT
t=A.n(12)
s=A.n(12)
r=p?B.e1:B.bN
v=A.aM(q,B.T,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b4(4,t,B.dg),q,q,q,q,q,q,!0,new A.b4(4,s,new A.ay(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cZ3(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kF,q,q,q,q)
w=p?B.aQ:B.az
p=p?B.e1:B.bN
return A.eJ(q,o,new A.cT(B.lD,A.c9(A.v(A.a([m,B.aP,l,B.aB,v,B.by,A.B(A.a([A.E(A.dT(B.de,new C.cZ4(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cl,q,new A.b7(A.n(12),B.Y),new A.ay(p,1,B.q,-1),q,q,q,q)),1),B.av,A.E(A.bG(D.fzo,this.ga1T(),A.bn(B.bU,q,q,q,B.c,q,B.cl,q,new A.b7(A.n(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.B7,q,q,B.ag),q),q,q,q,W.B8,B.d0,q,new A.b7(n,B.Y),q)}}
C.Y4.prototype={
S(){return new C.awG()}}
C.awG.prototype={
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
gJg(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaiB(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gb2A(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aNx(d){var w,v=B.k.D(this.gJg()+d,0.25,999999),u=B.k.k0(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ab(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.saV(0,u)
this.m(new C.cwG())},
awW(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jA:B.iT,s=A.n(14),r=A.n(14)
u=u?B.e1:B.bN
return A.bs(w,new A.b4(4,s,B.dg),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.ay(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.n(14),B.aai),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c8o(d,e,f){return this.awW(d,e,f,null)},
JV(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaiB()<=0){s.c.J(x.q).f.U(D.eXg)
return}r=s.c
r.toString
v=s.gJg()
u=s.gaiB()
t=s.gb2A()
A.a6(r,!1).O(new C.aQv(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tJ(n),l=n?B.e_:B.c,k=A.n(24),j=x.O,i=A.a([B.aV.j(0.22),B.bU.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bGH,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.v(A.a([h,B.bD,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aH(o,o,o,o,A.X(B.cD,n?B.br:B.bk,o,o,o,o),o,o,o,new C.cwM(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,o,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.T,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.awW(m,"Item name (optional)","Lumber, paint, labor\u2026",B.NB),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,R.IR,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jA:B.iT
t=A.n(14)
s=A.I(n?B.e1:B.bN,B.q,1)
r=A.aH(o,o,o,o,A.X(B.yj,n?B.aQ:B.az,o,o,o,20),o,o,o,new C.cwN(p),o,o,o,o,o,B.cd)
q=p.e
q===$&&A.c()
q=A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bSv,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cwO(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aH(o,o,o,o,A.X(B.hA,n?B.aQ:B.az,o,o,o,20),o,o,o,new C.cwP(p),o,o,o,o,o,B.cd)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,16,o,o,B.N,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.av,A.E(A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.awW(m,"Amount","0.00",B.i1),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cwQ(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.M(D.cW6,new C.cwR(p,m),t),t.k("ak.E"))
i=A.a([i,B.by,v,B.aB,h,B.O,s,B.ac,A.bY(B.bA,u,B.bq,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aM(o,B.T,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c8o(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cwS(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kF,o,o,o,o)],w))}i.push(B.aP)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.br:B.bk,o,o,o,o,o,o,o,o,11,o,o,B.N,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJg()===B.k.k0(p.gJg())?B.k.N(p.gJg()):p.gJg()
s=p.gb2A()
r=A.AC(p.gaiB())
i.push(A.p(o,A.B(A.a([A.E(A.v(A.a([u,B.at,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.br:B.bk,o,o,o,o,o,o,o,o,12,o,o,B.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bCq(p.gJg()*p.gaiB(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jk,o,o,o))
i.push(B.by)
j=A.n(14)
h=n?B.e1:B.bN
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cl,o,new A.b7(j,B.Y),new A.ay(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.az,o,o,o,o,o,o,o,o,o,o,o,B.N,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cwT(d),h),1),B.av,A.E(A.dn(D.anm,D.fvp,p.ga1T(),A.bn(B.aV,o,o,0,B.c,o,B.cl,o,new A.b7(A.n(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eJ(o,l,new A.cT(V.aaH,A.c9(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ad.r5,o,o,B.ag),o),o,o,o,B.Mi,B.d0,o,new A.b7(k,B.Y),o)}}
C.a0F.prototype={
S(){return new C.bv_()}}
C.bv_.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,B.b5,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e_:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.az,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jA:B.iT
v=A.aM(s,B.T,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b4(4,A.n(12),B.dg),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f9U(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dT(B.de,new C.f9V(d),s),1)
r=A.bn(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eJ(s,q,new A.D(B.B7,A.v(A.a([o,B.aB,v,B.aP,A.B(A.a([u,B.av,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f9W(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d0,s,new A.b7(p,B.Y),s)}}
C.ab2.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.Fl.prototype={
S(){return new C.buY(null,null)}}
C.buY.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bpi,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bwt()},
gbxU(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bU,B.aZ],x.O)
case 2:return A.a([B.bv,B.aV,B.aZ],x.O)
case 3:return A.a([B.aR,B.cf,B.jW],x.O)
case 4:return A.a([B.hx,B.bU,B.fc],x.O)
case 0:return A.a([B.aV,B.bU,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ev(A.c6(v,new C.f9S(this,new C.tJ(w.ax.a===B.I)),null),null)}}
C.awz.prototype={
S(){return new C.buZ(null,null)}}
C.buZ.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n8,null,1,null,v)
w.cH(0)
v.d!==$&&A.aP()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bwu()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f9T(this),null)}}
C.buX.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aT(w,w))
u=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
u.F(new A.iL(v))
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
w=A.x3(u)
t=A.a([],x.f5)
w=new A.vx(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jW('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Hd(w,r)
w.jr()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aQX(d,q,r,o,0,0.2,4.2,0.92)
p.aQX(d,q,r,s,0.52,0.11,3.2,0.58)}},
aQX(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.E(g+h,1)*f,s=A.hws(e.a.a,e,t,t+f*i,!0),r=A.bAN(s.gbM().a.getBounds())
$.W()
w=A.N()
w.b=B.ae
w.c=j
w.d=B.bQ
w.f=!0
v=this.f
u=k*this.e
w.saq(new A.a8(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.GY,null).av(0,r))
d.aP(s,w)},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aMO.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.aMP.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.tJ.prototype={}
C.arS.prototype={
S(){return new C.aEc()},
ge1(){return this.c}}
C.aEc.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.agf()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.L0(w,v)
this.a2()},
agf(){var w=0,v=A.j(x.H),u=this,t,s
var $async$agf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bAV(t.c,t.d.a),$async$agf)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eJw(u,s))
return A.h(null,v)}})
return A.i($async$agf,v)},
PH(){var w=0,v=A.j(x.H),u=this,t,s
var $async$PH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eJn(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.L0(t,s),$async$PH)
case 2:if(u.c!=null)u.m(new C.eJo(u))
return A.h(null,v)}})
return A.i($async$PH,v)},
Qc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cb(null,null,!0,null,new C.eJu(t,new C.tJ(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Qc)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a82(q),$async$Qc)
case 6:case 5:t.m(new C.eJv(t,r))
w=7
return A.b(t.PH(),$async$Qc)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Qc,v)},
Vm(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i8L(r),$async$Vm)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eJi(t,new C.qW(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.PH(),$async$Vm)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vm,v)},
cdr(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hos(t,new C.eJm(u),w,v)},
aal(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.ay(v,2.5,B.q,-1),B.Y,B.Y,new A.ay(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aXX,w,w,B.n),w,22,w,w,w,w,w,22)},
a9q(d){return this.bJN(d)},
bJN(d){var w=0,v=A.j(x.H),u=this
var $async$a9q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eJl(u,d))
w=2
return A.b(u.PH(),$async$a9q)
case 2:return A.h(null,v)}})
return A.i($async$a9q,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bY:B.iv,d=A.n(8),a0=A.X(Q.a_5,f?B.br:B.bk,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.Fn,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bk,g,g,g,g,g,g,g,g,g,g,g,B.a5,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eJx(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b0,B.r,A.a([A.bw(A.n(22),C.aPz(!0,A.n(22),1/0,B.pU,g,d,1/0),B.aq),A.ao(10,A.dn(D.bLg,D.fxG,h.gb0s(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h9,g,new A.b7(A.n(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eU,22),new A.ac(-4,B.G,B.bU.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.W,g,B.b0,B.r,A.a([C.aPz(!0,A.n(16),1/0,B.N3,g,r.c,1/0),A.c0(g,new A.o(g,g,g,g,g,new A.a8(B.b_,B.b4,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.be),A.ao(g,h.aal(!0),g,g,8,g,8,g),A.ao(g,A.cub(h.aal(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cub(h.aal(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cub(h.aal(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dn(D.bHg,D.fro,h.gb0s(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.h9,g,new A.b7(A.n(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bU3,B.n),g,g,g,g,B.lR,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.az,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.b7p,B.nN,B.h7],u):A.a([B.aZ,B.aV,B.bU],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eU,24)],t)
r=A.n(22)
p=A.ao(g,A.X(B.jH,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h8,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bCq(h.d.gwR(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.I(B.fT.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aR.j(0.28),B.cJ,14)],t)
j=B.aR.j(0.22)
i=A.n(10)
u=A.p(g,A.bw(r,new A.an(B.W,g,B.aa,B.r,A.a([p,new A.D(D.btS,A.B(A.a([o,B.av,A.aG(!1,B.a1,!0,g,A.aL(!1,n,!0,A.eF(new A.D(Ai.B2,A.v(A.a([A.p(g,D.amW,B.f,g,g,new A.o(j,g,A.I(B.aR.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.h0,D.fgC],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcdq(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ah)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aP,w,B.O,u,B.by,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.az,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b7,A.dn(Ak.a0M,D.few,h.gbym(),A.bn(B.aV,g,g,g,B.c,g,B.iC,g,new A.b7(A.n(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.e_:B.c
v=A.n(14)
u=A.I(f?B.e1:B.bN,B.q,1)
t=A.X(B.a_q,f?B.br:B.bk,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.az,g,g,g,g,g,g,g,g,g,g,g,B.N,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.br:B.bk,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.r6,g,g,1/0))}else B.d.v(d,new A.M(w,new C.eJy(h,new C.tJ(f)),A.U(w).k("M<1,r>")))
if(h.e)d.push(new A.D(B.AW,A.av(A.mK(g,f?B.br:B.bk,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c7(g,e,A.bl(!0,A.v(A.a([new A.D(B.B0,a0,g),A.E(A.c9(A.v(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xK,g,g,B.ag),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bBZ(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e_:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b_I,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.hO:B.hb,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bI
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.az,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcSQ()
v=A.AC(d.d)
B.d.v(t,A.a([B.at,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.br:B.bk,u,u,u,u,u,u,u,u,12,u,u,B.a5,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.b8,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bU.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bCq(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h9,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DQ(A.B(A.a([m,A.E(new A.D(B.ah1,A.B(A.a([l,B.bd,t,B.ab,k,A.aH(u,u,u,u,A.X(B.cD,(r?B.br:B.bk).j(0.75),u,u,u,20),u,u,u,new C.eJj(this,d),u,u,u,u,u,B.cd)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aZz,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.da,u,u,u,u)}}
C.ad4.prototype={
Ei(d){return this.bL9(d)},
bL9(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ei=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p4(d,o,!1),$async$Ei)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bN(Ac.AU,null,x.H),$async$Ei)
case 4:s=t.d
w=5
return A.b(C.fGR(!0,o,s),$async$Ei)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gg(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$Ei)
case 6:p=f
w=7
return A.b(A.p3(o,!1),$async$Ei)
case 7:if(d.e==null){w=1
break}d.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ei,v)},
ZR(d){return this.ctJ(d)},
ctJ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p4(d,s,!1),$async$ZR)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hy(d,new C.arM(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p3(s,!1),$async$ZR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZR,v)},
PI(d){return this.cpM(d)},
cpM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hy(d,D.aG4,!0,"NgmyWorksheetProjectScan",x.N),$async$PI)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCr(s),$async$PI)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.J(x.q).f.U(D.eWp)
w=1
break}q=C.h0U(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$PI)
case 5:if(d.e==null){w=1
break}d.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PI,v)},
ZS(d){return this.cBG(d)},
cBG(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bBZ(),$async$ZS)
case 3:s=f
if(s==null){w=1
break}r=C.h0U(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$ZS)
case 4:if(d.e==null){w=1
break}d.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ZS,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tJ(u),s=w.d.d.length,r=u?B.e_:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.ka,36)],x.V),o=x.p
return A.bl(!0,new A.D(B.vr,A.p(v,A.v(A.a([w.csg(d,t,s),new A.D(D.bth,A.v(A.a([w.b3v(t,"QR restore"),B.S,A.B(A.a([w.aZq(t,!0,B.jq,B.aR,B.aR,new C.eJA(w,d),"Show to scan","QR code"),B.av,w.awX(t,B.iZ,B.b6,B.bu,new C.eJB(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d7,w.b3v(t,"Backup files"),B.S,A.B(A.a([w.awX(t,B.hB,B.aV,B.bU,new C.eJC(w,d),"Full copy","Backup file"),B.av,w.awX(t,M.yp,B.aF,B.aM,new C.eJD(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
csg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f_,B.cY,B.fx],k):A.a([B.aZ,B.aV,B.bU],k)
w=A.ao(l,A.X(B.u6,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kT,l,l,l,36),l,l,l)
u=A.n(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aPz(!0,A.n(13),64,D.bCt,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aQA,l,l,l)
r=C.bCq(r.gwR(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.r,A.a([w,new A.D(D.btF,A.v(A.a([v,A.B(A.a([s,B.er,A.E(A.v(A.a([u,B.at,t,B.O,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fL,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.X(B.cD,B.c.j(0.85),l,l,l,l),l,l,l,new C.eJz(d),l,l,l,A.nz(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aNS,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b3v(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.br:B.bk,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aZq(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.afE:B.aQ
if(e)w=B.aR.j(o?0.45:0.35)
else{w=o?B.e1:B.bN
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aR.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.r7,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.az,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.eF(new A.D(E.Yu,A.v(A.a([t,B.ac,u,B.bD,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.br:B.bk,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
awX(d,e,f,g,h,i,j){return this.aZq(d,!1,e,f,g,h,i,j)}}
C.arM.prototype={
S(){return new C.bkf()}}
C.bkf.prototype={
a_(){this.a1()
this.ae8()},
ae8(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ae8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCs(p.c,p.d),$async$ae8)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eJd(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eJe(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ae8,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.As:B.iv,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.X(B.eC,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eJf(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zv],u),B.m,h,B.e,B.j,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f_,B.cY,B.fx],s):A.a([B.aZ,B.aV,B.bU],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eU,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dj,B.L,h,h)
p=C.bCq(p.gwR(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fL,h,h,h)],u),B.m,h,B.b8,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.YP,h,h,1/0)
t=g?D.bgI:B.c
q=A.n(24)
p=A.I(w?B.aR.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dm,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a7p,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e7Z)
else{m=A.n(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pM(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bP,h,h,h))}}o.push(B.aP)
n=w?B.aR:B.aV
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.I((w?B.aR:B.aV).j(0.35),B.q,1)
k=w?B.Nl:B.NS
k=A.X(k,w?B.aR:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.av,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a5,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iC,h,h,h))
return A.c7(h,f,A.bl(!0,A.v(A.a([new A.D(A7.Mv,e,h),A.E(A.c9(A.v(A.a([s,B.aP,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tN,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.aia,h,h,B.ag),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.arR.prototype={
S(){return new C.aEb(A.z4(B.LL,B.nG,B.ub))}}
C.aEb.prototype={
q(){this.d.q()
this.a2()},
aLy(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iQ(w,d)},
c9g(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i6G(t)
if(s!=null){this.aLy(s)
return}r=C.hfs(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aLy(B.a.i(B.a.b4(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eD(A.a([A.aH(t,t,t,t,A.X(u.f?B.rc:A2.Nr,t,t,t,t,t),t,t,t,new C.eJh(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.As,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.frh,t,t,t,1,t,!0),q=A.z3(u.d,B.bT,u.gc9f()),p=A.n(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c7(r,B.w,new A.an(B.W,t,B.b0,B.r,A.a([q,p,A.ao(32,A.p(t,D.fq5,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jk,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aIZ.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.NQ.prototype={
S(){return new C.aEd(D.a9A,A.a([],x.D))},
br(){return this.r.$0()},
ge1(){return this.c}}
C.aEd.prototype={
gczD(){return J.bDB(this.e,0,new C.eK_())},
a_(){this.a1()
$.aW.c2$.push(this)
this.vB()},
q(){$.aW.hI(this)
this.a2()},
j_(d){if(d===B.fv)this.vB()},
vB(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CH(q.a.c).cO(0,B.k1),$async$vB)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eJW(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eJX(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vB,v)},
HJ(d){return this.bHW(d)},
bHV(){return this.HJ(null)},
bHW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i8N(l,d),$async$HJ)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.li(l,r,q,D.d5N,new A.S(Date.now(),0,!1))
w=4
return A.b(C.L0(t.a.c,p),$async$HJ)
case 4:o=f
w=5
return A.b(t.vB(),$async$HJ)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.J(x.q).f.U(D.eTA)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.J(q).f.U(D.eVj)
else n.J(q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Em(m)
case 1:return A.h(u,v)}})
return A.i($async$HJ,v)},
Em(d){return this.cdc(d)},
cdc(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Em=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hy(s,new C.arS(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Em)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.L0(u.a.c,t),$async$Em)
case 5:case 4:w=6
return A.b(u.vB(),$async$Em)
case 6:return A.h(null,v)}})
return A.i($async$Em,v)},
vn(d){return this.bXQ(d)},
bXQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bBZ(),$async$vn)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hy(r,D.aG4,!0,"NgmyWorksheetProjectScan",x.N),$async$vn)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCr(q),$async$vn)
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
break}p=C.h0U(s)
w=15
return A.b(C.L0(t.a.c,p),$async$vn)
case 15:o=f
w=16
return A.b(t.vB(),$async$vn)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.J(x.q).f.U(D.eVo)
w=1
break}r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Em(p)
case 1:return A.h(u,v)}})
return A.i($async$vn,v)},
Nx(d){return this.bGB(d)},
bGB(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cb(null,null,!0,null,new C.eJH(d),s,null,!0,!0,x.y),$async$Nx)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oD(t.a.c,A.a([],x.D)),$async$Nx)
case 6:w=7
return A.b(t.vB(),$async$Nx)
case 7:s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(D.eTF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nx,v)},
cdp(d){var w=this.c
w.toString
A.bR(B.K,null,new C.eJQ(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b46(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jA
else w=B.c
v=A.n(16)
u=A.I(p?B.e1:B.bN,B.q,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.az,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a1,!0,r,A.aL(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bD,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.br:B.bk,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vq,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
a_m(d,e){return this.cdd(d,e)},
cdd(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_m=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bR(B.K,null,new C.eJL(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_m)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hos(r,new C.eJM(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Nz(d,e),$async$a_m)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_m,v)},
b13(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.ay
else t=h.a?B.aQ:B.az
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.br:B.bk,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,u,!0,new A.D(B.B6,A.B(A.a([s,B.bd,t,A.X(B.ey,w?B.br:B.bk,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah)},
ck3(d,e,f,g,h,i){return this.b13(!1,d,e,f,g,h,i)},
Nz(d,e){return this.bGL(d,e)},
bGL(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l3(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Nz)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAH(t.a.c,d.a),$async$Nz)
case 6:w=7
return A.b(t.vB(),$async$Nz)
case 7:r=t.c
if(r==null){w=1
break}r.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Nz,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tJ(o),m=o?B.bY:B.iv
if(q.f)o=D.b5i
else{w=q.bB9(n)
v=q.bWU(n)
u=q.gbyg()
if(o)t=B.jA
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.ac,v,B.aP,new C.Fl(A.p(p,A.B(A.a([q.aAu(N.N2,"Projects",n,D.a9A),q.aAu(B.vC,"Cashier",n,D.aVm),q.aAu(B.FI,"Family Tree",n,D.h2n)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ek,0.95,u,p),B.by],r)
w=q.d
if(w===D.a9A){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.az,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b7,new C.awz(q.gaPJ(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.ck5(n)],r))}else{o=q.a
if(w===D.aVm)u.push(new C.anS(o.c,n,p))
else{w=q.r
u.push(new C.ap_(o.c,o.d,o.e,o.f,new C.eK2(q),new C.eK3(q),new A.cy(w,x.b4)))}}o=A.c9(A.v(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.Mp,p,p,B.ag)}return A.c7(p,m,A.bl(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bB9(d){var w=null,v=A.n(8),u=d.a,t=A.X(Q.a_5,u?B.br:B.bk,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.kU,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.br:B.bk,w,w,w,w,w,w,w,w,14,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eJE(this),w,w,w,w,w,w,w)},
gbyg(){switch(this.d.a){case 0:return D.a8S
case 1:return D.fU1
case 2:return D.a8T}},
bWU(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cy,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bN3,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.by_,A.aG(!1,B.a1,!0,w,A.aL(!1,A.n(12),!0,A.p(w,D.bKA,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eJI(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.n(12)
return new C.Fl(A.p(w,A.v(A.a([new A.D(E.YA,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.d(A.AC(this.gczD()),w,w,w,w,w,w,D.faY,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vp,B.jk,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.fU0,w)},
aAu(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aV:B.K,q=A.n(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.br:B.bk
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.br:B.bk
return A.E(A.aG(!1,B.a1,!0,u,A.aL(!1,s,!0,A.df(u,A.B(A.a([w,B.ec,new A.dq(1,B.cn,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b8,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iA,u,u,u,B.Fo,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eJZ(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),1)},
ck5(d){var w,v,u,t,s,r,q=this,p=null
if(J.cn(q.e)){w=d.a
v=w?B.e_:B.c
u=A.n(15)
t=A.p(p,D.bKF,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eU,28)],x.V),D.bWw,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.az,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fl(A.p(p,A.v(A.a([t,B.d7,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.br:B.bk,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dY,A.B(A.a([A.E(q.aRi(B.iZ,"Scan QR",new C.eJT(q),d),1),B.av,A.E(q.aRi(M.yp,"Upload file",new C.eJU(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fBe,q.gaPJ(),A.bn(B.aV,p,p,p,B.c,B.fO,p,p,new A.b7(A.n(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.buJ,1.05,D.a8S,p)}w=J.b6(q.e,new C.eJV(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Fl(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bS,1,D.a8S,p)},
aRi(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aG(!1,B.a1,!0,u,A.aL(!1,t,!0,A.p(w,A.v(A.a([A.X(d,B.aZ,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.f9p,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.agU,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)},
ck4(d,e){var w,v,u=null,t=e.a,s=t?B.e_:B.c,r=A.n(14),q=A.I(t?B.e1:B.bN,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.em,10)],x.V),o=A.n(14),n=t?B.br:B.bk
n=A.bw(B.Vh,new A.fH(1.7777777777777777,C.aPz(!0,B.fw,1/0,N.N2,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.az,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.d(""+d.d.length+" budget items \xb7 "+A.AC(d.gwR()),u,u,u,u,u,u,D.f7y,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aG(!1,B.a1,!0,u,A.aL(!1,o,!0,A.v(A.a([n,new A.D(B.bB,A.B(A.a([v,A.aH(u,u,u,u,A.X(Af.NE,t?B.br:B.bk,u,u,u,u),u,u,u,new C.eJR(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eJS(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e5,u,u,u,1/0)}}
C.bwL.prototype={}
C.qW.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcSQ(){var w,v,u,t,s=this.c
if(s===B.k.k0(s))w=B.o.u(B.k.N(s))
else{v=B.k.ab(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.li.prototype={
gwR(){return B.d.cI(this.d,0,new C.cw7())},
ag(){var w=this,v=w.d,u=A.U(v).k("M<1,a4<m,@>>")
v=A.C(new A.M(v,new C.cw6(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bba(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.li(w.a,w.b,v,u,w.e)},
baS(d){return this.bba(d,null)},
Sr(d){return this.bba(null,d)}}
C.Hn.prototype={
a5(){return"FamilyGender."+this.b}}
C.hX.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hki(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDb(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hX(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ake.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kD.prototype={
ganY(){var w=this.f
return new A.a_(w,new C.bNd(),A.U(w).k("a_<1>")).gM(0)},
ag(){var w=this,v=w.f,u=A.U(v).k("M<1,a4<m,@>>")
v=A.C(new A.M(v,new C.bNc(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i_8(w.y)],x.N,x.z)},
yx(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kD(w.a,v,u,t,s,r,w.r,q,p,o)},
bb9(d,e){var w=null
return this.yx(w,w,d,e,w,w,w,w)},
cIx(d,e,f,g,h,i,j){return this.yx(d,e,f,g,h,i,j,null)},
aDg(d,e){var w=null
return this.yx(w,w,w,d,w,w,e,w)},
cH0(d){var w=null
return this.yx(w,w,w,w,w,w,d,w)},
cHo(d){var w=null
return this.yx(w,w,w,w,w,w,w,d)},
aD2(d){var w=null
return this.yx(w,w,w,w,d,w,w,w)},
cI2(d,e,f){var w=null
return this.yx(w,d,w,e,w,w,f,w)},
cGO(d){var w=null
return this.yx(w,w,d,w,w,w,w,w)},
cHB(d,e){var w=null
return this.yx(d,w,w,w,w,e,w,w)}}
C.cw8.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cw9.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aGg.prototype={}
C.b7U.prototype={
bC(d){this.a=d.a
this.b=d.b},
cV(d){var w=new C.b7U()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b7T.prototype={
gwa(){return!0},
gFS(){return this.z.b<this.b.length},
aSW(d){switch(0){case 0:return d.a.c}},
aSD(d){switch(0){case 0:return d.a.d}},
bQk(d,e){switch(0){case 0:return new A.hK(d,e)}},
bPI(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h4(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iE(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.H7(b4)
switch(0){case 0:v=b5.b
u=new A.kA(0,v,0,1/0)
t=w===B.Tg
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fN(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h4(b4,u,!0)
f=b1.aSW(g)
f.toString
e=b1.aSD(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGg(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGg(k,j,i))}d=s.length
switch(0){case 0:q=b5.cv(new A.hK(m,l))
a0=q.a
a1=q.b
b1.a=new A.iE(0,0,a0,a1)
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
a8=b1.aSW(g)
e=b1.aSD(g)
e.toString
a9=b1.bPI(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bQk(a6,a3+a9)
b0=g.a
g.a=new A.iE(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h0(d){var w,v,u,t,s,r=this
r.lg(d)
w=d.b
w.i7()
v=A.dp()
u=r.a
v.ea(u.a,u.b,0,1)
w.oU(0,v)
for(u=r.z,u=B.d.dq(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h0(d)
w.ng(0)},
Gn(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i7(){return this.z}}
C.bv0.prototype={}
var z=a.updateTypes(["az<~>()","R(hX)","R(kD)","~()","R(nc)","a4<m,@>(kD)","H(kD,kD)","m(hX)","kD(a4<@,@>)","R(li)","R(ub)","nc(a4<@,@>)","ub()","H(li,li)","hX(a4<@,@>)","a4<m,@>(hX)","R(qW)","az<~>(li)","eE<m?>(hX)","H(hX,hX)","m?(hX)","a4<m,@>(nc)","Zy(Y)","m(m)","acK(Y)","r(oe)","H(nc,nc)","hX(hX)","cL(bv<m,Fy>)","cL(JO)","~(hX)","H?(hX)","hX()","ai<hX>()","R(ua)","R(JO)","D(hX)","~(Hn)","R(aei)","r(Hn,m,a0)","YX(Y)","bv<m,ai<a4<m,@>>>(m,ai<nc>)","~(H)","+count,id,name(H,m,m)(kD)","kD(kD)","ZU(Y)","ZV(Y)","R(lA)","lA()","m(kD)","a0F(Y)","Yx(Y)","Yw(Y)","YV(Y)","YZ(Y)","r(qW)","ad4(Y)","~(m_)","az<~>([m?])","K(K,li)","r(li)","K(K,qW)","a4<m,@>(qW)","qW(a4<@,@>)","Yv(Y)","So(Y)","cr(Hm)","li(a4<@,@>)","ua()","m(li)","a4<m,@>(li)","m(S)","H(hX)","kD(a4<m,@>)","Y4(Y)"])
C.fzv.prototype={
$1(d){return d.a+" "+d.b},
$S:119}
C.fzu.prototype={
bkj(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qO(s,d,B.hq,E.F3),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.KP(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bkj(d)},
$S:302}
C.fzw.prototype={
$1(d){return d.b},
$S:119}
C.fII.prototype={
$1(d){var w=null
return A.eJ(w,B.K,new F.Pc(this.a,this.b,w),w,w,0,B.Yv,B.d0,w,w,w)},
$S:47}
C.fok.prototype={
$1(d){return d!=null},
$S:226}
C.fol.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:226}
C.foq.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:175}
C.fxe.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fb(d,w,w,w,A.h6(w,B.rC,w,w,w,w,w,w,w,B.ds,w,w,10.5,w,B.el,w,!0,w,w,w,w),w),u=f?B.el:B.vx
return new A.nK(D.bql,A.a9i(A.a([new A.fP(130,w,v),new A.yM(1,B.FB,A.fb(e,w,w,w,A.h6(w,g==null?D.eag:g,w,w,w,w,w,w,w,B.ds,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xn,B.lt))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1916}
C.fxd.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vp(999)
f=A.wX(A.lv(h,A.fb("Cashier",h,h,h,A.h6(h,D.zh,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.el,h,!0,h,h,h,h),h),h,new A.kB(D.ea7,h,f,B.hG,h),h,h,D.bqP,h))
w=A.wX(A.fb("Debt receipt",h,h,h,A.h6(h,h,h,h,h,h,h,h,h,B.ds,h,h,22,h,B.el,h,!0,h,h,h,h),h))
v=A.wX(A.fb(C.wI(new A.S(Date.now(),0,!1),!0),h,h,h,D.a7w,h))
u=A.vp(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fb(s,h,h,h,A.h6(h,h,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.el,h,!0,h,h,h,h),h)
r=A.fb("Person who owes",h,h,h,D.a7w,h)
q=A.vp(10)
p=x.C
u=A.lv(h,A.yH(A.a([s,new A.fP(h,2,h),r,new A.fP(h,10,h),A.lv(h,A.yH(A.a([A.fb("Amount owed",h,h,h,D.a7w,h),new A.fP(h,2,h),A.fb(A.AC(t.c),h,h,h,A.h6(h,D.zh,h,h,h,h,h,h,h,B.ds,h,h,20,h,B.el,h,!0,h,h,h,h),h)],p),B.qZ,B.lt),h,new A.kB(B.p5,h,q,B.hG,h),h,h,D.bq2,1/0)],p),B.qZ,B.lt),h,new A.kB(E.aHk,h,u,B.hG,h),h,h,D.brR,1/0)
q=new A.nt(D.eaa,0.9,B.kL)
r=A.vp(12)
s=i.c
o=s.$2("Original due",C.wI(t.r,!1))
n=s.$2("Current due",C.wI(t.f,!1))
m=i.d
l=new A.nt(m,1.1,B.kL)
k=A.vp(8)
j=i.a
k=A.a([o,n,new A.fP(h,6,h),A.lv(h,A.wX(A.fb(t.gaK3(),h,h,h,A.h6(h,m,h,h,h,h,h,h,h,B.ds,h,h,11,h,B.el,h,!0,0.5,h,h,h),h)),h,new A.kB(h,new A.px(l,l,l,l),k,B.hG,h),h,h,D.bqX,1/0),new A.fP(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zh))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zh))
else{n=A.fb("Missed days ("+n+")",h,h,h,A.h6(h,B.rC,h,h,h,h,h,h,h,B.ds,h,h,10.5,h,B.el,h,!0,h,h,h,h),h)
m=A.U(o).k("M<1,RX>")
o=A.C(new A.M(o,new C.fxc(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fP(h,4,h),n,new A.fP(h,6,h),new C.b7T(5,5,new C.b7U(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fP(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fP(h,8,h),w,new A.fP(h,3,h),v,new A.fP(h,16,h),u,new A.fP(h,10,h),A.lv(h,A.yH(k,B.xn,B.lt),h,new A.kB(h,new A.px(q,q,q,q),r,B.hG,h),h,h,B.ah5,1/0)],p)
w=j.a
if(w!=null){v=new A.nt(B.I6,1,B.kL)
B.d.v(f,A.a([new A.fP(h,16,h),A.fb("Debtor signature",h,h,h,A.h6(h,B.rC,h,h,h,h,h,h,h,B.ds,h,h,10,h,B.el,h,!0,h,h,h,h),h),new A.fP(h,6,h),A.lv(h,new A.HD(w,B.Vs,h,h),h,new A.kB(h,new A.px(v,v,v,v),A.vp(6),B.hG,h),82,h,B.Mt,1/0)],p))}f.push(new A.fP(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fb(w,h,h,h,D.f0u,h))
f.push(new A.fP(h,18,h))
f.push(A.wX(A.fb("NGMY.ORG",h,h,h,A.h6(h,D.zh,h,h,h,h,h,h,h,B.ds,h,h,14,h,B.el,h,!0,1.8,h,h,h),h)))
return f},
$S:454}
C.fxc.prototype={
$1(d){var w=null,v=new A.nt(D.I7,0.7,B.kL),u=A.vp(999)
return A.lv(w,A.fb(C.wI(d,!1),w,w,w,A.h6(w,D.I7,w,w,w,w,w,w,w,B.ds,w,w,9.5,w,B.el,w,!0,w,w,w,w),w),w,new A.kB(w,new A.px(v,v,v,v),u,B.hG,w),w,w,D.bw4,w)},
$S:1917}
C.c1j.prototype={
$1(d){var w=null,v=B.bz.j(0.08),u=A.n(999),t=A.I(B.bz.j(0.28),B.q,1)
return A.p(w,A.d(C.wI(d,!1),w,w,w,w,w,w,D.f72,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eB,w,w,w)},
$S:1918}
C.fJd.prototype={
$1(d){var w=null,v=A.aI(d,B.bV,x.w).w,u=A.n(26),t=A.aH(w,w,w,w,D.bNW,w,w,w,new C.fJa(d),w,w,w,w,w,B.cd),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eJ(w,B.K,new A.cT(new A.aY(0,380,0,v.a.b*0.9),A.aG(!1,B.a1,!0,u,new A.D(B.Yl,A.v(A.a([new A.bI(B.a8,w,w,t,w),new A.dq(1,B.cn,A.c9(A.v(A.a([new A.ev(new C.aXW(r,w),s),B.S,A.B(A.a([A.E(A.eC(B.yA,D.fxC,new C.fJb(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f9,w,new A.b7(A.n(14),B.Y),new A.ay(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dn(B.a0C,D.fub,new C.fJc(r,d),A.bn(B.aZ,w,w,w,B.c,w,B.f9,w,new A.b7(A.n(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ag),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.az,0,w,w,w,w,w,B.ah),w),w,w,0,Aj.YI,B.d0,w,w,w)},
$S:47}
C.fJa.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fJb.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ak$.x.h(0,t.a)
m=m==null?null:m.gb8()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m_(2.5),$async$$0)
case 4:w=3
return A.b(e.ht(B.fY),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eT(B.dD.gaM(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rT(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fJc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fDP(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.J(x.q).f
s.U(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fJ5.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eJ(w,B.az,A.v(A.a([new A.D(D.brF,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.ny,w,w,w),1),A.aH(w,w,w,w,B.lr,w,w,w,new C.fJ3(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cn,new A.D(B.fV,A.bw(A.n(14),A.fM(t,B.A,w,w,B.ci,B.du,!1,w,!1,w,w),B.aq),w),w),new A.D(B.M7,new A.a7(1/0,w,A.dn(B.oW,D.aR1,new C.fJ4(t,this.c,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.Mj,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fJ3.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fJ4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rT(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fJh.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eJ(w,B.az,new A.D(D.brN,A.v(A.a([A.B(A.a([D.bx6,A.aH(w,w,w,w,B.lr,w,w,w,new C.fJf(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.O,new A.ev(A.bw(A.n(14),A.p(w,A.b3(w,w,w,new C.ba2(s.ax,w),B.au),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dn(B.oW,D.aR1,new C.fJg(t,s,d),A.bn(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(v,B.Y),w)},
$S:47}
C.fJf.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fJg.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ak$.x.h(0,t.a)
n=n==null?null:n.gb8()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m_(2.5),$async$$0)
case 4:w=3
return A.b(e.ht(B.fY),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eT(B.dD.gaM(s))
w=5
return A.b(A.rT(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.J(x.q).f.U(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fs9.prototype={
$1(d){return d.a===this.a},
$S:265}
C.dFz.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dFk.prototype={
bjx(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e_:B.c
s=u.a
w=2
return A.b(A.bR(t,null,new C.dFn(s,q,e),p,!0,!0,!1,B.In,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dFo(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bjx(d,e)},
$S:1919}
C.dFn.prototype={
$1(d){var w,v=null,u=this.c===B.w5,t=u?D.dbV:D.d81
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.az,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bl(!0,new A.D(K.ahF,A.v(A.a([u,B.at,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.br:B.bk,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ig(!0,v,v,B.y,L.aO9,new C.dFm(this.a,w,t,d),t.length,v,B.dR,B.ag,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:26}
C.dFm.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aQ
v=A.n(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.br:B.bk).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aXV(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dFl(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dFl.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dFo.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dFi.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:96}
C.dFj.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cI(B.ct,e,v)
return new A.cZ(e,!1,A.im(B.A,A.av(A.aG(!1,B.a1,!0,v,new A.e0(new C.dFh(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ah),v,v,v),v,new A.bf(t,new A.bq(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:31}
C.dFh.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bV,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e_:B.c,f=A.n(14),e=A.I((h?B.br:B.bk).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.ek,A.X(B.cD,i.a.d.a?B.br:B.bk,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dF2(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aRQ("Name")
r=l.a
q=r.d==null?k:new C.dF3(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bo:B.lK
n=A.I(B.cY.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.T,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bb2(new A.D(B.fA,A.aL(!1,p,!0,A.p(B.A,C.aXV(m==null?"\ud83d\udc64":A.fy2(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kF,k,B.a7g,k,k)
v=A.a([v,B.ac,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bk,k,k,k,k,k,k,k,k,11.5,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aSt("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dF4(r,a0),r.d===B.w5),1),B.ab,A.E(i.aSt("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dF9(r,a0),r.d===B.a4f),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bI(B.a3,k,k,A.hh(D.bMj,D.fvZ,new C.dFa(r,l.e,a0),A.fx(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cd)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.ue(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aRR("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dW,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aQ
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.I((t?B.br:B.bk).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bk,k,k,k,k,k,k,k,k,11,k,k,B.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wI(r.a,!1)
v.push(A.aG(!1,B.a1,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.v(A.a([t,B.bD,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,14,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bJa],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bm,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dFb(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ah))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.T,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aRQ("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.az,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.br:B.bk,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b_p(r.b.length!==0,B.ms,new C.dFc(r,i,a0),new C.dFd(r,a0),"Upload from gallery","ID photo"))
v.push(i.b_p(r.c.length!==0,D.bCr,new C.dFe(r,i,d,a0),new C.dFf(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Ah.a78("Signature (optional)",t,new C.dFg(a0),new C.dF5(a0,t),new C.dF6(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.br:B.bk
s=(i?B.br:B.bk).j(0.28)
s=A.E(A.dT(E.aQV,new C.dF7(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.tH,k,new A.b7(A.n(10),B.Y),new A.ay(s,1,B.q,-1),k,k,k,k)),1)
t=A.bn(B.cY,k,k,k,B.c,k,B.tH,k,new A.b7(A.n(10),B.Y),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uK,k,k,k),new C.dF8(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.c9(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ag),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vt,B.jk,k,k,360)},
$S:163}
C.dF2.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dF3.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dF4.prototype={
$0(){return this.b.$1(new C.dF1(this.a))},
$S:0}
C.dF1.prototype={
$0(){var w=this.a
w.d=B.w5
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dF9.prototype={
$0(){return this.b.$1(new C.dF0(this.a))},
$S:0}
C.dF0.prototype={
$0(){var w=this.a
w.d=B.a4f
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dFa.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dFb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wM(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dF_(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dF_.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gce(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dFc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.P5(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dEZ(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEZ.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dFd.prototype={
$0(){return this.b.$1(new C.dEY(this.a))},
$S:0}
C.dEY.prototype={
$0(){return this.a.b=""},
$S:0}
C.dFe.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e_:B.c
w=3
return A.b(A.bR(q,null,new C.dEW(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.P5(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dEX(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dEW.prototype={
$1(d){var w=null
return A.bl(!0,A.v(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amN,w,w,w,w,new C.dEQ(d),!1,w,w,w,w,w,w,w,D.fmv,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.amL,w,w,w,w,new C.dER(d),!1,w,w,w,w,w,w,w,D.ftd,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.af,!0,!0)},
$S:26}
C.dEQ.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dER.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dEX.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dFf.prototype={
$0(){return this.b.$1(new C.dEV(this.a))},
$S:0}
C.dEV.prototype={
$0(){return this.a.c=""},
$S:0}
C.dFg.prototype={
$0(){return this.a.$1(new C.dEU())},
$S:0}
C.dEU.prototype={
$0(){},
$S:0}
C.dF5.prototype={
$0(){return this.a.$1(new C.dET(this.b))},
$S:0}
C.dET.prototype={
$0(){return B.d.a9(this.a)},
$S:0}
C.dF6.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahg(u.a,null,null,new C.dES(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dES.prototype={
$4(d,e,f,g){this.a.$1(new C.dEP(this.b,d))},
$S:465}
C.dEP.prototype={
$0(){var w=this.a
B.d.a9(w)
B.d.v(w,this.b)},
$S:0}
C.dF7.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dF8.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.J(x.q).f.U(D.eXf)
return}if(w.a.d==null){w.c.J(x.q).f.U(D.eUb)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dFC.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:96}
C.dFD.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e_:B.c,n=A.n(14),m=A.I((p?B.br:B.bk).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.az,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AC(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.br:B.bk,r,r,r,r,r,r,r,r,13,r,r,B.a5,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yY(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yY(r).length>0?B.bz:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.br:B.bk
t=(q?B.br:B.bk).j(0.28)
s=x.p
return new A.cZ(e,!1,A.av(A.aG(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.O,v,u,B.aB,A.B(A.a([A.E(A.dT(B.nz,new C.dFA(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jE,r,new A.b7(A.n(10),B.Y),new A.ay(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.ftC,new C.dFB(d),A.bn(B.cY,r,r,r,B.c,r,B.jE,r,new A.b7(A.n(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.B9,E.YA,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ah),r,r,r),r)},
$S:31}
C.dFA.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dFB.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dFw.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dFx(r),p=r.a.d.a,o=p?B.e_:B.c,n=A.n(14),m=A.I((p?B.br:B.bk).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.az,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AC(l.c),s,s,s,s,s,s,D.f8w,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iA((r.a.d.a?B.br:B.bk).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_q,"View receipt",new C.dFp(r,d,l))
u=l.x!=null
t=u?B.rh:B.pX
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.brK,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dFq(r,d,l)),q.$3$icon$label$onTap(B.Bq,"Edit",new C.dFr(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.ms,"View / download ID",new C.dFs(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bCq,"View / download selfie",new C.dFt(r,d,l)))
if(l.gaER())p.push(q.$3$icon$label$onTap(A6.a0t,"View / download signature",new C.dFu(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bz,B.e6,"Delete",new C.dFv(r,d,l)))
p.push(B.at)
return A.bl(!0,new A.D(B.vp,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:26}
C.dFx.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.az
else w=d
return A.aL(!1,v,!0,new A.D(B.eQ,A.B(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1920}
C.dFp.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fJ9(w,this.c)},
$S:0}
C.dFq.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.RM(this.c)},
$S:0}
C.dFr.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.D_(this.c)},
$S:0}
C.dFs.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCP(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dFt.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCP(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dFu.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fJe(w,this.c)},
$S:0}
C.dFv.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.NK(0,this.c)},
$S:0}
C.dFE.prototype={
$1(d){return d.x==null},
$S:265}
C.dFF.prototype={
$1(d){return d.x!=null},
$S:265}
C.dFG.prototype={
$2(d,e){return d+e.c},
$S:1921}
C.dFH.prototype={
$0(){return this.a.byL()},
$S:0}
C.dFy.prototype={
$0(){return this.a.ael(this.b)},
$S:0}
C.fsJ.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fsK.prototype={
$0(){return B.d.gI(D.a1F)},
$S:z+68}
C.d5o.prototype={
$0(){var w=this.a
return w.m(new C.d5m(w,this.b))},
$S:0}
C.d5m.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d5n.prototype={
$0(){},
$S:0}
C.d5p.prototype={
$0(){var w=this.a.gbXE()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fuN.prototype={
$1(d){return C.h53(A.a2(d,x.N,x.z))},
$S:z+11}
C.fuO.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fuP.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fHO.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fPY.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fs0.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bN8.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f1(e,v)?v:null},
$S:1922}
C.fIm.prototype={
$1(d){var w=this
return new C.YX(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d63.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d62(w,d))},
$S:z+66}
C.d62.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5S.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cz(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d5P.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d5q.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d5r.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d5T.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d5z.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e_:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.d5x(d),w,w),A.bG(B.wr,new C.d5y(d),A.bn(B.mV,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d5x.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d5y.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d5A.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d5Q.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d5R.prototype={
$0(){return B.d.gI(D.yK)},
$S:z+12}
C.d5v.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyf(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.So(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d5w.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5B.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Yv(v,u,J.ad(w.d),null)},
$S:z+64}
C.d5C.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d61.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aD(s,new C.Yd(r.y,r.gyf(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d6_(r),s,s,s,s,s,s,!1,B.a7)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9r(v,e,w,u,t,r.gbOO(),C.hkh(r.y.Q),r.gyf(0),s)
w=t}return A.c6(q,new C.d60(r,e),new A.D(B.YB,w,s))},
$S:1923}
C.d60.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd_(t).ay){t=this.b
u=x.cy.a(B.d.gd_(u.f.f)).guG(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dp()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fB(v*3.141592653589793*0.5)
return A.ft(B.a3,A.dd(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.d6_.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFY(B.pL,B.iB)},
$S:0}
C.d5M.prototype={
$0(){var w=this.a
return w.m(new C.d5L(w))},
$S:0}
C.d5L.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d5N.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.d5s.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.jV.j(0.5),r=x.p,q=A.a([D.fl7,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cn(p.d)?"Write this book":"Write a new book"
q.push(p.Yv(d,B.dX,w,J.cn(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Yv(d,L.akE,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cz(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cB,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.km.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cB,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.km.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Yv(d,A_.alN,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Yv(d,B.q2,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Yv(d,B.q2,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eJ(u,E.AD,A.bl(!0,new A.D(A5.xH,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ai3,B.d0,u,new A.b7(t,new A.ay(s,1.4,B.q,-1)),u)},
$S:47}
C.d5O.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.d5F.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cz(w.d)
return new C.YZ(v,J.cz(w.d),w.r+1,null)},
$S:z+54}
C.d5G.prototype={
$1(d){var w=null
return A.ok(!1,A.ek(w,w,w,E.AD,new A.ki(this.a,new C.d5E(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:322}
C.d5E.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a6X,B.ok,A.E(A.d(e,w,w,w,w,w,w,B.iM,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:742}
C.d5H.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d5I.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d5J.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5K.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AM(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Rc(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d5D(s,t))
w=4
return A.b(s.kU(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5D.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d5V.prototype={
$1(d){var w=null
return A.ok(!1,A.ek(w,w,w,E.AD,new A.ki(this.a,new C.d5U(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:322}
C.d5U.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a6X,B.ok,A.E(A.d(e,w,w,w,w,w,w,B.iM,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:742}
C.d5W.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d5X.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d5Y.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d5Z.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AM(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kU(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d5t.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bgA(B.pL,U.LW)},
$S:0}
C.d5u.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aFY(B.pL,U.LW)},
$S:0}
C.d7O.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7P.prototype={
$1(d){var w=this.a
return w.m(new C.d7N(w))},
$S:8}
C.d7N.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d7Q.prototype={
$1(d){var w=this.a
return w.m(new C.d7M(w))},
$S:8}
C.d7M.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d7R.prototype={
$1(d){var w=this.a
return w.m(new C.d7L(w))},
$S:8}
C.d7L.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d7S.prototype={
$0(){var w=this.a
return w.m(new C.d7K(w,this.b))},
$S:0}
C.d7K.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d7T.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1b()
A.a6(this.b,!1).O(new A.bo3(w,v))},
$S:0}
C.d6i.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d6h.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.YV(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d6m.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d6l.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b6J(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hE,v,v,v)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.d6j(d),v,v),A.bG(B.wr,new C.d6k(d),A.bn(B.mV,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AD,w,v,v,v,v,D.fk_,v)},
$S:19}
C.d6j.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d6k.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d6n.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d6o.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.c9(A.bY(B.bA,r,B.bq,18,14),B.r,t,B.y,t,D.bsF,t,t,B.ag)},
$S:309}
C.d6g.prototype={
$0(){return this.a.PM(0,this.b)},
$S:0}
C.d6f.prototype={
$0(){return this.a.Pg(0,this.b)},
$S:0}
C.cET.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cEU.prototype={
$0(){return B.d.gI(D.yK)},
$S:z+12}
C.cEV.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bZ(0,new A.D(d,A.c0(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.be),w),0,0,0)},
$S:1925}
C.cYk.prototype={
$1(d){return this.a.m(new C.cYj(this.b,this.c))},
$S:8}
C.cYj.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cYJ.prototype={
$1(d){return this.a.m(new C.cYw())},
$S:2}
C.cYw.prototype={
$0(){},
$S:0}
C.cYK.prototype={
$1(d){return this.a.m(new C.cYv())},
$S:2}
C.cYv.prototype={
$0(){},
$S:0}
C.cYL.prototype={
$0(){var w=this.a
return w.m(new C.cYu(w,this.b))},
$S:0}
C.cYu.prototype={
$0(){var w=this.a
return w.d=w.go4().Fx(this.b.a)},
$S:0}
C.cYM.prototype={
$0(){var w=this.a
return w.m(new C.cYt(w,this.b))},
$S:0}
C.cYt.prototype={
$0(){var w=this.a
return w.d=w.go4().cGk(this.b)},
$S:0}
C.cYN.prototype={
$1(d){return this.a.m(new C.cYs())},
$S:2}
C.cYs.prototype={
$0(){},
$S:0}
C.cYO.prototype={
$0(){var w=this.a
return w.m(new C.cYr(w,this.b))},
$S:0}
C.cYr.prototype={
$0(){var w=this.a
return w.d=w.go4().cGp(this.b.a)},
$S:0}
C.cYP.prototype={
$1(d){var w=this.a
return w.m(new C.cYE(w,d))},
$S:6}
C.cYE.prototype={
$0(){var w=this.a
return w.d=w.go4().cHj(this.b)},
$S:0}
C.cYQ.prototype={
$1(d){var w=this.a
return w.d=w.go4().aD5(d)},
$S:2}
C.cYR.prototype={
$1(d){var w=this.a
return w.d=w.go4().cGs(d)},
$S:2}
C.cYT.prototype={
$1(d){var w=this.a
return w.d=w.go4().cHh(d)},
$S:2}
C.cYU.prototype={
$1(d){var w=this.a
return w.m(new C.cYD(w,d))},
$S:8}
C.cYD.prototype={
$0(){var w=this.a
return w.d=w.go4().cH8(this.b)},
$S:0}
C.cYV.prototype={
$0(){var w=this.a,v=w.go4(),u=B.a.i(w.gyf(0).a.a),t=B.a.i(w.gaAi().a.a)
u=v.bbj(B.a.i(w.gaq4().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.dTy.prototype={
$0(){var w=this.a
w.vN()
w.a.br()
w.a.pR()},
$S:0}
C.dTx.prototype={
$0(){var w=this.a
w.vN()
w.a.br()
w.a.pR()},
$S:0}
C.dTA.prototype={
$0(){var w=this,v=w.b
if(J.cz(v)||J.cn(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dTB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dTC.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dTw.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dTz.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dTE.prototype={
$0(){this.a.Of()
return null},
$S:0}
C.dTD.prototype={
$0(){return this.a.En(this.b)},
$S:0}
C.dSZ.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.de,w,w,!0,w,w,new C.dSX(d),w,w),r=A.bn(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dSY(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dSX.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dSY.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dT_.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cGO(this.b)},
$S:0}
C.dSU.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aS5(w.b,w.c,w.d)},
$S:9}
C.dSs.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dSt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSH.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gj(t.a.c),$async$$0)
case 2:s=r.rd(q.dH(e,new C.dSF(t)))
if(s!=null&&t.c!=null)t.m(new C.dSG(t,s))
t.a.br()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSF.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSI.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dST.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cHB(C.hkr(w),w)},
$S:0}
C.dSR.prototype={
$1(d){return new A.e0(new C.dSQ(this.a,this.b),null)},
$S:21}
C.dSQ.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.e_:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.br:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.amq,v,v,v,p>0?new C.dSM(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aP,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.amZ,v,v,v,new C.dSN(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSO(d),v,v),A.bG(B.pj,new C.dSP(d),A.bn(B.bU,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:167}
C.dSM.prototype={
$0(){return this.b.$1(new C.dSL(this.a))},
$S:0}
C.dSL.prototype={
$0(){return--this.a.a},
$S:0}
C.dSN.prototype={
$0(){return this.b.$1(new C.dSK(this.a))},
$S:0}
C.dSK.prototype={
$0(){return++this.a.a},
$S:0}
C.dSO.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dSP.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dSS.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cHo(this.a.a)
w.r.a9(0)},
$S:0}
C.dSg.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aho(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.he6(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dSh.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aD2(w)},
$S:0}
C.dT1.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acK(this.b,w,this.c,null)},
$S:z+24}
C.dSW.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e_:B.c,t=A.n(20),s=A.X(B.ln,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bG(D.fuN,new C.dSV(d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b8,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dSV.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dSi.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dSj.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dSk.prototype={
$1(d){return d.a},
$S:z+7}
C.dSl.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hX(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aD2(w)},
$S:0}
C.dSp.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aho(q)
w=A.U(q).k("a_<1>")
q=A.C(new A.a_(q,new C.dSn(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.he6(v.e,null,r,v.f,v.r,new C.dSo(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dSo.prototype={
$0(){return this.a.a9r(this.b)},
$S:0}
C.dSn.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dSq.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("M<1,hX>")
w=A.C(new A.M(w,new C.dSm(this.b),v),v.k("ak.E"))
u.d=t.aD2(w)},
$S:0}
C.dSm.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dT0.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dSC.prototype={
$1(d){return d.length!==0},
$S:3}
C.dSD.prototype={
$1(d){var w=this
return new A.e0(new C.dSB(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dSB.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e_:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.az,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bk,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.br:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.M(o,new C.dSx(u,e,o),A.U(o).k("M<1,r>")))
p.push(B.O)
u=w.d
p.push(A.aM(v,B.T,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(12),B.dg),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.m5,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.ek(A.a([A.bK(!1,B.de,v,v,!0,v,v,new C.dSy(d),v,v),A.bG(B.Jg,new C.dSz(t,u,o,e),A.bn(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fi8,new C.dSA(t,u,o,d),A.bn(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:167}
C.dSx.prototype={
$1(d){var w=null
return A.dL(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.az,w,w,w,w,w,w,w,w,w,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bPT,w,w,w,new C.dSw(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1926}
C.dSw.prototype={
$0(){return this.a.$1(new C.dSu(this.b,this.c))},
$S:0}
C.dSu.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dSy.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dSz.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dSv(w.c,u))
v.bO(0,B.c8)}},
$S:0}
C.dSv.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dSA.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.dSE.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cI2(this.b,D.tO,C.Gh(v,w.a.c))},
$S:0}
C.dT8.prototype={
$1(d){return d.as},
$S:z+1}
C.dT9.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iQ(this.b,w)},
$S:0}
C.dTa.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i8u(v)
return w.Vs(v==null?null:v.a)},
$S:0}
C.dTb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hLK(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gco(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cpW(new A.ar(u,t),v.gbhr(),new A.ar(k,s))}k=A.n(22)
s=this.b.a
r=s?D.cOq:D.cMP
q=A.I(s?B.dr:D.baU,B.q,1)
p=A.n(22)
o=A.bZ(0,A.b3(m,m,m,new C.bcP(s,m),B.au),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.W,m,B.aa,B.r,A.a([o,A.bZ(0,A.un(new A.Q(n,n,n,n),new A.a7(u,t,new C.bdI(l.d,v,l.f,w,new C.dT4(l),l.gc9V(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bv7(s,new C.dT5(l,e),new C.dT6(l,e),new C.dT7(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b_,B.b4,B.x,r,m,m),B.n),m,m,m,A0.ah9,m,m,m,m)},
$S:219}
C.dT4.prototype={
$1(d){var w=this.a
w.m(new C.dT2(w,d))},
$S:2}
C.dT2.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.L(0,v)},
$S:0}
C.dT5.prototype={
$0(){var w=this.b
return this.a.b8Y(1.25,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dT6.prototype={
$0(){var w=this.b
return this.a.b8Y(0.8,new A.ar(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dT7.prototype={
$0(){var w=this,v=w.b
return w.a.aS5(new A.ar(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.ar(w.c,w.d),w.e.gbhr())},
$S:0}
C.dTc.prototype={
$0(){var w=this.a
return w.m(new C.dT3(w))},
$S:0}
C.dT3.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dSr.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fK(new A.fD(s.c)),$async$$0)
case 2:t.xI("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6s.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhq(u,C.how(v.c,u),new C.d6r(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d6r.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d6t.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bkM(d.d,d.c,u.f.t(0,d.a),new C.d6q(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d6q.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fsN.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.rd(new A.cQ(new A.a_(v,new C.fsO(d),w.k("a_<1>")),new C.fsP(),w.k("cQ<1,m>")))},
$S:z+20}
C.fsO.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fsP.prototype={
$1(d){return d.a},
$S:z+7}
C.fsL.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fsM.prototype={
$1(d){return d.b},
$S:z+7}
C.fsS.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.U(v)
return A.rd(new A.cQ(new A.a_(v,new C.fsT(d),w.k("a_<1>")),new C.fsU(),w.k("cQ<1,m>")))},
$S:z+20}
C.fsT.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fsU.prototype={
$1(d){return d.a},
$S:z+7}
C.fsQ.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.L(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fsR.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d6v.prototype={
$0(){return this.a},
$S:z+32}
C.d6M.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:271}
C.d6E.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d6F()),v=J.a5(w)
if(!v.t(w,e))v.L(w,e)},
$S:113}
C.d6F.prototype={
$0(){return A.a([],x.s)},
$S:743}
C.d6D.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f1(w,e)
return w===!0},
$S:284}
C.d6w.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d6C.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d6B.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.L(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.Ca:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gR(v)
if(e.t(0,t))continue
e.L(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.Ca:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1928}
C.d6x.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d6G.prototype={
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
t=J.aV(t==null?D.Ca:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.b5(w,new C.d6H(r)))w.push(r)}}B.d.bp(w,new C.d6I(a8))
B.d.b2(w,new C.d6J())
q=C.hLJ(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eyu],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bnO(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1929}
C.d6H.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d6I.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d6J.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d6K.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a5(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cI(0,0,B.pq)+88-w.gI(n).a}else u=0
for(w=J.a5(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:654}
C.d6L.prototype={
$1(d){return 16+d*156},
$S:252}
C.d6u.prototype={
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
$S:193}
C.d6y.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIh(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:113}
C.d6z.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d6A.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:744}
C.d6N.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:744}
C.d6O.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:388}
C.d6P.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:198}
C.d6Q.prototype={
$1(d){return d>=0.5},
$S:120}
C.far.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.hs(A.aL(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.cx,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1931}
C.eMm.prototype={
$1(d){var w=null,v=A.n(8),u=B.bU.j(0.12),t=A.n(8)
return new A.D(B.nb,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f4f,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Ms,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eMl(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eMl.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dmF.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dmE.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nw,B.L,w,w)
return A.ek(A.a([A.bK(!1,B.de,w,w,!0,w,w,new C.dmC(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mh,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dmD(d),w,w)],x.p),B.b8,B.AZ,w,u,D.btU,w,D.bvQ,new A.b7(v,B.Y),w,w)},
$S:19}
C.dmC.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dmD.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dmO.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dmP.prototype={
$1(d){var w=this.a
return w.m(new C.dmN(w,d))},
$S:z+37}
C.dmN.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmQ.prototype={
$1(d){var w=null
return A.qi(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmT.prototype={
$1(d){var w=this.a
return w.m(new C.dmM(w,d))},
$S:33}
C.dmM.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dmS.prototype={
$1(d){var w=null
return A.qi(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dmU.prototype={
$1(d){var w=this.a
return w.m(new C.dmL(w,d))},
$S:33}
C.dmL.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dmV.prototype={
$0(){var w=this.a
return w.m(new C.dmK(w))},
$S:0}
C.dmK.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dmW.prototype={
$0(){var w=this.a
return w.m(new C.dmJ(w))},
$S:0}
C.dmJ.prototype={
$0(){return++this.a.at},
$S:0}
C.dmX.prototype={
$0(){var w=this.a
return w.m(new C.dmI(w))},
$S:0}
C.dmI.prototype={
$0(){return--this.a.ax},
$S:0}
C.dmY.prototype={
$0(){var w=this.a
return w.m(new C.dmH(w))},
$S:0}
C.dmH.prototype={
$0(){return++this.a.ax},
$S:0}
C.dmZ.prototype={
$1(d){var w=this.a
return w.m(new C.dmG(w,d))},
$S:8}
C.dmG.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dmR.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dn_.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bU.j(0.18)
else w=q.c.a?B.e_:B.c
v=A.n(12)
if(p)u=B.bU
else u=(q.c.a?B.e1:B.bN).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bU
else t=q.c.a?B.br:B.bk
t=A.X(f,t,r,r,r,18)
if(p)s=B.bU
else s=q.c.a?B.br:B.bk
return A.E(A.aG(!1,B.a1,!0,r,A.aL(!1,o,!0,A.df(r,A.v(A.a([t,B.at,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eG,r,r,r,B.jE,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dn0(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
$S:z+39}
C.dn0.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dn9.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.c7R.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:93}
C.c7Y.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c7Z.prototype={
$2(d,e){var w=J.b6(e,new C.c7X(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c7X.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c7T.prototype={
$1(d){return C.akf(A.a2(d,x.N,x.z))},
$S:z+8}
C.c7U.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c7V.prototype={
$1(d){return C.h53(A.a2(d,x.N,x.z))},
$S:z+11}
C.c7W.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c82.prototype={
$1(d){return new A.aFm(d.f.length,d.a,d.b)},
$S:z+43}
C.c83.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:565}
C.c8_.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c80.prototype={
$1(d){return d.cH0(C.Gh(d,this.a))},
$S:z+44}
C.dTl.prototype={
$1(d){return C.tV(d,this.a.a.c)},
$S:z+2}
C.dTm.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dTq.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dTr.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dTi.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZo(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yg("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p3(r.c,r.e),$async$$0)
case 4:s.yg(p)
w=5
return A.b(s.Jl(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTj.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZo(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yg("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p3(r.c,r.e),$async$$0)
case 4:s.yg(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTk.prototype={
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
break}if(q==null){o.yg("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yg("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yg("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Jl(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.yg(B.a.eg(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dTp.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZn(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yg("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cl(A.e8(new C.dTo(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p3(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dTo.prototype={
$1(d){var w=this.b
return new C.ZU(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dTn.prototype={
$1(d){return D.fY8},
$S:z+46}
C.dTt.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dTu.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dTs(w,d)
return new A.D(B.da,new C.bdM(this.b,d.c,d.a,w,null),null)},
$S:1932}
C.dTs.prototype={
$0(){return this.a.Xa(this.b.b)},
$S:0}
C.dTd.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dTe.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dTf.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dTg.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dTh.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dTv.prototype={
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
$S:189}
C.dEH.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dEI.prototype={
$0(){return B.d.gI(D.a38)},
$S:z+48}
C.dEJ.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.X(this.b.d,B.c.j(0.95),w,w,D.cUB,44),w,w,w),w,w,new C.biy(u,t,v,w),B.au)},
$S:67}
C.fIP.prototype={
$1(d){return A.oO(new C.fIO(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:140}
C.fIO.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e_:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rB,24)],x.V),o=r?B.e1:B.bN
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bU.j(0.18)],x.O)
w=A.p(t,D.bKp,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a8(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.az,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.D(E.ai8,A.B(A.a([w,B.bd,A.E(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.br:B.bk,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.ig(!0,t,e,B.y,D.eSo,new C.fIN(this.b,s),20,B.ahJ,t,B.ag,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kK,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:115}
C.fIN.prototype={
$2(d,e){var w=null,v=D.a38[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.I(s?B.e1:B.bN,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.em,8)],x.V),p=A.n(15),o=A.E(new C.a5N(v.a,!0,w),1),n=s?B.jA:B.iT,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.az,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a1,!0,w,A.aL(!1,u,!0,A.eF(A.bw(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.br:B.bk,w,w,w,w,w,w,w,w,10,w,w,B.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.lj,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fIM(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)},
$S:74}
C.fIM.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cfx.prototype={
$0(){return this.a.afo(this.b)},
$S:0}
C.fIb.prototype={
$1(d){return D.fUp},
$S:z+74}
C.fPF.prototype={
$1(d){var w=this
return new C.a0F(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fIg.prototype={
$1(d){return new C.Yx(this.a,null)},
$S:z+51}
C.fIf.prototype={
$1(d){return D.fVo},
$S:z+52}
C.cZ6.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZ7.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cZ5(w,d))},
$S:33}
C.cZ5.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cZ8.prototype={
$1(d){return this.a.JV()},
$S:2}
C.cZ9.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZ2.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cZ3.prototype={
$1(d){return this.a.JV()},
$S:2}
C.cZ4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cwG.prototype={
$0(){},
$S:0}
C.cwM.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cwN.prototype={
$0(){return this.a.aNx(-1)},
$S:0}
C.cwO.prototype={
$1(d){return this.a.m(new C.cwL())},
$S:2}
C.cwL.prototype={
$0(){},
$S:0}
C.cwP.prototype={
$0(){return this.a.aNx(1)},
$S:0}
C.cwQ.prototype={
$1(d){return this.a.m(new C.cwK())},
$S:2}
C.cwK.prototype={
$0(){},
$S:0}
C.cwR.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e1:B.bN
return A.ud(u,u,B.aZ,r,u,new C.cwJ(t,d),B.Ba,s,w,u,new A.ay(v,1,B.q,-1),B.cd)},
$S:1933}
C.cwJ.prototype={
$1(d){var w=this.a
return w.m(new C.cwH(w,this.b))},
$S:8}
C.cwH.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cwS.prototype={
$1(d){return this.a.m(new C.cwI())},
$S:2}
C.cwI.prototype={
$0(){},
$S:0}
C.cwT.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.f9U.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.f9V.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.f9W.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.f9S.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbxU()
w=w.e
s=A.n(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bvP,new A.ev(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.buX(p,v,this.b.a,u,t,r),r,r,B.au)},
$S:67}
C.f9T.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dC.az(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.aq(B.aV,B.bU,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aG(!1,B.a1,!0,p,A.aL(!1,v,!0,A.eF(D.e89,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.db(-1.2+t,-0.5),new A.db(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
$S:143}
C.fGQ.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:70}
C.eJw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eJn.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eJo.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eJu.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eJt(w,this.b),null)},
$S:21}
C.eJt.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e_:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.az,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eJ(w,u,new A.D(B.ai1,A.v(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.br:B.bk,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.haU(new C.eJq(r,e),r.a),B.aB,A.B(A.a([A.E(A.dT(B.de,new C.eJr(d),w),1),B.av,A.E(A.bG(B.TY,new C.eJs(r,d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d0,w,new A.b7(t,B.Y),w)},
$S:99}
C.eJq.prototype={
$1(d){return this.b.$1(new C.eJp(this.a,d))},
$S:33}
C.eJp.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eJr.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJs.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eJv.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Sr(this.b)},
$S:0}
C.eJi.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.baS(w)},
$S:0}
C.eJm.prototype={
$1(d){return this.bk_(d)},
bk_(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.L0(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iQ(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eJl.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a_<1>")
w=A.C(new A.a_(w,new C.eJk(this.b),v),v.k("J.E"))
u.d=t.baS(w)},
$S:0}
C.eJk.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eJx.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iQ(this.b,w)},
$S:0}
C.eJy.prototype={
$1(d){return this.a.bBZ(d,this.b)},
$S:z+55}
C.eJj.prototype={
$0(){return this.a.a9q(this.b)},
$S:0}
C.fPv.prototype={
$1(d){return new C.ad4(this.a,this.b,this.c,null)},
$S:z+56}
C.eJA.prototype={
$0(){return this.a.ZR(this.b)},
$S:0}
C.eJB.prototype={
$0(){return this.a.PI(this.b)},
$S:0}
C.eJC.prototype={
$0(){return this.a.Ei(this.b)},
$S:0}
C.eJD.prototype={
$0(){return this.a.ZS(this.b)},
$S:0}
C.eJz.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eJe.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eJf.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eJh.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pX(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eJg(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJg.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eK_.prototype={
$2(d,e){return d+e.gwR()},
$S:z+59}
C.eJW.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eJX.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eJH.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e_:B.c,s=A.n(24),r=A.p(v,D.bKP,B.f,v,v,new A.o(B.ay.j(u?0.18:0.08),v,A.I(B.ay.j(0.28),B.q,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.az,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.br:B.bk,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aQ:B.az
u=u?B.e1:B.bN
w=x.p
return A.eJ(v,t,new A.D(B.xL,A.v(A.a([r,B.aP,q,B.O,p,B.d7,A.B(A.a([A.E(A.dT(B.nz,new C.eJF(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.f9,v,new A.b7(A.n(14),B.Y),new A.ay(u,1,B.q,-1),v,v,v,v)),1),B.av,A.E(A.bG(D.fyw,new C.eJG(d),A.bn(B.ay,v,v,v,v,v,B.f9,v,new A.b7(A.n(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d0,v,new A.b7(s,B.Y),v)},
$S:47}
C.eJF.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eJG.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eJQ.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e_:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fN,28)],x.V),g=k?D.d0a:B.a2t,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eMy,B.at,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ai5,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bk,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b46(B.b6,B.iZ,new C.eJN(v,d),l,"Camera import","Scan QR"),1),B.av,A.E(v.b46(B.cA,M.yp,new C.eJO(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bk,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.ay.j(k?0.14:0.06)
q=A.n(16)
p=A.I(B.ay.j(0.28),B.q,1)
o=A.p(m,D.bKd,B.f,m,m,new A.o(B.ay.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.az,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.br:B.bk,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bl(!0,new A.D(B.vr,A.p(m,A.v(A.a([g,new A.D(B.ai2,A.v(A.a([w,B.S,u,B.by,t,B.S,A.aG(!1,B.a1,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.bd,n,A.X(B.ey,k?B.br:B.bk,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eJP(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:26}
C.eJN.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vn("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJO.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.vn("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJP.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Nx(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJL.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e_:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eU,24)],x.V),k=o?B.e1:B.bN
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.br:B.bk
u=A.bw(w,new A.a7(48,48,C.aPz(!0,A.n(12),48,N.N2,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.az,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AC(v.gwR())
s=x.p
r=this.a
return A.bl(!0,new A.D(B.vr,A.p(q,A.v(A.a([B.S,k,new A.D(D.ai_,A.B(A.a([u,B.bd,A.E(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.br:B.bk,q,q,q,q,q,q,q,q,12,q,q,B.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.AQ,r.ck3(B.u6,B.aV,new C.eJJ(d),p,"QR code or backup file","Transfer project"),r.b13(!0,B.e6,B.ay,new C.eJK(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:26}
C.eJJ.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eJK.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eJM.prototype={
$1(d){return this.bk0(d)},
bk0(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.L0(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vB(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eK2.prototype={
$0(){var w=this.a
w.a.br()
w.m(new C.eK1(w))},
$S:0}
C.eK1.prototype={
$0(){return this.a.r++},
$S:0}
C.eK3.prototype={
$0(){var w=this.a
return w.m(new C.eK0(w))},
$S:0}
C.eK0.prototype={
$0(){return this.a.r++},
$S:0}
C.eJE.prototype={
$0(){var w=this.a.c
w.toString
return A.iQ(w,null)},
$S:0}
C.eJI.prototype={
$0(){return this.a.cdp(this.b)},
$S:0}
C.eJZ.prototype={
$0(){var w=this.a
return w.m(new C.eJY(w,this.b))},
$S:0}
C.eJY.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eJT.prototype={
$0(){return this.a.vn("scan")},
$S:0}
C.eJU.prototype={
$0(){return this.a.vn("file")},
$S:0}
C.eJV.prototype={
$1(d){return this.a.ck4(d,this.b)},
$S:z+60}
C.eJS.prototype={
$0(){return this.a.Em(this.b)},
$S:0}
C.eJR.prototype={
$0(){return this.a.a_m(this.b,this.c)},
$S:0}
C.cw7.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cw6.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cw4.prototype={
$1(d){return C.huj(A.a2(d,x.N,x.z))},
$S:z+63}
C.cw5.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.frT.prototype={
$1(d){return d.y===D.kt},
$S:z+2}
C.fQ5.prototype={
$1(d){return C.bAK(d,this.a)},
$S:z+2}
C.fq8.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bNd.prototype={
$1(d){return!d.as},
$S:z+1}
C.bNc.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bN9.prototype={
$1(d){return C.h54(A.a2(d,x.N,x.z))},
$S:z+14}
C.bNa.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bNb.prototype={
$1(d){return J.k(d)},
$S:17}
C.fhw.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fdc.prototype={
$1(d){return C.fWt(A.a2(d,x.N,x.z))},
$S:z+67}
C.fdd.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fde.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fI2.prototype={
$1(d){return J.k(d)},
$S:17}
C.fI3.prototype={
$1(d){return d.a},
$S:z+69}
C.fI4.prototype={
$1(d){return d.length!==0},
$S:3}
C.fI5.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fI6.prototype={
$1(d){return d.Sr(null).ag()},
$S:z+70}
C.fQ3.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fsk.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fuT.prototype={
$1(d){return C.akf(A.a2(d,x.N,x.z))},
$S:z+8}
C.fuU.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fuV.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fuW.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fuX.prototype={
$1(d){return C.tV(d,this.a)},
$S:z+2}
C.fHQ.prototype={
$1(d){return C.tV(d,this.a)},
$S:z+2}
C.fPZ.prototype={
$1(d){return C.akf(A.a2(d,x.N,x.z))},
$S:z+8}
C.fQ_.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fQ0.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fs1.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fs2.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fQa.prototype={
$1(d){return!d.as},
$S:z+1}
C.fry.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.frz.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.frA.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fPG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fvF.prototype={
$1(d){return d.Q},
$S:z+72}
C.fHJ.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fuQ.prototype={
$1(d){return C.akf(A.a2(d,x.N,x.z))},
$S:z+8}
C.fuR.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fuS.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fHE.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fdK.prototype={
$1(d){return d.length!==0},
$S:3}
C.fdL.prototype={
$1(d){return C.h54(A.a2(d,x.N,x.z))},
$S:z+14}
C.fdM.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fdN.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fdO.prototype={
$1(d){return d.length!==0},
$S:3}
C.fe0.prototype={
$2(d,e){return d.eL(new C.fe1(e))},
$S:1934}
C.fe1.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.ca},
$S:1935}
C.fdY.prototype={
$1(d){return C.hQp(d,this.a)},
$S:z+73}
C.fdZ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fe_.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fia.prototype={
$1(d){return d.a},
$S:z+49}
C.fib.prototype={
$1(d){return d.length!==0},
$S:3}
C.fic.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fkC.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fps.prototype={
$1(d){return C.hgq(d,C.Gh(d,this.a))},
$S:z+5}
C.fpt.prototype={
$1(d){return C.hgr(d,C.Gh(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKD.prototype
w.bu5=w.q
w=C.aMO.prototype
w.bwt=w.q
w=C.aMP.prototype
w.bwu=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aC7.prototype,"gch0","ch1",25)
var s
w(s=C.azb.prototype,"gca0","ca1",42)
v(s,"gaLN","N5",0)
v(s,"gcph","AH",0)
v(s,"gbJI","NL",0)
v(s,"gcDd","yh",0)
v(s,"gcj1","a03",0)
v(s,"gbF6","Nt",0)
v(s,"gbK8","WC",0)
w(s,"gbOO","bOP",71)
v(s,"gbzy","zK",0)
v(C.azc.prototype,"gcD9","Fd",0)
v(s=C.aCI.prototype,"gaf0","vC",0)
v(s,"gccF","a_d",0)
v(s,"gaPP","HK",0)
v(s=C.aCF.prototype,"gczn","a28",0)
v(s,"gaf0","vC",0)
v(s,"gcnk","a0J",0)
v(s,"gcdC","a_r",0)
w(s,"gc9V","c9W",30)
v(s,"gbK_","HP",0)
v(s,"gcAn","cAo",3)
v(s,"gc0s","Yh",0)
w(s,"gc8p","c8q",23)
v(s,"gccp","ccq",3)
v(s=C.aB6.prototype,"gc6d","Ph",0)
v(s,"gc6f","c6g",3)
v(s,"gbGE","a92",0)
v(s=C.aCH.prototype,"gbNi","X6",0)
v(s,"gbXL","XL",0)
v(s,"gctI","a1z",0)
v(s,"gcpR","a1a",0)
v(C.aCG.prototype,"gcpz","agL",0)
v(C.arT.prototype,"gc8n","ZQ",0)
v(C.axX.prototype,"ga1T","JV",3)
v(C.axW.prototype,"ga1T","JV",3)
v(C.awG.prototype,"ga1T","JV",3)
v(s=C.aEc.prototype,"gb0s","Qc",0)
v(s,"gbym","Vm",0)
v(s,"gcdq","cdr",3)
w(C.aEb.prototype,"gc9f","c9g",57)
u(C.aEd.prototype,"gaPJ",0,0,null,["$1","$0"],["HJ","bHV"],58,0,0)
t(C,"hnI","i_6",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.anL,C.ua,C.nc,C.Hm,C.aei,C.JG,C.ub,C.JO,C.Fy,C.bdK,C.aIh,C.aoX,C.d6R,C.lA,C.aSu,C.aSt,C.aQv,C.tJ,C.qW,C.li,C.hX,C.kD,C.aGg])
u(A.hV,[C.fzv,C.fzu,C.fzw,C.fII,C.fok,C.fol,C.foq,C.fxe,C.fxd,C.fxc,C.c1j,C.fJd,C.fJ5,C.fJh,C.fs9,C.dFn,C.dFi,C.dFj,C.dEW,C.dES,C.dFC,C.dFD,C.dFw,C.dFx,C.dFE,C.dFF,C.fsJ,C.fuN,C.fuO,C.fHO,C.fPY,C.fs0,C.fIm,C.d63,C.d5q,C.d5z,C.d5Q,C.d5v,C.d5B,C.d5s,C.d5F,C.d5G,C.d5E,C.d5V,C.d5U,C.d7P,C.d7Q,C.d7R,C.d6h,C.d6m,C.d6l,C.cET,C.cEV,C.cYk,C.cYJ,C.cYK,C.cYN,C.cYP,C.cYQ,C.cYR,C.cYT,C.cYU,C.dTz,C.dSZ,C.dSU,C.dSs,C.dSF,C.dSI,C.dSR,C.dSg,C.dT1,C.dSW,C.dSi,C.dSj,C.dSk,C.dSp,C.dSn,C.dSm,C.dSC,C.dSD,C.dSx,C.dT8,C.dT4,C.d6s,C.d6t,C.fsN,C.fsO,C.fsP,C.fsL,C.fsM,C.fsS,C.fsT,C.fsU,C.fsQ,C.fsR,C.d6M,C.d6C,C.d6x,C.d6H,C.d6I,C.d6L,C.d6z,C.d6O,C.d6P,C.d6Q,C.far,C.eMm,C.dmE,C.dmO,C.dmP,C.dmQ,C.dmT,C.dmS,C.dmU,C.dmZ,C.dn_,C.c7Y,C.c7X,C.c7T,C.c7U,C.c7V,C.c7W,C.c82,C.c8_,C.c80,C.dTl,C.dTo,C.dTn,C.dTu,C.dTv,C.dEH,C.fIP,C.fIb,C.fPF,C.fIg,C.fIf,C.cZ7,C.cZ8,C.cZ3,C.cwO,C.cwQ,C.cwR,C.cwJ,C.cwS,C.f9U,C.fGQ,C.eJu,C.eJq,C.eJm,C.eJk,C.eJy,C.fPv,C.eJH,C.eJQ,C.eJL,C.eJM,C.eJV,C.cw6,C.cw4,C.cw5,C.frT,C.fQ5,C.fq8,C.bNd,C.bNc,C.bN9,C.bNa,C.bNb,C.fdc,C.fdd,C.fI2,C.fI3,C.fI4,C.fI5,C.fI6,C.fQ3,C.fsk,C.fuT,C.fuU,C.fuW,C.fuX,C.fHQ,C.fPZ,C.fQ_,C.fQ0,C.fs1,C.fs2,C.fQa,C.fry,C.frz,C.fPG,C.fvF,C.fHJ,C.fuQ,C.fuR,C.fHE,C.fdK,C.fdL,C.fdM,C.fdN,C.fdO,C.fe1,C.fdY,C.fdZ,C.fia,C.fib,C.fkC,C.fps,C.fpt])
u(A.au,[C.aXW,C.akd,C.aTJ,C.Yd,C.b9r,C.bdI,C.bhq,C.bv7,C.bkM,C.acJ,C.bhp,C.acI,C.bho,C.aB7,C.aHj,C.acK,C.JC,C.bdJ,C.ac_,C.bdH,C.bdM,C.aXU,C.arT,C.ad4])
u(A.mN,[C.ba2,C.bbf,C.bb6,C.aGb,C.bgt,C.bdL,C.bcP,C.biy,C.buX])
u(A.j9,[C.fJa,C.fJb,C.fJc,C.fJ3,C.fJ4,C.fJf,C.fJg,C.dFz,C.dFl,C.dFo,C.dF2,C.dF3,C.dF4,C.dF1,C.dF9,C.dF0,C.dFa,C.dFb,C.dF_,C.dFc,C.dEZ,C.dFd,C.dEY,C.dFe,C.dEQ,C.dER,C.dEX,C.dFf,C.dEV,C.dFg,C.dEU,C.dF5,C.dET,C.dF6,C.dEP,C.dF7,C.dF8,C.dFA,C.dFB,C.dFp,C.dFq,C.dFr,C.dFs,C.dFt,C.dFu,C.dFv,C.dFH,C.dFy,C.fsK,C.d5o,C.d5m,C.d5n,C.d5p,C.d62,C.d5S,C.d5P,C.d5r,C.d5T,C.d5x,C.d5y,C.d5A,C.d5R,C.d5w,C.d5C,C.d6_,C.d5M,C.d5L,C.d5N,C.d5O,C.d5H,C.d5J,C.d5K,C.d5D,C.d5W,C.d5Z,C.d5t,C.d5u,C.d7O,C.d7N,C.d7M,C.d7L,C.d7S,C.d7K,C.d7T,C.d6i,C.d6j,C.d6k,C.d6n,C.d6g,C.d6f,C.cEU,C.cYj,C.cYw,C.cYv,C.cYL,C.cYu,C.cYM,C.cYt,C.cYs,C.cYO,C.cYr,C.cYE,C.cYD,C.cYV,C.dTy,C.dTx,C.dTA,C.dTB,C.dTC,C.dTw,C.dTE,C.dTD,C.dSX,C.dSY,C.dT_,C.dSt,C.dSH,C.dSG,C.dSJ,C.dST,C.dSM,C.dSL,C.dSN,C.dSK,C.dSO,C.dSP,C.dSS,C.dSh,C.dSV,C.dSl,C.dSo,C.dSq,C.dT0,C.dSw,C.dSu,C.dSy,C.dSz,C.dSv,C.dSA,C.dSE,C.dT9,C.dTa,C.dT2,C.dT5,C.dT6,C.dT7,C.dTc,C.dT3,C.dSr,C.d6r,C.d6q,C.d6v,C.d6F,C.d6w,C.eMl,C.dmF,C.dmC,C.dmD,C.dmN,C.dmM,C.dmL,C.dmV,C.dmK,C.dmW,C.dmJ,C.dmX,C.dmI,C.dmY,C.dmH,C.dmG,C.dmR,C.dn0,C.dn9,C.dTm,C.dTq,C.dTr,C.dTi,C.dTj,C.dTk,C.dTp,C.dTt,C.dTs,C.dTd,C.dTe,C.dTf,C.dTg,C.dTh,C.dEI,C.fIM,C.cfx,C.cZ6,C.cZ5,C.cZ9,C.cZ2,C.cZ4,C.cwG,C.cwM,C.cwN,C.cwL,C.cwP,C.cwK,C.cwH,C.cwI,C.cwT,C.f9V,C.f9W,C.eJw,C.eJn,C.eJo,C.eJp,C.eJr,C.eJs,C.eJv,C.eJi,C.eJl,C.eJx,C.eJj,C.eJA,C.eJB,C.eJC,C.eJD,C.eJz,C.eJd,C.eJe,C.eJf,C.eJh,C.eJg,C.eJW,C.eJX,C.eJF,C.eJG,C.eJN,C.eJO,C.eJP,C.eJJ,C.eJK,C.eK2,C.eK1,C.eK3,C.eK0,C.eJE,C.eJI,C.eJZ,C.eJY,C.eJT,C.eJU,C.eJS,C.eJR])
u(A.ag,[C.anS,C.So,C.YV,C.YZ,C.YX,C.Yv,C.ap_,C.aoU,C.Zy,C.aoY,C.ZU,C.ZV,C.a5N,C.Yx,C.Yw,C.Y4,C.a0F,C.Fl,C.awz,C.arS,C.arM,C.arR,C.NQ])
u(A.ah,[C.aC7,C.bdF,C.azb,C.be_,C.azc,C.bbd,C.aCI,C.aCF,C.aB6,C.aCH,C.aCG,C.biT,C.aKD,C.axX,C.axW,C.awG,C.bv_,C.aMO,C.aMP,C.aEc,C.bkf,C.aEb,C.bwL])
u(A.kk,[C.dFk,C.dFm,C.dFh,C.dFG,C.fuP,C.bN8,C.d61,C.d60,C.d5I,C.d5X,C.d5Y,C.d6o,C.dSQ,C.dSB,C.dTb,C.d6E,C.d6D,C.d6B,C.d6G,C.d6J,C.d6K,C.d6u,C.d6y,C.d6A,C.d6N,C.c7R,C.c7Z,C.c83,C.dEJ,C.fIO,C.fIN,C.f9S,C.f9T,C.eJt,C.eK_,C.cw7,C.fhw,C.fde,C.fuV,C.frA,C.fuS,C.fe0,C.fe_,C.fic])
t(C.biz,C.aKD)
u(A.mb,[C.ab2,C.aIZ,C.Hn,C.ake,C.cw8,C.cw9])
t(C.buY,C.aMO)
t(C.buZ,C.aMP)
t(C.aEd,C.bwL)
t(C.b7U,A.b7I)
t(C.bv0,A.a5s)
t(C.b7T,C.bv0)
w(C.aKD,A.eR)
w(C.aMO,A.ca)
w(C.aMP,A.ca)
v(C.bwL,A.ey)
v(C.bv0,A.j3)})()
A.jY(b.typeUniverse,JSON.parse('{"aXW":{"au":[],"r":[]},"ba2":{"aB":[]},"anS":{"ag":[],"r":[]},"aC7":{"ah":["anS"]},"So":{"ag":[],"r":[]},"akd":{"au":[],"r":[]},"aTJ":{"au":[],"r":[]},"bdF":{"ah":["So"]},"YV":{"ag":[],"r":[]},"YZ":{"ag":[],"r":[]},"YX":{"ag":[],"r":[]},"Yv":{"ag":[],"r":[]},"azb":{"ah":["YV"]},"be_":{"ah":["YZ"]},"azc":{"ah":["YX"]},"Yd":{"au":[],"r":[]},"bbf":{"aB":[]},"bb6":{"aB":[]},"bbd":{"ah":["Yv"]},"aGb":{"aB":[]},"bgt":{"aB":[]},"b9r":{"au":[],"r":[]},"ap_":{"ag":[],"r":[]},"aoU":{"ag":[],"r":[]},"Zy":{"ag":[],"r":[]},"acK":{"au":[],"r":[]},"aCI":{"ah":["ap_"]},"aCF":{"ah":["aoU"]},"bdI":{"au":[],"r":[]},"bdL":{"aB":[]},"bhq":{"au":[],"r":[]},"bcP":{"aB":[]},"bv7":{"au":[],"r":[]},"bkM":{"au":[],"r":[]},"aB6":{"ah":["Zy"]},"acJ":{"au":[],"r":[]},"bhp":{"au":[],"r":[]},"acI":{"au":[],"r":[]},"bho":{"au":[],"r":[]},"aB7":{"au":[],"r":[]},"aHj":{"au":[],"r":[]},"JC":{"au":[],"r":[]},"aoY":{"ag":[],"r":[]},"ZU":{"ag":[],"r":[]},"ZV":{"ag":[],"r":[]},"aCH":{"ah":["aoY"]},"bdJ":{"au":[],"r":[]},"ac_":{"au":[],"r":[]},"bdH":{"au":[],"r":[]},"bdM":{"au":[],"r":[]},"aCG":{"ah":["ZU"]},"biT":{"ah":["ZV"]},"aXU":{"au":[],"r":[]},"a5N":{"ag":[],"r":[]},"biz":{"ah":["a5N"]},"biy":{"aB":[]},"arT":{"au":[],"r":[]},"Yx":{"ag":[],"r":[]},"Yw":{"ag":[],"r":[]},"Y4":{"ag":[],"r":[]},"a0F":{"ag":[],"r":[]},"axX":{"ah":["Yx"]},"axW":{"ah":["Yw"]},"awG":{"ah":["Y4"]},"bv_":{"ah":["a0F"]},"Fl":{"ag":[],"r":[]},"awz":{"ag":[],"r":[]},"buY":{"ah":["Fl"]},"buZ":{"ah":["awz"]},"buX":{"aB":[]},"arS":{"ag":[],"r":[]},"aEc":{"ah":["arS"]},"ad4":{"au":[],"r":[]},"arM":{"ag":[],"r":[]},"arR":{"ag":[],"r":[]},"bkf":{"ah":["arM"]},"aEb":{"ah":["arR"]},"NQ":{"ag":[],"r":[]},"aEd":{"ah":["NQ"],"ey":[]},"b7T":{"j3":[],"ff":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQv"),Q:w("qW"),n:w("bk<m,m>"),c5:w("aSt"),dY:w("aSu"),d:w("eE<m?>"),e:w("Hm"),B:w("nc"),P:w("hX"),k:w("kD"),x:w("az<~>"),f5:w("O<a2D>"),V:w("O<ac>"),t:w("O<qW>"),O:w("O<w>"),ac:w("O<eE<m?>>"),I:w("O<nc>"),u:w("O<hX>"),_:w("O<kD>"),cl:w("O<az<ai<a4<m,@>>>>"),R:w("O<ne>"),cq:w("O<ai<+(K,K)>>"),ez:w("O<a4<m,aC>>"),gE:w("O<a4<m,m>>"),c7:w("O<a4<m,@>>"),fD:w("O<mt>"),bp:w("O<oe>"),g:w("O<u>"),v:w("O<hq>"),L:w("O<+(m,m)>"),G:w("O<+(K,K)>"),bF:w("O<+count,id,name(H,m,m)>"),A:w("O<cR>"),s:w("O<m>"),aS:w("O<iT>"),p:w("O<r>"),C:w("O<ff>"),D:w("O<li>"),fp:w("O<JG>"),M:w("O<JO>"),gZ:w("O<aGg>"),Y:w("O<aei>"),E:w("O<aIh>"),F:w("O<K>"),dC:w("O<H>"),dS:w("O<aB?>"),d4:w("O<m?>"),J:w("cs<ah<ag>>"),b:w("ai<nc>"),do:w("ai<hX>"),r:w("ai<kD>"),U:w("ai<a4<m,@>>"),gk:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(H,m,m)>"),h:w("ai<m>"),c:w("ai<li>"),j:w("ai<@>"),fK:w("bv<m,m>"),d2:w("bv<m,ai<a4<m,@>>>"),a:w("a4<m,@>"),f:w("a4<@,@>"),gv:w("M<m,Ho>"),w:w("iC"),g2:w("rh"),bV:w("anL"),fL:w("cr"),K:w("aC"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),d9:w("+dx,hidden(K,ai<hX>)"),cs:w("+count,id,name(H,m,m)"),N:w("m"),e7:w("bq<K>"),gc:w("dD"),b4:w("cy<H>"),W:w("ki<m>"),l:w("r"),cM:w("ff"),i:w("li"),cc:w("Fy"),bw:w("acI<m?>"),cy:w("JQ"),q:w("n0"),y:w("R"),gR:w("K"),z:w("@"),S:w("H"),eK:w("ai<kD>?"),m:w("aoX?"),cT:w("u?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,H)?"),X:w("+qrPayload,token,usesRemaining(m,m,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("pV?"),T:w("m?"),aD:w("dD?"),o:w("li?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXK=new A.bp(B.hg,B.bG,B.hg,B.bG)
D.aac=new A.bp(B.hg,B.iK,B.hg,B.iK)
D.aXX=new A.bp(B.im,B.bG,B.bG,B.bG)
D.aY0=new A.ay(B.cY,1.4,B.q,-1)
D.aYa=new A.ay(B.ad,1,B.q,-1)
D.aZz=new A.aY(0,1/0,64,1/0)
D.aZD=new A.aY(0,84,0,1/0)
D.axK=w([B.lK,B.qW,B.c],x.O)
D.bVE=new A.a8(B.ax,B.aC,B.x,D.axK,null,null)
D.b_n=new A.o(null,null,null,null,null,D.bVE,B.n)
D.d_F=w([B.aV,B.bU],x.O)
D.bXL=new A.a8(B.b_,B.b4,B.x,D.d_F,null,null)
D.b_I=new A.o(null,null,null,null,null,D.bXL,B.n)
D.b5W=new A.fj(null,null,null,null,null,E.jV,null,null,null,null)
D.abw=new A.cp(B.A,null,null,D.b5W,null)
D.km=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f2e=new A.G(!0,D.km,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flm=new A.y("No books on the shelf yet.",null,D.f2e,null,null,null,null,null,null,null,null,null)
D.e8a=new A.D(B.o0,D.flm,null)
D.b4p=new A.cp(B.A,null,null,D.e8a,null)
D.b5i=new A.cp(B.A,null,null,Y.VP,null)
D.b7p=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b7S=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.acH=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.baB=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.baU=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ae1=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.beI=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bf7=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.EC=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bgI=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bj8=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.afE=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.ffR=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.boJ=new A.eE(null,D.ffR,B.eZ,null,x.d)
D.foy=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.boL=new A.eE(null,D.foy,B.eZ,null,x.d)
D.bpi=new A.ba(38e5)
D.bq2=new A.ic(0,10,0,10)
D.bqb=new A.Q(0,1,0,0)
D.bql=new A.ic(0,4,0,4)
D.bqD=new A.Q(10,10,14,10)
D.bqP=new A.ic(10,4,10,4)
D.bqX=new A.ic(10,8,10,8)
D.bqY=new A.Q(10,8,8,8)
D.brn=new A.Q(12,6,12,2)
D.brF=new A.Q(14,10,6,6)
D.brG=new A.Q(14,12,14,0)
D.brK=new A.Q(14,12,14,8)
D.brN=new A.Q(14,12,8,14)
D.brR=new A.ic(14,14,14,14)
D.bsv=new A.Q(16,2,16,10)
D.bsF=new A.Q(16,6,16,30)
D.bsH=new A.Q(16,6,16,8)
D.ai_=new A.Q(18,16,18,8)
D.bth=new A.Q(18,20,18,22)
D.ai3=new A.Q(18,24,18,24)
D.btn=new A.Q(18,30,18,30)
D.btF=new A.Q(20,10,12,20)
D.btS=new A.Q(20,18,16,18)
D.btU=new A.Q(20,18,20,6)
D.buJ=new A.Q(24,32,24,28)
D.buK=new A.Q(24,36,24,32)
D.buO=new A.Q(26,26,24,14)
D.bv1=new A.Q(2,4,2,8)
D.bv5=new A.Q(30,0,30,0)
D.bvg=new A.Q(38,22,22,22)
D.aim=new A.Q(40,24,24,24)
D.bvi=new A.ic(40,40,40,40)
D.bvk=new A.Q(46,30,30,30)
D.aip=new A.Q(4,0,0,8)
D.bvL=new A.Q(56,40,40,40)
D.bvP=new A.Q(1.25,1.25,1.25,1.25)
D.bvQ=new A.Q(60,0,60,0)
D.bvT=new A.Q(6,14,6,16)
D.bw4=new A.ic(7,3,7,3)
D.bwB=new A.Q(5,1.5,5,1.5)
D.bwM=new A.Q(6,2.5,6,2.5)
D.fAt=new A.y("Signature",null,B.ny,null,null,null,null,null,null,null,null,null)
D.bx6=new A.bC(1,B.bh,D.fAt,null)
D.fxE=new A.y("Tell the AI what to fix",null,B.dj,null,null,null,null,null,null,null,null,null)
D.bxU=new A.bC(1,B.bh,D.fxE,null)
D.f9w=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzA=new A.y("Worksheets",null,D.f9w,null,null,null,null,null,null,null,null,null)
D.f9E=new A.G(!0,E.acf,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyu=new A.y("Track your project spending",null,D.f9E,null,null,null,null,null,null,null,null,null)
D.cSM=w([D.fzA,B.at,D.fyu],x.p)
D.bm0=new A.fl(B.ag,B.e,B.j,B.F,null,B.p,null,0,D.cSM,null)
D.by_=new A.bC(1,B.bh,D.bm0,null)
D.f4O=new A.G(!0,E.jV,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff3=new A.y("FAMILY LIBRARY",null,D.f4O,null,null,null,null,null,null,null,null,null)
D.byg=new A.bC(1,B.bh,D.ff3,null)
D.MG=new C.Hm("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.ZH=new C.Hn(0,"male")
D.aji=new C.Hn(1,"female")
D.xU=new C.Hn(2,"unknown")
D.tO=new C.ake(0,"owner")
D.MH=new C.ake(1,"editor")
D.kt=new C.ake(2,"viewer")
D.ak4=new A.a0(61199,"MaterialIcons",!1)
D.bCq=new A.a0(61504,"MaterialIcons",!1)
D.bCr=new A.a0(61505,"MaterialIcons",!1)
D.bCt=new A.a0(61587,"MaterialIcons",!1)
D.bCA=new A.a0(61890,"MaterialIcons",!1)
D.bDu=new A.a0(63034,"MaterialIcons",!0)
D.bEj=new A.a0(63429,"MaterialIcons",!1)
D.ami=new A.a0(984520,"MaterialIcons",!1)
D.bD_=new A.a0(62776,"MaterialIcons",!1)
D.bGH=new A.ae(D.bD_,26,B.aZ,null,null,null)
D.bBo=new A.a0(57648,"MaterialIcons",!1)
D.bGZ=new A.ae(D.bBo,14,B.c,null,null,null)
D.bHg=new A.ae(B.FK,17,null,null,null,null)
D.bHM=new A.ae(E.a_A,null,null,null,null,null)
D.bHP=new A.ae(B.jn,18,E.jV,null,null,null)
D.a_m=new A.a0(62044,"MaterialIcons",!1)
D.bHV=new A.ae(D.a_m,null,B.aV,null,null,null)
D.bIK=new A.ae(B.dX,16,null,null,null,null)
D.bIR=new A.ae(D.a_m,32,B.aV,null,null,null)
D.bJa=new A.ae(E.ak5,18,B.cY,null,null,null)
D.bKd=new A.ae(B.FU,22,B.ay,null,null,null)
D.bKp=new A.ae(B.dX,22,B.aZ,null,null,null)
D.bKA=new A.ae(Q.a_r,22,B.c,null,null,null)
D.bKF=new A.ae(B.tY,52,B.c,null,null,null)
D.bKP=new A.ae(B.FU,30,B.ay,null,null,null)
D.amW=new A.ae(B.u6,22,B.c,null,null,null)
D.bLg=new A.ae(B.dX,17,null,null,null,null)
D.bLA=new A.ae(B.vM,26,B.cY,null,null,null)
D.bMj=new A.ae(B.a_M,16,null,null,null,null)
D.bN3=new A.ae(B.tY,24,B.c,null,null,null)
D.bN8=new A.ae(B.N8,20,B.rt,null,null,null)
D.bNd=new A.ae(B.FI,null,B.bU,null,null,null)
D.bNk=new A.ae(B.jn,18,B.c,null,null,null)
D.bNW=new A.ae(B.cD,22,B.ad,null,null,null)
D.bOL=new A.ae(B.e6,16,B.ad,null,null,null)
D.bOX=new A.ae(D.a_m,20,B.aV,null,null,null)
D.anm=new A.ae(B.hn,20,null,null,null,null)
D.bPs=new A.ae(B.cD,18,D.km,null,null,null)
D.bPK=new A.ae(B.ye,28,B.c,null,null,null)
D.bPT=new A.ae(B.MZ,null,B.h_,null,null,null)
D.bQc=new A.ae(B.ye,24,B.c,null,null,null)
D.bQD=new A.ae(B.tY,null,B.aV,null,null,null)
D.bQE=new A.ae(B.jH,20,B.cY,null,null,null)
D.bQY=new A.ae(B.FK,16,null,null,null,null)
D.bSv=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ez,!0,null,null,null,null)
D.d6Q=w([B.bv,B.aV,B.fc,B.aZ],x.O)
D.bU3=new A.a8(B.ax,B.aC,B.x,D.d6Q,null,null)
D.bfD=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bl3=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cPG=w([D.bfD,D.bl3],x.O)
D.bUe=new A.a8(B.b_,B.b4,B.x,D.cPG,null,null)
D.d1q=w([B.f_,B.fx,B.fc],x.O)
D.bUj=new A.a8(B.ax,B.aC,B.x,D.d1q,null,null)
D.aeD=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b7T=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cRD=w([D.aeD,D.b7T],x.O)
D.bUS=new A.a8(B.b_,B.b4,B.x,D.cRD,null,null)
D.bb5=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.ax6=w([D.bb5,D.aeD],x.O)
D.bVb=new A.a8(B.ax,B.aC,B.x,D.ax6,null,null)
D.adz=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.bdc=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d0C=w([D.adz,D.bdc],x.O)
D.bVP=new A.a8(B.a3,B.a8,B.x,D.d0C,null,null)
D.dd9=w([B.bz,B.n0],x.O)
D.bVR=new A.a8(B.b_,B.b4,B.x,D.dd9,null,null)
D.bfy=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.de0=w([D.bfy,D.km,D.km,P.X7],x.O)
D.dgf=w([0,0.07,0.9,1],x.F)
D.bWl=new A.a8(B.a3,B.a8,B.x,D.de0,D.dgf,null)
D.bWw=new A.a8(B.ax,B.aC,B.x,B.QH,null,null)
D.dcJ=w([B.aZ,B.aV,B.bU],x.O)
D.bXw=new A.a8(B.ax,B.aC,B.x,D.dcJ,null,null)
D.ci_=w([B.bv,B.aZ,B.f_],x.O)
D.ci6=w([B.bu,B.aE,B.ja],x.O)
D.ci8=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bed=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cof=w([D.bed,E.aek],x.O)
D.e3Z=new A.u(1,2)
D.eOL=new A.cR(B.aW,D.e3Z,3)
D.au9=w([D.eOL],x.A)
D.cvx=w([B.h4,B.cf,B.fb],x.O)
D.cye=w([B.bJ,B.bt,B.bo],x.O)
D.byJ=new C.ua("classic","Classic leather","Gold-edged brown leather",D.ax6,E.jV,E.jV,"\u2766",B.L,!0,!1,!1,!1)
D.b7d=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bjZ=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cUm=w([D.b7d,D.bjZ],x.O)
D.aeo=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.byE=new C.ua("ornate","Ornate gold","Double gold border and flourishes",D.cUm,D.aeo,D.aeo,"\u2726",B.L,!0,!0,!0,!1)
D.baK=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bgk=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cMD=w([D.baK,D.bgk],x.O)
D.byD=new C.ua("parchment","Parchment","Old paper with dark ink",D.cMD,D.EC,G.iw,"\u2767",B.L,!0,!1,!1,!0)
D.abY=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bip=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.db5=w([D.abY,D.bip],x.O)
D.bdO=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bhM=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.byG=new C.ua("minimal","Clean paper","Plain and elegant, like a printed book",D.db5,D.bdO,D.bhM,"",B.L,!0,!0,!1,!0)
D.byI=new C.ua("midnight","Midnight","Deep blue with silver stars",L.axo,B.cr,B.bK,"\u2727",B.L,!0,!0,!1,!1)
D.byC=new C.ua("emerald","Emerald library","Green cloth, title on the left",Z.aux,E.jV,B.h5,"\u25c6",B.bg,!0,!1,!1,!1)
D.biQ=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d9p=w([B.eq,D.biQ],x.O)
D.beR=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bfW=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.byH=new C.ua("rose","Rose vintage","Burgundy with rose-gold lettering",D.d9p,D.beR,D.bfW,"\u2740",B.L,!0,!1,!0,!1)
D.ddE=w([B.cx,O.mj],x.O)
D.byF=new C.ua("modern","Modern","Dark, bold, left-aligned",D.ddE,B.aR,B.c,"",B.bg,!1,!0,!1,!1)
D.a1F=w([D.byJ,D.byE,D.byD,D.byG,D.byI,D.byC,D.byH,D.byF],A.ax("O<ua>"))
D.cM9=w([B.bU,B.bj],x.O)
D.bfo=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cMP=w([D.abY,D.bfo],x.O)
D.baG=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cOq=w([D.baG,B.d9],x.O)
D.cPW=w([B.b9,B.iQ,B.oz],x.O)
D.cQi=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b7P=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bcy=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.dgb=w([D.adz,D.b7P,D.bcy],x.O)
D.byK=new C.ub("leather","Leather",D.dgb,"vintage")
D.cXk=w([B.di,B.KW,A4.Wk],x.O)
D.byR=new C.ub("midnight","Midnight",D.cXk,"starry")
D.cPX=w([B.eF,B.dZ,B.lf],x.O)
D.byQ=new C.ub("forest","Forest",D.cPX,"story")
D.di4=w([B.eP,B.eq,B.kp],x.O)
D.byN=new C.ub("burgundy","Burgundy",D.di4,"royal")
D.cxO=w([B.aE,B.pA,B.nH],x.O)
D.byO=new C.ub("royal","Royal",D.cxO,"royal")
D.cSf=w([B.bt,B.cx,O.mj],x.O)
D.byL=new C.ub("charcoal","Charcoal",D.cSf,"geo")
D.dgj=w([B.cg,B.dQ,B.xa],x.O)
D.byP=new C.ub("sunset","Sunset",D.dgj,"sunset")
D.dgZ=w([B.iQ,B.ED,B.Wn],x.O)
D.byM=new C.ub("ocean","Ocean",D.dgZ,"band")
D.yK=w([D.byK,D.byR,D.byQ,D.byN,D.byO,D.byL,D.byP,D.byM],A.ax("O<ub>"))
D.cSE=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cTc=w([B.ak,B.aK,B.M],x.O)
D.cUr=w([B.eq,B.dZ,B.di,B.fz,B.xe,B.cY,B.jZ,B.ei,B.d5],x.O)
D.cUs=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eOM=new A.cR(B.dq,B.dE,8)
D.cUB=w([D.eOM],x.A)
D.cVE=w([B.bW,B.dQ,B.kn],x.O)
D.cW6=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cXg=w([B.bW,B.hi],x.O)
D.cZj=w([B.aM,B.xb,B.x2],x.O)
D.d_b=w([B.bL,B.cb,B.dv,B.aM],x.O)
D.d_G=w([B.jc,B.cg,B.tj],x.O)
D.d0a=w([B.f_,B.cY],x.O)
D.d0H=w([B.cs,B.fl,B.hl],x.O)
D.d0S=w([B.aR,B.bj,B.di],x.O)
D.d1n=w([B.eu,B.cZ,B.dZ],x.O)
D.d1G=w([B.dN,B.di,B.KW],x.O)
D.d2W=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a2A=w(["leather","linen","plain","stars","rays"],x.s)
D.bGn=new A.a0(985219,"MaterialIcons",!1)
D.bFW=new A.a0(983781,"MaterialIcons",!1)
D.awO=w([B.aku,B.i2,B.lS,B.i3,D.bGn,B.G5,B.pW,D.bFW,L.am5,B.yg,B.pY,B.mu],A.ax("O<a0>"))
D.a2F=w(["double","single","corners","none"],x.s)
D.d5A=w([B.dz,B.bk,B.ei],x.O)
D.d5N=w([],x.t)
D.Ca=w([],x.u)
D.d81=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dai=w([B.aF,B.fl,B.fz],x.O)
D.dbG=w([B.bZ,B.mW,B.Xh],x.O)
D.dbV=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.duW=new C.lA("construction","Construction","Jobsite & builds",B.y6)
D.dv2=new C.lA("house","Home Build","Houses & rooms",B.vH)
D.duT=new C.lA("grocery","Grocery","Store & pantry",B.a0h)
D.duS=new C.lA("calculator","Calculations","Math & estimates",B.Nj)
D.dv0=new C.lA("lumber","Materials","Lumber & supplies",B.Nz)
D.duP=new C.lA("kitchen","Kitchen","Remodel & meals",Aa.ali)
D.bFT=new A.a0(983756,"MaterialIcons",!1)
D.duU=new C.lA("landscape","Landscaping","Yard & garden",D.bFT)
D.duO=new C.lA("plumbing","Plumbing","Pipes & water",B.q5)
D.dv3=new C.lA("electrical","Electrical","Wiring & power",B.ha)
D.duM=new C.lA("store","Retail Shop","Daily business",B.kZ)
D.duN=new C.lA("paint_remodel","Paint & Remodel","Colors & walls",Ab.a_S)
D.bFh=new A.a0(983311,"MaterialIcons",!1)
D.dv_=new C.lA("roofing","Roofing","Roofs & exteriors",D.bFh)
D.bG5=new A.a0(983986,"MaterialIcons",!1)
D.duL=new C.lA("warehouse","Warehouse","Storage & stock",D.bG5)
D.duY=new C.lA("vehicles","Vehicles","Fleet & transport",B.G6)
D.bD1=new A.a0(62785,"MaterialIcons",!1)
D.duR=new C.lA("farm","Farm","Crops & livestock",D.bD1)
D.duQ=new C.lA("restaurant","Restaurant","Food & catering",B.u4)
D.duX=new C.lA("tools","Tools","Workshop gear",B.G1)
D.dv1=new C.lA("wallet","Cash & Wallet","Quick spending",B.jH)
D.bEe=new A.a0(63395,"MaterialIcons",!1)
D.duZ=new C.lA("concrete","Concrete","Foundation work",D.bEe)
D.duV=new C.lA("blueprint","Blueprint","Plans & design",Ag.akA)
D.a38=w([D.duW,D.dv2,D.duT,D.duS,D.dv0,D.duP,D.duU,D.duO,D.dv3,D.duM,D.duN,D.dv_,D.duL,D.duY,D.duR,D.duQ,D.duX,D.dv1,D.duZ,D.duV],A.ax("O<lA>"))
D.dco=w([B.br,B.bk],x.O)
D.dda=w([B.i9,B.nM,B.dH],x.O)
D.a3h=w(["top","middle","bottom"],x.s)
D.dfy=w([B.co,B.bj,B.di],x.O)
D.dg5=w([B.b1,B.cZ,B.dZ],x.O)
D.di_=w([B.bJ,B.ak],x.O)
D.di0=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e1y={top:0,middle:1,bottom:2}
D.dla=new A.bk(D.e1y,["Top","Middle","Bottom"],x.n)
D.e1a={double:0,single:1,corners:2,none:3}
D.dlf=new A.bk(D.e1a,["Double line","One line","Corners","None"],x.n)
D.e2n={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dmG=new A.bk(D.e2n,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dmS=new A.bk(B.i6,[],A.ax("bk<H,+(m,m)>"))
D.e1q={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Cm=new A.bk(D.e1q,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bk<m,H>"))
D.dpv=new F.MJ(32,null)
D.dpw=new F.MJ(40,null)
D.dpx=new F.MJ(46,null)
D.aG4=new C.arR(null)
D.e4X=new A.u(8,14)
D.flZ=new A.y("Write a new book",null,B.hF,null,B.L,null,null,null,null,null,null,null)
D.e7D=new A.D(B.kV,D.flZ,null)
D.amw=new A.ae(B.hA,18,B.c,null,null,null)
D.ffp=new A.y("Add",null,B.m6,null,null,null,null,null,null,null,null,null)
D.d_q=w([D.amw,B.qm,D.ffp],x.p)
D.eMF=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d_q,null)
D.e7Y=new A.D(B.o_,D.eMF,null)
D.e7Z=new A.D(E.agQ,Y.VP,null)
D.f9r=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiq=new A.y("New Project",null,D.f9r,null,null,null,null,null,null,null,null,null)
D.d3i=w([D.amw,B.ab,D.fiq],x.p)
D.eMI=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d3i,null)
D.e89=new A.D(B.iC,D.eMI,null)
D.fkM=new A.y("Choose your header",null,T.qq,null,null,null,null,null,null,null,null,null)
D.e8u=new A.D(B.hN,D.fkM,null)
D.b6a=new A.fj(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eRq=new A.a7(22,22,D.b6a,null)
D.b4l=new A.cp(B.A,null,null,D.eRq,null)
D.e8z=new A.D(B.Yf,D.b4l,null)
D.bs_=new A.Q(14,2,14,6)
D.fyd=new A.y("The top of your book. Tap a design to see it.",null,S.IW,null,null,null,null,null,null,null,null,null)
D.e8A=new A.D(D.bs_,D.fyd,null)
D.ea7=new A.iR(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eaa=new A.iR(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aHj=new A.iR(1,0.9607843137254902,0.48627450980392156,0)
D.I7=new A.iR(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zh=new A.iR(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eag=new A.iR(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fXu=new C.bgt(null)
D.bn8=new A.mk(D.fXu,null,B.au,null,null)
D.aKX=new A.cL(0,0,0,0,null,null,D.bn8,null)
D.eyu=new A.z(-42,42)
D.eHl=new A.cC([0,0,1,1])
D.aMh=new A.a9(0,0,520,160)
D.fxM=new A.y("Let the AI write it from your tree",null,B.kd,null,B.L,null,null,null,null,null,null,null)
D.bzn=new A.dq(1,B.cn,D.fxM,null)
D.cXf=w([E.a0K,B.ab,D.bzn],x.p)
D.eMk=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.cXf,null)
D.ff4=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.daB=w([D.anm,B.ab,D.ff4],x.p)
D.eMu=new A.cm(B.aO,B.b8,B.j,B.m,null,B.p,null,0,D.daB,null)
D.bKu=new A.ae(B.hO,14,B.aZ,null,null,null)
D.f3s=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiQ=new A.y("Cashier",null,D.f3s,null,null,null,null,null,null,null,null,null)
D.d3O=w([D.bKu,B.bp,D.fiQ],x.p)
D.eMx=new A.cm(B.aO,B.e,B.Q,B.m,null,B.p,null,0,D.d3O,null)
D.ff5=new A.y("Transfer & settings",null,B.dj,null,null,null,null,null,null,null,null,null)
D.bxK=new A.bC(1,B.bh,D.ff5,null)
D.cPp=w([D.amW,B.av,D.bxK],x.p)
D.eMy=new A.cm(B.aO,B.e,B.j,B.m,null,B.p,null,0,D.cPp,null)
D.eQ9=new A.ar(16,40)
D.eQe=new A.ar(22,64)
D.eQl=new A.ar(280,88)
D.eR6=new A.a7(30,null,null,null)
D.eSo=new A.hM(2,12,12,1.05,null)
D.fiw=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eT6=new A.b1(D.fiw,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fiL=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aOk=new A.b1(D.fiL,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fqQ=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eTA=new A.b1(D.fqQ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fB1=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eTF=new A.b1(D.fB1,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fkK=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eTM=new A.b1(D.fkK,null,null,null,null,null,null,null,null,null,null,null,null,B.fI,!1,null,null,null,B.r,null)
D.fyq=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aOo=new A.b1(D.fyq,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.ffG=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eUb=new A.b1(D.ffG,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fBH=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eUV=new A.b1(D.fBH,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fwI=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eVj=new A.b1(D.fwI,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fB5=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eVm=new A.b1(D.fB5,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fsm=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eVo=new A.b1(D.fsm,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fmz=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eVp=new A.b1(D.fmz,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fmA=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eWp=new A.b1(D.fmA,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fiy=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eWH=new A.b1(D.fiy,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fkp=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eX_=new A.b1(D.fkp,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.frS=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eXf=new A.b1(D.frS,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.fnn=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eXg=new A.b1(D.fnn,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.r,null)
D.f_q=new A.G(!0,D.km,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_Q=new A.G(!0,D.km,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0u=new A.rB(!0,B.rC,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0L=new A.G(!0,D.km,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1i=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7w=new A.rB(!0,B.S2,null,null,null,null,B.ds,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2h=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2G=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4f=new A.G(!0,null,null,null,null,null,8,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4j=new A.G(!0,G.iw,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5y=new A.G(!0,B.M,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6g=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6Z=new A.G(!0,B.bU,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f72=new A.G(!0,B.bz,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7p=new A.G(!0,D.EC,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7y=new A.G(!0,B.aZ,null,null,null,null,13,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8w=new A.G(!0,B.cY,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9_=new A.G(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9p=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faQ=new A.G(!0,B.ak,null,null,null,null,11.5,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faY=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQA=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a7Z=new A.G(!0,B.ak,null,null,null,null,12,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcD=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd_=new A.G(!0,G.iw,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd7=new A.G(!0,G.iw,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdV=new A.y("Themes",null,B.pa,null,null,null,null,null,null,null,null,null)
D.few=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.f3Z=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feV=new A.y("Debt receipt",null,D.f3Z,null,B.L,null,null,null,null,null,null,null)
D.aQv=new A.G(!0,B.ak,null,null,null,null,11,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffc=new A.y("Person who owes",null,D.aQv,null,null,null,null,null,null,null,null,null)
D.fg8=new A.y("Notes",null,B.a7F,null,null,null,null,null,null,null,null,null)
D.fgy=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f2Y=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgC=new A.y("Share",null,D.f2Y,null,null,null,null,null,null,null,null,null)
D.fhx=new A.y("Move your family trees",null,D.aQA,null,null,null,null,null,null,null,null,null)
D.fi8=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fiK=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fk_=new A.y("Remove this book?",null,B.ht,null,null,null,null,null,null,null,null,null)
D.aR1=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fl7=new A.y("What should the AI do?",null,B.dj,null,null,null,null,null,null,null,null,null)
D.fmv=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fnC=new A.y("Ribbon bookmark",null,B.iM,null,null,null,null,null,null,null,null,null)
D.faK=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo4=new A.y("NGMY.ORG",null,D.faK,null,B.L,null,null,null,null,null,null,null)
D.fpl=new A.y("Scan family tree QR",null,B.cz,null,null,null,null,null,null,null,null,null)
D.f7h=new A.G(!0,B.c,null,null,null,null,13,B.a5,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq5=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.f7h,null,B.L,null,null,null,null,null,null,null)
D.frh=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fro=new A.y("Thumbnail",null,B.pa,null,null,null,null,null,null,null,null,null)
D.frY=new A.y("Save the cover",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fsn=new A.y("Your photos",null,B.pa,null,null,null,null,null,null,null,null,null)
D.fsC=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.ft7=new A.y("Design your cover",null,T.qq,null,null,null,null,null,null,null,null,null)
D.ftd=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.ftg=new A.y("PICTURE",null,H.mM,null,null,null,null,null,null,null,null,null)
D.ftC=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.ftE=new A.y("You can undo it right after.",null,S.Di,null,null,null,null,null,null,null,null,null)
D.fub=new A.y("Print",null,B.uK,null,null,null,null,null,null,null,null,null)
D.fuy=new A.y("Amount owed",null,D.aQv,null,null,null,null,null,null,null,null,null)
D.fuN=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fvm=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fvp=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fvQ=new A.y("Debtor signature",null,B.a7F,null,null,null,null,null,null,null,null,null)
D.fvZ=new A.y("Change icon",null,E.aPM,null,null,null,null,null,null,null,null,null)
D.fxa=new A.y("Family tree QR",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fxC=new A.y("Download",null,B.uK,null,null,null,null,null,null,null,null,null)
D.fxG=new A.y("Change",null,B.pa,null,null,null,null,null,null,null,null,null)
D.fyw=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fyz=new A.y("WHAT SHOULD IT CHANGE?",null,H.mM,null,null,null,null,null,null,null,null,null)
D.fz8=new A.y("COLOUR",null,H.mM,null,null,null,null,null,null,null,null,null)
D.fzl=new A.y("Do it",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fzo=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fAn=new A.y("Create Family Tree",null,B.eW,null,null,null,null,null,null,null,null,null)
D.eZp=new A.G(!0,E.jV,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAC=new A.y("Write the first page myself",null,D.eZp,null,null,null,null,null,null,null,null,null)
D.fB8=new A.y("Use this header",null,B.cz,null,null,null,null,null,null,null,null,null)
D.fBe=new A.y("Create Project",null,E.aQe,null,null,null,null,null,null,null,null,null)
D.fU0=new C.ab2(1,"header")
D.a8S=new C.ab2(2,"projects")
D.fU1=new C.ab2(3,"cashier")
D.a8T=new C.ab2(4,"familyTree")
D.h4D=new C.cw8(0,"start")
D.h4E=new C.cw9(0,"start")
D.fUp=new C.Y4(null)
D.fVo=new C.Yw(null)
D.dmP=new A.bk(B.i6,[],A.ax("bk<m,Fy>"))
D.d6a=w([],x.E)
D.d6b=w([],x.M)
D.fVV=new C.bdK(D.dmP,D.d6a,D.d6b,0,0,null,null)
D.fY8=new C.ZV(null)
D.a9A=new C.aIZ(0,"projects")
D.aVm=new C.aIZ(1,"cashier")
D.h2n=new C.aIZ(2,"familyTree")})()};
(a=>{a["fpqfCSMn74ond5tXhk5nDv3NVbw="]=a.current})($__dart_deferred_initializers__);