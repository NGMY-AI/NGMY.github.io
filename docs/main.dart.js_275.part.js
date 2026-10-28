((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A_,G,F,E,M,A0,A1,R,A2,A3,N,A4,I,A5,A6,S,T,U,A7,A8,V,A9,Aa,W,Ab,Ac,Ad,L,Ae,X,Y,H,O,C={
bAQ(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bAQ=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v1(null,""),$async$bAQ)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.T(y.j)
t=A.mU(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dm(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.ds(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qB(t,a1,B.hj,E.Es),$async$bAQ)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Ps(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ac(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.T(l!=null&&A.Ke(l)?y.l:y.i)
for(j=J.a8(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cz
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a1b(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAQ,v)},
afy(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$afy=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.v1(null,""),$async$afy)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.T(y.j)
t=A.mU(b6)
s=x.S
r=A.da(c1,0,A.dJ(4,"count",s),A.S(c1).c)
q=F.a0Z(new A.J(r,new C.fqZ(),r.$ti.k("J<aj.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fqY(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$afy)
case 6:l=c5
k=F.Ps(l==null?"":l)
if(k==null)throw A.T("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.amK(s,D.dfI,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.T("There is no page to change.")
h=A.V(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dm(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$afy)
case 10:l=c5
k=l==null?null:F.Ps(l)
if(k==null)throw A.T(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d7(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.kS(a5,a2.k("kS<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gU(a5))
b0=J.a8(a9)
b1=A.aN(b0.h(a9,"index"))
i=b1==null?null:B.k.O(b1)
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
p=A.cD(new A.bc(h,s),new C.fr_(),s.k("H.E"),p)
p=F.a0Z(A.oZ(p,3,A.a3(p).k("H.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cy<1>")
b4=A.B(new A.cy(h,s),s.k("H.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a1b(s,b9),$async$afy)
case 13:b5=c5
for(s=J.a8(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.amK(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afy,v)},
heP(d,e,f){return A.c9(null,B.w.j(0.65),!1,null,new C.fA4(e,f),d,null,!0,!0,x.g2)},
amK:function amK(d,e,f){this.a=d
this.b=e
this.c=f},
fqZ:function fqZ(){},
fqY:function fqY(d){this.a=d},
fr_:function fr_(){},
fA4:function fA4(d,e){this.a=d
this.b=e},
byG(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$byG=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b8(b1,new C.fgs())){u=null
w=1
break}t=B.d.dd(b1,new C.fgt())
s=$.X()
r=new A.rP()
q=A.Gr(r,D.aKa)
p=A.L()
p.r=B.c.gp(0)
q.aX(D.aKa,p)
o=A.L()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bO
o.e=B.fy
n=new C.fgy(t)
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
s=$.X()
p=A.a([],x.v)
a3=new A.aQ(s.r,B.ap,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b5(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aN(a3,o)}else{p=A.a([],x.v)
a3=new A.aQ(s.r,B.ap,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b5(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ap(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bx(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aN(a3,o)}w=4
return A.b(r.q6().yQ(520,160),$async$byG)
case 4:w=3
return A.b(b3.hl(B.fS),$async$byG)
case 3:b0=b3
u=b0==null?null:J.fa(B.dE.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byG,v)},
foF(d){return C.hSV(d)},
hSV(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$foF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bdg()
n=d.x!=null&&d.yw(null).length===0
if(d.x!=null)t=n?D.yL:D.Hu
else t=d.gSM()?D.Hu:D.aFg
w=3
return A.b(C.byG(d.ax),$async$foF)
case 3:s=f
p.a=null
if(s!=null)p.a=A.alt(s)
r=A.a36(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aFg}else{p.c=C.wl(q,!0)
p.b=n?D.yL:D.Hu}r.a1O(A.fJY(new C.foH(p,d,new C.foI(),t,n,o),null,D.brk,B.vG))
u=r.jN(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$foF,v)},
fvi(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fvi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.foF(d),$async$fvi)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A3.FV(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fvi,v)},
fgs:function fgs(){},
fgt:function fgt(){},
fgy:function fgy(d){this.a=d},
foI:function foI(){},
foH:function foH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
foG:function foG(){},
fAw(d,e){var w=0,v=A.j(x.H)
var $async$fAw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,B.w.j(0.55),!0,null,new C.fAA(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fAw)
case 2:return A.h(null,v)}})
return A.i($async$fAw,v)},
bBj(d,e,f,g){return C.i_h(d,e,f,g)},
i_h(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bBj=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gam(e.split(",")):e
r=B.cB.aI(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.eMl)
w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.fAs(g,r,f),d,null,!0,!0,x.H),$async$bBj)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bBj,v)},
fAB(d,e){var w=0,v=A.j(x.H)
var $async$fAB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,null,!0,null,new C.fAE(new A.cs(null,x.J),e),d,null,!0,!0,x.H),$async$fAB)
case 2:return A.h(null,v)}})
return A.i($async$fAB,v)},
aWM:function aWM(d,e){this.c=d
this.a=e},
c_9:function c_9(){},
b8M:function b8M(d,e){this.b=d
this.a=e},
fAA:function fAA(d,e){this.a=d
this.b=e},
fAx:function fAx(d){this.a=d},
fAy:function fAy(d,e,f){this.a=d
this.b=e
this.c=f},
fAz:function fAz(d,e){this.a=d
this.b=e},
fAs:function fAs(d,e,f){this.a=d
this.b=e
this.c=f},
fAq:function fAq(d){this.a=d},
fAr:function fAr(d,e,f){this.a=d
this.b=e
this.c=f},
fAE:function fAE(d,e){this.a=d
this.b=e},
fAC:function fAC(d){this.a=d},
fAD:function fAD(d,e,f){this.a=d
this.b=e
this.c=f},
fjM(d,e){var w=0,v=A.j(x.y),u,t
var $async$fjM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0K(d),$async$fjM)
case 3:t=g
J.nd(t,new C.fjN(e))
u=A.agb(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fjM,v)},
fjN:function fjN(d){this.a=d},
amR:function amR(d,e,f){this.c=d
this.d=e
this.a=f},
aB7:function aB7(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dCx:function dCx(d,e){this.a=d
this.b=e},
dCi:function dCi(d,e){this.a=d
this.b=e},
dCl:function dCl(d,e,f){this.a=d
this.b=e
this.c=f},
dCk:function dCk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dCj:function dCj(d,e){this.a=d
this.b=e},
dCm:function dCm(d,e){this.a=d
this.b=e},
dCg:function dCg(){},
dCh:function dCh(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dCf:function dCf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dC0:function dC0(d){this.a=d},
dC1:function dC1(d,e,f){this.a=d
this.b=e
this.c=f},
dC2:function dC2(d,e){this.a=d
this.b=e},
dC_:function dC_(d){this.a=d},
dC7:function dC7(d,e){this.a=d
this.b=e},
dBZ:function dBZ(d){this.a=d},
dC8:function dC8(d,e,f){this.a=d
this.b=e
this.c=f},
dC9:function dC9(d,e,f){this.a=d
this.b=e
this.c=f},
dBY:function dBY(d,e){this.a=d
this.b=e},
dCa:function dCa(d,e,f){this.a=d
this.b=e
this.c=f},
dBX:function dBX(d,e){this.a=d
this.b=e},
dCb:function dCb(d,e){this.a=d
this.b=e},
dBW:function dBW(d){this.a=d},
dCc:function dCc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dBU:function dBU(){},
dBO:function dBO(d){this.a=d},
dBP:function dBP(d){this.a=d},
dBV:function dBV(d,e){this.a=d
this.b=e},
dCd:function dCd(d,e){this.a=d
this.b=e},
dBT:function dBT(d){this.a=d},
dCe:function dCe(d){this.a=d},
dBS:function dBS(){},
dC3:function dC3(d,e){this.a=d
this.b=e},
dBR:function dBR(d){this.a=d},
dC4:function dC4(d,e,f){this.a=d
this.b=e
this.c=f},
dBQ:function dBQ(d,e){this.a=d
this.b=e},
dBN:function dBN(d,e){this.a=d
this.b=e},
dC5:function dC5(d){this.a=d},
dC6:function dC6(d,e,f){this.a=d
this.b=e
this.c=f},
dCA:function dCA(){},
dCB:function dCB(d,e){this.a=d
this.b=e},
dCy:function dCy(d){this.a=d},
dCz:function dCz(d){this.a=d},
dCu:function dCu(d,e){this.a=d
this.b=e},
dCv:function dCv(d){this.a=d},
dCn:function dCn(d,e,f){this.a=d
this.b=e
this.c=f},
dCo:function dCo(d,e,f){this.a=d
this.b=e
this.c=f},
dCp:function dCp(d,e,f){this.a=d
this.b=e
this.c=f},
dCq:function dCq(d,e,f){this.a=d
this.b=e
this.c=f},
dCr:function dCr(d,e,f){this.a=d
this.b=e
this.c=f},
dCs:function dCs(d,e,f){this.a=d
this.b=e
this.c=f},
dCt:function dCt(d,e,f){this.a=d
this.b=e
this.c=f},
dCC:function dCC(){},
dCD:function dCD(){},
dCE:function dCE(){},
dCF:function dCF(d){this.a=d},
dCw:function dCw(d,e){this.a=d
this.b=e},
hb0(d){return B.d.dN(D.a0t,new C.fkh(d),new C.fki())},
tX:function tX(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fkh:function fkh(d){this.a=d},
fki:function fki(){},
ajc:function ajc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aSB:function aSB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RG:function RG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bck:function bck(){this.d=$
this.c=this.a=null},
d2p:function d2p(d,e){this.a=d
this.b=e},
d2n:function d2n(d,e){this.a=d
this.b=e},
d2o:function d2o(){},
d2q:function d2q(d,e){this.a=d
this.b=e},
fWX(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.n_(t,w,v,u==null?new A.R(Date.now(),0,!1):u)},
K_(d,e){return C.hRy(d,e)},
hRy(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$K_=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$K_)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aT(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.R.aG(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d7(p,x.f)
o=A.cD(o,new C.fmf(),o.$ti.k("H.E"),x.B)
n=A.a3(o).k("a2<H.E>")
o=A.B(new A.a2(o,new C.fmg(),n),n.k("H.E"))
B.d.b1(o,new C.fmh())
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
return A.i($async$K_,v)},
Am(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Am=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ay(),$async$Am)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fza(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.ar("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$Am)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Am,v)},
aOO(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aOO=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.K_(d,e),$async$aOO)
case 2:u=h
t=J.cE(u)
s=t.be(u,new C.fHd(f))
if(s===-1)t.cn(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Am(d,e,u),$async$aOO)
case 3:return A.h(null,v)}})
return A.i($async$aOO,v)},
bz7(d,e,f){var w=0,v=A.j(x.H),u
var $async$bz7=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.K_(d,e),$async$bz7)
case 2:u=h
J.nd(u,new C.fjE(f))
w=3
return A.b(C.Am(d,e,u),$async$bz7)
case 3:return A.h(null,v)}})
return A.i($async$bz7,v)},
bzm(d,e){return C.hRx(d,e)},
hRx(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bzm=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bzm)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.LM
w=1
break}p=B.R.aG(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aN(o.h(0,"emblem"))
k=k==null?null:B.k.O(k)
if(k==null)k=0
if(D.BK.ah(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aN(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a1X,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a1q,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a1l,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cMH,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.GR(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.LM
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.LM
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bzm,v)},
Qx(d,e,f){return C.hZO(d,e,f)},
hZO(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Qx=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ay(),$async$Qx)
case 7:r=h
w=8
return A.b(r.ar("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ad(),null)),$async$Qx)
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
return A.i($async$Qx,v)},
Q1(d,e){return C.hRz(d,e)},
hRz(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Q1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$Q1)
case 7:r=g
q=r.rJ("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.K_(d,e),$async$Q1)
case 8:if(!j.cw(g)){n=B.a.i(d.toLowerCase())
m=J.li(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Q1)
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
return A.i($async$Q1,v)},
aeS(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aeS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Q1(d,e),$async$aeS)
case 3:s=g
r=J.a8(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.J(s,t)
w=5
return A.b(A.ay(),$async$aeS)
case 5:w=4
return A.b(g.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aeS)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aeS,v)},
a1o(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a1o=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Q1(d,e),$async$a1o)
case 2:s=h
J.hJ(s,f)
w=3
return A.b(A.ay(),$async$a1o)
case 3:u=h
w=4
return A.b(u.ar("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a1o)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1o)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1o)
case 6:return A.h(null,v)}})
return A.i($async$a1o,v)},
n_:function n_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmf:function fmf(){},
fmg:function fmg(){},
fmh:function fmh(){},
fza:function fza(){},
fHd:function fHd(d){this.a=d},
fjE:function fjE(d){this.a=d},
GR:function GR(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bLj:function bLj(d){this.a=d},
i_6(d,e,f,g,h,i,j){return A.a5(d,!1).ci(A.em(new C.fzJ(j,i,f,e,h,g),!0,null,x.H))},
PX(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$PX=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Q1(h,g),$async$PX)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ac(k)>=6){d.I(x.q).f.R(D.aMc)
u=!1
w=1
break}w=4
return A.b(C.heP(d,f,e),$async$PX)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aeS(h,g),$async$PX)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.n_(""+(q+n),l,B.a.i(m.b),new A.R(Date.now(),0,!1)))}w=6
return A.b(C.Am(h,r,p),$async$PX)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Qx(h,r,new C.GR("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$PX)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$PX,v)},
fzJ:function fzJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Yc:function Yc(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ay9:function ay9(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d34:function d34(d){this.a=d},
d33:function d33(d,e){this.a=d
this.b=e},
d2T:function d2T(d,e){this.a=d
this.b=e},
d2Q:function d2Q(d,e){this.a=d
this.b=e},
d2r:function d2r(d){this.a=d},
d2s:function d2s(d,e){this.a=d
this.b=e},
d2U:function d2U(d){this.a=d},
d2A:function d2A(d){this.a=d},
d2y:function d2y(d){this.a=d},
d2z:function d2z(d){this.a=d},
d2B:function d2B(d){this.a=d},
d2R:function d2R(d){this.a=d},
d2S:function d2S(){},
d2w:function d2w(d){this.a=d},
d2x:function d2x(d,e){this.a=d
this.b=e},
d2C:function d2C(d){this.a=d},
d2D:function d2D(d,e){this.a=d
this.b=e},
d32:function d32(d){this.a=d},
d31:function d31(d,e){this.a=d
this.b=e},
d30:function d30(d){this.a=d},
d2N:function d2N(d){this.a=d},
d2M:function d2M(d){this.a=d},
d2O:function d2O(d){this.a=d},
d2t:function d2t(d,e){this.a=d
this.b=e},
d2P:function d2P(d,e){this.a=d
this.b=e},
d2G:function d2G(d){this.a=d},
d2H:function d2H(d){this.a=d},
d2F:function d2F(){},
d2I:function d2I(d){this.a=d},
d2J:function d2J(d){this.a=d},
d2K:function d2K(d,e){this.a=d
this.b=e},
d2L:function d2L(d,e,f){this.a=d
this.b=e
this.c=f},
d2E:function d2E(d,e){this.a=d
this.b=e},
d2W:function d2W(d){this.a=d},
d2V:function d2V(){},
d2X:function d2X(d){this.a=d},
d2Y:function d2Y(d){this.a=d},
d2Z:function d2Z(d){this.a=d},
d3_:function d3_(d,e){this.a=d
this.b=e},
d2u:function d2u(d){this.a=d},
d2v:function d2v(d){this.a=d},
Yg:function Yg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcF:function bcF(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d4P:function d4P(d){this.a=d},
d4Q:function d4Q(d){this.a=d},
d4O:function d4O(d){this.a=d},
d4R:function d4R(d){this.a=d},
d4N:function d4N(d){this.a=d},
d4S:function d4S(d){this.a=d},
d4M:function d4M(d){this.a=d},
d4T:function d4T(d,e){this.a=d
this.b=e},
d4L:function d4L(d,e){this.a=d
this.b=e},
d4U:function d4U(d,e){this.a=d
this.b=e},
Ye:function Ye(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
adm:function adm(d,e,f){this.a=d
this.b=e
this.c=f},
aya:function aya(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d3j:function d3j(d,e){this.a=d
this.b=e},
d3i:function d3i(d,e){this.a=d
this.b=e},
d3n:function d3n(d){this.a=d},
d3m:function d3m(d,e){this.a=d
this.b=e},
d3k:function d3k(d){this.a=d},
d3l:function d3l(d){this.a=d},
d3o:function d3o(d){this.a=d},
d3p:function d3p(d){this.a=d},
d3h:function d3h(d,e){this.a=d
this.b=e},
d3g:function d3g(d,e){this.a=d
this.b=e},
J6:function J6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xv:function Xv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cCn:function cCn(d){this.a=d},
cCo:function cCo(){},
cCp:function cCp(d){this.a=d},
b9X:function b9X(d,e,f){this.b=d
this.c=e
this.a=f},
b9O:function b9O(d,e){this.b=d
this.a=e},
tY:function tY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XN:function XN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9V:function b9V(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cVP:function cVP(d,e,f){this.a=d
this.b=e
this.c=f},
cVO:function cVO(d,e){this.a=d
this.b=e},
cWd:function cWd(d){this.a=d},
cW0:function cW0(){},
cWe:function cWe(d){this.a=d},
cW_:function cW_(){},
cWf:function cWf(d,e){this.a=d
this.b=e},
cVZ:function cVZ(d,e){this.a=d
this.b=e},
cWg:function cWg(d,e){this.a=d
this.b=e},
cVY:function cVY(d,e){this.a=d
this.b=e},
cWh:function cWh(d){this.a=d},
cVX:function cVX(){},
cWi:function cWi(d,e){this.a=d
this.b=e},
cVW:function cVW(d,e){this.a=d
this.b=e},
cWj:function cWj(d){this.a=d},
cW8:function cW8(d,e){this.a=d
this.b=e},
cWk:function cWk(d){this.a=d},
cWl:function cWl(d){this.a=d},
cWn:function cWn(d){this.a=d},
cWo:function cWo(d){this.a=d},
cW7:function cW7(d,e){this.a=d
this.b=e},
cWp:function cWp(d,e){this.a=d
this.b=e},
aFb:function aFb(d){this.a=d},
bf7:function bf7(d){this.a=d},
b8a:function b8a(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hQx(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.agn(a6),a5=a4.length
if(a5===0)return""
w=A.V(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bx(new A.R(Date.now(),0,!1))
s=new C.fkl(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.S(a4),p=q.k("a2<1>"),q=q.k("cQ<1,n>"),o=q.k("H.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xl)m.push(l===D.Yv?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.jS(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jS(h,a2,a2)-A.jS(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.ah(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.a2(a4,new C.fkj(u,f),p),new C.fkk(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hQy(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.agn(a0),d=e.length
if(d===0)return""
w=x.N
v=A.V(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fkq(v,e)
q=new C.fko(v)
p=A.V(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.K)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.K)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.K)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.ah(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.ah(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.d9(new A.bc(p,d),d.k("H.E"))
n=A.B(d,A.a3(d).k("cl.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaj(e),k=new A.hn(l,new C.fkp(p,m));k.C();t=f){j=l.gU(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ah(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hCk(d,e,f,g){var w,v,u=C.hQz(d,e)
if(u<=0||f.length<=u)return new A.acX(!1,D.Bz,f)
if(g.t(0,e.a))return new A.acX(!1,D.Bz,f)
w=A.S(f).c
v=A.da(f,0,A.dJ(u,"count",x.S),w).dE(0)
return new A.acX(!0,A.da(f,u,null,w).dE(0),v)},
hCl(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.agn(d3),d2=d1.length
if(d2===0)return D.fDt
w=x.N
v=A.V(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.cg(0,t.a,new C.d3w(t))}s=new C.d3N(v)
d2=x.h
r=A.V(w,d2)
q=new C.d3F(r)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d3E(r)
l=A.V(w,x.do)
for(p=new A.dt(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cf(l.cg(0,k,new C.d3x()),o)}h=new C.d3D(s)
g=new C.d3C(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a2<H.E>")
f=A.B(new A.a2(new A.bc(v,p),new C.d3y(h),o),o.k("H.E"))
e=f.length===0?new A.bc(v,p).gL(0):B.d.gL(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
a0=g.$2(t.a,A.aX(w))
if(a0>d){d=a0
e=t}}a1=A.aX(w)
p=x.S
a2=A.V(w,p)
a3=A.V(w,w)
a4=A.V(w,d2)
d2=x.gR
a5=A.V(w,d2)
a6=A.V(w,x.d9)
a7=A.V(w,d2)
a8=A.a([],x.s)
a9=new C.d3L(new C.d3H(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.V(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dt(v,v.r,v.e),j=a2.gaiW(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.ah(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qZ(J.dH(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.V(w,x.cc)
b5=A.a([],x.M)
b6=A.V(w,d2)
b7=new C.d3v(a2,new C.d3M(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.K)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("cy<1>")
d2=A.B(new A.cy(b4,d2),d2.k("H.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.F5(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Jf(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cy<1>")
d2=A.B(new A.cy(b6,d2),d2.k("H.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bH(0,new C.d3z(c6,b4))
for(d2=new A.cJ(a4,a4.$ti.k("cJ<1,2>")).gaj(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gU(j)
if(b6.ah(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gaj(b5),i=new A.hn(j,new C.d3A(c8));i.C();)o.push(j.gU(0).b)
if(o.length===0)continue
B.d.b1(o,new C.d3B())
c6.push(new C.aHg(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bcp(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hay(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(d)
return w==null?null:w.b[1]},
h4Y(d,e,f,g,h,i,j,k,l,m,n){return new C.YQ(k,f,j,e,l,n,m,d,g,h,i,null)},
aA8(d,e,f,g,h,i,j){return new C.bg3(i,d,e,f,j,h,g,null)},
anX:function anX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBI:function aBI(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQ6:function dQ6(d){this.a=d},
dQ5:function dQ5(d){this.a=d},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQa:function dQa(d){this.a=d},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
dQ7:function dQ7(d){this.a=d},
dQc:function dQc(d){this.a=d},
dQb:function dQb(d,e){this.a=d
this.b=e},
anR:function anR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBF:function aBF(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dPx:function dPx(d){this.a=d},
dPv:function dPv(d){this.a=d},
dPw:function dPw(d){this.a=d},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPs:function dPs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dP0:function dP0(d){this.a=d},
dP1:function dP1(d,e){this.a=d
this.b=e},
dPf:function dPf(d){this.a=d},
dPd:function dPd(d){this.a=d},
dPe:function dPe(d,e){this.a=d
this.b=e},
dPg:function dPg(d){this.a=d},
dPh:function dPh(d,e){this.a=d
this.b=e},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPp:function dPp(d,e){this.a=d
this.b=e},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPj:function dPj(d){this.a=d},
dPl:function dPl(d,e){this.a=d
this.b=e},
dPi:function dPi(d){this.a=d},
dPm:function dPm(d){this.a=d},
dPn:function dPn(d){this.a=d},
dPq:function dPq(d,e){this.a=d
this.b=e},
dOP:function dOP(d,e){this.a=d
this.b=e},
dOQ:function dOQ(d,e){this.a=d
this.b=e},
dPA:function dPA(d,e,f){this.a=d
this.b=e
this.c=f},
dPu:function dPu(d,e,f){this.a=d
this.b=e
this.c=f},
dPt:function dPt(d){this.a=d},
dOR:function dOR(d){this.a=d},
dOS:function dOS(d){this.a=d},
dOT:function dOT(){},
dOU:function dOU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOY:function dOY(d,e){this.a=d
this.b=e},
dOX:function dOX(d,e){this.a=d
this.b=e},
dOW:function dOW(d){this.a=d},
dOZ:function dOZ(d,e){this.a=d
this.b=e},
dOV:function dOV(d){this.a=d},
dPz:function dPz(d){this.a=d},
dPa:function dPa(){},
dPb:function dPb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dP9:function dP9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dP5:function dP5(d,e,f){this.a=d
this.b=e
this.c=f},
dP4:function dP4(d,e,f){this.a=d
this.b=e
this.c=f},
dP2:function dP2(d,e){this.a=d
this.b=e},
dP6:function dP6(d){this.a=d},
dP7:function dP7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dP3:function dP3(d,e){this.a=d
this.b=e},
dP8:function dP8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPc:function dPc(d,e){this.a=d
this.b=e},
dPH:function dPH(){},
dPI:function dPI(d,e){this.a=d
this.b=e},
dPJ:function dPJ(d){this.a=d},
dPK:function dPK(d,e){this.a=d
this.b=e},
dPD:function dPD(d){this.a=d},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPG:function dPG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dPL:function dPL(d){this.a=d},
dPC:function dPC(d){this.a=d},
dP_:function dP_(d){this.a=d},
bcn:function bcn(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d3t:function d3t(d){this.a=d},
d3s:function d3s(d,e){this.a=d
this.b=e},
d3u:function d3u(d){this.a=d},
d3r:function d3r(d,e){this.a=d
this.b=e},
fkl:function fkl(d,e){this.a=d
this.b=e},
fkm:function fkm(d){this.a=d},
fkn:function fkn(){},
fkj:function fkj(d,e){this.a=d
this.b=e},
fkk:function fkk(){},
fkq:function fkq(d,e){this.a=d
this.b=e},
fkr:function fkr(d){this.a=d},
fks:function fks(){},
fko:function fko(d){this.a=d},
fkp:function fkp(d,e){this.a=d
this.b=e},
Jf:function Jf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
F5:function F5(d,e){this.a=d
this.b=e},
bcp:function bcp(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d3w:function d3w(d){this.a=d},
d3N:function d3N(d){this.a=d},
d3F:function d3F(d){this.a=d},
d3G:function d3G(){},
d3E:function d3E(d){this.a=d},
d3x:function d3x(){},
d3D:function d3D(d){this.a=d},
d3C:function d3C(d,e){this.a=d
this.b=e},
d3y:function d3y(d){this.a=d},
d3H:function d3H(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d3I:function d3I(d){this.a=d},
d3J:function d3J(d){this.a=d},
d3K:function d3K(){},
d3L:function d3L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3M:function d3M(){},
d3v:function d3v(d,e,f,g,h,i,j,k,l,m){var _=this
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
d3z:function d3z(d,e){this.a=d
this.b=e},
d3A:function d3A(d){this.a=d},
d3B:function d3B(){},
aHg:function aHg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcq:function bcq(d,e){this.b=d
this.a=e},
d3O:function d3O(){},
d3P:function d3P(d){this.a=d},
d3Q:function d3Q(d){this.a=d},
d3R:function d3R(){},
bg4:function bg4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbv:function bbv(d,e){this.b=d
this.a=e},
btC:function btC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f3g:function f3g(d){this.a=d},
bjp:function bjp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eFA:function eFA(d){this.a=d},
eFz:function eFz(d,e){this.a=d
this.b=e},
YQ:function YQ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aA6:function aA6(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
djE:function djE(d,e){this.a=d
this.b=e},
djD:function djD(d){this.a=d},
djB:function djB(d){this.a=d},
djC:function djC(d){this.a=d},
djN:function djN(d){this.a=d},
djO:function djO(d){this.a=d},
djM:function djM(d,e){this.a=d
this.b=e},
djP:function djP(){},
djS:function djS(d){this.a=d},
djL:function djL(d,e){this.a=d
this.b=e},
djR:function djR(){},
djT:function djT(d){this.a=d},
djK:function djK(d,e){this.a=d
this.b=e},
djU:function djU(d){this.a=d},
djJ:function djJ(d){this.a=d},
djV:function djV(d){this.a=d},
djI:function djI(d){this.a=d},
djW:function djW(d){this.a=d},
djH:function djH(d){this.a=d},
djX:function djX(d){this.a=d},
djG:function djG(d){this.a=d},
djY:function djY(d){this.a=d},
djF:function djF(d,e){this.a=d
this.b=e},
djQ:function djQ(d){this.a=d},
abP:function abP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg3:function bg3(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
abO:function abO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bg2:function bg2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
djZ:function djZ(d){this.a=d},
dk_:function dk_(d,e){this.a=d
this.b=e},
aA7:function aA7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGj:function aGj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abQ:function abQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dk8:function dk8(d){this.a=d},
J2:function J2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h_R(d){var w=d.S,v=x.N
return w.iN(w,new C.c5H(),v,v)},
htT(d){var w=d.bC
if(w>=0)return w
return 5},
h_T(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h_R(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h_S(d,e){var w=C.h_T(d,e)
if(w!=null&&w.c9(new A.R(Date.now(),0,!1)))return!0
return!1},
htU(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.h_R(d),w,w)
u=C.h_T(d,e)
t=u!=null&&u.c9(new A.R(Date.now(),0,!1))?u:new A.R(Date.now(),0,!1)
v.n(0,s,t.bN(A.dB(30,0,0,0,0,0).a).a5().ac())
d.S=v},
aYb(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aYb=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.l7(t,B.Hh),$async$aYb)
case 3:if(l){u=!0
w=1
break}u=A.kL(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Hh,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYb,v)},
c5H:function c5H(){},
htR(){var w,v=$.pd(),u=J.e0(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fT(u)},
HI(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$HI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$HI)
case 3:if(!e){u=A.V(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_family_tree_backup_codes_v1",null,!1,B.bG),$async$HI)
case 8:r=e
if(r==null){u=A.V(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a9(m)
$.am.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.V(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$HI,v)},
a6_(d){return C.htS(d)},
htS(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$a6_)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hz("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.R(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$a6_)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a9(p)
$.am.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a6_,v)},
c5G(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c5G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.HI(),$async$c5G)
case 3:t=m.jp(f),t=t.gaj(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gU(t)
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
return A.i($async$c5G,v)},
My(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$My=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c5G(d),$async$My)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.HI(),$async$My)
case 6:s=f
r=J.a8(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dV(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.R(Date.now(),0,!1).a5().ac())
r.n(s,t,o)
w=9
return A.b(C.a6_(s),$async$My)
case 9:case 8:u=t
w=1
break
case 5:n=C.htR()
w=10
return A.b(C.HI(),$async$My)
case 10:s=f
J.aG(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.R(Date.now(),0,!1).a5().ac(),"updatedAt",new A.R(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=11
return A.b(C.a6_(s),$async$My)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$My,v)},
aYa(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aYa=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.HI(),$async$aYa)
case 3:t=f
for(s=J.dj(t),r=s.gdL(t),r=r.dE(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6_(t),$async$aYa)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aYa,v)},
a60(d,e,f){var w=0,v=A.j(x.H),u
var $async$a60=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.anW(d,e),$async$a60)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.My(d),$async$a60)
case 7:w=4
break
case 5:w=8
return A.b(C.aYa(d),$async$a60)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a60,v)},
anQ(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$anQ=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.anW(f,e),$async$anQ)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c0(),$async$anQ)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.HI(),$async$anQ)
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
return A.i($async$anQ,v)},
aY9(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aY9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c0(),$async$aY9)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.HI(),$async$aY9)
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
return A.i($async$aY9,v)},
htV(){var w,v=$.pd(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fT(u)},
anT(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$anT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$anT)
case 3:if(!g){u=null
w=1
break}t=C.htV()
w=4
return A.b(A.U_(),$async$anT)
case 4:s=g
r=B.dH.aI(B.R.ao(d.eJ(),null))
r=B.cS.gcu().aI(r)
q=e?999:2
J.aG(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.R(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(A.a61(s),$async$anT)
case 5:p=e?999:2
u=new A.a__("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anT,v)},
anS(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$anS=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.U_(),$async$anS)
case 3:p=a0
o=J.a8(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a8(n)
l=A.aN(m.h(n,"usesRemaining"))
k=l==null?null:B.k.O(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aY9(J.k(l==null?"":l),j),$async$anS)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ac(t)===0){u=null
w=1
break}s=null
try{r=B.c4.c7(0,B.cB.aI(t))
s=C.h_U(r)}catch(f){q=A.a9(f)
$.am.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dV(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.R(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=5
return A.b(A.a61(p),$async$anS)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anS,v)},
h_U(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.htX(A.a1(w,x.N,x.z))
return u}catch(t){v=A.a9(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fL0(d){var w=0,v=A.j(x.m),u,t,s
var $async$fL0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.anS(t[1])
w=1
break}u=null
w=1
break}u=C.h_U(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fL0,v)},
htX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d7(v,x.f)
u=A.cD(u,new C.c5J(),u.$ti.k("H.E"),x.k)
t=A.a3(u).k("a2<H.E>")
s=A.B(new A.a2(u,new C.c5K(),t),t.k("H.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.R(Date.now(),0,!1)
q=A.V(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jp(p),t=t.gaj(t),o=x.B;t.C();){n=t.gU(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d7(l,u)
n=A.cD(n,new C.c5L(),n.$ti.k("H.E"),o)
k=A.a3(n).k("a2<H.E>")
j=A.B(new A.a2(n,new C.c5M(),k),k.k("H.E"))
if(j.length!==0)q.n(0,m,j)}return new C.anU(h,w,s,r,q)},
anW(d,e){var w=0,v=A.j(x.y),u,t
var $async$anW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Mq(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Ab(d),$async$anW)
case 3:u=t.cw(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anW,v)},
c5S(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c5S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Ab(d),$async$c5S)
case 3:t=s.b6(f,new C.c5T(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b1(t,new C.c5U())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c5S,v)},
U0(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$U0=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.anW(e,d),$async$U0)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.My(e),$async$U0)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Ab(e),$async$U0)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.c5Q(g))
r=A.B(t,t.$ti.k("H.E"))}t=J.a8(r)
if(t.gal(r)){u=null
w=1
break}t=t.dt(r,new C.c5R(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.V(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.K_(e,o),$async$U0)
case 14:n=i
if(J.cw(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.anU(s,B.a.i(e.toLowerCase()),r,new A.R(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$U0,v)},
aYe(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aYe=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.U0(d,e,f,g),$async$aYe)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gL(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.FL(A.Ja(q.eJ(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYe,v)},
aYd(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aYd=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.U0(d,e,f,g),$async$aYd)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.anT(r,f),$async$aYd)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aEk(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aYd,v)},
U1(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$U1=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fL0(a0),$async$U1)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.anQ(g.a,d,e,f,s,r),$async$U1)
case 6:if(!a2){if(r)throw A.T(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.T(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.byY(e,j),$async$U1)
case 12:case 11:w=13
return A.b(C.ag9(e,j,s),$async$U1)
case 13:h=n.h(0,i)
w=h!=null&&J.cw(h)?14:15
break
case 14:w=16
return A.b(C.Am(e,i,h),$async$U1)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bmV(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$U1,v)},
anU:function anU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c5O:function c5O(){},
c5P:function c5P(){},
c5N:function c5N(){},
c5J:function c5J(){},
c5K:function c5K(){},
c5L:function c5L(){},
c5M:function c5M(){},
c5T:function c5T(){},
c5U:function c5U(){},
c5Q:function c5Q(d){this.a=d},
c5R:function c5R(d){this.a=d},
fTf(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fe(null,x.H)
return A.ht(d,new C.anV(w,e,g,i,f,h,null),!0,null,x.H)},
d3q(d,e,f,g,h,i,j,k){return new C.bcm(i,e,k,j,g,f,h,d,null)},
anV:function anV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBH:function aBH(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dPU:function dPU(d){this.a=d},
dPV:function dPV(d,e,f){this.a=d
this.b=e
this.c=f},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dQ_:function dQ_(d){this.a=d},
dPR:function dPR(d){this.a=d},
dPS:function dPS(d,e){this.a=d
this.b=e},
dPT:function dPT(d,e){this.a=d
this.b=e},
dPY:function dPY(d){this.a=d},
dPX:function dPX(d,e){this.a=d
this.b=e},
dPW:function dPW(){},
dQ1:function dQ1(d){this.a=d},
dQ2:function dQ2(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
d3S:function d3S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bco:function bco(d,e,f){this.d=d
this.e=e
this.a=f},
ab6:function ab6(d,e,f){this.c=d
this.d=e
this.a=f},
bcm:function bcm(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bcr:function bcr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Za:function Za(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBG:function aBG(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dPM:function dPM(d,e){this.a=d
this.b=e},
dPN:function dPN(d){this.a=d},
dPO:function dPO(d){this.a=d},
dPP:function dPP(d){this.a=d},
dPQ:function dPQ(d){this.a=d},
Zb:function Zb(d){this.a=d},
bhw:function bhw(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dQ3:function dQ3(d,e){this.a=d
this.b=e},
aWL(d,e){return new C.aWK(d,e,null)},
aWK:function aWK(d,e,f){this.c=d
this.d=e
this.a=f},
hT_(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b_(d,11)},
i_g(d){return A.bZ(B.K,null,new C.fAb(new C.tt(A.M(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
h1M(d,e){return new C.aqR(e,d,null)},
aOv(d,e,f,g,h,i,j){var w=C.hT_(i)
if(w!=null)return A.bv(e,new A.a6(j,f,new C.a52(w,!0,null),null),B.aq)
return K.aNR(e,B.bQ,f,g,h,i,j)},
lr:function lr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a52:function a52(d,e,f){this.c=d
this.d=e
this.a=f},
bhd:function bhd(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b2$=e
_.c=_.a=null},
dBF:function dBF(d){this.a=d},
dBG:function dBG(){},
dBH:function dBH(d,e){this.a=d
this.b=e},
bhc:function bhc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fAb:function fAb(d){this.a=d},
fAa:function fAa(d,e){this.a=d
this.b=e},
fA9:function fA9(d,e){this.a=d
this.b=e},
fA8:function fA8(d,e){this.a=d
this.b=e},
aqR:function aqR(d,e,f){this.c=d
this.d=e
this.a=f},
cdl:function cdl(d,e){this.a=d
this.b=e},
aJC:function aJC(){},
i_1(d){var w=null
return A.c9(w,w,!0,w,new C.fzy(),d,w,!0,!0,x.e2)},
i0c(d,e,f,g,h){var w=null
return A.c9(w,w,!0,w,new C.fH_(h,g,f,e),d,w,!0,!0,x.N)},
i_3(d,e){var w=null
return A.c9(w,w,!0,w,new C.fzD(e),d,w,!0,!0,x.dY)},
i_2(d){var w=null
return A.c9(w,w,!0,w,new C.fzC(),d,w,!0,!0,x.c5)},
aRm:function aRm(d,e){this.a=d
this.b=e},
aRl:function aRl(d){this.a=d},
aPr:function aPr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzy:function fzy(){},
fH_:function fH_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzD:function fzD(d){this.a=d},
fzC:function fzC(){},
XP:function XP(d,e){this.c=d
this.a=e},
awW:function awW(){var _=this
_.d=$
_.c=_.a=_.e=null},
cWB:function cWB(d){this.a=d},
cWC:function cWC(d){this.a=d},
cWA:function cWA(d,e){this.a=d
this.b=e},
cWD:function cWD(d){this.a=d},
cWE:function cWE(d){this.a=d},
XO:function XO(d){this.a=d},
awV:function awV(){this.d=$
this.c=this.a=null},
cWx:function cWx(d){this.a=d},
cWy:function cWy(d){this.a=d},
cWz:function cWz(d){this.a=d},
Xm:function Xm(d){this.a=d},
avF:function avF(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cua:function cua(){},
cug:function cug(d){this.a=d},
cuh:function cuh(d){this.a=d},
cui:function cui(d){this.a=d},
cuf:function cuf(){},
cuj:function cuj(d){this.a=d},
cuk:function cuk(d){this.a=d},
cue:function cue(){},
cul:function cul(d,e){this.a=d
this.b=e},
cud:function cud(d,e){this.a=d
this.b=e},
cub:function cub(d,e){this.a=d
this.b=e},
cum:function cum(d){this.a=d},
cuc:function cuc(){},
cun:function cun(d){this.a=d},
a_T:function a_T(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
btu:function btu(){this.d=$
this.c=this.a=null},
f2J:function f2J(d,e){this.a=d
this.b=e},
f2K:function f2K(d){this.a=d},
f2L:function f2L(d,e){this.a=d
this.b=e},
aa9:function aa9(d,e){this.a=d
this.b=e},
ET:function ET(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bts:function bts(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f2H:function f2H(d,e){this.a=d
this.b=e},
avy:function avy(d,e){this.c=d
this.a=e},
btt:function btt(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f2I:function f2I(d){this.a=d},
btr:function btr(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aLL:function aLL(){},
aLM:function aLM(){},
bAV(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bw(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.os(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fyj(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dp(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dp(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dp(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dp(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.WM(A.dp(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aO7(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aO7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hU().kT(85,1280,B.eF),$async$aO7)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fd(),$async$aO7)
case 8:r=e
if(J.ac(r)===0){u=null
w=1
break}q=C.h1L()
w=9
return A.b(C.cdk(q,r),$async$aO7)
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
o=A.a9(l)
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
return A.i($async$aO7,v)},
aOt(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aOt=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cdh(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gam(g.split(",")):g
p=B.cB.aI(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.X().KN(p,!0,null,i).cM(0,B.fP),$async$aOt)
case 9:n=a1
w=10
return A.b(n.m5(),$async$aOt)
case 10:m=a1
w=11
return A.b(J.aPc(m).hl(B.fS),$async$aOt)
case 11:l=a1
J.aPc(m).q()
if(l==null){w=8
break}i=J.fa(B.dE.gaP(l))
k="data:image/png;base64,"+B.cS.gcu().aI(i)
if(J.ac(k)<=r){u=k
w=1
break}o=B.k.V(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a9(f)
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
return A.i($async$aOt,v)},
fyj:function fyj(){},
tt:function tt(d){this.a=d},
aqQ:function aqQ(d,e,f){this.c=d
this.d=e
this.a=f},
aDc:function aDc(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eCK:function eCK(d,e){this.a=d
this.b=e},
eCB:function eCB(d){this.a=d},
eCC:function eCC(d){this.a=d},
eCI:function eCI(d,e){this.a=d
this.b=e},
eCH:function eCH(d,e){this.a=d
this.b=e},
eCE:function eCE(d,e){this.a=d
this.b=e},
eCD:function eCD(d,e){this.a=d
this.b=e},
eCF:function eCF(d){this.a=d},
eCG:function eCG(d,e){this.a=d
this.b=e},
eCJ:function eCJ(d,e){this.a=d
this.b=e},
eCw:function eCw(d,e){this.a=d
this.b=e},
eCA:function eCA(d){this.a=d},
eCz:function eCz(d,e){this.a=d
this.b=e},
eCy:function eCy(d){this.a=d},
eCL:function eCL(d,e){this.a=d
this.b=e},
eCM:function eCM(d,e){this.a=d
this.b=e},
eCx:function eCx(d,e){this.a=d
this.b=e},
hek(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.R(Date.now(),0,!1).a5().ac(),"project",v],x.N,x.z)},
fyk(d,e,f){var w=0,v=A.j(x.N),u
var $async$fyk=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hek(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fyk,v)},
bAX(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bAX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fyk(!0,d,e),$async$bAX)
case 4:w=3
return A.b(r.aqO(g,d,e.a),$async$bAX)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dH.aI(B.R.ao(C.hek(d,e,null),null))
u="NGMY_WS:"+B.k1.gcu().aI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAX,v)},
h6i(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fSX(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ac(s)===0)return!1
if(J.cZ(s,"NGMYWSSYNC2|"))return!0
if(J.cZ(s,"NGMY_WS:"))return!0
if(J.eY(s,t))return!0
if(J.cZ(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hY2(d){var w,v,u,t=C.h6i(d)
if(t==null)return null
if(C.fSX(t))return t
w=B.a.cI(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b_(t,w))
if(C.fSX(v))return v}u=B.a.cI(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b_(t,u))
if(C.fSX(v))return v}return null},
fSW(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ac(q)===0)return r
if(J.cZ(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cZ(q,"NGMY_WS:")){v=B.c4.c7(0,B.cB.aI(J.mv(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fNz(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bAW(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bAW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aqN(t[1]),$async$bAW)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fSW(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fSW(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAW,v)},
fSV(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.la(w,v,d.c,d.d,new A.R(Date.now(),0,!1))},
bAt(){var w=0,v=A.j(x.o),u,t
var $async$bAt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.FW(),$async$bAt)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fSW(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAt,v)},
hfc(d,e,f,g){return A.bZ(B.K,null,new C.fGS(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fGS:function fGS(d,e,f){this.a=d
this.b=e
this.c=f},
aca:function aca(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eCO:function eCO(d,e){this.a=d
this.b=e},
eCP:function eCP(d,e){this.a=d
this.b=e},
eCQ:function eCQ(d,e){this.a=d
this.b=e},
eCR:function eCR(d,e){this.a=d
this.b=e},
eCN:function eCN(d){this.a=d},
aqK:function aqK(d,e,f){this.c=d
this.d=e
this.a=f},
biT:function biT(){var _=this
_.c=_.a=_.e=_.d=null},
eCr:function eCr(d,e){this.a=d
this.b=e},
eCs:function eCs(d){this.a=d},
eCt:function eCt(d){this.a=d},
aqP:function aqP(d){this.a=d},
aDb:function aDb(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eCv:function eCv(d){this.a=d},
eCu:function eCu(d){this.a=d},
hx9(d,e,f,g,h){return new C.N9(h,g,d,e,f,null)},
aHY:function aHY(d,e){this.a=d
this.b=e},
N9:function N9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDd:function aDd(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eDd:function eDd(){},
eD9:function eD9(d,e){this.a=d
this.b=e},
eDa:function eDa(d){this.a=d},
eCV:function eCV(d){this.a=d},
eCT:function eCT(d){this.a=d},
eCU:function eCU(d){this.a=d},
eD3:function eD3(d,e){this.a=d
this.b=e},
eD0:function eD0(d,e){this.a=d
this.b=e},
eD1:function eD1(d,e){this.a=d
this.b=e},
eD2:function eD2(d,e,f){this.a=d
this.b=e
this.c=f},
eCZ:function eCZ(d,e,f){this.a=d
this.b=e
this.c=f},
eCX:function eCX(d){this.a=d},
eCY:function eCY(d){this.a=d},
eD_:function eD_(d){this.a=d},
eDg:function eDg(d){this.a=d},
eDf:function eDf(d){this.a=d},
eDh:function eDh(d){this.a=d},
eDe:function eDe(d){this.a=d},
eCS:function eCS(d){this.a=d},
eCW:function eCW(d,e){this.a=d
this.b=e},
eDc:function eDc(d,e){this.a=d
this.b=e},
eDb:function eDb(d,e){this.a=d
this.b=e},
eD6:function eD6(d){this.a=d},
eD7:function eD7(d){this.a=d},
eD8:function eD8(d,e){this.a=d
this.b=e},
eD5:function eD5(d,e){this.a=d
this.b=e},
eD4:function eD4(d,e,f){this.a=d
this.b=e
this.c=f},
bvf:function bvf(){},
A1(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
aeB(d,e,f){return C.hMD(d,e,f)},
hMD(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aeB=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ar("String",e,f),$async$aeB)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a9(o)
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
return A.i($async$aeB,v)},
aeA(d,e){return C.hMC(d,e)},
hMC(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aeA=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$aeA)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a9(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aeA,v)},
hLp(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.RN(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bxZ(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bxZ=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b0p(q),$async$bxZ)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aOt(q,!1),$async$bxZ)
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
return A.i($async$bxZ,v)},
hl2(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aN(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aN(d.h(0,"quantity"))
if(w==null)w=null
v=A.aN(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.qI(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qI(p,J.k(u==null?"":u),1,o,q)},
fNz(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d7(s,x.f)
w=A.cD(w,new C.ctz(),w.$ti.k("H.E"),x.Q)
v=A.a3(w).k("a2<H.E>")
r=A.B(new A.a2(w,new C.ctA(),v),v.k("H.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.la(w,v,u,r,t==null?new A.R(Date.now(),0,!1):t)},
hQt(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Yv
case"female":case"f":return D.ahy
default:return D.xl}},
hb1(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fWY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hQt(v==null?j:J.k(v))
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
m=A.aN(d.h(0,"birthOrder"))
m=m==null?j:B.k.O(m)
if(m==null)m=1
l=J.y(d.h(0,"hidden"),!0)
k=A.aN(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.O(k)
return new C.hT(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hQv(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.LN
case"viewer":return D.kc
default:return D.tj}},
hQw(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
FM(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bze(d,e){return B.a.i(e.toLowerCase())===C.FM(d,e)&&d.y!==D.kc},
tF(d,e){var w,v=d.y
if(v===D.kc)return!1
w=B.a.i(e.toLowerCase())
if(w===C.FM(d,e))return!0
if(v===D.LN)return!0
v=d.e
return new A.J(v,A.fT0(),A.S(v).k("J<1,n>")).t(0,w)},
hPW(d){return J.dH(d,new C.fjw()).gM(0)},
fHk(d){var w=0,v=A.j(x.y),u,t
var $async$fHk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Ab(d),$async$fHk)
case 3:u=t.qE(f,new C.fHl(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fHk,v)},
byY(d,e){var w=0,v=A.j(x.H),u,t
var $async$byY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Ab(d),$async$byY)
case 3:t=g
if(J.qE(t,new C.fi9(e))){w=1
break}if(C.hPW(t)>=2)throw A.T(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$byY,v)},
aje(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d7(n,x.f)
w=A.cD(w,new C.bLk(),w.$ti.k("H.E"),x.P)
v=A.a3(w).k("a2<H.E>")
m=A.B(new A.a2(w,new C.bLl(),v),v.k("H.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bLm(),x.N)
t=A.B(l,l.$ti.k("aj.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.y(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bi(J.k(r==null?"":r))
if(r==null)r=new A.R(Date.now(),0,!1)
q=A.aN(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.O(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kt(l,w,v,!s,t,m,r,q,p,C.hQv(o==null?null:J.k(o)))},
hba(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
Cj(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Cj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Qv(d),$async$Cj)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ay(),$async$Cj)
case 4:t=f
w=5
return A.b(t.a4L(0),$async$Cj)
case 5:w=6
return A.b(C.faf(t,l),$async$Cj)
case 6:s=f
if(J.cw(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a8(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.h6S(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.or(l,n),$async$Cj)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.h6S(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.or(l,n),$async$Cj)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Cj,v)},
faf(d,e){return C.hIW(d,e)},
hIW(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$faf=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a8(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.A1(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.R.aG(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aW(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gU(f)
n=B.a.i(J.k(o))
if(J.ac(n)===0){w=7
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.A1(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fNz(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.A1(a9)+"_"+n))
i=C.hLp(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b0p(h),$async$faf)
case 17:g=b1
if(g!=null){i=i.RN(g)
p=!0}case 16:J.cf(q,i)
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
case 8:J.QF(q,new C.fag())
if(p&&J.ac(q)!==0)C.or(a9,q)
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
return A.i($async$faf,v)},
bzp(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bzp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Qv(d),$async$bzp)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Cj(r),$async$bzp)
case 4:t=p.aW(g)
case 5:if(!t.C()){w=6
break}s=t.gU(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzp,v)},
h6S(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d7(w,x.f)
v=A.cD(v,new C.f5Z(),v.$ti.k("H.E"),x.i)
u=A.a3(v).k("a2<H.E>")
v=A.B(new A.a2(v,new C.f6_(),u),u.k("H.E"))
B.d.b1(v,new C.f60())
return v}catch(t){v=A.a([],x.D)
return v}},
or(d,e){return C.hZS(d,e)},
hZS(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$or=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Qv(b2),$async$or)
case 3:a8=b5
if(J.ac(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ay(),$async$or)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.A1(a8)
p=A.aT(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fzp(),a2).fG(0)
a2=J.b6(b3,new C.fzq(),a2).bY(0,new C.fzr())
n=A.d9(a2,a2.$ti.k("H.E"))
a2=o,a2=A.ea(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eY(n,m)?17:18
break
case 17:a5=C.A1(a8)
l=A.aT(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a7h(l),$async$or)
case 19:t=21
a5=C.A1(a8)
k=A.aT(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aG(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a7h(a5==null?null:J.k(a5)),$async$or)
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
return A.b(C.aeA(r,"ngmy_worksheet_item_v3_"+C.A1(a8)+"_"+m),$async$or)
case 29:w=30
return A.b(C.aeA(r,"ngmy_worksheet_thumb_v3_"+C.A1(a8)+"_"+m),$async$or)
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
case 14:case 10:a2=J.cE(b3),a3=a2.gaj(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gU(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bxZ(h),$async$or)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aeB(r,"ngmy_worksheet_thumb_v3_"+C.A1(a8)+"_"+a4,f),$async$or)
case 40:g=i.RN(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aeA(r,"ngmy_worksheet_thumb_v3_"+C.A1(a8)+"_"+a4),$async$or)
case 41:g=i.RN(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aeA(r,"ngmy_worksheet_thumb_v3_"+C.A1(a8)+"_"+a4),$async$or)
case 42:case 34:a4=i.a
w=43
return A.b(C.aeB(r,"ngmy_worksheet_item_v3_"+C.A1(a8)+"_"+a4,B.R.ao(g.ad(),null)),$async$or)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cf(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aeB(r,"ngmy_worksheets_index_v3_"+C.A1(a8),B.R.ao(q,null)),$async$or)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eI(b3,new C.fzs(q))
a4=a3.$ti.k("cQ<1,a4<n,@>>")
a7=A.B(new A.cQ(a3,new C.fzt(),a4),a4.k("H.E"))
a0=a7
w=45
return A.b(C.aeB(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$or)
case 45:w=46
return A.b(J.hk9(r),$async$or)
case 46:if(a2.gcl(b3)&&J.ac(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.a9(b1)
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
return A.i($async$or,v)},
Kr(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Kr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Cj(d),$async$Kr)
case 3:t=g
s=J.cE(t)
r=s.be(t,new C.fHj(e))
if(r===-1)s.cn(t,0,e)
else s.n(t,r,e)
u=C.or(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Kr,v)},
bzb(d,e){var w=0,v=A.j(x.H),u
var $async$bzb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Cj(d),$async$bzb)
case 2:u=g
J.nd(u,new C.fjY(e))
w=3
return A.b(C.or(d,u),$async$bzb)
case 3:return A.h(null,v)}})
return A.i($async$bzb,v)},
FO(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$FO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$FO)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aG(0,i,null)
if(x.j.b(t)){j=J.d7(t,x.f)
j=A.cD(j,new C.fml(),j.$ti.k("H.E"),x.k)
s=A.a3(j).k("a2<H.E>")
r=A.B(new A.a2(j,new C.fmm(),s),s.k("H.E"))
B.d.b1(r,new C.fmn())
k=r}}catch(h){}w=4
return A.b(C.f6I(d),$async$FO)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hJi(k,p,d)
j=A.S(o)
s=j.k("J<1,a4<n,@>>")
s=A.B(new A.J(o,new C.fmo(),s),s.k("aj.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.PG(d,o),$async$FO)
case 7:case 6:j=j.k("a2<1>")
m=A.B(new A.a2(o,new C.fmp(d),j),j.k("H.E"))
if(m.length!==0)C.aN2(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$FO,v)},
fzb(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fzb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PG(d,e),$async$fzb)
case 3:t=J.dH(e,new C.fzc(d))
s=A.B(t,t.$ti.k("H.E"))
if(s.length===0){u=!0
w=1
break}u=C.aN2(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fzb,v)},
a1w(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a1w=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ay(),$async$a1w)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d7(u,x.f)
m=A.cD(m,new C.fHe(),m.$ti.k("H.E"),x.k)
t=A.a3(m).k("a2<H.E>")
s=A.B(new A.a2(m,new C.fHf(),t),t.k("H.E"))
o=s}}catch(k){}q=J.q_(o,new C.fHg(e))
if(B.a.i(e.x).length===0&&C.tF(e,d)){m=B.a.i(d.toLowerCase())
p=e.aBV(e.y===D.kc?D.kc:D.tj,m)}else p=e
if(q===-1)J.ph(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.PG(d,o),$async$a1w)
case 3:w=C.tF(p,d)?4:5
break
case 4:w=6
return A.b(C.aN1(C.FM(p,d),p),$async$a1w)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a1w,v)},
aNc(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aNc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.FO(d),$async$aNc)
case 2:u=g
t=J.cE(u)
s=A.qZ(t.eI(u,new C.fjF(e)))
t.bn(u,new C.fjG(e))
w=3
return A.b(C.PG(d,u),$async$aNc)
case 3:w=s!=null&&C.bze(s,d)?4:5
break
case 4:w=6
return A.b(C.f62(e),$async$aNc)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aNc,v)},
agn(d){var w=d.f,v=A.S(w).k("a2<1>")
w=A.B(new A.a2(w,new C.fHp(),v),v.k("H.E"))
return w},
fQE(d,e){var w,v=d.f,u=A.qZ(new A.a2(v,new C.fjf(e),A.S(v).k("a2<1>")))
v=C.agn(d)
w=A.S(v).k("a2<1>")
v=A.B(new A.a2(v,new C.fjg(e,u),w),w.k("H.E"))
B.d.b1(v,new C.fjh())
return v},
hQz(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hff(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.be(C.fQE(d,u),new C.fH0(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hS4(d,e){var w
if(e==null||e.length===0)return 1
w=C.fQE(d,e)
if(w.length===0)return 1
return new A.J(w,new C.fn7(),A.S(w).k("J<1,G>")).fD(0,B.zB)+1},
hZL(d){var w,v=C.agn(d)
if(v.length===0)return null
w=new A.a2(v,new C.fz8(),A.S(v).k("a2<1>"))
if(!w.gal(0))return w.gL(0)
return B.d.gL(v)},
hQu(d){return A.E(["id",d.a,"name",d.b,"gender",C.hb1(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hS_(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.V(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.J(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.xl?n:q.c
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
d=q.aBQ(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cE6(a1,w,a3.d,a2.y,s,a0,v)},
Ab(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$Ab=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$Ab)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aT(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.R.aG(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d7(t,x.f)
p=A.cD(p,new C.fmi(),p.$ti.k("H.E"),x.k)
s=A.a3(p).k("a2<H.E>")
p=A.B(new A.a2(p,new C.fmj(),s),s.k("H.E"))
B.d.b1(p,new C.fmk())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Ab,v)},
ag9(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ag9=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tj:D.kc
a7=C.FM(b2,b3)
w=2
return A.b(C.Ab(b1),$async$ag9)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.be(a8,new C.fz4(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.byY(b1,b2),$async$ag9)
case 5:case 4:if(b0===-1){u=b2.aBV(a6,a7)
a9.cn(a8,0,u)}else{t=a9.h(a8,b0)
s=A.V(x.N,x.P)
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
i=i!==D.xl?i:l.c
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
s.n(0,m,l.aBQ(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.B(new A.bc(s,k),k.k("H.E"))
k=a5?D.tj:D.kc
u=t.y8(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.PG(b1,a8),$async$ag9)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aN1(B.a.i(b3.toLowerCase()),u),$async$ag9)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ag9,v)},
h7e(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.R(Date.now(),0,!1).a5().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.S(m).k("J<1,a4<n,@>>"),k=A.B(new A.J(m,C.hes(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a5().ac(),"updatedAt",o],r,x.K),"createdAt",s.a5().ac(),"updatedAt",o],r,x.z)},
h7f(d,e){var w=new A.R(Date.now(),0,!1).a5().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.S(u).k("J<1,a4<n,@>>")
u=A.B(new A.J(u,C.hes(),t),t.k("aj.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a5().ac(),"updatedAt",w],x.N,x.z)},
hGV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a8(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.aje(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fT0(),A.S(j).k("J<1,n>")).bY(0,new C.f6v())
t=A.B(j,j.$ti.k("H.E"))
if(u===v)s=D.tj
else s=B.d.t(t,u)?D.LN:D.kc
return w.aBV(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.aje(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d7(q,h)
h=A.cD(h,new C.f6w(),h.$ti.k("H.E"),x.P)
p=A.a3(h).k("a2<H.E>")
o=A.B(new A.a2(h,new C.f6x(),p),p.k("H.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.f6y(),x.N).bY(0,new C.f6z())
t=A.B(h,h.$ti.k("H.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tj
else s=B.d.t(t,u)?D.LN:D.kc
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.R(Date.now(),0,!1)
j=A.aN(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.O(j)
if(j==null)j=0
return new C.kt(h,r,p,!m,t,o,l,j,v,s)},
f6I(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f6I=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ac(a0)===0){u=null
w=1
break}t=4
r=new C.f6M()
h=x.N
g=x.z
w=7
return A.b(A.iH(A.a([A.lh("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bG),r.$2(A.lh("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bG),"collaborator"),r.$2(A.lh("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bG),"public")],x.cl),x.U),$async$f6I)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.V(h,g)
h=A.B(p,g)
l=h
J.fZ(l,o)
J.fZ(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ac(j)!==0)J.aG(m,j,k)}l=m
h=A.a3(l).k("bc<2>")
h=A.cD(new A.bc(l,h),new C.f6J(a0),h.k("H.E"),x.k)
l=A.a3(h).k("a2<H.E>")
l=A.B(new A.a2(h,new C.f6K(),l),l.k("H.E"))
B.d.b1(l,new C.f6L())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a9(a1)
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
return A.i($async$f6I,v)},
hJi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a8(e)
if(j.gal(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dt(e,new C.faV(),v).bY(0,new C.faW())
t=A.d9(u,u.$ti.k("H.E"))
s=A.V(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.FM(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kc){m=q.e
m=!new A.J(m,A.fT0(),A.S(m).k("J<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaj(e);j.C();){v=j.gU(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hS_(l,v)
o=C.FM(k,w)
p=v.d
s.n(0,u,o===w?k.b91(p,D.tj):k.b91(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("H.E"))
B.d.b1(j,new C.faX())
return j},
PG(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$PG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$PG)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fcZ(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.ar("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$PG)
case 3:return A.h(null,v)}})
return A.i($async$PG,v)},
aN1(d,e){return C.hOk(d,e)},
hOk(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aN1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lI("family_trees",A.a([C.h7e(e,d)],p),null,B.cF),$async$aN1)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lI("family_trees",A.a([C.h7f(e,d)],p),null,B.cF),$async$aN1)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a9(n)
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
return A.i($async$aN1,v)},
aN2(d,e){return C.hOl(d,e)},
hOl(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aN2=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.S(e).k("J<1,a4<n,@>>")
m=n.k("aj.E")
l=A.B(new A.J(e,new C.fhw(d),n),m)
r=l
w=7
return A.b(A.lI("family_trees",r,null,B.cF),$async$aN2)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.J(e,new C.fhx(d),n),m)
p=k
w=8
return A.b(A.lI("family_trees",p,null,B.cF),$async$aN2)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a9(i)
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
return A.i($async$aN2,v)},
f62(d){return C.hGh(d)},
hGh(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f62=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Q5("family_trees",A.E(["id",d],x.N,x.z),null,B.cF),$async$f62)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a9(p)
$.am.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$f62,v)},
qI:function qI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
la:function la(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctC:function ctC(){},
ctB:function ctB(){},
ctz:function ctz(){},
ctA:function ctA(){},
GS:function GS(d,e){this.a=d
this.b=e},
hT:function hT(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ajd:function ajd(d,e){this.a=d
this.b=e},
fjw:function fjw(){},
fHl:function fHl(d){this.a=d},
fi9:function fi9(d){this.a=d},
kt:function kt(d,e,f,g,h,i,j,k,l,m){var _=this
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
bLo:function bLo(){},
bLn:function bLn(){},
bLk:function bLk(){},
bLl:function bLl(){},
bLm:function bLm(){},
fag:function fag(){},
f5Z:function f5Z(){},
f6_:function f6_(){},
f60:function f60(){},
fzp:function fzp(){},
fzq:function fzq(){},
fzr:function fzr(){},
fzs:function fzs(d){this.a=d},
fzt:function fzt(){},
fHj:function fHj(d){this.a=d},
fjY:function fjY(d){this.a=d},
fml:function fml(){},
fmm:function fmm(){},
fmn:function fmn(){},
fmo:function fmo(){},
fmp:function fmp(d){this.a=d},
fzc:function fzc(d){this.a=d},
fHe:function fHe(){},
fHf:function fHf(){},
fHg:function fHg(d){this.a=d},
fjF:function fjF(d){this.a=d},
fjG:function fjG(d){this.a=d},
fHp:function fHp(){},
fjf:function fjf(d){this.a=d},
fjg:function fjg(d,e){this.a=d
this.b=e},
fjh:function fjh(){},
fH0:function fH0(d){this.a=d},
fn7:function fn7(){},
fz8:function fz8(){},
fmi:function fmi(){},
fmj:function fmj(){},
fmk:function fmk(){},
fz4:function fz4(d){this.a=d},
f6v:function f6v(){},
f6w:function f6w(){},
f6x:function f6x(){},
f6y:function f6y(){},
f6z:function f6z(){},
f6M:function f6M(){},
f6N:function f6N(d){this.a=d},
f6J:function f6J(d){this.a=d},
f6K:function f6K(){},
f6L:function f6L(){},
faV:function faV(){},
faW:function faW(){},
faX:function faX(){},
fcZ:function fcZ(){},
fhw:function fhw(d){this.a=d},
fhx:function fhx(d){this.a=d},
ctD:function ctD(d,e){this.a=d
this.b=e},
ctE:function ctE(d,e){this.a=d
this.b=e},
aFg:function aFg(d,e,f){this.a=d
this.b=e
this.c=f},
b6D:function b6D(){this.b=this.a=0},
b6C:function b6C(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
btv:function btv(){},
wl(d,e){var w,v
if(d==null)return""
w=d.bQ()
v=""+w.gcb()+"/"+w.gcs()+"/"+w.gce()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gmS()),2,"0")+":"+B.a.aT(B.o.u(w.gFy()),2,"0")},
hx6(){var w,v=$.pd(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fT(u)},
aqL(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aqL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$aqL)
case 3:if(!e){u=A.V(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bG),$async$aqL)
case 8:r=e
if(r==null){u=A.V(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a9(m)
$.am.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.V(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqL,v)},
aqM(d){return C.hx7(d)},
hx7(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aqM=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$aqM)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hz("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.R(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$aqM)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a9(p)
$.am.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqM,v)},
aqO(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aqO=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$aqO)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hx6()
w=4
return A.b(C.aqL(),$async$aqO)
case 4:r=h
q=B.a.i(e)
p=B.dH.aI(t)
J.aG(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cS.gcu().aI(p),"usesRemaining",25,"createdAt",new A.R(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(C.aqM(r),$async$aqO)
case 5:u=new A.a__("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqO,v)},
aqN(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aqN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c0(),$async$aqN)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aqL(),$async$aqN)
case 4:q=f
p=J.a8(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a8(o)
m=A.aN(n.h(o,"usesRemaining"))
l=m==null?null:B.k.O(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ac(t)===0){u=null
w=1
break}s=null
try{s=B.c4.c7(0,B.cB.aI(t))}catch(h){r=A.a9(h)
$.am.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dV(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.R(Date.now(),0,!1).a5().ac())
p.n(q,i,m)}w=5
return A.b(C.aqM(q),$async$aqN)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqN,v)},
h1L(){var w=new A.R(Date.now(),0,!1).a5()
return"wst_"+(1000*w.a+w.b)+"_"+B.cI.aB(999999)},
hx8(d){var w,v,u,t,s,r,q
try{w=A.af_(d)
if(w==null)return d
v=w
if(J.Kx(v)>960||J.Kw(v)>960){s=v
r=J.Kx(v)>=J.Kw(v)?960:null
v=A.aeZ(s,J.Kw(v)>J.Kx(v)?960:null,B.N7,r)}s=v
u=A.akC(82).S8(s,B.y6)
if(J.ac(u)===0)return d
s=new Uint8Array(A.cp(u))
return s}catch(q){t=A.a9(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cdk(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cdk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hx8(e)
$.cdg.n(0,s,t)
u=C.bAZ(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdk,v)},
b0p(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0p=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cZ(l,"data:image")){u=null
w=1
break}t=4
r=J.eY(l,",")?B.d.gam(J.lj(l,",")):l
q=B.cB.aI(r)
if(J.ac(q)===0){u=null
w=1
break}p=C.h1L()
w=7
return A.b(C.cdk(p,q),$async$b0p)
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
n=A.a9(k)
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
return A.i($async$b0p,v)},
cdh(d){var w=0,v=A.j(x.T),u,t,s
var $async$cdh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(K.cdj(s),$async$cdh)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcu().aI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cdh,v)},
a7h(d){var w=0,v=A.j(x.H),u,t
var $async$a7h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=K.hel(d)
if(t==null){w=1
break}$.cdg.W(0,t)
w=3
return A.b(C.bAY(t),$async$a7h)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a7h,v)},
bAZ(d,e){return C.hY5(d,e)},
hY5(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bAZ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aLY
w=7
return A.b(n==null?$.aLY=K.fPF():n,$async$bAZ)
case 7:r=g
q=new Uint8Array(A.cp(e))
p=J.mw(r,"thumbs","readwrite")
B.iz.lZ(J.mu(p,"thumbs"),q,l)
w=8
return A.b(J.pg(p),$async$bAZ)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a9(k)
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
return A.i($async$bAZ,v)},
bAY(d){return C.hY3(d)},
hY3(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aLY
w=7
return A.b(o==null?$.aLY=K.fPF():o,$async$bAY)
case 7:r=f
q=J.mw(r,"thumbs","readwrite")
B.iz.F3(J.mu(q,"thumbs"),m)
w=8
return A.b(J.pg(q),$async$bAY)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a9(l)
$.am.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAY,v)}},D,Af,Ag,P,Ah,Ai,K,Aj,Q,Z
J=c[1]
A=c[0]
B=c[2]
A_=c[194]
G=c[175]
F=c[29]
E=c[185]
M=c[111]
A0=c[112]
A1=c[163]
R=c[116]
A2=c[193]
A3=c[35]
N=c[192]
A4=c[77]
I=c[83]
A5=c[132]
A6=c[120]
S=c[135]
T=c[205]
U=c[164]
A7=c[155]
A8=c[167]
V=c[162]
A9=c[62]
Aa=c[68]
W=c[179]
Ab=c[28]
Ac=c[209]
Ad=c[144]
L=c[157]
Ae=c[168]
X=c[207]
Y=c[201]
H=c[101]
O=c[66]
C=a.updateHolder(c[6],C)
D=c[204]
Af=c[67]
Ag=c[173]
P=c[206]
Ah=c[105]
Ai=c[54]
K=c[52]
Aj=c[74]
Q=c[208]
Z=c[125]
C.amK.prototype={}
C.aWM.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bdg(),f=h.x!=null&&h.yw(i).length===0
if(h.x!=null)w=f?B.aZ:B.bL
else w=h.gSM()?B.bL:B.dU
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bbL,B.r,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eBZ,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h3,i,i,i),B.S,D.f3S,B.au,A.d(C.wl(new A.R(Date.now(),0,!1),!0),i,i,i,i,i,i,D.f_T,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aXB,i,i,i,i,B.Xv,i,i,i)
q=A.m(16)
p=A.I(B.aL,B.r,1)
o=A.I(B.aZ.j(0.28),B.r,1)
n=A.fRB(h.d)
o=A.p(B.A,C.aWL(A.fpw(h.e,n),30),B.f,i,i,new A.o(B.lv,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eWk,B.L,i,i)
m=A.m(14)
l=A.I(B.aL,B.r,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bz,D.f48,B.ac,A.p(i,A.v(A.a([D.fj1,B.bz,A.d(A.Ad(h.c),i,i,i,i,i,i,D.eRq,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f3,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,L.afF,i,i,i)
p=A.m(16)
m=A.I(B.aL,B.r,1)
l=j.aOl("Original due",C.wl(h.r,!1))
n=j.aOl("Current due",C.wl(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.P,n,B.S,A.p(i,A.d(h.gaIz(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Ap,i,i,1/0),B.S,j.caw(),B.P,j.bZo(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bl,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aL,B.r,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.f55,B.au,A.d(q,i,i,i,i,i,i,D.eVD,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bl,i,i,1/0)],s))}if(h.gaDv()){q=A.m(14)
o=A.I(B.cm,B.r,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fkg,B.P,A.bv(A.m(12),A.ei(new A.a6(1/0,88,A.b3(i,i,i,new A.UT(h.ax,B.M,D.eFI,!0,3.5,i),B.at),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.EA,i,i,i)],s))}p.push(B.az)
p.push(D.fcL)
return A.p(i,A.v(A.a([r,new A.C(B.afI,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aOl(d,e){var w=null
return A.A(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a6G,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eSp,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
caw(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a7U(B.dU,u,"Not paid yet")
w=t.yw(null).length
v=w===0?B.aZ:B.bL
return this.a7U(v,u,C.wl(t.x,!0))},
bZo(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a7U(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a7U(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a6G,u,u,u)
v=A.S(d).k("J<1,hg>")
v=A.B(new A.J(d,new C.c_9(),v),v.k("aj.E"))
return A.v(A.a([w,B.ao,A.c4(B.bE,v,B.bx,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a7U(d,e,f){var w=null
return A.A(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a6G,w,w,w),1),new A.dm(1,B.ci,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dK,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b8M.prototype={
a6(d,e){new A.UT(this.b,B.M,e,!0,3.5,null).a6(d,e)},
aq(d){return d.b!==this.b}}
C.amR.prototype={
T(){return new C.aB7(A.a([],x.bp))},
gdX(){return this.c}}
C.aB7.prototype={
a_(){this.a1()
this.HY()},
HY(){var w=0,v=A.j(x.H),u,t=this,s
var $async$HY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0K(t.a.c),$async$HY)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dCx(t,s))
case 1:return A.h(u,v)}})
return A.i($async$HY,v)},
aQc(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bq:B.bp,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bp).j(0.22)
w=A.m(10)
return A.bo(v,new A.b4(4,r,new A.az(u,1,B.r,-1)),v,B.bl,v,v,v,v,!0,new A.b4(4,w,new A.az((this.a.d.a?B.bq:B.bp).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aVd),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aQb(d){return this.aQc(d,null)},
Ov(d){return this.ce4(d)},
ce4(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ov=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.FQ:B.eF
w=7
return A.b(new A.hU().Bv(72,900,900,n),$async$Ov)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fd(),$async$Ov)
case 8:p=f
n=B.cS.gcu().aI(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a9(l)
n=r.c
if(n!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ov,v)},
aYx(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.bq:B.bp).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bq:B.bp
q=A.W(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bq:B.bp
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c7)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cw,s.a.d.a?B.bq:B.bp,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c7))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kb,D.bmX,r,r,r)},
Cs(d){return this.bwb(d)},
bwa(){return this.Cs(null)},
bwb(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Cs=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.bb(a4,B.b1,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jK(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.O(p)):B.k.aa(p,2)}o=new A.ar(new A.bb(a4,B.b1,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.bb(a4,B.b1,B.aN),s)
if(a3){a4=new A.R(Date.now(),0,!1).bN(6048e8)
m=A.c_(a4.gce(),a4.gcb(),a4.gcs(),0,0,0,0,0)}else{a4=a5.f
m=A.c_(a4.gce(),a4.gcb(),a4.gcs(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bl(a4,!0,x.cT)
i=a3?null:A.fRB(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vz?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",a4,new C.dCg(),new C.dCh(a2,t,a5,r,new C.dCi(a2,t),o,n,j),B.eD,!0,x.y),$async$Cs)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d3(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.eM2)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.eKI)
w=1
break}a1=A.fpw(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vz?"male":"female"
w=7
return A.b(A.agm(a3,A.fZu(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Cs)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vz?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c_(a3.gce(),a3.gcb(),a3.gcs(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c_(a4.gce(),a4.gcb(),a4.gcs(),0,0,0,0,0)))a5.cGg(a2.a)
w=8
return A.b(A.agm(t.a.c,a5),$async$Cs)
case 8:case 5:w=9
return A.b(t.HY(),$async$Cs)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Cs,v)},
aQN(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bq:B.bp).j(0.2)
s=A.I(s,B.r,g?1.5:1)
r=C.aWL(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aP:B.aA
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.p(p,A.A(A.a([r,B.bo,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.af)},
R7(d){return this.cvh(d)},
cvh(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$R7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",s,new C.dCA(),new C.dCB(t,d),B.hW,!0,x.y),$async$R7)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.R(s,0,!1)
case 4:w=7
return A.b(A.agm(t.a.c,d),$async$R7)
case 7:w=8
return A.b(t.HY(),$async$R7)
case 8:case 1:return A.h(u,v)}})
return A.i($async$R7,v)},
Nb(d,e){return this.bGQ(0,e)},
bGQ(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Nb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kV(s,"Cancel","Delete",e.b+" \xb7 "+A.Ad(e.c)+" will be removed from this device.","Delete this debt?"),$async$Nb)
case 3:if(!g){w=1
break}w=4
return A.b(C.fjM(t.a.c,e.a),$async$Nb)
case 4:w=5
return A.b(t.HY(),$async$Nb)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Nb,v)},
adj(d){return this.c8_(d)},
c8_(d){var w=0,v=A.j(x.H),u=this,t
var $async$adj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bZ(B.K,null,new C.dCu(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$adj)
case 2:return A.h(null,v)}})
return A.i($async$adj,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.e0N
w=J.dH(m.d,new C.dCC())
v=A.B(w,w.$ti.k("H.E"))
w=J.dH(m.d,new C.dCD())
u=A.B(w,w.$ti.k("H.E"))
t=B.d.cH(v,0,new C.dCE())
w=A.m(18)
s=m.a.d.a
r=s?D.ciG:D.avO
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bLw,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.aw,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.m(12),A.aK(!1,A.m(12),!0,D.e0c,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dCF(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.af)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.crw("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Ad(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.D(m.b3v(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a7(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.afC,l,l,l),B.az],p)
if(J.ck(m.d)){w=m.a.d.a
s=w?B.dW:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bp).j(0.12),B.r,1)
n=A.p(l,D.bGv,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.aA,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bp,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bpo,l,l,1/0))}else{w=m.gcdn()
s=A.B(new A.J(v,w,A.S(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ao,new A.C(D.br3,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bp,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.S(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b3v(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bp).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bp,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aP:B.aA
return A.p(u,A.v(A.a([q,B.bz,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ev,u,u,u)},
crw(d,e){return this.b3v(!1,d,e)},
cdo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yw(j).length,h=d.bcs()
if(d.x!=null){w=d.yw(j).length
v=w===0?B.cY:B.bL}else if(d.gSM())v=B.bL
else{if(h)w=B.cY
else w=k.a.d.a?B.bq:B.bp
v=w}if(d.x!=null){w=d.yw(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wl(u,!1)}else{u.toString
t="Paid "+C.wl(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wl(w,!1)+" \xb7 "+i+" missed":"Due "+C.wl(w,!1)}w=k.a.d.a?B.dW:B.c
u=A.m(18)
if(d.gSM()&&d.x==null)s=B.bL.j(0.35)
else s=(k.a.d.a?B.bq:B.bp).j(0.12)
s=A.I(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ad(0,B.G,B.w.j(0.04),B.cJ,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bn:B.lv
o=A.I(d.gSM()&&d.x==null?B.bL.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fRB(d.d)
o=A.p(B.A,A.db(C.aWL(A.fpw(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.aA
m=x.p
n=A.a([new A.dm(1,B.ci,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaDv())B.d.v(n,A.a([B.eb,A.W(B.Md,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.d_,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.Ad(d.c)
l=k.a.d.a?B.aP:B.aA
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aK(!1,q,!0,new A.C(T.afm,A.A(A.a([o,B.bf,p,B.ab,A.v(A.a([n,B.bz,A.W(B.en,(k.a.d.a?B.bq:B.bp).j(0.5),j,j,j,18)],m),B.dC,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dCw(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.af),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.db,j,j,j,j)}}
C.tX.prototype={}
C.ajc.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bg
u=v?B.F:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.r,t?1.2:1.6)
p=A.a([new A.ad(0,B.G,B.w.j(0.45),B.cx,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.r,1)
n.push(A.aE(a0,A.p(a0,A.W(B.cw,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a9))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.j3,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.asm,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.ER,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f4(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.eg)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bmb,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bm,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fo,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eGs)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.uS,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.l4,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hg,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bno,a0,a0,a0,a0)}}
C.aSB.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bm:B.cD,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.j,0,q,q),B.d_,n],m)
if(p.z)o.push(new A.C(B.uP,n,q))
return new A.C(B.db,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.RG.prototype={
T(){return new C.bck()}}
C.bck.prototype={
gbUw(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.e0I,D.e0O],l)
for(w=0;w<8;++w){v=D.a0t[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.FA:B.B6
q=t===s
r=A.W(r,q?B.ey:B.c_,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bo,new A.x(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bE(1,B.bi,new A.x(v.c,n,Aj.CE,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aV(24,24)
p=new A.az(B.ey,2,B.r,-1)
s=new A.o(n,n,new A.bP(p,p,p,p),new A.bs(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eE,A.v(A.a([new A.C(B.ma,new A.cn(B.aQ,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.Dl(!0,new C.ajc(v,q.d,q.e,new C.d2o(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d2p(o,v),n,n,n,n,n,n,!1,B.a9))}k.push(new A.C(D.bnH,A.bJ(D.fpp,new C.d2q(o,d),A.bk(B.b4,n,n,n,n,B.nV,n,n,new A.b7(A.m(16),B.Y),n,n,n)),n))
return A.bp(!0,new A.cU(new A.aY(0,1/0,0,m.a.b*0.9),A.cB(k,n,D.brU,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.n_.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a5().ac()],x.N,x.z)},
b9d(d,e,f){return new C.n_(this.a,e,d,f)}}
C.GR.prototype={
vT(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.GR(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aBK(d){var w=null
return this.vT(w,w,w,w,w,d,w,w,w,w,w,w)},
cC4(d){var w=null
return this.vT(w,w,w,w,d,w,w,w,w,w,w,w)},
b9b(d,e,f){var w=null
return this.vT(d,w,w,w,w,w,w,w,e,w,f,w)},
cCJ(d){var w=null
return this.vT(w,w,w,w,w,w,d,w,w,w,w,w)},
cCS(d){var w=null
return this.vT(w,w,w,w,w,w,w,w,w,d,w,w)},
cC2(d){var w=null
return this.vT(w,w,w,d,w,w,w,w,w,w,w,w)},
cCU(d){var w=null
return this.vT(w,w,w,w,w,w,w,w,w,w,w,d)},
cC_(d){var w=null
return this.vT(w,w,d,w,w,w,w,w,w,w,w,w)},
cBV(d){var w=null
return this.vT(w,d,w,w,w,w,w,w,w,w,w,w)},
EW(d){var w=null
return this.vT(w,w,w,w,w,w,w,d,w,w,w,w)},
cD1(d,e,f,g,h,i,j,k,l,m,n){return this.vT(d,e,f,g,null,h,i,j,k,l,m,n)},
ad(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
czS(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bLj(d),k=A.aN(d.h(0,"emblem")),j=k==null?o:B.k.O(k),i=A.aN(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.BK.gef(D.BK))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a1X)
q=l.$2("frame",D.a1q)
l=l.$2("texture",D.a1l)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cD1(p,u,t,q,r,A.tC(d.h(0,"ribbon"))?A.Fo(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Yc.prototype={
T(){return new C.ay9(A.a([],x.I),D.LM)},
gdX(){return this.c}}
C.ay9.prototype={
a_(){var w,v=this
v.a1()
v.f=A.z5(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.kG()
w=v.a
C.bzm(w.c,w.d).bz(new C.d34(v),x.fL)},
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
kG(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.K_(s.c,s.d),$async$kG)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d2T(t,r))
t.atJ()
case 1:return A.h(u,v)}})
return A.i($async$kG,v)},
gaqn(){var w,v=this
if(!J.ck(v.d)){w=v.r
w=w<0||w>=J.ac(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
atJ(){var w,v,u=this.gaqn(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saV(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saV(0,w==null?"":w)},
c6q(d){this.m(new C.d2Q(this,d))
this.atJ()},
Mx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Mx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.n_(B.o.u(1000*Date.now()),"Untitled page","",new A.R(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aOO(r.c,r.d,s),$async$Mx)
case 3:w=4
return A.b(t.kG(),$async$Mx)
case 4:if(t.c==null||J.ck(t.d)){w=1
break}q=J.q_(t.d,new C.d2r(s))
p=q>=0?q:J.ac(t.d)-1
t.m(new C.d2s(t,p))
t.atJ()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Ay(p+1,B.cp,B.kz),$async$Mx)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Mx,v)},
Ae(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ae=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaqn()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aOO(o.c,o.d,new C.n_(s,r,q,new A.R(p,0,!1))),$async$Ae)
case 3:w=4
return A.b(t.kG(),$async$Ae)
case 4:if(t.c==null){w=1
break}t.m(new C.d2U(t))
case 1:return A.h(u,v)}})
return A.i($async$Ae,v)},
Nc(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaqn()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d2A(r),s,null,!0,!0,x.y),$async$Nc)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bz7(s.c,s.d,r.a),$async$Nc)
case 4:t.m(new C.d2B(t))
w=5
return A.b(t.kG(),$async$Nc)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.SP(B.o.D(t.r+1,0,J.ac(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Nc,v)},
xP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ae(),$async$xP)
case 5:case 4:if(t.c==null){w=1
break}w=J.cw(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.PX(s,r.r,o,p,q),$async$xP)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a5(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.heP(s,r.x,r.r),$async$xP)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.K_(s.c,s.d),$async$xP)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.n_(""+(m+k),q,B.a.i(j.b),new A.R(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Am(r.c,r.d,l),$async$xP)
case 11:w=12
return A.b(t.kG(),$async$xP)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xP,v)},
a_h(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ae(),$async$a_h)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxN(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dN(D.yd,new C.d2R(t),new C.d2S())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mg("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gU(o)
p.push(new F.mg(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fTc(o,new F.r2(s,r,"",p,new F.ug(q.d,null,null,null,null,"","","")),null),$async$a_h)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a_h,v)},
MV(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$MV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ae(),$async$MV)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bZ(D.abc,null,new C.d2w(t),s,!0,!0,!0,D.aKn,!1,!1,x.N),$async$MV)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cC4(r)
t.m(new C.d2x(t,q))
s=t.a
w=7
return A.b(C.Qx(s.c,s.d,q),$async$MV)
case 7:case 1:return A.h(u,v)}})
return A.i($async$MV,v)},
VU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bZ(D.abc,null,new C.d2C(t),r,!0,!0,!0,D.aKn,!1,!1,x.e),$async$VU)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d2D(t,s))
r=t.a
w=4
return A.b(C.Qx(r.c,r.d,s),$async$VU)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Ay(0,B.dX,B.ok)
case 1:return A.h(u,v)}})
return A.i($async$VU,v)},
bLT(d){var w=d.bQ(),v=B.a.aT(B.o.u(w.gcb()),2,"0"),u=B.a.aT(B.o.u(w.gcs()),2,"0")
return""+w.gce()+"-"+v+"-"+u},
gxN(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bTN()
if(r.e)w=D.aa8
else if(J.ck(r.d)){w=r.y
v=r.gxN(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eQU,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.C(Y.agC,new C.Xv(w,v,0,q),q),q),B.bu,t,B.ao,A.d(u,q,q,q,q,q,q,A.l(q,q,D.k5.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bu],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eBP,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ad(0,B.G,B.dN.j(0.45),B.J,18)],x.V),E.vn,B.n),q,q,q,q,B.XF,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcz1(),q,q,q,q,q,q,!1,B.a9))
w.push(B.S)
w.push(A.hb(D.bCN,D.foU,r.gaKh(),q))
B.d.v(u,w)}w=A.av(A.cd(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.ez,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ac(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.k5.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dP:B.zz
u=A.v(A.a([new A.C(D.boI,w,q),A.D(A.I7(v,new C.d32(r),J.ac(r.d)+1,q,r.gc6p(),u,B.aQ),1),r.bz2()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cb(q,D.aco,new A.an(B.W,q,B.b_,B.q,A.a([D.aIU,A.bp(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bTN(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cw(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.J6(B.dV,"AI",h.gbwX(),!0))
if(h.a.f)f.push(new C.J6(B.mW,"Cover",h.gbHp(),!1))
if(h.a.f)f.push(new C.J6(B.xR,"Header",h.gbCr(),!1))
if(J.cw(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.J6(B.tx,"Print",h.gcfn(),!1))
if(h.a.f&&J.cw(h.d)&&h.r>=0){v=h.w
u=v?B.hw:B.j7
t=v?"Save":"Edit"
f.push(new C.J6(u,t,v?h.gclr():new C.d2N(h),!1))}if(h.a.f)f.push(new C.J6(B.hv,"Add page",h.gaKh(),!1))
v=C.hb0(h.y.Q)
u=h.gxN(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ac(h.d)
r=J.ac(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.dhZ
else{k=new A.aV(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.az(E.jG.j(0.5),1,B.r,-1)
j=A.p(g,A.W(l.a,D.k5,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bP(i,i,i,i),new A.bs(k,k,k,k),g,new A.a7(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.k5.j(0.85)
p.push(new A.bE(1,B.bi,A.aE(B.c5,A.v(A.a([k,B.bz,new A.x(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a9),g))}return new C.ajc(v,u,t+" \xb7 "+s+" "+r,new C.d2O(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zi(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Ae(),$async$zi)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gU(r)
s.push(q.b+" "+q.c)}p=F.a0Z(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.d2t(t,p),s,null,!0,!0,x.N),$async$zi)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xP(),$async$zi)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.D1(),$async$zi)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.EA("Swahili (Kiswahili)",!0),$async$zi)
case 18:w=16
break
case 17:w=19
return A.b(t.cvS(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zi)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zi,v)},
XM(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jG.j(0.3),B.r,1),r=x.p
return new A.C(B.cG,A.aK(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vn,B.a6),w,42,w,w,w,w,w,42),B.bf,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A4.Sr,w,w,w),A.d(g,w,w,w,w,w,w,M.Sl,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2P(d,h),w,w,w,w,w,w,w),w)},
D1(){return this.bLn()},
bLn(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$D1=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d2G(r),a7,null,!0,!0,x.ei),$async$D1)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eK("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.c9(null,null,!1,null,new C.d2H(o),a7,null,!0,!0,x.H).f8(new C.d2I(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.cf(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ad()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yd[a1]
J.cf(j,i.a)}w=8
return A.b(C.afy(a0,a7,new C.d2J(o),d,l,e,j),$async$D1)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a9(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a5(l,!0).eH()
l=o
l.shN($.aw())
J.aPf(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.R(A.b2(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcl(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ac(p);++a4){if(m.b.ah(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b9d(m.b.h(0,a4).b,a7,new A.R(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Am(j.c,j.d,l),$async$D1)
case 11:w=12
return A.b(r.kG(),$async$D1)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yd[a1].a)
a5=l.czS(j,12,a7)
l=r.a
w=15
return A.b(C.Qx(l.c,l.d,a5),$async$D1)
case 15:if(r.c!=null)r.m(new C.d2K(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Ay(0,B.dX,B.ok)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.coe("Undo",new C.d2L(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$D1,v)},
EA(d,e){return this.cvT(d,e)},
cvS(d){return this.EA(d,!1)},
cvT(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$EA=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eK("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.c9(null,null,!1,null,new C.d2W(a0),k,null,!0,!0,x.H).f8(new C.d2X(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.cf(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a1b(m,new C.d2Y(a0)),$async$EA)
case 10:w=8
break
case 9:w=11
return A.b(C.bAQ(new C.d2Z(a0),m,a2),$async$EA)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a9(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a5(o,!0).eH()
o=a0
o.shN($.aw())
J.aPf(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ac(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b9d(J.q(p,g).b,j.a,new A.R(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Am(k.c,k.d,o),$async$EA)
case 12:w=13
return A.b(r.kG(),$async$EA)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.coe("Undo",new C.d3_(r,d),null),null,null,null,null,B.q,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EA,v)},
bz2(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d2u(v):u
r=A.aH(u,u,u,u,A.W(D.byt,s?D.k5:B.b6,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cw(v.d)&&!v.w&&v.r>=0)s=A.hb(A.W(B.v2,B.Ec,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Ec,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbGZ(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.k5.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.av(s,u,u,u),1)
w=t<J.ac(v.d)?new C.d2v(v):u
return A.bp(!0,new A.C(D.bow,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.en,t<J.ac(v.d)?D.k5:B.b6,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.Yg.prototype={
T(){return new C.bcF(new A.ar(B.as,$.aw()))}}
C.bcF.prototype={
ga0p(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbK9(){var w,v=this.ga0p()
A:{if("cover"===v){w=D.cOo
break A}if("book"===v){w=D.cKp
break A}w=D.daT
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jG.j(0.5),n=x.p,m=A.A(A.a([D.di_,B.aw,D.btP,A.aH(q,q,q,q,B.lb,q,q,q,new C.d4P(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jG(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d4Q(r),r.ga0p()==="page",q,q,q,q))
if(r.a.d)l.push(A.jG(q,q,q,D.fjO,q,new C.d4R(r),r.ga0p()==="book",q,q,q,q))
l.push(A.jG(q,q,q,D.f7E,q,new C.d4S(r),r.ga0p()==="cover",q,q,q,q))
l=A.c4(B.bE,l,B.bx,6,8)
k=B.c.j(0.07)
k=A.aL(q,B.T,!1,q,!0,B.q,q,A.aM(),r.d,q,q,q,q,q,2,A.bo(q,new A.b4(4,A.m(16),B.Y),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kq,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.dk,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbK9(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mx(q,B.c.j(0.08),new A.x(s,q,B.Ie,q,q,q,q,q,q,q,q,q),B.hz,new C.d4T(r,s),q,q,q,q))}return A.eD(q,E.A5,A.cd(A.v(A.a([m,B.S,D.fmS,B.ao,l,B.ac,k,B.P,A.c4(B.bE,w,B.bx,6,6),B.az,A.dq(D.bCK,D.fnD,new C.d4U(r,d),A.bk(B.b4,q,q,q,q,B.nV,q,q,new A.b7(A.m(16),B.Y),q,q,q)),B.au,D.fic],n),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.fx,q,q,B.ah),q,q,q,D.agm,B.cZ,q,new A.b7(p,new A.az(o,1.4,B.r,-1)),q)}}
C.Ye.prototype={
T(){return new C.aya(A.a([],x.Y))},
gdX(){return this.c}}
C.adm.prototype={}
C.aya.prototype={
a_(){this.a1()
this.kG()},
kG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Q1(p.c,p.d),$async$kG)
case 3:o=e
n=A.a([],x.Y)
p=J.aW(o)
case 4:if(!p.C()){w=5
break}s=p.gU(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bzm(r.c,q),$async$kG)
case 6:j=e
i=J
w=7
return A.b(C.K_(t.a.c,q),$async$kG)
case 7:m.push(new l.adm(k,j,i.ac(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d3j(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kG,v)},
b4E(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
P9(d,e){return this.c7Y(0,e)},
c7Y(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$P9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a5(s,!1).ci(A.em(new C.d3i(u,e),!0,null,x.y)),$async$P9)
case 2:t=g
w=3
return A.b(u.kG(),$async$P9)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aMg)
return A.h(null,v)}})
return A.i($async$P9,v)},
ED(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ED=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aMc)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aeS(s.c,s.d),$async$ED)
case 5:q=e
w=6
return A.b(t.kG(),$async$ED)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.P9(0,B.d.ix(t.d,new C.d3n(q))),$async$ED)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.PX(p,s.f,r,n,o),$async$ED)
case 10:m=e
w=11
return A.b(t.kG(),$async$ED)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aMg)
case 1:return A.h(u,v)}})
return A.i($async$ED,v)},
OE(d,e){return this.cjc(0,e)},
cjc(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$OE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d3m(t,e),s,null,!0,!0,x.y),$async$OE)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a1o(s.c,s.d,e.a),$async$OE)
case 4:w=5
return A.b(t.kG(),$async$OE)
case 5:case 1:return A.h(u,v)}})
return A.i($async$OE,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bz5(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jG.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fF(0.7142857142857143,A.p(n,A.v(A.a([D.di0,B.ac,D.e_T,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.k5.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcyY(),n,n,n,n,n,n,!1,B.a9))}w=A.m(22)
v=A.I(E.jG.j(0.85),B.r,1.6)
s=A.aE(n,A.p(n,D.bKl,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jG.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d3o(d),n,n,n,n,n,n,!1,B.a9)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jG.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bf,D.bua,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eQ0,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h3,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bPQ,B.n),n,n,n,Ah.Lf,D.bmD,n,n,n)
if(o.e)k=D.aa8
else k=k.length===0?D.b1A:A.cm(new C.d3p(k))
return A.cb(n,D.aco,new A.an(B.W,n,B.b_,B.q,A.a([D.aIU,A.bp(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bz5(d){var w,v,u=this,t=null,s=u.b4E(d),r=d.c,q=x.p,p=A.a([A.bY(0,A.f4(B.A,new A.a6(300,420,new C.Xv(d.b,s,r,t),t),B.f,B.dt),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bJF,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b6,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d3g(u,d),t,t,t,t,t,t,!1,B.a9),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.ePA,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fF(0.7142857142857143,new A.an(B.W,t,B.aa,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.k5.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d3h(u,d),t,t,t,t,t,t,!1,B.a9)}}
C.J6.prototype={}
C.Xv.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dN(D.yd,new C.cCn(m),new C.cCo()),j=m.c,i=D.BK.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.lJ:B.b9
v=new C.cCp(h)
i=A.a([new A.ad(0,B.G,B.w.j(0.6),D.dYc,28)],x.V)
u=x.p
t=A.a([A.bY(0,A.b3(l,l,l,new C.b9X(j.x,h,l),B.at),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aV(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bs(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.agD,8,0.85,2.2),v.$4(D.brm,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.agD,8,0.85,2.4))
else if(r==="corners")t.push(A.bY(0,new A.C(D.bri,A.b3(l,l,l,new C.b9O(h,l),B.at),l),0,0,0))
r=A.W(D.auY[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.asm,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.az,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bY(0,new A.C(D.brM,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aFb(l),D.eFB),l,l,l,46,0,l))
return A.p(l,A.bv(D.a8Q,new A.an(B.W,l,B.aa,B.q,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.a8Q,i,new A.a7(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b9X.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eS()
f.dH(11)
switch(this.b){case"plain":return
case"linen":$.X()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.X()
q=A.L()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ai()
l=f.ai()
k=f.ai()
$.X()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.ai()*0.5).gp(0)
r=j.H()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.X()
j=A.a([],l)
h=new A.aQ(k.r,B.ap,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bF())
k=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbI().a.snapshot()
o.drawPath((h.e=new A.cF(k)).a,r)
r.delete()}break
default:$.X()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ai()
m=f.ai()
l=f.ai()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.X()
g=A.L()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.ai()
m=f.ai()
l=f.ai()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
aq(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b9O.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.X(),k=A.L(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ae
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.ex7,new A.cL([w,0,-1,1]),new A.cL([0,v,1,-1]),new A.cL([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aQ(l,B.ap,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.H()
s=n.gbI().a.snapshot()
w.drawPath((n.e=new A.cF(s)).a,m)
m.delete()
s=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aq(d){return!d.b.A(0,this.b)}}
C.tY.prototype={}
C.XN.prototype={
T(){return new C.b9V()}}
C.b9V.prototype={
gnH(){var w=this.d
return w===$?this.d=this.a.c:w},
gxN(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b1,B.aN),$.aw())}return v},
gaz0(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b1,B.aN),$.aw())}return v},
gaoY(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b1,B.aN),$.aw())}return v},
q(){var w=this,v=w.gxN(0),u=v.S$=$.aw()
v.P$=0
v=w.gaz0()
v.S$=u
v.P$=0
v=w.gaoY()
v.S$=u
v.P$=0
w.a2()},
apz(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jG(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cVP(this,f,u),e===u,s,s,s,s))}return A.c4(B.bE,r,B.bx,6,8)},
ava(d){var w=null,v=B.c.j(0.07)
return A.bo(w,new A.b4(4,A.m(14),B.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lj,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnH(),a0=f.gxN(0),a1=a0.a.a,a2=f.gaz0(),a3=a2.a.a,a4=f.gaoY(),a5=d.b9b(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a6(190,260,A.f4(B.A,new A.a6(270,370,new C.Xv(a5,d,f.a.e,e),e),B.f,B.dt),e),e,e,e)
a0=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a0,e,e,e,e,e,2,f.ava("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWd(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a2,e,e,e,e,e,2,f.ava("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWe(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yd[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b6
q=r.a===q
o=new A.az(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bP(o,o,o,o),e,e,new A.a7(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.ay
v.push(A.aE(e,A.v(A.a([p,B.d_,new A.x(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWf(f,t),e,e,e,e,e,e,!1,B.a9))}v=A.c4(B.bE,v,B.bx,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b4.j(0.35):B.c.j(0.07)
m=new A.aV(14,14)
s=f.d
o=new A.az((s===$?f.d=f.a.c:s).d===n?B.ey:B.K,2,B.r,-1)
q.push(A.aE(e,A.p(e,A.W(D.auY[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bP(o,o,o,o),new A.bs(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWg(f,n),e,e,e,e,e,e,!1,B.a9))}q=A.c4(B.bE,q,B.bx,8,8)
a4=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a4,e,e,e,e,e,2,f.ava("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cWh(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,I.mu,e,e,e)
m=A.a([],w)
for(l=D.BK.gdL(D.BK),l=l.gaj(l);l.C();){k=l.gU(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.b6
g=r.e===i
o=new A.az(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bP(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.ay
m.push(A.aE(e,A.v(A.a([j,B.bz,new A.x(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cWi(f,k),e,e,e,e,e,e,!1,B.a9))}m=A.c4(B.bE,m,B.bx,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,I.mu,e,e,e)
k=f.gnH()
return new A.C(new A.O(0,0,0,a3.f.d),A.bp(!0,new A.cU(new A.aY(0,1/0,0,a1.a.b*0.92),A.cB(A.a([D.fhG,B.ac,d,B.aO,a0,B.S,a2,B.az,D.fnr,B.P,v,B.az,D.fhP,B.P,q,B.az,a4,B.az,p,B.P,m,B.az,l,A.kR(e,9,""+B.k.V(f.gnH().f),36,18,new C.cWj(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,I.mu,e,e,e),B.ao,f.apz(D.a1X,f.gnH().r,new C.cWk(f),D.de3),B.ac,A.d("BORDER",e,e,e,e,e,e,I.mu,e,e,e),B.ao,f.apz(D.a1q,f.gnH().w,new C.cWl(f),D.de8),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,I.mu,e,e,e),B.ao,f.apz(D.a1l,f.gnH().x,new C.cWn(f),D.dfw),B.ao,A.iB(e,B.b4,e,B.ag,e,new C.cWo(f),e,e,e,D.fci,f.gnH().z),B.bu,A.bJ(D.fgA,new C.cWp(f,a6),A.bk(B.b4,e,e,e,e,B.nV,e,e,new A.b7(A.m(16),B.Y),e,e,e))],w),e,P.agb,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aFb.prototype={
a6(d,e){var w,v,u,t=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ap(w,0))
v=e.b
t.E(new A.ap(w,v))
t.E(new A.ap(w/2,v-12))
t.E(new A.ap(0,v))
t.E(new A.bF())
u=A.L()
u.sau(D.bQs.aw(0,new A.aa(0,0,0+w,0+v)))
d.aN(t,u)},
aq(d){return!1}}
C.bf7.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.X()
w=A.L()
w.sau(D.bPw.aw(0,new A.aa(0,0,a3,a4)))
a5.aX(new A.aa(0,0,a3,a4),w)
v=B.k.dJ(a2/112)
u=new A.eS()
u.dH(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.cOn[u.aB(9)]
j=u.aB(14)
J.bA(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.aa(n,j,n+m,j+l)
h=A.by(i,B.ha)
g=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sau(new A.a7(B.a3,B.a7,B.x,A.a([f,k,e],t),a0,a0).aw(0,i))
d=g.H()
w.drawRRect(A.ep(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
e.r=E.jG.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c5(new A.aa(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
j.r=E.jG.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c5(new A.aa(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.sau(D.bOU.aw(0,new A.aa(0,r,a3,q)))
d=p.H()
w.drawRect(A.c5(new A.aa(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.jb
d=p.H()
w.drawRect(A.c5(new A.aa(0,q,a3,q+14)),d)
d.delete()}w=A.L()
w.r=D.b4T.j(0.72).gp(0)
a5.aX(new A.aa(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.L()
a4.sau(new A.bR(B.A,0.5,B.x,a0,0,A.a([D.bbo.j(0.22),B.K],t),a0,a0).aw(0,A.bU(new A.u(w,a2),a1)))
a5.ag(new A.u(w,a2),a1,a4)},
aq(d){return!1}}
C.b8a.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.kG(new A.o(A.aq(D.k5,D.bfx,w/4),o,new A.bP(B.Y,new A.az(B.w.j(0.12),1,B.r,-1),B.Y,B.Y),B.Jn,o,o,B.n),B.bd,o,o),o))}v=x.V
u=A.a([new A.ad(0,B.G,B.w.j(0.35),B.aEy,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aV(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jG.j(0.6),o,o,new A.bs(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pH,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aUY,u,D.bQq,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ad(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aFb(o),D.eFw),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aSB(p.y,r,G.im,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.r,o,o,o,o,o,2,A.bo(o,B.ex,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.im.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.f29,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.im.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.w,o,o,o,o,o,2,A.bo(o,B.ex,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.im.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eUp,!0,B.a5,B.z0,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.f22,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.im.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.D(A.p(o,o,B.f,D.E_.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fo,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.E_.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.E_.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.az],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.im.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.WM(A.dp(A.a([A.dp(o,o,o,o,o,o,o,o,o,D.eXs,B.a.ap(k,0,1)),A.dp(o,o,o,o,o,o,o,o,o,o,B.a.b_(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.im.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.v(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.y,o,o,o,o,B.ah)}s.push(A.D(n,1))
s.push(new A.C(B.i7,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.im.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.D(A.p(o,A.bv(B.Jn,new A.an(B.W,o,B.aa,B.q,A.a([t,new A.C(D.bqQ,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.bX(o,new A.o(o,o,o,o,o,new A.a7(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.bd),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Jn,v,D.bQW,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.aa,B.q,l,o)}}
C.anX.prototype={
T(){return new C.aBI(A.a([],x._))},
bp(){return this.r.$0()},
pn(){return this.w.$0()},
gdX(){return this.c}}
C.aBI.prototype={
a_(){var w,v
this.a1()
this.vp()
w=this.a
v=w.c
if(v.length!==0)C.a60(v,w.e,w.d.w)},
ve(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ve=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fTf(r,t.e,!1,s.w,new C.dQ6(u),null,s),$async$ve)
case 2:w=3
return A.b(u.vp(),$async$ve)
case 3:return A.h(null,v)}})
return A.i($async$ve,v)},
Zr(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Zr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fTf(r,t.e,!0,s.w,new C.dQ5(u),null,s),$async$Zr)
case 2:w=3
return A.b(u.vp(),$async$Zr)
case 3:return A.h(null,v)}})
return A.i($async$Zr,v)},
vp(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vp=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Ab(q.a.c),$async$vp)
case 7:p=e
if(q.c!=null)n=q.e||J.cw(p)
else n=!1
if(n)q.m(new C.dQ8(q,p))
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
return A.b(C.FO(q.a.c).cM(0,B.pj),$async$vp)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dQ9(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dQa(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vp,v)},
NH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$NH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eJ7)
w=3
return A.b(C.FO(t.a.c),$async$NH)
case 3:r=e
w=4
return A.b(C.fzb(t.a.c,r),$async$NH)
case 4:q=e
w=5
return A.b(C.FO(t.a.c),$async$NH)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dQ4(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ac(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dv:B.cR,null,B.q,null,s,null,B.m6,null,null,null,null,null,null,null,null,null,null))
t.a.pn()
case 1:return A.h(u,v)}})
return A.i($async$NH,v)},
Hd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i_2(l),$async$Hd)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.htT(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aYb(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Hd)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hba(r)
o=Date.now()
n=t.a.c
m=new C.kt(l,r.toUpperCase(),p,!0,B.T,D.Bz,new A.R(o,0,!1),0,n,D.tj)
w=5
return A.b(C.a1w(n,m),$async$Hd)
case 5:w=6
return A.b(t.vp(),$async$Hd)
case 6:t.a.bp()
t.a.pn()
if(t.c==null){w=1
break}t.DN(m)
case 1:return A.h(u,v)}})
return A.i($async$Hd,v)},
DN(d){return this.ca_(d)},
ca_(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$DN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Ab(u.a.c),$async$DN)
case 2:n=l.qZ(k.dH(f,new C.dQ7(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.ht(m,new C.anR(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$DN)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a1w(u.a.c,o),$async$DN)
case 6:case 5:w=7
return A.b(u.vp(),$async$DN)
case 7:u.a.pn()
return A.h(null,v)}})
return A.i($async$DN,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=new C.tt(p)
if(r.e)return A.av(A.mA(q,p?B.bq:B.bp,q,q,q,q,q,q,q,q),q,q,q)
if(J.ck(r.d)){w=p?B.dW:B.c
v=A.m(15)
u=A.aF(!1,B.a1,!0,q,A.aK(!1,q,!0,A.p(q,D.bDP,B.f,q,q,new A.o(B.aU.j(0.12),q,A.I(B.aU,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc93(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.af)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.ET(A.p(q,A.v(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bp,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.e0,A.bJ(D.foF,r.gaOh(),A.bk(B.bT,q,q,q,q,q,Ag.XI,q,new A.b7(A.m(12),B.Y),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bqM,q,q,1/0),15,B.ag,1.05,D.a7w,q)}w=J.ac(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cw(r.d))w.push(A.aH(q,q,q,q,A.W(B.xY,B.aU,q,q,q,q),q,q,q,new C.dQc(r),q,q,q,q,"Sync family trees with database",q))
if(J.cw(r.d))w.push(A.aH(q,q,q,q,A.W(B.xP,B.aU,q,q,q,q),q,q,q,r.gadZ(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dq(E.alI,D.f5v,r.gaOh(),A.bk(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ac(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.ET(r.cvX(J.q(r.d,s),o),14,B.ag,1,D.a7w,q))
B.d.v(w,u)}return A.v(A.a([p,B.az,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cvX(d,e){var w=null,v=e.a,u=v?B.dW:B.c,t=A.m(14),s=A.I((v?B.dZ:B.bW).j(0.55),B.r,1),r=A.a([new A.ad(0,B.G,B.w.j(v?0.35:0.08),B.ei,10)],x.V),q=A.m(14),p=A.p(w,D.bCT,B.f,w,w,new A.o(B.aU.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gamR(),m=d.d?"":" \xb7 Public",l=d.y===D.kc?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bz,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aK(!1,q,!0,new A.C(B.bB,A.A(A.a([p,B.bf,l,A.W(B.LY,v?B.bq:B.bp,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dQb(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.anR.prototype={
T(){return new C.aBF(A.a([],x._),A.aX(x.N),A.b5P())},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aBF.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.aaV()
w=u.a
v=w.c
if(v.length!==0)C.a60(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a1j(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xh("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPx(r),s,null,!0,!0,x.y),$async$a1j)
case 3:if(e!==!0||t.c==null){w=1
break}t.IH()
t.m(new C.dPy(t,r))
w=4
return A.b(t.vg(),$async$a1j)
case 4:t.a.bp()
t.xh(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a1j,v)},
cm5(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.dPs(w,f,d,e))},
aQr(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dl()
u.e2(w,v,0,1)
u.js(q,q,1,1)
this.w.sp(0,u)},
b6S(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eE(new Float64Array(16))
q.dY(r)
w=q.C_()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dl()
t.e2(r,u,0,1)
t.js(v,v,1,1)
t.e2(-r,-u,0,1)
t.im(0,q)
s.sp(0,t)},
aaV(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aaV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Ab(u.a.c),$async$aaV)
case 2:t=s.qZ(r.dH(e,new C.dP0(u)))
if(t!=null&&u.c!=null)u.m(new C.dP1(u,t))
return A.h(null,v)}})
return A.i($async$aaV,v)},
xh(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
ve(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$ve=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fTf(o,t,!1,r,new C.dPf(u),q.a,s),$async$ve)
case 2:n=A
m=J
w=3
return A.b(C.FO(u.a.c),$async$ve)
case 3:p=n.qZ(m.dH(e,new C.dPg(u)))
if(p!=null&&u.c!=null)u.m(new C.dPh(u,p))
return A.h(null,v)}})
return A.i($async$ve,v)},
IH(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cz(w,0)},
vg(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a1w(t,s),$async$vg)
case 2:return A.h(null,v)}})
return A.i($async$vg,v)},
a_X(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tF(q,t.a.c)){t.xh("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i0c(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a_X)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.IH()
t.m(new C.dPr(t,r))
w=4
return A.b(t.vg(),$async$a_X)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_X,v)},
ZF(){return this.ca1()},
ca1(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tF(q,t.a.c)){t.xh("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.M(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPp(r,new C.tt(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$ZF)
case 3:if(e!==!0||t.c==null){w=1
break}t.IH()
t.m(new C.dPq(r,t))
w=4
return A.b(t.vg(),$async$ZF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZF,v)},
UL(d){return this.bw8(d)},
bw8(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tF(r,t.a.c)){t.xh("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dOP(t,d),r,null,!0,!0,x.P),$async$UL)
case 3:s=f
if(s==null){w=1
break}t.IH()
t.m(new C.dOQ(t,s))
w=4
return A.b(t.vg(),$async$UL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$UL,v)},
a1F(d){return this.cy1(d)},
cy1(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a1F=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.M(s)
t=u.c
t.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dPA(u,d,new C.tt(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a1F)
case 2:return A.h(null,v)}})
return A.i($async$a1F,v)},
c6k(d){var w=this,v=w.d
v===$&&A.c()
if(C.tF(v,w.a.c))w.Nm(d)
else w.a1F(d)},
agr(d,e){return this.cpX(d,e)},
cpX(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$agr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.M(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.dPu(new C.tt(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$agr)
case 3:case 1:return A.h(u,v)}})
return A.i($async$agr,v)},
Hi(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Hi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kc?3:5
break
case 3:w=6
return A.b(C.fHk(t.a.c),$async$Hi)
case 6:s=e
o=t.a
r=C.h_S(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.agr(!s,!r),$async$Hi)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bze(o,t.a.c)){t.xh("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kV(o,"Cancel","Remove",q.y===D.kc?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Hi)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aNc(t.a.c,t.d.a),$async$Hi)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iK(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Hi,v)},
a8w(d){return this.bH6(d)},
bH6(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a8w=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tF(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b8(s,new C.dOR(p))){o=A.S(s)
p.a=A.qZ(new A.cQ(new A.a2(s,new C.dOS(d),o.k("a2<1>")),new C.dOT(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.IH()
t.m(new C.dOU(t,s,d,q))
w=3
return A.b(t.vg(),$async$a8w)
case 3:t.xh(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a8w,v)},
Nm(d){return this.bJ6(d)},
bJ6(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Nm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tF(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a1F(d),$async$Nm)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.dOY(t,d),r,null,!0,!0,x.P),$async$Nm)
case 6:s=f
if(s==null){w=1
break}t.IH()
t.m(new C.dOZ(t,s))
w=7
return A.b(t.vg(),$async$Nm)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Nm,v)},
cwg(){var w=this,v=w.d
v===$&&A.c()
if(!C.tF(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dPz(w))
w.vg()},
Xy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Xy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bze(n,t.a.c)){t.xh("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.M(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bl(new A.J(q,t.gc4Q(),A.S(q).k("J<1,n>")).bY(0,new C.dPa()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dPb(t,new C.tt(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$Xy)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.IH()
t.m(new C.dPc(t,p))
w=4
return A.b(t.vg(),$async$Xy)
case 4:t.xh("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Xy,v)},
c4R(d){return B.a.i(d.toLowerCase())},
c8P(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tF(v,w)
t=r.d
s=C.hQy(t)
C.i_6(q,t.b,u,C.hQx(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.tt(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a2(l,new C.dPH(),A.S(l).k("a2<1>")).gM(0)
l=n?B.bV:B.iH
v=A.W(B.YS,n?B.bq:B.bp,o,o,o,18)
u=x.p
v=A.a([new A.C(B.As,A.aK(!1,o,!0,new A.C(B.hG,A.A(A.a([v,B.bo,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dPI(p,d),o,o,o,o,o,o,o),o),new A.C(B.mR,p.bTO(m),o)],u)
if(p.d.y===D.kc){t=B.r_.j(0.15)
s=A.m(12)
r=A.I(B.r_.j(0.45),B.r,1)
q=C.FM(p.d,p.a.c)
v.push(new A.C(B.x7,A.p(o,A.A(A.a([D.bI2,B.aw,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.j4,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.tF(p.d,p.a.c)&&p.e.length!==0)u.push(new C.J2("Undo",B.qP,p.gcwf(),m,o,o))
u.push(new C.J2("Family Book",D.bxA,p.gc8O(),m,B.rN,o))
if(C.tF(p.d,p.a.c))u.push(new C.J2("Display settings",B.Bb,p.gca0(),m,B.aZ,o))
u.push(new C.J2("Sync",B.xP,p.gadZ(),m,o,o))
t=p.d
if(t.y===D.kc||C.bze(t,p.a.c)){t=p.d.y===D.kc?"Remove shared tree":"Delete tree"
u.push(new C.J2(t,B.e4,p.gbHg(),m,B.fU,o))}if(C.tF(p.d,p.a.c))u.push(new C.J2("Add member",B.ve,new C.dPJ(p),m,B.bT,o))
v.push(new A.C(P.afP,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gamR()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cm(new C.dPK(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.W(n?L.YW:V.LZ,o,o,o,o,o)
v.push(A.av(A.hb(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dPL(p),o),o,o,o))}return A.cb(o,l,A.bp(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bTO(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ad(0,B.G,B.fu.j(0.35),B.dn,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.xH,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aK(!1,m,!0,A.p(m,D.bL4,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gadZ(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.af)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eSN,m,m,m)
r=r.gamR()
p=n.d.gamR()===1?"member":"members"
o=x.p
p=A.a([s,B.bf,A.D(A.v(A.a([q,B.bz,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tF(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bIe,m,m,m,n.gcjx(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j8:B.me
r=r?"Private":"Public"
r=A.D(n.at8(q,"Privacy",r,n.a.d.w?n.gcvl():m),1)
q=A.D(n.at8(B.xQ,"Tree code",n.d.c,new C.dP_(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.D(n.at8(D.bzi,"Collaborators",p,n.gbYd()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kc){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aF(!1,B.a1,!0,A.m(999),A.aK(!1,A.m(999),!0,new A.C(B.fG,A.A(A.a([A.W(B.ou,B.c,m,m,m,14),B.eb,A.d("View only",m,m,m,m,m,m,B.aNr,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.af)],o))}return A.p(m,A.bv(u,new A.an(B.W,m,B.aa,B.q,A.a([t,new A.C(B.EE,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bOY,B.n),m,m,m,m,m,m,m,1/0)},
at8(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.m(14),A.aK(!1,A.m(14),!0,new A.C(H.agW,A.v(A.a([A.W(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.u9,A.d(f,w,1,B.a2,w,w,w,H.Ia,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.af)}}
C.bcn.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gal(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bcq(s,t),new A.at(w,v))],x.p)
r=r.gdL(r)
B.d.v(u,r.dt(r,new C.d3t(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d3u(this),A.S(r).k("J<1,r>")))
return new A.C(B.tf,new A.a6(w,v,new A.an(B.W,t,B.aa,B.f,u,t),t),t)}}
C.Jf.prototype={}
C.F5.prototype={}
C.bcp.prototype={
gbf6(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aHg.prototype={}
C.bcq.prototype={
bIP(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.X()
v=A.L()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bA(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aQ(q.r,B.ap,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pn(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pn(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bF())
q=A.L()
q.r=B.c.gp(0)
d.ag(new A.u(u,w),9,q)
q=A.L()
q.r=B.bA.gp(0)
d.aN(t,q)},
bIN(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b1(a0,new C.d3O())
w=f.b
v=w+(B.d.gL(a0).b-w)/2
u=B.d.b8(a0,new C.d3P(f))
t=new A.J(a0,new C.d3Q(f),A.S(a0).k("J<1,N>")).bY(0,new C.d3R()).cH(0,1/0,B.wn)
w=f.a
d.bA(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lM(m)
i=Math.min(10,l/2)
l=$.X()
h=A.a([],q)
g=new A.aQ(l.r,B.ap,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cS(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cS(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbI().a.snapshot()
r.drawPath((g.e=new A.cF(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.X()
w=A.L()
w.r=B.bT.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bO
w.e=B.fy
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bIN(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bIP(d,w,q.a,q.b)}},
aq(d){return d.b!==this.b}}
C.bg4.prototype={
gc2G(){var w=this.c
if(B.a.i(w.y).length!==0)return D.daS
switch(w.c.a){case 0:return D.cGp
case 1:return D.cR9
case 2:return D.d5v}},
gc2J(){var w=this.c,v=C.hay(w.w),u=C.hay(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=t.gc2G(),p=t.c,o=K.bA8(p.f),n=t.gc2J(),m=x.V,l=A.a([new A.ad(0,B.G,B.d.gam(q).j(0.35),B.cJ,10)],m),k=r?B.aA:B.c,j=A.I(r?B.aA:B.c,B.r,2)
if(o!=null)w=A.rU(B.A,s,B.cn,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gL(q).j(0.18),B.d.gam(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gam(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a7(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hR(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a7(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.EU,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.aA:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.f1F,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.bsB,s,s,s),s,s,s,-6,-4,s))}k=r?B.cC:B.c
j=A.m(8)
w=A.I(B.d.gL(q).j(0.35),B.r,1)
m=A.a([new A.ad(0,B.G,B.w.j(r?0.3:0.06),B.dz,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cC,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bp,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a6(84,112,A.v(A.a([new A.an(B.W,s,B.aa,B.f,l,s),B.au,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aWR,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bsM,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a9)}}
C.bbv.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.X()
w=A.L()
v=this.b
u=v?B.c:D.b7r
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
aq(d){return d.b!==this.b}}
C.btC.prototype={
B(d){var w=this,v=null,u=new C.f3g(w),t=w.c,s=t?B.cC:B.c,r=A.m(12),q=u.$3(B.hv,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bF:B.f7,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xM,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bF:B.f7,v,v,v,1,v,v,v,v,v,22),u.$3(B.ajf,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.af)}}
C.bjp.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.I(B.bT,B.r,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.W(s?L.YW:V.LZ,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eZ2,v,v,v)],r),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a9)
u=A.a([t,B.ao,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eX2,B.L,v,v)],r)
if(s){t=A.a([B.ao],r)
s=w.d
B.d.v(t,new A.J(s,new C.eFA(w),A.S(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a6(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.YQ.prototype={
T(){return new C.aA6()},
bp(){return this.Q.$0()},
gdX(){return this.w}}
C.aA6.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aO()
r.d=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ar(new A.bb(t,B.b1,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xl:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hS4(w.r,w.f)
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
OF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$OF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h_S(p.y,p.w)
w=3
return A.b(A.l7(t.a.w,B.Hh),$async$OF)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aYb(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$OF)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.htU(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(Ai.FX(78,800),$async$OF)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.djE(t,q))
case 1:return A.h(u,v)}})
return A.i($async$OF,v)},
c2I(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hT(B.o.u(1000*Date.now()),w,D.xl,null,null,null,"","","","","",1,!1,0)
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
s=v.aBQ(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a5(k,!1).N(s)},
a87(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a87=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.djD(r),s,null,!0,!0,x.y),$async$a87)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a5(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a87,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H,i=new C.tt(j),h=l.a.e,g=A.S(h).k("a2<1>"),f=A.B(new A.a2(h,new C.djN(l),g),g.k("H.E"))
h=j?B.dW:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.br7,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hm(A.aK(!1,k,!0,new A.C(B.lB,A.W(B.e4,B.oh,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbDX(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jl:B.iK
t=K.bA8(l.as)
if(l.as==null)s=A.W(B.on,j?B.bq:B.bp,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.aa,B.q,A.a([A.ho(u,t,s,k,42),A.ao(0,A.ho(B.bT,k,D.bBX,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc2F(),k,k,k,k,k,k,!1,B.a9),k,k,k)
t=l.d
t===$&&A.c()
t=C.aA8(t,"Full name",B.mb,1,1,i,B.lP)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bg2(i,u,new C.djO(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bkI],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.djP(),A.S(o).k("J<1,eN<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bkK],q)
B.d.v(q,new A.J(f,new C.djR(),A.S(f).k("J<1,eN<n?>>")))
o=A.v(A.a([t,B.ao,new C.abO(i,r,"Who is their parent?",p,new C.djS(l),k,o),B.az,n,B.ao,new C.abO(i,m,"Who is their spouse / partner?",q,new C.djT(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aA8(q,"Birth date",D.aij,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aA8(m,"Birth place",B.Za,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aA8(n,"Date of death (if deceased)",D.akz,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aA8(p,"Occupation",B.a_e,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.q,w,k),B.az,s,B.bu,new C.abP(i,"Identity",u,k),B.ac,new C.abP(i,"Family links",o,k),B.ac,new C.abP(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aA8(r,"Notes",B.kF,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aA7(i,"Child order",l.cae(l.at),new C.djU(l),new C.djV(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fQE(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.djW(l):k
B.d.v(r,A.a([B.S,new C.aA7(i,"Visible in tree",u,w,new C.djX(l),k)],v))}r.push(B.S)
w=j?B.jl:B.iK
u=A.m(14)
t=A.I(j?B.dZ:B.bW,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iB(k,B.bT,k,B.ag,k,new C.djY(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,L.afq,k,k,k))
r.push(B.bu)
w=j?B.aP:B.aA
j=j?B.dZ:B.bW
r.push(A.A(A.a([A.D(A.dW(B.nc,new C.djQ(d),A.dd(k,k,k,k,k,k,k,k,k,w,k,k,B.cf,k,new A.b7(A.m(14),B.Y),new A.az(j,1,B.r,-1),k,k,k,k)),1),B.bf,A.D(A.bJ(D.eBX,l.gc2H(),A.bk(B.aU,k,k,0,B.c,k,B.cf,k,new A.b7(A.m(14),B.Y),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.eh(B.h8,k,B.ag,h,new A.a6(420,k,A.cd(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ah),k),D.agi,k,B.afG,new A.b7(g,B.Y),k,k)},
cae(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.abP.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jl:B.iK,s=A.m(16)
return A.v(A.a([new A.C(D.agG,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dZ:B.bW,B.r,1),s,w,w,B.n),w,w,w,w,B.bl,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bg3.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dW:B.c,r=A.m(12),q=A.I((t?B.dZ:B.bW).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aL(u,B.T,!1,u,!0,B.q,u,A.aM(),v.d,u,u,u,u,u,2,A.bo(u,B.ex,u,B.uU,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bp,u,u,u,u,u,u,u,u,u,u,u,B.cs,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.abO.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dW:B.c,s=A.m(12),r=A.I((u?B.dZ:B.bW).j(0.85),B.r,1),q=A.W(B.qJ,u?B.bq:B.bp,v,v,v,v),p=A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dW:B.c
return A.p(v,new A.D1(A.a39(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bp,v,v,v,v,v,v,v,v,v,v,v,B.cs,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.l2,v,v,v)}}
C.bg2.prototype={
B(d){var w=new C.djZ(this)
return A.A(A.a([w.$3(D.Yv,"Male",B.MK),B.ab,w.$3(D.ahy,"Female",B.Mv),B.ab,w.$3(D.xl,"Other",B.mX)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aA7.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jl:B.iK,r=A.m(14),q=A.I(t?B.dZ:B.bW,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bp,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aGj(u,B.xM,w.f,v),B.bo,new C.aGj(u,B.hv,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ev,v,v,v)}}
C.aGj.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.dW:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bT
else t=(s.c.a?B.bq:B.bp).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,new A.a6(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.af)}}
C.abQ.prototype={
bMt(d){switch(d.a){case 0:return B.bT
case 1:return B.bA
case 2:return B.cU}},
bMu(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aUA(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zD(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dW:B.c
u=A.m(12)
t=A.I((w?B.dZ:B.bW).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.W(f,B.bT,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bp,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cG,B.x4,p,p,1/0)},
act(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jl:B.iK,s=A.m(16),r=A.I(v?B.dZ:B.bW,B.r,1)
return A.v(A.a([new A.C(D.agG,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hff(r,q),o=q.c,n=t.bMt(o),m=K.bA8(q.f),l=t.e.a,k=l?B.dW:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kc?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bp,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.r,3)
v=A.a([new A.ad(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.ho(u,m,m==null?A.W(B.on,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.em,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.r,1)
v=A.av(A.p(s,A.d(t.bMu(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.m9,s,s,s),s,s,s)
u=x.p
i=A.a([t.zD("Full name",i,B.mb)],u)
if(p>0)i.push(t.zD("Child order","#"+p,B.MC))
r=A.a([h,B.au,r,B.aO,l,B.S,v,B.bu,t.act("Identity",i),B.ac,t.act("Life details",A.a([t.zD("Birth date",q.w,D.aij),t.zD("Birth place",q.x,B.Za),t.zD("Date of death",q.y,D.akz),t.zD("Occupation",q.z,B.a_e)],u)),B.ac,t.act("Family links",A.a([t.zD("1. Parent",t.aUA(q.d),B.F7),t.zD("2. Spouse",t.aUA(q.e),B.Mu)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.act("Notes",A.a([t.zD("Notes",q,B.kF)],u))],u))
r.push(B.bu)
r.push(A.bJ(B.Ix,new C.dk8(d),A.bk(B.aU,s,s,s,s,s,B.cf,s,new A.b7(A.m(14),B.Y),s,s,s)))
return A.eD(s,k,new A.cU(B.lp,A.cd(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.q,s,B.y,s,B.x9,s,s,B.ah),s),s,s,s,B.EH,B.cZ,s,new A.b7(j,B.Y),s)}}
C.J2.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bp
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.xd,A.hm(A.aF(!1,B.a1,!0,A.m(8),A.aK(!1,A.m(8),!0,new A.a6(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.af),u,v.c,u,u),u)}}
C.anU.prototype={
eJ(){var w,v,u=this,t=x.N,s=A.V(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a5().ac())
w=u.c
v=A.S(w).k("J<1,a4<n,@>>")
w=A.B(new A.J(w,new C.c5O(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iN(w,new C.c5P(),t,x.U))
return s}}
C.anV.prototype={
T(){return new C.aBH(A.a([],x.bF))},
gd8(){return this.c}}
C.aBH.prototype={
a_(){this.a1()
this.IO()},
IO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$IO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c5S(t.a.c),$async$IO)
case 3:r=e
w=4
return A.b(C.Ab(t.a.c),$async$IO)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qE(q,new C.dPU(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dPV(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$IO,v)},
xO(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Jw(d,e){return this.cyy(d,e)},
cyy(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Jw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dPZ(q,e))
t=3
w=6
return A.b(d.$0(),$async$Jw)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dQ_(q))
$.eP.m7()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jw,v)},
Wo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oR(r,s.c,s.e),$async$Wo)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Jw(new C.dPR(t),"Preparing download\u2026"),$async$Wo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wo,v)},
Ws(d){return this.bKw(d)},
bKw(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ws=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oR(r,s.c,s.e),$async$Ws)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Jw(new C.dPS(t,d),"Preparing file\u2026"),$async$Ws)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ws,v)},
ael(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ael=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wK.c3().Lf(B.Pz,B.tk,!0),$async$ael)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gal(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jj(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a9(m)
$.am.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.FW()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ael,v)},
X2(d){return this.bUG(d)},
bUG(d){var w=0,v=A.j(x.H),u=this
var $async$X2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Jw(new C.dPT(u,d),"Restoring family trees\u2026"),$async$X2)
case 2:return A.h(null,v)}})
return A.i($async$X2,v)},
X1(){var w=0,v=A.j(x.H),u,t=this,s
var $async$X1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ael(),$async$X1)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.X2(s),$async$X1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X1,v)},
a0M(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oR(r,s.c,s.e),$async$a0M)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Jw(new C.dPY(t),"Creating QR code\u2026"),$async$a0M)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0M,v)},
a0o(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Ck()){t.xO("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a5(s,!1).ci(A.em(new C.dPW(),!0,null,x.N)),$async$a0o)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.X2(r),$async$a0o)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0o,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=o?B.zV:B.iH,m=o?D.adZ:B.aP,l=o?B.aK:B.bW,k=o?B.aP:B.aA,j=new C.d3S(n,m,l,k,o?B.bI:B.bp)
l=A.aH(p,p,p,p,A.W(B.eA,k,p,p,p,20),p,p,p,new C.dQ1(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eC(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d3q(!0,B.ja,B.aX,B.aX,q.r?p:q.gcpL(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gcm0()
t.push(A.D(C.d3q(!s,B.iO,B.b4,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d3q(!1,B.hx,B.aU,B.bT,q.r?p:q.gbKp(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d3q(!1,N.xT,B.aJ,B.aM,q.r?p:q.gbUD(),j,s,"Upload backup file"),1))
l=A.a([new C.bco(v,l,p),B.kn,new C.ab6(j,"QR restore",p),B.S,t,B.d6,new C.ab6(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ac(q.d)>1&&q.a.f==null){v=A.a([B.kn,new C.ab6(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dQ2(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cB(l,p,B.XE,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aU.j(0.35),B.r,1)
s=A.a([new A.ad(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bp(!0,A.p(p,A.A(A.a([L.aLV,B.bf,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Ay,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.cb(w,n,new A.an(B.W,p,B.aa,B.q,l,p),p,!1,!1,p,p)}}
C.d3S.prototype={}
C.bco.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ad(0,B.G,B.aU.j(0.32),B.jV,28)],x.V)
t=A.ao(p,A.W(B.tB,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.aa,B.q,A.a([t,new A.C(B.a8,A.A(A.a([A.p(p,D.bKD,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nW,A.D(A.v(A.a([D.f6s,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bS6,B.n),p,p,p,p,p,p,p,p)}}
C.ab6.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aU,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bcm.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aX.j(0.4):m.c
k=A.I(k,B.r,l?1.5:1)
l=l?A.a([new A.ad(0,B.G,B.aX.j(0.1),B.cJ,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.r,1)
return A.aF(!1,B.a1,!0,q,A.aK(!1,o,!0,A.ex(A.db(new A.C(E.Xi,A.v(A.a([A.p(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qE,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bz,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cs,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.af)}}
C.bcr.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.r,1),q=B.aU.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.ex(new A.C(B.eP,A.A(A.a([A.p(v,D.bJR,B.f,v,v,new A.o(q,v,A.I(B.aU.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qE,v,v,v),B.bf,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.W(B.hx,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.af)}}
C.Za.prototype={
T(){return new C.aBG()},
gd8(){return this.c}}
C.aBG.prototype={
a_(){this.a1()
this.a7E()},
a7E(){var w=0,v=A.j(x.H),u=this,t
var $async$a7E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b_O(u.a.c,B.C9),$async$a7E)
case 2:t=e
if(u.c!=null)u.m(new C.dPM(u,t))
return A.h(null,v)}})
return A.i($async$a7E,v)},
afI(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$afI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dPN(q))
t=4
p=A.h1w(q.a.d,B.C9)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.T(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aq9(n.e,m,l,B.C9,p,n.f),$async$afI)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dPO(q))
q.c.I(x.q).f.R(D.eKg)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a9(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(B.a.e7(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dPP(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afI,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=p?B.iZ:B.pd,n=p?B.i4:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eC(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.flw,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aU.j(0.35),B.r,1)
u=A.py(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aU,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bu,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b9,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gclJ()
if(u)u=B.I4
else u=A.W(r.e===!0?B.hw:B.aii,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a6(1/0,q,A.ez(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.dd(q,q,q,q,q,q,q,q,q,B.aU,q,B.fL,q,q,q,new A.az(B.aU.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.i7,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.ay:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a6(1/0,q,A.bJ(B.z7,new C.dPQ(d),A.bk(B.aU,q,q,q,q,B.fL,q,q,q,q,q,q)),q))
return A.cb(m,o,new A.C(B.a8,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Zb.prototype={
T(){return new C.bhw(A.yK(B.wV,B.nj,B.tG))}}
C.bhw.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.cb(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fe0,w,w,w,1,w,!0),B.w,A.yJ(this.d,B.bQ,new C.dQ3(this,d)),w,!1,!1,w,w)}}
C.aWK.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.P3,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lr.prototype={}
C.a52.prototype={
T(){return new C.bhd(null,null)}}
C.bhd.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.t9,v,1,v,w)
w.e=A.bj(v,B.pi,v,1,v,w)
w.a.toString
w.d.cG(0)
w.e.cG(0)},
br(d){var w,v,u=this
u.bE(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cG(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cG(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.brC()},
B(d){var w,v,u=this,t=B.d.dN(D.a1P,new C.dBF(u),new C.dBG())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cqY(A.c6(new A.h2(A.a([w,v],x.dS)),new C.dBH(u,t),null),!0)}}
C.bhc.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aYO(d,e)
break
case"house":p.lJ(d,e,D.cVz)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gec()
$.X()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ag(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lO(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Al(d,e,12)
p.xq(d,e,B.kX,5,14)
break
case"grocery":p.caX(d,e)
break
case"calculator":p.caE(d,e)
break
case"lumber":p.cb4(d,e)
break
case"kitchen":p.cb_(d,e)
break
case"landscape":p.lJ(d,e,D.cW3)
s=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cS(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cS(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.ap(t,w))
s.E(new A.ap(0,w))
s.E(new A.bF())
w=A.L()
w.r=B.ff.j(0.85).gp(0)
d.aN(s,w)
p.Al(d,e,8)
p.xq(d,e,B.iM,4,18)
break
case"plumbing":p.cbd(d,e)
break
case"electrical":p.lJ(d,e,D.d4P)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.X()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aX(new A.aa(0,0,0+e.a,0+e.b),u)
p.lO(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lO(d,e,B.lt.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Al(d,e,10)
break
case"store":p.cbm(d,e)
break
case"paint_remodel":p.cb8(d,e)
break
case"roofing":p.cbf(d,e)
break
case"warehouse":p.cbt(d,e)
break
case"vehicles":p.cbr(d,e)
break
case"farm":p.caR(d,e)
break
case"restaurant":p.cbe(d,e)
break
case"tools":p.cbp(d,e)
break
case"wallet":p.cbs(d,e)
break
case"concrete":p.caK(d,e)
break
case"blueprint":p.caC(d,e)
break
default:p.aYO(d,e)}},
lJ(d,e,f){var w,v=new A.aa(0,0,0+e.a,0+e.b)
$.X()
w=A.L()
w.sau(new A.a7(B.ax,B.aC,B.x,f,null,null).aw(0,v))
d.aX(v,w)},
lO(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gec()/2-h
$.X()
w=A.L()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bU(q,p)
r=w.H()
v.drawArc.apply(v,[A.c5(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xq(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gec()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
Al(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aYO(d,e){var w,v=this
v.lJ(d,e,D.d3D)
w=v.c
v.lO(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lO(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bIJ(d,e,B.hT,w)
v.xq(d,e,B.c.j(0.7),6,8)},
bIJ(d,e,f,g){var w,v,u,t,s,r,q,p
$.X()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c5(new A.aa(16,q,t,q+3)),p)
p.delete()}},
caX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lJ(d,e,D.cct)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=D.cTV[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lO(d,e,B.c.j(0.35),w,16)
j.xq(d,e,B.iM,5,12)},
caE(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lJ(d,e,D.ccA)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gec()
$.X()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ag(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ih(g,g,g,g,g,B.a5,B.ch,g,B.eq,B.cd)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cXy[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saV(0,new A.eo(r,g,g,B.cO,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eO()
p.a6(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ccC[o]
l=B.k3.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saV(0,new A.eo(m,g,g,B.cO,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eO()
p.a6(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.lO(d,e,B.c.j(0.35),w*1.5,14)
h.lO(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
h.lO(d,e,B.zW.j(0.4),r*2.8,22)
h.xq(d,e,B.p4,8,10)
h.Al(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.X()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cb4(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lJ(d,e,X.atU)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.by(new A.aa(20,q,u,q+10),B.hy)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=A.aq(B.fZ,B.o7,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.ep(p),n)
n.delete()}m.lO(d,e,B.fZ.j(0.35),w,15)
m.Al(d,e,8)},
cb_(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lJ(d,e,D.cUp)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.X()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lO(d,e,B.bJ.j(0.4),-w*3.141592653589793*2.2,11)
j.xq(d,e,B.qj,4,14)},
cbd(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lJ(d,e,D.cK2)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.X()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
n.b=B.ae
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xq(d,e,B.of,6,12)
l.lO(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cbm(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lJ(d,e,D.cpU)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.by(new A.aa(q,14,q+u,22),B.hO)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.f5,B.bJ,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.ep(q),o)
o.delete()}n.lO(d,e,B.c.j(0.3),w,16)
n.Al(d,e,8)
n.xq(d,e,B.uz,5,13)},
cb8(d,e){var w,v,u,t,s,r,q,p,o
this.lJ(d,e,D.cPB)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.by(new A.aa(q,p,q+8,p+(18+r*22)),B.hb)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=[B.ij,B.dx,B.bJ,B.er][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.ep(p),o)
o.delete()}this.lO(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cbf(d,e){var w,v,u,t,s,r,q,p,o
this.lJ(d,e,D.cNc)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xq(d,e,B.cm,7,11)},
cbt(d,e){var w,v,u,t,s,r,q,p,o,n
this.lJ(d,e,D.csx)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.by(new A.aa(p,o,p+(t-r*8),o+16),B.hy)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.cm,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.ep(o),n)
n.delete()}this.lO(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cbr(d,e){var w,v,u,t,s,r,q,p,o
this.lJ(d,e,D.d8w)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.by(new A.aa(r,q,r+28,q+8),B.hy)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.ep(q),o)
o.delete()}this.Al(d,e,6)},
caR(d,e){var w,v,u,t,s,r,q,p,o,n
this.lJ(d,e,D.cT4)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.X()
s=A.L()
s.r=B.lt.j(0.75).gp(0)
d.ag(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.h_.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lO(d,e,B.lt.j(0.35),w,14)},
cbe(d,e){var w,v,u,t,s,r,q,p,o=this
o.lJ(d,e,D.cVo)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.ct(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.X()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c5(r),p)
p.delete()}o.xq(d,e,B.qj,5,16)
o.Al(d,e,7)},
cbp(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lJ(d,e,D.d6d)
w=m.c
v=w*3.141592653589793
m.lO(d,e,B.o7.j(0.55),v*3,10)
m.lO(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.X()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.o7.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cbs(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lJ(d,e,D.d91)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.by(new A.aa(p,o,p+36,o+22),B.hO)
$.X()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
p.r=A.aq(B.iM,B.lt,q).gp(0)
n=p.H()
s.drawRRect(A.ep(o),n)
n.delete()}m.Al(d,e,9)
m.lO(d,e,B.c.j(0.4),w*2.2,12)},
caK(d,e){var w,v,u,t,s,r,q,p,o,n
this.lJ(d,e,D.d_9)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.u(v,u),34)
$.X()
s=A.L()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.fg(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Z)
o.r=B.bW.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
caC(d,e){var w,v,u,t,s,r,q,p
this.lJ(d,e,D.cWk)
$.X()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.X()
u=A.L()
u.r=B.dx.j(0.45).gp(0)
d.aX(new A.aa(0,p,0+v,p+6),u)
this.lO(d,e,B.kX.j(0.45),-t*3.141592653589793*2,11)},
aq(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aqR.prototype={
Z3(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Z3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aO7(),$async$Z3)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a7h(s),$async$Z3)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Z3,v)},
aem(d){return this.cdI(d)},
cdI(d){var w=0,v=A.j(x.H),u=this,t
var $async$aem=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i_g(d),$async$aem)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aem,v)},
B(d){var w,v,u,t=null,s=A.M(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.jl:B.iK
w=x.p
v=A.a([C.aOv(!0,B.qb,1/0,B.pq,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bX(new A.bI(B.b0,t,t,new A.C(B.uN,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.auO,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a7(B.b0,B.b5,B.x,u,t,t),B.n),B.bd))}v.push(A.ao(8,A.A(A.a([A.D(A.dq(D.bDI,D.f2U,new C.cdl(this,d),A.bk(B.aU,t,t,t,B.c,t,B.jp,t,t,t,t,B.c7)),1),B.ab,A.D(A.ez(D.bLQ,D.fh_,this.gc4O(),A.dd(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jp,t,t,D.aVn,t,t,t,B.c7)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fF(1.7777777777777777,A.aF(!1,B.a1,!0,B.qb,new A.an(B.W,t,B.b_,B.q,v,t),B.aq,s,0,t,t,t,t,t,B.af),t)}}
C.aJC.prototype={
aQ(){this.aY()
this.aW()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdF())
w.b2$=null
w.a2()}}
C.aRm.prototype={}
C.aRl.prototype={}
C.aPr.prototype={}
C.XP.prototype={
T(){return new C.awW()}}
C.awW.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b1,B.aN)
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Jn(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.eKL)
return}t=u.c
t.toString
v=u.e
A.a5(t,!1).N(new C.aRm(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=m?B.dW:B.c,k=A.m(20),j=A.p(n,D.bLv,B.f,n,n,new A.o(B.aU.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bz,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bp,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bf,i,A.aH(n,n,n,n,A.W(B.cw,m?B.bq:B.bp,n,n,n,n),n,n,n,new C.cWB(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bp,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bp,n,n,n,n,n,n,n,n,11,n,n,B.cs,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h1M(new C.cWC(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.aA,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jl:B.iK
r=A.m(12)
q=A.m(12)
p=m?B.dZ:B.bW
t=A.aL(n,B.T,!0,n,!0,B.q,n,A.aM(),u,n,n,n,n,n,2,A.bo(n,new A.b4(4,r,B.df),n,n,n,n,n,n,!0,new A.b4(4,q,new A.az(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cWD(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,Z.I8,n,n,n,n)
u=m?B.aP:B.aA
m=m?B.dZ:B.bW
return A.eD(n,l,new A.cU(B.lp,A.cd(A.v(A.a([j,B.aO,i,B.au,w,B.P,v,B.aO,t,B.bu,A.A(A.a([A.D(A.dW(B.dd,new C.cWE(d),A.dd(n,n,n,n,n,n,n,n,n,u,n,n,B.cf,n,new A.b7(A.m(12),B.Y),new A.az(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.D(A.bJ(D.fhe,o.ga13(),A.bk(B.aU,n,n,n,B.c,n,B.cf,n,new A.b7(A.m(12),B.Y),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.q,n,B.y,n,B.Az,n,n,B.ah),n),n,n,n,U.AA,B.cZ,n,new A.b7(k,B.Y),n)}}
C.XO.prototype={
T(){return new C.awV()}}
C.awV.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aO()
this.d=new A.ar(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Jn(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.eIs)
return}v=this.c
v.toString
A.a5(v,!1).N(new C.aRl(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.M(d).ax.a===B.H,o=p?B.dW:B.c,n=A.m(20),m=A.p(q,D.bI7,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bz,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bp,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bf,l,A.aH(q,q,q,q,A.W(B.cw,p?B.bq:B.bp,q,q,q,q),q,q,q,new C.cWx(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aU.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aU.j(0.25),B.r,1)
u=A.W(B.ai4,B.aU.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.aw,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.aA,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jl:B.iK
t=A.m(12)
s=A.m(12)
r=p?B.dZ:B.bW
v=A.aL(q,B.T,!0,q,!0,B.q,q,A.aM(),w,q,q,q,q,q,2,A.bo(q,new A.b4(4,t,B.df),q,q,q,q,q,q,!0,new A.b4(4,s,new A.az(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cWy(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.ko,q,q,q,q)
w=p?B.aP:B.aA
p=p?B.dZ:B.bW
return A.eD(q,o,new A.cU(B.lp,A.cd(A.v(A.a([m,B.aO,l,B.az,v,B.bu,A.A(A.a([A.D(A.dW(B.dd,new C.cWz(d),A.dd(q,q,q,q,q,q,q,q,q,w,q,q,B.cf,q,new A.b7(A.m(12),B.Y),new A.az(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.D(A.bJ(D.fnG,this.ga13(),A.bk(B.bT,q,q,q,B.c,q,B.cf,q,new A.b7(A.m(12),B.Y),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.Az,q,q,B.ah),q),q,q,q,U.AA,B.cZ,q,new A.b7(n,B.Y),q)}}
C.Xm.prototype={
T(){return new C.avF()}}
C.avF.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aO()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aO()
v.e=new A.ar(new A.bb("1",B.b1,B.aN),w)
v.f!==$&&A.aO()
v.f=new A.ar(B.as,w)
v.r!==$&&A.aO()
v.r=new A.ar(B.as,w)},
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
gIJ(){var w,v=this.e
v===$&&A.c()
w=A.d3(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gahu(){var w=this.f
w===$&&A.c()
w=A.d3(B.a.i(w.a.a))
return w==null?0:w},
gb0C(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aM0(d){var w,v=B.k.D(this.gIJ()+d,0.25,999999),u=B.k.jK(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.O(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saV(0,u)
this.m(new C.cua())},
avM(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aU,w,w,w,20):w,u=d.a,t=u?B.jl:B.iK,s=A.m(14),r=A.m(14)
u=u?B.dZ:B.bW
return A.bo(w,new A.b4(4,s,B.df),w,B.bB,w,w,w,w,!0,new A.b4(4,r,new A.az(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a8W),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c4P(d,e,f){return this.avM(d,e,f,null)},
Jn(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gahu()<=0){s.c.I(x.q).f.R(D.eMC)
return}r=s.c
r.toString
v=s.gIJ()
u=s.gahu()
t=s.gb0C()
A.a5(r,!1).N(new C.aPr(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.tt(n),l=n?B.dW:B.c,k=A.m(24),j=x.O,i=A.a([B.aU.j(0.22),B.bT.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bBE,B.f,o,o,new A.o(o,o,A.I(B.aU.j(0.35),B.r,1),h,o,new A.a7(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bz,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,12,o,o,B.cs,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bf,h,A.aH(o,o,o,o,A.W(B.cw,n?B.bq:B.bp,o,o,o,o),o,o,o,new C.cug(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aL(o,B.T,!0,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.avM(m,"Item name (optional)","Lumber, paint, labor\u2026",B.MI),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,Z.I8,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jl:B.iK
t=A.m(14)
s=A.I(n?B.dZ:B.bW,B.r,1)
r=A.aH(o,o,o,o,A.W(B.xM,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cuh(p),o,o,o,o,o,B.c7)
q=p.e
q===$&&A.c()
q=A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),q,o,o,o,o,o,2,D.bNm,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dT,o,o,o,1,o,o,!1,"\u2022",o,new C.cui(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a6(52,o,q,o),A.aH(o,o,o,o,A.W(B.hv,n?B.aP:B.aA,o,o,o,20),o,o,o,new C.cuj(p),o,o,o,o,o,B.c7)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.aw,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),t,o,o,o,o,o,2,p.avM(m,"Amount","0.00",B.hX),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.dT,o,o,o,1,o,o,!1,"\u2022",o,new C.cuk(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.J(D.cQ2,new C.cul(p,m),t),t.k("aj.E"))
i=A.a([i,B.bu,v,B.az,h,B.P,s,B.ac,A.c4(B.bE,u,B.bx,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.c4P(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cum(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.ko,o,o,o,o)],w))}i.push(B.aO)
h=B.aU.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aU.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gIJ()===B.k.jK(p.gIJ())?B.k.O(p.gIJ()):p.gIJ()
s=p.gb0C()
r=A.Ad(p.gahu())
i.push(A.p(o,A.A(A.a([A.D(A.v(A.a([u,B.au,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bp,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bAV(p.gIJ()*p.gahu(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a7(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.j5,o,o,o))
i.push(B.bu)
j=A.m(14)
h=n?B.dZ:B.bW
h=A.dd(o,o,o,o,o,o,o,o,o,o,o,o,B.cf,o,new A.b7(j,B.Y),new A.az(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.D(A.dW(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.aA,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cun(d),h),1),B.aw,A.D(A.dq(D.alB,D.fjR,p.ga13(),A.bk(B.aU,o,o,0,B.c,o,B.cf,o,new A.b7(A.m(14),B.Y),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eD(o,l,new A.cU(T.a9i,A.cd(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.q,o,B.y,o,A8.qD,o,o,B.ah),o),o,o,o,B.Lo,B.cZ,o,new A.b7(k,B.Y),o)}}
C.a_T.prototype={
T(){return new C.btu()}}
C.btu.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(new A.bb(w,B.b1,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?B.dW:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.aA,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jl:B.iK
v=A.aL(s,B.T,!0,s,!0,B.q,s,A.aM(),w,s,s,s,s,s,2,A.bo(s,new A.b4(4,A.m(12),B.df),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f2J(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dW(B.dd,new C.f2K(d),s),1)
r=A.bk(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eD(s,q,new A.C(B.Az,A.v(A.a([o,B.az,v,B.aO,A.A(A.a([u,B.aw,A.D(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f2L(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.cZ,s,new A.b7(p,B.Y),s)}}
C.aa9.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.ET.prototype={
T(){return new C.bts(null,null)}}
C.bts.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.blh,null,1,null,v)
w.cG(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.btX()},
gbvk(){switch(this.a.r.a){case 1:return A.a([B.aU,B.bT,B.aZ],x.O)
case 2:return A.a([B.bs,B.aU,B.aZ],x.O)
case 3:return A.a([B.aX,B.c8,B.jH],x.O)
case 4:return A.a([B.ht,B.bT,B.f6],x.O)
case 0:return A.a([B.aU,B.bT,B.aZ],x.O)}},
B(d){var w=A.M(d),v=this.d
v===$&&A.c()
return new A.et(A.c6(v,new C.f2H(this,new C.tt(w.ax.a===B.H)),null),null)}}
C.avy.prototype={
T(){return new C.btt(null,null)}}
C.btt.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mO,null,1,null,v)
w.cG(0)
v.d!==$&&A.aO()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.btY()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f2I(this),null)}}
C.btr.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.by(new A.aa(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aV(w,w))
u=new A.aQ($.X().r,B.ap,null,null,A.a([],x.v))
u.E(new A.iS(v))
w=A.L()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aD(v,w)
w=A.L()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aN(u,w)
w=A.wI(u)
t=A.a([],x.f5)
w=new A.vg(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jP('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.GJ(w,r)
w.jc()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aPk(d,q,r,o,0,0.2,4.2,0.92)
p.aPk(d,q,r,s,0.52,0.11,3.2,0.58)}},
aPk(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hna(e.a.a,e,t,t+f*i,!0),r=A.bzh(s.gbI().a.getBounds())
$.X()
w=A.L()
w.b=B.ae
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.sau(new A.a7(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Gk,null).aw(0,r))
d.aN(s,w)},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aLL.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.aLM.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.tt.prototype={}
C.aqQ.prototype={
T(){return new C.aDc()},
gdX(){return this.c}}
C.aDc.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.afc()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Kr(w,v)
this.a2()},
afc(){var w=0,v=A.j(x.H),u=this,t,s
var $async$afc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bzp(t.c,t.d.a),$async$afc)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eCK(u,s))
return A.h(null,v)}})
return A.i($async$afc,v)},
P4(){var w=0,v=A.j(x.H),u=this,t,s
var $async$P4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eCB(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Kr(t,s),$async$P4)
case 2:if(u.c!=null)u.m(new C.eCC(u))
return A.h(null,v)}})
return A.i($async$P4,v)},
PA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.M(p)
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.eCI(t,new C.tt(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$PA)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a7h(q),$async$PA)
case 6:case 5:t.m(new C.eCJ(t,r))
w=7
return A.b(t.P4(),$async$PA)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PA,v)},
UF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i_1(r),$async$UF)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eCw(t,new C.qI(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.P4(),$async$UF)
case 4:case 1:return A.h(u,v)}})
return A.i($async$UF,v)},
c9Q(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hfc(t,new C.eCA(u),w,v)},
a9p(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bP(new A.az(v,2.5,B.r,-1),B.Y,B.Y,new A.az(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aV9,w,w,B.n),w,22,w,w,w,w,w,22)},
a8v(d){return this.bH3(d)},
bH3(d){var w=0,v=A.j(x.H),u=this
var $async$a8v=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eCz(u,d))
w=2
return A.b(u.P4(),$async$a8v)
case 2:return A.h(null,v)}})
return A.i($async$a8v,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.M(a2).ax.a===B.H,e=f?B.bV:B.iH,d=A.m(8),a0=A.W(O.YT,f?B.bq:B.bp,g,g,g,16),a1=x.p
a0=A.aK(!1,d,!0,new A.C(B.EO,A.A(A.a([a0,B.bo,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bp,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eCL(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.q,A.a([A.bv(A.m(22),C.aOv(!0,A.m(22),1/0,B.pq,g,d,1/0),B.aq),A.ao(10,A.dq(D.bGc,D.fm_,h.gaZA(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h5,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ad(0,B.G,B.aU.j(f?0.5:0.38),B.eT,22),new A.ad(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ad(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.an(B.W,g,B.b_,B.q,A.a([C.aOv(!0,A.m(16),1/0,B.M9,g,r.c,1/0),A.bX(g,new A.o(g,g,g,g,g,new A.a7(B.b0,B.b5,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.bd),A.ao(g,h.a9p(!0),g,g,8,g,8,g),A.ao(g,A.crI(h.a9p(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.crI(h.a9p(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.crI(h.a9p(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dq(D.bCe,D.fg0,h.gaZA(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h5,g,new A.b7(A.m(12),B.Y),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bOJ,B.n),g,g,g,g,B.lB,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b4q,B.np,B.h2],u):A.a([B.aZ,B.aU,B.bT],u)
t=x.V
s=A.a([new A.ad(0,B.G,B.aU.j(f?0.45:0.35),B.eT,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.jt,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h3,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.az,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ao,C.bAV(h.d.gwt(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cs,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.h1.j(0.75),B.r,1.6)
t=A.a([new A.ad(0,B.G,B.aX.j(0.28),B.cJ,14)],t)
j=B.aX.j(0.22)
i=A.m(10)
u=A.p(g,A.bv(r,new A.an(B.W,g,B.aa,B.q,A.a([p,new A.C(D.bpU,A.A(A.a([o,B.aw,A.aF(!1,B.a1,!0,g,A.aK(!1,n,!0,A.ex(new A.C(Ad.Xh,A.v(A.a([A.p(g,D.ala,B.f,g,g,new A.o(j,g,A.I(B.aX.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cj,g,g,g),B.fV,D.f5z],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc9P(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.af)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a7(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bu,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dq(Af.a_A,D.f3v,h.gbvN(),A.bk(B.aU,g,g,g,B.c,g,B.j4,g,new A.b7(A.m(12),B.Y),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dW:B.c
v=A.m(14)
u=A.I(f?B.dZ:B.bW,B.r,1)
t=A.W(B.Zd,f?B.bq:B.bp,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.aA,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.ao,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bp,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.ti,g,g,1/0))}else B.d.v(d,new A.J(w,new C.eCM(h,new C.tt(f)),A.S(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.Ao,A.av(A.mA(g,f?B.bq:B.bp,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cb(g,e,A.bp(!0,A.v(A.a([new A.C(B.As,a0,g),A.D(A.cd(A.v(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.y,g,E.xb,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bzm(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dW:B.c,p=A.m(16),o=A.a([new A.ad(0,B.G,B.w.j(r?0.35:0.08),B.cJ,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aXV,u,u,u,u,u,u,u,5),l=B.aU.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.W(s?B.hI:B.h7,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcOo()
v=A.Ad(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bp,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.b9,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aU.j(0.14),B.bT.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bAV(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a7(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h5,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.Dq(A.A(A.a([m,A.D(new A.C(B.afj,A.A(A.a([l,B.bf,t,B.ab,k,A.aH(u,u,u,u,A.W(B.cw,(r?B.bq:B.bp).j(0.75),u,u,u,20),u,u,u,new C.eCx(this,d),u,u,u,u,u,B.c7)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.aWN,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.db,u,u,u,u)}}
C.aca.prototype={
DI(d){return this.bIl(d)},
bIl(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oR(d,o,!1),$async$DI)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
w=4
return A.b(A.bN(A7.Am,null,x.H),$async$DI)
case 4:s=t.d
w=5
return A.b(C.fyk(!0,o,s),$async$DI)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.FL(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$DI)
case 6:p=f
w=7
return A.b(A.oQ(o,!1),$async$DI)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$DI,v)},
Z4(d){return this.cpM(d)},
cpM(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oR(d,s,!1),$async$Z4)
case 3:if(!f||d.e==null){w=1
break}A.a5(d,!1).N(null)
A.ht(d,new C.aqK(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oQ(s,!1),$async$Z4)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z4,v)},
P5(d){return this.clW(d)},
clW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$P5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(A.ht(d,D.aE2,!0,"NgmyWorksheetProjectScan",x.N),$async$P5)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bAW(s),$async$P5)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.eLL)
w=1
break}q=C.fSV(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dR(p,x.H),$async$P5)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$P5,v)},
Z5(d){return this.cxx(d)},
cxx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Z5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a5(d,!1).N(null)
w=3
return A.b(C.bAt(),$async$Z5)
case 3:s=f
if(s==null){w=1
break}r=C.fSV(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dR(q,x.H),$async$Z5)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Z5,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=new C.tt(u),s=w.d.d.length,r=u?B.dW:B.c,q=A.m(28),p=A.a([new A.ad(0,B.G,B.w.j(u?0.35:0.08),B.jV,36)],x.V),o=x.p
return A.bp(!0,new A.C(B.uV,A.p(v,A.v(A.a([w.con(d,t,s),new A.C(D.bpi,A.v(A.a([w.b1w(t,"QR restore"),B.S,A.A(A.a([w.aXy(t,!0,B.ja,B.aX,B.aX,new C.eCO(w,d),"Show to scan","QR code"),B.aw,w.avN(t,B.iO,B.b4,B.by,new C.eCP(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d6,w.b1w(t,"Backup files"),B.S,A.A(A.a([w.avN(t,B.hx,B.aU,B.bT,new C.eCQ(w,d),"Full copy","Backup file"),B.aw,w.avN(t,N.xT,B.aJ,B.aM,new C.eCR(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
con(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eX,B.cY,B.fu],k):A.a([B.aZ,B.aU,B.bT],k)
w=A.ao(l,A.W(B.tB,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kB,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ad(0,B.G,B.w.j(0.2),B.cJ,12)],x.V)
r=this.d
s=A.p(l,C.aOv(!0,A.m(13),64,D.bxu,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aOp,l,l,l)
r=C.bAV(r.gwt(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.aa,B.q,A.a([w,new A.C(D.bpG,A.v(A.a([v,A.A(A.a([s,B.ew,A.D(A.v(A.a([u,B.au,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fI,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.W(B.cw,B.c.j(0.85),l,l,l,l),l,l,l,new C.eCN(d),l,l,l,A.nm(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aLK,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a7(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b1w(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aU,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bp,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aXy(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.adZ:B.aP
if(e)w=B.aX.j(o?0.45:0.35)
else{w=o?B.dZ:B.bW
w=w.j(o?0.8:1)}w=A.I(w,B.r,e?1.5:1)
v=e?A.a([new A.ad(0,B.G,B.aX.j(0.12),B.cJ,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.r,1)
t=A.p(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qE,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.ex(new A.C(E.Xi,A.v(A.a([t,B.ac,u,B.bz,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bp,r,r,r,r,r,r,r,r,11,r,r,B.cs,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af),1)},
avN(d,e,f,g,h,i,j){return this.aXy(d,!1,e,f,g,h,i,j)}}
C.aqK.prototype={
T(){return new C.biT()}}
C.biT.prototype={
a_(){this.a1()
this.ad5()},
ad5(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ad5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bAX(p.c,p.d),$async$ad5)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eCr(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eCs(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ad5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=g?B.zV:B.iH,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eA,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eCt(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.yY],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eX,B.cY,B.fu],s):A.a([B.aZ,B.aU,B.bT],s)
r=x.V
q=A.a([new A.ad(0,B.G,B.aU.j(g?0.4:0.3),B.eT,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dF,B.L,h,h)
p=C.bAV(p.gwt(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.ao,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fI,h,h,h)],u),B.m,h,B.b9,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a7(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.XD,h,h,1/0)
t=g?D.bdi:B.c
q=A.m(24)
p=A.I(w?B.aX.j(0.4):B.aU.j(0.3),B.r,1)
r=A.a([new A.ad(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a64,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.e0d)
else{m=A.m(20)
l=A.I(B.aL,B.r,1)
o.push(A.p(h,A.py(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bY,h,h,h))}}o.push(B.aO)
n=w?B.aX:B.aU
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aX:B.aU).j(0.35),B.r,1)
k=w?B.Mr:B.MX
k=A.W(k,w?B.aX:B.aU,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.aw,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.j4,h,h,h))
return A.cb(h,f,A.bp(!0,A.v(A.a([new A.C(A2.LB,e,h),A.D(A.cd(A.v(A.a([s,B.aO,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.th,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.y,h,E.ags,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aqP.prototype={
T(){return new C.aDb(A.yK(B.KT,B.nj,B.tG))}}
C.aDb.prototype={
q(){this.d.q()
this.a2()},
aK2(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iK(w,d)},
c5F(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hY2(t)
if(s!=null){this.aK2(s)
return}r=C.h6i(t)
if(r!=null)q=A.ds(r,p,0)
else q=!1
if(q){this.aK2(B.a.i(B.a.b_(r,B.a.cI(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eC(A.a([A.aH(t,t,t,t,A.W(u.f?B.qK:A_.Mx,t,t,t,t,t),t,t,t,new C.eCv(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.zV,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.ffU,t,t,t,1,t,!0),q=A.yJ(u.d,B.bQ,u.gc5E()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aU,B.r,3),p,A.a([new A.ad(2,B.G,B.aU.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.cb(r,B.w,new A.an(B.W,t,B.b_,B.q,A.a([q,p,A.ao(32,A.p(t,D.feK,B.f,t,t,new A.o(w,t,A.I(B.aU.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.j5,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aHY.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.N9.prototype={
T(){return new C.aDd(D.a8d,A.a([],x.D))},
bp(){return this.r.$0()},
gdX(){return this.c}}
C.aDd.prototype={
gcvB(){return J.bC5(this.e,0,new C.eDd())},
a_(){this.a1()
$.aU.c0$.push(this)
this.vd()},
q(){$.aU.hA(this)
this.a2()},
iK(d){if(d===B.fs)this.vd()},
vd(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vd=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Cj(q.a.c).cM(0,B.jN),$async$vd)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eD9(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eDa(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vd,v)},
Hc(d){return this.bFe(d)},
bFd(){return this.Hc(null)},
bFe(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Hc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i_3(l,d),$async$Hc)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.la(l,r,q,D.d_m,new A.R(Date.now(),0,!1))
w=4
return A.b(C.Kr(t.a.c,p),$async$Hc)
case 4:o=f
w=5
return A.b(t.vd(),$async$Hc)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eIW)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gU(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.eKF)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.DM(m)
case 1:return A.h(u,v)}})
return A.i($async$Hc,v)},
DM(d){return this.c9B(d)},
c9B(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$DM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.ht(s,new C.aqQ(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$DM)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Kr(u.a.c,t),$async$DM)
case 5:case 4:w=6
return A.b(u.vd(),$async$DM)
case 6:return A.h(null,v)}})
return A.i($async$DM,v)},
v0(d){return this.bUI(d)},
bUI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$v0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bAt(),$async$v0)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.ht(r,D.aE2,!0,"NgmyWorksheetProjectScan",x.N),$async$v0)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bAW(q),$async$v0)
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
r.R(A.b2(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fSV(s)
w=15
return A.b(C.Kr(t.a.c,p),$async$v0)
case 15:o=f
w=16
return A.b(t.vd(),$async$v0)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.eKK)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.DM(p)
case 1:return A.h(u,v)}})
return A.i($async$v0,v)},
MZ(d){return this.bDU(d)},
bDU(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$MZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.c9(null,null,!0,null,new C.eCV(d),s,null,!0,!0,x.y),$async$MZ)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.or(t.a.c,A.a([],x.D)),$async$MZ)
case 6:w=7
return A.b(t.vd(),$async$MZ)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eJ0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$MZ,v)},
c9O(d){var w=this.c
w.toString
A.bZ(B.K,null,new C.eD3(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b27(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jl
else w=B.c
v=A.m(16)
u=A.I(p?B.dZ:B.bW,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.aA,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bz,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bp,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.uU,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
ZA(d,e){return this.c9C(d,e)},
c9C(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bZ(B.K,null,new C.eCZ(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$ZA)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hfc(r,new C.eD_(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.N0(d,e),$async$ZA)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$ZA,v)},
b_b(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.aD
else t=h.a?B.aP:B.aA
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bp,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,u,!0,new A.C(B.Ay,A.A(A.a([s,B.bf,t,A.W(B.en,w?B.bq:B.bp,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af)},
cgp(d,e,f,g,h,i){return this.b_b(!1,d,e,f,g,h,i)},
N0(d,e){return this.bE3(d,e)},
bE3(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$N0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kV(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$N0)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bzb(t.a.c,d.a),$async$N0)
case 6:w=7
return A.b(t.vd(),$async$N0)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$N0,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=new C.tt(o),m=o?B.bV:B.iH
if(q.f)o=D.b2s
else{w=q.byy(n)
v=q.bTP(n)
u=q.gbvH()
if(o)t=B.jl
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aO,new C.ET(A.p(p,A.A(A.a([q.azc(Q.M8,"Projects",n,D.a8d),q.azc(B.v4,"Cashier",n,D.aSD),q.azc(B.F7,"Family Tree",n,D.fKR)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.em,0.95,u,p),B.bu],r)
w=q.d
if(w===D.a8d){w=J.ac(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.aA,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b3,new C.avy(q.gaOb(),p)],r),B.m,p,B.e,B.j,0,p,p),B.az,q.cgr(n)],r))}else{o=q.a
if(w===D.aSD)u.push(new C.amR(o.c,n,p))
else{w=q.r
u.push(new C.anX(o.c,o.d,o.e,o.f,new C.eDg(q),new C.eDh(q),new A.cz(w,x.b4)))}}o=A.cd(A.v(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.y,p,A9.Lu,p,p,B.ah)}return A.cb(p,m,A.bp(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
byy(d){var w=null,v=A.m(8),u=d.a,t=A.W(O.YT,u?B.bq:B.bp,w,w,w,16)
return A.aK(!1,v,!0,new A.C(B.kC,A.A(A.a([t,B.bo,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bp,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eCS(this),w,w,w,w,w,w,w)},
gbvH(){switch(this.d.a){case 0:return D.a7v
case 1:return D.fBG
case 2:return D.a7w}},
bTP(d){var w=null,v=A.m(15),u=A.a([new A.ad(0,B.G,B.aU.j(0.35),B.cx,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bHY,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bf,D.btU,A.aF(!1,B.a1,!0,w,A.aK(!1,A.m(12),!0,A.p(w,D.bFw,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eCW(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.ET(A.p(w,A.v(A.a([new A.C(E.Xo,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.Ad(this.gcvB()),w,w,w,w,w,w,D.f00,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uT,B.j5,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aU,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.fBF,w)},
azc(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aU:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.r,2):A.I(B.K,B.r,2),o=t?A.a([new A.ad(0.5,B.G,B.aU.j(0.42),B.cJ,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bp
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bp
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,s,!0,A.df(u,A.A(A.a([w,B.eb,new A.dm(1,B.ci,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.j,0,u,u),u,u,B.cp,new A.o(r,u,p,q,o,u,B.n),B.ir,u,u,u,B.Lx,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eDc(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af),1)},
cgr(d){var w,v,u,t,s,r,q=this,p=null
if(J.ck(q.e)){w=d.a
v=w?B.dW:B.c
u=A.m(15)
t=A.p(p,D.bFB,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ad(2,B.G,B.aU.j(0.5),B.eT,28)],x.V),D.bR6,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.aA,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.ET(A.p(p,A.v(A.a([t,B.d6,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bp,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.e0,A.A(A.a([A.D(q.aPF(B.iO,"Scan QR",new C.eD6(q),d),1),B.aw,A.D(q.aPF(N.xT,"Upload file",new C.eD7(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.az,A.bJ(D.fpv,q.gaOb(),A.bk(B.aU,p,p,p,B.c,B.fL,p,p,new A.b7(A.m(12),B.Y),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bqL,1.05,D.a7v,p)}w=J.b6(q.e,new C.eD8(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.ET(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a7v,p)},
aPF(d,e,f,g){var w=null,v=B.aU.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aU.j(0.45),B.r,1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(w,A.v(A.a([A.W(d,B.aZ,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eZs,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.afd,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.af)},
cgq(d,e){var w,v,u=null,t=e.a,s=t?B.dW:B.c,r=A.m(14),q=A.I(t?B.dZ:B.bW,B.r,1),p=A.a([new A.ad(0,B.G,B.w.j(t?0.35:0.08),B.ei,10)],x.V),o=A.m(14),n=t?B.bq:B.bp
n=A.bv(B.U9,new A.fF(1.7777777777777777,C.aOv(!0,B.ft,1/0,Q.M8,n,d.c,1/0),u),B.aq)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.aA,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.Ad(d.gwt()),u,u,u,u,u,u,D.eXB,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aK(!1,o,!0,A.v(A.a([n,new A.C(B.bB,A.A(A.a([v,A.aH(u,u,u,u,A.W(Aa.ML,t?B.bq:B.bp,u,u,u,u),u,u,u,new C.eD4(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eD5(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.af),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bvf.prototype={}
C.qI.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcOo(){var w,v,u,t,s=this.c
if(s===B.k.jK(s))w=B.o.u(B.k.O(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.la.prototype={
gwt(){return B.d.cH(this.d,0,new C.ctC())},
ad(){var w=this,v=w.d,u=A.S(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.ctB(),u),u.k("aj.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
b92(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.la(w.a,w.b,v,u,w.e)},
b8K(d){return this.b92(d,null)},
RN(d){return this.b92(null,d)}}
C.GS.prototype={
a4(){return"FamilyGender."+this.b}}
C.hT.prototype={
ad(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.hb1(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aBQ(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hT(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ajd.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.kt.prototype={
gamR(){var w=this.f
return new A.a2(w,new C.bLo(),A.S(w).k("a2<1>")).gM(0)},
ad(){var w=this,v=w.f,u=A.S(v).k("J<1,a4<n,@>>")
v=A.B(new A.J(v,new C.bLn(),u),u.k("aj.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hQw(w.y)],x.N,x.z)},
y8(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kt(w.a,v,u,t,s,r,w.r,q,p,o)},
b91(d,e){var w=null
return this.y8(w,w,d,e,w,w,w,w)},
cE6(d,e,f,g,h,i,j){return this.y8(d,e,f,g,h,i,j,null)},
aBV(d,e){var w=null
return this.y8(w,w,w,d,w,w,e,w)},
cCB(d){var w=null
return this.y8(w,w,w,w,w,w,d,w)},
cCZ(d){var w=null
return this.y8(w,w,w,w,w,w,w,d)},
aBH(d){var w=null
return this.y8(w,w,w,w,d,w,w,w)},
cDD(d,e,f){var w=null
return this.y8(w,d,w,e,w,w,f,w)},
cCo(d){var w=null
return this.y8(w,w,d,w,w,w,w,w)},
cDb(d,e){var w=null
return this.y8(d,w,w,w,w,e,w,w)}}
C.ctD.prototype={
a4(){return"WrapAlignment."+this.b}}
C.ctE.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aFg.prototype={}
C.b6D.prototype={
bx(d){this.a=d.a
this.b=d.b},
dr(d){var w=new C.b6D()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b6C.prototype={
gvN(){return!0},
gFh(){return this.z.b<this.b.length},
aRf(d){switch(0){case 0:return d.a.c}},
aQX(d){switch(0){case 0:return d.a.d}},
bNm(d,e){switch(0){case 0:return new A.hF(d,e)}},
bML(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fX(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iz(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.GD(b4)
switch(0){case 0:v=b5.b
u=new A.kq(0,v,0,1/0)
t=w===B.Sb
break}s=A.a([],x.gZ)
r=A.V(x.cM,x.S)
for(b3=b1.z,q=B.d.fH(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fX(b4,u,!0)
f=b1.aRf(g)
f.toString
e=b1.aQX(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFg(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aFg(k,j,i))}d=s.length
switch(0){case 0:q=b5.ct(new A.hF(m,l))
a0=q.a
a1=q.b
b1.a=new A.iz(0,0,a0,a1)
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
for(q=B.d.fH(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aRf(g)
e=b1.aQX(g)
e.toString
a9=b1.bML(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bNm(a6,a3+a9)
b0=g.a
g.a=new A.iz(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fU(d){var w,v,u,t,s,r=this
r.l1(d)
w=d.b
w.hW()
v=A.dl()
u=r.a
v.e2(u.a,u.b,0,1)
w.ov(0,v)
for(u=r.z,u=B.d.dm(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fU(d)
w.mX(0)},
FN(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hW(){return this.z}}
C.btv.prototype={}
var z=a.updateTypes(["ax<~>()","Q(hT)","Q(kt)","~()","Q(n_)","a4<n,@>(kt)","G(kt,kt)","n(hT)","kt(a4<@,@>)","Q(la)","Q(tY)","n_(a4<@,@>)","tY()","G(la,la)","hT(a4<@,@>)","a4<n,@>(hT)","Q(qI)","ax<~>(la)","eN<n?>(hT)","G(hT,hT)","n?(hT)","a4<n,@>(n_)","YQ(Y)","n(n)","abQ(Y)","r(o2)","G(n_,n_)","hT(hT)","cK(bu<n,F5>)","cK(Jf)","~(hT)","G?(hT)","hT()","ak<hT>()","Q(tX)","Q(Jf)","C(hT)","~(GS)","Q(adm)","r(GS,n,a0)","Ye(Y)","bu<n,ak<a4<n,@>>>(n,ak<n_>)","~(G)","+count,id,name(G,n,n)(kt)","kt(kt)","Za(Y)","Zb(Y)","Q(lr)","lr()","n(kt)","a_T(Y)","XP(Y)","XO(Y)","Yc(Y)","Yg(Y)","r(qI)","aca(Y)","~(lP)","ax<~>([n?])","N(N,la)","r(la)","N(N,qI)","a4<n,@>(qI)","qI(a4<@,@>)","XN(Y)","RG(Y)","co(GR)","la(a4<@,@>)","tX()","n(la)","a4<n,@>(la)","n(R)","G(hT)","kt(a4<n,@>)","Xm(Y)"])
C.fqZ.prototype={
$1(d){return d.a+" "+d.b},
$S:122}
C.fqY.prototype={
bhT(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qB(s,d,B.hj,E.Es),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.T(r!=null&&A.Ke(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bhT(d)},
$S:288}
C.fr_.prototype={
$1(d){return d.b},
$S:122}
C.fA4.prototype={
$1(d){var w=null
return A.eD(w,B.K,new F.Ot(this.a,this.b,w),w,w,0,B.Xj,B.cZ,w,w,w)},
$S:46}
C.fgs.prototype={
$1(d){return d!=null},
$S:203}
C.fgt.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:203}
C.fgy.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:159}
C.foI.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f7(d,w,w,w,A.h1(w,B.r8,w,w,w,w,w,w,w,B.dr,w,w,10.5,w,B.eh,w,!0,w,w,w,w),w),u=f?B.eh:B.v_
return new A.nx(D.bml,A.a8s(A.a([new A.fN(130,w,v),new A.yt(1,B.F0,A.f7(e,w,w,w,A.h1(w,g==null?D.e2u:g,w,w,w,w,w,w,w,B.dr,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.wR,B.le))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1890}
C.foH.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.v8(999)
f=A.wB(A.lm(h,A.f7("Cashier",h,h,h,A.h1(h,D.yL,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.eh,h,!0,h,h,h,h),h),h,new A.kr(D.e2l,h,f,B.hA,h),h,h,D.bmO,h))
w=A.wB(A.f7("Debt receipt",h,h,h,A.h1(h,h,h,h,h,h,h,h,h,B.dr,h,h,22,h,B.eh,h,!0,h,h,h,h),h))
v=A.wB(A.f7(C.wl(new A.R(Date.now(),0,!1),!0),h,h,h,D.a6d,h))
u=A.v8(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f7(s,h,h,h,A.h1(h,h,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.eh,h,!0,h,h,h,h),h)
r=A.f7("Person who owes",h,h,h,D.a6d,h)
q=A.v8(10)
p=x.C
u=A.lm(h,A.yo(A.a([s,new A.fN(h,2,h),r,new A.fN(h,10,h),A.lm(h,A.yo(A.a([A.f7("Amount owed",h,h,h,D.a6d,h),new A.fN(h,2,h),A.f7(A.Ad(t.c),h,h,h,A.h1(h,D.yL,h,h,h,h,h,h,h,B.dr,h,h,20,h,B.eh,h,!0,h,h,h,h),h)],p),B.qx,B.le),h,new A.kr(B.oG,h,q,B.hA,h),h,h,D.bm1,1/0)],p),B.qx,B.le),h,new A.kr(E.aFh,h,u,B.hA,h),h,h,D.bnS,1/0)
q=new A.nf(D.e2o,0.9,B.ku)
r=A.v8(12)
s=i.c
o=s.$2("Original due",C.wl(t.r,!1))
n=s.$2("Current due",C.wl(t.f,!1))
m=i.d
l=new A.nf(m,1.1,B.ku)
k=A.v8(8)
j=i.a
k=A.a([o,n,new A.fN(h,6,h),A.lm(h,A.wB(A.f7(t.gaIz(),h,h,h,A.h1(h,m,h,h,h,h,h,h,h,B.dr,h,h,11,h,B.eh,h,!0,0.5,h,h,h),h)),h,new A.kr(h,new A.pi(l,l,l,l),k,B.hA,h),h,h,D.bmW,1/0),new A.fN(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.yL))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.yL))
else{n=A.f7("Missed days ("+n+")",h,h,h,A.h1(h,B.r8,h,h,h,h,h,h,h,B.dr,h,h,10.5,h,B.eh,h,!0,h,h,h,h),h)
m=A.S(o).k("J<1,Rf>")
o=A.B(new A.J(o,new C.foG(),m),m.k("aj.E"))
B.d.v(k,A.a([new A.fN(h,4,h),n,new A.fN(h,6,h),new C.b6C(5,5,new C.b6D(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fN(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fN(h,8,h),w,new A.fN(h,3,h),v,new A.fN(h,16,h),u,new A.fN(h,10,h),A.lm(h,A.yo(k,B.wR,B.le),h,new A.kr(h,new A.pi(q,q,q,q),r,B.hA,h),h,h,B.afn,1/0)],p)
w=j.a
if(w!=null){v=new A.nf(B.Ht,1,B.ku)
B.d.v(f,A.a([new A.fN(h,16,h),A.f7("Debtor signature",h,h,h,A.h1(h,B.r8,h,h,h,h,h,h,h,B.dr,h,h,10,h,B.eh,h,!0,h,h,h,h),h),new A.fN(h,6,h),A.lm(h,new A.H5(w,B.Uj,h,h),h,new A.kr(h,new A.pi(v,v,v,v),A.v8(6),B.hA,h),82,h,B.Lz,1/0)],p))}f.push(new A.fN(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f7(w,h,h,h,D.eQE,h))
f.push(new A.fN(h,18,h))
f.push(A.wB(A.f7("NGMY.ORG",h,h,h,A.h1(h,D.yL,h,h,h,h,h,h,h,B.dr,h,h,14,h,B.eh,h,!0,1.8,h,h,h),h)))
return f},
$S:368}
C.foG.prototype={
$1(d){var w=null,v=new A.nf(D.Hu,0.7,B.ku),u=A.v8(999)
return A.lm(w,A.f7(C.wl(d,!1),w,w,w,A.h1(w,D.Hu,w,w,w,w,w,w,w,B.dr,w,w,9.5,w,B.eh,w,!0,w,w,w,w),w),w,new A.kr(w,new A.pi(v,v,v,v),u,B.hA,w),w,w,D.bs5,w)},
$S:1891}
C.c_9.prototype={
$1(d){var w=null,v=B.bL.j(0.08),u=A.m(999),t=A.I(B.bL.j(0.28),B.r,1)
return A.p(w,A.d(C.wl(d,!1),w,w,w,w,w,w,D.eX6,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eE,w,w,w)},
$S:1892}
C.fAA.prototype={
$1(d){var w=null,v=A.aI(d,B.bS,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bIQ,w,w,w,new C.fAx(d),w,w,w,w,w,B.c7),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eD(w,B.K,new A.cU(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.C(B.X7,A.v(A.a([new A.bI(B.a7,w,w,t,w),new A.dm(1,B.ci,A.cd(A.v(A.a([new A.et(new C.aWM(r,w),s),B.S,A.A(A.a([A.D(A.ez(B.y3,D.flW,new C.fAy(s,r,d),A.dd(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f3,w,new A.b7(A.m(14),B.Y),new A.az(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.D(A.dq(B.a_q,D.fiG,new C.fAz(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.f3,w,new A.b7(A.m(14),B.Y),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.q,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.aA,0,w,w,w,w,w,B.af),w),w,w,0,Ae.Xw,B.cZ,w,w,w)},
$S:46}
C.fAx.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fAy.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ak$.x.h(0,t.a)
m=m==null?null:m.gb7()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m2(2.5),$async$$0)
case 4:w=3
return A.b(e.hl(B.fS),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.fa(B.dE.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.rC(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fAz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fvi(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fAs.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eD(w,B.aA,A.v(A.a([new A.C(D.bnG,A.A(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.nb,w,w,w),1),A.aH(w,w,w,w,B.lb,w,w,w,new C.fAq(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dm(1,B.ci,new A.C(B.h4,A.bv(A.m(14),A.fK(t,B.A,w,w,B.cn,B.dt,!1,w,!1,w,w),B.aq),w),w),new A.C(B.Ld,new A.a6(1/0,w,A.dq(B.ox,D.aOP,new C.fAr(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.Lp,B.cZ,w,new A.b7(v,B.Y),w)},
$S:46}
C.fAq.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fAr.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rC(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fAE.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eD(w,B.aA,new A.C(D.bnO,A.v(A.a([A.A(A.a([D.bt6,A.aH(w,w,w,w,B.lb,w,w,w,new C.fAC(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.et(A.bv(A.m(14),A.p(w,A.b3(w,w,w,new C.b8M(s.ax,w),B.at),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a6(1/0,w,A.dq(B.ox,D.aOP,new C.fAD(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Y),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.cZ,w,new A.b7(v,B.Y),w)},
$S:46}
C.fAC.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.fAD.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ak$.x.h(0,t.a)
n=n==null?null:n.gb7()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m2(2.5),$async$$0)
case 4:w=3
return A.b(e.hl(B.fS),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.fa(B.dE.gaP(s))
w=5
return A.b(A.rC(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fjN.prototype={
$1(d){return d.a===this.a},
$S:264}
C.dCx.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dCi.prototype={
bh6(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dW:B.c
s=u.a
w=2
return A.b(A.bZ(t,null,new C.dCl(s,q,e),p,!0,!0,!1,B.HJ,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dCm(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bh6(d,e)},
$S:1893}
C.dCl.prototype={
$1(d){var w,v=null,u=this.c===B.vz,t=u?D.d52:D.d1u
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.aA,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bp(!0,new A.C(L.afX,A.v(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bp,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ib(!0,v,v,B.y,H.aM1,new C.dCk(this.a,w,t,d),t.length,v,B.dP,B.ah,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:31}
C.dCk.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bq:B.bp).j(0.16)
u=A.I(u,B.r,q?1.6:1)
return A.aK(!1,p,!0,A.p(B.A,C.aWL(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dCj(t.d,r),s,s,s,s,s,s,s)},
$S:182}
C.dCj.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.dCm.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dCg.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:94}
C.dCh.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cI(B.cp,e,v)
return new A.cX(e,!1,A.ig(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e5(new C.dCf(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.af),v,v,v),v,new A.bf(t,new A.bm(0.96,1,u),u.k("bf<bH.T>"))),v)},
$S:29}
C.dCf.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bS,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dW:B.c,f=A.m(14),e=A.I((h?B.bq:B.bp).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aK(!1,v,!0,new A.C(B.em,A.W(B.cw,i.a.d.a?B.bq:B.bp,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dC0(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aQb("Name")
r=l.a
q=r.d==null?k:new C.dC1(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bn:B.lv
n=A.I(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aL(k,B.T,h,k,!0,B.q,k,A.aM(),w,k,k,k,k,k,2,s.b8V(new A.C(B.fw,A.aK(!1,p,!0,A.p(B.A,C.aWL(m==null?"\ud83d\udc64":A.fpw(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cj,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ko,k,B.a5W,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bp,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ao,A.A(A.a([A.D(i.aQN("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dC2(r,a0),r.d===B.vz),1),B.ab,A.D(i.aQN("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dC7(r,a0),r.d===B.a2U),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bI(B.a3,k,k,A.hb(D.bHe,D.fko,new C.dC8(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c7)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.u0(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.f,k,k,k,k,k,2,i.aQc("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.dT,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bp).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wl(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(k,A.A(A.a([A.D(A.v(A.a([t,B.bz,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bE6],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bl,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dC9(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.af))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.r,k,k,k,k,k,2,i.aQb("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.aA,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bp,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aYx(r.b.length!==0,B.mb,new C.dCa(r,i,a0),new C.dCb(r,a0),"Upload from gallery","ID photo"))
v.push(i.aYx(r.c.length!==0,D.bxs,new C.dCc(r,i,d,a0),new C.dCd(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ab.a6o("Signature (optional)",t,new C.dCe(a0),new C.dC3(a0,t),new C.dC4(d,t,a0),k))
v.push(B.az)
i=i.a.d.a
t=i?B.bq:B.bp
s=(i?B.bq:B.bp).j(0.28)
s=A.D(A.dW(E.aOI,new C.dC5(d),A.dd(k,k,k,k,k,k,k,k,k,t,k,k,B.uO,k,new A.b7(A.m(10),B.Y),new A.az(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.uO,k,new A.b7(A.m(10),B.Y),k,k,k)
v.push(A.A(A.a([s,B.ab,A.D(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.ub,k,k,k),new C.dC6(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cd(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uX,B.j5,k,k,360)},
$S:174}
C.dC0.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dC1.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dC2.prototype={
$0(){return this.b.$1(new C.dC_(this.a))},
$S:0}
C.dC_.prototype={
$0(){var w=this.a
w.d=B.vz
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dC7.prototype={
$0(){return this.b.$1(new C.dBZ(this.a))},
$S:0}
C.dBZ.prototype={
$0(){var w=this.a
w.d=B.a2U
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dC8.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dC9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wp(null,u.b,A.c_(2020,1,1,0,0,0,0,0),null,s,A.c_(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dBY(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBY.prototype={
$0(){var w=this.b
return this.a.a=A.c_(w.gce(),w.gcb(),w.gcs(),0,0,0,0,0)},
$S:0}
C.dCa.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Ov(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dBX(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBX.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dCb.prototype={
$0(){return this.b.$1(new C.dBW(this.a))},
$S:0}
C.dBW.prototype={
$0(){return this.a.b=""},
$S:0}
C.dCc.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dW:B.c
w=3
return A.b(A.bZ(q,null,new C.dBU(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Ov(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dBV(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBU.prototype={
$1(d){var w=null
return A.bp(!0,A.v(A.a([A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.al1,w,w,w,w,new C.dBO(d),!1,w,w,w,w,w,w,w,D.fbe,w,w,w),A.dN(!1,w,w,w,!0,w,w,w,!0,w,B.al_,w,w,w,w,new C.dBP(d),!1,w,w,w,w,w,w,w,D.fhM,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ag,!0,!0)},
$S:31}
C.dBO.prototype={
$0(){A.a5(this.a,!1).N("camera")
return null},
$S:0}
C.dBP.prototype={
$0(){A.a5(this.a,!1).N("gallery")
return null},
$S:0}
C.dBV.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dCd.prototype={
$0(){return this.b.$1(new C.dBT(this.a))},
$S:0}
C.dBT.prototype={
$0(){return this.a.c=""},
$S:0}
C.dCe.prototype={
$0(){return this.a.$1(new C.dBS())},
$S:0}
C.dBS.prototype={
$0(){},
$S:0}
C.dC3.prototype={
$0(){return this.a.$1(new C.dBR(this.b))},
$S:0}
C.dBR.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dC4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.agg(u.a,null,null,new C.dBQ(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBQ.prototype={
$4(d,e,f,g){this.a.$1(new C.dBN(this.b,d))},
$S:345}
C.dBN.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dC5.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dC6.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.eMB)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eJx)
return}A.a5(w.c,!1).N(!0)},
$S:0}
C.dCA.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:94}
C.dCB.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dW:B.c,n=A.m(14),m=A.I((p?B.bq:B.bp).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.aA,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Ad(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bp,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yw(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yw(r).length>0?B.bL:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bp
t=(q?B.bq:B.bp).j(0.28)
s=x.p
return new A.cX(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.az,A.A(A.a([A.D(A.dW(B.nc,new C.dCy(d),A.dd(r,r,r,r,r,r,r,r,r,w,r,r,B.jp,r,new A.b7(A.m(10),B.Y),new A.az(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.D(A.bJ(D.fia,new C.dCz(d),A.bk(B.cY,r,r,r,B.c,r,B.jp,r,new A.b7(A.m(10),B.Y),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.AB,E.Xo,r,r,300),B.f,B.K,0,r,r,r,r,r,B.af),r,r,r),r)},
$S:29}
C.dCy.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dCz.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dCu.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dCv(r),p=r.a.d.a,o=p?B.dW:B.c,n=A.m(14),m=A.I((p?B.bq:B.bp).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.aA,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Ad(l.c),s,s,s,s,s,s,D.eYz,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iw((r.a.d.a?B.bq:B.bp).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.Zd,"View receipt",new C.dCn(r,d,l))
u=l.x!=null
t=u?B.qP:B.pt
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bnL,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dCo(r,d,l)),q.$3$icon$label$onTap(B.AS,"Edit",new C.dCp(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mb,"View / download ID",new C.dCq(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bxr,"View / download selfie",new C.dCr(r,d,l)))
if(l.gaDv())p.push(q.$3$icon$label$onTap(A1.a_h,"View / download signature",new C.dCs(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bL,B.e4,"Delete",new C.dCt(r,d,l)))
p.push(B.au)
return A.bp(!0,new A.C(B.uT,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:31}
C.dCv.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.aA
else w=d
return A.aK(!1,v,!0,new A.C(B.eP,A.A(A.a([A.W(e,w,v,v,v,20),B.bf,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1894}
C.dCn.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fAw(w,this.c)},
$S:0}
C.dCo.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.R7(this.c)},
$S:0}
C.dCp.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Cs(this.c)},
$S:0}
C.dCq.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBj(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dCr.prototype={
$0(){var w,v,u
A.a5(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bBj(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dCs.prototype={
$0(){A.a5(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fAB(w,this.c)},
$S:0}
C.dCt.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.Nb(0,this.c)},
$S:0}
C.dCC.prototype={
$1(d){return d.x==null},
$S:264}
C.dCD.prototype={
$1(d){return d.x!=null},
$S:264}
C.dCE.prototype={
$2(d,e){return d+e.c},
$S:1895}
C.dCF.prototype={
$0(){return this.a.bwa()},
$S:0}
C.dCw.prototype={
$0(){return this.a.adj(this.b)},
$S:0}
C.fkh.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fki.prototype={
$0(){return B.d.gL(D.a0t)},
$S:z+68}
C.d2p.prototype={
$0(){var w=this.a
return w.m(new C.d2n(w,this.b))},
$S:0}
C.d2n.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d2o.prototype={
$0(){},
$S:0}
C.d2q.prototype={
$0(){var w=this.a.gbUw()
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.fmf.prototype={
$1(d){return C.fWX(A.a1(d,x.N,x.z))},
$S:z+11}
C.fmg.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fmh.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fza.prototype={
$1(d){return d.ad()},
$S:z+21}
C.fHd.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fjE.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bLj.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eY(e,v)?v:null},
$S:1896}
C.fzJ.prototype={
$1(d){var w=this
return new C.Ye(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d34.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d33(w,d))},
$S:z+66}
C.d33.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2T.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cw(u)?v.r>=J.ac(v.d):w)v.r=J.ac(v.d)-1},
$S:0}
C.d2Q.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d2r.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d2s.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d2U.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d2A.prototype={
$1(d){var w=null,v=A.M(d).ax.a===B.H,u=v?B.dW:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.d2y(d),w,w),A.bJ(B.vW,new C.d2z(d),A.bk(B.mD,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d2y.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.d2z.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d2B.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d2R.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d2S.prototype={
$0(){return B.d.gL(D.yd)},
$S:z+12}
C.d2w.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxN(0),t=J.ac(w.d)
w=J.ac(w.d)===1?"page":"pages"
return new C.RG(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d2x.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2C.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.XN(v,u,J.ac(w.d),null)},
$S:z+64}
C.d2D.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d32.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.Xv(r.y,r.gxN(0),J.ac(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d30(r),s,s,s,s,s,s,!1,B.a9)
else{w=e-1
v=J.q(r.d,w)
J.ac(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b8a(v,e,w,u,t,r.gbLS(),C.hb0(r.y.Q),r.gxN(0),s)
w=t}return A.c6(q,new C.d31(r,e),new A.C(B.Xp,w,s))},
$S:1897}
C.d31.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcY(t).ay){t=this.b
u=x.cy.a(B.d.gcY(u.f.f)).gui(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dl()
t=u.a
t.$flags&2&&A.ai(t)
t[11]=0.0013
u.fu(v*3.141592653589793*0.5)
return A.fr(B.a3,A.db(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d30.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aEz(B.ph,B.is)},
$S:0}
C.d2N.prototype={
$0(){var w=this.a
return w.m(new C.d2M(w))},
$S:0}
C.d2M.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d2O.prototype={
$0(){var w=this.a.c
w.toString
A.a5(w,!1).N(null)
return null},
$S:0}
C.d2t.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jG.j(0.5),r=x.p,q=A.a([D.f9T,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ck(p.d)?"Write this book":"Write a new book"
q.push(p.XM(d,B.dV,w,J.ck(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.XM(d,H.aiT,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cw(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cG,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.k5.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cG,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.k5.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.XM(d,Y.ak2,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.XM(d,B.pA,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.XM(d,B.pA,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eD(u,E.A5,A.bp(!0,new A.C(A0.Aw,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.agm,B.cZ,u,new A.b7(t,new A.az(s,1.4,B.r,-1)),u)},
$S:46}
C.d2P.prototype={
$0(){A.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.d2G.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cw(w.d)
return new C.Yg(v,J.cw(w.d),w.r+1,null)},
$S:z+54}
C.d2H.prototype={
$1(d){var w=null
return A.o8(!1,A.eh(w,w,w,E.A5,new A.k8(this.a,new C.d2F(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:285}
C.d2F.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a5C,B.nW,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:679}
C.d2I.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d2J.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d2K.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2L.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Am(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Qx(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d2E(s,t))
w=4
return A.b(s.kG(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2E.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2W.prototype={
$1(d){var w=null
return A.o8(!1,A.eh(w,w,w,E.A5,new A.k8(this.a,new C.d2V(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:285}
C.d2V.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a5C,B.nW,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:679}
C.d2X.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d2Y.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d2Z.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:193}
C.d3_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Am(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kG(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2u.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bei(B.ph,S.L1)},
$S:0}
C.d2v.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aEz(B.ph,S.L1)},
$S:0}
C.d4P.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d4Q.prototype={
$1(d){var w=this.a
return w.m(new C.d4O(w))},
$S:9}
C.d4O.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d4R.prototype={
$1(d){var w=this.a
return w.m(new C.d4N(w))},
$S:9}
C.d4N.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d4S.prototype={
$1(d){var w=this.a
return w.m(new C.d4M(w))},
$S:9}
C.d4M.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d4T.prototype={
$0(){var w=this.a
return w.m(new C.d4L(w,this.b))},
$S:0}
C.d4L.prototype={
$0(){var w=this.b
this.a.d.saV(0,w)
return w},
$S:0}
C.d4U.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga0p()
A.a5(this.b,!1).N(new A.bmC(w,v))},
$S:0}
C.d3j.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d3i.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Yc(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d3n.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d3m.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b4E(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hz,v,v,v)
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.d3k(d),v,v),A.bJ(B.vW,new C.d3l(d),A.bk(B.mD,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.A5,w,v,v,v,v,D.f8O,v)},
$S:19}
C.d3k.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.d3l.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.d3o.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.d3p.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.cd(A.c4(B.bE,r,B.bx,18,14),B.q,t,B.y,t,D.boG,t,t,B.ah)},
$S:337}
C.d3h.prototype={
$0(){return this.a.P9(0,this.b)},
$S:0}
C.d3g.prototype={
$0(){return this.a.OE(0,this.b)},
$S:0}
C.cCn.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cCo.prototype={
$0(){return B.d.gL(D.yd)},
$S:z+12}
C.cCp.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bY(0,new A.C(d,A.bX(w,new A.o(w,w,A.I(this.a.j(f),B.r,g),v,w,w,B.n),B.bd),w),0,0,0)},
$S:1899}
C.cVP.prototype={
$1(d){return this.a.m(new C.cVO(this.b,this.c))},
$S:9}
C.cVO.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cWd.prototype={
$1(d){return this.a.m(new C.cW0())},
$S:2}
C.cW0.prototype={
$0(){},
$S:0}
C.cWe.prototype={
$1(d){return this.a.m(new C.cW_())},
$S:2}
C.cW_.prototype={
$0(){},
$S:0}
C.cWf.prototype={
$0(){var w=this.a
return w.m(new C.cVZ(w,this.b))},
$S:0}
C.cVZ.prototype={
$0(){var w=this.a
return w.d=w.gnH().EW(this.b.a)},
$S:0}
C.cWg.prototype={
$0(){var w=this.a
return w.m(new C.cVY(w,this.b))},
$S:0}
C.cVY.prototype={
$0(){var w=this.a
return w.d=w.gnH().cBV(this.b)},
$S:0}
C.cWh.prototype={
$1(d){return this.a.m(new C.cVX())},
$S:2}
C.cVX.prototype={
$0(){},
$S:0}
C.cWi.prototype={
$0(){var w=this.a
return w.m(new C.cVW(w,this.b))},
$S:0}
C.cVW.prototype={
$0(){var w=this.a
return w.d=w.gnH().cC_(this.b.a)},
$S:0}
C.cWj.prototype={
$1(d){var w=this.a
return w.m(new C.cW8(w,d))},
$S:6}
C.cW8.prototype={
$0(){var w=this.a
return w.d=w.gnH().cCU(this.b)},
$S:0}
C.cWk.prototype={
$1(d){var w=this.a
return w.d=w.gnH().aBK(d)},
$S:2}
C.cWl.prototype={
$1(d){var w=this.a
return w.d=w.gnH().cC2(d)},
$S:2}
C.cWn.prototype={
$1(d){var w=this.a
return w.d=w.gnH().cCS(d)},
$S:2}
C.cWo.prototype={
$1(d){var w=this.a
return w.m(new C.cW7(w,d))},
$S:9}
C.cW7.prototype={
$0(){var w=this.a
return w.d=w.gnH().cCJ(this.b)},
$S:0}
C.cWp.prototype={
$0(){var w=this.a,v=w.gnH(),u=B.a.i(w.gxN(0).a.a),t=B.a.i(w.gaz0().a.a)
u=v.b9b(B.a.i(w.gaoY().a.a),t,u)
A.a5(this.b,!1).N(u)
return null},
$S:0}
C.dQ6.prototype={
$0(){var w=this.a
w.vp()
w.a.bp()
w.a.pn()},
$S:0}
C.dQ5.prototype={
$0(){var w=this.a
w.vp()
w.a.bp()
w.a.pn()},
$S:0}
C.dQ8.prototype={
$0(){var w=this,v=w.b
if(J.cw(v)||J.ck(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dQ9.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dQa.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dQ4.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQ7.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dQc.prototype={
$0(){this.a.NH()
return null},
$S:0}
C.dQb.prototype={
$0(){return this.a.DN(this.b)},
$S:0}
C.dPx.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.dd,w,w,!0,w,w,new C.dPv(d),w,w),r=A.bk(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.eh(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dPw(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dPv.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPw.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dPy.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cCo(this.b)},
$S:0}
C.dPs.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aQr(w.b,w.c,w.d)},
$S:8}
C.dP0.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dP1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.FO(t.a.c),$async$$0)
case 2:s=r.qZ(q.dH(e,new C.dPd(t)))
if(s!=null&&t.c!=null)t.m(new C.dPe(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPd.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dPe.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPg.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dPh.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPr.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cDb(C.hba(w),w)},
$S:0}
C.dPp.prototype={
$1(d){return new A.e5(new C.dPo(this.a,this.b),null)},
$S:20}
C.dPo.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dW:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bp,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.akG,v,v,v,p>0?new C.dPk(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aO,A.A(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.ale,v,v,v,new C.dPl(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.dPm(d),v,v),A.bJ(B.oT,new C.dPn(d),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:155}
C.dPk.prototype={
$0(){return this.b.$1(new C.dPj(this.a))},
$S:0}
C.dPj.prototype={
$0(){return--this.a.a},
$S:0}
C.dPl.prototype={
$0(){return this.b.$1(new C.dPi(this.a))},
$S:0}
C.dPi.prototype={
$0(){return++this.a.a},
$S:0}
C.dPm.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dPn.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.dPq.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cCZ(this.a.a)
w.r.a8(0)},
$S:0}
C.dOP.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.agn(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h4Y(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dOQ.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aBH(w)},
$S:0}
C.dPA.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.abQ(this.b,w,this.c,null)},
$S:z+24}
C.dPu.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dW:B.c,t=A.m(20),s=A.W(B.l7,B.aU,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bJ(D.fje,new C.dPt(d),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b7(t,B.Y),r,w)},
$S:19}
C.dPt.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dOR.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dOS.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dOT.prototype={
$1(d){return d.a},
$S:z+7}
C.dOU.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hT(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aBH(w)},
$S:0}
C.dOY.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.agn(q)
w=A.S(q).k("a2<1>")
q=A.B(new A.a2(q,new C.dOW(r),w),w.k("H.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h4Y(v.e,null,r,v.f,v.r,new C.dOX(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dOX.prototype={
$0(){return this.a.a8w(this.b)},
$S:0}
C.dOW.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dOZ.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.S(w).k("J<1,hT>")
w=A.B(new A.J(w,new C.dOV(this.b),v),v.k("aj.E"))
u.d=t.aBH(w)},
$S:0}
C.dOV.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dPz.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dPa.prototype={
$1(d){return d.length!==0},
$S:3}
C.dPb.prototype={
$1(d){var w=this
return new A.e5(new C.dP9(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dP9.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dW:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.aA,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bp,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bp,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dP5(u,e,o),A.S(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aL(v,B.T,!1,v,!0,B.q,v,A.aM(),u,v,v,v,v,v,2,A.bo(v,new A.b4(4,A.m(12),B.df),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.lQ,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.eh(A.a([A.bK(!1,B.dd,v,v,!0,v,v,new C.dP6(d),v,v),A.bJ(B.Iz,new C.dP7(t,u,o,e),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.f72,new C.dP8(t,u,o,d),A.bk(B.aU,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:155}
C.dP5.prototype={
$1(d){var w=null
return A.dN(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.aA,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bKL,w,w,w,new C.dP4(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1900}
C.dP4.prototype={
$0(){return this.a.$1(new C.dP2(this.b,this.c))},
$S:0}
C.dP2.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dP6.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dP7.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dP3(w.c,u))
v.bM(0,B.c3)}},
$S:0}
C.dP3.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dP8.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a5(w.d,!1).N(!0)},
$S:0}
C.dPc.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cDD(this.b,D.tj,C.FM(v,w.a.c))},
$S:0}
C.dPH.prototype={
$1(d){return d.as},
$S:z+1}
C.dPI.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iK(this.b,w)},
$S:0}
C.dPJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hZL(v)
return w.UL(v==null?null:v.a)},
$S:0}
C.dPK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hCl(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aP(1/0,e.a,e.b)
s=A.aP(1/0,e.c,e.d)
l.cm5(new A.at(u,t),v.gbf6(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cIC:D.cH4
q=A.I(s?B.dq:D.b7I,B.r,1)
p=A.m(22)
o=A.bY(0,A.b3(m,m,m,new C.bbv(s,m),B.at),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.an(B.W,m,B.aa,B.q,A.a([o,A.bY(0,A.u9(new A.O(n,n,n,n),new A.a6(u,t,new C.bcn(l.d,v,l.f,w,new C.dPD(l),l.gc6j(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.btC(s,new C.dPE(l,e),new C.dPF(l,e),new C.dPG(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a7(B.b0,B.b5,B.x,r,m,m),B.n),m,m,m,P.afr,m,m,m,m)},
$S:214}
C.dPD.prototype={
$1(d){var w=this.a
w.m(new C.dPB(w,d))},
$S:2}
C.dPB.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.dPE.prototype={
$0(){var w=this.b
return this.a.b6S(1.25,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dPF.prototype={
$0(){var w=this.b
return this.a.b6S(0.8,new A.at(A.aP(1/0,w.a,w.b),A.aP(1/0,w.c,w.d)))},
$S:0}
C.dPG.prototype={
$0(){var w=this,v=w.b
return w.a.aQr(new A.at(A.aP(1/0,v.a,v.b),A.aP(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbf6())},
$S:0}
C.dPL.prototype={
$0(){var w=this.a
return w.m(new C.dPC(w))},
$S:0}
C.dPC.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dP_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fH(new A.fA(s.c)),$async$$0)
case 2:t.xh("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3t.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bg4(u,C.hff(v.c,u),new C.d3s(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d3s.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d3u.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bjp(d.d,d.c,u.f.t(0,d.a),new C.d3r(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d3r.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fkl.prototype={
$1(d){var w,v=d.e
if(this.a.ah(0,v))return v
v=this.b
w=A.S(v)
return A.qZ(new A.cQ(new A.a2(v,new C.fkm(d),w.k("a2<1>")),new C.fkn(),w.k("cQ<1,n>")))},
$S:z+20}
C.fkm.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fkn.prototype={
$1(d){return d.a},
$S:z+7}
C.fkj.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fkk.prototype={
$1(d){return d.b},
$S:z+7}
C.fkq.prototype={
$1(d){var w,v=d.e
if(this.a.ah(0,v))return v
v=this.b
w=A.S(v)
return A.qZ(new A.cQ(new A.a2(v,new C.fkr(d),w.k("a2<1>")),new C.fks(),w.k("cQ<1,n>")))},
$S:z+20}
C.fkr.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fks.prototype={
$1(d){return d.a},
$S:z+7}
C.fko.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ah(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fkp.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d3w.prototype={
$0(){return this.a},
$S:z+32}
C.d3N.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ah(0,d)},
$S:253}
C.d3F.prototype={
$2(d,e){var w=this.a.cg(0,d,new C.d3G()),v=J.a8(w)
if(!v.t(w,e))v.J(w,e)},
$S:121}
C.d3G.prototype={
$0(){return A.a([],x.s)},
$S:629}
C.d3E.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eY(w,e)
return w===!0},
$S:324}
C.d3x.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d3D.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d3C.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.Bz:v)
u=1
while(v.C())u+=s.$2(v.gU(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.T:v)
while(v.C()){t=v.gU(v)
if(e.t(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.Bz:t)
while(t.C())u+=s.$2(t.gU(t).a,e)}return u},
$S:1902}
C.d3y.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d3H.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.T:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gU(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.J(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.Bz:t)
while(t.C()){r=t.gU(t)
if(r.a!==a9&&!B.d.b8(w,new C.d3I(r)))w.push(r)}}B.d.bn(w,new C.d3J(a8))
B.d.b1(w,new C.d3K())
q=C.hCk(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.ep0],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gL(k)+B.d.gam(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bmm(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1903}
C.d3I.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d3J.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d3K.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d3L.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a8(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a3(v).k("bc<2>")).cH(0,0,B.qd)+88-w.gL(n).a}else u=0
for(w=J.a8(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:514}
C.d3M.prototype={
$1(d){return 16+d*156},
$S:255}
C.d3v.prototype={
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
t.n(0,d,new C.F5(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.F5(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.F5(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gU(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Jf(d,new A.u(e+t,w),s,s.length))}},
$S:193}
C.d3z.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aHg(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:121}
C.d3A.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d3B.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:530}
C.d3O.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:530}
C.d3P.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:352}
C.d3Q.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:186}
C.d3R.prototype={
$1(d){return d>=0.5},
$S:136}
C.f3g.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hm(A.aK(!1,v,!0,new A.a6(38,38,A.W(d,this.a.c?B.c:B.cC,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1905}
C.eFA.prototype={
$1(d){var w=null,v=A.m(8),u=B.bT.j(0.12),t=A.m(8)
return new A.C(B.nD,A.aK(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eUl,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Ly,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFz(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eFz.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.djE.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.djD.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.n9,B.L,w,w)
return A.eh(A.a([A.bK(!1,B.dd,w,w,!0,w,w,new C.djB(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.m2,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.djC(d),w,w)],x.p),B.b9,B.Ez,w,u,D.bpW,w,D.brR,new A.b7(v,B.Y),w,w)},
$S:19}
C.djB.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.djC.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.djN.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.djO.prototype={
$1(d){var w=this.a
return w.m(new C.djM(w,d))},
$S:z+37}
C.djM.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djP.prototype={
$1(d){var w=null
return A.q3(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.djS.prototype={
$1(d){var w=this.a
return w.m(new C.djL(w,d))},
$S:33}
C.djL.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.djR.prototype={
$1(d){var w=null
return A.q3(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.djT.prototype={
$1(d){var w=this.a
return w.m(new C.djK(w,d))},
$S:33}
C.djK.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.djU.prototype={
$0(){var w=this.a
return w.m(new C.djJ(w))},
$S:0}
C.djJ.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.djV.prototype={
$0(){var w=this.a
return w.m(new C.djI(w))},
$S:0}
C.djI.prototype={
$0(){return++this.a.at},
$S:0}
C.djW.prototype={
$0(){var w=this.a
return w.m(new C.djH(w))},
$S:0}
C.djH.prototype={
$0(){return--this.a.ax},
$S:0}
C.djX.prototype={
$0(){var w=this.a
return w.m(new C.djG(w))},
$S:0}
C.djG.prototype={
$0(){return++this.a.ax},
$S:0}
C.djY.prototype={
$1(d){var w=this.a
return w.m(new C.djF(w,d))},
$S:9}
C.djF.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.djQ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.djZ.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.dW:B.c
v=A.m(12)
if(p)u=B.bT
else u=(q.c.a?B.dZ:B.bW).j(0.85)
u=A.I(u,B.r,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bq:B.bp
t=A.W(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bq:B.bp
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,o,!0,A.df(r,A.v(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bb,new A.o(w,r,u,v,r,r,B.n),B.eD,r,r,r,B.jp,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dk_(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af),1)},
$S:z+39}
C.dk_.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dk8.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.c5H.prototype={
$2(d,e){return new A.bu(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c5O.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c5P.prototype={
$2(d,e){var w=J.b6(e,new C.c5N(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bu(d,w,x.d2)},
$S:z+41}
C.c5N.prototype={
$1(d){return d.ad()},
$S:z+21}
C.c5J.prototype={
$1(d){return C.aje(A.a1(d,x.N,x.z))},
$S:z+8}
C.c5K.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c5L.prototype={
$1(d){return C.fWX(A.a1(d,x.N,x.z))},
$S:z+11}
C.c5M.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c5T.prototype={
$1(d){return new A.aEm(d.f.length,d.a,d.b)},
$S:z+43}
C.c5U.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:757}
C.c5Q.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c5R.prototype={
$1(d){return d.cCB(C.FM(d,this.a))},
$S:z+44}
C.dPU.prototype={
$1(d){return C.tF(d,this.a.a.c)},
$S:z+2}
C.dPV.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dPZ.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dQ_.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dPR.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYe(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xO("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oQ(r.c,r.e),$async$$0)
case 4:s.xO(p)
w=5
return A.b(s.IO(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPS.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYe(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xO("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oQ(r.c,r.e),$async$$0)
case 4:s.xO(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPT.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.U1(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xO("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xO("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xO("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.IO(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a9(j)
o=r.a
if(o.c==null){w=1
break}o.xO(B.a.e7(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dPY.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aYd(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xO("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a5(r,!1).ci(A.em(new C.dPX(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oQ(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPX.prototype={
$1(d){var w=this.b
return new C.Za(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dPW.prototype={
$1(d){return D.fFD},
$S:z+46}
C.dQ1.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dQ2.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dQ0(w,d)
return new A.C(B.db,new C.bcr(this.b,d.c,d.a,w,null),null)},
$S:1906}
C.dQ0.prototype={
$0(){return this.a.Ws(this.b.b)},
$S:0}
C.dPM.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dPN.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dPO.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dPP.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dPQ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.dQ3.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.ds(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a5(this.b,!1).N(s)
return}},
$S:196}
C.dBF.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dBG.prototype={
$0(){return B.d.gL(D.a1P)},
$S:z+48}
C.dBH.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.W(this.b.d,B.c.j(0.95),w,w,D.cOz,44),w,w,w),w,w,new C.bhc(u,t,v,w),B.at)},
$S:69}
C.fAb.prototype={
$1(d){return A.oA(new C.fAa(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:128}
C.fAa.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dW:B.c,p=A.a([new A.ad(0,B.G,B.w.j(r?0.35:0.08),B.r7,24)],x.V),o=r?B.dZ:B.bW
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aU.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bFl,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a7(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.aA,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.agq,A.A(A.a([w,B.bf,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bp,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ib(!0,t,e,B.y,D.eHK,new C.fA9(this.b,s),20,B.ag0,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kt,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:110}
C.fA9.prototype={
$2(d,e){var w=null,v=D.a1P[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dZ:B.bW,B.r,1),q=A.a([new A.ad(0,B.G,B.w.j(s?0.35:0.08),B.ei,8)],x.V),p=A.m(15),o=A.D(new C.a52(v.a,!0,w),1),n=s?B.jl:B.iK,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.aA,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aK(!1,u,!0,A.ex(A.bv(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bp,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l3,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fA8(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.af)},
$S:76}
C.fA8.prototype={
$0(){A.a5(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cdl.prototype={
$0(){return this.a.aem(this.b)},
$S:0}
C.fzy.prototype={
$1(d){return D.fBY},
$S:z+74}
C.fH_.prototype={
$1(d){var w=this
return new C.a_T(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fzD.prototype={
$1(d){return new C.XP(this.a,null)},
$S:z+51}
C.fzC.prototype={
$1(d){return D.fCX},
$S:z+52}
C.cWB.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cWC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cWA(w,d))},
$S:33}
C.cWA.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cWD.prototype={
$1(d){return this.a.Jn()},
$S:2}
C.cWE.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cWx.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cWy.prototype={
$1(d){return this.a.Jn()},
$S:2}
C.cWz.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cua.prototype={
$0(){},
$S:0}
C.cug.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.cuh.prototype={
$0(){return this.a.aM0(-1)},
$S:0}
C.cui.prototype={
$1(d){return this.a.m(new C.cuf())},
$S:2}
C.cuf.prototype={
$0(){},
$S:0}
C.cuj.prototype={
$0(){return this.a.aM0(1)},
$S:0}
C.cuk.prototype={
$1(d){return this.a.m(new C.cue())},
$S:2}
C.cue.prototype={
$0(){},
$S:0}
C.cul.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aU.j(0.2)
if(s)v=B.aU
else v=this.b.a?B.dZ:B.bW
return A.u_(u,u,B.aZ,r,u,new C.cud(t,d),B.AC,s,w,u,new A.az(v,1,B.r,-1),B.c7)},
$S:1907}
C.cud.prototype={
$1(d){var w=this.a
return w.m(new C.cub(w,this.b))},
$S:9}
C.cub.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cum.prototype={
$1(d){return this.a.m(new C.cuc())},
$S:2}
C.cuc.prototype={
$0(){},
$S:0}
C.cun.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.f2J.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a5(this.b,!1).N(w)},
$S:2}
C.f2K.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.f2L.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a5(this.b,!1).N(w)},
$S:0}
C.f2H.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbvk()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.brQ,new A.et(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.btr(p,v,this.b.a,u,t,r),r,r,B.at)},
$S:69}
C.f2I.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dI.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aU,B.bT,w)
s.toString
s=A.a([B.aZ,s,B.aU],x.O)
return A.aF(!1,B.a1,!0,p,A.aK(!1,v,!0,A.ex(D.e0n,r,new A.o(r,r,A.I(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d8(-1.2+t,-0.5),new A.d8(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.af)},
$S:131}
C.fyj.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.eCK.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eCB.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eCC.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eCI.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e5(new C.eCH(w,this.b),null)},
$S:20}
C.eCH.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dW:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.aA,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eD(w,u,new A.C(B.agk,A.v(A.a([s,B.ao,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bp,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h1M(new C.eCE(r,e),r.a),B.az,A.A(A.a([A.D(A.dW(B.dd,new C.eCF(d),w),1),B.aw,A.D(A.bJ(B.SQ,new C.eCG(r,d),A.bk(B.aU,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.cZ,w,new A.b7(t,B.Y),w)},
$S:98}
C.eCE.prototype={
$1(d){return this.b.$1(new C.eCD(this.a,d))},
$S:33}
C.eCD.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eCF.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eCG.prototype={
$0(){var w=this.a.a
A.a5(this.b,!1).N(w)
return null},
$S:0}
C.eCJ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.RN(this.b)},
$S:0}
C.eCw.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b8K(w)},
$S:0}
C.eCA.prototype={
$1(d){return this.bhz(d)},
bhz(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Kr(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iK(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eCz.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.S(w).k("a2<1>")
w=A.B(new A.a2(w,new C.eCy(this.b),v),v.k("H.E"))
u.d=t.b8K(w)},
$S:0}
C.eCy.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eCL.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iK(this.b,w)},
$S:0}
C.eCM.prototype={
$1(d){return this.a.bzm(d,this.b)},
$S:z+55}
C.eCx.prototype={
$0(){return this.a.a8v(this.b)},
$S:0}
C.fGS.prototype={
$1(d){return new C.aca(this.a,this.b,this.c,null)},
$S:z+56}
C.eCO.prototype={
$0(){return this.a.Z4(this.b)},
$S:0}
C.eCP.prototype={
$0(){return this.a.P5(this.b)},
$S:0}
C.eCQ.prototype={
$0(){return this.a.DI(this.b)},
$S:0}
C.eCR.prototype={
$0(){return this.a.Z5(this.b)},
$S:0}
C.eCN.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eCr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eCs.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eCt.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
C.eCv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pt(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eCu(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eCu.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eDd.prototype={
$2(d,e){return d+e.gwt()},
$S:z+59}
C.eD9.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eDa.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eCV.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dW:B.c,s=A.m(24),r=A.p(v,D.bFL,B.f,v,v,new A.o(B.aD.j(u?0.18:0.08),v,A.I(B.aD.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.aA,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bp,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.aA
u=u?B.dZ:B.bW
w=x.p
return A.eD(v,t,new A.C(B.xc,A.v(A.a([r,B.aO,q,B.P,p,B.d6,A.A(A.a([A.D(A.dW(B.nc,new C.eCT(d),A.dd(v,v,v,v,v,v,v,v,v,o,v,v,B.f3,v,new A.b7(A.m(14),B.Y),new A.az(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bJ(D.fmP,new C.eCU(d),A.bk(B.aD,v,v,v,v,v,B.f3,v,new A.b7(A.m(14),B.Y),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.cZ,v,new A.b7(s,B.Y),v)},
$S:46}
C.eCT.prototype={
$0(){A.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eCU.prototype={
$0(){A.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eD3.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dW:B.c,i=A.m(28),h=A.a([new A.ad(0,B.G,B.w.j(k?0.35:0.08),B.fK,28)],x.V),g=k?D.cUS:B.a1f,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.az,D.eC_,B.au,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cs,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a7(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.agn,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bp,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.D(v.b27(B.b4,B.iO,new C.eD0(v,d),l,"Camera import","Scan QR"),1),B.aw,A.D(v.b27(B.cv,N.xT,new C.eD1(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bp,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aD.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.aD.j(0.28),B.r,1)
o=A.p(m,D.bF9,B.f,m,m,new A.o(B.aD.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.aA,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bp,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bp(!0,new A.C(B.uV,A.p(m,A.v(A.a([g,new A.C(B.agl,A.v(A.a([w,B.S,u,B.bu,t,B.S,A.aF(!1,B.a1,!0,m,A.aK(!1,s,!0,A.p(m,A.A(A.a([o,B.bf,n,A.W(B.en,k?B.bq:B.bp,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eD2(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.af)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:31}
C.eD0.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.v0("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eD1.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.v0("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eD2.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a5(u.b,!1).N(null)
w=2
return A.b(u.a.MZ(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eCZ.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dW:B.c,m=A.m(24),l=A.a([new A.ad(0,B.G,B.w.j(o?0.35:0.08),B.eT,24)],x.V),k=o?B.dZ:B.bW
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bp
u=A.bv(w,new A.a6(48,48,C.aOv(!0,A.m(12),48,Q.M8,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.aA,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Ad(v.gwt())
s=x.p
r=this.a
return A.bp(!0,new A.C(B.uV,A.p(q,A.v(A.a([B.S,k,new A.C(D.agi,A.A(A.a([u,B.bf,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bp,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.Ai,r.cgp(B.tB,B.aU,new C.eCX(d),p,"QR code or backup file","Transfer project"),r.b_b(!0,B.e4,B.aD,new C.eCY(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:31}
C.eCX.prototype={
$0(){A.a5(this.a,!1).N("transfer")
return null},
$S:0}
C.eCY.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
C.eD_.prototype={
$1(d){return this.bhA(d)},
bhA(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Kr(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vd(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eDg.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eDf(w))},
$S:0}
C.eDf.prototype={
$0(){return this.a.r++},
$S:0}
C.eDh.prototype={
$0(){var w=this.a
return w.m(new C.eDe(w))},
$S:0}
C.eDe.prototype={
$0(){return this.a.r++},
$S:0}
C.eCS.prototype={
$0(){var w=this.a.c
w.toString
return A.iK(w,null)},
$S:0}
C.eCW.prototype={
$0(){return this.a.c9O(this.b)},
$S:0}
C.eDc.prototype={
$0(){var w=this.a
return w.m(new C.eDb(w,this.b))},
$S:0}
C.eDb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eD6.prototype={
$0(){return this.a.v0("scan")},
$S:0}
C.eD7.prototype={
$0(){return this.a.v0("file")},
$S:0}
C.eD8.prototype={
$1(d){return this.a.cgq(d,this.b)},
$S:z+60}
C.eD5.prototype={
$0(){return this.a.DM(this.b)},
$S:0}
C.eD4.prototype={
$0(){return this.a.ZA(this.b,this.c)},
$S:0}
C.ctC.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.ctB.prototype={
$1(d){return d.ad()},
$S:z+62}
C.ctz.prototype={
$1(d){return C.hl2(A.a1(d,x.N,x.z))},
$S:z+63}
C.ctA.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fjw.prototype={
$1(d){return d.y===D.kc},
$S:z+2}
C.fHl.prototype={
$1(d){return C.bze(d,this.a)},
$S:z+2}
C.fi9.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bLo.prototype={
$1(d){return!d.as},
$S:z+1}
C.bLn.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bLk.prototype={
$1(d){return C.fWY(A.a1(d,x.N,x.z))},
$S:z+14}
C.bLl.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bLm.prototype={
$1(d){return J.k(d)},
$S:17}
C.fag.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.f5Z.prototype={
$1(d){return C.fNz(A.a1(d,x.N,x.z))},
$S:z+67}
C.f6_.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f60.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fzp.prototype={
$1(d){return J.k(d)},
$S:17}
C.fzq.prototype={
$1(d){return d.a},
$S:z+69}
C.fzr.prototype={
$1(d){return d.length!==0},
$S:3}
C.fzs.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fzt.prototype={
$1(d){return d.RN(null).ad()},
$S:z+70}
C.fHj.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fjY.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fml.prototype={
$1(d){return C.aje(A.a1(d,x.N,x.z))},
$S:z+8}
C.fmm.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fmn.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fmo.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fmp.prototype={
$1(d){return C.tF(d,this.a)},
$S:z+2}
C.fzc.prototype={
$1(d){return C.tF(d,this.a)},
$S:z+2}
C.fHe.prototype={
$1(d){return C.aje(A.a1(d,x.N,x.z))},
$S:z+8}
C.fHf.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fHg.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fjF.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fjG.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fHp.prototype={
$1(d){return!d.as},
$S:z+1}
C.fjf.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fjg.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fjh.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fH0.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fn7.prototype={
$1(d){return d.Q},
$S:z+72}
C.fz8.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fmi.prototype={
$1(d){return C.aje(A.a1(d,x.N,x.z))},
$S:z+8}
C.fmj.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fmk.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fz4.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f6v.prototype={
$1(d){return d.length!==0},
$S:3}
C.f6w.prototype={
$1(d){return C.fWY(A.a1(d,x.N,x.z))},
$S:z+14}
C.f6x.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f6y.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f6z.prototype={
$1(d){return d.length!==0},
$S:3}
C.f6M.prototype={
$2(d,e){return d.eS(new C.f6N(e))},
$S:1908}
C.f6N.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1909}
C.f6J.prototype={
$1(d){return C.hGV(d,this.a)},
$S:z+73}
C.f6K.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f6L.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.faV.prototype={
$1(d){return d.a},
$S:z+49}
C.faW.prototype={
$1(d){return d.length!==0},
$S:3}
C.faX.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fcZ.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fhw.prototype={
$1(d){return C.h7e(d,C.FM(d,this.a))},
$S:z+5}
C.fhx.prototype={
$1(d){return C.h7f(d,C.FM(d,this.a))},
$S:z+5};(function aliases(){var w=C.aJC.prototype
w.brC=w.q
w=C.aLL.prototype
w.btX=w.q
w=C.aLM.prototype
w.btY=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aB7.prototype,"gcdn","cdo",25)
var s
w(s=C.ay9.prototype,"gc6p","c6q",42)
v(s,"gaKh","Mx",0)
v(s,"gclr","Ae",0)
v(s,"gbGZ","Nc",0)
v(s,"gcz1","xP",0)
v(s,"gcfn","a_h",0)
v(s,"gbCr","MV",0)
v(s,"gbHp","VU",0)
w(s,"gbLS","bLT",71)
v(s,"gbwX","zi",0)
v(C.aya.prototype,"gcyY","ED",0)
v(s=C.aBI.prototype,"gadZ","ve",0)
v(s,"gc93","Zr",0)
v(s,"gaOh","Hd",0)
v(s=C.aBF.prototype,"gcvl","a1j",0)
v(s,"gadZ","ve",0)
v(s,"gcjx","a_X",0)
v(s,"gca0","ZF",0)
w(s,"gc6j","c6k",30)
v(s,"gbHg","Hi",0)
v(s,"gcwf","cwg",3)
v(s,"gbYd","Xy",0)
w(s,"gc4Q","c4R",23)
v(s,"gc8O","c8P",3)
v(s=C.aA6.prototype,"gc2F","OF",0)
v(s,"gc2H","c2I",3)
v(s,"gbDX","a87",0)
v(s=C.aBH.prototype,"gbKp","Wo",0)
v(s,"gbUD","X1",0)
v(s,"gcpL","a0M",0)
v(s,"gcm0","a0o",0)
v(C.aBG.prototype,"gclJ","afI",0)
v(C.aqR.prototype,"gc4O","Z3",0)
v(C.awW.prototype,"ga13","Jn",3)
v(C.awV.prototype,"ga13","Jn",3)
v(C.avF.prototype,"ga13","Jn",3)
v(s=C.aDc.prototype,"gaZA","PA",0)
v(s,"gbvN","UF",0)
v(s,"gc9P","c9Q",3)
w(C.aDb.prototype,"gc5E","c5F",57)
u(C.aDd.prototype,"gaOb",0,0,null,["$1","$0"],["Hc","bFd"],58,0,0)
t(C,"hes","hQu",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.amK,C.tX,C.n_,C.GR,C.adm,C.J6,C.tY,C.Jf,C.F5,C.bcp,C.aHg,C.anU,C.d3S,C.lr,C.aRm,C.aRl,C.aPr,C.tt,C.qI,C.la,C.hT,C.kt,C.aFg])
u(A.i7,[C.fqZ,C.fqY,C.fr_,C.fA4,C.fgs,C.fgt,C.fgy,C.foI,C.foH,C.foG,C.c_9,C.fAA,C.fAs,C.fAE,C.fjN,C.dCl,C.dCg,C.dCh,C.dBU,C.dBQ,C.dCA,C.dCB,C.dCu,C.dCv,C.dCC,C.dCD,C.fkh,C.fmf,C.fmg,C.fza,C.fHd,C.fjE,C.fzJ,C.d34,C.d2r,C.d2A,C.d2R,C.d2w,C.d2C,C.d2t,C.d2G,C.d2H,C.d2F,C.d2W,C.d2V,C.d4Q,C.d4R,C.d4S,C.d3i,C.d3n,C.d3m,C.cCn,C.cCp,C.cVP,C.cWd,C.cWe,C.cWh,C.cWj,C.cWk,C.cWl,C.cWn,C.cWo,C.dQ7,C.dPx,C.dPs,C.dP0,C.dPd,C.dPg,C.dPp,C.dOP,C.dPA,C.dPu,C.dOR,C.dOS,C.dOT,C.dOY,C.dOW,C.dOV,C.dPa,C.dPb,C.dP5,C.dPH,C.dPD,C.d3t,C.d3u,C.fkl,C.fkm,C.fkn,C.fkj,C.fkk,C.fkq,C.fkr,C.fks,C.fko,C.fkp,C.d3N,C.d3D,C.d3y,C.d3I,C.d3J,C.d3M,C.d3A,C.d3P,C.d3Q,C.d3R,C.f3g,C.eFA,C.djD,C.djN,C.djO,C.djP,C.djS,C.djR,C.djT,C.djY,C.djZ,C.c5O,C.c5N,C.c5J,C.c5K,C.c5L,C.c5M,C.c5T,C.c5Q,C.c5R,C.dPU,C.dPX,C.dPW,C.dQ2,C.dQ3,C.dBF,C.fAb,C.fzy,C.fH_,C.fzD,C.fzC,C.cWC,C.cWD,C.cWy,C.cui,C.cuk,C.cul,C.cud,C.cum,C.f2J,C.fyj,C.eCI,C.eCE,C.eCA,C.eCy,C.eCM,C.fGS,C.eCV,C.eD3,C.eCZ,C.eD_,C.eD8,C.ctB,C.ctz,C.ctA,C.fjw,C.fHl,C.fi9,C.bLo,C.bLn,C.bLk,C.bLl,C.bLm,C.f5Z,C.f6_,C.fzp,C.fzq,C.fzr,C.fzs,C.fzt,C.fHj,C.fjY,C.fml,C.fmm,C.fmo,C.fmp,C.fzc,C.fHe,C.fHf,C.fHg,C.fjF,C.fjG,C.fHp,C.fjf,C.fjg,C.fH0,C.fn7,C.fz8,C.fmi,C.fmj,C.fz4,C.f6v,C.f6w,C.f6x,C.f6y,C.f6z,C.f6N,C.f6J,C.f6K,C.faV,C.faW,C.fcZ,C.fhw,C.fhx])
u(A.au,[C.aWM,C.ajc,C.aSB,C.Xv,C.b8a,C.bcn,C.bg4,C.btC,C.bjp,C.abP,C.bg3,C.abO,C.bg2,C.aA7,C.aGj,C.abQ,C.J2,C.bco,C.ab6,C.bcm,C.bcr,C.aWK,C.aqR,C.aca])
u(A.ni,[C.b8M,C.b9X,C.b9O,C.aFb,C.bf7,C.bcq,C.bbv,C.bhc,C.btr])
u(A.jr,[C.fAx,C.fAy,C.fAz,C.fAq,C.fAr,C.fAC,C.fAD,C.dCx,C.dCj,C.dCm,C.dC0,C.dC1,C.dC2,C.dC_,C.dC7,C.dBZ,C.dC8,C.dC9,C.dBY,C.dCa,C.dBX,C.dCb,C.dBW,C.dCc,C.dBO,C.dBP,C.dBV,C.dCd,C.dBT,C.dCe,C.dBS,C.dC3,C.dBR,C.dC4,C.dBN,C.dC5,C.dC6,C.dCy,C.dCz,C.dCn,C.dCo,C.dCp,C.dCq,C.dCr,C.dCs,C.dCt,C.dCF,C.dCw,C.fki,C.d2p,C.d2n,C.d2o,C.d2q,C.d33,C.d2T,C.d2Q,C.d2s,C.d2U,C.d2y,C.d2z,C.d2B,C.d2S,C.d2x,C.d2D,C.d30,C.d2N,C.d2M,C.d2O,C.d2P,C.d2I,C.d2K,C.d2L,C.d2E,C.d2X,C.d3_,C.d2u,C.d2v,C.d4P,C.d4O,C.d4N,C.d4M,C.d4T,C.d4L,C.d4U,C.d3j,C.d3k,C.d3l,C.d3o,C.d3h,C.d3g,C.cCo,C.cVO,C.cW0,C.cW_,C.cWf,C.cVZ,C.cWg,C.cVY,C.cVX,C.cWi,C.cVW,C.cW8,C.cW7,C.cWp,C.dQ6,C.dQ5,C.dQ8,C.dQ9,C.dQa,C.dQ4,C.dQc,C.dQb,C.dPv,C.dPw,C.dPy,C.dP1,C.dPf,C.dPe,C.dPh,C.dPr,C.dPk,C.dPj,C.dPl,C.dPi,C.dPm,C.dPn,C.dPq,C.dOQ,C.dPt,C.dOU,C.dOX,C.dOZ,C.dPz,C.dP4,C.dP2,C.dP6,C.dP7,C.dP3,C.dP8,C.dPc,C.dPI,C.dPJ,C.dPB,C.dPE,C.dPF,C.dPG,C.dPL,C.dPC,C.dP_,C.d3s,C.d3r,C.d3w,C.d3G,C.d3x,C.eFz,C.djE,C.djB,C.djC,C.djM,C.djL,C.djK,C.djU,C.djJ,C.djV,C.djI,C.djW,C.djH,C.djX,C.djG,C.djF,C.djQ,C.dk_,C.dk8,C.dPV,C.dPZ,C.dQ_,C.dPR,C.dPS,C.dPT,C.dPY,C.dQ1,C.dQ0,C.dPM,C.dPN,C.dPO,C.dPP,C.dPQ,C.dBG,C.fA8,C.cdl,C.cWB,C.cWA,C.cWE,C.cWx,C.cWz,C.cua,C.cug,C.cuh,C.cuf,C.cuj,C.cue,C.cub,C.cuc,C.cun,C.f2K,C.f2L,C.eCK,C.eCB,C.eCC,C.eCD,C.eCF,C.eCG,C.eCJ,C.eCw,C.eCz,C.eCL,C.eCx,C.eCO,C.eCP,C.eCQ,C.eCR,C.eCN,C.eCr,C.eCs,C.eCt,C.eCv,C.eCu,C.eD9,C.eDa,C.eCT,C.eCU,C.eD0,C.eD1,C.eD2,C.eCX,C.eCY,C.eDg,C.eDf,C.eDh,C.eDe,C.eCS,C.eCW,C.eDc,C.eDb,C.eD6,C.eD7,C.eD5,C.eD4])
u(A.ag,[C.amR,C.RG,C.Yc,C.Yg,C.Ye,C.XN,C.anX,C.anR,C.YQ,C.anV,C.Za,C.Zb,C.a52,C.XP,C.XO,C.Xm,C.a_T,C.ET,C.avy,C.aqQ,C.aqK,C.aqP,C.N9])
u(A.ah,[C.aB7,C.bck,C.ay9,C.bcF,C.aya,C.b9V,C.aBI,C.aBF,C.aA6,C.aBH,C.aBG,C.bhw,C.aJC,C.awW,C.awV,C.avF,C.btu,C.aLL,C.aLM,C.aDc,C.biT,C.aDb,C.bvf])
u(A.kE,[C.dCi,C.dCk,C.dCf,C.dCE,C.fmh,C.bLj,C.d32,C.d31,C.d2J,C.d2Y,C.d2Z,C.d3p,C.dPo,C.dP9,C.dPK,C.d3F,C.d3E,C.d3C,C.d3H,C.d3K,C.d3L,C.d3v,C.d3z,C.d3B,C.d3O,C.c5H,C.c5P,C.c5U,C.dBH,C.fAa,C.fA9,C.f2H,C.f2I,C.eCH,C.eDd,C.ctC,C.fag,C.f60,C.fmn,C.fjh,C.fmk,C.f6M,C.f6L,C.faX])
t(C.bhd,C.aJC)
u(A.mr,[C.aa9,C.aHY,C.GS,C.ajd,C.ctD,C.ctE])
t(C.bts,C.aLL)
t(C.btt,C.aLM)
t(C.aDd,C.bvf)
t(C.b6D,A.b6s)
t(C.btv,A.a4I)
t(C.b6C,C.btv)
w(C.aJC,A.eQ)
w(C.aLL,A.c8)
w(C.aLM,A.c8)
v(C.bvf,A.eu)
v(C.btv,A.iY)})()
A.kl(b.typeUniverse,JSON.parse('{"aWM":{"au":[],"r":[]},"b8M":{"aB":[]},"amR":{"ag":[],"r":[]},"aB7":{"ah":["amR"]},"RG":{"ag":[],"r":[]},"ajc":{"au":[],"r":[]},"aSB":{"au":[],"r":[]},"bck":{"ah":["RG"]},"Yc":{"ag":[],"r":[]},"Yg":{"ag":[],"r":[]},"Ye":{"ag":[],"r":[]},"XN":{"ag":[],"r":[]},"ay9":{"ah":["Yc"]},"bcF":{"ah":["Yg"]},"aya":{"ah":["Ye"]},"Xv":{"au":[],"r":[]},"b9X":{"aB":[]},"b9O":{"aB":[]},"b9V":{"ah":["XN"]},"aFb":{"aB":[]},"bf7":{"aB":[]},"b8a":{"au":[],"r":[]},"anX":{"ag":[],"r":[]},"anR":{"ag":[],"r":[]},"YQ":{"ag":[],"r":[]},"abQ":{"au":[],"r":[]},"aBI":{"ah":["anX"]},"aBF":{"ah":["anR"]},"bcn":{"au":[],"r":[]},"bcq":{"aB":[]},"bg4":{"au":[],"r":[]},"bbv":{"aB":[]},"btC":{"au":[],"r":[]},"bjp":{"au":[],"r":[]},"aA6":{"ah":["YQ"]},"abP":{"au":[],"r":[]},"bg3":{"au":[],"r":[]},"abO":{"au":[],"r":[]},"bg2":{"au":[],"r":[]},"aA7":{"au":[],"r":[]},"aGj":{"au":[],"r":[]},"J2":{"au":[],"r":[]},"anV":{"ag":[],"r":[]},"Za":{"ag":[],"r":[]},"Zb":{"ag":[],"r":[]},"aBH":{"ah":["anV"]},"bco":{"au":[],"r":[]},"ab6":{"au":[],"r":[]},"bcm":{"au":[],"r":[]},"bcr":{"au":[],"r":[]},"aBG":{"ah":["Za"]},"bhw":{"ah":["Zb"]},"aWK":{"au":[],"r":[]},"a52":{"ag":[],"r":[]},"bhd":{"ah":["a52"]},"bhc":{"aB":[]},"aqR":{"au":[],"r":[]},"XP":{"ag":[],"r":[]},"XO":{"ag":[],"r":[]},"Xm":{"ag":[],"r":[]},"a_T":{"ag":[],"r":[]},"awW":{"ah":["XP"]},"awV":{"ah":["XO"]},"avF":{"ah":["Xm"]},"btu":{"ah":["a_T"]},"ET":{"ag":[],"r":[]},"avy":{"ag":[],"r":[]},"bts":{"ah":["ET"]},"btt":{"ah":["avy"]},"btr":{"aB":[]},"aqQ":{"ag":[],"r":[]},"aDc":{"ah":["aqQ"]},"aca":{"au":[],"r":[]},"aqK":{"ag":[],"r":[]},"aqP":{"ag":[],"r":[]},"biT":{"ah":["aqK"]},"aDb":{"ah":["aqP"]},"N9":{"ag":[],"r":[]},"aDd":{"ah":["N9"],"eu":[]},"b6C":{"iY":[],"fd":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aA
return{e2:w("aPr"),Q:w("qI"),n:w("br<n,n>"),c5:w("aRl"),dY:w("aRm"),d:w("eN<n?>"),e:w("GR"),B:w("n_"),P:w("hT"),k:w("kt"),x:w("ax<~>"),f5:w("P<ah7>"),V:w("P<ad>"),t:w("P<qI>"),O:w("P<w>"),ac:w("P<eN<n?>>"),I:w("P<n_>"),u:w("P<hT>"),_:w("P<kt>"),cl:w("P<ax<ak<a4<n,@>>>>"),R:w("P<n1>"),cq:w("P<ak<+(N,N)>>"),ez:w("P<a4<n,aC>>"),gE:w("P<a4<n,n>>"),c7:w("P<a4<n,@>>"),fD:w("P<mg>"),bp:w("P<o2>"),g:w("P<u>"),v:w("P<hE>"),L:w("P<+(n,n)>"),G:w("P<+(N,N)>"),bF:w("P<+count,id,name(G,n,n)>"),A:w("P<cP>"),s:w("P<n>"),aS:w("P<iN>"),p:w("P<r>"),C:w("P<fd>"),D:w("P<la>"),fp:w("P<J6>"),M:w("P<Jf>"),gZ:w("P<aFg>"),Y:w("P<adm>"),E:w("P<aHg>"),F:w("P<N>"),dC:w("P<G>"),dS:w("P<aB?>"),d4:w("P<n?>"),J:w("cs<ah<ag>>"),b:w("ak<n_>"),do:w("ak<hT>"),r:w("ak<kt>"),U:w("ak<a4<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(G,n,n)>"),h:w("ak<n>"),c:w("ak<la>"),j:w("ak<@>"),fK:w("bu<n,n>"),d2:w("bu<n,ak<a4<n,@>>>"),a:w("a4<n,@>"),f:w("a4<@,@>"),gv:w("J<n,GT>"),w:w("iI"),g2:w("r2"),bV:w("amK"),fL:w("co"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(N,ak<hT>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),e7:w("bm<N>"),gc:w("dC"),b4:w("cz<G>"),W:w("k8<n>"),l:w("r"),cM:w("fd"),i:w("la"),cc:w("F5"),bw:w("abO<n?>"),cy:w("Jh"),q:w("mP"),y:w("Q"),gR:w("N"),z:w("@"),S:w("G"),eK:w("ak<kt>?"),m:w("anU?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),X:w("+qrPayload,token,usesRemaining(n,n,G)?"),gF:w("+members,trees,viewOnly(G,G,Q)?"),Z:w("qk?"),T:w("n?"),aD:w("dC?"),o:w("la?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aUY=new A.bs(B.hc,B.bD,B.hc,B.bD)
D.a8Q=new A.bs(B.hc,B.jX,B.hc,B.jX)
D.aV9=new A.bs(B.hO,B.bD,B.bD,B.bD)
D.aVd=new A.az(B.cY,1.4,B.r,-1)
D.aVn=new A.az(B.ad,1,B.r,-1)
D.aWN=new A.aY(0,1/0,64,1/0)
D.aWR=new A.aY(0,84,0,1/0)
D.avO=w([B.lv,B.qu,B.c],x.O)
D.bQf=new A.a7(B.ax,B.aC,B.x,D.avO,null,null)
D.aXB=new A.o(null,null,null,null,null,D.bQf,B.n)
D.cUo=w([B.aU,B.bT],x.O)
D.bSk=new A.a7(B.b0,B.b5,B.x,D.cUo,null,null)
D.aXV=new A.o(null,null,null,null,null,D.bSk,B.n)
D.b30=new A.fh(null,null,null,null,null,E.jG,null,null,null,null)
D.aa8=new A.cq(B.A,null,null,D.b30,null)
D.k5=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eSm=new A.F(!0,D.k5,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa5=new A.x("No books on the shelf yet.",null,D.eSm,null,null,null,null,null,null,null,null,null)
D.e0o=new A.C(B.nE,D.fa5,null)
D.b1A=new A.cq(B.A,null,null,D.e0o,null)
D.b2s=new A.cq(B.A,null,null,W.UG,null)
D.b4q=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b4T=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.abc=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b7r=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b7I=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.aco=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bbo=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bbL=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.E_=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bdi=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bfx=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.adZ=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.f4O=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bkI=new A.eN(null,D.f4O,B.f0,null,x.d)
D.fdd=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bkK=new A.eN(null,D.fdd,B.f0,null,x.d)
D.blh=new A.b9(38e5)
D.bm1=new A.i8(0,10,0,10)
D.bmb=new A.O(0,1,0,0)
D.bml=new A.i8(0,4,0,4)
D.bmD=new A.O(10,10,14,10)
D.bmO=new A.i8(10,4,10,4)
D.bmW=new A.i8(10,8,10,8)
D.bmX=new A.O(10,8,8,8)
D.bno=new A.O(12,6,12,2)
D.bnG=new A.O(14,10,6,6)
D.bnH=new A.O(14,12,14,0)
D.bnL=new A.O(14,12,14,8)
D.bnO=new A.O(14,12,8,14)
D.bnS=new A.i8(14,14,14,14)
D.bow=new A.O(16,2,16,10)
D.boG=new A.O(16,6,16,30)
D.boI=new A.O(16,6,16,8)
D.agi=new A.O(18,16,18,8)
D.bpi=new A.O(18,20,18,22)
D.agm=new A.O(18,24,18,24)
D.bpo=new A.O(18,30,18,30)
D.bpG=new A.O(20,10,12,20)
D.bpU=new A.O(20,18,16,18)
D.bpW=new A.O(20,18,20,6)
D.bqL=new A.O(24,32,24,28)
D.bqM=new A.O(24,36,24,32)
D.bqQ=new A.O(26,26,24,14)
D.br3=new A.O(2,4,2,8)
D.br7=new A.O(30,0,30,0)
D.bri=new A.O(38,22,22,22)
D.agD=new A.O(40,24,24,24)
D.brk=new A.i8(40,40,40,40)
D.brm=new A.O(46,30,30,30)
D.agG=new A.O(4,0,0,8)
D.brM=new A.O(56,40,40,40)
D.brQ=new A.O(1.25,1.25,1.25,1.25)
D.brR=new A.O(60,0,60,0)
D.brU=new A.O(6,14,6,16)
D.bs5=new A.i8(7,3,7,3)
D.bsB=new A.O(5,1.5,5,1.5)
D.bsM=new A.O(6,2.5,6,2.5)
D.foL=new A.x("Signature",null,B.nb,null,null,null,null,null,null,null,null,null)
D.bt6=new A.bE(1,B.bi,D.foL,null)
D.flY=new A.x("Tell the AI what to fix",null,B.dF,null,null,null,null,null,null,null,null,null)
D.btP=new A.bE(1,B.bi,D.flY,null)
D.eZy=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnS=new A.x("Worksheets",null,D.eZy,null,null,null,null,null,null,null,null,null)
D.eZG=new A.F(!0,E.aaM,null,null,null,null,13,B.cs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmN=new A.x("Track your project spending",null,D.eZG,null,null,null,null,null,null,null,null,null)
D.cMN=w([D.fnS,B.au,D.fmN],x.p)
D.bif=new A.fl(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cMN,null)
D.btU=new A.bE(1,B.bi,D.bif,null)
D.eUU=new A.F(!0,E.jG,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f40=new A.x("FAMILY LIBRARY",null,D.eUU,null,null,null,null,null,null,null,null,null)
D.bua=new A.bE(1,B.bi,D.f40,null)
D.LM=new C.GR("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Yv=new C.GS(0,"male")
D.ahy=new C.GS(1,"female")
D.xl=new C.GS(2,"unknown")
D.tj=new C.ajd(0,"owner")
D.LN=new C.ajd(1,"editor")
D.kc=new C.ajd(2,"viewer")
D.aij=new A.a0(61199,"MaterialIcons",!1)
D.bxr=new A.a0(61504,"MaterialIcons",!1)
D.bxs=new A.a0(61505,"MaterialIcons",!1)
D.bxu=new A.a0(61587,"MaterialIcons",!1)
D.bxA=new A.a0(61890,"MaterialIcons",!1)
D.byt=new A.a0(63034,"MaterialIcons",!0)
D.bzi=new A.a0(63429,"MaterialIcons",!1)
D.akz=new A.a0(984520,"MaterialIcons",!1)
D.by_=new A.a0(62776,"MaterialIcons",!1)
D.bBE=new A.ae(D.by_,26,B.aZ,null,null,null)
D.bwq=new A.a0(57648,"MaterialIcons",!1)
D.bBX=new A.ae(D.bwq,14,B.c,null,null,null)
D.bCe=new A.ae(B.F9,17,null,null,null,null)
D.bCK=new A.ae(E.Zn,null,null,null,null,null)
D.bCN=new A.ae(B.j7,18,E.jG,null,null,null)
D.Z9=new A.a0(62044,"MaterialIcons",!1)
D.bCT=new A.ae(D.Z9,null,B.aU,null,null,null)
D.bDI=new A.ae(B.dV,16,null,null,null,null)
D.bDP=new A.ae(D.Z9,32,B.aU,null,null,null)
D.bE6=new A.ae(E.aik,18,B.cY,null,null,null)
D.bF9=new A.ae(B.Fj,22,B.aD,null,null,null)
D.bFl=new A.ae(B.dV,22,B.aZ,null,null,null)
D.bFw=new A.ae(O.Ze,22,B.c,null,null,null)
D.bFB=new A.ae(B.ts,52,B.c,null,null,null)
D.bFL=new A.ae(B.Fj,30,B.aD,null,null,null)
D.ala=new A.ae(B.tB,22,B.c,null,null,null)
D.bGc=new A.ae(B.dV,17,null,null,null,null)
D.bGv=new A.ae(B.ve,26,B.cY,null,null,null)
D.bHe=new A.ae(B.Zz,16,null,null,null,null)
D.bHY=new A.ae(B.ts,24,B.c,null,null,null)
D.bI2=new A.ae(B.Me,20,B.r_,null,null,null)
D.bI7=new A.ae(B.F7,null,B.bT,null,null,null)
D.bIe=new A.ae(B.j7,18,B.c,null,null,null)
D.bIQ=new A.ae(B.cw,22,B.ad,null,null,null)
D.bJF=new A.ae(B.e4,16,B.ad,null,null,null)
D.bJR=new A.ae(D.Z9,20,B.aU,null,null,null)
D.alB=new A.ae(B.hw,20,null,null,null,null)
D.bKl=new A.ae(B.cw,18,D.k5,null,null,null)
D.bKD=new A.ae(B.xH,28,B.c,null,null,null)
D.bKL=new A.ae(B.M4,null,B.fU,null,null,null)
D.bL4=new A.ae(B.xH,24,B.c,null,null,null)
D.bLv=new A.ae(B.ts,null,B.aU,null,null,null)
D.bLw=new A.ae(B.jt,20,B.cY,null,null,null)
D.bLQ=new A.ae(B.F9,16,null,null,null,null)
D.bNm=new A.e_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ex,!0,null,null,null,null)
D.d0m=w([B.bs,B.aU,B.f6,B.aZ],x.O)
D.bOJ=new A.a7(B.ax,B.aC,B.x,D.d0m,null,null)
D.bcf=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bhk=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cJP=w([D.bcf,D.bhk],x.O)
D.bOU=new A.a7(B.b0,B.b5,B.x,D.cJP,null,null)
D.cW6=w([B.eX,B.fu,B.f6],x.O)
D.bOY=new A.a7(B.ax,B.aC,B.x,D.cW6,null,null)
D.ad_=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b4U=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cLJ=w([D.ad_,D.b4U],x.O)
D.bPw=new A.a7(B.b0,B.b5,B.x,D.cLJ,null,null)
D.b7T=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.avc=w([D.b7T,D.ad_],x.O)
D.bPQ=new A.a7(B.ax,B.aC,B.x,D.avc,null,null)
D.ac0=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b9S=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cVj=w([D.ac0,D.b9S],x.O)
D.bQq=new A.a7(B.a3,B.a7,B.x,D.cVj,null,null)
D.d6c=w([B.bL,B.mI],x.O)
D.bQs=new A.a7(B.b0,B.b5,B.x,D.d6c,null,null)
D.bcb=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.d73=w([D.bcb,D.k5,D.k5,H.adi],x.O)
D.d9a=w([0,0.07,0.9,1],x.F)
D.bQW=new A.a7(B.a3,B.a7,B.x,D.d73,D.d9a,null)
D.bR6=new A.a7(B.ax,B.aC,B.x,B.PJ,null,null)
D.d5O=w([B.aZ,B.aU,B.bT],x.O)
D.bS6=new A.a7(B.ax,B.aC,B.x,D.d5O,null,null)
D.cct=w([B.bs,B.aZ,B.eX],x.O)
D.ccA=w([B.by,B.aE,B.ji],x.O)
D.ccC=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.baV=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.ciG=w([D.baV,E.acH],x.O)
D.dXf=new A.u(1,2)
D.eE8=new A.cP(B.aW,D.dXf,3)
D.asm=w([D.eE8],x.A)
D.cpU=w([B.fY,B.c8,B.f5],x.O)
D.csx=w([B.bI,B.bv,B.bn],x.O)
D.buD=new C.tX("classic","Classic leather","Gold-edged brown leather",D.avc,E.jG,E.jG,"\u2766",B.L,!0,!1,!1,!1)
D.b4c=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.bgl=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cOi=w([D.b4c,D.bgl],x.O)
D.acK=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.buy=new C.tX("ornate","Ornate gold","Double gold border and flourishes",D.cOi,D.acK,D.acK,"\u2726",B.L,!0,!0,!0,!1)
D.b7z=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bcX=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cGT=w([D.b7z,D.bcX],x.O)
D.bux=new C.tX("parchment","Parchment","Old paper with dark ink",D.cGT,D.E_,G.im,"\u2767",B.L,!0,!1,!1,!0)
D.aaw=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.beS=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d4e=w([D.aaw,D.beS],x.O)
D.bau=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.beg=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.buA=new C.tX("minimal","Clean paper","Plain and elegant, like a printed book",D.d4e,D.bau,D.beg,"",B.L,!0,!0,!1,!0)
D.buC=new C.tX("midnight","Midnight","Deep blue with silver stars",H.avu,B.cm,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.buw=new C.tX("emerald","Emerald library","Green cloth, title on the left",X.asL,E.jG,B.fZ,"\u25c6",B.bg,!0,!1,!1,!1)
D.bfe=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d2M=w([B.eG,D.bfe],x.O)
D.bbw=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bcy=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.buB=new C.tX("rose","Rose vintage","Burgundy with rose-gold lettering",D.d2M,D.bbw,D.bcy,"\u2740",B.L,!0,!1,!0,!1)
D.d6H=w([B.cC,H.oe],x.O)
D.buz=new C.tX("modern","Modern","Dark, bold, left-aligned",D.d6H,B.aX,B.c,"",B.bg,!1,!0,!1,!1)
D.a0t=w([D.buD,D.buy,D.bux,D.buA,D.buC,D.buw,D.buB,D.buz],A.aA("P<tX>"))
D.cGp=w([B.bT,B.bj],x.O)
D.bc1=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cH4=w([D.aaw,D.bc1],x.O)
D.b7w=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cIC=w([D.b7w,B.da],x.O)
D.cK2=w([B.ba,B.iG,B.o8],x.O)
D.cKp=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b4Q=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b9d=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.d96=w([D.ac0,D.b4Q,D.b9d],x.O)
D.buE=new C.tY("leather","Leather",D.d96,"vintage")
D.cRd=w([B.dp,B.K8,M.Vb],x.O)
D.buL=new C.tY("midnight","Midnight",D.cRd,"starry")
D.cK3=w([B.ff,B.e9,B.kZ],x.O)
D.buK=new C.tY("forest","Forest",D.cK3,"story")
D.daX=w([B.eM,B.eG,B.k6],x.O)
D.buH=new C.tY("burgundy","Burgundy",D.daX,"royal")
D.cs7=w([B.aE,B.p7,B.nk],x.O)
D.buI=new C.tY("royal","Royal",D.cs7,"royal")
D.cMj=w([B.bv,B.cC,H.oe],x.O)
D.buF=new C.tY("charcoal","Charcoal",D.cMj,"geo")
D.d9e=w([B.cb,B.dN,B.wF],x.O)
D.buJ=new C.tY("sunset","Sunset",D.d9e,"sunset")
D.d9S=w([B.iG,B.E0,B.Vf],x.O)
D.buG=new C.tY("ocean","Ocean",D.d9S,"band")
D.yd=w([D.buE,D.buL,D.buK,D.buH,D.buI,D.buF,D.buJ,D.buG],A.aA("P<tY>"))
D.cMH=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cNc=w([B.ak,B.aK,B.M],x.O)
D.cOn=w([B.eG,B.e9,B.dp,B.fn,B.wI,B.cY,B.jJ,B.et,B.dj],x.O)
D.cOo=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eE9=new A.cP(B.dm,B.dz,8)
D.cOz=w([D.eE9],x.A)
D.cPB=w([B.bZ,B.dN,B.ky],x.O)
D.cQ2=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cR9=w([B.bZ,B.he],x.O)
D.cT4=w([B.aM,B.A1,B.wx],x.O)
D.cTV=w([B.bJ,B.cr,B.dx,B.aM],x.O)
D.cUp=w([B.jk,B.cb,B.rO],x.O)
D.cUS=w([B.eX,B.cY],x.O)
D.cVo=w([B.cy,B.fB,B.hs],x.O)
D.cVz=w([B.aX,B.bj,B.dp],x.O)
D.cW3=w([B.er,B.d2,B.e9],x.O)
D.cWk=w([B.dR,B.dp,B.K8],x.O)
D.cXy=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a1l=w(["leather","linen","plain","stars","rays"],x.s)
D.bBk=new A.a0(985219,"MaterialIcons",!1)
D.bAT=new A.a0(983781,"MaterialIcons",!1)
D.auY=w([B.aiJ,B.hY,B.lC,B.hZ,D.bBk,B.Ft,B.ps,D.bAT,H.akm,B.xJ,B.pu,B.md],A.aA("P<a0>"))
D.a1q=w(["double","single","corners","none"],x.s)
D.d_9=w([B.dS,B.bp,B.et],x.O)
D.d_m=w([],x.t)
D.Bz=w([],x.u)
D.d1u=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d3D=w([B.aJ,B.fB,B.fn],x.O)
D.d4P=w([B.cq,B.oa,B.W4],x.O)
D.d52=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dnq=new C.lr("construction","Construction","Jobsite & builds",B.xy)
D.dnx=new C.lr("house","Home Build","Houses & rooms",B.v9)
D.dnn=new C.lr("grocery","Grocery","Store & pantry",B.a_5)
D.dnm=new C.lr("calculator","Calculations","Math & estimates",B.Mp)
D.dnv=new C.lr("lumber","Materials","Lumber & supplies",B.MG)
D.dnj=new C.lr("kitchen","Kitchen","Remodel & meals",A5.ajx)
D.bAQ=new A.a0(983756,"MaterialIcons",!1)
D.dno=new C.lr("landscape","Landscaping","Yard & garden",D.bAQ)
D.dni=new C.lr("plumbing","Plumbing","Pipes & water",B.pD)
D.dny=new C.lr("electrical","Electrical","Wiring & power",B.h6)
D.dng=new C.lr("store","Retail Shop","Daily business",B.kG)
D.dnh=new C.lr("paint_remodel","Paint & Remodel","Colors & walls",A6.ZF)
D.bAf=new A.a0(983311,"MaterialIcons",!1)
D.dnu=new C.lr("roofing","Roofing","Roofs & exteriors",D.bAf)
D.bB2=new A.a0(983986,"MaterialIcons",!1)
D.dnf=new C.lr("warehouse","Warehouse","Storage & stock",D.bB2)
D.dns=new C.lr("vehicles","Vehicles","Fleet & transport",B.Fu)
D.by1=new A.a0(62785,"MaterialIcons",!1)
D.dnl=new C.lr("farm","Farm","Crops & livestock",D.by1)
D.dnk=new C.lr("restaurant","Restaurant","Food & catering",B.tz)
D.dnr=new C.lr("tools","Tools","Workshop gear",B.Fq)
D.dnw=new C.lr("wallet","Cash & Wallet","Quick spending",B.jt)
D.bzd=new A.a0(63395,"MaterialIcons",!1)
D.dnt=new C.lr("concrete","Concrete","Foundation work",D.bzd)
D.dnp=new C.lr("blueprint","Blueprint","Plans & design",Ac.aiP)
D.a1P=w([D.dnq,D.dnx,D.dnn,D.dnm,D.dnv,D.dnj,D.dno,D.dni,D.dny,D.dng,D.dnh,D.dnu,D.dnf,D.dns,D.dnl,D.dnk,D.dnr,D.dnw,D.dnt,D.dnp],A.aA("P<lr>"))
D.d5v=w([B.bq,B.bp],x.O)
D.d6d=w([B.i3,B.no,B.dB],x.O)
D.a1X=w(["top","middle","bottom"],x.s)
D.d8w=w([B.cu,B.bj,B.dp],x.O)
D.d91=w([B.bc,B.d2,B.e9],x.O)
D.daS=w([B.bI,B.ak],x.O)
D.daT=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dUW={top:0,middle:1,bottom:2}
D.de3=new A.br(D.dUW,["Top","Middle","Bottom"],x.n)
D.dUB={double:0,single:1,corners:2,none:3}
D.de8=new A.br(D.dUB,["Double line","One line","Corners","None"],x.n)
D.dVI={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dfw=new A.br(D.dVI,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dfI=new A.br(B.ib,[],A.aA("br<G,+(n,n)>"))
D.dUO={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.BK=new A.br(D.dUO,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aA("br<n,G>"))
D.dhZ=new F.M4(32,null)
D.di_=new F.M4(40,null)
D.di0=new F.M4(46,null)
D.aE2=new C.aqP(null)
D.dYc=new A.u(8,14)
D.faI=new A.x("Write a new book",null,B.je,null,B.L,null,null,null,null,null,null,null)
D.e_T=new A.C(B.l2,D.faI,null)
D.akM=new A.ae(B.hv,18,B.c,null,null,null)
D.f4l=new A.x("Add",null,B.mt,null,null,null,null,null,null,null,null,null)
D.cU9=w([D.akM,B.pV,D.f4l],x.p)
D.eC6=new A.cn(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cU9,null)
D.e0c=new A.C(B.ol,D.eC6,null)
D.e0d=new A.C(E.af9,W.UG,null)
D.eZu=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7k=new A.x("New Project",null,D.eZu,null,null,null,null,null,null,null,null,null)
D.cXU=w([D.akM,B.ab,D.f7k],x.p)
D.eC9=new A.cn(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cXU,null)
D.e0n=new A.C(B.j4,D.eC9,null)
D.f9x=new A.x("Choose your header",null,R.vQ,null,null,null,null,null,null,null,null,null)
D.e0I=new A.C(B.hH,D.f9x,null)
D.b3f=new A.fh(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eGM=new A.a6(22,22,D.b3f,null)
D.b1w=new A.cq(B.A,null,null,D.eGM,null)
D.e0N=new A.C(B.X1,D.b1w,null)
D.bo0=new A.O(14,2,14,6)
D.fmx=new A.x("The top of your book. Tap a design to see it.",null,M.a6c,null,null,null,null,null,null,null,null,null)
D.e0O=new A.C(D.bo0,D.fmx,null)
D.e2l=new A.iL(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e2o=new A.iL(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aFg=new A.iL(1,0.9607843137254902,0.48627450980392156,0)
D.Hu=new A.iL(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.yL=new A.iL(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e2u=new A.iL(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fEZ=new C.bf7(null)
D.bj9=new A.m5(D.fEZ,null,B.at,null,null)
D.aIU=new A.cK(0,0,0,0,null,null,D.bj9,null)
D.ep0=new A.z(-42,42)
D.ex7=new A.cL([0,0,1,1])
D.aKa=new A.aa(0,0,520,160)
D.aKn=new A.b7(B.rw,B.Y)
D.fm5=new A.x("Let the AI write it from your tree",null,B.kp,null,B.L,null,null,null,null,null,null,null)
D.bvg=new A.dm(1,B.ci,D.fm5,null)
D.cR8=w([E.a_y,B.ab,D.bvg],x.p)
D.eBP=new A.cn(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cR8,null)
D.f41=new A.x("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.d3U=w([D.alB,B.ab,D.f41],x.p)
D.eBX=new A.cn(B.aQ,B.b9,B.j,B.m,null,B.p,null,0,D.d3U,null)
D.bFq=new A.ae(B.hI,14,B.aZ,null,null,null)
D.eTz=new A.F(!0,B.aZ,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7K=new A.x("Cashier",null,D.eTz,null,null,null,null,null,null,null,null,null)
D.cYp=w([D.bFq,B.bo,D.f7K],x.p)
D.eBZ=new A.cn(B.aQ,B.e,B.Q,B.m,null,B.p,null,0,D.cYp,null)
D.f42=new A.x("Transfer & settings",null,B.dF,null,null,null,null,null,null,null,null,null)
D.btG=new A.bE(1,B.bi,D.f42,null)
D.cJy=w([D.ala,B.aw,D.btG],x.p)
D.eC_=new A.cn(B.aQ,B.e,B.j,B.m,null,B.p,null,0,D.cJy,null)
D.eFw=new A.at(16,40)
D.eFB=new A.at(22,64)
D.eFI=new A.at(280,88)
D.eGs=new A.a6(30,null,null,null)
D.eHK=new A.hH(2,12,12,1.05,null)
D.f7q=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eIs=new A.b1(D.f7q,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f7F=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aMc=new A.b1(D.f7F,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.ffs=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eIW=new A.b1(D.ffs,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fpi=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eJ0=new A.b1(D.fpi,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f9v=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eJ7=new A.b1(D.f9v,null,null,null,null,null,null,null,null,null,null,null,null,B.fP,!1,null,null,null,B.q,null)
D.fmJ=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aMg=new A.b1(D.fmJ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f4D=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eJx=new A.b1(D.f4D,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fpX=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eKg=new A.b1(D.fpX,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fl4=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eKF=new A.b1(D.fl4,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fpm=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eKI=new A.b1(D.fpm,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fgZ=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eKK=new A.b1(D.fgZ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fbi=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eKL=new A.b1(D.fbi,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fbj=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eLL=new A.b1(D.fbj,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f7s=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eM2=new A.b1(D.f7s,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f9d=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eMl=new A.b1(D.f9d,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fgu=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eMB=new A.b1(D.fgu,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fc3=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eMC=new A.b1(D.fc3,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.ePA=new A.F(!0,D.k5,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQ0=new A.F(!0,D.k5,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQE=new A.rl(!0,B.r8,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQU=new A.F(!0,D.k5,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eRq=new A.F(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6d=new A.rl(!0,B.R4,null,null,null,null,B.dr,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSp=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSN=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUl=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUp=new A.F(!0,G.im,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVD=new A.F(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWk=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX2=new A.F(!0,B.bT,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eX6=new A.F(!0,B.bL,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXs=new A.F(!0,D.E_,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXB=new A.F(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eYz=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ2=new A.F(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZs=new A.F(!0,B.aZ,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_T=new A.F(!0,B.ak,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f00=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOp=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6G=new A.F(!0,B.ak,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1F=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f22=new A.F(!0,G.im,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f29=new A.F(!0,G.im,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2U=new A.x("Themes",null,B.oN,null,null,null,null,null,null,null,null,null)
D.f3v=new A.x("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eU4=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3S=new A.x("Debt receipt",null,D.eU4,null,B.L,null,null,null,null,null,null,null)
D.aOk=new A.F(!0,B.ak,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f48=new A.x("Person who owes",null,D.aOk,null,null,null,null,null,null,null,null,null)
D.f55=new A.x("Notes",null,B.a6k,null,null,null,null,null,null,null,null,null)
D.f5v=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eT4=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5z=new A.x("Share",null,D.eT4,null,null,null,null,null,null,null,null,null)
D.f6s=new A.x("Move your family trees",null,D.aOp,null,null,null,null,null,null,null,null,null)
D.f72=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.f7E=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.f8O=new A.x("Remove this book?",null,B.hm,null,null,null,null,null,null,null,null,null)
D.aOP=new A.x("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f9T=new A.x("What should the AI do?",null,B.dF,null,null,null,null,null,null,null,null,null)
D.fbe=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fci=new A.x("Ribbon bookmark",null,B.iC,null,null,null,null,null,null,null,null,null)
D.f_N=new A.F(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcL=new A.x("NGMY.ORG",null,D.f_N,null,B.L,null,null,null,null,null,null,null)
D.fe0=new A.x("Scan family tree QR",null,B.ct,null,null,null,null,null,null,null,null,null)
D.eXk=new A.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feK=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eXk,null,B.L,null,null,null,null,null,null,null)
D.ffU=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fg0=new A.x("Thumbnail",null,B.oN,null,null,null,null,null,null,null,null,null)
D.fgA=new A.x("Save the cover",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fh_=new A.x("Your photos",null,B.oN,null,null,null,null,null,null,null,null,null)
D.fhe=new A.x("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fhG=new A.x("Design your cover",null,R.vQ,null,null,null,null,null,null,null,null,null)
D.fhM=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fhP=new A.x("PICTURE",null,I.mu,null,null,null,null,null,null,null,null,null)
D.fia=new A.x("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fic=new A.x("You can undo it right after.",null,M.Su,null,null,null,null,null,null,null,null,null)
D.fiG=new A.x("Print",null,B.ub,null,null,null,null,null,null,null,null,null)
D.fj1=new A.x("Amount owed",null,D.aOk,null,null,null,null,null,null,null,null,null)
D.fje=new A.x("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fjO=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fjR=new A.x("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fkg=new A.x("Debtor signature",null,B.a6k,null,null,null,null,null,null,null,null,null)
D.fko=new A.x("Change icon",null,E.aND,null,null,null,null,null,null,null,null,null)
D.flw=new A.x("Family tree QR",null,B.ct,null,null,null,null,null,null,null,null,null)
D.flW=new A.x("Download",null,B.ub,null,null,null,null,null,null,null,null,null)
D.fm_=new A.x("Change",null,B.oN,null,null,null,null,null,null,null,null,null)
D.fmP=new A.x("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fmS=new A.x("WHAT SHOULD IT CHANGE?",null,I.mu,null,null,null,null,null,null,null,null,null)
D.fnr=new A.x("COLOUR",null,I.mu,null,null,null,null,null,null,null,null,null)
D.fnD=new A.x("Do it",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fnG=new A.x("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.foF=new A.x("Create Family Tree",null,B.eV,null,null,null,null,null,null,null,null,null)
D.eOz=new A.F(!0,E.jG,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foU=new A.x("Write the first page myself",null,D.eOz,null,null,null,null,null,null,null,null,null)
D.fpp=new A.x("Use this header",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fpv=new A.x("Create Project",null,E.aO4,null,null,null,null,null,null,null,null,null)
D.fBF=new C.aa9(1,"header")
D.a7v=new C.aa9(2,"projects")
D.fBG=new C.aa9(3,"cashier")
D.a7w=new C.aa9(4,"familyTree")
D.fMU=new C.ctD(0,"start")
D.fMV=new C.ctE(0,"start")
D.fBY=new C.Xm(null)
D.fCX=new C.XO(null)
D.dfF=new A.br(B.ib,[],A.aA("br<n,F5>"))
D.d_H=w([],x.E)
D.d_I=w([],x.M)
D.fDt=new C.bcp(D.dfF,D.d_H,D.d_I,0,0,null,null)
D.fFD=new C.Zb(null)
D.a8d=new C.aHY(0,"projects")
D.aSD=new C.aHY(1,"cashier")
D.fKR=new C.aHY(2,"familyTree")})()};
(a=>{a["VX4Jl7kU4m+bdw0KXk7C33NLN4o="]=a.current})($__dart_deferred_initializers__);