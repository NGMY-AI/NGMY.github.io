((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A0,G,F,E,A1,Q,A2,R,A3,A4,M,A5,H,S,T,U,V,A6,A7,W,A8,A9,X,Aa,Ab,Ac,K,Ad,Y,Z,L,N,C={
byP(b2,b3,b4){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$byP=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uB(null,""),$async$byP)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.P(y.j)
t=A.mE(b1)
s=A.bV(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dA(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.dj(b4,"Swahili",0)?y.a:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.K)(h),++d){a0=h[d]
f.push(A.E(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Q.aj(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qg(t,a1,B.h5,E.Dp),$async$byP)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=F.OA(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.a9(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.P(l!=null&&A.Jn(l)?y.l:y.i)
for(j=J.a6(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.Z(r.a(j.h(a2,a7)),q,p):B.cs
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=F.a0b(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byP,v)},
aep(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aep=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uB(null,""),$async$aep)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.P(y.j)
t=A.mE(b6)
s=x.S
r=A.dc(c1,0,A.dJ(4,"count",s),A.T(c1).c)
q=F.a_Z(new A.J(r,new C.fh6(),r.$ti.k("J<ai.E,n>")).aG(0," "))
r=q==="sw"
if(!r){p=A.ad("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.a:"")
m=new C.fh5(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Q.aj(b7,null)+"\nAllowed values: style one of "+B.d.aG(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aep)
case 6:l=c5
k=F.OA(l==null?"":l)
if(k==null)throw A.P("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.t(s==null?"I updated the cover.":s)
r=x.f
u=new C.alz(s,D.d30,r.b(k.h(0,"cover"))?A.Z(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.dC
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.P("There is no page to change.")
h=A.S(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dA(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.K)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.E(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Q.aj(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aep)
case 10:l=c5
k=l==null?null:F.OA(l)
if(k==null)throw A.P(y.k)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.t(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.t(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d2(a8,d),a5=J.aU(a2.a),a2=a2.$ti,a7=new A.kK(a5,a2.k("kK<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a6(a9)
b1=A.aQ(b0.h(a9,"index"))
i=b1==null?null:B.k.L(b1)
if(i==null||!B.d.q(a4,i))continue
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
case 9:if(h.a!==0){s=h.$ti.k("bf<2>")
p=A.cy(new A.bf(h,s),new C.fh7(),s.k("F.E"),p)
p=F.a_Z(A.oI(p,3,A.a2(p).k("F.E")).aG(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("ct<1>")
b4=A.z(new A.ct(h,s),s.k("F.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.K)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(F.a0b(s,b9),$async$aep)
case 13:b5=c5
for(s=J.a6(b5),i=0;i<b4.length;++i)h.m(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.alz(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aep,v)},
h3Z(d,e,f){return A.ce(null,B.w.j(0.65),!1,null,new C.fq1(e,f),d,null,!0,!0,x.g2)},
alz:function alz(d,e,f){this.a=d
this.b=e
this.c=f},
fh6:function fh6(){},
fh5:function fh5(d){this.a=d},
fh7:function fh7(){},
fq1:function fq1(d,e){this.a=d
this.b=e},
bwJ(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bwJ=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.bf(b1,new C.f7q())){u=null
w=1
break}t=B.d.e8(b1,new C.f7r())
s=$.a1()
r=new A.rs()
q=A.FB(r,D.aG5)
p=A.U()
p.r=B.c.gt(0)
q.bp(D.aG5,p)
o=A.U()
o.r=B.M.gt(0)
o.c=3.6
o.b=B.ak
o.d=B.bZ
o.e=B.fl
n=new C.f7w(t)
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
s=$.a1()
p=A.a([],x.v)
a3=new A.b0(s.r,B.aw,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.bj(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bH(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.av(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bH(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.b4(a3,o)}else{p=A.a([],x.v)
a3=new A.b0(s.r,B.aw,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.K)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.bj(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bH(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.av(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.bH(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.b4(a3,o)}w=4
return A.b(r.pM().ym(520,160),$async$bwJ)
case 4:w=3
return A.b(b3.hf(B.fI),$async$bwJ)
case 3:b0=b3
u=b0==null?null:J.f1(B.dz.gaL(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bwJ,v)},
feN(d){return C.hHp(d)},
hHp(d){var w=0,v=A.j(x.gc),u,t,s,r,q,p,o,n
var $async$feN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.baG()
n=d.x!=null&&d.y3(null).length===0
if(d.x!=null)t=n?D.xY:D.Go
else t=d.gRQ()?D.Go:D.aBj
w=3
return A.b(C.bwJ(d.ax),$async$feN)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aki(s)
r=A.a26(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aBj}else{p.c=C.vT(q,!0)
p.b=n?D.xY:D.Go}r.a0F(A.fzx(new C.feP(p,d,new C.feQ(),t,n,o),null,D.biR,B.uW))
u=r.jz(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$feN,v)},
flq(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$flq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.feN(d),$async$flq)
case 3:t=f
s=B.a.i(d.b)
r=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aI(s,r,"_")
if(q.length>40)q=B.a.al(q,0,40)
u=A4.F7(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$flq,v)},
f7q:function f7q(){},
f7r:function f7r(){},
f7w:function f7w(d){this.a=d},
feQ:function feQ(){},
feP:function feP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
feO:function feO(){},
fqt(d,e){var w=0,v=A.j(x.H)
var $async$fqt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,B.w.j(0.55),!0,null,new C.fqx(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fqt)
case 2:return A.h(null,v)}})
return A.i($async$fqt,v)},
bzh(d,e,f,g){return C.hOF(d,e,f,g)},
hOF(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bzh=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gai(e.split(",")):e
r=B.cw.aF(t)}catch(q){r=null}if(r==null||r.length===0){d.F(x.q).f.P(D.ete)
w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.fqp(g,r,f),d,null,!0,!0,x.H),$async$bzh)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bzh,v)},
fqy(d,e){var w=0,v=A.j(x.H)
var $async$fqy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,null,!0,null,new C.fqB(new A.cn(null,x.J),e),d,null,!0,!0,x.H),$async$fqy)
case 2:return A.h(null,v)}})
return A.i($async$fqy,v)},
aV3:function aV3(d,e){this.c=d
this.a=e},
bXo:function bXo(){},
b7_:function b7_(d,e){this.b=d
this.a=e},
fqx:function fqx(d,e){this.a=d
this.b=e},
fqu:function fqu(d){this.a=d},
fqv:function fqv(d,e,f){this.a=d
this.b=e
this.c=f},
fqw:function fqw(d,e){this.a=d
this.b=e},
fqp:function fqp(d,e,f){this.a=d
this.b=e
this.c=f},
fqn:function fqn(d){this.a=d},
fqo:function fqo(d,e,f){this.a=d
this.b=e
this.c=f},
fqB:function fqB(d,e){this.a=d
this.b=e},
fqz:function fqz(d){this.a=d},
fqA:function fqA(d,e,f){this.a=d
this.b=e
this.c=f},
fa9(d,e){var w=0,v=A.j(x.y),u,t
var $async$fa9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_K(d),$async$fa9)
case 3:t=g
J.n_(t,new C.faa(e))
u=A.af2(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fa9,v)},
faa:function faa(d){this.a=d},
alG:function alG(d,e,f){this.c=d
this.d=e
this.a=f},
azH:function azH(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dy5:function dy5(d,e){this.a=d
this.b=e},
dxR:function dxR(d,e){this.a=d
this.b=e},
dxU:function dxU(d,e,f){this.a=d
this.b=e
this.c=f},
dxT:function dxT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dxS:function dxS(d,e){this.a=d
this.b=e},
dxV:function dxV(d,e){this.a=d
this.b=e},
dxP:function dxP(){},
dxQ:function dxQ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dxO:function dxO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dxz:function dxz(d){this.a=d},
dxA:function dxA(d,e,f){this.a=d
this.b=e
this.c=f},
dxB:function dxB(d,e){this.a=d
this.b=e},
dxy:function dxy(d){this.a=d},
dxG:function dxG(d,e){this.a=d
this.b=e},
dxx:function dxx(d){this.a=d},
dxH:function dxH(d,e,f){this.a=d
this.b=e
this.c=f},
dxI:function dxI(d,e,f){this.a=d
this.b=e
this.c=f},
dxw:function dxw(d,e){this.a=d
this.b=e},
dxJ:function dxJ(d,e,f){this.a=d
this.b=e
this.c=f},
dxv:function dxv(d,e){this.a=d
this.b=e},
dxK:function dxK(d,e){this.a=d
this.b=e},
dxu:function dxu(d){this.a=d},
dxL:function dxL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dxs:function dxs(){},
dxm:function dxm(d){this.a=d},
dxn:function dxn(d){this.a=d},
dxt:function dxt(d,e){this.a=d
this.b=e},
dxM:function dxM(d,e){this.a=d
this.b=e},
dxr:function dxr(d){this.a=d},
dxN:function dxN(d){this.a=d},
dxq:function dxq(){},
dxC:function dxC(d,e){this.a=d
this.b=e},
dxp:function dxp(d){this.a=d},
dxD:function dxD(d,e,f){this.a=d
this.b=e
this.c=f},
dxo:function dxo(d,e){this.a=d
this.b=e},
dxl:function dxl(d,e){this.a=d
this.b=e},
dxE:function dxE(d){this.a=d},
dxF:function dxF(d,e,f){this.a=d
this.b=e
this.c=f},
dy8:function dy8(){},
dy9:function dy9(d,e){this.a=d
this.b=e},
dy6:function dy6(d){this.a=d},
dy7:function dy7(d){this.a=d},
dy2:function dy2(d,e){this.a=d
this.b=e},
dy3:function dy3(d){this.a=d},
dxW:function dxW(d,e,f){this.a=d
this.b=e
this.c=f},
dxX:function dxX(d,e,f){this.a=d
this.b=e
this.c=f},
dxY:function dxY(d,e,f){this.a=d
this.b=e
this.c=f},
dxZ:function dxZ(d,e,f){this.a=d
this.b=e
this.c=f},
dy_:function dy_(d,e,f){this.a=d
this.b=e
this.c=f},
dy0:function dy0(d,e,f){this.a=d
this.b=e
this.c=f},
dy1:function dy1(d,e,f){this.a=d
this.b=e
this.c=f},
dya:function dya(){},
dyb:function dyb(){},
dyc:function dyc(){},
dyd:function dyd(d){this.a=d},
dy4:function dy4(d,e){this.a=d
this.b=e},
h0c(d){return B.d.dI(D.Zc,new C.fay(d),new C.faz())},
tA:function tA(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fay:function fay(d){this.a=d},
faz:function faz(){},
ai0:function ai0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aQV:function aQV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
QM:function QM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bay:function bay(){this.d=$
this.c=this.a=null},
cZy:function cZy(d,e){this.a=d
this.b=e},
cZw:function cZw(d,e){this.a=d
this.b=e},
cZx:function cZx(){},
cZz:function cZz(d,e){this.a=d
this.b=e},
fMk(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bg(J.k(u==null?"":u))
return new C.mM(t,w,v,u==null?new A.O(Date.now(),0,!1):u)},
J8(d,e){return C.hG2(d,e)},
hG2(d,e){var w=0,v=A.j(x.b),u,t=2,s=[],r,q,p,o,n,m,l
var $async$J8=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aw(),$async$J8)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aR(J.q(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Q.aD(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d2(p,x.f)
o=A.cy(o,new C.fcp(),o.$ti.k("F.E"),x.B)
n=A.a2(o).k("a5<F.E>")
o=A.z(new A.a5(o,new C.fcq(),n),n.k("F.E"))
B.d.aX(o,new C.fcr())
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
return A.i($async$J8,v)},
zJ(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$zJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aw(),$async$zJ)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b4(f,new C.fpa(),x.a)
r=A.z(r,r.$ti.k("ai.E"))
w=4
return A.b(t.an("String","ngmy_family_book_v1_"+s+"_"+e,B.Q.aj(r,null)),$async$zJ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$zJ,v)},
aN9(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aN9=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.J8(d,e),$async$aN9)
case 2:u=h
t=J.cB(u)
s=t.bg(u,new C.fwN(f))
if(s===-1)t.ck(u,0,f)
else t.m(u,s,f)
w=3
return A.b(C.zJ(d,e,u),$async$aN9)
case 3:return A.h(null,v)}})
return A.i($async$aN9,v)},
bx9(d,e,f){var w=0,v=A.j(x.H),u
var $async$bx9=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.J8(d,e),$async$bx9)
case 2:u=h
J.n_(u,new C.fa1(f))
w=3
return A.b(C.zJ(d,e,u),$async$bx9)
case 3:return A.h(null,v)}})
return A.i($async$bx9,v)},
bxn(d,e){return C.hG1(d,e)},
hG1(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bxn=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aw(),$async$bxn)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aR(J.q(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Kf
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
k=k==null?null:B.k.L(k)
if(k==null)k=0
if(D.AP.am(0,o.h(0,"foil")))j=A.cI(o.h(0,"foil"))
else j=J.y(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aQ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.D(i==null?25:i,18,36)
h=B.d.q(D.a_C,o.h(0,"position"))?A.cI(o.h(0,"position")):"middle"
g=B.d.q(D.a_7,o.h(0,"frame"))?A.cI(o.h(0,"frame")):"double"
f=B.d.q(D.a_2,o.h(0,"texture"))?A.cI(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.y(o.h(0,"ribbon"),!1)
o=B.d.q(D.cBA,o.h(0,"header"))?A.cI(o.h(0,"header")):"classic"
o=new C.G1(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Kf
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Kf
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bxn,v)},
PE(d,e,f){return C.hOb(d,e,f)},
hOb(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$PE=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aw(),$async$PE)
case 7:r=h
w=8
return A.b(r.an("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Q.aj(f.ac(),null)),$async$PE)
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
return A.i($async$PE,v)},
P8(d,e){return C.hG3(d,e)},
hG3(d,e){var w=0,v=A.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$P8=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aw(),$async$P8)
case 7:r=g
q=r.rm("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.z(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.J8(d,e),$async$P8)
case 8:if(!j.cs(g)){n=B.a.i(d.toLowerCase())
m=J.l8(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$P8)
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
return A.i($async$P8,v)},
adL(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$adL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P8(d,e),$async$adL)
case 3:s=g
r=J.a6(s)
if(r.gH(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gH(s):"main"
r.G(s,t)
w=5
return A.b(A.aw(),$async$adL)
case 5:w=4
return A.b(g.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$adL)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$adL,v)},
a0o(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a0o=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.P8(d,e),$async$a0o)
case 2:s=h
J.hA(s,f)
w=3
return A.b(A.aw(),$async$a0o)
case 3:u=h
w=4
return A.b(u.an("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a0o)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0o)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a0o)
case 6:return A.h(null,v)}})
return A.i($async$a0o,v)},
mM:function mM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fcp:function fcp(){},
fcq:function fcq(){},
fcr:function fcr(){},
fpa:function fpa(){},
fwN:function fwN(d){this.a=d},
fa1:function fa1(d){this.a=d},
G1:function G1(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bIN:function bIN(d){this.a=d},
hOu(d,e,f,g,h,i,j){return A.a7(d,!1).cs(A.eH(new C.fpG(j,i,f,e,h,g),!0,null,x.H))},
P4(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$P4=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.P8(h,g),$async$P4)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.a9(k)>=6){d.F(x.q).f.P(D.aI0)
u=!1
w=1
break}w=4
return A.b(C.h3Z(d,f,e),$async$P4)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.adL(h,g),$async$P4)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.mM(""+(q+n),l,B.a.i(m.b),new A.O(Date.now(),0,!1)))}w=6
return A.b(C.zJ(h,r,p),$async$P4)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.PE(h,r,new C.G1("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$P4)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$P4,v)},
fpG:function fpG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Xb:function Xb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awO:function awO(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
d_d:function d_d(d){this.a=d},
d_c:function d_c(d,e){this.a=d
this.b=e},
d_1:function d_1(d,e){this.a=d
this.b=e},
cZZ:function cZZ(d,e){this.a=d
this.b=e},
cZA:function cZA(d){this.a=d},
cZB:function cZB(d,e){this.a=d
this.b=e},
d_2:function d_2(d){this.a=d},
cZJ:function cZJ(d){this.a=d},
cZH:function cZH(d){this.a=d},
cZI:function cZI(d){this.a=d},
cZK:function cZK(d){this.a=d},
d__:function d__(d){this.a=d},
d_0:function d_0(){},
cZF:function cZF(d){this.a=d},
cZG:function cZG(d,e){this.a=d
this.b=e},
cZL:function cZL(d){this.a=d},
cZM:function cZM(d,e){this.a=d
this.b=e},
d_b:function d_b(d){this.a=d},
d_a:function d_a(d,e){this.a=d
this.b=e},
d_9:function d_9(d){this.a=d},
cZW:function cZW(d){this.a=d},
cZV:function cZV(d){this.a=d},
cZX:function cZX(d){this.a=d},
cZC:function cZC(d,e){this.a=d
this.b=e},
cZY:function cZY(d,e){this.a=d
this.b=e},
cZP:function cZP(d){this.a=d},
cZQ:function cZQ(d){this.a=d},
cZO:function cZO(){},
cZR:function cZR(d){this.a=d},
cZS:function cZS(d){this.a=d},
cZT:function cZT(d,e){this.a=d
this.b=e},
cZU:function cZU(d,e,f){this.a=d
this.b=e
this.c=f},
cZN:function cZN(d,e){this.a=d
this.b=e},
d_4:function d_4(d){this.a=d},
d_3:function d_3(){},
d_5:function d_5(d){this.a=d},
d_6:function d_6(d){this.a=d},
d_7:function d_7(d){this.a=d},
d_8:function d_8(d,e){this.a=d
this.b=e},
cZD:function cZD(d){this.a=d},
cZE:function cZE(d){this.a=d},
Xf:function Xf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baT:function baT(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
d0E:function d0E(d){this.a=d},
d0F:function d0F(d){this.a=d},
d0D:function d0D(d){this.a=d},
d0G:function d0G(d){this.a=d},
d0C:function d0C(d){this.a=d},
d0H:function d0H(d){this.a=d},
d0B:function d0B(d){this.a=d},
d0I:function d0I(d,e){this.a=d
this.b=e},
d0A:function d0A(d,e){this.a=d
this.b=e},
d0J:function d0J(d,e){this.a=d
this.b=e},
Xd:function Xd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
acf:function acf(d,e,f){this.a=d
this.b=e
this.c=f},
awP:function awP(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
d_s:function d_s(d,e){this.a=d
this.b=e},
d_r:function d_r(d,e){this.a=d
this.b=e},
d_w:function d_w(d){this.a=d},
d_v:function d_v(d,e){this.a=d
this.b=e},
d_t:function d_t(d){this.a=d},
d_u:function d_u(d){this.a=d},
d_x:function d_x(d){this.a=d},
d_y:function d_y(d){this.a=d},
d_q:function d_q(d,e){this.a=d
this.b=e},
d_p:function d_p(d,e){this.a=d
this.b=e},
Ig:function Ig(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wt:function Wt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cyZ:function cyZ(d){this.a=d},
cz_:function cz_(){},
cz0:function cz0(d){this.a=d},
b8a:function b8a(d,e,f){this.b=d
this.c=e
this.a=f},
b81:function b81(d,e){this.b=d
this.a=e},
tB:function tB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WM:function WM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b88:function b88(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
cSq:function cSq(d,e,f){this.a=d
this.b=e
this.c=f},
cSp:function cSp(d,e){this.a=d
this.b=e},
cSP:function cSP(d){this.a=d},
cSC:function cSC(){},
cSQ:function cSQ(d){this.a=d},
cSB:function cSB(){},
cSR:function cSR(d,e){this.a=d
this.b=e},
cSA:function cSA(d,e){this.a=d
this.b=e},
cSS:function cSS(d,e){this.a=d
this.b=e},
cSz:function cSz(d,e){this.a=d
this.b=e},
cST:function cST(d){this.a=d},
cSy:function cSy(){},
cSU:function cSU(d,e){this.a=d
this.b=e},
cSx:function cSx(d,e){this.a=d
this.b=e},
cSV:function cSV(d){this.a=d},
cSK:function cSK(d,e){this.a=d
this.b=e},
cSW:function cSW(d){this.a=d},
cSX:function cSX(d){this.a=d},
cSZ:function cSZ(d){this.a=d},
cT_:function cT_(d){this.a=d},
cSJ:function cSJ(d,e){this.a=d
this.b=e},
cT0:function cT0(d,e){this.a=d
this.b=e},
aDE:function aDE(d){this.a=d},
bdl:function bdl(d){this.a=d},
b6o:function b6o(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
hF3(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.afd(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
w.m(0,u.a,u)}t=A.bw(new A.O(Date.now(),0,!1))
s=new C.faC(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("a5<1>"),q=q.k("cQ<1,n>"),o=q.k("F.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.K)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.wC)m.push(l===D.Wi?"male":"female")
l=u.w
k=A.ad(a3,!0,!1,!1,!1).cz(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ad(a3,!0,!1,!1,!1).cz(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jK(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jK(h,a2,a2)-A.jK(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.z(new A.cQ(new A.a5(a4,new C.faA(u,f),p),new C.faB(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aG(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aG(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.al(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
hF4(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.afd(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.K)(e),++u){s=e[u]
v.m(0,s.a,s)}r=new C.faH(v,e)
q=new C.faF(v)
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
p.m(0,s.a,d)}}d=p.$ti.k("bf<2>")
d=A.d4(new A.bf(p,d),d.k("F.E"))
n=A.z(d,A.a2(d).k("ck.E"))
B.d.fw(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.K)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gag(e),k=new A.hX(l,new C.faG(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aG(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hro(d,e,f,g){var w,v,u=C.hF5(d,e)
if(u<=0||f.length<=u)return new A.abR(!1,D.AE,f)
if(g.q(0,e.a))return new A.abR(!1,D.AE,f)
w=A.T(f).c
v=A.dc(f,0,A.dJ(u,"count",x.S),w).dz(0)
return new A.abR(!0,A.dc(f,u,null,w).dz(0),v)},
hrp(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.afd(d3),d2=d1.length
if(d2===0)return D.faA
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.K)(d1),++u){t=d1[u]
v.cf(0,t.a,new C.d_F(t))}s=new C.d_W(v)
d2=x.h
r=A.S(w,d2)
q=new C.d_O(r)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.d_N(r)
l=A.S(w,x.do)
for(p=new A.du(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cf(l.cf(0,k,new C.d_G()),o)}h=new C.d_M(s)
g=new C.d_L(l,r)
p=v.$ti.k("bf<2>")
o=p.k("a5<F.E>")
f=A.z(new A.a5(new A.bf(v,p),new C.d_H(h),o),o.k("F.E"))
e=f.length===0?new A.bf(v,p).gI(0):B.d.gI(f)
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
a9=new C.d_U(new C.d_Q(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.du(v,v.r,v.e),j=a2.gahw(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eN([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.G(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.qC(J.dE(i==null?B.U:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.cc)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.d_E(a2,new C.d_V(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.K)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.du(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("ct<1>")
d2=A.z(new A.ct(b4,d2),d2.k("F.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.m(0,b8,new C.Ej(o,new A.v(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Io(c5.a,new A.v(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("ct<1>")
d2=A.z(new A.ct(b6,d2),d2.k("F.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.K)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.m(0,b8,o+c2)}c6=A.a([],x.E)
a3.bD(0,new C.d_I(c6,b4))
for(d2=new A.cN(a4,a4.$ti.k("cN<1,2>")).gag(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aU(c7.b);j.C();){i=j.gT(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.v(d0,b4.h(0,i).b.b))}}for(j=B.d.gag(b5),i=new A.hX(j,new C.d_J(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aX(o,new C.d_K())
c6.push(new C.aFJ(new A.v(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.baD(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
h_M(d){var w=A.ad("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cz(d)
return w==null?null:w.b[1]},
fVf(d,e,f,g,h,i,j,k,l,m,n){return new C.XP(k,f,j,e,l,n,m,d,g,h,i,null)},
ayI(d,e,f,g,h,i,j){return new C.beh(i,d,e,f,j,h,g,null)},
amM:function amM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAh:function aAh(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dKZ:function dKZ(d){this.a=d},
dKY:function dKY(d){this.a=d},
dL0:function dL0(d,e){this.a=d
this.b=e},
dL1:function dL1(d,e){this.a=d
this.b=e},
dL2:function dL2(d){this.a=d},
dKX:function dKX(d,e){this.a=d
this.b=e},
dL_:function dL_(d){this.a=d},
dL4:function dL4(d){this.a=d},
dL3:function dL3(d,e){this.a=d
this.b=e},
amG:function amG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAe:function aAe(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dKp:function dKp(d){this.a=d},
dKn:function dKn(d){this.a=d},
dKo:function dKo(d){this.a=d},
dKq:function dKq(d,e){this.a=d
this.b=e},
dKk:function dKk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJT:function dJT(d){this.a=d},
dJU:function dJU(d,e){this.a=d
this.b=e},
dK7:function dK7(d){this.a=d},
dK5:function dK5(d){this.a=d},
dK6:function dK6(d,e){this.a=d
this.b=e},
dK8:function dK8(d){this.a=d},
dK9:function dK9(d,e){this.a=d
this.b=e},
dKj:function dKj(d,e){this.a=d
this.b=e},
dKh:function dKh(d,e){this.a=d
this.b=e},
dKg:function dKg(d,e){this.a=d
this.b=e},
dKc:function dKc(d,e){this.a=d
this.b=e},
dKb:function dKb(d){this.a=d},
dKd:function dKd(d,e){this.a=d
this.b=e},
dKa:function dKa(d){this.a=d},
dKe:function dKe(d){this.a=d},
dKf:function dKf(d){this.a=d},
dKi:function dKi(d,e){this.a=d
this.b=e},
dJH:function dJH(d,e){this.a=d
this.b=e},
dJI:function dJI(d,e){this.a=d
this.b=e},
dKs:function dKs(d,e,f){this.a=d
this.b=e
this.c=f},
dKm:function dKm(d,e,f){this.a=d
this.b=e
this.c=f},
dKl:function dKl(d){this.a=d},
dJJ:function dJJ(d){this.a=d},
dJK:function dJK(d){this.a=d},
dJL:function dJL(){},
dJM:function dJM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJQ:function dJQ(d,e){this.a=d
this.b=e},
dJP:function dJP(d,e){this.a=d
this.b=e},
dJO:function dJO(d){this.a=d},
dJR:function dJR(d,e){this.a=d
this.b=e},
dJN:function dJN(d){this.a=d},
dKr:function dKr(d){this.a=d},
dK2:function dK2(){},
dK3:function dK3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dK1:function dK1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJY:function dJY(d,e,f){this.a=d
this.b=e
this.c=f},
dJX:function dJX(d,e,f){this.a=d
this.b=e
this.c=f},
dJV:function dJV(d,e){this.a=d
this.b=e},
dJZ:function dJZ(d){this.a=d},
dK_:function dK_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dJW:function dJW(d,e){this.a=d
this.b=e},
dK0:function dK0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dK4:function dK4(d,e){this.a=d
this.b=e},
dKz:function dKz(){},
dKA:function dKA(d,e){this.a=d
this.b=e},
dKB:function dKB(d){this.a=d},
dKC:function dKC(d,e){this.a=d
this.b=e},
dKv:function dKv(d){this.a=d},
dKt:function dKt(d,e){this.a=d
this.b=e},
dKw:function dKw(d,e){this.a=d
this.b=e},
dKx:function dKx(d,e){this.a=d
this.b=e},
dKy:function dKy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dKD:function dKD(d){this.a=d},
dKu:function dKu(d){this.a=d},
dJS:function dJS(d){this.a=d},
baB:function baB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
d_C:function d_C(d){this.a=d},
d_B:function d_B(d,e){this.a=d
this.b=e},
d_D:function d_D(d){this.a=d},
d_A:function d_A(d,e){this.a=d
this.b=e},
faC:function faC(d,e){this.a=d
this.b=e},
faD:function faD(d){this.a=d},
faE:function faE(){},
faA:function faA(d,e){this.a=d
this.b=e},
faB:function faB(){},
faH:function faH(d,e){this.a=d
this.b=e},
faI:function faI(d){this.a=d},
faJ:function faJ(){},
faF:function faF(d){this.a=d},
faG:function faG(d,e){this.a=d
this.b=e},
Io:function Io(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ej:function Ej(d,e){this.a=d
this.b=e},
baD:function baD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
d_F:function d_F(d){this.a=d},
d_W:function d_W(d){this.a=d},
d_O:function d_O(d){this.a=d},
d_P:function d_P(){},
d_N:function d_N(d){this.a=d},
d_G:function d_G(){},
d_M:function d_M(d){this.a=d},
d_L:function d_L(d,e){this.a=d
this.b=e},
d_H:function d_H(d){this.a=d},
d_Q:function d_Q(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_R:function d_R(d){this.a=d},
d_S:function d_S(d){this.a=d},
d_T:function d_T(){},
d_U:function d_U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
d_V:function d_V(){},
d_E:function d_E(d,e,f,g,h,i,j,k,l,m){var _=this
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
d_I:function d_I(d,e){this.a=d
this.b=e},
d_J:function d_J(d){this.a=d},
d_K:function d_K(){},
aFJ:function aFJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
baE:function baE(d,e){this.b=d
this.a=e},
d_X:function d_X(){},
d_Y:function d_Y(d){this.a=d},
d_Z:function d_Z(d){this.a=d},
d0_:function d0_(){},
bei:function bei(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
b9J:function b9J(d,e){this.b=d
this.a=e},
brH:function brH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
eVs:function eVs(d){this.a=d},
bhz:function bhz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ex7:function ex7(d){this.a=d},
ex6:function ex6(d,e){this.a=d
this.b=e},
XP:function XP(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ayG:function ayG(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dfd:function dfd(d,e){this.a=d
this.b=e},
dfc:function dfc(d){this.a=d},
dfa:function dfa(d){this.a=d},
dfb:function dfb(d){this.a=d},
dfm:function dfm(d){this.a=d},
dfn:function dfn(d){this.a=d},
dfl:function dfl(d,e){this.a=d
this.b=e},
dfo:function dfo(){},
dfr:function dfr(d){this.a=d},
dfk:function dfk(d,e){this.a=d
this.b=e},
dfq:function dfq(){},
dfs:function dfs(d){this.a=d},
dfj:function dfj(d,e){this.a=d
this.b=e},
dft:function dft(d){this.a=d},
dfi:function dfi(d){this.a=d},
dfu:function dfu(d){this.a=d},
dfh:function dfh(d){this.a=d},
dfv:function dfv(d){this.a=d},
dfg:function dfg(d){this.a=d},
dfw:function dfw(d){this.a=d},
dff:function dff(d){this.a=d},
dfx:function dfx(d){this.a=d},
dfe:function dfe(d,e){this.a=d
this.b=e},
dfp:function dfp(d){this.a=d},
aaJ:function aaJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beh:function beh(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aaI:function aaI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
beg:function beg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dfy:function dfy(d){this.a=d},
dfz:function dfz(d,e){this.a=d
this.b=e},
ayH:function ayH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEM:function aEM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aaK:function aaK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dfI:function dfI(d){this.a=d},
Ic:function Ic(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
fQc(d){var w=d.R,v=x.N
return w.iE(w,new C.c2V(),v,v)},
hj_(d){var w=d.by
if(w>=0)return w
return 5},
fQe(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.fQc(d).h(0,v)
if(w==null||w.length===0)return null
return A.bg(w)},
fQd(d,e){var w=C.fQe(d,e)
if(w!=null&&w.c8(new A.O(Date.now(),0,!1)))return!0
return!1},
hj0(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.Z(C.fQc(d),w,w)
u=C.fQe(d,e)
t=u!=null&&u.c8(new A.O(Date.now(),0,!1))?u:new A.O(Date.now(),0,!1)
v.m(0,s,t.bL(A.dB(30,0,0,0,0,0).a).a4().aa())
d.R=v},
aWt(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$aWt=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.kZ(t,B.Gc),$async$aWt)
case 3:if(l){u=!0
w=1
break}u=A.kE(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Gc,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWt,v)},
c2V:function c2V(){},
hiY(){var w,v=$.oW(),u=J.dZ(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.fM(u)},
GU(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$GU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bU(),$async$GU)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eT("ngmy_family_tree_backup_codes_v1",null,!1,B.bD),$async$GU)
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
p=A.a4(m)
$.ak.$1("[family tree sync codes] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$GU,v)},
a4W(d){return C.hiZ(d)},
hiZ(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a4W=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bU(),$async$a4W)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hr("ngmy_family_tree_backup_codes_v1",A.E(["codes",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cz,null),$async$a4W)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a4(p)
$.ak.$1("[family tree sync codes] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a4W,v)},
c2U(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$c2U=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.GU(),$async$c2U)
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
return A.i($async$c2U,v)},
LG(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$LG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.c2U(d),$async$LG)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.GU(),$async$LG)
case 6:s=f
r=J.a6(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dR(A.Z(q,p,o),p,o)
o.m(0,"active",!0)
o.m(0,"updatedAt",new A.O(Date.now(),0,!1).a4().aa())
r.m(s,t,o)
w=9
return A.b(C.a4W(s),$async$LG)
case 9:case 8:u=t
w=1
break
case 5:n=C.hiY()
w=10
return A.b(C.GU(),$async$LG)
case 10:s=f
J.aE(s,n,A.E(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.O(Date.now(),0,!1).a4().aa(),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=11
return A.b(C.a4W(s),$async$LG)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LG,v)},
aWs(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aWs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.GU(),$async$aWs)
case 3:t=f
for(s=J.df(t),r=s.gdH(t),r=r.dz(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.K)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.q(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a4W(t),$async$aWs)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$aWs,v)},
a4X(d,e,f){var w=0,v=A.j(x.H),u
var $async$a4X=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.amL(d,e),$async$a4X)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.LG(d),$async$a4X)
case 7:w=4
break
case 5:w=8
return A.b(C.aWs(d),$async$a4X)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a4X,v)},
amF(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$amF=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.amL(f,e),$async$amF)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.bU(),$async$amF)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.GU(),$async$amF)
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
return A.i($async$amF,v)},
aWr(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$aWr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.bU(),$async$aWr)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.GU(),$async$aWr)
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
return A.i($async$aWr,v)},
hj1(){var w,v=$.oW(),u=J.dZ(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"FT"+B.d.fM(u)},
amI(d,e){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$amI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bU(),$async$amI)
case 3:if(!g){u=null
w=1
break}t=C.hj1()
w=4
return A.b(A.T3(),$async$amI)
case 4:s=g
r=B.dB.aF(B.Q.aj(d.eF(),null))
r=B.cM.gcr().aF(r)
q=e?999:2
J.aE(s,t,A.E(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(A.a4Y(s),$async$amI)
case 5:p=e?999:2
u=new A.Z_("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amI,v)},
amH(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$amH=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.T3(),$async$amH)
case 3:p=a0
o=J.a6(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a6(n)
l=A.aQ(m.h(n,"usesRemaining"))
k=l==null?null:B.k.L(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.aWr(J.k(l==null?"":l),j),$async$amH)
case 4:if(!a0)$.ak.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{r=B.c0.c6(0,B.cw.aF(t))
s=C.fQf(r)}catch(f){q=A.a4(f)
$.ak.$1("[family tree qr stash] decode: "+A.t(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dR(A.Z(n,m,l),m,l)
l.m(0,"usesRemaining",h)
l.m(0,"lastUsedAt",new A.O(Date.now(),0,!1).a4().aa())
o.m(p,g,l)}w=5
return A.b(A.a4Y(p),$async$amH)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amH,v)},
fQf(d){var w,v,u,t,s=null
try{w=B.Q.aD(0,d,s)
if(!x.f.b(w))return s
u=J.q(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hj3(A.Z(w,x.N,x.z))
return u}catch(t){v=A.a4(t)
$.ak.$1("[family tree sync] parse: "+A.t(v))
return s}},
fAA(d){var w=0,v=A.j(x.m),u,t,s
var $async$fAA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a_(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.amH(t[1])
w=1
break}u=null
w=1
break}u=C.fQf(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fAA,v)},
hj3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d2(v,x.f)
u=A.cy(u,new C.c2X(),u.$ti.k("F.E"),x.k)
t=A.a2(u).k("a5<F.E>")
s=A.z(new A.a5(u,new C.c2Y(),t),t.k("F.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bg(J.k(u==null?"":u))
if(r==null)r=new A.O(Date.now(),0,!1)
q=A.S(x.N,x.b)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jj(p),t=t.gag(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d2(l,u)
n=A.cy(n,new C.c2Z(),n.$ti.k("F.E"),o)
k=A.a2(n).k("a5<F.E>")
j=A.z(new A.a5(n,new C.c3_(),k),k.k("F.E"))
if(j.length!==0)q.m(0,m,j)}return new C.amJ(h,w,s,r,q)},
amL(d,e){var w=0,v=A.j(x.y),u,t
var $async$amL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Ly(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.zy(d),$async$amL)
case 3:u=t.cs(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$amL,v)},
c35(d){var w=0,v=A.j(x.bC),u,t,s
var $async$c35=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.zy(d),$async$c35)
case 3:t=s.b4(f,new C.c36(),x.cs)
t=A.z(t,t.$ti.k("ai.E"))
B.d.aX(t,new C.c37())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$c35,v)},
T4(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$T4=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.amL(e,d),$async$T4)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.LG(e),$async$T4)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.zy(e),$async$T4)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dE(r,new C.c33(g))
r=A.z(t,t.$ti.k("F.E"))}t=J.a6(r)
if(t.gah(r)){u=null
w=1
break}t=t.di(r,new C.c34(e),x.k)
r=A.z(t,t.$ti.k("ai.E"))
q=A.S(x.N,x.b)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.J8(e,o),$async$T4)
case 14:n=i
if(J.cs(n))q.m(0,o,n)
case 12:r.length===t||(0,A.K)(r),++p
w=11
break
case 13:u=new C.amJ(s,B.a.i(e.toLowerCase()),r,new A.O(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$T4,v)},
aWw(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$aWw=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T4(d,e,f,g),$async$aWw)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aI(t,s,"_")
r=q.a
u=A.EY(A.Ik(q.eF(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWw,v)},
aWv(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$aWv=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T4(d,e,f,g),$async$aWv)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.amI(r,f),$async$aWv)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aCN(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aWv,v)},
T5(d,e,f,a0){var w=0,v=A.j(x.gF),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$T5=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fAA(a0),$async$T5)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a_(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.amF(g.a,d,e,f,s,r),$async$T5)
case 6:if(!a2){if(r)throw A.P(A.b9("This backup expired or the sender's tree is no longer available."))
throw A.P(A.b9("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bx0(e,j),$async$T5)
case 12:case 11:w=13
return A.b(C.af0(e,j,s),$async$T5)
case 13:h=n.h(0,i)
w=h!=null&&J.cs(h)?14:15
break
case 14:w=16
return A.b(C.zJ(e,i,h),$async$T5)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.K)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bl3(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$T5,v)},
amJ:function amJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c31:function c31(){},
c32:function c32(){},
c30:function c30(){},
c2X:function c2X(){},
c2Y:function c2Y(){},
c2Z:function c2Z(){},
c3_:function c3_(){},
c36:function c36(){},
c37:function c37(){},
c33:function c33(d){this.a=d},
c34:function c34(d){this.a=d},
fIF(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f6(null,x.H)
return A.hk(d,new C.amK(w,e,g,i,f,h,null),!0,null,x.H)},
d_z(d,e,f,g,h,i,j,k){return new C.baA(i,e,k,j,g,f,h,d,null)},
amK:function amK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aAg:function aAg(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dKM:function dKM(d){this.a=d},
dKN:function dKN(d,e,f){this.a=d
this.b=e
this.c=f},
dKR:function dKR(d,e){this.a=d
this.b=e},
dKS:function dKS(d){this.a=d},
dKJ:function dKJ(d){this.a=d},
dKK:function dKK(d,e){this.a=d
this.b=e},
dKL:function dKL(d,e){this.a=d
this.b=e},
dKQ:function dKQ(d){this.a=d},
dKP:function dKP(d,e){this.a=d
this.b=e},
dKO:function dKO(){},
dKU:function dKU(d){this.a=d},
dKV:function dKV(d,e){this.a=d
this.b=e},
dKT:function dKT(d,e){this.a=d
this.b=e},
d00:function d00(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
baC:function baC(d,e,f){this.d=d
this.e=e
this.a=f},
aa0:function aa0(d,e,f){this.c=d
this.d=e
this.a=f},
baA:function baA(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
baF:function baF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
Y9:function Y9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAf:function aAf(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dKE:function dKE(d,e){this.a=d
this.b=e},
dKF:function dKF(d){this.a=d},
dKG:function dKG(d){this.a=d},
dKH:function dKH(d){this.a=d},
dKI:function dKI(d){this.a=d},
Ya:function Ya(d){this.a=d},
bfH:function bfH(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dKW:function dKW(d,e){this.a=d
this.b=e},
aV2(d,e){return new C.aV1(d,e,null)},
aV1:function aV1(d,e,f){this.c=d
this.d=e
this.a=f},
hHu(d){if(!(d!=null&&B.a.a_(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
hOE(d){return A.c0(B.K,null,new C.fq8(new C.t4(A.L(d).ax.a===B.H)),d,!0,!0,!0,null,!1,!1,x.N)},
fS5(d,e){return new C.apB(e,d,null)},
aMR(d,e,f,g,h,i,j){var w=C.hHu(i)
if(w!=null)return A.bv(e,new A.a3(j,f,new C.a4_(w,!0,null),null),B.ap)
return I.aMc(e,B.bN,f,g,h,i,j)},
lh:function lh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4_:function a4_(d,e,f){this.c=d
this.d=e
this.a=f},
bfq:function bfq(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.aY$=e
_.c=_.a=null},
dxd:function dxd(d){this.a=d},
dxe:function dxe(){},
dxf:function dxf(d,e){this.a=d
this.b=e},
bfp:function bfp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fq8:function fq8(d){this.a=d},
fq7:function fq7(d,e){this.a=d
this.b=e},
fq6:function fq6(d,e){this.a=d
this.b=e},
fq5:function fq5(d,e){this.a=d
this.b=e},
apB:function apB(d,e,f){this.c=d
this.d=e
this.a=f},
caA:function caA(d,e){this.a=d
this.b=e},
aI3:function aI3(){},
hOp(d){var w=null
return A.ce(w,w,!0,w,new C.fpy(),d,w,!0,!0,x.e2)},
hPz(d,e,f,g,h){var w=null
return A.ce(w,w,!0,w,new C.fwF(h,g,f,e),d,w,!0,!0,x.N)},
hOr(d,e){var w=null
return A.ce(w,w,!0,w,new C.fpA(e),d,w,!0,!0,x.dY)},
hOq(d){var w=null
return A.ce(w,w,!0,w,new C.fpz(),d,w,!0,!0,x.c5)},
aPI:function aPI(d,e){this.a=d
this.b=e},
aPH:function aPH(d){this.a=d},
aNM:function aNM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpy:function fpy(){},
fwF:function fwF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpA:function fpA(d){this.a=d},
fpz:function fpz(){},
WO:function WO(d,e){this.c=d
this.a=e},
avB:function avB(){var _=this
_.d=$
_.c=_.a=_.e=null},
cTc:function cTc(d){this.a=d},
cTd:function cTd(d){this.a=d},
cTb:function cTb(d,e){this.a=d
this.b=e},
cTe:function cTe(d){this.a=d},
cTf:function cTf(d){this.a=d},
WN:function WN(d){this.a=d},
avA:function avA(){this.d=$
this.c=this.a=null},
cT8:function cT8(d){this.a=d},
cT9:function cT9(d){this.a=d},
cTa:function cTa(d){this.a=d},
Wk:function Wk(d){this.a=d},
aum:function aum(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cqO:function cqO(){},
cqU:function cqU(d){this.a=d},
cqV:function cqV(d){this.a=d},
cqW:function cqW(d){this.a=d},
cqT:function cqT(){},
cqX:function cqX(d){this.a=d},
cqY:function cqY(d){this.a=d},
cqS:function cqS(){},
cqZ:function cqZ(d,e){this.a=d
this.b=e},
cqR:function cqR(d,e){this.a=d
this.b=e},
cqP:function cqP(d,e){this.a=d
this.b=e},
cr_:function cr_(d){this.a=d},
cqQ:function cqQ(){},
cr0:function cr0(d){this.a=d},
ZT:function ZT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
brz:function brz(){this.d=$
this.c=this.a=null},
eUV:function eUV(d,e){this.a=d
this.b=e},
eUW:function eUW(d){this.a=d},
eUX:function eUX(d,e){this.a=d
this.b=e},
a94:function a94(d,e){this.a=d
this.b=e},
E7:function E7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
brx:function brx(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eUT:function eUT(d,e){this.a=d
this.b=e},
auf:function auf(d,e){this.c=d
this.a=e},
bry:function bry(d,e){var _=this
_.d=$
_.bq$=d
_.a5$=e
_.c=_.a=null},
eUU:function eUU(d){this.a=d},
brw:function brw(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aK9:function aK9(){},
aKa:function aKa(){},
byU(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bK(u),s=B.o.D(B.k.U((u-t)*100),0,99),r=d<0?"-":"",q=A.oc(B.o.u(t),A.ad("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fos(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aT(B.o.u(s),2,"0")
n.push(A.dr(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.VK(A.dr(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aMt(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aMt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hP().kB(85,1280,B.eu),$async$aMt)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.f7(),$async$aMt)
case 8:r=e
if(J.a9(r)===0){u=null
w=1
break}q=C.fS4()
w=9
return A.b(C.caz(q,r),$async$aMt)
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
o=A.a4(l)
$.ak.$1("[worksheets] pick photo failed: "+A.t(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aMt,v)},
aMP(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aMP=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a_(g,"ngmy:ws-thumb:")
if(i){u=C.caw(g)
w=1
break}if(!B.a.a_(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gai(g.split(",")):g
p=B.cw.aF(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.a1().K0(p,!0,null,i).cJ(0,B.fE),$async$aMP)
case 9:n=a1
w=10
return A.b(n.lS(),$async$aMP)
case 10:m=a1
w=11
return A.b(J.aNy(m).hf(B.fI),$async$aMP)
case 11:l=a1
J.aNy(m).p()
if(l==null){w=8
break}i=J.f1(B.dz.gaL(l))
k="data:image/png;base64,"+B.cM.gcr().aF(i)
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
j=A.a4(f)
$.ak.$1("[worksheets] thumbnail shrink failed: "+A.t(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aMP,v)},
fos:function fos(){},
t4:function t4(d){this.a=d},
apA:function apA(d,e,f){this.c=d
this.d=e
this.a=f},
aBH:function aBH(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
euh:function euh(d,e){this.a=d
this.b=e},
eu8:function eu8(d){this.a=d},
eu9:function eu9(d){this.a=d},
euf:function euf(d,e){this.a=d
this.b=e},
eue:function eue(d,e){this.a=d
this.b=e},
eub:function eub(d,e){this.a=d
this.b=e},
eua:function eua(d,e){this.a=d
this.b=e},
euc:function euc(d){this.a=d},
eud:function eud(d,e){this.a=d
this.b=e},
eug:function eug(d,e){this.a=d
this.b=e},
eu3:function eu3(d,e){this.a=d
this.b=e},
eu7:function eu7(d){this.a=d},
eu6:function eu6(d,e){this.a=d
this.b=e},
eu5:function eu5(d){this.a=d},
eui:function eui(d,e){this.a=d
this.b=e},
euj:function euj(d,e){this.a=d
this.b=e},
eu4:function eu4(d,e){this.a=d
this.b=e},
h3v(d,e,f){var w="thumbnailPath",v=e.ac()
if(f!=null&&f.length!==0)v.m(0,w,f)
else v.W(0,w)
return A.E(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.O(Date.now(),0,!1).a4().aa(),"project",v],x.N,x.z)},
fot(d,e,f){var w=0,v=A.j(x.N),u
var $async$fot=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Q.aj(C.h3v(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fot,v)},
byW(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$byW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fot(!0,d,e),$async$byW)
case 4:w=3
return A.b(r.apy(g,d,e.a),$async$byW)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dB.aF(B.Q.aj(C.h3v(d,e,null),null))
u="NGMY_WS:"+B.jR.gcr().aF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byW,v)},
fWA(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
fIn(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.a9(s)===0)return!1
if(J.cS(s,"NGMYWSSYNC2|"))return!0
if(J.cS(s,"NGMY_WS:"))return!0
if(J.eQ(s,t))return!0
if(J.cS(s,"{"))try{w=B.Q.aD(0,s,null)
if(x.f.b(w)){v=J.q(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
hMw(d){var w,v,u,t=C.fWA(d)
if(t==null)return null
if(C.fIn(t))return t
w=B.a.cP(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.fIn(v))return v}u=B.a.cP(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.fIn(v))return v}return null},
fIm(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.a9(q)===0)return r
if(J.cS(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.cS(q,"NGMY_WS:")){v=B.c0.c6(0,B.cw.aF(J.mf(q,8)))
w=t.a(B.Q.aD(0,v,r))}else w=t.a(B.Q.aD(0,q,r))
t=J.q(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.q(w,"project")
if(!x.f.b(u))return r
t=C.fD5(A.Z(u,x.N,x.z))
return t}catch(s){return r}},
byV(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$byV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a_(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.apx(t[1]),$async$byV)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.fIm(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.fIm(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$byV,v)},
fIl(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.l1(w,v,d.c,d.d,new A.O(Date.now(),0,!1))},
bys(){var w=0,v=A.j(x.o),u,t
var $async$bys=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.F8(),$async$bys)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.fIm(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bys,v)},
h4m(d,e,f,g){return A.c0(B.K,null,new C.fwx(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fwx:function fwx(d,e,f){this.a=d
this.b=e
this.c=f},
ab4:function ab4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eul:function eul(d,e){this.a=d
this.b=e},
eum:function eum(d,e){this.a=d
this.b=e},
eun:function eun(d,e){this.a=d
this.b=e},
euo:function euo(d,e){this.a=d
this.b=e},
euk:function euk(d){this.a=d},
apu:function apu(d,e,f){this.c=d
this.d=e
this.a=f},
bh2:function bh2(){var _=this
_.c=_.a=_.e=_.d=null},
etZ:function etZ(d,e){this.a=d
this.b=e},
eu_:function eu_(d){this.a=d},
eu0:function eu0(d){this.a=d},
apz:function apz(d){this.a=d},
aBG:function aBG(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eu2:function eu2(d){this.a=d},
eu1:function eu1(d){this.a=d},
hme(d,e,f,g,h){return new C.Mh(h,g,d,e,f,null)},
aGq:function aGq(d,e){this.a=d
this.b=e},
Mh:function Mh(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBI:function aBI(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
euL:function euL(){},
euH:function euH(d,e){this.a=d
this.b=e},
euI:function euI(d){this.a=d},
eus:function eus(d){this.a=d},
euq:function euq(d){this.a=d},
eur:function eur(d){this.a=d},
euB:function euB(d,e){this.a=d
this.b=e},
euy:function euy(d,e){this.a=d
this.b=e},
euz:function euz(d,e){this.a=d
this.b=e},
euA:function euA(d,e,f){this.a=d
this.b=e
this.c=f},
euw:function euw(d,e,f){this.a=d
this.b=e
this.c=f},
euu:function euu(d){this.a=d},
euv:function euv(d){this.a=d},
eux:function eux(d){this.a=d},
euO:function euO(d){this.a=d},
euN:function euN(d){this.a=d},
euP:function euP(d){this.a=d},
euM:function euM(d){this.a=d},
eup:function eup(d){this.a=d},
eut:function eut(d,e){this.a=d
this.b=e},
euK:function euK(d,e){this.a=d
this.b=e},
euJ:function euJ(d,e){this.a=d
this.b=e},
euE:function euE(d){this.a=d},
euF:function euF(d){this.a=d},
euG:function euG(d,e){this.a=d
this.b=e},
euD:function euD(d,e){this.a=d
this.b=e},
euC:function euC(d,e,f){this.a=d
this.b=e
this.c=f},
btj:function btj(){},
zq(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ad("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aI(v,w,"_")},
adu(d,e,f){return C.hBl(d,e,f)},
hBl(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$adu=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.an("String",e,f),$async$adu)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.a4(o)
$.ak.$1("[worksheets] setString failed for "+e+": "+A.t(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$adu,v)},
adt(d,e){return C.hBk(d,e)},
hBk(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$adt=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$adt)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.a4(q)
$.ak.$1("[worksheets] remove failed for "+e+": "+A.t(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$adt,v)},
hA9(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.QR(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bw1(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bw1=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.aZH(q),$async$bw1)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aMP(q,!1),$async$bw1)
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
return A.i($async$bw1,v)},
ha9(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aQ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.qn(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.qn(p,J.k(u==null?"":u),1,o,q)},
fD5(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.t)
if(x.j.b(s)){w=J.d2(s,x.f)
w=A.cy(w,new C.cqc(),w.$ti.k("F.E"),x.Q)
v=A.a2(w).k("a5<F.E>")
r=A.z(new A.a5(w,new C.cqd(),v),v.k("F.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bg(J.k(t==null?"":t))
return new C.l1(w,v,u,r,t==null?new A.O(Date.now(),0,!1):t)},
hF_(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.Wi
case"female":case"f":return D.aeu
default:return D.wC}},
h0d(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
fMl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.hF_(v==null?j:J.k(v))
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
m=m==null?j:B.k.L(m)
if(m==null)m=1
l=J.y(d.h(0,"hidden"),!0)
k=A.aQ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.L(k)
return new C.hO(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
hF1(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Kg
case"viewer":return D.k_
default:return D.rH}},
hF2(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
EZ(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
bxg(d,e){return B.a.i(e.toLowerCase())===C.EZ(d,e)&&d.y!==D.k_},
ti(d,e){var w,v=d.y
if(v===D.k_)return!1
w=B.a.i(e.toLowerCase())
if(w===C.EZ(d,e))return!0
if(v===D.Kg)return!0
v=d.e
return new A.J(v,A.fIr(),A.T(v).k("J<1,n>")).q(0,w)},
hEt(d){return J.dE(d,new C.f9U()).gH(0)},
fwU(d){var w=0,v=A.j(x.y),u,t
var $async$fwU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.zy(d),$async$fwU)
case 3:u=t.rj(f,new C.fwV(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fwU,v)},
bx0(d,e){var w=0,v=A.j(x.H),u,t
var $async$bx0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.zy(d),$async$bx0)
case 3:t=g
if(J.rj(t,new C.f95(e))){w=1
break}if(C.hEt(t)>=2)throw A.P(A.b9("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bx0,v)},
ai2(d){var w,v,u,t,s,r,q,p,o,n=d.h(0,"members"),m=A.a([],x.u),l=x.j
if(l.b(n)){w=J.d2(n,x.f)
w=A.cy(w,new C.bIO(),w.$ti.k("F.E"),x.P)
v=A.a2(w).k("a5<F.E>")
m=A.z(new A.a5(w,new C.bIP(),v),v.k("F.E"))}u=d.h(0,"collaboratorEmails")
if(l.b(u)){l=J.b4(u,new C.bIQ(),x.N)
t=A.z(l,l.$ti.k("ai.E"))}else t=A.a([],x.s)
l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"code")
v=J.k(v==null?"":v)
s=J.y(d.h(0,"isPrivate"),!1)
r=d.h(0,"createdAt")
r=A.bg(J.k(r==null?"":r))
if(r==null)r=new A.O(Date.now(),0,!1)
q=A.aQ(d.h(0,"visibleChildrenPerParent"))
q=q==null?null:B.k.L(q)
if(q==null)q=0
p=d.h(0,"ownerEmail")
p=J.k(p==null?"":p)
o=d.h(0,"localRole")
return new C.kl(l,w,v,!s,t,m,r,q,p,C.hF1(o==null?null:J.k(o)))},
h0m(d){var w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.al(v,0,8)},
BD(d){var w=0,v=A.j(x.c),u,t,s,r,q,p,o,n,m,l
var $async$BD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.PC(d),$async$BD)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aw(),$async$BD)
case 4:t=f
w=5
return A.b(t.a3z(0),$async$BD)
case 5:w=6
return A.b(C.f1f(t,l),$async$BD)
case 6:s=f
if(J.cs(s)){u=s
w=1
break}r=B.a.gV(B.a.i(l.toLowerCase()))
q=t.a
p=J.a6(q)
o=A.aR(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.fX8(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.ob(l,n),$async$BD)
case 11:u=n
w=1
break
case 10:case 8:m=A.aR(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gV(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.fX8(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.ob(l,n),$async$BD)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$BD,v)},
f1f(d,e){return C.hxI(d,e)},
hxI(a8,a9){var w=0,v=A.j(x.c),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$f1f=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a6(a3)
a5=A.aR(a4.h(a3,"ngmy_worksheets_index_v3_"+C.zq(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.Q.aD(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aU(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gT(f)
n=B.a.i(J.k(o))
if(J.a9(n)===0){w=7
break}m=A.aR(a4.h(a3,"ngmy_worksheet_item_v3_"+C.zq(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Q.aD(0,m,null)
if(!a0.b(l)){w=7
break}k=C.fD5(A.Z(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aR(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.zq(a9)+"_"+n))
i=C.hA9(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a_(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.aZH(h),$async$f1f)
case 17:g=b1
if(g!=null){i=i.QR(g)
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
case 8:J.PM(q,new C.f1g())
if(p&&J.a9(q)!==0)C.ob(a9,q)
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
return A.i($async$f1f,v)},
bxq(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bxq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.PC(d),$async$bxq)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.BD(r),$async$bxq)
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
return A.i($async$bxq,v)},
fX8(d){var w,v,u,t
try{w=B.Q.aD(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d2(w,x.f)
v=A.cy(v,new C.eY8(),v.$ti.k("F.E"),x.i)
u=A.a2(v).k("a5<F.E>")
v=A.z(new A.a5(v,new C.eY9(),u),u.k("F.E"))
B.d.aX(v,new C.eYa())
return v}catch(t){v=A.a([],x.D)
return v}},
ob(d,e){return C.hOf(d,e)},
hOf(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$ob=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.PC(b2),$async$ob)
case 3:a8=b5
if(J.a9(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aw(),$async$ob)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.zq(a8)
p=A.aR(J.q(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b4(x.j.a(B.Q.aD(0,p,null)),new C.fpp(),a2).fG(0)
a2=J.b4(b3,new C.fpq(),a2).bZ(0,new C.fpr())
n=A.d4(a2,a2.$ti.k("F.E"))
a2=o,a2=A.ef(a2,a2.r,A.a2(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eQ(n,m)?17:18
break
case 17:a5=C.zq(a8)
l=A.aR(J.q(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a6c(l),$async$ob)
case 19:t=21
a5=C.zq(a8)
k=A.aR(J.q(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Q.aD(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.q(j,"thumbnailPath")
w=28
return A.b(C.a6c(a5==null?null:J.k(a5)),$async$ob)
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
return A.b(C.adt(r,"ngmy_worksheet_item_v3_"+C.zq(a8)+"_"+m),$async$ob)
case 29:w=30
return A.b(C.adt(r,"ngmy_worksheet_thumb_v3_"+C.zq(a8)+"_"+m),$async$ob)
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
case 14:case 10:a2=J.cB(b3),a3=a2.gag(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bw1(h),$async$ob)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.adu(r,"ngmy_worksheet_thumb_v3_"+C.zq(a8)+"_"+a4,f),$async$ob)
case 40:g=i.QR(f)
w=38
break
case 39:$.ak.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.adt(r,"ngmy_worksheet_thumb_v3_"+C.zq(a8)+"_"+a4),$async$ob)
case 41:g=i.QR(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.adt(r,"ngmy_worksheet_thumb_v3_"+C.zq(a8)+"_"+a4),$async$ob)
case 42:case 34:a4=i.a
w=43
return A.b(C.adu(r,"ngmy_worksheet_item_v3_"+C.zq(a8)+"_"+a4,B.Q.aj(g.ac(),null)),$async$ob)
case 43:e=b5
if(!e){$.ak.$1("[worksheets] failed to save project "+i.a+" for "+A.t(a8))
w=31
break}J.cf(q,i.a)
w=31
break
case 32:w=44
return A.b(C.adu(r,"ngmy_worksheets_index_v3_"+C.zq(a8),B.Q.aj(q,null)),$async$ob)
case 44:d=b5
if(!d){$.ak.$1("[worksheets] failed to save project index for "+A.t(a8))
u=!1
w=1
break}a3=a2.eE(b3,new C.fps(q))
a4=a3.$ti.k("cQ<1,a0<n,@>>")
a7=A.z(new A.cQ(a3,new C.fpt(),a4),a4.k("F.E"))
a0=a7
w=45
return A.b(C.adu(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gV(B.a.i(a8.toLowerCase()))),B.Q.aj(a0,null)),$async$ob)
case 45:w=46
return A.b(J.h9f(r),$async$ob)
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
a1=A.a4(b1)
$.ak.$1("[worksheets] saveWorksheetProjects error: "+A.t(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ob,v)},
Jz(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Jz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BD(d),$async$Jz)
case 3:t=g
s=J.cB(t)
r=s.bg(t,new C.fwT(e))
if(r===-1)s.ck(t,0,e)
else s.m(t,r,e)
u=C.ob(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Jz,v)},
bxd(d,e){var w=0,v=A.j(x.H),u
var $async$bxd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.BD(d),$async$bxd)
case 2:u=g
J.n_(u,new C.fal(e))
w=3
return A.b(C.ob(d,u),$async$bxd)
case 3:return A.h(null,v)}})
return A.i($async$bxd,v)},
F0(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$F0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$F0)
case 3:l=f
k=A.a([],x._)
j=B.a.gV(B.a.i(d.toLowerCase()))
i=A.aR(J.q(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Q.aD(0,i,null)
if(x.j.b(t)){j=J.d2(t,x.f)
j=A.cy(j,new C.fcv(),j.$ti.k("F.E"),x.k)
s=A.a2(j).k("a5<F.E>")
r=A.z(new A.a5(j,new C.fcw(),s),s.k("F.E"))
B.d.aX(r,new C.fcx())
k=r}}catch(h){}w=4
return A.b(C.eYR(d),$async$F0)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.hy4(k,p,d)
j=A.T(o)
s=j.k("J<1,a0<n,@>>")
s=A.z(new A.J(o,new C.fcy(),s),s.k("ai.E"))
n=B.Q.aj(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.OO(d,o),$async$F0)
case 7:case 6:j=j.k("a5<1>")
m=A.z(new A.a5(o,new C.fcz(d),j),j.k("F.E"))
if(m.length!==0)C.aLp(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$F0,v)},
fpb(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fpb=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.OO(d,e),$async$fpb)
case 3:t=J.dE(e,new C.fpc(d))
s=A.z(t,t.$ti.k("F.E"))
if(s.length===0){u=!0
w=1
break}u=C.aLp(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fpb,v)},
a0u(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a0u=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aw(),$async$a0u)
case 2:n=g
m=B.a.gV(B.a.i(d.toLowerCase()))
l=A.aR(J.q(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Q.aD(0,l,null)
if(x.j.b(u)){m=J.d2(u,x.f)
m=A.cy(m,new C.fwO(),m.$ti.k("F.E"),x.k)
t=A.a2(m).k("a5<F.E>")
s=A.z(new A.a5(m,new C.fwP(),t),t.k("F.E"))
o=s}}catch(k){}q=J.pI(o,new C.fwQ(e))
if(B.a.i(e.x).length===0&&C.ti(e,d)){m=B.a.i(d.toLowerCase())
p=e.aA_(e.y===D.k_?D.k_:D.rH,m)}else p=e
if(q===-1)J.oZ(o,0,p)
else J.aE(o,q,p)
w=3
return A.b(C.OO(d,o),$async$a0u)
case 3:w=C.ti(p,d)?4:5
break
case 4:w=6
return A.b(C.aLo(C.EZ(p,d),p),$async$a0u)
case 6:if(!g)$.ak.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a0u,v)},
aLy(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aLy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.F0(d),$async$aLy)
case 2:u=g
t=J.cB(u)
s=A.qC(t.eE(u,new C.fa2(e)))
t.bm(u,new C.fa3(e))
w=3
return A.b(C.OO(d,u),$async$aLy)
case 3:w=s!=null&&C.bxg(s,d)?4:5
break
case 4:w=6
return A.b(C.eYc(e),$async$aLy)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aLy,v)},
afd(d){var w=d.f,v=A.T(w).k("a5<1>")
w=A.z(new A.a5(w,new C.fwZ(),v),v.k("F.E"))
return w},
fG8(d,e){var w,v=d.f,u=A.qC(new A.a5(v,new C.f9E(e),A.T(v).k("a5<1>")))
v=C.afd(d)
w=A.T(v).k("a5<1>")
v=A.z(new A.a5(v,new C.f9F(e,u),w),w.k("F.E"))
B.d.aX(v,new C.f9G())
return v},
hF5(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
h4o(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.fG8(d,u),new C.fwG(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
hGz(d,e){var w
if(e==null||e.length===0)return 1
w=C.fG8(d,e)
if(w.length===0)return 1
return new A.J(w,new C.fdg(),A.T(w).k("J<1,I>")).fs(0,B.yL)+1},
hO8(d){var w,v=C.afd(d)
if(v.length===0)return null
w=new A.a5(v,new C.fp8(),A.T(v).k("a5<1>"))
if(!w.gah(0))return w.gI(0)
return B.d.gI(v)},
hF0(d){return A.E(["id",d.a,"name",d.b,"gender",C.h0d(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
hGu(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
a1.m(0,t.a,t)}s=A.a([],x.u)
r=A.aZ(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.K)(a0),++u){q=a0[u]
p=q.a
r.G(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.wC?n:q.c
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
d=q.azV(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.K)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.czS(a1,w,a3.d,a2.y,s,a0,v)},
zy(d){var w=0,v=A.j(x.r),u,t,s,r,q,p,o
var $async$zy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aw(),$async$zy)
case 3:q=f
p=B.a.gV(B.a.i(d.toLowerCase()))
o=A.aR(J.q(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Q.aD(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d2(t,x.f)
p=A.cy(p,new C.fcs(),p.$ti.k("F.E"),x.k)
s=A.a2(p).k("a5<F.E>")
p=A.z(new A.a5(p,new C.fct(),s),s.k("F.E"))
B.d.aX(p,new C.fcu())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$zy,v)},
af0(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$af0=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.rH:D.k_
a7=C.EZ(b2,b3)
w=2
return A.b(C.zy(b1),$async$af0)
case 2:a8=b5
a9=J.cB(a8)
b0=a9.bg(a8,new C.fp6(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bx0(b1,b2),$async$af0)
case 5:case 4:if(b0===-1){u=b2.aA_(a6,a7)
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
i=i!==D.wC?i:l.c
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
s.m(0,m,l.azV(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bf<2>")
s=A.z(new A.bf(s,k),k.k("F.E"))
k=a5?D.rH:D.k_
u=t.xE(q,m,b2.d,k,s,r,a7,b2.w)
a9.m(a8,b0,u)}w=6
return A.b(C.OO(b1,a8),$async$af0)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aLo(B.a.i(b3.toLowerCase()),u),$async$af0)
case 9:case 8:return A.h(null,v)}})
return A.i($async$af0,v)},
fXu(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.O(Date.now(),0,!1).a4().aa(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("J<1,a0<n,@>>"),k=A.z(new A.J(m,C.h3D(),l),l.k("ai.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.E(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.E(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a4().aa(),"updatedAt",o],r,x.K),"createdAt",s.a4().aa(),"updatedAt",o],r,x.z)},
fXv(d,e){var w=new A.O(Date.now(),0,!1).a4().aa(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("J<1,a0<n,@>>")
u=A.z(new A.J(u,C.h3D(),t),t.k("ai.E"))
return A.E(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a4().aa(),"updatedAt",w],x.N,x.z)},
hvQ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a6(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ai2(A.Z(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.J(j,A.fIr(),A.T(j).k("J<1,n>")).bZ(0,new C.eYE())
t=A.z(j,j.$ti.k("F.E"))
if(u===v)s=D.rH
else s=B.d.q(t,u)?D.Kg:D.k_
return w.aA_(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ai2(A.Z(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d2(q,h)
h=A.cy(h,new C.eYF(),h.$ti.k("F.E"),x.P)
p=A.a2(h).k("a5<F.E>")
o=A.z(new A.a5(h,new C.eYG(),p),p.k("F.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b4(n,new C.eYH(),x.N).bZ(0,new C.eYI())
t=A.z(h,h.$ti.k("F.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.rH
else s=B.d.q(t,u)?D.Kg:D.k_
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.y(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bg(J.k(l==null?"":l))
if(l==null)l=new A.O(Date.now(),0,!1)
j=A.aQ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.L(j)
if(j==null)j=0
return new C.kl(h,r,p,!m,t,o,l,j,v,s)},
eYR(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$eYR=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.a9(a0)===0){u=null
w=1
break}t=4
r=new C.eYV()
h=x.N
g=x.z
w=7
return A.b(A.iz(A.a([A.l7("family_trees","*",null,A.E(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bD),r.$2(A.l7("family_trees","*",A.E(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bD),"collaborator"),r.$2(A.l7("family_trees","*",null,A.E(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bD),"public")],x.cl),x.U),$async$eYR)
case 7:q=a4
p=J.q(q,0)
o=J.q(q,1)
n=J.q(q,2)
g=x.a
m=A.S(h,g)
h=A.z(p,g)
l=h
J.fS(l,o)
J.fS(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.K)(l),++f){k=l[f]
g=J.q(k,"id")
j=J.k(g==null?"":g)
if(J.a9(j)!==0)J.aE(m,j,k)}l=m
h=A.a2(l).k("bf<2>")
h=A.cy(new A.bf(l,h),new C.eYS(a0),h.k("F.E"),x.k)
l=A.a2(h).k("a5<F.E>")
l=A.z(new A.a5(h,new C.eYT(),l),l.k("F.E"))
B.d.aX(l,new C.eYU())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.a4(a1)
d=J.k(i)
l=B.a.q(d,"Could not find the table 'public.family_trees'")||B.a.q(d,'relation "public.family_trees" does not exist')
h=$.ak
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
return A.i($async$eYR,v)},
hy4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a6(e)
if(j.gah(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.di(e,new C.f1V(),v).bZ(0,new C.f1W())
t=A.d4(u,u.$ti.k("F.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.K)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.EZ(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.k_){m=q.e
m=!new A.J(m,A.fIr(),A.T(m).k("J<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.m(0,p,q)}for(j=j.gag(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.m(0,u,v)
continue}k=C.hGu(l,v)
o=C.EZ(k,w)
p=v.d
s.m(0,u,o===w?k.b6v(p,D.rH):k.b6v(p,v.y))}j=s.$ti.k("bf<2>")
j=A.z(new A.bf(s,j),j.k("F.E"))
B.d.aX(j,new C.f1X())
return j},
OO(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$OO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aw(),$async$OO)
case 2:u=g
t=B.a.gV(B.a.i(d.toLowerCase()))
s=J.b4(e,new C.f3X(),x.a)
s=A.z(s,s.$ti.k("ai.E"))
w=3
return A.b(u.an("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Q.aj(s,null)),$async$OO)
case 3:return A.h(null,v)}})
return A.i($async$OO,v)},
aLo(d,e){return C.hCU(d,e)},
hCU(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aLo=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.c7
w=7
return A.b(A.ly("family_trees",A.a([C.fXu(e,d)],p),null,B.cz),$async$aLo)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.ly("family_trees",A.a([C.fXv(e,d)],p),null,B.cz),$async$aLo)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.a4(n)
$.ak.$1("[family_trees] upsert error: "+A.t(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aLo,v)},
aLp(d,e){return C.hCV(d,e)},
hCV(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aLp=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("J<1,a0<n,@>>")
m=n.k("ai.E")
l=A.z(new A.J(e,new C.f8s(d),n),m)
r=l
w=7
return A.b(A.ly("family_trees",r,null,B.cz),$async$aLp)
case 7:q=g
if(q){u=!0
w=1
break}k=A.z(new A.J(e,new C.f8t(d),n),m)
p=k
w=8
return A.b(A.ly("family_trees",p,null,B.cz),$async$aLp)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.a4(i)
$.ak.$1("[family_trees] bulk upsert error: "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aLp,v)},
eYc(d){return C.hve(d)},
hve(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$eYc=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Pc("family_trees",A.E(["id",d],x.N,x.z),null,B.cz),$async$eYc)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.a4(p)
$.ak.$1("[family_trees] delete error: "+A.t(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$eYc,v)},
qn:function qn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
l1:function l1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqf:function cqf(){},
cqe:function cqe(){},
cqc:function cqc(){},
cqd:function cqd(){},
G2:function G2(d,e){this.a=d
this.b=e},
hO:function hO(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ai1:function ai1(d,e){this.a=d
this.b=e},
f9U:function f9U(){},
fwV:function fwV(d){this.a=d},
f95:function f95(d){this.a=d},
kl:function kl(d,e,f,g,h,i,j,k,l,m){var _=this
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
bIS:function bIS(){},
bIR:function bIR(){},
bIO:function bIO(){},
bIP:function bIP(){},
bIQ:function bIQ(){},
f1g:function f1g(){},
eY8:function eY8(){},
eY9:function eY9(){},
eYa:function eYa(){},
fpp:function fpp(){},
fpq:function fpq(){},
fpr:function fpr(){},
fps:function fps(d){this.a=d},
fpt:function fpt(){},
fwT:function fwT(d){this.a=d},
fal:function fal(d){this.a=d},
fcv:function fcv(){},
fcw:function fcw(){},
fcx:function fcx(){},
fcy:function fcy(){},
fcz:function fcz(d){this.a=d},
fpc:function fpc(d){this.a=d},
fwO:function fwO(){},
fwP:function fwP(){},
fwQ:function fwQ(d){this.a=d},
fa2:function fa2(d){this.a=d},
fa3:function fa3(d){this.a=d},
fwZ:function fwZ(){},
f9E:function f9E(d){this.a=d},
f9F:function f9F(d,e){this.a=d
this.b=e},
f9G:function f9G(){},
fwG:function fwG(d){this.a=d},
fdg:function fdg(){},
fp8:function fp8(){},
fcs:function fcs(){},
fct:function fct(){},
fcu:function fcu(){},
fp6:function fp6(d){this.a=d},
eYE:function eYE(){},
eYF:function eYF(){},
eYG:function eYG(){},
eYH:function eYH(){},
eYI:function eYI(){},
eYV:function eYV(){},
eYW:function eYW(d){this.a=d},
eYS:function eYS(d){this.a=d},
eYT:function eYT(){},
eYU:function eYU(){},
f1V:function f1V(){},
f1W:function f1W(){},
f1X:function f1X(){},
f3X:function f3X(){},
f8s:function f8s(d){this.a=d},
f8t:function f8t(d){this.a=d},
cqg:function cqg(d,e){this.a=d
this.b=e},
cqh:function cqh(d,e){this.a=d
this.b=e},
aDJ:function aDJ(d,e,f){this.a=d
this.b=e
this.c=f},
b4S:function b4S(){this.b=this.a=0},
b4R:function b4R(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
brA:function brA(){},
vT(d,e){var w,v
if(d==null)return""
w=d.bP()
v=""+w.gcb()+"/"+w.gcq()+"/"+w.gcd()
if(!e)return v
return v+" "+B.a.aT(B.o.u(w.gmE()),2,"0")+":"+B.a.aT(B.o.u(w.gEU()),2,"0")},
hmb(){var w,v=$.oW(),u=J.dZ(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aA(32)]
return"WS"+B.d.fM(u)},
apv(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$apv=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bU(),$async$apv)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.eT("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bD),$async$apv)
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
p=A.a4(m)
$.ak.$1("[worksheet qr stash] load: "+A.t(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apv,v)},
apw(d){return C.hmc(d)},
hmc(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$apw=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.bU(),$async$apw)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hr("ngmy_worksheet_project_qr_stashes_v1",A.E(["stashes",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.z),!1,!1,B.cz,null),$async$apw)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.a4(p)
$.ak.$1("[worksheet qr stash] save: "+A.t(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$apw,v)},
apy(d,e,f){var w=0,v=A.j(x.X),u,t,s,r,q,p
var $async$apy=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.bU(),$async$apy)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hmb()
w=4
return A.b(C.apv(),$async$apy)
case 4:r=h
q=B.a.i(e)
p=B.dB.aF(t)
J.aE(r,s,A.E(["ownerEmail",q,"projectId",f,"payload",B.cM.gcr().aF(p),"usesRemaining",25,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],x.N,x.K))
w=5
return A.b(C.apw(r),$async$apy)
case 5:u=new A.Z_("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apy,v)},
apx(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$apx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.bU(),$async$apx)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.apv(),$async$apx)
case 4:q=f
p=J.a6(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a6(o)
m=A.aQ(n.h(o,"usesRemaining"))
l=m==null?null:B.k.L(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.a9(t)===0){u=null
w=1
break}s=null
try{s=B.c0.c6(0,B.cw.aF(t))}catch(h){r=A.a4(h)
$.ak.$1("[worksheet qr stash] decode: "+A.t(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dR(A.Z(o,n,m),n,m)
m.m(0,"usesRemaining",j)
m.m(0,"lastUsedAt",new A.O(Date.now(),0,!1).a4().aa())
p.m(q,i,m)}w=5
return A.b(C.apw(q),$async$apx)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$apx,v)},
fS4(){var w=new A.O(Date.now(),0,!1).a4()
return"wst_"+(1000*w.a+w.b)+"_"+B.cA.aA(999999)},
hmd(d){var w,v,u,t,s,r,q
try{w=A.adS(d)
if(w==null)return d
v=w
if(J.JF(v)>960||J.JE(v)>960){s=v
r=J.JF(v)>=J.JE(v)?960:null
v=A.adR(s,J.JE(v)>J.JF(v)?960:null,B.Lv,r)}s=v
u=A.ajr(82).Rc(s,B.xm)
if(J.a9(u)===0)return d
s=new Uint8Array(A.cl(u))
return s}catch(q){t=A.a4(q)
$.ak.$1("[worksheet-thumb] compress failed: "+A.t(t))
return d}},
caz(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$caz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hmd(e)
$.cav.m(0,s,t)
u=C.byY(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caz,v)},
aZH(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZH=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.cS(l,"data:image")){u=null
w=1
break}t=4
r=J.eQ(l,",")?B.d.gai(J.l9(l,",")):l
q=B.cw.aF(r)
if(J.a9(q)===0){u=null
w=1
break}p=C.fS4()
w=7
return A.b(C.caz(p,q),$async$aZH)
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
n=A.a4(k)
$.ak.$1("[worksheet-thumb] persistDataUrl failed: "+A.t(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aZH,v)},
caw(d){var w=0,v=A.j(x.T),u,t,s
var $async$caw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a_(s,"data:image")){u=s
w=1
break}w=3
return A.b(I.cay(s),$async$caw)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cM.gcr().aF(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$caw,v)},
a6c(d){var w=0,v=A.j(x.H),u,t
var $async$a6c=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=I.h3w(d)
if(t==null){w=1
break}$.cav.W(0,t)
w=3
return A.b(C.byX(t),$async$a6c)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a6c,v)},
byY(d,e){return C.hMz(d,e)},
hMz(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$byY=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aKm
w=7
return A.b(n==null?$.aKm=I.fFc():n,$async$byY)
case 7:r=g
q=new Uint8Array(A.cl(e))
p=J.mg(r,"thumbs","readwrite")
B.ip.lL(J.me(p,"thumbs"),q,l)
w=8
return A.b(J.oY(p),$async$byY)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.a4(k)
$.ak.$1("[worksheet-thumb idb put] "+A.t(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$byY,v)},
byX(d){return C.hMx(d)},
hMx(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$byX=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aKm
w=7
return A.b(o==null?$.aKm=I.fFc():o,$async$byX)
case 7:r=f
q=J.mg(r,"thumbs","readwrite")
B.ip.Eq(J.me(q,"thumbs"),m)
w=8
return A.b(J.oY(q),$async$byX)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.a4(l)
$.ak.$1("[worksheet-thumb idb delete] "+A.t(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$byX,v)}},D,Ae,Af,O,Ag,Ah,I,Ai,P,A_,Aj
J=c[1]
A=c[0]
B=c[2]
A0=c[191]
G=c[171]
F=c[29]
E=c[181]
A1=c[109]
Q=c[108]
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
K=c[153]
Ad=c[164]
Y=c[205]
Z=c[198]
L=c[99]
N=c[66]
C=a.updateHolder(c[6],C)
D=c[201]
Ae=c[67]
Af=c[169]
O=c[204]
Ag=c[203]
Ah=c[54]
I=c[52]
Ai=c[74]
P=c[206]
A_=c[120]
Aj=c[94]
C.alz.prototype={}
C.aV3.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.baG(),f=h.x!=null&&h.y3(i).length===0
if(h.x!=null)w=f?B.aW:B.bS
else w=h.gRQ()?B.bS:B.e2
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.H(D.b4Q,B.r,1)
s=x.p
r=A.p(i,A.u(A.a([A.p(i,D.ejj,B.h,i,i,new A.o(B.aW.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h0,i,i,i),B.T,D.eL6,B.au,A.d(C.vT(new A.O(Date.now(),0,!1),!0),i,i,i,i,i,i,D.eHj,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,D.aRH,i,i,i,i,B.Vh,i,i,i)
q=A.m(16)
p=A.H(B.aJ,B.r,1)
o=A.H(B.aW.j(0.28),B.r,1)
n=A.fH1(h.d)
o=A.p(B.B,C.aV2(A.ffE(h.e,n),30),B.h,i,i,new A.o(B.lN,i,o,i,i,i,B.a5),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.eCR,B.L,i,i)
m=A.m(14)
l=A.H(B.aJ,B.r,1)
q=A.p(i,A.u(A.a([o,B.P,n,B.by,D.eLn,B.ab,A.p(i,A.u(A.a([D.eZE,B.by,A.d(A.zA(h.c),i,i,i,i,i,i,D.ey7,i,i,i)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.eU,i,i,1/0)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aO,i,p,q,i,i,B.n),i,i,i,i,K.acD,i,i,i)
p=A.m(16)
m=A.H(B.aJ,B.r,1)
l=j.aMh("Original due",C.vT(h.r,!1))
n=j.aMh("Current due",C.vT(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.T,A.p(i,A.u(A.a([l,B.P,n,B.T,A.p(i,A.d(h.gaGw(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.L,i,i),B.h,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.zw,i,i,1/0),B.T,j.c6C(),B.P,j.bWg(g,f)],s),B.m,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.H(B.aJ,B.r,1)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.eMh,B.au,A.d(q,i,i,i,i,i,i,D.eCd,i,i,i)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.aO,i,n,o,i,i,B.n),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaBA()){q=A.m(14)
o=A.H(B.cr,B.r,1.6)
B.d.v(p,A.a([B.T,A.p(i,A.u(A.a([D.f_P,B.P,A.bv(A.m(12),A.ec(new A.a3(1/0,88,A.b2(i,i,i,new A.TV(h.ax,B.M,D.emE,!0,3.5,i),B.as),i),B.c,!0),B.ap)],s),B.F,i,B.e,B.j,0,B.p),B.h,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.Dw,i,i,i)],s))}p.push(B.ay)
p.push(D.eTD)
return A.p(i,A.u(A.a([r,new A.C(B.acG,A.u(p,B.ad,i,B.e,B.j,0,B.p),i)],s),B.ad,i,B.e,B.R,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aMh(d,e){var w=null
return A.B(A.a([A.D(A.d(d,w,w,w,w,w,w,D.a4j,w,w,w),1),A.d(e,w,w,w,w,w,w,D.ez4,w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
c6C(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a6H(B.e2,u,"Not paid yet")
w=t.y3(null).length
v=w===0?B.aW:B.bS
return this.a6H(v,u,C.vT(t.x,!0))},
bWg(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a6H(B.aW,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a6H(B.aW,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.a4j,u,u,u)
v=A.T(d).k("J<1,h9>")
v=A.z(new A.J(d,new C.bXo(),v),v.k("ai.E"))
return A.u(A.a([w,B.ar,A.cb(B.bH,v,B.bw,6,6)],x.p),B.F,u,B.e,B.j,0,B.p)},
a6H(d,e,f){var w=null
return A.B(A.a([A.D(A.d(e,w,w,w,w,w,w,D.a4j,w,w,w),1),new A.dl(1,B.cj,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dK,w,w),w)],x.p),B.F,w,B.e,B.j,0,w,w)}}
C.b7_.prototype={
a6(d,e){new A.TV(this.b,B.M,e,!0,3.5,null).a6(d,e)},
ao(d){return d.b!==this.b}}
C.alG.prototype={
S(){return new C.azH(A.a([],x.bp))},
gdS(){return this.c}}
C.azH.prototype={
Z(){this.a0()
this.Hh()},
Hh(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Hh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a_K(t.a.c),$async$Hh)
case 3:s=e
if(t.c==null){w=1
break}t.n(new C.dy5(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Hh,v)},
aO8(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aO,s=A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bm:B.bv).j(0.22)
w=A.m(10)
return A.bl(v,new A.b1(4,r,new A.ax(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b1(4,w,new A.ax((this.a.d.a?B.bm:B.bv).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b1(4,A.m(10),D.aPl),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aO7(d){return this.aO8(d,null)},
ND(d){return this.caa(d)},
caa(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$ND=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.EN:B.eu
w=7
return A.b(new A.hP().B_(72,900,900,n),$async$ND)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.f7(),$async$ND)
case 8:p=f
n=B.cM.gcr().aF(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.a4(l)
n=r.c
if(n!=null)n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("Could not pick photo: "+A.t(o),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ND,v)},
aW6(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aO,o=A.m(10),n=A.H((q?B.bm:B.bv).j(0.18),B.r,1)
if(d)q=B.cW
else q=s.a.d.a?B.bm:B.bv
q=A.V(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aO:B.aG,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cW
else u=s.a.d.a?B.bm:B.bv
t=x.p
u=A.D(A.u(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.F,r,B.e,B.j,0,B.p),1)
v=A.fo(r,r,r,r,r,r,r,r,r,r,r,B.cW,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c6)
q=A.a([q,B.aa,u,A.bG(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.V(B.cu,s.a.d.a?B.bm:B.bv,r,r,r,18),r,r,r,g,r,r,r,r,r,B.c6))
return A.p(r,A.B(q,B.m,r,B.e,B.j,0,r,r),B.h,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.ks,D.bev,r,r,r)},
BV(d){return this.btm(d)},
btl(){return this.BV(null)},
btm(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BV=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.at()
r=new A.ao(new A.bb(a4,B.b_,B.aL),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.lp(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.L(p)):B.k.ab(p,2)}o=new A.ao(new A.bb(a4,B.b_,B.aL),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.ao(new A.bb(a4,B.b_,B.aL),s)
if(a3){a4=new A.O(Date.now(),0,!1).bL(6048e8)
m=A.bT(a4.gcd(),a4.gcb(),a4.gcq(),0,0,0,0,0)}else{a4=a5.f
m=A.bT(a4.gcd(),a4.gcb(),a4.gcq(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bh(a4,!0,x.cT)
i=a3?null:A.fH1(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.uR?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hL(B.w.j(0.55),!0,"Dismiss",a4,new C.dxP(),new C.dxQ(a2,t,a5,r,new C.dxR(a2,t),o,n,j),B.eE,!0,x.y),$async$BV)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d6(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.R$=s
r.O$=0
o.R$=s
o.O$=0
n.R$=s
n.O$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.F(x.q).f.P(D.esW)
w=1
break}a0=a2.d
if(a0==null){t.c.F(x.q).f.P(D.erB)
w=1
break}a1=A.ffE(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.uR?"male":"female"
w=7
return A.b(A.afc(a3,A.fOQ(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$BV)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.uR?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bT(a3.gcd(),a3.gcb(),a3.gcq(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bT(a4.gcd(),a4.gcb(),a4.gcq(),0,0,0,0,0)))a5.cBY(a2.a)
w=8
return A.b(A.afc(t.a.c,a5),$async$BV)
case 8:case 5:w=9
return A.b(t.Hh(),$async$BV)
case 9:case 1:return A.h(u,v)}})
return A.i($async$BV,v)},
aOI(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cW.j(0.14)
else w=this.a.d.a?B.M:B.aO
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cW
else s=(this.a.d.a?B.bm:B.bv).j(0.2)
s=A.H(s,B.r,g?1.5:1)
r=C.aV2(d,18)
if(g)q=B.cW
else q=this.a.d.a?B.aO:B.aG
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.p(p,A.B(A.a([r,B.bo,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b5,B.j,0,p,p),B.h,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.h,w,0,p,p,p,p,p,B.ac)},
Qd(d){return this.cr3(d)},
cr3(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hL(B.w.j(0.55),!0,"Dismiss",s,new C.dy8(),new C.dy9(t,d),B.hG,!0,x.y),$async$Qd)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.O(s,0,!1)
case 4:w=7
return A.b(A.afc(t.a.c,d),$async$Qd)
case 7:w=8
return A.b(t.Hh(),$async$Qd)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Qd,v)},
Mj(d,e){return this.bDR(0,e)},
bDR(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Mj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.kN(s,"Cancel","Delete",e.b+" \xb7 "+A.zA(e.c)+" will be removed from this device.","Delete this debt?"),$async$Mj)
case 3:if(!g){w=1
break}w=4
return A.b(C.fa9(t.a.c,e.a),$async$Mj)
case 4:w=5
return A.b(t.Hh(),$async$Mj)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Mj,v)},
abW(d){return this.c4e(d)},
c4e(d){var w=0,v=A.j(x.H),u=this,t
var $async$abW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.c0(B.K,null,new C.dy2(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$abW)
case 2:return A.h(null,v)}})
return A.i($async$abW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.dMe
w=J.dE(m.d,new C.dya())
v=A.z(w,w.$ti.k("F.E"))
w=J.dE(m.d,new C.dyb())
u=A.z(w,w.$ti.k("F.E"))
t=B.d.cI(v,0,new C.dyc())
w=A.m(18)
s=m.a.d.a
r=s?D.c81:D.asd
q=A.H(s?B.cW.j(0.35):B.cW.j(0.18),B.r,1)
s=A.p(l,D.bBU,B.h,l,l,new A.o(B.cW.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.av,A.D(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.aG,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.X,!0,A.m(12),A.aH(!1,A.m(12),!0,D.dLG,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dyd(m),l,l,l,l,l,l,l),B.h,B.cW,0,l,l,l,l,l,B.ac)],p),B.m,l,B.e,B.j,0,l,l)
o=A.D(m.cnm("Open",""+v.length),1)
n=v.length===0?"$0.00":A.zA(t)
r=A.a([A.p(l,A.u(A.a([s,B.ab,A.B(A.a([o,B.aa,A.D(m.b0Z(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.j,0,l,l)],p),B.F,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(l,l,q,w,l,new A.a8(B.ax,B.aC,B.x,r,l,l),B.n),l,l,l,l,B.acA,l,l,l),B.ay],p)
if(J.ci(m.d)){w=m.a.d.a
s=w?B.dR:B.c
q=A.m(18)
o=A.H((w?B.bm:B.bv).j(0.12),B.r,1)
n=A.p(l,D.bwZ,B.h,l,l,new A.o(B.cW.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aO:B.aG,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)
r.push(A.p(l,A.u(A.a([n,B.ab,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bm:B.bv,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.L,l,l)],p),B.m,l,B.e,B.j,0,B.p),B.h,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bgX,l,l,1/0))}else{w=m.gc9t()
s=A.z(new A.J(v,w,A.T(v).k("J<1,r>")),x.l)
if(u.length!==0){q=A.a([B.ar,new A.C(D.biA,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bm:B.bv,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.J(u,w,A.T(u).k("J<1,r>")))
B.d.v(s,q)}B.d.v(r,s)}return A.u(r,B.ad,l,B.e,B.j,0,B.p)},
b0Z(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.H((v.a.d.a?B.bm:B.bv).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bm:B.bv,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cW
else w=v.a.d.a?B.aO:B.aG
return A.p(u,A.u(A.a([q,B.by,A.d(f,u,1,B.Z,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.F,u,B.e,B.j,0,B.p),B.h,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.ei,u,u,u)},
cnm(d,e){return this.b0Z(!1,d,e)},
c9u(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.y3(j).length,h=d.b9S()
if(d.x!=null){w=d.y3(j).length
v=w===0?B.cW:B.bS}else if(d.gRQ())v=B.bS
else{if(h)w=B.cW
else w=k.a.d.a?B.bm:B.bv
v=w}if(d.x!=null){w=d.y3(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.vT(u,!1)}else{u.toString
t="Paid "+C.vT(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.vT(w,!1)+" \xb7 "+i+" missed":"Due "+C.vT(w,!1)}w=k.a.d.a?B.dR:B.c
u=A.m(18)
if(d.gRQ()&&d.x==null)s=B.bS.j(0.35)
else s=(k.a.d.a?B.bm:B.bv).j(0.12)
s=A.H(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.G,B.w.j(0.04),B.cG,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bj:B.lN
o=A.H(d.gRQ()&&d.x==null?B.bS.j(0.45):B.cW.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.fH1(d.d)
o=A.p(B.B,A.d5(C.aV2(A.ffE(d.e,m),24),n),B.h,j,j,new A.o(p,j,o,j,j,j,B.a5),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aO:B.aG
m=x.p
n=A.a([new A.dl(1,B.cj,A.d(p,j,1,B.Z,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaBA())B.d.v(n,A.a([B.eA,A.V(B.KF,B.cW.j(0.8),j,j,j,14)],m))
p=A.D(A.u(A.a([A.B(n,B.m,j,B.e,B.j,0,j,j),B.d4,A.d(t,j,1,B.Z,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.F,j,B.e,B.j,0,B.p),1)
n=A.zA(d.c)
l=k.a.d.a?B.aO:B.aG
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aD(!1,B.X,!0,j,A.aH(!1,q,!0,new A.C(U.ack,A.B(A.a([o,B.ba,p,B.aa,A.u(A.a([n,B.by,A.V(B.ek,(k.a.d.a?B.bm:B.bv).j(0.5),j,j,j,18)],m),B.dF,j,B.e,B.j,0,B.p)],m),B.m,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dy4(k,d),j,j,j,j,j,j,j),B.h,B.K,0,j,j,j,j,j,B.ac),B.h,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d7,j,j,j,j)}}
C.tA.prototype={}
C.ai0.prototype={
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
p=A.a([new A.aa(0,B.G,B.w.j(0.45),B.cv,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.H(r.j(0.6),B.r,1)
n.push(A.aJ(a0,A.p(a0,A.V(B.cu,t?a1.f:B.c,a0,a0,a0,17),B.h,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a5),a0,30,a0,a0,a0,a0,a0,30),B.z,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.ae))
m=v?B.a1:B.B
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.jY,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ap4,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.DL,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eX(m,A.B(l,B.m,a0,B.e,B.R,0,a0,a0),B.h,B.e8)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(D.bdM,A.d(v,a0,1,B.Z,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cx:B.bg,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.D(new A.C(B.fj,A.u(a2,u,a0,B.e,B.R,0,B.p),a0),1))
n.push(D.enm)
a2=A.a([A.B(n,B.m,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.C(B.u8,A.p(a0,a0,B.h,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a8(B.a1,B.a7,B.x,A.a([B.K,r.j(0.75),B.K],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.lo,A.u(a2,B.m,a0,B.e,B.R,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.h,a0,a0,new A.o(a0,a0,A.H(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.h2,a0,a0,a0,a0)}return A.p(a0,e,B.h,a0,a0,new A.o(a0,a0,q,s,p,new A.a8(B.ax,B.aC,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.beX,a0,a0,a0,a0)}}
C.aQV.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.h,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bf?B.bf:B.L
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.D(A.d(v,q,1,B.Z,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bg:B.cx,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.j,0,q,q),B.d4,n],m)
if(p.z)o.push(new A.C(B.zv,n,q))
return new A.C(B.d7,A.u(o,B.m,q,B.e,B.R,0,B.p),q)}}
C.QM.prototype={
S(){return new C.bay()}}
C.bay.prototype={
gbRs(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aG(d,n,x.w).w,l=x.p,k=A.a([D.dM9,D.dMf],l)
for(w=0;w<8;++w){v=D.Zc[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Eu:B.Ae
q=t===s
r=A.V(r,q?B.ev:B.c2,n,n,n,17)
q=q?B.c:B.aj
r=A.a([r,B.bo,new A.w(v.b,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.aa,new A.bE(1,B.bn,new A.w(v.c,n,Ai.BH,n,n,n,n,B.Z,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.b3(24,24)
p=new A.ax(B.ev,2,B.r,-1)
s=new A.o(n,n,new A.c1(p,p,p,p),new A.bu(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aJ(n,new A.C(B.es,A.u(A.a([new A.C(B.lU,new A.cC(B.aY,B.e,B.j,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.CC(!0,new C.ai0(v,q.d,q.e,new C.cZx(),n,n),n),B.h,n,n,s,n,n,n,n,n,n,n,n)],l),B.F,n,B.e,B.j,0,B.p),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.cZy(o,v),n,n,n,n,n,n,!1,B.ae))}k.push(new A.C(D.bfe,A.bH(D.f4L,new C.cZz(o,d),A.bk(B.b0,n,n,n,n,B.nC,n,n,new A.b5(A.m(16),B.W),n,n,n)),n))
return A.br(!0,new A.cZ(new A.aW(0,1/0,0,m.a.b*0.9),A.cK(k,n,D.bjq,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.mM.prototype={
ac(){var w=this
return A.E(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a4().aa()],x.N,x.z)},
b6H(d,e,f){return new C.mM(this.a,e,d,f)}}
C.G1.prototype={
vu(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.G1(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
azP(d){var w=null
return this.vu(w,w,w,w,w,d,w,w,w,w,w,w)},
cxQ(d){var w=null
return this.vu(w,w,w,w,d,w,w,w,w,w,w,w)},
b6F(d,e,f){var w=null
return this.vu(d,w,w,w,w,w,w,w,e,w,f,w)},
cyu(d){var w=null
return this.vu(w,w,w,w,w,w,d,w,w,w,w,w)},
cyD(d){var w=null
return this.vu(w,w,w,w,w,w,w,w,w,d,w,w)},
cxO(d){var w=null
return this.vu(w,w,w,d,w,w,w,w,w,w,w,w)},
cyF(d){var w=null
return this.vu(w,w,w,w,w,w,w,w,w,w,w,d)},
cxL(d){var w=null
return this.vu(w,w,d,w,w,w,w,w,w,w,w,w)},
cxG(d){var w=null
return this.vu(w,d,w,w,w,w,w,w,w,w,w,w)},
Ej(d){var w=null
return this.vu(w,w,w,w,w,w,w,d,w,w,w,w)},
cyN(d,e,f,g,h,i,j,k,l,m,n){return this.vu(d,e,f,g,null,h,i,j,k,l,m,n)},
ac(){var w=this
return A.E(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cvE(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bIN(d),k=A.aQ(d.h(0,"emblem")),j=k==null?o:B.k.L(k),i=A.aQ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cI(d.h(0,n))).length!==0?B.a.i(A.cI(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cI(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.AP.gea(D.AP))
s=i==null?o:B.k.D(i,18,36)
r=l.$2("position",D.a_C)
q=l.$2("frame",D.a_7)
l=l.$2("texture",D.a_2)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cI(d.h(0,"author"))):o
return this.cyN(p,u,t,q,r,A.te(d.h(0,"ribbon"))?A.EC(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.Xb.prototype={
S(){return new C.awO(A.a([],x.I),D.Kf)},
gdS(){return this.c}}
C.awO.prototype={
Z(){var w,v=this
v.a0()
v.f=A.yw(0,1)
w=$.at()
v.z=new A.ao(B.aq,w)
v.Q=new A.ao(B.aq,w)
v.kq()
w=v.a
C.bxn(w.c,w.d).bw(new C.d_d(v),x.fL)},
p(){var w,v=this,u=v.f
u===$&&A.c()
u.p()
u=v.z
u===$&&A.c()
w=$.at()
u.R$=w
u.O$=0
u=v.Q
u===$&&A.c()
u.R$=w
u.O$=0
v.a2()},
kq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$kq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.J8(s.c,s.d),$async$kq)
case 3:r=e
if(t.c==null){w=1
break}t.n(new C.d_1(t,r))
t.as8()
case 1:return A.h(u,v)}})
return A.i($async$kq,v)},
gaoO(){var w,v=this
if(!J.ci(v.d)){w=v.r
w=w<0||w>=J.a9(v.d)}else w=!0
return w?null:J.q(v.d,v.r)},
as8(){var w,v,u=this.gaoO(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saR(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saR(0,w==null?"":w)},
c2F(d){this.n(new C.cZZ(this,d))
this.as8()},
LF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$LF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.mM(B.o.u(1000*Date.now()),"Untitled page","",new A.O(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aN9(r.c,r.d,s),$async$LF)
case 3:w=4
return A.b(t.kq(),$async$LF)
case 4:if(t.c==null||J.ci(t.d)){w=1
break}q=J.pI(t.d,new C.cZA(s))
p=q>=0?q:J.a9(t.d)-1
t.n(new C.cZB(t,p))
t.as8()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.A4(p+1,B.co,B.kp),$async$LF)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$LF,v)},
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
break}s=t.gaoO()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aN9(o.c,o.d,new C.mM(s,r,q,new A.O(p,0,!1))),$async$zL)
case 3:w=4
return A.b(t.kq(),$async$zL)
case 4:if(t.c==null){w=1
break}t.n(new C.d_2(t))
case 1:return A.h(u,v)}})
return A.i($async$zL,v)},
Mk(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaoO()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.cZJ(r),s,null,!0,!0,x.y),$async$Mk)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bx9(s.c,s.d,r.a),$async$Mk)
case 4:t.n(new C.cZK(t))
w=5
return A.b(t.kq(),$async$Mk)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.RT(B.o.D(t.r+1,0,J.a9(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Mk,v)},
xm(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$xm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zL(),$async$xm)
case 5:case 4:if(t.c==null){w=1
break}w=J.cs(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.P4(s,r.r,o,p,q),$async$xm)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).K(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.h3Z(s,r.x,r.r),$async$xm)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.J8(s.c,s.d),$async$xm)
case 10:l=e
for(s=n.d,r=J.cB(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.G(l,new C.mM(""+(m+k),q,B.a.i(j.b),new A.O(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.zJ(r.c,r.d,l),$async$xm)
case 11:w=12
return A.b(t.kq(),$async$xm)
case 12:r=t.c
if(r==null){w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$xm,v)},
Z9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Z9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zL(),$async$Z9)
case 5:case 4:if(t.c==null){w=1
break}s=t.gxk(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dI(D.xt,new C.d__(t),new C.d_0())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new F.m0("Our Family",o,"",""))
for(o=J.aU(t.d);o.C();){n=o.gT(o)
p.push(new F.m0(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(F.fIC(o,new F.qG(s,r,"",p,new F.tT(q.d,null,null,null,null,"","","")),null),$async$Z9)
case 6:case 1:return A.h(u,v)}})
return A.i($async$Z9,v)},
M2(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$M2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zL(),$async$M2)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.c0(D.a8t,null,new C.cZF(t),s,!0,!0,!0,D.aGg,!1,!1,x.N),$async$M2)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cxQ(r)
t.n(new C.cZG(t,q))
s=t.a
w=7
return A.b(C.PE(s.c,s.d,q),$async$M2)
case 7:case 1:return A.h(u,v)}})
return A.i($async$M2,v)},
UV(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$UV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c0(D.a8t,null,new C.cZL(t),r,!0,!0,!0,D.aGg,!1,!1,x.e),$async$UV)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.cZM(t,s))
r=t.a
w=4
return A.b(C.PE(r.c,r.d,s),$async$UV)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.A4(0,B.dU,B.nZ)
case 1:return A.h(u,v)}})
return A.i($async$UV,v)},
bIS(d){var w=d.bP(),v=B.a.aT(B.o.u(w.gcb()),2,"0"),u=B.a.aT(B.o.u(w.gcq()),2,"0")
return""+w.gcd()+"-"+v+"-"+u},
gxk(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bQK()
if(r.e)w=D.a7z
else if(J.ci(r.d)){w=r.y
v=r.gxk(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.exA,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a3(q,330,new A.C(Z.adA,new C.Wt(w,v,0,q),q),q),B.bs,t,B.ar,A.d(u,q,q,q,q,q,q,A.l(q,q,D.jU.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s)
if(r.a.f){w=A.a([B.bs],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aJ(q,A.p(q,D.ej9,B.h,q,q,new A.o(q,q,q,A.m(18),A.a([new A.aa(0,B.G,B.dN.j(0.45),B.J,18)],x.V),E.uH,B.n),q,q,q,q,B.Vr,q,q,q),B.z,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcuP(),q,q,q,q,q,q,!1,B.ae))
w.push(B.T)
w.push(A.hf(D.bth,D.f4g,r.gaIe(),q))
B.d.v(u,w)}w=A.as(A.ch(A.u(u,B.m,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.em,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.a9(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.jU.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dJ:B.yJ
u=A.u(A.a([new A.C(D.bgg,w,q),A.D(A.Hi(v,new C.d_b(r),J.a9(r.d)+1,q,r.gc2E(),u,B.aY),1),r.bw8()],x.p),B.m,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.cg(q,D.a9y,new A.am(B.V,q,B.aX,B.q,A.a([D.aEX,A.br(!0,A.u(A.a([p,A.D(w,1)],v),B.m,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
bQK(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cs(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Ig(B.dO,"AI",h.gbu7(),!0))
if(h.a.f)f.push(new C.Ig(B.nq,"Cover",h.gbEq(),!1))
if(h.a.f)f.push(new C.Ig(B.x6,"Header",h.gbzu(),!1))
if(J.cs(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Ig(B.rW,"Print",h.gcbp(),!1))
if(h.a.f&&J.cs(h.d)&&h.r>=0){v=h.w
u=v?B.hg:B.iY
t=v?"Save":"Edit"
f.push(new C.Ig(u,t,v?h.gchm():new C.cZW(h),!1))}if(h.a.f)f.push(new C.Ig(B.hH,"Add page",h.gaIe(),!1))
v=C.h0c(h.y.Q)
u=h.gxk(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.a9(h.d)
r=J.a9(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.K)(f),++m){l=f[m]
if(l.d)k=D.d5c
else{k=new A.b3(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.jt.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.jU,g,g,g,17),B.h,g,g,new A.o(g,g,new A.c1(i,i,i,i),new A.bu(k,k,k,k),g,new A.a8(B.a1,B.a7,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.jU.j(0.85)
p.push(new A.bE(1,B.bn,A.aJ(B.c4,A.u(A.a([k,B.by,new A.w(l.b,g,new A.G(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.R,0,B.p),B.z,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.ae),g))}return new C.ai0(v,u,t+" \xb7 "+s+" "+r,new C.cZX(h),A.B(p,B.m,g,B.e,B.j,0,g,g),g)},
yP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$yP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.zL(),$async$yP)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aU(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=F.a_Z(B.d.aG(s," "))
s=t.c
s.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.cZC(t,p),s,null,!0,!0,x.N),$async$yP)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.xm(),$async$yP)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Cs(),$async$yP)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.DZ("Swahili (Kiswahili)",!0),$async$yP)
case 18:w=16
break
case 17:w=19
return A.b(t.crD(o==="sw"?"Swahili (Kiswahili)":"English"),$async$yP)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$yP,v)},
WM(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.H(E.jt.j(0.3),B.r,1),r=x.p
return new A.C(B.cH,A.aH(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.h,w,w,new A.o(w,w,w,w,w,E.uH,B.a5),w,42,w,w,w,w,w,42),B.ba,A.D(A.u(A.a([A.d(f,w,w,w,w,w,w,A5.a3Y,w,w,w),A.d(g,w,w,w,w,w,w,E.a3O,w,w,w)],r),B.F,w,B.e,B.j,0,B.p),1)],r),B.m,w,B.e,B.j,0,w,w),B.h,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.cZY(d,h),w,w,w,w,w,w,w),w)},
Cs(){return this.bIm()},
bIm(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Cs=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.cZP(r),a7,null,!0,!0,x.ei),$async$Cs)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.z(r.d,x.B)
p=g
f=r.y
o=new A.eL("Working on it\u2026",$.at())
a6.a=!0
a7=r.c
a7.toString
A.ce(null,null,!1,null,new C.cZQ(o),a7,null,!0,!0,x.H).f3(new C.cZR(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.K)(d),++a1){k=d[a1]
J.cf(l,new A.A(k.b,k.c))}d=r.r
a0=r.y.ac()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.xt[a1]
J.cf(j,i.a)}w=8
return A.b(C.aep(a0,a7,new C.cZS(o),d,l,e,j),$async$Cs)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.a4(a8)
n=A.t(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a7(l,!0).eD()
l=o
l.shI($.at())
J.aNB(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.F(x.q).f
j=n
l.P(A.b_(null,null,null,null,null,B.q,null,A.d(j==null?y.k:j,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gci(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.a9(p);++a4){if(m.b.am(0,a4)){j=J.q(p,a4)
a7=m.b.h(0,a4).a
a7=j.b6H(m.b.h(0,a4).b,a7,new A.O(Date.now(),0,!1))
j=a7}else j=J.q(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.zJ(j.c,j.d,l),$async$Cs)
case 11:w=12
return A.b(r.kq(),$async$Cs)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.xt[a1].a)
a5=l.cvE(j,12,a7)
l=r.a
w=15
return A.b(C.PE(l.c,l.d,a5),$async$Cs)
case 15:if(r.c!=null)r.n(new C.cZT(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.A4(0,B.dU,B.nZ)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.F(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.P(A.b_(a3?A.ckU("Undo",new C.cZU(r,p,f),null):null,null,null,null,null,B.q,null,j,null,B.ea,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Cs,v)},
DZ(d,e){return this.crE(d,e)},
crD(d){return this.DZ(d,!1)},
crE(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$DZ=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.z(r.d,x.B)
d=e
a0=new A.eL("Starting\u2026",$.at())
f.a=!0
k=r.c
k.toString
A.ce(null,null,!1,null,new C.d_4(a0),k,null,!0,!0,x.H).f3(new C.d_5(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.K)(k),++i){n=k[i]
J.cf(o,new A.A(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(F.a0b(m,new C.d_6(a0)),$async$DZ)
case 10:w=8
break
case 9:w=11
return A.b(C.byP(new C.d_7(a0),m,a2),$async$DZ)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.a4(a1)
q=A.t(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a7(o,!0).eD()
o=a0
o.shI($.at())
J.aNB(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.F(x.q).f
k=q
o.P(A.b_(null,null,null,null,null,B.q,null,A.d(k==null?y.i:k,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.a9(d);++g){k=J.q(d,g)
j=J.q(p,g)
o.push(k.b6H(J.q(p,g).b,j.a,new A.O(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.zJ(k.c,k.d,o),$async$DZ)
case 12:w=13
return A.b(r.kq(),$async$DZ)
case 13:o=r.c
if(o==null){w=1
break}o=o.F(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a_(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.P(A.b_(A.ckU("Undo",new C.d_8(r,d),null),null,null,null,null,B.q,null,k,null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DZ,v)},
bw8(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.cZD(v):u
r=A.aF(u,u,u,u,A.V(D.bp_,s?D.jU:B.be,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cs(v.d)&&!v.w&&v.r>=0)s=A.hf(A.V(B.uj,B.Da,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Da,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbE_(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.jU.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.D(A.as(s,u,u,u),1)
w=t<J.a9(v.d)?new C.cZE(v):u
return A.br(!0,new A.C(D.bg4,A.B(A.a([r,s,A.aF(u,u,u,u,A.V(B.ek,t<J.a9(v.d)?D.jU:B.be,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.Xf.prototype={
S(){return new C.baT(new A.ao(B.aq,$.at()))}}
C.baT.prototype={
ga_g(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
p(){var w=this.d
w.R$=$.at()
w.O$=0
this.a2()},
gbH9(){var w,v=this.ga_g()
A:{if("cover"===v){w=D.cDd
break A}if("book"===v){w=D.czo
break A}w=D.cZg
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.jt.j(0.5),n=x.p,m=A.B(A.a([D.d5d,B.av,D.blf,A.aF(q,q,q,q,B.l0,q,q,q,new C.d0E(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.j,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.jO(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.d0F(r),r.ga_g()==="page",q,q,q,q))
if(r.a.d)l.push(A.jO(q,q,q,D.f_n,q,new C.d0G(r),r.ga_g()==="book",q,q,q,q))
l.push(A.jO(q,q,q,D.eOI,q,new C.d0H(r),r.ga_g()==="cover",q,q,q,q))
l=A.cb(B.bH,l,B.bw,6,8)
k=B.c.j(0.07)
k=A.aK(q,B.U,!1,q,!0,B.q,q,A.aL(),r.d,q,q,q,q,q,2,A.bl(q,new A.b1(4,A.m(16),B.W),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.ke,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.af,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,B.di,!0,B.a6,q,B.am,q,q,q,q)
w=A.a([],n)
for(v=r.gbH9(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mG(q,B.c.j(0.08),new A.w(s,q,B.H6,q,q,q,q,q,q,q,q,q),B.hj,new C.d0I(r,s),q,q,q,q))}return A.ev(q,E.z9,A.ch(A.u(A.a([m,B.T,D.f2j,B.ar,l,B.ab,k,B.P,A.cb(B.bH,w,B.bw,6,6),B.ay,A.dk(D.bte,D.f34,new C.d0J(r,d),A.bk(B.b0,q,q,q,q,B.nC,q,q,new A.b5(A.m(16),B.W),q,q,q)),B.au,D.eYR],n),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.fv,q,q,B.ah),q,q,q,D.adj,B.cX,q,new A.b5(p,new A.ax(o,1.4,B.r,-1)),q)}}
C.Xd.prototype={
S(){return new C.awP(A.a([],x.Y))},
gdS(){return this.c}}
C.acf.prototype={}
C.awP.prototype={
Z(){this.a0()
this.kq()},
kq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$kq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.P8(p.c,p.d),$async$kq)
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
return A.b(C.bxn(r.c,q),$async$kq)
case 6:j=e
i=J
w=7
return A.b(C.J8(t.a.c,q),$async$kq)
case 7:m.push(new l.acf(k,j,i.a9(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.n(new C.d_s(t,n))
case 1:return A.h(u,v)}})
return A.i($async$kq,v)},
b29(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Og(d,e){return this.c4c(0,e)},
c4c(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Og=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).cs(A.eH(new C.d_r(u,e),!0,null,x.y)),$async$Og)
case 2:t=g
w=3
return A.b(u.kq(),$async$Og)
case 3:if(t===!0&&u.c!=null)u.c.F(x.q).f.P(D.aI4)
return A.h(null,v)}})
return A.i($async$Og,v)},
E1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$E1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.F(x.q).f.P(D.aI0)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.adL(s.c,s.d),$async$E1)
case 5:q=e
w=6
return A.b(t.kq(),$async$E1)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Og(0,B.d.kV(t.d,new C.d_w(q))),$async$E1)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.P4(p,s.f,r,n,o),$async$E1)
case 10:m=e
w=11
return A.b(t.kq(),$async$E1)
case 11:if(m&&t.c!=null)t.c.F(x.q).f.P(D.aI4)
case 1:return A.h(u,v)}})
return A.i($async$E1,v)},
NL(d,e){return this.cfa(0,e)},
cfa(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$NL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.d_v(t,e),s,null,!0,!0,x.y),$async$NL)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a0o(s.c,s.d,e.a),$async$NL)
case 4:w=5
return A.b(t.kq(),$async$NL)
case 5:case 1:return A.h(u,v)}})
return A.i($async$NL,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)k.push(o.bwb(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.H(E.jt.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aJ(n,new A.fM(0.7142857142857143,A.p(n,A.u(A.a([D.d5e,B.ab,D.dLm,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.jU.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b5,B.j,0,B.p),B.h,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcuL(),n,n,n,n,n,n,!1,B.ae))}w=A.m(22)
v=A.H(E.jt.j(0.85),B.r,1.6)
s=A.aJ(n,A.p(n,D.bAK,B.h,n,n,new A.o(B.w.j(0.3),n,A.H(E.jt.j(0.6),B.r,1),n,n,n,B.a5),n,32,n,n,n,n,n,32),B.z,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.d_x(d),n,n,n,n,n,n,!1,B.ae)
r=A.m(14)
q=B.w.j(0.3)
p=A.H(E.jt.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.ba,D.blz,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.ewM,n,n,n),B.h,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h0,n,n,n)],l),B.m,n,B.e,B.j,0,n,n),B.h,n,n,new A.o(n,n,v,w,n,D.bFt,B.n),n,n,n,Ag.UZ,D.beb,n,n,n)
if(o.e)k=D.a7z
else k=k.length===0?D.aWp:A.cj(new C.d_y(k))
return A.cg(n,D.a9y,new A.am(B.V,n,B.aX,B.q,A.a([D.aEX,A.br(!0,A.u(A.a([w,A.D(k,1)],l),B.m,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bwb(d){var w,v,u=this,t=null,s=u.b29(d),r=d.c,q=x.p,p=A.a([A.bW(0,A.eX(B.B,new A.a3(300,420,new C.Wt(d.b,s,r,t),t),B.h,B.dn),0,0,0)],q)
if(u.a.e)p.push(A.an(t,A.aJ(t,A.p(t,D.bA3,B.h,t,t,new A.o(B.w.j(0.55),t,A.H(B.be,B.r,1),t,t,t,B.a5),t,28,t,t,t,t,t,28),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d_p(u,d),t,t,t,t,t,t,!1,B.ae),t,t,t,6,6,t))
w=A.d(s,t,1,B.Z,t,t,t,D.ewo,t,t,t)
v=r===1?"page":"pages"
return A.aJ(t,A.u(A.a([new A.fM(0.7142857142857143,new A.am(B.V,t,B.a9,B.q,p,t),t),B.P,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.jU.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.j,0,B.p),B.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.d_q(u,d),t,t,t,t,t,t,!1,B.ae)}}
C.Ig.prototype={}
C.Wt.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dI(D.xt,new C.cyZ(m),new C.cz_()),j=m.c,i=D.AP.h(0,j.e),h=A.aX(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.m3:B.b5
v=new C.cz0(h)
i=A.a([new A.aa(0,B.G,B.w.j(0.6),D.dJp,28)],x.V)
u=x.p
t=A.a([A.bW(0,A.b2(l,l,l,new C.b8a(j.x,h,l),B.as),0,0,0),A.an(0,A.p(l,l,B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.a1,B.a7,B.x,A.a([B.w.j(0.45),B.K],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.b3(3,3)
t.push(new A.cE(8,40+s*46,l,l,l,l,A.p(l,l,B.h,l,l,new A.o(h.j(0.7),l,l,new A.bu(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.adB,8,0.85,2.2),v.$4(D.biT,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.adB,8,0.85,2.4))
else if(r==="corners")t.push(A.bW(0,new A.C(D.biP,A.b2(l,l,l,new C.b81(h,l),B.as),l),0,0,0))
r=A.V(D.arv[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.Z,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ap4,l,l),B.L,l,l)
p=A.p(l,l,B.h,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.ay,q,B.ab,p,B.ab,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cx,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.L,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aN,A.d(r,l,2,B.Z,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.L,l,l)],u))
t.push(A.bW(0,new A.C(D.bji,A.u(o,B.m,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.an(l,A.b2(l,l,l,new C.aDE(l),D.emy),l,l,l,46,0,l))
return A.p(l,A.bv(D.a6g,new A.am(B.V,l,B.a9,B.q,t,l),B.ap),B.h,l,l,new A.o(l,l,l,D.a6g,i,new A.a8(B.ax,B.aC,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.b8a.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.f5()
f.dZ(11)
switch(this.b){case"plain":return
case"linen":$.a1()
w=A.U()
w.r=B.w.j(0.07).gt(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.M()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.a1()
q=A.U()
q.r=B.c.j(0.05).gt(0)
q.c=1
for(p=0;p<u;p+=4){r=q.M()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.af()
l=f.af()
k=f.af()
$.a1()
j=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
j.r=t.j(0.25+f.af()*0.5).gt(0)
r=j.M()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.a1()
j=A.a([],l)
h=new A.b0(k.r,B.aw,null,null,j)
j.push(new A.bj(v,t))
k=i-0.04
j.push(new A.av(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.av(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bX())
k=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
k.r=m.j((n&1)===0?0.09:0.03).gt(0)
r=k.M()
k=h.gbM().a.snapshot()
o.drawPath((h.e=new A.cG(k)).a,r)
r.delete()}break
default:$.a1()
w=A.U()
w.r=B.w.j(0.07).gt(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.af()
m=f.af()
l=f.af()
r=w.M()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.a1()
g=A.U()
g.r=B.c.j(0.035).gt(0)
for(n=0;n<120;++n){o=f.af()
m=f.af()
l=f.af()
r=g.M()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
ao(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.b81.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.a1(),k=A.U(),j=this.b
k.r=j.j(0.9).gt(0)
k.b=B.ak
k.c=2.4
k.d=B.bZ
for(w=e.a,v=e.b,v=[D.efs,new A.d8([w,0,-1,1]),new A.d8([0,v,1,-1]),new A.d8([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.b0(l,B.aw,null,null,s)
s.push(new A.bj(r+p*34,q))
s.push(new A.av(r,q))
s.push(new A.av(r,q+o*34))
m=k.M()
s=n.gbM().a.snapshot()
w.drawPath((n.e=new A.cG(s)).a,m)
m.delete()
s=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
s.r=j.j(0.9).gt(0)
m=s.M()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
ao(d){return!d.b.A(0,this.b)}}
C.tB.prototype={}
C.WM.prototype={
S(){return new C.b88()}}
C.b88.prototype={
gns(){var w=this.d
return w===$?this.d=this.a.c:w},
gxk(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.ao(new A.bb(w.b,B.b_,B.aL),$.at())}return v},
gax8(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.ao(new A.bb(w.c,B.b_,B.aL),$.at())}return v},
ganp(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.ao(new A.bb(w.y,B.b_,B.aL),$.at())}return v},
p(){var w=this,v=w.gxk(0),u=v.R$=$.at()
v.O$=0
v=w.gax8()
v.R$=u
v.O$=0
v=w.ganp()
v.R$=u
v.O$=0
w.a2()},
ao_(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jO(s,s,s,new A.w(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.cSq(this,f,u),e===u,s,s,s,s))}return A.cb(B.bH,r,B.bw,6,8)},
atn(d){var w=null,v=B.c.j(0.07)
return A.bl(w,new A.b1(4,A.m(14),B.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.l7,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gns(),a0=f.gxk(0),a1=a0.a.a,a2=f.gax8(),a3=a2.a.a,a4=f.ganp(),a5=d.b6F(a4.a.a,a3,a1)
a1=x.w
a3=A.aG(a6,e,a1).w
a1=A.aG(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a3(190,260,A.eX(B.B,new A.a3(270,370,new C.Wt(a5,d,f.a.e,e),e),B.h,B.dn),e),e,e,e)
a0=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a0,e,e,e,e,e,2,f.atn("Title on the cover"),B.z,!0,e,!0,e,!1,e,B.af,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSP(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a6,e,B.am,e,e,e,e)
a2=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a2,e,e,e,e,e,2,f.atn("Small line under it (optional)"),B.z,!0,e,!0,e,!1,e,B.af,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cSQ(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a6,e,B.am,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.xt[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.be
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.p(e,e,B.h,e,e,new A.o(e,e,new A.c1(o,o,o,o),e,e,new A.a8(B.ax,B.aC,B.x,t.c,e,e),B.a5),e,46,e,e,e,e,e,46)
q=q?B.c:B.aA
v.push(A.aJ(e,A.u(A.a([p,B.d4,new A.w(t.b,e,new A.G(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSR(f,t),e,e,e,e,e,e,!1,B.ae))}v=A.cb(B.bH,v,B.bw,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b0.j(0.35):B.c.j(0.07)
m=new A.b3(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.ev:B.K,2,B.r,-1)
q.push(A.aJ(e,A.p(e,A.V(D.arv[n],B.c,e,e,e,24),B.h,e,e,new A.o(p,e,new A.c1(o,o,o,o),new A.bu(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSS(f,n),e,e,e,e,e,e,!1,B.ae))}q=A.cb(B.bH,q,B.bw,8,8)
a4=A.aK(e,B.U,!1,e,!0,B.q,e,A.aL(),a4,e,e,e,e,e,2,f.atn("Author or family name line (optional)"),B.z,!0,e,!0,e,!1,e,B.af,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.cST(f),e,e,e,!1,e,e,!1,e,!0,e,B.a8,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a6,e,B.am,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,H.mc,e,e,e)
m=A.a([],w)
for(l=D.AP.gdH(D.AP),l=l.gag(l);l.C();){k=l.gT(l)
j=A.aX(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ev:B.be
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.p(e,e,B.h,e,e,new A.o(j,e,new A.c1(o,o,o,o),e,e,e,B.a5),e,34,e,e,e,e,e,34)
h=g?B.c:B.aA
m.push(A.aJ(e,A.u(A.a([j,B.by,new A.w(i,e,new A.G(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.R,0,B.p),B.z,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.cSU(f,k),e,e,e,e,e,e,!1,B.ae))}m=A.cb(B.bH,m,B.bw,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,H.mc,e,e,e)
k=f.gns()
return new A.C(new A.M(0,0,0,a3.f.d),A.br(!0,new A.cZ(new A.aW(0,1/0,0,a1.a.b*0.92),A.cK(A.a([D.eYk,B.ab,d,B.aN,a0,B.T,a2,B.ay,D.f2T,B.P,v,B.ay,D.eYt,B.P,q,B.ay,a4,B.ay,p,B.P,m,B.ay,l,A.m8(e,9,""+B.k.U(f.gns().f),36,18,new C.cSV(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,H.mc,e,e,e),B.ar,f.ao_(D.a_C,f.gns().r,new C.cSW(f),D.d1n),B.ab,A.d("BORDER",e,e,e,e,e,e,H.mc,e,e,e),B.ar,f.ao_(D.a_7,f.gns().w,new C.cSX(f),D.d1s),B.ab,A.d("COVER MATERIAL",e,e,e,e,e,e,H.mc,e,e,e),B.ar,f.ao_(D.a_2,f.gns().x,new C.cSZ(f),D.d2Q),B.ar,A.it(e,B.b0,e,B.ag,e,new C.cT_(f),e,e,e,D.eTc,f.gns().z),B.bs,A.bH(D.eXg,new C.cT0(f,a6),A.bk(B.b0,e,e,e,e,B.nC,e,e,new A.b5(A.m(16),B.W),e,e,e))],w),e,O.ad8,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aDE.prototype={
a6(d,e){var w,v,u,t=new A.b0($.a1().r,B.aw,null,null,A.a([],x.v))
t.N(new A.bj(0,0))
w=e.a
t.N(new A.av(w,0))
v=e.b
t.N(new A.av(w,v))
t.N(new A.av(w/2,v-12))
t.N(new A.av(0,v))
t.N(new A.bX())
u=A.U()
u.sav(D.bG1.aC(0,new A.af(0,0,0+w,0+v)))
d.b4(t,u)},
ao(d){return!1}}
C.bdl.prototype={
a6(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.a1()
w=A.U()
w.sav(D.bF9.aC(0,new A.af(0,0,a3,a4)))
a5.bp(new A.af(0,0,a3,a4),w)
v=B.k.dF(a2/112)
u=new A.f5()
u.dZ(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.af()*20
l=56+u.af()*40
k=D.cDc[u.aA(9)]
j=u.aA(14)
J.bP(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.af(n,j,n+m,j+l)
h=A.c_(i,B.hi)
g=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
f=A.aq(k,B.c,0.12)
f.toString
e=A.aq(k,B.w,0.45)
e.toString
g.sav(new A.a8(B.a1,B.a7,B.x,A.a([f,k,e],t),a0,a0).aC(0,i))
d=g.M()
w.drawRRect(A.fL(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
e.r=E.jt.j(0.55).gt(0)
d=e.M()
w.drawRect(A.cz(new A.af(h,j,g,j+2)),d)
d.delete()
j=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
j.r=E.jt.j(0.4).gt(0)
d=j.M()
w.drawRect(A.cz(new A.af(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aA(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.sav(D.bEB.aC(0,new A.af(0,r,a3,q)))
d=p.M()
w.drawRect(A.cz(new A.af(0,r,a3,q)),d)
d.delete()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.w.j(0.5).gt(0)
p.z=B.jf
d=p.M()
w.drawRect(A.cz(new A.af(0,q,a3,q+14)),d)
d.delete()}w=A.U()
w.r=D.aZt.j(0.72).gt(0)
a5.bp(new A.af(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.U()
a4.sav(new A.bS(B.B,0.5,B.x,a0,0,A.a([D.b4v.j(0.22),B.K],t),a0,a0).aC(0,A.c2(new A.v(w,a2),a1)))
a5.aw(new A.v(w,a2),a1,a4)},
ao(d){return!1}}
C.b6o.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ad("[ \t]{2,}",!0,!1,!1,!1),k=A.aI(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cE(14,w*2,v*2.2,v*2,o,o,new A.kz(new A.o(A.aq(D.jU,D.b8b,w/4),o,new A.c1(B.W,new A.ax(B.w.j(0.12),1,B.r,-1),B.W,B.W),B.I8,o,o,B.n),B.b7,o,o),o))}v=x.V
u=A.a([new A.aa(0,B.G,B.w.j(0.35),B.aAM,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.b3(2,2)
t.push(A.p(o,o,B.h,o,o,new A.o(E.jt.j(0.6),o,o,new A.bu(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.u(t,B.m,o,B.qv,B.j,0,B.p),B.h,o,o,new A.o(o,o,o,D.aP5,u,D.bG_,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.aa(0,B.G,B.w.j(0.4),B.dl,18)],v)
t=A.an(o,A.b2(o,o,o,new C.aDE(o),D.emt),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aQV(p.y,r,G.i9,o))
r=n.d
q=p.x
if(p.f)n=A.u(A.a([A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.r,o,o,o,o,o,2,A.bl(o,B.ep,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.i9.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eJu,!0,B.a6,o,B.am,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.i9.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),p.w,o,o,o,o,o,2,A.bl(o,B.ep,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,G.i9.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.z,!0,o,!0,o,!0,o,B.af,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,D.eB0,!0,B.a6,B.yc,B.am,o,o,o,o),1)],m),B.ad,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.eJn,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,G.i9.j(0.5),o,o,o,o,o,o,o,o,11,B.cx,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.B(A.a([A.D(A.p(o,o,B.h,D.CX.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fj,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.CX.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.D(A.p(o,o,B.h,D.CX.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.j,0,o,o),B.ay],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,G.i9.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.VK(A.dr(A.a([A.dr(o,o,o,o,o,o,o,o,o,D.eDW,B.a.al(k,0,1)),A.dr(o,o,o,o,o,o,o,o,o,o,B.a.aV(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,G.i9.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ch(A.u(n,B.F,o,B.e,B.j,0,B.p),B.q,o,B.z,o,o,o,o,B.ah)}s.push(A.D(n,1))
s.push(new A.C(B.iX,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,G.i9.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.L,o,o),o))
l.push(A.B(A.a([u,A.D(A.p(o,A.bv(B.I8,new A.am(B.V,o,B.a9,B.q,A.a([t,new A.C(D.bim,A.u(s,B.ad,o,B.e,B.j,0,B.p),o),A.an(0,A.bQ(o,new A.o(o,o,o,o,o,new A.a8(B.a1,B.a7,B.x,A.a([B.w.j(0.16),B.K],x.O),o,o),B.n),B.b7),o,o,0,o,0,22)],m),o),B.ap),B.h,o,o,new A.o(o,o,o,B.I8,v,D.bGt,B.n),o,o,o,o,o,o,o,o),1)],m),B.ad,o,B.e,B.j,0,o,o))
return new A.am(B.V,o,B.a9,B.q,l,o)}}
C.amM.prototype={
S(){return new C.aAh(A.a([],x._))},
bl(){return this.r.$0()},
p_(){return this.w.$0()},
gdS(){return this.c}}
C.aAh.prototype={
Z(){var w,v
this.a0()
this.v0()
w=this.a
v=w.c
if(v.length!==0)C.a4X(v,w.e,w.d.w)},
uQ(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$uQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fIF(r,t.e,!1,s.w,new C.dKZ(u),null,s),$async$uQ)
case 2:w=3
return A.b(u.v0(),$async$uQ)
case 3:return A.h(null,v)}})
return A.i($async$uQ,v)},
Ym(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Ym=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.fIF(r,t.e,!0,s.w,new C.dKY(u),null,s),$async$Ym)
case 2:w=3
return A.b(u.v0(),$async$Ym)
case 3:return A.h(null,v)}})
return A.i($async$Ym,v)},
v0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$v0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.zy(q.a.c),$async$v0)
case 7:p=e
if(q.c!=null)n=q.e||J.cs(p)
else n=!1
if(n)q.n(new C.dL0(q,p))
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
return A.b(C.F0(q.a.c).cJ(0,B.oT),$async$v0)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.n(new C.dL1(q,o))
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
if(q.c!=null&&q.e)q.n(new C.dL2(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$v0,v)},
MP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$MP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.F(s).f.P(D.eq0)
w=3
return A.b(C.F0(t.a.c),$async$MP)
case 3:r=e
w=4
return A.b(C.fpb(t.a.c,r),$async$MP)
case 4:q=e
w=5
return A.b(C.F0(t.a.c),$async$MP)
case 5:p=e
if(t.c==null){w=1
break}t.n(new C.dKX(t,p))
o=t.c.F(s).f
s=A.d(q?"Family trees synced \u2014 "+J.a9(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.P(A.b_(null,null,null,q?B.dq:B.cL,null,B.q,null,s,null,B.lQ,null,null,null,null,null,null,null,null,null,null))
t.a.p_()
case 1:return A.h(u,v)}})
return A.i($async$MP,v)},
Gx(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gx=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hOq(l),$async$Gx)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hj_(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.aWt(q,p.e,l,"Each family tree costs $"+B.k.ab(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Gx)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.h0m(r)
o=Date.now()
n=t.a.c
m=new C.kl(l,r.toUpperCase(),p,!0,B.U,D.AE,new A.O(o,0,!1),0,n,D.rH)
w=5
return A.b(C.a0u(n,m),$async$Gx)
case 5:w=6
return A.b(t.v0(),$async$Gx)
case 6:t.a.bl()
t.a.p_()
if(t.c==null){w=1
break}t.Dc(m)
case 1:return A.h(u,v)}})
return A.i($async$Gx,v)},
Dc(d){return this.c69(d)},
c69(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Dc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.zy(u.a.c),$async$Dc)
case 2:n=l.qC(k.dE(f,new C.dL_(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hk(m,new C.amG(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Dc)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a0u(u.a.c,o),$async$Dc)
case 6:case 5:w=7
return A.b(u.v0(),$async$Dc)
case 7:u.a.p_()
return A.h(null,v)}})
return A.i($async$Dc,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.L(d).ax.a===B.H,o=new C.t4(p)
if(r.e)return A.as(A.mi(q,p?B.bm:B.bv,q,q,q,q,q,q,q,q),q,q,q)
if(J.ci(r.d)){w=p?B.dR:B.c
v=A.m(15)
u=A.aD(!1,B.X,!0,q,A.aH(!1,q,!0,A.p(q,D.buk,B.h,q,q,new A.o(B.aS.j(0.12),q,A.H(B.aS,B.r,2),q,q,q,B.a5),q,52,q,q,q,q,q,52),B.cC,!0,q,q,q,q,q,q,q,q,q,q,q,r.gc5f(),q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.E7(A.p(q,A.u(A.a([u,B.aN,t,B.P,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bm:B.bv,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q),B.dW,A.bH(D.f41,r.gaMd(),A.bk(B.bR,q,q,q,q,q,Af.Vu,q,new A.b5(A.m(12),B.W),q,q,q))],x.p),B.m,q,B.e,B.j,0,B.p),B.h,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bij,q,q,1/0),15,B.ag,1.05,D.a50,q)}w=J.a9(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b6],v)
if(J.cs(r.d))w.push(A.aF(q,q,q,q,A.V(B.xd,B.aS,q,q,q,q),q,q,q,new C.dL4(r),q,q,q,q,"Sync family trees with database",q))
if(J.cs(r.d))w.push(A.aF(q,q,q,q,A.V(B.x4,B.aS,q,q,q,q),q,q,q,r.gacA(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dk(E.aiv,D.eMG,r.gaMd(),A.bk(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.a9(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ab)
u.push(new C.E7(r.crI(J.q(r.d,s),o),14,B.ag,1,D.a50,q))
B.d.v(w,u)}return A.u(A.a([p,B.ay,A.u(w,B.m,q,B.e,B.j,0,B.p)],v),B.F,q,B.e,B.j,0,B.p)},
crI(d,e){var w=null,v=e.a,u=v?B.dR:B.c,t=A.m(14),s=A.H((v?B.dT:B.cg).j(0.55),B.r,1),r=A.a([new A.aa(0,B.G,B.w.j(v?0.35:0.08),B.e6,10)],x.V),q=A.m(14),p=A.p(w,D.btn,B.h,w,w,new A.o(B.aS.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.galn(),m=d.d?"":" \xb7 Public",l=d.y===D.k_?" \xb7 View only":"",k=x.p
l=A.D(A.u(A.a([o,B.by,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.F,w,B.e,B.j,0,B.p),1)
return A.p(w,A.aD(!1,B.X,!0,w,A.aH(!1,q,!0,new A.C(B.bA,A.B(A.a([p,B.ba,l,A.V(B.Kp,v?B.bm:B.bv,w,w,w,w)],k),B.m,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dL3(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac),B.h,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.amG.prototype={
S(){return new C.aAe(A.a([],x._),A.aZ(x.N),A.b43())},
bl(){return this.r.$0()},
gdS(){return this.c}}
C.aAe.prototype={
Z(){var w,v,u=this
u.a0()
u.d=u.a.w
u.a9G()
w=u.a
v=w.c
if(v.length!==0)C.a4X(v,w.e,w.d.w)},
p(){var w=this.w
w.R$=$.at()
w.O$=0
this.a2()},
a0a(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.wO("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dKp(r),s,null,!0,!0,x.y),$async$a0a)
case 3:if(e!==!0||t.c==null){w=1
break}t.HX()
t.n(new C.dKq(t,r))
w=4
return A.b(t.uS(),$async$a0a)
case 4:t.a.bl()
t.wO(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a0a,v)},
ci0(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.x1$.push(new C.dKk(w,f,d,e))},
aOn(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.de()
u.dY(w,v,0,1)
u.jf(q,q,1,1)
this.w.st(0,u)},
b4n(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.ew(new Float64Array(16))
q.dT(r)
w=q.Bt()
v=B.k.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.de()
t.dY(r,u,0,1)
t.jf(v,v,1,1)
t.dY(-r,-u,0,1)
t.ig(0,q)
s.st(0,t)},
a9G(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a9G=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.zy(u.a.c),$async$a9G)
case 2:t=s.qC(r.dE(e,new C.dJT(u)))
if(t!=null&&u.c!=null)u.n(new C.dJU(u,t))
return A.h(null,v)}})
return A.i($async$a9G,v)},
wO(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(A.b_(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
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
return A.b(C.fIF(o,t,!1,r,new C.dK7(u),q.a,s),$async$uQ)
case 2:n=A
m=J
w=3
return A.b(C.F0(u.a.c),$async$uQ)
case 3:p=n.qC(m.dE(e,new C.dK8(u)))
if(p!=null&&u.c!=null)u.n(new C.dK9(u,p))
return A.h(null,v)}})
return A.i($async$uQ,v)},
HX(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cu(w,0)},
uS(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a0u(t,s),$async$uS)
case 2:return A.h(null,v)}})
return A.i($async$uS,v)},
ZP(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$ZP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.ti(q,t.a.c)){t.wO("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.hPz(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$ZP)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.HX()
t.n(new C.dKj(t,r))
w=4
return A.b(t.uS(),$async$ZP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZP,v)},
Yz(){return this.c6b()},
c6b(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Yz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.d
q===$&&A.c()
if(!C.ti(q,t.a.c)){t.wO("View only \u2014 display settings are locked.")
w=1
break}q=t.c
q.toString
q=A.L(q)
r.a=t.d.w
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dKh(r,new C.t4(q.ax.a===B.H)),s,null,!0,!0,x.y),$async$Yz)
case 3:if(e!==!0||t.c==null){w=1
break}t.HX()
t.n(new C.dKi(r,t))
w=4
return A.b(t.uS(),$async$Yz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yz,v)},
TN(d){return this.btj(d)},
btj(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.ti(r,t.a.c)){t.wO("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dJH(t,d),r,null,!0,!0,x.P),$async$TN)
case 3:s=f
if(s==null){w=1
break}t.HX()
t.n(new C.dJI(t,s))
w=4
return A.b(t.uS(),$async$TN)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TN,v)},
a0w(d){return this.ctP(d)},
ctP(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a0w=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.L(s)
t=u.c
t.toString
w=2
return A.b(A.ce(null,null,!0,null,new C.dKs(u,d,new C.t4(s.ax.a===B.H)),t,null,!0,!0,x.H),$async$a0w)
case 2:return A.h(null,v)}})
return A.i($async$a0w,v)},
c2z(d){var w=this,v=w.d
v===$&&A.c()
if(C.ti(v,w.a.c))w.Mu(d)
else w.a0w(d)},
af2(d,e){return this.clO(d,e)},
clO(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$af2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.L(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.dKm(new C.t4(r.ax.a===B.H),d,e),s,null,!0,!0,x.H),$async$af2)
case 3:case 1:return A.h(u,v)}})
return A.i($async$af2,v)},
GC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$GC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.k_?3:5
break
case 3:w=6
return A.b(C.fwU(t.a.c),$async$GC)
case 6:s=e
o=t.a
r=C.fQd(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.af2(!s,!r),$async$GC)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.bxg(o,t.a.c)){t.wO("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.kN(o,"Cancel","Remove",q.y===D.k_?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$GC)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aLy(t.a.c,t.d.a),$async$GC)
case 11:t.a.bl()
o=t.c
if(o==null){w=1
break}A.iC(o,null)
case 1:return A.h(u,v)}})
return A.i($async$GC,v)},
a7h(d){return this.bE7(d)},
bE7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$a7h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.ti(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.bf(s,new C.dJJ(p))){o=A.T(s)
p.a=A.qC(new A.cQ(new A.a5(s,new C.dJK(d),o.k("a5<1>")),new C.dJL(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.HX()
t.n(new C.dJM(t,s,d,q))
w=3
return A.b(t.uS(),$async$a7h)
case 3:t.wO(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$a7h,v)},
Mu(d){return this.bG7(d)},
bG7(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Mu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.ti(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a0w(d),$async$Mu)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.dJQ(t,d),r,null,!0,!0,x.P),$async$Mu)
case 6:s=f
if(s==null){w=1
break}t.HX()
t.n(new C.dJR(t,s))
w=7
return A.b(t.uS(),$async$Mu)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Mu,v)},
cs1(){var w=this,v=w.d
v===$&&A.c()
if(!C.ti(v,w.a.c))return
if(w.e.length===0)return
w.n(new C.dKr(w))
w.uS()},
Wy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Wy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.bxg(n,t.a.c)){t.wO("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.L(n)
s=$.at()
r=new A.ao(B.aq,s)
q=t.d.e
p=A.bh(new A.J(q,t.gc14(),A.T(q).k("J<1,n>")).bZ(0,new C.dK2()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dK3(t,new C.t4(n.ax.a===B.H),p,r),q,null,!0,!0,x.y),$async$Wy)
case 3:o=e
r.R$=s
r.O$=0
if(o!==!0||t.c==null){w=1
break}t.HX()
t.n(new C.dK4(t,p))
w=4
return A.b(t.uS(),$async$Wy)
case 4:t.wO("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Wy,v)},
c15(d){return B.a.i(d.toLowerCase())},
c50(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.ti(v,w)
t=r.d
s=C.hF4(t)
C.hOu(q,t.b,u,C.hF3(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.L(d).ax.a===B.H,m=new C.t4(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.a5(l,new C.dKz(),A.T(l).k("a5<1>")).gH(0)
l=n?B.bV:B.iR
v=A.V(B.Ww,n?B.bm:B.bv,o,o,o,18)
u=x.p
v=A.a([new A.C(B.zA,A.aH(!1,o,!0,new A.C(B.ht,A.B(A.a([v,B.bo,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,o,o,o,B.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.R,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dKA(p,d),o,o,o,o,o,o,o),o),new A.C(B.my,p.bQL(m),o)],u)
if(p.d.y===D.k_){t=B.qx.j(0.15)
s=A.m(12)
r=A.H(B.qx.j(0.45),B.r,1)
q=C.EZ(p.d,p.a.c)
v.push(new A.C(B.wq,A.p(o,A.B(A.a([D.byu,B.av,A.D(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,12,o,o,B.a0,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iE,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b6],u)
if(C.ti(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Ic("Undo",B.uA,p.gcs0(),m,o,o))
u.push(new C.Ic("Family Book",D.bo6,p.gc5_(),m,B.re,o))
if(C.ti(p.d,p.a.c))u.push(new C.Ic("Display settings",Aj.EC,p.gc6a(),m,B.aW,o))
u.push(new C.Ic("Sync",B.x4,p.gacA(),m,o,o))
t=p.d
if(t.y===D.k_||C.bxg(t,p.a.c)){t=p.d.y===D.k_?"Remove shared tree":"Delete tree"
u.push(new C.Ic(t,B.e4,p.gbEh(),m,B.fK,o))}if(C.ti(p.d,p.a.c))u.push(new C.Ic("Add member",B.uv,new C.dKB(p),m,B.bR,o))
v.push(new A.C(O.acM,A.B(u,B.m,o,B.e,B.j,0,o,o),o))
if(p.d.galn()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cj(new C.dKC(p,m))
v.push(A.D(n,1))
if(w>0){n=p.f
u=A.V(n?K.WA:W.Kq,o,o,o,o,o)
v.push(A.as(A.hf(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dKD(p),o),o,o,o))}return A.cg(o,l,A.br(!0,A.u(v,B.F,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
bQL(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.aa(0,B.G,B.ff.j(0.35),B.dl,18)],x.V)
u=A.m(22)
t=A.an(-26,A.V(B.wY,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.X,!0,m,A.aH(!1,m,!0,A.p(m,D.bBt,B.h,m,m,new A.o(B.c.j(0.16),m,A.H(B.c.j(0.45),B.r,1.5),m,m,m,B.a5),m,46,m,m,m,m,m,46),B.cC,!0,m,m,m,m,m,m,m,m,m,m,m,n.gacA(),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)
r=n.d
q=A.d(r.b,m,1,B.Z,m,m,m,D.ezt,m,m,m)
r=r.galn()
p=n.d.galn()===1?"member":"members"
o=x.p
p=A.a([s,B.ba,A.D(A.u(A.a([q,B.by,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a0,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.F,m,B.e,B.j,0,B.p),1)],o)
if(C.ti(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.byG,m,m,m,n.gcfv(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.iZ:B.lZ
r=r?"Private":"Public"
r=A.D(n.ary(q,"Privacy",r,n.a.d.w?n.gcr7():m),1)
q=A.D(n.ary(B.x5,"Tree code",n.d.c,new C.dJS(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ab,A.B(A.a([r,B.aa,q,B.aa,A.D(n.ary(D.bpQ,"Collaborators",p,n.gbV5()),1)],o),B.m,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.k_){s=B.c.j(0.15)
B.d.v(p,A.a([B.P,A.aD(!1,B.X,!0,A.m(999),A.aH(!1,A.m(999),!0,new A.C(B.fF,A.B(A.a([A.V(B.o9,B.c,m,m,m,14),B.eA,A.d("View only",m,m,m,m,m,m,B.aJe,m,m,m)],o),B.m,m,B.e,B.R,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.h,s,0,m,m,m,m,m,B.ac)],o))}return A.p(m,A.bv(u,new A.am(B.V,m,B.a9,B.q,A.a([t,new A.C(B.Dz,A.u(p,B.F,m,B.e,B.j,0,B.p),m)],o),m),B.ap),B.h,m,m,new A.o(m,m,m,w,v,D.bEE,B.n),m,m,m,m,m,m,m,1/0)},
ary(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.X,!0,A.m(14),A.aH(!1,A.m(14),!0,new A.C(D.bk2,A.u(A.a([A.V(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.Z,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.v4,A.d(f,w,1,B.Z,w,w,w,L.aJ0,w,w,w)],x.p),B.m,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)}}
C.baB.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gah(r)&&s.c.length===0)return B.bF
w=s.d
v=s.e
u=A.a([A.b2(t,t,t,new C.baE(s,t),new A.ap(w,v))],x.p)
r=r.gdH(r)
B.d.v(u,r.di(r,new C.d_C(this),x.l))
r=s.c
B.d.v(u,new A.J(r,new C.d_D(this),A.T(r).k("J<1,r>")))
return new A.C(B.rE,new A.a3(w,v,new A.am(B.V,t,B.a9,B.h,u,t),t),t)}}
C.Io.prototype={}
C.Ej.prototype={}
C.baD.prototype={
gbcv(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aFJ.prototype={}
C.baE.prototype={
bFQ(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.a1()
v=A.U()
v.r=B.bz.j(0.75).gt(0)
v.c=2
v.d=B.bZ
d.bU(new A.v(n,w),new A.v(m,w),v)
u=(n+m)/2
t=new A.b0(q.r,B.aw,null,null,A.a([],x.v))
q=w+5.5
t.N(new A.bj(u,q))
s=w-1.1
r=w-8.8
t.N(new A.p4(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.N(new A.p4(u+4.95,r,u+9.9,s,u,q))
t.N(new A.bX())
q=A.U()
q.r=B.c.gt(0)
d.aw(new A.v(u,w),9,q)
q=A.U()
q.r=B.bz.gt(0)
d.b4(t,q)},
bFO(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aX(a0,new C.d_X())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.bf(a0,new C.d_Y(f))
t=new A.J(a0,new C.d_Z(f),A.T(a0).k("J<1,Q>")).bZ(0,new C.d0_()).cI(0,1/0,B.vH)
w=f.a
d.bU(f,new A.v(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.K)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.M()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.lB(m)
i=Math.min(10,l/2)
l=$.a1()
h=A.a([],q)
g=new A.b0(l.r,B.aw,null,null,h)
h.push(new A.bj(w,v-i))
l=j*i
h.push(new A.dn(w,v,w+l,v))
h.push(new A.av(n-l,v))
h.push(new A.dn(n,v,n,v+i))
h.push(new A.av(n,o.b))
k=e.M()
n=g.gbM().a.snapshot()
r.drawPath((g.e=new A.cG(n)).a,k)
k.delete()}},
a6(d,e){var w,v,u,t,s,r,q,p,o
$.a1()
w=A.U()
w.r=B.bR.j(0.75).gt(0)
w.c=2.2
w.b=B.ak
w.d=B.bZ
w.e=B.fl
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.K)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bFO(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.M()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.K)(v),++s){q=v[s]
if(q.c)this.bFQ(d,w,q.a,q.b)}},
ao(d){return d.b!==this.b}}
C.bei.prototype={
gbZX(){var w=this.c
if(B.a.i(w.y).length!==0)return D.cZf
switch(w.c.a){case 0:return D.cvD
case 1:return D.cFQ
case 2:return D.cUl}},
gc__(){var w=this.c,v=C.h_M(w.w),u=C.h_M(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.L(d).ax.a===B.H,q=t.gbZX(),p=t.c,o=I.by8(p.f),n=t.gc__(),m=x.V,l=A.a([new A.aa(0,B.G,B.d.gai(q).j(0.35),B.cG,10)],m),k=r?B.aG:B.c,j=A.H(r?B.aG:B.c,B.r,2)
if(o!=null)w=A.rx(B.B,s,B.ci,B.bN,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gai(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.B,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gai(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(s,s,s,s,s,new A.a8(B.a1,B.a7,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hM(w,B.ap),B.h,s,s,new A.o(k,s,j,s,s,s,B.a5),s,s,s,s,s,s,s,s),B.h,s,s,new A.o(s,s,s,s,l,new A.a8(B.ax,B.aC,B.x,q,s,s),B.a5),s,56,s,s,B.DP,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.H(r?B.aG:B.c,B.r,1.5)
l.push(A.an(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.eJ1,s,s,s),B.h,s,s,new A.o(B.c9,s,w,j,s,s,B.n),s,s,s,s,D.bk6,s,s,s),s,s,s,-6,-4,s))}k=r?B.d3:B.c
j=A.m(8)
w=A.H(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.G,B.w.j(r?0.3:0.06),B.dH,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.d3,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.L,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aQ:B.bv,s,s,s,s,s,s,s,s,7.5,s,s,B.a0,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aJ(s,new A.a3(84,112,A.u(A.a([new A.am(B.V,s,B.a9,B.h,l,s),B.au,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,D.aQU,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bkg,s,s,s)],v),B.m,s,B.e,B.j,0,B.p),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.ae)}}
C.b9J.prototype={
a6(d,e){var w,v,u,t,s,r,q
$.a1()
w=A.U()
v=this.b
u=v?B.c:D.b0R
w.r=u.j(v?0.05:0.09).gt(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.M()
t.drawCircle(r,s,1,q)
q.delete()}},
ao(d){return d.b!==this.b}}
C.brH.prototype={
B(d){var w=this,v=null,u=new C.eVs(w),t=w.c,s=t?B.d3:B.c,r=A.m(12),q=u.$3(B.hH,"Zoom in",w.d),p=A.p(v,v,B.h,t?B.bG:B.eZ,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.Ev,"Zoom out",w.e)
return A.aD(!1,B.X,!0,r,A.u(A.a([q,p,o,A.p(v,v,B.h,t?B.bG:B.eZ,v,v,v,1,v,v,v,v,v,22),u.$3(B.ag5,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.R,0,B.p),B.h,s,4,v,B.dt,v,v,v,B.ac)}}
C.bhz.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.H(B.bR,B.r,2),s=w.e,r=x.p
t=A.aJ(v,A.p(v,A.u(A.a([A.V(s?K.WA:W.Kq,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.eFs,v,v,v)],r),B.m,v,B.b5,B.j,0,B.p),B.h,v,v,new A.o(u,v,t,v,v,v,B.a5),v,56,v,v,v,v,v,56),B.z,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.ae)
u=A.a([t,B.ar,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.eDv,B.L,v,v)],r)
if(s){t=A.a([B.ar],r)
s=w.d
B.d.v(t,new A.J(s,new C.ex7(w),A.T(s).k("J<1,r>")))
B.d.v(u,t)}return new A.a3(84,v,A.u(u,B.m,v,B.e,B.j,0,B.p),v)}}
C.XP.prototype={
S(){return new C.ayG()},
bl(){return this.Q.$0()},
gdS(){return this.w}}
C.ayG.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a0()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.at()
r.d!==$&&A.aO()
r.d=new A.ao(new A.bb(t,B.b_,B.aL),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aO()
r.e=new A.ao(new A.bb(t,B.b_,B.aL),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aO()
r.f=new A.ao(new A.bb(t,B.b_,B.aL),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aO()
r.r=new A.ao(new A.bb(t,B.b_,B.aL),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aO()
r.w=new A.ao(new A.bb(t,B.b_,B.aL),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aO()
r.x=new A.ao(new A.bb(t,B.b_,B.aL),s)
t=u?q:v.c
r.y=t==null?D.wC:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.hGz(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
p(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.at()
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
NM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$NM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.fQd(p.y,p.w)
w=3
return A.b(A.kZ(t.a.w,B.Gc),$async$NM)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.aWt(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$NM)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hj0(p.y,p.w)
t.a.bl()
case 5:w=7
return A.b(Ah.F9(78,800),$async$NM)
case 7:q=e
if(q!=null&&t.c!=null)t.n(new C.dfd(t,q))
case 1:return A.h(u,v)}})
return A.i($async$NM,v)},
bZZ(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hO(B.o.u(1000*Date.now()),w,D.wC,null,null,null,"","","","","",1,!1,0)
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
s=v.azV(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).K(s)},
a6U(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a6U=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dfc(r),s,null,!0,!0,x.y),$async$a6U)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).K(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$a6U,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.L(d).ax.a===B.H,i=new C.t4(j),h=l.a.e,g=A.T(h).k("a5<1>"),f=A.z(new A.a5(h,new C.dfm(l),g),g.k("F.E"))
h=j?B.dR:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.biE,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aO:B.aG,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.L,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.an(k,A.hI(A.aH(!1,k,!0,new A.C(B.lT,A.V(B.e4,B.nW,k,k,k,17),k),B.cC,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbAZ(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.j7:B.iA
t=I.by8(l.as)
if(l.as==null)s=A.V(B.o2,j?B.bm:B.bv,k,k,k,40)
else s=k
s=A.as(A.aJ(k,new A.am(B.V,k,B.a9,B.q,A.a([A.hg(u,t,s,k,42),A.an(0,A.hg(B.bR,k,D.bsr,k,14),k,k,k,0,k,k)],v),k),B.z,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gbZW(),k,k,k,k,k,k,!1,B.ae),k,k,k)
t=l.d
t===$&&A.c()
t=C.ayI(t,"Full name",B.lV,1,1,i,B.lA)
u=l.y
u===$&&A.c()
u=A.u(A.a([t,B.T,new C.beg(i,u,new C.dfn(l),k)],v),B.m,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bch],q)
o=l.a.e
B.d.v(p,new A.J(o,new C.dfo(),A.T(o).k("J<1,ep<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bcj],q)
B.d.v(q,new A.J(f,new C.dfq(),A.T(f).k("J<1,ep<n?>>")))
o=A.u(A.a([t,B.ar,new C.aaI(i,r,"Who is their parent?",p,new C.dfr(l),k,o),B.ay,n,B.ar,new C.aaI(i,m,"Who is their spouse / partner?",q,new C.dfs(l),k,o)],v),B.ad,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.ayI(q,"Birth date",D.afd,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.ayI(m,"Birth place",B.WP,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.ayI(n,"Date of death (if deceased)",D.ahl,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.ayI(p,"Occupation",B.XY,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.B,k,B.a9,B.q,w,k),B.ay,s,B.bs,new C.aaJ(i,"Identity",u,k),B.ab,new C.aaJ(i,"Family links",o,k),B.ab,new C.aaJ(i,"Life details",A.u(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.ayI(r,"Notes",B.kw,5,3,i,k)],v),B.m,k,B.e,B.j,0,B.p),k),B.ab,new C.ayH(i,"Child order",l.c6l(l.at),new C.dft(l),new C.dfu(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.fG8(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dfv(l):k
B.d.v(r,A.a([B.T,new C.ayH(i,"Visible in tree",u,w,new C.dfw(l),k)],v))}r.push(B.T)
w=j?B.j7:B.iA
u=A.m(14)
t=A.H(j?B.dT:B.cg,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.it(k,B.bR,k,B.ag,k,new C.dfx(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.h,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,K.aco,k,k,k))
r.push(B.bs)
w=j?B.aO:B.aG
j=j?B.dT:B.cg
r.push(A.B(A.a([A.D(A.dU(B.mW,new C.dfp(d),A.d9(k,k,k,k,k,k,k,k,k,w,k,k,B.ca,k,new A.b5(A.m(14),B.W),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.ba,A.D(A.bH(D.ejh,l.gbZY(),A.bk(B.aS,k,k,0,B.c,k,B.ca,k,new A.b5(A.m(14),B.W),k,k,k)),2)],v),B.m,k,B.e,B.j,0,k,k))
r.push(B.au)
return A.eo(B.fT,k,B.ag,h,new A.a3(420,k,A.ch(A.u(r,B.ad,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ah),k),D.adf,k,B.acE,new A.b5(g,B.W),k,k)},
c6l(d){var w=B.o.J(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.J(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aaJ.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j7:B.iA,s=A.m(16)
return A.u(A.a([new A.C(D.adE,u,w),A.p(w,this.e,B.h,w,w,new A.o(t,w,A.H(v?B.dT:B.cg,B.r,1),s,w,w,B.n),w,w,w,w,B.bk,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)}}
C.beh.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.dR:B.c,r=A.m(12),q=A.H((t?B.dT:B.cg).j(0.85),B.r,1),p=v.r
if(p==null)p=B.am
w=A.l(u,u,t?B.aO:B.aG,u,u,u,u,u,u,u,u,14,u,u,B.a0,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aK(u,B.U,!1,u,!0,B.q,u,A.aL(),v.d,u,u,u,u,u,2,A.bl(u,B.ep,u,B.ua,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bm:B.bv,u,u,u,u,u,u,u,u,u,u,u,B.cp,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.z,!0,u,!0,u,!1,u,B.af,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a8,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a6,u,p,u,u,u,u),B.h,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aaI.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.dR:B.c,s=A.m(12),r=A.H((u?B.dT:B.cg).j(0.85),B.r,1),q=A.V(B.qg,u?B.bm:B.bv,v,v,v,v),p=A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,14,v,v,B.a0,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.dR:B.c
return A.p(v,new A.Cl(A.a29(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,v,v,v,B.cp,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.h,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.lS,v,v,v)}}
C.beg.prototype={
B(d){var w=new C.dfy(this)
return A.B(A.a([w.$3(D.Wi,"Male",B.La),B.aa,w.$3(D.aeu,"Female",B.KW),B.aa,w.$3(D.wC,"Other",B.mC)],x.p),B.m,null,B.e,B.j,0,null,null)}}
C.ayH.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.j7:B.iA,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aO:B.aG,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.D(A.u(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.F,v,B.e,B.j,0,B.p),1),new C.aEM(u,B.Ev,w.f,v),B.bo,new C.aEM(u,B.hH,w.r,v)],o),B.m,v,B.e,B.j,0,v,v),B.h,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.ei,v,v,v)}}
C.aEM.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.dR:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bR
else t=(s.c.a?B.bm:B.bv).j(0.4)
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,new A.a3(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,w,0,r,r,r,r,r,B.ac)}}
C.aaK.prototype={
bJq(d){switch(d.a){case 0:return B.bR
case 1:return B.bz
case 2:return B.cS}},
bJr(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aSu(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
z9(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.dR:B.c
u=A.m(12)
t=A.H((w?B.dT:B.cg).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.V(f,B.bR,p,p,p,18),B.av],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bm:B.bv,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.D(A.u(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aO:B.aG,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.F,p,B.e,B.j,0,B.p),1))
return A.p(p,A.B(r,B.F,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cH,B.zy,p,p,1/0)},
ab8(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.j7:B.iA,s=A.m(16),r=A.H(v?B.dT:B.cg,B.r,1)
return A.u(A.a([new A.C(D.adE,u,w),A.p(w,A.u(e,B.m,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bT,w,w,1/0)],x.p),B.F,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.h4o(r,q),o=q.c,n=t.bJq(o),m=I.by8(q.f),l=t.e.a,k=l?B.dR:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aO:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
r=r.y===D.k_?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bm:B.bv,s,s,s,s,s,s,s,s,12,s,s,B.a0,s,s,!0,s,s,s,s,s,s,s,s),B.L,s,s)
w=A.H(n,B.r,3)
v=A.a([new A.aa(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.p(s,A.hg(u,m,m==null?A.V(B.o2,n,s,s,s,48):s,s,52),B.h,s,s,new A.o(s,s,w,s,v,s,B.a5),s,s,s,s,B.ef,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.H(n.j(0.45),B.r,1)
v=A.as(A.p(s,A.d(t.bJr(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mx,s,s,s),s,s,s)
u=x.p
i=A.a([t.z9("Full name",i,B.lV)],u)
if(p>0)i.push(t.z9("Child order","#"+p,B.L2))
r=A.a([h,B.au,r,B.aN,l,B.T,v,B.bs,t.ab8("Identity",i),B.ab,t.ab8("Life details",A.a([t.z9("Birth date",q.w,D.afd),t.z9("Birth place",q.x,B.WP),t.z9("Date of death",q.y,D.ahl),t.z9("Occupation",q.z,B.XY)],u)),B.ab,t.ab8("Family links",A.a([t.z9("1. Parent",t.aSu(q.d),B.E1),t.z9("2. Spouse",t.aSu(q.e),B.KV)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ab,t.ab8("Notes",A.a([t.z9("Notes",q,B.kw)],u))],u))
r.push(B.bs)
r.push(A.bH(B.Hj,new C.dfI(d),A.bk(B.aS,s,s,s,s,s,B.ca,s,new A.b5(A.m(14),B.W),s,s,s)))
return A.ev(s,k,new A.cZ(B.ld,A.ch(A.u(r,B.ad,s,B.e,B.R,0,B.p),B.q,s,B.z,s,B.zG,s,s,B.ah),s),s,s,s,B.DD,B.cX,s,new A.b5(j,B.W),s)}}
C.Ic.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bm:B.bv
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.wv,A.hI(A.aD(!1,B.X,!0,A.m(8),A.aH(!1,A.m(8),!0,new A.a3(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.h,w,0,u,u,u,u,u,B.ac),u,v.c,u,u),u)}}
C.amJ.prototype={
eF(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.m(0,"marker","ngmyFamilyTreeSync")
s.m(0,"version",1)
s.m(0,"code",u.a)
s.m(0,"ownerEmail",u.b)
s.m(0,"exportedAt",u.d.a4().aa())
w=u.c
v=A.T(w).k("J<1,a0<n,@>>")
w=A.z(new A.J(w,new C.c31(),v),v.k("ai.E"))
s.m(0,"trees",w)
w=u.e
if(w.a!==0)s.m(0,"familyBooks",w.iE(w,new C.c32(),t,x.U))
return s}}
C.amK.prototype={
S(){return new C.aAg(A.a([],x.bF))},
gd6(){return this.c}}
C.aAg.prototype={
Z(){this.a0()
this.I3()},
I3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$I3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.c35(t.a.c),$async$I3)
case 3:r=e
w=4
return A.b(C.zy(t.a.c),$async$I3)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rj(q,new C.dKM(t))
else s=!1
if(t.c==null){w=1
break}t.n(new C.dKN(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$I3,v)},
xl(d){var w=null,v=this.c
if(v==null)return
v.F(x.q).f.P(A.b_(w,w,w,w,w,B.q,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.S,w,w,w,w,w,w,w,w,w,w))},
IM(d,e){return this.cul(d,e)},
cul(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$IM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.n(new C.dKR(q,e))
t=3
w=6
return A.b(d.$0(),$async$IM)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.n(new C.dKS(q))
$.eI.lU()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IM,v)},
Vo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oA(r,s.c,s.e),$async$Vo)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dKJ(t),"Preparing download\u2026"),$async$Vo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vo,v)},
Vs(d){return this.bHw(d)},
bHw(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Vs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oA(r,s.c,s.e),$async$Vs)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dKK(t,d),"Preparing file\u2026"),$async$Vs)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Vs,v)},
acX(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$acX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.wh.c2().Ks(B.NT,B.rI,!0),$async$acX)
case 7:r=e
o=r
q=o==null?null:J.fg(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aE.gah(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jd(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.a4(m)
$.ak.$1("[family tree sync pick] file_picker: "+A.t(p))
w=6
break
case 3:w=2
break
case 6:u=A.F8()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$acX,v)},
W2(d){return this.bRC(d)},
bRC(d){var w=0,v=A.j(x.H),u=this
var $async$W2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.IM(new C.dKL(u,d),"Restoring family trees\u2026"),$async$W2)
case 2:return A.h(null,v)}})
return A.i($async$W2,v)},
W1(){var w=0,v=A.j(x.H),u,t=this,s
var $async$W1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.acX(),$async$W1)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.W2(s),$async$W1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W1,v)},
a_D(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.oA(r,s.c,s.e),$async$a_D)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.IM(new C.dKQ(t),"Creating QR code\u2026"),$async$a_D)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_D,v)},
a_f(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_f=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.BE()){t.xl("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).cs(A.eH(new C.dKO(),!0,null,x.N)),$async$a_f)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.W2(r),$async$a_f)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a_f,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===B.H,n=o?B.z1:B.iR,m=o?D.ab1:B.aO,l=o?B.aI:B.cg,k=o?B.aO:B.aG,j=new C.d00(n,m,l,k,o?B.bP:B.bv)
l=A.aF(p,p,p,p,A.V(B.et,k,p,p,p,20),p,p,p,new C.dKU(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eA(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.D(C.d_z(!0,B.j0,B.b4,B.b4,q.r?p:q.gclC(),j,s,"Show restore QR"),1),B.av],u))}s=q.e
r=q.r?p:q.gchW()
t.push(A.D(C.d_z(!s,B.iH,B.b0,B.bE,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.D(C.d_z(!1,B.hh,B.aS,B.bR,q.r?p:q.gbHp(),j,"Photos & books included","Download all trees"),1),B.av],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.D(C.d_z(!1,M.x8,B.aZ,B.aM,q.r?p:q.gbRz(),j,s,"Upload backup file"),1))
l=A.a([new C.baC(v,l,p),B.kb,new C.aa0(j,"QR restore",p),B.T,t,B.d1,new C.aa0(j,"Backup files",p),B.T,A.B(r,B.m,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.a9(q.d)>1&&q.a.f==null){v=A.a([B.kb,new C.aa0(j,"One tree",p),B.T],u)
B.d.v(v,J.b4(q.d,new C.dKV(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cK(l,p,B.Vq,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.H(B.aS.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.G,B.w.j(o?0.3:0.1),B.dl,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.an(24,A.br(!0,A.p(p,A.B(A.a([K.aHJ,B.ba,A.D(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.zF,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.cg(w,n,new A.am(B.V,p,B.a9,B.q,l,p),p,!1,!1,p,p)}}
C.d00.prototype={}
C.baC.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.aa(0,B.G,B.aS.j(0.32),B.kG,28)],x.V)
t=A.an(p,A.V(B.rZ,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.V,p,B.a9,B.q,A.a([t,new A.C(B.a8,A.B(A.a([A.p(p,D.bB1,B.h,p,p,new A.o(s,p,A.H(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.nD,A.D(A.u(A.a([D.eNz,B.P,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.F,p,B.e,B.j,0,B.p),1)],q),B.F,p,B.e,B.j,0,p,p),p)],q),p),B.h,p,p,new A.o(p,p,p,v,u,D.bHz,B.n),p,p,p,p,p,p,p,p)}}
C.aa0.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.aa,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)}}
C.baA.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.b4.j(0.4):m.c
k=A.H(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.G,B.b4.j(0.1),B.cG,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.H(t.j(0.35),B.r,1)
return A.aD(!1,B.X,!0,q,A.aH(!1,o,!0,A.eq(A.d5(new A.C(E.V3,A.u(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.h,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.qd,q,q,q),B.ab,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.by,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cp,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.F,q,B.e,B.j,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.h,B.K,0,q,q,q,q,q,B.ac)}}
C.baF.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.H(s.c,B.r,1),q=B.aS.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aD(!1,B.X,!0,v,A.aH(!1,u,!0,A.eq(new A.C(B.eF,A.B(A.a([A.p(v,D.bAe,B.h,v,v,new A.o(q,v,A.H(B.aS.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.qd,v,v,v),B.ba,A.D(A.u(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.F,v,B.e,B.j,0,B.p),1),A.V(B.hh,o,v,v,v,20)],n),B.m,v,B.e,B.j,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.h,B.K,0,v,v,v,v,v,B.ac)}}
C.Y9.prototype={
S(){return new C.aAf()},
gd6(){return this.c}}
C.aAf.prototype={
Z(){this.a0()
this.a6t()},
a6t(){var w=0,v=A.j(x.H),u=this,t
var $async$a6t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aZ5(u.a.c,B.Be),$async$a6t)
case 2:t=e
if(u.c!=null)u.n(new C.dKE(u,t))
return A.h(null,v)}})
return A.i($async$a6t,v)},
aek(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aek=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.n(new C.dKF(q))
t=4
p=A.fRQ(q.a.d,B.Be)
if(p==null){n=A.b9("Could not read this QR code.")
throw A.P(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.aoW(n.e,m,l,B.Be,p,n.f),$async$aek)
case 7:if(q.c==null){r=[1]
w=5
break}q.n(new C.dKG(q))
q.c.F(x.q).f.P(D.er9)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.a4(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(B.a.e1(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.n(new C.dKH(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aek,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.L(d).ax.a===B.H,o=p?B.iT:B.oO,n=p?B.hm:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eA(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.f10,q,q,q,1,q,!0)
w=A.m(24)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.pi(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aS,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.D(A.p(q,A.u(A.a([B.P,u,B.bs,t,B.P,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.L,q,q)],s),B.m,q,B.b5,B.j,0,B.p),B.h,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a8,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.aj:B.bB,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gchE()
if(u)u=B.GX
else u=A.V(r.e===!0?B.hg:B.afc,q,q,q,q,q)
w=A.a([w,B.ab,v,B.ab,new A.a3(1/0,q,A.ey(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cc,q,q,q),t,A.d9(q,q,q,q,q,q,q,q,q,B.aS,q,B.fL,q,q,q,new A.ax(B.aS.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.iX,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aA:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.L,q,q),q))
w.push(B.T)
w.push(new A.a3(1/0,q,A.bH(B.yj,new C.dKI(d),A.bk(B.aS,q,q,q,q,B.fL,q,q,q,q,q,q)),q))
return A.cg(m,o,new A.C(B.a8,A.u(w,B.m,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.Ya.prototype={
S(){return new C.bfH(A.ya(B.wb,B.n2,B.t2))}}
C.bfH.prototype={
p(){this.d.p()
this.a2()},
B(d){var w=null
return A.cg(A.eA(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.eUM,w,w,w,1,w,!0),B.w,A.y9(this.d,B.bN,new C.dKW(this,d)),w,!1,!1,w,w)}}
C.aV1.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Nq,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lh.prototype={}
C.a4_.prototype={
S(){return new C.bfq(null,null)}}
C.bfq.prototype={
Z(){var w=this,v=null
w.a0()
w.d=A.bi(v,B.rx,v,1,v,w)
w.e=A.bi(v,B.oS,v,1,v,w)
w.a.toString
w.d.cF(0)
w.e.cF(0)},
bo(d){var w,v,u=this
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
this.boT()},
B(d){var w,v,u=this,t=B.d.dI(D.a_x,new C.dxd(u),new C.dxe())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cnB(A.c4(new A.h2(A.a([w,v],x.dS)),new C.dxf(u,t),null),!0)}}
C.bfp.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.aWn(d,e)
break
case"house":p.lv(d,e,D.cK3)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gef()
$.a1()
t=A.U()
t.r=B.c.j(0.18+v*0.12).gt(0)
d.aw(new A.v(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.lA(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.zS(d,e,12)
p.wX(d,e,B.kO,5,14)
break
case"grocery":p.c72(d,e)
break
case"calculator":p.c6K(d,e)
break
case"lumber":p.c7a(d,e)
break
case"kitchen":p.c75(d,e)
break
case"landscape":p.lv(d,e,D.cKu)
s=new A.b0($.a1().r,B.aw,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.N(new A.bj(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.N(new A.dn(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.N(new A.dn(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.N(new A.av(t,w))
s.N(new A.av(0,w))
s.N(new A.bX())
w=A.U()
w.r=B.fq.j(0.85).gt(0)
d.b4(s,w)
p.zS(d,e,8)
p.wX(d,e,B.iC,4,18)
break
case"plumbing":p.c7j(d,e)
break
case"electrical":p.lv(d,e,D.cTH)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.a1()
u=A.U()
u.r=B.c.j(q*0.12).gt(0)
d.bp(new A.af(0,0,0+e.a,0+e.b),u)
p.lA(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.lA(d,e,B.nb.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.zS(d,e,10)
break
case"store":p.c7s(d,e)
break
case"paint_remodel":p.c7e(d,e)
break
case"roofing":p.c7l(d,e)
break
case"warehouse":p.c7z(d,e)
break
case"vehicles":p.c7x(d,e)
break
case"farm":p.c6X(d,e)
break
case"restaurant":p.c7k(d,e)
break
case"tools":p.c7v(d,e)
break
case"wallet":p.c7y(d,e)
break
case"concrete":p.c6Q(d,e)
break
case"blueprint":p.c6I(d,e)
break
default:p.aWn(d,e)}},
lv(d,e,f){var w,v=new A.af(0,0,0+e.a,0+e.b)
$.a1()
w=A.U()
w.sav(new A.a8(B.ax,B.aC,B.x,f,null,null).aC(0,v))
d.bp(v,w)},
lA(d,e,f,g,h){var w,v,u,t,s,r,q=new A.v(e.a/2,e.b/2),p=e.gef()/2-h
$.a1()
w=A.U()
w.b=B.ak
w.c=2.4
w.r=f.gt(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.c2(q,p)
r=w.M()
v.drawArc.apply(v,[A.cz(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
wX(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gef()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.a1()
q=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gt(0)
p=q.M()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
zS(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.J(s*0.17,0.9)
p=B.k.J(s*0.23,0.85)
$.a1()
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.c.j(0.2+r*0.6).gt(0)
n=o.M()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
aWn(d,e){var w,v=this
v.lv(d,e,D.cSB)
w=v.c
v.lA(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.lA(d,e,B.bK.j(0.45),-w*3.141592653589793*1.4,22)
v.bFK(d,e,B.hD,w)
v.wX(d,e,B.c.j(0.7),6,8)},
bFK(d,e,f,g){var w,v,u,t,s,r,q,p
$.a1()
w=A.U()
w.r=f.j(0.35).gt(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.M()
s.drawRect(A.cz(new A.af(16,q,t,q+3)),p)
p.delete()}},
c72(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lv(d,e,D.c1P)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.J(s,3)
p=Math.sin(r)
o=B.o.ak(s,3)
n=Math.cos(r*0.8)
m=B.o.J(s,2)
$.a1()
l=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.r=D.cIu[B.o.J(s,4)].j(0.85).gt(0)
k=l.M()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.lA(d,e,B.c.j(0.35),w,16)
j.wX(d,e,B.iC,5,12)},
c6K(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.lv(d,e,D.c1V)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gef()
$.a1()
q=A.U()
q.r=B.c.j(0.1+u*0.12).gt(0)
d.aw(new A.v(t/2,s/2),r*(0.18+u*0.08),q)
p=A.j1(g,g,g,g,g,B.a6,B.cn,g,B.eM,B.cm)
for(o=0;o<6;++o){n=v+o*0.9
r=D.cLX[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.J(o,2)
p.saR(0,new A.ez(r,g,g,B.cT,g,g,g,g,g,g,new A.G(!0,q,g,g,g,g,14+m*4,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fE()
p.a6(d,new A.v(t*(0.08+B.o.J(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ak(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.c1X[o]
l=B.kN.j(0.28+0.3*Math.sin(n))
k=B.o.J(o,2)
p.saR(0,new A.ez(m,g,g,B.cT,g,g,g,g,g,g,new A.G(!0,l,g,g,g,g,12+k*3,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.fE()
p.a6(d,new A.v(t*(0.55+B.o.J(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ak(o,3)*0.38)+Math.sin(n)*6))}h.lA(d,e,B.c.j(0.35),w*1.5,14)
h.lA(d,e,B.ev.j(0.55),-v*3.141592653589793*2,8)
h.lA(d,e,B.z2.j(0.4),r*2.8,22)
h.wX(d,e,B.oG,8,10)
h.zS(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.J(w+o*0.22,0.9)
$.a1()
r=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gt(0)
r.c=1.2
i=r.M()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
c7a(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,Y.aqv)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.c_(new A.af(20,q,u,q+10),B.k8)
$.a1()
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=A.aq(B.ho,B.nO,(r+1)/2).gt(0)
n=o.M()
t.drawRRect(A.fL(p),n)
n.delete()}m.lA(d,e,B.ho.j(0.35),w,15)
m.zS(d,e,8)},
c75(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.lv(d,e,D.cIX)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.J(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.J(r*0.13,0.7)
$.a1()
l=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
l.r=B.c.j(0.25+p*0.55).gt(0)
k=l.M()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.lA(d,e,B.bK.j(0.4),-w*3.141592653589793*2.2,11)
j.wX(d,e,B.pU,4,14)},
c7j(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.lv(d,e,D.cz1)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.J(s,0.12)
$.a1()
n=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
n.b=B.ak
n.c=2
n.r=B.c.j(0.45-q*0.12).gt(0)
m=n.M()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.wX(d,e,B.nT,6,12)
l.lA(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
c7s(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.lv(d,e,D.cff)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.c_(new A.af(q,14,q+u,22),B.jL)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.fr,B.bK,(r+1)/2).gt(0)
o=p.M()
t.drawRRect(A.fL(q),o)
o.delete()}n.lA(d,e,B.c.j(0.3),w,16)
n.zS(d,e,8)
n.wX(d,e,B.tT,5,13)},
c7e(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cEk)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.J(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.c_(new A.af(q,p,q+8,p+(18+r*22)),B.hZ)
$.a1()
q=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=[B.i6,B.dE,B.bK,B.eX][s].j(0.85).gt(0)
o=q.M()
t.drawRRect(A.fL(p),o)
o.delete()}this.lA(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
c7l(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cC5)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.J(v+s*0.12,0.75))
q=B.o.J(s,4)*0.22
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.25).gt(0)
p.c=1.5
o=p.M()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.wX(d,e,B.cr,7,11)},
c7z(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.chR)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.c_(new A.af(p,o,p+(t-r*8),o+16),B.k8)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.cr,B.aO,(Math.sin(q)+1)/2).gt(0)
n=p.M()
s.drawRRect(A.fL(o),n)
n.delete()}this.lA(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
c7x(d,e){var w,v,u,t,s,r,q,p,o
this.lv(d,e,D.cXa)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.J(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.J(s,2)*0.08)
q=A.c_(new A.af(r,q,r+28,q+8),B.k8)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=B.c.j(0.35+s*0.08).gt(0)
o=p.M()
t.drawRRect(A.fL(q),o)
o.delete()}this.zS(d,e,6)},
c6X(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.cHH)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.a1()
s=A.U()
s.r=B.nb.j(0.75).gt(0)
d.aw(new A.v(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.hp.j(0.85).gt(0)
o.c=3
n=o.M()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.lA(d,e,B.nb.j(0.35),w,14)},
c7k(d,e){var w,v,u,t,s,r,q,p,o=this
o.lv(d,e,D.cJT)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.dy(new A.v(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.a1()
q=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
q.r=B.c.j(0.22).gt(0)
p=q.M()
t.drawOval(A.cz(r),p)
p.delete()}o.wX(d,e,B.pU,5,16)
o.zS(d,e,7)},
c7v(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,D.cV2)
w=m.c
v=w*3.141592653589793
m.lA(d,e,B.nO.j(0.55),v*3,10)
m.lA(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.a1()
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.nO.j(0.8).gt(0)
n=o.M()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
c7y(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.lv(d,e,D.cXD)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.c_(new A.af(p,o,p+36,o+22),B.jL)
$.a1()
p=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
p.r=A.aq(B.iC,B.nb,q).gt(0)
n=p.M()
s.drawRRect(A.fL(o),n)
n.delete()}m.zS(d,e,9)
m.lA(d,e,B.c.j(0.4),w*2.2,12)},
c6Q(d,e){var w,v,u,t,s,r,q,p,o,n
this.lv(d,e,D.cOl)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.c2(new A.v(v,u),34)
$.a1()
s=A.U()
s.b=B.ak
s.c=5
s.r=B.c.j(0.45).gt(0)
d.fP(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ay(B.a_,B.Y,B.a3,B.a4,B.a2)
o.r=B.cg.j(0.85).gt(0)
n=o.M()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
c6I(d,e){var w,v,u,t,s,r,q,p
this.lv(d,e,D.cKK)
$.a1()
w=A.U()
w.r=B.c.j(0.12).gt(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.M()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.M()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.J(t*0.85,1)
$.a1()
u=A.U()
u.r=B.dE.j(0.45).gt(0)
d.bp(new A.af(0,p,0+v,p+6),u)
this.lA(d,e,B.kO.j(0.45),-t*3.141592653589793*2,11)},
ao(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.apB.prototype={
Y_(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aMt(),$async$Y_)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a6c(s),$async$Y_)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$Y_,v)},
acY(d){return this.c9O(d)},
c9O(d){var w=0,v=A.j(x.H),u=this,t
var $async$acY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.hOE(d),$async$acY)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$acY,v)},
B(d){var w,v,u,t=null,s=A.L(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.H?B.j7:B.iA
w=x.p
v=A.a([C.aMR(!0,B.pK,1/0,B.p0,t,r,1/0)],w)
if(!q){u=A.a([B.K,B.w.j(0.35)],x.O)
v.push(A.bQ(new A.bF(B.b3,t,t,new A.C(B.u6,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.O,t,t,!0,t,t,t,t,t,B.arl,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a8(B.b3,B.bb,B.x,u,t,t),B.n),B.b7))}v.push(A.an(8,A.B(A.a([A.D(A.dk(D.bud,D.eKc,new C.caA(this,d),A.bk(B.aS,t,t,t,B.c,t,B.jA,t,t,t,t,B.c6)),1),B.aa,A.D(A.ey(D.bCb,D.eXF,this.gc12(),A.d9(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jA,t,t,D.aPv,t,t,t,B.c6)),1)],w),B.m,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fM(1.7777777777777777,A.aD(!1,B.X,!0,B.pK,new A.am(B.V,t,B.aX,B.q,v,t),B.ap,s,0,t,t,t,t,t,B.ac),t)}}
C.aI3.prototype={
aO(){this.aU()
this.aS()
this.dD()},
p(){var w=this,v=w.aY$
if(v!=null)v.a1(0,w.gdB())
w.aY$=null
w.a2()}}
C.aPI.prototype={}
C.aPH.prototype={}
C.aNM.prototype={}
C.WO.prototype={
S(){return new C.avB()}}
C.avB.prototype={
Z(){var w,v,u=this
u.a0()
u.a.toString
w=new A.bb("",B.b_,B.aL)
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(w,v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.at()
w.O$=0
this.a2()},
ID(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.F(x.q).f.P(D.erE)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).K(new C.aPI(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.L(d).ax.a===B.H,l=m?B.dR:B.c,k=A.m(20),j=A.p(n,D.bBT,B.h,n,n,new A.o(B.aS.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aO:B.aG,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.D(A.u(A.a([i,B.by,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.F,n,B.e,B.j,0,B.p),1)
j=A.B(A.a([j,B.ba,i,A.aF(n,n,n,n,A.V(B.cu,m?B.bm:B.bv,n,n,n,n),n,n,n,new C.cTc(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bm:B.bv,n,n,n,n,n,n,n,n,11,n,n,B.cp,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.fS5(new C.cTd(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aO:B.aG,n,n,n,n,n,n,n,n,n,n,n,B.a0,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.j7:B.iA
r=A.m(12)
q=A.m(12)
p=m?B.dT:B.cg
t=A.aK(n,B.U,!0,n,!0,B.q,n,A.aL(),u,n,n,n,n,n,2,A.bl(n,new A.b1(4,r,B.da),n,n,n,n,n,n,!0,new A.b1(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.z,!0,n,!0,n,!1,n,B.af,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.cTe(o),n,!1,n,n,!1,n,!0,n,B.a8,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a6,n,A_.H0,n,n,n,n)
u=m?B.aO:B.aG
m=m?B.dT:B.cg
return A.ev(n,l,new A.cZ(B.ld,A.ch(A.u(A.a([j,B.aN,i,B.au,w,B.P,v,B.aN,t,B.bs,A.B(A.a([A.D(A.dU(B.dd,new C.cTf(d),A.d9(n,n,n,n,n,n,n,n,n,u,n,n,B.ca,n,new A.b5(A.m(12),B.W),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.av,A.D(A.bH(D.eXU,o.ga_V(),A.bk(B.aS,n,n,n,B.c,n,B.ca,n,new A.b5(A.m(12),B.W),n,n,n)),1)],h),B.m,n,B.e,B.j,0,n,n)],h),B.F,n,B.e,B.R,0,B.p),B.q,n,B.z,n,B.zI,n,n,B.ah),n),n,n,n,V.zJ,B.cX,n,new A.b5(k,B.W),n)}}
C.WN.prototype={
S(){return new C.avA()}}
C.avA.prototype={
Z(){this.a0()
var w=$.at()
this.d!==$&&A.aO()
this.d=new A.ao(B.aq,w)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.at()
w.O$=0
this.a2()},
ID(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.F(x.q).f.P(D.epl)
return}v=this.c
v.toString
A.a7(v,!1).K(new C.aPH(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.L(d).ax.a===B.H,o=p?B.dR:B.c,n=A.m(20),m=A.p(q,D.byz,B.h,q,q,new A.o(B.bR.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.D(A.u(A.a([l,B.by,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bm:B.bv,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.F,q,B.e,B.j,0,B.p),1)
m=A.B(A.a([m,B.ba,l,A.aF(q,q,q,q,A.V(B.cu,p?B.bm:B.bv,q,q,q,q),q,q,q,new C.cT8(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.j,0,q,q)
l=B.aS.j(p?0.12:0.08)
w=A.m(12)
v=A.H(B.aS.j(0.25),B.r,1)
u=A.V(B.aeZ,B.aS.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.av,A.D(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,12,q,q,B.a0,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.j,0,q,q),B.h,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bA,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aO:B.aG,q,q,q,q,q,q,q,q,q,q,q,B.a0,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.j7:B.iA
t=A.m(12)
s=A.m(12)
r=p?B.dT:B.cg
v=A.aK(q,B.U,!0,q,!0,B.q,q,A.aL(),w,q,q,q,q,q,2,A.bl(q,new A.b1(4,t,B.da),q,q,q,q,q,q,!0,new A.b1(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.z,!0,q,!0,q,!1,q,B.af,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.cT9(this),q,!1,q,q,!1,q,!0,q,B.a8,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a6,q,B.kc,q,q,q,q)
w=p?B.aO:B.aG
p=p?B.dT:B.cg
return A.ev(q,o,new A.cZ(B.ld,A.ch(A.u(A.a([m,B.aN,l,B.ay,v,B.bs,A.B(A.a([A.D(A.dU(B.dd,new C.cTa(d),A.d9(q,q,q,q,q,q,q,q,q,w,q,q,B.ca,q,new A.b5(A.m(12),B.W),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.av,A.D(A.bH(D.f37,this.ga_V(),A.bk(B.bR,q,q,q,B.c,q,B.ca,q,new A.b5(A.m(12),B.W),q,q,q)),1)],k),B.m,q,B.e,B.j,0,q,q)],k),B.F,q,B.e,B.R,0,B.p),B.q,q,B.z,q,B.zI,q,q,B.ah),q),q,q,q,V.zJ,B.cX,q,new A.b5(n,B.W),q)}}
C.Wk.prototype={
S(){return new C.aum()}}
C.aum.prototype={
Z(){var w,v=this
v.a0()
w=$.at()
v.d!==$&&A.aO()
v.d=new A.ao(B.aq,w)
v.e!==$&&A.aO()
v.e=new A.ao(new A.bb("1",B.b_,B.aL),w)
v.f!==$&&A.aO()
v.f=new A.ao(B.aq,w)
v.r!==$&&A.aO()
v.r=new A.ao(B.aq,w)},
p(){var w,v=this,u=v.d
u===$&&A.c()
w=u.R$=$.at()
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
gHZ(){var w,v=this.e
v===$&&A.c()
w=A.d6(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gag6(){var w=this.f
w===$&&A.c()
w=A.d6(B.a.i(w.a.a))
return w==null?0:w},
gaZ7(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aJY(d){var w,v=B.k.D(this.gHZ()+d,0.25,999999),u=B.k.lp(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.L(v))
else{u=B.k.ab(v,2)
w=A.ad("\\.?0+$",!0,!1,!1,!1)
u=A.aI(u,w,"")}t.saR(0,u)
this.n(new C.cqO())},
atV(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aS,w,w,w,20):w,u=d.a,t=u?B.j7:B.iA,s=A.m(14),r=A.m(14)
u=u?B.dT:B.cg
return A.bl(w,new A.b1(4,s,B.da),w,B.bA,w,w,w,w,!0,new A.b1(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b1(4,A.m(14),B.a6n),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
c13(d,e,f){return this.atV(d,e,f,null)},
ID(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gag6()<=0){s.c.F(x.q).f.P(D.etv)
return}r=s.c
r.toString
v=s.gHZ()
u=s.gag6()
t=s.gaZ7()
A.a7(r,!1).K(new C.aNM(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.L(d).ax.a===B.H,m=new C.t4(n),l=n?B.dR:B.c,k=A.m(24),j=x.O,i=A.a([B.aS.j(0.22),B.bR.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bs9,B.h,o,o,new A.o(o,o,A.H(B.aS.j(0.35),B.r,1),h,o,new A.a8(B.a1,B.a7,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.D(A.u(A.a([h,B.by,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.cp,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1)
i=A.B(A.a([i,B.ba,h,A.aF(o,o,o,o,A.V(B.cu,n?B.bm:B.bv,o,o,o,o),o,o,o,new C.cqU(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.a0,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aK(o,B.U,!0,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.atV(m,"Item name (optional)","Lumber, paint, labor\u2026",B.L8),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,A_.H0,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.j7:B.iA
t=A.m(14)
s=A.H(n?B.dT:B.cg,B.r,1)
r=A.aF(o,o,o,o,A.V(B.Ev,n?B.aO:B.aG,o,o,o,20),o,o,o,new C.cqV(p),o,o,o,o,o,B.c6)
q=p.e
q===$&&A.c()
q=A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),q,o,o,o,o,o,2,D.bDF,B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.cqW(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.L,o,B.am,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a3(52,o,q,o),A.aF(o,o,o,o,A.V(B.hH,n?B.aO:B.aG,o,o,o,20),o,o,o,new C.cqX(p),o,o,o,o,o,B.c6)],w),B.m,o,B.e,B.R,0,o,o),B.h,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.av,A.D(A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),t,o,o,o,o,o,2,p.atV(m,"Amount","0.00",B.hI),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,B.dX,o,o,o,1,o,o,!1,"\u2022",o,new C.cqY(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a6,o,B.am,o,o,o,o),1)],w),B.F,o,B.e,B.j,0,o,o)
t=x.gv
u=A.z(new A.J(D.cEM,new C.cqZ(p,m),t),t.k("ai.E"))
i=A.a([i,B.bs,v,B.ay,h,B.P,s,B.ab,A.cb(B.bH,u,B.bw,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.T,A.aK(o,B.U,!1,o,!0,B.q,o,A.aL(),h,o,o,o,o,o,2,p.c13(m,"Custom unit","rolls, sheets, trips\u2026"),B.z,!0,o,!0,o,!1,o,B.af,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cr_(p),o,o,o,!1,o,o,!1,o,!0,o,B.a8,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a6,o,B.kc,o,o,o,o)],w))}i.push(B.aN)
h=B.aS.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.H(B.aS.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gHZ()===B.k.lp(p.gHZ())?B.k.L(p.gHZ()):p.gHZ()
s=p.gaZ7()
r=A.zA(p.gag6())
i.push(A.p(o,A.B(A.a([A.D(A.u(A.a([u,B.au,A.d(A.t(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bm:B.bv,o,o,o,o,o,o,o,o,12,o,o,B.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.F,o,B.e,B.j,0,B.p),1),C.byU(p.gHZ()*p.gag6(),B.aW,!1,B.u)],w),B.m,o,B.e,B.j,0,o,o),B.h,o,o,new A.o(o,o,v,h,o,new A.a8(B.a1,B.a7,B.x,j,o,o),B.n),o,o,o,o,B.iF,o,o,o))
i.push(B.bs)
j=A.m(14)
h=n?B.dT:B.cg
h=A.d9(o,o,o,o,o,o,o,o,o,o,o,o,B.ca,o,new A.b5(j,B.W),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.D(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aO:B.aG,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cr0(d),h),1),B.av,A.D(A.dk(D.aio,D.f_q,p.ga_V(),A.bk(B.aS,o,o,0,B.c,o,B.ca,o,new A.b5(A.m(14),B.W),o,o,o)),2)],w),B.m,o,B.e,B.j,0,o,o))
return A.ev(o,l,new A.cZ(U.a6K,A.ch(A.u(i,B.ad,o,B.e,B.R,0,B.p),B.q,o,B.z,o,A7.qc,o,o,B.ah),o),o,o,o,B.JS,B.cX,o,new A.b5(k,B.W),o)}}
C.ZT.prototype={
S(){return new C.brz()}}
C.brz.prototype={
Z(){var w,v,u=this
u.a0()
w=u.a.e
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(new A.bb(w,B.b_,B.aL),v)},
p(){var w=this.d
w===$&&A.c()
w.R$=$.at()
w.O$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.L(d).ax.a===B.H,q=r?B.dR:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aO:B.aG,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aO:B.aG,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.j7:B.iA
v=A.aK(s,B.U,!0,s,!0,B.q,s,A.aL(),w,s,s,s,s,s,2,A.bl(s,new A.b1(4,A.m(12),B.da),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.z,!0,s,!0,s,!1,s,B.af,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.eUV(t,d),s,!1,s,s,!1,s,!0,s,B.a8,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a6,s,B.am,s,s,s,s)
u=A.D(A.dU(B.dd,new C.eUW(d),s),1)
r=A.bk(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.ev(s,q,new A.C(B.zI,A.u(A.a([o,B.ay,v,B.aN,A.B(A.a([u,B.av,A.D(A.bH(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),new C.eUX(t,d),r),1)],w),B.m,s,B.e,B.j,0,s,s)],w),B.m,s,B.e,B.R,0,B.p),s),s,s,s,s,B.cX,s,new A.b5(p,B.W),s)}}
C.a94.prototype={
a3(){return"WorksheetFrameStyle."+this.b}}
C.E7.prototype={
S(){return new C.brx(null,null)}}
C.brx.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,D.bcR,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.bra()},
gbsw(){switch(this.a.r.a){case 1:return A.a([B.aS,B.bR,B.aW],x.O)
case 2:return A.a([B.bq,B.aS,B.aW],x.O)
case 3:return A.a([B.b4,B.c9,B.ju],x.O)
case 4:return A.a([B.hS,B.bR,B.eY],x.O)
case 0:return A.a([B.aS,B.bR,B.aW],x.O)}},
B(d){var w=A.L(d),v=this.d
v===$&&A.c()
return new A.en(A.c4(v,new C.eUT(this,new C.t4(w.ax.a===B.H)),null),null)}}
C.auf.prototype={
S(){return new C.bry(null,null)}}
C.bry.prototype={
Z(){var w,v=this
v.a0()
w=A.bi(null,B.mu,null,1,null,v)
w.cF(0)
v.d!==$&&A.aO()
v.d=w},
p(){var w=this.d
w===$&&A.c()
w.p()
this.brb()},
B(d){var w=this.d
w===$&&A.c()
return A.c4(w,new C.eUU(this),null)}}
C.brw.prototype={
a6(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.c_(new A.af(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.b3(w,w))
u=new A.b0($.a1().r,B.aw,null,null,A.a([],x.v))
u.N(new A.j3(v))
w=A.U()
w.b=B.ak
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gt(0)
d.bj(v,w)
w=A.U()
w.b=B.ak
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gt(0)
d.b4(u,w)
w=A.A_(u)
t=A.a([],x.f5)
w=new A.xS(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jH('PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".'));--r
q=new A.FU(w,r)
w.ld()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aNg(d,q,r,o,0,0.2,4.2,0.92)
p.aNg(d,q,r,s,0.52,0.11,3.2,0.58)}},
aNg(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.J(g+h,1)*f,s=A.hch(e.a.a,e,t,t+f*i,!0),r=A.bxj(s.gbM().a.getBounds())
$.a1()
w=A.U()
w.b=B.ak
w.c=j
w.d=B.bZ
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a8(B.a1,B.a7,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Fh,null).aC(0,r))
d.b4(s,w)},
ao(d){return d.b!==this.b||d.d!==this.d}}
C.aK9.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.aKa.prototype={
p(){var w=this,v=w.a5$
if(v!=null)v.a1(0,w.gbt())
w.a5$=null
w.a2()},
aO(){this.aU()
this.aS()
this.bu()}}
C.t4.prototype={}
C.apA.prototype={
S(){return new C.aBH()},
gdS(){return this.c}}
C.aBH.prototype={
Z(){var w=this
w.a0()
w.d=w.a.d
w.adP()},
p(){var w=this.a.c,v=this.d
v===$&&A.c()
C.Jz(w,v)
this.a2()},
adP(){var w=0,v=A.j(x.H),u=this,t,s
var $async$adP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bxq(t.c,t.d.a),$async$adP)
case 2:s=e
if(s!=null&&u.c!=null)u.n(new C.euh(u,s))
return A.h(null,v)}})
return A.i($async$adP,v)},
Ob(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Ob=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.n(new C.eu8(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.Jz(t,s),$async$Ob)
case 2:if(u.c!=null)u.n(new C.eu9(u))
return A.h(null,v)}})
return A.i($async$Ob,v)},
OH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.L(p)
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.euf(t,new C.t4(p.ax.a===B.H)),s,null,!0,!0,x.T),$async$OH)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a6c(q),$async$OH)
case 6:case 5:t.n(new C.eug(t,r))
w=7
return A.b(t.Ob(),$async$OH)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OH,v)},
TH(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$TH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.hOp(r),$async$TH)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.n(new C.eu3(t,new C.qn(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Ob(),$async$TH)
case 4:case 1:return A.h(u,v)}})
return A.i($async$TH,v)},
c6_(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.h4m(t,new C.eu7(u),w,v)},
a8a(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.h,w,w,new A.o(w,w,new A.c1(new A.ax(v,2.5,B.r,-1),B.W,B.W,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.aPh,w,w,B.n),w,22,w,w,w,w,w,22)},
a7g(d){return this.bE4(d)},
bE4(d){var w=0,v=A.j(x.H),u=this
var $async$a7g=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.n(new C.eu6(u,d))
w=2
return A.b(u.Ob(),$async$a7g)
case 2:return A.h(null,v)}})
return A.i($async$a7g,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.L(a2).ax.a===B.H,e=f?B.bV:B.iR,d=A.m(8),a0=A.V(N.Wx,f?B.bm:B.bv,g,g,g,16),a1=x.p
a0=A.aH(!1,d,!0,new A.C(B.DI,A.B(A.a([a0,B.bo,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bm:B.bv,g,g,g,g,g,g,g,g,g,g,g,B.a0,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.R,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eui(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a_(d,"ngmy:thumb:"))d=new A.am(B.V,g,B.aX,B.q,A.a([A.bv(A.m(22),C.aMR(!0,A.m(22),1/0,B.p0,g,d,1/0),B.ap),A.an(10,A.dk(D.bwG,D.f1t,h.gaX5(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h1,g,new A.b5(A.m(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.aa(0,B.G,B.aS.j(f?0.5:0.38),B.eI,22),new A.aa(-4,B.G,B.bR.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.H(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.am(B.V,g,B.aX,B.q,A.a([C.aMR(!0,A.m(16),1/0,B.KB,g,r.c,1/0),A.bQ(g,new A.o(g,g,g,g,g,new A.a8(B.b3,B.bb,B.x,A.a([B.c.j(0.06),B.K,B.w.j(0.22)],x.O),g,g),B.n),B.b7),A.an(g,h.a8a(!0),g,g,8,g,8,g),A.an(g,A.col(h.a8a(!0),!0,!1),g,g,g,8,8,g),A.an(8,A.col(h.a8a(!1),!1,!0),g,g,8,g,g,g),A.an(8,A.col(h.a8a(!1),!0,!0),g,g,g,8,g,g),A.an(10,A.dk(D.bsJ,D.eWI,h.gaX5(),A.bk(B.w.j(0.45),g,g,g,B.c,g,B.h1,g,new A.b5(A.m(12),B.W),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.h,g,g,new A.o(g,g,g,d,v,D.bEq,B.n),g,g,g,g,B.lT,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.aZ6,B.n8,B.fQ],u):A.a([B.aW,B.aS,B.bR],u)
t=x.V
s=A.a([new A.aa(0,B.G,B.aS.j(f?0.45:0.35),B.eI,24)],t)
r=A.m(22)
p=A.an(g,A.V(B.jE,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.H(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.h,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h0,g,g,g)],a1),B.m,g,B.e,B.j,0,g,g),B.ay,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.ar,C.byU(h.d.gw3(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.P,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cp,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.D(A.u(n,B.F,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.H(B.j8.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.G,B.b4.j(0.28),B.cG,14)],t)
j=B.b4.j(0.22)
i=A.m(10)
u=A.p(g,A.bv(r,new A.am(B.V,g,B.a9,B.q,A.a([p,new A.C(D.bhs,A.B(A.a([o,B.av,A.aD(!1,B.X,!0,g,A.aH(!1,n,!0,A.eq(new A.C(Ac.V2,A.u(A.a([A.p(g,D.ahX,B.h,g,g,new A.o(j,g,A.H(B.b4.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.ch,g,g,g),B.fW,D.eMK],a1),B.m,g,B.e,B.R,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gc5Z(),g,g,g,g,g,g,g),B.h,B.K,0,g,g,g,g,g,B.ac)],a1),B.m,g,B.e,B.j,0,g,g),g)],a1),g),B.ap),B.h,g,g,new A.o(g,g,g,v,s,new A.a8(B.ax,B.aC,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fM(1.7777777777777777,d,g),B.aN,w,B.P,u,B.bs,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b6,A.dk(Ae.Yj,D.eKM,h.gbsZ(),A.bk(B.aS,g,g,g,B.c,g,B.iE,g,new A.b5(A.m(12),B.W),g,g,g))],a1),B.m,g,B.e,B.j,0,g,g),B.ab],a1)
w=h.d.d
if(w.length===0){w=f?B.dR:B.c
v=A.m(14)
u=A.H(f?B.dT:B.cg,B.r,1)
t=A.V(B.WS,f?B.bm:B.bv,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aO:B.aG,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.u(A.a([t,B.T,s,B.ar,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bm:B.bv,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.L,g,g)],a1),B.m,g,B.e,B.j,0,B.p),B.h,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.ue,g,g,1/0))}else B.d.v(d,new A.J(w,new C.euj(h,new C.t4(f)),A.T(w).k("J<1,r>")))
if(h.e)d.push(new A.C(B.zu,A.as(A.mi(g,f?B.bm:B.bv,g,g,g,g,g,g,g,g),g,g,g),g))
return A.cg(g,e,A.br(!0,A.u(A.a([new A.C(B.zA,a0,g),A.D(A.ch(A.u(d,B.F,g,B.e,B.j,0,B.p),B.q,g,B.z,g,E.wt,g,g,B.ah),1)],a1),B.F,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bwr(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.dR:B.c,p=A.m(16),o=A.a([new A.aa(0,B.G,B.w.j(r?0.35:0.08),B.cG,12)],x.V),n=A.m(16),m=A.p(u,u,B.h,u,u,D.aRY,u,u,u,u,u,u,u,5),l=B.aS.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.hK:B.fS,B.aW,u,u,u,20),B.h,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bF
else{k=x.p
t=A.a([A.d(t,u,2,B.Z,u,u,u,A.l(u,u,r?B.aO:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcJM()
v=A.zA(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bm:B.bv,u,u,u,u,u,u,u,u,12,u,u,B.a0,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.u(t,B.F,u,B.b5,B.R,0,B.p)}t=A.D(t,1)
k=A.a([B.aS.j(0.14),B.bR.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.byU(d.c*d.d,B.aW,!1,B.u),B.h,u,u,new A.o(u,u,u,w,u,new A.a8(B.a1,B.a7,B.x,k,u,u),B.n),u,u,u,u,B.h1,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.KP(A.B(A.a([m,A.D(new A.C(B.ach,A.B(A.a([l,B.ba,t,B.aa,k,A.aF(u,u,u,u,A.V(B.cu,(r?B.bm:B.bv).j(0.75),u,u,u,20),u,u,u,new C.eu4(this,d),u,u,u,u,u,B.c6)],w),B.m,u,B.e,B.j,0,u,u),u),1)],w),B.ad,u,B.e,B.j,0,u,u),u),B.ap),B.h,u,D.aQR,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d7,u,u,u,u)}}
C.ab4.prototype={
D7(d){return this.bFm(d)},
bFm(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$D7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.oA(d,o,!1),$async$D7)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).K(null)
w=4
return A.b(A.bK(A6.zs,null,x.H),$async$D7)
case 4:s=t.d
w=5
return A.b(C.fot(!0,o,s),$async$D7)
case 5:r=f
q=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.EY(r,"ngmy_project_"+A.aI(s.b,q,"_"),!1),$async$D7)
case 6:p=f
w=7
return A.b(A.oz(o,!1),$async$D7)
case 7:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$D7,v)},
Y0(d){return this.clD(d)},
clD(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Y0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.oA(d,s,!1),$async$Y0)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).K(null)
A.hk(d,new C.apu(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.oz(s,!1),$async$Y0)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y0,v)},
Oc(d){return this.chR(d)},
chR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Oc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).K(null)
w=3
return A.b(A.hk(d,D.aAo,!0,"NgmyWorksheetProjectScan",x.N),$async$Oc)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.byV(s),$async$Oc)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.F(x.q).f.P(D.esE)
w=1
break}q=C.fIl(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dP(p,x.H),$async$Oc)
case 5:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Oc,v)},
Y1(d){return this.ctj(d)},
ctj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Y1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).K(null)
w=3
return A.b(C.bys(),$async$Y1)
case 3:s=f
if(s==null){w=1
break}r=C.fIl(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dP(q,x.H),$async$Y1)
case 4:if(d.e==null){w=1
break}d.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Y1,v)},
B(d){var w=this,v=null,u=A.L(d).ax.a===B.H,t=new C.t4(u),s=w.d.d.length,r=u?B.dR:B.c,q=A.m(28),p=A.a([new A.aa(0,B.G,B.w.j(u?0.35:0.08),B.kG,36)],x.V),o=x.p
return A.br(!0,new A.C(B.ub,A.p(v,A.u(A.a([w.ckg(d,t,s),new A.C(D.bgR,A.u(A.a([w.b_0(t,"QR restore"),B.T,A.B(A.a([w.aV9(t,!0,B.j0,B.b4,B.b4,new C.eul(w,d),"Show to scan","QR code"),B.av,w.atW(t,B.iH,B.b0,B.bE,new C.eum(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.j,0,v,v),B.d1,w.b_0(t,"Backup files"),B.T,A.B(A.a([w.atW(t,B.hh,B.aS,B.bR,new C.eun(w,d),"Full copy","Backup file"),B.av,w.atW(t,M.x8,B.aZ,B.aM,new C.euo(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.j,0,v,v)],o),B.F,v,B.e,B.j,0,B.p),v)],o),B.m,v,B.e,B.R,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
ckg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eO,B.cW,B.ff],k):A.a([B.aW,B.aS,B.bR],k)
w=A.an(l,A.V(B.rZ,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.p(l,l,B.h,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kr,l,l,l,36),l,l,l)
u=A.m(14)
t=A.H(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.G,B.w.j(0.2),B.cG,12)],x.V)
r=this.d
s=A.p(l,C.aMR(!0,A.m(13),64,D.bo0,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.Z,l,l,l,D.aKa,l,l,l)
r=C.byU(r.gw3(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.H(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.V,l,B.a9,B.q,A.a([w,new A.C(D.bhe,A.u(A.a([v,A.B(A.a([s,B.en,A.D(A.u(A.a([u,B.au,t,B.P,A.B(A.a([r,B.aa,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.h,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fw,l,l,l)],m),B.m,l,B.e,B.j,0,l,l)],m),B.F,l,B.e,B.j,0,B.p),1),A.aF(l,l,l,l,A.V(B.cu,B.c.j(0.85),l,l,l,l),l,l,l,new C.euk(d),l,l,l,A.ok(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aHy,l,l,l,l),l,l)],m),B.F,l,B.e,B.j,0,l,l)],m),B.m,l,B.e,B.j,0,B.p),l)],m),l),B.h,l,l,new A.o(l,l,l,l,l,new A.a8(B.ax,B.aC,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b_0(d,e){var w=null,v=A.p(w,w,B.h,w,w,new A.o(B.aS,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.aa,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bm:B.bv,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.j,0,w,w)},
aV9(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ab1:B.aO
if(e)w=B.b4.j(o?0.45:0.35)
else{w=o?B.dT:B.cg
w=w.j(o?0.8:1)}w=A.H(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.G,B.b4.j(0.12),B.cG,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.H(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.h,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.qd,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aO:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.D(A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.eq(new A.C(E.V3,A.u(A.a([t,B.ab,u,B.by,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bm:B.bv,r,r,r,r,r,r,r,r,11,r,r,B.cp,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
atW(d,e,f,g,h,i,j){return this.aV9(d,!1,e,f,g,h,i,j)}}
C.apu.prototype={
S(){return new C.bh2()}}
C.bh2.prototype={
Z(){this.a0()
this.abJ()},
abJ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$abJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.byW(p.c,p.d),$async$abJ)
case 7:q=e
if(r.c==null){w=1
break}r.n(new C.etZ(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.n(new C.eu_(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$abJ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.L(d).ax.a===B.H,f=g?B.z1:B.iR,e=i.d
e=e==null?h:B.a.a_(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.V(B.et,g?B.aj:B.al,h,h,h,18),h,h,h,new C.eu0(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.D(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.L,h,h),1),B.y9],u),B.m,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eO,B.cW,B.ff],s):A.a([B.aW,B.aS,B.bR],s)
r=x.V
q=A.a([new A.aa(0,B.G,B.aS.j(g?0.4:0.3),B.eI,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dP,B.L,h,h)
p=C.byU(p.gw3(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.u(A.a([o,B.ar,A.B(A.a([p,B.aa,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.h,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fw,h,h,h)],u),B.m,h,B.b5,B.j,0,h,h)],u),B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(h,h,h,t,q,new A.a8(B.ax,B.aC,B.x,s,h,h),B.n),h,h,h,h,E.Vp,h,h,1/0)
t=g?D.b6c:B.c
q=A.m(24)
p=A.H(w?B.b4.j(0.4):B.aS.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.G,B.w.j(g?0.25:0.06),B.dl,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.a3J,B.L,h,h))
else{n=i.d
if(n==null)o.push(D.dLH)
else{m=A.m(20)
l=A.H(B.aJ,B.r,1)
o.push(A.p(h,A.pi(h,h,!1,n,h,!0,!0,h,!1,B.c),B.h,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.c1,h,h,h))}}o.push(B.aN)
n=w?B.b4:B.aS
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.H((w?B.b4:B.aS).j(0.35),B.r,1)
k=w?B.KS:B.Lj
k=A.V(k,w?B.b4:B.aS,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.av,A.D(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.aj:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a0,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.j,0,h,h),B.h,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iE,h,h,h))
return A.cg(h,f,A.br(!0,A.u(A.a([new A.C(A3.K4,e,h),A.D(A.ch(A.u(A.a([s,B.aN,A.p(h,A.u(o,B.m,h,B.e,B.j,0,B.p),B.h,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.rG,h,h,1/0)],u),B.m,h,B.e,B.j,0,B.p),B.q,h,B.z,h,E.adp,h,h,B.ah),1)],u),B.m,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.apz.prototype={
S(){return new C.aBG(A.ya(B.Jn,B.n2,B.t2))}}
C.aBG.prototype={
p(){this.d.p()
this.a2()},
aI_(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iC(w,d)},
c1U(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u]
s=C.hMw(t)
if(s!=null){this.aI_(s)
return}r=C.fWA(t)
if(r!=null)q=A.dj(r,p,0)
else q=!1
if(q){this.aI_(B.a.i(B.a.aV(r,B.a.cP(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eA(A.a([A.aF(t,t,t,t,A.V(u.f?B.rR:A0.KY,t,t,t,t,t),t,t,t,new C.eu2(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.z1,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.eWC,t,t,t,1,t,!0),q=A.y9(u.d,B.bN,u.gc1T()),p=A.m(28)
p=A.as(A.p(t,t,B.h,t,t,new A.o(t,t,A.H(B.aS,B.r,3),p,A.a([new A.aa(2,B.G,B.aS.j(0.35),B.J,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.cg(r,B.w,new A.am(B.V,t,B.aX,B.q,A.a([q,p,A.an(32,A.p(t,D.eVt,B.h,t,t,new A.o(w,t,A.H(B.aS.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.iF,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aGq.prototype={
a3(){return"_WorksheetTab."+this.b}}
C.Mh.prototype={
S(){return new C.aBI(D.a5H,A.a([],x.D))},
bl(){return this.r.$0()},
gdS(){return this.c}}
C.aBI.prototype={
gcrn(){return J.bA1(this.e,0,new C.euL())},
Z(){this.a0()
$.aS.c_$.push(this)
this.uP()},
p(){$.aS.hE(this)
this.a2()},
iP(d){if(d===B.fo)this.uP()},
uP(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$uP=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BD(q.a.c).cJ(0,B.kq),$async$uP)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.n(new C.euH(q,p))
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
if(q.c!=null&&q.f)q.n(new C.euI(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$uP,v)},
Gw(d){return this.bCf(d)},
bCe(){return this.Gw(null)},
bCf(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Gw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.hOr(l,d),$async$Gw)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.l1(l,r,q,D.cOy,new A.O(Date.now(),0,!1))
w=4
return A.b(C.Jz(t.a.c,p),$async$Gw)
case 4:o=f
w=5
return A.b(t.uP(),$async$Gw)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.F(x.q).f.P(D.epP)
w=1
break}n=J.aU(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.F(q).f.P(D.ery)
else n.F(q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.Db(m)
case 1:return A.h(u,v)}})
return A.i($async$Gw,v)},
Db(d){return this.c5L(d)},
c5L(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Db=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hk(s,new C.apA(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.i),$async$Db)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Jz(u.a.c,t),$async$Db)
case 5:case 4:w=6
return A.b(u.uP(),$async$Db)
case 6:return A.h(null,v)}})
return A.i($async$Db,v)},
uD(d){return this.bRE(d)},
bRE(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$uD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bys(),$async$uD)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hk(r,D.aAo,!0,"NgmyWorksheetProjectScan",x.N),$async$uD)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.byV(q),$async$uD)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.F(x.q).f
r.P(A.b_(null,null,null,null,null,B.q,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.fIl(s)
w=15
return A.b(C.Jz(t.a.c,p),$async$uD)
case 15:o=f
w=16
return A.b(t.uP(),$async$uD)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.F(x.q).f.P(D.erD)
w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
t.Db(p)
case 1:return A.h(u,v)}})
return A.i($async$uD,v)},
M6(d){return this.bAW(d)},
bAW(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$M6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ce(null,null,!0,null,new C.eus(d),s,null,!0,!0,x.y),$async$M6)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.ob(t.a.c,A.a([],x.D)),$async$M6)
case 6:w=7
return A.b(t.uP(),$async$M6)
case 7:s=t.c
if(s==null){w=1
break}s.F(x.q).f.P(D.epU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$M6,v)},
c5Y(d){var w=this.c
w.toString
A.c0(B.K,null,new C.euB(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b_C(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.j7
else w=B.c
v=A.m(16)
u=A.H(p?B.dT:B.cg,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.h,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bT,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aO:B.aG,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.X,!0,r,A.aH(!1,q,!0,A.p(r,A.u(A.a([s,B.ab,t,B.by,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bm:B.bv,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.F,r,B.e,B.j,0,B.p),B.h,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.ua,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
Yu(d,e){return this.c5M(d,e)},
c5M(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.c0(B.K,null,new C.euw(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$Yu)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.h4m(r,new C.eux(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.M8(d,e),$async$Yu)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$Yu,v)},
aXH(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.h,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aH
else t=h.a?B.aO:B.aG
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.D(A.u(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bm:B.bv,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.F,u,B.e,B.j,0,B.p),1)
return A.aD(!1,B.X,!0,u,A.aH(!1,u,!0,new A.C(B.zF,A.B(A.a([s,B.ba,t,A.V(B.ek,w?B.bm:B.bv,u,u,u,u)],v),B.m,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac)},
ccq(d,e,f,g,h,i){return this.aXH(!1,d,e,f,g,h,i)},
M8(d,e){return this.bB5(d,e)},
bB5(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$M8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.kN(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$M8)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bxd(t.a.c,d.a),$async$M8)
case 6:w=7
return A.b(t.uP(),$async$M8)
case 7:r=t.c
if(r==null){w=1
break}r.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$M8,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===B.H,n=new C.t4(o),m=o?B.bV:B.iR
if(q.f)o=D.aXd
else{w=q.bvH(n)
v=q.bQM(n)
u=q.gbsT()
if(o)t=B.j7
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ab,v,B.aN,new C.E7(A.p(p,A.B(A.a([q.axm(P.KA,"Projects",n,D.a5H),q.axm(B.ul,"Cashier",n,D.aNm),q.axm(B.E1,"Family Tree",n,D.fhu)],r),B.m,p,B.e,B.j,0,p,p),B.h,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ef,0.95,u,p),B.bs],r)
w=q.d
if(w===D.a5H){w=J.a9(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aO:B.aG,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b6,new C.auf(q.gaM7(),p)],r),B.m,p,B.e,B.j,0,p,p),B.ay,q.ccs(n)],r))}else{o=q.a
if(w===D.aNm)u.push(new C.alG(o.c,n,p))
else{w=q.r
u.push(new C.amM(o.c,o.d,o.e,o.f,new C.euO(q),new C.euP(q),new A.cv(w,x.b4)))}}o=A.ch(A.u(u,B.F,p,B.e,B.j,0,B.p),B.q,p,B.z,p,A8.JZ,p,p,B.ah)}return A.cg(p,m,A.br(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bvH(d){var w=null,v=A.m(8),u=d.a,t=A.V(N.Wx,u?B.bm:B.bv,w,w,w,16)
return A.aH(!1,v,!0,new A.C(B.ll,A.B(A.a([t,B.bo,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bm:B.bv,w,w,w,w,w,w,w,w,14,w,w,B.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.R,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eup(this),w,w,w,w,w,w,w)},
gbsT(){switch(this.d.a){case 0:return D.a5_
case 1:return D.f8Z
case 2:return D.a50}},
bQM(d){var w=null,v=A.m(15),u=A.a([new A.aa(0,B.G,B.aS.j(0.35),B.cv,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.byp,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.ba,D.blk,A.aD(!1,B.X,!0,w,A.aH(!1,A.m(12),!0,A.p(w,D.bw_,B.h,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eut(this,d),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)],t),B.F,w,B.e,B.j,0,w,w),r=B.aW.j(0.55),q=A.m(12)
return new C.E7(A.p(w,A.u(A.a([new A.C(E.V9,s,w),A.p(w,A.u(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.zA(this.gcrn()),w,w,w,w,w,w,D.eHr,w,w,w)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.u9,B.iF,w,w,1/0)],t),B.F,w,B.e,B.j,0,B.p),B.h,w,w,new A.o(B.aS,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.f8Y,w)},
axm(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aS:B.K,q=A.m(12),p=t?A.H(B.c.j(0.55),B.r,2):A.H(B.K,B.r,2),o=t?A.a([new A.aa(0.5,B.G,B.aS.j(0.42),B.cG,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bm:B.bv
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bm:B.bv
return A.D(A.aD(!1,B.X,!0,u,A.aH(!1,s,!0,A.dg(u,A.B(A.a([w,B.eA,new A.dl(1,B.cj,A.d(e,u,1,B.Z,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b5,B.j,0,u,u),u,u,B.co,new A.o(r,u,p,q,o,u,B.n),B.id,u,u,u,B.K1,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.euK(this,g),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),1)},
ccs(d){var w,v,u,t,s,r,q=this,p=null
if(J.ci(q.e)){w=d.a
v=w?B.dR:B.c
u=A.m(15)
t=A.p(p,D.bw4,B.h,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.G,B.aS.j(0.5),B.eI,28)],x.V),D.bGD,B.a5),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aO:B.aG,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.E7(A.p(p,A.u(A.a([t,B.d1,s,B.P,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bm:B.bv,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.L,p,p),B.dW,A.B(A.a([A.D(q.aNB(B.iH,"Scan QR",new C.euE(q),d),1),B.av,A.D(q.aNB(M.x8,"Upload file",new C.euF(q),d),1)],r),B.m,p,B.e,B.j,0,p,p),B.ay,A.bH(D.f4Q,q.gaM7(),A.bk(B.aS,p,p,p,B.c,B.fL,p,p,new A.b5(A.m(12),B.W),p,p,p))],r),B.m,p,B.e,B.j,0,B.p),B.h,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bii,1.05,D.a5_,p)}w=J.b4(q.e,new C.euG(q,d),x.l)
w=A.z(w,w.$ti.k("ai.E"))
return new C.E7(A.u(w,B.m,p,B.e,B.j,0,B.p),16,B.bT,1,D.a5_,p)},
aNB(d,e,f,g){var w=null,v=B.aS.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.H(B.aS.j(0.45),B.r,1)
return A.aD(!1,B.X,!0,u,A.aH(!1,t,!0,A.p(w,A.u(A.a([A.V(d,B.aW,w,w,w,26),B.P,A.d(e,w,w,w,w,w,w,D.eFT,B.L,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),B.h,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.aca,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.h,v,0,w,w,w,w,w,B.ac)},
ccr(d,e){var w,v,u=null,t=e.a,s=t?B.dR:B.c,r=A.m(14),q=A.H(t?B.dT:B.cg,B.r,1),p=A.a([new A.aa(0,B.G,B.w.j(t?0.35:0.08),B.e6,10)],x.V),o=A.m(14),n=t?B.bm:B.bv
n=A.bv(B.a6j,new A.fM(1.7777777777777777,C.aMR(!0,B.fe,1/0,P.KA,n,d.c,1/0),u),B.ap)
w=x.p
v=A.D(A.u(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aO:B.aG,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.zA(d.gw3()),u,u,u,u,u,u,D.eE4,u,u,u)],w),B.F,u,B.e,B.j,0,B.p),1)
return A.p(u,A.aD(!1,B.X,!0,u,A.aH(!1,o,!0,A.u(A.a([n,new A.C(B.bA,A.B(A.a([v,A.aF(u,u,u,u,A.V(A9.Lb,t?B.bm:B.bv,u,u,u,u),u,u,u,new C.euC(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.j,0,u,u),u)],w),B.F,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.euD(this,d),u,u,u,u,u,u,u),B.h,B.K,0,u,u,u,u,u,B.ac),B.h,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.dZ,u,u,u,1/0)}}
C.btj.prototype={}
C.qn.prototype={
ac(){var w=this,v=w.c,u=w.d
return A.E(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcJM(){var w,v,u,t,s=this.c
if(s===B.k.lp(s))w=B.o.u(B.k.L(s))
else{v=B.k.ab(s,2)
u=A.ad("\\.?0+$",!0,!1,!1,!1)
w=A.aI(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.l1.prototype={
gw3(){return B.d.cI(this.d,0,new C.cqf())},
ac(){var w=this,v=w.d,u=A.T(v).k("J<1,a0<n,@>>")
v=A.z(new A.J(v,new C.cqe(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.aa()],x.N,x.z)},
b6w(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.l1(w.a,w.b,v,u,w.e)},
b6d(d){return this.b6w(d,null)},
QR(d){return this.b6w(null,d)}}
C.G2.prototype={
a3(){return"FamilyGender."+this.b}}
C.hO.prototype={
ac(){var w=this
return A.E(["id",w.a,"name",w.b,"gender",C.h0d(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
azV(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hO(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ai1.prototype={
a3(){return"FamilyTreeAccessRole."+this.b}}
C.kl.prototype={
galn(){var w=this.f
return new A.a5(w,new C.bIS(),A.T(w).k("a5<1>")).gH(0)},
ac(){var w=this,v=w.f,u=A.T(v).k("J<1,a0<n,@>>")
v=A.z(new A.J(v,new C.bIR(),u),u.k("ai.E"))
return A.E(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.aa(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.hF2(w.y)],x.N,x.z)},
xE(d,e,f,g,h,i,j,k){var w=this,v=i==null?w.b:i,u=d==null?w.c:d,t=f==null?w.d:f,s=e==null?w.e:e,r=h==null?w.f:h,q=k==null?w.w:k,p=j==null?w.x:j,o=g==null?w.y:g
return new C.kl(w.a,v,u,t,s,r,w.r,q,p,o)},
b6v(d,e){var w=null
return this.xE(w,w,d,e,w,w,w,w)},
czS(d,e,f,g,h,i,j){return this.xE(d,e,f,g,h,i,j,null)},
aA_(d,e){var w=null
return this.xE(w,w,w,d,w,w,e,w)},
cym(d){var w=null
return this.xE(w,w,w,w,w,w,d,w)},
cyK(d){var w=null
return this.xE(w,w,w,w,w,w,w,d)},
azM(d){var w=null
return this.xE(w,w,w,w,d,w,w,w)},
czo(d,e,f){var w=null
return this.xE(w,d,w,e,w,w,f,w)},
cy9(d){var w=null
return this.xE(w,w,d,w,w,w,w,w)},
cyX(d,e){var w=null
return this.xE(d,w,w,w,w,e,w,w)}}
C.cqg.prototype={
a3(){return"WrapAlignment."+this.b}}
C.cqh.prototype={
a3(){return"WrapCrossAlignment."+this.b}}
C.aDJ.prototype={}
C.b4S.prototype={
bH(d){this.a=d.a
this.b=d.b},
dl(d){var w=new C.b4S()
w.a=this.a
w.b=this.b
return w},
u(d){return A.aV(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b4R.prototype={
gvo(){return!0},
gED(){return this.z.b<this.b.length},
aPa(d){switch(0){case 0:return d.a.c}},
aOS(d){switch(0){case 0:return d.a.d}},
bKj(d,e){switch(0){case 0:return new A.hx(d,e)}},
bJI(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
fR(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.ir(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.FO(b4)
switch(0){case 0:v=b5.b
u=new A.ki(0,v,0,1/0)
t=w===B.Qp
break}s=A.a([],x.gZ)
r=A.S(x.cM,x.S)
for(b3=b1.z,q=B.d.fT(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.K)(q),++h){g=q[h]
g.fR(b4,u,!0)
f=b1.aPa(g)
f.toString
e=b1.aOS(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDJ(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.m(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aDJ(k,j,i))}d=s.length
switch(0){case 0:q=b5.cp(new A.hx(m,l))
a0=q.a
a1=q.b
b1.a=new A.ir(0,0,a0,a1)
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
for(q=B.d.fT(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.K)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aPa(g)
e=b1.aOS(g)
e.toString
a9=b1.bJI(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bKj(a6,a3+a9)
b0=g.a
g.a=new A.ir(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fN(d){var w,v,u,t,s,r=this
r.kK(d)
w=d.b
w.hR()
v=A.de()
u=r.a
v.dY(u.a,u.b,0,1)
w.od(0,v)
for(u=r.z,u=B.d.dA(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.K)(u),++s)u[s].fN(d)
w.mJ(0)},
F8(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
hR(){return this.z}}
C.brA.prototype={}
var z=a.updateTypes(["au<~>()","R(hO)","R(kl)","~()","R(mM)","a0<n,@>(kl)","I(kl,kl)","n(hO)","kl(a0<@,@>)","R(l1)","R(tB)","mM(a0<@,@>)","tB()","I(l1,l1)","hO(a0<@,@>)","a0<n,@>(hO)","R(qn)","au<~>(l1)","ep<n?>(hO)","I(hO,hO)","n?(hO)","a0<n,@>(mM)","XP(X)","n(n)","aaK(X)","r(nO)","I(mM,mM)","hO(hO)","cE(bq<n,Ej>)","cE(Io)","~(hO)","I?(hO)","hO()","al<hO>()","R(tA)","R(Io)","C(hO)","~(G2)","R(acf)","r(G2,n,a_)","Xd(X)","bq<n,al<a0<n,@>>>(n,al<mM>)","~(I)","+count,id,name(I,n,n)(kl)","kl(kl)","Y9(X)","Ya(X)","R(lh)","lh()","n(kl)","ZT(X)","WO(X)","WN(X)","Xb(X)","Xf(X)","r(qn)","ab4(X)","~(lE)","au<~>([n?])","Q(Q,l1)","r(l1)","Q(Q,qn)","a0<n,@>(qn)","qn(a0<@,@>)","WM(X)","QM(X)","co(G1)","l1(a0<@,@>)","tA()","n(l1)","a0<n,@>(l1)","n(O)","I(hO)","kl(a0<n,@>)","Wk(X)"])
C.fh6.prototype={
$1(d){return d.a+" "+d.b},
$S:116}
C.fh5.prototype={
bfe(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qg(s,d,B.h5,E.Dp),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.P(r!=null&&A.Jn(r)?y.l:y.k)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bfe(d)},
$S:325}
C.fh7.prototype={
$1(d){return d.b},
$S:116}
C.fq1.prototype={
$1(d){var w=null
return A.ev(w,B.K,new F.NC(this.a,this.b,w),w,w,0,B.V4,B.cX,w,w,w)},
$S:46}
C.f7q.prototype={
$1(d){return d!=null},
$S:217}
C.f7r.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:217}
C.f7w.prototype={
$1(d){if(this.a)return new A.v(d.a*520,d.b*160)
return d},
$S:170}
C.feQ.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.f_(d,w,w,w,A.fW(w,B.qF,w,w,w,w,w,w,w,B.dk,w,w,10.5,w,B.eb,w,!0,w,w,w,w),w),u=f?B.eb:B.ug
return new A.ni(D.bdV,A.a7m(A.a([new A.fF(130,w,v),new A.xU(1,B.DV,A.f_(e,w,w,w,A.fW(w,g==null?D.dMX:g,w,w,w,w,w,w,w,B.dk,w,w,11,w,u,w,!0,w,w,w,w),w))],x.C),B.w7,B.l2))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1869}
C.feP.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.uH(999)
f=A.w9(A.lc(h,A.f_("Cashier",h,h,h,A.fW(h,D.xY,h,h,h,h,h,h,h,B.dk,h,h,10,h,B.eb,h,!0,h,h,h,h),h),h,new A.kj(D.dMO,h,f,B.hk,h),h,h,D.bel,h))
w=A.w9(A.f_("Debt receipt",h,h,h,A.fW(h,h,h,h,h,h,h,h,h,B.dk,h,h,22,h,B.eb,h,!0,h,h,h,h),h))
v=A.w9(A.f_(C.vT(new A.O(Date.now(),0,!1),!0),h,h,h,D.a3S,h))
u=A.uH(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.f_(s,h,h,h,A.fW(h,h,h,h,h,h,h,h,h,B.dk,h,h,14,h,B.eb,h,!0,h,h,h,h),h)
r=A.f_("Person who owes",h,h,h,D.a3S,h)
q=A.uH(10)
p=x.C
u=A.lc(h,A.xP(A.a([s,new A.fF(h,2,h),r,new A.fF(h,10,h),A.lc(h,A.xP(A.a([A.f_("Amount owed",h,h,h,D.a3S,h),new A.fF(h,2,h),A.f_(A.zA(t.c),h,h,h,A.fW(h,D.xY,h,h,h,h,h,h,h,B.dk,h,h,20,h,B.eb,h,!0,h,h,h,h),h)],p),B.q8,B.l2),h,new A.kj(B.oi,h,q,B.hk,h),h,h,D.bdC,1/0)],p),B.q8,B.l2),h,new A.kj(E.aBk,h,u,B.hk,h),h,h,D.bfp,1/0)
q=new A.n1(D.dMR,0.9,B.ki)
r=A.uH(12)
s=i.c
o=s.$2("Original due",C.vT(t.r,!1))
n=s.$2("Current due",C.vT(t.f,!1))
m=i.d
l=new A.n1(m,1.1,B.ki)
k=A.uH(8)
j=i.a
k=A.a([o,n,new A.fF(h,6,h),A.lc(h,A.w9(A.f_(t.gaGw(),h,h,h,A.fW(h,m,h,h,h,h,h,h,h,B.dk,h,h,11,h,B.eb,h,!0,0.5,h,h,h),h)),h,new A.kj(h,new A.p_(l,l,l,l),k,B.hk,h),h,h,D.beu,1/0),new A.fF(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.xY))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.xY))
else{n=A.f_("Missed days ("+n+")",h,h,h,A.fW(h,B.qF,h,h,h,h,h,h,h,B.dk,h,h,10.5,h,B.eb,h,!0,h,h,h,h),h)
m=A.T(o).k("J<1,Qm>")
o=A.z(new A.J(o,new C.feO(),m),m.k("ai.E"))
B.d.v(k,A.a([new A.fF(h,4,h),n,new A.fF(h,6,h),new C.b4R(5,5,new C.b4S(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fF(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fF(h,8,h),w,new A.fF(h,3,h),v,new A.fF(h,16,h),u,new A.fF(h,10,h),A.lc(h,A.xP(k,B.w7,B.l2),h,new A.kj(h,new A.p_(q,q,q,q),r,B.hk,h),h,h,B.acl,1/0)],p)
w=j.a
if(w!=null){v=new A.n1(B.Gn,1,B.ki)
B.d.v(f,A.a([new A.fF(h,16,h),A.f_("Debtor signature",h,h,h,A.fW(h,B.qF,h,h,h,h,h,h,h,B.dk,h,h,10,h,B.eb,h,!0,h,h,h,h),h),new A.fF(h,6,h),A.lc(h,new A.Gh(w,B.Sr,h,h),h,new A.kj(h,new A.p_(v,v,v,v),A.uH(6),B.hk,h),82,h,B.K3,1/0)],p))}f.push(new A.fF(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.f_(w,h,h,h,D.exk,h))
f.push(new A.fF(h,18,h))
f.push(A.w9(A.f_("NGMY.ORG",h,h,h,A.fW(h,D.xY,h,h,h,h,h,h,h,B.dk,h,h,14,h,B.eb,h,!0,1.8,h,h,h),h)))
return f},
$S:398}
C.feO.prototype={
$1(d){var w=null,v=new A.n1(D.Go,0.7,B.ki),u=A.uH(999)
return A.lc(w,A.f_(C.vT(d,!1),w,w,w,A.fW(w,D.Go,w,w,w,w,w,w,w,B.dk,w,w,9.5,w,B.eb,w,!0,w,w,w,w),w),w,new A.kj(w,new A.p_(v,v,v,v),u,B.hk,w),w,w,D.bjC,w)},
$S:1870}
C.bXo.prototype={
$1(d){var w=null,v=B.bS.j(0.08),u=A.m(999),t=A.H(B.bS.j(0.28),B.r,1)
return A.p(w,A.d(C.vT(d,!1),w,w,w,w,w,w,D.eDA,w,w,w),B.h,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.es,w,w,w)},
$S:1871}
C.fqx.prototype={
$1(d){var w=null,v=A.aG(d,B.bO,x.w).w,u=A.m(26),t=A.aF(w,w,w,w,B.aig,w,w,w,new C.fqu(d),w,w,w,w,w,B.c6),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.ev(w,B.K,new A.cZ(new A.aW(0,380,0,v.a.b*0.9),A.aD(!1,B.X,!0,u,new A.C(B.UV,A.u(A.a([new A.bF(B.a7,w,w,t,w),new A.dl(1,B.cj,A.ch(A.u(A.a([new A.en(new C.aV3(r,w),s),B.T,A.B(A.a([A.D(A.ey(B.xj,D.f1p,new C.fqv(s,r,d),A.d9(w,w,w,w,w,w,w,w,w,B.c,w,w,B.eU,w,new A.b5(A.m(14),B.W),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.D(A.dk(B.Y9,D.eZj,new C.fqw(r,d),A.bk(B.aW,w,w,w,B.c,w,B.eU,w,new A.b5(A.m(14),B.W),w,w,w)),1)],p),B.m,w,B.e,B.j,0,w,w)],p),B.m,w,B.e,B.R,0,B.p),B.q,w,B.z,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.R,0,B.p),w),B.h,B.aG,0,w,w,w,w,w,B.ac),w),w,w,0,Ad.Vi,B.cX,w,w,w)},
$S:46}
C.fqu.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fqv.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.ae$.x.h(0,t.a)
m=m==null?null:m.gb3()
x.Z.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lP(2.5),$async$$0)
case 4:w=3
return A.b(e.hf(B.fI),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.f1(B.dz.gaL(s))
m=t.b
q=B.a.i(m.b)
p=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aI(q,p,"_")
if(o.length>32)o=B.a.al(o,0,32)
w=5
return A.b(A.rf(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fqw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.flq(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.F(x.q).f
s.P(A.b_(null,null,null,null,null,B.q,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fqp.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.ev(w,B.aG,A.u(A.a([new A.C(D.bfd,A.B(A.a([A.D(A.d(this.a,w,w,w,w,w,w,B.mT,w,w,w),1),A.aF(w,w,w,w,B.l0,w,w,w,new C.fqn(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),w),new A.dl(1,B.cj,new A.C(B.ii,A.bv(A.m(14),A.fC(t,B.B,w,w,B.ci,B.dn,!1,w,!1,w,w),B.ap),w),w),new A.C(B.JI,new A.a3(1/0,w,A.dk(B.ob,D.aKz,new C.fqo(t,this.c,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.W),w,w,w)),w),w)],u),B.m,w,B.e,B.R,0,B.p),w,w,w,B.JT,B.cX,w,new A.b5(v,B.W),w)},
$S:46}
C.fqn.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fqo.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rf(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fqB.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.ev(w,B.aG,new A.C(D.bfl,A.u(A.a([A.B(A.a([D.bky,A.aF(w,w,w,w,B.l0,w,w,w,new C.fqz(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.j,0,w,w),B.P,new A.en(A.bv(A.m(14),A.p(w,A.b2(w,w,w,new C.b7_(s.ax,w),B.as),B.h,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ab,new A.a3(1/0,w,A.dk(B.ob,D.aKz,new C.fqA(t,s,d),A.bk(B.aW,w,w,w,B.c,w,w,w,new A.b5(A.m(14),B.W),w,w,w)),w)],u),B.m,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cX,w,new A.b5(v,B.W),w)},
$S:46}
C.fqz.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.fqA.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.ae$.x.h(0,t.a)
n=n==null?null:n.gb3()
x.Z.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lP(2.5),$async$$0)
case 4:w=3
return A.b(e.hf(B.fI),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ad("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aI(r,q,"_")
if(p.length>32)p=B.a.al(p,0,32)
r=J.f1(B.dz.gaL(s))
w=5
return A.b(A.rf(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.F(x.q).f.P(A.b_(null,null,null,null,null,B.q,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.faa.prototype={
$1(d){return d.a===this.a},
$S:261}
C.dy5.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dxR.prototype={
bes(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.dR:B.c
s=u.a
w=2
return A.b(A.c0(t,null,new C.dxU(s,q,e),p,!0,!0,!1,B.GE,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dxV(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bes(d,e)},
$S:1872}
C.dxU.prototype={
$1(d){var w,v=null,u=this.c===B.uR,t=u?D.cTU:D.cQx
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aO:B.aG,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.br(!0,new A.C(K.acU,A.u(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bm:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ab,A.ig(!0,v,v,B.z,L.aHQ,new C.dxT(this.a,w,t,d),t.length,v,B.dJ,B.ah,!0)],x.p),B.ad,v,B.e,B.R,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:34}
C.dxT.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cW.j(0.14)
else w=t.b.a.d.a?B.M:B.aO
v=A.m(14)
if(q)u=B.cW
else u=(t.b.a.d.a?B.bm:B.bv).j(0.16)
u=A.H(u,B.r,q?1.6:1)
return A.aH(!1,p,!0,A.p(B.B,C.aV2(r,26),B.h,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dxS(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dxS.prototype={
$0(){A.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.dxV.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dxP.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dxQ.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.e7,t=A.cF(B.co,e,v)
return new A.d_(e,!1,A.iF(B.B,A.as(A.aD(!1,B.X,!0,v,new A.ed(new C.dxO(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.h,B.K,0,v,v,v,v,v,B.ac),v,v,v),v,new A.bc(t,new A.bm(0.96,1,u),u.k("bc<bC.T>"))),v)},
$S:32}
C.dxO.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aG(d,B.bO,x.w).w,i=l.b,h=i.a.d.a,g=h?B.dR:B.c,f=A.m(14),e=A.H((h?B.bm:B.bv).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.D(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aH(!1,v,!0,new A.C(B.ef,A.V(B.cu,i.a.d.a?B.bm:B.bv,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dxz(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a0,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aO7("Name")
r=l.a
q=r.d==null?k:new C.dxA(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bj:B.lN
n=A.H(B.cW.j(0.35),B.r,1)
m=r.d
t=A.aK(k,B.U,h,k,!0,B.q,k,A.aL(),w,k,k,k,k,k,2,s.b6o(new A.C(B.hd,A.aH(!1,p,!0,A.p(B.B,C.aV2(m==null?"\ud83d\udc64":A.ffE(r.e,m),18),B.h,k,k,new A.o(o,k,n,k,k,k,B.a5),k,34,k,B.ch,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.z,!0,k,!0,k,!1,k,B.af,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.kc,k,B.a3A,k,k)
v=A.a([v,B.ab,t,B.P,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.ar,A.B(A.a([A.D(i.aOI("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dxB(r,a0),r.d===B.uR),1),B.aa,A.D(i.aOI("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dxG(r,a0),r.d===B.a0A),1)],u),B.m,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.P,new A.bF(B.a1,k,k,A.hf(D.bxI,D.f_X,new C.dxH(r,l.e,a0),A.fo(k,k,k,k,k,k,k,k,k,k,k,B.cW,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c6)),k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.a0,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tD(A.ad("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.f,k,k,k,k,k,2,i.aO8("Amount","$ "),B.z,!0,k,!0,k,!1,k,B.af,k,k,s,k,k,B.dX,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.am,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.M:B.aO
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.H((t?B.bm:B.bv).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,B.a0,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.vT(r.a,!1)
v.push(A.aD(!1,B.X,!0,q,A.aH(!1,p,!0,A.p(k,A.B(A.a([A.D(A.u(A.a([t,B.by,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.F,k,B.e,B.j,0,B.p),1),D.buC],u),B.m,k,B.e,B.j,0,k,k),B.h,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dxI(r,d,a0),k,k,k,k,k,k,k),B.h,s,0,k,k,k,k,k,B.ac))
if(!h)B.d.v(v,A.a([B.P,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aK(k,B.U,!1,k,!0,B.q,k,A.aL(),l.r,k,k,k,k,k,2,i.aO7("Note (optional)"),B.z,!0,k,!0,k,!1,k,B.af,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a8,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a6,k,B.am,k,k,k,k))
v.push(B.ab)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aO:B.aG,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bm:B.bv,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.aW6(r.b.length!==0,B.lV,new C.dxJ(r,i,a0),new C.dxK(r,a0),"Upload from gallery","ID photo"))
v.push(i.aW6(r.c.length!==0,D.bnZ,new C.dxL(r,i,d,a0),new C.dxM(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new Ab.a5k("Signature (optional)",t,new C.dxN(a0),new C.dxC(a0,t),new C.dxD(d,t,a0),k))
v.push(B.ay)
i=i.a.d.a
t=i?B.bm:B.bv
s=(i?B.bm:B.bv).j(0.28)
s=A.D(A.dU(E.aKt,new C.dxE(d),A.d9(k,k,k,k,k,k,k,k,k,t,k,k,B.wi,k,new A.b5(A.m(10),B.W),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bk(B.cW,k,k,k,B.c,k,B.wi,k,new A.b5(A.m(10),B.W),k,k,k)
v.push(A.B(A.a([s,B.aa,A.D(A.bH(A.d(h?"Save":"Update",k,k,k,k,k,k,B.ty,k,k,k),new C.dxF(r,w,d),t),1)],u),B.m,k,B.e,B.j,0,k,k))
return A.p(k,A.ch(A.u(v,B.ad,k,B.e,B.R,0,B.p),B.q,k,B.z,k,k,k,k,B.ah),B.h,k,new A.aW(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.uc,B.iF,k,k,360)},
$S:158}
C.dxz.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dxA.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dxB.prototype={
$0(){return this.b.$1(new C.dxy(this.a))},
$S:0}
C.dxy.prototype={
$0(){var w=this.a
w.d=B.uR
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dxG.prototype={
$0(){return this.b.$1(new C.dxx(this.a))},
$S:0}
C.dxx.prototype={
$0(){var w=this.a
w.d=B.a0A
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dxH.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dxI.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xF(null,u.b,A.bT(2020,1,1,0,0,0,0,0),null,s,A.bT(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dxw(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxw.prototype={
$0(){var w=this.b
return this.a.a=A.bT(w.gcd(),w.gcb(),w.gcq(),0,0,0,0,0)},
$S:0}
C.dxJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.ND(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dxv(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxv.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dxK.prototype={
$0(){return this.b.$1(new C.dxu(this.a))},
$S:0}
C.dxu.prototype={
$0(){return this.a.b=""},
$S:0}
C.dxL.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.dR:B.c
w=3
return A.b(A.c0(q,null,new C.dxs(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.ND(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dxt(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxs.prototype={
$1(d){var w=null
return A.br(!0,A.u(A.a([A.dK(!1,w,w,w,!0,w,w,w,!0,w,B.ahO,w,w,w,w,new C.dxm(d),!1,w,w,w,w,w,w,w,D.eSc,w,w,w),A.dK(!1,w,w,w,!0,w,w,w,!0,w,B.ahM,w,w,w,w,new C.dxn(d),!1,w,w,w,w,w,w,w,D.eYq,w,w,w)],x.p),B.m,w,B.e,B.R,0,B.p),!0,!1,B.ag,!0,!0)},
$S:34}
C.dxm.prototype={
$0(){A.a7(this.a,!1).K("camera")
return null},
$S:0}
C.dxn.prototype={
$0(){A.a7(this.a,!1).K("gallery")
return null},
$S:0}
C.dxt.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dxM.prototype={
$0(){return this.b.$1(new C.dxr(this.a))},
$S:0}
C.dxr.prototype={
$0(){return this.a.c=""},
$S:0}
C.dxN.prototype={
$0(){return this.a.$1(new C.dxq())},
$S:0}
C.dxq.prototype={
$0(){},
$S:0}
C.dxC.prototype={
$0(){return this.a.$1(new C.dxp(this.b))},
$S:0}
C.dxp.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dxD.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.af7(u.a,null,null,new C.dxo(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dxo.prototype={
$4(d,e,f,g){this.a.$1(new C.dxl(this.b,d))},
$S:447}
C.dxl.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dxE.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dxF.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.F(x.q).f.P(D.etu)
return}if(w.a.d==null){w.c.F(x.q).f.P(D.eqq)
return}A.a7(w.c,!1).K(!0)},
$S:0}
C.dy8.prototype={
$3(d,e,f){return B.bF},
$C:"$3",
$R:3,
$S:92}
C.dy9.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bm:B.bv).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aO:B.aG,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.zA(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bm:B.bv,r,r,r,r,r,r,r,r,13,r,r,B.a0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.y3(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.y3(r).length>0?B.bS:B.cW,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bm:B.bv
t=(q?B.bm:B.bv).j(0.28)
s=x.p
return new A.d_(e,!1,A.as(A.aD(!1,B.X,!0,r,A.p(r,A.u(A.a([p,B.P,v,u,B.ay,A.B(A.a([A.D(A.dU(B.mW,new C.dy6(d),A.d9(r,r,r,r,r,r,r,r,r,w,r,r,B.jA,r,new A.b5(A.m(10),B.W),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.D(A.bH(D.eYP,new C.dy7(d),A.bk(B.cW,r,r,r,B.c,r,B.jA,r,new A.b5(A.m(10),B.W),r,r,r)),1)],s),B.m,r,B.e,B.j,0,r,r)],s),B.ad,r,B.e,B.R,0,B.p),B.h,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.zK,E.V9,r,r,300),B.h,B.K,0,r,r,r,r,r,B.ac),r,r,r),r)},
$S:32}
C.dy6.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dy7.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dy2.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dy3(r),p=r.a.d.a,o=p?B.dR:B.c,n=A.m(14),m=A.H((p?B.bm:B.bv).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.D(A.d(k,s,1,B.Z,s,s,s,A.l(s,s,r.a.d.a?B.aO:B.aG,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.zA(l.c),s,s,s,s,s,s,D.eF0,s,s,s)],p),B.m,s,B.e,B.j,0,s,s)
w=A.jm((r.a.d.a?B.bm:B.bv).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.WS,"View receipt",new C.dxW(r,d,l))
u=l.x!=null
t=u?B.uA:B.p2
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bfi,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dxX(r,d,l)),q.$3$icon$label$onTap(B.A0,"Edit",new C.dxY(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.lV,"View / download ID",new C.dxZ(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bnY,"View / download selfie",new C.dy_(r,d,l)))
if(l.gaBA())p.push(q.$3$icon$label$onTap(A2.Y0,"View / download signature",new C.dy0(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bS,B.e4,"Delete",new C.dy1(r,d,l)))
p.push(B.au)
return A.br(!0,new A.C(B.u9,A.p(s,A.u(p,B.m,s,B.e,B.R,0,B.p),B.h,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:34}
C.dy3.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aO:B.aG
else w=d
return A.aH(!1,v,!0,new A.C(B.eF,A.B(A.a([A.V(e,w,v,v,v,20),B.ba,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1873}
C.dxW.prototype={
$0(){A.a7(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fqt(w,this.c)},
$S:0}
C.dxX.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.Qd(this.c)},
$S:0}
C.dxY.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.BV(this.c)},
$S:0}
C.dxZ.prototype={
$0(){var w,v,u
A.a7(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzh(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dy_.prototype={
$0(){var w,v,u
A.a7(this.b,!1).K(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bzh(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dy0.prototype={
$0(){A.a7(this.b,!1).K(null)
var w=this.a.c
w.toString
C.fqy(w,this.c)},
$S:0}
C.dy1.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.Mj(0,this.c)},
$S:0}
C.dya.prototype={
$1(d){return d.x==null},
$S:261}
C.dyb.prototype={
$1(d){return d.x!=null},
$S:261}
C.dyc.prototype={
$2(d,e){return d+e.c},
$S:1874}
C.dyd.prototype={
$0(){return this.a.btl()},
$S:0}
C.dy4.prototype={
$0(){return this.a.abW(this.b)},
$S:0}
C.fay.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.faz.prototype={
$0(){return B.d.gI(D.Zc)},
$S:z+68}
C.cZy.prototype={
$0(){var w=this.a
return w.n(new C.cZw(w,this.b))},
$S:0}
C.cZw.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.cZx.prototype={
$0(){},
$S:0}
C.cZz.prototype={
$0(){var w=this.a.gbRs()
A.a7(this.b,!1).K(w)
return null},
$S:0}
C.fcp.prototype={
$1(d){return C.fMk(A.Z(d,x.N,x.z))},
$S:z+11}
C.fcq.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fcr.prototype={
$2(d,e){var w=A.c3(d.a,null),v=A.c3(e.a,null)
if(w!=null&&v!=null)return B.o.aI(w,v)
return d.d.aI(0,e.d)},
$S:z+26}
C.fpa.prototype={
$1(d){return d.ac()},
$S:z+21}
C.fwN.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fa1.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bIN.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eQ(e,v)?v:null},
$S:1875}
C.fpG.prototype={
$1(d){var w=this
return new C.Xd(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+40}
C.d_d.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.d_c(w,d))},
$S:z+66}
C.d_c.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_1.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cs(u)?v.r>=J.a9(v.d):w)v.r=J.a9(v.d)-1},
$S:0}
C.cZZ.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.cZA.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.cZB.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.d_2.prototype={
$0(){return this.a.w=!1},
$S:0}
C.cZJ.prototype={
$1(d){var w=null,v=A.L(d).ax.a===B.H,u=v?B.dR:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eo(A.a([A.bG(!1,B.dd,w,w,!0,w,w,new C.cZH(d),w,w),A.bH(B.vd,new C.cZI(d),A.bk(B.ml,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:20}
C.cZH.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.cZI.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.cZK.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.d__.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+10}
C.d_0.prototype={
$0(){return B.d.gI(D.xt)},
$S:z+12}
C.cZF.prototype={
$1(d){var w=this.a,v=w.y,u=w.gxk(0),t=J.a9(w.d)
w=J.a9(w.d)===1?"page":"pages"
return new C.QM(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+65}
C.cZG.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZL.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.WM(v,u,J.a9(w.d),null)},
$S:z+64}
C.cZM.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_b.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aJ(s,new C.Wt(r.y,r.gxk(0),J.a9(r.d),s),B.z,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.d_9(r),s,s,s,s,s,s,!1,B.ae)
else{w=e-1
v=J.q(r.d,w)
J.a9(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.b6o(v,e,w,u,t,r.gbIR(),C.h0c(r.y.Q),r.gxk(0),s)
w=t}return A.c4(q,new C.d_a(r,e),new A.C(B.Vb,w,s))},
$S:1876}
C.d_a.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gcV(t).ay){t=this.b
u=x.cy.a(B.d.gcV(u.f.f)).gtU(0)
w=t-(u==null?t:u)}else w=0
v=B.k.D(w,-1,0)
u=A.de()
t=u.a
t.$flags&2&&A.ah(t)
t[11]=0.0013
u.fk(v*3.141592653589793*0.5)
return A.fl(B.a1,A.d5(e,B.k.D(1+v*0.5,0,1)),null,u,!0)},
$S:44}
C.d_9.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCD(B.oR,B.ig)},
$S:0}
C.cZW.prototype={
$0(){var w=this.a
return w.n(new C.cZV(w))},
$S:0}
C.cZV.prototype={
$0(){return this.a.w=!0},
$S:0}
C.cZX.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).K(null)
return null},
$S:0}
C.cZC.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.jt.j(0.5),r=x.p,q=A.a([D.eQV,B.ab],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ci(p.d)?"Write this book":"Write a new book"
q.push(p.WM(d,B.dO,w,J.ci(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.WM(d,L.afN,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cs(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cH,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.jU.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cH,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.jU.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.WM(d,Z.agR,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.WM(d,B.p8,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.WM(d,B.p8,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.ev(u,E.z9,A.br(!0,new A.C(A1.DB,A.u(q,B.F,u,B.e,B.R,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,D.adj,B.cX,u,new A.b5(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.cZY.prototype={
$0(){A.a7(this.a,!1).K(this.b)
return null},
$S:0}
C.cZP.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cs(w.d)
return new C.Xf(v,J.cs(w.d),w.r+1,null)},
$S:z+54}
C.cZQ.prototype={
$1(d){var w=null
return A.nU(!1,A.eo(w,w,w,E.z9,new A.k1(this.a,new C.cZO(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:266}
C.cZO.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3g,B.nD,A.D(A.d(e,w,w,w,w,w,w,B.it,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:728}
C.cZR.prototype={
$0(){return this.a.a=!1},
$S:47}
C.cZS.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.cZT.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cZU.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.zJ(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.PE(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.n(new C.cZN(s,t))
w=4
return A.b(s.kq(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZN.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.d_4.prototype={
$1(d){var w=null
return A.nU(!1,A.eo(w,w,w,E.z9,new A.k1(this.a,new C.d_3(),w,w,x.W),w,w,w,w,w,w),w,x.z)},
$S:266}
C.d_3.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a3g,B.nD,A.D(A.d(e,w,w,w,w,w,w,B.it,w,w,w),1)],x.p),B.m,w,B.e,B.j,0,w,w)},
$S:728}
C.d_5.prototype={
$0(){return this.a.a=!1},
$S:47}
C.d_6.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.d_7.prototype={
$2(d,e){this.a.st(0,d)
return d},
$S:191}
C.d_8.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.zJ(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.kq(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.cZD.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bbI(B.oR,T.Jw)},
$S:0}
C.cZE.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aCD(B.oR,T.Jw)},
$S:0}
C.d0E.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.d0F.prototype={
$1(d){var w=this.a
return w.n(new C.d0D(w))},
$S:9}
C.d0D.prototype={
$0(){return this.a.e="page"},
$S:0}
C.d0G.prototype={
$1(d){var w=this.a
return w.n(new C.d0C(w))},
$S:9}
C.d0C.prototype={
$0(){return this.a.e="book"},
$S:0}
C.d0H.prototype={
$1(d){var w=this.a
return w.n(new C.d0B(w))},
$S:9}
C.d0B.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.d0I.prototype={
$0(){var w=this.a
return w.n(new C.d0A(w,this.b))},
$S:0}
C.d0A.prototype={
$0(){var w=this.b
this.a.d.saR(0,w)
return w},
$S:0}
C.d0J.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga_g()
A.a7(this.b,!1).K(new A.bkL(w,v))},
$S:0}
C.d_s.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.d_r.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.Xb(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+53}
C.d_w.prototype={
$1(d){return d.a===this.a},
$S:z+38}
C.d_v.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b29(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hj,v,v,v)
return A.eo(A.a([A.bG(!1,B.dd,v,v,!0,v,v,new C.d_t(d),v,v),A.bH(B.vd,new C.d_u(d),A.bk(B.ml,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.z9,w,v,v,v,v,D.ePS,v)},
$S:20}
C.d_t.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.d_u.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.d_x.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.d_y.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u)r.push(new A.a3(s,t,w[u],t))
return A.ch(A.cb(B.bH,r,B.bw,18,14),B.q,t,B.z,t,D.bge,t,t,B.ah)},
$S:310}
C.d_q.prototype={
$0(){return this.a.Og(0,this.b)},
$S:0}
C.d_p.prototype={
$0(){return this.a.NL(0,this.b)},
$S:0}
C.cyZ.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+10}
C.cz_.prototype={
$0(){return B.d.gI(D.xt)},
$S:z+12}
C.cz0.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bW(0,new A.C(d,A.bQ(w,new A.o(w,w,A.H(this.a.j(f),B.r,g),v,w,w,B.n),B.b7),w),0,0,0)},
$S:1878}
C.cSq.prototype={
$1(d){return this.a.n(new C.cSp(this.b,this.c))},
$S:9}
C.cSp.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.cSP.prototype={
$1(d){return this.a.n(new C.cSC())},
$S:2}
C.cSC.prototype={
$0(){},
$S:0}
C.cSQ.prototype={
$1(d){return this.a.n(new C.cSB())},
$S:2}
C.cSB.prototype={
$0(){},
$S:0}
C.cSR.prototype={
$0(){var w=this.a
return w.n(new C.cSA(w,this.b))},
$S:0}
C.cSA.prototype={
$0(){var w=this.a
return w.d=w.gns().Ej(this.b.a)},
$S:0}
C.cSS.prototype={
$0(){var w=this.a
return w.n(new C.cSz(w,this.b))},
$S:0}
C.cSz.prototype={
$0(){var w=this.a
return w.d=w.gns().cxG(this.b)},
$S:0}
C.cST.prototype={
$1(d){return this.a.n(new C.cSy())},
$S:2}
C.cSy.prototype={
$0(){},
$S:0}
C.cSU.prototype={
$0(){var w=this.a
return w.n(new C.cSx(w,this.b))},
$S:0}
C.cSx.prototype={
$0(){var w=this.a
return w.d=w.gns().cxL(this.b.a)},
$S:0}
C.cSV.prototype={
$1(d){var w=this.a
return w.n(new C.cSK(w,d))},
$S:6}
C.cSK.prototype={
$0(){var w=this.a
return w.d=w.gns().cyF(this.b)},
$S:0}
C.cSW.prototype={
$1(d){var w=this.a
return w.d=w.gns().azP(d)},
$S:2}
C.cSX.prototype={
$1(d){var w=this.a
return w.d=w.gns().cxO(d)},
$S:2}
C.cSZ.prototype={
$1(d){var w=this.a
return w.d=w.gns().cyD(d)},
$S:2}
C.cT_.prototype={
$1(d){var w=this.a
return w.n(new C.cSJ(w,d))},
$S:9}
C.cSJ.prototype={
$0(){var w=this.a
return w.d=w.gns().cyu(this.b)},
$S:0}
C.cT0.prototype={
$0(){var w=this.a,v=w.gns(),u=B.a.i(w.gxk(0).a.a),t=B.a.i(w.gax8().a.a)
u=v.b6F(B.a.i(w.ganp().a.a),t,u)
A.a7(this.b,!1).K(u)
return null},
$S:0}
C.dKZ.prototype={
$0(){var w=this.a
w.v0()
w.a.bl()
w.a.p_()},
$S:0}
C.dKY.prototype={
$0(){var w=this.a
w.v0()
w.a.bl()
w.a.p_()},
$S:0}
C.dL0.prototype={
$0(){var w=this,v=w.b
if(J.cs(v)||J.ci(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.dL1.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dL2.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dKX.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dL_.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.dL4.prototype={
$0(){this.a.MP()
return null},
$S:0}
C.dL3.prototype={
$0(){return this.a.Dc(this.b)},
$S:0}
C.dKp.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bG(!1,B.dd,w,w,!0,w,w,new C.dKn(d),w,w),r=A.bk(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eo(A.a([s,A.bH(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),new C.dKo(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:20}
C.dKn.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dKo.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dKq.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cy9(this.b)},
$S:0}
C.dKk.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aOn(w.b,w.c,w.d)},
$S:8}
C.dJT.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+2}
C.dJU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dK7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.F0(t.a.c),$async$$0)
case 2:s=r.qC(q.dE(e,new C.dK5(t)))
if(s!=null&&t.c!=null)t.n(new C.dK6(t,s))
t.a.bl()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dK5.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dK6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dK8.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+2}
C.dK9.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dKj.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cyX(C.h0m(w),w)},
$S:0}
C.dKh.prototype={
$1(d){return new A.ed(new C.dKg(this.a,this.b),null)},
$S:21}
C.dKg.prototype={
$2(d,e){var w,v=null,u=this.b.a,t=u?B.dR:B.c,s=A.d("Tree display settings",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),r=A.d('How many children to show per parent before a "+ more" dropdown (0 = show all).',v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),q=this.a,p=q.a,o=A.aF(v,v,v,v,B.ahs,v,v,v,p>0?new C.dKc(q,e):v,v,v,v,v,v,v)
p=p===0?"Show all children":"Show "+p+" children, then dropdown"
w=x.p
q=A.u(A.a([r,B.aN,A.B(A.a([o,A.D(A.d(p,v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),B.L,v,v),1),A.aF(v,v,v,v,B.ai0,v,v,v,new C.dKd(q,e),v,v,v,v,v,v)],w),B.m,v,B.e,B.j,0,v,v)],w),B.F,v,B.e,B.R,0,B.p)
return A.eo(A.a([A.bG(!1,B.dd,v,v,!0,v,v,new C.dKe(d),v,v),A.bH(B.pB,new C.dKf(d),A.bk(B.bR,v,v,v,v,v,v,v,v,v,v,v))],w),v,v,t,q,v,v,v,v,s,v)},
$S:162}
C.dKc.prototype={
$0(){return this.b.$1(new C.dKb(this.a))},
$S:0}
C.dKb.prototype={
$0(){return--this.a.a},
$S:0}
C.dKd.prototype={
$0(){return this.b.$1(new C.dKa(this.a))},
$S:0}
C.dKa.prototype={
$0(){return++this.a.a},
$S:0}
C.dKe.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dKf.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dKi.prototype={
$0(){var w=this.b,v=w.d
v===$&&A.c()
w.d=v.cyK(this.a.a)
w.r.a8(0)},
$S:0}
C.dJH.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.afd(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.fVf(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+22}
C.dJI.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.f,x.P)
w.push(this.b)
v.d=u.azM(w)},
$S:0}
C.dKs.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aaK(this.b,w,this.c,null)},
$S:z+24}
C.dKm.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.dR:B.c,t=A.m(20),s=A.V(B.kY,B.aS,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.L,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ab,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.L,w,w)],o))
v=A.u(p,B.m,w,B.e,B.R,0,B.p)
return A.eo(A.a([A.bH(D.eZR,new C.dKl(d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w))],o),B.b5,w,u,v,w,s,w,new A.b5(t,B.W),r,w)},
$S:20}
C.dKl.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dJJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dJK.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dJL.prototype={
$1(d){return d.a},
$S:z+7}
C.dJM.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.K)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hO(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.azM(w)},
$S:0}
C.dJQ.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.afd(q)
w=A.T(q).k("a5<1>")
q=A.z(new A.a5(q,new C.dJO(r),w),w.k("F.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.fVf(v.e,null,r,v.f,v.r,new C.dJP(s,r),q,"Member Profile",w,t,u)},
$S:z+22}
C.dJP.prototype={
$0(){return this.a.a7h(this.b)},
$S:0}
C.dJO.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dJR.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("J<1,hO>")
w=A.z(new A.J(w,new C.dJN(this.b),v),v.k("ai.E"))
u.d=t.azM(w)},
$S:0}
C.dJN.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+27}
C.dKr.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dK2.prototype={
$1(d){return d.length!==0},
$S:3}
C.dK3.prototype={
$1(d){var w=this
return new A.ed(new C.dK1(w.a,w.b,w.c,w.d),null)},
$S:21}
C.dK1.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.dR:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aO:B.aG,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ab],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.J(o,new C.dJY(u,e,o),A.T(o).k("J<1,r>")))
p.push(B.P)
u=w.d
p.push(A.aK(v,B.U,!1,v,!0,B.q,v,A.aL(),u,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(12),B.da),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.z,!0,v,!0,v,!1,v,B.af,v,v,v,v,v,B.lB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a6,v,B.am,v,v,v,v))
p=A.u(p,B.ad,v,B.e,B.R,0,B.p)
t=w.a
return A.eo(A.a([A.bG(!1,B.dd,v,v,!0,v,v,new C.dJZ(d),v,v),A.bH(B.Hk,new C.dK_(t,u,o,e),A.bk(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.eO7,new C.dK0(t,u,o,d),A.bk(B.aS,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a3(360,v,p,v),v,v,v,v,r,v)},
$S:162}
C.dJY.prototype={
$1(d){var w=null
return A.dK(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aO:B.aG,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bB9,w,w,w,new C.dJX(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1879}
C.dJX.prototype={
$0(){return this.a.$1(new C.dJV(this.b,this.c))},
$S:0}
C.dJV.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dJZ.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dK_.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dJW(w.c,u))
v.bG(0,B.c_)}},
$S:0}
C.dJW.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dK0.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).K(!0)},
$S:0}
C.dK4.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.czo(this.b,D.rH,C.EZ(v,w.a.c))},
$S:0}
C.dKz.prototype={
$1(d){return d.as},
$S:z+1}
C.dKA.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iC(this.b,w)},
$S:0}
C.dKB.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.hO8(v)
return w.TN(v==null?null:v.a)},
$S:0}
C.dKC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hrp(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gci(k)){k=A.aM(1/0,e.a,e.b)
s=A.aM(1/0,e.c,e.d)
l.ci0(new A.ap(u,t),v.gbcv(),new A.ap(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cxF:D.cwh
q=A.H(s?B.du:D.b15,B.r,1)
p=A.m(22)
o=A.bW(0,A.b2(m,m,m,new C.b9J(s,m),B.as),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.am(B.V,m,B.a9,B.q,A.a([o,A.bW(0,A.tM(new A.M(n,n,n,n),new A.a3(u,t,new C.baB(l.d,v,l.f,w,new C.dKv(l),l.gc2y(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.an(10,new C.brH(s,new C.dKw(l,e),new C.dKx(l,e),new C.dKy(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.h,m,m,new A.o(m,m,q,k,m,new A.a8(B.b3,B.bb,B.x,r,m,m),B.n),m,m,m,O.acp,m,m,m,m)},
$S:229}
C.dKv.prototype={
$1(d){var w=this.a
w.n(new C.dKt(w,d))},
$S:2}
C.dKt.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.G(0,v)},
$S:0}
C.dKw.prototype={
$0(){var w=this.b
return this.a.b4n(1.25,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dKx.prototype={
$0(){var w=this.b
return this.a.b4n(0.8,new A.ap(A.aM(1/0,w.a,w.b),A.aM(1/0,w.c,w.d)))},
$S:0}
C.dKy.prototype={
$0(){var w=this,v=w.b
return w.a.aOn(new A.ap(A.aM(1/0,v.a,v.b),A.aM(1/0,v.c,v.d)),new A.ap(w.c,w.d),w.e.gbcv())},
$S:0}
C.dKD.prototype={
$0(){var w=this.a
return w.n(new C.dKu(w))},
$S:0}
C.dKu.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dJS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fB(new A.fu(s.c)),$async$$0)
case 2:t.wO("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.d_C.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.an(w,new C.bei(u,C.h4o(v.c,u),new C.d_B(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+28}
C.d_B.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.d_D.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.an(w,new C.bhz(d.d,d.c,u.f.q(0,d.a),new C.d_A(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+29}
C.d_A.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.faC.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.qC(new A.cQ(new A.a5(v,new C.faD(d),w.k("a5<1>")),new C.faE(),w.k("cQ<1,n>")))},
$S:z+20}
C.faD.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.faE.prototype={
$1(d){return d.a},
$S:z+7}
C.faA.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.faB.prototype={
$1(d){return d.b},
$S:z+7}
C.faH.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.qC(new A.cQ(new A.a5(v,new C.faI(d),w.k("a5<1>")),new C.faJ(),w.k("cQ<1,n>")))},
$S:z+20}
C.faI.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.faJ.prototype={
$1(d){return d.a},
$S:z+7}
C.faF.prototype={
$1(d){var w,v=A.eN([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.G(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+31}
C.faG.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.d_F.prototype={
$0(){return this.a},
$S:z+32}
C.d_W.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:248}
C.d_O.prototype={
$2(d,e){var w=this.a.cf(0,d,new C.d_P()),v=J.a6(w)
if(!v.q(w,e))v.G(w,e)},
$S:121}
C.d_P.prototype={
$0(){return A.a([],x.s)},
$S:729}
C.d_N.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eQ(w,e)
return w===!0},
$S:316}
C.d_G.prototype={
$0(){return A.a([],x.u)},
$S:z+33}
C.d_M.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.d_L.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.G(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aU(v==null?D.AE:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aU(v==null?B.U:v)
while(v.C()){t=v.gT(v)
if(e.q(0,t))continue
e.G(0,t)
t=w.h(0,t)
t=J.aU(t==null?D.AE:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1881}
C.d_H.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.d_Q.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.G(0,a9)
w=a7.b
w.m(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aU(u==null?B.U:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gT(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.G(0,s)
w.m(0,s,b0)
a7.e.m(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aU(t==null?D.AE:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.bf(w,new C.d_R(r)))w.push(r)}}B.d.bm(w,new C.d_S(a8))
B.d.aX(w,new C.d_T())
q=C.hro(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.cq)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.K)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.e7B],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gI(k)+B.d.gai(k))/2
a1=A.a([new A.A(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.m(0,a4,a3)
else a8.m(0,a9,new A.bkv(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.A(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.A(a5,a6))}}return a1},
$S:1882}
C.d_R.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.d_S.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.d_T.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+19}
C.d_U.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a6(n),v=o.c,u=-1/0,t=0;t<w.gH(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bf(v,A.a2(v).k("bf<2>")).cI(0,0,B.pN)+88-w.gI(n).a}else u=0
for(w=J.a6(n),v=o.c,t=0;t<w.gH(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.m(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.m(0,d,u)},
$S:652}
C.d_V.prototype={
$1(d){return 16+d*156},
$S:256}
C.d_E.prototype={
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
t.m(0,d,new C.Ej(r,new A.v(e-53,v)))
s=s.h(0,u)
s.toString
t.m(0,u,new C.Ej(s,new A.v(e+53,v)))}else{s=s.h(0,d)
s.toString
t.m(0,d,new C.Ej(s,new A.v(e,v)))}t=o.r.h(0,d)
t=J.aU(t==null?B.U:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Io(d,new A.v(e+t,w),s,s.length))}},
$S:191}
C.d_I.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aFJ(new A.v(v.a,v.b+28),new A.v(w.a,w.b+28),!0,null))},
$S:121}
C.d_J.prototype={
$1(d){return d.a===this.a},
$S:z+35}
C.d_K.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:730}
C.d_X.prototype={
$2(d,e){return B.k.aI(d.a,e.a)},
$S:730}
C.d_Y.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:459}
C.d_Z.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:177}
C.d0_.prototype={
$1(d){return d>=0.5},
$S:126}
C.eVs.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hI(A.aH(!1,v,!0,new A.a3(38,38,A.V(d,this.a.c?B.c:B.d3,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1884}
C.ex7.prototype={
$1(d){var w=null,v=A.m(8),u=B.bR.j(0.12),t=A.m(8)
return new A.C(B.o0,A.aH(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.eAX,B.L,w,w),B.h,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.K2,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ex6(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+36}
C.ex6.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dfd.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dfc.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mS,B.L,w,w)
return A.eo(A.a([A.bG(!1,B.dd,w,w,!0,w,w,new C.dfa(d),w,w),A.bG(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.lL,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,new C.dfb(d),w,w)],x.p),B.b5,B.Dv,w,u,D.bhu,w,D.bjn,new A.b5(v,B.W),w,w)},
$S:20}
C.dfa.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.dfb.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.dfm.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dfn.prototype={
$1(d){var w=this.a
return w.n(new C.dfl(w,d))},
$S:z+37}
C.dfl.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfo.prototype={
$1(d){var w=null
return A.p7(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dfr.prototype={
$1(d){var w=this.a
return w.n(new C.dfk(w,d))},
$S:30}
C.dfk.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dfq.prototype={
$1(d){var w=null
return A.p7(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+18}
C.dfs.prototype={
$1(d){var w=this.a
return w.n(new C.dfj(w,d))},
$S:30}
C.dfj.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dft.prototype={
$0(){var w=this.a
return w.n(new C.dfi(w))},
$S:0}
C.dfi.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dfu.prototype={
$0(){var w=this.a
return w.n(new C.dfh(w))},
$S:0}
C.dfh.prototype={
$0(){return++this.a.at},
$S:0}
C.dfv.prototype={
$0(){var w=this.a
return w.n(new C.dfg(w))},
$S:0}
C.dfg.prototype={
$0(){return--this.a.ax},
$S:0}
C.dfw.prototype={
$0(){var w=this.a
return w.n(new C.dff(w))},
$S:0}
C.dff.prototype={
$0(){return++this.a.ax},
$S:0}
C.dfx.prototype={
$1(d){var w=this.a
return w.n(new C.dfe(w,d))},
$S:9}
C.dfe.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dfp.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dfy.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.dR:B.c
v=A.m(12)
if(p)u=B.bR
else u=(q.c.a?B.dT:B.cg).j(0.85)
u=A.H(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bm:B.bv
t=A.V(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bm:B.bv
return A.D(A.aD(!1,B.X,!0,r,A.aH(!1,o,!0,A.dg(r,A.u(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.j,0,B.p),r,r,B.b9,new A.o(w,r,u,v,r,r,B.n),B.eE,r,r,r,B.jA,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dfz(q,d),r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac),1)},
$S:z+39}
C.dfz.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dfI.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.c2V.prototype={
$2(d,e){return new A.bq(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:95}
C.c31.prototype={
$1(d){return d.ac()},
$S:z+5}
C.c32.prototype={
$2(d,e){var w=J.b4(e,new C.c30(),x.a)
w=A.z(w,w.$ti.k("ai.E"))
return new A.bq(d,w,x.d2)},
$S:z+41}
C.c30.prototype={
$1(d){return d.ac()},
$S:z+21}
C.c2X.prototype={
$1(d){return C.ai2(A.Z(d,x.N,x.z))},
$S:z+8}
C.c2Y.prototype={
$1(d){return d.a.length!==0},
$S:z+2}
C.c2Z.prototype={
$1(d){return C.fMk(A.Z(d,x.N,x.z))},
$S:z+11}
C.c3_.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.c36.prototype={
$1(d){return new A.aCP(d.f.length,d.a,d.b)},
$S:z+43}
C.c37.prototype={
$2(d,e){return B.a.aI(d.c,e.c)},
$S:564}
C.c33.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+2}
C.c34.prototype={
$1(d){return d.cym(C.EZ(d,this.a))},
$S:z+44}
C.dKM.prototype={
$1(d){return C.ti(d,this.a.a.c)},
$S:z+2}
C.dKN.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dKR.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dKS.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dKJ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWw(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xl("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.oz(r.c,r.e),$async$$0)
case 4:s.xl(p)
w=5
return A.b(s.I3(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKK.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWw(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.xl("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.oz(r.c,r.e),$async$$0)
case 4:s.xl(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKL.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.T5(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.xl("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.xl("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.xl("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.I3(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.a4(j)
o=r.a
if(o.c==null){w=1
break}o.xl(B.a.e1(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dKQ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.aWv(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.xl("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).cs(A.eH(new C.dKP(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.oz(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dKP.prototype={
$1(d){var w=this.b
return new C.Y9(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+45}
C.dKO.prototype={
$1(d){return D.fcg},
$S:z+46}
C.dKU.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dKV.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dKT(w,d)
return new A.C(B.d7,new C.baF(this.b,d.c,d.a,w,null),null)},
$S:1885}
C.dKT.prototype={
$0(){return this.a.Vs(this.b.b)},
$S:0}
C.dKE.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dKF.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dKG.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dKH.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dKI.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.dKW.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.K)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a_(s,"NGMYFTSYNC2"))t=!A.dj(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).K(s)
return}},
$S:176}
C.dxd.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+47}
C.dxe.prototype={
$0(){return B.d.gI(D.a_x)},
$S:z+48}
C.dxf.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b2(A.as(A.V(this.b.d,B.c.j(0.95),w,w,D.cDm,44),w,w,w),w,w,new C.bfp(u,t,v,w),B.as)},
$S:75}
C.fq8.prototype={
$1(d){return A.p6(new C.fq7(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:138}
C.fq7.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.dR:B.c,p=A.a([new A.aa(0,B.G,B.w.j(r?0.35:0.08),B.tm,24)],x.V),o=r?B.dT:B.cg
o=A.p(t,t,B.h,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aS.j(0.25),B.bR.j(0.18)],x.O)
w=A.p(t,D.bvP,B.h,t,t,new A.o(t,t,t,A.m(12),t,new A.a8(B.a1,B.a7,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aO:B.aG,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.u(A.a([B.T,o,new A.C(E.adn,A.B(A.a([w,B.ba,A.D(A.u(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bm:B.bv,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.F,t,B.e,B.j,0,B.p),1)],u),B.m,t,B.e,B.j,0,t,t),t),A.D(A.ig(!0,t,e,B.z,D.eoD,new C.fq6(this.b,s),20,B.acY,t,B.ah,!1),1)],u),B.m,t,B.e,B.j,0,B.p),B.h,t,t,new A.o(q,t,t,B.kh,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:114}
C.fq6.prototype={
$2(d,e){var w=null,v=D.a_x[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.H(s?B.dT:B.cg,B.r,1),q=A.a([new A.aa(0,B.G,B.w.j(s?0.35:0.08),B.e6,8)],x.V),p=A.m(15),o=A.D(new C.a4_(v.a,!0,w),1),n=s?B.j7:B.iA,m=A.d(v.b,w,1,B.Z,w,w,w,A.l(w,w,s?B.aO:B.aG,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.X,!0,w,A.aH(!1,u,!0,A.eq(A.bv(p,A.u(A.a([o,A.p(w,A.u(A.a([m,A.d(v.c,w,1,B.Z,w,w,w,A.l(w,w,s?B.bm:B.bv,w,w,w,w,w,w,w,w,10,w,w,B.a0,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.F,w,B.e,B.j,0,B.p),B.h,n,w,w,w,w,w,w,B.kW,w,w,w)],l),B.ad,w,B.e,B.j,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fq5(this.a,v),w,w,w,w,w,w,w),B.h,B.K,0,w,w,w,w,w,B.ac)},
$S:73}
C.fq5.prototype={
$0(){A.a7(this.a,!1).K("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.caA.prototype={
$0(){return this.a.acY(this.b)},
$S:0}
C.fpy.prototype={
$1(d){return D.f94},
$S:z+74}
C.fwF.prototype={
$1(d){var w=this
return new C.ZT(w.a,w.b,w.c,w.d,null)},
$S:z+50}
C.fpA.prototype={
$1(d){return new C.WO(this.a,null)},
$S:z+51}
C.fpz.prototype={
$1(d){return D.fa3},
$S:z+52}
C.cTc.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cTd.prototype={
$1(d){var w=this.a
if(w.c!=null)w.n(new C.cTb(w,d))},
$S:30}
C.cTb.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.cTe.prototype={
$1(d){return this.a.ID()},
$S:2}
C.cTf.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cT8.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cT9.prototype={
$1(d){return this.a.ID()},
$S:2}
C.cTa.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cqO.prototype={
$0(){},
$S:0}
C.cqU.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.cqV.prototype={
$0(){return this.a.aJY(-1)},
$S:0}
C.cqW.prototype={
$1(d){return this.a.n(new C.cqT())},
$S:2}
C.cqT.prototype={
$0(){},
$S:0}
C.cqX.prototype={
$0(){return this.a.aJY(1)},
$S:0}
C.cqY.prototype={
$1(d){return this.a.n(new C.cqS())},
$S:2}
C.cqS.prototype={
$0(){},
$S:0}
C.cqZ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aS.j(0.2)
if(s)v=B.aS
else v=this.b.a?B.dT:B.cg
return A.tC(u,u,B.aW,r,u,new C.cqR(t,d),B.zL,s,w,u,new A.ax(v,1,B.r,-1),B.c6)},
$S:1886}
C.cqR.prototype={
$1(d){var w=this.a
return w.n(new C.cqP(w,this.b))},
$S:9}
C.cqP.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cr_.prototype={
$1(d){return this.a.n(new C.cqQ())},
$S:2}
C.cqQ.prototype={
$0(){},
$S:0}
C.cr0.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eUV.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).K(w)},
$S:2}
C.eUW.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eUX.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).K(w)},
$S:0}
C.eUT.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbsw()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b2(new A.C(D.bjm,new A.en(A.p(r,q.a.c,B.h,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.brw(p,v,this.b.a,u,t,r),r,r,B.as)},
$S:75}
C.eUU.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dG.ar(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.aq(B.aS,B.bR,w)
s.toString
s=A.a([B.aW,s,B.aS],x.O)
return A.aD(!1,B.X,!0,p,A.aH(!1,v,!0,A.eq(D.dLR,r,new A.o(r,r,A.H(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.d3(-1.2+t,-0.5),new A.d3(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.h,B.K,0,r,r,r,r,r,B.ac)},
$S:125}
C.fos.prototype={
$1(d){return A.t(d.h(0,1))+","},
$S:69}
C.euh.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eu8.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eu9.prototype={
$0(){return this.a.e=!1},
$S:0}
C.euf.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.ed(new C.eue(w,this.b),null)},
$S:21}
C.eue.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.dR:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aO:B.aG,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.ev(w,u,new A.C(B.adh,A.u(A.a([s,B.ar,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bm:B.bv,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ab,C.fS5(new C.eub(r,e),r.a),B.ay,A.B(A.a([A.D(A.dU(B.dd,new C.euc(d),w),1),B.av,A.D(A.bH(B.R4,new C.eud(r,d),A.bk(B.aS,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.j,0,w,w)],q),B.ad,w,B.e,B.R,0,B.p),w),w,w,w,w,B.cX,w,new A.b5(t,B.W),w)},
$S:97}
C.eub.prototype={
$1(d){return this.b.$1(new C.eua(this.a,d))},
$S:30}
C.eua.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.euc.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eud.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).K(w)
return null},
$S:0}
C.eug.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.QR(this.b)},
$S:0}
C.eu3.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.z(u.d,x.Q)
w.push(this.b)
v.d=u.b6d(w)},
$S:0}
C.eu7.prototype={
$1(d){return this.beV(d)},
beV(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Jz(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iC(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.eu6.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("a5<1>")
w=A.z(new A.a5(w,new C.eu5(this.b),v),v.k("F.E"))
u.d=t.b6d(w)},
$S:0}
C.eu5.prototype={
$1(d){return d.a!==this.a.a},
$S:z+16}
C.eui.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iC(this.b,w)},
$S:0}
C.euj.prototype={
$1(d){return this.a.bwr(d,this.b)},
$S:z+55}
C.eu4.prototype={
$0(){return this.a.a7g(this.b)},
$S:0}
C.fwx.prototype={
$1(d){return new C.ab4(this.a,this.b,this.c,null)},
$S:z+56}
C.eul.prototype={
$0(){return this.a.Y0(this.b)},
$S:0}
C.eum.prototype={
$0(){return this.a.Oc(this.b)},
$S:0}
C.eun.prototype={
$0(){return this.a.D7(this.b)},
$S:0}
C.euo.prototype={
$0(){return this.a.Y1(this.b)},
$S:0}
C.euk.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.etZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eu_.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eu0.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
C.eu2.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.p9(),$async$$0)
case 2:if(t.c!=null)t.n(new C.eu1(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eu1.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.euL.prototype={
$2(d,e){return d+e.gw3()},
$S:z+59}
C.euH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.euI.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eus.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.dR:B.c,s=A.m(24),r=A.p(v,D.bwe,B.h,v,v,new A.o(B.aH.j(u?0.18:0.08),v,A.H(B.aH.j(0.28),B.r,1),v,v,v,B.a5),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aO:B.aG,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bm:B.bv,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.L,v,v),o=u?B.aO:B.aG
u=u?B.dT:B.cg
w=x.p
return A.ev(v,t,new A.C(B.wu,A.u(A.a([r,B.aN,q,B.P,p,B.d1,A.B(A.a([A.D(A.dU(B.mW,new C.euq(d),A.d9(v,v,v,v,v,v,v,v,v,o,v,v,B.eU,v,new A.b5(A.m(14),B.W),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.av,A.D(A.bH(D.f2g,new C.eur(d),A.bk(B.aH,v,v,v,v,v,B.eU,v,new A.b5(A.m(14),B.W),v,v,v)),1)],w),B.m,v,B.e,B.j,0,v,v)],w),B.m,v,B.e,B.R,0,B.p),v),v,v,v,v,B.cX,v,new A.b5(s,B.W),v)},
$S:46}
C.euq.prototype={
$0(){A.a7(this.a,!1).K(!1)
return null},
$S:0}
C.eur.prototype={
$0(){A.a7(this.a,!1).K(!0)
return null},
$S:0}
C.euB.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.dR:B.c,i=A.m(28),h=A.a([new A.aa(0,B.G,B.w.j(k?0.35:0.08),B.fz,28)],x.V),g=k?D.cJp:B.ZY,f=x.p
g=A.p(m,A.u(A.a([A.p(m,m,B.h,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.ay,D.ejk,B.au,new A.bF(B.a1,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cp,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.j,0,B.p),B.h,m,m,new A.o(m,m,m,m,m,new A.a8(B.ax,B.aC,B.x,g,m,m),B.n),m,m,m,m,E.adk,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.D(v.b_C(B.b0,B.iH,new C.euy(v,d),l,"Camera import","Scan QR"),1),B.av,A.D(v.b_C(B.cE,M.x8,new C.euz(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aH.j(k?0.14:0.06)
q=A.m(16)
p=A.H(B.aH.j(0.28),B.r,1)
o=A.p(m,D.bvE,B.h,m,m,new A.o(B.aH.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bT,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aO:B.aG,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.D(A.u(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bm:B.bv,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.F,m,B.e,B.j,0,B.p),1)
return A.br(!0,new A.C(B.ub,A.p(m,A.u(A.a([g,new A.C(B.adi,A.u(A.a([w,B.T,u,B.bs,t,B.T,A.aD(!1,B.X,!0,m,A.aH(!1,s,!0,A.p(m,A.B(A.a([o,B.ba,n,A.V(B.ek,k?B.bm:B.bv,m,m,m,m)],f),B.m,m,B.e,B.j,0,m,m),B.h,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bA,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.euA(v,d,l),m,m,m,m,m,m,m),B.h,B.K,0,m,m,m,m,m,B.ac)],f),B.F,m,B.e,B.j,0,B.p),m)],f),B.m,m,B.e,B.R,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:34}
C.euy.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.uD("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.euz.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.uD("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.euA.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).K(null)
w=2
return A.b(u.a.M6(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.euw.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.dR:B.c,m=A.m(24),l=A.a([new A.aa(0,B.G,B.w.j(o?0.35:0.08),B.eI,24)],x.V),k=o?B.dT:B.cg
k=A.p(q,q,B.h,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bm:B.bv
u=A.bv(w,new A.a3(48,48,C.aMR(!0,A.m(12),48,P.KA,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.Z,q,q,q,A.l(q,q,o?B.aO:B.aG,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.zA(v.gw3())
s=x.p
r=this.a
return A.br(!0,new A.C(B.ub,A.p(q,A.u(A.a([B.T,k,new A.C(D.adf,A.B(A.a([u,B.ba,A.D(A.u(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bm:B.bv,q,q,q,q,q,q,q,q,12,q,q,B.a0,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.F,q,B.e,B.j,0,B.p),1)],s),B.m,q,B.e,B.j,0,q,q),q),B.zo,r.ccq(B.rZ,B.aS,new C.euu(d),p,"QR code or backup file","Transfer project"),r.aXH(!0,B.e4,B.aH,new C.euv(d),p,"Remove from this device","Delete project"),B.T],s),B.m,q,B.e,B.R,0,B.p),B.h,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:34}
C.euu.prototype={
$0(){A.a7(this.a,!1).K("transfer")
return null},
$S:0}
C.euv.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
C.eux.prototype={
$1(d){return this.beW(d)},
beW(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Jz(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.uP(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+17}
C.euO.prototype={
$0(){var w=this.a
w.a.bl()
w.n(new C.euN(w))},
$S:0}
C.euN.prototype={
$0(){return this.a.r++},
$S:0}
C.euP.prototype={
$0(){var w=this.a
return w.n(new C.euM(w))},
$S:0}
C.euM.prototype={
$0(){return this.a.r++},
$S:0}
C.eup.prototype={
$0(){var w=this.a.c
w.toString
return A.iC(w,null)},
$S:0}
C.eut.prototype={
$0(){return this.a.c5Y(this.b)},
$S:0}
C.euK.prototype={
$0(){var w=this.a
return w.n(new C.euJ(w,this.b))},
$S:0}
C.euJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.euE.prototype={
$0(){return this.a.uD("scan")},
$S:0}
C.euF.prototype={
$0(){return this.a.uD("file")},
$S:0}
C.euG.prototype={
$1(d){return this.a.ccr(d,this.b)},
$S:z+60}
C.euD.prototype={
$0(){return this.a.Db(this.b)},
$S:0}
C.euC.prototype={
$0(){return this.a.Yu(this.b,this.c)},
$S:0}
C.cqf.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+61}
C.cqe.prototype={
$1(d){return d.ac()},
$S:z+62}
C.cqc.prototype={
$1(d){return C.ha9(A.Z(d,x.N,x.z))},
$S:z+63}
C.cqd.prototype={
$1(d){return d.a.length!==0},
$S:z+16}
C.f9U.prototype={
$1(d){return d.y===D.k_},
$S:z+2}
C.fwV.prototype={
$1(d){return C.bxg(d,this.a)},
$S:z+2}
C.f95.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.bIS.prototype={
$1(d){return!d.as},
$S:z+1}
C.bIR.prototype={
$1(d){return d.ac()},
$S:z+15}
C.bIO.prototype={
$1(d){return C.fMl(A.Z(d,x.N,x.z))},
$S:z+14}
C.bIP.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bIQ.prototype={
$1(d){return J.k(d)},
$S:17}
C.f1g.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+13}
C.eY8.prototype={
$1(d){return C.fD5(A.Z(d,x.N,x.z))},
$S:z+67}
C.eY9.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+9}
C.eYa.prototype={
$2(d,e){return e.e.aI(0,d.e)},
$S:z+13}
C.fpp.prototype={
$1(d){return J.k(d)},
$S:17}
C.fpq.prototype={
$1(d){return d.a},
$S:z+69}
C.fpr.prototype={
$1(d){return d.length!==0},
$S:3}
C.fps.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+9}
C.fpt.prototype={
$1(d){return d.QR(null).ac()},
$S:z+70}
C.fwT.prototype={
$1(d){return d.a===this.a.a},
$S:z+9}
C.fal.prototype={
$1(d){return d.a===this.a},
$S:z+9}
C.fcv.prototype={
$1(d){return C.ai2(A.Z(d,x.N,x.z))},
$S:z+8}
C.fcw.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fcx.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fcy.prototype={
$1(d){return d.ac()},
$S:z+5}
C.fcz.prototype={
$1(d){return C.ti(d,this.a)},
$S:z+2}
C.fpc.prototype={
$1(d){return C.ti(d,this.a)},
$S:z+2}
C.fwO.prototype={
$1(d){return C.ai2(A.Z(d,x.N,x.z))},
$S:z+8}
C.fwP.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fwQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.fa2.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fa3.prototype={
$1(d){return d.a===this.a},
$S:z+2}
C.fwZ.prototype={
$1(d){return!d.as},
$S:z+1}
C.f9E.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.f9F.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.f9G.prototype={
$2(d,e){return B.o.aI(d.Q,e.Q)},
$S:z+19}
C.fwG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fdg.prototype={
$1(d){return d.Q},
$S:z+72}
C.fp8.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fcs.prototype={
$1(d){return C.ai2(A.Z(d,x.N,x.z))},
$S:z+8}
C.fct.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.fcu.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.fp6.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eYE.prototype={
$1(d){return d.length!==0},
$S:3}
C.eYF.prototype={
$1(d){return C.fMl(A.Z(d,x.N,x.z))},
$S:z+14}
C.eYG.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.eYH.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.eYI.prototype={
$1(d){return d.length!==0},
$S:3}
C.eYV.prototype={
$2(d,e){return d.eN(new C.eYW(e))},
$S:1887}
C.eYW.prototype={
$1(d){$.ak.$1("[family_trees] "+this.a+" fetch: "+A.t(d))
return B.c3},
$S:1888}
C.eYS.prototype={
$1(d){return C.hvQ(d,this.a)},
$S:z+73}
C.eYT.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+2}
C.eYU.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f1V.prototype={
$1(d){return d.a},
$S:z+49}
C.f1W.prototype={
$1(d){return d.length!==0},
$S:3}
C.f1X.prototype={
$2(d,e){return e.r.aI(0,d.r)},
$S:z+6}
C.f3X.prototype={
$1(d){return d.ac()},
$S:z+5}
C.f8s.prototype={
$1(d){return C.fXu(d,C.EZ(d,this.a))},
$S:z+5}
C.f8t.prototype={
$1(d){return C.fXv(d,C.EZ(d,this.a))},
$S:z+5};(function aliases(){var w=C.aI3.prototype
w.boT=w.p
w=C.aK9.prototype
w.bra=w.p
w=C.aKa.prototype
w.brb=w.p})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a.installInstanceTearOff,t=a._static_1
w(C.azH.prototype,"gc9t","c9u",25)
var s
w(s=C.awO.prototype,"gc2E","c2F",42)
v(s,"gaIe","LF",0)
v(s,"gchm","zL",0)
v(s,"gbE_","Mk",0)
v(s,"gcuP","xm",0)
v(s,"gcbp","Z9",0)
v(s,"gbzu","M2",0)
v(s,"gbEq","UV",0)
w(s,"gbIR","bIS",71)
v(s,"gbu7","yP",0)
v(C.awP.prototype,"gcuL","E1",0)
v(s=C.aAh.prototype,"gacA","uQ",0)
v(s,"gc5f","Ym",0)
v(s,"gaMd","Gx",0)
v(s=C.aAe.prototype,"gcr7","a0a",0)
v(s,"gacA","uQ",0)
v(s,"gcfv","ZP",0)
v(s,"gc6a","Yz",0)
w(s,"gc2y","c2z",30)
v(s,"gbEh","GC",0)
v(s,"gcs0","cs1",3)
v(s,"gbV5","Wy",0)
w(s,"gc14","c15",23)
v(s,"gc5_","c50",3)
v(s=C.ayG.prototype,"gbZW","NM",0)
v(s,"gbZY","bZZ",3)
v(s,"gbAZ","a6U",0)
v(s=C.aAg.prototype,"gbHp","Vo",0)
v(s,"gbRz","W1",0)
v(s,"gclC","a_D",0)
v(s,"gchW","a_f",0)
v(C.aAf.prototype,"gchE","aek",0)
v(C.apB.prototype,"gc12","Y_",0)
v(C.avB.prototype,"ga_V","ID",3)
v(C.avA.prototype,"ga_V","ID",3)
v(C.aum.prototype,"ga_V","ID",3)
v(s=C.aBH.prototype,"gaX5","OH",0)
v(s,"gbsZ","TH",0)
v(s,"gc5Z","c6_",3)
w(C.aBG.prototype,"gc1T","c1U",57)
u(C.aBI.prototype,"gaM7",0,0,null,["$1","$0"],["Gw","bCe"],58,0,0)
t(C,"h3D","hF0",15)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aB,[C.alz,C.tA,C.mM,C.G1,C.acf,C.Ig,C.tB,C.Io,C.Ej,C.baD,C.aFJ,C.amJ,C.d00,C.lh,C.aPI,C.aPH,C.aNM,C.t4,C.qn,C.l1,C.hO,C.kl,C.aDJ])
u(A.i2,[C.fh6,C.fh5,C.fh7,C.fq1,C.f7q,C.f7r,C.f7w,C.feQ,C.feP,C.feO,C.bXo,C.fqx,C.fqp,C.fqB,C.faa,C.dxU,C.dxP,C.dxQ,C.dxs,C.dxo,C.dy8,C.dy9,C.dy2,C.dy3,C.dya,C.dyb,C.fay,C.fcp,C.fcq,C.fpa,C.fwN,C.fa1,C.fpG,C.d_d,C.cZA,C.cZJ,C.d__,C.cZF,C.cZL,C.cZC,C.cZP,C.cZQ,C.cZO,C.d_4,C.d_3,C.d0F,C.d0G,C.d0H,C.d_r,C.d_w,C.d_v,C.cyZ,C.cz0,C.cSq,C.cSP,C.cSQ,C.cST,C.cSV,C.cSW,C.cSX,C.cSZ,C.cT_,C.dL_,C.dKp,C.dKk,C.dJT,C.dK5,C.dK8,C.dKh,C.dJH,C.dKs,C.dKm,C.dJJ,C.dJK,C.dJL,C.dJQ,C.dJO,C.dJN,C.dK2,C.dK3,C.dJY,C.dKz,C.dKv,C.d_C,C.d_D,C.faC,C.faD,C.faE,C.faA,C.faB,C.faH,C.faI,C.faJ,C.faF,C.faG,C.d_W,C.d_M,C.d_H,C.d_R,C.d_S,C.d_V,C.d_J,C.d_Y,C.d_Z,C.d0_,C.eVs,C.ex7,C.dfc,C.dfm,C.dfn,C.dfo,C.dfr,C.dfq,C.dfs,C.dfx,C.dfy,C.c31,C.c30,C.c2X,C.c2Y,C.c2Z,C.c3_,C.c36,C.c33,C.c34,C.dKM,C.dKP,C.dKO,C.dKV,C.dKW,C.dxd,C.fq8,C.fpy,C.fwF,C.fpA,C.fpz,C.cTd,C.cTe,C.cT9,C.cqW,C.cqY,C.cqZ,C.cqR,C.cr_,C.eUV,C.fos,C.euf,C.eub,C.eu7,C.eu5,C.euj,C.fwx,C.eus,C.euB,C.euw,C.eux,C.euG,C.cqe,C.cqc,C.cqd,C.f9U,C.fwV,C.f95,C.bIS,C.bIR,C.bIO,C.bIP,C.bIQ,C.eY8,C.eY9,C.fpp,C.fpq,C.fpr,C.fps,C.fpt,C.fwT,C.fal,C.fcv,C.fcw,C.fcy,C.fcz,C.fpc,C.fwO,C.fwP,C.fwQ,C.fa2,C.fa3,C.fwZ,C.f9E,C.f9F,C.fwG,C.fdg,C.fp8,C.fcs,C.fct,C.fp6,C.eYE,C.eYF,C.eYG,C.eYH,C.eYI,C.eYW,C.eYS,C.eYT,C.f1V,C.f1W,C.f3X,C.f8s,C.f8t])
u(A.ar,[C.aV3,C.ai0,C.aQV,C.Wt,C.b6o,C.baB,C.bei,C.brH,C.bhz,C.aaJ,C.beh,C.aaI,C.beg,C.ayH,C.aEM,C.aaK,C.Ic,C.baC,C.aa0,C.baA,C.baF,C.aV1,C.apB,C.ab4])
u(A.n4,[C.b7_,C.b8a,C.b81,C.aDE,C.bdl,C.baE,C.b9J,C.bfp,C.brw])
u(A.jk,[C.fqu,C.fqv,C.fqw,C.fqn,C.fqo,C.fqz,C.fqA,C.dy5,C.dxS,C.dxV,C.dxz,C.dxA,C.dxB,C.dxy,C.dxG,C.dxx,C.dxH,C.dxI,C.dxw,C.dxJ,C.dxv,C.dxK,C.dxu,C.dxL,C.dxm,C.dxn,C.dxt,C.dxM,C.dxr,C.dxN,C.dxq,C.dxC,C.dxp,C.dxD,C.dxl,C.dxE,C.dxF,C.dy6,C.dy7,C.dxW,C.dxX,C.dxY,C.dxZ,C.dy_,C.dy0,C.dy1,C.dyd,C.dy4,C.faz,C.cZy,C.cZw,C.cZx,C.cZz,C.d_c,C.d_1,C.cZZ,C.cZB,C.d_2,C.cZH,C.cZI,C.cZK,C.d_0,C.cZG,C.cZM,C.d_9,C.cZW,C.cZV,C.cZX,C.cZY,C.cZR,C.cZT,C.cZU,C.cZN,C.d_5,C.d_8,C.cZD,C.cZE,C.d0E,C.d0D,C.d0C,C.d0B,C.d0I,C.d0A,C.d0J,C.d_s,C.d_t,C.d_u,C.d_x,C.d_q,C.d_p,C.cz_,C.cSp,C.cSC,C.cSB,C.cSR,C.cSA,C.cSS,C.cSz,C.cSy,C.cSU,C.cSx,C.cSK,C.cSJ,C.cT0,C.dKZ,C.dKY,C.dL0,C.dL1,C.dL2,C.dKX,C.dL4,C.dL3,C.dKn,C.dKo,C.dKq,C.dJU,C.dK7,C.dK6,C.dK9,C.dKj,C.dKc,C.dKb,C.dKd,C.dKa,C.dKe,C.dKf,C.dKi,C.dJI,C.dKl,C.dJM,C.dJP,C.dJR,C.dKr,C.dJX,C.dJV,C.dJZ,C.dK_,C.dJW,C.dK0,C.dK4,C.dKA,C.dKB,C.dKt,C.dKw,C.dKx,C.dKy,C.dKD,C.dKu,C.dJS,C.d_B,C.d_A,C.d_F,C.d_P,C.d_G,C.ex6,C.dfd,C.dfa,C.dfb,C.dfl,C.dfk,C.dfj,C.dft,C.dfi,C.dfu,C.dfh,C.dfv,C.dfg,C.dfw,C.dff,C.dfe,C.dfp,C.dfz,C.dfI,C.dKN,C.dKR,C.dKS,C.dKJ,C.dKK,C.dKL,C.dKQ,C.dKU,C.dKT,C.dKE,C.dKF,C.dKG,C.dKH,C.dKI,C.dxe,C.fq5,C.caA,C.cTc,C.cTb,C.cTf,C.cT8,C.cTa,C.cqO,C.cqU,C.cqV,C.cqT,C.cqX,C.cqS,C.cqP,C.cqQ,C.cr0,C.eUW,C.eUX,C.euh,C.eu8,C.eu9,C.eua,C.euc,C.eud,C.eug,C.eu3,C.eu6,C.eui,C.eu4,C.eul,C.eum,C.eun,C.euo,C.euk,C.etZ,C.eu_,C.eu0,C.eu2,C.eu1,C.euH,C.euI,C.euq,C.eur,C.euy,C.euz,C.euA,C.euu,C.euv,C.euO,C.euN,C.euP,C.euM,C.eup,C.eut,C.euK,C.euJ,C.euE,C.euF,C.euD,C.euC])
u(A.ae,[C.alG,C.QM,C.Xb,C.Xf,C.Xd,C.WM,C.amM,C.amG,C.XP,C.amK,C.Y9,C.Ya,C.a4_,C.WO,C.WN,C.Wk,C.ZT,C.E7,C.auf,C.apA,C.apu,C.apz,C.Mh])
u(A.ag,[C.azH,C.bay,C.awO,C.baT,C.awP,C.b88,C.aAh,C.aAe,C.ayG,C.aAg,C.aAf,C.bfH,C.aI3,C.avB,C.avA,C.aum,C.brz,C.aK9,C.aKa,C.aBH,C.bh2,C.aBG,C.btj])
u(A.kx,[C.dxR,C.dxT,C.dxO,C.dyc,C.fcr,C.bIN,C.d_b,C.d_a,C.cZS,C.d_6,C.d_7,C.d_y,C.dKg,C.dK1,C.dKC,C.d_O,C.d_N,C.d_L,C.d_Q,C.d_T,C.d_U,C.d_E,C.d_I,C.d_K,C.d_X,C.c2V,C.c32,C.c37,C.dxf,C.fq7,C.fq6,C.eUT,C.eUU,C.eue,C.euL,C.cqf,C.f1g,C.eYa,C.fcx,C.f9G,C.fcu,C.eYV,C.eYU,C.f1X])
t(C.bfq,C.aI3)
u(A.mb,[C.a94,C.aGq,C.G2,C.ai1,C.cqg,C.cqh])
t(C.brx,C.aK9)
t(C.bry,C.aKa)
t(C.aBI,C.btj)
t(C.b4S,A.b4H)
t(C.brA,A.a3F)
t(C.b4R,C.brA)
w(C.aI3,A.eJ)
w(C.aK9,A.c7)
w(C.aKa,A.c7)
v(C.btj,A.eu)
v(C.brA,A.iQ)})()
A.kd(b.typeUniverse,JSON.parse('{"aV3":{"ar":[],"r":[]},"b7_":{"aA":[]},"alG":{"ae":[],"r":[]},"azH":{"ag":["alG"]},"QM":{"ae":[],"r":[]},"ai0":{"ar":[],"r":[]},"aQV":{"ar":[],"r":[]},"bay":{"ag":["QM"]},"Xb":{"ae":[],"r":[]},"Xf":{"ae":[],"r":[]},"Xd":{"ae":[],"r":[]},"WM":{"ae":[],"r":[]},"awO":{"ag":["Xb"]},"baT":{"ag":["Xf"]},"awP":{"ag":["Xd"]},"Wt":{"ar":[],"r":[]},"b8a":{"aA":[]},"b81":{"aA":[]},"b88":{"ag":["WM"]},"aDE":{"aA":[]},"bdl":{"aA":[]},"b6o":{"ar":[],"r":[]},"amM":{"ae":[],"r":[]},"amG":{"ae":[],"r":[]},"XP":{"ae":[],"r":[]},"aaK":{"ar":[],"r":[]},"aAh":{"ag":["amM"]},"aAe":{"ag":["amG"]},"baB":{"ar":[],"r":[]},"baE":{"aA":[]},"bei":{"ar":[],"r":[]},"b9J":{"aA":[]},"brH":{"ar":[],"r":[]},"bhz":{"ar":[],"r":[]},"ayG":{"ag":["XP"]},"aaJ":{"ar":[],"r":[]},"beh":{"ar":[],"r":[]},"aaI":{"ar":[],"r":[]},"beg":{"ar":[],"r":[]},"ayH":{"ar":[],"r":[]},"aEM":{"ar":[],"r":[]},"Ic":{"ar":[],"r":[]},"amK":{"ae":[],"r":[]},"Y9":{"ae":[],"r":[]},"Ya":{"ae":[],"r":[]},"aAg":{"ag":["amK"]},"baC":{"ar":[],"r":[]},"aa0":{"ar":[],"r":[]},"baA":{"ar":[],"r":[]},"baF":{"ar":[],"r":[]},"aAf":{"ag":["Y9"]},"bfH":{"ag":["Ya"]},"aV1":{"ar":[],"r":[]},"a4_":{"ae":[],"r":[]},"bfq":{"ag":["a4_"]},"bfp":{"aA":[]},"apB":{"ar":[],"r":[]},"WO":{"ae":[],"r":[]},"WN":{"ae":[],"r":[]},"Wk":{"ae":[],"r":[]},"ZT":{"ae":[],"r":[]},"avB":{"ag":["WO"]},"avA":{"ag":["WN"]},"aum":{"ag":["Wk"]},"brz":{"ag":["ZT"]},"E7":{"ae":[],"r":[]},"auf":{"ae":[],"r":[]},"brx":{"ag":["E7"]},"bry":{"ag":["auf"]},"brw":{"aA":[]},"apA":{"ae":[],"r":[]},"aBH":{"ag":["apA"]},"ab4":{"ar":[],"r":[]},"apu":{"ae":[],"r":[]},"apz":{"ae":[],"r":[]},"bh2":{"ag":["apu"]},"aBG":{"ag":["apz"]},"Mh":{"ae":[],"r":[]},"aBI":{"ag":["Mh"],"eu":[]},"b4R":{"iQ":[],"f4":[]}}'))
var y={a:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',j:"AI is not available right now. Please try again later.",l:"No internet connection. Try again when you are online.",k:"The AI could not do that just now. Nothing was changed.",i:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.az
return{e2:w("aNM"),Q:w("qn"),n:w("bt<n,n>"),c5:w("aPH"),dY:w("aPI"),d:w("ep<n?>"),e:w("G1"),B:w("mM"),P:w("hO"),k:w("kl"),x:w("au<~>"),f5:w("N<afX>"),V:w("N<aa>"),t:w("N<qn>"),O:w("N<x>"),ac:w("N<ep<n?>>"),I:w("N<mM>"),u:w("N<hO>"),_:w("N<kl>"),cl:w("N<au<al<a0<n,@>>>>"),R:w("N<mP>"),cq:w("N<al<+(Q,Q)>>"),ez:w("N<a0<n,aB>>"),gE:w("N<a0<n,n>>"),c7:w("N<a0<n,@>>"),fD:w("N<m0>"),bp:w("N<nO>"),g:w("N<v>"),v:w("N<hw>"),L:w("N<+(n,n)>"),G:w("N<+(Q,Q)>"),bF:w("N<+count,id,name(I,n,n)>"),A:w("N<cJ>"),s:w("N<n>"),aS:w("N<iG>"),p:w("N<r>"),C:w("N<f4>"),D:w("N<l1>"),fp:w("N<Ig>"),M:w("N<Io>"),gZ:w("N<aDJ>"),Y:w("N<acf>"),E:w("N<aFJ>"),F:w("N<Q>"),dC:w("N<I>"),dS:w("N<aA?>"),d4:w("N<n?>"),J:w("cn<ag<ae>>"),b:w("al<mM>"),do:w("al<hO>"),r:w("al<kl>"),U:w("al<a0<n,@>>"),gk:w("al<+(n,n)>"),bC:w("al<+count,id,name(I,n,n)>"),h:w("al<n>"),c:w("al<l1>"),j:w("al<@>"),fK:w("bq<n,n>"),d2:w("bq<n,al<a0<n,@>>>"),a:w("a0<n,@>"),f:w("a0<@,@>"),gv:w("J<n,G3>"),w:w("iA"),g2:w("qG"),bV:w("alz"),fL:w("co"),K:w("aB"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),d9:w("+dx,hidden(Q,al<hO>)"),cs:w("+count,id,name(I,n,n)"),N:w("n"),e7:w("bm<Q>"),gc:w("dz"),b4:w("cv<I>"),W:w("k1<n>"),l:w("r"),cM:w("f4"),i:w("l1"),cc:w("Ej"),bw:w("aaI<n?>"),cy:w("Iq"),q:w("mz"),y:w("R"),gR:w("Q"),z:w("@"),S:w("I"),eK:w("al<kl>?"),m:w("amJ?"),cT:w("v?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,I)?"),X:w("+qrPayload,token,usesRemaining(n,n,I)?"),gF:w("+members,trees,viewOnly(I,I,R)?"),Z:w("q0?"),T:w("n?"),aD:w("dz?"),o:w("l1?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aP5=new A.bu(B.fV,B.bC,B.fV,B.bC)
D.a6g=new A.bu(B.fV,B.jK,B.fV,B.jK)
D.aPh=new A.bu(B.jL,B.bC,B.bC,B.bC)
D.aPl=new A.ax(B.cW,1.4,B.r,-1)
D.aPv=new A.ax(B.aj,1,B.r,-1)
D.aQR=new A.aW(0,1/0,64,1/0)
D.aQU=new A.aW(0,84,0,1/0)
D.asd=w([B.lN,B.q6,B.c],x.O)
D.bFQ=new A.a8(B.ax,B.aC,B.x,D.asd,null,null)
D.aRH=new A.o(null,null,null,null,null,D.bFQ,B.n)
D.cIW=w([B.aS,B.bR],x.O)
D.bHN=new A.a8(B.b3,B.bb,B.x,D.cIW,null,null)
D.aRY=new A.o(null,null,null,null,null,D.bHN,B.n)
D.aXM=new A.f9(null,null,null,null,null,E.jt,null,null,null,null)
D.a7z=new A.cw(B.B,null,null,D.aXM,null)
D.jU=new A.x(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.t)
D.ez1=new A.G(!0,D.jU,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eR6=new A.w("No books on the shelf yet.",null,D.ez1,null,null,null,null,null,null,null,null,null)
D.dLS=new A.C(B.nl,D.eR6,null)
D.aWp=new A.cw(B.B,null,null,D.dLS,null)
D.aXd=new A.cw(B.B,null,null,X.SO,null)
D.aZ6=new A.x(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.t)
D.aZt=new A.x(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.t)
D.a8t=new A.x(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.t)
D.b0R=new A.x(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.t)
D.b15=new A.x(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.t)
D.a9y=new A.x(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.t)
D.b4v=new A.x(1,1,0.7058823529411765,0.32941176470588235,B.t)
D.b4Q=new A.x(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.t)
D.CX=new A.x(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.t)
D.b6c=new A.x(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.t)
D.b8b=new A.x(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.t)
D.ab1=new A.x(1,0.10196078431372549,0.1411764705882353,0.2,B.t)
D.eM0=new A.w("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bch=new A.ep(null,D.eM0,B.eR,null,x.d)
D.eU3=new A.w("None",null,null,null,null,null,null,null,null,null,null,null)
D.bcj=new A.ep(null,D.eU3,B.eR,null,x.d)
D.bcR=new A.b7(38e5)
D.bdC=new A.i3(0,10,0,10)
D.bdM=new A.M(0,1,0,0)
D.bdV=new A.i3(0,4,0,4)
D.beb=new A.M(10,10,14,10)
D.bel=new A.i3(10,4,10,4)
D.beu=new A.i3(10,8,10,8)
D.bev=new A.M(10,8,8,8)
D.beX=new A.M(12,6,12,2)
D.bfd=new A.M(14,10,6,6)
D.bfe=new A.M(14,12,14,0)
D.bfi=new A.M(14,12,14,8)
D.bfl=new A.M(14,12,8,14)
D.bfp=new A.i3(14,14,14,14)
D.bg4=new A.M(16,2,16,10)
D.bge=new A.M(16,6,16,30)
D.bgg=new A.M(16,6,16,8)
D.adf=new A.M(18,16,18,8)
D.bgR=new A.M(18,20,18,22)
D.adj=new A.M(18,24,18,24)
D.bgX=new A.M(18,30,18,30)
D.bhe=new A.M(20,10,12,20)
D.bhs=new A.M(20,18,16,18)
D.bhu=new A.M(20,18,20,6)
D.bii=new A.M(24,32,24,28)
D.bij=new A.M(24,36,24,32)
D.bim=new A.M(26,26,24,14)
D.biA=new A.M(2,4,2,8)
D.biE=new A.M(30,0,30,0)
D.biP=new A.M(38,22,22,22)
D.adB=new A.M(40,24,24,24)
D.biR=new A.i3(40,40,40,40)
D.biT=new A.M(46,30,30,30)
D.adE=new A.M(4,0,0,8)
D.bji=new A.M(56,40,40,40)
D.bjm=new A.M(1.25,1.25,1.25,1.25)
D.bjn=new A.M(60,0,60,0)
D.bjq=new A.M(6,14,6,16)
D.bjC=new A.i3(7,3,7,3)
D.bk2=new A.M(8,9,8,9)
D.bk6=new A.M(5,1.5,5,1.5)
D.bkg=new A.M(6,2.5,6,2.5)
D.f47=new A.w("Signature",null,B.mT,null,null,null,null,null,null,null,null,null)
D.bky=new A.bE(1,B.bn,D.f47,null)
D.f1r=new A.w("Tell the AI what to fix",null,B.dP,null,null,null,null,null,null,null,null,null)
D.blf=new A.bE(1,B.bn,D.f1r,null)
D.eFZ=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3j=new A.w("Worksheets",null,D.eFZ,null,null,null,null,null,null,null,null,null)
D.eG6=new A.G(!0,E.a89,null,null,null,null,13,B.cp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2e=new A.w("Track your project spending",null,D.eG6,null,null,null,null,null,null,null,null,null)
D.cBG=w([D.f3j,B.au,D.f2e],x.p)
D.baA=new A.fj(B.ah,B.e,B.j,B.F,null,B.p,null,0,D.cBG,null)
D.blk=new A.bE(1,B.bn,D.baA,null)
D.eBu=new A.G(!0,E.jt,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLf=new A.w("FAMILY LIBRARY",null,D.eBu,null,null,null,null,null,null,null,null,null)
D.blz=new A.bE(1,B.bn,D.eLf,null)
D.Kf=new C.G1("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.Wi=new C.G2(0,"male")
D.aeu=new C.G2(1,"female")
D.wC=new C.G2(2,"unknown")
D.rH=new C.ai1(0,"owner")
D.Kg=new C.ai1(1,"editor")
D.k_=new C.ai1(2,"viewer")
D.afd=new A.a_(61199,"MaterialIcons",!1)
D.bnY=new A.a_(61504,"MaterialIcons",!1)
D.bnZ=new A.a_(61505,"MaterialIcons",!1)
D.bo0=new A.a_(61587,"MaterialIcons",!1)
D.bo6=new A.a_(61890,"MaterialIcons",!1)
D.bp_=new A.a_(63034,"MaterialIcons",!0)
D.bpQ=new A.a_(63429,"MaterialIcons",!1)
D.ahl=new A.a_(984520,"MaterialIcons",!1)
D.bow=new A.a_(62776,"MaterialIcons",!1)
D.bs9=new A.ac(D.bow,26,B.aW,null,null,null)
D.bmX=new A.a_(57648,"MaterialIcons",!1)
D.bsr=new A.ac(D.bmX,14,B.c,null,null,null)
D.bsJ=new A.ac(B.E3,17,null,null,null,null)
D.bte=new A.ac(E.X3,null,null,null,null,null)
D.bth=new A.ac(B.iY,18,E.jt,null,null,null)
D.WO=new A.a_(62044,"MaterialIcons",!1)
D.btn=new A.ac(D.WO,null,B.aS,null,null,null)
D.bud=new A.ac(B.dO,16,null,null,null,null)
D.buk=new A.ac(D.WO,32,B.aS,null,null,null)
D.buC=new A.ac(E.afe,18,B.cW,null,null,null)
D.bvE=new A.ac(B.Ef,22,B.aH,null,null,null)
D.bvP=new A.ac(B.dO,22,B.aW,null,null,null)
D.bw_=new A.ac(N.WT,22,B.c,null,null,null)
D.bw4=new A.ac(B.rS,52,B.c,null,null,null)
D.bwe=new A.ac(B.Ef,30,B.aH,null,null,null)
D.ahX=new A.ac(B.rZ,22,B.c,null,null,null)
D.bwG=new A.ac(B.dO,17,null,null,null,null)
D.bwZ=new A.ac(B.uv,26,B.cW,null,null,null)
D.bxI=new A.ac(B.Xg,16,null,null,null,null)
D.byp=new A.ac(B.rS,24,B.c,null,null,null)
D.byu=new A.ac(B.KG,20,B.qx,null,null,null)
D.byz=new A.ac(B.E1,null,B.bR,null,null,null)
D.byG=new A.ac(B.iY,18,B.c,null,null,null)
D.bA3=new A.ac(B.e4,16,B.aj,null,null,null)
D.bAe=new A.ac(D.WO,20,B.aS,null,null,null)
D.aio=new A.ac(B.hg,20,null,null,null,null)
D.bAK=new A.ac(B.cu,18,D.jU,null,null,null)
D.bB1=new A.ac(B.wY,28,B.c,null,null,null)
D.bB9=new A.ac(B.Kw,null,B.fK,null,null,null)
D.bBt=new A.ac(B.wY,24,B.c,null,null,null)
D.bBT=new A.ac(B.rS,null,B.aS,null,null,null)
D.bBU=new A.ac(B.jE,20,B.cW,null,null,null)
D.bCb=new A.ac(B.E3,16,null,null,null,null)
D.bDF=new A.e0(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ep,!0,null,null,null,null)
D.cPt=w([B.bq,B.aS,B.eY,B.aW],x.O)
D.bEq=new A.a8(B.ax,B.aC,B.x,D.cPt,null,null)
D.b5h=new A.x(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.t)
D.b9N=new A.x(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.t)
D.cyP=w([D.b5h,D.b9N],x.O)
D.bEB=new A.a8(B.b3,B.bb,B.x,D.cyP,null,null)
D.cKx=w([B.eO,B.ff,B.eY],x.O)
D.bEE=new A.a8(B.ax,B.aC,B.x,D.cKx,null,null)
D.aa3=new A.x(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.t)
D.aZu=new A.x(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.t)
D.cAF=w([D.aa3,D.aZu],x.O)
D.bF9=new A.a8(B.b3,B.bb,B.x,D.cAF,null,null)
D.b1e=new A.x(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.t)
D.arK=w([D.b1e,D.aa3],x.O)
D.bFt=new A.a8(B.ax,B.aC,B.x,D.arK,null,null)
D.a9d=new A.x(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.t)
D.b35=new A.x(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.t)
D.cJO=w([D.a9d,D.b35],x.O)
D.bG_=new A.a8(B.a1,B.a7,B.x,D.cJO,null,null)
D.cV1=w([B.bS,B.mp],x.O)
D.bG1=new A.a8(B.b3,B.bb,B.x,D.cV1,null,null)
D.b5d=new A.x(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.t)
D.b6E=new A.x(1,0.9529411764705882,0.9058823529411765,0.7843137254901961,B.t)
D.cVP=w([D.b5d,D.jU,D.jU,D.b6E],x.O)
D.cXL=w([0,0.07,0.9,1],x.F)
D.bGt=new A.a8(B.a1,B.a7,B.x,D.cVP,D.cXL,null)
D.bGD=new A.a8(B.ax,B.aC,B.x,B.O2,null,null)
D.cUE=w([B.aW,B.aS,B.bR],x.O)
D.bHz=new A.a8(B.ax,B.aC,B.x,D.cUE,null,null)
D.c1P=w([B.bq,B.aW,B.eO],x.O)
D.c1V=w([B.bE,B.aB,B.jV],x.O)
D.c1X=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.b44=new A.x(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.t)
D.c81=w([D.b44,E.a9N],x.O)
D.dIG=new A.v(1,2)
D.el6=new A.cJ(B.aV,D.dIG,3)
D.ap4=w([D.el6],x.A)
D.cff=w([B.fY,B.c9,B.fr],x.O)
D.chR=w([B.bP,B.bB,B.bj],x.O)
D.bm1=new C.tA("classic","Classic leather","Gold-edged brown leather",D.arK,E.jt,E.jt,"\u2766",B.L,!0,!1,!1,!1)
D.aYX=new A.x(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.t)
D.b8T=new A.x(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.t)
D.cD7=w([D.aYX,D.b8T],x.O)
D.a9Q=new A.x(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.t)
D.blX=new C.tA("ornate","Ornate gold","Double gold border and flourishes",D.cD7,D.a9Q,D.a9Q,"\u2726",B.L,!0,!0,!0,!1)
D.b0Y=new A.x(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.t)
D.b5T=new A.x(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.t)
D.cw6=w([D.b0Y,D.b5T],x.O)
D.blW=new C.tA("parchment","Parchment","Old paper with dark ink",D.cw6,D.CX,G.i9,"\u2767",B.L,!0,!1,!1,!0)
D.a7W=new A.x(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.t)
D.b7B=new A.x(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.t)
D.cT8=w([D.a7W,D.b7B],x.O)
D.b3I=new A.x(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.t)
D.b74=new A.x(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.t)
D.blZ=new C.tA("minimal","Clean paper","Plain and elegant, like a printed book",D.cT8,D.b3I,D.b74,"",B.L,!0,!0,!1,!0)
D.cSk=w([B.dC,E.Tg],x.O)
D.bm0=new C.tA("midnight","Midnight","Deep blue with silver stars",D.cSk,B.cr,B.bL,"\u2727",B.L,!0,!0,!1,!1)
D.blV=new C.tA("emerald","Emerald library","Green cloth, title on the left",Y.app,E.jt,B.ho,"\u25c6",B.bf,!0,!1,!1,!1)
D.b7W=new A.x(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.t)
D.cRK=w([B.fg,D.b7W],x.O)
D.b4C=new A.x(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.t)
D.b5w=new A.x(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.t)
D.bm_=new C.tA("rose","Rose vintage","Burgundy with rose-gold lettering",D.cRK,D.b4C,D.b5w,"\u2740",B.L,!0,!1,!0,!1)
D.cVv=w([B.d3,L.zd],x.O)
D.blY=new C.tA("modern","Modern","Dark, bold, left-aligned",D.cVv,B.b4,B.c,"",B.bf,!1,!0,!1,!1)
D.Zc=w([D.bm1,D.blX,D.blW,D.blZ,D.bm0,D.blV,D.bm_,D.blY],A.az("N<tA>"))
D.cvD=w([B.bR,B.bh],x.O)
D.b55=new A.x(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.t)
D.cwh=w([D.a7W,D.b55],x.O)
D.b0V=new A.x(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.t)
D.cxF=w([D.b0V,B.dc],x.O)
D.cz1=w([B.bd,B.ix,B.nP],x.O)
D.czo=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.aZq=new A.x(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.t)
D.b2s=new A.x(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.t)
D.cXI=w([D.a9d,D.aZq,D.b2s],x.O)
D.bm2=new C.tB("leather","Leather",D.cXI,"vintage")
D.cFU=w([B.dC,B.IN,E.Tg],x.O)
D.bm9=new C.tB("midnight","Midnight",D.cFU,"starry")
D.cz2=w([B.fq,B.eN,B.kQ],x.O)
D.bm8=new C.tB("forest","Forest",D.cz2,"story")
D.cZk=w([B.f5,B.fg,B.kS],x.O)
D.bm5=new C.tB("burgundy","Burgundy",D.cZk,"royal")
D.chs=w([B.aB,B.q2,B.n3],x.O)
D.bm6=new C.tB("royal","Royal",D.chs,"royal")
D.cBd=w([B.bB,B.d3,L.zd],x.O)
D.bm3=new C.tB("charcoal","Charcoal",D.cBd,"geo")
D.cXO=w([B.cl,B.dN,B.vZ],x.O)
D.bm7=new C.tB("sunset","Sunset",D.cXO,"sunset")
D.cYl=w([B.ix,B.CY,B.Th],x.O)
D.bm4=new C.tB("ocean","Ocean",D.cYl,"band")
D.xt=w([D.bm2,D.bm9,D.bm8,D.bm5,D.bm6,D.bm3,D.bm7,D.bm4],A.az("N<tB>"))
D.cBA=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.cC5=w([B.al,B.aI,B.M],x.O)
D.cDc=w([B.fg,B.eN,B.dC,B.ia,B.w0,B.cW,B.kT,B.fD,B.dD],x.O)
D.cDd=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.el7=new A.cJ(B.dt,B.dH,8)
D.cDm=w([D.el7],x.A)
D.cEk=w([B.cd,B.dN,B.lg],x.O)
D.cEM=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.cFQ=w([B.cd,B.hl],x.O)
D.cHH=w([B.aM,B.CS,B.vR],x.O)
D.cIu=w([B.bK,B.cN,B.dE,B.aM],x.O)
D.cIX=w([B.km,B.cl,B.tU],x.O)
D.cJp=w([B.eO,B.cW],x.O)
D.cJT=w([B.dh,B.fZ,B.hR],x.O)
D.cK3=w([B.b4,B.bh,B.dC],x.O)
D.cKu=w([B.eX,B.dp,B.eN],x.O)
D.cKK=w([B.e9,B.dC,B.IN],x.O)
D.cLX=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.a_2=w(["leather","linen","plain","stars","rays"],x.s)
D.brQ=new A.a_(985219,"MaterialIcons",!1)
D.brp=new A.a_(983781,"MaterialIcons",!1)
D.arv=w([B.afD,B.hJ,B.lY,B.hL,D.brQ,B.Em,B.p1,D.brp,L.aha,B.x_,B.p3,B.lX],A.az("N<a_>"))
D.a_7=w(["double","single","corners","none"],x.s)
D.cOl=w([B.fN,B.bv,B.fD],x.O)
D.cOy=w([],x.t)
D.AE=w([],x.u)
D.cQx=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.cSB=w([B.aZ,B.fZ,B.ia],x.O)
D.cTH=w([B.cV,B.oJ,B.TY],x.O)
D.cTU=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dav=new C.lh("construction","Construction","Jobsite & builds",B.Ec)
D.daC=new C.lh("house","Home Build","Houses & rooms",B.up)
D.das=new C.lh("grocery","Grocery","Store & pantry",B.XQ)
D.dar=new C.lh("calculator","Calculations","Math & estimates",B.KP)
D.daA=new C.lh("lumber","Materials","Lumber & supplies",B.L6)
D.dao=new C.lh("kitchen","Kitchen","Remodel & meals",S.agm)
D.brn=new A.a_(983756,"MaterialIcons",!1)
D.dat=new C.lh("landscape","Landscaping","Yard & garden",D.brn)
D.dan=new C.lh("plumbing","Plumbing","Pipes & water",B.uB)
D.daD=new C.lh("electrical","Electrical","Wiring & power",B.hf)
D.dal=new C.lh("store","Retail Shop","Daily business",B.kx)
D.dam=new C.lh("paint_remodel","Paint & Remodel","Colors & walls",S.aga)
D.bqL=new A.a_(983311,"MaterialIcons",!1)
D.daz=new C.lh("roofing","Roofing","Roofs & exteriors",D.bqL)
D.brA=new A.a_(983986,"MaterialIcons",!1)
D.dak=new C.lh("warehouse","Warehouse","Storage & stock",D.brA)
D.dax=new C.lh("vehicles","Vehicles","Fleet & transport",B.En)
D.boy=new A.a_(62785,"MaterialIcons",!1)
D.daq=new C.lh("farm","Farm","Crops & livestock",D.boy)
D.dap=new C.lh("restaurant","Restaurant","Food & catering",B.rY)
D.daw=new C.lh("tools","Tools","Workshop gear",B.El)
D.daB=new C.lh("wallet","Cash & Wallet","Quick spending",B.jE)
D.bpL=new A.a_(63395,"MaterialIcons",!1)
D.day=new C.lh("concrete","Concrete","Foundation work",D.bpL)
D.dau=new C.lh("blueprint","Blueprint","Plans & design",Aa.afJ)
D.a_x=w([D.dav,D.daC,D.das,D.dar,D.daA,D.dao,D.dat,D.dan,D.daD,D.dal,D.dam,D.daz,D.dak,D.dax,D.daq,D.dap,D.daw,D.daB,D.day,D.dau],A.az("N<lh>"))
D.cUl=w([B.bm,B.bv],x.O)
D.cV2=w([B.hQ,B.n7,B.dw],x.O)
D.a_C=w(["top","middle","bottom"],x.s)
D.cXa=w([B.cK,B.bh,B.dC],x.O)
D.cXD=w([B.bt,B.dp,B.eN],x.O)
D.cZf=w([B.bP,B.al],x.O)
D.cZg=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.dGO={top:0,middle:1,bottom:2}
D.d1n=new A.bt(D.dGO,["Top","Middle","Bottom"],x.n)
D.dGu={double:0,single:1,corners:2,none:3}
D.d1s=new A.bt(D.dGu,["Double line","One line","Corners","None"],x.n)
D.dHx={leather:0,linen:1,plain:2,stars:3,rays:4}
D.d2Q=new A.bt(D.dHx,["Leather","Linen","Smooth","Stars","Light rays"],x.n)
D.d30=new A.bt(B.iq,[],A.az("bt<I,+(n,n)>"))
D.dGH={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.AP=new A.bt(D.dGH,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.az("bt<n,I>"))
D.d5c=new F.Lc(32,null)
D.d5d=new F.Lc(40,null)
D.d5e=new F.Lc(46,null)
D.aAo=new C.apz(null)
D.dJp=new A.v(8,14)
D.eRJ=new A.w("Write a new book",null,B.jo,null,B.L,null,null,null,null,null,null,null)
D.dLm=new A.C(B.lS,D.eRJ,null)
D.ahy=new A.ac(B.hH,18,B.c,null,null,null)
D.eLz=new A.w("Add",null,B.mU,null,null,null,null,null,null,null,null,null)
D.cIJ=w([D.ahy,B.v3,D.eLz],x.p)
D.ejr=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cIJ,null)
D.dLG=new A.C(B.rC,D.ejr,null)
D.dLH=new A.C(E.ac6,X.SO,null)
D.eFV=new A.G(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOo=new A.w("New Project",null,D.eFV,null,null,null,null,null,null,null,null,null)
D.cMi=w([D.ahy,B.aa,D.eOo],x.p)
D.eju=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cMi,null)
D.dLR=new A.C(B.iE,D.eju,null)
D.eQA=new A.w("Choose your header",null,R.BE,null,null,null,null,null,null,null,null,null)
D.dM9=new A.C(B.iD,D.eQA,null)
D.aY0=new A.f9(2.2,null,null,null,null,B.cW,null,null,null,null)
D.enG=new A.a3(22,22,D.aY0,null)
D.aWl=new A.cw(B.B,null,null,D.enG,null)
D.dMe=new A.C(B.UP,D.aWl,null)
D.bfy=new A.M(14,2,14,6)
D.f2_=new A.w("The top of your book. Tap a design to see it.",null,Q.a3R,null,null,null,null,null,null,null,null,null)
D.dMf=new A.C(D.bfy,D.f2_,null)
D.dMO=new A.iD(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.dMR=new A.iD(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aBj=new A.iD(1,0.9607843137254902,0.48627450980392156,0)
D.Go=new A.iD(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.xY=new A.iD(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.dMX=new A.iD(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.fbC=new C.bdl(null)
D.bbt=new A.lT(D.fbC,null,B.as,null,null)
D.aEX=new A.cE(0,0,0,0,null,null,D.bbt,null)
D.e7B=new A.A(-42,42)
D.efs=new A.d8([0,0,1,1])
D.aG5=new A.af(0,0,520,160)
D.aGg=new A.b5(B.pL,B.W)
D.f1z=new A.w("Let the AI write it from your tree",null,B.kd,null,B.L,null,null,null,null,null,null,null)
D.bmt=new A.dl(1,B.cj,D.f1z,null)
D.cFP=w([E.Yh,B.aa,D.bmt],x.p)
D.ej9=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cFP,null)
D.eLg=new A.w("Save member",null,B.cc,null,null,null,null,null,null,null,null,null)
D.cSP=w([D.aio,B.aa,D.eLg],x.p)
D.ejh=new A.cC(B.aY,B.b5,B.j,B.m,null,B.p,null,0,D.cSP,null)
D.bvU=new A.ac(B.hK,14,B.aW,null,null,null)
D.eAd=new A.G(!0,B.aW,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eOO=new A.w("Cashier",null,D.eAd,null,null,null,null,null,null,null,null,null)
D.cMK=w([D.bvU,B.bo,D.eOO],x.p)
D.ejj=new A.cC(B.aY,B.e,B.R,B.m,null,B.p,null,0,D.cMK,null)
D.eLh=new A.w("Transfer & settings",null,B.dP,null,null,null,null,null,null,null,null,null)
D.bl5=new A.bE(1,B.bn,D.eLh,null)
D.cyy=w([D.ahX,B.av,D.bl5],x.p)
D.ejk=new A.cC(B.aY,B.e,B.j,B.m,null,B.p,null,0,D.cyy,null)
D.emt=new A.ap(16,40)
D.emy=new A.ap(22,64)
D.emE=new A.ap(280,88)
D.enm=new A.a3(30,null,null,null)
D.eoD=new A.hH(2,12,12,1.05,null)
D.eOu=new A.w("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.epl=new A.aY(D.eOu,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eOJ=new A.w("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aI0=new A.aY(D.eOJ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eWb=new A.w("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.epP=new A.aY(D.eWb,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f4E=new A.w("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.epU=new A.aY(D.f4E,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eQy=new A.w("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.eq0=new A.aY(D.eQy,null,null,null,null,null,null,null,null,null,null,null,null,B.fE,!1,null,null,null,B.q,null)
D.f2a=new A.w("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aI4=new A.aY(D.f2a,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eLQ=new A.w("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.eqq=new A.aY(D.eLQ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f5f=new A.w("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.er9=new A.aY(D.f5f,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f0B=new A.w("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ery=new A.aY(D.f0B,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.f4I=new A.w("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.erB=new A.aY(D.f4I,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eXE=new A.w("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.erD=new A.aY(D.eXE,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eSg=new A.w("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.erE=new A.aY(D.eSg,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eSh=new A.w("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.esE=new A.aY(D.eSh,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eOw=new A.w("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.esW=new A.aY(D.eOw,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eQg=new A.w("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.ete=new A.aY(D.eQg,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eXa=new A.w("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.etu=new A.aY(D.eXa,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.eSZ=new A.w("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.etv=new A.aY(D.eSZ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.q,null)
D.ewo=new A.G(!0,D.jU,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ewM=new A.G(!0,D.jU,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.exk=new A.qZ(!0,B.qF,null,null,null,null,B.dk,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.exA=new A.G(!0,D.jU,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ey7=new A.G(!0,B.aW,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a3S=new A.qZ(!0,B.Pk,null,null,null,null,B.dk,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.ez4=new A.G(!0,B.M,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezt=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eAX=new A.G(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eB0=new A.G(!0,G.i9,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCd=new A.G(!0,B.M,null,null,null,null,13,B.a0,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eCR=new A.G(!0,B.M,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDv=new A.G(!0,B.bR,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDA=new A.G(!0,B.bS,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eDW=new A.G(!0,D.CX,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eE4=new A.G(!0,B.aW,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eF0=new A.G(!0,B.cW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFs=new A.G(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eFT=new A.G(!0,B.aW,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHj=new A.G(!0,B.al,null,null,null,null,11.5,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eHr=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aKa=new A.G(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a4j=new A.G(!0,B.al,null,null,null,null,12,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJ1=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJn=new A.G(!0,G.i9,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eJu=new A.G(!0,G.i9,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eKc=new A.w("Themes",null,B.px,null,null,null,null,null,null,null,null,null)
D.eKM=new A.w("Add Item",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eAI=new A.G(!0,B.M,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eL6=new A.w("Debt receipt",null,D.eAI,null,B.L,null,null,null,null,null,null,null)
D.aK6=new A.G(!0,B.al,null,null,null,null,11,B.a0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eLn=new A.w("Person who owes",null,D.aK6,null,null,null,null,null,null,null,null,null)
D.eMh=new A.w("Notes",null,B.a3Z,null,null,null,null,null,null,null,null,null)
D.eMG=new A.w("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.ezL=new A.G(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eMK=new A.w("Share",null,D.ezL,null,null,null,null,null,null,null,null,null)
D.eNz=new A.w("Move your family trees",null,D.aKa,null,null,null,null,null,null,null,null,null)
D.eO7=new A.w("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.eOI=new A.w("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.ePS=new A.w("Remove this book?",null,B.h8,null,null,null,null,null,null,null,null,null)
D.aKz=new A.w("Download",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eQV=new A.w("What should the AI do?",null,B.dP,null,null,null,null,null,null,null,null,null)
D.eSc=new A.w("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.eTc=new A.w("Ribbon bookmark",null,B.it,null,null,null,null,null,null,null,null,null)
D.eHd=new A.G(!0,B.aW,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eTD=new A.w("NGMY.ORG",null,D.eHd,null,B.L,null,null,null,null,null,null,null)
D.eUM=new A.w("Scan family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eDP=new A.G(!0,B.c,null,null,null,null,13,B.a0,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eVt=new A.w("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.eDP,null,B.L,null,null,null,null,null,null,null)
D.eWC=new A.w("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.eWI=new A.w("Thumbnail",null,B.px,null,null,null,null,null,null,null,null,null)
D.eXg=new A.w("Save the cover",null,B.cq,null,null,null,null,null,null,null,null,null)
D.eXF=new A.w("Your photos",null,B.px,null,null,null,null,null,null,null,null,null)
D.eXU=new A.w("Create Project",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eYk=new A.w("Design your cover",null,R.BE,null,null,null,null,null,null,null,null,null)
D.eYq=new A.w("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.eYt=new A.w("PICTURE",null,H.mc,null,null,null,null,null,null,null,null,null)
D.eYP=new A.w("Paid",null,B.cc,null,null,null,null,null,null,null,null,null)
D.eYR=new A.w("You can undo it right after.",null,Q.a43,null,null,null,null,null,null,null,null,null)
D.eZj=new A.w("Print",null,B.ty,null,null,null,null,null,null,null,null,null)
D.eZE=new A.w("Amount owed",null,D.aK6,null,null,null,null,null,null,null,null,null)
D.eZR=new A.w("Got it",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f_n=new A.w("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.f_q=new A.w("Add to budget",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f_P=new A.w("Debtor signature",null,B.a3Z,null,null,null,null,null,null,null,null,null)
D.f_X=new A.w("Change icon",null,E.aJp,null,null,null,null,null,null,null,null,null)
D.f10=new A.w("Family tree QR",null,B.cq,null,null,null,null,null,null,null,null,null)
D.f1p=new A.w("Download",null,B.ty,null,null,null,null,null,null,null,null,null)
D.f1t=new A.w("Change",null,B.px,null,null,null,null,null,null,null,null,null)
D.f2g=new A.w("Clear all",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f2j=new A.w("WHAT SHOULD IT CHANGE?",null,H.mc,null,null,null,null,null,null,null,null,null)
D.f2T=new A.w("COLOUR",null,H.mc,null,null,null,null,null,null,null,null,null)
D.f34=new A.w("Do it",null,B.cq,null,null,null,null,null,null,null,null,null)
D.f37=new A.w("Create Tree",null,B.cc,null,null,null,null,null,null,null,null,null)
D.f41=new A.w("Create Family Tree",null,B.eK,null,null,null,null,null,null,null,null,null)
D.evr=new A.G(!0,E.jt,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4g=new A.w("Write the first page myself",null,D.evr,null,null,null,null,null,null,null,null,null)
D.f4L=new A.w("Use this header",null,B.cq,null,null,null,null,null,null,null,null,null)
D.f4Q=new A.w("Create Project",null,E.aJS,null,null,null,null,null,null,null,null,null)
D.f8Y=new C.a94(1,"header")
D.a5_=new C.a94(2,"projects")
D.f8Z=new C.a94(3,"cashier")
D.a50=new C.a94(4,"familyTree")
D.fjx=new C.cqg(0,"start")
D.fjy=new C.cqh(0,"start")
D.f94=new C.Wk(null)
D.fa3=new C.WN(null)
D.d2Y=new A.bt(B.iq,[],A.az("bt<n,Ej>"))
D.cOS=w([],x.E)
D.cOT=w([],x.M)
D.faA=new C.baD(D.d2Y,D.cOS,D.cOT,0,0,null,null)
D.fcg=new C.Ya(null)
D.a5H=new C.aGq(0,"projects")
D.aNm=new C.aGq(1,"cashier")
D.fhu=new C.aGq(2,"familyTree")})()};
(a=>{a["lqCaAqujCZPXoEpa/2dy71WZMtI="]=a.current})($__dart_deferred_initializers__);