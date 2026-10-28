((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A_,G,F,E,N,A0,A1,R,A2,A3,M,A4,I,A5,A6,S,T,U,A7,A8,V,A9,Aa,W,Ab,Ac,Ad,L,Ae,X,Y,H,O,C={
bAB(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bAB=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uZ(null,""),$async$bAB)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.S(y.j)
t=A.mT(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dl(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dr(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.R.ao(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qx(t,a1,B.hh,E.Eg),$async$bAB)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.Pq(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ab(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.S(l!=null&&A.K9(l)?y.l:y.i)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a0(r.a(j.h(a2,a7)),q,p):B.cz
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
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=F.a15(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAB,v)},
afr(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$afr=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uZ(null,""),$async$afr)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.S(y.j)
t=A.mT(b6)
s=x.S
r=A.d9(c1,0,A.dJ(4,"count",s),A.T(c1).c)
q=F.a0T(new A.J(r,new C.fpA(),r.$ti.k("J<aj.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fpz(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.R.ao(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$afr)
case 6:l=c5
k=F.Pq(l==null?"":l)
if(k==null)throw A.S("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.amD(s,D.dcP,r.b(k.h(0,"cover"))?A.a0(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.S("There is no page to change.")
h=A.U(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dl(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.R.ao(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$afr)
case 10:l=c5
k=l==null?null:F.Pq(l)
if(k==null)throw A.S(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d7(a8,d),a5=J.aV(a2.a),a2=a2.$ti,a7=new A.kR(a5,a2.k("kR<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gU(a5))
b0=J.a7(a9)
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
p=A.cC(new A.bc(h,s),new C.fpB(),s.k("G.E"),p)
p=F.a0T(A.oX(p,3,A.a2(p).k("G.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cy<1>")
b4=A.B(new A.cy(h,s),s.k("G.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a15(s,b9),$async$afr)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.amD(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$afr,v)},
hdk(d,e,f){return A.c9(null,B.w.j(0.65),!1,null,new C.fyH(e,f),d,null,!0,!0,x.g2)},
amD:function amD(d,e,f){this.a=d
this.b=e
this.c=f},
fpA:function fpA(){},
fpz:function fpz(d){this.a=d},
fpB:function fpB(){},
fyH:function fyH(d,e){this.a=d
this.b=e},
bys(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bys=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b8(b1,new C.ff8())){u=null
w=1
break}t=B.d.d8(b1,new C.ff9())
s=$.W()
r=new A.rL()
q=A.Gl(r,D.aJG)
p=A.L()
p.r=B.c.gp(0)
q.aX(D.aJG,p)
o=A.L()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.af
o.d=B.bO
o.e=B.fx
n=new C.ffe(t)
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
a3=new A.aP(s.r,B.aq,null,null,p)
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
a3=new A.aP(s.r,B.aq,null,null,p)
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
return A.b(r.q5().yL(520,160),$async$bys)
case 4:w=3
return A.b(b3.hj(B.fQ),$async$bys)
case 3:b0=b3
u=b0==null?null:J.fa(B.dD.gaP(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bys,v)},
fnf(d){return C.hRq(d)},
hRq(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$fnf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bcD()
n=d.x!=null&&d.yr(null).length===0
if(d.x!=null)t=n?D.yA:D.Hh
else t=d.gSt()?D.Hh:D.aEM
w=3
return A.b(C.bys(d.ax),$async$fnf)
case 3:s=f
p.a=null
if(s!=null)p.a=A.alm(s)
r=A.a3_(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aEM}else{p.c=C.wh(q,!0)
p.b=n?D.yA:D.Hh}r.a1s(A.fIB(new C.fnh(p,d,new C.fni(),t,n,o),null,D.bpU,B.vA))
u=r.jM(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fnf,v)},
ftU(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$ftU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fnf(d),$async$ftU)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.ap(q,0,40)
u=A3.FQ(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ftU,v)},
ff8:function ff8(){},
ff9:function ff9(){},
ffe:function ffe(d){this.a=d},
fni:function fni(){},
fnh:function fnh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fng:function fng(){},
fz8(d,e){var w=0,v=A.j(x.H)
var $async$fz8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,B.w.j(0.55),!0,null,new C.fzc(new A.cq(null,x.J),e),d,null,!0,!0,x.H),$async$fz8)
case 2:return A.h(null,v)}})
return A.i($async$fz8,v)},
bB3(d,e,f,g){return C.hYN(d,e,f,g)},
hYN(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bB3=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gam(e.split(",")):e
r=B.cB.aI(t)}catch(q){r=null}if(r==null||r.length===0){d.I(x.q).f.R(D.eJc)
w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.fz4(g,r,f),d,null,!0,!0,x.H),$async$bB3)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bB3,v)},
fzd(d,e){var w=0,v=A.j(x.H)
var $async$fzd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.c9(null,null,!0,null,new C.fzg(new A.cq(null,x.J),e),d,null,!0,!0,x.H),$async$fzd)
case 2:return A.h(null,v)}})
return A.i($async$fzd,v)},
aWA:function aWA(d,e){this.c=d
this.a=e},
bZN:function bZN(){},
b8B:function b8B(d,e){this.b=d
this.a=e},
fzc:function fzc(d,e){this.a=d
this.b=e},
fz9:function fz9(d){this.a=d},
fza:function fza(d,e,f){this.a=d
this.b=e
this.c=f},
fzb:function fzb(d,e){this.a=d
this.b=e},
fz4:function fz4(d,e,f){this.a=d
this.b=e
this.c=f},
fz2:function fz2(d){this.a=d},
fz3:function fz3(d,e,f){this.a=d
this.b=e
this.c=f},
fzg:function fzg(d,e){this.a=d
this.b=e},
fze:function fze(d){this.a=d},
fzf:function fzf(d,e,f){this.a=d
this.b=e
this.c=f},
fin(d,e){var w=0,v=A.j(x.y),u,t
var $async$fin=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0E(d),$async$fin)
case 3:t=g
J.nc(t,new C.fio(e))
u=A.ag4(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fin,v)},
fio:function fio(d){this.a=d},
amK:function amK(d,e,f){this.c=d
this.d=e
this.a=f},
aAY:function aAY(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dCj:function dCj(d,e){this.a=d
this.b=e},
dC4:function dC4(d,e){this.a=d
this.b=e},
dC7:function dC7(d,e,f){this.a=d
this.b=e
this.c=f},
dC6:function dC6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dC5:function dC5(d,e){this.a=d
this.b=e},
dC8:function dC8(d,e){this.a=d
this.b=e},
dC2:function dC2(){},
dC3:function dC3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dC1:function dC1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dBN:function dBN(d){this.a=d},
dBO:function dBO(d,e,f){this.a=d
this.b=e
this.c=f},
dBP:function dBP(d,e){this.a=d
this.b=e},
dBM:function dBM(d){this.a=d},
dBU:function dBU(d,e){this.a=d
this.b=e},
dBL:function dBL(d){this.a=d},
dBV:function dBV(d,e,f){this.a=d
this.b=e
this.c=f},
dBW:function dBW(d,e,f){this.a=d
this.b=e
this.c=f},
dBK:function dBK(d,e){this.a=d
this.b=e},
dBX:function dBX(d,e,f){this.a=d
this.b=e
this.c=f},
dBJ:function dBJ(d,e){this.a=d
this.b=e},
dBY:function dBY(d,e){this.a=d
this.b=e},
dBI:function dBI(d){this.a=d},
dBZ:function dBZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dBG:function dBG(){},
dBA:function dBA(d){this.a=d},
dBB:function dBB(d){this.a=d},
dBH:function dBH(d,e){this.a=d
this.b=e},
dC_:function dC_(d,e){this.a=d
this.b=e},
dBF:function dBF(d){this.a=d},
dC0:function dC0(d){this.a=d},
dBE:function dBE(){},
dBQ:function dBQ(d,e){this.a=d
this.b=e},
dBD:function dBD(d){this.a=d},
dBR:function dBR(d,e,f){this.a=d
this.b=e
this.c=f},
dBC:function dBC(d,e){this.a=d
this.b=e},
dBz:function dBz(d,e){this.a=d
this.b=e},
dBS:function dBS(d){this.a=d},
dBT:function dBT(d,e,f){this.a=d
this.b=e
this.c=f},
dCm:function dCm(){},
dCn:function dCn(d,e){this.a=d
this.b=e},
dCk:function dCk(d){this.a=d},
dCl:function dCl(d){this.a=d},
dCg:function dCg(d,e){this.a=d
this.b=e},
dCh:function dCh(d){this.a=d},
dC9:function dC9(d,e,f){this.a=d
this.b=e
this.c=f},
dCa:function dCa(d,e,f){this.a=d
this.b=e
this.c=f},
dCb:function dCb(d,e,f){this.a=d
this.b=e
this.c=f},
dCc:function dCc(d,e,f){this.a=d
this.b=e
this.c=f},
dCd:function dCd(d,e,f){this.a=d
this.b=e
this.c=f},
dCe:function dCe(d,e,f){this.a=d
this.b=e
this.c=f},
dCf:function dCf(d,e,f){this.a=d
this.b=e
this.c=f},
dCo:function dCo(){},
dCp:function dCp(){},
dCq:function dCq(){},
dCr:function dCr(d){this.a=d},
dCi:function dCi(d,e){this.a=d
this.b=e},
h9w(d){return B.d.dL(D.a08,new C.fiT(d),new C.fiU())},
tT:function tT(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fiT:function fiT(d){this.a=d},
fiU:function fiU(){},
aj5:function aj5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aSq:function aSq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RD:function RD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bc9:function bc9(){this.d=$
this.c=this.a=null},
d2c:function d2c(d,e){this.a=d
this.b=e},
d2a:function d2a(d,e){this.a=d
this.b=e},
d2b:function d2b(){},
d2d:function d2d(d,e){this.a=d
this.b=e},
fVv(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.mZ(t,w,v,u==null?new A.Q(Date.now(),0,!1):u)},
JV(d,e){return C.hQ3(d,e)},
hQ3(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$JV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$JV)
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
o=A.cC(o,new C.fkR(),o.$ti.k("G.E"),x.B)
n=A.a2(o).k("a1<G.E>")
o=A.B(new A.a1(o,new C.fkS(),n),n.k("G.E"))
B.d.b1(o,new C.fkT())
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
return A.i($async$JV,v)},
Ai(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Ai=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.ay(),$async$Ai)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fxN(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aq("String","ngmy_family_book_v1_"+s+"_"+e,B.R.ao(r,null)),$async$Ai)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ai,v)},
aOD(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aOD=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.JV(d,e),$async$aOD)
case 2:u=h
t=J.cD(u)
s=t.bf(u,new C.fFQ(f))
if(s===-1)t.cm(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Ai(d,e,u),$async$aOD)
case 3:return A.h(null,v)}})
return A.i($async$aOD,v)},
byT(d,e,f){var w=0,v=A.j(x.H),u
var $async$byT=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.JV(d,e),$async$byT)
case 2:u=h
J.nc(u,new C.fif(f))
w=3
return A.b(C.Ai(d,e,u),$async$byT)
case 3:return A.h(null,v)}})
return A.i($async$byT,v)},
bz7(d,e){return C.hQ2(d,e)},
hQ2(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bz7=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.ay(),$async$bz7)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Lx
w=1
break}p=B.R.aG(0,q,null)
if(x.f.b(p)){o=A.a0(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aN(o.h(0,"emblem"))
k=k==null?null:B.k.O(k)
if(k==null)k=0
if(D.BB.aj(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aN(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.t(D.a1D,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.t(D.a15,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.t(D.a10,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.t(D.cK4,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.GL(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Lx
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Lx
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bz7,v)},
Qu(d,e,f){return C.hYj(d,e,f)},
hYj(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Qu=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.ay(),$async$Qu)
case 7:r=h
w=8
return A.b(r.aq("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.R.ao(f.ad(),null)),$async$Qu)
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
return A.i($async$Qu,v)},
PZ(d,e){return C.hQ4(d,e)},
hQ4(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$PZ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.ay(),$async$PZ)
case 7:r=g
q=r.rI("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.JV(d,e),$async$PZ)
case 8:if(!j.cw(g)){n=B.a.i(d.toLowerCase())
m=J.lf(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$PZ)
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
return A.i($async$PZ,v)},
aeL(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aeL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PZ(d,e),$async$aeL)
case 3:s=g
r=J.a7(s)
if(r.gM(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gM(s):"main"
r.J(s,t)
w=5
return A.b(A.ay(),$async$aeL)
case 5:w=4
return A.b(g.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aeL)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aeL,v)},
a1i(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a1i=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.PZ(d,e),$async$a1i)
case 2:s=h
J.hH(s,f)
w=3
return A.b(A.ay(),$async$a1i)
case 3:u=h
w=4
return A.b(u.aq("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a1i)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1i)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a1i)
case 6:return A.h(null,v)}})
return A.i($async$a1i,v)},
mZ:function mZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fkR:function fkR(){},
fkS:function fkS(){},
fkT:function fkT(){},
fxN:function fxN(){},
fFQ:function fFQ(d){this.a=d},
fif:function fif(d){this.a=d},
GL:function GL(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bL3:function bL3(d){this.a=d},
hYC(d,e,f,g,h,i,j){return A.a4(d,!1).ci(A.eo(new C.fyl(j,i,f,e,h,g),!0,null,x.H))},
PV(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$PV=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PZ(h,g),$async$PV)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ab(k)>=6){d.I(x.q).f.R(D.aLI)
u=!1
w=1
break}w=4
return A.b(C.hdk(d,f,e),$async$PV)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aeL(h,g),$async$PV)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mZ(""+(q+n),l,B.a.i(m.b),new A.Q(Date.now(),0,!1)))}w=6
return A.b(C.Ai(h,r,p),$async$PV)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Qu(h,r,new C.GL("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$PV)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$PV,v)},
fyl:function fyl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Y5:function Y5(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ay_:function ay_(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d2S:function d2S(d){this.a=d},
d2R:function d2R(d,e){this.a=d
this.b=e},
d2G:function d2G(d,e){this.a=d
this.b=e},
d2D:function d2D(d,e){this.a=d
this.b=e},
d2e:function d2e(d){this.a=d},
d2f:function d2f(d,e){this.a=d
this.b=e},
d2H:function d2H(d){this.a=d},
d2n:function d2n(d){this.a=d},
d2l:function d2l(d){this.a=d},
d2m:function d2m(d){this.a=d},
d2o:function d2o(d){this.a=d},
d2E:function d2E(d){this.a=d},
d2F:function d2F(){},
d2j:function d2j(d){this.a=d},
d2k:function d2k(d,e){this.a=d
this.b=e},
d2p:function d2p(d){this.a=d},
d2q:function d2q(d,e){this.a=d
this.b=e},
d2Q:function d2Q(d){this.a=d},
d2P:function d2P(d,e){this.a=d
this.b=e},
d2O:function d2O(d){this.a=d},
d2A:function d2A(d){this.a=d},
d2z:function d2z(d){this.a=d},
d2B:function d2B(d){this.a=d},
d2g:function d2g(d,e){this.a=d
this.b=e},
d2C:function d2C(d,e){this.a=d
this.b=e},
d2t:function d2t(d){this.a=d},
d2u:function d2u(d){this.a=d},
d2s:function d2s(){},
d2v:function d2v(d){this.a=d},
d2w:function d2w(d){this.a=d},
d2x:function d2x(d,e){this.a=d
this.b=e},
d2y:function d2y(d,e,f){this.a=d
this.b=e
this.c=f},
d2r:function d2r(d,e){this.a=d
this.b=e},
d2J:function d2J(d){this.a=d},
d2I:function d2I(){},
d2K:function d2K(d){this.a=d},
d2L:function d2L(d){this.a=d},
d2M:function d2M(d){this.a=d},
d2N:function d2N(d,e){this.a=d
this.b=e},
d2h:function d2h(d){this.a=d},
d2i:function d2i(d){this.a=d},
Y9:function Y9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcu:function bcu(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d4C:function d4C(d){this.a=d},
d4D:function d4D(d){this.a=d},
d4B:function d4B(d){this.a=d},
d4E:function d4E(d){this.a=d},
d4A:function d4A(d){this.a=d},
d4F:function d4F(d){this.a=d},
d4z:function d4z(d){this.a=d},
d4G:function d4G(d,e){this.a=d
this.b=e},
d4y:function d4y(d,e){this.a=d
this.b=e},
d4H:function d4H(d,e){this.a=d
this.b=e},
Y7:function Y7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
adf:function adf(d,e,f){this.a=d
this.b=e
this.c=f},
ay0:function ay0(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d36:function d36(d,e){this.a=d
this.b=e},
d35:function d35(d,e){this.a=d
this.b=e},
d3a:function d3a(d){this.a=d},
d39:function d39(d,e){this.a=d
this.b=e},
d37:function d37(d){this.a=d},
d38:function d38(d){this.a=d},
d3b:function d3b(d){this.a=d},
d3c:function d3c(d){this.a=d},
d34:function d34(d,e){this.a=d
this.b=e},
d33:function d33(d,e){this.a=d
this.b=e},
J1:function J1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xo:function Xo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cCa:function cCa(d){this.a=d},
cCb:function cCb(){},
cCc:function cCc(d){this.a=d},
b9M:function b9M(d,e,f){this.b=d
this.c=e
this.a=f},
b9D:function b9D(d,e){this.b=d
this.a=e},
tU:function tU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XG:function XG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9K:function b9K(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cVC:function cVC(d,e,f){this.a=d
this.b=e
this.c=f},
cVB:function cVB(d,e){this.a=d
this.b=e},
cW0:function cW0(d){this.a=d},
cVO:function cVO(){},
cW1:function cW1(d){this.a=d},
cVN:function cVN(){},
cW2:function cW2(d,e){this.a=d
this.b=e},
cVM:function cVM(d,e){this.a=d
this.b=e},
cW3:function cW3(d,e){this.a=d
this.b=e},
cVL:function cVL(d,e){this.a=d
this.b=e},
cW4:function cW4(d){this.a=d},
cVK:function cVK(){},
cW5:function cW5(d,e){this.a=d
this.b=e},
cVJ:function cVJ(d,e){this.a=d
this.b=e},
cW6:function cW6(d){this.a=d},
cVW:function cVW(d,e){this.a=d
this.b=e},
cW7:function cW7(d){this.a=d},
cW8:function cW8(d){this.a=d},
cWa:function cWa(d){this.a=d},
cWb:function cWb(d){this.a=d},
cVV:function cVV(d,e){this.a=d
this.b=e},
cWc:function cWc(d,e){this.a=d
this.b=e},
aF0:function aF0(d){this.a=d},
beX:function beX(d){this.a=d},
b8_:function b8_(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hP2(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.agg(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bx(new A.Q(Date.now(),0,!1))
s=new C.fiX(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a1<1>"),q=q.k("cS<1,n>"),o=q.k("G.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.xc)m.push(l===D.Ya?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.jR(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jR(h,a2,a2)-A.jR(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cS(new A.a1(a4,new C.fiV(u,f),p),new C.fiW(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ap(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hP3(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.agg(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fj1(v,e)
q=new C.fj_(v)
p=A.U(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.K)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.K)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.K)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.aj(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.aj(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.d8(new A.bc(p,d),d.k("G.E"))
n=A.B(d,A.a2(d).k("cl.E"))
B.d.fe(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gah(e),k=new A.hc(l,new C.fj0(p,m));k.C();t=f){j=l.gU(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.aj(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hAR(d,e,f,g){var w,v,u=C.hP4(d,e)
if(u<=0||f.length<=u)return new A.acQ(!1,D.Bq,f)
if(g.t(0,e.a))return new A.acQ(!1,D.Bq,f)
w=A.T(f).c
v=A.d9(f,0,A.dJ(u,"count",x.S),w).dC(0)
return new A.acQ(!0,A.d9(f,u,null,w).dC(0),v)},
hAS(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.agg(d3),d2=d1.length
if(d2===0)return D.fy3
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.cf(0,t.a,new C.d3j(t))}s=new C.d3A(v)
d2=x.h
r=A.U(w,d2)
q=new C.d3s(r)
for(p=new A.ds(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d3r(r)
l=A.U(w,x.do)
for(p=new A.ds(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.ce(l.cf(0,k,new C.d3k()),o)}h=new C.d3q(s)
g=new C.d3p(l,r)
p=v.$ti.k("bc<2>")
o=p.k("a1<G.E>")
f=A.B(new A.a1(new A.bc(v,p),new C.d3l(h),o),o.k("G.E"))
e=f.length===0?new A.bc(v,p).gK(0):B.d.gK(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.K)(f),++u){t=f[u]
a0=g.$2(t.a,A.aZ(w))
if(a0>d){d=a0
e=t}}a1=A.aZ(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.gR
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.d3y(new C.d3u(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.ds(v,v.r,v.e),j=a2.gaiz(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.et([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.aj(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qU(J.dG(i==null?B.T:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.cc)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.d3i(a2,new C.d3z(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.K)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.ds(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cy<1>")
d2=A.B(new A.cy(b4,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.F_(o,new A.u(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.J9(c5.a,new A.u(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cy<1>")
d2=A.B(new A.cy(b6,d2),d2.k("G.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.E)
a3.bH(0,new C.d3m(c6,b4))
for(d2=new A.cI(a4,a4.$ti.k("cI<1,2>")).gah(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aV(c7.b);j.C();){i=j.gU(j)
if(b6.aj(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.u(d0,b4.h(0,i).b.b))}}for(j=B.d.gah(b5),i=new A.hc(j,new C.d3n(c8));i.C();)o.push(j.gU(0).b)
if(o.length===0)continue
B.d.b1(o,new C.d3o())
c6.push(new C.aH5(new A.u(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bce(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
h94(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cB(d)
return w==null?null:w.b[1]},
h3u(d,e,f,g,h,i,j,k,l,m,n){return new C.YJ(k,f,j,e,l,n,m,d,g,h,i,null)},
azZ(d,e,f,g,h,i,j){return new C.bfS(i,d,e,f,j,h,g,null)},
anQ:function anQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBy:function aBy(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dPG:function dPG(d){this.a=d},
dPF:function dPF(d){this.a=d},
dPI:function dPI(d,e){this.a=d
this.b=e},
dPJ:function dPJ(d,e){this.a=d
this.b=e},
dPK:function dPK(d){this.a=d},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPH:function dPH(d){this.a=d},
dPM:function dPM(d){this.a=d},
dPL:function dPL(d,e){this.a=d
this.b=e},
anK:function anK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBv:function aBv(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dP6:function dP6(d){this.a=d},
dP4:function dP4(d){this.a=d},
dP5:function dP5(d){this.a=d},
dP7:function dP7(d,e){this.a=d
this.b=e},
dP1:function dP1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOA:function dOA(d){this.a=d},
dOB:function dOB(d,e){this.a=d
this.b=e},
dOP:function dOP(d){this.a=d},
dON:function dON(d){this.a=d},
dOO:function dOO(d,e){this.a=d
this.b=e},
dOQ:function dOQ(d){this.a=d},
dOR:function dOR(d,e){this.a=d
this.b=e},
dP0:function dP0(d,e){this.a=d
this.b=e},
dOZ:function dOZ(d,e){this.a=d
this.b=e},
dOY:function dOY(d,e){this.a=d
this.b=e},
dOU:function dOU(d,e){this.a=d
this.b=e},
dOT:function dOT(d){this.a=d},
dOV:function dOV(d,e){this.a=d
this.b=e},
dOS:function dOS(d){this.a=d},
dOW:function dOW(d){this.a=d},
dOX:function dOX(d){this.a=d},
dP_:function dP_(d,e){this.a=d
this.b=e},
dOo:function dOo(d,e){this.a=d
this.b=e},
dOp:function dOp(d,e){this.a=d
this.b=e},
dP9:function dP9(d,e,f){this.a=d
this.b=e
this.c=f},
dP3:function dP3(d,e,f){this.a=d
this.b=e
this.c=f},
dP2:function dP2(d){this.a=d},
dOq:function dOq(d){this.a=d},
dOr:function dOr(d){this.a=d},
dOs:function dOs(){},
dOt:function dOt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOw:function dOw(d,e){this.a=d
this.b=e},
dOv:function dOv(d){this.a=d},
dOy:function dOy(d,e){this.a=d
this.b=e},
dOu:function dOu(d){this.a=d},
dP8:function dP8(d){this.a=d},
dOK:function dOK(){},
dOL:function dOL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOJ:function dOJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOF:function dOF(d,e,f){this.a=d
this.b=e
this.c=f},
dOE:function dOE(d,e,f){this.a=d
this.b=e
this.c=f},
dOC:function dOC(d,e){this.a=d
this.b=e},
dOG:function dOG(d){this.a=d},
dOH:function dOH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOD:function dOD(d,e){this.a=d
this.b=e},
dOI:function dOI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dOM:function dOM(d,e){this.a=d
this.b=e},
dPg:function dPg(){},
dPh:function dPh(d,e){this.a=d
this.b=e},
dPi:function dPi(d){this.a=d},
dPj:function dPj(d,e){this.a=d
this.b=e},
dPc:function dPc(d){this.a=d},
dPa:function dPa(d,e){this.a=d
this.b=e},
dPd:function dPd(d,e){this.a=d
this.b=e},
dPe:function dPe(d,e){this.a=d
this.b=e},
dPf:function dPf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dPk:function dPk(d){this.a=d},
dPb:function dPb(d){this.a=d},
dOz:function dOz(d){this.a=d},
bcc:function bcc(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d3g:function d3g(d){this.a=d},
d3f:function d3f(d,e){this.a=d
this.b=e},
d3h:function d3h(d){this.a=d},
d3e:function d3e(d,e){this.a=d
this.b=e},
fiX:function fiX(d,e){this.a=d
this.b=e},
fiY:function fiY(d){this.a=d},
fiZ:function fiZ(){},
fiV:function fiV(d,e){this.a=d
this.b=e},
fiW:function fiW(){},
fj1:function fj1(d,e){this.a=d
this.b=e},
fj2:function fj2(d){this.a=d},
fj3:function fj3(){},
fj_:function fj_(d){this.a=d},
fj0:function fj0(d,e){this.a=d
this.b=e},
J9:function J9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
F_:function F_(d,e){this.a=d
this.b=e},
bce:function bce(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d3j:function d3j(d){this.a=d},
d3A:function d3A(d){this.a=d},
d3s:function d3s(d){this.a=d},
d3t:function d3t(){},
d3r:function d3r(d){this.a=d},
d3k:function d3k(){},
d3q:function d3q(d){this.a=d},
d3p:function d3p(d,e){this.a=d
this.b=e},
d3l:function d3l(d){this.a=d},
d3u:function d3u(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d3v:function d3v(d){this.a=d},
d3w:function d3w(d){this.a=d},
d3x:function d3x(){},
d3y:function d3y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d3z:function d3z(){},
d3i:function d3i(d,e,f,g,h,i,j,k,l,m){var _=this
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
d3m:function d3m(d,e){this.a=d
this.b=e},
d3n:function d3n(d){this.a=d},
d3o:function d3o(){},
aH5:function aH5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bcf:function bcf(d,e){this.b=d
this.a=e},
d3B:function d3B(){},
d3C:function d3C(d){this.a=d},
d3D:function d3D(d){this.a=d},
d3E:function d3E(){},
bfT:function bfT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbk:function bbk(d,e){this.b=d
this.a=e},
bto:function bto(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
f1W:function f1W(d){this.a=d},
bja:function bja(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eEd:function eEd(d){this.a=d},
eEc:function eEc(d,e){this.a=d
this.b=e},
YJ:function YJ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
azX:function azX(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
djr:function djr(d,e){this.a=d
this.b=e},
djq:function djq(d){this.a=d},
djo:function djo(d){this.a=d},
djp:function djp(d){this.a=d},
djA:function djA(d){this.a=d},
djB:function djB(d){this.a=d},
djz:function djz(d,e){this.a=d
this.b=e},
djC:function djC(){},
djF:function djF(d){this.a=d},
djy:function djy(d,e){this.a=d
this.b=e},
djE:function djE(){},
djG:function djG(d){this.a=d},
djx:function djx(d,e){this.a=d
this.b=e},
djH:function djH(d){this.a=d},
djw:function djw(d){this.a=d},
djI:function djI(d){this.a=d},
djv:function djv(d){this.a=d},
djJ:function djJ(d){this.a=d},
dju:function dju(d){this.a=d},
djK:function djK(d){this.a=d},
djt:function djt(d){this.a=d},
djL:function djL(d){this.a=d},
djs:function djs(d,e){this.a=d
this.b=e},
djD:function djD(d){this.a=d},
abI:function abI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfS:function bfS(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
abH:function abH(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bfR:function bfR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
djM:function djM(d){this.a=d},
djN:function djN(d,e){this.a=d
this.b=e},
azY:function azY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aG8:function aG8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
abJ:function abJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
djW:function djW(d){this.a=d},
IY:function IY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fZn(d){var w=d.S,v=x.N
return w.iM(w,new C.c5v(),v,v)},
hsp(d){var w=d.bC
if(w>=0)return w
return 5},
fZp(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fZn(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
fZo(d,e){var w=C.fZp(d,e)
if(w!=null&&w.c9(new A.Q(Date.now(),0,!1)))return!0
return!1},
hsq(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a0(C.fZn(d),w,w)
u=C.fZp(d,e)
t=u!=null&&u.c9(new A.Q(Date.now(),0,!1))?u:new A.Q(Date.now(),0,!1)
v.n(0,s,t.bN(A.dA(30,0,0,0,0,0).a).a5().ac())
d.S=v},
aY_(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aY_=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.l5(t,B.H4),$async$aY_)
case 3:if(l){u=!0
w=1
break}u=A.kK(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.H4,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aY_,v)},
c5v:function c5v(){},
hsn(){var w,v=$.pb(),u=J.e0(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aD(32)]
return"FT"+B.d.fS(u)},
HD(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$HD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$HD)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_family_tree_backup_codes_v1",null,!1,B.bF),$async$HD)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.q(r,"codes")
if(x.f.b(q)){o=A.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a8(m)
$.am.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$HD,v)},
a5R(d){return C.hso(d)},
hso(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a5R=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$a5R)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hz("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$a5R)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a8(p)
$.am.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a5R,v)},
c5u(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c5u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.HD(),$async$c5u)
case 3:t=m.jo(f),t=t.gah(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gU(t)
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
return A.i($async$c5u,v)},
Mu(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Mu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c5u(d),$async$Mu)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.HD(),$async$Mu)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dV(A.a0(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.Q(Date.now(),0,!1).a5().ac())
r.n(s,t,o)
w=9
return A.b(C.a5R(s),$async$Mu)
case 9:case 8:u=t
w=1
break
case 5:n=C.hsn()
w=10
return A.b(C.HD(),$async$Mu)
case 10:s=f
J.aG(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a5().ac(),"updatedAt",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=11
return A.b(C.a5R(s),$async$Mu)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mu,v)},
aXZ(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aXZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.HD(),$async$aXZ)
case 3:t=f
for(s=J.dg(t),r=s.gdK(t),r=r.dC(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a5R(t),$async$aXZ)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aXZ,v)},
a5S(d,e,f){var w=0,v=A.j(x.H),u
var $async$a5S=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.anP(d,e),$async$a5S)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Mu(d),$async$a5S)
case 7:w=4
break
case 5:w=8
return A.b(C.aXZ(d),$async$a5S)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a5S,v)},
anJ(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$anJ=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.anP(f,e),$async$anJ)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c0(),$async$anJ)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.HD(),$async$anJ)
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
return A.i($async$anJ,v)},
aXY(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aXY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c0(),$async$aXY)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.HD(),$async$aXY)
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
return A.i($async$aXY,v)},
hsr(){var w,v=$.pb(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aD(32)]
return"FT"+B.d.fS(u)},
anM(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$anM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$anM)
case 3:if(!g){u=null
w=1
break}t=C.hsr()
w=4
return A.b(A.TW(),$async$anM)
case 4:s=g
r=B.dF.aI(B.R.ao(d.eH(),null))
r=B.cS.gct().aI(r)
q=e?999:2
J.aG(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(A.a5T(s),$async$anM)
case 5:p=e?999:2
u=new A.ZT("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anM,v)},
anL(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$anL=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.TW(),$async$anL)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aN(m.h(n,"usesRemaining"))
k=l==null?null:B.k.O(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aXY(J.k(l==null?"":l),j),$async$anL)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ab(t)===0){u=null
w=1
break}s=null
try{r=B.c4.c7(0,B.cB.aI(t))
s=C.fZq(r)}catch(f){q=A.a8(f)
$.am.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dV(A.a0(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=5
return A.b(A.a5T(p),$async$anL)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anL,v)},
fZq(d){var w,v,u,t,s=null
try{w=B.R.aG(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hst(A.a0(w,x.N,x.z))
return u}catch(t){v=A.a8(t)
$.am.$1("[family tree sync] parse: "+A.t(v))
return s}},
fJE(d){var w=0,v=A.j(x.m),u,t,s
var $async$fJE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.anL(t[1])
w=1
break}u=null
w=1
break}u=C.fZq(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fJE,v)},
hst(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d7(v,x.f)
u=A.cC(u,new C.c5x(),u.$ti.k("G.E"),x.k)
t=A.a2(u).k("a1<G.E>")
s=A.B(new A.a1(u,new C.c5y(),t),t.k("G.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.Q(Date.now(),0,!1)
q=A.U(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jo(p),t=t.gah(t),o=x.B;t.C();){n=t.gU(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d7(l,u)
n=A.cC(n,new C.c5z(),n.$ti.k("G.E"),o)
k=A.a2(n).k("a1<G.E>")
j=A.B(new A.a1(n,new C.c5A(),k),k.k("G.E"))
if(j.length!==0)q.n(0,m,j)}return new C.anN(h,w,s,r,q)},
anP(d,e){var w=0,v=A.j(x.y),u,t
var $async$anP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Ml(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.A7(d),$async$anP)
case 3:u=t.cw(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$anP,v)},
c5G(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c5G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.A7(d),$async$c5G)
case 3:t=s.b6(f,new C.c5H(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b1(t,new C.c5I())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c5G,v)},
TX(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$TX=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.anP(e,d),$async$TX)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Mu(e),$async$TX)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.A7(e),$async$TX)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dG(r,new C.c5E(g))
r=A.B(t,t.$ti.k("G.E"))}t=J.a7(r)
if(t.gal(r)){u=null
w=1
break}t=t.dr(r,new C.c5F(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.U(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.JV(e,o),$async$TX)
case 14:n=i
if(J.cw(n))q.n(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.anN(s,B.a.i(e.toLowerCase()),r,new A.Q(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$TX,v)},
aY2(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aY2=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.TX(d,e,f,g),$async$aY2)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gK(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.FG(A.J5(q.eH(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aY2,v)},
aY1(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aY1=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.TX(d,e,f,g),$async$aY1)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.anM(r,f),$async$aY1)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aE9(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aY1,v)},
TY(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$TY=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fJE(a0),$async$TY)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.anJ(g.a,d,e,f,s,r),$async$TY)
case 6:if(!a2){if(r)throw A.S(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.S(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.byK(e,j),$async$TY)
case 12:case 11:w=13
return A.b(C.ag2(e,j,s),$async$TY)
case 13:h=n.h(0,i)
w=h!=null&&J.cw(h)?14:15
break
case 14:w=16
return A.b(C.Ai(e,i,h),$async$TY)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bmG(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$TY,v)},
anN:function anN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c5C:function c5C(){},
c5D:function c5D(){},
c5B:function c5B(){},
c5x:function c5x(){},
c5y:function c5y(){},
c5z:function c5z(){},
c5A:function c5A(){},
c5H:function c5H(){},
c5I:function c5I(){},
c5E:function c5E(d){this.a=d},
c5F:function c5F(d){this.a=d},
fRP(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fe(null,x.H)
return A.ht(d,new C.anO(w,e,g,i,f,h,null),!0,null,x.H)},
d3d(d,e,f,g,h,i,j,k){return new C.bcb(i,e,k,j,g,f,h,d,null)},
anO:function anO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aBx:function aBx(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dPt:function dPt(d){this.a=d},
dPu:function dPu(d,e,f){this.a=d
this.b=e
this.c=f},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPz:function dPz(d){this.a=d},
dPq:function dPq(d){this.a=d},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPs:function dPs(d,e){this.a=d
this.b=e},
dPx:function dPx(d){this.a=d},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPv:function dPv(){},
dPB:function dPB(d){this.a=d},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPA:function dPA(d,e){this.a=d
this.b=e},
d3F:function d3F(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bcd:function bcd(d,e,f){this.d=d
this.e=e
this.a=f},
ab_:function ab_(d,e,f){this.c=d
this.d=e
this.a=f},
bcb:function bcb(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bcg:function bcg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Z3:function Z3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBw:function aBw(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dPl:function dPl(d,e){this.a=d
this.b=e},
dPm:function dPm(d){this.a=d},
dPn:function dPn(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPp:function dPp(d){this.a=d},
Z4:function Z4(d){this.a=d},
bhi:function bhi(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dPD:function dPD(d,e){this.a=d
this.b=e},
aWz(d,e){return new C.aWy(d,e,null)},
aWy:function aWy(d,e,f){this.c=d
this.d=e
this.a=f},
hRv(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b_(d,11)},
hYM(d){return A.c_(B.K,null,new C.fyO(new C.tp(A.M(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
h0h(d,e){return new C.aqH(e,d,null)},
aOk(d,e,f,g,h,i,j){var w=C.hRv(i)
if(w!=null)return A.bv(e,new A.a5(j,f,new C.a4V(w,!0,null),null),B.ap)
return K.aNG(e,B.bQ,f,g,h,i,j)},
lo:function lo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4V:function a4V(d,e,f){this.c=d
this.d=e
this.a=f},
bh0:function bh0(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b2$=e
_.c=_.a=null},
dBr:function dBr(d){this.a=d},
dBs:function dBs(){},
dBt:function dBt(d,e){this.a=d
this.b=e},
bh_:function bh_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fyO:function fyO(d){this.a=d},
fyN:function fyN(d,e){this.a=d
this.b=e},
fyM:function fyM(d,e){this.a=d
this.b=e},
fyL:function fyL(d,e){this.a=d
this.b=e},
aqH:function aqH(d,e,f){this.c=d
this.d=e
this.a=f},
cd9:function cd9(d,e){this.a=d
this.b=e},
aJr:function aJr(){},
hYx(d){var w=null
return A.c9(w,w,!0,w,new C.fya(),d,w,!0,!0,x.e2)},
hZI(d,e,f,g,h){var w=null
return A.c9(w,w,!0,w,new C.fFC(h,g,f,e),d,w,!0,!0,x.N)},
hYz(d,e){var w=null
return A.c9(w,w,!0,w,new C.fyf(e),d,w,!0,!0,x.dY)},
hYy(d){var w=null
return A.c9(w,w,!0,w,new C.fye(),d,w,!0,!0,x.c5)},
aRb:function aRb(d,e){this.a=d
this.b=e},
aRa:function aRa(d){this.a=d},
aPg:function aPg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fya:function fya(){},
fFC:function fFC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fyf:function fyf(d){this.a=d},
fye:function fye(){},
XI:function XI(d,e){this.c=d
this.a=e},
awM:function awM(){var _=this
_.d=$
_.c=_.a=_.e=null},
cWo:function cWo(d){this.a=d},
cWp:function cWp(d){this.a=d},
cWn:function cWn(d,e){this.a=d
this.b=e},
cWq:function cWq(d){this.a=d},
cWr:function cWr(d){this.a=d},
XH:function XH(d){this.a=d},
awL:function awL(){this.d=$
this.c=this.a=null},
cWk:function cWk(d){this.a=d},
cWl:function cWl(d){this.a=d},
cWm:function cWm(d){this.a=d},
Xf:function Xf(d){this.a=d},
avv:function avv(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
ctY:function ctY(){},
cu3:function cu3(d){this.a=d},
cu4:function cu4(d){this.a=d},
cu5:function cu5(d){this.a=d},
cu2:function cu2(){},
cu6:function cu6(d){this.a=d},
cu7:function cu7(d){this.a=d},
cu1:function cu1(){},
cu8:function cu8(d,e){this.a=d
this.b=e},
cu0:function cu0(d,e){this.a=d
this.b=e},
ctZ:function ctZ(d,e){this.a=d
this.b=e},
cu9:function cu9(d){this.a=d},
cu_:function cu_(){},
cua:function cua(d){this.a=d},
a_M:function a_M(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
btg:function btg(){this.d=$
this.c=this.a=null},
f1o:function f1o(d,e){this.a=d
this.b=e},
f1p:function f1p(d){this.a=d},
f1q:function f1q(d,e){this.a=d
this.b=e},
aa2:function aa2(d,e){this.a=d
this.b=e},
EN:function EN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bte:function bte(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f1m:function f1m(d,e){this.a=d
this.b=e},
avo:function avo(d,e){this.c=d
this.a=e},
btf:function btf(d,e){var _=this
_.d=$
_.bq$=d
_.a7$=e
_.c=_.a=null},
f1n:function f1n(d){this.a=d},
btd:function btd(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aLA:function aLA(){},
aLB:function aLB(){},
bAG(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bw(u),s=B.o.D(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oq(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fwV(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aV(B.o.u(s),2,"0")
n.push(A.dn(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.WF(A.dn(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aNX(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aNX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hU().kS(85,1280,B.eE),$async$aNX)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fc(),$async$aNX)
case 8:r=e
if(J.ab(r)===0){u=null
w=1
break}q=C.h0g()
w=9
return A.b(C.cd8(q,r),$async$aNX)
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
o=A.a8(l)
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
return A.i($async$aNX,v)},
aOi(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aOi=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.cd5(g)
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
return A.b($.W().KA(p,!0,null,i).cL(0,B.fL),$async$aOi)
case 9:n=a1
w=10
return A.b(n.m3(),$async$aOi)
case 10:m=a1
w=11
return A.b(J.aP1(m).hj(B.fQ),$async$aOi)
case 11:l=a1
J.aP1(m).q()
if(l==null){w=8
break}i=J.fa(B.dD.gaP(l))
k="data:image/png;base64,"+B.cS.gct().aI(i)
if(J.ab(k)<=r){u=k
w=1
break}o=B.k.V(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.a8(f)
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
return A.i($async$aOi,v)},
fwV:function fwV(){},
tp:function tp(d){this.a=d},
aqG:function aqG(d,e,f){this.c=d
this.d=e
this.a=f},
aD1:function aD1(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eBn:function eBn(d,e){this.a=d
this.b=e},
eBe:function eBe(d){this.a=d},
eBf:function eBf(d){this.a=d},
eBl:function eBl(d,e){this.a=d
this.b=e},
eBk:function eBk(d,e){this.a=d
this.b=e},
eBh:function eBh(d,e){this.a=d
this.b=e},
eBg:function eBg(d,e){this.a=d
this.b=e},
eBi:function eBi(d){this.a=d},
eBj:function eBj(d,e){this.a=d
this.b=e},
eBm:function eBm(d,e){this.a=d
this.b=e},
eB9:function eB9(d,e){this.a=d
this.b=e},
eBd:function eBd(d){this.a=d},
eBc:function eBc(d,e){this.a=d
this.b=e},
eBb:function eBb(d){this.a=d},
eBo:function eBo(d,e){this.a=d
this.b=e},
eBp:function eBp(d,e){this.a=d
this.b=e},
eBa:function eBa(d,e){this.a=d
this.b=e},
hcQ(d,e,f){var w="thumbnailPath",v=e.ad()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.Q(Date.now(),0,!1).a5().ac(),"project",v],x.N,x.z)},
fwW(d,e,f){var w=0,v=A.j(x.N),u
var $async$fwW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.R.ao(C.hcQ(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fwW,v)},
bAI(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bAI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fwW(!0,d,e),$async$bAI)
case 4:w=3
return A.b(r.aqE(g,d,e.a),$async$bAI)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dF.aI(B.R.ao(C.hcQ(d,e,null),null))
u="NGMY_WS:"+B.k0.gct().aI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAI,v)},
h4P(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fRw(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ab(s)===0)return!1
if(J.cZ(s,"NGMYWSSYNC2|"))return!0
if(J.cZ(s,"NGMY_WS:"))return!0
if(J.eY(s,t))return!0
if(J.cZ(s,"{"))try{w=B.R.aG(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hWy(d){var w,v,u,t=C.h4P(d)
if(t==null)return null
if(C.fRw(t))return t
w=B.a.cG(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b_(t,w))
if(C.fRw(v))return v}u=B.a.cG(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b_(t,u))
if(C.fRw(v))return v}return null},
fRv(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ab(q)===0)return r
if(J.cZ(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cZ(q,"NGMY_WS:")){v=B.c4.c7(0,B.cB.aI(J.mu(q,8)))
w=t.a(B.R.aG(0,v,r))}else w=t.a(B.R.aG(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fM9(A.a0(u,x.N,x.z))
return t}catch(s){return r}},
bAH(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bAH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aqD(t[1]),$async$bAH)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fRv(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fRv(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAH,v)},
fRu(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l8(w,v,d.c,d.d,new A.Q(Date.now(),0,!1))},
bAe(){var w=0,v=A.j(x.o),u,t
var $async$bAe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.FR(),$async$bAe)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fRv(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bAe,v)},
hdI(d,e,f,g){return A.c_(B.K,null,new C.fFu(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fFu:function fFu(d,e,f){this.a=d
this.b=e
this.c=f},
ac3:function ac3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eBr:function eBr(d,e){this.a=d
this.b=e},
eBs:function eBs(d,e){this.a=d
this.b=e},
eBt:function eBt(d,e){this.a=d
this.b=e},
eBu:function eBu(d,e){this.a=d
this.b=e},
eBq:function eBq(d){this.a=d},
aqA:function aqA(d,e,f){this.c=d
this.d=e
this.a=f},
biE:function biE(){var _=this
_.c=_.a=_.e=_.d=null},
eB4:function eB4(d,e){this.a=d
this.b=e},
eB5:function eB5(d){this.a=d},
eB6:function eB6(d){this.a=d},
aqF:function aqF(d){this.a=d},
aD0:function aD0(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eB8:function eB8(d){this.a=d},
eB7:function eB7(d){this.a=d},
hvG(d,e,f,g,h){return new C.N7(h,g,d,e,f,null)},
aHN:function aHN(d,e){this.a=d
this.b=e},
N7:function N7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aD2:function aD2(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eBR:function eBR(){},
eBN:function eBN(d,e){this.a=d
this.b=e},
eBO:function eBO(d){this.a=d},
eBy:function eBy(d){this.a=d},
eBw:function eBw(d){this.a=d},
eBx:function eBx(d){this.a=d},
eBH:function eBH(d,e){this.a=d
this.b=e},
eBE:function eBE(d,e){this.a=d
this.b=e},
eBF:function eBF(d,e){this.a=d
this.b=e},
eBG:function eBG(d,e,f){this.a=d
this.b=e
this.c=f},
eBC:function eBC(d,e,f){this.a=d
this.b=e
this.c=f},
eBA:function eBA(d){this.a=d},
eBB:function eBB(d){this.a=d},
eBD:function eBD(d){this.a=d},
eBU:function eBU(d){this.a=d},
eBT:function eBT(d){this.a=d},
eBV:function eBV(d){this.a=d},
eBS:function eBS(d){this.a=d},
eBv:function eBv(d){this.a=d},
eBz:function eBz(d,e){this.a=d
this.b=e},
eBQ:function eBQ(d,e){this.a=d
this.b=e},
eBP:function eBP(d,e){this.a=d
this.b=e},
eBK:function eBK(d){this.a=d},
eBL:function eBL(d){this.a=d},
eBM:function eBM(d,e){this.a=d
this.b=e},
eBJ:function eBJ(d,e){this.a=d
this.b=e},
eBI:function eBI(d,e,f){this.a=d
this.b=e
this.c=f},
bv1:function bv1(){},
zY(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
aeu(d,e,f){return C.hL8(d,e,f)},
hL8(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aeu=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aq("String",e,f),$async$aeu)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a8(o)
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
return A.i($async$aeu,v)},
aet(d,e){return C.hL7(d,e)},
hL7(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aet=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$aet)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a8(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aet,v)},
hJV(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Ru(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bxL(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bxL=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b0d(q),$async$bxL)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aOi(q,!1),$async$bxL)
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
return A.i($async$bxL,v)},
hjz(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aN(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qE(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qE(p,J.k(u==null?"":u),1,o,q)},
fM9(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d7(s,x.f)
w=A.cC(w,new C.ctm(),w.$ti.k("G.E"),x.Q)
v=A.a2(w).k("a1<G.E>")
r=A.B(new A.a1(w,new C.ctn(),v),v.k("G.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.l8(w,v,u,r,t==null?new A.Q(Date.now(),0,!1):t)},
hOZ(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Ya
case"female":case"f":return D.ah8
default:return D.xc}},
h9x(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fVw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hOZ(v==null?j:J.k(v))
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
hP0(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Ly
case"viewer":return D.ka
default:return D.tg}},
hP1(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
FH(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bz_(d,e){return B.a.i(e.toLowerCase())===C.FH(d,e)&&d.y!==D.ka},
tB(d,e){var w,v=d.y
if(v===D.ka)return!1
w=B.a.i(e.toLowerCase())
if(w===C.FH(d,e))return!0
if(v===D.Ly)return!0
v=d.e
return new A.J(v,A.fRA(),A.T(v).k("J<1,n>")).t(0,w)},
hOr(d){return J.dG(d,new C.fi7()).gM(0)},
fFX(d){var w=0,v=A.j(x.y),u,t
var $async$fFX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.A7(d),$async$fFX)
case 3:u=t.qA(f,new C.fFY(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFX,v)},
byK(d,e){var w=0,v=A.j(x.H),u,t
var $async$byK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.A7(d),$async$byK)
case 3:t=g
if(J.qA(t,new C.fgQ(e))){w=1
break}if(C.hOr(t)>=2)throw A.S(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$byK,v)},
aj7(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d7(n,x.f)
w=A.cC(w,new C.bL4(),w.$ti.k("G.E"),x.P)
v=A.a2(w).k("a1<G.E>")
m=A.B(new A.a1(w,new C.bL5(),v),v.k("G.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b6(u,new C.bL6(),x.N)
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
if(r==null)r=new A.Q(Date.now(),0,!1)
q=A.aN(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.O(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kr(l,w,v,!s,t,m,r,q,p,C.hP0(o==null?null:J.k(o)))},
h9G(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ap(v,0,8)},
Cc(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$Cc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Qs(d),$async$Cc)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.ay(),$async$Cc)
case 4:t=f
w=5
return A.b(t.a4p(0),$async$Cc)
case 5:w=6
return A.b(C.f8W(t,l),$async$Cc)
case 6:s=f
if(J.cw(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.h5o(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.op(l,n),$async$Cc)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.h5o(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.op(l,n),$async$Cc)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Cc,v)},
f8W(d,e){return C.hHr(d,e)},
hHr(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f8W=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zY(a9)))
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
break}o=f.gU(f)
n=B.a.i(J.k(o))
if(J.ab(n)===0){w=7
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zY(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.R.aG(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fM9(A.a0(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zY(a9)+"_"+n))
i=C.hJV(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b0d(h),$async$f8W)
case 17:g=b1
if(g!=null){i=i.Ru(g)
p=!0}case 16:J.ce(q,i)
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
case 8:J.QC(q,new C.f8X())
if(p&&J.ab(q)!==0)C.op(a9,q)
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
return A.i($async$f8W,v)},
bza(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bza=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Qs(d),$async$bza)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Cc(r),$async$bza)
case 4:t=p.aV(g)
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
return A.i($async$bza,v)},
h5o(d){var w,v,u,t
try{w=B.R.aG(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d7(w,x.f)
v=A.cC(v,new C.f4E(),v.$ti.k("G.E"),x.i)
u=A.a2(v).k("a1<G.E>")
v=A.B(new A.a1(v,new C.f4F(),u),u.k("G.E"))
B.d.b1(v,new C.f4G())
return v}catch(t){v=A.a([],x.D)
return v}},
op(d,e){return C.hYn(d,e)},
hYn(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$op=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Qs(b2),$async$op)
case 3:a8=b5
if(J.ab(a8)===0){u=!1
w=1
break}w=4
return A.b(A.ay(),$async$op)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zY(a8)
p=A.aT(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.R.aG(0,p,null)),new C.fy1(),a2).fF(0)
a2=J.b6(b3,new C.fy2(),a2).bY(0,new C.fy3())
n=A.d8(a2,a2.$ti.k("G.E"))
a2=o,a2=A.ea(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eY(n,m)?17:18
break
case 17:a5=C.zY(a8)
l=A.aT(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a78(l),$async$op)
case 19:t=21
a5=C.zY(a8)
k=A.aT(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.R.aG(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a78(a5==null?null:J.k(a5)),$async$op)
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
return A.b(C.aet(r,"ngmy_worksheet_item_v3_"+C.zY(a8)+"_"+m),$async$op)
case 29:w=30
return A.b(C.aet(r,"ngmy_worksheet_thumb_v3_"+C.zY(a8)+"_"+m),$async$op)
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
case 14:case 10:a2=J.cD(b3),a3=a2.gah(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gU(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bxL(h),$async$op)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aeu(r,"ngmy_worksheet_thumb_v3_"+C.zY(a8)+"_"+a4,f),$async$op)
case 40:g=i.Ru(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aet(r,"ngmy_worksheet_thumb_v3_"+C.zY(a8)+"_"+a4),$async$op)
case 41:g=i.Ru(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aet(r,"ngmy_worksheet_thumb_v3_"+C.zY(a8)+"_"+a4),$async$op)
case 42:case 34:a4=i.a
w=43
return A.b(C.aeu(r,"ngmy_worksheet_item_v3_"+C.zY(a8)+"_"+a4,B.R.ao(g.ad(),null)),$async$op)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.ce(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aeu(r,"ngmy_worksheets_index_v3_"+C.zY(a8),B.R.ao(q,null)),$async$op)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eG(b3,new C.fy4(q))
a4=a3.$ti.k("cS<1,a3<n,@>>")
a7=A.B(new A.cS(a3,new C.fy5(),a4),a4.k("G.E"))
a0=a7
w=45
return A.b(C.aeu(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.R.ao(a0,null)),$async$op)
case 45:w=46
return A.b(J.hiG(r),$async$op)
case 46:if(a2.gck(b3)&&J.ab(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.a8(b1)
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
return A.i($async$op,v)},
Km(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Km=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Cc(d),$async$Km)
case 3:t=g
s=J.cD(t)
r=s.bf(t,new C.fFW(e))
if(r===-1)s.cm(t,0,e)
else s.n(t,r,e)
u=C.op(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Km,v)},
byX(d,e){var w=0,v=A.j(x.H),u
var $async$byX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Cc(d),$async$byX)
case 2:u=g
J.nc(u,new C.fiz(e))
w=3
return A.b(C.op(d,u),$async$byX)
case 3:return A.h(null,v)}})
return A.i($async$byX,v)},
FJ(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$FJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$FJ)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.R.aG(0,i,null)
if(x.j.b(t)){j=J.d7(t,x.f)
j=A.cC(j,new C.fkX(),j.$ti.k("G.E"),x.k)
s=A.a2(j).k("a1<G.E>")
r=A.B(new A.a1(j,new C.fkY(),s),s.k("G.E"))
B.d.b1(r,new C.fkZ())
k=r}}catch(h){}w=4
return A.b(C.f5n(d),$async$FJ)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hHO(k,p,d)
j=A.T(o)
s=j.k("J<1,a3<n,@>>")
s=A.B(new A.J(o,new C.fl_(),s),s.k("aj.E"))
n=B.R.ao(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.PE(d,o),$async$FJ)
case 7:case 6:j=j.k("a1<1>")
m=A.B(new A.a1(o,new C.fl0(d),j),j.k("G.E"))
if(m.length!==0)C.aMS(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$FJ,v)},
fxO(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fxO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.PE(d,e),$async$fxO)
case 3:t=J.dG(e,new C.fxP(d))
s=A.B(t,t.$ti.k("G.E"))
if(s.length===0){u=!0
w=1
break}u=C.aMS(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fxO,v)},
a1p(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a1p=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.ay(),$async$a1p)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.R.aG(0,l,null)
if(x.j.b(u)){m=J.d7(u,x.f)
m=A.cC(m,new C.fFR(),m.$ti.k("G.E"),x.k)
t=A.a2(m).k("a1<G.E>")
s=A.B(new A.a1(m,new C.fFS(),t),t.k("G.E"))
o=s}}catch(k){}q=J.pX(o,new C.fFT(e))
if(B.a.i(e.x).length===0&&C.tB(e,d)){m=B.a.i(d.toLowerCase())
p=e.aBs(e.y===D.ka?D.ka:D.tg,m)}else p=e
if(q===-1)J.pf(o,0,p)
else J.aG(o,q,p)
w=3
return A.b(C.PE(d,o),$async$a1p)
case 3:w=C.tB(p,d)?4:5
break
case 4:w=6
return A.b(C.aMR(C.FH(p,d),p),$async$a1p)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a1p,v)},
aN1(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aN1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.FJ(d),$async$aN1)
case 2:u=g
t=J.cD(u)
s=A.qU(t.eG(u,new C.fig(e)))
t.bn(u,new C.fih(e))
w=3
return A.b(C.PE(d,u),$async$aN1)
case 3:w=s!=null&&C.bz_(s,d)?4:5
break
case 4:w=6
return A.b(C.f4I(e),$async$aN1)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aN1,v)},
agg(d){var w=d.f,v=A.T(w).k("a1<1>")
w=A.B(new A.a1(w,new C.fG1(),v),v.k("G.E"))
return w},
fPd(d,e){var w,v=d.f,u=A.qU(new A.a1(v,new C.fhR(e),A.T(v).k("a1<1>")))
v=C.agg(d)
w=A.T(v).k("a1<1>")
v=A.B(new A.a1(v,new C.fhS(e,u),w),w.k("G.E"))
B.d.b1(v,new C.fhT())
return v},
hP4(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hdL(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bf(C.fPd(d,u),new C.fFD(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hQA(d,e){var w
if(e==null||e.length===0)return 1
w=C.fPd(d,e)
if(w.length===0)return 1
return new A.J(w,new C.flJ(),A.T(w).k("J<1,H>")).fC(0,B.zs)+1},
hYg(d){var w,v=C.agg(d)
if(v.length===0)return null
w=new A.a1(v,new C.fxK(),A.T(v).k("a1<1>"))
if(!w.gal(0))return w.gK(0)
return B.d.gK(v)},
hP_(d){return A.E(["id",d.a,"name",d.b,"gender",C.h9x(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hQv(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aZ(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.J(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.xc?n:q.c
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
d=q.aBn(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cD7(a1,w,a3.d,a2.y,s,a0,v)},
A7(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$A7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ay(),$async$A7)
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
p=A.cC(p,new C.fkU(),p.$ti.k("G.E"),x.k)
s=A.a2(p).k("a1<G.E>")
p=A.B(new A.a1(p,new C.fkV(),s),s.k("G.E"))
B.d.b1(p,new C.fkW())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$A7,v)},
ag2(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ag2=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.tg:D.ka
a7=C.FH(b2,b3)
w=2
return A.b(C.A7(b1),$async$ag2)
case 2:a8=b5
a9=J.cD(a8)
b0=a9.bf(a8,new C.fxG(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.byK(b1,b2),$async$ag2)
case 5:case 4:if(b0===-1){u=b2.aBs(a6,a7)
a9.cm(a8,0,u)}else{t=a9.h(a8,b0)
s=A.U(x.N,x.P)
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
i=i!==D.xc?i:l.c
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
s.n(0,m,l.aBn(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.B(new A.bc(s,k),k.k("G.E"))
k=a5?D.tg:D.ka
u=t.y3(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.PE(b1,a8),$async$ag2)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aMR(B.a.i(b3.toLowerCase()),u),$async$ag2)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ag2,v)},
h5L(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.Q(Date.now(),0,!1).a5().ac(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("J<1,a3<n,@>>"),k=A.B(new A.J(m,C.hcY(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a5().ac(),"updatedAt",o],r,x.K),"createdAt",s.a5().ac(),"updatedAt",o],r,x.z)},
h5M(d,e){var w=new A.Q(Date.now(),0,!1).a5().ac(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("J<1,a3<n,@>>")
u=A.B(new A.J(u,C.hcY(),t),t.k("aj.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a5().ac(),"updatedAt",w],x.N,x.z)},
hFr(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.aj7(A.a0(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fRA(),A.T(j).k("J<1,n>")).bY(0,new C.f5a())
t=A.B(j,j.$ti.k("G.E"))
if(u===v)s=D.tg
else s=B.d.t(t,u)?D.Ly:D.ka
return w.aBs(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.aj7(A.a0(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d7(q,h)
h=A.cC(h,new C.f5b(),h.$ti.k("G.E"),x.P)
p=A.a2(h).k("a1<G.E>")
o=A.B(new A.a1(h,new C.f5c(),p),p.k("G.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.f5d(),x.N).bY(0,new C.f5e())
t=A.B(h,h.$ti.k("G.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.tg
else s=B.d.t(t,u)?D.Ly:D.ka
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.Q(Date.now(),0,!1)
j=A.aN(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.O(j)
if(j==null)j=0
return new C.kr(h,r,p,!m,t,o,l,j,v,s)},
f5n(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$f5n=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ab(a0)===0){u=null
w=1
break}t=4
r=new C.f5r()
h=x.N
g=x.z
w=7
return A.b(A.iH(A.a([A.le("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bF),r.$2(A.le("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bF),"collaborator"),r.$2(A.le("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bF),"public")],x.cl),x.U),$async$f5n)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.U(h,g)
h=A.B(p,g)
l=h
J.fY(l,o)
J.fY(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.ab(j)!==0)J.aG(m,j,k)}l=m
h=A.a2(l).k("bc<2>")
h=A.cC(new A.bc(l,h),new C.f5o(a0),h.k("G.E"),x.k)
l=A.a2(h).k("a1<G.E>")
l=A.B(new A.a1(h,new C.f5p(),l),l.k("G.E"))
B.d.b1(l,new C.f5q())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a8(a1)
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
return A.i($async$f5n,v)},
hHO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gal(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dr(e,new C.f9B(),v).bY(0,new C.f9C())
t=A.d8(u,u.$ti.k("G.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.FH(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.ka){m=q.e
m=!new A.J(m,A.fRA(),A.T(m).k("J<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gah(e);j.C();){v=j.gU(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.hQv(l,v)
o=C.FH(k,w)
p=v.d
s.n(0,u,o===w?k.b8n(p,D.tg):k.b8n(p,v.y))}j=s.$ti.k("bc<2>")
j=A.B(new A.bc(s,j),j.k("G.E"))
B.d.b1(j,new C.f9D())
return j},
PE(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$PE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ay(),$async$PE)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.fbF(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aq("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.R.ao(s,null)),$async$PE)
case 3:return A.h(null,v)}})
return A.i($async$PE,v)},
aMR(d,e){return C.hMQ(d,e)},
hMQ(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aMR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.lF("family_trees",A.a([C.h5L(e,d)],p),null,B.cF),$async$aMR)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.lF("family_trees",A.a([C.h5M(e,d)],p),null,B.cF),$async$aMR)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a8(n)
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
return A.i($async$aMR,v)},
aMS(d,e){return C.hMR(d,e)},
hMR(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aMS=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("J<1,a3<n,@>>")
m=n.k("aj.E")
l=A.B(new A.J(e,new C.fgc(d),n),m)
r=l
w=7
return A.b(A.lF("family_trees",r,null,B.cF),$async$aMS)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.J(e,new C.fgd(d),n),m)
p=k
w=8
return A.b(A.lF("family_trees",p,null,B.cF),$async$aMS)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a8(i)
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
return A.i($async$aMS,v)},
f4I(d){return C.hEO(d)},
hEO(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$f4I=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Q2("family_trees",A.E(["id",d],x.N,x.z),null,B.cF),$async$f4I)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a8(p)
$.am.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$f4I,v)},
qE:function qE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
l8:function l8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctp:function ctp(){},
cto:function cto(){},
ctm:function ctm(){},
ctn:function ctn(){},
GM:function GM(d,e){this.a=d
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
aj6:function aj6(d,e){this.a=d
this.b=e},
fi7:function fi7(){},
fFY:function fFY(d){this.a=d},
fgQ:function fgQ(d){this.a=d},
kr:function kr(d,e,f,g,h,i,j,k,l,m){var _=this
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
bL8:function bL8(){},
bL7:function bL7(){},
bL4:function bL4(){},
bL5:function bL5(){},
bL6:function bL6(){},
f8X:function f8X(){},
f4E:function f4E(){},
f4F:function f4F(){},
f4G:function f4G(){},
fy1:function fy1(){},
fy2:function fy2(){},
fy3:function fy3(){},
fy4:function fy4(d){this.a=d},
fy5:function fy5(){},
fFW:function fFW(d){this.a=d},
fiz:function fiz(d){this.a=d},
fkX:function fkX(){},
fkY:function fkY(){},
fkZ:function fkZ(){},
fl_:function fl_(){},
fl0:function fl0(d){this.a=d},
fxP:function fxP(d){this.a=d},
fFR:function fFR(){},
fFS:function fFS(){},
fFT:function fFT(d){this.a=d},
fig:function fig(d){this.a=d},
fih:function fih(d){this.a=d},
fG1:function fG1(){},
fhR:function fhR(d){this.a=d},
fhS:function fhS(d,e){this.a=d
this.b=e},
fhT:function fhT(){},
fFD:function fFD(d){this.a=d},
flJ:function flJ(){},
fxK:function fxK(){},
fkU:function fkU(){},
fkV:function fkV(){},
fkW:function fkW(){},
fxG:function fxG(d){this.a=d},
f5a:function f5a(){},
f5b:function f5b(){},
f5c:function f5c(){},
f5d:function f5d(){},
f5e:function f5e(){},
f5r:function f5r(){},
f5s:function f5s(d){this.a=d},
f5o:function f5o(d){this.a=d},
f5p:function f5p(){},
f5q:function f5q(){},
f9B:function f9B(){},
f9C:function f9C(){},
f9D:function f9D(){},
fbF:function fbF(){},
fgc:function fgc(d){this.a=d},
fgd:function fgd(d){this.a=d},
ctq:function ctq(d,e){this.a=d
this.b=e},
ctr:function ctr(d,e){this.a=d
this.b=e},
aF5:function aF5(d,e,f){this.a=d
this.b=e
this.c=f},
b6s:function b6s(){this.b=this.a=0},
b6r:function b6r(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bth:function bth(){},
wh(d,e){var w,v
if(d==null)return""
w=d.bQ()
v=""+w.gcb()+"/"+w.gcr()+"/"+w.gce()
if(!e)return v
return v+" "+B.a.aV(B.o.u(w.gmR()),2,"0")+":"+B.a.aV(B.o.u(w.gFq()),2,"0")},
hvD(){var w,v=$.pb(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aD(32)]
return"WS"+B.d.fS(u)},
aqB(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aqB=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$aqB)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f0("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bF),$async$aqB)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=A.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.a8(m)
$.am.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqB,v)},
aqC(d){return C.hvE(d)},
hvE(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aqC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$aqC)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hz("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,B.cF,null),$async$aqC)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a8(p)
$.am.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aqC,v)},
aqE(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$aqE=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c0(),$async$aqE)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hvD()
w=4
return A.b(C.aqB(),$async$aqE)
case 4:r=h
q=B.a.i(e)
p=B.dF.aI(t)
J.aG(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cS.gct().aI(p),"usesRemaining",25,"createdAt",new A.Q(Date.now(),0,!1).a5().ac()],x.N,x.K))
w=5
return A.b(C.aqC(r),$async$aqE)
case 5:u=new A.ZT("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqE,v)},
aqD(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aqD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c0(),$async$aqD)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aqB(),$async$aqD)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aN(n.h(o,"usesRemaining"))
l=m==null?null:B.k.O(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ab(t)===0){u=null
w=1
break}s=null
try{s=B.c4.c7(0,B.cB.aI(t))}catch(h){r=A.a8(h)
$.am.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dV(A.a0(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a5().ac())
p.n(q,i,m)}w=5
return A.b(C.aqC(q),$async$aqD)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqD,v)},
h0g(){var w=new A.Q(Date.now(),0,!1).a5()
return"wst_"+(1000*w.a+w.b)+"_"+B.cH.aD(999999)},
hvF(d){var w,v,u,t,s,r,q
try{w=A.aeT(d)
if(w==null)return d
v=w
if(J.Kt(v)>960||J.Ks(v)>960){s=v
r=J.Kt(v)>=J.Ks(v)?960:null
v=A.aeS(s,J.Ks(v)>J.Kt(v)?960:null,B.MU,r)}s=v
u=A.akv(82).RR(s,B.xX)
if(J.ab(u)===0)return d
s=new Uint8Array(A.co(u))
return s}catch(q){t=A.a8(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
cd8(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cd8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hvF(e)
$.cd4.n(0,s,t)
u=C.bAK(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cd8,v)},
b0d(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0d=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cZ(l,"data:image")){u=null
w=1
break}t=4
r=J.eY(l,",")?B.d.gam(J.lg(l,",")):l
q=B.cB.aI(r)
if(J.ab(q)===0){u=null
w=1
break}p=C.h0g()
w=7
return A.b(C.cd8(p,q),$async$b0d)
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
n=A.a8(k)
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
return A.i($async$b0d,v)},
cd5(d){var w=0,v=A.j(x.T),u,t,s
var $async$cd5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(K.cd7(s),$async$cd5)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gct().aI(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cd5,v)},
a78(d){var w=0,v=A.j(x.H),u,t
var $async$a78=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=K.hcR(d)
if(t==null){w=1
break}$.cd4.W(0,t)
w=3
return A.b(C.bAJ(t),$async$a78)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a78,v)},
bAK(d,e){return C.hWB(d,e)},
hWB(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bAK=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aLN
w=7
return A.b(n==null?$.aLN=K.fOf():n,$async$bAK)
case 7:r=g
q=new Uint8Array(A.co(e))
p=J.mv(r,"thumbs","readwrite")
B.iz.lX(J.mt(p,"thumbs"),q,l)
w=8
return A.b(J.pe(p),$async$bAK)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a8(k)
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
return A.i($async$bAK,v)},
bAJ(d){return C.hWz(d)},
hWz(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAJ=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aLN
w=7
return A.b(o==null?$.aLN=K.fOf():o,$async$bAJ)
case 7:r=f
q=J.mv(r,"thumbs","readwrite")
B.iz.EW(J.mt(q,"thumbs"),m)
w=8
return A.b(J.pe(q),$async$bAJ)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a8(l)
$.am.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bAJ,v)}},D,Af,Ag,P,Ah,Ai,K,Aj,Q,Z
J=c[1]
A=c[0]
B=c[2]
A_=c[194]
G=c[174]
F=c[30]
E=c[184]
N=c[110]
A0=c[112]
A1=c[162]
R=c[115]
A2=c[193]
A3=c[36]
M=c[192]
A4=c[78]
I=c[84]
A5=c[131]
A6=c[119]
S=c[134]
T=c[205]
U=c[163]
A7=c[154]
A8=c[166]
V=c[161]
A9=c[63]
Aa=c[69]
W=c[178]
Ab=c[29]
Ac=c[143]
Ad=c[210]
L=c[156]
Ae=c[167]
X=c[208]
Y=c[201]
H=c[100]
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
Z=c[124]
C.amD.prototype={}
C.aWA.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bcD(),f=h.x!=null&&h.yr(i).length===0
if(h.x!=null)w=f?B.aZ:B.bL
else w=h.gSt()?B.bL:B.e1
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.I(D.bay,B.r,1)
s=x.p
r=A.p(i,A.v(A.a([A.p(i,D.eyQ,B.f,i,i,new A.o(B.aZ.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h1,i,i,i),B.S,D.f0s,B.au,A.d(C.wh(new A.Q(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eXw,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,D.aWF,i,i,i,i,B.X9,i,i,i)
q=A.m(16)
p=A.I(B.aK,B.r,1)
o=A.I(B.aZ.j(0.28),B.r,1)
n=A.fQa(h.d)
o=A.p(B.A,C.aWz(A.fo6(h.e,n),30),B.f,i,i,new A.o(B.ls,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eT2,B.L,i,i)
m=A.m(14)
l=A.I(B.aK,B.r,1)
q=A.p(i,A.v(A.a([o,B.P,n,B.bB,D.f0J,B.ac,A.p(i,A.v(A.a([D.ffx,B.bB,A.d(A.A9(h.c),i,i,i,i,i,i,D.eOd,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.f3,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,L.afi,i,i,i)
p=A.m(16)
m=A.I(B.aK,B.r,1)
l=j.aNS("Original due",C.wh(h.r,!1))
n=j.aNS("Current due",C.wh(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.v(A.a([l,B.P,n,B.S,A.p(i,A.d(h.gaI4(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.Af,i,i,1/0),B.S,j.c9B(),B.P,j.bYE(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bm,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.I(B.aK,B.r,1)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.f1H,B.au,A.d(q,i,i,i,i,i,i,D.eSn,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bm,i,i,1/0)],s))}if(h.gaD1()){q=A.m(14)
o=A.I(B.cm,B.r,1.6)
B.d.v(p,A.a([B.S,A.p(i,A.v(A.a([D.fgK,B.P,A.bv(A.m(12),A.ei(new A.a5(1/0,88,A.b3(i,i,i,new A.UO(h.ax,B.M,D.eCy,!0,3.5,i),B.at),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Ah,i,i,i)],s))}p.push(B.ay)
p.push(D.f9f)
return A.p(i,A.v(A.a([r,new A.C(B.afl,A.v(p,B.aj,i,B.e,B.j,0,B.p),i)],s),B.aj,i,B.e,B.Q,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aNS(d,e){var w=null
return A.A(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a6r,w,w,w),1),A.d(e,w,w,w,w,w,w,D.ePc,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c9B(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a7x(B.e1,u,"Not paid yet")
w=t.yr(null).length
v=w===0?B.aZ:B.bL
return this.a7x(v,u,C.wh(t.x,!0))},
bYE(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a7x(B.aZ,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a7x(B.aZ,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a6r,u,u,u)
v=A.T(d).k("J<1,hh>")
v=A.B(new A.J(d,new C.bZN(),v),v.k("aj.E"))
return A.v(A.a([w,B.ao,A.c5(B.bG,v,B.bx,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a7x(d,e,f){var w=null
return A.A(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a6r,w,w,w),1),new A.dl(1,B.ch,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dK,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b8B.prototype={
a6(d,e){new A.UO(this.b,B.M,e,!0,3.5,null).a6(d,e)},
ar(d){return d.b!==this.b}}
C.amK.prototype={
T(){return new C.aAY(A.a([],x.bp))},
gdV(){return this.c}}
C.aAY.prototype={
a_(){this.a1()
this.HP()},
HP(){var w=0,v=A.j(x.H),u,t=this,s
var $async$HP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a0E(t.a.c),$async$HP)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dCj(t,s))
case 1:return A.h(u,v)}})
return A.i($async$HP,v)},
aPJ(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bq:B.bo).j(0.22)
w=A.m(10)
return A.bo(v,new A.b4(4,r,new A.aA(u,1,B.r,-1)),v,B.bm,v,v,v,v,!0,new A.b4(4,w,new A.aA((this.a.d.a?B.bq:B.bo).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b4(4,A.m(10),D.aUl),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aPI(d){return this.aPJ(d,null)},
Og(d){return this.cdb(d)},
cdb(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Og=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.FE:B.eE
w=7
return A.b(new A.hU().Bp(72,900,900,n),$async$Og)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fc(),$async$Og)
case 8:p=f
n=B.cS.gct().aI(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a8(l)
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
return A.i($async$Og,v)},
aXW(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.I((q?B.bq:B.bo).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bq:B.bo
q=A.V(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.az,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bq:B.bo
t=x.p
u=A.D(A.v(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c7)
q=A.a([q,B.ab,u,A.bJ(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.V(B.cv,s.a.d.a?B.bq:B.bo,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c7))
return A.p(r,A.A(q,B.m,r,B.e,B.j,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.kB,D.blv,r,r,r)},
Cm(d){return this.bvx(d)},
bvw(){return this.Cm(null)},
bvx(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Cm=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.aq(new A.bb(a4,B.b0,B.aN),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.jJ(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.O(p)):B.k.aa(p,2)}o=new A.aq(new A.bb(a4,B.b0,B.aN),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.aq(new A.bb(a4,B.b0,B.aN),s)
if(a3){a4=new A.Q(Date.now(),0,!1).bN(6048e8)
m=A.bZ(a4.gce(),a4.gcb(),a4.gcr(),0,0,0,0,0)}else{a4=a5.f
m=A.bZ(a4.gce(),a4.gcb(),a4.gcr(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bl(a4,!0,x.cT)
i=a3?null:A.fQa(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.vt?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",a4,new C.dC2(),new C.dC3(a2,t,a5,r,new C.dC4(a2,t),o,n,j),B.eL,!0,x.y),$async$Cm)
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
break}if(f.length===0||e<=0){t.c.I(x.q).f.R(D.eIU)
w=1
break}a0=a2.d
if(a0==null){t.c.I(x.q).f.R(D.eHz)
w=1
break}a1=A.fo6(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.vt?"male":"female"
w=7
return A.b(A.agf(a3,A.fY0(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Cm)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.vt?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bZ(a3.gce(),a3.gcb(),a3.gcr(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bZ(a4.gce(),a4.gcb(),a4.gcr(),0,0,0,0,0)))a5.cFg(a2.a)
w=8
return A.b(A.agf(t.a.c,a5),$async$Cm)
case 8:case 5:w=9
return A.b(t.HP(),$async$Cm)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Cm,v)},
aQj(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bq:B.bo).j(0.2)
s=A.I(s,B.r,g?1.5:1)
r=C.aWz(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aP:B.az
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.p(p,A.A(A.a([r,B.bp,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b9,B.j,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bR,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ae)},
QQ(d){return this.cuh(d)},
cuh(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$QQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hQ(B.w.j(0.55),!0,"Dismiss",s,new C.dCm(),new C.dCn(t,d),B.hV,!0,x.y),$async$QQ)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.Q(s,0,!1)
case 4:w=7
return A.b(A.agf(t.a.c,d),$async$QQ)
case 7:w=8
return A.b(t.HP(),$async$QQ)
case 8:case 1:return A.h(u,v)}})
return A.i($async$QQ,v)},
MW(d,e){return this.bG9(0,e)},
bG9(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$MW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kU(s,"Cancel","Delete",e.b+" \xb7 "+A.A9(e.c)+" will be removed from this device.","Delete this debt?"),$async$MW)
case 3:if(!g){w=1
break}w=4
return A.b(C.fin(t.a.c,e.a),$async$MW)
case 4:w=5
return A.b(t.HP(),$async$MW)
case 5:case 1:return A.h(u,v)}})
return A.i($async$MW,v)},
acW(d){return this.c77(d)},
c77(d){var w=0,v=A.j(x.H),u=this,t
var $async$acW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c_(B.K,null,new C.dCg(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$acW)
case 2:return A.h(null,v)}})
return A.i($async$acW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dYY
w=J.dG(m.d,new C.dCo())
v=A.B(w,w.$ti.k("G.E"))
w=J.dG(m.d,new C.dCp())
u=A.B(w,w.$ti.k("G.E"))
t=B.d.cI(v,0,new C.dCq())
w=A.m(18)
s=m.a.d.a
r=s?D.cg6:D.avj
q=A.I(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.p(l,D.bJB,B.f,l,l,new A.o(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.aw,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.az,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a1,!0,A.m(12),A.aK(!1,A.m(12),!0,D.dYm,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dCr(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ae)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cqx("Open",""+v.length),1)
n=v.length===0?"$0.00":A.A9(t)
r=A.a([A.p(l,A.v(A.a([s,B.ac,A.A(A.a([o,B.ab,A.D(m.b2Q(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a6(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.aff,l,l,l),B.ay],p)
if(J.ck(m.d)){w=m.a.d.a
s=w?B.dT:B.c
q=A.m(18)
o=A.I((w?B.bq:B.bo).j(0.12),B.r,1)
n=A.p(l,D.bED,B.f,l,l,new A.o(B.cY.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.az,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.v(A.a([n,B.ac,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bo,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bnY,l,l,1/0))}else{w=m.gccs()
s=A.B(new A.J(v,w,A.T(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ao,new A.C(D.bpD,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bq:B.bo,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.T(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.v(r,B.aj,l,B.e,B.j,0,B.p)},
b2Q(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.I((v.a.d.a?B.bq:B.bo).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bq:B.bo,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aP:B.az
return A.p(u,A.v(A.a([q,B.bB,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eu,u,u,u)},
cqx(d,e){return this.b2Q(!1,d,e)},
cct(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.yr(j).length,h=d.bbP()
if(d.x!=null){w=d.yr(j).length
v=w===0?B.cY:B.bL}else if(d.gSt())v=B.bL
else{if(h)w=B.cY
else w=k.a.d.a?B.bq:B.bo
v=w}if(d.x!=null){w=d.yr(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.wh(u,!1)}else{u.toString
t="Paid "+C.wh(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.wh(w,!1)+" \xb7 "+i+" missed":"Due "+C.wh(w,!1)}w=k.a.d.a?B.dT:B.c
u=A.m(18)
if(d.gSt()&&d.x==null)s=B.bL.j(0.35)
else s=(k.a.d.a?B.bq:B.bo).j(0.12)
s=A.I(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cI,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.ls
o=A.I(d.gSt()&&d.x==null?B.bL.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fQa(d.d)
o=A.p(B.A,A.db(C.aWz(A.fo6(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.az
m=x.p
n=A.a([new A.dl(1,B.ch,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaD1())B.d.v(n,A.a([B.ea,A.V(B.LZ,B.cY.j(0.8),j,j,j,14)],m))
p=A.D(A.v(A.a([A.A(n,B.m,j,B.e,B.j,0,j,j),B.d_,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.A9(d.c)
l=k.a.d.a?B.aP:B.az
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aF(!1,B.a1,!0,j,A.aK(!1,q,!0,new A.C(T.af_,A.A(A.a([o,B.bd,p,B.ab,A.v(A.a([n,B.bB,A.V(B.ed,(k.a.d.a?B.bq:B.bo).j(0.5),j,j,j,18)],m),B.dG,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dCi(k,d),j,j,j,j,j,j,j),B.f,B.K,0,j,j,j,j,j,B.ae),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d8,j,j,j,j)}}
C.tT.prototype={}
C.aj5.prototype={
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
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cw,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.I(r.j(0.6),B.r,1)
n.push(A.aE(a0,A.p(a0,A.V(B.cv,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.aa))
m=v?B.a3:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.jn,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.arV,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.ED,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.f4(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.ef)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bkI,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cD:B.bi,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fl,A.v(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.eDi)
a2=A.a([A.A(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.uL,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a6(B.a3,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.kD,A.v(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.I(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.he,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a6(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.blX,a0,a0,a0,a0)}}
C.aSq.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bg?B.bg:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bi:B.cD,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.j,0,q,q),B.d_,n],m)
if(p.z)o.push(new A.C(B.Ad,n,q))
return new A.C(B.d8,A.v(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.RD.prototype={
T(){return new C.bc9()}}
C.bc9.prototype={
gbTO(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.dYT,D.dYZ],l)
for(w=0;w<8;++w){v=D.a08[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Fn:B.AZ
q=t===s
r=A.V(r,q?B.ex:B.bZ,n,n,n,17)
q=q?B.c:B.ad
r=A.a([r,B.bp,new A.x(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ab,new A.bG(1,B.bn,new A.x(v.c,n,Aj.Cu,n,n,n,n,B.a2,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aX(24,24)
p=new A.aA(B.ex,2,B.r,-1)
s=new A.o(n,n,new A.bU(p,p,p,p),new A.bt(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aE(n,new A.C(B.eD,A.v(A.a([new A.C(B.m5,new A.cs(B.aX,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.Dd(!0,new C.aj5(v,q.d,q.e,new C.d2b(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d2c(o,v),n,n,n,n,n,n,!1,B.aa))}k.push(new A.C(D.bmf,A.bI(D.flP,new C.d2d(o,d),A.bk(B.b2,n,n,n,n,B.nR,n,n,new A.b7(A.m(16),B.Z),n,n,n)),n))
return A.bq(!0,new A.cW(new A.aY(0,1/0,0,m.a.b*0.9),A.cK(k,n,D.bqu,n,n,B.ai,!0),n),!0,!1,B.ah,!0,!0)}}
C.mZ.prototype={
ad(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a5().ac()],x.N,x.z)},
b8z(d,e,f){return new C.mZ(this.a,e,d,f)}}
C.GL.prototype={
vQ(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.GL(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aBh(d){var w=null
return this.vQ(w,w,w,w,w,d,w,w,w,w,w,w)},
cB5(d){var w=null
return this.vQ(w,w,w,w,d,w,w,w,w,w,w,w)},
b8x(d,e,f){var w=null
return this.vQ(d,w,w,w,w,w,w,w,e,w,f,w)},
cBK(d){var w=null
return this.vQ(w,w,w,w,w,w,d,w,w,w,w,w)},
cBT(d){var w=null
return this.vQ(w,w,w,w,w,w,w,w,w,d,w,w)},
cB3(d){var w=null
return this.vQ(w,w,w,d,w,w,w,w,w,w,w,w)},
cBV(d){var w=null
return this.vQ(w,w,w,w,w,w,w,w,w,w,w,d)},
cB0(d){var w=null
return this.vQ(w,w,d,w,w,w,w,w,w,w,w,w)},
cAW(d){var w=null
return this.vQ(w,d,w,w,w,w,w,w,w,w,w,w)},
EP(d){var w=null
return this.vQ(w,w,w,w,w,w,w,d,w,w,w,w)},
cC2(d,e,f,g,h,i,j,k,l,m,n){return this.vQ(d,e,f,g,null,h,i,j,k,l,m,n)},
ad(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cyT(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bL3(d),k=A.aN(d.h(0,"emblem")),j=k==null?o:B.k.O(k),i=A.aN(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.BB.gee(D.BB))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a1D)
q=l.$2("frame",D.a15)
l=l.$2("texture",D.a10)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cC2(p,u,t,q,r,A.ty(d.h(0,"ribbon"))?A.Fi(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Y5.prototype={
T(){return new C.ay_(A.a([],x.I),D.Lx)},
gdV(){return this.c}}
C.ay_.prototype={
a_(){var w,v=this
v.a1()
v.f=A.z1(0,1)
w=$.aw()
v.z=new A.aq(B.as,w)
v.Q=new A.aq(B.as,w)
v.kG()
w=v.a
C.bz7(w.c,w.d).bz(new C.d2S(v),x.fL)},
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
return A.b(C.JV(s.c,s.d),$async$kG)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.d2G(t,r))
t.atm()
case 1:return A.h(u,v)}})
return A.i($async$kG,v)},
gaq0(){var w,v=this
if(!J.ck(v.d)){w=v.r
w=w<0||w>=J.ab(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
atm(){var w,v,u=this.gaq0(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saU(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saU(0,w==null?"":w)},
c5y(d){this.m(new C.d2D(this,d))
this.atm()},
Mh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Mh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mZ(B.o.u(1000*Date.now()),"Untitled page","",new A.Q(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aOD(r.c,r.d,s),$async$Mh)
case 3:w=4
return A.b(t.kG(),$async$Mh)
case 4:if(t.c==null||J.ck(t.d)){w=1
break}q=J.pX(t.d,new C.d2e(s))
p=q>=0?q:J.ab(t.d)-1
t.m(new C.d2f(t,p))
t.atm()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.As(p+1,B.cp,B.kx),$async$Mh)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Mh,v)},
A8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$A8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaq0()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aOD(o.c,o.d,new C.mZ(s,r,q,new A.Q(p,0,!1))),$async$A8)
case 3:w=4
return A.b(t.kG(),$async$A8)
case 4:if(t.c==null){w=1
break}t.m(new C.d2H(t))
case 1:return A.h(u,v)}})
return A.i($async$A8,v)},
MX(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$MX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaq0()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d2n(r),s,null,!0,!0,x.y),$async$MX)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.byT(s.c,s.d,r.a),$async$MX)
case 4:t.m(new C.d2o(t))
w=5
return A.b(t.kG(),$async$MX)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Sw(B.o.D(t.r+1,0,J.ab(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$MX,v)},
xL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.A8(),$async$xL)
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
return A.b(C.PV(s,r.r,o,p,q),$async$xL)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a4(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hdk(s,r.x,r.r),$async$xL)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.JV(s.c,s.d),$async$xL)
case 10:l=e
for(s=n.d,r=J.cD(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.mZ(""+(m+k),q,B.a.i(j.b),new A.Q(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Ai(r.c,r.d,l),$async$xL)
case 11:w=12
return A.b(t.kG(),$async$xL)
case 12:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xL,v)},
ZW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.A8(),$async$ZW)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxJ(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dL(D.y3,new C.d2E(t),new C.d2F())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.mf("Our Family",o,"",""))
for(o=J.aV(t.d);o.C();){n=o.gU(o)
p.push(new F.mf(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fRM(o,new F.qY(s,r,"",p,new F.ud(q.d,null,null,null,null,"","","")),null),$async$ZW)
case 6:case 1:return A.h(u,v)}})
return A.i($async$ZW,v)},
MF(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$MF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.A8(),$async$MF)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.c_(D.aaV,null,new C.d2j(t),s,!0,!0,!0,D.aJT,!1,!1,x.N),$async$MF)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cB5(r)
t.m(new C.d2k(t,q))
s=t.a
w=7
return A.b(C.Qu(s.c,s.d,q),$async$MF)
case 7:case 1:return A.h(u,v)}})
return A.i($async$MF,v)},
VB(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$VB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c_(D.aaV,null,new C.d2p(t),r,!0,!0,!0,D.aJT,!1,!1,x.e),$async$VB)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.d2q(t,s))
r=t.a
w=4
return A.b(C.Qu(r.c,r.d,s),$async$VB)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.As(0,B.dU,B.of)
case 1:return A.h(u,v)}})
return A.i($async$VB,v)},
bLc(d){var w=d.bQ(),v=B.a.aV(B.o.u(w.gcb()),2,"0"),u=B.a.aV(B.o.u(w.gcr()),2,"0")
return""+w.gce()+"-"+v+"-"+u},
gxJ(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bT5()
if(r.e)w=D.a9U
else if(J.ck(r.d)){w=r.y
v=r.gxJ(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.eNH,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.C(Y.age,new C.Xo(w,v,0,q),q),q),B.bu,t,B.ao,A.d(u,q,q,q,q,q,q,A.l(q,q,D.k4.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bu],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aE(q,A.p(q,D.eyG,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dN.j(0.45),B.J,18)],x.V),E.vg,B.n),q,q,q,q,B.Xj,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcy1(),q,q,q,q,q,q,!1,B.aa))
w.push(B.S)
w.push(A.hb(D.bAW,D.flj,r.gaJO(),q))
B.d.v(u,w)}w=A.av(A.ci(A.v(u,B.m,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.ey,q,q,B.ai),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ab(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.k4.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dP:B.zq
u=A.v(A.a([new A.C(D.bnh,w,q),A.D(A.I2(v,new C.d2Q(r),J.ab(r.d)+1,q,r.gc5x(),u,B.aX),1),r.byn()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cc(q,D.ac5,new A.an(B.W,q,B.b_,B.q,A.a([D.aIp,A.bq(!0,A.v(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],v),q),q,!1,!1,q,q)},
bT5(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cw(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.J1(B.dS,"AI",h.gbwi(),!0))
if(h.a.f)f.push(new C.J1(B.nE,"Cover",h.gbGJ(),!1))
if(h.a.f)f.push(new C.J1(B.xH,"Header",h.gbBM(),!1))
if(J.cw(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.J1(B.tu,"Print",h.gcev(),!1))
if(h.a.f&&J.cw(h.d)&&h.r>=0){v=h.w
u=v?B.hv:B.j6
t=v?"Save":"Edit"
f.push(new C.J1(u,t,v?h.gckv():new C.d2A(h),!1))}if(h.a.f)f.push(new C.J1(B.hu,"Add page",h.gaJO(),!1))
v=C.h9w(h.y.Q)
u=h.gxJ(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ab(h.d)
r=J.ab(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.df7
else{k=new A.aX(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.aA(E.jE.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.k4,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bU(i,i,i,i),new A.bt(k,k,k,k),g,new A.a6(B.a3,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.k4.j(0.85)
p.push(new A.bG(1,B.bn,A.aE(B.c5,A.v(A.a([k,B.bB,new A.x(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.aa),g))}return new C.aj5(v,u,t+" \xb7 "+s+" "+r,new C.d2B(h),A.A(p,B.m,g,B.e,B.j,0,g,g),g)},
zd(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.A8(),$async$zd)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aV(t.d);r.C();){q=r.gU(r)
s.push(q.b+" "+q.c)}p=F.a0T(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.d2g(t,p),s,null,!0,!0,x.N),$async$zd)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xL(),$async$zd)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.CV(),$async$zd)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Eu("Swahili (Kiswahili)",!0),$async$zd)
case 18:w=16
break
case 17:w=19
return A.b(t.cuS(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zd)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zd,v)},
Xt(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.I(E.jE.j(0.3),B.r,1),r=x.p
return new A.C(B.cK,A.aK(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.vg,B.a6),w,42,w,w,w,w,w,42),B.bd,A.D(A.v(A.a([A.d(f,w,w,w,w,w,w,A4.Se,w,w,w),A.d(g,w,w,w,w,w,w,E.a5R,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.d2C(d,h),w,w,w,w,w,w,w),w)},
CV(){return this.bKH()},
bKH(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$CV=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d2t(r),a7,null,!0,!0,x.ei),$async$CV)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eK("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.c9(null,null,!1,null,new C.d2u(o),a7,null,!0,!0,x.H).f7(new C.d2v(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.ce(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ad()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.y3[a1]
J.ce(j,i.a)}w=8
return A.b(C.afr(a0,a7,new C.d2w(o),d,l,e,j),$async$CV)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a8(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a4(l,!0).eF()
l=o
l.shM($.aw())
J.aP4(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.I(x.q).f
j=n
l.R(A.b2(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gck(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ab(p);++a4){if(m.b.aj(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b8z(m.b.h(0,a4).b,a7,new A.Q(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Ai(j.c,j.d,l),$async$CV)
case 11:w=12
return A.b(r.kG(),$async$CV)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.y3[a1].a)
a5=l.cyT(j,12,a7)
l=r.a
w=15
return A.b(C.Qu(l.c,l.d,a5),$async$CV)
case 15:if(r.c!=null)r.m(new C.d2x(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.As(0,B.dU,B.of)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.I(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.R(A.b2(a3?A.co1("Undo",new C.d2y(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.eh,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$CV,v)},
Eu(d,e){return this.cuT(d,e)},
cuS(d){return this.Eu(d,!1)},
cuT(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Eu=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eK("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.c9(null,null,!1,null,new C.d2J(a0),k,null,!0,!0,x.H).f7(new C.d2K(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.ce(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a15(m,new C.d2L(a0)),$async$Eu)
case 10:w=8
break
case 9:w=11
return A.b(C.bAB(new C.d2M(a0),m,a2),$async$Eu)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a8(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a4(o,!0).eF()
o=a0
o.shM($.aw())
J.aP4(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.I(x.q).f
k=q
o.R(A.b2(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ab(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b8z(J.q(p,g).b,j.a,new A.Q(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Ai(k.c,k.d,o),$async$Eu)
case 12:w=13
return A.b(r.kG(),$async$Eu)
case 13:o=r.c
if(o==null){w=1
break}o=o.I(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(A.co1("Undo",new C.d2N(r,d),null),null,null,null,null,B.q,null,k,null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eu,v)},
byn(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.d2h(v):u
r=A.aH(u,u,u,u,A.V(D.bwD,s?D.k4:B.b7,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cw(v.d)&&!v.w&&v.r>=0)s=A.hb(A.V(B.uW,B.E0,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.E0,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbGi(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.k4.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.av(s,u,u,u),1)
w=t<J.ab(v.d)?new C.d2i(v):u
return A.bq(!0,new A.C(D.bn5,A.A(A.a([r,s,A.aH(u,u,u,u,A.V(B.ed,t<J.ab(v.d)?D.k4:B.b7,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ah,!0,!1)}}
C.Y9.prototype={
T(){return new C.bcu(new A.aq(B.as,$.aw()))}}
C.bcu.prototype={
ga03(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
gbJt(){var w,v=this.ga03()
A:{if("cover"===v){w=D.cLM
break A}if("book"===v){w=D.cHM
break A}w=D.d8_
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jE.j(0.5),n=x.p,m=A.A(A.a([D.df8,B.aw,D.bsn,A.aH(q,q,q,q,B.l9,q,q,q,new C.d4C(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jF(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d4D(r),r.ga03()==="page",q,q,q,q))
if(r.a.d)l.push(A.jF(q,q,q,D.fgi,q,new C.d4E(r),r.ga03()==="book",q,q,q,q))
l.push(A.jF(q,q,q,D.f4b,q,new C.d4F(r),r.ga03()==="cover",q,q,q,q))
l=A.c5(B.bG,l,B.bx,6,8)
k=B.c.j(0.07)
k=A.aL(q,B.T,!1,q,!0,B.q,q,A.aM(),r.d,q,q,q,q,q,2,A.bo(q,new A.b4(4,A.m(16),B.Z),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.ko,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ag,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.dj,!0,B.a5,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbJt(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mw(q,B.c.j(0.08),new A.x(s,q,B.I2,q,q,q,q,q,q,q,q,q),B.hx,new C.d4G(r,s),q,q,q,q))}return A.eD(q,E.zU,A.ci(A.v(A.a([m,B.S,D.fjj,B.ao,l,B.ac,k,B.P,A.c5(B.bG,w,B.bx,6,6),B.ay,A.dp(D.bAT,D.fk4,new C.d4H(r,d),A.bk(B.b2,q,q,q,q,B.nR,q,q,new A.b7(A.m(16),B.Z),q,q,q)),B.au,D.feG],n),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.fv,q,q,B.ai),q,q,q,D.afZ,B.cZ,q,new A.b7(p,new A.aA(o,1.4,B.r,-1)),q)}}
C.Y7.prototype={
T(){return new C.ay0(A.a([],x.Y))},
gdV(){return this.c}}
C.adf.prototype={}
C.ay0.prototype={
a_(){this.a1()
this.kG()},
kG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.PZ(p.c,p.d),$async$kG)
case 3:o=e
n=A.a([],x.Y)
p=J.aV(o)
case 4:if(!p.C()){w=5
break}s=p.gU(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bz7(r.c,q),$async$kG)
case 6:j=e
i=J
w=7
return A.b(C.JV(t.a.c,q),$async$kG)
case 7:m.push(new l.adf(k,j,i.ab(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.d36(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kG,v)},
b4_(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
OT(d,e){return this.c75(0,e)},
c75(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$OT=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a4(s,!1).ci(A.eo(new C.d35(u,e),!0,null,x.y)),$async$OT)
case 2:t=g
w=3
return A.b(u.kG(),$async$OT)
case 3:if(t===!0&&u.c!=null)u.c.I(x.q).f.R(D.aLM)
return A.h(null,v)}})
return A.i($async$OT,v)},
Ex(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Ex=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.I(x.q).f.R(D.aLI)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aeL(s.c,s.d),$async$Ex)
case 5:q=e
w=6
return A.b(t.kG(),$async$Ex)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.OT(0,B.d.iK(t.d,new C.d3a(q))),$async$Ex)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.PV(p,s.f,r,n,o),$async$Ex)
case 10:m=e
w=11
return A.b(t.kG(),$async$Ex)
case 11:if(m&&t.c!=null)t.c.I(x.q).f.R(D.aLM)
case 1:return A.h(u,v)}})
return A.i($async$Ex,v)},
On(d,e){return this.cih(0,e)},
cih(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$On=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.d39(t,e),s,null,!0,!0,x.y),$async$On)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a1i(s.c,s.d,e.a),$async$On)
case 4:w=5
return A.b(t.kG(),$async$On)
case 5:case 1:return A.h(u,v)}})
return A.i($async$On,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.byq(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.I(E.jE.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aE(n,new A.fF(0.7142857142857143,A.p(n,A.v(A.a([D.df9,B.ac,D.dY0,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.k4.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b9,B.j,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcxY(),n,n,n,n,n,n,!1,B.aa))}w=A.m(22)
v=A.I(E.jE.j(0.85),B.r,1.6)
s=A.aE(n,A.p(n,D.bIq,B.f,n,n,new A.o(B.w.j(0.3),n,A.I(E.jE.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d3b(d),n,n,n,n,n,n,!1,B.aa)
r=A.m(14)
q=B.w.j(0.3)
p=A.I(E.jE.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bd,D.bsK,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.eMQ,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h1,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.bNl,B.n),n,n,n,Ah.WS,D.bl9,n,n,n)
if(o.e)k=D.a9U
else k=k.length===0?D.b0y:A.cm(new C.d3c(k))
return A.cc(n,D.ac5,new A.an(B.W,n,B.b_,B.q,A.a([D.aIp,A.bq(!0,A.v(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0)],l),n),n,!1,!1,n,n)},
byq(d){var w,v,u=this,t=null,s=u.b4_(d),r=d.c,q=x.p,p=A.a([A.bY(0,A.f4(B.A,new A.a5(300,420,new C.Xo(d.b,s,r,t),t),B.f,B.ds),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aE(t,A.p(t,D.bHM,B.f,t,t,new A.o(B.w.j(0.55),t,A.I(B.b7,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d33(u,d),t,t,t,t,t,t,!1,B.aa),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.eMq,t,t,t)
v=r===1?"page":"pages"
return A.aE(t,A.v(A.a([new A.fF(0.7142857142857143,new A.an(B.W,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.k4.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d34(u,d),t,t,t,t,t,t,!1,B.aa)}}
C.J1.prototype={}
C.Xo.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dL(D.y3,new C.cCa(m),new C.cCb()),j=m.c,i=D.BB.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mh:B.b9
v=new C.cCc(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.dVk,28)],x.V)
u=x.p
t=A.a([A.bY(0,A.b3(l,l,l,new C.b9M(j.x,h,l),B.at),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a6(B.a3,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aX(3,3)
t.push(new A.cJ(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bt(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.agf,8,0.85,2.2),v.$4(D.bpW,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.agf,8,0.85,2.4))
else if(r==="corners")t.push(A.bY(0,new A.C(D.bpS,A.b3(l,l,l,new C.b9D(h,l),B.at),l),0,0,0))
r=A.V(D.aut[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.arV,l,l),B.L,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.ac,p,B.ac,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cD,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aO,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bY(0,new A.C(D.bqm,A.v(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b3(l,l,l,new C.aF0(l),D.eCr),l,l,l,46,0,l))
return A.p(l,A.bv(D.a8z,new A.an(B.W,l,B.a9,B.q,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.a8z,i,new A.a6(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b9M.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.eT()
f.dI(11)
switch(this.b){case"plain":return
case"linen":$.W()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.H()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.W()
q=A.L()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.H()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ai()
l=f.ai()
k=f.ai()
$.W()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
j.r=t.j(0.25+f.ai()*0.5).gp(0)
r=j.H()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.W()
j=A.a([],l)
h=new A.aP(k.r,B.aq,null,null,j)
j.push(new A.b5(v,t))
k=i-0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.ap(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bE())
k=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.H()
k=h.gbI().a.snapshot()
o.drawPath((h.e=new A.cE(k)).a,r)
r.delete()}break
default:$.W()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ai()
m=f.ai()
l=f.ai()
r=w.H()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.W()
g=A.L()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.ai()
m=f.ai()
l=f.ai()
r=g.H()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
ar(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b9D.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.W(),k=A.L(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.af
k.c=2.4
k.d=B.bO
for(w=e.a,v=e.b,v=[D.eu3,new A.cM([w,0,-1,1]),new A.cM([0,v,1,-1]),new A.cM([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aP(l,B.aq,null,null,s)
s.push(new A.b5(r+p*34,q))
s.push(new A.ap(r,q))
s.push(new A.ap(r,q+o*34))
m=k.H()
s=n.gbI().a.snapshot()
w.drawPath((n.e=new A.cE(s)).a,m)
m.delete()
s=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
s.r=j.j(0.9).gp(0)
m=s.H()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ar(d){return!d.b.A(0,this.b)}}
C.tU.prototype={}
C.XG.prototype={
T(){return new C.b9K()}}
C.b9K.prototype={
gnG(){var w=this.d
return w===$?this.d=this.a.c:w},
gxJ(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.aq(new A.bb(w.b,B.b0,B.aN),$.aw())}return v},
gayB(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.aq(new A.bb(w.c,B.b0,B.aN),$.aw())}return v},
gaoB(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.aq(new A.bb(w.y,B.b0,B.aN),$.aw())}return v},
q(){var w=this,v=w.gxJ(0),u=v.S$=$.aw()
v.P$=0
v=w.gayB()
v.S$=u
v.P$=0
v=w.gaoB()
v.S$=u
v.P$=0
w.a2()},
apc(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jF(s,s,s,new A.x(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cVC(this,f,u),e===u,s,s,s,s))}return A.c5(B.bG,r,B.bx,6,8)},
auK(d){var w=null,v=B.c.j(0.07)
return A.bo(w,new A.b4(4,A.m(14),B.Z),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lg,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gnG(),a0=f.gxJ(0),a1=a0.a.a,a2=f.gayB(),a3=a2.a.a,a4=f.gaoB(),a5=d.b8x(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.av(new A.a5(190,260,A.f4(B.A,new A.a5(270,370,new C.Xo(a5,d,f.a.e,e),e),B.f,B.ds),e),e,e,e)
a0=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a0,e,e,e,e,e,2,f.auK("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ag,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cW0(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
a2=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a2,e,e,e,e,e,2,f.auK("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ag,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cW1(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.y3[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.b7
q=r.a===q
o=new A.aA(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bU(o,o,o,o),e,e,new A.a6(B.ax,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aE(e,A.v(A.a([p,B.d_,new A.x(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cW2(f,t),e,e,e,e,e,e,!1,B.aa))}v=A.c5(B.bG,v,B.bx,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.aX(14,14)
s=f.d
o=new A.aA((s===$?f.d=f.a.c:s).d===n?B.ex:B.K,2,B.r,-1)
q.push(A.aE(e,A.p(e,A.V(D.aut[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bU(o,o,o,o),new A.bt(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cW3(f,n),e,e,e,e,e,e,!1,B.aa))}q=A.c5(B.bG,q,B.bx,8,8)
a4=A.aL(e,B.T,!1,e,!0,B.q,e,A.aM(),a4,e,e,e,e,e,2,f.auK("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ag,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cW4(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.dj,!0,B.a5,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,I.mq,e,e,e)
m=A.a([],w)
for(l=D.BB.gdK(D.BB),l=l.gah(l);l.C();){k=l.gU(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ex:B.b7
g=r.e===i
o=new A.aA(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bU(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aE(e,A.v(A.a([j,B.bB,new A.x(i,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cW5(f,k),e,e,e,e,e,e,!1,B.aa))}m=A.c5(B.bG,m,B.bx,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,I.mq,e,e,e)
k=f.gnG()
return new A.C(new A.N(0,0,0,a3.f.d),A.bq(!0,new A.cW(new A.aY(0,1/0,0,a1.a.b*0.92),A.cK(A.a([D.fe9,B.ac,d,B.aO,a0,B.S,a2,B.ay,D.fjT,B.P,v,B.ay,D.fei,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.kQ(e,9,""+B.k.V(f.gnG().f),36,18,new C.cW6(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,I.mq,e,e,e),B.ao,f.apc(D.a1D,f.gnG().r,new C.cW7(f),D.dba),B.ac,A.d("BORDER",e,e,e,e,e,e,I.mq,e,e,e),B.ao,f.apc(D.a15,f.gnG().w,new C.cW8(f),D.dbf),B.ac,A.d("COVER MATERIAL",e,e,e,e,e,e,I.mq,e,e,e),B.ao,f.apc(D.a10,f.gnG().x,new C.cWa(f),D.dcD),B.ao,A.iB(e,B.b2,e,B.ah,e,new C.cWb(f),e,e,e,D.f8O,f.gnG().z),B.bu,A.bI(D.fd4,new C.cWc(f,a6),A.bk(B.b2,e,e,e,e,B.nR,e,e,new A.b7(A.m(16),B.Z),e,e,e))],w),e,P.afO,e,e,B.ai,!0),e),!0,!1,B.ah,!0,!0),e)}}
C.aF0.prototype={
a6(d,e){var w,v,u,t=new A.aP($.W().r,B.aq,null,null,A.a([],x.v))
t.E(new A.b5(0,0))
w=e.a
t.E(new A.ap(w,0))
v=e.b
t.E(new A.ap(w,v))
t.E(new A.ap(w/2,v-12))
t.E(new A.ap(0,v))
t.E(new A.bE())
u=A.L()
u.sau(D.bNX.aw(0,new A.a9(0,0,0+w,0+v)))
d.aN(t,u)},
ar(d){return!1}}
C.beX.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.W()
w=A.L()
w.sau(D.bN1.aw(0,new A.a9(0,0,a3,a4)))
a5.aX(new A.a9(0,0,a3,a4),w)
v=B.k.dG(a2/112)
u=new A.eT()
u.dI(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.cLL[u.aD(9)]
j=u.aD(14)
J.bA(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a9(n,j,n+m,j+l)
h=A.by(i,B.h7)
g=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sau(new A.a6(B.a3,B.a7,B.x,A.a([f,k,e],t),a0,a0).aw(0,i))
d=g.H()
w.drawRRect(A.ew(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
e.r=E.jE.j(0.55).gp(0)
d=e.H()
w.drawRect(A.c4(new A.a9(h,j,g,j+2)),d)
d.delete()
j=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
j.r=E.jE.j(0.4).gp(0)
d=j.H()
w.drawRect(A.c4(new A.a9(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aD(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
p.sau(D.bMp.aw(0,new A.a9(0,r,a3,q)))
d=p.H()
w.drawRect(A.c4(new A.a9(0,r,a3,q)),d)
d.delete()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=B.w.j(0.5).gp(0)
p.z=B.ja
d=p.H()
w.drawRect(A.c4(new A.a9(0,q,a3,q+14)),d)
d.delete()}w=A.L()
w.r=D.b3L.j(0.72).gp(0)
a5.aX(new A.a9(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.L()
a4.sau(new A.bS(B.A,0.5,B.x,a0,0,A.a([D.baa.j(0.22),B.K],t),a0,a0).aw(0,A.bT(new A.u(w,a2),a1)))
a5.ag(new A.u(w,a2),a1,a4)},
ar(d){return!1}}
C.b8_.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cJ(14,w*2,v*2.2,v*2,o,o,new A.kF(new A.o(A.ar(D.k4,D.bee,w/4),o,new A.bU(B.Z,new A.aA(B.w.j(0.12),1,B.r,-1),B.Z,B.Z),B.J9,o,o,B.n),B.be,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aE3,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aX(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.jE.j(0.6),o,o,new A.bt(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.v(t,B.m,o,B.pE,B.j,0,B.p),B.f,o,o,new A.o(o,o,o,D.aU5,u,D.bNV,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dp,18)],v)
t=A.ao(o,A.b3(o,o,o,new C.aF0(o),D.eCm),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aSq(p.y,r,G.il,o))
r=n.d
q=p.x
if(p.f)n=A.v(A.a([A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.r,o,o,o,o,o,2,A.bo(o,B.ev,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.il.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eZL,!0,B.a5,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.il.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),p.w,o,o,o,o,o,2,A.bo(o,B.ev,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.il.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ag,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eR9,!0,B.a5,B.yQ,B.am,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.eZE,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.il.j(0.5),o,o,o,o,o,o,o,o,11,B.cD,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.D(A.p(o,o,B.f,D.DO.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fl,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.DO.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.f,D.DO.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.ay],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.il.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.WF(A.dn(A.a([A.dn(o,o,o,o,o,o,o,o,o,D.eU9,B.a.ap(k,0,1)),A.dn(o,o,o,o,o,o,o,o,o,o,B.a.b_(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.il.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ci(A.v(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.y,o,o,o,o,B.ai)}s.push(A.D(n,1))
s.push(new A.C(B.it,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.il.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.A(A.a([u,A.D(A.p(o,A.bv(B.J9,new A.an(B.W,o,B.a9,B.q,A.a([t,new A.C(D.bpp,A.v(s,B.aj,o,B.e,B.j,0,B.p),o),A.ao(0,A.bX(o,new A.o(o,o,o,o,o,new A.a6(B.a3,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.be),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.J9,v,D.bOq,B.n),o,o,o,o,o,o,o,o),1)],m),B.aj,o,B.e,B.j,0,o,o))
return new A.an(B.W,o,B.a9,B.q,l,o)}}
C.anQ.prototype={
T(){return new C.aBy(A.a([],x._))},
bp(){return this.r.$0()},
pn(){return this.w.$0()},
gdV(){return this.c}}
C.aBy.prototype={
a_(){var w,v
this.a1()
this.vm()
w=this.a
v=w.c
if(v.length!==0)C.a5S(v,w.e,w.d.w)},
vb(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fRP(r,t.e,!1,s.w,new C.dPG(u),null,s),$async$vb)
case 2:w=3
return A.b(u.vm(),$async$vb)
case 3:return A.h(null,v)}})
return A.i($async$vb,v)},
Z7(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Z7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fRP(r,t.e,!0,s.w,new C.dPF(u),null,s),$async$Z7)
case 2:w=3
return A.b(u.vm(),$async$Z7)
case 3:return A.h(null,v)}})
return A.i($async$Z7,v)},
vm(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$vm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.A7(q.a.c),$async$vm)
case 7:p=e
if(q.c!=null)n=q.e||J.cw(p)
else n=!1
if(n)q.m(new C.dPI(q,p))
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
return A.b(C.FJ(q.a.c).cL(0,B.pi),$async$vm)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.dPJ(q,o))
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
if(q.c!=null&&q.e)q.m(new C.dPK(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vm,v)},
Nr(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Nr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.I(s).f.R(D.eFZ)
w=3
return A.b(C.FJ(t.a.c),$async$Nr)
case 3:r=e
w=4
return A.b(C.fxO(t.a.c,r),$async$Nr)
case 4:q=e
w=5
return A.b(C.FJ(t.a.c),$async$Nr)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dPE(t,p))
o=t.c.I(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ab(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.R(A.b2(null,null,null,q?B.dv:B.cR,null,B.q,null,s,null,B.m0,null,null,null,null,null,null,null,null,null,null))
t.a.pn()
case 1:return A.h(u,v)}})
return A.i($async$Nr,v)},
H3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$H3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hYy(l),$async$H3)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hsp(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aY_(q,p.e,l,"Each family tree costs $"+B.k.aa(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$H3)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h9G(r)
o=Date.now()
n=t.a.c
m=new C.kr(l,r.toUpperCase(),p,!0,B.T,D.Bq,new A.Q(o,0,!1),0,n,D.tg)
w=5
return A.b(C.a1p(n,m),$async$H3)
case 5:w=6
return A.b(t.vm(),$async$H3)
case 6:t.a.bp()
t.a.pn()
if(t.c==null){w=1
break}t.DH(m)
case 1:return A.h(u,v)}})
return A.i($async$H3,v)},
DH(d){return this.c95(d)},
c95(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$DH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.A7(u.a.c),$async$DH)
case 2:n=l.qU(k.dG(f,new C.dPH(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.ht(m,new C.anK(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$DH)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a1p(u.a.c,o),$async$DH)
case 6:case 5:w=7
return A.b(u.vm(),$async$DH)
case 7:u.a.pn()
return A.h(null,v)}})
return A.i($async$DH,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=new C.tp(p)
if(r.e)return A.av(A.mz(q,p?B.bq:B.bo,q,q,q,q,q,q,q,q),q,q,q)
if(J.ck(r.d)){w=p?B.dT:B.c
v=A.m(15)
u=A.aF(!1,B.a1,!0,q,A.aK(!1,q,!0,A.p(q,D.bBY,B.f,q,q,new A.o(B.aT.j(0.12),q,A.I(B.aT,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cL,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc8a(),q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ae)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.az,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.EN(A.p(q,A.v(A.a([u,B.aO,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bo,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dZ,A.bI(D.fl4,r.gaNO(),A.bk(B.bT,q,q,q,q,q,Ag.Xm,q,new A.b7(A.m(12),B.Z),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bpl,q,q,1/0),15,B.ah,1.05,D.a7h,q)}w=J.ab(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.az,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b8],v)
if(J.cw(r.d))w.push(A.aH(q,q,q,q,A.V(B.xO,B.aT,q,q,q,q),q,q,q,new C.dPM(r),q,q,q,q,"Sync family trees with database",q))
if(J.cw(r.d))w.push(A.aH(q,q,q,q,A.V(B.xF,B.aT,q,q,q,q),q,q,q,r.gadC(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dp(E.alg,D.f25,r.gaNO(),A.bk(B.bT,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ab(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ac)
u.push(new C.EN(r.cuX(J.q(r.d,s),o),14,B.ah,1,D.a7h,q))
B.d.v(w,u)}return A.v(A.a([p,B.ay,A.v(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
cuX(d,e){var w=null,v=e.a,u=v?B.dT:B.c,t=A.m(14),s=A.I((v?B.dX:B.bX).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.ej,10)],x.V),q=A.m(14),p=A.p(w,D.bB1,B.f,w,w,new A.o(B.aT.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.az,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gamv(),m=d.d?"":" \xb7 Public",l=d.y===D.ka?" \xb7 View only":"",k=x.p
l=A.D(A.v(A.a([o,B.bB,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aF(!1,B.a1,!0,w,A.aK(!1,q,!0,new A.C(B.by,A.A(A.a([p,B.bd,l,A.V(B.LJ,v?B.bq:B.bo,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dPL(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ae),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.anK.prototype={
T(){return new C.aBv(A.a([],x._),A.aZ(x.N),A.b5E())},
bp(){return this.r.$0()},
gdV(){return this.c}}
C.aBv.prototype={
a_(){var w,v,u=this
u.a1()
u.d=u.a.w
u.aay()
w=u.a
v=w.c
if(v.length!==0)C.a5S(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.aw()
w.P$=0
this.a2()},
a0Y(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.xd("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dP6(r),s,null,!0,!0,x.y),$async$a0Y)
case 3:if(e!==!0||t.c==null){w=1
break}t.Iv()
t.m(new C.dP7(t,r))
w=4
return A.b(t.vd(),$async$a0Y)
case 4:t.a.bp()
t.xd(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a0Y,v)},
cl9(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.dP1(w,f,d,e))},
aPY(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dj()
u.e0(w,v,0,1)
u.js(q,q,1,1)
this.w.sp(0,u)},
b6d(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eE(new Float64Array(16))
q.dW(r)
w=q.BU()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dj()
t.e0(r,u,0,1)
t.js(v,v,1,1)
t.e0(-r,-u,0,1)
t.il(0,q)
s.sp(0,t)},
aay(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aay=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.A7(u.a.c),$async$aay)
case 2:t=s.qU(r.dG(e,new C.dOA(u)))
if(t!=null&&u.c!=null)u.m(new C.dOB(u,t))
return A.h(null,v)}})
return A.i($async$aay,v)},
xd(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
vb(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.fRP(o,t,!1,r,new C.dOP(u),q.a,s),$async$vb)
case 2:n=A
m=J
w=3
return A.b(C.FJ(u.a.c),$async$vb)
case 3:p=n.qU(m.dG(e,new C.dOQ(u)))
if(p!=null&&u.c!=null)u.m(new C.dOR(u,p))
return A.h(null,v)}})
return A.i($async$vb,v)},
Iv(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cw(w,0)},
vd(){var w=0,v=A.j(x.H),u=this,t,s
var $async$vd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a1p(t,s),$async$vd)
case 2:return A.h(null,v)}})
return A.i($async$vd,v)},
a_B(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.tB(q,t.a.c)){t.xd("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hZI(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a_B)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Iv()
t.m(new C.dP0(t,r))
w=4
return A.b(t.vd(),$async$a_B)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_B,v)},
Zk(){return this.c97()},
c97(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Zk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.tB(q,t.a.c)){t.xd("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.M(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dOZ(r,new C.tp(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$Zk)
case 3:if(e!==!0||t.c==null){w=1
break}t.Iv()
t.m(new C.dP_(r,t))
w=4
return A.b(t.vd(),$async$Zk)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zk,v)},
Us(d){return this.bvu(d)},
bvu(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Us=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.tB(r,t.a.c)){t.xd("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dOo(t,d),r,null,!0,!0,x.P),$async$Us)
case 3:s=f
if(s==null){w=1
break}t.Iv()
t.m(new C.dOp(t,s))
w=4
return A.b(t.vd(),$async$Us)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Us,v)},
a1j(d){return this.cx1(d)},
cx1(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a1j=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.M(s)
t=u.c
t.toString
w=2
return A.b(A.c9(null,null,!0,null,new C.dP9(u,d,new C.tp(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a1j)
case 2:return A.h(null,v)}})
return A.i($async$a1j,v)},
c5s(d){var w=this,v=w.d
v===$&&A.c()
if(C.tB(v,w.a.c))w.N6(d)
else w.a1j(d)},
ag4(d,e){return this.cp0(d,e)},
cp0(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ag4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.M(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.c9(null,null,!0,null,new C.dP3(new C.tp(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$ag4)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ag4,v)},
H8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$H8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.ka?3:5
break
case 3:w=6
return A.b(C.fFX(t.a.c),$async$H8)
case 6:s=e
o=t.a
r=C.fZo(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ag4(!s,!r),$async$H8)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bz_(o,t.a.c)){t.xd("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kU(o,"Cancel","Remove",q.y===D.ka?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$H8)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aN1(t.a.c,t.d.a),$async$H8)
case 11:t.a.bp()
o=t.c
if(o==null){w=1
break}A.iK(o,null)
case 1:return A.h(u,v)}})
return A.i($async$H8,v)},
a89(d){return this.bGq(d)},
bGq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a89=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.tB(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b8(s,new C.dOq(p))){o=A.T(s)
p.a=A.qU(new A.cS(new A.a1(s,new C.dOr(d),o.k("a1<1>")),new C.dOs(),o.k("cS<1,n>")))}q=p.a
if(q==null)q=d.d
t.Iv()
t.m(new C.dOt(t,s,d,q))
w=3
return A.b(t.vd(),$async$a89)
case 3:t.xd(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a89,v)},
N6(d){return this.bIq(d)},
bIq(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$N6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.tB(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a1j(d),$async$N6)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.c9(null,null,!0,null,new C.dOx(t,d),r,null,!0,!0,x.P),$async$N6)
case 6:s=f
if(s==null){w=1
break}t.Iv()
t.m(new C.dOy(t,s))
w=7
return A.b(t.vd(),$async$N6)
case 7:case 1:return A.h(u,v)}})
return A.i($async$N6,v)},
cvg(){var w=this,v=w.d
v===$&&A.c()
if(!C.tB(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dP8(w))
w.vd()},
Xf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Xf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bz_(n,t.a.c)){t.xd("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.M(n)
s=$.aw()
r=new A.aq(B.as,s)
q=t.d.e
p=A.bl(new A.J(q,t.gc3Y(),A.T(q).k("J<1,n>")).bY(0,new C.dOK()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.dOL(t,new C.tp(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$Xf)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.Iv()
t.m(new C.dOM(t,p))
w=4
return A.b(t.vd(),$async$Xf)
case 4:t.xd("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Xf,v)},
c3Z(d){return B.a.i(d.toLowerCase())},
c7W(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.tB(v,w)
t=r.d
s=C.hP3(t)
C.hYC(q,t.b,u,C.hP2(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.tp(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a1(l,new C.dPg(),A.T(l).k("a1<1>")).gM(0)
l=n?B.bW:B.iH
v=A.V(B.Yx,n?B.bq:B.bo,o,o,o,18)
u=x.p
v=A.a([new A.C(B.Aj,A.aK(!1,o,!0,new A.C(B.hF,A.A(A.a([v,B.bp,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dPh(p,d),o,o,o,o,o,o,o),o),new A.C(B.mO,p.bT6(m),o)],u)
if(p.d.y===D.ka){t=B.qY.j(0.15)
s=A.m(12)
r=A.I(B.qY.j(0.45),B.r,1)
q=C.FH(p.d,p.a.c)
v.push(new A.C(B.x_,A.p(o,A.A(A.a([D.bGa,B.aw,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.j4,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b8],u)
if(C.tB(p.d,p.a.c)&&p.e.length!==0)u.push(new C.IY("Undo",B.qN,p.gcvf(),m,o,o))
u.push(new C.IY("Family Book",D.bvK,p.gc7V(),m,B.rM,o))
if(C.tB(p.d,p.a.c))u.push(new C.IY("Display settings",B.B2,p.gc96(),m,B.aZ,o))
u.push(new C.IY("Sync",B.xF,p.gadC(),m,o,o))
t=p.d
if(t.y===D.ka||C.bz_(t,p.a.c)){t=p.d.y===D.ka?"Remove shared tree":"Delete tree"
u.push(new C.IY(t,B.e9,p.gbGA(),m,B.fS,o))}if(C.tB(p.d,p.a.c))u.push(new C.IY("Add member",B.v7,new C.dPi(p),m,B.bT,o))
v.push(new A.C(P.afr,A.A(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.gamv()===0){u=A.av(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cm(new C.dPj(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.V(n?L.YB:V.LK,o,o,o,o,o)
v.push(A.av(A.hb(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dPk(p),o),o,o,o))}return A.cc(o,l,A.bq(!0,A.v(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),o,!1,!1,o,o)},
bT6(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fr.j(0.35),B.dp,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.V(B.xx,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a1,!0,m,A.aK(!1,m,!0,A.p(m,D.bJ9,B.f,m,m,new A.o(B.c.j(0.16),m,A.I(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cL,!0,m,m,m,m,m,m,m,m,m,m,m,n.gadC(),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ae)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.ePA,m,m,m)
r=r.gamv()
p=n.d.gamv()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.D(A.v(A.a([q,B.bB,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a4,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.tB(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.bGm,m,m,m,n.gciC(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j7:B.ma
r=r?"Private":"Public"
r=A.D(n.asM(q,"Privacy",r,n.a.d.w?n.gcul():m),1)
q=A.D(n.asM(B.xG,"Tree code",n.d.c,new C.dOz(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ac,A.A(A.a([r,B.ab,q,B.ab,A.D(n.asM(D.bxs,"Collaborators",p,n.gbXt()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.ka){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aF(!1,B.a1,!0,A.m(999),A.aK(!1,A.m(999),!0,new A.C(B.fN,A.A(A.a([A.V(B.oq,B.c,m,m,m,14),B.ea,A.d("View only",m,m,m,m,m,m,B.aMW,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ae)],o))}return A.p(m,A.bv(u,new A.an(B.W,m,B.a9,B.q,A.a([t,new A.C(B.Er,A.v(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.bMt,B.n),m,m,m,m,m,m,m,1/0)},
asM(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a1,!0,A.m(14),A.aK(!1,A.m(14),!0,new A.C(H.agw,A.v(A.a([A.V(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.u5,A.d(f,w,1,B.a2,w,w,w,H.S6,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ae)}}
C.bcc.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gal(r)&&s.c.length===0)return B.bH
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bcf(s,t),new A.at(w,v))],x.p)
r=r.gdK(r)
B.d.v(u,r.dr(r,new C.d3g(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d3h(this),A.T(r).k("J<1,r>")))
return new A.C(B.tc,new A.a5(w,v,new A.an(B.W,t,B.a9,B.f,u,t),t),t)}}
C.J9.prototype={}
C.F_.prototype={}
C.bce.prototype={
gbeu(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aH5.prototype={}
C.bcf.prototype={
bI8(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.W()
v=A.L()
v.r=B.bA.j(0.75).gp(0)
v.c=2
v.d=B.bO
d.bA(new A.u(n,w),new A.u(m,w),v)
u=(n+m)/2
t=new A.aP(q.r,B.aq,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b5(u,q))
s=w-1.1
r=w-8.8
t.E(new A.pl(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.pl(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bE())
q=A.L()
q.r=B.c.gp(0)
d.ag(new A.u(u,w),9,q)
q=A.L()
q.r=B.bA.gp(0)
d.aN(t,q)},
bI6(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b1(a0,new C.d3B())
w=f.b
v=w+(B.d.gK(a0).b-w)/2
u=B.d.b8(a0,new C.d3C(f))
t=new A.J(a0,new C.d3D(f),A.T(a0).k("J<1,O>")).bY(0,new C.d3E()).cI(0,1/0,B.wf)
w=f.a
d.bA(f,new A.u(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.H()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lK(m)
i=Math.min(10,l/2)
l=$.W()
h=A.a([],q)
g=new A.aP(l.r,B.aq,null,null,h)
h.push(new A.b5(w,v-i))
l=j*i
h.push(new A.cR(w,v,w+l,v))
h.push(new A.ap(n-l,v))
h.push(new A.cR(n,v,n,v+i))
h.push(new A.ap(n,o.b))
k=e.H()
n=g.gbI().a.snapshot()
r.drawPath((g.e=new A.cE(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.W()
w=A.L()
w.r=B.bT.j(0.75).gp(0)
w.c=2.2
w.b=B.af
w.d=B.bO
w.e=B.fx
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bI6(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.H()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bI8(d,w,q.a,q.b)}},
ar(d){return d.b!==this.b}}
C.bfT.prototype={
gc1O(){var w=this.c
if(B.a.i(w.y).length!==0)return D.d7Z
switch(w.c.a){case 0:return D.cDO
case 1:return D.cOx
case 2:return D.d2H}},
gc1R(){var w=this.c,v=C.h94(w.w),u=C.h94(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=t.gc1O(),p=t.c,o=K.bzU(p.f),n=t.gc1R(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gam(q).j(0.35),B.cI,10)],m),k=r?B.az:B.c,j=A.I(r?B.az:B.c,B.r,2)
if(o!=null)w=A.rQ(B.A,s,B.cn,B.bQ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gK(q).j(0.18),B.d.gam(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gam(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a6(B.a3,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hR(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a6(B.ax,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.EH,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.I(r?B.az:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eZg,s,s,s),B.f,s,s,new A.o(B.c8,s,w,j,s,s,B.n),s,s,s,s,D.brb,s,s,s),s,s,s,-6,-4,s))}k=r?B.cC:B.c
j=A.m(8)
w=A.I(B.d.gK(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dz,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cC,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bo,s,s,s,s,s,s,s,s,7.5,s,s,B.a4,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aE(s,new A.a5(84,112,A.v(A.a([new A.an(B.W,s,B.a9,B.f,l,s),B.au,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.aVV,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.brm,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.aa)}}
C.bbk.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.W()
w=A.L()
v=this.b
u=v?B.c:D.b6h
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.H()
t.drawCircle(r,s,1,q)
q.delete()}},
ar(d){return d.b!==this.b}}
C.bto.prototype={
B(d){var w=this,v=null,u=new C.f1W(w),t=w.c,s=t?B.cC:B.c,r=A.m(12),q=u.$3(B.hu,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bE:B.f7,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xC,"Zoom out",w.e)
return A.aF(!1,B.a1,!0,r,A.v(A.a([q,p,o,A.p(v,v,B.f,t?B.bE:B.f7,v,v,v,1,v,v,v,v,v,22),u.$3(B.aiQ,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dl,v,v,v,B.ae)}}
C.bja.prototype={
B(d){var w=this,v=null,u=B.bT.j(0.15),t=A.I(B.bT,B.r,2),s=w.e,r=x.p
t=A.aE(v,A.p(v,A.v(A.a([A.V(s?L.YB:V.LK,B.bT,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eVI,v,v,v)],r),B.m,v,B.b9,B.j,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.aa)
u=A.a([t,B.ao,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eTJ,B.L,v,v)],r)
if(s){t=A.a([B.ao],r)
s=w.d
B.d.v(t,new A.J(s,new C.eEd(w),A.T(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a5(84,v,A.v(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.YJ.prototype={
T(){return new C.azX()},
bp(){return this.Q.$0()},
gdV(){return this.w}}
C.azX.prototype={
a_(){var w,v,u,t,s,r=this,q=null
r.a1()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.aq(new A.bb(t,B.b0,B.aN),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.aq(new A.bb(t,B.b0,B.aN),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.aq(new A.bb(t,B.b0,B.aN),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.aq(new A.bb(t,B.b0,B.aN),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.aq(new A.bb(t,B.b0,B.aN),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.aq(new A.bb(t,B.b0,B.aN),s)
t=u?q:v.c
r.y=t==null?D.xc:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hQA(w.r,w.f)
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
Oo(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Oo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fZo(p.y,p.w)
w=3
return A.b(A.l5(t.a.w,B.H4),$async$Oo)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aY_(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Oo)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hsq(p.y,p.w)
t.a.bp()
case 5:w=7
return A.b(Ai.FS(78,800),$async$Oo)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.djr(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Oo,v)},
c1Q(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hT(B.o.u(1000*Date.now()),w,D.xc,null,null,null,"","","","","",1,!1,0)
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
s=v.aBn(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a4(k,!1).N(s)},
a7L(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a7L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.djq(r),s,null,!0,!0,x.y),$async$a7L)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a4(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a7L,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===B.H,i=new C.tp(j),h=l.a.e,g=A.T(h).k("a1<1>"),f=A.B(new A.a1(h,new C.djA(l),g),g.k("G.E"))
h=j?B.dT:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bpH,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.az,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hn(A.aK(!1,k,!0,new A.C(B.m4,A.V(B.e9,B.oc,k,k,k,17),k),B.cL,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbDh(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jj:B.iK
t=K.bzU(l.as)
if(l.as==null)s=A.V(B.oj,j?B.bq:B.bo,k,k,k,40)
else s=k
s=A.av(A.aE(k,new A.an(B.W,k,B.a9,B.q,A.a([A.ho(u,t,s,k,42),A.ao(0,A.ho(B.bT,k,D.bA5,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc1N(),k,k,k,k,k,k,!1,B.aa),k,k,k)
t=l.d
t===$&&A.c()
t=C.azZ(t,"Full name",B.m6,1,1,i,B.lJ)
u=l.y
u===$&&A.c()
u=A.v(A.a([t,B.S,new C.bfR(i,u,new C.djB(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bjf],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.djC(),A.T(o).k("J<1,eN<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bjh],q)
B.d.v(q,new A.J(f,new C.djE(),A.T(f).k("J<1,eN<n?>>")))
o=A.v(A.a([t,B.ao,new C.abH(i,r,"Who is their parent?",p,new C.djF(l),k,o),B.ay,n,B.ao,new C.abH(i,m,"Who is their spouse / partner?",q,new C.djG(l),k,o)],v),B.aj,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.azZ(q,"Birth date",D.ahU,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.azZ(m,"Birth place",B.YQ,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.azZ(n,"Date of death (if deceased)",D.ak7,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.azZ(p,"Occupation",B.ZU,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.a9,B.q,w,k),B.ay,s,B.bu,new C.abI(i,"Identity",u,k),B.ac,new C.abI(i,"Family links",o,k),B.ac,new C.abI(i,"Life details",A.v(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.azZ(r,"Notes",B.kG,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ac,new C.azY(i,"Child order",l.c9j(l.at),new C.djH(l),new C.djI(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fPd(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.djJ(l):k
B.d.v(r,A.a([B.S,new C.azY(i,"Visible in tree",u,w,new C.djK(l),k)],v))}r.push(B.S)
w=j?B.jj:B.iK
u=A.m(14)
t=A.I(j?B.dX:B.bX,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.az,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iB(k,B.bT,k,B.ah,k,new C.djL(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,L.af3,k,k,k))
r.push(B.bu)
w=j?B.aP:B.az
j=j?B.dX:B.bX
r.push(A.A(A.a([A.D(A.dW(B.n7,new C.djD(d),A.dd(k,k,k,k,k,k,k,k,k,w,k,k,B.ce,k,new A.b7(A.m(14),B.Z),new A.aA(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.D(A.bI(D.eyO,l.gc1P(),A.bk(B.aT,k,k,0,B.c,k,B.ce,k,new A.b7(A.m(14),B.Z),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.eh(B.h5,k,B.ah,h,new A.a5(420,k,A.ci(A.v(r,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ai),k),D.afV,k,B.afj,new A.b7(g,B.Z),k,k)},
c9j(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.abI.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jj:B.iK,s=A.m(16)
return A.v(A.a([new A.C(D.agi,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.I(v?B.dX:B.bX,B.r,1),s,w,w,B.n),w,w,w,w,B.bm,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.bfS.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dT:B.c,r=A.m(12),q=A.I((t?B.dX:B.bX).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aP:B.az,u,u,u,u,u,u,u,u,14,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aL(u,B.T,!1,u,!0,B.q,u,A.aM(),v.d,u,u,u,u,u,2,A.bo(u,B.ev,u,B.uN,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bq:B.bo,u,u,u,u,u,u,u,u,u,u,u,B.cs,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bT,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ag,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.abH.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dT:B.c,s=A.m(12),r=A.I((u?B.dX:B.bX).j(0.85),B.r,1),q=A.V(B.qG,u?B.bq:B.bo,v,v,v,v),p=A.l(v,v,u?B.aP:B.az,v,v,v,v,v,v,v,v,14,v,v,B.a4,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dT:B.c
return A.p(v,new A.CW(A.a32(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,v,v,v,B.cs,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lv,v,v,v)}}
C.bfR.prototype={
B(d){var w=new C.djM(this)
return A.A(A.a([w.$3(D.Ya,"Male",B.Mw),B.ab,w.$3(D.ah8,"Female",B.Mh),B.ab,w.$3(D.xc,"Other",B.mS)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.azY.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jj:B.iK,r=A.m(14),q=A.I(t?B.dX:B.bX,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.az,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.D(A.v(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bo,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aG8(u,B.xC,w.f,v),B.bp,new C.aG8(u,B.hu,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eu,v,v,v)}}
C.aG8.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bT.j(0.12)
else w=s.c.a?B.dT:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bT
else t=(s.c.a?B.bq:B.bo).j(0.4)
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,new A.a5(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ae)}}
C.abJ.prototype={
bLM(d){switch(d.a){case 0:return B.bT
case 1:return B.bA
case 2:return B.cU}},
bLN(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aU6(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
zy(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dT:B.c
u=A.m(12)
t=A.I((w?B.dX:B.bX).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.V(f,B.bT,p,p,p,18),B.aw],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bo,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.v(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.az,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.A(r,B.F,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cK,B.wX,p,p,1/0)},
ac6(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jj:B.iK,s=A.m(16),r=A.I(v?B.dX:B.bX,B.r,1)
return A.v(A.a([new A.C(D.agi,u,w),A.p(w,A.v(e,B.m,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bR,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hdL(r,q),o=q.c,n=t.bLM(o),m=K.bzU(q.f),l=t.e.a,k=l?B.dT:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.ka?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bq:B.bo,s,s,s,s,s,s,s,s,12,s,s,B.a4,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.I(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.av(A.p(s,A.ho(u,m,m==null?A.V(B.oj,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.en,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.I(n.j(0.45),B.r,1)
v=A.av(A.p(s,A.d(t.bLN(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.m3,s,s,s),s,s,s)
u=x.p
i=A.a([t.zy("Full name",i,B.m6)],u)
if(p>0)i.push(t.zy("Child order","#"+p,B.Mo))
r=A.a([h,B.au,r,B.aO,l,B.S,v,B.bu,t.ac6("Identity",i),B.ac,t.ac6("Life details",A.a([t.zy("Birth date",q.w,D.ahU),t.zy("Birth place",q.x,B.YQ),t.zy("Date of death",q.y,D.ak7),t.zy("Occupation",q.z,B.ZU)],u)),B.ac,t.ac6("Family links",A.a([t.zy("1. Parent",t.aU6(q.d),B.EV),t.zy("2. Spouse",t.aU6(q.e),B.Mg)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ac,t.ac6("Notes",A.a([t.zy("Notes",q,B.kG)],u))],u))
r.push(B.bu)
r.push(A.bI(B.Ii,new C.djW(d),A.bk(B.aT,s,s,s,s,s,B.ce,s,new A.b7(A.m(14),B.Z),s,s,s)))
return A.eD(s,k,new A.cW(B.lm,A.ci(A.v(r,B.aj,s,B.e,B.Q,0,B.p),B.q,s,B.y,s,B.x1,s,s,B.ai),s),s,s,s,B.Eu,B.cZ,s,new A.b7(j,B.Z),s)}}
C.IY.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bq:B.bo
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.x5,A.hn(A.aF(!1,B.a1,!0,A.m(8),A.aK(!1,A.m(8),!0,new A.a5(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ae),u,v.c,u,u),u)}}
C.anN.prototype={
eH(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a5().ac())
w=u.c
v=A.T(w).k("J<1,a3<n,@>>")
w=A.B(new A.J(w,new C.c5C(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iM(w,new C.c5D(),t,x.U))
return s}}
C.anO.prototype={
T(){return new C.aBx(A.a([],x.bF))},
gd7(){return this.c}}
C.aBx.prototype={
a_(){this.a1()
this.IC()},
IC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$IC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c5G(t.a.c),$async$IC)
case 3:r=e
w=4
return A.b(C.A7(t.a.c),$async$IC)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.qA(q,new C.dPt(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dPu(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$IC,v)},
xK(d){var w=null,v=this.c
if(v==null)return
v.I(x.q).f.R(A.b2(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.U,w,w,w,w,w,w,w,w,w,w))},
Jk(d,e){return this.cxy(d,e)},
cxy(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Jk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dPy(q,e))
t=3
w=6
return A.b(d.$0(),$async$Jk)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dPz(q))
$.eP.m5()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jk,v)},
W5(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oP(r,s.c,s.e),$async$W5)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Jk(new C.dPq(t),"Preparing download\u2026"),$async$W5)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W5,v)},
W9(d){return this.bJQ(d)},
bJQ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oP(r,s.c,s.e),$async$W9)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Jk(new C.dPr(t,d),"Preparing file\u2026"),$async$W9)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W9,v)},
adZ(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$adZ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wH.c3().L2(B.Pk,B.th,!0),$async$adZ)
case 7:r=e
o=r
q=o==null?null:J.fn(o.a)
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
p=A.a8(m)
$.am.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.FR()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adZ,v)},
WK(d){return this.bTY(d)},
bTY(d){var w=0,v=A.j(x.H),u=this
var $async$WK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Jk(new C.dPs(u,d),"Restoring family trees\u2026"),$async$WK)
case 2:return A.h(null,v)}})
return A.i($async$WK,v)},
WJ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$WJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.adZ(),$async$WJ)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.WK(s),$async$WJ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WJ,v)},
a0q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oP(r,s.c,s.e),$async$a0q)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Jk(new C.dPx(t),"Creating QR code\u2026"),$async$a0q)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0q,v)},
a02(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a02=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Cd()){t.xK("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).ci(A.eo(new C.dPv(),!0,null,x.N)),$async$a02)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.WK(r),$async$a02)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a02,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=o?B.zL:B.iH,m=o?D.adC:B.aP,l=o?B.aJ:B.bX,k=o?B.aP:B.az,j=new C.d3F(n,m,l,k,o?B.bI:B.bo)
l=A.aH(p,p,p,p,A.V(B.ez,k,p,p,p,20),p,p,p,new C.dPB(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eC(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d3d(!0,B.j9,B.aV,B.aV,q.r?p:q.gcoP(),j,s,"Show restore QR"),1),B.aw],u))}s=q.e
r=q.r?p:q.gcl4()
t.push(A.D(C.d3d(!s,B.iO,B.b2,B.bz,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d3d(!1,B.hw,B.aT,B.bT,q.r?p:q.gbJJ(),j,"Photos & books included","Download all trees"),1),B.aw],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d3d(!1,M.xJ,B.aL,B.aM,q.r?p:q.gbTV(),j,s,"Upload backup file"),1))
l=A.a([new C.bcd(v,l,p),B.kl,new C.ab_(j,"QR restore",p),B.S,t,B.d5,new C.ab_(j,"Backup files",p),B.S,A.A(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ab(q.d)>1&&q.a.f==null){v=A.a([B.kl,new C.ab_(j,"One tree",p),B.S],u)
B.d.v(v,J.b6(q.d,new C.dPC(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cK(l,p,B.Xi,p,p,B.ai,!1)],u)
if(q.r){v=A.m(18)
t=A.I(B.aT.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dp,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bq(!0,A.p(p,A.A(A.a([L.aLq,B.bd,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.Ap,p,p,p),!0,!1,B.ah,!0,!1),p,p,20,20,p,p))}return A.cc(w,n,new A.an(B.W,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d3F.prototype={}
C.bcd.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aT.j(0.32),B.jT,28)],x.V)
t=A.ao(p,A.V(B.tx,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.W,p,B.a9,B.q,A.a([t,new A.C(B.a8,A.A(A.a([A.p(p,D.bII,B.f,p,p,new A.o(s,p,A.I(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nS,A.D(A.v(A.a([D.f31,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.bPz,B.n),p,p,p,p,p,p,p,p)}}
C.ab_.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aT,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ab,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.bcb.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aV.j(0.4):m.c
k=A.I(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aV.j(0.1),B.cI,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.I(t.j(0.35),B.r,1)
return A.aF(!1,B.a1,!0,q,A.aK(!1,o,!0,A.ex(A.db(new A.C(E.WX,A.v(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qA,q,q,q),B.ac,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cs,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.K,0,q,q,q,q,q,B.ae)}}
C.bcg.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.I(s.c,B.r,1),q=B.aT.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a1,!0,v,A.aK(!1,u,!0,A.ex(new A.C(B.eN,A.A(A.a([A.p(v,D.bHX,B.f,v,v,new A.o(q,v,A.I(B.aT.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qA,v,v,v),B.bd,A.D(A.v(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.V(B.hw,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.K,0,v,v,v,v,v,B.ae)}}
C.Z3.prototype={
T(){return new C.aBw()},
gd7(){return this.c}}
C.aBw.prototype={
a_(){this.a1()
this.a7h()},
a7h(){var w=0,v=A.j(x.H),u=this,t
var $async$a7h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b_C(u.a.c,B.C0),$async$a7h)
case 2:t=e
if(u.c!=null)u.m(new C.dPl(u,t))
return A.h(null,v)}})
return A.i($async$a7h,v)},
afl(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$afl=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dPm(q))
t=4
p=A.h01(q.a.d,B.C0)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.S(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aq0(n.e,m,l,B.C0,p,n.f),$async$afl)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dPn(q))
q.c.I(x.q).f.R(D.eH7)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a8(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(B.a.e5(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dPo(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afl,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.M(d).ax.a===B.H,o=p?B.j_:B.pc,n=p?B.i4:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eC(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fhZ,q,q,q,1,q,!0)
w=A.m(24)
v=A.I(B.aT.j(0.35),B.r,1)
u=A.pv(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aT,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.v(A.a([B.P,u,B.bu,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.ak,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b9,B.j,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ad:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gckN()
if(u)u=B.HS
else u=A.V(r.e===!0?B.hv:B.ahT,q,q,q,q,q)
w=A.a([w,B.ac,v,B.ac,new A.a5(1/0,q,A.ez(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.dd(q,q,q,q,q,q,q,q,q,B.aT,q,B.fH,q,q,q,new A.aA(B.aT.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.it,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.S)
w.push(new A.a5(1/0,q,A.bI(B.z_,new C.dPp(d),A.bk(B.aT,q,q,q,q,B.fH,q,q,q,q,q,q)),q))
return A.cc(m,o,new A.C(B.a8,A.v(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Z4.prototype={
T(){return new C.bhi(A.yG(B.wN,B.ne,B.tB))}}
C.bhi.prototype={
q(){this.d.q()
this.a2()},
B(d){var w=null
return A.cc(A.eC(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fav,w,w,w,1,w,!0),B.w,A.yF(this.d,B.bQ,new C.dPD(this,d)),w,!1,!1,w,w)}}
C.aWy.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.OQ,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lo.prototype={}
C.a4V.prototype={
T(){return new C.bh0(null,null)}}
C.bh0.prototype={
a_(){var w=this,v=null
w.a1()
w.d=A.bj(v,B.t7,v,1,v,w)
w.e=A.bj(v,B.ph,v,1,v,w)
w.a.toString
w.d.cF(0)
w.e.cF(0)},
br(d){var w,v,u=this
u.bE(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cF(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.br_()},
B(d){var w,v,u=this,t=B.d.dL(D.a1v,new C.dBr(u),new C.dBs())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cqL(A.c6(new A.h2(A.a([w,v],x.dS)),new C.dBt(u,t),null),!0)}}
C.bh_.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aYc(d,e)
break
case"house":p.lH(d,e,D.cSV)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gea()
$.W()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ag(new A.u(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lM(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Af(d,e,12)
p.xm(d,e,B.kX,5,14)
break
case"grocery":p.ca1(d,e)
break
case"calculator":p.c9J(d,e)
break
case"lumber":p.ca9(d,e)
break
case"kitchen":p.ca4(d,e)
break
case"landscape":p.lH(d,e,D.cTn)
s=new A.aP($.W().r,B.aq,null,null,A.a([],x.v))
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
w=A.L()
w.r=B.ft.j(0.85).gp(0)
d.aN(s,w)
p.Af(d,e,8)
p.xm(d,e,B.iM,4,18)
break
case"plumbing":p.cai(d,e)
break
case"electrical":p.lH(d,e,D.d20)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.W()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aX(new A.a9(0,0,0+e.a,0+e.b),u)
p.lM(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lM(d,e,B.lq.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Af(d,e,10)
break
case"store":p.car(d,e)
break
case"paint_remodel":p.cad(d,e)
break
case"roofing":p.cak(d,e)
break
case"warehouse":p.cay(d,e)
break
case"vehicles":p.caw(d,e)
break
case"farm":p.c9W(d,e)
break
case"restaurant":p.caj(d,e)
break
case"tools":p.cau(d,e)
break
case"wallet":p.cax(d,e)
break
case"concrete":p.c9P(d,e)
break
case"blueprint":p.c9H(d,e)
break
default:p.aYc(d,e)}},
lH(d,e,f){var w,v=new A.a9(0,0,0+e.a,0+e.b)
$.W()
w=A.L()
w.sau(new A.a6(B.ax,B.aC,B.x,f,null,null).aw(0,v))
d.aX(v,w)},
lM(d,e,f,g,h){var w,v,u,t,s,r,q=new A.u(e.a/2,e.b/2),p=e.gea()/2-h
$.W()
w=A.L()
w.b=B.af
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bT(q,p)
r=w.H()
v.drawArc.apply(v,[A.c4(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
xm(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gea()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.H()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
Af(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.H()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aYc(d,e){var w,v=this
v.lH(d,e,D.d0R)
w=v.c
v.lM(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lM(d,e,B.bJ.j(0.45),-w*3.141592653589793*1.4,22)
v.bI2(d,e,B.hS,w)
v.xm(d,e,B.c.j(0.7),6,8)},
bI2(d,e,f,g){var w,v,u,t,s,r,q,p
$.W()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.H()
s.drawRect(A.c4(new A.a9(16,q,t,q+3)),p)
p.delete()}},
ca1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lH(d,e,D.c9U)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.an(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.W()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
l.r=D.cRh[B.o.F(s,4)].j(0.85).gp(0)
k=l.H()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lM(d,e,B.c.j(0.35),w,16)
j.xm(d,e,B.iM,5,12)},
c9J(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lH(d,e,D.ca0)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gea()
$.W()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ag(new A.u(t/2,s/2),r*(0.18+u*0.08),q)
p=A.ih(g,g,g,g,g,B.a5,B.ci,g,B.eq,B.cg)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cUQ[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saU(0,new A.es(r,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eR()
p.a6(d,new A.u(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.an(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.ca2[o]
l=B.k2.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saU(0,new A.es(m,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.eR()
p.a6(d,new A.u(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.an(o,3)*0.38)+Math.sin(n)*6))}h.lM(d,e,B.c.j(0.35),w*1.5,14)
h.lM(d,e,B.ex.j(0.55),-v*3.141592653589793*2,8)
h.lM(d,e,B.zM.j(0.4),r*2.8,22)
h.xm(d,e,B.p3,8,10)
h.Af(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.W()
r=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.H()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
ca9(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lH(d,e,X.atr)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.by(new A.a9(20,q,u,q+10),B.i1)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=A.ar(B.fW,B.o2,(r+1)/2).gp(0)
n=o.H()
t.drawRRect(A.ew(p),n)
n.delete()}m.lM(d,e,B.fW.j(0.35),w,15)
m.Af(d,e,8)},
ca4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lH(d,e,D.cRM)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.W()
l=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.H()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lM(d,e,B.bJ.j(0.4),-w*3.141592653589793*2.2,11)
j.xm(d,e,B.qf,4,14)},
cai(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lH(d,e,D.cHp)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.W()
n=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
n.b=B.af
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.H()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.xm(d,e,B.oa,6,12)
l.lM(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
car(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lH(d,e,D.cnk)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.by(new A.a9(q,14,q+u,22),B.hN)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=A.ar(B.f5,B.bJ,(r+1)/2).gp(0)
o=p.H()
t.drawRRect(A.ew(q),o)
o.delete()}n.lM(d,e,B.c.j(0.3),w,16)
n.Af(d,e,8)
n.xm(d,e,B.ut,5,13)},
cad(d,e){var w,v,u,t,s,r,q,p,o
this.lH(d,e,D.cMY)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.by(new A.a9(q,p,q+8,p+(18+r*22)),B.h8)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=[B.ii,B.dx,B.bJ,B.ew][s].j(0.85).gp(0)
o=q.H()
t.drawRRect(A.ew(p),o)
o.delete()}this.lM(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cak(d,e){var w,v,u,t,s,r,q,p,o
this.lH(d,e,D.cKA)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.H()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.xm(d,e,B.cm,7,11)},
cay(d,e){var w,v,u,t,s,r,q,p,o,n
this.lH(d,e,D.cpZ)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.by(new A.a9(p,o,p+(t-r*8),o+16),B.i1)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=A.ar(B.cm,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.H()
s.drawRRect(A.ew(o),n)
n.delete()}this.lM(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
caw(d,e){var w,v,u,t,s,r,q,p,o
this.lH(d,e,D.d5H)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.by(new A.a9(r,q,r+28,q+8),B.i1)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.H()
t.drawRRect(A.ew(q),o)
o.delete()}this.Af(d,e,6)},
c9W(d,e){var w,v,u,t,s,r,q,p,o,n
this.lH(d,e,D.cQr)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.W()
s=A.L()
s.r=B.lq.j(0.75).gp(0)
d.ag(new A.u(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.fX.j(0.85).gp(0)
o.c=3
n=o.H()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lM(d,e,B.lq.j(0.35),w,14)},
caj(d,e){var w,v,u,t,s,r,q,p,o=this
o.lH(d,e,D.cSK)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.cr(new A.u(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.W()
q=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
q.r=B.c.j(0.22).gp(0)
p=q.H()
t.drawOval(A.c4(r),p)
p.delete()}o.xm(d,e,B.qf,5,16)
o.Af(d,e,7)},
cau(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lH(d,e,D.d3p)
w=m.c
v=w*3.141592653589793
m.lM(d,e,B.o2.j(0.55),v*3,10)
m.lM(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.W()
o=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.o2.j(0.8).gp(0)
n=o.H()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cax(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lH(d,e,D.d6c)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.by(new A.a9(p,o,p+36,o+22),B.hN)
$.W()
p=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
p.r=A.ar(B.iM,B.lq,q).gp(0)
n=p.H()
s.drawRRect(A.ew(o),n)
n.delete()}m.Af(d,e,9)
m.lM(d,e,B.c.j(0.4),w*2.2,12)},
c9P(d,e){var w,v,u,t,s,r,q,p,o,n
this.lH(d,e,D.cXr)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bT(new A.u(v,u),34)
$.W()
s=A.L()
s.b=B.af
s.c=5
s.r=B.c.j(0.45).gp(0)
d.ff(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.as(B.X,B.V,B.a_,B.a0,B.Y)
o.r=B.bX.j(0.85).gp(0)
n=o.H()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c9H(d,e){var w,v,u,t,s,r,q,p
this.lH(d,e,D.cTD)
$.W()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.H()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.H()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.W()
u=A.L()
u.r=B.dx.j(0.45).gp(0)
d.aX(new A.a9(0,p,0+v,p+6),u)
this.lM(d,e,B.kX.j(0.45),-t*3.141592653589793*2,11)},
ar(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aqH.prototype={
YK(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aNX(),$async$YK)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a78(s),$async$YK)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$YK,v)},
ae_(d){return this.ccO(d)},
ccO(d){var w=0,v=A.j(x.H),u=this,t
var $async$ae_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hYM(d),$async$ae_)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ae_,v)},
B(d){var w,v,u,t=null,s=A.M(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.jj:B.iK
w=x.p
v=A.a([C.aOk(!0,B.q7,1/0,B.pp,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bX(new A.bK(B.b1,t,t,new A.C(B.uH,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.auj,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a6(B.b1,B.b3,B.x,u,t,t),B.n),B.be))}v.push(A.ao(8,A.A(A.a([A.D(A.dp(D.bBR,D.f_w,new C.cd9(this,d),A.bk(B.aT,t,t,t,B.c,t,B.jM,t,t,t,t,B.c7)),1),B.ab,A.D(A.ez(D.bJV,D.fdt,this.gc3W(),A.dd(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jM,t,t,D.aUv,t,t,t,B.c7)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fF(1.7777777777777777,A.aF(!1,B.a1,!0,B.q7,new A.an(B.W,t,B.b_,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.ae),t)}}
C.aJr.prototype={
aQ(){this.aY()
this.aW()
this.dF()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdD())
w.b2$=null
w.a2()}}
C.aRb.prototype={}
C.aRa.prototype={}
C.aPg.prototype={}
C.XI.prototype={
T(){return new C.awM()}}
C.awM.prototype={
a_(){var w,v,u=this
u.a1()
u.a.toString
w=new A.bb("",B.b0,B.aN)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.aq(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Jb(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.I(x.q).f.R(D.eHC)
return}t=u.c
t.toString
v=u.e
A.a4(t,!1).N(new C.aRb(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.M(d).ax.a===B.H,l=m?B.dT:B.c,k=A.m(20),j=A.p(n,D.bJA,B.f,n,n,new A.o(B.aT.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.az,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.v(A.a([i,B.bB,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bo,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aH(n,n,n,n,A.V(B.cv,m?B.bq:B.bo,n,n,n,n),n,n,n,new C.cWo(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bo,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bq:B.bo,n,n,n,n,n,n,n,n,11,n,n,B.cs,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.h0h(new C.cWp(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.az,n,n,n,n,n,n,n,n,n,n,n,B.a4,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jj:B.iK
r=A.m(12)
q=A.m(12)
p=m?B.dX:B.bX
t=A.aL(n,B.T,!0,n,!0,B.q,n,A.aM(),u,n,n,n,n,n,2,A.bo(n,new A.b4(4,r,B.df),n,n,n,n,n,n,!0,new A.b4(4,q,new A.aA(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ag,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cWq(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,Z.HW,n,n,n,n)
u=m?B.aP:B.az
m=m?B.dX:B.bX
return A.eD(n,l,new A.cW(B.lm,A.ci(A.v(A.a([j,B.aO,i,B.au,w,B.P,v,B.aO,t,B.bu,A.A(A.a([A.D(A.dW(B.dd,new C.cWr(d),A.dd(n,n,n,n,n,n,n,n,n,u,n,n,B.ce,n,new A.b7(A.m(12),B.Z),new A.aA(m,1,B.r,-1),n,n,n,n)),1),B.aw,A.D(A.bI(D.fdI,o.ga0I(),A.bk(B.aT,n,n,n,B.c,n,B.ce,n,new A.b7(A.m(12),B.Z),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.Q,0,B.p),B.q,n,B.y,n,B.Aq,n,n,B.ai),n),n,n,n,U.Ar,B.cZ,n,new A.b7(k,B.Z),n)}}
C.XH.prototype={
T(){return new C.awL()}}
C.awL.prototype={
a_(){this.a1()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.aq(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
Jb(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.I(x.q).f.R(D.eFj)
return}v=this.c
v.toString
A.a4(v,!1).N(new C.aRa(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.M(d).ax.a===B.H,o=p?B.dT:B.c,n=A.m(20),m=A.p(q,D.bGf,B.f,q,q,new A.o(B.bT.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.az,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.v(A.a([l,B.bB,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bq:B.bo,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aH(q,q,q,q,A.V(B.cv,p?B.bq:B.bo,q,q,q,q),q,q,q,new C.cWk(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aT.j(p?0.12:0.08)
w=A.m(12)
v=A.I(B.aT.j(0.25),B.r,1)
u=A.V(B.ahF,B.aT.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.aw,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.az,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.by,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.az,q,q,q,q,q,q,q,q,q,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jj:B.iK
t=A.m(12)
s=A.m(12)
r=p?B.dX:B.bX
v=A.aL(q,B.T,!0,q,!0,B.q,q,A.aM(),w,q,q,q,q,q,2,A.bo(q,new A.b4(4,t,B.df),q,q,q,q,q,q,!0,new A.b4(4,s,new A.aA(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ag,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cWl(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.km,q,q,q,q)
w=p?B.aP:B.az
p=p?B.dX:B.bX
return A.eD(q,o,new A.cW(B.lm,A.ci(A.v(A.a([m,B.aO,l,B.ay,v,B.bu,A.A(A.a([A.D(A.dW(B.dd,new C.cWm(d),A.dd(q,q,q,q,q,q,q,q,q,w,q,q,B.ce,q,new A.b7(A.m(12),B.Z),new A.aA(p,1,B.r,-1),q,q,q,q)),1),B.aw,A.D(A.bI(D.fk7,this.ga0I(),A.bk(B.bT,q,q,q,B.c,q,B.ce,q,new A.b7(A.m(12),B.Z),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.Q,0,B.p),B.q,q,B.y,q,B.Aq,q,q,B.ai),q),q,q,q,U.Ar,B.cZ,q,new A.b7(n,B.Z),q)}}
C.Xf.prototype={
T(){return new C.avv()}}
C.avv.prototype={
a_(){var w,v=this
v.a1()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.aq(B.as,w)
v.e!==$&&A.aQ()
v.e=new A.aq(new A.bb("1",B.b0,B.aN),w)
v.f!==$&&A.aQ()
v.f=new A.aq(B.as,w)
v.r!==$&&A.aQ()
v.r=new A.aq(B.as,w)},
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
gIx(){var w,v=this.e
v===$&&A.c()
w=A.d3(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gah7(){var w=this.f
w===$&&A.c()
w=A.d3(B.a.i(w.a.a))
return w==null?0:w},
gb_Z(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aLx(d){var w,v=B.k.D(this.gIx()+d,0.25,999999),u=B.k.jJ(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.O(v))
else{u=B.k.aa(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.saU(0,u)
this.m(new C.ctY())},
avl(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aT,w,w,w,20):w,u=d.a,t=u?B.jj:B.iK,s=A.m(14),r=A.m(14)
u=u?B.dX:B.bX
return A.bo(w,new A.b4(4,s,B.df),w,B.by,w,w,w,w,!0,new A.b4(4,r,new A.aA(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b4(4,A.m(14),B.a8G),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c3X(d,e,f){return this.avl(d,e,f,null)},
Jb(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gah7()<=0){s.c.I(x.q).f.R(D.eJt)
return}r=s.c
r.toString
v=s.gIx()
u=s.gah7()
t=s.gb_Z()
A.a4(r,!1).N(new C.aPg(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.M(d).ax.a===B.H,m=new C.tp(n),l=n?B.dT:B.c,k=A.m(24),j=x.O,i=A.a([B.aT.j(0.22),B.bT.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bzO,B.f,o,o,new A.o(o,o,A.I(B.aT.j(0.35),B.r,1),h,o,new A.a6(B.a3,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.v(A.a([h,B.bB,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.cs,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aH(o,o,o,o,A.V(B.cv,n?B.bq:B.bo,o,o,o,o),o,o,o,new C.cu3(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,o,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aL(o,B.T,!0,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.avl(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Mu),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,Z.HW,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jj:B.iK
t=A.m(14)
s=A.I(n?B.dX:B.bX,B.r,1)
r=A.aH(o,o,o,o,A.V(B.xC,n?B.aP:B.az,o,o,o,20),o,o,o,new C.cu4(p),o,o,o,o,o,B.c7)
q=p.e
q===$&&A.c()
q=A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),q,o,o,o,o,o,2,D.bLr,B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,B.dR,o,o,o,1,o,o,!1,"\u2022",o,new C.cu5(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.V(B.hu,n?B.aP:B.az,o,o,o,20),o,o,o,new C.cu6(p),o,o,o,o,o,B.c7)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.aw,A.D(A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),t,o,o,o,o,o,2,p.avl(m,"Amount","0.00",B.hW),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,B.dR,o,o,o,1,o,o,!1,"\u2022",o,new C.cu7(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.B(new A.J(D.cNp,new C.cu8(p,m),t),t.k("aj.E"))
i=A.a([i,B.bu,v,B.ay,h,B.P,s,B.ac,A.c5(B.bG,u,B.bx,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.S,A.aL(o,B.T,!1,o,!0,B.q,o,A.aM(),h,o,o,o,o,o,2,p.c3X(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ag,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cu9(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.km,o,o,o,o)],w))}i.push(B.aO)
h=B.aT.j(n?0.18:0.1)
j=A.a([h,B.bT.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.I(B.aT.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gIx()===B.k.jJ(p.gIx())?B.k.O(p.gIx()):p.gIx()
s=p.gb_Z()
r=A.A9(p.gah7())
i.push(A.p(o,A.A(A.a([A.D(A.v(A.a([u,B.au,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bq:B.bo,o,o,o,o,o,o,o,o,12,o,o,B.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.bAG(p.gIx()*p.gah7(),B.aZ,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a6(B.a3,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.j5,o,o,o))
i.push(B.bu)
j=A.m(14)
h=n?B.dX:B.bX
h=A.dd(o,o,o,o,o,o,o,o,o,o,o,o,B.ce,o,new A.b7(j,B.Z),new A.aA(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.D(A.dW(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.az,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cua(d),h),1),B.aw,A.D(A.dp(D.al9,D.fgl,p.ga0I(),A.bk(B.aT,o,o,0,B.c,o,B.ce,o,new A.b7(A.m(14),B.Z),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.eD(o,l,new A.cW(T.a93,A.ci(A.v(i,B.aj,o,B.e,B.Q,0,B.p),B.q,o,B.y,o,A8.qz,o,o,B.ai),o),o,o,o,B.L8,B.cZ,o,new A.b7(k,B.Z),o)}}
C.a_M.prototype={
T(){return new C.btg()}}
C.btg.prototype={
a_(){var w,v,u=this
u.a1()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.aq(new A.bb(w,B.b0,B.aN),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.M(d).ax.a===B.H,q=r?B.dT:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.az,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.az,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jj:B.iK
v=A.aL(s,B.T,!0,s,!0,B.q,s,A.aM(),w,s,s,s,s,s,2,A.bo(s,new A.b4(4,A.m(12),B.df),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.f1o(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.am,s,s,s,s)
u=A.D(A.dW(B.dd,new C.f1p(d),s),1)
r=A.bk(B.bT,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eD(s,q,new A.C(B.Aq,A.v(A.a([o,B.ay,v,B.aO,A.A(A.a([u,B.aw,A.D(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.f1q(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.cZ,s,new A.b7(p,B.Z),s)}}
C.aa2.prototype={
a4(){return"WorksheetFrameStyle."+this.b}}
C.EN.prototype={
T(){return new C.bte(null,null)}}
C.bte.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,D.bjP,null,1,null,v)
w.cF(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.btk()},
gbuH(){switch(this.a.r.a){case 1:return A.a([B.aT,B.bT,B.aZ],x.O)
case 2:return A.a([B.bs,B.aT,B.aZ],x.O)
case 3:return A.a([B.aV,B.c8,B.jF],x.O)
case 4:return A.a([B.hr,B.bT,B.f6],x.O)
case 0:return A.a([B.aT,B.bT,B.aZ],x.O)}},
B(d){var w=A.M(d),v=this.d
v===$&&A.c()
return new A.eq(A.c6(v,new C.f1m(this,new C.tp(w.ax.a===B.H)),null),null)}}
C.avo.prototype={
T(){return new C.btf(null,null)}}
C.btf.prototype={
a_(){var w,v=this
v.a1()
w=A.bj(null,B.mL,null,1,null,v)
w.cF(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.btl()},
B(d){var w=this.d
w===$&&A.c()
return A.c6(w,new C.f1n(this),null)}}
C.btd.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.by(new A.a9(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aX(w,w))
u=new A.aP($.W().r,B.aq,null,null,A.a([],x.v))
u.E(new A.iS(v))
w=A.L()
w.b=B.af
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aC(v,w)
w=A.L()
w.b=B.af
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aN(u,w)
w=A.wF(u)
t=A.a([],x.f5)
w=new A.vd(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.ba(A.jO('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.GD(w,r)
w.jb()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aOR(d,q,r,o,0,0.2,4.2,0.92)
p.aOR(d,q,r,s,0.52,0.11,3.2,0.58)}},
aOR(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hlH(e.a.a,e,t,t+f*i,!0),r=A.bz2(s.gbI().a.getBounds())
$.W()
w=A.L()
w.b=B.af
w.c=j
w.d=B.bO
w.f=!0
v=this.f
u=k*this.e
w.sau(new A.a6(B.a3,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.G8,null).aw(0,r))
d.aN(s,w)},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aLA.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.aLB.prototype={
q(){var w=this,v=w.a7$
if(v!=null)v.a3(0,w.gbu())
w.a7$=null
w.a2()},
aQ(){this.aY()
this.aW()
this.bv()}}
C.tp.prototype={}
C.aqG.prototype={
T(){return new C.aD1()},
gdV(){return this.c}}
C.aD1.prototype={
a_(){var w=this
w.a1()
w.d=w.a.d
w.aeQ()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Km(w,v)
this.a2()},
aeQ(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aeQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bza(t.c,t.d.a),$async$aeQ)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eBn(u,s))
return A.h(null,v)}})
return A.i($async$aeQ,v)},
OO(){var w=0,v=A.j(x.H),u=this,t,s
var $async$OO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eBe(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Km(t,s),$async$OO)
case 2:if(u.c!=null)u.m(new C.eBf(u))
return A.h(null,v)}})
return A.i($async$OO,v)},
Pj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.M(p)
s=t.c
s.toString
w=3
return A.b(A.c9(null,null,!0,null,new C.eBl(t,new C.tp(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$Pj)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a78(q),$async$Pj)
case 6:case 5:t.m(new C.eBm(t,r))
w=7
return A.b(t.OO(),$async$Pj)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Pj,v)},
Um(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Um=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hYx(r),$async$Um)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eB9(t,new C.qE(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.OO(),$async$Um)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Um,v)},
c8W(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hdI(t,new C.eBd(u),w,v)},
a92(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bU(new A.aA(v,2.5,B.r,-1),B.Z,B.Z,new A.aA(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aUh,w,w,B.n),w,22,w,w,w,w,w,22)},
a88(d){return this.bGn(d)},
bGn(d){var w=0,v=A.j(x.H),u=this
var $async$a88=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eBc(u,d))
w=2
return A.b(u.OO(),$async$a88)
case 2:return A.h(null,v)}})
return A.i($async$a88,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.M(a2).ax.a===B.H,e=f?B.bW:B.iH,d=A.m(8),a0=A.V(O.Yy,f?B.bq:B.bo,g,g,g,16),a1=x.p
a0=A.aK(!1,d,!0,new A.C(B.EA,A.A(A.a([a0,B.bp,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bo,g,g,g,g,g,g,g,g,g,g,g,B.a4,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eBo(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.W,g,B.b_,B.q,A.a([A.bv(A.m(22),C.aOk(!0,A.m(22),1/0,B.pp,g,d,1/0),B.ap),A.ao(10,A.dp(D.bEk,D.fis,h.gaYW(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h2,g,new A.b7(A.m(12),B.Z),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aT.j(f?0.5:0.38),B.eQ,22),new A.ac(-4,B.G,B.bT.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.I(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.an(B.W,g,B.b_,B.q,A.a([C.aOk(!0,A.m(16),1/0,B.LV,g,r.c,1/0),A.bX(g,new A.o(g,g,g,g,g,new A.a6(B.b1,B.b3,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.be),A.ao(g,h.a92(!0),g,g,8,g,8,g),A.ao(g,A.crv(h.a92(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.crv(h.a92(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.crv(h.a92(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dp(D.bAn,D.fcv,h.gaYW(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h2,g,new A.b7(A.m(12),B.Z),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.bMe,B.n),g,g,g,g,B.m4,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.az,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.b3k,B.nl,B.h_],u):A.a([B.aZ,B.aT,B.bT],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aT.j(f?0.45:0.35),B.eQ,24)],t)
r=A.m(22)
p=A.ao(g,A.V(B.jr,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.I(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h1,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ao,C.bAG(h.d.gwp(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cs,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.v(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.I(B.fZ.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aV.j(0.28),B.cI,14)],t)
j=B.aV.j(0.22)
i=A.m(10)
u=A.p(g,A.bv(r,new A.an(B.W,g,B.a9,B.q,A.a([p,new A.C(D.bot,A.A(A.a([o,B.aw,A.aF(!1,B.a1,!0,g,A.aK(!1,n,!0,A.ex(new A.C(Ac.WW,A.v(A.a([A.p(g,D.akJ,B.f,g,g,new A.o(j,g,A.I(B.aV.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cl,g,g,g),B.ha,D.f29],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc8V(),g,g,g,g,g,g,g),B.f,B.K,0,g,g,g,g,g,B.ae)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a6(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bu,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.az,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b8,A.dp(Af.a_f,D.f06,h.gbv9(),A.bk(B.aT,g,g,g,B.c,g,B.j4,g,new A.b7(A.m(12),B.Z),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ac],a1)
w=h.d.d
if(w.length===0){w=f?B.dT:B.c
v=A.m(14)
u=A.I(f?B.dX:B.bX,B.r,1)
t=A.V(B.YT,f?B.bq:B.bo,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.az,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.v(A.a([t,B.S,s,B.ao,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bq:B.bo,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.tf,g,g,1/0))}else B.d.v(d,new A.J(w,new C.eBp(h,new C.tp(f)),A.T(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.Ac,A.av(A.mz(g,f?B.bq:B.bo,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cc(g,e,A.bq(!0,A.v(A.a([new A.C(B.Aj,a0,g),A.D(A.ci(A.v(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.y,g,E.x3,g,g,B.ai),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),g,!1,!1,g,g)},
byH(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dT:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cI,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.aWX,u,u,u,u,u,u,u,5),l=B.aT.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.hH:B.h4,B.aZ,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bH
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.az,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcNm()
v=A.A9(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bq:B.bo,u,u,u,u,u,u,u,u,12,u,u,B.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.v(t,B.F,u,B.b9,B.Q,0,B.p)}t=A.D(t,1)
k=A.a([B.aT.j(0.14),B.bT.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bAG(d.c*d.d,B.aZ,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a6(B.a3,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h2,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.H5(A.A(A.a([m,A.D(new A.C(B.aeX,A.A(A.a([l,B.bd,t,B.ab,k,A.aH(u,u,u,u,A.V(B.cv,(r?B.bq:B.bo).j(0.75),u,u,u,20),u,u,u,new C.eBa(this,d),u,u,u,u,u,B.c7)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.aj,u,B.e,B.j,0,u,u),u),B.ap),B.f,u,D.aVR,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d8,u,u,u,u)}}
C.ac3.prototype={
DC(d){return this.bHF(d)},
bHF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$DC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oP(d,o,!1),$async$DC)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).N(null)
w=4
return A.b(A.bN(A7.Aa,null,x.H),$async$DC)
case 4:s=t.d
w=5
return A.b(C.fwW(!0,o,s),$async$DC)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.FG(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$DC)
case 6:p=f
w=7
return A.b(A.oO(o,!1),$async$DC)
case 7:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$DC,v)},
YL(d){return this.coQ(d)},
coQ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$YL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oP(d,s,!1),$async$YL)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).N(null)
A.ht(d,new C.aqA(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oO(s,!1),$async$YL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YL,v)},
OP(d){return this.cl_(d)},
cl_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).N(null)
w=3
return A.b(A.ht(d,D.aDy,!0,"NgmyWorksheetProjectScan",x.N),$async$OP)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bAH(s),$async$OP)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.I(x.q).f.R(D.eIC)
w=1
break}q=C.fRu(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dR(p,x.H),$async$OP)
case 5:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
YM(d){return this.cwx(d)},
cwx(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$YM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).N(null)
w=3
return A.b(C.bAe(),$async$YM)
case 3:s=f
if(s==null){w=1
break}r=C.fRu(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dR(q,x.H),$async$YM)
case 4:if(d.e==null){w=1
break}d.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$YM,v)},
B(d){var w=this,v=null,u=A.M(d).ax.a===B.H,t=new C.tp(u),s=w.d.d.length,r=u?B.dT:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.jT,36)],x.V),o=x.p
return A.bq(!0,new A.C(B.uO,A.p(v,A.v(A.a([w.cnr(d,t,s),new A.C(D.bnS,A.v(A.a([w.b0S(t,"QR restore"),B.S,A.A(A.a([w.aWX(t,!0,B.j9,B.aV,B.aV,new C.eBr(w,d),"Show to scan","QR code"),B.aw,w.avm(t,B.iO,B.b2,B.bz,new C.eBs(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d5,w.b0S(t,"Backup files"),B.S,A.A(A.a([w.avm(t,B.hw,B.aT,B.bT,new C.eBt(w,d),"Full copy","Backup file"),B.aw,w.avm(t,M.xJ,B.aL,B.aM,new C.eBu(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ah,!0,!0)},
cnr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eV,B.cY,B.fr],k):A.a([B.aZ,B.aT,B.bT],k)
w=A.ao(l,A.V(B.tx,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.av(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kz,l,l,l,36),l,l,l)
u=A.m(14)
t=A.I(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cI,12)],x.V)
r=this.d
s=A.p(l,C.aOk(!0,A.m(13),64,D.bvE,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,D.aNQ,l,l,l)
r=C.bAG(r.gwp(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.I(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.W,l,B.a9,B.q,A.a([w,new A.C(D.bof,A.v(A.a([v,A.A(A.a([s,B.eA,A.D(A.v(A.a([u,B.au,t,B.P,A.A(A.a([r,B.ab,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fE,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aH(l,l,l,l,A.V(B.cv,B.c.j(0.85),l,l,l,l),l,l,l,new C.eBq(d),l,l,l,A.nl(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aLf,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a6(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b0S(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aT,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bq:B.bo,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aWX(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.adC:B.aP
if(e)w=B.aV.j(o?0.45:0.35)
else{w=o?B.dX:B.bX
w=w.j(o?0.8:1)}w=A.I(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aV.j(0.12),B.cI,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.I(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qA,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.az,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.ex(new A.C(E.WX,A.v(A.a([t,B.ac,u,B.bB,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bq:B.bo,r,r,r,r,r,r,r,r,11,r,r,B.cs,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ae),1)},
avm(d,e,f,g,h,i,j){return this.aWX(d,!1,e,f,g,h,i,j)}}
C.aqA.prototype={
T(){return new C.biE()}}
C.biE.prototype={
a_(){this.a1()
this.acJ()},
acJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$acJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bAI(p.c,p.d),$async$acJ)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eB4(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eB5(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$acJ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.M(d).ax.a===B.H,f=g?B.zL:B.iH,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.V(B.ez,g?B.ad:B.ak,h,h,h,18),h,h,h,new C.eB6(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.yN],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eV,B.cY,B.fr],s):A.a([B.aZ,B.aT,B.bT],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aT.j(g?0.4:0.3),B.eQ,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dI,B.L,h,h)
p=C.bAG(p.gwp(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.v(A.a([o,B.ao,A.A(A.a([p,B.ab,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fE,h,h,h)],u),B.m,h,B.b9,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a6(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Xh,h,h,1/0)
t=g?D.bc3:B.c
q=A.m(24)
p=A.I(w?B.aV.j(0.4):B.aT.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dp,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a5M,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dYn)
else{m=A.m(20)
l=A.I(B.aK,B.r,1)
o.push(A.p(h,A.pv(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c0,h,h,h))}}o.push(B.aO)
n=w?B.aV:B.aT
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.I((w?B.aV:B.aT).j(0.35),B.r,1)
k=w?B.Mc:B.MJ
k=A.V(k,w?B.aV:B.aT,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.aw,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ad:B.ak,h,h,h,h,h,h,h,h,12,h,h,B.a4,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.j4,h,h,h))
return A.cc(h,f,A.bq(!0,A.v(A.a([new A.C(A2.Lm,e,h),A.D(A.ci(A.v(A.a([s,B.aO,A.p(h,A.v(o,B.m,h,B.e,B.j,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.te,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.y,h,E.ag4,h,h,B.ai),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ah,!0,!0),h,!1,!1,h,h)}}
C.aqF.prototype={
T(){return new C.aD0(A.yG(B.KF,B.ne,B.tB))}}
C.aD0.prototype={
q(){this.d.q()
this.a2()},
aJz(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iK(w,d)},
c4N(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hWy(t)
if(s!=null){this.aJz(s)
return}r=C.h4P(t)
if(r!=null)q=A.dr(r,p,0)
else q=!1
if(q){this.aJz(B.a.i(B.a.b_(r,B.a.cG(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eC(A.a([A.aH(t,t,t,t,A.V(u.f?B.qH:A_.Mj,t,t,t,t,t),t,t,t,new C.eB8(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.zL,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fco,t,t,t,1,t,!0),q=A.yF(u.d,B.bQ,u.gc4M()),p=A.m(28)
p=A.av(A.p(t,t,B.f,t,t,new A.o(t,t,A.I(B.aT,B.r,3),p,A.a([new A.ac(2,B.G,B.aT.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.cc(r,B.w,new A.an(B.W,t,B.b_,B.q,A.a([q,p,A.ao(32,A.p(t,D.fbe,B.f,t,t,new A.o(w,t,A.I(B.aT.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.j5,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aHN.prototype={
a4(){return"_WorksheetTab."+this.b}}
C.N7.prototype={
T(){return new C.aD2(D.a7Y,A.a([],x.D))},
bp(){return this.r.$0()},
gdV(){return this.c}}
C.aD2.prototype={
gcuB(){return J.bBQ(this.e,0,new C.eBR())},
a_(){this.a1()
$.aU.c0$.push(this)
this.va()},
q(){$.aU.hz(this)
this.a2()},
iI(d){if(d===B.fp)this.va()},
va(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$va=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Cc(q.a.c).cL(0,B.jL),$async$va)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eBN(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eBO(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$va,v)},
H2(d){return this.bEy(d)},
bEx(){return this.H2(null)},
bEy(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$H2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hYz(l,d),$async$H2)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l8(l,r,q,D.cXE,new A.Q(Date.now(),0,!1))
w=4
return A.b(C.Km(t.a.c,p),$async$H2)
case 4:o=f
w=5
return A.b(t.va(),$async$H2)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.I(x.q).f.R(D.eFN)
w=1
break}n=J.aV(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gU(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.I(q).f.R(D.eHw)
else n.I(q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.DG(m)
case 1:return A.h(u,v)}})
return A.i($async$H2,v)},
DG(d){return this.c8H(d)},
c8H(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$DG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.ht(s,new C.aqG(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$DG)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Km(u.a.c,t),$async$DG)
case 5:case 4:w=6
return A.b(u.va(),$async$DG)
case 6:return A.h(null,v)}})
return A.i($async$DG,v)},
uY(d){return this.bU_(d)},
bU_(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bAe(),$async$uY)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.ht(r,D.aDy,!0,"NgmyWorksheetProjectScan",x.N),$async$uY)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bAH(q),$async$uY)
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
break}p=C.fRu(s)
w=15
return A.b(C.Km(t.a.c,p),$async$uY)
case 15:o=f
w=16
return A.b(t.va(),$async$uY)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.I(x.q).f.R(D.eHB)
w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
t.DG(p)
case 1:return A.h(u,v)}})
return A.i($async$uY,v)},
MJ(d){return this.bDe(d)},
bDe(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$MJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.c9(null,null,!0,null,new C.eBy(d),s,null,!0,!0,x.y),$async$MJ)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.op(t.a.c,A.a([],x.D)),$async$MJ)
case 6:w=7
return A.b(t.va(),$async$MJ)
case 7:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eFS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$MJ,v)},
c8U(d){var w=this.c
w.toString
A.c_(B.K,null,new C.eBH(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b1t(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jj
else w=B.c
v=A.m(16)
u=A.I(p?B.dX:B.bX,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bR,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.az,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a1,!0,r,A.aK(!1,q,!0,A.p(r,A.v(A.a([s,B.ac,t,B.bB,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bq:B.bo,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.uN,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ae)},
Zf(d,e){return this.c8I(d,e)},
c8I(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c_(B.K,null,new C.eBC(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$Zf)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hdI(r,new C.eBD(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.ML(d,e),$async$Zf)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$Zf,v)},
aZy(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bR,u,u,u)
if(d)t=B.aE
else t=h.a?B.aP:B.az
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.v(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bq:B.bo,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,u,!0,new A.C(B.Ap,A.A(A.a([s,B.bd,t,A.V(B.ed,w?B.bq:B.bo,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ae)},
cfw(d,e,f,g,h,i){return this.aZy(!1,d,e,f,g,h,i)},
ML(d,e){return this.bDo(d,e)},
bDo(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ML=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kU(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$ML)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.byX(t.a.c,d.a),$async$ML)
case 6:w=7
return A.b(t.va(),$async$ML)
case 7:r=t.c
if(r==null){w=1
break}r.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$ML,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===B.H,n=new C.tp(o),m=o?B.bW:B.iH
if(q.f)o=D.b1p
else{w=q.bxU(n)
v=q.bT7(n)
u=q.gbv3()
if(o)t=B.jj
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ac,v,B.aO,new C.EN(A.p(p,A.A(A.a([q.ayM(Q.LU,"Projects",n,D.a7Y),q.ayM(B.uY,"Cashier",n,D.aRM),q.ayM(B.EV,"Family Tree",n,D.fFq)],r),B.m,p,B.e,B.j,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.en,0.95,u,p),B.bu],r)
w=q.d
if(w===D.a7Y){w=J.ab(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.az,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b8,new C.avo(q.gaNI(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.cfy(n)],r))}else{o=q.a
if(w===D.aRM)u.push(new C.amK(o.c,n,p))
else{w=q.r
u.push(new C.anQ(o.c,o.d,o.e,o.f,new C.eBU(q),new C.eBV(q),new A.cz(w,x.b4)))}}o=A.ci(A.v(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.y,p,A9.Lf,p,p,B.ai)}return A.cc(p,m,A.bq(!0,o,!0,!1,B.ah,!0,!0),p,!1,!1,p,p)},
bxU(d){var w=null,v=A.m(8),u=d.a,t=A.V(O.Yy,u?B.bq:B.bo,w,w,w,16)
return A.aK(!1,v,!0,new A.C(B.kA,A.A(A.a([t,B.bp,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bq:B.bo,w,w,w,w,w,w,w,w,14,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eBv(this),w,w,w,w,w,w,w)},
gbv3(){switch(this.d.a){case 0:return D.a7g
case 1:return D.fwg
case 2:return D.a7h}},
bT7(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aT.j(0.35),B.cw,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.bG5,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bss,A.aF(!1,B.a1,!0,w,A.aK(!1,A.m(12),!0,A.p(w,D.bDE,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eBz(this,d),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ae)],t),B.F,w,B.e,B.j,0,w,w),r=B.aZ.j(0.55),q=A.m(12)
return new C.EN(A.p(w,A.v(A.a([new A.C(E.X2,s,w),A.p(w,A.v(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.A9(this.gcuB()),w,w,w,w,w,w,D.eXE,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.uM,B.j5,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.f,w,w,new A.o(B.aT,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ah,1,D.fwf,w)},
ayM(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aT:B.K,q=A.m(12),p=t?A.I(B.c.j(0.55),B.r,2):A.I(B.K,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aT.j(0.42),B.cI,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bq:B.bo
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bq:B.bo
return A.D(A.aF(!1,B.a1,!0,u,A.aK(!1,s,!0,A.dh(u,A.A(A.a([w,B.ea,new A.dl(1,B.ch,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b9,B.j,0,u,u),u,u,B.cp,new A.o(r,u,p,q,o,u,B.n),B.iq,u,u,u,B.Lj,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eBQ(this,g),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ae),1)},
cfy(d){var w,v,u,t,s,r,q=this,p=null
if(J.ck(q.e)){w=d.a
v=w?B.dT:B.c
u=A.m(15)
t=A.p(p,D.bDJ,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aT.j(0.5),B.eQ,28)],x.V),D.bOB,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.az,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.EN(A.p(p,A.v(A.a([t,B.d5,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bq:B.bo,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dZ,A.A(A.a([A.D(q.aPb(B.iO,"Scan QR",new C.eBK(q),d),1),B.aw,A.D(q.aPb(M.xJ,"Upload file",new C.eBL(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bI(D.flV,q.gaNI(),A.bk(B.aT,p,p,p,B.c,B.fH,p,p,new A.b7(A.m(12),B.Z),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bpk,1.05,D.a7g,p)}w=J.b6(q.e,new C.eBM(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.EN(A.v(w,B.m,p,B.e,B.j,0,B.p),16,B.bR,1,D.a7g,p)},
aPb(d,e,f,g){var w=null,v=B.aT.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.I(B.aT.j(0.45),B.r,1)
return A.aF(!1,B.a1,!0,u,A.aK(!1,t,!0,A.p(w,A.v(A.a([A.V(d,B.aZ,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eW7,B.L,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.aeR,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ae)},
cfx(d,e){var w,v,u=null,t=e.a,s=t?B.dT:B.c,r=A.m(14),q=A.I(t?B.dX:B.bX,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.ej,10)],x.V),o=A.m(14),n=t?B.bq:B.bo
n=A.bv(B.a8C,new A.fF(1.7777777777777777,C.aOk(!0,B.fq,1/0,Q.LU,n,d.c,1/0),u),B.ap)
w=x.p
v=A.D(A.v(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.az,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.A9(d.gwp()),u,u,u,u,u,u,D.eUi,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aF(!1,B.a1,!0,u,A.aK(!1,o,!0,A.v(A.a([n,new A.C(B.by,A.A(A.a([v,A.aH(u,u,u,u,A.V(Aa.Mx,t?B.bq:B.bo,u,u,u,u),u,u,u,new C.eBI(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eBJ(this,d),u,u,u,u,u,u,u),B.f,B.K,0,u,u,u,u,u,B.ae),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.e3,u,u,u,1/0)}}
C.bv1.prototype={}
C.qE.prototype={
ad(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcNm(){var w,v,u,t,s=this.c
if(s===B.k.jJ(s))w=B.o.u(B.k.O(s))
else{v=B.k.aa(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l8.prototype={
gwp(){return B.d.cI(this.d,0,new C.ctp())},
ad(){var w=this,v=w.d,u=A.T(v).k("J<1,a3<n,@>>")
v=A.B(new A.J(v,new C.cto(),u),u.k("aj.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ac()],x.N,x.z)},
b8o(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l8(w.a,w.b,v,u,w.e)},
b85(d){return this.b8o(d,null)},
Ru(d){return this.b8o(null,d)}}
C.GM.prototype={
a4(){return"FamilyGender."+this.b}}
C.hT.prototype={
ad(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.h9x(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aBn(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hT(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.aj6.prototype={
a4(){return"FamilyTreeAccessRole."+this.b}}
C.kr.prototype={
gamv(){var w=this.f
return new A.a1(w,new C.bL8(),A.T(w).k("a1<1>")).gM(0)},
ad(){var w=this,v=w.f,u=A.T(v).k("J<1,a3<n,@>>")
v=A.B(new A.J(v,new C.bL7(),u),u.k("aj.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ac(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hP1(w.y)],x.N,x.z)},
y3(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kr(w.a,v,u,t,s,r,w.r,q,p,o)},
b8n(d,e){var w=null
return this.y3(w,w,d,e,w,w,w,w)},
cD7(d,e,f,g,h,i,j){return this.y3(d,e,f,g,h,i,j,null)},
aBs(d,e){var w=null
return this.y3(w,w,w,d,w,w,e,w)},
cBC(d){var w=null
return this.y3(w,w,w,w,w,w,d,w)},
cC_(d){var w=null
return this.y3(w,w,w,w,w,w,w,d)},
aBe(d){var w=null
return this.y3(w,w,w,w,d,w,w,w)},
cCE(d,e,f){var w=null
return this.y3(w,d,w,e,w,w,f,w)},
cBp(d){var w=null
return this.y3(w,w,d,w,w,w,w,w)},
cCc(d,e){var w=null
return this.y3(d,w,w,w,w,e,w,w)}}
C.ctq.prototype={
a4(){return"WrapAlignment."+this.b}}
C.ctr.prototype={
a4(){return"WrapCrossAlignment."+this.b}}
C.aF5.prototype={}
C.b6s.prototype={
bx(d){this.a=d.a
this.b=d.b},
dn(d){var w=new C.b6s()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b_(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b6r.prototype={
gvK(){return!0},
gF9(){return this.z.b<this.b.length},
aQM(d){switch(0){case 0:return d.a.c}},
aQt(d){switch(0){case 0:return d.a.d}},
bMF(d,e){switch(0){case 0:return new A.hE(d,e)}},
bM3(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fW(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iz(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Gx(b4)
switch(0){case 0:v=b5.b
u=new A.ko(0,v,0,1/0)
t=w===B.RX
break}s=A.a([],x.gZ)
r=A.U(x.cM,x.S)
for(b3=b1.z,q=B.d.fG(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fW(b4,u,!0)
f=b1.aQM(g)
f.toString
e=b1.aQt(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aF5(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aF5(k,j,i))}d=s.length
switch(0){case 0:q=b5.cs(new A.hE(m,l))
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
for(q=B.d.fG(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aQM(g)
e=b1.aQt(g)
e.toString
a9=b1.bM3(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bMF(a6,a3+a9)
b0=g.a
g.a=new A.iz(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fT(d){var w,v,u,t,s,r=this
r.l0(d)
w=d.b
w.hV()
v=A.dj()
u=r.a
v.e0(u.a,u.b,0,1)
w.ov(0,v)
for(u=r.z,u=B.d.dl(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fT(d)
w.mW(0)},
FF(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hV(){return this.z}}
C.bth.prototype={}
var z=a.updateTypes(["ax<~>()","R(hT)","R(kr)","~()","R(mZ)","a3<n,@>(kr)","H(kr,kr)","n(hT)","kr(a3<@,@>)","R(l8)","R(tU)","mZ(a3<@,@>)","tU()","H(l8,l8)","hT(a3<@,@>)","a3<n,@>(hT)","R(qE)","ax<~>(l8)","eN<n?>(hT)","H(hT,hT)","n?(hT)","a3<n,@>(mZ)","YJ(X)","n(n)","abJ(X)","r(o1)","H(mZ,mZ)","hT(hT)","cJ(bu<n,F_>)","cJ(J9)","~(hT)","H?(hT)","hT()","ak<hT>()","R(tT)","R(J9)","C(hT)","~(GM)","R(adf)","r(GM,n,a_)","Y7(X)","bu<n,ak<a3<n,@>>>(n,ak<mZ>)","~(H)","+count,id,name(H,n,n)(kr)","kr(kr)","Z3(X)","Z4(X)","R(lo)","lo()","n(kr)","a_M(X)","XI(X)","XH(X)","Y5(X)","Y9(X)","r(qE)","ac3(X)","~(lN)","ax<~>([n?])","O(O,l8)","r(l8)","O(O,qE)","a3<n,@>(qE)","qE(a3<@,@>)","XG(X)","RD(X)","cn(GL)","l8(a3<@,@>)","tT()","n(l8)","a3<n,@>(l8)","n(Q)","H(hT)","kr(a3<n,@>)","Xf(X)"])
C.fpA.prototype={
$1(d){return d.a+" "+d.b},
$S:116}
C.fpz.prototype={
bhf(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qx(s,d,B.hh,E.Eg),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.S(r!=null&&A.K9(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bhf(d)},
$S:287}
C.fpB.prototype={
$1(d){return d.b},
$S:116}
C.fyH.prototype={
$1(d){var w=null
return A.eD(w,B.K,new F.Or(this.a,this.b,w),w,w,0,B.WY,B.cZ,w,w,w)},
$S:47}
C.ff8.prototype={
$1(d){return d!=null},
$S:224}
C.ff9.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:224}
C.ffe.prototype={
$1(d){if(this.a)return new A.u(d.a*520,d.b*160)
return d},
$S:161}
C.fni.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f7(d,w,w,w,A.h1(w,B.r6,w,w,w,w,w,w,w,B.dq,w,w,10.5,w,B.ei,w,!0,w,w,w,w),w),u=f?B.ei:B.uT
return new A.nw(D.bkS,A.a8j(A.a([new A.fN(130,w,v),new A.yp(1,B.EO,A.f7(e,w,w,w,A.h1(w,g==null?D.e_E:g,w,w,w,w,w,w,w,B.dq,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.wJ,B.lb))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1888}
C.fnh.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.v4(999)
f=A.wy(A.lj(h,A.f7("Cashier",h,h,h,A.h1(h,D.yA,h,h,h,h,h,h,h,B.dq,h,h,10,h,B.ei,h,!0,h,h,h,h),h),h,new A.kp(D.e_v,h,f,B.hy,h),h,h,D.blk,h))
w=A.wy(A.f7("Debt receipt",h,h,h,A.h1(h,h,h,h,h,h,h,h,h,B.dq,h,h,22,h,B.ei,h,!0,h,h,h,h),h))
v=A.wy(A.f7(C.wh(new A.Q(Date.now(),0,!1),!0),h,h,h,D.a5W,h))
u=A.v4(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f7(s,h,h,h,A.h1(h,h,h,h,h,h,h,h,h,B.dq,h,h,14,h,B.ei,h,!0,h,h,h,h),h)
r=A.f7("Person who owes",h,h,h,D.a5W,h)
q=A.v4(10)
p=x.C
u=A.lj(h,A.yk(A.a([s,new A.fN(h,2,h),r,new A.fN(h,10,h),A.lj(h,A.yk(A.a([A.f7("Amount owed",h,h,h,D.a5W,h),new A.fN(h,2,h),A.f7(A.A9(t.c),h,h,h,A.h1(h,D.yA,h,h,h,h,h,h,h,B.dq,h,h,20,h,B.ei,h,!0,h,h,h,h),h)],p),B.qt,B.lb),h,new A.kp(B.oF,h,q,B.hy,h),h,h,D.bky,1/0)],p),B.qt,B.lb),h,new A.kp(E.aEN,h,u,B.hy,h),h,h,D.bmq,1/0)
q=new A.ne(D.e_y,0.9,B.ks)
r=A.v4(12)
s=i.c
o=s.$2("Original due",C.wh(t.r,!1))
n=s.$2("Current due",C.wh(t.f,!1))
m=i.d
l=new A.ne(m,1.1,B.ks)
k=A.v4(8)
j=i.a
k=A.a([o,n,new A.fN(h,6,h),A.lj(h,A.wy(A.f7(t.gaI4(),h,h,h,A.h1(h,m,h,h,h,h,h,h,h,B.dq,h,h,11,h,B.ei,h,!0,0.5,h,h,h),h)),h,new A.kp(h,new A.pg(l,l,l,l),k,B.hy,h),h,h,D.blu,1/0),new A.fN(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.yA))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.yA))
else{n=A.f7("Missed days ("+n+")",h,h,h,A.h1(h,B.r6,h,h,h,h,h,h,h,B.dq,h,h,10.5,h,B.ei,h,!0,h,h,h,h),h)
m=A.T(o).k("J<1,Rc>")
o=A.B(new A.J(o,new C.fng(),m),m.k("aj.E"))
B.d.v(k,A.a([new A.fN(h,4,h),n,new A.fN(h,6,h),new C.b6r(5,5,new C.b6s(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fN(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fN(h,8,h),w,new A.fN(h,3,h),v,new A.fN(h,16,h),u,new A.fN(h,10,h),A.lj(h,A.yk(k,B.wJ,B.lb),h,new A.kp(h,new A.pg(q,q,q,q),r,B.hy,h),h,h,B.af0,1/0)],p)
w=j.a
if(w!=null){v=new A.ne(B.Hg,1,B.ks)
B.d.v(f,A.a([new A.fN(h,16,h),A.f7("Debtor signature",h,h,h,A.h1(h,B.r6,h,h,h,h,h,h,h,B.dq,h,h,10,h,B.ei,h,!0,h,h,h,h),h),new A.fN(h,6,h),A.lj(h,new A.H_(w,B.U5,h,h),h,new A.kp(h,new A.pg(v,v,v,v),A.v4(6),B.hy,h),82,h,B.Ll,1/0)],p))}f.push(new A.fN(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f7(w,h,h,h,D.eNr,h))
f.push(new A.fN(h,18,h))
f.push(A.wy(A.f7("NGMY.ORG",h,h,h,A.h1(h,D.yA,h,h,h,h,h,h,h,B.dq,h,h,14,h,B.ei,h,!0,1.8,h,h,h),h)))
return f},
$S:417}
C.fng.prototype={
$1(d){var w=null,v=new A.ne(D.Hh,0.7,B.ks),u=A.v4(999)
return A.lj(w,A.f7(C.wh(d,!1),w,w,w,A.h1(w,D.Hh,w,w,w,w,w,w,w,B.dq,w,w,9.5,w,B.ei,w,!0,w,w,w,w),w),w,new A.kp(w,new A.pg(v,v,v,v),u,B.hy,w),w,w,D.bqG,w)},
$S:1889}
C.bZN.prototype={
$1(d){var w=null,v=B.bL.j(0.08),u=A.m(999),t=A.I(B.bL.j(0.28),B.r,1)
return A.p(w,A.d(C.wh(d,!1),w,w,w,w,w,w,D.eTO,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eD,w,w,w)},
$S:1890}
C.fzc.prototype={
$1(d){var w=null,v=A.aI(d,B.bS,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.bGY,w,w,w,new C.fz9(d),w,w,w,w,w,B.c7),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eD(w,B.K,new A.cW(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a1,!0,u,new A.C(B.WN,A.v(A.a([new A.bK(B.a7,w,w,t,w),new A.dl(1,B.ch,A.ci(A.v(A.a([new A.eq(new C.aWA(r,w),s),B.S,A.A(A.a([A.D(A.ez(B.xU,D.fio,new C.fza(s,r,d),A.dd(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f3,w,new A.b7(A.m(14),B.Z),new A.aA(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.D(A.dp(B.a_5,D.ffa,new C.fzb(r,d),A.bk(B.aZ,w,w,w,B.c,w,B.f3,w,new A.b7(A.m(14),B.Z),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.q,w,B.y,w,w,w,w,B.ai),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.az,0,w,w,w,w,w,B.ae),w),w,w,0,Ae.Xa,B.cZ,w,w,w)},
$S:47}
C.fz9.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.fza.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ak$.x.h(0,t.a)
m=m==null?null:m.gb7()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m0(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.fQ),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.fa(B.dD.gaP(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.ap(o,0,32)
w=5
return A.b(A.ry(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fzb.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ftU(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.I(x.q).f
s.R(A.b2(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fz4.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eD(w,B.az,A.v(A.a([new A.C(D.bme,A.A(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.n5,w,w,w),1),A.aH(w,w,w,w,B.l9,w,w,w,new C.fz2(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dl(1,B.ch,new A.C(B.hs,A.bv(A.m(14),A.fK(t,B.A,w,w,B.cn,B.ds,!1,w,!1,w,w),B.ap),w),w),new A.C(B.KZ,new A.a5(1/0,w,A.dp(B.ou,D.aOf,new C.fz3(t,this.c,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Z),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.L9,B.cZ,w,new A.b7(v,B.Z),w)},
$S:47}
C.fz2.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.fz3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ry(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fzg.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eD(w,B.az,new A.C(D.bmm,A.v(A.a([A.A(A.a([D.brH,A.aH(w,w,w,w,B.l9,w,w,w,new C.fze(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.eq(A.bv(A.m(14),A.p(w,A.b3(w,w,w,new C.b8B(s.ax,w),B.at),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ac,new A.a5(1/0,w,A.dp(B.ou,D.aOf,new C.fzf(t,s,d),A.bk(B.aZ,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.Z),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.cZ,w,new A.b7(v,B.Z),w)},
$S:47}
C.fze.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.fzf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ak$.x.h(0,t.a)
n=n==null?null:n.gb7()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m0(2.5),$async$$0)
case 4:w=3
return A.b(e.hj(B.fQ),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.ap(p,0,32)
r=J.fa(B.dD.gaP(s))
w=5
return A.b(A.ry(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.I(x.q).f.R(A.b2(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fio.prototype={
$1(d){return d.a===this.a},
$S:263}
C.dCj.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dC4.prototype={
bgt(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dT:B.c
s=u.a
w=2
return A.b(A.c_(t,null,new C.dC7(s,q,e),p,!0,!0,!1,B.Hw,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dC8(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bgt(d,e)},
$S:1891}
C.dC7.prototype={
$1(d){var w,v=null,u=this.c===B.vt,t=u?D.d2e:D.cZK
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.az,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bq(!0,new A.C(L.afz,A.v(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bq:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac,A.ib(!0,v,v,B.y,H.aLx,new C.dC6(this.a,w,t,d),t.length,v,B.dP,B.ai,!0)],x.p),B.aj,v,B.e,B.Q,0,B.p),v),!0,!1,B.ah,!0,!0)},
$S:32}
C.dC6.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bq:B.bo).j(0.16)
u=A.I(u,B.r,q?1.6:1)
return A.aK(!1,p,!0,A.p(B.A,C.aWz(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dC5(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dC5.prototype={
$0(){A.a4(this.a,!1).N(this.b)
return null},
$S:0}
C.dC8.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dC2.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:94}
C.dC3.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cH(B.cp,e,v)
return new A.cX(e,!1,A.ig(B.A,A.av(A.aF(!1,B.a1,!0,v,new A.e5(new C.dC1(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.K,0,v,v,v,v,v,B.ae),v,v,v),v,new A.bf(t,new A.bm(0.96,1,u),u.k("bf<bH.T>"))),v)},
$S:29}
C.dC1.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.bS,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dT:B.c,f=A.m(14),e=A.I((h?B.bq:B.bo).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.az,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aK(!1,v,!0,new A.C(B.en,A.V(B.cv,i.a.d.a?B.bq:B.bo,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dBN(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aPI("Name")
r=l.a
q=r.d==null?k:new C.dBO(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.ls
n=A.I(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aL(k,B.T,h,k,!0,B.q,k,A.aM(),w,k,k,k,k,k,2,s.b8g(new A.C(B.fM,A.aK(!1,p,!0,A.p(B.A,C.aWz(m==null?"\ud83d\udc64":A.fo6(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cl,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ag,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.km,k,B.a5D,k,k)
v=A.a([v,B.ac,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ao,A.A(A.a([A.D(i.aQj("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dBP(r,a0),r.d===B.vt),1),B.ab,A.D(i.aQj("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dBU(r,a0),r.d===B.a2B),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bK(B.a3,k,k,A.hb(D.bFm,D.fgS,new C.dBV(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c7)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.az,k,k,k,k,k,k,k,k,14,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tX(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.f,k,k,k,k,k,2,i.aPJ("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ag,k,k,s,k,k,B.dR,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.I((t?B.bq:B.bo).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,B.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.wh(r.a,!1)
v.push(A.aF(!1,B.a1,!0,q,A.aK(!1,p,!0,A.p(k,A.A(A.a([A.D(A.v(A.a([t,B.bB,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.az,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.bCf],u),B.m,k,B.e,B.j,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bm,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dBW(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ae))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aP:B.az,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aL(k,B.T,!1,k,!0,B.q,k,A.aM(),l.r,k,k,k,k,k,2,i.aPI("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ag,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.am,k,k,k,k))
v.push(B.ac)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.az,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bq:B.bo,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aXW(r.b.length!==0,B.m6,new C.dBX(r,i,a0),new C.dBY(r,a0),"Upload from gallery","ID photo"))
v.push(i.aXW(r.c.length!==0,D.bvC,new C.dBZ(r,i,d,a0),new C.dC_(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ab.a6f("Signature (optional)",t,new C.dC0(a0),new C.dBQ(a0,t),new C.dBR(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bq:B.bo
s=(i?B.bq:B.bo).j(0.28)
s=A.D(A.dW(E.aO8,new C.dBS(d),A.dd(k,k,k,k,k,k,k,k,k,t,k,k,B.uI,k,new A.b7(A.m(10),B.Z),new A.aA(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cY,k,k,k,B.c,k,B.uI,k,new A.b7(A.m(10),B.Z),k,k,k)
v.push(A.A(A.a([s,B.ab,A.D(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.u7,k,k,k),new C.dBT(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.ci(A.v(v,B.aj,k,B.e,B.Q,0,B.p),B.q,k,B.y,k,k,k,k,B.ai),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uQ,B.j5,k,k,360)},
$S:200}
C.dBN.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dBO.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dBP.prototype={
$0(){return this.b.$1(new C.dBM(this.a))},
$S:0}
C.dBM.prototype={
$0(){var w=this.a
w.d=B.vt
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dBU.prototype={
$0(){return this.b.$1(new C.dBL(this.a))},
$S:0}
C.dBL.prototype={
$0(){var w=this.a
w.d=B.a2B
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dBV.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dBW.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wl(null,u.b,A.bZ(2020,1,1,0,0,0,0,0),null,s,A.bZ(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dBK(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBK.prototype={
$0(){var w=this.b
return this.a.a=A.bZ(w.gce(),w.gcb(),w.gcr(),0,0,0,0,0)},
$S:0}
C.dBX.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Og(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dBJ(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBJ.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dBY.prototype={
$0(){return this.b.$1(new C.dBI(this.a))},
$S:0}
C.dBI.prototype={
$0(){return this.a.b=""},
$S:0}
C.dBZ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dT:B.c
w=3
return A.b(A.c_(q,null,new C.dBG(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Og(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dBH(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBG.prototype={
$1(d){var w=null
return A.bq(!0,A.v(A.a([A.dO(!1,w,w,w,!0,w,w,w,!0,w,B.akA,w,w,w,w,new C.dBA(d),!1,w,w,w,w,w,w,w,D.f7L,w,w,w),A.dO(!1,w,w,w,!0,w,w,w,!0,w,B.aky,w,w,w,w,new C.dBB(d),!1,w,w,w,w,w,w,w,D.fef,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ah,!0,!0)},
$S:32}
C.dBA.prototype={
$0(){A.a4(this.a,!1).N("camera")
return null},
$S:0}
C.dBB.prototype={
$0(){A.a4(this.a,!1).N("gallery")
return null},
$S:0}
C.dBH.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dC_.prototype={
$0(){return this.b.$1(new C.dBF(this.a))},
$S:0}
C.dBF.prototype={
$0(){return this.a.c=""},
$S:0}
C.dC0.prototype={
$0(){return this.a.$1(new C.dBE())},
$S:0}
C.dBE.prototype={
$0(){},
$S:0}
C.dBQ.prototype={
$0(){return this.a.$1(new C.dBD(this.b))},
$S:0}
C.dBD.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dBR.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ag9(u.a,null,null,new C.dBC(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dBC.prototype={
$4(d,e,f,g){this.a.$1(new C.dBz(this.b,d))},
$S:420}
C.dBz.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dBS.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dBT.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.I(x.q).f.R(D.eJs)
return}if(w.a.d==null){w.c.I(x.q).f.R(D.eGo)
return}A.a4(w.c,!1).N(!0)},
$S:0}
C.dCm.prototype={
$3(d,e,f){return B.bH},
$C:"$3",
$R:3,
$S:94}
C.dCn.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dT:B.c,n=A.m(14),m=A.I((p?B.bq:B.bo).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.az,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.A9(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bq:B.bo,r,r,r,r,r,r,r,r,13,r,r,B.a4,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.yr(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.yr(r).length>0?B.bL:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bq:B.bo
t=(q?B.bq:B.bo).j(0.28)
s=x.p
return new A.cX(e,!1,A.av(A.aF(!1,B.a1,!0,r,A.p(r,A.v(A.a([p,B.P,v,u,B.ay,A.A(A.a([A.D(A.dW(B.n7,new C.dCk(d),A.dd(r,r,r,r,r,r,r,r,r,w,r,r,B.jM,r,new A.b7(A.m(10),B.Z),new A.aA(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.D(A.bI(D.feE,new C.dCl(d),A.bk(B.cY,r,r,r,B.c,r,B.jM,r,new A.b7(A.m(10),B.Z),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.aj,r,B.e,B.Q,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.As,E.X2,r,r,300),B.f,B.K,0,r,r,r,r,r,B.ae),r,r,r),r)},
$S:29}
C.dCk.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dCl.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.dCg.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dCh(r),p=r.a.d.a,o=p?B.dT:B.c,n=A.m(14),m=A.I((p?B.bq:B.bo).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.D(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.az,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.A9(l.c),s,s,s,s,s,s,D.eVf,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.iw((r.a.d.a?B.bq:B.bo).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.YT,"View receipt",new C.dC9(r,d,l))
u=l.x!=null
t=u?B.qN:B.pr
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bmj,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dCa(r,d,l)),q.$3$icon$label$onTap(B.AJ,"Edit",new C.dCb(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.m6,"View / download ID",new C.dCc(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bvB,"View / download selfie",new C.dCd(r,d,l)))
if(l.gaD1())p.push(q.$3$icon$label$onTap(A1.ZX,"View / download signature",new C.dCe(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bL,B.e9,"Delete",new C.dCf(r,d,l)))
p.push(B.au)
return A.bq(!0,new A.C(B.uM,A.p(s,A.v(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ah,!0,!0)},
$S:32}
C.dCh.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.az
else w=d
return A.aK(!1,v,!0,new A.C(B.eN,A.A(A.a([A.V(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1892}
C.dC9.prototype={
$0(){A.a4(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fz8(w,this.c)},
$S:0}
C.dCa.prototype={
$0(){A.a4(this.b,!1).N(null)
this.a.QQ(this.c)},
$S:0}
C.dCb.prototype={
$0(){A.a4(this.b,!1).N(null)
this.a.Cm(this.c)},
$S:0}
C.dCc.prototype={
$0(){var w,v,u
A.a4(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bB3(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dCd.prototype={
$0(){var w,v,u
A.a4(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bB3(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dCe.prototype={
$0(){A.a4(this.b,!1).N(null)
var w=this.a.c
w.toString
C.fzd(w,this.c)},
$S:0}
C.dCf.prototype={
$0(){A.a4(this.b,!1).N(null)
this.a.MW(0,this.c)},
$S:0}
C.dCo.prototype={
$1(d){return d.x==null},
$S:263}
C.dCp.prototype={
$1(d){return d.x!=null},
$S:263}
C.dCq.prototype={
$2(d,e){return d+e.c},
$S:1893}
C.dCr.prototype={
$0(){return this.a.bvw()},
$S:0}
C.dCi.prototype={
$0(){return this.a.acW(this.b)},
$S:0}
C.fiT.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fiU.prototype={
$0(){return B.d.gK(D.a08)},
$S:z+68}
C.d2c.prototype={
$0(){var w=this.a
return w.m(new C.d2a(w,this.b))},
$S:0}
C.d2a.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.d2b.prototype={
$0(){},
$S:0}
C.d2d.prototype={
$0(){var w=this.a.gbTO()
A.a4(this.b,!1).N(w)
return null},
$S:0}
C.fkR.prototype={
$1(d){return C.fVv(A.a0(d,x.N,x.z))},
$S:z+11}
C.fkS.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fkT.prototype={
$2(d,e){var w=A.c7(d.a,null),v=A.c7(e.a,null)
if(w!=null&&v!=null)return B.o.aL(w,v)
return d.d.aL(0,e.d)},
$S:z+26}
C.fxN.prototype={
$1(d){return d.ad()},
$S:z+21}
C.fFQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fif.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bL3.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eY(e,v)?v:null},
$S:1894}
C.fyl.prototype={
$1(d){var w=this
return new C.Y7(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d2S.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d2R(w,d))},
$S:z+66}
C.d2R.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2G.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cw(u)?v.r>=J.ab(v.d):w)v.r=J.ab(v.d)-1},
$S:0}
C.d2D.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.d2e.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.d2f.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d2H.prototype={
$0(){return this.a.w=!1},
$S:0}
C.d2n.prototype={
$1(d){var w=null,v=A.M(d).ax.a===B.H,u=v?B.dT:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.az,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eh(A.a([A.bJ(!1,B.dd,w,w,!0,w,w,new C.d2l(d),w,w),A.bI(B.vO,new C.d2m(d),A.bk(B.mz,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:19}
C.d2l.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.d2m.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.d2o.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d2E.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d2F.prototype={
$0(){return B.d.gK(D.y3)},
$S:z+12}
C.d2j.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxJ(0),t=J.ab(w.d)
w=J.ab(w.d)===1?"page":"pages"
return new C.RD(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.d2k.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2p.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.XG(v,u,J.ab(w.d),null)},
$S:z+64}
C.d2q.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2Q.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aE(s,new C.Xo(r.y,r.gxJ(0),J.ab(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d2O(r),s,s,s,s,s,s,!1,B.aa)
else{w=e-1
v=J.q(r.d,w)
J.ab(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b8_(v,e,w,u,t,r.gbLb(),C.h9w(r.y.Q),r.gxJ(0),s)
w=t}return A.c6(q,new C.d2P(r,e),new A.C(B.X3,w,s))},
$S:1895}
C.d2P.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcX(t).ay){t=this.b
u=x.cy.a(B.d.gcX(u.f.f)).gug(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.dj()
t=u.a
t.$flags&2&&A.ai(t)
t[11]=0.0013
u.ft(v*3.141592653589793*0.5)
return A.fr(B.a3,A.db(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.d2O.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aE5(B.pg,B.ir)},
$S:0}
C.d2A.prototype={
$0(){var w=this.a
return w.m(new C.d2z(w))},
$S:0}
C.d2z.prototype={
$0(){return this.a.w=!0},
$S:0}
C.d2B.prototype={
$0(){var w=this.a.c
w.toString
A.a4(w,!1).N(null)
return null},
$S:0}
C.d2g.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jE.j(0.5),r=x.p,q=A.a([D.f6q,B.ac],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ck(p.d)?"Write this book":"Write a new book"
q.push(p.Xt(d,B.dS,w,J.ck(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Xt(d,H.ait,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cw(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cK,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.k4.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cK,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.k4.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Xt(d,Y.ajC,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Xt(d,B.py,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Xt(d,B.py,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eD(u,E.zU,A.bq(!0,new A.C(A0.An,A.v(q,B.F,u,B.e,B.Q,0,B.p),u),!0,!1,B.ah,!0,!0),u,u,u,D.afZ,B.cZ,u,new A.b7(t,new A.aA(s,1.4,B.r,-1)),u)},
$S:47}
C.d2C.prototype={
$0(){A.a4(this.a,!1).N(this.b)
return null},
$S:0}
C.d2t.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cw(w.d)
return new C.Y9(v,J.cw(w.d),w.r+1,null)},
$S:z+54}
C.d2u.prototype={
$1(d){var w=null
return A.o7(!1,A.eh(w,w,w,E.zU,new A.k7(this.a,new C.d2s(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:315}
C.d2s.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a5j,B.nS,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:739}
C.d2v.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d2w.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d2x.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2y.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Ai(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Qu(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.d2r(s,t))
w=4
return A.b(s.kG(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2r.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d2J.prototype={
$1(d){var w=null
return A.o7(!1,A.eh(w,w,w,E.zU,new A.k7(this.a,new C.d2I(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:315}
C.d2I.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.a5j,B.nS,A.D(A.d(e,w,w,w,w,w,w,B.iC,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:739}
C.d2K.prototype={
$0(){return this.a.a=!1},
$S:49}
C.d2L.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d2M.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:187}
C.d2N.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Ai(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kG(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d2h.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bdG(B.pg,S.KO)},
$S:0}
C.d2i.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aE5(B.pg,S.KO)},
$S:0}
C.d4C.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.d4D.prototype={
$1(d){var w=this.a
return w.m(new C.d4B(w))},
$S:9}
C.d4B.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d4E.prototype={
$1(d){var w=this.a
return w.m(new C.d4A(w))},
$S:9}
C.d4A.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d4F.prototype={
$1(d){var w=this.a
return w.m(new C.d4z(w))},
$S:9}
C.d4z.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d4G.prototype={
$0(){var w=this.a
return w.m(new C.d4y(w,this.b))},
$S:0}
C.d4y.prototype={
$0(){var w=this.b
this.a.d.saU(0,w)
return w},
$S:0}
C.d4H.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga03()
A.a4(this.b,!1).N(new A.bmn(w,v))},
$S:0}
C.d36.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d35.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Y5(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d3a.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d39.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b4_(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hx,v,v,v)
return A.eh(A.a([A.bJ(!1,B.dd,v,v,!0,v,v,new C.d37(d),v,v),A.bI(B.vO,new C.d38(d),A.bk(B.mz,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.zU,w,v,v,v,v,D.f5l,v)},
$S:19}
C.d37.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.d38.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.d3b.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.d3c.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.ci(A.c5(B.bG,r,B.bx,18,14),B.q,t,B.y,t,D.bnf,t,t,B.ai)},
$S:316}
C.d34.prototype={
$0(){return this.a.OT(0,this.b)},
$S:0}
C.d33.prototype={
$0(){return this.a.On(0,this.b)},
$S:0}
C.cCa.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cCb.prototype={
$0(){return B.d.gK(D.y3)},
$S:z+12}
C.cCc.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bY(0,new A.C(d,A.bX(w,new A.o(w,w,A.I(this.a.j(f),B.r,g),v,w,w,B.n),B.be),w),0,0,0)},
$S:1897}
C.cVC.prototype={
$1(d){return this.a.m(new C.cVB(this.b,this.c))},
$S:9}
C.cVB.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cW0.prototype={
$1(d){return this.a.m(new C.cVO())},
$S:2}
C.cVO.prototype={
$0(){},
$S:0}
C.cW1.prototype={
$1(d){return this.a.m(new C.cVN())},
$S:2}
C.cVN.prototype={
$0(){},
$S:0}
C.cW2.prototype={
$0(){var w=this.a
return w.m(new C.cVM(w,this.b))},
$S:0}
C.cVM.prototype={
$0(){var w=this.a
return w.d=w.gnG().EP(this.b.a)},
$S:0}
C.cW3.prototype={
$0(){var w=this.a
return w.m(new C.cVL(w,this.b))},
$S:0}
C.cVL.prototype={
$0(){var w=this.a
return w.d=w.gnG().cAW(this.b)},
$S:0}
C.cW4.prototype={
$1(d){return this.a.m(new C.cVK())},
$S:2}
C.cVK.prototype={
$0(){},
$S:0}
C.cW5.prototype={
$0(){var w=this.a
return w.m(new C.cVJ(w,this.b))},
$S:0}
C.cVJ.prototype={
$0(){var w=this.a
return w.d=w.gnG().cB0(this.b.a)},
$S:0}
C.cW6.prototype={
$1(d){var w=this.a
return w.m(new C.cVW(w,d))},
$S:6}
C.cVW.prototype={
$0(){var w=this.a
return w.d=w.gnG().cBV(this.b)},
$S:0}
C.cW7.prototype={
$1(d){var w=this.a
return w.d=w.gnG().aBh(d)},
$S:2}
C.cW8.prototype={
$1(d){var w=this.a
return w.d=w.gnG().cB3(d)},
$S:2}
C.cWa.prototype={
$1(d){var w=this.a
return w.d=w.gnG().cBT(d)},
$S:2}
C.cWb.prototype={
$1(d){var w=this.a
return w.m(new C.cVV(w,d))},
$S:9}
C.cVV.prototype={
$0(){var w=this.a
return w.d=w.gnG().cBK(this.b)},
$S:0}
C.cWc.prototype={
$0(){var w=this.a,v=w.gnG(),u=B.a.i(w.gxJ(0).a.a),t=B.a.i(w.gayB().a.a)
u=v.b8x(B.a.i(w.gaoB().a.a),t,u)
A.a4(this.b,!1).N(u)
return null},
$S:0}
C.dPG.prototype={
$0(){var w=this.a
w.vm()
w.a.bp()
w.a.pn()},
$S:0}
C.dPF.prototype={
$0(){var w=this.a
w.vm()
w.a.bp()
w.a.pn()},
$S:0}
C.dPI.prototype={
$0(){var w=this,v=w.b
if(J.cw(v)||J.ck(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dPJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dPK.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dPE.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dPH.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dPM.prototype={
$0(){this.a.Nr()
return null},
$S:0}
C.dPL.prototype={
$0(){return this.a.DH(this.b)},
$S:0}
C.dP6.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bJ(!1,B.dd,w,w,!0,w,w,new C.dP4(d),w,w),r=A.bk(B.bT,w,w,w,w,w,w,w,w,w,w,w)
return A.eh(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dP5(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:19}
C.dP4.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dP5.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.dP7.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cBp(this.b)},
$S:0}
C.dP1.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aPY(w.b,w.c,w.d)},
$S:8}
C.dOA.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dOB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dOP.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.FJ(t.a.c),$async$$0)
case 2:s=r.qU(q.dG(e,new C.dON(t)))
if(s!=null&&t.c!=null)t.m(new C.dOO(t,s))
t.a.bp()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dON.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dOO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dOQ.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dOR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dP0.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cCc(C.h9G(w),w)},
$S:0}
C.dOZ.prototype={
$1(d){return new A.e5(new C.dOY(this.a,this.b),null)},
$S:20}
C.dOY.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dT:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.az,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aH(v,v,v,v,B.ake,v,v,v,p>0?new C.dOU(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.v(A.a([r,B.aO,A.A(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aP:B.az,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aH(v,v,v,v,B.akN,v,v,v,new C.dOV(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bJ(!1,B.dd,v,v,!0,v,v,new C.dOW(d),v,v),A.bI(B.oS,new C.dOX(d),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:167}
C.dOU.prototype={
$0(){return this.b.$1(new C.dOT(this.a))},
$S:0}
C.dOT.prototype={
$0(){return--this.a.a},
$S:0}
C.dOV.prototype={
$0(){return this.b.$1(new C.dOS(this.a))},
$S:0}
C.dOS.prototype={
$0(){return++this.a.a},
$S:0}
C.dOW.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dOX.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.dP_.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cC_(this.a.a)
w.r.a8(0)},
$S:0}
C.dOo.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.agg(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.h3u(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dOp.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aBe(w)},
$S:0}
C.dP9.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.abJ(this.b,w,this.c,null)},
$S:z+24}
C.dP3.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dT:B.c,t=A.m(20),s=A.V(B.l5,B.aT,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.az,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ac,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.v(p,B.m,w,B.e,B.Q,0,B.p)
return A.eh(A.a([A.bI(D.ffK,new C.dP2(d),A.bk(B.aT,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.b7(t,B.Z),r,w)},
$S:19}
C.dP2.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dOq.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dOr.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dOs.prototype={
$1(d){return d.a},
$S:z+7}
C.dOt.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hT(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aBe(w)},
$S:0}
C.dOx.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.agg(q)
w=A.T(q).k("a1<1>")
q=A.B(new A.a1(q,new C.dOv(r),w),w.k("G.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.h3u(v.e,null,r,v.f,v.r,new C.dOw(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dOw.prototype={
$0(){return this.a.a89(this.b)},
$S:0}
C.dOv.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dOy.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("J<1,hT>")
w=A.B(new A.J(w,new C.dOu(this.b),v),v.k("aj.E"))
u.d=t.aBe(w)},
$S:0}
C.dOu.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dP8.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dOK.prototype={
$1(d){return d.length!==0},
$S:3}
C.dOL.prototype={
$1(d){var w=this
return new A.e5(new C.dOJ(w.a,w.b,w.c,w.d),null)},
$S:20}
C.dOJ.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dT:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.az,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bo,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ac],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dOF(u,e,o),A.T(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aL(v,B.T,!1,v,!0,B.q,v,A.aM(),u,v,v,v,v,v,2,A.bo(v,new A.b4(4,A.m(12),B.df),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ag,v,v,v,v,v,B.lK,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.am,v,v,v,v))
p=A.v(p,B.aj,v,B.e,B.Q,0,B.p)
t=w.a
return A.eh(A.a([A.bJ(!1,B.dd,v,v,!0,v,v,new C.dOG(d),v,v),A.bI(B.Ik,new C.dOH(t,u,o,e),A.bk(B.bT,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.f3A,new C.dOI(t,u,o,d),A.bk(B.aT,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:167}
C.dOF.prototype={
$1(d){var w=null
return A.dO(!1,B.ah,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.az,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.bIQ,w,w,w,new C.dOE(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1898}
C.dOE.prototype={
$0(){return this.a.$1(new C.dOC(this.b,this.c))},
$S:0}
C.dOC.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dOG.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.dOH.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dOD(w.c,u))
v.bM(0,B.c3)}},
$S:0}
C.dOD.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dOI.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a4(w.d,!1).N(!0)},
$S:0}
C.dOM.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cCE(this.b,D.tg,C.FH(v,w.a.c))},
$S:0}
C.dPg.prototype={
$1(d){return d.as},
$S:z+1}
C.dPh.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iK(this.b,w)},
$S:0}
C.dPi.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hYg(v)
return w.Us(v==null?null:v.a)},
$S:0}
C.dPj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hAS(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gck(k)){k=A.aO(1/0,e.a,e.b)
s=A.aO(1/0,e.c,e.d)
l.cl9(new A.at(u,t),v.gbeu(),new A.at(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cG_:D.cEt
q=A.I(s?B.dt:D.b6y,B.r,1)
p=A.m(22)
o=A.bY(0,A.b3(m,m,m,new C.bbk(s,m),B.at),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.an(B.W,m,B.a9,B.q,A.a([o,A.bY(0,A.u5(new A.N(n,n,n,n),new A.a5(u,t,new C.bcc(l.d,v,l.f,w,new C.dPc(l),l.gc5r(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bto(s,new C.dPd(l,e),new C.dPe(l,e),new C.dPf(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a6(B.b1,B.b3,B.x,r,m,m),B.n),m,m,m,P.af4,m,m,m,m)},
$S:213}
C.dPc.prototype={
$1(d){var w=this.a
w.m(new C.dPa(w,d))},
$S:2}
C.dPa.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.dPd.prototype={
$0(){var w=this.b
return this.a.b6d(1.25,new A.at(A.aO(1/0,w.a,w.b),A.aO(1/0,w.c,w.d)))},
$S:0}
C.dPe.prototype={
$0(){var w=this.b
return this.a.b6d(0.8,new A.at(A.aO(1/0,w.a,w.b),A.aO(1/0,w.c,w.d)))},
$S:0}
C.dPf.prototype={
$0(){var w=this,v=w.b
return w.a.aPY(new A.at(A.aO(1/0,v.a,v.b),A.aO(1/0,v.c,v.d)),new A.at(w.c,w.d),w.e.gbeu())},
$S:0}
C.dPk.prototype={
$0(){var w=this.a
return w.m(new C.dPb(w))},
$S:0}
C.dPb.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dOz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fH(new A.fA(s.c)),$async$$0)
case 2:t.xd("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d3g.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bfT(u,C.hdL(v.c,u),new C.d3f(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d3f.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d3h.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bja(d.d,d.c,u.f.t(0,d.a),new C.d3e(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d3e.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fiX.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.qU(new A.cS(new A.a1(v,new C.fiY(d),w.k("a1<1>")),new C.fiZ(),w.k("cS<1,n>")))},
$S:z+20}
C.fiY.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fiZ.prototype={
$1(d){return d.a},
$S:z+7}
C.fiV.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fiW.prototype={
$1(d){return d.b},
$S:z+7}
C.fj1.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.qU(new A.cS(new A.a1(v,new C.fj2(d),w.k("a1<1>")),new C.fj3(),w.k("cS<1,n>")))},
$S:z+20}
C.fj2.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fj3.prototype={
$1(d){return d.a},
$S:z+7}
C.fj_.prototype={
$1(d){var w,v=A.et([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.aj(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.fj0.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d3j.prototype={
$0(){return this.a},
$S:z+32}
C.d3A.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.aj(0,d)},
$S:256}
C.d3s.prototype={
$2(d,e){var w=this.a.cf(0,d,new C.d3t()),v=J.a7(w)
if(!v.t(w,e))v.J(w,e)},
$S:124}
C.d3t.prototype={
$0(){return A.a([],x.s)},
$S:740}
C.d3r.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eY(w,e)
return w===!0},
$S:299}
C.d3k.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d3q.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d3p.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aV(v==null?D.Bq:v)
u=1
while(v.C())u+=s.$2(v.gU(v).a,e)
v=s.b.h(0,d)
v=J.aV(v==null?B.T:v)
while(v.C()){t=v.gU(v)
if(e.t(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aV(t==null?D.Bq:t)
while(t.C())u+=s.$2(t.gU(t).a,e)}return u},
$S:1900}
C.d3l.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d3u.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aV(u==null?B.T:u)
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
t=J.aV(t==null?D.Bq:t)
while(t.C()){r=t.gU(t)
if(r.a!==a9&&!B.d.b8(w,new C.d3v(r)))w.push(r)}}B.d.bn(w,new C.d3w(a8))
B.d.b1(w,new C.d3x())
q=C.hAR(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.elZ],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gK(k)+B.d.gam(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bm7(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1901}
C.d3v.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d3w.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.d3x.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.d3y.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gM(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a2(v).k("bc<2>")).cI(0,0,B.q9)+88-w.gK(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gM(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:671}
C.d3z.prototype={
$1(d){return 16+d*156},
$S:258}
C.d3i.prototype={
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
t.n(0,d,new C.F_(r,new A.u(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.F_(s,new A.u(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.F_(s,new A.u(e,v)))}t=o.r.h(0,d)
t=J.aV(t==null?B.T:t)
s=o.w
while(t.C()){r=t.gU(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.J9(d,new A.u(e+t,w),s,s.length))}},
$S:187}
C.d3m.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aH5(new A.u(v.a,v.b+28),new A.u(w.a,w.b+28),!0,null))},
$S:124}
C.d3n.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d3o.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:741}
C.d3B.prototype={
$2(d,e){return B.k.aL(d.a,e.a)},
$S:741}
C.d3C.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:424}
C.d3D.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:189}
C.d3E.prototype={
$1(d){return d>=0.5},
$S:139}
C.f1W.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hn(A.aK(!1,v,!0,new A.a5(38,38,A.V(d,this.a.c?B.c:B.cC,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1903}
C.eEd.prototype={
$1(d){var w=null,v=A.m(8),u=B.bT.j(0.12),t=A.m(8)
return new A.C(B.og,A.aK(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eR5,B.L,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.Lk,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eEc(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.eEc.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.djr.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.djq.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.n4,B.L,w,w)
return A.eh(A.a([A.bJ(!1,B.dd,w,w,!0,w,w,new C.djo(d),w,w),A.bJ(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lX,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.djp(d),w,w)],x.p),B.b9,B.En,w,u,D.bov,w,D.bqr,new A.b7(v,B.Z),w,w)},
$S:19}
C.djo.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.djp.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.djA.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.djB.prototype={
$1(d){var w=this.a
return w.m(new C.djz(w,d))},
$S:z+37}
C.djz.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.djC.prototype={
$1(d){var w=null
return A.q0(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.djF.prototype={
$1(d){var w=this.a
return w.m(new C.djy(w,d))},
$S:33}
C.djy.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.djE.prototype={
$1(d){var w=null
return A.q0(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.djG.prototype={
$1(d){var w=this.a
return w.m(new C.djx(w,d))},
$S:33}
C.djx.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.djH.prototype={
$0(){var w=this.a
return w.m(new C.djw(w))},
$S:0}
C.djw.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.djI.prototype={
$0(){var w=this.a
return w.m(new C.djv(w))},
$S:0}
C.djv.prototype={
$0(){return++this.a.at},
$S:0}
C.djJ.prototype={
$0(){var w=this.a
return w.m(new C.dju(w))},
$S:0}
C.dju.prototype={
$0(){return--this.a.ax},
$S:0}
C.djK.prototype={
$0(){var w=this.a
return w.m(new C.djt(w))},
$S:0}
C.djt.prototype={
$0(){return++this.a.ax},
$S:0}
C.djL.prototype={
$1(d){var w=this.a
return w.m(new C.djs(w,d))},
$S:9}
C.djs.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.djD.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.djM.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bT.j(0.18)
else w=q.c.a?B.dT:B.c
v=A.m(12)
if(p)u=B.bT
else u=(q.c.a?B.dX:B.bX).j(0.85)
u=A.I(u,B.r,p?1.5:1)
if(p)t=B.bT
else t=q.c.a?B.bq:B.bo
t=A.V(f,t,r,r,r,18)
if(p)s=B.bT
else s=q.c.a?B.bq:B.bo
return A.D(A.aF(!1,B.a1,!0,r,A.aK(!1,o,!0,A.dh(r,A.v(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.bc,new A.o(w,r,u,v,r,r,B.n),B.eL,r,r,r,B.jM,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.djN(q,d),r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ae),1)},
$S:z+39}
C.djN.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.djW.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.c5v.prototype={
$2(d,e){return new A.bu(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:90}
C.c5C.prototype={
$1(d){return d.ad()},
$S:z+5}
C.c5D.prototype={
$2(d,e){var w=J.b6(e,new C.c5B(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bu(d,w,x.d2)},
$S:z+41}
C.c5B.prototype={
$1(d){return d.ad()},
$S:z+21}
C.c5x.prototype={
$1(d){return C.aj7(A.a0(d,x.N,x.z))},
$S:z+8}
C.c5y.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c5z.prototype={
$1(d){return C.fVv(A.a0(d,x.N,x.z))},
$S:z+11}
C.c5A.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c5H.prototype={
$1(d){return new A.aEb(d.f.length,d.a,d.b)},
$S:z+43}
C.c5I.prototype={
$2(d,e){return B.a.aL(d.c,e.c)},
$S:605}
C.c5E.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c5F.prototype={
$1(d){return d.cBC(C.FH(d,this.a))},
$S:z+44}
C.dPt.prototype={
$1(d){return C.tB(d,this.a.a.c)},
$S:z+2}
C.dPu.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dPy.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dPz.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dPq.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aY2(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xK("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oO(r.c,r.e),$async$$0)
case 4:s.xK(p)
w=5
return A.b(s.IC(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPr.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aY2(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xK("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oO(r.c,r.e),$async$$0)
case 4:s.xK(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPs.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.TY(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xK("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xK("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xK("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.IC(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a8(j)
o=r.a
if(o.c==null){w=1
break}o.xK(B.a.e5(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dPx.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aY1(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xK("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a4(r,!1).ci(A.eo(new C.dPw(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oO(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPw.prototype={
$1(d){var w=this.b
return new C.Z3(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dPv.prototype={
$1(d){return D.fAc},
$S:z+46}
C.dPB.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dPC.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dPA(w,d)
return new A.C(B.d8,new C.bcg(this.b,d.c,d.a,w,null),null)},
$S:1904}
C.dPA.prototype={
$0(){return this.a.W9(this.b.b)},
$S:0}
C.dPl.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dPm.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dPn.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dPo.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dPp.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.dPD.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.dr(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a4(this.b,!1).N(s)
return}},
$S:190}
C.dBr.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dBs.prototype={
$0(){return B.d.gK(D.a1v)},
$S:z+48}
C.dBt.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.av(A.V(this.b.d,B.c.j(0.95),w,w,D.cLV,44),w,w,w),w,w,new C.bh_(u,t,v,w),B.at)},
$S:69}
C.fyO.prototype={
$1(d){return A.oy(new C.fyN(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:131}
C.fyN.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dT:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.r5,24)],x.V),o=r?B.dX:B.bX
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aT.j(0.25),B.bT.j(0.18)],x.O)
w=A.p(t,D.bDt,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a6(B.a3,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.az,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.v(A.a([B.S,o,new A.C(E.ag2,A.A(A.a([w,B.bd,A.D(A.v(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bq:B.bo,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ib(!0,t,e,B.y,D.eEz,new C.fyM(this.b,s),20,B.afD,t,B.ai,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.f,t,t,new A.o(q,t,t,B.kr,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:111}
C.fyM.prototype={
$2(d,e){var w=null,v=D.a1v[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.I(s?B.dX:B.bX,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.ej,8)],x.V),p=A.m(15),o=A.D(new C.a4V(v.a,!0,w),1),n=s?B.jj:B.iK,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.az,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a1,!0,w,A.aK(!1,u,!0,A.ex(A.bv(p,A.v(A.a([o,A.p(w,A.v(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bq:B.bo,w,w,w,w,w,w,w,w,10,w,w,B.a4,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.l2,w,w,w)],l),B.aj,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fyL(this.a,v),w,w,w,w,w,w,w),B.f,B.K,0,w,w,w,w,w,B.ae)},
$S:76}
C.fyL.prototype={
$0(){A.a4(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cd9.prototype={
$0(){return this.a.ae_(this.b)},
$S:0}
C.fya.prototype={
$1(d){return D.fwy},
$S:z+74}
C.fFC.prototype={
$1(d){var w=this
return new C.a_M(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fyf.prototype={
$1(d){return new C.XI(this.a,null)},
$S:z+51}
C.fye.prototype={
$1(d){return D.fxx},
$S:z+52}
C.cWo.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.cWp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cWn(w,d))},
$S:33}
C.cWn.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cWq.prototype={
$1(d){return this.a.Jb()},
$S:2}
C.cWr.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.cWk.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.cWl.prototype={
$1(d){return this.a.Jb()},
$S:2}
C.cWm.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.ctY.prototype={
$0(){},
$S:0}
C.cu3.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.cu4.prototype={
$0(){return this.a.aLx(-1)},
$S:0}
C.cu5.prototype={
$1(d){return this.a.m(new C.cu2())},
$S:2}
C.cu2.prototype={
$0(){},
$S:0}
C.cu6.prototype={
$0(){return this.a.aLx(1)},
$S:0}
C.cu7.prototype={
$1(d){return this.a.m(new C.cu1())},
$S:2}
C.cu1.prototype={
$0(){},
$S:0}
C.cu8.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aT.j(0.2)
if(s)v=B.aT
else v=this.b.a?B.dX:B.bX
return A.tW(u,u,B.aZ,r,u,new C.cu0(t,d),B.At,s,w,u,new A.aA(v,1,B.r,-1),B.c7)},
$S:1905}
C.cu0.prototype={
$1(d){var w=this.a
return w.m(new C.ctZ(w,this.b))},
$S:9}
C.ctZ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cu9.prototype={
$1(d){return this.a.m(new C.cu_())},
$S:2}
C.cu_.prototype={
$0(){},
$S:0}
C.cua.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.f1o.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a4(this.b,!1).N(w)},
$S:2}
C.f1p.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.f1q.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a4(this.b,!1).N(w)},
$S:0}
C.f1m.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbuH()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.C(D.bqq,new A.eq(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.btd(p,v,this.b.a,u,t,r),r,r,B.at)},
$S:69}
C.f1n.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dH.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aT,B.bT,w)
s.toString
s=A.a([B.aZ,s,B.aT],x.O)
return A.aF(!1,B.a1,!0,p,A.aK(!1,v,!0,A.ex(D.dYy,r,new A.o(r,r,A.I(B.c.j(0.4),B.r,1.5),u,r,new A.a6(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.K,0,r,r,r,r,r,B.ae)},
$S:140}
C.fwV.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:67}
C.eBn.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eBe.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eBf.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eBl.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e5(new C.eBk(w,this.b),null)},
$S:20}
C.eBk.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dT:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.az,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eD(w,u,new A.C(B.afX,A.v(A.a([s,B.ao,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bq:B.bo,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ac,C.h0h(new C.eBh(r,e),r.a),B.ay,A.A(A.a([A.D(A.dW(B.dd,new C.eBi(d),w),1),B.aw,A.D(A.bI(B.SG,new C.eBj(r,d),A.bk(B.aT,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.aj,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.cZ,w,new A.b7(t,B.Z),w)},
$S:97}
C.eBh.prototype={
$1(d){return this.b.$1(new C.eBg(this.a,d))},
$S:33}
C.eBg.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eBi.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.eBj.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).N(w)
return null},
$S:0}
C.eBm.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Ru(this.b)},
$S:0}
C.eB9.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.b85(w)},
$S:0}
C.eBd.prototype={
$1(d){return this.bgW(d)},
bgW(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Km(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iK(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eBc.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a1<1>")
w=A.B(new A.a1(w,new C.eBb(this.b),v),v.k("G.E"))
u.d=t.b85(w)},
$S:0}
C.eBb.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eBo.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iK(this.b,w)},
$S:0}
C.eBp.prototype={
$1(d){return this.a.byH(d,this.b)},
$S:z+55}
C.eBa.prototype={
$0(){return this.a.a88(this.b)},
$S:0}
C.fFu.prototype={
$1(d){return new C.ac3(this.a,this.b,this.c,null)},
$S:z+56}
C.eBr.prototype={
$0(){return this.a.YL(this.b)},
$S:0}
C.eBs.prototype={
$0(){return this.a.OP(this.b)},
$S:0}
C.eBt.prototype={
$0(){return this.a.DC(this.b)},
$S:0}
C.eBu.prototype={
$0(){return this.a.YM(this.b)},
$S:0}
C.eBq.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.eB4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eB5.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eB6.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
C.eB8.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.pt(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eB7(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eB7.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eBR.prototype={
$2(d,e){return d+e.gwp()},
$S:z+59}
C.eBN.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eBO.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eBy.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dT:B.c,s=A.m(24),r=A.p(v,D.bDT,B.f,v,v,new A.o(B.aE.j(u?0.18:0.08),v,A.I(B.aE.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.az,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bq:B.bo,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aP:B.az
u=u?B.dX:B.bX
w=x.p
return A.eD(v,t,new A.C(B.x4,A.v(A.a([r,B.aO,q,B.P,p,B.d5,A.A(A.a([A.D(A.dW(B.n7,new C.eBw(d),A.dd(v,v,v,v,v,v,v,v,v,o,v,v,B.f3,v,new A.b7(A.m(14),B.Z),new A.aA(u,1,B.r,-1),v,v,v,v)),1),B.aw,A.D(A.bI(D.fjg,new C.eBx(d),A.bk(B.aE,v,v,v,v,v,B.f3,v,new A.b7(A.m(14),B.Z),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.cZ,v,new A.b7(s,B.Z),v)},
$S:47}
C.eBw.prototype={
$0(){A.a4(this.a,!1).N(!1)
return null},
$S:0}
C.eBx.prototype={
$0(){A.a4(this.a,!1).N(!0)
return null},
$S:0}
C.eBH.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dT:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.fG,28)],x.V),g=k?D.cSe:B.a0V,f=x.p
g=A.p(m,A.v(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.eyR,B.au,new A.bK(B.a3,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cs,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a6(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.ag_,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.D(v.b1t(B.b2,B.iO,new C.eBE(v,d),l,"Camera import","Scan QR"),1),B.aw,A.D(v.b1t(B.cu,M.xJ,new C.eBF(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bo,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aE.j(k?0.14:0.06)
q=A.m(16)
p=A.I(B.aE.j(0.28),B.r,1)
o=A.p(m,D.bDi,B.f,m,m,new A.o(B.aE.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bR,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.az,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.v(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bq:B.bo,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.bq(!0,new A.C(B.uO,A.p(m,A.v(A.a([g,new A.C(B.afY,A.v(A.a([w,B.S,u,B.bu,t,B.S,A.aF(!1,B.a1,!0,m,A.aK(!1,s,!0,A.p(m,A.A(A.a([o,B.bd,n,A.V(B.ed,k?B.bq:B.bo,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.by,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eBG(v,d,l),m,m,m,m,m,m,m),B.f,B.K,0,m,m,m,m,m,B.ae)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ah,!0,!0)},
$S:32}
C.eBE.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).N(null)
w=2
return A.b(u.a.uY("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eBF.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).N(null)
w=2
return A.b(u.a.uY("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eBG.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).N(null)
w=2
return A.b(u.a.MJ(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eBC.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dT:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eQ,24)],x.V),k=o?B.dX:B.bX
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bq:B.bo
u=A.bv(w,new A.a5(48,48,C.aOk(!0,A.m(12),48,Q.LU,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.az,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.A9(v.gwp())
s=x.p
r=this.a
return A.bq(!0,new A.C(B.uO,A.p(q,A.v(A.a([B.S,k,new A.C(D.afV,A.A(A.a([u,B.bd,A.D(A.v(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bq:B.bo,q,q,q,q,q,q,q,q,12,q,q,B.a4,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.A6,r.cfw(B.tx,B.aT,new C.eBA(d),p,"QR code or backup file","Transfer project"),r.aZy(!0,B.e9,B.aE,new C.eBB(d),p,"Remove from this device","Delete project"),B.S],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ah,!0,!0)},
$S:32}
C.eBA.prototype={
$0(){A.a4(this.a,!1).N("transfer")
return null},
$S:0}
C.eBB.prototype={
$0(){A.a4(this.a,!1).N("delete")
return null},
$S:0}
C.eBD.prototype={
$1(d){return this.bgX(d)},
bgX(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Km(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.va(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eBU.prototype={
$0(){var w=this.a
w.a.bp()
w.m(new C.eBT(w))},
$S:0}
C.eBT.prototype={
$0(){return this.a.r++},
$S:0}
C.eBV.prototype={
$0(){var w=this.a
return w.m(new C.eBS(w))},
$S:0}
C.eBS.prototype={
$0(){return this.a.r++},
$S:0}
C.eBv.prototype={
$0(){var w=this.a.c
w.toString
return A.iK(w,null)},
$S:0}
C.eBz.prototype={
$0(){return this.a.c8U(this.b)},
$S:0}
C.eBQ.prototype={
$0(){var w=this.a
return w.m(new C.eBP(w,this.b))},
$S:0}
C.eBP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eBK.prototype={
$0(){return this.a.uY("scan")},
$S:0}
C.eBL.prototype={
$0(){return this.a.uY("file")},
$S:0}
C.eBM.prototype={
$1(d){return this.a.cfx(d,this.b)},
$S:z+60}
C.eBJ.prototype={
$0(){return this.a.DG(this.b)},
$S:0}
C.eBI.prototype={
$0(){return this.a.Zf(this.b,this.c)},
$S:0}
C.ctp.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cto.prototype={
$1(d){return d.ad()},
$S:z+62}
C.ctm.prototype={
$1(d){return C.hjz(A.a0(d,x.N,x.z))},
$S:z+63}
C.ctn.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.fi7.prototype={
$1(d){return d.y===D.ka},
$S:z+2}
C.fFY.prototype={
$1(d){return C.bz_(d,this.a)},
$S:z+2}
C.fgQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bL8.prototype={
$1(d){return!d.as},
$S:z+1}
C.bL7.prototype={
$1(d){return d.ad()},
$S:z+15}
C.bL4.prototype={
$1(d){return C.fVw(A.a0(d,x.N,x.z))},
$S:z+14}
C.bL5.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bL6.prototype={
$1(d){return J.k(d)},
$S:17}
C.f8X.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.f4E.prototype={
$1(d){return C.fM9(A.a0(d,x.N,x.z))},
$S:z+67}
C.f4F.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.f4G.prototype={
$2(d,e){return e.e.aL(0,d.e)},
$S:z+13}
C.fy1.prototype={
$1(d){return J.k(d)},
$S:17}
C.fy2.prototype={
$1(d){return d.a},
$S:z+69}
C.fy3.prototype={
$1(d){return d.length!==0},
$S:3}
C.fy4.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+9}
C.fy5.prototype={
$1(d){return d.Ru(null).ad()},
$S:z+70}
C.fFW.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fiz.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fkX.prototype={
$1(d){return C.aj7(A.a0(d,x.N,x.z))},
$S:z+8}
C.fkY.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fkZ.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fl_.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fl0.prototype={
$1(d){return C.tB(d,this.a)},
$S:z+2}
C.fxP.prototype={
$1(d){return C.tB(d,this.a)},
$S:z+2}
C.fFR.prototype={
$1(d){return C.aj7(A.a0(d,x.N,x.z))},
$S:z+8}
C.fFS.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fFT.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fig.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fih.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fG1.prototype={
$1(d){return!d.as},
$S:z+1}
C.fhR.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fhS.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fhT.prototype={
$2(d,e){return B.o.aL(d.Q,e.Q)},
$S:z+19}
C.fFD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.flJ.prototype={
$1(d){return d.Q},
$S:z+72}
C.fxK.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fkU.prototype={
$1(d){return C.aj7(A.a0(d,x.N,x.z))},
$S:z+8}
C.fkV.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fkW.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fxG.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.f5a.prototype={
$1(d){return d.length!==0},
$S:3}
C.f5b.prototype={
$1(d){return C.fVw(A.a0(d,x.N,x.z))},
$S:z+14}
C.f5c.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.f5d.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.f5e.prototype={
$1(d){return d.length!==0},
$S:3}
C.f5r.prototype={
$2(d,e){return d.eP(new C.f5s(e))},
$S:1906}
C.f5s.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c6},
$S:1907}
C.f5o.prototype={
$1(d){return C.hFr(d,this.a)},
$S:z+73}
C.f5p.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.f5q.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.f9B.prototype={
$1(d){return d.a},
$S:z+49}
C.f9C.prototype={
$1(d){return d.length!==0},
$S:3}
C.f9D.prototype={
$2(d,e){return e.r.aL(0,d.r)},
$S:z+6}
C.fbF.prototype={
$1(d){return d.ad()},
$S:z+5}
C.fgc.prototype={
$1(d){return C.h5L(d,C.FH(d,this.a))},
$S:z+5}
C.fgd.prototype={
$1(d){return C.h5M(d,C.FH(d,this.a))},
$S:z+5};(function aliases(){var w=C.aJr.prototype
w.br_=w.q
w=C.aLA.prototype
w.btk=w.q
w=C.aLB.prototype
w.btl=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.aAY.prototype,"gccs","cct",25)
var s
w(s=C.ay_.prototype,"gc5x","c5y",42)
v(s,"gaJO","Mh",0)
v(s,"gckv","A8",0)
v(s,"gbGi","MX",0)
v(s,"gcy1","xL",0)
v(s,"gcev","ZW",0)
v(s,"gbBM","MF",0)
v(s,"gbGJ","VB",0)
w(s,"gbLb","bLc",71)
v(s,"gbwi","zd",0)
v(C.ay0.prototype,"gcxY","Ex",0)
v(s=C.aBy.prototype,"gadC","vb",0)
v(s,"gc8a","Z7",0)
v(s,"gaNO","H3",0)
v(s=C.aBv.prototype,"gcul","a0Y",0)
v(s,"gadC","vb",0)
v(s,"gciC","a_B",0)
v(s,"gc96","Zk",0)
w(s,"gc5r","c5s",30)
v(s,"gbGA","H8",0)
v(s,"gcvf","cvg",3)
v(s,"gbXt","Xf",0)
w(s,"gc3Y","c3Z",23)
v(s,"gc7V","c7W",3)
v(s=C.azX.prototype,"gc1N","Oo",0)
v(s,"gc1P","c1Q",3)
v(s,"gbDh","a7L",0)
v(s=C.aBx.prototype,"gbJJ","W5",0)
v(s,"gbTV","WJ",0)
v(s,"gcoP","a0q",0)
v(s,"gcl4","a02",0)
v(C.aBw.prototype,"gckN","afl",0)
v(C.aqH.prototype,"gc3W","YK",0)
v(C.awM.prototype,"ga0I","Jb",3)
v(C.awL.prototype,"ga0I","Jb",3)
v(C.avv.prototype,"ga0I","Jb",3)
v(s=C.aD1.prototype,"gaYW","Pj",0)
v(s,"gbv9","Um",0)
v(s,"gc8V","c8W",3)
w(C.aD0.prototype,"gc4M","c4N",57)
u(C.aD2.prototype,"gaNI",0,0,null,["$1","$0"],["H2","bEx"],58,0,0)
t(C,"hcY","hP_",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aC,[C.amD,C.tT,C.mZ,C.GL,C.adf,C.J1,C.tU,C.J9,C.F_,C.bce,C.aH5,C.anN,C.d3F,C.lo,C.aRb,C.aRa,C.aPg,C.tp,C.qE,C.l8,C.hT,C.kr,C.aF5])
u(A.i7,[C.fpA,C.fpz,C.fpB,C.fyH,C.ff8,C.ff9,C.ffe,C.fni,C.fnh,C.fng,C.bZN,C.fzc,C.fz4,C.fzg,C.fio,C.dC7,C.dC2,C.dC3,C.dBG,C.dBC,C.dCm,C.dCn,C.dCg,C.dCh,C.dCo,C.dCp,C.fiT,C.fkR,C.fkS,C.fxN,C.fFQ,C.fif,C.fyl,C.d2S,C.d2e,C.d2n,C.d2E,C.d2j,C.d2p,C.d2g,C.d2t,C.d2u,C.d2s,C.d2J,C.d2I,C.d4D,C.d4E,C.d4F,C.d35,C.d3a,C.d39,C.cCa,C.cCc,C.cVC,C.cW0,C.cW1,C.cW4,C.cW6,C.cW7,C.cW8,C.cWa,C.cWb,C.dPH,C.dP6,C.dP1,C.dOA,C.dON,C.dOQ,C.dOZ,C.dOo,C.dP9,C.dP3,C.dOq,C.dOr,C.dOs,C.dOx,C.dOv,C.dOu,C.dOK,C.dOL,C.dOF,C.dPg,C.dPc,C.d3g,C.d3h,C.fiX,C.fiY,C.fiZ,C.fiV,C.fiW,C.fj1,C.fj2,C.fj3,C.fj_,C.fj0,C.d3A,C.d3q,C.d3l,C.d3v,C.d3w,C.d3z,C.d3n,C.d3C,C.d3D,C.d3E,C.f1W,C.eEd,C.djq,C.djA,C.djB,C.djC,C.djF,C.djE,C.djG,C.djL,C.djM,C.c5C,C.c5B,C.c5x,C.c5y,C.c5z,C.c5A,C.c5H,C.c5E,C.c5F,C.dPt,C.dPw,C.dPv,C.dPC,C.dPD,C.dBr,C.fyO,C.fya,C.fFC,C.fyf,C.fye,C.cWp,C.cWq,C.cWl,C.cu5,C.cu7,C.cu8,C.cu0,C.cu9,C.f1o,C.fwV,C.eBl,C.eBh,C.eBd,C.eBb,C.eBp,C.fFu,C.eBy,C.eBH,C.eBC,C.eBD,C.eBM,C.cto,C.ctm,C.ctn,C.fi7,C.fFY,C.fgQ,C.bL8,C.bL7,C.bL4,C.bL5,C.bL6,C.f4E,C.f4F,C.fy1,C.fy2,C.fy3,C.fy4,C.fy5,C.fFW,C.fiz,C.fkX,C.fkY,C.fl_,C.fl0,C.fxP,C.fFR,C.fFS,C.fFT,C.fig,C.fih,C.fG1,C.fhR,C.fhS,C.fFD,C.flJ,C.fxK,C.fkU,C.fkV,C.fxG,C.f5a,C.f5b,C.f5c,C.f5d,C.f5e,C.f5s,C.f5o,C.f5p,C.f9B,C.f9C,C.fbF,C.fgc,C.fgd])
u(A.au,[C.aWA,C.aj5,C.aSq,C.Xo,C.b8_,C.bcc,C.bfT,C.bto,C.bja,C.abI,C.bfS,C.abH,C.bfR,C.azY,C.aG8,C.abJ,C.IY,C.bcd,C.ab_,C.bcb,C.bcg,C.aWy,C.aqH,C.ac3])
u(A.nh,[C.b8B,C.b9M,C.b9D,C.aF0,C.beX,C.bcf,C.bbk,C.bh_,C.btd])
u(A.jq,[C.fz9,C.fza,C.fzb,C.fz2,C.fz3,C.fze,C.fzf,C.dCj,C.dC5,C.dC8,C.dBN,C.dBO,C.dBP,C.dBM,C.dBU,C.dBL,C.dBV,C.dBW,C.dBK,C.dBX,C.dBJ,C.dBY,C.dBI,C.dBZ,C.dBA,C.dBB,C.dBH,C.dC_,C.dBF,C.dC0,C.dBE,C.dBQ,C.dBD,C.dBR,C.dBz,C.dBS,C.dBT,C.dCk,C.dCl,C.dC9,C.dCa,C.dCb,C.dCc,C.dCd,C.dCe,C.dCf,C.dCr,C.dCi,C.fiU,C.d2c,C.d2a,C.d2b,C.d2d,C.d2R,C.d2G,C.d2D,C.d2f,C.d2H,C.d2l,C.d2m,C.d2o,C.d2F,C.d2k,C.d2q,C.d2O,C.d2A,C.d2z,C.d2B,C.d2C,C.d2v,C.d2x,C.d2y,C.d2r,C.d2K,C.d2N,C.d2h,C.d2i,C.d4C,C.d4B,C.d4A,C.d4z,C.d4G,C.d4y,C.d4H,C.d36,C.d37,C.d38,C.d3b,C.d34,C.d33,C.cCb,C.cVB,C.cVO,C.cVN,C.cW2,C.cVM,C.cW3,C.cVL,C.cVK,C.cW5,C.cVJ,C.cVW,C.cVV,C.cWc,C.dPG,C.dPF,C.dPI,C.dPJ,C.dPK,C.dPE,C.dPM,C.dPL,C.dP4,C.dP5,C.dP7,C.dOB,C.dOP,C.dOO,C.dOR,C.dP0,C.dOU,C.dOT,C.dOV,C.dOS,C.dOW,C.dOX,C.dP_,C.dOp,C.dP2,C.dOt,C.dOw,C.dOy,C.dP8,C.dOE,C.dOC,C.dOG,C.dOH,C.dOD,C.dOI,C.dOM,C.dPh,C.dPi,C.dPa,C.dPd,C.dPe,C.dPf,C.dPk,C.dPb,C.dOz,C.d3f,C.d3e,C.d3j,C.d3t,C.d3k,C.eEc,C.djr,C.djo,C.djp,C.djz,C.djy,C.djx,C.djH,C.djw,C.djI,C.djv,C.djJ,C.dju,C.djK,C.djt,C.djs,C.djD,C.djN,C.djW,C.dPu,C.dPy,C.dPz,C.dPq,C.dPr,C.dPs,C.dPx,C.dPB,C.dPA,C.dPl,C.dPm,C.dPn,C.dPo,C.dPp,C.dBs,C.fyL,C.cd9,C.cWo,C.cWn,C.cWr,C.cWk,C.cWm,C.ctY,C.cu3,C.cu4,C.cu2,C.cu6,C.cu1,C.ctZ,C.cu_,C.cua,C.f1p,C.f1q,C.eBn,C.eBe,C.eBf,C.eBg,C.eBi,C.eBj,C.eBm,C.eB9,C.eBc,C.eBo,C.eBa,C.eBr,C.eBs,C.eBt,C.eBu,C.eBq,C.eB4,C.eB5,C.eB6,C.eB8,C.eB7,C.eBN,C.eBO,C.eBw,C.eBx,C.eBE,C.eBF,C.eBG,C.eBA,C.eBB,C.eBU,C.eBT,C.eBV,C.eBS,C.eBv,C.eBz,C.eBQ,C.eBP,C.eBK,C.eBL,C.eBJ,C.eBI])
u(A.ag,[C.amK,C.RD,C.Y5,C.Y9,C.Y7,C.XG,C.anQ,C.anK,C.YJ,C.anO,C.Z3,C.Z4,C.a4V,C.XI,C.XH,C.Xf,C.a_M,C.EN,C.avo,C.aqG,C.aqA,C.aqF,C.N7])
u(A.ah,[C.aAY,C.bc9,C.ay_,C.bcu,C.ay0,C.b9K,C.aBy,C.aBv,C.azX,C.aBx,C.aBw,C.bhi,C.aJr,C.awM,C.awL,C.avv,C.btg,C.aLA,C.aLB,C.aD1,C.biE,C.aD0,C.bv1])
u(A.kD,[C.dC4,C.dC6,C.dC1,C.dCq,C.fkT,C.bL3,C.d2Q,C.d2P,C.d2w,C.d2L,C.d2M,C.d3c,C.dOY,C.dOJ,C.dPj,C.d3s,C.d3r,C.d3p,C.d3u,C.d3x,C.d3y,C.d3i,C.d3m,C.d3o,C.d3B,C.c5v,C.c5D,C.c5I,C.dBt,C.fyN,C.fyM,C.f1m,C.f1n,C.eBk,C.eBR,C.ctp,C.f8X,C.f4G,C.fkZ,C.fhT,C.fkW,C.f5r,C.f5q,C.f9D])
t(C.bh0,C.aJr)
u(A.mq,[C.aa2,C.aHN,C.GM,C.aj6,C.ctq,C.ctr])
t(C.bte,C.aLA)
t(C.btf,C.aLB)
t(C.aD2,C.bv1)
t(C.b6s,A.b6h)
t(C.bth,A.a4A)
t(C.b6r,C.bth)
w(C.aJr,A.eQ)
w(C.aLA,A.c8)
w(C.aLB,A.c8)
v(C.bv1,A.eu)
v(C.bth,A.iY)})()
A.kj(b.typeUniverse,JSON.parse('{"aWA":{"au":[],"r":[]},"b8B":{"aB":[]},"amK":{"ag":[],"r":[]},"aAY":{"ah":["amK"]},"RD":{"ag":[],"r":[]},"aj5":{"au":[],"r":[]},"aSq":{"au":[],"r":[]},"bc9":{"ah":["RD"]},"Y5":{"ag":[],"r":[]},"Y9":{"ag":[],"r":[]},"Y7":{"ag":[],"r":[]},"XG":{"ag":[],"r":[]},"ay_":{"ah":["Y5"]},"bcu":{"ah":["Y9"]},"ay0":{"ah":["Y7"]},"Xo":{"au":[],"r":[]},"b9M":{"aB":[]},"b9D":{"aB":[]},"b9K":{"ah":["XG"]},"aF0":{"aB":[]},"beX":{"aB":[]},"b8_":{"au":[],"r":[]},"anQ":{"ag":[],"r":[]},"anK":{"ag":[],"r":[]},"YJ":{"ag":[],"r":[]},"abJ":{"au":[],"r":[]},"aBy":{"ah":["anQ"]},"aBv":{"ah":["anK"]},"bcc":{"au":[],"r":[]},"bcf":{"aB":[]},"bfT":{"au":[],"r":[]},"bbk":{"aB":[]},"bto":{"au":[],"r":[]},"bja":{"au":[],"r":[]},"azX":{"ah":["YJ"]},"abI":{"au":[],"r":[]},"bfS":{"au":[],"r":[]},"abH":{"au":[],"r":[]},"bfR":{"au":[],"r":[]},"azY":{"au":[],"r":[]},"aG8":{"au":[],"r":[]},"IY":{"au":[],"r":[]},"anO":{"ag":[],"r":[]},"Z3":{"ag":[],"r":[]},"Z4":{"ag":[],"r":[]},"aBx":{"ah":["anO"]},"bcd":{"au":[],"r":[]},"ab_":{"au":[],"r":[]},"bcb":{"au":[],"r":[]},"bcg":{"au":[],"r":[]},"aBw":{"ah":["Z3"]},"bhi":{"ah":["Z4"]},"aWy":{"au":[],"r":[]},"a4V":{"ag":[],"r":[]},"bh0":{"ah":["a4V"]},"bh_":{"aB":[]},"aqH":{"au":[],"r":[]},"XI":{"ag":[],"r":[]},"XH":{"ag":[],"r":[]},"Xf":{"ag":[],"r":[]},"a_M":{"ag":[],"r":[]},"awM":{"ah":["XI"]},"awL":{"ah":["XH"]},"avv":{"ah":["Xf"]},"btg":{"ah":["a_M"]},"EN":{"ag":[],"r":[]},"avo":{"ag":[],"r":[]},"bte":{"ah":["EN"]},"btf":{"ah":["avo"]},"btd":{"aB":[]},"aqG":{"ag":[],"r":[]},"aD1":{"ah":["aqG"]},"ac3":{"au":[],"r":[]},"aqA":{"ag":[],"r":[]},"aqF":{"ag":[],"r":[]},"biE":{"ah":["aqA"]},"aD0":{"ah":["aqF"]},"N7":{"ag":[],"r":[]},"aD2":{"ah":["N7"],"eu":[]},"b6r":{"iY":[],"fd":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.az
return{e2:w("aPg"),Q:w("qE"),n:w("br<n,n>"),c5:w("aRa"),dY:w("aRb"),d:w("eN<n?>"),e:w("GL"),B:w("mZ"),P:w("hT"),k:w("kr"),x:w("ax<~>"),f5:w("P<ah0>"),V:w("P<ac>"),t:w("P<qE>"),O:w("P<w>"),ac:w("P<eN<n?>>"),I:w("P<mZ>"),u:w("P<hT>"),_:w("P<kr>"),cl:w("P<ax<ak<a3<n,@>>>>"),R:w("P<n0>"),cq:w("P<ak<+(O,O)>>"),ez:w("P<a3<n,aC>>"),gE:w("P<a3<n,n>>"),c7:w("P<a3<n,@>>"),fD:w("P<mf>"),bp:w("P<o1>"),g:w("P<u>"),v:w("P<hD>"),L:w("P<+(n,n)>"),G:w("P<+(O,O)>"),bF:w("P<+count,id,name(H,n,n)>"),A:w("P<cP>"),s:w("P<n>"),aS:w("P<iN>"),p:w("P<r>"),C:w("P<fd>"),D:w("P<l8>"),fp:w("P<J1>"),M:w("P<J9>"),gZ:w("P<aF5>"),Y:w("P<adf>"),E:w("P<aH5>"),F:w("P<O>"),dC:w("P<H>"),dS:w("P<aB?>"),d4:w("P<n?>"),J:w("cq<ah<ag>>"),b:w("ak<mZ>"),do:w("ak<hT>"),r:w("ak<kr>"),U:w("ak<a3<n,@>>"),gk:w("ak<+(n,n)>"),bC:w("ak<+count,id,name(H,n,n)>"),h:w("ak<n>"),c:w("ak<l8>"),j:w("ak<@>"),fK:w("bu<n,n>"),d2:w("bu<n,ak<a3<n,@>>>"),a:w("a3<n,@>"),f:w("a3<@,@>"),gv:w("J<n,GN>"),w:w("iI"),g2:w("qY"),bV:w("amD"),fL:w("cn"),K:w("aC"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(O,ak<hT>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),e7:w("bm<O>"),gc:w("dB"),b4:w("cz<H>"),W:w("k7<n>"),l:w("r"),cM:w("fd"),i:w("l8"),cc:w("F_"),bw:w("abH<n?>"),cy:w("Jb"),q:w("mO"),y:w("R"),gR:w("O"),z:w("@"),S:w("H"),eK:w("ak<kr>?"),m:w("anN?"),cT:w("u?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),X:w("+qrPayload,token,usesRemaining(n,n,H)?"),gF:w("+members,trees,viewOnly(H,H,R)?"),Z:w("qg?"),T:w("n?"),aD:w("dB?"),o:w("l8?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aU5=new A.bt(B.h9,B.bD,B.h9,B.bD)
D.a8z=new A.bt(B.h9,B.jV,B.h9,B.jV)
D.aUh=new A.bt(B.hN,B.bD,B.bD,B.bD)
D.aUl=new A.aA(B.cY,1.4,B.r,-1)
D.aUv=new A.aA(B.ad,1,B.r,-1)
D.aVR=new A.aY(0,1/0,64,1/0)
D.aVV=new A.aY(0,84,0,1/0)
D.avj=w([B.ls,B.qq,B.c],x.O)
D.bNK=new A.a6(B.ax,B.aC,B.x,D.avj,null,null)
D.aWF=new A.o(null,null,null,null,null,D.bNK,B.n)
D.cRL=w([B.aT,B.bT],x.O)
D.bPN=new A.a6(B.b1,B.b3,B.x,D.cRL,null,null)
D.aWX=new A.o(null,null,null,null,null,D.bPN,B.n)
D.b1Y=new A.fh(null,null,null,null,null,E.jE,null,null,null,null)
D.a9U=new A.ct(B.A,null,null,D.b1Y,null)
D.k4=new A.w(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.eP9=new A.F(!0,D.k4,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6C=new A.x("No books on the shelf yet.",null,D.eP9,null,null,null,null,null,null,null,null,null)
D.dYz=new A.C(B.nz,D.f6C,null)
D.b0y=new A.ct(B.A,null,null,D.dYz,null)
D.b1p=new A.ct(B.A,null,null,W.Us,null)
D.b3k=new A.w(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.b3L=new A.w(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.aaV=new A.w(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b6h=new A.w(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b6y=new A.w(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.ac5=new A.w(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.baa=new A.w(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.bay=new A.w(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.DO=new A.w(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.bc3=new A.w(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.bee=new A.w(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.adC=new A.w(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.f1o=new A.x("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bjf=new A.eN(null,D.f1o,B.eZ,null,x.d)
D.f9I=new A.x("None",null,null,null,null,null,null,null,null,null,null,null)
D.bjh=new A.eN(null,D.f9I,B.eZ,null,x.d)
D.bjP=new A.b9(38e5)
D.bky=new A.i8(0,10,0,10)
D.bkI=new A.N(0,1,0,0)
D.bkS=new A.i8(0,4,0,4)
D.bl9=new A.N(10,10,14,10)
D.blk=new A.i8(10,4,10,4)
D.blu=new A.i8(10,8,10,8)
D.blv=new A.N(10,8,8,8)
D.blX=new A.N(12,6,12,2)
D.bme=new A.N(14,10,6,6)
D.bmf=new A.N(14,12,14,0)
D.bmj=new A.N(14,12,14,8)
D.bmm=new A.N(14,12,8,14)
D.bmq=new A.i8(14,14,14,14)
D.bn5=new A.N(16,2,16,10)
D.bnf=new A.N(16,6,16,30)
D.bnh=new A.N(16,6,16,8)
D.afV=new A.N(18,16,18,8)
D.bnS=new A.N(18,20,18,22)
D.afZ=new A.N(18,24,18,24)
D.bnY=new A.N(18,30,18,30)
D.bof=new A.N(20,10,12,20)
D.bot=new A.N(20,18,16,18)
D.bov=new A.N(20,18,20,6)
D.bpk=new A.N(24,32,24,28)
D.bpl=new A.N(24,36,24,32)
D.bpp=new A.N(26,26,24,14)
D.bpD=new A.N(2,4,2,8)
D.bpH=new A.N(30,0,30,0)
D.bpS=new A.N(38,22,22,22)
D.agf=new A.N(40,24,24,24)
D.bpU=new A.i8(40,40,40,40)
D.bpW=new A.N(46,30,30,30)
D.agi=new A.N(4,0,0,8)
D.bqm=new A.N(56,40,40,40)
D.bqq=new A.N(1.25,1.25,1.25,1.25)
D.bqr=new A.N(60,0,60,0)
D.bqu=new A.N(6,14,6,16)
D.bqG=new A.i8(7,3,7,3)
D.brb=new A.N(5,1.5,5,1.5)
D.brm=new A.N(6,2.5,6,2.5)
D.fla=new A.x("Signature",null,B.n5,null,null,null,null,null,null,null,null,null)
D.brH=new A.bG(1,B.bn,D.fla,null)
D.fiq=new A.x("Tell the AI what to fix",null,B.dI,null,null,null,null,null,null,null,null,null)
D.bsn=new A.bG(1,B.bn,D.fiq,null)
D.eWd=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkj=new A.x("Worksheets",null,D.eWd,null,null,null,null,null,null,null,null,null)
D.eWl=new A.F(!0,E.aav,null,null,null,null,13,B.cs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fje=new A.x("Track your project spending",null,D.eWl,null,null,null,null,null,null,null,null,null)
D.cKa=w([D.fkj,B.au,D.fje],x.p)
D.bgO=new A.fp(B.ai,B.e,B.j,B.F,null,B.p,null,0,D.cKa,null)
D.bss=new A.bG(1,B.bn,D.bgO,null)
D.eRD=new A.F(!0,E.jE,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0B=new A.x("FAMILY LIBRARY",null,D.eRD,null,null,null,null,null,null,null,null,null)
D.bsK=new A.bG(1,B.bn,D.f0B,null)
D.Lx=new C.GL("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Ya=new C.GM(0,"male")
D.ah8=new C.GM(1,"female")
D.xc=new C.GM(2,"unknown")
D.tg=new C.aj6(0,"owner")
D.Ly=new C.aj6(1,"editor")
D.ka=new C.aj6(2,"viewer")
D.ahU=new A.a_(61199,"MaterialIcons",!1)
D.bvB=new A.a_(61504,"MaterialIcons",!1)
D.bvC=new A.a_(61505,"MaterialIcons",!1)
D.bvE=new A.a_(61587,"MaterialIcons",!1)
D.bvK=new A.a_(61890,"MaterialIcons",!1)
D.bwD=new A.a_(63034,"MaterialIcons",!0)
D.bxs=new A.a_(63429,"MaterialIcons",!1)
D.ak7=new A.a_(984520,"MaterialIcons",!1)
D.bw9=new A.a_(62776,"MaterialIcons",!1)
D.bzO=new A.ae(D.bw9,26,B.aZ,null,null,null)
D.buA=new A.a_(57648,"MaterialIcons",!1)
D.bA5=new A.ae(D.buA,14,B.c,null,null,null)
D.bAn=new A.ae(B.EX,17,null,null,null,null)
D.bAT=new A.ae(E.Z2,null,null,null,null,null)
D.bAW=new A.ae(B.j6,18,E.jE,null,null,null)
D.YP=new A.a_(62044,"MaterialIcons",!1)
D.bB1=new A.ae(D.YP,null,B.aT,null,null,null)
D.bBR=new A.ae(B.dS,16,null,null,null,null)
D.bBY=new A.ae(D.YP,32,B.aT,null,null,null)
D.bCf=new A.ae(E.ahV,18,B.cY,null,null,null)
D.bDi=new A.ae(B.F6,22,B.aE,null,null,null)
D.bDt=new A.ae(B.dS,22,B.aZ,null,null,null)
D.bDE=new A.ae(O.YU,22,B.c,null,null,null)
D.bDJ=new A.ae(B.to,52,B.c,null,null,null)
D.bDT=new A.ae(B.F6,30,B.aE,null,null,null)
D.akJ=new A.ae(B.tx,22,B.c,null,null,null)
D.bEk=new A.ae(B.dS,17,null,null,null,null)
D.bED=new A.ae(B.v7,26,B.cY,null,null,null)
D.bFm=new A.ae(B.Zd,16,null,null,null,null)
D.bG5=new A.ae(B.to,24,B.c,null,null,null)
D.bGa=new A.ae(B.M_,20,B.qY,null,null,null)
D.bGf=new A.ae(B.EV,null,B.bT,null,null,null)
D.bGm=new A.ae(B.j6,18,B.c,null,null,null)
D.bGY=new A.ae(B.cv,22,B.ad,null,null,null)
D.bHM=new A.ae(B.e9,16,B.ad,null,null,null)
D.bHX=new A.ae(D.YP,20,B.aT,null,null,null)
D.al9=new A.ae(B.hv,20,null,null,null,null)
D.bIq=new A.ae(B.cv,18,D.k4,null,null,null)
D.bII=new A.ae(B.xx,28,B.c,null,null,null)
D.bIQ=new A.ae(B.LQ,null,B.fS,null,null,null)
D.bJ9=new A.ae(B.xx,24,B.c,null,null,null)
D.bJA=new A.ae(B.to,null,B.aT,null,null,null)
D.bJB=new A.ae(B.jr,20,B.cY,null,null,null)
D.bJV=new A.ae(B.EX,16,null,null,null,null)
D.bLr=new A.e_(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ev,!0,null,null,null,null)
D.cYE=w([B.bs,B.aT,B.f6,B.aZ],x.O)
D.bMe=new A.a6(B.ax,B.aC,B.x,D.cYE,null,null)
D.bb3=new A.w(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.bfW=new A.w(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cHb=w([D.bb3,D.bfW],x.O)
D.bMp=new A.a6(B.b1,B.b3,B.x,D.cHb,null,null)
D.cTq=w([B.eV,B.fr,B.f6],x.O)
D.bMt=new A.a6(B.ax,B.aC,B.x,D.cTq,null,null)
D.acC=new A.w(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.b3M=new A.w(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cJ5=w([D.acC,D.b3M],x.O)
D.bN1=new A.a6(B.b1,B.b3,B.x,D.cJ5,null,null)
D.b6J=new A.w(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.auI=w([D.b6J,D.acC],x.O)
D.bNl=new A.a6(B.ax,B.aC,B.x,D.auI,null,null)
D.abI=new A.w(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b8F=new A.w(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cSF=w([D.abI,D.b8F],x.O)
D.bNV=new A.a6(B.a3,B.a7,B.x,D.cSF,null,null)
D.d3o=w([B.bL,B.mE],x.O)
D.bNX=new A.a6(B.b1,B.b3,B.x,D.d3o,null,null)
D.bb_=new A.w(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.d4e=w([D.bb_,D.k4,D.k4,H.acV],x.O)
D.d6l=w([0,0.07,0.9,1],x.F)
D.bOq=new A.a6(B.a3,B.a7,B.x,D.d4e,D.d6l,null)
D.bOB=new A.a6(B.ax,B.aC,B.x,B.Pu,null,null)
D.d3_=w([B.aZ,B.aT,B.bT],x.O)
D.bPz=new A.a6(B.ax,B.aC,B.x,D.d3_,null,null)
D.c9U=w([B.bs,B.aZ,B.eV],x.O)
D.ca0=w([B.bz,B.aD,B.jg],x.O)
D.ca2=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b9H=new A.w(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.cg6=w([D.b9H,E.acl],x.O)
D.dUn=new A.u(1,2)
D.eB_=new A.cP(B.aW,D.dUn,3)
D.arV=w([D.eB_],x.A)
D.cnk=w([B.fV,B.c8,B.f5],x.O)
D.cpZ=w([B.bI,B.bv,B.bj],x.O)
D.btc=new C.tT("classic","Classic leather","Gold-edged brown leather",D.auI,E.jE,E.jE,"\u2766",B.L,!0,!1,!1,!1)
D.b38=new A.w(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.beY=new A.w(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cLG=w([D.b38,D.beY],x.O)
D.aco=new A.w(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.bt7=new C.tT("ornate","Ornate gold","Double gold border and flourishes",D.cLG,D.aco,D.aco,"\u2726",B.L,!0,!0,!0,!1)
D.b6p=new A.w(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.bbI=new A.w(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cEh=w([D.b6p,D.bbI],x.O)
D.bt6=new C.tT("parchment","Parchment","Old paper with dark ink",D.cEh,D.DO,G.il,"\u2767",B.L,!0,!1,!1,!0)
D.aah=new A.w(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.bdz=new A.w(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.d1q=w([D.aah,D.bdz],x.O)
D.b9h=new A.w(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.bcZ=new A.w(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.bt9=new C.tT("minimal","Clean paper","Plain and elegant, like a printed book",D.d1q,D.b9h,D.bcZ,"",B.L,!0,!0,!1,!0)
D.btb=new C.tT("midnight","Midnight","Deep blue with silver stars",H.av_,B.cm,B.bN,"\u2727",B.L,!0,!0,!1,!1)
D.bt5=new C.tT("emerald","Emerald library","Green cloth, title on the left",X.asj,E.jE,B.fW,"\u25c6",B.bg,!0,!1,!1,!1)
D.bdW=new A.w(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.d0_=w([B.eF,D.bdW],x.O)
D.baj=new A.w(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.bbk=new A.w(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bta=new C.tT("rose","Rose vintage","Burgundy with rose-gold lettering",D.d0_,D.baj,D.bbk,"\u2740",B.L,!0,!1,!0,!1)
D.d3T=w([B.cC,H.o9],x.O)
D.bt8=new C.tT("modern","Modern","Dark, bold, left-aligned",D.d3T,B.aV,B.c,"",B.bg,!1,!0,!1,!1)
D.a08=w([D.btc,D.bt7,D.bt6,D.bt9,D.btb,D.bt5,D.bta,D.bt8],A.az("P<tT>"))
D.cDO=w([B.bT,B.bk],x.O)
D.baQ=new A.w(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cEt=w([D.aah,D.baQ],x.O)
D.b6m=new A.w(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cG_=w([D.b6m,B.db],x.O)
D.cHp=w([B.ba,B.iG,B.o3],x.O)
D.cHM=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.b3I=new A.w(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b81=new A.w(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.d6h=w([D.abI,D.b3I,D.b81],x.O)
D.btd=new C.tU("leather","Leather",D.d6h,"vintage")
D.cOB=w([B.dn,B.JX,N.UW],x.O)
D.btk=new C.tU("midnight","Midnight",D.cOB,"starry")
D.cHq=w([B.ft,B.e7,B.kZ],x.O)
D.btj=new C.tU("forest","Forest",D.cHq,"story")
D.d83=w([B.f0,B.eF,B.k5],x.O)
D.btg=new C.tU("burgundy","Burgundy",D.d83,"royal")
D.cpz=w([B.aD,B.p6,B.nf],x.O)
D.bth=new C.tU("royal","Royal",D.cpz,"royal")
D.cJG=w([B.bv,B.cC,H.o9],x.O)
D.bte=new C.tU("charcoal","Charcoal",D.cJG,"geo")
D.d6p=w([B.cb,B.dN,B.wx],x.O)
D.bti=new C.tU("sunset","Sunset",D.d6p,"sunset")
D.d70=w([B.iG,B.DP,B.UZ],x.O)
D.btf=new C.tU("ocean","Ocean",D.d70,"band")
D.y3=w([D.btd,D.btk,D.btj,D.btg,D.bth,D.bte,D.bti,D.btf],A.az("P<tU>"))
D.cK4=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cKA=w([B.ak,B.aJ,B.M],x.O)
D.cLL=w([B.eF,B.e7,B.dn,B.fk,B.wA,B.cY,B.jH,B.es,B.dm],x.O)
D.cLM=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.eB0=new A.cP(B.dl,B.dz,8)
D.cLV=w([D.eB0],x.A)
D.cMY=w([B.bY,B.dN,B.kw],x.O)
D.cNp=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cOx=w([B.bY,B.hA],x.O)
D.cQr=w([B.aM,B.zR,B.wp],x.O)
D.cRh=w([B.bJ,B.cq,B.dx,B.aM],x.O)
D.cRM=w([B.ji,B.cb,B.rN],x.O)
D.cSe=w([B.eV,B.cY],x.O)
D.cSK=w([B.cy,B.fA,B.hq],x.O)
D.cSV=w([B.aV,B.bk,B.dn],x.O)
D.cTn=w([B.ew,B.d2,B.e7],x.O)
D.cTD=w([B.dW,B.dn,B.JX],x.O)
D.cUQ=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a10=w(["leather","linen","plain","stars","rays"],x.s)
D.bzu=new A.a_(985219,"MaterialIcons",!1)
D.bz1=new A.a_(983781,"MaterialIcons",!1)
D.aut=w([B.aij,B.hX,B.m9,B.hY,D.bzu,B.Fg,B.pq,D.bz1,H.ajW,B.xz,B.ps,B.m8],A.az("P<a_>"))
D.a15=w(["double","single","corners","none"],x.s)
D.cXr=w([B.e0,B.bo,B.es],x.O)
D.cXE=w([],x.t)
D.Bq=w([],x.u)
D.cZK=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.d0R=w([B.aL,B.fA,B.fk],x.O)
D.d20=w([B.cr,B.o5,B.VO],x.O)
D.d2e=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dkz=new C.lo("construction","Construction","Jobsite & builds",B.v0)
D.dkG=new C.lo("house","Home Build","Houses & rooms",B.tp)
D.dkw=new C.lo("grocery","Grocery","Store & pantry",B.ZL)
D.dkv=new C.lo("calculator","Calculations","Math & estimates",B.Ma)
D.dkE=new C.lo("lumber","Materials","Lumber & supplies",B.Ms)
D.dks=new C.lo("kitchen","Kitchen","Remodel & meals",A5.aj7)
D.bz_=new A.a_(983756,"MaterialIcons",!1)
D.dkx=new C.lo("landscape","Landscaping","Yard & garden",D.bz_)
D.dkr=new C.lo("plumbing","Plumbing","Pipes & water",B.ot)
D.dkH=new C.lo("electrical","Electrical","Wiring & power",B.h3)
D.dkp=new C.lo("store","Retail Shop","Daily business",B.kH)
D.dkq=new C.lo("paint_remodel","Paint & Remodel","Colors & walls",A6.Zj)
D.byp=new A.a_(983311,"MaterialIcons",!1)
D.dkD=new C.lo("roofing","Roofing","Roofs & exteriors",D.byp)
D.bzc=new A.a_(983986,"MaterialIcons",!1)
D.dko=new C.lo("warehouse","Warehouse","Storage & stock",D.bzc)
D.dkB=new C.lo("vehicles","Vehicles","Fleet & transport",B.Fh)
D.bwb=new A.a_(62785,"MaterialIcons",!1)
D.dku=new C.lo("farm","Farm","Crops & livestock",D.bwb)
D.dkt=new C.lo("restaurant","Restaurant","Food & catering",B.tw)
D.dkA=new C.lo("tools","Tools","Workshop gear",B.Fd)
D.dkF=new C.lo("wallet","Cash & Wallet","Quick spending",B.jr)
D.bxn=new A.a_(63395,"MaterialIcons",!1)
D.dkC=new C.lo("concrete","Concrete","Foundation work",D.bxn)
D.dky=new C.lo("blueprint","Blueprint","Plans & design",Ad.aip)
D.a1v=w([D.dkz,D.dkG,D.dkw,D.dkv,D.dkE,D.dks,D.dkx,D.dkr,D.dkH,D.dkp,D.dkq,D.dkD,D.dko,D.dkB,D.dku,D.dkt,D.dkA,D.dkF,D.dkC,D.dky],A.az("P<lo>"))
D.d2H=w([B.bq,B.bo],x.O)
D.d3p=w([B.i3,B.nj,B.dB],x.O)
D.a1D=w(["top","middle","bottom"],x.s)
D.d5H=w([B.cx,B.bk,B.dn],x.O)
D.d6c=w([B.bb,B.d2,B.e7],x.O)
D.d7Z=w([B.bI,B.ak],x.O)
D.d8_=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dS4={top:0,middle:1,bottom:2}
D.dba=new A.br(D.dS4,["Top","Middle","Bottom"],x.n)
D.dRK={double:0,single:1,corners:2,none:3}
D.dbf=new A.br(D.dRK,["Double line","One line","Corners","None"],x.n)
D.dSQ={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dcD=new A.br(D.dSQ,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.dcP=new A.br(B.ia,[],A.az("br<H,+(n,n)>"))
D.dRX={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.BB=new A.br(D.dRX,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.az("br<n,H>"))
D.df7=new F.M_(32,null)
D.df8=new F.M_(40,null)
D.df9=new F.M_(46,null)
D.aDy=new C.aqF(null)
D.dVk=new A.u(8,14)
D.f7f=new A.x("Write a new book",null,B.iU,null,B.L,null,null,null,null,null,null,null)
D.dY0=new A.C(B.lv,D.f7f,null)
D.akk=new A.ae(B.hu,18,B.c,null,null,null)
D.f0W=new A.x("Add",null,B.n6,null,null,null,null,null,null,null,null,null)
D.cRw=w([D.akk,B.u3,D.f0W],x.p)
D.eyY=new A.cs(B.aX,B.e,B.Q,B.m,null,B.p,null,0,D.cRw,null)
D.dYm=new A.C(B.oh,D.eyY,null)
D.dYn=new A.C(E.aeN,W.Us,null)
D.eW9=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3S=new A.x("New Project",null,D.eW9,null,null,null,null,null,null,null,null,null)
D.cVc=w([D.akk,B.ab,D.f3S],x.p)
D.ez0=new A.cs(B.aX,B.e,B.Q,B.m,null,B.p,null,0,D.cVc,null)
D.dYy=new A.C(B.j4,D.ez0,null)
D.f64=new A.x("Choose your header",null,R.yU,null,null,null,null,null,null,null,null,null)
D.dYT=new A.C(B.hG,D.f64,null)
D.b2c=new A.fh(2.2,null,null,null,null,B.cY,null,null,null,null)
D.eDC=new A.a5(22,22,D.b2c,null)
D.b0u=new A.ct(B.A,null,null,D.eDC,null)
D.dYY=new A.C(B.WI,D.b0u,null)
D.bmz=new A.N(14,2,14,6)
D.fiZ=new A.x("The top of your book. Tap a design to see it.",null,N.a5V,null,null,null,null,null,null,null,null,null)
D.dYZ=new A.C(D.bmz,D.fiZ,null)
D.e_v=new A.iL(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.e_y=new A.iL(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aEM=new A.iL(1,0.9607843137254902,0.48627450980392156,0)
D.Hh=new A.iL(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.yA=new A.iL(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.e_E=new A.iL(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fzy=new C.beX(null)
D.bhH=new A.m4(D.fzy,null,B.at,null,null)
D.aIp=new A.cJ(0,0,0,0,null,null,D.bhH,null)
D.elZ=new A.z(-42,42)
D.eu3=new A.cM([0,0,1,1])
D.aJG=new A.a9(0,0,520,160)
D.aJT=new A.b7(B.rw,B.Z)
D.fiy=new A.x("Let the AI write it from your tree",null,B.kn,null,B.L,null,null,null,null,null,null,null)
D.btQ=new A.dl(1,B.ch,D.fiy,null)
D.cOw=w([E.a_d,B.ab,D.btQ],x.p)
D.eyG=new A.cs(B.aX,B.e,B.Q,B.m,null,B.p,null,0,D.cOw,null)
D.f0C=new A.x("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.d15=w([D.al9,B.ab,D.f0C],x.p)
D.eyO=new A.cs(B.aX,B.b9,B.j,B.m,null,B.p,null,0,D.d15,null)
D.bDy=new A.ae(B.hH,14,B.aZ,null,null,null)
D.eQk=new A.F(!0,B.aZ,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4h=new A.x("Cashier",null,D.eQk,null,null,null,null,null,null,null,null,null)
D.cVH=w([D.bDy,B.bp,D.f4h],x.p)
D.eyQ=new A.cs(B.aX,B.e,B.Q,B.m,null,B.p,null,0,D.cVH,null)
D.f0D=new A.x("Transfer & settings",null,B.dI,null,null,null,null,null,null,null,null,null)
D.bse=new A.bG(1,B.bn,D.f0D,null)
D.cGV=w([D.akJ,B.aw,D.bse],x.p)
D.eyR=new A.cs(B.aX,B.e,B.j,B.m,null,B.p,null,0,D.cGV,null)
D.eCm=new A.at(16,40)
D.eCr=new A.at(22,64)
D.eCy=new A.at(280,88)
D.eDi=new A.a5(30,null,null,null)
D.eEz=new A.hN(2,12,12,1.05,null)
D.f3Y=new A.x("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.eFj=new A.b1(D.f3Y,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f4c=new A.x("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aLI=new A.b1(D.f4c,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fbX=new A.x("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eFN=new A.b1(D.fbX,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.flI=new A.x("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.eFS=new A.b1(D.flI,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f62=new A.x("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eFZ=new A.b1(D.f62,null,null,null,null,null,null,null,null,null,null,null,null,B.fL,!1,null,null,null,B.q,null)
D.fja=new A.x("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aLM=new A.b1(D.fja,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f1c=new A.x("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eGo=new A.b1(D.f1c,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fmm=new A.x("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.eH7=new A.b1(D.fmm,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fhx=new A.x("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.eHw=new A.b1(D.fhx,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.flM=new A.x("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eHz=new A.b1(D.flM,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fds=new A.x("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eHB=new A.b1(D.fds,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f7P=new A.x("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.eHC=new A.b1(D.f7P,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f7Q=new A.x("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eIC=new A.b1(D.f7Q,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f4_=new A.x("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.eIU=new A.b1(D.f4_,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f5L=new A.x("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.eJc=new A.b1(D.f5L,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.fcZ=new A.x("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.eJs=new A.b1(D.fcZ,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.f8z=new A.x("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.eJt=new A.b1(D.f8z,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.q,null)
D.eMq=new A.F(!0,D.k4,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMQ=new A.F(!0,D.k4,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNr=new A.rg(!0,B.r6,null,null,null,null,B.dq,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.eNH=new A.F(!0,D.k4,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOd=new A.F(!0,B.aZ,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a5W=new A.rg(!0,B.QQ,null,null,null,null,B.dq,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePc=new A.F(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ePA=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR5=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR9=new A.F(!0,G.il,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eSn=new A.F(!0,B.M,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eT2=new A.F(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTJ=new A.F(!0,B.bT,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTO=new A.F(!0,B.bL,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eU9=new A.F(!0,D.DO,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eUi=new A.F(!0,B.aZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVf=new A.F(!0,B.cY,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVI=new A.F(!0,B.bT,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eW7=new A.F(!0,B.aZ,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXw=new A.F(!0,B.ak,null,null,null,null,11.5,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eXE=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aNQ=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a6r=new A.F(!0,B.ak,null,null,null,null,12,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZg=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZE=new A.F(!0,G.il,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZL=new A.F(!0,G.il,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_w=new A.x("Themes",null,B.oL,null,null,null,null,null,null,null,null,null)
D.f06=new A.x("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eQP=new A.F(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0s=new A.x("Debt receipt",null,D.eQP,null,B.L,null,null,null,null,null,null,null)
D.aNL=new A.F(!0,B.ak,null,null,null,null,11,B.a4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0J=new A.x("Person who owes",null,D.aNL,null,null,null,null,null,null,null,null,null)
D.f1H=new A.x("Notes",null,B.a62,null,null,null,null,null,null,null,null,null)
D.f25=new A.x("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.ePS=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f29=new A.x("Share",null,D.ePS,null,null,null,null,null,null,null,null,null)
D.f31=new A.x("Move your family trees",null,D.aNQ,null,null,null,null,null,null,null,null,null)
D.f3A=new A.x("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.f4b=new A.x("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.f5l=new A.x("Remove this book?",null,B.hk,null,null,null,null,null,null,null,null,null)
D.aOf=new A.x("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f6q=new A.x("What should the AI do?",null,B.dI,null,null,null,null,null,null,null,null,null)
D.f7L=new A.x("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.f8O=new A.x("Ribbon bookmark",null,B.iC,null,null,null,null,null,null,null,null,null)
D.eXq=new A.F(!0,B.aZ,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9f=new A.x("NGMY.ORG",null,D.eXq,null,B.L,null,null,null,null,null,null,null)
D.fav=new A.x("Scan family tree QR",null,B.ct,null,null,null,null,null,null,null,null,null)
D.eU1=new A.F(!0,B.c,null,null,null,null,13,B.a4,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbe=new A.x("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eU1,null,B.L,null,null,null,null,null,null,null)
D.fco=new A.x("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fcv=new A.x("Thumbnail",null,B.oL,null,null,null,null,null,null,null,null,null)
D.fd4=new A.x("Save the cover",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fdt=new A.x("Your photos",null,B.oL,null,null,null,null,null,null,null,null,null)
D.fdI=new A.x("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fe9=new A.x("Design your cover",null,R.yU,null,null,null,null,null,null,null,null,null)
D.fef=new A.x("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fei=new A.x("PICTURE",null,I.mq,null,null,null,null,null,null,null,null,null)
D.feE=new A.x("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.feG=new A.x("You can undo it right after.",null,N.Si,null,null,null,null,null,null,null,null,null)
D.ffa=new A.x("Print",null,B.u7,null,null,null,null,null,null,null,null,null)
D.ffx=new A.x("Amount owed",null,D.aNL,null,null,null,null,null,null,null,null,null)
D.ffK=new A.x("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fgi=new A.x("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fgl=new A.x("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fgK=new A.x("Debtor signature",null,B.a62,null,null,null,null,null,null,null,null,null)
D.fgS=new A.x("Change icon",null,E.aN7,null,null,null,null,null,null,null,null,null)
D.fhZ=new A.x("Family tree QR",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fio=new A.x("Download",null,B.u7,null,null,null,null,null,null,null,null,null)
D.fis=new A.x("Change",null,B.oL,null,null,null,null,null,null,null,null,null)
D.fjg=new A.x("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fjj=new A.x("WHAT SHOULD IT CHANGE?",null,I.mq,null,null,null,null,null,null,null,null,null)
D.fjT=new A.x("COLOUR",null,I.mq,null,null,null,null,null,null,null,null,null)
D.fk4=new A.x("Do it",null,B.ct,null,null,null,null,null,null,null,null,null)
D.fk7=new A.x("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.fl4=new A.x("Create Family Tree",null,B.eT,null,null,null,null,null,null,null,null,null)
D.eLq=new A.F(!0,E.jE,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flj=new A.x("Write the first page myself",null,D.eLq,null,null,null,null,null,null,null,null,null)
D.flP=new A.x("Use this header",null,B.ct,null,null,null,null,null,null,null,null,null)
D.flV=new A.x("Create Project",null,E.aNx,null,null,null,null,null,null,null,null,null)
D.fwf=new C.aa2(1,"header")
D.a7g=new C.aa2(2,"projects")
D.fwg=new C.aa2(3,"cashier")
D.a7h=new C.aa2(4,"familyTree")
D.fHt=new C.ctq(0,"start")
D.fHu=new C.ctr(0,"start")
D.fwy=new C.Xf(null)
D.fxx=new C.XH(null)
D.dcM=new A.br(B.ia,[],A.az("br<n,F_>"))
D.cXZ=w([],x.E)
D.cY_=w([],x.M)
D.fy3=new C.bce(D.dcM,D.cXZ,D.cY_,0,0,null,null)
D.fAc=new C.Z4(null)
D.a7Y=new C.aHN(0,"projects")
D.aRM=new C.aHN(1,"cashier")
D.fFq=new C.aHN(2,"familyTree")})()};
(a=>{a["qZk0qpL8M2txaOpfQY+6L5lE4Cw="]=a.current})($__dart_deferred_initializers__);