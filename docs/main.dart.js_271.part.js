((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A0,G,F,E,N,A1,A2,R,A3,A4,M,A5,H,S,T,U,V,A6,A7,W,A8,A9,X,Aa,Ab,Ac,L,Ad,Y,Z,I,O,C={
bzr(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bzr=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uM(null,""),$async$bzr)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.R(y.j)
t=A.mM(b1)
s=A.bZ(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dt(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dp(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Q.am(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qo(t,a1,B.he,E.DQ),$async$bzr)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.OQ(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.aa(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.R(l!=null&&A.JC(l)?y.l:y.i)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a_(r.a(j.h(a2,a7)),q,p):B.cw
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a0s(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzr,v)},
aeH(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aeH=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uM(null,""),$async$aeH)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.R(y.j)
t=A.mM(b6)
s=x.S
r=A.dc(c1,0,A.dH(4,"count",s),A.U(c1).c)
q=F.a0f(new A.J(r,new C.fjo(),r.$ti.k("J<ai.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.ae("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fjn(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Q.am(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aeH)
case 6:l=c5
k=F.OQ(l==null?"":l)
if(k==null)throw A.R("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.alS(s,D.d6r,r.b(k.h(0,"cover"))?A.a_(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.R("There is no page to change.")
h=A.T(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dt(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Q.am(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aeH)
case 10:l=c5
k=l==null?null:F.OQ(l)
if(k==null)throw A.R(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d6(a8,d),a5=J.aU(a2.a),a2=a2.$ti,a7=new A.kN(a5,a2.k("kN<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a7(a9)
b1=A.aM(b0.h(a9,"index"))
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
case 9:if(h.a!==0){s=h.$ti.k("bg<2>")
p=A.cA(new A.bg(h,s),new C.fjp(),s.k("G.E"),p)
p=F.a0f(A.oN(p,3,A.a2(p).k("G.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cw<1>")
b4=A.A(new A.cw(h,s),s.k("G.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a0s(s,b9),$async$aeH)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.alS(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aeH,v)},
h6s(d,e,f){return A.cf(null,B.w.j(0.65),!1,null,new C.fsn(e,f),d,null,!0,!0,x.g2)},
alS:function alS(d,e,f){this.a=d
this.b=e
this.c=f},
fjo:function fjo(){},
fjn:function fjn(d){this.a=d},
fjp:function fjp(){},
fsn:function fsn(d,e){this.a=d
this.b=e},
bxj(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bxj=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.ba(b1,new C.f9F())){u=null
w=1
break}t=B.d.ea(b1,new C.f9G())
s=$.V()
r=new A.rA()
q=A.FS(r,D.aHg)
p=A.L()
p.r=B.c.gp(0)
q.aW(D.aHg,p)
o=A.L()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fu
n=new C.f9L(t)
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
s=$.V()
p=A.a([],x.v)
a3=new A.aO(s.r,B.ao,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b4(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ao(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aL(a3,o)}else{p=A.a([],x.v)
a3=new A.aO(s.r,B.ao,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b4(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ao(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aL(a3,o)}w=4
return A.b(r.pO().yp(520,160),$async$bxj)
case 4:w=3
return A.b(b3.hf(B.fO),$async$bxj)
case 3:b0=b3
u=b0==null?null:J.f6(B.dD.gaN(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bxj,v)},
fh4(d){return C.hKl(d)},
hKl(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fh4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bbj()
n=d.x!=null&&d.y6(null).length===0
if(d.x!=null)t=n?D.ye:D.GP
else t=d.gRX()?D.GP:D.aCm
w=3
return A.b(C.bxj(d.ax),$async$fh4)
case 3:s=f
p.a=null
if(s!=null)p.a=A.akB(s)
r=A.a2m(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aCm}else{p.c=C.w3(q,!0)
p.b=n?D.ye:D.GP}r.a0T(A.fBV(new C.fh6(p,d,new C.fh7(),t,n,o),null,D.blb,B.vg))
u=r.jD(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fh4,v)},
fnI(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fnI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fh4(d),$async$fnI)
case 3:t=f
s=B.a.i(d.b)
r=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aI(s,r,"_")
if(q.length>40)q=B.a.an(q,0,40)
u=A4.Fo(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fnI,v)},
f9F:function f9F(){},
f9G:function f9G(){},
f9L:function f9L(d){this.a=d},
fh7:function fh7(){},
fh6:function fh6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fh5:function fh5(){},
fsP(d,e){var w=0,v=A.j(x.H)
var $async$fsP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.w.j(0.55),!0,null,new C.fsT(new A.cp(null,x.J),e),d,null,!0,!0,x.H),$async$fsP)
case 2:return A.h(null,v)}})
return A.i($async$fsP,v)},
bzU(d,e,f,g){return C.hRF(d,e,f,g)},
hRF(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bzU=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gaj(e.split(",")):e
r=B.cy.aG(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.P(D.eAN)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.fsL(g,r,f),d,null,!0,!0,x.H),$async$bzU)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bzU,v)},
fsU(d,e){var w=0,v=A.j(x.H)
var $async$fsU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.fsX(new A.cp(null,x.J),e),d,null,!0,!0,x.H),$async$fsU)
case 2:return A.h(null,v)}})
return A.i($async$fsU,v)},
aVv:function aVv(d,e){this.c=d
this.a=e},
bYu:function bYu(){},
b7v:function b7v(d,e){this.b=d
this.a=e},
fsT:function fsT(d,e){this.a=d
this.b=e},
fsQ:function fsQ(d){this.a=d},
fsR:function fsR(d,e,f){this.a=d
this.b=e
this.c=f},
fsS:function fsS(d,e){this.a=d
this.b=e},
fsL:function fsL(d,e,f){this.a=d
this.b=e
this.c=f},
fsJ:function fsJ(d){this.a=d},
fsK:function fsK(d,e,f){this.a=d
this.b=e
this.c=f},
fsX:function fsX(d,e){this.a=d
this.b=e},
fsV:function fsV(d){this.a=d},
fsW:function fsW(d,e,f){this.a=d
this.b=e
this.c=f},
fcq(d,e){var w=0,v=A.j(x.y),u,t
var $async$fcq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a00(d),$async$fcq)
case 3:t=g
J.n5(t,new C.fcr(e))
u=A.afk(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fcq,v)},
fcr:function fcr(d){this.a=d},
alZ:function alZ(d,e,f){this.c=d
this.d=e
this.a=f},
aA2:function aA2(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dzc:function dzc(d,e){this.a=d
this.b=e},
dyY:function dyY(d,e){this.a=d
this.b=e},
dz0:function dz0(d,e,f){this.a=d
this.b=e
this.c=f},
dz_:function dz_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dyZ:function dyZ(d,e){this.a=d
this.b=e},
dz1:function dz1(d,e){this.a=d
this.b=e},
dyW:function dyW(){},
dyX:function dyX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dyV:function dyV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dyG:function dyG(d){this.a=d},
dyH:function dyH(d,e,f){this.a=d
this.b=e
this.c=f},
dyI:function dyI(d,e){this.a=d
this.b=e},
dyF:function dyF(d){this.a=d},
dyN:function dyN(d,e){this.a=d
this.b=e},
dyE:function dyE(d){this.a=d},
dyO:function dyO(d,e,f){this.a=d
this.b=e
this.c=f},
dyP:function dyP(d,e,f){this.a=d
this.b=e
this.c=f},
dyD:function dyD(d,e){this.a=d
this.b=e},
dyQ:function dyQ(d,e,f){this.a=d
this.b=e
this.c=f},
dyC:function dyC(d,e){this.a=d
this.b=e},
dyR:function dyR(d,e){this.a=d
this.b=e},
dyB:function dyB(d){this.a=d},
dyS:function dyS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dyz:function dyz(){},
dyt:function dyt(d){this.a=d},
dyu:function dyu(d){this.a=d},
dyA:function dyA(d,e){this.a=d
this.b=e},
dyT:function dyT(d,e){this.a=d
this.b=e},
dyy:function dyy(d){this.a=d},
dyU:function dyU(d){this.a=d},
dyx:function dyx(){},
dyJ:function dyJ(d,e){this.a=d
this.b=e},
dyw:function dyw(d){this.a=d},
dyK:function dyK(d,e,f){this.a=d
this.b=e
this.c=f},
dyv:function dyv(d,e){this.a=d
this.b=e},
dys:function dys(d,e){this.a=d
this.b=e},
dyL:function dyL(d){this.a=d},
dyM:function dyM(d,e,f){this.a=d
this.b=e
this.c=f},
dzf:function dzf(){},
dzg:function dzg(d,e){this.a=d
this.b=e},
dzd:function dzd(d){this.a=d},
dze:function dze(d){this.a=d},
dz9:function dz9(d,e){this.a=d
this.b=e},
dza:function dza(d){this.a=d},
dz2:function dz2(d,e,f){this.a=d
this.b=e
this.c=f},
dz3:function dz3(d,e,f){this.a=d
this.b=e
this.c=f},
dz4:function dz4(d,e,f){this.a=d
this.b=e
this.c=f},
dz5:function dz5(d,e,f){this.a=d
this.b=e
this.c=f},
dz6:function dz6(d,e,f){this.a=d
this.b=e
this.c=f},
dz7:function dz7(d,e,f){this.a=d
this.b=e
this.c=f},
dz8:function dz8(d,e,f){this.a=d
this.b=e
this.c=f},
dzh:function dzh(){},
dzi:function dzi(){},
dzj:function dzj(){},
dzk:function dzk(d){this.a=d},
dzb:function dzb(d,e){this.a=d
this.b=e},
h2F(d){return B.d.dI(D.ZM,new C.fcP(d),new C.fcQ())},
tI:function tI(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fcP:function fcP(d){this.a=d},
fcQ:function fcQ(){},
aik:function aik(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aRm:function aRm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
R1:function R1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bb3:function bb3(){this.d=$
this.c=this.a=null},
d_F:function d_F(d,e){this.a=d
this.b=e},
d_D:function d_D(d,e){this.a=d
this.b=e},
d_E:function d_E(){},
d_G:function d_G(d,e){this.a=d
this.b=e},
fOM(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.mT(t,w,v,u==null?new A.Q(Date.now(),0,!1):u)},
Jn(d,e){return C.hIZ(d,e)},
hIZ(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Jn=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ax(),$async$Jn)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aS(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Q.aF(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d6(p,x.f)
o=A.cA(o,new C.feG(),o.$ti.k("G.E"),x.B)
n=A.a2(o).k("a4<G.E>")
o=A.A(new A.a4(o,new C.feH(),n),n.k("G.E"))
B.d.b_(o,new C.feI())
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
return A.i($async$Jn,v)},
zY(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$zY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ax(),$async$zY)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b5(f,new C.frw(),x.a)
r=A.A(r,r.$ti.k("ai.E"))
w=4
return A.b(t.ap("String","ngmy_family_book_v1_"+s+"_"+e,B.Q.am(r,null)),$async$zY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zY,v)},
aNB(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aNB=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Jn(d,e),$async$aNB)
case 2:u=h
t=J.cB(u)
s=t.bi(u,new C.fzc(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.zY(d,e,u),$async$aNB)
case 3:return A.h(null,v)}})
return A.i($async$aNB,v)},
bxK(d,e,f){var w=0,v=A.j(x.H),u
var $async$bxK=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Jn(d,e),$async$bxK)
case 2:u=h
J.n5(u,new C.fci(f))
w=3
return A.b(C.zY(d,e,u),$async$bxK)
case 3:return A.h(null,v)}})
return A.i($async$bxK,v)},
bxY(d,e){return C.hIY(d,e)},
hIY(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bxY=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$bxY)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aS(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.KR
w=1
break}p=B.Q.aF(0,q,null)
if(x.f.b(p)){o=A.a_(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aM(o.h(0,"emblem"))
k=k==null?null:B.k.N(k)
if(k==null)k=0
if(D.Be.ak(0,o.h(0,"foil")))j=A.cK(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aM(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a0b,o.h(0,"position"))?A.cK(o.h(0,"position")):"middle"
g=B.d.t(D.a_H,o.h(0,"frame"))?A.cK(o.h(0,"frame")):"double"
f=B.d.t(D.a_C,o.h(0,"texture"))?A.cK(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cEs,o.h(0,"header"))?A.cK(o.h(0,"header")):"classic"
o=new C.Gh(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.KR
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.KR
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bxY,v)},
PT(d,e,f){return C.hRb(d,e,f)},
hRb(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$PT=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ax(),$async$PT)
case 7:r=h
w=8
return A.b(r.ap("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Q.am(f.ac(),null)),$async$PT)
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
return A.i($async$PT,v)},
Pn(d,e){return C.hJ_(d,e)},
hJ_(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Pn=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ax(),$async$Pn)
case 7:r=g
q=r.rn("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.A(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Jn(d,e),$async$Pn)
case 8:if(!j.ct(g)){n=B.a.i(d.toLowerCase())
m=J.lc(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ap("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Pn)
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
return A.i($async$Pn,v)},
ae2(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ae2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Pn(d,e),$async$ae2)
case 3:s=g
r=J.a7(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.K(s,t)
w=5
return A.b(A.ax(),$async$ae2)
case 5:w=4
return A.b(g.ap("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ae2)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ae2,v)},
a0F(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0F=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Pn(d,e),$async$a0F)
case 2:s=h
J.hE(s,f)
w=3
return A.b(A.ax(),$async$a0F)
case 3:u=h
w=4
return A.b(u.ap("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0F)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0F)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0F)
case 6:return A.h(null,v)}})
return A.i($async$a0F,v)},
mT:function mT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
feG:function feG(){},
feH:function feH(){},
feI:function feI(){},
frw:function frw(){},
fzc:function fzc(d){this.a=d},
fci:function fci(d){this.a=d},
Gh:function Gh(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bJT:function bJT(d){this.a=d},
hRu(d,e,f,g,h,i,j){return A.a8(d,!1).cp(A.eE(new C.fs1(j,i,f,e,h,g),!0,null,x.H))},
Pk(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Pk=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Pn(h,g),$async$Pk)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.aa(k)>=6){d.I(x.q).f.P(D.aJf)
u=!1
w=1
break}w=4
return A.b(C.h6s(d,f,e),$async$Pk)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ae2(h,g),$async$Pk)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mT(""+(q+n),l,B.a.i(m.b),new A.Q(Date.now(),0,!1)))}w=6
return A.b(C.zY(h,r,p),$async$Pk)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.PT(h,r,new C.Gh("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Pk)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Pk,v)},
fs1:function fs1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Xt:function Xt(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ax8:function ax8(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d0k:function d0k(d){this.a=d},
d0j:function d0j(d,e){this.a=d
this.b=e},
d08:function d08(d,e){this.a=d
this.b=e},
d05:function d05(d,e){this.a=d
this.b=e},
d_H:function d_H(d){this.a=d},
d_I:function d_I(d,e){this.a=d
this.b=e},
d09:function d09(d){this.a=d},
d_Q:function d_Q(d){this.a=d},
d_O:function d_O(d){this.a=d},
d_P:function d_P(d){this.a=d},
d_R:function d_R(d){this.a=d},
d06:function d06(d){this.a=d},
d07:function d07(){},
d_M:function d_M(d){this.a=d},
d_N:function d_N(d,e){this.a=d
this.b=e},
d_S:function d_S(d){this.a=d},
d_T:function d_T(d,e){this.a=d
this.b=e},
d0i:function d0i(d){this.a=d},
d0h:function d0h(d,e){this.a=d
this.b=e},
d0g:function d0g(d){this.a=d},
d02:function d02(d){this.a=d},
d01:function d01(d){this.a=d},
d03:function d03(d){this.a=d},
d_J:function d_J(d,e){this.a=d
this.b=e},
d04:function d04(d,e){this.a=d
this.b=e},
d_W:function d_W(d){this.a=d},
d_X:function d_X(d){this.a=d},
d_V:function d_V(){},
d_Y:function d_Y(d){this.a=d},
d_Z:function d_Z(d){this.a=d},
d0_:function d0_(d,e){this.a=d
this.b=e},
d00:function d00(d,e,f){this.a=d
this.b=e
this.c=f},
d_U:function d_U(d,e){this.a=d
this.b=e},
d0b:function d0b(d){this.a=d},
d0a:function d0a(){},
d0c:function d0c(d){this.a=d},
d0d:function d0d(d){this.a=d},
d0e:function d0e(d){this.a=d},
d0f:function d0f(d,e){this.a=d
this.b=e},
d_K:function d_K(d){this.a=d},
d_L:function d_L(d){this.a=d},
Xx:function Xx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbo:function bbo(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d1L:function d1L(d){this.a=d},
d1M:function d1M(d){this.a=d},
d1K:function d1K(d){this.a=d},
d1N:function d1N(d){this.a=d},
d1J:function d1J(d){this.a=d},
d1O:function d1O(d){this.a=d},
d1I:function d1I(d){this.a=d},
d1P:function d1P(d,e){this.a=d
this.b=e},
d1H:function d1H(d,e){this.a=d
this.b=e},
d1Q:function d1Q(d,e){this.a=d
this.b=e},
Xv:function Xv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
acx:function acx(d,e,f){this.a=d
this.b=e
this.c=f},
ax9:function ax9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d0z:function d0z(d,e){this.a=d
this.b=e},
d0y:function d0y(d,e){this.a=d
this.b=e},
d0D:function d0D(d){this.a=d},
d0C:function d0C(d,e){this.a=d
this.b=e},
d0A:function d0A(d){this.a=d},
d0B:function d0B(d){this.a=d},
d0E:function d0E(d){this.a=d},
d0F:function d0F(d){this.a=d},
d0x:function d0x(d,e){this.a=d
this.b=e},
d0w:function d0w(d,e){this.a=d
this.b=e},
Iv:function Iv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WM:function WM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cA5:function cA5(d){this.a=d},
cA6:function cA6(){},
cA7:function cA7(d){this.a=d},
b8G:function b8G(d,e,f){this.b=d
this.c=e
this.a=f},
b8x:function b8x(d,e){this.b=d
this.a=e},
tJ:function tJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
X3:function X3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8E:function b8E(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cTx:function cTx(d,e,f){this.a=d
this.b=e
this.c=f},
cTw:function cTw(d,e){this.a=d
this.b=e},
cTW:function cTW(d){this.a=d},
cTJ:function cTJ(){},
cTX:function cTX(d){this.a=d},
cTI:function cTI(){},
cTY:function cTY(d,e){this.a=d
this.b=e},
cTH:function cTH(d,e){this.a=d
this.b=e},
cTZ:function cTZ(d,e){this.a=d
this.b=e},
cTG:function cTG(d,e){this.a=d
this.b=e},
cU_:function cU_(d){this.a=d},
cTF:function cTF(){},
cU0:function cU0(d,e){this.a=d
this.b=e},
cTE:function cTE(d,e){this.a=d
this.b=e},
cU1:function cU1(d){this.a=d},
cTR:function cTR(d,e){this.a=d
this.b=e},
cU2:function cU2(d){this.a=d},
cU3:function cU3(d){this.a=d},
cU5:function cU5(d){this.a=d},
cU6:function cU6(d){this.a=d},
cTQ:function cTQ(d,e){this.a=d
this.b=e},
cU7:function cU7(d,e){this.a=d
this.b=e},
aE0:function aE0(d){this.a=d},
bdR:function bdR(d){this.a=d},
b6U:function b6U(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hI_(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.afv(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bv(new A.Q(Date.now(),0,!1))
s=new C.fcT(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a4<1>"),q=q.k("cV<1,n>"),o=q.k("G.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wR)m.push(l===D.WW?"male":"female")
l=u.w
k=A.ae(a3,!0,!1,!1,!1).cA(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ae(a3,!0,!1,!1,!1).cA(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jO(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jO(h,a2,a2)-A.jO(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.ak(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.A(new A.cV(new A.a4(a4,new C.fcR(u,f),p),new C.fcS(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.an(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hI0(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.afv(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fcY(v,e)
q=new C.fcW(v)
p=A.T(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.K)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.K)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.K)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.ak(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ak(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bg<2>")
d=A.d8(new A.bg(p,d),d.k("G.E"))
n=A.A(d,A.a2(d).k("cm.E"))
B.d.fn(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gah(e),k=new A.hL(l,new C.fcX(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ak(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
htU(d,e,f,g){var w,v,u=C.hI1(d,e)
if(u<=0||f.length<=u)return new A.ac7(!1,D.B3,f)
if(g.t(0,e.a))return new A.ac7(!1,D.B3,f)
w=A.U(f).c
v=A.dc(f,0,A.dH(u,"count",x.S),w).dA(0)
return new A.ac7(!0,A.dc(f,u,null,w).dA(0),v)},
htV(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.afv(d3),d2=d1.length
if(d2===0)return D.fiN
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.ce(0,t.a,new C.d0M(t))}s=new C.d12(v)
d2=x.h
r=A.T(w,d2)
q=new C.d0V(r)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d0U(r)
l=A.T(w,x.do)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cc(l.ce(0,k,new C.d0N()),o)}h=new C.d0T(s)
g=new C.d0S(l,r)
p=v.$ti.k("bg<2>")
o=p.k("a4<G.E>")
f=A.A(new A.a4(new A.bg(v,p),new C.d0O(h),o),o.k("G.E"))
e=f.length===0?new A.bg(v,p).gL(0):B.d.gL(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
a0=g.$2(t.a,A.b_(w))
if(a0>d){d=a0
e=t}}a1=A.b_(w)
p=x.S
a2=A.T(w,p)
a3=A.T(w,w)
a4=A.T(w,d2)
d2=x.gR
a5=A.T(w,d2)
a6=A.T(w,x.d9)
a7=A.T(w,d2)
a8=A.a([],x.s)
a9=new C.d10(new C.d0X(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dv(v,v.r,v.e),j=a2.gahU(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eP([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.K(0,i))break}if(h.$1(b0)&&a2.ak(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qK(J.dE(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d0L(a2,new C.d11(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.K)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dv(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cw<1>")
d2=A.A(new A.cw(b4,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.Ez(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.ID(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cw<1>")
d2=A.A(new A.cw(b6,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bG(0,new C.d0P(c6,b4))
for(d2=new A.cR(a4,a4.$ti.k("cR<1,2>")).gah(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aU(c7.b);j.C();){i=j.gT(j)
if(b6.ak(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gah(b5),i=new A.hL(j,new C.d0Q(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.b_(o,new C.d0R())
c6.push(new C.aG5(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bb8(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
h2e(d){var w=A.ae("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cA(d)
return w==null?null:w.b[1]},
fXI(d,e,f,g,h,i,j,k,l,m,n){return new C.Y6(k,f,j,e,l,n,m,d,g,h,i,null)},
az3(d,e,f,g,h,i,j){return new C.beM(i,d,e,f,j,h,g,null)},
an4:function an4(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAD:function aAD(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dMx:function dMx(d){this.a=d},
dMw:function dMw(d){this.a=d},
dMz:function dMz(d,e){this.a=d
this.b=e},
dMA:function dMA(d,e){this.a=d
this.b=e},
dMB:function dMB(d){this.a=d},
dMv:function dMv(d,e){this.a=d
this.b=e},
dMy:function dMy(d){this.a=d},
dMD:function dMD(d){this.a=d},
dMC:function dMC(d,e){this.a=d
this.b=e},
amZ:function amZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAA:function aAA(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dLY:function dLY(d){this.a=d},
dLW:function dLW(d){this.a=d},
dLX:function dLX(d){this.a=d},
dLZ:function dLZ(d,e){this.a=d
this.b=e},
dLT:function dLT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLr:function dLr(d){this.a=d},
dLs:function dLs(d,e){this.a=d
this.b=e},
dLG:function dLG(d){this.a=d},
dLE:function dLE(d){this.a=d},
dLF:function dLF(d,e){this.a=d
this.b=e},
dLH:function dLH(d){this.a=d},
dLI:function dLI(d,e){this.a=d
this.b=e},
dLS:function dLS(d,e){this.a=d
this.b=e},
dLQ:function dLQ(d,e){this.a=d
this.b=e},
dLP:function dLP(d,e){this.a=d
this.b=e},
dLL:function dLL(d,e){this.a=d
this.b=e},
dLK:function dLK(d){this.a=d},
dLM:function dLM(d,e){this.a=d
this.b=e},
dLJ:function dLJ(d){this.a=d},
dLN:function dLN(d){this.a=d},
dLO:function dLO(d){this.a=d},
dLR:function dLR(d,e){this.a=d
this.b=e},
dLf:function dLf(d,e){this.a=d
this.b=e},
dLg:function dLg(d,e){this.a=d
this.b=e},
dM0:function dM0(d,e,f){this.a=d
this.b=e
this.c=f},
dLV:function dLV(d,e,f){this.a=d
this.b=e
this.c=f},
dLU:function dLU(d){this.a=d},
dLh:function dLh(d){this.a=d},
dLi:function dLi(d){this.a=d},
dLj:function dLj(){},
dLk:function dLk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLo:function dLo(d,e){this.a=d
this.b=e},
dLn:function dLn(d,e){this.a=d
this.b=e},
dLm:function dLm(d){this.a=d},
dLp:function dLp(d,e){this.a=d
this.b=e},
dLl:function dLl(d){this.a=d},
dM_:function dM_(d){this.a=d},
dLB:function dLB(){},
dLC:function dLC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLA:function dLA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLw:function dLw(d,e,f){this.a=d
this.b=e
this.c=f},
dLv:function dLv(d,e,f){this.a=d
this.b=e
this.c=f},
dLt:function dLt(d,e){this.a=d
this.b=e},
dLx:function dLx(d){this.a=d},
dLy:function dLy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLu:function dLu(d,e){this.a=d
this.b=e},
dLz:function dLz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLD:function dLD(d,e){this.a=d
this.b=e},
dM7:function dM7(){},
dM8:function dM8(d,e){this.a=d
this.b=e},
dM9:function dM9(d){this.a=d},
dMa:function dMa(d,e){this.a=d
this.b=e},
dM3:function dM3(d){this.a=d},
dM1:function dM1(d,e){this.a=d
this.b=e},
dM4:function dM4(d,e){this.a=d
this.b=e},
dM5:function dM5(d,e){this.a=d
this.b=e},
dM6:function dM6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dMb:function dMb(d){this.a=d},
dM2:function dM2(d){this.a=d},
dLq:function dLq(d){this.a=d},
bb6:function bb6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d0J:function d0J(d){this.a=d},
d0I:function d0I(d,e){this.a=d
this.b=e},
d0K:function d0K(d){this.a=d},
d0H:function d0H(d,e){this.a=d
this.b=e},
fcT:function fcT(d,e){this.a=d
this.b=e},
fcU:function fcU(d){this.a=d},
fcV:function fcV(){},
fcR:function fcR(d,e){this.a=d
this.b=e},
fcS:function fcS(){},
fcY:function fcY(d,e){this.a=d
this.b=e},
fcZ:function fcZ(d){this.a=d},
fd_:function fd_(){},
fcW:function fcW(d){this.a=d},
fcX:function fcX(d,e){this.a=d
this.b=e},
ID:function ID(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ez:function Ez(d,e){this.a=d
this.b=e},
bb8:function bb8(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d0M:function d0M(d){this.a=d},
d12:function d12(d){this.a=d},
d0V:function d0V(d){this.a=d},
d0W:function d0W(){},
d0U:function d0U(d){this.a=d},
d0N:function d0N(){},
d0T:function d0T(d){this.a=d},
d0S:function d0S(d,e){this.a=d
this.b=e},
d0O:function d0O(d){this.a=d},
d0X:function d0X(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d0Y:function d0Y(d){this.a=d},
d0Z:function d0Z(d){this.a=d},
d1_:function d1_(){},
d10:function d10(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d11:function d11(){},
d0L:function d0L(d,e,f,g,h,i,j,k,l,m){var _=this
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
d0P:function d0P(d,e){this.a=d
this.b=e},
d0Q:function d0Q(d){this.a=d},
d0R:function d0R(){},
aG5:function aG5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bb9:function bb9(d,e){this.b=d
this.a=e},
d13:function d13(){},
d14:function d14(d){this.a=d},
d15:function d15(d){this.a=d},
d16:function d16(){},
beN:function beN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bae:function bae(d,e){this.b=d
this.a=e},
bsg:function bsg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eXx:function eXx(d){this.a=d},
bi4:function bi4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ezc:function ezc(d){this.a=d},
ezb:function ezb(d,e){this.a=d
this.b=e},
Y6:function Y6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
az1:function az1(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dgk:function dgk(d,e){this.a=d
this.b=e},
dgj:function dgj(d){this.a=d},
dgh:function dgh(d){this.a=d},
dgi:function dgi(d){this.a=d},
dgt:function dgt(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgs:function dgs(d,e){this.a=d
this.b=e},
dgv:function dgv(){},
dgy:function dgy(d){this.a=d},
dgr:function dgr(d,e){this.a=d
this.b=e},
dgx:function dgx(){},
dgz:function dgz(d){this.a=d},
dgq:function dgq(d,e){this.a=d
this.b=e},
dgA:function dgA(d){this.a=d},
dgp:function dgp(d){this.a=d},
dgB:function dgB(d){this.a=d},
dgo:function dgo(d){this.a=d},
dgC:function dgC(d){this.a=d},
dgn:function dgn(d){this.a=d},
dgD:function dgD(d){this.a=d},
dgm:function dgm(d){this.a=d},
dgE:function dgE(d){this.a=d},
dgl:function dgl(d,e){this.a=d
this.b=e},
dgw:function dgw(d){this.a=d},
ab_:function ab_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beM:function beM(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aaZ:function aaZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
beL:function beL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dgF:function dgF(d){this.a=d},
dgG:function dgG(d,e){this.a=d
this.b=e},
az2:function az2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aF8:function aF8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ab0:function ab0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dgP:function dgP(d){this.a=d},
Ir:function Ir(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fSE(d){var w=d.R,v=x.N
return w.iH(w,new C.c40(),v,v)},
hlt(d){var w=d.bB
if(w>=0)return w
return 5},
fSG(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fSE(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
fSF(d,e){var w=C.fSG(d,e)
if(w!=null&&w.c8(new A.Q(Date.now(),0,!1)))return!0
return!1},
hlu(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a_(C.fSE(d),w,w)
u=C.fSG(d,e)
t=u!=null&&u.c8(new A.Q(Date.now(),0,!1))?u:new A.Q(Date.now(),0,!1)
v.n(0,s,t.bM(A.dB(30,0,0,0,0,0).a).a4().ab())
d.R=v},
aWV(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aWV=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.l1(t,B.GC),$async$aWV)
case 3:if(l){u=!0
w=1
break}u=A.kG(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.GC,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWV,v)},
c40:function c40(){},
hlr(){var w,v=$.p1(),u=J.e0(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"FT"+B.d.fN(u)},
H8(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$H8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$H8)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eW("ngmy_family_tree_backup_codes_v1",null,!1,B.bE),$async$H8)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.a_(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a6(m)
$.al.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$H8,v)},
a5c(d){return C.hls(d)},
hls(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a5c=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$a5c)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hv("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,B.cD,null),$async$a5c)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a6(p)
$.al.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a5c,v)},
c4_(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c4_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.H8(),$async$c4_)
case 3:t=m.jk(f),t=t.gah(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a7(q)
o=p.h(q,"email")
p=B.a.i(J.k(o==null?"":o).toLowerCase())===n&&J.y(p.h(q,"active"),!0)}else p=!1
if(p){u=r.a
w=1
break}w=4
break
case 5:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4_,v)},
LV(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$LV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c4_(d),$async$LV)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.H8(),$async$LV)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dS(A.a_(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.Q(Date.now(),0,!1).a4().ab())
r.n(s,t,o)
w=9
return A.b(C.a5c(s),$async$LV)
case 9:case 8:u=t
w=1
break
case 5:n=C.hlr()
w=10
return A.b(C.H8(),$async$LV)
case 10:s=f
J.aE(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a4().ab(),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.K))
w=11
return A.b(C.a5c(s),$async$LV)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LV,v)},
aWU(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aWU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.H8(),$async$aWU)
case 3:t=f
for(s=J.df(t),r=s.gdH(t),r=r.dA(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a5c(t),$async$aWU)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aWU,v)},
a5d(d,e,f){var w=0,v=A.j(x.H),u
var $async$a5d=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.an3(d,e),$async$a5d)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.LV(d),$async$a5d)
case 7:w=4
break
case 5:w=8
return A.b(C.aWU(d),$async$a5d)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a5d,v)},
amY(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$amY=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.an3(f,e),$async$amY)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bY(),$async$amY)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.H8(),$async$amY)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a7(q)
if(!J.y(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amY,v)},
aWT(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aWT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bY(),$async$aWT)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.H8(),$async$aWT)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a7(t)
if(!J.y(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWT,v)},
hlv(){var w,v=$.p1(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"FT"+B.d.fN(u)},
an0(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$an0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$an0)
case 3:if(!g){u=null
w=1
break}t=C.hlv()
w=4
return A.b(A.Tk(),$async$an0)
case 4:s=g
r=B.dF.aG(B.Q.am(d.eF(),null))
r=B.cR.gcs().aG(r)
q=e?999:2
J.aE(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.K))
w=5
return A.b(A.a5e(s),$async$an0)
case 5:p=e?999:2
u=new A.Zg("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$an0,v)},
an_(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$an_=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Tk(),$async$an_)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aM(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aWT(J.k(l==null?"":l),j),$async$an_)
case 4:if(!a0)$.al.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{r=B.c3.c6(0,B.cy.aG(t))
s=C.fSH(r)}catch(f){q=A.a6(f)
$.al.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dS(A.a_(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a4().ab())
o.n(p,g,l)}w=5
return A.b(A.a5e(p),$async$an_)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$an_,v)},
fSH(d){var w,v,u,t,s=null
try{w=B.Q.aF(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hlx(A.a_(w,x.N,x.z))
return u}catch(t){v=A.a6(t)
$.al.$1("[family tree sync] parse: "+A.t(v))
return s}},
fCY(d){var w=0,v=A.j(x.m),u,t,s
var $async$fCY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.an_(t[1])
w=1
break}u=null
w=1
break}u=C.fSH(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fCY,v)},
hlx(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d6(v,x.f)
u=A.cA(u,new C.c42(),u.$ti.k("G.E"),x.k)
t=A.a2(u).k("a4<G.E>")
s=A.A(new A.a4(u,new C.c43(),t),t.k("G.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.Q(Date.now(),0,!1)
q=A.T(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jk(p),t=t.gah(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d6(l,u)
n=A.cA(n,new C.c44(),n.$ti.k("G.E"),o)
k=A.a2(n).k("a4<G.E>")
j=A.A(new A.a4(n,new C.c45(),k),k.k("G.E"))
if(j.length!==0)q.n(0,m,j)}return new C.an1(h,w,s,r,q)},
an3(d,e){var w=0,v=A.j(x.y),u,t
var $async$an3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.LN(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zN(d),$async$an3)
case 3:u=t.ct(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$an3,v)},
c4b(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c4b=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zN(d),$async$c4b)
case 3:t=s.b5(f,new C.c4c(),x.cs)
t=A.A(t,t.$ti.k("ai.E"))
B.d.b_(t,new C.c4d())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c4b,v)},
Tl(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Tl=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.an3(e,d),$async$Tl)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.LV(e),$async$Tl)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.zN(e),$async$Tl)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dE(r,new C.c49(g))
r=A.A(t,t.$ti.k("G.E"))}t=J.a7(r)
if(t.gai(r)){u=null
w=1
break}t=t.di(r,new C.c4a(e),x.k)
r=A.A(t,t.$ti.k("ai.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Jn(e,o),$async$Tl)
case 14:n=i
if(J.ct(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.an1(s,B.a.i(e.toLowerCase()),r,new A.Q(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Tl,v)},
aWY(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aWY=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Tl(d,e,f,g),$async$aWY)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aI(t,s,"_")
r=q.a
u=A.Fe(A.Iz(q.eF(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWY,v)},
aWX(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aWX=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Tl(d,e,f,g),$async$aWX)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.an0(r,f),$async$aWX)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aD9(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWX,v)},
Tm(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Tm=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fCY(a0),$async$Tm)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.amY(g.a,d,e,f,s,r),$async$Tm)
case 6:if(!a2){if(r)throw A.R(A.bb("This backup expired or the sender's tree is no longer available."))
throw A.R(A.bb("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bxB(e,j),$async$Tm)
case 12:case 11:w=13
return A.b(C.afi(e,j,s),$async$Tm)
case 13:h=n.h(0,i)
w=h!=null&&J.ct(h)?14:15
break
case 14:w=16
return A.b(C.zY(e,i,h),$async$Tm)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.blA(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Tm,v)},
an1:function an1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c47:function c47(){},
c48:function c48(){},
c46:function c46(){},
c42:function c42(){},
c43:function c43(){},
c44:function c44(){},
c45:function c45(){},
c4c:function c4c(){},
c4d:function c4d(){},
c49:function c49(d){this.a=d},
c4a:function c4a(d){this.a=d},
fL4(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fb(null,x.H)
return A.ho(d,new C.an2(w,e,g,i,f,h,null),!0,null,x.H)},
d0G(d,e,f,g,h,i,j,k){return new C.bb5(i,e,k,j,g,f,h,d,null)},
an2:function an2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAC:function aAC(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dMk:function dMk(d){this.a=d},
dMl:function dMl(d,e,f){this.a=d
this.b=e
this.c=f},
dMp:function dMp(d,e){this.a=d
this.b=e},
dMq:function dMq(d){this.a=d},
dMh:function dMh(d){this.a=d},
dMi:function dMi(d,e){this.a=d
this.b=e},
dMj:function dMj(d,e){this.a=d
this.b=e},
dMo:function dMo(d){this.a=d},
dMn:function dMn(d,e){this.a=d
this.b=e},
dMm:function dMm(){},
dMs:function dMs(d){this.a=d},
dMt:function dMt(d,e){this.a=d
this.b=e},
dMr:function dMr(d,e){this.a=d
this.b=e},
d17:function d17(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bb7:function bb7(d,e,f){this.d=d
this.e=e
this.a=f},
aah:function aah(d,e,f){this.c=d
this.d=e
this.a=f},
bb5:function bb5(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bba:function bba(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Yr:function Yr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAB:function aAB(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dMc:function dMc(d,e){this.a=d
this.b=e},
dMd:function dMd(d){this.a=d},
dMe:function dMe(d){this.a=d},
dMf:function dMf(d){this.a=d},
dMg:function dMg(d){this.a=d},
Ys:function Ys(d){this.a=d},
bgc:function bgc(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dMu:function dMu(d,e){this.a=d
this.b=e},
aVu(d,e){return new C.aVt(d,e,null)},
aVt:function aVt(d,e,f){this.c=d
this.d=e
this.a=f},
hKq(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
hRE(d){return A.c1(B.K,null,new C.fsu(new C.td(A.M(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fUy(d,e){return new C.apU(e,d,null)},
aNi(d,e,f,g,h,i,j){var w=C.hKq(i)
if(w!=null)return A.bt(e,new A.a3(j,f,new C.a4g(w,!0,null),null),B.ap)
return K.aME(e,B.bQ,f,g,h,i,j)},
ll:function ll(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4g:function a4g(d,e,f){this.c=d
this.d=e
this.a=f},
bfV:function bfV(d,e){var _=this
_.e=_.d=$
_.cP$=d
_.b0$=e
_.c=_.a=null},
dyk:function dyk(d){this.a=d},
dyl:function dyl(){},
dym:function dym(d,e){this.a=d
this.b=e},
bfU:function bfU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fsu:function fsu(d){this.a=d},
fst:function fst(d,e){this.a=d
this.b=e},
fss:function fss(d,e){this.a=d
this.b=e},
fsr:function fsr(d,e){this.a=d
this.b=e},
apU:function apU(d,e,f){this.c=d
this.d=e
this.a=f},
cbG:function cbG(d,e){this.a=d
this.b=e},
aIr:function aIr(){},
hRp(d){var w=null
return A.cf(w,w,!0,w,new C.frU(),d,w,!0,!0,x.e2)},
hSA(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.fz4(h,g,f,e),d,w,!0,!0,x.N)},
hRr(d,e){var w=null
return A.cf(w,w,!0,w,new C.frW(e),d,w,!0,!0,x.dY)},
hRq(d){var w=null
return A.cf(w,w,!0,w,new C.frV(),d,w,!0,!0,x.c5)},
aQ9:function aQ9(d,e){this.a=d
this.b=e},
aQ8:function aQ8(d){this.a=d},
aOe:function aOe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frU:function frU(){},
fz4:function fz4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frW:function frW(d){this.a=d},
frV:function frV(){},
X5:function X5(d,e){this.c=d
this.a=e},
avW:function avW(){var _=this
_.d=$
_.c=_.a=_.e=null},
cUj:function cUj(d){this.a=d},
cUk:function cUk(d){this.a=d},
cUi:function cUi(d,e){this.a=d
this.b=e},
cUl:function cUl(d){this.a=d},
cUm:function cUm(d){this.a=d},
X4:function X4(d){this.a=d},
avV:function avV(){this.d=$
this.c=this.a=null},
cUf:function cUf(d){this.a=d},
cUg:function cUg(d){this.a=d},
cUh:function cUh(d){this.a=d},
WD:function WD(d){this.a=d},
auF:function auF(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
crT:function crT(){},
crZ:function crZ(d){this.a=d},
cs_:function cs_(d){this.a=d},
cs0:function cs0(d){this.a=d},
crY:function crY(){},
cs1:function cs1(d){this.a=d},
cs2:function cs2(d){this.a=d},
crX:function crX(){},
cs3:function cs3(d,e){this.a=d
this.b=e},
crW:function crW(d,e){this.a=d
this.b=e},
crU:function crU(d,e){this.a=d
this.b=e},
cs4:function cs4(d){this.a=d},
crV:function crV(){},
cs5:function cs5(d){this.a=d},
a_9:function a_9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bs8:function bs8(){this.d=$
this.c=this.a=null},
eX_:function eX_(d,e){this.a=d
this.b=e},
eX0:function eX0(d){this.a=d},
eX1:function eX1(d,e){this.a=d
this.b=e},
a9l:function a9l(d,e){this.a=d
this.b=e},
Em:function Em(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bs6:function bs6(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
eWY:function eWY(d,e){this.a=d
this.b=e},
auy:function auy(d,e){this.c=d
this.a=e},
bs7:function bs7(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
eWZ:function eWZ(d){this.a=d},
bs5:function bs5(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aKz:function aKz(){},
aKA:function aKA(){},
bzw(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bz(u),s=B.o.D(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.oi(B.o.u(t),A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fqK(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aU(B.o.u(s),2,"0")
n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.W2(A.dl(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aMV(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aMV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hS().kF(85,1280,B.eD),$async$aMV)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f8(),$async$aMV)
case 8:r=e
if(J.aa(r)===0){u=null
w=1
break}q=C.fUx()
w=9
return A.b(C.cbF(q,r),$async$aMV)
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
o=A.a6(l)
$.al.$1("[worksheets] pick photo failed: "+A.t(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aMV,v)},
aNg(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aNg=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cbC(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gaj(g.split(",")):g
p=B.cy.aG(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.V().K6(p,!0,null,i).cK(0,B.fK),$async$aNg)
case 9:n=a1
w=10
return A.b(n.lT(),$async$aNg)
case 10:m=a1
w=11
return A.b(J.aO_(m).hf(B.fO),$async$aNg)
case 11:l=a1
J.aO_(m).q()
if(l==null){w=8
break}i=J.f6(B.dD.gaN(l))
k="data:image/png;base64,"+B.cR.gcs().aG(i)
if(J.aa(k)<=r){u=k
w=1
break}o=B.k.U(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a6(f)
$.al.$1("[worksheets] thumbnail shrink failed: "+A.t(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aNg,v)},
fqK:function fqK(){},
td:function td(d){this.a=d},
apT:function apT(d,e,f){this.c=d
this.d=e
this.a=f},
aC3:function aC3(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
ewm:function ewm(d,e){this.a=d
this.b=e},
ewd:function ewd(d){this.a=d},
ewe:function ewe(d){this.a=d},
ewk:function ewk(d,e){this.a=d
this.b=e},
ewj:function ewj(d,e){this.a=d
this.b=e},
ewg:function ewg(d,e){this.a=d
this.b=e},
ewf:function ewf(d,e){this.a=d
this.b=e},
ewh:function ewh(d){this.a=d},
ewi:function ewi(d,e){this.a=d
this.b=e},
ewl:function ewl(d,e){this.a=d
this.b=e},
ew8:function ew8(d,e){this.a=d
this.b=e},
ewc:function ewc(d){this.a=d},
ewb:function ewb(d,e){this.a=d
this.b=e},
ewa:function ewa(d){this.a=d},
ewn:function ewn(d,e){this.a=d
this.b=e},
ewo:function ewo(d,e){this.a=d
this.b=e},
ew9:function ew9(d,e){this.a=d
this.b=e},
h5Y(d,e,f){var w="thumbnailPath",v=e.ac()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.Q(Date.now(),0,!1).a4().ab(),"project",v],x.N,x.z)},
fqL(d,e,f){var w=0,v=A.j(x.N),u
var $async$fqL=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Q.am(C.h5Y(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fqL,v)},
bzy(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bzy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fqL(!0,d,e),$async$bzy)
case 4:w=3
return A.b(r.apR(g,d,e.a),$async$bzy)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dF.aG(B.Q.am(C.h5Y(d,e,null),null))
u="NGMY_WS:"+B.jY.gcs().aG(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzy,v)},
fZ2(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fKM(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.aa(s)===0)return!1
if(J.cX(s,"NGMYWSSYNC2|"))return!0
if(J.cX(s,"NGMY_WS:"))return!0
if(J.eT(s,t))return!0
if(J.cX(s,"{"))try{w=B.Q.aF(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hPt(d){var w,v,u,t=C.fZ2(d)
if(t==null)return null
if(C.fKM(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.fKM(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.fKM(v))return v}return null},
fKL(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.aa(q)===0)return r
if(J.cX(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cX(q,"NGMY_WS:")){v=B.c3.c6(0,B.cy.aG(J.mn(q,8)))
w=t.a(B.Q.aF(0,v,r))}else w=t.a(B.Q.aF(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fFt(A.a_(u,x.N,x.z))
return t}catch(s){return r}},
bzx(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bzx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.apQ(t[1]),$async$bzx)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fKL(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fKL(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzx,v)},
fKK(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l4(w,v,d.c,d.d,new A.Q(Date.now(),0,!1))},
bz4(){var w=0,v=A.j(x.o),u,t
var $async$bz4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Fp(),$async$bz4)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fKL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bz4,v)},
h6Q(d,e,f,g){return A.c1(B.K,null,new C.fyX(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fyX:function fyX(d,e,f){this.a=d
this.b=e
this.c=f},
abl:function abl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ewq:function ewq(d,e){this.a=d
this.b=e},
ewr:function ewr(d,e){this.a=d
this.b=e},
ews:function ews(d,e){this.a=d
this.b=e},
ewt:function ewt(d,e){this.a=d
this.b=e},
ewp:function ewp(d){this.a=d},
apN:function apN(d,e,f){this.c=d
this.d=e
this.a=f},
bhy:function bhy(){var _=this
_.c=_.a=_.e=_.d=null},
ew3:function ew3(d,e){this.a=d
this.b=e},
ew4:function ew4(d){this.a=d},
ew5:function ew5(d){this.a=d},
apS:function apS(d){this.a=d},
aC2:function aC2(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ew7:function ew7(d){this.a=d},
ew6:function ew6(d){this.a=d},
hoK(d,e,f,g,h){return new C.Mx(h,g,d,e,f,null)},
aGN:function aGN(d,e){this.a=d
this.b=e},
Mx:function Mx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aC4:function aC4(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
ewQ:function ewQ(){},
ewM:function ewM(d,e){this.a=d
this.b=e},
ewN:function ewN(d){this.a=d},
ewx:function ewx(d){this.a=d},
ewv:function ewv(d){this.a=d},
eww:function eww(d){this.a=d},
ewG:function ewG(d,e){this.a=d
this.b=e},
ewD:function ewD(d,e){this.a=d
this.b=e},
ewE:function ewE(d,e){this.a=d
this.b=e},
ewF:function ewF(d,e,f){this.a=d
this.b=e
this.c=f},
ewB:function ewB(d,e,f){this.a=d
this.b=e
this.c=f},
ewz:function ewz(d){this.a=d},
ewA:function ewA(d){this.a=d},
ewC:function ewC(d){this.a=d},
ewT:function ewT(d){this.a=d},
ewS:function ewS(d){this.a=d},
ewU:function ewU(d){this.a=d},
ewR:function ewR(d){this.a=d},
ewu:function ewu(d){this.a=d},
ewy:function ewy(d,e){this.a=d
this.b=e},
ewP:function ewP(d,e){this.a=d
this.b=e},
ewO:function ewO(d,e){this.a=d
this.b=e},
ewJ:function ewJ(d){this.a=d},
ewK:function ewK(d){this.a=d},
ewL:function ewL(d,e){this.a=d
this.b=e},
ewI:function ewI(d,e){this.a=d
this.b=e},
ewH:function ewH(d,e,f){this.a=d
this.b=e
this.c=f},
btU:function btU(){},
zD(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ae("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aI(v,w,"_")},
adM(d,e,f){return C.hE6(d,e,f)},
hE6(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$adM=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ap("String",e,f),$async$adM)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a6(o)
$.al.$1("[worksheets] setString failed for "+e+": "+A.t(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adM,v)},
adL(d,e){return C.hE5(d,e)},
hE5(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$adL=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$adL)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a6(q)
$.al.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$adL,v)},
hCT(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QY(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bwC(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bwC=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b_a(q),$async$bwC)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aNg(q,!1),$async$bwC)
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
return A.i($async$bwC,v)},
hcD(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aM(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aM(d.h(0,"quantity"))
if(w==null)w=null
v=A.aM(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.qv(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qv(p,J.k(u==null?"":u),1,o,q)},
fFt(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d6(s,x.f)
w=A.cA(w,new C.crh(),w.$ti.k("G.E"),x.Q)
v=A.a2(w).k("a4<G.E>")
r=A.A(new A.a4(w,new C.cri(),v),v.k("G.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.l4(w,v,u,r,t==null?new A.Q(Date.now(),0,!1):t)},
hHW(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.WW
case"female":case"f":return D.af5
default:return D.wR}},
h2G(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fON(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hHW(v==null?j:J.k(v))
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
m=A.aM(d.h(0,"birthOrder"))
m=m==null?j:B.k.N(m)
if(m==null)m=1
l=J.y(d.h(0,"hidden"),!0)
k=A.aM(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.hR(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hHY(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.KS
case"viewer":return D.k7
default:return D.t_}},
hHZ(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Ff(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bxR(d,e){return B.a.i(e.toLowerCase())===C.Ff(d,e)&&d.y!==D.k7},
tq(d,e){var w,v=d.y
if(v===D.k7)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Ff(d,e))return!0
if(v===D.KS)return!0
v=d.e
return new A.J(v,A.fKQ(),A.U(v).k("J<1,n>")).t(0,w)},
hHo(d){return J.dE(d,new C.fca()).gJ(0)},
fzj(d){var w=0,v=A.j(x.y),u,t
var $async$fzj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zN(d),$async$fzj)
case 3:u=t.qr(f,new C.fzk(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fzj,v)},
bxB(d,e){var w=0,v=A.j(x.H),u,t
var $async$bxB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zN(d),$async$bxB)
case 3:t=g
if(J.qr(t,new C.fbm(e))){w=1
break}if(C.hHo(t)>=2)throw A.R(A.bb("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bxB,v)},
aim(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d6(n,x.f)
w=A.cA(w,new C.bJU(),w.$ti.k("G.E"),x.P)
v=A.a2(w).k("a4<G.E>")
m=A.A(new A.a4(w,new C.bJV(),v),v.k("G.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b5(u,new C.bJW(),x.N)
t=A.A(l,l.$ti.k("ai.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.y(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bh(J.k(r==null?"":r))
if(r==null)r=new A.Q(Date.now(),0,!1)
q=A.aM(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.N(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.ko(l,w,v,!s,t,m,r,q,p,C.hHY(o==null?null:J.k(o)))},
h2P(d){var w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.an(v,0,8)},
BQ(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$BQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.PR(d),$async$BQ)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ax(),$async$BQ)
case 4:t=f
w=5
return A.b(t.a3N(0),$async$BQ)
case 5:w=6
return A.b(C.f3u(t,l),$async$BQ)
case 6:s=f
if(J.ct(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aS(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fZB(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oh(l,n),$async$BQ)
case 11:u=n
w=1
break
case 10:case 8:m=A.aS(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.fZB(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oh(l,n),$async$BQ)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$BQ,v)},
f3u(d,e){return C.hAq(d,e)},
hAq(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f3u=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aS(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zD(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.Q.aF(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aU(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.aa(n)===0){w=7
break}m=A.aS(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zD(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Q.aF(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fFt(A.a_(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aS(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zD(a9)+"_"+n))
i=C.hCT(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b_a(h),$async$f3u)
case 17:g=b1
if(g!=null){i=i.QY(g)
p=!0}case 16:J.cc(q,i)
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
case 8:J.Q0(q,new C.f3v())
if(p&&J.aa(q)!==0)C.oh(a9,q)
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
return A.i($async$f3u,v)},
by0(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$by0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.PR(d),$async$by0)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.BQ(r),$async$by0)
case 4:t=p.aU(g)
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
return A.i($async$by0,v)},
fZB(d){var w,v,u,t
try{w=B.Q.aF(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d6(w,x.f)
v=A.cA(v,new C.f_e(),v.$ti.k("G.E"),x.i)
u=A.a2(v).k("a4<G.E>")
v=A.A(new A.a4(v,new C.f_f(),u),u.k("G.E"))
B.d.b_(v,new C.f_g())
return v}catch(t){v=A.a([],x.D)
return v}},
oh(d,e){return C.hRf(d,e)},
hRf(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oh=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.PR(b2),$async$oh)
case 3:a8=b5
if(J.aa(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ax(),$async$oh)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zD(a8)
p=A.aS(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b5(x.j.a(B.Q.aF(0,p,null)),new C.frL(),a2).fH(0)
a2=J.b5(b3,new C.frM(),a2).bX(0,new C.frN())
n=A.d8(a2,a2.$ti.k("G.E"))
a2=o,a2=A.eg(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eT(n,m)?17:18
break
case 17:a5=C.zD(a8)
l=A.aS(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a6u(l),$async$oh)
case 19:t=21
a5=C.zD(a8)
k=A.aS(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Q.aF(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a6u(a5==null?null:J.k(a5)),$async$oh)
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
return A.b(C.adL(r,"ngmy_worksheet_item_v3_"+C.zD(a8)+"_"+m),$async$oh)
case 29:w=30
return A.b(C.adL(r,"ngmy_worksheet_thumb_v3_"+C.zD(a8)+"_"+m),$async$oh)
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
case 14:case 10:a2=J.cB(b3),a3=a2.gah(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bwC(h),$async$oh)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.adM(r,"ngmy_worksheet_thumb_v3_"+C.zD(a8)+"_"+a4,f),$async$oh)
case 40:g=i.QY(f)
w=38
break
case 39:$.al.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.adL(r,"ngmy_worksheet_thumb_v3_"+C.zD(a8)+"_"+a4),$async$oh)
case 41:g=i.QY(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.adL(r,"ngmy_worksheet_thumb_v3_"+C.zD(a8)+"_"+a4),$async$oh)
case 42:case 34:a4=i.a
w=43
return A.b(C.adM(r,"ngmy_worksheet_item_v3_"+C.zD(a8)+"_"+a4,B.Q.am(g.ac(),null)),$async$oh)
case 43:e=b5
if(!e){$.al.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cc(q,i.a)
w=31
break
case 32:w=44
return A.b(C.adM(r,"ngmy_worksheets_index_v3_"+C.zD(a8),B.Q.am(q,null)),$async$oh)
case 44:d=b5
if(!d){$.al.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eE(b3,new C.frO(q))
a4=a3.$ti.k("cV<1,a1<n,@>>")
a7=A.A(new A.cV(a3,new C.frP(),a4),a4.k("G.E"))
a0=a7
w=45
return A.b(C.adM(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.Q.am(a0,null)),$async$oh)
case 45:w=46
return A.b(J.hbK(r),$async$oh)
case 46:if(a2.gci(b3)&&J.aa(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.a6(b1)
$.al.$1("[worksheets] saveWorksheetProjects error: "+A.t(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$oh,v)},
JP(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$JP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BQ(d),$async$JP)
case 3:t=g
s=J.cB(t)
r=s.bi(t,new C.fzi(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.oh(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$JP,v)},
bxO(d,e){var w=0,v=A.j(x.H),u
var $async$bxO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.BQ(d),$async$bxO)
case 2:u=g
J.n5(u,new C.fcC(e))
w=3
return A.b(C.oh(d,u),$async$bxO)
case 3:return A.h(null,v)}})
return A.i($async$bxO,v)},
Fh(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Fh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$Fh)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aS(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Q.aF(0,i,null)
if(x.j.b(t)){j=J.d6(t,x.f)
j=A.cA(j,new C.feM(),j.$ti.k("G.E"),x.k)
s=A.a2(j).k("a4<G.E>")
r=A.A(new A.a4(j,new C.feN(),s),s.k("G.E"))
B.d.b_(r,new C.feO())
k=r}}catch(h){}w=4
return A.b(C.f_X(d),$async$Fh)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hAN(k,p,d)
j=A.U(o)
s=j.k("J<1,a1<n,@>>")
s=A.A(new A.J(o,new C.feP(),s),s.k("ai.E"))
n=B.Q.am(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.P3(d,o),$async$Fh)
case 7:case 6:j=j.k("a4<1>")
m=A.A(new A.a4(o,new C.feQ(d),j),j.k("G.E"))
if(m.length!==0)C.aLR(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Fh,v)},
frx(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$frx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P3(d,e),$async$frx)
case 3:t=J.dE(e,new C.fry(d))
s=A.A(t,t.$ti.k("G.E"))
if(s.length===0){u=!0
w=1
break}u=C.aLR(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$frx,v)},
a0L(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0L=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ax(),$async$a0L)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aS(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Q.aF(0,l,null)
if(x.j.b(u)){m=J.d6(u,x.f)
m=A.cA(m,new C.fzd(),m.$ti.k("G.E"),x.k)
t=A.a2(m).k("a4<G.E>")
s=A.A(new A.a4(m,new C.fze(),t),t.k("G.E"))
o=s}}catch(k){}q=J.pO(o,new C.fzf(e))
if(B.a.i(e.x).length===0&&C.tq(e,d)){m=B.a.i(d.toLowerCase())
p=e.aAu(e.y===D.k7?D.k7:D.t_,m)}else p=e
if(q===-1)J.p5(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.P3(d,o),$async$a0L)
case 3:w=C.tq(p,d)?4:5
break
case 4:w=6
return A.b(C.aLQ(C.Ff(p,d),p),$async$a0L)
case 6:if(!g)$.al.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0L,v)},
aM_(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aM_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Fh(d),$async$aM_)
case 2:u=g
t=J.cB(u)
s=A.qK(t.eE(u,new C.fcj(e)))
t.bo(u,new C.fck(e))
w=3
return A.b(C.P3(d,u),$async$aM_)
case 3:w=s!=null&&C.bxR(s,d)?4:5
break
case 4:w=6
return A.b(C.f_i(e),$async$aM_)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aM_,v)},
afv(d){var w=d.f,v=A.U(w).k("a4<1>")
w=A.A(new A.a4(w,new C.fzo(),v),v.k("G.E"))
return w},
fIw(d,e){var w,v=d.f,u=A.qK(new A.a4(v,new C.fbV(e),A.U(v).k("a4<1>")))
v=C.afv(d)
w=A.U(v).k("a4<1>")
v=A.A(new A.a4(v,new C.fbW(e,u),w),w.k("G.E"))
B.d.b_(v,new C.fbX())
return v},
hI1(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h6T(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bi(C.fIw(d,u),new C.fz5(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hJv(d,e){var w
if(e==null||e.length===0)return 1
w=C.fIw(d,e)
if(w.length===0)return 1
return new A.J(w,new C.ffy(),A.U(w).k("J<1,I>")).fv(0,B.z5)+1},
hR8(d){var w,v=C.afv(d)
if(v.length===0)return null
w=new A.a4(v,new C.fru(),A.U(v).k("a4<1>"))
if(!w.gai(0))return w.gL(0)
return B.d.gL(v)},
hHX(d){return A.E(["id",d.a,"name",d.b,"gender",C.h2G(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hJq(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.b_(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.K(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.wR?n:q.c
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
d=q.aAp(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cAT(a1,w,a3.d,a2.y,s,a0,v)},
zN(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$zN)
case 3:q=f
p=B.a.gV(B.a.i(d.toLowerCase()))
o=A.aS(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Q.aF(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d6(t,x.f)
p=A.cA(p,new C.feJ(),p.$ti.k("G.E"),x.k)
s=A.a2(p).k("a4<G.E>")
p=A.A(new A.a4(p,new C.feK(),s),s.k("G.E"))
B.d.b_(p,new C.feL())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zN,v)},
afi(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$afi=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.t_:D.k7
a7=C.Ff(b2,b3)
w=2
return A.b(C.zN(b1),$async$afi)
case 2:a8=b5
a9=J.cB(a8)
b0=a9.bi(a8,new C.frs(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bxB(b1,b2),$async$afi)
case 5:case 4:if(b0===-1){u=b2.aAu(a6,a7)
a9.ck(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.K)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.K)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.wR?i:l.c
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
s.n(0,m,l.aAp(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bg<2>")
s=A.A(new A.bg(s,k),k.k("G.E"))
k=a5?D.t_:D.k7
u=t.xH(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.P3(b1,a8),$async$afi)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aLQ(B.a.i(b3.toLowerCase()),u),$async$afi)
case 9:case 8:return A.h(null,v)}})
return A.i($async$afi,v)},
fZX(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.Q(Date.now(),0,!1).a4().ab(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("J<1,a1<n,@>>"),k=A.A(new A.J(m,C.h65(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a4().ab(),"updatedAt",o],r,x.K),"createdAt",s.a4().ab(),"updatedAt",o],r,x.z)},
fZY(d,e){var w=new A.Q(Date.now(),0,!1).a4().ab(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("J<1,a1<n,@>>")
u=A.A(new A.J(u,C.h65(),t),t.k("ai.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a4().ab(),"updatedAt",w],x.N,x.z)},
hyq(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.aim(A.a_(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fKQ(),A.U(j).k("J<1,n>")).bX(0,new C.f_K())
t=A.A(j,j.$ti.k("G.E"))
if(u===v)s=D.t_
else s=B.d.t(t,u)?D.KS:D.k7
return w.aAu(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.aim(A.a_(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d6(q,h)
h=A.cA(h,new C.f_L(),h.$ti.k("G.E"),x.P)
p=A.a2(h).k("a4<G.E>")
o=A.A(new A.a4(h,new C.f_M(),p),p.k("G.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b5(n,new C.f_N(),x.N).bX(0,new C.f_O())
t=A.A(h,h.$ti.k("G.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.t_
else s=B.d.t(t,u)?D.KS:D.k7
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bh(J.k(l==null?"":l))
if(l==null)l=new A.Q(Date.now(),0,!1)
j=A.aM(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.ko(h,r,p,!m,t,o,l,j,v,s)},
f_X(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f_X=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.aa(a0)===0){u=null
w=1
break}t=4
r=new C.f00()
h=x.N
g=x.z
w=7
return A.b(A.iD(A.a([A.la("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bE),r.$2(A.la("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bE),"collaborator"),r.$2(A.la("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bE),"public")],x.cl),x.U),$async$f_X)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.T(h,g)
h=A.A(p,g)
l=h
J.fU(l,o)
J.fU(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.aa(j)!==0)J.aE(m,j,k)}l=m
h=A.a2(l).k("bg<2>")
h=A.cA(new A.bg(l,h),new C.f_Y(a0),h.k("G.E"),x.k)
l=A.a2(h).k("a4<G.E>")
l=A.A(new A.a4(h,new C.f_Z(),l),l.k("G.E"))
B.d.b_(l,new C.f0_())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a6(a1)
d=J.k(i)
l=B.a.t(d,"Could not find the table 'public.family_trees'")||B.a.t(d,'relation "public.family_trees" does not exist')
h=$.al
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
return A.i($async$f_X,v)},
hAN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gai(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f49(),v).bX(0,new C.f4a())
t=A.d8(u,u.$ti.k("G.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Ff(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.k7){m=q.e
m=!new A.J(m,A.fKQ(),A.U(m).k("J<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gah(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hJq(l,v)
o=C.Ff(k,w)
p=v.d
s.n(0,u,o===w?k.b76(p,D.t_):k.b76(p,v.y))}j=s.$ti.k("bg<2>")
j=A.A(new A.bg(s,j),j.k("G.E"))
B.d.b_(j,new C.f4b())
return j},
P3(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$P3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$P3)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b5(e,new C.f6b(),x.a)
s=A.A(s,s.$ti.k("ai.E"))
w=3
return A.b(u.ap("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Q.am(s,null)),$async$P3)
case 3:return A.h(null,v)}})
return A.i($async$P3,v)},
aLQ(d,e){return C.hFN(d,e)},
hFN(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aLQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lC("family_trees",A.a([C.fZX(e,d)],p),null,B.cD),$async$aLQ)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lC("family_trees",A.a([C.fZY(e,d)],p),null,B.cD),$async$aLQ)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a6(n)
$.al.$1("[family_trees] upsert error: "+A.t(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aLQ,v)},
aLR(d,e){return C.hFO(d,e)},
hFO(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aLR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("J<1,a1<n,@>>")
m=n.k("ai.E")
l=A.A(new A.J(e,new C.faJ(d),n),m)
r=l
w=7
return A.b(A.lC("family_trees",r,null,B.cD),$async$aLR)
case 7:q=g
if(q){u=!0
w=1
break}k=A.A(new A.J(e,new C.faK(d),n),m)
p=k
w=8
return A.b(A.lC("family_trees",p,null,B.cD),$async$aLR)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a6(i)
$.al.$1("[family_trees] bulk upsert error: "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aLR,v)},
f_i(d){return C.hxP(d)},
hxP(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f_i=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Pr("family_trees",A.E(["id",d],x.N,x.z),null,B.cD),$async$f_i)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a6(p)
$.al.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$f_i,v)},
qv:function qv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
l4:function l4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
crk:function crk(){},
crj:function crj(){},
crh:function crh(){},
cri:function cri(){},
Gi:function Gi(d,e){this.a=d
this.b=e},
hR:function hR(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ail:function ail(d,e){this.a=d
this.b=e},
fca:function fca(){},
fzk:function fzk(d){this.a=d},
fbm:function fbm(d){this.a=d},
ko:function ko(d,e,f,g,h,i,j,k,l,m){var _=this
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
bJY:function bJY(){},
bJX:function bJX(){},
bJU:function bJU(){},
bJV:function bJV(){},
bJW:function bJW(){},
f3v:function f3v(){},
f_e:function f_e(){},
f_f:function f_f(){},
f_g:function f_g(){},
frL:function frL(){},
frM:function frM(){},
frN:function frN(){},
frO:function frO(d){this.a=d},
frP:function frP(){},
fzi:function fzi(d){this.a=d},
fcC:function fcC(d){this.a=d},
feM:function feM(){},
feN:function feN(){},
feO:function feO(){},
feP:function feP(){},
feQ:function feQ(d){this.a=d},
fry:function fry(d){this.a=d},
fzd:function fzd(){},
fze:function fze(){},
fzf:function fzf(d){this.a=d},
fcj:function fcj(d){this.a=d},
fck:function fck(d){this.a=d},
fzo:function fzo(){},
fbV:function fbV(d){this.a=d},
fbW:function fbW(d,e){this.a=d
this.b=e},
fbX:function fbX(){},
fz5:function fz5(d){this.a=d},
ffy:function ffy(){},
fru:function fru(){},
feJ:function feJ(){},
feK:function feK(){},
feL:function feL(){},
frs:function frs(d){this.a=d},
f_K:function f_K(){},
f_L:function f_L(){},
f_M:function f_M(){},
f_N:function f_N(){},
f_O:function f_O(){},
f00:function f00(){},
f01:function f01(d){this.a=d},
f_Y:function f_Y(d){this.a=d},
f_Z:function f_Z(){},
f0_:function f0_(){},
f49:function f49(){},
f4a:function f4a(){},
f4b:function f4b(){},
f6b:function f6b(){},
faJ:function faJ(d){this.a=d},
faK:function faK(d){this.a=d},
crl:function crl(d,e){this.a=d
this.b=e},
crm:function crm(d,e){this.a=d
this.b=e},
aE5:function aE5(d,e,f){this.a=d
this.b=e
this.c=f},
b5m:function b5m(){this.b=this.a=0},
b5l:function b5l(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bs9:function bs9(){},
w3(d,e){var w,v
if(d==null)return""
w=d.bP()
v=""+w.gca()+"/"+w.gcq()+"/"+w.gcd()
if(!e)return v
return v+" "+B.a.aU(B.o.u(w.gmF()),2,"0")+":"+B.a.aU(B.o.u(w.gF0()),2,"0")},
hoH(){var w,v=$.p1(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"WS"+B.d.fN(u)},
apO(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$apO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$apO)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eW("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bE),$async$apO)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.a_(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a6(m)
$.al.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apO,v)},
apP(d){return C.hoI(d)},
hoI(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$apP=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$apP)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hv("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,B.cD,null),$async$apP)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a6(p)
$.al.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apP,v)},
apR(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apR=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$apR)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hoH()
w=4
return A.b(C.apO(),$async$apR)
case 4:r=h
q=B.a.i(e)
p=B.dF.aG(t)
J.aE(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cR.gcs().aG(p),"usesRemaining",25,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.K))
w=5
return A.b(C.apP(r),$async$apR)
case 5:u=new A.Zg("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apR,v)},
apQ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$apQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bY(),$async$apQ)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.apO(),$async$apQ)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aM(n.h(o,"usesRemaining"))
l=m==null?null:B.k.N(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{s=B.c3.c6(0,B.cy.aG(t))}catch(h){r=A.a6(h)
$.al.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dS(A.a_(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a4().ab())
p.n(q,i,m)}w=5
return A.b(C.apP(q),$async$apQ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apQ,v)},
fUx(){var w=new A.Q(Date.now(),0,!1).a4()
return"wst_"+(1000*w.a+w.b)+"_"+B.cF.aC(999999)},
hoJ(d){var w,v,u,t,s,r,q
try{w=A.ae9(d)
if(w==null)return d
v=w
if(J.JV(v)>960||J.JU(v)>960){s=v
r=J.JV(v)>=J.JU(v)?960:null
v=A.ae8(s,J.JU(v)>J.JV(v)?960:null,B.M8,r)}s=v
u=A.ajK(82).Rj(s,B.xB)
if(J.aa(u)===0)return d
s=new Uint8Array(A.cn(u))
return s}catch(q){t=A.a6(q)
$.al.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cbF(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cbF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hoJ(e)
$.cbB.n(0,s,t)
u=C.bzA(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cbF,v)},
b_a(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b_a=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cX(l,"data:image")){u=null
w=1
break}t=4
r=J.eT(l,",")?B.d.gaj(J.ld(l,",")):l
q=B.cy.aG(r)
if(J.aa(q)===0){u=null
w=1
break}p=C.fUx()
w=7
return A.b(C.cbF(p,q),$async$b_a)
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
n=A.a6(k)
$.al.$1("[worksheet-thumb] persistDataUrl failed: "+A.t(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b_a,v)},
cbC(d){var w=0,v=A.j(x.T),u,t,s
var $async$cbC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(K.cbE(s),$async$cbC)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cR.gcs().aG(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cbC,v)},
a6u(d){var w=0,v=A.j(x.H),u,t
var $async$a6u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=K.h5Z(d)
if(t==null){w=1
break}$.cbB.W(0,t)
w=3
return A.b(C.bzz(t),$async$a6u)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a6u,v)},
bzA(d,e){return C.hPw(d,e)},
hPw(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bzA=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aKM
w=7
return A.b(n==null?$.aKM=K.fHA():n,$async$bzA)
case 7:r=g
q=new Uint8Array(A.cn(e))
p=J.mo(r,"thumbs","readwrite")
B.iz.lM(J.mm(p,"thumbs"),q,l)
w=8
return A.b(J.p4(p),$async$bzA)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a6(k)
$.al.$1("[worksheet-thumb idb put] "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bzA,v)},
bzz(d){return C.hPu(d)},
hPu(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bzz=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aKM
w=7
return A.b(o==null?$.aKM=K.fHA():o,$async$bzz)
case 7:r=f
q=J.mo(r,"thumbs","readwrite")
B.iz.Ey(J.mm(q,"thumbs"),m)
w=8
return A.b(J.p4(q),$async$bzz)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a6(l)
$.al.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bzz,v)}},D,Ae,Af,P,Ag,Ah,K,Ai,Q,A_
J=c[1]
A=c[0]
B=c[2]
A0=c[192]
G=c[172]
F=c[30]
E=c[182]
N=c[108]
A1=c[110]
A2=c[160]
R=c[123]
A3=c[191]
A4=c[36]
M=c[190]
A5=c[78]
H=c[84]
S=c[129]
T=c[132]
U=c[203]
V=c[161]
A6=c[152]
A7=c[164]
W=c[159]
A8=c[63]
A9=c[69]
X=c[176]
Aa=c[208]
Ab=c[29]
Ac=c[141]
L=c[154]
Ad=c[165]
Y=c[206]
Z=c[199]
I=c[98]
O=c[67]
C=a.updateHolder(c[6],C)
D=c[202]
Ae=c[68]
Af=c[170]
P=c[205]
Ag=c[204]
Ah=c[55]
K=c[53]
Ai=c[75]
Q=c[207]
A_=c[121]
C.alS.prototype={}
C.aVv.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bbj(),f=h.x!=null&&h.y6(i).length===0
if(h.x!=null)w=f?B.aW:B.bM
else w=h.gRX()?B.bM:B.e1
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.H(D.b6f,B.r,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eqq,B.f,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h0,i,i,i),B.S,D.eST,B.av,A.d(C.w3(new A.Q(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eP_,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aSW,i,i,i,i,B.VV,i,i,i)
q=A.m(16)
p=A.H(B.aJ,B.r,1)
o=A.H(B.aW.j(0.28),B.r,1)
n=A.fJq(h.d)
o=A.p(B.A,C.aVu(A.fhW(h.e,n),30),B.f,i,i,new A.o(B.lU,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eKv,B.L,i,i)
m=A.m(14)
l=A.H(B.aJ,B.r,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bB,D.eT9,B.aa,A.p(i,A.v(A.a([D.f6B,B.bB,A.d(A.zP(h.c),i,i,i,i,i,i,D.eFK,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f1,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aN,i,p,q,i,i,B.n),i,i,i,i,L.ade,i,i,i)
p=A.m(16)
m=A.H(B.aJ,B.r,1)
l=j.aMN("Original due",C.w3(h.r,!1))
n=j.aMN("Current due",C.w3(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.P,n,B.S,A.p(i,A.d(h.gaH1(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zR,i,i,1/0),B.S,j.c7B(),B.P,j.bX4(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bm,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.H(B.aJ,B.r,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.eU4,B.av,A.d(q,i,i,i,i,i,i,D.eJQ,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aN,i,n,o,i,i,B.n),i,i,i,i,B.bm,i,i,1/0)],s))}if(h.gaC3()){q=A.m(14)
o=A.H(B.cm,B.r,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.f7N,B.P,A.bt(A.m(12),A.ee(new A.a3(1/0,88,A.b2(i,i,i,new A.Ub(h.ax,B.M,D.eu8,!0,3.5,i),B.at),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.DZ,i,i,i)],s))}p.push(B.ay)
p.push(D.f0v)
return A.p(i,A.v(A.a([r,new A.C(B.adh,A.v(p,B.ai,i,B.e,B.j,0,B.p),i)],s),B.ai,i,B.e,B.R,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aMN(d,e){var w=null
return A.B(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a4X,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eGI,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c7B(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6W(B.e1,u,"Not paid yet")
w=t.y6(null).length
v=w===0?B.aW:B.bM
return this.a6W(v,u,C.w3(t.x,!0))},
bX4(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6W(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6W(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a4X,u,u,u)
v=A.U(d).k("J<1,hd>")
v=A.A(new A.J(d,new C.bYu(),v),v.k("ai.E"))
return A.v(A.a([w,B.ar,A.c9(B.bI,v,B.bx,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6W(d,e,f){var w=null
return A.B(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a4X,w,w,w),1),new A.dm(1,B.cl,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dO,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b7v.prototype={
a5(d,e){new A.Ub(this.b,B.M,e,!0,3.5,null).a5(d,e)},
aq(d){return d.b!==this.b}}
C.alZ.prototype={
S(){return new C.aA2(A.a([],x.bp))},
gdS(){return this.c}}
C.aA2.prototype={
Z(){this.a0()
this.Ho()},
Ho(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ho=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a00(t.a.c),$async$Ho)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dzc(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Ho,v)},
aOE(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aN,s=A.l(v,v,u?B.bo:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bo:B.bn).j(0.22)
w=A.m(10)
return A.bn(v,new A.b3(4,r,new A.ay(u,1,B.r,-1)),v,B.bm,v,v,v,v,!0,new A.b3(4,w,new A.ay((this.a.d.a?B.bo:B.bn).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b3(4,A.m(10),D.aQA),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aOD(d){return this.aOE(d,null)},
NL(d){return this.cb9(d)},
cb9(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NL=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Fc:B.eD
w=7
return A.b(new A.hS().B2(72,900,900,n),$async$NL)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f8(),$async$NL)
case 8:p=f
n=B.cR.gcs().aG(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a6(l)
n=r.c
if(n!=null)n.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$NL,v)},
aWJ(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aN,o=A.m(10),n=A.H((q?B.bo:B.bn).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bo:B.bn
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aN:B.aA,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bo:B.bn
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fr(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c9)
q=A.a([q,B.ab,u,A.bJ(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.W(B.cv,s.a.d.a?B.bo:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c9))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kz,D.bgN,r,r,r)},
BZ(d){return this.bu3(d)},
bu2(){return this.BZ(null)},
bu3(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BZ=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.av()
r=new A.ap(new A.ba(a4,B.b0,B.aM),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jA(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.a9(p,2)}o=new A.ap(new A.ba(a4,B.b0,B.aM),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ap(new A.ba(a4,B.b0,B.aM),s)
if(a3){a4=new A.Q(Date.now(),0,!1).bM(6048e8)
m=A.bW(a4.gcd(),a4.gca(),a4.gcq(),0,0,0,0,0)}else{a4=a5.f
m=A.bW(a4.gcd(),a4.gca(),a4.gcq(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bj(a4,!0,x.cT)
i=a3?null:A.fJq(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.v9?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hO(B.w.j(0.55),!0,"Dismiss",a4,new C.dyW(),new C.dyX(a2,t,a5,r,new C.dyY(a2,t),o,n,j),B.eK,!0,x.y),$async$BZ)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d2(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.R$=s
r.O$=0
o.R$=s
o.O$=0
n.R$=s
n.O$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.I(x.q).f.P(D.eAu)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.P(D.ez9)
w=1
break}a1=A.fhW(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.v9?"male":"female"
w=7
return A.b(A.afu(a3,A.fRh(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BZ)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.v9?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a7(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bW(a3.gcd(),a3.gca(),a3.gcq(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bW(a4.gcd(),a4.gca(),a4.gcq(),0,0,0,0,0)))a5.cCZ(a2.a)
w=8
return A.b(A.afu(t.a.c,a5),$async$BZ)
case 8:case 5:w=9
return A.b(t.Ho(),$async$BZ)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BZ,v)},
aPd(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aN
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bo:B.bn).j(0.2)
s=A.H(s,B.r,g?1.5:1)
r=C.aVu(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aN:B.aA
return A.aD(!1,B.a1,!0,v,A.aJ(!1,u,!0,A.p(p,A.B(A.a([r,B.br,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b7,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ac)},
Qk(d){return this.cs3(d)},
cs3(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hO(B.w.j(0.55),!0,"Dismiss",s,new C.dzf(),new C.dzg(t,d),B.hU,!0,x.y),$async$Qk)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.Q(s,0,!1)
case 4:w=7
return A.b(A.afu(t.a.c,d),$async$Qk)
case 7:w=8
return A.b(t.Ho(),$async$Qk)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Qk,v)},
Mr(d,e){return this.bED(0,e)},
bED(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kQ(s,"Cancel","Delete",e.b+" \xb7 "+A.zP(e.c)+" will be removed from this device.","Delete this debt?"),$async$Mr)
case 3:if(!g){w=1
break}w=4
return A.b(C.fcq(t.a.c,e.a),$async$Mr)
case 4:w=5
return A.b(t.Ho(),$async$Mr)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Mr,v)},
ach(d){return this.c5a(d)},
c5a(d){var w=0,v=A.j(x.H),u=this,t
var $async$ach=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c1(B.K,null,new C.dz9(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ach)
case 2:return A.h(null,v)}})
return A.i($async$ach,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dR9
w=J.dE(m.d,new C.dzh())
v=A.A(w,w.$ti.k("G.E"))
w=J.dE(m.d,new C.dzi())
u=A.A(w,w.$ti.k("G.E"))
t=B.d.cG(v,0,new C.dzj())
w=A.m(18)
s=m.a.d.a
r=s?D.caK:D.at3
q=A.H(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bEj,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.aw,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aA,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.a1,!0,A.m(12),A.aJ(!1,A.m(12),!0,D.dQB,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dzk(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ac)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cop("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zP(t)
r=A.a([A.p(l,A.v(A.a([s,B.aa,A.B(A.a([o,B.ab,A.D(m.b1C(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a5(B.ax,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.adb,l,l,l),B.ay],p)
if(J.cj(m.d)){w=m.a.d.a
s=w?B.dT:B.c
q=A.m(18)
o=A.H((w?B.bo:B.bn).j(0.12),B.r,1)
n=A.p(l,D.bzm,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aA,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.aa,w,B.av,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bo:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bjg,l,l,1/0))}else{w=m.gcas()
s=A.A(new A.J(v,w,A.U(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.C(D.bkV,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bo:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.U(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.ai,l,B.e,B.j,0,B.p)},
b1C(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.H((v.a.d.a?B.bo:B.bn).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bo:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aN:B.aA
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eq,u,u,u)},
cop(d,e){return this.b1C(!1,d,e)},
cat(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.y6(j).length,h=d.baw()
if(d.x!=null){w=d.y6(j).length
v=w===0?B.cY:B.bM}else if(d.gRX())v=B.bM
else{if(h)w=B.cY
else w=k.a.d.a?B.bo:B.bn
v=w}if(d.x!=null){w=d.y6(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.w3(u,!1)}else{u.toString
t="Paid "+C.w3(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.w3(w,!1)+" \xb7 "+i+" missed":"Due "+C.w3(w,!1)}w=k.a.d.a?B.dT:B.c
u=A.m(18)
if(d.gRX()&&d.x==null)s=B.bM.j(0.35)
else s=(k.a.d.a?B.bo:B.bn).j(0.12)
s=A.H(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.w.j(0.04),B.cG,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.lU
o=A.H(d.gRX()&&d.x==null?B.bM.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fJq(d.d)
o=A.p(B.A,A.d9(C.aVu(A.fhW(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aN:B.aA
m=x.p
n=A.a([new A.dm(1,B.cl,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaC3())B.d.v(n,A.a([B.et,A.W(B.Lg,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.d6,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zP(d.c)
l=k.a.d.a?B.aN:B.aA
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.a1,!0,j,A.aJ(!1,q,!0,new A.C(U.acX,A.B(A.a([o,B.be,p,B.ab,A.v(A.a([n,B.bB,A.W(B.es,(k.a.d.a?B.bo:B.bn).j(0.5),j,j,j,18)],m),B.dG,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dzb(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ac),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.db,j,j,j,j)}}
C.tI.prototype={}
C.aik.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bf
u=v?B.F:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.H(q,B.r,t?1.2:1.6)
p=A.a([new A.ab(0,B.G,B.w.j(0.45),B.ct,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.H(r.j(0.6),B.r,1)
n.push(A.aG(a0,A.p(a0,A.W(B.cv,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.z,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.ad))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.ky,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.apJ,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Ec,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f_(m,A.B(l,B.m,a0,B.e,B.R,0,a0,a0),B.f,B.ec)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bg0,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cA:B.bi,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fl,A.v(a2,u,a0,B.e,B.R,0,B.p),a0),1))
n.push(D.euT)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.uq,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a5(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.kB,A.v(a2,B.m,a0,B.e,B.R,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.H(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hb,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a5(B.ax,B.aD,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bhe,a0,a0,a0,a0)}}
C.aRm.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bf?B.bf:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bi:B.cA,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.d6,n],m)
if(p.z)o.push(new A.C(B.zQ,n,q))
return new A.C(B.db,A.v(o,B.m,q,B.e,B.R,0,B.p),q)}}
C.R1.prototype={
S(){return new C.bb3()}}
C.bb3.prototype={
gbSg(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.dR4,D.dRa],l)
for(w=0;w<8;++w){v=D.ZM[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.EW:B.AC
q=t===s
r=A.W(r,q?B.eB:B.c1,n,n,n,17)
q=q?B.c:B.ag
r=A.a([r,B.br,new A.w(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bH(1,B.bq,new A.w(v.c,n,Ai.C8,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aY(24,24)
p=new A.ay(B.eB,2,B.r,-1)
s=new A.o(n,n,new A.c3(p,p,p,p),new A.bw(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aG(n,new A.C(B.eC,A.v(A.a([new A.C(B.m1,new A.cD(B.b_,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.CS(!0,new C.aik(v,q.d,q.e,new C.d_E(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d_F(o,v),n,n,n,n,n,n,!1,B.ad))}k.push(new A.C(D.bhy,A.bL(D.fcK,new C.d_G(o,d),A.bk(B.b2,n,n,n,n,B.nM,n,n,new A.b6(A.m(16),B.Z),n,n,n)),n))
return A.bp(!0,new A.d1(new A.aW(0,1/0,0,m.a.b*0.9),A.cM(k,n,D.blL,n,n,B.ak,!0),n),!0,!1,B.ah,!0,!0)}}
C.mT.prototype={
ac(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a4().ab()],x.N,x.z)},
b7i(d,e,f){return new C.mT(this.a,e,d,f)}}
C.Gh.prototype={
vx(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Gh(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aAj(d){var w=null
return this.vx(w,w,w,w,w,d,w,w,w,w,w,w)},
cyR(d){var w=null
return this.vx(w,w,w,w,d,w,w,w,w,w,w,w)},
b7g(d,e,f){var w=null
return this.vx(d,w,w,w,w,w,w,w,e,w,f,w)},
czv(d){var w=null
return this.vx(w,w,w,w,w,w,d,w,w,w,w,w)},
czE(d){var w=null
return this.vx(w,w,w,w,w,w,w,w,w,d,w,w)},
cyP(d){var w=null
return this.vx(w,w,w,d,w,w,w,w,w,w,w,w)},
czG(d){var w=null
return this.vx(w,w,w,w,w,w,w,w,w,w,w,d)},
cyM(d){var w=null
return this.vx(w,w,d,w,w,w,w,w,w,w,w,w)},
cyH(d){var w=null
return this.vx(w,d,w,w,w,w,w,w,w,w,w,w)},
Er(d){var w=null
return this.vx(w,w,w,w,w,w,w,d,w,w,w,w)},
czO(d,e,f,g,h,i,j,k,l,m,n){return this.vx(d,e,f,g,null,h,i,j,k,l,m,n)},
ac(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cwF(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bJT(d),k=A.aM(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aM(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cK(d.h(0,n))).length!==0?B.a.i(A.cK(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cK(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Be.gec(D.Be))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a0b)
q=l.$2("frame",D.a_H)
l=l.$2("texture",D.a_C)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cK(d.h(0,"author"))):o
return this.czO(p,u,t,q,r,A.tn(d.h(0,"ribbon"))?A.ES(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Xt.prototype={
S(){return new C.ax8(A.a([],x.I),D.KR)},
gdS(){return this.c}}
C.ax8.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yJ(0,1)
w=$.av()
v.z=new A.ap(B.as,w)
v.Q=new A.ap(B.as,w)
v.ku()
w=v.a
C.bxY(w.c,w.d).bw(new C.d0k(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.av()
u.R$=w
u.O$=0
u=v.Q
u===$&&A.c()
u.R$=w
u.O$=0
v.a2()},
ku(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ku=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Jn(s.c,s.d),$async$ku)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d08(t,r))
t.asB()
case 1:return A.h(u,v)}})
return A.i($async$ku,v)},
gapf(){var w,v=this
if(!J.cj(v.d)){w=v.r
w=w<0||w>=J.aa(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
asB(){var w,v,u=this.gapf(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saT(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saT(0,w==null?"":w)},
c3B(d){this.m(new C.d05(this,d))
this.asB()},
LN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$LN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mT(B.o.u(1000*Date.now()),"Untitled page","",new A.Q(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aNB(r.c,r.d,s),$async$LN)
case 3:w=4
return A.b(t.ku(),$async$LN)
case 4:if(t.c==null||J.cj(t.d)){w=1
break}q=J.pO(t.d,new C.d_H(s))
p=q>=0?q:J.aa(t.d)-1
t.m(new C.d_I(t,p))
t.asB()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.A6(p+1,B.cp,B.kv),$async$LN)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$LN,v)},
zN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gapf()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aNB(o.c,o.d,new C.mT(s,r,q,new A.Q(p,0,!1))),$async$zN)
case 3:w=4
return A.b(t.ku(),$async$zN)
case 4:if(t.c==null){w=1
break}t.m(new C.d09(t))
case 1:return A.h(u,v)}})
return A.i($async$zN,v)},
Ms(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ms=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gapf()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.d_Q(r),s,null,!0,!0,x.y),$async$Ms)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bxK(s.c,s.d,r.a),$async$Ms)
case 4:t.m(new C.d_R(t))
w=5
return A.b(t.ku(),$async$Ms)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.S_(B.o.D(t.r+1,0,J.aa(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Ms,v)},
xp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zN(),$async$xp)
case 5:case 4:if(t.c==null){w=1
break}w=J.ct(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Pk(s,r.r,o,p,q),$async$xp)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a8(s,!1).M(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h6s(s,r.x,r.r),$async$xp)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Jn(s.c,s.d),$async$xp)
case 10:l=e
for(s=n.d,r=J.cB(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.mT(""+(m+k),q,B.a.i(j.b),new A.Q(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.zY(r.c,r.d,l),$async$xp)
case 11:w=12
return A.b(t.ku(),$async$xp)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xp,v)},
Zm(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zN(),$async$Zm)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxn(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dI(D.xI,new C.d06(t),new C.d07())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m8("Our Family",o,"",""))
for(o=J.aU(t.d);o.C();){n=o.gT(o)
p.push(new F.m8(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fL1(o,new F.qO(s,r,"",p,new F.u0(q.d,null,null,null,null,"","","")),null),$async$Zm)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Zm,v)},
Ma(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Ma=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zN(),$async$Ma)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.c1(D.a97,null,new C.d_M(t),s,!0,!0,!0,D.aHt,!1,!1,x.N),$async$Ma)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cyR(r)
t.m(new C.d_N(t,q))
s=t.a
w=7
return A.b(C.PT(s.c,s.d,q),$async$Ma)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ma,v)},
V3(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c1(D.a97,null,new C.d_S(t),r,!0,!0,!0,D.aHt,!1,!1,x.e),$async$V3)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d_T(t,s))
r=t.a
w=4
return A.b(C.PT(r.c,r.d,s),$async$V3)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.A6(0,B.dU,B.oa)
case 1:return A.h(u,v)}})
return A.i($async$V3,v)},
bJF(d){var w=d.bP(),v=B.a.aU(B.o.u(w.gca()),2,"0"),u=B.a.aU(B.o.u(w.gcq()),2,"0")
return""+w.gcd()+"-"+v+"-"+u},
gxn(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bRx()
if(r.e)w=D.a8c
else if(J.cj(r.d)){w=r.y
v=r.gxn(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eFd,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a3(q,330,new A.C(Z.aeb,new C.WM(w,v,0,q),q),q),B.bu,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.k1.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bu],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aG(q,A.p(q,D.eqg,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ab(0,B.G,B.dL.j(0.45),B.J,18)],x.V),E.uZ,B.n),q,q,q,q,B.W4,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcvQ(),q,q,q,q,q,q,!1,B.ad))
w.push(B.S)
w.push(A.h8(D.bvG,D.fcf,r.gaIJ(),q))
B.d.v(u,w)}w=A.au(A.ch(A.v(u,B.m,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.ev,q,q,B.ak),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.aa(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.k1.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dN:B.z3
u=A.v(A.a([new A.C(D.biA,w,q),A.D(A.Hx(v,new C.d0i(r),J.aa(r.d)+1,q,r.gc3A(),u,B.b_),1),r.bwS()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.ca(q,D.aad,new A.am(B.W,q,B.aZ,B.q,A.a([D.aG_,A.bp(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],v),q),q,!1,!1,q,q)},
bRx(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.ct(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Iv(B.dS,"AI",h.gbuP(),!0))
if(h.a.f)f.push(new C.Iv(B.nz,"Cover",h.gbFc(),!1))
if(h.a.f)f.push(new C.Iv(B.xl,"Header",h.gbAf(),!1))
if(J.ct(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Iv(B.te,"Print",h.gccp(),!1))
if(h.a.f&&J.ct(h.d)&&h.r>=0){v=h.w
u=v?B.hr:B.j6
t=v?"Save":"Edit"
f.push(new C.Iv(u,t,v?h.gcio():new C.d02(h),!1))}if(h.a.f)f.push(new C.Iv(B.hE,"Add page",h.gaIJ(),!1))
v=C.h2F(h.y.Q)
u=h.gxn(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.aa(h.d)
r=J.aa(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.d8F
else{k=new A.aY(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jA.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.k1,g,g,g,17),B.f,g,g,new A.o(g,g,new A.c3(i,i,i,i),new A.bw(k,k,k,k),g,new A.a5(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.k1.j(0.85)
p.push(new A.bH(1,B.bq,A.aG(B.c5,A.v(A.a([k,B.bB,new A.w(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.R,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.ad),g))}return new C.aik(v,u,t+" \xb7 "+s+" "+r,new C.d03(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
yS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zN(),$async$yS)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aU(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a0f(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.d_J(t,p),s,null,!0,!0,x.N),$async$yS)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xp(),$async$yS)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Cx(),$async$yS)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.E6("Swahili (Kiswahili)",!0),$async$yS)
case 18:w=16
break
case 17:w=19
return A.b(t.csF(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yS)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yS,v)},
WW(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.H(E.jA.j(0.3),B.r,1),r=x.p
return new A.C(B.cN,A.aJ(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.uZ,B.a6),w,42,w,w,w,w,w,42),B.be,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A5.Rn,w,w,w),A.d(g,w,w,w,w,w,w,E.a4q,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d04(d,h),w,w,w,w,w,w,w),w)},
Cx(){return this.bJ9()},
bJ9(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Cx=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.d_W(r),a7,null,!0,!0,x.ei),$async$Cx)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.A(r.d,x.B)
p=g
f=r.y
o=new A.eN("Working on it\u2026",$.av())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.d_X(o),a7,null,!0,!0,x.H).f4(new C.d_Y(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.cc(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ac()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.xI[a1]
J.cc(j,i.a)}w=8
return A.b(C.aeH(a0,a7,new C.d_Z(o),d,l,e,j),$async$Cx)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a6(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a8(l,!0).eD()
l=o
l.shI($.av())
J.aO2(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.P(A.b1(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gci(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.aa(p);++a4){if(m.b.ak(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b7i(m.b.h(0,a4).b,a7,new A.Q(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.zY(j.c,j.d,l),$async$Cx)
case 11:w=12
return A.b(r.ku(),$async$Cx)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.xI[a1].a)
a5=l.cwF(j,12,a7)
l=r.a
w=15
return A.b(C.PT(l.c,l.d,a5),$async$Cx)
case 15:if(r.c!=null)r.m(new C.d0_(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.A6(0,B.dU,B.oa)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.b1(a3?A.clZ("Undo",new C.d00(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ee,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Cx,v)},
E6(d,e){return this.csG(d,e)},
csF(d){return this.E6(d,!1)},
csG(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$E6=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.A(r.d,x.B)
d=e
a0=new A.eN("Starting\u2026",$.av())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.d0b(a0),k,null,!0,!0,x.H).f4(new C.d0c(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.cc(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a0s(m,new C.d0d(a0)),$async$E6)
case 10:w=8
break
case 9:w=11
return A.b(C.bzr(new C.d0e(a0),m,a2),$async$E6)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a6(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a8(o,!0).eD()
o=a0
o.shI($.av())
J.aO2(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.P(A.b1(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.aa(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b7i(J.q(p,g).b,j.a,new A.Q(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zY(k.c,k.d,o),$async$E6)
case 12:w=13
return A.b(r.ku(),$async$E6)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.b1(A.clZ("Undo",new C.d0f(r,d),null),null,null,null,null,B.q,null,k,null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$E6,v)},
bwS(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d_K(v):u
r=A.aF(u,u,u,u,A.W(D.bro,s?D.k1:B.ba,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.ct(v.d)&&!v.w&&v.r>=0)s=A.h8(A.W(B.uB,B.DA,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.DA,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbEM(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.k1.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.au(s,u,u,u),1)
w=t<J.aa(v.d)?new C.d_L(v):u
return A.bp(!0,new A.C(D.bio,A.B(A.a([r,s,A.aF(u,u,u,u,A.W(B.es,t<J.aa(v.d)?D.k1:B.ba,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ah,!0,!1)}}
C.Xx.prototype={
S(){return new C.bbo(new A.ap(B.as,$.av()))}}
C.bbo.prototype={
ga_u(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
gbHX(){var w,v=this.ga_u()
A:{if("cover"===v){w=D.cG7
break A}if("book"===v){w=D.cCe
break A}w=D.d1G
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jA.j(0.5),n=x.p,m=A.B(A.a([D.d8G,B.aw,D.bnD,A.aF(q,q,q,q,B.l6,q,q,q,new C.d1L(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jA(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d1M(r),r.ga_u()==="page",q,q,q,q))
if(r.a.d)l.push(A.jA(q,q,q,D.f7l,q,new C.d1N(r),r.ga_u()==="book",q,q,q,q))
l.push(A.jA(q,q,q,D.eWy,q,new C.d1O(r),r.ga_u()==="cover",q,q,q,q))
l=A.c9(B.bI,l,B.bx,6,8)
k=B.c.j(0.07)
k=A.aK(q,B.U,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bn(q,new A.b3(4,A.m(16),B.Z),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kl,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.af,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.dj,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbHX(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mO(q,B.c.j(0.08),new A.w(s,q,B.Hx,q,q,q,q,q,q,q,q,q),B.ht,new C.d1P(r,s),q,q,q,q))}return A.ez(q,E.zw,A.ch(A.v(A.a([m,B.S,D.fah,B.ar,l,B.aa,k,B.P,A.c9(B.bI,w,B.bx,6,6),B.ay,A.dq(D.bvD,D.fb2,new C.d1Q(r,d),A.bk(B.b2,q,q,q,q,B.nM,q,q,new A.b6(A.m(16),B.Z),q,q,q)),B.av,D.f5O],n),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.fC,q,q,B.ak),q,q,q,D.adV,B.cZ,q,new A.b6(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.Xv.prototype={
S(){return new C.ax9(A.a([],x.Y))},
gdS(){return this.c}}
C.acx.prototype={}
C.ax9.prototype={
Z(){this.a0()
this.ku()},
ku(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$ku=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Pn(p.c,p.d),$async$ku)
case 3:o=e
n=A.a([],x.Y)
p=J.aU(o)
case 4:if(!p.C()){w=5
break}s=p.gT(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bxY(r.c,q),$async$ku)
case 6:j=e
i=J
w=7
return A.b(C.Jn(t.a.c,q),$async$ku)
case 7:m.push(new l.acx(k,j,i.aa(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d0z(t,n))
case 1:return A.h(u,v)}})
return A.i($async$ku,v)},
b2L(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
On(d,e){return this.c58(0,e)},
c58(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$On=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a8(s,!1).cp(A.eE(new C.d0y(u,e),!0,null,x.y)),$async$On)
case 2:t=g
w=3
return A.b(u.ku(),$async$On)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.P(D.aJj)
return A.h(null,v)}})
return A.i($async$On,v)},
E9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$E9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.P(D.aJf)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ae2(s.c,s.d),$async$E9)
case 5:q=e
w=6
return A.b(t.ku(),$async$E9)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.On(0,B.d.kZ(t.d,new C.d0D(q))),$async$E9)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Pk(p,s.f,r,n,o),$async$E9)
case 10:m=e
w=11
return A.b(t.ku(),$async$E9)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.P(D.aJj)
case 1:return A.h(u,v)}})
return A.i($async$E9,v)},
NS(d,e){return this.cgb(0,e)},
cgb(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.d0C(t,e),s,null,!0,!0,x.y),$async$NS)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0F(s.c,s.d,e.a),$async$NS)
case 4:w=5
return A.b(t.ku(),$async$NS)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NS,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bwV(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.H(E.jA.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aG(n,new A.fC(0.7142857142857143,A.p(n,A.v(A.a([D.d8H,B.aa,D.dQh,B.av,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.k1.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b7,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcvM(),n,n,n,n,n,n,!1,B.ad))}w=A.m(22)
v=A.H(E.jA.j(0.85),B.r,1.6)
s=A.aG(n,A.p(n,D.bD8,B.f,n,n,new A.o(B.w.j(0.3),n,A.H(E.jA.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d0E(d),n,n,n,n,n,n,!1,B.ad)
r=A.m(14)
q=B.w.j(0.3)
p=A.H(E.jA.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.be,D.bnY,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eEn,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h0,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bI0,B.n),n,n,n,Ag.VC,D.bgr,n,n,n)
if(o.e)k=D.a8c
else k=k.length===0?D.aXI:A.ck(new C.d0F(k))
return A.ca(n,D.aad,new A.am(B.W,n,B.aZ,B.q,A.a([D.aG_,A.bp(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],l),n),n,!1,!1,n,n)},
bwV(d){var w,v,u=this,t=null,s=u.b2L(d),r=d.c,q=x.p,p=A.a([A.bX(0,A.f_(B.A,new A.a3(300,420,new C.WM(d.b,s,r,t),t),B.f,B.ds),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aG(t,A.p(t,D.bCt,B.f,t,t,new A.o(B.w.j(0.55),t,A.H(B.ba,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d0w(u,d),t,t,t,t,t,t,!1,B.ad),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eDZ,t,t,t)
v=r===1?"page":"pages"
return A.aG(t,A.v(A.a([new A.fC(0.7142857142857143,new A.am(B.W,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.k1.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d0x(u,d),t,t,t,t,t,t,!1,B.ad)}}
C.Iv.prototype={}
C.WM.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dI(D.xI,new C.cA5(m),new C.cA6()),j=m.c,i=D.Be.h(0,j.e),h=A.aZ(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mc:B.b7
v=new C.cA7(h)
i=A.a([new A.ab(0,B.G,B.w.j(0.6),D.dNH,28)],x.V)
u=x.p
t=A.a([A.bX(0,A.b2(l,l,l,new C.b8G(j.x,h,l),B.at),0,0,0),A.an(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a5(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aY(3,3)
t.push(new A.cH(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bw(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aec,8,0.85,2.2),v.$4(D.bld,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aec,8,0.85,2.4))
else if(r==="corners")t.push(A.bX(0,new A.C(D.bl9,A.b2(l,l,l,new C.b8x(h,l),B.at),l),0,0,0))
r=A.W(D.asf[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.apJ,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.aa,p,B.aa,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cA,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bX(0,new A.C(D.blD,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b2(l,l,l,new C.aE0(l),D.eu1),l,l,l,46,0,l))
return A.p(l,A.bt(D.a6U,new A.am(B.W,l,B.a9,B.q,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.a6U,i,new A.a5(B.ax,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b8G.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.f3()
f.dU(11)
switch(this.b){case"plain":return
case"linen":$.V()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.G()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.V()
q=A.L()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.G()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.af()
l=f.af()
k=f.af()
$.V()
j=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
j.r=t.j(0.25+f.af()*0.5).gp(0)
r=j.G()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.V()
j=A.a([],l)
h=new A.aO(k.r,B.ao,null,null,j)
j.push(new A.b4(v,t))
k=i-0.04
j.push(new A.ao(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ao(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bD())
k=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.G()
k=h.gbL().a.snapshot()
o.drawPath((h.e=new A.cE(k)).a,r)
r.delete()}break
default:$.V()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.af()
m=f.af()
l=f.af()
r=w.G()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.V()
g=A.L()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.af()
m=f.af()
l=f.af()
r=g.G()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
aq(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b8x.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.V(),k=A.L(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.elF,new A.cI([w,0,-1,1]),new A.cI([0,v,1,-1]),new A.cI([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aO(l,B.ao,null,null,s)
s.push(new A.b4(r+p*34,q))
s.push(new A.ao(r,q))
s.push(new A.ao(r,q+o*34))
m=k.G()
s=n.gbL().a.snapshot()
w.drawPath((n.e=new A.cE(s)).a,m)
m.delete()
s=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
s.r=j.j(0.9).gp(0)
m=s.G()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aq(d){return!d.b.A(0,this.b)}}
C.tJ.prototype={}
C.X3.prototype={
S(){return new C.b8E()}}
C.b8E.prototype={
gnu(){var w=this.d
return w===$?this.d=this.a.c:w},
gxn(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ap(new A.ba(w.b,B.b0,B.aM),$.av())}return v},
gaxH(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ap(new A.ba(w.c,B.b0,B.aM),$.av())}return v},
ganQ(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ap(new A.ba(w.y,B.b0,B.aM),$.av())}return v},
q(){var w=this,v=w.gxn(0),u=v.R$=$.av()
v.O$=0
v=w.gaxH()
v.R$=u
v.O$=0
v=w.ganQ()
v.R$=u
v.O$=0
w.a2()},
aor(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jA(s,s,s,new A.w(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cTx(this,f,u),e===u,s,s,s,s))}return A.c9(B.bI,r,B.bx,6,8)},
atS(d){var w=null,v=B.c.j(0.07)
return A.bn(w,new A.b3(4,A.m(14),B.Z),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.ld,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnu(),a0=f.gxn(0),a1=a0.a.a,a2=f.gaxH(),a3=a2.a.a,a4=f.ganQ(),a5=d.b7g(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.au(new A.a3(190,260,A.f_(B.A,new A.a3(270,370,new C.WM(a5,d,f.a.e,e),e),B.f,B.ds),e),e,e,e)
a0=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.atS("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.af,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cTW(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.atS("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.af,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cTX(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.xI[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.ba
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.c3(o,o,o,o),e,e,new A.a5(B.ax,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.az
v.push(A.aG(e,A.v(A.a([p,B.d6,new A.w(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTY(f,t),e,e,e,e,e,e,!1,B.ad))}v=A.c9(B.bI,v,B.bx,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.aY(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eB:B.K,2,B.r,-1)
q.push(A.aG(e,A.p(e,A.W(D.asf[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.c3(o,o,o,o),new A.bw(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTZ(f,n),e,e,e,e,e,e,!1,B.ad))}q=A.c9(B.bI,q,B.bx,8,8)
a4=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.atS("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.af,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cU_(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.ml,e,e,e)
m=A.a([],w)
for(l=D.Be.gdH(D.Be),l=l.gah(l);l.C();){k=l.gT(l)
j=A.aZ(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eB:B.ba
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.c3(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.az
m.push(A.aG(e,A.v(A.a([j,B.bB,new A.w(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cU0(f,k),e,e,e,e,e,e,!1,B.ad))}m=A.c9(B.bI,m,B.bx,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.ml,e,e,e)
k=f.gnu()
return new A.C(new A.N(0,0,0,a3.f.d),A.bp(!0,new A.d1(new A.aW(0,1/0,0,a1.a.b*0.92),A.cM(A.a([D.f5h,B.aa,d,B.aO,a0,B.S,a2,B.ay,D.faR,B.P,v,B.ay,D.f5q,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.lR(e,9,""+B.k.U(f.gnu().f),36,18,new C.cU1(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.ml,e,e,e),B.ar,f.aor(D.a0b,f.gnu().r,new C.cU2(f),D.d4O),B.aa,A.d("BORDER",e,e,e,e,e,e,H.ml,e,e,e),B.ar,f.aor(D.a_H,f.gnu().w,new C.cU3(f),D.d4T),B.aa,A.d("COVER MATERIAL",e,e,e,e,e,e,H.ml,e,e,e),B.ar,f.aor(D.a_C,f.gnu().x,new C.cU5(f),D.d6g),B.ar,A.ix(e,B.b2,e,B.ah,e,new C.cU6(f),e,e,e,D.f04,f.gnu().z),B.bu,A.bL(D.f4c,new C.cU7(f,a6),A.bk(B.b2,e,e,e,e,B.nM,e,e,new A.b6(A.m(16),B.Z),e,e,e))],w),e,P.adK,e,e,B.ak,!0),e),!0,!1,B.ah,!0,!0),e)}}
C.aE0.prototype={
a5(d,e){var w,v,u,t=new A.aO($.V().r,B.ao,null,null,A.a([],x.v))
t.E(new A.b4(0,0))
w=e.a
t.E(new A.ao(w,0))
v=e.b
t.E(new A.ao(w,v))
t.E(new A.ao(w/2,v-12))
t.E(new A.ao(0,v))
t.E(new A.bD())
u=A.L()
u.sar(D.bIC.av(0,new A.a9(0,0,0+w,0+v)))
d.aL(t,u)},
aq(d){return!1}}
C.bdR.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.V()
w=A.L()
w.sar(D.bHH.av(0,new A.a9(0,0,a3,a4)))
a5.aW(new A.a9(0,0,a3,a4),w)
v=B.k.dE(a2/112)
u=new A.f3()
u.dU(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.af()*20
l=56+u.af()*40
k=D.cG6[u.aC(9)]
j=u.aC(14)
J.by(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.bx(i,B.h4)
g=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sar(new A.a5(B.a3,B.a7,B.x,A.a([f,k,e],t),a0,a0).av(0,i))
d=g.G()
w.drawRRect(A.ex(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
e.r=E.jA.j(0.55).gp(0)
d=e.G()
w.drawRect(A.c2(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
j.r=E.jA.j(0.4).gp(0)
d=j.G()
w.drawRect(A.c2(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aC(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
p.sar(D.bH4.av(0,new A.a9(0,r,a3,q)))
d=p.G()
w.drawRect(A.c2(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
p.r=B.w.j(0.5).gp(0)
p.z=B.j9
d=p.G()
w.drawRect(A.c2(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.L()
w.r=D.b_O.j(0.72).gp(0)
a5.aW(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.L()
a4.sar(new A.bR(B.A,0.5,B.x,a0,0,A.a([D.b5V.j(0.22),B.K],t),a0,a0).av(0,A.bS(new A.u(w,a2),a1)))
a5.ae(new A.u(w,a2),a1,a4)},
aq(d){return!1}}
C.b6U.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ae("[ \t]{2,}",!0,!1,!1,!1),k=A.aI(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cH(14,w*2,v*2.2,v*2,o,o,new A.kB(new A.o(A.ar(D.k1,D.b9E,w/4),o,new A.c3(B.Z,new A.ay(B.w.j(0.12),1,B.r,-1),B.Z,B.Z),B.IE,o,o,B.n),B.bb,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.aBM,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aY(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jA.j(0.6),o,o,new A.bw(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pu,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aQk,u,D.bIA,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dq,18)],v)
t=A.an(o,A.b2(o,o,o,new C.aE0(o),D.etX),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aRm(p.y,r,G.ii,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.r,o,o,o,o,o,2,A.bn(o,B.eA,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ii.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eRd,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ii.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.w,o,o,o,o,o,2,A.bn(o,B.eA,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ii.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,o,B.af,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eIE,!0,B.a5,B.yv,B.am,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.eR6,o,o,o),B.av,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ii.j(0.5),o,o,o,o,o,o,o,o,11,B.cA,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.B(A.a([A.D(A.p(o,o,B.f,D.Dn.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fl,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Dn.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.Dn.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.ay],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ii.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.W2(A.dl(A.a([A.dl(o,o,o,o,o,o,o,o,o,D.eLB,B.a.an(k,0,1)),A.dl(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ii.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ch(A.v(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.z,o,o,o,o,B.ak)}s.push(A.D(n,1))
s.push(new A.C(B.ir,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ii.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.D(A.p(o,A.bt(B.IE,new A.am(B.W,o,B.a9,B.q,A.a([t,new A.C(D.bkH,A.v(s,B.ai,o,B.e,B.j,0,B.p),o),A.an(0,A.bV(o,new A.o(o,o,o,o,o,new A.a5(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bb),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.IE,v,D.bJ5,B.n),o,o,o,o,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,o,o))
return new A.am(B.W,o,B.a9,B.q,l,o)}}
C.an4.prototype={
S(){return new C.aAD(A.a([],x._))},
bn(){return this.r.$0()},
p6(){return this.w.$0()},
gdS(){return this.c}}
C.aAD.prototype={
Z(){var w,v
this.a0()
this.v3()
w=this.a
v=w.c
if(v.length!==0)C.a5d(v,w.e,w.d.w)},
uT(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fL4(r,t.e,!1,s.w,new C.dMx(u),null,s),$async$uT)
case 2:w=3
return A.b(u.v3(),$async$uT)
case 3:return A.h(null,v)}})
return A.i($async$uT,v)},
Yy(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Yy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fL4(r,t.e,!0,s.w,new C.dMw(u),null,s),$async$Yy)
case 2:w=3
return A.b(u.v3(),$async$Yy)
case 3:return A.h(null,v)}})
return A.i($async$Yy,v)},
v3(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$v3=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zN(q.a.c),$async$v3)
case 7:p=e
if(q.c!=null)n=q.e||J.ct(p)
else n=!1
if(n)q.m(new C.dMz(q,p))
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
return A.b(C.Fh(q.a.c).cK(0,B.p6),$async$v3)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dMA(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dMB(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$v3,v)},
MX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$MX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.P(D.exz)
w=3
return A.b(C.Fh(t.a.c),$async$MX)
case 3:r=e
w=4
return A.b(C.frx(t.a.c,r),$async$MX)
case 4:q=e
w=5
return A.b(C.Fh(t.a.c),$async$MX)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dMv(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.aa(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.b1(null,null,null,q?B.du:B.cQ,null,B.q,null,s,null,B.lY,null,null,null,null,null,null,null,null,null,null))
t.a.p6()
case 1:return A.h(u,v)}})
return A.i($async$MX,v)},
GE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$GE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hRq(l),$async$GE)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hlt(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aWV(q,p.e,l,"Each family tree costs $"+B.k.a9(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$GE)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h2P(r)
o=Date.now()
n=t.a.c
m=new C.ko(l,r.toUpperCase(),p,!0,B.U,D.B3,new A.Q(o,0,!1),0,n,D.t_)
w=5
return A.b(C.a0L(n,m),$async$GE)
case 5:w=6
return A.b(t.v3(),$async$GE)
case 6:t.a.bn()
t.a.p6()
if(t.c==null){w=1
break}t.Dj(m)
case 1:return A.h(u,v)}})
return A.i($async$GE,v)},
Dj(d){return this.c77(d)},
c77(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Dj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zN(u.a.c),$async$Dj)
case 2:n=l.qK(k.dE(f,new C.dMy(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.ho(m,new C.amZ(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Dj)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0L(u.a.c,o),$async$Dj)
case 6:case 5:w=7
return A.b(u.v3(),$async$Dj)
case 7:u.a.p6()
return A.h(null,v)}})
return A.i($async$Dj,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=new C.td(p)
if(r.e)return A.au(A.mr(q,p?B.bo:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.cj(r.d)){w=p?B.dT:B.c
v=A.m(15)
u=A.aD(!1,B.a1,!0,q,A.aJ(!1,q,!0,A.p(q,D.bwI,B.f,q,q,new A.o(B.aS.j(0.12),q,A.H(B.aS,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cJ,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc6d(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ac)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Em(A.p(q,A.v(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bo:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dY,A.bL(D.fc0,r.gaMJ(),A.bk(B.bS,q,q,q,q,q,Af.W7,q,new A.b6(A.m(12),B.Z),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bkD,q,q,1/0),15,B.ah,1.05,D.a5D,q)}w=J.aa(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b8],v)
if(J.ct(r.d))w.push(A.aF(q,q,q,q,A.W(B.xs,B.aS,q,q,q,q),q,q,q,new C.dMD(r),q,q,q,q,"Sync family trees with database",q))
if(J.ct(r.d))w.push(A.aF(q,q,q,q,A.W(B.xj,B.aS,q,q,q,q),q,q,q,r.gacX(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dq(E.aj6,D.eUt,r.gaMJ(),A.bk(B.bS,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.aa(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.aa)
u.push(new C.Em(r.csK(J.q(r.d,s),o),14,B.ah,1,D.a5D,q))
B.d.v(w,u)}return A.v(A.a([p,B.ay,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
csK(d,e){var w=null,v=e.a,u=v?B.dT:B.c,t=A.m(14),s=A.H((v?B.dW:B.bY).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.w.j(v?0.35:0.08),B.ea,10)],x.V),q=A.m(14),p=A.p(w,D.bvM,B.f,w,w,new A.o(B.aS.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.galO(),m=d.d?"":" \xb7 Public",l=d.y===D.k7?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.a1,!0,w,A.aJ(!1,q,!0,new A.C(B.bC,A.B(A.a([p,B.be,l,A.W(B.L0,v?B.bo:B.bn,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dMC(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ac),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amZ.prototype={
S(){return new C.aAA(A.a([],x._),A.b_(x.N),A.b4y())},
bn(){return this.r.$0()},
gdS(){return this.c}}
C.aAA.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9X()
w=u.a
v=w.c
if(v.length!==0)C.a5d(v,w.e,w.d.w)},
q(){var w=this.w
w.R$=$.av()
w.O$=0
this.a2()},
a0o(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.wR("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dLY(r),s,null,!0,!0,x.y),$async$a0o)
case 3:if(e!==!0||t.c==null){w=1
break}t.I2()
t.m(new C.dLZ(t,r))
w=4
return A.b(t.uV(),$async$a0o)
case 4:t.a.bn()
t.wR(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a0o,v)},
cj2(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aT.x1$.push(new C.dLT(w,f,d,e))},
aOT(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.di()
u.dZ(w,v,0,1)
u.ji(q,q,1,1)
this.w.sp(0,u)},
b4Z(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eA(new Float64Array(16))
q.dT(r)
w=q.Bx()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.di()
t.dZ(r,u,0,1)
t.ji(v,v,1,1)
t.dZ(-r,-u,0,1)
t.ih(0,q)
s.sp(0,t)},
a9X(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zN(u.a.c),$async$a9X)
case 2:t=s.qK(r.dE(e,new C.dLr(u)))
if(t!=null&&u.c!=null)u.m(new C.dLs(u,t))
return A.h(null,v)}})
return A.i($async$a9X,v)},
wR(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b1(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
uT(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$uT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fL4(o,t,!1,r,new C.dLG(u),q.a,s),$async$uT)
case 2:n=A
m=J
w=3
return A.b(C.Fh(u.a.c),$async$uT)
case 3:p=n.qK(m.dE(e,new C.dLH(u)))
if(p!=null&&u.c!=null)u.m(new C.dLI(u,p))
return A.h(null,v)}})
return A.i($async$uT,v)},
I2(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cv(w,0)},
uV(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a0L(t,s),$async$uV)
case 2:return A.h(null,v)}})
return A.i($async$uV,v)},
a_1(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tq(q,t.a.c)){t.wR("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hSA(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a_1)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.I2()
t.m(new C.dLS(t,r))
w=4
return A.b(t.uV(),$async$a_1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_1,v)},
YL(){return this.c79()},
c79(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$YL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tq(q,t.a.c)){t.wR("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.M(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dLQ(r,new C.td(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$YL)
case 3:if(e!==!0||t.c==null){w=1
break}t.I2()
t.m(new C.dLR(r,t))
w=4
return A.b(t.uV(),$async$YL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YL,v)},
TV(d){return this.bu0(d)},
bu0(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tq(r,t.a.c)){t.wR("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dLf(t,d),r,null,!0,!0,x.P),$async$TV)
case 3:s=f
if(s==null){w=1
break}t.I2()
t.m(new C.dLg(t,s))
w=4
return A.b(t.uV(),$async$TV)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TV,v)},
a0K(d){return this.cuQ(d)},
cuQ(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.M(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.dM0(u,d,new C.td(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a0K)
case 2:return A.h(null,v)}})
return A.i($async$a0K,v)},
c3v(d){var w=this,v=w.d
v===$&&A.c()
if(C.tq(v,w.a.c))w.MC(d)
else w.a0K(d)},
afq(d,e){return this.cmT(d,e)},
cmT(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$afq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.M(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.dLV(new C.td(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$afq)
case 3:case 1:return A.h(u,v)}})
return A.i($async$afq,v)},
GJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$GJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.k7?3:5
break
case 3:w=6
return A.b(C.fzj(t.a.c),$async$GJ)
case 6:s=e
o=t.a
r=C.fSF(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.afq(!s,!r),$async$GJ)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bxR(o,t.a.c)){t.wR("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kQ(o,"Cancel","Remove",q.y===D.k7?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$GJ)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aM_(t.a.c,t.d.a),$async$GJ)
case 11:t.a.bn()
o=t.c
if(o==null){w=1
break}A.iG(o,null)
case 1:return A.h(u,v)}})
return A.i($async$GJ,v)},
a7y(d){return this.bEU(d)},
bEU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a7y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tq(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.ba(s,new C.dLh(p))){o=A.U(s)
p.a=A.qK(new A.cV(new A.a4(s,new C.dLi(d),o.k("a4<1>")),new C.dLj(),o.k("cV<1,n>")))}q=p.a
if(q==null)q=d.d
t.I2()
t.m(new C.dLk(t,s,d,q))
w=3
return A.b(t.uV(),$async$a7y)
case 3:t.wR(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a7y,v)},
MC(d){return this.bGU(d)},
bGU(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$MC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tq(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a0K(d),$async$MC)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dLo(t,d),r,null,!0,!0,x.P),$async$MC)
case 6:s=f
if(s==null){w=1
break}t.I2()
t.m(new C.dLp(t,s))
w=7
return A.b(t.uV(),$async$MC)
case 7:case 1:return A.h(u,v)}})
return A.i($async$MC,v)},
ct3(){var w=this,v=w.d
v===$&&A.c()
if(!C.tq(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dM_(w))
w.uV()},
WI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$WI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bxR(n,t.a.c)){t.wR("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.M(n)
s=$.av()
r=new A.ap(B.as,s)
q=t.d.e
p=A.bj(new A.J(q,t.gc20(),A.U(q).k("J<1,n>")).bX(0,new C.dLB()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dLC(t,new C.td(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$WI)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.I2()
t.m(new C.dLD(t,p))
w=4
return A.b(t.uV(),$async$WI)
case 4:t.wR("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$WI,v)},
c21(d){return B.a.i(d.toLowerCase())},
c5Z(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tq(v,w)
t=r.d
s=C.hI0(t)
C.hRu(q,t.b,u,C.hI_(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.td(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a4(l,new C.dM7(),A.U(l).k("a4<1>")).gJ(0)
l=n?B.bW:B.iH
v=A.W(B.X9,n?B.bo:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.C(B.zV,A.aJ(!1,o,!0,new A.C(B.hD,A.B(A.a([v,B.br,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bo:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.R,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dM8(p,d),o,o,o,o,o,o,o),o),new A.C(B.mJ,p.bRy(m),o)],u)
if(p.d.y===D.k7){t=B.qK.j(0.15)
s=A.m(12)
r=A.H(B.qK.j(0.45),B.r,1)
q=C.Ff(p.d,p.a.c)
v.push(new A.C(B.wE,A.p(o,A.B(A.a([D.bAT,B.aw,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aA,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iM,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aA,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b8],u)
if(C.tq(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Ir("Undo",B.uS,p.gct2(),m,o,o))
u.push(new C.Ir("Family Book",D.bqv,p.gc5Y(),m,B.rw,o))
if(C.tq(p.d,p.a.c))u.push(new C.Ir("Display settings",B.AH,p.gc78(),m,B.aW,o))
u.push(new C.Ir("Sync",B.xj,p.gacX(),m,o,o))
t=p.d
if(t.y===D.k7||C.bxR(t,p.a.c)){t=p.d.y===D.k7?"Remove shared tree":"Delete tree"
u.push(new C.Ir(t,B.e8,p.gbF3(),m,B.fQ,o))}if(C.tq(p.d,p.a.c))u.push(new C.Ir("Add member",B.uN,new C.dM9(p),m,B.bS,o))
v.push(new A.C(P.adn,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.galO()===0){u=A.au(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bo:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.ck(new C.dMa(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.W(n?L.Xd:W.L1,o,o,o,o,o)
v.push(A.au(A.h8(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dMb(p),o),o,o,o))}return A.ca(o,l,A.bp(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),o,!1,!1,o,o)},
bRy(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ab(0,B.G,B.fr.j(0.35),B.dq,18)],x.V)
u=A.m(22)
t=A.an(-26,A.W(B.xc,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.a1,!0,m,A.aJ(!1,m,!0,A.p(m,D.bDS,B.f,m,m,new A.o(B.c.j(0.16),m,A.H(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cJ,!0,m,m,m,m,m,m,m,m,m,m,m,n.gacX(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ac)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eH5,m,m,m)
r=r.galO()
p=n.d.galO()===1?"member":"members"
o=x.p
p=A.a([s,B.be,A.D(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tq(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.bB4,m,m,m,n.gcgw(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.iO:B.m6
r=r?"Private":"Public"
r=A.D(n.as0(q,"Privacy",r,n.a.d.w?n.gcs7():m),1)
q=A.D(n.as0(B.xk,"Tree code",n.d.c,new C.dLq(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.aa,A.B(A.a([r,B.ab,q,B.ab,A.D(n.as0(D.bse,"Collaborators",p,n.gbVU()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.k7){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.a1,!0,A.m(999),A.aJ(!1,A.m(999),!0,new A.C(B.fL,A.B(A.a([A.W(B.ok,B.c,m,m,m,14),B.et,A.d("View only",m,m,m,m,m,m,B.aKt,m,m,m)],o),B.m,m,B.e,B.R,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ac)],o))}return A.p(m,A.bt(u,new A.am(B.W,m,B.a9,B.q,A.a([t,new A.C(B.E1,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.bH8,B.n),m,m,m,m,m,m,m,1/0)},
as0(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.a1,!0,A.m(14),A.aJ(!1,A.m(14),!0,new A.C(I.aet,A.v(A.a([A.W(d,B.c,w,w,w,18),B.av,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.tQ,A.d(f,w,1,B.a2,w,w,w,I.a4o,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ac)}}
C.bb6.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gai(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b2(t,t,t,new C.bb9(s,t),new A.as(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.d0J(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d0K(this),A.U(r).k("J<1,r>")))
return new A.C(B.rW,new A.a3(w,v,new A.am(B.W,t,B.a9,B.f,u,t),t),t)}}
C.ID.prototype={}
C.Ez.prototype={}
C.bb8.prototype={
gbd8(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aG5.prototype={}
C.bb9.prototype={
bGC(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.V()
v=A.L()
v.r=B.by.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bx(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ao,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b4(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pb(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pb(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bD())
q=A.L()
q.r=B.c.gp(0)
d.ae(new A.u(u,w),9,q)
q=A.L()
q.r=B.by.gp(0)
d.aL(t,q)},
bGA(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.d13())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.ba(a0,new C.d14(f))
t=new A.J(a0,new C.d15(f),A.U(a0).k("J<1,P>")).bX(0,new C.d16()).cG(0,1/0,B.vX)
w=f.a
d.bx(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.G()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lF(m)
i=Math.min(10,l/2)
l=$.V()
h=A.a([],q)
g=new A.aO(l.r,B.ao,null,null,h)
h.push(new A.b4(w,v-i))
l=j*i
h.push(new A.cO(w,v,w+l,v))
h.push(new A.ao(n-l,v))
h.push(new A.cO(n,v,n,v+i))
h.push(new A.ao(n,o.b))
k=e.G()
n=g.gbL().a.snapshot()
r.drawPath((g.e=new A.cE(n)).a,k)
k.delete()}},
a5(d,e){var w,v,u,t,s,r,q,p,o
$.V()
w=A.L()
w.r=B.bS.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fu
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bGA(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.G()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bGC(d,w,q.a,q.b)}},
aq(d){return d.b!==this.b}}
C.beN.prototype={
gc_R(){var w=this.c
if(B.a.i(w.y).length!==0)return D.d1F
switch(w.c.a){case 0:return D.cyo
case 1:return D.cIM
case 2:return D.cXD}},
gc_U(){var w=this.c,v=C.h2e(w.w),u=C.h2e(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=t.gc_R(),p=t.c,o=K.byK(p.f),n=t.gc_U(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gaj(q).j(0.35),B.cG,10)],m),k=r?B.aA:B.c,j=A.H(r?B.aA:B.c,B.r,2)
if(o!=null)w=A.rF(B.A,s,B.cn,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gaj(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gaj(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a5(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hP(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a5(B.ax,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.Eg,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.H(r?B.aA:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eQK,s,s,s),B.f,s,s,new A.o(B.c7,s,w,j,s,s,B.n),s,s,s,s,D.bms,s,s,s),s,s,s,-6,-4,s))}k=r?B.cz:B.c
j=A.m(8)
w=A.H(B.d.gL(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.w.j(r?0.3:0.06),B.dz,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cz,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aG(s,new A.a3(84,112,A.v(A.a([new A.am(B.W,s,B.a9,B.f,l,s),B.av,A.p(s,A.v(p,B.m,s,B.e,B.R,0,B.p),B.f,s,D.aSa,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bmD,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.ad)}}
C.bae.prototype={
a5(d,e){var w,v,u,t,s,r,q
$.V()
w=A.L()
v=this.b
u=v?B.c:D.b2d
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.G()
t.drawCircle(r,s,1,q)
q.delete()}},
aq(d){return d.b!==this.b}}
C.bsg.prototype={
B(d){var w=this,v=null,u=new C.eXx(w),t=w.c,s=t?B.cz:B.c,r=A.m(12),q=u.$3(B.hE,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bG:B.f6,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.AD,"Zoom out",w.e)
return A.aD(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bG:B.f6,v,v,v,1,v,v,v,v,v,22),u.$3(B.agH,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.R,0,B.p),B.f,s,4,v,B.dl,v,v,v,B.ac)}}
C.bi4.prototype={
B(d){var w=this,v=null,u=B.bS.j(0.15),t=A.H(B.bS,B.r,2),s=w.e,r=x.p
t=A.aG(v,A.p(v,A.v(A.a([A.W(s?L.Xd:W.L1,B.bS,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eN8,v,v,v)],r),B.m,v,B.b7,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.ad)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eL9,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.J(s,new C.ezc(w),A.U(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a3(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Y6.prototype={
S(){return new C.az1()},
bn(){return this.Q.$0()},
gdS(){return this.w}}
C.az1.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a0()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.av()
r.d!==$&&A.aQ()
r.d=new A.ap(new A.ba(t,B.b0,B.aM),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.ap(new A.ba(t,B.b0,B.aM),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.ap(new A.ba(t,B.b0,B.aM),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.ap(new A.ba(t,B.b0,B.aM),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.ap(new A.ba(t,B.b0,B.aM),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.ap(new A.ba(t,B.b0,B.aM),s)
t=u?q:v.c
r.y=t==null?D.wR:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hJv(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.av()
u.O$=0
u=v.e
u===$&&A.c()
u.R$=w
u.O$=0
u=v.f
u===$&&A.c()
u.R$=w
u.O$=0
u=v.r
u===$&&A.c()
u.R$=w
u.O$=0
u=v.w
u===$&&A.c()
u.R$=w
u.O$=0
u=v.x
u===$&&A.c()
u.R$=w
u.O$=0
v.a2()},
NT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fSF(p.y,p.w)
w=3
return A.b(A.l1(t.a.w,B.GC),$async$NT)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aWV(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$NT)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hlu(p.y,p.w)
t.a.bn()
case 5:w=7
return A.b(Ah.Fq(78,800),$async$NT)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dgk(t,q))
case 1:return A.h(u,v)}})
return A.i($async$NT,v)},
c_T(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hR(B.o.u(1000*Date.now()),w,D.wR,null,null,null,"","","","","",1,!1,0)
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
s=v.aAp(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a8(k,!1).M(s)},
a79(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a79=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dgj(r),s,null,!0,!0,x.y),$async$a79)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a8(s,!1).M(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a79,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H,i=new C.td(j),h=l.a.e,g=A.U(h).k("a4<1>"),f=A.A(new A.a4(h,new C.dgt(l),g),g.k("G.E"))
h=j?B.dT:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bkZ,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aA,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hs(A.aJ(!1,k,!0,new A.C(B.m0,A.W(B.e8,B.o7,k,k,k,17),k),B.cJ,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbBL(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jj:B.ik
t=K.byK(l.as)
if(l.as==null)s=A.W(B.od,j?B.bo:B.bn,k,k,k,40)
else s=k
s=A.au(A.aG(k,new A.am(B.W,k,B.a9,B.q,A.a([A.hj(u,t,s,k,42),A.an(0,A.hj(B.bS,k,D.buQ,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc_Q(),k,k,k,k,k,k,!1,B.ad),k,k,k)
t=l.d
t===$&&A.c()
t=C.az3(t,"Full name",B.m2,1,1,i,B.lH)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.beL(i,u,new C.dgu(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bo:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bew],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.dgv(),A.U(o).k("J<1,eI<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bo:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bey],q)
B.d.v(q,new A.J(f,new C.dgx(),A.U(f).k("J<1,eI<n?>>")))
o=A.v(A.a([t,B.ar,new C.aaZ(i,r,"Who is their parent?",p,new C.dgy(l),k,o),B.ay,n,B.ar,new C.aaZ(i,m,"Who is their spouse / partner?",q,new C.dgz(l),k,o)],v),B.ai,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.az3(q,"Birth date",D.afP,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.az3(m,"Birth place",B.Xs,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.az3(n,"Date of death (if deceased)",D.ahX,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.az3(p,"Occupation",B.Yx,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.A,k,B.a9,B.q,w,k),B.ay,s,B.bu,new C.ab_(i,"Identity",u,k),B.aa,new C.ab_(i,"Family links",o,k),B.aa,new C.ab_(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.az3(r,"Notes",B.kE,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.aa,new C.az2(i,"Child order",l.c7k(l.at),new C.dgA(l),new C.dgB(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fIw(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dgC(l):k
B.d.v(r,A.a([B.S,new C.az2(i,"Visible in tree",u,w,new C.dgD(l),k)],v))}r.push(B.S)
w=j?B.jj:B.ik
u=A.m(14)
t=A.H(j?B.dW:B.bY,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.ix(k,B.bS,k,B.ah,k,new C.dgE(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bo:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,L.ad0,k,k,k))
r.push(B.bu)
w=j?B.aN:B.aA
j=j?B.dW:B.bY
r.push(A.B(A.a([A.D(A.dV(B.n4,new C.dgw(d),A.db(k,k,k,k,k,k,k,k,k,w,k,k,B.cc,k,new A.b6(A.m(14),B.Z),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.be,A.D(A.bL(D.eqo,l.gc_S(),A.bk(B.aS,k,k,0,B.c,k,B.cc,k,new A.b6(A.m(14),B.Z),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.av)
return A.en(B.h2,k,B.ah,h,new A.a3(420,k,A.ch(A.v(r,B.ai,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ak),k),D.adR,k,B.adf,new A.b6(g,B.Z),k,k)},
c7k(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.ab_.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jj:B.ik,s=A.m(16)
return A.v(A.a([new A.C(D.aef,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.H(v?B.dW:B.bY,B.r,1),s,w,w,B.n),w,w,w,w,B.bm,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.beM.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dT:B.c,r=A.m(12),q=A.H((t?B.dW:B.bY).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aN:B.aA,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aK(u,B.U,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bn(u,B.eA,u,B.us,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bo:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cq,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bS,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.af,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aaZ.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dT:B.c,s=A.m(12),r=A.H((u?B.dW:B.bY).j(0.85),B.r,1),q=A.W(B.qu,u?B.bo:B.bn,v,v,v,v),p=A.l(v,v,u?B.aN:B.aA,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dT:B.c
return A.p(v,new A.CA(A.a2p(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bo:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cq,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.ls,v,v,v)}}
C.beL.prototype={
B(d){var w=new C.dgF(this)
return A.B(A.a([w.$3(D.WW,"Male",B.LM),B.ab,w.$3(D.af5,"Female",B.Ly),B.ab,w.$3(D.wR,"Other",B.mN)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.az2.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jj:B.ik,r=A.m(14),q=A.H(t?B.dW:B.bY,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aA,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bo:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aF8(u,B.AD,w.f,v),B.br,new C.aF8(u,B.hE,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eq,v,v,v)}}
C.aF8.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bS.j(0.12)
else w=s.c.a?B.dT:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bS
else t=(s.c.a?B.bo:B.bn).j(0.4)
return A.aD(!1,B.a1,!0,v,A.aJ(!1,u,!0,new A.a3(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ac)}}
C.ab0.prototype={
bKd(d){switch(d.a){case 0:return B.bS
case 1:return B.by
case 2:return B.cU}},
bKe(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aT0(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zc(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dT:B.c
u=A.m(12)
t=A.H((w?B.dW:B.bY).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.W(f,B.bS,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bo:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.av,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aA,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cN,B.zT,p,p,1/0)},
abs(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jj:B.ik,s=A.m(16),r=A.H(v?B.dW:B.bY,B.r,1)
return A.v(A.a([new A.C(D.aef,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h6T(r,q),o=q.c,n=t.bKd(o),m=K.byK(q.f),l=t.e.a,k=l?B.dT:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aN:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.k7?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bo:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.H(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.au(A.p(s,A.hj(u,m,m==null?A.W(B.od,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ej,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.H(n.j(0.45),B.r,1)
v=A.au(A.p(s,A.d(t.bKe(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.m_,s,s,s),s,s,s)
u=x.p
i=A.a([t.zc("Full name",i,B.m2)],u)
if(p>0)i.push(t.zc("Child order","#"+p,B.LF))
r=A.a([h,B.av,r,B.aO,l,B.S,v,B.bu,t.abs("Identity",i),B.aa,t.abs("Life details",A.a([t.zc("Birth date",q.w,D.afP),t.zc("Birth place",q.x,B.Xs),t.zc("Date of death",q.y,D.ahX),t.zc("Occupation",q.z,B.Yx)],u)),B.aa,t.abs("Family links",A.a([t.zc("1. Parent",t.aT0(q.d),B.Eu),t.zc("2. Spouse",t.aT0(q.e),B.Lx)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.aa,t.abs("Notes",A.a([t.zc("Notes",q,B.kE)],u))],u))
r.push(B.bu)
r.push(A.bL(B.HO,new C.dgP(d),A.bk(B.aS,s,s,s,s,s,B.cc,s,new A.b6(A.m(14),B.Z),s,s,s)))
return A.ez(s,k,new A.d1(B.lj,A.ch(A.v(r,B.ai,s,B.e,B.R,0,B.p),B.q,s,B.z,s,B.wG,s,s,B.ak),s),s,s,s,B.E4,B.cZ,s,new A.b6(j,B.Z),s)}}
C.Ir.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bo:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.wK,A.hs(A.aD(!1,B.a1,!0,A.m(8),A.aJ(!1,A.m(8),!0,new A.a3(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ac),u,v.c,u,u),u)}}
C.an1.prototype={
eF(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a4().ab())
w=u.c
v=A.U(w).k("J<1,a1<n,@>>")
w=A.A(new A.J(w,new C.c47(),v),v.k("ai.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iH(w,new C.c48(),t,x.U))
return s}}
C.an2.prototype={
S(){return new C.aAC(A.a([],x.bF))},
gd6(){return this.c}}
C.aAC.prototype={
Z(){this.a0()
this.I9()},
I9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$I9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c4b(t.a.c),$async$I9)
case 3:r=e
w=4
return A.b(C.zN(t.a.c),$async$I9)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qr(q,new C.dMk(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dMl(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$I9,v)},
xo(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b1(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
IS(d,e){return this.cvm(d,e)},
cvm(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$IS=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dMp(q,e))
t=3
w=6
return A.b(d.$0(),$async$IS)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dMq(q))
$.eK.lV()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IS,v)},
Vy(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oF(r,s.c,s.e),$async$Vy)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IS(new C.dMh(t),"Preparing download\u2026"),$async$Vy)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vy,v)},
VC(d){return this.bIj(d)},
bIj(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oF(r,s.c,s.e),$async$VC)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.IS(new C.dMi(t,d),"Preparing file\u2026"),$async$VC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VC,v)},
adk(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$adk=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wt.c2().Kz(B.Oy,B.t0,!0),$async$adk)
case 7:r=e
o=r
q=o==null?null:J.fk(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gai(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jf(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a6(m)
$.al.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.Fp()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adk,v)},
Wc(d){return this.bSq(d)},
bSq(d){var w=0,v=A.j(x.H),u=this
var $async$Wc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.IS(new C.dMj(u,d),"Restoring family trees\u2026"),$async$Wc)
case 2:return A.h(null,v)}})
return A.i($async$Wc,v)},
Wb(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Wb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.adk(),$async$Wb)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Wc(s),$async$Wb)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wb,v)},
a_R(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oF(r,s.c,s.e),$async$a_R)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IS(new C.dMo(t),"Creating QR code\u2026"),$async$a_R)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_R,v)},
a_t(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BR()){t.xo("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).cp(A.eE(new C.dMm(),!0,null,x.N)),$async$a_t)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Wc(r),$async$a_t)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_t,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=o?B.zn:B.iH,m=o?D.abD:B.aN,l=o?B.aI:B.bY,k=o?B.aN:B.aA,j=new C.d17(n,m,l,k,o?B.bH:B.bn)
l=A.aF(p,p,p,p,A.W(B.ew,k,p,p,p,20),p,p,p,new C.dMs(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.ey(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d0G(!0,B.j8,B.aY,B.aY,q.r?p:q.gcmH(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gciY()
t.push(A.D(C.d0G(!s,B.iQ,B.b2,B.bA,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d0G(!1,B.hs,B.aS,B.bS,q.r?p:q.gbIc(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d0G(!1,M.xn,B.aX,B.aL,q.r?p:q.gbSn(),j,s,"Upload backup file"),1))
l=A.a([new C.bb7(v,l,p),B.ki,new C.aah(j,"QR restore",p),B.S,t,B.d5,new C.aah(j,"Backup files",p),B.S,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.aa(q.d)>1&&q.a.f==null){v=A.a([B.ki,new C.aah(j,"One tree",p),B.S],u)
B.d.v(v,J.b5(q.d,new C.dMt(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cM(l,p,B.W3,p,p,B.ak,!1)],u)
if(q.r){v=A.m(18)
t=A.H(B.aS.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(o?0.3:0.1),B.dq,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.bp(!0,A.p(p,A.B(A.a([L.aIY,B.be,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.A0,p,p,p),!0,!1,B.ah,!0,!1),p,p,20,20,p,p))}return A.ca(w,n,new A.am(B.W,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d17.prototype={}
C.bb7.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ab(0,B.G,B.aS.j(0.32),B.jQ,28)],x.V)
t=A.an(p,A.W(B.th,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.W,p,B.a9,B.q,A.a([t,new A.C(B.a8,A.B(A.a([A.p(p,D.bDq,B.f,p,p,new A.o(s,p,A.H(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nN,A.D(A.v(A.a([D.eVo,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bKe,B.n),p,p,p,p,p,p,p,p)}}
C.aah.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bb5.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aY.j(0.4):m.c
k=A.H(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aY.j(0.1),B.cG,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.H(t.j(0.35),B.r,1)
return A.aD(!1,B.a1,!0,q,A.aJ(!1,o,!0,A.es(A.d9(new A.C(E.VH,A.v(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qr,q,q,q),B.aa,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cq,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ac)}}
C.bba.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.H(s.c,B.r,1),q=B.aS.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.a1,!0,v,A.aJ(!1,u,!0,A.es(new A.C(B.eM,A.B(A.a([A.p(v,D.bCE,B.f,v,v,new A.o(q,v,A.H(B.aS.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qr,v,v,v),B.be,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.W(B.hs,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ac)}}
C.Yr.prototype={
S(){return new C.aAB()},
gd6(){return this.c}}
C.aAB.prototype={
Z(){this.a0()
this.a6G()},
a6G(){var w=0,v=A.j(x.H),u=this,t
var $async$a6G=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aZy(u.a.c,B.BE),$async$a6G)
case 2:t=e
if(u.c!=null)u.m(new C.dMc(u,t))
return A.h(null,v)}})
return A.i($async$a6G,v)},
aeH(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aeH=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dMd(q))
t=4
p=A.fUi(q.a.d,B.BE)
if(p==null){n=A.bb("Could not read this QR code.")
throw A.R(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ape(n.e,m,l,B.BE,p,n.f),$async$aeH)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dMe(q))
q.c.I(x.q).f.P(D.eyI)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a6(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d(B.a.e1(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dMf(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeH,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=p?B.j1:B.p0,n=p?B.hy:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.ey(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.f8Y,q,q,q,1,q,!0)
w=A.m(24)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.pn(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aS,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bu,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aj,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b7,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ag:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gciG()
if(u)u=B.Hm
else u=A.W(r.e===!0?B.hr:B.afO,q,q,q,q,q)
w=A.a([w,B.aa,v,B.aa,new A.a3(1/0,q,A.eu(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.db(q,q,q,q,q,q,q,q,q,B.aS,q,B.fR,q,q,q,new A.ay(B.aS.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.ir,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.aj,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a3(1/0,q,A.bL(B.yD,new C.dMg(d),A.bk(B.aS,q,q,q,q,B.fR,q,q,q,q,q,q)),q))
return A.ca(m,o,new A.C(B.a8,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Ys.prototype={
S(){return new C.bgc(A.yn(B.wq,B.nb,B.tl))}}
C.bgc.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.ca(A.ey(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.f1H,w,w,w,1,w,!0),B.w,A.ym(this.d,B.bQ,new C.dMu(this,d)),w,!1,!1,w,w)}}
C.aVt.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.O4,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.ll.prototype={}
C.a4g.prototype={
S(){return new C.bfV(null,null)}}
C.bfV.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bi(v,B.rR,v,1,v,w)
w.e=A.bi(v,B.p5,v,1,v,w)
w.a.toString
w.d.cE(0)
w.e.cE(0)},
bq(d){var w,v,u=this
u.bD(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cE(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cE(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.bpy()},
B(d){var w,v,u=this,t=B.d.dI(D.a06,new C.dyk(u),new C.dyl())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.coG(A.c4(new A.h5(A.a([w,v],x.dS)),new C.dym(u,t),null),!0)}}
C.bfU.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aX_(d,e)
break
case"house":p.lw(d,e,D.cN8)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.ge8()
$.V()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ae(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lB(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zU(d,e,12)
p.x_(d,e,B.kV,5,14)
break
case"grocery":p.c81(d,e)
break
case"calculator":p.c7J(d,e)
break
case"lumber":p.c89(d,e)
break
case"kitchen":p.c84(d,e)
break
case"landscape":p.lw(d,e,D.cNz)
s=new A.aO($.V().r,B.ao,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b4(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cO(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cO(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.ao(t,w))
s.E(new A.ao(0,w))
s.E(new A.bD())
w=A.L()
w.r=B.fs.j(0.85).gp(0)
d.aL(s,w)
p.zU(d,e,8)
p.x_(d,e,B.iL,4,18)
break
case"plumbing":p.c8i(d,e)
break
case"electrical":p.lw(d,e,D.cWY)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.V()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aW(new A.a9(0,0,0+e.a,0+e.b),u)
p.lB(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lB(d,e,B.lo.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.zU(d,e,10)
break
case"store":p.c8r(d,e)
break
case"paint_remodel":p.c8d(d,e)
break
case"roofing":p.c8k(d,e)
break
case"warehouse":p.c8y(d,e)
break
case"vehicles":p.c8w(d,e)
break
case"farm":p.c7W(d,e)
break
case"restaurant":p.c8j(d,e)
break
case"tools":p.c8u(d,e)
break
case"wallet":p.c8x(d,e)
break
case"concrete":p.c7P(d,e)
break
case"blueprint":p.c7H(d,e)
break
default:p.aX_(d,e)}},
lw(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.V()
w=A.L()
w.sar(new A.a5(B.ax,B.aD,B.x,f,null,null).av(0,v))
d.aW(v,w)},
lB(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.ge8()/2-h
$.V()
w=A.L()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bS(q,p)
r=w.G()
v.drawArc.apply(v,[A.c2(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
x_(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.ge8()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.V()
q=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.G()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zU(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.V()
o=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.G()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aX_(d,e){var w,v=this
v.lw(d,e,D.cVO)
w=v.c
v.lB(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lB(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bGw(d,e,B.hQ,w)
v.x_(d,e,B.c.j(0.7),6,8)},
bGw(d,e,f,g){var w,v,u,t,s,r,q,p
$.V()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.G()
s.drawRect(A.c2(new A.a9(16,q,t,q+3)),p)
p.delete()}},
c81(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lw(d,e,D.c4x)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.al(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.V()
l=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
l.r=D.cLw[B.o.F(s,4)].j(0.85).gp(0)
k=l.G()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lB(d,e,B.c.j(0.35),w,16)
j.x_(d,e,B.iL,5,12)},
c7J(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lw(d,e,D.c4E)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.ge8()
$.V()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ae(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.id(g,g,g,g,g,B.a5,B.ch,g,B.em,B.cg)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cP1[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saT(0,new A.eo(r,g,g,B.cS,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eU()
p.a5(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.al(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c4G[o]
l=B.k_.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saT(0,new A.eo(m,g,g,B.cS,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eU()
p.a5(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.al(o,3)*0.38)+Math.sin(n)*6))}h.lB(d,e,B.c.j(0.35),w*1.5,14)
h.lB(d,e,B.eB.j(0.55),-v*3.141592653589793*2,8)
h.lB(d,e,B.zo.j(0.4),r*2.8,22)
h.x_(d,e,B.oT,8,10)
h.zU(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.V()
r=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.G()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c89(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,Y.are)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a9(20,q,u,q+10),B.i0)
$.V()
o=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
o.r=A.ar(B.fV,B.nY,(r+1)/2).gp(0)
n=o.G()
t.drawRRect(A.ex(p),n)
n.delete()}m.lB(d,e,B.fV.j(0.35),w,15)
m.zU(d,e,8)},
c84(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lw(d,e,D.cM0)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.V()
l=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.G()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lB(d,e,B.bJ.j(0.4),-w*3.141592653589793*2.2,11)
j.x_(d,e,B.q6,4,14)},
c8i(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lw(d,e,D.cBS)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.V()
n=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.G()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.x_(d,e,B.o5,6,12)
l.lB(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c8r(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lw(d,e,D.chZ)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a9(q,14,q+u,22),B.hL)
$.V()
p=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
p.r=A.ar(B.f4,B.bJ,(r+1)/2).gp(0)
o=p.G()
t.drawRRect(A.ex(q),o)
o.delete()}n.lB(d,e,B.c.j(0.3),w,16)
n.zU(d,e,8)
n.x_(d,e,B.uc,5,13)},
c8d(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cHg)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bx(new A.a9(q,p,q+8,p+(18+r*22)),B.h5)
$.V()
q=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
q.r=[B.ie,B.dy,B.bJ,B.eE][s].j(0.85).gp(0)
o=q.G()
t.drawRRect(A.ex(p),o)
o.delete()}this.lB(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c8k(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cEY)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.V()
p=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.G()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.x_(d,e,B.cm,7,11)},
c8y(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.ckB)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bx(new A.a9(p,o,p+(t-r*8),o+16),B.i0)
$.V()
p=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
p.r=A.ar(B.cm,B.aN,(Math.sin(q)+1)/2).gp(0)
n=p.G()
s.drawRRect(A.ex(o),n)
n.delete()}this.lB(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c8w(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.d_w)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bx(new A.a9(r,q,r+28,q+8),B.i0)
$.V()
p=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.G()
t.drawRRect(A.ex(q),o)
o.delete()}this.zU(d,e,6)},
c7W(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cKG)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.V()
s=A.L()
s.r=B.lo.j(0.75).gp(0)
d.ae(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.fW.j(0.85).gp(0)
o.c=3
n=o.G()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lB(d,e,B.lo.j(0.35),w,14)},
c8j(d,e){var w,v,u,t,s,r,q,p,o=this
o.lw(d,e,D.cMY)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cr(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.V()
q=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.22).gp(0)
p=q.G()
t.drawOval(A.c2(r),p)
p.delete()}o.x_(d,e,B.q6,5,16)
o.zU(d,e,7)},
c8u(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,D.cYl)
w=m.c
v=w*3.141592653589793
m.lB(d,e,B.nY.j(0.55),v*3,10)
m.lB(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.V()
o=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.nY.j(0.8).gp(0)
n=o.G()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c8x(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,D.d00)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a9(p,o,p+36,o+22),B.hL)
$.V()
p=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
p.r=A.ar(B.iL,B.lo,q).gp(0)
n=p.G()
s.drawRRect(A.ex(o),n)
n.delete()}m.zU(d,e,9)
m.lB(d,e,B.c.j(0.4),w*2.2,12)},
c7P(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cRv)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bS(new A.u(v,u),34)
$.V()
s=A.L()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.fa(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.aq(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.bY.j(0.85).gp(0)
n=o.G()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c7H(d,e){var w,v,u,t,s,r,q,p
this.lw(d,e,D.cNP)
$.V()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.G()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.G()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.V()
u=A.L()
u.r=B.dy.j(0.45).gp(0)
d.aW(new A.a9(0,p,0+v,p+6),u)
this.lB(d,e,B.kV.j(0.45),-t*3.141592653589793*2,11)},
aq(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.apU.prototype={
Ya(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ya=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aMV(),$async$Ya)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a6u(s),$async$Ya)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Ya,v)},
adl(d){return this.caN(d)},
caN(d){var w=0,v=A.j(x.H),u=this,t
var $async$adl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hRE(d),$async$adl)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$adl,v)},
B(d){var w,v,u,t=null,s=A.M(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.jj:B.ik
w=x.p
v=A.a([C.aNi(!0,B.pY,1/0,B.pf,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bV(new A.bG(B.b1,t,t,new A.C(B.uo,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.as5,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a5(B.b1,B.b3,B.x,u,t,t),B.n),B.bb))}v.push(A.an(8,A.B(A.a([A.D(A.dq(D.bwB,D.eRY,new C.cbG(this,d),A.bk(B.aS,t,t,t,B.c,t,B.jH,t,t,t,t,B.c9)),1),B.ab,A.D(A.eu(D.bEC,D.f4B,this.gc1Z(),A.db(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jH,t,t,D.aQK,t,t,t,B.c9)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fC(1.7777777777777777,A.aD(!1,B.a1,!0,B.pY,new A.am(B.W,t,B.aZ,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.ac),t)}}
C.aIr.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.aQ9.prototype={}
C.aQ8.prototype={}
C.aOe.prototype={}
C.X5.prototype={
S(){return new C.avW()}}
C.avW.prototype={
Z(){var w,v,u=this
u.a0()
u.a.toString
w=new A.ba("",B.b0,B.aM)
v=$.av()
u.d!==$&&A.aQ()
u.d=new A.ap(w,v)},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
IJ(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.P(D.ezc)
return}t=u.c
t.toString
v=u.e
A.a8(t,!1).M(new C.aQ9(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=m?B.dT:B.c,k=A.m(20),j=A.p(n,D.bEi,B.f,n,n,new A.o(B.aS.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aN:B.aA,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bo:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.be,i,A.aF(n,n,n,n,A.W(B.cv,m?B.bo:B.bn,n,n,n,n),n,n,n,new C.cUj(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bo:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bo:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cq,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fUy(new C.cUk(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aN:B.aA,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jj:B.ik
r=A.m(12)
q=A.m(12)
p=m?B.dW:B.bY
t=A.aK(n,B.U,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bn(n,new A.b3(4,r,B.df),n,n,n,n,n,n,!0,new A.b3(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.af,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cUl(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A_.Hq,n,n,n,n)
u=m?B.aN:B.aA
m=m?B.dW:B.bY
return A.ez(n,l,new A.d1(B.lj,A.ch(A.v(A.a([j,B.aO,i,B.av,w,B.P,v,B.aO,t,B.bu,A.B(A.a([A.D(A.dV(B.dd,new C.cUm(d),A.db(n,n,n,n,n,n,n,n,n,u,n,n,B.cc,n,new A.b6(A.m(12),B.Z),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.D(A.bL(D.f4Q,o.ga08(),A.bk(B.aS,n,n,n,B.c,n,B.cc,n,new A.b6(A.m(12),B.Z),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.R,0,B.p),B.q,n,B.z,n,B.A2,n,n,B.ak),n),n,n,n,V.A3,B.cZ,n,new A.b6(k,B.Z),n)}}
C.X4.prototype={
S(){return new C.avV()}}
C.avV.prototype={
Z(){this.a0()
var w=$.av()
this.d!==$&&A.aQ()
this.d=new A.ap(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
IJ(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.P(D.ewU)
return}v=this.c
v.toString
A.a8(v,!1).M(new C.aQ8(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.M(d).ax.a===B.H,o=p?B.dT:B.c,n=A.m(20),m=A.p(q,D.bAY,B.f,q,q,new A.o(B.bS.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bo:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.be,l,A.aF(q,q,q,q,A.W(B.cv,p?B.bo:B.bn,q,q,q,q),q,q,q,new C.cUf(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aS.j(p?0.12:0.08)
w=A.m(12)
v=A.H(B.aS.j(0.25),B.r,1)
u=A.W(B.afA,B.aS.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.aw,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aA,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aN:B.aA,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jj:B.ik
t=A.m(12)
s=A.m(12)
r=p?B.dW:B.bY
v=A.aK(q,B.U,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bn(q,new A.b3(4,t,B.df),q,q,q,q,q,q,!0,new A.b3(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.af,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cUg(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.kj,q,q,q,q)
w=p?B.aN:B.aA
p=p?B.dW:B.bY
return A.ez(q,o,new A.d1(B.lj,A.ch(A.v(A.a([m,B.aO,l,B.ay,v,B.bu,A.B(A.a([A.D(A.dV(B.dd,new C.cUh(d),A.db(q,q,q,q,q,q,q,q,q,w,q,q,B.cc,q,new A.b6(A.m(12),B.Z),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.D(A.bL(D.fb5,this.ga08(),A.bk(B.bS,q,q,q,B.c,q,B.cc,q,new A.b6(A.m(12),B.Z),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.A2,q,q,B.ak),q),q,q,q,V.A3,B.cZ,q,new A.b6(n,B.Z),q)}}
C.WD.prototype={
S(){return new C.auF()}}
C.auF.prototype={
Z(){var w,v=this
v.a0()
w=$.av()
v.d!==$&&A.aQ()
v.d=new A.ap(B.as,w)
v.e!==$&&A.aQ()
v.e=new A.ap(new A.ba("1",B.b0,B.aM),w)
v.f!==$&&A.aQ()
v.f=new A.ap(B.as,w)
v.r!==$&&A.aQ()
v.r=new A.ap(B.as,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.av()
u.O$=0
u=v.e
u===$&&A.c()
u.R$=w
u.O$=0
u=v.f
u===$&&A.c()
u.R$=w
u.O$=0
u=v.r
u===$&&A.c()
u.R$=w
u.O$=0
v.a2()},
gI4(){var w,v=this.e
v===$&&A.c()
w=A.d2(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gagt(){var w=this.f
w===$&&A.c()
w=A.d2(B.a.i(w.a.a))
return w==null?0:w},
gaZL(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aKs(d){var w,v=B.k.D(this.gI4()+d,0.25,999999),u=B.k.jA(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.a9(v,2)
w=A.ae("\\.?0+$",!0,!1,!1,!1)
u=A.aI(u,w,"")}t.saT(0,u)
this.m(new C.crT())},
aus(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aS,w,w,w,20):w,u=d.a,t=u?B.jj:B.ik,s=A.m(14),r=A.m(14)
u=u?B.dW:B.bY
return A.bn(w,new A.b3(4,s,B.df),w,B.bC,w,w,w,w,!0,new A.b3(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b3(4,A.m(14),B.a70),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c2_(d,e,f){return this.aus(d,e,f,null)},
IJ(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gagt()<=0){s.c.I(x.q).f.P(D.eB3)
return}r=s.c
r.toString
v=s.gI4()
u=s.gagt()
t=s.gaZL()
A.a8(r,!1).M(new C.aOe(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.td(n),l=n?B.dT:B.c,k=A.m(24),j=x.O,i=A.a([B.aS.j(0.22),B.bS.j(0.14)],j),h=A.m(14)
i=A.p(o,D.buy,B.f,o,o,new A.o(o,o,A.H(B.aS.j(0.35),B.r,1),h,o,new A.a5(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aA,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bo:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cq,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.be,h,A.aF(o,o,o,o,A.W(B.cv,n?B.bo:B.bn,o,o,o,o),o,o,o,new C.crZ(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aK(o,B.U,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.aus(m,"Item name (optional)","Lumber, paint, labor\u2026",B.LL),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A_.Hq,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bo:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jj:B.ik
t=A.m(14)
s=A.H(n?B.dW:B.bY,B.r,1)
r=A.aF(o,o,o,o,A.W(B.AD,n?B.aN:B.aA,o,o,o,20),o,o,o,new C.cs_(p),o,o,o,o,o,B.c9)
q=p.e
q===$&&A.c()
q=A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bG8,B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,B.dR,o,o,o,1,o,o,!1,"\u2022",o,new C.cs0(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a3(52,o,q,o),A.aF(o,o,o,o,A.W(B.hE,n?B.aN:B.aA,o,o,o,20),o,o,o,new C.cs1(p),o,o,o,o,o,B.c9)],w),B.m,o,B.e,B.R,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aN:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.aw,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.aus(m,"Amount","0.00",B.hV),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,B.dR,o,o,o,1,o,o,!1,"\u2022",o,new C.cs2(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.A(new A.J(D.cHI,new C.cs3(p,m),t),t.k("ai.E"))
i=A.a([i,B.bu,v,B.ay,h,B.P,s,B.aa,A.c9(B.bI,u,B.bx,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aA,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c2_(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cs4(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.kj,o,o,o,o)],w))}i.push(B.aO)
h=B.aS.j(n?0.18:0.1)
j=A.a([h,B.bS.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bo:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gI4()===B.k.jA(p.gI4())?B.k.N(p.gI4()):p.gI4()
s=p.gaZL()
r=A.zP(p.gagt())
i.push(A.p(o,A.B(A.a([A.D(A.v(A.a([u,B.av,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bo:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bzw(p.gI4()*p.gagt(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a5(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.iN,o,o,o))
i.push(B.bu)
j=A.m(14)
h=n?B.dW:B.bY
h=A.db(o,o,o,o,o,o,o,o,o,o,o,o,B.cc,o,new A.b6(j,B.Z),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.D(A.dV(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cs5(d),h),1),B.aw,A.D(A.dq(D.aj_,D.f7o,p.ga08(),A.bk(B.aS,o,o,0,B.c,o,B.cc,o,new A.b6(A.m(14),B.Z),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.ez(o,l,new A.d1(U.a7n,A.ch(A.v(i,B.ai,o,B.e,B.R,0,B.p),B.q,o,B.z,o,A7.qq,o,o,B.ak),o),o,o,o,B.Kt,B.cZ,o,new A.b6(k,B.Z),o)}}
C.a_9.prototype={
S(){return new C.bs8()}}
C.bs8.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a.e
v=$.av()
u.d!==$&&A.aQ()
u.d=new A.ap(new A.ba(w,B.b0,B.aM),v)},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?B.dT:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aN:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aN:B.aA,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jj:B.ik
v=A.aK(s,B.U,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bn(s,new A.b3(4,A.m(12),B.df),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.af,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eX_(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dV(B.dd,new C.eX0(d),s),1)
r=A.bk(B.bS,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.ez(s,q,new A.C(B.A2,A.v(A.a([o,B.ay,v,B.aO,A.B(A.a([u,B.aw,A.D(A.bL(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eX1(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.R,0,B.p),s),s,s,s,s,B.cZ,s,new A.b6(p,B.Z),s)}}
C.a9l.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.Em.prototype={
S(){return new C.bs6(null,null)}}
C.bs6.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,D.bf5,null,1,null,v)
w.cE(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.brS()},
gbtd(){switch(this.a.r.a){case 1:return A.a([B.aS,B.bS,B.aW],x.O)
case 2:return A.a([B.bs,B.aS,B.aW],x.O)
case 3:return A.a([B.aY,B.c7,B.jB],x.O)
case 4:return A.a([B.hn,B.bS,B.f5],x.O)
case 0:return A.a([B.aS,B.bS,B.aW],x.O)}},
B(d){var w=A.M(d),v=this.d
v===$&&A.c()
return new A.er(A.c4(v,new C.eWY(this,new C.td(w.ax.a===B.H)),null),null)}}
C.auy.prototype={
S(){return new C.bs7(null,null)}}
C.bs7.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.mF,null,1,null,v)
w.cE(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.brT()},
B(d){var w=this.d
w===$&&A.c()
return A.c4(w,new C.eWZ(this),null)}}
C.bs5.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aY(w,w))
u=new A.aO($.V().r,B.ao,null,null,A.a([],x.v))
u.E(new A.iO(v))
w=A.L()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aA(v,w)
w=A.L()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aL(u,w)
w=A.wr(u)
t=A.a([],x.f5)
w=new A.v_(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b9(A.jK('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.G9(w,r)
w.j2()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aNM(d,q,r,o,0,0.2,4.2,0.92)
p.aNM(d,q,r,s,0.52,0.11,3.2,0.58)}},
aNM(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.heL(e.a.a,e,t,t+f*i,!0),r=A.bxU(s.gbL().a.getBounds())
$.V()
w=A.L()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a5(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.FH,null).av(0,r))
d.aL(s,w)},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aKz.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aKA.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.td.prototype={}
C.apT.prototype={
S(){return new C.aC3()},
gdS(){return this.c}}
C.aC3.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.aeb()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.JP(w,v)
this.a2()},
aeb(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aeb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.by0(t.c,t.d.a),$async$aeb)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.ewm(u,s))
return A.h(null,v)}})
return A.i($async$aeb,v)},
Oi(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Oi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.ewd(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.JP(t,s),$async$Oi)
case 2:if(u.c!=null)u.m(new C.ewe(u))
return A.h(null,v)}})
return A.i($async$Oi,v)},
OO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.M(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.ewk(t,new C.td(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$OO)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a6u(q),$async$OO)
case 6:case 5:t.m(new C.ewl(t,r))
w=7
return A.b(t.Oi(),$async$OO)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OO,v)},
TP(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hRp(r),$async$TP)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.ew8(t,new C.qv(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Oi(),$async$TP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TP,v)},
c6Y(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h6Q(t,new C.ewc(u),w,v)},
a8r(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.c3(new A.ay(v,2.5,B.r,-1),B.Z,B.Z,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aQw,w,w,B.n),w,22,w,w,w,w,w,22)},
a7x(d){return this.bER(d)},
bER(d){var w=0,v=A.j(x.H),u=this
var $async$a7x=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.ewb(u,d))
w=2
return A.b(u.Oi(),$async$a7x)
case 2:return A.h(null,v)}})
return A.i($async$a7x,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.M(a2).ax.a===B.H,e=f?B.bW:B.iH,d=A.m(8),a0=A.W(O.Xa,f?B.bo:B.bn,g,g,g,16),a1=x.p
a0=A.aJ(!1,d,!0,new A.C(B.E9,A.B(A.a([a0,B.br,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bo:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.R,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.ewn(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.W,g,B.aZ,B.q,A.a([A.bt(A.m(22),C.aNi(!0,A.m(22),1/0,B.pf,g,d,1/0),B.ap),A.an(10,A.dq(D.bz3,D.f9q,h.gaXJ(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.ha,g,new A.b6(A.m(12),B.Z),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aS.j(f?0.5:0.38),B.eP,22),new A.ab(-4,B.G,B.bS.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.H(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bt(s,new A.am(B.W,g,B.aZ,B.q,A.a([C.aNi(!0,A.m(16),1/0,B.Lc,g,r.c,1/0),A.bV(g,new A.o(g,g,g,g,g,new A.a5(B.b1,B.b3,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bb),A.an(g,h.a8r(!0),g,g,8,g,8,g),A.an(g,A.cpq(h.a8r(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.cpq(h.a8r(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.cpq(h.a8r(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dq(D.bv7,D.f3D,h.gaXJ(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.ha,g,new A.b6(A.m(12),B.Z),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bGU,B.n),g,g,g,g,B.m0,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aA,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b_r,B.nh,B.fZ],u):A.a([B.aW,B.aS,B.bS],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aS.j(f?0.45:0.35),B.eP,24)],t)
r=A.m(22)
p=A.an(g,A.W(B.jL,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.H(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h0,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.bzw(h.d.gw6(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cq,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.H(B.fY.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aY.j(0.28),B.cG,14)],t)
j=B.aY.j(0.22)
i=A.m(10)
u=A.p(g,A.bt(r,new A.am(B.W,g,B.a9,B.q,A.a([p,new A.C(D.bjM,A.B(A.a([o,B.aw,A.aD(!1,B.a1,!0,g,A.aJ(!1,n,!0,A.es(new A.C(Ac.VG,A.v(A.a([A.p(g,D.aiy,B.f,g,g,new A.o(j,g,A.H(B.aY.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ck,g,g,g),B.h7,D.eUx],a1),B.m,g,B.e,B.R,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc6X(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ac)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a5(B.ax,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fC(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bu,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aA,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b8,A.dq(Ae.YT,D.eSy,h.gbtG(),A.bk(B.aS,g,g,g,B.c,g,B.iM,g,new A.b6(A.m(12),B.Z),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.aa],a1)
w=h.d.d
if(w.length===0){w=f?B.dT:B.c
v=A.m(14)
u=A.H(f?B.dW:B.bY,B.r,1)
t=A.W(B.Xv,f?B.bo:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aA,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bo:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.rZ,g,g,1/0))}else B.d.v(d,new A.J(w,new C.ewo(h,new C.td(f)),A.U(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.zP,A.au(A.mr(g,f?B.bo:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.ca(g,e,A.bp(!0,A.v(A.a([new A.C(B.zV,a0,g),A.D(A.ch(A.v(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.wI,g,g,B.ak),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),g,!1,!1,g,g)},
bxa(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dT:B.c,p=A.m(16),o=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.cG,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aTc,u,u,u,u,u,u,u,5),l=B.aS.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hF:B.h1,B.aW,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aN:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcKO()
v=A.zP(d.d)
B.d.v(t,A.a([B.av,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bo:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.b7,B.R,0,B.p)}t=A.D(t,1)
k=A.a([B.aS.j(0.14),B.bS.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bzw(d.c*d.d,B.aW,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a5(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.ha,u,u,u)
w=x.p
return A.p(u,A.bt(n,new A.L3(A.B(A.a([m,A.D(new A.C(B.acU,A.B(A.a([l,B.be,t,B.ab,k,A.aF(u,u,u,u,A.W(B.cv,(r?B.bo:B.bn).j(0.75),u,u,u,20),u,u,u,new C.ew9(this,d),u,u,u,u,u,B.c9)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ai,u,B.e,B.j,0,u,u),u),B.ap),B.f,u,D.aS6,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.db,u,u,u,u)}}
C.abl.prototype={
De(d){return this.bG8(d)},
bG8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$De=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oF(d,o,!1),$async$De)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).M(null)
w=4
return A.b(A.bN(A6.zN,null,x.H),$async$De)
case 4:s=t.d
w=5
return A.b(C.fqL(!0,o,s),$async$De)
case 5:r=f
q=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Fe(r,"ngmy_project_"+A.aI(s.b,q,"_"),!1),$async$De)
case 6:p=f
w=7
return A.b(A.oE(o,!1),$async$De)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$De,v)},
Yb(d){return this.cmI(d)},
cmI(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Yb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oF(d,s,!1),$async$Yb)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).M(null)
A.ho(d,new C.apN(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oE(s,!1),$async$Yb)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yb,v)},
Oj(d){return this.ciT(d)},
ciT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).M(null)
w=3
return A.b(A.ho(d,D.aBh,!0,"NgmyWorksheetProjectScan",x.N),$async$Oj)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bzx(s),$async$Oj)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.P(D.eAc)
w=1
break}q=C.fKK(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dO(p,x.H),$async$Oj)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Oj,v)},
Yc(d){return this.cul(d)},
cul(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Yc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).M(null)
w=3
return A.b(C.bz4(),$async$Yc)
case 3:s=f
if(s==null){w=1
break}r=C.fKK(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dO(q,x.H),$async$Yc)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Yc,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=new C.td(u),s=w.d.d.length,r=u?B.dT:B.c,q=A.m(28),p=A.a([new A.ab(0,B.G,B.w.j(u?0.35:0.08),B.jQ,36)],x.V),o=x.p
return A.bp(!0,new A.C(B.ut,A.p(v,A.v(A.a([w.clj(d,t,s),new A.C(D.bja,A.v(A.a([w.b_E(t,"QR restore"),B.S,A.B(A.a([w.aVK(t,!0,B.j8,B.aY,B.aY,new C.ewq(w,d),"Show to scan","QR code"),B.aw,w.aut(t,B.iQ,B.b2,B.bA,new C.ewr(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b_E(t,"Backup files"),B.S,A.B(A.a([w.aut(t,B.hs,B.aS,B.bS,new C.ews(w,d),"Full copy","Backup file"),B.aw,w.aut(t,M.xn,B.aX,B.aL,new C.ewt(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.R,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ah,!0,!0)},
clj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eT,B.cY,B.fr],k):A.a([B.aW,B.aS,B.bS],k)
w=A.an(l,A.W(B.th,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.au(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kx,l,l,l,36),l,l,l)
u=A.m(14)
t=A.H(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.w.j(0.2),B.cG,12)],x.V)
r=this.d
s=A.p(l,C.aNi(!0,A.m(13),64,D.bqp,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aLo,l,l,l)
r=C.bzw(r.gw6(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.H(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.W,l,B.a9,B.q,A.a([w,new A.C(D.bjy,A.v(A.a([v,A.B(A.a([s,B.ex,A.D(A.v(A.a([u,B.av,t,B.P,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fD,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.W(B.cv,B.c.j(0.85),l,l,l,l),l,l,l,new C.ewp(d),l,l,l,A.ne(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aIN,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a5(B.ax,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b_E(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bo:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aVK(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.abD:B.aN
if(e)w=B.aY.j(o?0.45:0.35)
else{w=o?B.dW:B.bY
w=w.j(o?0.8:1)}w=A.H(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aY.j(0.12),B.cG,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.H(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qr,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aN:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aD(!1,B.a1,!0,r,A.aJ(!1,q,!0,A.es(new A.C(E.VH,A.v(A.a([t,B.aa,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bo:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cq,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ac),1)},
aut(d,e,f,g,h,i,j){return this.aVK(d,!1,e,f,g,h,i,j)}}
C.apN.prototype={
S(){return new C.bhy()}}
C.bhy.prototype={
Z(){this.a0()
this.ac4()},
ac4(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ac4=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bzy(p.c,p.d),$async$ac4)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.ew3(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.ew4(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ac4,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=g?B.zn:B.iH,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.W(B.ew,g?B.ag:B.aj,h,h,h,18),h,h,h,new C.ew5(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.ys],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eT,B.cY,B.fr],s):A.a([B.aW,B.aS,B.bS],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aS.j(g?0.4:0.3),B.eP,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dP,B.L,h,h)
p=C.bzw(p.gw6(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.ar,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fD,h,h,h)],u),B.m,h,B.b7,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a5(B.ax,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.W2,h,h,1/0)
t=g?D.b7D:B.c
q=A.m(24)
p=A.H(w?B.aY.j(0.4):B.aS.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.w.j(g?0.25:0.06),B.dq,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a4k,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dQC)
else{m=A.m(20)
l=A.H(B.aJ,B.r,1)
o.push(A.p(h,A.pn(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c4,h,h,h))}}o.push(B.aO)
n=w?B.aY:B.aS
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.H((w?B.aY:B.aS).j(0.35),B.r,1)
k=w?B.Lu:B.LX
k=A.W(k,w?B.aY:B.aS,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.aw,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ag:B.aj,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iM,h,h,h))
return A.ca(h,f,A.bp(!0,A.v(A.a([new A.C(A3.KG,e,h),A.D(A.ch(A.v(A.a([s,B.aO,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rY,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.ae0,h,h,B.ak),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),h,!1,!1,h,h)}}
C.apS.prototype={
S(){return new C.aC2(A.yn(B.K0,B.nb,B.tl))}}
C.aC2.prototype={
q(){this.d.q()
this.a2()},
aIu(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iG(w,d)},
c2Q(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hPt(t)
if(s!=null){this.aIu(s)
return}r=C.fZ2(t)
if(r!=null)q=A.dp(r,p,0)
else q=!1
if(q){this.aIu(B.a.i(B.a.aY(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.ey(A.a([A.aF(t,t,t,t,A.W(u.f?B.t9:A0.LA,t,t,t,t,t),t,t,t,new C.ew7(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.zn,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.f3x,t,t,t,1,t,!0),q=A.ym(u.d,B.bQ,u.gc2P()),p=A.m(28)
p=A.au(A.p(t,t,B.f,t,t,new A.o(t,t,A.H(B.aS,B.r,3),p,A.a([new A.ab(2,B.G,B.aS.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.ca(r,B.w,new A.am(B.W,t,B.aZ,B.q,A.a([q,p,A.an(32,A.p(t,D.f2p,B.f,t,t,new A.o(w,t,A.H(B.aS.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iN,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aGN.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.Mx.prototype={
S(){return new C.aC4(D.a6j,A.a([],x.D))},
bn(){return this.r.$0()},
gdS(){return this.c}}
C.aC4.prototype={
gcsn(){return J.bAF(this.e,0,new C.ewQ())},
Z(){this.a0()
$.aT.c_$.push(this)
this.uS()},
q(){$.aT.hv(this)
this.a2()},
iE(d){if(d===B.fp)this.uS()},
uS(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uS=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BQ(q.a.c).cK(0,B.jG),$async$uS)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ewM(q,p))
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
if(q.c!=null&&q.f)q.m(new C.ewN(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uS,v)},
GD(d){return this.bD1(d)},
bD0(){return this.GD(null)},
bD1(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$GD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hRr(l,d),$async$GD)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l4(l,r,q,D.cRI,new A.Q(Date.now(),0,!1))
w=4
return A.b(C.JP(t.a.c,p),$async$GD)
case 4:o=f
w=5
return A.b(t.uS(),$async$GD)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.P(D.exn)
w=1
break}n=J.aU(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.P(D.ez6)
else n.I(q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Di(m)
case 1:return A.h(u,v)}})
return A.i($async$GD,v)},
Di(d){return this.c6J(d)},
c6J(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Di=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.ho(s,new C.apT(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Di)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.JP(u.a.c,t),$async$Di)
case 5:case 4:w=6
return A.b(u.uS(),$async$Di)
case 6:return A.h(null,v)}})
return A.i($async$Di,v)},
uF(d){return this.bSs(d)},
bSs(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bz4(),$async$uF)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.ho(r,D.aBh,!0,"NgmyWorksheetProjectScan",x.N),$async$uF)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bzx(q),$async$uF)
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
r.P(A.b1(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fKK(s)
w=15
return A.b(C.JP(t.a.c,p),$async$uF)
case 15:o=f
w=16
return A.b(t.uS(),$async$uF)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.P(D.ezb)
w=1
break}r.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Di(p)
case 1:return A.h(u,v)}})
return A.i($async$uF,v)},
Me(d){return this.bBI(d)},
bBI(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Me=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.ewx(d),s,null,!0,!0,x.y),$async$Me)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oh(t.a.c,A.a([],x.D)),$async$Me)
case 6:w=7
return A.b(t.uS(),$async$Me)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(D.exs)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Me,v)},
c6W(d){var w=this.c
w.toString
A.c1(B.K,null,new C.ewG(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b0f(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jj
else w=B.c
v=A.m(16)
u=A.H(p?B.dW:B.bY,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aN:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.a1,!0,r,A.aJ(!1,q,!0,A.p(r,A.v(A.a([s,B.aa,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bo:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.us,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ac)},
YG(d,e){return this.c6K(d,e)},
c6K(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c1(B.K,null,new C.ewB(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$YG)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h6Q(r,new C.ewC(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Mg(d,e),$async$YG)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$YG,v)},
aYk(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aE
else t=h.a?B.aN:B.aA
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bo:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.a1,!0,u,A.aJ(!1,u,!0,new A.C(B.A0,A.B(A.a([s,B.be,t,A.W(B.es,w?B.bo:B.bn,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ac)},
cdq(d,e,f,g,h,i){return this.aYk(!1,d,e,f,g,h,i)},
Mg(d,e){return this.bBS(d,e)},
bBS(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mg=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kQ(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Mg)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bxO(t.a.c,d.a),$async$Mg)
case 6:w=7
return A.b(t.uS(),$async$Mg)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Mg,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=new C.td(o),m=o?B.bW:B.iH
if(q.f)o=D.aYx
else{w=q.bwq(n)
v=q.bRz(n)
u=q.gbtA()
if(o)t=B.jj
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.aa,v,B.aO,new C.Em(A.p(p,A.B(A.a([q.axS(Q.Lb,"Projects",n,D.a6j),q.axS(B.uD,"Cashier",n,D.aOB),q.axS(B.Eu,"Family Tree",n,D.fpI)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ej,0.95,u,p),B.bu],r)
w=q.d
if(w===D.a6j){w=J.aa(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aN:B.aA,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b8,new C.auy(q.gaMD(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.cds(n)],r))}else{o=q.a
if(w===D.aOB)u.push(new C.alZ(o.c,n,p))
else{w=q.r
u.push(new C.an4(o.c,o.d,o.e,o.f,new C.ewT(q),new C.ewU(q),new A.cx(w,x.b4)))}}o=A.ch(A.v(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A8.KA,p,p,B.ak)}return A.ca(p,m,A.bp(!0,o,!0,!1,B.ah,!0,!0),p,!1,!1,p,p)},
bwq(d){var w=null,v=A.m(8),u=d.a,t=A.W(O.Xa,u?B.bo:B.bn,w,w,w,16)
return A.aJ(!1,v,!0,new A.C(B.l0,A.B(A.a([t,B.br,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bo:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ewu(this),w,w,w,w,w,w,w)},
gbtA(){switch(this.d.a){case 0:return D.a5C
case 1:return D.fh_
case 2:return D.a5D}},
bRz(d){var w=null,v=A.m(15),u=A.a([new A.ab(0,B.G,B.aS.j(0.35),B.ct,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bAO,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.be,D.bnI,A.aD(!1,B.a1,!0,w,A.aJ(!1,A.m(12),!0,A.p(w,D.byn,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ewy(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ac)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.Em(A.p(w,A.v(A.a([new A.C(E.VN,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.av,A.d(A.zP(this.gcsn()),w,w,w,w,w,w,D.eP7,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.ur,B.iN,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aS,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ah,1,D.fgZ,w)},
axS(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aS:B.K,q=A.m(12),p=t?A.H(B.c.j(0.55),B.r,2):A.H(B.K,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aS.j(0.42),B.cG,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bo:B.bn
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bo:B.bn
return A.D(A.aD(!1,B.a1,!0,u,A.aJ(!1,s,!0,A.dg(u,A.B(A.a([w,B.et,new A.dm(1,B.cl,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b7,B.j,0,u,u),u,u,B.cp,new A.o(r,u,p,q,o,u,B.n),B.io,u,u,u,B.KD,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.ewP(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ac),1)},
cds(d){var w,v,u,t,s,r,q=this,p=null
if(J.cj(q.e)){w=d.a
v=w?B.dT:B.c
u=A.m(15)
t=A.p(p,D.bys,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ab(2,B.G,B.aS.j(0.5),B.eP,28)],x.V),D.bJg,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aA,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Em(A.p(p,A.v(A.a([t,B.d5,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bo:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dY,A.B(A.a([A.D(q.aO6(B.iQ,"Scan QR",new C.ewJ(q),d),1),B.aw,A.D(q.aO6(M.xn,"Upload file",new C.ewK(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bL(D.fcQ,q.gaMD(),A.bk(B.aS,p,p,p,B.c,B.fR,p,p,new A.b6(A.m(12),B.Z),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bkC,1.05,D.a5C,p)}w=J.b5(q.e,new C.ewL(q,d),x.l)
w=A.A(w,w.$ti.k("ai.E"))
return new C.Em(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a5C,p)},
aO6(d,e,f,g){var w=null,v=B.aS.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.H(B.aS.j(0.45),B.r,1)
return A.aD(!1,B.a1,!0,u,A.aJ(!1,t,!0,A.p(w,A.v(A.a([A.W(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eNz,B.L,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.acO,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ac)},
cdr(d,e){var w,v,u=null,t=e.a,s=t?B.dT:B.c,r=A.m(14),q=A.H(t?B.dW:B.bY,B.r,1),p=A.a([new A.ab(0,B.G,B.w.j(t?0.35:0.08),B.ea,10)],x.V),o=A.m(14),n=t?B.bo:B.bn
n=A.bt(B.a6X,new A.fC(1.7777777777777777,C.aNi(!0,B.fq,1/0,Q.Lb,n,d.c,1/0),u),B.ap)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aN:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.av,A.d(""+d.d.length+" budget items \xb7 "+A.zP(d.gw6()),u,u,u,u,u,u,D.eLK,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.a1,!0,u,A.aJ(!1,o,!0,A.v(A.a([n,new A.C(B.bC,A.B(A.a([v,A.aF(u,u,u,u,A.W(A9.LN,t?B.bo:B.bn,u,u,u,u),u,u,u,new C.ewH(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.ewI(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ac),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.btU.prototype={}
C.qv.prototype={
ac(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcKO(){var w,v,u,t,s=this.c
if(s===B.k.jA(s))w=B.o.u(B.k.N(s))
else{v=B.k.a9(s,2)
u=A.ae("\\.?0+$",!0,!1,!1,!1)
w=A.aI(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l4.prototype={
gw6(){return B.d.cG(this.d,0,new C.crk())},
ac(){var w=this,v=w.d,u=A.U(v).k("J<1,a1<n,@>>")
v=A.A(new A.J(v,new C.crj(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ab()],x.N,x.z)},
b77(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l4(w.a,w.b,v,u,w.e)},
b6P(d){return this.b77(d,null)},
QY(d){return this.b77(null,d)}}
C.Gi.prototype={
a3(){return"FamilyGender."+this.b}}
C.hR.prototype={
ac(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.h2G(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aAp(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hR(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ail.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.ko.prototype={
galO(){var w=this.f
return new A.a4(w,new C.bJY(),A.U(w).k("a4<1>")).gJ(0)},
ac(){var w=this,v=w.f,u=A.U(v).k("J<1,a1<n,@>>")
v=A.A(new A.J(v,new C.bJX(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ab(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hHZ(w.y)],x.N,x.z)},
xH(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.ko(w.a,v,u,t,s,r,w.r,q,p,o)},
b76(d,e){var w=null
return this.xH(w,w,d,e,w,w,w,w)},
cAT(d,e,f,g,h,i,j){return this.xH(d,e,f,g,h,i,j,null)},
aAu(d,e){var w=null
return this.xH(w,w,w,d,w,w,e,w)},
czn(d){var w=null
return this.xH(w,w,w,w,w,w,d,w)},
czL(d){var w=null
return this.xH(w,w,w,w,w,w,w,d)},
aAg(d){var w=null
return this.xH(w,w,w,w,d,w,w,w)},
cAp(d,e,f){var w=null
return this.xH(w,d,w,e,w,w,f,w)},
cza(d){var w=null
return this.xH(w,w,d,w,w,w,w,w)},
czY(d,e){var w=null
return this.xH(d,w,w,w,w,e,w,w)}}
C.crl.prototype={
a3(){return"WrapAlignment."+this.b}}
C.crm.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aE5.prototype={}
C.b5m.prototype={
by(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b5m()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aX(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b5l.prototype={
gvr(){return!0},
gEL(){return this.z.b<this.b.length},
aPG(d){switch(0){case 0:return d.a.c}},
aPn(d){switch(0){case 0:return d.a.d}},
bL6(d,e){switch(0){case 0:return new A.hB(d,e)}},
bKv(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fS(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iv(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.G3(b4)
switch(0){case 0:v=b5.b
u=new A.kl(0,v,0,1/0)
t=w===B.R8
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fP(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fS(b4,u,!0)
f=b1.aPG(g)
f.toString
e=b1.aPn(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aE5(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aE5(k,j,i))}d=s.length
switch(0){case 0:q=b5.cr(new A.hB(m,l))
a0=q.a
a1=q.b
b1.a=new A.iv(0,0,a0,a1)
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
for(q=B.d.fP(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aPG(g)
e=b1.aPn(g)
e.toString
a9=b1.bKv(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bL6(a6,a3+a9)
b0=g.a
g.a=new A.iv(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fO(d){var w,v,u,t,s,r=this
r.kO(d)
w=d.b
w.hR()
v=A.di()
u=r.a
v.dZ(u.a,u.b,0,1)
w.of(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fO(d)
w.mK(0)},
Ff(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hR(){return this.z}}
C.bs9.prototype={}
var z=a.updateTypes(["aw<~>()","S(hR)","S(ko)","~()","S(mT)","a1<n,@>(ko)","I(ko,ko)","n(hR)","ko(a1<@,@>)","S(l4)","S(tJ)","mT(a1<@,@>)","tJ()","I(l4,l4)","hR(a1<@,@>)","a1<n,@>(hR)","S(qv)","aw<~>(l4)","eI<n?>(hR)","I(hR,hR)","n?(hR)","a1<n,@>(mT)","Y6(Y)","n(n)","ab0(Y)","r(nT)","I(mT,mT)","hR(hR)","cH(bs<n,Ez>)","cH(ID)","~(hR)","I?(hR)","hR()","ak<hR>()","S(tI)","S(ID)","C(hR)","~(Gi)","S(acx)","r(Gi,n,a0)","Xv(Y)","bs<n,ak<a1<n,@>>>(n,ak<mT>)","~(I)","+count,id,name(I,n,n)(ko)","ko(ko)","Yr(Y)","Ys(Y)","S(ll)","ll()","n(ko)","a_9(Y)","X5(Y)","X4(Y)","Xt(Y)","Xx(Y)","r(qv)","abl(Y)","~(lI)","aw<~>([n?])","P(P,l4)","r(l4)","P(P,qv)","a1<n,@>(qv)","qv(a1<@,@>)","X3(Y)","R1(Y)","cl(Gh)","l4(a1<@,@>)","tI()","n(l4)","a1<n,@>(l4)","n(Q)","I(hR)","ko(a1<n,@>)","WD(Y)"])
C.fjo.prototype={
$1(d){return d.a+" "+d.b},
$S:117}
C.fjn.prototype={
bfS(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qo(s,d,B.he,E.DQ),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.R(r!=null&&A.JC(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bfS(d)},
$S:335}
C.fjp.prototype={
$1(d){return d.b},
$S:117}
C.fsn.prototype={
$1(d){var w=null
return A.ez(w,B.K,new F.NS(this.a,this.b,w),w,w,0,B.VI,B.cZ,w,w,w)},
$S:45}
C.f9F.prototype={
$1(d){return d!=null},
$S:212}
C.f9G.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:212}
C.f9L.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:163}
C.fh7.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f2(d,w,w,w,A.fZ(w,B.qT,w,w,w,w,w,w,w,B.dp,w,w,10.5,w,B.ef,w,!0,w,w,w,w),w),u=f?B.ef:B.uy
return new A.np(D.bg9,A.a7E(A.a([new A.fJ(130,w,v),new A.y6(1,B.En,A.f2(e,w,w,w,A.fZ(w,g==null?D.dSQ:g,w,w,w,w,w,w,w,B.dp,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.wm,B.l8))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1879}
C.fh6.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uS(999)
f=A.wk(A.lg(h,A.f2("Cashier",h,h,h,A.fZ(h,D.ye,h,h,h,h,h,h,h,B.dp,h,h,10,h,B.ef,h,!0,h,h,h,h),h),h,new A.km(D.dSH,h,f,B.hv,h),h,h,D.bgC,h))
w=A.wk(A.f2("Debt receipt",h,h,h,A.fZ(h,h,h,h,h,h,h,h,h,B.dp,h,h,22,h,B.ef,h,!0,h,h,h,h),h))
v=A.wk(A.f2(C.w3(new A.Q(Date.now(),0,!1),!0),h,h,h,D.a4u,h))
u=A.uS(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f2(s,h,h,h,A.fZ(h,h,h,h,h,h,h,h,h,B.dp,h,h,14,h,B.ef,h,!0,h,h,h,h),h)
r=A.f2("Person who owes",h,h,h,D.a4u,h)
q=A.uS(10)
p=x.C
u=A.lg(h,A.y1(A.a([s,new A.fJ(h,2,h),r,new A.fJ(h,10,h),A.lg(h,A.y1(A.a([A.f2("Amount owed",h,h,h,D.a4u,h),new A.fJ(h,2,h),A.f2(A.zP(t.c),h,h,h,A.fZ(h,D.ye,h,h,h,h,h,h,h,B.dp,h,h,20,h,B.ef,h,!0,h,h,h,h),h)],p),B.ql,B.l8),h,new A.km(B.ov,h,q,B.hv,h),h,h,D.bfR,1/0)],p),B.ql,B.l8),h,new A.km(E.aCn,h,u,B.hv,h),h,h,D.bhJ,1/0)
q=new A.n7(D.dSK,0.9,B.kp)
r=A.uS(12)
s=i.c
o=s.$2("Original due",C.w3(t.r,!1))
n=s.$2("Current due",C.w3(t.f,!1))
m=i.d
l=new A.n7(m,1.1,B.kp)
k=A.uS(8)
j=i.a
k=A.a([o,n,new A.fJ(h,6,h),A.lg(h,A.wk(A.f2(t.gaH1(),h,h,h,A.fZ(h,m,h,h,h,h,h,h,h,B.dp,h,h,11,h,B.ef,h,!0,0.5,h,h,h),h)),h,new A.km(h,new A.p6(l,l,l,l),k,B.hv,h),h,h,D.bgM,1/0),new A.fJ(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.ye))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.ye))
else{n=A.f2("Missed days ("+n+")",h,h,h,A.fZ(h,B.qT,h,h,h,h,h,h,h,B.dp,h,h,10.5,h,B.ef,h,!0,h,h,h,h),h)
m=A.U(o).k("J<1,QB>")
o=A.A(new A.J(o,new C.fh5(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fJ(h,4,h),n,new A.fJ(h,6,h),new C.b5l(5,5,new C.b5m(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fJ(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fJ(h,8,h),w,new A.fJ(h,3,h),v,new A.fJ(h,16,h),u,new A.fJ(h,10,h),A.lg(h,A.y1(k,B.wm,B.l8),h,new A.km(h,new A.p6(q,q,q,q),r,B.hv,h),h,h,B.acY,1/0)],p)
w=j.a
if(w!=null){v=new A.n7(B.GO,1,B.kp)
B.d.v(f,A.a([new A.fJ(h,16,h),A.f2("Debtor signature",h,h,h,A.fZ(h,B.qT,h,h,h,h,h,h,h,B.dp,h,h,10,h,B.ef,h,!0,h,h,h,h),h),new A.fJ(h,6,h),A.lg(h,new A.Gw(w,B.T7,h,h),h,new A.km(h,new A.p6(v,v,v,v),A.uS(6),B.hv,h),82,h,B.KF,1/0)],p))}f.push(new A.fJ(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f2(w,h,h,h,D.eEY,h))
f.push(new A.fJ(h,18,h))
f.push(A.wk(A.f2("NGMY.ORG",h,h,h,A.fZ(h,D.ye,h,h,h,h,h,h,h,B.dp,h,h,14,h,B.ef,h,!0,1.8,h,h,h),h)))
return f},
$S:402}
C.fh5.prototype={
$1(d){var w=null,v=new A.n7(D.GP,0.7,B.kp),u=A.uS(999)
return A.lg(w,A.f2(C.w3(d,!1),w,w,w,A.fZ(w,D.GP,w,w,w,w,w,w,w,B.dp,w,w,9.5,w,B.ef,w,!0,w,w,w,w),w),w,new A.km(w,new A.p6(v,v,v,v),u,B.hv,w),w,w,D.blX,w)},
$S:1880}
C.bYu.prototype={
$1(d){var w=null,v=B.bM.j(0.08),u=A.m(999),t=A.H(B.bM.j(0.28),B.r,1)
return A.p(w,A.d(C.w3(d,!1),w,w,w,w,w,w,D.eLe,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eC,w,w,w)},
$S:1881}
C.fsT.prototype={
$1(d){var w=null,v=A.aH(d,B.bR,x.w).w,u=A.m(26),t=A.aF(w,w,w,w,B.aiS,w,w,w,new C.fsQ(d),w,w,w,w,w,B.c9),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.ez(w,B.K,new A.d1(new A.aW(0,380,0,v.a.b*0.9),A.aD(!1,B.a1,!0,u,new A.C(B.Vy,A.v(A.a([new A.bG(B.a7,w,w,t,w),new A.dm(1,B.cl,A.ch(A.v(A.a([new A.er(new C.aVv(r,w),s),B.S,A.B(A.a([A.D(A.eu(B.xy,D.f9m,new C.fsR(s,r,d),A.db(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f1,w,new A.b6(A.m(14),B.Z),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.D(A.dq(B.YJ,D.f6g,new C.fsS(r,d),A.bk(B.aW,w,w,w,B.c,w,B.f1,w,new A.b6(A.m(14),B.Z),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.ak),w)],p),B.m,w,B.e,B.R,0,B.p),w),B.f,B.aA,0,w,w,w,w,w,B.ac),w),w,w,0,Ad.VW,B.cZ,w,w,w)},
$S:45}
C.fsQ.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.fsR.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aT.ag$.x.h(0,t.a)
m=m==null?null:m.gb6()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lQ(2.5),$async$$0)
case 4:w=3
return A.b(e.hf(B.fO),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.f6(B.dD.gaN(s))
m=t.b
q=B.a.i(m.b)
p=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aI(q,p,"_")
if(o.length>32)o=B.a.an(o,0,32)
w=5
return A.b(A.rn(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fsS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fnI(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.P(A.b1(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fsL.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.ez(w,B.aA,A.v(A.a([new A.C(D.bhx,A.B(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.n2,w,w,w),1),A.aF(w,w,w,w,B.l6,w,w,w,new C.fsJ(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dm(1,B.cl,new A.C(B.is,A.bt(A.m(14),A.fG(t,B.A,w,w,B.cn,B.ds,!1,w,!1,w,w),B.ap),w),w),new A.C(B.Kj,new A.a3(1/0,w,A.dq(B.om,D.aLO,new C.fsK(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b6(A.m(14),B.Z),w,w,w)),w),w)],u),B.m,w,B.e,B.R,0,B.p),w,w,w,B.Ku,B.cZ,w,new A.b6(v,B.Z),w)},
$S:45}
C.fsJ.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.fsK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rn(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fsX.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.ez(w,B.aA,new A.C(D.bhF,A.v(A.a([A.B(A.a([D.bmW,A.aF(w,w,w,w,B.l6,w,w,w,new C.fsV(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.er(A.bt(A.m(14),A.p(w,A.b2(w,w,w,new C.b7v(s.ax,w),B.at),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.aa,new A.a3(1/0,w,A.dq(B.om,D.aLO,new C.fsW(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b6(A.m(14),B.Z),w,w,w)),w)],u),B.m,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b6(v,B.Z),w)},
$S:45}
C.fsV.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.fsW.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aT.ag$.x.h(0,t.a)
n=n==null?null:n.gb6()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lQ(2.5),$async$$0)
case 4:w=3
return A.b(e.hf(B.fO),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aI(r,q,"_")
if(p.length>32)p=B.a.an(p,0,32)
r=J.f6(B.dD.gaN(s))
w=5
return A.b(A.rn(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fcr.prototype={
$1(d){return d.a===this.a},
$S:239}
C.dzc.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dyY.prototype={
bf5(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dT:B.c
s=u.a
w=2
return A.b(A.c1(t,null,new C.dz0(s,q,e),p,!0,!0,!1,B.H3,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dz1(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bf5(d,e)},
$S:1882}
C.dz0.prototype={
$1(d){var w,v=null,u=this.c===B.v9,t=u?D.cXb:D.cTJ
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aN:B.aA,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bp(!0,new A.C(L.adv,A.v(A.a([u,B.av,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bo:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.aa,A.i8(!0,v,v,B.z,I.aJ4,new C.dz_(this.a,w,t,d),t.length,v,B.dN,B.ak,!0)],x.p),B.ai,v,B.e,B.R,0,B.p),v),!0,!1,B.ah,!0,!0)},
$S:34}
C.dz_.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aN
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bo:B.bn).j(0.16)
u=A.H(u,B.r,q?1.6:1)
return A.aJ(!1,p,!0,A.p(B.A,C.aVu(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dyZ(t.d,r),s,s,s,s,s,s,s)},
$S:190}
C.dyZ.prototype={
$0(){A.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.dz1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dyW.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:95}
C.dyX.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cG(B.cp,e,v)
return new A.cU(e,!1,A.ic(B.A,A.au(A.aD(!1,B.a1,!0,v,new A.e6(new C.dyV(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ac),v,v,v),v,new A.bd(t,new A.bl(0.96,1,u),u.k("bd<bF.T>"))),v)},
$S:30}
C.dyV.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.bR,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dT:B.c,f=A.m(14),e=A.H((h?B.bo:B.bn).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aA,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aJ(!1,v,!0,new A.C(B.ej,A.W(B.cv,i.a.d.a?B.bo:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dyG(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aN:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aOD("Name")
r=l.a
q=r.d==null?k:new C.dyH(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.lU
n=A.H(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aK(k,B.U,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b7_(new A.C(B.ho,A.aJ(!1,p,!0,A.p(B.A,C.aVu(m==null?"\ud83d\udc64":A.fhW(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ck,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.af,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.kj,k,B.a4b,k,k)
v=A.a([v,B.aa,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bo:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.B(A.a([A.D(i.aPd("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dyI(r,a0),r.d===B.v9),1),B.ab,A.D(i.aPd("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dyN(r,a0),r.d===B.a18),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bG(B.a3,k,k,A.h8(D.bA5,D.f7V,new C.dyO(r,l.e,a0),A.fr(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c9)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aN:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tL(A.ae("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aOE("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.af,k,k,s,k,k,B.dR,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aN
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.H((t?B.bo:B.bn).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bo:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.w3(r.a,!1)
v.push(A.aD(!1,B.a1,!0,q,A.aJ(!1,p,!0,A.p(k,A.B(A.a([A.D(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bx_],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bm,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dyP(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ac))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bo:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aN:B.aA,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aOD("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.af,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.aa)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aA,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bo:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aWJ(r.b.length!==0,B.m2,new C.dyQ(r,i,a0),new C.dyR(r,a0),"Upload from gallery","ID photo"))
v.push(i.aWJ(r.c.length!==0,D.bqn,new C.dyS(r,i,d,a0),new C.dyT(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ab.a5B("Signature (optional)",t,new C.dyU(a0),new C.dyJ(a0,t),new C.dyK(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bo:B.bn
s=(i?B.bo:B.bn).j(0.28)
s=A.D(A.dV(E.aLH,new C.dyL(d),A.db(k,k,k,k,k,k,k,k,k,t,k,k,B.wx,k,new A.b6(A.m(10),B.Z),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.wx,k,new A.b6(A.m(10),B.Z),k,k,k)
v.push(A.B(A.a([s,B.ab,A.D(A.bL(A.d(h?"Save":"Update",k,k,k,k,k,k,B.tS,k,k,k),new C.dyM(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.ch(A.v(v,B.ai,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ak),B.f,k,new A.aW(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uv,B.iN,k,k,360)},
$S:167}
C.dyG.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dyH.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dyI.prototype={
$0(){return this.b.$1(new C.dyF(this.a))},
$S:0}
C.dyF.prototype={
$0(){var w=this.a
w.d=B.v9
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dyN.prototype={
$0(){return this.b.$1(new C.dyE(this.a))},
$S:0}
C.dyE.prototype={
$0(){var w=this.a
w.d=B.a18
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dyO.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dyP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.w7(null,u.b,A.bW(2020,1,1,0,0,0,0,0),null,s,A.bW(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dyD(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dyD.prototype={
$0(){var w=this.b
return this.a.a=A.bW(w.gcd(),w.gca(),w.gcq(),0,0,0,0,0)},
$S:0}
C.dyQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.NL(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dyC(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dyC.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dyR.prototype={
$0(){return this.b.$1(new C.dyB(this.a))},
$S:0}
C.dyB.prototype={
$0(){return this.a.b=""},
$S:0}
C.dyS.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dT:B.c
w=3
return A.b(A.c1(q,null,new C.dyz(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.NL(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dyA(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dyz.prototype={
$1(d){var w=null
return A.bp(!0,A.v(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.aip,w,w,w,w,new C.dyt(d),!1,w,w,w,w,w,w,w,D.f_4,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.ain,w,w,w,w,new C.dyu(d),!1,w,w,w,w,w,w,w,D.f5n,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ah,!0,!0)},
$S:34}
C.dyt.prototype={
$0(){A.a8(this.a,!1).M("camera")
return null},
$S:0}
C.dyu.prototype={
$0(){A.a8(this.a,!1).M("gallery")
return null},
$S:0}
C.dyA.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dyT.prototype={
$0(){return this.b.$1(new C.dyy(this.a))},
$S:0}
C.dyy.prototype={
$0(){return this.a.c=""},
$S:0}
C.dyU.prototype={
$0(){return this.a.$1(new C.dyx())},
$S:0}
C.dyx.prototype={
$0(){},
$S:0}
C.dyJ.prototype={
$0(){return this.a.$1(new C.dyw(this.b))},
$S:0}
C.dyw.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dyK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.afp(u.a,null,null,new C.dyv(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dyv.prototype={
$4(d,e,f,g){this.a.$1(new C.dys(this.b,d))},
$S:451}
C.dys.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.v(w,this.b)},
$S:0}
C.dyL.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dyM.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.P(D.eB2)
return}if(w.a.d==null){w.c.I(x.q).f.P(D.exZ)
return}A.a8(w.c,!1).M(!0)},
$S:0}
C.dzf.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:95}
C.dzg.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dT:B.c,n=A.m(14),m=A.H((p?B.bo:B.bn).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aN:B.aA,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zP(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bo:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.y6(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.y6(r).length>0?B.bM:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bo:B.bn
t=(q?B.bo:B.bn).j(0.28)
s=x.p
return new A.cU(e,!1,A.au(A.aD(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.ay,A.B(A.a([A.D(A.dV(B.n4,new C.dzd(d),A.db(r,r,r,r,r,r,r,r,r,w,r,r,B.jH,r,new A.b6(A.m(10),B.Z),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.D(A.bL(D.f5M,new C.dze(d),A.bk(B.cY,r,r,r,B.c,r,B.jH,r,new A.b6(A.m(10),B.Z),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ai,r,B.e,B.R,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.A4,E.VN,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ac),r,r,r),r)},
$S:30}
C.dzd.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dze.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dz9.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dza(r),p=r.a.d.a,o=p?B.dT:B.c,n=A.m(14),m=A.H((p?B.bo:B.bn).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aN:B.aA,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zP(l.c),s,s,s,s,s,s,D.eMH,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jn((r.a.d.a?B.bo:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.Xv,"View receipt",new C.dz2(r,d,l))
u=l.x!=null
t=u?B.uS:B.ph
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bhC,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dz3(r,d,l)),q.$3$icon$label$onTap(B.Al,"Edit",new C.dz4(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.m2,"View / download ID",new C.dz5(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bqm,"View / download selfie",new C.dz6(r,d,l)))
if(l.gaC3())p.push(q.$3$icon$label$onTap(A2.YA,"View / download signature",new C.dz7(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bM,B.e8,"Delete",new C.dz8(r,d,l)))
p.push(B.av)
return A.bp(!0,new A.C(B.ur,A.p(s,A.v(p,B.m,s,B.e,B.R,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ah,!0,!0)},
$S:34}
C.dza.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aN:B.aA
else w=d
return A.aJ(!1,v,!0,new A.C(B.eM,A.B(A.a([A.W(e,w,v,v,v,20),B.be,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1883}
C.dz2.prototype={
$0(){A.a8(this.b,!1).M(null)
var w=this.a.c
w.toString
C.fsP(w,this.c)},
$S:0}
C.dz3.prototype={
$0(){A.a8(this.b,!1).M(null)
this.a.Qk(this.c)},
$S:0}
C.dz4.prototype={
$0(){A.a8(this.b,!1).M(null)
this.a.BZ(this.c)},
$S:0}
C.dz5.prototype={
$0(){var w,v,u
A.a8(this.b,!1).M(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzU(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dz6.prototype={
$0(){var w,v,u
A.a8(this.b,!1).M(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzU(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dz7.prototype={
$0(){A.a8(this.b,!1).M(null)
var w=this.a.c
w.toString
C.fsU(w,this.c)},
$S:0}
C.dz8.prototype={
$0(){A.a8(this.b,!1).M(null)
this.a.Mr(0,this.c)},
$S:0}
C.dzh.prototype={
$1(d){return d.x==null},
$S:239}
C.dzi.prototype={
$1(d){return d.x!=null},
$S:239}
C.dzj.prototype={
$2(d,e){return d+e.c},
$S:1884}
C.dzk.prototype={
$0(){return this.a.bu2()},
$S:0}
C.dzb.prototype={
$0(){return this.a.ach(this.b)},
$S:0}
C.fcP.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fcQ.prototype={
$0(){return B.d.gL(D.ZM)},
$S:z+68}
C.d_F.prototype={
$0(){var w=this.a
return w.m(new C.d_D(w,this.b))},
$S:0}
C.d_D.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d_E.prototype={
$0(){},
$S:0}
C.d_G.prototype={
$0(){var w=this.a.gbSg()
A.a8(this.b,!1).M(w)
return null},
$S:0}
C.feG.prototype={
$1(d){return C.fOM(A.a_(d,x.N,x.z))},
$S:z+11}
C.feH.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.feI.prototype={
$2(d,e){var w=A.c5(d.a,null),v=A.c5(e.a,null)
if(w!=null&&v!=null)return B.o.aJ(w,v)
return d.d.aJ(0,e.d)},
$S:z+26}
C.frw.prototype={
$1(d){return d.ac()},
$S:z+21}
C.fzc.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fci.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bJT.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eT(e,v)?v:null},
$S:1885}
C.fs1.prototype={
$1(d){var w=this
return new C.Xv(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d0k.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d0j(w,d))},
$S:z+66}
C.d0j.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d08.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.ct(u)?v.r>=J.aa(v.d):w)v.r=J.aa(v.d)-1},
$S:0}
C.d05.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d_H.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d_I.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d09.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d_Q.prototype={
$1(d){var w=null,v=A.M(d).ax.a===B.H,u=v?B.dT:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.en(A.a([A.bJ(!1,B.dd,w,w,!0,w,w,new C.d_O(d),w,w),A.bL(B.vu,new C.d_P(d),A.bk(B.mv,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.d_O.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.d_P.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.d_R.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d06.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d07.prototype={
$0(){return B.d.gL(D.xI)},
$S:z+12}
C.d_M.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxn(0),t=J.aa(w.d)
w=J.aa(w.d)===1?"page":"pages"
return new C.R1(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d_N.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_S.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.X3(v,u,J.aa(w.d),null)},
$S:z+64}
C.d_T.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d0i.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aG(s,new C.WM(r.y,r.gxn(0),J.aa(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d0g(r),s,s,s,s,s,s,!1,B.ad)
else{w=e-1
v=J.q(r.d,w)
J.aa(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b6U(v,e,w,u,t,r.gbJE(),C.h2F(r.y.Q),r.gxn(0),s)
w=t}return A.c4(q,new C.d0h(r,e),new A.C(B.VP,w,s))},
$S:1886}
C.d0h.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcW(t).ay){t=this.b
u=x.cy.a(B.d.gcW(u.f.f)).gtW(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.di()
t=u.a
t.$flags&2&&A.ah(t)
t[11]=0.0013
u.fm(v*3.141592653589793*0.5)
return A.fo(B.a3,A.d9(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.d0g.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aD7(B.p4,B.ip)},
$S:0}
C.d02.prototype={
$0(){var w=this.a
return w.m(new C.d01(w))},
$S:0}
C.d01.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d03.prototype={
$0(){var w=this.a.c
w.toString
A.a8(w,!1).M(null)
return null},
$S:0}
C.d_J.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jA.j(0.5),r=x.p,q=A.a([D.eYM,B.aa],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cj(p.d)?"Write this book":"Write a new book"
q.push(p.WW(d,B.dS,w,J.cj(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.WW(d,I.ago,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.ct(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cN,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.k1.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cN,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.k1.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.WW(d,Z.ahs,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.WW(d,B.pn,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.WW(d,B.pn,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.ez(u,E.zw,A.bp(!0,new A.C(A1.zZ,A.v(q,B.F,u,B.e,B.R,0,B.p),u),!0,!1,B.ah,!0,!0),u,u,u,D.adV,B.cZ,u,new A.b6(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:45}
C.d04.prototype={
$0(){A.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.d_W.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.ct(w.d)
return new C.Xx(v,J.ct(w.d),w.r+1,null)},
$S:z+54}
C.d_X.prototype={
$1(d){var w=null
return A.nZ(!1,A.en(w,w,w,E.zw,new A.k4(this.a,new C.d_V(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:270}
C.d_V.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3S,B.nN,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:731}
C.d_Y.prototype={
$0(){return this.a.a=!1},
$S:48}
C.d_Z.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:196}
C.d0_.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d00.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zY(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.PT(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d_U(s,t))
w=4
return A.b(s.ku(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_U.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d0b.prototype={
$1(d){var w=null
return A.nZ(!1,A.en(w,w,w,E.zw,new A.k4(this.a,new C.d0a(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:270}
C.d0a.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3S,B.nN,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:731}
C.d0c.prototype={
$0(){return this.a.a=!1},
$S:48}
C.d0d.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:196}
C.d0e.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:196}
C.d0f.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.zY(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.ku(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_K.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bcl(B.p4,T.K9)},
$S:0}
C.d_L.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aD7(B.p4,T.K9)},
$S:0}
C.d1L.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.d1M.prototype={
$1(d){var w=this.a
return w.m(new C.d1K(w))},
$S:8}
C.d1K.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d1N.prototype={
$1(d){var w=this.a
return w.m(new C.d1J(w))},
$S:8}
C.d1J.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d1O.prototype={
$1(d){var w=this.a
return w.m(new C.d1I(w))},
$S:8}
C.d1I.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d1P.prototype={
$0(){var w=this.a
return w.m(new C.d1H(w,this.b))},
$S:0}
C.d1H.prototype={
$0(){var w=this.b
this.a.d.saT(0,w)
return w},
$S:0}
C.d1Q.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga_u()
A.a8(this.b,!1).M(new A.blh(w,v))},
$S:0}
C.d0z.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d0y.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Xt(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d0D.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d0C.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b2L(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.ht,v,v,v)
return A.en(A.a([A.bJ(!1,B.dd,v,v,!0,v,v,new C.d0A(d),v,v),A.bL(B.vu,new C.d0B(d),A.bk(B.mv,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.zw,w,v,v,v,v,D.eXI,v)},
$S:20}
C.d0A.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.d0B.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.d0E.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.d0F.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a3(s,t,w[u],t))
return A.ch(A.c9(B.bI,r,B.bx,18,14),B.q,t,B.z,t,D.biy,t,t,B.ak)},
$S:295}
C.d0x.prototype={
$0(){return this.a.On(0,this.b)},
$S:0}
C.d0w.prototype={
$0(){return this.a.NS(0,this.b)},
$S:0}
C.cA5.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cA6.prototype={
$0(){return B.d.gL(D.xI)},
$S:z+12}
C.cA7.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bX(0,new A.C(d,A.bV(w,new A.o(w,w,A.H(this.a.j(f),B.r,g),v,w,w,B.n),B.bb),w),0,0,0)},
$S:1888}
C.cTx.prototype={
$1(d){return this.a.m(new C.cTw(this.b,this.c))},
$S:8}
C.cTw.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cTW.prototype={
$1(d){return this.a.m(new C.cTJ())},
$S:2}
C.cTJ.prototype={
$0(){},
$S:0}
C.cTX.prototype={
$1(d){return this.a.m(new C.cTI())},
$S:2}
C.cTI.prototype={
$0(){},
$S:0}
C.cTY.prototype={
$0(){var w=this.a
return w.m(new C.cTH(w,this.b))},
$S:0}
C.cTH.prototype={
$0(){var w=this.a
return w.d=w.gnu().Er(this.b.a)},
$S:0}
C.cTZ.prototype={
$0(){var w=this.a
return w.m(new C.cTG(w,this.b))},
$S:0}
C.cTG.prototype={
$0(){var w=this.a
return w.d=w.gnu().cyH(this.b)},
$S:0}
C.cU_.prototype={
$1(d){return this.a.m(new C.cTF())},
$S:2}
C.cTF.prototype={
$0(){},
$S:0}
C.cU0.prototype={
$0(){var w=this.a
return w.m(new C.cTE(w,this.b))},
$S:0}
C.cTE.prototype={
$0(){var w=this.a
return w.d=w.gnu().cyM(this.b.a)},
$S:0}
C.cU1.prototype={
$1(d){var w=this.a
return w.m(new C.cTR(w,d))},
$S:6}
C.cTR.prototype={
$0(){var w=this.a
return w.d=w.gnu().czG(this.b)},
$S:0}
C.cU2.prototype={
$1(d){var w=this.a
return w.d=w.gnu().aAj(d)},
$S:2}
C.cU3.prototype={
$1(d){var w=this.a
return w.d=w.gnu().cyP(d)},
$S:2}
C.cU5.prototype={
$1(d){var w=this.a
return w.d=w.gnu().czE(d)},
$S:2}
C.cU6.prototype={
$1(d){var w=this.a
return w.m(new C.cTQ(w,d))},
$S:8}
C.cTQ.prototype={
$0(){var w=this.a
return w.d=w.gnu().czv(this.b)},
$S:0}
C.cU7.prototype={
$0(){var w=this.a,v=w.gnu(),u=B.a.i(w.gxn(0).a.a),t=B.a.i(w.gaxH().a.a)
u=v.b7g(B.a.i(w.ganQ().a.a),t,u)
A.a8(this.b,!1).M(u)
return null},
$S:0}
C.dMx.prototype={
$0(){var w=this.a
w.v3()
w.a.bn()
w.a.p6()},
$S:0}
C.dMw.prototype={
$0(){var w=this.a
w.v3()
w.a.bn()
w.a.p6()},
$S:0}
C.dMz.prototype={
$0(){var w=this,v=w.b
if(J.ct(v)||J.cj(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dMA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dMB.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dMv.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dMy.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dMD.prototype={
$0(){this.a.MX()
return null},
$S:0}
C.dMC.prototype={
$0(){return this.a.Dj(this.b)},
$S:0}
C.dLY.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bJ(!1,B.dd,w,w,!0,w,w,new C.dLW(d),w,w),r=A.bk(B.bS,w,w,w,w,w,w,w,w,w,w,w)
return A.en(A.a([s,A.bL(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dLX(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dLW.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dLX.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dLZ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cza(this.b)},
$S:0}
C.dLT.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aOT(w.b,w.c,w.d)},
$S:9}
C.dLr.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dLs.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dLG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Fh(t.a.c),$async$$0)
case 2:s=r.qK(q.dE(e,new C.dLE(t)))
if(s!=null&&t.c!=null)t.m(new C.dLF(t,s))
t.a.bn()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLE.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dLF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dLH.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dLI.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dLS.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.czY(C.h2P(w),w)},
$S:0}
C.dLQ.prototype={
$1(d){return new A.e6(new C.dLP(this.a,this.b),null)},
$S:21}
C.dLP.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dT:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bo:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ai3,v,v,v,p>0?new C.dLL(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aO,A.B(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.aiC,v,v,v,new C.dLM(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.R,0,B.p)
return A.en(A.a([A.bJ(!1,B.dd,v,v,!0,v,v,new C.dLN(d),v,v),A.bL(B.oH,new C.dLO(d),A.bk(B.bS,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:164}
C.dLL.prototype={
$0(){return this.b.$1(new C.dLK(this.a))},
$S:0}
C.dLK.prototype={
$0(){return--this.a.a},
$S:0}
C.dLM.prototype={
$0(){return this.b.$1(new C.dLJ(this.a))},
$S:0}
C.dLJ.prototype={
$0(){return++this.a.a},
$S:0}
C.dLN.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dLO.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dLR.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.czL(this.a.a)
w.r.a7(0)},
$S:0}
C.dLf.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.afv(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fXI(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dLg.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.A(u.f,x.P)
w.push(this.b)
v.d=u.aAg(w)},
$S:0}
C.dM0.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ab0(this.b,w,this.c,null)},
$S:z+24}
C.dLV.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dT:B.c,t=A.m(20),s=A.W(B.l3,B.aS,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.aa,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.R,0,B.p)
return A.en(A.a([A.bL(D.f6O,new C.dLU(d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],o),B.b7,w,u,v,w,s,w,new A.b6(t,B.Z),r,w)},
$S:20}
C.dLU.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dLh.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dLi.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dLj.prototype={
$1(d){return d.a},
$S:z+7}
C.dLk.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hR(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aAg(w)},
$S:0}
C.dLo.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.afv(q)
w=A.U(q).k("a4<1>")
q=A.A(new A.a4(q,new C.dLm(r),w),w.k("G.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fXI(v.e,null,r,v.f,v.r,new C.dLn(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dLn.prototype={
$0(){return this.a.a7y(this.b)},
$S:0}
C.dLm.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dLp.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("J<1,hR>")
w=A.A(new A.J(w,new C.dLl(this.b),v),v.k("ai.E"))
u.d=t.aAg(w)},
$S:0}
C.dLl.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dM_.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dLB.prototype={
$1(d){return d.length!==0},
$S:3}
C.dLC.prototype={
$1(d){var w=this
return new A.e6(new C.dLA(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dLA.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dT:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bo:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.aa],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bo:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dLw(u,e,o),A.U(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aK(v,B.U,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bn(v,new A.b3(4,A.m(12),B.df),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.af,v,v,v,v,v,B.lI,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.ai,v,B.e,B.R,0,B.p)
t=w.a
return A.en(A.a([A.bJ(!1,B.dd,v,v,!0,v,v,new C.dLx(d),v,v),A.bL(B.HQ,new C.dLy(t,u,o,e),A.bk(B.bS,v,v,v,v,v,v,v,v,v,v,v)),A.bL(D.eVX,new C.dLz(t,u,o,d),A.bk(B.aS,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a3(360,v,p,v),v,v,v,v,r,v)},
$S:164}
C.dLw.prototype={
$1(d){var w=null
return A.dL(!1,B.ah,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aN:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bDy,w,w,w,new C.dLv(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1889}
C.dLv.prototype={
$0(){return this.a.$1(new C.dLt(this.b,this.c))},
$S:0}
C.dLt.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dLx.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dLy.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dLu(w.c,u))
v.bJ(0,B.c2)}},
$S:0}
C.dLu.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dLz.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a8(w.d,!1).M(!0)},
$S:0}
C.dLD.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cAp(this.b,D.t_,C.Ff(v,w.a.c))},
$S:0}
C.dM7.prototype={
$1(d){return d.as},
$S:z+1}
C.dM8.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iG(this.b,w)},
$S:0}
C.dM9.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hR8(v)
return w.TV(v==null?null:v.a)},
$S:0}
C.dMa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.htV(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gci(k)){k=A.aN(1/0,e.a,e.b)
s=A.aN(1/0,e.c,e.d)
l.cj2(new A.as(u,t),v.gbd8(),new A.as(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cAu:D.cz2
q=A.H(s?B.dw:D.b2t,B.r,1)
p=A.m(22)
o=A.bX(0,A.b2(m,m,m,new C.bae(s,m),B.at),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bt(p,new A.am(B.W,m,B.a9,B.q,A.a([o,A.bX(0,A.tU(new A.N(n,n,n,n),new A.a3(u,t,new C.bb6(l.d,v,l.f,w,new C.dM3(l),l.gc3u(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.bsg(s,new C.dM4(l,e),new C.dM5(l,e),new C.dM6(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a5(B.b1,B.b3,B.x,r,m,m),B.n),m,m,m,P.ad1,m,m,m,m)},
$S:211}
C.dM3.prototype={
$1(d){var w=this.a
w.m(new C.dM1(w,d))},
$S:2}
C.dM1.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.K(0,v)},
$S:0}
C.dM4.prototype={
$0(){var w=this.b
return this.a.b4Z(1.25,new A.as(A.aN(1/0,w.a,w.b),A.aN(1/0,w.c,w.d)))},
$S:0}
C.dM5.prototype={
$0(){var w=this.b
return this.a.b4Z(0.8,new A.as(A.aN(1/0,w.a,w.b),A.aN(1/0,w.c,w.d)))},
$S:0}
C.dM6.prototype={
$0(){var w=this,v=w.b
return w.a.aOT(new A.as(A.aN(1/0,v.a,v.b),A.aN(1/0,v.c,v.d)),new A.as(w.c,w.d),w.e.gbd8())},
$S:0}
C.dMb.prototype={
$0(){var w=this.a
return w.m(new C.dM2(w))},
$S:0}
C.dM2.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dLq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fE(new A.fx(s.c)),$async$$0)
case 2:t.wR("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d0J.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.beN(u,C.h6T(v.c,u),new C.d0I(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d0I.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d0K.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bi4(d.d,d.c,u.f.t(0,d.a),new C.d0H(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d0H.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fcT.prototype={
$1(d){var w,v=d.e
if(this.a.ak(0,v))return v
v=this.b
w=A.U(v)
return A.qK(new A.cV(new A.a4(v,new C.fcU(d),w.k("a4<1>")),new C.fcV(),w.k("cV<1,n>")))},
$S:z+20}
C.fcU.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fcV.prototype={
$1(d){return d.a},
$S:z+7}
C.fcR.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fcS.prototype={
$1(d){return d.b},
$S:z+7}
C.fcY.prototype={
$1(d){var w,v=d.e
if(this.a.ak(0,v))return v
v=this.b
w=A.U(v)
return A.qK(new A.cV(new A.a4(v,new C.fcZ(d),w.k("a4<1>")),new C.fd_(),w.k("cV<1,n>")))},
$S:z+20}
C.fcZ.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fd_.prototype={
$1(d){return d.a},
$S:z+7}
C.fcW.prototype={
$1(d){var w,v=A.eP([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ak(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fcX.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d0M.prototype={
$0(){return this.a},
$S:z+32}
C.d12.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ak(0,d)},
$S:243}
C.d0V.prototype={
$2(d,e){var w=this.a.ce(0,d,new C.d0W()),v=J.a7(w)
if(!v.t(w,e))v.K(w,e)},
$S:116}
C.d0W.prototype={
$0(){return A.a([],x.s)},
$S:732}
C.d0U.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eT(w,e)
return w===!0},
$S:285}
C.d0N.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d0T.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d0S.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aU(v==null?D.B3:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aU(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.t(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aU(t==null?D.B3:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1891}
C.d0O.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d0X.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.K(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aU(u==null?B.U:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gT(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.K(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aU(t==null?D.B3:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.ba(w,new C.d0Y(r)))w.push(r)}}B.d.bo(w,new C.d0Z(a8))
B.d.b_(w,new C.d1_())
q=C.htU(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.edN],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.K)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
a8=x.F
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.K)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gL(k)+B.d.gaj(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bl1(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1892}
C.d0Y.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d0Z.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d1_.prototype={
$2(d,e){return B.o.aJ(d.Q,e.Q)},
$S:z+19}
C.d10.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bg(v,A.a2(v).k("bg<2>")).cG(0,0,B.q0)+88-w.gL(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:652}
C.d11.prototype={
$1(d){return 16+d*156},
$S:242}
C.d0L.prototype={
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
t.n(0,d,new C.Ez(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Ez(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Ez(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aU(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.ID(d,new A.u(e+t,w),s,s.length))}},
$S:196}
C.d0P.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aG5(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:116}
C.d0Q.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d0R.prototype={
$2(d,e){return B.k.aJ(d.a,e.a)},
$S:733}
C.d13.prototype={
$2(d,e){return B.k.aJ(d.a,e.a)},
$S:733}
C.d14.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:463}
C.d15.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:177}
C.d16.prototype={
$1(d){return d>=0.5},
$S:126}
C.eXx.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hs(A.aJ(!1,v,!0,new A.a3(38,38,A.W(d,this.a.c?B.c:B.cz,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1894}
C.ezc.prototype={
$1(d){var w=null,v=A.m(8),u=B.bS.j(0.12),t=A.m(8)
return new A.C(B.ob,A.aJ(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eIA,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.KE,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ezb(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.ezb.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dgk.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dgj.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.n1,B.L,w,w)
return A.en(A.a([A.bJ(!1,B.dd,w,w,!0,w,w,new C.dgh(d),w,w),A.bJ(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lS,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dgi(d),w,w)],x.p),B.b7,B.DY,w,u,D.bjO,w,D.blI,new A.b6(v,B.Z),w,w)},
$S:20}
C.dgh.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dgi.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dgt.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dgu.prototype={
$1(d){var w=this.a
return w.m(new C.dgs(w,d))},
$S:z+37}
C.dgs.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgv.prototype={
$1(d){var w=null
return A.pS(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dgy.prototype={
$1(d){var w=this.a
return w.m(new C.dgr(w,d))},
$S:31}
C.dgr.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dgx.prototype={
$1(d){var w=null
return A.pS(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dgz.prototype={
$1(d){var w=this.a
return w.m(new C.dgq(w,d))},
$S:31}
C.dgq.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dgA.prototype={
$0(){var w=this.a
return w.m(new C.dgp(w))},
$S:0}
C.dgp.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dgB.prototype={
$0(){var w=this.a
return w.m(new C.dgo(w))},
$S:0}
C.dgo.prototype={
$0(){return++this.a.at},
$S:0}
C.dgC.prototype={
$0(){var w=this.a
return w.m(new C.dgn(w))},
$S:0}
C.dgn.prototype={
$0(){return--this.a.ax},
$S:0}
C.dgD.prototype={
$0(){var w=this.a
return w.m(new C.dgm(w))},
$S:0}
C.dgm.prototype={
$0(){return++this.a.ax},
$S:0}
C.dgE.prototype={
$1(d){var w=this.a
return w.m(new C.dgl(w,d))},
$S:8}
C.dgl.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dgw.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dgF.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bS.j(0.18)
else w=q.c.a?B.dT:B.c
v=A.m(12)
if(p)u=B.bS
else u=(q.c.a?B.dW:B.bY).j(0.85)
u=A.H(u,B.r,p?1.5:1)
if(p)t=B.bS
else t=q.c.a?B.bo:B.bn
t=A.W(f,t,r,r,r,18)
if(p)s=B.bS
else s=q.c.a?B.bo:B.bn
return A.D(A.aD(!1,B.a1,!0,r,A.aJ(!1,o,!0,A.dg(r,A.v(A.a([t,B.av,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b9,new A.o(w,r,u,v,r,r,B.n),B.eK,r,r,r,B.jH,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dgG(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ac),1)},
$S:z+39}
C.dgG.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dgP.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.c40.prototype={
$2(d,e){return new A.bs(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:88}
C.c47.prototype={
$1(d){return d.ac()},
$S:z+5}
C.c48.prototype={
$2(d,e){var w=J.b5(e,new C.c46(),x.a)
w=A.A(w,w.$ti.k("ai.E"))
return new A.bs(d,w,x.d2)},
$S:z+41}
C.c46.prototype={
$1(d){return d.ac()},
$S:z+21}
C.c42.prototype={
$1(d){return C.aim(A.a_(d,x.N,x.z))},
$S:z+8}
C.c43.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c44.prototype={
$1(d){return C.fOM(A.a_(d,x.N,x.z))},
$S:z+11}
C.c45.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c4c.prototype={
$1(d){return new A.aDb(d.f.length,d.a,d.b)},
$S:z+43}
C.c4d.prototype={
$2(d,e){return B.a.aJ(d.c,e.c)},
$S:564}
C.c49.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c4a.prototype={
$1(d){return d.czn(C.Ff(d,this.a))},
$S:z+44}
C.dMk.prototype={
$1(d){return C.tq(d,this.a.a.c)},
$S:z+2}
C.dMl.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dMp.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dMq.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dMh.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWY(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xo("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oE(r.c,r.e),$async$$0)
case 4:s.xo(p)
w=5
return A.b(s.I9(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMi.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWY(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xo("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oE(r.c,r.e),$async$$0)
case 4:s.xo(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMj.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Tm(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xo("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xo("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xo("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.I9(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a6(j)
o=r.a
if(o.c==null){w=1
break}o.xo(B.a.e1(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dMo.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWX(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xo("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a8(r,!1).cp(A.eE(new C.dMn(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oE(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMn.prototype={
$1(d){var w=this.b
return new C.Yr(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dMm.prototype={
$1(d){return D.fkt},
$S:z+46}
C.dMs.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dMt.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dMr(w,d)
return new A.C(B.db,new C.bba(this.b,d.c,d.a,w,null),null)},
$S:1895}
C.dMr.prototype={
$0(){return this.a.VC(this.b.b)},
$S:0}
C.dMc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dMd.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dMe.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dMf.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dMg.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dMu.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dp(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a8(this.b,!1).M(s)
return}},
$S:193}
C.dyk.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dyl.prototype={
$0(){return B.d.gL(D.a06)},
$S:z+48}
C.dym.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(A.au(A.W(this.b.d,B.c.j(0.95),w,w,D.cGg,44),w,w,w),w,w,new C.bfU(u,t,v,w),B.at)},
$S:70}
C.fsu.prototype={
$1(d){return A.pd(new C.fst(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:130}
C.fst.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dT:B.c,p=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.qS,24)],x.V),o=r?B.dW:B.bY
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aS.j(0.25),B.bS.j(0.18)],x.O)
w=A.p(t,D.byc,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a5(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aN:B.aA,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.adZ,A.B(A.a([w,B.be,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bo:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.i8(!0,t,e,B.z,D.ew9,new C.fss(this.b,s),20,B.adz,t,B.ak,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.ko,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:124}
C.fss.prototype={
$2(d,e){var w=null,v=D.a06[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.H(s?B.dW:B.bY,B.r,1),q=A.a([new A.ab(0,B.G,B.w.j(s?0.35:0.08),B.ea,8)],x.V),p=A.m(15),o=A.D(new C.a4g(v.a,!0,w),1),n=s?B.jj:B.ik,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aN:B.aA,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.a1,!0,w,A.aJ(!1,u,!0,A.es(A.bt(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bo:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.lt,w,w,w)],l),B.ai,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fsr(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ac)},
$S:75}
C.fsr.prototype={
$0(){A.a8(this.a,!1).M("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cbG.prototype={
$0(){return this.a.adl(this.b)},
$S:0}
C.frU.prototype={
$1(d){return D.fhh},
$S:z+74}
C.fz4.prototype={
$1(d){var w=this
return new C.a_9(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.frW.prototype={
$1(d){return new C.X5(this.a,null)},
$S:z+51}
C.frV.prototype={
$1(d){return D.fig},
$S:z+52}
C.cUj.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cUk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cUi(w,d))},
$S:31}
C.cUi.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cUl.prototype={
$1(d){return this.a.IJ()},
$S:2}
C.cUm.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cUf.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cUg.prototype={
$1(d){return this.a.IJ()},
$S:2}
C.cUh.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.crT.prototype={
$0(){},
$S:0}
C.crZ.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cs_.prototype={
$0(){return this.a.aKs(-1)},
$S:0}
C.cs0.prototype={
$1(d){return this.a.m(new C.crY())},
$S:2}
C.crY.prototype={
$0(){},
$S:0}
C.cs1.prototype={
$0(){return this.a.aKs(1)},
$S:0}
C.cs2.prototype={
$1(d){return this.a.m(new C.crX())},
$S:2}
C.crX.prototype={
$0(){},
$S:0}
C.cs3.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aS.j(0.2)
if(s)v=B.aS
else v=this.b.a?B.dW:B.bY
return A.tK(u,u,B.aW,r,u,new C.crW(t,d),B.A5,s,w,u,new A.ay(v,1,B.r,-1),B.c9)},
$S:1896}
C.crW.prototype={
$1(d){var w=this.a
return w.m(new C.crU(w,this.b))},
$S:8}
C.crU.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cs4.prototype={
$1(d){return this.a.m(new C.crV())},
$S:2}
C.crV.prototype={
$0(){},
$S:0}
C.cs5.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.eX_.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a8(this.b,!1).M(w)},
$S:2}
C.eX0.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.eX1.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a8(this.b,!1).M(w)},
$S:0}
C.eWY.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbtd()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b2(new A.C(D.blH,new A.er(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bs5(p,v,this.b.a,u,t,r),r,r,B.at)},
$S:70}
C.eWZ.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dH.au(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aS,B.bS,w)
s.toString
s=A.a([B.aW,s,B.aS],x.O)
return A.aD(!1,B.a1,!0,p,A.aJ(!1,v,!0,A.es(D.dQM,r,new A.o(r,r,A.H(B.c.j(0.4),B.r,1.5),u,r,new A.a5(new A.d7(-1.2+t,-0.5),new A.d7(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ac)},
$S:128}
C.fqK.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.ewm.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ewd.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ewe.prototype={
$0(){return this.a.e=!1},
$S:0}
C.ewk.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e6(new C.ewj(w,this.b),null)},
$S:21}
C.ewj.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dT:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aA,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.ez(w,u,new A.C(B.adT,A.v(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aa,C.fUy(new C.ewg(r,e),r.a),B.ay,A.B(A.a([A.D(A.dV(B.dd,new C.ewh(d),w),1),B.aw,A.D(A.bL(B.RL,new C.ewi(r,d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ai,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b6(t,B.Z),w)},
$S:96}
C.ewg.prototype={
$1(d){return this.b.$1(new C.ewf(this.a,d))},
$S:31}
C.ewf.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.ewh.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.ewi.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).M(w)
return null},
$S:0}
C.ewl.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QY(this.b)},
$S:0}
C.ew8.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.A(u.d,x.Q)
w.push(this.b)
v.d=u.b6P(w)},
$S:0}
C.ewc.prototype={
$1(d){return this.bfy(d)},
bfy(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.JP(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iG(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.ewb.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a4<1>")
w=A.A(new A.a4(w,new C.ewa(this.b),v),v.k("G.E"))
u.d=t.b6P(w)},
$S:0}
C.ewa.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.ewn.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iG(this.b,w)},
$S:0}
C.ewo.prototype={
$1(d){return this.a.bxa(d,this.b)},
$S:z+55}
C.ew9.prototype={
$0(){return this.a.a7x(this.b)},
$S:0}
C.fyX.prototype={
$1(d){return new C.abl(this.a,this.b,this.c,null)},
$S:z+56}
C.ewq.prototype={
$0(){return this.a.Yb(this.b)},
$S:0}
C.ewr.prototype={
$0(){return this.a.Oj(this.b)},
$S:0}
C.ews.prototype={
$0(){return this.a.De(this.b)},
$S:0}
C.ewt.prototype={
$0(){return this.a.Yc(this.b)},
$S:0}
C.ewp.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.ew3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ew4.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.ew5.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.ew7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pc(),$async$$0)
case 2:if(t.c!=null)t.m(new C.ew6(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ew6.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.ewQ.prototype={
$2(d,e){return d+e.gw6()},
$S:z+59}
C.ewM.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ewN.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ewx.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dT:B.c,s=A.m(24),r=A.p(v,D.byC,B.f,v,v,new A.o(B.aE.j(u?0.18:0.08),v,A.H(B.aE.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aA,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bo:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aN:B.aA
u=u?B.dW:B.bY
w=x.p
return A.ez(v,t,new A.C(B.wJ,A.v(A.a([r,B.aO,q,B.P,p,B.d5,A.B(A.a([A.D(A.dV(B.n4,new C.ewv(d),A.db(v,v,v,v,v,v,v,v,v,o,v,v,B.f1,v,new A.b6(A.m(14),B.Z),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bL(D.fae,new C.eww(d),A.bk(B.aE,v,v,v,v,v,B.f1,v,new A.b6(A.m(14),B.Z),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.R,0,B.p),v),v,v,v,v,B.cZ,v,new A.b6(s,B.Z),v)},
$S:45}
C.ewv.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.eww.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.ewG.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dT:B.c,i=A.m(28),h=A.a([new A.ab(0,B.G,B.w.j(k?0.35:0.08),B.fG,28)],x.V),g=k?D.cMt:B.a_x,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.eqr,B.av,new A.bG(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cq,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a5(B.ax,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.adW,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bo:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.D(v.b0f(B.b2,B.iQ,new C.ewD(v,d),l,"Camera import","Scan QR"),1),B.aw,A.D(v.b0f(B.cs,M.xn,new C.ewE(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bo:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aE.j(k?0.14:0.06)
q=A.m(16)
p=A.H(B.aE.j(0.28),B.r,1)
o=A.p(m,D.by1,B.f,m,m,new A.o(B.aE.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aN:B.aA,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bo:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bp(!0,new A.C(B.ut,A.p(m,A.v(A.a([g,new A.C(B.adU,A.v(A.a([w,B.S,u,B.bu,t,B.S,A.aD(!1,B.a1,!0,m,A.aJ(!1,s,!0,A.p(m,A.B(A.a([o,B.be,n,A.W(B.es,k?B.bo:B.bn,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.ewF(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ac)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.R,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ah,!0,!0)},
$S:34}
C.ewD.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).M(null)
w=2
return A.b(u.a.uF("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ewE.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).M(null)
w=2
return A.b(u.a.uF("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ewF.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).M(null)
w=2
return A.b(u.a.Me(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ewB.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dT:B.c,m=A.m(24),l=A.a([new A.ab(0,B.G,B.w.j(o?0.35:0.08),B.eP,24)],x.V),k=o?B.dW:B.bY
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bo:B.bn
u=A.bt(w,new A.a3(48,48,C.aNi(!0,A.m(12),48,Q.Lb,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aN:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zP(v.gw6())
s=x.p
r=this.a
return A.bp(!0,new A.C(B.ut,A.p(q,A.v(A.a([B.S,k,new A.C(D.adR,A.B(A.a([u,B.be,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bo:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zJ,r.cdq(B.th,B.aS,new C.ewz(d),p,"QR code or backup file","Transfer project"),r.aYk(!0,B.e8,B.aE,new C.ewA(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.R,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ah,!0,!0)},
$S:34}
C.ewz.prototype={
$0(){A.a8(this.a,!1).M("transfer")
return null},
$S:0}
C.ewA.prototype={
$0(){A.a8(this.a,!1).M("delete")
return null},
$S:0}
C.ewC.prototype={
$1(d){return this.bfz(d)},
bfz(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.JP(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uS(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.ewT.prototype={
$0(){var w=this.a
w.a.bn()
w.m(new C.ewS(w))},
$S:0}
C.ewS.prototype={
$0(){return this.a.r++},
$S:0}
C.ewU.prototype={
$0(){var w=this.a
return w.m(new C.ewR(w))},
$S:0}
C.ewR.prototype={
$0(){return this.a.r++},
$S:0}
C.ewu.prototype={
$0(){var w=this.a.c
w.toString
return A.iG(w,null)},
$S:0}
C.ewy.prototype={
$0(){return this.a.c6W(this.b)},
$S:0}
C.ewP.prototype={
$0(){var w=this.a
return w.m(new C.ewO(w,this.b))},
$S:0}
C.ewO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ewJ.prototype={
$0(){return this.a.uF("scan")},
$S:0}
C.ewK.prototype={
$0(){return this.a.uF("file")},
$S:0}
C.ewL.prototype={
$1(d){return this.a.cdr(d,this.b)},
$S:z+60}
C.ewI.prototype={
$0(){return this.a.Di(this.b)},
$S:0}
C.ewH.prototype={
$0(){return this.a.YG(this.b,this.c)},
$S:0}
C.crk.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.crj.prototype={
$1(d){return d.ac()},
$S:z+62}
C.crh.prototype={
$1(d){return C.hcD(A.a_(d,x.N,x.z))},
$S:z+63}
C.cri.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fca.prototype={
$1(d){return d.y===D.k7},
$S:z+2}
C.fzk.prototype={
$1(d){return C.bxR(d,this.a)},
$S:z+2}
C.fbm.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bJY.prototype={
$1(d){return!d.as},
$S:z+1}
C.bJX.prototype={
$1(d){return d.ac()},
$S:z+15}
C.bJU.prototype={
$1(d){return C.fON(A.a_(d,x.N,x.z))},
$S:z+14}
C.bJV.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bJW.prototype={
$1(d){return J.k(d)},
$S:17}
C.f3v.prototype={
$2(d,e){return e.e.aJ(0,d.e)},
$S:z+13}
C.f_e.prototype={
$1(d){return C.fFt(A.a_(d,x.N,x.z))},
$S:z+67}
C.f_f.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f_g.prototype={
$2(d,e){return e.e.aJ(0,d.e)},
$S:z+13}
C.frL.prototype={
$1(d){return J.k(d)},
$S:17}
C.frM.prototype={
$1(d){return d.a},
$S:z+69}
C.frN.prototype={
$1(d){return d.length!==0},
$S:3}
C.frO.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.frP.prototype={
$1(d){return d.QY(null).ac()},
$S:z+70}
C.fzi.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fcC.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.feM.prototype={
$1(d){return C.aim(A.a_(d,x.N,x.z))},
$S:z+8}
C.feN.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.feO.prototype={
$2(d,e){return e.r.aJ(0,d.r)},
$S:z+6}
C.feP.prototype={
$1(d){return d.ac()},
$S:z+5}
C.feQ.prototype={
$1(d){return C.tq(d,this.a)},
$S:z+2}
C.fry.prototype={
$1(d){return C.tq(d,this.a)},
$S:z+2}
C.fzd.prototype={
$1(d){return C.aim(A.a_(d,x.N,x.z))},
$S:z+8}
C.fze.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fzf.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fcj.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fck.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fzo.prototype={
$1(d){return!d.as},
$S:z+1}
C.fbV.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fbW.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fbX.prototype={
$2(d,e){return B.o.aJ(d.Q,e.Q)},
$S:z+19}
C.fz5.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.ffy.prototype={
$1(d){return d.Q},
$S:z+72}
C.fru.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.feJ.prototype={
$1(d){return C.aim(A.a_(d,x.N,x.z))},
$S:z+8}
C.feK.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.feL.prototype={
$2(d,e){return e.r.aJ(0,d.r)},
$S:z+6}
C.frs.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f_K.prototype={
$1(d){return d.length!==0},
$S:3}
C.f_L.prototype={
$1(d){return C.fON(A.a_(d,x.N,x.z))},
$S:z+14}
C.f_M.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f_N.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f_O.prototype={
$1(d){return d.length!==0},
$S:3}
C.f00.prototype={
$2(d,e){return d.eN(new C.f01(e))},
$S:1897}
C.f01.prototype={
$1(d){$.al.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1898}
C.f_Y.prototype={
$1(d){return C.hyq(d,this.a)},
$S:z+73}
C.f_Z.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f0_.prototype={
$2(d,e){return e.r.aJ(0,d.r)},
$S:z+6}
C.f49.prototype={
$1(d){return d.a},
$S:z+49}
C.f4a.prototype={
$1(d){return d.length!==0},
$S:3}
C.f4b.prototype={
$2(d,e){return e.r.aJ(0,d.r)},
$S:z+6}
C.f6b.prototype={
$1(d){return d.ac()},
$S:z+5}
C.faJ.prototype={
$1(d){return C.fZX(d,C.Ff(d,this.a))},
$S:z+5}
C.faK.prototype={
$1(d){return C.fZY(d,C.Ff(d,this.a))},
$S:z+5};(function aliases(){var w=C.aIr.prototype
w.bpy=w.q
w=C.aKz.prototype
w.brS=w.q
w=C.aKA.prototype
w.brT=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aA2.prototype,"gcas","cat",25)
var s
w(s=C.ax8.prototype,"gc3A","c3B",42)
v(s,"gaIJ","LN",0)
v(s,"gcio","zN",0)
v(s,"gbEM","Ms",0)
v(s,"gcvQ","xp",0)
v(s,"gccp","Zm",0)
v(s,"gbAf","Ma",0)
v(s,"gbFc","V3",0)
w(s,"gbJE","bJF",71)
v(s,"gbuP","yS",0)
v(C.ax9.prototype,"gcvM","E9",0)
v(s=C.aAD.prototype,"gacX","uT",0)
v(s,"gc6d","Yy",0)
v(s,"gaMJ","GE",0)
v(s=C.aAA.prototype,"gcs7","a0o",0)
v(s,"gacX","uT",0)
v(s,"gcgw","a_1",0)
v(s,"gc78","YL",0)
w(s,"gc3u","c3v",30)
v(s,"gbF3","GJ",0)
v(s,"gct2","ct3",3)
v(s,"gbVU","WI",0)
w(s,"gc20","c21",23)
v(s,"gc5Y","c5Z",3)
v(s=C.az1.prototype,"gc_Q","NT",0)
v(s,"gc_S","c_T",3)
v(s,"gbBL","a79",0)
v(s=C.aAC.prototype,"gbIc","Vy",0)
v(s,"gbSn","Wb",0)
v(s,"gcmH","a_R",0)
v(s,"gciY","a_t",0)
v(C.aAB.prototype,"gciG","aeH",0)
v(C.apU.prototype,"gc1Z","Ya",0)
v(C.avW.prototype,"ga08","IJ",3)
v(C.avV.prototype,"ga08","IJ",3)
v(C.auF.prototype,"ga08","IJ",3)
v(s=C.aC3.prototype,"gaXJ","OO",0)
v(s,"gbtG","TP",0)
v(s,"gc6X","c6Y",3)
w(C.aC2.prototype,"gc2P","c2Q",57)
u(C.aC4.prototype,"gaMD",0,0,null,["$1","$0"],["GD","bD0"],58,0,0)
t(C,"h65","hHX",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aB,[C.alS,C.tI,C.mT,C.Gh,C.acx,C.Iv,C.tJ,C.ID,C.Ez,C.bb8,C.aG5,C.an1,C.d17,C.ll,C.aQ9,C.aQ8,C.aOe,C.td,C.qv,C.l4,C.hR,C.ko,C.aE5])
u(A.i4,[C.fjo,C.fjn,C.fjp,C.fsn,C.f9F,C.f9G,C.f9L,C.fh7,C.fh6,C.fh5,C.bYu,C.fsT,C.fsL,C.fsX,C.fcr,C.dz0,C.dyW,C.dyX,C.dyz,C.dyv,C.dzf,C.dzg,C.dz9,C.dza,C.dzh,C.dzi,C.fcP,C.feG,C.feH,C.frw,C.fzc,C.fci,C.fs1,C.d0k,C.d_H,C.d_Q,C.d06,C.d_M,C.d_S,C.d_J,C.d_W,C.d_X,C.d_V,C.d0b,C.d0a,C.d1M,C.d1N,C.d1O,C.d0y,C.d0D,C.d0C,C.cA5,C.cA7,C.cTx,C.cTW,C.cTX,C.cU_,C.cU1,C.cU2,C.cU3,C.cU5,C.cU6,C.dMy,C.dLY,C.dLT,C.dLr,C.dLE,C.dLH,C.dLQ,C.dLf,C.dM0,C.dLV,C.dLh,C.dLi,C.dLj,C.dLo,C.dLm,C.dLl,C.dLB,C.dLC,C.dLw,C.dM7,C.dM3,C.d0J,C.d0K,C.fcT,C.fcU,C.fcV,C.fcR,C.fcS,C.fcY,C.fcZ,C.fd_,C.fcW,C.fcX,C.d12,C.d0T,C.d0O,C.d0Y,C.d0Z,C.d11,C.d0Q,C.d14,C.d15,C.d16,C.eXx,C.ezc,C.dgj,C.dgt,C.dgu,C.dgv,C.dgy,C.dgx,C.dgz,C.dgE,C.dgF,C.c47,C.c46,C.c42,C.c43,C.c44,C.c45,C.c4c,C.c49,C.c4a,C.dMk,C.dMn,C.dMm,C.dMt,C.dMu,C.dyk,C.fsu,C.frU,C.fz4,C.frW,C.frV,C.cUk,C.cUl,C.cUg,C.cs0,C.cs2,C.cs3,C.crW,C.cs4,C.eX_,C.fqK,C.ewk,C.ewg,C.ewc,C.ewa,C.ewo,C.fyX,C.ewx,C.ewG,C.ewB,C.ewC,C.ewL,C.crj,C.crh,C.cri,C.fca,C.fzk,C.fbm,C.bJY,C.bJX,C.bJU,C.bJV,C.bJW,C.f_e,C.f_f,C.frL,C.frM,C.frN,C.frO,C.frP,C.fzi,C.fcC,C.feM,C.feN,C.feP,C.feQ,C.fry,C.fzd,C.fze,C.fzf,C.fcj,C.fck,C.fzo,C.fbV,C.fbW,C.fz5,C.ffy,C.fru,C.feJ,C.feK,C.frs,C.f_K,C.f_L,C.f_M,C.f_N,C.f_O,C.f01,C.f_Y,C.f_Z,C.f49,C.f4a,C.f6b,C.faJ,C.faK])
u(A.at,[C.aVv,C.aik,C.aRm,C.WM,C.b6U,C.bb6,C.beN,C.bsg,C.bi4,C.ab_,C.beM,C.aaZ,C.beL,C.az2,C.aF8,C.ab0,C.Ir,C.bb7,C.aah,C.bb5,C.bba,C.aVt,C.apU,C.abl])
u(A.na,[C.b7v,C.b8G,C.b8x,C.aE0,C.bdR,C.bb9,C.bae,C.bfU,C.bs5])
u(A.jl,[C.fsQ,C.fsR,C.fsS,C.fsJ,C.fsK,C.fsV,C.fsW,C.dzc,C.dyZ,C.dz1,C.dyG,C.dyH,C.dyI,C.dyF,C.dyN,C.dyE,C.dyO,C.dyP,C.dyD,C.dyQ,C.dyC,C.dyR,C.dyB,C.dyS,C.dyt,C.dyu,C.dyA,C.dyT,C.dyy,C.dyU,C.dyx,C.dyJ,C.dyw,C.dyK,C.dys,C.dyL,C.dyM,C.dzd,C.dze,C.dz2,C.dz3,C.dz4,C.dz5,C.dz6,C.dz7,C.dz8,C.dzk,C.dzb,C.fcQ,C.d_F,C.d_D,C.d_E,C.d_G,C.d0j,C.d08,C.d05,C.d_I,C.d09,C.d_O,C.d_P,C.d_R,C.d07,C.d_N,C.d_T,C.d0g,C.d02,C.d01,C.d03,C.d04,C.d_Y,C.d0_,C.d00,C.d_U,C.d0c,C.d0f,C.d_K,C.d_L,C.d1L,C.d1K,C.d1J,C.d1I,C.d1P,C.d1H,C.d1Q,C.d0z,C.d0A,C.d0B,C.d0E,C.d0x,C.d0w,C.cA6,C.cTw,C.cTJ,C.cTI,C.cTY,C.cTH,C.cTZ,C.cTG,C.cTF,C.cU0,C.cTE,C.cTR,C.cTQ,C.cU7,C.dMx,C.dMw,C.dMz,C.dMA,C.dMB,C.dMv,C.dMD,C.dMC,C.dLW,C.dLX,C.dLZ,C.dLs,C.dLG,C.dLF,C.dLI,C.dLS,C.dLL,C.dLK,C.dLM,C.dLJ,C.dLN,C.dLO,C.dLR,C.dLg,C.dLU,C.dLk,C.dLn,C.dLp,C.dM_,C.dLv,C.dLt,C.dLx,C.dLy,C.dLu,C.dLz,C.dLD,C.dM8,C.dM9,C.dM1,C.dM4,C.dM5,C.dM6,C.dMb,C.dM2,C.dLq,C.d0I,C.d0H,C.d0M,C.d0W,C.d0N,C.ezb,C.dgk,C.dgh,C.dgi,C.dgs,C.dgr,C.dgq,C.dgA,C.dgp,C.dgB,C.dgo,C.dgC,C.dgn,C.dgD,C.dgm,C.dgl,C.dgw,C.dgG,C.dgP,C.dMl,C.dMp,C.dMq,C.dMh,C.dMi,C.dMj,C.dMo,C.dMs,C.dMr,C.dMc,C.dMd,C.dMe,C.dMf,C.dMg,C.dyl,C.fsr,C.cbG,C.cUj,C.cUi,C.cUm,C.cUf,C.cUh,C.crT,C.crZ,C.cs_,C.crY,C.cs1,C.crX,C.crU,C.crV,C.cs5,C.eX0,C.eX1,C.ewm,C.ewd,C.ewe,C.ewf,C.ewh,C.ewi,C.ewl,C.ew8,C.ewb,C.ewn,C.ew9,C.ewq,C.ewr,C.ews,C.ewt,C.ewp,C.ew3,C.ew4,C.ew5,C.ew7,C.ew6,C.ewM,C.ewN,C.ewv,C.eww,C.ewD,C.ewE,C.ewF,C.ewz,C.ewA,C.ewT,C.ewS,C.ewU,C.ewR,C.ewu,C.ewy,C.ewP,C.ewO,C.ewJ,C.ewK,C.ewI,C.ewH])
u(A.af,[C.alZ,C.R1,C.Xt,C.Xx,C.Xv,C.X3,C.an4,C.amZ,C.Y6,C.an2,C.Yr,C.Ys,C.a4g,C.X5,C.X4,C.WD,C.a_9,C.Em,C.auy,C.apT,C.apN,C.apS,C.Mx])
u(A.ag,[C.aA2,C.bb3,C.ax8,C.bbo,C.ax9,C.b8E,C.aAD,C.aAA,C.az1,C.aAC,C.aAB,C.bgc,C.aIr,C.avW,C.avV,C.auF,C.bs8,C.aKz,C.aKA,C.aC3,C.bhy,C.aC2,C.btU])
u(A.kz,[C.dyY,C.dz_,C.dyV,C.dzj,C.feI,C.bJT,C.d0i,C.d0h,C.d_Z,C.d0d,C.d0e,C.d0F,C.dLP,C.dLA,C.dMa,C.d0V,C.d0U,C.d0S,C.d0X,C.d1_,C.d10,C.d0L,C.d0P,C.d0R,C.d13,C.c40,C.c48,C.c4d,C.dym,C.fst,C.fss,C.eWY,C.eWZ,C.ewj,C.ewQ,C.crk,C.f3v,C.f_g,C.feO,C.fbX,C.feL,C.f00,C.f0_,C.f4b])
t(C.bfV,C.aIr)
u(A.mj,[C.a9l,C.aGN,C.Gi,C.ail,C.crl,C.crm])
t(C.bs6,C.aKz)
t(C.bs7,C.aKA)
t(C.aC4,C.btU)
t(C.b5m,A.b5b)
t(C.bs9,A.a3W)
t(C.b5l,C.bs9)
w(C.aIr,A.eL)
w(C.aKz,A.c7)
w(C.aKA,A.c7)
v(C.btU,A.ep)
v(C.bs9,A.iU)})()
A.kg(b.typeUniverse,JSON.parse('{"aVv":{"at":[],"r":[]},"b7v":{"aA":[]},"alZ":{"af":[],"r":[]},"aA2":{"ag":["alZ"]},"R1":{"af":[],"r":[]},"aik":{"at":[],"r":[]},"aRm":{"at":[],"r":[]},"bb3":{"ag":["R1"]},"Xt":{"af":[],"r":[]},"Xx":{"af":[],"r":[]},"Xv":{"af":[],"r":[]},"X3":{"af":[],"r":[]},"ax8":{"ag":["Xt"]},"bbo":{"ag":["Xx"]},"ax9":{"ag":["Xv"]},"WM":{"at":[],"r":[]},"b8G":{"aA":[]},"b8x":{"aA":[]},"b8E":{"ag":["X3"]},"aE0":{"aA":[]},"bdR":{"aA":[]},"b6U":{"at":[],"r":[]},"an4":{"af":[],"r":[]},"amZ":{"af":[],"r":[]},"Y6":{"af":[],"r":[]},"ab0":{"at":[],"r":[]},"aAD":{"ag":["an4"]},"aAA":{"ag":["amZ"]},"bb6":{"at":[],"r":[]},"bb9":{"aA":[]},"beN":{"at":[],"r":[]},"bae":{"aA":[]},"bsg":{"at":[],"r":[]},"bi4":{"at":[],"r":[]},"az1":{"ag":["Y6"]},"ab_":{"at":[],"r":[]},"beM":{"at":[],"r":[]},"aaZ":{"at":[],"r":[]},"beL":{"at":[],"r":[]},"az2":{"at":[],"r":[]},"aF8":{"at":[],"r":[]},"Ir":{"at":[],"r":[]},"an2":{"af":[],"r":[]},"Yr":{"af":[],"r":[]},"Ys":{"af":[],"r":[]},"aAC":{"ag":["an2"]},"bb7":{"at":[],"r":[]},"aah":{"at":[],"r":[]},"bb5":{"at":[],"r":[]},"bba":{"at":[],"r":[]},"aAB":{"ag":["Yr"]},"bgc":{"ag":["Ys"]},"aVt":{"at":[],"r":[]},"a4g":{"af":[],"r":[]},"bfV":{"ag":["a4g"]},"bfU":{"aA":[]},"apU":{"at":[],"r":[]},"X5":{"af":[],"r":[]},"X4":{"af":[],"r":[]},"WD":{"af":[],"r":[]},"a_9":{"af":[],"r":[]},"avW":{"ag":["X5"]},"avV":{"ag":["X4"]},"auF":{"ag":["WD"]},"bs8":{"ag":["a_9"]},"Em":{"af":[],"r":[]},"auy":{"af":[],"r":[]},"bs6":{"ag":["Em"]},"bs7":{"ag":["auy"]},"bs5":{"aA":[]},"apT":{"af":[],"r":[]},"aC3":{"ag":["apT"]},"abl":{"at":[],"r":[]},"apN":{"af":[],"r":[]},"apS":{"af":[],"r":[]},"bhy":{"ag":["apN"]},"aC2":{"ag":["apS"]},"Mx":{"af":[],"r":[]},"aC4":{"ag":["Mx"],"ep":[]},"b5l":{"iU":[],"f9":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.az
return{e2:w("aOe"),Q:w("qv"),n:w("br<n,n>"),c5:w("aQ8"),dY:w("aQ9"),d:w("eI<n?>"),e:w("Gh"),B:w("mT"),P:w("hR"),k:w("ko"),x:w("aw<~>"),f5:w("O<agf>"),V:w("O<ab>"),t:w("O<qv>"),O:w("O<x>"),ac:w("O<eI<n?>>"),I:w("O<mT>"),u:w("O<hR>"),_:w("O<ko>"),cl:w("O<aw<ak<a1<n,@>>>>"),R:w("O<mV>"),cq:w("O<ak<+(P,P)>>"),ez:w("O<a1<n,aB>>"),gE:w("O<a1<n,n>>"),c7:w("O<a1<n,@>>"),fD:w("O<m8>"),bp:w("O<nT>"),g:w("O<u>"),v:w("O<hA>"),L:w("O<+(n,n)>"),G:w("O<+(P,P)>"),bF:w("O<+count,id,name(I,n,n)>"),A:w("O<cL>"),s:w("O<n>"),aS:w("O<iJ>"),p:w("O<r>"),C:w("O<f9>"),D:w("O<l4>"),fp:w("O<Iv>"),M:w("O<ID>"),gZ:w("O<aE5>"),Y:w("O<acx>"),E:w("O<aG5>"),F:w("O<P>"),dC:w("O<I>"),dS:w("O<aA?>"),d4:w("O<n?>"),J:w("cp<ag<af>>"),b:w("ak<mT>"),do:w("ak<hR>"),r:w("ak<ko>"),U:w("ak<a1<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(I,n,n)>"),h:w("ak<n>"),c:w("ak<l4>"),j:w("ak<@>"),fK:w("bs<n,n>"),d2:w("bs<n,ak<a1<n,@>>>"),a:w("a1<n,@>"),f:w("a1<@,@>"),gv:w("J<n,Gj>"),w:w("iE"),g2:w("qO"),bV:w("alS"),fL:w("cl"),K:w("aB"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(P,ak<hR>)"),cs:w("+count,id,name(I,n,n)"),N:w("n"),e7:w("bl<P>"),gc:w("dz"),b4:w("cx<I>"),W:w("k4<n>"),l:w("r"),cM:w("f9"),i:w("l4"),cc:w("Ez"),bw:w("aaZ<n?>"),cy:w("IF"),q:w("mH"),y:w("S"),gR:w("P"),z:w("@"),S:w("I"),eK:w("ak<ko>?"),m:w("an1?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,I)?"),X:w("+qrPayload,token,usesRemaining(n,n,I)?"),gF:w("+members,trees,viewOnly(I,I,S)?"),Z:w("q7?"),T:w("n?"),aD:w("dz?"),o:w("l4?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aQk=new A.bw(B.h6,B.bD,B.h6,B.bD)
D.a6U=new A.bw(B.h6,B.jS,B.h6,B.jS)
D.aQw=new A.bw(B.hL,B.bD,B.bD,B.bD)
D.aQA=new A.ay(B.cY,1.4,B.r,-1)
D.aQK=new A.ay(B.ag,1,B.r,-1)
D.aS6=new A.aW(0,1/0,64,1/0)
D.aSa=new A.aW(0,84,0,1/0)
D.at3=w([B.lU,B.qi,B.c],x.O)
D.bIp=new A.a5(B.ax,B.aD,B.x,D.at3,null,null)
D.aSW=new A.o(null,null,null,null,null,D.bIp,B.n)
D.cM_=w([B.aS,B.bS],x.O)
D.bKs=new A.a5(B.b1,B.b3,B.x,D.cM_,null,null)
D.aTc=new A.o(null,null,null,null,null,D.bKs,B.n)
D.aZ5=new A.fe(null,null,null,null,null,E.jA,null,null,null,null)
D.a8c=new A.cv(B.A,null,null,D.aZ5,null)
D.k1=new A.x(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eGF=new A.F(!0,D.k1,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYY=new A.w("No books on the shelf yet.",null,D.eGF,null,null,null,null,null,null,null,null,null)
D.dQN=new A.C(B.nu,D.eYY,null)
D.aXI=new A.cv(B.A,null,null,D.dQN,null)
D.aYx=new A.cv(B.A,null,null,X.Tu,null)
D.b_r=new A.x(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b_O=new A.x(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.a97=new A.x(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b2d=new A.x(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b2t=new A.x(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.aad=new A.x(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b5V=new A.x(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b6f=new A.x(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Dn=new A.x(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b7D=new A.x(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b9E=new A.x(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.abD=new A.x(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eTO=new A.w("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bew=new A.eI(null,D.eTO,B.eX,null,x.d)
D.f0X=new A.w("None",null,null,null,null,null,null,null,null,null,null,null)
D.bey=new A.eI(null,D.f0X,B.eX,null,x.d)
D.bf5=new A.b8(38e5)
D.bfR=new A.i5(0,10,0,10)
D.bg0=new A.N(0,1,0,0)
D.bg9=new A.i5(0,4,0,4)
D.bgr=new A.N(10,10,14,10)
D.bgC=new A.i5(10,4,10,4)
D.bgM=new A.i5(10,8,10,8)
D.bgN=new A.N(10,8,8,8)
D.bhe=new A.N(12,6,12,2)
D.bhx=new A.N(14,10,6,6)
D.bhy=new A.N(14,12,14,0)
D.bhC=new A.N(14,12,14,8)
D.bhF=new A.N(14,12,8,14)
D.bhJ=new A.i5(14,14,14,14)
D.bio=new A.N(16,2,16,10)
D.biy=new A.N(16,6,16,30)
D.biA=new A.N(16,6,16,8)
D.adR=new A.N(18,16,18,8)
D.bja=new A.N(18,20,18,22)
D.adV=new A.N(18,24,18,24)
D.bjg=new A.N(18,30,18,30)
D.bjy=new A.N(20,10,12,20)
D.bjM=new A.N(20,18,16,18)
D.bjO=new A.N(20,18,20,6)
D.bkC=new A.N(24,32,24,28)
D.bkD=new A.N(24,36,24,32)
D.bkH=new A.N(26,26,24,14)
D.bkV=new A.N(2,4,2,8)
D.bkZ=new A.N(30,0,30,0)
D.bl9=new A.N(38,22,22,22)
D.aec=new A.N(40,24,24,24)
D.blb=new A.i5(40,40,40,40)
D.bld=new A.N(46,30,30,30)
D.aef=new A.N(4,0,0,8)
D.blD=new A.N(56,40,40,40)
D.blH=new A.N(1.25,1.25,1.25,1.25)
D.blI=new A.N(60,0,60,0)
D.blL=new A.N(6,14,6,16)
D.blX=new A.i5(7,3,7,3)
D.bms=new A.N(5,1.5,5,1.5)
D.bmD=new A.N(6,2.5,6,2.5)
D.fc6=new A.w("Signature",null,B.n2,null,null,null,null,null,null,null,null,null)
D.bmW=new A.bH(1,B.bq,D.fc6,null)
D.f9o=new A.w("Tell the AI what to fix",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bnD=new A.bH(1,B.bq,D.f9o,null)
D.eNF=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbh=new A.w("Worksheets",null,D.eNF,null,null,null,null,null,null,null,null,null)
D.eNN=new A.F(!0,E.a8N,null,null,null,null,13,B.cq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fac=new A.w("Track your project spending",null,D.eNN,null,null,null,null,null,null,null,null,null)
D.cEy=w([D.fbh,B.av,D.fac],x.p)
D.bc4=new A.fm(B.ak,B.e,B.j,B.F,null,B.p,null,0,D.cEy,null)
D.bnI=new A.bH(1,B.bq,D.bc4,null)
D.eJ7=new A.F(!0,E.jA,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT1=new A.w("FAMILY LIBRARY",null,D.eJ7,null,null,null,null,null,null,null,null,null)
D.bnY=new A.bH(1,B.bq,D.eT1,null)
D.KR=new C.Gh("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.WW=new C.Gi(0,"male")
D.af5=new C.Gi(1,"female")
D.wR=new C.Gi(2,"unknown")
D.t_=new C.ail(0,"owner")
D.KS=new C.ail(1,"editor")
D.k7=new C.ail(2,"viewer")
D.afP=new A.a0(61199,"MaterialIcons",!1)
D.bqm=new A.a0(61504,"MaterialIcons",!1)
D.bqn=new A.a0(61505,"MaterialIcons",!1)
D.bqp=new A.a0(61587,"MaterialIcons",!1)
D.bqv=new A.a0(61890,"MaterialIcons",!1)
D.bro=new A.a0(63034,"MaterialIcons",!0)
D.bse=new A.a0(63429,"MaterialIcons",!1)
D.ahX=new A.a0(984520,"MaterialIcons",!1)
D.bqV=new A.a0(62776,"MaterialIcons",!1)
D.buy=new A.ad(D.bqV,26,B.aW,null,null,null)
D.bpl=new A.a0(57648,"MaterialIcons",!1)
D.buQ=new A.ad(D.bpl,14,B.c,null,null,null)
D.bv7=new A.ad(B.Ew,17,null,null,null,null)
D.bvD=new A.ad(E.XG,null,null,null,null,null)
D.bvG=new A.ad(B.j6,18,E.jA,null,null,null)
D.Xr=new A.a0(62044,"MaterialIcons",!1)
D.bvM=new A.ad(D.Xr,null,B.aS,null,null,null)
D.bwB=new A.ad(B.dS,16,null,null,null,null)
D.bwI=new A.ad(D.Xr,32,B.aS,null,null,null)
D.bx_=new A.ad(E.afQ,18,B.cY,null,null,null)
D.by1=new A.ad(B.EG,22,B.aE,null,null,null)
D.byc=new A.ad(B.dS,22,B.aW,null,null,null)
D.byn=new A.ad(O.Xw,22,B.c,null,null,null)
D.bys=new A.ad(B.ta,52,B.c,null,null,null)
D.byC=new A.ad(B.EG,30,B.aE,null,null,null)
D.aiy=new A.ad(B.th,22,B.c,null,null,null)
D.bz3=new A.ad(B.dS,17,null,null,null,null)
D.bzm=new A.ad(B.uN,26,B.cY,null,null,null)
D.bA5=new A.ad(B.XT,16,null,null,null,null)
D.bAO=new A.ad(B.ta,24,B.c,null,null,null)
D.bAT=new A.ad(B.Lh,20,B.qK,null,null,null)
D.bAY=new A.ad(B.Eu,null,B.bS,null,null,null)
D.bB4=new A.ad(B.j6,18,B.c,null,null,null)
D.bCt=new A.ad(B.e8,16,B.ag,null,null,null)
D.bCE=new A.ad(D.Xr,20,B.aS,null,null,null)
D.aj_=new A.ad(B.hr,20,null,null,null,null)
D.bD8=new A.ad(B.cv,18,D.k1,null,null,null)
D.bDq=new A.ad(B.xc,28,B.c,null,null,null)
D.bDy=new A.ad(B.L7,null,B.fQ,null,null,null)
D.bDS=new A.ad(B.xc,24,B.c,null,null,null)
D.bEi=new A.ad(B.ta,null,B.aS,null,null,null)
D.bEj=new A.ad(B.jL,20,B.cY,null,null,null)
D.bEC=new A.ad(B.Ew,16,null,null,null,null)
D.bG8=new A.dY(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eA,!0,null,null,null,null)
D.cSG=w([B.bs,B.aS,B.f5,B.aW],x.O)
D.bGU=new A.a5(B.ax,B.aD,B.x,D.cSG,null,null)
D.b6H=new A.x(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bbf=new A.x(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cBF=w([D.b6H,D.bbf],x.O)
D.bH4=new A.a5(B.b1,B.b3,B.x,D.cBF,null,null)
D.cNC=w([B.eT,B.fr,B.f5],x.O)
D.bH8=new A.a5(B.ax,B.aD,B.x,D.cNC,null,null)
D.aaJ=new A.x(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b_P=new A.x(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cDv=w([D.aaJ,D.b_P],x.O)
D.bHH=new A.a5(B.b1,B.b3,B.x,D.cDv,null,null)
D.b2C=new A.x(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.asu=w([D.b2C,D.aaJ],x.O)
D.bI0=new A.a5(B.ax,B.aD,B.x,D.asu,null,null)
D.a9S=new A.x(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b4u=new A.x(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cMT=w([D.a9S,D.b4u],x.O)
D.bIA=new A.a5(B.a3,B.a7,B.x,D.cMT,null,null)
D.cYk=w([B.bM,B.mz],x.O)
D.bIC=new A.a5(B.b1,B.b3,B.x,D.cYk,null,null)
D.b6D=new A.x(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b84=new A.x(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cZ9=w([D.b6D,D.k1,D.k1,D.b84],x.O)
D.d08=w([0,0.07,0.9,1],x.F)
D.bJ5=new A.a5(B.a3,B.a7,B.x,D.cZ9,D.d08,null)
D.bJg=new A.a5(B.ax,B.aD,B.x,B.OI,null,null)
D.cXW=w([B.aW,B.aS,B.bS],x.O)
D.bKe=new A.a5(B.ax,B.aD,B.x,D.cXW,null,null)
D.c4x=w([B.bs,B.aW,B.eT],x.O)
D.c4E=w([B.bA,B.aC,B.jg],x.O)
D.c4G=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b5s=new A.x(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.caK=w([D.b5s,E.aas],x.O)
D.dMK=new A.u(1,2)
D.esA=new A.cL(B.aU,D.dMK,3)
D.apJ=w([D.esA],x.A)
D.chZ=w([B.fU,B.c7,B.f4],x.O)
D.ckB=w([B.bH,B.bv,B.bj],x.O)
D.boq=new C.tI("classic","Classic leather","Gold-edged brown leather",D.asu,E.jA,E.jA,"\u2766",B.L,!0,!1,!1,!1)
D.b_f=new A.x(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bal=new A.x(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cG1=w([D.b_f,D.bal],x.O)
D.aav=new A.x(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bol=new C.tI("ornate","Ornate gold","Double gold border and flourishes",D.cG1,D.aav,D.aav,"\u2726",B.L,!0,!0,!0,!1)
D.b2k=new A.x(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.b7j=new A.x(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cyS=w([D.b2k,D.b7j],x.O)
D.bok=new C.tI("parchment","Parchment","Old paper with dark ink",D.cyS,D.Dn,G.ii,"\u2767",B.L,!0,!1,!1,!0)
D.a8z=new A.x(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b93=new A.x(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.cWn=w([D.a8z,D.b93],x.O)
D.b55=new A.x(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.b8w=new A.x(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bon=new C.tI("minimal","Clean paper","Plain and elegant, like a printed book",D.cWn,D.b55,D.b8w,"",B.L,!0,!0,!1,!0)
D.bop=new C.tI("midnight","Midnight","Deep blue with silver stars",I.asM,B.cm,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.boj=new C.tI("emerald","Emerald library","Green cloth, title on the left",Y.aq6,E.jA,B.fV,"\u25c6",B.bf,!0,!1,!1,!1)
D.b9o=new A.x(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.cUY=w([B.eZ,D.b9o],x.O)
D.b61=new A.x(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.b6X=new A.x(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.boo=new C.tI("rose","Rose vintage","Burgundy with rose-gold lettering",D.cUY,D.b61,D.b6X,"\u2740",B.L,!0,!1,!0,!1)
D.cYP=w([B.cz,I.o4],x.O)
D.bom=new C.tI("modern","Modern","Dark, bold, left-aligned",D.cYP,B.aY,B.c,"",B.bf,!1,!0,!1,!1)
D.ZM=w([D.boq,D.bol,D.bok,D.bon,D.bop,D.boj,D.boo,D.bom],A.az("O<tI>"))
D.cyo=w([B.bS,B.bk],x.O)
D.b6v=new A.x(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cz2=w([D.a8z,D.b6v],x.O)
D.b2h=new A.x(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cAu=w([D.b2h,B.da],x.O)
D.cBS=w([B.b6,B.iG,B.nZ],x.O)
D.cCe=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b_L=new A.x(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b3Q=new A.x(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.d05=w([D.a9S,D.b_L,D.b3Q],x.O)
D.bor=new C.tJ("leather","Leather",D.d05,"vintage")
D.cIQ=w([B.dm,B.Jm,N.TV],x.O)
D.boy=new C.tJ("midnight","Midnight",D.cIQ,"starry")
D.cBT=w([B.fs,B.eu,B.kX],x.O)
D.box=new C.tJ("forest","Forest",D.cBT,"story")
D.d1K=w([B.f_,B.eZ,B.k2],x.O)
D.bou=new C.tJ("burgundy","Burgundy",D.d1K,"royal")
D.ckb=w([B.aC,B.oW,B.nc],x.O)
D.bov=new C.tJ("royal","Royal",D.ckb,"royal")
D.cE5=w([B.bv,B.cz,I.o4],x.O)
D.bos=new C.tJ("charcoal","Charcoal",D.cE5,"geo")
D.d0b=w([B.cf,B.dL,B.wd],x.O)
D.bow=new C.tJ("sunset","Sunset",D.d0b,"sunset")
D.d0L=w([B.iG,B.Do,B.TW],x.O)
D.bot=new C.tJ("ocean","Ocean",D.d0L,"band")
D.xI=w([D.bor,D.boy,D.box,D.bou,D.bov,D.bos,D.bow,D.bot],A.az("O<tJ>"))
D.cEs=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cEY=w([B.aj,B.aI,B.M],x.O)
D.cG6=w([B.eZ,B.eu,B.dm,B.fh,B.wf,B.cY,B.k4,B.eo,B.dn],x.O)
D.cG7=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.esB=new A.cL(B.dl,B.dz,8)
D.cGg=w([D.esB],x.A)
D.cHg=w([B.bX,B.dL,B.kt],x.O)
D.cHI=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cIM=w([B.bX,B.hx],x.O)
D.cKG=w([B.aL,B.zt,B.w5],x.O)
D.cLw=w([B.bJ,B.cH,B.dy,B.aL],x.O)
D.cM0=w([B.ji,B.cf,B.rx],x.O)
D.cMt=w([B.eT,B.cY],x.O)
D.cMY=w([B.cM,B.fy,B.hm],x.O)
D.cN8=w([B.aY,B.bk,B.dm],x.O)
D.cNz=w([B.eE,B.d1,B.eu],x.O)
D.cNP=w([B.e_,B.dm,B.Jm],x.O)
D.cP1=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a_C=w(["leather","linen","plain","stars","rays"],x.s)
D.bue=new A.a0(985219,"MaterialIcons",!1)
D.btO=new A.a0(983781,"MaterialIcons",!1)
D.asf=w([B.age,B.hW,B.m5,B.hX,D.bue,B.EP,B.pg,D.btO,I.ahM,B.xe,B.pi,B.m4],A.az("O<a0>"))
D.a_H=w(["double","single","corners","none"],x.s)
D.cRv=w([B.e0,B.bn,B.eo],x.O)
D.cRI=w([],x.t)
D.B3=w([],x.u)
D.cTJ=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cVO=w([B.aX,B.fy,B.fh],x.O)
D.cWY=w([B.cu,B.o0,B.UA],x.O)
D.cXb=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.de6=new C.ll("construction","Construction","Jobsite & builds",B.ED)
D.ded=new C.ll("house","Home Build","Houses & rooms",B.uH)
D.de3=new C.ll("grocery","Grocery","Store & pantry",B.Yp)
D.de2=new C.ll("calculator","Calculations","Math & estimates",B.Lr)
D.deb=new C.ll("lumber","Materials","Lumber & supplies",B.LJ)
D.de_=new C.ll("kitchen","Kitchen","Remodel & meals",S.agY)
D.btM=new A.a0(983756,"MaterialIcons",!1)
D.de4=new C.ll("landscape","Landscaping","Yard & garden",D.btM)
D.ddZ=new C.ll("plumbing","Plumbing","Pipes & water",B.uT)
D.dee=new C.ll("electrical","Electrical","Wiring & power",B.hq)
D.ddX=new C.ll("store","Retail Shop","Daily business",B.kF)
D.ddY=new C.ll("paint_remodel","Paint & Remodel","Colors & walls",S.agM)
D.bt9=new A.a0(983311,"MaterialIcons",!1)
D.dea=new C.ll("roofing","Roofing","Roofs & exteriors",D.bt9)
D.btZ=new A.a0(983986,"MaterialIcons",!1)
D.ddW=new C.ll("warehouse","Warehouse","Storage & stock",D.btZ)
D.de8=new C.ll("vehicles","Vehicles","Fleet & transport",B.EQ)
D.bqX=new A.a0(62785,"MaterialIcons",!1)
D.de1=new C.ll("farm","Farm","Crops & livestock",D.bqX)
D.de0=new C.ll("restaurant","Restaurant","Food & catering",B.tg)
D.de7=new C.ll("tools","Tools","Workshop gear",B.EN)
D.dec=new C.ll("wallet","Cash & Wallet","Quick spending",B.jL)
D.bs9=new A.a0(63395,"MaterialIcons",!1)
D.de9=new C.ll("concrete","Concrete","Foundation work",D.bs9)
D.de5=new C.ll("blueprint","Blueprint","Plans & design",Aa.agk)
D.a06=w([D.de6,D.ded,D.de3,D.de2,D.deb,D.de_,D.de4,D.ddZ,D.dee,D.ddX,D.ddY,D.dea,D.ddW,D.de8,D.de1,D.de0,D.de7,D.dec,D.de9,D.de5],A.az("O<ll>"))
D.cXD=w([B.bo,B.bn],x.O)
D.cYl=w([B.i2,B.ng,B.dB],x.O)
D.a0b=w(["top","middle","bottom"],x.s)
D.d_w=w([B.cC,B.bk,B.dm],x.O)
D.d00=w([B.bg,B.d1,B.eu],x.O)
D.d1F=w([B.bH,B.aj],x.O)
D.d1G=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dKz={top:0,middle:1,bottom:2}
D.d4O=new A.br(D.dKz,["Top","Middle","Bottom"],x.n)
D.dKe={double:0,single:1,corners:2,none:3}
D.d4T=new A.br(D.dKe,["Double line","One line","Corners","None"],x.n)
D.dLj={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d6g=new A.br(D.dLj,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.d6r=new A.br(B.iA,[],A.az("br<I,+(n,n)>"))
D.dKr={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Be=new A.br(D.dKr,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.az("br<n,I>"))
D.d8F=new F.Lr(32,null)
D.d8G=new F.Lr(40,null)
D.d8H=new F.Lr(46,null)
D.aBh=new C.apS(null)
D.dNH=new A.u(8,14)
D.eZA=new A.w("Write a new book",null,B.jc,null,B.L,null,null,null,null,null,null,null)
D.dQh=new A.C(B.ls,D.eZA,null)
D.ai9=new A.ad(B.hE,18,B.c,null,null,null)
D.eTm=new A.w("Add",null,B.n3,null,null,null,null,null,null,null,null,null)
D.cLL=w([D.ai9,B.tO,D.eTm],x.p)
D.eqy=new A.cD(B.b_,B.e,B.R,B.m,null,B.p,null,0,D.cLL,null)
D.dQB=new A.C(B.pc,D.eqy,null)
D.dQC=new A.C(E.acK,X.Tu,null)
D.eNB=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWe=new A.w("New Project",null,D.eNB,null,null,null,null,null,null,null,null,null)
D.cPn=w([D.ai9,B.ab,D.eWe],x.p)
D.eqB=new A.cD(B.b_,B.e,B.R,B.m,null,B.p,null,0,D.cPn,null)
D.dQM=new A.C(B.iM,D.eqB,null)
D.eYr=new A.w("Choose your header",null,R.C5,null,null,null,null,null,null,null,null,null)
D.dR4=new A.C(B.it,D.eYr,null)
D.aZk=new A.fe(2.2,null,null,null,null,B.cY,null,null,null,null)
D.evc=new A.a3(22,22,D.aZk,null)
D.aXE=new A.cv(B.A,null,null,D.evc,null)
D.dR9=new A.C(B.Vs,D.aXE,null)
D.bhS=new A.N(14,2,14,6)
D.f9X=new A.w("The top of your book. Tap a design to see it.",null,N.a4t,null,null,null,null,null,null,null,null,null)
D.dRa=new A.C(D.bhS,D.f9X,null)
D.dSH=new A.iH(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dSK=new A.iH(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aCm=new A.iH(1,0.9607843137254902,0.48627450980392156,0)
D.GP=new A.iH(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.ye=new A.iH(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dSQ=new A.iH(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fjP=new C.bdR(null)
D.bcY=new A.m_(D.fjP,null,B.at,null,null)
D.aG_=new A.cH(0,0,0,0,null,null,D.bcY,null)
D.edN=new A.z(-42,42)
D.elF=new A.cI([0,0,1,1])
D.aHg=new A.a9(0,0,520,160)
D.aHt=new A.b6(B.pZ,B.Z)
D.f9w=new A.w("Let the AI write it from your tree",null,B.kk,null,B.L,null,null,null,null,null,null,null)
D.boS=new A.dm(1,B.cl,D.f9w,null)
D.cIL=w([E.YR,B.ab,D.boS],x.p)
D.eqg=new A.cD(B.b_,B.e,B.R,B.m,null,B.p,null,0,D.cIL,null)
D.eT2=new A.w("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.cW2=w([D.aj_,B.ab,D.eT2],x.p)
D.eqo=new A.cD(B.b_,B.b7,B.j,B.m,null,B.p,null,0,D.cW2,null)
D.byh=new A.ad(B.hF,14,B.aW,null,null,null)
D.eHQ=new A.F(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWE=new A.w("Cashier",null,D.eHQ,null,null,null,null,null,null,null,null,null)
D.cPR=w([D.byh,B.br,D.eWE],x.p)
D.eqq=new A.cD(B.b_,B.e,B.R,B.m,null,B.p,null,0,D.cPR,null)
D.eT3=new A.w("Transfer & settings",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bnu=new A.bH(1,B.bq,D.eT3,null)
D.cBo=w([D.aiy,B.aw,D.bnu],x.p)
D.eqr=new A.cD(B.b_,B.e,B.j,B.m,null,B.p,null,0,D.cBo,null)
D.etX=new A.as(16,40)
D.eu1=new A.as(22,64)
D.eu8=new A.as(280,88)
D.euT=new A.a3(30,null,null,null)
D.ew9=new A.hK(2,12,12,1.05,null)
D.eWk=new A.w("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.ewU=new A.b0(D.eWk,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.eWz=new A.w("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aJf=new A.b0(D.eWz,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f36=new A.w("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.exn=new A.b0(D.f36,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.fcD=new A.w("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.exs=new A.b0(D.fcD,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.eYp=new A.w("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.exz=new A.b0(D.eYp,null,null,null,null,null,null,null,null,null,null,null,null,B.fK,!1,null,null,null,B.q,null)
D.fa8=new A.w("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aJj=new A.b0(D.fa8,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.eTD=new A.w("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.exZ=new A.b0(D.eTD,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.fdg=new A.w("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eyI=new A.b0(D.fdg,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f8y=new A.w("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ez6=new A.b0(D.f8y,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.fcH=new A.w("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ez9=new A.b0(D.fcH,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f4A=new A.w("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ezb=new A.b0(D.f4A,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f_8=new A.w("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.ezc=new A.b0(D.f_8,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f_9=new A.w("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eAc=new A.b0(D.f_9,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.eWm=new A.w("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eAu=new A.b0(D.eWm,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.eY7=new A.w("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eAN=new A.b0(D.eY7,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f46=new A.w("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eB2=new A.b0(D.f46,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.f_R=new A.w("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eB3=new A.b0(D.f_R,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.q,null)
D.eDZ=new A.F(!0,D.k1,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEn=new A.F(!0,D.k1,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEY=new A.r6(!0,B.qT,null,null,null,null,B.dp,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFd=new A.F(!0,D.k1,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFK=new A.F(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4u=new A.r6(!0,B.Q2,null,null,null,null,B.dp,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGI=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eH5=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIA=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIE=new A.F(!0,G.ii,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJQ=new A.F(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKv=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL9=new A.F(!0,B.bS,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLe=new A.F(!0,B.bM,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLB=new A.F(!0,D.Dn,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLK=new A.F(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMH=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eN8=new A.F(!0,B.bS,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNz=new A.F(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP_=new A.F(!0,B.aj,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP7=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLo=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4X=new A.F(!0,B.aj,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQK=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR6=new A.F(!0,G.ii,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRd=new A.F(!0,G.ii,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRY=new A.w("Themes",null,B.pL,null,null,null,null,null,null,null,null,null)
D.eSy=new A.w("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eIk=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eST=new A.w("Debt receipt",null,D.eIk,null,B.L,null,null,null,null,null,null,null)
D.aLk=new A.F(!0,B.aj,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT9=new A.w("Person who owes",null,D.aLk,null,null,null,null,null,null,null,null,null)
D.eU4=new A.w("Notes",null,B.a4A,null,null,null,null,null,null,null,null,null)
D.eUt=new A.w("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eHn=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUx=new A.w("Share",null,D.eHn,null,null,null,null,null,null,null,null,null)
D.eVo=new A.w("Move your family trees",null,D.aLo,null,null,null,null,null,null,null,null,null)
D.eVX=new A.w("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eWy=new A.w("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.eXI=new A.w("Remove this book?",null,B.hh,null,null,null,null,null,null,null,null,null)
D.aLO=new A.w("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eYM=new A.w("What should the AI do?",null,B.dP,null,null,null,null,null,null,null,null,null)
D.f_4=new A.w("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.f04=new A.w("Ribbon bookmark",null,B.iC,null,null,null,null,null,null,null,null,null)
D.eOU=new A.F(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0v=new A.w("NGMY.ORG",null,D.eOU,null,B.L,null,null,null,null,null,null,null)
D.f1H=new A.w("Scan family tree QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eLt=new A.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2p=new A.w("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eLt,null,B.L,null,null,null,null,null,null,null)
D.f3x=new A.w("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.f3D=new A.w("Thumbnail",null,B.pL,null,null,null,null,null,null,null,null,null)
D.f4c=new A.w("Save the cover",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f4B=new A.w("Your photos",null,B.pL,null,null,null,null,null,null,null,null,null)
D.f4Q=new A.w("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f5h=new A.w("Design your cover",null,R.C5,null,null,null,null,null,null,null,null,null)
D.f5n=new A.w("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.f5q=new A.w("PICTURE",null,H.ml,null,null,null,null,null,null,null,null,null)
D.f5M=new A.w("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f5O=new A.w("You can undo it right after.",null,N.a4G,null,null,null,null,null,null,null,null,null)
D.f6g=new A.w("Print",null,B.tS,null,null,null,null,null,null,null,null,null)
D.f6B=new A.w("Amount owed",null,D.aLk,null,null,null,null,null,null,null,null,null)
D.f6O=new A.w("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f7l=new A.w("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.f7o=new A.w("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f7N=new A.w("Debtor signature",null,B.a4A,null,null,null,null,null,null,null,null,null)
D.f7V=new A.w("Change icon",null,E.aKE,null,null,null,null,null,null,null,null,null)
D.f8Y=new A.w("Family tree QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f9m=new A.w("Download",null,B.tS,null,null,null,null,null,null,null,null,null)
D.f9q=new A.w("Change",null,B.pL,null,null,null,null,null,null,null,null,null)
D.fae=new A.w("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fah=new A.w("WHAT SHOULD IT CHANGE?",null,H.ml,null,null,null,null,null,null,null,null,null)
D.faR=new A.w("COLOUR",null,H.ml,null,null,null,null,null,null,null,null,null)
D.fb2=new A.w("Do it",null,B.cr,null,null,null,null,null,null,null,null,null)
D.fb5=new A.w("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fc0=new A.w("Create Family Tree",null,B.eR,null,null,null,null,null,null,null,null,null)
D.eD0=new A.F(!0,E.jA,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcf=new A.w("Write the first page myself",null,D.eD0,null,null,null,null,null,null,null,null,null)
D.fcK=new A.w("Use this header",null,B.cr,null,null,null,null,null,null,null,null,null)
D.fcQ=new A.w("Create Project",null,E.aL5,null,null,null,null,null,null,null,null,null)
D.fgZ=new C.a9l(1,"header")
D.a5C=new C.a9l(2,"projects")
D.fh_=new C.a9l(3,"cashier")
D.a5D=new C.a9l(4,"familyTree")
D.frL=new C.crl(0,"start")
D.frM=new C.crm(0,"start")
D.fhh=new C.WD(null)
D.fig=new C.X4(null)
D.d6o=new A.br(B.iA,[],A.az("br<n,Ez>"))
D.cS1=w([],x.E)
D.cS2=w([],x.M)
D.fiN=new C.bb8(D.d6o,D.cS1,D.cS2,0,0,null,null)
D.fkt=new C.Ys(null)
D.a6j=new C.aGN(0,"projects")
D.aOB=new C.aGN(1,"cashier")
D.fpI=new C.aGN(2,"familyTree")})()};
(a=>{a["4W6EeaUdZFhphDvm/ijl6pgLO0o="]=a.current})($__dart_deferred_initializers__);