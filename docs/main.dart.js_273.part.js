((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A0,A1,G,F,E,N,A2,A3,R,A4,A5,M,A6,H,S,T,U,V,A7,A8,W,A9,Aa,Ab,X,Ac,Ad,L,Ae,Y,Z,I,O,C={
bzk(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bzk=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uL(null,""),$async$bzk)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.R(y.j)
t=A.mL(b1)
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
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.am(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qm(t,a1,B.he,E.DQ),$async$bzk)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.OO(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.aa(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.R(l!=null&&A.JB(l)?y.l:y.i)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a_(r.a(j.h(a2,a7)),q,p):B.cw
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a0r(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzk,v)},
aeE(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aeE=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uL(null,""),$async$aeE)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.R(y.j)
t=A.mL(b6)
s=x.S
r=A.dc(c1,0,A.dH(4,"count",s),A.U(c1).c)
q=F.a0e(new A.J(r,new C.fj_(),r.$ti.k("J<ai.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.ae("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fiZ(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.am(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aeE)
case 6:l=c5
k=F.OO(l==null?"":l)
if(k==null)throw A.R("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.alQ(s,D.d6j,r.b(k.h(0,"cover"))?A.a_(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.R.am(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aeE)
case 10:l=c5
k=l==null?null:F.OO(l)
if(k==null)throw A.R(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d5(a8,d),a5=J.aU(a2.a),a2=a2.$ti,a7=new A.kN(a5,a2.k("kN<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a8(a9)
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
h.m(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bg<2>")
p=A.cA(new A.bg(h,s),new C.fj0(),s.k("G.E"),p)
p=F.a0e(A.oL(p,3,A.a2(p).k("G.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cv<1>")
b4=A.A(new A.cv(h,s),s.k("G.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a0r(s,b9),$async$aeE)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.m(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.alQ(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aeE,v)},
h62(d,e,f){return A.ch(null,B.w.j(0.65),!1,null,new C.frZ(e,f),d,null,!0,!0,x.g2)},
alQ:function alQ(d,e,f){this.a=d
this.b=e
this.c=f},
fj_:function fj_(){},
fiZ:function fiZ(d){this.a=d},
fj0:function fj0(){},
frZ:function frZ(d,e){this.a=d
this.b=e},
bxe(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bxe=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.ba(b1,new C.f9g())){u=null
w=1
break}t=B.d.ea(b1,new C.f9h())
s=$.V()
r=new A.rz()
q=A.FR(r,D.aHg)
p=A.L()
p.r=B.c.gp(0)
q.aW(D.aHg,p)
o=A.L()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fu
n=new C.f9m(t)
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
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ao(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
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
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ao(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aL(a3,o)}w=4
return A.b(r.pO().yo(520,160),$async$bxe)
case 4:w=3
return A.b(b3.hf(B.fO),$async$bxe)
case 3:b0=b3
u=b0==null?null:J.f6(B.dD.gaN(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bxe,v)},
fgG(d){return C.hJV(d)},
hJV(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fgG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bbe()
n=d.x!=null&&d.y5(null).length===0
if(d.x!=null)t=n?D.ye:D.GP
else t=d.gRX()?D.GP:D.aCm
w=3
return A.b(C.bxe(d.ax),$async$fgG)
case 3:s=f
p.a=null
if(s!=null)p.a=A.akz(s)
r=A.a2l(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aCm}else{p.c=C.w3(q,!0)
p.b=n?D.ye:D.GP}r.a0R(A.fBw(new C.fgI(p,d,new C.fgJ(),t,n,o),null,D.bl9,B.vg))
u=r.jD(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fgG,v)},
fnj(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fnj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fgG(d),$async$fnj)
case 3:t=f
s=B.a.i(d.b)
r=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.an(q,0,40)
u=A5.Fn(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fnj,v)},
f9g:function f9g(){},
f9h:function f9h(){},
f9m:function f9m(d){this.a=d},
fgJ:function fgJ(){},
fgI:function fgI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fgH:function fgH(){},
fsq(d,e){var w=0,v=A.j(x.H)
var $async$fsq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ch(null,B.w.j(0.55),!0,null,new C.fsu(new A.co(null,x.J),e),d,null,!0,!0,x.H),$async$fsq)
case 2:return A.h(null,v)}})
return A.i($async$fsq,v)},
bzN(d,e,f,g){return C.hRd(d,e,f,g)},
hRd(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bzN=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gaj(e.split(",")):e
r=B.cy.aG(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.P(D.eAE)
w=1
break}w=3
return A.b(A.ch(null,null,!0,null,new C.fsm(g,r,f),d,null,!0,!0,x.H),$async$bzN)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bzN,v)},
fsv(d,e){var w=0,v=A.j(x.H)
var $async$fsv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ch(null,null,!0,null,new C.fsy(new A.co(null,x.J),e),d,null,!0,!0,x.H),$async$fsv)
case 2:return A.h(null,v)}})
return A.i($async$fsv,v)},
aVr:function aVr(d,e){this.c=d
this.a=e},
bYn:function bYn(){},
b7q:function b7q(d,e){this.b=d
this.a=e},
fsu:function fsu(d,e){this.a=d
this.b=e},
fsr:function fsr(d){this.a=d},
fss:function fss(d,e,f){this.a=d
this.b=e
this.c=f},
fst:function fst(d,e){this.a=d
this.b=e},
fsm:function fsm(d,e,f){this.a=d
this.b=e
this.c=f},
fsk:function fsk(d){this.a=d},
fsl:function fsl(d,e,f){this.a=d
this.b=e
this.c=f},
fsy:function fsy(d,e){this.a=d
this.b=e},
fsw:function fsw(d){this.a=d},
fsx:function fsx(d,e,f){this.a=d
this.b=e
this.c=f},
fc1(d,e){var w=0,v=A.j(x.y),u,t
var $async$fc1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0_(d),$async$fc1)
case 3:t=g
J.n4(t,new C.fc2(e))
u=A.afh(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fc1,v)},
fc2:function fc2(d){this.a=d},
alX:function alX(d,e,f){this.c=d
this.d=e
this.a=f},
aA_:function aA_(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dz4:function dz4(d,e){this.a=d
this.b=e},
dyQ:function dyQ(d,e){this.a=d
this.b=e},
dyT:function dyT(d,e,f){this.a=d
this.b=e
this.c=f},
dyS:function dyS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dyR:function dyR(d,e){this.a=d
this.b=e},
dyU:function dyU(d,e){this.a=d
this.b=e},
dyO:function dyO(){},
dyP:function dyP(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dyN:function dyN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dyy:function dyy(d){this.a=d},
dyz:function dyz(d,e,f){this.a=d
this.b=e
this.c=f},
dyA:function dyA(d,e){this.a=d
this.b=e},
dyx:function dyx(d){this.a=d},
dyF:function dyF(d,e){this.a=d
this.b=e},
dyw:function dyw(d){this.a=d},
dyG:function dyG(d,e,f){this.a=d
this.b=e
this.c=f},
dyH:function dyH(d,e,f){this.a=d
this.b=e
this.c=f},
dyv:function dyv(d,e){this.a=d
this.b=e},
dyI:function dyI(d,e,f){this.a=d
this.b=e
this.c=f},
dyu:function dyu(d,e){this.a=d
this.b=e},
dyJ:function dyJ(d,e){this.a=d
this.b=e},
dyt:function dyt(d){this.a=d},
dyK:function dyK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dyr:function dyr(){},
dyl:function dyl(d){this.a=d},
dym:function dym(d){this.a=d},
dys:function dys(d,e){this.a=d
this.b=e},
dyL:function dyL(d,e){this.a=d
this.b=e},
dyq:function dyq(d){this.a=d},
dyM:function dyM(d){this.a=d},
dyp:function dyp(){},
dyB:function dyB(d,e){this.a=d
this.b=e},
dyo:function dyo(d){this.a=d},
dyC:function dyC(d,e,f){this.a=d
this.b=e
this.c=f},
dyn:function dyn(d,e){this.a=d
this.b=e},
dyk:function dyk(d,e){this.a=d
this.b=e},
dyD:function dyD(d){this.a=d},
dyE:function dyE(d,e,f){this.a=d
this.b=e
this.c=f},
dz7:function dz7(){},
dz8:function dz8(d,e){this.a=d
this.b=e},
dz5:function dz5(d){this.a=d},
dz6:function dz6(d){this.a=d},
dz1:function dz1(d,e){this.a=d
this.b=e},
dz2:function dz2(d){this.a=d},
dyV:function dyV(d,e,f){this.a=d
this.b=e
this.c=f},
dyW:function dyW(d,e,f){this.a=d
this.b=e
this.c=f},
dyX:function dyX(d,e,f){this.a=d
this.b=e
this.c=f},
dyY:function dyY(d,e,f){this.a=d
this.b=e
this.c=f},
dyZ:function dyZ(d,e,f){this.a=d
this.b=e
this.c=f},
dz_:function dz_(d,e,f){this.a=d
this.b=e
this.c=f},
dz0:function dz0(d,e,f){this.a=d
this.b=e
this.c=f},
dz9:function dz9(){},
dza:function dza(){},
dzb:function dzb(){},
dzc:function dzc(d){this.a=d},
dz3:function dz3(d,e){this.a=d
this.b=e},
h2f(d){return B.d.dI(D.ZM,new C.fcq(d),new C.fcr())},
tH:function tH(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fcq:function fcq(d){this.a=d},
fcr:function fcr(){},
aih:function aih(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aRi:function aRi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
R_:function R_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baZ:function baZ(){this.d=$
this.c=this.a=null},
d_x:function d_x(d,e){this.a=d
this.b=e},
d_v:function d_v(d,e){this.a=d
this.b=e},
d_w:function d_w(){},
d_y:function d_y(d,e){this.a=d
this.b=e},
fOn(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.mT(t,w,v,u==null?new A.Q(Date.now(),0,!1):u)},
Jm(d,e){return C.hIy(d,e)},
hIy(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Jm=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ax(),$async$Jm)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aS(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.R.aF(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d5(p,x.f)
o=A.cA(o,new C.feh(),o.$ti.k("G.E"),x.B)
n=A.a2(o).k("a3<G.E>")
o=A.A(new A.a3(o,new C.fei(),n),n.k("G.E"))
B.d.b_(o,new C.fej())
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
return A.i($async$Jm,v)},
zY(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$zY=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ax(),$async$zY)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b5(f,new C.fr7(),x.a)
r=A.A(r,r.$ti.k("ai.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.R.am(r,null)),$async$zY)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zY,v)},
aNy(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aNy=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Jm(d,e),$async$aNy)
case 2:u=h
t=J.cB(u)
s=t.bi(u,new C.fyO(f))
if(s===-1)t.ck(u,0,f)
else t.m(u,s,f)
w=3
return A.b(C.zY(d,e,u),$async$aNy)
case 3:return A.h(null,v)}})
return A.i($async$aNy,v)},
bxF(d,e,f){var w=0,v=A.j(x.H),u
var $async$bxF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Jm(d,e),$async$bxF)
case 2:u=h
J.n4(u,new C.fbU(f))
w=3
return A.b(C.zY(d,e,u),$async$bxF)
case 3:return A.h(null,v)}})
return A.i($async$bxF,v)},
bxT(d,e){return C.hIx(d,e)},
hIx(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bxT=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$bxT)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aS(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.KP
w=1
break}p=B.R.aF(0,q,null)
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
if(D.Bd.ak(0,o.h(0,"foil")))j=A.cK(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aM(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.t(D.a0b,o.h(0,"position"))?A.cK(o.h(0,"position")):"middle"
g=B.d.t(D.a_H,o.h(0,"frame"))?A.cK(o.h(0,"frame")):"double"
f=B.d.t(D.a_C,o.h(0,"texture"))?A.cK(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cEl,o.h(0,"header"))?A.cK(o.h(0,"header")):"classic"
o=new C.Gg(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.KP
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.KP
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bxT,v)},
PR(d,e,f){return C.hQK(d,e,f)},
hQK(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$PR=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ax(),$async$PR)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.am(f.ac(),null)),$async$PR)
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
return A.i($async$PR,v)},
Pl(d,e){return C.hIz(d,e)},
hIz(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Pl=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ax(),$async$Pl)
case 7:r=g
q=r.rn("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.A(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Jm(d,e),$async$Pl)
case 8:if(!j.cu(g)){n=B.a.i(d.toLowerCase())
m=J.lb(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Pl)
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
return A.i($async$Pl,v)},
ae_(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ae_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Pl(d,e),$async$ae_)
case 3:s=g
r=J.a8(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.K(s,t)
w=5
return A.b(A.ax(),$async$ae_)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ae_)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ae_,v)},
a0E(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0E=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Pl(d,e),$async$a0E)
case 2:s=h
J.hE(s,f)
w=3
return A.b(A.ax(),$async$a0E)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0E)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0E)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0E)
case 6:return A.h(null,v)}})
return A.i($async$a0E,v)},
mT:function mT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
feh:function feh(){},
fei:function fei(){},
fej:function fej(){},
fr7:function fr7(){},
fyO:function fyO(d){this.a=d},
fbU:function fbU(d){this.a=d},
Gg:function Gg(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bJM:function bJM(d){this.a=d},
hR2(d,e,f,g,h,i,j){return A.a9(d,!1).cp(A.eF(new C.frD(j,i,f,e,h,g),!0,null,x.H))},
Pi(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Pi=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Pl(h,g),$async$Pi)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.aa(k)>=6){d.I(x.q).f.P(D.aJf)
u=!1
w=1
break}w=4
return A.b(C.h62(d,f,e),$async$Pi)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ae_(h,g),$async$Pi)
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
return A.b(C.zY(h,r,p),$async$Pi)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.PR(h,r,new C.Gg("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Pi)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Pi,v)},
frD:function frD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Xr:function Xr(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ax6:function ax6(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d0c:function d0c(d){this.a=d},
d0b:function d0b(d,e){this.a=d
this.b=e},
d00:function d00(d,e){this.a=d
this.b=e},
d_Y:function d_Y(d,e){this.a=d
this.b=e},
d_z:function d_z(d){this.a=d},
d_A:function d_A(d,e){this.a=d
this.b=e},
d01:function d01(d){this.a=d},
d_I:function d_I(d){this.a=d},
d_G:function d_G(d){this.a=d},
d_H:function d_H(d){this.a=d},
d_J:function d_J(d){this.a=d},
d_Z:function d_Z(d){this.a=d},
d0_:function d0_(){},
d_E:function d_E(d){this.a=d},
d_F:function d_F(d,e){this.a=d
this.b=e},
d_K:function d_K(d){this.a=d},
d_L:function d_L(d,e){this.a=d
this.b=e},
d0a:function d0a(d){this.a=d},
d09:function d09(d,e){this.a=d
this.b=e},
d08:function d08(d){this.a=d},
d_V:function d_V(d){this.a=d},
d_U:function d_U(d){this.a=d},
d_W:function d_W(d){this.a=d},
d_B:function d_B(d,e){this.a=d
this.b=e},
d_X:function d_X(d,e){this.a=d
this.b=e},
d_O:function d_O(d){this.a=d},
d_P:function d_P(d){this.a=d},
d_N:function d_N(){},
d_Q:function d_Q(d){this.a=d},
d_R:function d_R(d){this.a=d},
d_S:function d_S(d,e){this.a=d
this.b=e},
d_T:function d_T(d,e,f){this.a=d
this.b=e
this.c=f},
d_M:function d_M(d,e){this.a=d
this.b=e},
d03:function d03(d){this.a=d},
d02:function d02(){},
d04:function d04(d){this.a=d},
d05:function d05(d){this.a=d},
d06:function d06(d){this.a=d},
d07:function d07(d,e){this.a=d
this.b=e},
d_C:function d_C(d){this.a=d},
d_D:function d_D(d){this.a=d},
Xv:function Xv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbj:function bbj(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d1D:function d1D(d){this.a=d},
d1E:function d1E(d){this.a=d},
d1C:function d1C(d){this.a=d},
d1F:function d1F(d){this.a=d},
d1B:function d1B(d){this.a=d},
d1G:function d1G(d){this.a=d},
d1A:function d1A(d){this.a=d},
d1H:function d1H(d,e){this.a=d
this.b=e},
d1z:function d1z(d,e){this.a=d
this.b=e},
d1I:function d1I(d,e){this.a=d
this.b=e},
Xt:function Xt(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
acu:function acu(d,e,f){this.a=d
this.b=e
this.c=f},
ax7:function ax7(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d0r:function d0r(d,e){this.a=d
this.b=e},
d0q:function d0q(d,e){this.a=d
this.b=e},
d0v:function d0v(d){this.a=d},
d0u:function d0u(d,e){this.a=d
this.b=e},
d0s:function d0s(d){this.a=d},
d0t:function d0t(d){this.a=d},
d0w:function d0w(d){this.a=d},
d0x:function d0x(d){this.a=d},
d0p:function d0p(d,e){this.a=d
this.b=e},
d0o:function d0o(d,e){this.a=d
this.b=e},
Iu:function Iu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WK:function WK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
czY:function czY(d){this.a=d},
czZ:function czZ(){},
cA_:function cA_(d){this.a=d},
b8B:function b8B(d,e,f){this.b=d
this.c=e
this.a=f},
b8s:function b8s(d,e){this.b=d
this.a=e},
tI:function tI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
X1:function X1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8z:function b8z(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cTp:function cTp(d,e,f){this.a=d
this.b=e
this.c=f},
cTo:function cTo(d,e){this.a=d
this.b=e},
cTO:function cTO(d){this.a=d},
cTB:function cTB(){},
cTP:function cTP(d){this.a=d},
cTA:function cTA(){},
cTQ:function cTQ(d,e){this.a=d
this.b=e},
cTz:function cTz(d,e){this.a=d
this.b=e},
cTR:function cTR(d,e){this.a=d
this.b=e},
cTy:function cTy(d,e){this.a=d
this.b=e},
cTS:function cTS(d){this.a=d},
cTx:function cTx(){},
cTT:function cTT(d,e){this.a=d
this.b=e},
cTw:function cTw(d,e){this.a=d
this.b=e},
cTU:function cTU(d){this.a=d},
cTJ:function cTJ(d,e){this.a=d
this.b=e},
cTV:function cTV(d){this.a=d},
cTW:function cTW(d){this.a=d},
cTY:function cTY(d){this.a=d},
cTZ:function cTZ(d){this.a=d},
cTI:function cTI(d,e){this.a=d
this.b=e},
cU_:function cU_(d,e){this.a=d
this.b=e},
aDY:function aDY(d){this.a=d},
bdM:function bdM(d){this.a=d},
b6P:function b6P(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hHz(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.afs(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.m(0,u.a,u)}t=A.bw(new A.Q(Date.now(),0,!1))
s=new C.fcu(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a3<1>"),q=q.k("cV<1,n>"),o=q.k("G.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wR)m.push(l===D.WW?"male":"female")
l=u.w
k=A.ae(a3,!0,!1,!1,!1).cz(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ae(a3,!0,!1,!1,!1).cz(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jN(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jN(h,a2,a2)-A.jN(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.A(new A.cV(new A.a3(a4,new C.fcs(u,f),p),new C.fct(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.an(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hHA(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.afs(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.m(0,s.a,s)}r=new C.fcz(v,e)
q=new C.fcx(v)
p=A.T(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.K)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.m(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.K)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.m(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.K)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.ak(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ak(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.m(0,s.a,d)}}d=p.$ti.k("bg<2>")
d=A.d7(new A.bg(p,d),d.k("G.E"))
n=A.A(d,A.a2(d).k("cl.E"))
B.d.fn(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gah(e),k=new A.hL(l,new C.fcy(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ak(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
htt(d,e,f,g){var w,v,u=C.hHB(d,e)
if(u<=0||f.length<=u)return new A.ac4(!1,D.B2,f)
if(g.t(0,e.a))return new A.ac4(!1,D.B2,f)
w=A.U(f).c
v=A.dc(f,0,A.dH(u,"count",x.S),w).dA(0)
return new A.ac4(!0,A.dc(f,u,null,w).dA(0),v)},
htu(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.afs(d3),d2=d1.length
if(d2===0)return D.fix
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.ce(0,t.a,new C.d0E(t))}s=new C.d0V(v)
d2=x.h
r=A.T(w,d2)
q=new C.d0N(r)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d0M(r)
l=A.T(w,x.do)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cb(l.ce(0,k,new C.d0F()),o)}h=new C.d0L(s)
g=new C.d0K(l,r)
p=v.$ti.k("bg<2>")
o=p.k("a3<G.E>")
f=A.A(new A.a3(new A.bg(v,p),new C.d0G(h),o),o.k("G.E"))
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
a9=new C.d0T(new C.d0P(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dv(v,v.r,v.e),j=a2.gahQ(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eP([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.K(0,i))break}if(h.$1(b0)&&a2.ak(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qH(J.dE(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.cc)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.d0D(a2,new C.d0U(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=b4.$ti.k("cv<1>")
d2=A.A(new A.cv(b4,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.m(0,b8,new C.Ey(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.IC(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cv<1>")
d2=A.A(new A.cv(b6,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.m(0,b8,o+c2)}c6=A.a([],x.E)
a3.bG(0,new C.d0H(c6,b4))
for(d2=new A.cR(a4,a4.$ti.k("cR<1,2>")).gah(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aU(c7.b);j.C();){i=j.gT(j)
if(b6.ak(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gah(b5),i=new A.hL(j,new C.d0I(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.b_(o,new C.d0J())
c6.push(new C.aG2(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bb3(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
h1P(d){var w=A.ae("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cz(d)
return w==null?null:w.b[1]},
fXi(d,e,f,g,h,i,j,k,l,m,n){return new C.Y4(k,f,j,e,l,n,m,d,g,h,i,null)},
az0(d,e,f,g,h,i,j){return new C.beI(i,d,e,f,j,h,g,null)},
an2:function an2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAA:function aAA(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dMp:function dMp(d){this.a=d},
dMo:function dMo(d){this.a=d},
dMr:function dMr(d,e){this.a=d
this.b=e},
dMs:function dMs(d,e){this.a=d
this.b=e},
dMt:function dMt(d){this.a=d},
dMn:function dMn(d,e){this.a=d
this.b=e},
dMq:function dMq(d){this.a=d},
dMv:function dMv(d){this.a=d},
dMu:function dMu(d,e){this.a=d
this.b=e},
amX:function amX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAx:function aAx(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dLQ:function dLQ(d){this.a=d},
dLO:function dLO(d){this.a=d},
dLP:function dLP(d){this.a=d},
dLR:function dLR(d,e){this.a=d
this.b=e},
dLL:function dLL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLj:function dLj(d){this.a=d},
dLk:function dLk(d,e){this.a=d
this.b=e},
dLy:function dLy(d){this.a=d},
dLw:function dLw(d){this.a=d},
dLx:function dLx(d,e){this.a=d
this.b=e},
dLz:function dLz(d){this.a=d},
dLA:function dLA(d,e){this.a=d
this.b=e},
dLK:function dLK(d,e){this.a=d
this.b=e},
dLI:function dLI(d,e){this.a=d
this.b=e},
dLH:function dLH(d,e){this.a=d
this.b=e},
dLD:function dLD(d,e){this.a=d
this.b=e},
dLC:function dLC(d){this.a=d},
dLE:function dLE(d,e){this.a=d
this.b=e},
dLB:function dLB(d){this.a=d},
dLF:function dLF(d){this.a=d},
dLG:function dLG(d){this.a=d},
dLJ:function dLJ(d,e){this.a=d
this.b=e},
dL7:function dL7(d,e){this.a=d
this.b=e},
dL8:function dL8(d,e){this.a=d
this.b=e},
dLT:function dLT(d,e,f){this.a=d
this.b=e
this.c=f},
dLN:function dLN(d,e,f){this.a=d
this.b=e
this.c=f},
dLM:function dLM(d){this.a=d},
dL9:function dL9(d){this.a=d},
dLa:function dLa(d){this.a=d},
dLb:function dLb(){},
dLc:function dLc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLg:function dLg(d,e){this.a=d
this.b=e},
dLf:function dLf(d,e){this.a=d
this.b=e},
dLe:function dLe(d){this.a=d},
dLh:function dLh(d,e){this.a=d
this.b=e},
dLd:function dLd(d){this.a=d},
dLS:function dLS(d){this.a=d},
dLt:function dLt(){},
dLu:function dLu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLs:function dLs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLo:function dLo(d,e,f){this.a=d
this.b=e
this.c=f},
dLn:function dLn(d,e,f){this.a=d
this.b=e
this.c=f},
dLl:function dLl(d,e){this.a=d
this.b=e},
dLp:function dLp(d){this.a=d},
dLq:function dLq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLm:function dLm(d,e){this.a=d
this.b=e},
dLr:function dLr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLv:function dLv(d,e){this.a=d
this.b=e},
dM_:function dM_(){},
dM0:function dM0(d,e){this.a=d
this.b=e},
dM1:function dM1(d){this.a=d},
dM2:function dM2(d,e){this.a=d
this.b=e},
dLW:function dLW(d){this.a=d},
dLU:function dLU(d,e){this.a=d
this.b=e},
dLX:function dLX(d,e){this.a=d
this.b=e},
dLY:function dLY(d,e){this.a=d
this.b=e},
dLZ:function dLZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dM3:function dM3(d){this.a=d},
dLV:function dLV(d){this.a=d},
dLi:function dLi(d){this.a=d},
bb1:function bb1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d0B:function d0B(d){this.a=d},
d0A:function d0A(d,e){this.a=d
this.b=e},
d0C:function d0C(d){this.a=d},
d0z:function d0z(d,e){this.a=d
this.b=e},
fcu:function fcu(d,e){this.a=d
this.b=e},
fcv:function fcv(d){this.a=d},
fcw:function fcw(){},
fcs:function fcs(d,e){this.a=d
this.b=e},
fct:function fct(){},
fcz:function fcz(d,e){this.a=d
this.b=e},
fcA:function fcA(d){this.a=d},
fcB:function fcB(){},
fcx:function fcx(d){this.a=d},
fcy:function fcy(d,e){this.a=d
this.b=e},
IC:function IC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ey:function Ey(d,e){this.a=d
this.b=e},
bb3:function bb3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d0E:function d0E(d){this.a=d},
d0V:function d0V(d){this.a=d},
d0N:function d0N(d){this.a=d},
d0O:function d0O(){},
d0M:function d0M(d){this.a=d},
d0F:function d0F(){},
d0L:function d0L(d){this.a=d},
d0K:function d0K(d,e){this.a=d
this.b=e},
d0G:function d0G(d){this.a=d},
d0P:function d0P(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d0Q:function d0Q(d){this.a=d},
d0R:function d0R(d){this.a=d},
d0S:function d0S(){},
d0T:function d0T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d0U:function d0U(){},
d0D:function d0D(d,e,f,g,h,i,j,k,l,m){var _=this
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
d0H:function d0H(d,e){this.a=d
this.b=e},
d0I:function d0I(d){this.a=d},
d0J:function d0J(){},
aG2:function aG2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bb4:function bb4(d,e){this.b=d
this.a=e},
d0W:function d0W(){},
d0X:function d0X(d){this.a=d},
d0Y:function d0Y(d){this.a=d},
d0Z:function d0Z(){},
beJ:function beJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ba9:function ba9(d,e){this.b=d
this.a=e},
bsb:function bsb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eX9:function eX9(d){this.a=d},
bi0:function bi0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eyP:function eyP(d){this.a=d},
eyO:function eyO(d,e){this.a=d
this.b=e},
Y4:function Y4(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayZ:function ayZ(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dgc:function dgc(d,e){this.a=d
this.b=e},
dgb:function dgb(d){this.a=d},
dg9:function dg9(d){this.a=d},
dga:function dga(d){this.a=d},
dgl:function dgl(d){this.a=d},
dgm:function dgm(d){this.a=d},
dgk:function dgk(d,e){this.a=d
this.b=e},
dgn:function dgn(){},
dgq:function dgq(d){this.a=d},
dgj:function dgj(d,e){this.a=d
this.b=e},
dgp:function dgp(){},
dgr:function dgr(d){this.a=d},
dgi:function dgi(d,e){this.a=d
this.b=e},
dgs:function dgs(d){this.a=d},
dgh:function dgh(d){this.a=d},
dgt:function dgt(d){this.a=d},
dgg:function dgg(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgf:function dgf(d){this.a=d},
dgv:function dgv(d){this.a=d},
dge:function dge(d){this.a=d},
dgw:function dgw(d){this.a=d},
dgd:function dgd(d,e){this.a=d
this.b=e},
dgo:function dgo(d){this.a=d},
aaX:function aaX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beI:function beI(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aaW:function aaW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
beH:function beH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dgx:function dgx(d){this.a=d},
dgy:function dgy(d,e){this.a=d
this.b=e},
az_:function az_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aF5:function aF5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aaY:function aaY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dgH:function dgH(d){this.a=d},
Iq:function Iq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fSf(d){var w=d.R,v=x.N
return w.iH(w,new C.c3U(),v,v)},
hl4(d){var w=d.bB
if(w>=0)return w
return 5},
fSh(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fSf(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
fSg(d,e){var w=C.fSh(d,e)
if(w!=null&&w.c8(new A.Q(Date.now(),0,!1)))return!0
return!1},
hl5(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a_(C.fSf(d),w,w)
u=C.fSh(d,e)
t=u!=null&&u.c8(new A.Q(Date.now(),0,!1))?u:new A.Q(Date.now(),0,!1)
v.m(0,s,t.bN(A.dB(30,0,0,0,0,0).a).a5().ab())
d.R=v},
aWR(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aWR=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.l1(t,B.GC),$async$aWR)
case 3:if(l){u=!0
w=1
break}u=A.kG(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.GC,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWR,v)},
c3U:function c3U(){},
hl2(){var w,v=$.oZ(),u=J.e_(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"FT"+B.d.fN(u)},
H7(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$H7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$H7)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eW("ngmy_family_tree_backup_codes_v1",null,!1,B.bE),$async$H7)
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
return A.i($async$H7,v)},
a5a(d){return C.hl3(d)},
hl3(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a5a=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$a5a)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hv("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z),!1,!1,B.cD,null),$async$a5a)
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
return A.i($async$a5a,v)},
c3T(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c3T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.H7(),$async$c3T)
case 3:t=m.jk(f),t=t.gah(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a8(q)
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
return A.i($async$c3T,v)},
LU(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$LU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c3T(d),$async$LU)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.H7(),$async$LU)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dS(A.a_(q,p,o),p,o)
o.m(0,"active",!0)
o.m(0,"updatedAt",new A.Q(Date.now(),0,!1).a5().ab())
r.m(s,t,o)
w=9
return A.b(C.a5a(s),$async$LU)
case 9:case 8:u=t
w=1
break
case 5:n=C.hl2()
w=10
return A.b(C.H7(),$async$LU)
case 10:s=f
J.aE(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a5().ab(),"updatedAt",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.K))
w=11
return A.b(C.a5a(s),$async$LU)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LU,v)},
aWQ(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aWQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.H7(),$async$aWQ)
case 3:t=f
for(s=J.df(t),r=s.gdH(t),r=r.dA(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a5a(t),$async$aWQ)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aWQ,v)},
a5b(d,e,f){var w=0,v=A.j(x.H),u
var $async$a5b=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.an1(d,e),$async$a5b)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.LU(d),$async$a5b)
case 7:w=4
break
case 5:w=8
return A.b(C.aWQ(d),$async$a5b)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a5b,v)},
amW(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$amW=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.an1(f,e),$async$amW)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bY(),$async$amW)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.H7(),$async$amW)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a8(q)
if(!J.y(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amW,v)},
aWP(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aWP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bY(),$async$aWP)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.H7(),$async$aWP)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a8(t)
if(!J.y(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWP,v)},
hl6(){var w,v=$.oZ(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"FT"+B.d.fN(u)},
amZ(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$amZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$amZ)
case 3:if(!g){u=null
w=1
break}t=C.hl6()
w=4
return A.b(A.Ti(),$async$amZ)
case 4:s=g
r=B.dF.aG(B.R.am(d.eF(),null))
r=B.cR.gcs().aG(r)
q=e?999:2
J.aE(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.K))
w=5
return A.b(A.a5c(s),$async$amZ)
case 5:p=e?999:2
u=new A.Zf("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amZ,v)},
amY(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$amY=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Ti(),$async$amY)
case 3:p=a0
o=J.a8(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a8(n)
l=A.aM(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aWP(J.k(l==null?"":l),j),$async$amY)
case 4:if(!a0)$.al.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{r=B.c3.c6(0,B.cy.aG(t))
s=C.fSi(r)}catch(f){q=A.a6(f)
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
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a5().ab())
o.m(p,g,l)}w=5
return A.b(A.a5c(p),$async$amY)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amY,v)},
fSi(d){var w,v,u,t,s=null
try{w=B.R.aF(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hl8(A.a_(w,x.N,x.z))
return u}catch(t){v=A.a6(t)
$.al.$1("[family tree sync] parse: "+A.t(v))
return s}},
fCz(d){var w=0,v=A.j(x.m),u,t,s
var $async$fCz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.amY(t[1])
w=1
break}u=null
w=1
break}u=C.fSi(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fCz,v)},
hl8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d5(v,x.f)
u=A.cA(u,new C.c3W(),u.$ti.k("G.E"),x.k)
t=A.a2(u).k("a3<G.E>")
s=A.A(new A.a3(u,new C.c3X(),t),t.k("G.E"))}else s=A.a([],x._)
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
n=J.d5(l,u)
n=A.cA(n,new C.c3Y(),n.$ti.k("G.E"),o)
k=A.a2(n).k("a3<G.E>")
j=A.A(new A.a3(n,new C.c3Z(),k),k.k("G.E"))
if(j.length!==0)q.m(0,m,j)}return new C.an_(h,w,s,r,q)},
an1(d,e){var w=0,v=A.j(x.y),u,t
var $async$an1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.LM(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zN(d),$async$an1)
case 3:u=t.cu(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$an1,v)},
c44(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c44=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zN(d),$async$c44)
case 3:t=s.b5(f,new C.c45(),x.cs)
t=A.A(t,t.$ti.k("ai.E"))
B.d.b_(t,new C.c46())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c44,v)},
Tj(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Tj=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.an1(e,d),$async$Tj)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.LU(e),$async$Tj)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.zN(e),$async$Tj)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dE(r,new C.c42(g))
r=A.A(t,t.$ti.k("G.E"))}t=J.a8(r)
if(t.gai(r)){u=null
w=1
break}t=t.di(r,new C.c43(e),x.k)
r=A.A(t,t.$ti.k("ai.E"))
q=A.T(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Jm(e,o),$async$Tj)
case 14:n=i
if(J.cu(n))q.m(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.an_(s,B.a.i(e.toLowerCase()),r,new A.Q(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Tj,v)},
aWU(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aWU=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Tj(d,e,f,g),$async$aWU)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.Fd(A.Iy(q.eF(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWU,v)},
aWT(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aWT=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Tj(d,e,f,g),$async$aWT)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.amZ(r,f),$async$aWT)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aD6(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWT,v)},
Tk(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Tk=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fCz(a0),$async$Tk)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.amW(g.a,d,e,f,s,r),$async$Tk)
case 6:if(!a2){if(r)throw A.R(A.ba("This backup expired or the sender's tree is no longer available."))
throw A.R(A.ba("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bxw(e,j),$async$Tk)
case 12:case 11:w=13
return A.b(C.aff(e,j,s),$async$Tk)
case 13:h=n.h(0,i)
w=h!=null&&J.cu(h)?14:15
break
case 14:w=16
return A.b(C.zY(e,i,h),$async$Tk)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.blw(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Tk,v)},
an_:function an_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c40:function c40(){},
c41:function c41(){},
c4_:function c4_(){},
c3W:function c3W(){},
c3X:function c3X(){},
c3Y:function c3Y(){},
c3Z:function c3Z(){},
c45:function c45(){},
c46:function c46(){},
c42:function c42(d){this.a=d},
c43:function c43(d){this.a=d},
fKG(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fb(null,x.H)
return A.ho(d,new C.an0(w,e,g,i,f,h,null),!0,null,x.H)},
d0y(d,e,f,g,h,i,j,k){return new C.bb0(i,e,k,j,g,f,h,d,null)},
an0:function an0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAz:function aAz(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dMc:function dMc(d){this.a=d},
dMd:function dMd(d,e,f){this.a=d
this.b=e
this.c=f},
dMh:function dMh(d,e){this.a=d
this.b=e},
dMi:function dMi(d){this.a=d},
dM9:function dM9(d){this.a=d},
dMa:function dMa(d,e){this.a=d
this.b=e},
dMb:function dMb(d,e){this.a=d
this.b=e},
dMg:function dMg(d){this.a=d},
dMf:function dMf(d,e){this.a=d
this.b=e},
dMe:function dMe(){},
dMk:function dMk(d){this.a=d},
dMl:function dMl(d,e){this.a=d
this.b=e},
dMj:function dMj(d,e){this.a=d
this.b=e},
d1_:function d1_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bb2:function bb2(d,e,f){this.d=d
this.e=e
this.a=f},
aae:function aae(d,e,f){this.c=d
this.d=e
this.a=f},
bb0:function bb0(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bb5:function bb5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Yp:function Yp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAy:function aAy(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dM4:function dM4(d,e){this.a=d
this.b=e},
dM5:function dM5(d){this.a=d},
dM6:function dM6(d){this.a=d},
dM7:function dM7(d){this.a=d},
dM8:function dM8(d){this.a=d},
Yq:function Yq(d){this.a=d},
bg8:function bg8(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dMm:function dMm(d,e){this.a=d
this.b=e},
aVq(d,e){return new C.aVp(d,e,null)},
aVp:function aVp(d,e,f){this.c=d
this.d=e
this.a=f},
hK_(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aY(d,11)},
hRc(d){return A.c1(B.K,null,new C.fs5(new C.tc(A.M(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fU8(d,e){return new C.apS(e,d,null)},
aNf(d,e,f,g,h,i,j){var w=C.hK_(i)
if(w!=null)return A.bt(e,new A.a4(j,f,new C.a4e(w,!0,null),null),B.ap)
return K.aMB(e,B.bQ,f,g,h,i,j)},
lk:function lk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4e:function a4e(d,e,f){this.c=d
this.d=e
this.a=f},
bfR:function bfR(d,e){var _=this
_.e=_.d=$
_.cP$=d
_.b0$=e
_.c=_.a=null},
dyc:function dyc(d){this.a=d},
dyd:function dyd(){},
dye:function dye(d,e){this.a=d
this.b=e},
bfQ:function bfQ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fs5:function fs5(d){this.a=d},
fs4:function fs4(d,e){this.a=d
this.b=e},
fs3:function fs3(d,e){this.a=d
this.b=e},
fs2:function fs2(d,e){this.a=d
this.b=e},
apS:function apS(d,e,f){this.c=d
this.d=e
this.a=f},
cby:function cby(d,e){this.a=d
this.b=e},
aIo:function aIo(){},
hQY(d){var w=null
return A.ch(w,w,!0,w,new C.frv(),d,w,!0,!0,x.e2)},
hS8(d,e,f,g,h){var w=null
return A.ch(w,w,!0,w,new C.fyG(h,g,f,e),d,w,!0,!0,x.N)},
hR_(d,e){var w=null
return A.ch(w,w,!0,w,new C.frx(e),d,w,!0,!0,x.dY)},
hQZ(d){var w=null
return A.ch(w,w,!0,w,new C.frw(),d,w,!0,!0,x.c5)},
aQ5:function aQ5(d,e){this.a=d
this.b=e},
aQ4:function aQ4(d){this.a=d},
aOa:function aOa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frv:function frv(){},
fyG:function fyG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frx:function frx(d){this.a=d},
frw:function frw(){},
X3:function X3(d,e){this.c=d
this.a=e},
avU:function avU(){var _=this
_.d=$
_.c=_.a=_.e=null},
cUb:function cUb(d){this.a=d},
cUc:function cUc(d){this.a=d},
cUa:function cUa(d,e){this.a=d
this.b=e},
cUd:function cUd(d){this.a=d},
cUe:function cUe(d){this.a=d},
X2:function X2(d){this.a=d},
avT:function avT(){this.d=$
this.c=this.a=null},
cU7:function cU7(d){this.a=d},
cU8:function cU8(d){this.a=d},
cU9:function cU9(d){this.a=d},
WB:function WB(d){this.a=d},
auD:function auD(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
crL:function crL(){},
crR:function crR(d){this.a=d},
crS:function crS(d){this.a=d},
crT:function crT(d){this.a=d},
crQ:function crQ(){},
crU:function crU(d){this.a=d},
crV:function crV(d){this.a=d},
crP:function crP(){},
crW:function crW(d,e){this.a=d
this.b=e},
crO:function crO(d,e){this.a=d
this.b=e},
crM:function crM(d,e){this.a=d
this.b=e},
crX:function crX(d){this.a=d},
crN:function crN(){},
crY:function crY(d){this.a=d},
a_8:function a_8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bs3:function bs3(){this.d=$
this.c=this.a=null},
eWC:function eWC(d,e){this.a=d
this.b=e},
eWD:function eWD(d){this.a=d},
eWE:function eWE(d,e){this.a=d
this.b=e},
a9i:function a9i(d,e){this.a=d
this.b=e},
El:function El(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bs1:function bs1(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
eWA:function eWA(d,e){this.a=d
this.b=e},
auw:function auw(d,e){this.c=d
this.a=e},
bs2:function bs2(d,e){var _=this
_.d=$
_.bp$=d
_.a6$=e
_.c=_.a=null},
eWB:function eWB(d){this.a=d},
bs0:function bs0(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aKw:function aKw(){},
aKx:function aKx(){},
bzp(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.by(u),s=B.o.E(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.og(B.o.u(t),A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fql(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aU(B.o.u(s),2,"0")
n.push(A.dl(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.W0(A.dl(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aMS(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aMS=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hS().kF(85,1280,B.eD),$async$aMS)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f8(),$async$aMS)
case 8:r=e
if(J.aa(r)===0){u=null
w=1
break}q=C.fU7()
w=9
return A.b(C.cbx(q,r),$async$aMS)
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
return A.i($async$aMS,v)},
aNd(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aNd=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.cbu(g)
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
return A.b($.V().K5(p,!0,null,i).cK(0,B.fK),$async$aNd)
case 9:n=a1
w=10
return A.b(n.lT(),$async$aNd)
case 10:m=a1
w=11
return A.b(J.aNX(m).hf(B.fO),$async$aNd)
case 11:l=a1
J.aNX(m).q()
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
return A.i($async$aNd,v)},
fql:function fql(){},
tc:function tc(d){this.a=d},
apR:function apR(d,e,f){this.c=d
this.d=e
this.a=f},
aC0:function aC0(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
evZ:function evZ(d,e){this.a=d
this.b=e},
evQ:function evQ(d){this.a=d},
evR:function evR(d){this.a=d},
evX:function evX(d,e){this.a=d
this.b=e},
evW:function evW(d,e){this.a=d
this.b=e},
evT:function evT(d,e){this.a=d
this.b=e},
evS:function evS(d,e){this.a=d
this.b=e},
evU:function evU(d){this.a=d},
evV:function evV(d,e){this.a=d
this.b=e},
evY:function evY(d,e){this.a=d
this.b=e},
evL:function evL(d,e){this.a=d
this.b=e},
evP:function evP(d){this.a=d},
evO:function evO(d,e){this.a=d
this.b=e},
evN:function evN(d){this.a=d},
ew_:function ew_(d,e){this.a=d
this.b=e},
ew0:function ew0(d,e){this.a=d
this.b=e},
evM:function evM(d,e){this.a=d
this.b=e},
h5y(d,e,f){var w="thumbnailPath",v=e.ac()
if(f!=null&&f.length!==0)v.m(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.Q(Date.now(),0,!1).a5().ab(),"project",v],x.N,x.z)},
fqm(d,e,f){var w=0,v=A.j(x.N),u
var $async$fqm=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.am(C.h5y(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fqm,v)},
bzr(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bzr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fqm(!0,d,e),$async$bzr)
case 4:w=3
return A.b(r.apP(g,d,e.a),$async$bzr)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dF.aG(B.R.am(C.h5y(d,e,null),null))
u="NGMY_WS:"+B.jX.gcs().aG(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzr,v)},
fYD(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fKn(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.aa(s)===0)return!1
if(J.cX(s,"NGMYWSSYNC2|"))return!0
if(J.cX(s,"NGMY_WS:"))return!0
if(J.eT(s,t))return!0
if(J.cX(s,"{"))try{w=B.R.aF(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hP1(d){var w,v,u,t=C.fYD(d)
if(t==null)return null
if(C.fKn(t))return t
w=B.a.cJ(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aY(t,w))
if(C.fKn(v))return v}u=B.a.cJ(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aY(t,u))
if(C.fKn(v))return v}return null},
fKm(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.aa(q)===0)return r
if(J.cX(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cX(q,"NGMY_WS:")){v=B.c3.c6(0,B.cy.aG(J.mm(q,8)))
w=t.a(B.R.aF(0,v,r))}else w=t.a(B.R.aF(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fF4(A.a_(u,x.N,x.z))
return t}catch(s){return r}},
bzq(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bzq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.apO(t[1]),$async$bzq)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fKm(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fKm(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzq,v)},
fKl(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l4(w,v,d.c,d.d,new A.Q(Date.now(),0,!1))},
byY(){var w=0,v=A.j(x.o),u,t
var $async$byY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Fo(),$async$byY)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fKm(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byY,v)},
h6q(d,e,f,g){return A.c1(B.K,null,new C.fyy(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fyy:function fyy(d,e,f){this.a=d
this.b=e
this.c=f},
abi:function abi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ew2:function ew2(d,e){this.a=d
this.b=e},
ew3:function ew3(d,e){this.a=d
this.b=e},
ew4:function ew4(d,e){this.a=d
this.b=e},
ew5:function ew5(d,e){this.a=d
this.b=e},
ew1:function ew1(d){this.a=d},
apL:function apL(d,e,f){this.c=d
this.d=e
this.a=f},
bhu:function bhu(){var _=this
_.c=_.a=_.e=_.d=null},
evG:function evG(d,e){this.a=d
this.b=e},
evH:function evH(d){this.a=d},
evI:function evI(d){this.a=d},
apQ:function apQ(d){this.a=d},
aC_:function aC_(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
evK:function evK(d){this.a=d},
evJ:function evJ(d){this.a=d},
hoj(d,e,f,g,h){return new C.Mv(h,g,d,e,f,null)},
aGK:function aGK(d,e){this.a=d
this.b=e},
Mv:function Mv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aC1:function aC1(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
ews:function ews(){},
ewo:function ewo(d,e){this.a=d
this.b=e},
ewp:function ewp(d){this.a=d},
ew9:function ew9(d){this.a=d},
ew7:function ew7(d){this.a=d},
ew8:function ew8(d){this.a=d},
ewi:function ewi(d,e){this.a=d
this.b=e},
ewf:function ewf(d,e){this.a=d
this.b=e},
ewg:function ewg(d,e){this.a=d
this.b=e},
ewh:function ewh(d,e,f){this.a=d
this.b=e
this.c=f},
ewd:function ewd(d,e,f){this.a=d
this.b=e
this.c=f},
ewb:function ewb(d){this.a=d},
ewc:function ewc(d){this.a=d},
ewe:function ewe(d){this.a=d},
ewv:function ewv(d){this.a=d},
ewu:function ewu(d){this.a=d},
eww:function eww(d){this.a=d},
ewt:function ewt(d){this.a=d},
ew6:function ew6(d){this.a=d},
ewa:function ewa(d,e){this.a=d
this.b=e},
ewr:function ewr(d,e){this.a=d
this.b=e},
ewq:function ewq(d,e){this.a=d
this.b=e},
ewl:function ewl(d){this.a=d},
ewm:function ewm(d){this.a=d},
ewn:function ewn(d,e){this.a=d
this.b=e},
ewk:function ewk(d,e){this.a=d
this.b=e},
ewj:function ewj(d,e,f){this.a=d
this.b=e
this.c=f},
btP:function btP(){},
zD(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ae("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
adJ(d,e,f){return C.hDG(d,e,f)},
hDG(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$adJ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$adJ)
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
return A.i($async$adJ,v)},
adI(d,e){return C.hDF(d,e)},
hDF(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$adI=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$adI)
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
return A.i($async$adI,v)},
hCs(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QY(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bwx(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bwx=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b_5(q),$async$bwx)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aNd(q,!1),$async$bwx)
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
return A.i($async$bwx,v)},
hce(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aM(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qs(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qs(p,J.k(u==null?"":u),1,o,q)},
fF4(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d5(s,x.f)
w=A.cA(w,new C.cr9(),w.$ti.k("G.E"),x.Q)
v=A.a2(w).k("a3<G.E>")
r=A.A(new A.a3(w,new C.cra(),v),v.k("G.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.l4(w,v,u,r,t==null?new A.Q(Date.now(),0,!1):t)},
hHv(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.WW
case"female":case"f":return D.af5
default:return D.wR}},
h2g(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fOo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hHv(v==null?j:J.k(v))
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
hHx(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.KQ
case"viewer":return D.k7
default:return D.rY}},
hHy(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Fe(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bxM(d,e){return B.a.i(e.toLowerCase())===C.Fe(d,e)&&d.y!==D.k7},
tp(d,e){var w,v=d.y
if(v===D.k7)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Fe(d,e))return!0
if(v===D.KQ)return!0
v=d.e
return new A.J(v,A.fKr(),A.U(v).k("J<1,n>")).t(0,w)},
hGY(d){return J.dE(d,new C.fbM()).gJ(0)},
fyV(d){var w=0,v=A.j(x.y),u,t
var $async$fyV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zN(d),$async$fyV)
case 3:u=t.rq(f,new C.fyW(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyV,v)},
bxw(d,e){var w=0,v=A.j(x.H),u,t
var $async$bxw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zN(d),$async$bxw)
case 3:t=g
if(J.rq(t,new C.faY(e))){w=1
break}if(C.hGY(t)>=2)throw A.R(A.ba("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bxw,v)},
aij(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d5(n,x.f)
w=A.cA(w,new C.bJN(),w.$ti.k("G.E"),x.P)
v=A.a2(w).k("a3<G.E>")
m=A.A(new A.a3(w,new C.bJO(),v),v.k("G.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b5(u,new C.bJP(),x.N)
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
return new C.ko(l,w,v,!s,t,m,r,q,p,C.hHx(o==null?null:J.k(o)))},
h2p(d){var w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.an(v,0,8)},
BQ(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$BQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.PP(d),$async$BQ)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ax(),$async$BQ)
case 4:t=f
w=5
return A.b(t.a3L(0),$async$BQ)
case 5:w=6
return A.b(C.f35(t,l),$async$BQ)
case 6:s=f
if(J.cu(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aS(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fZb(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.of(l,n),$async$BQ)
case 11:u=n
w=1
break
case 10:case 8:m=A.aS(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.fZb(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.of(l,n),$async$BQ)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$BQ,v)},
f35(d,e){return C.hA_(d,e)},
hA_(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f35=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aS(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zD(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.R.aF(0,a5,null)
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
l=B.R.aF(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fF4(A.a_(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aS(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zD(a9)+"_"+n))
i=C.hCs(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b_5(h),$async$f35)
case 17:g=b1
if(g!=null){i=i.QY(g)
p=!0}case 16:J.cb(q,i)
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
case 8:J.PZ(q,new C.f36())
if(p&&J.aa(q)!==0)C.of(a9,q)
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
return A.i($async$f35,v)},
bxW(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bxW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.PP(d),$async$bxW)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.BQ(r),$async$bxW)
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
return A.i($async$bxW,v)},
fZb(d){var w,v,u,t
try{w=B.R.aF(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d5(w,x.f)
v=A.cA(v,new C.eZR(),v.$ti.k("G.E"),x.i)
u=A.a2(v).k("a3<G.E>")
v=A.A(new A.a3(v,new C.eZS(),u),u.k("G.E"))
B.d.b_(v,new C.eZT())
return v}catch(t){v=A.a([],x.D)
return v}},
of(d,e){return C.hQO(d,e)},
hQO(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$of=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.PP(b2),$async$of)
case 3:a8=b5
if(J.aa(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ax(),$async$of)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zD(a8)
p=A.aS(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b5(x.j.a(B.R.aF(0,p,null)),new C.frm(),a2).fH(0)
a2=J.b5(b3,new C.frn(),a2).bZ(0,new C.fro())
n=A.d7(a2,a2.$ti.k("G.E"))
a2=o,a2=A.eg(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eT(n,m)?17:18
break
case 17:a5=C.zD(a8)
l=A.aS(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a6r(l),$async$of)
case 19:t=21
a5=C.zD(a8)
k=A.aS(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aF(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a6r(a5==null?null:J.k(a5)),$async$of)
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
return A.b(C.adI(r,"ngmy_worksheet_item_v3_"+C.zD(a8)+"_"+m),$async$of)
case 29:w=30
return A.b(C.adI(r,"ngmy_worksheet_thumb_v3_"+C.zD(a8)+"_"+m),$async$of)
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
return A.b(C.bwx(h),$async$of)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.adJ(r,"ngmy_worksheet_thumb_v3_"+C.zD(a8)+"_"+a4,f),$async$of)
case 40:g=i.QY(f)
w=38
break
case 39:$.al.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.adI(r,"ngmy_worksheet_thumb_v3_"+C.zD(a8)+"_"+a4),$async$of)
case 41:g=i.QY(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.adI(r,"ngmy_worksheet_thumb_v3_"+C.zD(a8)+"_"+a4),$async$of)
case 42:case 34:a4=i.a
w=43
return A.b(C.adJ(r,"ngmy_worksheet_item_v3_"+C.zD(a8)+"_"+a4,B.R.am(g.ac(),null)),$async$of)
case 43:e=b5
if(!e){$.al.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cb(q,i.a)
w=31
break
case 32:w=44
return A.b(C.adJ(r,"ngmy_worksheets_index_v3_"+C.zD(a8),B.R.am(q,null)),$async$of)
case 44:d=b5
if(!d){$.al.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eE(b3,new C.frp(q))
a4=a3.$ti.k("cV<1,a1<n,@>>")
a7=A.A(new A.cV(a3,new C.frq(),a4),a4.k("G.E"))
a0=a7
w=45
return A.b(C.adJ(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.R.am(a0,null)),$async$of)
case 45:w=46
return A.b(J.hbk(r),$async$of)
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
return A.i($async$of,v)},
JO(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$JO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BQ(d),$async$JO)
case 3:t=g
s=J.cB(t)
r=s.bi(t,new C.fyU(e))
if(r===-1)s.ck(t,0,e)
else s.m(t,r,e)
u=C.of(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$JO,v)},
bxJ(d,e){var w=0,v=A.j(x.H),u
var $async$bxJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.BQ(d),$async$bxJ)
case 2:u=g
J.n4(u,new C.fcd(e))
w=3
return A.b(C.of(d,u),$async$bxJ)
case 3:return A.h(null,v)}})
return A.i($async$bxJ,v)},
Fg(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Fg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$Fg)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aS(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aF(0,i,null)
if(x.j.b(t)){j=J.d5(t,x.f)
j=A.cA(j,new C.fen(),j.$ti.k("G.E"),x.k)
s=A.a2(j).k("a3<G.E>")
r=A.A(new A.a3(j,new C.feo(),s),s.k("G.E"))
B.d.b_(r,new C.fep())
k=r}}catch(h){}w=4
return A.b(C.f_z(d),$async$Fg)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hAm(k,p,d)
j=A.U(o)
s=j.k("J<1,a1<n,@>>")
s=A.A(new A.J(o,new C.feq(),s),s.k("ai.E"))
n=B.R.am(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.P1(d,o),$async$Fg)
case 7:case 6:j=j.k("a3<1>")
m=A.A(new A.a3(o,new C.fer(d),j),j.k("G.E"))
if(m.length!==0)C.aLO(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Fg,v)},
fr8(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fr8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P1(d,e),$async$fr8)
case 3:t=J.dE(e,new C.fr9(d))
s=A.A(t,t.$ti.k("G.E"))
if(s.length===0){u=!0
w=1
break}u=C.aLO(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fr8,v)},
a0K(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0K=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ax(),$async$a0K)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aS(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aF(0,l,null)
if(x.j.b(u)){m=J.d5(u,x.f)
m=A.cA(m,new C.fyP(),m.$ti.k("G.E"),x.k)
t=A.a2(m).k("a3<G.E>")
s=A.A(new A.a3(m,new C.fyQ(),t),t.k("G.E"))
o=s}}catch(k){}q=J.pN(o,new C.fyR(e))
if(B.a.i(e.x).length===0&&C.tp(e,d)){m=B.a.i(d.toLowerCase())
p=e.aAp(e.y===D.k7?D.k7:D.rY,m)}else p=e
if(q===-1)J.p2(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.P1(d,o),$async$a0K)
case 3:w=C.tp(p,d)?4:5
break
case 4:w=6
return A.b(C.aLN(C.Fe(p,d),p),$async$a0K)
case 6:if(!g)$.al.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0K,v)},
aLX(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aLX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Fg(d),$async$aLX)
case 2:u=g
t=J.cB(u)
s=A.qH(t.eE(u,new C.fbV(e)))
t.bm(u,new C.fbW(e))
w=3
return A.b(C.P1(d,u),$async$aLX)
case 3:w=s!=null&&C.bxM(s,d)?4:5
break
case 4:w=6
return A.b(C.eZV(e),$async$aLX)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aLX,v)},
afs(d){var w=d.f,v=A.U(w).k("a3<1>")
w=A.A(new A.a3(w,new C.fz_(),v),v.k("G.E"))
return w},
fI7(d,e){var w,v=d.f,u=A.qH(new A.a3(v,new C.fbw(e),A.U(v).k("a3<1>")))
v=C.afs(d)
w=A.U(v).k("a3<1>")
v=A.A(new A.a3(v,new C.fbx(e,u),w),w.k("G.E"))
B.d.b_(v,new C.fby())
return v},
hHB(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h6t(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bi(C.fI7(d,u),new C.fyH(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hJ4(d,e){var w
if(e==null||e.length===0)return 1
w=C.fI7(d,e)
if(w.length===0)return 1
return new A.J(w,new C.ff9(),A.U(w).k("J<1,I>")).fv(0,B.z5)+1},
hQH(d){var w,v=C.afs(d)
if(v.length===0)return null
w=new A.a3(v,new C.fr5(),A.U(v).k("a3<1>"))
if(!w.gai(0))return w.gL(0)
return B.d.gL(v)},
hHw(d){return A.E(["id",d.a,"name",d.b,"gender",C.h2g(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hJ_(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.m(0,t.a,t)}s=A.a([],x.u)
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
d=q.aAk(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cAO(a1,w,a3.d,a2.y,s,a0,v)},
zN(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$zN)
case 3:q=f
p=B.a.gV(B.a.i(d.toLowerCase()))
o=A.aS(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aF(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d5(t,x.f)
p=A.cA(p,new C.fek(),p.$ti.k("G.E"),x.k)
s=A.a2(p).k("a3<G.E>")
p=A.A(new A.a3(p,new C.fel(),s),s.k("G.E"))
B.d.b_(p,new C.fem())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zN,v)},
aff(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aff=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.rY:D.k7
a7=C.Fe(b2,b3)
w=2
return A.b(C.zN(b1),$async$aff)
case 2:a8=b5
a9=J.cB(a8)
b0=a9.bi(a8,new C.fr3(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bxw(b1,b2),$async$aff)
case 5:case 4:if(b0===-1){u=b2.aAp(a6,a7)
a9.ck(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.K)(r),++p){o=r[p]
s.m(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.K)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.m(0,m,n)
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
s.m(0,m,l.aAk(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bg<2>")
s=A.A(new A.bg(s,k),k.k("G.E"))
k=a5?D.rY:D.k7
u=t.xG(q,m,b2.d,k,s,r,a7,b2.w)
a9.m(a8,b0,u)}w=6
return A.b(C.P1(b1,a8),$async$aff)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aLN(B.a.i(b3.toLowerCase()),u),$async$aff)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aff,v)},
fZx(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.Q(Date.now(),0,!1).a5().ab(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("J<1,a1<n,@>>"),k=A.A(new A.J(m,C.h5G(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a5().ab(),"updatedAt",o],r,x.K),"createdAt",s.a5().ab(),"updatedAt",o],r,x.z)},
fZy(d,e){var w=new A.Q(Date.now(),0,!1).a5().ab(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("J<1,a1<n,@>>")
u=A.A(new A.J(u,C.h5G(),t),t.k("ai.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a5().ab(),"updatedAt",w],x.N,x.z)},
hy_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.aij(A.a_(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fKr(),A.U(j).k("J<1,n>")).bZ(0,new C.f_m())
t=A.A(j,j.$ti.k("G.E"))
if(u===v)s=D.rY
else s=B.d.t(t,u)?D.KQ:D.k7
return w.aAp(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.aij(A.a_(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d5(q,h)
h=A.cA(h,new C.f_n(),h.$ti.k("G.E"),x.P)
p=A.a2(h).k("a3<G.E>")
o=A.A(new A.a3(h,new C.f_o(),p),p.k("G.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b5(n,new C.f_p(),x.N).bZ(0,new C.f_q())
t=A.A(h,h.$ti.k("G.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.rY
else s=B.d.t(t,u)?D.KQ:D.k7
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
f_z(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f_z=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.aa(a0)===0){u=null
w=1
break}t=4
r=new C.f_D()
h=x.N
g=x.z
w=7
return A.b(A.iD(A.a([A.la("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bE),r.$2(A.la("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bE),"collaborator"),r.$2(A.la("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bE),"public")],x.cl),x.U),$async$f_z)
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
h=A.cA(new A.bg(l,h),new C.f_A(a0),h.k("G.E"),x.k)
l=A.a2(h).k("a3<G.E>")
l=A.A(new A.a3(h,new C.f_B(),l),l.k("G.E"))
B.d.b_(l,new C.f_C())
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
return A.i($async$f_z,v)},
hAm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gai(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f3L(),v).bZ(0,new C.f3M())
t=A.d7(u,u.$ti.k("G.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Fe(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.k7){m=q.e
m=!new A.J(m,A.fKr(),A.U(m).k("J<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.m(0,p,q)}for(j=j.gah(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.m(0,u,v)
continue}k=C.hJ_(l,v)
o=C.Fe(k,w)
p=v.d
s.m(0,u,o===w?k.b71(p,D.rY):k.b71(p,v.y))}j=s.$ti.k("bg<2>")
j=A.A(new A.bg(s,j),j.k("G.E"))
B.d.b_(j,new C.f3N())
return j},
P1(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$P1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$P1)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b5(e,new C.f5N(),x.a)
s=A.A(s,s.$ti.k("ai.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.am(s,null)),$async$P1)
case 3:return A.h(null,v)}})
return A.i($async$P1,v)},
aLN(d,e){return C.hFm(d,e)},
hFm(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aLN=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lB("family_trees",A.a([C.fZx(e,d)],p),null,B.cD),$async$aLN)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lB("family_trees",A.a([C.fZy(e,d)],p),null,B.cD),$async$aLN)
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
return A.i($async$aLN,v)},
aLO(d,e){return C.hFn(d,e)},
hFn(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aLO=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("J<1,a1<n,@>>")
m=n.k("ai.E")
l=A.A(new A.J(e,new C.fak(d),n),m)
r=l
w=7
return A.b(A.lB("family_trees",r,null,B.cD),$async$aLO)
case 7:q=g
if(q){u=!0
w=1
break}k=A.A(new A.J(e,new C.fal(d),n),m)
p=k
w=8
return A.b(A.lB("family_trees",p,null,B.cD),$async$aLO)
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
return A.i($async$aLO,v)},
eZV(d){return C.hxo(d)},
hxo(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$eZV=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Pp("family_trees",A.E(["id",d],x.N,x.z),null,B.cD),$async$eZV)
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
return A.i($async$eZV,v)},
qs:function qs(d,e,f,g,h){var _=this
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
crc:function crc(){},
crb:function crb(){},
cr9:function cr9(){},
cra:function cra(){},
Gh:function Gh(d,e){this.a=d
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
aii:function aii(d,e){this.a=d
this.b=e},
fbM:function fbM(){},
fyW:function fyW(d){this.a=d},
faY:function faY(d){this.a=d},
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
bJR:function bJR(){},
bJQ:function bJQ(){},
bJN:function bJN(){},
bJO:function bJO(){},
bJP:function bJP(){},
f36:function f36(){},
eZR:function eZR(){},
eZS:function eZS(){},
eZT:function eZT(){},
frm:function frm(){},
frn:function frn(){},
fro:function fro(){},
frp:function frp(d){this.a=d},
frq:function frq(){},
fyU:function fyU(d){this.a=d},
fcd:function fcd(d){this.a=d},
fen:function fen(){},
feo:function feo(){},
fep:function fep(){},
feq:function feq(){},
fer:function fer(d){this.a=d},
fr9:function fr9(d){this.a=d},
fyP:function fyP(){},
fyQ:function fyQ(){},
fyR:function fyR(d){this.a=d},
fbV:function fbV(d){this.a=d},
fbW:function fbW(d){this.a=d},
fz_:function fz_(){},
fbw:function fbw(d){this.a=d},
fbx:function fbx(d,e){this.a=d
this.b=e},
fby:function fby(){},
fyH:function fyH(d){this.a=d},
ff9:function ff9(){},
fr5:function fr5(){},
fek:function fek(){},
fel:function fel(){},
fem:function fem(){},
fr3:function fr3(d){this.a=d},
f_m:function f_m(){},
f_n:function f_n(){},
f_o:function f_o(){},
f_p:function f_p(){},
f_q:function f_q(){},
f_D:function f_D(){},
f_E:function f_E(d){this.a=d},
f_A:function f_A(d){this.a=d},
f_B:function f_B(){},
f_C:function f_C(){},
f3L:function f3L(){},
f3M:function f3M(){},
f3N:function f3N(){},
f5N:function f5N(){},
fak:function fak(d){this.a=d},
fal:function fal(d){this.a=d},
crd:function crd(d,e){this.a=d
this.b=e},
cre:function cre(d,e){this.a=d
this.b=e},
aE2:function aE2(d,e,f){this.a=d
this.b=e
this.c=f},
b5h:function b5h(){this.b=this.a=0},
b5g:function b5g(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bs4:function bs4(){},
w3(d,e){var w,v
if(d==null)return""
w=d.bQ()
v=""+w.gcb()+"/"+w.gcr()+"/"+w.gcd()
if(!e)return v
return v+" "+B.a.aU(B.o.u(w.gmF()),2,"0")+":"+B.a.aU(B.o.u(w.gEZ()),2,"0")},
hog(){var w,v=$.oZ(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"WS"+B.d.fN(u)},
apM(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$apM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$apM)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eW("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bE),$async$apM)
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
return A.i($async$apM,v)},
apN(d){return C.hoh(d)},
hoh(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$apN=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$apN)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hv("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.z),!1,!1,B.cD,null),$async$apN)
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
return A.i($async$apN,v)},
apP(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bY(),$async$apP)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hog()
w=4
return A.b(C.apM(),$async$apP)
case 4:r=h
q=B.a.i(e)
p=B.dF.aG(t)
J.aE(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cR.gcs().aG(p),"usesRemaining",25,"createdAt",new A.Q(Date.now(),0,!1).a5().ab()],x.N,x.K))
w=5
return A.b(C.apN(r),$async$apP)
case 5:u=new A.Zf("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apP,v)},
apO(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$apO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bY(),$async$apO)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.apM(),$async$apO)
case 4:q=f
p=J.a8(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a8(o)
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
m.m(0,"usesRemaining",j)
m.m(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a5().ab())
p.m(q,i,m)}w=5
return A.b(C.apN(q),$async$apO)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apO,v)},
fU7(){var w=new A.Q(Date.now(),0,!1).a5()
return"wst_"+(1000*w.a+w.b)+"_"+B.cE.aC(999999)},
hoi(d){var w,v,u,t,s,r,q
try{w=A.ae6(d)
if(w==null)return d
v=w
if(J.JU(v)>960||J.JT(v)>960){s=v
r=J.JU(v)>=J.JT(v)?960:null
v=A.ae5(s,J.JT(v)>J.JU(v)?960:null,B.M6,r)}s=v
u=A.ajI(82).Rj(s,B.xB)
if(J.aa(u)===0)return d
s=new Uint8Array(A.cm(u))
return s}catch(q){t=A.a6(q)
$.al.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cbx(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cbx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hoi(e)
$.cbt.m(0,s,t)
u=C.bzt(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cbx,v)},
b_5(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b_5=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cX(l,"data:image")){u=null
w=1
break}t=4
r=J.eT(l,",")?B.d.gaj(J.lc(l,",")):l
q=B.cy.aG(r)
if(J.aa(q)===0){u=null
w=1
break}p=C.fU7()
w=7
return A.b(C.cbx(p,q),$async$b_5)
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
return A.i($async$b_5,v)},
cbu(d){var w=0,v=A.j(x.T),u,t,s
var $async$cbu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(K.cbw(s),$async$cbu)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cR.gcs().aG(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cbu,v)},
a6r(d){var w=0,v=A.j(x.H),u,t
var $async$a6r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=K.h5z(d)
if(t==null){w=1
break}$.cbt.W(0,t)
w=3
return A.b(C.bzs(t),$async$a6r)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a6r,v)},
bzt(d,e){return C.hP4(d,e)},
hP4(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bzt=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aKJ
w=7
return A.b(n==null?$.aKJ=K.fHb():n,$async$bzt)
case 7:r=g
q=new Uint8Array(A.cm(e))
p=J.mn(r,"thumbs","readwrite")
B.iz.lM(J.ml(p,"thumbs"),q,l)
w=8
return A.b(J.p1(p),$async$bzt)
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
return A.i($async$bzt,v)},
bzs(d){return C.hP2(d)},
hP2(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bzs=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aKJ
w=7
return A.b(o==null?$.aKJ=K.fHb():o,$async$bzs)
case 7:r=f
q=J.mn(r,"thumbs","readwrite")
B.iz.Ew(J.ml(q,"thumbs"),m)
w=8
return A.b(J.p1(q),$async$bzs)
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
return A.i($async$bzs,v)}},D,Af,Ag,P,Ah,Ai,K,Aj,Q,A_
J=c[1]
A=c[0]
B=c[2]
A0=c[95]
A1=c[194]
G=c[174]
F=c[30]
E=c[184]
N=c[110]
A2=c[112]
A3=c[162]
R=c[125]
A4=c[193]
A5=c[36]
M=c[192]
A6=c[79]
H=c[85]
S=c[131]
T=c[134]
U=c[205]
V=c[163]
A7=c[154]
A8=c[166]
W=c[161]
A9=c[63]
Aa=c[69]
Ab=c[210]
X=c[178]
Ac=c[29]
Ad=c[143]
L=c[156]
Ae=c[167]
Y=c[208]
Z=c[201]
I=c[100]
O=c[67]
C=a.updateHolder(c[6],C)
D=c[204]
Af=c[68]
Ag=c[172]
P=c[207]
Ah=c[206]
Ai=c[55]
K=c[53]
Aj=c[75]
Q=c[209]
A_=c[123]
C.alQ.prototype={}
C.aVr.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bbe(),f=h.x!=null&&h.y5(i).length===0
if(h.x!=null)w=f?B.aW:B.bM
else w=h.gRX()?B.bM:B.e1
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.H(D.b6d,B.r,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eqh,B.f,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h0,i,i,i),B.T,D.eSI,B.av,A.d(C.w3(new A.Q(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eOQ,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aSV,i,i,i,i,B.VV,i,i,i)
q=A.m(16)
p=A.H(B.aJ,B.r,1)
o=A.H(B.aW.j(0.28),B.r,1)
n=A.fJ1(h.d)
o=A.p(B.A,C.aVq(A.fhx(h.e,n),30),B.f,i,i,new A.o(B.lU,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eKl,B.L,i,i)
m=A.m(14)
l=A.H(B.aJ,B.r,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bB,D.eSZ,B.ab,A.p(i,A.v(A.a([D.f6l,B.bB,A.d(A.zP(h.c),i,i,i,i,i,i,D.eFA,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f0,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aN,i,p,q,i,i,B.n),i,i,i,i,L.ade,i,i,i)
p=A.m(16)
m=A.H(B.aJ,B.r,1)
l=j.aMH("Original due",C.w3(h.r,!1))
n=j.aMH("Current due",C.w3(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.T,A.p(i,A.v(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaGX(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zR,i,i,1/0),B.T,j.c7w(),B.P,j.bWZ(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bm,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.H(B.aJ,B.r,1)
B.d.v(p,A.a([B.T,A.p(i,A.v(A.a([D.eTU,B.av,A.d(q,i,i,i,i,i,i,D.eJH,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aN,i,n,o,i,i,B.n),i,i,i,i,B.bm,i,i,1/0)],s))}if(h.gaBZ()){q=A.m(14)
o=A.H(B.cm,B.r,1.6)
B.d.v(p,A.a([B.T,A.p(i,A.v(A.a([D.f7x,B.P,A.bt(A.m(12),A.ee(new A.a4(1/0,88,A.b2(i,i,i,new A.U9(h.ax,B.M,D.eu_,!0,3.5,i),B.at),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.DY,i,i,i)],s))}p.push(B.ay)
p.push(D.f0i)
return A.p(i,A.v(A.a([r,new A.C(B.adh,A.v(p,B.ah,i,B.e,B.j,0,B.p),i)],s),B.ah,i,B.e,B.Q,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aMH(d,e){var w=null
return A.B(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a4X,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eGz,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c7w(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6U(B.e1,u,"Not paid yet")
w=t.y5(null).length
v=w===0?B.aW:B.bM
return this.a6U(v,u,C.w3(t.x,!0))},
bWZ(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6U(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6U(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a4X,u,u,u)
v=A.U(d).k("J<1,hc>")
v=A.A(new A.J(d,new C.bYn(),v),v.k("ai.E"))
return A.v(A.a([w,B.ar,A.c9(B.bI,v,B.by,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6U(d,e,f){var w=null
return A.B(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a4X,w,w,w),1),new A.dm(1,B.cl,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dN,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b7q.prototype={
a4(d,e){new A.U9(this.b,B.M,e,!0,3.5,null).a4(d,e)},
ap(d){return d.b!==this.b}}
C.alX.prototype={
S(){return new C.aA_(A.a([],x.bp))},
gdS(){return this.c}}
C.aA_.prototype={
Z(){this.a0()
this.Hm()},
Hm(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Hm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0_(t.a.c),$async$Hm)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dz4(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Hm,v)},
aOy(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aN,s=A.l(v,v,u?B.bn:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bn:B.br).j(0.22)
w=A.m(10)
return A.bn(v,new A.b3(4,r,new A.ay(u,1,B.r,-1)),v,B.bm,v,v,v,v,!0,new A.b3(4,w,new A.ay((this.a.d.a?B.bn:B.br).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b3(4,A.m(10),D.aQz),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aOx(d){return this.aOy(d,null)},
NK(d){return this.cb4(d)},
cb4(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NK=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Fc:B.eD
w=7
return A.b(new A.hS().B2(72,900,900,n),$async$NK)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f8(),$async$NK)
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
if(n!=null)n.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$NK,v)},
aWE(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aN,o=A.m(10),n=A.H((q?B.bn:B.br).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bn:B.br
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aN:B.aE,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bn:B.br
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fr(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c9)
q=A.a([q,B.aa,u,A.bJ(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.W(B.cv,s.a.d.a?B.bn:B.br,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c9))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kz,D.bgL,r,r,r)},
BZ(d){return this.btZ(d)},
btY(){return this.BZ(null)},
btZ(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BZ=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.av()
r=new A.ar(new A.bc(a4,B.b2,B.aM),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jA(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.aa(p,2)}o=new A.ar(new A.bc(a4,B.b2,B.aM),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.bc(a4,B.b2,B.aM),s)
if(a3){a4=new A.Q(Date.now(),0,!1).bN(6048e8)
m=A.bW(a4.gcd(),a4.gcb(),a4.gcr(),0,0,0,0,0)}else{a4=a5.f
m=A.bW(a4.gcd(),a4.gcb(),a4.gcr(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bj(a4,!0,x.cT)
i=a3?null:A.fJ1(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.v9?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hO(B.w.j(0.55),!0,"Dismiss",a4,new C.dyO(),new C.dyP(a2,t,a5,r,new C.dyQ(a2,t),o,n,j),B.eK,!0,x.y),$async$BZ)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d9(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.R$=s
r.O$=0
o.R$=s
o.O$=0
n.R$=s
n.O$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.I(x.q).f.P(D.eAl)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.P(D.ez0)
w=1
break}a1=A.fhx(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.v9?"male":"female"
w=7
return A.b(A.afr(a3,A.fQT(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BZ)
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
a3=A.bW(a3.gcd(),a3.gcb(),a3.gcr(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bW(a4.gcd(),a4.gcb(),a4.gcr(),0,0,0,0,0)))a5.cCU(a2.a)
w=8
return A.b(A.afr(t.a.c,a5),$async$BZ)
case 8:case 5:w=9
return A.b(t.Hm(),$async$BZ)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BZ,v)},
aP7(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aN
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bn:B.br).j(0.2)
s=A.H(s,B.r,g?1.5:1)
r=C.aVq(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aN:B.aE
return A.aD(!1,B.a1,!0,v,A.aI(!1,u,!0,A.p(p,A.B(A.a([r,B.bq,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b7,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bU,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ac)},
Qk(d){return this.crZ(d)},
crZ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hO(B.w.j(0.55),!0,"Dismiss",s,new C.dz7(),new C.dz8(t,d),B.hT,!0,x.y),$async$Qk)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.Q(s,0,!1)
case 4:w=7
return A.b(A.afr(t.a.c,d),$async$Qk)
case 7:w=8
return A.b(t.Hm(),$async$Qk)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Qk,v)},
Mq(d,e){return this.bEy(0,e)},
bEy(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kQ(s,"Cancel","Delete",e.b+" \xb7 "+A.zP(e.c)+" will be removed from this device.","Delete this debt?"),$async$Mq)
case 3:if(!g){w=1
break}w=4
return A.b(C.fc1(t.a.c,e.a),$async$Mq)
case 4:w=5
return A.b(t.Hm(),$async$Mq)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Mq,v)},
acd(d){return this.c55(d)},
c55(d){var w=0,v=A.j(x.H),u=this,t
var $async$acd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c1(B.K,null,new C.dz1(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$acd)
case 2:return A.h(null,v)}})
return A.i($async$acd,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dR1
w=J.dE(m.d,new C.dz9())
v=A.A(w,w.$ti.k("G.E"))
w=J.dE(m.d,new C.dza())
u=A.A(w,w.$ti.k("G.E"))
t=B.d.cG(v,0,new C.dzb())
w=A.m(18)
s=m.a.d.a
r=s?D.caE:D.at3
q=A.H(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bEg,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.aw,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aE,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.a1,!0,A.m(12),A.aI(!1,A.m(12),!0,D.dQt,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dzc(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ac)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cok("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zP(t)
r=A.a([A.p(l,A.v(A.a([s,B.ab,A.B(A.a([o,B.aa,A.D(m.b1x(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a5(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.adb,l,l,l),B.ay],p)
if(J.cj(m.d)){w=m.a.d.a
s=w?B.dS:B.c
q=A.m(18)
o=A.H((w?B.bn:B.br).j(0.12),B.r,1)
n=A.p(l,D.bzk,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aE,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ab,w,B.av,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bn:B.br,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bje,l,l,1/0))}else{w=m.gcan()
s=A.A(new A.J(v,w,A.U(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.C(D.bkT,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bn:B.br,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.U(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.ah,l,B.e,B.j,0,B.p)},
b1x(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.H((v.a.d.a?B.bn:B.br).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bn:B.br,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aN:B.aE
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eq,u,u,u)},
cok(d,e){return this.b1x(!1,d,e)},
cao(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.y5(j).length,h=d.bar()
if(d.x!=null){w=d.y5(j).length
v=w===0?B.cY:B.bM}else if(d.gRX())v=B.bM
else{if(h)w=B.cY
else w=k.a.d.a?B.bn:B.br
v=w}if(d.x!=null){w=d.y5(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.w3(u,!1)}else{u.toString
t="Paid "+C.w3(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.w3(w,!1)+" \xb7 "+i+" missed":"Due "+C.w3(w,!1)}w=k.a.d.a?B.dS:B.c
u=A.m(18)
if(d.gRX()&&d.x==null)s=B.bM.j(0.35)
else s=(k.a.d.a?B.bn:B.br).j(0.12)
s=A.H(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ab(0,B.G,B.w.j(0.04),B.cF,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.lU
o=A.H(d.gRX()&&d.x==null?B.bM.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fJ1(d.d)
o=A.p(B.A,A.d8(C.aVq(A.fhx(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aN:B.aE
m=x.p
n=A.a([new A.dm(1,B.cl,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaBZ())B.d.v(n,A.a([B.et,A.W(B.Le,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.d6,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zP(d.c)
l=k.a.d.a?B.aN:B.aE
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.a1,!0,j,A.aI(!1,q,!0,new A.C(U.acX,A.B(A.a([o,B.be,p,B.aa,A.v(A.a([n,B.bB,A.W(B.es,(k.a.d.a?B.bn:B.br).j(0.5),j,j,j,18)],m),B.dG,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dz3(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ac),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.db,j,j,j,j)}}
C.tH.prototype={}
C.aih.prototype={
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
if(j&&!v)l.push(new A.C(B.Eb,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f_(m,A.B(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.ec)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bfZ,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cA:B.bi,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fl,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.euK)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.up,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a5(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.kB,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.H(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hb,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a5(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bhc,a0,a0,a0,a0)}}
C.aRi.prototype={
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
return new A.C(B.db,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.R_.prototype={
S(){return new C.baZ()}}
C.baZ.prototype={
gbSa(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.dQX,D.dR2],l)
for(w=0;w<8;++w){v=D.ZM[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.EV:B.AC
q=t===s
r=A.W(r,q?B.eB:B.c1,n,n,n,17)
q=q?B.c:B.af
r=A.a([r,B.bq,new A.x(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.aa,new A.bG(1,B.bp,new A.x(v.c,n,Aj.C7,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aY(24,24)
p=new A.ay(B.eB,2,B.r,-1)
s=new A.o(n,n,new A.c3(p,p,p,p),new A.bv(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aG(n,new A.C(B.eC,A.v(A.a([new A.C(B.m1,new A.cD(B.b_,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.CR(!0,new C.aih(v,q.d,q.e,new C.d_w(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d_x(o,v),n,n,n,n,n,n,!1,B.ad))}k.push(new A.C(D.bhw,A.bL(D.fcu,new C.d_y(o,d),A.bk(B.b1,n,n,n,n,B.nM,n,n,new A.b6(A.m(16),B.Z),n,n,n)),n))
return A.bp(!0,new A.d1(new A.aW(0,1/0,0,m.a.b*0.9),A.cM(k,n,D.blJ,n,n,B.ak,!0),n),!0,!1,B.ag,!0,!0)}}
C.mT.prototype={
ac(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a5().ab()],x.N,x.z)},
b7d(d,e,f){return new C.mT(this.a,e,d,f)}}
C.Gg.prototype={
vw(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Gg(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aAe(d){var w=null
return this.vw(w,w,w,w,w,d,w,w,w,w,w,w)},
cyM(d){var w=null
return this.vw(w,w,w,w,d,w,w,w,w,w,w,w)},
b7b(d,e,f){var w=null
return this.vw(d,w,w,w,w,w,w,w,e,w,f,w)},
czq(d){var w=null
return this.vw(w,w,w,w,w,w,d,w,w,w,w,w)},
czz(d){var w=null
return this.vw(w,w,w,w,w,w,w,w,w,d,w,w)},
cyK(d){var w=null
return this.vw(w,w,w,d,w,w,w,w,w,w,w,w)},
czB(d){var w=null
return this.vw(w,w,w,w,w,w,w,w,w,w,w,d)},
cyH(d){var w=null
return this.vw(w,w,d,w,w,w,w,w,w,w,w,w)},
cyC(d){var w=null
return this.vw(w,d,w,w,w,w,w,w,w,w,w,w)},
Ep(d){var w=null
return this.vw(w,w,w,w,w,w,w,d,w,w,w,w)},
czJ(d,e,f,g,h,i,j,k,l,m,n){return this.vw(d,e,f,g,null,h,i,j,k,l,m,n)},
ac(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cwA(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bJM(d),k=A.aM(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aM(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cK(d.h(0,n))).length!==0?B.a.i(A.cK(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cK(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Bd.gec(D.Bd))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a0b)
q=l.$2("frame",D.a_H)
l=l.$2("texture",D.a_C)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cK(d.h(0,"author"))):o
return this.czJ(p,u,t,q,r,A.tm(d.h(0,"ribbon"))?A.ER(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Xr.prototype={
S(){return new C.ax6(A.a([],x.I),D.KP)},
gdS(){return this.c}}
C.ax6.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yJ(0,1)
w=$.av()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.ku()
w=v.a
C.bxT(w.c,w.d).bz(new C.d0c(v),x.fL)},
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
return A.b(C.Jm(s.c,s.d),$async$ku)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.d00(t,r))
t.asw()
case 1:return A.h(u,v)}})
return A.i($async$ku,v)},
gapa(){var w,v=this
if(!J.cj(v.d)){w=v.r
w=w<0||w>=J.aa(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
asw(){var w,v,u=this.gapa(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saT(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saT(0,w==null?"":w)},
c3w(d){this.n(new C.d_Y(this,d))
this.asw()},
LM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$LM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mT(B.o.u(1000*Date.now()),"Untitled page","",new A.Q(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aNy(r.c,r.d,s),$async$LM)
case 3:w=4
return A.b(t.ku(),$async$LM)
case 4:if(t.c==null||J.cj(t.d)){w=1
break}q=J.pN(t.d,new C.d_z(s))
p=q>=0?q:J.aa(t.d)-1
t.n(new C.d_A(t,p))
t.asw()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.A6(p+1,B.cp,B.kv),$async$LM)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$LM,v)},
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
break}s=t.gapa()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aNy(o.c,o.d,new C.mT(s,r,q,new A.Q(p,0,!1))),$async$zN)
case 3:w=4
return A.b(t.ku(),$async$zN)
case 4:if(t.c==null){w=1
break}t.n(new C.d01(t))
case 1:return A.h(u,v)}})
return A.i($async$zN,v)},
Mr(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gapa()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.d_I(r),s,null,!0,!0,x.y),$async$Mr)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bxF(s.c,s.d,r.a),$async$Mr)
case 4:t.n(new C.d_J(t))
w=5
return A.b(t.ku(),$async$Mr)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.S_(B.o.E(t.r+1,0,J.aa(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Mr,v)},
xo(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zN(),$async$xo)
case 5:case 4:if(t.c==null){w=1
break}w=J.cu(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.Pi(s,r.r,o,p,q),$async$xo)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a9(s,!1).M(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h62(s,r.x,r.r),$async$xo)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Jm(s.c,s.d),$async$xo)
case 10:l=e
for(s=n.d,r=J.cB(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.mT(""+(m+k),q,B.a.i(j.b),new A.Q(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.zY(r.c,r.d,l),$async$xo)
case 11:w=12
return A.b(t.ku(),$async$xo)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xo,v)},
Zk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zN(),$async$Zk)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxm(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dI(D.xI,new C.d_Z(t),new C.d0_())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m7("Our Family",o,"",""))
for(o=J.aU(t.d);o.C();){n=o.gT(o)
p.push(new F.m7(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fKD(o,new F.qL(s,r,"",p,new F.u_(q.d,null,null,null,null,"","","")),null),$async$Zk)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Zk,v)},
M9(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$M9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zN(),$async$M9)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.c1(D.a97,null,new C.d_E(t),s,!0,!0,!0,D.aHt,!1,!1,x.N),$async$M9)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cyM(r)
t.n(new C.d_F(t,q))
s=t.a
w=7
return A.b(C.PR(s.c,s.d,q),$async$M9)
case 7:case 1:return A.h(u,v)}})
return A.i($async$M9,v)},
V3(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$V3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c1(D.a97,null,new C.d_K(t),r,!0,!0,!0,D.aHt,!1,!1,x.e),$async$V3)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.d_L(t,s))
r=t.a
w=4
return A.b(C.PR(r.c,r.d,s),$async$V3)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.A6(0,B.dT,B.oa)
case 1:return A.h(u,v)}})
return A.i($async$V3,v)},
bJz(d){var w=d.bQ(),v=B.a.aU(B.o.u(w.gcb()),2,"0"),u=B.a.aU(B.o.u(w.gcr()),2,"0")
return""+w.gcd()+"-"+v+"-"+u},
gxm(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bRr()
if(r.e)w=D.a8c
else if(J.cj(r.d)){w=r.y
v=r.gxm(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eF3,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.C(Z.aeb,new C.WK(w,v,0,q),q),q),B.bv,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.k0.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bv],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aG(q,A.p(q,D.eq7,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ab(0,B.G,B.dK.j(0.45),B.J,18)],x.V),E.uZ,B.n),q,q,q,q,B.W4,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcvL(),q,q,q,q,q,q,!1,B.ad))
w.push(B.T)
w.push(A.hi(D.bvE,D.fc_,r.gaIE(),q))
B.d.v(u,w)}w=A.au(A.ci(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.q,q,B.z,q,B.ev,q,q,B.ak),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.aa(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.k0.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dM:B.z3
u=A.v(A.a([new A.C(D.biy,w,q),A.D(A.Hw(v,new C.d0a(r),J.aa(r.d)+1,q,r.gc3v(),u,B.b_),1),r.bwN()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.ce(q,D.aad,new A.am(B.W,q,B.aZ,B.q,A.a([D.aG_,A.bp(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bRr(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cu(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Iu(B.dR,"AI",h.gbuK(),!0))
if(h.a.f)f.push(new C.Iu(B.nz,"Cover",h.gbF7(),!1))
if(h.a.f)f.push(new C.Iu(B.xl,"Header",h.gbAa(),!1))
if(J.cu(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Iu(B.tc,"Print",h.gcck(),!1))
if(h.a.f&&J.cu(h.d)&&h.r>=0){v=h.w
u=v?B.hr:B.j5
t=v?"Save":"Edit"
f.push(new C.Iu(u,t,v?h.gcij():new C.d_V(h),!1))}if(h.a.f)f.push(new C.Iu(B.hE,"Add page",h.gaIE(),!1))
v=C.h2f(h.y.Q)
u=h.gxm(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.aa(h.d)
r=J.aa(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.d8x
else{k=new A.aY(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jA.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.k0,g,g,g,17),B.f,g,g,new A.o(g,g,new A.c3(i,i,i,i),new A.bv(k,k,k,k),g,new A.a5(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.k0.j(0.85)
p.push(new A.bG(1,B.bp,A.aG(B.c5,A.v(A.a([k,B.bB,new A.x(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.ad),g))}return new C.aih(v,u,t+" \xb7 "+s+" "+r,new C.d_W(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
yR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zN(),$async$yR)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aU(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a0e(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.ch(null,null,!0,null,new C.d_B(t,p),s,null,!0,!0,x.N),$async$yR)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xo(),$async$yR)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Cx(),$async$yR)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.E4("Swahili (Kiswahili)",!0),$async$yR)
case 18:w=16
break
case 17:w=19
return A.b(t.csA(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yR)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yR,v)},
WV(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.H(E.jA.j(0.3),B.r,1),r=x.p
return new A.C(B.cN,A.aI(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.uZ,B.a6),w,42,w,w,w,w,w,42),B.be,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A6.Rl,w,w,w),A.d(g,w,w,w,w,w,w,E.a4q,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d_X(d,h),w,w,w,w,w,w,w),w)},
Cx(){return this.bJ3()},
bJ3(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Cx=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.d_O(r),a7,null,!0,!0,x.ei),$async$Cx)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.A(r.d,x.B)
p=g
f=r.y
o=new A.eN("Working on it\u2026",$.av())
a6.a=!0
a7=r.c
a7.toString
A.ch(null,null,!1,null,new C.d_P(o),a7,null,!0,!0,x.H).f4(new C.d_Q(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.cb(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ac()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.xI[a1]
J.cb(j,i.a)}w=8
return A.b(C.aeE(a0,a7,new C.d_R(o),d,l,e,j),$async$Cx)
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
if(l!=null&&a6.a)A.a9(l,!0).eD()
l=o
l.shI($.av())
J.aO_(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.P(A.b1(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gci(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.aa(p);++a4){if(m.b.ak(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b7d(m.b.h(0,a4).b,a7,new A.Q(Date.now(),0,!1))
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
a5=l.cwA(j,12,a7)
l=r.a
w=15
return A.b(C.PR(l.c,l.d,a5),$async$Cx)
case 15:if(r.c!=null)r.n(new C.d_S(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.A6(0,B.dT,B.oa)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.b1(a3?A.clR("Undo",new C.d_T(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ee,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Cx,v)},
E4(d,e){return this.csB(d,e)},
csA(d){return this.E4(d,!1)},
csB(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$E4=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.A(r.d,x.B)
d=e
a0=new A.eN("Starting\u2026",$.av())
f.a=!0
k=r.c
k.toString
A.ch(null,null,!1,null,new C.d03(a0),k,null,!0,!0,x.H).f4(new C.d04(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.cb(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a0r(m,new C.d05(a0)),$async$E4)
case 10:w=8
break
case 9:w=11
return A.b(C.bzk(new C.d06(a0),m,a2),$async$E4)
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
if(o!=null&&f.a)A.a9(o,!0).eD()
o=a0
o.shI($.av())
J.aO_(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.P(A.b1(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.aa(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b7d(J.q(p,g).b,j.a,new A.Q(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zY(k.c,k.d,o),$async$E4)
case 12:w=13
return A.b(r.ku(),$async$E4)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.b1(A.clR("Undo",new C.d07(r,d),null),null,null,null,null,B.q,null,k,null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$E4,v)},
bwN(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d_C(v):u
r=A.aF(u,u,u,u,A.W(D.brm,s?D.k0:B.ba,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cu(v.d)&&!v.w&&v.r>=0)s=A.hi(A.W(B.uB,B.DA,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.DA,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbEH(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.k0.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.au(s,u,u,u),1)
w=t<J.aa(v.d)?new C.d_D(v):u
return A.bp(!0,new A.C(D.bim,A.B(A.a([r,s,A.aF(u,u,u,u,A.W(B.es,t<J.aa(v.d)?D.k0:B.ba,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.Xv.prototype={
S(){return new C.bbj(new A.ar(B.as,$.av()))}}
C.bbj.prototype={
ga_s(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.R$=$.av()
w.O$=0
this.a2()},
gbHR(){var w,v=this.ga_s()
A:{if("cover"===v){w=D.cG1
break A}if("book"===v){w=D.cC7
break A}w=D.d1y
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jA.j(0.5),n=x.p,m=A.B(A.a([D.d8y,B.aw,D.bnB,A.aF(q,q,q,q,B.l6,q,q,q,new C.d1D(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jR(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d1E(r),r.ga_s()==="page",q,q,q,q))
if(r.a.d)l.push(A.jR(q,q,q,D.f75,q,new C.d1F(r),r.ga_s()==="book",q,q,q,q))
l.push(A.jR(q,q,q,D.eWl,q,new C.d1G(r),r.ga_s()==="cover",q,q,q,q))
l=A.c9(B.bI,l,B.by,6,8)
k=B.c.j(0.07)
k=A.aK(q,B.U,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bn(q,new A.b3(4,A.m(16),B.Z),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kl,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.dj,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbHR(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mN(q,B.c.j(0.08),new A.x(s,q,B.Hx,q,q,q,q,q,q,q,q,q),B.ht,new C.d1H(r,s),q,q,q,q))}return A.ey(q,E.zw,A.ci(A.v(A.a([m,B.T,D.fa1,B.ar,l,B.ab,k,B.P,A.c9(B.bI,w,B.by,6,6),B.ay,A.dq(D.bvB,D.faN,new C.d1I(r,d),A.bk(B.b1,q,q,q,q,B.nM,q,q,new A.b6(A.m(16),B.Z),q,q,q)),B.av,D.f5y],n),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.z,q,B.fC,q,q,B.ak),q,q,q,D.adV,B.cZ,q,new A.b6(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.Xt.prototype={
S(){return new C.ax7(A.a([],x.Y))},
gdS(){return this.c}}
C.acu.prototype={}
C.ax7.prototype={
Z(){this.a0()
this.ku()},
ku(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$ku=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Pl(p.c,p.d),$async$ku)
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
return A.b(C.bxT(r.c,q),$async$ku)
case 6:j=e
i=J
w=7
return A.b(C.Jm(t.a.c,q),$async$ku)
case 7:m.push(new l.acu(k,j,i.aa(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.n(new C.d0r(t,n))
case 1:return A.h(u,v)}})
return A.i($async$ku,v)},
b2G(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
On(d,e){return this.c53(0,e)},
c53(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$On=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a9(s,!1).cp(A.eF(new C.d0q(u,e),!0,null,x.y)),$async$On)
case 2:t=g
w=3
return A.b(u.ku(),$async$On)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.P(D.aJj)
return A.h(null,v)}})
return A.i($async$On,v)},
E7(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$E7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.P(D.aJf)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ae_(s.c,s.d),$async$E7)
case 5:q=e
w=6
return A.b(t.ku(),$async$E7)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.On(0,B.d.kZ(t.d,new C.d0v(q))),$async$E7)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Pi(p,s.f,r,n,o),$async$E7)
case 10:m=e
w=11
return A.b(t.ku(),$async$E7)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.P(D.aJj)
case 1:return A.h(u,v)}})
return A.i($async$E7,v)},
NR(d,e){return this.cg6(0,e)},
cg6(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.d0u(t,e),s,null,!0,!0,x.y),$async$NR)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0E(s.c,s.d,e.a),$async$NR)
case 4:w=5
return A.b(t.ku(),$async$NR)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NR,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bwQ(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.H(E.jA.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aG(n,new A.fC(0.7142857142857143,A.p(n,A.v(A.a([D.d8z,B.ab,D.dQ9,B.av,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.k0.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b7,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcvH(),n,n,n,n,n,n,!1,B.ad))}w=A.m(22)
v=A.H(E.jA.j(0.85),B.r,1.6)
s=A.aG(n,A.p(n,D.bD6,B.f,n,n,new A.o(B.w.j(0.3),n,A.H(E.jA.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d0w(d),n,n,n,n,n,n,!1,B.ad)
r=A.m(14)
q=B.w.j(0.3)
p=A.H(E.jA.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.be,D.bnW,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eEd,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h0,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bHU,B.n),n,n,n,Ah.VC,D.bgp,n,n,n)
if(o.e)k=D.a8c
else k=k.length===0?D.aXH:A.ck(new C.d0x(k))
return A.ce(n,D.aad,new A.am(B.W,n,B.aZ,B.q,A.a([D.aG_,A.bp(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bwQ(d){var w,v,u=this,t=null,s=u.b2G(d),r=d.c,q=x.p,p=A.a([A.bX(0,A.f_(B.A,new A.a4(300,420,new C.WK(d.b,s,r,t),t),B.f,B.ds),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aG(t,A.p(t,D.bCr,B.f,t,t,new A.o(B.w.j(0.55),t,A.H(B.ba,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d0o(u,d),t,t,t,t,t,t,!1,B.ad),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eDP,t,t,t)
v=r===1?"page":"pages"
return A.aG(t,A.v(A.a([new A.fC(0.7142857142857143,new A.am(B.W,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.k0.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d0p(u,d),t,t,t,t,t,t,!1,B.ad)}}
C.Iu.prototype={}
C.WK.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dI(D.xI,new C.czY(m),new C.czZ()),j=m.c,i=D.Bd.h(0,j.e),h=A.aZ(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mc:B.b7
v=new C.cA_(h)
i=A.a([new A.ab(0,B.G,B.w.j(0.6),D.dNz,28)],x.V)
u=x.p
t=A.a([A.bX(0,A.b2(l,l,l,new C.b8B(j.x,h,l),B.at),0,0,0),A.an(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a5(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aY(3,3)
t.push(new A.cH(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bv(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aec,8,0.85,2.2),v.$4(D.blb,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aec,8,0.85,2.4))
else if(r==="corners")t.push(A.bX(0,new A.C(D.bl7,A.b2(l,l,l,new C.b8s(h,l),B.at),l),0,0,0))
r=A.W(D.asf[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.apJ,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.ab,p,B.ab,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cA,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bX(0,new A.C(D.blB,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b2(l,l,l,new C.aDY(l),D.etT),l,l,l,46,0,l))
return A.p(l,A.bt(D.a6U,new A.am(B.W,l,B.a9,B.q,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.a6U,i,new A.a5(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b8B.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.f3()
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
j=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
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
k=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
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
ap(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b8s.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.V(),k=A.L(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.elw,new A.cI([w,0,-1,1]),new A.cI([0,v,1,-1]),new A.cI([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
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
s=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
s.r=j.j(0.9).gp(0)
m=s.G()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ap(d){return!d.b.A(0,this.b)}}
C.tI.prototype={}
C.X1.prototype={
S(){return new C.b8z()}}
C.b8z.prototype={
gnu(){var w=this.d
return w===$?this.d=this.a.c:w},
gxm(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bc(w.b,B.b2,B.aM),$.av())}return v},
gaxC(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bc(w.c,B.b2,B.aM),$.av())}return v},
ganM(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bc(w.y,B.b2,B.aM),$.av())}return v},
q(){var w=this,v=w.gxm(0),u=v.R$=$.av()
v.O$=0
v=w.gaxC()
v.R$=u
v.O$=0
v=w.ganM()
v.R$=u
v.O$=0
w.a2()},
aon(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jR(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cTp(this,f,u),e===u,s,s,s,s))}return A.c9(B.bI,r,B.by,6,8)},
atN(d){var w=null,v=B.c.j(0.07)
return A.bn(w,new A.b3(4,A.m(14),B.Z),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.ld,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnu(),a0=f.gxm(0),a1=a0.a.a,a2=f.gaxC(),a3=a2.a.a,a4=f.ganM(),a5=d.b7b(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.au(new A.a4(190,260,A.f_(B.A,new A.a4(270,370,new C.WK(a5,d,f.a.e,e),e),B.f,B.ds),e),e,e,e)
a0=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.atN("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cTO(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.atN("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cTP(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
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
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.c3(o,o,o,o),e,e,new A.a5(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.az
v.push(A.aG(e,A.v(A.a([p,B.d6,new A.x(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTQ(f,t),e,e,e,e,e,e,!1,B.ad))}v=A.c9(B.bI,v,B.by,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b1.j(0.35):B.c.j(0.07)
m=new A.aY(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eB:B.K,2,B.r,-1)
q.push(A.aG(e,A.p(e,A.W(D.asf[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.c3(o,o,o,o),new A.bv(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTR(f,n),e,e,e,e,e,e,!1,B.ad))}q=A.c9(B.bI,q,B.by,8,8)
a4=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.atN("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cTS(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.ml,e,e,e)
m=A.a([],w)
for(l=D.Bd.gdH(D.Bd),l=l.gah(l);l.C();){k=l.gT(l)
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
m.push(A.aG(e,A.v(A.a([j,B.bB,new A.x(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTT(f,k),e,e,e,e,e,e,!1,B.ad))}m=A.c9(B.bI,m,B.by,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.ml,e,e,e)
k=f.gnu()
return new A.C(new A.N(0,0,0,a3.f.d),A.bp(!0,new A.d1(new A.aW(0,1/0,0,a1.a.b*0.92),A.cM(A.a([D.f51,B.ab,d,B.aO,a0,B.T,a2,B.ay,D.faB,B.P,v,B.ay,D.f5a,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.lQ(e,9,""+B.k.U(f.gnu().f),36,18,new C.cTU(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.ml,e,e,e),B.ar,f.aon(D.a0b,f.gnu().r,new C.cTV(f),D.d4G),B.ab,A.d("BORDER",e,e,e,e,e,e,H.ml,e,e,e),B.ar,f.aon(D.a_H,f.gnu().w,new C.cTW(f),D.d4L),B.ab,A.d("COVER MATERIAL",e,e,e,e,e,e,H.ml,e,e,e),B.ar,f.aon(D.a_C,f.gnu().x,new C.cTY(f),D.d68),B.ar,A.ix(e,B.b1,e,B.ag,e,new C.cTZ(f),e,e,e,D.f_S,f.gnu().z),B.bv,A.bL(D.f3X,new C.cU_(f,a6),A.bk(B.b1,e,e,e,e,B.nM,e,e,new A.b6(A.m(16),B.Z),e,e,e))],w),e,P.adK,e,e,B.ak,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aDY.prototype={
a4(d,e){var w,v,u,t=new A.aO($.V().r,B.ao,null,null,A.a([],x.v))
t.D(new A.b4(0,0))
w=e.a
t.D(new A.ao(w,0))
v=e.b
t.D(new A.ao(w,v))
t.D(new A.ao(w/2,v-12))
t.D(new A.ao(0,v))
t.D(new A.bD())
u=A.L()
u.sar(D.bIv.av(0,new A.a7(0,0,0+w,0+v)))
d.aL(t,u)},
ap(d){return!1}}
C.bdM.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.V()
w=A.L()
w.sar(D.bHA.av(0,new A.a7(0,0,a3,a4)))
a5.aW(new A.a7(0,0,a3,a4),w)
v=B.k.dE(a2/112)
u=new A.f3()
u.dU(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.af()*20
l=56+u.af()*40
k=D.cG0[u.aC(9)]
j=u.aC(14)
J.by(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a7(n,j,n+m,j+l)
h=A.bx(i,B.h4)
g=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sar(new A.a5(B.a3,B.a7,B.x,A.a([f,k,e],t),a0,a0).av(0,i))
d=g.G()
w.drawRRect(A.ex(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
e.r=E.jA.j(0.55).gp(0)
d=e.G()
w.drawRect(A.c2(new A.a7(h,j,g,j+2)),d)
d.delete()
j=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
j.r=E.jA.j(0.4).gp(0)
d=j.G()
w.drawRect(A.c2(new A.a7(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aC(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
p.sar(D.bGY.av(0,new A.a7(0,r,a3,q)))
d=p.G()
w.drawRect(A.c2(new A.a7(0,r,a3,q)),d)
d.delete()
p=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
p.r=B.w.j(0.5).gp(0)
p.z=B.j9
d=p.G()
w.drawRect(A.c2(new A.a7(0,q,a3,q+14)),d)
d.delete()}w=A.L()
w.r=D.b_M.j(0.72).gp(0)
a5.aW(new A.a7(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.L()
a4.sar(new A.bR(B.A,0.5,B.x,a0,0,A.a([D.b5T.j(0.22),B.K],t),a0,a0).av(0,A.bS(new A.u(w,a2),a1)))
a5.ae(new A.u(w,a2),a1,a4)},
ap(d){return!1}}
C.b6P.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ae("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cH(14,w*2,v*2.2,v*2,o,o,new A.kB(new A.o(A.aq(D.k0,D.b9C,w/4),o,new A.c3(B.Z,new A.ay(B.w.j(0.12),1,B.r,-1),B.Z,B.Z),B.IB,o,o,B.n),B.bb,o,o),o))}v=x.V
u=A.a([new A.ab(0,B.G,B.w.j(0.35),B.aBM,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aY(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jA.j(0.6),o,o,new A.bv(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.ps,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aQj,u,D.bIt,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ab(0,B.G,B.w.j(0.4),B.dq,18)],v)
t=A.an(o,A.b2(o,o,o,new C.aDY(o),D.etO),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aRi(p.y,r,G.ij,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.r,o,o,o,o,o,2,A.bn(o,B.eA,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ij.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eR3,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ij.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.w,o,o,o,o,o,2,A.bn(o,B.eA,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ij.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eIv,!0,B.a5,B.yv,B.am,o,o,o,o),1)],m),B.ah,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.eQX,o,o,o),B.av,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ij.j(0.5),o,o,o,o,o,o,o,o,11,B.cA,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.B(A.a([A.D(A.p(o,o,B.f,D.Dn.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fl,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Dn.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.Dn.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.ay],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ij.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.W0(A.dl(A.a([A.dl(o,o,o,o,o,o,o,o,o,D.eLr,B.a.an(k,0,1)),A.dl(o,o,o,o,o,o,o,o,o,o,B.a.aY(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ij.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ci(A.v(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.z,o,o,o,o,B.ak)}s.push(A.D(n,1))
s.push(new A.C(B.i5,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ij.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.D(A.p(o,A.bt(B.IB,new A.am(B.W,o,B.a9,B.q,A.a([t,new A.C(D.bkF,A.v(s,B.ah,o,B.e,B.j,0,B.p),o),A.an(0,A.bV(o,new A.o(o,o,o,o,o,new A.a5(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bb),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.IB,v,D.bIZ,B.n),o,o,o,o,o,o,o,o),1)],m),B.ah,o,B.e,B.j,0,o,o))
return new A.am(B.W,o,B.a9,B.q,l,o)}}
C.an2.prototype={
S(){return new C.aAA(A.a([],x._))},
bn(){return this.r.$0()},
p5(){return this.w.$0()},
gdS(){return this.c}}
C.aAA.prototype={
Z(){var w,v
this.a0()
this.v2()
w=this.a
v=w.c
if(v.length!==0)C.a5b(v,w.e,w.d.w)},
uS(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fKG(r,t.e,!1,s.w,new C.dMp(u),null,s),$async$uS)
case 2:w=3
return A.b(u.v2(),$async$uS)
case 3:return A.h(null,v)}})
return A.i($async$uS,v)},
Yw(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Yw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fKG(r,t.e,!0,s.w,new C.dMo(u),null,s),$async$Yw)
case 2:w=3
return A.b(u.v2(),$async$Yw)
case 3:return A.h(null,v)}})
return A.i($async$Yw,v)},
v2(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$v2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zN(q.a.c),$async$v2)
case 7:p=e
if(q.c!=null)n=q.e||J.cu(p)
else n=!1
if(n)q.n(new C.dMr(q,p))
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
return A.b(C.Fg(q.a.c).cK(0,B.p4),$async$v2)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.n(new C.dMs(q,o))
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
if(q.c!=null&&q.e)q.n(new C.dMt(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$v2,v)},
MW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$MW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.P(D.exq)
w=3
return A.b(C.Fg(t.a.c),$async$MW)
case 3:r=e
w=4
return A.b(C.fr8(t.a.c,r),$async$MW)
case 4:q=e
w=5
return A.b(C.Fg(t.a.c),$async$MW)
case 5:p=e
if(t.c==null){w=1
break}t.n(new C.dMn(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.aa(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.b1(null,null,null,q?B.du:B.cQ,null,B.q,null,s,null,B.lY,null,null,null,null,null,null,null,null,null,null))
t.a.p5()
case 1:return A.h(u,v)}})
return A.i($async$MW,v)},
GC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$GC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hQZ(l),$async$GC)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hl4(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aWR(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$GC)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h2p(r)
o=Date.now()
n=t.a.c
m=new C.ko(l,r.toUpperCase(),p,!0,B.U,D.B2,new A.Q(o,0,!1),0,n,D.rY)
w=5
return A.b(C.a0K(n,m),$async$GC)
case 5:w=6
return A.b(t.v2(),$async$GC)
case 6:t.a.bn()
t.a.p5()
if(t.c==null){w=1
break}t.Dh(m)
case 1:return A.h(u,v)}})
return A.i($async$GC,v)},
Dh(d){return this.c72(d)},
c72(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Dh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zN(u.a.c),$async$Dh)
case 2:n=l.qH(k.dE(f,new C.dMq(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.ho(m,new C.amX(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Dh)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0K(u.a.c,o),$async$Dh)
case 6:case 5:w=7
return A.b(u.v2(),$async$Dh)
case 7:u.a.p5()
return A.h(null,v)}})
return A.i($async$Dh,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=new C.tc(p)
if(r.e)return A.au(A.mq(q,p?B.bn:B.br,q,q,q,q,q,q,q,q),q,q,q)
if(J.cj(r.d)){w=p?B.dS:B.c
v=A.m(15)
u=A.aD(!1,B.a1,!0,q,A.aI(!1,q,!0,A.p(q,D.bwG,B.f,q,q,new A.o(B.aS.j(0.12),q,A.H(B.aS,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cI,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc68(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ac)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aE,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.El(A.p(q,A.v(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bn:B.br,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dX,A.bL(D.fbL,r.gaMD(),A.bk(B.bS,q,q,q,q,q,Ag.W7,q,new A.b6(A.m(12),B.Z),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bkB,q,q,1/0),15,B.ag,1.05,D.a5D,q)}w=J.aa(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aE,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b8],v)
if(J.cu(r.d))w.push(A.aF(q,q,q,q,A.W(B.xs,B.aS,q,q,q,q),q,q,q,new C.dMv(r),q,q,q,q,"Sync family trees with database",q))
if(J.cu(r.d))w.push(A.aF(q,q,q,q,A.W(B.xj,B.aS,q,q,q,q),q,q,q,r.gacT(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dq(E.aj6,D.eUi,r.gaMD(),A.bk(B.bS,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.aa(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ab)
u.push(new C.El(r.csF(J.q(r.d,s),o),14,B.ag,1,D.a5D,q))
B.d.v(w,u)}return A.v(A.a([p,B.ay,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
csF(d,e){var w=null,v=e.a,u=v?B.dS:B.c,t=A.m(14),s=A.H((v?B.dV:B.bY).j(0.55),B.r,1),r=A.a([new A.ab(0,B.G,B.w.j(v?0.35:0.08),B.ea,10)],x.V),q=A.m(14),p=A.p(w,D.bvK,B.f,w,w,new A.o(B.aS.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aE,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.galK(),m=d.d?"":" \xb7 Public",l=d.y===D.k7?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bn:B.br,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.a1,!0,w,A.aI(!1,q,!0,new A.C(B.bC,A.B(A.a([p,B.be,l,A.W(B.KZ,v?B.bn:B.br,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dMu(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ac),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amX.prototype={
S(){return new C.aAx(A.a([],x._),A.b_(x.N),A.b4t())},
bn(){return this.r.$0()},
gdS(){return this.c}}
C.aAx.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9T()
w=u.a
v=w.c
if(v.length!==0)C.a5b(v,w.e,w.d.w)},
q(){var w=this.w
w.R$=$.av()
w.O$=0
this.a2()},
a0m(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.wQ("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dLQ(r),s,null,!0,!0,x.y),$async$a0m)
case 3:if(e!==!0||t.c==null){w=1
break}t.I1()
t.n(new C.dLR(t,r))
w=4
return A.b(t.uU(),$async$a0m)
case 4:t.a.bn()
t.wQ(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a0m,v)},
ciY(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aT.x1$.push(new C.dLL(w,f,d,e))},
aON(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.di()
u.dZ(w,v,0,1)
u.ji(q,q,1,1)
this.w.sp(0,u)},
b4U(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.ez(new Float64Array(16))
q.dT(r)
w=q.Bx()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.di()
t.dZ(r,u,0,1)
t.ji(v,v,1,1)
t.dZ(-r,-u,0,1)
t.ih(0,q)
s.sp(0,t)},
a9T(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zN(u.a.c),$async$a9T)
case 2:t=s.qH(r.dE(e,new C.dLj(u)))
if(t!=null&&u.c!=null)u.n(new C.dLk(u,t))
return A.h(null,v)}})
return A.i($async$a9T,v)},
wQ(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b1(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
uS(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$uS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fKG(o,t,!1,r,new C.dLy(u),q.a,s),$async$uS)
case 2:n=A
m=J
w=3
return A.b(C.Fg(u.a.c),$async$uS)
case 3:p=n.qH(m.dE(e,new C.dLz(u)))
if(p!=null&&u.c!=null)u.n(new C.dLA(u,p))
return A.h(null,v)}})
return A.i($async$uS,v)},
I1(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cu(w,0)},
uU(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a0K(t,s),$async$uU)
case 2:return A.h(null,v)}})
return A.i($async$uU,v)},
a__(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a__=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tp(q,t.a.c)){t.wQ("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hS8(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a__)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.I1()
t.n(new C.dLK(t,r))
w=4
return A.b(t.uU(),$async$a__)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a__,v)},
YJ(){return this.c74()},
c74(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$YJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tp(q,t.a.c)){t.wQ("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.M(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dLI(r,new C.tc(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$YJ)
case 3:if(e!==!0||t.c==null){w=1
break}t.I1()
t.n(new C.dLJ(r,t))
w=4
return A.b(t.uU(),$async$YJ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YJ,v)},
TV(d){return this.btW(d)},
btW(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tp(r,t.a.c)){t.wQ("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dL7(t,d),r,null,!0,!0,x.P),$async$TV)
case 3:s=f
if(s==null){w=1
break}t.I1()
t.n(new C.dL8(t,s))
w=4
return A.b(t.uU(),$async$TV)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TV,v)},
a0I(d){return this.cuL(d)},
cuL(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0I=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.M(s)
t=u.c
t.toString
w=2
return A.b(A.ch(null,null,!0,null,new C.dLT(u,d,new C.tc(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a0I)
case 2:return A.h(null,v)}})
return A.i($async$a0I,v)},
c3q(d){var w=this,v=w.d
v===$&&A.c()
if(C.tp(v,w.a.c))w.MB(d)
else w.a0I(d)},
afm(d,e){return this.cmO(d,e)},
cmO(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$afm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.M(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ch(null,null,!0,null,new C.dLN(new C.tc(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$afm)
case 3:case 1:return A.h(u,v)}})
return A.i($async$afm,v)},
GH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$GH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.k7?3:5
break
case 3:w=6
return A.b(C.fyV(t.a.c),$async$GH)
case 6:s=e
o=t.a
r=C.fSg(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.afm(!s,!r),$async$GH)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bxM(o,t.a.c)){t.wQ("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kQ(o,"Cancel","Remove",q.y===D.k7?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$GH)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aLX(t.a.c,t.d.a),$async$GH)
case 11:t.a.bn()
o=t.c
if(o==null){w=1
break}A.iG(o,null)
case 1:return A.h(u,v)}})
return A.i($async$GH,v)},
a7u(d){return this.bEP(d)},
bEP(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a7u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tp(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.ba(s,new C.dL9(p))){o=A.U(s)
p.a=A.qH(new A.cV(new A.a3(s,new C.dLa(d),o.k("a3<1>")),new C.dLb(),o.k("cV<1,n>")))}q=p.a
if(q==null)q=d.d
t.I1()
t.n(new C.dLc(t,s,d,q))
w=3
return A.b(t.uU(),$async$a7u)
case 3:t.wQ(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a7u,v)},
MB(d){return this.bGP(d)},
bGP(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$MB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tp(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a0I(d),$async$MB)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ch(null,null,!0,null,new C.dLg(t,d),r,null,!0,!0,x.P),$async$MB)
case 6:s=f
if(s==null){w=1
break}t.I1()
t.n(new C.dLh(t,s))
w=7
return A.b(t.uU(),$async$MB)
case 7:case 1:return A.h(u,v)}})
return A.i($async$MB,v)},
csZ(){var w=this,v=w.d
v===$&&A.c()
if(!C.tp(v,w.a.c))return
if(w.e.length===0)return
w.n(new C.dLS(w))
w.uU()},
WH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$WH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bxM(n,t.a.c)){t.wQ("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.M(n)
s=$.av()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bj(new A.J(q,t.gc1W(),A.U(q).k("J<1,n>")).bZ(0,new C.dLt()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dLu(t,new C.tc(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$WH)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.I1()
t.n(new C.dLv(t,p))
w=4
return A.b(t.uU(),$async$WH)
case 4:t.wQ("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$WH,v)},
c1X(d){return B.a.i(d.toLowerCase())},
c5U(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tp(v,w)
t=r.d
s=C.hHA(t)
C.hR2(q,t.b,u,C.hHz(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.tc(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a3(l,new C.dM_(),A.U(l).k("a3<1>")).gJ(0)
l=n?B.bW:B.iH
v=A.W(B.X9,n?B.bn:B.br,o,o,o,18)
u=x.p
v=A.a([new A.C(B.zV,A.aI(!1,o,!0,new A.C(B.hD,A.B(A.a([v,B.bq,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bn:B.br,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dM0(p,d),o,o,o,o,o,o,o),o),new A.C(B.mI,p.bRs(m),o)],u)
if(p.d.y===D.k7){t=B.qJ.j(0.15)
s=A.m(12)
r=A.H(B.qJ.j(0.45),B.r,1)
q=C.Fe(p.d,p.a.c)
v.push(new A.C(B.wE,A.p(o,A.B(A.a([D.bAR,B.aw,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aE,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iM,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aE,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b8],u)
if(C.tp(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Iq("Undo",B.uS,p.gcsY(),m,o,o))
u.push(new C.Iq("Family Book",D.bqt,p.gc5T(),m,B.rv,o))
if(C.tp(p.d,p.a.c))u.push(new C.Iq("Display settings",A0.F1,p.gc73(),m,B.aW,o))
u.push(new C.Iq("Sync",B.xj,p.gacT(),m,o,o))
t=p.d
if(t.y===D.k7||C.bxM(t,p.a.c)){t=p.d.y===D.k7?"Remove shared tree":"Delete tree"
u.push(new C.Iq(t,B.e8,p.gbEZ(),m,B.fQ,o))}if(C.tp(p.d,p.a.c))u.push(new C.Iq("Add member",B.uN,new C.dM1(p),m,B.bS,o))
v.push(new A.C(P.adn,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.galK()===0){u=A.au(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bn:B.br,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.ck(new C.dM2(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.W(n?L.Xd:W.L_,o,o,o,o,o)
v.push(A.au(A.hi(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dM3(p),o),o,o,o))}return A.ce(o,l,A.bp(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bRs(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ab(0,B.G,B.fr.j(0.35),B.dq,18)],x.V)
u=A.m(22)
t=A.an(-26,A.W(B.xc,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.a1,!0,m,A.aI(!1,m,!0,A.p(m,D.bDQ,B.f,m,m,new A.o(B.c.j(0.16),m,A.H(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cI,!0,m,m,m,m,m,m,m,m,m,m,m,n.gacT(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ac)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eGX,m,m,m)
r=r.galK()
p=n.d.galK()===1?"member":"members"
o=x.p
p=A.a([s,B.be,A.D(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tp(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.bB2,m,m,m,n.gcgr(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j6:B.m6
r=r?"Private":"Public"
r=A.D(n.arW(q,"Privacy",r,n.a.d.w?n.gcs2():m),1)
q=A.D(n.arW(B.xk,"Tree code",n.d.c,new C.dLi(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ab,A.B(A.a([r,B.aa,q,B.aa,A.D(n.arW(D.bsc,"Collaborators",p,n.gbVO()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.k7){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.a1,!0,A.m(999),A.aI(!1,A.m(999),!0,new A.C(B.fL,A.B(A.a([A.W(B.ok,B.c,m,m,m,14),B.et,A.d("View only",m,m,m,m,m,m,B.aKt,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ac)],o))}return A.p(m,A.bt(u,new A.am(B.W,m,B.a9,B.q,A.a([t,new A.C(B.E0,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.bH1,B.n),m,m,m,m,m,m,m,1/0)},
arW(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.a1,!0,A.m(14),A.aI(!1,A.m(14),!0,new A.C(I.aet,A.v(A.a([A.W(d,B.c,w,w,w,18),B.av,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.tP,A.d(f,w,1,B.a2,w,w,w,I.a4o,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ac)}}
C.bb1.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gai(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b2(t,t,t,new C.bb4(s,t),new A.as(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.d0B(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d0C(this),A.U(r).k("J<1,r>")))
return new A.C(B.rV,new A.a4(w,v,new A.am(B.W,t,B.a9,B.f,u,t),t),t)}}
C.IC.prototype={}
C.Ey.prototype={}
C.bb3.prototype={
gbd3(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aG2.prototype={}
C.bb4.prototype={
bGx(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.V()
v=A.L()
v.r=B.bx.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bw(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ao,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.b4(u,q))
s=w-1.1
r=w-8.8
t.D(new A.p8(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.p8(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bD())
q=A.L()
q.r=B.c.gp(0)
d.ae(new A.u(u,w),9,q)
q=A.L()
q.r=B.bx.gp(0)
d.aL(t,q)},
bGv(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.d0W())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.ba(a0,new C.d0X(f))
t=new A.J(a0,new C.d0Y(f),A.U(a0).k("J<1,P>")).bZ(0,new C.d0Z()).cG(0,1/0,B.vX)
w=f.a
d.bw(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.G()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lE(m)
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
a4(d,e){var w,v,u,t,s,r,q,p,o
$.V()
w=A.L()
w.r=B.bS.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fu
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bGv(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.G()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bGx(d,w,q.a,q.b)}},
ap(d){return d.b!==this.b}}
C.beJ.prototype={
gc_L(){var w=this.c
if(B.a.i(w.y).length!==0)return D.d1x
switch(w.c.a){case 0:return D.cyh
case 1:return D.cIG
case 2:return D.cXv}},
gc_O(){var w=this.c,v=C.h1P(w.w),u=C.h1P(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=t.gc_L(),p=t.c,o=K.byE(p.f),n=t.gc_O(),m=x.V,l=A.a([new A.ab(0,B.G,B.d.gaj(q).j(0.35),B.cF,10)],m),k=r?B.aE:B.c,j=A.H(r?B.aE:B.c,B.r,2)
if(o!=null)w=A.rE(B.A,s,B.cn,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gaj(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gaj(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a5(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hP(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a5(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.Ef,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.H(r?B.aE:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eQA,s,s,s),B.f,s,s,new A.o(B.c7,s,w,j,s,s,B.n),s,s,s,s,D.bmq,s,s,s),s,s,s,-6,-4,s))}k=r?B.cz:B.c
j=A.m(8)
w=A.H(B.d.gL(q).j(0.35),B.r,1)
m=A.a([new A.ab(0,B.G,B.w.j(r?0.3:0.06),B.dz,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cz,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.br,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aG(s,new A.a4(84,112,A.v(A.a([new A.am(B.W,s,B.a9,B.f,l,s),B.av,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aS9,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bmB,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.ad)}}
C.ba9.prototype={
a4(d,e){var w,v,u,t,s,r,q
$.V()
w=A.L()
v=this.b
u=v?B.c:D.b2b
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.G()
t.drawCircle(r,s,1,q)
q.delete()}},
ap(d){return d.b!==this.b}}
C.bsb.prototype={
B(d){var w=this,v=null,u=new C.eX9(w),t=w.c,s=t?B.cz:B.c,r=A.m(12),q=u.$3(B.hE,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bG:B.f5,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.AD,"Zoom out",w.e)
return A.aD(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bG:B.f5,v,v,v,1,v,v,v,v,v,22),u.$3(B.agH,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dl,v,v,v,B.ac)}}
C.bi0.prototype={
B(d){var w=this,v=null,u=B.bS.j(0.15),t=A.H(B.bS,B.r,2),s=w.e,r=x.p
t=A.aG(v,A.p(v,A.v(A.a([A.W(s?L.Xd:W.L_,B.bS,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eMZ,v,v,v)],r),B.m,v,B.b7,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.ad)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eL_,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.J(s,new C.eyP(w),A.U(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a4(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.Y4.prototype={
S(){return new C.ayZ()},
bn(){return this.Q.$0()},
gdS(){return this.w}}
C.ayZ.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a0()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.av()
r.d!==$&&A.aQ()
r.d=new A.ar(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.ar(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.ar(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.ar(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.ar(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.ar(new A.bc(t,B.b2,B.aM),s)
t=u?q:v.c
r.y=t==null?D.wR:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hJ4(w.r,w.f)
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
NS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fSg(p.y,p.w)
w=3
return A.b(A.l1(t.a.w,B.GC),$async$NS)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aWR(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$NS)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hl5(p.y,p.w)
t.a.bn()
case 5:w=7
return A.b(Ai.Fp(78,800),$async$NS)
case 7:q=e
if(q!=null&&t.c!=null)t.n(new C.dgc(t,q))
case 1:return A.h(u,v)}})
return A.i($async$NS,v)},
c_N(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
s=v.aAk(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a9(k,!1).M(s)},
a76(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a76=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ch(null,null,!0,null,new C.dgb(r),s,null,!0,!0,x.y),$async$a76)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a9(s,!1).M(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a76,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H,i=new C.tc(j),h=l.a.e,g=A.U(h).k("a3<1>"),f=A.A(new A.a3(h,new C.dgl(l),g),g.k("G.E"))
h=j?B.dS:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bkX,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aE,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hs(A.aI(!1,k,!0,new A.C(B.m0,A.W(B.e8,B.o7,k,k,k,17),k),B.cI,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbBG(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.ji:B.il
t=K.byE(l.as)
if(l.as==null)s=A.W(B.od,j?B.bn:B.br,k,k,k,40)
else s=k
s=A.au(A.aG(k,new A.am(B.W,k,B.a9,B.q,A.a([A.hj(u,t,s,k,42),A.an(0,A.hj(B.bS,k,D.buO,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc_K(),k,k,k,k,k,k,!1,B.ad),k,k,k)
t=l.d
t===$&&A.c()
t=C.az0(t,"Full name",B.m2,1,1,i,B.lH)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.T,new C.beH(i,u,new C.dgm(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bn:B.br,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.beu],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.dgn(),A.U(o).k("J<1,es<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bn:B.br,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bew],q)
B.d.v(q,new A.J(f,new C.dgp(),A.U(f).k("J<1,es<n?>>")))
o=A.v(A.a([t,B.ar,new C.aaW(i,r,"Who is their parent?",p,new C.dgq(l),k,o),B.ay,n,B.ar,new C.aaW(i,m,"Who is their spouse / partner?",q,new C.dgr(l),k,o)],v),B.ah,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.az0(q,"Birth date",D.afP,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.az0(m,"Birth place",B.Xs,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.az0(n,"Date of death (if deceased)",D.ahX,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.az0(p,"Occupation",B.Yx,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.A,k,B.a9,B.q,w,k),B.ay,s,B.bv,new C.aaX(i,"Identity",u,k),B.ab,new C.aaX(i,"Family links",o,k),B.ab,new C.aaX(i,"Life details",A.v(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.az0(r,"Notes",B.kE,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ab,new C.az_(i,"Child order",l.c7f(l.at),new C.dgs(l),new C.dgt(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fI7(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dgu(l):k
B.d.v(r,A.a([B.T,new C.az_(i,"Visible in tree",u,w,new C.dgv(l),k)],v))}r.push(B.T)
w=j?B.ji:B.il
u=A.m(14)
t=A.H(j?B.dV:B.bY,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aE,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.ix(k,B.bS,k,B.ag,k,new C.dgw(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bn:B.br,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,L.ad0,k,k,k))
r.push(B.bv)
w=j?B.aN:B.aE
j=j?B.dV:B.bY
r.push(A.B(A.a([A.D(A.dV(B.n4,new C.dgo(d),A.db(k,k,k,k,k,k,k,k,k,w,k,k,B.cc,k,new A.b6(A.m(14),B.Z),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.be,A.D(A.bL(D.eqf,l.gc_M(),A.bk(B.aS,k,k,0,B.c,k,B.cc,k,new A.b6(A.m(14),B.Z),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.av)
return A.er(B.h2,k,B.ag,h,new A.a4(420,k,A.ci(A.v(r,B.ah,k,B.e,B.Q,0,B.p),B.q,k,B.z,k,k,k,k,B.ak),k),D.adR,k,B.adf,new A.b6(g,B.Z),k,k)},
c7f(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aaX.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bn:B.br,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ji:B.il,s=A.m(16)
return A.v(A.a([new A.C(D.aef,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.H(v?B.dV:B.bY,B.r,1),s,w,w,B.n),w,w,w,w,B.bm,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.beI.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dS:B.c,r=A.m(12),q=A.H((t?B.dV:B.bY).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aN:B.aE,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aK(u,B.U,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bn(u,B.eA,u,B.ur,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bn:B.br,u,u,u,u,u,u,u,u,u,u,u,B.cq,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bS,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aaW.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dS:B.c,s=A.m(12),r=A.H((u?B.dV:B.bY).j(0.85),B.r,1),q=A.W(B.qt,u?B.bn:B.br,v,v,v,v),p=A.l(v,v,u?B.aN:B.aE,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dS:B.c
return A.p(v,new A.Cz(A.a2o(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bn:B.br,v,v,v,v,v,v,v,v,v,v,v,B.cq,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.ls,v,v,v)}}
C.beH.prototype={
B(d){var w=new C.dgx(this)
return A.B(A.a([w.$3(D.WW,"Male",B.LK),B.aa,w.$3(D.af5,"Female",B.Lw),B.aa,w.$3(D.wR,"Other",B.mM)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.az_.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.ji:B.il,r=A.m(14),q=A.H(t?B.dV:B.bY,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aE,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bn:B.br,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aF5(u,B.AD,w.f,v),B.bq,new C.aF5(u,B.hE,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eq,v,v,v)}}
C.aF5.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bS.j(0.12)
else w=s.c.a?B.dS:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bS
else t=(s.c.a?B.bn:B.br).j(0.4)
return A.aD(!1,B.a1,!0,v,A.aI(!1,u,!0,new A.a4(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ac)}}
C.aaY.prototype={
bK7(d){switch(d.a){case 0:return B.bS
case 1:return B.bx
case 2:return B.cU}},
bK8(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aSV(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zb(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dS:B.c
u=A.m(12)
t=A.H((w?B.dV:B.bY).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.W(f,B.bS,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bn:B.br,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.av,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aE,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cN,B.zT,p,p,1/0)},
abo(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bn:B.br,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ji:B.il,s=A.m(16),r=A.H(v?B.dV:B.bY,B.r,1)
return A.v(A.a([new A.C(D.aef,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bU,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h6t(r,q),o=q.c,n=t.bK7(o),m=K.byE(q.f),l=t.e.a,k=l?B.dS:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aN:B.aE,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.k7?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bn:B.br,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.H(n,B.r,3)
v=A.a([new A.ab(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.au(A.p(s,A.hj(u,m,m==null?A.W(B.od,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ej,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.H(n.j(0.45),B.r,1)
v=A.au(A.p(s,A.d(t.bK8(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.m_,s,s,s),s,s,s)
u=x.p
i=A.a([t.zb("Full name",i,B.m2)],u)
if(p>0)i.push(t.zb("Child order","#"+p,B.LD))
r=A.a([h,B.av,r,B.aO,l,B.T,v,B.bv,t.abo("Identity",i),B.ab,t.abo("Life details",A.a([t.zb("Birth date",q.w,D.afP),t.zb("Birth place",q.x,B.Xs),t.zb("Date of death",q.y,D.ahX),t.zb("Occupation",q.z,B.Yx)],u)),B.ab,t.abo("Family links",A.a([t.zb("1. Parent",t.aSV(q.d),B.Et),t.zb("2. Spouse",t.aSV(q.e),B.Lv)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ab,t.abo("Notes",A.a([t.zb("Notes",q,B.kE)],u))],u))
r.push(B.bv)
r.push(A.bL(B.HM,new C.dgH(d),A.bk(B.aS,s,s,s,s,s,B.cc,s,new A.b6(A.m(14),B.Z),s,s,s)))
return A.ey(s,k,new A.d1(B.lj,A.ci(A.v(r,B.ah,s,B.e,B.Q,0,B.p),B.q,s,B.z,s,B.wG,s,s,B.ak),s),s,s,s,B.E3,B.cZ,s,new A.b6(j,B.Z),s)}}
C.Iq.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bn:B.br
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.wK,A.hs(A.aD(!1,B.a1,!0,A.m(8),A.aI(!1,A.m(8),!0,new A.a4(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ac),u,v.c,u,u),u)}}
C.an_.prototype={
eF(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.m(0,"marker","ngmyFamilyTreeSync")
s.m(0,"version",1)
s.m(0,"code",u.a)
s.m(0,"ownerEmail",u.b)
s.m(0,"exportedAt",u.d.a5().ab())
w=u.c
v=A.U(w).k("J<1,a1<n,@>>")
w=A.A(new A.J(w,new C.c40(),v),v.k("ai.E"))
s.m(0,"trees",w)
w=u.e
if(w.a!==0)s.m(0,"familyBooks",w.iH(w,new C.c41(),t,x.U))
return s}}
C.an0.prototype={
S(){return new C.aAz(A.a([],x.bF))},
gd6(){return this.c}}
C.aAz.prototype={
Z(){this.a0()
this.I8()},
I8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$I8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c44(t.a.c),$async$I8)
case 3:r=e
w=4
return A.b(C.zN(t.a.c),$async$I8)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rq(q,new C.dMc(t))
else s=!1
if(t.c==null){w=1
break}t.n(new C.dMd(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$I8,v)},
xn(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.P(A.b1(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
IR(d,e){return this.cvh(d,e)},
cvh(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$IR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dMh(q,e))
t=3
w=6
return A.b(d.$0(),$async$IR)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.n(new C.dMi(q))
$.eK.lV()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IR,v)},
Vx(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oD(r,s.c,s.e),$async$Vx)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IR(new C.dM9(t),"Preparing download\u2026"),$async$Vx)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vx,v)},
VB(d){return this.bId(d)},
bId(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oD(r,s.c,s.e),$async$VB)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.IR(new C.dMa(t,d),"Preparing file\u2026"),$async$VB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VB,v)},
adg(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$adg=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.ws.c2().Ky(B.Ow,B.rZ,!0),$async$adg)
case 7:r=e
o=r
q=o==null?null:J.fj(o.a)
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
case 6:u=A.Fo()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adg,v)},
Wb(d){return this.bSk(d)},
bSk(d){var w=0,v=A.j(x.H),u=this
var $async$Wb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.IR(new C.dMb(u,d),"Restoring family trees\u2026"),$async$Wb)
case 2:return A.h(null,v)}})
return A.i($async$Wb,v)},
Wa(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Wa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.adg(),$async$Wa)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Wb(s),$async$Wa)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wa,v)},
a_P(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_P=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oD(r,s.c,s.e),$async$a_P)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IR(new C.dMg(t),"Creating QR code\u2026"),$async$a_P)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_P,v)},
a_r(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_r=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BR()){t.xn("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a9(s,!1).cp(A.eF(new C.dMe(),!0,null,x.N)),$async$a_r)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Wb(r),$async$a_r)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_r,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=o?B.zn:B.iH,m=o?D.abD:B.aN,l=o?B.aI:B.bY,k=o?B.aN:B.aE,j=new C.d1_(n,m,l,k,o?B.bH:B.br)
l=A.aF(p,p,p,p,A.W(B.ew,k,p,p,p,20),p,p,p,new C.dMk(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eC(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d0y(!0,B.j8,B.aY,B.aY,q.r?p:q.gcmC(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gciT()
t.push(A.D(C.d0y(!s,B.iP,B.b1,B.bA,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d0y(!1,B.hs,B.aS,B.bS,q.r?p:q.gbI6(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d0y(!1,M.xn,B.aX,B.aK,q.r?p:q.gbSh(),j,s,"Upload backup file"),1))
l=A.a([new C.bb2(v,l,p),B.ki,new C.aae(j,"QR restore",p),B.T,t,B.d5,new C.aae(j,"Backup files",p),B.T,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.aa(q.d)>1&&q.a.f==null){v=A.a([B.ki,new C.aae(j,"One tree",p),B.T],u)
B.d.v(v,J.b5(q.d,new C.dMl(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cM(l,p,B.W3,p,p,B.ak,!1)],u)
if(q.r){v=A.m(18)
t=A.H(B.aS.j(0.35),B.r,1)
s=A.a([new A.ab(0,B.G,B.w.j(o?0.3:0.1),B.dq,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.bp(!0,A.p(p,A.B(A.a([L.aIY,B.be,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.A0,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.ce(w,n,new A.am(B.W,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d1_.prototype={}
C.bb2.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ab(0,B.G,B.aS.j(0.32),B.jP,28)],x.V)
t=A.an(p,A.W(B.tf,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.W,p,B.a9,B.q,A.a([t,new A.C(B.a8,A.B(A.a([A.p(p,D.bDo,B.f,p,p,new A.o(s,p,A.H(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nN,A.D(A.v(A.a([D.eVb,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bK7,B.n),p,p,p,p,p,p,p,p)}}
C.aae.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.aa,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bb0.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aY.j(0.4):m.c
k=A.H(k,B.r,l?1.5:1)
l=l?A.a([new A.ab(0,B.G,B.aY.j(0.1),B.cF,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.H(t.j(0.35),B.r,1)
return A.aD(!1,B.a1,!0,q,A.aI(!1,o,!0,A.et(A.d8(new A.C(E.VH,A.v(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qq,q,q,q),B.ab,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cq,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ac)}}
C.bb5.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.H(s.c,B.r,1),q=B.aS.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.a1,!0,v,A.aI(!1,u,!0,A.et(new A.C(B.eM,A.B(A.a([A.p(v,D.bCC,B.f,v,v,new A.o(q,v,A.H(B.aS.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qq,v,v,v),B.be,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.W(B.hs,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ac)}}
C.Yp.prototype={
S(){return new C.aAy()},
gd6(){return this.c}}
C.aAy.prototype={
Z(){this.a0()
this.a6E()},
a6E(){var w=0,v=A.j(x.H),u=this,t
var $async$a6E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aZt(u.a.c,B.BD),$async$a6E)
case 2:t=e
if(u.c!=null)u.n(new C.dM4(u,t))
return A.h(null,v)}})
return A.i($async$a6E,v)},
aeD(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aeD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.n(new C.dM5(q))
t=4
p=A.fTT(q.a.d,B.BD)
if(p==null){n=A.ba("Could not read this QR code.")
throw A.R(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.apc(n.e,m,l,B.BD,p,n.f),$async$aeD)
case 7:if(q.c==null){r=[1]
w=5
break}q.n(new C.dM6(q))
q.c.I(x.q).f.P(D.eyz)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a6(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d(B.a.e1(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.dM7(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeD,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=p?B.j0:B.oZ,n=p?B.hy:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eC(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.f8J,q,q,q,1,q,!0)
w=A.m(24)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.pm(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aS,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bv,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.aj,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b7,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.af:B.bu,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gciB()
if(u)u=B.Hm
else u=A.W(r.e===!0?B.hr:B.afO,q,q,q,q,q)
w=A.a([w,B.ab,v,B.ab,new A.a4(1/0,q,A.eB(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.db(q,q,q,q,q,q,q,q,q,B.aS,q,B.fR,q,q,q,new A.ay(B.aS.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.i5,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.az:B.aj,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.T)
w.push(new A.a4(1/0,q,A.bL(B.yD,new C.dM8(d),A.bk(B.aS,q,q,q,q,B.fR,q,q,q,q,q,q)),q))
return A.ce(m,o,new A.C(B.a8,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Yq.prototype={
S(){return new C.bg8(A.yn(B.wq,B.nb,B.tj))}}
C.bg8.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.ce(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.f1s,w,w,w,1,w,!0),B.w,A.ym(this.d,B.bQ,new C.dMm(this,d)),w,!1,!1,w,w)}}
C.aVp.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.O2,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lk.prototype={}
C.a4e.prototype={
S(){return new C.bfR(null,null)}}
C.bfR.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bi(v,B.rQ,v,1,v,w)
w.e=A.bi(v,B.p3,v,1,v,w)
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
this.bpt()},
B(d){var w,v,u=this,t=B.d.dI(D.a06,new C.dyc(u),new C.dyd())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.coy(A.c4(new A.h5(A.a([w,v],x.dS)),new C.dye(u,t),null),!0)}}
C.bfQ.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aWV(d,e)
break
case"house":p.lw(d,e,D.cN0)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.ge8()
$.V()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ae(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lB(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zU(d,e,12)
p.wZ(d,e,B.kV,5,14)
break
case"grocery":p.c7X(d,e)
break
case"calculator":p.c7E(d,e)
break
case"lumber":p.c84(d,e)
break
case"kitchen":p.c8_(d,e)
break
case"landscape":p.lw(d,e,D.cNr)
s=new A.aO($.V().r,B.ao,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.b4(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.cO(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.cO(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.ao(t,w))
s.D(new A.ao(0,w))
s.D(new A.bD())
w=A.L()
w.r=B.fs.j(0.85).gp(0)
d.aL(s,w)
p.zU(d,e,8)
p.wZ(d,e,B.iL,4,18)
break
case"plumbing":p.c8d(d,e)
break
case"electrical":p.lw(d,e,D.cWQ)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.V()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aW(new A.a7(0,0,0+e.a,0+e.b),u)
p.lB(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lB(d,e,B.lo.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.zU(d,e,10)
break
case"store":p.c8m(d,e)
break
case"paint_remodel":p.c88(d,e)
break
case"roofing":p.c8f(d,e)
break
case"warehouse":p.c8t(d,e)
break
case"vehicles":p.c8r(d,e)
break
case"farm":p.c7R(d,e)
break
case"restaurant":p.c8e(d,e)
break
case"tools":p.c8p(d,e)
break
case"wallet":p.c8s(d,e)
break
case"concrete":p.c7K(d,e)
break
case"blueprint":p.c7C(d,e)
break
default:p.aWV(d,e)}},
lw(d,e,f){var w,v=new A.a7(0,0,0+e.a,0+e.b)
$.V()
w=A.L()
w.sar(new A.a5(B.ax,B.aC,B.x,f,null,null).av(0,v))
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
wZ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.ge8()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.V()
q=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.G()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zU(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.V()
o=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.G()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aWV(d,e){var w,v=this
v.lw(d,e,D.cVG)
w=v.c
v.lB(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lB(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bGr(d,e,B.hP,w)
v.wZ(d,e,B.c.j(0.7),6,8)},
bGr(d,e,f,g){var w,v,u,t,s,r,q,p
$.V()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.G()
s.drawRect(A.c2(new A.a7(16,q,t,q+3)),p)
p.delete()}},
c7X(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lw(d,e,D.c4q)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.al(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.V()
l=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
l.r=D.cLo[B.o.F(s,4)].j(0.85).gp(0)
k=l.G()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lB(d,e,B.c.j(0.35),w,16)
j.wZ(d,e,B.iL,5,12)},
c7E(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lw(d,e,D.c4x)
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
r=D.cOU[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saT(0,new A.en(r,g,g,B.cS,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eU()
p.a4(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.al(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c4z[o]
l=B.jZ.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saT(0,new A.en(m,g,g,B.cS,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eU()
p.a4(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.al(o,3)*0.38)+Math.sin(n)*6))}h.lB(d,e,B.c.j(0.35),w*1.5,14)
h.lB(d,e,B.eB.j(0.55),-v*3.141592653589793*2,8)
h.lB(d,e,B.zo.j(0.4),r*2.8,22)
h.wZ(d,e,B.oR,8,10)
h.zU(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.V()
r=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.G()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c84(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,Y.are)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bx(new A.a7(20,q,u,q+10),B.i0)
$.V()
o=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
o.r=A.aq(B.fV,B.nY,(r+1)/2).gp(0)
n=o.G()
t.drawRRect(A.ex(p),n)
n.delete()}m.lB(d,e,B.fV.j(0.35),w,15)
m.zU(d,e,8)},
c8_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lw(d,e,D.cLT)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.V()
l=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.G()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lB(d,e,B.bJ.j(0.4),-w*3.141592653589793*2.2,11)
j.wZ(d,e,B.q5,4,14)},
c8d(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lw(d,e,D.cBL)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.V()
n=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.G()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.wZ(d,e,B.o5,6,12)
l.lB(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c8m(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lw(d,e,D.chS)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bx(new A.a7(q,14,q+u,22),B.hK)
$.V()
p=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
p.r=A.aq(B.f3,B.bJ,(r+1)/2).gp(0)
o=p.G()
t.drawRRect(A.ex(q),o)
o.delete()}n.lB(d,e,B.c.j(0.3),w,16)
n.zU(d,e,8)
n.wZ(d,e,B.ub,5,13)},
c88(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cHa)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bx(new A.a7(q,p,q+8,p+(18+r*22)),B.h5)
$.V()
q=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
q.r=[B.ig,B.dy,B.bJ,B.eE][s].j(0.85).gp(0)
o=q.G()
t.drawRRect(A.ex(p),o)
o.delete()}this.lB(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c8f(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cER)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.V()
p=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.G()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.wZ(d,e,B.cm,7,11)},
c8t(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cku)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bx(new A.a7(p,o,p+(t-r*8),o+16),B.i0)
$.V()
p=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
p.r=A.aq(B.cm,B.aN,(Math.sin(q)+1)/2).gp(0)
n=p.G()
s.drawRRect(A.ex(o),n)
n.delete()}this.lB(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c8r(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.d_o)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bx(new A.a7(r,q,r+28,q+8),B.i0)
$.V()
p=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.G()
t.drawRRect(A.ex(q),o)
o.delete()}this.zU(d,e,6)},
c7R(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cKz)
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
o=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.fW.j(0.85).gp(0)
o.c=3
n=o.G()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lB(d,e,B.lo.j(0.35),w,14)},
c8e(d,e){var w,v,u,t,s,r,q,p,o=this
o.lw(d,e,D.cMQ)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cr(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.V()
q=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.22).gp(0)
p=q.G()
t.drawOval(A.c2(r),p)
p.delete()}o.wZ(d,e,B.q5,5,16)
o.zU(d,e,7)},
c8p(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,D.cYd)
w=m.c
v=w*3.141592653589793
m.lB(d,e,B.nY.j(0.55),v*3,10)
m.lB(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.V()
o=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.nY.j(0.8).gp(0)
n=o.G()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c8s(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,D.d_T)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bx(new A.a7(p,o,p+36,o+22),B.hK)
$.V()
p=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
p.r=A.aq(B.iL,B.lo,q).gp(0)
n=p.G()
s.drawRRect(A.ex(o),n)
n.delete()}m.zU(d,e,9)
m.lB(d,e,B.c.j(0.4),w*2.2,12)},
c7K(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cRm)
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
o=new A.ap(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.bY.j(0.85).gp(0)
n=o.G()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c7C(d,e){var w,v,u,t,s,r,q,p
this.lw(d,e,D.cNH)
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
d.aW(new A.a7(0,p,0+v,p+6),u)
this.lB(d,e,B.kV.j(0.45),-t*3.141592653589793*2,11)},
ap(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.apS.prototype={
Y8(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aMS(),$async$Y8)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a6r(s),$async$Y8)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Y8,v)},
adh(d){return this.caI(d)},
caI(d){var w=0,v=A.j(x.H),u=this,t
var $async$adh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hRc(d),$async$adh)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$adh,v)},
B(d){var w,v,u,t=null,s=A.M(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.ji:B.il
w=x.p
v=A.a([C.aNf(!0,B.pX,1/0,B.pd,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bV(new A.bI(B.b0,t,t,new A.C(B.un,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.as5,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a5(B.b0,B.b3,B.x,u,t,t),B.n),B.bb))}v.push(A.an(8,A.B(A.a([A.D(A.dq(D.bwz,D.eRO,new C.cby(this,d),A.bk(B.aS,t,t,t,B.c,t,B.jG,t,t,t,t,B.c9)),1),B.aa,A.D(A.eB(D.bEy,D.f4l,this.gc1U(),A.db(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jG,t,t,D.aQJ,t,t,t,B.c9)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fC(1.7777777777777777,A.aD(!1,B.a1,!0,B.pX,new A.am(B.W,t,B.aZ,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.ac),t)}}
C.aIo.prototype={
aP(){this.aX()
this.aV()
this.dD()},
q(){var w=this,v=w.b0$
if(v!=null)v.a1(0,w.gdB())
w.b0$=null
w.a2()}}
C.aQ5.prototype={}
C.aQ4.prototype={}
C.aOa.prototype={}
C.X3.prototype={
S(){return new C.avU()}}
C.avU.prototype={
Z(){var w,v,u=this
u.a0()
u.a.toString
w=new A.bc("",B.b2,B.aM)
v=$.av()
u.d!==$&&A.aQ()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
II(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.P(D.ez3)
return}t=u.c
t.toString
v=u.e
A.a9(t,!1).M(new C.aQ5(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=m?B.dS:B.c,k=A.m(20),j=A.p(n,D.bEf,B.f,n,n,new A.o(B.aS.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aN:B.aE,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bn:B.br,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.be,i,A.aF(n,n,n,n,A.W(B.cv,m?B.bn:B.br,n,n,n,n),n,n,n,new C.cUb(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bn:B.br,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bn:B.br,n,n,n,n,n,n,n,n,11,n,n,B.cq,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fU8(new C.cUc(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aN:B.aE,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ji:B.il
r=A.m(12)
q=A.m(12)
p=m?B.dV:B.bY
t=A.aK(n,B.U,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bn(n,new A.b3(4,r,B.de),n,n,n,n,n,n,!0,new A.b3(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cUd(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A_.Hq,n,n,n,n)
u=m?B.aN:B.aE
m=m?B.dV:B.bY
return A.ey(n,l,new A.d1(B.lj,A.ci(A.v(A.a([j,B.aO,i,B.av,w,B.P,v,B.aO,t,B.bv,A.B(A.a([A.D(A.dV(B.dg,new C.cUe(d),A.db(n,n,n,n,n,n,n,n,n,u,n,n,B.cc,n,new A.b6(A.m(12),B.Z),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.D(A.bL(D.f4A,o.ga06(),A.bk(B.aS,n,n,n,B.c,n,B.cc,n,new A.b6(A.m(12),B.Z),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.q,n,B.z,n,B.A2,n,n,B.ak),n),n,n,n,V.A3,B.cZ,n,new A.b6(k,B.Z),n)}}
C.X2.prototype={
S(){return new C.avT()}}
C.avT.prototype={
Z(){this.a0()
var w=$.av()
this.d!==$&&A.aQ()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
II(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.P(D.ewL)
return}v=this.c
v.toString
A.a9(v,!1).M(new C.aQ4(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.M(d).ax.a===B.H,o=p?B.dS:B.c,n=A.m(20),m=A.p(q,D.bAW,B.f,q,q,new A.o(B.bS.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aE,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bn:B.br,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.be,l,A.aF(q,q,q,q,A.W(B.cv,p?B.bn:B.br,q,q,q,q),q,q,q,new C.cU7(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aS.j(p?0.12:0.08)
w=A.m(12)
v=A.H(B.aS.j(0.25),B.r,1)
u=A.W(B.afA,B.aS.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.aw,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aE,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aN:B.aE,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.ji:B.il
t=A.m(12)
s=A.m(12)
r=p?B.dV:B.bY
v=A.aK(q,B.U,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bn(q,new A.b3(4,t,B.de),q,q,q,q,q,q,!0,new A.b3(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cU8(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.kj,q,q,q,q)
w=p?B.aN:B.aE
p=p?B.dV:B.bY
return A.ey(q,o,new A.d1(B.lj,A.ci(A.v(A.a([m,B.aO,l,B.ay,v,B.bv,A.B(A.a([A.D(A.dV(B.dg,new C.cU9(d),A.db(q,q,q,q,q,q,q,q,q,w,q,q,B.cc,q,new A.b6(A.m(12),B.Z),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.D(A.bL(D.faQ,this.ga06(),A.bk(B.bS,q,q,q,B.c,q,B.cc,q,new A.b6(A.m(12),B.Z),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.z,q,B.A2,q,q,B.ak),q),q,q,q,V.A3,B.cZ,q,new A.b6(n,B.Z),q)}}
C.WB.prototype={
S(){return new C.auD()}}
C.auD.prototype={
Z(){var w,v=this
v.a0()
w=$.av()
v.d!==$&&A.aQ()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aQ()
v.e=new A.ar(new A.bc("1",B.b2,B.aM),w)
v.f!==$&&A.aQ()
v.f=new A.ar(B.as,w)
v.r!==$&&A.aQ()
v.r=new A.ar(B.as,w)},
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
gI3(){var w,v=this.e
v===$&&A.c()
w=A.d9(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gagp(){var w=this.f
w===$&&A.c()
w=A.d9(B.a.i(w.a.a))
return w==null?0:w},
gaZG(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aKn(d){var w,v=B.k.E(this.gI3()+d,0.25,999999),u=B.k.jA(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.aa(v,2)
w=A.ae("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saT(0,u)
this.n(new C.crL())},
aun(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aS,w,w,w,20):w,u=d.a,t=u?B.ji:B.il,s=A.m(14),r=A.m(14)
u=u?B.dV:B.bY
return A.bn(w,new A.b3(4,s,B.de),w,B.bC,w,w,w,w,!0,new A.b3(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b3(4,A.m(14),B.a70),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c1V(d,e,f){return this.aun(d,e,f,null)},
II(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gagp()<=0){s.c.I(x.q).f.P(D.eAV)
return}r=s.c
r.toString
v=s.gI3()
u=s.gagp()
t=s.gaZG()
A.a9(r,!1).M(new C.aOa(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.tc(n),l=n?B.dS:B.c,k=A.m(24),j=x.O,i=A.a([B.aS.j(0.22),B.bS.j(0.14)],j),h=A.m(14)
i=A.p(o,D.buw,B.f,o,o,new A.o(o,o,A.H(B.aS.j(0.35),B.r,1),h,o,new A.a5(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aE,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bn:B.br,o,o,o,o,o,o,o,o,12,o,o,B.cq,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.be,h,A.aF(o,o,o,o,A.W(B.cv,n?B.bn:B.br,o,o,o,o),o,o,o,new C.crR(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aE,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aK(o,B.U,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.aun(m,"Item name (optional)","Lumber, paint, labor\u2026",B.LJ),B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A_.Hq,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bn:B.br,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.ji:B.il
t=A.m(14)
s=A.H(n?B.dV:B.bY,B.r,1)
r=A.aF(o,o,o,o,A.W(B.AD,n?B.aN:B.aE,o,o,o,20),o,o,o,new C.crS(p),o,o,o,o,o,B.c9)
q=p.e
q===$&&A.c()
q=A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bG1,B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dY,o,o,o,1,o,o,!1,"\u2022",o,new C.crT(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aE,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a4(52,o,q,o),A.aF(o,o,o,o,A.W(B.hE,n?B.aN:B.aE,o,o,o,20),o,o,o,new C.crU(p),o,o,o,o,o,B.c9)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aN:B.aE,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.aw,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.aun(m,"Amount","0.00",B.hU),B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dY,o,o,o,1,o,o,!1,"\u2022",o,new C.crV(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.A(new A.J(D.cHC,new C.crW(p,m),t),t.k("ai.E"))
i=A.a([i,B.bv,v,B.ay,h,B.P,s,B.ab,A.c9(B.bI,u,B.by,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aE,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.T,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c1V(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.crX(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.kj,o,o,o,o)],w))}i.push(B.aO)
h=B.aS.j(n?0.18:0.1)
j=A.a([h,B.bS.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bn:B.br,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gI3()===B.k.jA(p.gI3())?B.k.N(p.gI3()):p.gI3()
s=p.gaZG()
r=A.zP(p.gagp())
i.push(A.p(o,A.B(A.a([A.D(A.v(A.a([u,B.av,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bn:B.br,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bzp(p.gI3()*p.gagp(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a5(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.iN,o,o,o))
i.push(B.bv)
j=A.m(14)
h=n?B.dV:B.bY
h=A.db(o,o,o,o,o,o,o,o,o,o,o,o,B.cc,o,new A.b6(j,B.Z),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.D(A.dV(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aE,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.crY(d),h),1),B.aw,A.D(A.dq(D.aj_,D.f78,p.ga06(),A.bk(B.aS,o,o,0,B.c,o,B.cc,o,new A.b6(A.m(14),B.Z),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.ey(o,l,new A.d1(U.a7n,A.ci(A.v(i,B.ah,o,B.e,B.Q,0,B.p),B.q,o,B.z,o,A8.qp,o,o,B.ak),o),o,o,o,B.Kr,B.cZ,o,new A.b6(k,B.Z),o)}}
C.a_8.prototype={
S(){return new C.bs3()}}
C.bs3.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a.e
v=$.av()
u.d!==$&&A.aQ()
u.d=new A.ar(new A.bc(w,B.b2,B.aM),v)},
q(){var w=this.d
w===$&&A.c()
w.R$=$.av()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?B.dS:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aN:B.aE,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aN:B.aE,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.ji:B.il
v=A.aK(s,B.U,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bn(s,new A.b3(4,A.m(12),B.de),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eWC(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dV(B.dg,new C.eWD(d),s),1)
r=A.bk(B.bS,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.ey(s,q,new A.C(B.A2,A.v(A.a([o,B.ay,v,B.aO,A.B(A.a([u,B.aw,A.D(A.bL(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eWE(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.cZ,s,new A.b6(p,B.Z),s)}}
C.a9i.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.El.prototype={
S(){return new C.bs1(null,null)}}
C.bs1.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,D.bf3,null,1,null,v)
w.cE(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.brN()},
gbt8(){switch(this.a.r.a){case 1:return A.a([B.aS,B.bS,B.aW],x.O)
case 2:return A.a([B.bs,B.aS,B.aW],x.O)
case 3:return A.a([B.aY,B.c7,B.jB],x.O)
case 4:return A.a([B.hn,B.bS,B.f4],x.O)
case 0:return A.a([B.aS,B.bS,B.aW],x.O)}},
B(d){var w=A.M(d),v=this.d
v===$&&A.c()
return new A.eq(A.c4(v,new C.eWA(this,new C.tc(w.ax.a===B.H)),null),null)}}
C.auw.prototype={
S(){return new C.bs2(null,null)}}
C.bs2.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.mE,null,1,null,v)
w.cE(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.brO()},
B(d){var w=this.d
w===$&&A.c()
return A.c4(w,new C.eWB(this),null)}}
C.bs0.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a7(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aY(w,w))
u=new A.aO($.V().r,B.ao,null,null,A.a([],x.v))
u.D(new A.iO(v))
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
w=A.wq(u)
t=A.a([],x.f5)
w=new A.uZ(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b9(A.jJ('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.G8(w,r)
w.j2()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aNG(d,q,r,o,0,0.2,4.2,0.92)
p.aNG(d,q,r,s,0.52,0.11,3.2,0.58)}},
aNG(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hem(e.a.a,e,t,t+f*i,!0),r=A.bxP(s.gbL().a.getBounds())
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
ap(d){return d.b!==this.b||d.d!==this.d}}
C.aKw.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.aKx.prototype={
q(){var w=this,v=w.a6$
if(v!=null)v.a1(0,w.gbt())
w.a6$=null
w.a2()},
aP(){this.aX()
this.aV()
this.bu()}}
C.tc.prototype={}
C.apR.prototype={
S(){return new C.aC0()},
gdS(){return this.c}}
C.aC0.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.ae7()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.JO(w,v)
this.a2()},
ae7(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ae7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bxW(t.c,t.d.a),$async$ae7)
case 2:s=e
if(s!=null&&u.c!=null)u.n(new C.evZ(u,s))
return A.h(null,v)}})
return A.i($async$ae7,v)},
Oi(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Oi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.n(new C.evQ(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.JO(t,s),$async$Oi)
case 2:if(u.c!=null)u.n(new C.evR(u))
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
return A.b(A.ch(null,null,!0,null,new C.evX(t,new C.tc(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$OO)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a6r(q),$async$OO)
case 6:case 5:t.n(new C.evY(t,r))
w=7
return A.b(t.Oi(),$async$OO)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OO,v)},
TP(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hQY(r),$async$TP)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.evL(t,new C.qs(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Oi(),$async$TP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TP,v)},
c6T(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h6q(t,new C.evP(u),w,v)},
a8n(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.c3(new A.ay(v,2.5,B.r,-1),B.Z,B.Z,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aQv,w,w,B.n),w,22,w,w,w,w,w,22)},
a7t(d){return this.bEM(d)},
bEM(d){var w=0,v=A.j(x.H),u=this
var $async$a7t=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.n(new C.evO(u,d))
w=2
return A.b(u.Oi(),$async$a7t)
case 2:return A.h(null,v)}})
return A.i($async$a7t,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.M(a2).ax.a===B.H,e=f?B.bW:B.iH,d=A.m(8),a0=A.W(O.Xa,f?B.bn:B.br,g,g,g,16),a1=x.p
a0=A.aI(!1,d,!0,new A.C(B.E8,A.B(A.a([a0,B.bq,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bn:B.br,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.ew_(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.W,g,B.aZ,B.q,A.a([A.bt(A.m(22),C.aNf(!0,A.m(22),1/0,B.pd,g,d,1/0),B.ap),A.an(10,A.dq(D.bz1,D.f9b,h.gaXE(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.ha,g,new A.b6(A.m(12),B.Z),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ab(0,B.G,B.aS.j(f?0.5:0.38),B.eP,22),new A.ab(-4,B.G,B.bS.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.H(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ab(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bt(s,new A.am(B.W,g,B.aZ,B.q,A.a([C.aNf(!0,A.m(16),1/0,B.La,g,r.c,1/0),A.bV(g,new A.o(g,g,g,g,g,new A.a5(B.b0,B.b3,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bb),A.an(g,h.a8n(!0),g,g,8,g,8,g),A.an(g,A.cpi(h.a8n(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.cpi(h.a8n(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.cpi(h.a8n(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dq(D.bv5,D.f3n,h.gaXE(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.ha,g,new A.b6(A.m(12),B.Z),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bGN,B.n),g,g,g,g,B.m0,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aE,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b_p,B.nh,B.fZ],u):A.a([B.aW,B.aS,B.bS],u)
t=x.V
s=A.a([new A.ab(0,B.G,B.aS.j(f?0.45:0.35),B.eP,24)],t)
r=A.m(22)
p=A.an(g,A.W(B.jK,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.H(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h0,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.bzp(h.d.gw5(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cq,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.H(B.fY.j(0.75),B.r,1.6)
t=A.a([new A.ab(0,B.G,B.aY.j(0.28),B.cF,14)],t)
j=B.aY.j(0.22)
i=A.m(10)
u=A.p(g,A.bt(r,new A.am(B.W,g,B.a9,B.q,A.a([p,new A.C(D.bjK,A.B(A.a([o,B.aw,A.aD(!1,B.a1,!0,g,A.aI(!1,n,!0,A.et(new A.C(Ad.VG,A.v(A.a([A.p(g,D.aiy,B.f,g,g,new A.o(j,g,A.H(B.aY.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ck,g,g,g),B.h7,D.eUm],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc6S(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ac)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a5(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fC(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bv,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aE,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b8,A.dq(Af.YT,D.eSn,h.gbtB(),A.bk(B.aS,g,g,g,B.c,g,B.iM,g,new A.b6(A.m(12),B.Z),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ab],a1)
w=h.d.d
if(w.length===0){w=f?B.dS:B.c
v=A.m(14)
u=A.H(f?B.dV:B.bY,B.r,1)
t=A.W(B.Xv,f?B.bn:B.br,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aE,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.T,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bn:B.br,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.uw,g,g,1/0))}else B.d.v(d,new A.J(w,new C.ew0(h,new C.tc(f)),A.U(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.zP,A.au(A.mq(g,f?B.bn:B.br,g,g,g,g,g,g,g,g),g,g,g),g))
return A.ce(g,e,A.bp(!0,A.v(A.a([new A.C(B.zV,a0,g),A.D(A.ci(A.v(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.wI,g,g,B.ak),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bx5(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dS:B.c,p=A.m(16),o=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.cF,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aTb,u,u,u,u,u,u,u,5),l=B.aS.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hW:B.h1,B.aW,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aN:B.aE,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcKJ()
v=A.zP(d.d)
B.d.v(t,A.a([B.av,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bn:B.br,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.b7,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aS.j(0.14),B.bS.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bzp(d.c*d.d,B.aW,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a5(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.ha,u,u,u)
w=x.p
return A.p(u,A.bt(n,new A.L2(A.B(A.a([m,A.D(new A.C(B.acU,A.B(A.a([l,B.be,t,B.aa,k,A.aF(u,u,u,u,A.W(B.cv,(r?B.bn:B.br).j(0.75),u,u,u,20),u,u,u,new C.evM(this,d),u,u,u,u,u,B.c9)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ah,u,B.e,B.j,0,u,u),u),B.ap),B.f,u,D.aS5,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.db,u,u,u,u)}}
C.abi.prototype={
Dc(d){return this.bG3(d)},
bG3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Dc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oD(d,o,!1),$async$Dc)
case 3:if(!f||d.e==null){w=1
break}A.a9(d,!1).M(null)
w=4
return A.b(A.bN(A7.zN,null,x.H),$async$Dc)
case 4:s=t.d
w=5
return A.b(C.fqm(!0,o,s),$async$Dc)
case 5:r=f
q=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Fd(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$Dc)
case 6:p=f
w=7
return A.b(A.oC(o,!1),$async$Dc)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Dc,v)},
Y9(d){return this.cmD(d)},
cmD(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oD(d,s,!1),$async$Y9)
case 3:if(!f||d.e==null){w=1
break}A.a9(d,!1).M(null)
A.ho(d,new C.apL(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oC(s,!1),$async$Y9)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y9,v)},
Oj(d){return this.ciO(d)},
ciO(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a9(d,!1).M(null)
w=3
return A.b(A.ho(d,D.aBh,!0,"NgmyWorksheetProjectScan",x.N),$async$Oj)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bzq(s),$async$Oj)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.P(D.eA3)
w=1
break}q=C.fKl(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$Oj)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Oj,v)},
Ya(d){return this.cug(d)},
cug(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Ya=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a9(d,!1).M(null)
w=3
return A.b(C.byY(),$async$Ya)
case 3:s=f
if(s==null){w=1
break}r=C.fKl(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$Ya)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Ya,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=new C.tc(u),s=w.d.d.length,r=u?B.dS:B.c,q=A.m(28),p=A.a([new A.ab(0,B.G,B.w.j(u?0.35:0.08),B.jP,36)],x.V),o=x.p
return A.bp(!0,new A.C(B.us,A.p(v,A.v(A.a([w.cle(d,t,s),new A.C(D.bj8,A.v(A.a([w.b_z(t,"QR restore"),B.T,A.B(A.a([w.aVF(t,!0,B.j8,B.aY,B.aY,new C.ew2(w,d),"Show to scan","QR code"),B.aw,w.auo(t,B.iP,B.b1,B.bA,new C.ew3(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b_z(t,"Backup files"),B.T,A.B(A.a([w.auo(t,B.hs,B.aS,B.bS,new C.ew4(w,d),"Full copy","Backup file"),B.aw,w.auo(t,M.xn,B.aX,B.aK,new C.ew5(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cle(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eT,B.cY,B.fr],k):A.a([B.aW,B.aS,B.bS],k)
w=A.an(l,A.W(B.tf,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.au(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kx,l,l,l,36),l,l,l)
u=A.m(14)
t=A.H(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ab(0,B.G,B.w.j(0.2),B.cF,12)],x.V)
r=this.d
s=A.p(l,C.aNf(!0,A.m(13),64,D.bqn,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aLo,l,l,l)
r=C.bzp(r.gw5(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.H(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.W,l,B.a9,B.q,A.a([w,new A.C(D.bjw,A.v(A.a([v,A.B(A.a([s,B.ex,A.D(A.v(A.a([u,B.av,t,B.P,A.B(A.a([r,B.aa,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fD,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.W(B.cv,B.c.j(0.85),l,l,l,l),l,l,l,new C.ew1(d),l,l,l,A.nc(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aIN,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a5(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b_z(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.aa,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bn:B.br,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aVF(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.abD:B.aN
if(e)w=B.aY.j(o?0.45:0.35)
else{w=o?B.dV:B.bY
w=w.j(o?0.8:1)}w=A.H(w,B.r,e?1.5:1)
v=e?A.a([new A.ab(0,B.G,B.aY.j(0.12),B.cF,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.H(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qq,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aN:B.aE,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,A.et(new A.C(E.VH,A.v(A.a([t,B.ab,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bn:B.br,r,r,r,r,r,r,r,r,11,r,r,B.cq,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ac),1)},
auo(d,e,f,g,h,i,j){return this.aVF(d,!1,e,f,g,h,i,j)}}
C.apL.prototype={
S(){return new C.bhu()}}
C.bhu.prototype={
Z(){this.a0()
this.ac0()},
ac0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ac0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bzr(p.c,p.d),$async$ac0)
case 7:q=e
if(r.c==null){w=1
break}r.n(new C.evG(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new C.evH(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ac0,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=g?B.zn:B.iH,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.W(B.ew,g?B.af:B.aj,h,h,h,18),h,h,h,new C.evI(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.ys],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eT,B.cY,B.fr],s):A.a([B.aW,B.aS,B.bS],s)
r=x.V
q=A.a([new A.ab(0,B.G,B.aS.j(g?0.4:0.3),B.eP,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dP,B.L,h,h)
p=C.bzp(p.gw5(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.ar,A.B(A.a([p,B.aa,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fD,h,h,h)],u),B.m,h,B.b7,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a5(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.W2,h,h,1/0)
t=g?D.b7B:B.c
q=A.m(24)
p=A.H(w?B.aY.j(0.4):B.aS.j(0.3),B.r,1)
r=A.a([new A.ab(0,B.G,B.w.j(g?0.25:0.06),B.dq,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a4k,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dQu)
else{m=A.m(20)
l=A.H(B.aJ,B.r,1)
o.push(A.p(h,A.pm(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c4,h,h,h))}}o.push(B.aO)
n=w?B.aY:B.aS
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.H((w?B.aY:B.aS).j(0.35),B.r,1)
k=w?B.Ls:B.LV
k=A.W(k,w?B.aY:B.aS,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.aw,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.af:B.aj,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iM,h,h,h))
return A.ce(h,f,A.bp(!0,A.v(A.a([new A.C(A4.KE,e,h),A.D(A.ci(A.v(A.a([s,B.aO,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rX,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.ae0,h,h,B.ak),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.apQ.prototype={
S(){return new C.aC_(A.yn(B.JY,B.nb,B.tj))}}
C.aC_.prototype={
q(){this.d.q()
this.a2()},
aIp(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iG(w,d)},
c2L(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hP1(t)
if(s!=null){this.aIp(s)
return}r=C.fYD(t)
if(r!=null)q=A.dp(r,p,0)
else q=!1
if(q){this.aIp(B.a.i(B.a.aY(r,B.a.cJ(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eC(A.a([A.aF(t,t,t,t,A.W(u.f?B.t7:A1.Ly,t,t,t,t,t),t,t,t,new C.evK(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.zn,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.f3h,t,t,t,1,t,!0),q=A.ym(u.d,B.bQ,u.gc2K()),p=A.m(28)
p=A.au(A.p(t,t,B.f,t,t,new A.o(t,t,A.H(B.aS,B.r,3),p,A.a([new A.ab(2,B.G,B.aS.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.ce(r,B.w,new A.am(B.W,t,B.aZ,B.q,A.a([q,p,A.an(32,A.p(t,D.f29,B.f,t,t,new A.o(w,t,A.H(B.aS.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iN,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aGK.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.Mv.prototype={
S(){return new C.aC1(D.a6j,A.a([],x.D))},
bn(){return this.r.$0()},
gdS(){return this.c}}
C.aC1.prototype={
gcsi(){return J.bAy(this.e,0,new C.ews())},
Z(){this.a0()
$.aT.c_$.push(this)
this.uR()},
q(){$.aT.hv(this)
this.a2()},
iE(d){if(d===B.fp)this.uR()},
uR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BQ(q.a.c).cK(0,B.k6),$async$uR)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.ewo(q,p))
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
if(q.c!=null&&q.f)q.n(new C.ewp(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uR,v)},
GB(d){return this.bCX(d)},
bCW(){return this.GB(null)},
bCX(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$GB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hR_(l,d),$async$GB)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l4(l,r,q,D.cRz,new A.Q(Date.now(),0,!1))
w=4
return A.b(C.JO(t.a.c,p),$async$GB)
case 4:o=f
w=5
return A.b(t.uR(),$async$GB)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.P(D.exe)
w=1
break}n=J.aU(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.P(D.eyY)
else n.I(q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.Dg(m)
case 1:return A.h(u,v)}})
return A.i($async$GB,v)},
Dg(d){return this.c6E(d)},
c6E(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Dg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.ho(s,new C.apR(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Dg)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.JO(u.a.c,t),$async$Dg)
case 5:case 4:w=6
return A.b(u.uR(),$async$Dg)
case 6:return A.h(null,v)}})
return A.i($async$Dg,v)},
uF(d){return this.bSm(d)},
bSm(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.byY(),$async$uF)
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
return A.b(C.bzq(q),$async$uF)
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
r.P(A.b1(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fKl(s)
w=15
return A.b(C.JO(t.a.c,p),$async$uF)
case 15:o=f
w=16
return A.b(t.uR(),$async$uF)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.P(D.ez2)
w=1
break}r.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.Dg(p)
case 1:return A.h(u,v)}})
return A.i($async$uF,v)},
Md(d){return this.bBD(d)},
bBD(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Md=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ch(null,null,!0,null,new C.ew9(d),s,null,!0,!0,x.y),$async$Md)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.of(t.a.c,A.a([],x.D)),$async$Md)
case 6:w=7
return A.b(t.uR(),$async$Md)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.P(D.exj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Md,v)},
c6R(d){var w=this.c
w.toString
A.c1(B.K,null,new C.ewi(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b0a(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.ji
else w=B.c
v=A.m(16)
u=A.H(p?B.dV:B.bY,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bU,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aN:B.aE,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.a1,!0,r,A.aI(!1,q,!0,A.p(r,A.v(A.a([s,B.ab,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bn:B.br,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.ur,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ac)},
YE(d,e){return this.c6F(d,e)},
c6F(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c1(B.K,null,new C.ewd(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$YE)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h6q(r,new C.ewe(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Mf(d,e),$async$YE)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$YE,v)},
aYf(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bU,u,u,u)
if(d)t=B.aD
else t=h.a?B.aN:B.aE
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bn:B.br,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.a1,!0,u,A.aI(!1,u,!0,new A.C(B.A0,A.B(A.a([s,B.be,t,A.W(B.es,w?B.bn:B.br,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ac)},
cdl(d,e,f,g,h,i){return this.aYf(!1,d,e,f,g,h,i)},
Mf(d,e){return this.bBN(d,e)},
bBN(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kQ(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Mf)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bxJ(t.a.c,d.a),$async$Mf)
case 6:w=7
return A.b(t.uR(),$async$Mf)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Mf,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=new C.tc(o),m=o?B.bW:B.iH
if(q.f)o=D.aYv
else{w=q.bwl(n)
v=q.bRt(n)
u=q.gbtv()
if(o)t=B.ji
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ab,v,B.aO,new C.El(A.p(p,A.B(A.a([q.axN(Q.L9,"Projects",n,D.a6j),q.axN(B.uD,"Cashier",n,D.aOA),q.axN(B.Et,"Family Tree",n,D.fps)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ej,0.95,u,p),B.bv],r)
w=q.d
if(w===D.a6j){w=J.aa(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aN:B.aE,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b8,new C.auw(q.gaMx(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.cdn(n)],r))}else{o=q.a
if(w===D.aOA)u.push(new C.alX(o.c,n,p))
else{w=q.r
u.push(new C.an2(o.c,o.d,o.e,o.f,new C.ewv(q),new C.eww(q),new A.cw(w,x.b4)))}}o=A.ci(A.v(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A9.Ky,p,p,B.ak)}return A.ce(p,m,A.bp(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bwl(d){var w=null,v=A.m(8),u=d.a,t=A.W(O.Xa,u?B.bn:B.br,w,w,w,16)
return A.aI(!1,v,!0,new A.C(B.l0,A.B(A.a([t,B.bq,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bn:B.br,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ew6(this),w,w,w,w,w,w,w)},
gbtv(){switch(this.d.a){case 0:return D.a5C
case 1:return D.fgK
case 2:return D.a5D}},
bRt(d){var w=null,v=A.m(15),u=A.a([new A.ab(0,B.G,B.aS.j(0.35),B.ct,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bAM,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.be,D.bnG,A.aD(!1,B.a1,!0,w,A.aI(!1,A.m(12),!0,A.p(w,D.byl,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ewa(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ac)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.El(A.p(w,A.v(A.a([new A.C(E.VN,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.av,A.d(A.zP(this.gcsi()),w,w,w,w,w,w,D.eOY,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uq,B.iN,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aS,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.fgJ,w)},
axN(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aS:B.K,q=A.m(12),p=t?A.H(B.c.j(0.55),B.r,2):A.H(B.K,B.r,2),o=t?A.a([new A.ab(0.5,B.G,B.aS.j(0.42),B.cF,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bn:B.br
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bn:B.br
return A.D(A.aD(!1,B.a1,!0,u,A.aI(!1,s,!0,A.dg(u,A.B(A.a([w,B.et,new A.dm(1,B.cl,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b7,B.j,0,u,u),u,u,B.cp,new A.o(r,u,p,q,o,u,B.n),B.ip,u,u,u,B.KB,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.ewr(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ac),1)},
cdn(d){var w,v,u,t,s,r,q=this,p=null
if(J.cj(q.e)){w=d.a
v=w?B.dS:B.c
u=A.m(15)
t=A.p(p,D.byq,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ab(2,B.G,B.aS.j(0.5),B.eP,28)],x.V),D.bJ9,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aE,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.El(A.p(p,A.v(A.a([t,B.d5,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bn:B.br,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dX,A.B(A.a([A.D(q.aO0(B.iP,"Scan QR",new C.ewl(q),d),1),B.aw,A.D(q.aO0(M.xn,"Upload file",new C.ewm(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bL(D.fcA,q.gaMx(),A.bk(B.aS,p,p,p,B.c,B.fR,p,p,new A.b6(A.m(12),B.Z),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bkA,1.05,D.a5C,p)}w=J.b5(q.e,new C.ewn(q,d),x.l)
w=A.A(w,w.$ti.k("ai.E"))
return new C.El(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bU,1,D.a5C,p)},
aO0(d,e,f,g){var w=null,v=B.aS.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.H(B.aS.j(0.45),B.r,1)
return A.aD(!1,B.a1,!0,u,A.aI(!1,t,!0,A.p(w,A.v(A.a([A.W(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eNp,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.acO,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ac)},
cdm(d,e){var w,v,u=null,t=e.a,s=t?B.dS:B.c,r=A.m(14),q=A.H(t?B.dV:B.bY,B.r,1),p=A.a([new A.ab(0,B.G,B.w.j(t?0.35:0.08),B.ea,10)],x.V),o=A.m(14),n=t?B.bn:B.br
n=A.bt(B.a6X,new A.fC(1.7777777777777777,C.aNf(!0,B.fq,1/0,Q.L9,n,d.c,1/0),u),B.ap)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aN:B.aE,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.av,A.d(""+d.d.length+" budget items \xb7 "+A.zP(d.gw5()),u,u,u,u,u,u,D.eLA,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.a1,!0,u,A.aI(!1,o,!0,A.v(A.a([n,new A.C(B.bC,A.B(A.a([v,A.aF(u,u,u,u,A.W(Aa.LL,t?B.bn:B.br,u,u,u,u),u,u,u,new C.ewj(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.ewk(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ac),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.btP.prototype={}
C.qs.prototype={
ac(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcKJ(){var w,v,u,t,s=this.c
if(s===B.k.jA(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.ae("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l4.prototype={
gw5(){return B.d.cG(this.d,0,new C.crc())},
ac(){var w=this,v=w.d,u=A.U(v).k("J<1,a1<n,@>>")
v=A.A(new A.J(v,new C.crb(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ab()],x.N,x.z)},
b72(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l4(w.a,w.b,v,u,w.e)},
b6K(d){return this.b72(d,null)},
QY(d){return this.b72(null,d)}}
C.Gh.prototype={
a3(){return"FamilyGender."+this.b}}
C.hR.prototype={
ac(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.h2g(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aAk(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hR(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.aii.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.ko.prototype={
galK(){var w=this.f
return new A.a3(w,new C.bJR(),A.U(w).k("a3<1>")).gJ(0)},
ac(){var w=this,v=w.f,u=A.U(v).k("J<1,a1<n,@>>")
v=A.A(new A.J(v,new C.bJQ(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ab(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hHy(w.y)],x.N,x.z)},
xG(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.ko(w.a,v,u,t,s,r,w.r,q,p,o)},
b71(d,e){var w=null
return this.xG(w,w,d,e,w,w,w,w)},
cAO(d,e,f,g,h,i,j){return this.xG(d,e,f,g,h,i,j,null)},
aAp(d,e){var w=null
return this.xG(w,w,w,d,w,w,e,w)},
czi(d){var w=null
return this.xG(w,w,w,w,w,w,d,w)},
czG(d){var w=null
return this.xG(w,w,w,w,w,w,w,d)},
aAb(d){var w=null
return this.xG(w,w,w,w,d,w,w,w)},
cAk(d,e,f){var w=null
return this.xG(w,d,w,e,w,w,f,w)},
cz5(d){var w=null
return this.xG(w,w,d,w,w,w,w,w)},
czT(d,e){var w=null
return this.xG(d,w,w,w,w,e,w,w)}}
C.crd.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cre.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aE2.prototype={}
C.b5h.prototype={
bx(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b5h()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aX(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b5g.prototype={
gvq(){return!0},
gEJ(){return this.z.b<this.b.length},
aPA(d){switch(0){case 0:return d.a.c}},
aPh(d){switch(0){case 0:return d.a.d}},
bL0(d,e){switch(0){case 0:return new A.hB(d,e)}},
bKp(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fS(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iv(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.G2(b4)
switch(0){case 0:v=b5.b
u=new A.kl(0,v,0,1/0)
t=w===B.R6
break}s=A.a([],x.gZ)
r=A.T(x.cM,x.S)
for(b3=b1.z,q=B.d.fP(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fS(b4,u,!0)
f=b1.aPA(g)
f.toString
e=b1.aPh(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aE2(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.m(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aE2(k,j,i))}d=s.length
switch(0){case 0:q=b5.cq(new A.hB(m,l))
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
a8=b1.aPA(g)
e=b1.aPh(g)
e.toString
a9=b1.bKp(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bL0(a6,a3+a9)
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
Fd(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hR(){return this.z}}
C.bs4.prototype={}
var z=a.updateTypes(["aw<~>()","S(hR)","S(ko)","~()","S(mT)","a1<n,@>(ko)","I(ko,ko)","n(hR)","ko(a1<@,@>)","S(l4)","S(tI)","mT(a1<@,@>)","tI()","I(l4,l4)","hR(a1<@,@>)","a1<n,@>(hR)","S(qs)","aw<~>(l4)","es<n?>(hR)","I(hR,hR)","n?(hR)","a1<n,@>(mT)","Y4(Y)","n(n)","aaY(Y)","r(nR)","I(mT,mT)","hR(hR)","cH(bs<n,Ey>)","cH(IC)","~(hR)","I?(hR)","hR()","ak<hR>()","S(tH)","S(IC)","C(hR)","~(Gh)","S(acu)","r(Gh,n,a0)","Xt(Y)","bs<n,ak<a1<n,@>>>(n,ak<mT>)","~(I)","+count,id,name(I,n,n)(ko)","ko(ko)","Yp(Y)","Yq(Y)","S(lk)","lk()","n(ko)","a_8(Y)","X3(Y)","X2(Y)","Xr(Y)","Xv(Y)","r(qs)","abi(Y)","~(lH)","aw<~>([n?])","P(P,l4)","r(l4)","P(P,qs)","a1<n,@>(qs)","qs(a1<@,@>)","X1(Y)","R_(Y)","cp(Gg)","l4(a1<@,@>)","tH()","n(l4)","a1<n,@>(l4)","n(Q)","I(hR)","ko(a1<n,@>)","WB(Y)"])
C.fj_.prototype={
$1(d){return d.a+" "+d.b},
$S:119}
C.fiZ.prototype={
bfN(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qm(s,d,B.he,E.DQ),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.R(r!=null&&A.JB(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bfN(d)},
$S:267}
C.fj0.prototype={
$1(d){return d.b},
$S:119}
C.frZ.prototype={
$1(d){var w=null
return A.ey(w,B.K,new F.NQ(this.a,this.b,w),w,w,0,B.VI,B.cZ,w,w,w)},
$S:46}
C.f9g.prototype={
$1(d){return d!=null},
$S:208}
C.f9h.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:208}
C.f9m.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:154}
C.fgJ.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f2(d,w,w,w,A.fZ(w,B.qS,w,w,w,w,w,w,w,B.dp,w,w,10.5,w,B.ef,w,!0,w,w,w,w),w),u=f?B.ef:B.uy
return new A.nn(D.bg7,A.a7B(A.a([new A.fJ(130,w,v),new A.y6(1,B.Em,A.f2(e,w,w,w,A.fZ(w,g==null?D.dSH:g,w,w,w,w,w,w,w,B.dp,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.wm,B.l8))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1877}
C.fgI.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uR(999)
f=A.wj(A.lf(h,A.f2("Cashier",h,h,h,A.fZ(h,D.ye,h,h,h,h,h,h,h,B.dp,h,h,10,h,B.ef,h,!0,h,h,h,h),h),h,new A.km(D.dSy,h,f,B.hv,h),h,h,D.bgA,h))
w=A.wj(A.f2("Debt receipt",h,h,h,A.fZ(h,h,h,h,h,h,h,h,h,B.dp,h,h,22,h,B.ef,h,!0,h,h,h,h),h))
v=A.wj(A.f2(C.w3(new A.Q(Date.now(),0,!1),!0),h,h,h,D.a4u,h))
u=A.uR(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f2(s,h,h,h,A.fZ(h,h,h,h,h,h,h,h,h,B.dp,h,h,14,h,B.ef,h,!0,h,h,h,h),h)
r=A.f2("Person who owes",h,h,h,D.a4u,h)
q=A.uR(10)
p=x.C
u=A.lf(h,A.y1(A.a([s,new A.fJ(h,2,h),r,new A.fJ(h,10,h),A.lf(h,A.y1(A.a([A.f2("Amount owed",h,h,h,D.a4u,h),new A.fJ(h,2,h),A.f2(A.zP(t.c),h,h,h,A.fZ(h,D.ye,h,h,h,h,h,h,h,B.dp,h,h,20,h,B.ef,h,!0,h,h,h,h),h)],p),B.qk,B.l8),h,new A.km(B.ou,h,q,B.hv,h),h,h,D.bfP,1/0)],p),B.qk,B.l8),h,new A.km(E.aCn,h,u,B.hv,h),h,h,D.bhH,1/0)
q=new A.n6(D.dSB,0.9,B.kp)
r=A.uR(12)
s=i.c
o=s.$2("Original due",C.w3(t.r,!1))
n=s.$2("Current due",C.w3(t.f,!1))
m=i.d
l=new A.n6(m,1.1,B.kp)
k=A.uR(8)
j=i.a
k=A.a([o,n,new A.fJ(h,6,h),A.lf(h,A.wj(A.f2(t.gaGX(),h,h,h,A.fZ(h,m,h,h,h,h,h,h,h,B.dp,h,h,11,h,B.ef,h,!0,0.5,h,h,h),h)),h,new A.km(h,new A.p3(l,l,l,l),k,B.hv,h),h,h,D.bgK,1/0),new A.fJ(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.ye))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.ye))
else{n=A.f2("Missed days ("+n+")",h,h,h,A.fZ(h,B.qS,h,h,h,h,h,h,h,B.dp,h,h,10.5,h,B.ef,h,!0,h,h,h,h),h)
m=A.U(o).k("J<1,Qz>")
o=A.A(new A.J(o,new C.fgH(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fJ(h,4,h),n,new A.fJ(h,6,h),new C.b5g(5,5,new C.b5h(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fJ(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fJ(h,8,h),w,new A.fJ(h,3,h),v,new A.fJ(h,16,h),u,new A.fJ(h,10,h),A.lf(h,A.y1(k,B.wm,B.l8),h,new A.km(h,new A.p3(q,q,q,q),r,B.hv,h),h,h,B.acY,1/0)],p)
w=j.a
if(w!=null){v=new A.n6(B.GO,1,B.kp)
B.d.v(f,A.a([new A.fJ(h,16,h),A.f2("Debtor signature",h,h,h,A.fZ(h,B.qS,h,h,h,h,h,h,h,B.dp,h,h,10,h,B.ef,h,!0,h,h,h,h),h),new A.fJ(h,6,h),A.lf(h,new A.Gv(w,B.T7,h,h),h,new A.km(h,new A.p3(v,v,v,v),A.uR(6),B.hv,h),82,h,B.KD,1/0)],p))}f.push(new A.fJ(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f2(w,h,h,h,D.eEO,h))
f.push(new A.fJ(h,18,h))
f.push(A.wj(A.f2("NGMY.ORG",h,h,h,A.fZ(h,D.ye,h,h,h,h,h,h,h,B.dp,h,h,14,h,B.ef,h,!0,1.8,h,h,h),h)))
return f},
$S:357}
C.fgH.prototype={
$1(d){var w=null,v=new A.n6(D.GP,0.7,B.kp),u=A.uR(999)
return A.lf(w,A.f2(C.w3(d,!1),w,w,w,A.fZ(w,D.GP,w,w,w,w,w,w,w,B.dp,w,w,9.5,w,B.ef,w,!0,w,w,w,w),w),w,new A.km(w,new A.p3(v,v,v,v),u,B.hv,w),w,w,D.blV,w)},
$S:1878}
C.bYn.prototype={
$1(d){var w=null,v=B.bM.j(0.08),u=A.m(999),t=A.H(B.bM.j(0.28),B.r,1)
return A.p(w,A.d(C.w3(d,!1),w,w,w,w,w,w,D.eL4,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eC,w,w,w)},
$S:1879}
C.fsu.prototype={
$1(d){var w=null,v=A.aH(d,B.bR,x.w).w,u=A.m(26),t=A.aF(w,w,w,w,B.aiS,w,w,w,new C.fsr(d),w,w,w,w,w,B.c9),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.ey(w,B.K,new A.d1(new A.aW(0,380,0,v.a.b*0.9),A.aD(!1,B.a1,!0,u,new A.C(B.Vy,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dm(1,B.cl,A.ci(A.v(A.a([new A.eq(new C.aVr(r,w),s),B.T,A.B(A.a([A.D(A.eB(B.xy,D.f97,new C.fss(s,r,d),A.db(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f0,w,new A.b6(A.m(14),B.Z),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.D(A.dq(B.YJ,D.f60,new C.fst(r,d),A.bk(B.aW,w,w,w,B.c,w,B.f0,w,new A.b6(A.m(14),B.Z),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.q,w,B.z,w,w,w,w,B.ak),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aE,0,w,w,w,w,w,B.ac),w),w,w,0,Ae.VW,B.cZ,w,w,w)},
$S:46}
C.fsr.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.fss.prototype={
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
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.an(o,0,32)
w=5
return A.b(A.rl(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fst.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fnj(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.P(A.b1(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fsm.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.ey(w,B.aE,A.v(A.a([new A.C(D.bhv,A.B(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.n1,w,w,w),1),A.aF(w,w,w,w,B.l6,w,w,w,new C.fsk(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dm(1,B.cl,new A.C(B.is,A.bt(A.m(14),A.fG(t,B.A,w,w,B.cn,B.ds,!1,w,!1,w,w),B.ap),w),w),new A.C(B.Kh,new A.a4(1/0,w,A.dq(B.om,D.aLN,new C.fsl(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b6(A.m(14),B.Z),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.Ks,B.cZ,w,new A.b6(v,B.Z),w)},
$S:46}
C.fsk.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.fsl.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rl(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fsy.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.ey(w,B.aE,new A.C(D.bhD,A.v(A.a([A.B(A.a([D.bmU,A.aF(w,w,w,w,B.l6,w,w,w,new C.fsw(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.eq(A.bt(A.m(14),A.p(w,A.b2(w,w,w,new C.b7q(s.ax,w),B.at),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ab,new A.a4(1/0,w,A.dq(B.om,D.aLN,new C.fsx(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b6(A.m(14),B.Z),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.cZ,w,new A.b6(v,B.Z),w)},
$S:46}
C.fsw.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.fsx.prototype={
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
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.an(p,0,32)
r=J.f6(B.dD.gaN(s))
w=5
return A.b(A.rl(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.P(A.b1(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fc2.prototype={
$1(d){return d.a===this.a},
$S:239}
C.dz4.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dyQ.prototype={
bf0(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dS:B.c
s=u.a
w=2
return A.b(A.c1(t,null,new C.dyT(s,q,e),p,!0,!0,!1,B.H3,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dyU(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bf0(d,e)},
$S:1880}
C.dyT.prototype={
$1(d){var w,v=null,u=this.c===B.v9,t=u?D.cX3:D.cTB
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aN:B.aE,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bp(!0,new A.C(L.adv,A.v(A.a([u,B.av,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bn:B.br,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ab,A.i8(!0,v,v,B.z,I.aJ4,new C.dyS(this.a,w,t,d),t.length,v,B.dM,B.ak,!0)],x.p),B.ah,v,B.e,B.Q,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:34}
C.dyS.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aN
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bn:B.br).j(0.16)
u=A.H(u,B.r,q?1.6:1)
return A.aI(!1,p,!0,A.p(B.A,C.aVq(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dyR(t.d,r),s,s,s,s,s,s,s)},
$S:182}
C.dyR.prototype={
$0(){A.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.dyU.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dyO.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:94}
C.dyP.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cG(B.cp,e,v)
return new A.cU(e,!1,A.ic(B.A,A.au(A.aD(!1,B.a1,!0,v,new A.e6(new C.dyN(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ac),v,v,v),v,new A.bd(t,new A.bl(0.96,1,u),u.k("bd<bF.T>"))),v)},
$S:30}
C.dyN.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.bR,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dS:B.c,f=A.m(14),e=A.H((h?B.bn:B.br).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aE,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aI(!1,v,!0,new A.C(B.ej,A.W(B.cv,i.a.d.a?B.bn:B.br,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dyy(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aN:B.aE,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aOx("Name")
r=l.a
q=r.d==null?k:new C.dyz(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.lU
n=A.H(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aK(k,B.U,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b6V(new A.C(B.ho,A.aI(!1,p,!0,A.p(B.A,C.aVq(m==null?"\ud83d\udc64":A.fhx(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.ck,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.kj,k,B.a4b,k,k)
v=A.a([v,B.ab,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bn:B.br,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.B(A.a([A.D(i.aP7("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dyA(r,a0),r.d===B.v9),1),B.aa,A.D(i.aP7("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dyF(r,a0),r.d===B.a18),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bI(B.a3,k,k,A.hi(D.bA3,D.f7F,new C.dyG(r,l.e,a0),A.fr(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c9)),k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aN:B.aE,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tK(A.ae("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aOy("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dY,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.M:B.aN
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.H((t?B.bn:B.br).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bn:B.br,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.w3(r.a,!1)
v.push(A.aD(!1,B.a1,!0,q,A.aI(!1,p,!0,A.p(k,A.B(A.a([A.D(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aE,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bwY],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bm,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dyH(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ac))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bn:B.br,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aN:B.aE,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aOx("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ab)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aE,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bn:B.br,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aWE(r.b.length!==0,B.m2,new C.dyI(r,i,a0),new C.dyJ(r,a0),"Upload from gallery","ID photo"))
v.push(i.aWE(r.c.length!==0,D.bql,new C.dyK(r,i,d,a0),new C.dyL(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ac.a5z("Signature (optional)",t,new C.dyM(a0),new C.dyB(a0,t),new C.dyC(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bn:B.br
s=(i?B.bn:B.br).j(0.28)
s=A.D(A.dV(E.aLH,new C.dyD(d),A.db(k,k,k,k,k,k,k,k,k,t,k,k,B.wx,k,new A.b6(A.m(10),B.Z),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.wx,k,new A.b6(A.m(10),B.Z),k,k,k)
v.push(A.B(A.a([s,B.aa,A.D(A.bL(A.d(h?"Save":"Update",k,k,k,k,k,k,B.tR,k,k,k),new C.dyE(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.ci(A.v(v,B.ah,k,B.e,B.Q,0,B.p),B.q,k,B.z,k,k,k,k,B.ak),B.f,k,new A.aW(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uu,B.iN,k,k,360)},
$S:166}
C.dyy.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dyz.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dyA.prototype={
$0(){return this.b.$1(new C.dyx(this.a))},
$S:0}
C.dyx.prototype={
$0(){var w=this.a
w.d=B.v9
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dyF.prototype={
$0(){return this.b.$1(new C.dyw(this.a))},
$S:0}
C.dyw.prototype={
$0(){var w=this.a
w.d=B.a18
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dyG.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dyH.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xS(null,u.b,A.bW(2020,1,1,0,0,0,0,0),null,s,A.bW(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dyv(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dyv.prototype={
$0(){var w=this.b
return this.a.a=A.bW(w.gcd(),w.gcb(),w.gcr(),0,0,0,0,0)},
$S:0}
C.dyI.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.NK(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dyu(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dyu.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dyJ.prototype={
$0(){return this.b.$1(new C.dyt(this.a))},
$S:0}
C.dyt.prototype={
$0(){return this.a.b=""},
$S:0}
C.dyK.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dS:B.c
w=3
return A.b(A.c1(q,null,new C.dyr(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.NK(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dys(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dyr.prototype={
$1(d){var w=null
return A.bp(!0,A.v(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.aip,w,w,w,w,new C.dyl(d),!1,w,w,w,w,w,w,w,D.eZS,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.ain,w,w,w,w,new C.dym(d),!1,w,w,w,w,w,w,w,D.f57,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ag,!0,!0)},
$S:34}
C.dyl.prototype={
$0(){A.a9(this.a,!1).M("camera")
return null},
$S:0}
C.dym.prototype={
$0(){A.a9(this.a,!1).M("gallery")
return null},
$S:0}
C.dys.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dyL.prototype={
$0(){return this.b.$1(new C.dyq(this.a))},
$S:0}
C.dyq.prototype={
$0(){return this.a.c=""},
$S:0}
C.dyM.prototype={
$0(){return this.a.$1(new C.dyp())},
$S:0}
C.dyp.prototype={
$0(){},
$S:0}
C.dyB.prototype={
$0(){return this.a.$1(new C.dyo(this.b))},
$S:0}
C.dyo.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dyC.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.afm(u.a,null,null,new C.dyn(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dyn.prototype={
$4(d,e,f,g){this.a.$1(new C.dyk(this.b,d))},
$S:437}
C.dyk.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.v(w,this.b)},
$S:0}
C.dyD.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dyE.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.P(D.eAU)
return}if(w.a.d==null){w.c.I(x.q).f.P(D.exQ)
return}A.a9(w.c,!1).M(!0)},
$S:0}
C.dz7.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:94}
C.dz8.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dS:B.c,n=A.m(14),m=A.H((p?B.bn:B.br).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aN:B.aE,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zP(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bn:B.br,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.y5(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.y5(r).length>0?B.bM:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bn:B.br
t=(q?B.bn:B.br).j(0.28)
s=x.p
return new A.cU(e,!1,A.au(A.aD(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.ay,A.B(A.a([A.D(A.dV(B.n4,new C.dz5(d),A.db(r,r,r,r,r,r,r,r,r,w,r,r,B.jG,r,new A.b6(A.m(10),B.Z),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.D(A.bL(D.f5w,new C.dz6(d),A.bk(B.cY,r,r,r,B.c,r,B.jG,r,new A.b6(A.m(10),B.Z),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ah,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.A4,E.VN,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ac),r,r,r),r)},
$S:30}
C.dz5.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dz6.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.dz1.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dz2(r),p=r.a.d.a,o=p?B.dS:B.c,n=A.m(14),m=A.H((p?B.bn:B.br).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aN:B.aE,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zP(l.c),s,s,s,s,s,s,D.eMx,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jn((r.a.d.a?B.bn:B.br).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.Xv,"View receipt",new C.dyV(r,d,l))
u=l.x!=null
t=u?B.uS:B.pf
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bhA,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dyW(r,d,l)),q.$3$icon$label$onTap(B.Al,"Edit",new C.dyX(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.m2,"View / download ID",new C.dyY(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bqk,"View / download selfie",new C.dyZ(r,d,l)))
if(l.gaBZ())p.push(q.$3$icon$label$onTap(A3.YA,"View / download signature",new C.dz_(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bM,B.e8,"Delete",new C.dz0(r,d,l)))
p.push(B.av)
return A.bp(!0,new A.C(B.uq,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:34}
C.dz2.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aN:B.aE
else w=d
return A.aI(!1,v,!0,new A.C(B.eM,A.B(A.a([A.W(e,w,v,v,v,20),B.be,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1881}
C.dyV.prototype={
$0(){A.a9(this.b,!1).M(null)
var w=this.a.c
w.toString
C.fsq(w,this.c)},
$S:0}
C.dyW.prototype={
$0(){A.a9(this.b,!1).M(null)
this.a.Qk(this.c)},
$S:0}
C.dyX.prototype={
$0(){A.a9(this.b,!1).M(null)
this.a.BZ(this.c)},
$S:0}
C.dyY.prototype={
$0(){var w,v,u
A.a9(this.b,!1).M(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzN(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dyZ.prototype={
$0(){var w,v,u
A.a9(this.b,!1).M(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzN(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dz_.prototype={
$0(){A.a9(this.b,!1).M(null)
var w=this.a.c
w.toString
C.fsv(w,this.c)},
$S:0}
C.dz0.prototype={
$0(){A.a9(this.b,!1).M(null)
this.a.Mq(0,this.c)},
$S:0}
C.dz9.prototype={
$1(d){return d.x==null},
$S:239}
C.dza.prototype={
$1(d){return d.x!=null},
$S:239}
C.dzb.prototype={
$2(d,e){return d+e.c},
$S:1882}
C.dzc.prototype={
$0(){return this.a.btY()},
$S:0}
C.dz3.prototype={
$0(){return this.a.acd(this.b)},
$S:0}
C.fcq.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fcr.prototype={
$0(){return B.d.gL(D.ZM)},
$S:z+68}
C.d_x.prototype={
$0(){var w=this.a
return w.n(new C.d_v(w,this.b))},
$S:0}
C.d_v.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d_w.prototype={
$0(){},
$S:0}
C.d_y.prototype={
$0(){var w=this.a.gbSa()
A.a9(this.b,!1).M(w)
return null},
$S:0}
C.feh.prototype={
$1(d){return C.fOn(A.a_(d,x.N,x.z))},
$S:z+11}
C.fei.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fej.prototype={
$2(d,e){var w=A.c5(d.a,null),v=A.c5(e.a,null)
if(w!=null&&v!=null)return B.o.aJ(w,v)
return d.d.aJ(0,e.d)},
$S:z+26}
C.fr7.prototype={
$1(d){return d.ac()},
$S:z+21}
C.fyO.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fbU.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bJM.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eT(e,v)?v:null},
$S:1883}
C.frD.prototype={
$1(d){var w=this
return new C.Xt(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d0c.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d0b(w,d))},
$S:z+66}
C.d0b.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d00.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cu(u)?v.r>=J.aa(v.d):w)v.r=J.aa(v.d)-1},
$S:0}
C.d_Y.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d_z.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d_A.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d01.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d_I.prototype={
$1(d){var w=null,v=A.M(d).ax.a===B.H,u=v?B.dS:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aE,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bn:B.br,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.er(A.a([A.bJ(!1,B.dg,w,w,!0,w,w,new C.d_G(d),w,w),A.bL(B.vu,new C.d_H(d),A.bk(B.mu,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:21}
C.d_G.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.d_H.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.d_J.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.d_Z.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d0_.prototype={
$0(){return B.d.gL(D.xI)},
$S:z+12}
C.d_E.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxm(0),t=J.aa(w.d)
w=J.aa(w.d)===1?"page":"pages"
return new C.R_(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d_F.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_K.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.X1(v,u,J.aa(w.d),null)},
$S:z+64}
C.d_L.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d0a.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aG(s,new C.WK(r.y,r.gxm(0),J.aa(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d08(r),s,s,s,s,s,s,!1,B.ad)
else{w=e-1
v=J.q(r.d,w)
J.aa(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b6P(v,e,w,u,t,r.gbJy(),C.h2f(r.y.Q),r.gxm(0),s)
w=t}return A.c4(q,new C.d09(r,e),new A.C(B.VP,w,s))},
$S:1884}
C.d09.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcV(t).ay){t=this.b
u=x.cy.a(B.d.gcV(u.f.f)).gtW(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.di()
t=u.a
t.$flags&2&&A.ah(t)
t[11]=0.0013
u.fm(v*3.141592653589793*0.5)
return A.fo(B.a3,A.d8(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:43}
C.d08.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aD2(B.p2,B.iq)},
$S:0}
C.d_V.prototype={
$0(){var w=this.a
return w.n(new C.d_U(w))},
$S:0}
C.d_U.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d_W.prototype={
$0(){var w=this.a.c
w.toString
A.a9(w,!1).M(null)
return null},
$S:0}
C.d_B.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jA.j(0.5),r=x.p,q=A.a([D.eYz,B.ab],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cj(p.d)?"Write this book":"Write a new book"
q.push(p.WV(d,B.dR,w,J.cj(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.WV(d,I.ago,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cu(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cN,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.k0.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cN,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.k0.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.WV(d,Z.ahs,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.WV(d,B.pl,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.WV(d,B.pl,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.ey(u,E.zw,A.bp(!0,new A.C(A2.zZ,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.adV,B.cZ,u,new A.b6(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:46}
C.d_X.prototype={
$0(){A.a9(this.a,!1).M(this.b)
return null},
$S:0}
C.d_O.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cu(w.d)
return new C.Xv(v,J.cu(w.d),w.r+1,null)},
$S:z+54}
C.d_P.prototype={
$1(d){var w=null
return A.nX(!1,A.er(w,w,w,E.zw,new A.k4(this.a,new C.d_N(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:303}
C.d_N.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3S,B.nN,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:737}
C.d_Q.prototype={
$0(){return this.a.a=!1},
$S:47}
C.d_R.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:176}
C.d_S.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_T.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zY(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.PR(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.n(new C.d_M(s,t))
w=4
return A.b(s.ku(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_M.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d03.prototype={
$1(d){var w=null
return A.nX(!1,A.er(w,w,w,E.zw,new A.k4(this.a,new C.d02(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:303}
C.d02.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3S,B.nN,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:737}
C.d04.prototype={
$0(){return this.a.a=!1},
$S:47}
C.d05.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:176}
C.d06.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:176}
C.d07.prototype={
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
C.d_C.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bcg(B.p2,T.K6)},
$S:0}
C.d_D.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aD2(B.p2,T.K6)},
$S:0}
C.d1D.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.d1E.prototype={
$1(d){var w=this.a
return w.n(new C.d1C(w))},
$S:9}
C.d1C.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d1F.prototype={
$1(d){var w=this.a
return w.n(new C.d1B(w))},
$S:9}
C.d1B.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d1G.prototype={
$1(d){var w=this.a
return w.n(new C.d1A(w))},
$S:9}
C.d1A.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d1H.prototype={
$0(){var w=this.a
return w.n(new C.d1z(w,this.b))},
$S:0}
C.d1z.prototype={
$0(){var w=this.b
this.a.d.saT(0,w)
return w},
$S:0}
C.d1I.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga_s()
A.a9(this.b,!1).M(new A.bld(w,v))},
$S:0}
C.d0r.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d0q.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Xr(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d0v.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d0u.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b2G(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.ht,v,v,v)
return A.er(A.a([A.bJ(!1,B.dg,v,v,!0,v,v,new C.d0s(d),v,v),A.bL(B.vu,new C.d0t(d),A.bk(B.mu,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.zw,w,v,v,v,v,D.eXv,v)},
$S:21}
C.d0s.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.d0t.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.d0w.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.d0x.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.ci(A.c9(B.bI,r,B.by,18,14),B.q,t,B.z,t,D.biw,t,t,B.ak)},
$S:304}
C.d0p.prototype={
$0(){return this.a.On(0,this.b)},
$S:0}
C.d0o.prototype={
$0(){return this.a.NR(0,this.b)},
$S:0}
C.czY.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.czZ.prototype={
$0(){return B.d.gL(D.xI)},
$S:z+12}
C.cA_.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bX(0,new A.C(d,A.bV(w,new A.o(w,w,A.H(this.a.j(f),B.r,g),v,w,w,B.n),B.bb),w),0,0,0)},
$S:1886}
C.cTp.prototype={
$1(d){return this.a.n(new C.cTo(this.b,this.c))},
$S:9}
C.cTo.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cTO.prototype={
$1(d){return this.a.n(new C.cTB())},
$S:2}
C.cTB.prototype={
$0(){},
$S:0}
C.cTP.prototype={
$1(d){return this.a.n(new C.cTA())},
$S:2}
C.cTA.prototype={
$0(){},
$S:0}
C.cTQ.prototype={
$0(){var w=this.a
return w.n(new C.cTz(w,this.b))},
$S:0}
C.cTz.prototype={
$0(){var w=this.a
return w.d=w.gnu().Ep(this.b.a)},
$S:0}
C.cTR.prototype={
$0(){var w=this.a
return w.n(new C.cTy(w,this.b))},
$S:0}
C.cTy.prototype={
$0(){var w=this.a
return w.d=w.gnu().cyC(this.b)},
$S:0}
C.cTS.prototype={
$1(d){return this.a.n(new C.cTx())},
$S:2}
C.cTx.prototype={
$0(){},
$S:0}
C.cTT.prototype={
$0(){var w=this.a
return w.n(new C.cTw(w,this.b))},
$S:0}
C.cTw.prototype={
$0(){var w=this.a
return w.d=w.gnu().cyH(this.b.a)},
$S:0}
C.cTU.prototype={
$1(d){var w=this.a
return w.n(new C.cTJ(w,d))},
$S:6}
C.cTJ.prototype={
$0(){var w=this.a
return w.d=w.gnu().czB(this.b)},
$S:0}
C.cTV.prototype={
$1(d){var w=this.a
return w.d=w.gnu().aAe(d)},
$S:2}
C.cTW.prototype={
$1(d){var w=this.a
return w.d=w.gnu().cyK(d)},
$S:2}
C.cTY.prototype={
$1(d){var w=this.a
return w.d=w.gnu().czz(d)},
$S:2}
C.cTZ.prototype={
$1(d){var w=this.a
return w.n(new C.cTI(w,d))},
$S:9}
C.cTI.prototype={
$0(){var w=this.a
return w.d=w.gnu().czq(this.b)},
$S:0}
C.cU_.prototype={
$0(){var w=this.a,v=w.gnu(),u=B.a.i(w.gxm(0).a.a),t=B.a.i(w.gaxC().a.a)
u=v.b7b(B.a.i(w.ganM().a.a),t,u)
A.a9(this.b,!1).M(u)
return null},
$S:0}
C.dMp.prototype={
$0(){var w=this.a
w.v2()
w.a.bn()
w.a.p5()},
$S:0}
C.dMo.prototype={
$0(){var w=this.a
w.v2()
w.a.bn()
w.a.p5()},
$S:0}
C.dMr.prototype={
$0(){var w=this,v=w.b
if(J.cu(v)||J.cj(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dMs.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dMt.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dMn.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dMq.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dMv.prototype={
$0(){this.a.MW()
return null},
$S:0}
C.dMu.prototype={
$0(){return this.a.Dh(this.b)},
$S:0}
C.dLQ.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bJ(!1,B.dg,w,w,!0,w,w,new C.dLO(d),w,w),r=A.bk(B.bS,w,w,w,w,w,w,w,w,w,w,w)
return A.er(A.a([s,A.bL(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dLP(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:21}
C.dLO.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dLP.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.dLR.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cz5(this.b)},
$S:0}
C.dLL.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aON(w.b,w.c,w.d)},
$S:8}
C.dLj.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dLk.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dLy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Fg(t.a.c),$async$$0)
case 2:s=r.qH(q.dE(e,new C.dLw(t)))
if(s!=null&&t.c!=null)t.n(new C.dLx(t,s))
t.a.bn()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLw.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dLx.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dLz.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dLA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dLK.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.czT(C.h2p(w),w)},
$S:0}
C.dLI.prototype={
$1(d){return new A.e6(new C.dLH(this.a,this.b),null)},
$S:20}
C.dLH.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dS:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aE,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bn:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ai3,v,v,v,p>0?new C.dLD(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aO,A.B(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aE,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.aiC,v,v,v,new C.dLE(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.er(A.a([A.bJ(!1,B.dg,v,v,!0,v,v,new C.dLF(d),v,v),A.bL(B.pN,new C.dLG(d),A.bk(B.bS,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:168}
C.dLD.prototype={
$0(){return this.b.$1(new C.dLC(this.a))},
$S:0}
C.dLC.prototype={
$0(){return--this.a.a},
$S:0}
C.dLE.prototype={
$0(){return this.b.$1(new C.dLB(this.a))},
$S:0}
C.dLB.prototype={
$0(){return++this.a.a},
$S:0}
C.dLF.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dLG.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.dLJ.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.czG(this.a.a)
w.r.a7(0)},
$S:0}
C.dL7.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.afs(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fXi(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dL8.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.A(u.f,x.P)
w.push(this.b)
v.d=u.aAb(w)},
$S:0}
C.dLT.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aaY(this.b,w,this.c,null)},
$S:z+24}
C.dLN.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dS:B.c,t=A.m(20),s=A.W(B.l3,B.aS,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aE,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bn:B.br,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ab,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bn:B.br,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.er(A.a([A.bL(D.f6y,new C.dLM(d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],o),B.b7,w,u,v,w,s,w,new A.b6(t,B.Z),r,w)},
$S:21}
C.dLM.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dL9.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dLa.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dLb.prototype={
$1(d){return d.a},
$S:z+7}
C.dLc.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hR(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aAb(w)},
$S:0}
C.dLg.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.afs(q)
w=A.U(q).k("a3<1>")
q=A.A(new A.a3(q,new C.dLe(r),w),w.k("G.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fXi(v.e,null,r,v.f,v.r,new C.dLf(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dLf.prototype={
$0(){return this.a.a7u(this.b)},
$S:0}
C.dLe.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dLh.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("J<1,hR>")
w=A.A(new A.J(w,new C.dLd(this.b),v),v.k("ai.E"))
u.d=t.aAb(w)},
$S:0}
C.dLd.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dLS.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dLt.prototype={
$1(d){return d.length!==0},
$S:3}
C.dLu.prototype={
$1(d){var w=this
return new A.e6(new C.dLs(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dLs.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dS:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aE,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bn:B.br,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ab],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bn:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dLo(u,e,o),A.U(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aK(v,B.U,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bn(v,new A.b3(4,A.m(12),B.de),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.lI,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.ah,v,B.e,B.Q,0,B.p)
t=w.a
return A.er(A.a([A.bJ(!1,B.dg,v,v,!0,v,v,new C.dLp(d),v,v),A.bL(B.HN,new C.dLq(t,u,o,e),A.bk(B.bS,v,v,v,v,v,v,v,v,v,v,v)),A.bL(D.eVK,new C.dLr(t,u,o,d),A.bk(B.aS,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:168}
C.dLo.prototype={
$1(d){var w=null
return A.dL(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aN:B.aE,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bDw,w,w,w,new C.dLn(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1887}
C.dLn.prototype={
$0(){return this.a.$1(new C.dLl(this.b,this.c))},
$S:0}
C.dLl.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dLp.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dLq.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dLm(w.c,u))
v.bJ(0,B.c2)}},
$S:0}
C.dLm.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dLr.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a9(w.d,!1).M(!0)},
$S:0}
C.dLv.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cAk(this.b,D.rY,C.Fe(v,w.a.c))},
$S:0}
C.dM_.prototype={
$1(d){return d.as},
$S:z+1}
C.dM0.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iG(this.b,w)},
$S:0}
C.dM1.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hQH(v)
return w.TV(v==null?null:v.a)},
$S:0}
C.dM2.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.htu(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gci(k)){k=A.aN(1/0,e.a,e.b)
s=A.aN(1/0,e.c,e.d)
l.ciY(new A.as(u,t),v.gbd3(),new A.as(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cAn:D.cyW
q=A.H(s?B.dw:D.b2r,B.r,1)
p=A.m(22)
o=A.bX(0,A.b2(m,m,m,new C.ba9(s,m),B.at),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bt(p,new A.am(B.W,m,B.a9,B.q,A.a([o,A.bX(0,A.tT(new A.N(n,n,n,n),new A.a4(u,t,new C.bb1(l.d,v,l.f,w,new C.dLW(l),l.gc3p(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.bsb(s,new C.dLX(l,e),new C.dLY(l,e),new C.dLZ(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a5(B.b0,B.b3,B.x,r,m,m),B.n),m,m,m,P.ad1,m,m,m,m)},
$S:211}
C.dLW.prototype={
$1(d){var w=this.a
w.n(new C.dLU(w,d))},
$S:2}
C.dLU.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.K(0,v)},
$S:0}
C.dLX.prototype={
$0(){var w=this.b
return this.a.b4U(1.25,new A.as(A.aN(1/0,w.a,w.b),A.aN(1/0,w.c,w.d)))},
$S:0}
C.dLY.prototype={
$0(){var w=this.b
return this.a.b4U(0.8,new A.as(A.aN(1/0,w.a,w.b),A.aN(1/0,w.c,w.d)))},
$S:0}
C.dLZ.prototype={
$0(){var w=this,v=w.b
return w.a.aON(new A.as(A.aN(1/0,v.a,v.b),A.aN(1/0,v.c,v.d)),new A.as(w.c,w.d),w.e.gbd3())},
$S:0}
C.dM3.prototype={
$0(){var w=this.a
return w.n(new C.dLV(w))},
$S:0}
C.dLV.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dLi.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fE(new A.fx(s.c)),$async$$0)
case 2:t.wQ("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d0B.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.beJ(u,C.h6t(v.c,u),new C.d0A(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d0A.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d0C.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bi0(d.d,d.c,u.f.t(0,d.a),new C.d0z(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d0z.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fcu.prototype={
$1(d){var w,v=d.e
if(this.a.ak(0,v))return v
v=this.b
w=A.U(v)
return A.qH(new A.cV(new A.a3(v,new C.fcv(d),w.k("a3<1>")),new C.fcw(),w.k("cV<1,n>")))},
$S:z+20}
C.fcv.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fcw.prototype={
$1(d){return d.a},
$S:z+7}
C.fcs.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fct.prototype={
$1(d){return d.b},
$S:z+7}
C.fcz.prototype={
$1(d){var w,v=d.e
if(this.a.ak(0,v))return v
v=this.b
w=A.U(v)
return A.qH(new A.cV(new A.a3(v,new C.fcA(d),w.k("a3<1>")),new C.fcB(),w.k("cV<1,n>")))},
$S:z+20}
C.fcA.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fcB.prototype={
$1(d){return d.a},
$S:z+7}
C.fcx.prototype={
$1(d){var w,v=A.eP([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ak(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fcy.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d0E.prototype={
$0(){return this.a},
$S:z+32}
C.d0V.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ak(0,d)},
$S:243}
C.d0N.prototype={
$2(d,e){var w=this.a.ce(0,d,new C.d0O()),v=J.a8(w)
if(!v.t(w,e))v.K(w,e)},
$S:120}
C.d0O.prototype={
$0(){return A.a([],x.s)},
$S:738}
C.d0M.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eT(w,e)
return w===!0},
$S:278}
C.d0F.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d0L.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d0K.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aU(v==null?D.B2:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aU(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.t(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aU(t==null?D.B2:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1889}
C.d0G.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d0P.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.K(0,a9)
w=a7.b
w.m(0,a9,b0)
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
w.m(0,s,b0)
a7.e.m(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aU(t==null?D.B2:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.ba(w,new C.d0Q(r)))w.push(r)}}B.d.bm(w,new C.d0R(a8))
B.d.b_(w,new C.d0S())
q=C.htt(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.edE],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.K)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.m(0,a9,a8)
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
if(a4!=null)v.m(0,a4,a3)
else a8.m(0,a9,new A.bkY(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1890}
C.d0Q.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d0R.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d0S.prototype={
$2(d,e){return B.o.aJ(d.Q,e.Q)},
$S:z+19}
C.d0T.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bg(v,A.a2(v).k("bg<2>")).cG(0,0,B.q_)+88-w.gL(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.m(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.m(0,d,u)},
$S:690}
C.d0U.prototype={
$1(d){return 16+d*156},
$S:264}
C.d0D.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.h(0,d)
if(n==null)n=0
w=o.b
v=w.$1(n)
o.c.m(0,d,e)
u=o.d.h(0,d)
t=o.e
s=o.f
if(u!=null){r=s.h(0,d)
r.toString
t.m(0,d,new C.Ey(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.m(0,u,new C.Ey(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.m(0,d,new C.Ey(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aU(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.IC(d,new A.u(e+t,w),s,s.length))}},
$S:176}
C.d0H.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aG2(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:120}
C.d0I.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d0J.prototype={
$2(d,e){return B.k.aJ(d.a,e.a)},
$S:739}
C.d0W.prototype={
$2(d,e){return B.k.aJ(d.a,e.a)},
$S:739}
C.d0X.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:457}
C.d0Y.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:177}
C.d0Z.prototype={
$1(d){return d>=0.5},
$S:130}
C.eX9.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hs(A.aI(!1,v,!0,new A.a4(38,38,A.W(d,this.a.c?B.c:B.cz,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1892}
C.eyP.prototype={
$1(d){var w=null,v=A.m(8),u=B.bS.j(0.12),t=A.m(8)
return new A.C(B.ob,A.aI(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eIr,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.KC,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eyO(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eyO.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dgc.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dgb.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.n0,B.L,w,w)
return A.er(A.a([A.bJ(!1,B.dg,w,w,!0,w,w,new C.dg9(d),w,w),A.bJ(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lS,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dga(d),w,w)],x.p),B.b7,B.DX,w,u,D.bjM,w,D.blG,new A.b6(v,B.Z),w,w)},
$S:21}
C.dg9.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.dga.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.dgl.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dgm.prototype={
$1(d){var w=this.a
return w.n(new C.dgk(w,d))},
$S:z+37}
C.dgk.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgn.prototype={
$1(d){var w=null
return A.pb(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dgq.prototype={
$1(d){var w=this.a
return w.n(new C.dgj(w,d))},
$S:32}
C.dgj.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dgp.prototype={
$1(d){var w=null
return A.pb(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dgr.prototype={
$1(d){var w=this.a
return w.n(new C.dgi(w,d))},
$S:32}
C.dgi.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dgs.prototype={
$0(){var w=this.a
return w.n(new C.dgh(w))},
$S:0}
C.dgh.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dgt.prototype={
$0(){var w=this.a
return w.n(new C.dgg(w))},
$S:0}
C.dgg.prototype={
$0(){return++this.a.at},
$S:0}
C.dgu.prototype={
$0(){var w=this.a
return w.n(new C.dgf(w))},
$S:0}
C.dgf.prototype={
$0(){return--this.a.ax},
$S:0}
C.dgv.prototype={
$0(){var w=this.a
return w.n(new C.dge(w))},
$S:0}
C.dge.prototype={
$0(){return++this.a.ax},
$S:0}
C.dgw.prototype={
$1(d){var w=this.a
return w.n(new C.dgd(w,d))},
$S:9}
C.dgd.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dgo.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dgx.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bS.j(0.18)
else w=q.c.a?B.dS:B.c
v=A.m(12)
if(p)u=B.bS
else u=(q.c.a?B.dV:B.bY).j(0.85)
u=A.H(u,B.r,p?1.5:1)
if(p)t=B.bS
else t=q.c.a?B.bn:B.br
t=A.W(f,t,r,r,r,18)
if(p)s=B.bS
else s=q.c.a?B.bn:B.br
return A.D(A.aD(!1,B.a1,!0,r,A.aI(!1,o,!0,A.dg(r,A.v(A.a([t,B.av,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b9,new A.o(w,r,u,v,r,r,B.n),B.eK,r,r,r,B.jG,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dgy(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ac),1)},
$S:z+39}
C.dgy.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dgH.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.c3U.prototype={
$2(d,e){return new A.bs(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:89}
C.c40.prototype={
$1(d){return d.ac()},
$S:z+5}
C.c41.prototype={
$2(d,e){var w=J.b5(e,new C.c4_(),x.a)
w=A.A(w,w.$ti.k("ai.E"))
return new A.bs(d,w,x.d2)},
$S:z+41}
C.c4_.prototype={
$1(d){return d.ac()},
$S:z+21}
C.c3W.prototype={
$1(d){return C.aij(A.a_(d,x.N,x.z))},
$S:z+8}
C.c3X.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c3Y.prototype={
$1(d){return C.fOn(A.a_(d,x.N,x.z))},
$S:z+11}
C.c3Z.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c45.prototype={
$1(d){return new A.aD8(d.f.length,d.a,d.b)},
$S:z+43}
C.c46.prototype={
$2(d,e){return B.a.aJ(d.c,e.c)},
$S:640}
C.c42.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c43.prototype={
$1(d){return d.czi(C.Fe(d,this.a))},
$S:z+44}
C.dMc.prototype={
$1(d){return C.tp(d,this.a.a.c)},
$S:z+2}
C.dMd.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dMh.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dMi.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dM9.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWU(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xn("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oC(r.c,r.e),$async$$0)
case 4:s.xn(p)
w=5
return A.b(s.I8(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMa.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWU(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xn("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oC(r.c,r.e),$async$$0)
case 4:s.xn(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMb.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Tk(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xn("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xn("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xn("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.I8(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a6(j)
o=r.a
if(o.c==null){w=1
break}o.xn(B.a.e1(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dMg.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWT(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xn("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a9(r,!1).cp(A.eF(new C.dMf(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oC(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dMf.prototype={
$1(d){var w=this.b
return new C.Yp(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dMe.prototype={
$1(d){return D.fkd},
$S:z+46}
C.dMk.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dMl.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dMj(w,d)
return new A.C(B.db,new C.bb5(this.b,d.c,d.a,w,null),null)},
$S:1893}
C.dMj.prototype={
$0(){return this.a.VB(this.b.b)},
$S:0}
C.dM4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dM5.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dM6.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dM7.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dM8.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.dMm.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dp(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a9(this.b,!1).M(s)
return}},
$S:178}
C.dyc.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dyd.prototype={
$0(){return B.d.gL(D.a06)},
$S:z+48}
C.dye.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(A.au(A.W(this.b.d,B.c.j(0.95),w,w,D.cGa,44),w,w,w),w,w,new C.bfQ(u,t,v,w),B.at)},
$S:70}
C.fs5.prototype={
$1(d){return A.pa(new C.fs4(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:140}
C.fs4.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dS:B.c,p=A.a([new A.ab(0,B.G,B.w.j(r?0.35:0.08),B.qR,24)],x.V),o=r?B.dV:B.bY
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aS.j(0.25),B.bS.j(0.18)],x.O)
w=A.p(t,D.bya,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a5(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aN:B.aE,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.T,o,new A.C(E.adZ,A.B(A.a([w,B.be,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bn:B.br,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.i8(!0,t,e,B.z,D.ew0,new C.fs3(this.b,s),20,B.adz,t,B.ak,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.ko,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:115}
C.fs3.prototype={
$2(d,e){var w=null,v=D.a06[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.H(s?B.dV:B.bY,B.r,1),q=A.a([new A.ab(0,B.G,B.w.j(s?0.35:0.08),B.ea,8)],x.V),p=A.m(15),o=A.D(new C.a4e(v.a,!0,w),1),n=s?B.ji:B.il,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aN:B.aE,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.a1,!0,w,A.aI(!1,u,!0,A.et(A.bt(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bn:B.br,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.lt,w,w,w)],l),B.ah,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fs2(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ac)},
$S:76}
C.fs2.prototype={
$0(){A.a9(this.a,!1).M("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cby.prototype={
$0(){return this.a.adh(this.b)},
$S:0}
C.frv.prototype={
$1(d){return D.fh1},
$S:z+74}
C.fyG.prototype={
$1(d){var w=this
return new C.a_8(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.frx.prototype={
$1(d){return new C.X3(this.a,null)},
$S:z+51}
C.frw.prototype={
$1(d){return D.fi0},
$S:z+52}
C.cUb.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.cUc.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cUa(w,d))},
$S:32}
C.cUa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cUd.prototype={
$1(d){return this.a.II()},
$S:2}
C.cUe.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.cU7.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.cU8.prototype={
$1(d){return this.a.II()},
$S:2}
C.cU9.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.crL.prototype={
$0(){},
$S:0}
C.crR.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.crS.prototype={
$0(){return this.a.aKn(-1)},
$S:0}
C.crT.prototype={
$1(d){return this.a.n(new C.crQ())},
$S:2}
C.crQ.prototype={
$0(){},
$S:0}
C.crU.prototype={
$0(){return this.a.aKn(1)},
$S:0}
C.crV.prototype={
$1(d){return this.a.n(new C.crP())},
$S:2}
C.crP.prototype={
$0(){},
$S:0}
C.crW.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aS.j(0.2)
if(s)v=B.aS
else v=this.b.a?B.dV:B.bY
return A.tJ(u,u,B.aW,r,u,new C.crO(t,d),B.A5,s,w,u,new A.ay(v,1,B.r,-1),B.c9)},
$S:1894}
C.crO.prototype={
$1(d){var w=this.a
return w.n(new C.crM(w,this.b))},
$S:9}
C.crM.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.crX.prototype={
$1(d){return this.a.n(new C.crN())},
$S:2}
C.crN.prototype={
$0(){},
$S:0}
C.crY.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.eWC.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a9(this.b,!1).M(w)},
$S:2}
C.eWD.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.eWE.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a9(this.b,!1).M(w)},
$S:0}
C.eWA.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbt8()
w=w.e
s=A.m(B.o.E(v-1,0,v))
return A.b2(new A.C(D.blF,new A.eq(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bs0(p,v,this.b.a,u,t,r),r,r,B.at)},
$S:70}
C.eWB.prototype={
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
s=A.aq(B.aS,B.bS,w)
s.toString
s=A.a([B.aW,s,B.aS],x.O)
return A.aD(!1,B.a1,!0,p,A.aI(!1,v,!0,A.et(D.dQE,r,new A.o(r,r,A.H(B.c.j(0.4),B.r,1.5),u,r,new A.a5(new A.d6(-1.2+t,-0.5),new A.d6(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ac)},
$S:126}
C.fql.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.evZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.evQ.prototype={
$0(){return this.a.e=!0},
$S:0}
C.evR.prototype={
$0(){return this.a.e=!1},
$S:0}
C.evX.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e6(new C.evW(w,this.b),null)},
$S:20}
C.evW.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dS:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aE,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.ey(w,u,new A.C(B.adT,A.v(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bn:B.br,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ab,C.fU8(new C.evT(r,e),r.a),B.ay,A.B(A.a([A.D(A.dV(B.dg,new C.evU(d),w),1),B.aw,A.D(A.bL(B.RL,new C.evV(r,d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ah,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.cZ,w,new A.b6(t,B.Z),w)},
$S:97}
C.evT.prototype={
$1(d){return this.b.$1(new C.evS(this.a,d))},
$S:32}
C.evS.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.evU.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.evV.prototype={
$0(){var w=this.a.a
A.a9(this.b,!1).M(w)
return null},
$S:0}
C.evY.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QY(this.b)},
$S:0}
C.evL.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.A(u.d,x.Q)
w.push(this.b)
v.d=u.b6K(w)},
$S:0}
C.evP.prototype={
$1(d){return this.bft(d)},
bft(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.JO(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iG(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.evO.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a3<1>")
w=A.A(new A.a3(w,new C.evN(this.b),v),v.k("G.E"))
u.d=t.b6K(w)},
$S:0}
C.evN.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.ew_.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iG(this.b,w)},
$S:0}
C.ew0.prototype={
$1(d){return this.a.bx5(d,this.b)},
$S:z+55}
C.evM.prototype={
$0(){return this.a.a7t(this.b)},
$S:0}
C.fyy.prototype={
$1(d){return new C.abi(this.a,this.b,this.c,null)},
$S:z+56}
C.ew2.prototype={
$0(){return this.a.Y9(this.b)},
$S:0}
C.ew3.prototype={
$0(){return this.a.Oj(this.b)},
$S:0}
C.ew4.prototype={
$0(){return this.a.Dc(this.b)},
$S:0}
C.ew5.prototype={
$0(){return this.a.Ya(this.b)},
$S:0}
C.ew1.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.evG.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.evH.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.evI.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
C.evK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pb(),$async$$0)
case 2:if(t.c!=null)t.n(new C.evJ(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.evJ.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.ews.prototype={
$2(d,e){return d+e.gw5()},
$S:z+59}
C.ewo.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ewp.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ew9.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dS:B.c,s=A.m(24),r=A.p(v,D.byA,B.f,v,v,new A.o(B.aD.j(u?0.18:0.08),v,A.H(B.aD.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aE,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bn:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aN:B.aE
u=u?B.dV:B.bY
w=x.p
return A.ey(v,t,new A.C(B.wJ,A.v(A.a([r,B.aO,q,B.P,p,B.d5,A.B(A.a([A.D(A.dV(B.n4,new C.ew7(d),A.db(v,v,v,v,v,v,v,v,v,o,v,v,B.f0,v,new A.b6(A.m(14),B.Z),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bL(D.f9Z,new C.ew8(d),A.bk(B.aD,v,v,v,v,v,B.f0,v,new A.b6(A.m(14),B.Z),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.cZ,v,new A.b6(s,B.Z),v)},
$S:46}
C.ew7.prototype={
$0(){A.a9(this.a,!1).M(!1)
return null},
$S:0}
C.ew8.prototype={
$0(){A.a9(this.a,!1).M(!0)
return null},
$S:0}
C.ewi.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dS:B.c,i=A.m(28),h=A.a([new A.ab(0,B.G,B.w.j(k?0.35:0.08),B.fG,28)],x.V),g=k?D.cMl:B.a_x,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.eqi,B.av,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cq,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a5(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.adW,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bn:B.br,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.D(v.b0a(B.b1,B.iP,new C.ewf(v,d),l,"Camera import","Scan QR"),1),B.aw,A.D(v.b0a(B.cs,M.xn,new C.ewg(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bn:B.br,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aD.j(k?0.14:0.06)
q=A.m(16)
p=A.H(B.aD.j(0.28),B.r,1)
o=A.p(m,D.by_,B.f,m,m,new A.o(B.aD.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bU,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aN:B.aE,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bn:B.br,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bp(!0,new A.C(B.us,A.p(m,A.v(A.a([g,new A.C(B.adU,A.v(A.a([w,B.T,u,B.bv,t,B.T,A.aD(!1,B.a1,!0,m,A.aI(!1,s,!0,A.p(m,A.B(A.a([o,B.be,n,A.W(B.es,k?B.bn:B.br,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.ewh(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ac)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:34}
C.ewf.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a9(u.b,!1).M(null)
w=2
return A.b(u.a.uF("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ewg.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a9(u.b,!1).M(null)
w=2
return A.b(u.a.uF("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ewh.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a9(u.b,!1).M(null)
w=2
return A.b(u.a.Md(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ewd.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dS:B.c,m=A.m(24),l=A.a([new A.ab(0,B.G,B.w.j(o?0.35:0.08),B.eP,24)],x.V),k=o?B.dV:B.bY
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bn:B.br
u=A.bt(w,new A.a4(48,48,C.aNf(!0,A.m(12),48,Q.L9,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aN:B.aE,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zP(v.gw5())
s=x.p
r=this.a
return A.bp(!0,new A.C(B.us,A.p(q,A.v(A.a([B.T,k,new A.C(D.adR,A.B(A.a([u,B.be,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bn:B.br,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zJ,r.cdl(B.tf,B.aS,new C.ewb(d),p,"QR code or backup file","Transfer project"),r.aYf(!0,B.e8,B.aD,new C.ewc(d),p,"Remove from this device","Delete project"),B.T],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:34}
C.ewb.prototype={
$0(){A.a9(this.a,!1).M("transfer")
return null},
$S:0}
C.ewc.prototype={
$0(){A.a9(this.a,!1).M("delete")
return null},
$S:0}
C.ewe.prototype={
$1(d){return this.bfu(d)},
bfu(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.JO(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uR(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.ewv.prototype={
$0(){var w=this.a
w.a.bn()
w.n(new C.ewu(w))},
$S:0}
C.ewu.prototype={
$0(){return this.a.r++},
$S:0}
C.eww.prototype={
$0(){var w=this.a
return w.n(new C.ewt(w))},
$S:0}
C.ewt.prototype={
$0(){return this.a.r++},
$S:0}
C.ew6.prototype={
$0(){var w=this.a.c
w.toString
return A.iG(w,null)},
$S:0}
C.ewa.prototype={
$0(){return this.a.c6R(this.b)},
$S:0}
C.ewr.prototype={
$0(){var w=this.a
return w.n(new C.ewq(w,this.b))},
$S:0}
C.ewq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.ewl.prototype={
$0(){return this.a.uF("scan")},
$S:0}
C.ewm.prototype={
$0(){return this.a.uF("file")},
$S:0}
C.ewn.prototype={
$1(d){return this.a.cdm(d,this.b)},
$S:z+60}
C.ewk.prototype={
$0(){return this.a.Dg(this.b)},
$S:0}
C.ewj.prototype={
$0(){return this.a.YE(this.b,this.c)},
$S:0}
C.crc.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.crb.prototype={
$1(d){return d.ac()},
$S:z+62}
C.cr9.prototype={
$1(d){return C.hce(A.a_(d,x.N,x.z))},
$S:z+63}
C.cra.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fbM.prototype={
$1(d){return d.y===D.k7},
$S:z+2}
C.fyW.prototype={
$1(d){return C.bxM(d,this.a)},
$S:z+2}
C.faY.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bJR.prototype={
$1(d){return!d.as},
$S:z+1}
C.bJQ.prototype={
$1(d){return d.ac()},
$S:z+15}
C.bJN.prototype={
$1(d){return C.fOo(A.a_(d,x.N,x.z))},
$S:z+14}
C.bJO.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bJP.prototype={
$1(d){return J.k(d)},
$S:17}
C.f36.prototype={
$2(d,e){return e.e.aJ(0,d.e)},
$S:z+13}
C.eZR.prototype={
$1(d){return C.fF4(A.a_(d,x.N,x.z))},
$S:z+67}
C.eZS.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.eZT.prototype={
$2(d,e){return e.e.aJ(0,d.e)},
$S:z+13}
C.frm.prototype={
$1(d){return J.k(d)},
$S:17}
C.frn.prototype={
$1(d){return d.a},
$S:z+69}
C.fro.prototype={
$1(d){return d.length!==0},
$S:3}
C.frp.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.frq.prototype={
$1(d){return d.QY(null).ac()},
$S:z+70}
C.fyU.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fcd.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fen.prototype={
$1(d){return C.aij(A.a_(d,x.N,x.z))},
$S:z+8}
C.feo.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fep.prototype={
$2(d,e){return e.r.aJ(0,d.r)},
$S:z+6}
C.feq.prototype={
$1(d){return d.ac()},
$S:z+5}
C.fer.prototype={
$1(d){return C.tp(d,this.a)},
$S:z+2}
C.fr9.prototype={
$1(d){return C.tp(d,this.a)},
$S:z+2}
C.fyP.prototype={
$1(d){return C.aij(A.a_(d,x.N,x.z))},
$S:z+8}
C.fyQ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fyR.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fbV.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fbW.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fz_.prototype={
$1(d){return!d.as},
$S:z+1}
C.fbw.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fbx.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fby.prototype={
$2(d,e){return B.o.aJ(d.Q,e.Q)},
$S:z+19}
C.fyH.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.ff9.prototype={
$1(d){return d.Q},
$S:z+72}
C.fr5.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fek.prototype={
$1(d){return C.aij(A.a_(d,x.N,x.z))},
$S:z+8}
C.fel.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fem.prototype={
$2(d,e){return e.r.aJ(0,d.r)},
$S:z+6}
C.fr3.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f_m.prototype={
$1(d){return d.length!==0},
$S:3}
C.f_n.prototype={
$1(d){return C.fOo(A.a_(d,x.N,x.z))},
$S:z+14}
C.f_o.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f_p.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f_q.prototype={
$1(d){return d.length!==0},
$S:3}
C.f_D.prototype={
$2(d,e){return d.eN(new C.f_E(e))},
$S:1895}
C.f_E.prototype={
$1(d){$.al.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1896}
C.f_A.prototype={
$1(d){return C.hy_(d,this.a)},
$S:z+73}
C.f_B.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f_C.prototype={
$2(d,e){return e.r.aJ(0,d.r)},
$S:z+6}
C.f3L.prototype={
$1(d){return d.a},
$S:z+49}
C.f3M.prototype={
$1(d){return d.length!==0},
$S:3}
C.f3N.prototype={
$2(d,e){return e.r.aJ(0,d.r)},
$S:z+6}
C.f5N.prototype={
$1(d){return d.ac()},
$S:z+5}
C.fak.prototype={
$1(d){return C.fZx(d,C.Fe(d,this.a))},
$S:z+5}
C.fal.prototype={
$1(d){return C.fZy(d,C.Fe(d,this.a))},
$S:z+5};(function aliases(){var w=C.aIo.prototype
w.bpt=w.q
w=C.aKw.prototype
w.brN=w.q
w=C.aKx.prototype
w.brO=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aA_.prototype,"gcan","cao",25)
var s
w(s=C.ax6.prototype,"gc3v","c3w",42)
v(s,"gaIE","LM",0)
v(s,"gcij","zN",0)
v(s,"gbEH","Mr",0)
v(s,"gcvL","xo",0)
v(s,"gcck","Zk",0)
v(s,"gbAa","M9",0)
v(s,"gbF7","V3",0)
w(s,"gbJy","bJz",71)
v(s,"gbuK","yR",0)
v(C.ax7.prototype,"gcvH","E7",0)
v(s=C.aAA.prototype,"gacT","uS",0)
v(s,"gc68","Yw",0)
v(s,"gaMD","GC",0)
v(s=C.aAx.prototype,"gcs2","a0m",0)
v(s,"gacT","uS",0)
v(s,"gcgr","a__",0)
v(s,"gc73","YJ",0)
w(s,"gc3p","c3q",30)
v(s,"gbEZ","GH",0)
v(s,"gcsY","csZ",3)
v(s,"gbVO","WH",0)
w(s,"gc1W","c1X",23)
v(s,"gc5T","c5U",3)
v(s=C.ayZ.prototype,"gc_K","NS",0)
v(s,"gc_M","c_N",3)
v(s,"gbBG","a76",0)
v(s=C.aAz.prototype,"gbI6","Vx",0)
v(s,"gbSh","Wa",0)
v(s,"gcmC","a_P",0)
v(s,"gciT","a_r",0)
v(C.aAy.prototype,"gciB","aeD",0)
v(C.apS.prototype,"gc1U","Y8",0)
v(C.avU.prototype,"ga06","II",3)
v(C.avT.prototype,"ga06","II",3)
v(C.auD.prototype,"ga06","II",3)
v(s=C.aC0.prototype,"gaXE","OO",0)
v(s,"gbtB","TP",0)
v(s,"gc6S","c6T",3)
w(C.aC_.prototype,"gc2K","c2L",57)
u(C.aC1.prototype,"gaMx",0,0,null,["$1","$0"],["GB","bCW"],58,0,0)
t(C,"h5G","hHw",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aB,[C.alQ,C.tH,C.mT,C.Gg,C.acu,C.Iu,C.tI,C.IC,C.Ey,C.bb3,C.aG2,C.an_,C.d1_,C.lk,C.aQ5,C.aQ4,C.aOa,C.tc,C.qs,C.l4,C.hR,C.ko,C.aE2])
u(A.i4,[C.fj_,C.fiZ,C.fj0,C.frZ,C.f9g,C.f9h,C.f9m,C.fgJ,C.fgI,C.fgH,C.bYn,C.fsu,C.fsm,C.fsy,C.fc2,C.dyT,C.dyO,C.dyP,C.dyr,C.dyn,C.dz7,C.dz8,C.dz1,C.dz2,C.dz9,C.dza,C.fcq,C.feh,C.fei,C.fr7,C.fyO,C.fbU,C.frD,C.d0c,C.d_z,C.d_I,C.d_Z,C.d_E,C.d_K,C.d_B,C.d_O,C.d_P,C.d_N,C.d03,C.d02,C.d1E,C.d1F,C.d1G,C.d0q,C.d0v,C.d0u,C.czY,C.cA_,C.cTp,C.cTO,C.cTP,C.cTS,C.cTU,C.cTV,C.cTW,C.cTY,C.cTZ,C.dMq,C.dLQ,C.dLL,C.dLj,C.dLw,C.dLz,C.dLI,C.dL7,C.dLT,C.dLN,C.dL9,C.dLa,C.dLb,C.dLg,C.dLe,C.dLd,C.dLt,C.dLu,C.dLo,C.dM_,C.dLW,C.d0B,C.d0C,C.fcu,C.fcv,C.fcw,C.fcs,C.fct,C.fcz,C.fcA,C.fcB,C.fcx,C.fcy,C.d0V,C.d0L,C.d0G,C.d0Q,C.d0R,C.d0U,C.d0I,C.d0X,C.d0Y,C.d0Z,C.eX9,C.eyP,C.dgb,C.dgl,C.dgm,C.dgn,C.dgq,C.dgp,C.dgr,C.dgw,C.dgx,C.c40,C.c4_,C.c3W,C.c3X,C.c3Y,C.c3Z,C.c45,C.c42,C.c43,C.dMc,C.dMf,C.dMe,C.dMl,C.dMm,C.dyc,C.fs5,C.frv,C.fyG,C.frx,C.frw,C.cUc,C.cUd,C.cU8,C.crT,C.crV,C.crW,C.crO,C.crX,C.eWC,C.fql,C.evX,C.evT,C.evP,C.evN,C.ew0,C.fyy,C.ew9,C.ewi,C.ewd,C.ewe,C.ewn,C.crb,C.cr9,C.cra,C.fbM,C.fyW,C.faY,C.bJR,C.bJQ,C.bJN,C.bJO,C.bJP,C.eZR,C.eZS,C.frm,C.frn,C.fro,C.frp,C.frq,C.fyU,C.fcd,C.fen,C.feo,C.feq,C.fer,C.fr9,C.fyP,C.fyQ,C.fyR,C.fbV,C.fbW,C.fz_,C.fbw,C.fbx,C.fyH,C.ff9,C.fr5,C.fek,C.fel,C.fr3,C.f_m,C.f_n,C.f_o,C.f_p,C.f_q,C.f_E,C.f_A,C.f_B,C.f3L,C.f3M,C.f5N,C.fak,C.fal])
u(A.at,[C.aVr,C.aih,C.aRi,C.WK,C.b6P,C.bb1,C.beJ,C.bsb,C.bi0,C.aaX,C.beI,C.aaW,C.beH,C.az_,C.aF5,C.aaY,C.Iq,C.bb2,C.aae,C.bb0,C.bb5,C.aVp,C.apS,C.abi])
u(A.n9,[C.b7q,C.b8B,C.b8s,C.aDY,C.bdM,C.bb4,C.ba9,C.bfQ,C.bs0])
u(A.jl,[C.fsr,C.fss,C.fst,C.fsk,C.fsl,C.fsw,C.fsx,C.dz4,C.dyR,C.dyU,C.dyy,C.dyz,C.dyA,C.dyx,C.dyF,C.dyw,C.dyG,C.dyH,C.dyv,C.dyI,C.dyu,C.dyJ,C.dyt,C.dyK,C.dyl,C.dym,C.dys,C.dyL,C.dyq,C.dyM,C.dyp,C.dyB,C.dyo,C.dyC,C.dyk,C.dyD,C.dyE,C.dz5,C.dz6,C.dyV,C.dyW,C.dyX,C.dyY,C.dyZ,C.dz_,C.dz0,C.dzc,C.dz3,C.fcr,C.d_x,C.d_v,C.d_w,C.d_y,C.d0b,C.d00,C.d_Y,C.d_A,C.d01,C.d_G,C.d_H,C.d_J,C.d0_,C.d_F,C.d_L,C.d08,C.d_V,C.d_U,C.d_W,C.d_X,C.d_Q,C.d_S,C.d_T,C.d_M,C.d04,C.d07,C.d_C,C.d_D,C.d1D,C.d1C,C.d1B,C.d1A,C.d1H,C.d1z,C.d1I,C.d0r,C.d0s,C.d0t,C.d0w,C.d0p,C.d0o,C.czZ,C.cTo,C.cTB,C.cTA,C.cTQ,C.cTz,C.cTR,C.cTy,C.cTx,C.cTT,C.cTw,C.cTJ,C.cTI,C.cU_,C.dMp,C.dMo,C.dMr,C.dMs,C.dMt,C.dMn,C.dMv,C.dMu,C.dLO,C.dLP,C.dLR,C.dLk,C.dLy,C.dLx,C.dLA,C.dLK,C.dLD,C.dLC,C.dLE,C.dLB,C.dLF,C.dLG,C.dLJ,C.dL8,C.dLM,C.dLc,C.dLf,C.dLh,C.dLS,C.dLn,C.dLl,C.dLp,C.dLq,C.dLm,C.dLr,C.dLv,C.dM0,C.dM1,C.dLU,C.dLX,C.dLY,C.dLZ,C.dM3,C.dLV,C.dLi,C.d0A,C.d0z,C.d0E,C.d0O,C.d0F,C.eyO,C.dgc,C.dg9,C.dga,C.dgk,C.dgj,C.dgi,C.dgs,C.dgh,C.dgt,C.dgg,C.dgu,C.dgf,C.dgv,C.dge,C.dgd,C.dgo,C.dgy,C.dgH,C.dMd,C.dMh,C.dMi,C.dM9,C.dMa,C.dMb,C.dMg,C.dMk,C.dMj,C.dM4,C.dM5,C.dM6,C.dM7,C.dM8,C.dyd,C.fs2,C.cby,C.cUb,C.cUa,C.cUe,C.cU7,C.cU9,C.crL,C.crR,C.crS,C.crQ,C.crU,C.crP,C.crM,C.crN,C.crY,C.eWD,C.eWE,C.evZ,C.evQ,C.evR,C.evS,C.evU,C.evV,C.evY,C.evL,C.evO,C.ew_,C.evM,C.ew2,C.ew3,C.ew4,C.ew5,C.ew1,C.evG,C.evH,C.evI,C.evK,C.evJ,C.ewo,C.ewp,C.ew7,C.ew8,C.ewf,C.ewg,C.ewh,C.ewb,C.ewc,C.ewv,C.ewu,C.eww,C.ewt,C.ew6,C.ewa,C.ewr,C.ewq,C.ewl,C.ewm,C.ewk,C.ewj])
u(A.af,[C.alX,C.R_,C.Xr,C.Xv,C.Xt,C.X1,C.an2,C.amX,C.Y4,C.an0,C.Yp,C.Yq,C.a4e,C.X3,C.X2,C.WB,C.a_8,C.El,C.auw,C.apR,C.apL,C.apQ,C.Mv])
u(A.ag,[C.aA_,C.baZ,C.ax6,C.bbj,C.ax7,C.b8z,C.aAA,C.aAx,C.ayZ,C.aAz,C.aAy,C.bg8,C.aIo,C.avU,C.avT,C.auD,C.bs3,C.aKw,C.aKx,C.aC0,C.bhu,C.aC_,C.btP])
u(A.kz,[C.dyQ,C.dyS,C.dyN,C.dzb,C.fej,C.bJM,C.d0a,C.d09,C.d_R,C.d05,C.d06,C.d0x,C.dLH,C.dLs,C.dM2,C.d0N,C.d0M,C.d0K,C.d0P,C.d0S,C.d0T,C.d0D,C.d0H,C.d0J,C.d0W,C.c3U,C.c41,C.c46,C.dye,C.fs4,C.fs3,C.eWA,C.eWB,C.evW,C.ews,C.crc,C.f36,C.eZT,C.fep,C.fby,C.fem,C.f_D,C.f_C,C.f3N])
t(C.bfR,C.aIo)
u(A.mi,[C.a9i,C.aGK,C.Gh,C.aii,C.crd,C.cre])
t(C.bs1,C.aKw)
t(C.bs2,C.aKx)
t(C.aC1,C.btP)
t(C.b5h,A.b56)
t(C.bs4,A.a3U)
t(C.b5g,C.bs4)
w(C.aIo,A.eL)
w(C.aKw,A.c7)
w(C.aKx,A.c7)
v(C.btP,A.eo)
v(C.bs4,A.iU)})()
A.kg(b.typeUniverse,JSON.parse('{"aVr":{"at":[],"r":[]},"b7q":{"aA":[]},"alX":{"af":[],"r":[]},"aA_":{"ag":["alX"]},"R_":{"af":[],"r":[]},"aih":{"at":[],"r":[]},"aRi":{"at":[],"r":[]},"baZ":{"ag":["R_"]},"Xr":{"af":[],"r":[]},"Xv":{"af":[],"r":[]},"Xt":{"af":[],"r":[]},"X1":{"af":[],"r":[]},"ax6":{"ag":["Xr"]},"bbj":{"ag":["Xv"]},"ax7":{"ag":["Xt"]},"WK":{"at":[],"r":[]},"b8B":{"aA":[]},"b8s":{"aA":[]},"b8z":{"ag":["X1"]},"aDY":{"aA":[]},"bdM":{"aA":[]},"b6P":{"at":[],"r":[]},"an2":{"af":[],"r":[]},"amX":{"af":[],"r":[]},"Y4":{"af":[],"r":[]},"aaY":{"at":[],"r":[]},"aAA":{"ag":["an2"]},"aAx":{"ag":["amX"]},"bb1":{"at":[],"r":[]},"bb4":{"aA":[]},"beJ":{"at":[],"r":[]},"ba9":{"aA":[]},"bsb":{"at":[],"r":[]},"bi0":{"at":[],"r":[]},"ayZ":{"ag":["Y4"]},"aaX":{"at":[],"r":[]},"beI":{"at":[],"r":[]},"aaW":{"at":[],"r":[]},"beH":{"at":[],"r":[]},"az_":{"at":[],"r":[]},"aF5":{"at":[],"r":[]},"Iq":{"at":[],"r":[]},"an0":{"af":[],"r":[]},"Yp":{"af":[],"r":[]},"Yq":{"af":[],"r":[]},"aAz":{"ag":["an0"]},"bb2":{"at":[],"r":[]},"aae":{"at":[],"r":[]},"bb0":{"at":[],"r":[]},"bb5":{"at":[],"r":[]},"aAy":{"ag":["Yp"]},"bg8":{"ag":["Yq"]},"aVp":{"at":[],"r":[]},"a4e":{"af":[],"r":[]},"bfR":{"ag":["a4e"]},"bfQ":{"aA":[]},"apS":{"at":[],"r":[]},"X3":{"af":[],"r":[]},"X2":{"af":[],"r":[]},"WB":{"af":[],"r":[]},"a_8":{"af":[],"r":[]},"avU":{"ag":["X3"]},"avT":{"ag":["X2"]},"auD":{"ag":["WB"]},"bs3":{"ag":["a_8"]},"El":{"af":[],"r":[]},"auw":{"af":[],"r":[]},"bs1":{"ag":["El"]},"bs2":{"ag":["auw"]},"bs0":{"aA":[]},"apR":{"af":[],"r":[]},"aC0":{"ag":["apR"]},"abi":{"at":[],"r":[]},"apL":{"af":[],"r":[]},"apQ":{"af":[],"r":[]},"bhu":{"ag":["apL"]},"aC_":{"ag":["apQ"]},"Mv":{"af":[],"r":[]},"aC1":{"ag":["Mv"],"eo":[]},"b5g":{"iU":[],"f9":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.az
return{e2:w("aOa"),Q:w("qs"),n:w("br<n,n>"),c5:w("aQ4"),dY:w("aQ5"),d:w("es<n?>"),e:w("Gg"),B:w("mT"),P:w("hR"),k:w("ko"),x:w("aw<~>"),f5:w("O<agc>"),V:w("O<ab>"),t:w("O<qs>"),O:w("O<w>"),ac:w("O<es<n?>>"),I:w("O<mT>"),u:w("O<hR>"),_:w("O<ko>"),cl:w("O<aw<ak<a1<n,@>>>>"),R:w("O<mV>"),cq:w("O<ak<+(P,P)>>"),ez:w("O<a1<n,aB>>"),gE:w("O<a1<n,n>>"),c7:w("O<a1<n,@>>"),fD:w("O<m7>"),bp:w("O<nR>"),g:w("O<u>"),v:w("O<hA>"),L:w("O<+(n,n)>"),G:w("O<+(P,P)>"),bF:w("O<+count,id,name(I,n,n)>"),A:w("O<cL>"),s:w("O<n>"),aS:w("O<iJ>"),p:w("O<r>"),C:w("O<f9>"),D:w("O<l4>"),fp:w("O<Iu>"),M:w("O<IC>"),gZ:w("O<aE2>"),Y:w("O<acu>"),E:w("O<aG2>"),F:w("O<P>"),dC:w("O<I>"),dS:w("O<aA?>"),d4:w("O<n?>"),J:w("co<ag<af>>"),b:w("ak<mT>"),do:w("ak<hR>"),r:w("ak<ko>"),U:w("ak<a1<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(I,n,n)>"),h:w("ak<n>"),c:w("ak<l4>"),j:w("ak<@>"),fK:w("bs<n,n>"),d2:w("bs<n,ak<a1<n,@>>>"),a:w("a1<n,@>"),f:w("a1<@,@>"),gv:w("J<n,Gi>"),w:w("iE"),g2:w("qL"),bV:w("alQ"),fL:w("cp"),K:w("aB"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(P,ak<hR>)"),cs:w("+count,id,name(I,n,n)"),N:w("n"),e7:w("bl<P>"),gc:w("dz"),b4:w("cw<I>"),W:w("k4<n>"),l:w("r"),cM:w("f9"),i:w("l4"),cc:w("Ey"),bw:w("aaW<n?>"),cy:w("IE"),q:w("mG"),y:w("S"),gR:w("P"),z:w("@"),S:w("I"),eK:w("ak<ko>?"),m:w("an_?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,I)?"),X:w("+qrPayload,token,usesRemaining(n,n,I)?"),gF:w("+members,trees,viewOnly(I,I,S)?"),Z:w("q5?"),T:w("n?"),aD:w("dz?"),o:w("l4?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aQj=new A.bv(B.h6,B.bD,B.h6,B.bD)
D.a6U=new A.bv(B.h6,B.jR,B.h6,B.jR)
D.aQv=new A.bv(B.hK,B.bD,B.bD,B.bD)
D.aQz=new A.ay(B.cY,1.4,B.r,-1)
D.aQJ=new A.ay(B.af,1,B.r,-1)
D.aS5=new A.aW(0,1/0,64,1/0)
D.aS9=new A.aW(0,84,0,1/0)
D.at3=w([B.lU,B.qh,B.c],x.O)
D.bIi=new A.a5(B.ax,B.aC,B.x,D.at3,null,null)
D.aSV=new A.o(null,null,null,null,null,D.bIi,B.n)
D.cLS=w([B.aS,B.bS],x.O)
D.bKl=new A.a5(B.b0,B.b3,B.x,D.cLS,null,null)
D.aTb=new A.o(null,null,null,null,null,D.bKl,B.n)
D.aZ3=new A.fe(null,null,null,null,null,E.jA,null,null,null,null)
D.a8c=new A.cy(B.A,null,null,D.aZ3,null)
D.k0=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eGw=new A.F(!0,D.k0,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYL=new A.x("No books on the shelf yet.",null,D.eGw,null,null,null,null,null,null,null,null,null)
D.dQF=new A.C(B.nu,D.eYL,null)
D.aXH=new A.cy(B.A,null,null,D.dQF,null)
D.aYv=new A.cy(B.A,null,null,X.Tu,null)
D.b_p=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b_M=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.a97=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b2b=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b2r=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.aad=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b5T=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b6d=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.Dn=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b7B=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b9C=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.abD=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eTD=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.beu=new A.es(null,D.eTD,B.eX,null,x.d)
D.f0J=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bew=new A.es(null,D.f0J,B.eX,null,x.d)
D.bf3=new A.b8(38e5)
D.bfP=new A.i5(0,10,0,10)
D.bfZ=new A.N(0,1,0,0)
D.bg7=new A.i5(0,4,0,4)
D.bgp=new A.N(10,10,14,10)
D.bgA=new A.i5(10,4,10,4)
D.bgK=new A.i5(10,8,10,8)
D.bgL=new A.N(10,8,8,8)
D.bhc=new A.N(12,6,12,2)
D.bhv=new A.N(14,10,6,6)
D.bhw=new A.N(14,12,14,0)
D.bhA=new A.N(14,12,14,8)
D.bhD=new A.N(14,12,8,14)
D.bhH=new A.i5(14,14,14,14)
D.bim=new A.N(16,2,16,10)
D.biw=new A.N(16,6,16,30)
D.biy=new A.N(16,6,16,8)
D.adR=new A.N(18,16,18,8)
D.bj8=new A.N(18,20,18,22)
D.adV=new A.N(18,24,18,24)
D.bje=new A.N(18,30,18,30)
D.bjw=new A.N(20,10,12,20)
D.bjK=new A.N(20,18,16,18)
D.bjM=new A.N(20,18,20,6)
D.bkA=new A.N(24,32,24,28)
D.bkB=new A.N(24,36,24,32)
D.bkF=new A.N(26,26,24,14)
D.bkT=new A.N(2,4,2,8)
D.bkX=new A.N(30,0,30,0)
D.bl7=new A.N(38,22,22,22)
D.aec=new A.N(40,24,24,24)
D.bl9=new A.i5(40,40,40,40)
D.blb=new A.N(46,30,30,30)
D.aef=new A.N(4,0,0,8)
D.blB=new A.N(56,40,40,40)
D.blF=new A.N(1.25,1.25,1.25,1.25)
D.blG=new A.N(60,0,60,0)
D.blJ=new A.N(6,14,6,16)
D.blV=new A.i5(7,3,7,3)
D.bmq=new A.N(5,1.5,5,1.5)
D.bmB=new A.N(6,2.5,6,2.5)
D.fbR=new A.x("Signature",null,B.n1,null,null,null,null,null,null,null,null,null)
D.bmU=new A.bG(1,B.bp,D.fbR,null)
D.f99=new A.x("Tell the AI what to fix",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bnB=new A.bG(1,B.bp,D.f99,null)
D.eNv=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb1=new A.x("Worksheets",null,D.eNv,null,null,null,null,null,null,null,null,null)
D.eND=new A.F(!0,E.a8N,null,null,null,null,13,B.cq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9X=new A.x("Track your project spending",null,D.eND,null,null,null,null,null,null,null,null,null)
D.cEr=w([D.fb1,B.av,D.f9X],x.p)
D.bc2=new A.fm(B.ak,B.e,B.j,B.F,null,B.p,null,0,D.cEr,null)
D.bnG=new A.bG(1,B.bp,D.bc2,null)
D.eIZ=new A.F(!0,E.jA,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSR=new A.x("FAMILY LIBRARY",null,D.eIZ,null,null,null,null,null,null,null,null,null)
D.bnW=new A.bG(1,B.bp,D.eSR,null)
D.KP=new C.Gg("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.WW=new C.Gh(0,"male")
D.af5=new C.Gh(1,"female")
D.wR=new C.Gh(2,"unknown")
D.rY=new C.aii(0,"owner")
D.KQ=new C.aii(1,"editor")
D.k7=new C.aii(2,"viewer")
D.afP=new A.a0(61199,"MaterialIcons",!1)
D.bqk=new A.a0(61504,"MaterialIcons",!1)
D.bql=new A.a0(61505,"MaterialIcons",!1)
D.bqn=new A.a0(61587,"MaterialIcons",!1)
D.bqt=new A.a0(61890,"MaterialIcons",!1)
D.brm=new A.a0(63034,"MaterialIcons",!0)
D.bsc=new A.a0(63429,"MaterialIcons",!1)
D.ahX=new A.a0(984520,"MaterialIcons",!1)
D.bqT=new A.a0(62776,"MaterialIcons",!1)
D.buw=new A.ad(D.bqT,26,B.aW,null,null,null)
D.bpj=new A.a0(57648,"MaterialIcons",!1)
D.buO=new A.ad(D.bpj,14,B.c,null,null,null)
D.bv5=new A.ad(B.Ev,17,null,null,null,null)
D.bvB=new A.ad(E.XG,null,null,null,null,null)
D.bvE=new A.ad(B.j5,18,E.jA,null,null,null)
D.Xr=new A.a0(62044,"MaterialIcons",!1)
D.bvK=new A.ad(D.Xr,null,B.aS,null,null,null)
D.bwz=new A.ad(B.dR,16,null,null,null,null)
D.bwG=new A.ad(D.Xr,32,B.aS,null,null,null)
D.bwY=new A.ad(E.afQ,18,B.cY,null,null,null)
D.by_=new A.ad(B.EF,22,B.aD,null,null,null)
D.bya=new A.ad(B.dR,22,B.aW,null,null,null)
D.byl=new A.ad(O.Xw,22,B.c,null,null,null)
D.byq=new A.ad(B.t8,52,B.c,null,null,null)
D.byA=new A.ad(B.EF,30,B.aD,null,null,null)
D.aiy=new A.ad(B.tf,22,B.c,null,null,null)
D.bz1=new A.ad(B.dR,17,null,null,null,null)
D.bzk=new A.ad(B.uN,26,B.cY,null,null,null)
D.bA3=new A.ad(B.XT,16,null,null,null,null)
D.bAM=new A.ad(B.t8,24,B.c,null,null,null)
D.bAR=new A.ad(B.Lf,20,B.qJ,null,null,null)
D.bAW=new A.ad(B.Et,null,B.bS,null,null,null)
D.bB2=new A.ad(B.j5,18,B.c,null,null,null)
D.bCr=new A.ad(B.e8,16,B.af,null,null,null)
D.bCC=new A.ad(D.Xr,20,B.aS,null,null,null)
D.aj_=new A.ad(B.hr,20,null,null,null,null)
D.bD6=new A.ad(B.cv,18,D.k0,null,null,null)
D.bDo=new A.ad(B.xc,28,B.c,null,null,null)
D.bDw=new A.ad(B.L5,null,B.fQ,null,null,null)
D.bDQ=new A.ad(B.xc,24,B.c,null,null,null)
D.bEf=new A.ad(B.t8,null,B.aS,null,null,null)
D.bEg=new A.ad(B.jK,20,B.cY,null,null,null)
D.bEy=new A.ad(B.Ev,16,null,null,null,null)
D.bG1=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eA,!0,null,null,null,null)
D.cSx=w([B.bs,B.aS,B.f4,B.aW],x.O)
D.bGN=new A.a5(B.ax,B.aC,B.x,D.cSx,null,null)
D.b6F=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bbd=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cBy=w([D.b6F,D.bbd],x.O)
D.bGY=new A.a5(B.b0,B.b3,B.x,D.cBy,null,null)
D.cNu=w([B.eT,B.fr,B.f4],x.O)
D.bH1=new A.a5(B.ax,B.aC,B.x,D.cNu,null,null)
D.aaJ=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b_N=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cDo=w([D.aaJ,D.b_N],x.O)
D.bHA=new A.a5(B.b0,B.b3,B.x,D.cDo,null,null)
D.b2A=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.asu=w([D.b2A,D.aaJ],x.O)
D.bHU=new A.a5(B.ax,B.aC,B.x,D.asu,null,null)
D.a9S=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b4s=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cML=w([D.a9S,D.b4s],x.O)
D.bIt=new A.a5(B.a3,B.a7,B.x,D.cML,null,null)
D.cYc=w([B.bM,B.my],x.O)
D.bIv=new A.a5(B.b0,B.b3,B.x,D.cYc,null,null)
D.b6B=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b82=new A.w(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cZ1=w([D.b6B,D.k0,D.k0,D.b82],x.O)
D.d00=w([0,0.07,0.9,1],x.F)
D.bIZ=new A.a5(B.a3,B.a7,B.x,D.cZ1,D.d00,null)
D.bJ9=new A.a5(B.ax,B.aC,B.x,B.OG,null,null)
D.cXO=w([B.aW,B.aS,B.bS],x.O)
D.bK7=new A.a5(B.ax,B.aC,B.x,D.cXO,null,null)
D.c4q=w([B.bs,B.aW,B.eT],x.O)
D.c4x=w([B.bA,B.aB,B.jf],x.O)
D.c4z=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b5q=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.caE=w([D.b5q,E.aas],x.O)
D.dMC=new A.u(1,2)
D.esr=new A.cL(B.aU,D.dMC,3)
D.apJ=w([D.esr],x.A)
D.chS=w([B.fU,B.c7,B.f3],x.O)
D.cku=w([B.bH,B.bu,B.bj],x.O)
D.boo=new C.tH("classic","Classic leather","Gold-edged brown leather",D.asu,E.jA,E.jA,"\u2766",B.L,!0,!1,!1,!1)
D.b_d=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.baj=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cFW=w([D.b_d,D.baj],x.O)
D.aav=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.boj=new C.tH("ornate","Ornate gold","Double gold border and flourishes",D.cFW,D.aav,D.aav,"\u2726",B.L,!0,!0,!0,!1)
D.b2i=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.b7h=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cyL=w([D.b2i,D.b7h],x.O)
D.boi=new C.tH("parchment","Parchment","Old paper with dark ink",D.cyL,D.Dn,G.ij,"\u2767",B.L,!0,!1,!1,!0)
D.a8z=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b91=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.cWe=w([D.a8z,D.b91],x.O)
D.b53=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.b8u=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bol=new C.tH("minimal","Clean paper","Plain and elegant, like a printed book",D.cWe,D.b53,D.b8u,"",B.L,!0,!0,!1,!0)
D.bon=new C.tH("midnight","Midnight","Deep blue with silver stars",I.asM,B.cm,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.boh=new C.tH("emerald","Emerald library","Green cloth, title on the left",Y.aq6,E.jA,B.fV,"\u25c6",B.bf,!0,!1,!1,!1)
D.b9m=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.cUQ=w([B.eZ,D.b9m],x.O)
D.b6_=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.b6V=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bom=new C.tH("rose","Rose vintage","Burgundy with rose-gold lettering",D.cUQ,D.b6_,D.b6V,"\u2740",B.L,!0,!1,!0,!1)
D.cYH=w([B.cz,I.o4],x.O)
D.bok=new C.tH("modern","Modern","Dark, bold, left-aligned",D.cYH,B.aY,B.c,"",B.bf,!1,!0,!1,!1)
D.ZM=w([D.boo,D.boj,D.boi,D.bol,D.bon,D.boh,D.bom,D.bok],A.az("O<tH>"))
D.cyh=w([B.bS,B.bk],x.O)
D.b6t=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cyW=w([D.a8z,D.b6t],x.O)
D.b2f=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cAn=w([D.b2f,B.da],x.O)
D.cBL=w([B.b6,B.iG,B.nZ],x.O)
D.cC7=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b_J=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b3O=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.d_Y=w([D.a9S,D.b_J,D.b3O],x.O)
D.bop=new C.tI("leather","Leather",D.d_Y,"vintage")
D.cIK=w([B.dm,B.Jj,N.TV],x.O)
D.bow=new C.tI("midnight","Midnight",D.cIK,"starry")
D.cBM=w([B.fs,B.eu,B.kX],x.O)
D.bov=new C.tI("forest","Forest",D.cBM,"story")
D.d1C=w([B.f_,B.eZ,B.k1],x.O)
D.bos=new C.tI("burgundy","Burgundy",D.d1C,"royal")
D.ck4=w([B.aB,B.oU,B.nc],x.O)
D.bot=new C.tI("royal","Royal",D.ck4,"royal")
D.cDZ=w([B.bu,B.cz,I.o4],x.O)
D.boq=new C.tI("charcoal","Charcoal",D.cDZ,"geo")
D.d03=w([B.cf,B.dK,B.wd],x.O)
D.bou=new C.tI("sunset","Sunset",D.d03,"sunset")
D.d0D=w([B.iG,B.Do,B.TW],x.O)
D.bor=new C.tI("ocean","Ocean",D.d0D,"band")
D.xI=w([D.bop,D.bow,D.bov,D.bos,D.bot,D.boq,D.bou,D.bor],A.az("O<tI>"))
D.cEl=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cER=w([B.aj,B.aI,B.M],x.O)
D.cG0=w([B.eZ,B.eu,B.dm,B.fh,B.wf,B.cY,B.k3,B.eo,B.dn],x.O)
D.cG1=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ess=new A.cL(B.dl,B.dz,8)
D.cGa=w([D.ess],x.A)
D.cHa=w([B.bX,B.dK,B.kt],x.O)
D.cHC=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cIG=w([B.bX,B.hx],x.O)
D.cKz=w([B.aK,B.zt,B.w5],x.O)
D.cLo=w([B.bJ,B.cG,B.dy,B.aK],x.O)
D.cLT=w([B.jh,B.cf,B.rw],x.O)
D.cMl=w([B.eT,B.cY],x.O)
D.cMQ=w([B.cM,B.fy,B.hm],x.O)
D.cN0=w([B.aY,B.bk,B.dm],x.O)
D.cNr=w([B.eE,B.d1,B.eu],x.O)
D.cNH=w([B.e_,B.dm,B.Jj],x.O)
D.cOU=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a_C=w(["leather","linen","plain","stars","rays"],x.s)
D.buc=new A.a0(985219,"MaterialIcons",!1)
D.btM=new A.a0(983781,"MaterialIcons",!1)
D.asf=w([B.age,B.hV,B.m5,B.hX,D.buc,B.EO,B.pe,D.btM,I.ahM,B.xe,B.pg,B.m4],A.az("O<a0>"))
D.a_H=w(["double","single","corners","none"],x.s)
D.cRm=w([B.e0,B.br,B.eo],x.O)
D.cRz=w([],x.t)
D.B2=w([],x.u)
D.cTB=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cVG=w([B.aX,B.fy,B.fh],x.O)
D.cWQ=w([B.cu,B.o0,B.UA],x.O)
D.cX3=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.ddZ=new C.lk("construction","Construction","Jobsite & builds",B.EC)
D.de5=new C.lk("house","Home Build","Houses & rooms",B.uH)
D.ddW=new C.lk("grocery","Grocery","Store & pantry",B.Yp)
D.ddV=new C.lk("calculator","Calculations","Math & estimates",B.Lp)
D.de3=new C.lk("lumber","Materials","Lumber & supplies",B.LH)
D.ddS=new C.lk("kitchen","Kitchen","Remodel & meals",S.agY)
D.btK=new A.a0(983756,"MaterialIcons",!1)
D.ddX=new C.lk("landscape","Landscaping","Yard & garden",D.btK)
D.ddR=new C.lk("plumbing","Plumbing","Pipes & water",B.uT)
D.de6=new C.lk("electrical","Electrical","Wiring & power",B.hq)
D.ddP=new C.lk("store","Retail Shop","Daily business",B.kF)
D.ddQ=new C.lk("paint_remodel","Paint & Remodel","Colors & walls",S.agM)
D.bt7=new A.a0(983311,"MaterialIcons",!1)
D.de2=new C.lk("roofing","Roofing","Roofs & exteriors",D.bt7)
D.btX=new A.a0(983986,"MaterialIcons",!1)
D.ddO=new C.lk("warehouse","Warehouse","Storage & stock",D.btX)
D.de0=new C.lk("vehicles","Vehicles","Fleet & transport",B.EP)
D.bqV=new A.a0(62785,"MaterialIcons",!1)
D.ddU=new C.lk("farm","Farm","Crops & livestock",D.bqV)
D.ddT=new C.lk("restaurant","Restaurant","Food & catering",B.te)
D.de_=new C.lk("tools","Tools","Workshop gear",B.EM)
D.de4=new C.lk("wallet","Cash & Wallet","Quick spending",B.jK)
D.bs7=new A.a0(63395,"MaterialIcons",!1)
D.de1=new C.lk("concrete","Concrete","Foundation work",D.bs7)
D.ddY=new C.lk("blueprint","Blueprint","Plans & design",Ab.agk)
D.a06=w([D.ddZ,D.de5,D.ddW,D.ddV,D.de3,D.ddS,D.ddX,D.ddR,D.de6,D.ddP,D.ddQ,D.de2,D.ddO,D.de0,D.ddU,D.ddT,D.de_,D.de4,D.de1,D.ddY],A.az("O<lk>"))
D.cXv=w([B.bn,B.br],x.O)
D.cYd=w([B.i2,B.ng,B.dB],x.O)
D.a0b=w(["top","middle","bottom"],x.s)
D.d_o=w([B.cC,B.bk,B.dm],x.O)
D.d_T=w([B.bg,B.d1,B.eu],x.O)
D.d1x=w([B.bH,B.aj],x.O)
D.d1y=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dKr={top:0,middle:1,bottom:2}
D.d4G=new A.br(D.dKr,["Top","Middle","Bottom"],x.n)
D.dK6={double:0,single:1,corners:2,none:3}
D.d4L=new A.br(D.dK6,["Double line","One line","Corners","None"],x.n)
D.dLb={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d68=new A.br(D.dLb,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.d6j=new A.br(B.iA,[],A.az("br<I,+(n,n)>"))
D.dKj={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Bd=new A.br(D.dKj,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.az("br<n,I>"))
D.d8x=new F.Lq(32,null)
D.d8y=new F.Lq(40,null)
D.d8z=new F.Lq(46,null)
D.aBh=new C.apQ(null)
D.dNz=new A.u(8,14)
D.eZo=new A.x("Write a new book",null,B.jb,null,B.L,null,null,null,null,null,null,null)
D.dQ9=new A.C(B.ls,D.eZo,null)
D.ai9=new A.ad(B.hE,18,B.c,null,null,null)
D.eTb=new A.x("Add",null,B.n2,null,null,null,null,null,null,null,null,null)
D.cLD=w([D.ai9,B.tN,D.eTb],x.p)
D.eqp=new A.cD(B.b_,B.e,B.Q,B.m,null,B.p,null,0,D.cLD,null)
D.dQt=new A.C(B.pa,D.eqp,null)
D.dQu=new A.C(E.acK,X.Tu,null)
D.eNr=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW1=new A.x("New Project",null,D.eNr,null,null,null,null,null,null,null,null,null)
D.cPf=w([D.ai9,B.aa,D.eW1],x.p)
D.eqs=new A.cD(B.b_,B.e,B.Q,B.m,null,B.p,null,0,D.cPf,null)
D.dQE=new A.C(B.iM,D.eqs,null)
D.eYe=new A.x("Choose your header",null,R.C4,null,null,null,null,null,null,null,null,null)
D.dQX=new A.C(B.it,D.eYe,null)
D.aZi=new A.fe(2.2,null,null,null,null,B.cY,null,null,null,null)
D.ev3=new A.a4(22,22,D.aZi,null)
D.aXD=new A.cy(B.A,null,null,D.ev3,null)
D.dR1=new A.C(B.Vs,D.aXD,null)
D.bhQ=new A.N(14,2,14,6)
D.f9I=new A.x("The top of your book. Tap a design to see it.",null,N.a4t,null,null,null,null,null,null,null,null,null)
D.dR2=new A.C(D.bhQ,D.f9I,null)
D.dSy=new A.iH(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dSB=new A.iH(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aCm=new A.iH(1,0.9607843137254902,0.48627450980392156,0)
D.GP=new A.iH(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.ye=new A.iH(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dSH=new A.iH(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fjz=new C.bdM(null)
D.bcW=new A.lZ(D.fjz,null,B.at,null,null)
D.aG_=new A.cH(0,0,0,0,null,null,D.bcW,null)
D.edE=new A.z(-42,42)
D.elw=new A.cI([0,0,1,1])
D.aHg=new A.a7(0,0,520,160)
D.aHt=new A.b6(B.pY,B.Z)
D.f9h=new A.x("Let the AI write it from your tree",null,B.kk,null,B.L,null,null,null,null,null,null,null)
D.boQ=new A.dm(1,B.cl,D.f9h,null)
D.cIF=w([E.YR,B.aa,D.boQ],x.p)
D.eq7=new A.cD(B.b_,B.e,B.Q,B.m,null,B.p,null,0,D.cIF,null)
D.eSS=new A.x("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.cVU=w([D.aj_,B.aa,D.eSS],x.p)
D.eqf=new A.cD(B.b_,B.b7,B.j,B.m,null,B.p,null,0,D.cVU,null)
D.byf=new A.ad(B.hW,14,B.aW,null,null,null)
D.eHH=new A.F(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWr=new A.x("Cashier",null,D.eHH,null,null,null,null,null,null,null,null,null)
D.cPI=w([D.byf,B.bq,D.eWr],x.p)
D.eqh=new A.cD(B.b_,B.e,B.Q,B.m,null,B.p,null,0,D.cPI,null)
D.eST=new A.x("Transfer & settings",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bnr=new A.bG(1,B.bp,D.eST,null)
D.cBh=w([D.aiy,B.aw,D.bnr],x.p)
D.eqi=new A.cD(B.b_,B.e,B.j,B.m,null,B.p,null,0,D.cBh,null)
D.etO=new A.as(16,40)
D.etT=new A.as(22,64)
D.eu_=new A.as(280,88)
D.euK=new A.a4(30,null,null,null)
D.ew0=new A.hK(2,12,12,1.05,null)
D.eW7=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.ewL=new A.b0(D.eW7,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWm=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aJf=new A.b0(D.eWm,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f2R=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.exe=new A.b0(D.f2R,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.fcn=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.exj=new A.b0(D.fcn,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eYc=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.exq=new A.b0(D.eYc,null,null,null,null,null,null,null,null,null,null,null,null,B.fK,!1,null,null,null,B.q,null)
D.f9T=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aJj=new A.b0(D.f9T,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eTs=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.exQ=new A.b0(D.eTs,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.fd0=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eyz=new A.b0(D.fd0,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f8j=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eyY=new A.b0(D.f8j,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.fcr=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ez0=new A.b0(D.fcr,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f4k=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ez2=new A.b0(D.f4k,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eZW=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.ez3=new A.b0(D.eZW,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eZX=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eA3=new A.b0(D.eZX,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eW9=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eAl=new A.b0(D.eW9,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eXV=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eAE=new A.b0(D.eXV,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f3R=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eAU=new A.b0(D.f3R,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f_E=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eAV=new A.b0(D.f_E,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eDP=new A.F(!0,D.k0,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEd=new A.F(!0,D.k0,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEO=new A.r3(!0,B.qS,null,null,null,null,B.dp,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF3=new A.F(!0,D.k0,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFA=new A.F(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4u=new A.r3(!0,B.Q0,null,null,null,null,B.dp,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGz=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGX=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIr=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eIv=new A.F(!0,G.ij,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJH=new A.F(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKl=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL_=new A.F(!0,B.bS,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL4=new A.F(!0,B.bM,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLr=new A.F(!0,D.Dn,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLA=new A.F(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMx=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMZ=new A.F(!0,B.bS,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNp=new A.F(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOQ=new A.F(!0,B.aj,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOY=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aLo=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4X=new A.F(!0,B.aj,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQA=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQX=new A.F(!0,G.ij,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR3=new A.F(!0,G.ij,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRO=new A.x("Themes",null,B.pJ,null,null,null,null,null,null,null,null,null)
D.eSn=new A.x("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eIb=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSI=new A.x("Debt receipt",null,D.eIb,null,B.L,null,null,null,null,null,null,null)
D.aLk=new A.F(!0,B.aj,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSZ=new A.x("Person who owes",null,D.aLk,null,null,null,null,null,null,null,null,null)
D.eTU=new A.x("Notes",null,B.a4A,null,null,null,null,null,null,null,null,null)
D.eUi=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eHe=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUm=new A.x("Share",null,D.eHe,null,null,null,null,null,null,null,null,null)
D.eVb=new A.x("Move your family trees",null,D.aLo,null,null,null,null,null,null,null,null,null)
D.eVK=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eWl=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.eXv=new A.x("Remove this book?",null,B.hh,null,null,null,null,null,null,null,null,null)
D.aLN=new A.x("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eYz=new A.x("What should the AI do?",null,B.dP,null,null,null,null,null,null,null,null,null)
D.eZS=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.f_S=new A.x("Ribbon bookmark",null,B.iC,null,null,null,null,null,null,null,null,null)
D.eOK=new A.F(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0i=new A.x("NGMY.ORG",null,D.eOK,null,B.L,null,null,null,null,null,null,null)
D.f1s=new A.x("Scan family tree QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eLj=new A.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f29=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eLj,null,B.L,null,null,null,null,null,null,null)
D.f3h=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.f3n=new A.x("Thumbnail",null,B.pJ,null,null,null,null,null,null,null,null,null)
D.f3X=new A.x("Save the cover",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f4l=new A.x("Your photos",null,B.pJ,null,null,null,null,null,null,null,null,null)
D.f4A=new A.x("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f51=new A.x("Design your cover",null,R.C4,null,null,null,null,null,null,null,null,null)
D.f57=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.f5a=new A.x("PICTURE",null,H.ml,null,null,null,null,null,null,null,null,null)
D.f5w=new A.x("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f5y=new A.x("You can undo it right after.",null,N.a4G,null,null,null,null,null,null,null,null,null)
D.f60=new A.x("Print",null,B.tR,null,null,null,null,null,null,null,null,null)
D.f6l=new A.x("Amount owed",null,D.aLk,null,null,null,null,null,null,null,null,null)
D.f6y=new A.x("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f75=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.f78=new A.x("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f7x=new A.x("Debtor signature",null,B.a4A,null,null,null,null,null,null,null,null,null)
D.f7F=new A.x("Change icon",null,E.aKE,null,null,null,null,null,null,null,null,null)
D.f8J=new A.x("Family tree QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f97=new A.x("Download",null,B.tR,null,null,null,null,null,null,null,null,null)
D.f9b=new A.x("Change",null,B.pJ,null,null,null,null,null,null,null,null,null)
D.f9Z=new A.x("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fa1=new A.x("WHAT SHOULD IT CHANGE?",null,H.ml,null,null,null,null,null,null,null,null,null)
D.faB=new A.x("COLOUR",null,H.ml,null,null,null,null,null,null,null,null,null)
D.faN=new A.x("Do it",null,B.cr,null,null,null,null,null,null,null,null,null)
D.faQ=new A.x("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.fbL=new A.x("Create Family Tree",null,B.eR,null,null,null,null,null,null,null,null,null)
D.eCS=new A.F(!0,E.jA,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc_=new A.x("Write the first page myself",null,D.eCS,null,null,null,null,null,null,null,null,null)
D.fcu=new A.x("Use this header",null,B.cr,null,null,null,null,null,null,null,null,null)
D.fcA=new A.x("Create Project",null,E.aL5,null,null,null,null,null,null,null,null,null)
D.fgJ=new C.a9i(1,"header")
D.a5C=new C.a9i(2,"projects")
D.fgK=new C.a9i(3,"cashier")
D.a5D=new C.a9i(4,"familyTree")
D.frv=new C.crd(0,"start")
D.frw=new C.cre(0,"start")
D.fh1=new C.WB(null)
D.fi0=new C.X2(null)
D.d6g=new A.br(B.iA,[],A.az("br<n,Ey>"))
D.cRT=w([],x.E)
D.cRU=w([],x.M)
D.fix=new C.bb3(D.d6g,D.cRT,D.cRU,0,0,null,null)
D.fkd=new C.Yq(null)
D.a6j=new C.aGK(0,"projects")
D.aOA=new C.aGK(1,"cashier")
D.fps=new C.aGK(2,"familyTree")})()};
(a=>{a["iulWH36M8m5hgEU6iDLmRKtPDc0="]=a.current})($__dart_deferred_initializers__);