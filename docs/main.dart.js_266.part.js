((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A0,G,F,E,N,A1,A2,R,A3,A4,M,A5,H,S,T,U,V,A6,A7,W,A8,A9,X,Aa,Ab,Ac,L,Ad,Y,Z,K,O,C={
byY(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$byY=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uD(null,""),$async$byY)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.R(y.j)
t=A.mH(b1)
s=A.bY(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dt(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dm(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Q.al(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qh(t,a1,B.h8,E.Dw),$async$byY)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.OF(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.a9(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.R(l!=null&&A.Jr(l)?y.l:y.i)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.Z(r.a(j.h(a2,a7)),q,p):B.cu
g=a8.h(0,"title")
a9=B.a.i(A.t(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.t(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.A(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a0g(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byY,v)},
aeu(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aeu=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uD(null,""),$async$aeu)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.R(y.j)
t=A.mH(b6)
s=x.S
r=A.de(c1,0,A.dJ(4,"count",s),A.U(c1).c)
q=F.a03(new A.J(r,new C.fhG(),r.$ti.k("J<ai.E,n>")).aG(0," "))
r=q==="sw"
if(!r){p=A.ae("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fhF(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Q.al(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aeu)
case 6:l=c5
k=F.OF(l==null?"":l)
if(k==null)throw A.R("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.alF(s,D.d4E,r.b(k.h(0,"cover"))?A.Z(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.R("There is no page to change.")
h=A.S(s,x.fz)
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
return A.b(m.$1(f+B.Q.al(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aeu)
case 10:l=c5
k=l==null?null:F.OF(l)
if(k==null)throw A.R(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d4(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kM(a5,a2.k("kM<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a6(a9)
b1=A.aQ(b0.h(a9,"index"))
i=b1==null?null:B.k.N(b1)
if(i==null||!B.d.t(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.t(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.t(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.m(0,i,new A.A(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bg<2>")
p=A.cz(new A.bg(h,s),new C.fhH(),s.k("G.E"),p)
p=F.a03(A.oK(p,3,A.a2(p).k("G.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.z(new A.cu(h,s),s.k("G.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a0g(s,b9),$async$aeu)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.m(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.alF(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aeu,v)},
h4F(d,e,f){return A.cf(null,B.x.j(0.65),!1,null,new C.fqF(e,f),d,null,!0,!0,x.g2)},
alF:function alF(d,e,f){this.a=d
this.b=e
this.c=f},
fhG:function fhG(){},
fhF:function fhF(d){this.a=d},
fhH:function fhH(){},
fqF:function fqF(d,e){this.a=d
this.b=e},
bwS(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bwS=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.bg(b1,new C.f7Z())){u=null
w=1
break}t=B.d.e9(b1,new C.f8_())
s=$.a_()
r=new A.rt()
q=A.FE(r,D.aGv)
p=A.N()
p.r=B.c.gq(0)
q.bd(D.aGv,p)
o=A.N()
o.r=B.M.gq(0)
o.c=3.6
o.b=B.ad
o.d=B.bV
o.e=B.fq
n=new C.f84(t)
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
s=$.a_()
p=A.a([],x.v)
a3=new A.aR(s.r,B.aq,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b7(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bC(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ao(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bC(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aQ(a3,o)}else{p=A.a([],x.v)
a3=new A.aR(s.r,B.aq,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b7(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bC(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.ao(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bC(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aQ(a3,o)}w=4
return A.b(r.pO().yn(520,160),$async$bwS)
case 4:w=3
return A.b(b3.hf(B.fM),$async$bwS)
case 3:b0=b3
u=b0==null?null:J.f2(B.dA.gaL(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bwS,v)},
ffm(d){return C.hId(d)},
hId(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$ffm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.baW()
n=d.x!=null&&d.y4(null).length===0
if(d.x!=null)t=n?D.y4:D.Gx
else t=d.gRR()?D.Gx:D.aBH
w=3
return A.b(C.bwS(d.ax),$async$ffm)
case 3:s=f
p.a=null
if(s!=null)p.a=A.ako(s)
r=A.a2a(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aBH}else{p.c=C.vX(q,!0)
p.b=n?D.y4:D.Gx}r.a0K(A.fAc(new C.ffo(p,d,new C.ffp(),t,n,o),null,D.bjU,B.v6))
u=r.jA(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ffm,v)},
fm_(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fm_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ffm(d),$async$fm_)
case 3:t=f
s=B.a.i(d.b)
r=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.an(q,0,40)
u=A4.Fa(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fm_,v)},
f7Z:function f7Z(){},
f8_:function f8_(){},
f84:function f84(d){this.a=d},
ffp:function ffp(){},
ffo:function ffo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ffn:function ffn(){},
fr6(d,e){var w=0,v=A.j(x.H)
var $async$fr6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.x.j(0.55),!0,null,new C.fra(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fr6)
case 2:return A.h(null,v)}})
return A.i($async$fr6,v)},
bzq(d,e,f,g){return C.hPv(d,e,f,g)},
hPv(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bzq=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gai(e.split(",")):e
r=B.cw.aF(t)}catch(q){r=null}if(r==null||r.length===0){d.G(x.q).f.P(D.exb)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.fr2(g,r,f),d,null,!0,!0,x.H),$async$bzq)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bzq,v)},
frb(d,e){var w=0,v=A.j(x.H)
var $async$frb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.fre(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$frb)
case 2:return A.h(null,v)}})
return A.i($async$frb,v)},
aVb:function aVb(d,e){this.c=d
this.a=e},
bXJ:function bXJ(){},
b77:function b77(d,e){this.b=d
this.a=e},
fra:function fra(d,e){this.a=d
this.b=e},
fr7:function fr7(d){this.a=d},
fr8:function fr8(d,e,f){this.a=d
this.b=e
this.c=f},
fr9:function fr9(d,e){this.a=d
this.b=e},
fr2:function fr2(d,e,f){this.a=d
this.b=e
this.c=f},
fr0:function fr0(d){this.a=d},
fr1:function fr1(d,e,f){this.a=d
this.b=e
this.c=f},
fre:function fre(d,e){this.a=d
this.b=e},
frc:function frc(d){this.a=d},
frd:function frd(d,e,f){this.a=d
this.b=e
this.c=f},
faJ(d,e){var w=0,v=A.j(x.y),u,t
var $async$faJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_P(d),$async$faJ)
case 3:t=g
J.n1(t,new C.faK(e))
u=A.af7(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$faJ,v)},
faK:function faK(d){this.a=d},
alM:function alM(d,e,f){this.c=d
this.d=e
this.a=f},
azO:function azO(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dyp:function dyp(d,e){this.a=d
this.b=e},
dya:function dya(d,e){this.a=d
this.b=e},
dyd:function dyd(d,e,f){this.a=d
this.b=e
this.c=f},
dyc:function dyc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dyb:function dyb(d,e){this.a=d
this.b=e},
dye:function dye(d,e){this.a=d
this.b=e},
dy8:function dy8(){},
dy9:function dy9(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dy7:function dy7(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dxT:function dxT(d){this.a=d},
dxU:function dxU(d,e,f){this.a=d
this.b=e
this.c=f},
dxV:function dxV(d,e){this.a=d
this.b=e},
dxS:function dxS(d){this.a=d},
dy_:function dy_(d,e){this.a=d
this.b=e},
dxR:function dxR(d){this.a=d},
dy0:function dy0(d,e,f){this.a=d
this.b=e
this.c=f},
dy1:function dy1(d,e,f){this.a=d
this.b=e
this.c=f},
dxQ:function dxQ(d,e){this.a=d
this.b=e},
dy2:function dy2(d,e,f){this.a=d
this.b=e
this.c=f},
dxP:function dxP(d,e){this.a=d
this.b=e},
dy3:function dy3(d,e){this.a=d
this.b=e},
dxO:function dxO(d){this.a=d},
dy4:function dy4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dxM:function dxM(){},
dxG:function dxG(d){this.a=d},
dxH:function dxH(d){this.a=d},
dxN:function dxN(d,e){this.a=d
this.b=e},
dy5:function dy5(d,e){this.a=d
this.b=e},
dxL:function dxL(d){this.a=d},
dy6:function dy6(d){this.a=d},
dxK:function dxK(){},
dxW:function dxW(d,e){this.a=d
this.b=e},
dxJ:function dxJ(d){this.a=d},
dxX:function dxX(d,e,f){this.a=d
this.b=e
this.c=f},
dxI:function dxI(d,e){this.a=d
this.b=e},
dxF:function dxF(d,e){this.a=d
this.b=e},
dxY:function dxY(d){this.a=d},
dxZ:function dxZ(d,e,f){this.a=d
this.b=e
this.c=f},
dys:function dys(){},
dyt:function dyt(d,e){this.a=d
this.b=e},
dyq:function dyq(d){this.a=d},
dyr:function dyr(d){this.a=d},
dym:function dym(d,e){this.a=d
this.b=e},
dyn:function dyn(d){this.a=d},
dyf:function dyf(d,e,f){this.a=d
this.b=e
this.c=f},
dyg:function dyg(d,e,f){this.a=d
this.b=e
this.c=f},
dyh:function dyh(d,e,f){this.a=d
this.b=e
this.c=f},
dyi:function dyi(d,e,f){this.a=d
this.b=e
this.c=f},
dyj:function dyj(d,e,f){this.a=d
this.b=e
this.c=f},
dyk:function dyk(d,e,f){this.a=d
this.b=e
this.c=f},
dyl:function dyl(d,e,f){this.a=d
this.b=e
this.c=f},
dyu:function dyu(){},
dyv:function dyv(){},
dyw:function dyw(){},
dyx:function dyx(d){this.a=d},
dyo:function dyo(d,e){this.a=d
this.b=e},
h0S(d){return B.d.dI(D.Zr,new C.fb7(d),new C.fb8())},
tB:function tB(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fb7:function fb7(d){this.a=d},
fb8:function fb8(){},
ai6:function ai6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aR2:function aR2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
QR:function QR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baG:function baG(){this.d=$
this.c=this.a=null},
cZS:function cZS(d,e){this.a=d
this.b=e},
cZQ:function cZQ(d,e){this.a=d
this.b=e},
cZR:function cZR(){},
cZT:function cZT(d,e){this.a=d
this.b=e},
fN_(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bh(J.k(u==null?"":u))
return new C.mQ(t,w,v,u==null?new A.Q(Date.now(),0,!1):u)},
Jc(d,e){return C.hGR(d,e)},
hGR(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Jc=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ax(),$async$Jc)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aS(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Q.aD(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d4(p,x.f)
o=A.cz(o,new C.fcZ(),o.$ti.k("G.E"),x.B)
n=A.a2(o).k("a4<G.E>")
o=A.z(new A.a4(o,new C.fd_(),n),n.k("G.E"))
B.d.aY(o,new C.fd0())
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
return A.i($async$Jc,v)},
zN(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$zN=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ax(),$async$zN)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b4(f,new C.fpO(),x.a)
r=A.z(r,r.$ti.k("ai.E"))
w=4
return A.b(t.ap("String","ngmy_family_book_v1_"+s+"_"+e,B.Q.al(r,null)),$async$zN)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zN,v)},
aNi(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aNi=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Jc(d,e),$async$aNi)
case 2:u=h
t=J.cA(u)
s=t.bi(u,new C.fxs(f))
if(s===-1)t.ck(u,0,f)
else t.m(u,s,f)
w=3
return A.b(C.zN(d,e,u),$async$aNi)
case 3:return A.h(null,v)}})
return A.i($async$aNi,v)},
bxi(d,e,f){var w=0,v=A.j(x.H),u
var $async$bxi=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Jc(d,e),$async$bxi)
case 2:u=h
J.n1(u,new C.faB(f))
w=3
return A.b(C.zN(d,e,u),$async$bxi)
case 3:return A.h(null,v)}})
return A.i($async$bxi,v)},
bxw(d,e){return C.hGQ(d,e)},
hGQ(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bxw=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ax(),$async$bxw)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aS(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Kq
w=1
break}p=B.Q.aD(0,q,null)
if(x.f.b(p)){o=A.Z(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aQ(o.h(0,"emblem"))
k=k==null?null:B.k.N(k)
if(k==null)k=0
if(D.AU.am(0,o.h(0,"foil")))j=A.cI(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aQ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a_R,o.h(0,"position"))?A.cI(o.h(0,"position")):"middle"
g=B.d.t(D.a_m,o.h(0,"frame"))?A.cI(o.h(0,"frame")):"double"
f=B.d.t(D.a_h,o.h(0,"texture"))?A.cI(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cCU,o.h(0,"header"))?A.cI(o.h(0,"header")):"classic"
o=new C.G4(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Kq
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Kq
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bxw,v)},
PJ(d,e,f){return C.hP1(d,e,f)},
hP1(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$PJ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ax(),$async$PJ)
case 7:r=h
w=8
return A.b(r.ap("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Q.al(f.ac(),null)),$async$PJ)
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
return A.i($async$PJ,v)},
Pd(d,e){return C.hGS(d,e)},
hGS(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Pd=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ax(),$async$Pd)
case 7:r=g
q=r.rn("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.z(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Jc(d,e),$async$Pd)
case 8:if(!j.ct(g)){n=B.a.i(d.toLowerCase())
m=J.la(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.ap("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Pd)
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
return A.i($async$Pd,v)},
adQ(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$adQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Pd(d,e),$async$adQ)
case 3:s=g
r=J.a6(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.J(s,t)
w=5
return A.b(A.ax(),$async$adQ)
case 5:w=4
return A.b(g.ap("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$adQ)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$adQ,v)},
a0t(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0t=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Pd(d,e),$async$a0t)
case 2:s=h
J.hC(s,f)
w=3
return A.b(A.ax(),$async$a0t)
case 3:u=h
w=4
return A.b(u.ap("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0t)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0t)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0t)
case 6:return A.h(null,v)}})
return A.i($async$a0t,v)},
mQ:function mQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fcZ:function fcZ(){},
fd_:function fd_(){},
fd0:function fd0(){},
fpO:function fpO(){},
fxs:function fxs(d){this.a=d},
faB:function faB(d){this.a=d},
G4:function G4(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bJ7:function bJ7(d){this.a=d},
hPk(d,e,f,g,h,i,j){return A.a8(d,!1).cr(A.eH(new C.fqj(j,i,f,e,h,g),!0,null,x.H))},
P9(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$P9=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Pd(h,g),$async$P9)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.a9(k)>=6){d.G(x.q).f.P(D.aIs)
u=!1
w=1
break}w=4
return A.b(C.h4F(d,f,e),$async$P9)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.adQ(h,g),$async$P9)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mQ(""+(q+n),l,B.a.i(m.b),new A.Q(Date.now(),0,!1)))}w=6
return A.b(C.zN(h,r,p),$async$P9)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.PJ(h,r,new C.G4("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$P9)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$P9,v)},
fqj:function fqj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Xg:function Xg(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awV:function awV(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d_x:function d_x(d){this.a=d},
d_w:function d_w(d,e){this.a=d
this.b=e},
d_l:function d_l(d,e){this.a=d
this.b=e},
d_i:function d_i(d,e){this.a=d
this.b=e},
cZU:function cZU(d){this.a=d},
cZV:function cZV(d,e){this.a=d
this.b=e},
d_m:function d_m(d){this.a=d},
d_2:function d_2(d){this.a=d},
d_0:function d_0(d){this.a=d},
d_1:function d_1(d){this.a=d},
d_3:function d_3(d){this.a=d},
d_j:function d_j(d){this.a=d},
d_k:function d_k(){},
cZZ:function cZZ(d){this.a=d},
d__:function d__(d,e){this.a=d
this.b=e},
d_4:function d_4(d){this.a=d},
d_5:function d_5(d,e){this.a=d
this.b=e},
d_v:function d_v(d){this.a=d},
d_u:function d_u(d,e){this.a=d
this.b=e},
d_t:function d_t(d){this.a=d},
d_f:function d_f(d){this.a=d},
d_e:function d_e(d){this.a=d},
d_g:function d_g(d){this.a=d},
cZW:function cZW(d,e){this.a=d
this.b=e},
d_h:function d_h(d,e){this.a=d
this.b=e},
d_8:function d_8(d){this.a=d},
d_9:function d_9(d){this.a=d},
d_7:function d_7(){},
d_a:function d_a(d){this.a=d},
d_b:function d_b(d){this.a=d},
d_c:function d_c(d,e){this.a=d
this.b=e},
d_d:function d_d(d,e,f){this.a=d
this.b=e
this.c=f},
d_6:function d_6(d,e){this.a=d
this.b=e},
d_o:function d_o(d){this.a=d},
d_n:function d_n(){},
d_p:function d_p(d){this.a=d},
d_q:function d_q(d){this.a=d},
d_r:function d_r(d){this.a=d},
d_s:function d_s(d,e){this.a=d
this.b=e},
cZX:function cZX(d){this.a=d},
cZY:function cZY(d){this.a=d},
Xk:function Xk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bb0:function bb0(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d0Y:function d0Y(d){this.a=d},
d0Z:function d0Z(d){this.a=d},
d0X:function d0X(d){this.a=d},
d1_:function d1_(d){this.a=d},
d0W:function d0W(d){this.a=d},
d10:function d10(d){this.a=d},
d0V:function d0V(d){this.a=d},
d11:function d11(d,e){this.a=d
this.b=e},
d0U:function d0U(d,e){this.a=d
this.b=e},
d12:function d12(d,e){this.a=d
this.b=e},
Xi:function Xi(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ack:function ack(d,e,f){this.a=d
this.b=e
this.c=f},
awW:function awW(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d_M:function d_M(d,e){this.a=d
this.b=e},
d_L:function d_L(d,e){this.a=d
this.b=e},
d_Q:function d_Q(d){this.a=d},
d_P:function d_P(d,e){this.a=d
this.b=e},
d_N:function d_N(d){this.a=d},
d_O:function d_O(d){this.a=d},
d_R:function d_R(d){this.a=d},
d_S:function d_S(d){this.a=d},
d_K:function d_K(d,e){this.a=d
this.b=e},
d_J:function d_J(d,e){this.a=d
this.b=e},
Ij:function Ij(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wz:function Wz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
czi:function czi(d){this.a=d},
czj:function czj(){},
czk:function czk(d){this.a=d},
b8i:function b8i(d,e,f){this.b=d
this.c=e
this.a=f},
b89:function b89(d,e){this.b=d
this.a=e},
tC:function tC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WR:function WR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b8g:function b8g(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cSK:function cSK(d,e,f){this.a=d
this.b=e
this.c=f},
cSJ:function cSJ(d,e){this.a=d
this.b=e},
cT8:function cT8(d){this.a=d},
cSW:function cSW(){},
cT9:function cT9(d){this.a=d},
cSV:function cSV(){},
cTa:function cTa(d,e){this.a=d
this.b=e},
cSU:function cSU(d,e){this.a=d
this.b=e},
cTb:function cTb(d,e){this.a=d
this.b=e},
cST:function cST(d,e){this.a=d
this.b=e},
cTc:function cTc(d){this.a=d},
cSS:function cSS(){},
cTd:function cTd(d,e){this.a=d
this.b=e},
cSR:function cSR(d,e){this.a=d
this.b=e},
cTe:function cTe(d){this.a=d},
cT3:function cT3(d,e){this.a=d
this.b=e},
cTf:function cTf(d){this.a=d},
cTg:function cTg(d){this.a=d},
cTi:function cTi(d){this.a=d},
cTj:function cTj(d){this.a=d},
cT2:function cT2(d,e){this.a=d
this.b=e},
cTk:function cTk(d,e){this.a=d
this.b=e},
aDM:function aDM(d){this.a=d},
bdt:function bdt(d){this.a=d},
b6w:function b6w(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hFS(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.afi(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.m(0,u.a,u)}t=A.bw(new A.Q(Date.now(),0,!1))
s=new C.fbb(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("a4<1>"),q=q.k("cS<1,n>"),o=q.k("G.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wJ)m.push(l===D.Wy?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.jM(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jM(h,a2,a2)-A.jM(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.z(new A.cS(new A.a4(a4,new C.fb9(u,f),p),new C.fba(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.an(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hFT(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.afi(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.m(0,s.a,s)}r=new C.fbg(v,e)
q=new C.fbe(v)
p=A.S(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.K)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.m(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.K)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.m(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.K)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.am(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.am(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.m(0,s.a,d)}}d=p.$ti.k("bg<2>")
d=A.d6(new A.bg(p,d),d.k("G.E"))
n=A.z(d,A.a2(d).k("ck.E"))
B.d.fz(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gag(e),k=new A.hK(l,new C.fbf(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hs5(d,e,f,g){var w,v,u=C.hFU(d,e)
if(u<=0||f.length<=u)return new A.abW(!1,D.AJ,f)
if(g.t(0,e.a))return new A.abW(!1,D.AJ,f)
w=A.U(f).c
v=A.de(f,0,A.dJ(u,"count",x.S),w).dA(0)
return new A.abW(!0,A.de(f,u,null,w).dA(0),v)},
hs6(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.afi(d3),d2=d1.length
if(d2===0)return D.feF
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.ce(0,t.a,new C.d_Z(t))}s=new C.d0f(v)
d2=x.h
r=A.S(w,d2)
q=new C.d07(r)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d06(r)
l=A.S(w,x.do)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cg(l.ce(0,k,new C.d0_()),o)}h=new C.d05(s)
g=new C.d04(l,r)
p=v.$ti.k("bg<2>")
o=p.k("a4<G.E>")
f=A.z(new A.a4(new A.bg(v,p),new C.d00(h),o),o.k("G.E"))
e=f.length===0?new A.bg(v,p).gK(0):B.d.gK(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
a0=g.$2(t.a,A.aZ(w))
if(a0>d){d=a0
e=t}}a1=A.aZ(w)
p=x.S
a2=A.S(w,p)
a3=A.S(w,w)
a4=A.S(w,d2)
d2=x.gR
a5=A.S(w,d2)
a6=A.S(w,x.d9)
a7=A.S(w,d2)
a8=A.a([],x.s)
a9=new C.d0d(new C.d09(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dv(v,v.r,v.e),j=a2.gahD(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eN([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qD(J.dE(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.cc)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.d_Y(a2,new C.d0e(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=b4.$ti.k("cu<1>")
d2=A.z(new A.cu(b4,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.m(0,b8,new C.Em(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Ir(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.z(new A.cu(b6,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.m(0,b8,o+c2)}c6=A.a([],x.E)
a3.bE(0,new C.d01(c6,b4))
for(d2=new A.cP(a4,a4.$ti.k("cP<1,2>")).gag(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gT(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gag(b5),i=new A.hK(j,new C.d02(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aY(o,new C.d03())
c6.push(new C.aFR(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.baL(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
h0r(d){var w=A.ae("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cz(d)
return w==null?null:w.b[1]},
fVV(d,e,f,g,h,i,j,k,l,m,n){return new C.XU(k,f,j,e,l,n,m,d,g,h,i,null)},
ayP(d,e,f,g,h,i,j){return new C.bep(i,d,e,f,j,h,g,null)},
amS:function amS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAo:function aAo(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dLn:function dLn(d){this.a=d},
dLm:function dLm(d){this.a=d},
dLp:function dLp(d,e){this.a=d
this.b=e},
dLq:function dLq(d,e){this.a=d
this.b=e},
dLr:function dLr(d){this.a=d},
dLl:function dLl(d,e){this.a=d
this.b=e},
dLo:function dLo(d){this.a=d},
dLt:function dLt(d){this.a=d},
dLs:function dLs(d,e){this.a=d
this.b=e},
amM:function amM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAl:function aAl(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dKO:function dKO(d){this.a=d},
dKM:function dKM(d){this.a=d},
dKN:function dKN(d){this.a=d},
dKP:function dKP(d,e){this.a=d
this.b=e},
dKJ:function dKJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKh:function dKh(d){this.a=d},
dKi:function dKi(d,e){this.a=d
this.b=e},
dKw:function dKw(d){this.a=d},
dKu:function dKu(d){this.a=d},
dKv:function dKv(d,e){this.a=d
this.b=e},
dKx:function dKx(d){this.a=d},
dKy:function dKy(d,e){this.a=d
this.b=e},
dKI:function dKI(d,e){this.a=d
this.b=e},
dKG:function dKG(d,e){this.a=d
this.b=e},
dKF:function dKF(d,e){this.a=d
this.b=e},
dKB:function dKB(d,e){this.a=d
this.b=e},
dKA:function dKA(d){this.a=d},
dKC:function dKC(d,e){this.a=d
this.b=e},
dKz:function dKz(d){this.a=d},
dKD:function dKD(d){this.a=d},
dKE:function dKE(d){this.a=d},
dKH:function dKH(d,e){this.a=d
this.b=e},
dK5:function dK5(d,e){this.a=d
this.b=e},
dK6:function dK6(d,e){this.a=d
this.b=e},
dKR:function dKR(d,e,f){this.a=d
this.b=e
this.c=f},
dKL:function dKL(d,e,f){this.a=d
this.b=e
this.c=f},
dKK:function dKK(d){this.a=d},
dK7:function dK7(d){this.a=d},
dK8:function dK8(d){this.a=d},
dK9:function dK9(){},
dKa:function dKa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKe:function dKe(d,e){this.a=d
this.b=e},
dKd:function dKd(d,e){this.a=d
this.b=e},
dKc:function dKc(d){this.a=d},
dKf:function dKf(d,e){this.a=d
this.b=e},
dKb:function dKb(d){this.a=d},
dKQ:function dKQ(d){this.a=d},
dKr:function dKr(){},
dKs:function dKs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKq:function dKq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKm:function dKm(d,e,f){this.a=d
this.b=e
this.c=f},
dKl:function dKl(d,e,f){this.a=d
this.b=e
this.c=f},
dKj:function dKj(d,e){this.a=d
this.b=e},
dKn:function dKn(d){this.a=d},
dKo:function dKo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKk:function dKk(d,e){this.a=d
this.b=e},
dKp:function dKp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dKt:function dKt(d,e){this.a=d
this.b=e},
dKY:function dKY(){},
dKZ:function dKZ(d,e){this.a=d
this.b=e},
dL_:function dL_(d){this.a=d},
dL0:function dL0(d,e){this.a=d
this.b=e},
dKU:function dKU(d){this.a=d},
dKS:function dKS(d,e){this.a=d
this.b=e},
dKV:function dKV(d,e){this.a=d
this.b=e},
dKW:function dKW(d,e){this.a=d
this.b=e},
dKX:function dKX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dL1:function dL1(d){this.a=d},
dKT:function dKT(d){this.a=d},
dKg:function dKg(d){this.a=d},
baJ:function baJ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d_W:function d_W(d){this.a=d},
d_V:function d_V(d,e){this.a=d
this.b=e},
d_X:function d_X(d){this.a=d},
d_U:function d_U(d,e){this.a=d
this.b=e},
fbb:function fbb(d,e){this.a=d
this.b=e},
fbc:function fbc(d){this.a=d},
fbd:function fbd(){},
fb9:function fb9(d,e){this.a=d
this.b=e},
fba:function fba(){},
fbg:function fbg(d,e){this.a=d
this.b=e},
fbh:function fbh(d){this.a=d},
fbi:function fbi(){},
fbe:function fbe(d){this.a=d},
fbf:function fbf(d,e){this.a=d
this.b=e},
Ir:function Ir(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Em:function Em(d,e){this.a=d
this.b=e},
baL:function baL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d_Z:function d_Z(d){this.a=d},
d0f:function d0f(d){this.a=d},
d07:function d07(d){this.a=d},
d08:function d08(){},
d06:function d06(d){this.a=d},
d0_:function d0_(){},
d05:function d05(d){this.a=d},
d04:function d04(d,e){this.a=d
this.b=e},
d00:function d00(d){this.a=d},
d09:function d09(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d0a:function d0a(d){this.a=d},
d0b:function d0b(d){this.a=d},
d0c:function d0c(){},
d0d:function d0d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d0e:function d0e(){},
d_Y:function d_Y(d,e,f,g,h,i,j,k,l,m){var _=this
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
d01:function d01(d,e){this.a=d
this.b=e},
d02:function d02(d){this.a=d},
d03:function d03(){},
aFR:function aFR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baM:function baM(d,e){this.b=d
this.a=e},
d0g:function d0g(){},
d0h:function d0h(d){this.a=d},
d0i:function d0i(d){this.a=d},
d0j:function d0j(){},
beq:function beq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9R:function b9R(d,e){this.b=d
this.a=e},
brQ:function brQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eVZ:function eVZ(d){this.a=d},
bhH:function bhH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
exE:function exE(d){this.a=d},
exD:function exD(d,e){this.a=d
this.b=e},
XU:function XU(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayN:function ayN(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dfx:function dfx(d,e){this.a=d
this.b=e},
dfw:function dfw(d){this.a=d},
dfu:function dfu(d){this.a=d},
dfv:function dfv(d){this.a=d},
dfG:function dfG(d){this.a=d},
dfH:function dfH(d){this.a=d},
dfF:function dfF(d,e){this.a=d
this.b=e},
dfI:function dfI(){},
dfL:function dfL(d){this.a=d},
dfE:function dfE(d,e){this.a=d
this.b=e},
dfK:function dfK(){},
dfM:function dfM(d){this.a=d},
dfD:function dfD(d,e){this.a=d
this.b=e},
dfN:function dfN(d){this.a=d},
dfC:function dfC(d){this.a=d},
dfO:function dfO(d){this.a=d},
dfB:function dfB(d){this.a=d},
dfP:function dfP(d){this.a=d},
dfA:function dfA(d){this.a=d},
dfQ:function dfQ(d){this.a=d},
dfz:function dfz(d){this.a=d},
dfR:function dfR(d){this.a=d},
dfy:function dfy(d,e){this.a=d
this.b=e},
dfJ:function dfJ(d){this.a=d},
aaO:function aaO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bep:function bep(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aaN:function aaN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
beo:function beo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dfS:function dfS(d){this.a=d},
dfT:function dfT(d,e){this.a=d
this.b=e},
ayO:function ayO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEU:function aEU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aaP:function aaP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dg1:function dg1(d){this.a=d},
If:function If(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fQS(d){var w=d.R,v=x.N
return w.iE(w,new C.c3f(),v,v)},
hjH(d){var w=d.by
if(w>=0)return w
return 5},
fQU(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fQS(d).h(0,v)
if(w==null||w.length===0)return null
return A.bh(w)},
fQT(d,e){var w=C.fQU(d,e)
if(w!=null&&w.c8(new A.Q(Date.now(),0,!1)))return!0
return!1},
hjI(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.Z(C.fQS(d),w,w)
u=C.fQU(d,e)
t=u!=null&&u.c8(new A.Q(Date.now(),0,!1))?u:new A.Q(Date.now(),0,!1)
v.m(0,s,t.bN(A.dB(30,0,0,0,0,0).a).a4().ab())
d.R=v},
aWB(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aWB=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.l0(t,B.Gl),$async$aWB)
case 3:if(l){u=!0
w=1
break}u=A.kG(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Gl,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWB,v)},
c3f:function c3f(){},
hjF(){var w,v=$.oY(),u=J.e_(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fM(u)},
GX(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$GX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bX(),$async$GX)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eT("ngmy_family_tree_backup_codes_v1",null,!1,B.bD),$async$GX)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.Z(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a5(m)
$.al.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$GX,v)},
a50(d){return C.hjG(d)},
hjG(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a50=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bX(),$async$a50)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hs("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,B.cz,null),$async$a50)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a5(p)
$.al.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a50,v)},
c3e(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c3e=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.GX(),$async$c3e)
case 3:t=m.jj(f),t=t.gag(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a6(q)
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
return A.i($async$c3e,v)},
LK(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$LK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c3e(d),$async$LK)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.GX(),$async$LK)
case 6:s=f
r=J.a6(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dS(A.Z(q,p,o),p,o)
o.m(0,"active",!0)
o.m(0,"updatedAt",new A.Q(Date.now(),0,!1).a4().ab())
r.m(s,t,o)
w=9
return A.b(C.a50(s),$async$LK)
case 9:case 8:u=t
w=1
break
case 5:n=C.hjF()
w=10
return A.b(C.GX(),$async$LK)
case 10:s=f
J.aE(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a4().ab(),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.K))
w=11
return A.b(C.a50(s),$async$LK)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LK,v)},
aWA(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aWA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.GX(),$async$aWA)
case 3:t=f
for(s=J.df(t),r=s.gdH(t),r=r.dA(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a50(t),$async$aWA)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aWA,v)},
a51(d,e,f){var w=0,v=A.j(x.H),u
var $async$a51=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.amR(d,e),$async$a51)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.LK(d),$async$a51)
case 7:w=4
break
case 5:w=8
return A.b(C.aWA(d),$async$a51)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a51,v)},
amL(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$amL=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.amR(f,e),$async$amL)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bX(),$async$amL)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.GX(),$async$amL)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a6(q)
if(!J.y(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amL,v)},
aWz(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aWz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bX(),$async$aWz)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.GX(),$async$aWz)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a6(t)
if(!J.y(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWz,v)},
hjJ(){var w,v=$.oY(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"FT"+B.d.fM(u)},
amO(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$amO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bX(),$async$amO)
case 3:if(!g){u=null
w=1
break}t=C.hjJ()
w=4
return A.b(A.T8(),$async$amO)
case 4:s=g
r=B.dC.aF(B.Q.al(d.eF(),null))
r=B.cO.gcs().aF(r)
q=e?999:2
J.aE(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.K))
w=5
return A.b(A.a52(s),$async$amO)
case 5:p=e?999:2
u=new A.Z4("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amO,v)},
amN(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$amN=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.T8(),$async$amN)
case 3:p=a0
o=J.a6(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a6(n)
l=A.aQ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aWz(J.k(l==null?"":l),j),$async$amN)
case 4:if(!a0)$.al.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{r=B.c0.c6(0,B.cw.aF(t))
s=C.fQV(r)}catch(f){q=A.a5(f)
$.al.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dS(A.Z(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a4().ab())
o.m(p,g,l)}w=5
return A.b(A.a52(p),$async$amN)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amN,v)},
fQV(d){var w,v,u,t,s=null
try{w=B.Q.aD(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hjL(A.Z(w,x.N,x.z))
return u}catch(t){v=A.a5(t)
$.al.$1("[family tree sync] parse: "+A.t(v))
return s}},
fBf(d){var w=0,v=A.j(x.m),u,t,s
var $async$fBf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.amN(t[1])
w=1
break}u=null
w=1
break}u=C.fQV(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fBf,v)},
hjL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d4(v,x.f)
u=A.cz(u,new C.c3h(),u.$ti.k("G.E"),x.k)
t=A.a2(u).k("a4<G.E>")
s=A.z(new A.a4(u,new C.c3i(),t),t.k("G.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bh(J.k(u==null?"":u))
if(r==null)r=new A.Q(Date.now(),0,!1)
q=A.S(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jj(p),t=t.gag(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d4(l,u)
n=A.cz(n,new C.c3j(),n.$ti.k("G.E"),o)
k=A.a2(n).k("a4<G.E>")
j=A.z(new A.a4(n,new C.c3k(),k),k.k("G.E"))
if(j.length!==0)q.m(0,m,j)}return new C.amP(h,w,s,r,q)},
amR(d,e){var w=0,v=A.j(x.y),u,t
var $async$amR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.LC(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zC(d),$async$amR)
case 3:u=t.ct(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amR,v)},
c3q(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c3q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zC(d),$async$c3q)
case 3:t=s.b4(f,new C.c3r(),x.cs)
t=A.z(t,t.$ti.k("ai.E"))
B.d.aY(t,new C.c3s())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c3q,v)},
T9(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$T9=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.amR(e,d),$async$T9)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.LK(e),$async$T9)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.zC(e),$async$T9)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dE(r,new C.c3o(g))
r=A.z(t,t.$ti.k("G.E"))}t=J.a6(r)
if(t.gah(r)){u=null
w=1
break}t=t.di(r,new C.c3p(e),x.k)
r=A.z(t,t.$ti.k("ai.E"))
q=A.S(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Jc(e,o),$async$T9)
case 14:n=i
if(J.ct(n))q.m(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.amP(s,B.a.i(e.toLowerCase()),r,new A.Q(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$T9,v)},
aWE(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aWE=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T9(d,e,f,g),$async$aWE)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gK(q.c).b:"all-family-trees"
s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.F0(A.In(q.eF(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWE,v)},
aWD(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aWD=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T9(d,e,f,g),$async$aWD)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.amO(r,f),$async$aWD)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aCV(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWD,v)},
Ta(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ta=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fBf(a0),$async$Ta)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.amL(g.a,d,e,f,s,r),$async$Ta)
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
return A.b(C.bx9(e,j),$async$Ta)
case 12:case 11:w=13
return A.b(C.af5(e,j,s),$async$Ta)
case 13:h=n.h(0,i)
w=h!=null&&J.ct(h)?14:15
break
case 14:w=16
return A.b(C.zN(e,i,h),$async$Ta)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.blb(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Ta,v)},
amP:function amP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3m:function c3m(){},
c3n:function c3n(){},
c3l:function c3l(){},
c3h:function c3h(){},
c3i:function c3i(){},
c3j:function c3j(){},
c3k:function c3k(){},
c3r:function c3r(){},
c3s:function c3s(){},
c3o:function c3o(d){this.a=d},
c3p:function c3p(d){this.a=d},
fJk(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f7(null,x.H)
return A.hm(d,new C.amQ(w,e,g,i,f,h,null),!0,null,x.H)},
d_T(d,e,f,g,h,i,j,k){return new C.baI(i,e,k,j,g,f,h,d,null)},
amQ:function amQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAn:function aAn(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dLa:function dLa(d){this.a=d},
dLb:function dLb(d,e,f){this.a=d
this.b=e
this.c=f},
dLf:function dLf(d,e){this.a=d
this.b=e},
dLg:function dLg(d){this.a=d},
dL7:function dL7(d){this.a=d},
dL8:function dL8(d,e){this.a=d
this.b=e},
dL9:function dL9(d,e){this.a=d
this.b=e},
dLe:function dLe(d){this.a=d},
dLd:function dLd(d,e){this.a=d
this.b=e},
dLc:function dLc(){},
dLi:function dLi(d){this.a=d},
dLj:function dLj(d,e){this.a=d
this.b=e},
dLh:function dLh(d,e){this.a=d
this.b=e},
d0k:function d0k(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
baK:function baK(d,e,f){this.d=d
this.e=e
this.a=f},
aa5:function aa5(d,e,f){this.c=d
this.d=e
this.a=f},
baI:function baI(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
baN:function baN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Ye:function Ye(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAm:function aAm(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dL2:function dL2(d,e){this.a=d
this.b=e},
dL3:function dL3(d){this.a=d},
dL4:function dL4(d){this.a=d},
dL5:function dL5(d){this.a=d},
dL6:function dL6(d){this.a=d},
Yf:function Yf(d){this.a=d},
bfP:function bfP(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dLk:function dLk(d,e){this.a=d
this.b=e},
aVa(d,e){return new C.aV9(d,e,null)},
aV9:function aV9(d,e,f){this.c=d
this.d=e
this.a=f},
hIi(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aW(d,11)},
hPu(d){return A.c1(B.K,null,new C.fqM(new C.t5(A.L(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fSL(d,e){return new C.apH(e,d,null)},
aN_(d,e,f,g,h,i,j){var w=C.hIi(i)
if(w!=null)return A.bu(e,new A.a3(j,f,new C.a44(w,!0,null),null),B.ap)
return I.aMl(e,B.bO,f,g,h,i,j)},
lj:function lj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a44:function a44(d,e,f){this.c=d
this.d=e
this.a=f},
bfy:function bfy(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.aZ$=e
_.c=_.a=null},
dxx:function dxx(d){this.a=d},
dxy:function dxy(){},
dxz:function dxz(d,e){this.a=d
this.b=e},
bfx:function bfx(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fqM:function fqM(d){this.a=d},
fqL:function fqL(d,e){this.a=d
this.b=e},
fqK:function fqK(d,e){this.a=d
this.b=e},
fqJ:function fqJ(d,e){this.a=d
this.b=e},
apH:function apH(d,e,f){this.c=d
this.d=e
this.a=f},
caU:function caU(d,e){this.a=d
this.b=e},
aIb:function aIb(){},
hPf(d){var w=null
return A.cf(w,w,!0,w,new C.fqb(),d,w,!0,!0,x.e2)},
hQp(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.fxk(h,g,f,e),d,w,!0,!0,x.N)},
hPh(d,e){var w=null
return A.cf(w,w,!0,w,new C.fqd(e),d,w,!0,!0,x.dY)},
hPg(d){var w=null
return A.cf(w,w,!0,w,new C.fqc(),d,w,!0,!0,x.c5)},
aPQ:function aPQ(d,e){this.a=d
this.b=e},
aPP:function aPP(d){this.a=d},
aNV:function aNV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqb:function fqb(){},
fxk:function fxk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fqd:function fqd(d){this.a=d},
fqc:function fqc(){},
WT:function WT(d,e){this.c=d
this.a=e},
avI:function avI(){var _=this
_.d=$
_.c=_.a=_.e=null},
cTw:function cTw(d){this.a=d},
cTx:function cTx(d){this.a=d},
cTv:function cTv(d,e){this.a=d
this.b=e},
cTy:function cTy(d){this.a=d},
cTz:function cTz(d){this.a=d},
WS:function WS(d){this.a=d},
avH:function avH(){this.d=$
this.c=this.a=null},
cTs:function cTs(d){this.a=d},
cTt:function cTt(d){this.a=d},
cTu:function cTu(d){this.a=d},
Wq:function Wq(d){this.a=d},
aus:function aus(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cr7:function cr7(){},
crd:function crd(d){this.a=d},
cre:function cre(d){this.a=d},
crf:function crf(d){this.a=d},
crc:function crc(){},
crg:function crg(d){this.a=d},
crh:function crh(d){this.a=d},
crb:function crb(){},
cri:function cri(d,e){this.a=d
this.b=e},
cra:function cra(d,e){this.a=d
this.b=e},
cr8:function cr8(d,e){this.a=d
this.b=e},
crj:function crj(d){this.a=d},
cr9:function cr9(){},
crk:function crk(d){this.a=d},
ZY:function ZY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
brI:function brI(){this.d=$
this.c=this.a=null},
eVr:function eVr(d,e){this.a=d
this.b=e},
eVs:function eVs(d){this.a=d},
eVt:function eVt(d,e){this.a=d
this.b=e},
a99:function a99(d,e){this.a=d
this.b=e},
Ea:function Ea(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
brG:function brG(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eVp:function eVp(d,e){this.a=d
this.b=e},
aul:function aul(d,e){this.c=d
this.a=e},
brH:function brH(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eVq:function eVq(d){this.a=d},
brF:function brF(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aKi:function aKi(){},
aKj:function aKj(){},
bz2(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bH(u),s=B.o.D(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.of(B.o.u(t),A.ae("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fp1(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dq(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.VQ(A.dq(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aMC(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aMC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hR().kE(85,1280,B.eu),$async$aMC)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f7(),$async$aMC)
case 8:r=e
if(J.a9(r)===0){u=null
w=1
break}q=C.fSK()
w=9
return A.b(C.caT(q,r),$async$aMC)
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
o=A.a5(l)
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
return A.i($async$aMC,v)},
aMY(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aMY=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.caQ(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gai(g.split(",")):g
p=B.cw.aF(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.a_().K2(p,!0,null,i).cJ(0,B.fI),$async$aMY)
case 9:n=a1
w=10
return A.b(n.lT(),$async$aMY)
case 10:m=a1
w=11
return A.b(J.aNH(m).hf(B.fM),$async$aMY)
case 11:l=a1
J.aNH(m).p()
if(l==null){w=8
break}i=J.f2(B.dA.gaL(l))
k="data:image/png;base64,"+B.cO.gcs().aF(i)
if(J.a9(k)<=r){u=k
w=1
break}o=B.k.U(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a5(f)
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
return A.i($async$aMY,v)},
fp1:function fp1(){},
t5:function t5(d){this.a=d},
apG:function apG(d,e,f){this.c=d
this.d=e
this.a=f},
aBP:function aBP(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
euO:function euO(d,e){this.a=d
this.b=e},
euF:function euF(d){this.a=d},
euG:function euG(d){this.a=d},
euM:function euM(d,e){this.a=d
this.b=e},
euL:function euL(d,e){this.a=d
this.b=e},
euI:function euI(d,e){this.a=d
this.b=e},
euH:function euH(d,e){this.a=d
this.b=e},
euJ:function euJ(d){this.a=d},
euK:function euK(d,e){this.a=d
this.b=e},
euN:function euN(d,e){this.a=d
this.b=e},
euA:function euA(d,e){this.a=d
this.b=e},
euE:function euE(d){this.a=d},
euD:function euD(d,e){this.a=d
this.b=e},
euC:function euC(d){this.a=d},
euP:function euP(d,e){this.a=d
this.b=e},
euQ:function euQ(d,e){this.a=d
this.b=e},
euB:function euB(d,e){this.a=d
this.b=e},
h4a(d,e,f){var w="thumbnailPath",v=e.ac()
if(f!=null&&f.length!==0)v.m(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.Q(Date.now(),0,!1).a4().ab(),"project",v],x.N,x.z)},
fp2(d,e,f){var w=0,v=A.j(x.N),u
var $async$fp2=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Q.al(C.h4a(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fp2,v)},
bz4(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bz4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fp2(!0,d,e),$async$bz4)
case 4:w=3
return A.b(r.apE(g,d,e.a),$async$bz4)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dC.aF(B.Q.al(C.h4a(d,e,null),null))
u="NGMY_WS:"+B.jV.gcs().aF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bz4,v)},
fXf(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fJ2(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.a9(s)===0)return!1
if(J.cU(s,"NGMYWSSYNC2|"))return!0
if(J.cU(s,"NGMY_WS:"))return!0
if(J.eQ(s,t))return!0
if(J.cU(s,"{"))try{w=B.Q.aD(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hNk(d){var w,v,u,t=C.fXf(d)
if(t==null)return null
if(C.fJ2(t))return t
w=B.a.cP(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aW(t,w))
if(C.fJ2(v))return v}u=B.a.cP(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aW(t,u))
if(C.fJ2(v))return v}return null},
fJ1(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.a9(q)===0)return r
if(J.cU(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cU(q,"NGMY_WS:")){v=B.c0.c6(0,B.cw.aF(J.mh(q,8)))
w=t.a(B.Q.aD(0,v,r))}else w=t.a(B.Q.aD(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fDL(A.Z(u,x.N,x.z))
return t}catch(s){return r}},
bz3(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bz3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.apD(t[1]),$async$bz3)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fJ1(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fJ1(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bz3,v)},
fJ0(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l3(w,v,d.c,d.d,new A.Q(Date.now(),0,!1))},
byB(){var w=0,v=A.j(x.o),u,t
var $async$byB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Fb(),$async$byB)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fJ1(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byB,v)},
h52(d,e,f,g){return A.c1(B.K,null,new C.fxc(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fxc:function fxc(d,e,f){this.a=d
this.b=e
this.c=f},
ab9:function ab9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
euS:function euS(d,e){this.a=d
this.b=e},
euT:function euT(d,e){this.a=d
this.b=e},
euU:function euU(d,e){this.a=d
this.b=e},
euV:function euV(d,e){this.a=d
this.b=e},
euR:function euR(d){this.a=d},
apA:function apA(d,e,f){this.c=d
this.d=e
this.a=f},
bha:function bha(){var _=this
_.c=_.a=_.e=_.d=null},
euv:function euv(d,e){this.a=d
this.b=e},
euw:function euw(d){this.a=d},
eux:function eux(d){this.a=d},
apF:function apF(d){this.a=d},
aBO:function aBO(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
euz:function euz(d){this.a=d},
euy:function euy(d){this.a=d},
hmW(d,e,f,g,h){return new C.Ml(h,g,d,e,f,null)},
aGy:function aGy(d,e){this.a=d
this.b=e},
Ml:function Ml(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBQ:function aBQ(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
evh:function evh(){},
evd:function evd(d,e){this.a=d
this.b=e},
eve:function eve(d){this.a=d},
euZ:function euZ(d){this.a=d},
euX:function euX(d){this.a=d},
euY:function euY(d){this.a=d},
ev7:function ev7(d,e){this.a=d
this.b=e},
ev4:function ev4(d,e){this.a=d
this.b=e},
ev5:function ev5(d,e){this.a=d
this.b=e},
ev6:function ev6(d,e,f){this.a=d
this.b=e
this.c=f},
ev2:function ev2(d,e,f){this.a=d
this.b=e
this.c=f},
ev0:function ev0(d){this.a=d},
ev1:function ev1(d){this.a=d},
ev3:function ev3(d){this.a=d},
evk:function evk(d){this.a=d},
evj:function evj(d){this.a=d},
evl:function evl(d){this.a=d},
evi:function evi(d){this.a=d},
euW:function euW(d){this.a=d},
ev_:function ev_(d,e){this.a=d
this.b=e},
evg:function evg(d,e){this.a=d
this.b=e},
evf:function evf(d,e){this.a=d
this.b=e},
eva:function eva(d){this.a=d},
evb:function evb(d){this.a=d},
evc:function evc(d,e){this.a=d
this.b=e},
ev9:function ev9(d,e){this.a=d
this.b=e},
ev8:function ev8(d,e,f){this.a=d
this.b=e
this.c=f},
bts:function bts(){},
zu(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ae("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
adz(d,e,f){return C.hC5(d,e,f)},
hC5(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$adz=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.ap("String",e,f),$async$adz)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a5(o)
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
return A.i($async$adz,v)},
ady(d,e){return C.hC4(d,e)},
hC4(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ady=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ady)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a5(q)
$.al.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ady,v)},
hAT(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QS(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bwa(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bwa=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.aZQ(q),$async$bwa)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aMY(q,!1),$async$bwa)
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
return A.i($async$bwa,v)},
haR(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aQ(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aQ(d.h(0,"quantity"))
if(w==null)w=null
v=A.aQ(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.qo(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qo(p,J.k(u==null?"":u),1,o,q)},
fDL(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d4(s,x.f)
w=A.cz(w,new C.cqw(),w.$ti.k("G.E"),x.Q)
v=A.a2(w).k("a4<G.E>")
r=A.z(new A.a4(w,new C.cqx(),v),v.k("G.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bh(J.k(t==null?"":t))
return new C.l3(w,v,u,r,t==null?new A.Q(Date.now(),0,!1):t)},
hFO(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Wy
case"female":case"f":return D.aeG
default:return D.wJ}},
h0T(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fN0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hFO(v==null?j:J.k(v))
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
m=A.aQ(d.h(0,"birthOrder"))
m=m==null?j:B.k.N(m)
if(m==null)m=1
l=J.y(d.h(0,"hidden"),!0)
k=A.aQ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.hQ(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hFQ(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Kr
case"viewer":return D.k3
default:return D.rK}},
hFR(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
F1(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bxp(d,e){return B.a.i(e.toLowerCase())===C.F1(d,e)&&d.y!==D.k3},
tj(d,e){var w,v=d.y
if(v===D.k3)return!1
w=B.a.i(e.toLowerCase())
if(w===C.F1(d,e))return!0
if(v===D.Kr)return!0
v=d.e
return new A.J(v,A.fJ6(),A.U(v).k("J<1,n>")).t(0,w)},
hFh(d){return J.dE(d,new C.fat()).gI(0)},
fxz(d){var w=0,v=A.j(x.y),u,t
var $async$fxz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zC(d),$async$fxz)
case 3:u=t.rk(f,new C.fxA(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fxz,v)},
bx9(d,e){var w=0,v=A.j(x.H),u,t
var $async$bx9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zC(d),$async$bx9)
case 3:t=g
if(J.rk(t,new C.f9F(e))){w=1
break}if(C.hFh(t)>=2)throw A.R(A.ba("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bx9,v)},
ai8(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d4(n,x.f)
w=A.cz(w,new C.bJ8(),w.$ti.k("G.E"),x.P)
v=A.a2(w).k("a4<G.E>")
m=A.z(new A.a4(w,new C.bJ9(),v),v.k("G.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b4(u,new C.bJa(),x.N)
t=A.z(l,l.$ti.k("ai.E"))}else t=A.a([],x.s)
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
q=A.aQ(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.N(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kn(l,w,v,!s,t,m,r,q,p,C.hFQ(o==null?null:J.k(o)))},
h11(d){var w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.an(v,0,8)},
BG(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$BG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.PH(d),$async$BG)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ax(),$async$BG)
case 4:t=f
w=5
return A.b(t.a3E(0),$async$BG)
case 5:w=6
return A.b(C.f1O(t,l),$async$BG)
case 6:s=f
if(J.ct(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aS(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fXO(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oe(l,n),$async$BG)
case 11:u=n
w=1
break
case 10:case 8:m=A.aS(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.fXO(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oe(l,n),$async$BG)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$BG,v)},
f1O(d,e){return C.hyq(d,e)},
hyq(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f1O=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aS(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zu(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.Q.aD(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aV(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.a9(n)===0){w=7
break}m=A.aS(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zu(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Q.aD(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fDL(A.Z(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aS(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zu(a9)+"_"+n))
i=C.hAT(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.aZQ(h),$async$f1O)
case 17:g=b1
if(g!=null){i=i.QS(g)
p=!0}case 16:J.cg(q,i)
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
case 8:J.PR(q,new C.f1P())
if(p&&J.a9(q)!==0)C.oe(a9,q)
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
return A.i($async$f1O,v)},
bxz(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bxz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.PH(d),$async$bxz)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.BG(r),$async$bxz)
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
return A.i($async$bxz,v)},
fXO(d){var w,v,u,t
try{w=B.Q.aD(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d4(w,x.f)
v=A.cz(v,new C.eYF(),v.$ti.k("G.E"),x.i)
u=A.a2(v).k("a4<G.E>")
v=A.z(new A.a4(v,new C.eYG(),u),u.k("G.E"))
B.d.aY(v,new C.eYH())
return v}catch(t){v=A.a([],x.D)
return v}},
oe(d,e){return C.hP5(d,e)},
hP5(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oe=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.PH(b2),$async$oe)
case 3:a8=b5
if(J.a9(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ax(),$async$oe)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zu(a8)
p=A.aS(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b4(x.j.a(B.Q.aD(0,p,null)),new C.fq2(),a2).fG(0)
a2=J.b4(b3,new C.fq3(),a2).bZ(0,new C.fq4())
n=A.d6(a2,a2.$ti.k("G.E"))
a2=o,a2=A.ef(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eQ(n,m)?17:18
break
case 17:a5=C.zu(a8)
l=A.aS(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a6h(l),$async$oe)
case 19:t=21
a5=C.zu(a8)
k=A.aS(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Q.aD(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a6h(a5==null?null:J.k(a5)),$async$oe)
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
return A.b(C.ady(r,"ngmy_worksheet_item_v3_"+C.zu(a8)+"_"+m),$async$oe)
case 29:w=30
return A.b(C.ady(r,"ngmy_worksheet_thumb_v3_"+C.zu(a8)+"_"+m),$async$oe)
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
case 14:case 10:a2=J.cA(b3),a3=a2.gag(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bwa(h),$async$oe)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.adz(r,"ngmy_worksheet_thumb_v3_"+C.zu(a8)+"_"+a4,f),$async$oe)
case 40:g=i.QS(f)
w=38
break
case 39:$.al.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ady(r,"ngmy_worksheet_thumb_v3_"+C.zu(a8)+"_"+a4),$async$oe)
case 41:g=i.QS(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ady(r,"ngmy_worksheet_thumb_v3_"+C.zu(a8)+"_"+a4),$async$oe)
case 42:case 34:a4=i.a
w=43
return A.b(C.adz(r,"ngmy_worksheet_item_v3_"+C.zu(a8)+"_"+a4,B.Q.al(g.ac(),null)),$async$oe)
case 43:e=b5
if(!e){$.al.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cg(q,i.a)
w=31
break
case 32:w=44
return A.b(C.adz(r,"ngmy_worksheets_index_v3_"+C.zu(a8),B.Q.al(q,null)),$async$oe)
case 44:d=b5
if(!d){$.al.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eE(b3,new C.fq5(q))
a4=a3.$ti.k("cS<1,a1<n,@>>")
a7=A.z(new A.cS(a3,new C.fq6(),a4),a4.k("G.E"))
a0=a7
w=45
return A.b(C.adz(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.Q.al(a0,null)),$async$oe)
case 45:w=46
return A.b(J.h9X(r),$async$oe)
case 46:if(a2.gci(b3)&&J.a9(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.a5(b1)
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
return A.i($async$oe,v)},
JD(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$JD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BG(d),$async$JD)
case 3:t=g
s=J.cA(t)
r=s.bi(t,new C.fxy(e))
if(r===-1)s.ck(t,0,e)
else s.m(t,r,e)
u=C.oe(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$JD,v)},
bxm(d,e){var w=0,v=A.j(x.H),u
var $async$bxm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.BG(d),$async$bxm)
case 2:u=g
J.n1(u,new C.faV(e))
w=3
return A.b(C.oe(d,u),$async$bxm)
case 3:return A.h(null,v)}})
return A.i($async$bxm,v)},
F3(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$F3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$F3)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aS(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Q.aD(0,i,null)
if(x.j.b(t)){j=J.d4(t,x.f)
j=A.cz(j,new C.fd4(),j.$ti.k("G.E"),x.k)
s=A.a2(j).k("a4<G.E>")
r=A.z(new A.a4(j,new C.fd5(),s),s.k("G.E"))
B.d.aY(r,new C.fd6())
k=r}}catch(h){}w=4
return A.b(C.eZn(d),$async$F3)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hyN(k,p,d)
j=A.U(o)
s=j.k("J<1,a1<n,@>>")
s=A.z(new A.J(o,new C.fd7(),s),s.k("ai.E"))
n=B.Q.al(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.OT(d,o),$async$F3)
case 7:case 6:j=j.k("a4<1>")
m=A.z(new A.a4(o,new C.fd8(d),j),j.k("G.E"))
if(m.length!==0)C.aLy(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$F3,v)},
fpP(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fpP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.OT(d,e),$async$fpP)
case 3:t=J.dE(e,new C.fpQ(d))
s=A.z(t,t.$ti.k("G.E"))
if(s.length===0){u=!0
w=1
break}u=C.aLy(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fpP,v)},
a0z(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0z=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ax(),$async$a0z)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aS(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Q.aD(0,l,null)
if(x.j.b(u)){m=J.d4(u,x.f)
m=A.cz(m,new C.fxt(),m.$ti.k("G.E"),x.k)
t=A.a2(m).k("a4<G.E>")
s=A.z(new A.a4(m,new C.fxu(),t),t.k("G.E"))
o=s}}catch(k){}q=J.pK(o,new C.fxv(e))
if(B.a.i(e.x).length===0&&C.tj(e,d)){m=B.a.i(d.toLowerCase())
p=e.aA9(e.y===D.k3?D.k3:D.rK,m)}else p=e
if(q===-1)J.p0(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.OT(d,o),$async$a0z)
case 3:w=C.tj(p,d)?4:5
break
case 4:w=6
return A.b(C.aLx(C.F1(p,d),p),$async$a0z)
case 6:if(!g)$.al.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0z,v)},
aLH(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aLH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.F3(d),$async$aLH)
case 2:u=g
t=J.cA(u)
s=A.qD(t.eE(u,new C.faC(e)))
t.bm(u,new C.faD(e))
w=3
return A.b(C.OT(d,u),$async$aLH)
case 3:w=s!=null&&C.bxp(s,d)?4:5
break
case 4:w=6
return A.b(C.eYJ(e),$async$aLH)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aLH,v)},
afi(d){var w=d.f,v=A.U(w).k("a4<1>")
w=A.z(new A.a4(w,new C.fxE(),v),v.k("G.E"))
return w},
fGO(d,e){var w,v=d.f,u=A.qD(new A.a4(v,new C.fad(e),A.U(v).k("a4<1>")))
v=C.afi(d)
w=A.U(v).k("a4<1>")
v=A.z(new A.a4(v,new C.fae(e,u),w),w.k("G.E"))
B.d.aY(v,new C.faf())
return v},
hFU(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h55(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bi(C.fGO(d,u),new C.fxl(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hHn(d,e){var w
if(e==null||e.length===0)return 1
w=C.fGO(d,e)
if(w.length===0)return 1
return new A.J(w,new C.fdQ(),A.U(w).k("J<1,I>")).ft(0,B.yS)+1},
hOZ(d){var w,v=C.afi(d)
if(v.length===0)return null
w=new A.a4(v,new C.fpM(),A.U(v).k("a4<1>"))
if(!w.gah(0))return w.gK(0)
return B.d.gK(v)},
hFP(d){return A.E(["id",d.a,"name",d.b,"gender",C.h0T(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hHi(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.m(0,t.a,t)}s=A.a([],x.u)
r=A.aZ(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.J(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.wJ?n:q.c
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
d=q.aA4(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cAf(a1,w,a3.d,a2.y,s,a0,v)},
zC(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ax(),$async$zC)
case 3:q=f
p=B.a.gV(B.a.i(d.toLowerCase()))
o=A.aS(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Q.aD(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d4(t,x.f)
p=A.cz(p,new C.fd1(),p.$ti.k("G.E"),x.k)
s=A.a2(p).k("a4<G.E>")
p=A.z(new A.a4(p,new C.fd2(),s),s.k("G.E"))
B.d.aY(p,new C.fd3())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zC,v)},
af5(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$af5=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.rK:D.k3
a7=C.F1(b2,b3)
w=2
return A.b(C.zC(b1),$async$af5)
case 2:a8=b5
a9=J.cA(a8)
b0=a9.bi(a8,new C.fpK(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bx9(b1,b2),$async$af5)
case 5:case 4:if(b0===-1){u=b2.aA9(a6,a7)
a9.ck(a8,0,u)}else{t=a9.h(a8,b0)
s=A.S(x.N,x.P)
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
i=i!==D.wJ?i:l.c
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
s.m(0,m,l.aA4(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bg<2>")
s=A.z(new A.bg(s,k),k.k("G.E"))
k=a5?D.rK:D.k3
u=t.xF(q,m,b2.d,k,s,r,a7,b2.w)
a9.m(a8,b0,u)}w=6
return A.b(C.OT(b1,a8),$async$af5)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aLx(B.a.i(b3.toLowerCase()),u),$async$af5)
case 9:case 8:return A.h(null,v)}})
return A.i($async$af5,v)},
fY9(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.Q(Date.now(),0,!1).a4().ab(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("J<1,a1<n,@>>"),k=A.z(new A.J(m,C.h4i(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a4().ab(),"updatedAt",o],r,x.K),"createdAt",s.a4().ab(),"updatedAt",o],r,x.z)},
fYa(d,e){var w=new A.Q(Date.now(),0,!1).a4().ab(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("J<1,a1<n,@>>")
u=A.z(new A.J(u,C.h4i(),t),t.k("ai.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a4().ab(),"updatedAt",w],x.N,x.z)},
hwy(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ai8(A.Z(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fJ6(),A.U(j).k("J<1,n>")).bZ(0,new C.eZa())
t=A.z(j,j.$ti.k("G.E"))
if(u===v)s=D.rK
else s=B.d.t(t,u)?D.Kr:D.k3
return w.aA9(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ai8(A.Z(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d4(q,h)
h=A.cz(h,new C.eZb(),h.$ti.k("G.E"),x.P)
p=A.a2(h).k("a4<G.E>")
o=A.z(new A.a4(h,new C.eZc(),p),p.k("G.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b4(n,new C.eZd(),x.N).bZ(0,new C.eZe())
t=A.z(h,h.$ti.k("G.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.rK
else s=B.d.t(t,u)?D.Kr:D.k3
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
j=A.aQ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kn(h,r,p,!m,t,o,l,j,v,s)},
eZn(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$eZn=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.a9(a0)===0){u=null
w=1
break}t=4
r=new C.eZr()
h=x.N
g=x.z
w=7
return A.b(A.iB(A.a([A.l9("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bD),r.$2(A.l9("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bD),"collaborator"),r.$2(A.l9("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bD),"public")],x.cl),x.U),$async$eZn)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.S(h,g)
h=A.z(p,g)
l=h
J.fT(l,o)
J.fT(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.a9(j)!==0)J.aE(m,j,k)}l=m
h=A.a2(l).k("bg<2>")
h=A.cz(new A.bg(l,h),new C.eZo(a0),h.k("G.E"),x.k)
l=A.a2(h).k("a4<G.E>")
l=A.z(new A.a4(h,new C.eZp(),l),l.k("G.E"))
B.d.aY(l,new C.eZq())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a5(a1)
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
return A.i($async$eZn,v)},
hyN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gah(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f2t(),v).bZ(0,new C.f2u())
t=A.d6(u,u.$ti.k("G.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.F1(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.k3){m=q.e
m=!new A.J(m,A.fJ6(),A.U(m).k("J<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.m(0,p,q)}for(j=j.gag(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.m(0,u,v)
continue}k=C.hHi(l,v)
o=C.F1(k,w)
p=v.d
s.m(0,u,o===w?k.b6K(p,D.rK):k.b6K(p,v.y))}j=s.$ti.k("bg<2>")
j=A.z(new A.bg(s,j),j.k("G.E"))
B.d.aY(j,new C.f2v())
return j},
OT(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$OT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ax(),$async$OT)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b4(e,new C.f4v(),x.a)
s=A.z(s,s.$ti.k("ai.E"))
w=3
return A.b(u.ap("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Q.al(s,null)),$async$OT)
case 3:return A.h(null,v)}})
return A.i($async$OT,v)},
aLx(d,e){return C.hDI(d,e)},
hDI(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aLx=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lA("family_trees",A.a([C.fY9(e,d)],p),null,B.cz),$async$aLx)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lA("family_trees",A.a([C.fYa(e,d)],p),null,B.cz),$async$aLx)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a5(n)
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
return A.i($async$aLx,v)},
aLy(d,e){return C.hDJ(d,e)},
hDJ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aLy=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("J<1,a1<n,@>>")
m=n.k("ai.E")
l=A.z(new A.J(e,new C.f91(d),n),m)
r=l
w=7
return A.b(A.lA("family_trees",r,null,B.cz),$async$aLy)
case 7:q=g
if(q){u=!0
w=1
break}k=A.z(new A.J(e,new C.f92(d),n),m)
p=k
w=8
return A.b(A.lA("family_trees",p,null,B.cz),$async$aLy)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a5(i)
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
return A.i($async$aLy,v)},
eYJ(d){return C.hvX(d)},
hvX(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$eYJ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Ph("family_trees",A.E(["id",d],x.N,x.z),null,B.cz),$async$eYJ)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a5(p)
$.al.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$eYJ,v)},
qo:function qo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
l3:function l3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqz:function cqz(){},
cqy:function cqy(){},
cqw:function cqw(){},
cqx:function cqx(){},
G5:function G5(d,e){this.a=d
this.b=e},
hQ:function hQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ai7:function ai7(d,e){this.a=d
this.b=e},
fat:function fat(){},
fxA:function fxA(d){this.a=d},
f9F:function f9F(d){this.a=d},
kn:function kn(d,e,f,g,h,i,j,k,l,m){var _=this
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
bJc:function bJc(){},
bJb:function bJb(){},
bJ8:function bJ8(){},
bJ9:function bJ9(){},
bJa:function bJa(){},
f1P:function f1P(){},
eYF:function eYF(){},
eYG:function eYG(){},
eYH:function eYH(){},
fq2:function fq2(){},
fq3:function fq3(){},
fq4:function fq4(){},
fq5:function fq5(d){this.a=d},
fq6:function fq6(){},
fxy:function fxy(d){this.a=d},
faV:function faV(d){this.a=d},
fd4:function fd4(){},
fd5:function fd5(){},
fd6:function fd6(){},
fd7:function fd7(){},
fd8:function fd8(d){this.a=d},
fpQ:function fpQ(d){this.a=d},
fxt:function fxt(){},
fxu:function fxu(){},
fxv:function fxv(d){this.a=d},
faC:function faC(d){this.a=d},
faD:function faD(d){this.a=d},
fxE:function fxE(){},
fad:function fad(d){this.a=d},
fae:function fae(d,e){this.a=d
this.b=e},
faf:function faf(){},
fxl:function fxl(d){this.a=d},
fdQ:function fdQ(){},
fpM:function fpM(){},
fd1:function fd1(){},
fd2:function fd2(){},
fd3:function fd3(){},
fpK:function fpK(d){this.a=d},
eZa:function eZa(){},
eZb:function eZb(){},
eZc:function eZc(){},
eZd:function eZd(){},
eZe:function eZe(){},
eZr:function eZr(){},
eZs:function eZs(d){this.a=d},
eZo:function eZo(d){this.a=d},
eZp:function eZp(){},
eZq:function eZq(){},
f2t:function f2t(){},
f2u:function f2u(){},
f2v:function f2v(){},
f4v:function f4v(){},
f91:function f91(d){this.a=d},
f92:function f92(d){this.a=d},
cqA:function cqA(d,e){this.a=d
this.b=e},
cqB:function cqB(d,e){this.a=d
this.b=e},
aDR:function aDR(d,e,f){this.a=d
this.b=e
this.c=f},
b50:function b50(){this.b=this.a=0},
b5_:function b5_(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
brJ:function brJ(){},
vX(d,e){var w,v
if(d==null)return""
w=d.bQ()
v=""+w.gcb()+"/"+w.gcq()+"/"+w.gcd()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gmF()),2,"0")+":"+B.a.aT(B.o.u(w.gEW()),2,"0")},
hmT(){var w,v=$.oY(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"WS"+B.d.fM(u)},
apB(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$apB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bX(),$async$apB)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eT("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bD),$async$apB)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.Z(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a5(m)
$.al.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apB,v)},
apC(d){return C.hmU(d)},
hmU(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$apC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bX(),$async$apC)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hs("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.z),!1,!1,B.cz,null),$async$apC)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a5(p)
$.al.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apC,v)},
apE(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apE=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bX(),$async$apE)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hmT()
w=4
return A.b(C.apB(),$async$apE)
case 4:r=h
q=B.a.i(e)
p=B.dC.aF(t)
J.aE(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cO.gcs().aF(p),"usesRemaining",25,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],x.N,x.K))
w=5
return A.b(C.apC(r),$async$apE)
case 5:u=new A.Z4("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apE,v)},
apD(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$apD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bX(),$async$apD)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.apB(),$async$apD)
case 4:q=f
p=J.a6(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a6(o)
m=A.aQ(n.h(o,"usesRemaining"))
l=m==null?null:B.k.N(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{s=B.c0.c6(0,B.cw.aF(t))}catch(h){r=A.a5(h)
$.al.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dS(A.Z(o,n,m),n,m)
m.m(0,"usesRemaining",j)
m.m(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a4().ab())
p.m(q,i,m)}w=5
return A.b(C.apC(q),$async$apD)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apD,v)},
fSK(){var w=new A.Q(Date.now(),0,!1).a4()
return"wst_"+(1000*w.a+w.b)+"_"+B.cB.aB(999999)},
hmV(d){var w,v,u,t,s,r,q
try{w=A.adX(d)
if(w==null)return d
v=w
if(J.JJ(v)>960||J.JI(v)>960){s=v
r=J.JJ(v)>=J.JI(v)?960:null
v=A.adW(s,J.JI(v)>J.JJ(v)?960:null,B.LG,r)}s=v
u=A.ajx(82).Rd(s,B.xt)
if(J.a9(u)===0)return d
s=new Uint8Array(A.cl(u))
return s}catch(q){t=A.a5(q)
$.al.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
caT(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$caT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hmV(e)
$.caP.m(0,s,t)
u=C.bz6(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caT,v)},
aZQ(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZQ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cU(l,"data:image")){u=null
w=1
break}t=4
r=J.eQ(l,",")?B.d.gai(J.lb(l,",")):l
q=B.cw.aF(r)
if(J.a9(q)===0){u=null
w=1
break}p=C.fSK()
w=7
return A.b(C.caT(p,q),$async$aZQ)
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
n=A.a5(k)
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
return A.i($async$aZQ,v)},
caQ(d){var w=0,v=A.j(x.T),u,t,s
var $async$caQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.caS(s),$async$caQ)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cO.gcs().aF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caQ,v)},
a6h(d){var w=0,v=A.j(x.H),u,t
var $async$a6h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.h4b(d)
if(t==null){w=1
break}$.caP.W(0,t)
w=3
return A.b(C.bz5(t),$async$a6h)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a6h,v)},
bz6(d,e){return C.hNn(d,e)},
hNn(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bz6=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aKv
w=7
return A.b(n==null?$.aKv=I.fFS():n,$async$bz6)
case 7:r=g
q=new Uint8Array(A.cl(e))
p=J.mi(r,"thumbs","readwrite")
B.iu.lM(J.mg(p,"thumbs"),q,l)
w=8
return A.b(J.p_(p),$async$bz6)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a5(k)
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
return A.i($async$bz6,v)},
bz5(d){return C.hNl(d)},
hNl(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bz5=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aKv
w=7
return A.b(o==null?$.aKv=I.fFS():o,$async$bz5)
case 7:r=f
q=J.mi(r,"thumbs","readwrite")
B.iu.Et(J.mg(q,"thumbs"),m)
w=8
return A.b(J.p_(q),$async$bz5)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a5(l)
$.al.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bz5,v)}},D,Ae,Af,P,Ag,Ah,I,Ai,Q,A_,Aj
J=c[1]
A=c[0]
B=c[2]
A0=c[191]
G=c[171]
F=c[29]
E=c[181]
N=c[108]
A1=c[109]
A2=c[159]
R=c[122]
A3=c[190]
A4=c[35]
M=c[189]
A5=c[78]
H=c[84]
S=c[128]
T=c[131]
U=c[202]
V=c[160]
A6=c[151]
A7=c[163]
W=c[158]
A8=c[62]
A9=c[68]
X=c[175]
Aa=c[207]
Ab=c[28]
Ac=c[140]
L=c[153]
Ad=c[164]
Y=c[205]
Z=c[198]
K=c[99]
O=c[66]
C=a.updateHolder(c[6],C)
D=c[201]
Ae=c[67]
Af=c[169]
P=c[204]
Ag=c[203]
Ah=c[54]
I=c[52]
Ai=c[74]
Q=c[206]
A_=c[120]
Aj=c[94]
C.alF.prototype={}
C.aVb.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.baW(),f=h.x!=null&&h.y4(i).length===0
if(h.x!=null)w=f?B.aW:B.bQ
else w=h.gRR()?B.bQ:B.dZ
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.H(D.b5m,B.r,1)
s=x.p
r=A.p(i,A.u(A.a([A.p(i,D.ene,B.h,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.fV,i,i,i),B.T,D.eP9,B.av,A.d(C.vX(new A.Q(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eLk,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,D.aS7,i,i,i,i,B.Vx,i,i,i)
q=A.m(16)
p=A.H(B.aJ,B.r,1)
o=A.H(B.aW.j(0.28),B.r,1)
n=A.fHH(h.d)
o=A.p(B.A,C.aVa(A.fgd(h.e,n),30),B.h,i,i,new A.o(B.lS,i,o,i,i,i,B.a5),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eGR,B.L,i,i)
m=A.m(14)
l=A.H(B.aJ,B.r,1)
q=A.p(i,A.u(A.a([o,B.P,n,B.bA,D.ePq,B.ab,A.p(i,A.u(A.a([D.f2J,B.bA,A.d(A.zE(h.c),i,i,i,i,i,i,D.eC5,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eW,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aN,i,p,q,i,i,B.n),i,i,i,i,L.acP,i,i,i)
p=A.m(16)
m=A.H(B.aJ,B.r,1)
l=j.aMs("Original due",C.vX(h.r,!1))
n=j.aMs("Current due",C.vX(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.T,A.p(i,A.u(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaGH(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.h,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zB,i,i,1/0),B.T,j.c6Z(),B.P,j.bWz(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.H(B.aJ,B.r,1)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.eQk,B.av,A.d(q,i,i,i,i,i,i,D.eGc,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aN,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaBK()){q=A.m(14)
o=A.H(B.cp,B.r,1.6)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.f3U,B.P,A.bu(A.m(12),A.ec(new A.a3(1/0,88,A.b1(i,i,i,new A.U_(h.ax,B.M,D.eqA,!0,3.5,i),B.at),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.DE,i,i,i)],s))}p.push(B.ay)
p.push(D.eXI)
return A.p(i,A.u(A.a([r,new A.C(B.acS,A.u(p,B.af,i,B.e,B.j,0,B.p),i)],s),B.af,i,B.e,B.R,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aMs(d,e){var w=null
return A.B(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a4w,w,w,w),1),A.d(e,w,w,w,w,w,w,D.eD4,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c6Z(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6N(B.dZ,u,"Not paid yet")
w=t.y4(null).length
v=w===0?B.aW:B.bQ
return this.a6N(v,u,C.vX(t.x,!0))},
bWz(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6N(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6N(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a4w,u,u,u)
v=A.U(d).k("J<1,ha>")
v=A.z(new A.J(d,new C.bXJ(),v),v.k("ai.E"))
return A.u(A.a([w,B.ar,A.c8(B.bH,v,B.bx,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6N(d,e,f){var w=null
return A.B(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a4w,w,w,w),1),new A.dp(1,B.cj,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dM,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b77.prototype={
a6(d,e){new A.U_(this.b,B.M,e,!0,3.5,null).a6(d,e)},
aq(d){return d.b!==this.b}}
C.alM.prototype={
S(){return new C.azO(A.a([],x.bp))},
gdS(){return this.c}}
C.azO.prototype={
Z(){this.a0()
this.Hj()},
Hj(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Hj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_P(t.a.c),$async$Hj)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dyp(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Hj,v)},
aOj(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aN,s=A.l(v,v,u?B.bo:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bo:B.bu).j(0.22)
w=A.m(10)
return A.bm(v,new A.b2(4,r,new A.ay(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b2(4,w,new A.ay((this.a.d.a?B.bo:B.bu).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b2(4,A.m(10),D.aPM),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aOi(d){return this.aOj(d,null)},
NF(d){return this.cax(d)},
cax(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$NF=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.EW:B.eu
w=7
return A.b(new A.hR().B0(72,900,900,n),$async$NF)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f7(),$async$NF)
case 8:p=f
n=B.cO.gcs().aF(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a5(l)
n=r.c
if(n!=null)n.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$NF,v)},
aWk(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aN,o=A.m(10),n=A.H((q?B.bo:B.bu).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bo:B.bu
q=A.V(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aN:B.aG,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bo:B.bu
t=x.p
u=A.D(A.u(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fm(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c8)
q=A.a([q,B.aa,u,A.bI(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.V(B.ct,s.a.d.a?B.bo:B.bu,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c8))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.h,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kw,D.bfy,r,r,r)},
BW(d){return this.btE(d)},
btD(){return this.BW(null)},
btE(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BW=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.au()
r=new A.ap(new A.bc(a4,B.b0,B.aM),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.kk(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.aa(p,2)}o=new A.ap(new A.bc(a4,B.b0,B.aM),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ap(new A.bc(a4,B.b0,B.aM),s)
if(a3){a4=new A.Q(Date.now(),0,!1).bN(6048e8)
m=A.bW(a4.gcd(),a4.gcb(),a4.gcq(),0,0,0,0,0)}else{a4=a5.f
m=A.bW(a4.gcd(),a4.gcb(),a4.gcq(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bj(a4,!0,x.cT)
i=a3?null:A.fHH(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.v_?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hN(B.x.j(0.55),!0,"Dismiss",a4,new C.dy8(),new C.dy9(a2,t,a5,r,new C.dya(a2,t),o,n,j),B.eG,!0,x.y),$async$BW)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d8(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.R$=s
r.O$=0
o.R$=s
o.O$=0
n.R$=s
n.O$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.G(x.q).f.P(D.ewT)
w=1
break}a0=a2.d
if(a0==null){t.c.G(x.q).f.P(D.evy)
w=1
break}a1=A.fgd(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.v_?"male":"female"
w=7
return A.b(A.afh(a3,A.fPv(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BW)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.v_?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a7(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bW(a3.gcd(),a3.gcb(),a3.gcq(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bW(a4.gcd(),a4.gcb(),a4.gcq(),0,0,0,0,0)))a5.cCl(a2.a)
w=8
return A.b(A.afh(t.a.c,a5),$async$BW)
case 8:case 5:w=9
return A.b(t.Hj(),$async$BW)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BW,v)},
aOT(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aN
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bo:B.bu).j(0.2)
s=A.H(s,B.r,g?1.5:1)
r=C.aVa(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aN:B.aG
return A.aD(!1,B.Y,!0,v,A.aI(!1,u,!0,A.p(p,A.B(A.a([r,B.bq,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b6,B.j,0,p,p),B.h,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.h,w,0,p,p,p,p,p,B.ac)},
Qe(d){return this.crq(d)},
crq(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hN(B.x.j(0.55),!0,"Dismiss",s,new C.dys(),new C.dyt(t,d),B.hP,!0,x.y),$async$Qe)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.Q(s,0,!1)
case 4:w=7
return A.b(A.afh(t.a.c,d),$async$Qe)
case 7:w=8
return A.b(t.Hj(),$async$Qe)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Qe,v)},
Ml(d,e){return this.bE9(0,e)},
bE9(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ml=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kP(s,"Cancel","Delete",e.b+" \xb7 "+A.zE(e.c)+" will be removed from this device.","Delete this debt?"),$async$Ml)
case 3:if(!g){w=1
break}w=4
return A.b(C.faJ(t.a.c,e.a),$async$Ml)
case 4:w=5
return A.b(t.Hj(),$async$Ml)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Ml,v)},
ac2(d){return this.c4A(d)},
c4A(d){var w=0,v=A.j(x.H),u=this,t
var $async$ac2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c1(B.K,null,new C.dym(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ac2)
case 2:return A.h(null,v)}})
return A.i($async$ac2,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dOR
w=J.dE(m.d,new C.dyu())
v=A.z(w,w.$ti.k("G.E"))
w=J.dE(m.d,new C.dyv())
u=A.z(w,w.$ti.k("G.E"))
t=B.d.cI(v,0,new C.dyw())
w=A.m(18)
s=m.a.d.a
r=s?D.c9e:D.asy
q=A.H(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bCU,B.h,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.aw,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aG,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.Y,!0,A.m(12),A.aI(!1,A.m(12),!0,D.dOi,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dyx(m),l,l,l,l,l,l,l),B.h,B.cY,0,l,l,l,l,l,B.ac)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cnJ("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zE(t)
r=A.a([A.p(l,A.u(A.a([s,B.ab,A.B(A.a([o,B.aa,A.D(m.b1d(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(l,l,q,w,l,new A.a7(B.ax,B.aC,B.w,r,l,l),B.n),l,l,l,l,B.acM,l,l,l),B.ay],p)
if(J.ci(m.d)){w=m.a.d.a
s=w?B.dR:B.c
q=A.m(18)
o=A.H((w?B.bo:B.bu).j(0.12),B.r,1)
n=A.p(l,D.bxZ,B.h,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aN:B.aG,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.u(A.a([n,B.ab,w,B.av,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bo:B.bu,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bi_,l,l,1/0))}else{w=m.gc9Q()
s=A.z(new A.J(v,w,A.U(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.C(D.bjD,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bo:B.bu,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.U(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.u(r,B.af,l,B.e,B.j,0,B.p)},
b1d(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.x.j(0.22):B.c.j(0.85),s=A.m(14),r=A.H((v.a.d.a?B.bo:B.bu).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bo:B.bu,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aN:B.aG
return A.p(u,A.u(A.a([q,B.bA,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.h,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
cnJ(d,e){return this.b1d(!1,d,e)},
c9R(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.y4(j).length,h=d.ba8()
if(d.x!=null){w=d.y4(j).length
v=w===0?B.cY:B.bQ}else if(d.gRR())v=B.bQ
else{if(h)w=B.cY
else w=k.a.d.a?B.bo:B.bu
v=w}if(d.x!=null){w=d.y4(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.vX(u,!1)}else{u.toString
t="Paid "+C.vX(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.vX(w,!1)+" \xb7 "+i+" missed":"Due "+C.vX(w,!1)}w=k.a.d.a?B.dR:B.c
u=A.m(18)
if(d.gRR()&&d.x==null)s=B.bQ.j(0.35)
else s=(k.a.d.a?B.bo:B.bu).j(0.12)
s=A.H(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.G,B.x.j(0.04),B.cA,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bi:B.lS
o=A.H(d.gRR()&&d.x==null?B.bQ.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fHH(d.d)
o=A.p(B.A,A.d7(C.aVa(A.fgd(d.e,m),24),n),B.h,j,j,new A.o(p,j,o,j,j,j,B.a5),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aN:B.aG
m=x.p
n=A.a([new A.dp(1,B.cj,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaBK())B.d.v(n,A.a([B.eA,A.V(B.KQ,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.u(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.d5,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zE(d.c)
l=k.a.d.a?B.aN:B.aG
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.Y,!0,j,A.aI(!1,q,!0,new A.C(U.acw,A.B(A.a([o,B.bc,p,B.aa,A.u(A.a([n,B.bA,A.V(B.ek,(k.a.d.a?B.bo:B.bu).j(0.5),j,j,j,18)],m),B.dF,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dyo(k,d),j,j,j,j,j,j,j),B.h,B.K,0,j,j,j,j,j,B.ac),B.h,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d8,j,j,j,j)}}
C.tB.prototype={}
C.ai6.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.be
u=v?B.F:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.H(q,B.r,t?1.2:1.6)
p=A.a([new A.aa(0,B.G,B.x.j(0.45),B.cs,16)],x.V)
o=x.p
n=A.a([],o)
m=B.x.j(t?0.07:0.3)
l=A.H(r.j(0.6),B.r,1)
n.push(A.aH(a0,A.p(a0,A.V(B.ct,t?a1.f:B.c,a0,a0,a0,17),B.h,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a5),a0,30,a0,a0,a0,a0,a0,30),B.z,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.ae))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.kv,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.apk,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.DT,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eX(m,A.B(l,B.m,a0,B.e,B.R,0,a0,a0),B.h,B.e8)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.beO,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cx:B.bg,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fp,A.u(a2,u,a0,B.e,B.R,0,B.p),a0),1))
n.push(D.erj)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.ug,A.p(a0,a0,B.h,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a7(B.a3,B.a7,B.w,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.ls,A.u(a2,B.m,a0,B.e,B.R,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.h,a0,a0,new A.o(a0,a0,A.H(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.h5,a0,a0,a0,a0)}return A.p(a0,e,B.h,a0,a0,new A.o(a0,a0,q,s,p,new A.a7(B.ax,B.aC,B.w,a1.d,a0,a0),B.n),a0,a0,a0,D.bg_,a0,a0,a0,a0)}}
C.aR2.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.h,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.be?B.be:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bg:B.cx,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.d5,n],m)
if(p.z)o.push(new A.C(B.zA,n,q))
return new A.C(B.d8,A.u(o,B.m,q,B.e,B.R,0,B.p),q)}}
C.QR.prototype={
S(){return new C.baG()}}
C.baG.prototype={
gbRL(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aG(d,n,x.w).w,l=x.p,k=A.a([D.dOM,D.dOS],l)
for(w=0;w<8;++w){v=D.Zr[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.ED:B.Aj
q=t===s
r=A.V(r,q?B.ev:B.c1,n,n,n,17)
q=q?B.c:B.al
r=A.a([r,B.bq,new A.x(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.aa,new A.bF(1,B.bp,new A.x(v.c,n,Ai.BP,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.b3(24,24)
p=new A.ay(B.ev,2,B.r,-1)
s=new A.o(n,n,new A.c2(p,p,p,p),new A.bv(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aH(n,new A.C(B.et,A.u(A.a([new A.C(B.lZ,new A.cC(B.aZ,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.CG(!0,new C.ai6(v,q.d,q.e,new C.cZR(),n,n),n),B.h,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.cZS(o,v),n,n,n,n,n,n,!1,B.ae))}k.push(new A.C(D.bgh,A.bK(D.f8Q,new C.cZT(o,d),A.bk(B.b2,n,n,n,n,B.nF,n,n,new A.b5(A.m(16),B.V),n,n,n)),n))
return A.bq(!0,new A.d1(new A.aX(0,1/0,0,m.a.b*0.9),A.cL(k,n,D.bkt,n,n,B.aj,!0),n),!0,!1,B.ah,!0,!0)}}
C.mQ.prototype={
ac(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a4().ab()],x.N,x.z)},
b6W(d,e,f){return new C.mQ(this.a,e,d,f)}}
C.G4.prototype={
vu(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.G4(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
azZ(d){var w=null
return this.vu(w,w,w,w,w,d,w,w,w,w,w,w)},
cyd(d){var w=null
return this.vu(w,w,w,w,d,w,w,w,w,w,w,w)},
b6U(d,e,f){var w=null
return this.vu(d,w,w,w,w,w,w,w,e,w,f,w)},
cyS(d){var w=null
return this.vu(w,w,w,w,w,w,d,w,w,w,w,w)},
cz0(d){var w=null
return this.vu(w,w,w,w,w,w,w,w,w,d,w,w)},
cyb(d){var w=null
return this.vu(w,w,w,d,w,w,w,w,w,w,w,w)},
cz2(d){var w=null
return this.vu(w,w,w,w,w,w,w,w,w,w,w,d)},
cy8(d){var w=null
return this.vu(w,w,d,w,w,w,w,w,w,w,w,w)},
cy3(d){var w=null
return this.vu(w,d,w,w,w,w,w,w,w,w,w,w)},
Em(d){var w=null
return this.vu(w,w,w,w,w,w,w,d,w,w,w,w)},
cza(d,e,f,g,h,i,j,k,l,m,n){return this.vu(d,e,f,g,null,h,i,j,k,l,m,n)},
ac(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cw1(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bJ7(d),k=A.aQ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aQ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cI(d.h(0,n))).length!==0?B.a.i(A.cI(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cI(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.AU.geb(D.AU))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a_R)
q=l.$2("frame",D.a_m)
l=l.$2("texture",D.a_h)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cI(d.h(0,"author"))):o
return this.cza(p,u,t,q,r,A.tf(d.h(0,"ribbon"))?A.EF(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Xg.prototype={
S(){return new C.awV(A.a([],x.I),D.Kq)},
gdS(){return this.c}}
C.awV.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yA(0,1)
w=$.au()
v.z=new A.ap(B.as,w)
v.Q=new A.ap(B.as,w)
v.kt()
w=v.a
C.bxw(w.c,w.d).bw(new C.d_x(v),x.fL)},
p(){var w,v=this,u=v.f
u===$&&A.c()
u.p()
u=v.z
u===$&&A.c()
w=$.au()
u.R$=w
u.O$=0
u=v.Q
u===$&&A.c()
u.R$=w
u.O$=0
v.a2()},
kt(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Jc(s.c,s.d),$async$kt)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.d_l(t,r))
t.asg()
case 1:return A.h(u,v)}})
return A.i($async$kt,v)},
gaoV(){var w,v=this
if(!J.ci(v.d)){w=v.r
w=w<0||w>=J.a9(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
asg(){var w,v,u=this.gaoV(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saS(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saS(0,w==null?"":w)},
c30(d){this.n(new C.d_i(this,d))
this.asg()},
LH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$LH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mQ(B.o.u(1000*Date.now()),"Untitled page","",new A.Q(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aNi(r.c,r.d,s),$async$LH)
case 3:w=4
return A.b(t.kt(),$async$LH)
case 4:if(t.c==null||J.ci(t.d)){w=1
break}q=J.pK(t.d,new C.cZU(s))
p=q>=0?q:J.a9(t.d)-1
t.n(new C.cZV(t,p))
t.asg()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.A4(p+1,B.co,B.ks),$async$LH)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$LH,v)},
zL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaoV()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aNi(o.c,o.d,new C.mQ(s,r,q,new A.Q(p,0,!1))),$async$zL)
case 3:w=4
return A.b(t.kt(),$async$zL)
case 4:if(t.c==null){w=1
break}t.n(new C.d_m(t))
case 1:return A.h(u,v)}})
return A.i($async$zL,v)},
Mm(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaoV()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.d_2(r),s,null,!0,!0,x.y),$async$Mm)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bxi(s.c,s.d,r.a),$async$Mm)
case 4:t.n(new C.d_3(t))
w=5
return A.b(t.kt(),$async$Mm)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.RU(B.o.D(t.r+1,0,J.a9(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Mm,v)},
xn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zL(),$async$xn)
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
return A.b(C.P9(s,r.r,o,p,q),$async$xn)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a8(s,!1).M(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h4F(s,r.x,r.r),$async$xn)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Jc(s.c,s.d),$async$xn)
case 10:l=e
for(s=n.d,r=J.cA(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.mQ(""+(m+k),q,B.a.i(j.b),new A.Q(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.zN(r.c,r.d,l),$async$xn)
case 11:w=12
return A.b(t.kt(),$async$xn)
case 12:r=t.c
if(r==null){w=1
break}r.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xn,v)},
Ze(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ze=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zL(),$async$Ze)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxl(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dI(D.xA,new C.d_j(t),new C.d_k())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m3("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gT(o)
p.push(new F.m3(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fJh(o,new F.qH(s,r,"",p,new F.tU(q.d,null,null,null,null,"","","")),null),$async$Ze)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Ze,v)},
M4(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$M4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zL(),$async$M4)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.c1(D.a8H,null,new C.cZZ(t),s,!0,!0,!0,D.aGI,!1,!1,x.N),$async$M4)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cyd(r)
t.n(new C.d__(t,q))
s=t.a
w=7
return A.b(C.PJ(s.c,s.d,q),$async$M4)
case 7:case 1:return A.h(u,v)}})
return A.i($async$M4,v)},
UZ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c1(D.a8H,null,new C.d_4(t),r,!0,!0,!0,D.aGI,!1,!1,x.e),$async$UZ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.d_5(t,s))
r=t.a
w=4
return A.b(C.PJ(r.c,r.d,s),$async$UZ)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.A4(0,B.dU,B.o3)
case 1:return A.h(u,v)}})
return A.i($async$UZ,v)},
bJa(d){var w=d.bQ(),v=B.a.aT(B.o.u(w.gcb()),2,"0"),u=B.a.aT(B.o.u(w.gcq()),2,"0")
return""+w.gcd()+"-"+v+"-"+u},
gxl(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bR2()
if(r.e)w=D.a7O
else if(J.ci(r.d)){w=r.y
v=r.gxl(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eBy,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a3(q,330,new A.C(Z.adM,new C.Wz(w,v,0,q),q),q),B.bt,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.jY.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bt],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aH(q,A.p(q,D.en4,B.h,q,q,new A.o(q,q,q,A.m(18),A.a([new A.aa(0,B.G,B.dJ.j(0.45),B.J,18)],x.V),E.uQ,B.n),q,q,q,q,B.VH,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcvc(),q,q,q,q,q,q,!1,B.ae))
w.push(B.T)
w.push(A.hh(D.bui,D.f8l,r.gaIp(),q))
B.d.v(u,w)}w=A.at(A.ch(A.u(u,B.m,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.en,q,q,B.aj),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.a9(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.jY.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dL:B.yQ
u=A.u(A.a([new A.C(D.bhj,w,q),A.D(A.Hm(v,new C.d_v(r),J.a9(r.d)+1,q,r.gc3_(),u,B.aZ),1),r.bwq()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cd(q,D.a9M,new A.am(B.W,q,B.aY,B.q,A.a([D.aFk,A.bq(!0,A.u(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],v),q),q,!1,!1,q,q)},
bR2(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.ct(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Ij(B.dP,"AI",h.gbup(),!0))
if(h.a.f)f.push(new C.Ij(B.nt,"Cover",h.gbEJ(),!1))
if(h.a.f)f.push(new C.Ij(B.xd,"Header",h.gbzN(),!1))
if(J.ct(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Ij(B.rZ,"Print",h.gcbM(),!1))
if(h.a.f&&J.ct(h.d)&&h.r>=0){v=h.w
u=v?B.hl:B.j2
t=v?"Save":"Edit"
f.push(new C.Ij(u,t,v?h.gchJ():new C.d_f(h),!1))}if(h.a.f)f.push(new C.Ij(B.hQ,"Add page",h.gaIp(),!1))
v=C.h0S(h.y.Q)
u=h.gxl(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.a9(h.d)
r=J.a9(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.d6R
else{k=new A.b3(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.jx.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.jY,g,g,g,17),B.h,g,g,new A.o(g,g,new A.c2(i,i,i,i),new A.bv(k,k,k,k),g,new A.a7(B.a3,B.a7,B.w,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.jY.j(0.85)
p.push(new A.bF(1,B.bp,A.aH(B.c5,A.u(A.a([k,B.bA,new A.x(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.R,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.ae),g))}return new C.ai6(v,u,t+" \xb7 "+s+" "+r,new C.d_g(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
yP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zL(),$async$yP)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a03(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.cZW(t,p),s,null,!0,!0,x.N),$async$yP)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xn(),$async$yP)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Cu(),$async$yP)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.E1("Swahili (Kiswahili)",!0),$async$yP)
case 18:w=16
break
case 17:w=19
return A.b(t.cs_(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yP)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yP,v)},
WQ(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.H(E.jx.j(0.3),B.r,1),r=x.p
return new A.C(B.cK,A.aI(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.h,w,w,new A.o(w,w,w,w,w,E.uQ,B.a5),w,42,w,w,w,w,w,42),B.bc,A.D(A.u(A.a([A.d(f,w,w,w,w,w,w,A5.a4b,w,w,w),A.d(g,w,w,w,w,w,w,E.a41,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d_h(d,h),w,w,w,w,w,w,w),w)},
Cu(){return this.bIF()},
bIF(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Cu=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.d_8(r),a7,null,!0,!0,x.ei),$async$Cu)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.z(r.d,x.B)
p=g
f=r.y
o=new A.eL("Working on it\u2026",$.au())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.d_9(o),a7,null,!0,!0,x.H).f3(new C.d_a(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.cg(l,new A.A(k.b,k.c))}d=r.r
a0=r.y.ac()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.xA[a1]
J.cg(j,i.a)}w=8
return A.b(C.aeu(a0,a7,new C.d_b(o),d,l,e,j),$async$Cu)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a5(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a8(l,!0).eD()
l=o
l.shI($.au())
J.aNK(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.G(x.q).f
j=n
l.P(A.b0(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gci(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.a9(p);++a4){if(m.b.am(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b6W(m.b.h(0,a4).b,a7,new A.Q(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.zN(j.c,j.d,l),$async$Cu)
case 11:w=12
return A.b(r.kt(),$async$Cu)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.xA[a1].a)
a5=l.cw1(j,12,a7)
l=r.a
w=15
return A.b(C.PJ(l.c,l.d,a5),$async$Cu)
case 15:if(r.c!=null)r.n(new C.d_c(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.A4(0,B.dU,B.o3)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.G(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.b0(a3?A.cld("Undo",new C.d_d(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Cu,v)},
E1(d,e){return this.cs0(d,e)},
cs_(d){return this.E1(d,!1)},
cs0(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$E1=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.z(r.d,x.B)
d=e
a0=new A.eL("Starting\u2026",$.au())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.d_o(a0),k,null,!0,!0,x.H).f3(new C.d_p(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.cg(o,new A.A(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a0g(m,new C.d_q(a0)),$async$E1)
case 10:w=8
break
case 9:w=11
return A.b(C.byY(new C.d_r(a0),m,a2),$async$E1)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a5(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a8(o,!0).eD()
o=a0
o.shI($.au())
J.aNK(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.G(x.q).f
k=q
o.P(A.b0(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.a9(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b6W(J.q(p,g).b,j.a,new A.Q(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zN(k.c,k.d,o),$async$E1)
case 12:w=13
return A.b(r.kt(),$async$E1)
case 13:o=r.c
if(o==null){w=1
break}o=o.G(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.b0(A.cld("Undo",new C.d_s(r,d),null),null,null,null,null,B.q,null,k,null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$E1,v)},
bwq(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.cZX(v):u
r=A.aF(u,u,u,u,A.V(D.bq3,s?D.jY:B.bf,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.ct(v.d)&&!v.w&&v.r>=0)s=A.hh(A.V(B.us,B.Dh,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Dh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbEi(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.jY.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.at(s,u,u,u),1)
w=t<J.a9(v.d)?new C.cZY(v):u
return A.bq(!0,new A.C(D.bh7,A.B(A.a([r,s,A.aF(u,u,u,u,A.V(B.ek,t<J.a9(v.d)?D.jY:B.bf,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ah,!0,!1)}}
C.Xk.prototype={
S(){return new C.bb0(new A.ap(B.as,$.au()))}}
C.bb0.prototype={
ga_l(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
p(){var w=this.d
w.R$=$.au()
w.O$=0
this.a2()},
gbHs(){var w,v=this.ga_l()
A:{if("cover"===v){w=D.cEz
break A}if("book"===v){w=D.cAG
break A}w=D.d_T
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jx.j(0.5),n=x.p,m=A.B(A.a([D.d6S,B.aw,D.bmj,A.aF(q,q,q,q,B.l0,q,q,q,new C.d0Y(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jQ(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d0Z(r),r.ga_l()==="page",q,q,q,q))
if(r.a.d)l.push(A.jQ(q,q,q,D.f3s,q,new C.d1_(r),r.ga_l()==="book",q,q,q,q))
l.push(A.jQ(q,q,q,D.eSM,q,new C.d10(r),r.ga_l()==="cover",q,q,q,q))
l=A.c8(B.bH,l,B.bx,6,8)
k=B.c.j(0.07)
k=A.aK(q,B.U,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bm(q,new A.b2(4,A.m(16),B.V),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kh,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ag,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.di,!0,B.a6,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbHs(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mJ(q,B.c.j(0.08),new A.x(s,q,B.Hf,q,q,q,q,q,q,q,q,q),B.hn,new C.d11(r,s),q,q,q,q))}return A.ew(q,E.zg,A.ch(A.u(A.a([m,B.T,D.f6o,B.ar,l,B.ab,k,B.P,A.c8(B.bH,w,B.bx,6,6),B.ay,A.dn(D.buf,D.f79,new C.d12(r,d),A.bk(B.b2,q,q,q,q,B.nF,q,q,new A.b5(A.m(16),B.V),q,q,q)),B.av,D.f1W],n),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.fA,q,q,B.aj),q,q,q,D.adv,B.cZ,q,new A.b5(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.Xi.prototype={
S(){return new C.awW(A.a([],x.Y))},
gdS(){return this.c}}
C.ack.prototype={}
C.awW.prototype={
Z(){this.a0()
this.kt()},
kt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Pd(p.c,p.d),$async$kt)
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
return A.b(C.bxw(r.c,q),$async$kt)
case 6:j=e
i=J
w=7
return A.b(C.Jc(t.a.c,q),$async$kt)
case 7:m.push(new l.ack(k,j,i.a9(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.n(new C.d_M(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kt,v)},
b2o(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Oh(d,e){return this.c4y(0,e)},
c4y(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Oh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a8(s,!1).cr(A.eH(new C.d_L(u,e),!0,null,x.y)),$async$Oh)
case 2:t=g
w=3
return A.b(u.kt(),$async$Oh)
case 3:if(t===!0&&u.c!=null)u.c.G(x.q).f.P(D.aIw)
return A.h(null,v)}})
return A.i($async$Oh,v)},
E4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$E4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.G(x.q).f.P(D.aIs)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.adQ(s.c,s.d),$async$E4)
case 5:q=e
w=6
return A.b(t.kt(),$async$E4)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Oh(0,B.d.kZ(t.d,new C.d_Q(q))),$async$E4)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.P9(p,s.f,r,n,o),$async$E4)
case 10:m=e
w=11
return A.b(t.kt(),$async$E4)
case 11:if(m&&t.c!=null)t.c.G(x.q).f.P(D.aIw)
case 1:return A.h(u,v)}})
return A.i($async$E4,v)},
NM(d,e){return this.cfx(0,e)},
cfx(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.d_P(t,e),s,null,!0,!0,x.y),$async$NM)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0t(s.c,s.d,e.a),$async$NM)
case 4:w=5
return A.b(t.kt(),$async$NM)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NM,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bwt(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.H(E.jx.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aH(n,new A.fJ(0.7142857142857143,A.p(n,A.u(A.a([D.d6T,B.ab,D.dNZ,B.av,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.jY.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b6,B.j,0,B.p),B.h,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcv8(),n,n,n,n,n,n,!1,B.ae))}w=A.m(22)
v=A.H(E.jx.j(0.85),B.r,1.6)
s=A.aH(n,A.p(n,D.bBK,B.h,n,n,new A.o(B.x.j(0.3),n,A.H(E.jx.j(0.6),B.r,1),n,n,n,B.a5),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d_R(d),n,n,n,n,n,n,!1,B.ae)
r=A.m(14)
q=B.x.j(0.3)
p=A.H(E.jx.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bc,D.bmD,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eAJ,n,n,n),B.h,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.fV,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,v,w,n,D.bGw,B.n),n,n,n,Ag.Ve,D.bfd,n,n,n)
if(o.e)k=D.a7O
else k=k.length===0?D.aWQ:A.cj(new C.d_S(k))
return A.cd(n,D.a9M,new A.am(B.W,n,B.aY,B.q,A.a([D.aFk,A.bq(!0,A.u(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],l),n),n,!1,!1,n,n)},
bwt(d){var w,v,u=this,t=null,s=u.b2o(d),r=d.c,q=x.p,p=A.a([A.bZ(0,A.eX(B.A,new A.a3(300,420,new C.Wz(d.b,s,r,t),t),B.h,B.dp),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aH(t,A.p(t,D.bB4,B.h,t,t,new A.o(B.x.j(0.55),t,A.H(B.bf,B.r,1),t,t,t,B.a5),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d_J(u,d),t,t,t,t,t,t,!1,B.ae),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eAl,t,t,t)
v=r===1?"page":"pages"
return A.aH(t,A.u(A.a([new A.fJ(0.7142857142857143,new A.am(B.W,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.jY.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d_K(u,d),t,t,t,t,t,t,!1,B.ae)}}
C.Ij.prototype={}
C.Wz.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dI(D.xA,new C.czi(m),new C.czj()),j=m.c,i=D.AU.h(0,j.e),h=A.aY(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m8:B.b6
v=new C.czk(h)
i=A.a([new A.aa(0,B.G,B.x.j(0.6),D.dLB,28)],x.V)
u=x.p
t=A.a([A.bZ(0,A.b1(l,l,l,new C.b8i(j.x,h,l),B.at),0,0,0),A.an(0,A.p(l,l,B.h,l,l,new A.o(l,l,l,l,l,new A.a7(B.a3,B.a7,B.w,A.a([B.x.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.b3(3,3)
t.push(new A.cF(8,40+s*46,l,l,l,l,A.p(l,l,B.h,l,l,new A.o(h.j(0.7),l,l,new A.bv(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.adN,8,0.85,2.2),v.$4(D.bjW,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.adN,8,0.85,2.4))
else if(r==="corners")t.push(A.bZ(0,new A.C(D.bjS,A.b1(l,l,l,new C.b89(h,l),B.at),l),0,0,0))
r=A.V(D.arM[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.apk,l,l),B.L,l,l)
p=A.p(l,l,B.h,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.ab,p,B.ab,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cx,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bZ(0,new A.C(D.bkl,A.u(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b1(l,l,l,new C.aDM(l),D.equ),l,l,l,46,0,l))
return A.p(l,A.bu(D.a6v,new A.am(B.W,l,B.a9,B.q,t,l),B.ap),B.h,l,l,new A.o(l,l,l,D.a6v,i,new A.a7(B.ax,B.aC,B.w,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b8i.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.f0()
f.dX(11)
switch(this.b){case"plain":return
case"linen":$.a_()
w=A.N()
w.r=B.x.j(0.07).gq(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.L()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.a_()
q=A.N()
q.r=B.c.j(0.05).gq(0)
q.c=1
for(p=0;p<u;p+=4){r=q.L()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ae()
l=f.ae()
k=f.ae()
$.a_()
j=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
j.r=t.j(0.25+f.ae()*0.5).gq(0)
r=j.L()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.a_()
j=A.a([],l)
h=new A.aR(k.r,B.aq,null,null,j)
j.push(new A.b7(v,t))
k=i-0.04
j.push(new A.ao(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ao(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bE())
k=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
k.r=m.j((n&1)===0?0.09:0.03).gq(0)
r=k.L()
k=h.gbM().a.snapshot()
o.drawPath((h.e=new A.cG(k)).a,r)
r.delete()}break
default:$.a_()
w=A.N()
w.r=B.x.j(0.07).gq(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ae()
m=f.ae()
l=f.ae()
r=w.L()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.a_()
g=A.N()
g.r=B.c.j(0.035).gq(0)
for(n=0;n<120;++n){o=f.ae()
m=f.ae()
l=f.ae()
r=g.L()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
aq(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b89.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.a_(),k=A.N(),j=this.b
k.r=j.j(0.9).gq(0)
k.b=B.ad
k.c=2.4
k.d=B.bV
for(w=e.a,v=e.b,v=[D.eiG,new A.cK([w,0,-1,1]),new A.cK([0,v,1,-1]),new A.cK([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aR(l,B.aq,null,null,s)
s.push(new A.b7(r+p*34,q))
s.push(new A.ao(r,q))
s.push(new A.ao(r,q+o*34))
m=k.L()
s=n.gbM().a.snapshot()
w.drawPath((n.e=new A.cG(s)).a,m)
m.delete()
s=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
s.r=j.j(0.9).gq(0)
m=s.L()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aq(d){return!d.b.A(0,this.b)}}
C.tC.prototype={}
C.WR.prototype={
S(){return new C.b8g()}}
C.b8g.prototype={
gnt(){var w=this.d
return w===$?this.d=this.a.c:w},
gxl(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ap(new A.bc(w.b,B.b0,B.aM),$.au())}return v},
gaxi(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ap(new A.bc(w.c,B.b0,B.aM),$.au())}return v},
ganx(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ap(new A.bc(w.y,B.b0,B.aM),$.au())}return v},
p(){var w=this,v=w.gxl(0),u=v.R$=$.au()
v.O$=0
v=w.gaxi()
v.R$=u
v.O$=0
v=w.ganx()
v.R$=u
v.O$=0
w.a2()},
ao7(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jQ(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cSK(this,f,u),e===u,s,s,s,s))}return A.c8(B.bH,r,B.bx,6,8)},
atx(d){var w=null,v=B.c.j(0.07)
return A.bm(w,new A.b2(4,A.m(14),B.V),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.l7,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnt(),a0=f.gxl(0),a1=a0.a.a,a2=f.gaxi(),a3=a2.a.a,a4=f.ganx(),a5=d.b6U(a4.a.a,a3,a1)
a1=x.w
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a3(190,260,A.eX(B.A,new A.a3(270,370,new C.Wz(a5,d,f.a.e,e),e),B.h,B.dp),e),e,e,e)
a0=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.atx("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.ag,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cT8(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a6,e,B.am,e,e,e,e)
a2=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.atx("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.ag,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cT9(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a6,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.xA[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.bf
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.h,e,e,new A.o(e,e,new A.c2(o,o,o,o),e,e,new A.a7(B.ax,B.aC,B.w,t.c,e,e),B.a5),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aH(e,A.u(A.a([p,B.d5,new A.x(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTa(f,t),e,e,e,e,e,e,!1,B.ae))}v=A.c8(B.bH,v,B.bx,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.b3(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.ev:B.K,2,B.r,-1)
q.push(A.aH(e,A.p(e,A.V(D.arM[n],B.c,e,e,e,24),B.h,e,e,new A.o(p,e,new A.c2(o,o,o,o),new A.bv(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTb(f,n),e,e,e,e,e,e,!1,B.ae))}q=A.c8(B.bH,q,B.bx,8,8)
a4=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.atx("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.ag,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cTc(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a6,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mg,e,e,e)
m=A.a([],w)
for(l=D.AU.gdH(D.AU),l=l.gag(l);l.C();){k=l.gT(l)
j=A.aY(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ev:B.bf
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.h,e,e,new A.o(j,e,new A.c2(o,o,o,o),e,e,e,B.a5),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aH(e,A.u(A.a([j,B.bA,new A.x(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cTd(f,k),e,e,e,e,e,e,!1,B.ae))}m=A.c8(B.bH,m,B.bx,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mg,e,e,e)
k=f.gnt()
return new A.C(new A.M(0,0,0,a3.f.d),A.bq(!0,new A.d1(new A.aX(0,1/0,0,a1.a.b*0.92),A.cL(A.a([D.f1p,B.ab,d,B.aO,a0,B.T,a2,B.ay,D.f6Y,B.P,v,B.ay,D.f1y,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.mb(e,9,""+B.k.U(f.gnt().f),36,18,new C.cTe(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mg,e,e,e),B.ar,f.ao7(D.a_R,f.gnt().r,new C.cTf(f),D.d30),B.ab,A.d("BORDER",e,e,e,e,e,e,H.mg,e,e,e),B.ar,f.ao7(D.a_m,f.gnt().w,new C.cTg(f),D.d35),B.ab,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mg,e,e,e),B.ar,f.ao7(D.a_h,f.gnt().x,new C.cTi(f),D.d4t),B.ar,A.iv(e,B.b2,e,B.ah,e,new C.cTj(f),e,e,e,D.eXg,f.gnt().z),B.bt,A.bK(D.f0k,new C.cTk(f,a6),A.bk(B.b2,e,e,e,e,B.nF,e,e,new A.b5(A.m(16),B.V),e,e,e))],w),e,P.adk,e,e,B.aj,!0),e),!0,!1,B.ah,!0,!0),e)}}
C.aDM.prototype={
a6(d,e){var w,v,u,t=new A.aR($.a_().r,B.aq,null,null,A.a([],x.v))
t.E(new A.b7(0,0))
w=e.a
t.E(new A.ao(w,0))
v=e.b
t.E(new A.ao(w,v))
t.E(new A.ao(w/2,v-12))
t.E(new A.ao(0,v))
t.E(new A.bE())
u=A.N()
u.sar(D.bH7.az(0,new A.ac(0,0,0+w,0+v)))
d.aQ(t,u)},
aq(d){return!1}}
C.bdt.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.a_()
w=A.N()
w.sar(D.bGc.az(0,new A.ac(0,0,a3,a4)))
a5.bd(new A.ac(0,0,a3,a4),w)
v=B.k.dF(a2/112)
u=new A.f0()
u.dX(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ae()*20
l=56+u.ae()*40
k=D.cEy[u.aB(9)]
j=u.aB(14)
J.bH(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.ac(n,j,n+m,j+l)
h=A.bN(i,B.fZ)
g=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.x,0.45)
e.toString
g.sar(new A.a7(B.a3,B.a7,B.w,A.a([f,k,e],t),a0,a0).az(0,i))
d=g.L()
w.drawRRect(A.fs(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
e.r=E.jx.j(0.55).gq(0)
d=e.L()
w.drawRect(A.cp(new A.ac(h,j,g,j+2)),d)
d.delete()
j=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
j.r=E.jx.j(0.4).gq(0)
d=j.L()
w.drawRect(A.cp(new A.ac(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aB(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.sar(D.bFB.az(0,new A.ac(0,r,a3,q)))
d=p.L()
w.drawRect(A.cp(new A.ac(0,r,a3,q)),d)
d.delete()
p=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=B.x.j(0.5).gq(0)
p.z=B.jj
d=p.L()
w.drawRect(A.cp(new A.ac(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.aZW.j(0.72).gq(0)
a5.bd(new A.ac(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.sar(new A.bR(B.A,0.5,B.w,a0,0,A.a([D.b51.j(0.22),B.K],t),a0,a0).az(0,A.bV(new A.v(w,a2),a1)))
a5.ak(new A.v(w,a2),a1,a4)},
aq(d){return!1}}
C.b6w.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ae("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cF(14,w*2,v*2.2,v*2,o,o,new A.kB(new A.o(A.aq(D.jY,D.b8K,w/4),o,new A.c2(B.V,new A.ay(B.x.j(0.12),1,B.r,-1),B.V,B.V),B.Ii,o,o,B.n),B.ba,o,o),o))}v=x.V
u=A.a([new A.aa(0,B.G,B.x.j(0.35),B.aBa,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.b3(2,2)
t.push(A.p(o,o,B.h,o,o,new A.o(E.jx.j(0.6),o,o,new A.bv(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.u(t,B.m,o,B.qy,B.j,0,B.p),B.h,o,o,new A.o(o,o,o,D.aPw,u,D.bH5,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.aa(0,B.G,B.x.j(0.4),B.dm,18)],v)
t=A.an(o,A.b1(o,o,o,new C.aDM(o),D.eqp),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aR2(p.y,r,G.ie,o))
r=n.d
q=p.x
if(p.f)n=A.u(A.a([A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.r,o,o,o,o,o,2,A.bm(o,B.er,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ie.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eNw,!0,B.a6,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ie.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.w,o,o,o,o,o,2,A.bm(o,B.er,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.ie.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,o,B.ag,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eF0,!0,B.a6,B.yi,B.am,o,o,o,o),1)],m),B.af,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.eNp,o,o,o),B.av,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.ie.j(0.5),o,o,o,o,o,o,o,o,11,B.cx,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.B(A.a([A.D(A.p(o,o,B.h,D.D4.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fp,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.D4.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.h,D.D4.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.ay],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.ie.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.VQ(A.dq(A.a([A.dq(o,o,o,o,o,o,o,o,o,D.eHW,B.a.an(k,0,1)),A.dq(o,o,o,o,o,o,o,o,o,o,B.a.aW(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.ie.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ch(A.u(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.z,o,o,o,o,B.aj)}s.push(A.D(n,1))
s.push(new A.C(B.im,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.ie.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.D(A.p(o,A.bu(B.Ii,new A.am(B.W,o,B.a9,B.q,A.a([t,new A.C(D.bjp,A.u(s,B.af,o,B.e,B.j,0,B.p),o),A.an(0,A.bT(o,new A.o(o,o,o,o,o,new A.a7(B.a3,B.a7,B.w,A.a([B.x.j(0.16),B.K],x.O),o,o),B.n),B.ba),o,o,0,o,0,22)],m),o),B.ap),B.h,o,o,new A.o(o,o,o,B.Ii,v,D.bHD,B.n),o,o,o,o,o,o,o,o),1)],m),B.af,o,B.e,B.j,0,o,o))
return new A.am(B.W,o,B.a9,B.q,l,o)}}
C.amS.prototype={
S(){return new C.aAo(A.a([],x._))},
bn(){return this.r.$0()},
p5(){return this.w.$0()},
gdS(){return this.c}}
C.aAo.prototype={
Z(){var w,v
this.a0()
this.v0()
w=this.a
v=w.c
if(v.length!==0)C.a51(v,w.e,w.d.w)},
uQ(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fJk(r,t.e,!1,s.w,new C.dLn(u),null,s),$async$uQ)
case 2:w=3
return A.b(u.v0(),$async$uQ)
case 3:return A.h(null,v)}})
return A.i($async$uQ,v)},
Yq(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Yq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fJk(r,t.e,!0,s.w,new C.dLm(u),null,s),$async$Yq)
case 2:w=3
return A.b(u.v0(),$async$Yq)
case 3:return A.h(null,v)}})
return A.i($async$Yq,v)},
v0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$v0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zC(q.a.c),$async$v0)
case 7:p=e
if(q.c!=null)n=q.e||J.ct(p)
else n=!1
if(n)q.n(new C.dLp(q,p))
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
return A.b(C.F3(q.a.c).cJ(0,B.oW),$async$v0)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.n(new C.dLq(q,o))
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
if(q.c!=null&&q.e)q.n(new C.dLr(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$v0,v)},
MR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$MR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.G(s).f.P(D.etY)
w=3
return A.b(C.F3(t.a.c),$async$MR)
case 3:r=e
w=4
return A.b(C.fpP(t.a.c,r),$async$MR)
case 4:q=e
w=5
return A.b(C.F3(t.a.c),$async$MR)
case 5:p=e
if(t.c==null){w=1
break}t.n(new C.dLl(t,p))
o=t.c.G(s).f
s=A.d(q?"Family trees synced \u2014 "+J.a9(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.b0(null,null,null,q?B.dr:B.cN,null,B.q,null,s,null,B.lV,null,null,null,null,null,null,null,null,null,null))
t.a.p5()
case 1:return A.h(u,v)}})
return A.i($async$MR,v)},
Gz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hPg(l),$async$Gz)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hjH(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aWB(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Gz)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h11(r)
o=Date.now()
n=t.a.c
m=new C.kn(l,r.toUpperCase(),p,!0,B.U,D.AJ,new A.Q(o,0,!1),0,n,D.rK)
w=5
return A.b(C.a0z(n,m),$async$Gz)
case 5:w=6
return A.b(t.v0(),$async$Gz)
case 6:t.a.bn()
t.a.p5()
if(t.c==null){w=1
break}t.Df(m)
case 1:return A.h(u,v)}})
return A.i($async$Gz,v)},
Df(d){return this.c6v(d)},
c6v(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Df=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zC(u.a.c),$async$Df)
case 2:n=l.qD(k.dE(f,new C.dLo(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hm(m,new C.amM(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Df)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0z(u.a.c,o),$async$Df)
case 6:case 5:w=7
return A.b(u.v0(),$async$Df)
case 7:u.a.p5()
return A.h(null,v)}})
return A.i($async$Df,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.L(d).ax.a===B.H,o=new C.t5(p)
if(r.e)return A.at(A.mk(q,p?B.bo:B.bu,q,q,q,q,q,q,q,q),q,q,q)
if(J.ci(r.d)){w=p?B.dR:B.c
v=A.m(15)
u=A.aD(!1,B.Y,!0,q,A.aI(!1,q,!0,A.p(q,D.bvk,B.h,q,q,new A.o(B.aS.j(0.12),q,A.H(B.aS,B.r,2),q,q,q,B.a5),q,52,q,q,q,q,q,52),B.cE,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc5B(),q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Ea(A.p(q,A.u(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bo:B.bu,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dW,A.bK(D.f86,r.gaMo(),A.bk(B.bT,q,q,q,q,q,Af.VK,q,new A.b5(A.m(12),B.V),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.h,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bjm,q,q,1/0),15,B.ah,1.05,D.a5d,q)}w=J.a9(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b7],v)
if(J.ct(r.d))w.push(A.aF(q,q,q,q,A.V(B.xk,B.aS,q,q,q,q),q,q,q,new C.dLt(r),q,q,q,q,"Sync family trees with database",q))
if(J.ct(r.d))w.push(A.aF(q,q,q,q,A.V(B.xb,B.aS,q,q,q,q),q,q,q,r.gacH(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.aiJ,D.eQJ,r.gaMo(),A.bk(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.a9(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ab)
u.push(new C.Ea(r.cs4(J.q(r.d,s),o),14,B.ah,1,D.a5d,q))
B.d.v(w,u)}return A.u(A.a([p,B.ay,A.u(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cs4(d,e){var w=null,v=e.a,u=v?B.dR:B.c,t=A.m(14),s=A.H((v?B.dT:B.c4).j(0.55),B.r,1),r=A.a([new A.aa(0,B.G,B.x.j(v?0.35:0.08),B.e6,10)],x.V),q=A.m(14),p=A.p(w,D.buo,B.h,w,w,new A.o(B.aS.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.galw(),m=d.d?"":" \xb7 Public",l=d.y===D.k3?" \xb7 View only":"",k=x.p
l=A.D(A.u(A.a([o,B.bA,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bu,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.Y,!0,w,A.aI(!1,q,!0,new A.C(B.bB,A.B(A.a([p,B.bc,l,A.V(B.KA,v?B.bo:B.bu,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dLs(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac),B.h,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amM.prototype={
S(){return new C.aAl(A.a([],x._),A.aZ(x.N),A.b4c())},
bn(){return this.r.$0()},
gdS(){return this.c}}
C.aAl.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9M()
w=u.a
v=w.c
if(v.length!==0)C.a51(v,w.e,w.d.w)},
p(){var w=this.w
w.R$=$.au()
w.O$=0
this.a2()},
a0f(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0f=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.wP("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dKO(r),s,null,!0,!0,x.y),$async$a0f)
case 3:if(e!==!0||t.c==null){w=1
break}t.HZ()
t.n(new C.dKP(t,r))
w=4
return A.b(t.uS(),$async$a0f)
case 4:t.a.bn()
t.wP(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a0f,v)},
cin(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aT.x1$.push(new C.dKJ(w,f,d,e))},
aOy(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dh()
u.dZ(w,v,0,1)
u.jg(q,q,1,1)
this.w.sq(0,u)},
b4C(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.ex(new Float64Array(16))
q.dT(r)
w=q.Bu()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dh()
t.dZ(r,u,0,1)
t.jg(v,v,1,1)
t.dZ(-r,-u,0,1)
t.ig(0,q)
s.sq(0,t)},
a9M(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zC(u.a.c),$async$a9M)
case 2:t=s.qD(r.dE(e,new C.dKh(u)))
if(t!=null&&u.c!=null)u.n(new C.dKi(u,t))
return A.h(null,v)}})
return A.i($async$a9M,v)},
wP(d){var w=null,v=this.c
if(v==null)return
v.G(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
uQ(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$uQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fJk(o,t,!1,r,new C.dKw(u),q.a,s),$async$uQ)
case 2:n=A
m=J
w=3
return A.b(C.F3(u.a.c),$async$uQ)
case 3:p=n.qD(m.dE(e,new C.dKx(u)))
if(p!=null&&u.c!=null)u.n(new C.dKy(u,p))
return A.h(null,v)}})
return A.i($async$uQ,v)},
HZ(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cu(w,0)},
uS(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a0z(t,s),$async$uS)
case 2:return A.h(null,v)}})
return A.i($async$uS,v)},
ZU(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tj(q,t.a.c)){t.wP("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hQp(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$ZU)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.HZ()
t.n(new C.dKI(t,r))
w=4
return A.b(t.uS(),$async$ZU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZU,v)},
YD(){return this.c6x()},
c6x(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$YD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tj(q,t.a.c)){t.wP("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.L(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dKG(r,new C.t5(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$YD)
case 3:if(e!==!0||t.c==null){w=1
break}t.HZ()
t.n(new C.dKH(r,t))
w=4
return A.b(t.uS(),$async$YD)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YD,v)},
TR(d){return this.btB(d)},
btB(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tj(r,t.a.c)){t.wP("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dK5(t,d),r,null,!0,!0,x.P),$async$TR)
case 3:s=f
if(s==null){w=1
break}t.HZ()
t.n(new C.dK6(t,s))
w=4
return A.b(t.uS(),$async$TR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TR,v)},
a0B(d){return this.cuc(d)},
cuc(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.L(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.dKR(u,d,new C.t5(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a0B)
case 2:return A.h(null,v)}})
return A.i($async$a0B,v)},
c2V(d){var w=this,v=w.d
v===$&&A.c()
if(C.tj(v,w.a.c))w.Mw(d)
else w.a0B(d)},
af9(d,e){return this.cma(d,e)},
cma(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$af9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.L(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.dKL(new C.t5(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$af9)
case 3:case 1:return A.h(u,v)}})
return A.i($async$af9,v)},
GE(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$GE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.k3?3:5
break
case 3:w=6
return A.b(C.fxz(t.a.c),$async$GE)
case 6:s=e
o=t.a
r=C.fQT(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.af9(!s,!r),$async$GE)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bxp(o,t.a.c)){t.wP("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kP(o,"Cancel","Remove",q.y===D.k3?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$GE)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aLH(t.a.c,t.d.a),$async$GE)
case 11:t.a.bn()
o=t.c
if(o==null){w=1
break}A.iE(o,null)
case 1:return A.h(u,v)}})
return A.i($async$GE,v)},
a7n(d){return this.bEq(d)},
bEq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a7n=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tj(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.bg(s,new C.dK7(p))){o=A.U(s)
p.a=A.qD(new A.cS(new A.a4(s,new C.dK8(d),o.k("a4<1>")),new C.dK9(),o.k("cS<1,n>")))}q=p.a
if(q==null)q=d.d
t.HZ()
t.n(new C.dKa(t,s,d,q))
w=3
return A.b(t.uS(),$async$a7n)
case 3:t.wP(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a7n,v)},
Mw(d){return this.bGq(d)},
bGq(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tj(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a0B(d),$async$Mw)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dKe(t,d),r,null,!0,!0,x.P),$async$Mw)
case 6:s=f
if(s==null){w=1
break}t.HZ()
t.n(new C.dKf(t,s))
w=7
return A.b(t.uS(),$async$Mw)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Mw,v)},
csq(){var w=this,v=w.d
v===$&&A.c()
if(!C.tj(v,w.a.c))return
if(w.e.length===0)return
w.n(new C.dKQ(w))
w.uS()},
WC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$WC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bxp(n,t.a.c)){t.wP("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.L(n)
s=$.au()
r=new A.ap(B.as,s)
q=t.d.e
p=A.bj(new A.J(q,t.gc1q(),A.U(q).k("J<1,n>")).bZ(0,new C.dKr()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dKs(t,new C.t5(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$WC)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.HZ()
t.n(new C.dKt(t,p))
w=4
return A.b(t.uS(),$async$WC)
case 4:t.wP("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$WC,v)},
c1r(d){return B.a.i(d.toLowerCase())},
c5m(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tj(v,w)
t=r.d
s=C.hFT(t)
C.hPk(q,t.b,u,C.hFS(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.L(d).ax.a===B.H,m=new C.t5(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a4(l,new C.dKY(),A.U(l).k("a4<1>")).gI(0)
l=n?B.bW:B.iV
v=A.V(B.WM,n?B.bo:B.bu,o,o,o,18)
u=x.p
v=A.a([new A.C(B.zF,A.aI(!1,o,!0,new A.C(B.hx,A.B(A.a([v,B.bq,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bo:B.bu,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.R,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dKZ(p,d),o,o,o,o,o,o,o),o),new A.C(B.mA,p.bR3(m),o)],u)
if(p.d.y===D.k3){t=B.qA.j(0.15)
s=A.m(12)
r=A.H(B.qA.j(0.45),B.r,1)
q=C.F1(p.d,p.a.c)
v.push(new A.C(B.wy,A.p(o,A.B(A.a([D.bzv,B.aw,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iI,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b7],u)
if(C.tj(p.d,p.a.c)&&p.e.length!==0)u.push(new C.If("Undo",B.uJ,p.gcso(),m,o,o))
u.push(new C.If("Family Book",D.bpa,p.gc5l(),m,B.rg,o))
if(C.tj(p.d,p.a.c))u.push(new C.If("Display settings",Aj.EL,p.gc6w(),m,B.aW,o))
u.push(new C.If("Sync",B.xb,p.gacH(),m,o,o))
t=p.d
if(t.y===D.k3||C.bxp(t,p.a.c)){t=p.d.y===D.k3?"Remove shared tree":"Delete tree"
u.push(new C.If(t,B.e4,p.gbEA(),m,B.fO,o))}if(C.tj(p.d,p.a.c))u.push(new C.If("Add member",B.uE,new C.dL_(p),m,B.bT,o))
v.push(new A.C(P.acY,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.galw()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bo:B.bu,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cj(new C.dL0(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.V(n?L.WQ:W.KB,o,o,o,o,o)
v.push(A.at(A.hh(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dL1(p),o),o,o,o))}return A.cd(o,l,A.bq(!0,A.u(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),o,!1,!1,o,o)},
bR3(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.aa(0,B.G,B.fm.j(0.35),B.dm,18)],x.V)
u=A.m(22)
t=A.an(-26,A.V(B.x4,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.Y,!0,m,A.aI(!1,m,!0,A.p(m,D.bCt,B.h,m,m,new A.o(B.c.j(0.16),m,A.H(B.c.j(0.45),B.r,1.5),m,m,m,B.a5),m,46,m,m,m,m,m,46),B.cE,!0,m,m,m,m,m,m,m,m,m,m,m,n.gacH(),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.eDt,m,m,m)
r=r.galw()
p=n.d.galw()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.D(A.u(A.a([q,B.bA,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tj(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.bzH,m,m,m,n.gcfS(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j3:B.m3
r=r?"Private":"Public"
r=A.D(n.arG(q,"Privacy",r,n.a.d.w?n.gcru():m),1)
q=A.D(n.arG(B.xc,"Tree code",n.d.c,new C.dKg(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ab,A.B(A.a([r,B.aa,q,B.aa,A.D(n.arG(D.bqU,"Collaborators",p,n.gbVo()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.k3){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.Y,!0,A.m(999),A.aI(!1,A.m(999),!0,new A.C(B.fJ,A.B(A.a([A.V(B.oe,B.c,m,m,m,14),B.eA,A.d("View only",m,m,m,m,m,m,B.aJF,m,m,m)],o),B.m,m,B.e,B.R,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.h,s,0,m,m,m,m,m,B.ac)],o))}return A.p(m,A.bu(u,new A.am(B.W,m,B.a9,B.q,A.a([t,new A.C(B.DH,A.u(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.h,m,m,new A.o(m,m,m,w,v,D.bFF,B.n),m,m,m,m,m,m,m,1/0)},
arG(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.Y,!0,A.m(14),A.aI(!1,A.m(14),!0,new A.C(D.bl6,A.u(A.a([A.V(d,B.c,w,w,w,18),B.av,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ve,A.d(f,w,1,B.a2,w,w,w,K.a4_,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)}}
C.baJ.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gah(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b1(t,t,t,new C.baM(s,t),new A.ar(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.d_W(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d_X(this),A.U(r).k("J<1,r>")))
return new A.C(B.rH,new A.a3(w,v,new A.am(B.W,t,B.a9,B.h,u,t),t),t)}}
C.Ir.prototype={}
C.Em.prototype={}
C.baL.prototype={
gbcL(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aFR.prototype={}
C.baM.prototype={
bG8(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.a_()
v=A.N()
v.r=B.bz.j(0.75).gq(0)
v.c=2
v.d=B.bV
d.bK(new A.v(n,w),new A.v(m,w),v)
u=(n+m)/2
t=new A.aR(q.r,B.aq,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b7(u,q))
s=w-1.1
r=w-8.8
t.E(new A.p6(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.p6(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bE())
q=A.N()
q.r=B.c.gq(0)
d.ak(new A.v(u,w),9,q)
q=A.N()
q.r=B.bz.gq(0)
d.aQ(t,q)},
bG6(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aY(a0,new C.d0g())
w=f.b
v=w+(B.d.gK(a0).b-w)/2
u=B.d.bg(a0,new C.d0h(f))
t=new A.J(a0,new C.d0i(f),A.U(a0).k("J<1,P>")).bZ(0,new C.d0j()).cI(0,1/0,B.vP)
w=f.a
d.bK(f,new A.v(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.L()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lD(m)
i=Math.min(10,l/2)
l=$.a_()
h=A.a([],q)
g=new A.aR(l.r,B.aq,null,null,h)
h.push(new A.b7(w,v-i))
l=j*i
h.push(new A.d_(w,v,w+l,v))
h.push(new A.ao(n-l,v))
h.push(new A.d_(n,v,n,v+i))
h.push(new A.ao(n,o.b))
k=e.L()
n=g.gbM().a.snapshot()
r.drawPath((g.e=new A.cG(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.a_()
w=A.N()
w.r=B.bT.j(0.75).gq(0)
w.c=2.2
w.b=B.ad
w.d=B.bV
w.e=B.fq
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bG6(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.L()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bG8(d,w,q.a,q.b)}},
aq(d){return d.b!==this.b}}
C.beq.prototype={
gc_i(){var w=this.c
if(B.a.i(w.y).length!==0)return D.d_S
switch(w.c.a){case 0:return D.cwS
case 1:return D.cHc
case 2:return D.cVU}},
gc_l(){var w=this.c,v=C.h0r(w.w),u=C.h0r(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.L(d).ax.a===B.H,q=t.gc_i(),p=t.c,o=I.byh(p.f),n=t.gc_l(),m=x.V,l=A.a([new A.aa(0,B.G,B.d.gai(q).j(0.35),B.cA,10)],m),k=r?B.aG:B.c,j=A.H(r?B.aG:B.c,B.r,2)
if(o!=null)w=A.ry(B.A,s,B.ci,B.bO,!1,s,o,!1,s,s)
else{w=A.a([B.d.gK(q).j(0.18),B.d.gai(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gai(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(s,s,s,s,s,new A.a7(B.a3,B.a7,B.w,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hO(w,B.ap),B.h,s,s,new A.o(k,s,j,s,s,s,B.a5),s,s,s,s,s,s,s,s),B.h,s,s,new A.o(s,s,s,s,l,new A.a7(B.ax,B.aC,B.w,q,s,s),B.a5),s,56,s,s,B.DX,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.H(r?B.aG:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eN2,s,s,s),B.h,s,s,new A.o(B.cb,s,w,j,s,s,B.n),s,s,s,s,D.bla,s,s,s),s,s,s,-6,-4,s))}k=r?B.cV:B.c
j=A.m(8)
w=A.H(B.d.gK(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.G,B.x.j(r?0.3:0.06),B.dH,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cV,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bu,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aH(s,new A.a3(84,112,A.u(A.a([new A.am(B.W,s,B.a9,B.h,l,s),B.av,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,D.aRl,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.blk,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.ae)}}
C.b9R.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.a_()
w=A.N()
v=this.b
u=v?B.c:D.b1l
w.r=u.j(v?0.05:0.09).gq(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.L()
t.drawCircle(r,s,1,q)
q.delete()}},
aq(d){return d.b!==this.b}}
C.brQ.prototype={
B(d){var w=this,v=null,u=new C.eVZ(w),t=w.c,s=t?B.cV:B.c,r=A.m(12),q=u.$3(B.hQ,"Zoom in",w.d),p=A.p(v,v,B.h,t?B.bG:B.f2,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.EE,"Zoom out",w.e)
return A.aD(!1,B.Y,!0,r,A.u(A.a([q,p,o,A.p(v,v,B.h,t?B.bG:B.f2,v,v,v,1,v,v,v,v,v,22),u.$3(B.agh,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.R,0,B.p),B.h,s,4,v,B.dq,v,v,v,B.ac)}}
C.bhH.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.H(B.bT,B.r,2),s=w.e,r=x.p
t=A.aH(v,A.p(v,A.u(A.a([A.V(s?L.WQ:W.KB,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eJt,v,v,v)],r),B.m,v,B.b6,B.j,0,B.p),B.h,v,v,new A.o(u,v,t,v,v,v,B.a5),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.ae)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eHv,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.J(s,new C.exE(w),A.U(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a3(84,v,A.u(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.XU.prototype={
S(){return new C.ayN()},
bn(){return this.Q.$0()},
gdS(){return this.w}}
C.ayN.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a0()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.au()
r.d!==$&&A.aO()
r.d=new A.ap(new A.bc(t,B.b0,B.aM),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ap(new A.bc(t,B.b0,B.aM),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ap(new A.bc(t,B.b0,B.aM),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ap(new A.bc(t,B.b0,B.aM),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ap(new A.bc(t,B.b0,B.aM),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ap(new A.bc(t,B.b0,B.aM),s)
t=u?q:v.c
r.y=t==null?D.wJ:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hHn(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
p(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.au()
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
NN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fQT(p.y,p.w)
w=3
return A.b(A.l0(t.a.w,B.Gl),$async$NN)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aWB(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$NN)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hjI(p.y,p.w)
t.a.bn()
case 5:w=7
return A.b(Ah.Fc(78,800),$async$NN)
case 7:q=e
if(q!=null&&t.c!=null)t.n(new C.dfx(t,q))
case 1:return A.h(u,v)}})
return A.i($async$NN,v)},
c_k(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hQ(B.o.u(1000*Date.now()),w,D.wJ,null,null,null,"","","","","",1,!1,0)
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
s=v.aA4(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a8(k,!1).M(s)},
a7_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a7_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dfw(r),s,null,!0,!0,x.y),$async$a7_)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a8(s,!1).M(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a7_,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.L(d).ax.a===B.H,i=new C.t5(j),h=l.a.e,g=A.U(h).k("a4<1>"),f=A.z(new A.a4(h,new C.dfG(l),g),g.k("G.E"))
h=j?B.dR:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bjH,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aG,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hA(A.aI(!1,k,!0,new A.C(B.lY,A.V(B.e4,B.o0,k,k,k,17),k),B.cE,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbBh(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jd:B.ih
t=I.byh(l.as)
if(l.as==null)s=A.V(B.o7,j?B.bo:B.bu,k,k,k,40)
else s=k
s=A.at(A.aH(k,new A.am(B.W,k,B.a9,B.q,A.a([A.hi(u,t,s,k,42),A.an(0,A.hi(B.bT,k,D.btt,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc_h(),k,k,k,k,k,k,!1,B.ae),k,k,k)
t=l.d
t===$&&A.c()
t=C.ayP(t,"Full name",B.m_,1,1,i,B.lF)
u=l.y
u===$&&A.c()
u=A.u(A.a([t,B.T,new C.beo(i,u,new C.dfH(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bo:B.bu,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bdj],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.dfI(),A.U(o).k("J<1,ep<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bo:B.bu,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bdl],q)
B.d.v(q,new A.J(f,new C.dfK(),A.U(f).k("J<1,ep<n?>>")))
o=A.u(A.a([t,B.ar,new C.aaN(i,r,"Who is their parent?",p,new C.dfL(l),k,o),B.ay,n,B.ar,new C.aaN(i,m,"Who is their spouse / partner?",q,new C.dfM(l),k,o)],v),B.af,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.ayP(q,"Birth date",D.afp,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.ayP(m,"Birth place",B.X4,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.ayP(n,"Date of death (if deceased)",D.ahz,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.ayP(p,"Occupation",B.Yc,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.A,k,B.a9,B.q,w,k),B.ay,s,B.bt,new C.aaO(i,"Identity",u,k),B.ab,new C.aaO(i,"Family links",o,k),B.ab,new C.aaO(i,"Life details",A.u(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.ayP(r,"Notes",B.kA,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ab,new C.ayO(i,"Child order",l.c6I(l.at),new C.dfN(l),new C.dfO(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fGO(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dfP(l):k
B.d.v(r,A.a([B.T,new C.ayO(i,"Visible in tree",u,w,new C.dfQ(l),k)],v))}r.push(B.T)
w=j?B.jd:B.ih
u=A.m(14)
t=A.H(j?B.dT:B.c4,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iv(k,B.bT,k,B.ah,k,new C.dfR(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bo:B.bu,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.h,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,L.acA,k,k,k))
r.push(B.bt)
w=j?B.aN:B.aG
j=j?B.dT:B.c4
r.push(A.B(A.a([A.D(A.dV(B.mY,new C.dfJ(d),A.db(k,k,k,k,k,k,k,k,k,w,k,k,B.cc,k,new A.b5(A.m(14),B.V),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.D(A.bK(D.enc,l.gc_j(),A.bk(B.aS,k,k,0,B.c,k,B.cc,k,new A.b5(A.m(14),B.V),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.av)
return A.eo(B.fX,k,B.ah,h,new A.a3(420,k,A.ch(A.u(r,B.af,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.aj),k),D.adr,k,B.acQ,new A.b5(g,B.V),k,k)},
c6I(d){var w=B.o.H(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.H(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aaO.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bu,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jd:B.ih,s=A.m(16)
return A.u(A.a([new A.C(D.adQ,u,w),A.p(w,this.e,B.h,w,w,new A.o(t,w,A.H(v?B.dT:B.c4,B.r,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bep.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dR:B.c,r=A.m(12),q=A.H((t?B.dT:B.c4).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aN:B.aG,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aK(u,B.U,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bm(u,B.er,u,B.ui,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bo:B.bu,u,u,u,u,u,u,u,u,u,u,u,B.cq,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.ag,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a6,u,p,u,u,u,u),B.h,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aaN.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dR:B.c,s=A.m(12),r=A.H((u?B.dT:B.c4).j(0.85),B.r,1),q=A.V(B.qj,u?B.bo:B.bu,v,v,v,v),p=A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dR:B.c
return A.p(v,new A.Cp(A.a2d(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bo:B.bu,v,v,v,v,v,v,v,v,v,v,v,B.cq,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.h,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lo,v,v,v)}}
C.beo.prototype={
B(d){var w=new C.dfS(this)
return A.B(A.a([w.$3(D.Wy,"Male",B.Ll),B.aa,w.$3(D.aeG,"Female",B.L6),B.aa,w.$3(D.wJ,"Other",B.mE)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.ayO.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jd:B.ih,r=A.m(14),q=A.H(t?B.dT:B.c4,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aG,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.D(A.u(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bo:B.bu,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aEU(u,B.EE,w.f,v),B.bq,new C.aEU(u,B.hQ,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.h,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aEU.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.dR:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bT
else t=(s.c.a?B.bo:B.bu).j(0.4)
return A.aD(!1,B.Y,!0,v,A.aI(!1,u,!0,new A.a3(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,w,0,r,r,r,r,r,B.ac)}}
C.aaP.prototype={
bJJ(d){switch(d.a){case 0:return B.bT
case 1:return B.bz
case 2:return B.cT}},
bJK(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aSF(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
z9(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dR:B.c
u=A.m(12)
t=A.H((w?B.dT:B.c4).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.V(f,B.bT,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bo:B.bu,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.u(A.a([q,B.av,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aG,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cK,B.zD,p,p,1/0)},
abf(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bu,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jd:B.ih,s=A.m(16),r=A.H(v?B.dT:B.c4,B.r,1)
return A.u(A.a([new A.C(D.adQ,u,w),A.p(w,A.u(e,B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h55(r,q),o=q.c,n=t.bJJ(o),m=I.byh(q.f),l=t.e.a,k=l?B.dR:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aN:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.k3?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bo:B.bu,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.H(n,B.r,3)
v=A.a([new A.aa(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.hi(u,m,m==null?A.V(B.o7,n,s,s,s,48):s,s,52),B.h,s,s,new A.o(s,s,w,s,v,s,B.a5),s,s,s,s,B.ef,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.H(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.d(t.bJK(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.lX,s,s,s),s,s,s)
u=x.p
i=A.a([t.z9("Full name",i,B.m_)],u)
if(p>0)i.push(t.z9("Child order","#"+p,B.Ld))
r=A.a([h,B.av,r,B.aO,l,B.T,v,B.bt,t.abf("Identity",i),B.ab,t.abf("Life details",A.a([t.z9("Birth date",q.w,D.afp),t.z9("Birth place",q.x,B.X4),t.z9("Date of death",q.y,D.ahz),t.z9("Occupation",q.z,B.Yc)],u)),B.ab,t.abf("Family links",A.a([t.z9("1. Parent",t.aSF(q.d),B.E9),t.z9("2. Spouse",t.aSF(q.e),B.L5)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ab,t.abf("Notes",A.a([t.z9("Notes",q,B.kA)],u))],u))
r.push(B.bt)
r.push(A.bK(B.Ht,new C.dg1(d),A.bk(B.aS,s,s,s,s,s,B.cc,s,new A.b5(A.m(14),B.V),s,s,s)))
return A.ew(s,k,new A.d1(B.ld,A.ch(A.u(r,B.af,s,B.e,B.R,0,B.p),B.q,s,B.z,s,B.zL,s,s,B.aj),s),s,s,s,B.DL,B.cZ,s,new A.b5(j,B.V),s)}}
C.If.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bo:B.bu
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.un,A.hA(A.aD(!1,B.Y,!0,A.m(8),A.aI(!1,A.m(8),!0,new A.a3(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.h,w,0,u,u,u,u,u,B.ac),u,v.c,u,u),u)}}
C.amP.prototype={
eF(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.m(0,"marker","ngmyFamilyTreeSync")
s.m(0,"version",1)
s.m(0,"code",u.a)
s.m(0,"ownerEmail",u.b)
s.m(0,"exportedAt",u.d.a4().ab())
w=u.c
v=A.U(w).k("J<1,a1<n,@>>")
w=A.z(new A.J(w,new C.c3m(),v),v.k("ai.E"))
s.m(0,"trees",w)
w=u.e
if(w.a!==0)s.m(0,"familyBooks",w.iE(w,new C.c3n(),t,x.U))
return s}}
C.amQ.prototype={
S(){return new C.aAn(A.a([],x.bF))},
gd6(){return this.c}}
C.aAn.prototype={
Z(){this.a0()
this.I5()},
I5(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$I5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c3q(t.a.c),$async$I5)
case 3:r=e
w=4
return A.b(C.zC(t.a.c),$async$I5)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rk(q,new C.dLa(t))
else s=!1
if(t.c==null){w=1
break}t.n(new C.dLb(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$I5,v)},
xm(d){var w=null,v=this.c
if(v==null)return
v.G(x.q).f.P(A.b0(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
IO(d,e){return this.cuJ(d,e)},
cuJ(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$IO=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dLf(q,e))
t=3
w=6
return A.b(d.$0(),$async$IO)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.n(new C.dLg(q))
$.eI.lV()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IO,v)},
Vs(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oC(r,s.c,s.e),$async$Vs)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IO(new C.dL7(t),"Preparing download\u2026"),$async$Vs)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vs,v)},
Vw(d){return this.bHP(d)},
bHP(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oC(r,s.c,s.e),$async$Vw)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.IO(new C.dL8(t,d),"Preparing file\u2026"),$async$Vw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vw,v)},
ad3(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ad3=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wl.c2().Ku(B.O5,B.rL,!0),$async$ad3)
case 7:r=e
o=r
q=o==null?null:J.fh(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aE.gah(o)}else o=!1
if(o){o=q.c
o.toString
o=A.je(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a5(m)
$.al.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.Fb()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ad3,v)},
W6(d){return this.bRV(d)},
bRV(d){var w=0,v=A.j(x.H),u=this
var $async$W6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.IO(new C.dL9(u,d),"Restoring family trees\u2026"),$async$W6)
case 2:return A.h(null,v)}})
return A.i($async$W6,v)},
W5(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ad3(),$async$W5)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.W6(s),$async$W5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W5,v)},
a_I(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oC(r,s.c,s.e),$async$a_I)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IO(new C.dLe(t),"Creating QR code\u2026"),$async$a_I)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_I,v)},
a_k(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BH()){t.xm("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).cr(A.eH(new C.dLc(),!0,null,x.N)),$async$a_k)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.W6(r),$async$a_k)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_k,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===B.H,n=o?B.z8:B.iV,m=o?D.abf:B.aN,l=o?B.aI:B.c4,k=o?B.aN:B.aG,j=new C.d0k(n,m,l,k,o?B.bK:B.bu)
l=A.aF(p,p,p,p,A.V(B.eo,k,p,p,p,20),p,p,p,new C.dLi(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eA(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d_T(!0,B.j5,B.b_,B.b_,q.r?p:q.gclZ(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gcii()
t.push(A.D(C.d_T(!s,B.iL,B.b2,B.bE,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d_T(!1,B.hm,B.aS,B.bT,q.r?p:q.gbHI(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d_T(!1,M.xf,B.aX,B.aL,q.r?p:q.gbRS(),j,s,"Upload backup file"),1))
l=A.a([new C.baK(v,l,p),B.ke,new C.aa5(j,"QR restore",p),B.T,t,B.d3,new C.aa5(j,"Backup files",p),B.T,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.a9(q.d)>1&&q.a.f==null){v=A.a([B.ke,new C.aa5(j,"One tree",p),B.T],u)
B.d.v(v,J.b4(q.d,new C.dLj(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cL(l,p,B.VG,p,p,B.aj,!1)],u)
if(q.r){v=A.m(18)
t=A.H(B.aS.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.G,B.x.j(o?0.3:0.1),B.dm,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.bq(!0,A.p(p,A.B(A.a([L.aIa,B.bc,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.zK,p,p,p),!0,!1,B.ah,!0,!1),p,p,20,20,p,p))}return A.cd(w,n,new A.am(B.W,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d0k.prototype={}
C.baK.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.aa(0,B.G,B.aS.j(0.32),B.jN,28)],x.V)
t=A.an(p,A.V(B.t1,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.W,p,B.a9,B.q,A.a([t,new A.C(B.a8,A.B(A.a([A.p(p,D.bC1,B.h,p,p,new A.o(s,p,A.H(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nG,A.D(A.u(A.a([D.eRC,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.h,p,p,new A.o(p,p,p,v,u,D.bIL,B.n),p,p,p,p,p,p,p,p)}}
C.aa5.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.aa,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.baI.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.b_.j(0.4):m.c
k=A.H(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.G,B.b_.j(0.1),B.cA,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.H(t.j(0.35),B.r,1)
return A.aD(!1,B.Y,!0,q,A.aI(!1,o,!0,A.eq(A.d7(new A.C(E.Vj,A.u(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.h,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qg,q,q,q),B.ab,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bA,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cq,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)}}
C.baN.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.H(s.c,B.r,1),q=B.aS.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.Y,!0,v,A.aI(!1,u,!0,A.eq(new A.C(B.eH,A.B(A.a([A.p(v,D.bBf,B.h,v,v,new A.o(q,v,A.H(B.aS.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qg,v,v,v),B.bc,A.D(A.u(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.V(B.hm,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)}}
C.Ye.prototype={
S(){return new C.aAm()},
gd6(){return this.c}}
C.aAm.prototype={
Z(){this.a0()
this.a6x()},
a6x(){var w=0,v=A.j(x.H),u=this,t
var $async$a6x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aZd(u.a.c,B.Bk),$async$a6x)
case 2:t=e
if(u.c!=null)u.n(new C.dL2(u,t))
return A.h(null,v)}})
return A.i($async$a6x,v)},
aer(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aer=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.n(new C.dL3(q))
t=4
p=A.fSv(q.a.d,B.Bk)
if(p==null){n=A.ba("Could not read this QR code.")
throw A.R(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ap1(n.e,m,l,B.Bk,p,n.f),$async$aer)
case 7:if(q.c==null){r=[1]
w=5
break}q.n(new C.dL4(q))
q.c.G(x.q).f.P(D.ev6)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a5(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(B.a.e1(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.dL5(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aer,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.L(d).ax.a===B.H,o=p?B.iX:B.oR,n=p?B.hr:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eA(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.f55,q,q,q,1,q,!0)
w=A.m(24)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.pk(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aS,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.u(A.a([B.P,u,B.bt,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ai,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b6,B.j,0,B.p),B.h,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.al:B.bw,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gci0()
if(u)u=B.H4
else u=A.V(r.e===!0?B.hl:B.afo,q,q,q,q,q)
w=A.a([w,B.ab,v,B.ab,new A.a3(1/0,q,A.ez(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ce,q,q,q),t,A.db(q,q,q,q,q,q,q,q,q,B.aS,q,B.fP,q,q,q,new A.ay(B.aS.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.im,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ai,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.T)
w.push(new A.a3(1/0,q,A.bK(B.yq,new C.dL6(d),A.bk(B.aS,q,q,q,q,B.fP,q,q,q,q,q,q)),q))
return A.cd(m,o,new A.C(B.a8,A.u(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Yf.prototype={
S(){return new C.bfP(A.ye(B.wj,B.n4,B.t5))}}
C.bfP.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.cd(A.eA(w,w,w,!0,!0,B.x,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.eYR,w,w,w,1,w,!0),B.x,A.yd(this.d,B.bO,new C.dLk(this,d)),w,!1,!1,w,w)}}
C.aV9.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.NC,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lj.prototype={}
C.a44.prototype={
S(){return new C.bfy(null,null)}}
C.bfy.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bi(v,B.rC,v,1,v,w)
w.e=A.bi(v,B.oV,v,1,v,w)
w.a.toString
w.d.cF(0)
w.e.cF(0)},
bp(d){var w,v,u=this
u.bA(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)},
p(){var w=this.d
w===$&&A.c()
w.p()
w=this.e
w===$&&A.c()
w.p()
this.bp9()},
B(d){var w,v,u=this,t=B.d.dI(D.a_M,new C.dxx(u),new C.dxy())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cnV(A.c4(new A.h3(A.a([w,v],x.dS)),new C.dxz(u,t),null),!0)}}
C.bfx.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aWB(d,e)
break
case"house":p.lw(d,e,D.cLu)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.ge8()
$.a_()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gq(0)
d.ak(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lB(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zS(d,e,12)
p.wY(d,e,B.kR,5,14)
break
case"grocery":p.c7p(d,e)
break
case"calculator":p.c76(d,e)
break
case"lumber":p.c7x(d,e)
break
case"kitchen":p.c7s(d,e)
break
case"landscape":p.lw(d,e,D.cLV)
s=new A.aR($.a_().r,B.aq,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b7(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.d_(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.d_(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.ao(t,w))
s.E(new A.ao(0,w))
s.E(new A.bE())
w=A.N()
w.r=B.fv.j(0.85).gq(0)
d.aQ(s,w)
p.zS(d,e,8)
p.wY(d,e,B.iG,4,18)
break
case"plumbing":p.c7G(d,e)
break
case"electrical":p.lw(d,e,D.cVf)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.a_()
u=A.N()
u.r=B.c.j(q*0.12).gq(0)
d.bd(new A.ac(0,0,0+e.a,0+e.b),u)
p.lB(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lB(d,e,B.li.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.zS(d,e,10)
break
case"store":p.c7P(d,e)
break
case"paint_remodel":p.c7B(d,e)
break
case"roofing":p.c7I(d,e)
break
case"warehouse":p.c7W(d,e)
break
case"vehicles":p.c7U(d,e)
break
case"farm":p.c7j(d,e)
break
case"restaurant":p.c7H(d,e)
break
case"tools":p.c7S(d,e)
break
case"wallet":p.c7V(d,e)
break
case"concrete":p.c7c(d,e)
break
case"blueprint":p.c74(d,e)
break
default:p.aWB(d,e)}},
lw(d,e,f){var w,v=new A.ac(0,0,0+e.a,0+e.b)
$.a_()
w=A.N()
w.sar(new A.a7(B.ax,B.aC,B.w,f,null,null).az(0,v))
d.bd(v,w)},
lB(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.ge8()/2-h
$.a_()
w=A.N()
w.b=B.ad
w.c=2.4
w.r=f.gq(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bV(q,p)
r=w.L()
v.drawArc.apply(v,[A.cp(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
wY(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.ge8()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.a_()
q=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gq(0)
p=q.L()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zS(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.H(s*0.17,0.9)
p=B.k.H(s*0.23,0.85)
$.a_()
o=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.r=B.c.j(0.2+r*0.6).gq(0)
n=o.L()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aWB(d,e){var w,v=this
v.lw(d,e,D.cU5)
w=v.c
v.lB(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lB(d,e,B.bI.j(0.45),-w*3.141592653589793*1.4,22)
v.bG2(d,e,B.hL,w)
v.wY(d,e,B.c.j(0.7),6,8)},
bG2(d,e,f,g){var w,v,u,t,s,r,q,p
$.a_()
w=A.N()
w.r=f.j(0.35).gq(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.L()
s.drawRect(A.cp(new A.ac(16,q,t,q+3)),p)
p.delete()}},
c7p(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lw(d,e,D.c31)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.H(s,3)
p=Math.sin(r)
o=B.o.aj(s,3)
n=Math.cos(r*0.8)
m=B.o.H(s,2)
$.a_()
l=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
l.r=D.cJU[B.o.H(s,4)].j(0.85).gq(0)
k=l.L()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lB(d,e,B.c.j(0.35),w,16)
j.wY(d,e,B.iG,5,12)},
c76(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lw(d,e,D.c38)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.ge8()
$.a_()
q=A.N()
q.r=B.c.j(0.1+u*0.12).gq(0)
d.ak(new A.v(t/2,s/2),r*(0.18+u*0.08),q)
p=A.iS(g,g,g,g,g,B.a6,B.cn,g,B.eE,B.cm)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cNn[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.H(o,2)
p.saS(0,new A.es(r,g,g,B.cU,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fq()
p.a6(d,new A.v(t*(0.08+B.o.H(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aj(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c3a[o]
l=B.kQ.j(0.28+0.3*Math.sin(n))
k=B.o.H(o,2)
p.saS(0,new A.es(m,g,g,B.cU,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fq()
p.a6(d,new A.v(t*(0.55+B.o.H(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aj(o,3)*0.38)+Math.sin(n)*6))}h.lB(d,e,B.c.j(0.35),w*1.5,14)
h.lB(d,e,B.ev.j(0.55),-v*3.141592653589793*2,8)
h.lB(d,e,B.z9.j(0.4),r*2.8,22)
h.wY(d,e,B.oL,8,10)
h.zS(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.H(w+o*0.22,0.9)
$.a_()
r=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gq(0)
r.c=1.2
i=r.L()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c7x(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,Y.aqM)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bN(new A.ac(20,q,u,q+10),B.iO)
$.a_()
o=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.r=A.aq(B.hg,B.nR,(r+1)/2).gq(0)
n=o.L()
t.drawRRect(A.fs(p),n)
n.delete()}m.lB(d,e,B.hg.j(0.35),w,15)
m.zS(d,e,8)},
c7s(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lw(d,e,D.cKn)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.H(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.H(r*0.13,0.7)
$.a_()
l=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
l.r=B.c.j(0.25+p*0.55).gq(0)
k=l.L()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lB(d,e,B.bI.j(0.4),-w*3.141592653589793*2.2,11)
j.wY(d,e,B.pW,4,14)},
c7G(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lw(d,e,D.cAj)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.H(s,0.12)
$.a_()
n=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
n.b=B.ad
n.c=2
n.r=B.c.j(0.45-q*0.12).gq(0)
m=n.L()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.wY(d,e,B.nY,6,12)
l.lB(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c7P(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lw(d,e,D.cgs)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bN(new A.ac(q,14,q+u,22),B.j7)
$.a_()
p=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=A.aq(B.fe,B.bI,(r+1)/2).gq(0)
o=p.L()
t.drawRRect(A.fs(q),o)
o.delete()}n.lB(d,e,B.c.j(0.3),w,16)
n.zS(d,e,8)
n.wY(d,e,B.u0,5,13)},
c7B(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cFH)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.H(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bN(new A.ac(q,p,q+8,p+(18+r*22)),B.hD)
$.a_()
q=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=[B.ib,B.dE,B.bI,B.eO][s].j(0.85).gq(0)
o=q.L()
t.drawRRect(A.fs(p),o)
o.delete()}this.lB(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c7I(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cDp)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.H(v+s*0.12,0.75))
q=B.o.H(s,4)*0.22
$.a_()
p=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=B.c.j(0.25).gq(0)
p.c=1.5
o=p.L()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.wY(d,e,B.cp,7,11)},
c7W(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cj4)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bN(new A.ac(p,o,p+(t-r*8),o+16),B.iO)
$.a_()
p=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=A.aq(B.cp,B.aN,(Math.sin(q)+1)/2).gq(0)
n=p.L()
s.drawRRect(A.fs(o),n)
n.delete()}this.lB(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c7U(d,e){var w,v,u,t,s,r,q,p,o
this.lw(d,e,D.cYK)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.H(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.H(s,2)*0.08)
q=A.bN(new A.ac(r,q,r+28,q+8),B.iO)
$.a_()
p=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=B.c.j(0.35+s*0.08).gq(0)
o=p.L()
t.drawRRect(A.fs(q),o)
o.delete()}this.zS(d,e,6)},
c7j(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cJ5)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.a_()
s=A.N()
s.r=B.li.j(0.75).gq(0)
d.ak(new A.v(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.r=B.hh.j(0.85).gq(0)
o.c=3
n=o.L()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lB(d,e,B.li.j(0.35),w,14)},
c7H(d,e){var w,v,u,t,s,r,q,p,o=this
o.lw(d,e,D.cLj)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.d9(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.a_()
q=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
q.r=B.c.j(0.22).gq(0)
p=q.L()
t.drawOval(A.cp(r),p)
p.delete()}o.wY(d,e,B.pW,5,16)
o.zS(d,e,7)},
c7S(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,D.cWC)
w=m.c
v=w*3.141592653589793
m.lB(d,e,B.nR.j(0.55),v*3,10)
m.lB(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.a_()
o=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.r=B.nR.j(0.8).gq(0)
n=o.L()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c7V(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lw(d,e,D.cZe)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bN(new A.ac(p,o,p+36,o+22),B.j7)
$.a_()
p=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
p.r=A.aq(B.iG,B.li,q).gq(0)
n=p.L()
s.drawRRect(A.fs(o),n)
n.delete()}m.zS(d,e,9)
m.lB(d,e,B.c.j(0.4),w*2.2,12)},
c7c(d,e){var w,v,u,t,s,r,q,p,o,n
this.lw(d,e,D.cPP)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bV(new A.v(v,u),34)
$.a_()
s=A.N()
s.b=B.ad
s.c=5
s.r=B.c.j(0.45).gq(0)
d.fQ(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.av(B.Z,B.X,B.a0,B.a1,B.a_)
o.r=B.c4.j(0.85).gq(0)
n=o.L()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c74(d,e){var w,v,u,t,s,r,q,p
this.lw(d,e,D.cMa)
$.a_()
w=A.N()
w.r=B.c.j(0.12).gq(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.L()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.L()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.H(t*0.85,1)
$.a_()
u=A.N()
u.r=B.dE.j(0.45).gq(0)
d.bd(new A.ac(0,p,0+v,p+6),u)
this.lB(d,e,B.kR.j(0.45),-t*3.141592653589793*2,11)},
aq(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.apH.prototype={
Y3(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aMC(),$async$Y3)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a6h(s),$async$Y3)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Y3,v)},
ad4(d){return this.caa(d)},
caa(d){var w=0,v=A.j(x.H),u=this,t
var $async$ad4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hPu(d),$async$ad4)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ad4,v)},
B(d){var w,v,u,t=null,s=A.L(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.jd:B.ih
w=x.p
v=A.a([C.aN_(!0,B.pM,1/0,B.p2,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.x.j(0.35)],x.O)
v.push(A.bT(new A.bG(B.b1,t,t,new A.C(B.ue,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.arC,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a7(B.b1,B.b5,B.w,u,t,t),B.n),B.ba))}v.push(A.an(8,A.B(A.a([A.D(A.dn(D.bvd,D.eOf,new C.caU(this,d),A.bk(B.aS,t,t,t,B.c,t,B.jD,t,t,t,t,B.c8)),1),B.aa,A.D(A.ez(D.bDb,D.f0J,this.gc1o(),A.db(t,t,B.x.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jD,t,t,D.aPW,t,t,t,B.c8)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fJ(1.7777777777777777,A.aD(!1,B.Y,!0,B.pM,new A.am(B.W,t,B.aY,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.ac),t)}}
C.aIb.prototype={
aN(){this.aV()
this.aU()
this.dD()},
p(){var w=this,v=w.aZ$
if(v!=null)v.a1(0,w.gdB())
w.aZ$=null
w.a2()}}
C.aPQ.prototype={}
C.aPP.prototype={}
C.aNV.prototype={}
C.WT.prototype={
S(){return new C.avI()}}
C.avI.prototype={
Z(){var w,v,u=this
u.a0()
u.a.toString
w=new A.bc("",B.b0,B.aM)
v=$.au()
u.d!==$&&A.aO()
u.d=new A.ap(w,v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.au()
w.O$=0
this.a2()},
IF(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.G(x.q).f.P(D.evB)
return}t=u.c
t.toString
v=u.e
A.a8(t,!1).M(new C.aPQ(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.L(d).ax.a===B.H,l=m?B.dR:B.c,k=A.m(20),j=A.p(n,D.bCT,B.h,n,n,new A.o(B.aS.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aN:B.aG,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.u(A.a([i,B.bA,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bo:B.bu,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bc,i,A.aF(n,n,n,n,A.V(B.ct,m?B.bo:B.bu,n,n,n,n),n,n,n,new C.cTw(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bo:B.bu,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bo:B.bu,n,n,n,n,n,n,n,n,11,n,n,B.cq,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fSL(new C.cTx(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aN:B.aG,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jd:B.ih
r=A.m(12)
q=A.m(12)
p=m?B.dT:B.c4
t=A.aK(n,B.U,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bm(n,new A.b2(4,r,B.dd),n,n,n,n,n,n,!0,new A.b2(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.ag,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cTy(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a6,n,A_.H9,n,n,n,n)
u=m?B.aN:B.aG
m=m?B.dT:B.c4
return A.ew(n,l,new A.d1(B.ld,A.ch(A.u(A.a([j,B.aO,i,B.av,w,B.P,v,B.aO,t,B.bt,A.B(A.a([A.D(A.dV(B.df,new C.cTz(d),A.db(n,n,n,n,n,n,n,n,n,u,n,n,B.cc,n,new A.b5(A.m(12),B.V),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.D(A.bK(D.f0Y,o.ga0_(),A.bk(B.aS,n,n,n,B.c,n,B.cc,n,new A.b5(A.m(12),B.V),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.R,0,B.p),B.q,n,B.z,n,B.zN,n,n,B.aj),n),n,n,n,V.zO,B.cZ,n,new A.b5(k,B.V),n)}}
C.WS.prototype={
S(){return new C.avH()}}
C.avH.prototype={
Z(){this.a0()
var w=$.au()
this.d!==$&&A.aO()
this.d=new A.ap(B.as,w)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.au()
w.O$=0
this.a2()},
IF(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.G(x.q).f.P(D.eti)
return}v=this.c
v.toString
A.a8(v,!1).M(new C.aPP(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.L(d).ax.a===B.H,o=p?B.dR:B.c,n=A.m(20),m=A.p(q,D.bzA,B.h,q,q,new A.o(B.bT.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.u(A.a([l,B.bA,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bo:B.bu,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bc,l,A.aF(q,q,q,q,A.V(B.ct,p?B.bo:B.bu,q,q,q,q),q,q,q,new C.cTs(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aS.j(p?0.12:0.08)
w=A.m(12)
v=A.H(B.aS.j(0.25),B.r,1)
u=A.V(B.afa,B.aS.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.aw,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bB,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aN:B.aG,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jd:B.ih
t=A.m(12)
s=A.m(12)
r=p?B.dT:B.c4
v=A.aK(q,B.U,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bm(q,new A.b2(4,t,B.dd),q,q,q,q,q,q,!0,new A.b2(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.ag,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cTt(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a6,q,B.kf,q,q,q,q)
w=p?B.aN:B.aG
p=p?B.dT:B.c4
return A.ew(q,o,new A.d1(B.ld,A.ch(A.u(A.a([m,B.aO,l,B.ay,v,B.bt,A.B(A.a([A.D(A.dV(B.df,new C.cTu(d),A.db(q,q,q,q,q,q,q,q,q,w,q,q,B.cc,q,new A.b5(A.m(12),B.V),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.D(A.bK(D.f7c,this.ga0_(),A.bk(B.bT,q,q,q,B.c,q,B.cc,q,new A.b5(A.m(12),B.V),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.zN,q,q,B.aj),q),q,q,q,V.zO,B.cZ,q,new A.b5(n,B.V),q)}}
C.Wq.prototype={
S(){return new C.aus()}}
C.aus.prototype={
Z(){var w,v=this
v.a0()
w=$.au()
v.d!==$&&A.aO()
v.d=new A.ap(B.as,w)
v.e!==$&&A.aO()
v.e=new A.ap(new A.bc("1",B.b0,B.aM),w)
v.f!==$&&A.aO()
v.f=new A.ap(B.as,w)
v.r!==$&&A.aO()
v.r=new A.ap(B.as,w)},
p(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.au()
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
gI0(){var w,v=this.e
v===$&&A.c()
w=A.d8(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gagd(){var w=this.f
w===$&&A.c()
w=A.d8(B.a.i(w.a.a))
return w==null?0:w},
gaZm(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aK8(d){var w,v=B.k.D(this.gI0()+d,0.25,999999),u=B.k.kk(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.aa(v,2)
w=A.ae("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saS(0,u)
this.n(new C.cr7())},
au4(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aS,w,w,w,20):w,u=d.a,t=u?B.jd:B.ih,s=A.m(14),r=A.m(14)
u=u?B.dT:B.c4
return A.bm(w,new A.b2(4,s,B.dd),w,B.bB,w,w,w,w,!0,new A.b2(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b2(4,A.m(14),B.a6C),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c1p(d,e,f){return this.au4(d,e,f,null)},
IF(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gagd()<=0){s.c.G(x.q).f.P(D.exs)
return}r=s.c
r.toString
v=s.gI0()
u=s.gagd()
t=s.gaZm()
A.a8(r,!1).M(new C.aNV(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.L(d).ax.a===B.H,m=new C.t5(n),l=n?B.dR:B.c,k=A.m(24),j=x.O,i=A.a([B.aS.j(0.22),B.bT.j(0.14)],j),h=A.m(14)
i=A.p(o,D.btb,B.h,o,o,new A.o(o,o,A.H(B.aS.j(0.35),B.r,1),h,o,new A.a7(B.a3,B.a7,B.w,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.u(A.a([h,B.bA,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bo:B.bu,o,o,o,o,o,o,o,o,12,o,o,B.cq,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bc,h,A.aF(o,o,o,o,A.V(B.ct,n?B.bo:B.bu,o,o,o,o),o,o,o,new C.crd(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aK(o,B.U,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.au4(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Lj),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,A_.H9,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bo:B.bu,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jd:B.ih
t=A.m(14)
s=A.H(n?B.dT:B.c4,B.r,1)
r=A.aF(o,o,o,o,A.V(B.EE,n?B.aN:B.aG,o,o,o,20),o,o,o,new C.cre(p),o,o,o,o,o,B.c8)
q=p.e
q===$&&A.c()
q=A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bEF,B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.crf(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a3(52,o,q,o),A.aF(o,o,o,o,A.V(B.hQ,n?B.aN:B.aG,o,o,o,20),o,o,o,new C.crg(p),o,o,o,o,o,B.c8)],w),B.m,o,B.e,B.R,0,o,o),B.h,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.aw,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.au4(m,"Amount","0.00",B.hR),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.crh(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a6,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.z(new A.J(D.cG8,new C.cri(p,m),t),t.k("ai.E"))
i=A.a([i,B.bt,v,B.ay,h,B.P,s,B.ab,A.c8(B.bH,u,B.bx,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.T,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c1p(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.crj(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,B.kf,o,o,o,o)],w))}i.push(B.aO)
h=B.aS.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bo:B.bu,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gI0()===B.k.kk(p.gI0())?B.k.N(p.gI0()):p.gI0()
s=p.gaZm()
r=A.zE(p.gagd())
i.push(A.p(o,A.B(A.a([A.D(A.u(A.a([u,B.av,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bo:B.bu,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bz2(p.gI0()*p.gagd(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(o,o,v,h,o,new A.a7(B.a3,B.a7,B.w,j,o,o),B.n),o,o,o,o,B.iJ,o,o,o))
i.push(B.bt)
j=A.m(14)
h=n?B.dT:B.c4
h=A.db(o,o,o,o,o,o,o,o,o,o,o,o,B.cc,o,new A.b5(j,B.V),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.D(A.dV(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aN:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.crk(d),h),1),B.aw,A.D(A.dn(D.aiC,D.f3v,p.ga0_(),A.bk(B.aS,o,o,0,B.c,o,B.cc,o,new A.b5(A.m(14),B.V),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.ew(o,l,new A.d1(U.a6Z,A.ch(A.u(i,B.af,o,B.e,B.R,0,B.p),B.q,o,B.z,o,A7.qf,o,o,B.aj),o),o,o,o,B.K2,B.cZ,o,new A.b5(k,B.V),o)}}
C.ZY.prototype={
S(){return new C.brI()}}
C.brI.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a.e
v=$.au()
u.d!==$&&A.aO()
u.d=new A.ap(new A.bc(w,B.b0,B.aM),v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.au()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.L(d).ax.a===B.H,q=r?B.dR:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aN:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aN:B.aG,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jd:B.ih
v=A.aK(s,B.U,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bm(s,new A.b2(4,A.m(12),B.dd),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eVr(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a6,s,B.am,s,s,s,s)
u=A.D(A.dV(B.df,new C.eVs(d),s),1)
r=A.bk(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.ew(s,q,new A.C(B.zN,A.u(A.a([o,B.ay,v,B.aO,A.B(A.a([u,B.aw,A.D(A.bK(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eVt(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.R,0,B.p),s),s,s,s,s,B.cZ,s,new A.b5(p,B.V),s)}}
C.a99.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.Ea.prototype={
S(){return new C.brG(null,null)}}
C.brG.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,D.bdT,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.brs()},
gbsO(){switch(this.a.r.a){case 1:return A.a([B.aS,B.bT,B.aW],x.O)
case 2:return A.a([B.bs,B.aS,B.aW],x.O)
case 3:return A.a([B.b_,B.cb,B.jy],x.O)
case 4:return A.a([B.ht,B.bT,B.f1],x.O)
case 0:return A.a([B.aS,B.bT,B.aW],x.O)}},
B(d){var w=A.L(d),v=this.d
v===$&&A.c()
return new A.en(A.c4(v,new C.eVp(this,new C.t5(w.ax.a===B.H)),null),null)}}
C.aul.prototype={
S(){return new C.brH(null,null)}}
C.brH.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.mx,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.brt()},
B(d){var w=this.d
w===$&&A.c()
return A.c4(w,new C.eVq(this),null)}}
C.brF.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bN(new A.ac(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.b3(w,w))
u=new A.aR($.a_().r,B.aq,null,null,A.a([],x.v))
u.E(new A.iV(v))
w=A.N()
w.b=B.ad
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gq(0)
d.b0(v,w)
w=A.N()
w.b=B.ad
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gq(0)
d.aQ(u,w)
w=A.xW(u)
t=A.a([],x.f5)
w=new A.wj(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b9(A.jJ('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.FX(w,r)
w.jN()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aNr(d,q,r,o,0,0.2,4.2,0.92)
p.aNr(d,q,r,s,0.52,0.11,3.2,0.58)}},
aNr(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.H(g+h,1)*f,s=A.hcZ(e.a.a,e,t,t+f*i,!0),r=A.bxs(s.gbM().a.getBounds())
$.a_()
w=A.N()
w.b=B.ad
w.c=j
w.d=B.bV
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a7(B.a3,B.a7,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Fq,null).az(0,r))
d.aQ(s,w)},
aq(d){return d.b!==this.b||d.d!==this.d}}
C.aKi.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
C.aKj.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aN(){this.aV()
this.aU()
this.bu()}}
C.t5.prototype={}
C.apG.prototype={
S(){return new C.aBP()},
gdS(){return this.c}}
C.aBP.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.adW()},
p(){var w=this.a.c,v=this.d
v===$&&A.c()
C.JD(w,v)
this.a2()},
adW(){var w=0,v=A.j(x.H),u=this,t,s
var $async$adW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bxz(t.c,t.d.a),$async$adW)
case 2:s=e
if(s!=null&&u.c!=null)u.n(new C.euO(u,s))
return A.h(null,v)}})
return A.i($async$adW,v)},
Oc(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Oc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.n(new C.euF(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.JD(t,s),$async$Oc)
case 2:if(u.c!=null)u.n(new C.euG(u))
return A.h(null,v)}})
return A.i($async$Oc,v)},
OI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.L(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.euM(t,new C.t5(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$OI)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a6h(q),$async$OI)
case 6:case 5:t.n(new C.euN(t,r))
w=7
return A.b(t.Oc(),$async$OI)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OI,v)},
TL(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hPf(r),$async$TL)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.euA(t,new C.qo(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Oc(),$async$TL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TL,v)},
c6l(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h52(t,new C.euE(u),w,v)},
a8g(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.h,w,w,new A.o(w,w,new A.c2(new A.ay(v,2.5,B.r,-1),B.V,B.V,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aPI,w,w,B.n),w,22,w,w,w,w,w,22)},
a7m(d){return this.bEn(d)},
bEn(d){var w=0,v=A.j(x.H),u=this
var $async$a7m=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.n(new C.euD(u,d))
w=2
return A.b(u.Oc(),$async$a7m)
case 2:return A.h(null,v)}})
return A.i($async$a7m,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.L(a2).ax.a===B.H,e=f?B.bW:B.iV,d=A.m(8),a0=A.V(O.WN,f?B.bo:B.bu,g,g,g,16),a1=x.p
a0=A.aI(!1,d,!0,new A.C(B.DQ,A.B(A.a([a0,B.bq,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bo:B.bu,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.R,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.euP(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.W,g,B.aY,B.q,A.a([A.bu(A.m(22),C.aN_(!0,A.m(22),1/0,B.p2,g,d,1/0),B.ap),A.an(10,A.dn(D.bxG,D.f5y,h.gaXk(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.h4,g,new A.b5(A.m(12),B.V),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.aa(0,B.G,B.aS.j(f?0.5:0.38),B.eK,22),new A.aa(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.H(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bu(s,new A.am(B.W,g,B.aY,B.q,A.a([C.aN_(!0,A.m(16),1/0,B.KM,g,r.c,1/0),A.bT(g,new A.o(g,g,g,g,g,new A.a7(B.b1,B.b5,B.w,A.a([B.c.j(0.06),B.K,B.x.j(0.22)],x.O),g,g),B.n),B.ba),A.an(g,h.a8g(!0),g,g,8,g,8,g),A.an(g,A.coF(h.a8g(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.coF(h.a8g(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.coF(h.a8g(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dn(D.btL,D.f_M,h.gaXk(),A.bk(B.x.j(0.45),g,g,g,B.c,g,B.h4,g,new A.b5(A.m(12),B.V),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.h,g,g,new A.o(g,g,g,d,v,D.bFq,B.n),g,g,g,g,B.lY,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aG,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.aZz,B.na,B.fT],u):A.a([B.aW,B.aS,B.bT],u)
t=x.V
s=A.a([new A.aa(0,B.G,B.aS.j(f?0.45:0.35),B.eK,24)],t)
r=A.m(22)
p=A.an(g,A.V(B.jH,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.H(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.h,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.fV,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.bz2(h.d.gw3(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cq,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.u(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.H(B.hv.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.G,B.b_.j(0.28),B.cA,14)],t)
j=B.b_.j(0.22)
i=A.m(10)
u=A.p(g,A.bu(r,new A.am(B.W,g,B.a9,B.q,A.a([p,new A.C(D.biv,A.B(A.a([o,B.aw,A.aD(!1,B.Y,!0,g,A.aI(!1,n,!0,A.eq(new A.C(Ac.Vi,A.u(A.a([A.p(g,D.aia,B.h,g,g,new A.o(j,g,A.H(B.b_.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ch,g,g,g),B.h0,D.eQN],a1),B.m,g,B.e,B.R,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc6k(),g,g,g,g,g,g,g),B.h,B.K,0,g,g,g,g,g,B.ac)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,g,v,s,new A.a7(B.ax,B.aC,B.w,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fJ(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bt,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aG,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b7,A.dn(Ae.Yy,D.eOP,h.gbtg(),A.bk(B.aS,g,g,g,B.c,g,B.iI,g,new A.b5(A.m(12),B.V),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ab],a1)
w=h.d.d
if(w.length===0){w=f?B.dR:B.c
v=A.m(14)
u=A.H(f?B.dT:B.c4,B.r,1)
t=A.V(B.X7,f?B.bo:B.bu,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aN:B.aG,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.u(A.a([t,B.T,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bo:B.bu,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.um,g,g,1/0))}else B.d.v(d,new A.J(w,new C.euQ(h,new C.t5(f)),A.U(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.zz,A.at(A.mk(g,f?B.bo:B.bu,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cd(g,e,A.bq(!0,A.u(A.a([new A.C(B.zF,a0,g),A.D(A.ch(A.u(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.wB,g,g,B.aj),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),g,!1,!1,g,g)},
bwJ(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dR:B.c,p=A.m(16),o=A.a([new A.aa(0,B.G,B.x.j(r?0.35:0.08),B.cA,12)],x.V),n=A.m(16),m=A.p(u,u,B.h,u,u,D.aSo,u,u,u,u,u,u,u,5),l=B.aS.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.hT:B.fW,B.aW,u,u,u,20),B.h,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aN:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcK9()
v=A.zE(d.d)
B.d.v(t,A.a([B.av,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bo:B.bu,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.u(t,B.F,u,B.b6,B.R,0,B.p)}t=A.D(t,1)
k=A.a([B.aS.j(0.14),B.bT.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bz2(d.c*d.d,B.aW,!1,B.u),B.h,u,u,new A.o(u,u,u,w,u,new A.a7(B.a3,B.a7,B.w,k,u,u),B.n),u,u,u,u,B.h4,u,u,u)
w=x.p
return A.p(u,A.bu(n,new A.KT(A.B(A.a([m,A.D(new A.C(B.act,A.B(A.a([l,B.bc,t,B.aa,k,A.aF(u,u,u,u,A.V(B.ct,(r?B.bo:B.bu).j(0.75),u,u,u,20),u,u,u,new C.euB(this,d),u,u,u,u,u,B.c8)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.af,u,B.e,B.j,0,u,u),u),B.ap),B.h,u,D.aRi,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d8,u,u,u,u)}}
C.ab9.prototype={
Da(d){return this.bFF(d)},
bFF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Da=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oC(d,o,!1),$async$Da)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).M(null)
w=4
return A.b(A.bM(A6.zx,null,x.H),$async$Da)
case 4:s=t.d
w=5
return A.b(C.fp2(!0,o,s),$async$Da)
case 5:r=f
q=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.F0(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$Da)
case 6:p=f
w=7
return A.b(A.oB(o,!1),$async$Da)
case 7:if(d.e==null){w=1
break}d.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Da,v)},
Y4(d){return this.cm_(d)},
cm_(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oC(d,s,!1),$async$Y4)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).M(null)
A.hm(d,new C.apA(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oB(s,!1),$async$Y4)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y4,v)},
Od(d){return this.cid(d)},
cid(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Od=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).M(null)
w=3
return A.b(A.hm(d,D.aAJ,!0,"NgmyWorksheetProjectScan",x.N),$async$Od)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bz3(s),$async$Od)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.G(x.q).f.P(D.ewB)
w=1
break}q=C.fJ0(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$Od)
case 5:if(d.e==null){w=1
break}d.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Od,v)},
Y5(d){return this.ctI(d)},
ctI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Y5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).M(null)
w=3
return A.b(C.byB(),$async$Y5)
case 3:s=f
if(s==null){w=1
break}r=C.fJ0(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$Y5)
case 4:if(d.e==null){w=1
break}d.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Y5,v)},
B(d){var w=this,v=null,u=A.L(d).ax.a===B.H,t=new C.t5(u),s=w.d.d.length,r=u?B.dR:B.c,q=A.m(28),p=A.a([new A.aa(0,B.G,B.x.j(u?0.35:0.08),B.jN,36)],x.V),o=x.p
return A.bq(!0,new A.C(B.uj,A.p(v,A.u(A.a([w.ckD(d,t,s),new A.C(D.bhU,A.u(A.a([w.b_f(t,"QR restore"),B.T,A.B(A.a([w.aVm(t,!0,B.j5,B.b_,B.b_,new C.euS(w,d),"Show to scan","QR code"),B.aw,w.au5(t,B.iL,B.b2,B.bE,new C.euT(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d3,w.b_f(t,"Backup files"),B.T,A.B(A.a([w.au5(t,B.hm,B.aS,B.bT,new C.euU(w,d),"Full copy","Backup file"),B.aw,w.au5(t,M.xf,B.aX,B.aL,new C.euV(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.R,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ah,!0,!0)},
ckD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eQ,B.cY,B.fm],k):A.a([B.aW,B.aS,B.bT],k)
w=A.an(l,A.V(B.t1,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.h,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.ku,l,l,l,36),l,l,l)
u=A.m(14)
t=A.H(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.G,B.x.j(0.2),B.cA,12)],x.V)
r=this.d
s=A.p(l,C.aN_(!0,A.m(13),64,D.bp4,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aKD,l,l,l)
r=C.bz2(r.gw3(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.H(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.W,l,B.a9,B.q,A.a([w,new A.C(D.bih,A.u(A.a([v,A.B(A.a([s,B.ep,A.D(A.u(A.a([u,B.av,t,B.P,A.B(A.a([r,B.aa,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fB,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.V(B.ct,B.c.j(0.85),l,l,l,l),l,l,l,new C.euR(d),l,l,l,A.nN(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aI_,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.h,l,l,new A.o(l,l,l,l,l,new A.a7(B.ax,B.aC,B.w,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b_f(d,e){var w=null,v=A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.aa,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bo:B.bu,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aVm(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.abf:B.aN
if(e)w=B.b_.j(o?0.45:0.35)
else{w=o?B.dT:B.c4
w=w.j(o?0.8:1)}w=A.H(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.G,B.b_.j(0.12),B.cA,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.H(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.h,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qg,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aN:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aD(!1,B.Y,!0,r,A.aI(!1,q,!0,A.eq(new A.C(E.Vj,A.u(A.a([t,B.ab,u,B.bA,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bo:B.bu,r,r,r,r,r,r,r,r,11,r,r,B.cq,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
au5(d,e,f,g,h,i,j){return this.aVm(d,!1,e,f,g,h,i,j)}}
C.apA.prototype={
S(){return new C.bha()}}
C.bha.prototype={
Z(){this.a0()
this.abQ()},
abQ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$abQ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bz4(p.c,p.d),$async$abQ)
case 7:q=e
if(r.c==null){w=1
break}r.n(new C.euv(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new C.euw(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abQ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.L(d).ax.a===B.H,f=g?B.z8:B.iV,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.V(B.eo,g?B.al:B.ai,h,h,h,18),h,h,h,new C.eux(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.yf],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eQ,B.cY,B.fm],s):A.a([B.aW,B.aS,B.bT],s)
r=x.V
q=A.a([new A.aa(0,B.G,B.aS.j(g?0.4:0.3),B.eK,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dQ,B.L,h,h)
p=C.bz2(p.gw3(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.u(A.a([o,B.ar,A.B(A.a([p,B.aa,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.h,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fB,h,h,h)],u),B.m,h,B.b6,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(h,h,h,t,q,new A.a7(B.ax,B.aC,B.w,s,h,h),B.n),h,h,h,h,E.VF,h,h,1/0)
t=g?D.b6J:B.c
q=A.m(24)
p=A.H(w?B.b_.j(0.4):B.aS.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.G,B.x.j(g?0.25:0.06),B.dm,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a3W,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dOj)
else{m=A.m(20)
l=A.H(B.aJ,B.r,1)
o.push(A.p(h,A.pk(h,h,!1,n,h,!0,!0,h,!1,B.c),B.h,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c2,h,h,h))}}o.push(B.aO)
n=w?B.b_:B.aS
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.H((w?B.b_:B.aS).j(0.35),B.r,1)
k=w?B.L2:B.Lu
k=A.V(k,w?B.b_:B.aS,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.aw,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.al:B.ai,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iI,h,h,h))
return A.cd(h,f,A.bq(!0,A.u(A.a([new A.C(A3.Kf,e,h),A.D(A.ch(A.u(A.a([s,B.aO,A.p(h,A.u(o,B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rJ,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.adB,h,h,B.aj),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),h,!1,!1,h,h)}}
C.apF.prototype={
S(){return new C.aBO(A.ye(B.Jz,B.n4,B.t5))}}
C.aBO.prototype={
p(){this.d.p()
this.a2()},
aIa(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iE(w,d)},
c2f(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hNk(t)
if(s!=null){this.aIa(s)
return}r=C.fXf(t)
if(r!=null)q=A.dm(r,p,0)
else q=!1
if(q){this.aIa(B.a.i(B.a.aW(r,B.a.cP(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eA(A.a([A.aF(t,t,t,t,A.V(u.f?B.rU:A0.L8,t,t,t,t,t),t,t,t,new C.euz(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.z8,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.f_G,t,t,t,1,t,!0),q=A.yd(u.d,B.bO,u.gc2e()),p=A.m(28)
p=A.at(A.p(t,t,B.h,t,t,new A.o(t,t,A.H(B.aS,B.r,3),p,A.a([new A.aa(2,B.G,B.aS.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.x.j(0.72)
v=A.m(16)
return A.cd(r,B.x,new A.am(B.W,t,B.aY,B.q,A.a([q,p,A.an(32,A.p(t,D.eZy,B.h,t,t,new A.o(w,t,A.H(B.aS.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iJ,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aGy.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.Ml.prototype={
S(){return new C.aBQ(D.a5U,A.a([],x.D))},
bn(){return this.r.$0()},
gdS(){return this.c}}
C.aBQ.prototype={
gcrK(){return J.bAa(this.e,0,new C.evh())},
Z(){this.a0()
$.aT.c_$.push(this)
this.uP()},
p(){$.aT.hE(this)
this.a2()},
iP(d){if(d===B.ft)this.uP()},
uP(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BG(q.a.c).cJ(0,B.kt),$async$uP)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.evd(q,p))
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
if(q.c!=null&&q.f)q.n(new C.eve(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uP,v)},
Gy(d){return this.bCy(d)},
bCx(){return this.Gy(null)},
bCy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hPh(l,d),$async$Gy)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l3(l,r,q,D.cQ1,new A.Q(Date.now(),0,!1))
w=4
return A.b(C.JD(t.a.c,p),$async$Gy)
case 4:o=f
w=5
return A.b(t.uP(),$async$Gy)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.G(x.q).f.P(D.etM)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.G(q).f.P(D.evv)
else n.G(q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.De(m)
case 1:return A.h(u,v)}})
return A.i($async$Gy,v)},
De(d){return this.c66(d)},
c66(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$De=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hm(s,new C.apG(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$De)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.JD(u.a.c,t),$async$De)
case 5:case 4:w=6
return A.b(u.uP(),$async$De)
case 6:return A.h(null,v)}})
return A.i($async$De,v)},
uD(d){return this.bRX(d)},
bRX(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.byB(),$async$uD)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hm(r,D.aAJ,!0,"NgmyWorksheetProjectScan",x.N),$async$uD)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bz3(q),$async$uD)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.G(x.q).f
r.P(A.b0(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fJ0(s)
w=15
return A.b(C.JD(t.a.c,p),$async$uD)
case 15:o=f
w=16
return A.b(t.uP(),$async$uD)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.G(x.q).f.P(D.evA)
w=1
break}r.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.De(p)
case 1:return A.h(u,v)}})
return A.i($async$uD,v)},
M8(d){return this.bBe(d)},
bBe(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$M8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.euZ(d),s,null,!0,!0,x.y),$async$M8)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oe(t.a.c,A.a([],x.D)),$async$M8)
case 6:w=7
return A.b(t.uP(),$async$M8)
case 7:s=t.c
if(s==null){w=1
break}s.G(x.q).f.P(D.etR)
case 4:case 1:return A.h(u,v)}})
return A.i($async$M8,v)},
c6j(d){var w=this.c
w.toString
A.c1(B.K,null,new C.ev7(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b_R(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jd
else w=B.c
v=A.m(16)
u=A.H(p?B.dT:B.c4,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.h,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aN:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.Y,!0,r,A.aI(!1,q,!0,A.p(r,A.u(A.a([s,B.ab,t,B.bA,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bo:B.bu,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.h,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.ui,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
Yy(d,e){return this.c67(d,e)},
c67(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c1(B.K,null,new C.ev2(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$Yy)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h52(r,new C.ev3(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Ma(d,e),$async$Yy)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$Yy,v)},
aXW(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.h,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.aF
else t=h.a?B.aN:B.aG
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.u(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bo:B.bu,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.Y,!0,u,A.aI(!1,u,!0,new A.C(B.zK,A.B(A.a([s,B.bc,t,A.V(B.ek,w?B.bo:B.bu,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac)},
ccN(d,e,f,g,h,i){return this.aXW(!1,d,e,f,g,h,i)},
Ma(d,e){return this.bBo(d,e)},
bBo(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ma=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kP(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Ma)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bxm(t.a.c,d.a),$async$Ma)
case 6:w=7
return A.b(t.uP(),$async$Ma)
case 7:r=t.c
if(r==null){w=1
break}r.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ma,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===B.H,n=new C.t5(o),m=o?B.bW:B.iV
if(q.f)o=D.aXF
else{w=q.bvZ(n)
v=q.bR4(n)
u=q.gbta()
if(o)t=B.jd
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ab,v,B.aO,new C.Ea(A.p(p,A.B(A.a([q.axw(Q.KL,"Projects",n,D.a5U),q.axw(B.uu,"Cashier",n,D.aNP),q.axw(B.E9,"Family Tree",n,D.flz)],r),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ef,0.95,u,p),B.bt],r)
w=q.d
if(w===D.a5U){w=J.a9(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aN:B.aG,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b7,new C.aul(q.gaMi(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.ccP(n)],r))}else{o=q.a
if(w===D.aNP)u.push(new C.alM(o.c,n,p))
else{w=q.r
u.push(new C.amS(o.c,o.d,o.e,o.f,new C.evk(q),new C.evl(q),new A.cx(w,x.b4)))}}o=A.ch(A.u(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A8.K9,p,p,B.aj)}return A.cd(p,m,A.bq(!0,o,!0,!1,B.ah,!0,!0),p,!1,!1,p,p)},
bvZ(d){var w=null,v=A.m(8),u=d.a,t=A.V(O.WN,u?B.bo:B.bu,w,w,w,16)
return A.aI(!1,v,!0,new A.C(B.ln,A.B(A.a([t,B.bq,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bo:B.bu,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.euW(this),w,w,w,w,w,w,w)},
gbta(){switch(this.d.a){case 0:return D.a5c
case 1:return D.fd3
case 2:return D.a5d}},
bR4(d){var w=null,v=A.m(15),u=A.a([new A.aa(0,B.G,B.aS.j(0.35),B.cs,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bzq,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bc,D.bmo,A.aD(!1,B.Y,!0,w,A.aI(!1,A.m(12),!0,A.p(w,D.bx_,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ev_(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.Ea(A.p(w,A.u(A.a([new A.C(E.Vp,s,w),A.p(w,A.u(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.av,A.d(A.zE(this.gcrK()),w,w,w,w,w,w,D.eLs,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uh,B.iJ,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(B.aS,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ah,1,D.fd2,w)},
axw(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aS:B.K,q=A.m(12),p=t?A.H(B.c.j(0.55),B.r,2):A.H(B.K,B.r,2),o=t?A.a([new A.aa(0.5,B.G,B.aS.j(0.42),B.cA,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bo:B.bu
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bo:B.bu
return A.D(A.aD(!1,B.Y,!0,u,A.aI(!1,s,!0,A.di(u,A.B(A.a([w,B.eA,new A.dp(1,B.cj,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b6,B.j,0,u,u),u,u,B.co,new A.o(r,u,p,q,o,u,B.n),B.ij,u,u,u,B.Kc,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.evg(this,g),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),1)},
ccP(d){var w,v,u,t,s,r,q=this,p=null
if(J.ci(q.e)){w=d.a
v=w?B.dR:B.c
u=A.m(15)
t=A.p(p,D.bx4,B.h,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.G,B.aS.j(0.5),B.eK,28)],x.V),D.bHN,B.a5),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aN:B.aG,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Ea(A.p(p,A.u(A.a([t,B.d3,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bo:B.bu,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dW,A.B(A.a([A.D(q.aNM(B.iL,"Scan QR",new C.eva(q),d),1),B.aw,A.D(q.aNM(M.xf,"Upload file",new C.evb(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bK(D.f8V,q.gaMi(),A.bk(B.aS,p,p,p,B.c,B.fP,p,p,new A.b5(A.m(12),B.V),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bjl,1.05,D.a5c,p)}w=J.b4(q.e,new C.evc(q,d),x.l)
w=A.z(w,w.$ti.k("ai.E"))
return new C.Ea(A.u(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a5c,p)},
aNM(d,e,f,g){var w=null,v=B.aS.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.H(B.aS.j(0.45),B.r,1)
return A.aD(!1,B.Y,!0,u,A.aI(!1,t,!0,A.p(w,A.u(A.a([A.V(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eJU,B.L,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.acn,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)},
ccO(d,e){var w,v,u=null,t=e.a,s=t?B.dR:B.c,r=A.m(14),q=A.H(t?B.dT:B.c4,B.r,1),p=A.a([new A.aa(0,B.G,B.x.j(t?0.35:0.08),B.e6,10)],x.V),o=A.m(14),n=t?B.bo:B.bu
n=A.bu(B.a6y,new A.fJ(1.7777777777777777,C.aN_(!0,B.fl,1/0,Q.KL,n,d.c,1/0),u),B.ap)
w=x.p
v=A.D(A.u(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aN:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.av,A.d(""+d.d.length+" budget items \xb7 "+A.zE(d.gw3()),u,u,u,u,u,u,D.eI4,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.Y,!0,u,A.aI(!1,o,!0,A.u(A.a([n,new A.C(B.bB,A.B(A.a([v,A.aF(u,u,u,u,A.V(A9.Lm,t?B.bo:B.bu,u,u,u,u),u,u,u,new C.ev8(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.ev9(this,d),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),B.h,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e_,u,u,u,1/0)}}
C.bts.prototype={}
C.qo.prototype={
ac(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcK9(){var w,v,u,t,s=this.c
if(s===B.k.kk(s))w=B.o.u(B.k.N(s))
else{v=B.k.aa(s,2)
u=A.ae("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l3.prototype={
gw3(){return B.d.cI(this.d,0,new C.cqz())},
ac(){var w=this,v=w.d,u=A.U(v).k("J<1,a1<n,@>>")
v=A.z(new A.J(v,new C.cqy(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ab()],x.N,x.z)},
b6L(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l3(w.a,w.b,v,u,w.e)},
b6s(d){return this.b6L(d,null)},
QS(d){return this.b6L(null,d)}}
C.G5.prototype={
a3(){return"FamilyGender."+this.b}}
C.hQ.prototype={
ac(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.h0T(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aA4(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hQ(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ai7.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kn.prototype={
galw(){var w=this.f
return new A.a4(w,new C.bJc(),A.U(w).k("a4<1>")).gI(0)},
ac(){var w=this,v=w.f,u=A.U(v).k("J<1,a1<n,@>>")
v=A.z(new A.J(v,new C.bJb(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ab(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hFR(w.y)],x.N,x.z)},
xF(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kn(w.a,v,u,t,s,r,w.r,q,p,o)},
b6K(d,e){var w=null
return this.xF(w,w,d,e,w,w,w,w)},
cAf(d,e,f,g,h,i,j){return this.xF(d,e,f,g,h,i,j,null)},
aA9(d,e){var w=null
return this.xF(w,w,w,d,w,w,e,w)},
cyK(d){var w=null
return this.xF(w,w,w,w,w,w,d,w)},
cz7(d){var w=null
return this.xF(w,w,w,w,w,w,w,d)},
azW(d){var w=null
return this.xF(w,w,w,w,d,w,w,w)},
czM(d,e,f){var w=null
return this.xF(w,d,w,e,w,w,f,w)},
cyx(d){var w=null
return this.xF(w,w,d,w,w,w,w,w)},
czk(d,e){var w=null
return this.xF(d,w,w,w,w,e,w,w)}}
C.cqA.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cqB.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aDR.prototype={}
C.b50.prototype={
bC(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b50()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aW(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b5_.prototype={
gvo(){return!0},
gEG(){return this.z.b<this.b.length},
aPl(d){switch(0){case 0:return d.a.c}},
aP2(d){switch(0){case 0:return d.a.d}},
bKC(d,e){switch(0){case 0:return new A.hy(d,e)}},
bK0(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fS(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.is(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.FR(b4)
switch(0){case 0:v=b5.b
u=new A.kk(0,v,0,1/0)
t=w===B.QG
break}s=A.a([],x.gZ)
r=A.S(x.cM,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fS(b4,u,!0)
f=b1.aPl(g)
f.toString
e=b1.aP2(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDR(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.m(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDR(k,j,i))}d=s.length
switch(0){case 0:q=b5.cp(new A.hy(m,l))
a0=q.a
a1=q.b
b1.a=new A.is(0,0,a0,a1)
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
for(q=B.d.fO(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aPl(g)
e=b1.aP2(g)
e.toString
a9=b1.bK0(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bKC(a6,a3+a9)
b0=g.a
g.a=new A.is(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fN(d){var w,v,u,t,s,r=this
r.kO(d)
w=d.b
w.hR()
v=A.dh()
u=r.a
v.dZ(u.a,u.b,0,1)
w.of(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fN(d)
w.mK(0)},
Fa(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hR(){return this.z}}
C.brJ.prototype={}
var z=a.updateTypes(["aw<~>()","T(hQ)","T(kn)","~()","T(mQ)","a1<n,@>(kn)","I(kn,kn)","n(hQ)","kn(a1<@,@>)","T(l3)","T(tC)","mQ(a1<@,@>)","tC()","I(l3,l3)","hQ(a1<@,@>)","a1<n,@>(hQ)","T(qo)","aw<~>(l3)","ep<n?>(hQ)","I(hQ,hQ)","n?(hQ)","a1<n,@>(mQ)","XU(X)","n(n)","aaP(X)","r(nR)","I(mQ,mQ)","hQ(hQ)","cF(br<n,Em>)","cF(Ir)","~(hQ)","I?(hQ)","hQ()","ak<hQ>()","T(tB)","T(Ir)","C(hQ)","~(G5)","T(ack)","r(G5,n,a0)","Xi(X)","br<n,ak<a1<n,@>>>(n,ak<mQ>)","~(I)","+count,id,name(I,n,n)(kn)","kn(kn)","Ye(X)","Yf(X)","T(lj)","lj()","n(kn)","ZY(X)","WT(X)","WS(X)","Xg(X)","Xk(X)","r(qo)","ab9(X)","~(lG)","aw<~>([n?])","P(P,l3)","r(l3)","P(P,qo)","a1<n,@>(qo)","qo(a1<@,@>)","WR(X)","QR(X)","co(G4)","l3(a1<@,@>)","tB()","n(l3)","a1<n,@>(l3)","n(Q)","I(hQ)","kn(a1<n,@>)","Wq(X)"])
C.fhG.prototype={
$1(d){return d.a+" "+d.b},
$S:116}
C.fhF.prototype={
bfu(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qh(s,d,B.h8,E.Dw),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.R(r!=null&&A.Jr(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bfu(d)},
$S:325}
C.fhH.prototype={
$1(d){return d.b},
$S:116}
C.fqF.prototype={
$1(d){var w=null
return A.ew(w,B.K,new F.NG(this.a,this.b,w),w,w,0,B.Vk,B.cZ,w,w,w)},
$S:46}
C.f7Z.prototype={
$1(d){return d!=null},
$S:217}
C.f8_.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:217}
C.f84.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:170}
C.ffp.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f_(d,w,w,w,A.fX(w,B.qI,w,w,w,w,w,w,w,B.dl,w,w,10.5,w,B.eb,w,!0,w,w,w,w),w),u=f?B.eb:B.up
return new A.nk(D.beX,A.a7r(A.a([new A.fH(130,w,v),new A.xY(1,B.E2,A.f_(e,w,w,w,A.fX(w,g==null?D.dQ2:g,w,w,w,w,w,w,w,B.dl,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.wf,B.l2))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1875}
C.ffo.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uK(999)
f=A.wc(A.le(h,A.f_("Cashier",h,h,h,A.fX(h,D.y4,h,h,h,h,h,h,h,B.dl,h,h,10,h,B.eb,h,!0,h,h,h,h),h),h,new A.kl(D.dPU,h,f,B.ho,h),h,h,D.bfn,h))
w=A.wc(A.f_("Debt receipt",h,h,h,A.fX(h,h,h,h,h,h,h,h,h,B.dl,h,h,22,h,B.eb,h,!0,h,h,h,h),h))
v=A.wc(A.f_(C.vX(new A.Q(Date.now(),0,!1),!0),h,h,h,D.a45,h))
u=A.uK(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f_(s,h,h,h,A.fX(h,h,h,h,h,h,h,h,h,B.dl,h,h,14,h,B.eb,h,!0,h,h,h,h),h)
r=A.f_("Person who owes",h,h,h,D.a45,h)
q=A.uK(10)
p=x.C
u=A.le(h,A.xT(A.a([s,new A.fH(h,2,h),r,new A.fH(h,10,h),A.le(h,A.xT(A.a([A.f_("Amount owed",h,h,h,D.a45,h),new A.fH(h,2,h),A.f_(A.zE(t.c),h,h,h,A.fX(h,D.y4,h,h,h,h,h,h,h,B.dl,h,h,20,h,B.eb,h,!0,h,h,h,h),h)],p),B.q9,B.l2),h,new A.kl(B.oo,h,q,B.ho,h),h,h,D.beE,1/0)],p),B.q9,B.l2),h,new A.kl(E.aBI,h,u,B.ho,h),h,h,D.bgs,1/0)
q=new A.n3(D.dPX,0.9,B.kl)
r=A.uK(12)
s=i.c
o=s.$2("Original due",C.vX(t.r,!1))
n=s.$2("Current due",C.vX(t.f,!1))
m=i.d
l=new A.n3(m,1.1,B.kl)
k=A.uK(8)
j=i.a
k=A.a([o,n,new A.fH(h,6,h),A.le(h,A.wc(A.f_(t.gaGH(),h,h,h,A.fX(h,m,h,h,h,h,h,h,h,B.dl,h,h,11,h,B.eb,h,!0,0.5,h,h,h),h)),h,new A.kl(h,new A.p1(l,l,l,l),k,B.ho,h),h,h,D.bfx,1/0),new A.fH(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.y4))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.y4))
else{n=A.f_("Missed days ("+n+")",h,h,h,A.fX(h,B.qI,h,h,h,h,h,h,h,B.dl,h,h,10.5,h,B.eb,h,!0,h,h,h,h),h)
m=A.U(o).k("J<1,Qr>")
o=A.z(new A.J(o,new C.ffn(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fH(h,4,h),n,new A.fH(h,6,h),new C.b5_(5,5,new C.b50(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fH(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fH(h,8,h),w,new A.fH(h,3,h),v,new A.fH(h,16,h),u,new A.fH(h,10,h),A.le(h,A.xT(k,B.wf,B.l2),h,new A.kl(h,new A.p1(q,q,q,q),r,B.ho,h),h,h,B.acx,1/0)],p)
w=j.a
if(w!=null){v=new A.n3(B.Gw,1,B.kl)
B.d.v(f,A.a([new A.fH(h,16,h),A.f_("Debtor signature",h,h,h,A.fX(h,B.qI,h,h,h,h,h,h,h,B.dl,h,h,10,h,B.eb,h,!0,h,h,h,h),h),new A.fH(h,6,h),A.le(h,new A.Gk(w,B.SH,h,h),h,new A.kl(h,new A.p1(v,v,v,v),A.uK(6),B.ho,h),82,h,B.Ke,1/0)],p))}f.push(new A.fH(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f_(w,h,h,h,D.eBi,h))
f.push(new A.fH(h,18,h))
f.push(A.wc(A.f_("NGMY.ORG",h,h,h,A.fX(h,D.y4,h,h,h,h,h,h,h,B.dl,h,h,14,h,B.eb,h,!0,1.8,h,h,h),h)))
return f},
$S:399}
C.ffn.prototype={
$1(d){var w=null,v=new A.n3(D.Gx,0.7,B.kl),u=A.uK(999)
return A.le(w,A.f_(C.vX(d,!1),w,w,w,A.fX(w,D.Gx,w,w,w,w,w,w,w,B.dl,w,w,9.5,w,B.eb,w,!0,w,w,w,w),w),w,new A.kl(w,new A.p1(v,v,v,v),u,B.ho,w),w,w,D.bkF,w)},
$S:1876}
C.bXJ.prototype={
$1(d){var w=null,v=B.bQ.j(0.08),u=A.m(999),t=A.H(B.bQ.j(0.28),B.r,1)
return A.p(w,A.d(C.vX(d,!1),w,w,w,w,w,w,D.eHA,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.et,w,w,w)},
$S:1877}
C.fra.prototype={
$1(d){var w=null,v=A.aG(d,B.bP,x.w).w,u=A.m(26),t=A.aF(w,w,w,w,B.aiu,w,w,w,new C.fr7(d),w,w,w,w,w,B.c8),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.ew(w,B.K,new A.d1(new A.aX(0,380,0,v.a.b*0.9),A.aD(!1,B.Y,!0,u,new A.C(B.Va,A.u(A.a([new A.bG(B.a7,w,w,t,w),new A.dp(1,B.cj,A.ch(A.u(A.a([new A.en(new C.aVb(r,w),s),B.T,A.B(A.a([A.D(A.ez(B.xq,D.f5u,new C.fr8(s,r,d),A.db(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eW,w,new A.b5(A.m(14),B.V),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.D(A.dn(B.Yo,D.f2o,new C.fr9(r,d),A.bk(B.aW,w,w,w,B.c,w,B.eW,w,new A.b5(A.m(14),B.V),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.aj),w)],p),B.m,w,B.e,B.R,0,B.p),w),B.h,B.aG,0,w,w,w,w,w,B.ac),w),w,w,0,Ad.Vy,B.cZ,w,w,w)},
$S:46}
C.fr7.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.fr8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aT.af$.x.h(0,t.a)
m=m==null?null:m.gb5()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lQ(2.5),$async$$0)
case 4:w=3
return A.b(e.hf(B.fM),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.f2(B.dA.gaL(s))
m=t.b
q=B.a.i(m.b)
p=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.an(o,0,32)
w=5
return A.b(A.rg(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fr9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fm_(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.G(x.q).f
s.P(A.b0(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fr2.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.ew(w,B.aG,A.u(A.a([new A.C(D.bgg,A.B(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.mV,w,w,w),1),A.aF(w,w,w,w,B.l0,w,w,w,new C.fr0(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dp(1,B.cj,new A.C(B.io,A.bu(A.m(14),A.fD(t,B.A,w,w,B.ci,B.dp,!1,w,!1,w,w),B.ap),w),w),new A.C(B.JT,new A.a3(1/0,w,A.dn(B.og,D.aL1,new C.fr1(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.V),w,w,w)),w),w)],u),B.m,w,B.e,B.R,0,B.p),w,w,w,B.K3,B.cZ,w,new A.b5(v,B.V),w)},
$S:46}
C.fr0.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.fr1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rg(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fre.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.ew(w,B.aG,new A.C(D.bgo,A.u(A.a([A.B(A.a([D.blC,A.aF(w,w,w,w,B.l0,w,w,w,new C.frc(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.en(A.bu(A.m(14),A.p(w,A.b1(w,w,w,new C.b77(s.ax,w),B.at),B.h,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ab,new A.a3(1/0,w,A.dn(B.og,D.aL1,new C.frd(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.V),w,w,w)),w)],u),B.m,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b5(v,B.V),w)},
$S:46}
C.frc.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.frd.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aT.af$.x.h(0,t.a)
n=n==null?null:n.gb5()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lQ(2.5),$async$$0)
case 4:w=3
return A.b(e.hf(B.fM),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ae("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.an(p,0,32)
r=J.f2(B.dA.gaL(s))
w=5
return A.b(A.rg(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.G(x.q).f.P(A.b0(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.faK.prototype={
$1(d){return d.a===this.a},
$S:261}
C.dyp.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dya.prototype={
beI(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dR:B.c
s=u.a
w=2
return A.b(A.c1(t,null,new C.dyd(s,q,e),p,!0,!0,!1,B.GM,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dye(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.beI(d,e)},
$S:1878}
C.dyd.prototype={
$1(d){var w,v=null,u=this.c===B.v_,t=u?D.cVs:D.cS3
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aN:B.aG,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bq(!0,new A.C(L.ad5,A.u(A.a([u,B.av,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bo:B.bu,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ab,A.ih(!0,v,v,B.z,K.aIh,new C.dyc(this.a,w,t,d),t.length,v,B.dL,B.aj,!0)],x.p),B.af,v,B.e,B.R,0,B.p),v),!0,!1,B.ah,!0,!0)},
$S:34}
C.dyc.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aN
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bo:B.bu).j(0.16)
u=A.H(u,B.r,q?1.6:1)
return A.aI(!1,p,!0,A.p(B.A,C.aVa(r,26),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dyb(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dyb.prototype={
$0(){A.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.dye.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dy8.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dy9.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cE(B.co,e,v)
return new A.cZ(e,!1,A.iu(B.A,A.at(A.aD(!1,B.Y,!0,v,new A.ed(new C.dy7(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.h,B.K,0,v,v,v,v,v,B.ac),v,v,v),v,new A.bd(t,new A.bl(0.96,1,u),u.k("bd<bC.T>"))),v)},
$S:30}
C.dy7.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bP,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dR:B.c,f=A.m(14),e=A.H((h?B.bo:B.bu).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aI(!1,v,!0,new A.C(B.ef,A.V(B.ct,i.a.d.a?B.bo:B.bu,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dxT(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aOi("Name")
r=l.a
q=r.d==null?k:new C.dxU(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bi:B.lS
n=A.H(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aK(k,B.U,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b6D(new A.C(B.hi,A.aI(!1,p,!0,A.p(B.A,C.aVa(m==null?"\ud83d\udc64":A.fgd(r.e,m),18),B.h,k,k,new A.o(o,k,n,k,k,k,B.a5),k,34,k,B.ch,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.ag,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.kf,k,B.a3N,k,k)
v=A.a([v,B.ab,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bo:B.bu,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.B(A.a([A.D(i.aOT("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dxV(r,a0),r.d===B.v_),1),B.aa,A.D(i.aOT("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dy_(r,a0),r.d===B.a0O),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bG(B.a3,k,k,A.hh(D.byI,D.f41,new C.dy0(r,l.e,a0),A.fm(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c8)),k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tE(A.ae("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aOj("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.ag,k,k,s,k,k,B.dX,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.am,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.M:B.aN
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.H((t?B.bo:B.bu).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bo:B.bu,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.vX(r.a,!1)
v.push(A.aD(!1,B.Y,!0,q,A.aI(!1,p,!0,A.p(k,A.B(A.a([A.D(A.u(A.a([t,B.bA,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bvC],u),B.m,k,B.e,B.j,0,k,k),B.h,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dy1(r,d,a0),k,k,k,k,k,k,k),B.h,s,0,k,k,k,k,k,B.ac))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bo:B.bu,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aOi("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.ag,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.am,k,k,k,k))
v.push(B.ab)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aN:B.aG,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bo:B.bu,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aWk(r.b.length!==0,B.m_,new C.dy2(r,i,a0),new C.dy3(r,a0),"Upload from gallery","ID photo"))
v.push(i.aWk(r.c.length!==0,D.bp2,new C.dy4(r,i,d,a0),new C.dy5(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ab.a5p("Signature (optional)",t,new C.dy6(a0),new C.dxW(a0,t),new C.dxX(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bo:B.bu
s=(i?B.bo:B.bu).j(0.28)
s=A.D(A.dV(E.aKW,new C.dxY(d),A.db(k,k,k,k,k,k,k,k,k,t,k,k,B.wq,k,new A.b5(A.m(10),B.V),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.wq,k,new A.b5(A.m(10),B.V),k,k,k)
v.push(A.B(A.a([s,B.aa,A.D(A.bK(A.d(h?"Save":"Update",k,k,k,k,k,k,B.tE,k,k,k),new C.dxZ(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.ch(A.u(v,B.af,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.aj),B.h,k,new A.aX(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uk,B.iJ,k,k,360)},
$S:158}
C.dxT.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dxU.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dxV.prototype={
$0(){return this.b.$1(new C.dxS(this.a))},
$S:0}
C.dxS.prototype={
$0(){var w=this.a
w.d=B.v_
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dy_.prototype={
$0(){return this.b.$1(new C.dxR(this.a))},
$S:0}
C.dxR.prototype={
$0(){var w=this.a
w.d=B.a0O
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dy0.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dy1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xJ(null,u.b,A.bW(2020,1,1,0,0,0,0,0),null,s,A.bW(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dxQ(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxQ.prototype={
$0(){var w=this.b
return this.a.a=A.bW(w.gcd(),w.gcb(),w.gcq(),0,0,0,0,0)},
$S:0}
C.dy2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.NF(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dxP(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxP.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dy3.prototype={
$0(){return this.b.$1(new C.dxO(this.a))},
$S:0}
C.dxO.prototype={
$0(){return this.a.b=""},
$S:0}
C.dy4.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dR:B.c
w=3
return A.b(A.c1(q,null,new C.dxM(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.NF(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dxN(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxM.prototype={
$1(d){var w=null
return A.bq(!0,A.u(A.a([A.dK(!1,w,w,w,!0,w,w,w,!0,w,B.ai1,w,w,w,w,new C.dxG(d),!1,w,w,w,w,w,w,w,D.eWg,w,w,w),A.dK(!1,w,w,w,!0,w,w,w,!0,w,B.ai_,w,w,w,w,new C.dxH(d),!1,w,w,w,w,w,w,w,D.f1v,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ah,!0,!0)},
$S:34}
C.dxG.prototype={
$0(){A.a8(this.a,!1).M("camera")
return null},
$S:0}
C.dxH.prototype={
$0(){A.a8(this.a,!1).M("gallery")
return null},
$S:0}
C.dxN.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dy5.prototype={
$0(){return this.b.$1(new C.dxL(this.a))},
$S:0}
C.dxL.prototype={
$0(){return this.a.c=""},
$S:0}
C.dy6.prototype={
$0(){return this.a.$1(new C.dxK())},
$S:0}
C.dxK.prototype={
$0(){},
$S:0}
C.dxW.prototype={
$0(){return this.a.$1(new C.dxJ(this.b))},
$S:0}
C.dxJ.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dxX.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.afc(u.a,null,null,new C.dxI(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxI.prototype={
$4(d,e,f,g){this.a.$1(new C.dxF(this.b,d))},
$S:448}
C.dxF.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.v(w,this.b)},
$S:0}
C.dxY.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dxZ.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.G(x.q).f.P(D.exr)
return}if(w.a.d==null){w.c.G(x.q).f.P(D.eun)
return}A.a8(w.c,!1).M(!0)},
$S:0}
C.dys.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dyt.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bo:B.bu).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aN:B.aG,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zE(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bo:B.bu,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.y4(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.y4(r).length>0?B.bQ:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bo:B.bu
t=(q?B.bo:B.bu).j(0.28)
s=x.p
return new A.cZ(e,!1,A.at(A.aD(!1,B.Y,!0,r,A.p(r,A.u(A.a([p,B.P,v,u,B.ay,A.B(A.a([A.D(A.dV(B.mY,new C.dyq(d),A.db(r,r,r,r,r,r,r,r,r,w,r,r,B.jD,r,new A.b5(A.m(10),B.V),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.D(A.bK(D.f1U,new C.dyr(d),A.bk(B.cY,r,r,r,B.c,r,B.jD,r,new A.b5(A.m(10),B.V),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.af,r,B.e,B.R,0,B.p),B.h,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.zP,E.Vp,r,r,300),B.h,B.K,0,r,r,r,r,r,B.ac),r,r,r),r)},
$S:30}
C.dyq.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dyr.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dym.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dyn(r),p=r.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bo:B.bu).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aN:B.aG,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zE(l.c),s,s,s,s,s,s,D.eJ0,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jm((r.a.d.a?B.bo:B.bu).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.X7,"View receipt",new C.dyf(r,d,l))
u=l.x!=null
t=u?B.uJ:B.p4
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bgl,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dyg(r,d,l)),q.$3$icon$label$onTap(B.A5,"Edit",new C.dyh(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.m_,"View / download ID",new C.dyi(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bp1,"View / download selfie",new C.dyj(r,d,l)))
if(l.gaBK())p.push(q.$3$icon$label$onTap(A2.Yf,"View / download signature",new C.dyk(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bQ,B.e4,"Delete",new C.dyl(r,d,l)))
p.push(B.av)
return A.bq(!0,new A.C(B.uh,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ah,!0,!0)},
$S:34}
C.dyn.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aN:B.aG
else w=d
return A.aI(!1,v,!0,new A.C(B.eH,A.B(A.a([A.V(e,w,v,v,v,20),B.bc,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1879}
C.dyf.prototype={
$0(){A.a8(this.b,!1).M(null)
var w=this.a.c
w.toString
C.fr6(w,this.c)},
$S:0}
C.dyg.prototype={
$0(){A.a8(this.b,!1).M(null)
this.a.Qe(this.c)},
$S:0}
C.dyh.prototype={
$0(){A.a8(this.b,!1).M(null)
this.a.BW(this.c)},
$S:0}
C.dyi.prototype={
$0(){var w,v,u
A.a8(this.b,!1).M(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzq(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dyj.prototype={
$0(){var w,v,u
A.a8(this.b,!1).M(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzq(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dyk.prototype={
$0(){A.a8(this.b,!1).M(null)
var w=this.a.c
w.toString
C.frb(w,this.c)},
$S:0}
C.dyl.prototype={
$0(){A.a8(this.b,!1).M(null)
this.a.Ml(0,this.c)},
$S:0}
C.dyu.prototype={
$1(d){return d.x==null},
$S:261}
C.dyv.prototype={
$1(d){return d.x!=null},
$S:261}
C.dyw.prototype={
$2(d,e){return d+e.c},
$S:1880}
C.dyx.prototype={
$0(){return this.a.btD()},
$S:0}
C.dyo.prototype={
$0(){return this.a.ac2(this.b)},
$S:0}
C.fb7.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fb8.prototype={
$0(){return B.d.gK(D.Zr)},
$S:z+68}
C.cZS.prototype={
$0(){var w=this.a
return w.n(new C.cZQ(w,this.b))},
$S:0}
C.cZQ.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.cZR.prototype={
$0(){},
$S:0}
C.cZT.prototype={
$0(){var w=this.a.gbRL()
A.a8(this.b,!1).M(w)
return null},
$S:0}
C.fcZ.prototype={
$1(d){return C.fN_(A.Z(d,x.N,x.z))},
$S:z+11}
C.fd_.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fd0.prototype={
$2(d,e){var w=A.c3(d.a,null),v=A.c3(e.a,null)
if(w!=null&&v!=null)return B.o.aI(w,v)
return d.d.aI(0,e.d)},
$S:z+26}
C.fpO.prototype={
$1(d){return d.ac()},
$S:z+21}
C.fxs.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.faB.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bJ7.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eQ(e,v)?v:null},
$S:1881}
C.fqj.prototype={
$1(d){var w=this
return new C.Xi(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d_x.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d_w(w,d))},
$S:z+66}
C.d_w.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_l.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.ct(u)?v.r>=J.a9(v.d):w)v.r=J.a9(v.d)-1},
$S:0}
C.d_i.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.cZU.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.cZV.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d_m.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d_2.prototype={
$1(d){var w=null,v=A.L(d).ax.a===B.H,u=v?B.dR:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bu,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eo(A.a([A.bI(!1,B.df,w,w,!0,w,w,new C.d_0(d),w,w),A.bK(B.vm,new C.d_1(d),A.bk(B.mp,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.d_0.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.d_1.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.d_3.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d_j.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d_k.prototype={
$0(){return B.d.gK(D.xA)},
$S:z+12}
C.cZZ.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxl(0),t=J.a9(w.d)
w=J.a9(w.d)===1?"page":"pages"
return new C.QR(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d__.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_4.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.WR(v,u,J.a9(w.d),null)},
$S:z+64}
C.d_5.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_v.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aH(s,new C.Wz(r.y,r.gxl(0),J.a9(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d_t(r),s,s,s,s,s,s,!1,B.ae)
else{w=e-1
v=J.q(r.d,w)
J.a9(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b6w(v,e,w,u,t,r.gbJ9(),C.h0S(r.y.Q),r.gxl(0),s)
w=t}return A.c4(q,new C.d_u(r,e),new A.C(B.Vr,w,s))},
$S:1882}
C.d_u.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcV(t).ay){t=this.b
u=x.cy.a(B.d.gcV(u.f.f)).gtU(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dh()
t=u.a
t.$flags&2&&A.ah(t)
t[11]=0.0013
u.fk(v*3.141592653589793*0.5)
return A.fn(B.a3,A.d7(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.d_t.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCN(B.oU,B.ik)},
$S:0}
C.d_f.prototype={
$0(){var w=this.a
return w.n(new C.d_e(w))},
$S:0}
C.d_e.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d_g.prototype={
$0(){var w=this.a.c
w.toString
A.a8(w,!1).M(null)
return null},
$S:0}
C.cZW.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jx.j(0.5),r=x.p,q=A.a([D.eUZ,B.ab],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ci(p.d)?"Write this book":"Write a new book"
q.push(p.WQ(d,B.dP,w,J.ci(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.WQ(d,K.afZ,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.ct(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cK,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.jY.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cK,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.jY.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.WQ(d,Z.ah4,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.WQ(d,B.pa,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.WQ(d,B.pa,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.ew(u,E.zg,A.bq(!0,new A.C(A1.DJ,A.u(q,B.F,u,B.e,B.R,0,B.p),u),!0,!1,B.ah,!0,!0),u,u,u,D.adv,B.cZ,u,new A.b5(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:46}
C.d_h.prototype={
$0(){A.a8(this.a,!1).M(this.b)
return null},
$S:0}
C.d_8.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.ct(w.d)
return new C.Xk(v,J.ct(w.d),w.r+1,null)},
$S:z+54}
C.d_9.prototype={
$1(d){var w=null
return A.nX(!1,A.eo(w,w,w,E.zg,new A.k3(this.a,new C.d_7(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:266}
C.d_7.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3t,B.nG,A.D(A.d(e,w,w,w,w,w,w,B.ix,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:728}
C.d_a.prototype={
$0(){return this.a.a=!1},
$S:47}
C.d_b.prototype={
$2(d,e){this.a.sq(0,d)
return d},
$S:191}
C.d_c.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_d.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zN(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.PJ(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.n(new C.d_6(s,t))
w=4
return A.b(s.kt(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_6.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_o.prototype={
$1(d){var w=null
return A.nX(!1,A.eo(w,w,w,E.zg,new A.k3(this.a,new C.d_n(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:266}
C.d_n.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3t,B.nG,A.D(A.d(e,w,w,w,w,w,w,B.ix,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:728}
C.d_p.prototype={
$0(){return this.a.a=!1},
$S:47}
C.d_q.prototype={
$2(d,e){this.a.sq(0,d)
return d},
$S:191}
C.d_r.prototype={
$2(d,e){this.a.sq(0,d)
return d},
$S:191}
C.d_s.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.zN(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kt(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZX.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bbY(B.oU,T.JI)},
$S:0}
C.cZY.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCN(B.oU,T.JI)},
$S:0}
C.d0Y.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.d0Z.prototype={
$1(d){var w=this.a
return w.n(new C.d0X(w))},
$S:9}
C.d0X.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d1_.prototype={
$1(d){var w=this.a
return w.n(new C.d0W(w))},
$S:9}
C.d0W.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d10.prototype={
$1(d){var w=this.a
return w.n(new C.d0V(w))},
$S:9}
C.d0V.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d11.prototype={
$0(){var w=this.a
return w.n(new C.d0U(w,this.b))},
$S:0}
C.d0U.prototype={
$0(){var w=this.b
this.a.d.saS(0,w)
return w},
$S:0}
C.d12.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga_l()
A.a8(this.b,!1).M(new A.bkT(w,v))},
$S:0}
C.d_M.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d_L.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Xg(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d_Q.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d_P.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b2o(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hn,v,v,v)
return A.eo(A.a([A.bI(!1,B.df,v,v,!0,v,v,new C.d_N(d),v,v),A.bK(B.vm,new C.d_O(d),A.bk(B.mp,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.zg,w,v,v,v,v,D.eTW,v)},
$S:20}
C.d_N.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.d_O.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.d_R.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.d_S.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a3(s,t,w[u],t))
return A.ch(A.c8(B.bH,r,B.bx,18,14),B.q,t,B.z,t,D.bhh,t,t,B.aj)},
$S:310}
C.d_K.prototype={
$0(){return this.a.Oh(0,this.b)},
$S:0}
C.d_J.prototype={
$0(){return this.a.NM(0,this.b)},
$S:0}
C.czi.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.czj.prototype={
$0(){return B.d.gK(D.xA)},
$S:z+12}
C.czk.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bZ(0,new A.C(d,A.bT(w,new A.o(w,w,A.H(this.a.j(f),B.r,g),v,w,w,B.n),B.ba),w),0,0,0)},
$S:1884}
C.cSK.prototype={
$1(d){return this.a.n(new C.cSJ(this.b,this.c))},
$S:9}
C.cSJ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cT8.prototype={
$1(d){return this.a.n(new C.cSW())},
$S:2}
C.cSW.prototype={
$0(){},
$S:0}
C.cT9.prototype={
$1(d){return this.a.n(new C.cSV())},
$S:2}
C.cSV.prototype={
$0(){},
$S:0}
C.cTa.prototype={
$0(){var w=this.a
return w.n(new C.cSU(w,this.b))},
$S:0}
C.cSU.prototype={
$0(){var w=this.a
return w.d=w.gnt().Em(this.b.a)},
$S:0}
C.cTb.prototype={
$0(){var w=this.a
return w.n(new C.cST(w,this.b))},
$S:0}
C.cST.prototype={
$0(){var w=this.a
return w.d=w.gnt().cy3(this.b)},
$S:0}
C.cTc.prototype={
$1(d){return this.a.n(new C.cSS())},
$S:2}
C.cSS.prototype={
$0(){},
$S:0}
C.cTd.prototype={
$0(){var w=this.a
return w.n(new C.cSR(w,this.b))},
$S:0}
C.cSR.prototype={
$0(){var w=this.a
return w.d=w.gnt().cy8(this.b.a)},
$S:0}
C.cTe.prototype={
$1(d){var w=this.a
return w.n(new C.cT3(w,d))},
$S:6}
C.cT3.prototype={
$0(){var w=this.a
return w.d=w.gnt().cz2(this.b)},
$S:0}
C.cTf.prototype={
$1(d){var w=this.a
return w.d=w.gnt().azZ(d)},
$S:2}
C.cTg.prototype={
$1(d){var w=this.a
return w.d=w.gnt().cyb(d)},
$S:2}
C.cTi.prototype={
$1(d){var w=this.a
return w.d=w.gnt().cz0(d)},
$S:2}
C.cTj.prototype={
$1(d){var w=this.a
return w.n(new C.cT2(w,d))},
$S:9}
C.cT2.prototype={
$0(){var w=this.a
return w.d=w.gnt().cyS(this.b)},
$S:0}
C.cTk.prototype={
$0(){var w=this.a,v=w.gnt(),u=B.a.i(w.gxl(0).a.a),t=B.a.i(w.gaxi().a.a)
u=v.b6U(B.a.i(w.ganx().a.a),t,u)
A.a8(this.b,!1).M(u)
return null},
$S:0}
C.dLn.prototype={
$0(){var w=this.a
w.v0()
w.a.bn()
w.a.p5()},
$S:0}
C.dLm.prototype={
$0(){var w=this.a
w.v0()
w.a.bn()
w.a.p5()},
$S:0}
C.dLp.prototype={
$0(){var w=this,v=w.b
if(J.ct(v)||J.ci(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dLq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dLr.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dLl.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dLo.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dLt.prototype={
$0(){this.a.MR()
return null},
$S:0}
C.dLs.prototype={
$0(){return this.a.Df(this.b)},
$S:0}
C.dKO.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bI(!1,B.df,w,w,!0,w,w,new C.dKM(d),w,w),r=A.bk(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.eo(A.a([s,A.bK(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dKN(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dKM.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dKN.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dKP.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cyx(this.b)},
$S:0}
C.dKJ.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aOy(w.b,w.c,w.d)},
$S:8}
C.dKh.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dKi.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.F3(t.a.c),$async$$0)
case 2:s=r.qD(q.dE(e,new C.dKu(t)))
if(s!=null&&t.c!=null)t.n(new C.dKv(t,s))
t.a.bn()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKu.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dKv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKx.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dKy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKI.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.czk(C.h11(w),w)},
$S:0}
C.dKG.prototype={
$1(d){return new A.ed(new C.dKF(this.a,this.b),null)},
$S:21}
C.dKF.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dR:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bo:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ahG,v,v,v,p>0?new C.dKB(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.u(A.a([r,B.aO,A.B(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.aie,v,v,v,new C.dKC(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.R,0,B.p)
return A.eo(A.a([A.bI(!1,B.df,v,v,!0,v,v,new C.dKD(d),v,v),A.bK(B.pC,new C.dKE(d),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:162}
C.dKB.prototype={
$0(){return this.b.$1(new C.dKA(this.a))},
$S:0}
C.dKA.prototype={
$0(){return--this.a.a},
$S:0}
C.dKC.prototype={
$0(){return this.b.$1(new C.dKz(this.a))},
$S:0}
C.dKz.prototype={
$0(){return++this.a.a},
$S:0}
C.dKD.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dKE.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dKH.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cz7(this.a.a)
w.r.a7(0)},
$S:0}
C.dK5.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.afi(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fVV(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dK6.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.f,x.P)
w.push(this.b)
v.d=u.azW(w)},
$S:0}
C.dKR.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aaP(this.b,w,this.c,null)},
$S:z+24}
C.dKL.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dR:B.c,t=A.m(20),s=A.V(B.kY,B.aS,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bu,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ab,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bu,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.u(p,B.m,w,B.e,B.R,0,B.p)
return A.eo(A.a([A.bK(D.f2W,new C.dKK(d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],o),B.b6,w,u,v,w,s,w,new A.b5(t,B.V),r,w)},
$S:20}
C.dKK.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dK7.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dK8.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dK9.prototype={
$1(d){return d.a},
$S:z+7}
C.dKa.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hQ(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.azW(w)},
$S:0}
C.dKe.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.afi(q)
w=A.U(q).k("a4<1>")
q=A.z(new A.a4(q,new C.dKc(r),w),w.k("G.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fVV(v.e,null,r,v.f,v.r,new C.dKd(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dKd.prototype={
$0(){return this.a.a7n(this.b)},
$S:0}
C.dKc.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dKf.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("J<1,hQ>")
w=A.z(new A.J(w,new C.dKb(this.b),v),v.k("ai.E"))
u.d=t.azW(w)},
$S:0}
C.dKb.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dKQ.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dKr.prototype={
$1(d){return d.length!==0},
$S:3}
C.dKs.prototype={
$1(d){var w=this
return new A.ed(new C.dKq(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dKq.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dR:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aN:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bo:B.bu,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ab],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bo:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dKm(u,e,o),A.U(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aK(v,B.U,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bm(v,new A.b2(4,A.m(12),B.dd),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.ag,v,v,v,v,v,B.lG,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a6,v,B.am,v,v,v,v))
p=A.u(p,B.af,v,B.e,B.R,0,B.p)
t=w.a
return A.eo(A.a([A.bI(!1,B.df,v,v,!0,v,v,new C.dKn(d),v,v),A.bK(B.Hu,new C.dKo(t,u,o,e),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bK(D.eSa,new C.dKp(t,u,o,d),A.bk(B.aS,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a3(360,v,p,v),v,v,v,v,r,v)},
$S:162}
C.dKm.prototype={
$1(d){var w=null
return A.dK(!1,B.ah,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aN:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bC9,w,w,w,new C.dKl(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1885}
C.dKl.prototype={
$0(){return this.a.$1(new C.dKj(this.b,this.c))},
$S:0}
C.dKj.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dKn.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dKo.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dKk(w.c,u))
v.bI(0,B.c_)}},
$S:0}
C.dKk.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dKp.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a8(w.d,!1).M(!0)},
$S:0}
C.dKt.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.czM(this.b,D.rK,C.F1(v,w.a.c))},
$S:0}
C.dKY.prototype={
$1(d){return d.as},
$S:z+1}
C.dKZ.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iE(this.b,w)},
$S:0}
C.dL_.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hOZ(v)
return w.TR(v==null?null:v.a)},
$S:0}
C.dL0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hs6(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gci(k)){k=A.aM(1/0,e.a,e.b)
s=A.aM(1/0,e.c,e.d)
l.cin(new A.ar(u,t),v.gbcL(),new A.ar(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cyW:D.cxw
q=A.H(s?B.dv:D.b1A,B.r,1)
p=A.m(22)
o=A.bZ(0,A.b1(m,m,m,new C.b9R(s,m),B.at),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bu(p,new A.am(B.W,m,B.a9,B.q,A.a([o,A.bZ(0,A.tN(new A.M(n,n,n,n),new A.a3(u,t,new C.baJ(l.d,v,l.f,w,new C.dKU(l),l.gc2U(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.brQ(s,new C.dKV(l,e),new C.dKW(l,e),new C.dKX(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.h,m,m,new A.o(m,m,q,k,m,new A.a7(B.b1,B.b5,B.w,r,m,m),B.n),m,m,m,P.acB,m,m,m,m)},
$S:229}
C.dKU.prototype={
$1(d){var w=this.a
w.n(new C.dKS(w,d))},
$S:2}
C.dKS.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.dKV.prototype={
$0(){var w=this.b
return this.a.b4C(1.25,new A.ar(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dKW.prototype={
$0(){var w=this.b
return this.a.b4C(0.8,new A.ar(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dKX.prototype={
$0(){var w=this,v=w.b
return w.a.aOy(new A.ar(A.aM(1/0,v.a,v.b),A.aM(1/0,v.c,v.d)),new A.ar(w.c,w.d),w.e.gbcL())},
$S:0}
C.dL1.prototype={
$0(){var w=this.a
return w.n(new C.dKT(w))},
$S:0}
C.dKT.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dKg.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fC(new A.fw(s.c)),$async$$0)
case 2:t.wP("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_W.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.beq(u,C.h55(v.c,u),new C.d_V(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d_V.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d_X.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bhH(d.d,d.c,u.f.t(0,d.a),new C.d_U(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d_U.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fbb.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.qD(new A.cS(new A.a4(v,new C.fbc(d),w.k("a4<1>")),new C.fbd(),w.k("cS<1,n>")))},
$S:z+20}
C.fbc.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fbd.prototype={
$1(d){return d.a},
$S:z+7}
C.fb9.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fba.prototype={
$1(d){return d.b},
$S:z+7}
C.fbg.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.qD(new A.cS(new A.a4(v,new C.fbh(d),w.k("a4<1>")),new C.fbi(),w.k("cS<1,n>")))},
$S:z+20}
C.fbh.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fbi.prototype={
$1(d){return d.a},
$S:z+7}
C.fbe.prototype={
$1(d){var w,v=A.eN([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fbf.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d_Z.prototype={
$0(){return this.a},
$S:z+32}
C.d0f.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:248}
C.d07.prototype={
$2(d,e){var w=this.a.ce(0,d,new C.d08()),v=J.a6(w)
if(!v.t(w,e))v.J(w,e)},
$S:121}
C.d08.prototype={
$0(){return A.a([],x.s)},
$S:729}
C.d06.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eQ(w,e)
return w===!0},
$S:316}
C.d0_.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d05.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d04.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.AJ:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.t(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.AJ:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1887}
C.d00.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d09.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
w=a7.b
w.m(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aV(u==null?B.U:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gT(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.J(0,s)
w.m(0,s,b0)
a7.e.m(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aV(t==null?D.AJ:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.bg(w,new C.d0a(r)))w.push(r)}}B.d.bm(w,new C.d0b(a8))
B.d.aY(w,new C.d0c())
q=C.hs5(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eaP],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.K)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.m(0,a9,a8)
if(o.length===0)return A.a([new A.A(-p,p)],x.G)
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
else j.push(d)}}a0=(B.d.gK(k)+B.d.gai(k))/2
a1=A.a([new A.A(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.m(0,a4,a3)
else a8.m(0,a9,new A.bkD(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.A(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.A(a5,a6))}}return a1},
$S:1888}
C.d0a.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d0b.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d0c.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+19}
C.d0d.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bg(v,A.a2(v).k("bg<2>")).cI(0,0,B.pP)+88-w.gK(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.m(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.m(0,d,u)},
$S:652}
C.d0e.prototype={
$1(d){return 16+d*156},
$S:256}
C.d_Y.prototype={
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
t.m(0,d,new C.Em(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.m(0,u,new C.Em(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.m(0,d,new C.Em(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Ir(d,new A.v(e+t,w),s,s.length))}},
$S:191}
C.d01.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aFR(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:121}
C.d02.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d03.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:730}
C.d0g.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:730}
C.d0h.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:460}
C.d0i.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:177}
C.d0j.prototype={
$1(d){return d>=0.5},
$S:126}
C.eVZ.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hA(A.aI(!1,v,!0,new A.a3(38,38,A.V(d,this.a.c?B.c:B.cV,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1890}
C.exE.prototype={
$1(d){var w=null,v=A.m(8),u=B.bT.j(0.12),t=A.m(8)
return new A.C(B.o5,A.aI(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eEX,B.L,w,w),B.h,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Kd,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.exD(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.exD.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dfx.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dfw.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mU,B.L,w,w)
return A.eo(A.a([A.bI(!1,B.df,w,w,!0,w,w,new C.dfu(d),w,w),A.bI(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lQ,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dfv(d),w,w)],x.p),B.b6,B.DD,w,u,D.bix,w,D.bkq,new A.b5(v,B.V),w,w)},
$S:20}
C.dfu.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.dfv.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.dfG.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dfH.prototype={
$1(d){var w=this.a
return w.n(new C.dfF(w,d))},
$S:z+37}
C.dfF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfI.prototype={
$1(d){var w=null
return A.p9(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dfL.prototype={
$1(d){var w=this.a
return w.n(new C.dfE(w,d))},
$S:31}
C.dfE.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dfK.prototype={
$1(d){var w=null
return A.p9(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dfM.prototype={
$1(d){var w=this.a
return w.n(new C.dfD(w,d))},
$S:31}
C.dfD.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dfN.prototype={
$0(){var w=this.a
return w.n(new C.dfC(w))},
$S:0}
C.dfC.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dfO.prototype={
$0(){var w=this.a
return w.n(new C.dfB(w))},
$S:0}
C.dfB.prototype={
$0(){return++this.a.at},
$S:0}
C.dfP.prototype={
$0(){var w=this.a
return w.n(new C.dfA(w))},
$S:0}
C.dfA.prototype={
$0(){return--this.a.ax},
$S:0}
C.dfQ.prototype={
$0(){var w=this.a
return w.n(new C.dfz(w))},
$S:0}
C.dfz.prototype={
$0(){return++this.a.ax},
$S:0}
C.dfR.prototype={
$1(d){var w=this.a
return w.n(new C.dfy(w,d))},
$S:9}
C.dfy.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dfJ.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dfS.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.dR:B.c
v=A.m(12)
if(p)u=B.bT
else u=(q.c.a?B.dT:B.c4).j(0.85)
u=A.H(u,B.r,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bo:B.bu
t=A.V(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bo:B.bu
return A.D(A.aD(!1,B.Y,!0,r,A.aI(!1,o,!0,A.di(r,A.u(A.a([t,B.av,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b8,new A.o(w,r,u,v,r,r,B.n),B.eG,r,r,r,B.jD,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dfT(q,d),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
$S:z+39}
C.dfT.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dg1.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.c3f.prototype={
$2(d,e){return new A.br(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c3m.prototype={
$1(d){return d.ac()},
$S:z+5}
C.c3n.prototype={
$2(d,e){var w=J.b4(e,new C.c3l(),x.a)
w=A.z(w,w.$ti.k("ai.E"))
return new A.br(d,w,x.d2)},
$S:z+41}
C.c3l.prototype={
$1(d){return d.ac()},
$S:z+21}
C.c3h.prototype={
$1(d){return C.ai8(A.Z(d,x.N,x.z))},
$S:z+8}
C.c3i.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c3j.prototype={
$1(d){return C.fN_(A.Z(d,x.N,x.z))},
$S:z+11}
C.c3k.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c3r.prototype={
$1(d){return new A.aCX(d.f.length,d.a,d.b)},
$S:z+43}
C.c3s.prototype={
$2(d,e){return B.a.aI(d.c,e.c)},
$S:564}
C.c3o.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c3p.prototype={
$1(d){return d.cyK(C.F1(d,this.a))},
$S:z+44}
C.dLa.prototype={
$1(d){return C.tj(d,this.a.a.c)},
$S:z+2}
C.dLb.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dLf.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dLg.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dL7.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWE(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xm("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oB(r.c,r.e),$async$$0)
case 4:s.xm(p)
w=5
return A.b(s.I5(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dL8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWE(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xm("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oB(r.c,r.e),$async$$0)
case 4:s.xm(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dL9.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Ta(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xm("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xm("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xm("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.I5(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a5(j)
o=r.a
if(o.c==null){w=1
break}o.xm(B.a.e1(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dLe.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWD(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xm("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a8(r,!1).cr(A.eH(new C.dLd(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oB(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLd.prototype={
$1(d){var w=this.b
return new C.Ye(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dLc.prototype={
$1(d){return D.fgl},
$S:z+46}
C.dLi.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dLj.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dLh(w,d)
return new A.C(B.d8,new C.baN(this.b,d.c,d.a,w,null),null)},
$S:1891}
C.dLh.prototype={
$0(){return this.a.Vw(this.b.b)},
$S:0}
C.dL2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dL3.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dL4.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dL5.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dL6.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.dLk.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dm(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a8(this.b,!1).M(s)
return}},
$S:176}
C.dxx.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dxy.prototype={
$0(){return B.d.gK(D.a_M)},
$S:z+48}
C.dxz.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b1(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.cEI,44),w,w,w),w,w,new C.bfx(u,t,v,w),B.at)},
$S:70}
C.fqM.prototype={
$1(d){return A.p8(new C.fqL(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:138}
C.fqL.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dR:B.c,p=A.a([new A.aa(0,B.G,B.x.j(r?0.35:0.08),B.tq,24)],x.V),o=r?B.dT:B.c4
o=A.p(t,t,B.h,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aS.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bwP,B.h,t,t,new A.o(t,t,t,A.m(12),t,new A.a7(B.a3,B.a7,B.w,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aN:B.aG,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.u(A.a([B.T,o,new A.C(E.adz,A.B(A.a([w,B.bc,A.D(A.u(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bo:B.bu,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ih(!0,t,e,B.z,D.esA,new C.fqK(this.b,s),20,B.ad9,t,B.aj,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.h,t,t,new A.o(q,t,t,B.kk,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.fqK.prototype={
$2(d,e){var w=null,v=D.a_M[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.H(s?B.dT:B.c4,B.r,1),q=A.a([new A.aa(0,B.G,B.x.j(s?0.35:0.08),B.e6,8)],x.V),p=A.m(15),o=A.D(new C.a44(v.a,!0,w),1),n=s?B.jd:B.ih,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aN:B.aG,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.Y,!0,w,A.aI(!1,u,!0,A.eq(A.bu(p,A.u(A.a([o,A.p(w,A.u(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bo:B.bu,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.h,n,w,w,w,w,w,w,B.lp,w,w,w)],l),B.af,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fqJ(this.a,v),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)},
$S:74}
C.fqJ.prototype={
$0(){A.a8(this.a,!1).M("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.caU.prototype={
$0(){return this.a.ad4(this.b)},
$S:0}
C.fqb.prototype={
$1(d){return D.fd9},
$S:z+74}
C.fxk.prototype={
$1(d){var w=this
return new C.ZY(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fqd.prototype={
$1(d){return new C.WT(this.a,null)},
$S:z+51}
C.fqc.prototype={
$1(d){return D.fe8},
$S:z+52}
C.cTw.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cTx.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cTv(w,d))},
$S:31}
C.cTv.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cTy.prototype={
$1(d){return this.a.IF()},
$S:2}
C.cTz.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cTs.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cTt.prototype={
$1(d){return this.a.IF()},
$S:2}
C.cTu.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cr7.prototype={
$0(){},
$S:0}
C.crd.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.cre.prototype={
$0(){return this.a.aK8(-1)},
$S:0}
C.crf.prototype={
$1(d){return this.a.n(new C.crc())},
$S:2}
C.crc.prototype={
$0(){},
$S:0}
C.crg.prototype={
$0(){return this.a.aK8(1)},
$S:0}
C.crh.prototype={
$1(d){return this.a.n(new C.crb())},
$S:2}
C.crb.prototype={
$0(){},
$S:0}
C.cri.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aS.j(0.2)
if(s)v=B.aS
else v=this.b.a?B.dT:B.c4
return A.tD(u,u,B.aW,r,u,new C.cra(t,d),B.zQ,s,w,u,new A.ay(v,1,B.r,-1),B.c8)},
$S:1892}
C.cra.prototype={
$1(d){var w=this.a
return w.n(new C.cr8(w,this.b))},
$S:9}
C.cr8.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.crj.prototype={
$1(d){return this.a.n(new C.cr9())},
$S:2}
C.cr9.prototype={
$0(){},
$S:0}
C.crk.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.eVr.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a8(this.b,!1).M(w)},
$S:2}
C.eVs.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.eVt.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a8(this.b,!1).M(w)},
$S:0}
C.eVp.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbsO()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b1(new A.C(D.bkp,new A.en(A.p(r,q.a.c,B.h,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.brF(p,v,this.b.a,u,t,r),r,r,B.at)},
$S:70}
C.eVq.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dG.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aS,B.bT,w)
s.toString
s=A.a([B.aW,s,B.aS],x.O)
return A.aD(!1,B.Y,!0,p,A.aI(!1,v,!0,A.eq(D.dOt,r,new A.o(r,r,A.H(B.c.j(0.4),B.r,1.5),u,r,new A.a7(new A.d5(-1.2+t,-0.5),new A.d5(1.2-t,0.8),B.w,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
$S:125}
C.fp1.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.euO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.euF.prototype={
$0(){return this.a.e=!0},
$S:0}
C.euG.prototype={
$0(){return this.a.e=!1},
$S:0}
C.euM.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.ed(new C.euL(w,this.b),null)},
$S:21}
C.euL.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dR:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aN:B.aG,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.ew(w,u,new A.C(B.adt,A.u(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bo:B.bu,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ab,C.fSL(new C.euI(r,e),r.a),B.ay,A.B(A.a([A.D(A.dV(B.df,new C.euJ(d),w),1),B.aw,A.D(A.bK(B.Rk,new C.euK(r,d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.af,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cZ,w,new A.b5(t,B.V),w)},
$S:97}
C.euI.prototype={
$1(d){return this.b.$1(new C.euH(this.a,d))},
$S:31}
C.euH.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.euJ.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.euK.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).M(w)
return null},
$S:0}
C.euN.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QS(this.b)},
$S:0}
C.euA.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.d,x.Q)
w.push(this.b)
v.d=u.b6s(w)},
$S:0}
C.euE.prototype={
$1(d){return this.bfa(d)},
bfa(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.JD(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iE(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.euD.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("a4<1>")
w=A.z(new A.a4(w,new C.euC(this.b),v),v.k("G.E"))
u.d=t.b6s(w)},
$S:0}
C.euC.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.euP.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iE(this.b,w)},
$S:0}
C.euQ.prototype={
$1(d){return this.a.bwJ(d,this.b)},
$S:z+55}
C.euB.prototype={
$0(){return this.a.a7m(this.b)},
$S:0}
C.fxc.prototype={
$1(d){return new C.ab9(this.a,this.b,this.c,null)},
$S:z+56}
C.euS.prototype={
$0(){return this.a.Y4(this.b)},
$S:0}
C.euT.prototype={
$0(){return this.a.Od(this.b)},
$S:0}
C.euU.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.euV.prototype={
$0(){return this.a.Y5(this.b)},
$S:0}
C.euR.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.euv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.euw.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eux.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
C.euz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pb(),$async$$0)
case 2:if(t.c!=null)t.n(new C.euy(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.euy.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.evh.prototype={
$2(d,e){return d+e.gw3()},
$S:z+59}
C.evd.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eve.prototype={
$0(){return this.a.f=!1},
$S:0}
C.euZ.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dR:B.c,s=A.m(24),r=A.p(v,D.bxe,B.h,v,v,new A.o(B.aF.j(u?0.18:0.08),v,A.H(B.aF.j(0.28),B.r,1),v,v,v,B.a5),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aN:B.aG,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bo:B.bu,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aN:B.aG
u=u?B.dT:B.c4
w=x.p
return A.ew(v,t,new A.C(B.wC,A.u(A.a([r,B.aO,q,B.P,p,B.d3,A.B(A.a([A.D(A.dV(B.mY,new C.euX(d),A.db(v,v,v,v,v,v,v,v,v,o,v,v,B.eW,v,new A.b5(A.m(14),B.V),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bK(D.f6l,new C.euY(d),A.bk(B.aF,v,v,v,v,v,B.eW,v,new A.b5(A.m(14),B.V),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.R,0,B.p),v),v,v,v,v,B.cZ,v,new A.b5(s,B.V),v)},
$S:46}
C.euX.prototype={
$0(){A.a8(this.a,!1).M(!1)
return null},
$S:0}
C.euY.prototype={
$0(){A.a8(this.a,!1).M(!0)
return null},
$S:0}
C.ev7.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dR:B.c,i=A.m(28),h=A.a([new A.aa(0,B.G,B.x.j(k?0.35:0.08),B.fE,28)],x.V),g=k?D.cKQ:B.a_c,f=x.p
g=A.p(m,A.u(A.a([A.p(m,m,B.h,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.enf,B.av,new A.bG(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cq,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(m,m,m,m,m,new A.a7(B.ax,B.aC,B.w,g,m,m),B.n),m,m,m,m,E.adw,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bo:B.bu,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.D(v.b_R(B.b2,B.iL,new C.ev4(v,d),l,"Camera import","Scan QR"),1),B.aw,A.D(v.b_R(B.cC,M.xf,new C.ev5(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bo:B.bu,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aF.j(k?0.14:0.06)
q=A.m(16)
p=A.H(B.aF.j(0.28),B.r,1)
o=A.p(m,D.bwE,B.h,m,m,new A.o(B.aF.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aN:B.aG,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.u(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bo:B.bu,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bq(!0,new A.C(B.uj,A.p(m,A.u(A.a([g,new A.C(B.adu,A.u(A.a([w,B.T,u,B.bt,t,B.T,A.aD(!1,B.Y,!0,m,A.aI(!1,s,!0,A.p(m,A.B(A.a([o,B.bc,n,A.V(B.ek,k?B.bo:B.bu,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bB,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.ev6(v,d,l),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.R,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ah,!0,!0)},
$S:34}
C.ev4.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).M(null)
w=2
return A.b(u.a.uD("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ev5.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).M(null)
w=2
return A.b(u.a.uD("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ev6.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).M(null)
w=2
return A.b(u.a.M8(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ev2.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dR:B.c,m=A.m(24),l=A.a([new A.aa(0,B.G,B.x.j(o?0.35:0.08),B.eK,24)],x.V),k=o?B.dT:B.c4
k=A.p(q,q,B.h,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bo:B.bu
u=A.bu(w,new A.a3(48,48,C.aN_(!0,A.m(12),48,Q.KL,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aN:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zE(v.gw3())
s=x.p
r=this.a
return A.bq(!0,new A.C(B.uj,A.p(q,A.u(A.a([B.T,k,new A.C(D.adr,A.B(A.a([u,B.bc,A.D(A.u(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bo:B.bu,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zt,r.ccN(B.t1,B.aS,new C.ev0(d),p,"QR code or backup file","Transfer project"),r.aXW(!0,B.e4,B.aF,new C.ev1(d),p,"Remove from this device","Delete project"),B.T],s),B.m,q,B.e,B.R,0,B.p),B.h,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ah,!0,!0)},
$S:34}
C.ev0.prototype={
$0(){A.a8(this.a,!1).M("transfer")
return null},
$S:0}
C.ev1.prototype={
$0(){A.a8(this.a,!1).M("delete")
return null},
$S:0}
C.ev3.prototype={
$1(d){return this.bfb(d)},
bfb(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.JD(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uP(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.evk.prototype={
$0(){var w=this.a
w.a.bn()
w.n(new C.evj(w))},
$S:0}
C.evj.prototype={
$0(){return this.a.r++},
$S:0}
C.evl.prototype={
$0(){var w=this.a
return w.n(new C.evi(w))},
$S:0}
C.evi.prototype={
$0(){return this.a.r++},
$S:0}
C.euW.prototype={
$0(){var w=this.a.c
w.toString
return A.iE(w,null)},
$S:0}
C.ev_.prototype={
$0(){return this.a.c6j(this.b)},
$S:0}
C.evg.prototype={
$0(){var w=this.a
return w.n(new C.evf(w,this.b))},
$S:0}
C.evf.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eva.prototype={
$0(){return this.a.uD("scan")},
$S:0}
C.evb.prototype={
$0(){return this.a.uD("file")},
$S:0}
C.evc.prototype={
$1(d){return this.a.ccO(d,this.b)},
$S:z+60}
C.ev9.prototype={
$0(){return this.a.De(this.b)},
$S:0}
C.ev8.prototype={
$0(){return this.a.Yy(this.b,this.c)},
$S:0}
C.cqz.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cqy.prototype={
$1(d){return d.ac()},
$S:z+62}
C.cqw.prototype={
$1(d){return C.haR(A.Z(d,x.N,x.z))},
$S:z+63}
C.cqx.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fat.prototype={
$1(d){return d.y===D.k3},
$S:z+2}
C.fxA.prototype={
$1(d){return C.bxp(d,this.a)},
$S:z+2}
C.f9F.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bJc.prototype={
$1(d){return!d.as},
$S:z+1}
C.bJb.prototype={
$1(d){return d.ac()},
$S:z+15}
C.bJ8.prototype={
$1(d){return C.fN0(A.Z(d,x.N,x.z))},
$S:z+14}
C.bJ9.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bJa.prototype={
$1(d){return J.k(d)},
$S:17}
C.f1P.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+13}
C.eYF.prototype={
$1(d){return C.fDL(A.Z(d,x.N,x.z))},
$S:z+67}
C.eYG.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.eYH.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+13}
C.fq2.prototype={
$1(d){return J.k(d)},
$S:17}
C.fq3.prototype={
$1(d){return d.a},
$S:z+69}
C.fq4.prototype={
$1(d){return d.length!==0},
$S:3}
C.fq5.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fq6.prototype={
$1(d){return d.QS(null).ac()},
$S:z+70}
C.fxy.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.faV.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fd4.prototype={
$1(d){return C.ai8(A.Z(d,x.N,x.z))},
$S:z+8}
C.fd5.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fd6.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fd7.prototype={
$1(d){return d.ac()},
$S:z+5}
C.fd8.prototype={
$1(d){return C.tj(d,this.a)},
$S:z+2}
C.fpQ.prototype={
$1(d){return C.tj(d,this.a)},
$S:z+2}
C.fxt.prototype={
$1(d){return C.ai8(A.Z(d,x.N,x.z))},
$S:z+8}
C.fxu.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fxv.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.faC.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.faD.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fxE.prototype={
$1(d){return!d.as},
$S:z+1}
C.fad.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fae.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.faf.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+19}
C.fxl.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fdQ.prototype={
$1(d){return d.Q},
$S:z+72}
C.fpM.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fd1.prototype={
$1(d){return C.ai8(A.Z(d,x.N,x.z))},
$S:z+8}
C.fd2.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fd3.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fpK.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eZa.prototype={
$1(d){return d.length!==0},
$S:3}
C.eZb.prototype={
$1(d){return C.fN0(A.Z(d,x.N,x.z))},
$S:z+14}
C.eZc.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.eZd.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.eZe.prototype={
$1(d){return d.length!==0},
$S:3}
C.eZr.prototype={
$2(d,e){return d.eN(new C.eZs(e))},
$S:1893}
C.eZs.prototype={
$1(d){$.al.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1894}
C.eZo.prototype={
$1(d){return C.hwy(d,this.a)},
$S:z+73}
C.eZp.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.eZq.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f2t.prototype={
$1(d){return d.a},
$S:z+49}
C.f2u.prototype={
$1(d){return d.length!==0},
$S:3}
C.f2v.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f4v.prototype={
$1(d){return d.ac()},
$S:z+5}
C.f91.prototype={
$1(d){return C.fY9(d,C.F1(d,this.a))},
$S:z+5}
C.f92.prototype={
$1(d){return C.fYa(d,C.F1(d,this.a))},
$S:z+5};(function aliases(){var w=C.aIb.prototype
w.bp9=w.p
w=C.aKi.prototype
w.brs=w.p
w=C.aKj.prototype
w.brt=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.azO.prototype,"gc9Q","c9R",25)
var s
w(s=C.awV.prototype,"gc3_","c30",42)
v(s,"gaIp","LH",0)
v(s,"gchJ","zL",0)
v(s,"gbEi","Mm",0)
v(s,"gcvc","xn",0)
v(s,"gcbM","Ze",0)
v(s,"gbzN","M4",0)
v(s,"gbEJ","UZ",0)
w(s,"gbJ9","bJa",71)
v(s,"gbup","yP",0)
v(C.awW.prototype,"gcv8","E4",0)
v(s=C.aAo.prototype,"gacH","uQ",0)
v(s,"gc5B","Yq",0)
v(s,"gaMo","Gz",0)
v(s=C.aAl.prototype,"gcru","a0f",0)
v(s,"gacH","uQ",0)
v(s,"gcfS","ZU",0)
v(s,"gc6w","YD",0)
w(s,"gc2U","c2V",30)
v(s,"gbEA","GE",0)
v(s,"gcso","csq",3)
v(s,"gbVo","WC",0)
w(s,"gc1q","c1r",23)
v(s,"gc5l","c5m",3)
v(s=C.ayN.prototype,"gc_h","NN",0)
v(s,"gc_j","c_k",3)
v(s,"gbBh","a7_",0)
v(s=C.aAn.prototype,"gbHI","Vs",0)
v(s,"gbRS","W5",0)
v(s,"gclZ","a_I",0)
v(s,"gcii","a_k",0)
v(C.aAm.prototype,"gci0","aer",0)
v(C.apH.prototype,"gc1o","Y3",0)
v(C.avI.prototype,"ga0_","IF",3)
v(C.avH.prototype,"ga0_","IF",3)
v(C.aus.prototype,"ga0_","IF",3)
v(s=C.aBP.prototype,"gaXk","OI",0)
v(s,"gbtg","TL",0)
v(s,"gc6k","c6l",3)
w(C.aBO.prototype,"gc2e","c2f",57)
u(C.aBQ.prototype,"gaMi",0,0,null,["$1","$0"],["Gy","bCx"],58,0,0)
t(C,"h4i","hFP",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aB,[C.alF,C.tB,C.mQ,C.G4,C.ack,C.Ij,C.tC,C.Ir,C.Em,C.baL,C.aFR,C.amP,C.d0k,C.lj,C.aPQ,C.aPP,C.aNV,C.t5,C.qo,C.l3,C.hQ,C.kn,C.aDR])
u(A.i3,[C.fhG,C.fhF,C.fhH,C.fqF,C.f7Z,C.f8_,C.f84,C.ffp,C.ffo,C.ffn,C.bXJ,C.fra,C.fr2,C.fre,C.faK,C.dyd,C.dy8,C.dy9,C.dxM,C.dxI,C.dys,C.dyt,C.dym,C.dyn,C.dyu,C.dyv,C.fb7,C.fcZ,C.fd_,C.fpO,C.fxs,C.faB,C.fqj,C.d_x,C.cZU,C.d_2,C.d_j,C.cZZ,C.d_4,C.cZW,C.d_8,C.d_9,C.d_7,C.d_o,C.d_n,C.d0Z,C.d1_,C.d10,C.d_L,C.d_Q,C.d_P,C.czi,C.czk,C.cSK,C.cT8,C.cT9,C.cTc,C.cTe,C.cTf,C.cTg,C.cTi,C.cTj,C.dLo,C.dKO,C.dKJ,C.dKh,C.dKu,C.dKx,C.dKG,C.dK5,C.dKR,C.dKL,C.dK7,C.dK8,C.dK9,C.dKe,C.dKc,C.dKb,C.dKr,C.dKs,C.dKm,C.dKY,C.dKU,C.d_W,C.d_X,C.fbb,C.fbc,C.fbd,C.fb9,C.fba,C.fbg,C.fbh,C.fbi,C.fbe,C.fbf,C.d0f,C.d05,C.d00,C.d0a,C.d0b,C.d0e,C.d02,C.d0h,C.d0i,C.d0j,C.eVZ,C.exE,C.dfw,C.dfG,C.dfH,C.dfI,C.dfL,C.dfK,C.dfM,C.dfR,C.dfS,C.c3m,C.c3l,C.c3h,C.c3i,C.c3j,C.c3k,C.c3r,C.c3o,C.c3p,C.dLa,C.dLd,C.dLc,C.dLj,C.dLk,C.dxx,C.fqM,C.fqb,C.fxk,C.fqd,C.fqc,C.cTx,C.cTy,C.cTt,C.crf,C.crh,C.cri,C.cra,C.crj,C.eVr,C.fp1,C.euM,C.euI,C.euE,C.euC,C.euQ,C.fxc,C.euZ,C.ev7,C.ev2,C.ev3,C.evc,C.cqy,C.cqw,C.cqx,C.fat,C.fxA,C.f9F,C.bJc,C.bJb,C.bJ8,C.bJ9,C.bJa,C.eYF,C.eYG,C.fq2,C.fq3,C.fq4,C.fq5,C.fq6,C.fxy,C.faV,C.fd4,C.fd5,C.fd7,C.fd8,C.fpQ,C.fxt,C.fxu,C.fxv,C.faC,C.faD,C.fxE,C.fad,C.fae,C.fxl,C.fdQ,C.fpM,C.fd1,C.fd2,C.fpK,C.eZa,C.eZb,C.eZc,C.eZd,C.eZe,C.eZs,C.eZo,C.eZp,C.f2t,C.f2u,C.f4v,C.f91,C.f92])
u(A.as,[C.aVb,C.ai6,C.aR2,C.Wz,C.b6w,C.baJ,C.beq,C.brQ,C.bhH,C.aaO,C.bep,C.aaN,C.beo,C.ayO,C.aEU,C.aaP,C.If,C.baK,C.aa5,C.baI,C.baN,C.aV9,C.apH,C.ab9])
u(A.n6,[C.b77,C.b8i,C.b89,C.aDM,C.bdt,C.baM,C.b9R,C.bfx,C.brF])
u(A.jk,[C.fr7,C.fr8,C.fr9,C.fr0,C.fr1,C.frc,C.frd,C.dyp,C.dyb,C.dye,C.dxT,C.dxU,C.dxV,C.dxS,C.dy_,C.dxR,C.dy0,C.dy1,C.dxQ,C.dy2,C.dxP,C.dy3,C.dxO,C.dy4,C.dxG,C.dxH,C.dxN,C.dy5,C.dxL,C.dy6,C.dxK,C.dxW,C.dxJ,C.dxX,C.dxF,C.dxY,C.dxZ,C.dyq,C.dyr,C.dyf,C.dyg,C.dyh,C.dyi,C.dyj,C.dyk,C.dyl,C.dyx,C.dyo,C.fb8,C.cZS,C.cZQ,C.cZR,C.cZT,C.d_w,C.d_l,C.d_i,C.cZV,C.d_m,C.d_0,C.d_1,C.d_3,C.d_k,C.d__,C.d_5,C.d_t,C.d_f,C.d_e,C.d_g,C.d_h,C.d_a,C.d_c,C.d_d,C.d_6,C.d_p,C.d_s,C.cZX,C.cZY,C.d0Y,C.d0X,C.d0W,C.d0V,C.d11,C.d0U,C.d12,C.d_M,C.d_N,C.d_O,C.d_R,C.d_K,C.d_J,C.czj,C.cSJ,C.cSW,C.cSV,C.cTa,C.cSU,C.cTb,C.cST,C.cSS,C.cTd,C.cSR,C.cT3,C.cT2,C.cTk,C.dLn,C.dLm,C.dLp,C.dLq,C.dLr,C.dLl,C.dLt,C.dLs,C.dKM,C.dKN,C.dKP,C.dKi,C.dKw,C.dKv,C.dKy,C.dKI,C.dKB,C.dKA,C.dKC,C.dKz,C.dKD,C.dKE,C.dKH,C.dK6,C.dKK,C.dKa,C.dKd,C.dKf,C.dKQ,C.dKl,C.dKj,C.dKn,C.dKo,C.dKk,C.dKp,C.dKt,C.dKZ,C.dL_,C.dKS,C.dKV,C.dKW,C.dKX,C.dL1,C.dKT,C.dKg,C.d_V,C.d_U,C.d_Z,C.d08,C.d0_,C.exD,C.dfx,C.dfu,C.dfv,C.dfF,C.dfE,C.dfD,C.dfN,C.dfC,C.dfO,C.dfB,C.dfP,C.dfA,C.dfQ,C.dfz,C.dfy,C.dfJ,C.dfT,C.dg1,C.dLb,C.dLf,C.dLg,C.dL7,C.dL8,C.dL9,C.dLe,C.dLi,C.dLh,C.dL2,C.dL3,C.dL4,C.dL5,C.dL6,C.dxy,C.fqJ,C.caU,C.cTw,C.cTv,C.cTz,C.cTs,C.cTu,C.cr7,C.crd,C.cre,C.crc,C.crg,C.crb,C.cr8,C.cr9,C.crk,C.eVs,C.eVt,C.euO,C.euF,C.euG,C.euH,C.euJ,C.euK,C.euN,C.euA,C.euD,C.euP,C.euB,C.euS,C.euT,C.euU,C.euV,C.euR,C.euv,C.euw,C.eux,C.euz,C.euy,C.evd,C.eve,C.euX,C.euY,C.ev4,C.ev5,C.ev6,C.ev0,C.ev1,C.evk,C.evj,C.evl,C.evi,C.euW,C.ev_,C.evg,C.evf,C.eva,C.evb,C.ev9,C.ev8])
u(A.af,[C.alM,C.QR,C.Xg,C.Xk,C.Xi,C.WR,C.amS,C.amM,C.XU,C.amQ,C.Ye,C.Yf,C.a44,C.WT,C.WS,C.Wq,C.ZY,C.Ea,C.aul,C.apG,C.apA,C.apF,C.Ml])
u(A.ag,[C.azO,C.baG,C.awV,C.bb0,C.awW,C.b8g,C.aAo,C.aAl,C.ayN,C.aAn,C.aAm,C.bfP,C.aIb,C.avI,C.avH,C.aus,C.brI,C.aKi,C.aKj,C.aBP,C.bha,C.aBO,C.bts])
u(A.kz,[C.dya,C.dyc,C.dy7,C.dyw,C.fd0,C.bJ7,C.d_v,C.d_u,C.d_b,C.d_q,C.d_r,C.d_S,C.dKF,C.dKq,C.dL0,C.d07,C.d06,C.d04,C.d09,C.d0c,C.d0d,C.d_Y,C.d01,C.d03,C.d0g,C.c3f,C.c3n,C.c3s,C.dxz,C.fqL,C.fqK,C.eVp,C.eVq,C.euL,C.evh,C.cqz,C.f1P,C.eYH,C.fd6,C.faf,C.fd3,C.eZr,C.eZq,C.f2v])
t(C.bfy,C.aIb)
u(A.md,[C.a99,C.aGy,C.G5,C.ai7,C.cqA,C.cqB])
t(C.brG,C.aKi)
t(C.brH,C.aKj)
t(C.aBQ,C.bts)
t(C.b50,A.b4Q)
t(C.brJ,A.a3K)
t(C.b5_,C.brJ)
w(C.aIb,A.eJ)
w(C.aKi,A.c7)
w(C.aKj,A.c7)
v(C.bts,A.ev)
v(C.brJ,A.iR)})()
A.kf(b.typeUniverse,JSON.parse('{"aVb":{"as":[],"r":[]},"b77":{"aA":[]},"alM":{"af":[],"r":[]},"azO":{"ag":["alM"]},"QR":{"af":[],"r":[]},"ai6":{"as":[],"r":[]},"aR2":{"as":[],"r":[]},"baG":{"ag":["QR"]},"Xg":{"af":[],"r":[]},"Xk":{"af":[],"r":[]},"Xi":{"af":[],"r":[]},"WR":{"af":[],"r":[]},"awV":{"ag":["Xg"]},"bb0":{"ag":["Xk"]},"awW":{"ag":["Xi"]},"Wz":{"as":[],"r":[]},"b8i":{"aA":[]},"b89":{"aA":[]},"b8g":{"ag":["WR"]},"aDM":{"aA":[]},"bdt":{"aA":[]},"b6w":{"as":[],"r":[]},"amS":{"af":[],"r":[]},"amM":{"af":[],"r":[]},"XU":{"af":[],"r":[]},"aaP":{"as":[],"r":[]},"aAo":{"ag":["amS"]},"aAl":{"ag":["amM"]},"baJ":{"as":[],"r":[]},"baM":{"aA":[]},"beq":{"as":[],"r":[]},"b9R":{"aA":[]},"brQ":{"as":[],"r":[]},"bhH":{"as":[],"r":[]},"ayN":{"ag":["XU"]},"aaO":{"as":[],"r":[]},"bep":{"as":[],"r":[]},"aaN":{"as":[],"r":[]},"beo":{"as":[],"r":[]},"ayO":{"as":[],"r":[]},"aEU":{"as":[],"r":[]},"If":{"as":[],"r":[]},"amQ":{"af":[],"r":[]},"Ye":{"af":[],"r":[]},"Yf":{"af":[],"r":[]},"aAn":{"ag":["amQ"]},"baK":{"as":[],"r":[]},"aa5":{"as":[],"r":[]},"baI":{"as":[],"r":[]},"baN":{"as":[],"r":[]},"aAm":{"ag":["Ye"]},"bfP":{"ag":["Yf"]},"aV9":{"as":[],"r":[]},"a44":{"af":[],"r":[]},"bfy":{"ag":["a44"]},"bfx":{"aA":[]},"apH":{"as":[],"r":[]},"WT":{"af":[],"r":[]},"WS":{"af":[],"r":[]},"Wq":{"af":[],"r":[]},"ZY":{"af":[],"r":[]},"avI":{"ag":["WT"]},"avH":{"ag":["WS"]},"aus":{"ag":["Wq"]},"brI":{"ag":["ZY"]},"Ea":{"af":[],"r":[]},"aul":{"af":[],"r":[]},"brG":{"ag":["Ea"]},"brH":{"ag":["aul"]},"brF":{"aA":[]},"apG":{"af":[],"r":[]},"aBP":{"ag":["apG"]},"ab9":{"as":[],"r":[]},"apA":{"af":[],"r":[]},"apF":{"af":[],"r":[]},"bha":{"ag":["apA"]},"aBO":{"ag":["apF"]},"Ml":{"af":[],"r":[]},"aBQ":{"ag":["Ml"],"ev":[]},"b5_":{"iR":[],"f5":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.az
return{e2:w("aNV"),Q:w("qo"),n:w("bs<n,n>"),c5:w("aPP"),dY:w("aPQ"),d:w("ep<n?>"),e:w("G4"),B:w("mQ"),P:w("hQ"),k:w("kn"),x:w("aw<~>"),f5:w("O<ag1>"),V:w("O<aa>"),t:w("O<qo>"),O:w("O<w>"),ac:w("O<ep<n?>>"),I:w("O<mQ>"),u:w("O<hQ>"),_:w("O<kn>"),cl:w("O<aw<ak<a1<n,@>>>>"),R:w("O<mT>"),cq:w("O<ak<+(P,P)>>"),ez:w("O<a1<n,aB>>"),gE:w("O<a1<n,n>>"),c7:w("O<a1<n,@>>"),fD:w("O<m3>"),bp:w("O<nR>"),g:w("O<v>"),v:w("O<hx>"),L:w("O<+(n,n)>"),G:w("O<+(P,P)>"),bF:w("O<+count,id,name(I,n,n)>"),A:w("O<cJ>"),s:w("O<n>"),aS:w("O<iH>"),p:w("O<r>"),C:w("O<f5>"),D:w("O<l3>"),fp:w("O<Ij>"),M:w("O<Ir>"),gZ:w("O<aDR>"),Y:w("O<ack>"),E:w("O<aFR>"),F:w("O<P>"),dC:w("O<I>"),dS:w("O<aA?>"),d4:w("O<n?>"),J:w("cn<ag<af>>"),b:w("ak<mQ>"),do:w("ak<hQ>"),r:w("ak<kn>"),U:w("ak<a1<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(I,n,n)>"),h:w("ak<n>"),c:w("ak<l3>"),j:w("ak<@>"),fK:w("br<n,n>"),d2:w("br<n,ak<a1<n,@>>>"),a:w("a1<n,@>"),f:w("a1<@,@>"),gv:w("J<n,G6>"),w:w("iC"),g2:w("qH"),bV:w("alF"),fL:w("co"),K:w("aB"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(P,ak<hQ>)"),cs:w("+count,id,name(I,n,n)"),N:w("n"),e7:w("bl<P>"),gc:w("dz"),b4:w("cx<I>"),W:w("k3<n>"),l:w("r"),cM:w("f5"),i:w("l3"),cc:w("Em"),bw:w("aaN<n?>"),cy:w("It"),q:w("mC"),y:w("T"),gR:w("P"),z:w("@"),S:w("I"),eK:w("ak<kn>?"),m:w("amP?"),cT:w("v?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,I)?"),X:w("+qrPayload,token,usesRemaining(n,n,I)?"),gF:w("+members,trees,viewOnly(I,I,T)?"),Z:w("q1?"),T:w("n?"),aD:w("dz?"),o:w("l3?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aPw=new A.bv(B.h_,B.bC,B.h_,B.bC)
D.a6v=new A.bv(B.h_,B.jP,B.h_,B.jP)
D.aPI=new A.bv(B.j7,B.bC,B.bC,B.bC)
D.aPM=new A.ay(B.cY,1.4,B.r,-1)
D.aPW=new A.ay(B.al,1,B.r,-1)
D.aRi=new A.aX(0,1/0,64,1/0)
D.aRl=new A.aX(0,84,0,1/0)
D.asy=w([B.lS,B.q7,B.c],x.O)
D.bGV=new A.a7(B.ax,B.aC,B.w,D.asy,null,null)
D.aS7=new A.o(null,null,null,null,null,D.bGV,B.n)
D.cKm=w([B.aS,B.bT],x.O)
D.bIZ=new A.a7(B.b1,B.b5,B.w,D.cKm,null,null)
D.aSo=new A.o(null,null,null,null,null,D.bIZ,B.n)
D.aYd=new A.fb(null,null,null,null,null,E.jx,null,null,null,null)
D.a7O=new A.cw(B.A,null,null,D.aYd,null)
D.jY=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eD1=new A.F(!0,D.jY,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVa=new A.x("No books on the shelf yet.",null,D.eD1,null,null,null,null,null,null,null,null,null)
D.dOu=new A.C(B.no,D.eVa,null)
D.aWQ=new A.cw(B.A,null,null,D.dOu,null)
D.aXF=new A.cw(B.A,null,null,X.T3,null)
D.aZz=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.aZW=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.a8H=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b1l=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b1A=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.a9M=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b51=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b5m=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.D4=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b6J=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b8K=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.abf=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eQ3=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bdj=new A.ep(null,D.eQ3,B.eU,null,x.d)
D.eY8=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bdl=new A.ep(null,D.eY8,B.eU,null,x.d)
D.bdT=new A.b8(38e5)
D.beE=new A.i4(0,10,0,10)
D.beO=new A.M(0,1,0,0)
D.beX=new A.i4(0,4,0,4)
D.bfd=new A.M(10,10,14,10)
D.bfn=new A.i4(10,4,10,4)
D.bfx=new A.i4(10,8,10,8)
D.bfy=new A.M(10,8,8,8)
D.bg_=new A.M(12,6,12,2)
D.bgg=new A.M(14,10,6,6)
D.bgh=new A.M(14,12,14,0)
D.bgl=new A.M(14,12,14,8)
D.bgo=new A.M(14,12,8,14)
D.bgs=new A.i4(14,14,14,14)
D.bh7=new A.M(16,2,16,10)
D.bhh=new A.M(16,6,16,30)
D.bhj=new A.M(16,6,16,8)
D.adr=new A.M(18,16,18,8)
D.bhU=new A.M(18,20,18,22)
D.adv=new A.M(18,24,18,24)
D.bi_=new A.M(18,30,18,30)
D.bih=new A.M(20,10,12,20)
D.biv=new A.M(20,18,16,18)
D.bix=new A.M(20,18,20,6)
D.bjl=new A.M(24,32,24,28)
D.bjm=new A.M(24,36,24,32)
D.bjp=new A.M(26,26,24,14)
D.bjD=new A.M(2,4,2,8)
D.bjH=new A.M(30,0,30,0)
D.bjS=new A.M(38,22,22,22)
D.adN=new A.M(40,24,24,24)
D.bjU=new A.i4(40,40,40,40)
D.bjW=new A.M(46,30,30,30)
D.adQ=new A.M(4,0,0,8)
D.bkl=new A.M(56,40,40,40)
D.bkp=new A.M(1.25,1.25,1.25,1.25)
D.bkq=new A.M(60,0,60,0)
D.bkt=new A.M(6,14,6,16)
D.bkF=new A.i4(7,3,7,3)
D.bl6=new A.M(8,9,8,9)
D.bla=new A.M(5,1.5,5,1.5)
D.blk=new A.M(6,2.5,6,2.5)
D.f8c=new A.x("Signature",null,B.mV,null,null,null,null,null,null,null,null,null)
D.blC=new A.bF(1,B.bp,D.f8c,null)
D.f5w=new A.x("Tell the AI what to fix",null,B.dQ,null,null,null,null,null,null,null,null,null)
D.bmj=new A.bF(1,B.bp,D.f5w,null)
D.eK_=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7o=new A.x("Worksheets",null,D.eK_,null,null,null,null,null,null,null,null,null)
D.eK7=new A.F(!0,E.a8n,null,null,null,null,13,B.cq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6j=new A.x("Track your project spending",null,D.eK7,null,null,null,null,null,null,null,null,null)
D.cD_=w([D.f7o,B.av,D.f6j],x.p)
D.bb8=new A.fk(B.aj,B.e,B.j,B.F,null,B.p,null,0,D.cD_,null)
D.bmo=new A.bF(1,B.bp,D.bb8,null)
D.eFu=new A.F(!0,E.jx,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePi=new A.x("FAMILY LIBRARY",null,D.eFu,null,null,null,null,null,null,null,null,null)
D.bmD=new A.bF(1,B.bp,D.ePi,null)
D.Kq=new C.G4("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Wy=new C.G5(0,"male")
D.aeG=new C.G5(1,"female")
D.wJ=new C.G5(2,"unknown")
D.rK=new C.ai7(0,"owner")
D.Kr=new C.ai7(1,"editor")
D.k3=new C.ai7(2,"viewer")
D.afp=new A.a0(61199,"MaterialIcons",!1)
D.bp1=new A.a0(61504,"MaterialIcons",!1)
D.bp2=new A.a0(61505,"MaterialIcons",!1)
D.bp4=new A.a0(61587,"MaterialIcons",!1)
D.bpa=new A.a0(61890,"MaterialIcons",!1)
D.bq3=new A.a0(63034,"MaterialIcons",!0)
D.bqU=new A.a0(63429,"MaterialIcons",!1)
D.ahz=new A.a0(984520,"MaterialIcons",!1)
D.bpA=new A.a0(62776,"MaterialIcons",!1)
D.btb=new A.ad(D.bpA,26,B.aW,null,null,null)
D.bo0=new A.a0(57648,"MaterialIcons",!1)
D.btt=new A.ad(D.bo0,14,B.c,null,null,null)
D.btL=new A.ad(B.Eb,17,null,null,null,null)
D.buf=new A.ad(E.Xj,null,null,null,null,null)
D.bui=new A.ad(B.j2,18,E.jx,null,null,null)
D.X3=new A.a0(62044,"MaterialIcons",!1)
D.buo=new A.ad(D.X3,null,B.aS,null,null,null)
D.bvd=new A.ad(B.dP,16,null,null,null,null)
D.bvk=new A.ad(D.X3,32,B.aS,null,null,null)
D.bvC=new A.ad(E.afq,18,B.cY,null,null,null)
D.bwE=new A.ad(B.En,22,B.aF,null,null,null)
D.bwP=new A.ad(B.dP,22,B.aW,null,null,null)
D.bx_=new A.ad(O.X8,22,B.c,null,null,null)
D.bx4=new A.ad(B.rV,52,B.c,null,null,null)
D.bxe=new A.ad(B.En,30,B.aF,null,null,null)
D.aia=new A.ad(B.t1,22,B.c,null,null,null)
D.bxG=new A.ad(B.dP,17,null,null,null,null)
D.bxZ=new A.ad(B.uE,26,B.cY,null,null,null)
D.byI=new A.ad(B.Xw,16,null,null,null,null)
D.bzq=new A.ad(B.rV,24,B.c,null,null,null)
D.bzv=new A.ad(B.KR,20,B.qA,null,null,null)
D.bzA=new A.ad(B.E9,null,B.bT,null,null,null)
D.bzH=new A.ad(B.j2,18,B.c,null,null,null)
D.bB4=new A.ad(B.e4,16,B.al,null,null,null)
D.bBf=new A.ad(D.X3,20,B.aS,null,null,null)
D.aiC=new A.ad(B.hl,20,null,null,null,null)
D.bBK=new A.ad(B.ct,18,D.jY,null,null,null)
D.bC1=new A.ad(B.x4,28,B.c,null,null,null)
D.bC9=new A.ad(B.KH,null,B.fO,null,null,null)
D.bCt=new A.ad(B.x4,24,B.c,null,null,null)
D.bCT=new A.ad(B.rV,null,B.aS,null,null,null)
D.bCU=new A.ad(B.jH,20,B.cY,null,null,null)
D.bDb=new A.ad(B.Eb,16,null,null,null,null)
D.bEF=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.er,!0,null,null,null,null)
D.cR_=w([B.bs,B.aS,B.f1,B.aW],x.O)
D.bFq=new A.a7(B.ax,B.aC,B.w,D.cR_,null,null)
D.b5O=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bal=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cA6=w([D.b5O,D.bal],x.O)
D.bFB=new A.a7(B.b1,B.b5,B.w,D.cA6,null,null)
D.cLY=w([B.eQ,B.fm,B.f1],x.O)
D.bFF=new A.a7(B.ax,B.aC,B.w,D.cLY,null,null)
D.aah=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.aZX=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cBY=w([D.aah,D.aZX],x.O)
D.bGc=new A.a7(B.b1,B.b5,B.w,D.cBY,null,null)
D.b1J=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.as0=w([D.b1J,D.aah],x.O)
D.bGw=new A.a7(B.ax,B.aC,B.w,D.as0,null,null)
D.a9r=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b3B=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cLe=w([D.a9r,D.b3B],x.O)
D.bH5=new A.a7(B.a3,B.a7,B.w,D.cLe,null,null)
D.cWB=w([B.bQ,B.mt],x.O)
D.bH7=new A.a7(B.b1,B.b5,B.w,D.cWB,null,null)
D.b5K=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b7a=new A.w(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cXo=w([D.b5K,D.jY,D.jY,D.b7a],x.O)
D.cZm=w([0,0.07,0.9,1],x.F)
D.bHD=new A.a7(B.a3,B.a7,B.w,D.cXo,D.cZm,null)
D.bHN=new A.a7(B.ax,B.aC,B.w,B.Of,null,null)
D.cWc=w([B.aW,B.aS,B.bT],x.O)
D.bIL=new A.a7(B.ax,B.aC,B.w,D.cWc,null,null)
D.c31=w([B.bs,B.aW,B.eQ],x.O)
D.c38=w([B.bE,B.aB,B.jw],x.O)
D.c3a=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b4A=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.c9e=w([D.b4A,E.aa0],x.O)
D.dKI=new A.v(1,2)
D.ep2=new A.cJ(B.aV,D.dKI,3)
D.apk=w([D.ep2],x.A)
D.cgs=w([B.h2,B.cb,B.fe],x.O)
D.cj4=w([B.bK,B.bw,B.bi],x.O)
D.bn5=new C.tB("classic","Classic leather","Gold-edged brown leather",D.as0,E.jx,E.jx,"\u2766",B.L,!0,!1,!1,!1)
D.aZo=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.b9r=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cEt=w([D.aZo,D.b9r],x.O)
D.aa3=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bn0=new C.tB("ornate","Ornate gold","Double gold border and flourishes",D.cEt,D.aa3,D.aa3,"\u2726",B.L,!0,!0,!0,!1)
D.b1s=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.b6p=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cxl=w([D.b1s,D.b6p],x.O)
D.bn_=new C.tB("parchment","Parchment","Old paper with dark ink",D.cxl,D.D4,G.ie,"\u2767",B.L,!0,!1,!1,!0)
D.a89=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b89=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.cUF=w([D.a89,D.b89],x.O)
D.b4d=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.b7C=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bn2=new C.tB("minimal","Clean paper","Plain and elegant, like a printed book",D.cUF,D.b4d,D.b7C,"",B.L,!0,!0,!1,!0)
D.bn4=new C.tB("midnight","Midnight","Deep blue with silver stars",K.ash,B.cp,B.bM,"\u2727",B.L,!0,!0,!1,!1)
D.bmZ=new C.tB("emerald","Emerald library","Green cloth, title on the left",Y.apF,E.jx,B.hg,"\u25c6",B.be,!0,!1,!1,!1)
D.b8u=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.cTf=w([B.eZ,D.b8u],x.O)
D.b58=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.b62=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bn3=new C.tB("rose","Rose vintage","Burgundy with rose-gold lettering",D.cTf,D.b58,D.b62,"\u2740",B.L,!0,!1,!0,!1)
D.cX4=w([B.cV,K.rn],x.O)
D.bn1=new C.tB("modern","Modern","Dark, bold, left-aligned",D.cX4,B.b_,B.c,"",B.be,!1,!0,!1,!1)
D.Zr=w([D.bn5,D.bn0,D.bn_,D.bn2,D.bn4,D.bmZ,D.bn3,D.bn1],A.az("O<tB>"))
D.cwS=w([B.bT,B.bj],x.O)
D.b5C=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cxw=w([D.a89,D.b5C],x.O)
D.b1p=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cyW=w([D.b1p,B.da],x.O)
D.cAj=w([B.b9,B.iC,B.nS],x.O)
D.cAG=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.aZT=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b2Y=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.cZj=w([D.a9r,D.aZT,D.b2Y],x.O)
D.bn6=new C.tC("leather","Leather",D.cZj,"vintage")
D.cHg=w([B.dD,B.IY,N.Tv],x.O)
D.bnd=new C.tC("midnight","Midnight",D.cHg,"starry")
D.cAk=w([B.fv,B.eF,B.kT],x.O)
D.bnc=new C.tC("forest","Forest",D.cAk,"story")
D.d_X=w([B.f0,B.eZ,B.jZ],x.O)
D.bn9=new C.tC("burgundy","Burgundy",D.d_X,"royal")
D.ciF=w([B.aB,B.q3,B.n5],x.O)
D.bna=new C.tC("royal","Royal",D.ciF,"royal")
D.cCx=w([B.bw,B.cV,K.rn],x.O)
D.bn7=new C.tC("charcoal","Charcoal",D.cCx,"geo")
D.cZp=w([B.cl,B.dJ,B.w5],x.O)
D.bnb=new C.tC("sunset","Sunset",D.cZp,"sunset")
D.cZY=w([B.iC,B.D5,B.Tw],x.O)
D.bn8=new C.tC("ocean","Ocean",D.cZY,"band")
D.xA=w([D.bn6,D.bnd,D.bnc,D.bn9,D.bna,D.bn7,D.bnb,D.bn8],A.az("O<tC>"))
D.cCU=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cDp=w([B.ai,B.aI,B.M],x.O)
D.cEy=w([B.eZ,B.eF,B.dD,B.hK,B.w8,B.cY,B.kq,B.f4,B.du],x.O)
D.cEz=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.ep3=new A.cJ(B.dq,B.dH,8)
D.cEI=w([D.ep3],x.A)
D.cFH=w([B.c3,B.dJ,B.lg],x.O)
D.cG8=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cHc=w([B.c3,B.hq],x.O)
D.cJ5=w([B.aL,B.D0,B.vY],x.O)
D.cJU=w([B.bI,B.cH,B.dE,B.aL],x.O)
D.cKn=w([B.kp,B.cl,B.u1],x.O)
D.cKQ=w([B.eQ,B.cY],x.O)
D.cLj=w([B.cX,B.fS,B.hJ],x.O)
D.cLu=w([B.b_,B.bj,B.dD],x.O)
D.cLV=w([B.eO,B.dk,B.eF],x.O)
D.cMa=w([B.e9,B.dD,B.IY],x.O)
D.cNn=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a_h=w(["leather","linen","plain","stars","rays"],x.s)
D.bsS=new A.a0(985219,"MaterialIcons",!1)
D.bsr=new A.a0(983781,"MaterialIcons",!1)
D.arM=w([B.afP,B.hS,B.m2,B.hU,D.bsS,B.Ev,B.p3,D.bsr,K.aho,B.x6,B.p5,B.m1],A.az("O<a0>"))
D.a_m=w(["double","single","corners","none"],x.s)
D.cPP=w([B.eP,B.bu,B.f4],x.O)
D.cQ1=w([],x.t)
D.AJ=w([],x.u)
D.cS3=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cU5=w([B.aX,B.fS,B.hK],x.O)
D.cVf=w([B.cJ,B.nU,B.Uc],x.O)
D.cVs=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dc9=new C.lj("construction","Construction","Jobsite & builds",B.Ek)
D.dcg=new C.lj("house","Home Build","Houses & rooms",B.uy)
D.dc6=new C.lj("grocery","Grocery","Store & pantry",B.Y4)
D.dc5=new C.lj("calculator","Calculations","Math & estimates",B.L_)
D.dce=new C.lj("lumber","Materials","Lumber & supplies",B.Lh)
D.dc2=new C.lj("kitchen","Kitchen","Remodel & meals",S.agy)
D.bsp=new A.a0(983756,"MaterialIcons",!1)
D.dc7=new C.lj("landscape","Landscaping","Yard & garden",D.bsp)
D.dc1=new C.lj("plumbing","Plumbing","Pipes & water",B.uK)
D.dch=new C.lj("electrical","Electrical","Wiring & power",B.hk)
D.dc_=new C.lj("store","Retail Shop","Daily business",B.kB)
D.dc0=new C.lj("paint_remodel","Paint & Remodel","Colors & walls",S.agm)
D.brP=new A.a0(983311,"MaterialIcons",!1)
D.dcd=new C.lj("roofing","Roofing","Roofs & exteriors",D.brP)
D.bsC=new A.a0(983986,"MaterialIcons",!1)
D.dbZ=new C.lj("warehouse","Warehouse","Storage & stock",D.bsC)
D.dcb=new C.lj("vehicles","Vehicles","Fleet & transport",B.Ew)
D.bpC=new A.a0(62785,"MaterialIcons",!1)
D.dc4=new C.lj("farm","Farm","Crops & livestock",D.bpC)
D.dc3=new C.lj("restaurant","Restaurant","Food & catering",B.t0)
D.dca=new C.lj("tools","Tools","Workshop gear",B.Eu)
D.dcf=new C.lj("wallet","Cash & Wallet","Quick spending",B.jH)
D.bqP=new A.a0(63395,"MaterialIcons",!1)
D.dcc=new C.lj("concrete","Concrete","Foundation work",D.bqP)
D.dc8=new C.lj("blueprint","Blueprint","Plans & design",Aa.afV)
D.a_M=w([D.dc9,D.dcg,D.dc6,D.dc5,D.dce,D.dc2,D.dc7,D.dc1,D.dch,D.dc_,D.dc0,D.dcd,D.dbZ,D.dcb,D.dc4,D.dc3,D.dca,D.dcf,D.dcc,D.dc8],A.az("O<lj>"))
D.cVU=w([B.bo,B.bu],x.O)
D.cWC=w([B.i_,B.n9,B.dy],x.O)
D.a_R=w(["top","middle","bottom"],x.s)
D.cYK=w([B.cF,B.bj,B.dD],x.O)
D.cZe=w([B.bl,B.dk,B.eF],x.O)
D.d_S=w([B.bK,B.ai],x.O)
D.d_T=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dIy={top:0,middle:1,bottom:2}
D.d30=new A.bs(D.dIy,["Top","Middle","Bottom"],x.n)
D.dIe={double:0,single:1,corners:2,none:3}
D.d35=new A.bs(D.dIe,["Double line","One line","Corners","None"],x.n)
D.dJi={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d4t=new A.bs(D.dJi,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.d4E=new A.bs(B.iv,[],A.az("bs<I,+(n,n)>"))
D.dIr={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.AU=new A.bs(D.dIr,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.az("bs<n,I>"))
D.d6R=new F.Lg(32,null)
D.d6S=new F.Lg(40,null)
D.d6T=new F.Lg(46,null)
D.aAJ=new C.apF(null)
D.dLB=new A.v(8,14)
D.eVN=new A.x("Write a new book",null,B.j8,null,B.L,null,null,null,null,null,null,null)
D.dNZ=new A.C(B.lo,D.eVN,null)
D.ahM=new A.ad(B.hQ,18,B.c,null,null,null)
D.ePC=new A.x("Add",null,B.mW,null,null,null,null,null,null,null,null,null)
D.cK8=w([D.ahM,B.vd,D.ePC],x.p)
D.enm=new A.cC(B.aZ,B.e,B.R,B.m,null,B.p,null,0,D.cK8,null)
D.dOi=new A.C(B.qe,D.enm,null)
D.dOj=new A.C(E.acj,X.T3,null)
D.eJW=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSs=new A.x("New Project",null,D.eJW,null,null,null,null,null,null,null,null,null)
D.cNJ=w([D.ahM,B.aa,D.eSs],x.p)
D.enp=new A.cC(B.aZ,B.e,B.R,B.m,null,B.p,null,0,D.cNJ,null)
D.dOt=new A.C(B.iI,D.enp,null)
D.eUE=new A.x("Choose your header",null,R.BM,null,null,null,null,null,null,null,null,null)
D.dOM=new A.C(B.iH,D.eUE,null)
D.aYs=new A.fb(2.2,null,null,null,null,B.cY,null,null,null,null)
D.erD=new A.a3(22,22,D.aYs,null)
D.aWM=new A.cw(B.A,null,null,D.erD,null)
D.dOR=new A.C(B.V4,D.aWM,null)
D.bgB=new A.M(14,2,14,6)
D.f64=new A.x("The top of your book. Tap a design to see it.",null,N.a44,null,null,null,null,null,null,null,null,null)
D.dOS=new A.C(D.bgB,D.f64,null)
D.dPU=new A.iF(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dPX=new A.iF(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aBH=new A.iF(1,0.9607843137254902,0.48627450980392156,0)
D.Gx=new A.iF(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.y4=new A.iF(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dQ2=new A.iF(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.ffH=new C.bdt(null)
D.bc1=new A.lW(D.ffH,null,B.at,null,null)
D.aFk=new A.cF(0,0,0,0,null,null,D.bc1,null)
D.eaP=new A.A(-42,42)
D.eiG=new A.cK([0,0,1,1])
D.aGv=new A.ac(0,0,520,160)
D.aGI=new A.b5(B.pN,B.V)
D.f5E=new A.x("Let the AI write it from your tree",null,B.kg,null,B.L,null,null,null,null,null,null,null)
D.bnx=new A.dp(1,B.cj,D.f5E,null)
D.cHb=w([E.Yw,B.aa,D.bnx],x.p)
D.en4=new A.cC(B.aZ,B.e,B.R,B.m,null,B.p,null,0,D.cHb,null)
D.ePj=new A.x("Save member",null,B.ce,null,null,null,null,null,null,null,null,null)
D.cUk=w([D.aiC,B.aa,D.ePj],x.p)
D.enc=new A.cC(B.aZ,B.b6,B.j,B.m,null,B.p,null,0,D.cUk,null)
D.bwU=new A.ad(B.hT,14,B.aW,null,null,null)
D.eEd=new A.F(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSS=new A.x("Cashier",null,D.eEd,null,null,null,null,null,null,null,null,null)
D.cOa=w([D.bwU,B.bq,D.eSS],x.p)
D.ene=new A.cC(B.aZ,B.e,B.R,B.m,null,B.p,null,0,D.cOa,null)
D.ePk=new A.x("Transfer & settings",null,B.dQ,null,null,null,null,null,null,null,null,null)
D.bm9=new A.bF(1,B.bp,D.ePk,null)
D.czQ=w([D.aia,B.aw,D.bm9],x.p)
D.enf=new A.cC(B.aZ,B.e,B.j,B.m,null,B.p,null,0,D.czQ,null)
D.eqp=new A.ar(16,40)
D.equ=new A.ar(22,64)
D.eqA=new A.ar(280,88)
D.erj=new A.a3(30,null,null,null)
D.esA=new A.hJ(2,12,12,1.05,null)
D.eSy=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eti=new A.b_(D.eSy,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eSN=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aIs=new A.b_(D.eSN,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f_f=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.etM=new A.b_(D.f_f,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f8J=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.etR=new A.b_(D.f8J,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eUC=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.etY=new A.b_(D.eUC,null,null,null,null,null,null,null,null,null,null,null,null,B.fI,!1,null,null,null,B.q,null)
D.f6f=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aIw=new A.b_(D.f6f,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.ePT=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eun=new A.b_(D.ePT,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f9k=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.ev6=new A.b_(D.f9k,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f4G=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.evv=new A.b_(D.f4G,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f8N=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.evy=new A.b_(D.f8N,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f0I=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.evA=new A.b_(D.f0I,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWk=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.evB=new A.b_(D.eWk,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWl=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ewB=new A.b_(D.eWl,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eSA=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.ewT=new A.b_(D.eSA,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eUk=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.exb=new A.b_(D.eUk,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f0e=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.exr=new A.b_(D.f0e,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eX2=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.exs=new A.b_(D.eX2,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eAl=new A.F(!0,D.jY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAJ=new A.F(!0,D.jY,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBi=new A.r_(!0,B.qI,null,null,null,null,B.dl,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eBy=new A.F(!0,D.jY,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eC5=new A.F(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a45=new A.r_(!0,B.PB,null,null,null,null,B.dl,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eD4=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDt=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eEX=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF0=new A.F(!0,G.ie,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGc=new A.F(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eGR=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHv=new A.F(!0,B.bT,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHA=new A.F(!0,B.bQ,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHW=new A.F(!0,D.D4,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eI4=new A.F(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ0=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJt=new A.F(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJU=new A.F(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLk=new A.F(!0,B.ai,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLs=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKD=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4w=new A.F(!0,B.ai,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eN2=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNp=new A.F(!0,G.ie,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNw=new A.F(!0,G.ie,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOf=new A.x("Themes",null,B.py,null,null,null,null,null,null,null,null,null)
D.eOP=new A.x("Add Item",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eEI=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eP9=new A.x("Debt receipt",null,D.eEI,null,B.L,null,null,null,null,null,null,null)
D.aKz=new A.F(!0,B.ai,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePq=new A.x("Person who owes",null,D.aKz,null,null,null,null,null,null,null,null,null)
D.eQk=new A.x("Notes",null,B.a4c,null,null,null,null,null,null,null,null,null)
D.eQJ=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.eDL=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eQN=new A.x("Share",null,D.eDL,null,null,null,null,null,null,null,null,null)
D.eRC=new A.x("Move your family trees",null,D.aKD,null,null,null,null,null,null,null,null,null)
D.eSa=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eSM=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.eTW=new A.x("Remove this book?",null,B.hb,null,null,null,null,null,null,null,null,null)
D.aL1=new A.x("Download",null,B.ce,null,null,null,null,null,null,null,null,null)
D.eUZ=new A.x("What should the AI do?",null,B.dQ,null,null,null,null,null,null,null,null,null)
D.eWg=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.eXg=new A.x("Ribbon bookmark",null,B.ix,null,null,null,null,null,null,null,null,null)
D.eLe=new A.F(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXI=new A.x("NGMY.ORG",null,D.eLe,null,B.L,null,null,null,null,null,null,null)
D.eYR=new A.x("Scan family tree QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.eHP=new A.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZy=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eHP,null,B.L,null,null,null,null,null,null,null)
D.f_G=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.f_M=new A.x("Thumbnail",null,B.py,null,null,null,null,null,null,null,null,null)
D.f0k=new A.x("Save the cover",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f0J=new A.x("Your photos",null,B.py,null,null,null,null,null,null,null,null,null)
D.f0Y=new A.x("Create Project",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f1p=new A.x("Design your cover",null,R.BM,null,null,null,null,null,null,null,null,null)
D.f1v=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.f1y=new A.x("PICTURE",null,H.mg,null,null,null,null,null,null,null,null,null)
D.f1U=new A.x("Paid",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f1W=new A.x("You can undo it right after.",null,N.a4h,null,null,null,null,null,null,null,null,null)
D.f2o=new A.x("Print",null,B.tE,null,null,null,null,null,null,null,null,null)
D.f2J=new A.x("Amount owed",null,D.aKz,null,null,null,null,null,null,null,null,null)
D.f2W=new A.x("Got it",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f3s=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.f3v=new A.x("Add to budget",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f3U=new A.x("Debtor signature",null,B.a4c,null,null,null,null,null,null,null,null,null)
D.f41=new A.x("Change icon",null,E.aJQ,null,null,null,null,null,null,null,null,null)
D.f55=new A.x("Family tree QR",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f5u=new A.x("Download",null,B.tE,null,null,null,null,null,null,null,null,null)
D.f5y=new A.x("Change",null,B.py,null,null,null,null,null,null,null,null,null)
D.f6l=new A.x("Clear all",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f6o=new A.x("WHAT SHOULD IT CHANGE?",null,H.mg,null,null,null,null,null,null,null,null,null)
D.f6Y=new A.x("COLOUR",null,H.mg,null,null,null,null,null,null,null,null,null)
D.f79=new A.x("Do it",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f7c=new A.x("Create Tree",null,B.ce,null,null,null,null,null,null,null,null,null)
D.f86=new A.x("Create Family Tree",null,B.eM,null,null,null,null,null,null,null,null,null)
D.ezo=new A.F(!0,E.jx,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8l=new A.x("Write the first page myself",null,D.ezo,null,null,null,null,null,null,null,null,null)
D.f8Q=new A.x("Use this header",null,B.cr,null,null,null,null,null,null,null,null,null)
D.f8V=new A.x("Create Project",null,E.aKk,null,null,null,null,null,null,null,null,null)
D.fd2=new C.a99(1,"header")
D.a5c=new C.a99(2,"projects")
D.fd3=new C.a99(3,"cashier")
D.a5d=new C.a99(4,"familyTree")
D.fnC=new C.cqA(0,"start")
D.fnD=new C.cqB(0,"start")
D.fd9=new C.Wq(null)
D.fe8=new C.WS(null)
D.d4B=new A.bs(B.iv,[],A.az("bs<n,Em>"))
D.cQl=w([],x.E)
D.cQm=w([],x.M)
D.feF=new C.baL(D.d4B,D.cQl,D.cQm,0,0,null,null)
D.fgl=new C.Yf(null)
D.a5U=new C.aGy(0,"projects")
D.aNP=new C.aGy(1,"cashier")
D.flz=new C.aGy(2,"familyTree")})()};
(a=>{a["KW9rgH8rXP9qY4zxUIJOGsbuUiE="]=a.current})($__dart_deferred_initializers__);