((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A1,N,S,A2,G,F,E,A3,A4,A5,A6,T,U,A7,A8,L,A9,H,Aa,Ab,V,W,X,Ac,Ad,Y,Ae,Af,Z,Ag,Ah,Ai,K,Aj,A_,A0,O,P,M,Q,C={
bC_(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bC_=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vl(null,""),$async$bC_)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.V(y.j)
t=A.n4(b1)
s=A.c3(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cU(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.L)(h),++d){a0=h[d]
f.push(A.F(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.S.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qU(t,a1,B.hC,"book",E.Fl),$async$bC_)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Ql(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.V(l!=null&&A.L0(l)?y.l:y.i)
for(j=J.a3(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cw
g=a8.h(0,"title")
a9=B.a.i(A.u(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.u(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.z(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=F.a21(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bC_,v)},
agB(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$agB=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vl(null,""),$async$agB)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.V(y.j)
t=A.n4(b6)
s=x.S
r=A.dc(c1,0,A.dG(4,"count",s),A.T(c1).c)
q=F.a1P(new A.M(r,new C.fyG(),r.$ti.k("M<ak.E,m>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fyF(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.S.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$agB)
case 6:l=c5
k=F.Ql(l==null?"":l)
if(k==null)throw A.V("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.u(s==null?"I updated the cover.":s)
r=x.f
u=new C.anR(s,D.dqP,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.V("There is no page to change.")
h=A.U(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.ds(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.L)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.F(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.S.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$agB)
case 10:l=c5
k=l==null?null:F.Ql(l)
if(k==null)throw A.V(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.u(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.u(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d9(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.l1(a5,a2.k("l1<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a3(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.k.N(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.u(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.u(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cC(new A.bc(h,s),new C.fyH(),s.k("J.E"),p)
p=F.a1P(A.pg(p,3,A.a6(p).k("J.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cv<1>")
b4=A.C(new A.cv(h,s),s.k("J.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.L)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a21(s,b9),$async$agB)
case 13:b5=c5
for(s=J.a3(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.anR(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agB,v)},
hnJ(d,e,f){return A.ca(null,B.w.j(0.65),!1,null,new C.fHW(e,f),d,null,!0,!0,x.g2)},
anR:function anR(d,e,f){this.a=d
this.b=e
this.c=f},
fyG:function fyG(){},
fyF:function fyF(d){this.a=d},
fyH:function fyH(){},
fHW:function fHW(d,e){this.a=d
this.b=e},
bzR(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bzR=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b4(b1,new C.fmP())){u=null
w=1
break}t=B.d.d7(b1,new C.fmQ())
s=$.W()
r=new A.qm()
q=A.B6(r,D.aMK)
p=A.N()
p.r=B.c.gp(0)
q.b1(D.aMK,p)
o=A.N()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.af
o.d=B.bV
o.e=B.hn
n=new C.fmV(t)
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
a3.e=null}}q.aS(a3,o)}else{p=A.a([],x.v)
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
a3.e=null}}q.aS(a3,o)}w=4
return A.b(r.oq().zj(520,160),$async$bzR)
case 4:w=3
return A.b(b3.hu(B.h0),$async$bzR)
case 3:b0=b3
u=b0==null?null:J.eU(B.dC.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bzR,v)},
fwm(d){return C.i1j(d)},
i1j(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fwm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bfQ()
n=d.x!=null&&d.z_(null).length===0
if(d.x!=null)t=n?D.zq:D.Ip
else t=d.gTF()?D.Ip:D.aHK
w=3
return A.b(C.bzR(d.ax),$async$fwm)
case 3:s=f
p.a=null
if(s!=null)p.a=A.amy(s)
r=A.a4_(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aHK}else{p.c=C.wN(q,!0)
p.b=n?D.zq:D.Ip}r.a2T(A.fS9(new C.fwo(p,d,new C.fwp(),t,n,o),null,D.bxn,B.wl))
u=r.kc(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fwm,v)},
fD_(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fD_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fwm(d),$async$fD_)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A8.Gz(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fD_,v)},
fmP:function fmP(){},
fmQ:function fmQ(){},
fmV:function fmV(d){this.a=d},
fwp:function fwp(){},
fwo:function fwo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fwn:function fwn(){},
fIn(d,e){var w=0,v=A.j(x.H)
var $async$fIn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,B.w.j(0.55),!0,null,new C.fIr(new A.cu(null,x.J),e),d,null,!0,!0,x.H),$async$fIn)
case 2:return A.h(null,v)}})
return A.i($async$fIn,v)},
bCs(d,e,f,g){return C.i8N(d,e,f,g)},
i8N(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bCs=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gak(e.split(",")):e
r=B.cF.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.f0R)
w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.fIj(g,r,f),d,null,!0,!0,x.H),$async$bCs)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bCs,v)},
fIs(d,e){var w=0,v=A.j(x.H)
var $async$fIs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ca(null,null,!0,null,new C.fIv(new A.cu(null,x.J),e),d,null,!0,!0,x.H),$async$fIs)
case 2:return A.h(null,v)}})
return A.i($async$fIs,v)},
aXW:function aXW(d,e){this.c=d
this.a=e},
c29:function c29(){},
ba3:function ba3(d,e){this.b=d
this.a=e},
fIr:function fIr(d,e){this.a=d
this.b=e},
fIo:function fIo(d){this.a=d},
fIp:function fIp(d,e,f){this.a=d
this.b=e
this.c=f},
fIq:function fIq(d,e){this.a=d
this.b=e},
fIj:function fIj(d,e,f){this.a=d
this.b=e
this.c=f},
fIh:function fIh(d){this.a=d},
fIi:function fIi(d,e,f){this.a=d
this.b=e
this.c=f},
fIv:function fIv(d,e){this.a=d
this.b=e},
fIt:function fIt(d){this.a=d},
fIu:function fIu(d,e,f){this.a=d
this.b=e
this.c=f},
fr7(d,e){var w=0,v=A.j(x.y),u,t
var $async$fr7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1A(d),$async$fr7)
case 3:t=g
J.nt(t,new C.fr8(e))
u=A.ahf(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fr7,v)},
fr8:function fr8(d){this.a=d},
ao2:function ao2(d,e,f){this.c=d
this.d=e
this.a=f},
aCi:function aCi(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dG3:function dG3(d,e){this.a=d
this.b=e},
dFP:function dFP(d,e){this.a=d
this.b=e},
dFS:function dFS(d,e,f){this.a=d
this.b=e
this.c=f},
dFR:function dFR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFQ:function dFQ(d,e){this.a=d
this.b=e},
dFT:function dFT(d,e){this.a=d
this.b=e},
dFN:function dFN(){},
dFO:function dFO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFM:function dFM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dFx:function dFx(d){this.a=d},
dFy:function dFy(d,e,f){this.a=d
this.b=e
this.c=f},
dFz:function dFz(d,e){this.a=d
this.b=e},
dFw:function dFw(d){this.a=d},
dFE:function dFE(d,e){this.a=d
this.b=e},
dFv:function dFv(d){this.a=d},
dFF:function dFF(d,e,f){this.a=d
this.b=e
this.c=f},
dFG:function dFG(d,e,f){this.a=d
this.b=e
this.c=f},
dFu:function dFu(d,e){this.a=d
this.b=e},
dFH:function dFH(d,e,f){this.a=d
this.b=e
this.c=f},
dFt:function dFt(d,e){this.a=d
this.b=e},
dFI:function dFI(d,e){this.a=d
this.b=e},
dFs:function dFs(d){this.a=d},
dFJ:function dFJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dFq:function dFq(){},
dFk:function dFk(d){this.a=d},
dFl:function dFl(d){this.a=d},
dFr:function dFr(d,e){this.a=d
this.b=e},
dFK:function dFK(d,e){this.a=d
this.b=e},
dFp:function dFp(d){this.a=d},
dFL:function dFL(d){this.a=d},
dFo:function dFo(){},
dFA:function dFA(d,e){this.a=d
this.b=e},
dFn:function dFn(d){this.a=d},
dFB:function dFB(d,e,f){this.a=d
this.b=e
this.c=f},
dFm:function dFm(d,e){this.a=d
this.b=e},
dFj:function dFj(d,e){this.a=d
this.b=e},
dFC:function dFC(d){this.a=d},
dFD:function dFD(d,e,f){this.a=d
this.b=e
this.c=f},
dG6:function dG6(){},
dG7:function dG7(d,e){this.a=d
this.b=e},
dG4:function dG4(d){this.a=d},
dG5:function dG5(d){this.a=d},
dG0:function dG0(d,e){this.a=d
this.b=e},
dG1:function dG1(d){this.a=d},
dFU:function dFU(d,e,f){this.a=d
this.b=e
this.c=f},
dFV:function dFV(d,e,f){this.a=d
this.b=e
this.c=f},
dFW:function dFW(d,e,f){this.a=d
this.b=e
this.c=f},
dFX:function dFX(d,e,f){this.a=d
this.b=e
this.c=f},
dFY:function dFY(d,e,f){this.a=d
this.b=e
this.c=f},
dFZ:function dFZ(d,e,f){this.a=d
this.b=e
this.c=f},
dG_:function dG_(d,e,f){this.a=d
this.b=e
this.c=f},
dG8:function dG8(){},
dG9:function dG9(){},
dGa:function dGa(){},
dGb:function dGb(d){this.a=d},
dG2:function dG2(d,e){this.a=d
this.b=e},
hjP(d){return B.d.dK(D.a2b,new C.frM(d),new C.frN())},
ui:function ui(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
frM:function frM(d){this.a=d},
frN:function frN(){},
akh:function akh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aTI:function aTI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
SB:function SB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdE:function bdE(){this.d=$
this.c=this.a=null},
d6d:function d6d(d,e){this.a=d
this.b=e},
d6b:function d6b(d,e){this.a=d
this.b=e},
d6c:function d6c(){},
d6e:function d6e(d,e){this.a=d
this.b=e},
h4x(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.ne(t,w,v,u==null?new A.S(Date.now(),0,!1):u)},
KM(d,e){return C.i_Y(d,e)},
i_Y(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$KM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$KM)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.S.aL(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d9(p,x.f)
o=A.cC(o,new C.fu0(),o.$ti.k("J.E"),x.B)
n=A.a6(o).k("a_<J.E>")
o=A.C(new A.a_(o,new C.fu1(),n),n.k("J.E"))
B.d.aZ(o,new C.fu2())
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
return A.i($async$KM,v)},
AW(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$AW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ay(),$async$AW)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fH1(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.S.ao(r,null)),$async$AW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$AW,v)},
aPP(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aPP=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KM(d,e),$async$aPP)
case 2:u=h
t=J.cE(u)
s=t.bg(u,new C.fPb(f))
if(s===-1)t.ca(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.AW(d,e,u),$async$aPP)
case 3:return A.h(null,v)}})
return A.i($async$aPP,v)},
bAi(d,e,f){var w=0,v=A.j(x.H),u
var $async$bAi=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.KM(d,e),$async$bAi)
case 2:u=h
J.nt(u,new C.fr_(f))
w=3
return A.b(C.AW(d,e,u),$async$bAi)
case 3:return A.h(null,v)}})
return A.i($async$bAi,v)},
bAw(d,e){return C.i_X(d,e)},
i_X(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bAw=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bAw)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aU(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.MV
w=1
break}p=B.S.aL(0,q,null)
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
if(D.CC.ai(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.q(D.a3L,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a3a,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a36,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.q(D.cVz,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Hy(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.MV
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.MV
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAw,v)},
Rp(d,e,f){return C.i8j(d,e,f)},
i8j(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Rp=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ay(),$async$Rp)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.S.ao(f.ag(),null)),$async$Rp)
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
return A.i($async$Rp,v)},
QT(d,e){return C.i_Z(d,e)},
i_Z(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$QT=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$QT)
case 7:r=g
q=r.tf("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.KM(d,e),$async$QT)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lr(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$QT)
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
return A.i($async$QT,v)},
afV(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$afV=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QT(d,e),$async$afV)
case 3:s=g
r=J.a3(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.M(s,t)
w=5
return A.b(A.ay(),$async$afV)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$afV)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afV,v)},
a2d(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a2d=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.QT(d,e),$async$a2d)
case 2:s=h
J.hy(s,f)
w=3
return A.b(A.ay(),$async$a2d)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a2d)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2d)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a2d)
case 6:return A.h(null,v)}})
return A.i($async$a2d,v)},
ne:function ne(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fu0:function fu0(){},
fu1:function fu1(){},
fu2:function fu2(){},
fH1:function fH1(){},
fPb:function fPb(d){this.a=d},
fr_:function fr_(d){this.a=d},
Hy:function Hy(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bN9:function bN9(d){this.a=d},
i8C(d,e,f,g,h,i,j){return A.a4(d,!1).cm(A.e9(new C.fHA(j,i,f,e,h,g),!0,null,x.H))},
QQ(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$QQ=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.QT(h,g),$async$QQ)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.I(x.q).f.R(D.aOR)
u=!1
w=1
break}w=4
return A.b(C.hnJ(d,f,e),$async$QQ)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.afV(h,g),$async$QQ)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.ne(""+(q+n),l,B.a.i(m.b),new A.S(Date.now(),0,!1)))}w=6
return A.b(C.AW(h,r,p),$async$QQ)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Rp(h,r,new C.Hy("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$QQ)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$QQ,v)},
fHA:function fHA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Z0:function Z0(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azm:function azm(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d6T:function d6T(d){this.a=d},
d6S:function d6S(d,e){this.a=d
this.b=e},
d6H:function d6H(d,e){this.a=d
this.b=e},
d6E:function d6E(d,e){this.a=d
this.b=e},
d6f:function d6f(d){this.a=d},
d6g:function d6g(d,e){this.a=d
this.b=e},
d6I:function d6I(d){this.a=d},
d6o:function d6o(d){this.a=d},
d6m:function d6m(d){this.a=d},
d6n:function d6n(d){this.a=d},
d6p:function d6p(d){this.a=d},
d6F:function d6F(d){this.a=d},
d6G:function d6G(){},
d6k:function d6k(d){this.a=d},
d6l:function d6l(d,e){this.a=d
this.b=e},
d6q:function d6q(d){this.a=d},
d6r:function d6r(d,e){this.a=d
this.b=e},
d6R:function d6R(d){this.a=d},
d6Q:function d6Q(d,e){this.a=d
this.b=e},
d6P:function d6P(d){this.a=d},
d6B:function d6B(d){this.a=d},
d6A:function d6A(d){this.a=d},
d6C:function d6C(d){this.a=d},
d6h:function d6h(d,e){this.a=d
this.b=e},
d6D:function d6D(d,e){this.a=d
this.b=e},
d6u:function d6u(d){this.a=d},
d6v:function d6v(d){this.a=d},
d6t:function d6t(){},
d6w:function d6w(d){this.a=d},
d6x:function d6x(d){this.a=d},
d6y:function d6y(d,e){this.a=d
this.b=e},
d6z:function d6z(d,e,f){this.a=d
this.b=e
this.c=f},
d6s:function d6s(d,e){this.a=d
this.b=e},
d6K:function d6K(d){this.a=d},
d6J:function d6J(){},
d6L:function d6L(d){this.a=d},
d6M:function d6M(d){this.a=d},
d6N:function d6N(d){this.a=d},
d6O:function d6O(d,e){this.a=d
this.b=e},
d6i:function d6i(d){this.a=d},
d6j:function d6j(d){this.a=d},
Z4:function Z4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdZ:function bdZ(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d8D:function d8D(d){this.a=d},
d8E:function d8E(d){this.a=d},
d8C:function d8C(d){this.a=d},
d8F:function d8F(d){this.a=d},
d8B:function d8B(d){this.a=d},
d8G:function d8G(d){this.a=d},
d8A:function d8A(d){this.a=d},
d8H:function d8H(d,e){this.a=d
this.b=e},
d8z:function d8z(d,e){this.a=d
this.b=e},
d8I:function d8I(d,e){this.a=d
this.b=e},
Z2:function Z2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aek:function aek(d,e,f){this.a=d
this.b=e
this.c=f},
azn:function azn(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d77:function d77(d,e){this.a=d
this.b=e},
d76:function d76(d,e){this.a=d
this.b=e},
d7b:function d7b(d){this.a=d},
d7a:function d7a(d,e){this.a=d
this.b=e},
d78:function d78(d){this.a=d},
d79:function d79(d){this.a=d},
d7c:function d7c(d){this.a=d},
d7d:function d7d(d){this.a=d},
d75:function d75(d,e){this.a=d
this.b=e},
d74:function d74(d,e){this.a=d
this.b=e},
JS:function JS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Yj:function Yj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cFM:function cFM(d){this.a=d},
cFN:function cFN(){},
cFO:function cFO(d){this.a=d},
bbf:function bbf(d,e,f){this.b=d
this.c=e
this.a=f},
bb6:function bb6(d,e){this.b=d
this.a=e},
uj:function uj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
YB:function YB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbd:function bbd(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cZc:function cZc(d,e,f){this.a=d
this.b=e
this.c=f},
cZb:function cZb(d,e){this.a=d
this.b=e},
cZB:function cZB(d){this.a=d},
cZo:function cZo(){},
cZC:function cZC(d){this.a=d},
cZn:function cZn(){},
cZD:function cZD(d,e){this.a=d
this.b=e},
cZm:function cZm(d,e){this.a=d
this.b=e},
cZE:function cZE(d,e){this.a=d
this.b=e},
cZl:function cZl(d,e){this.a=d
this.b=e},
cZF:function cZF(d){this.a=d},
cZk:function cZk(){},
cZG:function cZG(d,e){this.a=d
this.b=e},
cZj:function cZj(d,e){this.a=d
this.b=e},
cZH:function cZH(d){this.a=d},
cZw:function cZw(d,e){this.a=d
this.b=e},
cZI:function cZI(d){this.a=d},
cZJ:function cZJ(d){this.a=d},
cZL:function cZL(d){this.a=d},
cZM:function cZM(d){this.a=d},
cZv:function cZv(d,e){this.a=d
this.b=e},
cZN:function cZN(d,e){this.a=d
this.b=e},
aGg:function aGg(d){this.a=d},
bgq:function bgq(d){this.a=d},
b9s:function b9s(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hZW(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ahs(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bA(new A.S(Date.now(),0,!1))
s=new C.frQ(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a_<1>"),q=q.k("cP<1,m>"),o=q.k("J.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.L)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.y5)m.push(l===D.a_8?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cE(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cE(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.k1(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.k1(h,a2,a2)-A.k1(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cP(new A.a_(a4,new C.frO(u,f),p),new C.frP(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hZX(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ahs(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.L)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.frV(v,e)
q=new C.frT(v)
p=A.U(w,x.S)
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
d=A.df(new A.bc(p,d),d.k("J.E"))
n=A.C(d,A.a6(d).k("cq.E"))
B.d.fp(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.L)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.f4(l,new C.frU(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.ai(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hLs(d,e,f,g){var w,v,u=C.hZY(d,e)
if(u<=0||f.length<=u)return new A.adV(!1,D.Cq,f)
if(g.q(0,e.a))return new A.adV(!1,D.Cq,f)
w=A.T(f).c
v=A.dc(f,0,A.dG(u,"count",x.S),w).dM(0)
return new A.adV(!0,A.dc(f,u,null,w).dM(0),v)},
hLt(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ahs(d3),d2=d1.length
if(d2===0)return D.h42
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.L)(d1),++u){t=d1[u]
v.c7(0,t.a,new C.d7k(t))}s=new C.d7B(v)
d2=x.h
r=A.U(w,d2)
q=new C.d7t(r)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d7s(r)
l=A.U(w,x.do)
for(p=new A.dv(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cd(l.c7(0,k,new C.d7l()),o)}h=new C.d7r(s)
g=new C.d7q(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a_<J.E>")
f=A.C(new A.a_(new A.bc(v,p),new C.d7m(h),o),o.k("J.E"))
e=f.length===0?new A.bc(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.L)(f),++u){t=f[u]
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
a9=new C.d7z(new C.d7v(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dv(v,v.r,v.e),j=a2.gakk(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eC([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.ai(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.ri(J.dJ(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.cc)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.d7j(a2,new C.d7A(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.L)(a8),++u){b8=a8[u]
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
d2=A.C(new A.cv(b4,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.FJ(o,new A.x(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.K_(c5.a,new A.x(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cv<1>")
d2=A.C(new A.cv(b6,d2),d2.k("J.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.L)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bQ(0,new C.d7n(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gT(j)
if(b6.ai(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.x(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.f4(j,new C.d7o(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.d7p())
c6.push(new C.aIm(new A.x(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bdJ(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hjk(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
hdC(d,e,f,g,h,i,j,k,l,m,n){return new C.ZE(k,f,j,e,l,n,m,d,g,h,i,null)},
aBj(d,e,f,g,h,i,j){return new C.bhk(i,d,e,f,j,h,g,null)},
apa:function apa(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCR:function aCR(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dT5:function dT5(d){this.a=d},
dT4:function dT4(d){this.a=d},
dT7:function dT7(d,e){this.a=d
this.b=e},
dT8:function dT8(d,e){this.a=d
this.b=e},
dT9:function dT9(d){this.a=d},
dT3:function dT3(d,e){this.a=d
this.b=e},
dT6:function dT6(d){this.a=d},
dTb:function dTb(d){this.a=d},
dTa:function dTa(d,e){this.a=d
this.b=e},
ap4:function ap4(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCO:function aCO(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dSw:function dSw(d){this.a=d},
dSu:function dSu(d){this.a=d},
dSv:function dSv(d){this.a=d},
dSx:function dSx(d,e){this.a=d
this.b=e},
dSr:function dSr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS_:function dS_(d){this.a=d},
dS0:function dS0(d,e){this.a=d
this.b=e},
dSe:function dSe(d){this.a=d},
dSc:function dSc(d){this.a=d},
dSd:function dSd(d,e){this.a=d
this.b=e},
dSf:function dSf(d){this.a=d},
dSg:function dSg(d,e){this.a=d
this.b=e},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSo:function dSo(d,e){this.a=d
this.b=e},
dSn:function dSn(d,e){this.a=d
this.b=e},
dSj:function dSj(d,e){this.a=d
this.b=e},
dSi:function dSi(d){this.a=d},
dSk:function dSk(d,e){this.a=d
this.b=e},
dSh:function dSh(d){this.a=d},
dSl:function dSl(d){this.a=d},
dSm:function dSm(d){this.a=d},
dSp:function dSp(d,e){this.a=d
this.b=e},
dRO:function dRO(d,e){this.a=d
this.b=e},
dRP:function dRP(d,e){this.a=d
this.b=e},
dSz:function dSz(d,e,f){this.a=d
this.b=e
this.c=f},
dSt:function dSt(d,e,f){this.a=d
this.b=e
this.c=f},
dSs:function dSs(d){this.a=d},
dRQ:function dRQ(d){this.a=d},
dRR:function dRR(d){this.a=d},
dRS:function dRS(){},
dRT:function dRT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRX:function dRX(d,e){this.a=d
this.b=e},
dRW:function dRW(d,e){this.a=d
this.b=e},
dRV:function dRV(d){this.a=d},
dRY:function dRY(d,e){this.a=d
this.b=e},
dRU:function dRU(d){this.a=d},
dSy:function dSy(d){this.a=d},
dS9:function dS9(){},
dSa:function dSa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS8:function dS8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS4:function dS4(d,e,f){this.a=d
this.b=e
this.c=f},
dS3:function dS3(d,e,f){this.a=d
this.b=e
this.c=f},
dS1:function dS1(d,e){this.a=d
this.b=e},
dS5:function dS5(d){this.a=d},
dS6:function dS6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dS2:function dS2(d,e){this.a=d
this.b=e},
dS7:function dS7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSb:function dSb(d,e){this.a=d
this.b=e},
dSG:function dSG(){},
dSH:function dSH(d,e){this.a=d
this.b=e},
dSI:function dSI(d){this.a=d},
dSJ:function dSJ(d,e){this.a=d
this.b=e},
dSC:function dSC(d){this.a=d},
dSA:function dSA(d,e){this.a=d
this.b=e},
dSD:function dSD(d,e){this.a=d
this.b=e},
dSE:function dSE(d,e){this.a=d
this.b=e},
dSF:function dSF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dSK:function dSK(d){this.a=d},
dSB:function dSB(d){this.a=d},
dRZ:function dRZ(d){this.a=d},
bdH:function bdH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d7h:function d7h(d){this.a=d},
d7g:function d7g(d,e){this.a=d
this.b=e},
d7i:function d7i(d){this.a=d},
d7f:function d7f(d,e){this.a=d
this.b=e},
frQ:function frQ(d,e){this.a=d
this.b=e},
frR:function frR(d){this.a=d},
frS:function frS(){},
frO:function frO(d,e){this.a=d
this.b=e},
frP:function frP(){},
frV:function frV(d,e){this.a=d
this.b=e},
frW:function frW(d){this.a=d},
frX:function frX(){},
frT:function frT(d){this.a=d},
frU:function frU(d,e){this.a=d
this.b=e},
K_:function K_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
FJ:function FJ(d,e){this.a=d
this.b=e},
bdJ:function bdJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d7k:function d7k(d){this.a=d},
d7B:function d7B(d){this.a=d},
d7t:function d7t(d){this.a=d},
d7u:function d7u(){},
d7s:function d7s(d){this.a=d},
d7l:function d7l(){},
d7r:function d7r(d){this.a=d},
d7q:function d7q(d,e){this.a=d
this.b=e},
d7m:function d7m(d){this.a=d},
d7v:function d7v(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d7w:function d7w(d){this.a=d},
d7x:function d7x(d){this.a=d},
d7y:function d7y(){},
d7z:function d7z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d7A:function d7A(){},
d7j:function d7j(d,e,f,g,h,i,j,k,l,m){var _=this
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
d7n:function d7n(d,e){this.a=d
this.b=e},
d7o:function d7o(d){this.a=d},
d7p:function d7p(){},
aIm:function aIm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bdK:function bdK(d,e){this.b=d
this.a=e},
d7C:function d7C(){},
d7D:function d7D(d){this.a=d},
d7E:function d7E(d){this.a=d},
d7F:function d7F(){},
bhl:function bhl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcP:function bcP(d,e){this.b=d
this.a=e},
buW:function buW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f8P:function f8P(d){this.a=d},
bkx:function bkx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eKz:function eKz(d){this.a=d},
eKy:function eKy(d,e){this.a=d
this.b=e},
ZE:function ZE(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aBh:function aBh(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dnp:function dnp(d,e){this.a=d
this.b=e},
dno:function dno(d){this.a=d},
dnm:function dnm(d){this.a=d},
dnn:function dnn(d){this.a=d},
dny:function dny(d){this.a=d},
dnz:function dnz(d){this.a=d},
dnx:function dnx(d,e){this.a=d
this.b=e},
dnA:function dnA(){},
dnD:function dnD(d){this.a=d},
dnw:function dnw(d,e){this.a=d
this.b=e},
dnC:function dnC(){},
dnE:function dnE(d){this.a=d},
dnv:function dnv(d,e){this.a=d
this.b=e},
dnF:function dnF(d){this.a=d},
dnu:function dnu(d){this.a=d},
dnG:function dnG(d){this.a=d},
dnt:function dnt(d){this.a=d},
dnH:function dnH(d){this.a=d},
dns:function dns(d){this.a=d},
dnI:function dnI(d){this.a=d},
dnr:function dnr(d){this.a=d},
dnJ:function dnJ(d){this.a=d},
dnq:function dnq(d,e){this.a=d
this.b=e},
dnB:function dnB(d){this.a=d},
acM:function acM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhk:function bhk(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
acL:function acL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bhj:function bhj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dnK:function dnK(d){this.a=d},
dnL:function dnL(d,e){this.a=d
this.b=e},
aBi:function aBi(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHo:function aHo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
acN:function acN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dnU:function dnU(d){this.a=d},
JO:function JO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
h8t(d){var w=d.S,v=x.N
return w.j9(w,new C.c8H(),v,v)},
hD_(d){var w=d.bx
if(w>=0)return w
return 5},
h8v(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.h8t(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
h8u(d,e){var w=C.h8v(d,e)
if(w!=null&&w.cd(new A.S(Date.now(),0,!1)))return!0
return!1},
hD0(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.h8t(d),w,w)
u=C.h8v(d,e)
t=u!=null&&u.cd(new A.S(Date.now(),0,!1))?u:new A.S(Date.now(),0,!1)
v.n(0,s,t.bS(A.dD(30,0,0,0,0,0).a).a5().ac())
d.S=v},
aZn(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aZn=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.li(t,B.Ic),$async$aZn)
case 3:if(l){u=!0
w=1
break}u=A.kV(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Ic,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZn,v)},
c8H:function c8H(){},
hCY(){var w,v=$.pw(),u=J.e6(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.hs(u)},
Is(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Is=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c2(),$async$Is)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bJ),$async$Is)
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
$.am.$1("[family tree sync codes] load: "+A.u(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Is,v)},
a6O(d){return C.hCZ(d)},
hCZ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a6O=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c2(),$async$a6O)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hI("ngmy_family_tree_backup_codes_v1",A.F(["codes",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cG,null),$async$a6O)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.am.$1("[family tree sync codes] save: "+A.u(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a6O,v)},
c8G(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c8G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Is(),$async$c8G)
case 3:t=m.jN(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a3(q)
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
return A.i($async$c8G,v)},
No(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$No=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c8G(d),$async$No)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Is(),$async$No)
case 6:s=f
r=J.a3(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dO(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.S(Date.now(),0,!1).a5().ac())
r.n(s,t,o)
w=9
return A.b(C.a6O(s),$async$No)
case 9:case 8:u=t
w=1
break
case 5:n=C.hCY()
w=10
return A.b(C.Is(),$async$No)
case 10:s=f
J.aG(s,n,A.F(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=11
return A.b(C.a6O(s),$async$No)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$No,v)},
aZm(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aZm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Is(),$async$aZm)
case 3:t=f
for(s=J.dl(t),r=s.gdQ(t),r=r.dM(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.L)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a6O(t),$async$aZm)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aZm,v)},
a6P(d,e,f){var w=0,v=A.j(x.H),u
var $async$a6P=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ap9(d,e),$async$a6P)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.No(d),$async$a6P)
case 7:w=4
break
case 5:w=8
return A.b(C.aZm(d),$async$a6P)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a6P,v)},
ap3(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$ap3=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ap9(f,e),$async$ap3)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c2(),$async$ap3)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Is(),$async$ap3)
case 7:q=o.q(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a3(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap3,v)},
aZl(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aZl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c2(),$async$aZl)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Is(),$async$aZl)
case 4:t=q.q(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a3(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZl,v)},
hD1(){var w,v=$.pw(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.hs(u)},
ap6(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$ap6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c2(),$async$ap6)
case 3:if(!g){u=null
w=1
break}t=C.hD1()
w=4
return A.b(A.UV(),$async$ap6)
case 4:s=g
r=B.dK.aK(B.S.ao(d.eT(),null))
r=B.cJ.gct().aK(r)
q=e?999:2
J.aG(s,t,A.F(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(A.a6Q(s),$async$ap6)
case 5:p=e?999:2
u=new A.a_P("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap6,v)},
ap5(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ap5=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.UV(),$async$ap5)
case 3:p=a0
o=J.a3(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a3(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aZl(J.k(l==null?"":l),j),$async$ap5)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cf.cz(0,B.cF.aK(t))
s=C.h8w(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.u(q))
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
l.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=5
return A.b(A.a6Q(p),$async$ap5)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap5,v)},
h8w(d){var w,v,u,t,s=null
try{w=B.S.aL(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hD3(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.u(v))
return s}},
fTd(d){var w=0,v=A.j(x.m),u,t,s
var $async$fTd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ap5(t[1])
w=1
break}u=null
w=1
break}u=C.h8w(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTd,v)},
hD3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d9(v,x.f)
u=A.cC(u,new C.c8J(),u.$ti.k("J.E"),x.k)
t=A.a6(u).k("a_<J.E>")
s=A.C(new A.a_(u,new C.c8K(),t),t.k("J.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.S(Date.now(),0,!1)
q=A.U(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jN(p),t=t.gae(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d9(l,u)
n=A.cC(n,new C.c8L(),n.$ti.k("J.E"),o)
k=A.a6(n).k("a_<J.E>")
j=A.C(new A.a_(n,new C.c8M(),k),k.k("J.E"))
if(j.length!==0)q.n(0,m,j)}return new C.ap7(h,w,s,r,q)},
ap9(d,e){var w=0,v=A.j(x.y),u,t
var $async$ap9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Nf(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.AL(d),$async$ap9)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ap9,v)},
c8S(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c8S=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.AL(d),$async$c8S)
case 3:t=s.b6(f,new C.c8T(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.c8U())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c8S,v)},
UW(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$UW=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ap9(e,d),$async$UW)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.No(e),$async$UW)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.AL(e),$async$UW)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dJ(r,new C.c8Q(g))
r=A.C(t,t.$ti.k("J.E"))}t=J.a3(r)
if(t.gal(r)){u=null
w=1
break}t=t.dB(r,new C.c8R(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.KM(e,o),$async$UW)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.L)(r),++p
w=11
break
case 13:u=new C.ap7(s,B.a.i(e.toLowerCase()),r,new A.S(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UW,v)},
aZq(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aZq=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UW(d,e,f,g),$async$aZq)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Gp(A.JW(q.eT(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZq,v)},
aZp(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aZp=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.UW(d,e,f,g),$async$aZp)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ap6(r,f),$async$aZp)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aFp(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aZp,v)},
UX(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UX=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fTd(a0),$async$UX)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.ap3(g.a,d,e,f,s,r),$async$UX)
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
return A.b(C.bA8(e,j),$async$UX)
case 12:case 11:w=13
return A.b(C.ahd(e,j,s),$async$UX)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.AW(e,i,h),$async$UX)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.L)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bo6(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$UX,v)},
ap7:function ap7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c8O:function c8O(){},
c8P:function c8P(){},
c8N:function c8N(){},
c8J:function c8J(){},
c8K:function c8K(){},
c8L:function c8L(){},
c8M:function c8M(){},
c8T:function c8T(){},
c8U:function c8U(){},
c8Q:function c8Q(d){this.a=d},
c8R:function c8R(d){this.a=d},
h0I(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hE(d,new C.ap8(w,e,g,i,f,h,null),!0,null,x.H)},
d7e(d,e,f,g,h,i,j,k){return new C.bdG(i,e,k,j,g,f,h,d,null)},
ap8:function ap8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aCQ:function aCQ(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dST:function dST(d){this.a=d},
dSU:function dSU(d,e,f){this.a=d
this.b=e
this.c=f},
dSY:function dSY(d,e){this.a=d
this.b=e},
dSZ:function dSZ(d){this.a=d},
dSQ:function dSQ(d){this.a=d},
dSR:function dSR(d,e){this.a=d
this.b=e},
dSS:function dSS(d,e){this.a=d
this.b=e},
dSX:function dSX(d){this.a=d},
dSW:function dSW(d,e){this.a=d
this.b=e},
dSV:function dSV(){},
dT0:function dT0(d){this.a=d},
dT1:function dT1(d,e){this.a=d
this.b=e},
dT_:function dT_(d,e){this.a=d
this.b=e},
d7G:function d7G(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bdI:function bdI(d,e,f){this.d=d
this.e=e
this.a=f},
ac3:function ac3(d,e,f){this.c=d
this.d=e
this.a=f},
bdG:function bdG(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bdL:function bdL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ZZ:function ZZ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCP:function aCP(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dSL:function dSL(d,e){this.a=d
this.b=e},
dSM:function dSM(d){this.a=d},
dSN:function dSN(d){this.a=d},
dSO:function dSO(d){this.a=d},
dSP:function dSP(d){this.a=d},
a__:function a__(d){this.a=d},
biK:function biK(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dT2:function dT2(d,e){this.a=d
this.b=e},
aXV(d,e){return new C.aXU(d,e,null)},
aXU:function aXU(d,e,f){this.c=d
this.d=e
this.a=f},
i1o(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b3(d,11)},
i8M(d){return A.bQ(B.K,null,new C.fI2(new C.tR(A.P(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hap(d,e){return new C.as2(e,d,null)},
aPw(d,e,f,g,h,i,j){var w=C.i1o(i)
if(w!=null)return A.bw(e,new A.a7(j,f,new C.a5T(w,!0,null),null),B.aq)
return I.aOT(e,B.bU,f,g,h,i,j)},
lC:function lC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5T:function a5T(d,e,f){this.c=d
this.d=e
this.a=f},
bis:function bis(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b2$=e
_.c=_.a=null},
dFb:function dFb(d){this.a=d},
dFc:function dFc(){},
dFd:function dFd(d,e){this.a=d
this.b=e},
bir:function bir(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fI2:function fI2(d){this.a=d},
fI1:function fI1(d,e){this.a=d
this.b=e},
fI0:function fI0(d,e){this.a=d
this.b=e},
fI_:function fI_(d,e){this.a=d
this.b=e},
as2:function as2(d,e,f){this.c=d
this.d=e
this.a=f},
cgn:function cgn(d,e){this.a=d
this.b=e},
aKH:function aKH(){},
i8x(d){var w=null
return A.ca(w,w,!0,w,new C.fHp(),d,w,!0,!0,x.e2)},
i9H(d,e,f,g,h){var w=null
return A.ca(w,w,!0,w,new C.fOT(h,g,f,e),d,w,!0,!0,x.N)},
i8z(d,e){var w=null
return A.ca(w,w,!0,w,new C.fHu(e),d,w,!0,!0,x.dY)},
i8y(d){var w=null
return A.ca(w,w,!0,w,new C.fHt(),d,w,!0,!0,x.c5)},
aSu:function aSu(d,e){this.a=d
this.b=e},
aSt:function aSt(d){this.a=d},
aQs:function aQs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHp:function fHp(){},
fOT:function fOT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHu:function fHu(d){this.a=d},
fHt:function fHt(){},
YD:function YD(d,e){this.c=d
this.a=e},
ay7:function ay7(){var _=this
_.d=$
_.c=_.a=_.e=null},
cZZ:function cZZ(d){this.a=d},
d__:function d__(d){this.a=d},
cZY:function cZY(d,e){this.a=d
this.b=e},
d_0:function d_0(d){this.a=d},
d_1:function d_1(d){this.a=d},
YC:function YC(d){this.a=d},
ay6:function ay6(){this.d=$
this.c=this.a=null},
cZV:function cZV(d){this.a=d},
cZW:function cZW(d){this.a=d},
cZX:function cZX(d){this.a=d},
Ya:function Ya(d){this.a=d},
awR:function awR(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cxz:function cxz(){},
cxF:function cxF(d){this.a=d},
cxG:function cxG(d){this.a=d},
cxH:function cxH(d){this.a=d},
cxE:function cxE(){},
cxI:function cxI(d){this.a=d},
cxJ:function cxJ(d){this.a=d},
cxD:function cxD(){},
cxK:function cxK(d,e){this.a=d
this.b=e},
cxC:function cxC(d,e){this.a=d
this.b=e},
cxA:function cxA(d,e){this.a=d
this.b=e},
cxL:function cxL(d){this.a=d},
cxB:function cxB(){},
cxM:function cxM(d){this.a=d},
a0J:function a0J(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
buM:function buM(){this.d=$
this.c=this.a=null},
f89:function f89(d,e){this.a=d
this.b=e},
f8a:function f8a(d){this.a=d},
f8b:function f8b(d,e){this.a=d
this.b=e},
ab8:function ab8(d,e){this.a=d
this.b=e},
Fw:function Fw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
buK:function buK(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
f87:function f87(d,e){this.a=d
this.b=e},
awK:function awK(d,e){this.c=d
this.a=e},
buL:function buL(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
f88:function f88(d){this.a=d},
buJ:function buJ(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aMJ:function aMJ(){},
aMK:function aMK(){},
bC4(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bm(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oK(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fG0(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.d0(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.d0(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.d0(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aX(B.o.u(s),2,"0")
n.push(A.d0(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.XA(A.d0(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aP8(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aP8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hS().kT(85,1280,B.eG),$async$aP8)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fe(),$async$aP8)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hao()
w=9
return A.b(C.cgm(q,r),$async$aP8)
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
$.am.$1("[worksheets] pick photo failed: "+A.u(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aP8,v)},
aPu(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aPu=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cgj(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gak(g.split(",")):g
p=B.cF.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.W().LA(p,!0,null,i).d8(0,B.fK),$async$aPu)
case 9:n=a1
w=10
return A.b(n.lC(),$async$aPu)
case 10:m=a1
w=11
return A.b(J.a2q(m).hu(B.h0),$async$aPu)
case 11:l=a1
J.a2q(m).t()
if(l==null){w=8
break}i=J.eU(B.dC.gaP(l))
k="data:image/png;base64,"+B.cJ.gct().aK(i)
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
$.am.$1("[worksheets] thumbnail shrink failed: "+A.u(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aPu,v)},
fG0:function fG0(){},
tR:function tR(d){this.a=d},
as1:function as1(d,e,f){this.c=d
this.d=e
this.a=f},
aEh:function aEh(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
eHA:function eHA(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHH:function eHH(d,e){this.a=d
this.b=e},
eHG:function eHG(d,e){this.a=d
this.b=e},
eHD:function eHD(d,e){this.a=d
this.b=e},
eHC:function eHC(d,e){this.a=d
this.b=e},
eHE:function eHE(d){this.a=d},
eHF:function eHF(d,e){this.a=d
this.b=e},
eHI:function eHI(d,e){this.a=d
this.b=e},
eHv:function eHv(d,e){this.a=d
this.b=e},
eHz:function eHz(d){this.a=d},
eHy:function eHy(d,e){this.a=d
this.b=e},
eHx:function eHx(d){this.a=d},
eHK:function eHK(d,e){this.a=d
this.b=e},
eHL:function eHL(d,e){this.a=d
this.b=e},
eHw:function eHw(d,e){this.a=d
this.b=e},
hn8(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.F(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.S(Date.now(),0,!1).a5().ac(),"project",v],x.N,x.z)},
fG1(d,e,f){var w=0,v=A.j(x.N),u
var $async$fG1=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.S.ao(C.hn8(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fG1,v)},
bC6(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bC6=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fG1(!0,d,e),$async$bC6)
case 4:w=3
return A.b(r.as_(g,d,e.a),$async$bC6)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dK.aK(B.S.ao(C.hn8(d,e,null),null))
u="NGMY_WS:"+B.kn.gct().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bC6,v)},
heZ(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h0n(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d1(s,"NGMYWSSYNC2|"))return!0
if(J.d1(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d1(s,"{"))try{w=B.S.aL(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
i6r(d){var w,v,u,t=C.heZ(d)
if(t==null)return null
if(C.h0n(t))return t
w=B.a.cK(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b3(t,w))
if(C.h0n(v))return v}u=B.a.cK(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b3(t,u))
if(C.h0n(v))return v}return null},
h0m(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d1(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d1(q,"NGMY_WS:")){v=B.cf.cz(0,B.cF.aK(J.n8(q,8)))
w=t.a(B.S.aL(0,v,r))}else w=t.a(B.S.aL(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fVQ(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bC5(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bC5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.arZ(t[1]),$async$bC5)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h0m(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h0m(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bC5,v)},
h0l(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lk(w,v,d.c,d.d,new A.S(Date.now(),0,!1))},
bBD(){var w=0,v=A.j(x.o),u,t
var $async$bBD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.GA(),$async$bBD)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h0m(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bBD,v)},
ho5(d,e,f,g){return A.bQ(B.K,null,new C.fOJ(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fOJ:function fOJ(d,e,f){this.a=d
this.b=e
this.c=f},
ad7:function ad7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eHN:function eHN(d,e){this.a=d
this.b=e},
eHO:function eHO(d,e){this.a=d
this.b=e},
eHP:function eHP(d,e){this.a=d
this.b=e},
eHQ:function eHQ(d,e){this.a=d
this.b=e},
eHM:function eHM(d){this.a=d},
arW:function arW(d,e,f){this.c=d
this.d=e
this.a=f},
bk2:function bk2(){var _=this
_.c=_.a=_.e=_.d=null},
eHq:function eHq(d,e){this.a=d
this.b=e},
eHr:function eHr(d){this.a=d},
eHs:function eHs(d){this.a=d},
as0:function as0(d){this.a=d},
aEg:function aEg(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eHu:function eHu(d){this.a=d},
eHt:function eHt(d){this.a=d},
hGf(d,e,f,g,h){return new C.O0(h,g,d,e,f,null)},
aJ3:function aJ3(d,e){this.a=d
this.b=e},
O0:function O0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEi:function aEi(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eIc:function eIc(){},
eI8:function eI8(d,e){this.a=d
this.b=e},
eI9:function eI9(d){this.a=d},
eHU:function eHU(d){this.a=d},
eHS:function eHS(d){this.a=d},
eHT:function eHT(d){this.a=d},
eI2:function eI2(d,e){this.a=d
this.b=e},
eI_:function eI_(d,e){this.a=d
this.b=e},
eI0:function eI0(d,e){this.a=d
this.b=e},
eI1:function eI1(d,e,f){this.a=d
this.b=e
this.c=f},
eHY:function eHY(d,e,f){this.a=d
this.b=e
this.c=f},
eHW:function eHW(d){this.a=d},
eHX:function eHX(d){this.a=d},
eHZ:function eHZ(d){this.a=d},
eIf:function eIf(d){this.a=d},
eIe:function eIe(d){this.a=d},
eIg:function eIg(d){this.a=d},
eId:function eId(d){this.a=d},
eHR:function eHR(d){this.a=d},
eHV:function eHV(d,e){this.a=d
this.b=e},
eIb:function eIb(d,e){this.a=d
this.b=e},
eIa:function eIa(d,e){this.a=d
this.b=e},
eI5:function eI5(d){this.a=d},
eI6:function eI6(d){this.a=d},
eI7:function eI7(d,e){this.a=d
this.b=e},
eI4:function eI4(d,e){this.a=d
this.b=e},
eI3:function eI3(d,e,f){this.a=d
this.b=e
this.c=f},
bws:function bws(){},
AC(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
afD(d,e,f){return C.hVT(d,e,f)},
hVT(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$afD=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$afD)
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
$.am.$1("[worksheets] setString failed for "+e+": "+A.u(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afD,v)},
afC(d,e){return C.hVS(d,e)},
hVS(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$afC=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$afC)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ab(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.u(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$afC,v)},
hUE(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.SF(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bz9(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bz9=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b1D(q),$async$bz9)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aPu(q,!1),$async$bz9)
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
return A.i($async$bz9,v)},
hu_(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.r1(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.r1(p,J.k(u==null?"":u),1,o,q)},
fVQ(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d9(s,x.f)
w=A.cC(w,new C.cwX(),w.$ti.k("J.E"),x.Q)
v=A.a6(w).k("a_<J.E>")
r=A.C(new A.a_(w,new C.cwY(),v),v.k("J.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lk(w,v,u,r,t==null?new A.S(Date.now(),0,!1):t)},
hZS(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.a_8
case"female":case"f":return D.ajO
default:return D.y5}},
hjQ(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
h4y(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hZS(v==null?j:J.k(v))
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
return new C.i1(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hZU(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.MW
case"viewer":return D.kz
default:return D.tN}},
hZV(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Gq(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bAp(d,e){return B.a.i(e.toLowerCase())===C.Gq(d,e)&&d.y!==D.kz},
u2(d,e){var w,v=d.y
if(v===D.kz)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Gq(d,e))return!0
if(v===D.MW)return!0
v=d.e
return new A.M(v,A.h0s(),A.T(v).k("M<1,m>")).q(0,w)},
hZj(d){return J.dJ(d,new C.fqQ()).gL(0)},
fPi(d){var w=0,v=A.j(x.y),u,t
var $async$fPi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.AL(d),$async$fPi)
case 3:u=t.qX(f,new C.fPj(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fPi,v)},
bA8(d,e){var w=0,v=A.j(x.H),u,t
var $async$bA8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.AL(d),$async$bA8)
case 3:t=g
if(J.qX(t,new C.foL(e))){w=1
break}if(C.hZj(t)>=2)throw A.V(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bA8,v)},
akj(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d9(n,x.f)
w=A.cC(w,new C.bNa(),w.$ti.k("J.E"),x.P)
v=A.a6(w).k("a_<J.E>")
m=A.C(new A.a_(w,new C.bNb(),v),v.k("J.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bNc(),x.N)
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
return new C.kD(l,w,v,!s,t,m,r,q,p,C.hZU(o==null?null:J.k(o)))},
hjZ(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
CR(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$CR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rm(d),$async$CR)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ay(),$async$CR)
case 4:t=f
w=5
return A.b(t.a5Z(0),$async$CR)
case 5:w=6
return A.b(C.ffJ(t,l),$async$CR)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a3(q)
o=A.aU(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hfz(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oJ(l,n),$async$CR)
case 11:u=n
w=1
break
case 10:case 8:m=A.aU(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hfz(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oJ(l,n),$async$CR)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$CR,v)},
ffJ(d,e){return C.hS6(d,e)},
hS6(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ffJ=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a3(a3)
a5=A.aU(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AC(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.S.aL(0,a5,null)
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
break}m=A.aU(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AC(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.S.aL(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fVQ(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aU(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AC(a9)+"_"+n))
i=C.hUE(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b1D(h),$async$ffJ)
case 17:g=b1
if(g!=null){i=i.SF(g)
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
case 8:J.Rx(q,new C.ffK())
if(p&&J.ad(q)!==0)C.oJ(a9,q)
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
return A.i($async$ffJ,v)},
bAz(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bAz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Rm(d),$async$bAz)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.CR(r),$async$bAz)
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
return A.i($async$bAz,v)},
hfz(d){var w,v,u,t
try{w=B.S.aL(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d9(w,x.f)
v=A.cC(v,new C.fbB(),v.$ti.k("J.E"),x.i)
u=A.a6(v).k("a_<J.E>")
v=A.C(new A.a_(v,new C.fbC(),u),u.k("J.E"))
B.d.aZ(v,new C.fbD())
return v}catch(t){v=A.a([],x.D)
return v}},
oJ(d,e){return C.i8n(d,e)},
i8n(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oJ=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Rm(b2),$async$oJ)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ay(),$async$oJ)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AC(a8)
p=A.aU(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.S.aL(0,p,null)),new C.fHg(),a2).fM(0)
a2=J.b6(b3,new C.fHh(),a2).c0(0,new C.fHi())
n=A.df(a2,a2.$ti.k("J.E"))
a2=o,a2=A.em(a2,a2.r,A.a6(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.AC(a8)
l=A.aU(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a87(l),$async$oJ)
case 19:t=21
a5=C.AC(a8)
k=A.aU(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.S.aL(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a87(a5==null?null:J.k(a5)),$async$oJ)
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
return A.b(C.afC(r,"ngmy_worksheet_item_v3_"+C.AC(a8)+"_"+m),$async$oJ)
case 29:w=30
return A.b(C.afC(r,"ngmy_worksheet_thumb_v3_"+C.AC(a8)+"_"+m),$async$oJ)
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
case 14:case 10:a2=J.cE(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bz9(h),$async$oJ)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.afD(r,"ngmy_worksheet_thumb_v3_"+C.AC(a8)+"_"+a4,f),$async$oJ)
case 40:g=i.SF(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.afC(r,"ngmy_worksheet_thumb_v3_"+C.AC(a8)+"_"+a4),$async$oJ)
case 41:g=i.SF(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.afC(r,"ngmy_worksheet_thumb_v3_"+C.AC(a8)+"_"+a4),$async$oJ)
case 42:case 34:a4=i.a
w=43
return A.b(C.afD(r,"ngmy_worksheet_item_v3_"+C.AC(a8)+"_"+a4,B.S.ao(g.ag(),null)),$async$oJ)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.u(a8))
w=31
break}J.cd(q,i.a)
w=31
break
case 32:w=44
return A.b(C.afD(r,"ngmy_worksheets_index_v3_"+C.AC(a8),B.S.ao(q,null)),$async$oJ)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.u(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fHj(q))
a4=a3.$ti.k("cP<1,a5<m,@>>")
a7=A.C(new A.cP(a3,new C.fHk(),a4),a4.k("J.E"))
a0=a7
w=45
return A.b(C.afD(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.S.ao(a0,null)),$async$oJ)
case 45:w=46
return A.b(J.ht5(r),$async$oJ)
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
a1=A.ab(b1)
$.am.$1("[worksheets] saveWorksheetProjects error: "+A.u(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$oJ,v)},
Lc(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Lc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.CR(d),$async$Lc)
case 3:t=g
s=J.cE(t)
r=s.bg(t,new C.fPh(e))
if(r===-1)s.ca(t,0,e)
else s.n(t,r,e)
u=C.oJ(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Lc,v)},
bAm(d,e){var w=0,v=A.j(x.H),u
var $async$bAm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.CR(d),$async$bAm)
case 2:u=g
J.nt(u,new C.frj(e))
w=3
return A.b(C.oJ(d,u),$async$bAm)
case 3:return A.h(null,v)}})
return A.i($async$bAm,v)},
Gs(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Gs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$Gs)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aU(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.S.aL(0,i,null)
if(x.j.b(t)){j=J.d9(t,x.f)
j=A.cC(j,new C.fu6(),j.$ti.k("J.E"),x.k)
s=A.a6(j).k("a_<J.E>")
r=A.C(new A.a_(j,new C.fu7(),s),s.k("J.E"))
B.d.aZ(r,new C.fu8())
k=r}}catch(h){}w=4
return A.b(C.fcl(d),$async$Gs)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hSt(k,p,d)
j=A.T(o)
s=j.k("M<1,a5<m,@>>")
s=A.C(new A.M(o,new C.fu9(),s),s.k("ak.E"))
n=B.S.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Qz(d,o),$async$Gs)
case 7:case 6:j=j.k("a_<1>")
m=A.C(new A.a_(o,new C.fua(d),j),j.k("J.E"))
if(m.length!==0)C.aO1(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Gs,v)},
fH2(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fH2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Qz(d,e),$async$fH2)
case 3:t=J.dJ(e,new C.fH3(d))
s=A.C(t,t.$ti.k("J.E"))
if(s.length===0){u=!0
w=1
break}u=C.aO1(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fH2,v)},
a2j(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a2j=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ay(),$async$a2j)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aU(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.S.aL(0,l,null)
if(x.j.b(u)){m=J.d9(u,x.f)
m=A.cC(m,new C.fPc(),m.$ti.k("J.E"),x.k)
t=A.a6(m).k("a_<J.E>")
s=A.C(new A.a_(m,new C.fPd(),t),t.k("J.E"))
o=s}}catch(k){}q=J.qj(o,new C.fPe(e))
if(B.a.i(e.x).length===0&&C.u2(e,d)){m=B.a.i(d.toLowerCase())
p=e.aDy(e.y===D.kz?D.kz:D.tN,m)}else p=e
if(q===-1)J.pA(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.Qz(d,o),$async$a2j)
case 3:w=C.u2(p,d)?4:5
break
case 4:w=6
return A.b(C.aO0(C.Gq(p,d),p),$async$a2j)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a2j,v)},
aOc(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aOc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Gs(d),$async$aOc)
case 2:u=g
t=J.cE(u)
s=A.ri(t.eP(u,new C.fr0(e)))
t.bs(u,new C.fr1(e))
w=3
return A.b(C.Qz(d,u),$async$aOc)
case 3:w=s!=null&&C.bAp(s,d)?4:5
break
case 4:w=6
return A.b(C.fbF(e),$async$aOc)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aOc,v)},
ahs(d){var w=d.f,v=A.T(w).k("a_<1>")
w=A.C(new A.a_(w,new C.fPn(),v),v.k("J.E"))
return w},
fZ1(d,e){var w,v=d.f,u=A.ri(new A.a_(v,new C.fqv(e),A.T(v).k("a_<1>")))
v=C.ahs(d)
w=A.T(v).k("a_<1>")
v=A.C(new A.a_(v,new C.fqw(e,u),w),w.k("J.E"))
B.d.aZ(v,new C.fqx())
return v},
hZY(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
ho9(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.fZ1(d,u),new C.fOU(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
i0t(d,e){var w
if(e==null||e.length===0)return 1
w=C.fZ1(d,e)
if(w.length===0)return 1
return new A.M(w,new C.fuT(),A.T(w).k("M<1,H>")).ff(0,B.Aj)+1},
i8g(d){var w,v=C.ahs(d)
if(v.length===0)return null
w=new A.a_(v,new C.fGX(),A.T(v).k("a_<1>"))
if(!w.gal(0))return w.gH(0)
return B.d.gH(v)},
hZT(d){return A.F(["id",d.a,"name",d.b,"gender",C.hjQ(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
i0p(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aY(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.L)(a0),++u){q=a0[u]
p=q.a
r.M(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.y5?n:q.c
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
d=q.aDt(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.L)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cIZ(a1,w,a3.d,a2.y,s,a0,v)},
AL(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$AL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$AL)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aU(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.S.aL(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d9(t,x.f)
p=A.cC(p,new C.fu3(),p.$ti.k("J.E"),x.k)
s=A.a6(p).k("a_<J.E>")
p=A.C(new A.a_(p,new C.fu4(),s),s.k("J.E"))
B.d.aZ(p,new C.fu5())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$AL,v)},
ahd(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ahd=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tN:D.kz
a7=C.Gq(b2,b3)
w=2
return A.b(C.AL(b1),$async$ahd)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bg(a8,new C.fGS(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bA8(b1,b2),$async$ahd)
case 5:case 4:if(b0===-1){u=b2.aDy(a6,a7)
a9.ca(a8,0,u)}else{t=a9.h(a8,b0)
s=A.U(x.N,x.P)
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
i=i!==D.y5?i:l.c
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
s.n(0,m,l.aDt(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("J.E"))
k=a5?D.tN:D.kz
u=t.yC(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Qz(b1,a8),$async$ahd)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aO0(B.a.i(b3.toLowerCase()),u),$async$ahd)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ahd,v)},
hfY(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.S(Date.now(),0,!1).a5().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("M<1,a5<m,@>>"),k=A.C(new A.M(m,C.hnh(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.F(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.F(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a5().ac(),"updatedAt",o],r,x.K),"createdAt",s.a5().ac(),"updatedAt",o],r,x.z)},
hfZ(d,e){var w=new A.S(Date.now(),0,!1).a5().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("M<1,a5<m,@>>")
u=A.C(new A.M(u,C.hnh(),t),t.k("ak.E"))
return A.F(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a5().ac(),"updatedAt",w],x.N,x.z)},
hQ4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a3(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.akj(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.M(j,A.h0s(),A.T(j).k("M<1,m>")).c0(0,new C.fc8())
t=A.C(j,j.$ti.k("J.E"))
if(u===v)s=D.tN
else s=B.d.q(t,u)?D.MW:D.kz
return w.aDy(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.akj(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d9(q,h)
h=A.cC(h,new C.fc9(),h.$ti.k("J.E"),x.P)
p=A.a6(h).k("a_<J.E>")
o=A.C(new A.a_(h,new C.fca(),p),p.k("J.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fcb(),x.N).c0(0,new C.fcc())
t=A.C(h,h.$ti.k("J.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tN
else s=B.d.q(t,u)?D.MW:D.kz
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
fcl(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fcl=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fcp()
h=x.N
g=x.z
w=7
return A.b(A.iO(A.a([A.lq("family_trees","*",null,A.F(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bJ),r.$2(A.lq("family_trees","*",A.F(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bJ),"collaborator"),r.$2(A.lq("family_trees","*",null,A.F(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bJ),"public")],x.cl),x.U),$async$fcl)
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
for(;f<l.length;l.length===h||(0,A.L)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aG(m,j,k)}l=m
h=A.a6(l).k("bc<2>")
h=A.cC(new A.bc(l,h),new C.fcm(a0),h.k("J.E"),x.k)
l=A.a6(h).k("a_<J.E>")
l=A.C(new A.a_(h,new C.fcn(),l),l.k("J.E"))
B.d.aZ(l,new C.fco())
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
else h.$1("[family_trees] fetch error: "+A.u(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fcl,v)},
hSt(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a3(e)
if(j.gal(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dB(e,new C.fgp(),v).c0(0,new C.fgq())
t=A.df(u,u.$ti.k("J.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.L)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Gq(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kz){m=q.e
m=!new A.M(m,A.h0s(),A.T(m).k("M<1,m>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.i0p(l,v)
o=C.Gq(k,w)
p=v.d
s.n(0,u,o===w?k.bbt(p,D.tN):k.bbt(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("J.E"))
B.d.aZ(j,new C.fgr())
return j},
Qz(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Qz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$Qz)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fj6(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.S.ao(s,null)),$async$Qz)
case 3:return A.h(null,v)}})
return A.i($async$Qz,v)},
aO0(d,e){return C.hXG(d,e)},
hXG(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aO0=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lV("family_trees",A.a([C.hfY(e,d)],p),null,B.cG),$async$aO0)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lV("family_trees",A.a([C.hfZ(e,d)],p),null,B.cG),$async$aO0)
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
$.am.$1("[family_trees] upsert error: "+A.u(q))
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
aO1(d,e){return C.hXH(d,e)},
hXH(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aO1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("M<1,a5<m,@>>")
m=n.k("ak.E")
l=A.C(new A.M(e,new C.fo3(d),n),m)
r=l
w=7
return A.b(A.lV("family_trees",r,null,B.cG),$async$aO1)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.M(e,new C.fo4(d),n),m)
p=k
w=8
return A.b(A.lV("family_trees",p,null,B.cG),$async$aO1)
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
$.am.$1("[family_trees] bulk upsert error: "+A.u(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aO1,v)},
fbF(d){return C.hPp(d)},
hPp(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fbF=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.QX("family_trees",A.F(["id",d],x.N,x.z),null,B.cG),$async$fbF)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ab(p)
$.am.$1("[family_trees] delete error: "+A.u(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fbF,v)},
r1:function r1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lk:function lk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cx_:function cx_(){},
cwZ:function cwZ(){},
cwX:function cwX(){},
cwY:function cwY(){},
Hz:function Hz(d,e){this.a=d
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
aki:function aki(d,e){this.a=d
this.b=e},
fqQ:function fqQ(){},
fPj:function fPj(d){this.a=d},
foL:function foL(d){this.a=d},
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
bNe:function bNe(){},
bNd:function bNd(){},
bNa:function bNa(){},
bNb:function bNb(){},
bNc:function bNc(){},
ffK:function ffK(){},
fbB:function fbB(){},
fbC:function fbC(){},
fbD:function fbD(){},
fHg:function fHg(){},
fHh:function fHh(){},
fHi:function fHi(){},
fHj:function fHj(d){this.a=d},
fHk:function fHk(){},
fPh:function fPh(d){this.a=d},
frj:function frj(d){this.a=d},
fu6:function fu6(){},
fu7:function fu7(){},
fu8:function fu8(){},
fu9:function fu9(){},
fua:function fua(d){this.a=d},
fH3:function fH3(d){this.a=d},
fPc:function fPc(){},
fPd:function fPd(){},
fPe:function fPe(d){this.a=d},
fr0:function fr0(d){this.a=d},
fr1:function fr1(d){this.a=d},
fPn:function fPn(){},
fqv:function fqv(d){this.a=d},
fqw:function fqw(d,e){this.a=d
this.b=e},
fqx:function fqx(){},
fOU:function fOU(d){this.a=d},
fuT:function fuT(){},
fGX:function fGX(){},
fu3:function fu3(){},
fu4:function fu4(){},
fu5:function fu5(){},
fGS:function fGS(d){this.a=d},
fc8:function fc8(){},
fc9:function fc9(){},
fca:function fca(){},
fcb:function fcb(){},
fcc:function fcc(){},
fcp:function fcp(){},
fcq:function fcq(d){this.a=d},
fcm:function fcm(d){this.a=d},
fcn:function fcn(){},
fco:function fco(){},
fgp:function fgp(){},
fgq:function fgq(){},
fgr:function fgr(){},
fj6:function fj6(){},
fo3:function fo3(d){this.a=d},
fo4:function fo4(d){this.a=d},
cx0:function cx0(d,e){this.a=d
this.b=e},
cx1:function cx1(d,e){this.a=d
this.b=e},
aGl:function aGl(d,e,f){this.a=d
this.b=e
this.c=f},
b7X:function b7X(){this.b=this.a=0},
b7W:function b7W(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
buN:function buN(){},
wN(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcf()+"/"+w.gcv()+"/"+w.gcj()
if(!e)return v
return v+" "+B.a.aX(B.o.u(w.gnd()),2,"0")+":"+B.a.aX(B.o.u(w.gGd()),2,"0")},
hGc(){var w,v=$.pw(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"WS"+B.d.hs(u)},
arX(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$arX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c2(),$async$arX)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bJ),$async$arX)
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
$.am.$1("[worksheet qr stash] load: "+A.u(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$arX,v)},
arY(d){return C.hGd(d)},
hGd(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$arY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c2(),$async$arY)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hI("ngmy_worksheet_project_qr_stashes_v1",A.F(["stashes",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cG,null),$async$arY)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.am.$1("[worksheet qr stash] save: "+A.u(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$arY,v)},
as_(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$as_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c2(),$async$as_)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hGc()
w=4
return A.b(C.arX(),$async$as_)
case 4:r=h
q=B.a.i(e)
p=B.dK.aK(t)
J.aG(r,s,A.F(["ownerEmail",q,"projectId",f,"payload",B.cJ.gct().aK(p),"usesRemaining",25,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(C.arY(r),$async$as_)
case 5:u=new A.a_P("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$as_,v)},
arZ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$arZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c2(),$async$arZ)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.arX(),$async$arZ)
case 4:q=f
p=J.a3(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a3(o)
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
try{s=B.cf.cz(0,B.cF.aK(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.u(r))
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
m.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
p.n(q,i,m)}w=5
return A.b(C.arY(q),$async$arZ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arZ,v)},
hao(){var w=new A.S(Date.now(),0,!1).a5()
return"wst_"+(1000*w.a+w.b)+"_"+B.cW.az(999999)},
hGe(d){var w,v,u,t,s,r,q
try{w=A.ag2(d)
if(w==null)return d
v=w
if(J.Li(v)>960||J.Lh(v)>960){s=v
r=J.Li(v)>=J.Lh(v)?960:null
v=A.ag1(s,J.Lh(v)>J.Li(v)?960:null,B.Od,r)}s=v
u=A.alG(82).T1(s,B.yI)
if(J.ad(u)===0)return d
s=new Uint8Array(A.ce(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.u(t))
return d}},
cgm(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cgm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hGe(e)
$.cgi.n(0,s,t)
u=C.bC8(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgm,v)},
b1D(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1D=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d1(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gak(J.ls(l,",")):l
q=B.cF.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hao()
w=7
return A.b(C.cgm(p,q),$async$b1D)
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
$.am.$1("[worksheet-thumb] persistDataUrl failed: "+A.u(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b1D,v)},
cgj(d){var w=0,v=A.j(x.T),u,t,s
var $async$cgj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cgl(s),$async$cgj)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cJ.gct().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgj,v)},
a87(d){var w=0,v=A.j(x.H),u,t
var $async$a87=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.hn9(d)
if(t==null){w=1
break}$.cgi.W(0,t)
w=3
return A.b(C.bC7(t),$async$a87)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a87,v)},
bC8(d,e){return C.i6u(d,e)},
i6u(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bC8=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aMW
w=7
return A.b(n==null?$.aMW=I.fXZ():n,$async$bC8)
case 7:r=g
q=new Uint8Array(A.ce(e))
p=J.mI(r,"thumbs","readwrite")
B.iP.mi(J.mH(p,"thumbs"),q,l)
w=8
return A.b(J.pz(p),$async$bC8)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ab(k)
$.am.$1("[worksheet-thumb idb put] "+A.u(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bC8,v)},
bC7(d){return C.i6s(d)},
i6s(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bC7=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aMW
w=7
return A.b(o==null?$.aMW=I.fXZ():o,$async$bC7)
case 7:r=f
q=J.mI(r,"thumbs","readwrite")
B.iP.FK(J.mH(q,"thumbs"),m)
w=8
return A.b(J.pz(q),$async$bC7)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ab(l)
$.am.$1("[worksheet-thumb idb delete] "+A.u(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bC7,v)}},D,Ak,Al,R,Am,An,I
J=c[1]
A=c[0]
B=c[2]
A1=c[77]
N=c[235]
S=c[150]
A2=c[219]
G=c[200]
F=c[31]
E=c[210]
A3=c[114]
A4=c[221]
A5=c[110]
A6=c[187]
T=c[100]
U=c[111]
A7=c[218]
A8=c[37]
L=c[217]
A9=c[80]
H=c[88]
Aa=c[157]
Ab=c[120]
V=c[159]
W=c[231]
X=c[188]
Ac=c[179]
Ad=c[191]
Y=c[186]
Ae=c[65]
Af=c[71]
Z=c[204]
Ag=c[236]
Ah=c[30]
Ai=c[112]
K=c[181]
Aj=c[192]
A_=c[234]
A0=c[227]
O=c[102]
P=c[99]
M=c[135]
Q=c[69]
C=a.updateHolder(c[6],C)
D=c[230]
Ak=c[70]
Al=c[198]
R=c[233]
Am=c[232]
An=c[56]
I=c[54]
C.anR.prototype={}
C.aXW.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bfQ(),f=h.x!=null&&h.z_(i).length===0
if(h.x!=null)w=f?B.aZ:B.bx
else w=h.gTF()?B.bx:B.dS
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.I(D.bgR,B.q,1)
s=x.p
r=A.p(i,A.w(A.a([A.p(i,D.eQT,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.n(999),i,i,B.n),i,i,i,i,B.h7,i,i,i),B.R,D.fjO,B.av,A.d(C.wN(new A.S(Date.now(),0,!1),!0),i,i,i,i,i,i,D.ffI,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.b0R,i,i,i,i,B.Z6,i,i,i)
q=A.n(16)
p=A.I(B.aL,B.q,1)
o=A.I(B.aZ.j(0.28),B.q,1)
n=A.h_0(h.d)
o=A.p(B.A,C.aXV(A.fxd(h.e,n),30),B.f,i,i,new A.o(B.lQ,i,o,i,i,i,B.a5),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fb8,B.L,i,i)
m=A.n(14)
l=A.I(B.aL,B.q,1)
q=A.p(i,A.w(A.a([o,B.N,n,B.bz,D.fk5,B.ac,A.p(i,A.w(A.a([D.fzz,B.bz,A.d(A.AN(h.c),i,i,i,i,i,i,D.f6a,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f8,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aO,i,p,q,i,i,B.n),i,i,i,i,K.ahU,i,i,i)
p=A.n(16)
m=A.I(B.aL,B.q,1)
l=j.aQc("Original due",C.wN(h.r,!1))
n=j.aQc("Current due",C.wN(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.R,A.p(i,A.w(A.a([l,B.N,n,B.R,A.p(i,A.d(h.gaKn(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.B7,i,i,1/0),B.R,j.ces(),B.N,j.c26(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.I(B.aL,B.q,1)
B.d.v(p,A.a([B.R,A.p(i,A.w(A.a([D.fl1,B.av,A.d(q,i,i,i,i,i,i,D.far,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aO,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaF9()){q=A.n(14)
o=A.I(B.cr,B.q,1.6)
B.d.v(p,A.a([B.R,A.p(i,A.w(A.a([D.fAT,B.N,A.bw(A.n(12),A.el(new A.a7(1/0,88,A.b3(i,i,i,new A.VH(h.ax,B.M,D.eV6,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Fr,i,i,i)],s))}p.push(B.aB)
p.push(D.ft0)
return A.p(i,A.w(A.a([r,new A.D(B.ahX,A.w(p,B.ai,i,B.e,B.j,0,B.p),i)],s),B.ai,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aQc(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.a8s,w,w,w),1),A.d(e,w,w,w,w,w,w,D.f79,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
ces(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a9a(B.dS,u,"Not paid yet")
w=t.z_(null).length
v=w===0?B.aZ:B.bx
return this.a9a(v,u,C.wN(t.x,!0))},
c26(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a9a(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a9a(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a8s,u,u,u)
v=A.T(d).k("M<1,hc>")
v=A.C(new A.M(d,new C.c29(),v),v.k("ak.E"))
return A.w(A.a([w,B.am,A.bZ(B.bC,v,B.br,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a9a(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.a8s,w,w,w),1),new A.dq(1,B.cm,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dP,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.ba3.prototype={
a6(d,e){new A.VH(this.b,B.M,e,!0,3.5,null).a6(d,e)},
av(d){return d.b!==this.b}}
C.ao2.prototype={
U(){return new C.aCi(A.a([],x.bp))},
ge1(){return this.c}}
C.aCi.prototype={
a_(){this.a1()
this.IH()},
IH(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a1A(t.a.c),$async$IH)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dG3(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IH,v)},
aS8(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aO,s=A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bs:B.bm).j(0.22)
w=A.n(10)
return A.bs(v,new A.b4(4,r,new A.az(u,1,B.q,-1)),v,B.bk,v,v,v,v,!0,new A.b4(4,w,new A.az((this.a.d.a?B.bs:B.bm).j(0.22),1,B.q,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.n(10),D.aZu),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aS7(d){return this.aS8(d,null)},
Pl(d){return this.ci3(d)},
ci3(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pl=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.GK:B.eG
w=7
return A.b(new A.hS().C3(72,900,900,n),$async$Pl)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fe(),$async$Pl)
case 8:p=f
n=B.cJ.gct().aK(p)
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
if(n!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Could not pick photo: "+A.u(o),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Pl,v)},
b_H(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aO,o=A.n(10),n=A.I((q?B.bs:B.bm).j(0.18),B.q,1)
if(d)q=B.cN
else q=s.a.d.a?B.bs:B.bm
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aO:B.au,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cN
else u=s.a.d.a?B.bs:B.bm
t=x.p
u=A.E(A.w(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a6,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fx(r,r,r,r,r,r,r,r,r,r,r,B.cN,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cc)
q=A.a([q,B.ab,u,A.bK(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.X(B.cy,s.a.d.a?B.bs:B.bm,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cc))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jF,D.bt_,r,r,r)},
D2(d){return this.bz5(d)},
bz4(){return this.D2(null)},
bz5(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D2=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.ar(new A.bb(a4,B.b3,B.aM),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.ja(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ab(p,2)}o=new A.ar(new A.bb(a4,B.b3,B.aM),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ar(new A.bb(a4,B.b3,B.aM),s)
if(a3){a4=new A.S(Date.now(),0,!1).bS(6048e8)
m=A.c1(a4.gcj(),a4.gcf(),a4.gcv(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcj(),a4.gcf(),a4.gcv(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bn(a4,!0,x.cT)
i=a3?null:A.h_0(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.we?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hY(B.w.j(0.55),!0,"Dismiss",a4,new C.dFN(),new C.dFO(a2,t,a5,r,new C.dFP(a2,t),o,n,j),B.eJ,!0,x.y),$async$D2)
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
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.f0x)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.f_c)
w=1
break}a1=A.fxd(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.we?"male":"female"
w=7
return A.b(A.ahr(a3,A.h76(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$D2)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.we?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcj(),a3.gcf(),a3.gcv(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcj(),a4.gcf(),a4.gcv(),0,0,0,0,0)))a5.cL8(a2.a)
w=8
return A.b(A.ahr(t.a.c,a5),$async$D2)
case 8:case 5:w=9
return A.b(t.IH(),$async$D2)
case 9:case 1:return A.h(u,v)}})
return A.i($async$D2,v)},
aSL(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cN.j(0.14)
else w=this.a.d.a?B.M:B.aO
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cN
else s=(this.a.d.a?B.bs:B.bm).j(0.2)
s=A.I(s,B.q,g?1.5:1)
r=C.aXV(d,18)
if(g)q=B.cN
else q=this.a.d.a?B.aO:B.au
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.p(p,A.B(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b7,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ag)},
S1(d){return this.czH(d)},
czH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$S1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hY(B.w.j(0.55),!0,"Dismiss",s,new C.dG6(),new C.dG7(t,d),B.hw,!0,x.y),$async$S1)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.S(s,0,!1)
case 4:w=7
return A.b(A.ahr(t.a.c,d),$async$S1)
case 7:w=8
return A.b(t.IH(),$async$S1)
case 8:case 1:return A.h(u,v)}})
return A.i($async$S1,v)},
NZ(d,e){return this.bJV(0,e)},
bJV(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.l6(s,"Cancel","Delete",e.b+" \xb7 "+A.AN(e.c)+" will be removed from this device.","Delete this debt?"),$async$NZ)
case 3:if(!g){w=1
break}w=4
return A.b(C.fr7(t.a.c,e.a),$async$NZ)
case 4:w=5
return A.b(t.IH(),$async$NZ)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NZ,v)},
aeE(d){return this.cbU(d)},
cbU(d){var w=0,v=A.j(x.H),u=this,t
var $async$aeE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bQ(B.K,null,new C.dG0(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aeE)
case 2:return A.h(null,v)}})
return A.i($async$aeE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ecr
w=J.dJ(m.d,new C.dG8())
v=A.C(w,w.$ti.k("J.E"))
w=J.dJ(m.d,new C.dG9())
u=A.C(w,w.$ti.k("J.E"))
t=B.d.cM(v,0,new C.dGa())
w=A.n(18)
s=m.a.d.a
r=s?D.cr0:D.ayg
q=A.I(s?B.cN.j(0.35):B.cN.j(0.18),B.q,1)
s=A.p(l,D.bT7,B.f,l,l,new A.o(B.cN.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.au,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.n(12),A.aK(!1,A.n(12),!0,D.ebQ,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dGb(m),l,l,l,l,l,l,l),B.f,B.cN,0,l,l,l,l,l,B.ag)],p),B.m,l,B.e,B.j,0,l,l)
o=A.E(m.cvR("Open",""+v.length),1)
n=v.length===0?"$0.00":A.AN(t)
r=A.a([A.p(l,A.w(A.a([s,B.ac,A.B(A.a([o,B.ab,A.E(m.b5O(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a8(B.ay,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.ahR,l,l,l),B.aB],p)
if(J.cm(m.d)){w=m.a.d.a
s=w?B.e_:B.c
q=A.n(18)
o=A.I((w?B.bs:B.bm).j(0.12),B.q,1)
n=A.p(l,D.bO1,B.f,l,l,new A.o(B.cN.j(0.12),l,l,A.n(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.au,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.w(A.a([n,B.ac,w,B.av,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bm,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bvq,l,l,1/0))}else{w=m.gchk()
s=A.C(new A.M(v,w,A.T(v).k("M<1,t>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bx6,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bm,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.M(u,w,A.T(u).k("M<1,t>")))
B.d.v(s,q)}B.d.v(r,s)}return A.w(r,B.ai,l,B.e,B.j,0,B.p)},
b5O(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.n(14),r=A.I((v.a.d.a?B.bs:B.bm).j(0.12),B.q,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bm,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cN
else w=v.a.d.a?B.aO:B.au
return A.p(u,A.w(A.a([q,B.bz,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eu,u,u,u)},
cvR(d,e){return this.b5O(!1,d,e)},
chl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.z_(j).length,h=d.bf2()
if(d.x!=null){w=d.z_(j).length
v=w===0?B.cN:B.bx}else if(d.gTF())v=B.bx
else{if(h)w=B.cN
else w=k.a.d.a?B.bs:B.bm
v=w}if(d.x!=null){w=d.z_(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wN(u,!1)}else{u.toString
t="Paid "+C.wN(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wN(w,!1)+" \xb7 "+i+" missed":"Due "+C.wN(w,!1)}w=k.a.d.a?B.e_:B.c
u=A.n(18)
if(d.gTF()&&d.x==null)s=B.bx.j(0.35)
else s=(k.a.d.a?B.bs:B.bm).j(0.12)
s=A.I(s,B.q,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bl:B.lQ
o=A.I(d.gTF()&&d.x==null?B.bx.j(0.45):B.cN.j(0.28),B.q,1.4)
n=d.x!=null?0.55:1
m=A.h_0(d.d)
o=A.p(B.A,A.db(C.aXV(A.fxd(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a5),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aO:B.au
m=x.p
n=A.a([new A.dq(1,B.cm,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaF9())B.d.v(n,A.a([B.eg,A.X(B.Nm,B.cN.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.cQ,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.AN(d.c)
l=k.a.d.a?B.aO:B.au
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aK(!1,q,!0,new A.D(W.ahD,A.B(A.a([o,B.bd,p,B.ab,A.w(A.a([n,B.bz,A.X(B.eA,(k.a.d.a?B.bs:B.bm).j(0.5),j,j,j,18)],m),B.dA,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dG2(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ag),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d9,j,j,j,j)}}
C.ui.prototype={}
C.akh.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bh
u=v?B.F:B.m
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.I(q,B.q,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.q,1)
n.push(A.aB(a0,A.p(a0,A.X(B.cy,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a5),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a7))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.il,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.auD,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.FJ,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eM(m,A.B(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.dZ)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bsc,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cE:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fq,A.w(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eVU)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vv,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a3,B.a8,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.ln,A.w(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.q,1),a2,a0,a0,B.n),a0,a0,a0,B.hi,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ay,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.btq,a0,a0,a0,a0)}}
C.aTI.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bh?B.bh:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cE,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.cQ,n],m)
if(p.z)o.push(new A.D(B.vs,n,q))
return new A.D(B.d9,A.w(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.SB.prototype={
U(){return new C.bdE()}}
C.bdE.prototype={
gbY6(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.ecm,D.ecs],l)
for(w=0;w<8;++w){v=D.a2b[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Gt:B.BT
q=t===s
r=A.X(r,q?B.eC:B.c_,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.y(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bB(1,B.bg,new A.y(v.c,n,A1.Du,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aR(24,24)
p=new A.az(B.eC,2,B.q,-1)
s=new A.o(n,n,new A.bO(p,p,p,p),new A.bo(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eE,A.w(A.a([new A.D(B.mu,new A.ck(B.aN,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.DS(!0,new C.akh(v,q.d,q.e,new C.d6c(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d6d(o,v),n,n,n,n,n,n,!1,B.a7))}k.push(new A.D(D.btJ,A.bG(D.fGd,new C.d6e(o,d),A.bm(B.b5,n,n,n,n,B.oi,n,n,new A.b7(A.n(16),B.W),n,n,n)),n))
return A.bl(!0,new A.cT(new A.aX(0,1/0,0,m.a.b*0.9),A.cy(k,n,D.bxY,n,n,B.ah,!0),n),!0,!1,B.ae,!0,!0)}}
C.ne.prototype={
ag(){var w=this
return A.F(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a5().ac()],x.N,x.z)},
bbF(d,e,f){return new C.ne(this.a,e,d,f)}}
C.Hy.prototype={
wj(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Hy(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aDn(d){var w=null
return this.wj(w,w,w,w,w,d,w,w,w,w,w,w)},
cGX(d){var w=null
return this.wj(w,w,w,w,d,w,w,w,w,w,w,w)},
bbD(d,e,f){var w=null
return this.wj(d,w,w,w,w,w,w,w,e,w,f,w)},
cHB(d){var w=null
return this.wj(w,w,w,w,w,w,d,w,w,w,w,w)},
cHK(d){var w=null
return this.wj(w,w,w,w,w,w,w,w,w,d,w,w)},
cGV(d){var w=null
return this.wj(w,w,w,d,w,w,w,w,w,w,w,w)},
cHM(d){var w=null
return this.wj(w,w,w,w,w,w,w,w,w,w,w,d)},
cGS(d){var w=null
return this.wj(w,w,d,w,w,w,w,w,w,w,w,w)},
cGN(d){var w=null
return this.wj(w,d,w,w,w,w,w,w,w,w,w,w)},
FC(d){var w=null
return this.wj(w,w,w,w,w,w,w,d,w,w,w,w)},
cHU(d,e,f,g,h,i,j,k,l,m,n){return this.wj(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.F(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cEz(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bN9(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.CC.gep(D.CC))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a3L)
q=l.$2("frame",D.a3a)
l=l.$2("texture",D.a36)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cHU(p,u,t,q,r,A.qR(d.h(0,"ribbon"))?A.G2(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Z0.prototype={
U(){return new C.azm(A.a([],x.I),D.MV)},
ge1(){return this.c}}
C.azm.prototype={
a_(){var w,v=this
v.a1()
v.f=A.zF(0,1)
w=$.aw()
v.z=new A.ar(B.as,w)
v.Q=new A.ar(B.as,w)
v.l_()
w=v.a
C.bAw(w.c,w.d).bJ(new C.d6T(v),x.fL)},
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
l_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$l_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.KM(s.c,s.d),$async$l_)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d6H(t,r))
t.avh()
case 1:return A.h(u,v)}})
return A.i($async$l_,v)},
garS(){var w,v=this
if(!J.cm(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
avh(){var w,v,u=this.garS(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saU(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saU(0,w==null?"":w)},
cak(d){this.m(new C.d6E(this,d))
this.avh()},
Nk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Nk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.ne(B.o.u(1000*Date.now()),"Untitled page","",new A.S(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aPP(r.c,r.d,s),$async$Nk)
case 3:w=4
return A.b(t.l_(),$async$Nk)
case 4:if(t.c==null||J.cm(t.d)){w=1
break}q=J.qj(t.d,new C.d6f(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.d6g(t,p))
t.avh()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.B4(p+1,B.ct,B.kx),$async$Nk)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Nk,v)},
AK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.garS()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aPP(o.c,o.d,new C.ne(s,r,q,new A.S(p,0,!1))),$async$AK)
case 3:w=4
return A.b(t.l_(),$async$AK)
case 4:if(t.c==null){w=1
break}t.m(new C.d6I(t))
case 1:return A.h(u,v)}})
return A.i($async$AK,v)},
O_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.garS()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6o(r),s,null,!0,!0,x.y),$async$O_)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bAi(s.c,s.d,r.a),$async$O_)
case 4:t.m(new C.d6p(t))
w=5
return A.b(t.l_(),$async$O_)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.TI(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$O_,v)},
ym(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$ym=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$ym)
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
return A.b(C.QQ(s,r.r,o,p,q),$async$ym)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a4(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hnJ(s,r.x,r.r),$async$ym)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.KM(s.c,s.d),$async$ym)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.ne(""+(m+k),q,B.a.i(j.b),new A.S(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.AW(r.c,r.d,l),$async$ym)
case 11:w=12
return A.b(t.l_(),$async$ym)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$ym,v)},
a0i(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0i=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$a0i)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyk(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dK(D.yR,new C.d6F(t),new C.d6G())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mt("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gT(o)
p.push(new F.mt(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.h0E(o,new F.rn(s,r,"",p,new F.uA(q.d,null,null,null,null,"","","")),null),$async$a0i)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a0i,v)},
NI(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$NI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$NI)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bQ(D.adh,null,new C.d6k(t),s,!0,!0,!0,P.a6J,!1,!1,x.N),$async$NI)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cGX(r)
t.m(new C.d6l(t,q))
s=t.a
w=7
return A.b(C.Rp(s.c,s.d,q),$async$NI)
case 7:case 1:return A.h(u,v)}})
return A.i($async$NI,v)},
WS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bQ(D.adh,null,new C.d6q(t),r,!0,!0,!0,P.a6J,!1,!1,x.e),$async$WS)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d6r(t,s))
r=t.a
w=4
return A.b(C.Rp(r.c,r.d,s),$async$WS)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.B4(0,B.dX,B.n7)
case 1:return A.h(u,v)}})
return A.i($async$WS,v)},
bPi(d){var w=d.bU(),v=B.a.aX(B.o.u(w.gcf()),2,"0"),u=B.a.aX(B.o.u(w.gcv()),2,"0")
return""+w.gcj()+"-"+v+"-"+u},
gyk(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bXm()
if(r.e)w=D.ac6
else if(J.cm(r.d)){w=r.y
v=r.gyk(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.f5B,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a7(q,330,new A.D(A0.aiS,new C.Yj(w,v,0,q),q),q),B.bw,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kr.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bw],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.eQG,B.f,q,q,new A.o(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.dN.j(0.45),B.J,18)],x.V),E.w4,B.n),q,q,q,q,B.Zh,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcDH(),q,q,q,q,q,q,!1,B.a7))
w.push(B.R)
w.push(A.hn(D.bKe,D.fFG,r.gaM6(),q))
B.d.v(u,w)}w=A.au(A.cc(A.w(u,B.m,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.eD,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kr.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dT:B.Ah
u=A.w(A.a([new A.D(D.buK,w,q),A.E(A.IT(v,new C.d6R(r),J.ad(r.d)+1,q,r.gcaj(),u,B.aN),1),r.bBZ()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c6(q,D.aeC,new A.an(B.V,q,B.b0,B.r,A.a([D.aLn,A.bl(!0,A.w(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0)],v),q),q,!1,!1,q,q)},
bXm(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.JS(B.e0,"AI",h.gbzS(),!0))
if(h.a.f)f.push(new C.JS(B.nh,"Cover",h.gbKt(),!1))
if(h.a.f)f.push(new C.JS(B.yx,"Header",h.gbFv(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.JS(B.u4,"Print",h.gcjm(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hA:B.jp
t=v?"Save":"Edit"
f.push(new C.JS(u,t,v?h.gcpD():new C.d6B(h),!1))}if(h.a.f)f.push(new C.JS(B.hz,"Add page",h.gaM6(),!1))
v=C.hjP(h.y.Q)
u=h.gyk(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.L)(f),++m){l=f[m]
if(l.d)k=D.dtl
else{k=new A.aR(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.az(E.jZ.j(0.5),1,B.q,-1)
j=A.p(g,A.X(l.a,D.kr,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bO(i,i,i,i),new A.bo(k,k,k,k),g,new A.a8(B.a3,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kr.j(0.85)
p.push(new A.bB(1,B.bg,A.aB(B.ch,A.w(A.a([k,B.bz,new A.y(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a7),g))}return new C.akh(v,u,t+" \xb7 "+s+" "+r,new C.d6C(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
zN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AK(),$async$zN)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a1P(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.d6h(t,p),s,null,!0,!0,x.N),$async$zN)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.ym(),$async$zN)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DF(),$async$zN)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fe("Swahili (Kiswahili)",!0),$async$zN)
case 18:w=16
break
case 17:w=19
return A.b(t.cAm(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zN)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zN,v)},
YM(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.I(E.jZ.j(0.3),B.q,1),r=x.p
return new A.D(B.cu,A.aK(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.w4,B.a5),w,42,w,w,w,w,w,42),B.bd,A.E(A.w(A.a([A.d(f,w,w,w,w,w,w,A9.TK,w,w,w),A.d(g,w,w,w,w,w,w,A3.TE,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d6D(d,h),w,w,w,w,w,w,w),w)},
DF(){return this.bON()},
bON(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DF=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d6u(r),a7,null,!0,!0,x.ei),$async$DF)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eI("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ca(null,null,!1,null,new C.d6v(o),a7,null,!0,!0,x.H).fj(new C.d6w(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.L)(d),++a1){k=d[a1]
J.cd(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.yR[a1]
J.cd(j,i.a)}w=8
return A.b(C.agB(a0,a7,new C.d6x(o),d,l,e,j),$async$DF)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ab(a8)
n=A.u(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a4(l,!0).eE()
l=o
l.si0($.aw())
J.aQg(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.R(A.b2(null,null,null,null,null,B.r,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcl(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.ai(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.bbF(m.b.h(0,a4).b,a7,new A.S(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.AW(j.c,j.d,l),$async$DF)
case 11:w=12
return A.b(r.l_(),$async$DF)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.yR[a1].a)
a5=l.cEz(j,12,a7)
l=r.a
w=15
return A.b(C.Rp(l.c,l.d,a5),$async$DF)
case 15:if(r.c!=null)r.m(new C.d6y(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.B4(0,B.dX,B.n7)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.crs("Undo",new C.d6z(r,p,f),null):null,null,null,null,null,B.r,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DF,v)},
Fe(d,e){return this.cAn(d,e)},
cAm(d){return this.Fe(d,!1)},
cAn(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fe=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eI("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ca(null,null,!1,null,new C.d6K(a0),k,null,!0,!0,x.H).fj(new C.d6L(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.L)(k),++i){n=k[i]
J.cd(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a21(m,new C.d6M(a0)),$async$Fe)
case 10:w=8
break
case 9:w=11
return A.b(C.bC_(new C.d6N(a0),m,a2),$async$Fe)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ab(a1)
q=A.u(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a4(o,!0).eE()
o=a0
o.si0($.aw())
J.aQg(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.r,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.bbF(J.q(p,g).b,j.a,new A.S(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.AW(k.c,k.d,o),$async$Fe)
case 12:w=13
return A.b(r.l_(),$async$Fe)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.crs("Undo",new C.d6O(r,d),null),null,null,null,null,B.r,null,k,null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fe,v)},
bBZ(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d6i(v):u
r=A.aI(u,u,u,u,A.X(D.bG2,s?D.kr:B.b1,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.hn(A.X(B.vJ,B.F5,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.F5,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbK3(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kr.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.au(s,u,u,u),1)
w=t<J.ad(v.d)?new C.d6j(v):u
return A.bl(!0,new A.D(D.buy,A.B(A.a([r,s,A.aI(u,u,u,u,A.X(B.eA,t<J.ad(v.d)?D.kr:B.b1,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ae,!0,!1)}}
C.Z4.prototype={
U(){return new C.bdZ(new A.ar(B.as,$.aw()))}}
C.bdZ.prototype={
ga1p(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbNu(){var w,v=this.ga1p()
A:{if("cover"===v){w=D.cXq
break A}if("book"===v){w=D.cTb
break A}w=D.dlT
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.n(26),o=E.jZ.j(0.5),n=x.p,m=A.B(A.a([D.dtm,B.at,D.bzZ,A.aI(q,q,q,q,B.lu,q,q,q,new C.d8D(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.j9(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d8E(r),r.ga1p()==="page",q,q,q,q))
if(r.a.d)l.push(A.j9(q,q,q,D.fAo,q,new C.d8F(r),r.ga1p()==="book",q,q,q,q))
l.push(A.j9(q,q,q,D.fnD,q,new C.d8G(r),r.ga1p()==="cover",q,q,q,q))
l=A.bZ(B.bC,l,B.br,6,8)
k=B.c.j(0.07)
k=A.aM(q,B.U,!1,q,!0,B.r,q,A.aN(),r.d,q,q,q,q,q,2,A.bs(q,new A.b4(4,A.n(16),B.W),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.kK,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,B.dg,!0,B.a4,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbNu(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mJ(q,B.c.j(0.08),new A.y(s,q,B.Jg,q,q,q,q,q,q,q,q,q),B.hW,new C.d8H(r,s),q,q,q,q))}return A.eL(q,E.AN,A.cc(A.w(A.a([m,B.R,D.fDC,B.am,l,B.ac,k,B.N,A.bZ(B.bC,w,B.br,6,6),B.aB,A.dn(D.bKb,D.fEo,new C.d8I(r,d),A.bm(B.b5,q,q,q,q,B.oi,q,q,new A.b7(A.n(16),B.W),q,q,q)),B.av,D.fyD],n),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.fC,q,q,B.ah),q,q,q,D.aiA,B.d3,q,new A.b7(p,new A.az(o,1.4,B.q,-1)),q)}}
C.Z2.prototype={
U(){return new C.azn(A.a([],x.Y))},
ge1(){return this.c}}
C.aek.prototype={}
C.azn.prototype={
a_(){this.a1()
this.l_()},
l_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$l_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.QT(p.c,p.d),$async$l_)
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
return A.b(C.bAw(r.c,q),$async$l_)
case 6:j=e
i=J
w=7
return A.b(C.KM(t.a.c,q),$async$l_)
case 7:m.push(new l.aek(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d77(t,n))
case 1:return A.h(u,v)}})
return A.i($async$l_,v)},
b71(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Q1(d,e){return this.cbS(0,e)},
cbS(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Q1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a4(s,!1).cm(A.e9(new C.d76(u,e),!0,null,x.y)),$async$Q1)
case 2:t=g
w=3
return A.b(u.l_(),$async$Q1)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aOV)
return A.h(null,v)}})
return A.i($async$Q1,v)},
Fh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aOR)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.afV(s.c,s.d),$async$Fh)
case 5:q=e
w=6
return A.b(t.l_(),$async$Fh)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Q1(0,B.d.fZ(t.d,new C.d7b(q))),$async$Fh)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.QQ(p,s.f,r,n,o),$async$Fh)
case 10:m=e
w=11
return A.b(t.l_(),$async$Fh)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aOV)
case 1:return A.h(u,v)}})
return A.i($async$Fh,v)},
Pw(d,e){return this.cnk(0,e)},
cnk(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.d7a(t,e),s,null,!0,!0,x.y),$async$Pw)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a2d(s.c,s.d,e.a),$async$Pw)
case 4:w=5
return A.b(t.l_(),$async$Pw)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Pw,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)k.push(o.bC1(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.I(E.jZ.j(0.6),B.q,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fK(0.7142857142857143,A.p(n,A.w(A.a([D.dtn,B.ac,D.ebu,B.av,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kr.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b7,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcDD(),n,n,n,n,n,n,!1,B.a7))}w=A.n(22)
v=A.I(E.jZ.j(0.85),B.q,1.6)
s=A.aB(n,A.p(n,D.bRW,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jZ.j(0.6),B.q,1),n,n,n,B.a5),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d7c(d),n,n,n,n,n,n,!1,B.a7)
r=A.n(14)
q=B.w.j(0.3)
p=A.I(E.jZ.j(0.5),B.q,1)
w=A.p(n,A.B(A.a([s,B.bd,D.bAm,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.f4G,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h7,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bXL,B.n),n,n,n,Am.Mq,D.bsF,n,n,n)
if(o.e)k=D.ac6
else k=k.length===0?D.b5T:A.cA(new C.d7d(k))
return A.c6(n,D.aeC,new A.an(B.V,n,B.b0,B.r,A.a([D.aLn,A.bl(!0,A.w(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0)],l),n),n,!1,!1,n,n)},
bC1(d){var w,v,u=this,t=null,s=u.b71(d),r=d.c,q=x.p,p=A.a([A.bT(0,A.eM(B.A,new A.a7(300,420,new C.Yj(d.b,s,r,t),t),B.f,B.dv),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aB(t,A.p(t,D.bRf,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b1,B.q,1),t,t,t,B.a5),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d74(u,d),t,t,t,t,t,t,!1,B.a7),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.f4g,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.w(A.a([new A.fK(0.7142857142857143,new A.an(B.V,t,B.a9,B.r,p,t),t),B.N,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kr.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d75(u,d),t,t,t,t,t,t,!1,B.a7)}}
C.JS.prototype={}
C.Yj.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dK(D.yR,new C.cFM(m),new C.cFN()),j=m.c,i=D.CC.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mC:B.b7
v=new C.cFO(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.e8O,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b3(l,l,l,new C.bbf(j.x,h,l),B.az),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aR(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bo(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.aiT,8,0.85,2.2),v.$4(D.bxp,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aiT,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.D(D.bxl,A.b3(l,l,l,new C.bb6(h,l),B.az),l),0,0,0))
r=A.X(D.axf[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.auD,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cE,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aP,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bT(0,new A.D(D.bxQ,A.w(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aGg(l),D.eV_),l,l,l,46,0,l))
return A.p(l,A.bw(D.aaM,new A.an(B.V,l,B.a9,B.r,t,l),B.aq),B.f,l,l,new A.o(l,l,l,D.aaM,i,new A.a8(B.ay,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bbf.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.f5()
f.dU(11)
switch(this.b){case"plain":return
case"linen":$.W()
w=A.N()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.K()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.W()
q=A.N()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.K()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.an()
l=f.an()
k=f.an()
$.W()
j=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
j.r=t.j(0.25+f.an()*0.5).gp(0)
r=j.K()
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
j.push(new A.bE())
k=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.K()
k=h.gbK().a.snapshot()
o.drawPath((h.e=new A.cF(k)).a,r)
r.delete()}break
default:$.W()
w=A.N()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.an()
m=f.an()
l=f.an()
r=w.K()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.W()
g=A.N()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.an()
m=f.an()
l=f.an()
r=g.K()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
av(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bb6.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.N(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.af
k.c=2.4
k.d=B.bV
for(w=e.a,v=e.b,v=[D.eLI,new A.ct([w,0,-1,1]),new A.ct([0,v,1,-1]),new A.ct([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aO(l,B.ao,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.K()
s=n.gbK().a.snapshot()
w.drawPath((n.e=new A.cF(s)).a,m)
m.delete()
s=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
s.r=j.j(0.9).gp(0)
m=s.K()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
av(d){return!d.b.A(0,this.b)}}
C.uj.prototype={}
C.YB.prototype={
U(){return new C.bbd()}}
C.bbd.prototype={
go4(){var w=this.d
return w===$?this.d=this.a.c:w},
gyk(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ar(new A.bb(w.b,B.b3,B.aM),$.aw())}return v},
gaAA(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ar(new A.bb(w.c,B.b3,B.aM),$.aw())}return v},
gaqq(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ar(new A.bb(w.y,B.b3,B.aM),$.aw())}return v},
t(){var w=this,v=w.gyk(0),u=v.S$=$.aw()
v.P$=0
v=w.gaAA()
v.S$=u
v.P$=0
v=w.gaqq()
v.S$=u
v.P$=0
w.a2()},
ar2(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.j9(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cZc(this,f,u),e===u,s,s,s,s))}return A.bZ(B.bC,r,B.br,6,8)},
awJ(d){var w=null,v=B.c.j(0.07)
return A.bs(w,new A.b4(4,A.n(14),B.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lC,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.go4(),a0=f.gyk(0),a1=a0.a.a,a2=f.gaAA(),a3=a2.a.a,a4=f.gaqq(),a5=d.bbD(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.au(new A.a7(190,260,A.eM(B.A,new A.a7(270,370,new C.Yj(a5,d,f.a.e,e),e),B.f,B.dv),e),e,e,e)
a0=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a0,e,e,e,e,e,2,f.awJ("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZB(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.an,e,e,e,e)
a2=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a2,e,e,e,e,e,2,f.awJ("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZC(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.yR[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b1
q=r.a===q
o=new A.az(p,q?3:1,B.q,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bO(o,o,o,o),e,e,new A.a8(B.ay,B.aC,B.x,t.c,e,e),B.a5),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aB(e,A.w(A.a([p,B.cQ,new A.y(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZD(f,t),e,e,e,e,e,e,!1,B.a7))}v=A.bZ(B.bC,v,B.br,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b5.j(0.35):B.c.j(0.07)
m=new A.aR(14,14)
s=f.d
o=new A.az((s===$?f.d=f.a.c:s).d===n?B.eC:B.K,2,B.q,-1)
q.push(A.aB(e,A.p(e,A.X(D.axf[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bO(o,o,o,o),new A.bo(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZE(f,n),e,e,e,e,e,e,!1,B.a7))}q=A.bZ(B.bC,q,B.br,8,8)
a4=A.aM(e,B.U,!1,e,!0,B.r,e,A.aN(),a4,e,e,e,e,e,2,f.awJ("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.aj,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cZF(f),e,e,e,!1,e,e,!1,e,!0,e,B.aa,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a4,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.uS,e,e,e)
m=A.a([],w)
for(l=D.CC.gdQ(D.CC),l=l.gae(l);l.C();){k=l.gT(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eC:B.b1
g=r.e===i
o=new A.az(h,g?3:1,B.q,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bO(o,o,o,o),e,e,e,B.a5),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aB(e,A.w(A.a([j,B.bz,new A.y(i,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cZG(f,k),e,e,e,e,e,e,!1,B.a7))}m=A.bZ(B.bC,m,B.br,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.uS,e,e,e)
k=f.go4()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bl(!0,new A.cT(new A.aX(0,1/0,0,a1.a.b*0.92),A.cy(A.a([D.fy6,B.ac,d,B.aP,a0,B.R,a2,B.aB,D.fEa,B.N,v,B.aB,D.fyf,B.N,q,B.aB,a4,B.aB,p,B.N,m,B.aB,l,A.l_(e,9,""+B.k.V(f.go4().f),36,18,new C.cZH(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.uS,e,e,e),B.am,f.ar2(D.a3L,f.go4().r,new C.cZI(f),D.dp4),B.ac,A.d("BORDER",e,e,e,e,e,e,H.uS,e,e,e),B.am,f.ar2(D.a3a,f.go4().w,new C.cZJ(f),D.dpa),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,H.uS,e,e,e),B.am,f.ar2(D.a36,f.go4().x,new C.cZL(f),D.dqD),B.am,A.iH(e,B.b5,e,B.ae,e,new C.cZM(f),e,e,e,D.fsy,f.go4().z),B.bw,A.bG(D.fwV,new C.cZN(f,a6),A.bm(B.b5,e,e,e,e,B.oi,e,e,new A.b7(A.n(16),B.W),e,e,e))],w),e,R.aiq,e,e,B.ah,!0),e),!0,!1,B.ae,!0,!0),e)}}
C.aGg.prototype={
a6(d,e){var w,v,u,t=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ap(w,0))
v=e.b
t.E(new A.ap(w,v))
t.E(new A.ap(w/2,v-12))
t.E(new A.ap(0,v))
t.E(new A.bE())
u=A.N()
u.sar(D.bYr.aA(0,new A.a9(0,0,0+w,0+v)))
d.aS(t,u)},
av(d){return!1}}
C.bgq.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.N()
w.sar(D.bXr.aA(0,new A.a9(0,0,a3,a4)))
a5.b1(new A.a9(0,0,a3,a4),w)
v=B.k.dj(a2/112)
u=new A.f5()
u.dU(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.an()*20
l=56+u.an()*40
k=D.cXp[u.az(9)]
j=u.az(14)
J.bx(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.by(i,B.hb)
g=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sar(new A.a8(B.a3,B.a8,B.x,A.a([f,k,e],t),a0,a0).aA(0,i))
d=g.K()
w.drawRRect(A.eT(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
e.r=E.jZ.j(0.55).gp(0)
d=e.K()
w.drawRect(A.bX(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
j.r=E.jZ.j(0.4).gp(0)
d=j.K()
w.drawRect(A.bX(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.az(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.sar(D.bWP.aA(0,new A.a9(0,r,a3,q)))
d=p.K()
w.drawRect(A.bX(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.r=B.w.j(0.5).gp(0)
p.z=B.ly
d=p.K()
w.drawRect(A.bX(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.N()
w.r=D.b9l.j(0.72).gp(0)
a5.b1(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.N()
a4.sar(new A.c_(B.A,0.5,B.x,a0,0,A.a([D.bgs.j(0.22),B.K],t),a0,a0).aA(0,A.bU(new A.x(w,a2),a1)))
a5.af(new A.x(w,a2),a1,a4)},
av(d){return!1}}
C.b9s.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.kQ(new A.o(A.aq(D.kr,D.bkY,w/4),o,new A.bO(B.W,new A.az(B.w.j(0.12),1,B.q,-1),B.W,B.W),B.Kr,o,o,B.n),B.be,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aH1,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aR(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jZ.j(0.6),o,o,new A.bo(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.w(t,B.m,o,B.rq,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aZd,u,D.bYp,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dn,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aGg(o),D.eUV),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aTI(p.y,r,G.iD,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.r,o,o,o,o,o,2,A.bs(o,B.eB,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iD.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.fi1,!0,B.a4,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iD.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),p.w,o,o,o,o,o,2,A.bs(o,B.eB,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.iD.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.aj,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,D.f9d,!0,B.a4,B.zG,B.an,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fhU,o,o,o),B.av,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.iD.j(0.5),o,o,o,o,o,o,o,o,11,B.cE,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.B(A.a([A.E(A.p(o,o,B.f,D.EV.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fq,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.EV.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.EV.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.iD.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.XA(A.d0(A.a([A.d0(o,o,o,o,o,o,o,o,o,D.fcf,B.a.ap(k,0,1)),A.d0(o,o,o,o,o,o,o,o,o,o,B.a.b3(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.iD.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.w(n,B.F,o,B.e,B.j,0,B.p),B.r,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.i4,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.iD.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bw(B.Kr,new A.an(B.V,o,B.a9,B.r,A.a([t,new A.D(D.bwS,A.w(s,B.ai,o,B.e,B.j,0,B.p),o),A.ao(0,A.c0(o,new A.o(o,o,o,o,o,new A.a8(B.a3,B.a8,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.be),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.o(o,o,o,B.Kr,v,D.bYX,B.n),o,o,o,o,o,o,o,o),1)],m),B.ai,o,B.e,B.j,0,o,o))
return new A.an(B.V,o,B.a9,B.r,l,o)}}
C.apa.prototype={
U(){return new C.aCR(A.a([],x._))},
br(){return this.r.$0()},
pU(){return this.w.$0()},
ge1(){return this.c}}
C.aCR.prototype={
a_(){var w,v
this.a1()
this.vR()
w=this.a
v=w.c
if(v.length!==0)C.a6P(v,w.e,w.d.w)},
vG(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h0I(r,t.e,!1,s.w,new C.dT5(u),null,s),$async$vG)
case 2:w=3
return A.b(u.vR(),$async$vG)
case 3:return A.h(null,v)}})
return A.i($async$vG,v)},
a_s(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.h0I(r,t.e,!0,s.w,new C.dT4(u),null,s),$async$a_s)
case 2:w=3
return A.b(u.vR(),$async$a_s)
case 3:return A.h(null,v)}})
return A.i($async$a_s,v)},
vR(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vR=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.AL(q.a.c),$async$vR)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.dT7(q,p))
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
return A.b(C.Gs(q.a.c).d8(0,B.pS),$async$vR)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dT8(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dT9(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vR,v)},
Ou(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ou=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eYA)
w=3
return A.b(C.Gs(t.a.c),$async$Ou)
case 3:r=e
w=4
return A.b(C.fH2(t.a.c,r),$async$Ou)
case 4:q=e
w=5
return A.b(C.Gs(t.a.c),$async$Ou)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dT3(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dz:B.cR,null,B.r,null,s,null,B.mr,null,null,null,null,null,null,null,null,null,null))
t.a.pU()
case 1:return A.h(u,v)}})
return A.i($async$Ou,v)},
HU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i8y(l),$async$HU)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hD_(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aZn(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$HU)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hjZ(r)
o=Date.now()
n=t.a.c
m=new C.kD(l,r.toUpperCase(),p,!0,B.U,D.Cq,new A.S(o,0,!1),0,n,D.tN)
w=5
return A.b(C.a2j(n,m),$async$HU)
case 5:w=6
return A.b(t.vR(),$async$HU)
case 6:t.a.br()
t.a.pU()
if(t.c==null){w=1
break}t.Er(m)
case 1:return A.h(u,v)}})
return A.i($async$HU,v)},
Er(d){return this.cdU(d)},
cdU(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Er=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.AL(u.a.c),$async$Er)
case 2:n=l.ri(k.dJ(f,new C.dT6(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.ap4(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Er)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a2j(u.a.c,o),$async$Er)
case 6:case 5:w=7
return A.b(u.vR(),$async$Er)
case 7:u.a.pU()
return A.h(null,v)}})
return A.i($async$Er,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=new C.tR(p)
if(r.e)return A.au(A.mK(q,p?B.bs:B.bm,q,q,q,q,q,q,q,q),q,q,q)
if(J.cm(r.d)){w=p?B.e_:B.c
v=A.n(15)
u=A.aF(!1,B.a1,!0,q,A.aK(!1,q,!0,A.p(q,D.bLg,B.f,q,q,new A.o(B.aV.j(0.12),q,A.I(B.aV,B.q,2),q,q,q,B.a5),q,52,q,q,q,q,q,52),B.cK,!0,q,q,q,q,q,q,q,q,q,q,q,r.gccY(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.au,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Fw(A.p(q,A.w(A.a([u,B.aP,t,B.N,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bm,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dY,A.bG(D.fFr,r.gaQ8(),A.bm(B.bR,q,q,q,q,q,Al.Zk,q,new A.b7(A.n(12),B.W),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bwO,q,q,1/0),15,B.ae,1.05,D.a9r,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.au,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b4],v)
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.yA,B.aV,q,q,q,q),q,q,q,new C.dTb(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aI(q,q,q,q,A.X(B.yv,B.aV,q,q,q,q),q,q,q,r.gafj(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dn(E.anZ,D.flr,r.gaQ8(),A.bm(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.Fw(r.cAs(J.q(r.d,s),o),14,B.ae,1,D.a9r,q))
B.d.v(w,u)}return A.w(A.a([p,B.aB,A.w(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cAs(d,e){var w=null,v=e.a,u=v?B.e_:B.c,t=A.n(14),s=A.I((v?B.e3:B.bO).j(0.55),B.q,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.em,10)],x.V),q=A.n(14),p=A.p(w,D.bKk,B.f,w,w,new A.o(B.aV.j(0.15),w,w,A.n(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aO:B.au,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaoh(),m=d.d?"":" \xb7 Public",l=d.y===D.kz?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bz,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aK(!1,q,!0,new A.D(B.bE,A.B(A.a([p,B.bd,l,A.X(B.N6,v?B.bs:B.bm,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dTa(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.ap4.prototype={
U(){return new C.aCO(A.a([],x._),A.aY(x.N),A.b76())},
br(){return this.r.$0()},
ge1(){return this.c}}
C.aCO.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.acg()
w=u.a
v=w.c
if(v.length!==0)C.a6P(v,w.e,w.d.w)},
t(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a2o(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xM("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSw(r),s,null,!0,!0,x.y),$async$a2o)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jq()
t.m(new C.dSx(t,r))
w=4
return A.b(t.vI(),$async$a2o)
case 4:t.a.br()
t.xM(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a2o,v)},
cqh(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.dSr(w,f,d,e))},
aSn(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dp()
u.e9(w,v,0,1)
u.jQ(q,q,1,1)
this.w.sp(0,u)},
b9i(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eD(new Float64Array(16))
q.e2(r)
w=q.Cy()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dp()
t.e9(r,u,0,1)
t.jQ(v,v,1,1)
t.e9(-r,-u,0,1)
t.iK(0,q)
s.sp(0,t)},
acg(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$acg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.AL(u.a.c),$async$acg)
case 2:t=s.ri(r.dJ(e,new C.dS_(u)))
if(t!=null&&u.c!=null)u.m(new C.dS0(u,t))
return A.h(null,v)}})
return A.i($async$acg,v)},
xM(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
vG(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.h0I(o,t,!1,r,new C.dSe(u),q.a,s),$async$vG)
case 2:n=A
m=J
w=3
return A.b(C.Gs(u.a.c),$async$vG)
case 3:p=n.ri(m.dJ(e,new C.dSf(u)))
if(p!=null&&u.c!=null)u.m(new C.dSg(u,p))
return A.h(null,v)}})
return A.i($async$vG,v)},
Jq(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cF(w,0)},
vI(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a2j(t,s),$async$vI)
case 2:return A.h(null,v)}})
return A.i($async$vI,v)},
a0X(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.u2(q,t.a.c)){t.xM("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.i9H(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a0X)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Jq()
t.m(new C.dSq(t,r))
w=4
return A.b(t.vI(),$async$a0X)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0X,v)},
a_G(){return this.cdW()},
cdW(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_G=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.u2(q,t.a.c)){t.xM("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.P(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSo(r,new C.tR(q.ax.a===B.I)),s,null,!0,!0,x.y),$async$a_G)
case 3:if(e!==!0||t.c==null){w=1
break}t.Jq()
t.m(new C.dSp(r,t))
w=4
return A.b(t.vI(),$async$a_G)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_G,v)},
VI(d){return this.bz2(d)},
bz2(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.u2(r,t.a.c)){t.xM("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dRO(t,d),r,null,!0,!0,x.P),$async$VI)
case 3:s=f
if(s==null){w=1
break}t.Jq()
t.m(new C.dRP(t,s))
w=4
return A.b(t.vI(),$async$VI)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VI,v)},
a2K(d){return this.cCC(d)},
cCC(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a2K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.ca(null,null,!0,null,new C.dSz(u,d,new C.tR(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a2K)
case 2:return A.h(null,v)}})
return A.i($async$a2K,v)},
cae(d){var w=this,v=w.d
v===$&&A.c()
if(C.u2(v,w.a.c))w.O9(d)
else w.a2K(d)},
ahN(d,e){return this.cuf(d,e)},
cuf(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ahN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ca(null,null,!0,null,new C.dSt(new C.tR(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ahN)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ahN,v)},
HZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$HZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kz?3:5
break
case 3:w=6
return A.b(C.fPi(t.a.c),$async$HZ)
case 6:s=e
o=t.a
r=C.h8u(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ahN(!s,!r),$async$HZ)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bAp(o,t.a.c)){t.xM("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.l6(o,"Cancel","Remove",q.y===D.kz?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$HZ)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aOc(t.a.c,t.d.a),$async$HZ)
case 11:t.a.br()
o=t.c
if(o==null){w=1
break}A.iQ(o,null)
case 1:return A.h(u,v)}})
return A.i($async$HZ,v)},
a9N(d){return this.bKb(d)},
bKb(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a9N=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.u2(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b4(s,new C.dRQ(p))){o=A.T(s)
p.a=A.ri(new A.cP(new A.a_(s,new C.dRR(d),o.k("a_<1>")),new C.dRS(),o.k("cP<1,m>")))}q=p.a
if(q==null)q=d.d
t.Jq()
t.m(new C.dRT(t,s,d,q))
w=3
return A.b(t.vI(),$async$a9N)
case 3:t.xM(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a9N,v)},
O9(d){return this.bMk(d)},
bMk(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$O9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.u2(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a2K(d),$async$O9)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ca(null,null,!0,null,new C.dRX(t,d),r,null,!0,!0,x.P),$async$O9)
case 6:s=f
if(s==null){w=1
break}t.Jq()
t.m(new C.dRY(t,s))
w=7
return A.b(t.vI(),$async$O9)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O9,v)},
cAR(){var w=this,v=w.d
v===$&&A.c()
if(!C.u2(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dSy(w))
w.vI()},
Yy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Yy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bAp(n,t.a.c)){t.xM("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.aw()
r=new A.ar(B.as,s)
q=t.d.e
p=A.bn(new A.M(q,t.gc8J(),A.T(q).k("M<1,m>")).c0(0,new C.dS9()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dSa(t,new C.tR(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$Yy)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Jq()
t.m(new C.dSb(t,p))
w=4
return A.b(t.vI(),$async$Yy)
case 4:t.xM("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Yy,v)},
c8K(d){return B.a.i(d.toLowerCase())},
ccJ(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.u2(v,w)
t=r.d
s=C.hZX(t)
C.i8C(q,t.b,u,C.hZW(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tR(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a_(l,new C.dSG(),A.T(l).k("a_<1>")).gL(0)
l=n?B.bY:B.iC
v=A.X(B.a_w,n?B.bs:B.bm,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Bb,A.aK(!1,o,!0,new A.D(B.hx,A.B(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,o,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dSH(p,d),o,o,o,o,o,o,o),o),new A.D(B.nc,p.bXn(m),o)],u)
if(p.d.y===D.kz){t=B.rr.j(0.15)
s=A.n(12)
r=A.I(B.rr.j(0.45),B.q,1)
q=C.Gq(p.d,p.a.c)
v.push(new A.D(B.xS,A.p(o,A.B(A.a([D.bPB,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.au,o,o,o,o,o,o,o,o,12,o,o,B.a6,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iK,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.au,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4],u)
if(C.u2(p.d,p.a.c)&&p.e.length!==0)u.push(new C.JO("Undo",B.rf,p.gcAQ(),m,o,o))
u.push(new C.JO("Family Book",D.bF8,p.gccI(),m,B.ti,o))
if(C.u2(p.d,p.a.c))u.push(new C.JO("Display settings",B.BZ,p.gcdV(),m,B.aZ,o))
u.push(new C.JO("Sync",B.yv,p.gafj(),m,o,o))
t=p.d
if(t.y===D.kz||C.bAp(t,p.a.c)){t=p.d.y===D.kz?"Remove shared tree":"Delete tree"
u.push(new C.JO(t,B.ef,p.gbKl(),m,B.h2,o))}if(C.u2(p.d,p.a.c))u.push(new C.JO("Add member",B.vU,new C.dSI(p),m,B.bR,o))
v.push(new A.D(R.ai3,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gaoh()===0){u=A.au(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cA(new C.dSJ(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?K.a_A:Y.N7,o,o,o,o,o)
v.push(A.au(A.hn(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dSK(p),o),o,o,o))}return A.c6(o,l,A.bl(!0,A.w(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0),o,!1,!1,o,o)},
bXn(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.fx.j(0.35),B.dn,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.X(B.yp,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aK(!1,m,!0,A.p(m,D.bSG,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.q,1.5),m,m,m,B.a5),m,46,m,m,m,m,m,46),B.cK,!0,m,m,m,m,m,m,m,m,m,m,m,n.gafj(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.f7y,m,m,m)
r=r.gaoh()
p=n.d.gaoh()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.w(A.a([q,B.bz,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a6,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.u2(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.bPN,m,m,m,n.gcnD(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.jI:B.o2
r=r?"Private":"Public"
r=A.E(n.auE(q,"Privacy",r,n.a.d.w?n.gczL():m),1)
q=A.E(n.auE(B.yw,"Tree code",n.d.c,new C.dRZ(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.B(A.a([r,B.ab,q,B.ab,A.E(n.auE(D.bGR,"Collaborators",p,n.gc0W()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kz){s=B.c.j(0.15)
B.d.v(p,A.a([B.N,A.aF(!1,B.a1,!0,A.n(999),A.aK(!1,A.n(999),!0,new A.D(B.fX,A.B(A.a([A.X(B.oY,B.c,m,m,m,14),B.eg,A.d("View only",m,m,m,m,m,m,B.aQ9,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ag)],o))}return A.p(m,A.bw(u,new A.an(B.V,m,B.a9,B.r,A.a([t,new A.D(B.Fv,A.w(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.o(m,m,m,w,v,D.bWU,B.n),m,m,m,m,m,m,m,1/0)},
auE(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.n(14),A.aK(!1,A.n(14),!0,new A.D(M.ajb,A.w(A.a([A.X(d,B.c,w,w,w,18),B.av,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.uM,A.d(f,w,1,B.a2,w,w,w,O.zK,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)}}
C.bdH.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gal(r)&&s.c.length===0)return B.bI
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bdK(s,t),new A.as(w,v))],x.p)
r=r.gdQ(r)
B.d.v(u,r.dB(r,new C.d7h(this),x.l))
r=s.c
B.d.v(u,new A.M(r,new C.d7i(this),A.T(r).k("M<1,t>")))
return new A.D(B.tK,new A.a7(w,v,new A.an(B.V,t,B.a9,B.f,u,t),t),t)}}
C.K_.prototype={}
C.FJ.prototype={}
C.bdJ.prototype={
gbhN(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aIm.prototype={}
C.bdK.prototype={
bLZ(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.N()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bV
d.bL(new A.x(n,w),new A.x(m,w),v)
u=(n+m)/2
t=new A.aO(q.r,B.ao,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pF(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pF(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bE())
q=A.N()
q.r=B.c.gp(0)
d.af(new A.x(u,w),9,q)
q=A.N()
q.r=B.bA.gp(0)
d.aS(t,q)},
bLX(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.d7C())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.b4(a0,new C.d7D(f))
t=new A.M(a0,new C.d7E(f),A.T(a0).k("M<1,K>")).c0(0,new C.d7F()).cM(0,1/0,B.v6)
w=f.a
d.bL(f,new A.x(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.L)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.K()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mG(m)
i=Math.min(10,l/2)
l=$.W()
h=A.a([],q)
g=new A.aO(l.r,B.ao,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cR(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cR(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.K()
n=g.gbK().a.snapshot()
r.drawPath((g.e=new A.cF(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.N()
w.r=B.bR.j(0.75).gp(0)
w.c=2.2
w.b=B.af
w.d=B.bV
w.e=B.hn
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.L)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bLX(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.K()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.L)(v),++s){q=v[s]
if(q.c)this.bLZ(d,w,q.a,q.b)}},
av(d){return d.b!==this.b}}
C.bhl.prototype={
gc6B(){var w=this.c
if(B.a.i(w.y).length!==0)return D.dlS
switch(w.c.a){case 0:return D.cP2
case 1:return D.d_i
case 2:return D.dg5}},
gc6E(){var w=this.c,v=C.hjk(w.w),u=C.hjk(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=t.gc6B(),p=t.c,o=I.bBi(p.f),n=t.gc6E(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.au:B.c,j=A.I(r?B.au:B.c,B.q,2)
if(o!=null)w=A.th(B.A,s,B.ce,B.bU,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a8(B.a3,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hZ(w,B.aq),B.f,s,s,new A.o(k,s,j,s,s,s,B.a5),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a8(B.ay,B.aC,B.x,q,s,s),B.a5),s,56,s,s,B.FM,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.I(r?B.au:B.c,B.q,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fhv,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.byG,s,s,s),s,s,s,-6,-4,s))}k=r?B.co:B.c
j=A.n(8)
w=A.I(B.d.gH(q).j(0.35),B.q,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dD,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.co,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bm,s,s,s,s,s,s,s,s,7.5,s,s,B.a6,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a7(84,112,A.w(A.a([new A.an(B.V,s,B.a9,B.f,l,s),B.av,A.p(s,A.w(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.b06,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.byR,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a7)}}
C.bcP.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.W()
w=A.N()
v=this.b
u=v?B.c:D.bc5
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.K()
t.drawCircle(r,s,1,q)
q.delete()}},
av(d){return d.b!==this.b}}
C.buW.prototype={
B(d){var w=this,v=null,u=new C.f8P(w),t=w.c,s=t?B.co:B.c,r=A.n(12),q=u.$3(B.hz,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bD:B.fc,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yt,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.w(A.a([q,p,o,A.p(v,v,B.f,t?B.bD:B.fc,v,v,v,1,v,v,v,v,v,22),u.$3(B.alB,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dq,v,v,v,B.ag)}}
C.bkx.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.I(B.bR,B.q,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.w(A.a([A.X(s?K.a_A:Y.N7,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fdR,v,v,v)],r),B.m,v,B.b7,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a5),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a7)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fbQ,B.L,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.M(s,new C.eKz(w),A.T(s).k("M<1,t>")))
B.d.v(u,t)}return new A.a7(84,v,A.w(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.ZE.prototype={
U(){return new C.aBh()},
br(){return this.Q.$0()},
ge1(){return this.w}}
C.aBh.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aP()
r.d=new A.ar(new A.bb(t,B.b3,B.aM),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aP()
r.e=new A.ar(new A.bb(t,B.b3,B.aM),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aP()
r.f=new A.ar(new A.bb(t,B.b3,B.aM),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aP()
r.r=new A.ar(new A.bb(t,B.b3,B.aM),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aP()
r.w=new A.ar(new A.bb(t,B.b3,B.aM),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aP()
r.x=new A.ar(new A.bb(t,B.b3,B.aM),s)
t=u?q:v.c
r.y=t==null?D.y5:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.i0t(w.r,w.f)
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
Px(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Px=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.h8u(p.y,p.w)
w=3
return A.b(A.li(t.a.w,B.Ic),$async$Px)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aZn(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Px)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hD0(p.y,p.w)
t.a.br()
case 5:w=7
return A.b(An.GB(78,800),$async$Px)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dnp(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Px,v)},
c6D(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i1(B.o.u(1000*Date.now()),w,D.y5,null,null,null,"","","","","",1,!1,0)
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
s=v.aDt(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a4(k,!1).O(s)},
a9o(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a9o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.dno(r),s,null,!0,!0,x.y),$async$a9o)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a4(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a9o,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.I,i=new C.tR(j),h=l.a.e,g=A.T(h).k("a_<1>"),f=A.C(new A.a_(h,new C.dny(l),g),g.k("J.E"))
h=j?B.e_:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bxa,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aO:B.au,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.ho(A.aK(!1,k,!0,new A.D(B.lW,A.X(B.ef,B.oL,k,k,k,17),k),B.cK,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbH_(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jA:B.iZ
t=I.bBi(l.as)
if(l.as==null)s=A.X(B.oP,j?B.bs:B.bm,k,k,k,40)
else s=k
s=A.au(A.aB(k,new A.an(B.V,k,B.a9,B.r,A.a([A.h5(u,t,s,k,42),A.ao(0,A.h5(B.bR,k,D.bJo,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc6A(),k,k,k,k,k,k,!1,B.a7),k,k,k)
t=l.d
t===$&&A.c()
t=C.aBj(t,"Full name",B.mv,1,1,i,B.m8)
u=l.y
u===$&&A.c()
u=A.w(A.a([t,B.R,new C.bhj(i,u,new C.dnz(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bqK],q)
o=l.a.e
B.d.v(p,new A.M(o,new C.dnA(),A.T(o).k("M<1,eA<m?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bqM],q)
B.d.v(q,new A.M(f,new C.dnC(),A.T(f).k("M<1,eA<m?>>")))
o=A.w(A.a([t,B.am,new C.acL(i,r,"Who is their parent?",p,new C.dnD(l),k,o),B.aB,n,B.am,new C.acL(i,m,"Who is their spouse / partner?",q,new C.dnE(l),k,o)],v),B.ai,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aBj(q,"Birth date",D.akD,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aBj(m,"Birth place",B.a_P,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aBj(n,"Date of death (if deceased)",D.amR,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aBj(p,"Occupation",B.a0T,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.a9,B.r,w,k),B.aB,s,B.bw,new C.acM(i,"Identity",u,k),B.ac,new C.acM(i,"Family links",o,k),B.ac,new C.acM(i,"Life details",A.w(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aBj(r,"Notes",B.l_,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.aBi(i,"Child order",l.ce9(l.at),new C.dnF(l),new C.dnG(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fZ1(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dnH(l):k
B.d.v(r,A.a([B.R,new C.aBi(i,"Visible in tree",u,w,new C.dnI(l),k)],v))}r.push(B.R)
w=j?B.jA:B.iZ
u=A.n(14)
t=A.I(j?B.e3:B.bO,B.q,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aO:B.au,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iH(k,B.bR,k,B.ae,k,new C.dnJ(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.ahH,k,k,k))
r.push(B.bw)
w=j?B.aO:B.au
j=j?B.e3:B.bO
r.push(A.B(A.a([A.E(A.dT(B.nx,new C.dnB(d),A.dg(k,k,k,k,k,k,k,k,k,w,k,k,B.ck,k,new A.b7(A.n(14),B.W),new A.az(j,1,B.q,-1),k,k,k,k)),1),B.bd,A.E(A.bG(D.eQQ,l.gc6C(),A.bm(B.aV,k,k,0,B.c,k,B.ck,k,new A.b7(A.n(14),B.W),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.av)
return A.ek(B.jL,k,B.ae,h,new A.a7(420,k,A.cc(A.w(r,B.ai,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),k),D.aiw,k,B.ahV,new A.b7(g,B.W),k,k)},
ce9(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.acM.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jA:B.iZ,s=A.n(16)
return A.w(A.a([new A.D(D.aiW,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.e3:B.bO,B.q,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bhk.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e_:B.c,r=A.n(12),q=A.I((t?B.e3:B.bO).j(0.85),B.q,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aO:B.au,u,u,u,u,u,u,u,u,14,u,u,B.a6,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aM(u,B.U,!1,u,!0,B.r,u,A.aN(),v.d,u,u,u,u,u,2,A.bs(u,B.eB,u,B.vx,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bm,u,u,u,u,u,u,u,u,u,u,u,B.cv,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.aj,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.aa,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a4,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.acL.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e_:B.c,s=A.n(12),r=A.I((u?B.e3:B.bO).j(0.85),B.q,1),q=A.X(B.ra,u?B.bs:B.bm,v,v,v,v),p=A.l(v,v,u?B.aO:B.au,v,v,v,v,v,v,v,v,14,v,v,B.a6,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e_:B.c
return A.p(v,new A.Dy(A.Ss(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,v,v,v,B.cv,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kW,v,v,v)}}
C.bhj.prototype={
B(d){var w=new C.dnK(this)
return A.B(A.a([w.$3(D.a_8,"Male",B.NP),B.ab,w.$3(D.ajO,"Female",B.ND),B.ab,w.$3(D.y5,"Other",B.ni)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.aBi.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jA:B.iZ,r=A.n(14),q=A.I(t?B.e3:B.bO,B.q,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aO:B.au,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.w(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bm,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aHo(u,B.yt,w.f,v),B.bp,new C.aHo(u,B.hz,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eu,v,v,v)}}
C.aHo.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.e_:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bR
else t=(s.c.a?B.bs:B.bm).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,new A.a7(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ag)}}
C.acN.prototype={
bPU(d){switch(d.a){case 0:return B.bR
case 1:return B.bA
case 2:return B.cU}},
bPV(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aWH(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
A8(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e_:B.c
u=A.n(12)
t=A.I((w?B.e3:B.bO).j(0.85),B.q,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bR,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bm,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.w(A.a([q,B.av,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aO:B.au,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cu,B.xP,p,p,1/0)},
adQ(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jA:B.iZ,s=A.n(16),r=A.I(v?B.e3:B.bO,B.q,1)
return A.w(A.a([new A.D(D.aiW,u,w),A.p(w,A.w(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.ho9(r,q),o=q.c,n=t.bPU(o),m=I.bBi(q.f),l=t.e.a,k=l?B.e_:B.c,j=A.n(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aO:B.au,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.kz?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bm,s,s,s,s,s,s,s,s,12,s,s,B.a6,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.q,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.au(A.p(s,A.h5(u,m,m==null?A.X(B.oP,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a5),s,s,s,s,B.ev,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.I(n.j(0.45),B.q,1)
v=A.au(A.p(s,A.d(t.bPV(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mt,s,s,s),s,s,s)
u=x.p
i=A.a([t.A8("Full name",i,B.mv)],u)
if(p>0)i.push(t.A8("Child order","#"+p,B.NJ))
r=A.a([h,B.av,r,B.aP,l,B.R,v,B.bw,t.adQ("Identity",i),B.ac,t.adQ("Life details",A.a([t.A8("Birth date",q.w,D.akD),t.A8("Birth place",q.x,B.a_P),t.A8("Date of death",q.y,D.amR),t.A8("Occupation",q.z,B.a0T)],u)),B.ac,t.adQ("Family links",A.a([t.A8("1. Parent",t.aWH(q.d),B.G_),t.A8("2. Spouse",t.aWH(q.e),B.NC)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.adQ("Notes",A.a([t.A8("Notes",q,B.l_)],u))],u))
r.push(B.bw)
r.push(A.bG(B.Jz,new C.dnU(d),A.bm(B.aV,s,s,s,s,s,B.ck,s,new A.b7(A.n(14),B.W),s,s,s)))
return A.eL(s,k,new A.cT(B.lJ,A.cc(A.w(r,B.ai,s,B.e,B.Q,0,B.p),B.r,s,B.y,s,B.xV,s,s,B.ah),s),s,s,s,B.Fy,B.d3,s,new A.b7(j,B.W),s)}}
C.JO.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bm
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.vD,A.ho(A.aF(!1,B.a1,!0,A.n(8),A.aK(!1,A.n(8),!0,new A.a7(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ag),u,v.c,u,u),u)}}
C.ap7.prototype={
eT(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a5().ac())
w=u.c
v=A.T(w).k("M<1,a5<m,@>>")
w=A.C(new A.M(w,new C.c8O(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j9(w,new C.c8P(),t,x.U))
return s}}
C.ap8.prototype={
U(){return new C.aCQ(A.a([],x.bF))},
gde(){return this.c}}
C.aCQ.prototype={
a_(){this.a1()
this.Jx()},
Jx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Jx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c8S(t.a.c),$async$Jx)
case 3:r=e
w=4
return A.b(C.AL(t.a.c),$async$Jx)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qX(q,new C.dST(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dSU(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Jx,v)},
yl(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.r,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.T,w,w,w,w,w,w,w,w,w,w))},
Kh(d,e){return this.cDd(d,e)},
cDd(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Kh=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dSY(q,e))
t=3
w=6
return A.b(d.$0(),$async$Kh)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dSZ(q))
$.eQ.mp()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Kh,v)},
Xm(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p8(r,s.c,s.e),$async$Xm)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kh(new C.dSQ(t),"Preparing download\u2026"),$async$Xm)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xm,v)},
Xq(d){return this.bNT(d)},
bNT(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p8(r,s.c,s.e),$async$Xq)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Kh(new C.dSR(t,d),"Preparing file\u2026"),$async$Xq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xq,v)},
afG(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$afG=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xe.c8().M3(B.QH,B.tO,!0),$async$afG)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aH.gal(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jr(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ab(m)
$.am.$1("[family tree sync pick] file_picker: "+A.u(p))
w=6
break
case 3:w=2
break
case 6:u=A.GA()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afG,v)},
Y1(d){return this.bYg(d)},
bYg(d){var w=0,v=A.j(x.H),u=this
var $async$Y1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Kh(new C.dSS(u,d),"Restoring family trees\u2026"),$async$Y1)
case 2:return A.h(null,v)}})
return A.i($async$Y1,v)},
Y0(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.afG(),$async$Y0)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Y1(s),$async$Y0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y0,v)},
a1N(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.p8(r,s.c,s.e),$async$a1N)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kh(new C.dSX(t),"Creating QR code\u2026"),$async$a1N)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1N,v)},
a1o(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1o=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.CS()){t.yl("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).cm(A.e9(new C.dSV(),!0,null,x.N)),$async$a1o)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Y1(r),$async$a1o)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1o,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=o?B.AD:B.iC,m=o?D.agc:B.aO,l=o?B.aJ:B.bO,k=o?B.aO:B.au,j=new C.d7G(n,m,l,k,o?B.bK:B.bm)
l=A.aI(p,p,p,p,A.X(B.eF,k,p,p,p,20),p,p,p,new C.dT0(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.ez(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.d7e(!0,B.jr,B.aR,B.aR,q.r?p:q.gcu3(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcqc()
t.push(A.E(C.d7e(!s,B.j3,B.b5,B.by,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.d7e(!1,B.hB,B.aV,B.bR,q.r?p:q.gbNM(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.d7e(!1,L.yy,B.aE,B.aT,q.r?p:q.gbYd(),j,s,"Upload backup file"),1))
l=A.a([new C.bdI(v,l,p),B.kI,new C.ac3(j,"QR restore",p),B.R,t,B.d7,new C.ac3(j,"Backup files",p),B.R,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kI,new C.ac3(j,"One tree",p),B.R],u)
B.d.v(v,J.b6(q.d,new C.dT1(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cy(l,p,B.Zg,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.I(B.aV.j(0.35),B.q,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dn,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bl(!0,A.p(p,A.B(A.a([K.aOA,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Bh,p,p,p),!0,!1,B.ae,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.an(B.V,p,B.a9,B.r,l,p),p,!1,!1,p,p)}}
C.d7G.prototype={}
C.bdI.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aV.j(0.32),B.kf,28)],x.V)
t=A.ao(p,A.X(B.u7,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.p(p,new A.an(B.V,p,B.a9,B.r,A.a([t,new A.D(B.aa,A.B(A.a([A.p(p,D.bSd,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.q,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oj,A.E(A.w(A.a([D.fmp,B.N,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c_5,B.n),p,p,p,p,p,p,p,p)}}
C.ac3.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bdG.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aR.j(0.4):m.c
k=A.I(k,B.q,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aR.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.I(t.j(0.35),B.q,1)
return A.aF(!1,B.a1,!0,q,A.aK(!1,o,!0,A.eB(A.db(new A.D(E.YT,A.w(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.r6,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bz,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cv,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ag)}}
C.bdL.prototype={
B(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.I(s.c,B.q,1),q=B.aV.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.eB(new A.D(B.eR,A.B(A.a([A.p(v,D.bRr,B.f,v,v,new A.o(q,v,A.I(B.aV.j(0.35),B.q,1),p,v,v,B.n),v,v,v,v,B.r6,v,v,v),B.bd,A.E(A.w(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.X(B.hB,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ag)}}
C.ZZ.prototype={
U(){return new C.aCP()},
gde(){return this.c}}
C.aCP.prototype={
a_(){this.a1()
this.a8W()},
a8W(){var w=0,v=A.j(x.H),u=this,t
var $async$a8W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b11(u.a.c,B.D0),$async$a8W)
case 2:t=e
if(u.c!=null)u.m(new C.dSL(u,t))
return A.h(null,v)}})
return A.i($async$a8W,v)},
ah3(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ah3=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dSM(q))
t=4
p=A.ha9(q.a.d,B.D0)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.V(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.arl(n.e,m,l,B.D0,p,n.f),$async$ah3)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dSN(q))
q.c.I(x.q).f.R(D.eZL)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(B.a.ef(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dSO(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah3,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.I,o=p?B.jh:B.pK,n=p?B.id:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.ez(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fCd,q,q,q,1,q,!0)
w=A.n(24)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.pR(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.w(A.a([B.N,u,B.bw,t,B.N,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b7,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.aa,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bq,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcpV()
if(u)u=B.J3
else u=A.X(r.e===!0?B.hA:B.akC,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a7(1/0,q,A.er(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cj,q,q,q),t,A.dg(q,q,q,q,q,q,q,q,q,B.aV,q,B.fO,q,q,q,new A.az(B.aV.j(0.55),1,B.q,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.i4,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.R)
w.push(new A.a7(1/0,q,A.bG(B.zQ,new C.dSP(d),A.bm(B.aV,q,q,q,q,B.fO,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.D(B.aa,A.w(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a__.prototype={
U(){return new C.biK(A.zk(B.xE,B.nD,B.uf))}}
C.biK.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c6(A.ez(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fug,w,w,w,1,w,!0),B.w,A.zj(this.d,B.bU,new C.dT2(this,d)),w,!1,!1,w,w)}}
C.aXU.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Qa,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lC.prototype={}
C.a5T.prototype={
U(){return new C.bis(null,null)}}
C.bis.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.tE,v,1,v,w)
w.e=A.bj(v,B.pR,v,1,v,w)
w.a.toString
w.d.cL(0)
w.e.cL(0)},
bu(d){var w,v,u=this
u.bC(d)
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
this.buv()},
B(d){var w,v,u=this,t=B.d.dK(D.a3B,new C.dFb(u),new C.dFc())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cug(A.c7(new A.h9(A.a([w,v],x.dS)),new C.dFd(u,t),null),!0)}}
C.bir.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b_Y(d,e)
break
case"house":p.m2(d,e,D.d43)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdH()
$.W()
t=A.N()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.af(new A.x(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.m7(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.AR(d,e,12)
p.xW(d,e,B.kS,5,14)
break
case"grocery":p.ceT(d,e)
break
case"calculator":p.ceA(d,e)
break
case"lumber":p.cf0(d,e)
break
case"kitchen":p.ceW(d,e)
break
case"landscape":p.m2(d,e,D.d4B)
s=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b5(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cR(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cR(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.ap(t,w))
s.E(new A.ap(0,w))
s.E(new A.bE())
w=A.N()
w.r=B.er.j(0.85).gp(0)
d.aS(s,w)
p.AR(d,e,8)
p.xW(d,e,B.iH,4,18)
break
case"plumbing":p.cf9(d,e)
break
case"electrical":p.m2(d,e,D.dfm)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.N()
u.r=B.c.j(q*0.12).gp(0)
d.b1(new A.a9(0,0,0+e.a,0+e.b),u)
p.m7(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.m7(d,e,B.lO.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.AR(d,e,10)
break
case"store":p.cfj(d,e)
break
case"paint_remodel":p.cf4(d,e)
break
case"roofing":p.cfb(d,e)
break
case"warehouse":p.cfq(d,e)
break
case"vehicles":p.cfo(d,e)
break
case"farm":p.ceN(d,e)
break
case"restaurant":p.cfa(d,e)
break
case"tools":p.cfm(d,e)
break
case"wallet":p.cfp(d,e)
break
case"concrete":p.ceG(d,e)
break
case"blueprint":p.cey(d,e)
break
default:p.b_Y(d,e)}},
m2(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.N()
w.sar(new A.a8(B.ay,B.aC,B.x,f,null,null).aA(0,v))
d.b1(v,w)},
m7(d,e,f,g,h){var w,v,u,t,s,r,q=new A.x(e.a/2,e.b/2),p=e.gdH()/2-h
$.W()
w=A.N()
w.b=B.af
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bU(q,p)
r=w.K()
v.drawArc.apply(v,[A.bX(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xW(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdH()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.K()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
AR(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.W()
o=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.K()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b_Y(d,e){var w,v=this
v.m2(d,e,D.ddP)
w=v.c
v.m7(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.m7(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bLT(d,e,B.hI,w)
v.xW(d,e,B.c.j(0.7),6,8)},
bLT(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.N()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.K()
s.drawRect(A.bX(new A.a9(16,q,t,q+3)),p)
p.delete()}},
ceT(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m2(d,e,D.ckH)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.am(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.W()
l=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
l.r=D.d2k[B.o.F(s,4)].j(0.85).gp(0)
k=l.K()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.m7(d,e,B.c.j(0.35),w,16)
j.xW(d,e,B.iH,5,12)},
ceA(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m2(d,e,D.ckO)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdH()
$.W()
q=A.N()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.af(new A.x(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h2(g,g,g,g,g,B.a4,B.cb,g,B.dR,B.c7)
for(o=0;o<6;++o){n=v+o*0.9
r=D.d6c[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saU(0,new A.eR(r,g,g,B.d_,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eO()
p.a6(d,new A.x(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.am(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ckQ[o]
l=B.kp.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saU(0,new A.eR(m,g,g,B.d_,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eO()
p.a6(d,new A.x(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.am(o,3)*0.38)+Math.sin(n)*6))}h.m7(d,e,B.c.j(0.35),w*1.5,14)
h.m7(d,e,B.eC.j(0.55),-v*3.141592653589793*2,8)
h.m7(d,e,B.xn.j(0.4),r*2.8,22)
h.xW(d,e,B.pA,8,10)
h.AR(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.W()
r=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.K()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
cf0(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m2(d,e,A_.awa)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.by(new A.a9(20,q,u,q+10),B.hD)
$.W()
o=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
o.r=A.aq(B.fT,B.oC,(r+1)/2).gp(0)
n=o.K()
t.drawRRect(A.eT(p),n)
n.delete()}m.m7(d,e,B.fT.j(0.35),w,15)
m.AR(d,e,8)},
ceW(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m2(d,e,D.d2P)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.W()
l=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.K()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.m7(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.xW(d,e,B.px,4,14)},
cf9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m2(d,e,D.cSP)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.W()
n=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
n.b=B.af
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.K()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xW(d,e,B.oI,6,12)
l.m7(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cfj(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m2(d,e,D.cyj)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.by(new A.a9(q,14,q+u,22),B.iw)
$.W()
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.r=A.aq(B.fa,B.bL,(r+1)/2).gp(0)
o=p.K()
t.drawRRect(A.eT(q),o)
o.delete()}n.m7(d,e,B.c.j(0.3),w,16)
n.AR(d,e,8)
n.xW(d,e,B.vb,5,13)},
cf4(d,e){var w,v,u,t,s,r,q,p,o
this.m2(d,e,D.cYE)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.by(new A.a9(q,p,q+8,p+(18+r*22)),B.hU)
$.W()
q=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
q.r=[B.i0,B.dr,B.bL,B.ek][s].j(0.85).gp(0)
o=q.K()
t.drawRRect(A.eT(p),o)
o.delete()}this.m7(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cfb(d,e){var w,v,u,t,s,r,q,p,o
this.m2(d,e,D.cWa)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.W()
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.K()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xW(d,e,B.cr,7,11)},
cfq(d,e){var w,v,u,t,s,r,q,p,o,n
this.m2(d,e,D.cB1)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.by(new A.a9(p,o,p+(t-r*8),o+16),B.hD)
$.W()
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.r=A.aq(B.cr,B.aO,(Math.sin(q)+1)/2).gp(0)
n=p.K()
s.drawRRect(A.eT(o),n)
n.delete()}this.m7(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cfo(d,e){var w,v,u,t,s,r,q,p,o
this.m2(d,e,D.djg)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.by(new A.a9(r,q,r+28,q+8),B.hD)
$.W()
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.K()
t.drawRRect(A.eT(q),o)
o.delete()}this.AR(d,e,6)},
ceN(d,e){var w,v,u,t,s,r,q,p,o,n
this.m2(d,e,D.d1r)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.N()
s.r=B.lO.j(0.75).gp(0)
d.af(new A.x(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
o.r=B.hg.j(0.85).gp(0)
o.c=3
n=o.K()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.m7(d,e,B.lO.j(0.35),w,14)},
cfa(d,e){var w,v,u,t,s,r,q,p,o=this
o.m2(d,e,D.d3T)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.ci(new A.x(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
q.r=B.c.j(0.22).gp(0)
p=q.K()
t.drawOval(A.bX(r),p)
p.delete()}o.xW(d,e,B.px,5,16)
o.AR(d,e,7)},
cfm(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m2(d,e,D.dgR)
w=m.c
v=w*3.141592653589793
m.m7(d,e,B.oC.j(0.55),v*3,10)
m.m7(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
o.r=B.oC.j(0.8).gp(0)
n=o.K()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cfp(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m2(d,e,D.djT)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.by(new A.a9(p,o,p+36,o+22),B.iw)
$.W()
p=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
p.r=A.aq(B.iH,B.lO,q).gp(0)
n=p.K()
s.drawRRect(A.eT(o),n)
n.delete()}m.AR(d,e,9)
m.m7(d,e,B.c.j(0.4),w*2.2,12)},
ceG(d,e){var w,v,u,t,s,r,q,p,o,n
this.m2(d,e,D.d8V)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bU(new A.x(v,u),34)
$.W()
s=A.N()
s.b=B.af
s.c=5
s.r=B.c.j(0.45).gp(0)
d.eV(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.av(B.Y,B.X,B.a_,B.a0,B.Z)
o.r=B.bO.j(0.85).gp(0)
n=o.K()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
cey(d,e){var w,v,u,t,s,r,q,p
this.m2(d,e,D.d4U)
$.W()
w=A.N()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.K()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.K()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.W()
u=A.N()
u.r=B.dr.j(0.45).gp(0)
d.b1(new A.a9(0,p,0+v,p+6),u)
this.m7(d,e,B.kS.j(0.45),-t*3.141592653589793*2,11)},
av(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.as2.prototype={
a_5(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aP8(),$async$a_5)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a87(s),$async$a_5)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_5,v)},
afH(d){return this.chG(d)},
chG(d){var w=0,v=A.j(x.H),u=this,t
var $async$afH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.i8M(d),$async$afH)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$afH,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.I?B.jA:B.iZ
w=x.p
v=A.a([C.aPw(!0,B.qE,1/0,B.q_,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.c0(new A.bI(B.b2,t,t,new A.D(B.vr,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.ax5,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b2,B.b6,B.x,u,t,t),B.n),B.be))}v.push(A.ao(8,A.B(A.a([A.E(A.dn(D.bL9,D.fiP,new C.cgn(this,d),A.bm(B.aV,t,t,t,B.c,t,B.jE,t,t,t,t,B.cc)),1),B.ab,A.E(A.er(D.bTr,D.fxk,this.gc8H(),A.dg(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jE,t,t,D.aZE,t,t,t,B.cc)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fK(1.7777777777777777,A.aF(!1,B.a1,!0,B.qE,new A.an(B.V,t,B.b0,B.r,v,t),B.aq,s,0,t,t,t,t,t,B.ag),t)}}
C.aKH.prototype={
aW(){this.b6()
this.b5()
this.dI()},
t(){var w=this,v=w.b2$
if(v!=null)v.a4(0,w.gdD())
w.b2$=null
w.a2()}}
C.aSu.prototype={}
C.aSt.prototype={}
C.aQs.prototype={}
C.YD.prototype={
U(){return new C.ay7()}}
C.ay7.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b3,B.aM)
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(w,v)},
t(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
K7(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.f_f)
return}t=u.c
t.toString
v=u.e
A.a4(t,!1).O(new C.aSu(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.I,l=m?B.e_:B.c,k=A.n(20),j=A.p(n,D.bT6,B.f,n,n,new A.o(B.aV.j(0.15),n,n,A.n(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aO:B.au,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bz,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bm,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aI(n,n,n,n,A.X(B.cy,m?B.bs:B.bm,n,n,n,n),n,n,n,new C.cZZ(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bm,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bm,n,n,n,n,n,n,n,n,11,n,n,B.cv,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hap(new C.d__(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aO:B.au,n,n,n,n,n,n,n,n,n,n,n,B.a6,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jA:B.iZ
r=A.n(12)
q=A.n(12)
p=m?B.e3:B.bO
t=A.aM(n,B.U,!0,n,!0,B.r,n,A.aN(),u,n,n,n,n,n,2,A.bs(n,new A.b4(4,r,B.dj),n,n,n,n,n,n,!0,new A.b4(4,q,new A.az(p,1,B.q,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d_0(o),n,!1,n,n,!1,n,!0,n,B.aa,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a4,n,S.Ja,n,n,n,n)
u=m?B.aO:B.au
m=m?B.e3:B.bO
return A.eL(n,l,new A.cT(B.lJ,A.cc(A.w(A.a([j,B.aP,i,B.av,w,B.N,v,B.aP,t,B.bw,A.B(A.a([A.E(A.dT(B.dh,new C.d_1(d),A.dg(n,n,n,n,n,n,n,n,n,u,n,n,B.ck,n,new A.b7(A.n(12),B.W),new A.az(m,1,B.q,-1),n,n,n,n)),1),B.at,A.E(A.bG(D.fxz,o.ga28(),A.bm(B.aV,n,n,n,B.c,n,B.ck,n,new A.b7(A.n(12),B.W),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.r,n,B.y,n,B.Bi,n,n,B.ah),n),n,n,n,X.Bj,B.d3,n,new A.b7(k,B.W),n)}}
C.YC.prototype={
U(){return new C.ay6()}}
C.ay6.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aP()
this.d=new A.ar(B.as,w)},
t(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
K7(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.eXV)
return}v=this.c
v.toString
A.a4(v,!1).O(new C.aSt(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.I,o=p?B.e_:B.c,n=A.n(20),m=A.p(q,D.bPG,B.f,q,q,new A.o(B.bR.j(0.15),q,q,A.n(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.au,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bz,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bm,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aI(q,q,q,q,A.X(B.cy,p?B.bs:B.bm,q,q,q,q),q,q,q,new C.cZV(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.n(12)
v=A.I(B.aV.j(0.25),B.q,1)
u=A.X(B.ako,B.aV.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.au,q,q,q,q,q,q,q,q,12,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bE,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aO:B.au,q,q,q,q,q,q,q,q,q,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jA:B.iZ
t=A.n(12)
s=A.n(12)
r=p?B.e3:B.bO
v=A.aM(q,B.U,!0,q,!0,B.r,q,A.aN(),w,q,q,q,q,q,2,A.bs(q,new A.b4(4,t,B.dj),q,q,q,q,q,q,!0,new A.b4(4,s,new A.az(r,1,B.q,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.aj,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cZW(this),q,!1,q,q,!1,q,!0,q,B.aa,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a4,q,B.kJ,q,q,q,q)
w=p?B.aO:B.au
p=p?B.e3:B.bO
return A.eL(q,o,new A.cT(B.lJ,A.cc(A.w(A.a([m,B.aP,l,B.aB,v,B.bw,A.B(A.a([A.E(A.dT(B.dh,new C.cZX(d),A.dg(q,q,q,q,q,q,q,q,q,w,q,q,B.ck,q,new A.b7(A.n(12),B.W),new A.az(p,1,B.q,-1),q,q,q,q)),1),B.at,A.E(A.bG(D.fEr,this.ga28(),A.bm(B.bR,q,q,q,B.c,q,B.ck,q,new A.b7(A.n(12),B.W),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.r,q,B.y,q,B.Bi,q,q,B.ah),q),q,q,q,X.Bj,B.d3,q,new A.b7(n,B.W),q)}}
C.Ya.prototype={
U(){return new C.awR()}}
C.awR.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aP()
v.d=new A.ar(B.as,w)
v.e!==$&&A.aP()
v.e=new A.ar(new A.bb("1",B.b3,B.aM),w)
v.f!==$&&A.aP()
v.f=new A.ar(B.as,w)
v.r!==$&&A.aP()
v.r=new A.ar(B.as,w)},
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
gJs(){var w,v=this.e
v===$&&A.c()
w=A.d5(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaiU(){var w=this.f
w===$&&A.c()
w=A.d5(B.a.i(w.a.a))
return w==null?0:w},
gb2Q(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aNQ(d){var w,v=B.k.D(this.gJs()+d,0.25,999999),u=B.k.ja(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ab(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.saU(0,u)
this.m(new C.cxz())},
axi(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.jA:B.iZ,s=A.n(14),r=A.n(14)
u=u?B.e3:B.bO
return A.bs(w,new A.b4(4,s,B.dj),w,B.bE,w,w,w,w,!0,new A.b4(4,r,new A.az(u,1,B.q,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.n(14),B.aaS),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c8I(d,e,f){return this.axi(d,e,f,null)},
K7(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaiU()<=0){s.c.I(x.q).f.R(D.f17)
return}r=s.c
r.toString
v=s.gJs()
u=s.gaiU()
t=s.gb2Q()
A.a4(r,!1).O(new C.aQs(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.I,m=new C.tR(n),l=n?B.e_:B.c,k=A.n(24),j=x.O,i=A.a([B.aV.j(0.22),B.bR.j(0.14)],j),h=A.n(14)
i=A.p(o,D.bJ6,B.f,o,o,new A.o(o,o,A.I(B.aV.j(0.35),B.q,1),h,o,new A.a8(B.a3,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.au,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bz,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.cv,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aI(o,o,o,o,A.X(B.cy,n?B.bs:B.bm,o,o,o,o),o,o,o,new C.cxF(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.au,o,o,o,o,o,o,o,o,o,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.U,!0,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.axi(m,"Item name (optional)","Lumber, paint, labor\u2026",B.NO),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,S.Ja,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jA:B.iZ
t=A.n(14)
s=A.I(n?B.e3:B.bO,B.q,1)
r=A.aI(o,o,o,o,A.X(B.yt,n?B.aO:B.au,o,o,o,20),o,o,o,new C.cxG(p),o,o,o,o,o,B.cc)
q=p.e
q===$&&A.c()
q=A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),q,o,o,o,o,o,2,D.bUZ,B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cxH(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aO:B.au,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a7(52,o,q,o),A.aI(o,o,o,o,A.X(B.hz,n?B.aO:B.au,o,o,o,20),o,o,o,new C.cxI(p),o,o,o,o,o,B.cc)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aO:B.au,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.at,A.E(A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),t,o,o,o,o,o,2,p.axi(m,"Amount","0.00",B.hN),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,B.dW,o,o,o,1,o,o,!1,"\u2022",o,new C.cxJ(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a4,o,B.an,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.M(D.cZ7,new C.cxK(p,m),t),t.k("ak.E"))
i=A.a([i,B.bw,v,B.aB,h,B.N,s,B.ac,A.bZ(B.bC,u,B.br,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.au,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.R,A.aM(o,B.U,!1,o,!0,B.r,o,A.aN(),h,o,o,o,o,o,2,p.c8I(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cxL(p),o,o,o,!1,o,o,!1,o,!0,o,B.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a4,o,B.kJ,o,o,o,o)],w))}i.push(B.aP)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.I(B.aV.j(0.35),B.q,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJs()===B.k.ja(p.gJs())?B.k.N(p.gJs()):p.gJs()
s=p.gb2Q()
r=A.AN(p.gaiU())
i.push(A.p(o,A.B(A.a([A.E(A.w(A.a([u,B.av,A.d(A.u(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bm,o,o,o,o,o,o,o,o,12,o,o,B.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bC4(p.gJs()*p.gaiU(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a8(B.a3,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jn,o,o,o))
i.push(B.bw)
j=A.n(14)
h=n?B.e3:B.bO
h=A.dg(o,o,o,o,o,o,o,o,o,o,o,o,B.ck,o,new A.b7(j,B.W),new A.az(h,1,B.q,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dT(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.au,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cxM(d),h),1),B.at,A.E(A.dn(D.anS,D.fAr,p.ga28(),A.bm(B.aV,o,o,0,B.c,o,B.ck,o,new A.b7(A.n(14),B.W),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eL(o,l,new A.cT(W.abg,A.cc(A.w(i,B.ai,o,B.e,B.Q,0,B.p),B.r,o,B.y,o,Ad.r4,o,o,B.ah),o),o,o,o,B.Mz,B.d3,o,new A.b7(k,B.W),o)}}
C.a0J.prototype={
U(){return new C.buM()}}
C.buM.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(new A.bb(w,B.b3,B.aM),v)},
t(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.I,q=r?B.e_:B.c,p=A.n(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aO:B.au,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aO:B.au,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jA:B.iZ
v=A.aM(s,B.U,!0,s,!0,B.r,s,A.aN(),w,s,s,s,s,s,2,A.bs(s,new A.b4(4,A.n(12),B.dj),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f89(t,d),s,!1,s,s,!1,s,!0,s,B.aa,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a4,s,B.an,s,s,s,s)
u=A.E(A.dT(B.dh,new C.f8a(d),s),1)
r=A.bm(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eL(s,q,new A.D(B.Bi,A.w(A.a([o,B.aB,v,B.aP,A.B(A.a([u,B.at,A.E(A.bG(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f8b(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d3,s,new A.b7(p,B.W),s)}}
C.ab8.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.Fw.prototype={
U(){return new C.buK(null,null)}}
C.buK.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.brj,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bwK()},
gbyd(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bR,B.aZ],x.O)
case 2:return A.a([B.bu,B.aV,B.aZ],x.O)
case 3:return A.a([B.aR,B.c8,B.k_],x.O)
case 4:return A.a([B.iE,B.bR,B.fb],x.O)
case 0:return A.a([B.aV,B.bR,B.aZ],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.eH(A.c7(v,new C.f87(this,new C.tR(w.ax.a===B.I)),null),null)}}
C.awK.prototype={
U(){return new C.buL(null,null)}}
C.buL.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.n4,null,1,null,v)
w.cL(0)
v.d!==$&&A.aP()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bwL()},
B(d){var w=this.d
w===$&&A.c()
return A.c7(w,new C.f88(this),null)}}
C.buJ.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.by(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aR(w,w))
u=new A.aO($.W().r,B.ao,null,null,A.a([],x.v))
u.E(new A.iM(v))
w=A.N()
w.b=B.af
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aD(v,w)
w=A.N()
w.b=B.af
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aS(u,w)
w=A.xc(u)
t=A.a([],x.f5)
w=new A.vD(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jX('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.Ho(w,r)
w.jz()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aRg(d,q,r,o,0,0.2,4.2,0.92)
p.aRg(d,q,r,s,0.52,0.11,3.2,0.58)}},
aRg(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hwb(e.a.a,e,t,t+f*i,!0),r=A.bAs(s.gbK().a.getBounds())
$.W()
w=A.N()
w.b=B.af
w.c=j
w.d=B.bV
w.f=!0
v=this.f
u=k*this.e
w.sar(new A.a8(B.a3,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Hd,null).aA(0,r))
d.aS(s,w)},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aMJ.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aMK.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.tR.prototype={}
C.as1.prototype={
U(){return new C.aEh()},
ge1(){return this.c}}
C.aEh.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.agy()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Lc(w,v)
this.a2()},
agy(){var w=0,v=A.j(x.H),u=this,t,s
var $async$agy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bAz(t.c,t.d.a),$async$agy)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eHJ(u,s))
return A.h(null,v)}})
return A.i($async$agy,v)},
PX(){var w=0,v=A.j(x.H),u=this,t,s
var $async$PX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eHA(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Lc(t,s),$async$PX)
case 2:if(u.c!=null)u.m(new C.eHB(u))
return A.h(null,v)}})
return A.i($async$PX,v)},
Qs(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.ca(null,null,!0,null,new C.eHH(t,new C.tR(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Qs)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a87(q),$async$Qs)
case 6:case 5:t.m(new C.eHI(t,r))
w=7
return A.b(t.PX(),$async$Qs)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Qs,v)},
VC(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.i8x(r),$async$VC)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eHv(t,new C.r1(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.PX(),$async$VC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$VC,v)},
cdK(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.ho5(t,new C.eHz(u),w,v)},
aaI(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bO(new A.az(v,2.5,B.q,-1),B.W,B.W,new A.az(B.c.j(d?0.85:0.55),2.5,B.q,-1)),D.aZq,w,w,B.n),w,22,w,w,w,w,w,22)},
a9M(d){return this.bK8(d)},
bK8(d){var w=0,v=A.j(x.H),u=this
var $async$a9M=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eHy(u,d))
w=2
return A.b(u.PX(),$async$a9M)
case 2:return A.h(null,v)}})
return A.i($async$a9M,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.I,e=f?B.bY:B.iC,d=A.n(8),a0=A.X(Q.a_x,f?B.bs:B.bm,g,g,g,16),a1=x.p
a0=A.aK(!1,d,!0,new A.D(B.FF,A.B(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bm,g,g,g,g,g,g,g,g,g,g,g,B.a6,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eHK(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.V,g,B.b0,B.r,A.a([A.bw(A.n(22),C.aPw(!0,A.n(22),1/0,B.q_,g,d,1/0),B.aq),A.ao(10,A.dn(D.bNI,D.fCK,h.gb0J(),A.bm(B.w.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b7(A.n(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aV.j(f?0.5:0.38),B.eV,22),new A.ac(-4,B.G,B.bR.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.I(B.c.j(0.45),B.q,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.p(g,A.p(g,A.bw(s,new A.an(B.V,g,B.b0,B.r,A.a([C.aPw(!0,A.n(16),1/0,B.Ni,g,r.c,1/0),A.c0(g,new A.o(g,g,g,g,g,new A.a8(B.b2,B.b6,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.be),A.ao(g,h.aaI(!0),g,g,8,g,8,g),A.ao(g,A.cv0(h.aaI(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cv0(h.aaI(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cv0(h.aaI(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dn(D.bJG,D.fwj,h.gb0J(),A.bm(B.w.j(0.45),g,g,g,B.c,g,B.h8,g,new A.b7(A.n(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bWE,B.n),g,g,g,g,B.lW,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aO:B.au,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.b8T,B.nM,B.fV],u):A.a([B.aZ,B.aV,B.bR],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aV.j(f?0.45:0.35),B.eV,24)],t)
r=A.n(22)
p=A.ao(g,A.X(B.jH,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.I(B.c.j(0.22),B.q,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h7,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bC4(h.d.gwW(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.N,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cv,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.I(B.hh.j(0.75),B.q,1.6)
t=A.a([new A.ac(0,B.G,B.aR.j(0.28),B.cH,14)],t)
j=B.aR.j(0.22)
i=A.n(10)
u=A.p(g,A.bw(r,new A.an(B.V,g,B.a9,B.r,A.a([p,new A.D(D.bvW,A.B(A.a([o,B.at,A.aF(!1,B.a1,!0,g,A.aK(!1,n,!0,A.eB(new A.D(Ai.Bd,A.w(A.a([A.p(g,D.ans,B.f,g,g,new A.o(j,g,A.I(B.aR.j(0.5),B.q,1),i,g,g,B.n),g,g,g,g,B.cp,g,g,g),B.fF,D.flu],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcdJ(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ag)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.o(g,g,g,v,s,new A.a8(B.ay,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fK(1.7777777777777777,d,g),B.aP,w,B.N,u,B.bw,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.au,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b4,A.dn(Ak.a1f,D.fjp,h.gbyG(),A.bm(B.aV,g,g,g,B.c,g,B.iK,g,new A.b7(A.n(12),B.W),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.e_:B.c
v=A.n(14)
u=A.I(f?B.e3:B.bO,B.q,1)
t=A.X(B.a_S,f?B.bs:B.bm,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.au,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.w(A.a([t,B.R,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bm,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.r5,g,g,1/0))}else B.d.v(d,new A.M(w,new C.eHL(h,new C.tR(f)),A.T(w).k("M<1,t>")))
if(h.e)d.push(new A.D(B.B6,A.au(A.mK(g,f?B.bs:B.bm,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bl(!0,A.w(A.a([new A.D(B.Bb,a0,g),A.E(A.cc(A.w(d,B.F,g,B.e,B.j,0,B.p),B.r,g,B.y,g,E.xW,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0),g,!1,!1,g,g)},
bCk(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e_:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.n(16),m=A.p(u,u,B.f,u,u,D.b1b,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.n(12)
l=A.p(u,A.X(s?B.hO:B.h9,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bI
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aO:B.au,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcTi()
v=A.AN(d.d)
B.d.v(t,A.a([B.av,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bm,u,u,u,u,u,u,u,u,12,u,u,B.a6,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.F,u,B.b7,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bR.j(0.1)],x.O)
w=A.n(12)
k=A.p(u,C.bC4(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a8(B.a3,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h8,u,u,u)
w=x.p
return A.p(u,A.bw(n,new A.DX(A.B(A.a([m,A.E(new A.D(B.ahA,A.B(A.a([l,B.bd,t,B.ab,k,A.aI(u,u,u,u,A.X(B.cy,(r?B.bs:B.bm).j(0.75),u,u,u,20),u,u,u,new C.eHw(this,d),u,u,u,u,u,B.cc)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ai,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b02,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d9,u,u,u,u)}}
C.ad7.prototype={
Em(d){return this.bLv(d)},
bLv(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Em=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.p8(d,o,!1),$async$Em)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
w=4
return A.b(A.bM(Ac.B4,null,x.H),$async$Em)
case 4:s=t.d
w=5
return A.b(C.fG1(!0,o,s),$async$Em)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Gp(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$Em)
case 6:p=f
w=7
return A.b(A.p7(o,!1),$async$Em)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Em,v)},
a_6(d){return this.cu4(d)},
cu4(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.p8(d,s,!1),$async$a_6)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
A.hE(d,new C.arW(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.p7(s,!1),$async$a_6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_6,v)},
PY(d){return this.cq7(d)},
cq7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$PY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aGx,!0,"NgmyWorksheetProjectScan",x.N),$async$PY)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bC5(s),$async$PY)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.f0f)
w=1
break}q=C.h0l(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dR(p,x.H),$async$PY)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$PY,v)},
a_7(d){return this.cC8(d)},
cC8(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(C.bBD(),$async$a_7)
case 3:s=f
if(s==null){w=1
break}r=C.h0l(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dR(q,x.H),$async$a_7)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_7,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.I,t=new C.tR(u),s=w.d.d.length,r=u?B.e_:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kf,36)],x.V),o=x.p
return A.bl(!0,new A.D(B.vy,A.p(v,A.w(A.a([w.csD(d,t,s),new A.D(D.bvk,A.w(A.a([w.b3K(t,"QR restore"),B.R,A.B(A.a([w.aZH(t,!0,B.jr,B.aR,B.aR,new C.eHN(w,d),"Show to scan","QR code"),B.at,w.axj(t,B.j3,B.b5,B.by,new C.eHO(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d7,w.b3K(t,"Backup files"),B.R,A.B(A.a([w.axj(t,B.hB,B.aV,B.bR,new C.eHP(w,d),"Full copy","Backup file"),B.at,w.axj(t,L.yy,B.aE,B.aT,new C.eHQ(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ae,!0,!0)},
csD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f2,B.cN,B.fx],k):A.a([B.aZ,B.aV,B.bR],k)
w=A.ao(l,A.X(B.u7,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.au(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.n(4),l,l,B.n),l,4,l,B.kU,l,l,l,36),l,l,l)
u=A.n(14)
t=A.I(B.c.j(0.45),B.q,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aPw(!0,A.n(13),64,D.bF1,l,r.c,64),B.aq,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aR8,l,l,l)
r=C.bC4(r.gwW(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.I(B.c.j(0.22),B.q,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.V,l,B.a9,B.r,A.a([w,new A.D(D.bvJ,A.w(A.a([v,A.B(A.a([s,B.eo,A.E(A.w(A.a([u,B.av,t,B.N,A.B(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fD,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aI(l,l,l,l,A.X(B.cy,B.c.j(0.85),l,l,l,l),l,l,l,new C.eHM(d),l,l,l,A.nC(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aOp,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a8(B.ay,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b3K(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aV,w,w,A.n(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bm,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aZH(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.agc:B.aO
if(e)w=B.aR.j(o?0.45:0.35)
else{w=o?B.e3:B.bO
w=w.j(o?0.8:1)}w=A.I(w,B.q,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aR.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.I(h.j(0.35),B.q,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.r6,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aO:B.au,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.eB(new A.D(E.YT,A.w(A.a([t,B.ac,u,B.bz,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bm,r,r,r,r,r,r,r,r,11,r,r,B.cv,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
axj(d,e,f,g,h,i,j){return this.aZH(d,!1,e,f,g,h,i,j)}}
C.arW.prototype={
U(){return new C.bk2()}}
C.bk2.prototype={
a_(){this.a1()
this.aer()},
aer(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aer=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bC6(p.c,p.d),$async$aer)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eHq(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eHr(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aer,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.I,f=g?B.AD:B.iC,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.X(B.eF,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eHs(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.zE],u),B.m,h,B.e,B.j,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.f2,B.cN,B.fx],s):A.a([B.aZ,B.aV,B.bR],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aV.j(g?0.4:0.3),B.eV,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.de,B.L,h,h)
p=C.bC4(p.gwW(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.p(h,A.w(A.a([o,B.am,A.B(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fD,h,h,h)],u),B.m,h,B.b7,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a8(B.ay,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Zf,h,h,1/0)
t=g?D.biu:B.c
q=A.n(24)
p=A.I(w?B.aR.j(0.4):B.aV.j(0.3),B.q,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dn,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a7U,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.ebR)
else{m=A.n(20)
l=A.I(B.aL,B.q,1)
o.push(A.p(h,A.pR(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aP)
n=w?B.aR:B.aV
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.I((w?B.aR:B.aV).j(0.35),B.q,1)
k=w?B.Ny:B.O2
k=A.X(k,w?B.aR:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a6,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iK,h,h,h))
return A.c6(h,f,A.bl(!0,A.w(A.a([new A.D(A7.MK,e,h),A.E(A.cc(A.w(A.a([s,B.aP,A.p(h,A.w(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.tM,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.r,h,B.y,h,E.aiH,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ae,!0,!0),h,!1,!1,h,h)}}
C.as0.prototype={
U(){return new C.aEg(A.zk(B.M2,B.nD,B.uf))}}
C.aEg.prototype={
t(){this.d.t()
this.a2()},
aLS(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iQ(w,d)},
c9z(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u]
s=C.i6r(t)
if(s!=null){this.aLS(s)
return}r=C.heZ(t)
if(r!=null)q=A.cU(r,p,0)
else q=!1
if(q){this.aLS(B.a.i(B.a.b3(r,B.a.cK(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.ez(A.a([A.aI(t,t,t,t,A.X(u.f?B.tY:A2.NF,t,t,t,t,t),t,t,t,new C.eHu(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.AD,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fwd,t,t,t,1,t,!0),q=A.zj(u.d,B.bU,u.gc9y()),p=A.n(28)
p=A.au(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aV,B.q,3),p,A.a([new A.ac(2,B.G,B.aV.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.n(16)
return A.c6(r,B.w,new A.an(B.V,t,B.b0,B.r,A.a([q,p,A.ao(32,A.p(t,D.fv0,B.f,t,t,new A.o(w,t,A.I(B.aV.j(0.45),B.q,1),v,t,t,B.n),t,t,t,t,B.jn,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aJ3.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.O0.prototype={
U(){return new C.aEi(D.aa8,A.a([],x.D))},
br(){return this.r.$0()},
ge1(){return this.c}}
C.aEi.prototype={
gcA0(){return J.bDf(this.e,0,new C.eIc())},
a_(){this.a1()
$.aV.bY$.push(this)
this.vF()},
t(){$.aV.hM(this)
this.a2()},
j6(d){if(d===B.fv)this.vF()},
vF(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vF=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.CR(q.a.c).d8(0,B.k5),$async$vF)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eI8(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eI9(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vF,v)},
HT(d){return this.bIh(d)},
bIg(){return this.HT(null)},
bIh(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$HT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.i8z(l,d),$async$HT)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lk(l,r,q,D.d97,new A.S(Date.now(),0,!1))
w=4
return A.b(C.Lc(t.a.c,p),$async$HT)
case 4:o=f
w=5
return A.b(t.vF(),$async$HT)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eYo)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.f_9)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Eq(m)
case 1:return A.h(u,v)}})
return A.i($async$HT,v)},
Eq(d){return this.cdv(d)},
cdv(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Eq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.as1(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Eq)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Lc(u.a.c,t),$async$Eq)
case 5:case 4:w=6
return A.b(u.vF(),$async$Eq)
case 6:return A.h(null,v)}})
return A.i($async$Eq,v)},
vs(d){return this.bYi(d)},
bYi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bBD(),$async$vs)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aGx,!0,"NgmyWorksheetProjectScan",x.N),$async$vs)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bC5(q),$async$vs)
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
r.R(A.b2(null,null,null,null,null,B.r,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h0l(s)
w=15
return A.b(C.Lc(t.a.c,p),$async$vs)
case 15:o=f
w=16
return A.b(t.vF(),$async$vs)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.f_e)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
t.Eq(p)
case 1:return A.h(u,v)}})
return A.i($async$vs,v)},
NM(d){return this.bGX(d)},
bGX(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$NM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ca(null,null,!0,null,new C.eHU(d),s,null,!0,!0,x.y),$async$NM)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oJ(t.a.c,A.a([],x.D)),$async$NM)
case 6:w=7
return A.b(t.vF(),$async$NM)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eYt)
case 4:case 1:return A.h(u,v)}})
return A.i($async$NM,v)},
cdI(d){var w=this.c
w.toString
A.bQ(B.K,null,new C.eI2(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b4l(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.jA
else w=B.c
v=A.n(16)
u=A.I(p?B.e3:B.bO,B.q,1)
t=d.j(0.14)
s=A.n(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aO:B.au,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(r,A.w(A.a([s,B.ac,t,B.bz,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bm,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vx,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
a_B(d,e){return this.cdw(d,e)},
cdw(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_B=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bQ(B.K,null,new C.eHY(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a_B)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.ho5(r,new C.eHZ(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.NO(d,e),$async$a_B)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_B,v)},
b1k(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aw
else t=h.a?B.aO:B.au
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,u,!0,new A.D(B.Bh,A.B(A.a([s,B.bd,t,A.X(B.eA,w?B.bs:B.bm,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag)},
cko(d,e,f,g,h,i){return this.b1k(!1,d,e,f,g,h,i)},
NO(d,e){return this.bH6(d,e)},
bH6(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$NO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.l6(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$NO)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bAm(t.a.c,d.a),$async$NO)
case 6:w=7
return A.b(t.vF(),$async$NO)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$NO,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.I,n=new C.tR(o),m=o?B.bY:B.iC
if(q.f)o=D.b6M
else{w=q.bBt(n)
v=q.bXo(n)
u=q.gbyA()
if(o)t=B.jA
else t=B.c
s=A.n(13)
r=x.p
u=A.a([w,B.ac,v,B.aP,new C.Fw(A.p(p,A.B(A.a([q.aAM(N.Nh,"Projects",n,D.aa8),q.aAM(B.vL,"Cashier",n,D.aWf),q.aAM(B.G_,"Family Tree",n,D.hct)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ev,0.95,u,p),B.bw],r)
w=q.d
if(w===D.aa8){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aO:B.au,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b4,new C.awK(q.gaQ2(),p)],r),B.m,p,B.e,B.j,0,p,p),B.aB,q.ckq(n)],r))}else{o=q.a
if(w===D.aWf)u.push(new C.ao2(o.c,n,p))
else{w=q.r
u.push(new C.apa(o.c,o.d,o.e,o.f,new C.eIf(q),new C.eIg(q),new A.cw(w,x.b4)))}}o=A.cc(A.w(u,B.F,p,B.e,B.j,0,B.p),B.r,p,B.y,p,Ae.ME,p,p,B.ah)}return A.c6(p,m,A.bl(!0,o,!0,!1,B.ae,!0,!0),p,!1,!1,p,p)},
bBt(d){var w=null,v=A.n(8),u=d.a,t=A.X(Q.a_x,u?B.bs:B.bm,w,w,w,16)
return A.aK(!1,v,!0,new A.D(B.kV,A.B(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bm,w,w,w,w,w,w,w,w,14,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHR(this),w,w,w,w,w,w,w)},
gbyA(){switch(this.d.a){case 0:return D.a9q
case 1:return D.h29
case 2:return D.a9r}},
bXo(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bPw,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bA4,A.aF(!1,B.a1,!0,w,A.aK(!1,A.n(12),!0,A.p(w,D.bN0,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.n(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHV(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.n(12)
return new C.Fw(A.p(w,A.w(A.a([new A.D(E.YZ,s,w),A.p(w,A.w(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.av,A.d(A.AN(this.gcA0()),w,w,w,w,w,w,D.ffQ,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.vw,B.jn,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aV,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ae,1,D.h28,w)},
aAM(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aV:B.K,q=A.n(12),p=t?A.I(B.c.j(0.55),B.q,2):A.I(B.K,B.q,2),o=t?A.a([new A.ac(0.5,B.G,B.aV.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bm
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bm
return A.E(A.aF(!1,B.a1,!0,u,A.aK(!1,s,!0,A.de(u,A.B(A.a([w,B.eg,new A.dq(1,B.cm,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b7,B.j,0,u,u),u,u,B.ct,new A.o(r,u,p,q,o,u,B.n),B.iI,u,u,u,B.FG,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eIb(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),1)},
ckq(d){var w,v,u,t,s,r,q=this,p=null
if(J.cm(q.e)){w=d.a
v=w?B.e_:B.c
u=A.n(15)
t=A.p(p,D.bN6,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aV.j(0.5),B.eV,28)],x.V),D.bZ6,B.a5),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aO:B.au,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Fw(A.p(p,A.w(A.a([t,B.d7,s,B.N,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bm,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dY,A.B(A.a([A.E(q.aRC(B.j3,"Scan QR",new C.eI5(q),d),1),B.at,A.E(q.aRC(L.yy,"Upload file",new C.eI6(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.aB,A.bG(D.fGk,q.gaQ2(),A.bm(B.aV,p,p,p,B.c,B.fO,p,p,new A.b7(A.n(12),B.W),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bwN,1.05,D.a9q,p)}w=J.b6(q.e,new C.eI7(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Fw(A.w(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a9q,p)},
aRC(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.I(B.aV.j(0.45),B.q,1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(w,A.w(A.a([A.X(d,B.aZ,w,w,w,26),B.N,A.d(e,w,w,w,w,w,w,D.feg,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ahs,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ag)},
ckp(d,e){var w,v,u=null,t=e.a,s=t?B.e_:B.c,r=A.n(14),q=A.I(t?B.e3:B.bO,B.q,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.em,10)],x.V),o=A.n(14),n=t?B.bs:B.bm
n=A.bw(B.Vs,new A.fK(1.7777777777777777,C.aPw(!0,B.fw,1/0,N.Nh,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.w(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aO:B.au,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.av,A.d(""+d.d.length+" budget items \xb7 "+A.AN(d.gwW()),u,u,u,u,u,u,D.fco,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aK(!1,o,!0,A.w(A.a([n,new A.D(B.bE,A.B(A.a([v,A.aI(u,u,u,u,A.X(Af.a0w,t?B.bs:B.bm,u,u,u,u),u,u,u,new C.eI3(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eI4(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ag),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e8,u,u,u,1/0)}}
C.bws.prototype={}
C.r1.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.F(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcTi(){var w,v,u,t,s=this.c
if(s===B.k.ja(s))w=B.o.u(B.k.N(s))
else{v=B.k.ab(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lk.prototype={
gwW(){return B.d.cM(this.d,0,new C.cx_())},
ag(){var w=this,v=w.d,u=A.T(v).k("M<1,a5<m,@>>")
v=A.C(new A.M(v,new C.cwZ(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
bbu(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lk(w.a,w.b,v,u,w.e)},
bbb(d){return this.bbu(d,null)},
SF(d){return this.bbu(null,d)}}
C.Hz.prototype={
a3(){return"FamilyGender."+this.b}}
C.i1.prototype={
ag(){var w=this
return A.F(["id",w.a,"name",w.b,"gender",C.hjQ(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aDt(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i1(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.aki.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kD.prototype={
gaoh(){var w=this.f
return new A.a_(w,new C.bNe(),A.T(w).k("a_<1>")).gL(0)},
ag(){var w=this,v=w.f,u=A.T(v).k("M<1,a5<m,@>>")
v=A.C(new A.M(v,new C.bNd(),u),u.k("ak.E"))
return A.F(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hZV(w.y)],x.N,x.z)},
yC(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kD(w.a,v,u,t,s,r,w.r,q,p,o)},
bbt(d,e){var w=null
return this.yC(w,w,d,e,w,w,w,w)},
cIZ(d,e,f,g,h,i,j){return this.yC(d,e,f,g,h,i,j,null)},
aDy(d,e){var w=null
return this.yC(w,w,w,d,w,w,e,w)},
cHt(d){var w=null
return this.yC(w,w,w,w,w,w,d,w)},
cHR(d){var w=null
return this.yC(w,w,w,w,w,w,w,d)},
aDk(d){var w=null
return this.yC(w,w,w,w,d,w,w,w)},
cIv(d,e,f){var w=null
return this.yC(w,d,w,e,w,w,f,w)},
cHg(d){var w=null
return this.yC(w,w,d,w,w,w,w,w)},
cI3(d,e){var w=null
return this.yC(d,w,w,w,w,e,w,w)}}
C.cx0.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cx1.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aGl.prototype={}
C.b7X.prototype={
bA(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b7X()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b7W.prototype={
gwd(){return!0},
gFY(){return this.z.b<this.b.length},
aTd(d){switch(0){case 0:return d.a.c}},
aSV(d){switch(0){case 0:return d.a.d}},
bQO(d,e){switch(0){case 0:return new A.hN(d,e)}},
bQb(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h4(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iF(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Hi(b4)
switch(0){case 0:v=b5.b
u=new A.kA(0,v,0,1/0)
t=w===B.Tt
break}s=A.a([],x.gZ)
r=A.U(x.cM,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.L)(q),++h){g=q[h]
g.h4(b4,u,!0)
f=b1.aTd(g)
f.toString
e=b1.aSV(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGl(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aGl(k,j,i))}d=s.length
switch(0){case 0:q=b5.cw(new A.hN(m,l))
a0=q.a
a1=q.b
b1.a=new A.iF(0,0,a0,a1)
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
for(q=B.d.fO(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.L)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aTd(g)
e=b1.aSV(g)
e.toString
a9=b1.bQb(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bQO(a6,a3+a9)
b0=g.a
g.a=new A.iF(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h0(d){var w,v,u,t,s,r=this
r.li(d)
w=d.b
w.i9()
v=A.dp()
u=r.a
v.e9(u.a,u.b,0,1)
w.oW(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.L)(u),++s)u[s].h0(d)
w.ni(0)},
Gt(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
i9(){return this.z}}
C.buN.prototype={}
var z=a.updateTypes(["aA<~>()","R(i1)","R(kD)","~()","R(ne)","a5<m,@>(kD)","H(kD,kD)","m(i1)","kD(a5<@,@>)","R(lk)","R(uj)","ne(a5<@,@>)","uj()","H(lk,lk)","i1(a5<@,@>)","a5<m,@>(i1)","R(r1)","aA<~>(lk)","eA<m?>(i1)","H(i1,i1)","m?(i1)","a5<m,@>(ne)","ZE(Y)","m(m)","acN(Y)","t(oj)","H(ne,ne)","i1(i1)","cL(bv<m,FJ>)","cL(K_)","~(i1)","H?(i1)","i1()","ai<i1>()","R(ui)","R(K_)","D(i1)","~(Hz)","R(aek)","t(Hz,m,a1)","Z2(Y)","bv<m,ai<a5<m,@>>>(m,ai<ne>)","~(H)","+count,id,name(H,m,m)(kD)","kD(kD)","ZZ(Y)","a__(Y)","R(lC)","lC()","m(kD)","a0J(Y)","YD(Y)","YC(Y)","Z0(Y)","Z4(Y)","t(r1)","ad7(Y)","~(m0)","aA<~>([m?])","K(K,lk)","t(lk)","K(K,r1)","a5<m,@>(r1)","r1(a5<@,@>)","YB(Y)","SB(Y)","cp(Hy)","lk(a5<@,@>)","ui()","m(lk)","a5<m,@>(lk)","m(S)","H(i1)","kD(a5<m,@>)","Ya(Y)"])
C.fyG.prototype={
$1(d){return d.a+" "+d.b},
$S:119}
C.fyF.prototype={
bkG(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qU(s,d,B.hC,"book",E.Fl),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.V(r!=null&&A.L0(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bkG(d)},
$S:302}
C.fyH.prototype={
$1(d){return d.b},
$S:119}
C.fHW.prototype={
$1(d){var w=null
return A.eL(w,B.K,new F.Pm(this.a,this.b,w),w,w,0,B.YU,B.d3,w,w,w)},
$S:48}
C.fmP.prototype={
$1(d){return d!=null},
$S:208}
C.fmQ.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:208}
C.fmV.prototype={
$1(d){if(this.a)return new A.x(d.a*520,d.b*160)
return d},
$S:175}
C.fwp.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fb(d,w,w,w,A.h8(w,B.rA,w,w,w,w,w,w,w,B.dt,w,w,10.5,w,B.el,w,!0,w,w,w,w),w),u=f?B.el:B.vF
return new A.nO(D.bsn,A.a9o(A.a([new A.fR(130,w,v),new A.z1(1,B.FT,A.fb(e,w,w,w,A.h8(w,g==null?D.ee8:g,w,w,w,w,w,w,w,B.dt,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.xA,B.lx))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1918}
C.fwo.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vu(999)
f=A.x4(A.lw(h,A.fb("Cashier",h,h,h,A.h8(h,D.zq,h,h,h,h,h,h,h,B.dt,h,h,10,h,B.el,h,!0,h,h,h,h),h),h,new A.kB(D.ee_,h,f,B.hF,h),h,h,D.bsR,h))
w=A.x4(A.fb("Debt receipt",h,h,h,A.h8(h,h,h,h,h,h,h,h,h,B.dt,h,h,22,h,B.el,h,!0,h,h,h,h),h))
v=A.x4(A.fb(C.wN(new A.S(Date.now(),0,!1),!0),h,h,h,D.a8_,h))
u=A.vu(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fb(s,h,h,h,A.h8(h,h,h,h,h,h,h,h,h,B.dt,h,h,14,h,B.el,h,!0,h,h,h,h),h)
r=A.fb("Person who owes",h,h,h,D.a8_,h)
q=A.vu(10)
p=x.C
u=A.lw(h,A.yV(A.a([s,new A.fR(h,2,h),r,new A.fR(h,10,h),A.lw(h,A.yV(A.a([A.fb("Amount owed",h,h,h,D.a8_,h),new A.fR(h,2,h),A.fb(A.AN(t.c),h,h,h,A.h8(h,D.zq,h,h,h,h,h,h,h,B.dt,h,h,20,h,B.el,h,!0,h,h,h,h),h)],p),B.qY,B.lx),h,new A.kB(B.pb,h,q,B.hF,h),h,h,D.bs3,1/0)],p),B.qY,B.lx),h,new A.kB(E.aHL,h,u,B.hF,h),h,h,D.btU,1/0)
q=new A.nv(D.ee2,0.9,B.kO)
r=A.vu(12)
s=i.c
o=s.$2("Original due",C.wN(t.r,!1))
n=s.$2("Current due",C.wN(t.f,!1))
m=i.d
l=new A.nv(m,1.1,B.kO)
k=A.vu(8)
j=i.a
k=A.a([o,n,new A.fR(h,6,h),A.lw(h,A.x4(A.fb(t.gaKn(),h,h,h,A.h8(h,m,h,h,h,h,h,h,h,B.dt,h,h,11,h,B.el,h,!0,0.5,h,h,h),h)),h,new A.kB(h,new A.pB(l,l,l,l),k,B.hF,h),h,h,D.bsZ,1/0),new A.fR(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zq))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zq))
else{n=A.fb("Missed days ("+n+")",h,h,h,A.h8(h,B.rA,h,h,h,h,h,h,h,B.dt,h,h,10.5,h,B.el,h,!0,h,h,h,h),h)
m=A.T(o).k("M<1,S9>")
o=A.C(new A.M(o,new C.fwn(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fR(h,4,h),n,new A.fR(h,6,h),new C.b7W(5,5,new C.b7X(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fR(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fR(h,8,h),w,new A.fR(h,3,h),v,new A.fR(h,16,h),u,new A.fR(h,10,h),A.lw(h,A.yV(k,B.xA,B.lx),h,new A.kB(h,new A.pB(q,q,q,q),r,B.hF,h),h,h,B.ahE,1/0)],p)
w=j.a
if(w!=null){v=new A.nv(B.Io,1,B.kO)
B.d.v(f,A.a([new A.fR(h,16,h),A.fb("Debtor signature",h,h,h,A.h8(h,B.rA,h,h,h,h,h,h,h,B.dt,h,h,10,h,B.el,h,!0,h,h,h,h),h),new A.fR(h,6,h),A.lw(h,new A.HP(w,B.VC,h,h),h,new A.kB(h,new A.pB(v,v,v,v),A.vu(6),B.hF,h),82,h,B.MI,1/0)],p))}f.push(new A.fR(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fb(w,h,h,h,D.f5j,h))
f.push(new A.fR(h,18,h))
f.push(A.x4(A.fb("NGMY.ORG",h,h,h,A.h8(h,D.zq,h,h,h,h,h,h,h,B.dt,h,h,14,h,B.el,h,!0,1.8,h,h,h),h)))
return f},
$S:436}
C.fwn.prototype={
$1(d){var w=null,v=new A.nv(D.Ip,0.7,B.kO),u=A.vu(999)
return A.lw(w,A.fb(C.wN(d,!1),w,w,w,A.h8(w,D.Ip,w,w,w,w,w,w,w,B.dt,w,w,9.5,w,B.el,w,!0,w,w,w,w),w),w,new A.kB(w,new A.pB(v,v,v,v),u,B.hF,w),w,w,D.by9,w)},
$S:1919}
C.c29.prototype={
$1(d){var w=null,v=B.bx.j(0.08),u=A.n(999),t=A.I(B.bx.j(0.28),B.q,1)
return A.p(w,A.d(C.wN(d,!1),w,w,w,w,w,w,D.fbU,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eE,w,w,w)},
$S:1920}
C.fIr.prototype={
$1(d){var w=null,v=A.aH(d,B.bW,x.w).w,u=A.n(26),t=A.aI(w,w,w,w,D.bQq,w,w,w,new C.fIo(d),w,w,w,w,w,B.cc),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eL(w,B.K,new A.cT(new A.aX(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.D(B.YJ,A.w(A.a([new A.bI(B.a8,w,w,t,w),new A.dq(1,B.cm,A.cc(A.w(A.a([new A.eH(new C.aXW(r,w),s),B.R,A.B(A.a([A.E(A.er(B.yF,D.fCG,new C.fIp(s,r,d),A.dg(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f8,w,new A.b7(A.n(14),B.W),new A.az(q,1,B.q,-1),w,w,w,w)),1),B.ab,A.E(A.dn(B.a15,D.fza,new C.fIq(r,d),A.bm(B.aZ,w,w,w,B.c,w,B.f8,w,new A.b7(A.n(14),B.W),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.r,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.au,0,w,w,w,w,w,B.ag),w),w,w,0,Aj.Z7,B.d3,w,w,w)},
$S:48}
C.fIo.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fIp.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.aj$.x.h(0,t.a)
m=m==null?null:m.gba()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m_(2.5),$async$$0)
case 4:w=3
return A.b(e.hu(B.h0),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eU(B.dC.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.t0(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fIq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fD_(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.r,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fIj.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eL(w,B.au,A.w(A.a([new A.D(D.btI,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nw,w,w,w),1),A.aI(w,w,w,w,B.lu,w,w,w,new C.fIh(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cm,new A.D(B.fY,A.bw(A.n(14),A.fO(t,B.A,w,w,B.ce,B.dv,!1,w,!1,w,w),B.aq),w),w),new A.D(B.Mo,new A.a7(1/0,w,A.dn(B.p0,D.aRz,new C.fIi(t,this.c,d),A.bm(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.W),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.MA,B.d3,w,new A.b7(v,B.W),w)},
$S:48}
C.fIh.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fIi.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t0(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fIv.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eL(w,B.au,new A.D(D.btQ,A.w(A.a([A.B(A.a([D.bzb,A.aI(w,w,w,w,B.lu,w,w,w,new C.fIt(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.N,new A.eH(A.bw(A.n(14),A.p(w,A.b3(w,w,w,new C.ba3(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.ac,new A.a7(1/0,w,A.dn(B.p0,D.aRz,new C.fIu(t,s,d),A.bm(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.n(14),B.W),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d3,w,new A.b7(v,B.W),w)},
$S:48}
C.fIt.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fIu.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.aj$.x.h(0,t.a)
n=n==null?null:n.gba()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m_(2.5),$async$$0)
case 4:w=3
return A.b(e.hu(B.h0),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.eU(B.dC.gaP(s))
w=5
return A.b(A.t0(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.r,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fr8.prototype={
$1(d){return d.a===this.a},
$S:243}
C.dG3.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dFP.prototype={
bjV(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e_:B.c
s=u.a
w=2
return A.b(A.bQ(t,null,new C.dFS(s,q,e),p,!0,!0,!1,B.IF,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dFT(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bjV(d,e)},
$S:1921}
C.dFS.prototype={
$1(d){var w,v=null,u=this.c===B.we,t=u?D.dfB:D.dbt
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aO:B.au,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bl(!0,new A.D(K.aib,A.w(A.a([u,B.av,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.iw(!0,v,v,B.y,D.eX4,new C.dFR(this.a,w,t,d),t.length,v,B.dT,B.ah,!0)],x.p),B.ai,v,B.e,B.Q,0,B.p),v),!0,!1,B.ae,!0,!0)},
$S:25}
C.dFR.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cN.j(0.14)
else w=t.b.a.d.a?B.M:B.aO
v=A.n(14)
if(q)u=B.cN
else u=(t.b.a.d.a?B.bs:B.bm).j(0.16)
u=A.I(u,B.q,q?1.6:1)
return A.aK(!1,p,!0,A.p(B.A,C.aXV(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dFQ(t.d,r),s,s,s,s,s,s,s)},
$S:196}
C.dFQ.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dFT.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dFN.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:97}
C.dFO.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.ct,e,v)
return new A.d_(e,!1,A.iq(B.A,A.au(A.aF(!1,B.a1,!0,v,new A.dY(new C.dFM(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ag),v,v,v),v,new A.bf(t,new A.bp(0.96,1,u),u.k("bf<bJ.T>"))),v)},
$S:32}
C.dFM.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.bW,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e_:B.c,f=A.n(14),e=A.I((h?B.bs:B.bm).j(0.16),B.q,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.au,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.B(A.a([w,A.aK(!1,v,!0,new A.D(B.ev,A.X(B.cy,i.a.d.a?B.bs:B.bm,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dFx(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aO:B.au,k,k,k,k,k,k,k,k,14,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aS7("Name")
r=l.a
q=r.d==null?k:new C.dFy(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bl:B.lQ
n=A.I(B.cN.j(0.35),B.q,1)
m=r.d
t=A.aM(k,B.U,h,k,!0,B.r,k,A.aN(),w,k,k,k,k,k,2,s.bbm(new A.D(B.fB,A.aK(!1,p,!0,A.p(B.A,C.aXV(m==null?"\ud83d\udc64":A.fxd(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a5),k,34,k,B.cp,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.kJ,k,B.a7O,k,k)
v=A.a([v,B.ac,t,B.N,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aSL("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dFz(r,a0),r.d===B.we),1),B.ab,A.E(i.aSL("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dFE(r,a0),r.d===B.a4I),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.N,new A.bI(B.a3,k,k,A.hn(D.bOL,D.fB1,new C.dFF(r,l.e,a0),A.fx(k,k,k,k,k,k,k,k,k,k,k,B.cN,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cc)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aO:B.au,k,k,k,k,k,k,k,k,14,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.um(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.U,!1,k,!0,B.r,k,A.aN(),l.f,k,k,k,k,k,2,i.aS8("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.aj,k,k,s,k,k,B.dW,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.M:B.aO
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.I((t?B.bs:B.bm).j(0.22),B.q,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,B.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wN(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(k,A.B(A.a([A.E(A.w(A.a([t,B.bz,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.au,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bLA],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dFG(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ag))
if(!h)B.d.v(v,A.a([B.N,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aO:B.au,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.U,!1,k,!0,B.r,k,A.aN(),l.r,k,k,k,k,k,2,i.aS7("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.aj,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.aa,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a4,k,B.an,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.au,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bm,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b_H(r.b.length!==0,B.mv,new C.dFH(r,i,a0),new C.dFI(r,a0),"Upload from gallery","ID photo"))
v.push(i.b_H(r.c.length!==0,D.bF_,new C.dFJ(r,i,d,a0),new C.dFK(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Ah.a7c("Signature (optional)",t,new C.dFL(a0),new C.dFA(a0,t),new C.dFB(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bs:B.bm
s=(i?B.bs:B.bm).j(0.28)
s=A.E(A.dT(E.aRs,new C.dFC(d),A.dg(k,k,k,k,k,k,k,k,k,t,k,k,B.tH,k,new A.b7(A.n(10),B.W),new A.az(s,1,B.q,-1),k,k,k,k)),1)
t=A.bm(B.cN,k,k,k,B.c,k,B.tH,k,new A.b7(A.n(10),B.W),k,k,k)
v.push(A.B(A.a([s,B.ab,A.E(A.bG(A.d(h?"Save":"Update",k,k,k,k,k,k,B.uP,k,k,k),new C.dFD(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.cc(A.w(v,B.ai,k,B.e,B.Q,0,B.p),B.r,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aX(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.vA,B.jn,k,k,360)},
$S:167}
C.dFx.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dFy.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dFz.prototype={
$0(){return this.b.$1(new C.dFw(this.a))},
$S:0}
C.dFw.prototype={
$0(){var w=this.a
w.d=B.we
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dFE.prototype={
$0(){return this.b.$1(new C.dFv(this.a))},
$S:0}
C.dFv.prototype={
$0(){var w=this.a
w.d=B.a4I
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dFF.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dFG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wR(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dFu(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFu.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcj(),w.gcf(),w.gcv(),0,0,0,0,0)},
$S:0}
C.dFH.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Pl(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dFt(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFt.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dFI.prototype={
$0(){return this.b.$1(new C.dFs(this.a))},
$S:0}
C.dFs.prototype={
$0(){return this.a.b=""},
$S:0}
C.dFJ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e_:B.c
w=3
return A.b(A.bQ(q,null,new C.dFq(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Pl(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dFr(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFq.prototype={
$1(d){var w=null
return A.bl(!0,A.w(A.a([A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.anj,w,w,w,w,new C.dFk(d),!1,w,w,w,w,w,w,w,D.frr,w,w,w),A.dL(!1,w,w,w,!0,w,w,w,!0,w,B.anh,w,w,w,w,new C.dFl(d),!1,w,w,w,w,w,w,w,D.fyc,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ae,!0,!0)},
$S:25}
C.dFk.prototype={
$0(){A.a4(this.a,!1).O("camera")
return null},
$S:0}
C.dFl.prototype={
$0(){A.a4(this.a,!1).O("gallery")
return null},
$S:0}
C.dFr.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dFK.prototype={
$0(){return this.b.$1(new C.dFp(this.a))},
$S:0}
C.dFp.prototype={
$0(){return this.a.c=""},
$S:0}
C.dFL.prototype={
$0(){return this.a.$1(new C.dFo())},
$S:0}
C.dFo.prototype={
$0(){},
$S:0}
C.dFA.prototype={
$0(){return this.a.$1(new C.dFn(this.b))},
$S:0}
C.dFn.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dFB.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ahk(u.a,null,null,new C.dFm(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dFm.prototype={
$4(d,e,f,g){this.a.$1(new C.dFj(this.b,d))},
$S:393}
C.dFj.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dFC.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dFD.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.f16)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eZ0)
return}A.a4(w.c,!1).O(!0)},
$S:0}
C.dG6.prototype={
$3(d,e,f){return B.bI},
$C:"$3",
$R:3,
$S:97}
C.dG7.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e_:B.c,n=A.n(14),m=A.I((p?B.bs:B.bm).j(0.16),B.q,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aO:B.au,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.AN(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bm,r,r,r,r,r,r,r,r,13,r,r,B.a6,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.z_(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.z_(r).length>0?B.bx:B.cN,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bm
t=(q?B.bs:B.bm).j(0.28)
s=x.p
return new A.d_(e,!1,A.au(A.aF(!1,B.a1,!0,r,A.p(r,A.w(A.a([p,B.N,v,u,B.aB,A.B(A.a([A.E(A.dT(B.nx,new C.dG4(d),A.dg(r,r,r,r,r,r,r,r,r,w,r,r,B.jE,r,new A.b7(A.n(10),B.W),new A.az(t,1,B.q,-1),r,r,r,r)),1),B.ab,A.E(A.bG(D.fyB,new C.dG5(d),A.bm(B.cN,r,r,r,B.c,r,B.jE,r,new A.b7(A.n(10),B.W),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ai,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.Bk,E.YZ,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ag),r,r,r),r)},
$S:32}
C.dG4.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dG5.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dG0.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dG1(r),p=r.a.d.a,o=p?B.e_:B.c,n=A.n(14),m=A.I((p?B.bs:B.bm).j(0.14),B.q,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aO:B.au,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.AN(l.c),s,s,s,s,s,s,D.fdn,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iB((r.a.d.a?B.bs:B.bm).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a_S,"View receipt",new C.dFU(r,d,l))
u=l.x!=null
t=u?B.rf:B.q2
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.btN,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dFV(r,d,l)),q.$3$icon$label$onTap(B.BA,"Edit",new C.dFW(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mv,"View / download ID",new C.dFX(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bEZ,"View / download selfie",new C.dFY(r,d,l)))
if(l.gaF9())p.push(q.$3$icon$label$onTap(A6.a0W,"View / download signature",new C.dFZ(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bx,B.ef,"Delete",new C.dG_(r,d,l)))
p.push(B.av)
return A.bl(!0,new A.D(B.vw,A.p(s,A.w(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ae,!0,!0)},
$S:25}
C.dG1.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aO:B.au
else w=d
return A.aK(!1,v,!0,new A.D(B.eR,A.B(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1922}
C.dFU.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fIn(w,this.c)},
$S:0}
C.dFV.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.S1(this.c)},
$S:0}
C.dFW.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.D2(this.c)},
$S:0}
C.dFX.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCs(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dFY.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bCs(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dFZ.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fIs(w,this.c)},
$S:0}
C.dG_.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.NZ(0,this.c)},
$S:0}
C.dG8.prototype={
$1(d){return d.x==null},
$S:243}
C.dG9.prototype={
$1(d){return d.x!=null},
$S:243}
C.dGa.prototype={
$2(d,e){return d+e.c},
$S:1923}
C.dGb.prototype={
$0(){return this.a.bz4()},
$S:0}
C.dG2.prototype={
$0(){return this.a.aeE(this.b)},
$S:0}
C.frM.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.frN.prototype={
$0(){return B.d.gH(D.a2b)},
$S:z+68}
C.d6d.prototype={
$0(){var w=this.a
return w.m(new C.d6b(w,this.b))},
$S:0}
C.d6b.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d6c.prototype={
$0(){},
$S:0}
C.d6e.prototype={
$0(){var w=this.a.gbY6()
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.fu0.prototype={
$1(d){return C.h4x(A.a2(d,x.N,x.z))},
$S:z+11}
C.fu1.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fu2.prototype={
$2(d,e){var w=A.c8(d.a,null),v=A.c8(e.a,null)
if(w!=null&&v!=null)return B.o.aM(w,v)
return d.d.aM(0,e.d)},
$S:z+26}
C.fH1.prototype={
$1(d){return d.ag()},
$S:z+21}
C.fPb.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fr_.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bN9.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1924}
C.fHA.prototype={
$1(d){var w=this
return new C.Z2(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d6T.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d6S(w,d))},
$S:z+66}
C.d6S.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6H.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.d6E.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d6f.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d6g.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d6I.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d6o.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.I,u=v?B.e_:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.au,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bK(!1,B.dh,w,w,!0,w,w,new C.d6m(d),w,w),A.bG(B.wD,new C.d6n(d),A.bm(B.mS,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.d6m.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.d6n.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.d6p.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d6F.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d6G.prototype={
$0(){return B.d.gH(D.yR)},
$S:z+12}
C.d6k.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyk(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.SB(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d6l.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6q.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.YB(v,u,J.ad(w.d),null)},
$S:z+64}
C.d6r.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6R.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.Yj(r.y,r.gyk(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d6P(r),s,s,s,s,s,s,!1,B.a7)
else{w=e-1
v=J.q(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b9s(v,e,w,u,t,r.gbPh(),C.hjP(r.y.Q),r.gyk(0),s)
w=t}return A.c7(q,new C.d6Q(r,e),new A.D(B.Z_,w,s))},
$S:1925}
C.d6Q.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd0(t).ay){t=this.b
u=x.cy.a(B.d.gd0(u.f.f)).guL(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dp()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fC(v*3.141592653589793*0.5)
return A.fu(B.a3,A.db(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d6P.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGi(B.pP,B.iJ)},
$S:0}
C.d6B.prototype={
$0(){var w=this.a
return w.m(new C.d6A(w))},
$S:0}
C.d6A.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d6C.prototype={
$0(){var w=this.a.c
w.toString
A.a4(w,!1).O(null)
return null},
$S:0}
C.d6h.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.jZ.j(0.5),r=x.p,q=A.a([D.fq4,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cm(p.d)?"Write this book":"Write a new book"
q.push(p.YM(d,B.e0,w,J.cm(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.YM(d,M.ald,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cu,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kr.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cu,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kr.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.YM(d,A0.aml,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.YM(d,B.q7,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.YM(d,B.q7,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eL(u,E.AN,A.bl(!0,new A.D(A5.xT,A.w(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.ae,!0,!0),u,u,u,D.aiA,B.d3,u,new A.b7(t,new A.az(s,1.4,B.q,-1)),u)},
$S:48}
C.d6D.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.d6u.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.Z4(v,J.cJ(w.d),w.r+1,null)},
$S:z+54}
C.d6v.prototype={
$1(d){var w=null
return A.oq(!1,A.ek(w,w,w,E.AN,new A.jI(this.a,new C.d6t(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:334}
C.d6t.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7u,B.oj,A.E(A.d(e,w,w,w,w,w,w,B.j9,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:737}
C.d6w.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d6x.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d6y.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6z.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.AW(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Rp(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d6s(s,t))
w=4
return A.b(s.l_(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6s.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d6K.prototype={
$1(d){var w=null
return A.oq(!1,A.ek(w,w,w,E.AN,new A.jI(this.a,new C.d6J(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:334}
C.d6J.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a7u,B.oj,A.E(A.d(e,w,w,w,w,w,w,B.j9,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:737}
C.d6L.prototype={
$0(){return this.a.a=!1},
$S:50}
C.d6M.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d6N.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d6O.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.AW(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.l_(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d6i.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bgV(B.pP,V.Mb)},
$S:0}
C.d6j.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aGi(B.pP,V.Mb)},
$S:0}
C.d8D.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d8E.prototype={
$1(d){var w=this.a
return w.m(new C.d8C(w))},
$S:8}
C.d8C.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d8F.prototype={
$1(d){var w=this.a
return w.m(new C.d8B(w))},
$S:8}
C.d8B.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d8G.prototype={
$1(d){var w=this.a
return w.m(new C.d8A(w))},
$S:8}
C.d8A.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d8H.prototype={
$0(){var w=this.a
return w.m(new C.d8z(w,this.b))},
$S:0}
C.d8z.prototype={
$0(){var w=this.b
this.a.d.saU(0,w)
return w},
$S:0}
C.d8I.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga1p()
A.a4(this.b,!1).O(new A.bnO(w,v))},
$S:0}
C.d77.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d76.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Z0(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d7b.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d7a.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b71(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hW,v,v,v)
return A.ek(A.a([A.bK(!1,B.dh,v,v,!0,v,v,new C.d78(d),v,v),A.bG(B.wD,new C.d79(d),A.bm(B.mS,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.AN,w,v,v,v,v,D.foW,v)},
$S:18}
C.d78.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.d79.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.d7c.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d7d.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u)r.push(new A.a7(s,t,w[u],t))
return A.cc(A.bZ(B.bC,r,B.br,18,14),B.r,t,B.y,t,D.buI,t,t,B.ah)},
$S:310}
C.d75.prototype={
$0(){return this.a.Q1(0,this.b)},
$S:0}
C.d74.prototype={
$0(){return this.a.Pw(0,this.b)},
$S:0}
C.cFM.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cFN.prototype={
$0(){return B.d.gH(D.yR)},
$S:z+12}
C.cFO.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bT(0,new A.D(d,A.c0(w,new A.o(w,w,A.I(this.a.j(f),B.q,g),v,w,w,B.n),B.be),w),0,0,0)},
$S:1927}
C.cZc.prototype={
$1(d){return this.a.m(new C.cZb(this.b,this.c))},
$S:8}
C.cZb.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cZB.prototype={
$1(d){return this.a.m(new C.cZo())},
$S:2}
C.cZo.prototype={
$0(){},
$S:0}
C.cZC.prototype={
$1(d){return this.a.m(new C.cZn())},
$S:2}
C.cZn.prototype={
$0(){},
$S:0}
C.cZD.prototype={
$0(){var w=this.a
return w.m(new C.cZm(w,this.b))},
$S:0}
C.cZm.prototype={
$0(){var w=this.a
return w.d=w.go4().FC(this.b.a)},
$S:0}
C.cZE.prototype={
$0(){var w=this.a
return w.m(new C.cZl(w,this.b))},
$S:0}
C.cZl.prototype={
$0(){var w=this.a
return w.d=w.go4().cGN(this.b)},
$S:0}
C.cZF.prototype={
$1(d){return this.a.m(new C.cZk())},
$S:2}
C.cZk.prototype={
$0(){},
$S:0}
C.cZG.prototype={
$0(){var w=this.a
return w.m(new C.cZj(w,this.b))},
$S:0}
C.cZj.prototype={
$0(){var w=this.a
return w.d=w.go4().cGS(this.b.a)},
$S:0}
C.cZH.prototype={
$1(d){var w=this.a
return w.m(new C.cZw(w,d))},
$S:7}
C.cZw.prototype={
$0(){var w=this.a
return w.d=w.go4().cHM(this.b)},
$S:0}
C.cZI.prototype={
$1(d){var w=this.a
return w.d=w.go4().aDn(d)},
$S:2}
C.cZJ.prototype={
$1(d){var w=this.a
return w.d=w.go4().cGV(d)},
$S:2}
C.cZL.prototype={
$1(d){var w=this.a
return w.d=w.go4().cHK(d)},
$S:2}
C.cZM.prototype={
$1(d){var w=this.a
return w.m(new C.cZv(w,d))},
$S:8}
C.cZv.prototype={
$0(){var w=this.a
return w.d=w.go4().cHB(this.b)},
$S:0}
C.cZN.prototype={
$0(){var w=this.a,v=w.go4(),u=B.a.i(w.gyk(0).a.a),t=B.a.i(w.gaAA().a.a)
u=v.bbD(B.a.i(w.gaqq().a.a),t,u)
A.a4(this.b,!1).O(u)
return null},
$S:0}
C.dT5.prototype={
$0(){var w=this.a
w.vR()
w.a.br()
w.a.pU()},
$S:0}
C.dT4.prototype={
$0(){var w=this.a
w.vR()
w.a.br()
w.a.pU()},
$S:0}
C.dT7.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cm(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dT8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dT9.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dT3.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dT6.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dTb.prototype={
$0(){this.a.Ou()
return null},
$S:0}
C.dTa.prototype={
$0(){return this.a.Er(this.b)},
$S:0}
C.dSw.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.dh,w,w,!0,w,w,new C.dSu(d),w,w),r=A.bm(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bG(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dSv(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.dSu.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dSv.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dSx.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cHg(this.b)},
$S:0}
C.dSr.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aSn(w.b,w.c,w.d)},
$S:9}
C.dS_.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dS0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSe.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Gs(t.a.c),$async$$0)
case 2:s=r.ri(q.dJ(e,new C.dSc(t)))
if(s!=null&&t.c!=null)t.m(new C.dSd(t,s))
t.a.br()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSc.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSd.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSf.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dSg.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dSq.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cI3(C.hjZ(w),w)},
$S:0}
C.dSo.prototype={
$1(d){return new A.dY(new C.dSn(this.a,this.b),null)},
$S:19}
C.dSn.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.e_:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.au,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aI(v,v,v,v,B.amY,v,v,v,p>0?new C.dSj(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.w(A.a([r,B.aP,A.B(A.a([o,A.E(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aO:B.au,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aI(v,v,v,v,B.anv,v,v,v,new C.dSk(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bK(!1,B.dh,v,v,!0,v,v,new C.dSl(d),v,v),A.bG(B.pn,new C.dSm(d),A.bm(B.bR,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:166}
C.dSj.prototype={
$0(){return this.b.$1(new C.dSi(this.a))},
$S:0}
C.dSi.prototype={
$0(){return--this.a.a},
$S:0}
C.dSk.prototype={
$0(){return this.b.$1(new C.dSh(this.a))},
$S:0}
C.dSh.prototype={
$0(){return++this.a.a},
$S:0}
C.dSl.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dSm.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dSp.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cHR(this.a.a)
w.r.a8(0)},
$S:0}
C.dRO.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.ahs(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hdC(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dRP.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aDk(w)},
$S:0}
C.dSz.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.acN(this.b,w,this.c,null)},
$S:z+24}
C.dSt.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e_:B.c,t=A.n(20),s=A.X(B.lr,B.aV,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.au,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.w(p,B.m,w,B.e,B.Q,0,B.p)
return A.ek(A.a([A.bG(D.fzO,new C.dSs(d),A.bm(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b7,w,u,v,w,s,w,new A.b7(t,B.W),r,w)},
$S:18}
C.dSs.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dRQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dRR.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dRS.prototype={
$1(d){return d.a},
$S:z+7}
C.dRT.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.L)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i1(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aDk(w)},
$S:0}
C.dRX.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.ahs(q)
w=A.T(q).k("a_<1>")
q=A.C(new A.a_(q,new C.dRV(r),w),w.k("J.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hdC(v.e,null,r,v.f,v.r,new C.dRW(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dRW.prototype={
$0(){return this.a.a9N(this.b)},
$S:0}
C.dRV.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dRY.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("M<1,i1>")
w=A.C(new A.M(w,new C.dRU(this.b),v),v.k("ak.E"))
u.d=t.aDk(w)},
$S:0}
C.dRU.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dSy.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dS9.prototype={
$1(d){return d.length!==0},
$S:3}
C.dSa.prototype={
$1(d){var w=this
return new A.dY(new C.dS8(w.a,w.b,w.c,w.d),null)},
$S:19}
C.dS8.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e_:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aO:B.au,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bm,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.M(o,new C.dS4(u,e,o),A.T(o).k("M<1,t>")))
p.push(B.N)
u=w.d
p.push(A.aM(v,B.U,!1,v,!0,B.r,v,A.aN(),u,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(12),B.dj),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.aj,v,v,v,v,v,B.m9,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a4,v,B.an,v,v,v,v))
p=A.w(p,B.ai,v,B.e,B.Q,0,B.p)
t=w.a
return A.ek(A.a([A.bK(!1,B.dh,v,v,!0,v,v,new C.dS5(d),v,v),A.bG(B.JB,new C.dS6(t,u,o,e),A.bm(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bG(D.fn1,new C.dS7(t,u,o,d),A.bm(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a7(360,v,p,v),v,v,v,v,r,v)},
$S:166}
C.dS4.prototype={
$1(d){var w=null
return A.dL(!1,B.ae,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aO:B.au,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.bSm,w,w,w,new C.dS3(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1928}
C.dS3.prototype={
$0(){return this.a.$1(new C.dS1(this.b,this.c))},
$S:0}
C.dS1.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dS5.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dS6.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dS2(w.c,u))
v.bP(0,B.c4)}},
$S:0}
C.dS2.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dS7.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a4(w.d,!1).O(!0)},
$S:0}
C.dSb.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cIv(this.b,D.tN,C.Gq(v,w.a.c))},
$S:0}
C.dSG.prototype={
$1(d){return d.as},
$S:z+1}
C.dSH.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iQ(this.b,w)},
$S:0}
C.dSI.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.i8g(v)
return w.VI(v==null?null:v.a)},
$S:0}
C.dSJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hLt(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcl(k)){k=A.aQ(1/0,e.a,e.b)
s=A.aQ(1/0,e.c,e.d)
l.cqh(new A.as(u,t),v.gbhN(),new A.as(k,s))}k=A.n(22)
s=this.b.a
r=s?D.cRk:D.cPH
q=A.I(s?B.dB:D.bcp,B.q,1)
p=A.n(22)
o=A.bT(0,A.b3(m,m,m,new C.bcP(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bw(p,new A.an(B.V,m,B.a9,B.r,A.a([o,A.bT(0,A.uv(new A.Q(n,n,n,n),new A.a7(u,t,new C.bdH(l.d,v,l.f,w,new C.dSC(l),l.gcad(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.buW(s,new C.dSD(l,e),new C.dSE(l,e),new C.dSF(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.o(m,m,q,k,m,new A.a8(B.b2,B.b6,B.x,r,m,m),B.n),m,m,m,R.ahI,m,m,m,m)},
$S:205}
C.dSC.prototype={
$1(d){var w=this.a
w.m(new C.dSA(w,d))},
$S:2}
C.dSA.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.dSD.prototype={
$0(){var w=this.b
return this.a.b9i(1.25,new A.as(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dSE.prototype={
$0(){var w=this.b
return this.a.b9i(0.8,new A.as(A.aQ(1/0,w.a,w.b),A.aQ(1/0,w.c,w.d)))},
$S:0}
C.dSF.prototype={
$0(){var w=this,v=w.b
return w.a.aSn(new A.as(A.aQ(1/0,v.a,v.b),A.aQ(1/0,v.c,v.d)),new A.as(w.c,w.d),w.e.gbhN())},
$S:0}
C.dSK.prototype={
$0(){var w=this.a
return w.m(new C.dSB(w))},
$S:0}
C.dSB.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dRZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fM(new A.fD(s.c)),$async$$0)
case 2:t.xM("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d7h.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bhl(u,C.ho9(v.c,u),new C.d7g(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d7g.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d7i.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bkx(d.d,d.c,u.f.q(0,d.a),new C.d7f(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d7f.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.frQ.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.T(v)
return A.ri(new A.cP(new A.a_(v,new C.frR(d),w.k("a_<1>")),new C.frS(),w.k("cP<1,m>")))},
$S:z+20}
C.frR.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.frS.prototype={
$1(d){return d.a},
$S:z+7}
C.frO.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.frP.prototype={
$1(d){return d.b},
$S:z+7}
C.frV.prototype={
$1(d){var w,v=d.e
if(this.a.ai(0,v))return v
v=this.b
w=A.T(v)
return A.ri(new A.cP(new A.a_(v,new C.frW(d),w.k("a_<1>")),new C.frX(),w.k("cP<1,m>")))},
$S:z+20}
C.frW.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.frX.prototype={
$1(d){return d.a},
$S:z+7}
C.frT.prototype={
$1(d){var w,v=A.eC([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.ai(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.frU.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d7k.prototype={
$0(){return this.a},
$S:z+32}
C.d7B.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.ai(0,d)},
$S:248}
C.d7t.prototype={
$2(d,e){var w=this.a.c7(0,d,new C.d7u()),v=J.a3(w)
if(!v.q(w,e))v.M(w,e)},
$S:115}
C.d7u.prototype={
$0(){return A.a([],x.s)},
$S:738}
C.d7s.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:283}
C.d7l.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d7r.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d7q.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.Cq:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.q(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.Cq:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1930}
C.d7m.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d7v.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.M(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.U:u)
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
t=J.aW(t==null?D.Cq:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.b4(w,new C.d7w(r)))w.push(r)}}B.d.bs(w,new C.d7x(a8))
B.d.aZ(w,new C.d7y())
q=C.hLs(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.L)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eCN],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gH(k)+B.d.gak(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bny(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1931}
C.d7w.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d7x.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.d7y.prototype={
$2(d,e){return B.o.aM(d.Q,e.Q)},
$S:z+19}
C.d7z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a3(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a6(v).k("bc<2>")).cM(0,0,B.pt)+88-w.gH(n).a}else u=0
for(w=J.a3(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:654}
C.d7A.prototype={
$1(d){return 16+d*156},
$S:252}
C.d7j.prototype={
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
t.n(0,d,new C.FJ(r,new A.x(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.FJ(s,new A.x(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.FJ(s,new A.x(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.K_(d,new A.x(e+t,w),s,s.length))}},
$S:187}
C.d7n.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aIm(new A.x(v.a,v.b+28),new A.x(w.a,w.b+28),!0,null))},
$S:115}
C.d7o.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d7p.prototype={
$2(d,e){return B.k.aM(d.a,e.a)},
$S:739}
C.d7C.prototype={
$2(d,e){return B.k.aM(d.a,e.a)},
$S:739}
C.d7D.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:402}
C.d7E.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:178}
C.d7F.prototype={
$1(d){return d>=0.5},
$S:124}
C.f8P.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.ho(A.aK(!1,v,!0,new A.a7(38,38,A.X(d,this.a.c?B.c:B.co,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1933}
C.eKz.prototype={
$1(d){var w=null,v=A.n(8),u=B.bR.j(0.12),t=A.n(8)
return new A.D(B.n9,A.aK(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.f98,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.MH,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eKy(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eKy.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dnp.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dno.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nu,B.L,w,w)
return A.ek(A.a([A.bK(!1,B.dh,w,w,!0,w,w,new C.dnm(d),w,w),A.bK(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.ml,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dnn(d),w,w)],x.p),B.b7,B.B9,w,u,D.bvY,w,D.bxV,new A.b7(v,B.W),w,w)},
$S:18}
C.dnm.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dnn.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dny.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dnz.prototype={
$1(d){var w=this.a
return w.m(new C.dnx(w,d))},
$S:z+37}
C.dnx.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dnA.prototype={
$1(d){var w=null
return A.qo(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dnD.prototype={
$1(d){var w=this.a
return w.m(new C.dnw(w,d))},
$S:33}
C.dnw.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dnC.prototype={
$1(d){var w=null
return A.qo(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dnE.prototype={
$1(d){var w=this.a
return w.m(new C.dnv(w,d))},
$S:33}
C.dnv.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dnF.prototype={
$0(){var w=this.a
return w.m(new C.dnu(w))},
$S:0}
C.dnu.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dnG.prototype={
$0(){var w=this.a
return w.m(new C.dnt(w))},
$S:0}
C.dnt.prototype={
$0(){return++this.a.at},
$S:0}
C.dnH.prototype={
$0(){var w=this.a
return w.m(new C.dns(w))},
$S:0}
C.dns.prototype={
$0(){return--this.a.ax},
$S:0}
C.dnI.prototype={
$0(){var w=this.a
return w.m(new C.dnr(w))},
$S:0}
C.dnr.prototype={
$0(){return++this.a.ax},
$S:0}
C.dnJ.prototype={
$1(d){var w=this.a
return w.m(new C.dnq(w,d))},
$S:8}
C.dnq.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dnB.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dnK.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.e_:B.c
v=A.n(12)
if(p)u=B.bR
else u=(q.c.a?B.e3:B.bO).j(0.85)
u=A.I(u,B.q,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bs:B.bm
t=A.X(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bs:B.bm
return A.E(A.aF(!1,B.a1,!0,r,A.aK(!1,o,!0,A.de(r,A.w(A.a([t,B.av,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bb,new A.o(w,r,u,v,r,r,B.n),B.eJ,r,r,r,B.jE,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dnL(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag),1)},
$S:z+39}
C.dnL.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dnU.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.c8H.prototype={
$2(d,e){return new A.bv(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:91}
C.c8O.prototype={
$1(d){return d.ag()},
$S:z+5}
C.c8P.prototype={
$2(d,e){var w=J.b6(e,new C.c8N(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bv(d,w,x.d2)},
$S:z+41}
C.c8N.prototype={
$1(d){return d.ag()},
$S:z+21}
C.c8J.prototype={
$1(d){return C.akj(A.a2(d,x.N,x.z))},
$S:z+8}
C.c8K.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c8L.prototype={
$1(d){return C.h4x(A.a2(d,x.N,x.z))},
$S:z+11}
C.c8M.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c8T.prototype={
$1(d){return new A.aFr(d.f.length,d.a,d.b)},
$S:z+43}
C.c8U.prototype={
$2(d,e){return B.a.aM(d.c,e.c)},
$S:564}
C.c8Q.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c8R.prototype={
$1(d){return d.cHt(C.Gq(d,this.a))},
$S:z+44}
C.dST.prototype={
$1(d){return C.u2(d,this.a.a.c)},
$S:z+2}
C.dSU.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dSY.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dSZ.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dSQ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZq(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yl("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.p7(r.c,r.e),$async$$0)
case 4:s.yl(p)
w=5
return A.b(s.Jx(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSR.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZq(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yl("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.p7(r.c,r.e),$async$$0)
case 4:s.yl(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSS.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.UX(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yl("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yl("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yl("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Jx(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yl(B.a.ef(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dSX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aZp(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yl("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a4(r,!1).cm(A.e9(new C.dSW(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.p7(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dSW.prototype={
$1(d){var w=this.b
return new C.ZZ(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dSV.prototype={
$1(d){return D.h7e},
$S:z+46}
C.dT0.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dT1.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dT_(w,d)
return new A.D(B.d9,new C.bdL(this.b,d.c,d.a,w,null),null)},
$S:1934}
C.dT_.prototype={
$0(){return this.a.Xq(this.b.b)},
$S:0}
C.dSL.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dSM.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dSN.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dSO.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dSP.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dT2.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.L)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cU(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a4(this.b,!1).O(s)
return}},
$S:197}
C.dFb.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dFc.prototype={
$0(){return B.d.gH(D.a3B)},
$S:z+48}
C.dFd.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.au(A.X(this.b.d,B.c.j(0.95),w,w,D.cXA,44),w,w,w),w,w,new C.bir(u,t,v,w),B.az)},
$S:70}
C.fI2.prototype={
$1(d){return A.oT(new C.fI1(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:131}
C.fI1.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e_:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rz,24)],x.V),o=r?B.e3:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.n(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bR.j(0.18)],x.O)
w=A.p(t,D.bMP,B.f,t,t,new A.o(t,t,t,A.n(12),t,new A.a8(B.a3,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aO:B.au,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.w(A.a([B.R,o,new A.D(E.aiF,A.B(A.a([w,B.bd,A.E(A.w(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bm,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.E(A.iw(!0,t,e,B.y,D.eXc,new C.fI0(this.b,s),20,B.aif,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kN,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:113}
C.fI0.prototype={
$2(d,e){var w=null,v=D.a3B[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.I(s?B.e3:B.bO,B.q,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.em,8)],x.V),p=A.n(15),o=A.E(new C.a5T(v.a,!0,w),1),n=s?B.jA:B.iZ,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aO:B.au,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aK(!1,u,!0,A.eB(A.bw(p,A.w(A.a([o,A.p(w,A.w(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bs:B.bm,w,w,w,w,w,w,w,w,10,w,w,B.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.kY,w,w,w)],l),B.ai,w,B.e,B.j,0,B.p),B.aq),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fI_(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ag)},
$S:78}
C.fI_.prototype={
$0(){A.a4(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cgn.prototype={
$0(){return this.a.afH(this.b)},
$S:0}
C.fHp.prototype={
$1(d){return D.h2x},
$S:z+74}
C.fOT.prototype={
$1(d){var w=this
return new C.a0J(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fHu.prototype={
$1(d){return new C.YD(this.a,null)},
$S:z+51}
C.fHt.prototype={
$1(d){return D.h3w},
$S:z+52}
C.cZZ.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d__.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cZY(w,d))},
$S:33}
C.cZY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d_0.prototype={
$1(d){return this.a.K7()},
$S:2}
C.d_1.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cZV.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cZW.prototype={
$1(d){return this.a.K7()},
$S:2}
C.cZX.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cxz.prototype={
$0(){},
$S:0}
C.cxF.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cxG.prototype={
$0(){return this.a.aNQ(-1)},
$S:0}
C.cxH.prototype={
$1(d){return this.a.m(new C.cxE())},
$S:2}
C.cxE.prototype={
$0(){},
$S:0}
C.cxI.prototype={
$0(){return this.a.aNQ(1)},
$S:0}
C.cxJ.prototype={
$1(d){return this.a.m(new C.cxD())},
$S:2}
C.cxD.prototype={
$0(){},
$S:0}
C.cxK.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.e3:B.bO
return A.ul(u,u,B.aZ,r,u,new C.cxC(t,d),B.Bl,s,w,u,new A.az(v,1,B.q,-1),B.cc)},
$S:1935}
C.cxC.prototype={
$1(d){var w=this.a
return w.m(new C.cxA(w,this.b))},
$S:8}
C.cxA.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cxL.prototype={
$1(d){return this.a.m(new C.cxB())},
$S:2}
C.cxB.prototype={
$0(){},
$S:0}
C.cxM.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.f89.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a4(this.b,!1).O(w)},
$S:2}
C.f8a.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.f8b.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a4(this.b,!1).O(w)},
$S:0}
C.f87.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbyd()
w=w.e
s=A.n(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bxU,new A.eH(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.buJ(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:70}
C.f88.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dy.au(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.aq(B.aV,B.bR,w)
s.toString
s=A.a([B.aZ,s,B.aV],x.O)
return A.aF(!1,B.a1,!0,p,A.aK(!1,v,!0,A.eB(D.ec1,r,new A.o(r,r,A.I(B.c.j(0.4),B.q,1.5),u,r,new A.a8(new A.dd(-1.2+t,-0.5),new A.dd(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ag)},
$S:135}
C.fG0.prototype={
$1(d){return A.u(d.h(0,1))+","},
$S:68}
C.eHJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eHA.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eHB.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eHH.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eHG(w,this.b),null)},
$S:19}
C.eHG.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e_:B.c,t=A.n(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.au,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eL(w,u,new A.D(B.aiy,A.w(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bm,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.hap(new C.eHD(r,e),r.a),B.aB,A.B(A.a([A.E(A.dT(B.dh,new C.eHE(d),w),1),B.at,A.E(A.bG(B.U6,new C.eHF(r,d),A.bm(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ai,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d3,w,new A.b7(t,B.W),w)},
$S:98}
C.eHD.prototype={
$1(d){return this.b.$1(new C.eHC(this.a,d))},
$S:33}
C.eHC.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eHE.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eHF.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.eHI.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.SF(this.b)},
$S:0}
C.eHv.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bbb(w)},
$S:0}
C.eHz.prototype={
$1(d){return this.bkn(d)},
bkn(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lc(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iQ(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eHy.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a_<1>")
w=A.C(new A.a_(w,new C.eHx(this.b),v),v.k("J.E"))
u.d=t.bbb(w)},
$S:0}
C.eHx.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eHK.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iQ(this.b,w)},
$S:0}
C.eHL.prototype={
$1(d){return this.a.bCk(d,this.b)},
$S:z+55}
C.eHw.prototype={
$0(){return this.a.a9M(this.b)},
$S:0}
C.fOJ.prototype={
$1(d){return new C.ad7(this.a,this.b,this.c,null)},
$S:z+56}
C.eHN.prototype={
$0(){return this.a.a_6(this.b)},
$S:0}
C.eHO.prototype={
$0(){return this.a.PY(this.b)},
$S:0}
C.eHP.prototype={
$0(){return this.a.Em(this.b)},
$S:0}
C.eHQ.prototype={
$0(){return this.a.a_7(this.b)},
$S:0}
C.eHM.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eHq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eHr.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eHs.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eHu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.q0(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eHt(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHt.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eIc.prototype={
$2(d,e){return d+e.gwW()},
$S:z+59}
C.eI8.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eI9.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eHU.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e_:B.c,s=A.n(24),r=A.p(v,D.bNg,B.f,v,v,new A.o(B.aw.j(u?0.18:0.08),v,A.I(B.aw.j(0.28),B.q,1),v,v,v,B.a5),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.au,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bm,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aO:B.au
u=u?B.e3:B.bO
w=x.p
return A.eL(v,t,new A.D(B.xX,A.w(A.a([r,B.aP,q,B.N,p,B.d7,A.B(A.a([A.E(A.dT(B.nx,new C.eHS(d),A.dg(v,v,v,v,v,v,v,v,v,o,v,v,B.f8,v,new A.b7(A.n(14),B.W),new A.az(u,1,B.q,-1),v,v,v,v)),1),B.at,A.E(A.bG(D.fDz,new C.eHT(d),A.bm(B.aw,v,v,v,v,v,B.f8,v,new A.b7(A.n(14),B.W),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d3,v,new A.b7(s,B.W),v)},
$S:48}
C.eHS.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eHT.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eI2.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e_:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fN,28)],x.V),g=k?D.d3k:B.a3_,f=x.p
g=A.p(m,A.w(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.n(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.eQU,B.av,new A.bI(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cv,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a8(B.ay,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.aiC,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b4l(B.b5,B.j3,new C.eI_(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b4l(B.cB,L.yy,new C.eI0(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bm,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.aw.j(k?0.14:0.06)
q=A.n(16)
p=A.I(B.aw.j(0.28),B.q,1)
o=A.p(m,D.bMD,B.f,m,m,new A.o(B.aw.j(0.12),m,m,A.n(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aO:B.au,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bm,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bl(!0,new A.D(B.vy,A.p(m,A.w(A.a([g,new A.D(B.aiz,A.w(A.a([w,B.R,u,B.bw,t,B.R,A.aF(!1,B.a1,!0,m,A.aK(!1,s,!0,A.p(m,A.B(A.a([o,B.bd,n,A.X(B.eA,k?B.bs:B.bm,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bE,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eI1(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ag)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ae,!0,!0)},
$S:25}
C.eI_.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vs("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eI0.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vs("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eI1.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.NM(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eHY.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e_:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eV,24)],x.V),k=o?B.e3:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.n(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bs:B.bm
u=A.bw(w,new A.a7(48,48,C.aPw(!0,A.n(12),48,N.Nh,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aO:B.au,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.AN(v.gwW())
s=x.p
r=this.a
return A.bl(!0,new A.D(B.vy,A.p(q,A.w(A.a([B.R,k,new A.D(D.aiw,A.B(A.a([u,B.bd,A.E(A.w(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bm,q,q,q,q,q,q,q,q,12,q,q,B.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.B_,r.cko(B.u7,B.aV,new C.eHW(d),p,"QR code or backup file","Transfer project"),r.b1k(!0,B.ef,B.aw,new C.eHX(d),p,"Remove from this device","Delete project"),B.R],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ae,!0,!0)},
$S:25}
C.eHW.prototype={
$0(){A.a4(this.a,!1).O("transfer")
return null},
$S:0}
C.eHX.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
C.eHZ.prototype={
$1(d){return this.bko(d)},
bko(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Lc(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vF(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eIf.prototype={
$0(){var w=this.a
w.a.br()
w.m(new C.eIe(w))},
$S:0}
C.eIe.prototype={
$0(){return this.a.r++},
$S:0}
C.eIg.prototype={
$0(){var w=this.a
return w.m(new C.eId(w))},
$S:0}
C.eId.prototype={
$0(){return this.a.r++},
$S:0}
C.eHR.prototype={
$0(){var w=this.a.c
w.toString
return A.iQ(w,null)},
$S:0}
C.eHV.prototype={
$0(){return this.a.cdI(this.b)},
$S:0}
C.eIb.prototype={
$0(){var w=this.a
return w.m(new C.eIa(w,this.b))},
$S:0}
C.eIa.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eI5.prototype={
$0(){return this.a.vs("scan")},
$S:0}
C.eI6.prototype={
$0(){return this.a.vs("file")},
$S:0}
C.eI7.prototype={
$1(d){return this.a.ckp(d,this.b)},
$S:z+60}
C.eI4.prototype={
$0(){return this.a.Eq(this.b)},
$S:0}
C.eI3.prototype={
$0(){return this.a.a_B(this.b,this.c)},
$S:0}
C.cx_.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cwZ.prototype={
$1(d){return d.ag()},
$S:z+62}
C.cwX.prototype={
$1(d){return C.hu_(A.a2(d,x.N,x.z))},
$S:z+63}
C.cwY.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fqQ.prototype={
$1(d){return d.y===D.kz},
$S:z+2}
C.fPj.prototype={
$1(d){return C.bAp(d,this.a)},
$S:z+2}
C.foL.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bNe.prototype={
$1(d){return!d.as},
$S:z+1}
C.bNd.prototype={
$1(d){return d.ag()},
$S:z+15}
C.bNa.prototype={
$1(d){return C.h4y(A.a2(d,x.N,x.z))},
$S:z+14}
C.bNb.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bNc.prototype={
$1(d){return J.k(d)},
$S:17}
C.ffK.prototype={
$2(d,e){return e.e.aM(0,d.e)},
$S:z+13}
C.fbB.prototype={
$1(d){return C.fVQ(A.a2(d,x.N,x.z))},
$S:z+67}
C.fbC.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.fbD.prototype={
$2(d,e){return e.e.aM(0,d.e)},
$S:z+13}
C.fHg.prototype={
$1(d){return J.k(d)},
$S:17}
C.fHh.prototype={
$1(d){return d.a},
$S:z+69}
C.fHi.prototype={
$1(d){return d.length!==0},
$S:3}
C.fHj.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+9}
C.fHk.prototype={
$1(d){return d.SF(null).ag()},
$S:z+70}
C.fPh.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.frj.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fu6.prototype={
$1(d){return C.akj(A.a2(d,x.N,x.z))},
$S:z+8}
C.fu7.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fu8.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fu9.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fua.prototype={
$1(d){return C.u2(d,this.a)},
$S:z+2}
C.fH3.prototype={
$1(d){return C.u2(d,this.a)},
$S:z+2}
C.fPc.prototype={
$1(d){return C.akj(A.a2(d,x.N,x.z))},
$S:z+8}
C.fPd.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fPe.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fr0.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fr1.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fPn.prototype={
$1(d){return!d.as},
$S:z+1}
C.fqv.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fqw.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fqx.prototype={
$2(d,e){return B.o.aM(d.Q,e.Q)},
$S:z+19}
C.fOU.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fuT.prototype={
$1(d){return d.Q},
$S:z+72}
C.fGX.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fu3.prototype={
$1(d){return C.akj(A.a2(d,x.N,x.z))},
$S:z+8}
C.fu4.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fu5.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fGS.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fc8.prototype={
$1(d){return d.length!==0},
$S:3}
C.fc9.prototype={
$1(d){return C.h4y(A.a2(d,x.N,x.z))},
$S:z+14}
C.fca.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fcb.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fcc.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcp.prototype={
$2(d,e){return d.eS(new C.fcq(e))},
$S:1936}
C.fcq.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.u(d))
return B.c6},
$S:1937}
C.fcm.prototype={
$1(d){return C.hQ4(d,this.a)},
$S:z+73}
C.fcn.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fco.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fgp.prototype={
$1(d){return d.a},
$S:z+49}
C.fgq.prototype={
$1(d){return d.length!==0},
$S:3}
C.fgr.prototype={
$2(d,e){return e.r.aM(0,d.r)},
$S:z+6}
C.fj6.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fo3.prototype={
$1(d){return C.hfY(d,C.Gq(d,this.a))},
$S:z+5}
C.fo4.prototype={
$1(d){return C.hfZ(d,C.Gq(d,this.a))},
$S:z+5};(function aliases(){var w=C.aKH.prototype
w.buv=w.t
w=C.aMJ.prototype
w.bwK=w.t
w=C.aMK.prototype
w.bwL=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aCi.prototype,"gchk","chl",25)
var s
w(s=C.azm.prototype,"gcaj","cak",42)
v(s,"gaM6","Nk",0)
v(s,"gcpD","AK",0)
v(s,"gbK3","O_",0)
v(s,"gcDH","ym",0)
v(s,"gcjm","a0i",0)
v(s,"gbFv","NI",0)
v(s,"gbKt","WS",0)
w(s,"gbPh","bPi",71)
v(s,"gbzS","zN",0)
v(C.azn.prototype,"gcDD","Fh",0)
v(s=C.aCR.prototype,"gafj","vG",0)
v(s,"gccY","a_s",0)
v(s,"gaQ8","HU",0)
v(s=C.aCO.prototype,"gczL","a2o",0)
v(s,"gafj","vG",0)
v(s,"gcnD","a0X",0)
v(s,"gcdV","a_G",0)
w(s,"gcad","cae",30)
v(s,"gbKl","HZ",0)
v(s,"gcAQ","cAR",3)
v(s,"gc0W","Yy",0)
w(s,"gc8J","c8K",23)
v(s,"gccI","ccJ",3)
v(s=C.aBh.prototype,"gc6A","Px",0)
v(s,"gc6C","c6D",3)
v(s,"gbH_","a9o",0)
v(s=C.aCQ.prototype,"gbNM","Xm",0)
v(s,"gbYd","Y0",0)
v(s,"gcu3","a1N",0)
v(s,"gcqc","a1o",0)
v(C.aCP.prototype,"gcpV","ah3",0)
v(C.as2.prototype,"gc8H","a_5",0)
v(C.ay7.prototype,"ga28","K7",3)
v(C.ay6.prototype,"ga28","K7",3)
v(C.awR.prototype,"ga28","K7",3)
v(s=C.aEh.prototype,"gb0J","Qs",0)
v(s,"gbyG","VC",0)
v(s,"gcdJ","cdK",3)
w(C.aEg.prototype,"gc9y","c9z",57)
u(C.aEi.prototype,"gaQ2",0,0,null,["$1","$0"],["HT","bIg"],58,0,0)
t(C,"hnh","hZT",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.anR,C.ui,C.ne,C.Hy,C.aek,C.JS,C.uj,C.K_,C.FJ,C.bdJ,C.aIm,C.ap7,C.d7G,C.lC,C.aSu,C.aSt,C.aQs,C.tR,C.r1,C.lk,C.i1,C.kD,C.aGl])
u(A.i_,[C.fyG,C.fyF,C.fyH,C.fHW,C.fmP,C.fmQ,C.fmV,C.fwp,C.fwo,C.fwn,C.c29,C.fIr,C.fIj,C.fIv,C.fr8,C.dFS,C.dFN,C.dFO,C.dFq,C.dFm,C.dG6,C.dG7,C.dG0,C.dG1,C.dG8,C.dG9,C.frM,C.fu0,C.fu1,C.fH1,C.fPb,C.fr_,C.fHA,C.d6T,C.d6f,C.d6o,C.d6F,C.d6k,C.d6q,C.d6h,C.d6u,C.d6v,C.d6t,C.d6K,C.d6J,C.d8E,C.d8F,C.d8G,C.d76,C.d7b,C.d7a,C.cFM,C.cFO,C.cZc,C.cZB,C.cZC,C.cZF,C.cZH,C.cZI,C.cZJ,C.cZL,C.cZM,C.dT6,C.dSw,C.dSr,C.dS_,C.dSc,C.dSf,C.dSo,C.dRO,C.dSz,C.dSt,C.dRQ,C.dRR,C.dRS,C.dRX,C.dRV,C.dRU,C.dS9,C.dSa,C.dS4,C.dSG,C.dSC,C.d7h,C.d7i,C.frQ,C.frR,C.frS,C.frO,C.frP,C.frV,C.frW,C.frX,C.frT,C.frU,C.d7B,C.d7r,C.d7m,C.d7w,C.d7x,C.d7A,C.d7o,C.d7D,C.d7E,C.d7F,C.f8P,C.eKz,C.dno,C.dny,C.dnz,C.dnA,C.dnD,C.dnC,C.dnE,C.dnJ,C.dnK,C.c8O,C.c8N,C.c8J,C.c8K,C.c8L,C.c8M,C.c8T,C.c8Q,C.c8R,C.dST,C.dSW,C.dSV,C.dT1,C.dT2,C.dFb,C.fI2,C.fHp,C.fOT,C.fHu,C.fHt,C.d__,C.d_0,C.cZW,C.cxH,C.cxJ,C.cxK,C.cxC,C.cxL,C.f89,C.fG0,C.eHH,C.eHD,C.eHz,C.eHx,C.eHL,C.fOJ,C.eHU,C.eI2,C.eHY,C.eHZ,C.eI7,C.cwZ,C.cwX,C.cwY,C.fqQ,C.fPj,C.foL,C.bNe,C.bNd,C.bNa,C.bNb,C.bNc,C.fbB,C.fbC,C.fHg,C.fHh,C.fHi,C.fHj,C.fHk,C.fPh,C.frj,C.fu6,C.fu7,C.fu9,C.fua,C.fH3,C.fPc,C.fPd,C.fPe,C.fr0,C.fr1,C.fPn,C.fqv,C.fqw,C.fOU,C.fuT,C.fGX,C.fu3,C.fu4,C.fGS,C.fc8,C.fc9,C.fca,C.fcb,C.fcc,C.fcq,C.fcm,C.fcn,C.fgp,C.fgq,C.fj6,C.fo3,C.fo4])
u(A.at,[C.aXW,C.akh,C.aTI,C.Yj,C.b9s,C.bdH,C.bhl,C.buW,C.bkx,C.acM,C.bhk,C.acL,C.bhj,C.aBi,C.aHo,C.acN,C.JO,C.bdI,C.ac3,C.bdG,C.bdL,C.aXU,C.as2,C.ad7])
u(A.mN,[C.ba3,C.bbf,C.bb6,C.aGg,C.bgq,C.bdK,C.bcP,C.bir,C.buJ])
u(A.ja,[C.fIo,C.fIp,C.fIq,C.fIh,C.fIi,C.fIt,C.fIu,C.dG3,C.dFQ,C.dFT,C.dFx,C.dFy,C.dFz,C.dFw,C.dFE,C.dFv,C.dFF,C.dFG,C.dFu,C.dFH,C.dFt,C.dFI,C.dFs,C.dFJ,C.dFk,C.dFl,C.dFr,C.dFK,C.dFp,C.dFL,C.dFo,C.dFA,C.dFn,C.dFB,C.dFj,C.dFC,C.dFD,C.dG4,C.dG5,C.dFU,C.dFV,C.dFW,C.dFX,C.dFY,C.dFZ,C.dG_,C.dGb,C.dG2,C.frN,C.d6d,C.d6b,C.d6c,C.d6e,C.d6S,C.d6H,C.d6E,C.d6g,C.d6I,C.d6m,C.d6n,C.d6p,C.d6G,C.d6l,C.d6r,C.d6P,C.d6B,C.d6A,C.d6C,C.d6D,C.d6w,C.d6y,C.d6z,C.d6s,C.d6L,C.d6O,C.d6i,C.d6j,C.d8D,C.d8C,C.d8B,C.d8A,C.d8H,C.d8z,C.d8I,C.d77,C.d78,C.d79,C.d7c,C.d75,C.d74,C.cFN,C.cZb,C.cZo,C.cZn,C.cZD,C.cZm,C.cZE,C.cZl,C.cZk,C.cZG,C.cZj,C.cZw,C.cZv,C.cZN,C.dT5,C.dT4,C.dT7,C.dT8,C.dT9,C.dT3,C.dTb,C.dTa,C.dSu,C.dSv,C.dSx,C.dS0,C.dSe,C.dSd,C.dSg,C.dSq,C.dSj,C.dSi,C.dSk,C.dSh,C.dSl,C.dSm,C.dSp,C.dRP,C.dSs,C.dRT,C.dRW,C.dRY,C.dSy,C.dS3,C.dS1,C.dS5,C.dS6,C.dS2,C.dS7,C.dSb,C.dSH,C.dSI,C.dSA,C.dSD,C.dSE,C.dSF,C.dSK,C.dSB,C.dRZ,C.d7g,C.d7f,C.d7k,C.d7u,C.d7l,C.eKy,C.dnp,C.dnm,C.dnn,C.dnx,C.dnw,C.dnv,C.dnF,C.dnu,C.dnG,C.dnt,C.dnH,C.dns,C.dnI,C.dnr,C.dnq,C.dnB,C.dnL,C.dnU,C.dSU,C.dSY,C.dSZ,C.dSQ,C.dSR,C.dSS,C.dSX,C.dT0,C.dT_,C.dSL,C.dSM,C.dSN,C.dSO,C.dSP,C.dFc,C.fI_,C.cgn,C.cZZ,C.cZY,C.d_1,C.cZV,C.cZX,C.cxz,C.cxF,C.cxG,C.cxE,C.cxI,C.cxD,C.cxA,C.cxB,C.cxM,C.f8a,C.f8b,C.eHJ,C.eHA,C.eHB,C.eHC,C.eHE,C.eHF,C.eHI,C.eHv,C.eHy,C.eHK,C.eHw,C.eHN,C.eHO,C.eHP,C.eHQ,C.eHM,C.eHq,C.eHr,C.eHs,C.eHu,C.eHt,C.eI8,C.eI9,C.eHS,C.eHT,C.eI_,C.eI0,C.eI1,C.eHW,C.eHX,C.eIf,C.eIe,C.eIg,C.eId,C.eHR,C.eHV,C.eIb,C.eIa,C.eI5,C.eI6,C.eI4,C.eI3])
u(A.ag,[C.ao2,C.SB,C.Z0,C.Z4,C.Z2,C.YB,C.apa,C.ap4,C.ZE,C.ap8,C.ZZ,C.a__,C.a5T,C.YD,C.YC,C.Ya,C.a0J,C.Fw,C.awK,C.as1,C.arW,C.as0,C.O0])
u(A.ah,[C.aCi,C.bdE,C.azm,C.bdZ,C.azn,C.bbd,C.aCR,C.aCO,C.aBh,C.aCQ,C.aCP,C.biK,C.aKH,C.ay7,C.ay6,C.awR,C.buM,C.aMJ,C.aMK,C.aEh,C.bk2,C.aEg,C.bws])
u(A.kj,[C.dFP,C.dFR,C.dFM,C.dGa,C.fu2,C.bN9,C.d6R,C.d6Q,C.d6x,C.d6M,C.d6N,C.d7d,C.dSn,C.dS8,C.dSJ,C.d7t,C.d7s,C.d7q,C.d7v,C.d7y,C.d7z,C.d7j,C.d7n,C.d7p,C.d7C,C.c8H,C.c8P,C.c8U,C.dFd,C.fI1,C.fI0,C.f87,C.f88,C.eHG,C.eIc,C.cx_,C.ffK,C.fbD,C.fu8,C.fqx,C.fu5,C.fcp,C.fco,C.fgr])
t(C.bis,C.aKH)
u(A.mc,[C.ab8,C.aJ3,C.Hz,C.aki,C.cx0,C.cx1])
t(C.buK,C.aMJ)
t(C.buL,C.aMK)
t(C.aEi,C.bws)
t(C.b7X,A.b7L)
t(C.buN,A.a5y)
t(C.b7W,C.buN)
w(C.aKH,A.eS)
w(C.aMJ,A.cn)
w(C.aMK,A.cn)
v(C.bws,A.ew)
v(C.buN,A.j3)})()
A.k_(b.typeUniverse,JSON.parse('{"aXW":{"at":[],"t":[]},"ba3":{"aC":[]},"ao2":{"ag":[],"t":[]},"aCi":{"ah":["ao2"]},"SB":{"ag":[],"t":[]},"akh":{"at":[],"t":[]},"aTI":{"at":[],"t":[]},"bdE":{"ah":["SB"]},"Z0":{"ag":[],"t":[]},"Z4":{"ag":[],"t":[]},"Z2":{"ag":[],"t":[]},"YB":{"ag":[],"t":[]},"azm":{"ah":["Z0"]},"bdZ":{"ah":["Z4"]},"azn":{"ah":["Z2"]},"Yj":{"at":[],"t":[]},"bbf":{"aC":[]},"bb6":{"aC":[]},"bbd":{"ah":["YB"]},"aGg":{"aC":[]},"bgq":{"aC":[]},"b9s":{"at":[],"t":[]},"apa":{"ag":[],"t":[]},"ap4":{"ag":[],"t":[]},"ZE":{"ag":[],"t":[]},"acN":{"at":[],"t":[]},"aCR":{"ah":["apa"]},"aCO":{"ah":["ap4"]},"bdH":{"at":[],"t":[]},"bdK":{"aC":[]},"bhl":{"at":[],"t":[]},"bcP":{"aC":[]},"buW":{"at":[],"t":[]},"bkx":{"at":[],"t":[]},"aBh":{"ah":["ZE"]},"acM":{"at":[],"t":[]},"bhk":{"at":[],"t":[]},"acL":{"at":[],"t":[]},"bhj":{"at":[],"t":[]},"aBi":{"at":[],"t":[]},"aHo":{"at":[],"t":[]},"JO":{"at":[],"t":[]},"ap8":{"ag":[],"t":[]},"ZZ":{"ag":[],"t":[]},"a__":{"ag":[],"t":[]},"aCQ":{"ah":["ap8"]},"bdI":{"at":[],"t":[]},"ac3":{"at":[],"t":[]},"bdG":{"at":[],"t":[]},"bdL":{"at":[],"t":[]},"aCP":{"ah":["ZZ"]},"biK":{"ah":["a__"]},"aXU":{"at":[],"t":[]},"a5T":{"ag":[],"t":[]},"bis":{"ah":["a5T"]},"bir":{"aC":[]},"as2":{"at":[],"t":[]},"YD":{"ag":[],"t":[]},"YC":{"ag":[],"t":[]},"Ya":{"ag":[],"t":[]},"a0J":{"ag":[],"t":[]},"ay7":{"ah":["YD"]},"ay6":{"ah":["YC"]},"awR":{"ah":["Ya"]},"buM":{"ah":["a0J"]},"Fw":{"ag":[],"t":[]},"awK":{"ag":[],"t":[]},"buK":{"ah":["Fw"]},"buL":{"ah":["awK"]},"buJ":{"aC":[]},"as1":{"ag":[],"t":[]},"aEh":{"ah":["as1"]},"ad7":{"at":[],"t":[]},"arW":{"ag":[],"t":[]},"as0":{"ag":[],"t":[]},"bk2":{"ah":["arW"]},"aEg":{"ah":["as0"]},"O0":{"ag":[],"t":[]},"aEi":{"ah":["O0"],"ew":[]},"b7W":{"j3":[],"ff":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.ax
return{e2:w("aQs"),Q:w("r1"),n:w("bt<m,m>"),c5:w("aSt"),dY:w("aSu"),d:w("eA<m?>"),e:w("Hy"),B:w("ne"),P:w("i1"),k:w("kD"),x:w("aA<~>"),f5:w("O<a2H>"),V:w("O<ac>"),t:w("O<r1>"),O:w("O<v>"),ac:w("O<eA<m?>>"),I:w("O<ne>"),u:w("O<i1>"),_:w("O<kD>"),cl:w("O<aA<ai<a5<m,@>>>>"),R:w("O<ng>"),cq:w("O<ai<+(K,K)>>"),ez:w("O<a5<m,aD>>"),gE:w("O<a5<m,m>>"),c7:w("O<a5<m,@>>"),fD:w("O<mt>"),bp:w("O<oj>"),g:w("O<x>"),v:w("O<hw>"),L:w("O<+(m,m)>"),G:w("O<+(K,K)>"),bF:w("O<+count,id,name(H,m,m)>"),A:w("O<cS>"),s:w("O<m>"),aS:w("O<iT>"),p:w("O<t>"),C:w("O<ff>"),D:w("O<lk>"),fp:w("O<JS>"),M:w("O<K_>"),gZ:w("O<aGl>"),Y:w("O<aek>"),E:w("O<aIm>"),F:w("O<K>"),dC:w("O<H>"),dS:w("O<aC?>"),d4:w("O<m?>"),J:w("cu<ah<ag>>"),b:w("ai<ne>"),do:w("ai<i1>"),r:w("ai<kD>"),U:w("ai<a5<m,@>>"),gk:w("ai<+(m,m)>"),bC:w("ai<+count,id,name(H,m,m)>"),h:w("ai<m>"),c:w("ai<lk>"),j:w("ai<@>"),fK:w("bv<m,m>"),d2:w("bv<m,ai<a5<m,@>>>"),a:w("a5<m,@>"),f:w("a5<@,@>"),gv:w("M<m,HA>"),w:w("iD"),g2:w("rn"),bV:w("anR"),fL:w("cp"),K:w("aD"),fz:w("+(m,m)"),ei:w("+scope,text(m,m)"),d9:w("+dx,hidden(K,ai<i1>)"),cs:w("+count,id,name(H,m,m)"),N:w("m"),e7:w("bp<K>"),gc:w("dI"),b4:w("cw<H>"),W:w("jI<m>"),l:w("t"),cM:w("ff"),i:w("lk"),cc:w("FJ"),bw:w("acL<m?>"),cy:w("K1"),q:w("n_"),y:w("R"),gR:w("K"),z:w("@"),S:w("H"),eK:w("ai<kD>?"),m:w("ap7?"),cT:w("x?"),h5:w("+(m,m)?"),eo:w("+code,qrPayload,usesRemaining(m,m,H)?"),X:w("+qrPayload,token,usesRemaining(m,m,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("q_?"),T:w("m?"),aD:w("dI?"),o:w("lk?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aZd=new A.bo(B.hE,B.bG,B.hE,B.bG)
D.aaM=new A.bo(B.hE,B.iv,B.hE,B.iv)
D.aZq=new A.bo(B.iw,B.bG,B.bG,B.bG)
D.aZu=new A.az(B.cN,1.4,B.q,-1)
D.aZE=new A.az(B.ad,1,B.q,-1)
D.b02=new A.aX(0,1/0,64,1/0)
D.b06=new A.aX(0,84,0,1/0)
D.ayg=w([B.lQ,B.qW,B.c],x.O)
D.bYe=new A.a8(B.ay,B.aC,B.x,D.ayg,null,null)
D.b0R=new A.o(null,null,null,null,null,D.bYe,B.n)
D.d2O=w([B.aV,B.bR],x.O)
D.c_k=new A.a8(B.b2,B.b6,B.x,D.d2O,null,null)
D.b1b=new A.o(null,null,null,null,null,D.c_k,B.n)
D.b7p=new A.fi(null,null,null,null,null,E.jZ,null,null,null,null)
D.ac6=new A.co(B.A,null,null,D.b7p,null)
D.kr=new A.v(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.f76=new A.G(!0,D.kr,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqj=new A.y("No books on the shelf yet.",null,D.f76,null,null,null,null,null,null,null,null,null)
D.ec2=new A.D(B.nY,D.fqj,null)
D.b5T=new A.co(B.A,null,null,D.ec2,null)
D.b6M=new A.co(B.A,null,null,Z.VZ,null)
D.b8T=new A.v(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b9l=new A.v(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.adh=new A.v(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.bc5=new A.v(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.bcp=new A.v(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.aeC=new A.v(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.bgs=new A.v(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bgR=new A.v(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.EV=new A.v(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.biu=new A.v(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bkY=new A.v(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.agc=new A.v(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.fkK=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bqK=new A.eA(null,D.fkK,B.f_,null,x.d)
D.ftt=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bqM=new A.eA(null,D.ftt,B.f_,null,x.d)
D.brj=new A.ba(38e5)
D.bs3=new A.ii(0,10,0,10)
D.bsc=new A.Q(0,1,0,0)
D.bsn=new A.ii(0,4,0,4)
D.bsF=new A.Q(10,10,14,10)
D.bsR=new A.ii(10,4,10,4)
D.bsZ=new A.ii(10,8,10,8)
D.bt_=new A.Q(10,8,8,8)
D.btq=new A.Q(12,6,12,2)
D.btI=new A.Q(14,10,6,6)
D.btJ=new A.Q(14,12,14,0)
D.btN=new A.Q(14,12,14,8)
D.btQ=new A.Q(14,12,8,14)
D.btU=new A.ii(14,14,14,14)
D.buy=new A.Q(16,2,16,10)
D.buI=new A.Q(16,6,16,30)
D.buK=new A.Q(16,6,16,8)
D.aiw=new A.Q(18,16,18,8)
D.bvk=new A.Q(18,20,18,22)
D.aiA=new A.Q(18,24,18,24)
D.bvq=new A.Q(18,30,18,30)
D.bvJ=new A.Q(20,10,12,20)
D.bvW=new A.Q(20,18,16,18)
D.bvY=new A.Q(20,18,20,6)
D.bwN=new A.Q(24,32,24,28)
D.bwO=new A.Q(24,36,24,32)
D.bwS=new A.Q(26,26,24,14)
D.bx6=new A.Q(2,4,2,8)
D.bxa=new A.Q(30,0,30,0)
D.bxl=new A.Q(38,22,22,22)
D.aiT=new A.Q(40,24,24,24)
D.bxn=new A.ii(40,40,40,40)
D.bxp=new A.Q(46,30,30,30)
D.aiW=new A.Q(4,0,0,8)
D.bxQ=new A.Q(56,40,40,40)
D.bxU=new A.Q(1.25,1.25,1.25,1.25)
D.bxV=new A.Q(60,0,60,0)
D.bxY=new A.Q(6,14,6,16)
D.by9=new A.ii(7,3,7,3)
D.byG=new A.Q(5,1.5,5,1.5)
D.byR=new A.Q(6,2.5,6,2.5)
D.fFx=new A.y("Signature",null,B.nw,null,null,null,null,null,null,null,null,null)
D.bzb=new A.bB(1,B.bg,D.fFx,null)
D.fCI=new A.y("Tell the AI what to fix",null,B.de,null,null,null,null,null,null,null,null,null)
D.bzZ=new A.bB(1,B.bg,D.fCI,null)
D.fen=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEE=new A.y("Worksheets",null,D.fen,null,null,null,null,null,null,null,null,null)
D.few=new A.G(!0,E.acR,null,null,null,null,13,B.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDx=new A.y("Track your project spending",null,D.few,null,null,null,null,null,null,null,null,null)
D.cVI=w([D.fEE,B.av,D.fDx],x.p)
D.bnV=new A.fl(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cVI,null)
D.bA4=new A.bB(1,B.bg,D.bnV,null)
D.f9I=new A.G(!0,E.jZ,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjX=new A.y("FAMILY LIBRARY",null,D.f9I,null,null,null,null,null,null,null,null,null)
D.bAm=new A.bB(1,B.bg,D.fjX,null)
D.MV=new C.Hy("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.a_8=new C.Hz(0,"male")
D.ajO=new C.Hz(1,"female")
D.y5=new C.Hz(2,"unknown")
D.tN=new C.aki(0,"owner")
D.MW=new C.aki(1,"editor")
D.kz=new C.aki(2,"viewer")
D.akD=new A.a1(61199,"MaterialIcons",!1)
D.bEZ=new A.a1(61504,"MaterialIcons",!1)
D.bF_=new A.a1(61505,"MaterialIcons",!1)
D.bF1=new A.a1(61587,"MaterialIcons",!1)
D.bF8=new A.a1(61890,"MaterialIcons",!1)
D.bG2=new A.a1(63034,"MaterialIcons",!0)
D.bGR=new A.a1(63429,"MaterialIcons",!1)
D.amR=new A.a1(984520,"MaterialIcons",!1)
D.bFy=new A.a1(62776,"MaterialIcons",!1)
D.bJ6=new A.ae(D.bFy,26,B.aZ,null,null,null)
D.bDX=new A.a1(57648,"MaterialIcons",!1)
D.bJo=new A.ae(D.bDX,14,B.c,null,null,null)
D.bJG=new A.ae(B.G1,17,null,null,null,null)
D.bKb=new A.ae(E.a01,null,null,null,null,null)
D.bKe=new A.ae(B.jp,18,E.jZ,null,null,null)
D.a_O=new A.a1(62044,"MaterialIcons",!1)
D.bKk=new A.ae(D.a_O,null,B.aV,null,null,null)
D.bL9=new A.ae(B.e0,16,null,null,null,null)
D.bLg=new A.ae(D.a_O,32,B.aV,null,null,null)
D.bLA=new A.ae(E.akE,18,B.cN,null,null,null)
D.bMD=new A.ae(B.Gb,22,B.aw,null,null,null)
D.bMP=new A.ae(B.e0,22,B.aZ,null,null,null)
D.bN0=new A.ae(Q.a_T,22,B.c,null,null,null)
D.bN6=new A.ae(B.tZ,52,B.c,null,null,null)
D.bNg=new A.ae(B.Gb,30,B.aw,null,null,null)
D.ans=new A.ae(B.u7,22,B.c,null,null,null)
D.bNI=new A.ae(B.e0,17,null,null,null,null)
D.bO1=new A.ae(B.vU,26,B.cN,null,null,null)
D.bOL=new A.ae(B.a0c,16,null,null,null,null)
D.bPw=new A.ae(B.tZ,24,B.c,null,null,null)
D.bPB=new A.ae(B.Nn,20,B.rr,null,null,null)
D.bPG=new A.ae(B.G_,null,B.bR,null,null,null)
D.bPN=new A.ae(B.jp,18,B.c,null,null,null)
D.bQq=new A.ae(B.cy,22,B.ad,null,null,null)
D.bRf=new A.ae(B.ef,16,B.ad,null,null,null)
D.bRr=new A.ae(D.a_O,20,B.aV,null,null,null)
D.anS=new A.ae(B.hA,20,null,null,null,null)
D.bRW=new A.ae(B.cy,18,D.kr,null,null,null)
D.bSd=new A.ae(B.yp,28,B.c,null,null,null)
D.bSm=new A.ae(B.Nd,null,B.h2,null,null,null)
D.bSG=new A.ae(B.yp,24,B.c,null,null,null)
D.bT6=new A.ae(B.tZ,null,B.aV,null,null,null)
D.bT7=new A.ae(B.jH,20,B.cN,null,null,null)
D.bTr=new A.ae(B.G1,16,null,null,null,null)
D.bUZ=new A.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eB,!0,null,null,null,null)
D.dae=w([B.bu,B.aV,B.fb,B.aZ],x.O)
D.bWE=new A.a8(B.ay,B.aC,B.x,D.dae,null,null)
D.bhn=new A.v(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bmV=new A.v(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cSz=w([D.bhn,D.bmV],x.O)
D.bWP=new A.a8(B.b2,B.b6,B.x,D.cSz,null,null)
D.d4E=w([B.f2,B.fx,B.fb],x.O)
D.bWU=new A.a8(B.ay,B.aC,B.x,D.d4E,null,null)
D.afd=new A.v(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b9m=new A.v(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cUx=w([D.afd,D.b9m],x.O)
D.bXr=new A.a8(B.b2,B.b6,B.x,D.cUx,null,null)
D.bcD=new A.v(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.axz=w([D.bcD,D.afd],x.O)
D.bXL=new A.a8(B.ay,B.aC,B.x,D.axz,null,null)
D.aec=new A.v(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.beV=new A.v(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.d3N=w([D.aec,D.beV],x.O)
D.bYp=new A.a8(B.a3,B.a8,B.x,D.d3N,null,null)
D.dgQ=w([B.bx,B.mX],x.O)
D.bYr=new A.a8(B.b2,B.b6,B.x,D.dgQ,null,null)
D.bhi=new A.v(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.dhH=w([D.bhi,D.kr,D.kr,P.Xi],x.O)
D.dk2=w([0,0.07,0.9,1],x.F)
D.bYX=new A.a8(B.a3,B.a8,B.x,D.dhH,D.dk2,null)
D.bZ6=new A.a8(B.ay,B.aC,B.x,B.QT,null,null)
D.dgp=w([B.aZ,B.aV,B.bR],x.O)
D.c_5=new A.a8(B.ay,B.aC,B.x,D.dgp,null,null)
D.ckH=w([B.bu,B.aZ,B.f2],x.O)
D.ckO=w([B.by,B.aF,B.je],x.O)
D.ckQ=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.bfY=new A.v(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cr0=w([D.bfY,E.aeV],x.O)
D.e7Q=new A.x(1,2)
D.eTm=new A.cS(B.aW,D.e7Q,3)
D.auD=w([D.eTm],x.A)
D.cyj=w([B.h4,B.c8,B.fa],x.O)
D.cB1=w([B.bK,B.bq,B.bl],x.O)
D.bAP=new C.ui("classic","Classic leather","Gold-edged brown leather",D.axz,E.jZ,E.jZ,"\u2766",B.L,!0,!1,!1,!1)
D.b8G=new A.v(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.blP=new A.v(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cXk=w([D.b8G,D.blP],x.O)
D.aeZ=new A.v(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bAK=new C.ui("ornate","Ornate gold","Double gold border and flourishes",D.cXk,D.aeZ,D.aeZ,"\u2726",B.L,!0,!0,!0,!1)
D.bce=new A.v(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bi6=new A.v(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cPv=w([D.bce,D.bi6],x.O)
D.bAJ=new C.ui("parchment","Parchment","Old paper with dark ink",D.cPv,D.EV,G.iD,"\u2767",B.L,!0,!1,!1,!0)
D.acy=new A.v(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bkd=new A.v(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.deJ=w([D.acy,D.bkd],x.O)
D.bfx=new A.v(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bjy=new A.v(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bAM=new C.ui("minimal","Clean paper","Plain and elegant, like a printed book",D.deJ,D.bfx,D.bjy,"",B.L,!0,!0,!1,!0)
D.bAO=new C.ui("midnight","Midnight","Deep blue with silver stars",M.axT,B.cr,B.bM,"\u2727",B.L,!0,!0,!1,!1)
D.bAI=new C.ui("emerald","Emerald library","Green cloth, title on the left",A_.av0,E.jZ,B.fT,"\u25c6",B.bh,!0,!1,!1,!1)
D.bkE=new A.v(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.dcU=w([B.es,D.bkE],x.O)
D.bgA=new A.v(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bhG=new A.v(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bAN=new C.ui("rose","Rose vintage","Burgundy with rose-gold lettering",D.dcU,D.bgA,D.bhG,"\u2740",B.L,!0,!1,!0,!1)
D.dhk=w([B.co,O.mY],x.O)
D.bAL=new C.ui("modern","Modern","Dark, bold, left-aligned",D.dhk,B.aR,B.c,"",B.bh,!1,!0,!1,!1)
D.a2b=w([D.bAP,D.bAK,D.bAJ,D.bAM,D.bAO,D.bAI,D.bAN,D.bAL],A.ax("O<ui>"))
D.cP2=w([B.bR,B.bi],x.O)
D.bh8=new A.v(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cPH=w([D.acy,D.bh8],x.O)
D.bca=new A.v(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cRk=w([D.bca,B.dc],x.O)
D.cSP=w([B.ba,B.iW,B.oD],x.O)
D.cTb=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b9i=new A.v(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.bec=new A.v(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.djZ=w([D.aec,D.b9i,D.bec],x.O)
D.bAQ=new C.uj("leather","Leather",D.djZ,"vintage")
D.d_n=w([B.d5,B.Le,A4.Ww],x.O)
D.bAX=new C.uj("midnight","Midnight",D.d_n,"starry")
D.cSQ=w([B.er,B.dV,B.lh],x.O)
D.bAW=new C.uj("forest","Forest",D.cSQ,"story")
D.dlX=w([B.ey,B.es,B.ku],x.O)
D.bAT=new C.uj("burgundy","Burgundy",D.dlX,"royal")
D.cAA=w([B.aF,B.oF,B.nE],x.O)
D.bAU=new C.uj("royal","Royal",D.cAA,"royal")
D.cV8=w([B.bq,B.co,O.mY],x.O)
D.bAR=new C.uj("charcoal","Charcoal",D.cV8,"geo")
D.dk6=w([B.c9,B.dN,B.xp],x.O)
D.bAV=new C.uj("sunset","Sunset",D.dk6,"sunset")
D.dkN=w([B.iW,B.EW,B.Wz],x.O)
D.bAS=new C.uj("ocean","Ocean",D.dkN,"band")
D.yR=w([D.bAQ,D.bAX,D.bAW,D.bAT,D.bAU,D.bAR,D.bAV,D.bAS],A.ax("O<uj>"))
D.cVz=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cWa=w([B.ak,B.aJ,B.M],x.O)
D.cXp=w([B.es,B.dV,B.d5,B.fU,B.xs,B.cN,B.k2,B.e2,B.d8],x.O)
D.cXq=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eTn=new A.cS(B.dq,B.dD,8)
D.cXA=w([D.eTn],x.A)
D.cYE=w([B.c5,B.dN,B.ks],x.O)
D.cZ7=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d_i=w([B.c5,B.he],x.O)
D.d1r=w([B.aT,B.vf,B.xe],x.O)
D.d2k=w([B.bL,B.cs,B.dr,B.aT],x.O)
D.d2P=w([B.i1,B.c9,B.tj],x.O)
D.d3k=w([B.f2,B.cN],x.O)
D.d3T=w([B.cY,B.fz,B.hv],x.O)
D.d43=w([B.aR,B.bi,B.d5],x.O)
D.d4B=w([B.ek,B.cS,B.dV],x.O)
D.d4U=w([B.dL,B.d5,B.Le],x.O)
D.d6c=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a36=w(["leather","linen","plain","stars","rays"],x.s)
D.bIN=new A.a1(985219,"MaterialIcons",!1)
D.bIl=new A.a1(983781,"MaterialIcons",!1)
D.axf=w([B.al2,B.i5,B.lX,B.i6,D.bIN,B.Gl,B.q1,D.bIl,M.amE,B.BS,B.q3,B.mw],A.ax("O<a1>"))
D.a3a=w(["double","single","corners","none"],x.s)
D.d8V=w([B.ds,B.bm,B.e2],x.O)
D.d97=w([],x.t)
D.Cq=w([],x.u)
D.dbt=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.ddP=w([B.aE,B.fz,B.fU],x.O)
D.dfm=w([B.bH,B.mT,B.Xu],x.O)
D.dfB=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dyM=new C.lC("construction","Construction","Jobsite & builds",B.yi)
D.dyT=new C.lC("house","Home Build","Houses & rooms",B.vP)
D.dyJ=new C.lC("grocery","Grocery","Store & pantry",B.a0K)
D.dyI=new C.lC("calculator","Calculations","Math & estimates",B.Nw)
D.dyR=new C.lC("lumber","Materials","Lumber & supplies",B.NM)
D.dyF=new C.lC("kitchen","Kitchen","Remodel & meals",Aa.alR)
D.bIj=new A.a1(983756,"MaterialIcons",!1)
D.dyK=new C.lC("landscape","Landscaping","Yard & garden",D.bIj)
D.dyE=new C.lC("plumbing","Plumbing","Pipes & water",B.qa)
D.dyU=new C.lC("electrical","Electrical","Wiring & power",B.hj)
D.dyC=new C.lC("store","Retail Shop","Daily business",B.l1)
D.dyD=new C.lC("paint_remodel","Paint & Remodel","Colors & walls",Ab.a0i)
D.bHN=new A.a1(983311,"MaterialIcons",!1)
D.dyQ=new C.lC("roofing","Roofing","Roofs & exteriors",D.bHN)
D.bIv=new A.a1(983986,"MaterialIcons",!1)
D.dyB=new C.lC("warehouse","Warehouse","Storage & stock",D.bIv)
D.dyO=new C.lC("vehicles","Vehicles","Fleet & transport",B.Gm)
D.bFA=new A.a1(62785,"MaterialIcons",!1)
D.dyH=new C.lC("farm","Farm","Crops & livestock",D.bFA)
D.dyG=new C.lC("restaurant","Restaurant","Food & catering",B.vX)
D.dyN=new C.lC("tools","Tools","Workshop gear",B.Gi)
D.dyS=new C.lC("wallet","Cash & Wallet","Quick spending",B.jH)
D.bGM=new A.a1(63395,"MaterialIcons",!1)
D.dyP=new C.lC("concrete","Concrete","Foundation work",D.bGM)
D.dyL=new C.lC("blueprint","Blueprint","Plans & design",Ag.al8)
D.a3B=w([D.dyM,D.dyT,D.dyJ,D.dyI,D.dyR,D.dyF,D.dyK,D.dyE,D.dyU,D.dyC,D.dyD,D.dyQ,D.dyB,D.dyO,D.dyH,D.dyG,D.dyN,D.dyS,D.dyP,D.dyL],A.ax("O<lC>"))
D.dg5=w([B.bs,B.bm],x.O)
D.dgR=w([B.ic,B.nL,B.dG],x.O)
D.a3L=w(["top","middle","bottom"],x.s)
D.djg=w([B.cn,B.bi,B.d5],x.O)
D.djT=w([B.bn,B.cS,B.dV],x.O)
D.dlS=w([B.bK,B.ak],x.O)
D.dlT=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.e5c={top:0,middle:1,bottom:2}
D.dp4=new A.bt(D.e5c,["Top","Middle","Bottom"],x.n)
D.e4R={double:0,single:1,corners:2,none:3}
D.dpa=new A.bt(D.e4R,["Double line","One line","Corners","None"],x.n)
D.e5V={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dqD=new A.bt(D.e5V,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dqP=new A.bt(B.hT,[],A.ax("bt<H,+(m,m)>"))
D.e55={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.CC=new A.bt(D.e55,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.ax("bt<m,H>"))
D.dtl=new F.MU(32,null)
D.dtm=new F.MU(40,null)
D.dtn=new F.MU(46,null)
D.aGx=new C.as0(null)
D.e8O=new A.x(8,14)
D.fqV=new A.y("Write a new book",null,B.hX,null,B.L,null,null,null,null,null,null,null)
D.ebu=new A.D(B.kW,D.fqV,null)
D.an3=new A.ae(B.hz,18,B.c,null,null,null)
D.fki=new A.y("Add",null,B.lD,null,null,null,null,null,null,null,null,null)
D.d2z=w([D.an3,B.qq,D.fki],x.p)
D.eR0=new A.ck(B.aN,B.e,B.Q,B.m,null,B.p,null,0,D.d2z,null)
D.ebQ=new A.D(B.nb,D.eR0,null)
D.ebR=new A.D(E.aho,Z.VZ,null)
D.fei=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnj=new A.y("New Project",null,D.fei,null,null,null,null,null,null,null,null,null)
D.d6y=w([D.an3,B.ab,D.fnj],x.p)
D.eR3=new A.ck(B.aN,B.e,B.Q,B.m,null,B.p,null,0,D.d6y,null)
D.ec1=new A.D(B.iK,D.eR3,null)
D.fpJ=new A.y("Choose your header",null,U.rN,null,null,null,null,null,null,null,null,null)
D.ecm=new A.D(B.hM,D.fpJ,null)
D.b7E=new A.fi(2.2,null,null,null,null,B.cN,null,null,null,null)
D.eWd=new A.a7(22,22,D.b7E,null)
D.b5P=new A.co(B.A,null,null,D.eWd,null)
D.ecr=new A.D(B.YE,D.b5P,null)
D.bu3=new A.Q(14,2,14,6)
D.fDg=new A.y("The top of your book. Tap a design to see it.",null,T.uO,null,null,null,null,null,null,null,null,null)
D.ecs=new A.D(D.bu3,D.fDg,null)
D.ee_=new A.iR(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.ee2=new A.iR(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aHK=new A.iR(1,0.9607843137254902,0.48627450980392156,0)
D.Ip=new A.iR(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zq=new A.iR(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.ee8=new A.iR(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.h6A=new C.bgq(null)
D.bp3=new A.ml(D.h6A,null,B.az,null,null)
D.aLn=new A.cL(0,0,0,0,null,null,D.bp3,null)
D.eCN=new A.z(-42,42)
D.eLI=new A.ct([0,0,1,1])
D.aMK=new A.a9(0,0,520,160)
D.fCP=new A.y("Let the AI write it from your tree",null,B.ki,null,B.L,null,null,null,null,null,null,null)
D.bBt=new A.dq(1,B.cm,D.fCP,null)
D.d_h=w([E.a1d,B.ab,D.bBt],x.p)
D.eQG=new A.ck(B.aN,B.e,B.Q,B.m,null,B.p,null,0,D.d_h,null)
D.fjY=new A.y("Save member",null,B.cj,null,null,null,null,null,null,null,null,null)
D.de9=w([D.anS,B.ab,D.fjY],x.p)
D.eQQ=new A.ck(B.aN,B.b7,B.j,B.m,null,B.p,null,0,D.de9,null)
D.bMU=new A.ae(B.hO,14,B.aZ,null,null,null)
D.f8k=new A.G(!0,B.aZ,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnJ=new A.y("Cashier",null,D.f8k,null,null,null,null,null,null,null,null,null)
D.d74=w([D.bMU,B.bp,D.fnJ],x.p)
D.eQT=new A.ck(B.aN,B.e,B.Q,B.m,null,B.p,null,0,D.d74,null)
D.fjZ=new A.y("Transfer & settings",null,B.de,null,null,null,null,null,null,null,null,null)
D.bzP=new A.bB(1,B.bg,D.fjZ,null)
D.cSj=w([D.ans,B.at,D.bzP],x.p)
D.eQU=new A.ck(B.aN,B.e,B.j,B.m,null,B.p,null,0,D.cSj,null)
D.eUV=new A.as(16,40)
D.eV_=new A.as(22,64)
D.eV6=new A.as(280,88)
D.eVU=new A.a7(30,null,null,null)
D.eX4=new A.hP(5,8,8,1,null)
D.eXc=new A.hP(2,12,12,1.05,null)
D.fnp=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eXV=new A.b1(D.fnp,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fnE=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aOR=new A.b1(D.fnE,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fvL=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eYo=new A.b1(D.fvL,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fG6=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eYt=new A.b1(D.fG6,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fpH=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eYA=new A.b1(D.fpH,null,null,null,null,null,null,null,null,null,null,null,null,B.fK,!1,null,null,null,B.r,null)
D.fDt=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aOV=new A.b1(D.fDt,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fkz=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ0=new A.b1(D.fkz,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fGQ=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eZL=new A.b1(D.fGQ,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fBL=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_9=new A.b1(D.fBL,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fGa=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f_c=new A.b1(D.fGa,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fxj=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_e=new A.b1(D.fxj,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.frv=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.f_f=new A.b1(D.frv,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.frw=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f0f=new A.b1(D.frw,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fnr=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.f0x=new A.b1(D.fnr,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fpl=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.f0R=new A.b1(D.fpl,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fwP=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.f16=new A.b1(D.fwP,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.fsj=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.f17=new A.b1(D.fsj,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.r,null)
D.f4g=new A.G(!0,D.kr,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4G=new A.G(!0,D.kr,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5j=new A.rJ(!0,B.rA,null,null,null,null,B.dt,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5B=new A.G(!0,D.kr,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6a=new A.G(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8_=new A.rJ(!0,B.Sg,null,null,null,null,B.dt,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.f79=new A.G(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7y=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f98=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9d=new A.G(!0,G.iD,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.far=new A.G(!0,B.M,null,null,null,null,13,B.a6,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb8=new A.G(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbQ=new A.G(!0,B.bR,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbU=new A.G(!0,B.bx,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcf=new A.G(!0,D.EV,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fco=new A.G(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdn=new A.G(!0,B.cN,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdR=new A.G(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feg=new A.G(!0,B.aZ,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffI=new A.G(!0,B.ak,null,null,null,null,11.5,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffQ=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aR8=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a8s=new A.G(!0,B.ak,null,null,null,null,12,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhv=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhU=new A.G(!0,G.iD,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi1=new A.G(!0,G.iD,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiP=new A.y("Themes",null,B.pg,null,null,null,null,null,null,null,null,null)
D.fjp=new A.y("Add Item",null,B.cj,null,null,null,null,null,null,null,null,null)
D.f8S=new A.G(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjO=new A.y("Debt receipt",null,D.f8S,null,B.L,null,null,null,null,null,null,null)
D.aR4=new A.G(!0,B.ak,null,null,null,null,11,B.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fk5=new A.y("Person who owes",null,D.aR4,null,null,null,null,null,null,null,null,null)
D.fl1=new A.y("Notes",null,B.a87,null,null,null,null,null,null,null,null,null)
D.flr=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.f7P=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flu=new A.y("Share",null,D.f7P,null,null,null,null,null,null,null,null,null)
D.fmp=new A.y("Move your family trees",null,D.aR8,null,null,null,null,null,null,null,null,null)
D.fn1=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fnD=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.foW=new A.y("Remove this book?",null,B.hq,null,null,null,null,null,null,null,null,null)
D.aRz=new A.y("Download",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fq4=new A.y("What should the AI do?",null,B.de,null,null,null,null,null,null,null,null,null)
D.frr=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fsy=new A.y("Ribbon bookmark",null,B.j9,null,null,null,null,null,null,null,null,null)
D.ffC=new A.G(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft0=new A.y("NGMY.ORG",null,D.ffC,null,B.L,null,null,null,null,null,null,null)
D.fug=new A.y("Scan family tree QR",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fc7=new A.G(!0,B.c,null,null,null,null,13,B.a6,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv0=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fc7,null,B.L,null,null,null,null,null,null,null)
D.fwd=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fwj=new A.y("Thumbnail",null,B.pg,null,null,null,null,null,null,null,null,null)
D.fwV=new A.y("Save the cover",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fxk=new A.y("Your photos",null,B.pg,null,null,null,null,null,null,null,null,null)
D.fxz=new A.y("Create Project",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fy6=new A.y("Design your cover",null,U.rN,null,null,null,null,null,null,null,null,null)
D.fyc=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fyf=new A.y("PICTURE",null,H.uS,null,null,null,null,null,null,null,null,null)
D.fyB=new A.y("Paid",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fyD=new A.y("You can undo it right after.",null,T.Jk,null,null,null,null,null,null,null,null,null)
D.fza=new A.y("Print",null,B.uP,null,null,null,null,null,null,null,null,null)
D.fzz=new A.y("Amount owed",null,D.aR4,null,null,null,null,null,null,null,null,null)
D.fzO=new A.y("Got it",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fAo=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fAr=new A.y("Add to budget",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fAT=new A.y("Debtor signature",null,B.a87,null,null,null,null,null,null,null,null,null)
D.fB1=new A.y("Change icon",null,E.aQk,null,null,null,null,null,null,null,null,null)
D.fCd=new A.y("Family tree QR",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fCG=new A.y("Download",null,B.uP,null,null,null,null,null,null,null,null,null)
D.fCK=new A.y("Change",null,B.pg,null,null,null,null,null,null,null,null,null)
D.fDz=new A.y("Clear all",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fDC=new A.y("WHAT SHOULD IT CHANGE?",null,H.uS,null,null,null,null,null,null,null,null,null)
D.fEa=new A.y("COLOUR",null,H.uS,null,null,null,null,null,null,null,null,null)
D.fEo=new A.y("Do it",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fEr=new A.y("Create Tree",null,B.cj,null,null,null,null,null,null,null,null,null)
D.fFr=new A.y("Create Family Tree",null,B.eX,null,null,null,null,null,null,null,null,null)
D.f3d=new A.G(!0,E.jZ,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFG=new A.y("Write the first page myself",null,D.f3d,null,null,null,null,null,null,null,null,null)
D.fGd=new A.y("Use this header",null,B.cA,null,null,null,null,null,null,null,null,null)
D.fGk=new A.y("Create Project",null,E.aQN,null,null,null,null,null,null,null,null,null)
D.h28=new C.ab8(1,"header")
D.a9q=new C.ab8(2,"projects")
D.h29=new C.ab8(3,"cashier")
D.a9r=new C.ab8(4,"familyTree")
D.heN=new C.cx0(0,"start")
D.heO=new C.cx1(0,"start")
D.h2x=new C.Ya(null)
D.h3w=new C.YC(null)
D.dqM=new A.bt(B.hT,[],A.ax("bt<m,FJ>"))
D.d9v=w([],x.E)
D.d9w=w([],x.M)
D.h42=new C.bdJ(D.dqM,D.d9v,D.d9w,0,0,null,null)
D.h7e=new C.a__(null)
D.aa8=new C.aJ3(0,"projects")
D.aWf=new C.aJ3(1,"cashier")
D.hct=new C.aJ3(2,"familyTree")})()};
(a=>{a["AQc9qc3k5Um9lvHITRN1Aug//7M="]=a.current})($__dart_deferred_initializers__);