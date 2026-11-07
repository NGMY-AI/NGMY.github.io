((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A5,Q,W,A6,I,G,E,M,A7,O,A8,A9,X,Aa,Ab,R,K,Y,Z,Ac,A_,A0,A1,Ad,Ae,A2,Af,Ag,Ah,A3,Ai,Aj,A4,N,Ak,Al,S,Am,T,An,F,Ao,P,H,U,C={
bCG(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bCG=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vo(null,""),$async$bCG)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n9(b1)
s=A.c4(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dt(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cU(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.M)(h),++d){a0=h[d]
f.push(A.G(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.S.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qY(t,a1,B.hF,"book",E.Fz),$async$bCG)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=G.Qx(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.L7(l)?y.l:y.i)
for(j=J.a4(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cz
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=G.a2k(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCG,v)},
agU(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agU=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vo(null,""),$async$agU)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n9(b6)
s=x.S
r=A.d1(c1,0,A.dB(4,"count",s),A.S(c1).c)
q=G.a27(new A.N(r,new C.fBc(),r.$ti.k("N<ak.E,n>")).aG(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fBb(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.S.ao(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agU)
case 6:l=c5
k=G.Qx(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aol(s,D.dun,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.V("There is no page to change.")
h=A.U(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dt(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.M)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.G(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.S.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agU)
case 10:l=c5
k=l==null?null:G.Qx(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.da(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.l4(a5,a2.k("l4<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a4(a9)
b1=A.aK(b0.h(a9,"index"))
i=b1==null?null:B.k.O(b1)
if(i==null||!B.d.q(a4,i))continue
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
p=A.cF(new A.bc(h,s),new C.fBd(),s.k("J.E"),p)
p=G.a27(A.pl(p,3,A.a6(p).k("J.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cs<1>")
b4=A.C(new A.cs(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.M)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(G.a2k(s,b9),$async$agU)
case 13:b5=c5
for(s=J.a4(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aol(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agU,v)},
hqD(d,e,f){return A.cf(null,B.w.j(0.65),!1,null,new C.fKu(e,f),d,null,!0,!0,x.g2)},
aol:function aol(d,e,f){this.a=d
this.b=e
this.c=f},
fBc:function fBc(){},
fBb:function fBb(d){this.a=d},
fBd:function fBd(){},
fKu:function fKu(d,e){this.a=d
this.b=e},
bAx(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bAx=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b3(b1,new C.fph())){u=null
w=1
break}t=B.d.d8(b1,new C.fpi())
s=$.W()
r=new A.pH()
q=A.yY(r,D.aNO)
p=A.K()
p.r=B.c.gp(0)
q.aX(D.aNO,p)
o=A.K()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ac
o.d=B.bH
o.e=B.dS
n=new C.fpn(t)
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
s=$.W()
p=A.a([],x.v)
a3=new A.aJ(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.M)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b1(a5,a6)
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
a3.e=null}}q.aJ(a3,o)}else{p=A.a([],x.v)
a3=new A.aJ(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.M)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b1(a7,a8)
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
a3.e=null}}q.aJ(a3,o)}w=4
return A.b(r.nP().zm(520,160),$async$bAx)
case 4:w=3
return A.b(b3.hv(B.h5),$async$bAx)
case 3:b0=b3
u=b0==null?null:J.eV(B.dE.gaQ(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAx,v)},
fyT(d){return C.i4p(d)},
i4p(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fyT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bgr()
n=d.x!=null&&d.z2(null).length===0
if(d.x!=null)t=n?D.zG:D.IE
else t=d.gTO()?D.IE:D.aIO
w=3
return A.b(C.bAx(d.ax),$async$fyT)
case 3:s=f
p.a=null
if(s!=null)p.a=A.an2(s)
r=A.a4h(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aIO}else{p.c=C.wQ(q,!0)
p.b=n?D.zG:D.IE}r.a37(A.fUT(new C.fyV(p,d,new C.fyW(),t,n,o),null,D.bzQ,B.wA))
u=r.js(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyT,v)},
fFw(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fFw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fyT(d),$async$fFw)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aN(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=Ab.GI(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFw,v)},
fph:function fph(){},
fpi:function fpi(){},
fpn:function fpn(d){this.a=d},
fyW:function fyW(){},
fyV:function fyV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fyU:function fyU(){},
fKW(d,e){var w=0,v=A.j(x.H)
var $async$fKW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.w.j(0.55),!0,null,new C.fL_(new A.cy(null,x.W),e),d,null,!0,!0,x.H),$async$fKW)
case 2:return A.h(null,v)}})
return A.i($async$fKW,v)},
bD8(d,e,f,g){return C.ibT(d,e,f,g)},
ibT(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bD8=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cF.aM(t)}catch(q){r=null}if(r==null||r.length===0){d.J(x.q).f.R(D.f69)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.fKS(g,r,f),d,null,!0,!0,x.H),$async$bD8)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bD8,v)},
fL0(d,e){var w=0,v=A.j(x.H)
var $async$fL0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.fL3(new A.cy(null,x.W),e),d,null,!0,!0,x.H),$async$fL0)
case 2:return A.h(null,v)}})
return A.i($async$fL0,v)},
aYy:function aYy(d,e){this.c=d
this.a=e},
c47:function c47(){},
baF:function baF(d,e){this.b=d
this.a=e},
fL_:function fL_(d,e){this.a=d
this.b=e},
fKX:function fKX(d){this.a=d},
fKY:function fKY(d,e,f){this.a=d
this.b=e
this.c=f},
fKZ:function fKZ(d,e){this.a=d
this.b=e},
fKS:function fKS(d,e,f){this.a=d
this.b=e
this.c=f},
fKQ:function fKQ(d){this.a=d},
fKR:function fKR(d,e,f){this.a=d
this.b=e
this.c=f},
fL3:function fL3(d,e){this.a=d
this.b=e},
fL1:function fL1(d){this.a=d},
fL2:function fL2(d,e,f){this.a=d
this.b=e
this.c=f},
ftB(d,e){var w=0,v=A.j(x.y),u,t
var $async$ftB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1T(d),$async$ftB)
case 3:t=g
J.nx(t,new C.ftC(e))
u=A.ahy(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ftB,v)},
ftC:function ftC(d){this.a=d},
aox:function aox(d,e,f){this.c=d
this.d=e
this.a=f},
aCR:function aCR(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dI2:function dI2(d,e){this.a=d
this.b=e},
dHO:function dHO(d,e){this.a=d
this.b=e},
dHR:function dHR(d,e,f){this.a=d
this.b=e
this.c=f},
dHQ:function dHQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dHP:function dHP(d,e){this.a=d
this.b=e},
dHS:function dHS(d,e){this.a=d
this.b=e},
dHM:function dHM(){},
dHN:function dHN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dHL:function dHL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dHw:function dHw(d){this.a=d},
dHx:function dHx(d,e,f){this.a=d
this.b=e
this.c=f},
dHy:function dHy(d,e){this.a=d
this.b=e},
dHv:function dHv(d){this.a=d},
dHD:function dHD(d,e){this.a=d
this.b=e},
dHu:function dHu(d){this.a=d},
dHE:function dHE(d,e,f){this.a=d
this.b=e
this.c=f},
dHF:function dHF(d,e,f){this.a=d
this.b=e
this.c=f},
dHt:function dHt(d,e){this.a=d
this.b=e},
dHG:function dHG(d,e,f){this.a=d
this.b=e
this.c=f},
dHs:function dHs(d,e){this.a=d
this.b=e},
dHH:function dHH(d,e){this.a=d
this.b=e},
dHr:function dHr(d){this.a=d},
dHI:function dHI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dHp:function dHp(){},
dHj:function dHj(d){this.a=d},
dHk:function dHk(d){this.a=d},
dHq:function dHq(d,e){this.a=d
this.b=e},
dHJ:function dHJ(d,e){this.a=d
this.b=e},
dHo:function dHo(d){this.a=d},
dHK:function dHK(d){this.a=d},
dHn:function dHn(){},
dHz:function dHz(d,e){this.a=d
this.b=e},
dHm:function dHm(d){this.a=d},
dHA:function dHA(d,e,f){this.a=d
this.b=e
this.c=f},
dHl:function dHl(d,e){this.a=d
this.b=e},
dHi:function dHi(d,e){this.a=d
this.b=e},
dHB:function dHB(d){this.a=d},
dHC:function dHC(d,e,f){this.a=d
this.b=e
this.c=f},
dI5:function dI5(){},
dI6:function dI6(d,e){this.a=d
this.b=e},
dI3:function dI3(d){this.a=d},
dI4:function dI4(d){this.a=d},
dI_:function dI_(d,e){this.a=d
this.b=e},
dI0:function dI0(d){this.a=d},
dHT:function dHT(d,e,f){this.a=d
this.b=e
this.c=f},
dHU:function dHU(d,e,f){this.a=d
this.b=e
this.c=f},
dHV:function dHV(d,e,f){this.a=d
this.b=e
this.c=f},
dHW:function dHW(d,e,f){this.a=d
this.b=e
this.c=f},
dHX:function dHX(d,e,f){this.a=d
this.b=e
this.c=f},
dHY:function dHY(d,e,f){this.a=d
this.b=e
this.c=f},
dHZ:function dHZ(d,e,f){this.a=d
this.b=e
this.c=f},
dI7:function dI7(){},
dI8:function dI8(){},
dI9:function dI9(){},
dIa:function dIa(d){this.a=d},
dI1:function dI1(d,e){this.a=d
this.b=e},
hmI(d){return B.d.dM(D.a2H,new C.fuf(d),new C.fug())},
uk:function uk(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fuf:function fuf(d){this.a=d},
fug:function fug(){},
akD:function akD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aUi:function aUi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SO:function SO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beg:function beg(){this.d=$
this.c=this.a=null},
d8b:function d8b(d,e){this.a=d
this.b=e},
d89:function d89(d,e){this.a=d
this.b=e},
d8a:function d8a(){},
d8c:function d8c(d,e){this.a=d
this.b=e},
h7n(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.nj(t,w,v,u==null?new A.T(Date.now(),0,!1):u)},
KT(d,e){return C.i32(d,e)},
i32(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$KT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$KT)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.S.aN(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.da(p,x.f)
o=A.cF(o,new C.fwv(),o.$ti.k("J.E"),x.B)
n=A.a6(o).k("Z<J.E>")
o=A.C(new A.Z(o,new C.fww(),n),n.k("J.E"))
B.d.aV(o,new C.fwx())
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
return A.i($async$KT,v)},
B0(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$B0=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$B0)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fJA(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.S.ao(r,null)),$async$B0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$B0,v)},
aQp(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aQp=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KT(d,e),$async$aQp)
case 2:u=h
t=J.cD(u)
s=t.bg(u,new C.fRU(f))
if(s===-1)t.c9(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.B0(d,e,u),$async$aQp)
case 3:return A.h(null,v)}})
return A.i($async$aQp,v)},
bB_(d,e,f){var w=0,v=A.j(x.H),u
var $async$bB_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KT(d,e),$async$bB_)
case 2:u=h
J.nx(u,new C.ftt(f))
w=3
return A.b(C.B0(d,e,u),$async$bB_)
case 3:return A.h(null,v)}})
return A.i($async$bB_,v)},
bBc(d,e){return C.i31(d,e)},
i31(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bBc=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bBc)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Ni
w=1
break}p=B.S.aN(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aK(o.h(0,"emblem"))
k=k==null?null:B.k.O(k)
if(k==null)k=0
if(D.CQ.ai(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.q(D.a4h,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a3G,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a3C,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.q(D.cYL,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.HH(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Ni
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Ni
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bBc,v)},
RB(d,e,f){return C.ibp(d,e,f)},
ibp(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$RB=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$RB)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.S.ao(f.ag(),null)),$async$RB)
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
return A.i($async$RB,v)},
R4(d,e){return C.i33(d,e)},
i33(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$R4=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$R4)
case 7:r=g
q=r.tj("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KT(d,e),$async$R4)
case 8:if(!j.cK(g)){n=B.a.i(d.toLowerCase())
m=J.lv(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$R4)
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
return A.i($async$R4,v)},
agd(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.R4(d,e),$async$agd)
case 3:s=g
r=J.a4(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$agd)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agd)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agd,v)},
a2w(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2w=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.R4(d,e),$async$a2w)
case 2:s=h
J.hy(s,f)
w=3
return A.b(A.az(),$async$a2w)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2w)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2w)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2w)
case 6:return A.h(null,v)}})
return A.i($async$a2w,v)},
nj:function nj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwv:function fwv(){},
fww:function fww(){},
fwx:function fwx(){},
fJA:function fJA(){},
fRU:function fRU(d){this.a=d},
ftt:function ftt(d){this.a=d},
HH:function HH(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bO1:function bO1(d){this.a=d},
ibI(d,e,f,g,h,i,j){return A.a3(d,!1).cg(A.e_(new C.fK8(j,i,f,e,h,g),!0,null,x.H))},
R1(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$R1=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.R4(h,g),$async$R1)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.J(x.q).f.R(D.aPW)
u=!1
w=1
break}w=4
return A.b(C.hqD(d,f,e),$async$R1)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agd(h,g),$async$R1)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nj(""+(q+n),l,B.a.i(m.b),new A.T(Date.now(),0,!1)))}w=6
return A.b(C.B0(h,r,p),$async$R1)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.RB(h,r,new C.HH("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$R1)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$R1,v)},
fK8:function fK8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Zg:function Zg(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azU:function azU(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d8R:function d8R(d){this.a=d},
d8Q:function d8Q(d,e){this.a=d
this.b=e},
d8F:function d8F(d,e){this.a=d
this.b=e},
d8C:function d8C(d,e){this.a=d
this.b=e},
d8d:function d8d(d){this.a=d},
d8e:function d8e(d,e){this.a=d
this.b=e},
d8G:function d8G(d){this.a=d},
d8m:function d8m(d){this.a=d},
d8k:function d8k(d){this.a=d},
d8l:function d8l(d){this.a=d},
d8n:function d8n(d){this.a=d},
d8D:function d8D(d){this.a=d},
d8E:function d8E(){},
d8i:function d8i(d){this.a=d},
d8j:function d8j(d,e){this.a=d
this.b=e},
d8o:function d8o(d){this.a=d},
d8p:function d8p(d,e){this.a=d
this.b=e},
d8P:function d8P(d){this.a=d},
d8O:function d8O(d,e){this.a=d
this.b=e},
d8N:function d8N(d){this.a=d},
d8z:function d8z(d){this.a=d},
d8y:function d8y(d){this.a=d},
d8A:function d8A(d){this.a=d},
d8f:function d8f(d,e){this.a=d
this.b=e},
d8B:function d8B(d,e){this.a=d
this.b=e},
d8s:function d8s(d){this.a=d},
d8t:function d8t(d){this.a=d},
d8r:function d8r(){},
d8u:function d8u(d){this.a=d},
d8v:function d8v(d){this.a=d},
d8w:function d8w(d,e){this.a=d
this.b=e},
d8x:function d8x(d,e,f){this.a=d
this.b=e
this.c=f},
d8q:function d8q(d,e){this.a=d
this.b=e},
d8I:function d8I(d){this.a=d},
d8H:function d8H(){},
d8J:function d8J(d){this.a=d},
d8K:function d8K(d){this.a=d},
d8L:function d8L(d){this.a=d},
d8M:function d8M(d,e){this.a=d
this.b=e},
d8g:function d8g(d){this.a=d},
d8h:function d8h(d){this.a=d},
Zk:function Zk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beB:function beB(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
daB:function daB(d){this.a=d},
daC:function daC(d){this.a=d},
daA:function daA(d){this.a=d},
daD:function daD(d){this.a=d},
daz:function daz(d){this.a=d},
daE:function daE(d){this.a=d},
day:function day(d){this.a=d},
daF:function daF(d,e){this.a=d
this.b=e},
dax:function dax(d,e){this.a=d
this.b=e},
daG:function daG(d,e){this.a=d
this.b=e},
Zi:function Zi(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aeC:function aeC(d,e,f){this.a=d
this.b=e
this.c=f},
azW:function azW(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d95:function d95(d,e){this.a=d
this.b=e},
d94:function d94(d,e){this.a=d
this.b=e},
d99:function d99(d){this.a=d},
d98:function d98(d,e){this.a=d
this.b=e},
d96:function d96(d){this.a=d},
d97:function d97(d){this.a=d},
d9a:function d9a(d){this.a=d},
d9b:function d9b(d){this.a=d},
d93:function d93(d,e){this.a=d
this.b=e},
d92:function d92(d,e){this.a=d
this.b=e},
K_:function K_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yz:function Yz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cHK:function cHK(d){this.a=d},
cHL:function cHL(){},
cHM:function cHM(d){this.a=d},
bbR:function bbR(d,e,f){this.b=d
this.c=e
this.a=f},
bbI:function bbI(d,e){this.b=d
this.a=e},
ul:function ul(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YR:function YR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbP:function bbP(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d0a:function d0a(d,e,f){this.a=d
this.b=e
this.c=f},
d09:function d09(d,e){this.a=d
this.b=e},
d0z:function d0z(d){this.a=d},
d0m:function d0m(){},
d0A:function d0A(d){this.a=d},
d0l:function d0l(){},
d0B:function d0B(d,e){this.a=d
this.b=e},
d0k:function d0k(d,e){this.a=d
this.b=e},
d0C:function d0C(d,e){this.a=d
this.b=e},
d0j:function d0j(d,e){this.a=d
this.b=e},
d0D:function d0D(d){this.a=d},
d0i:function d0i(){},
d0E:function d0E(d,e){this.a=d
this.b=e},
d0h:function d0h(d,e){this.a=d
this.b=e},
d0F:function d0F(d){this.a=d},
d0u:function d0u(d,e){this.a=d
this.b=e},
d0G:function d0G(d){this.a=d},
d0H:function d0H(d){this.a=d},
d0J:function d0J(d){this.a=d},
d0K:function d0K(d){this.a=d},
d0t:function d0t(d,e){this.a=d
this.b=e},
d0L:function d0L(d,e){this.a=d
this.b=e},
aGQ:function aGQ(d){this.a=d},
bh3:function bh3(d){this.a=d},
ba3:function ba3(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
akE:function akE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a0x:function a0x(d,e){this.a=d
this.b=e},
akF:function akF(d,e,f,g,h,i){var _=this
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
_.bx$=h
_.ab$=i
_.c=_.a=null},
bOb:function bOb(d){this.a=d},
bO5:function bO5(d){this.a=d},
bO4:function bO4(d,e){this.a=d
this.b=e},
bOe:function bOe(d){this.a=d},
bO6:function bO6(d){this.a=d},
bO7:function bO7(d){this.a=d},
bOa:function bOa(d){this.a=d},
bO9:function bO9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bOc:function bOc(d,e){this.a=d
this.b=e},
bOd:function bOd(){},
bO8:function bO8(d){this.a=d},
bO2:function bO2(d,e){this.a=d
this.b=e},
bO3:function bO3(d){this.a=d},
bmq:function bmq(d,e){this.b=d
this.a=e},
azV:function azV(){},
is(d,e){var w
$.W()
w=A.K()
w.b=B.ac
w.c=e
w.r=d.gp(0)
w.d=B.bH
w.e=B.dS
return w},
bAz(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.a
J.bq(j.save())
j.translate(e.a,e.b)
d.oW(0,a0?-f:f,f)
w=A.bP(B.hY,8,36)
v=B.w.j(0.3)
u=$.W()
t=A.K()
t.r=v.gp(0)
d.e1(w,t)
w=a1===D.VA
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.br(D.eeV,new A.t(-4+v,-2),C.is(q,5))
d.br(D.ecC,new A.t(4-v,-2),C.is(q,5))}else{t=A.bP(B.Iv,14,40)
p=A.K()
p.r=v.gp(0)
d.e1(t,p)}v=u.r
u=x.v
o=new A.aJ(v,B.ak,k,k,A.a([],u))
t=-64-r
o.D(new A.b1(-11,t))
o.D(new A.ca(-15,-40,-14,a3?-12:-18))
o.D(new A.ap(14,a3?-12:-18))
o.D(new A.ca(15,-40,11,t))
o.D(new A.bv())
t=A.K()
t.r=w.gp(0)
d.aJ(o,t)
u=new A.aJ(v,B.ak,k,k,A.a([],u))
u.D(new A.b1(-12,-50-r))
v=-46-r
u.D(new A.ap(12,v))
u.D(new A.ap(12.5,-42-r))
u.D(new A.ap(-12.5,v))
u.D(new A.bv())
v=A.K()
v.r=h.c.gp(0)
d.aJ(u,v)
A:{if(D.aay===a1){w=Math.sin(g*3.4)
break A}if(D.aaz===a1){w=Math.sin(g*7.5)
break A}w=s
break A}if(a1===D.aay){n=-52+w*14
d.br(new A.t(10,n-22),new A.t(10,n+44),C.is(F.EQ,3.4))
d.br(D.efb,new A.t(9,n),C.is(q,4))
d.br(D.ecZ,new A.t(10,n),C.is(q,4))}else if(a1===D.aaz){d.br(D.ee4,new A.t(-8,-26-Math.max(0,w)*6),C.is(q,4))
d.br(D.ebf,new A.t(8,-26-Math.max(0,-w)*6),C.is(q,4))}else{w=s*3
v=-38-r
d.br(D.ee8,new A.t(-12-w,v),C.is(q,4))
d.br(D.aHR,new A.t(12+w,v),C.is(q,4))}w=A.K()
w.r=q.gp(0)
d.aX(D.eUJ,w)
m=new A.t(0,-77-r)
w=A.bP(m,22,19)
v=A.K()
v.r=q.gp(0)
d.e1(w,v)
w=h.y
if(w!=null){v=A.bP(m.aa(0,H.uO),15,24)
u=A.K()
u.r=w.gp(0)
d.e1(v,u)
u=m.aa(0,D.eba)
v=A.K()
v.r=w.gp(0)
d.ae(u,4,v)}else{w=A.bP(m.aa(0,B.rH),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.e0(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.br(m.aa(0,D.ef9),m.aa(0,D.ee3),C.is(v,2.2))
d.br(m.aa(0,D.ecY),m.aa(0,D.eb7),C.is(v,2.2))}if(w===4){w=m.aa(0,D.efd)
u=A.K()
u.r=v.gp(0)
d.ae(w,6,u)
u=m.aa(0,D.ed0)
w=A.K()
w.r=v.gp(0)
d.ae(u,6,w)}}w=m.aa(0,D.edR)
v=A.K()
v.r=B.j8.gp(0)
d.ae(w,0.9,v)
v=m.aa(0,D.edF)
w=A.K()
w.r=B.j8.gp(0)
d.ae(v,0.9,w)
if(i){l=m.aa(0,H.a69)
w=A.bP(l,21,22)
v=A.K()
v.r=D.nL.gp(0)
d.e1(w,v)
v=A.bP(l.aa(0,H.aHO),5,12)
w=A.K()
w.r=D.baE.gp(0)
d.e1(v,w)
d.br(l.aa(0,D.ef5),l.aa(0,H.aIa),C.is(D.dK,1.4))
d.br(D.aHR,new A.t(15,-88-r),C.is(q,3.6))}j.restore()},
hSF(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.a,a1=A.ar(a0,B.w,0.28)
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
s=A.bz(D.eUK,B.rL)
p=$.W()
o=A.K()
o.r=u.gp(0)
a2.aD(s,o)
o=A.bz(D.eUF,B.ie)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a2.aD(o,n)
n=A.bz(D.eUT,B.ie)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a2.aD(n,s)
s=A.K()
s.r=a0.gp(0)
a2.e1(D.eUM,s)
s=A.K()
s.r=a0.gp(0)
a2.e1(D.eTy,s)
s=a2.a
J.bq(s.save())
s.translate(a4.w,0)
J.bq(s.save())
a2.oW(0,q,q*(1+t*0.012))
o=a3.f
m=o&&!a3.r?25:28
n=x.v
l=new A.aJ(p.r,B.ak,d,d,A.a([],n))
p=-m
k=p+2
l.D(new A.b1(k,-58))
l.D(new A.ca(p-3,-62,p,-52))
l.D(new A.ap(p+4,-14))
l.D(new A.ap(m-4,-14))
l.D(new A.ap(m,-52))
l.D(new A.ca(m+3,-62,m-2,-58))
l.D(new A.ca(0,-70,k,-58))
l.D(new A.bv())
k=A.K()
k.r=v.gp(0)
a2.aJ(l,k)
J.bq(s.save())
a2.mB(0,l)
switch(a3.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.d49[j]
i=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
i.b=B.ac
i.c=5
i.r=k.gp(0)
i.d=B.bH
i.e=B.dS
h=i.H()
s.drawLine.apply(s,[-34+u,-64,14+u,-14,h])
h.delete()}break
case 2:for(k=a3.c,g=-56;g<-14;g+=11)for(f=-26+B.o.F(B.o.an(g,11),2)*6;f<28;f+=12){i=k.j(0.85)
$.W()
e=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
e.r=i.gp(0)
h=e.H()
s.drawCircle(f,g,3.6,h)
h.delete()
e=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
e.r=u.gp(0)
h=e.H()
s.drawCircle(f,g,1.6,h)
h.delete()}break
case 3:for(u=a3.c,f=-28;f<30;f+=8){k=u.j(0.7)
i=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bH
i.e=B.dS
h=i.H()
s.drawLine.apply(s,[f,-64,f,-14,h])
h.delete()}for(g=-60;g<-14;g+=8){k=u.j(0.7)
i=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
i.b=B.ac
i.c=1.6
i.r=k.gp(0)
i.d=B.bH
i.e=B.dS
h=i.H()
s.drawLine.apply(s,[-30,g,30,g,h])
h.delete()}break
default:a2.br(D.eeD,D.ebQ,C.is(a3.c.j(0.9),3))}a2.br(D.ef6,D.ee9,C.is(B.w.j(0.18),1.6))
a2.br(D.ebe,H.aHT,C.is(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.W()
i=A.K()
i.r=u.gp(0)
a2.aX(D.eTv,i)
s.restore()
i=A.K()
i.r=a1.gp(0)
a2.aX(D.eTG,i)
n=new A.aJ(k.r,B.ak,d,d,A.a([],n))
n.D(new A.b1(-9,-66))
n.D(new A.ca(0,-57,9,-66))
n.D(new A.ca(0,-60,-9,-66))
k=A.K()
k.r=a0.gp(0)
a2.aJ(n,k)
if(a3.e!==1)u=a3.r&&!o
else u=!0
if(u)a2.e0(D.eTO,0.1,2.941592653589793,!1,C.is(a3.c,2.2))
s.restore()
u=-56*q
o=a4.Q
if(o==null)o=D.aIn
n=25*q
k=23*q
i=9*q
C.hhL(a2,new A.t(p*q+2,u),o,n,k,-1,v,a0,i)
o=a4.as
p=o==null?D.a6h:o
C.hhL(a2,new A.t(m*q-2,u),p,n,k,1,v,a0,i)
if(a4.at){a2.br(D.ecu,D.ecr,C.is(D.agj,4))
a2.br(D.ect,D.ecp,C.is(D.blk.j(0.7),1.4))
u=A.K()
u.r=D.dK.gp(0)
a2.ae(D.ecs,5,u)}s.restore()
u=a4.w
p=a4.e
o=a4.r
J.bq(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a2.iZ(0,a4.f)
a2.bX(0,r)
C.hSC(a2,a3,a4,a5,a6,a0,a1,w)
s.restore()},
hhL(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aF(0,e),r=s.gcH(),q=r===0?B.hY:s.eO(0,r),p=B.k.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.t(o,w)
if(o*i<0)v=new A.t(-o,-w)
u=e.aa(0,q.aI(0,n)).aa(0,v.aI(0,m))
t=e.aa(0,q.aI(0,p))
d.br(e,u,C.is(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.br(e,u,C.is(o,l*0.35))
d.br(u,t,C.is(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.br(u,t,C.is(o,l*0.22))
$.W()
o=A.K()
o.r=j.gp(0)
d.ae(u,l*0.55,o)
o=A.bP(t,l*1.15,l)
w=A.K()
w.r=k.gp(0)
d.e1(o,w)
w=-l
w=t.aa(0,new A.t(i*w*0.45,w*0.1))
o=A.K()
o.r=k.gp(0)
d.ae(w,l*0.28,o)},
hSC(c3,c4,c5,c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c4.d,c2=c4.e
if(c2===3||c2===4){w=A.bP(B.uN,40,38)
$.W()
v=A.K()
v.r=c1.gp(0)
c3.e1(w,v)}if(c2===4){$.W()
w=A.K()
w.r=c1.gp(0)
c3.ae(D.eej,9.5,w)
w=A.K()
w.r=c1.gp(0)
c3.ae(D.ebs,9.5,w)}w=A.bP(D.eft,10,6)
v=$.W()
u=A.K()
u.r=c9.gp(0)
c3.e1(w,u)
u=A.bP(D.edO,10,6)
w=A.K()
w.r=c9.gp(0)
c3.e1(u,w)
v=v.r
w=x.v
t=new A.aJ(v,B.ak,c0,c0,A.a([],w))
t.D(new A.b1(0,-20))
t.D(new A.lB(13,-20,17,-9,16,2))
t.D(new A.lB(15,13,8,20,0,20))
t.D(new A.lB(-8,20,-15,13,-16,2))
t.D(new A.lB(-17,-9,-13,-20,0,-20))
t.D(new A.bv())
u=A.K()
u.sar(A.DR(D.eeX,28,A.a([d0,c8,c9],x.O),A.a([0,0.55,1],x.n),B.x,c0,c0,0))
c3.aJ(t,u)
u=c4.r
if(u){s=C.is(c9.j(0.5),0.8)
c3.e0(D.eUU,3.455751918948773,2.5132741228718345,!1,s)
c3.e0(D.eTB,3.455751918948773,2.5132741228718345,!1,s)
c3.br(D.eeg,D.ee5,s)
c3.br(D.ebp,D.ebh,s)
c3.e0(D.eTN,2.2,1.4,!1,s)
c3.e0(D.eTz,-0.4,1.4,!1,s)}switch(c2){case 0:for(r=c3.a,q=0;q<16;++q){p=3.141592653589793*(1.02+0.96*q/15)
o=Math.cos(p)
n=Math.sin(p)
m=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
m.r=c1.gp(0)
l=m.H()
r.drawCircle(o*14.5,-3+n*17.5,4.3,l)
l.delete()}r=A.K()
r.r=c1.gp(0)
c3.e0(D.eU0,3.141592653589793,3.141592653589793,!0,r)
break
case 1:r=new A.aJ(v,B.ak,c0,c0,A.a([],w))
r.D(new A.b1(-15,-11))
r.D(new A.ca(0,-30,15,-11))
r.D(new A.ap(13,-6))
r.D(new A.ca(0,-12,-13,-6))
r.D(new A.bv())
o=A.K()
o.r=c4.c.gp(0)
c3.aJ(r,o)
c3.br(D.ee6,D.ebi,C.is(D.tq,1.4))
o=A.K()
o.r=c1.gp(0)
c3.ae(D.eem,3,o)
o=A.K()
o.r=c1.gp(0)
c3.ae(D.ebt,3,o)
o=new A.aJ(v,B.ak,c0,c0,A.a([],w))
o.D(new A.b1(-13,6))
o.D(new A.ca(-12,22,0,26))
o.D(new A.ca(12,22,13,6))
o.D(new A.ca(8,13,0,12))
o.D(new A.ca(-8,13,-13,6))
o.D(new A.bv())
r=A.K()
r.r=B.il.gp(0)
c3.aJ(o,r)
r=new A.aJ(v,B.ak,c0,c0,A.a([],w))
r.D(new A.b1(-7,8))
r.D(new A.ca(0,6,7,8))
r.D(new A.ca(0,10.5,-7,8))
o=A.K()
o.r=B.bO.gp(0)
c3.aJ(r,o)
break
case 2:k=c4.y
if(k==null)k=c4.b
r=new A.aJ(v,B.ak,c0,c0,A.a([],w))
r.D(new A.b1(-17,-4))
r.D(new A.ca(-20,-27,0,-29))
r.D(new A.ca(20,-27,17,-4))
r.D(new A.ca(0,-14,-17,-4))
r.D(new A.bv())
o=A.K()
o.r=k.gp(0)
c3.aJ(r,o)
o=A.ar(k,B.w,0.3)
o.toString
c3.e0(D.eU7,3.4,2.5,!1,C.is(o,1.4))
o=A.ar(k,B.c,0.3)
o.toString
c3.e0(D.eTV,3.6,2.2,!1,C.is(o,1.2))
o=new A.aJ(v,B.ak,c0,c0,A.a([],w))
o.D(new A.b1(11,-22))
o.D(new A.ca(27,-34,25,-19))
o.D(new A.ca(18,-18,11,-22))
r=A.ar(k,B.c,0.1)
r.toString
n=A.K()
n.r=r.gp(0)
c3.aJ(o,n)
n=new A.aJ(v,B.ak,c0,c0,A.a([],w))
n.D(new A.b1(11,-22))
n.D(new A.ca(24,-12,27,-26))
n.D(new A.ca(18,-22,11,-22))
o=A.ar(k,B.w,0.2)
o.toString
r=A.K()
r.r=o.gp(0)
c3.aJ(n,r)
r=A.K()
r.r=c4.c.gp(0)
c3.ae(D.ebj,3,r)
break
case 3:r=A.K()
r.r=c1.gp(0)
c3.e0(D.eU4,3.204424506661589,3.015928947446201,!0,r)
for(r=c3.a,q=-3;q<=3;++q){o=A.ar(c1,B.c,0.18)
o.toString
n=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
n.b=B.ac
n.c=0.9
n.r=o.gp(0)
n.d=B.bH
n.e=B.dS
l=n.H()
r.drawLine.apply(r,[q*3.6,-19+Math.abs(q)*0.8,q*4.6,-4,l])
l.delete()}for(o=c4.c,j=0;j<2;++j){i=D.dhy[j]
n=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
n.b=B.ac
n.c=4.5
n.r=c1.gp(0)
n.d=B.bH
n.e=B.dS
l=n.H()
r.drawLine.apply(r,[i,0,i*1.12,22,l])
l.delete()
for(h=0;h<3;++h){n=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
n.r=o.gp(0)
l=n.H()
r.drawCircle(i*(1+h*0.04),7+h*6.5,1.8,l)
l.delete()}}break
case 4:r=A.K()
r.r=c1.gp(0)
c3.e0(D.eU3,3.204424506661589,3.015928947446201,!0,r)
r=A.ar(c1,B.c,0.25)
r.toString
c3.br(H.a69,H.a68,C.is(r,1))
break
default:r=A.K()
r.r=c1.gp(0)
c3.e0(D.eTC,3.267256359733385,2.8902652413026098,!0,r)}g=B.k.E(c5.b,0,1)*0.4+0.1
r=A.bP(D.eff,5,8)
o=D.ad4.j(g)
n=A.K()
n.r=o.gp(0)
c3.e1(r,n)
n=A.bP(D.ee_,5,8)
r=D.ad4.j(g)
o=A.K()
o.r=r.gp(0)
c3.e1(n,o)
f=c5.e*2.4
o=new A.aJ(v,B.ak,c0,c0,A.a([],w))
o.D(new A.b1(f-0.6,-2))
o.D(new A.ca(f-3.4,6,f-2.6,7.4))
o.D(new A.ca(f,8.8,f+2.6,7.4))
c3.aJ(o,C.is(c9.j(0.75),1.1))
o=A.K()
o.r=c9.gp(0)
c3.ae(new A.t(f-1.5,7.2),0.7,o)
o=A.K()
o.r=c9.gp(0)
c3.ae(new A.t(f+1.5,7.2),0.7,o)
e=B.k.F(c6*0.33+c7*0.37,1)>0.965?1:0
r=c5.d
o=c5.c>0.8?1.25:1
d=(1-e)*(1-r*0.6)*o
for(r=c3.a,o=d<0.15,n=c4.f,m=d>0.12,a0=2.5*d,a1=a0*2,a2=a0*2.2,j=0;j<2;++j){a3=F.jc[j]
a4=c5.e
a5=a3>0?0.7:1
a6=a3*6.4+a4*2*a5
if(m){a4=Math.max(0.6,a1)
a5=A.bP(new A.t(a6,-3),a4,7)
a7=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
a7.r=B.c.j(0.96).gp(0)
l=a7.H()
r.drawOval(A.bQ(a5),l)
l.delete()
a8=a6+c5.y*1.5
a9=-3+c5.z*0.7
J.bq(r.save())
a5=A.a([],w)
a7=new A.aJ(v,B.ak,c0,c0,a5)
a5.push(new A.jy(A.bP(new A.t(a6,-3),a4,7)))
a4=a7.gbB().a.snapshot()
a4=a7.e=new A.cv(a4)
r.clipPath(a4.a,$.oR(),!0)
a4=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
a4.r=D.be9.gp(0)
l=a4.H()
r.drawCircle(a8,a9,2.1,l)
l.delete()
a4=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
a4.r=B.w.gp(0)
l=a4.H()
r.drawCircle(a8,a9,1.05,l)
l.delete()
a4=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
a4.r=B.c.gp(0)
l=a4.H()
r.drawCircle(a8-0.7,a9-0.7,0.55,l)
l.delete()
r.restore()}a4=n?D.Xu:c9.j(0.9)
a5=n?1.5:1.1
b0=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
b0.b=B.ac
b0.c=a5
b0.r=a4.gp(0)
b0.d=B.bH
b0.e=B.dS
a4=o?0.8:0
a4=A.bP(new A.t(a6,-3+a4),Math.max(1.2,a2),7.3500000000000005)
l=b0.H()
r.drawArc.apply(r,[A.bQ(a4),189,162,!1,l])
l.delete()
a4=c5.c
b1=-9.2-a4*2.2
a5=a3*3.6
a7=a4<0?-a4*1.6:0
a4=a4>0?a4*0.6:0
if(u)b2=B.e2
else{b2=A.ar(c1,B.w,0.2)
b2.toString}b3=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
b3.b=B.ac
b3.c=1.7
b3.r=b2.gp(0)
b3.d=B.bH
b3.e=B.dS
l=b3.H()
r.drawLine.apply(r,[a6-a5,b1-a7+0.4,a6+a5,b1-0.6-a4,l])
l.delete()}b4=B.k.E(c5.a,0,1)
if(n)b5=D.bnt
else{u=A.ar(c9,D.bhs,0.6)
u.toString
b5=u}b6=c5.b
if(b4>0.06){b7=5+B.k.E(b6,0,1)*2.2
b8=1.2+b4*6.5
b9=new A.aJ(v,B.ak,c0,c0,A.a([],w))
w=-b7
b9.D(new A.b1(w,11.5))
b9.D(new A.ca(0,11.5+b8*0.2-c5.b*1.5,b7,11.5))
b9.D(new A.ca(0,11.5+b8*1.5+c5.b*1.5,w,11.5))
b9.D(new A.bv())
v=A.K()
v.r=D.bgQ.gp(0)
c3.aJ(b9,v)
J.bq(r.save())
c3.mB(0,b9)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c3.aX(new A.a5(w,11,w+b7*2,13.2),u)
u=A.bP(new A.t(0,11.5+b8*1.1),b8*0.9,b7*1.4)
w=A.K()
w.r=D.bny.gp(0)
c3.e1(u,w)
r.restore()
c3.aJ(b9,C.is(b5,1.1))}else{u=new A.aJ(v,B.ak,c0,c0,A.a([],w))
r=11.5-b6*0.8
u.D(new A.b1(-5.2,r))
u.D(new A.ca(0,13.1+b6*2.8,5.2,r))
c3.aJ(u,C.is(b5,1.5))
if(b6>0.6){w=new A.aJ(v,B.ak,c0,c0,A.a([],w))
w.D(new A.b1(-4.6,11.8))
w.D(new A.ca(0,15.1+b6*1.4,4.6,11.8))
w.D(new A.ca(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.K()
u.r=v.gp(0)
c3.aJ(w,u)}}if(c5.b>0.2){c3.e0(D.eTM,-1.2,2.2,!1,C.is(c9.j(0.5),0.8))
c3.e0(D.eTD,2.141592653589793,2.2,!1,C.is(c9.j(0.5),0.8))}if(n&&c2!==2){c2=c4.c
w=A.K()
w.r=c2.gp(0)
c3.ae(D.edH,1.7,w)
w=A.K()
w.r=c2.gp(0)
c3.ae(D.edD,1.7,w)}},
hXY(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.W(),e=new A.pH(),d=A.yY(e,g),a0=a4.a,a1=a4.b,a2=Math.min(a0/450,a1/900),a3=A.K()
a3.sar(A.mw(B.J,new A.t(0,a1*0.46),D.d15,D.cUa,B.x,g))
d.aX(new A.a5(0,0,0+a0,0+a1),a3)
a3=d.a
J.bq(a3.save())
a3.translate((a0-450*a2)/2,(a1-900*a2)/2)
d.bX(0,a2)
w=new A.en()
w.df(8)
for(v=0;v<120;++v){a0=w.aj()
a1=w.aj()
u=w.aj()
t=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
t.r=B.c.j(0.2+w.aj()*0.5).gp(0)
s=t.H()
a3.drawCircle(a0*450*1.4-90,a1*330-40,0.5+u*0.9,s)
s.delete()}J.bq(a3.save())
a3.translate(200,120)
d.iZ(0,-0.5)
a0=A.K()
a1=x.O
a0.sar(A.DR(B.J,230,A.a([D.bd_,B.K],a1),g,B.x,g,g,0))
d.e1(D.eUh,a0)
a3.restore()
a0=A.K()
a0.sar(A.DR(D.a6g,58,A.a([D.bfX,B.K],a1),g,B.x,g,g,0))
d.ae(D.a6g,58,a0)
a0=A.K()
a0.r=D.bbM.gp(0)
d.ae(D.a6g,24,a0)
a0=A.K()
a0.r=D.XQ.gp(0)
d.ae(D.ec8,5,a0)
a0=A.K()
a0.r=D.XQ.gp(0)
d.ae(D.ecb,3.4,a0)
a0=A.K()
a0.r=D.XQ.gp(0)
d.ae(D.eca,2.4,a0)
for(a0=x.v,r=0;r<3;++r,f=u){u=A.a([],a0)
q=new A.aJ(f.r,B.ak,g,g,u)
u.push(new A.b1(-60,420))
for(f=372+r*12,t=60+r*20,p=r*2,o=14-r*3,n=-60;n<=510;n+=8){m=new A.ap(n,f+Math.sin(n/t+p)*o+Math.sin(n/23+r)*3)
u.push(m)
l=q.f
if(l!=null)m.bA(l)
m=q.e
if(m!=null)m.a.delete()
q.e=null}f=new A.ap(510,470)
u.push(f)
t=q.f
if(t!=null)f.bA(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.ap(-60,470)
u.push(f)
t=q.f
if(t!=null)f.bA(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.bv()
u.push(f)
u=q.f
if(u!=null)f.bA(u)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=[D.bav,D.bcj,D.bhM][r]
u=$.W()
t=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
t.r=f.gp(0)
s=t.H()
f=q.e
a3.drawPath((f==null?q.e=new A.cv(q.gbB().a.snapshot()):f).a,s)
s.delete()}for(k=0;k<4;++k){n=D.cou[k]
j=384+B.o.F(n,11)
f=n-2
a0=j-24
u=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
u.b=B.ac
u.c=2.4
u.r=D.Y6.gp(0)
u.d=B.bH
u.e=B.dS
s=u.H()
a3.drawLine.apply(a3,[n,j,f,a0,s])
s.delete()
f=A.bP(new A.t(f,j-27),11,46)
u=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
u.r=D.Y6.gp(0)
s=u.H()
a3.drawOval(A.bQ(f),s)
s.delete()
a0=A.bP(new A.t(n-12,a0),8,24)
f=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
f.r=D.Y6.gp(0)
s=f.H()
a3.drawOval(A.bQ(a0),s)
s.delete()}for(v=0;v<9;++v){f=B.o.F(v,3)
a0=B.o.F(v,4)
u=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
u.r=D.bbP.j(0.8).gp(0)
s=u.H()
a3.drawCircle(20+v*52+f*7,400+a0*5,1.2,s)
s.delete()}f=A.K()
f.sar(A.mw(D.eaT,D.eaV,D.cW1,B.Hy,B.x,g))
d.aX(new A.a5(-200,412,650,1300),f)
i=new A.en()
i.df(21)
for(v=0;v<260;++v){f=i.aj()
j=420+i.aj()*480
a0=i.aj()
u=j/900+0.4
u=A.bP(new A.t(f*450,j),1+i.aj()*2*u,1.5+a0*4*u)
f=i.he()?B.c:B.w
a0=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
a0.r=f.j(0.06+i.aj()*0.06).gp(0)
s=a0.H()
a3.drawOval(A.bQ(u),s)
s.delete()}J.bq(a3.save())
a3.translate(225,590)
d.oW(0,1,0.34)
f=A.K()
f.sar(A.DR(B.J,250,A.a([D.biB,D.bcE,D.bkm],a1),A.a([0,0.8,1],x.n),B.x,g,g,0))
d.ae(B.J,250,f)
a3.restore()
for(v=0;v<40;++v){n=i.aj()*450
j=640+i.aj()*260
f=i.aj()
a0=A.ar(D.bht,D.bbj,i.aj())
a0.toString
for(f=j-(6+f*10),h=-1;h<=1;++h){$.W()
a1=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
a1.b=B.ac
a1.c=1.3
a1.r=a0.gp(0)
a1.d=B.bH
a1.e=B.dS
s=a1.H()
a3.drawLine.apply(a3,[n+h*2,j,n+h*5,f+Math.abs(h)*3,s])
s.delete()}}C.hQZ(d)
for(k=0;k<3;++k)C.hU2(d,D.awJ[k])
C.hTS(d,D.ec2)
for(n=118;n<190;n+=11){f=B.o.F(n,3)
a0=B.o.F(n,4)
$.W()
a1=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
a1.b=B.ac
a1.c=2.4
a1.r=D.Y2.gp(0)
a1.d=B.bH
a1.e=B.dS
s=a1.H()
a3.drawLine.apply(a3,[n,452+f,n+1,436+a0,s])
s.delete()}d.br(D.ebg,D.ebx,C.is(D.bc1,1.6))
a3.restore()
return e.nP()},
hQZ(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.W().r,e=x.v,d=new A.aJ(f,B.ak,g,g,A.a([],e))
d.D(new A.b1(358,462))
d.D(new A.lB(354,422,370,382,374,332))
d.D(new A.ap(410,332))
d.D(new A.lB(416,382,432,422,428,462))
d.D(new A.bv())
w=A.K()
w.sar(A.mw(new A.t(354,0),new A.t(430,0),D.dnq,E.Qv,B.x,g))
a0.aJ(d,w)
v=new A.en()
v.df(4)
for(w=a0.a,u=0;u<30;++u){t=364+v.aj()*56
s=462-v.aj()*126
r=v.aj()
q=v.aj()
p=B.w.j(0.18)
o=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
o.b=B.ac
o.c=1.1
o.r=p.gp(0)
o.d=B.bH
o.e=B.dS
n=o.H()
w.drawLine.apply(w,[t,s,t+r*3-1.5,s+8+q*12,n])
n.delete()}for(m=0;m<6;++m){l=D.d5t[m]
r=l.a
q=392+r*12
p=-l.b
o=q+r*52
k=336+(p*46-8)
r=o+r*42
p=k+(p*34+4)
j=A.a([],e)
i=new A.aJ(f,B.ak,g,g,j)
j.push(new A.b1(q,336))
j.push(new A.ca(o,k,r,p))
q=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
q.b=B.ac
q.c=8
q.r=D.adJ.gp(0)
q.d=B.bH
q.e=B.dS
n=q.H()
q=i.gbB().a.snapshot()
w.drawPath((i.e=new A.cv(q)).a,n)
n.delete()
for(h=0;h<6;++h){q=v.aj()
o=v.aj()
k=v.aj()
j=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
j.r=A.ar(D.bbV,D.bhL,v.aj()).j(0.92).gp(0)
n=j.H()
w.drawCircle(r+(q*36-18),p+(o*18-14),8+k*7,n)
n.delete()}r+=0
q=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
q.b=B.ac
q.c=1.2
q.r=D.Y2.gp(0)
q.d=B.bH
q.e=B.dS
n=q.H()
w.drawLine.apply(w,[r,p+8,r,p+22,n])
n.delete()
p=A.bP(new A.t(r,p+28),13,7)
r=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
r.r=D.biT.gp(0)
n=r.H()
w.drawOval(A.bQ(p),n)
n.delete()}},
hU2(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b4.a,a5=b4.b,a6=b4.c,a7=b4.d,a8=a6*0.5,a9=A.bP(new A.t(a4,a5+2),a8,a6*2.8),b0=B.w.j(0.3),b1=$.W(),b2=A.K()
b2.r=b0.gp(0)
b3.e1(a9,b2)
b1=b1.r
b2=x.v
w=new A.aJ(b1,B.ak,a3,a3,A.a([],b2))
a9=a4-a6
b0=a5-a7
w.D(new A.b1(a9,b0))
w.D(new A.ap(a9,a5))
v=a4+a6
w.D(new A.ca(a4,a5+a6*0.22,v,a5))
w.D(new A.ap(v,b0))
w.D(new A.bv())
u=A.K()
u.sar(A.mw(new A.t(a9,0),new A.t(v,0),D.d5z,E.Qv,B.x,a3))
b3.aJ(w,u)
t=new A.en()
t.df(B.o.V(a4*7))
v=b3.a
J.bq(v.save())
b3.mB(0,w)
for(s=0;s<40;++s){r=a9+t.aj()*a6*2
q=b0+t.aj()*a7
u=t.aj()
p=t.aj()
o=B.w.j(0.14)
n=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
n.b=B.ac
n.c=1
n.r=o.gp(0)
n.d=B.bH
n.e=B.dS
m=n.H()
v.drawLine.apply(v,[r,q,r+4+u*5,q+p*2-1,m])
m.delete()}u=b0+5
p=a6*2
o=D.afa.j(0.75)
n=A.K()
n.r=o.gp(0)
b3.aX(new A.a5(a9,u,a9+p,u+7),n)
for(u=a6/5,o=b0+12,n=b0+20,l=a9+2,k=0;k<B.k.bm(u);++k){j=l+k*10
i=A.a([],b2)
h=new A.aJ(b1,B.ak,a3,a3,i)
i.push(new A.b1(j,o))
i.push(new A.ap(j+5,n))
i.push(new A.ap(j+10,o))
i.push(new A.bv())
i=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
i.r=D.nL.j(0.85).gp(0)
m=i.H()
i=h.gbB().a.snapshot()
v.drawPath((h.e=new A.cv(i)).a,m)
m.delete()}u=A.a([],b2)
g=new A.aJ(b1,B.ak,a3,a3,u)
b1=a5-8
g.D(new A.b1(a9,b1))
for(p/=6,k=0;k<=B.k.bm(p);++k){o=(k&1)===0?0:-5
o=new A.ap(a9+k*6,b1+o)
u.push(o)
n=g.f
if(n!=null)o.bA(n)
o=g.e
if(o!=null)o.a.delete()
g.e=null}b3.aJ(g,C.is(D.afa.j(0.7),1.6))
v.restore()
a9=$.W().r
b1=new A.aJ(a9,B.ak,a3,a3,A.a([],b2))
u=a6*0.1
p=a4+u
o=a6*0.28
n=p-o
l=a5+1
b1.D(new A.b1(n,l))
i=a5-a7*0.55
b1.D(new A.ap(n,i))
o=p+o
b1.D(new A.ca(p,a5-a7*0.82,o,i))
b1.D(new A.ap(o,l))
b1.D(new A.bv())
l=A.K()
l.r=D.afk.gp(0)
b3.aJ(b1,l)
l=A.K()
l.r=D.afk.gp(0)
b3.ae(new A.t(a4-a6*0.62,a5-a7*0.5),u,l)
l=b4.e
u=b0-l
b1=a6*1.38
o=a4-b1
i=b0+4
p=a4+b1
f=new A.aJ(a9,B.ak,a3,a3,A.a([],b2))
f.D(new A.b1(o,i))
n=b0-l*0.55
f.D(new A.ca(a4-a8,n,a4,u))
f.D(new A.ca(a4+a8,n,p,i))
f.D(new A.ca(a4,b0+a6*0.34,o,i))
f.D(new A.bv())
b0=A.K()
n=a6*1.4
b0.sar(A.mw(new A.t(a4-n,0),new A.t(a4+n,0),D.d8M,E.Qv,B.x,a3))
b3.aJ(f,b0)
J.bq(v.save())
b3.mB(0,f)
for(a8=p-o,s=0;s<70;++s){e=s/69
b0=Math.sin(e*3.141592653589793)
p=t.aj()
n=(t.he()?B.w:D.bbt).j(0.16)
h=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
h.b=B.ac
h.c=0.9
h.r=n.gp(0)
h.d=B.bH
h.e=B.dS
m=h.H()
v.drawLine.apply(v,[a4+(p-0.5)*3,u,o+a8*e,i+b0*a6*0.3,m])
m.delete()}for(k=1;k<5;++k){d=u+l*k/4.6
a0=b1*k/4.6
b0=A.a([],b2)
p=new A.aJ(a9,B.ak,a3,a3,b0)
n=d+2
b0.push(new A.b1(a4-a0,n))
b0.push(new A.ca(a4,d+7+k*1.5,a4+a0,n))
b0=B.w.j(0.22)
n=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
n.b=B.ac
n.c=1.2
n.r=b0.gp(0)
n.d=B.bH
n.e=B.dS
m=n.H()
b0=p.gbB().a.snapshot()
v.drawPath((p.e=new A.cv(b0)).a,m)
m.delete()}v.restore()
for(s=0;s<46;++s){e=s/45
a1=o+a8*e
a2=i+Math.sin(e*3.141592653589793)*a6*0.3
b0=t.aj()
b1=t.aj()
p=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
p.b=B.ac
p.c=1.1
p.r=D.bi7.gp(0)
p.d=B.bH
p.e=B.dS
m=p.H()
v.drawLine.apply(v,[a1,a2,a1+(b0-0.5)*2,a2+3+b1*4,m])
m.delete()}a8=new A.aJ(a9,B.ak,a3,a3,A.a([],b2))
a9=u+4
a8.D(new A.b1(a4-2.5,a9))
a8.D(new A.ap(a4,u-7))
a8.D(new A.ap(a4+2.5,a9))
a8.D(new A.bv())
a9=A.K()
a9.r=D.beB.gp(0)
b3.aJ(a8,a9)},
hTS(d,e){var w,v,u,t,s,r,q,p,o
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=d.a,r=0;r<2;++r){q=w+D.dhv[r]
$.W()
p=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
p.b=B.ac
p.c=3
p.r=D.Y2.gp(0)
p.d=B.bH
p.e=B.dS
o=p.H()
s.drawLine.apply(s,[q,u,q,t,o])
o.delete()}u=A.bP(e.aa(0,H.aHN),24,36)
t=$.W()
s=A.K()
s.r=D.bmJ.gp(0)
d.e1(u,s)
t=new A.aJ(t.r,B.ak,null,null,A.a([],x.v))
s=w-24
u=v-30
t.D(new A.b1(s,u))
t.D(new A.ap(w,v-54))
t.D(new A.ap(w+24,u))
t.D(new A.ca(w,v-24,s,u))
t.D(new A.bv())
u=A.K()
u.r=D.aek.gp(0)
d.aJ(t,u)},
bPp:function bPp(){var _=this
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
va:function va(d,e,f,g,h,i,j,k,l,m){var _=this
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
eP8:function eP8(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
bPo:function bPo(){this.b=this.a=null},
aUn:function aUn(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bPg:function bPg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPh:function bPh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPi:function bPi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPj:function bPj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPk:function bPk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPl:function bPl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPm:function bPm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPn:function bPn(){},
bPf:function bPf(d){this.a=d},
aeK:function aeK(d,e){this.a=d
this.b=e},
acI:function acI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
akH(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bOr(s)
s.bxP(d)
return s},
Gh(d,e,f,g,h,i,j){var w,v=A.S(g).k("Z<1>")
v=A.de(new A.Z(g,new C.fiy(f),v),v.k("J.E"))
w=A.C(v,A.a6(v).k("cp.E"))
B.d.ec(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d1(w,0,A.dB(3,"count",x.S),A.S(w).c))
B.d.ec(v,d)
return new C.le(e,v,B.d.cD(v,f),h,i,"tree",j)},
idf(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.fRL(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jW(c4,c0)
t=A.C(c4,A.a6(c4).k("cp.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jW(c4,c0)
r=A.C(c4,A.a6(c4).k("cp.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jW(c4,c0)
q=A.C(c4,A.a6(c4).k("cp.E"))
for(c4=w.length,v=A.S(t).k("Z<1>"),s=v.k("J.E"),p=A.S(w).k("Z<1>"),o=p.k("J.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.M)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.vV)g="father"
else g=h===D.oV?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Z(t,new C.fRN(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Gh(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Z(w,new C.fRO(i,m),p),o)
B.d.ec(d,c6)
c2.$2(b4,new C.le("True or false: "+h+" is the "+g+" of "+l+".",D.axH,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.le("True or false: "+B.a.i(B.d.gI(d).b)+" is the "+g+" of "+l+".",D.axH,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.aks(m)
h=a0.length
if(h!==0){a1=a0[c6.au(h)]
h=B.a.i(a1.b)
f=A.C(new A.Z(t,new C.fRP(l,a0,c5),v),s)
e=a1.c
if(e===D.vV)e="son"
else e=e===D.oV?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Gh(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ey([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mi(a5,a5.r,f.k("mi<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Gh(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gI(a0).b)
f=A.a([],c3)
for(e=A.S(a0),a2=e.k("lR<1>"),a3=new A.lR(a0,1,b3,a2),a3.vf(a0,1,b3,e.c),a3=new A.bS(a3,a3.gL(0),a2.k("bS<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Gh(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gI(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gI(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aKR(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Z(t,new C.fRQ(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Gh(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Z(t,new C.fRR(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.vV
if(e)a2=b7
else a2=f===D.oV?b8:b9
if(e)f=b7
else f=f===D.oV?b8:b9
c2.$2("grand",C.Gh(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.boK(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.au(k)].b)
j=A.C(new A.Z(t,new C.fRS(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Gh(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cGZ)
h=l+" was born in "+k
c2.$2("place",C.Gh(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.cWZ)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Gh(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.M)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Gh(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jO(b1,b3,b3)
c2.$2("year",C.Gh(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
h19(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.akH(d),l=new A.en()
l.df(f)
w=C.idf(m,l,g)
for(v=new A.dt(w,w.r,w.e);v.C();)J.h5w(v.d,l)
v=A.a6(w).k("cs<1>")
u=A.C(new A.cs(w,v),v.k("J.E"))
B.d.ec(u,l)
t=A.a([],x.J)
s=A.aY(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b3(u,new C.fuN(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.M)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.M(0,J.q(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.q(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.avM,x.df)
B.d.ec(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.M)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hlz(o,l))}}else if(!g&&v>3){o=C.hlz(D.avM[l.au(14)],l)
t[t.length-1-l.au(3)]=o}return t},
hlz(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.ec(w,e)
return new C.le(d.a,w,B.d.cD(w,v),d.d,d.e,d.f,d.r)},
hnj(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="daughter",e=C.akH(a0),d=new A.en()
d.df(a1)
w=A.a([],x.gl)
v=A.aY(x.N)
u=A.C(e.b,x.P)
B.d.ec(u,d)
for(t=u.length,s=x.cc,r=x.s,q=0;q<u.length;u.length===t||(0,A.M)(u),++q){p=u[q]
o=B.a.i(p.b)
n=A.a([],r)
m=p.d
if(m==null)l=null
else{k=e.c
k===$&&A.c()
l=k.h(0,m)}if(l!=null){m=p.c
k=m===D.vV
if(k)j="son"
else j=m===D.oV?f:"child"
j=j[0]
if(k)m="son"
else m=m===D.oV?f:"child"
n.push(j.toUpperCase()+B.a.b2(m,1)+" of "+B.a.i(l.b))}i=e.aks(p)
if(i.length!==0){m=p.c
k=m===D.vV
if(k)j="father"
else j=m===D.oV?"mother":"parent"
j=j[0]
if(k)m="father"
else m=m===D.oV?"mother":"parent"
n.push(j.toUpperCase()+B.a.b2(m,1)+" of "+B.a.i(B.d.gI(i).b))}h=e.aKR(p)
if(h!=null)n.push("Married to "+B.a.i(h.b))
m=B.a.i(p.z)
if(m.length!==0)n.push("Works as "+m)
m=B.a.i(p.x)
if(m.length!==0)n.push("Born in "+m)
B.d.ec(n,d)
g=A.pP(new A.Z(n,new C.fxl(v),s))
if(g==null)continue
v.M(0,g)
w.push(new C.aXe(p.a,o,g))
if(w.length>=6)break}return w},
hqe(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.akH(a0),d=new A.en()
d.df(a1)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=e.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(e.aks(q).length>=2)u.push(q)}B.d.ec(u,d)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.M)(u),++r){n=u[r]
m=e.aks(n)
l=A.S(m)
k=new A.lR(m,0,5,l.k("lR<1>"))
k.vf(m,0,5,l.c)
j=k.dA(0)
if(new A.N(j,new C.fIK(),A.S(j).k("N<1,H>")).fF(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.M)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
w.push(new C.asJ("The children of "+m,"Tap them from the oldest to the youngest.",l,k))
if(w.length>=4)return w}u=x.S
g=A.U(u,x.Z)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
J.cc(g.c4(0,e.aEm(q),new C.fIL()),q)}if(g.a>=2&&w.length<4){t=g.$ti.k("cs<1>")
f=A.C(new A.cs(g,t),t.k("J.E"))
B.d.fc(f)
v=A.a([],v)
for(u=A.d1(f,0,A.dB(5,"count",u),A.S(f).c),t=u.$ti,u=new A.bS(u,u.gL(0),t.k("bS<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=g.h(0,s==null?t.a(s):s)
s.toString
m=J.cD(s)
m.ec(s,d)
v.push(m.gI(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.M)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
w.push(new C.asJ("Which generation comes first?","Tap them from the eldest generation to the youngest.",u,t))}return w},
frd(d){return B.d.amw(D.ay9,new C.fre(d))},
i3y(d){return A.pP(new A.Z(D.ay9,new C.fxo(d),x.av))},
bOI(d){return C.hzt(d)},
hzt(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bOI=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bOI)
case 7:r=f
q=B.a.i(d)
q=A.ew(J.q(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bOI,v)},
Mc(d,e){return C.hzq(d,e)},
hzq(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Mc=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Mc)
case 7:r=g
p=B.a.i(d)
o=A.ew(J.q(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aq("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Mc)
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
return A.i($async$Mc,v)},
bOH(d,e,f){return C.hzr(d,e,f)},
hzr(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bOH=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bOH)
case 7:r=h
q=B.a.i(d)
q=A.ew(J.q(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bOH,v)},
Md(d,e,f,g){return C.hzs(d,e,f,g)},
hzs(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Md=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Md)
case 7:r=i
p=B.a.i(d)
o=A.ew(J.q(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aq("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Md)
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
return A.i($async$Md,v)},
h3B(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
fTJ(d,e,f,g){return new C.ajA(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hxz(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aW(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cy)
while(u.C())w.push(J.k(u.gT(u)))
u=x.N
w=A.d1(w,0,A.dB(4,"count",x.S),u).dA(0)
B.d.v(w,A.c4(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.O(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.O(u)
return C.fTJ(w,v,B.o.E(u==null?20:u,5,60),t)},
h6A(d){var w,v,u,t,s,r,q=J.a4(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aW(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cy)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gT(q)
if(u.b(r))v.push(C.hxz(A.a2(r,t,s)))}return new C.LY(p,w,v)},
h0Y(d){var w,v=A.a([],x.c)
for(w=J.aW(d.z);w.C();)v.push(C.h6A(w.gT(w)))
return v},
le:function le(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bOr:function bOr(d){this.b=d
this.c=$},
bOs:function bOs(){},
bOt:function bOt(d){this.a=d},
fiy:function fiy(d){this.a=d},
fRL:function fRL(d){this.a=d},
fRM:function fRM(){},
fRN:function fRN(d){this.a=d},
fRO:function fRO(d,e){this.a=d
this.b=e},
fRP:function fRP(d,e,f){this.a=d
this.b=e
this.c=f},
fRK:function fRK(d,e){this.a=d
this.b=e},
fRQ:function fRQ(d){this.a=d},
fRR:function fRR(d){this.a=d},
fRS:function fRS(d,e,f){this.a=d
this.b=e
this.c=f},
fRJ:function fRJ(d,e){this.a=d
this.b=e},
fuN:function fuN(d,e){this.a=d
this.b=e},
aXe:function aXe(d,e,f){this.a=d
this.b=e
this.c=f},
fxl:function fxl(d){this.a=d},
asJ:function asJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIK:function fIK(){},
fIL:function fIL(){},
z6:function z6(d,e,f){this.a=d
this.b=e
this.c=f},
fre:function fre(d){this.a=d},
fxo:function fxo(d){this.a=d},
ajA:function ajA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bJg:function bJg(){},
LY:function LY(d,e,f){this.a=d
this.b=e
this.c=f},
Qq(d,e,f,g,h){var w,v,u=null,t=e==null,s=t?B.bz:f,r=A.m(18),q=A.a([],x.V)
if(!t)q.push(new A.ac(0,B.G,f.j(0.4),B.iV,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,t?B.bX:h,u,u,u,20),B.ab],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,t?B.bX:h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aB(u,A.p(u,A.B(v,B.m,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(s,u,u,r,q,u,B.n),u,u,u,u,B.N1,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
h7o(d,e,f,g,h,i,j){return new C.akI(i,h,d,j,e,f,g,null)},
a5m:function a5m(d,e){this.c=d
this.a=e},
bgK:function bgK(d){this.a=d},
FM:function FM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
des:function des(d){this.a=d},
a1_:function a1_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
V8:function V8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjn:function bjn(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
dTT:function dTT(d,e){this.a=d
this.b=e},
dTU:function dTU(d){this.a=d},
dTV:function dTV(d,e){this.a=d
this.b=e},
dTR:function dTR(d){this.a=d},
dTS:function dTS(d){this.a=d},
dTQ:function dTQ(d){this.a=d},
dTO:function dTO(d){this.a=d},
dTP:function dTP(d){this.a=d},
dTN:function dTN(d,e){this.a=d
this.b=e},
dTW:function dTW(d){this.a=d},
dTX:function dTX(d,e){this.a=d
this.b=e},
dTY:function dTY(d,e){this.a=d
this.b=e},
dTZ:function dTZ(d,e){this.a=d
this.b=e},
dU_:function dU_(d,e){this.a=d
this.b=e},
dU0:function dU0(d,e){this.a=d
this.b=e},
dU1:function dU1(d,e,f){this.a=d
this.b=e
this.c=f},
dU2:function dU2(d,e){this.a=d
this.b=e},
dU3:function dU3(d,e){this.a=d
this.b=e},
dU4:function dU4(d){this.a=d},
dU5:function dU5(d){this.a=d},
ZI:function ZI(d,e){this.a=d
this.b=e},
akI:function akI(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
akJ:function akJ(d){var _=this
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
bOF:function bOF(d){this.a=d},
bOG:function bOG(d){this.a=d},
bOE:function bOE(d){this.a=d},
bOv:function bOv(d){this.a=d},
bOw:function bOw(d){this.a=d},
bOu:function bOu(d){this.a=d},
bOB:function bOB(d,e,f){this.a=d
this.b=e
this.c=f},
bOC:function bOC(d){this.a=d},
bOy:function bOy(d,e){this.a=d
this.b=e},
bOz:function bOz(d,e,f){this.a=d
this.b=e
this.c=f},
bOD:function bOD(){},
bOA:function bOA(d,e){this.a=d
this.b=e},
bOx:function bOx(d){this.a=d},
akK:function akK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akL:function akL(d){var _=this
_.d=$
_.e=d
_.f=0
_.r=-1
_.x=_.w=0
_.z=_.y=!1
_.c=_.a=null},
bOL:function bOL(d,e){this.a=d
this.b=e},
bOM:function bOM(d,e){this.a=d
this.b=e},
bON:function bON(){},
bOO:function bOO(d){this.a=d},
bOJ:function bOJ(d,e){this.a=d
this.b=e},
bOK:function bOK(d){this.a=d},
azA:function azA(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.e=_.d=!1},
an0:function an0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aXd:function aXd(d){var _=this
_.e=_.d=$
_.x=_.w=_.r=_.f=0
_.Q=_.z=_.y=!1
_.as=d
_.c=_.a=null},
bYA:function bYA(d,e){this.a=d
this.b=e},
bYB:function bYB(d,e,f){this.a=d
this.b=e
this.c=f},
bYC:function bYC(d){this.a=d},
bYz:function bYz(d){this.a=d},
bYw:function bYw(d,e){this.a=d
this.b=e},
bYx:function bYx(){},
bYy:function bYy(d){this.a=d},
bYv:function bYv(d,e){this.a=d
this.b=e},
bYu:function bYu(d){this.a=d},
bdM:function bdM(d){this.a=d},
aki:function aki(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akj:function akj(d){var _=this
_.d=$
_.w=_.r=_.f=_.e=0
_.x=d
_.y=$
_.at=_.as=_.Q=_.z=!1
_.c=_.a=null},
bMh:function bMh(){},
bMq:function bMq(d,e){this.a=d
this.b=e},
bMr:function bMr(d,e){this.a=d
this.b=e},
bMp:function bMp(d){this.a=d},
bMm:function bMm(d,e){this.a=d
this.b=e},
bMn:function bMn(){},
bMo:function bMo(d){this.a=d},
bMi:function bMi(d){this.a=d},
bMj:function bMj(d){this.a=d},
bMk:function bMk(d,e){this.a=d
this.b=e},
bMl:function bMl(d){this.a=d},
SP:function SP(d,e){this.c=d
this.a=e},
akG:function akG(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bOf:function bOf(d){this.a=d},
bOg:function bOg(d){this.a=d},
bOq:function bOq(){},
bOp:function bOp(d,e,f){this.a=d
this.b=e
this.c=f},
bOk:function bOk(d,e){this.a=d
this.b=e},
bOj:function bOj(d,e){this.a=d
this.b=e},
bOl:function bOl(d){this.a=d},
bOm:function bOm(d,e){this.a=d
this.b=e},
bOn:function bOn(d,e){this.a=d
this.b=e},
bOi:function bOi(d,e){this.a=d
this.b=e},
bOo:function bOo(d,e,f){this.a=d
this.b=e
this.c=f},
bOh:function bOh(d,e){this.a=d
this.b=e},
i20(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahL(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.M)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.T(Date.now(),0,!1))
s=new C.fuj(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.S(a4),p=q.k("Z<1>"),q=q.k("cQ<1,n>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.M)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yk)m.push(l===D.vV?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cC(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cC(k)
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
if(e!=null&&w.ai(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.Z(a4,new C.fuh(u,f),p),new C.fui(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i21(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahL(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.M)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fuo(v,e)
q=new C.fum(v)
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
if(d!=null&&v.ai(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ai(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.de(new A.bc(p,d),d.k("J.E"))
n=A.C(d,A.a6(d).k("cp.E"))
B.d.fc(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.M)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.f5(l,new C.fun(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hOr(d,e,f,g){var w,v,u=C.i22(d,e)
if(u<=0||f.length<=u)return new A.aec(!1,D.CE,f)
if(g.q(0,e.a))return new A.aec(!1,D.CE,f)
w=A.S(f).c
v=A.d1(f,0,A.dB(u,"count",x.S),w).dA(0)
return new A.aec(!0,A.d1(f,u,null,w).dA(0),v)},
hOs(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahL(d3),d2=d1.length
if(d2===0)return D.had
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.M)(d1),++u){t=d1[u]
v.c4(0,t.a,new C.d9i(t))}s=new C.d9z(v)
d2=x.dy
r=A.U(w,d2)
q=new C.d9r(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d9q(r)
l=A.U(w,x.Z)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cc(l.c4(0,k,new C.d9j()),o)}h=new C.d9p(s)
g=new C.d9o(l,r)
p=v.$ti.k("bc<2>")
o=p.k("Z<J.E>")
f=A.C(new A.Z(new A.bc(v,p),new C.d9k(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.M)(f),++u){t=f[u]
a0=g.$2(t.a,A.aY(w))
if(a0>d){d=a0
e=t}}a1=A.aY(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.gR
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.d9x(new C.d9t(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gakD(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ey([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.pP(J.dJ(i==null?B.V:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.d9h(a2,new C.d9y(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.M)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("cs<1>")
d2=A.C(new A.cs(b4,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.M)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.FQ(o,new A.t(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.K7(c5.a,new A.t(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cs<1>")
d2=A.C(new A.cs(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.M)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.U)
a3.bQ(0,new C.d9l(c6,b4))
for(d2=new A.cJ(a4,a4.$ti.k("cJ<1,2>")).gaf(0),w=x.dN;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gT(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.t(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.f5(j,new C.d9m(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aV(o,new C.d9n())
c6.push(new C.aIW(new A.t(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bel(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hmd(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(d)
return w==null?null:w.b[1]},
hgt(d,e,f,g,h,i,j,k,l,m,n){return new C.ZV(k,f,j,e,l,n,m,d,g,h,i,null)},
aBS(d,e,f,g,h,i,j){return new C.bhY(i,d,e,f,j,h,g,null)},
apF:function apF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDp:function aDp(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dVv:function dVv(d){this.a=d},
dVu:function dVu(d){this.a=d},
dVx:function dVx(d,e){this.a=d
this.b=e},
dVy:function dVy(d,e){this.a=d
this.b=e},
dVz:function dVz(d){this.a=d},
dVt:function dVt(d,e){this.a=d
this.b=e},
dVw:function dVw(d){this.a=d},
dVB:function dVB(d){this.a=d},
dVA:function dVA(d,e){this.a=d
this.b=e},
apz:function apz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDm:function aDm(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dUW:function dUW(d){this.a=d},
dUU:function dUU(d){this.a=d},
dUV:function dUV(d){this.a=d},
dUX:function dUX(d,e){this.a=d
this.b=e},
dUR:function dUR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUi:function dUi(d){this.a=d},
dUj:function dUj(d,e){this.a=d
this.b=e},
dUA:function dUA(d){this.a=d},
dUy:function dUy(d){this.a=d},
dUz:function dUz(d,e){this.a=d
this.b=e},
dUB:function dUB(d){this.a=d},
dUC:function dUC(d,e){this.a=d
this.b=e},
dUQ:function dUQ(d,e){this.a=d
this.b=e},
dUx:function dUx(d){this.a=d},
dUw:function dUw(d){this.a=d},
dUv:function dUv(d,e){this.a=d
this.b=e},
dUN:function dUN(){},
dUO:function dUO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dUM:function dUM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dUG:function dUG(d){this.a=d},
dUH:function dUH(d,e,f){this.a=d
this.b=e
this.c=f},
dUF:function dUF(d,e){this.a=d
this.b=e},
dUI:function dUI(d,e){this.a=d
this.b=e},
dUD:function dUD(d,e){this.a=d
this.b=e},
dUE:function dUE(){},
dUJ:function dUJ(d,e){this.a=d
this.b=e},
dUK:function dUK(d){this.a=d},
dUL:function dUL(d,e){this.a=d
this.b=e},
dUP:function dUP(d,e){this.a=d
this.b=e},
dU6:function dU6(d,e){this.a=d
this.b=e},
dU7:function dU7(d,e){this.a=d
this.b=e},
dUZ:function dUZ(d,e,f){this.a=d
this.b=e
this.c=f},
dUT:function dUT(d,e,f){this.a=d
this.b=e
this.c=f},
dUS:function dUS(d){this.a=d},
dU8:function dU8(d){this.a=d},
dU9:function dU9(d){this.a=d},
dUa:function dUa(){},
dUb:function dUb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUf:function dUf(d,e){this.a=d
this.b=e},
dUe:function dUe(d,e){this.a=d
this.b=e},
dUd:function dUd(d){this.a=d},
dUg:function dUg(d,e){this.a=d
this.b=e},
dUc:function dUc(d){this.a=d},
dUY:function dUY(d){this.a=d},
dUs:function dUs(){},
dUt:function dUt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUr:function dUr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUn:function dUn(d,e,f){this.a=d
this.b=e
this.c=f},
dUm:function dUm(d,e,f){this.a=d
this.b=e
this.c=f},
dUk:function dUk(d,e){this.a=d
this.b=e},
dUo:function dUo(d){this.a=d},
dUp:function dUp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUl:function dUl(d,e){this.a=d
this.b=e},
dUq:function dUq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUu:function dUu(d,e){this.a=d
this.b=e},
dV5:function dV5(){},
dV6:function dV6(d,e){this.a=d
this.b=e},
dV7:function dV7(d){this.a=d},
dV8:function dV8(d,e){this.a=d
this.b=e},
dV1:function dV1(d){this.a=d},
dV_:function dV_(d,e){this.a=d
this.b=e},
dV2:function dV2(d,e){this.a=d
this.b=e},
dV3:function dV3(d,e){this.a=d
this.b=e},
dV4:function dV4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dV9:function dV9(d){this.a=d},
dV0:function dV0(d){this.a=d},
dUh:function dUh(d){this.a=d},
bej:function bej(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d9f:function d9f(d){this.a=d},
d9e:function d9e(d,e){this.a=d
this.b=e},
d9g:function d9g(d){this.a=d},
d9d:function d9d(d,e){this.a=d
this.b=e},
fuj:function fuj(d,e){this.a=d
this.b=e},
fuk:function fuk(d){this.a=d},
ful:function ful(){},
fuh:function fuh(d,e){this.a=d
this.b=e},
fui:function fui(){},
fuo:function fuo(d,e){this.a=d
this.b=e},
fup:function fup(d){this.a=d},
fuq:function fuq(){},
fum:function fum(d){this.a=d},
fun:function fun(d,e){this.a=d
this.b=e},
K7:function K7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
FQ:function FQ(d,e){this.a=d
this.b=e},
bel:function bel(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d9i:function d9i(d){this.a=d},
d9z:function d9z(d){this.a=d},
d9r:function d9r(d){this.a=d},
d9s:function d9s(){},
d9q:function d9q(d){this.a=d},
d9j:function d9j(){},
d9p:function d9p(d){this.a=d},
d9o:function d9o(d,e){this.a=d
this.b=e},
d9k:function d9k(d){this.a=d},
d9t:function d9t(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d9u:function d9u(d){this.a=d},
d9v:function d9v(d){this.a=d},
d9w:function d9w(){},
d9x:function d9x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d9y:function d9y(){},
d9h:function d9h(d,e,f,g,h,i,j,k,l,m){var _=this
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
d9l:function d9l(d,e){this.a=d
this.b=e},
d9m:function d9m(d){this.a=d},
d9n:function d9n(){},
aIW:function aIW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bem:function bem(d,e){this.b=d
this.a=e},
d9A:function d9A(){},
d9B:function d9B(d){this.a=d},
d9C:function d9C(d){this.a=d},
d9D:function d9D(){},
bhZ:function bhZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdq:function bdq(d,e){this.b=d
this.a=e},
bvC:function bvC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fbf:function fbf(d){this.a=d},
blb:function blb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eMZ:function eMZ(d){this.a=d},
eMY:function eMY(d,e){this.a=d
this.b=e},
ZV:function ZV(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aBQ:function aBQ(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dpo:function dpo(d,e){this.a=d
this.b=e},
dpn:function dpn(d){this.a=d},
dpl:function dpl(d){this.a=d},
dpm:function dpm(d){this.a=d},
dpx:function dpx(d){this.a=d},
dpy:function dpy(d){this.a=d},
dpw:function dpw(d,e){this.a=d
this.b=e},
dpz:function dpz(){},
dpC:function dpC(d){this.a=d},
dpv:function dpv(d,e){this.a=d
this.b=e},
dpB:function dpB(){},
dpD:function dpD(d){this.a=d},
dpu:function dpu(d,e){this.a=d
this.b=e},
dpE:function dpE(d){this.a=d},
dpt:function dpt(d){this.a=d},
dpF:function dpF(d){this.a=d},
dps:function dps(d){this.a=d},
dpG:function dpG(d){this.a=d},
dpr:function dpr(d){this.a=d},
dpH:function dpH(d){this.a=d},
dpq:function dpq(d){this.a=d},
dpI:function dpI(d){this.a=d},
dpp:function dpp(d,e){this.a=d
this.b=e},
dpA:function dpA(d){this.a=d},
ad3:function ad3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhY:function bhY(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ad2:function ad2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhX:function bhX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dpJ:function dpJ(d){this.a=d},
dpK:function dpK(d,e){this.a=d
this.b=e},
aBR:function aBR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHY:function aHY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ad4:function ad4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dpT:function dpT(d){this.a=d},
FL:function FL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hbk(d){var w=d.S,v=x.N
return w.jb(w,new C.caF(),v,v)},
hFZ(d){var w=d.by
if(w>=0)return w
return 5},
hbm(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hbk(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
hbl(d,e){var w=C.hbm(d,e)
if(w!=null&&w.cd(new A.T(Date.now(),0,!1)))return!0
return!1},
hG_(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hbk(d),w,w)
u=C.hbm(d,e)
t=u!=null&&u.cd(new A.T(Date.now(),0,!1))?u:new A.T(Date.now(),0,!1)
v.n(0,s,t.bS(A.dE(30,0,0,0,0,0).a).a7().ad())
d.S=v},
b__(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b__=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.ln(t,B.Iq),$async$b__)
case 3:if(l){u=!0
w=1
break}u=A.kX(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Iq,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b__,v)},
caF:function caF(){},
hFX(){var w,v=$.pB(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"FT"+B.d.hu(u)},
IB(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$IB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$IB)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bK),$async$IB)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
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
return A.i($async$IB,v)},
a76(d){return C.hFY(d)},
hFY(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a76=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$a76)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hI("ngmy_family_tree_backup_codes_v1",A.G(["codes",d,"savedAt",new A.T(Date.now(),0,!1).a7().ad()],x.N,x.z),!1,!1,B.cG,null),$async$a76)
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
return A.i($async$a76,v)},
caE(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$caE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.IB(),$async$caE)
case 3:t=m.jR(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
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
return A.i($async$caE,v)},
Ny(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Ny=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.caE(d),$async$Ny)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.IB(),$async$Ny)
case 6:s=f
r=J.a4(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dO(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.T(Date.now(),0,!1).a7().ad())
r.n(s,t,o)
w=9
return A.b(C.a76(s),$async$Ny)
case 9:case 8:u=t
w=1
break
case 5:n=C.hFX()
w=10
return A.b(C.IB(),$async$Ny)
case 10:s=f
J.aG(s,n,A.G(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.T(Date.now(),0,!1).a7().ad(),"updatedAt",new A.T(Date.now(),0,!1).a7().ad()],x.N,x.K))
w=11
return A.b(C.a76(s),$async$Ny)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ny,v)},
aZZ(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.IB(),$async$aZZ)
case 3:t=f
for(s=J.dm(t),r=s.gdR(t),r=r.dA(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.M)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a76(t),$async$aZZ)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZZ,v)},
a77(d,e,f){var w=0,v=A.j(x.H),u
var $async$a77=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.apE(d,e),$async$a77)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Ny(d),$async$a77)
case 7:w=4
break
case 5:w=8
return A.b(C.aZZ(d),$async$a77)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a77,v)},
apy(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$apy=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.apE(f,e),$async$apy)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c6(),$async$apy)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.IB(),$async$apy)
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
return A.i($async$apy,v)},
aZY(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c6(),$async$aZY)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.IB(),$async$aZY)
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
return A.i($async$aZY,v)},
hG0(){var w,v=$.pB(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"FT"+B.d.hu(u)},
apB(d,e){var w=0,v=A.j(x.fO),u,t,s,r,q,p
var $async$apB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$apB)
case 3:if(!g){u=null
w=1
break}t=C.hG0()
w=4
return A.b(A.V9(),$async$apB)
case 4:s=g
r=B.dN.aM(B.S.ao(d.eW(),null))
r=B.cJ.gct().aM(r)
q=e?999:2
J.aG(s,t,A.G(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.T(Date.now(),0,!1).a7().ad()],x.N,x.K))
w=5
return A.b(A.a78(s),$async$apB)
case 5:p=e?999:2
u=new A.a05("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apB,v)},
apA(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$apA=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.V9(),$async$apA)
case 3:p=a0
o=J.a4(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a4(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.k.O(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aZY(J.k(l==null?"":l),j),$async$apA)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cf.cz(0,B.cF.aM(t))
s=C.hbn(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
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
l.n(0,"lastUsedAt",new A.T(Date.now(),0,!1).a7().ad())
o.n(p,g,l)}w=5
return A.b(A.a78(p),$async$apA)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apA,v)},
hbn(d){var w,v,u,t,s=null
try{w=B.S.aN(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hG2(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
fVX(d){var w=0,v=A.j(x.m),u,t,s
var $async$fVX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.apA(t[1])
w=1
break}u=null
w=1
break}u=C.hbn(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVX,v)},
hG2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.da(v,x.f)
u=A.cF(u,new C.caH(),u.$ti.k("J.E"),x.k)
t=A.a6(u).k("Z<J.E>")
s=A.C(new A.Z(u,new C.caI(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.T(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jR(p),t=t.gaf(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.da(l,u)
n=A.cF(n,new C.caJ(),n.$ti.k("J.E"),o)
k=A.a6(n).k("Z<J.E>")
j=A.C(new A.Z(n,new C.caK(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.apC(h,w,s,r,q)},
apE(d,e){var w=0,v=A.j(x.y),u,t
var $async$apE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Np(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AQ(d),$async$apE)
case 3:u=t.cK(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apE,v)},
caQ(d){var w=0,v=A.j(x.bC),u,t,s
var $async$caQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AQ(d),$async$caQ)
case 3:t=s.b6(f,new C.caR(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aV(t,new C.caS())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caQ,v)},
Va(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Va=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.apE(e,d),$async$Va)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Ny(e),$async$Va)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AQ(e),$async$Va)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dJ(r,new C.caO(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a4(r)
if(t.gam(r)){u=null
w=1
break}t=t.dD(r,new C.caP(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KT(e,o),$async$Va)
case 14:n=i
if(J.cK(n))q.n(0,o,n)
case 12:r.length===t||(0,A.M)(r),++p
w=11
break
case 13:u=new C.apC(s,B.a.i(e.toLowerCase()),r,new A.T(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Va,v)},
b_2(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b_2=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Va(d,e,f,g),$async$b_2)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aN(t,s,"_")
r=q.a
u=A.Gy(A.K3(q.eW(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_2,v)},
b_1(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b_1=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Va(d,e,f,g),$async$b_1)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.apB(r,f),$async$b_1)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFZ(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b_1,v)},
Vb(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vb=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fVX(a0),$async$Vb)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.apy(g.a,d,e,f,s,r),$async$Vb)
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
return A.b(C.bAQ(e,j),$async$Vb)
case 12:case 11:w=13
return A.b(C.ahw(e,j,s),$async$Vb)
case 13:h=n.h(0,i)
w=h!=null&&J.cK(h)?14:15
break
case 14:w=16
return A.b(C.B0(e,i,h),$async$Vb)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.M)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.boN(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Vb,v)},
apC:function apC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
caM:function caM(){},
caN:function caN(){},
caL:function caL(){},
caH:function caH(){},
caI:function caI(){},
caJ:function caJ(){},
caK:function caK(){},
caR:function caR(){},
caS:function caS(){},
caO:function caO(d){this.a=d},
caP:function caP(d){this.a=d},
h3v(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hE(d,new C.apD(w,e,g,i,f,h,null),!0,null,x.H)},
d9c(d,e,f,g,h,i,j,k){return new C.bei(i,e,k,j,g,f,h,d,null)},
apD:function apD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aDo:function aDo(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dVi:function dVi(d){this.a=d},
dVj:function dVj(d,e,f){this.a=d
this.b=e
this.c=f},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVo:function dVo(d){this.a=d},
dVf:function dVf(d){this.a=d},
dVg:function dVg(d,e){this.a=d
this.b=e},
dVh:function dVh(d,e){this.a=d
this.b=e},
dVm:function dVm(d){this.a=d},
dVl:function dVl(d,e){this.a=d
this.b=e},
dVk:function dVk(){},
dVq:function dVq(d){this.a=d},
dVr:function dVr(d,e){this.a=d
this.b=e},
dVp:function dVp(d,e){this.a=d
this.b=e},
d9E:function d9E(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bek:function bek(d,e,f){this.d=d
this.e=e
this.a=f},
ack:function ack(d,e,f){this.c=d
this.d=e
this.a=f},
bei:function bei(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
ben:function ben(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_f:function a_f(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDn:function aDn(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dVa:function dVa(d,e){this.a=d
this.b=e},
dVb:function dVb(d){this.a=d},
dVc:function dVc(d){this.a=d},
dVd:function dVd(d){this.a=d},
dVe:function dVe(d){this.a=d},
a_g:function a_g(d){this.a=d},
bjo:function bjo(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dVs:function dVs(d,e){this.a=d
this.b=e},
aYx(d,e){return new C.aYw(d,e,null)},
aYw:function aYw(d,e,f){this.c=d
this.d=e
this.a=f},
i4u(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
ibS(d){return A.bT(B.K,null,new C.fKB(new C.tT(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hdg(d,e){return new C.asx(e,d,null)},
aQ6(d,e,f,g,h,i,j){var w=C.i4u(i)
if(w!=null)return A.bx(e,new A.a8(j,f,new C.a6b(w,!0,null),null),B.aq)
return L.aPt(e,B.bV,f,g,h,i,j)},
lG:function lG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6b:function a6b(d,e,f){this.c=d
this.d=e
this.a=f},
bj5:function bj5(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b4$=e
_.c=_.a=null},
dHa:function dHa(d){this.a=d},
dHb:function dHb(){},
dHc:function dHc(d,e){this.a=d
this.b=e},
bj4:function bj4(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fKB:function fKB(d){this.a=d},
fKA:function fKA(d,e){this.a=d
this.b=e},
fKz:function fKz(d,e){this.a=d
this.b=e},
fKy:function fKy(d,e){this.a=d
this.b=e},
asx:function asx(d,e,f){this.c=d
this.d=e
this.a=f},
cil:function cil(d,e){this.a=d
this.b=e},
aLg:function aLg(){},
ibD(d){var w=null
return A.cf(w,w,!0,w,new C.fJY(),d,w,!0,!0,x.e2)},
icN(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.fRr(h,g,f,e),d,w,!0,!0,x.N)},
ibF(d,e){var w=null
return A.cf(w,w,!0,w,new C.fK2(e),d,w,!0,!0,x.dY)},
ibE(d){var w=null
return A.cf(w,w,!0,w,new C.fK1(),d,w,!0,!0,x.c5)},
aT4:function aT4(d,e){this.a=d
this.b=e},
aT3:function aT3(d){this.a=d},
aR2:function aR2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJY:function fJY(){},
fRr:function fRr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fK2:function fK2(d){this.a=d},
fK1:function fK1(){},
YT:function YT(d,e){this.c=d
this.a=e},
ayE:function ayE(){var _=this
_.d=$
_.c=_.a=_.e=null},
d0X:function d0X(d){this.a=d},
d0Y:function d0Y(d){this.a=d},
d0W:function d0W(d,e){this.a=d
this.b=e},
d0Z:function d0Z(d){this.a=d},
d1_:function d1_(d){this.a=d},
YS:function YS(d){this.a=d},
ayD:function ayD(){this.d=$
this.c=this.a=null},
d0T:function d0T(d){this.a=d},
d0U:function d0U(d){this.a=d},
d0V:function d0V(d){this.a=d},
Yq:function Yq(d){this.a=d},
axn:function axn(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
czx:function czx(){},
czD:function czD(d){this.a=d},
czE:function czE(d){this.a=d},
czF:function czF(d){this.a=d},
czC:function czC(){},
czG:function czG(d){this.a=d},
czH:function czH(d){this.a=d},
czB:function czB(){},
czI:function czI(d,e){this.a=d
this.b=e},
czA:function czA(d,e){this.a=d
this.b=e},
czy:function czy(d,e){this.a=d
this.b=e},
czJ:function czJ(d){this.a=d},
czz:function czz(){},
czK:function czK(d){this.a=d},
a11:function a11(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bvs:function bvs(){this.d=$
this.c=this.a=null},
faA:function faA(d,e){this.a=d
this.b=e},
faB:function faB(d){this.a=d},
faC:function faC(d,e){this.a=d
this.b=e},
abp:function abp(d,e){this.a=d
this.b=e},
FB:function FB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bvq:function bvq(d,e){var _=this
_.d=$
_.bx$=d
_.ab$=e
_.c=_.a=null},
fay:function fay(d,e){this.a=d
this.b=e},
axg:function axg(d,e){this.c=d
this.a=e},
bvr:function bvr(d,e){var _=this
_.d=$
_.bx$=d
_.ab$=e
_.c=_.a=null},
faz:function faz(d){this.a=d},
bvp:function bvp(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aNi:function aNi(){},
aNj:function aNj(){},
bCL(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bm(u),s=B.o.E(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oO(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fIx(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cZ(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cZ(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cZ(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aZ(B.o.u(s),2,"0")
n.push(A.cZ(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.XQ(A.cZ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aPJ(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aPJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hT().kV(85,1280,B.eJ),$async$aPJ)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fi(),$async$aPJ)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hdf()
w=9
return A.b(C.cik(q,r),$async$aPJ)
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
return A.i($async$aPJ,v)},
aQ4(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aQ4=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cih(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cF.aM(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.W().LF(p,!0,null,i).d9(0,B.fP),$async$aQ4)
case 9:n=a1
w=10
return A.b(n.lF(),$async$aQ4)
case 10:m=a1
w=11
return A.b(J.a2J(m).hv(B.h5),$async$aQ4)
case 11:l=a1
J.a2J(m).t()
if(l==null){w=8
break}i=J.eV(B.dE.gaQ(l))
k="data:image/png;base64,"+B.cJ.gct().aM(i)
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
return A.i($async$aQ4,v)},
fIx:function fIx(){},
tT:function tT(d){this.a=d},
asw:function asw(d,e,f){this.c=d
this.d=e
this.a=f},
aEQ:function aEQ(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eK8:function eK8(d,e){this.a=d
this.b=e},
eK_:function eK_(d){this.a=d},
eK0:function eK0(d){this.a=d},
eK6:function eK6(d,e){this.a=d
this.b=e},
eK5:function eK5(d,e){this.a=d
this.b=e},
eK2:function eK2(d,e){this.a=d
this.b=e},
eK1:function eK1(d,e){this.a=d
this.b=e},
eK3:function eK3(d){this.a=d},
eK4:function eK4(d,e){this.a=d
this.b=e},
eK7:function eK7(d,e){this.a=d
this.b=e},
eJV:function eJV(d,e){this.a=d
this.b=e},
eJZ:function eJZ(d){this.a=d},
eJY:function eJY(d,e){this.a=d
this.b=e},
eJX:function eJX(d){this.a=d},
eK9:function eK9(d,e){this.a=d
this.b=e},
eKa:function eKa(d,e){this.a=d
this.b=e},
eJW:function eJW(d,e){this.a=d
this.b=e},
hq2(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.G(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.T(Date.now(),0,!1).a7().ad(),"project",v],x.N,x.z)},
fIy(d,e,f){var w=0,v=A.j(x.N),u
var $async$fIy=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.S.ao(C.hq2(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fIy,v)},
bCN(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bCN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fIy(!0,d,e),$async$bCN)
case 4:w=3
return A.b(r.asu(g,d,e.a),$async$bCN)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dN.aM(B.S.ao(C.hq2(d,e,null),null))
u="NGMY_WS:"+B.kq.gct().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCN,v)},
hhR(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h39(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.f1(s,t))return!0
if(J.d2(s,"{"))try{w=B.S.aN(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i9x(d){var w,v,u,t=C.hhR(d)
if(t==null)return null
if(C.h39(t))return t
w=B.a.cD(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.h39(v))return v}u=B.a.cD(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.h39(v))return v}return null},
h38(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d2(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d2(q,"NGMY_WS:")){v=B.cf.cz(0,B.cF.aM(J.nd(q,8)))
w=t.a(B.S.aN(0,v,r))}else w=t.a(B.S.aN(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fYA(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bCM(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bCM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.ast(t[1]),$async$bCM)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h38(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h38(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCM,v)},
h37(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lo(w,v,d.c,d.d,new A.T(Date.now(),0,!1))},
bCj(){var w=0,v=A.j(x.o),u,t
var $async$bCj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GJ(),$async$bCj)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h38(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCj,v)},
hr_(d,e,f,g){return A.bT(B.K,null,new C.fRh(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fRh:function fRh(d,e,f){this.a=d
this.b=e
this.c=f},
adp:function adp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eKc:function eKc(d,e){this.a=d
this.b=e},
eKd:function eKd(d,e){this.a=d
this.b=e},
eKe:function eKe(d,e){this.a=d
this.b=e},
eKf:function eKf(d,e){this.a=d
this.b=e},
eKb:function eKb(d){this.a=d},
asq:function asq(d,e,f){this.c=d
this.d=e
this.a=f},
bkH:function bkH(){var _=this
_.c=_.a=_.e=_.d=null},
eJQ:function eJQ(d,e){this.a=d
this.b=e},
eJR:function eJR(d){this.a=d},
eJS:function eJS(d){this.a=d},
asv:function asv(d){this.a=d},
aEP:function aEP(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eJU:function eJU(d){this.a=d},
eJT:function eJT(d){this.a=d},
hJe(d,e,f,g,h){return new C.Oa(h,g,d,e,f,null)},
aJD:function aJD(d,e){this.a=d
this.b=e},
Oa:function Oa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aER:function aER(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eKC:function eKC(){},
eKy:function eKy(d,e){this.a=d
this.b=e},
eKz:function eKz(d){this.a=d},
eKj:function eKj(d){this.a=d},
eKh:function eKh(d){this.a=d},
eKi:function eKi(d){this.a=d},
eKs:function eKs(d,e){this.a=d
this.b=e},
eKp:function eKp(d,e){this.a=d
this.b=e},
eKq:function eKq(d,e){this.a=d
this.b=e},
eKr:function eKr(d,e,f){this.a=d
this.b=e
this.c=f},
eKn:function eKn(d,e,f){this.a=d
this.b=e
this.c=f},
eKl:function eKl(d){this.a=d},
eKm:function eKm(d){this.a=d},
eKo:function eKo(d){this.a=d},
eKF:function eKF(d){this.a=d},
eKE:function eKE(d){this.a=d},
eKG:function eKG(d){this.a=d},
eKD:function eKD(d){this.a=d},
eKg:function eKg(d){this.a=d},
eKk:function eKk(d,e){this.a=d
this.b=e},
eKB:function eKB(d,e){this.a=d
this.b=e},
eKA:function eKA(d,e){this.a=d
this.b=e},
eKv:function eKv(d){this.a=d},
eKw:function eKw(d){this.a=d},
eKx:function eKx(d,e){this.a=d
this.b=e},
eKu:function eKu(d,e){this.a=d
this.b=e},
eKt:function eKt(d,e,f){this.a=d
this.b=e
this.c=f},
bx8:function bx8(){},
AH(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aN(v,w,"_")},
afW(d,e,f){return C.hYY(d,e,f)},
hYY(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afW=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$afW)
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
return A.i($async$afW,v)},
afV(d,e){return C.hYX(d,e)},
hYX(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afV=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afV)
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
return A.i($async$afV,v)},
hXI(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.SO(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bzQ(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bzQ=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b2f(q),$async$bzQ)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aQ4(q,!1),$async$bzQ)
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
return A.i($async$bzQ,v)},
hwU(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.r5(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.r5(p,J.k(u==null?"":u),1,o,q)},
fYA(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.da(s,x.f)
w=A.cF(w,new C.cyV(),w.$ti.k("J.E"),x.Q)
v=A.a6(w).k("Z<J.E>")
r=A.C(new A.Z(w,new C.cyW(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lo(w,v,u,r,t==null?new A.T(Date.now(),0,!1):t)},
i1X(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.vV
case"female":case"f":return D.oV
default:return D.yk}},
hmJ(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h7p(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i1X(v==null?j:J.k(v))
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
m=m==null?j:B.k.O(m)
if(m==null)m=1
l=J.A(d.h(0,"hidden"),!0)
k=A.aK(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.O(k)
return new C.i1(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i1Z(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Nj
case"viewer":return D.kD
default:return D.u0}},
i2_(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gz(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aOQ(d,e){return B.a.i(e.toLowerCase())===C.Gz(d,e)&&d.y!==D.kD},
u4(d,e){var w,v=d.y
if(v===D.kD)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gz(d,e))return!0
if(v===D.Nj)return!0
v=d.e
return new A.N(v,A.h3e(),A.S(v).k("N<1,n>")).q(0,w)},
i1o(d){return J.dJ(d,new C.ftj()).gL(0)},
fS0(d){var w=0,v=A.j(x.y),u,t
var $async$fS0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AQ(d),$async$fS0)
case 3:u=t.r0(f,new C.fS1(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fS0,v)},
bAQ(d,e){var w=0,v=A.j(x.H),u,t
var $async$bAQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AQ(d),$async$bAQ)
case 3:t=g
if(J.r0(t,new C.frc(e))){w=1
break}if(C.i1o(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bAQ,v)},
akN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.da(h,x.f)
w=A.cF(w,new C.bOP(),w.$ti.k("J.E"),x.P)
v=A.a6(w).k("Z<J.E>")
g=A.C(new A.Z(w,new C.bOQ(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b6(u,new C.bOR(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.A(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bi(J.k(q==null?"":q))
if(q==null)q=new A.T(Date.now(),0,!1)
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.k.O(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.i1Z(n==null?null:J.k(n))
m=A.a([],x.X)
f=J.aW(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cy)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gT(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kF(w,v,s,!r,t,g,q,p,o,n,m)},
hmS(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aN(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CV(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$CV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ry(d),$async$CV)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$CV)
case 4:t=f
w=5
return A.b(t.a6d(0),$async$CV)
case 5:w=6
return A.b(C.fi9(t,l),$async$CV)
case 6:s=f
if(J.cK(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a4(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hir(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oN(l,n),$async$CV)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hir(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oN(l,n),$async$CV)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CV,v)},
fi9(d,e){return C.hVa(d,e)},
hVa(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fi9=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a4(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AH(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.S.aN(0,a5,null)
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
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AH(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.S.aN(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fYA(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AH(a9)+"_"+n))
i=C.hXI(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b2f(h),$async$fi9)
case 17:g=b1
if(g!=null){i=i.SO(g)
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
case 8:J.RJ(q,new C.fia())
if(p&&J.ad(q)!==0)C.oN(a9,q)
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
return A.i($async$fi9,v)},
bBf(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bBf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ry(d),$async$bBf)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CV(r),$async$bBf)
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
return A.i($async$bBf,v)},
hir(d){var w,v,u,t
try{w=B.S.aN(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.da(w,x.f)
v=A.cF(v,new C.fe1(),v.$ti.k("J.E"),x.i)
u=A.a6(v).k("Z<J.E>")
v=A.C(new A.Z(v,new C.fe2(),u),u.k("J.E"))
B.d.aV(v,new C.fe3())
return v}catch(t){v=A.a([],x.D)
return v}},
oN(d,e){return C.ibt(d,e)},
ibt(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oN=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Ry(b2),$async$oN)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oN)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AH(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.S.aN(0,p,null)),new C.fJP(),a2).fF(0)
a2=J.b6(b3,new C.fJQ(),a2).c0(0,new C.fJR())
n=A.de(a2,a2.$ti.k("J.E"))
a2=o,a2=A.em(a2,a2.r,A.a6(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f1(n,m)?17:18
break
case 17:a5=C.AH(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8q(l),$async$oN)
case 19:t=21
a5=C.AH(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.S.aN(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a8q(a5==null?null:J.k(a5)),$async$oN)
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
return A.b(C.afV(r,"ngmy_worksheet_item_v3_"+C.AH(a8)+"_"+m),$async$oN)
case 29:w=30
return A.b(C.afV(r,"ngmy_worksheet_thumb_v3_"+C.AH(a8)+"_"+m),$async$oN)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gaf(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bzQ(h),$async$oN)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afW(r,"ngmy_worksheet_thumb_v3_"+C.AH(a8)+"_"+a4,f),$async$oN)
case 40:g=i.SO(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afV(r,"ngmy_worksheet_thumb_v3_"+C.AH(a8)+"_"+a4),$async$oN)
case 41:g=i.SO(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afV(r,"ngmy_worksheet_thumb_v3_"+C.AH(a8)+"_"+a4),$async$oN)
case 42:case 34:a4=i.a
w=43
return A.b(C.afW(r,"ngmy_worksheet_item_v3_"+C.AH(a8)+"_"+a4,B.S.ao(g.ag(),null)),$async$oN)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.cc(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afW(r,"ngmy_worksheets_index_v3_"+C.AH(a8),B.S.ao(q,null)),$async$oN)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eU(b3,new C.fJS(q))
a4=a3.$ti.k("cQ<1,a7<n,@>>")
a7=A.C(new A.cQ(a3,new C.fJT(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afW(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.S.ao(a0,null)),$async$oN)
case 45:w=46
return A.b(J.hw_(r),$async$oN)
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
return A.i($async$oN,v)},
Lj(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Lj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CV(d),$async$Lj)
case 3:t=g
s=J.cD(t)
r=s.bg(t,new C.fS_(e))
if(r===-1)s.c9(t,0,e)
else s.n(t,r,e)
u=C.oN(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lj,v)},
bB3(d,e){var w=0,v=A.j(x.H),u
var $async$bB3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CV(d),$async$bB3)
case 2:u=g
J.nx(u,new C.ftN(e))
w=3
return A.b(C.oN(d,u),$async$bB3)
case 3:return A.h(null,v)}})
return A.i($async$bB3,v)},
GB(d){var w=0,v=A.j(x.g),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$GB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$GB)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.S.aN(0,i,null)
if(x.j.b(t)){j=J.da(t,x.f)
j=A.cF(j,new C.fwB(),j.$ti.k("J.E"),x.k)
s=A.a6(j).k("Z<J.E>")
r=A.C(new A.Z(j,new C.fwC(),s),s.k("J.E"))
B.d.aV(r,new C.fwD())
k=r}}catch(h){}w=4
return A.b(C.feM(d),$async$GB)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hVx(k,p,d)
j=A.S(o)
s=j.k("N<1,a7<n,@>>")
s=A.C(new A.N(o,new C.fwE(),s),s.k("ak.E"))
n=B.S.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.QL(d,o),$async$GB)
case 7:case 6:j=j.k("Z<1>")
m=A.C(new A.Z(o,new C.fwF(d),j),j.k("J.E"))
if(m.length!==0)C.aOB(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$GB,v)},
fJB(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fJB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QL(d,e),$async$fJB)
case 3:t=J.dJ(e,new C.fJC(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aOB(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJB,v)},
a2C(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2C=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a2C)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.S.aN(0,l,null)
if(x.j.b(u)){m=J.da(u,x.f)
m=A.cF(m,new C.fRV(),m.$ti.k("J.E"),x.k)
t=A.a6(m).k("Z<J.E>")
s=A.C(new A.Z(m,new C.fRW(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qo(o,new C.fRX(e))
if(B.a.i(e.x).length===0&&C.u4(e,d)){m=B.a.i(d.toLowerCase())
p=e.aE2(e.y===D.kD?D.kD:D.u0,m)}else p=e
if(q===-1)J.pE(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.QL(d,o),$async$a2C)
case 3:w=C.u4(p,d)?4:5
break
case 4:w=6
return A.b(C.aOA(C.Gz(p,d),p),$async$a2C)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2C,v)},
aOM(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.GB(d),$async$aOM)
case 2:u=g
t=J.cD(u)
s=A.pP(t.eU(u,new C.ftu(e)))
t.bt(u,new C.ftv(e))
w=3
return A.b(C.QL(d,u),$async$aOM)
case 3:w=s!=null&&C.aOQ(s,d)?4:5
break
case 4:w=6
return A.b(C.fe5(e),$async$aOM)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOM,v)},
ahL(d){var w=d.f,v=A.S(w).k("Z<1>")
w=A.C(new A.Z(w,new C.fS5(),v),v.k("J.E"))
return w},
h0M(d,e){var w,v=d.f,u=A.pP(new A.Z(v,new C.fsZ(e),A.S(v).k("Z<1>")))
v=C.ahL(d)
w=A.S(v).k("Z<1>")
v=A.C(new A.Z(v,new C.ft_(e,u),w),w.k("J.E"))
B.d.aV(v,new C.ft0())
return v},
i22(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hr3(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h0M(d,u),new C.fRs(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i3z(d,e){var w
if(e==null||e.length===0)return 1
w=C.h0M(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fxp(),A.S(w).k("N<1,H>")).f9(0,B.Az)+1},
ibm(d){var w,v=C.ahL(d)
if(v.length===0)return null
w=new A.Z(v,new C.fJv(),A.S(v).k("Z<1>"))
if(!w.gam(0))return w.gI(0)
return B.d.gI(v)},
i1Y(d){return A.G(["id",d.a,"name",d.b,"gender",C.hmJ(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i3u(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aY(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.M)(a0),++u){q=a0[u]
p=q.a
r.M(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yk?n:q.c
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
d=q.aDY(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.M)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cKd(a1,w,a3.d,a2.y,s,a0,v)},
AQ(d){var w=0,v=A.j(x.g),u,t,s,r,q,p,o
var $async$AQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$AQ)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.S.aN(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.da(t,x.f)
p=A.cF(p,new C.fwy(),p.$ti.k("J.E"),x.k)
s=A.a6(p).k("Z<J.E>")
p=A.C(new A.Z(p,new C.fwz(),s),s.k("J.E"))
B.d.aV(p,new C.fwA())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AQ,v)},
ahw(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahw=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.u0:D.kD
a7=C.Gz(b2,b3)
w=2
return A.b(C.AQ(b1),$async$ahw)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bg(a8,new C.fJq(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bAQ(b1,b2),$async$ahw)
case 5:case 4:if(b0===-1){u=b2.aE2(a6,a7)
a9.c9(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.yk?i:l.c
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
s.n(0,m,l.aDY(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.u0:D.kD
u=t.cKf(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.QL(b1,a8),$async$ahw)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aOA(B.a.i(b3.toLowerCase()),u),$async$ahw)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahw,v)},
hiQ(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.T(Date.now(),0,!1).a7().ad(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.S(m).k("N<1,a7<n,@>>"),k=A.C(new A.N(m,C.hqb(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.G(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.G(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a7().ad(),"updatedAt",o],r,x.K),"createdAt",s.a7().ad(),"updatedAt",o],r,x.z)},
hiR(d,e){var w=new A.T(Date.now(),0,!1).a7().ad(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.S(u).k("N<1,a7<n,@>>")
u=A.C(new A.N(u,C.hqb(),t),t.k("ak.E"))
return A.G(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a7().ad(),"updatedAt",w],x.N,x.z)},
hT6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a4(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akN(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.h3e(),A.S(j).k("N<1,n>")).c0(0,new C.fez())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.u0
else s=B.d.q(t,u)?D.Nj:D.kD
return w.aE2(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akN(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.da(q,h)
h=A.cF(h,new C.feA(),h.$ti.k("J.E"),x.P)
p=A.a6(h).k("Z<J.E>")
o=A.C(new A.Z(h,new C.feB(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.feC(),x.N).c0(0,new C.feD())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.u0
else s=B.d.q(t,u)?D.Nj:D.kD
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.T(Date.now(),0,!1)
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.O(j)
if(j==null)j=0
return new C.kF(h,r,p,!m,t,o,l,j,v,s,B.c4)},
feM(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$feM=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.feQ()
h=x.N
g=x.z
w=7
return A.b(A.iP(A.a([A.lu("family_trees","*",null,A.G(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.lu("family_trees","*",A.G(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.lu("family_trees","*",null,A.G(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.h),$async$feM)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h4(l,o)
J.h4(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.M)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a6(l).k("bc<2>")
h=A.cF(new A.bc(l,h),new C.feN(a0),h.k("J.E"),x.k)
l=A.a6(h).k("Z<J.E>")
l=A.C(new A.Z(h,new C.feO(),l),l.k("J.E"))
B.d.aV(l,new C.feP())
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
return A.i($async$feM,v)},
hVx(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a4(e)
if(j.gam(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dD(e,new C.fiR(),v).c0(0,new C.fiS())
t=A.de(u,u.$ti.k("J.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.M)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gz(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kD){m=q.e
m=!new A.N(m,A.h3e(),A.S(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i3u(l,v)
o=C.Gz(k,w)
p=v.d
s.n(0,u,o===w?k.bc5(p,D.u0):k.bc5(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.aV(j,new C.fiT())
return j},
QL(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$QL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$QL)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fly(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.S.ao(s,null)),$async$QL)
case 3:return A.h(null,v)}})
return A.i($async$QL,v)},
aOA(d,e){return C.i_L(d,e)},
i_L(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aOA=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.X
w=7
return A.b(A.m0("family_trees",A.a([C.hiQ(e,d)],p),null,B.cG),$async$aOA)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m0("family_trees",A.a([C.hiR(e,d)],p),null,B.cG),$async$aOA)
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
return A.i($async$aOA,v)},
aOB(d,e){return C.i_M(d,e)},
i_M(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aOB=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.S(e).k("N<1,a7<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fqw(d),n),m)
r=l
w=7
return A.b(A.m0("family_trees",r,null,B.cG),$async$aOB)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fqx(d),n),m)
p=k
w=8
return A.b(A.m0("family_trees",p,null,B.cG),$async$aOB)
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
return A.i($async$aOB,v)},
fe5(d){return C.hSp(d)},
hSp(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fe5=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.R8("family_trees",A.G(["id",d],x.N,x.z),null,B.cG),$async$fe5)
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
return A.i($async$fe5,v)},
r5:function r5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lo:function lo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cyY:function cyY(){},
cyX:function cyX(){},
cyV:function cyV(){},
cyW:function cyW(){},
HI:function HI(d,e){this.a=d
this.b=e},
i1:function i1(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
akM:function akM(d,e){this.a=d
this.b=e},
ftj:function ftj(){},
fS1:function fS1(d){this.a=d},
frc:function frc(d){this.a=d},
kF:function kF(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bOT:function bOT(){},
bOS:function bOS(){},
bOP:function bOP(){},
bOQ:function bOQ(){},
bOR:function bOR(){},
fia:function fia(){},
fe1:function fe1(){},
fe2:function fe2(){},
fe3:function fe3(){},
fJP:function fJP(){},
fJQ:function fJQ(){},
fJR:function fJR(){},
fJS:function fJS(d){this.a=d},
fJT:function fJT(){},
fS_:function fS_(d){this.a=d},
ftN:function ftN(d){this.a=d},
fwB:function fwB(){},
fwC:function fwC(){},
fwD:function fwD(){},
fwE:function fwE(){},
fwF:function fwF(d){this.a=d},
fJC:function fJC(d){this.a=d},
fRV:function fRV(){},
fRW:function fRW(){},
fRX:function fRX(d){this.a=d},
ftu:function ftu(d){this.a=d},
ftv:function ftv(d){this.a=d},
fS5:function fS5(){},
fsZ:function fsZ(d){this.a=d},
ft_:function ft_(d,e){this.a=d
this.b=e},
ft0:function ft0(){},
fRs:function fRs(d){this.a=d},
fxp:function fxp(){},
fJv:function fJv(){},
fwy:function fwy(){},
fwz:function fwz(){},
fwA:function fwA(){},
fJq:function fJq(d){this.a=d},
fez:function fez(){},
feA:function feA(){},
feB:function feB(){},
feC:function feC(){},
feD:function feD(){},
feQ:function feQ(){},
feR:function feR(d){this.a=d},
feN:function feN(d){this.a=d},
feO:function feO(){},
feP:function feP(){},
fiR:function fiR(){},
fiS:function fiS(){},
fiT:function fiT(){},
fly:function fly(){},
fqw:function fqw(d){this.a=d},
fqx:function fqx(d){this.a=d},
cyZ:function cyZ(d,e){this.a=d
this.b=e},
cz_:function cz_(d,e){this.a=d
this.b=e},
aGV:function aGV(d,e,f){this.a=d
this.b=e
this.c=f},
b8y:function b8y(){this.b=this.a=0},
b8x:function b8x(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bvt:function bvt(){},
wQ(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcf()+"/"+w.gcv()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aZ(B.o.u(w.gne()),2,"0")+":"+B.a.aZ(B.o.u(w.gGi()),2,"0")},
hJb(){var w,v=$.pB(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.au(32)]
return"WS"+B.d.hu(u)},
asr(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$asr=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$asr)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$asr)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
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
return A.i($async$asr,v)},
ass(d){return C.hJc(d)},
hJc(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$ass=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$ass)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hI("ngmy_worksheet_project_qr_stashes_v1",A.G(["stashes",d,"savedAt",new A.T(Date.now(),0,!1).a7().ad()],x.N,x.z),!1,!1,B.cG,null),$async$ass)
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
return A.i($async$ass,v)},
asu(d,e,f){var w=0,v=A.j(x.fO),u,t,s,r,q,p
var $async$asu=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c6(),$async$asu)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hJb()
w=4
return A.b(C.asr(),$async$asu)
case 4:r=h
q=B.a.i(e)
p=B.dN.aM(t)
J.aG(r,s,A.G(["ownerEmail",q,"projectId",f,"payload",B.cJ.gct().aM(p),"usesRemaining",25,"createdAt",new A.T(Date.now(),0,!1).a7().ad()],x.N,x.K))
w=5
return A.b(C.ass(r),$async$asu)
case 5:u=new A.a05("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asu,v)},
ast(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ast=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c6(),$async$ast)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.asr(),$async$ast)
case 4:q=f
p=J.a4(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a4(o)
m=A.aK(n.h(o,"usesRemaining"))
l=m==null?null:B.k.O(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cf.cz(0,B.cF.aM(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
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
m.n(0,"lastUsedAt",new A.T(Date.now(),0,!1).a7().ad())
p.n(q,i,m)}w=5
return A.b(C.ass(q),$async$ast)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ast,v)},
hdf(){var w=new A.T(Date.now(),0,!1).a7()
return"wst_"+(1000*w.a+w.b)+"_"+B.cW.au(999999)},
hJd(d){var w,v,u,t,s,r,q
try{w=A.agl(d)
if(w==null)return d
v=w
if(J.Lp(v)>960||J.Lo(v)>960){s=v
r=J.Lp(v)>=J.Lo(v)?960:null
v=A.agk(s,J.Lo(v)>J.Lp(v)?960:null,B.OC,r)}s=v
u=A.am9(82).Ta(s,B.yY)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ch(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cik(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cik=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hJd(e)
$.cig.n(0,s,t)
u=C.bCP(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cik,v)},
b2f(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b2f=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.f1(l,",")?B.d.gal(J.lw(l,",")):l
q=B.cF.aM(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hdf()
w=7
return A.b(C.cik(p,q),$async$b2f)
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
return A.i($async$b2f,v)},
cih(d){var w=0,v=A.j(x.T),u,t,s
var $async$cih=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(L.cij(s),$async$cih)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cJ.gct().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cih,v)},
a8q(d){var w=0,v=A.j(x.H),u,t
var $async$a8q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=L.hq3(d)
if(t==null){w=1
break}$.cig.W(0,t)
w=3
return A.b(C.bCO(t),$async$a8q)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8q,v)},
bCP(d,e){return C.i9A(d,e)},
i9A(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bCP=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aNv
w=7
return A.b(n==null?$.aNv=L.h_J():n,$async$bCP)
case 7:r=g
q=new Uint8Array(A.ch(e))
p=J.mO(r,"thumbs","readwrite")
B.iU.mj(J.mN(p,"thumbs"),q,l)
w=8
return A.b(J.pD(p),$async$bCP)
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
return A.i($async$bCP,v)},
bCO(d){return C.i9y(d)},
i9y(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCO=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aNv
w=7
return A.b(o==null?$.aNv=L.h_J():o,$async$bCO)
case 7:r=f
q=J.mO(r,"thumbs","readwrite")
B.iU.FP(J.mN(q,"thumbs"),m)
w=8
return A.b(J.pD(q),$async$bCO)
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
return A.i($async$bCO,v)}},D,Ap,Aq,V,Ar,As,L
J=c[1]
A=c[0]
B=c[2]
A5=c[79]
Q=c[239]
W=c[153]
A6=c[222]
I=c[203]
G=c[32]
E=c[213]
M=c[115]
A7=c[225]
O=c[103]
A8=c[112]
A9=c[190]
X=c[113]
Aa=c[221]
Ab=c[39]
R=c[220]
K=c[87]
Y=c[82]
Z=c[159]
Ac=c[123]
A_=c[162]
A0=c[235]
A1=c[191]
Ad=c[182]
Ae=c[194]
A2=c[189]
Af=c[238]
Ag=c[67]
Ah=c[73]
A3=c[207]
Ai=c[241]
Aj=c[31]
A4=c[114]
N=c[184]
Ak=c[195]
Al=c[119]
S=c[240]
Am=c[146]
T=c[231]
An=c[38]
F=c[96]
Ao=c[30]
P=c[102]
H=c[129]
U=c[71]
C=a.updateHolder(c[6],C)
D=c[234]
Ap=c[72]
Aq=c[201]
V=c[237]
Ar=c[236]
As=c[58]
L=c[56]
C.aol.prototype={}
C.aYy.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bgr(),f=h.x!=null&&h.z2(i).length===0
if(h.x!=null)w=f?B.b_:B.bx
else w=h.gTO()?B.bx:B.dV
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.biU,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.eW9,B.f,i,i,new A.o(B.b_.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h1,i,i,i),B.R,D.fpG,B.au,A.d(C.wQ(new A.T(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fls,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b25,i,i,i,i,B.ZC,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.r,1)
o=A.I(B.b_.j(0.28),B.r,1)
n=A.h1N(h.d)
o=A.p(B.A,C.aYx(A.fzK(h.e,n),30),B.f,i,i,new A.o(B.lU,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fgM,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.r,1)
q=A.p(i,A.x(A.a([o,B.N,n,B.bA,D.fpY,B.ad,A.p(i,A.x(A.a([D.fFG,B.bA,A.d(A.AS(h.c),i,i,i,i,i,i,D.fbB,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fa,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,N.aiJ,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.r,1)
l=j.aQK("Original due",C.wQ(h.r,!1))
n=j.aQK("Current due",C.wQ(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.R,A.p(i,A.x(A.a([l,B.N,n,B.R,A.p(i,A.d(h.gaKT(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Bn,i,i,1/0),B.R,j.cfw(),B.N,j.c32(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bj,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.r,1)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fqV,B.au,A.d(q,i,i,i,i,i,i,D.fg2,i,i,i)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bj,i,i,1/0)],s))}if(h.gaFG()){q=A.m(14)
o=A.I(B.cr,B.r,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.x(A.a([D.fH_,B.N,A.bx(A.m(12),A.el(new A.a8(1/0,88,A.b4(i,i,i,new A.VW(h.ax,B.M,D.f_n,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.FG,i,i,i)],s))}p.push(B.aA)
p.push(D.fz1)
return A.p(i,A.x(A.a([r,new A.D(B.MO,A.x(p,B.ai,i,B.e,B.j,0,B.p),i)],s),B.ai,i,B.e,B.P,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aQK(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a91,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fcF,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
cfw(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a9q(B.dV,u,"Not paid yet")
w=t.z2(null).length
v=w===0?B.b_:B.bx
return this.a9q(v,u,C.wQ(t.x,!0))},
c32(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a9q(B.b_,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a9q(B.b_,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a91,u,u,u)
v=A.S(d).k("N<1,hc>")
v=A.C(new A.N(d,new C.c47(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bX(B.bB,v,B.bs,6,6)],x.p),B.E,u,B.e,B.j,0,B.p)},
a9q(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a91,w,w,w),1),new A.dr(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dT,w,w),w)],x.p),B.E,w,B.e,B.j,0,w,w)}}
C.baF.prototype={
a6(d,e){new A.VW(this.b,B.M,e,!0,3.5,null).a6(d,e)},
aw(d){return d.b!==this.b}}
C.aox.prototype={
U(){return new C.aCR(A.a([],x.bp))},
gdY(){return this.c}}
C.aCR.prototype={
a_(){this.a1()
this.IM()},
IM(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1T(t.a.c),$async$IM)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dI2(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IM,v)},
aSG(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bq:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bl).j(0.22)
w=A.m(10)
return A.bs(v,new A.b5(4,r,new A.ay(u,1,B.r,-1)),v,B.bj,v,v,v,v,!0,new A.b5(4,w,new A.ay((this.a.d.a?B.bq:B.bl).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.m(10),D.b_I),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aSF(d){return this.aSG(d,null)},
Ps(d){return this.cj8(d)},
cj8(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ps=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.GX:B.eJ
w=7
return A.b(new A.hT().C7(72,900,900,n),$async$Ps)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fi(),$async$Ps)
case 8:p=f
n=B.cJ.gct().aM(p)
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
if(n!=null)n.J(x.q).f.R(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ps,v)},
b0h(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.bq:B.bl).j(0.18),B.r,1)
if(d)q=B.cM
else q=s.a.d.a?B.bq:B.bl
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cM
else u=s.a.d.a?B.bq:B.bl
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.j,0,B.p),1)
v=A.fx(r,r,r,r,r,r,r,r,r,r,r,B.cM,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ab,u,A.bM(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.X(B.cx,s.a.d.a?B.bq:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jK,D.bvm,r,r,r)},
D7(d){return this.bzT(d)},
bzS(){return this.D7(null)},
bzT(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D7=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.as(new A.ba(a4,B.b4,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jc(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.O(p)):B.k.ac(p,2)}o=new A.as(new A.ba(a4,B.b4,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.ba(a4,B.b4,B.aN),s)
if(a3){a4=new A.T(Date.now(),0,!1).bS(6048e8)
m=A.c2(a4.gck(),a4.gcf(),a4.gcv(),0,0,0,0,0)}else{a4=a5.f
m=A.c2(a4.gck(),a4.gcf(),a4.gcv(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bo(a4,!0,x.cT)
i=a3?null:A.h1N(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wv?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",a4,new C.dHM(),new C.dHN(a2,t,a5,r,new C.dHO(a2,t),o,n,j),B.eM,!0,x.y),$async$D7)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d6(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.J(x.q).f.R(D.f5Q)
w=1
break}a0=a2.d
if(a0==null){t.c.J(x.q).f.R(D.f4v)
w=1
break}a1=A.fzK(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wv?"male":"female"
w=7
return A.b(A.ahK(a3,A.h9Y(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$D7)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wv?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c2(a3.gck(),a3.gcf(),a3.gcv(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c2(a4.gck(),a4.gcf(),a4.gcv(),0,0,0,0,0)))a5.cMo(a2.a)
w=8
return A.b(A.ahK(t.a.c,a5),$async$D7)
case 8:case 5:w=9
return A.b(t.IM(),$async$D7)
case 9:case 1:return A.h(u,v)}})
return A.i($async$D7,v)},
aTj(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cM.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cM
else s=(this.a.d.a?B.bq:B.bl).j(0.2)
s=A.I(s,B.r,g?1.5:1)
r=C.aYx(d,18)
if(g)q=B.cM
else q=this.a.d.a?B.aP:B.av
return A.aF(!1,B.a2,!0,v,A.aL(!1,u,!0,A.p(p,A.B(A.a([r,B.bn,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b7,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bU,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ah)},
S8(d){return this.cAS(d)},
cAS(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$S8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hZ(B.w.j(0.55),!0,"Dismiss",s,new C.dI5(),new C.dI6(t,d),B.hm,!0,x.y),$async$S8)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.T(s,0,!1)
case 4:w=7
return A.b(A.ahK(t.a.c,d),$async$S8)
case 7:w=8
return A.b(t.IM(),$async$S8)
case 8:case 1:return A.h(u,v)}})
return A.i($async$S8,v)},
Pr(d,e){return this.bKI(0,e)},
bKI(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l9(s,"Cancel","Delete",e.b+" \xb7 "+A.AS(e.c)+" will be removed from this device.","Delete this debt?"),$async$Pr)
case 3:if(!g){w=1
break}w=4
return A.b(C.ftB(t.a.c,e.a),$async$Pr)
case 4:w=5
return A.b(t.IM(),$async$Pr)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pr,v)},
aeY(d){return this.ccX(d)},
ccX(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.K,null,new C.dI_(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aeY)
case 2:return A.h(null,v)}})
return A.i($async$aeY,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eh0
w=J.dJ(m.d,new C.dI7())
v=A.C(w,w.$ti.k("J.E"))
w=J.dJ(m.d,new C.dI8())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cM(v,0,new C.dI9())
w=A.m(18)
s=m.a.d.a
r=s?D.cu_:D.aza
q=A.I(s?B.cM.j(0.35):B.cM.j(0.18),B.r,1)
s=A.p(l,D.bVZ,B.f,l,l,new A.o(B.cM.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.as,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a2,!0,A.m(12),A.aL(!1,A.m(12),!0,D.egp,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dIa(m),l,l,l,l,l,l,l),B.f,B.cM,0,l,l,l,l,l,B.ah)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cx2("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AS(t)
r=A.a([A.p(l,A.x(A.a([s,B.ad,A.B(A.a([o,B.ab,A.E(m.b6o(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.E,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.ax,B.aD,B.x,r,l,l),B.n),l,l,l,l,B.aiG,l,l,l),B.aA],p)
if(J.co(m.d)){w=m.a.d.a
s=w?B.e1:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bl).j(0.12),B.r,1)
n=A.p(l,D.bQS,B.f,l,l,new A.o(B.cM.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.x(A.a([n,B.ad,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bxT,l,l,1/0))}else{w=m.gcip()
s=A.C(new A.N(v,w,A.S(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bzz,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.S(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ai,l,B.e,B.j,0,B.p)},
b6o(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bl).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cM
else w=v.a.d.a?B.aP:B.av
return A.p(u,A.x(A.a([q,B.bA,A.d(f,u,1,B.a1,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ex,u,u,u)},
cx2(d,e){return this.b6o(!1,d,e)},
ciq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.z2(j).length,h=d.bfF()
if(d.x!=null){w=d.z2(j).length
v=w===0?B.cM:B.bx}else if(d.gTO())v=B.bx
else{if(h)w=B.cM
else w=k.a.d.a?B.bq:B.bl
v=w}if(d.x!=null){w=d.z2(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wQ(u,!1)}else{u.toString
t="Paid "+C.wQ(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wQ(w,!1)+" \xb7 "+i+" missed":"Due "+C.wQ(w,!1)}w=k.a.d.a?B.e1:B.c
u=A.m(18)
if(d.gTO()&&d.x==null)s=B.bx.j(0.35)
else s=(k.a.d.a?B.bq:B.bl).j(0.12)
s=A.I(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bm:B.lU
o=A.I(d.gTO()&&d.x==null?B.bx.j(0.45):B.cM.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.h1N(d.d)
o=A.p(B.A,A.dd(C.aYx(A.fzK(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.av
m=x.p
n=A.a([new A.dr(1,B.cn,A.d(p,j,1,B.a1,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaFG())B.d.v(n,A.a([B.ej,A.X(B.NK,B.cM.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cO,A.d(t,j,1,B.a1,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.j,0,B.p),1)
n=A.AS(d.c)
l=k.a.d.a?B.aP:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a2,!0,j,A.aL(!1,q,!0,new A.D(A0.ais,A.B(A.a([o,B.bc,p,B.ab,A.x(A.a([n,B.bA,A.X(B.eD,(k.a.d.a?B.bq:B.bl).j(0.5),j,j,j,18)],m),B.dC,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dI1(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ah),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
C.uk.prototype={}
C.akD.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bh
u=v?B.E:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cv,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.r,1)
n.push(A.aB(a0,A.p(a0,A.X(B.cx,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.ir,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.avr,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.FW,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eN(m,A.B(l,B.m,a0,B.e,B.P,0,a0,a0),B.f,B.e0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.buy,A.d(v,a0,1,B.a1,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cE:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fw,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.f0a)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vL,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lt,A.x(a2,B.m,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hn,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.ax,B.aD,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bvN,a0,a0,a0,a0)}}
C.aUi.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bh?B.bh:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a1,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bp:B.cE,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cO,n],m)
if(p.z)o.push(new A.D(B.vJ,n,q))
return new A.D(B.d3,A.x(o,B.m,q,B.e,B.P,0,B.p),q)}}
C.SO.prototype={
U(){return new C.beg()}}
C.beg.prototype={
gbZ1(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.egW,D.eh1],l)
for(w=0;w<8;++w){v=D.a2H[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.GG:B.C6
q=t===s
r=A.X(r,q?B.eF:B.bX,n,n,n,17)
q=q?B.c:B.ae
r=A.a([r,B.bn,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bA(1,B.bd,new A.y(v.c,n,A5.DI,n,n,n,n,B.a1,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aQ(24,24)
p=new A.ay(B.eF,2,B.r,-1)
s=new A.o(n,n,new A.bJ(p,p,p,p),new A.bk(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eH,A.x(A.a([new A.D(B.mz,new A.cb(B.aM,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DX(!0,new C.akD(v,q.d,q.e,new C.d8a(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d8b(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bw5,A.bG(D.fMp,new C.d8c(o,d),A.bn(B.b5,n,n,n,n,B.oq,n,n,new A.b7(A.m(16),B.a0),n,n,n)),n))
return A.bm(!0,new A.cT(new A.aX(0,1/0,0,m.a.b*0.9),A.ct(k,n,D.bAq,n,n,B.ag,!0),n),!0,!1,B.af,!0,!0)}}
C.nj.prototype={
ag(){var w=this
return A.G(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a7().ad()],x.N,x.z)},
bch(d,e,f){return new C.nj(this.a,e,d,f)}}
C.HH.prototype={
wn(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.HH(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aDS(d){var w=null
return this.wn(w,w,w,w,w,d,w,w,w,w,w,w)},
cIb(d){var w=null
return this.wn(w,w,w,w,d,w,w,w,w,w,w,w)},
bcf(d,e,f){var w=null
return this.wn(d,w,w,w,w,w,w,w,e,w,f,w)},
cIQ(d){var w=null
return this.wn(w,w,w,w,w,w,d,w,w,w,w,w)},
cIZ(d){var w=null
return this.wn(w,w,w,w,w,w,w,w,w,d,w,w)},
cI9(d){var w=null
return this.wn(w,w,w,d,w,w,w,w,w,w,w,w)},
cJ0(d){var w=null
return this.wn(w,w,w,w,w,w,w,w,w,w,w,d)},
cI6(d){var w=null
return this.wn(w,w,d,w,w,w,w,w,w,w,w,w)},
cI1(d){var w=null
return this.wn(w,d,w,w,w,w,w,w,w,w,w,w)},
FH(d){var w=null
return this.wn(w,w,w,w,w,w,w,d,w,w,w,w)},
cJ8(d,e,f,g,h,i,j,k,l,m,n){return this.wn(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.G(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cFL(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bO1(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.O(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.CQ.ges(D.CQ))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a4h)
q=l.$2("frame",D.a3G)
l=l.$2("texture",D.a3C)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cJ8(p,u,t,q,r,A.qV(d.h(0,"ribbon"))?A.Ga(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Zg.prototype={
U(){return new C.azU(A.a([],x.I),D.Ni)},
gdY(){return this.c}}
C.azU.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zK(0,1)
w=$.aw()
v.z=new A.as(B.at,w)
v.Q=new A.as(B.at,w)
v.l2()
w=v.a
C.bBc(w.c,w.d).bL(new C.d8R(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
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
l2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$l2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KT(s.c,s.d),$async$l2)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d8F(t,r))
t.avI()
case 1:return A.h(u,v)}})
return A.i($async$l2,v)},
gasj(){var w,v=this
if(!J.co(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
avI(){var w,v,u=this.gasj(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saU(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saU(0,w==null?"":w)},
cbn(d){this.m(new C.d8C(this,d))
this.avI()},
No(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$No=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nj(B.o.u(1000*Date.now()),"Untitled page","",new A.T(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aQp(r.c,r.d,s),$async$No)
case 3:w=4
return A.b(t.l2(),$async$No)
case 4:if(t.c==null||J.co(t.d)){w=1
break}q=J.qo(t.d,new C.d8d(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d8e(t,p))
t.avI()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B7(p+1,B.ct,B.kA),$async$No)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$No,v)},
AN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gasj()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aQp(o.c,o.d,new C.nj(s,r,q,new A.T(p,0,!1))),$async$AN)
case 3:w=4
return A.b(t.l2(),$async$AN)
case 4:if(t.c==null){w=1
break}t.m(new C.d8G(t))
case 1:return A.h(u,v)}})
return A.i($async$AN,v)},
O2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gasj()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.d8m(r),s,null,!0,!0,x.y),$async$O2)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bB_(s.c,s.d,r.a),$async$O2)
case 4:t.m(new C.d8n(t))
w=5
return A.b(t.l2(),$async$O2)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.TR(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$O2,v)},
yq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AN(),$async$yq)
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
return A.b(C.R1(s,r.r,o,p,q),$async$yq)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a3(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hqD(s,r.x,r.r),$async$yq)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KT(s.c,s.d),$async$yq)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.nj(""+(m+k),q,B.a.i(j.b),new A.T(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.B0(r.c,r.d,l),$async$yq)
case 11:w=12
return A.b(t.l2(),$async$yq)
case 12:r=t.c
if(r==null){w=1
break}r.J(x.q).f.R(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yq,v)},
a0u(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AN(),$async$a0u)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyo(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dM(D.z6,new C.d8D(t),new C.d8E())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new G.mA("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gT(o)
p.push(new G.mA(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(G.h3r(o,new G.rp(s,r,"",p,new G.uC(q.d,null,null,null,null,"","","")),null),$async$a0u)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0u,v)},
NM(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$NM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AN(),$async$NM)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.adW,null,new C.d8i(t),s,!0,!0,!0,P.a7j,!1,!1,x.N),$async$NM)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cIb(r)
t.m(new C.d8j(t,q))
s=t.a
w=7
return A.b(C.RB(s.c,s.d,q),$async$NM)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NM,v)},
X2(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.adW,null,new C.d8o(t),r,!0,!0,!0,P.a7j,!1,!1,x.e),$async$X2)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d8p(t,s))
r=t.a
w=4
return A.b(C.RB(r.c,r.d,s),$async$X2)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B7(0,B.e_,B.ne)
case 1:return A.h(u,v)}})
return A.i($async$X2,v)},
bQc(d){var w=d.bU(),v=B.a.aZ(B.o.u(w.gcf()),2,"0"),u=B.a.aZ(B.o.u(w.gcv()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gyo(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bYh()
if(r.e)w=D.acJ
else if(J.co(r.d)){w=r.y
v=r.gyo(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.faZ,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a8(q,330,new A.D(T.ajH,new C.Yz(w,v,0,q),q),q),B.bv,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.ku.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bv],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.eVX,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dD.j(0.45),B.J,18)],x.V),E.wl,B.n),q,q,q,q,B.N1,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcEQ(),q,q,q,q,q,q,!1,B.a4))
w.push(B.R)
w.push(A.ho(D.bN4,D.fLS,r.gaMC(),q))
B.d.v(u,w)}w=A.au(A.ce(A.x(u,B.m,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.eC,q,q,B.ag),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.ku.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dP:B.Ax
u=A.x(A.a([new A.D(D.bx9,w,q),A.E(A.J1(v,new C.d8P(r),J.ad(r.d)+1,q,r.gcbm(),u,B.aM),1),r.bCM()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c5(q,D.Xu,new A.an(B.a_,q,B.b2,B.t,A.a([D.aMr,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bYh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cK(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.K_(B.e3,"AI",h.gbAF(),!0))
if(h.a.f)f.push(new C.K_(B.no,"Cover",h.gbLh(),!1))
if(h.a.f)f.push(new C.K_(B.yN,"Header",h.gbGi(),!1))
if(J.cK(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.K_(B.ui,"Print",h.gckr(),!1))
if(h.a.f&&J.cK(h.d)&&h.r>=0){v=h.w
u=v?B.hD:B.j9
t=v?"Save":"Edit"
f.push(new C.K_(u,t,v?h.gcqJ():new C.d8z(h),!1))}if(h.a.f)f.push(new C.K_(B.hC,"Add page",h.gaMC(),!1))
v=C.hmI(h.y.Q)
u=h.gyo(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.M)(f),++m){l=f[m]
if(l.d)k=D.dwU
else{k=new A.aQ(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.k3.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.ku,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bJ(i,i,i,i),new A.bk(k,k,k,k),g,new A.a9(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.ku.j(0.85)
p.push(new A.bA(1,B.bd,A.aB(B.cg,A.x(A.a([k,B.bA,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.akD(v,u,t+" \xb7 "+s+" "+r,new C.d8A(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AN(),$async$zP)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=G.a27(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.d8f(t,p),s,null,!0,!0,x.N),$async$zP)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yq(),$async$zP)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DK(),$async$zP)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fj("Swahili (Kiswahili)",!0),$async$zP)
case 18:w=16
break
case 17:w=19
return A.b(t.cBt(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zP)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zP,v)},
YV(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.k3.j(0.3),B.r,1),r=x.p
return new A.D(B.cu,A.aL(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wl,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,Y.Jy,w,w,w),A.d(g,w,w,w,w,w,w,M.DK,w,w,w)],r),B.E,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d8B(d,h),w,w,w,w,w,w,w),w)},
DK(){return this.bPH()},
bPH(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DK=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.d8s(r),a7,null,!0,!0,x.ei),$async$DK)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eI("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.d8t(o),a7,null,!0,!0,x.H).fm(new C.d8u(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.M)(d),++a1){k=d[a1]
J.cc(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.z6[a1]
J.cc(j,i.a)}w=8
return A.b(C.agU(a0,a7,new C.d8v(o),d,l,e,j),$async$DK)
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
if(l!=null&&a6.a)A.a3(l,!0).eH()
l=o
l.si2($.aw())
J.aQR(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.J(x.q).f
j=n
l.R(A.b3(null,null,null,null,null,B.t,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bch(m.b.h(0,a4).b,a7,new A.T(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.B0(j.c,j.d,l),$async$DK)
case 11:w=12
return A.b(r.l2(),$async$DK)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.z6[a1].a)
a5=l.cFL(j,12,a7)
l=r.a
w=15
return A.b(C.RB(l.c,l.d,a5),$async$DK)
case 15:if(r.c!=null)r.m(new C.d8w(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B7(0,B.e_,B.ne)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.J(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b3(a3?A.ctq("Undo",new C.d8x(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.em,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DK,v)},
Fj(d,e){return this.cBu(d,e)},
cBt(d){return this.Fj(d,!1)},
cBu(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fj=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eI("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.d8I(a0),k,null,!0,!0,x.H).fm(new C.d8J(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.M)(k),++i){n=k[i]
J.cc(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(G.a2k(m,new C.d8K(a0)),$async$Fj)
case 10:w=8
break
case 9:w=11
return A.b(C.bCG(new C.d8L(a0),m,a2),$async$Fj)
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
if(o!=null&&f.a)A.a3(o,!0).eH()
o=a0
o.si2($.aw())
J.aQR(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.J(x.q).f
k=q
o.R(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bch(J.q(p,g).b,j.a,new A.T(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.B0(k.c,k.d,o),$async$Fj)
case 12:w=13
return A.b(r.l2(),$async$Fj)
case 13:o=r.c
if(o==null){w=1
break}o=o.J(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b3(A.ctq("Undo",new C.d8M(r,d),null),null,null,null,null,B.t,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fj,v)},
bCM(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d8g(v):u
r=A.aI(u,u,u,u,A.X(D.bIS,s?D.ku:B.aZ,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cK(v.d)&&!v.w&&v.r>=0)s=A.ho(A.X(B.w_,B.Fj,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Fj,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbKS(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.ku.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.au(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d8h(v):u
return A.bm(!0,new A.D(D.bwX,A.B(A.a([r,s,A.aI(u,u,u,u,A.X(B.eD,t<J.ad(v.d)?D.ku:B.aZ,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.Zk.prototype={
U(){return new C.beB(new A.as(B.at,$.aw()))}}
C.beB.prototype={
ga1D(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbOm(){var w,v=this.ga1D()
A:{if("cover"===v){w=D.d_D
break A}if("book"===v){w=D.cWk
break A}w=D.dpr
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.k3.j(0.5),n=x.p,m=A.B(A.a([D.dwV,B.as,D.bCv,A.aI(q,q,q,q,B.ly,q,q,q,new C.daB(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j0(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.daC(r),r.ga1D()==="page",q,q,q,q))
if(r.a.d)l.push(A.j0(q,q,q,D.fGv,q,new C.daD(r),r.ga1D()==="book",q,q,q,q))
l.push(A.j0(q,q,q,D.ftx,q,new C.daE(r),r.ga1D()==="cover",q,q,q,q))
l=A.bX(B.bB,l,B.bs,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.V,!1,q,!0,B.t,q,A.aO(),r.d,q,q,q,q,q,2,A.bs(q,new A.b5(4,A.m(16),B.a0),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kP,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.dd,!0,B.a5,q,B.ao,q,q,q,q)
w=A.a([],n)
for(v=r.gbOm(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mP(q,B.c.j(0.08),new A.y(s,q,B.Jv,q,q,q,q,q,q,q,q,q),B.hf,new C.daF(r,s),q,q,q,q))}return A.eM(q,E.B2,A.ce(A.x(A.a([m,B.R,D.fJN,B.am,l,B.ad,k,B.N,A.bX(B.bB,w,B.bs,6,6),B.aA,A.dp(D.bN1,D.fKz,new C.daG(r,d),A.bn(B.b5,q,q,q,q,B.oq,q,q,new A.b7(A.m(16),B.a0),q,q,q)),B.au,D.fEK],n),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.fb,q,q,B.ag),q,q,q,D.ajo,B.d4,q,new A.b7(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.Zi.prototype={
U(){return new C.azW(A.a([],x.Y))},
gdY(){return this.c}}
C.aeC.prototype={}
C.azW.prototype={
a_(){this.a1()
this.l2()},
l2(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$l2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.R4(p.c,p.d),$async$l2)
case 3:o=e
n=A.a([],x.Y)
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
return A.b(C.bBc(r.c,q),$async$l2)
case 6:j=e
i=J
w=7
return A.b(C.KT(t.a.c,q),$async$l2)
case 7:m.push(new l.aeC(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d95(t,n))
case 1:return A.h(u,v)}})
return A.i($async$l2,v)},
b7E(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Q8(d,e){return this.ccV(0,e)},
ccV(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Q8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a3(s,!1).cg(A.e_(new C.d94(u,e),!0,null,x.y)),$async$Q8)
case 2:t=g
w=3
return A.b(u.l2(),$async$Q8)
case 3:if(t===!0&&u.c!=null)u.c.J(x.q).f.R(D.aQ_)
return A.h(null,v)}})
return A.i($async$Q8,v)},
Fm(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.J(x.q).f.R(D.aPW)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agd(s.c,s.d),$async$Fm)
case 5:q=e
w=6
return A.b(t.l2(),$async$Fm)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Q8(0,B.d.h_(t.d,new C.d99(q))),$async$Fm)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.R1(p,s.f,r,n,o),$async$Fm)
case 10:m=e
w=11
return A.b(t.l2(),$async$Fm)
case 11:if(m&&t.c!=null)t.c.J(x.q).f.R(D.aQ_)
case 1:return A.h(u,v)}})
return A.i($async$Fm,v)},
PD(d,e){return this.coq(0,e)},
coq(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.d98(t,e),s,null,!0,!0,x.y),$async$PD)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2w(s.c,s.d,e.a),$async$PD)
case 4:w=5
return A.b(t.l2(),$async$PD)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PD,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)k.push(o.bCP(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.k3.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fK(0.7142857142857143,A.p(n,A.x(A.a([D.dwW,B.ad,D.eg2,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.ku.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b7,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcEM(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.I(E.k3.j(0.85),B.r,1.6)
s=A.aB(n,A.p(n,D.bUN,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.k3.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d9a(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.k3.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bc,D.bCT,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fa_,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h1,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c_G,B.n),n,n,n,Ar.MM,D.bv1,n,n,n)
if(o.e)k=D.acJ
else k=k.length===0?D.b7c:A.cC(new C.d9b(k))
return A.c5(n,D.Xu,new A.an(B.a_,n,B.b2,B.t,A.a([D.aMr,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bCP(d){var w,v,u=this,t=null,s=u.b7E(d),r=d.c,q=x.p,p=A.a([A.bU(0,A.eN(B.A,new A.a8(300,420,new C.Yz(d.b,s,r,t),t),B.f,B.dw),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aB(t,A.p(t,D.bU6,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.aZ,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d92(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a1,t,t,t,D.f9z,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.x(A.a([new A.fK(0.7142857142857143,new A.an(B.a_,t,B.aa,B.t,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.ku.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d93(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.K_.prototype={}
C.Yz.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dM(D.z6,new C.cHK(m),new C.cHL()),j=m.c,i=D.CQ.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mI:B.b7
v=new C.cHM(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.ecR,28)],x.V)
u=x.p
t=A.a([A.bU(0,A.b4(l,l,l,new C.bbR(j.x,h,l),B.az),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aQ(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bk(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ajI,8,0.85,2.2),v.$4(D.bzS,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ajI,8,0.85,2.4))
else if(r==="corners")t.push(A.bU(0,new A.D(D.bzO,A.b4(l,l,l,new C.bbI(h,l),B.az),l),0,0,0))
r=A.X(D.ay8[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a1,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.avr,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ad,p,B.ad,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cE,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a1,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bU(0,new A.D(D.bAi,A.x(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aGQ(l),D.f_g),l,l,l,46,0,l))
return A.p(l,A.bx(D.abo,new A.an(B.a_,l,B.aa,B.t,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.abo,i,new A.a9(B.ax,B.aD,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbR.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.en()
f.df(11)
switch(this.b){case"plain":return
case"linen":$.W()
w=A.K()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.W()
q=A.K()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.aj()
l=f.aj()
k=f.aj()
$.W()
j=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
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
h=new A.aJ(k.r,B.ak,null,null,j)
j.push(new A.b1(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bv())
k=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbB().a.snapshot()
o.drawPath((h.e=new A.cv(k)).a,r)
r.delete()}break
default:$.W()
w=A.K()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.W()
g=A.K()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.aj()
m=f.aj()
l=f.aj()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
aw(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bbI.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.K(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ac
k.c=2.4
k.d=B.bH
for(w=e.a,v=e.b,v=[D.eQD,new A.cx([w,0,-1,1]),new A.cx([0,v,1,-1]),new A.cx([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aJ(l,B.ak,null,null,s)
s.push(new A.b1(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.H()
s=n.gbB().a.snapshot()
w.drawPath((n.e=new A.cv(s)).a,m)
m.delete()
s=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aw(d){return!d.b.A(0,this.b)}}
C.ul.prototype={}
C.YR.prototype={
U(){return new C.bbP()}}
C.bbP.prototype={
go7(){var w=this.d
return w===$?this.d=this.a.c:w},
gyo(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.ba(w.b,B.b4,B.aN),$.aw())}return v},
gaB1(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.ba(w.c,B.b4,B.aN),$.aw())}return v},
gaqQ(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.ba(w.y,B.b4,B.aN),$.aw())}return v},
t(){var w=this,v=w.gyo(0),u=v.S$=$.aw()
v.P$=0
v=w.gaB1()
v.S$=u
v.P$=0
v=w.gaqQ()
v.S$=u
v.P$=0
w.a2()},
arv(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j0(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d0a(this,f,u),e===u,s,s,s,s))}return A.bX(B.bB,r,B.bs,6,8)},
ax9(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b5(4,A.m(14),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lG,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go7(),a0=f.gyo(0),a1=a0.a.a,a2=f.gaB1(),a3=a2.a.a,a4=f.gaqQ(),a5=d.bcf(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.au(new A.a8(190,260,A.eN(B.A,new A.a8(270,370,new C.Yz(a5,d,f.a.e,e),e),B.f,B.dw),e),e,e,e)
a0=A.aM(e,B.V,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.ax9("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d0z(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dd,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.V,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.ax9("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d0A(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dd,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.z6[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aZ
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bJ(o,o,o,o),e,e,new A.a9(B.ax,B.aD,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aB
v.push(A.aB(e,A.x(A.a([p,B.cO,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d0B(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bX(B.bB,v,B.bs,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b5.j(0.35):B.c.j(0.07)
m=new A.aQ(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eF:B.K,2,B.r,-1)
q.push(A.aB(e,A.p(e,A.X(D.ay8[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bJ(o,o,o,o),new A.bk(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d0C(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bX(B.bB,q,B.bs,8,8)
a4=A.aM(e,B.V,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.ax9("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d0D(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.dd,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,K.v6,e,e,e)
m=A.a([],w)
for(l=D.CQ.gdR(D.CQ),l=l.gaf(l);l.C();){k=l.gT(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eF:B.aZ
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bJ(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aB
m.push(A.aB(e,A.x(A.a([j,B.bA,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d0E(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bX(B.bB,m,B.bs,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,K.v6,e,e,e)
k=f.go7()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bm(!0,new A.cT(new A.aX(0,1/0,0,a1.a.b*0.92),A.ct(A.a([D.fEc,B.ad,d,B.aO,a0,B.R,a2,B.aA,D.fKl,B.N,v,B.aA,D.fEl,B.N,q,B.aA,a4,B.aA,p,B.N,m,B.aA,l,A.l2(e,9,""+B.k.V(f.go7().f),36,18,new C.d0F(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,K.v6,e,e,e),B.am,f.arv(D.a4h,f.go7().r,new C.d0G(f),D.dsD),B.ad,A.d("BORDER",e,e,e,e,e,e,K.v6,e,e,e),B.am,f.arv(D.a3G,f.go7().w,new C.d0H(f),D.dsJ),B.ad,A.d("COVER MATERIAL",e,e,e,e,e,e,K.v6,e,e,e),B.am,f.arv(D.a3C,f.go7().x,new C.d0J(f),D.dub),B.am,A.iI(e,B.b5,e,B.af,e,new C.d0K(f),e,e,e,D.fyz,f.go7().z),B.bv,A.bG(D.fCY,new C.d0L(f,a6),A.bn(B.b5,e,e,e,e,B.oq,e,e,new A.b7(A.m(16),B.a0),e,e,e))],w),e,V.aje,e,e,B.ag,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aGQ.prototype={
a6(d,e){var w,v,u,t=new A.aJ($.W().r,B.ak,null,null,A.a([],x.v))
t.D(new A.b1(0,0))
w=e.a
t.D(new A.ap(w,0))
v=e.b
t.D(new A.ap(w,v))
t.D(new A.ap(w/2,v-12))
t.D(new A.ap(0,v))
t.D(new A.bv())
u=A.K()
u.sar(D.c0m.aA(0,new A.a5(0,0,0+w,0+v)))
d.aJ(t,u)},
aw(d){return!1}}
C.bh3.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.K()
w.sar(D.c_m.aA(0,new A.a5(0,0,a3,a4)))
a5.aX(new A.a5(0,0,a3,a4),w)
v=B.k.dk(a2/112)
u=new A.en()
u.df(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.aj()*20
l=56+u.aj()*40
k=D.d_C[u.au(9)]
j=u.au(14)
J.bq(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a5(n,j,n+m,j+l)
h=A.bz(i,B.he)
g=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sar(new A.a9(B.a3,B.a8,B.x,A.a([f,k,e],t),a0,a0).aA(0,i))
d=g.H()
w.drawRRect(A.eU(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
e.r=E.k3.j(0.55).gp(0)
d=e.H()
w.drawRect(A.bQ(new A.a5(h,j,g,j+2)),d)
d.delete()
j=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
j.r=E.k3.j(0.4).gp(0)
d=j.H()
w.drawRect(A.bQ(new A.a5(h,q,g,p)),d)
d.delete()
w.restore()
j=u.au(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
p.sar(D.bZJ.aA(0,new A.a5(0,r,a3,q)))
d=p.H()
w.drawRect(A.bQ(new A.a5(0,r,a3,q)),d)
d.delete()
p=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
p.r=B.w.j(0.5).gp(0)
p.z=B.lC
d=p.H()
w.drawRect(A.bQ(new A.a5(0,q,a3,q+14)),d)
d.delete()}w=A.K()
w.r=D.baM.j(0.72).gp(0)
a5.aX(new A.a5(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.K()
a4.sar(new A.c0(B.A,0.5,B.x,a0,0,A.a([D.bir.j(0.22),B.K],t),a0,a0).aA(0,A.bW(new A.t(w,a2),a1)))
a5.ae(new A.t(w,a2),a1,a4)},
aw(d){return!1}}
C.ba3.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aN(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.kS(new A.o(A.ar(D.ku,D.bnc,w/4),o,new A.bJ(B.a0,new A.ay(B.w.j(0.12),1,B.r,-1),B.a0,B.a0),B.KI,o,o,B.n),B.bf,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aI3,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aQ(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.k3.j(0.6),o,o,new A.bk(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.ry,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.b_r,u,D.c0k,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aGQ(o),D.f_b),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aUi(p.y,r,I.iH,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.V,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bs(o,B.eE,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,I.iH.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fnN,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,I.iH.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aM(o,B.V,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bs(o,B.eE,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,I.iH.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.feN,!0,B.a5,B.zW,B.ao,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fnF,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,I.iH.j(0.5),o,o,o,o,o,o,o,o,11,B.cE,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.B(A.a([A.E(A.p(o,o,B.f,D.F8.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fw,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.F8.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.F8.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,I.iH.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.XQ(A.cZ(A.a([A.cZ(o,o,o,o,o,o,o,o,o,D.fhU,B.a.ap(k,0,1)),A.cZ(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,I.iH.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ce(A.x(n,B.E,o,B.e,B.j,0,B.p),B.t,o,B.y,o,o,o,o,B.ag)}s.push(A.E(n,1))
s.push(new A.D(B.i9,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,I.iH.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bx(B.KI,new A.an(B.a_,o,B.aa,B.t,A.a([t,new A.D(D.bzk,A.x(s,B.ai,o,B.e,B.j,0,B.p),o),A.ao(0,A.c1(o,new A.o(o,o,o,o,o,new A.a9(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bf),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.KI,v,D.c0S,B.n),o,o,o,o,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,o,o))
return new A.an(B.a_,o,B.aa,B.t,l,o)}}
C.akE.prototype={
U(){return new C.akF(new A.eI(0,$.aw()),new C.bPp(),new C.bPo(),D.hgS,null,null)},
gd7(){return this.d}}
C.a0x.prototype={
a3(){return"_Step."+this.b}}
C.akF.prototype={
gBW(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.h19(w.c,6,w.e,!1)
u.d!==$&&A.bH()
u.d=v
t=v}return t},
ghX(d){var w,v=this,u=v.e
if(u===$){w=C.akH(v.a.c)
v.e!==$&&A.bH()
v.e=w
u=w}return u},
gaEJ(){var w=this.ghX(0)
return w.galn()==null?"Babu":B.a.i(w.galn().b)},
a_(){var w,v=this
v.a1()
w=v.ghX(0).galn()
w=w==null?null:w.c
v.r.b=w===D.oV
w=v.un(new C.bOb(v))
w.hE(0)
v.x!==$&&A.aP()
v.x=w
v.a1A("Come closer, my children. I am "+v.gaEJ()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a4(0)
v=w.z
if(v!=null)v.a4(0)
v=w.w.a
if(v!=null)v.t()
v=w.f
v.S$=$.aw()
v.P$=0
w.bsw()},
a1A(d){var w=this,v=w.y
if(v!=null)v.a4(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dq(D.btC,new C.bO5(w))},
boZ(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a4(0)
v.m(new C.bOe(v))},
acP(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
boU(){return this.b7c()},
b7c(){var w=this,v=w.gBW()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bO6(w))
w.a1A(u)
v=w.z
if(v!=null)v.a4(0)
w.z=A.cM(B.lW,new C.bO7(w))},
cFS(){var w=this
w.m(new C.bOa(w))
w.a1A(w.gBW()[w.as].a)},
aCI(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aaA)return
w=p.gBW()
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
t.r=s.a+1.5}q=new A.en()
q.df(v*7+d)
p.m(new C.bO9(p,d,u,q))
p.a1A(u?D.dep[q.au(4)]+" "+w[p.as].d:D.dbc[q.au(3)]+" "+w[p.as].d)},
nU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$nU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gBW()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.h3B(t.at,t.ay,p)
t.m(new C.bOc(t,s))
t.a1A(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Mc(t.a.d,s),$async$nU)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Md(r.d,r.c.a,"fire",t.at*10),$async$nU)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bOd())
w=1
break
case 4:++t.as
t.b7c()
case 1:return A.h(u,v)}})
return A.i($async$nU,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.WC,new A.an(B.a_,v,B.aa,B.t,A.a([A.bU(0,new A.eG(A.b4(v,v,v,new C.aUn(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.c7y(0),B.b0,w.bNB()],t),B.m,v,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0)],t),v),v,!1,!1,v,v)},
c7y(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Oz,s,s,s,new C.bO8(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gBW().length;++w){v=t.as
if(w<v||t.Q===D.aX5)v=D.dK
else v=w===v?B.c:B.aZ
u=new A.aQ(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bk(u,u,u,u),s,s,B.n),s,7,s,D.buM,s,s,s,22))}p=A.E(A.x(A.a([D.fvn,A.B(p,B.m,s,B.e,B.j,0,s,s)],q),B.E,s,B.e,B.j,0,B.p),1)
v=A.m(14)
u=A.I(B.ft,B.r,1)
return new A.D(D.bAu,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.iX,s,s,s),B.f,s,s,new A.o(B.aW,s,u,v,s,s,B.n),s,s,s,s,B.h1,s,s,s)],q),B.m,s,B.e,B.j,0,s,s),s)},
bNB(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghX(0).galn()
if(h==null)w=1
else w=h.c===D.oV?0:1
v=j.dx
u=j.db
t=D.xI.j(0.96)
s=A.m(22)
r=A.I(D.dK,B.r,3)
q=A.b4(i,i,i,new C.bmq(w,i),B.az)
p=A.d(j.Q===D.aaA?j.gaEJ()+" asks":"Elder "+j.gaEJ(),i,i,i,i,i,i,D.fc9,i,i,i)
o=j.db
o=B.a.ap(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aB(B.cg,A.B(A.a([new A.a8(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bA,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.feW,i,i,i)],n),B.E,i,B.e,B.j,0,B.p),1)],n),B.E,i,B.e,B.j,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gboY(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.au(j.a90("Sit down by the fire",j.gboT()),i,i,i)
break
case 1:v=A.au(j.a90("Ask me, Elder",j.gcFR()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gBW()[j.as].b,m<u.length;++m){q=new A.aQ(14,14)
l=new A.ay(D.nL,2.5,B.r,-1)
v.push(A.aB(i,A.p(i,new A.y(u[m],i,D.fek,i,B.L,i,i,i,i,i,i,i),B.f,i,D.b1A,new A.o(D.bnD,i,new A.bJ(l,l,l,l),new A.bk(q,q,q,q),i,i,B.n),i,i,i,i,A4.y3,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bO2(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bX(B.bB,v,B.bs,8,8)
break
case 3:v=j.fr
u=v?B.l3:Af.amA
u=A.X(u,v?B.eh:D.nL,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.eh:D.nL,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gBW().length?"Finish":"Next story"
v=A.B(A.a([u,B.ab,q,j.a90(v,j.gt3(j))],n),B.m,i,B.e,B.j,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gBW().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.fgB,i,i,i)],n)
u=j.cx
if(u>0){u=C.frd(u)
q=C.frd(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.aSq,i,i,i))}v.push(B.N)
v.push(j.a90("Back to the games",new C.bO3(j)))
v=A.x(v,B.m,i,B.e,B.j,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.R,v],n),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.dn4,i,B.n),i,i,i,B.FF,B.bj,i,i,i)},
a90(d,e){var w=null,v=A.m(16),u=A.I(D.dK,B.r,2)
return A.aB(w,A.p(w,A.d(d,w,w,w,w,w,w,Y.Jy,w,w,w),B.f,w,w,new A.o(D.nL,w,u,v,w,w,B.n),w,w,w,w,D.byd,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bmq.prototype={
a6(d,e){An.h3f(d,e.eh(B.J),e.gdF()*0.45,this.b,0,0.4)},
aw(d){return d.b!==this.b}}
C.azV.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.bPp.prototype={}
C.va.prototype={}
C.eP8.prototype={}
C.bPo.prototype={}
C.aUn.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.b.a,j=m.c,i=m.d
if(i.a==null||!J.A(i.b,e)){w=i.a
if(w!=null)w.t()
i.a=C.hXY(e)
i.b=e}w=d.a
i=i.a.b
i===$&&A.c()
i=i.a
i===$&&A.c()
i=i.a
i.toString
w.drawPicture(i)
i=e.a
v=e.b
u=Math.min(i/450,v/900)
J.bq(w.save())
w.translate((i-450*u)/2,(v-900*u)/2)
d.bX(0,u)
m.cvI(d,k)
m.bMb(d,k)
m.cDL(d,k,j)
t=0.8+0.2*Math.sin(k*8)*Math.sin(k*3.7)+j.w*0.4
J.bq(w.save())
w.translate(225,580)
d.oW(0,1,0.42)
s=240*(0.6+0.5*j.w)
$.W()
r=A.K()
q=x.O
p=x.n
r.sar(A.DR(B.J,s,A.a([D.bm3.j(0.55*t),F.M3.j(0.2*t),B.K],q),A.a([0,0.5,1],p),B.x,l,l,0))
d.ae(B.J,s,r)
w.restore()
o=A.a([new A.z(528,new C.bPg(m,d,k,j)),new A.z(540,new C.bPh(m,d,k,j)),new A.z(546,new C.bPi(m,d,k,j)),new A.z(574,new C.bPj(m,d,k,j)),new A.z(612,new C.bPk(m,d,k,j)),new A.z(650,new C.bPl(m,d,k,j)),new A.z(656,new C.bPm(m,d,k,j))],x.bi)
B.d.aV(o,new C.bPn())
for(n=0;n<7;++n)o[n].b.$0()
m.bD7(d,k,j)
m.bPF(d,k)
w.restore()
$.W()
w=A.K()
w.sar(A.DR(new A.t(i/2,v*0.6),e.gamE()*0.75,A.a([B.K,D.baH],q),A.a([0.55,1],p),B.x,l,l,0))
d.aX(new A.a5(0,0,0+i,0+v),w)},
aw(d){return d.c!==this.c||d.d!==this.d},
cvI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.en()
g.df(3)
for(w=d.a,v=0;v<36;++v){u=g.aj()
t=g.aj()
s=Math.sin(e*(1.5+g.aj()*2)+v)
r=g.aj()
s=B.c.j(0.25+0.7*(0.5+0.5*s))
$.W()
q=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
q.r=s.gp(0)
p=q.H()
w.drawCircle(u*450,20+t*300,0.8+r*1.1,p)
p.delete()}o=B.k.F(e,17)/1.2
if(o<1){n=new A.t(60+o*220,70+o*90)
d.br(n,n.aF(0,D.ecq),C.is(B.c.j((1-o)*0.9),1.6))}for(u=e*0.035,t=e*9,s=x.v,m=0;m<3;++m){l=B.k.F(u+m*0.05,1)
r=-20+l*500
q=120+Math.sin(l*9+m)*14+m*12
k=Math.sin(t+m*2)
j=$.W()
i=A.a([],s)
j=new A.aJ(j.r,B.ak,null,null,i)
k=q+k*4
i.push(new A.b1(r-6,k))
h=q-3
i.push(new A.ca(r-2,h,r,q))
i.push(new A.ca(r+2,h,r+6,k))
r=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
r.b=B.ac
r.c=1.6
r.r=D.bdf.gp(0)
r.d=B.bH
r.e=B.dS
p=r.H()
r=j.gbB().a.snapshot()
w.drawPath((j.e=new A.cv(r)).a,p)
p.delete()}},
bMb(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=0.75+0.25*Math.sin(a0*9)*Math.sin(a0*5.3)
for(w=a0*0.12,v=d.a,u=0.78*e,t=0.7*e,s=0;s<3;++s){r=D.awJ[s]
q=r.a
p=r.c
o=q+p*0.1
n=r.b
m=r.d
l=n-m*0.38
k=A.bP(new A.t(o,l),m*0.74,p*0.5)
j=O.LW.j(u)
$.W()
i=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
i.r=j.gp(0)
h=i.H()
v.drawOval(A.bQ(k),h)
h.delete()
p=A.bP(new A.t(o+0,l+m*0.1),m*0.4,p*0.28)
l=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
l.r=O.AO.j(t).gp(0)
h=l.H()
v.drawOval(A.bQ(p),h)
h.delete()
for(p=q*0.01,m=n-m-r.e*0.9,g=0;g<5;++g){f=B.k.F(w+g/5+p,1)
o=Math.sin(f*6+g)
n=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
n.r=D.aeB.j(0.16*(1-f)).gp(0)
h=n.H()
v.drawCircle(q+o*6+f*18,m-f*70,4+f*12,h)
h.delete()}}},
cDL(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
C.bAz(d,D.ecm,0.9,a0,D.hcX,!1,!1,D.aay,1,!1)
w=$.W().r
v=x.v
u=new A.aJ(w,B.ak,e,e,A.a([],v))
u.D(new A.b1(52,470))
u.D(new A.ap(50,486))
u.D(new A.ap(66,486))
u.D(new A.ap(64,470))
u.D(new A.bv())
t=A.K()
t.r=D.agj.gp(0)
d.aJ(u,t)
C.bAz(d,D.eco,0.95,a0,D.hcQ,!1,!1,D.aaz,1,!0)
t=new A.aJ(w,B.ak,e,e,A.a([],v))
t.D(new A.b1(417,510))
t.D(new A.ca(431,532,445,510))
t.D(new A.ap(441,548))
t.D(new A.ca(431,553,421,548))
t.D(new A.bv())
u=A.K()
u.r=F.EQ.gp(0)
d.aJ(t,u)
u=A.bP(D.ecn,8,28)
t=A.K()
t.r=D.boi.gp(0)
d.e1(u,t)
C.bAz(d,new A.t(-30+B.k.F(a0/26,1)*510,492),0.82,a0,D.hd_,!0,!1,D.VA,1,!1)
t=B.k.F(a0/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.e1(A.bP(new A.t(s+q*16,r-6),16,11),C.is(D.bkT,1.8))
u=q<0
C.bAz(d,new A.t(s-q*6,r),0.62,a0,D.hd1,!1,u,D.VA,2.2,!1)
C.bAz(d,new A.t(s-q*32,r+4),0.58,a0+1,D.hcS,!1,u,D.VA,2.2,!1)
this.bSk(d,D.ec5,a0)
for(u=d.a,t=a0*0.5,p=a0*4,o=0;o<3;++o){n=88+o*17+Math.sin(t+o)*6
m=520+B.o.F(o,2)*6
l=Math.max(0,Math.sin(p+o*2))*4
k=A.bP(new A.t(n,m),8,11)
j=o===1
i=j?D.ag8:D.agF
h=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
h.r=i.gp(0)
g=h.H()
u.drawOval(A.bQ(k),g)
g.delete()
k=j?D.ag8:D.agF
j=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
j.r=k.gp(0)
g=j.H()
u.drawCircle(n+5,m+(-3+l),2.6,g)
g.delete()
j=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
j.b=B.ac
j.c=1
j.r=B.aE.gp(0)
j.d=B.bH
j.e=B.dS
g=j.H()
u.drawLine.apply(u,[n+7.5,m+(-2+l),n+10,m+(-1.5+l),g])
g.delete()
n+=-1
j=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
j.b=B.ac
j.c=1
j.r=B.aE.gp(0)
j.d=B.bH
j.e=B.dS
g=j.H()
u.drawLine.apply(u,[n,m+4,n,m+8,g])
g.delete()}f=a0<a1.f
u=A.bP(D.a6c,15+Math.sin(a0*2)*0.8,40)
t=A.K()
t.r=D.aeY.gp(0)
d.e1(u,t)
u=A.bP(D.a6c.aa(0,new A.t(-14,f?-9:-2)),12,15)
t=A.K()
t.r=D.bf9.gp(0)
d.e1(u,t)
t=new A.aJ(w,B.ak,e,e,A.a([],v))
t.D(new A.b1(130,592-(f?16:6)))
t.D(new A.ap(134,592-(f?22:9)))
t.D(new A.ap(138,592-(f?16:6)))
t.D(new A.bv())
u=A.K()
u.r=D.bfh.gp(0)
d.aJ(t,u)
u=D.a6c.aa(0,new A.t(-17,f?-9:-2))
t=A.K()
t.r=B.j8.gp(0)
d.ae(u,1.1,t)
v=new A.aJ(w,B.ak,e,e,A.a([],v))
v.D(new A.b1(168,590))
w=Math.sin(a0*8)
v.D(new A.ca(180,588+w*(f?6:0),178,595))
d.aJ(v,C.is(D.aeY,3.5))},
bSk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=Math.max(0,Math.sin(f*0.6))*9,j=e.aa(0,new A.t(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=j.a,u=j.b,t=u+3,s=f*2,r=u+16,q=d.a,p=0;p<4;++p){o=w[p]
n=Math.sin(s+o)
$.W()
m=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
m.b=B.ac
m.c=2
m.r=D.WN.gp(0)
m.d=B.bH
m.e=B.dS
l=m.H()
q.drawLine.apply(q,[v+o,t,v+(o+n*1.5),r,l])
l.delete()}w=A.bP(j,17,32)
s=$.W()
r=A.K()
r.r=D.EP.gp(0)
d.e1(w,r)
r=A.bP(j.aa(0,D.ebA),7,26)
w=A.ar(D.EP,B.w,0.12)
w.toString
q=A.K()
q.r=w.gp(0)
d.e1(r,q)
s=new A.aJ(s.r,B.ak,null,null,A.a([],x.v))
s.D(new A.b1(v+13,u-3))
s.D(new A.ap(v+22,u-8+k))
s.D(new A.ap(v+20,u+k-0.5))
s.D(new A.ap(v+12,t))
s.D(new A.bv())
t=A.K()
t.r=D.EP.gp(0)
d.aJ(s,t)
t=A.bP(j.aa(0,new A.t(24,-7+k)),9,12)
s=A.K()
s.r=D.EP.gp(0)
d.e1(t,s)
s=-11+k
d.br(j.aa(0,new A.t(22,s)),j.aa(0,new A.t(21,-17+k)),C.is(D.WN,1.6))
d.br(j.aa(0,new A.t(26,s)),j.aa(0,new A.t(28,-16+k)),C.is(D.WN,1.6))
s=j.aa(0,new A.t(26,-8+k))
t=A.K()
t.r=B.w.gp(0)
d.ae(s,0.9,t)
d.br(j.aa(0,new A.t(26,-3+k)),j.aa(0,new A.t(26,1+k)),C.is(D.bhP,1.4))
d.br(j.aa(0,D.eek),j.aa(0,new A.t(-19,-7+Math.sin(f*7)*2)),C.is(D.EP,2.4))},
bPD(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=a5.a,v=0;v<14;++v){u=v*3.141592653589793*2/14
t=Math.cos(u)
s=Math.sin(u)
if(Math.sin(u)<0){t=A.bP(new A.t(225+t*36,574+(s*13+6)),8,11)
$.W()
s=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
s.r=D.bmZ.gp(0)
r=s.H()
w.drawOval(A.bQ(t),r)
r.delete()}}t=A.bP(D.aI1.aa(0,B.cv),17,52)
$.W()
s=A.K()
s.r=D.bak.gp(0)
a5.e1(t,s)
s=A.bP(D.aI1.aa(0,B.cv),12,44)
t=D.bdC.j(0.6+0.3*Math.sin(a6*6))
q=A.K()
q.r=t.gp(0)
a5.e1(s,q)
for(p=0;p<3;++p){u=D.daH[p]
t=225+Math.cos(u)*3
s=Math.cos(u)
q=Math.sin(u)
o=Math.cos(u)
n=Math.sin(u)
m=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
m.b=B.ac
m.c=7
m.r=D.bhh.gp(0)
m.d=B.bH
m.e=B.dS
r=m.H()
w.drawLine.apply(w,[t+s*24,579+q*4,t-o*24,579-n*4,r])
r.delete()
n=Math.cos(u)
o=Math.sin(u)
q=Math.cos(u)
s=Math.sin(u)
m=D.bbk.j(0.6)
l=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
l.b=B.ac
l.c=2
l.r=m.gp(0)
l.d=B.bH
l.e=B.dS
r=l.H()
w.drawLine.apply(w,[t+n*24,579+(o*4-2),t-q*24,579-(s*4+2),r])
r.delete()}k=46+80*a7.w
j=[D.eNx,D.eNZ,D.eOR,D.eP7,D.eOP]
for(t=a6*8,s=a6*15,q=a6*3.3,o=x.v,i=0;i<3;++i){h=[1,0.72,0.42][i]
g=[D.bkw,D.bhb,D.bmr][i]
for(n=i===0,m=1-i*0.15,p=0;p<5;++p){f=j[p]
l=f.b
e=f.c
d=k*l*h*(0.9+0.12*Math.sin(t+e)+0.06*Math.sin(s+e*2))
a0=Math.sin(q+e)*5*(d/k)
a1=225+f.a*m
a2=(12+8*a7.w)*l*h
l=$.W()
e=A.a([],o)
a3=new A.aJ(l.r,B.ak,null,null,e)
e.push(new A.b1(a1-a2,578))
l=a1+a0*0.6
e.push(new A.lB(a1-a2*1.1,578-d*0.45,l-a2*0.2,578-d*0.7,a1+a0,578-d))
e.push(new A.lB(l+a2*0.3,578-d*0.65,a1+a2*1.15,578-d*0.4,a1+a2,578))
e.push(new A.bv())
l=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
l.r=g.j(n?0.9:0.95).gp(0)
r=l.H()
l=a3.gbB().a.snapshot()
w.drawPath((a3.e=new A.cv(l)).a,r)
r.delete()}}for(t=a6*1.5,v=0;v<22;++v){a4=B.k.F(a6*(0.35+B.o.F(v,5)*0.06)+v/22,1)
s=Math.sin(v*1.9+t)
q=a7.w
o=B.o.F(v,3)
n=D.bmA.j((1-a4)*0.9)
$.W()
m=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
m.r=n.gp(0)
r=m.H()
w.drawCircle(225+s*(10+a4*26),564-a4*(110+80*q),1.2+o*0.6,r)
r.delete()}for(t=a6*0.1,s=574-k,v=0;v<6;++v){a4=B.k.F(t+v/6,1)
q=Math.sin(a4*5+v)
o=D.aeB.j(0.1*(1-a4))
$.W()
n=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
n.r=o.gp(0)
r=n.H()
w.drawCircle(225+q*16+a4*12,s-a4*120,7+a4*20,r)
r.delete()}},
bPF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=d.a,r=0;r<16;++r){q=B.k.F(r*83+Math.sin(w+r)*40+v,450)
p=420+B.o.F(r*37,300)+Math.sin(u+r*2)*26
o=Math.max(0,Math.sin(t+r*1.7))
n=D.bop.j(0.18*o)
$.W()
m=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
m.r=n.gp(0)
l=m.H()
s.drawCircle(q,p,5,l)
l.delete()
m=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
m.r=D.biw.j(0.9*o).gp(0)
l=m.H()
s.drawCircle(q,p,1.4,l)
l.delete()}},
c1c(d,e){switch(d){case 0:return e.b?D.hcR:D.hcY
case 1:return e.b?D.hd0:D.hcV
case 2:return D.hcU
case 3:return D.hcT
case 4:return D.hcW
default:return D.hcZ}},
aBf(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Qr(d,e,f,g){var w,v,u,t=this,s=D.a3O[e],r=t.c1c(e,g),q=new C.eP8(),p=f-g.e,o=f<g.f,n=g.r,m=g.c,l=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,k=D.a3O[e],j=e===0
k=B.k.E(((j?D.aHW:D.aI0).a-k.a.a)/160,-1,1)*0.8+l*0.25
q.y=k
q.z=j?0.35:-0.3+l*0.2
k=q.e=k*0.55
q.Q=D.aIn
q.as=D.a6h
w=0
if(j){q.a=m?t.aBf(f,0):0
n=g.a
j=n===3&&g.d?0.7:0
v=n===4?0.8:0
q.b=0.3+j+v
q.c=n===2?0.5:0.1
q.f=l*0.05
if(m){q.r=Math.sin(f*4.2)*1.4
n=new A.t(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
q.as=n
q.Q=new A.t(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else n=D.a6h
if(g.a===3&&!g.d)q.e=k+Math.sin(p*6)*0.35*Math.max(0,1-p/1.8)
if(o){q.a=0.5
q.b=1
n=f*9
q.Q=new A.t(-4-Math.max(0,Math.sin(n))*7,-58)
n=q.as=new A.t(4+Math.max(0,Math.sin(n))*7,-58)}if(!o)n=!(m&&n.b<-50)
else n=!1
q.at=n
n=w}else if(e===1){q.b=0.35
if(m)q.r=Math.sin(f*2.4+1)*1.6
if(o){q.b=1
q.a=0.35+0.35*Math.max(0,Math.sin(f*13))
q.d=0.7
n=f*8
q.Q=new A.t(-4-Math.max(0,Math.sin(n))*7,-56)
q.as=new A.t(4+Math.max(0,Math.sin(n))*7,-56)
n=Math.max(0,Math.sin(n))*3
q.x=n}else{if(g.a===3&&!g.d){q.as=D.ebI
q.e=k+Math.sin(p*5)*0.2*Math.max(0,1-p/2)
q.b=-0.2}n=w}}else{q.b=0.3+0.1*Math.sin(f*0.5+e)
q.w=2+(m?Math.sin(f*1.6+e)*1.6:0)
if(m)q.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){q.c=0.6
q.w=4
if(e===2)q.as=D.ecV
if(e===4)q.as=new A.t(36,-128+Math.sin(f*5)*4)}if(o){q.b=1
q.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
q.d=0.5
n=q.x=Math.max(0,Math.sin(f*9+e*1.3))*9
k=Math.max(0,Math.sin(f*10+e))*8
j=-56-n*0.3
q.Q=new A.t(-3-k,j)
q.as=new A.t(3+k,j)}else{if(f<n){q.a=0.55
q.b=-0.1
q.c=1
q.Q=D.efc
q.as=D.ed_}n=w}if(e===2&&g.x!=null&&f<g.y){q.a=t.aBf(f,5)
q.b=0.4
q.as=new A.t(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){q.a=t.aBf(f,e*3)
q.b=0.5
q.c=0.4}}k=s.a
j=s.b*1.2
w=d.a
J.bq(w.save())
v=k.a
w.translate(v,k.b-n*j)
d.bX(0,j)
j=A.bP(B.dy,18,96)
n=B.w.j(0.28)
$.W()
k=A.K()
k.r=n.gp(0)
d.e1(j,k)
k=A.bP(B.dy,11,70)
j=B.w.j(0.2)
n=A.K()
n.r=j.gp(0)
d.e1(k,n)
d.li(D.aNS,A.K())
C.hSF(d,r,q,f,e)
u=225-v>=0?1:-1
n=A.K()
n.a=B.VS
n.sar(A.mw(new A.t(u*70,-60),new A.t(-u*70,-60),A.a([D.afv.j(0.5),D.afv.j(0.12),D.bhq.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aX(D.aNS,n)
w.restore()
w.restore()},
bD7(d,e,f){var w=new C.bPf(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gda(d){return this.c}}
C.aeK.prototype={
a3(){return"_Stand."+this.b}}
C.acI.prototype={}
C.le.prototype={}
C.bOr.prototype={
bxP(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aP()
this.c=s},
aks(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aV(r,new C.bOs())
return r},
aKR(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
boK(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.M)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
aEm(d){var w,v,u=A.aY(x.N),t=d,s=0
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
galn(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aV(w,new C.bOt(this))
return B.d.gI(w)}}
C.aXe.prototype={}
C.asJ.prototype={}
C.z6.prototype={}
C.ajA.prototype={
gaDx(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Z(w,new C.bJg(),A.S(w).k("Z<1>")).gL(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ag(){var w=this
return A.G(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.LY.prototype={
ganO(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(t.gaDx(0))s.push(t)}return s},
ag(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.X)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.M)(w),++s){r=w[s]
p.push(A.G(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.G(["id",this.a,"title",q,"qs",p],u,t)},
cWx(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.ganO(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.M)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.le(B.a.i(s.a),p,B.d.cD(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.a5m.prototype={
B(d){var w=null
return new A.a8(1/0,this.c,A.b4(w,w,w,new C.bgK(w),B.az),w)}}
C.bgK.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.dfR[B.o.F(m,6)]
j=$.W()
i=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
i.r=k.gp(0)
h=i.H()
t.drawRect(A.bQ(new A.a5(l,0,l+v,u)),h)
h.delete()
if(B.o.F(m,3)===0){i=A.a([],n)
g=new A.aJ(j.r,B.ak,null,null,i)
j=l+q
i.push(new A.b1(j,f))
i.push(new A.ap(l+o,r))
i.push(new A.ap(j,p))
i.push(new A.ap(l+s,r))
i.push(new A.bv())
j=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
j.r=B.c.j(0.85).gp(0)
h=j.H()
j=g.gbB().a.snapshot()
t.drawPath((g.e=new A.cv(j)).a,h)
h.delete()}++m}},
aw(d){return!1}}
C.FM.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Oz,w,w,w,new C.des(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a1,w,w,w,D.fa3,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c5(w,D.WC,A.p(w,A.bm(!0,A.x(A.a([D.bYm,new A.D(D.bAx,A.B(u,B.m,w,B.e,B.j,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),B.f,w,w,D.b3a,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.a1_.prototype={
B(d){var w=null,v=this.d,u=C.frd(v),t=C.i3y(v),s=B.c.j(0.08),r=A.m(18),q=A.I(D.dK.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fcv,w,w,w)],x.p)
if(this.e)p.push(D.eh2)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fK,w,w,w))
if(t!=null)p.push(new A.D(B.tU,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,M.DK,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bC,w,w,w)}}
C.V8.prototype={
U(){return new C.bjn(A.U(x.N,x.S),B.o.F(Date.now(),1e5))},
cSw(d){return this.f.$1(d)},
gdY(){return this.d}}
C.bjn.prototype={
gS9(){var w=this.d
return w===$?this.d=this.a.c:w},
a_(){this.a1()
this.OU()},
OU(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$OU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bOI(u.a.d),$async$OU)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<5)){w=5
break}r=D.cfO[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bOH(p,(o===$?u.d=q.c:o).a,r),$async$OU)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.dTT(u,n))
return A.h(null,v)}})
return A.i($async$OU,v)},
AC(d){return this.cjC(d)},
cjC(d){var w=0,v=A.j(x.H),u=this,t
var $async$AC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a3(t,!1).cg(A.e_(new C.dTU(d),!1,null,x.H)),$async$AC)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.OU()
return A.h(null,v)}})
return A.i($async$AC,v)},
gb3w(){var w,v,u,t=C.akH(this.gS9()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)s.push(B.a.i(w[u].b))
return s},
a1t(d){return this.cqO(d)},
cqO(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1t=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.X)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.M)(d),++s)r.push(d[s].ag())
w=2
return A.b(u.a.cSw(r),$async$a1t)
case 2:if(u.c!=null)u.m(new C.dTV(u,r))
return A.h(null,v)}})
return A.i($async$a1t,v)},
Oc(d){return this.bN7(d)},
bN7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Oc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.h0Y(t.gS9())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.LY("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a3(s,!1).cg(A.e_(new C.dTR(q),!1,null,r)),$async$Oc)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.M)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bg(j,new C.dTS(p))
o=s.length
B.d.c9(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a1t(A.d1(s,0,A.dB(2,"count",x.S),r).dA(0)),$async$Oc)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Oc,v)},
WY(d,e){return this.bKJ(0,e)},
bKJ(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$WY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.dTQ(e),o,null,!0,!0,x.y),$async$WY)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.h0Y(u.gS9()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a1t(o),$async$WY)
case 5:case 3:return A.h(null,v)}})
return A.i($async$WY,v)},
arh(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.dTN(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.I(B.aZ,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cv,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.U0,p,p,p),B.b0],s)
q=A.m(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.faW,p,p,p),B.f,p,p,new A.o(B.i7,p,p,q,p,p,B.n),p,p,p,p,B.BA,p,p,p))
return A.aB(p,A.dd(A.p(p,A.x(A.a([A.B(r,B.m,p,B.e,B.j,0,p,p),B.b0,A.d(e,p,2,p,p,p,p,D.fis,p,p,p),B.cO,A.d(f,p,3,B.a1,p,p,p,D.fbC,p,p,p)],s),B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.ax,B.aD,B.x,w,p,p),B.n),p,p,p,p,B.y2,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
arg(d,e,f,g,h,i){return this.arh(d,e,f,g,h,i,null)},
B(a1){var w,v,u,t,s=this,r=null,q=C.akH(s.gS9()),p=s.gS9(),o=C.frd(s.e),n=C.h0Y(p),m=s.a.e&&J.ad(p.z)<2,l=new C.dTW(s),k=C.hqe(p,1).length,j=C.hnj(p,1).length,i=B.c.j(0.07),h=A.m(20),g=A.I(D.dK.j(0.5),B.r,1),f=A.d(o.b,r,r,r,r,r,r,H.a8T,r,r,r),e=A.d(o.a,r,r,r,r,r,r,D.fg3,r,r,r),d=q.b.length,a0=x.p
h=A.p(r,A.B(A.a([f,B.bc,A.E(A.x(A.a([e,A.d(d>=3?"The games are made from the "+d+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,H.a8Q,r,r,r)],a0),B.E,r,B.e,B.j,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.t2,r,r,r),D.fE_],a0),B.m,r,B.e,B.j,0,B.p)],a0),B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(i,r,g,h,r,r,B.n),r,r,r,r,B.bC,r,r,r)
g=s.arg("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aC,new C.dTX(s,p),l.$1("kahoot"))
i=s.arg("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.nL,new C.dTY(s,p),l.$1("fire"))
j=j>=3?new C.dTZ(s,p):r
j=s.arh("\ud83e\ude98","Memory Drums","Flip the drums and match every person with the clue about them.",B.cM,j,l.$1("memory"),"Add at least 3 people with parents, children, spouses, jobs or birthplaces.")
k=k!==0?new C.dU_(s,p):r
k=A.a([h,B.aO,D.fHV,B.N,A.kG(0.98,A.a([g,i,j,s.arh("\ud83c\udf33","Elder Order","Who is older? Put the children and the generations in the right order.",B.eh,k,l.$1("order"),"Add a parent with two children, or a family with more than one generation."),s.arg("\ud83d\udcdc","Family Test","A real test of 10 questions with a grade and a certificate at the end.",B.d8,new C.dU0(s,p),l.$1("test"))],a0),2,12,12,r,B.dP,!0),B.d5,A.B(A.a([D.bCf,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fb_,r,r,r)],a0),B.m,r,B.e,B.j,0,r,r),B.N],a0)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.M)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aQ(18,18)
u=new A.ay(B.aZ,1,B.r,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.fp5,B.bc,new A.bA(1,B.bd,A.x(A.a([new A.y(g,r,B.hI,r,r,r,r,B.a1,r,1,r,r),new A.y(""+v.ganO(0).length+" questions \xb7 Kahoot style",r,M.DK,r,r,r,r,r,r,r,r,r)],a0),B.E,r,B.e,B.j,0,B.p),r)],a0)
if(v.ganO(0).length>=2){f=D.mn.j(0.2)
t=new A.ay(D.mn,1,B.r,-1)
g.push(A.aB(r,A.p(r,A.X(B.iu,D.mn,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bJ(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dU1(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=D.dK.j(0.2)
t=new A.ay(D.dK,1,B.r,-1)
f=A.aB(r,A.p(r,A.X(B.j9,D.dK,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bJ(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dU2(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fj.j(0.2)
t=new A.ay(B.fj,1,B.r,-1)
B.d.v(g,A.a([B.bn,f,B.bn,A.aB(r,A.p(r,A.X(B.ec,B.fj,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bJ(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dU3(s,v),r,r,r,r,r,r,!1,B.a4)],a0))}k.push(A.p(r,new A.cb(B.aM,B.e,B.j,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bJ(u,u,u,u),new A.bk(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bj,r,r,r))}if(s.a.e){j=m?new C.dU4(s):new C.dU5(a1)
i=A.m(18)
h=A.I(m?D.dK:B.aZ,B.r,2)
g=m?D.dK.j(0.12):B.dr
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aB(r,A.p(r,A.au(A.d(f,r,r,r,r,r,r,A.l(r,r,m?D.dK:B.aB,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.MF,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fIR)
k.push(B.aA)
k.push(D.apm)
return new C.FM("Family Games \xb7 "+p.b,A.ct(k,r,D.bwz,r,r,B.ag,!1),B.hT,r)}}
C.ZI.prototype={
a3(){return"_KPhase."+this.b}}
C.akI.prototype={
U(){return new C.akJ(D.aWB)},
gd7(){return this.e}}
C.akJ.prototype={
t(){var w=this.at
if(w!=null)w.a4(0)
w=this.ax
if(w!=null)w.a4(0)
this.a2()},
hE(d){var w,v=this
v.m(new C.bOF(v))
w=v.at
if(w!=null)w.a4(0)
v.at=A.dq(B.fO,new C.bOG(v))},
aNv(){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new C.bOv(w))
v=w.at
if(v!=null)v.a4(0)
w.at=A.dq(B.fp,new C.bOw(w))},
aCI(d){var w
if(this.d!==D.aae)return
w=this.at
if(w!=null)w.a4(0)
this.b3s(d)},
b3s(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bOB(u,v,d))
u=v.ax
if(u!=null)u.a4(0)
v.ax=A.cM(B.r7,v.gkr(v))},
cFo(d){var w=this
if(w.d!==D.Vd)return
if(w.e+1>=w.a.w.length)w.XI()
else{w.m(new C.bOC(w))
w.aNv()}},
XI(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$XI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a4(0)
p=u.x
t=u.a.w.length
s=C.h3B(p,u.w,t)
u.m(new C.bOy(u,s))
w=2
return A.b(C.Mc(u.a.e,s),$async$XI)
case 2:r=e
t=u.a
w=3
return A.b(C.Md(t.e,t.f,t.r,u.f),$async$XI)
case 3:q=e
if(u.c!=null)u.m(new C.bOz(u,r,q))
return A.h(null,v)}})
return A.i($async$XI,v)},
cG8(){var w,v,u,t,s=this,r=s.a,q=new A.en()
q.df(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.bj("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.ec(r,q)
for(r=A.d1(r,0,A.dB(4,"count",x.S),A.S(r).c),u=r.$ti,r=new A.bS(r,r.gL(0),u.k("bS<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.bj(t,B.k.V(w*(0.35+q.aj()*0.5)),!1))}B.d.aV(v,new C.bOD())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.aWB===r){w=A.a([D.fEn,B.R,A.d(s,t,t,t,t,t,t,B.Up,B.L,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fb7,t,t,t))
w.push(B.aA)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.A4,B.L,t,t))
w.push(B.dY)
w.push(C.Qq("Play",u.geY(u),D.dK,B.iu,D.iJ))
w=A.au(new A.D(B.eC,A.x(w,B.m,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.aWC===r){w=A.au(A.d(""+u.z,t,t,t,t,t,t,D.fiU,t,t,t),t,t,t)
break A}if(D.aae===r||D.Vd===r){w=u.cmc()
break A}if(D.aWD===r){w=u.c7z()
break A}w=t}return new C.FM(s,w,B.hT,t)},
cmc(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Vd,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.fc6,j,j,j),B.b0],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.JH,j,j,j))
g.push(B.as)
f=A.m(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iX,j,j,j),B.f,j,j,new A.o(B.bz,j,j,f,j,j,B.n),j,j,j,j,B.MK,j,j,j))
g=A.B(g,B.m,j,B.e,B.j,0,j,j)
f=A.m(6)
w=i?0:B.k.E(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.li(B.bz,j,k.as<5?B.fj:D.dK,9,j,w,j),B.aq)
w=A.m(22)
v=A.I(D.dK,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.mn:D.tq,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fac,B.L,j,j)],h),B.m,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fkU,B.L,j,j)
w=A.E(A.p(j,A.au(u,j,j,j),B.f,j,j,new A.o(D.xI,j,v,w,j,j,B.n),j,j,j,j,B.fb,j,j,1/0),3)
v=A.a([],h)
for(u=k.gkr(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bOA(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.azh[o]
m=new A.aQ(16,16)
l=new A.ay(i&&t===s.c?B.c:B.K,4,B.r,-1)
r=A.a([new A.y(D.azv[o],j,D.fc5,j,j,j,j,j,j,j,j,j),B.as,new A.bA(1,B.bd,new A.y(r[t],j,D.fb4,j,j,j,j,B.a1,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(Q.anW)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bQo)
v.push(A.aB(j,new A.RR(A.p(j,new A.cb(B.aM,B.e,B.j,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bJ(l,l,l,l),new A.bk(m,m,m,m),S.axJ,j,B.n),j,j,j,j,B.fQ,j,j,j),p,B.b8,B.a2,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.ad,w,B.ad,A.E(A.kG(1.45,v,2,10,10,j,B.dP,!1),4)],h)
if(i)h.push(D.egm)
return new A.D(B.MO,A.x(h,B.m,j,B.e,B.j,0,B.p),j)},
c7z(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cG8(),m=x.p,l=A.a([D.b6X,A.au(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.t2,o,o,o),o,o,o),A.au(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.aRc,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?D.dK.j(0.25):B.dr
u=new A.aQ(14,14)
t=n[w]
s=t.c
r=new A.ay(s?D.dK:B.bz,1,B.r,-1)
q=w<3?D.d8u[w]:""+(w+1)
s=s?B.u:B.O
l.push(A.p(o,new A.cb(B.aM,B.e,B.j,B.m,o,B.p,o,0,A.a([new A.a8(34,o,new A.y(q,o,B.md,o,o,o,o,o,o,o,o,o),o),new A.bA(1,B.bd,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.iX,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bJ(r,r,r,r),new A.bk(u,u,u,u),o,o,B.n),o,o,o,B.cu,B.eP,o,o,o))}l.push(B.R)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.a1_(m,v,p.CW,o))
l.push(B.aO)
l.push(A.au(C.Qq("Back to the games",new C.bOx(p),D.dK,B.mB,D.iJ),o,o,o))
return A.ct(l,o,B.fb,o,o,B.ag,!1)}}
C.akK.prototype={
U(){return new C.akL(A.a([],x.t))},
gd7(){return this.d}}
C.akL.prototype={
gUe(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.h19(w.c,10,w.e,!0)
u.d!==$&&A.bH()
u.d=v
t=v}return t},
gao4(d){var w,v,u=A.a([],x.t)
for(w=this.e,v=0;v<w.length;++v)if(w[v]===this.gUe()[v].c)u.push(1)
return u.length},
cGM(d){return this.m(new C.bOL(this,d))},
nU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$nU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=t.r
if(q<0){w=1
break}t.e.push(q)
q=t.f
s=t.gUe()
w=q+1>=s.length?3:5
break
case 3:r=C.h3B(t.gao4(0),0,s.length)
t.m(new C.bOM(t,r))
w=6
return A.b(C.Mc(t.a.d,r),$async$nU)
case 6:t.x=f
q=t.a
w=7
return A.b(C.Md(q.d,q.c.a,"test",t.gao4(0)*10),$async$nU)
case 7:t.z=f
if(t.c!=null)t.m(new C.bON())
w=4
break
case 5:t.m(new C.bOO(t))
case 4:case 1:return A.h(u,v)}})
return A.i($async$nU,v)},
bmL(){var w=this.gao4(0)/this.gUe().length*100
if(w>=90)return D.eKE
if(w>=75)return D.eIQ
if(w>=60)return D.ezW
if(w>=45)return D.eDb
return D.euw},
B(d){var w=this,v=w.a.c,u=w.y?w.cpC():w.cgB()
return new C.FM("Family Test \xb7 "+v.b,u,B.hT,null)},
cgB(){var w,v,u,t,s,r,q,p=this,o=null,n=p.gUe(),m=p.f,l=n[m],k=n.length,j=A.d("Question "+(m+1)+" of "+k,o,o,o,o,o,o,D.JH,o,o,o)
k=A.bx(A.m(6),A.li(B.bz,o,D.mn,8,o,m/k,o),B.aq)
m=A.m(18)
w=A.I(D.dK,B.r,2)
v=x.p
m=A.a([j,B.am,k,B.aO,A.p(o,A.d(l.a,o,o,o,o,o,o,D.flD,o,o,o),B.f,o,o,new A.o(D.xI,o,w,m,o,o,B.n),o,o,o,o,B.fb,o,o,1/0),B.aA],v)
for(k=l.b,u=0;u<k.length;++u){j=p.r===u?D.dK.j(0.25):B.dr
w=new A.aQ(14,14)
t=p.r===u
s=t?D.dK:B.aZ
r=new A.ay(s,t?2.5:1,B.r,-1)
t=t?D.dK:B.aZ
s=A.l_(65+u)
q=p.r===u?D.iJ:B.c
m.push(A.aB(o,A.p(o,new A.cb(B.aM,B.e,B.j,B.m,o,B.p,o,0,A.a([new A.pG(new A.y(s,o,new A.F(!0,q,o,o,o,o,o,B.u,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),t,o,14,o),B.bc,new A.bA(1,B.bd,new A.y(k[u],o,D.fhC,o,o,o,o,o,o,o,o,o),o)],v),o),B.f,o,o,new A.o(j,o,new A.bJ(r,r,r,r),new A.bk(w,w,w,w),o,o,B.n),o,o,o,B.d3,B.bC,o,o,o),B.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.bOJ(p,u),o,o,o,o,o,o,!1,B.a4))}m.push(B.b0)
n=p.f+1>=n.length?"Hand in the test":"Next question"
m.push(A.au(C.Qq(n,p.r<0?o:p.gt3(p),D.dK,B.kE,D.iJ),o,o,o))
return new A.D(D.bx6,A.x(m,B.E,o,B.e,B.j,0,B.p),o)},
cpC(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.bmL(),h=A.a([],x.t)
for(w=k.e,v=0;v<w.length;++v)if(w[v]!==k.gUe()[v].c)h.push(v)
u=A.m(22)
t=A.I(D.dK,B.r,4)
s=A.d(k.a.c.b,j,j,j,j,j,j,D.fg0,B.L,j,j)
r=A.d(i.a,j,j,j,j,j,j,D.f9K,j,j,j)
q=A.d(i.b,j,j,j,j,j,j,D.flm,j,j,j)
p=k.gao4(0)
o=k.gUe()
n=x.p
u=A.p(j,A.x(A.a([D.fDe,B.au,s,D.fyx,B.R,r,q,B.am,A.d(""+p+" of "+o.length+" right",j,j,j,j,j,j,D.aSq,j,j,j),B.N,D.apm],n),B.m,j,B.e,B.j,0,B.p),B.f,j,j,new A.o(D.xI,j,t,u,j,j,B.n),j,j,j,j,B.fb,j,j,j)
t=k.w
s=k.x
if(s===0)s=t
s=A.a([u,B.aA,new C.a1_(t,s,k.z,j)],n)
if(h.length!==0){u=A.a([B.aO,D.fy9,B.N],n)
for(t=h.length,m=0;m<h.length;h.length===t||(0,A.M)(h),++m){v=h[m]
r=new A.aQ(14,14)
l=new A.ay(B.bz,1,B.r,-1)
q=o[v]
u.push(A.p(j,A.x(A.a([new A.y(q.a,j,B.fK,j,j,j,j,j,j,j,j,j),B.au,new A.y("You said: "+q.b[w[v]],j,D.fh7,j,j,j,j,j,j,j,j,j),new A.y(q.d,j,D.fjf,j,j,j,j,j,j,j,j,j)],n),B.E,j,B.e,B.j,0,B.p),B.f,j,j,new A.o(B.dr,j,new A.bJ(l,l,l,l),new A.bk(r,r,r,r),j,j,B.n),j,j,j,B.cu,B.bj,j,j,j))}B.d.v(s,u)}s.push(B.aA)
s.push(A.au(C.Qq("Back to the games",new C.bOK(k),D.dK,B.mB,D.iJ),j,j,j))
return A.ct(s,j,B.bR,j,j,B.ag,!1)}}
C.azA.prototype={}
C.an0.prototype={
U(){return new C.aXd(A.a([],x.t))},
gd7(){return this.d}}
C.aXd.prototype={
gaHz(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hnj(w.c,w.e)
u.d!==$&&A.bH()
u.d=v
t=v}return t},
gSy(){var w,v=this,u=v.e
if(u===$){w=v.bJJ()
v.e!==$&&A.bH()
v.e=w
u=w}return u},
bJJ(){var w,v,u,t,s,r=x.cy,q=A.a([],r)
for(w=this.gaHz(),v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s=t.a
B.d.v(q,A.a([new C.azA(s,t.b,!0),new C.azA(s,t.c,!1)],r))}r=new A.en()
r.df(this.a.e)
B.d.ec(q,r)
return q},
cMV(d){var w,v,u,t,s=this
if(!s.y){w=s.gSy()[d]
w=w.d||w.e}else w=!0
if(w)return
s.m(new C.bYA(s,d))
w=s.as
if(w.length===2){++s.f
v=s.gSy()
u=v[w[0]]
t=v[w[1]]
if(u.a===t.a&&u.c!==t.c){s.m(new C.bYB(s,u,t))
if(s.r===s.gaHz().length)s.a31()}else{s.y=!0
A.cM(B.ai1,new C.bYC(s))}}},
a31(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$a31=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.f
r=u.gaHz().length
q=u.r
s=s<=r*2+2?15:0
t=q*5+s
u.m(new C.bYw(u,t))
w=2
return A.b(C.Mc(u.a.d,t),$async$a31)
case 2:u.x=e
s=u.a
w=3
return A.b(C.Md(s.d,s.c.a,"memory",Math.max(1,200-u.f*5)),$async$a31)
case 3:u.Q=e
if(u.c!=null)u.m(new C.bYx())
return A.h(null,v)}})
return A.i($async$a31,v)},
B(d){var w,v,u=this,t=null,s=u.z,r=""+u.f
if(s){s=A.au(A.d(r+" moves",t,t,t,t,t,t,D.aRc,t,t,t),t,t,t)
r=u.w
w=u.x
if(w===0)w=r
w=A.ct(A.a([D.b7B,D.b7Y,s,B.aO,new C.a1_(r,w,u.Q,t),B.aO,A.au(C.Qq("Back to the games",new C.bYy(d),D.dK,B.mB,D.iJ),t,t,t)],x.p),t,B.a9,t,t,B.ag,!1)
s=w}else{s=A.d("Match each person with the clue about them \xb7 "+r+" moves",t,t,t,t,t,t,B.A2,B.L,t,t)
r=x.p
w=A.a([],r)
for(v=0;v<u.gSy().length;++v)w.push(u.bN4(v))
s=new A.D(B.MO,A.x(A.a([s,B.R,A.E(A.kG(0.8,w,3,10,10,t,t,!1),1)],r),B.m,t,B.e,B.j,0,B.p),t)}return new C.FM("Memory Drums",s,B.hT,t)},
bN4(d){var w=null,v=this.gSy()[d],u=v.d||v.e?1:0
return A.aB(w,A.mh(new C.bYu(v),w,B.b8,B.ju,w,w,new A.bp(w,u,x.e7),x.gR),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bYv(this,d),w,w,w,w,w,w,!1,B.a4)}}
C.bdM.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
$.W()
w=A.K()
w.r=D.dK.j(0.5).gp(0)
w.b=B.ac
w.c=2
for(v=e.b,u=d.a,t=e.a,s=x.v,r=10;r<v;r+=18){q=$.W()
p=A.a([],s)
o=new A.aJ(q.r,B.ak,null,null,p)
p.push(new A.b1(0,r))
for(n=0;n<t;n+=12){q=(B.o.an(n,12)&1)===0?-5:5
q=new A.ap(n+6,r+q)
p.push(q)
m=o.f
if(m!=null)q.bA(m)
q=o.e
if(q!=null)q.a.delete()
o.e=null}l=w.H()
q=o.e
u.drawPath((q==null?o.e=new A.cv(o.gbB().a.snapshot()):q).a,l)
l.delete()}},
aw(d){return!1}}
C.aki.prototype={
U(){return new C.akj(A.a([],x.t))},
gd7(){return this.d}}
C.akj.prototype={
ga6l(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hqe(w.c,w.e)
u.d!==$&&A.bH()
u.d=v
t=v}return t},
b5x(d){var w,v,u,t,s=this.ga6l()
if(d>=s.length)return A.a([],x.t)
w=s[d].c.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.en()
u.df(this.a.e+d)
B.d.ec(s,u)
if(s.length>1){u=A.a([],x.t)
for(v=0;v<s.length;++v)u.push(s[v]===v?1:0)
u=B.d.f9(u,new C.bMh())===s.length}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
cWc(d){var w,v,u,t,s,r,q,p,o=this
if(o.z||B.d.q(o.x,d))return
o.m(new C.bMq(o,d))
w=o.x.length
v=o.ga6l()
if(w===v[o.e].c.length){u={}
w=A.a([],x.t)
for(t=o.x,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
w.push(v[o.e].d[q])}u.a=!0
for(p=1;p<w.length;++p)if(w[p]<w[p-1])u.a=!1
o.m(new C.bMr(u,o))}},
jO(d){return this.m(new C.bMp(this))},
nU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$nU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.ga6l().length
w=r+1>=q?3:4
break
case 3:r=t.f
q=r===q?15:0
s=r*10+q
t.m(new C.bMm(t,s))
w=5
return A.b(C.Mc(t.a.d,s),$async$nU)
case 5:t.w=f
q=t.a
w=6
return A.b(C.Md(q.d,q.c.a,"order",t.f*10),$async$nU)
case 6:t.at=f
if(t.c!=null)t.m(new C.bMn())
w=1
break
case 4:t.m(new C.bMo(t))
case 1:return A.h(u,v)}})
return A.i($async$nU,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Elder Order",a2=null
if(a0.as){w=A.au(A.d(""+a0.f+" of "+a0.ga6l().length+" rounds right",a2,a2,a2,a2,a2,a2,B.t2,a2,a2,a2),a2,a2,a2)
v=a0.r
u=a0.w
if(u===0)u=v
return new C.FM(a1,A.ct(A.a([D.b6R,w,B.aO,new C.a1_(v,u,a0.at,a2),B.aO,A.au(C.Qq("Back to the games",new C.bMi(a3),D.dK,B.mB,D.iJ),a2,a2,a2)],x.p),a2,B.a9,a2,a2,B.ag,!1),B.hT,a2)}w=a0.ga6l()
t=w[a0.e]
v=A.a([],x.t)
for(u=t.c,s=0;s<u.length;++s)v.push(s)
B.d.aV(v,new C.bMj(t))
r=A.d("Round "+(a0.e+1)+" of "+w.length,a2,a2,a2,a2,a2,a2,D.JH,a2,a2,a2)
q=A.d(t.a,a2,a2,a2,a2,a2,a2,B.md,a2,a2,a2)
p=A.d(t.b,a2,a2,a2,a2,a2,a2,B.hf,a2,a2,a2)
o=x.p
n=A.a([],o)
m=a0.y
if(m===$)m=a0.y=a0.b5x(0)
l=m.length
k=0
for(;k<m.length;m.length===l||(0,A.M)(m),++k){j=m[k]
if(B.d.q(a0.x,j))if(a0.z)i=a0.Q?D.mn:D.tq
else i=D.dK
else i=B.bz
h=new A.aQ(18,18)
g=new A.ay(B.d.q(a0.x,j)?B.c:D.dK.j(0.6),2,B.r,-1)
f=A.a([],o)
if(B.d.q(a0.x,j))f.push(new A.pG(new A.y(""+(B.d.cD(a0.x,j)+1),a2,D.fdx,a2,a2,a2,a2,a2,a2,a2,a2,a2),B.c,a2,12,a2))
if(B.d.q(a0.x,j))f.push(B.ab)
e=u[j]
d=B.d.q(a0.x,j)?D.iJ:B.c
f.push(new A.y(e,a2,new A.F(!0,d,a2,a2,a2,a2,17,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2,a2,a2,a2,a2,a2,a2,a2,a2))
n.push(A.aB(a2,A.db(a2,new A.cb(B.aM,B.e,B.P,B.m,a2,B.p,a2,0,f,a2),a2,a2,B.b8,new A.o(i,a2,new A.bJ(g,g,g,g),new A.bk(h,h,h,h),a2,a2,B.n),B.a2,a2,a2,a2,B.y8,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.bMk(a0,j),a2,a2,a2,a2,a2,a2,!1,B.a4))}u=A.a([r,B.am,q,p,B.bv,A.bX(B.bB,n,B.bs,12,12),B.b0],o)
if(a0.z){r=(a0.Q?D.mn:D.tq).j(0.2)
q=A.m(16)
p=a0.Q
n=A.I(p?D.mn:D.tq,B.r,1)
u.push(A.p(a2,A.d(p?"Yes! That is the right order. The elders smile.":"Not quite. The right order is: "+new A.N(v,new C.bMl(t),x.cM).aG(0,", then ")+".",a2,a2,a2,a2,a2,a2,D.fkx,a2,a2,a2),B.f,a2,a2,new A.o(r,a2,n,q,a2,a2,B.n),a2,a2,a2,a2,B.bC,a2,a2,1/0))}u.push(B.ad)
v=A.a([],o)
if(!a0.z&&a0.x.length!==0)B.d.v(v,A.a([C.Qq("Start again",a0.gcVJ(a0),B.aZ,a2,B.c),B.as],o))
if(a0.z){w=a0.e+1>=w.length?"See my result":"Next round"
v.push(C.Qq(w,a0.gt3(a0),D.dK,B.kE,D.iJ))}u.push(A.au(A.B(v,B.m,a2,B.e,B.P,0,a2,a2),a2,a2,a2))
return new C.FM(a1,new A.D(B.bR,A.x(u,B.E,a2,B.e,B.j,0,B.p),a2),B.hT,a2)}}
C.SP.prototype={
U(){return new C.akG(A.U(x.de,x.er))}}
C.akG.prototype={
gCy(){var w,v=this,u=v.d
if(u===$){w=C.h6A(v.a.c.ag())
v.d!==$&&A.bH()
v.d=w
u=w}return u},
gkW(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCy().b
v=$.aw()
u.e!==$&&A.bH()
t=u.e=new A.as(new A.ba(w,B.b4,B.aN),v)}return t},
ca4(d){return this.f.c4(0,d,new C.bOf(d))},
a_(){this.a1()
var w=this.gCy().c
if(w.length===0)w.push(C.fTJ(null,0,20,""))},
t(){var w,v,u=this.gkW(0)
u.S$=$.aw()
u.P$=0
for(u=this.f,u=new A.dt(u,u.r,u.e);u.C();)for(w=J.aW(u.d);w.C();){v=w.gT(w)
v.S$=$.aw()
v.P$=0}this.a2()},
cFe(){if(this.gCy().c.length>=12)return
this.m(new C.bOg(this))},
js(d){var w,v,u=this,t=u.gCy()
t.b=B.a.i(u.gkW(0).a.a)
w=t.ganO(0)
if(t.b.length===0||w.length<2){u.c.J(x.q).f.R(D.f3g)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a3(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bOq(),r=x.p,q=A.a([A.bM(!1,D.ftV,t,t,!0,t,t,u.gbmS(u),t,t)],r),p=A.a([D.fIs,B.ad,A.aM(t,B.V,!1,t,!0,B.t,t,A.aO(),u.gkW(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.aj,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.a9,t,t,t,t,t,t,t,t,t,t,t,B.fK,!0,B.a5,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gCy().c.length,w<v;++w)B.d.v(p,A.a([new A.fd(new C.bOp(u,w,s),t)],r))
if(v<12)p.push(A.au(C.Qq("\uff0b Add a question",u.gcFd(),B.aZ,t,B.c),t,t,t))
return new C.FM("Make your game",A.ct(p,t,D.bww,t,t,B.ag,!1),q,t)}}
C.apF.prototype={
U(){return new C.aDp(A.a([],x._))},
bs(){return this.r.$0()},
pX(){return this.w.$0()},
gdY(){return this.c}}
C.aDp.prototype={
a_(){var w,v
this.a1()
this.vV()
w=this.a
v=w.c
if(v.length!==0)C.a77(v,w.e,w.d.w)},
vL(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h3v(r,t.e,!1,s.w,new C.dVv(u),null,s),$async$vL)
case 2:w=3
return A.b(u.vV(),$async$vL)
case 3:return A.h(null,v)}})
return A.i($async$vL,v)},
a_E(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h3v(r,t.e,!0,s.w,new C.dVu(u),null,s),$async$a_E)
case 2:w=3
return A.b(u.vV(),$async$a_E)
case 3:return A.h(null,v)}})
return A.i($async$a_E,v)},
vV(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AQ(q.a.c),$async$vV)
case 7:p=e
if(q.c!=null)n=q.e||J.cK(p)
else n=!1
if(n)q.m(new C.dVx(q,p))
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
return A.b(C.GB(q.a.c).d9(0,B.pZ),$async$vV)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dVy(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dVz(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vV,v)},
Oy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Oy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.J(s).f.R(D.f2R)
w=3
return A.b(C.GB(t.a.c),$async$Oy)
case 3:r=e
w=4
return A.b(C.fJB(t.a.c,r),$async$Oy)
case 4:q=e
w=5
return A.b(C.GB(t.a.c),$async$Oy)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dVt(t,p))
o=t.c.J(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b3(null,null,null,q?B.dB:B.cR,null,B.t,null,s,null,B.mw,null,null,null,null,null,null,null,null,null,null))
t.a.pX()
case 1:return A.h(u,v)}})
return A.i($async$Oy,v)},
HZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ibE(l),$async$HZ)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hFZ(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b__(q,p.e,l,"Each family tree costs $"+B.k.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HZ)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hmS(r)
o=Date.now()
n=t.a.c
m=new C.kF(l,r.toUpperCase(),p,!0,B.V,D.CE,new A.T(o,0,!1),0,n,D.u0,B.c4)
w=5
return A.b(C.a2C(n,m),$async$HZ)
case 5:w=6
return A.b(t.vV(),$async$HZ)
case 6:t.a.bs()
t.a.pX()
if(t.c==null){w=1
break}t.Ew(m)
case 1:return A.h(u,v)}})
return A.i($async$HZ,v)},
Ew(d){return this.ceY(d)},
ceY(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Ew=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AQ(u.a.c),$async$Ew)
case 2:n=l.pP(k.dJ(f,new C.dVw(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.apz(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Ew)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2C(u.a.c,o),$async$Ew)
case 6:case 5:w=7
return A.b(u.vV(),$async$Ew)
case 7:u.a.pX()
return A.h(null,v)}})
return A.i($async$Ew,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tT(p)
if(r.e)return A.au(A.mQ(q,p?B.bq:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.co(r.d)){w=p?B.e1:B.c
v=A.m(15)
u=A.aF(!1,B.a2,!0,q,A.aL(!1,q,!0,A.p(q,D.bO5,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cK,!0,q,q,q,q,q,q,q,q,q,q,q,r.gce1(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.FB(A.p(q,A.x(A.a([u,B.aO,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dY,A.bG(D.fLD,r.gaQG(),A.bn(B.bP,q,q,q,q,q,Aq.ZP,q,new A.b7(A.m(12),B.a0),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bzg,q,q,1/0),15,B.af,1.05,D.aa0,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b0],v)
if(J.cK(r.d))w.push(A.aI(q,q,q,q,A.X(B.yQ,B.aV,q,q,q,q),q,q,q,new C.dVB(r),q,q,q,q,"Sync family trees with database",q))
if(J.cK(r.d))w.push(A.aI(q,q,q,q,A.X(B.yL,B.aV,q,q,q,q),q,q,q,r.gafD(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(E.aoN,D.frk,r.gaQG(),A.bn(B.bP,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ad)
u.push(new C.FB(r.cBz(J.q(r.d,s),o),14,B.af,1,D.aa0,q))
B.d.v(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.m,q,B.e,B.j,0,B.p)],v),B.E,q,B.e,B.j,0,B.p)},
cBz(d,e){var w=null,v=e.a,u=v?B.e1:B.c,t=A.m(14),s=A.I((v?B.e6:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.eq,10)],x.V),q=A.m(14),p=A.p(w,D.bN9,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaoG(),m=d.d?"":" \xb7 Public",l=d.y===D.kD?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bA,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a2,!0,w,A.aL(!1,q,!0,new A.D(B.bC,A.B(A.a([p,B.bc,l,A.X(B.Nu,v?B.bq:B.bl,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dVA(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.apz.prototype={
U(){return new C.aDm(A.a([],x._),A.aY(x.N),A.b7I())},
bs(){return this.r.$0()},
gdY(){return this.c}}
C.aDm.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.acw()
w=u.a
v=w.c
if(v.length!==0)C.a77(v,w.e,w.d.w)},
t(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a2D(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xQ("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dUW(r),s,null,!0,!0,x.y),$async$a2D)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jv()
t.m(new C.dUX(t,r))
w=4
return A.b(t.tS(),$async$a2D)
case 4:t.a.bs()
t.xQ(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2D,v)},
cro(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.dUR(w,f,d,e))},
aSV(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dk()
u.eb(w,v,0,1)
u.jT(q,q,1,1)
this.w.sp(0,u)},
b9U(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eC(new Float64Array(16))
q.e4(r)
w=q.CD()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dk()
t.eb(r,u,0,1)
t.jT(v,v,1,1)
t.eb(-r,-u,0,1)
t.iL(0,q)
s.sp(0,t)},
acw(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AQ(u.a.c),$async$acw)
case 2:t=s.pP(r.dJ(e,new C.dUi(u)))
if(t!=null&&u.c!=null)u.m(new C.dUj(u,t))
return A.h(null,v)}})
return A.i($async$acw,v)},
xQ(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.R(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vL(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h3v(o,t,!1,r,new C.dUA(u),q.a,s),$async$vL)
case 2:n=A
m=J
w=3
return A.b(C.GB(u.a.c),$async$vL)
case 3:p=n.pP(m.dJ(e,new C.dUB(u)))
if(p!=null&&u.c!=null)u.m(new C.dUC(u,p))
return A.h(null,v)}})
return A.i($async$vL,v)},
Jv(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cG(w,0)},
tS(){var w=0,v=A.j(x.H),u=this,t,s
var $async$tS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2C(t,s),$async$tS)
case 2:return A.h(null,v)}})
return A.i($async$tS,v)},
a18(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a18=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.u4(q,t.a.c)){t.xQ("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.icN(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a18)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Jv()
t.m(new C.dUQ(t,r))
w=4
return A.b(t.tS(),$async$a18)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a18,v)},
b07(){var w=this.c
w.toString
A.a3(w,!1).cg(A.e_(new C.dUx(this),!1,null,x.H))},
a_S(){return this.cf_()},
cf_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.u4(m,t.a.c)){t.xQ("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Z(s,new C.dUN(),A.S(s).k("Z<1>")).gL(0)
s=A.ey([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cp.E"))
B.d.fc(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.K,null,new C.dUO(n,t,new C.tT(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a_S)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Jv()
t.m(new C.dUP(t,o))
w=6
return A.b(t.tS(),$async$a_S)
case 6:case 5:if(o.a&&t.c!=null)t.b07()
case 1:return A.h(u,v)}})
return A.i($async$a_S,v)},
VS(d){return this.bzQ(d)},
bzQ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.u4(r,t.a.c)){t.xQ("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dU6(t,d),r,null,!0,!0,x.P),$async$VS)
case 3:s=f
if(s==null){w=1
break}t.Jv()
t.m(new C.dU7(t,s))
w=4
return A.b(t.tS(),$async$VS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VS,v)},
a2Z(d){return this.cDJ(d)},
cDJ(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2Z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.dUZ(u,d,new C.tT(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2Z)
case 2:return A.h(null,v)}})
return A.i($async$a2Z,v)},
cbh(d){var w=this,v=w.d
v===$&&A.c()
if(C.u4(v,w.a.c))w.Od(d)
else w.a2Z(d)},
ai4(d,e){return this.cvm(d,e)},
cvm(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ai4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.dUT(new C.tT(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ai4)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ai4,v)},
I3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$I3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kD?3:5
break
case 3:w=6
return A.b(C.fS0(t.a.c),$async$I3)
case 6:s=e
o=t.a
r=C.hbl(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ai4(!s,!r),$async$I3)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aOQ(o,t.a.c)){t.xQ("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l9(o,"Cancel","Remove",q.y===D.kD?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$I3)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOM(t.a.c,t.d.a),$async$I3)
case 11:t.a.bs()
o=t.c
if(o==null){w=1
break}A.iR(o,null)
case 1:return A.h(u,v)}})
return A.i($async$I3,v)},
aa2(d){return this.bL_(d)},
bL_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aa2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.u4(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b3(s,new C.dU8(p))){o=A.S(s)
p.a=A.pP(new A.cQ(new A.Z(s,new C.dU9(d),o.k("Z<1>")),new C.dUa(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.Jv()
t.m(new C.dUb(t,s,d,q))
w=3
return A.b(t.tS(),$async$aa2)
case 3:t.xQ(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aa2,v)},
Od(d){return this.bNb(d)},
bNb(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Od=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.u4(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2Z(d),$async$Od)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dUf(t,d),r,null,!0,!0,x.P),$async$Od)
case 6:s=f
if(s==null){w=1
break}t.Jv()
t.m(new C.dUg(t,s))
w=7
return A.b(t.tS(),$async$Od)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Od,v)},
cBY(){var w=this,v=w.d
v===$&&A.c()
if(!C.u4(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dUY(w))
w.tS()},
YH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$YH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aOQ(n,t.a.c)){t.xQ("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.as(B.at,s)
q=t.d.e
p=A.bo(new A.N(q,t.gc9L(),A.S(q).k("N<1,n>")).c0(0,new C.dUs()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dUt(t,new C.tT(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$YH)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Jv()
t.m(new C.dUu(t,p))
w=4
return A.b(t.tS(),$async$YH)
case 4:t.xQ("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$YH,v)},
c9M(d){return B.a.i(d.toLowerCase())},
cdM(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.u4(v,w)
t=r.d
s=C.i21(t)
C.ibI(q,t.b,u,C.i20(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tT(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Z(l,new C.dV5(),A.S(l).k("Z<1>")).gL(0)
l=n?B.bZ:B.il
v=A.X(B.a0_,n?B.bq:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Bq,A.aL(!1,o,!0,new A.D(B.hz,A.B(A.a([v,B.bn,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dV6(p,d),o,o,o,o,o,o,o),o),new A.D(B.nj,p.bYi(m),o)],u)
if(p.d.y===D.kD){t=B.rz.j(0.15)
s=A.m(12)
r=A.I(B.rz.j(0.45),B.r,1)
q=C.Gz(p.d,p.a.c)
v.push(new A.D(B.y6,A.p(o,A.B(A.a([D.bSs,B.as,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iP,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b0],u)
if(C.u4(p.d,p.a.c)&&p.e.length!==0)u.push(new C.FL("Undo",B.rn,p.gcBX(),m,o,o))
u.push(new C.FL("Family Book",D.bHZ,p.gcdL(),m,B.tv,o))
u.push(new C.FL("Family games",B.oc,p.gcdX(),m,B.aC,o))
if(C.u4(p.d,p.a.c))u.push(new C.FL("Display settings",B.Cc,p.gceZ(),m,B.b_,o))
u.push(new C.FL("Sync",B.yL,p.gafD(),m,o,o))
t=p.d
if(t.y===D.kD||C.aOQ(t,p.a.c)){t=p.d.y===D.kD?"Remove shared tree":"Delete tree"
u.push(new C.FL(t,B.ec,p.gbL9(),m,B.fj,o))}if(C.u4(p.d,p.a.c))u.push(new C.FL("Add member",B.wa,new C.dV7(p),m,B.bP,o))
v.push(new A.D(V.aiS,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gaoG()===0){u=A.au(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cC(new C.dV8(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?N.a03:A2.Nv,o,o,o,o,o)
v.push(A.au(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dV9(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bYi(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fD.j(0.35),B.dp,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.yF,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a2,!0,m,A.aL(!1,m,!0,A.p(m,D.bVx,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cK,!0,m,m,m,m,m,m,m,m,m,m,m,n.gafD(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)
r=n.d
q=A.d(r.b,m,1,B.a1,m,m,m,D.fd4,m,m,m)
r=r.gaoG()
p=n.d.gaoG()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.x(A.a([q,B.bA,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.j,0,B.p),1)],o)
if(C.u4(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.bSE,m,m,m,n.gcoJ(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jN:B.o9
r=r?"Private":"Public"
r=A.E(n.av4(q,"Privacy",r,n.a.d.w?n.gcAW():m),1)
q=A.E(n.av4(B.yM,"Tree code",n.d.c,new C.dUh(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ad,A.B(A.a([r,B.ab,q,B.ab,A.E(n.av4(D.bJG,"Collaborators",p,n.gc1S()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kD){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aF(!1,B.a2,!0,A.m(999),A.aL(!1,A.m(999),!0,new A.D(B.h2,A.B(A.a([A.X(B.p4,B.c,m,m,m,14),B.ej,A.d("View only",m,m,m,m,m,m,B.aRf,m,m,m)],o),B.m,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ah)],o))}return A.p(m,A.bx(u,new A.an(B.a_,m,B.aa,B.t,A.a([t,new A.D(B.FJ,A.x(p,B.E,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bZO,B.n),m,m,m,m,m,m,m,1/0)},
av4(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a2,!0,A.m(14),A.aL(!1,A.m(14),!0,new A.D(H.ak0,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a1,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.v_,A.d(f,w,1,B.a1,w,w,w,F.A_,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)}}
C.bej.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gam(r)&&s.c.length===0)return B.bJ
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bem(s,t),new A.at(w,v))],x.p)
r=r.gdR(r)
B.d.v(u,r.dD(r,new C.d9f(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.d9g(this),A.S(r).k("N<1,v>")))
return new A.D(B.tX,new A.a8(w,v,new A.an(B.a_,t,B.aa,B.f,u,t),t),t)}}
C.K7.prototype={}
C.FQ.prototype={}
C.bel.prototype={
gbiq(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIW.prototype={}
C.bem.prototype={
bMO(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.K()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bH
d.br(new A.t(n,w),new A.t(m,w),v)
u=(n+m)/2
t=new A.aJ(q.r,B.ak,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.b1(u,q))
s=w-1.1
r=w-8.8
t.D(new A.lB(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.lB(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bv())
q=A.K()
q.r=B.c.gp(0)
d.ae(new A.t(u,w),9,q)
q=A.K()
q.r=B.bD.gp(0)
d.aJ(t,q)},
bMM(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aV(a0,new C.d9A())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b3(a0,new C.d9B(f))
t=new A.N(a0,new C.d9C(f),A.S(a0).k("N<1,L>")).c0(0,new C.d9D()).cM(0,1/0,B.vn)
w=f.a
d.br(f,new A.t(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.M)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mM(m)
i=Math.min(10,l/2)
l=$.W()
h=A.a([],q)
g=new A.aJ(l.r,B.ak,null,null,h)
h.push(new A.b1(w,v-i))
l=j*i
h.push(new A.ca(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.ca(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbB().a.snapshot()
r.drawPath((g.e=new A.cv(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.K()
w.r=B.bP.j(0.75).gp(0)
w.c=2.2
w.b=B.ac
w.d=B.bH
w.e=B.dS
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.M)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bMM(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.M)(v),++s){q=v[s]
if(q.c)this.bMO(d,w,q.a,q.b)}},
aw(d){return d.b!==this.b}}
C.bhZ.prototype={
gc7B(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dpq
switch(w.c.a){case 0:return D.cS4
case 1:return D.d2x
case 2:return D.djx}},
gc7E(){var w=this.c,v=C.hmd(w.w),u=C.hmd(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc7B(),p=t.c,o=L.bBZ(p.f),n=t.gc7E(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cH,10)],m),k=r?B.av:B.c,j=A.I(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tj(B.A,s,B.ce,B.bV,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.i_(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.ax,B.aD,B.x,q,s,s),B.a6),s,56,s,s,B.FZ,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fng,s,s,s),B.f,s,s,new A.o(B.c9,s,w,j,s,s,B.n),s,s,s,s,D.bBa,s,s,s),s,s,s,-6,-4,s))}k=r?B.cp:B.c
j=A.m(8)
w=A.I(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dy,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cp,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a8(84,112,A.x(A.a([new A.an(B.a_,s,B.aa,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,D.b1k,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bBl,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bdq.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.W()
w=A.K()
v=this.b
u=v?B.c:D.bdL
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
aw(d){return d.b!==this.b}}
C.bvC.prototype={
B(d){var w=this,v=null,u=new C.fbf(w),t=w.c,s=t?B.cp:B.c,r=A.m(12),q=u.$3(B.hC,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bz:B.ff,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yJ,"Zoom out",w.e)
return A.aF(!1,B.a2,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bz:B.ff,v,v,v,1,v,v,v,v,v,22),u.$3(B.amo,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dn,v,v,v,B.ah)}}
C.blb.prototype={
B(d){var w=this,v=null,u=B.bP.j(0.15),t=A.I(B.bP,B.r,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.x(A.a([A.X(s?N.a03:A2.Nv,B.bP,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fjx,v,v,v)],r),B.m,v,B.b7,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fhu,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eMZ(w),A.S(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a8(84,v,A.x(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.ZV.prototype={
U(){return new C.aBQ()},
bs(){return this.Q.$0()},
gdY(){return this.w}}
C.aBQ.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.as(new A.ba(t,B.b4,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.as(new A.ba(t,B.b4,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.as(new A.ba(t,B.b4,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.as(new A.ba(t,B.b4,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.as(new A.ba(t,B.b4,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.as(new A.ba(t,B.b4,B.aN),s)
t=u?q:v.c
r.y=t==null?D.yk:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i3z(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
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
PE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hbl(p.y,p.w)
w=3
return A.b(A.ln(t.a.w,B.Iq),$async$PE)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b__(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$PE)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hG_(p.y,p.w)
t.a.bs()
case 5:w=7
return A.b(As.GK(78,800),$async$PE)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dpo(t,q))
case 1:return A.h(u,v)}})
return A.i($async$PE,v)},
c7D(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i1(B.o.u(1000*Date.now()),w,D.yk,null,null,null,"","","","","",1,!1,0)
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
s=v.aDY(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a3(k,!1).N(s)},
a9E(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dpn(r),s,null,!0,!0,x.y),$async$a9E)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a3(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9E,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tT(j),h=l.a.e,g=A.S(h).k("Z<1>"),f=A.C(new A.Z(h,new C.dpx(l),g),g.k("J.E"))
h=j?B.e1:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bzD,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hp(A.aL(!1,k,!0,new A.D(B.lZ,A.X(B.ec,B.oS,k,k,k,17),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbHN(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jG:B.j4
t=L.bBZ(l.as)
if(l.as==null)s=A.X(B.oX,j?B.bq:B.bl,k,k,k,40)
else s=k
s=A.au(A.aB(k,new A.an(B.a_,k,B.aa,B.t,A.a([A.h5(u,t,s,k,42),A.ao(0,A.h5(B.bP,k,D.bMd,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc7A(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aBS(t,"Full name",B.mA,1,1,i,B.mb)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.R,new C.bhX(i,u,new C.dpy(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bt5],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dpz(),A.S(o).k("N<1,eE<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bt7],q)
B.d.v(q,new A.N(f,new C.dpB(),A.S(f).k("N<1,eE<n?>>")))
o=A.x(A.a([t,B.am,new C.ad2(i,r,"Who is their parent?",p,new C.dpC(l),k,o),B.aA,n,B.am,new C.ad2(i,m,"Who is their spouse / partner?",q,new C.dpD(l),k,o)],v),B.ai,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aBS(q,"Birth date",D.alr,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aBS(m,"Birth place",B.a0i,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aBS(n,"Date of death (if deceased)",D.anF,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aBS(p,"Occupation",B.a1o,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.t,w,k),B.aA,s,B.bv,new C.ad3(i,"Identity",u,k),B.ad,new C.ad3(i,"Family links",o,k),B.ad,new C.ad3(i,"Life details",A.x(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aBS(r,"Notes",B.l5,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ad,new C.aBR(i,"Child order",l.cfd(l.at),new C.dpE(l),new C.dpF(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h0M(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dpG(l):k
B.d.v(r,A.a([B.R,new C.aBR(i,"Visible in tree",u,w,new C.dpH(l),k)],v))}r.push(B.R)
w=j?B.jG:B.j4
u=A.m(14)
t=A.I(j?B.e6:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iI(k,B.bP,k,B.af,k,new C.dpI(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,N.aiw,k,k,k))
r.push(B.bv)
w=j?B.aP:B.av
j=j?B.e6:B.bO
r.push(A.B(A.a([A.E(A.dQ(B.nD,new C.dpA(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.cj,k,new A.b7(A.m(14),B.a0),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bG(D.eW6,l.gc7C(),A.bn(B.aV,k,k,0,B.c,k,B.cj,k,new A.b7(A.m(14),B.a0),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.ek(B.hT,k,B.af,h,new A.a8(420,k,A.ce(A.x(r,B.ai,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ag),k),D.ajk,k,B.aiK,new A.b7(g,B.a0),k,k)},
cfd(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.ad3.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jG:B.j4,s=A.m(16)
return A.x(A.a([new A.D(D.ajL,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e6:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bj,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)}}
C.bhY.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e1:B.c,r=A.m(12),q=A.I((t?B.e6:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.V,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bs(u,B.eE,u,B.vN,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cw,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bP,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ad2.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e1:B.c,s=A.m(12),r=A.I((u?B.e6:B.bO).j(0.85),B.r,1),q=A.X(B.ri,u?B.bq:B.bl,v,v,v,v),p=A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e1:B.c
return A.p(v,new A.DC(A.SF(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cw,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l0,v,v,v)}}
C.bhX.prototype={
B(d){var w=new C.dpJ(this)
return A.B(A.a([w.$3(D.vV,"Male",B.Oc),B.ab,w.$3(D.oV,"Female",B.O0),B.ab,w.$3(D.yk,"Other",B.np)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aBR.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jG:B.j4,r=A.m(14),q=A.I(t?B.e6:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.j,0,B.p),1),new C.aHY(u,B.yJ,w.f,v),B.bn,new C.aHY(u,B.hC,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ex,v,v,v)}}
C.aHY.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bP.j(0.12)
else w=s.c.a?B.e1:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bP
else t=(s.c.a?B.bq:B.bl).j(0.4)
return A.aF(!1,B.a2,!0,v,A.aL(!1,u,!0,new A.a8(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ah)}}
C.ad4.prototype={
bQO(d){switch(d.a){case 0:return B.bP
case 1:return B.bD
case 2:return B.cU}},
bQP(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aXf(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Aa(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e1:B.c
u=A.m(12)
t=A.I((w?B.e6:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bP,p,p,p,18),B.as],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bl,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cu,B.y1,p,p,1/0)},
ae8(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jG:B.j4,s=A.m(16),r=A.I(v?B.e6:B.bO,B.r,1)
return A.x(A.a([new A.D(D.ajL,u,w),A.p(w,A.x(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bU,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hr3(r,q),o=q.c,n=t.bQO(o),m=L.bBZ(q.f),l=t.e.a,k=l?B.e1:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kD?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.au(A.p(s,A.h5(u,m,m==null?A.X(B.oX,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ey,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.r,1)
v=A.au(A.p(s,A.d(t.bQP(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.my,s,s,s),s,s,s)
u=x.p
i=A.a([t.Aa("Full name",i,B.mA)],u)
if(p>0)i.push(t.Aa("Child order","#"+p,B.O6))
r=A.a([h,B.au,r,B.aO,l,B.R,v,B.bv,t.ae8("Identity",i),B.ad,t.ae8("Life details",A.a([t.Aa("Birth date",q.w,D.alr),t.Aa("Birth place",q.x,B.a0i),t.Aa("Date of death",q.y,D.anF),t.Aa("Occupation",q.z,B.a1o)],u)),B.ad,t.ae8("Family links",A.a([t.Aa("1. Parent",t.aXf(q.d),B.Gc),t.Aa("2. Spouse",t.aXf(q.e),B.O_)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ad,t.ae8("Notes",A.a([t.Aa("Notes",q,B.l5)],u))],u))
r.push(B.bv)
r.push(A.bG(B.JQ,new C.dpT(d),A.bn(B.aV,s,s,s,s,s,B.cj,s,new A.b7(A.m(14),B.a0),s,s,s)))
return A.eM(s,k,new A.cT(B.lN,A.ce(A.x(r,B.ai,s,B.e,B.P,0,B.p),B.t,s,B.y,s,B.vQ,s,s,B.ag),s),s,s,s,B.FM,B.d4,s,new A.b7(j,B.a0),s)}}
C.FL.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.vT,A.hp(A.aF(!1,B.a2,!0,A.m(8),A.aL(!1,A.m(8),!0,new A.a8(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ah),u,v.c,u,u),u)}}
C.apC.prototype={
eW(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a7().ad())
w=u.c
v=A.S(w).k("N<1,a7<n,@>>")
w=A.C(new A.N(w,new C.caM(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jb(w,new C.caN(),t,x.h))
return s}}
C.apD.prototype={
U(){return new C.aDo(A.a([],x.bF))},
gd7(){return this.c}}
C.aDo.prototype={
a_(){this.a1()
this.JC()},
JC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.caQ(t.a.c),$async$JC)
case 3:r=e
w=4
return A.b(C.AQ(t.a.c),$async$JC)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.r0(q,new C.dVi(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dVj(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JC,v)},
yp(d){var w=null,v=this.c
if(v==null)return
v.J(x.q).f.R(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Km(d,e){return this.cEm(d,e)},
cEm(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Km=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dVn(q,e))
t=3
w=6
return A.b(d.$0(),$async$Km)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dVo(q))
$.eR.mp()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Km,v)},
Xw(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pd(r,s.c,s.e),$async$Xw)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Km(new C.dVf(t),"Preparing download\u2026"),$async$Xw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xw,v)},
XA(d){return this.bOL(d)},
bOL(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pd(r,s.c,s.e),$async$XA)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Km(new C.dVg(t,d),"Preparing file\u2026"),$async$XA)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XA,v)},
ag_(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ag_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xh.c8().M7(B.R5,B.u1,!0),$async$ag_)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
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
p=A.ab(m)
$.am.$1("[family tree sync pick] file_picker: "+A.w(p))
w=6
break
case 3:w=2
break
case 6:u=A.GJ()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ag_,v)},
Yb(d){return this.bZb(d)},
bZb(d){var w=0,v=A.j(x.H),u=this
var $async$Yb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Km(new C.dVh(u,d),"Restoring family trees\u2026"),$async$Yb)
case 2:return A.h(null,v)}})
return A.i($async$Yb,v)},
Ya(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ya=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ag_(),$async$Ya)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Yb(s),$async$Ya)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ya,v)},
a20(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a20=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pd(r,s.c,s.e),$async$a20)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Km(new C.dVm(t),"Creating QR code\u2026"),$async$a20)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a20,v)},
a1C(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CW()){t.yp("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a3(s,!1).cg(A.e_(new C.dVk(),!0,null,x.N)),$async$a1C)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Yb(r),$async$a1C)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1C,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.AT:B.il,m=o?D.ah0:B.aP,l=o?B.aJ:B.bO,k=o?B.aP:B.av,j=new C.d9E(n,m,l,k,o?B.bL:B.bl)
l=A.aI(p,p,p,p,A.X(B.eI,k,p,p,p,20),p,p,p,new C.dVq(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eD(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d9c(!0,B.jz,B.aR,B.aR,q.r?p:q.gcva(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcrj()
t.push(A.E(C.d9c(!s,B.ja,B.b5,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d9c(!1,B.hE,B.aV,B.bP,q.r?p:q.gbOE(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d9c(!1,R.yO,B.aE,B.aT,q.r?p:q.gbZ8(),j,s,"Upload backup file"),1))
l=A.a([new C.bek(v,l,p),B.kN,new C.ack(j,"QR restore",p),B.R,t,B.d5,new C.ack(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kN,new C.ack(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dVr(q,j),x.l))
B.d.v(l,v)}l=A.a([A.ct(l,p,B.ZM,p,p,B.ag,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aV.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.p(p,A.B(A.a([N.aPF,B.bc,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.y8,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a_,p,B.aa,B.t,l,p),p,!1,!1,p,p)}}
C.d9E.prototype={}
C.bek.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.kk,28)],x.V)
t=A.ao(p,A.X(B.ul,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.a_,p,B.aa,B.t,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bV4,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.or,A.E(A.x(A.a([D.fsj,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.j,0,B.p),1)],q),B.E,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c21,B.n),p,p,p,p,p,p,p,p)}}
C.ack.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bei.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aR.j(0.4):m.c
k=A.I(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aR.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.r,1)
return A.aF(!1,B.a2,!0,q,A.aL(!1,o,!0,A.eF(A.dd(new A.D(E.Zo,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.re,q,q,q),B.ad,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bA,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cw,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ah)}}
C.ben.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.r,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a2,!0,v,A.aL(!1,u,!0,A.eF(new A.D(B.eP,A.B(A.a([A.p(v,D.bUi,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.re,v,v,v),B.bc,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.j,0,B.p),1),A.X(B.hE,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ah)}}
C.a_f.prototype={
U(){return new C.aDn()},
gd7(){return this.c}}
C.aDn.prototype={
a_(){this.a1()
this.a9b()},
a9b(){var w=0,v=A.j(x.H),u=this,t
var $async$a9b=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b1E(u.a.c,B.De),$async$a9b)
case 2:t=e
if(u.c!=null)u.m(new C.dVa(u,t))
return A.h(null,v)}})
return A.i($async$a9b,v)},
ahm(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ahm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dVb(q))
t=4
p=A.hd0(q.a.d,B.De)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.arQ(n.e,m,l,B.De,p,n.f),$async$ahm)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dVc(q))
q.c.J(x.q).f.R(D.f43)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.J(x.q).f.R(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.ej(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dVd(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahm,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jp:B.pQ,n=p?B.ij:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eD(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fIm,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aV.j(0.35),B.r,1)
u=A.pW(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.N,u,B.bv,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b7,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ae:B.br,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcr1()
if(u)u=B.Ji
else u=A.X(r.e===!0?B.hD:B.alq,q,q,q,q,q)
w=A.a([w,B.ad,v,B.ad,new A.a8(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ck,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fU,q,q,q,new A.ay(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i9,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aB:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a8(1/0,q,A.bG(B.A5,new C.dVe(d),A.bn(B.aV,q,q,q,q,B.fU,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.a9,A.x(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a_g.prototype={
U(){return new C.bjo(A.zp(B.xR,B.nJ,B.ut))}}
C.bjo.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c5(A.eD(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fAi,w,w,w,1,w,!0),B.w,A.zo(this.d,B.bV,new C.dVs(this,d)),w,!1,!1,w,w)}}
C.aYw.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.QA,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lG.prototype={}
C.a6b.prototype={
U(){return new C.bj5(null,null)}}
C.bj5.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bl(v,B.r7,v,1,v,w)
w.e=A.bl(v,B.pY,v,1,v,w)
w.a.toString
w.d.cL(0)
w.e.cL(0)},
bv(d){var w,v,u=this
u.bE(d)
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
this.bvh()},
B(d){var w,v,u=this,t=B.d.dM(D.a47,new C.dHa(u),new C.dHb())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cwe(A.c8(new A.h9(A.a([w,v],x.dS)),new C.dHc(u,t),null),!0)}}
C.bj4.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b0y(d,e)
break
case"house":p.m3(d,e,D.d7k)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdF()
$.W()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ae(new A.t(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m8(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AU(d,e,12)
p.y_(d,e,B.kX,5,14)
break
case"grocery":p.cfX(d,e)
break
case"calculator":p.cfE(d,e)
break
case"lumber":p.cg4(d,e)
break
case"kitchen":p.cg_(d,e)
break
case"landscape":p.m3(d,e,D.d7S)
s=new A.aJ($.W().r,B.ak,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.b1(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.ca(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.ca(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.ap(t,w))
s.D(new A.ap(0,w))
s.D(new A.bv())
w=A.K()
w.r=B.eh.j(0.85).gp(0)
d.aJ(s,w)
p.AU(d,e,8)
p.y_(d,e,B.iM,4,18)
break
case"plumbing":p.cgd(d,e)
break
case"electrical":p.m3(d,e,D.diN)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.aX(new A.a5(0,0,0+e.a,0+e.b),u)
p.m8(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m8(d,e,B.lS.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AU(d,e,10)
break
case"store":p.cgn(d,e)
break
case"paint_remodel":p.cg8(d,e)
break
case"roofing":p.cgf(d,e)
break
case"warehouse":p.cgu(d,e)
break
case"vehicles":p.cgs(d,e)
break
case"farm":p.cfR(d,e)
break
case"restaurant":p.cge(d,e)
break
case"tools":p.cgq(d,e)
break
case"wallet":p.cgt(d,e)
break
case"concrete":p.cfK(d,e)
break
case"blueprint":p.cfC(d,e)
break
default:p.b0y(d,e)}},
m3(d,e,f){var w,v=new A.a5(0,0,0+e.a,0+e.b)
$.W()
w=A.K()
w.sar(new A.a9(B.ax,B.aD,B.x,f,null,null).aA(0,v))
d.aX(v,w)},
m8(d,e,f,g,h){var w,v,u,t,s,r,q=new A.t(e.a/2,e.b/2),p=e.gdF()/2-h
$.W()
w=A.K()
w.b=B.ac
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bW(q,p)
r=w.H()
v.drawArc.apply(v,[A.bQ(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
y_(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdF()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AU(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.W()
o=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b0y(d,e){var w,v=this
v.m3(d,e,D.dhd)
w=v.c
v.m8(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m8(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bMI(d,e,B.hM,w)
v.y_(d,e,B.c.j(0.7),6,8)},
bMI(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.bQ(new A.a5(16,q,t,q+3)),p)
p.delete()}},
cfX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m3(d,e,D.cnF)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.W()
l=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
l.r=D.d5D[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m8(d,e,B.c.j(0.35),w,16)
j.y_(d,e,B.iM,5,12)},
cfE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m3(d,e,D.cnM)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdF()
$.W()
q=A.K()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ae(new A.t(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fX(g,g,g,g,g,B.a5,B.c8,g,B.dQ,B.c6)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d9v[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saU(0,new A.eS(r,g,g,B.d_,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eT()
p.a6(d,new A.t(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cnO[o]
l=B.ks.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saU(0,new A.eS(m,g,g,B.d_,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eT()
p.a6(d,new A.t(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.m8(d,e,B.c.j(0.35),w*1.5,14)
h.m8(d,e,B.eF.j(0.55),-v*3.141592653589793*2,8)
h.m8(d,e,B.xA.j(0.4),r*2.8,22)
h.y_(d,e,B.pG,8,10)
h.AU(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.W()
r=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cg4(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,S.ax1)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bz(new A.a5(20,q,u,q+10),B.hG)
$.W()
o=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
o.r=A.ar(B.fZ,B.oK,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.eU(p),n)
n.delete()}m.m8(d,e,B.fZ.j(0.35),w,15)
m.AU(d,e,8)},
cg_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m3(d,e,D.d66)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.W()
l=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.m8(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
j.y_(d,e,B.pD,4,14)},
cgd(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m3(d,e,D.cVX)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.W()
n=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
n.b=B.ac
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.y_(d,e,B.oQ,6,12)
l.m8(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cgn(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m3(d,e,D.cBj)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bz(new A.a5(q,14,q+u,22),B.iB)
$.W()
p=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
p.r=A.ar(B.fd,B.bM,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.eU(q),o)
o.delete()}n.m8(d,e,B.c.j(0.3),w,16)
n.AU(d,e,8)
n.y_(d,e,B.vs,5,13)},
cg8(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.d0R)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bz(new A.a5(q,p,q+8,p+(18+r*22)),B.i_)
$.W()
q=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
q.r=[B.i4,B.ds,B.bM,B.eo][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.eU(p),o)
o.delete()}this.m8(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cgf(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.cZm)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.W()
p=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.y_(d,e,B.cr,7,11)},
cgu(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.cE1)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bz(new A.a5(p,o,p+(t-r*8),o+16),B.hG)
$.W()
p=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
p.r=A.ar(B.cr,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.eU(o),n)
n.delete()}this.m8(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cgs(d,e){var w,v,u,t,s,r,q,p,o
this.m3(d,e,D.dmN)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bz(new A.a5(r,q,r+28,q+8),B.hG)
$.W()
p=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.eU(q),o)
o.delete()}this.AU(d,e,6)},
cfR(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.d4I)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.K()
s.r=B.lS.j(0.75).gp(0)
d.ae(new A.t(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
o.r=B.hk.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m8(d,e,B.lS.j(0.35),w,14)},
cge(d,e){var w,v,u,t,s,r,q,p,o=this
o.m3(d,e,D.d79)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.bP(new A.t(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.bQ(r),p)
p.delete()}o.y_(d,e,B.pD,5,16)
o.AU(d,e,7)},
cgq(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,D.dki)
w=m.c
v=w*3.141592653589793
m.m8(d,e,B.oK.j(0.55),v*3,10)
m.m8(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
o.r=B.oK.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cgt(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m3(d,e,D.dnr)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bz(new A.a5(p,o,p+36,o+22),B.iB)
$.W()
p=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
p.r=A.ar(B.iM,B.lS,q).gp(0)
n=p.H()
s.drawRRect(A.eU(o),n)
n.delete()}m.AU(d,e,9)
m.m8(d,e,B.c.j(0.4),w*2.2,12)},
cfK(d,e){var w,v,u,t,s,r,q,p,o,n
this.m3(d,e,D.dcg)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bW(new A.t(v,u),34)
$.W()
s=A.K()
s.b=B.ac
s.c=5
s.r=B.c.j(0.45).gp(0)
d.e0(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.aq(B.W,B.T,B.Y,B.Z,B.X)
o.r=B.bO.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cfC(d,e){var w,v,u,t,s,r,q,p
this.m3(d,e,D.d8a)
$.W()
w=A.K()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.W()
u=A.K()
u.r=B.ds.j(0.45).gp(0)
d.aX(new A.a5(0,p,0+v,p+6),u)
this.m8(d,e,B.kX.j(0.45),-t*3.141592653589793*2,11)},
aw(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.asx.prototype={
a_g(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aPJ(),$async$a_g)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8q(s),$async$a_g)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_g,v)},
ag0(d){return this.ciL(d)},
ciL(d){var w=0,v=A.j(x.H),u=this,t
var $async$ag0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ibS(d),$async$ag0)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ag0,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jG:B.j4
w=x.p
v=A.a([C.aQ6(!0,B.qL,1/0,B.q6,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c1(new A.bK(B.b3,t,t,new A.D(B.vI,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.axZ,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b3,B.b6,B.x,u,t,t),B.n),B.bf))}v.push(A.ao(8,A.B(A.a([A.E(A.dp(D.bNZ,D.foD,new C.cil(this,d),A.bn(B.aV,t,t,t,B.c,t,B.jJ,t,t,t,t,B.cc)),1),B.ab,A.E(A.es(D.bWi,D.fDo,this.gc9J(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jJ,t,t,D.b_S,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fK(1.7777777777777777,A.aF(!1,B.a2,!0,B.qL,new A.an(B.a_,t,B.b2,B.t,v,t),B.aq,s,0,t,t,t,t,t,B.ah),t)}}
C.aLg.prototype={
aY(){this.b6()
this.b5()
this.dK()},
t(){var w=this,v=w.b4$
if(v!=null)v.a5(0,w.gdG())
w.b4$=null
w.a2()}}
C.aT4.prototype={}
C.aT3.prototype={}
C.aR2.prototype={}
C.YT.prototype={
U(){return new C.ayE()}}
C.ayE.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.ba("",B.b4,B.aN)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(w,v)},
t(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Kc(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.J(x.q).f.R(D.f4y)
return}t=u.c
t.toString
v=u.e
A.a3(t,!1).N(new C.aT4(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e1:B.c,k=A.m(20),j=A.p(n,D.bVY,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bA,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bc,i,A.aI(n,n,n,n,A.X(B.cx,m?B.bq:B.bl,n,n,n,n),n,n,n,new C.d0X(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cw,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hdg(new C.d0Y(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jG:B.j4
r=A.m(12)
q=A.m(12)
p=m?B.e6:B.bO
t=A.aM(n,B.V,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bs(n,new A.b5(4,r,B.dj),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d0Z(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,W.Jp,n,n,n,n)
u=m?B.aP:B.av
m=m?B.e6:B.bO
return A.eM(n,l,new A.cT(B.lN,A.ce(A.x(A.a([j,B.aO,i,B.au,w,B.N,v,B.aO,t,B.bv,A.B(A.a([A.E(A.dQ(B.dh,new C.d1_(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.cj,n,new A.b7(A.m(12),B.a0),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bG(D.fDD,o.ga2m(),A.bn(B.aV,n,n,n,B.c,n,B.cj,n,new A.b7(A.m(12),B.a0),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.t,n,B.y,n,B.Bw,n,n,B.ag),n),n,n,n,A1.Bx,B.d4,n,new A.b7(k,B.a0),n)}}
C.YS.prototype={
U(){return new C.ayD()}}
C.ayD.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.as(B.at,w)},
t(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Kc(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.J(x.q).f.R(D.f2b)
return}v=this.c
v.toString
A.a3(v,!1).N(new C.aT3(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e1:B.c,n=A.m(20),m=A.p(q,D.bSx,B.f,q,q,new A.o(B.bP.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bA,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bc,l,A.aI(q,q,q,q,A.X(B.cx,p?B.bq:B.bl,q,q,q,q),q,q,q,new C.d0T(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aV.j(0.25),B.r,1)
u=A.X(B.alc,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.as,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bC,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jG:B.j4
t=A.m(12)
s=A.m(12)
r=p?B.e6:B.bO
v=A.aM(q,B.V,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bs(q,new A.b5(4,t,B.dj),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d0U(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.kO,q,q,q,q)
w=p?B.aP:B.av
p=p?B.e6:B.bO
return A.eM(q,o,new A.cT(B.lN,A.ce(A.x(A.a([m,B.aO,l,B.aA,v,B.bv,A.B(A.a([A.E(A.dQ(B.dh,new C.d0V(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.cj,q,new A.b7(A.m(12),B.a0),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bG(D.fKC,this.ga2m(),A.bn(B.bP,q,q,q,B.c,q,B.cj,q,new A.b7(A.m(12),B.a0),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.Bw,q,q,B.ag),q),q,q,q,A1.Bx,B.d4,q,new A.b7(n,B.a0),q)}}
C.Yq.prototype={
U(){return new C.axn()}}
C.axn.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.as(B.at,w)
v.e!==$&&A.aP()
v.e=new A.as(new A.ba("1",B.b4,B.aN),w)
v.f!==$&&A.aP()
v.f=new A.as(B.at,w)
v.r!==$&&A.aP()
v.r=new A.as(B.at,w)},
t(){var w,v=this,u=v.d
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
gJx(){var w,v=this.e
v===$&&A.c()
w=A.d6(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaja(){var w=this.f
w===$&&A.c()
w=A.d6(B.a.i(w.a.a))
return w==null?0:w},
gb3n(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aOm(d){var w,v=B.k.E(this.gJx()+d,0.25,999999),u=B.k.jc(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.O(v))
else{u=B.k.ac(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aN(u,w,"")}t.saU(0,u)
this.m(new C.czx())},
axK(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jG:B.j4,s=A.m(14),r=A.m(14)
u=u?B.e6:B.bO
return A.bs(w,new A.b5(4,s,B.dj),w,B.bC,w,w,w,w,!0,new A.b5(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.m(14),B.abu),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c9K(d,e,f){return this.axK(d,e,f,null)},
Kc(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaja()<=0){s.c.J(x.q).f.R(D.f6q)
return}r=s.c
r.toString
v=s.gJx()
u=s.gaja()
t=s.gb3n()
A.a3(r,!1).N(new C.aR2(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tT(n),l=n?B.e1:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bP.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bLV,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.r,1),h,o,new A.a9(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bA,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cw,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bc,h,A.aI(o,o,o,o,A.X(B.cx,n?B.bq:B.bl,o,o,o,o),o,o,o,new C.czD(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.V,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.axK(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Ob),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,W.Jp,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jG:B.j4
t=A.m(14)
s=A.I(n?B.e6:B.bO,B.r,1)
r=A.aI(o,o,o,o,A.X(B.yJ,n?B.aP:B.av,o,o,o,20),o,o,o,new C.czE(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aM(o,B.V,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.bXQ,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dZ,o,o,o,1,o,o,!1,"\u2022",o,new C.czF(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.ao,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a8(52,o,q,o),A.aI(o,o,o,o,A.X(B.hC,n?B.aP:B.av,o,o,o,20),o,o,o,new C.czG(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.as,A.E(A.aM(o,B.V,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.axK(m,"Amount","0.00",B.hQ),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dZ,o,o,o,1,o,o,!1,"\u2022",o,new C.czH(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.N(D.d1l,new C.czI(p,m),t),t.k("ak.E"))
i=A.a([i,B.bv,v,B.aA,h,B.N,s,B.ad,A.bX(B.bB,u,B.bs,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aM(o,B.V,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.c9K(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.czJ(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.kO,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bP.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aV.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJx()===B.k.jc(p.gJx())?B.k.O(p.gJx()):p.gJx()
s=p.gb3n()
r=A.AS(p.gaja())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1),C.bCL(p.gJx()*p.gaja(),B.b_,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jw,o,o,o))
i.push(B.bv)
j=A.m(14)
h=n?B.e6:B.bO
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.cj,o,new A.b7(j,B.a0),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dQ(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.czK(d),h),1),B.as,A.E(A.dp(D.aoG,D.fGy,p.ga2m(),A.bn(B.aV,o,o,0,B.c,o,B.cj,o,new A.b7(A.m(14),B.a0),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eM(o,l,new A.cT(A0.abT,A.ce(A.x(i,B.ai,o,B.e,B.P,0,B.p),B.t,o,B.y,o,Ae.rc,o,o,B.ag),o),o,o,o,B.MW,B.d4,o,new A.b7(k,B.a0),o)}}
C.a11.prototype={
U(){return new C.bvs()}}
C.bvs.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.ba(w,B.b4,B.aN),v)},
t(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e1:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jG:B.j4
v=A.aM(s,B.V,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bs(s,new A.b5(4,A.m(12),B.dj),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.faA(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dQ(B.dh,new C.faB(d),s),1)
r=A.bn(B.bP,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eM(s,q,new A.D(B.Bw,A.x(A.a([o,B.aA,v,B.aO,A.B(A.a([u,B.as,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.faC(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.P,0,B.p),s),s,s,s,s,B.d4,s,new A.b7(p,B.a0),s)}}
C.abp.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.FB.prototype={
U(){return new C.bvq(null,null)}}
C.bvq.prototype={
a_(){var w,v=this
v.a1()
w=A.bl(null,D.btG,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bxw()},
gbz0(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bP,B.b_],x.O)
case 2:return A.a([B.bu,B.aV,B.b_],x.O)
case 3:return A.a([B.aR,B.c9,B.k4],x.O)
case 4:return A.a([B.iI,B.bP,B.fe],x.O)
case 0:return A.a([B.aV,B.bP,B.b_],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.eG(A.c8(v,new C.fay(this,new C.tT(w.ax.a===B.I)),null),null)}}
C.axg.prototype={
U(){return new C.bvr(null,null)}}
C.bvr.prototype={
a_(){var w,v=this
v.a1()
w=A.bl(null,B.nb,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bxx()},
B(d){var w=this.d
w===$&&A.c()
return A.c8(w,new C.faz(this),null)}}
C.bvp.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bz(new A.a5(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aQ(w,w))
u=new A.aJ($.W().r,B.ak,null,null,A.a([],x.v))
u.D(new A.iN(v))
w=A.K()
w.b=B.ac
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aD(v,w)
w=A.K()
w.b=B.ac
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aJ(u,w)
w=A.xf(u)
t=A.a([],x.f5)
w=new A.vG(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.k0('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Hx(w,r)
w.jB()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aRO(d,q,r,o,0,0.2,4.2,0.92)
p.aRO(d,q,r,s,0.52,0.11,3.2,0.58)}},
aRO(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hz6(e.a.a,e,t,t+f*i,!0),r=A.bB8(s.gbB().a.getBounds())
$.W()
w=A.K()
w.b=B.ac
w.c=j
w.d=B.bH
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a9(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Hq,null).aA(0,r))
d.aJ(s,w)},
aw(d){return d.b!==this.b||d.d!==this.d}}
C.aNi.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.aNj.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a5(0,w.gbF())
w.ab$=null
w.a2()},
aY(){this.b6()
this.b5()
this.bG()}}
C.tT.prototype={}
C.asw.prototype={
U(){return new C.aEQ()},
gdY(){return this.c}}
C.aEQ.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.agQ()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Lj(w,v)
this.a2()},
agQ(){var w=0,v=A.j(x.H),u=this,t,s
var $async$agQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bBf(t.c,t.d.a),$async$agQ)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eK8(u,s))
return A.h(null,v)}})
return A.i($async$agQ,v)},
Q3(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Q3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eK_(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Lj(t,s),$async$Q3)
case 2:if(u.c!=null)u.m(new C.eK0(u))
return A.h(null,v)}})
return A.i($async$Q3,v)},
QA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.eK6(t,new C.tT(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$QA)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8q(q),$async$QA)
case 6:case 5:t.m(new C.eK7(t,r))
w=7
return A.b(t.Q3(),$async$QA)
case 7:case 1:return A.h(u,v)}})
return A.i($async$QA,v)},
VM(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ibD(r),$async$VM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eJV(t,new C.r5(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Q3(),$async$VM)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VM,v)},
ceO(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hr_(t,new C.eJZ(u),w,v)},
aaY(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bJ(new A.ay(v,2.5,B.r,-1),B.a0,B.a0,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b_E,w,w,B.n),w,22,w,w,w,w,w,22)},
aa1(d){return this.bKX(d)},
bKX(d){var w=0,v=A.j(x.H),u=this
var $async$aa1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eJY(u,d))
w=2
return A.b(u.Q3(),$async$aa1)
case 2:return A.h(null,v)}})
return A.i($async$aa1,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bZ:B.il,d=A.m(8),a0=A.X(U.a00,f?B.bq:B.bl,g,g,g,16),a1=x.p
a0=A.aL(!1,d,!0,new A.D(B.FT,A.B(A.a([a0,B.bn,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eK9(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a_,g,B.b2,B.t,A.a([A.bx(A.m(22),C.aQ6(!0,A.m(22),1/0,B.q6,g,d,1/0),B.aq),A.ao(10,A.dp(D.bQy,D.fIV,h.gb1j(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.hb,g,new A.b7(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eX,22),new A.ac(-4,B.G,B.bP.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a_,g,B.b2,B.t,A.a([C.aQ6(!0,A.m(16),1/0,B.NG,g,r.c,1/0),A.c1(g,new A.o(g,g,g,g,g,new A.a9(B.b3,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bf),A.ao(g,h.aaY(!0),g,g,8,g,8,g),A.ao(g,A.cwZ(h.aaY(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cwZ(h.aaY(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cwZ(h.aaY(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dp(D.bMv,D.fCm,h.gb1j(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.hb,g,new A.b7(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bZx,B.n),g,g,g,g,B.lZ,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.baf,B.nT,B.h0],u):A.a([B.b_,B.aV,B.bP],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eX,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jM,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h1,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bCL(h.d.gx_(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cw,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.hl.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aR.j(0.28),B.cH,14)],t)
j=B.aR.j(0.22)
i=A.m(10)
u=A.p(g,A.bx(r,new A.an(B.a_,g,B.aa,B.t,A.a([p,new A.D(D.byo,A.B(A.a([o,B.as,A.aF(!1,B.a2,!0,g,A.aL(!1,n,!0,A.eF(new A.D(A4.y3,A.x(A.a([A.p(g,D.aoh,B.f,g,g,new A.o(j,g,A.I(B.aR.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cm,g,g,g),B.fI,D.frn],a1),B.m,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gceN(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ah)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.ax,B.aD,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fK(1.7777777777777777,d,g),B.aO,w,B.N,u,B.bv,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b0,A.dp(Ap.a1L,D.fpg,h.gbzt(),A.bn(B.aV,g,g,g,B.c,g,B.iP,g,new A.b7(A.m(12),B.a0),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ad],a1)
w=h.d.d
if(w.length===0){w=f?B.e1:B.c
v=A.m(14)
u=A.I(f?B.e6:B.bO,B.r,1)
t=A.X(B.a0l,f?B.bq:B.bl,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.R,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.rd,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eKa(h,new C.tT(f)),A.S(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Bm,A.au(A.mQ(g,f?B.bq:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.Bq,a0,g),A.E(A.ce(A.x(d,B.E,g,B.e,B.j,0,B.p),B.t,g,B.y,g,E.ya,g,g,B.ag),1)],a1),B.E,g,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bD8(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e1:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b2q,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.hR:B.hc,B.b_,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bJ
else{k=x.p
t=A.a([A.d(t,u,2,B.a1,u,u,u,A.l(u,u,r?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcUA()
v=A.AS(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b7,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bP.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bCL(d.c*d.d,B.b_,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.hb,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.E1(A.B(A.a([m,A.E(new A.D(B.aip,A.B(A.a([l,B.bc,t,B.ab,k,A.aI(u,u,u,u,A.X(B.cx,(r?B.bq:B.bl).j(0.75),u,u,u,20),u,u,u,new C.eJW(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ai,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b1g,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.adp.prototype={
Er(d){return this.bMk(d)},
bMk(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Er=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pd(d,o,!1),$async$Er)
case 3:if(!f||d.e==null){w=1
break}A.a3(d,!1).N(null)
w=4
return A.b(A.bN(Ad.Bk,null,x.H),$async$Er)
case 4:s=t.d
w=5
return A.b(C.fIy(!0,o,s),$async$Er)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gy(r,"ngmy_project_"+A.aN(s.b,q,"_"),!1),$async$Er)
case 6:p=f
w=7
return A.b(A.pc(o,!1),$async$Er)
case 7:if(d.e==null){w=1
break}d.J(x.q).f.R(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Er,v)},
a_i(d){return this.cvb(d)},
cvb(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_i=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pd(d,s,!1),$async$a_i)
case 3:if(!f||d.e==null){w=1
break}A.a3(d,!1).N(null)
A.hE(d,new C.asq(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pc(s,!1),$async$a_i)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_i,v)},
Q4(d){return this.cre(d)},
cre(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Q4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a3(d,!1).N(null)
w=3
return A.b(A.hE(d,D.aHt,!0,"NgmyWorksheetProjectScan",x.N),$async$Q4)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bCM(s),$async$Q4)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.J(x.q).f.R(D.f5y)
w=1
break}q=C.h37(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dS(p,x.H),$async$Q4)
case 5:if(d.e==null){w=1
break}d.J(x.q).f.R(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Q4,v)},
a_j(d){return this.cDf(d)},
cDf(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_j=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a3(d,!1).N(null)
w=3
return A.b(C.bCj(),$async$a_j)
case 3:s=f
if(s==null){w=1
break}r=C.h37(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dS(q,x.H),$async$a_j)
case 4:if(d.e==null){w=1
break}d.J(x.q).f.R(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_j,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tT(u),s=w.d.d.length,r=u?B.e1:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kk,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.vO,A.p(v,A.x(A.a([w.ctL(d,t,s),new A.D(D.bxN,A.x(A.a([w.b4j(t,"QR restore"),B.R,A.B(A.a([w.b_g(t,!0,B.jz,B.aR,B.aR,new C.eKc(w,d),"Show to scan","QR code"),B.as,w.axL(t,B.ja,B.b5,B.by,new C.eKd(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b4j(t,"Backup files"),B.R,A.B(A.a([w.axL(t,B.hE,B.aV,B.bP,new C.eKe(w,d),"Full copy","Backup file"),B.as,w.axL(t,R.yO,B.aE,B.aT,new C.eKf(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.E,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.P,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
ctL(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f4,B.cM,B.fD],k):A.a([B.b_,B.aV,B.bP],k)
w=A.ao(l,A.X(B.ul,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.au(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kC,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aQ6(!0,A.m(13),64,D.bHS,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a1,l,l,l,D.aSd,l,l,l)
r=C.bCL(r.gx_(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a_,l,B.aa,B.t,A.a([w,new A.D(D.bya,A.x(A.a([v,A.B(A.a([s,B.es,A.E(A.x(A.a([u,B.au,t,B.N,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fG,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.E,l,B.e,B.j,0,B.p),1),A.aI(l,l,l,l,A.X(B.cx,B.c.j(0.85),l,l,l,l),l,l,l,new C.eKb(d),l,l,l,A.nG(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aPu,l,l,l,l),l,l)],m),B.E,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.ax,B.aD,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b4j(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
b_g(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ah0:B.aP
if(e)w=B.aR.j(o?0.45:0.35)
else{w=o?B.e6:B.bO
w=w.j(o?0.8:1)}w=A.I(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aR.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.re,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a2,!0,r,A.aL(!1,q,!0,A.eF(new A.D(E.Zo,A.x(A.a([t,B.ad,u,B.bA,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cw,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
axL(d,e,f,g,h,i,j){return this.b_g(d,!1,e,f,g,h,i,j)}}
C.asq.prototype={
U(){return new C.bkH()}}
C.bkH.prototype={
a_(){this.a1()
this.aeL()},
aeL(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aeL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bCN(p.c,p.d),$async$aeL)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eJQ(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eJR(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aeL,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.AT:B.il,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.X(B.eI,g?B.ae:B.al,h,h,h,18),h,h,h,new C.eJS(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zU],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.f4,B.cM,B.fD],s):A.a([B.b_,B.aV,B.bP],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eX,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.df,B.L,h,h)
p=C.bCL(p.gx_(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fG,h,h,h)],u),B.m,h,B.b7,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.ax,B.aD,B.x,s,h,h),B.n),h,h,h,h,E.ZL,h,h,1/0)
t=g?D.bkA:B.c
q=A.m(24)
p=A.I(w?B.aR.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.TZ,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.egq)
else{m=A.m(20)
l=A.I(B.aL,B.r,1)
o.push(A.p(h,A.pW(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bR,h,h,h))}}o.push(B.aO)
n=w?B.aR:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aR:B.aV).j(0.35),B.r,1)
k=w?B.NW:B.Oq
k=A.X(k,w?B.aR:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.as,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ae:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iP,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(Aa.N7,e,h),A.E(A.ce(A.x(A.a([s,B.aO,A.p(h,A.x(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.u_,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.t,h,B.y,h,E.ajw,h,h,B.ag),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.asv.prototype={
U(){return new C.aEP(A.zp(B.Mm,B.nJ,B.ut))}}
C.aEP.prototype={
t(){this.d.t()
this.a2()},
aMn(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iR(w,d)},
caC(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s=C.i9x(t)
if(s!=null){this.aMn(s)
return}r=C.hhR(t)
if(r!=null)q=A.cU(r,p,0)
else q=!1
if(q){this.aMn(B.a.i(B.a.b2(r,B.a.cD(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eD(A.a([A.aI(t,t,t,t,A.X(u.f?B.ub:A6.O2,t,t,t,t,t),t,t,t,new C.eJU(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.AT,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fCg,t,t,t,1,t,!0),q=A.zo(u.d,B.bV,u.gcaB()),p=A.m(28)
p=A.au(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.r,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c5(r,B.w,new A.an(B.a_,t,B.b2,B.t,A.a([q,p,A.ao(32,A.p(t,D.fB2,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jw,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aJD.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.Oa.prototype={
U(){return new C.aER(D.aaM,A.a([],x.D))},
bs(){return this.r.$0()},
gdY(){return this.c}}
C.aER.prototype={
gcB7(){return J.bDW(this.e,0,new C.eKC())},
a_(){this.a1()
$.aV.bZ$.push(this)
this.vK()},
t(){$.aV.hN(this)
this.a2()},
j8(d){if(d===B.fB)this.vK()},
vK(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vK=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CV(q.a.c).d9(0,B.ka),$async$vK)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eKy(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eKz(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vK,v)},
HY(d){return this.bJ4(d)},
bJ3(){return this.HY(null)},
bJ4(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ibF(l,d),$async$HY)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lo(l,r,q,D.dct,new A.T(Date.now(),0,!1))
w=4
return A.b(C.Lj(t.a.c,p),$async$HY)
case 4:o=f
w=5
return A.b(t.vK(),$async$HY)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.J(x.q).f.R(D.f2F)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.J(q).f.R(D.f4s)
else n.J(q).f.R(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ev(m)
case 1:return A.h(u,v)}})
return A.i($async$HY,v)},
Ev(d){return this.cez(d)},
cez(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ev=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.asw(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Ev)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Lj(u.a.c,t),$async$Ev)
case 5:case 4:w=6
return A.b(u.vK(),$async$Ev)
case 6:return A.h(null,v)}})
return A.i($async$Ev,v)},
vw(d){return this.bZd(d)},
bZd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bCj(),$async$vw)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aHt,!0,"NgmyWorksheetProjectScan",x.N),$async$vw)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bCM(q),$async$vw)
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
r.R(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h37(s)
w=15
return A.b(C.Lj(t.a.c,p),$async$vw)
case 15:o=f
w=16
return A.b(t.vK(),$async$vw)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.J(x.q).f.R(D.f4x)
w=1
break}r.J(x.q).f.R(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.Ev(p)
case 1:return A.h(u,v)}})
return A.i($async$vw,v)},
NQ(d){return this.bHK(d)},
bHK(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.eKj(d),s,null,!0,!0,x.y),$async$NQ)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oN(t.a.c,A.a([],x.D)),$async$NQ)
case 6:w=7
return A.b(t.vK(),$async$NQ)
case 7:s=t.c
if(s==null){w=1
break}s.J(x.q).f.R(D.f2K)
case 4:case 1:return A.h(u,v)}})
return A.i($async$NQ,v)},
ceM(d){var w=this.c
w.toString
A.bT(B.K,null,new C.eKs(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b4V(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jG
else w=B.c
v=A.m(16)
u=A.I(p?B.e6:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bU,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a2,!0,r,A.aL(!1,q,!0,A.p(r,A.x(A.a([s,B.ad,t,B.bA,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vN,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
a_N(d,e){return this.ceA(d,e)},
ceA(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_N=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.K,null,new C.eKn(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_N)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hr_(r,new C.eKo(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NS(d,e),$async$a_N)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_N,v)},
b1V(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bU,u,u,u)
if(d)t=B.aw
else t=h.a?B.aP:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a2,!0,u,A.aL(!1,u,!0,new A.D(B.y8,A.B(A.a([s,B.bc,t,A.X(B.eD,w?B.bq:B.bl,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah)},
clt(d,e,f,g,h,i){return this.b1V(!1,d,e,f,g,h,i)},
NS(d,e){return this.bHU(d,e)},
bHU(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l9(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NS)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bB3(t.a.c,d.a),$async$NS)
case 6:w=7
return A.b(t.vK(),$async$NS)
case 7:r=t.c
if(r==null){w=1
break}r.J(x.q).f.R(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NS,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tT(o),m=o?B.bZ:B.il
if(q.f)o=D.b87
else{w=q.bCg(n)
v=q.bYj(n)
u=q.gbzn()
if(o)t=B.jG
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ad,v,B.aO,new C.FB(A.p(p,A.B(A.a([q.aBd(Q.NF,"Projects",n,D.aaM),q.aBd(B.w1,"Cashier",n,D.aXt),q.aBd(B.Gc,"Family Tree",n,D.hiV)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ey,0.95,u,p),B.bv],r)
w=q.d
if(w===D.aaM){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b0,new C.axg(q.gaQA(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aA,q.clv(n)],r))}else{o=q.a
if(w===D.aXt)u.push(new C.aox(o.c,n,p))
else{w=q.r
u.push(new C.apF(o.c,o.d,o.e,o.f,new C.eKF(q),new C.eKG(q),new A.cz(w,x.b4)))}}o=A.ce(A.x(u,B.E,p,B.e,B.j,0,B.p),B.t,p,B.y,p,Ag.N0,p,p,B.ag)}return A.c5(p,m,A.bm(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bCg(d){var w=null,v=A.m(8),u=d.a,t=A.X(U.a00,u?B.bq:B.bl,w,w,w,16)
return A.aL(!1,v,!0,new A.D(B.l_,A.B(A.a([t,B.bn,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKg(this),w,w,w,w,w,w,w)},
gbzn(){switch(this.d.a){case 0:return D.aa_
case 1:return D.h8k
case 2:return D.aa0}},
bYj(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cv,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bSn,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bCB,A.aF(!1,B.a2,!0,w,A.aL(!1,A.m(12),!0,A.p(w,D.bPQ,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKk(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)],t),B.E,w,B.e,B.j,0,w,w),r=B.b_.j(0.55),q=A.m(12)
return new C.FB(A.p(w,A.x(A.a([new A.D(E.Zu,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.AS(this.gcB7()),w,w,w,w,w,w,D.flA,w,w,w)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vM,B.jw,w,w,1/0)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.h8j,w)},
aBd(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.r,2):A.I(B.K,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bl
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bl
return A.E(A.aF(!1,B.a2,!0,u,A.aL(!1,s,!0,A.db(u,A.B(A.a([w,B.ej,new A.dr(1,B.cn,A.d(e,u,1,B.a1,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b7,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iN,u,u,u,B.FU,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eKB(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),1)},
clv(d){var w,v,u,t,s,r,q=this,p=null
if(J.co(q.e)){w=d.a
v=w?B.e1:B.c
u=A.m(15)
t=A.p(p,D.bPW,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eX,28)],x.V),D.c11,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.FB(A.p(p,A.x(A.a([t,B.d5,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dY,A.B(A.a([A.E(q.aS8(B.ja,"Scan QR",new C.eKv(q),d),1),B.as,A.E(q.aS8(R.yO,"Upload file",new C.eKw(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aA,A.bG(D.fMv,q.gaQA(),A.bn(B.aV,p,p,p,B.c,B.fU,p,p,new A.b7(A.m(12),B.a0),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bzf,1.05,D.aa_,p)}w=J.b6(q.e,new C.eKx(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.FB(A.x(w,B.m,p,B.e,B.j,0,B.p),16,B.bU,1,D.aa_,p)},
aS8(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aV.j(0.45),B.r,1)
return A.aF(!1,B.a2,!0,u,A.aL(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b_,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.fjY,B.L,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.aih,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ah)},
clu(d,e){var w,v,u=null,t=e.a,s=t?B.e1:B.c,r=A.m(14),q=A.I(t?B.e6:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.eq,10)],x.V),o=A.m(14),n=t?B.bq:B.bl
n=A.bx(B.VW,new A.fK(1.7777777777777777,C.aQ6(!0,B.fC,1/0,Q.NF,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.AS(d.gx_()),u,u,u,u,u,u,D.fi2,u,u,u)],w),B.E,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a2,!0,u,A.aL(!1,o,!0,A.x(A.a([n,new A.D(B.bC,A.B(A.a([v,A.aI(u,u,u,u,A.X(Ah.a11,t?B.bq:B.bl,u,u,u,u),u,u,u,new C.eKt(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.E,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eKu(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ah),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ea,u,u,u,1/0)}}
C.bx8.prototype={}
C.r5.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.G(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcUA(){var w,v,u,t,s=this.c
if(s===B.k.jc(s))w=B.o.u(B.k.O(s))
else{v=B.k.ac(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aN(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lo.prototype={
gx_(){return B.d.cM(this.d,0,new C.cyY())},
ag(){var w=this,v=w.d,u=A.S(v).k("N<1,a7<n,@>>")
v=A.C(new A.N(v,new C.cyX(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ad()],x.N,x.z)},
bc6(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lo(w.a,w.b,v,u,w.e)},
bbO(d){return this.bc6(d,null)},
SO(d){return this.bc6(null,d)}}
C.HI.prototype={
a3(){return"FamilyGender."+this.b}}
C.i1.prototype={
ag(){var w=this
return A.G(["id",w.a,"name",w.b,"gender",C.hmJ(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDY(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i1(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.akM.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kF.prototype={
gaoG(){var w=this.f
return new A.Z(w,new C.bOT(),A.S(w).k("Z<1>")).gL(0)},
ag(){var w=this,v=w.f,u=A.S(v).k("N<1,a7<n,@>>")
v=A.C(new A.N(v,new C.bOS(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ad(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i2_(w.y),"games",w.z],x.N,x.z)},
wp(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kF(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bc5(d,e){var w=null
return this.wp(w,w,w,d,e,w,w,w,w)},
cKd(d,e,f,g,h,i,j){return this.wp(d,e,null,f,g,h,i,j,null)},
aE2(d,e){var w=null
return this.wp(w,w,w,w,d,w,w,e,w)},
cKf(d,e,f,g,h,i,j,k){return this.wp(d,e,null,f,g,h,i,j,k)},
cII(d){var w=null
return this.wp(w,w,w,w,w,w,w,d,w)},
cJ5(d){var w=null
return this.wp(w,w,w,w,w,w,w,w,d)},
bbI(d){var w=null
return this.wp(w,w,d,w,w,w,w,w,w)},
aDP(d){var w=null
return this.wp(w,w,w,w,w,d,w,w,w)},
cJK(d,e,f){var w=null
return this.wp(w,d,w,w,e,w,w,f,w)},
cIv(d){var w=null
return this.wp(w,w,w,d,w,w,w,w,w)},
cJi(d,e){var w=null
return this.wp(d,w,w,w,w,w,e,w,w)}}
C.cyZ.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cz_.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aGV.prototype={}
C.b8y.prototype={
bA(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b8y()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b8x.prototype={
gwh(){return!0},
gG2(){return this.z.b<this.b.length},
aTM(d){switch(0){case 0:return d.a.c}},
aTt(d){switch(0){case 0:return d.a.d}},
bRI(d,e){switch(0){case 0:return new A.hN(d,e)}},
bR5(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h5(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iG(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.Hr(b4)
switch(0){case 0:v=b5.b
u=new A.kC(0,v,0,1/0)
t=w===B.TS
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fP(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.M)(q),++h){g=q[h]
g.h5(b4,u,!0)
f=b1.aTM(g)
f.toString
e=b1.aTt(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGV(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGV(k,j,i))}d=s.length
switch(0){case 0:q=b5.cw(new A.hN(m,l))
a0=q.a
a1=q.b
b1.a=new A.iG(0,0,a0,a1)
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
for(q=B.d.fP(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.M)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aTM(g)
e=b1.aTt(g)
e.toString
a9=b1.bR5(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bRI(a6,a3+a9)
b0=g.a
g.a=new A.iG(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h1(d){var w,v,u,t,s,r=this
r.ll(d)
w=d.b
w.ib()
v=A.dk()
u=r.a
v.eb(u.a,u.b,0,1)
w.oZ(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.M)(u),++s)u[s].h1(d)
w.nj(0)},
Gy(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ib(){return this.z}}
C.bvt.prototype={}
var z=a.updateTypes(["aA<~>()","R(i1)","R(kF)","~()","R(nj)","a7<n,@>(kF)","H(kF,kF)","H(i1,i1)","n(i1)","kF(a7<@,@>)","R(lo)","nj(a7<@,@>)","a7<n,@>(nj)","R(ul)","ul()","H(i1)","ai<i1>()","R(z6)","ZV(Y)","n?(i1)","eE<n?>(i1)","aA<~>(lo)","R(r5)","a7<n,@>(i1)","i1(a7<@,@>)","H(lo,lo)","SP(Y)","v(on)","R(LY)","R(uk)","~(i1)","n(n)","V8(Y)","SO(Y)","ad4(Y)","YR(Y)","i1(i1)","cN(by<n,FQ>)","cN(K7)","Zk(Y)","H?(i1)","i1()","R(K7)","D(i1)","~(HI)","Zg(Y)","v(HI,n,a1)","R(aeC)","by<n,ai<a7<n,@>>>(n,ai<nj>)","Zi(Y)","+count,id,name(H,n,n)(kF)","kF(kF)","a_f(Y)","n(kF)","R(lG)","lG()","Yq(Y)","a11(Y)","YT(Y)","YS(Y)","~(H)","~(n,le?)","v(r5)","adp(Y)","~(m6)","aA<~>([n?])","L(L,lo)","v(lo)","L(L,r5)","a7<n,@>(r5)","r5(a7<@,@>)","ai<le>()","uk()","n(T)","lo(a7<@,@>)","cr(HH)","n(lo)","a7<n,@>(lo)","H(nj,nj)","kF(a7<n,@>)","a_g(Y)"])
C.fBc.prototype={
$1(d){return d.a+" "+d.b},
$S:126}
C.fBb.prototype={
blk(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qY(s,d,B.hF,"book",E.Fz),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.L7(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.blk(d)},
$S:288}
C.fBd.prototype={
$1(d){return d.b},
$S:126}
C.fKu.prototype={
$1(d){var w=null
return A.eM(w,B.K,new G.Px(this.a,this.b,w),w,w,0,B.Zp,B.d4,w,w,w)},
$S:47}
C.fph.prototype={
$1(d){return d!=null},
$S:203}
C.fpi.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:203}
C.fpn.prototype={
$1(d){if(this.a)return new A.t(d.a*520,d.b*160)
return d},
$S:175}
C.fyW.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fb(d,w,w,w,A.h8(w,B.rJ,w,w,w,w,w,w,w,B.du,w,w,10.5,w,B.ep,w,!0,w,w,w,w),w),u=f?B.ep:B.vW
return new A.nS(D.buJ,A.a9G(A.a([new A.fR(130,w,v),new A.z5(1,B.G5,A.fb(e,w,w,w,A.h8(w,g==null?D.eiJ:g,w,w,w,w,w,w,w,B.du,w,w,11,w,u,w,!0,w,w,w,w),w))],x.F),B.xN,B.lB))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1918}
C.fyV.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vx(999)
f=A.x7(A.lA(h,A.fb("Cashier",h,h,h,A.h8(h,D.zG,h,h,h,h,h,h,h,B.du,h,h,10,h,B.ep,h,!0,h,h,h,h),h),h,new A.kD(D.eiA,h,f,B.hJ,h),h,h,D.bvd,h))
w=A.x7(A.fb("Debt receipt",h,h,h,A.h8(h,h,h,h,h,h,h,h,h,B.du,h,h,22,h,B.ep,h,!0,h,h,h,h),h))
v=A.x7(A.fb(C.wQ(new A.T(Date.now(),0,!1),!0),h,h,h,D.a8y,h))
u=A.vx(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fb(s,h,h,h,A.h8(h,h,h,h,h,h,h,h,h,B.du,h,h,14,h,B.ep,h,!0,h,h,h,h),h)
r=A.fb("Person who owes",h,h,h,D.a8y,h)
q=A.vx(10)
p=x.F
u=A.lA(h,A.yZ(A.a([s,new A.fR(h,2,h),r,new A.fR(h,10,h),A.lA(h,A.yZ(A.a([A.fb("Amount owed",h,h,h,D.a8y,h),new A.fR(h,2,h),A.fb(A.AS(t.c),h,h,h,A.h8(h,D.zG,h,h,h,h,h,h,h,B.du,h,h,20,h,B.ep,h,!0,h,h,h,h),h)],p),B.r4,B.lB),h,new A.kD(B.pi,h,q,B.hJ,h),h,h,D.bup,1/0)],p),B.r4,B.lB),h,new A.kD(E.aIP,h,u,B.hJ,h),h,h,D.bwg,1/0)
q=new A.nz(D.eiD,0.9,B.kT)
r=A.vx(12)
s=i.c
o=s.$2("Original due",C.wQ(t.r,!1))
n=s.$2("Current due",C.wQ(t.f,!1))
m=i.d
l=new A.nz(m,1.1,B.kT)
k=A.vx(8)
j=i.a
k=A.a([o,n,new A.fR(h,6,h),A.lA(h,A.x7(A.fb(t.gaKT(),h,h,h,A.h8(h,m,h,h,h,h,h,h,h,B.du,h,h,11,h,B.ep,h,!0,0.5,h,h,h),h)),h,new A.kD(h,new A.pF(l,l,l,l),k,B.hJ,h),h,h,D.bvl,1/0),new A.fR(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zG))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zG))
else{n=A.fb("Missed days ("+n+")",h,h,h,A.h8(h,B.rJ,h,h,h,h,h,h,h,B.du,h,h,10.5,h,B.ep,h,!0,h,h,h,h),h)
m=A.S(o).k("N<1,Sm>")
o=A.C(new A.N(o,new C.fyU(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fR(h,4,h),n,new A.fR(h,6,h),new C.b8x(5,5,new C.b8y(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fR(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fR(h,8,h),w,new A.fR(h,3,h),v,new A.fR(h,16,h),u,new A.fR(h,10,h),A.lA(h,A.yZ(k,B.xN,B.lB),h,new A.kD(h,new A.pF(q,q,q,q),r,B.hJ,h),h,h,B.ait,1/0)],p)
w=j.a
if(w!=null){v=new A.nz(B.ID,1,B.kT)
B.d.v(f,A.a([new A.fR(h,16,h),A.fb("Debtor signature",h,h,h,A.h8(h,B.rJ,h,h,h,h,h,h,h,B.du,h,h,10,h,B.ep,h,!0,h,h,h,h),h),new A.fR(h,6,h),A.lA(h,new A.HY(w,B.W5,h,h),h,new A.kD(h,new A.pF(v,v,v,v),A.vx(6),B.hJ,h),82,h,B.N5,1/0)],p))}f.push(new A.fR(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fb(w,h,h,h,D.faG,h))
f.push(new A.fR(h,18,h))
f.push(A.x7(A.fb("NGMY.ORG",h,h,h,A.h8(h,D.zG,h,h,h,h,h,h,h,B.du,h,h,14,h,B.ep,h,!0,1.8,h,h,h),h)))
return f},
$S:456}
C.fyU.prototype={
$1(d){var w=null,v=new A.nz(D.IE,0.7,B.kT),u=A.vx(999)
return A.lA(w,A.fb(C.wQ(d,!1),w,w,w,A.h8(w,D.IE,w,w,w,w,w,w,w,B.du,w,w,9.5,w,B.ep,w,!0,w,w,w,w),w),w,new A.kD(w,new A.pF(v,v,v,v),u,B.hJ,w),w,w,D.bAE,w)},
$S:1919}
C.c47.prototype={
$1(d){var w=null,v=B.bx.j(0.08),u=A.m(999),t=A.I(B.bx.j(0.28),B.r,1)
return A.p(w,A.d(C.wQ(d,!1),w,w,w,w,w,w,D.fhy,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eH,w,w,w)},
$S:1920}
C.fL_.prototype={
$1(d){var w=null,v=A.aH(d,B.bW,x.w).w,u=A.m(26),t=A.aI(w,w,w,w,D.bTh,w,w,w,new C.fKX(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eM(w,B.K,new A.cT(new A.aX(0,380,0,v.a.b*0.9),A.aF(!1,B.a2,!0,u,new A.D(B.Zf,A.x(A.a([new A.bK(B.a8,w,w,t,w),new A.dr(1,B.cn,A.ce(A.x(A.a([new A.eG(new C.aYy(r,w),s),B.R,A.B(A.a([A.E(A.es(B.yV,D.fIQ,new C.fKY(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fa,w,new A.b7(A.m(14),B.a0),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.E(A.dp(B.a1B,D.fFh,new C.fKZ(r,d),A.bn(B.b_,w,w,w,B.c,w,B.fa,w,new A.b7(A.m(14),B.a0),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,B.ag),w)],p),B.m,w,B.e,B.P,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.ah),w),w,w,0,Ak.ZD,B.d4,w,w,w)},
$S:47}
C.fKX.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.fKY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.ak$.x.h(0,t.a)
m=m==null?null:m.gba()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m0(2.5),$async$$0)
case 4:w=3
return A.b(e.hv(B.h5),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eV(B.dE.gaQ(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aN(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.t2(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.J(x.q).f.R(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fKZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fFw(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.J(x.q).f
s.R(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fKS.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eM(w,B.av,A.x(A.a([new A.D(D.bw4,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nC,w,w,w),1),A.aI(w,w,w,w,B.ly,w,w,w,new C.fKQ(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dr(1,B.cn,new A.D(B.fQ,A.bx(A.m(14),A.fO(t,B.A,w,w,B.ce,B.dw,!1,w,!1,w,w),B.aq),w),w),new A.D(B.MJ,new A.a8(1/0,w,A.dp(B.p7,D.aSF,new C.fKR(t,this.c,d),A.bn(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.a0),w,w,w)),w),w)],u),B.m,w,B.e,B.P,0,B.p),w,w,w,B.MX,B.d4,w,new A.b7(v,B.a0),w)},
$S:47}
C.fKQ.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.fKR.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t2(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.J(x.q).f.R(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fL3.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eM(w,B.av,new A.D(D.bwc,A.x(A.a([A.B(A.a([D.bBH,A.aI(w,w,w,w,B.ly,w,w,w,new C.fL1(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.N,new A.eG(A.bx(A.m(14),A.p(w,A.b4(w,w,w,new C.baF(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ad,new A.a8(1/0,w,A.dp(B.p7,D.aSF,new C.fL2(t,s,d),A.bn(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.a0),w,w,w)),w)],u),B.m,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d4,w,new A.b7(v,B.a0),w)},
$S:47}
C.fL1.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.fL2.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.ak$.x.h(0,t.a)
n=n==null?null:n.gba()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m0(2.5),$async$$0)
case 4:w=3
return A.b(e.hv(B.h5),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aN(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eV(B.dE.gaQ(s))
w=5
return A.b(A.t2(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.J(x.q).f.R(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.ftC.prototype={
$1(d){return d.a===this.a},
$S:264}
C.dI2.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dHO.prototype={
bky(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e1:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dHR(s,q,e),p,!0,!0,!1,B.IU,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dHS(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bky(d,e)},
$S:1921}
C.dHR.prototype={
$1(d){var w,v=null,u=this.c===B.wv,t=u?D.dj2:D.deQ
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(N.aj_,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ad,A.ix(!0,v,v,B.y,D.f1l,new C.dHQ(this.a,w,t,d),t.length,v,B.dP,B.ag,!0)],x.p),B.ai,v,B.e,B.P,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:25}
C.dHQ.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cM.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cM
else u=(t.b.a.d.a?B.bq:B.bl).j(0.16)
u=A.I(u,B.r,q?1.6:1)
return A.aL(!1,p,!0,A.p(B.A,C.aYx(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dHP(t.d,r),s,s,s,s,s,s,s)},
$S:187}
C.dHP.prototype={
$0(){A.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.dHS.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dHM.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:96}
C.dHN.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cI(B.ct,e,v)
return new A.d0(e,!1,A.iq(B.A,A.au(A.aF(!1,B.a2,!0,v,new A.dY(new C.dHL(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ah),v,v,v),v,new A.bf(t,new A.bp(0.96,1,u),u.k("bf<bL.T>"))),v)},
$S:32}
C.dHL.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.bW,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e1:B.c,f=A.m(14),e=A.I((h?B.bq:B.bl).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aL(!1,v,!0,new A.D(B.ey,A.X(B.cx,i.a.d.a?B.bq:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dHw(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aSF("Name")
r=l.a
q=r.d==null?k:new C.dHx(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bm:B.lU
n=A.I(B.cM.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.V,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bbZ(new A.D(B.fv,A.aL(!1,p,!0,A.p(B.A,C.aYx(m==null?"\ud83d\udc64":A.fzK(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cm,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.kO,k,B.a8o,k,k)
v=A.a([v,B.ad,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aTj("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dHy(r,a0),r.d===B.wv),1),B.ab,A.E(i.aTj("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dHD(r,a0),r.d===B.a5e),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bK(B.a3,k,k,A.ho(D.bRC,D.fH8,new C.dHE(r,l.e,a0),A.fx(k,k,k,k,k,k,k,k,k,k,k,B.cM,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uo(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.V,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aSG("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.dZ,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bl).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wQ(r.a,!1)
v.push(A.aF(!1,B.a2,!0,q,A.aL(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bA,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.j,0,B.p),1),D.bOp],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bj,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dHF(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ah))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.V,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aSF("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.ad)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b0h(r.b.length!==0,B.mA,new C.dHG(r,i,a0),new C.dHH(r,a0),"Upload from gallery","ID photo"))
v.push(i.b0h(r.c.length!==0,D.bHQ,new C.dHI(r,i,d,a0),new C.dHJ(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Aj.a7v("Signature (optional)",t,new C.dHK(a0),new C.dHz(a0,t),new C.dHA(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bq:B.bl
s=(i?B.bq:B.bl).j(0.28)
s=A.E(A.dQ(E.aSy,new C.dHB(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.tT,k,new A.b7(A.m(10),B.a0),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bn(B.cM,k,k,k,B.c,k,B.tT,k,new A.b7(A.m(10),B.a0),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.v3,k,k,k),new C.dHC(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.ce(A.x(v,B.ai,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ag),B.f,k,new A.aX(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.tY,B.jw,k,k,360)},
$S:158}
C.dHw.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dHx.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dHy.prototype={
$0(){return this.b.$1(new C.dHv(this.a))},
$S:0}
C.dHv.prototype={
$0(){var w=this.a
w.d=B.wv
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dHD.prototype={
$0(){return this.b.$1(new C.dHu(this.a))},
$S:0}
C.dHu.prototype={
$0(){var w=this.a
w.d=B.a5e
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dHE.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dHF.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wU(null,u.b,A.c2(2020,1,1,0,0,0,0,0),null,s,A.c2(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dHt(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dHt.prototype={
$0(){var w=this.b
return this.a.a=A.c2(w.gck(),w.gcf(),w.gcv(),0,0,0,0,0)},
$S:0}
C.dHG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Ps(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dHs(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dHs.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dHH.prototype={
$0(){return this.b.$1(new C.dHr(this.a))},
$S:0}
C.dHr.prototype={
$0(){return this.a.b=""},
$S:0}
C.dHI.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e1:B.c
w=3
return A.b(A.bT(q,null,new C.dHp(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Ps(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dHq(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dHp.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.ao8,w,w,w,w,new C.dHj(d),!1,w,w,w,w,w,w,w,D.fxq,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.ao6,w,w,w,w,new C.dHk(d),!1,w,w,w,w,w,w,w,D.fEi,w,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),!0,!1,B.af,!0,!0)},
$S:25}
C.dHj.prototype={
$0(){A.a3(this.a,!1).N("camera")
return null},
$S:0}
C.dHk.prototype={
$0(){A.a3(this.a,!1).N("gallery")
return null},
$S:0}
C.dHq.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dHJ.prototype={
$0(){return this.b.$1(new C.dHo(this.a))},
$S:0}
C.dHo.prototype={
$0(){return this.a.c=""},
$S:0}
C.dHK.prototype={
$0(){return this.a.$1(new C.dHn())},
$S:0}
C.dHn.prototype={
$0(){},
$S:0}
C.dHz.prototype={
$0(){return this.a.$1(new C.dHm(this.b))},
$S:0}
C.dHm.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dHA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahD(u.a,null,null,new C.dHl(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dHl.prototype={
$4(d,e,f,g){this.a.$1(new C.dHi(this.b,d))},
$S:477}
C.dHi.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dHB.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dHC.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.J(x.q).f.R(D.f6p)
return}if(w.a.d==null){w.c.J(x.q).f.R(D.f3i)
return}A.a3(w.c,!1).N(!0)},
$S:0}
C.dI5.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:96}
C.dI6.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e1:B.c,n=A.m(14),m=A.I((p?B.bq:B.bl).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AS(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.z2(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.z2(r).length>0?B.bx:B.cM,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bl
t=(q?B.bq:B.bl).j(0.28)
s=x.p
return new A.d0(e,!1,A.au(A.aF(!1,B.a2,!0,r,A.p(r,A.x(A.a([p,B.N,v,u,B.aA,A.B(A.a([A.E(A.dQ(B.nD,new C.dI3(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jJ,r,new A.b7(A.m(10),B.a0),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fEI,new C.dI4(d),A.bn(B.cM,r,r,r,B.c,r,B.jJ,r,new A.b7(A.m(10),B.a0),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ai,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.By,E.Zu,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ah),r,r,r),r)},
$S:32}
C.dI3.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dI4.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dI_.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dI0(r),p=r.a.d.a,o=p?B.e1:B.c,n=A.m(14),m=A.I((p?B.bq:B.bl).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a1,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AS(l.c),s,s,s,s,s,s,D.fj2,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iC((r.a.d.a?B.bq:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a0l,"View receipt",new C.dHT(r,d,l))
u=l.x!=null
t=u?B.rn:B.q8
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bw9,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dHU(r,d,l)),q.$3$icon$label$onTap(B.BP,"Edit",new C.dHV(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mA,"View / download ID",new C.dHW(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bHP,"View / download selfie",new C.dHX(r,d,l)))
if(l.gaFG())p.push(q.$3$icon$label$onTap(A9.a1r,"View / download signature",new C.dHY(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bx,B.ec,"Delete",new C.dHZ(r,d,l)))
p.push(B.au)
return A.bm(!0,new A.D(B.vM,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:25}
C.dI0.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.av
else w=d
return A.aL(!1,v,!0,new A.D(B.eP,A.B(A.a([A.X(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1922}
C.dHT.prototype={
$0(){A.a3(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fKW(w,this.c)},
$S:0}
C.dHU.prototype={
$0(){A.a3(this.b,!1).N(null)
this.a.S8(this.c)},
$S:0}
C.dHV.prototype={
$0(){A.a3(this.b,!1).N(null)
this.a.D7(this.c)},
$S:0}
C.dHW.prototype={
$0(){var w,v,u
A.a3(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bD8(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dHX.prototype={
$0(){var w,v,u
A.a3(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bD8(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dHY.prototype={
$0(){A.a3(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fL0(w,this.c)},
$S:0}
C.dHZ.prototype={
$0(){A.a3(this.b,!1).N(null)
this.a.Pr(0,this.c)},
$S:0}
C.dI7.prototype={
$1(d){return d.x==null},
$S:264}
C.dI8.prototype={
$1(d){return d.x!=null},
$S:264}
C.dI9.prototype={
$2(d,e){return d+e.c},
$S:1923}
C.dIa.prototype={
$0(){return this.a.bzS()},
$S:0}
C.dI1.prototype={
$0(){return this.a.aeY(this.b)},
$S:0}
C.fuf.prototype={
$1(d){return d.a===this.a},
$S:z+29}
C.fug.prototype={
$0(){return B.d.gI(D.a2H)},
$S:z+72}
C.d8b.prototype={
$0(){var w=this.a
return w.m(new C.d89(w,this.b))},
$S:0}
C.d89.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d8a.prototype={
$0(){},
$S:0}
C.d8c.prototype={
$0(){var w=this.a.gbZ1()
A.a3(this.b,!1).N(w)
return null},
$S:0}
C.fwv.prototype={
$1(d){return C.h7n(A.a2(d,x.N,x.z))},
$S:z+11}
C.fww.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fwx.prototype={
$2(d,e){var w=A.c9(d.a,null),v=A.c9(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+78}
C.fJA.prototype={
$1(d){return d.ag()},
$S:z+12}
C.fRU.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ftt.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bO1.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f1(e,v)?v:null},
$S:1924}
C.fK8.prototype={
$1(d){var w=this
return new C.Zi(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+49}
C.d8R.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d8Q(w,d))},
$S:z+75}
C.d8Q.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d8F.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cK(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d8C.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d8d.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d8e.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d8G.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d8m.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e1:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bM(!1,B.dh,w,w,!0,w,w,new C.d8k(d),w,w),A.bG(B.wQ,new C.d8l(d),A.bn(B.mY,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.d8k.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.d8l.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.d8n.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.d8D.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.d8E.prototype={
$0(){return B.d.gI(D.z6)},
$S:z+14}
C.d8i.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyo(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.SO(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+33}
C.d8j.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d8o.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.YR(v,u,J.ad(w.d),null)},
$S:z+35}
C.d8p.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d8P.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.Yz(r.y,r.gyo(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d8N(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.ba3(v,e,w,u,t,r.gbQb(),C.hmI(r.y.Q),r.gyo(0),s)
w=t}return A.c8(q,new C.d8O(r,e),new A.D(B.Zv,w,s))},
$S:1925}
C.d8O.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd0(t).ay){t=this.b
u=x.fx.a(B.d.gd0(u.f.f)).guQ(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.dk()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fA(v*3.141592653589793*0.5)
return A.fo(B.a3,A.dd(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.d8N.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGN(B.pW,B.iO)},
$S:0}
C.d8z.prototype={
$0(){var w=this.a
return w.m(new C.d8y(w))},
$S:0}
C.d8y.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d8A.prototype={
$0(){var w=this.a.c
w.toString
A.a3(w,!1).N(null)
return null},
$S:0}
C.d8f.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.k3.j(0.5),r=x.p,q=A.a([D.fw3,B.ad],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.co(p.d)?"Write this book":"Write a new book"
q.push(p.YV(d,B.e3,w,J.co(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.YV(d,H.am1,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cK(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cu,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.ku.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cu,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.ku.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.YV(d,T.an9,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.YV(d,B.qd,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.YV(d,B.qd,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eM(u,E.B2,A.bm(!0,new A.D(A8.y7,A.x(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.ajo,B.d4,u,new A.b7(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:47}
C.d8B.prototype={
$0(){A.a3(this.a,!1).N(this.b)
return null},
$S:0}
C.d8s.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cK(w.d)
return new C.Zk(v,J.cK(w.d),w.r+1,null)},
$S:z+39}
C.d8t.prototype={
$1(d){var w=null
return A.ou(!1,A.ek(w,w,w,E.B2,new A.jK(this.a,new C.d8r(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:287}
C.d8r.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a84,B.or,A.E(A.d(e,w,w,w,w,w,w,B.jh,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:738}
C.d8u.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d8v.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:178}
C.d8w.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d8x.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.B0(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.RB(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d8q(s,t))
w=4
return A.b(s.l2(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d8q.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d8I.prototype={
$1(d){var w=null
return A.ou(!1,A.ek(w,w,w,E.B2,new A.jK(this.a,new C.d8H(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:287}
C.d8H.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a84,B.or,A.E(A.d(e,w,w,w,w,w,w,B.jh,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:738}
C.d8J.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d8K.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:178}
C.d8L.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:178}
C.d8M.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.B0(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.l2(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d8g.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bhw(B.pW,A_.Mv)},
$S:0}
C.d8h.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGN(B.pW,A_.Mv)},
$S:0}
C.daB.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.daC.prototype={
$1(d){var w=this.a
return w.m(new C.daA(w))},
$S:8}
C.daA.prototype={
$0(){return this.a.e="page"},
$S:0}
C.daD.prototype={
$1(d){var w=this.a
return w.m(new C.daz(w))},
$S:8}
C.daz.prototype={
$0(){return this.a.e="book"},
$S:0}
C.daE.prototype={
$1(d){var w=this.a
return w.m(new C.day(w))},
$S:8}
C.day.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.daF.prototype={
$0(){var w=this.a
return w.m(new C.dax(w,this.b))},
$S:0}
C.dax.prototype={
$0(){var w=this.b
this.a.d.saU(0,w)
return w},
$S:0}
C.daG.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1D()
A.a3(this.b,!1).N(new A.bou(w,v))},
$S:0}
C.d95.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d94.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Zg(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+45}
C.d99.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.d98.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b7E(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hf,v,v,v)
return A.ek(A.a([A.bM(!1,B.dh,v,v,!0,v,v,new C.d96(d),v,v),A.bG(B.wQ,new C.d97(d),A.bn(B.mY,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.B2,w,v,v,v,v,D.fuS,v)},
$S:18}
C.d96.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.d97.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.d9a.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.d9b.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)r.push(new A.a8(s,t,w[u],t))
return A.ce(A.bX(B.bB,r,B.bs,18,14),B.t,t,B.y,t,D.bx7,t,t,B.ag)},
$S:302}
C.d93.prototype={
$0(){return this.a.Q8(0,this.b)},
$S:0}
C.d92.prototype={
$0(){return this.a.PD(0,this.b)},
$S:0}
C.cHK.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cHL.prototype={
$0(){return B.d.gI(D.z6)},
$S:z+14}
C.cHM.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bU(0,new A.D(d,A.c1(w,new A.o(w,w,A.I(this.a.j(f),B.r,g),v,w,w,B.n),B.bf),w),0,0,0)},
$S:1927}
C.d0a.prototype={
$1(d){return this.a.m(new C.d09(this.b,this.c))},
$S:8}
C.d09.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d0z.prototype={
$1(d){return this.a.m(new C.d0m())},
$S:2}
C.d0m.prototype={
$0(){},
$S:0}
C.d0A.prototype={
$1(d){return this.a.m(new C.d0l())},
$S:2}
C.d0l.prototype={
$0(){},
$S:0}
C.d0B.prototype={
$0(){var w=this.a
return w.m(new C.d0k(w,this.b))},
$S:0}
C.d0k.prototype={
$0(){var w=this.a
return w.d=w.go7().FH(this.b.a)},
$S:0}
C.d0C.prototype={
$0(){var w=this.a
return w.m(new C.d0j(w,this.b))},
$S:0}
C.d0j.prototype={
$0(){var w=this.a
return w.d=w.go7().cI1(this.b)},
$S:0}
C.d0D.prototype={
$1(d){return this.a.m(new C.d0i())},
$S:2}
C.d0i.prototype={
$0(){},
$S:0}
C.d0E.prototype={
$0(){var w=this.a
return w.m(new C.d0h(w,this.b))},
$S:0}
C.d0h.prototype={
$0(){var w=this.a
return w.d=w.go7().cI6(this.b.a)},
$S:0}
C.d0F.prototype={
$1(d){var w=this.a
return w.m(new C.d0u(w,d))},
$S:7}
C.d0u.prototype={
$0(){var w=this.a
return w.d=w.go7().cJ0(this.b)},
$S:0}
C.d0G.prototype={
$1(d){var w=this.a
return w.d=w.go7().aDS(d)},
$S:2}
C.d0H.prototype={
$1(d){var w=this.a
return w.d=w.go7().cI9(d)},
$S:2}
C.d0J.prototype={
$1(d){var w=this.a
return w.d=w.go7().cIZ(d)},
$S:2}
C.d0K.prototype={
$1(d){var w=this.a
return w.m(new C.d0t(w,d))},
$S:8}
C.d0t.prototype={
$0(){var w=this.a
return w.d=w.go7().cIQ(this.b)},
$S:0}
C.d0L.prototype={
$0(){var w=this.a,v=w.go7(),u=B.a.i(w.gyo(0).a.a),t=B.a.i(w.gaB1().a.a)
u=v.bcf(B.a.i(w.gaqQ().a.a),t,u)
A.a3(this.b,!1).N(u)
return null},
$S:0}
C.bOb.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:9}
C.bO5.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bO4(w,d))},
$S:11}
C.bO4.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a4(0)}},
$S:0}
C.bOe.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bO6.prototype={
$0(){var w=this.a
w.Q=D.aX4
w.acP(1)
w.r.x=null},
$S:0}
C.bO7.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.aX4)return
w=new A.en()
w.df(u.as*13+u.a.e)
v=u.r
v.Q=3+w.au(3)
v.z=D.cWt[w.au(6)]
v.as=u.f.a+2.6},
$S:0}
C.bOa.prototype={
$0(){var w=this.a
w.Q=D.aaA
w.acP(2)
w.r.z=null},
$S:0}
C.bO9.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hgT
t.acP(3)
w=t.r
w.d=s
w.x="I say: "+t.gBW()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.au(3)
w.z=s?D.d1u[v.au(4)]:D.dlq[v.au(3)]
w.as=t.a+2.8},
$S:0}
C.bOc.prototype={
$0(){var w=this.a
w.Q=D.aX5
w.CW=this.b
w.cy=1
w.acP(4)
w.r.f=w.f.a+5},
$S:0}
C.bOd.prototype={
$0(){},
$S:0}
C.bO8.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).iW()},
$S:0}
C.bO2.prototype={
$0(){return this.a.aCI(this.b)},
$S:0}
C.bO3.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).iW()},
$S:0}
C.bPg.prototype={
$0(){var w=this
return w.a.Qr(w.b,0,w.c,w.d)},
$S:0}
C.bPh.prototype={
$0(){var w=this
return w.a.Qr(w.b,3,w.c,w.d)},
$S:0}
C.bPi.prototype={
$0(){var w=this
return w.a.Qr(w.b,1,w.c,w.d)},
$S:0}
C.bPj.prototype={
$0(){var w=this
return w.a.bPD(w.b,w.c,w.d)},
$S:0}
C.bPk.prototype={
$0(){var w=this
return w.a.Qr(w.b,4,w.c,w.d)},
$S:0}
C.bPl.prototype={
$0(){var w=this
return w.a.Qr(w.b,2,w.c,w.d)},
$S:0}
C.bPm.prototype={
$0(){var w=this
return w.a.Qr(w.b,5,w.c,w.d)},
$S:0}
C.bPn.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:1928}
C.bPf.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a3O[d],p=q.a.aa(0,new A.t(0,-q.b*1.2*124)),o=A.fX(r,r,3,r,A.cZ(r,r,r,r,r,r,r,r,r,D.fan,e),B.a5,B.c8,r,B.dQ,B.c6)
o.t0(130)
w=o.b.a.c
w=p.aF(0,new A.t(0,w.gbd(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bz(A.bP(w,v.gbd(v)+12,u+18),B.hZ)
u=this.a
v=t.eQ(B.dy)
w=$.W()
s=A.K()
s.r=B.dn.gp(0)
u.aD(v,s)
s=A.K()
s.r=D.xI.gp(0)
u.aD(t,s)
w=new A.aJ(w.r,B.ak,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.b1(s-5,v))
w.D(new A.ap(s+1,p.b+1))
w.D(new A.ap(s+6,v))
w.D(new A.bv())
v=A.K()
v.r=D.xI.gp(0)
u.aJ(w,v)
o.a6(u,new A.t(t.a+9,t.b+6))},
$S:739}
C.bOs.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.bOt.prototype={
$2(d,e){var w=this.a,v=B.o.aL(w.aEm(d),w.aEm(e))
if(v!==0)return v
return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.fiy.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.fRL.prototype={
$2(d,e){if(e!=null)J.cc(this.a.c4(0,d,new C.fRM()),e)},
$S:z+61}
C.fRM.prototype={
$0(){return A.a([],x.J)},
$S:z+71}
C.fRN.prototype={
$1(d){return d!==this.a},
$S:3}
C.fRO.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.fRP.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.fRK(this.c,d))},
$S:3}
C.fRK.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fRQ.prototype={
$1(d){return d!==this.a},
$S:3}
C.fRR.prototype={
$1(d){return d!==this.a},
$S:3}
C.fRS.prototype={
$1(d){return d!==this.a&&!B.d.b3(this.b,new C.fRJ(this.c,d))},
$S:3}
C.fRJ.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fuN.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fxl.prototype={
$1(d){return!this.a.q(0,d)},
$S:3}
C.fIK.prototype={
$1(d){return d.Q},
$S:z+15}
C.fIL.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fre.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fxo.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bJg.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.des.prototype={
$0(){return A.a3(this.a,!1).iW()},
$S:0}
C.dTT.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dTU.prototype={
$1(d){return this.a},
$S:38}
C.dTV.prototype={
$0(){var w=this.a
return w.d=w.gS9().bbI(this.b)},
$S:0}
C.dTR.prototype={
$1(d){return new C.SP(this.a,null)},
$S:z+26}
C.dTS.prototype={
$1(d){return d.a===this.a.a},
$S:z+28}
C.dTQ.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hf,w,w,w)
return A.ek(A.a([A.bM(!1,E.aSI,w,w,!0,w,w,new C.dTO(d),w,w),A.bM(!1,D.fCf,w,w,!0,w,w,new C.dTP(d),w,w)],x.p),w,w,D.iJ,v,w,w,w,w,D.fpa,w)},
$S:18}
C.dTO.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dTP.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dTN.prototype={
$0(){var w=null,v=this.a.c.J(x.q).f,u=this.b
return v.R(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dTW.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.dTX.prototype={
$0(){var w=this.a,v=this.b,u=C.h19(v,10,w.r,!1)
return w.AC(C.h7o(w.a.d,"kahoot",u,w.gb3w(),v.b,"Family Kahoot",v.a))},
$S:0}
C.dTY.prototype={
$0(){var w=this.a
return w.AC(new C.akE(this.b,w.a.d,w.r,null))},
$S:0}
C.dTZ.prototype={
$0(){var w=this.a
return w.AC(new C.an0(this.b,w.a.d,w.r,null))},
$S:0}
C.dU_.prototype={
$0(){var w=this.a
return w.AC(new C.aki(this.b,w.a.d,w.r,null))},
$S:0}
C.dU0.prototype={
$0(){var w=this.a
return w.AC(new C.akK(this.b,w.a.d,w.r,null))},
$S:0}
C.dU1.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.cWx()
return v.AC(C.h7o(v.a.d,"creator_"+u.a,w,v.gb3w(),"A game by the family",t,this.c.a))},
$S:0}
C.dU2.prototype={
$0(){return this.a.Oc(this.b)},
$S:0}
C.dU3.prototype={
$0(){return this.a.WY(0,this.b)},
$S:0}
C.dU4.prototype={
$0(){return this.a.Oc(null)},
$S:0}
C.dU5.prototype={
$0(){return this.a.J(x.q).f.R(D.f3o)},
$S:0}
C.bOF.prototype={
$0(){var w=this.a
w.d=D.aWC
w.z=3},
$S:0}
C.bOG.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a4(0)
w.aNv()}else w.m(new C.bOE(w))},
$S:11}
C.bOE.prototype={
$0(){return this.a.z--},
$S:0}
C.bOv.prototype={
$0(){var w=this.a
w.d=D.aae
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bOw.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bOu(w))
if(w.as<=0){d.a4(0)
w.b3s(-1)}},
$S:11}
C.bOu.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bOB.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Vd},
$S:0}
C.bOC.prototype={
$0(){return this.a.e++},
$S:0}
C.bOy.prototype={
$0(){var w=this.a
w.d=D.aWD
w.ay=this.b},
$S:0}
C.bOz.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bOD.prototype={
$2(d,e){return B.o.aL(e.b,d.b)},
$S:1930}
C.bOA.prototype={
$0(){return this.a.aCI(this.b)},
$S:0}
C.bOx.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).iW()},
$S:0}
C.bOL.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bOM.prototype={
$0(){var w=this.a
w.y=!0
w.w=this.b},
$S:0}
C.bON.prototype={
$0(){},
$S:0}
C.bOO.prototype={
$0(){var w=this.a;++w.f
w.r=-1},
$S:0}
C.bOJ.prototype={
$0(){return this.a.cGM(this.b)},
$S:0}
C.bOK.prototype={
$0(){var w=this.a.c
w.toString
return A.a3(w,!1).iW()},
$S:0}
C.bYA.prototype={
$0(){var w=this.a,v=this.b
w.gSy()[v].d=!0
w.as.push(v)},
$S:0}
C.bYB.prototype={
$0(){this.b.e=this.c.e=!0
var w=this.a;++w.r
B.d.a8(w.as)},
$S:0}
C.bYC.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.bYz(w))},
$S:0}
C.bYz.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.as,u=v.length,t=0;t<v.length;v.length===u||(0,A.M)(v),++t){s=v[t]
w.gSy()[s].d=!1}B.d.a8(v)
w.y=!1},
$S:0}
C.bYw.prototype={
$0(){var w=this.a
w.z=!0
w.w=this.b},
$S:0}
C.bYx.prototype={
$0(){},
$S:0}
C.bYy.prototype={
$0(){return A.a3(this.a,!1).iW()},
$S:0}
C.bYv.prototype={
$0(){return this.a.cMV(this.b)},
$S:0}
C.bYu.prototype={
$3(d,e,f){var w,v,u,t,s,r,q,p=null,o=A.dk(),n=o.a
n.$flags&2&&A.aj(n)
n[11]=0.001
o.fA(3.141592653589793*e)
if(e>0.5){n=new Float64Array(16)
n[15]=1
w=Math.cos(3.141592653589793)
v=Math.sin(3.141592653589793)
n[0]=w
n[1]=0
n[2]=-v
n[4]=0
n[5]=1
n[6]=0
n[8]=v
n[9]=0
n[10]=w
n[3]=0
n[7]=0
n[11]=0
u=this.a
if(u.e)t=D.mn.j(0.9)
else t=u.c?D.dK:D.xI
s=A.m(16)
r=u.e
q=A.I(r?B.c:D.nL,B.r,3)
r=r?B.c:D.iJ
n=A.fo(B.A,A.p(p,A.au(A.d(u.b,p,4,B.a1,p,p,p,A.l(p,p,r,p,p,p,p,p,p,p,p,u.c?17:13.5,p,p,B.u,p,1.15,!0,p,p,p,p,p,p,p,p),B.L,p,p),p,p,p),B.f,p,p,new A.o(t,p,q,s,p,p,B.n),p,p,p,p,B.cm,p,p,p),p,new A.eC(n),!0)}else{n=A.m(16)
u=A.I(D.dK,B.r,3)
n=A.p(p,A.bx(A.m(13),A.b4(D.b70,p,p,new C.bdM(p),B.az),B.aq),B.f,p,p,new A.o(p,p,u,n,p,D.bZI,B.n),p,p,p,p,p,p,p,p)}return A.fo(B.A,n,p,o,!0)},
$S:121}
C.bMh.prototype={
$2(d,e){return d+e},
$S:69}
C.bMq.prototype={
$0(){return this.a.x.push(this.b)},
$S:0}
C.bMr.prototype={
$0(){var w,v=this.b
v.z=!0
w=this.a.a
v.Q=w
if(w)++v.f},
$S:0}
C.bMp.prototype={
$0(){var w=this.a
w.x=A.a([],x.t)
w.z=!1},
$S:0}
C.bMm.prototype={
$0(){var w=this.a
w.as=!0
w.r=this.b},
$S:0}
C.bMn.prototype={
$0(){},
$S:0}
C.bMo.prototype={
$0(){var w=this.a;++w.e
w.x=A.a([],x.t)
w.z=!1
w.y=w.b5x(w.e)},
$S:0}
C.bMi.prototype={
$0(){return A.a3(this.a,!1).iW()},
$S:0}
C.bMj.prototype={
$2(d,e){var w=this.a.d
return B.o.aL(w[d],w[e])},
$S:69}
C.bMk.prototype={
$0(){return this.a.cWc(this.b)},
$S:0}
C.bMl.prototype={
$1(d){return this.a.c[d]},
$S:80}
C.bOf.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.as(new A.ba(s,B.b4,B.aN),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.M)(t),++v){u=t[v]
s.push(new A.as(new A.ba(u,B.b4,B.aN),r))}return s},
$S:1931}
C.bOg.prototype={
$0(){return this.a.gCy().c.push(C.fTJ(null,0,20,""))},
$S:0}
C.bOq.prototype={
$1(d){var w=null
return A.bs(w,new A.b5(4,A.m(12),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Uc,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:239}
C.bOp.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCy().c,m=this.b,l=n[m],k=o.ca4(l),j=B.c.j(0.06),i=A.m(18),h=A.I(B.aZ,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.JH,p,p,p),B.b0],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.anV,p,p,p,new C.bOk(o,m),p,p,p,p,p,p))
n=J.a4(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.j,0,p,p),A.aM(p,B.V,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bOl(l),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.dd,!0,B.a5,p,B.ao,p,p,p,p),B.N],g)
for(w=x.fo,v=0;v<4;v=s){u=D.azv[v]
t=D.azh[v]
s=v+1
f.push(new A.D(B.eG,new A.cb(B.aM,B.e,B.j,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ab,new A.bA(1,B.bd,A.aM(p,B.V,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.aj,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bOm(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.dd,!0,B.a5,p,B.ao,p,p,p,p),p),new Ao.Ow(v,l.c,new C.bOn(o,l),p,!1,D.mn,p,p,p,p,p,!1,!1,p,P.aWV,p,p,p,p,p,w)],g),p),p))}f.push(D.fux)
f.push(B.am)
n=A.a([D.fog,B.ab],g)
for(r=0;r<3;++r){q=D.c6e[r]
n.push(new A.D(B.fv,A.j0(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bOo(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.j,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kC,B.bj,p,p,p)},
$S:167}
C.bOk.prototype={
$0(){var w=this.a
return w.m(new C.bOj(w,this.b))},
$S:0}
C.bOj.prototype={
$0(){return B.d.cG(this.a.gCy().c,this.b)},
$S:0}
C.bOl.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bOm.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bOn.prototype={
$1(d){return this.a.m(new C.bOi(this.b,d))},
$S:180}
C.bOi.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bOo.prototype={
$1(d){return this.a.m(new C.bOh(this.b,this.c))},
$S:8}
C.bOh.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dVv.prototype={
$0(){var w=this.a
w.vV()
w.a.bs()
w.a.pX()},
$S:0}
C.dVu.prototype={
$0(){var w=this.a
w.vV()
w.a.bs()
w.a.pX()},
$S:0}
C.dVx.prototype={
$0(){var w=this,v=w.b
if(J.cK(v)||J.co(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dVy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dVz.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dVt.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dVw.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dVB.prototype={
$0(){this.a.Oy()
return null},
$S:0}
C.dVA.prototype={
$0(){return this.a.Ew(this.b)},
$S:0}
C.dUW.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bM(!1,B.dh,w,w,!0,w,w,new C.dUU(d),w,w),r=A.bn(B.bP,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dUV(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.dUU.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dUV.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dUX.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cIv(this.b)},
$S:0}
C.dUR.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aSV(w.b,w.c,w.d)},
$S:9}
C.dUi.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dUj.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.GB(t.a.c),$async$$0)
case 2:s=r.pP(q.dJ(e,new C.dUy(t)))
if(s!=null&&t.c!=null)t.m(new C.dUz(t,s))
t.a.bs()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUy.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dUz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUB.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dUC.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dUQ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cJi(C.hmS(w),w)},
$S:0}
C.dUx.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.V8(u,w,C.aOQ(u,w),new C.dUw(v),null)},
$S:z+32}
C.dUw.prototype={
$1(d){return this.bkF(d)},
bkF(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.dUv(s,d))
w=3
return A.b(s.tS(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:742}
C.dUv.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bbI(this.b)},
$S:0}
C.dUN.prototype={
$1(d){return d.as},
$S:z+1}
C.dUO.prototype={
$1(d){var w=this
return new A.dY(new C.dUM(w.a,w.b,w.c,w.d,w.e),null)},
$S:19}
C.dUM.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e1:B.c,h=A.m(26),g=A.I(B.bP.j(0.5),B.r,1.5),f=A.p(k,D.bMB,B.f,k,k,new A.o(B.bP.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a1,k,k,k,A.l(k,k,j?B.bq:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.j,0,B.p),1)
f=A.B(A.a([f,B.bc,a0,A.aI(k,k,k,k,A.X(B.cx,j?B.bq:B.bl,k,k,k,k),k,k,k,new C.dUG(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.j,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.M)(v),++s){r=v[s]
q=t.a===r?B.bP:B.bP.j(0.1)
p=new A.aQ(20,20)
o=t.a===r
n=new A.ay(B.bP,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bP
a0.push(A.aB(k,A.db(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b8,new A.o(q,k,new A.bJ(n,n,n,n),new A.bk(p,p,p,p),k,k,B.n),B.hm,k,k,k,B.Bs,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dUH(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bX(B.bB,a0,B.bs,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.bYl,new A.D(D.bxw,f,k),new A.D(D.bxn,e,k),new A.D(B.tY,a0,k),new A.D(T.ajp,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Z.alN,j?B.bq:B.bl,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bxp,A.B(A.a([a0,B.as,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.XM(k,B.bP,k,k,!1,B.y,k,k,k,k,k,k,new C.dUI(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.j,0,k,k),k))}f.push(B.aA)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aC.j(0.35),B.iV,12)],x.V)
f.push(A.aB(k,A.p(k,A.B(A.a([D.foC,B.bc,D.bBD,D.bNg],w),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c14,B.n),k,k,k,B.hA,B.bC,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dUJ(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.vQ,A.B(A.a([A.E(A.dQ(B.dh,new C.dUK(a1),k),1),B.as,A.E(A.bG(K.aT8,new C.dUL(t,a1),A.bn(B.bP,k,k,k,k,k,B.cj,k,k,k,k,k)),1)],w),B.m,k,B.e,B.j,0,k,k),k))
return A.bm(!0,A.p(k,A.ce(A.x(f,B.E,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ag),B.aq,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.FF,k,k,k,k),!0,!1,B.af,!0,!0)},
$S:87}
C.dUG.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dUH.prototype={
$0(){return this.b.$1(new C.dUF(this.a,this.c))},
$S:0}
C.dUF.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.dUI.prototype={
$1(d){var w=this.a
w.m(new C.dUD(w,d))
this.b.$1(new C.dUE())},
$S:8}
C.dUD.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dUE.prototype={
$0(){},
$S:0}
C.dUJ.prototype={
$0(){var w=this.a.a
A.a3(this.b,!1).N(new A.aFP(!0,w))
return null},
$S:0}
C.dUK.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dUL.prototype={
$0(){var w=this.a.a
A.a3(this.b,!1).N(new A.aFP(!1,w))
return null},
$S:0}
C.dUP.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cJ5(this.b.b)
w.r.a8(0)},
$S:0}
C.dU6.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahL(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hgt(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.dU7.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aDP(w)},
$S:0}
C.dUZ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ad4(this.b,w,this.c,null)},
$S:z+34}
C.dUT.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e1:B.c,t=A.m(20),s=A.X(B.lv,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ad,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.x(p,B.m,w,B.e,B.P,0,B.p)
return A.ek(A.a([A.bG(D.fFV,new C.dUS(d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b7,w,u,v,w,s,w,new A.b7(t,B.a0),r,w)},
$S:18}
C.dUS.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dU8.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dU9.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dUa.prototype={
$1(d){return d.a},
$S:z+8}
C.dUb.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.M)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i1(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aDP(w)},
$S:0}
C.dUf.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahL(q)
w=A.S(q).k("Z<1>")
q=A.C(new A.Z(q,new C.dUd(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hgt(v.e,null,r,v.f,v.r,new C.dUe(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.dUe.prototype={
$0(){return this.a.aa2(this.b)},
$S:0}
C.dUd.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dUg.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.S(w).k("N<1,i1>")
w=A.C(new A.N(w,new C.dUc(this.b),v),v.k("ak.E"))
u.d=t.aDP(w)},
$S:0}
C.dUc.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+36}
C.dUY.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dUs.prototype={
$1(d){return d.length!==0},
$S:3}
C.dUt.prototype={
$1(d){var w=this
return new A.dY(new C.dUr(w.a,w.b,w.c,w.d),null)},
$S:19}
C.dUr.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e1:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ad],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.dUn(u,e,o),A.S(o).k("N<1,v>")))
p.push(B.N)
u=w.d
p.push(A.aM(v,B.V,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bs(v,new A.b5(4,A.m(12),B.dj),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.mc,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.ai,v,B.e,B.P,0,B.p)
t=w.a
return A.ek(A.a([A.bM(!1,B.dh,v,v,!0,v,v,new C.dUo(d),v,v),A.bG(B.JS,new C.dUp(t,u,o,e),A.bn(B.bP,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fsW,new C.dUq(t,u,o,d),A.bn(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a8(360,v,p,v),v,v,v,v,r,v)},
$S:186}
C.dUn.prototype={
$1(d){var w=null
return A.dL(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.bVd,w,w,w,new C.dUm(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1932}
C.dUm.prototype={
$0(){return this.a.$1(new C.dUk(this.b,this.c))},
$S:0}
C.dUk.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dUo.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dUp.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dUl(w.c,u))
v.bP(0,B.c5)}},
$S:0}
C.dUl.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dUq.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a3(w.d,!1).N(!0)},
$S:0}
C.dUu.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cJK(this.b,D.u0,C.Gz(v,w.a.c))},
$S:0}
C.dV5.prototype={
$1(d){return d.as},
$S:z+1}
C.dV6.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.dV7.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.ibm(v)
return w.VS(v==null?null:v.a)},
$S:0}
C.dV8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hOs(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.cro(new A.at(u,t),v.gbiq(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cUr:D.cSJ
q=A.I(s?B.dr:D.be4,B.r,1)
p=A.m(22)
o=A.bU(0,A.b4(m,m,m,new C.bdq(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a_,m,B.aa,B.t,A.a([o,A.bU(0,A.ux(new A.Q(n,n,n,n),new A.a8(u,t,new C.bej(l.d,v,l.f,w,new C.dV1(l),l.gcbg(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bvC(s,new C.dV2(l,e),new C.dV3(l,e),new C.dV4(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b3,B.b6,B.x,r,m,m),B.n),m,m,m,V.aix,m,m,m,m)},
$S:209}
C.dV1.prototype={
$1(d){var w=this.a
w.m(new C.dV_(w,d))},
$S:2}
C.dV_.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.dV2.prototype={
$0(){var w=this.b
return this.a.b9U(1.25,new A.at(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dV3.prototype={
$0(){var w=this.b
return this.a.b9U(0.8,new A.at(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dV4.prototype={
$0(){var w=this,v=w.b
return w.a.aSV(new A.at(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbiq())},
$S:0}
C.dV9.prototype={
$0(){var w=this.a
return w.m(new C.dV0(w))},
$S:0}
C.dV0.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dUh.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fM(new A.fD(s.c)),$async$$0)
case 2:t.xQ("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d9f.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhZ(u,C.hr3(v.c,u),new C.d9e(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+37}
C.d9e.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d9g.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.blb(d.d,d.c,u.f.q(0,d.a),new C.d9d(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+38}
C.d9d.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fuj.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.S(v)
return A.pP(new A.cQ(new A.Z(v,new C.fuk(d),w.k("Z<1>")),new C.ful(),w.k("cQ<1,n>")))},
$S:z+19}
C.fuk.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.ful.prototype={
$1(d){return d.a},
$S:z+8}
C.fuh.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fui.prototype={
$1(d){return d.b},
$S:z+8}
C.fuo.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.S(v)
return A.pP(new A.cQ(new A.Z(v,new C.fup(d),w.k("Z<1>")),new C.fuq(),w.k("cQ<1,n>")))},
$S:z+19}
C.fup.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fuq.prototype={
$1(d){return d.a},
$S:z+8}
C.fum.prototype={
$1(d){var w,v=A.ey([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+40}
C.fun.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d9i.prototype={
$0(){return this.a},
$S:z+41}
C.d9z.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:250}
C.d9r.prototype={
$2(d,e){var w=this.a.c4(0,d,new C.d9s()),v=J.a4(w)
if(!v.q(w,e))v.M(w,e)},
$S:114}
C.d9s.prototype={
$0(){return A.a([],x.s)},
$S:740}
C.d9q.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f1(w,e)
return w===!0},
$S:307}
C.d9j.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.d9p.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d9o.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.CE:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.V:v)
while(v.C()){t=v.gT(v)
if(e.q(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.CE:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1934}
C.d9k.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d9t.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.M(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.V:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gT(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.M(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.CE:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.b3(w,new C.d9u(r)))w.push(r)}}B.d.bt(w,new C.d9v(a8))
B.d.aV(w,new C.d9w())
q=C.hOr(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.M)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eHy],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gI(k)+B.d.gal(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.boe(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1935}
C.d9u.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d9v.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.d9w.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.d9x.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a4(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a6(v).k("bc<2>")).cM(0,0,B.pz)+88-w.gI(n).a}else u=0
for(w=J.a4(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:655}
C.d9y.prototype={
$1(d){return 16+d*156},
$S:255}
C.d9h.prototype={
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
t.n(0,d,new C.FQ(r,new A.t(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.FQ(s,new A.t(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.FQ(s,new A.t(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.V:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.K7(d,new A.t(e+t,w),s,s.length))}},
$S:178}
C.d9l.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIW(new A.t(v.a,v.b+28),new A.t(w.a,w.b+28),!0,null))},
$S:114}
C.d9m.prototype={
$1(d){return d.a===this.a},
$S:z+42}
C.d9n.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:741}
C.d9A.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:741}
C.d9B.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:413}
C.d9C.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:200}
C.d9D.prototype={
$1(d){return d>=0.5},
$S:127}
C.fbf.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hp(A.aL(!1,v,!0,new A.a8(38,38,A.X(d,this.a.c?B.c:B.cp,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1937}
C.eMZ.prototype={
$1(d){var w=null,v=A.m(8),u=B.bP.j(0.12),t=A.m(8)
return new A.D(B.ng,A.aL(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.feI,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.N4,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eMY(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+43}
C.eMY.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dpo.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dpn.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nA,B.L,w,w)
return A.ek(A.a([A.bM(!1,B.dh,w,w,!0,w,w,new C.dpl(d),w,w),A.bM(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mr,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dpm(d),w,w)],x.p),B.b7,B.Bp,w,u,D.byq,w,D.bAn,new A.b7(v,B.a0),w,w)},
$S:18}
C.dpl.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.dpm.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.dpx.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dpy.prototype={
$1(d){var w=this.a
return w.m(new C.dpw(w,d))},
$S:z+44}
C.dpw.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dpz.prototype={
$1(d){var w=null
return A.qs(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dpC.prototype={
$1(d){var w=this.a
return w.m(new C.dpv(w,d))},
$S:33}
C.dpv.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dpB.prototype={
$1(d){var w=null
return A.qs(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dpD.prototype={
$1(d){var w=this.a
return w.m(new C.dpu(w,d))},
$S:33}
C.dpu.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dpE.prototype={
$0(){var w=this.a
return w.m(new C.dpt(w))},
$S:0}
C.dpt.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dpF.prototype={
$0(){var w=this.a
return w.m(new C.dps(w))},
$S:0}
C.dps.prototype={
$0(){return++this.a.at},
$S:0}
C.dpG.prototype={
$0(){var w=this.a
return w.m(new C.dpr(w))},
$S:0}
C.dpr.prototype={
$0(){return--this.a.ax},
$S:0}
C.dpH.prototype={
$0(){var w=this.a
return w.m(new C.dpq(w))},
$S:0}
C.dpq.prototype={
$0(){return++this.a.ax},
$S:0}
C.dpI.prototype={
$1(d){var w=this.a
return w.m(new C.dpp(w,d))},
$S:8}
C.dpp.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dpA.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dpJ.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bP.j(0.18)
else w=q.c.a?B.e1:B.c
v=A.m(12)
if(p)u=B.bP
else u=(q.c.a?B.e6:B.bO).j(0.85)
u=A.I(u,B.r,p?1.5:1)
if(p)t=B.bP
else t=q.c.a?B.bq:B.bl
t=A.X(f,t,r,r,r,18)
if(p)s=B.bP
else s=q.c.a?B.bq:B.bl
return A.E(A.aF(!1,B.a2,!0,r,A.aL(!1,o,!0,A.db(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b8,new A.o(w,r,u,v,r,r,B.n),B.eM,r,r,r,B.jJ,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dpK(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah),1)},
$S:z+46}
C.dpK.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dpT.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.caF.prototype={
$2(d,e){return new A.by(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:91}
C.caM.prototype={
$1(d){return d.ag()},
$S:z+5}
C.caN.prototype={
$2(d,e){var w=J.b6(e,new C.caL(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.by(d,w,x.d2)},
$S:z+48}
C.caL.prototype={
$1(d){return d.ag()},
$S:z+12}
C.caH.prototype={
$1(d){return C.akN(A.a2(d,x.N,x.z))},
$S:z+9}
C.caI.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.caJ.prototype={
$1(d){return C.h7n(A.a2(d,x.N,x.z))},
$S:z+11}
C.caK.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.caR.prototype={
$1(d){return new A.aG0(d.f.length,d.a,d.b)},
$S:z+50}
C.caS.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:565}
C.caO.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.caP.prototype={
$1(d){return d.cII(C.Gz(d,this.a))},
$S:z+51}
C.dVi.prototype={
$1(d){return C.u4(d,this.a.a.c)},
$S:z+2}
C.dVj.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dVn.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dVo.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dVf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_2(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yp("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pc(r.c,r.e),$async$$0)
case 4:s.yp(p)
w=5
return A.b(s.JC(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVg.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_2(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yp("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pc(r.c,r.e),$async$$0)
case 4:s.yp(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVh.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Vb(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yp("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yp("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yp("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JC(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yp(B.a.ej(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dVm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b_1(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yp("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a3(r,!1).cg(A.e_(new C.dVl(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pc(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dVl.prototype={
$1(d){var w=this.b
return new C.a_f(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+52}
C.dVk.prototype={
$1(d){return D.hdF},
$S:z+80}
C.dVq.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dVr.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dVp(w,d)
return new A.D(B.d3,new C.ben(this.b,d.c,d.a,w,null),null)},
$S:1938}
C.dVp.prototype={
$0(){return this.a.XA(this.b.b)},
$S:0}
C.dVa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dVb.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dVc.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dVd.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dVe.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.dVs.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cU(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a3(this.b,!1).N(s)
return}},
$S:199}
C.dHa.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+54}
C.dHb.prototype={
$0(){return B.d.gI(D.a47)},
$S:z+55}
C.dHc.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.au(A.X(this.b.d,B.c.j(0.95),w,w,D.d_N,44),w,w,w),w,w,new C.bj4(u,t,v,w),B.az)},
$S:72}
C.fKB.prototype={
$1(d){return A.oY(new C.fKA(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:139}
C.fKA.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e1:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rI,24)],x.V),o=r?B.e6:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bP.j(0.18)],x.O)
w=A.p(t,D.bPE,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a9(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.R,o,new A.D(E.aju,A.B(A.a([w,B.bc,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.ix(!0,t,e,B.y,D.f1t,new C.fKz(this.b,s),20,B.aj3,t,B.ag,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kS,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:116}
C.fKz.prototype={
$2(d,e){var w=null,v=D.a47[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.e6:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.eq,8)],x.V),p=A.m(15),o=A.E(new C.a6b(v.a,!0,w),1),n=s?B.jG:B.j4,m=A.d(v.b,w,1,B.a1,w,w,w,A.l(w,w,s?B.aP:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a2,!0,w,A.aL(!1,u,!0,A.eF(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a1,w,w,w,A.l(w,w,s?B.bq:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l2,w,w,w)],l),B.ai,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fKy(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ah)},
$S:76}
C.fKy.prototype={
$0(){A.a3(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cil.prototype={
$0(){return this.a.ag0(this.b)},
$S:0}
C.fJY.prototype={
$1(d){return D.h8I},
$S:z+56}
C.fRr.prototype={
$1(d){var w=this
return new C.a11(w.a,w.b,w.c,w.d,null)},
$S:z+57}
C.fK2.prototype={
$1(d){return new C.YT(this.a,null)},
$S:z+58}
C.fK1.prototype={
$1(d){return D.h9H},
$S:z+59}
C.d0X.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.d0Y.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d0W(w,d))},
$S:33}
C.d0W.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d0Z.prototype={
$1(d){return this.a.Kc()},
$S:2}
C.d1_.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.d0T.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.d0U.prototype={
$1(d){return this.a.Kc()},
$S:2}
C.d0V.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.czx.prototype={
$0(){},
$S:0}
C.czD.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.czE.prototype={
$0(){return this.a.aOm(-1)},
$S:0}
C.czF.prototype={
$1(d){return this.a.m(new C.czC())},
$S:2}
C.czC.prototype={
$0(){},
$S:0}
C.czG.prototype={
$0(){return this.a.aOm(1)},
$S:0}
C.czH.prototype={
$1(d){return this.a.m(new C.czB())},
$S:2}
C.czB.prototype={
$0(){},
$S:0}
C.czI.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e6:B.bO
return A.un(u,u,B.b_,r,u,new C.czA(t,d),B.Bz,s,w,u,new A.ay(v,1,B.r,-1),B.cc)},
$S:1939}
C.czA.prototype={
$1(d){var w=this.a
return w.m(new C.czy(w,this.b))},
$S:8}
C.czy.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.czJ.prototype={
$1(d){return this.a.m(new C.czz())},
$S:2}
C.czz.prototype={
$0(){},
$S:0}
C.czK.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.faA.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a3(this.b,!1).N(w)},
$S:2}
C.faB.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.faC.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a3(this.b,!1).N(w)},
$S:0}
C.fay.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbz0()
w=w.e
s=A.m(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bAm,new A.eG(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bvp(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:72}
C.faz.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dA.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aV,B.bP,w)
s.toString
s=A.a([B.b_,s,B.aV],x.O)
return A.aF(!1,B.a2,!0,p,A.aL(!1,v,!0,A.eF(D.egB,r,new A.o(r,r,A.I(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.df(-1.2+t,-0.5),new A.df(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ah)},
$S:136}
C.fIx.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:70}
C.eK8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eK_.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eK0.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eK6.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eK5(w,this.b),null)},
$S:19}
C.eK5.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e1:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eM(w,u,new A.D(B.ajm,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ad,C.hdg(new C.eK2(r,e),r.a),B.aA,A.B(A.a([A.E(A.dQ(B.dh,new C.eK3(d),w),1),B.as,A.E(A.bG(B.Ux,new C.eK4(r,d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ai,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d4,w,new A.b7(t,B.a0),w)},
$S:100}
C.eK2.prototype={
$1(d){return this.b.$1(new C.eK1(this.a,d))},
$S:33}
C.eK1.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eK3.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.eK4.prototype={
$0(){var w=this.a.a
A.a3(this.b,!1).N(w)
return null},
$S:0}
C.eK7.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.SO(this.b)},
$S:0}
C.eJV.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bbO(w)},
$S:0}
C.eJZ.prototype={
$1(d){return this.bl1(d)},
bl1(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lj(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iR(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eJY.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.S(w).k("Z<1>")
w=A.C(new A.Z(w,new C.eJX(this.b),v),v.k("J.E"))
u.d=t.bbO(w)},
$S:0}
C.eJX.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eK9.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iR(this.b,w)},
$S:0}
C.eKa.prototype={
$1(d){return this.a.bD8(d,this.b)},
$S:z+62}
C.eJW.prototype={
$0(){return this.a.aa1(this.b)},
$S:0}
C.fRh.prototype={
$1(d){return new C.adp(this.a,this.b,this.c,null)},
$S:z+63}
C.eKc.prototype={
$0(){return this.a.a_i(this.b)},
$S:0}
C.eKd.prototype={
$0(){return this.a.Q4(this.b)},
$S:0}
C.eKe.prototype={
$0(){return this.a.Er(this.b)},
$S:0}
C.eKf.prototype={
$0(){return this.a.a_j(this.b)},
$S:0}
C.eKb.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.eJQ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eJR.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eJS.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
C.eJU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.q3(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eJT(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eJT.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eKC.prototype={
$2(d,e){return d+e.gx_()},
$S:z+66}
C.eKy.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eKz.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eKj.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e1:B.c,s=A.m(24),r=A.p(v,D.bQ5,B.f,v,v,new A.o(B.aw.j(u?0.18:0.08),v,A.I(B.aw.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.av
u=u?B.e6:B.bO
w=x.p
return A.eM(v,t,new A.D(B.yb,A.x(A.a([r,B.aO,q,B.N,p,B.d5,A.B(A.a([A.E(A.dQ(B.nD,new C.eKh(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.fa,v,new A.b7(A.m(14),B.a0),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bG(D.fJK,new C.eKi(d),A.bn(B.aw,v,v,v,v,v,B.fa,v,new A.b7(A.m(14),B.a0),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.P,0,B.p),v),v,v,v,v,B.d4,v,new A.b7(s,B.a0),v)},
$S:47}
C.eKh.prototype={
$0(){A.a3(this.a,!1).N(!1)
return null},
$S:0}
C.eKi.prototype={
$0(){A.a3(this.a,!1).N(!0)
return null},
$S:0}
C.eKs.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e1:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fT,28)],x.V),g=k?D.d6B:B.a3v,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.eWa,B.au,new A.bK(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cw,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.ax,B.aD,B.x,g,m,m),B.n),m,m,m,m,E.ajr,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b4V(B.b5,B.ja,new C.eKp(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b4V(B.cC,R.yO,new C.eKq(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aw.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.aw.j(0.28),B.r,1)
o=A.p(m,D.bPs,B.f,m,m,new A.o(B.aw.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bU,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.vO,A.p(m,A.x(A.a([g,new A.D(B.ajn,A.x(A.a([w,B.R,u,B.bv,t,B.R,A.aF(!1,B.a2,!0,m,A.aL(!1,s,!0,A.p(m,A.B(A.a([o,B.bc,n,A.X(B.eD,k?B.bq:B.bl,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bC,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eKr(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ah)],f),B.E,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.P,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:25}
C.eKp.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a3(u.b,!1).N(null)
w=2
return A.b(u.a.vw("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKq.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a3(u.b,!1).N(null)
w=2
return A.b(u.a.vw("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKr.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a3(u.b,!1).N(null)
w=2
return A.b(u.a.NQ(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eKn.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e1:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eX,24)],x.V),k=o?B.e6:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bl
u=A.bx(w,new A.a8(48,48,C.aQ6(!0,A.m(12),48,Q.NF,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a1,q,q,q,A.l(q,q,o?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AS(v.gx_())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.vO,A.p(q,A.x(A.a([B.R,k,new A.D(D.ajk,A.B(A.a([u,B.bc,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Bf,r.clt(B.ul,B.aV,new C.eKl(d),p,"QR code or backup file","Transfer project"),r.b1V(!0,B.ec,B.aw,new C.eKm(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:25}
C.eKl.prototype={
$0(){A.a3(this.a,!1).N("transfer")
return null},
$S:0}
C.eKm.prototype={
$0(){A.a3(this.a,!1).N("delete")
return null},
$S:0}
C.eKo.prototype={
$1(d){return this.bl2(d)},
bl2(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Lj(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vK(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eKF.prototype={
$0(){var w=this.a
w.a.bs()
w.m(new C.eKE(w))},
$S:0}
C.eKE.prototype={
$0(){return this.a.r++},
$S:0}
C.eKG.prototype={
$0(){var w=this.a
return w.m(new C.eKD(w))},
$S:0}
C.eKD.prototype={
$0(){return this.a.r++},
$S:0}
C.eKg.prototype={
$0(){var w=this.a.c
w.toString
return A.iR(w,null)},
$S:0}
C.eKk.prototype={
$0(){return this.a.ceM(this.b)},
$S:0}
C.eKB.prototype={
$0(){var w=this.a
return w.m(new C.eKA(w,this.b))},
$S:0}
C.eKA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eKv.prototype={
$0(){return this.a.vw("scan")},
$S:0}
C.eKw.prototype={
$0(){return this.a.vw("file")},
$S:0}
C.eKx.prototype={
$1(d){return this.a.clu(d,this.b)},
$S:z+67}
C.eKu.prototype={
$0(){return this.a.Ev(this.b)},
$S:0}
C.eKt.prototype={
$0(){return this.a.a_N(this.b,this.c)},
$S:0}
C.cyY.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+68}
C.cyX.prototype={
$1(d){return d.ag()},
$S:z+69}
C.cyV.prototype={
$1(d){return C.hwU(A.a2(d,x.N,x.z))},
$S:z+70}
C.cyW.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.ftj.prototype={
$1(d){return d.y===D.kD},
$S:z+2}
C.fS1.prototype={
$1(d){return C.aOQ(d,this.a)},
$S:z+2}
C.frc.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bOT.prototype={
$1(d){return!d.as},
$S:z+1}
C.bOS.prototype={
$1(d){return d.ag()},
$S:z+23}
C.bOP.prototype={
$1(d){return C.h7p(A.a2(d,x.N,x.z))},
$S:z+24}
C.bOQ.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bOR.prototype={
$1(d){return J.k(d)},
$S:17}
C.fia.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+25}
C.fe1.prototype={
$1(d){return C.fYA(A.a2(d,x.N,x.z))},
$S:z+74}
C.fe2.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fe3.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+25}
C.fJP.prototype={
$1(d){return J.k(d)},
$S:17}
C.fJQ.prototype={
$1(d){return d.a},
$S:z+76}
C.fJR.prototype={
$1(d){return d.length!==0},
$S:3}
C.fJS.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fJT.prototype={
$1(d){return d.SO(null).ag()},
$S:z+77}
C.fS_.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.ftN.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fwB.prototype={
$1(d){return C.akN(A.a2(d,x.N,x.z))},
$S:z+9}
C.fwC.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fwD.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fwE.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fwF.prototype={
$1(d){return C.u4(d,this.a)},
$S:z+2}
C.fJC.prototype={
$1(d){return C.u4(d,this.a)},
$S:z+2}
C.fRV.prototype={
$1(d){return C.akN(A.a2(d,x.N,x.z))},
$S:z+9}
C.fRW.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fRX.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ftu.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.ftv.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fS5.prototype={
$1(d){return!d.as},
$S:z+1}
C.fsZ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.ft_.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.ft0.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+7}
C.fRs.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fxp.prototype={
$1(d){return d.Q},
$S:z+15}
C.fJv.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fwy.prototype={
$1(d){return C.akN(A.a2(d,x.N,x.z))},
$S:z+9}
C.fwz.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fwA.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fJq.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fez.prototype={
$1(d){return d.length!==0},
$S:3}
C.feA.prototype={
$1(d){return C.h7p(A.a2(d,x.N,x.z))},
$S:z+24}
C.feB.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.feC.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.feD.prototype={
$1(d){return d.length!==0},
$S:3}
C.feQ.prototype={
$2(d,e){return d.eV(new C.feR(e))},
$S:1940}
C.feR.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.c4},
$S:1941}
C.feN.prototype={
$1(d){return C.hT6(d,this.a)},
$S:z+79}
C.feO.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.feP.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fiR.prototype={
$1(d){return d.a},
$S:z+53}
C.fiS.prototype={
$1(d){return d.length!==0},
$S:3}
C.fiT.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fly.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fqw.prototype={
$1(d){return C.hiQ(d,C.Gz(d,this.a))},
$S:z+5}
C.fqx.prototype={
$1(d){return C.hiR(d,C.Gz(d,this.a))},
$S:z+5};(function aliases(){var w=C.azV.prototype
w.bsw=w.t
w=C.aLg.prototype
w.bvh=w.t
w=C.aNi.prototype
w.bxw=w.t
w=C.aNj.prototype
w.bxx=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aCR.prototype,"gcip","ciq",27)
var r
w(r=C.azU.prototype,"gcbm","cbn",60)
v(r,"gaMC","No",0)
v(r,"gcqJ","AN",0)
v(r,"gbKS","O2",0)
v(r,"gcEQ","yq",0)
v(r,"gckr","a0u",0)
v(r,"gbGi","NM",0)
v(r,"gbLh","X2",0)
w(r,"gbQb","bQc",73)
v(r,"gbAF","zP",0)
v(C.azW.prototype,"gcEM","Fm",0)
v(r=C.akF.prototype,"gboY","boZ",3)
v(r,"gboT","boU",3)
v(r,"gcFR","cFS",3)
u(r,"gt3","nU",0)
u(r=C.akJ.prototype,"geY","hE",3)
u(r,"gkr","cFo",3)
u(C.akL.prototype,"gt3","nU",0)
u(r=C.akj.prototype,"gcVJ","jO",3)
u(r,"gt3","nU",0)
v(r=C.akG.prototype,"gcFd","cFe",3)
u(r,"gbmS","js",3)
v(r=C.aDp.prototype,"gafD","vL",0)
v(r,"gce1","a_E",0)
v(r,"gaQG","HZ",0)
v(r=C.aDm.prototype,"gcAW","a2D",0)
v(r,"gafD","vL",0)
v(r,"gcoJ","a18",0)
v(r,"gcdX","b07",3)
v(r,"gceZ","a_S",0)
w(r,"gcbg","cbh",30)
v(r,"gbL9","I3",0)
v(r,"gcBX","cBY",3)
v(r,"gc1S","YH",0)
w(r,"gc9L","c9M",31)
v(r,"gcdL","cdM",3)
v(r=C.aBQ.prototype,"gc7A","PE",0)
v(r,"gc7C","c7D",3)
v(r,"gbHN","a9E",0)
v(r=C.aDo.prototype,"gbOE","Xw",0)
v(r,"gbZ8","Ya",0)
v(r,"gcva","a20",0)
v(r,"gcrj","a1C",0)
v(C.aDn.prototype,"gcr1","ahm",0)
v(C.asx.prototype,"gc9J","a_g",0)
v(C.ayE.prototype,"ga2m","Kc",3)
v(C.ayD.prototype,"ga2m","Kc",3)
v(C.axn.prototype,"ga2m","Kc",3)
v(r=C.aEQ.prototype,"gb1j","QA",0)
v(r,"gbzt","VM",0)
v(r,"gceN","ceO",3)
w(C.aEP.prototype,"gcaB","caC",64)
t(C.aER.prototype,"gaQA",0,0,null,["$1","$0"],["HY","bJ3"],65,0,0)
s(C,"hqb","i1Y",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aol,C.uk,C.nj,C.HH,C.aeC,C.K_,C.ul,C.bPp,C.va,C.eP8,C.bPo,C.acI,C.le,C.bOr,C.aXe,C.asJ,C.z6,C.ajA,C.LY,C.azA,C.K7,C.FQ,C.bel,C.aIW,C.apC,C.d9E,C.lG,C.aT4,C.aT3,C.aR2,C.tT,C.r5,C.lo,C.i1,C.kF,C.aGV])
u(A.hS,[C.fBc,C.fBb,C.fBd,C.fKu,C.fph,C.fpi,C.fpn,C.fyW,C.fyV,C.fyU,C.c47,C.fL_,C.fKS,C.fL3,C.ftC,C.dHR,C.dHM,C.dHN,C.dHp,C.dHl,C.dI5,C.dI6,C.dI_,C.dI0,C.dI7,C.dI8,C.fuf,C.fwv,C.fww,C.fJA,C.fRU,C.ftt,C.fK8,C.d8R,C.d8d,C.d8m,C.d8D,C.d8i,C.d8o,C.d8f,C.d8s,C.d8t,C.d8r,C.d8I,C.d8H,C.daC,C.daD,C.daE,C.d94,C.d99,C.d98,C.cHK,C.cHM,C.d0a,C.d0z,C.d0A,C.d0D,C.d0F,C.d0G,C.d0H,C.d0J,C.d0K,C.bOb,C.bO5,C.fiy,C.fRN,C.fRO,C.fRP,C.fRK,C.fRQ,C.fRR,C.fRS,C.fRJ,C.fuN,C.fxl,C.fIK,C.fre,C.fxo,C.bJg,C.dTU,C.dTR,C.dTS,C.dTQ,C.dTW,C.bOG,C.bOw,C.bYu,C.bMl,C.bOq,C.bOp,C.bOl,C.bOm,C.bOn,C.bOo,C.dVw,C.dUW,C.dUR,C.dUi,C.dUy,C.dUB,C.dUx,C.dUw,C.dUN,C.dUO,C.dUI,C.dU6,C.dUZ,C.dUT,C.dU8,C.dU9,C.dUa,C.dUf,C.dUd,C.dUc,C.dUs,C.dUt,C.dUn,C.dV5,C.dV1,C.d9f,C.d9g,C.fuj,C.fuk,C.ful,C.fuh,C.fui,C.fuo,C.fup,C.fuq,C.fum,C.fun,C.d9z,C.d9p,C.d9k,C.d9u,C.d9v,C.d9y,C.d9m,C.d9B,C.d9C,C.d9D,C.fbf,C.eMZ,C.dpn,C.dpx,C.dpy,C.dpz,C.dpC,C.dpB,C.dpD,C.dpI,C.dpJ,C.caM,C.caL,C.caH,C.caI,C.caJ,C.caK,C.caR,C.caO,C.caP,C.dVi,C.dVl,C.dVk,C.dVr,C.dVs,C.dHa,C.fKB,C.fJY,C.fRr,C.fK2,C.fK1,C.d0Y,C.d0Z,C.d0U,C.czF,C.czH,C.czI,C.czA,C.czJ,C.faA,C.fIx,C.eK6,C.eK2,C.eJZ,C.eJX,C.eKa,C.fRh,C.eKj,C.eKs,C.eKn,C.eKo,C.eKx,C.cyX,C.cyV,C.cyW,C.ftj,C.fS1,C.frc,C.bOT,C.bOS,C.bOP,C.bOQ,C.bOR,C.fe1,C.fe2,C.fJP,C.fJQ,C.fJR,C.fJS,C.fJT,C.fS_,C.ftN,C.fwB,C.fwC,C.fwE,C.fwF,C.fJC,C.fRV,C.fRW,C.fRX,C.ftu,C.ftv,C.fS5,C.fsZ,C.ft_,C.fRs,C.fxp,C.fJv,C.fwy,C.fwz,C.fJq,C.fez,C.feA,C.feB,C.feC,C.feD,C.feR,C.feN,C.feO,C.fiR,C.fiS,C.fly,C.fqw,C.fqx])
u(A.av,[C.aYy,C.akD,C.aUi,C.Yz,C.ba3,C.a5m,C.FM,C.a1_,C.bej,C.bhZ,C.bvC,C.blb,C.ad3,C.bhY,C.ad2,C.bhX,C.aBR,C.aHY,C.ad4,C.FL,C.bek,C.ack,C.bei,C.ben,C.aYw,C.asx,C.adp])
u(A.mT,[C.baF,C.bbR,C.bbI,C.aGQ,C.bh3,C.bmq,C.aUn,C.bgK,C.bdM,C.bem,C.bdq,C.bj4,C.bvp])
u(A.jb,[C.fKX,C.fKY,C.fKZ,C.fKQ,C.fKR,C.fL1,C.fL2,C.dI2,C.dHP,C.dHS,C.dHw,C.dHx,C.dHy,C.dHv,C.dHD,C.dHu,C.dHE,C.dHF,C.dHt,C.dHG,C.dHs,C.dHH,C.dHr,C.dHI,C.dHj,C.dHk,C.dHq,C.dHJ,C.dHo,C.dHK,C.dHn,C.dHz,C.dHm,C.dHA,C.dHi,C.dHB,C.dHC,C.dI3,C.dI4,C.dHT,C.dHU,C.dHV,C.dHW,C.dHX,C.dHY,C.dHZ,C.dIa,C.dI1,C.fug,C.d8b,C.d89,C.d8a,C.d8c,C.d8Q,C.d8F,C.d8C,C.d8e,C.d8G,C.d8k,C.d8l,C.d8n,C.d8E,C.d8j,C.d8p,C.d8N,C.d8z,C.d8y,C.d8A,C.d8B,C.d8u,C.d8w,C.d8x,C.d8q,C.d8J,C.d8M,C.d8g,C.d8h,C.daB,C.daA,C.daz,C.day,C.daF,C.dax,C.daG,C.d95,C.d96,C.d97,C.d9a,C.d93,C.d92,C.cHL,C.d09,C.d0m,C.d0l,C.d0B,C.d0k,C.d0C,C.d0j,C.d0i,C.d0E,C.d0h,C.d0u,C.d0t,C.d0L,C.bO4,C.bOe,C.bO6,C.bO7,C.bOa,C.bO9,C.bOc,C.bOd,C.bO8,C.bO2,C.bO3,C.bPg,C.bPh,C.bPi,C.bPj,C.bPk,C.bPl,C.bPm,C.fRM,C.fIL,C.des,C.dTT,C.dTV,C.dTO,C.dTP,C.dTN,C.dTX,C.dTY,C.dTZ,C.dU_,C.dU0,C.dU1,C.dU2,C.dU3,C.dU4,C.dU5,C.bOF,C.bOE,C.bOv,C.bOu,C.bOB,C.bOC,C.bOy,C.bOz,C.bOA,C.bOx,C.bOL,C.bOM,C.bON,C.bOO,C.bOJ,C.bOK,C.bYA,C.bYB,C.bYC,C.bYz,C.bYw,C.bYx,C.bYy,C.bYv,C.bMq,C.bMr,C.bMp,C.bMm,C.bMn,C.bMo,C.bMi,C.bMk,C.bOf,C.bOg,C.bOk,C.bOj,C.bOi,C.bOh,C.dVv,C.dVu,C.dVx,C.dVy,C.dVz,C.dVt,C.dVB,C.dVA,C.dUU,C.dUV,C.dUX,C.dUj,C.dUA,C.dUz,C.dUC,C.dUQ,C.dUv,C.dUG,C.dUH,C.dUF,C.dUD,C.dUE,C.dUJ,C.dUK,C.dUL,C.dUP,C.dU7,C.dUS,C.dUb,C.dUe,C.dUg,C.dUY,C.dUm,C.dUk,C.dUo,C.dUp,C.dUl,C.dUq,C.dUu,C.dV6,C.dV7,C.dV_,C.dV2,C.dV3,C.dV4,C.dV9,C.dV0,C.dUh,C.d9e,C.d9d,C.d9i,C.d9s,C.d9j,C.eMY,C.dpo,C.dpl,C.dpm,C.dpw,C.dpv,C.dpu,C.dpE,C.dpt,C.dpF,C.dps,C.dpG,C.dpr,C.dpH,C.dpq,C.dpp,C.dpA,C.dpK,C.dpT,C.dVj,C.dVn,C.dVo,C.dVf,C.dVg,C.dVh,C.dVm,C.dVq,C.dVp,C.dVa,C.dVb,C.dVc,C.dVd,C.dVe,C.dHb,C.fKy,C.cil,C.d0X,C.d0W,C.d1_,C.d0T,C.d0V,C.czx,C.czD,C.czE,C.czC,C.czG,C.czB,C.czy,C.czz,C.czK,C.faB,C.faC,C.eK8,C.eK_,C.eK0,C.eK1,C.eK3,C.eK4,C.eK7,C.eJV,C.eJY,C.eK9,C.eJW,C.eKc,C.eKd,C.eKe,C.eKf,C.eKb,C.eJQ,C.eJR,C.eJS,C.eJU,C.eJT,C.eKy,C.eKz,C.eKh,C.eKi,C.eKp,C.eKq,C.eKr,C.eKl,C.eKm,C.eKF,C.eKE,C.eKG,C.eKD,C.eKg,C.eKk,C.eKB,C.eKA,C.eKv,C.eKw,C.eKu,C.eKt])
u(A.ag,[C.aox,C.SO,C.Zg,C.Zk,C.Zi,C.YR,C.akE,C.V8,C.akI,C.akK,C.an0,C.aki,C.SP,C.apF,C.apz,C.ZV,C.apD,C.a_f,C.a_g,C.a6b,C.YT,C.YS,C.Yq,C.a11,C.FB,C.axg,C.asw,C.asq,C.asv,C.Oa])
u(A.ah,[C.aCR,C.beg,C.azU,C.beB,C.azW,C.bbP,C.azV,C.bjn,C.akJ,C.akL,C.aXd,C.akj,C.akG,C.aDp,C.aDm,C.aBQ,C.aDo,C.aDn,C.bjo,C.aLg,C.ayE,C.ayD,C.axn,C.bvs,C.aNi,C.aNj,C.aEQ,C.bkH,C.aEP,C.bx8])
u(A.k7,[C.dHO,C.dHQ,C.dHL,C.dI9,C.fwx,C.bO1,C.d8P,C.d8O,C.d8v,C.d8K,C.d8L,C.d9b,C.bPn,C.bPf,C.bOs,C.bOt,C.fRL,C.bOD,C.bMh,C.bMj,C.dUM,C.dUr,C.dV8,C.d9r,C.d9q,C.d9o,C.d9t,C.d9w,C.d9x,C.d9h,C.d9l,C.d9n,C.d9A,C.caF,C.caN,C.caS,C.dHc,C.fKA,C.fKz,C.fay,C.faz,C.eK5,C.eKC,C.cyY,C.fia,C.fe3,C.fwD,C.ft0,C.fwA,C.feQ,C.feP,C.fiT])
u(A.lW,[C.a0x,C.aeK,C.ZI,C.abp,C.aJD,C.HI,C.akM,C.cyZ,C.cz_])
t(C.akF,C.azV)
t(C.bj5,C.aLg)
t(C.bvq,C.aNi)
t(C.bvr,C.aNj)
t(C.aER,C.bx8)
t(C.b8y,A.b8m)
t(C.bvt,A.a5R)
t(C.b8x,C.bvt)
w(C.azV,A.cq)
w(C.aLg,A.eT)
w(C.aNi,A.cq)
w(C.aNj,A.cq)
v(C.bx8,A.ez)
v(C.bvt,A.j5)})()
A.jL(b.typeUniverse,JSON.parse('{"aYy":{"av":[],"v":[]},"baF":{"aC":[]},"aox":{"ag":[],"v":[]},"aCR":{"ah":["aox"]},"SO":{"ag":[],"v":[]},"akD":{"av":[],"v":[]},"aUi":{"av":[],"v":[]},"beg":{"ah":["SO"]},"Zg":{"ag":[],"v":[]},"Zk":{"ag":[],"v":[]},"Zi":{"ag":[],"v":[]},"YR":{"ag":[],"v":[]},"azU":{"ah":["Zg"]},"beB":{"ah":["Zk"]},"azW":{"ah":["Zi"]},"Yz":{"av":[],"v":[]},"bbR":{"aC":[]},"bbI":{"aC":[]},"bbP":{"ah":["YR"]},"aGQ":{"aC":[]},"bh3":{"aC":[]},"ba3":{"av":[],"v":[]},"akE":{"ag":[],"v":[]},"akF":{"ah":["akE"]},"bmq":{"aC":[]},"aUn":{"aC":[]},"V8":{"ag":[],"v":[]},"akI":{"ag":[],"v":[]},"akK":{"ag":[],"v":[]},"an0":{"ag":[],"v":[]},"aki":{"ag":[],"v":[]},"SP":{"ag":[],"v":[]},"a5m":{"av":[],"v":[]},"bgK":{"aC":[]},"FM":{"av":[],"v":[]},"a1_":{"av":[],"v":[]},"bjn":{"ah":["V8"]},"akJ":{"ah":["akI"]},"akL":{"ah":["akK"]},"aXd":{"ah":["an0"]},"bdM":{"aC":[]},"akj":{"ah":["aki"]},"akG":{"ah":["SP"]},"apF":{"ag":[],"v":[]},"apz":{"ag":[],"v":[]},"ZV":{"ag":[],"v":[]},"ad4":{"av":[],"v":[]},"aDp":{"ah":["apF"]},"aDm":{"ah":["apz"]},"bej":{"av":[],"v":[]},"bem":{"aC":[]},"bhZ":{"av":[],"v":[]},"bdq":{"aC":[]},"bvC":{"av":[],"v":[]},"blb":{"av":[],"v":[]},"aBQ":{"ah":["ZV"]},"ad3":{"av":[],"v":[]},"bhY":{"av":[],"v":[]},"ad2":{"av":[],"v":[]},"bhX":{"av":[],"v":[]},"aBR":{"av":[],"v":[]},"aHY":{"av":[],"v":[]},"FL":{"av":[],"v":[]},"apD":{"ag":[],"v":[]},"a_f":{"ag":[],"v":[]},"a_g":{"ag":[],"v":[]},"aDo":{"ah":["apD"]},"bek":{"av":[],"v":[]},"ack":{"av":[],"v":[]},"bei":{"av":[],"v":[]},"ben":{"av":[],"v":[]},"aDn":{"ah":["a_f"]},"bjo":{"ah":["a_g"]},"aYw":{"av":[],"v":[]},"a6b":{"ag":[],"v":[]},"bj5":{"ah":["a6b"]},"bj4":{"aC":[]},"asx":{"av":[],"v":[]},"YT":{"ag":[],"v":[]},"YS":{"ag":[],"v":[]},"Yq":{"ag":[],"v":[]},"a11":{"ag":[],"v":[]},"ayE":{"ah":["YT"]},"ayD":{"ah":["YS"]},"axn":{"ah":["Yq"]},"bvs":{"ah":["a11"]},"FB":{"ag":[],"v":[]},"axg":{"ag":[],"v":[]},"bvq":{"ah":["FB"]},"bvr":{"ah":["axg"]},"bvp":{"aC":[]},"asw":{"ag":[],"v":[]},"aEQ":{"ah":["asw"]},"adp":{"av":[],"v":[]},"asq":{"ag":[],"v":[]},"asv":{"ag":[],"v":[]},"bkH":{"ah":["asq"]},"aEP":{"ah":["asv"]},"Oa":{"ag":[],"v":[]},"aER":{"ah":["Oa"],"ez":[]},"b8x":{"j5":[],"fg":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aR2"),Q:w("r5"),r:w("bu<n,n>"),c5:w("aT3"),dY:w("aT4"),fH:w("LY"),de:w("ajA"),A:w("eE<n?>"),e:w("HH"),B:w("nj"),P:w("i1"),df:w("le"),k:w("kF"),x:w("aA<~>"),f5:w("O<a2Z>"),V:w("O<ac>"),C:w("O<r5>"),O:w("O<u>"),c:w("O<LY>"),b:w("O<ajA>"),ac:w("O<eE<n?>>"),I:w("O<nj>"),u:w("O<i1>"),J:w("O<le>"),_:w("O<kF>"),cl:w("O<aA<ai<a7<n,@>>>>"),R:w("O<nl>"),cq:w("O<ai<+(L,L)>>"),ez:w("O<a7<n,aD>>"),gE:w("O<a7<n,n>>"),X:w("O<a7<n,@>>"),gl:w("O<aXe>"),fD:w("O<mA>"),bp:w("O<on>"),dN:w("O<t>"),ar:w("O<asJ>"),v:w("O<he>"),L:w("O<+(n,n)>"),G:w("O<+(L,L)>"),bi:w("O<+(L,~())>"),bd:w("O<+(n,H,R)>"),bF:w("O<+count,id,name(H,n,n)>"),E:w("O<cS>"),s:w("O<n>"),cF:w("O<as>"),aS:w("O<iU>"),p:w("O<v>"),F:w("O<fg>"),D:w("O<lo>"),cy:w("O<azA>"),fp:w("O<K_>"),M:w("O<K7>"),gZ:w("O<aGV>"),Y:w("O<aeC>"),U:w("O<aIW>"),n:w("O<L>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),W:w("cy<ah<ag>>"),d:w("ai<nj>"),Z:w("ai<i1>"),cg:w("ai<le>"),g:w("ai<kF>"),h:w("ai<a7<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<as>"),gk:w("ai<lo>"),j:w("ai<@>"),fK:w("by<n,n>"),d2:w("by<n,ai<a7<n,@>>>"),a:w("a7<n,@>"),f:w("a7<@,@>"),gv:w("N<n,HJ>"),cM:w("N<H,n>"),w:w("iE"),g2:w("rp"),bV:w("aol"),fL:w("cr"),K:w("aD"),fo:w("Ow<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,H)"),d9:w("+dx,hidden(L,ai<i1>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bp<L>"),gc:w("dI"),b4:w("cz<H>"),cI:w("jK<n>"),av:w("Z<z6>"),cc:w("Z<n>"),l:w("v"),gF:w("fg"),i:w("lo"),dO:w("FQ"),bw:w("ad2<n?>"),fx:w("K9"),q:w("n4"),y:w("R"),gR:w("L"),z:w("@"),S:w("H"),eK:w("ai<kF>?"),m:w("apC?"),cT:w("t?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),fO:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,R)?"),az:w("q4?"),T:w("n?"),aD:w("dI?"),o:w("lo?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b_r=new A.bk(B.hH,B.bG,B.hH,B.bG)
D.abo=new A.bk(B.hH,B.iA,B.hH,B.iA)
D.b_E=new A.bk(B.iB,B.bG,B.bG,B.bG)
D.b_I=new A.ay(B.cM,1.4,B.r,-1)
D.b_S=new A.ay(B.ae,1,B.r,-1)
D.b1g=new A.aX(0,1/0,64,1/0)
D.b1k=new A.aX(0,84,0,1/0)
D.b1A=new A.aX(130,1/0,0,1/0)
D.aza=w([B.lU,B.r2,B.c],x.O)
D.c09=new A.a9(B.ax,B.aD,B.x,D.aza,null,null)
D.b25=new A.o(null,null,null,null,null,D.c09,B.n)
D.d65=w([B.aV,B.bP],x.O)
D.c2g=new A.a9(B.b3,B.b6,B.x,D.d65,null,null)
D.b2q=new A.o(null,null,null,null,null,D.c2g,B.n)
D.WC=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.iJ=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.d9K=w([B.dx,D.WC,D.iJ],x.O)
D.c_l=new A.a9(B.b3,B.b6,B.x,D.d9K,null,null)
D.b3a=new A.o(null,null,null,null,null,D.c_l,B.n)
D.a8Y=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuE=new A.y("\ud83c\udf33",null,D.a8Y,null,null,null,null,null,null,null,null,null)
D.b6R=new A.cn(B.A,null,null,D.fuE,null)
D.fxa=new A.y("\ud83c\udfc6",null,Am.Jw,null,null,null,null,null,null,null,null,null)
D.b6X=new A.cn(B.A,null,null,D.fxa,null)
D.fs3=new A.y("\ud83e\ude98",null,B.v8,null,null,null,null,null,null,null,null,null)
D.b70=new A.cn(B.A,null,null,D.fs3,null)
D.b8L=new A.fi(null,null,null,null,null,E.k3,null,null,null,null)
D.acJ=new A.cn(B.A,null,null,D.b8L,null)
D.ku=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fcC=new A.F(!0,D.ku,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwi=new A.y("No books on the shelf yet.",null,D.fcC,null,null,null,null,null,null,null,null,null)
D.egC=new A.D(B.o4,D.fwi,null)
D.b7c=new A.cn(B.A,null,null,D.egC,null)
D.fq1=new A.y("\ud83e\ude98",null,D.a8Y,null,null,null,null,null,null,null,null,null)
D.b7B=new A.cn(B.A,null,null,D.fq1,null)
D.fp6=new A.y("Every drum is matched!",null,B.t2,null,null,null,null,null,null,null,null,null)
D.b7Y=new A.cn(B.A,null,null,D.fp6,null)
D.b87=new A.cn(B.A,null,null,A3.Ws,null)
D.ad4=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.baf=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bak=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bav=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.baE=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.nL=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.baH=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.baM=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.mn=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bbj=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.bbk=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bbt=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bbM=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bbP=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bbV=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bc1=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.adJ=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.WN=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.bcj=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.tq=new A.u(1,0.8392156862745098,0.1568627450980392,0.1568627450980392,B.q)
D.bcE=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.adW=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bd_=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bdf=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bdC=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bdL=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.EP=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.be4=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.be9=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.dK=new A.u(1,0.9490196078431372,0.6901960784313725,0.11764705882352941,B.q)
D.aek=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.beB=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.bf9=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bfh=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.aeB=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bfX=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aeY=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bgQ=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.afa=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bhb=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.bhh=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bhq=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bhs=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.bht=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bhL=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bhM=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bhP=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.afk=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Xu=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bi7=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bir=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.biw=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.afv=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.biB=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.biT=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.biU=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.F8=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bkm=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.xI=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bkw=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bkA=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.ag8=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.bkT=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.blk=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.XQ=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.agj=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bm3=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bmr=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bmA=new A.u(1,1,0.8235294117647058,0.2901960784313726,B.q)
D.agF=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.bmJ=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bmZ=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.Y2=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bnc=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bnt=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.Y6=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bny=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.bnD=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ah0=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.boi=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bop=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.fqD=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bt5=new A.eE(null,D.fqD,B.f1,null,x.A)
D.fzv=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bt7=new A.eE(null,D.fzv,B.f1,null,x.A)
D.btC=new A.bb(3e4)
D.btG=new A.bb(38e5)
D.bup=new A.ii(0,10,0,10)
D.buy=new A.Q(0,1,0,0)
D.buJ=new A.ii(0,4,0,4)
D.buM=new A.Q(0,4,5,0)
D.bv1=new A.Q(10,10,14,10)
D.bvd=new A.ii(10,4,10,4)
D.bvl=new A.ii(10,8,10,8)
D.bvm=new A.Q(10,8,8,8)
D.bvN=new A.Q(12,6,12,2)
D.bw4=new A.Q(14,10,6,6)
D.bw5=new A.Q(14,12,14,0)
D.bw9=new A.Q(14,12,14,8)
D.bwc=new A.Q(14,12,8,14)
D.bwg=new A.ii(14,14,14,14)
D.bww=new A.Q(14,6,14,40)
D.bwz=new A.Q(14,8,14,30)
D.bwX=new A.Q(16,2,16,10)
D.bx6=new A.Q(16,6,16,16)
D.bx7=new A.Q(16,6,16,30)
D.bx9=new A.Q(16,6,16,8)
D.bxn=new A.Q(18,10,18,4)
D.bxp=new A.Q(18,12,18,0)
D.bxw=new A.Q(18,14,12,4)
D.ajk=new A.Q(18,16,18,8)
D.bxN=new A.Q(18,20,18,22)
D.ajo=new A.Q(18,24,18,24)
D.bxT=new A.Q(18,30,18,30)
D.bya=new A.Q(20,10,12,20)
D.byd=new A.Q(20,11,20,11)
D.byo=new A.Q(20,18,16,18)
D.byq=new A.Q(20,18,20,6)
D.bzf=new A.Q(24,32,24,28)
D.bzg=new A.Q(24,36,24,32)
D.bzk=new A.Q(26,26,24,14)
D.bzz=new A.Q(2,4,2,8)
D.bzD=new A.Q(30,0,30,0)
D.bzO=new A.Q(38,22,22,22)
D.ajI=new A.Q(40,24,24,24)
D.bzQ=new A.ii(40,40,40,40)
D.bzS=new A.Q(46,30,30,30)
D.ajL=new A.Q(4,0,0,8)
D.bAi=new A.Q(56,40,40,40)
D.bAm=new A.Q(1.25,1.25,1.25,1.25)
D.bAn=new A.Q(60,0,60,0)
D.bAq=new A.Q(6,14,6,16)
D.bAu=new A.Q(6,4,12,0)
D.bAx=new A.Q(6,6,10,2)
D.bAE=new A.ii(7,3,7,3)
D.bBa=new A.Q(5,1.5,5,1.5)
D.bBl=new A.Q(6,2.5,6,2.5)
D.fHp=new A.y("Family Games",null,B.jZ,null,null,null,null,null,null,null,null,null)
D.fph=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,H.a8Q,null,null,null,null,null,null,null,null,null)
D.cB4=w([D.fHp,D.fph],x.p)
D.bqD=new A.fj(B.ag,B.e,B.j,B.E,null,B.p,null,0,D.cB4,null)
D.bBD=new A.bA(1,B.bd,D.bqD,null)
D.fLJ=new A.y("Signature",null,B.nC,null,null,null,null,null,null,null,null,null)
D.bBH=new A.bA(1,B.bd,D.fLJ,null)
D.fE3=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,M.rZ,null,null,null,null,null,null,null,null,null)
D.bCf=new A.bA(1,B.bd,D.fE3,null)
D.fIT=new A.y("Tell the AI what to fix",null,B.df,null,null,null,null,null,null,null,null,null)
D.bCv=new A.bA(1,B.bd,D.fIT,null)
D.fk4=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKP=new A.y("Worksheets",null,D.fk4,null,null,null,null,null,null,null,null,null)
D.fkd=new A.F(!0,E.adu,null,null,null,null,13,B.cw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJI=new A.y("Track your project spending",null,D.fkd,null,null,null,null,null,null,null,null,null)
D.cYU=w([D.fKP,B.au,D.fJI],x.p)
D.bqf=new A.fj(B.ag,B.e,B.j,B.E,null,B.p,null,0,D.cYU,null)
D.bCB=new A.bA(1,B.bd,D.bqf,null)
D.ffi=new A.F(!0,E.k3,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpP=new A.y("FAMILY LIBRARY",null,D.ffi,null,null,null,null,null,null,null,null,null)
D.bCT=new A.bA(1,B.bd,D.fpP,null)
D.Ni=new C.HH("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.vV=new C.HI(0,"male")
D.oV=new C.HI(1,"female")
D.yk=new C.HI(2,"unknown")
D.u0=new C.akM(0,"owner")
D.Nj=new C.akM(1,"editor")
D.kD=new C.akM(2,"viewer")
D.alr=new A.a1(61199,"MaterialIcons",!1)
D.bHP=new A.a1(61504,"MaterialIcons",!1)
D.bHQ=new A.a1(61505,"MaterialIcons",!1)
D.bHS=new A.a1(61587,"MaterialIcons",!1)
D.bHZ=new A.a1(61890,"MaterialIcons",!1)
D.bIS=new A.a1(63034,"MaterialIcons",!0)
D.bJG=new A.a1(63429,"MaterialIcons",!1)
D.anF=new A.a1(984520,"MaterialIcons",!1)
D.bIn=new A.a1(62776,"MaterialIcons",!1)
D.bLV=new A.ae(D.bIn,26,B.b_,null,null,null)
D.bGN=new A.a1(57648,"MaterialIcons",!1)
D.bMd=new A.ae(D.bGN,14,B.c,null,null,null)
D.bMv=new A.ae(B.Ge,17,null,null,null,null)
D.bMB=new A.ae(B.a0r,null,B.bP,null,null,null)
D.bN1=new A.ae(E.a0w,null,null,null,null,null)
D.bN4=new A.ae(B.j9,18,E.k3,null,null,null)
D.a0h=new A.a1(62044,"MaterialIcons",!1)
D.bN9=new A.ae(D.a0h,null,B.aV,null,null,null)
D.bNg=new A.ae(B.yv,18,B.c,null,null,null)
D.bNZ=new A.ae(B.e3,16,null,null,null,null)
D.bO5=new A.ae(D.a0h,32,B.aV,null,null,null)
D.bOp=new A.ae(E.als,18,B.cM,null,null,null)
D.bPs=new A.ae(B.Go,22,B.aw,null,null,null)
D.bPE=new A.ae(B.e3,22,B.b_,null,null,null)
D.bPQ=new A.ae(U.a0m,22,B.c,null,null,null)
D.bPW=new A.ae(B.uc,52,B.c,null,null,null)
D.bQ5=new A.ae(B.Go,30,B.aw,null,null,null)
D.bQo=new A.ae(B.a0C,null,B.c,null,null,null)
D.aoh=new A.ae(B.ul,22,B.c,null,null,null)
D.bQy=new A.ae(B.e3,17,null,null,null,null)
D.bQS=new A.ae(B.wa,26,B.cM,null,null,null)
D.bRC=new A.ae(B.a0I,16,null,null,null,null)
D.bSn=new A.ae(B.uc,24,B.c,null,null,null)
D.bSs=new A.ae(B.NL,20,B.rz,null,null,null)
D.bSx=new A.ae(B.Gc,null,B.bP,null,null,null)
D.bSE=new A.ae(B.j9,18,B.c,null,null,null)
D.bTh=new A.ae(B.cx,22,B.ae,null,null,null)
D.bU6=new A.ae(B.ec,16,B.ae,null,null,null)
D.bUi=new A.ae(D.a0h,20,B.aV,null,null,null)
D.aoG=new A.ae(B.hD,20,null,null,null,null)
D.bUN=new A.ae(B.cx,18,D.ku,null,null,null)
D.bV4=new A.ae(B.yF,28,B.c,null,null,null)
D.bVd=new A.ae(B.NB,null,B.fj,null,null,null)
D.bVx=new A.ae(B.yF,24,B.c,null,null,null)
D.bVY=new A.ae(B.uc,null,B.aV,null,null,null)
D.bVZ=new A.ae(B.jM,20,B.cM,null,null,null)
D.bWi=new A.ae(B.Ge,16,null,null,null,null)
D.bXQ=new A.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jJ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eE,!0,null,null,null,null)
D.apm=new C.a5m(10,null)
D.bYl=new C.a5m(12,null)
D.bYm=new C.a5m(14,null)
D.ddA=w([B.bu,B.aV,B.fe,B.b_],x.O)
D.bZx=new A.a9(B.ax,B.aD,B.x,D.ddA,null,null)
D.d36=w([D.nL,D.iJ],x.O)
D.bZI=new A.a9(B.ax,B.aD,B.x,D.d36,null,null)
D.bjq=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bpf=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.cVH=w([D.bjq,D.bpf],x.O)
D.bZJ=new A.a9(B.b3,B.b6,B.x,D.cVH,null,null)
D.d7V=w([B.f4,B.fD,B.fe],x.O)
D.bZO=new A.a9(B.ax,B.aD,B.x,D.d7V,null,null)
D.afZ=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.baN=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.cXI=w([D.afZ,D.baN],x.O)
D.c_m=new A.a9(B.b3,B.b6,B.x,D.cXI,null,null)
D.bei=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.ayt=w([D.bei,D.afZ],x.O)
D.c_G=new A.a9(B.ax,B.aD,B.x,D.ayt,null,null)
D.aeT=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bgH=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.d73=w([D.aeT,D.bgH],x.O)
D.c0k=new A.a9(B.a3,B.a8,B.x,D.d73,null,null)
D.dkh=w([B.bx,B.n2],x.O)
D.c0m=new A.a9(B.b3,B.b6,B.x,D.dkh,null,null)
D.bjl=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dla=w([D.bjl,D.ku,D.ku,P.XP],x.O)
D.dnB=w([0,0.07,0.9,1],x.n)
D.c0S=new A.a9(B.a3,B.a8,B.x,D.dla,D.dnB,null)
D.c11=new A.a9(B.ax,B.aD,B.x,B.Rh,null,null)
D.cTA=w([B.aC,D.nL],x.O)
D.c14=new A.a9(B.a3,B.a8,B.x,D.cTA,null,null)
D.djR=w([B.b_,B.aV,B.bP],x.O)
D.c21=new A.a9(B.ax,B.aD,B.x,D.djR,null,null)
D.c6e=w([10,20,30],x.t)
D.cfO=w(["kahoot","fire","memory","order","test"],x.s)
D.cnF=w([B.bu,B.b_,B.f4],x.O)
D.cnM=w([B.by,B.aC,B.jm],x.O)
D.cnO=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cou=w([30,140,262,360],x.n)
D.bhV=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cu_=w([D.bhV,E.afF],x.O)
D.eby=new A.t(1,2)
D.eYD=new A.cS(B.aW,D.eby,3)
D.avr=w([D.eYD],x.E)
D.cBj=w([B.h8,B.c9,B.fd],x.O)
D.cE1=w([B.bL,B.br,B.bm],x.O)
D.bDr=new C.uk("classic","Classic leather","Gold-edged brown leather",D.ayt,E.k3,E.k3,"\u2766",B.L,!0,!1,!1,!1)
D.ba2=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bo7=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d_x=w([D.ba2,D.bo7],x.O)
D.afJ=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bDm=new C.uk("ornate","Ornate gold","Double gold border and flourishes",D.d_x,D.afJ,D.afJ,"\u2726",B.L,!0,!0,!0,!1)
D.bdU=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bka=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cSx=w([D.bdU,D.bka],x.O)
D.bDl=new C.uk("parchment","Parchment","Old paper with dark ink",D.cSx,D.F8,I.iH,"\u2767",B.L,!0,!1,!1,!0)
D.adb=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bmn=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.di9=w([D.adb,D.bmn],x.O)
D.bhn=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.blI=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bDo=new C.uk("minimal","Clean paper","Plain and elegant, like a printed book",D.di9,D.bhn,D.blI,"",B.L,!0,!0,!1,!0)
D.bDq=new C.uk("midnight","Midnight","Deep blue with silver stars",H.ayN,B.cr,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.bDk=new C.uk("emerald","Emerald library","Green cloth, title on the left",S.avQ,E.k3,B.fZ,"\u25c6",B.bh,!0,!1,!1,!1)
D.bmS=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dgi=w([B.ev,D.bmS],x.O)
D.biA=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bjJ=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bDp=new C.uk("rose","Rose vintage","Burgundy with rose-gold lettering",D.dgi,D.biA,D.bjJ,"\u2740",B.L,!0,!1,!0,!1)
D.dkN=w([B.cp,F.n3],x.O)
D.bDn=new C.uk("modern","Modern","Dark, bold, left-aligned",D.dkN,B.aR,B.c,"",B.bh,!1,!0,!1,!1)
D.a2H=w([D.bDr,D.bDm,D.bDl,D.bDo,D.bDq,D.bDk,D.bDp,D.bDn],A.ax("O<uk>"))
D.cGZ=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dkA=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bDC=new C.le('What does "Ubuntu" mean?',D.dkA,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.cUd=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bDF=new C.le("In Swahili, what do we call a grandmother?",D.cUd,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.cU5=w(["Babu","Mama","Baba","Dada"],x.s)
D.bDA=new C.le("In Swahili, what do we call a grandfather?",D.cU5,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.cVi=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bDE=new C.le("What is a sister called in Swahili?",D.cVi,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d__=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bDB=new C.le("What is a brother called in Swahili?",D.d__,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.cU4=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bDM=new C.le("Which word means father in Swahili?",D.cU4,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dlF=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bDL=new C.le('"Umoja ni nguvu" means...',D.dlF,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.diP=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bDN=new C.le('"Haba na haba hujaza kibaba" teaches us...',D.diP,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.cXQ=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bDK=new C.le('The African saying "It takes a village to raise a child" means...',D.cXQ,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dlY=w(["The elders","The market","The river","The drum"],x.s)
D.bDG=new C.le("Who is the traditional keeper of the family stories?",D.dlY,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cL8=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bDD=new C.le("Why do families sit round the fire at night?",D.cL8,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dkP=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bDI=new C.le('What does "Harambee" mean?',D.dkP,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d1E=w(["An elder","A baby","A market","A cow"],x.s)
D.bDH=new C.le('"Mzee" is a respectful word for...',D.d1E,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dg9=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bDJ=new C.le('What does "Shikamoo" show?',D.dg9,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.avM=w([D.bDC,D.bDF,D.bDA,D.bDE,D.bDB,D.bDM,D.bDL,D.bDN,D.bDK,D.bDG,D.bDD,D.bDI,D.bDH,D.bDJ],x.J)
D.cS4=w([B.bP,B.bi],x.O)
D.bjb=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cSJ=w([D.adb,D.bjb],x.O)
D.cUa=w([0,0.45,0.72,0.92,1],x.n)
D.bdQ=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.cUr=w([D.bdQ,B.dc],x.O)
D.cVX=w([B.bb,B.j1,B.oL],x.O)
D.bek=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.blz=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bbo=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.cW1=w([D.bek,D.blz,D.bbo],x.O)
D.cWk=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.cWt=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.haZ=new C.acI(78,424,48,44,56)
D.haX=new C.acI(214,396,34,34,42)
D.haY=new C.acI(442,452,56,50,64)
D.awJ=w([D.haZ,D.haX,D.haY],A.ax("O<acI>"))
D.cWZ=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.baJ=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bfW=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dnx=w([D.aeT,D.baJ,D.bfW],x.O)
D.bDs=new C.ul("leather","Leather",D.dnx,"vintage")
D.d2C=w([B.d7,B.Lv,A7.X1],x.O)
D.bDz=new C.ul("midnight","Midnight",D.d2C,"starry")
D.cVY=w([B.eh,B.dX,B.ln],x.O)
D.bDy=new C.ul("forest","Forest",D.cVY,"story")
D.dpv=w([B.el,B.ev,B.kx],x.O)
D.bDv=new C.ul("burgundy","Burgundy",D.dpv,"royal")
D.cDA=w([B.aC,B.oN,B.nK],x.O)
D.bDw=new C.ul("royal","Royal",D.cDA,"royal")
D.cYk=w([B.br,B.cp,F.n3],x.O)
D.bDt=new C.ul("charcoal","Charcoal",D.cYk,"geo")
D.dnF=w([B.ca,B.dD,B.xC],x.O)
D.bDx=new C.ul("sunset","Sunset",D.dnF,"sunset")
D.dol=w([B.j1,B.F9,B.X4],x.O)
D.bDu=new C.ul("ocean","Ocean",D.dol,"band")
D.z6=w([D.bDs,D.bDz,D.bDy,D.bDv,D.bDw,D.bDt,D.bDx,D.bDu],A.ax("O<ul>"))
D.cYL=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cZm=w([B.al,B.aJ,B.M],x.O)
D.d_C=w([B.ev,B.dX,B.d7,B.h_,B.xF,B.cM,B.k7,B.e5,B.d8],x.O)
D.d_D=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eYE=new A.cS(B.dn,B.dy,8)
D.d_N=w([D.eYE],x.E)
D.d0R=w([B.c7,B.dD,B.kv],x.O)
D.bcy=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bkF=new A.u(1,0.0784313725490196,0.09019607843137255,0.2901960784313726,B.q)
D.bgc=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bk5=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.boM=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d15=w([D.bcy,D.bkF,D.bgc,D.bk5,D.boM],x.O)
D.d1l=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d1u=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.d2x=w([B.c7,B.hi],x.O)
D.d49=w([D.dK,D.tq,B.j8,D.mn,D.dK],x.O)
D.d4I=w([B.aT,B.vw,B.xr],x.O)
D.axH=w(["True","False"],x.s)
D.exx=new A.z(-0.65,0.6)
D.eJC=new A.z(-0.2,0.95)
D.eKC=new A.z(0.25,0.95)
D.eAU=new A.z(0.7,0.6)
D.eLa=new A.z(1,0.1)
D.d5t=w([Al.T5,D.exx,D.eJC,D.eKC,D.eAU,D.eLa],x.G)
D.bi8=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bo_=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bdt=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.d5z=w([D.bi8,D.bo_,D.bdt],x.O)
D.d5D=w([B.bM,B.cs,B.ds,B.aT],x.O)
D.d66=w([B.i5,B.ca,B.tw],x.O)
D.d6B=w([B.f4,B.cM],x.O)
D.d79=w([B.cY,B.ft,B.hy],x.O)
D.d7k=w([B.aR,B.bi,B.d7],x.O)
D.d7S=w([B.eo,B.cS,B.dX],x.O)
D.d8a=w([B.dI,B.d7,B.Lv],x.O)
D.d8u=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.biL=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bh7=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.d8M=w([D.biL,D.aek,D.bh7],x.O)
D.d9v=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a3C=w(["leather","linen","plain","stars","rays"],x.s)
D.daH=w([0.5,2,3.6],x.n)
D.dbc=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bLB=new A.a1(985219,"MaterialIcons",!1)
D.bL9=new A.a1(983781,"MaterialIcons",!1)
D.ay8=w([B.a0r,B.ia,B.m_,B.ib,D.bLB,B.Gy,B.q7,D.bL9,H.ans,B.C5,B.q9,B.mC],A.ax("O<a1>"))
D.a3G=w(["double","single","corners","none"],x.s)
D.bDh=new C.z6("Little Seed","\ud83c\udf31",0)
D.bDj=new C.z6("Young Listener","\ud83d\udc42",40)
D.bDi=new C.z6("Storyteller","\ud83e\ude98",120)
D.bDg=new C.z6("Village Pride","\ud83c\udfe1",300)
D.bDe=new C.z6("Keeper of Roots","\ud83c\udf33",700)
D.bDf=new C.z6("Elder of the Fire","\ud83d\udd25",1500)
D.ay9=w([D.bDh,D.bDj,D.bDi,D.bDg,D.bDe,D.bDf],A.ax("O<z6>"))
D.dcg=w([B.dt,B.bl,B.e5],x.O)
D.dct=w([],x.C)
D.CE=w([],x.u)
D.aI0=new A.t(225,528)
D.eza=new A.z(D.aI0,1)
D.ecd=new A.t(350,548)
D.eF8=new A.z(D.ecd,0.95)
D.aHW=new A.t(158,656)
D.eF4=new A.z(D.aHW,1.12)
D.ecW=new A.t(92,544)
D.euR=new A.z(D.ecW,0.93)
D.ece=new A.t(398,614)
D.eBf=new A.z(D.ece,1.04)
D.ec6=new A.t(318,662)
D.eqr=new A.z(D.ec6,1.1)
D.a3O=w([D.eza,D.eF8,D.eF4,D.euR,D.eBf,D.eqr],A.ax("O<+(t,L)>"))
D.dep=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.deQ=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dfR=w([D.dK,D.tq,B.j8,D.mn,D.dK,B.j8],x.O)
D.dhd=w([B.aE,B.ft,B.h_],x.O)
D.dhv=w([-12,12],x.n)
D.dhy=w([-17,17],x.n)
D.diN=w([B.bI,B.mZ,B.Y0],x.O)
D.dj2=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dCk=new C.lG("construction","Construction","Jobsite & builds",B.yy)
D.dCr=new C.lG("house","Home Build","Houses & rooms",B.w5)
D.dCh=new C.lG("grocery","Grocery","Store & pantry",B.a1f)
D.dCg=new C.lG("calculator","Calculations","Math & estimates",B.NU)
D.dCp=new C.lG("lumber","Materials","Lumber & supplies",B.O9)
D.dCd=new C.lG("kitchen","Kitchen","Remodel & meals",Z.amF)
D.bL7=new A.a1(983756,"MaterialIcons",!1)
D.dCi=new C.lG("landscape","Landscaping","Yard & garden",D.bL7)
D.dCc=new C.lG("plumbing","Plumbing","Pipes & water",B.qg)
D.dCs=new C.lG("electrical","Electrical","Wiring & power",B.ho)
D.dCa=new C.lG("store","Retail Shop","Daily business",B.l7)
D.dCb=new C.lG("paint_remodel","Paint & Remodel","Colors & walls",Ac.a0O)
D.bKB=new A.a1(983311,"MaterialIcons",!1)
D.dCo=new C.lG("roofing","Roofing","Roofs & exteriors",D.bKB)
D.bLj=new A.a1(983986,"MaterialIcons",!1)
D.dC9=new C.lG("warehouse","Warehouse","Storage & stock",D.bLj)
D.dCm=new C.lG("vehicles","Vehicles","Fleet & transport",B.Gz)
D.bIp=new A.a1(62785,"MaterialIcons",!1)
D.dCf=new C.lG("farm","Farm","Crops & livestock",D.bIp)
D.dCe=new C.lG("restaurant","Restaurant","Food & catering",B.wd)
D.dCl=new C.lG("tools","Tools","Workshop gear",B.Gv)
D.dCq=new C.lG("wallet","Cash & Wallet","Quick spending",B.jM)
D.bJB=new A.a1(63395,"MaterialIcons",!1)
D.dCn=new C.lG("concrete","Concrete","Foundation work",D.bJB)
D.dCj=new C.lG("blueprint","Blueprint","Plans & design",Ai.alX)
D.a47=w([D.dCk,D.dCr,D.dCh,D.dCg,D.dCp,D.dCd,D.dCi,D.dCc,D.dCs,D.dCa,D.dCb,D.dCo,D.dC9,D.dCm,D.dCf,D.dCe,D.dCl,D.dCq,D.dCn,D.dCj],A.ax("O<lG>"))
D.djx=w([B.bq,B.bl],x.O)
D.dki=w([B.ii,B.nS,B.dH],x.O)
D.af4=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.afW=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bhr=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.b9L=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.azh=w([D.af4,D.afW,D.bhr,D.b9L],x.O)
D.dlq=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a4h=w(["top","middle","bottom"],x.s)
D.dmN=w([B.co,B.bi,B.d7],x.O)
D.azv=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b3D=new A.ac(0,B.G,B.aW,B.J,14)
D.dn4=w([D.b3D],x.V)
D.bmH=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bgq=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dnq=w([D.adJ,D.bmH,D.bgq],x.O)
D.dnr=w([B.bo,B.cS,B.dX],x.O)
D.dpq=w([B.bL,B.al],x.O)
D.dpr=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e8L={top:0,middle:1,bottom:2}
D.dsD=new A.bu(D.e8L,["Top","Middle","Bottom"],x.r)
D.e8p={double:0,single:1,corners:2,none:3}
D.dsJ=new A.bu(D.e8p,["Double line","One line","Corners","None"],x.r)
D.e9t={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dub=new A.bu(D.e9t,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dun=new A.bu(B.hX,[],A.ax("bu<H,+(n,n)>"))
D.e8E={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.CQ=new A.bu(D.e8E,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bu<n,H>"))
D.dwU=new G.N3(32,null)
D.dwV=new G.N3(40,null)
D.dwW=new G.N3(46,null)
D.aHt=new C.asv(null)
D.eaT=new A.t(0,412)
D.eaV=new A.t(0,900)
D.eb7=new A.t(10,14)
D.eba=new A.t(10,-10)
D.ebe=new A.t(10,-46)
D.ebf=new A.t(10,-58)
D.ebg=new A.t(116,442)
D.ebh=new A.t(11,-1)
D.ebi=new A.t(11,-10)
D.ebj=new A.t(11,-21)
D.aHR=new A.t(11,-60)
D.ebp=new A.t(14,-2)
D.a6c=new A.t(150,592)
D.ebs=new A.t(15,-15)
D.ebt=new A.t(16,-1)
D.ebx=new A.t(190,444)
D.ebA=new A.t(1,5)
D.ebI=new A.t(21,-78)
D.aI1=new A.t(225,574)
D.ebQ=new A.t(24,-52)
D.ec2=new A.t(300,440)
D.ec5=new A.t(318,476)
D.ec8=new A.t(324,144)
D.a6g=new A.t(332,150)
D.eca=new A.t(338,140)
D.ecb=new A.t(340,158)
D.a6h=new A.t(36,-24)
D.ecm=new A.t(42,468)
D.ecn=new A.t(431,510)
D.eco=new A.t(431,520)
D.ecp=new A.t(45,-92)
D.ecq=new A.t(46,20)
D.ecr=new A.t(46,-92)
D.ecs=new A.t(46,-94)
D.ect=new A.t(47,-4)
D.ecu=new A.t(48,-4)
D.ecC=new A.t(4,-26)
D.ecR=new A.t(8,14)
D.ecV=new A.t(8,-76)
D.ecY=new A.t(9,-2)
D.ecZ=new A.t(9,-58)
D.ed_=new A.t(9,-79)
D.ed0=new A.t(9,-9)
D.edD=new A.t(16.5,8)
D.edF=new A.t(3.2,0)
D.edH=new A.t(-16.5,8)
D.edO=new A.t(16.5,2)
D.edR=new A.t(-3.2,0)
D.ee_=new A.t(9.5,6)
D.ee3=new A.t(-10,14)
D.ee4=new A.t(-10,-58)
D.ee5=new A.t(-11,-1)
D.ee6=new A.t(-11,-10)
D.ee8=new A.t(-11,-60)
D.ee9=new A.t(-12,-16)
D.eeg=new A.t(-14,-2)
D.eej=new A.t(-15,-15)
D.eek=new A.t(-15,-3)
D.eem=new A.t(-16,-1)
D.eeD=new A.t(-24,-52)
D.aIn=new A.t(-36,-24)
D.eeV=new A.t(-4,-26)
D.eeX=new A.t(-4,-6)
D.ef5=new A.t(-8,-3)
D.ef6=new A.t(-8,-48)
D.ef9=new A.t(-9,-2)
D.efb=new A.t(-9,-58)
D.efc=new A.t(-9,-79)
D.efd=new A.t(-9,-9)
D.eff=new A.t(-9.5,6)
D.eft=new A.t(-16.5,2)
D.fwT=new A.y("Write a new book",null,B.hI,null,B.L,null,null,null,null,null,null,null)
D.eg2=new A.D(B.l0,D.fwT,null)
D.fLi=new A.y("Tap to go on",null,B.v1,null,null,null,null,null,null,null,null,null)
D.egm=new A.D(B.kZ,D.fLi,null)
D.anR=new A.ae(B.hC,18,B.c,null,null,null)
D.fqb=new A.y("Add",null,B.lH,null,null,null,null,null,null,null,null,null)
D.d5R=w([D.anR,B.qw,D.fqb],x.p)
D.eWh=new A.cb(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d5R,null)
D.egp=new A.D(B.ni,D.eWh,null)
D.egq=new A.D(E.aid,A3.Ws,null)
D.fk_=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftd=new A.y("New Project",null,D.fk_,null,null,null,null,null,null,null,null,null)
D.d9S=w([D.anR,B.ab,D.ftd],x.p)
D.eWk=new A.cb(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d9S,null)
D.egB=new A.D(B.iP,D.eWk,null)
D.fvI=new A.y("Choose your header",null,X.rX,null,null,null,null,null,null,null,null,null)
D.egW=new A.D(B.hA,D.fvI,null)
D.b9_=new A.fi(2.2,null,null,null,null,B.cM,null,null,null,null)
D.f0u=new A.a8(22,22,D.b9_,null)
D.b78=new A.cn(B.A,null,null,D.f0u,null)
D.eh0=new A.D(B.Zb,D.b78,null)
D.bwq=new A.Q(14,2,14,6)
D.fJr=new A.y("The top of your book. Tap a design to see it.",null,O.v2,null,null,null,null,null,null,null,null,null)
D.eh1=new A.D(D.bwq,D.fJr,null)
D.fuT=new A.y("\ud83c\udfc6 A new record!",null,B.fK,null,null,null,null,null,null,null,null,null)
D.eh2=new A.D(B.kZ,D.fuT,null)
D.eiA=new A.iS(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eiD=new A.iS(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aIO=new A.iS(1,0.9607843137254902,0.48627450980392156,0)
D.IE=new A.iS(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zG=new A.iS(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eiJ=new A.iS(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hcO=new C.bh3(null)
D.brp=new A.mr(D.hcO,null,B.az,null,null)
D.aMr=new A.cN(0,0,0,0,null,null,D.brp,null)
D.euw=new A.z("E","Sit by the fire again")
D.ezW=new A.z("C","Good Learner")
D.eDb=new A.z("D","Still Growing")
D.eHy=new A.z(-42,42)
D.eIQ=new A.z("B","Faithful Listener")
D.eKE=new A.z("A","Keeper of the Family")
D.eNx=new A.bj(-17,0.7,0)
D.eNZ=new A.bj(-8,0.95,1.3)
D.eOP=new A.bj(18,0.65,5.2)
D.eOR=new A.bj(0,1.15,2.6)
D.eP7=new A.bj(9,0.9,3.9)
D.eQD=new A.cx([0,0,1,1])
D.aNO=new A.a5(0,0,520,160)
D.eTv=new A.a5(14,-64,34,-12)
D.eTy=new A.a5(30,-9,46,1)
D.eTz=new A.a5(4,2,11,14)
D.eTB=new A.a5(-8,-12.5,8,-7)
D.eTC=new A.a5(-16.5,-21,16.5,1)
D.eTD=new A.a5(6,8,10,14)
D.eTG=new A.a5(-6.5,-74,6.5,-58)
D.eTM=new A.a5(-10,8,-6,14)
D.eTN=new A.a5(-11,2,-4,14)
D.eTO=new A.a5(-11,-70,11,-56)
D.eTV=new A.a5(-13,-24,13,-4)
D.eU0=new A.a5(-15,-21,15,0)
D.eU3=new A.a5(-16,-21,16,1)
D.eU4=new A.a5(-16,-21,16,2)
D.eU7=new A.a5(-16,-26,16,-6)
D.eUh=new A.a5(-230,-26,230,26)
D.eUF=new A.a5(-38,-26,12,-6)
D.eUJ=new A.a5(-3,-70,3,-63)
D.eUK=new A.a5(-44,-22,44,0)
D.eUM=new A.a5(-46,-9,-30,1)
D.aNS=new A.a5(-80,-190,80,20)
D.eUT=new A.a5(-8,-26,40,-6)
D.eUU=new A.a5(-9,-15,9,-9)
D.fJ_=new A.y("Let the AI write it from your tree",null,B.iX,null,B.L,null,null,null,null,null,null,null)
D.bEj=new A.dr(1,B.cn,D.fJ_,null)
D.d2w=w([E.a1J,B.ab,D.bEj],x.p)
D.eVX=new A.cb(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d2w,null)
D.fpQ=new A.y("Save member",null,B.ck,null,null,null,null,null,null,null,null,null)
D.dhA=w([D.aoG,B.ab,D.fpQ],x.p)
D.eW6=new A.cb(B.aM,B.b7,B.j,B.m,null,B.p,null,0,D.dhA,null)
D.bPJ=new A.ae(B.hR,14,B.b_,null,null,null)
D.fdS=new A.F(!0,B.b_,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftD=new A.y("Cashier",null,D.fdS,null,null,null,null,null,null,null,null,null)
D.dao=w([D.bPJ,B.bn,D.ftD],x.p)
D.eW9=new A.cb(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.dao,null)
D.fpR=new A.y("Transfer & settings",null,B.df,null,null,null,null,null,null,null,null,null)
D.bCl=new A.bA(1,B.bd,D.fpR,null)
D.cVr=w([D.aoh,B.as,D.bCl],x.p)
D.eWa=new A.cb(B.aM,B.e,B.j,B.m,null,B.p,null,0,D.cVr,null)
D.f_b=new A.at(16,40)
D.f_g=new A.at(22,64)
D.f_n=new A.at(280,88)
D.f0a=new A.a8(30,null,null,null)
D.f1l=new A.hP(5,8,8,1,null)
D.f1t=new A.hP(2,12,12,1.05,null)
D.ftj=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.f2b=new A.b2(D.ftj,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fty=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aPW=new A.b2(D.fty,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fBN=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f2F=new A.b2(D.fBN,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fMi=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.f2K=new A.b2(D.fMi,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fvG=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.f2R=new A.b2(D.fvG,null,null,null,null,null,null,null,null,null,null,null,null,B.fP,!1,null,null,null,B.t,null)
D.fJE=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aQ_=new A.b2(D.fJE,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fvE=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.f3g=new A.b2(D.fvE,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fqs=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f3i=new A.b2(D.fqs,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fzj=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.f3o=new A.b2(D.fzj,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fN0=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.f43=new A.b2(D.fN0,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fHT=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.f4s=new A.b2(D.fHT,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fMm=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f4v=new A.b2(D.fMm,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fDn=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f4x=new A.b2(D.fDn,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fxu=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.f4y=new A.b2(D.fxu,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fxv=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f5y=new A.b2(D.fxv,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.ftl=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.f5Q=new A.b2(D.ftl,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fvi=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.f69=new A.b2(D.fvi,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fCS=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.f6p=new A.b2(D.fCS,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.fyj=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.f6q=new A.b2(D.fyj,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.t,null)
D.f9z=new A.F(!0,D.ku,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9K=new A.F(!0,D.tq,null,null,null,null,76,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa_=new A.F(!0,D.ku,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa3=new A.F(!0,D.dK,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fac=new A.F(!0,D.iJ,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fan=new A.F(!0,D.iJ,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faG=new A.rL(!0,B.rJ,null,null,null,null,B.du,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.faW=new A.F(!0,D.dK,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faZ=new A.F(!0,D.ku,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb_=new A.F(!0,D.dK,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb4=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb7=new A.F(!0,D.dK,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbB=new A.F(!0,B.b_,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbC=new A.F(!0,B.ae,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc5=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc6=new A.F(!0,B.aQ,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc9=new A.F(!0,D.nL,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcv=new A.F(!0,D.dK,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8y=new A.rL(!0,B.SE,null,null,null,null,B.du,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRc=new A.F(!0,D.dK,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcF=new A.F(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd4=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdx=new A.F(!0,D.iJ,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fek=new A.F(!0,D.iJ,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feI=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feN=new A.F(!0,I.iH,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feW=new A.F(!0,D.iJ,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg0=new A.F(!0,D.iJ,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg2=new A.F(!0,B.M,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg3=new A.F(!0,D.dK,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgB=new A.F(!0,D.iJ,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgM=new A.F(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh7=new A.F(!0,B.fj,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhu=new A.F(!0,B.bP,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhy=new A.F(!0,B.bx,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhC=new A.F(!0,B.c,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhU=new A.F(!0,D.F8,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi2=new A.F(!0,B.b_,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fis=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiU=new A.F(!0,D.dK,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj2=new A.F(!0,B.cM,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjf=new A.F(!0,D.mn,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.JH=new A.F(!0,D.dK,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjx=new A.F(!0,B.bP,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjY=new A.F(!0,B.b_,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkx=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkU=new A.F(!0,D.iJ,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flm=new A.F(!0,D.iJ,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fls=new A.F(!0,B.al,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flA=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSd=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flD=new A.F(!0,D.iJ,null,null,null,null,19,B.u,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a91=new A.F(!0,B.al,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSq=new A.F(!0,D.nL,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fng=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnF=new A.F(!0,I.iH,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnN=new A.F(!0,I.iH,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fog=new A.y("Time:",null,B.hf,null,null,null,null,null,null,null,null,null)
D.foC=new A.y("\ud83c\udfae",null,H.a8T,null,null,null,null,null,null,null,null,null)
D.foD=new A.y("Themes",null,B.pn,null,null,null,null,null,null,null,null,null)
D.fp5=new A.y("\ud83c\udfb2",null,B.v8,null,null,null,null,null,null,null,null,null)
D.fpa=new A.y("Delete this game?",null,B.iX,null,null,null,null,null,null,null,null,null)
D.fpg=new A.y("Add Item",null,B.ck,null,null,null,null,null,null,null,null,null)
D.feq=new A.F(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpG=new A.y("Debt receipt",null,D.feq,null,B.L,null,null,null,null,null,null,null)
D.aS9=new A.F(!0,B.al,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpY=new A.y("Person who owes",null,D.aS9,null,null,null,null,null,null,null,null,null)
D.fqV=new A.y("Notes",null,B.a8G,null,null,null,null,null,null,null,null,null)
D.frk=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fdl=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frn=new A.y("Share",null,D.fdl,null,null,null,null,null,null,null,null,null)
D.fsj=new A.y("Move your family trees",null,D.aSd,null,null,null,null,null,null,null,null,null)
D.fsW=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.ftx=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new A.y("SAVE",null,D.JH,null,null,null,null,null,null,null,null,null)
D.fux=new A.y("The round button is the right answer.",null,O.DM,null,null,null,null,null,null,null,null,null)
D.fuS=new A.y("Remove this book?",null,B.fK,null,null,null,null,null,null,null,null,null)
D.fjV=new A.F(!0,D.dK,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,P.awq,null,null,null)
D.fvn=new A.y("Fireside Stories",null,D.fjV,null,null,null,null,null,null,null,null,null)
D.aSF=new A.y("Download",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fw3=new A.y("What should the AI do?",null,B.df,null,null,null,null,null,null,null,null,null)
D.fxq=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fy9=new A.y("LET US LEARN FROM THESE",null,M.rZ,null,null,null,null,null,null,null,null,null)
D.feG=new A.F(!0,D.iJ,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyx=new A.y("Family Knowledge Test",null,D.feG,null,null,null,null,null,null,null,null,null)
D.fyz=new A.y("Ribbon bookmark",null,B.jh,null,null,null,null,null,null,null,null,null)
D.fll=new A.F(!0,B.b_,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz1=new A.y("NGMY.ORG",null,D.fll,null,B.L,null,null,null,null,null,null,null)
D.fAi=new A.y("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fhN=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB2=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fhN,null,B.L,null,null,null,null,null,null,null)
D.fCf=new A.y("Delete",null,B.TZ,null,null,null,null,null,null,null,null,null)
D.fCg=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fCm=new A.y("Thumbnail",null,B.pn,null,null,null,null,null,null,null,null,null)
D.fCY=new A.y("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fd0=new A.F(!0,D.nL,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDe=new A.y("CERTIFICATE",null,D.fd0,null,null,null,null,null,null,null,null,null)
D.fDo=new A.y("Your photos",null,B.pn,null,null,null,null,null,null,null,null,null)
D.fDD=new A.y("Create Project",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fE_=new A.y("\u2b50 stars",null,B.Ua,null,null,null,null,null,null,null,null,null)
D.fEc=new A.y("Design your cover",null,X.rX,null,null,null,null,null,null,null,null,null)
D.fEi=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fEl=new A.y("PICTURE",null,K.v6,null,null,null,null,null,null,null,null,null)
D.fEn=new A.y("\ud83c\udfaf",null,D.a8Y,null,null,null,null,null,null,null,null,null)
D.fEI=new A.y("Paid",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fEK=new A.y("You can undo it right after.",null,O.DM,null,null,null,null,null,null,null,null,null)
D.fFh=new A.y("Print",null,B.v3,null,null,null,null,null,null,null,null,null)
D.fFG=new A.y("Amount owed",null,D.aS9,null,null,null,null,null,null,null,null,null)
D.fFV=new A.y("Got it",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fGv=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fGy=new A.y("Add to budget",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fH_=new A.y("Debtor signature",null,B.a8G,null,null,null,null,null,null,null,null,null)
D.fH8=new A.y("Change icon",null,E.aRq,null,null,null,null,null,null,null,null,null)
D.fHV=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,M.rZ,null,null,null,null,null,null,null,null,null)
D.fIm=new A.y("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fIs=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.a8X,null,null,null,null,null,null,null,null,null)
D.fIQ=new A.y("Download",null,B.v3,null,null,null,null,null,null,null,null,null)
D.fIR=new A.y("The person who planted this tree has not made a game yet.",null,B.v7,null,null,null,null,null,null,null,null,null)
D.fIV=new A.y("Change",null,B.pn,null,null,null,null,null,null,null,null,null)
D.fJK=new A.y("Clear all",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fJN=new A.y("WHAT SHOULD IT CHANGE?",null,K.v6,null,null,null,null,null,null,null,null,null)
D.fKl=new A.y("COLOUR",null,K.v6,null,null,null,null,null,null,null,null,null)
D.fKz=new A.y("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fKC=new A.y("Create Tree",null,B.ck,null,null,null,null,null,null,null,null,null)
D.fLD=new A.y("Create Family Tree",null,B.eZ,null,null,null,null,null,null,null,null,null)
D.f8w=new A.F(!0,E.k3,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLS=new A.y("Write the first page myself",null,D.f8w,null,null,null,null,null,null,null,null,null)
D.fMp=new A.y("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fMv=new A.y("Create Project",null,E.aRT,null,null,null,null,null,null,null,null,null)
D.h8j=new C.abp(1,"header")
D.aa_=new C.abp(2,"projects")
D.h8k=new C.abp(3,"cashier")
D.aa0=new C.abp(4,"familyTree")
D.hle=new C.cyZ(0,"start")
D.hlf=new C.cz_(0,"start")
D.h8I=new C.Yq(null)
D.h9H=new C.YS(null)
D.duk=new A.bu(B.hX,[],A.ax("bu<n,FQ>"))
D.dcR=w([],x.U)
D.dcS=w([],x.M)
D.had=new C.bel(D.duk,D.dcR,D.dcS,0,0,null,null)
D.aWB=new C.ZI(0,"intro")
D.aWC=new C.ZI(1,"countdown")
D.aae=new C.ZI(2,"ask")
D.Vd=new C.ZI(3,"reveal")
D.aWD=new C.ZI(4,"end")
D.hcQ=new C.va(F.LX,D.mn,D.dK,F.mo,5,!1,!1,!1,0,null)
D.hcR=new C.va(F.LX,B.el,D.dK,B.bO,2,!0,!0,!1,2,D.dK)
D.hcS=new C.va(F.Yc,D.afW,D.dK,F.mo,4,!0,!1,!0,0,null)
D.hcT=new C.va(F.Yc,B.dD,D.dK,F.mo,3,!0,!1,!0,2,null)
D.hcU=new C.va(F.n8,D.mn,B.c,F.mo,0,!1,!1,!0,0,null)
D.hcV=new C.va(B.pS,B.aC,D.dK,B.bO,2,!0,!0,!1,2,B.dD)
D.hcW=new C.va(B.pS,D.tq,B.j8,F.mo,5,!1,!1,!0,3,null)
D.hcX=new C.va(B.pS,B.dD,D.dK,F.mo,0,!0,!1,!1,0,B.aC)
D.hcY=new C.va(F.LX,B.el,D.dK,B.bO,1,!1,!0,!1,1,null)
D.hcZ=new C.va(F.EQ,B.aE,B.aC,F.mo,4,!0,!1,!0,2,null)
D.hd_=new C.va(F.n8,B.aE,B.el,F.mo,3,!0,!1,!1,0,null)
D.hd0=new C.va(B.pS,B.dI,D.dK,B.bO,1,!1,!0,!1,1,null)
D.hd1=new C.va(F.EQ,D.af4,B.c,F.mo,5,!1,!1,!0,0,null)
D.hdF=new C.a_g(null)
D.hln=new C.aeK(0,"still")
D.VA=new C.aeK(1,"walk")
D.aay=new C.aeK(2,"pound")
D.aaz=new C.aeK(3,"drum")
D.hgS=new C.a0x(0,"greet")
D.aX4=new C.a0x(1,"teach")
D.aaA=new C.a0x(2,"ask")
D.hgT=new C.a0x(3,"feedback")
D.aX5=new C.a0x(4,"end")
D.aaM=new C.aJD(0,"projects")
D.aXt=new C.aJD(1,"cashier")
D.hiV=new C.aJD(2,"familyTree")})()};
(a=>{a["2Fn8TgVmHqavJjCbQpbT6qfYjdk="]=a.current})($__dart_deferred_initializers__);