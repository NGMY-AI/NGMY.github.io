((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,S,H,I,T,E,K,C={
bH1(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bH1=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vZ(null,""),$async$bH1)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.X(y.z)
t=A.nn(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.du(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cT(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.av(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rm(t,a1,B.i7,"book",B.Hg),$async$bH1)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=A.RM(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.X(l!=null&&A.M9(l)?y.k:y.y)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cG
g=a8.h(0,"title")
a9=B.a.i(A.v(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.v(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.y(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=A.a46(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bH1,v)},
aix(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aix=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vZ(null,""),$async$aix)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.X(y.z)
t=A.nn(b6)
s=x.S
r=A.cV(c1,0,A.dy(4,"count",s),A.T(c1).c)
q=A.a3S(new A.N(r,new C.fSD(),r.$ti.k("N<ak.E,q>")).aN(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fSC(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.av(b7,null)+"\nAllowed values: style one of "+B.d.aN(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aix)
case 6:l=c5
k=A.RM(l==null?"":l)
if(k==null)throw A.X("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.aqi(s,D.dJQ,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.X("There is no page to change.")
h=A.S(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.du(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.av(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aix)
case 10:l=c5
k=l==null?null:A.RM(l)
if(k==null)throw A.X(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.d3(a8,d),a5=J.aT(a2.a),a2=a2.$ti,a7=new A.kO(a5,a2.k("kO<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a7(a9)
b1=A.aI(b0.h(a9,"index"))
i=b1==null?null:B.i.M(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.v(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.v(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.y(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("b8<2>")
p=A.cE(new A.b8(h,s),new C.fSE(),s.k("M.E"),p)
p=A.a3S(A.pN(p,3,A.a4(p).k("M.E")).aN(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cr<1>")
b4=A.B(new A.cr(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(A.a46(s,b9),$async$aix)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aqi(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aix,v)},
hLl(d,e,f){return A.ce(null,B.w.j(0.65),!1,null,new C.h1Q(e,f),d,null,!0,!0,x.g2)},
aqi:function aqi(d,e,f){this.a=d
this.b=e
this.c=f},
fSD:function fSD(){},
fSC:function fSC(d){this.a=d},
fSE:function fSE(){},
h1Q:function h1Q(d,e){this.a=d
this.b=e},
bEJ(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bEJ=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aS(b1,new C.fFE())){u=null
w=1
break}t=B.d.cA(b1,new C.fFF())
s=$.R()
r=new A.pl(new A.oR())
q=A.w8(r,D.aTB)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aTB,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.aa
o.d=B.bG
o.e=B.dM
n=new C.fFK(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.i.D(k-m,1,1e4)
d=B.i.D(j-l,1,1e4)
a0=B.i.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.R()
p=A.a([],x.v)
a3=new A.aG(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aZ(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ab()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ab()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aG(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aZ(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ab()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ab()}}q.af(a3,o)}w=4
return A.b(r.nw().vJ(520,160),$async$bEJ)
case 4:w=3
return A.b(b3.hk(B.hi),$async$bEJ)
case 3:b0=b3
u=b0==null?null:J.eQ(B.dH.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEJ,v)},
fQi(d){return C.iq5(d)},
iq5(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fQi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bkM()
n=d.x!=null&&d.zU(null).length===0
if(d.x!=null)t=n?D.AS:D.Ki
else t=d.gV_()?D.Ki:D.aOr
w=3
return A.b(C.bEJ(d.ax),$async$fQi)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoV(s)
r=A.a5Q(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aOr}else{p.c=C.xs(q,!0)
p.b=n?D.AS:D.Ki}r.a4H(A.hcA(new C.fQk(p,d,new C.fQl(),t,n,o),null,D.bJF,B.xD))
u=r.jG(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQi,v)},
fXe(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fXe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fQi(d),$async$fXe)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.az(q,0,40)
u=A.HE(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fXe,v)},
fFE:function fFE(){},
fFF:function fFF(){},
fFK:function fFK(d){this.a=d},
fQl:function fQl(){},
fQk:function fQk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fQj:function fQj(){},
h2i(d,e){var w=0,v=A.j(x.H)
var $async$h2i=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,B.w.j(0.55),!0,null,new C.h2m(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h2i)
case 2:return A.h(null,v)}})
return A.i($async$h2i,v)},
bHu(d,e,f,g){return C.ixR(d,e,f,g)},
ixR(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bHu=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cD.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.fvC)
w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.h2e(g,r,f),d,null,!0,!0,x.H),$async$bHu)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bHu,v)},
h2n(d,e){var w=0,v=A.j(x.H)
var $async$h2n=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,null,!0,null,new C.h2q(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h2n)
case 2:return A.h(null,v)}})
return A.i($async$h2n,v)},
b0G:function b0G(d,e){this.c=d
this.a=e},
c9t:function c9t(){},
bdY:function bdY(d,e){this.b=d
this.a=e},
h2m:function h2m(d,e){this.a=d
this.b=e},
h2j:function h2j(d){this.a=d},
h2k:function h2k(d,e,f){this.a=d
this.b=e
this.c=f},
h2l:function h2l(d,e){this.a=d
this.b=e},
h2e:function h2e(d,e,f){this.a=d
this.b=e
this.c=f},
h2c:function h2c(d){this.a=d},
h2d:function h2d(d,e,f){this.a=d
this.b=e
this.c=f},
h2q:function h2q(d,e){this.a=d
this.b=e},
h2o:function h2o(d){this.a=d},
h2p:function h2p(d,e,f){this.a=d
this.b=e
this.c=f},
fKy(d,e){var w=0,v=A.j(x.y),u,t
var $async$fKy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3C(d),$async$fKy)
case 3:t=g
J.n_(t,new C.fKz(e))
u=A.ajb(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fKy,v)},
fKz:function fKz(d){this.a=d},
aqv:function aqv(d,e,f){this.c=d
this.d=e
this.a=f},
aFm:function aFm(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dSB:function dSB(d,e){this.a=d
this.b=e},
dSm:function dSm(d,e){this.a=d
this.b=e},
dSp:function dSp(d,e,f){this.a=d
this.b=e
this.c=f},
dSo:function dSo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSn:function dSn(d,e){this.a=d
this.b=e},
dSq:function dSq(d,e){this.a=d
this.b=e},
dSk:function dSk(){},
dSl:function dSl(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dSj:function dSj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dS4:function dS4(d){this.a=d},
dS5:function dS5(d,e,f){this.a=d
this.b=e
this.c=f},
dS6:function dS6(d,e){this.a=d
this.b=e},
dS3:function dS3(d){this.a=d},
dSb:function dSb(d,e){this.a=d
this.b=e},
dS2:function dS2(d){this.a=d},
dSc:function dSc(d,e,f){this.a=d
this.b=e
this.c=f},
dSd:function dSd(d,e,f){this.a=d
this.b=e
this.c=f},
dS1:function dS1(d,e){this.a=d
this.b=e},
dSe:function dSe(d,e,f){this.a=d
this.b=e
this.c=f},
dS0:function dS0(d,e){this.a=d
this.b=e},
dSf:function dSf(d,e){this.a=d
this.b=e},
dS_:function dS_(d){this.a=d},
dSg:function dSg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dRY:function dRY(){},
dRS:function dRS(d){this.a=d},
dRT:function dRT(d){this.a=d},
dRZ:function dRZ(d,e){this.a=d
this.b=e},
dSh:function dSh(d,e){this.a=d
this.b=e},
dRX:function dRX(d){this.a=d},
dSi:function dSi(d){this.a=d},
dRW:function dRW(){},
dS7:function dS7(d,e){this.a=d
this.b=e},
dRV:function dRV(d){this.a=d},
dS8:function dS8(d,e,f){this.a=d
this.b=e
this.c=f},
dRU:function dRU(d,e){this.a=d
this.b=e},
dRR:function dRR(d,e){this.a=d
this.b=e},
dS9:function dS9(d){this.a=d},
dSa:function dSa(d,e,f){this.a=d
this.b=e
this.c=f},
dSE:function dSE(){},
dSF:function dSF(d,e){this.a=d
this.b=e},
dSC:function dSC(d){this.a=d},
dSD:function dSD(d){this.a=d},
dSy:function dSy(d,e){this.a=d
this.b=e},
dSz:function dSz(d){this.a=d},
dSr:function dSr(d,e,f){this.a=d
this.b=e
this.c=f},
dSs:function dSs(d,e,f){this.a=d
this.b=e
this.c=f},
dSt:function dSt(d,e,f){this.a=d
this.b=e
this.c=f},
dSu:function dSu(d,e,f){this.a=d
this.b=e
this.c=f},
dSv:function dSv(d,e,f){this.a=d
this.b=e
this.c=f},
dSw:function dSw(d,e,f){this.a=d
this.b=e
this.c=f},
dSx:function dSx(d,e,f){this.a=d
this.b=e
this.c=f},
dSG:function dSG(){},
dSH:function dSH(){},
dSI:function dSI(){},
dSJ:function dSJ(d){this.a=d},
dSA:function dSA(d,e){this.a=d
this.b=e},
hGR(d){return B.d.dB(D.a60,new C.fLk(d),new C.fLl())},
uU:function uU(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fLk:function fLk(d){this.a=d},
fLl:function fLl(){},
amw:function amw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aXn:function aXn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Uj:function Uj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhA:function bhA(){this.d=$
this.c=this.a=null},
dih:function dih(d,e){this.a=d
this.b=e},
dif:function dif(d,e){this.a=d
this.b=e},
dig:function dig(){},
dii:function dii(d,e){this.a=d
this.b=e},
hqQ(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bi(J.k(u==null?"":u))
return new C.nv(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LV(d,e){return C.ioM(d,e)},
ioM(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LV=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LV)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.d3(p,x.f)
o=A.cE(o,new C.fNS(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.B(new A.Y(o,new C.fNT(),n),n.k("M.E"))
B.d.b0(o,new C.fNU())
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
return A.i($async$LV,v)},
BC(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BC=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$BC)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b9(f,new C.h0U(),x.a)
r=A.B(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aG("String","ngmy_family_book_v1_"+s+"_"+e,B.X.av(r,null)),$async$BC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BC,v)},
aTv(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aTv=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LV(d,e),$async$aTv)
case 2:u=h
t=J.cF(u)
s=t.bk(u,new C.h9z(f))
if(s===-1)t.ca(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BC(d,e,u),$async$aTv)
case 3:return A.h(null,v)}})
return A.i($async$aTv,v)},
bFd(d,e,f){var w=0,v=A.j(x.H),u
var $async$bFd=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LV(d,e),$async$bFd)
case 2:u=h
J.n_(u,new C.fKq(f))
w=3
return A.b(C.BC(d,e,u),$async$bFd)
case 3:return A.h(null,v)}})
return A.i($async$bFd,v)},
bFt(d,e){return C.ioL(d,e)},
ioL(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bFt=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bFt)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Pq
w=1
break}p=B.X.aP(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aI(o.h(0,"emblem"))
k=k==null?null:B.i.M(k)
if(k==null)k=0
if(D.Eo.an(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aI(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a7H,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.q(D.a70,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.q(D.a6X,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.daB,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.IB(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Pq
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Pq
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bFt,v)},
SW(d,e,f){return C.ixm(d,e,f)},
ixm(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$SW=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$SW)
case 7:r=h
w=8
return A.b(r.aG("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.av(f.ak(),null)),$async$SW)
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
return A.i($async$SW,v)},
Sm(d,e){return C.ioN(d,e)},
ioN(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Sm=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Sm)
case 7:r=g
q=r.rD("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LV(d,e),$async$Sm)
case 8:if(!j.cK(g)){n=B.a.i(d.toLowerCase())
m=J.lo(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aG("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Sm)
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
return A.i($async$Sm,v)},
ahR(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sm(d,e),$async$ahR)
case 3:s=g
r=J.a7(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.I(s,t)
w=5
return A.b(A.az(),$async$ahR)
case 5:w=4
return A.b(g.aG("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahR)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahR,v)},
a4i(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4i=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Sm(d,e),$async$a4i)
case 2:s=h
J.fO(s,f)
w=3
return A.b(A.az(),$async$a4i)
case 3:u=h
w=4
return A.b(u.aG("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4i)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4i)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4i)
case 6:return A.h(null,v)}})
return A.i($async$a4i,v)},
nv:function nv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fNS:function fNS(){},
fNT:function fNT(){},
fNU:function fNU(){},
h0U:function h0U(){},
h9z:function h9z(d){this.a=d},
fKq:function fKq(d){this.a=d},
IB:function IB(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bSR:function bSR(d){this.a=d},
ixG(d,e,f,g,h,i,j){return A.a6(d,!1).cc(A.ed(new C.h1u(j,i,f,e,h,g),!0,null,x.H))},
Si(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Si=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sm(h,g),$async$Si)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aVZ)
u=!1
w=1
break}w=4
return A.b(C.hLl(d,f,e),$async$Si)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahR(h,g),$async$Si)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nv(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.BC(h,r,p),$async$Si)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.SW(h,r,new C.IB("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Si)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Si,v)},
h1u:function h1u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_X:function a_X(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCk:function aCk(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
diX:function diX(d){this.a=d},
diW:function diW(d,e){this.a=d
this.b=e},
diL:function diL(d,e){this.a=d
this.b=e},
diI:function diI(d,e){this.a=d
this.b=e},
dij:function dij(d){this.a=d},
dik:function dik(d,e){this.a=d
this.b=e},
diM:function diM(d){this.a=d},
dis:function dis(d){this.a=d},
diq:function diq(d){this.a=d},
dir:function dir(d){this.a=d},
dit:function dit(d){this.a=d},
diJ:function diJ(d){this.a=d},
diK:function diK(){},
dio:function dio(d){this.a=d},
dip:function dip(d,e){this.a=d
this.b=e},
diu:function diu(d){this.a=d},
div:function div(d,e){this.a=d
this.b=e},
diV:function diV(d){this.a=d},
diU:function diU(d,e){this.a=d
this.b=e},
diT:function diT(d){this.a=d},
diF:function diF(d){this.a=d},
diE:function diE(d){this.a=d},
diG:function diG(d){this.a=d},
dil:function dil(d,e){this.a=d
this.b=e},
diH:function diH(d,e){this.a=d
this.b=e},
diy:function diy(d){this.a=d},
diz:function diz(d){this.a=d},
dix:function dix(){},
diA:function diA(d){this.a=d},
diB:function diB(d){this.a=d},
diC:function diC(d,e){this.a=d
this.b=e},
diD:function diD(d,e,f){this.a=d
this.b=e
this.c=f},
diw:function diw(d,e){this.a=d
this.b=e},
diO:function diO(d){this.a=d},
diN:function diN(){},
diP:function diP(d){this.a=d},
diQ:function diQ(d){this.a=d},
diR:function diR(d){this.a=d},
diS:function diS(d,e){this.a=d
this.b=e},
dim:function dim(d){this.a=d},
din:function din(d){this.a=d},
a00:function a00(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhZ:function bhZ(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dkJ:function dkJ(d){this.a=d},
dkK:function dkK(d){this.a=d},
dkI:function dkI(d){this.a=d},
dkL:function dkL(d){this.a=d},
dkH:function dkH(d){this.a=d},
dkM:function dkM(d){this.a=d},
dkG:function dkG(d){this.a=d},
dkN:function dkN(d,e){this.a=d
this.b=e},
dkF:function dkF(d,e){this.a=d
this.b=e},
dkO:function dkO(d,e){this.a=d
this.b=e},
a_Z:function a_Z(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
agi:function agi(d,e,f){this.a=d
this.b=e
this.c=f},
aCn:function aCn(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
djb:function djb(d,e){this.a=d
this.b=e},
dja:function dja(d,e){this.a=d
this.b=e},
djf:function djf(d){this.a=d},
dje:function dje(d,e){this.a=d
this.b=e},
djc:function djc(d){this.a=d},
djd:function djd(d){this.a=d},
djg:function djg(d){this.a=d},
djh:function djh(d){this.a=d},
dj9:function dj9(d,e){this.a=d
this.b=e},
dj8:function dj8(d,e){this.a=d
this.b=e},
KY:function KY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_d:function a_d(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cR4:function cR4(d){this.a=d},
cR5:function cR5(){},
cR6:function cR6(d){this.a=d},
bfa:function bfa(d,e,f){this.b=d
this.c=e
this.a=f},
bf1:function bf1(d,e){this.b=d
this.a=e},
uV:function uV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_x:function a_x(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bf8:function bf8(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
da3:function da3(d,e,f){this.a=d
this.b=e
this.c=f},
da2:function da2(d,e){this.a=d
this.b=e},
das:function das(d){this.a=d},
daf:function daf(){},
dat:function dat(d){this.a=d},
dae:function dae(){},
dau:function dau(d,e){this.a=d
this.b=e},
dad:function dad(d,e){this.a=d
this.b=e},
dav:function dav(d,e){this.a=d
this.b=e},
dac:function dac(d,e){this.a=d
this.b=e},
daw:function daw(d){this.a=d},
dab:function dab(){},
dax:function dax(d,e){this.a=d
this.b=e},
daa:function daa(d,e){this.a=d
this.b=e},
day:function day(d){this.a=d},
dan:function dan(d,e){this.a=d
this.b=e},
daz:function daz(d){this.a=d},
daA:function daA(d){this.a=d},
daC:function daC(d){this.a=d},
daD:function daD(d){this.a=d},
dam:function dam(d,e){this.a=d
this.b=e},
daE:function daE(d,e){this.a=d
this.b=e},
aJt:function aJt(d){this.a=d},
bkw:function bkw(d){this.a=d},
bdi:function bdi(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
amx:function amx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2c:function a2c(d,e){this.a=d
this.b=e},
amy:function amy(d,e,f,g,h,i){var _=this
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
_.bv$=h
_.a9$=i
_.c=_.a=null},
bT0:function bT0(d){this.a=d},
bSV:function bSV(d){this.a=d},
bSU:function bSU(d,e){this.a=d
this.b=e},
bT3:function bT3(d){this.a=d},
bSW:function bSW(d){this.a=d},
bSX:function bSX(d){this.a=d},
bT_:function bT_(d){this.a=d},
bSZ:function bSZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT1:function bT1(d,e){this.a=d
this.b=e},
bT2:function bT2(){},
bSY:function bSY(d){this.a=d},
bSS:function bSS(d,e){this.a=d
this.b=e},
bST:function bST(d){this.a=d},
bq7:function bq7(d,e){this.b=d
this.a=e},
aCl:function aCl(){},
iF(d,e){var w
$.R()
w=A.L()
w.b=B.aa
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dM
return w},
bEL(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.br(j.save())
j.translate(e.a,e.b)
d.nM(0,a0?-f:f,f)
w=A.bY(B.hv,8,36)
v=B.w.j(0.3)
u=$.R()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.Y5
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.exN,new A.r(-4+v,-2),C.iF(q,5))
d.ah(D.evq,new A.r(4-v,-2),C.iF(q,5))}else{t=A.bY(B.K9,14,40)
p=A.L()
p.r=v.gp(0)
d.c1(t,p)}v=u.r
u=x.v
o=new A.aG(v,B.ai,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.cg(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.cg(15,-40,11,t))
o.E(new A.bx())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aG(v,B.ai,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bx())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b2X){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iF(B.Gs,3.4))
d.ah(D.ey3,new A.r(9,n),C.iF(q,4))
d.ah(D.evR,new A.r(10,n),C.iF(q,4))}else if(a1===D.b2Y){d.ah(D.ewU,new A.r(-8,-26-Math.max(0,w)*6),C.iF(q,4))
d.ah(D.etT,new A.r(8,-26-Math.max(0,-w)*6),C.iF(q,4))}else{w=s*3
v=-38-r
d.ah(D.ewY,new A.r(-12-w,v),C.iF(q,4))
d.ah(D.aNr,new A.r(12+w,v),C.iF(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fir,w)
m=new A.r(0,-77-r)
w=A.bY(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bY(m.a5(0,B.vQ),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a5(0,D.etN)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bY(m.a5(0,B.tU),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.ey1),m.a5(0,D.ewS),C.iF(v,2.2))
d.ah(m.a5(0,D.evQ),m.a5(0,D.etK),C.iF(v,2.2))}if(w===4){w=m.a5(0,D.ey5)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a5(0,D.evS)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a5(0,D.ewH)
v=A.L()
v.r=B.il.gp(0)
d.O(w,0.9,v)
v=m.a5(0,D.eww)
w=A.L()
w.r=B.il.gp(0)
d.O(v,0.9,w)
if(i){l=m.a5(0,B.a9P)
w=A.bY(l,21,22)
v=A.L()
v.r=D.lM.gp(0)
d.c1(w,v)
v=A.bY(l.a5(0,B.aNo),5,12)
w=A.L()
w.r=D.bio.gp(0)
d.c1(v,w)
d.ah(l.a5(0,D.exY),l.a5(0,B.aNM),C.iF(B.cV,1.4))
d.ah(D.aNr,new A.r(15,-88-r),C.iF(q,3.6))}j.restore()},
hFv(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.br(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bY(B.dO,18,96)
u=B.w.j(0.28)
$.R()
t=A.L()
t.r=u.gp(0)
d.c1(v,t)
t=A.bY(B.dO,11,70)
v=B.w.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c1(t,u)
d.lB(D.aTF,A.L())
C.idh(d,g,h,i,j)
s=(k==null?D.a9U:k).a-w>=0?1:-1
w=A.L()
w.a=B.Mw
w.sam(A.jz(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.ajP.j(0.5),D.ajP.j(0.12),D.bq5.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aE(D.aTF,w)
r.restore()
r.restore()},
idh(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.w,0.28)
a0.toString
w=A.ap(d,B.c,0.16)
w.toString
v=a2.b
u=A.ap(v,B.w,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.bu(D.fis,B.tZ)
p=$.R()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bu(D.fin,B.hK)
s=A.ap(v,B.w,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bu(D.fiB,B.hK)
o=A.ap(v,B.w,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fiu,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fhd,s)
s=a1.c
J.br(s.save())
s.translate(a3.w,0)
J.br(s.save())
a1.nM(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aG(p.r,B.ai,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.cg(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.cg(m+3,-62,m-2,-58))
l.E(new A.cg(0,-70,k,-58))
l.E(new A.bx())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.br(s.save())
a1.mz(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dhC[j]
i=new A.ar(B.S,B.Q,B.V,B.W,B.U)
i.b=B.aa
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dM
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ar(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.R()
f=new A.ar(B.S,B.Q,B.V,B.W,B.U)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.S,B.Q,B.V,B.W,B.U)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.V,B.W,B.U)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dM
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.S,B.Q,B.V,B.W,B.U)
i.b=B.aa
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dM
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.exq,D.euy,C.iF(a2.c.j(0.9),3))}a1.ah(D.exZ,D.ex_,C.iF(B.w.j(0.18),1.6))
a1.ah(D.etS,B.aNt,C.iF(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.R()
i=A.L()
i.r=u.gp(0)
a1.aE(D.fh9,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.fhn,i)
n=new A.aG(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.cg(0,-57,9,-66))
n.E(new A.cg(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fhw,0.1,2.941592653589793,!1,C.iF(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a9Z
n=25*q
k=23*q
i=9*q
C.hBr(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.EQ:o
C.hBr(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.evi,D.eve,C.iF(D.akP,4))
a1.ah(D.evg,D.evc,C.iF(D.GT.j(0.7),1.4))
u=A.L()
u.r=B.cV.gp(0)
a1.O(D.evf,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.br(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jq(0,a3.f)
a1.bV(0,r)
C.idc(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hBr(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.hv:s.eW(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a5(0,q.aM(0,n)).a5(0,v.aM(0,m))
t=e.a5(0,q.aM(0,p))
d.ah(e,u,C.iF(j,l))
o=A.ap(j,B.w,0.2)
o.toString
d.ah(e,u,C.iF(o,l*0.35))
d.ah(u,t,C.iF(k,l*0.78))
o=A.ap(k,B.w,0.22)
o.toString
d.ah(u,t,C.iF(o,l*0.22))
$.R()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bY(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c1(o,w)
w=-l
w=t.a5(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
idc(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bY(B.vP,40,38)
$.R()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.R()
w=A.L()
w.r=c0.gp(0)
c2.O(D.ex7,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.eu8,9.5,w)}w=A.bY(D.eyk,10,6)
v=$.R()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bY(D.ewE,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.ai,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.hX(13,-20,17,-9,16,2))
t.E(new A.hX(15,13,8,20,0,20))
t.E(new A.hX(-8,20,-15,13,-16,2))
t.E(new A.hX(-17,-9,-13,-20,0,-20))
t.E(new A.bx())
u=A.L()
u.sam(A.wj(D.exP,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iF(c8.j(0.5),0.8)
c2.cQ(D.fiD,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fhg,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.ex4,B.aNV,s)
c2.ah(D.eu4,D.etW,s)
c2.cQ(D.fhv,2.2,1.4,!1,s)
c2.cQ(D.fhe,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.S,B.Q,B.V,B.W,B.U)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fhK,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.cg(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.cg(0,-12,-13,-6))
p.E(new A.bx())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.ewW,D.etX,C.iF(B.nv,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.exa,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.eu9,3,o)
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.cg(-12,22,0,26))
o.E(new A.cg(12,22,13,6))
o.E(new A.cg(8,13,0,12))
o.E(new A.cg(-8,13,-13,6))
o.E(new A.bx())
p=A.L()
p.r=B.hP.gp(0)
c2.af(o,p)
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.cg(0,6,7,8))
p.E(new A.cg(0,10.5,-7,8))
o=A.L()
o.r=B.bO.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aG(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.cg(-20,-27,0,-29))
p.E(new A.cg(20,-27,17,-4))
p.E(new A.cg(0,-14,-17,-4))
p.E(new A.bx())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.w,0.3)
o.toString
c2.cQ(D.fhR,3.4,2.5,!1,C.iF(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fhD,3.6,2.2,!1,C.iF(o,1.2))
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.cg(27,-34,25,-19))
o.E(new A.cg(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aG(v,B.ai,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.cg(24,-12,27,-26))
n.E(new A.cg(18,-22,11,-22))
o=A.ap(m,B.w,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.etY,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fhO,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.S,B.Q,B.V,B.W,B.U)
o.b=B.aa
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dM
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=E.aE8[l]
o=new A.ar(B.S,B.Q,B.V,B.W,B.U)
o.b=B.aa
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dM
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.S,B.Q,B.V,B.W,B.U)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fhN,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(B.a9P,B.a9O,C.iF(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fhh,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bY(D.ey7,5,8)
o=D.ah0.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bY(D.ewP,5,8)
p=D.ah0.j(i)
o=A.L()
o.r=p.gp(0)
c2.c1(n,o)
h=c4.e*2.4
o=new A.aG(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.cg(h-3.4,6,h-2.6,7.4))
o.E(new A.cg(h,8.8,h+2.6,7.4))
c2.af(o,C.iF(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.r(h+1.5,7.2),0.7,o)
g=B.i.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=B.hj[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bY(new A.r(a5,-3),a3,7)
a6=new A.ar(B.S,B.Q,B.V,B.W,B.U)
a6.r=B.c.j(0.96).gp(0)
c2.c1(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.br(d.save())
a6=A.a([],w)
a4=new A.aG(v,B.ai,b9,b9,a6)
a6.push(new A.jt(A.bY(new A.r(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.Ek(a4.gle().a.snapshot())
d.clipPath(a3.a,$.mA(),!0)
a3=new A.ar(B.S,B.Q,B.V,B.W,B.U)
a3.r=D.bmj.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.S,B.Q,B.V,B.W,B.U)
a3.r=B.w.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.S,B.Q,B.V,B.W,B.U)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_j:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.S,B.Q,B.V,B.W,B.U)
a9.b=B.aa
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dM
a3=p?0.8:0
c2.cQ(A.bY(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dP
else{b1=A.ap(c0,B.w,0.2)
b1.toString}b2=new A.ar(B.S,B.Q,B.V,B.W,B.U)
b2.b=B.aa
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dM
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.bwS
else{u=A.ap(c8,D.bq7,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aG(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.cg(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.cg(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bx())
v=A.L()
v.r=D.bpo.gp(0)
c2.af(b8,v)
J.br(d.save())
c2.mz(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a2(w,11,w+b6*2,13.2),u)
u=A.bY(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bwX.gp(0)
c2.c1(u,w)
d.restore()
c2.af(b8,C.iF(b4,1.1))}else{u=new A.aG(v,B.ai,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.cg(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iF(b4,1.5))
if(b5>0.6){w=new A.aG(v,B.ai,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.cg(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.cg(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fhu,-1.2,2.2,!1,C.iF(c8.j(0.5),0.8))
c2.cQ(D.fhj,2.141592653589793,2.2,!1,C.iF(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.ewx,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.ewu,1.7,w)}},
iiJ(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.R(),f=new A.pl(new A.oR()),e=A.w8(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.sam(A.jz(B.J,new A.r(0,a0*0.46),D.del,D.d5y,B.x,h))
e.aE(new A.a2(0,0,0+d,0+a0),a2)
a2=e.c
J.br(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e_()
w.cU(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.S,B.Q,B.V,B.W,B.U)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.br(a2.save())
a2.translate(200,120)
e.jq(0,-0.5)
d=A.L()
a0=x.O
d.sam(A.wj(B.J,230,A.a([D.bkY,B.L],a0),h,B.x,h,h,0))
e.c1(D.fhZ,d)
a2.restore()
d=A.L()
d.sam(A.wj(D.a9X,58,A.a([D.bop,B.L],a0),h,B.x,h,h,0))
e.O(D.a9X,58,d)
d=A.L()
d.r=D.bjG.gp(0)
e.O(D.a9X,24,d)
d=A.L()
d.r=D.a_L.gp(0)
e.O(D.euS,5,d)
d=A.L()
d.r=D.a_L.gp(0)
e.O(D.euW,3.4,d)
d=A.L()
d.r=D.a_L.gp(0)
e.O(D.euV,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aG(g.r,B.ai,h,h,u)
u.push(new A.aZ(-60,420))
r.ab()
for(g=372+s*12,t=60+s*20,q=s*2,p=14-s*3,o=-60;o<=510;o+=8){n=new A.aq(o,g+Math.sin(o/t+q)*p+Math.sin(o/23+s)*3)
u.push(n)
m=r.f
if(m!=null)n.aj(m)
r.ab()}g=new A.aq(510,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.ab()
g=new A.aq(-60,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.ab()
g=new A.bx()
u.push(g)
u=r.f
if(u!=null)g.aj(u)
r.ab()
g=[D.bic,D.bke,D.bqr][s]
u=$.R()
t=new A.ar(B.S,B.Q,B.V,B.W,B.U)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cA3[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.S,B.Q,B.V,B.W,B.U)
u.b=B.aa
u.c=2.4
u.r=D.a06.gp(0)
u.d=B.bG
u.e=B.dM
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bY(new A.r(g,k-27),11,46)
u=new A.ar(B.S,B.Q,B.V,B.W,B.U)
u.r=D.a06.gp(0)
e.c1(g,u)
d=A.bY(new A.r(o-12,d),8,24)
u=new A.ar(B.S,B.Q,B.V,B.W,B.U)
u.r=D.a06.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.S,B.Q,B.V,B.W,B.U)
u.r=D.bjJ.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.sam(A.jz(D.etr,D.etu,D.d7y,B.xr,B.x,h))
e.aE(new A.a2(-200,412,650,1300),g)
j=new A.e_()
j.cU(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bY(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h5()?B.c:B.w
d=new A.ar(B.S,B.Q,B.V,B.W,B.U)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.br(a2.save())
a2.translate(225,590)
e.nM(0,1,0.34)
g=A.L()
g.sam(A.wj(B.J,250,A.a([D.brs,D.bkz,D.btp],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.aju,D.bjd,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.R()
a0=new A.ar(B.S,B.Q,B.V,B.W,B.U)
a0.b=B.aa
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dM
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.ibs(e)
for(l=0;l<3;++l)C.ieG(e,D.aBV[l])
C.iev(e,D.euM)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.R()
a0=new A.ar(B.S,B.Q,B.V,B.W,B.U)
a0.b=B.aa
a0.c=2.4
a0.r=D.a02.gp(0)
a0.d=B.bG
a0.e=B.dM
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.etU,D.euc,C.iF(D.bjX,1.6))
a2.restore()
return f.nw()},
ibs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.R().r,g=x.v,f=new A.aG(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.hX(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.hX(416,382,432,422,428,462))
f.E(new A.bx())
w=A.L()
w.sam(A.jz(new A.r(354,0),new A.r(430,0),D.dCv,B.mu,B.x,i))
d.af(f,w)
v=new A.e_()
v.cU(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ar(B.S,B.Q,B.V,B.W,B.U)
p.b=B.aa
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dM
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dj1[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aG(h,B.ai,i,i,l)
l.push(new A.aZ(r,336))
k.ab()
r=new A.cg(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ab()
r=new A.ar(B.S,B.Q,B.V,B.W,B.U)
r.b=B.aa
r.c=8
r.r=D.ahP.gp(0)
r.d=B.bG
r.e=B.dM
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.S,B.Q,B.V,B.W,B.U)
l.r=A.ap(D.bjP,D.bqp,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.S,B.Q,B.V,B.W,B.U)
r.b=B.aa
r.c=1.2
r.r=D.a02.gp(0)
r.d=B.bG
r.e=B.dM
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bY(new A.r(w,q+28),13,7)
w=new A.ar(B.S,B.Q,B.V,B.W,B.U)
w.r=D.brP.gp(0)
d.c1(q,w)}},
ieG(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bY(new A.r(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.R(),b3=A.L()
b3.r=b1.gp(0)
b4.c1(b0,b3)
b2=b2.r
b3=x.v
w=new A.aG(b2,B.ai,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.cg(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bx())
u=A.L()
u.sam(A.jz(new A.r(b0,0),new A.r(v,0),D.dj7,B.mu,B.x,a4))
b4.af(w,u)
t=new A.e_()
t.cU(B.o.S(a5*7))
v=b4.c
J.br(v.save())
b4.mz(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ar(B.S,B.Q,B.V,B.W,B.U)
n.b=B.aa
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dM
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ajq.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aE(new A.a2(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.be(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aG(b2,B.ai,a4,a4,j)
j.push(new A.aZ(k,o))
i.ab()
h=new A.aq(k+5,n)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ab()
h=new A.aq(k+10,o)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ab()
h=new A.bx()
j.push(h)
j=i.f
if(j!=null)h.aj(j)
i.ab()
j=new A.ar(B.S,B.Q,B.V,B.W,B.U)
j.r=D.lM.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aG(b2,B.ai,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.be(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ab()}b4.af(f,C.iF(D.ajq.j(0.7),1.6))
v.restore()
b0=$.R().r
b2=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.cg(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bx())
m=A.L()
m.r=D.ajD.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.ajD.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.cg(a5-a9,n,a5,u))
e.E(new A.cg(a5+a9,n,p,j))
e.E(new A.cg(a5,b1+a7*0.34,o,j))
e.E(new A.bx())
b1=A.L()
n=a7*1.4
b1.sam(A.jz(new A.r(a5-n,0),new A.r(a5+n,0),D.dmE,B.mu,B.x,a4))
b4.af(e,b1)
J.br(v.save())
b4.mz(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h5()?B.w:D.bjm).j(0.16)
i=new A.ar(B.S,B.Q,B.V,B.W,B.U)
i.b=B.aa
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dM
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aG(b0,B.ai,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.cg(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ar(B.S,B.Q,B.V,B.W,B.U)
n.b=B.aa
n.c=1.2
n.r=b1.gp(0)
n.d=B.bG
n.e=B.dM
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.S,B.Q,B.V,B.W,B.U)
v.b=B.aa
v.c=1.1
v.r=D.bqT.gp(0)
v.d=B.bG
v.e=B.dM
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aG(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bx())
b0=A.L()
b0.r=D.bmO.gp(0)
b4.af(a9,b0)},
iev(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+E.aE5[s]
$.R()
q=new A.ar(B.S,B.Q,B.V,B.W,B.U)
q.b=B.aa
q.c=3
q.r=D.a02.gp(0)
q.d=B.bG
q.e=B.dM
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bY(e.a5(0,B.aNn),24,36)
t=$.R()
r=A.L()
r.r=D.bw3.gp(0)
d.c1(u,r)
t=new A.aG(t.r,B.ai,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.cg(w,v-24,r,u))
t.E(new A.bx())
u=A.L()
u.r=D.aiw.gp(0)
d.af(t,u)},
idS(d){switch(B.o.F(d,8)){case 0:return D.b2v
case 1:return D.b2t
case 2:return D.b2s
case 3:return D.b2r
case 4:return D.b2u
case 5:return D.b2w
case 6:return D.hJ3
default:return D.hJ2}},
SU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bq8()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a9Z:j
w.as=k==null?D.EQ:k
C.hFv(d,e,p,C.idS(m),w,s,m,l)},
hGX(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bUF:function bUF(){var _=this
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
tg:function tg(d,e,f,g,h,i,j,k,l,m){var _=this
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
bq8:function bq8(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amQ:function amQ(){this.b=this.a=null},
aXs:function aXs(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bUx:function bUx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUy:function bUy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUz:function bUz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUA:function bUA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUB:function bUB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUC:function bUC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUD:function bUD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUE:function bUE(){},
bUw:function bUw(d){this.a=d},
agr:function agr(d,e){this.a=d
this.b=e},
aeo:function aeo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ng(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bTg(s)
s.bCQ(d)
return s},
He(d,e,f,g,h,i,j){var w,v=A.T(g).k("Y<1>")
v=A.d_(new A.Y(g,new C.fyn(f),v),v.k("M.E"))
w=A.B(v,A.a4(v).k("cj.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cV(w,0,A.dy(3,"count",x.S),A.T(w).c))
B.d.e0(v,d)
return new C.ls(e,v,B.d.ce(v,f),h,i,"tree",j)},
izj(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.h9p(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jA(c4,c0)
t=A.B(c4,A.a4(c4).k("cj.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jA(c4,c0)
r=A.B(c4,A.a4(c4).k("cj.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jA(c4,c0)
q=A.B(c4,A.a4(c4).k("cj.E"))
for(c4=w.length,v=A.T(t).k("Y<1>"),s=v.k("M.E"),p=A.T(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wX)g="father"
else g=h===D.oI?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.Y(t,new C.h9r(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.He(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.Y(w,new C.h9s(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.ls("True or false: "+h+" is the "+g+" of "+l+".",D.aCX,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.ls("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aCX,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Gm(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.Y(t,new C.h9t(l,a0,c5),v),s)
e=a1.c
if(e===D.wX)e="son"
else e=e===D.oI?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.He(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ew([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.ms(a5,a5.r,f.k("ms<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.He(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("iD<1>"),a3=new A.iD(a0,1,b3,a2),a3.nb(a0,1,b3,e.c),a3=new A.bR(a3,a3.gL(0),a2.k("bR<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.He(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.as7(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.Y(t,new C.h9u(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.He(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.d()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.d()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.Y(t,new C.h9v(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wX
if(e)a2=b7
else a2=f===D.oI?b8:b9
if(e)f=b7
else f=f===D.oI?b8:b9
c2.$2("grand",C.He(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aNS(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.Y(t,new C.h9w(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.He(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cSW)
h=l+" was born in "+k
c2.$2("place",C.He(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.d8B)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.He(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.He(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.j_(b1,b3,b3)
c2.$2("year",C.He(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bFp(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Ng(d),l=new A.e_()
l.cU(f)
w=C.izj(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hoU(v.d,l)
v=A.a4(w).k("cr<1>")
u=A.B(new A.cr(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aS(u,new C.fLY(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.I)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.I(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.B(D.aAW,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hFC(o,l))}}else if(!g&&v>3){o=C.hFC(D.aAW[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hFC(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.e0(w,e)
return new C.ls(d.a,w,B.d.ce(w,v),d.d,d.e,d.f,d.r)},
hKV(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Ng(a2),a1=new A.e_()
a1.cU(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Gm(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Gm(n)
l=A.T(m)
k=new A.iD(m,0,5,l.k("iD<1>"))
k.nb(m,0,5,l.c)
j=k.dq(0)
if(new A.N(j,new C.h_O(),A.T(j).k("N<1,H>")).fF(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aTf(a0,j[i]))
w.push(new C.auX("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c4(e.c_(0,a0.anf(q),new C.h_P()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cr<1>")
d=A.B(new A.cr(e,t),t.k("M.E"))
B.d.ff(d)
v=A.a([],v)
for(u=A.cV(d,0,A.dy(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bR(u,u.gL(0),t.k("bR<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cF(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aTf(a0,v[r]))
w.push(new C.auX("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aRK(d){return B.d.aoJ(D.aDs,new C.fHM(d))},
ipd(d){return A.ny(new A.Y(D.aDs,new C.fOO(d),x.av))},
bU4(d){return C.hUC(d)},
hUC(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bU4=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bU4)
case 7:r=f
q=B.a.i(d)
q=A.eq(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bU4,v)},
BY(d,e){return C.hUz(d,e)},
hUz(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BY=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BY)
case 7:r=g
p=B.a.i(d)
o=A.eq(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aG("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BY)
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
return A.i($async$BY,v)},
bU3(d,e,f){return C.hUA(d,e,f)},
hUA(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bU3=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bU3)
case 7:r=h
q=B.a.i(d)
q=A.eq(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bU3,v)},
BZ(d,e,f,g){return C.hUB(d,e,f,g)},
hUB(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BZ=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BZ)
case 7:r=i
p=B.a.i(d)
o=A.eq(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aG("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BZ)
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
return A.i($async$BZ,v)},
bHI(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hbt(d,e,f,g){return new C.alo(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hSG(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aT(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cm)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cV(w,0,A.dy(4,"count",x.S),u).dq(0)
B.d.u(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aI(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aI(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.hbt(w,v,B.o.D(u==null?20:u,5,60),t)},
hq2(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aT(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cm)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.hSG(A.a1(r,t,s)))}return new C.N0(p,w,v)},
hk2(d){var w,v=A.a([],x.c)
for(w=J.aT(d.z);w.C();)v.push(C.hq2(w.gP(w)))
return v},
aTf(d,e){var w=e.c===D.oI
if(d.anf(e)===0&&d.Gm(e).length!==0)return w?0:1
if(d.Gm(e).length!==0||d.as7(e)!=null)return w?2:3
return w?4:5},
hM_(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Ng(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
B.d.e0(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.d()
j=i.h(0,k)}h=a2.Gm(m)
g=a2.as7(m)
f=a2.aNS(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wX)k="father"
else k=k===D.oI?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wX)k="father"
else k=k===D.oI?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.b0(l,new C.h9Q())
d=B.a.i(m.b)
a0=A.B(new A.Y(s,new C.h9R(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.iD(a0,0,3,i.k("iD<1>"))
a1.nb(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e0(k,a3)
a1=C.aTf(a2,m)
i=new A.iD(l,0,4,p)
i.nb(l,0,4,r)
w.push(new C.bbv(d,a1,i.dq(0),k))
if(w.length>=5)break}return w},
hD0(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.X(d,"My ")?1:0},
hL5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Ng(a4),a3=new A.e_()
a3.cU(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Gm(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Gm(l)
j=A.T(k)
i=new A.iD(k,0,4,j.k("iD<1>"))
i.nb(k,0,4,j.c)
h=i.dq(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aS(h,new C.h0q(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iD(i,0,k,m)
j.nb(i,0,k,n)
f=j.dq(0)
j=B.a.i(l.b)
k=C.aTf(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aTf(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aTf(a2,f[g]))
w.push(new C.aas(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
ls:function ls(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bTg:function bTg(d){this.b=d
this.c=$},
bTh:function bTh(){},
bTi:function bTi(d){this.a=d},
fyn:function fyn(d){this.a=d},
h9p:function h9p(d){this.a=d},
h9q:function h9q(){},
h9r:function h9r(d){this.a=d},
h9s:function h9s(d,e){this.a=d
this.b=e},
h9t:function h9t(d,e,f){this.a=d
this.b=e
this.c=f},
h9o:function h9o(d,e){this.a=d
this.b=e},
h9u:function h9u(d){this.a=d},
h9v:function h9v(d){this.a=d},
h9w:function h9w(d,e,f){this.a=d
this.b=e
this.c=f},
h9n:function h9n(d,e){this.a=d
this.b=e},
fLY:function fLY(d,e){this.a=d
this.b=e},
auX:function auX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h_O:function h_O(){},
h_P:function h_P(){},
zI:function zI(d,e,f){this.a=d
this.b=e
this.c=f},
fHM:function fHM(d){this.a=d},
fOO:function fOO(d){this.a=d},
alo:function alo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bO2:function bO2(){},
N0:function N0(d,e,f){this.a=d
this.b=e
this.c=f},
bbv:function bbv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h9Q:function h9Q(){},
h9R:function h9R(d){this.a=d},
aas:function aas(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h0q:function h0q(d){this.a=d},
biP:function biP(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
agp:function agp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
akH:function akH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
akI:function akI(d,e,f,g,h){var _=this
_.e=_.d=$
_.f=d
_.r=e
_.w=f
_.x=0
_.y=3
_.ay=_.ax=_.at=_.as=_.Q=_.z=0
_.cx=_.CW=_.ch=!1
_.db=_.cy=0.5
_.dx=0
_.dy=""
_.fy=_.fx=_.fr=0
_.go=-9
_.id=0.5
_.bv$=g
_.a9$=h
_.c=_.a=null},
bMb:function bMb(d){this.a=d},
bM6:function bM6(){},
bMc:function bMc(){},
bM4:function bM4(){},
bM5:function bM5(){},
bMa:function bMa(d){this.a=d},
bM7:function bM7(d,e){this.a=d
this.b=e},
bM9:function bM9(d,e){this.a=d
this.b=e},
bM8:function bM8(d,e){this.a=d
this.b=e},
bM3:function bM3(d){this.a=d},
be_:function be_(d,e){this.b=d
this.a=e},
R_:function R_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCj:function aCj(d,e,f){this.b=d
this.c=e
this.a=f},
aAM:function aAM(d,e,f){this.a=d
this.b=e
this.c=f},
avA:function avA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
avB:function avB(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.ba$=f
_.c=_.a=null},
cs1:function cs1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cs2:function cs2(d){this.a=d},
cs0:function cs0(d){this.a=d},
cs3:function cs3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cs4:function cs4(){},
cs5:function cs5(d,e){this.a=d
this.b=e},
cs6:function cs6(){},
cs7:function cs7(d){this.a=d},
crY:function crY(d){this.a=d},
crZ:function crZ(d,e){this.a=d
this.b=e},
cs_:function cs_(d,e,f){this.a=d
this.b=e
this.c=f},
crT:function crT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
crV:function crV(d,e){this.a=d
this.b=e},
crW:function crW(d,e){this.a=d
this.b=e},
crU:function crU(d,e){this.a=d
this.b=e},
crS:function crS(){},
crX:function crX(){},
bdr:function bdr(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cS8:function cS8(){},
azx:function azx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azy:function azy(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cH_:function cH_(d){this.a=d},
cGZ:function cGZ(d){this.a=d},
cH7:function cH7(d,e){this.a=d
this.b=e},
cH8:function cH8(d,e){this.a=d
this.b=e},
cH9:function cH9(d){this.a=d},
cH6:function cH6(d){this.a=d},
cHa:function cHa(d){this.a=d},
cHb:function cHb(d,e){this.a=d
this.b=e},
cHc:function cHc(){},
cHd:function cHd(d){this.a=d},
cH1:function cH1(d){this.a=d},
cH2:function cH2(d,e){this.a=d
this.b=e},
cH0:function cH0(d,e){this.a=d
this.b=e},
cH3:function cH3(){},
cH4:function cH4(){},
cH5:function cH5(d,e){this.a=d
this.b=e},
aAv:function aAv(){},
aHQ:function aHQ(){},
hhE(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bsu((w-450*u)/2,(v-900*u)/2,u)},
agd:function agd(){},
faF:function faF(d){this.a=d},
aLG:function aLG(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fkV:function fkV(d){this.a=d},
amG:function amG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amH:function amH(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qh$=f
_.Mh$=g
_.anM$=h
_.bv$=i
_.a9$=j
_.c=_.a=null},
bU2:function bU2(d){this.a=d},
bU1:function bU1(){},
bU_:function bU_(d){this.a=d},
bTY:function bTY(){},
bTZ:function bTZ(d){this.a=d},
bTV:function bTV(d,e){this.a=d
this.b=e},
bTW:function bTW(){},
bTX:function bTX(d){this.a=d},
bU0:function bU0(d,e){this.a=d
this.b=e},
bTU:function bTU(d){this.a=d},
bud:function bud(d,e){this.b=d
this.a=e},
faG:function faG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
faH:function faH(d,e,f){this.a=d
this.b=e
this.c=f},
faI:function faI(d,e,f){this.a=d
this.b=e
this.c=f},
faJ:function faJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
faK:function faK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
faL:function faL(){},
amE:function amE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amF:function amF(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qh$=f
_.Mh$=g
_.anM$=h
_.bv$=i
_.a9$=j
_.c=_.a=null},
bTG:function bTG(){},
bTR:function bTR(d,e){this.a=d
this.b=e},
bTS:function bTS(d){this.a=d},
bTT:function bTT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTN:function bTN(){},
bTM:function bTM(d,e){this.a=d
this.b=e},
bTO:function bTO(d,e){this.a=d
this.b=e},
bTP:function bTP(){},
bTQ:function bTQ(d){this.a=d},
bTI:function bTI(d){this.a=d},
bTJ:function bTJ(d){this.a=d},
bTK:function bTK(d){this.a=d},
bTH:function bTH(d,e){this.a=d
this.b=e},
bTL:function bTL(d){this.a=d},
bkE:function bkE(d,e){this.b=d
this.a=e},
dtT:function dtT(){},
a2v:function a2v(d,e){this.a=d
this.b=e},
amA:function amA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
amB:function amB(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qh$=e
_.Mh$=f
_.anM$=g
_.bv$=h
_.a9$=i
_.c=_.a=null},
bTs:function bTs(d){this.a=d},
bTr:function bTr(){},
bTq:function bTq(){},
bTk:function bTk(){},
bTl:function bTl(){},
bTp:function bTp(d,e,f){this.a=d
this.b=e
this.c=f},
bTo:function bTo(d){this.a=d},
bTm:function bTm(d,e){this.a=d
this.b=e},
bTn:function bTn(d){this.a=d},
bk4:function bk4(d,e){this.b=d
this.a=e},
aCm:function aCm(){},
bhC:function bhC(){},
aCo:function aCo(){},
bhD:function bhD(){},
aCp:function aCp(){},
bhE:function bhE(){},
uy(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ac(0,B.H,f.j(0.4),B.ia,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.W(g,h,u,u,u,20),B.ab],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.ay(u,A.o(u,A.A(v,B.l,u,B.e,B.N,0,u,u),B.f,u,u,new A.n(f,u,u,t,s,u,B.m),u,u,u,u,B.P3,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hqR(d,e,f,g,h,i,j){return new C.amC(i,h,d,j,e,f,g,null)},
a6Z:function a6Z(d,e){this.c=d
this.a=e},
bkb:function bkb(d){this.a=d},
tG:function tG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bTj:function bTj(d){this.a=d},
ID:function ID(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
WF:function WF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmZ:function bmZ(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e4c:function e4c(d,e){this.a=d
this.b=e},
e4d:function e4d(d){this.a=d},
e4e:function e4e(d,e){this.a=d
this.b=e},
e4a:function e4a(d){this.a=d},
e4b:function e4b(d){this.a=d},
e49:function e49(d){this.a=d},
e47:function e47(d){this.a=d},
e48:function e48(d){this.a=d},
e46:function e46(d,e){this.a=d
this.b=e},
e4f:function e4f(d){this.a=d},
e4g:function e4g(d,e){this.a=d
this.b=e},
e4h:function e4h(d,e){this.a=d
this.b=e},
e4i:function e4i(d,e){this.a=d
this.b=e},
e4l:function e4l(d,e){this.a=d
this.b=e},
e4m:function e4m(d,e){this.a=d
this.b=e},
e4n:function e4n(d,e){this.a=d
this.b=e},
e4o:function e4o(d,e){this.a=d
this.b=e},
e4p:function e4p(d,e){this.a=d
this.b=e},
e4q:function e4q(d,e,f){this.a=d
this.b=e
this.c=f},
e4r:function e4r(d,e){this.a=d
this.b=e},
e4s:function e4s(d,e){this.a=d
this.b=e},
e4j:function e4j(d){this.a=d},
e4k:function e4k(d){this.a=d},
a0o:function a0o(d,e){this.a=d
this.b=e},
amC:function amC(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
amD:function amD(d){var _=this
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
bTE:function bTE(d){this.a=d},
bTF:function bTF(d){this.a=d},
bTD:function bTD(d){this.a=d},
bTu:function bTu(d){this.a=d},
bTv:function bTv(d){this.a=d},
bTt:function bTt(d){this.a=d},
bTA:function bTA(d,e,f){this.a=d
this.b=e
this.c=f},
bTB:function bTB(d){this.a=d},
bTx:function bTx(d,e){this.a=d
this.b=e},
bTy:function bTy(d,e,f){this.a=d
this.b=e
this.c=f},
bTC:function bTC(){},
bTz:function bTz(d,e){this.a=d
this.b=e},
bTw:function bTw(d){this.a=d},
Uk:function Uk(d,e){this.c=d
this.a=e},
amz:function amz(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bT4:function bT4(d){this.a=d},
bT5:function bT5(d){this.a=d},
bTf:function bTf(){},
bTe:function bTe(d,e,f){this.a=d
this.b=e
this.c=f},
bT9:function bT9(d,e){this.a=d
this.b=e},
bT8:function bT8(d,e){this.a=d
this.b=e},
bTa:function bTa(d){this.a=d},
bTb:function bTb(d,e){this.a=d
this.b=e},
bTc:function bTc(d,e){this.a=d
this.b=e},
bT7:function bT7(d,e){this.a=d
this.b=e},
bTd:function bTd(d,e,f){this.a=d
this.b=e
this.c=f},
bT6:function bT6(d,e){this.a=d
this.b=e},
inJ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.ajr(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.V(Date.now(),0,!1))
s=new C.fLo(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Y<1>"),q=q.k("cN<1,q>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zr)m.push(l===D.wX?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.j_(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.j_(h,a2,a2)-A.j_(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.an(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.B(new A.cN(new A.Y(a4,new C.fLm(u,f),p),new C.fLn(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aN(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aN(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.az(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
inK(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.ajr(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fLt(v,e)
q=new C.fLr(v)
p=A.S(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.I)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.I)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.I)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.an(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.an(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("b8<2>")
d=A.d_(new A.b8(p,d),d.k("M.E"))
n=A.B(d,A.a4(d).k("cj.E"))
B.d.ff(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eL(l,new C.fLs(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.an(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aN(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i8S(d,e,f,g){var w,v,u=C.inL(d,e)
if(u<=0||f.length<=u)return new A.afS(!1,D.E8,f)
if(g.q(0,e.a))return new A.afS(!1,D.E8,f)
w=A.T(f).c
v=A.cV(f,0,A.dy(u,"count",x.S),w).dq(0)
return new A.afS(!0,A.cV(f,u,null,w).dq(0),v)},
i8T(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.ajr(d3),d2=d1.length
if(d2===0)return D.hGc
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.djo(t))}s=new C.djF(v)
d2=x.dy
r=A.S(w,d2)
q=new C.djx(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.djw(r)
l=A.S(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c4(l.c_(0,k,new C.djp()),o)}h=new C.djv(s)
g=new C.dju(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.B(new A.Y(new A.b8(v,p),new C.djq(h),o),o.k("M.E"))
e=f.length===0?new A.b8(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.I)(f),++u){t=f[u]
a0=g.$2(t.a,A.aR(w))
if(a0>d){d=a0
e=t}}a1=A.aR(w)
p=x.S
a2=A.S(w,p)
a3=A.S(w,w)
a4=A.S(w,d2)
d2=x.i
a5=A.S(w,d2)
a6=A.S(w,x.d9)
a7=A.S(w,d2)
a8=A.a([],x.s)
a9=new C.djD(new C.djz(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gamL(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ew([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.an(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.ny(J.dI(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.djn(a2,new C.djE(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dq(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cr<1>")
d2=A.B(new A.cr(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GO(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.L4(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cr<1>")
d2=A.B(new A.cr(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.djr(c6,b4))
for(d2=new A.cd(a4,a4.$ti.k("cd<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aT(c7.b);j.C();){i=j.gP(j)
if(b6.an(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eL(j,new C.djs(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b0(o,new C.djt())
c6.push(new C.aLB(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bhI(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hGj(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hA8(d,e,f,g,h,i,j,k,l,m,n){return new C.a0B(k,f,j,e,l,n,m,d,g,h,i,null)},
aEn(d,e,f,g,h,i,j){return new C.blu(i,d,e,f,j,h,g,null)},
arK:function arK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFW:function aFW(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e5S:function e5S(d){this.a=d},
e5R:function e5R(d){this.a=d},
e5U:function e5U(d,e){this.a=d
this.b=e},
e5V:function e5V(d,e){this.a=d
this.b=e},
e5W:function e5W(d){this.a=d},
e5Q:function e5Q(d,e){this.a=d
this.b=e},
e5T:function e5T(d){this.a=d},
e5Y:function e5Y(d){this.a=d},
e5X:function e5X(d,e){this.a=d
this.b=e},
arE:function arE(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFT:function aFT(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e5i:function e5i(d){this.a=d},
e5g:function e5g(d){this.a=d},
e5h:function e5h(d){this.a=d},
e5j:function e5j(d,e){this.a=d
this.b=e},
e5d:function e5d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4F:function e4F(d){this.a=d},
e4G:function e4G(d,e){this.a=d
this.b=e},
e4X:function e4X(d){this.a=d},
e4V:function e4V(d){this.a=d},
e4W:function e4W(d,e){this.a=d
this.b=e},
e4Y:function e4Y(d){this.a=d},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
e5c:function e5c(d,e){this.a=d
this.b=e},
e4U:function e4U(d){this.a=d},
e4T:function e4T(d){this.a=d},
e4S:function e4S(d,e){this.a=d
this.b=e},
e59:function e59(){},
e5a:function e5a(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e58:function e58(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e52:function e52(d){this.a=d},
e53:function e53(d,e,f){this.a=d
this.b=e
this.c=f},
e51:function e51(d,e){this.a=d
this.b=e},
e54:function e54(d,e){this.a=d
this.b=e},
e5_:function e5_(d,e){this.a=d
this.b=e},
e50:function e50(){},
e55:function e55(d,e){this.a=d
this.b=e},
e56:function e56(d){this.a=d},
e57:function e57(d,e){this.a=d
this.b=e},
e5b:function e5b(d,e){this.a=d
this.b=e},
e4t:function e4t(d,e){this.a=d
this.b=e},
e4u:function e4u(d,e){this.a=d
this.b=e},
e5l:function e5l(d,e,f){this.a=d
this.b=e
this.c=f},
e5f:function e5f(d,e,f){this.a=d
this.b=e
this.c=f},
e5e:function e5e(d){this.a=d},
e4v:function e4v(d){this.a=d},
e4w:function e4w(d){this.a=d},
e4x:function e4x(){},
e4y:function e4y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4C:function e4C(d,e){this.a=d
this.b=e},
e4B:function e4B(d,e){this.a=d
this.b=e},
e4A:function e4A(d){this.a=d},
e4D:function e4D(d,e){this.a=d
this.b=e},
e4z:function e4z(d){this.a=d},
e5k:function e5k(d){this.a=d},
e4P:function e4P(){},
e4Q:function e4Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4O:function e4O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4K:function e4K(d,e,f){this.a=d
this.b=e
this.c=f},
e4J:function e4J(d,e,f){this.a=d
this.b=e
this.c=f},
e4H:function e4H(d,e){this.a=d
this.b=e},
e4L:function e4L(d){this.a=d},
e4M:function e4M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4I:function e4I(d,e){this.a=d
this.b=e},
e4N:function e4N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e4R:function e4R(d,e){this.a=d
this.b=e},
e5s:function e5s(){},
e5t:function e5t(d,e){this.a=d
this.b=e},
e5u:function e5u(d){this.a=d},
e5v:function e5v(d,e){this.a=d
this.b=e},
e5o:function e5o(d){this.a=d},
e5m:function e5m(d,e){this.a=d
this.b=e},
e5p:function e5p(d,e){this.a=d
this.b=e},
e5q:function e5q(d,e){this.a=d
this.b=e},
e5r:function e5r(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5w:function e5w(d){this.a=d},
e5n:function e5n(d){this.a=d},
e4E:function e4E(d){this.a=d},
bhG:function bhG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
djl:function djl(d){this.a=d},
djk:function djk(d,e){this.a=d
this.b=e},
djm:function djm(d){this.a=d},
djj:function djj(d,e){this.a=d
this.b=e},
fLo:function fLo(d,e){this.a=d
this.b=e},
fLp:function fLp(d){this.a=d},
fLq:function fLq(){},
fLm:function fLm(d,e){this.a=d
this.b=e},
fLn:function fLn(){},
fLt:function fLt(d,e){this.a=d
this.b=e},
fLu:function fLu(d){this.a=d},
fLv:function fLv(){},
fLr:function fLr(d){this.a=d},
fLs:function fLs(d,e){this.a=d
this.b=e},
L4:function L4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GO:function GO(d,e){this.a=d
this.b=e},
bhI:function bhI(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
djo:function djo(d){this.a=d},
djF:function djF(d){this.a=d},
djx:function djx(d){this.a=d},
djy:function djy(){},
djw:function djw(d){this.a=d},
djp:function djp(){},
djv:function djv(d){this.a=d},
dju:function dju(d,e){this.a=d
this.b=e},
djq:function djq(d){this.a=d},
djz:function djz(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
djA:function djA(d){this.a=d},
djB:function djB(d){this.a=d},
djC:function djC(){},
djD:function djD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
djE:function djE(){},
djn:function djn(d,e,f,g,h,i,j,k,l,m){var _=this
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
djr:function djr(d,e){this.a=d
this.b=e},
djs:function djs(d){this.a=d},
djt:function djt(){},
aLB:function aLB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhJ:function bhJ(d,e){this.b=d
this.a=e},
djG:function djG(){},
djH:function djH(d){this.a=d},
djI:function djI(d){this.a=d},
djJ:function djJ(){},
blv:function blv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgK:function bgK(d,e){this.b=d
this.a=e},
bzC:function bzC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fqw:function fqw(d){this.a=d},
boR:function boR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f0p:function f0p(d){this.a=d},
f0o:function f0o(d,e){this.a=d
this.b=e},
a0B:function a0B(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aEl:function aEl(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dzC:function dzC(d,e){this.a=d
this.b=e},
dzB:function dzB(d){this.a=d},
dzz:function dzz(d){this.a=d},
dzA:function dzA(d){this.a=d},
dzL:function dzL(d){this.a=d},
dzM:function dzM(d){this.a=d},
dzK:function dzK(d,e){this.a=d
this.b=e},
dzN:function dzN(){},
dzQ:function dzQ(d){this.a=d},
dzJ:function dzJ(d,e){this.a=d
this.b=e},
dzP:function dzP(){},
dzR:function dzR(d){this.a=d},
dzI:function dzI(d,e){this.a=d
this.b=e},
dzS:function dzS(d){this.a=d},
dzH:function dzH(d){this.a=d},
dzT:function dzT(d){this.a=d},
dzG:function dzG(d){this.a=d},
dzU:function dzU(d){this.a=d},
dzF:function dzF(d){this.a=d},
dzV:function dzV(d){this.a=d},
dzE:function dzE(d){this.a=d},
dzW:function dzW(d){this.a=d},
dzD:function dzD(d,e){this.a=d
this.b=e},
dzO:function dzO(d){this.a=d},
aeL:function aeL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blu:function blu(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aeK:function aeK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
blt:function blt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dzX:function dzX(d){this.a=d},
dzY:function dzY(d,e){this.a=d
this.b=e},
aEm:function aEm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aKD:function aKD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeM:function aeM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dA6:function dA6(d){this.a=d},
GK:function GK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
huV(d){var w=d.V,v=x.N
return w.jp(w,new C.cgx(),v,v)},
i0d(d){var w=d.bH
if(w>=0)return w
return 5},
huX(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.huV(d).h(0,v)
if(w==null||w.length===0)return null
return A.bi(w)},
huW(d,e){var w=C.huX(d,e)
if(w!=null&&w.cb(new A.V(Date.now(),0,!1)))return!0
return!1},
i0e(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.huV(d),w,w)
u=C.huX(d,e)
t=u!=null&&u.cb(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bQ(A.dv(30,0,0,0,0,0).a).aa().ag())
d.V=v},
b28(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b28=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.ly(t,B.K3),$async$b28)
case 3:if(l){u=!0
w=1
break}u=A.lf(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.K3,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b28,v)},
cgx:function cgx(){},
i0b(){var w,v=$.ox(),u=J.e4(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hh(u)},
Jy(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$Jy)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$Jy)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"codes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.aa(m)
$.am.$1("[family tree sync codes] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jy,v)},
a8H(d){return C.i0c(d)},
i0c(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8H=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$a8H)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hS("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cS,null),$async$a8H)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.aa(p)
$.am.$1("[family tree sync codes] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a8H,v)},
cgw(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cgw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jy(),$async$cgw)
case 3:t=m.ia(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gP(t)
q=r.b
if(s.b(q)){p=J.a7(q)
o=p.h(q,"email")
p=B.a.i(J.k(o==null?"":o).toLowerCase())===n&&J.z(p.h(q,"active"),!0)}else p=!1
if(p){u=r.a
w=1
break}w=4
break
case 5:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgw,v)},
Oy(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Oy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cgw(d),$async$Oy)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jy(),$async$Oy)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dH(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8H(s),$async$Oy)
case 9:case 8:u=t
w=1
break
case 5:n=C.i0b()
w=10
return A.b(C.Jy(),$async$Oy)
case 10:s=f
J.aJ(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8H(s),$async$Oy)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Oy,v)},
b27(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b27=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jy(),$async$b27)
case 3:t=f
for(s=J.ds(t),r=s.gdQ(t),r=r.dq(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8H(t),$async$b27)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b27,v)},
a8I(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8I=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.arJ(d,e),$async$a8I)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Oy(d),$async$a8I)
case 7:w=4
break
case 5:w=8
return A.b(C.b27(d),$async$a8I)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8I,v)},
arD(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$arD=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.arJ(f,e),$async$arD)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.ca(),$async$arD)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jy(),$async$arD)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a7(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arD,v)},
b26(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b26=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.ca(),$async$b26)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jy(),$async$b26)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a7(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b26,v)},
i0f(){var w,v=$.ox(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hh(u)},
arG(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$arG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$arG)
case 3:if(!g){u=null
w=1
break}t=C.i0f()
w=4
return A.b(A.WG(),$async$arG)
case 4:s=g
r=B.dV.aK(B.X.av(d.f1(),null))
r=B.cL.gco().aK(r)
q=e?999:2
J.aJ(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8J(s),$async$arG)
case 5:p=e?999:2
u=new A.a1L("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arG,v)},
arF(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$arF=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.WG(),$async$arF)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aI(m.h(n,"usesRemaining"))
k=l==null?null:B.i.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b26(J.k(l==null?"":l),j),$async$arF)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cb.cE(0,B.cD.aK(t))
s=C.huY(r)}catch(f){q=A.aa(f)
$.am.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dH(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8J(p),$async$arF)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arF,v)},
huY(d){var w,v,u,t,s=null
try{w=B.X.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i0h(A.a1(w,x.N,x.z))
return u}catch(t){v=A.aa(t)
$.am.$1("[family tree sync] parse: "+A.v(v))
return s}},
hdC(d){var w=0,v=A.j(x.m),u,t,s
var $async$hdC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.X(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.arF(t[1])
w=1
break}u=null
w=1
break}u=C.huY(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hdC,v)},
i0h(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.d3(v,x.f)
u=A.cE(u,new C.cgz(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.B(new A.Y(u,new C.cgA(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bi(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ia(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.d3(l,u)
n=A.cE(n,new C.cgB(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.B(new A.Y(n,new C.cgC(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.arH(h,w,s,r,q)},
arJ(d,e){var w=0,v=A.j(x.y),u,t
var $async$arJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Oq(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Br(d),$async$arJ)
case 3:u=t.cK(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$arJ,v)},
cgI(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cgI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Br(d),$async$cgI)
case 3:t=s.b9(f,new C.cgJ(),x.cs)
t=A.B(t,t.$ti.k("ak.E"))
B.d.b0(t,new C.cgK())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cgI,v)},
WH(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$WH=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.arJ(e,d),$async$WH)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Oy(e),$async$WH)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Br(e),$async$WH)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cgG(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gau(r)){u=null
w=1
break}t=t.dO(r,new C.cgH(e),x.k)
r=A.B(t,t.$ti.k("ak.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LV(e,o),$async$WH)
case 14:n=i
if(J.cK(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.arH(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WH,v)},
b2b(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b2b=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WH(d,e,f,g),$async$b2b)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Ht(A.L0(q.f1(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2b,v)},
b2a(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b2a=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.WH(d,e,f,g),$async$b2a)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.arG(r,f),$async$b2a)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aID(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b2a,v)},
WI(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WI=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hdC(a0),$async$WI)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.X(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.arD(g.a,d,e,f,s,r),$async$WI)
case 6:if(!a2){if(r)throw A.X(A.bb("This backup expired or the sender's tree is no longer available."))
throw A.X(A.bb("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bF3(e,j),$async$WI)
case 12:case 11:w=13
return A.b(C.aj9(e,j,s),$async$WI)
case 13:h=n.h(0,i)
w=h!=null&&J.cK(h)?14:15
break
case 14:w=16
return A.b(C.BC(e,i,h),$async$WI)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bsA(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$WI,v)},
arH:function arH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cgE:function cgE(){},
cgF:function cgF(){},
cgD:function cgD(){},
cgz:function cgz(){},
cgA:function cgA(){},
cgB:function cgB(){},
cgC:function cgC(){},
cgJ:function cgJ(){},
cgK:function cgK(){},
cgG:function cgG(d){this.a=d},
cgH:function cgH(d){this.a=d},
hmS(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hF(d,new C.arI(w,e,g,i,f,h,null),!0,null,x.H)},
dji(d,e,f,g,h,i,j,k){return new C.bhF(i,e,k,j,g,f,h,d,null)},
arI:function arI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aFV:function aFV(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e5F:function e5F(d){this.a=d},
e5G:function e5G(d,e,f){this.a=d
this.b=e
this.c=f},
e5K:function e5K(d,e){this.a=d
this.b=e},
e5L:function e5L(d){this.a=d},
e5C:function e5C(d){this.a=d},
e5D:function e5D(d,e){this.a=d
this.b=e},
e5E:function e5E(d,e){this.a=d
this.b=e},
e5J:function e5J(d){this.a=d},
e5I:function e5I(d,e){this.a=d
this.b=e},
e5H:function e5H(){},
e5N:function e5N(d){this.a=d},
e5O:function e5O(d,e){this.a=d
this.b=e},
e5M:function e5M(d,e){this.a=d
this.b=e},
djK:function djK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bhH:function bhH(d,e,f){this.d=d
this.e=e
this.a=f},
ae0:function ae0(d,e,f){this.c=d
this.d=e
this.a=f},
bhF:function bhF(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bhK:function bhK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0V:function a0V(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFU:function aFU(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e5x:function e5x(d,e){this.a=d
this.b=e},
e5y:function e5y(d){this.a=d},
e5z:function e5z(d){this.a=d},
e5A:function e5A(d){this.a=d},
e5B:function e5B(d){this.a=d},
a0W:function a0W(d){this.a=d},
bn_:function bn_(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e5P:function e5P(d,e){this.a=d
this.b=e},
b0F(d,e){return new C.b0E(d,e,null)},
b0E:function b0E(d,e,f){this.c=d
this.d=e
this.a=f},
iqa(d){if(!(d!=null&&B.a.X(d,"ngmy:thumb:")))return null
return B.a.aX(d,11)},
ixQ(d){return A.bU(B.L,null,new C.h1X(new C.uk(A.O(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hwY(d,e){return new C.auL(e,d,null)},
aT9(d,e,f,g,h,i,j){var w=C.iqa(i)
if(w!=null)return A.bw(e,new A.a5(j,f,new C.a7K(w,!0,null),null),B.aq)
return A.aSu(e,B.bZ,f,g,h,i,j)},
lT:function lT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7K:function a7K(d,e,f){this.c=d
this.d=e
this.a=f},
bmE:function bmE(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.ba$=e
_.c=_.a=null},
dRJ:function dRJ(d){this.a=d},
dRK:function dRK(){},
dRL:function dRL(d,e){this.a=d
this.b=e},
bmD:function bmD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h1X:function h1X(d){this.a=d},
h1W:function h1W(d,e){this.a=d
this.b=e},
h1V:function h1V(d,e){this.a=d
this.b=e},
h1U:function h1U(d,e){this.a=d
this.b=e},
auL:function auL(d,e,f){this.c=d
this.d=e
this.a=f},
cqj:function cqj(d,e){this.a=d
this.b=e},
aO2:function aO2(){},
ixB(d){var w=null
return A.ce(w,w,!0,w,new C.h1k(),d,w,!0,!0,x.e2)},
iyP(d,e,f,g,h){var w=null
return A.ce(w,w,!0,w,new C.h97(h,g,f,e),d,w,!0,!0,x.N)},
ixD(d,e){var w=null
return A.ce(w,w,!0,w,new C.h1o(e),d,w,!0,!0,x.dY)},
ixC(d){var w=null
return A.ce(w,w,!0,w,new C.h1n(),d,w,!0,!0,x.c5)},
aW6:function aW6(d,e){this.a=d
this.b=e},
aW5:function aW5(d){this.a=d},
aU7:function aU7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1k:function h1k(){},
h97:function h97(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1o:function h1o(d){this.a=d},
h1n:function h1n(){},
a_z:function a_z(d,e){this.c=d
this.a=e},
aB4:function aB4(){var _=this
_.d=$
_.c=_.a=_.e=null},
daQ:function daQ(d){this.a=d},
daR:function daR(d){this.a=d},
daP:function daP(d,e){this.a=d
this.b=e},
daS:function daS(d){this.a=d},
daT:function daT(d){this.a=d},
a_y:function a_y(d){this.a=d},
aB3:function aB3(){this.d=$
this.c=this.a=null},
daM:function daM(d){this.a=d},
daN:function daN(d){this.a=d},
daO:function daO(d){this.a=d},
a_4:function a_4(d){this.a=d},
azK:function azK(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cIH:function cIH(){},
cIN:function cIN(d){this.a=d},
cIO:function cIO(d){this.a=d},
cIP:function cIP(d){this.a=d},
cIM:function cIM(){},
cIQ:function cIQ(d){this.a=d},
cIR:function cIR(d){this.a=d},
cIL:function cIL(){},
cIS:function cIS(d,e){this.a=d
this.b=e},
cIK:function cIK(d,e){this.a=d
this.b=e},
cII:function cII(d,e){this.a=d
this.b=e},
cIT:function cIT(d){this.a=d},
cIJ:function cIJ(){},
cIU:function cIU(d){this.a=d},
a2I:function a2I(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bzu:function bzu(){this.d=$
this.c=this.a=null},
fq1:function fq1(d,e){this.a=d
this.b=e},
fq2:function fq2(d){this.a=d},
fq3:function fq3(d,e){this.a=d
this.b=e},
ad1:function ad1(d,e){this.a=d
this.b=e},
Gy:function Gy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bzs:function bzs(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
fq_:function fq_(d,e){this.a=d
this.b=e},
azD:function azD(d,e){this.c=d
this.a=e},
bzt:function bzt(d,e){var _=this
_.d=$
_.bv$=d
_.a9$=e
_.c=_.a=null},
fq0:function fq0(d){this.a=d},
bzr:function bzr(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aQa:function aQa(){},
aQb:function aQb(){},
bH8(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.be(u),s=B.o.D(B.i.S((u-t)*100),0,99),r=d<0?"-":"",q=A.nR(B.o.v(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h_B(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cR(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b1(B.o.v(s),2,"0")
n.push(A.cR(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.G,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Zs(A.cR(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aSM(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aSM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.i6().l8(85,1280,B.eT),$async$aSM)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fs(),$async$aSM)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hwX()
w=9
return A.b(C.cqi(q,r),$async$aSM)
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
$.am.$1("[worksheets] pick photo failed: "+A.v(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aSM,v)},
aT7(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aT7=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.X(g,"ngmy:ws-thumb:")
if(i){u=C.cqf(g)
w=1
break}if(!B.a.X(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cD.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hu(p,!0,null,o).dc(0,B.fR),$async$aT7)
case 9:n=a1
w=10
return A.b(n.lc(),$async$aT7)
case 10:m=a1
w=11
return A.b(m.b.hk(B.hi),$async$aT7)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eQ(B.dH.gaU(l))
k="data:image/png;base64,"+B.cL.gco().aK(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.i.S(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.aa(f)
$.am.$1("[worksheets] thumbnail shrink failed: "+A.v(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aT7,v)},
h_B:function h_B(){},
uk:function uk(d){this.a=d},
auK:function auK(d,e,f){this.c=d
this.d=e
this.a=f},
aHr:function aHr(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eYz:function eYz(d,e){this.a=d
this.b=e},
eYq:function eYq(d){this.a=d},
eYr:function eYr(d){this.a=d},
eYx:function eYx(d,e){this.a=d
this.b=e},
eYw:function eYw(d,e){this.a=d
this.b=e},
eYt:function eYt(d,e){this.a=d
this.b=e},
eYs:function eYs(d,e){this.a=d
this.b=e},
eYu:function eYu(d){this.a=d},
eYv:function eYv(d,e){this.a=d
this.b=e},
eYy:function eYy(d,e){this.a=d
this.b=e},
eYl:function eYl(d,e){this.a=d
this.b=e},
eYp:function eYp(d){this.a=d},
eYo:function eYo(d,e){this.a=d
this.b=e},
eYn:function eYn(d){this.a=d},
eYA:function eYA(d,e){this.a=d
this.b=e},
eYB:function eYB(d,e){this.a=d
this.b=e},
eYm:function eYm(d,e){this.a=d
this.b=e},
hKy(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
h_C(d,e,f){var w=0,v=A.j(x.N),u
var $async$h_C=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.av(C.hKy(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h_C,v)},
bHa(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bHa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h_C(!0,d,e),$async$bHa)
case 4:w=3
return A.b(r.auI(g,d,e.a),$async$bHa)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dV.aK(B.X.av(C.hKy(d,e,null),null))
u="NGMY_WS:"+B.kS.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHa,v)},
hBx(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hmr(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d2(s,"NGMYWSSYNC2|"))return!0
if(J.d2(s,"NGMY_WS:"))return!0
if(J.eC(s,t))return!0
if(J.d2(s,"{"))try{w=B.X.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ivB(d){var w,v,u,t=C.hBx(d)
if(t==null)return null
if(C.hmr(t))return t
w=B.a.ce(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aX(t,w))
if(C.hmr(v))return v}u=B.a.ce(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aX(t,u))
if(C.hmr(v))return v}return null},
hmq(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d2(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d2(q,"NGMY_WS:")){v=B.cb.cE(0,B.cD.aK(J.n0(q,8)))
w=t.a(B.X.aP(0,v,r))}else w=t.a(B.X.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hgg(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bH9(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bH9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.X(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.auH(t[1]),$async$bH9)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hmq(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hmq(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bH9,v)},
hmp(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lD(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bGD(){var w=0,v=A.j(x.o),u,t
var $async$bGD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HF(),$async$bGD)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hmq(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGD,v)},
hLJ(d,e,f,g){return A.bU(B.L,null,new C.h8V(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h8V:function h8V(d,e,f){this.a=d
this.b=e
this.c=f},
af6:function af6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eYD:function eYD(d,e){this.a=d
this.b=e},
eYE:function eYE(d,e){this.a=d
this.b=e},
eYF:function eYF(d,e){this.a=d
this.b=e},
eYG:function eYG(d,e){this.a=d
this.b=e},
eYC:function eYC(d){this.a=d},
auE:function auE(d,e,f){this.c=d
this.d=e
this.a=f},
bom:function bom(){var _=this
_.c=_.a=_.e=_.d=null},
eYg:function eYg(d,e){this.a=d
this.b=e},
eYh:function eYh(d){this.a=d},
eYi:function eYi(d){this.a=d},
auJ:function auJ(d){this.a=d},
aHq:function aHq(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eYk:function eYk(d){this.a=d},
eYj:function eYj(d){this.a=d},
i3z(d,e,f,g,h){return new C.Pd(h,g,d,e,f,null)},
aMn:function aMn(d,e){this.a=d
this.b=e},
Pd:function Pd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aHs:function aHs(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eZ2:function eZ2(){},
eYZ:function eYZ(d,e){this.a=d
this.b=e},
eZ_:function eZ_(d){this.a=d},
eYK:function eYK(d){this.a=d},
eYI:function eYI(d){this.a=d},
eYJ:function eYJ(d){this.a=d},
eYT:function eYT(d,e){this.a=d
this.b=e},
eYQ:function eYQ(d,e){this.a=d
this.b=e},
eYR:function eYR(d,e){this.a=d
this.b=e},
eYS:function eYS(d,e,f){this.a=d
this.b=e
this.c=f},
eYO:function eYO(d,e,f){this.a=d
this.b=e
this.c=f},
eYM:function eYM(d){this.a=d},
eYN:function eYN(d){this.a=d},
eYP:function eYP(d){this.a=d},
eZ5:function eZ5(d){this.a=d},
eZ4:function eZ4(d){this.a=d},
eZ6:function eZ6(d){this.a=d},
eZ3:function eZ3(d){this.a=d},
eYH:function eYH(d){this.a=d},
eYL:function eYL(d,e){this.a=d
this.b=e},
eZ1:function eZ1(d,e){this.a=d
this.b=e},
eZ0:function eZ0(d,e){this.a=d
this.b=e},
eYW:function eYW(d){this.a=d},
eYX:function eYX(d){this.a=d},
eYY:function eYY(d,e){this.a=d
this.b=e},
eYV:function eYV(d,e){this.a=d
this.b=e},
eYU:function eYU(d,e,f){this.a=d
this.b=e
this.c=f},
bBf:function bBf(){},
Be(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ahF(d,e,f){return C.ijF(d,e,f)},
ijF(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ahF=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aG("String",e,f),$async$ahF)
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
$.am.$1("[worksheets] setString failed for "+e+": "+A.v(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahF,v)},
ahE(d,e){return C.ijE(d,e)},
ijE(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ahE=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ahE)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.aa(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.v(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ahE,v)},
iiu(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TZ(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bE_(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bE_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.X(q,"ngmy:thumb:")
if(!t)t=B.a.X(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.X(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b5q(q),$async$bE_)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aT7(q,!1),$async$bE_)
case 6:r=f
if(r!=null&&B.a.X(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bE_,v)},
hRW(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aI(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aI(d.h(0,"quantity"))
if(w==null)w=null
v=A.aI(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.rv(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rv(p,J.k(u==null?"":u),1,o,q)},
hgg(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.d3(s,x.f)
w=A.cE(w,new C.cHY(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.B(new A.Y(w,new C.cHZ(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bi(J.k(t==null?"":t))
return new C.lD(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
inF(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wX
case"female":case"f":return D.oI
default:return D.zr}},
hGS(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hqS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.inF(v==null?j:J.k(v))
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
m=A.aI(d.h(0,"birthOrder"))
m=m==null?j:B.i.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aI(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.i.M(k)
return new C.i5(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
inH(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Pr
case"viewer":return D.l3
default:return D.v1}},
inI(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hv(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aRP(d,e){return B.a.i(e.toLowerCase())===C.Hv(d,e)&&d.y!==D.l3},
uz(d,e){var w,v=d.y
if(v===D.l3)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hv(d,e))return!0
if(v===D.Pr)return!0
v=d.e
return new A.N(v,A.hmx(),A.T(v).k("N<1,q>")).q(0,w)},
in1(d){return J.dI(d,new C.fKg()).gL(0)},
h9G(d){var w=0,v=A.j(x.y),u,t
var $async$h9G=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Br(d),$async$h9G)
case 3:u=t.rq(f,new C.h9H(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h9G,v)},
bF3(d,e){var w=0,v=A.j(x.H),u,t
var $async$bF3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Br(d),$async$bF3)
case 3:t=g
if(J.rq(t,new C.fHL(e))){w=1
break}if(C.in1(t)>=2)throw A.X(A.bb("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bF3,v)},
amJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.d3(h,x.f)
w=A.cE(w,new C.bU5(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.B(new A.Y(w,new C.bU6(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b9(u,new C.bU7(),x.N)
t=A.B(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bi(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aI(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.inH(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aT(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cm)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.kZ(w,v,s,!r,t,g,q,p,o,n,m)},
hH6(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.az(v,0,8)},
DM(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ST(d),$async$DM)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$DM)
case 4:t=f
w=5
return A.b(t.a7O(0),$async$DM)
case 5:w=6
return A.b(C.fxW(t,l),$async$DM)
case 6:s=f
if(J.cK(s)){u=s
w=1
break}r=B.a.gY(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aW(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hCa(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pc(l,n),$async$DM)
case 11:u=n
w=1
break
case 10:case 8:m=A.aW(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gY(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hCa(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pc(l,n),$async$DM)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DM,v)},
fxW(d,e){return C.ifP(d,e)},
ifP(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fxW=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aW(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Be(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aP(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aT(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gP(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aW(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Be(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hgg(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aW(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Be(a9)+"_"+n))
i=C.iiu(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.X(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b5q(h),$async$fxW)
case 17:g=b1
if(g!=null){i=i.TZ(g)
p=!0}case 16:J.c4(q,i)
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
case 8:J.T1(q,new C.fxX())
if(p&&J.ad(q)!==0)C.pc(a9,q)
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
return A.i($async$fxW,v)},
bFx(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bFx=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ST(d),$async$bFx)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DM(r),$async$bFx)
case 4:t=p.aT(g)
case 5:if(!t.C()){w=6
break}s=t.gP(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFx,v)},
hCa(d){var w,v,u,t
try{w=B.X.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.d3(w,x.f)
v=A.cE(v,new C.ftu(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.B(new A.Y(v,new C.ftv(),u),u.k("M.E"))
B.d.b0(v,new C.ftw())
return v}catch(t){v=A.a([],x.D)
return v}},
pc(d,e){return C.ixq(d,e)},
ixq(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pc=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ST(b2),$async$pc)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$pc)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Be(a8)
p=A.aW(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b9(x.j.a(B.X.aP(0,p,null)),new C.h18(),a2).fF(0)
a2=J.b9(b3,new C.h19(),a2).c0(0,new C.h1a())
n=A.d_(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eC(n,m)?17:18
break
case 17:a5=C.Be(a8)
l=A.aW(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aa2(l),$async$pc)
case 19:t=21
a5=C.Be(a8)
k=A.aW(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.aa2(a5==null?null:J.k(a5)),$async$pc)
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
return A.b(C.ahE(r,"ngmy_worksheet_item_v3_"+C.Be(a8)+"_"+m),$async$pc)
case 29:w=30
return A.b(C.ahE(r,"ngmy_worksheet_thumb_v3_"+C.Be(a8)+"_"+m),$async$pc)
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
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bE_(h),$async$pc)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ahF(r,"ngmy_worksheet_thumb_v3_"+C.Be(a8)+"_"+a4,f),$async$pc)
case 40:g=i.TZ(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ahE(r,"ngmy_worksheet_thumb_v3_"+C.Be(a8)+"_"+a4),$async$pc)
case 41:g=i.TZ(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ahE(r,"ngmy_worksheet_thumb_v3_"+C.Be(a8)+"_"+a4),$async$pc)
case 42:case 34:a4=i.a
w=43
return A.b(C.ahF(r,"ngmy_worksheet_item_v3_"+C.Be(a8)+"_"+a4,B.X.av(g.ak(),null)),$async$pc)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.c4(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ahF(r,"ngmy_worksheets_index_v3_"+C.Be(a8),B.X.av(q,null)),$async$pc)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eO(b3,new C.h1b(q))
a4=a3.$ti.k("cN<1,ab<q,@>>")
a7=A.B(new A.cN(a3,new C.h1c(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ahF(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gY(B.a.i(a8.toLowerCase()))),B.X.av(a0,null)),$async$pc)
case 45:w=46
return A.b(J.hR0(r),$async$pc)
case 46:if(a2.gcn(b3)&&J.ad(q)===0){u=!1
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
$.am.$1("[worksheets] saveWorksheetProjects error: "+A.v(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$pc,v)},
Mn(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$Mn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DM(d),$async$Mn)
case 3:t=g
s=J.cF(t)
r=s.bk(t,new C.h9F(e))
if(r===-1)s.ca(t,0,e)
else s.n(t,r,e)
u=C.pc(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Mn,v)},
bFj(d,e){var w=0,v=A.j(x.H),u
var $async$bFj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DM(d),$async$bFj)
case 2:u=g
J.n_(u,new C.fKK(e))
w=3
return A.b(C.pc(d,u),$async$bFj)
case 3:return A.h(null,v)}})
return A.i($async$bFj,v)},
Hx(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Hx)
case 3:l=f
k=A.a([],x._)
j=B.a.gY(B.a.i(d.toLowerCase()))
i=A.aW(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aP(0,i,null)
if(x.j.b(t)){j=J.d3(t,x.f)
j=A.cE(j,new C.fNY(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.B(new A.Y(j,new C.fNZ(),s),s.k("M.E"))
B.d.b0(r,new C.fO_())
k=r}}catch(h){}w=4
return A.b(C.fuf(d),$async$Hx)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.igc(k,p,d)
j=A.T(o)
s=j.k("N<1,ab<q,@>>")
s=A.B(new A.N(o,new C.fO0(),s),s.k("ak.E"))
n=B.X.av(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.S_(d,o),$async$Hx)
case 7:case 6:j=j.k("Y<1>")
m=A.B(new A.Y(o,new C.fO1(d),j),j.k("M.E"))
if(m.length!==0)C.aRB(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hx,v)},
h0V(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h0V=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S_(d,e),$async$h0V)
case 3:t=J.dI(e,new C.h0W(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aRB(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h0V,v)},
a4n(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4n=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a4n)
case 2:n=g
m=B.a.gY(B.a.i(d.toLowerCase()))
l=A.aW(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aP(0,l,null)
if(x.j.b(u)){m=J.d3(u,x.f)
m=A.cE(m,new C.h9A(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.B(new A.Y(m,new C.h9B(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oB(o,new C.h9C(e))
if(B.a.i(e.x).length===0&&C.uz(e,d)){m=B.a.i(d.toLowerCase())
p=e.aGW(e.y===D.l3?D.l3:D.v1,m)}else p=e
if(q===-1)J.mZ(o,0,p)
else J.aJ(o,q,p)
w=3
return A.b(C.S_(d,o),$async$a4n)
case 3:w=C.uz(p,d)?4:5
break
case 4:w=6
return A.b(C.aRA(C.Hv(p,d),p),$async$a4n)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4n,v)},
aRN(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aRN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hx(d),$async$aRN)
case 2:u=g
t=J.cF(u)
s=A.ny(t.eO(u,new C.fKr(e)))
t.bq(u,new C.fKs(e))
w=3
return A.b(C.S_(d,u),$async$aRN)
case 3:w=s!=null&&C.aRP(s,d)?4:5
break
case 4:w=6
return A.b(C.fty(e),$async$aRN)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aRN,v)},
ajr(d){var w=d.f,v=A.T(w).k("Y<1>")
w=A.B(new A.Y(w,new C.h9L(),v),v.k("M.E"))
return w},
hjR(d,e){var w,v=d.f,u=A.ny(new A.Y(v,new C.fJW(e),A.T(v).k("Y<1>")))
v=C.ajr(d)
w=A.T(v).k("Y<1>")
v=A.B(new A.Y(v,new C.fJX(e,u),w),w.k("M.E"))
B.d.b0(v,new C.fJY())
return v},
inL(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hLN(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bk(C.hjR(d,u),new C.h98(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ipe(d,e){var w
if(e==null||e.length===0)return 1
w=C.hjR(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fOP(),A.T(w).k("N<1,H>")).eD(0,B.yn)+1},
ixj(d){var w,v=C.ajr(d)
if(v.length===0)return null
w=new A.Y(v,new C.h0P(),A.T(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
inG(d){return A.J(["id",d.a,"name",d.b,"gender",C.hGS(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ip9(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aR(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.I)(a0),++u){q=a0[u]
p=q.a
r.I(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.zr?n:q.c
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
d=q.aGR(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cRM(a1,w,a3.d,a2.y,s,a0,v)},
Br(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Br=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Br)
case 3:q=f
p=B.a.gY(B.a.i(d.toLowerCase()))
o=A.aW(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.d3(t,x.f)
p=A.cE(p,new C.fNV(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.B(new A.Y(p,new C.fNW(),s),s.k("M.E"))
B.d.b0(p,new C.fNX())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Br,v)},
aj9(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aj9=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.v1:D.l3
a7=C.Hv(b2,b3)
w=2
return A.b(C.Br(b1),$async$aj9)
case 2:a8=b5
a9=J.cF(a8)
b0=a9.bk(a8,new C.h0K(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bF3(b1,b2),$async$aj9)
case 5:case 4:if(b0===-1){u=b2.aGW(a6,a7)
a9.ca(a8,0,u)}else{t=a9.h(a8,b0)
s=A.S(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.I)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.I)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.zr?i:l.c
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
s.n(0,m,l.aGR(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.B(new A.b8(s,k),k.k("M.E"))
k=a5?D.v1:D.l3
u=t.cRO(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.S_(b1,a8),$async$aj9)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aRA(B.a.i(b3.toLowerCase()),u),$async$aj9)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aj9,v)},
hCA(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,ab<q,@>>"),k=A.B(new A.N(m,C.hKS(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hCB(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,ab<q,@>>")
u=A.B(new A.N(u,C.hKS(),t),t.k("ak.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
idJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.amJ(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hmx(),A.T(j).k("N<1,q>")).c0(0,new C.fu2())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.v1
else s=B.d.q(t,u)?D.Pr:D.l3
return w.aGW(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.amJ(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.d3(q,h)
h=A.cE(h,new C.fu3(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.B(new A.Y(h,new C.fu4(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b9(n,new C.fu5(),x.N).c0(0,new C.fu6())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.v1
else s=B.d.q(t,u)?D.Pr:D.l3
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bi(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aI(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.M(j)
if(j==null)j=0
return new C.kZ(h,r,p,!m,t,o,l,j,v,s,B.ch)},
fuf(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fuf=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fuj()
h=x.N
g=x.z
w=7
return A.b(A.ic(A.a([A.lH("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lH("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lH("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fuf)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.h2(l,o)
J.h2(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aJ(m,j,k)}l=m
h=A.a4(l).k("b8<2>")
h=A.cE(new A.b8(l,h),new C.fug(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.B(new A.Y(h,new C.fuh(),l),l.k("M.E"))
B.d.b0(l,new C.fui())
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
l=B.a.q(d,"Could not find the table 'public.family_trees'")||B.a.q(d,'relation "public.family_trees" does not exist')
h=$.am
if(l)h.$1("[family_trees] table missing \u2014 run supabase/family_trees_table.sql")
else h.$1("[family_trees] fetch error: "+A.v(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fuf,v)},
igc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dO(e,new C.fyG(),v).c0(0,new C.fyH())
t=A.d_(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hv(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.l3){m=q.e
m=!new A.N(m,A.hmx(),A.T(m).k("N<1,q>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ip9(l,v)
o=C.Hv(k,w)
p=v.d
s.n(0,u,o===w?k.bgr(p,D.v1):k.bgr(p,v.y))}j=s.$ti.k("b8<2>")
j=A.B(new A.b8(s,j),j.k("M.E"))
B.d.b0(j,new C.fyI())
return j},
S_(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$S_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$S_)
case 2:u=g
t=B.a.gY(B.a.i(d.toLowerCase()))
s=J.b9(e,new C.fBH(),x.a)
s=A.B(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aG("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.av(s,null)),$async$S_)
case 3:return A.h(null,v)}})
return A.i($async$S_,v)},
aRA(d,e){return C.ilt(d,e)},
ilt(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aRA=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m9("family_trees",A.a([C.hCA(e,d)],p),null,B.cS),$async$aRA)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m9("family_trees",A.a([C.hCB(e,d)],p),null,B.cS),$async$aRA)
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
$.am.$1("[family_trees] upsert error: "+A.v(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aRA,v)},
aRB(d,e){return C.ilu(d,e)},
ilu(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aRB=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,ab<q,@>>")
m=n.k("ak.E")
l=A.B(new A.N(e,new C.fH_(d),n),m)
r=l
w=7
return A.b(A.m9("family_trees",r,null,B.cS),$async$aRB)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.N(e,new C.fH0(d),n),m)
p=k
w=8
return A.b(A.m9("family_trees",p,null,B.cS),$async$aRB)
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
$.am.$1("[family_trees] bulk upsert error: "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aRB,v)},
fty(d){return C.icX(d)},
icX(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fty=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.Sq("family_trees",A.J(["id",d],x.N,x.z),null,B.cS),$async$fty)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.aa(p)
$.am.$1("[family_trees] delete error: "+A.v(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fty,v)},
rv:function rv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lD:function lD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cI0:function cI0(){},
cI_:function cI_(){},
cHY:function cHY(){},
cHZ:function cHZ(){},
IC:function IC(d,e){this.a=d
this.b=e},
i5:function i5(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
amI:function amI(d,e){this.a=d
this.b=e},
fKg:function fKg(){},
h9H:function h9H(d){this.a=d},
fHL:function fHL(d){this.a=d},
kZ:function kZ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bU9:function bU9(){},
bU8:function bU8(){},
bU5:function bU5(){},
bU6:function bU6(){},
bU7:function bU7(){},
fxX:function fxX(){},
ftu:function ftu(){},
ftv:function ftv(){},
ftw:function ftw(){},
h18:function h18(){},
h19:function h19(){},
h1a:function h1a(){},
h1b:function h1b(d){this.a=d},
h1c:function h1c(){},
h9F:function h9F(d){this.a=d},
fKK:function fKK(d){this.a=d},
fNY:function fNY(){},
fNZ:function fNZ(){},
fO_:function fO_(){},
fO0:function fO0(){},
fO1:function fO1(d){this.a=d},
h0W:function h0W(d){this.a=d},
h9A:function h9A(){},
h9B:function h9B(){},
h9C:function h9C(d){this.a=d},
fKr:function fKr(d){this.a=d},
fKs:function fKs(d){this.a=d},
h9L:function h9L(){},
fJW:function fJW(d){this.a=d},
fJX:function fJX(d,e){this.a=d
this.b=e},
fJY:function fJY(){},
h98:function h98(d){this.a=d},
fOP:function fOP(){},
h0P:function h0P(){},
fNV:function fNV(){},
fNW:function fNW(){},
fNX:function fNX(){},
h0K:function h0K(d){this.a=d},
fu2:function fu2(){},
fu3:function fu3(){},
fu4:function fu4(){},
fu5:function fu5(){},
fu6:function fu6(){},
fuj:function fuj(){},
fuk:function fuk(d){this.a=d},
fug:function fug(d){this.a=d},
fuh:function fuh(){},
fui:function fui(){},
fyG:function fyG(){},
fyH:function fyH(){},
fyI:function fyI(){},
fBH:function fBH(){},
fH_:function fH_(d){this.a=d},
fH0:function fH0(d){this.a=d},
cI1:function cI1(d,e){this.a=d
this.b=e},
cI2:function cI2(d,e){this.a=d
this.b=e},
aJz:function aJz(d,e,f){this.a=d
this.b=e
this.c=f},
bbJ:function bbJ(){this.b=this.a=0},
bbI:function bbI(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bzv:function bzv(){},
xs(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcg()+"/"+w.gcv()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.b1(B.o.v(w.gnB()),2,"0")+":"+B.a.b1(B.o.v(w.gH_()),2,"0")},
imy(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.br(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bY(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.w.j(0.22)
$.R()
u=A.L()
u.r=v.gp(0)
a5.c1(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=B.hj[l]*a7*0.075
j=k-w
j=A.bu(new A.a2(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.S,B.Q,B.V,B.W,B.U)
i.r=B.dh.gp(0)
a5.aq(j,i)
k-=q
k=A.bu(new A.a2(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.S,B.Q,B.V,B.W,B.U)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bu(new A.a2(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bu(new A.a2(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a5(0,new A.r(s,a7*0.17)),A.ahD(B.t6,t))
s=g.a5(0,new A.r(s,a7*0.18))
q=A.L()
q.r=B.t6.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a5(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,A.ahD(B.t6,t))
w=A.L()
w.r=B.t6.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a5(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=B.md.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=B.t6.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bW(a0,a1)
u=A.L()
u.r=B.md.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bW(a0,a1)
u=A.L()
u.r=B.md.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=B.hj[l]
t=new A.ar(B.S,B.Q,B.V,B.W,B.U)
t.r=B.md.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.i.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=B.hj[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.S,B.Q,B.V,B.W,B.U)
k.b=B.aa
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.S,B.Q,B.V,B.W,B.U)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.S,B.Q,B.V,B.W,B.U)
j.r=B.w.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.r=B.hR.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bY(a0.a5(0,new A.r(0,a1*0.5)).aJ(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,A.ahD(B.bq,1.8))
a4.restore()},
i3w(){var w,v=$.ox(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hh(u)},
auF(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$auF=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$auF)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$auF)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=A.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.aa(m)
$.am.$1("[worksheet qr stash] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$auF,v)},
auG(d){return C.i3x(d)},
i3x(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$auG=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$auG)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hS("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cS,null),$async$auG)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.aa(p)
$.am.$1("[worksheet qr stash] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$auG,v)},
auI(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$auI=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ca(),$async$auI)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.i3w()
w=4
return A.b(C.auF(),$async$auI)
case 4:r=h
q=B.a.i(e)
p=B.dV.aK(t)
J.aJ(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cL.gco().aK(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.auG(r),$async$auI)
case 5:u=new A.a1L("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auI,v)},
auH(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$auH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.ca(),$async$auH)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.auF(),$async$auH)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aI(n.h(o,"usesRemaining"))
l=m==null?null:B.i.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cb.cE(0,B.cD.aK(t))}catch(h){r=A.aa(h)
$.am.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dH(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.auG(q),$async$auH)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$auH,v)},
hwX(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cU.aw(999999)},
i3y(d){var w,v,u,t,s,r,q
try{w=A.Bp(d)
if(w==null)return d
v=w
if(J.Mt(v)>960||J.Ms(v)>960){s=v
r=J.Mt(v)>=J.Ms(v)?960:null
v=A.Sk(s,J.Ms(v)>J.Mt(v)?960:null,B.IB,r)}s=v
u=A.IY(82).zz(s,B.r8)
if(J.ad(u)===0)return d
s=new Uint8Array(A.c9(u))
return s}catch(q){t=A.aa(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
cqi(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cqi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.i3y(e)
$.cqe.n(0,s,t)
u=C.bHc(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cqi,v)},
b5q(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b5q=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d2(l,"data:image")){u=null
w=1
break}t=4
r=J.eC(l,",")?B.d.gal(J.lK(l,",")):l
q=B.cD.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hwX()
w=7
return A.b(C.cqi(p,q),$async$b5q)
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
$.am.$1("[worksheet-thumb] persistDataUrl failed: "+A.v(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b5q,v)},
cqf(d){var w=0,v=A.j(x.T),u,t,s
var $async$cqf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.X(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.cqh(s),$async$cqf)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cL.gco().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cqf,v)},
aa2(d){var w=0,v=A.j(x.H),u,t
var $async$aa2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hKz(d)
if(t==null){w=1
break}$.cqe.W(0,t)
w=3
return A.b(C.bHb(t),$async$aa2)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aa2,v)},
bHc(d,e){return C.ivE(d,e)},
ivE(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bHc=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aQp
w=7
return A.b(n==null?$.aQp=A.hiF():n,$async$bHc)
case 7:r=g
q=new Uint8Array(A.c9(e))
p=J.me(r,"thumbs","readwrite")
B.iN.mi(J.md(p,"thumbs"),q,l)
w=8
return A.b(J.oA(p),$async$bHc)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.aa(k)
$.am.$1("[worksheet-thumb idb put] "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bHc,v)},
bHb(d){return C.ivC(d)},
ivC(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bHb=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aQp
w=7
return A.b(o==null?$.aQp=A.hiF():o,$async$bHb)
case 7:r=f
q=J.me(r,"thumbs","readwrite")
B.iN.Gz(J.md(q,"thumbs"),m)
w=8
return A.b(J.oA(q),$async$bHb)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.aa(l)
$.am.$1("[worksheet-thumb idb delete] "+A.v(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bHb,v)}},D,M,U,V,W,F,X,N,O,P,Y,Q,Z,R,A_,L,G,A0
J=c[1]
A=c[0]
B=c[2]
S=c[60]
H=c[111]
I=c[103]
T=c[24]
E=c[52]
K=c[39]
C=a.updateHolder(c[4],C)
D=c[107]
M=c[85]
U=c[108]
V=c[79]
W=c[88]
F=c[47]
X=c[69]
N=c[61]
O=c[70]
P=c[84]
Y=c[109]
Q=c[110]
Z=c[40]
R=c[94]
A_=c[25]
L=c[58]
G=c[81]
A0=c[89]
C.aqi.prototype={}
C.b0G.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bkM(),f=h.x!=null&&h.zU(i).length===0
if(h.x!=null)w=f?B.b5:B.bE
else w=h.gV_()?B.bE:B.e6
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.K(D.brQ,B.r,1)
s=x.p
r=A.o(i,A.x(A.a([A.o(i,D.fjV,B.f,i,i,new A.n(B.b5.j(0.12),i,i,A.m(999),i,i,B.m),i,i,i,i,B.hr,i,i,i),B.T,D.fQ7,B.av,A.c(C.xs(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fLH,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.b9m,i,i,i,i,B.P_,i,i,i)
q=A.m(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b5.j(0.28),B.r,1)
n=A.hkY(h.d)
o=A.o(B.z,C.b0F(A.fRa(h.e,n),30),B.f,i,i,new A.n(B.mg,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fGD,B.K,i,i)
m=A.m(14)
l=A.K(B.bn,B.r,1)
q=A.o(i,A.x(A.a([o,B.P,n,B.bB,D.fQq,B.af,A.o(i,A.x(A.a([D.h5J,B.bB,A.c(A.Bt(h.c),i,i,i,i,i,i,D.fBc,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.c,i,l,m,i,i,B.m),i,i,i,i,B.f6,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.aS,i,p,q,i,i,B.m),i,i,i,i,G.anr,i,i,i)
p=A.m(16)
m=A.K(B.bn,B.r,1)
l=j.aU4("Original due",C.xs(h.r,!1))
n=j.aU4("Current due",C.xs(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.T,A.o(i,A.x(A.a([l,B.P,n,B.T,A.o(i,A.c(h.gaO2(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.n(o,i,i,k,i,i,B.m),i,i,i,i,B.z6,i,i,1/0),B.T,j.cmj(),B.P,j.c8Q(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bk,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.T,A.o(i,A.x(A.a([D.fRp,B.av,A.c(q,i,i,i,i,i,i,D.fFP,i,i,i)],s),B.D,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bk,i,i,1/0)],s))}if(h.gaIC()){q=A.m(14)
o=A.K(B.cA,B.r,1.6)
B.d.u(p,A.a([B.T,A.o(i,A.x(A.a([D.h71,B.P,A.bw(A.m(12),A.eb(new A.a5(1/0,88,A.b4(i,i,i,new A.Xv(h.ax,B.a_,D.foJ,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.D,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.c,i,o,q,i,i,B.m),i,i,i,i,B.CN,i,i,i)],s))}p.push(B.aB)
p.push(D.fZP)
return A.o(i,A.x(A.a([r,new A.D(B.a1B,A.x(p,B.al,i,B.e,B.h,0,B.p),i)],s),B.al,i,B.e,B.N,0,B.p),B.aq,i,i,new A.n(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aU4(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.acP,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fCf,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
cmj(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.ab5(B.e6,u,"Not paid yet")
w=t.zU(null).length
v=w===0?B.b5:B.bE
return this.ab5(v,u,C.xs(t.x,!0))},
c8Q(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.ab5(B.b5,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.ab5(B.b5,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.acP,u,u,u)
v=A.T(d).k("N<1,h8>")
v=A.B(new A.N(d,new C.c9t(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.c_(B.bI,v,B.br,u,6,6)],x.p),B.D,u,B.e,B.h,0,B.p)},
ab5(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.acP,w,w,w),1),new A.dc(1,B.ck,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e1,w,w),w)],x.p),B.D,w,B.e,B.h,0,w,w)}}
C.bdY.prototype={
a2(d,e){new A.Xv(this.b,B.a_,e,!0,3.5,null).a2(d,e)},
aD(d){return d.b!==this.b}}
C.aqv.prototype={
T(){return new C.aFm(A.a([],x.bp))},
ge3(){return this.c}}
C.aFm.prototype={
Z(){this.a4()
this.Jy()},
Jy(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a3C(t.a.c),$async$Jy)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dSB(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jy,v)},
aW2(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bu:B.bh).j(0.22)
w=A.m(10)
return A.bA(v,new A.b6(4,r,new A.aw(u,1,B.r,-1)),v,B.bk,v,v,v,v,!0,new A.b6(4,w,new A.aw((this.a.d.a?B.bu:B.bh).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b7_),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aW1(d){return this.aW2(d,null)},
Qu(d){return this.cq1(d)},
cq1(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qu=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.IA:B.eT
w=7
return A.b(new A.i6().D0(72,900,900,n),$async$Qu)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fs(),$async$Qu)
case 8:p=f
n=B.cL.gco().aK(p)
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
if(n!=null)n.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Qu,v)},
b4n(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.m(10),n=A.K((q?B.bu:B.bh).j(0.18),B.r,1)
if(d)q=B.cX
else q=s.a.d.a?B.bu:B.bh
q=A.W(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cX
else u=s.a.d.a?B.bu:B.bh
t=x.p
u=A.E(A.x(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.D,r,B.e,B.h,0,B.p),1)
v=A.fr(r,r,r,r,r,r,r,r,r,r,r,B.cX,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cj)
q=A.a([q,B.ab,u,A.bO(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.W(B.cB,s.a.d.a?B.bu:B.bh,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cj))
return A.o(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.n(p,r,n,o,r,r,B.m),r,r,r,B.jx,D.bF2,r,r,r)},
DU(d){return this.bF_(d)},
bEZ(){return this.DU(null)},
bF_(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DU=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ax()
r=new A.at(new A.bc(a4,B.b8,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.fM(a4)
p=a5.c
a4=a4===q?B.o.v(B.i.M(p)):B.i.ac(p,2)}o=new A.at(new A.bc(a4,B.b8,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.at(new A.bc(a4,B.b8,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bQ(6048e8)
m=A.c0(a4.gck(),a4.gcg(),a4.gcv(),0,0,0,0,0)}else{a4=a5.f
m=A.c0(a4.gck(),a4.gcg(),a4.gcv(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bs(a4,!0,x.cT)
i=a3?null:A.hkY(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xy?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hT(B.w.j(0.55),!0,"Dismiss",a4,new C.dSk(),new C.dSl(a2,t,a5,r,new C.dSm(a2,t),o,n,j),B.eD,!0,x.y),$async$DU)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cG(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.R$=0
o.V$=s
o.R$=0
n.V$=s
n.R$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.fvi)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.ftX)
w=1
break}a1=A.fRa(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xy?"male":"female"
w=7
return A.b(A.ajq(a3,A.hty(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DU)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xy?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c0(a3.gck(),a3.gcg(),a3.gcv(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c0(a4.gck(),a4.gcg(),a4.gcv(),0,0,0,0,0)))a5.cU8(a2.a)
w=8
return A.b(A.ajq(t.a.c,a5),$async$DU)
case 8:case 5:w=9
return A.b(t.Jy(),$async$DU)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DU,v)},
aWI(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cX.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cX
else s=(this.a.d.a?B.bu:B.bh).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b0F(d,18)
if(g)q=B.cX
else q=this.a.d.a?B.aS:B.aw
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,A.o(p,A.A(A.a([r,B.bm,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.G,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.b9,B.h,0,p,p),B.f,p,p,new A.n(p,p,s,t,p,p,B.m),p,p,p,p,B.bT,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
Th(d){return this.cI5(d)},
cI5(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Th=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hT(B.w.j(0.55),!0,"Dismiss",s,new C.dSE(),new C.dSF(t,d),B.hf,!0,x.y),$async$Th)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.ajq(t.a.c,d),$async$Th)
case 7:w=8
return A.b(t.Jy(),$async$Th)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Th,v)},
Qt(d,e){return this.bQ1(0,e)},
bQ1(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lm(s,"Cancel","Delete",e.b+" \xb7 "+A.Bt(e.c)+" will be removed from this device.","Delete this debt?"),$async$Qt)
case 3:if(!g){w=1
break}w=4
return A.b(C.fKy(t.a.c,e.a),$async$Qt)
case 4:w=5
return A.b(t.Jy(),$async$Qt)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qt,v)},
agX(d){return this.cjK(d)},
cjK(d){var w=0,v=A.j(x.H),u=this,t
var $async$agX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dSy(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agX)
case 2:return A.h(null,v)}})
return A.i($async$agX,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ezY
w=J.dI(m.d,new C.dSG())
v=A.B(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dSH())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cC(v,0,new C.dSI())
w=A.m(18)
s=m.a.d.a
r=s?D.cFE:D.aEt
q=A.K(s?B.cX.j(0.35):B.cX.j(0.18),B.r,1)
s=A.o(l,D.c65,B.f,l,l,new A.n(B.cX.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.as,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a3,!0,A.m(12),A.aM(!1,A.m(12),!0,D.ezi,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dSJ(m),l,l,l,l,l,l,l),B.f,B.cX,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cE5("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bt(t)
r=A.a([A.o(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ab,A.E(m.baA(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.D,l,B.e,B.h,0,B.p),B.f,l,l,new A.n(l,l,q,w,l,new A.a8(B.ay,B.aC,B.x,r,l,l),B.m),l,l,l,l,B.ano,l,l,l),B.aB],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.eg:B.c
q=A.m(18)
o=A.K((w?B.bu:B.bh).j(0.12),B.r,1)
n=A.o(l,D.c0F,B.f,l,l,new A.n(B.cX.j(0.12),l,l,A.m(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.aw,l,l,l,l,l,l,l,l,15,l,l,B.G,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.o(l,A.x(A.a([n,B.af,w,B.av,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.n(s,l,o,q,l,l,B.m),l,l,l,l,D.bHI,l,l,1/0))}else{w=m.gcpg()
s=A.B(new A.N(v,w,A.T(v).k("N<1,w>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bJo,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bh,l,l,l,l,l,l,l,l,12,l,l,B.G,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.N(u,w,A.T(u).k("N<1,w>")))
B.d.u(s,q)}B.d.u(r,s)}return A.x(r,B.al,l,B.e,B.h,0,B.p)},
baA(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.K((v.a.d.a?B.bu:B.bh).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bh,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cX
else w=v.a.d.a?B.aS:B.aw
return A.o(u,A.x(A.a([q,B.bB,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.D,u,B.e,B.h,0,B.p),B.f,u,u,new A.n(t,u,r,s,u,u,B.m),u,u,u,u,B.ez,u,u,u)},
cE5(d,e){return this.baA(!1,d,e)},
cph(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zU(j).length,h=d.bk1()
if(d.x!=null){w=d.zU(j).length
v=w===0?B.cX:B.bE}else if(d.gV_())v=B.bE
else{if(h)w=B.cX
else w=k.a.d.a?B.bu:B.bh
v=w}if(d.x!=null){w=d.zU(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xs(u,!1)}else{u.toString
t="Paid "+C.xs(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xs(w,!1)+" \xb7 "+i+" missed":"Due "+C.xs(w,!1)}w=k.a.d.a?B.eg:B.c
u=A.m(18)
if(d.gV_()&&d.x==null)s=B.bE.j(0.35)
else s=(k.a.d.a?B.bu:B.bh).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.H,B.w.j(0.04),B.cN,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bs:B.mg
o=A.K(d.gV_()&&d.x==null?B.bE.j(0.45):B.cX.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hkY(d.d)
o=A.o(B.z,A.d0(C.b0F(A.fRa(d.e,m),24),n),B.f,j,j,new A.n(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.aw
m=x.p
n=A.a([new A.dc(1,B.ck,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.G,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaIC())B.d.u(n,A.a([B.e3,A.W(B.PS,B.cX.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cT,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.D,j,B.e,B.h,0,B.p),1)
n=A.Bt(d.c)
l=k.a.d.a?B.aS:B.aw
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.o(j,A.aF(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.D(U.anc,A.A(A.a([o,B.ba,p,B.ab,A.x(A.a([n,B.bB,A.W(B.eK,(k.a.d.a?B.bu:B.bh).j(0.5),j,j,j,18)],m),B.dK,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dSA(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.n(w,j,s,u,r,j,B.m),j,j,j,B.da,j,j,j,j)}}
C.uU.prototype={}
C.amw.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.b7
u=v?B.D:B.l
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.H,B.w.j(0.45),B.cz,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.ay(a0,A.o(a0,A.W(B.cB,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.n(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iZ,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aAB,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.HD,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.dk(B.dv,m,B.f,A.A(l,B.l,a0,B.e,B.N,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bEe,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cK:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fw,A.x(a2,u,a0,B.e,B.N,0,B.p),a0),1))
n.push(D.fpx)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.D(B.wM,A.o(a0,a0,B.f,a0,a0,new A.n(a0,a0,a0,a0,a0,new A.a8(B.a5,B.a9,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lY,A.x(a2,B.l,a0,B.e,B.N,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hE,a0,a0,a0,a0)}return A.o(a0,e,B.f,a0,a0,new A.n(a0,a0,q,s,p,new A.a8(B.ay,B.aC,B.x,a1.d,a0,a0),B.m),a0,a0,a0,D.bFw,a0,a0,a0,a0)}}
C.aXn.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.o(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.b7?B.b7:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cK,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cT,n],m)
if(p.z)o.push(new A.D(B.uT,n,q))
return new A.D(B.da,A.x(o,B.l,q,B.e,B.N,0,B.p),q)}}
C.Uj.prototype={
T(){return new C.bhA()}}
C.bhA.prototype={
gc3w(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aD(d,n,x.w).w,l=x.p,k=A.a([D.ezT,D.ezZ],l)
for(w=0;w<8;++w){v=D.a60[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.Io:B.zS
q=t===s
r=A.W(r,q?B.ey:B.bV,n,n,n,17)
q=q?B.c:B.ac
r=A.a([r,B.bm,A.c(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ab,new A.bz(1,B.bd,A.c(v.c,n,1,B.a2,n,n,n,B.Bg,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.aw(B.ey,2,B.r,-1)
s=new A.n(n,n,new A.bF(p,p,p,p),new A.be(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.ay(n,new A.D(B.eS,A.x(A.a([new A.D(B.n7,new A.c6(B.aM,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.o(n,new A.dp(!0,new C.amw(v,q.d,q.e,new C.dig(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.D,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dih(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bFT,A.bJ(D.hcC,n,new C.dii(o,d),A.bn(B.b2,n,n,n,n,B.pb,n,n,new A.ba(A.m(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cO(new A.aY(0,1/0,0,m.a.b*0.9),A.cu(k,n,n,D.bKj,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nv.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bgD(d,e,f){return new C.nv(this.a,e,d,f)}}
C.IB.prototype={
x8(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IB(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aGK(d){var w=null
return this.x8(w,w,w,w,w,d,w,w,w,w,w,w)},
cPL(d){var w=null
return this.x8(w,w,w,w,d,w,w,w,w,w,w,w)},
bgB(d,e,f){var w=null
return this.x8(d,w,w,w,w,w,w,w,e,w,f,w)},
cQp(d){var w=null
return this.x8(w,w,w,w,w,w,d,w,w,w,w,w)},
cQy(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,w,d,w,w)},
cPJ(d){var w=null
return this.x8(w,w,w,d,w,w,w,w,w,w,w,w)},
cQA(d){var w=null
return this.x8(w,w,w,w,w,w,w,w,w,w,w,d)},
cPG(d){var w=null
return this.x8(w,w,d,w,w,w,w,w,w,w,w,w)},
cPB(d){var w=null
return this.x8(w,d,w,w,w,w,w,w,w,w,w,w)},
Gr(d){var w=null
return this.x8(w,w,w,w,w,w,w,d,w,w,w,w)},
cQI(d,e,f,g,h,i,j,k,l,m,n){return this.x8(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cNf(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bSR(d),k=A.aI(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aI(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Eo.gew(D.Eo))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a7H)
q=l.$2("frame",D.a70)
l=l.$2("texture",D.a6X)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cQI(p,u,t,q,r,A.rk(d.h(0,"ribbon"))?A.H7(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_X.prototype={
T(){return new C.aCk(A.a([],x.I),D.Pq)},
ge3(){return this.c}}
C.aCk.prototype={
Z(){var w,v=this
v.a4()
v.f=A.Am(0,1)
w=$.ax()
v.z=new A.at(B.ax,w)
v.Q=new A.at(B.ax,w)
v.lh()
w=v.a
C.bFt(w.c,w.d).bF(new C.diX(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.d()
u.t()
u=v.z
u===$&&A.d()
w=$.ax()
u.V$=w
u.R$=0
u=v.Q
u===$&&A.d()
u.V$=w
u.R$=0
v.a3()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LV(s.c,s.d),$async$lh)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.diL(t,r))
t.ayn()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
gauV(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
ayn(){var w,v,u=this.gauV(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb2(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb2(0,w==null?"":w)},
ci8(d){this.l(new C.diI(this,d))
this.ayn()},
Ol(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ol=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nv(B.o.v(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aTv(r.c,r.d,s),$async$Ol)
case 3:w=4
return A.b(t.lh(),$async$Ol)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.oB(t.d,new C.dij(s))
p=q>=0?q:J.ad(t.d)-1
t.l(new C.dik(t,p))
t.ayn()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BZ(p+1,B.cl,B.l0),$async$Ol)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Ol,v)},
BD(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$BD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gauV()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aTv(o.c,o.d,new C.nv(s,r,q,new A.V(p,0,!1))),$async$BD)
case 3:w=4
return A.b(t.lh(),$async$BD)
case 4:if(t.c==null){w=1
break}t.l(new C.diM(t))
case 1:return A.h(u,v)}})
return A.i($async$BD,v)},
P3(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$P3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gauV()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dis(r),s,null,!0,!0,x.y),$async$P3)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bFd(s.c,s.d,r.a),$async$P3)
case 4:t.l(new C.dit(t))
w=5
return A.b(t.lh(),$async$P3)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.V2(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$P3,v)},
zf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BD(),$async$zf)
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
return A.b(C.Si(s,r.r,o,p,q),$async$zf)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hLl(s,r.x,r.r),$async$zf)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LV(s.c,s.d),$async$zf)
case 10:l=e
for(s=n.d,r=J.cF(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nv(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BC(r.c,r.d,l),$async$zf)
case 11:w=12
return A.b(t.lh(),$async$zf)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zf,v)},
a27(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a27=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BD(),$async$a27)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzd(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dB(D.Ah,new C.diJ(t),new C.diK())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new A.o6("Our Family",o,"",""))
for(o=J.aT(t.d);o.C();){n=o.gP(o)
p.push(new A.o6(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(A.hmO(o,new A.tR(s,r,"",p,new A.va(q.d,null,null,null,null,"","","")),null),$async$a27)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a27,v)},
OL(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$OL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BD(),$async$OL)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ai3,null,new C.dio(t),s,!0,!0,!0,E.ab_,!1,!1,x.N),$async$OL)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cPL(r)
t.l(new C.dip(t,q))
s=t.a
w=7
return A.b(C.SW(s.c,s.d,q),$async$OL)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OL,v)},
Yk(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ai3,null,new C.diu(t),r,!0,!0,!0,E.ab_,!1,!1,x.e),$async$Yk)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.div(t,s))
r=t.a
w=4
return A.b(C.SW(r.c,r.d,s),$async$Yk)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.BZ(0,B.e7,B.n5)
case 1:return A.h(u,v)}})
return A.i($async$Yk,v)},
bVH(d){var w=d.bU(),v=B.a.b1(B.o.v(w.gcg()),2,"0"),u=B.a.b1(B.o.v(w.gcv()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gzd(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c2K()
if(r.e)w=D.agH
else if(J.ct(r.d)){w=r.y
v=r.gzd(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fAy,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(I.aow,new C.a_d(w,v,0,q),q),q),B.bx,t,B.am,A.c(u,q,q,q,q,q,q,A.l(q,q,D.kW.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.ay(q,A.o(q,D.fjH,B.f,q,q,new A.n(q,q,q,A.m(18),A.a([new A.ac(0,B.H,B.dS.j(0.45),B.J,18)],x.V),B.xo,B.m),q,q,q,q,B.P3,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcMh(),q,q,q,q,q,q,!1,B.a4))
w.push(B.T)
w.push(A.hu(D.bXI,D.hc3,r.gaPK(),q))
B.d.u(u,w)}w=A.as(A.cc(A.x(u,B.l,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.kW.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e0:B.BS
u=A.x(A.a([new A.D(D.bGY,w,q),A.E(A.JY(v,new C.diV(r),J.ad(r.d)+1,q,r.gci7(),u,B.aM),1),r.bHV()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c5(q,D.a_j,new A.an(B.a0,q,B.b3,B.t,A.a([D.aS4,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c2K(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cK(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KY(B.ea,"AI",h.gbFM(),!0))
if(h.a.f)f.push(new C.KY(B.m_,"Cover",h.gbQB(),!1))
if(h.a.f)f.push(new C.KY(B.xg,"Header",h.gbLx(),!1))
if(J.cK(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KY(B.vi,"Print",h.gcrm(),!1))
if(h.a.f&&J.cK(h.d)&&h.r>=0){v=h.w
u=v?B.hh:B.ji
t=v?"Save":"Edit"
f.push(new C.KY(u,t,v?h.gcxJ():new C.diF(h),!1))}if(h.a.f)f.push(new C.KY(B.i5,"Add page",h.gaPK(),!1))
v=C.hGR(h.y.Q)
u=h.gzd(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dO8
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.aw(B.kC.j(0.5),1,B.r,-1)
j=A.o(g,A.W(l.a,D.kW,g,g,g,17),B.f,g,g,new A.n(g,g,new A.bF(i,i,i,i),new A.be(k,k,k,k),g,new A.a8(B.a5,B.a9,B.x,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.kW.j(0.85)
p.push(new A.bz(1,B.bd,A.ay(B.c1,A.x(A.a([k,B.bB,A.c(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.G,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.N,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.amw(v,u,t+" \xb7 "+s+" "+r,new C.diG(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
Az(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Az=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BD(),$async$Az)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aT(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=A.a3S(B.d.aN(s," "))
s=t.c
s.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.dil(t,p),s,null,!0,!0,x.N),$async$Az)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zf(),$async$Az)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Et(),$async$Az)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.G4("Swahili (Kiswahili)",!0),$async$Az)
case 18:w=16
break
case 17:w=19
return A.b(t.cIJ(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Az)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Az,v)},
a_j(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.K(B.kC.j(0.3),B.r,1),r=x.p
return new A.D(B.cy,A.aM(!1,v,!0,A.o(w,A.A(A.a([A.o(w,A.W(e,B.c,w,w,w,21),B.f,w,w,new A.n(w,w,w,w,w,B.xo,B.a6),w,42,w,w,w,w,w,42),B.ba,A.E(A.x(A.a([A.c(f,w,w,w,w,w,w,B.Ln,w,w,w),A.c(g,w,w,w,w,w,w,B.Fj,w,w,w)],r),B.D,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.n(u,w,s,t,w,w,B.m),w,w,w,w,B.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.diH(d,h),w,w,w,w,w,w,w),w)},
Et(){return this.bVa()},
bVa(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Et=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.diy(r),a7,null,!0,!0,x.ei),$async$Et)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eF("Working on it\u2026",$.ax())
a6.a=!0
a7=r.c
a7.toString
A.ce(null,null,!1,null,new C.diz(o),a7,null,!0,!0,x.H).fw(new C.diA(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c4(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.Ah[a1]
J.c4(j,i.a)}w=8
return A.b(C.aix(a0,a7,new C.diB(o),d,l,e,j),$async$Et)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.aa(a8)
n=A.v(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a6(l,!0).ec()
l=o
l.sii($.ax())
J.aTY(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
j=n
l.U(A.b2(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.an(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bgD(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BC(j.c,j.d,l),$async$Et)
case 11:w=12
return A.b(r.lh(),$async$Et)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.Ah[a1].a)
a5=l.cNf(j,12,a7)
l=r.a
w=15
return A.b(C.SW(l.c,l.d,a5),$async$Et)
case 15:if(r.c!=null)r.l(new C.diC(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.BZ(0,B.e7,B.n5)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b2(a3?A.cBO("Undo",new C.diD(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ej,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Et,v)},
G4(d,e){return this.cIK(d,e)},
cIJ(d){return this.G4(d,!1)},
cIK(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$G4=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eF("Starting\u2026",$.ax())
f.a=!0
k=r.c
k.toString
A.ce(null,null,!1,null,new C.diO(a0),k,null,!0,!0,x.H).fw(new C.diP(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c4(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(A.a46(m,new C.diQ(a0)),$async$G4)
case 10:w=8
break
case 9:w=11
return A.b(C.bH1(new C.diR(a0),m,a2),$async$G4)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.aa(a1)
q=A.v(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a6(o,!0).ec()
o=a0
o.sii($.ax())
J.aTY(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b2(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bgD(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BC(k.c,k.d,o),$async$G4)
case 12:w=13
return A.b(r.lh(),$async$G4)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.X(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(A.cBO("Undo",new C.diS(r,d),null),null,null,null,null,B.t,null,k,null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$G4,v)},
bHV(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dim(v):u
r=A.aH(u,u,u,u,A.W(D.bTk,s?D.kW:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cK(v.d)&&!v.w&&v.r>=0)s=A.hu(A.W(B.x2,B.H2,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.H2,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbQb(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.kW.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.din(v):u
return A.bm(!0,new A.D(D.bGM,A.A(A.a([r,s,A.aH(u,u,u,u,A.W(B.eK,t<J.ad(v.d)?D.kW:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a00.prototype={
T(){return new C.bhZ(new A.at(B.ax,$.ax()))}}
C.bhZ.prototype={
ga3e(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ax()
w.R$=0
this.a3()},
gbTM(){switch(this.ga3e()){case"cover":var w=D.dcH
break
case"book":w=D.d7T
break
default:w=D.dEE
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=B.kC.j(0.5),m=x.p,l=A.A(A.a([D.dO9,B.as,D.bMx,A.aH(p,p,p,p,B.ly,p,p,p,new C.dkJ(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jw(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dkK(q),q.ga3e()==="page",p,p,p,p))
if(q.a.d)k.push(A.jw(p,p,p,D.h6z,p,new C.dkL(q),q.ga3e()==="book",p,p,p,p))
k.push(A.jw(p,p,p,D.fUa,p,new C.dkM(q),q.ga3e()==="cover",p,p,p,p))
k=A.c_(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bA(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kw,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbTM(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,B.Lk,p,p,p)
w.push(A.n1(p,B.c.j(0.08),r,B.hx,new C.dkN(q,s),p,p,p,p))}return A.eI(p,B.Cp,A.cc(A.x(A.a([l,B.T,D.h9U,B.am,k,B.af,j,B.P,A.c_(B.bI,w,B.br,p,6,6),B.aB,A.db(D.bXF,p,D.haG,new C.dkO(q,d),A.bn(B.b2,p,p,p,p,B.pb,p,p,new A.ba(A.m(16),B.a1),p,p,p)),B.av,D.h4L],m),B.D,p,B.e,B.N,0,B.p),B.t,p,B.y,p,p,B.fo,p,p,B.ah),p,p,p,B.P0,p,B.d7,p,new A.ba(o,new A.aw(n,1.4,B.r,-1)),p)}}
C.a_Z.prototype={
T(){return new C.aCn(A.a([],x.gA))},
ge3(){return this.c}}
C.agi.prototype={}
C.aCn.prototype={
Z(){this.a4()
this.lh()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Sm(p.c,p.d),$async$lh)
case 3:o=e
n=A.a([],x.gA)
p=J.aT(o)
case 4:if(!p.C()){w=5
break}s=p.gP(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bFt(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.LV(t.a.c,q),$async$lh)
case 7:m.push(new l.agi(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.djb(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
bbT(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Rh(d,e){return this.cjH(0,e)},
cjH(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cc(A.ed(new C.dja(u,e),!0,null,x.y)),$async$Rh)
case 2:t=g
w=3
return A.b(u.lh(),$async$Rh)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aW3)
return A.h(null,v)}})
return A.i($async$Rh,v)},
G6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$G6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aVZ)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahR(s.c,s.d),$async$G6)
case 5:q=e
w=6
return A.b(t.lh(),$async$G6)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Rh(0,B.d.fb(t.d,new C.djf(q))),$async$G6)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Si(p,s.f,r,n,o),$async$G6)
case 10:m=e
w=11
return A.b(t.lh(),$async$G6)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aW3)
case 1:return A.h(u,v)}})
return A.i($async$G6,v)},
QI(d,e){return this.cvp(0,e)},
cvp(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dje(t,e),s,null,!0,!0,x.y),$async$QI)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4i(s.c,s.d,e.a),$async$QI)
case 4:w=5
return A.b(t.lh(),$async$QI)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QI,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bHY(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.K(B.kC.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.ay(n,new A.fG(0.7142857142857143,A.o(n,A.x(A.a([D.dOa,B.af,D.eyU,B.av,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kW.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.b9,B.h,0,B.p),B.f,n,n,new A.n(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcMd(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.K(B.kC.j(0.85),B.r,1.6)
s=A.ay(n,A.o(n,D.c4P,B.f,n,n,new A.n(B.w.j(0.3),n,A.K(B.kC.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.djg(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.w.j(0.3)
p=A.K(B.kC.j(0.5),B.r,1)
w=A.o(n,A.A(A.a([s,B.ba,D.bMW,A.o(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fzx,n,n,n),B.f,n,n,new A.n(q,n,p,r,n,n,B.m),n,n,n,n,B.hr,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.n(n,n,v,w,n,D.caT,B.m),n,n,n,B.ON,D.bEI,n,n,n)
if(o.e)k=D.agH
else k=k.length===0?D.beK:A.cf(new C.djh(k))
return A.c5(n,D.a_j,new A.an(B.a0,n,B.b3,B.t,A.a([D.aS4,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bHY(d){var w,v,u=this,t=null,s=u.bbT(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.dk(B.dC,B.z,B.f,new A.a5(300,420,new C.a_d(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.ay(t,A.o(t,D.c45,B.f,t,t,new A.n(B.w.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dj8(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fza,t,t,t)
v=r===1?"page":"pages"
return A.ay(t,A.x(A.a([new A.fG(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.P,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kW.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dj9(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KY.prototype={}
C.a_d.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dB(D.Ah,new C.cR4(m),new C.cR5()),j=m.c,i=D.Eo.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.my:B.b9
v=new C.cR6(h)
i=A.a([new A.ac(0,B.H,B.w.j(0.6),D.evH,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bfa(j.x,h,l),B.az),0,0,0),A.ao(0,A.o(l,l,B.f,l,l,new A.n(l,l,l,l,l,new A.a8(B.a5,B.a9,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.o(l,l,B.f,l,l,new A.n(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aox,8,0.85,2.2),v.$4(D.bJH,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aox,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.D(D.bJD,A.b4(l,l,l,new C.bf1(h,l),B.az),l),0,0,0))
r=A.W(D.aDq[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aAB,l,l),B.K,l,l)
p=A.o(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cK,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aO,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.G,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.D(D.bKa,A.x(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aJt(l),D.foC),l,l,l,46,0,l))
return A.o(l,A.bw(D.afj,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.n(l,l,l,D.afj,i,new A.a8(B.ay,B.aC,B.x,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bfa.prototype={
a2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e_()
g.cU(11)
switch(this.b){case"plain":return
case"linen":$.R()
w=A.L()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.r(0,t),new A.r(u,t),w)
$.R()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.r(r,0),new A.r(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.R()
l=new A.ar(B.S,B.Q,B.V,B.W,B.U)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.R()
l=A.a([],n)
j=new A.aG(m.r,B.ai,null,null,l)
l.push(new A.aZ(v,q))
j.ab()
m=k-0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.ab()
m=k+0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.ab()
m=new A.bx()
l.push(m)
l=j.f
if(l!=null)m.aj(l)
j.ab()
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.R()
w=A.L()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.R()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bf1.prototype={
a2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.R(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.aa
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.fbz,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aG(k,B.ai,null,null,s)
s.push(new A.aZ(r+p*34,q))
n.ab()
m=new A.aq(r,q)
s.push(m)
l=n.f
if(l!=null)m.aj(l)
n.ab()
m=new A.aq(r,q+o*34)
s.push(m)
s=n.f
if(s!=null)m.aj(s)
n.ab()
d.af(n,j)
s=new A.ar(B.S,B.Q,B.V,B.W,B.U)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.uV.prototype={}
C.a_x.prototype={
T(){return new C.bf8()}}
C.bf8.prototype={
goC(){var w=this.d
return w===$?this.d=this.a.c:w},
gzd(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.at(new A.bc(w.b,B.b8,B.aP),$.ax())}return v},
gaDV(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.at(new A.bc(w.c,B.b8,B.aP),$.ax())}return v},
gats(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.at(new A.bc(w.y,B.b8,B.aP),$.ax())}return v},
t(){var w=this,v=w.gzd(0),u=v.V$=$.ax()
v.R$=0
v=w.gaDV()
v.V$=u
v.R$=0
v=w.gats()
v.V$=u
v.R$=0
w.a3()},
au5(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jw(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.da3(this,f,u),e===u,s,s,s,s))}return A.c_(B.bI,r,B.br,s,6,8)},
azR(d){var w=null,v=B.c.j(0.07)
return A.bA(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.m4,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goC(),a0=f.gzd(0),a1=a0.a.a,a2=f.gaDV(),a3=a2.a.a,a4=f.gats(),a5=d.bgB(a4.a.a,a3,a1)
a1=x.w
a3=A.aD(a6,e,a1).w
a1=A.aD(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,new A.dk(B.dC,B.z,B.f,new A.a5(270,370,new C.a_d(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.azR("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.das(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.azR("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dat(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.Ah[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.aw(p,q?3:1,B.r,-1)
p=A.o(e,e,B.f,e,e,new A.n(e,e,new A.bF(o,o,o,o),e,e,new A.a8(B.ay,B.aC,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.ay(e,A.x(A.a([p,B.cT,A.c(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dau(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.c_(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.aw((s===$?f.d=f.a.c:s).d===n?B.ey:B.L,2,B.r,-1)
q.push(A.ay(e,A.o(e,A.W(D.aDq[n],B.c,e,e,e,24),B.f,e,e,new A.n(p,e,new A.bF(o,o,o,o),new A.be(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dav(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.c_(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.azR("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.daw(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.dk,!0,B.a7,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,F.w1,e,e,e)
m=A.a([],w)
for(l=D.Eo.gdQ(D.Eo),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.ey:B.aT
g=r.e===i
o=new A.aw(h,g?3:1,B.r,-1)
j=A.o(e,e,B.f,e,e,new A.n(j,e,new A.bF(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.ay(e,A.x(A.a([j,B.bB,A.c(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.N,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dax(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.c_(B.bI,m,B.br,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,F.w1,e,e,e)
k=f.goC()
return new A.D(new A.P(0,0,0,a3.f.d),A.bm(!0,new A.cO(new A.aY(0,1/0,0,a1.a.b*0.92),A.cu(A.a([D.h4b,B.af,d,B.aO,a0,B.T,a2,B.aB,D.har,B.P,v,B.aB,D.h4k,B.P,q,B.aB,a4,B.aB,p,B.P,m,B.aB,l,A.l0(e,9,""+B.i.S(f.goC().f),36,18,new C.day(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,F.w1,e,e,e),B.am,f.au5(D.a7H,f.goC().r,new C.daz(f),D.dHU),B.af,A.c("BORDER",e,e,e,e,e,e,F.w1,e,e,e),B.am,f.au5(D.a70,f.goC().w,new C.daA(f),D.dI_),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,F.w1,e,e,e),B.am,f.au5(D.a6X,f.goC().x,new C.daC(f),D.dJE),B.am,A.iV(e,B.b2,e,B.ag,e,new C.daD(f),e,e,e,D.fZk,f.goC().z),B.bx,A.bJ(D.h2T,e,new C.daE(f,a6),A.bn(B.b2,e,e,e,e,B.pb,e,e,new A.ba(A.m(16),B.a1),e,e,e))],w),e,e,B.ao1,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aJt.prototype={
a2(d,e){var w,v,u,t=new A.aG($.R().r,B.ai,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bx())
u=A.L()
u.sam(D.cbB.aA(0,new A.a2(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bkw.prototype={
a2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.R()
w=A.L()
w.sam(D.caz.aA(0,new A.a2(0,0,a2,a3)))
a4.aE(new A.a2(0,0,a2,a3),w)
v=B.i.cD(a1/112)
u=new A.e_()
u.cU(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dcG[u.aw(9)]
j=u.aw(14)
J.br(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a2(n,j,n+m,j+l)
h=A.bu(i,B.hw)
g=new A.ar(B.S,B.Q,B.V,B.W,B.U)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.w,0.45)
e.toString
g.sam(new A.a8(B.a5,B.a9,B.x,A.a([f,k,e],w),d,d).aA(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.S,B.Q,B.V,B.W,B.U)
e.r=B.kC.j(0.55).gp(0)
a4.aE(new A.a2(g,j,h,j+2),e)
e=new A.ar(B.S,B.Q,B.V,B.W,B.U)
e.r=B.kC.j(0.4).gp(0)
a4.aE(new A.a2(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.S,B.Q,B.V,B.W,B.U)
p.sam(D.c9S.aA(0,new A.a2(0,r,a2,q)))
a4.aE(new A.a2(0,r,a2,q),p)
p=new A.ar(B.S,B.Q,B.V,B.W,B.U)
p.r=B.w.j(0.5).gp(0)
p.y=B.l2
a4.aE(new A.a2(0,q,a2,q+14),p)}t=A.L()
t.r=D.biz.j(0.72).gp(0)
a4.aE(new A.a2(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.sam(new A.bT(B.z,0.5,B.x,d,0,A.a([D.brf.j(0.22),B.L],w),d,d).aA(0,A.bW(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aD(d){return!1}}
C.bdi.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.n(A.ap(D.kW,D.bwB,w/4),o,new A.bF(B.a1,new A.aw(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.My,o,o,B.m),B.bl,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.H,B.w.j(0.35),B.aNE,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.o(o,o,B.f,o,o,new A.n(B.kC.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.o(o,A.x(t,B.l,o,B.rc,B.h,0,B.p),B.f,o,o,new A.n(o,o,o,D.b6H,u,D.cbz,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.H,B.w.j(0.4),B.dm,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aJt(o),D.fox),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aXn(p.y,r,B.je,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bA(o,B.eP,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,B.je.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fOa,!0,B.a7,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,B.je.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.T,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bA(o,B.eP,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,B.je.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fEx,!0,B.a7,B.Bb,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.h,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.fO2,o,o,o),B.av,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,B.je.j(0.5),o,o,o,o,o,o,o,o,11,B.cK,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.P,A.A(A.a([A.E(A.o(o,o,B.f,D.GN.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fw,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.GN.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.o(o,o,B.f,D.GN.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aB],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,B.je.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Zs(A.cR(A.a([A.cR(o,o,o,o,o,o,o,o,o,D.fHO,B.a.az(k,0,1)),A.cR(o,o,o,o,o,o,o,o,o,o,B.a.aX(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,B.je.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.x(n,B.D,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hV,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,B.je.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.o(o,A.bw(B.My,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bJ9,A.x(s,B.al,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bP(new A.n(o,o,o,o,o,new A.a8(B.a5,B.a9,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.m),B.bl,o,o),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.n(o,o,o,B.My,v,D.cc6,B.m),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.h,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.amx.prototype={
T(){return new C.amy(new A.eF(0,$.ax()),new C.bUF(),new C.amQ(),D.hNy,null,null)},
gd2(){return this.d}}
C.a2c.prototype={
a7(){return"_Step."+this.b}}
C.amy.prototype={
gCM(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFp(w.c,6,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Ng(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gUj(){var w=this.ghe(0)
return w.gzx()==null?"Babu":B.a.i(w.gzx().b)},
Z(){var w,v=this
v.a4()
w=v.ghe(0).gzx()
w=w==null?null:w.c
v.r.b=w===D.oI
w=v.qa(new C.bT0(v))
w.fY(0)
v.x!==$&&A.aQ()
v.x=w
v.a3b("Come closer, my children. I am "+v.gUj()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.d()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.V$=$.ax()
v.R$=0
w.bxi()},
a3b(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dg(B.a12,new C.bSV(w))},
btF(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.l(new C.bT3(v))},
aex(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
btx(){return this.bbp()},
bbp(){var w=this,v=w.gCM()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bSW(w))
w.a3b(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.mj,new C.bSX(w))},
cNm(){var w=this
w.l(new C.bT_(w))
w.a3b(w.gCM()[w.as].a)},
Lq(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.aeq)return
w=p.gCM()
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
t.r=s.a+1.5}q=new A.e_()
q.cU(v*7+d)
p.l(new C.bSZ(p,d,u,q))
p.a3b(u?D.dsH[q.aw(4)]+" "+w[p.as].d:D.dpf[q.aw(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCM()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bHI(t.at,t.ay,p)
t.l(new C.bT1(t,s))
t.a3b(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BY(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BZ(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bT2())
w=1
break
case 4:++t.as
t.bbp()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c5(v,D.Zi,new A.an(B.a0,v,B.ad,B.t,A.a([A.bS(0,new A.e6(A.b4(v,v,v,new C.aXs(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cdG(0),B.b_,w.bSX()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cdG(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.QO,s,s,s,new C.bSY(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCM().length;++w){v=t.as
if(w<v||t.Q===D.b3_)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.be(u,u,u,u),s,s,B.m),s,7,s,D.bEs,s,s,s,22))}p=A.E(A.x(A.a([D.fW3,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.D,s,B.e,B.h,0,B.p),1)
v=A.m(14)
u=A.K(B.fP,B.r,1)
return new A.D(D.bKn,A.A(A.a([r,p,A.o(s,A.c("\ud83d\udd25 "+B.i.S(t.cy*100)+"%",s,s,s,s,s,s,B.iP,s,s,s),B.f,s,s,new A.n(B.b6,s,u,v,s,s,B.m),s,s,s,s,B.hr,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bSX(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghe(0).gzx()
if(h==null)w=1
else w=h.c===D.oI?0:1
v=j.dx
u=j.db
t=D.qA.j(0.96)
s=A.m(22)
r=A.K(B.cV,B.r,3)
q=A.b4(i,i,i,new C.bq7(w,i),B.az)
p=A.c(j.Q===D.aeq?j.gUj()+" asks":"Elder "+j.gUj(),i,i,i,i,i,i,D.aXj,i,i,i)
o=j.db
o=B.a.az(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.ay(B.c1,A.A(A.a([new A.a5(62,62,q,i),B.as,A.E(A.x(A.a([p,B.bB,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aXx,i,i,i)],n),B.D,i,B.e,B.h,0,B.p),1)],n),B.D,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbtE(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.aaE("Sit down by the fire",j.gbtw()),i,i,i)
break
case 1:v=A.as(j.aaE("Ask me, Elder",j.gcNl()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCM()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.aw(D.lM,2.5,B.r,-1)
v.push(A.ay(i,A.o(i,A.c(u[m],i,i,i,i,i,i,D.aXt,B.K,i,i),B.f,i,D.afW,new A.n(D.aly,i,new A.bF(l,l,l,l),new A.be(q,q,q,q),i,i,B.m),i,i,i,i,L.wP,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bSS(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.c_(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.ki:Y.arv
u=A.W(u,v?B.ep:D.lM,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.ep:D.lM,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCM().length?"Finish":"Next story"
v=A.A(A.a([u,B.ab,q,j.aaE(v,j.gqt(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gCM().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aXL,i,i,i)],n)
u=j.cx
if(u>0){u=C.aRK(u)
q=C.aRK(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.acS,i,i,i))}v.push(B.P)
v.push(j.aaE("Back to the games",new C.bST(j)))
v=A.x(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.o(i,A.x(A.a([o,B.T,v],n),B.D,i,B.e,B.N,0,B.p),B.f,i,i,new A.n(t,i,r,s,D.aEZ,i,B.m),i,i,i,B.z7,B.bk,i,i,i)},
aaE(d,e){var w=null,v=A.m(16),u=A.K(B.cV,B.r,2)
return A.ay(w,A.o(w,A.c(d,w,w,w,w,w,w,B.Ln,w,w,w),B.f,w,w,new A.n(D.lM,w,u,v,w,w,B.m),w,w,w,w,D.bI2,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bq7.prototype={
a2(d,e){A.hmy(d,e.ek(B.J),e.gdj()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aCl.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.bUF.prototype={}
C.tg.prototype={}
C.bq8.prototype={}
C.amQ.prototype={
MT(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.iiJ(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aXs.prototype={
a2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.GG(l.d.MT(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.br(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cCJ(d,j)
l.bRv(d,j)
l.cL7(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.br(t.save())
t.translate(225,580)
d.nM(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.R()
q=A.L()
p=x.O
o=x.n
q.sam(A.wj(B.J,r,A.a([D.bvh.j(0.55*s),B.O2.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bUx(l,d,j,i)),new A.y(540,new C.bUy(l,d,j,i)),new A.y(546,new C.bUz(l,d,j,i)),new A.y(574,new C.bUA(l,d,j,i)),new A.y(612,new C.bUB(l,d,j,i)),new A.y(650,new C.bUC(l,d,j,i)),new A.y(656,new C.bUD(l,d,j,i))],x.E)
B.d.b0(n,new C.bUE())
for(m=0;m<7;++m)n[m].b.$0()
l.bIg(d,j,i)
l.bV8(d,j)
t.restore()
$.R()
t=A.L()
t.sam(A.wj(new A.r(w/2,v*0.6),e.gaoS()*0.75,A.a([B.L,D.bis],p),A.a([0.55,1],o),B.x,k,k,0))
d.aE(new A.a2(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cCJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e_()
h.cU(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.R()
r=new A.ar(B.S,B.Q,B.V,B.W,B.U)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.evd),C.iF(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.R()
k=A.a([],t)
l=new A.aG(l.r,B.ai,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ab()
j=r-3
r=new A.cg(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.aj(i)
l.ab()
s=new A.cg(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.aj(r)
l.ab()
s=new A.ar(B.S,B.Q,B.V,B.W,B.U)
s.b=B.aa
s.c=1.6
s.r=D.bld.gp(0)
s.d=B.bG
s.e=B.dM
d.af(l,s)}},
bRv(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aBV[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bY(new A.r(p,m),n*0.74,q*0.5)
k=B.yS.j(v)
$.R()
j=new A.ar(B.S,B.Q,B.V,B.W,B.U)
j.r=k.gp(0)
d.c1(l,j)
q=A.bY(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.r=B.wr.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.S,B.Q,B.V,B.W,B.U)
o.r=D.aiQ.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cL7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bEL(d,D.ev9,0.9,e,D.hJ9,!1,!1,D.b2X,1,!1)
w=$.R().r
v=x.v
u=new A.aG(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bx())
t=A.L()
t.r=D.akP.gp(0)
d.af(u,t)
C.bEL(d,D.evb,0.95,e,D.hIY,!1,!1,D.b2Y,1,!0)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.cg(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.cg(431,553,421,548))
t.E(new A.bx())
u=A.L()
u.r=B.Gs.gp(0)
d.af(t,u)
u=A.bY(D.eva,8,28)
t=A.L()
t.r=D.bxI.gp(0)
d.c1(u,t)
C.bEL(d,new A.r(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hJb,!0,!1,D.Y5,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bY(new A.r(s+q*16,r-6),16,11),C.iF(D.akG,1.8))
u=q<0
C.bEL(d,new A.r(s-q*6,r),0.62,e,D.hJe,!1,u,D.Y5,2.2,!1)
C.bEL(d,new A.r(s-q*32,r+4),0.58,e+1,D.hJ5,!1,u,D.Y5,2.2,!1)
this.bXS(d,D.euP,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bY(new A.r(o,n),8,11)
k=p===1
j=k?D.akC:D.ale
i=new A.ar(B.S,B.Q,B.V,B.W,B.U)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.akC:D.ale
k=new A.ar(B.S,B.Q,B.V,B.W,B.U)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.S,B.Q,B.V,B.W,B.U)
k.b=B.aa
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dM
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.S,B.Q,B.V,B.W,B.U)
k.b=B.aa
k.c=1
k.r=B.at.gp(0)
k.d=B.bG
k.e=B.dM
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bY(D.a9S,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aje.gp(0)
d.c1(u,t)
u=A.bY(D.a9S.a5(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bnr.gp(0)
d.c1(u,t)
t=new A.aG(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bx())
u=A.L()
u.r=D.bnF.gp(0)
d.af(t,u)
u=D.a9S.a5(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.il.gp(0)
d.O(u,1.1,t)
v=new A.aG(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.cg(180,588+w*(h?6:0),178,595))
d.af(v,C.iF(D.aje,3.5))},
bXS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.b=B.aa
m.c=2
m.r=D.Zw.gp(0)
m.d=B.bG
m.e=B.dM
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bY(k,17,32)
v=$.R()
r=A.L()
r.r=D.Gq.gp(0)
d.c1(w,r)
r=A.bY(k.a5(0,D.euf),7,26)
w=A.ap(D.Gq,B.w,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c1(r,q)
v=new A.aG(v.r,B.ai,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bx())
s=A.L()
s.r=D.Gq.gp(0)
d.af(v,s)
s=A.bY(k.a5(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.Gq.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a5(0,new A.r(22,v)),k.a5(0,new A.r(21,-17+l)),C.iF(D.Zw,1.6))
d.ah(k.a5(0,new A.r(26,v)),k.a5(0,new A.r(28,-16+l)),C.iF(D.Zw,1.6))
v=k.a5(0,new A.r(26,-8+l))
s=A.L()
s.r=B.w.gp(0)
d.O(v,0.9,s)
d.ah(k.a5(0,new A.r(26,-3+l)),k.a5(0,new A.r(26,1+l)),C.iF(D.bqu,1.4))
d.ah(k.a5(0,D.ex8),k.a5(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iF(D.Gq,2.4))},
bV6(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bY(new A.r(225+u*36,574+(t*13+6)),8,11)
$.R()
t=new A.ar(B.S,B.Q,B.V,B.W,B.U)
t.r=D.bwk.gp(0)
a6.c1(u,t)}}u=A.bY(D.a9U.a5(0,B.cz),17,52)
$.R()
t=A.L()
t.r=D.bi0.gp(0)
a6.c1(u,t)
t=A.bY(D.a9U.a5(0,B.cz),12,44)
u=D.blD.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.doH[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.S,B.Q,B.V,B.W,B.U)
o.b=B.aa
o.c=7
o.r=D.GE.gp(0)
o.d=B.bG
o.e=B.dM
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.C4.j(0.6)
n=new A.ar(B.S,B.Q,B.V,B.W,B.U)
n.b=B.aa
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dM
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f7B,D.f89,D.f9h,D.f9C,D.f9f]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.btA,D.bpO,D.bvK][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.R()
f=A.a([],q)
a2=new A.aG(g.r,B.ai,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.hX(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ab()
g=new A.hX(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ab()
g=new A.bx()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ab()
g=new A.ar(B.S,B.Q,B.V,B.W,B.U)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=B.alc.j((1-a5)*0.9)
$.R()
o=new A.ar(B.S,B.Q,B.V,B.W,B.U)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.aiQ.j(0.1*(1-a5))
$.R()
p=new A.ar(B.S,B.Q,B.V,B.W,B.U)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bV8(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bxT.j(0.18*p)
$.R()
n=new A.ar(B.S,B.Q,B.V,B.W,B.U)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.S,B.Q,B.V,B.W,B.U)
n.r=D.brk.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c6Y(d,e){switch(d){case 0:return e.b?D.hJ0:D.b2v
case 1:return e.b?D.hJd:D.b2t
case 2:return D.b2s
case 3:return D.b2r
case 4:return D.b2u
default:return D.b2w}},
aE8(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
RA(d,e,f,g){var w,v=this,u=D.a78[e],t=v.c6Y(e,g),s=new C.bq8(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a78[e],l=e===0
m=B.i.D(((l?D.aNw:D.aNC).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a9Z
s.as=D.EQ
if(l){s.a=o?v.aE8(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.EQ
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.r(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.r(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.r(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.r(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eun
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.evL
if(e===4)s.as=new A.r(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.r(-3-m,p)
s.as=new A.r(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.ey4
s.as=D.aNP}if(e===2&&g.x!=null&&f<g.y){s.a=v.aE8(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aE8(f,e*3)
s.b=0.5
s.c=0.4}}C.hFv(d,u.a,u.b*1.2,t,s,f,e,null)},
bIg(d,e,f){var w=new C.bUw(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd3(d){return this.c}}
C.agr.prototype={
a7(){return"_Stand."+this.b}}
C.aeo.prototype={}
C.ls.prototype={}
C.bTg.prototype={
bCQ(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
Gm(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b0(r,new C.bTh())
return r},
as7(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aNS(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
anf(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.d()
v=v.h(0,w)!=null&&u.I(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.d()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzx(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b0(w,new C.bTi(this))
return B.d.gH(w)}}
C.auX.prototype={}
C.zI.prototype={}
C.alo.prototype={
gCi(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bO2(),A.T(w).k("Y<1>")).gL(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.N0.prototype={
gaqa(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCi(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d3D(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaqa(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.ls(B.a.i(s.a),p,B.d.ce(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bbv.prototype={}
C.aas.prototype={}
C.biP.prototype={}
C.agp.prototype={}
C.akH.prototype={
T(){return new C.akI(B.bF,A.a([],x.cC),A.a([],x.e4),null,null)},
gd2(){return this.d}}
C.akI.prototype={
gN9(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFp(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gbbL(){var w,v=this,u=v.e
if(u===$){w=v.qa(v.gcdI())
v.e!==$&&A.bE()
v.e=w
u=w}return u},
Z(){this.a4()
this.gbbL().fY(0)},
t(){this.gbbL().t()
this.bxd()},
fY(d){this.l(new C.bMb(this))},
cdJ(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.l(new C.bM6())},
ba5(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gN9()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.biP(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bq(w,new C.bMc())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c9Q()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gN9()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.atE(v,0.8,B.cV)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.atE(m.cy,0.8,B.nv)
m.b_q("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.atE(q,0.88,D.lM)
p=m.gN9()[m.x]
n=p.c
if(u===n){m.b_q("The right gourd fell! It was "+p.b[n]+".")
return}}}},
atE(d,e,f){var w,v,u,t=new A.e_()
t.cU(B.i.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.agp(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b_q(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.QJ()}},
c9Q(){var w=this
if(w.x+1>=w.gN9().length){w.QJ()
return}++w.x
w.ba5()},
QJ(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$QJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gN9().length
r=C.bHI(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bM4())
w=2
return A.b(C.BY(u.a.d,r),$async$QJ)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BZ(t.d,t.c.a,"catch",u.z),$async$QJ)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bM5())
return A.h(null,v)}})
return A.i($async$QJ,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cdH()
else w=v.ch?v.cdK():A.as(new A.D(B.eA,A.x(A.a([D.aYI,B.P,D.fXL,B.T,D.h2Y,B.e4,C.uy("Play",v.geY(v),B.cV,B.h9,D.fF)],x.p),B.l,u,B.e,B.N,0,B.p),u),u,u,u)
return new C.tG("Calabash Catch",w,B.f8,u)},
cdK(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hI:B.I7
p.push(A.W(u,v?B.aA:B.bV,r,r,r,22))}p.push(B.b_)
v=s.x
u=s.gN9()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aXi,r,r,r))
p.push(B.ba)
v=A.m(14)
p.push(A.o(r,A.c(""+s.z,r,r,r,r,r,r,B.iP,r,r,r),B.f,r,r,new A.n(B.bw,r,r,v,r,r,B.m),r,r,r,r,B.CO,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.m(18)
t=A.K(B.cV,B.r,3)
return A.x(A.a([new A.D(D.bFO,p,r),A.o(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fHG,B.K,r,r),B.f,r,r,new A.n(D.qA,r,t,v,r,r,B.m),r,r,r,B.f2,B.bk,r,r,1/0),B.am,A.E(A.cf(new C.bMa(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
cdH(){var w=this,v=null,u=A.as(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qc,v,v,v),v,v,v),t=A.as(A.c(""+w.Q+" of "+w.gN9().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Wo,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cu(A.a([D.bfr,u,t,B.aO,new C.ID(s,r,w.cx,v),B.aO,A.as(C.uy("Back to the games",new C.bM3(w),B.cV,B.kh,D.fF),v,v,v)],x.p),v,v,B.ae,v,v,B.ah,!1)}}
C.be_.prototype={
a2(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.R(),a3=A.L()
a3.sam(A.jz(B.J,new A.r(0,a0),D.d6r,B.aCb,B.x,e))
a4.aE(new A.a2(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=B.O6.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aG(a2.r,B.ai,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.aj(s)
v.ab()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.R()
w=A.L()
w.r=D.bmB.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aG(a2.r,B.ai,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.cg(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.cg(r+14,t,r+26,w))
a2.E(new A.bx())
w=A.L()
w.r=D.ahS.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.crG[q]
s=new A.ar(B.S,B.Q,B.V,B.W,B.U)
s.r=D.ahS.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.S,B.Q,B.V,B.W,B.U)
s.r=D.ah7.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bnC.gp(0)
a4.aE(new A.a2(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.S,B.Q,B.V,B.W,B.U)
t.r=D.aju.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bY(new A.r(u,s),12,54)
$.R()
l=new A.ar(B.S,B.Q,B.V,B.W,B.U)
l.r=D.lM.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.br(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.r=D.aiA.gp(0)
a4.O(D.etD,14,m)
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.r=D.bsD.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.etE,D.euL,m)
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.sam(new A.amh(D.ewT,46,D.dfe,B.vu,B.x,e,e,0))
a4.O(B.J,34,m)
m=A.bY(D.ewZ,8,12)
l=new A.ar(B.S,B.Q,B.V,B.W,B.U)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.jM(new A.es(n.c,e,e,B.cM,e,e,e,e,e,e,D.fFu),B.K,B.bW,new A.ji(1),e,e,3,e,B.bX,e,B.cw)
k.nD(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bu(A.bY(B.cN,m.gb9(m)+8,l),B.fV)
l=new A.ar(B.S,B.Q,B.V,B.W,B.U)
l.r=D.qA.gp(0)
a4.aq(j,l)
l=new A.ar(B.S,B.Q,B.V,B.W,B.U)
l.r=D.lM.gp(0)
l.b=B.aa
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a2(a4,new A.r(-m/2,4-l.gb9(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.imy(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dS,(w+1)/2)
h=A.bY(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aG($.R().r,B.ai,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.cg(h.gbD().a,s+8,w+8,s))
a3.E(new A.bx())
m=A.L()
m.r=D.a_p.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.r=D.C4.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=B.nv.gp(0)
a4.aE(new A.a2(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bmH.gp(0)
a4.c1(new A.a2(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fs(e,B.cw,e,e,e,A.cR(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cV.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,E.E0,e,e),"+"+a2),B.a7,B.bW,e,B.dD,B.bX)
k.e5()
k.a2(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.R_.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aCj(w.c,w.f,v),B.az),s=A.m(10),r=A.K(B.bD,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cT,A.o(v,A.c(w.d,v,1,B.a2,v,v,v,D.fxZ,v,v,v),B.f,v,v,new A.n(B.c,v,r,s,v,v,B.m),v,v,v,v,B.n8,v,v,v)],x.p),B.l,v,B.e,B.N,0,B.p),v)},
ga_(d){return this.e}}
C.aCj.prototype={
a2(d,e){var w=e.ek(B.J),v=e.gdj(),u=this.c?0.8:0
return A.hmy(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aAM.prototype={}
C.avA.prototype={
T(){return new C.avB(A.S(x.S,x.cq),null,null)},
gd2(){return this.d}}
C.avB.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hL5(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gaGc(){var w=this.z
return w===$?this.z=this.XO(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
XO(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aAM(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aAM(v[t],u[t],-1))
v=new A.e_()
v.cU(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.goJ()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qK()}this.bxG()},
cTr(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaGc()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.cs1(r,e,w,v))
A.cy(B.lT,new C.cs2(r))
return}++r.r
u=A.bp(null,B.hC,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.cs3(r,d,e,w,v))
u.cs(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cC(n,0,new C.cs4())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.cs5(t,r))
w=5
return A.b(C.BY(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BZ(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.l(new C.cs6())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.goJ()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qK()}o.a8(0)
t.l(new C.cs7(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qc,p,p,p),p,p,p)
v=r.f
v=A.as(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Wo,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tG(q,A.cu(A.a([D.agG,w,v,B.aO,new C.ID(u,t,r.ch,p),B.aO,A.as(C.uy("Back to the games",new C.crY(d),B.cV,B.kh,D.fF),p,p,p)],x.p),p,p,B.ae,p,p,B.ah,!1),B.f8,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tG(q,new A.D(B.tg,A.x(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,B.aXd,B.K,p,p),A.E(A.cf(new C.crZ(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.f8,p)}}
C.bdr.prototype={
a2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cS8(),A.T(b2).k("Y<1>")).gL(0),b4=a9.b,b5=b4.a5(0,B.K8)
$.R()
w=A.L()
w.r=D.lN.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.etq)
u=A.L()
u.r=B.qC.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.e7.aB(0,B.i.D(b2[p],0,1))
l=$.R().r
k=A.a([],s)
j=new A.aG(l,B.ai,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.cg((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ab()
if(m<1)for(o=new A.aG(l,j.b,j.c,b0,A.bs(k,!0,r)),n=A.a([],q),i=new A.uT(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bj(A.jH(b1));--h
g=new A.BV(i,h)
f=0
for(;;){i.jO()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jO()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.R()
a1=new A.ar(B.S,B.Q,B.V,B.W,B.U)
a1.r=B.aT.gp(0)
a1.b=B.aa
a1.c=3
b6.af(new A.aG(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aG(l,j.b,j.c,b0,A.bs(k,!0,r)),n=A.a([],q),k=new A.uT(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bj(A.jH(b1));--a0
k.jO()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.R()
a4=new A.ar(B.S,B.Q,B.V,B.W,B.U)
a4.r=D.GT.gp(0)
a4.b=B.aa
a4.c=h
a4.d=B.bG
b6.af(new A.aG(l,a2,b0,new A.b7([new A.BV(k,a0),0,a1*m,!0]),a3),a4)
k.jO()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jO()
a5=n[a0].Wd(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bY(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.S,B.Q,B.V,B.W,B.U)
a3.r=B.be.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.jM(D.fxs,B.a7,B.bW,new A.ji(1),b0,b0,b0,b0,B.bX,b0,B.cw)
a8.e5()
a8.a2(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.azx.prototype={
T(){return new C.azy(A.aR(x.S))},
gd2(){return this.d}}
C.azy.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hM_(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
Z(){this.a4()
this.bae()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
bae(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dg(B.tc,new C.cH_(this))},
brf(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.l(new C.cH7(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cH8(v,d))
A.cy(B.iY,new C.cH9(v))}},
cYW(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.l(new C.cHa(w))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkS()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a1(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.l(new C.cHb(t,s))
w=5
return A.b(C.BY(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BZ(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cHc())
w=1
break
case 4:t.l(new C.cHd(t))
t.bae()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.c(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.qc,a2,a2,a2),a2,a2,a2)
v=A.as(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Wo,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tG(a1,A.cu(A.a([D.bfC,w,v,B.aO,new C.ID(u,t,a0.ax,a2),B.aO,A.as(C.uy("Back to the games",new C.cH1(a3),B.cV,B.kh,D.fF),a2,a2,a2)],x.p),a2,a2,B.ae,a2,a2,B.ah,!1),B.f8,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.Lt,B.K,a2,a2),B.T,A.as(A.lC(new C.cH2(a0,r),a2,B.b0,B.hC,a2,a2,new A.bt(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.aw(B.cV,2,B.r,-1)
k=o+1
w.push(new A.rc(new A.bt(0,1,u),new C.cH3(),A.o(a2,new A.c6(B.aM,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qL(A.c(""+k,a2,a2,a2,a2,a2,a2,B.oc,a2,a2,a2),D.lM,a2,12,a2),B.as,new A.bz(1,B.bd,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fKk,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.n(D.qA,a2,new A.bF(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cy,B.bk,a2,a2,a2),B.b0,B.iY,a2,new A.bl("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bO(!1,D.haU,a2,a2,!0,a2,a2,a2,a0.gcYV(),a2,a2),a2,a2,a2))
w.push(B.P)
if(a0.as){u=D.lN.j(0.2)
q=A.m(16)
p=A.K(D.lN,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fX,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.o(a2,A.x(A.a([m,B.T,C.uy(v,a0.gqt(a0),B.cV,B.jA,D.fF)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.n(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bH,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dq:B.cV.j(0.2)
g=new A.aP(16,16)
l=new A.aw(n.q(0,o)?B.fi:B.cV,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bV:B.c
d=n.q(0,o)?B.xN:a2
t.push(new A.rc(new A.bt(0,i,u),new C.cH4(),A.ay(a2,A.o(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.afP,new A.n(h,a2,new A.bF(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jy,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cH5(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.mk,a2,new A.bl("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.c_(B.fM,t,B.br,a2,10,10))}return new C.tG(a1,A.cu(w,a2,a2,B.anB,a2,a2,B.ah,!1),B.f8,a2)}}
C.aAv.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.aHQ.prototype={
aY(){this.b8()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a3()}}
C.agd.prototype={
arG(d){},
asb(){var w=this,v=w.qa(new C.faF(w))
v.fY(0)
w.Mh$!==$&&A.aQ()
w.Mh$=v}}
C.aLG.prototype={
gbnG(d){var w=this.c
return B.a.az(w,0,Math.min(this.d,w.length))},
Wl(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dg(B.a12,new C.fkV(w))},
btD(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.amG.prototype={
T(){return new C.amH(new C.amQ(),A.a([],x.t),new A.eF(0,$.ax()),$,0,null,null)},
gd2(){return this.d}}
C.amH.prototype={
gN7(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFp(w.c,10,w.e,!0)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Ng(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqB(){var w=this.r
return w===$?this.r=new C.aLG(new C.bU2(this)):w},
gaqw(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gN7()[v].c)u.push(1)
return u.length},
gbn_(){var w=this.ghe(0)
return w.gzx()==null?"Elder":B.a.i(w.gzx().b)},
Z(){this.a4()
this.asb()},
t(){var w,v=this
v.gqB().t()
v.f.t()
w=v.Mh$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ax()
w.R$=0
v.bxl()},
cNy(){var w=this
w.l(new C.bU_(w))
w.gqB().Wl(w.gN7()[w.x].a)},
Lq(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqB()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qh$.a
v.ax=u
v.ay=u+1
v.l(new C.bTY())
A.cy(B.hC,new C.bTZ(v))},
brb(){var w=this.gaqw(0)/this.gN7().length*100
if(w>=90)return D.f4s
if(w>=75)return D.f2s
if(w>=60)return D.eU3
if(w>=45)return D.eXu
return D.eOs},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cvT()
w=A.bS(0,new A.e6(A.b4(m,m,m,new C.bud(n,n.qh$),B.az),m),0,0,0)
if(!n.Q){v=D.qA.j(0.96)
u=A.m(20)
t=A.K(B.cV,B.r,3)
u=A.o(m,A.x(A.a([A.c("Elder "+n.gbn_()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aY7,B.K,m,m),B.T,C.uy("Start the test",n.gC8(),B.cV,B.ji,D.fF)],x.p),B.l,m,B.e,B.N,0,B.p),B.f,m,m,new A.n(v,m,t,u,m,m,B.m),m,m,m,m,B.bH,m,m,m)
v=u}else{v=n.x
u=n.gN7()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aY9,m,m,m)
if(n.Q){t=n.gqB()
t=t.d<t.c.length}else t=!1
if(t)u=D.fpW
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.aw(D.C4,4,B.r,-1)
s.push(A.ay(m,A.o(m,A.c(q[r],m,m,m,m,m,m,D.fBf,B.K,m,m),B.f,m,D.afP,new A.n(D.bix,m,new A.bF(o,o,o,o),new A.be(p,p,p,p),m,m,B.m),m,m,m,m,B.OU,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bU0(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.c_(B.fM,s,B.br,new A.bl("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oD(u,B.n4,A.pX(),B.b0,B.b0,A.LS())],x.p),B.l,m,B.e,B.N,0,B.p)
v=u}return new C.tG("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.f8,m)},
cvT(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.brb(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gN7()[v].c)g.push(v)
u=A.m(22)
t=A.K(B.cV,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fFN,B.K,i,i)
r=A.c("Signed by Elder "+j.gbn_(),i,i,i,i,i,i,D.fEp,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fJF,i,i,i),D.eG7],q)
o=A.c(h.b,i,i,i,i,i,i,D.fLC,i,i,i)
n=j.gaqw(0)
m=j.gN7()
u=A.o(i,A.x(A.a([D.fWZ,B.av,s,r,B.T,new A.an(B.z,i,B.ad,B.t,p,i),o,B.am,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.acS,i,i,i),B.P,D.aur],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(D.qA,i,t,u,i,i,B.m),i,i,i,i,B.fo,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.ID(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aO,D.hbY,B.P],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.aw(B.bw,1,B.r,-1)
p=m[v]
u.push(A.o(i,A.x(A.a([A.c(p.a,i,i,i,i,i,i,B.hb,i,i,i),B.av,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fGZ,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fJg,i,i,i)],q),B.D,i,B.e,B.h,0,B.p),B.f,i,i,new A.n(B.dq,i,new A.bF(k,k,k,k),new A.be(r,r,r,r),i,i,B.m),i,i,i,B.cy,B.bk,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.as(C.uy("Back to the games",new C.bTU(j),B.cV,B.kh,D.fF),i,i,i))
return new C.tG("Village School",A.cu(s,i,i,B.bS,i,i,B.ah,!1),B.f8,i)}}
C.bud.prototype={
a2(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qh$.a
a0.GG(e.f.MT(a1))
w=C.hhE(a1)
v=a0.c
J.br(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqB()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d0B[s]-6
$.R()
r=new A.ar(B.S,B.Q,B.V,B.W,B.U)
r.r=D.GE.gp(0)
a0.aE(new A.a2(u,340,u+12,450),r)}u=A.bu(D.aaT.cr(10),B.ib)
$.R()
r=A.L()
r.r=D.C4.gp(0)
a0.aq(u,r)
r=A.bu(D.aaT,B.iw)
u=A.L()
u.sam(A.jz(new A.r(30,96),new A.r(420,346),D.dkI,f,B.x,f))
a0.aq(r,u)
q=new A.e_()
q.cU(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bY(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.S,B.Q,B.V,B.W,B.U)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=E.akl.gp(0)
a0.aE(new A.a2(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aE(D.fhi,u)
u=A.L()
u.r=B.bL.gp(0)
a0.aE(D.fhm,u)
u=A.bu(D.fhc,B.hk)
r=A.L()
r.r=D.a_p.gp(0)
a0.aq(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqB().gbnG(0)
m=A.fs(f,B.cw,f,7,f,A.cR(f,f,f,f,f,f,f,f,f,D.fNW,u+(t?"|":"")),B.a7,B.bW,f,B.dD,B.bX)
m.nD(346)
J.br(v.save())
u=A.i3(D.aaT)
r=$.mc()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.i3(new A.a2(30+390*n,96,420,346)),r[1],!0)
m.a2(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bu(new A.a2(u,r,u+40,r+90),B.fV)
u=A.L()
u.r=D.byM.gp(0)
a0.aq(r,u)}}else{m=A.fs(f,B.cw,f,f,f,D.fxI,B.K,B.bW,f,B.dD,B.bX)
m.nD(340)
m.a2(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqB().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.S,B.Q,B.V,B.W,B.U)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghe(0).gzx()
i=(u==null?f:u.c)===D.oI?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.faG(d,a0,i,t,h,D.euA)),new A.y(520,new C.faH(a0,d,t)),new A.y(575,new C.faI(a0,d,t)),new A.y(585,new C.faJ(this,a0,d,t)),new A.y(615,new C.faK(this,t,a0,d,h))],x.E)
B.d.b0(g,new C.faL())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cdL(d,e){var w,v,u,t,s,r,q,p=$.R(),o=A.a([],x.v),n=new A.aG(p.r,B.ai,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aZ(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ab()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ab()}}n.E(new A.bx())
return n},
aD(d){return!1}}
C.amE.prototype={
T(){return new C.amF(new C.amQ(),A.S(x.S,x.i),new A.eF(0,$.ax()),$,0,null,null)},
gd2(){return this.d}}
C.amF.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hKV(w.c,w.e)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FV(0):w},
gaMs(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FV(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.ce(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FV(0):r).length);++v}s.Q=w
r=w}return r},
FV(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e4(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e_()
u.cU(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eD(u,new C.bTG())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a4()
this.asb()},
t(){var w,v=this
v.e.t()
w=v.Mh$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ax()
w.R$=0
v.bxk()},
arG(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.ce(u===$?r.z=r.FV(0):u,v)
s=r.gaMs()
s[v]=s[v]+(450*(t+0.5)/q-r.gaMs()[v])*Math.min(1,w)}},
d3i(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.l(new C.bTR(v,d))
return}if(w===d){v.l(new C.bTS(v))
return}v.l(new C.bTT(v,B.d.ce(v.gj1(),v.y),d,B.d.ce(v.gj1(),d)))},
cOg(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FV(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FV(0):u)[v]]===v);++v}s.l(new C.bTM(s,B.d.cA(w,new C.bTN())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bTO(t,s))
w=5
return A.b(C.BY(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BZ(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bTP())
w=1
break
case 4:t.l(new C.bTQ(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.c(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.qc,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tG("Line Up",A.cu(A.a([D.agG,w,B.aO,new C.ID(v,u,l.ch,k),B.aO,A.as(C.uy("Back to the games",new C.bTI(d),B.cV,B.kh,D.fF),k,k,k)],x.p),k,k,B.ae,k,k,B.ah,!1),B.f8,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.b0(w,new C.bTJ(l))
u=A.bS(0,A.cf(new C.bTK(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aY9,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fGe,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fIv,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.m(16)
n=l.ax
m=A.K(n?D.lN:B.nv,B.r,2)
r.push(A.o(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bTL(l),x.cM).aN(0,", then ")+".",k,k,k,k,k,k,D.fKI,k,k,k),B.f,k,k,new A.n(p,k,m,o,k,k,B.m),k,k,k,B.da,B.bk,k,k,1/0))}if(!l.at)r.push(C.uy("That is my line!",l.gcOf(l),B.cV,B.hh,D.fF))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uy(w,l.gqt(l),B.cV,B.jA,D.fF))}return new C.tG("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ao(12,A.x(r,B.l,k,B.e,B.N,0,B.p),k,k,12,12,k,k)],q),k),B.f8,k)}}
C.bkE.prototype={
a2(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qh$.a
c7.GG(c5.e.MT(c8))
w=C.hhE(c8)
v=c7.c
J.br(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj1().length
t=$.R().r
s=x.v
r=new A.aG(t,B.ai,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.cg(225,500,440,470))
q=A.L()
q.r=D.a_p.gp(0)
q.b=B.aa
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aG(t,B.ai,c4,c4,l)
l.push(new A.aZ(o,n))
k.ab()
m=new A.aq(o+16,n+6+m*3)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.ab()
m=new A.aq(o,n+20)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.ab()
m=new A.bx()
l.push(m)
l=k.f
if(l!=null)m.aj(l)
k.ab()
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.r=[B.cV,B.nv,D.lN,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b2b(c7,"OLDEST",D.evy,B.cV)
this.b2b(c7,"YOUNGEST",D.ev0,B.be)
t=A.bu(D.fh6,B.fV)
s=A.L()
s.r=D.GE.gp(0)
c7.aq(t,s)
s=A.bu(D.fh5,B.iw)
t=A.L()
t.r=D.C4.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b0(t,new C.dtT())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.ce(a1===$?c5.z=c5.FV(0):a1,f)
o=c5.gaMs()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkS()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkS()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.R()
a9=new A.ar(B.S,B.Q,B.V,B.W,B.U)
a9.r=B.cV.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dow[B.o.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.r(-3-b2*8,-56)
else b9=a3?D.exC:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aNP
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.SU(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Ka,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.jM(new A.es(a8,c4,c4,B.cM,c4,c4,c4,c4,c4,c4,D.fDU),B.a7,B.bW,new A.ji(1),"\u2026",c4,1,c4,B.bX,c4,B.cw)
c1.nD(q)
c2=A.bu(A.bY(new A.r(o,650),24,c1.b.c+16),B.fV)
$.R()
a8=new A.ar(B.S,B.Q,B.V,B.W,B.U)
if(a6)a9=B.iH
else a9=a7?B.t5:D.qA
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.S,B.Q,B.V,B.W,B.U)
if(a6)a9=D.lN
else a9=a7?B.nv:D.lM
a8.r=a9.gp(0)
a8.b=B.aa
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a2(c7,new A.r(o-a9/2,650-a8.gb9(a8)/2))
c3=new A.jM(new A.es(""+(a2+1),c4,c4,B.cM,c4,c4,c4,c4,c4,c4,D.fEd),B.a7,B.bW,new A.ji(1),c4,c4,c4,c4,B.bX,c4,B.cw)
c3.e5()
c3.a2(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.br(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bY(B.J,4,8)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.r=[B.cV,B.nv,D.lN,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b2b(d,e,f,g){var w,v,u=null,t=A.fs(u,B.cw,u,u,u,A.cR(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,E.E0,u,u),e),B.a7,B.bW,u,B.dD,B.bX)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a2(d,f.aJ(0,new A.r(v/2,w.gb9(w)/2)))},
aD(d){return!1}}
C.a2v.prototype={
a7(){return"_Trip."+this.b}}
C.amA.prototype={
T(){return new C.amB(D.Yc,new A.eF(0,$.ax()),$,0,null,null)},
gd2(){return this.d}}
C.amB.prototype={
gDH(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bFp(w.c,8,w.e,!1)
u.d!==$&&A.bE()
u.d=v
t=v}return t},
ghe(d){var w,v=this,u=v.e
if(u===$){w=C.Ng(v.a.c)
v.e!==$&&A.bE()
v.e=w
u=w}return u},
gqB(){var w=this.f
return w===$?this.f=new C.aLG(new C.bTs(this)):w},
gUj(){var w=this.ghe(0)
return w.gzx()==null?"Grandma":B.a.i(w.gzx().b)},
Z(){this.a4()
this.asb()},
t(){var w,v=this
v.gqB().t()
w=v.Mh$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ax()
w.R$=0
v.bxj()},
arG(d){var w,v,u,t=this
if(t.r!==D.aeB)return
w=B.dL.aB(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDH()
if(v+1>=u.length){t.r=D.aeC
t.Xi()}else{++t.w
t.ay=!1
t.r=D.Yd
t.gqB().Wl(u[t.w].a)}if(t.c!=null)t.l(new C.bTq())}},
Xi(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Xi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqB().Wl("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDH().length
r=C.bHI(t,u.z,s)
u.as=r
w=2
return A.b(C.BY(u.a.d,r),$async$Xi)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BZ(s.d,s.c.a,"journey",u.x*10),$async$Xi)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bTk())
return A.h(null,v)}})
return A.i($async$Xi,v)},
bsv(){this.aVc()},
aVc(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aeB
if(w.c!=null)w.l(new C.bTl())},
Lq(d){var w,v,u,t,s=this
if(s.r!==D.Yd)return
w=s.gDH()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bTp(s,d,v))
u=s.gqB()
t=s.w
u.Wl(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cTq(){if(this.r!==D.BC)return
this.aVc()},
B(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.e6(A.b4(s,s,s,new C.bk4(t,t.qh$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDH().length;++w){v=t.w
if(w<v||t.r===D.aeC)v=B.cV
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bz(1,B.bd,A.o(s,s,B.f,s,s,new A.n(v,s,s,new A.be(u,u,u,u),s,s,B.m),s,7,s,B.wV,s,s,s,s),s))}p.push(B.bm)
p.push(D.fYD)
return new C.tG("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.cns(),s,s,10,10,s,s)],q),s),B.f8,s)},
cns(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bTo(o),l=D.qA.j(0.96),k=A.m(22),j=A.K(B.cV,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.c("A long drive to the village of Elder "+o.gUj()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aY7,B.K,n,n),B.T,C.uy("Start the journey",o.gbsu(),B.cV,D.bTC,D.fF)],x.p),B.l,n,B.e,B.N,0,B.p)
break
case 3:w=D.bfc
break
case 1:w=o.w
v=o.gDH()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.aw(D.lM,2.5,B.r,-1)
t.push(A.ay(n,A.o(n,A.c(r[s],n,n,n,n,n,n,D.aXt,B.K,n,n),B.f,n,D.afW,new A.n(D.aly,n,new A.bF(p,p,p,p),new A.be(q,q,q,q),n,n,B.m),n,n,n,n,L.wP,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bTm(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.P,A.c_(B.bI,t,B.br,n,8,8)],u),B.D,n,B.e,B.N,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDH().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.P,new A.bK(B.a9,n,n,C.uy(v,o.gcTp(),B.cV,B.jA,D.fF),n)],x.p),B.D,n,B.e,B.N,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUj()),B.P,A.c(""+o.x+" of "+o.gDH().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aXL,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aRK(v)
u=C.aRK(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.acS,n,n,n))}w.push(B.P)
w.push(A.as(C.uy("Back to the games",new C.bTn(o),B.cV,B.kh,D.fF),n,n,n))
w=A.x(w,B.D,n,B.e,B.N,0,B.p)
break
default:w=n}return A.o(n,w,B.f,n,n,new A.n(l,n,j,k,D.aEZ,n,B.m),n,n,n,n,B.bk,n,n,n)}}
C.bk4.prototype={
a2(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qh$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDH(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aeB,d2=c7*0.5
c8=A.ap(D.bk3,D.bv_,d0)
c8.toString
w=A.ap(D.Zy,B.aj5,d0)
w.toString
v=A.ap(B.uA,D.btl,d0)
v.toString
$.R()
u=A.L()
t=x.O
u.sam(A.jz(B.J,new A.r(0,d2),A.a([c8,w,v],t),B.a5E,B.x,c3))
d3.aE(new A.a2(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.sam(A.wj(s,60,A.a([D.btK,B.L],t),c3,B.x,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.ZL.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dEf[o]
$.R()
u=new A.ar(B.S,B.Q,B.V,B.W,B.U)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.R()
j=A.a([],m)
i=new A.aG(k.r,B.ai,c3,c3,j)
j.push(new A.aZ(0,v))
i.ab()
for(k=u-l*12,h=0.12+l*0.1,g=70+l*30,f=14-l*3,q=0;q<=c6;q+=6){e=new A.aq(q,k+Math.sin((q+c4.CW*h)/g)*f)
j.push(e)
d=i.f
if(d!=null)e.aj(d)
i.ab()}k=new A.aq(c6,v)
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ab()
$.R()
k=new A.ar(B.S,B.Q,B.V,B.W,B.U)
k.r=A.ap(l===0?D.biA:D.bya,D.bnL,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cdM(d3,new A.r(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.R()
w=A.L()
v=A.ap(D.akG,D.GT,d0)
v.toString
w.sam(A.jz(new A.r(0,d2),new A.r(0,c7),A.a([v,D.btM],t),c3,B.x,c3))
d3.aE(new A.a2(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bmX.gp(0)
d3.aE(new A.a2(0,a0,c6,a1),w)
w=A.L()
w.r=D.bxM.gp(0)
d3.aE(new A.a2(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.S,B.Q,B.V,B.W,B.U)
u.r=E.Np.gp(0)
d3.aE(new A.a2(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.R()
b2=new A.ar(B.S,B.Q,B.V,B.W,B.U)
b2.r=D.bie.gp(0)
d3.aE(new A.a2(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aG(b1.r,B.ai,c3,c3,b2)
b2.push(new A.aZ(a9-36,t))
b1.ab()
b0=new A.aq(a9,a6)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.ab()
b0=new A.aq(a9+36,t)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.ab()
b0=new A.bx()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.aj(b2)
b1.ab()
b0=new A.ar(B.S,B.Q,B.V,B.W,B.U)
b0.r=D.bvT.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.S,B.Q,B.V,B.W,B.U)
b1.r=D.fF.gp(0)
d3.aE(new A.a2(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.S,B.Q,B.V,B.W,B.U)
b0.r=D.GE.gp(0)
d3.aE(new A.a2(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bu(new A.a2(b0,a4,b0+60,a5),B.jE)
b0=new A.ar(B.S,B.Q,B.V,B.W,B.U)
b0.r=D.bzh.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.S,B.Q,B.V,B.W,B.U)
b0.r=D.C4.gp(0)
b0.b=B.aa
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.jM(new A.es(b6,c3,c3,B.cM,c3,c3,c3,c3,c3,c3,D.fCk),B.a7,B.bW,new A.ji(1),c3,c3,c3,c3,B.bX,c3,B.cw)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a2(d3,new A.r(b4-b1/2,a2-b0.gb9(b0)/2))
if(a7)b8=c4.r===D.aeC
else if(r===c4.w){b0=c4.r
b0=b0===D.Yd||b0===D.BC
b8=b0}else b8=!1
if(a7){b0=c4.ghe(0).gzx()
b9=(b0==null?c3:b0.c)===D.oI?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqB()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.BC
b0=c0?C.hGX(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Yd?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.SU(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bJE(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.R()
t=new A.ar(B.S,B.Q,B.V,B.W,B.U)
t.r=D.bxf.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Yc)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.BC&&c4.ax){b7=A.fs(c3,B.cw,c3,c3,c3,A.cR(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cV,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,Q.Ja,c3,c3),"BEEP BEEP!"),B.a7,B.bW,c3,B.dD,B.bX)
b7.e5()
b7.a2(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cdM(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.btf,D.bmf,g)
o.toString
if(f){w=new A.aG($.R().r,B.ai,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.cg(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.cg(v+9,t,v+16,u))
w.E(new A.bx())
t=A.L()
t.r=D.a_X.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d4E[r]
p=new A.ar(B.S,B.Q,B.V,B.W,B.U)
p.r=D.a_X.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.S,B.Q,B.V,B.W,B.U)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a5(0,D.exz)
$.R()
v=A.L()
v.r=D.big.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bY(e.a5(0,D.exA),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bJE(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Yc?0.045:0,a1=a2.c
J.br(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jq(0,a0)
for(w=0;w<2;++w){v=D.dwl[w]
u=d.ay&&d.r!==D.Yc&&v>0
J.br(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.R()
s=new A.ar(B.S,B.Q,B.V,B.W,B.U)
s.r=D.by1.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.S,B.Q,B.V,B.W,B.U)
s.r=D.bpW.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.S,B.Q,B.V,B.W,B.U)
q.r=B.bh.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.r1(D.fht,B.fV,B.fV,B.iv,B.hK)
$.R()
t=A.L()
t.sam(A.jz(D.etG,B.a9N,D.dm2,B.a5E,B.x,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.S,B.Q,B.V,B.W,B.U)
s.r=D.dg_[B.o.F(o,4)].gp(0)
a2.aE(new A.a2(t,-26,t+10,-19),s)}n=d.r===D.BC&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a2(s,-66,q,-36)
J.br(a1.save())
a1.clipRRect(A.mY(A.bu(l,B.q1)),$.mA(),!0)
k=new A.ar(B.S,B.Q,B.V,B.W,B.U)
k.r=D.Zy.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.BC?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.SU(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aNG,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bu(l,B.q1)
i=new A.ar(B.S,B.Q,B.V,B.W,B.U)
i.r=D.alA.gp(0)
i.b=B.aa
i.c=2
a2.aq(j,i)}d=A.bu(D.Vv,B.q1)
t=A.L()
t.r=D.Zy.gp(0)
a2.aq(d,t)
J.br(a1.save())
a1.clipRRect(A.mY(A.bu(D.Vv,B.q1)),$.mA(),!0)
C.SU(a2,new A.r(D.Vv.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aNG,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bu(D.Vv,B.q1)
d=A.L()
d.r=D.alA.gp(0)
d.b=B.aa
d.c=2
a2.aq(t,d)
d=A.L()
d.r=B.Ct.gp(0)
a2.O(D.evO,4,d)
d=A.L()
d.r=D.GE.gp(0)
a2.aE(D.fiC,d)
for(w=0;w<3;++w){v=D.dwn[w]
d=A.bu(new A.a2(v,-96,v+28,-79),B.jE)
t=new A.ar(B.S,B.Q,B.V,B.W,B.U)
t.r=D.GT.gp(0)
a2.aq(d,t)}a1.restore()},
aD(d){return!1}}
C.aCm.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.bhC.prototype={}
C.aCo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.bhD.prototype={}
C.aCp.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.bhE.prototype={}
C.a6Z.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.bkb(w),B.az),w)}}
C.bkb.prototype={
a2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dug[B.o.F(n,6)]
k=$.R()
j=new A.ar(B.S,B.Q,B.V,B.W,B.U)
j.r=l.gp(0)
d.aE(new A.a2(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aG(k.r,B.ai,null,null,j)
k=m+r
j.push(new A.aZ(k,f))
i.ab()
h=new A.aq(m+p,s)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ab()
k=new A.aq(k,q)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.ab()
k=new A.aq(m+t,s)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.ab()
k=new A.bx()
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ab()
k=new A.ar(B.S,B.Q,B.V,B.W,B.U)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tG.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.QO,w,w,w,new C.bTj(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fzB,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c5(w,D.Zi,A.o(w,A.bm(!0,A.x(A.a([D.c8v,new A.D(D.bKr,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bas,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.ID.prototype={
B(d){var w=null,v=this.d,u=C.aRK(v),t=C.ipd(v),s=B.c.j(0.08),r=A.m(18),q=A.K(B.cV.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fC5,w,w,w)],x.p)
if(this.e)p.push(D.eA0)
p.push(B.am)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.hb,w,w,w))
if(t!=null)p.push(new A.D(B.uU,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Fj,w,w,w),w))
return A.o(w,A.x(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(s,w,q,r,w,w,B.m),w,w,w,w,B.bH,w,w,w)}}
C.WF.prototype={
T(){return new C.bmZ(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
d_k(d){return this.f.$1(d)},
ge3(){return this.d}}
C.bmZ.prototype={
gTj(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a4()
this.PU()},
PU(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$PU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bU4(u.a.d),$async$PU)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dk6[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bU3(p,(o===$?u.d=q.c:o).a,r),$async$PU)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e4c(u,n))
return A.h(null,v)}})
return A.i($async$PU,v)},
uG(d){return this.cqw(d)},
cqw(d){var w=0,v=A.j(x.H),u=this,t
var $async$uG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).cc(A.ed(new C.e4d(d),!1,null,x.H)),$async$uG)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.PU()
return A.h(null,v)}})
return A.i($async$uG,v)},
gb7C(){var w,v,u,t=C.Ng(this.gTj()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a34(d){return this.cxO(d)},
cxO(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a34=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d_k(r),$async$a34)
case 2:if(u.c!=null)u.l(new C.e4e(u,r))
return A.h(null,v)}})
return A.i($async$a34,v)},
Pd(d){return this.bSt(d)},
bSt(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Pd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hk2(t.gTj())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.N0("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).cc(A.ed(new C.e4a(q),!1,null,r)),$async$Pd)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bk(j,new C.e4b(p))
o=s.length
B.d.ca(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a34(A.cV(s,0,A.dy(2,"count",x.S),r).dq(0)),$async$Pd)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pd,v)},
Yf(d,e){return this.bQ2(0,e)},
bQ2(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Yf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ce(null,null,!0,null,new C.e49(e),o,null,!0,!0,x.y),$async$Yf)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hk2(u.gTj()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a34(o),$async$Yf)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Yf,v)},
aaM(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e46(this,j):h
o=o?0.55:1
w=A.ap(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ac(0,B.H,g.j(0.35),B.cz,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.Wj,p,p,p),B.b_],s)
q=A.m(10)
r.push(A.o(p,A.c(i,p,p,p,p,p,p,D.fAu,p,p,p),B.f,p,p,new A.n(B.hT,p,p,q,p,p,B.m),p,p,p,p,B.zk,p,p,p))
return A.ay(p,A.d0(A.o(p,A.x(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.b_,A.c(e,p,2,p,p,p,p,D.fIo,p,p,p),B.cT,A.c(f,p,3,B.a2,p,p,p,D.fBd,p,p,p)],s),B.D,p,B.e,B.h,0,B.p),B.f,p,p,new A.n(p,p,u,v,t,new A.a8(B.ay,B.aC,B.x,w,p,p),B.m),p,p,p,p,B.wN,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
XI(d,e,f,g,h,i){return this.aaM(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Ng(s.gTj()),p=s.gTj(),o=C.aRK(s.e),n=C.hk2(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e4f(s),k=C.hKV(p,1).length,j=C.hL5(p,1).length,i=C.hM_(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.K(B.cV.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,B.acF,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fFR,r,r,r),a0=q.b.length,a1=x.p
g=A.o(r,A.A(A.a([e,B.ba,A.E(A.x(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.WD,r,r,r)],a1),B.D,r,B.e,B.h,0,B.p),1),A.x(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qc,r,r,r),D.h3Y],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.n(h,r,f,g,r,r,B.m),r,r,r,r,B.bH,r,r,r)
f=s.XI("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.e4g(s,p),l.$1("kahoot"))
h=s.XI("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lM,new C.e4h(s,p),l.$1("fire"))
a0=s.XI("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.wC,new C.e4i(s,p),l.$1("catch"))
j=j!==0?new C.e4l(s,p):r
j=s.aaM("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hQ,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e4m(s,p):r
i=s.aaM("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lL,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.XI("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.fn,new C.e4n(s,p),l.$1("journey"))
k=k!==0?new C.e4o(s,p):r
k=A.a([g,B.aO,D.h8_,B.P,A.l_(0.98,A.a([f,h,a0,j,i,e,s.aaM("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ep,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.XI("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d6,new C.e4p(s,p),l.$1("school"))],a1),2,12,12,r,B.e0,!0),B.dc,A.A(A.a([D.bMg,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fAz,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.P],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.aw(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fPw,B.ba,new A.bz(1,B.bd,A.x(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hm,r,r,r),A.c(""+v.gaqa(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.Fj,r,r,r)],a1),B.D,r,B.e,B.h,0,B.p),r)],a1)
if(v.gaqa(0).length>=2){f=D.lN.j(0.2)
t=new A.aw(D.lN,1,B.r,-1)
g.push(A.ay(r,A.o(r,A.W(B.h9,D.lN,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bF(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4q(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cV.j(0.2)
t=new A.aw(B.cV,1,B.r,-1)
f=A.ay(r,A.o(r,A.W(B.ji,B.cV,r,r,r,20),B.f,r,r,new A.n(f,r,new A.bF(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4r(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fi.j(0.2)
t=new A.aw(B.fi,1,B.r,-1)
B.d.u(g,A.a([B.bm,f,B.bm,A.ay(r,A.o(r,A.W(B.ek,B.fi,r,r,r,20),B.f,r,r,new A.n(e,r,new A.bF(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e4s(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.o(r,new A.c6(B.aM,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.n(i,r,new A.bF(u,u,u,u),new A.be(h,h,h,h),r,r,B.m),r,r,r,B.da,B.bk,r,r,r))}if(s.a.e){j=m?new C.e4j(s):new C.e4k(a2)
i=A.m(18)
h=A.K(m?B.cV:B.aT,B.r,2)
g=m?B.cV.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.ay(r,A.o(r,A.as(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.cV:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.n(g,r,h,i,r,r,B.m),r,r,r,r,B.OJ,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.h8W)
k.push(B.aB)
k.push(D.aur)
return new C.tG("Family Games \xb7 "+p.b,A.cu(k,r,r,D.bGp,r,r,B.ah,!1),B.f8,r)}}
C.a0o.prototype={
a7(){return"_KPhase."+this.b}}
C.amC.prototype={
T(){return new C.amD(D.b2m)},
gd2(){return this.e}}
C.amD.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fY(d){var w,v=this
v.l(new C.bTE(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dg(B.fQ,new C.bTF(v))},
aQG(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.l(new C.bTu(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dg(B.fh,new C.bTv(w))},
Lq(d){var w
if(this.d!==D.ae6)return
w=this.at
if(w!=null)w.a1(0)
this.b7y(d)},
b7y(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.S(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bTA(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.tc,v.giC(v))},
cMS(d){var w=this
if(w.d!==D.XJ)return
if(w.e+1>=w.a.w.length)w.Z1()
else{w.l(new C.bTB(w))
w.aQG()}},
Z1(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Z1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bHI(p,u.w,t)
u.l(new C.bTx(u,s))
w=2
return A.b(C.BY(u.a.e,s),$async$Z1)
case 2:r=e
t=u.a
w=3
return A.b(C.BZ(t.e,t.f,t.r,u.f),$async$Z1)
case 3:q=e
if(u.c!=null)u.l(new C.bTy(u,r,q))
return A.h(null,v)}})
return A.i($async$Z1,v)},
cNH(){var w,v,u,t,s=this,r=s.a,q=new A.e_()
q.cU(r.w.length*31+B.a.gY(r.f))
w=s.a.w.length*900
v=A.a([new A.b3("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cV(r,0,A.dy(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bR(r,r.gL(0),u.k("bR<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b3(t,B.i.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b0(v,new C.bTC())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b2m===r){w=A.a([D.h4m,B.T,A.c(s,t,t,t,t,t,t,B.WN,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fAH,t,t,t))
w.push(B.aB)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.Bm,B.K,t,t))
w.push(B.e4)
w.push(C.uy("Play",u.geY(u),B.cV,B.h9,D.fF))
w=A.as(new A.D(B.eA,A.x(w,B.l,t,B.e,B.N,0,B.p),t),t,t,t)
break A}if(D.b2n===r){w=A.as(A.c(""+u.z,t,t,t,t,t,t,D.fIW,t,t,t),t,t,t)
break A}if(D.ae6===r||D.XJ===r){w=u.ct9()
break A}if(D.b2o===r){w=u.cdN()
break A}w=t}return new C.tG(s,w,B.f8,t)},
ct9(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.XJ,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aXi,j,j,j),B.b_],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.Lt,j,j,j))
g.push(B.as)
f=A.m(14)
g.push(A.o(j,A.c(""+k.f,j,j,j,j,j,j,B.iP,j,j,j),B.f,j,j,new A.n(B.bw,j,j,f,j,j,B.m),j,j,j,j,B.CO,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.m(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.bw(f,A.kc(B.bw,j,k.as<5?B.fi:B.cV,9,j,w,j),B.aq)
w=A.m(22)
v=A.K(B.cV,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lN:B.nv,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.P,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fzK,B.K,j,j)],h),B.l,j,B.e,B.N,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fL6,B.K,j,j)
w=A.E(A.o(j,A.as(u,j,j,j),B.f,j,j,new A.n(D.qA,j,v,w,j,j,B.m),j,j,j,j,B.fo,j,j,1/0),3)
v=A.a([],h)
for(u=k.giC(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bTz(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aEB[o]
m=new A.aP(16,16)
l=new A.aw(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aEV[o],j,j,j,j,j,j,D.fBG,j,j,j),B.as,new A.bz(1,B.bd,A.c(r[t],j,3,B.a2,j,j,j,D.fAE,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(B.asV)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c08)
v.push(A.ay(j,new A.T9(A.o(j,new A.c6(B.aM,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.n(n,j,new A.bF(l,l,l,l),new A.be(m,m,m,m),H.aCZ,j,B.m),j,j,j,j,B.f2,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.l_(1.45,v,2,10,10,j,B.e0,!1),4)],h)
if(i)h.push(D.ezf)
return new A.D(B.a1B,A.x(h,B.l,j,B.e,B.h,0,B.p),j)},
cdN(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cNH(),m=x.p,l=A.a([D.bet,A.as(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qc,o,o,o),o,o,o),A.as(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Wo,o,o,o),o,o,o),B.aO],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cV.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.aw(s?B.cV:B.bw,1,B.r,-1)
q=A.c(w<3?D.dmj[w]:""+(w+1),o,o,o,o,o,o,B.mH,o,o,o)
s=s?B.u:B.O
l.push(A.o(o,new A.c6(B.aM,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bd,A.c(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iP,o,o,o)],m),o),B.f,o,o,new A.n(v,o,new A.bF(r,r,r,r),new A.be(u,u,u,u),o,o,B.m),o,o,o,B.cy,B.eR,o,o,o))}l.push(B.T)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.ID(m,v,p.CW,o))
l.push(B.aO)
l.push(A.as(C.uy("Back to the games",new C.bTw(p),B.cV,B.kh,D.fF),o,o,o))
return A.cu(l,o,o,B.fo,o,o,B.ah,!1)}}
C.Uk.prototype={
T(){return new C.amz(A.S(x.de,x.er))}}
C.amz.prototype={
gDm(){var w,v=this,u=v.d
if(u===$){w=C.hq2(v.a.c.ak())
v.d!==$&&A.bE()
v.d=w
u=w}return u},
glX(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDm().b
v=$.ax()
u.e!==$&&A.bE()
t=u.e=new A.at(new A.bc(w,B.b8,B.aP),v)}return t},
cgQ(d){return this.f.c_(0,d,new C.bT4(d))},
Z(){this.a4()
var w=this.gDm().c
if(w.length===0)w.push(C.hbt(null,0,20,""))},
t(){var w,v,u=this.glX(0)
u.V$=$.ax()
u.R$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aT(u.d);w.C();){v=w.gP(w)
v.V$=$.ax()
v.R$=0}this.a3()},
cMI(){if(this.gDm().c.length>=12)return
this.l(new C.bT5(this))},
jG(d){var w,v,u=this,t=u.gDm()
t.b=B.a.i(u.glX(0).a.a)
w=t.gaqa(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.U(D.fsG)
return}v=t.c
B.d.a8(v)
B.d.u(v,w)
v=u.c
v.toString
A.a6(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bTf(),r=x.p,q=A.a([A.bO(!1,D.fUy,t,t,!0,t,t,t,u.gbrm(u),t,t)],r),p=A.a([D.h8x,B.af,A.aN(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glX(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ae,t,t,t,t,t,t,t,t,t,t,t,B.hb,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDm().c.length,w<v;++w)B.d.u(p,A.a([new A.fh(new C.bTe(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uy("\uff0b Add a question",u.gcMH(),B.aT,t,B.c),t,t,t))
return new C.tG("Make your game",A.cu(p,t,t,D.bGm,t,t,B.ah,!1),q,t)}}
C.arK.prototype={
T(){return new C.aFW(A.a([],x._))},
bu(){return this.r.$0()},
qu(){return this.w.$0()},
ge3(){return this.c}}
C.aFW.prototype={
Z(){var w,v
this.a4()
this.wE()
w=this.a
v=w.c
if(v.length!==0)C.a8I(v,w.e,w.d.w)},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hmS(r,t.e,!1,s.w,new C.e5S(u),null,s),$async$wu)
case 2:w=3
return A.b(u.wE(),$async$wu)
case 3:return A.h(null,v)}})
return A.i($async$wu,v)},
a1h(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hmS(r,t.e,!0,s.w,new C.e5R(u),null,s),$async$a1h)
case 2:w=3
return A.b(u.wE(),$async$a1h)
case 3:return A.h(null,v)}})
return A.i($async$a1h,v)},
wE(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wE=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Br(q.a.c),$async$wE)
case 7:p=e
if(q.c!=null)n=q.e||J.cK(p)
else n=!1
if(n)q.l(new C.e5U(q,p))
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
return A.b(C.Hx(q.a.c).dc(0,B.qN),$async$wE)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e5V(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e5W(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wE,v)},
Pz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.fsg)
w=3
return A.b(C.Hx(t.a.c),$async$Pz)
case 3:r=e
w=4
return A.b(C.h0V(t.a.c,r),$async$Pz)
case 4:q=e
w=5
return A.b(C.Hx(t.a.c),$async$Pz)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e5Q(t,p))
o=t.c.K(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b2(null,null,null,q?B.dN:B.d3,null,B.t,null,s,null,B.lS,null,null,null,null,null,null,null,null,null,null))
t.a.qu()
case 1:return A.h(u,v)}})
return A.i($async$Pz,v)},
IH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ixC(l),$async$IH)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i0d(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b28(q,p.e,l,"Each family tree costs $"+B.i.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IH)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hH6(r)
o=Date.now()
n=t.a.c
m=new C.kZ(l,r.toUpperCase(),p,!0,B.Z,D.E8,new A.V(o,0,!1),0,n,D.v1,B.ch)
w=5
return A.b(C.a4n(n,m),$async$IH)
case 5:w=6
return A.b(t.wE(),$async$IH)
case 6:t.a.bu()
t.a.qu()
if(t.c==null){w=1
break}t.Fe(m)
case 1:return A.h(u,v)}})
return A.i($async$IH,v)},
Fe(d){return this.clL(d)},
clL(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Fe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Br(u.a.c),$async$Fe)
case 2:n=l.ny(k.dI(f,new C.e5T(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hF(m,new C.arE(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Fe)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4n(u.a.c,o),$async$Fe)
case 6:case 5:w=7
return A.b(u.wE(),$async$Fe)
case 7:u.a.qu()
return A.h(null,v)}})
return A.i($async$Fe,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=new C.uk(p)
if(r.e)return A.as(A.n3(q,p?B.bu:B.bh,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.eg:B.c
v=A.m(15)
u=A.aF(!1,B.a3,!0,q,A.aM(!1,q,!0,A.o(q,D.bYJ,B.f,q,q,new A.n(B.aV.j(0.12),q,A.K(B.aV,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cQ,!0,q,q,q,q,q,q,q,q,q,q,q,r.gckP(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.G,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gy(A.o(q,A.x(A.a([u,B.aO,t,B.P,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.e4,A.bJ(D.hbO,q,r.gaTZ(),A.bn(B.bQ,q,q,q,q,q,B.a1Z,q,new A.ba(A.m(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.n(w,q,q,v,q,q,B.m),q,q,q,q,D.bJ6,q,q,1/0),15,B.ag,1.05,D.adU,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.G,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b_],v)
if(J.cK(r.d))w.push(A.aH(q,q,q,q,A.W(B.A0,B.aV,q,q,q,q),q,q,q,new C.e5Y(r),q,q,q,q,"Sync family trees with database",q))
if(J.cK(r.d))w.push(A.aH(q,q,q,q,A.W(B.zX,B.aV,q,q,q,q),q,q,q,r.gahC(),q,q,q,q,"Transfer / backup file",q))
w.push(A.db(B.atQ,q,D.fRQ,r.gaTZ(),A.bn(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gy(r.cIQ(J.t(r.d,s),o),14,B.ag,1,D.adU,q))
B.d.u(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.h,0,B.p)],v),B.D,q,B.e,B.h,0,B.p)},
cIQ(d,e){var w=null,v=e.a,u=v?B.eg:B.c,t=A.m(14),s=A.K((v?B.ei:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.H,B.w.j(v?0.35:0.08),B.et,10)],x.V),q=A.m(14),p=A.o(w,D.bXO,B.f,w,w,new A.n(B.aV.j(0.15),w,w,A.m(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gar9(),m=d.d?"":" \xb7 Public",l=d.y===D.l3?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bB,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.D,w,B.e,B.h,0,B.p),1)
return A.o(w,A.aF(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.D(B.bH,A.A(A.a([p,B.ba,l,A.W(B.PD,v?B.bu:B.bh,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e5X(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.n(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.arE.prototype={
T(){return new C.aFT(A.a([],x._),A.aR(x.N),A.baU())},
bu(){return this.r.$0()},
ge3(){return this.c}}
C.aFT.prototype={
Z(){var w,v,u=this
u.a4()
u.d=u.a.w
u.aee()
w=u.a
v=w.c
if(v.length!==0)C.a8I(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ax()
w.R$=0
this.a3()},
a4e(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4e=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yF("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e5i(r),s,null,!0,!0,x.y),$async$a4e)
case 3:if(e!==!0||t.c==null){w=1
break}t.Kl()
t.l(new C.e5j(t,r))
w=4
return A.b(t.uC(),$async$a4e)
case 4:t.a.bu()
t.yF(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a4e,v)},
cyn(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aU.x1$.push(new C.e5d(w,f,d,e))},
aWi(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dt()
u.ed(w,v,0,1)
u.k7(q,q,1,1)
this.w.sp(0,u)},
bec(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eM(new Float64Array(16))
q.e7(r)
w=q.Dr()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dt()
t.ed(r,u,0,1)
t.k7(v,v,1,1)
t.ed(-r,-u,0,1)
t.iZ(0,q)
s.sp(0,t)},
aee(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aee=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Br(u.a.c),$async$aee)
case 2:t=s.ny(r.dI(e,new C.e4F(u)))
if(t!=null&&u.c!=null)u.l(new C.e4G(u,t))
return A.h(null,v)}})
return A.i($async$aee,v)},
yF(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
wu(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.hmS(o,t,!1,r,new C.e4X(u),q.a,s),$async$wu)
case 2:n=A
m=J
w=3
return A.b(C.Hx(u.a.c),$async$wu)
case 3:p=n.ny(m.dI(e,new C.e4Y(u)))
if(p!=null&&u.c!=null)u.l(new C.e4Z(u,p))
return A.h(null,v)}})
return A.i($async$wu,v)},
Kl(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cH(w,0)},
uC(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a4n(t,s),$async$uC)
case 2:return A.h(null,v)}})
return A.i($async$uC,v)},
a2M(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uz(q,t.a.c)){t.yF("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iyP(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a2M)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Kl()
t.l(new C.e5c(t,r))
w=4
return A.b(t.uC(),$async$a2M)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2M,v)},
b4d(){var w=this.c
w.toString
A.a6(w,!1).cc(A.ed(new C.e4U(this),!1,null,x.H))},
a1u(){return this.clN()},
clN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uz(m,t.a.c)){t.yF("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.O(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e59(),A.T(s).k("Y<1>")).gL(0)
s=A.ew([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("cj.E"))
B.d.ff(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e5a(n,t,new C.uk(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1u)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Kl()
t.l(new C.e5b(t,o))
w=6
return A.b(t.uC(),$async$a1u)
case 6:case 5:if(o.a&&t.c!=null)t.b4d()
case 1:return A.h(u,v)}})
return A.i($async$a1u,v)},
X1(d){return this.bEX(d)},
bEX(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$X1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uz(r,t.a.c)){t.yF("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e4t(t,d),r,null,!0,!0,x.P),$async$X1)
case 3:s=f
if(s==null){w=1
break}t.Kl()
t.l(new C.e4u(t,s))
w=4
return A.b(t.uC(),$async$X1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$X1,v)},
a4z(d){return this.cL5(d)},
cL5(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a4z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.O(s)
t=u.c
t.toString
w=2
return A.b(A.ce(null,null,!0,null,new C.e5l(u,d,new C.uk(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a4z)
case 2:return A.h(null,v)}})
return A.i($async$a4z,v)},
ci2(d){var w=this,v=w.d
v===$&&A.d()
if(C.uz(v,w.a.c))w.Pe(d)
else w.a4z(d)},
ak7(d,e){return this.cCn(d,e)},
cCn(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ak7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.O(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.e5f(new C.uk(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$ak7)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ak7,v)},
IM(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$IM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.l3?3:5
break
case 3:w=6
return A.b(C.h9G(t.a.c),$async$IM)
case 6:s=e
o=t.a
r=C.huW(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ak7(!s,!r),$async$IM)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aRP(o,t.a.c)){t.yF("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lm(o,"Cancel","Remove",q.y===D.l3?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$IM)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aRN(t.a.c,t.d.a),$async$IM)
case 11:t.a.bu()
o=t.c
if(o==null){w=1
break}A.j3(o,null)
case 1:return A.h(u,v)}})
return A.i($async$IM,v)},
abI(d){return this.bQj(d)},
bQj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$abI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uz(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aS(s,new C.e4v(p))){o=A.T(s)
p.a=A.ny(new A.cN(new A.Y(s,new C.e4w(d),o.k("Y<1>")),new C.e4x(),o.k("cN<1,q>")))}q=p.a
if(q==null)q=d.d
t.Kl()
t.l(new C.e4y(t,s,d,q))
w=3
return A.b(t.uC(),$async$abI)
case 3:t.yF(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$abI,v)},
Pe(d){return this.bSx(d)},
bSx(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pe=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uz(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a4z(d),$async$Pe)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.e4C(t,d),r,null,!0,!0,x.P),$async$Pe)
case 6:s=f
if(s==null){w=1
break}t.Kl()
t.l(new C.e4D(t,s))
w=7
return A.b(t.uC(),$async$Pe)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Pe,v)},
cJg(){var w=this,v=w.d
v===$&&A.d()
if(!C.uz(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e5k(w))
w.uC()},
a_6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aRP(n,t.a.c)){t.yF("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.O(n)
s=$.ax()
r=new A.at(B.ax,s)
q=t.d.e
p=A.bs(new A.N(q,t.gcgw(),A.T(q).k("N<1,q>")).c0(0,new C.e4P()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e4Q(t,new C.uk(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_6)
case 3:o=e
r.V$=s
r.R$=0
if(o!==!0||t.c==null){w=1
break}t.Kl()
t.l(new C.e4R(t,p))
w=4
return A.b(t.uC(),$async$a_6)
case 4:t.yF("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_6,v)},
cgx(d){return B.a.i(d.toLowerCase())},
ckz(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uz(v,w)
t=r.d
s=C.inK(t)
C.ixG(q,t.b,u,C.inJ(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.uk(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.Y(l,new C.e5s(),A.T(l).k("Y<1>")).gL(0)
l=n?B.c6:B.hP
v=A.W(B.a38,n?B.bu:B.bh,o,o,o,18)
u=x.p
v=A.a([new A.D(B.CP,A.aM(!1,o,!0,new A.D(B.hD,A.A(A.a([v,B.bm,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.N,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e5t(p,d),o,o,o,o,o,o,o),o),new A.D(B.nO,p.c2L(m),o)],u)
if(p.d.y===D.l3){t=B.tL.j(0.15)
s=A.m(12)
r=A.K(B.tL.j(0.45),B.r,1)
q=C.Hv(p.d,p.a.c)
v.push(new A.D(B.ze,A.o(o,A.A(A.a([D.c2i,B.as,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.n(t,o,r,s,o,o,B.m),o,o,o,o,B.hW,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,15,o,o,B.G,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b_],u)
if(C.uz(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GK("Undo",B.pL,p.gcJf(),m,o,o))
u.push(new C.GK("Family Book",D.bSq,p.gcky(),m,B.uB,o))
u.push(new C.GK("Family games",B.nV,p.gckK(),m,B.aD,o))
if(C.uz(p.d,p.a.c))u.push(new C.GK("Display settings",B.DG,p.gclM(),m,B.b5,o))
u.push(new C.GK("Sync",B.zX,p.gahC(),m,o,o))
t=p.d
if(t.y===D.l3||C.aRP(t,p.a.c)){t=p.d.y===D.l3?"Remove shared tree":"Delete tree"
u.push(new C.GK(t,B.ek,p.gbQt(),m,B.fi,o))}if(C.uz(p.d,p.a.c))u.push(new C.GK("Add member",B.xa,new C.e5u(p),m,B.bQ,o))
v.push(new A.D(B.anC,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.gar9()===0){u=A.as(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cf(new C.e5v(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.W(n?G.a3c:P.PE,o,o,o,o,o)
v.push(A.as(A.hu(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e5w(p),o),o,o,o))}return A.c5(o,l,A.bm(!0,A.x(v,B.D,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c2L(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.m(22)
v=A.a([new A.ac(0,B.H,B.h0.j(0.35),B.dm,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.W(B.zO,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a3,!0,m,A.aM(!1,m,!0,A.o(m,D.c5D,B.f,m,m,new A.n(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cQ,!0,m,m,m,m,m,m,m,m,m,m,m,n.gahC(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fCJ,m,m,m)
r=r.gar9()
p=n.d.gar9()===1?"member":"members"
o=x.p
p=A.a([s,B.ba,A.E(A.x(A.a([q,B.bB,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.D,m,B.e,B.h,0,B.p),1)],o)
if(C.uz(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.c2w,m,m,m,n.gcvI(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.jR:B.na
r=r?"Private":"Public"
r=A.E(n.axI(q,"Privacy",r,n.a.d.w?n.gcI9():m),1)
q=A.E(n.axI(B.xf,"Tree code",n.d.c,new C.e4E(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ab,q,B.ab,A.E(n.axI(D.bU9,"Collaborators",p,n.gc7F()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.l3){s=B.c.j(0.15)
B.d.u(p,A.a([B.P,A.aF(!1,B.a3,!0,A.m(999),A.aM(!1,A.m(999),!0,new A.D(B.h6,A.A(A.a([A.W(B.nW,B.c,m,m,m,14),B.e3,A.c("View only",m,m,m,m,m,m,B.aXn,m,m,m)],o),B.l,m,B.e,B.N,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.o(m,A.bw(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.Hs,A.x(p,B.D,m,B.e,B.h,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.n(m,m,m,w,v,D.c9Y,B.m),m,m,m,m,m,m,m,1/0)},
axI(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a3,!0,A.m(14),A.aM(!1,A.m(14),!0,new A.D(B.aoR,A.x(A.a([A.W(d,B.c,w,w,w,18),B.av,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rr,A.c(f,w,1,B.a2,w,w,w,B.xP,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bhG.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bhJ(s,t),new A.au(w,v))],x.p)
r=r.gdQ(r)
B.d.u(u,r.dO(r,new C.djl(this),x.l))
r=s.c
B.d.u(u,new A.N(r,new C.djm(this),A.T(r).k("N<1,w>")))
return new A.D(B.uY,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.L4.prototype={}
C.GO.prototype={}
C.bhI.prototype={
gbmM(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aLB.prototype={}
C.bhJ.prototype={
bS8(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.R()
v=A.L()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.ai,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.hX(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.hX(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bx())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bD.gp(0)
d.af(t,q)},
bS5(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b0(a0,new C.djG())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aS(a0,new C.djH(f))
t=new A.N(a0,new C.djI(f),A.T(a0).k("N<1,G>")).c0(0,new C.djJ()).cC(0,1/0,B.pl)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.lI(n)
k=Math.min(10,m/2)
m=$.R()
j=A.a([],r)
i=new A.aG(m.r,B.ai,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.cg(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ab()
m=new A.cg(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ab()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.aj(m)
i.ab()
d.af(i,e)}},
a2(d,e){var w,v,u,t,s,r
$.R()
w=A.L()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.aa
w.d=B.bG
w.e=B.dM
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bS5(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bS8(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.blv.prototype={
gcdP(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aFb
switch(w.c.a){case 0:return D.d3h
case 1:return D.dfU
case 2:return D.dyg}},
gcdS(){var w=this.c,v=C.hGj(w.w),u=C.hGj(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=t.gcdP(),p=t.c,o=A.bGi(p.f),n=t.gcdS(),m=x.V,l=A.a([new A.ac(0,B.H,B.d.gal(q).j(0.35),B.cN,10)],m),k=r?B.aw:B.c,j=A.K(r?B.aw:B.c,B.r,2)
if(o!=null)w=A.tJ(B.z,s,B.cp,B.bZ,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.o(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(s,s,s,s,s,new A.a8(B.a5,B.a9,B.x,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.o(s,A.o(s,A.i4(w,B.aq),B.f,s,s,new A.n(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.n(s,s,s,s,l,new A.a8(B.ay,B.aC,B.x,q,s,s),B.a6),s,56,s,s,B.D3,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.K(r?B.aw:B.c,B.r,1.5)
l.push(A.ao(s,A.o(s,A.c(""+k,s,s,s,s,s,s,D.fNB,s,s,s),B.f,s,s,new A.n(B.ce,s,w,j,s,s,B.m),s,s,s,s,D.bL4,s,s,s),s,s,s,-6,-4,s))}k=r?B.cu:B.c
j=A.m(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.H,B.w.j(r?0.3:0.06),B.dO,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cu,s,s,s,s,s,s,s,s,u,s,s,B.G,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bh,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.ay(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.av,A.o(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,D.b8B,new A.n(k,s,w,j,m,s,B.m),s,s,s,s,D.bLf,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bgK.prototype={
a2(d,e){var w,v,u,t,s
$.R()
w=A.L()
v=this.b
u=v?B.c:D.blO
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bzC.prototype={
B(d){var w=this,v=null,u=new C.fqw(w),t=w.c,s=t?B.cu:B.c,r=A.m(12),q=u.$3(B.i5,"Zoom in",w.d),p=A.o(v,v,B.f,t?B.bw:B.ft,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xc,"Zoom out",w.e)
return A.aF(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.o(v,v,B.f,t?B.bw:B.ft,v,v,v,1,v,v,v,v,v,22),u.$3(B.ari,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.N,0,B.p),B.f,s,4,v,B.dE,v,v,v,B.aj)}}
C.boR.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.K(B.bQ,B.r,2),s=w.e,r=x.p
t=A.ay(v,A.o(v,A.x(A.a([A.W(s?G.a3c:P.PE,B.bQ,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fJB,v,v,v)],r),B.l,v,B.b9,B.h,0,B.p),B.f,v,v,new A.n(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fHm,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.u(t,new A.N(s,new C.f0p(w),A.T(s).k("N<1,w>")))
B.d.u(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a0B.prototype={
T(){return new C.aEl()},
bu(){return this.Q.$0()},
ge3(){return this.w}}
C.aEl.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ax()
r.d!==$&&A.aQ()
r.d=new A.at(new A.bc(t,B.b8,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.at(new A.bc(t,B.b8,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.at(new A.bc(t,B.b8,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.at(new A.bc(t,B.b8,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.at(new A.bc(t,B.b8,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.at(new A.bc(t,B.b8,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zr:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ipe(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.ax()
u.R$=0
u=v.e
u===$&&A.d()
u.V$=w
u.R$=0
u=v.f
u===$&&A.d()
u.V$=w
u.R$=0
u=v.r
u===$&&A.d()
u.V$=w
u.R$=0
u=v.w
u===$&&A.d()
u.V$=w
u.R$=0
u=v.x
u===$&&A.d()
u.V$=w
u.R$=0
v.a3()},
QK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$QK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.huW(p.y,p.w)
w=3
return A.b(A.ly(t.a.w,B.K3),$async$QK)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b28(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$QK)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i0e(p.y,p.w)
t.a.bu()
case 5:w=7
return A.b(A.DQ(78,800),$async$QK)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dzC(t,q))
case 1:return A.h(u,v)}})
return A.i($async$QK,v)},
cdR(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.i5(B.o.v(1000*Date.now()),w,D.zr,null,null,null,"","","","","",1,!1,0)
u=l.y
u===$&&A.d()
t=l.z
s=l.Q
r=l.as
q=l.e
q===$&&A.d()
q=B.a.i(q.a.a)
p=l.f
p===$&&A.d()
p=B.a.i(p.a.a)
o=l.r
o===$&&A.d()
o=B.a.i(o.a.a)
n=l.w
n===$&&A.d()
n=B.a.i(n.a.a)
m=l.x
m===$&&A.d()
m=B.a.i(m.a.a)
s=v.aGR(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).N(s)},
abj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dzB(r),s,null,!0,!0,x.y),$async$abj)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$abj,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===B.I,i=new C.uk(j),h=l.a.e,g=A.T(h).k("Y<1>"),f=A.B(new A.Y(h,new C.dzL(l),g),g.k("M.E"))
h=j?B.eg:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bJs,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hd(A.aM(!1,k,!0,new A.D(B.lX,A.W(B.ek,B.pz,k,k,k,17),k),B.cQ,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbN1(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.k4:B.iE
t=A.bGi(l.as)
if(l.as==null)s=A.W(B.pH,j?B.bu:B.bh,k,k,k,40)
else s=k
s=A.as(A.ay(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.hg(u,t,s,k,42),A.ao(0,A.hg(B.bQ,k,D.bWS,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcdO(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aEn(t,"Full name",B.mn,1,1,i,B.mF)
u=l.y
u===$&&A.d()
u=A.x(A.a([t,B.T,new C.blt(i,u,new C.dzM(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.G,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bCN],q)
o=l.a.e
B.d.u(p,new A.N(o,new C.dzN(),A.T(o).k("N<1,eS<q?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.G,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bCP],q)
B.d.u(q,new A.N(f,new C.dzP(),A.T(f).k("N<1,eS<q?>>")))
o=A.x(A.a([t,B.am,new C.aeK(i,r,"Who is their parent?",p,new C.dzQ(l),k,o),B.aB,n,B.am,new C.aeK(i,m,"Who is their spouse / partner?",q,new C.dzR(l),k,o)],v),B.al,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.d()
q=C.aEn(q,"Birth date",D.aqu,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aEn(m,"Birth place",B.a3s,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aEn(n,"Date of death (if deceased)",D.asy,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aEn(p,"Occupation",B.QE,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.an(B.z,k,B.ad,B.t,w,k),B.aB,s,B.bx,new C.aeL(i,"Identity",u,k),B.af,new C.aeL(i,"Family links",o,k),B.af,new C.aeL(i,"Life details",A.x(A.a([q,B.T,m,B.T,n,B.T,p,B.T,C.aEn(r,"Notes",B.l5,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aEm(i,"Child order",l.cm0(l.at),new C.dzS(l),new C.dzT(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hjR(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dzU(l):k
B.d.u(r,A.a([B.T,new C.aEm(i,"Visible in tree",u,w,new C.dzV(l),k)],v))}r.push(B.T)
w=j?B.k4:B.iE
u=A.m(14)
t=A.K(j?B.ei:B.bO,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.o(k,A.iV(k,B.bQ,k,B.ag,k,new C.dzW(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.n(w,k,t,u,k,k,B.m),k,k,k,k,G.ang,k,k,k))
r.push(B.bx)
w=j?B.aS:B.aw
j=j?B.ei:B.bO
r.push(A.A(A.a([A.E(A.dU(B.oe,new C.dzO(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cn,k,new A.ba(A.m(14),B.a1),new A.aw(j,1,B.r,-1),k,k,k,k)),1),B.ba,A.E(A.bJ(D.fjR,k,l.gcdQ(),A.bn(B.aV,k,k,0,B.c,k,B.cn,k,new A.ba(A.m(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.av)
return A.ek(B.f8,k,B.ag,h,new A.a5(420,k,A.cc(A.x(r,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.ao9,k,B.ans,new A.ba(g,B.a1),k,k)},
cm0(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aeL.prototype={
B(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.G,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.k4:B.iE,s=A.m(16)
return A.x(A.a([new A.D(B.a22,u,w),A.o(w,this.e,B.f,w,w,new A.n(t,w,A.K(v?B.ei:B.bO,B.r,1),s,w,w,B.m),w,w,w,w,B.bk,w,w,1/0)],x.p),B.D,w,B.e,B.h,0,B.p)}}
C.blu.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.eg:B.c,r=A.m(12),q=A.K((t?B.ei:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.o(u,A.aN(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bA(u,B.eP,u,B.th,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bh,u,u,u,u,u,u,u,u,u,u,u,B.cF,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.W(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ae,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.n(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.aeK.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.eg:B.c,s=A.m(12),r=A.K((u?B.ei:B.bO).j(0.85),B.r,1),q=A.W(B.ts,u?B.bu:B.bh,v,v,v,v),p=A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.eg:B.c
return A.o(v,new A.EB(A.a5T(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,v,v,v,B.cF,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.n(t,v,r,s,v,v,B.m),v,v,v,v,B.l1,v,v,v)}}
C.blt.prototype={
B(d){var w=new C.dzX(this)
return A.A(A.a([w.$3(D.wX,"Male",B.Qo),B.ab,w.$3(D.oI,"Female",B.Qa),B.ab,w.$3(D.zr,"Other",B.nS)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aEm.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.k4:B.iE,r=A.m(14),q=A.K(t?B.ei:B.bO,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,13,v,v,B.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.o(v,A.A(A.a([A.E(A.x(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.D,v,B.e,B.h,0,B.p),1),new C.aKD(u,B.xc,w.f,v),B.bm,new C.aKD(u,B.i5,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.n(s,v,q,r,v,v,B.m),v,v,v,v,B.ez,v,v,v)}}
C.aKD.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.eg:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bh).j(0.4)
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a5(36,36,A.W(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.aeM.prototype={
bWj(d){switch(d.a){case 0:return B.bQ
case 1:return B.bD
case 2:return B.cC}},
bWk(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_O(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AW(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.eg:B.c
u=A.m(12)
t=A.K((w?B.ei:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.W(f,B.bQ,p,p,p,18),B.as],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,9,p,p,B.G,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.av,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.D,p,B.e,B.h,0,B.p),1))
return A.o(p,A.A(r,B.D,p,B.e,B.h,0,p,p),B.f,p,p,new A.n(v,p,t,u,p,p,B.m),p,p,p,B.cy,B.zb,p,p,1/0)},
afY(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.G,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.k4:B.iE,s=A.m(16),r=A.K(v?B.ei:B.bO,B.r,1)
return A.x(A.a([new A.D(B.a22,u,w),A.o(w,A.x(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(t,w,r,s,w,w,B.m),w,w,w,w,B.bT,w,w,1/0)],x.p),B.D,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hLN(r,q),o=q.c,n=t.bWj(o),m=A.bGi(q.f),l=t.e.a,k=l?B.eg:B.c,j=A.m(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.l3?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bh,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ac(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.as(A.o(s,A.hg(u,m,m==null?A.W(B.pH,n,s,s,s,48):s,s,52),B.f,s,s,new A.n(s,s,w,s,v,s,B.a6),s,s,s,s,B.eB,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.K(n.j(0.45),B.r,1)
v=A.as(A.o(s,A.c(t.bWk(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.G,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.n(w,s,u,v,s,s,B.m),s,s,s,s,B.lV,s,s,s),s,s,s)
u=x.p
i=A.a([t.AW("Full name",i,B.mn)],u)
if(p>0)i.push(t.AW("Child order","#"+p,B.Qg))
r=A.a([h,B.av,r,B.aO,l,B.T,v,B.bx,t.afY("Identity",i),B.af,t.afY("Life details",A.a([t.AW("Birth date",q.w,D.aqu),t.AW("Birth place",q.x,B.a3s),t.AW("Date of death",q.y,D.asy),t.AW("Occupation",q.z,B.QE)],u)),B.af,t.afY("Family links",A.a([t.AW("1. Parent",t.b_O(q.d),B.HS),t.AW("2. Spouse",t.b_O(q.e),B.I7)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.afY("Notes",A.a([t.AW("Notes",q,B.l5)],u))],u))
r.push(B.bx)
r.push(A.bJ(B.LB,s,new C.dA6(d),A.bn(B.aV,s,s,s,s,s,B.cn,s,new A.ba(A.m(14),B.a1),s,s,s)))
return A.eI(s,k,new A.cO(B.mb,A.cc(A.x(r,B.al,s,B.e,B.N,0,B.p),B.t,s,B.y,s,s,B.wR,s,s,B.ah),s),s,s,s,B.Hv,s,B.d7,s,new A.ba(j,B.a1),s)}}
C.GK.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bh
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.v_,A.hd(A.aF(!1,B.a3,!0,A.m(8),A.aM(!1,A.m(8),!0,new A.a5(30,30,A.W(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.arH.prototype={
f1(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.T(w).k("N<1,ab<q,@>>")
w=A.B(new A.N(w,new C.cgE(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jp(w,new C.cgF(),t,x.fO))
return s}}
C.arI.prototype={
T(){return new C.aFV(A.a([],x.bF))},
gd2(){return this.c}}
C.aFV.prototype={
Z(){this.a4()
this.Ks()},
Ks(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ks=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cgI(t.a.c),$async$Ks)
case 3:r=e
w=4
return A.b(C.Br(t.a.c),$async$Ks)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rq(q,new C.e5F(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e5G(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Ks,v)},
ze(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
Lh(d,e){return this.cLN(d,e)},
cLN(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Lh=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e5K(q,e))
t=3
w=6
return A.b(d.$0(),$async$Lh)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e5L(q))
$.eX.mK()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Lh,v)},
YQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pF(r,s.c,s.e),$async$YQ)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lh(new C.e5C(t),"Preparing download\u2026"),$async$YQ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YQ,v)},
YU(d){return this.bUb(d)},
bUb(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pF(r,s.c,s.e),$async$YU)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Lh(new C.e5D(t,d),"Preparing file\u2026"),$async$YU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YU,v)},
ahZ(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahZ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xV.cq().N2(B.Tr,B.v2,!0),$async$ahZ)
case 7:r=e
o=r
q=o==null?null:J.fl(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jJ(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.aa(m)
$.am.$1("[family tree sync pick] file_picker: "+A.v(p))
w=6
break
case 3:w=2
break
case 6:u=A.HF()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahZ,v)},
Zw(d){return this.c3G(d)},
c3G(d){var w=0,v=A.j(x.H),u=this
var $async$Zw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Lh(new C.e5E(u,d),"Restoring family trees\u2026"),$async$Zw)
case 2:return A.h(null,v)}})
return A.i($async$Zw,v)},
Zv(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Zv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahZ(),$async$Zv)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Zw(s),$async$Zv)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zv,v)},
a3C(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pF(r,s.c,s.e),$async$a3C)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Lh(new C.e5J(t),"Creating QR code\u2026"),$async$a3C)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3C,v)},
a3d(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DN()){t.ze("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cc(A.ed(new C.e5H(),!0,null,x.N)),$async$a3d)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Zw(r),$async$a3d)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a3d,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===B.I,n=o?B.Cf:B.hP,m=o?D.alH:B.aS,l=o?B.aL:B.bO,k=o?B.aS:B.aw,j=new C.djK(n,m,l,k,o?B.bP:B.bh)
l=A.aH(p,p,p,p,A.W(B.eJ,k,p,p,p,20),p,p,p,new C.e5N(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dji(!0,B.jB,B.aH,B.aH,q.r?p:q.gcCb(),j,s,"Show restore QR"),1),B.as],u))}s=q.e
r=q.r?p:q.gcyi()
t.push(A.E(C.dji(!s,B.jC,B.b2,B.bi,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dji(!1,B.hH,B.aV,B.bQ,q.r?p:q.gbU4(),j,"Photos & books included","Download all trees"),1),B.as],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dji(!1,B.zY,B.at,B.aQ,q.r?p:q.gc3D(),j,s,"Upload backup file"),1))
l=A.a([new C.bhH(v,l,p),B.lg,new C.ae0(j,"QR restore",p),B.T,t,B.dc,new C.ae0(j,"Backup files",p),B.T,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lg,new C.ae0(j,"One tree",p),B.T],u)
B.d.u(v,J.b9(q.d,new C.e5O(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cu(l,p,p,B.a1V,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.K(B.aV.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.H,B.w.j(o?0.3:0.1),B.dm,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.o(p,A.A(A.a([G.aVH,B.ba,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.n(m,p,t,v,s,p,B.m),p,p,p,p,B.CW,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c5(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.djK.prototype={}
C.bhH.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.H,B.aV.j(0.32),B.kL,28)],x.V)
t=A.ao(p,A.W(B.vn,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.o(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ae,A.A(A.a([A.o(p,D.c56,B.f,p,p,new A.n(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pc,A.E(A.x(A.a([D.fST,B.P,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.D,p,B.e,B.h,0,B.p),1)],q),B.D,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.n(p,p,p,v,u,D.cdl,B.m),p,p,p,p,p,p,p,p)}}
C.ae0.prototype={
B(d){var w=null
return A.A(A.a([A.o(w,w,B.f,w,w,new A.n(B.aV,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3),B.ab,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.G,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.bhF.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.H,B.aH.j(0.1),B.cN,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aF(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eE(A.d0(new A.D(B.a1z,A.x(A.a([A.o(q,A.W(r.d,t,q,q,q,22),B.f,q,q,new A.n(v,q,s,u,q,q,B.m),q,q,q,q,B.tl,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bB,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cF,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.D,q,B.e,B.h,0,B.p),q),w),q,new A.n(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bhK.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aV.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aF(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eE(new A.D(B.eR,A.A(A.a([A.o(v,D.c4h,B.f,v,v,new A.n(q,v,A.K(B.aV.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tl,v,v,v),B.ba,A.E(A.x(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.D,v,B.e,B.h,0,B.p),1),A.W(B.hH,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.n(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0V.prototype={
T(){return new C.aFU()},
gd2(){return this.c}}
C.aFU.prototype={
Z(){this.a4()
this.aaR()},
aaR(){var w=0,v=A.j(x.H),u=this,t
var $async$aaR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b4O(u.a.c,B.EN),$async$aaR)
case 2:t=e
if(u.c!=null)u.l(new C.e5x(u,t))
return A.h(null,v)}})
return A.i($async$aaR,v)},
ajq(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ajq=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e5y(q))
t=4
p=A.hwI(q.a.d,B.EN)
if(p==null){n=A.bb("Could not read this QR code.")
throw A.X(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.au_(n.e,m,l,B.EN,p,n.f),$async$ajq)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e5z(q))
q.c.K(x.q).f.U(D.ftu)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.aa(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(B.a.el(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.e5A(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajq,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.O(d).ax.a===B.I,o=p?B.nE:B.qB,n=p?B.iR:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.h8r,q,q,q,1,q,!0)
w=A.m(24)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.qi(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aV,q,q,q,q,q,q,q,q,q,q,q,B.G,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.o(q,A.x(A.a([B.P,u,B.bx,t,B.P,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.b9,B.h,0,B.p),B.f,q,q,new A.n(n,q,v,w,q,q,B.m),q,q,q,q,B.ae,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ac:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcy1()
if(u)u=B.L1
else u=A.W(r.e===!0?B.hh:B.aqt,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.eo(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cd,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aV,q,B.hl,q,q,q,new A.aw(B.aV.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hV,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.T)
w.push(new A.a5(1/0,q,A.bJ(B.Bn,q,new C.e5B(d),A.bn(B.aV,q,q,q,q,B.hl,q,q,q,q,q,q)),q))
return A.c5(m,o,new A.D(B.ae,A.x(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a0W.prototype={
T(){return new C.bn_(A.A0(B.yZ,B.ol,B.vv))}}
C.bn_.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c5(A.eR(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h09,w,w,w,1,w,!0),B.w,A.A_(this.d,B.bZ,new C.e5P(this,d)),w,!1,!1,w,w)}}
C.b0E.prototype={
B(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.SV,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lT.prototype={}
C.a7K.prototype={
T(){return new C.bmE(null,null)}}
C.bmE.prototype={
Z(){var w=this,v=null
w.a4()
w.d=A.bp(v,B.tc,v,1,v,w)
w.e=A.bp(v,B.nI,v,1,v,w)
w.a.toString
w.d.cK(0)
w.e.cK(0)},
by(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)
w=u.e
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cK(0)},
t(){var w=this.d
w===$&&A.d()
w.t()
w=this.e
w===$&&A.d()
w.t()
this.bA9()},
B(d){var w,v,u=this,t=B.d.dB(D.a7x,new C.dRJ(u),new C.dRK())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cEA(A.c7(new A.he(A.a([w,v],x.dS)),new C.dRL(u,t),null),!0)}}
C.bmD.prototype={
a2(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b4E(d,e)
break
case"house":p.mo(d,e,D.dl5)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdj()
$.R()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mu(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BK(d,e,12)
p.yQ(d,e,B.lp,5,14)
break
case"grocery":p.cmM(d,e)
break
case"calculator":p.cmt(d,e)
break
case"lumber":p.cmU(d,e)
break
case"kitchen":p.cmP(d,e)
break
case"landscape":p.mo(d,e,D.dlF)
s=new A.aG($.R().r,B.ai,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cg(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cg(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bx())
w=A.L()
w.r=B.ep.j(0.85).gp(0)
d.af(s,w)
p.BK(d,e,8)
p.yQ(d,e,B.iH,4,18)
break
case"plumbing":p.cn3(d,e)
break
case"electrical":p.mo(d,e,D.dxq)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.R()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a2(0,0,0+e.a,0+e.b),u)
p.mu(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mu(d,e,B.oy.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BK(d,e,10)
break
case"store":p.cnd(d,e)
break
case"paint_remodel":p.cmZ(d,e)
break
case"roofing":p.cn5(d,e)
break
case"warehouse":p.cnk(d,e)
break
case"vehicles":p.cni(d,e)
break
case"farm":p.cmG(d,e)
break
case"restaurant":p.cn4(d,e)
break
case"tools":p.cng(d,e)
break
case"wallet":p.cnj(d,e)
break
case"concrete":p.cmz(d,e)
break
case"blueprint":p.cmr(d,e)
break
default:p.b4E(d,e)}},
mo(d,e,f){var w,v=new A.a2(0,0,0+e.a,0+e.b)
$.R()
w=A.L()
w.sam(new A.a8(B.ay,B.aC,B.x,f,null,null).aA(0,v))
d.aE(v,w)},
mu(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdj()/2-h
$.R()
w=A.L()
w.b=B.aa
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bW(t,s),u,u+0.1439896632895322-u,!1,w)}},
yQ(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdj()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.R()
r=new A.ar(B.S,B.Q,B.V,B.W,B.U)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BK(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.R()
p=new A.ar(B.S,B.Q,B.V,B.W,B.U)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b4E(d,e){var w,v=this
v.mo(d,e,D.dvG)
w=v.c
v.mu(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mu(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bS1(d,e,B.hS,w)
v.yQ(d,e,B.c.j(0.7),6,8)},
bS1(d,e,f,g){var w,v,u,t,s,r
$.R()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a2(16,r,t,r+3),w)}},
cmM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mo(d,e,D.czb)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ar(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.r=D.djc[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mu(d,e,B.c.j(0.35),w,16)
l.yQ(d,e,B.iH,5,12)},
cmt(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mo(d,e,D.czj)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdj()
$.R()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fs(h,B.cw,h,h,h,h,B.a7,B.bW,h,B.dD,B.bX)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dnt[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb2(0,new A.es(r,h,h,B.cM,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.G,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a2(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ar(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.czl[o]
l=B.kU.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb2(0,new A.es(m,h,h,B.cM,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.G,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a2(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ar(o,3)*0.38)+Math.sin(n)*6))}i.mu(d,e,B.c.j(0.35),w*1.5,14)
i.mu(d,e,B.ey.j(0.55),-v*3.141592653589793*2,8)
i.mu(d,e,B.ou.j(0.4),r*2.8,22)
i.yQ(d,e,B.pt,8,10)
i.BK(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.R()
v=new A.ar(B.S,B.Q,B.V,B.W,B.U)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
cmU(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,H.aCh)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bu(new A.a2(20,r,u,r+10),B.hk)
$.R()
p=new A.ar(B.S,B.Q,B.V,B.W,B.U)
p.r=A.ap(B.h2,B.oo,(s+1)/2).gp(0)
d.aq(q,p)}o.mu(d,e,B.h2.j(0.35),w,15)
o.BK(d,e,8)},
cmP(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mo(d,e,D.djJ)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.R()
m=new A.ar(B.S,B.Q,B.V,B.W,B.U)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mu(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
l.yQ(d,e,B.qp,4,14)},
cn3(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mo(d,e,D.d7t)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.R()
o=new A.ar(B.S,B.Q,B.V,B.W,B.U)
o.b=B.aa
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.yQ(d,e,B.py,6,12)
n.mu(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cnd(d,e){var w,v,u,t,s,r,q,p=this
p.mo(d,e,D.cN8)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bu(new A.a2(r,14,r+u,22),B.jE)
$.R()
q=new A.ar(B.S,B.Q,B.V,B.W,B.U)
q.r=A.ap(B.fr,B.bL,(s+1)/2).gp(0)
d.aq(r,q)}p.mu(d,e,B.c.j(0.3),w,16)
p.BK(d,e,8)
p.yQ(d,e,B.wx,5,13)},
cmZ(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.de3)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bu(new A.a2(r,q,r+8,q+(18+s*22)),B.iw)
$.R()
r=new A.ar(B.S,B.Q,B.V,B.W,B.U)
r.r=[B.iC,B.dA,B.bL,B.ew][t].j(0.85).gp(0)
d.aq(q,r)}this.mu(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cn5(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.dbh)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.R()
q=new A.ar(B.S,B.Q,B.V,B.W,B.U)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.yQ(d,e,B.cA,7,11)},
cnk(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.cPV)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bu(new A.a2(q,p,q+(t-s*8),p+16),B.hk)
$.R()
q=new A.ar(B.S,B.Q,B.V,B.W,B.U)
q.r=A.ap(B.cA,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mu(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cni(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.dBN)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bu(new A.a2(s,r,s+28,r+8),B.hk)
$.R()
q=new A.ar(B.S,B.Q,B.V,B.W,B.U)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BK(d,e,6)},
cmG(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.dif)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.R()
s=A.L()
s.r=B.oy.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.S,B.Q,B.V,B.W,B.U)
p.r=B.hQ.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mu(d,e,B.oy.j(0.35),w,14)},
cn4(d,e){var w,v,u,t,s,r,q=this
q.mo(d,e,D.dkU)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bY(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.R()
r=new A.ar(B.S,B.Q,B.V,B.W,B.U)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.yQ(d,e,B.qp,5,16)
q.BK(d,e,7)},
cng(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,D.dz5)
w=o.c
v=w*3.141592653589793
o.mu(d,e,B.oo.j(0.55),v*3,10)
o.mu(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.R()
p=new A.ar(B.S,B.Q,B.V,B.W,B.U)
p.r=B.oo.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cnj(d,e){var w,v,u,t,s,r,q,p,o=this
o.mo(d,e,D.dCw)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bu(new A.a2(q,p,q+36,p+22),B.jE)
$.R()
q=new A.ar(B.S,B.Q,B.V,B.W,B.U)
q.r=A.ap(B.iH,B.oy,r).gp(0)
d.aq(p,q)}o.BK(d,e,9)
o.mu(d,e,B.c.j(0.4),w*2.2,12)},
cmz(d,e){var w,v,u,t,s,r,q,p
this.mo(d,e,D.dqq)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bW(new A.r(v,u),34)
$.R()
s=A.L()
s.b=B.aa
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.S,B.Q,B.V,B.W,B.U)
p.r=B.bO.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
cmr(d,e){var w,v,u,t,s,r,q
this.mo(d,e,D.dlZ)
$.R()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.i.F(r*0.85,1)
$.R()
u=A.L()
u.r=B.dA.j(0.45).gp(0)
d.aE(new A.a2(0,q,0+v,q+6),u)
this.mu(d,e,B.lp.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.auL.prototype={
a0T(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aSM(),$async$a0T)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aa2(s),$async$a0T)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0T,v)},
ai_(d){return this.cpD(d)},
cpD(d){var w=0,v=A.j(x.H),u=this,t
var $async$ai_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ixQ(d),$async$ai_)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ai_,v)},
B(d){var w,v,u=null,t=A.O(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.k4:B.iE
w=x.p
v=A.a([C.aT9(!0,B.rE,1/0,B.qY,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.n(u,u,u,u,u,new A.a8(B.aX,B.b4,B.x,A.a([B.L,B.w.j(0.35)],x.O),u,u),B.m),B.bl,new A.bK(B.aX,u,u,new A.D(B.te,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aDg,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.db(D.bYC,u,D.fP0,new C.cqj(this,d),A.bn(B.aV,u,u,u,B.c,u,B.jQ,u,u,u,u,B.cj)),1),B.ab,A.E(A.eo(D.c6p,u,D.h3l,this.gcgu(),A.di(u,u,B.w.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jQ,u,u,D.b79,u,u,u,B.cj)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fG(1.7777777777777777,A.aF(!1,B.a3,!0,B.rE,new A.an(B.a0,u,B.b3,B.t,v,u),B.aq,t,0,u,u,u,u,u,B.aj),u)}}
C.aO2.prototype={
aY(){this.b8()
this.b5()
this.dK()},
t(){var w=this,v=w.ba$
if(v!=null)v.a6(0,w.gdD())
w.ba$=null
w.a3()}}
C.aW6.prototype={}
C.aW5.prototype={}
C.aU7.prototype={}
C.a_z.prototype={
T(){return new C.aB4()}}
C.aB4.prototype={
Z(){var w,v,u=this
u.a4()
u.a.toString
w=new A.bc("",B.b8,B.aP)
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.at(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ax()
w.R$=0
this.a3()},
L5(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.fu_)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).N(new C.aW6(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.O(d).ax.a===B.I,l=m?B.eg:B.c,k=A.m(20),j=A.o(n,D.c64,B.f,n,n,new A.n(B.aV.j(0.15),n,n,A.m(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bB,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.D,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.ba,i,A.aH(n,n,n,n,A.W(B.cB,m?B.bu:B.bh,n,n,n,n),n,n,n,new C.daQ(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bh,n,n,n,n,n,n,n,n,11,n,n,B.cF,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hwY(new C.daR(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.aw,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.k4:B.iE
r=A.m(12)
q=A.m(12)
p=m?B.ei:B.bO
t=A.aN(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bA(n,new A.b6(4,r,B.du),n,n,n,n,n,n,!0,new A.b6(4,q,new A.aw(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.daS(o),n,!1,n,n,!1,n,!0,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,B.La,n,n,n,n)
u=m?B.aS:B.aw
m=m?B.ei:B.bO
return A.eI(n,l,new A.cO(B.mb,A.cc(A.x(A.a([j,B.aO,i,B.av,w,B.P,v,B.aO,t,B.bx,A.A(A.a([A.E(A.dU(B.dp,new C.daT(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cn,n,new A.ba(A.m(12),B.a1),new A.aw(m,1,B.r,-1),n,n,n,n)),1),B.as,A.E(A.bJ(D.h3B,n,o.ga3Y(),A.bn(B.aV,n,n,n,B.c,n,B.cn,n,new A.ba(A.m(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.D,n,B.e,B.N,0,B.p),B.t,n,B.y,n,n,B.CY,n,n,B.ah),n),n,n,n,M.CZ,n,B.d7,n,new A.ba(k,B.a1),n)}}
C.a_y.prototype={
T(){return new C.aB3()}}
C.aB3.prototype={
Z(){this.a4()
var w=$.ax()
this.d!==$&&A.aQ()
this.d=new A.at(B.ax,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ax()
w.R$=0
this.a3()},
L5(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.frB)
return}v=this.c
v.toString
A.a6(v,!1).N(new C.aW5(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.O(d).ax.a===B.I,o=p?B.eg:B.c,n=A.m(20),m=A.o(q,D.c2n,B.f,q,q,new A.n(B.bQ.j(0.15),q,q,A.m(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bB,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.D,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.ba,l,A.aH(q,q,q,q,A.W(B.cB,p?B.bu:B.bh,q,q,q,q),q,q,q,new C.daM(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aV.j(p?0.12:0.08)
w=A.m(12)
v=A.K(B.aV.j(0.25),B.r,1)
u=A.W(B.aqf,B.aV.j(0.9),q,q,q,18)
l=A.o(q,A.A(A.a([u,B.as,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.n(l,q,v,w,q,q,B.m),q,q,q,q,B.bH,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.aw,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.k4:B.iE
t=A.m(12)
s=A.m(12)
r=p?B.ei:B.bO
v=A.aN(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bA(q,new A.b6(4,t,B.du),q,q,q,q,q,q,!0,new A.b6(4,s,new A.aw(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.daN(this),q,!1,q,q,!1,q,!0,q,B.ae,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.lh,q,q,q,q)
w=p?B.aS:B.aw
p=p?B.ei:B.bO
return A.eI(q,o,new A.cO(B.mb,A.cc(A.x(A.a([m,B.aO,l,B.aB,v,B.bx,A.A(A.a([A.E(A.dU(B.dp,new C.daO(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cn,q,new A.ba(A.m(12),B.a1),new A.aw(p,1,B.r,-1),q,q,q,q)),1),B.as,A.E(A.bJ(D.haK,q,this.ga3Y(),A.bn(B.bQ,q,q,q,B.c,q,B.cn,q,new A.ba(A.m(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.D,q,B.e,B.N,0,B.p),B.t,q,B.y,q,q,B.CY,q,q,B.ah),q),q,q,q,M.CZ,q,B.d7,q,new A.ba(n,B.a1),q)}}
C.a_4.prototype={
T(){return new C.azK()}}
C.azK.prototype={
Z(){var w,v=this
v.a4()
w=$.ax()
v.d!==$&&A.aQ()
v.d=new A.at(B.ax,w)
v.e!==$&&A.aQ()
v.e=new A.at(new A.bc("1",B.b8,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.at(B.ax,w)
v.r!==$&&A.aQ()
v.r=new A.at(B.ax,w)},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.ax()
u.R$=0
u=v.e
u===$&&A.d()
u.V$=w
u.R$=0
u=v.f
u===$&&A.d()
u.V$=w
u.R$=0
u=v.r
u===$&&A.d()
u.V$=w
u.R$=0
v.a3()},
gKn(){var w,v=this.e
v===$&&A.d()
w=A.cG(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gala(){var w=this.f
w===$&&A.d()
w=A.cG(B.a.i(w.a.a))
return w==null?0:w},
gb7t(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aRx(d){var w,v=B.i.D(this.gKn()+d,0.25,999999),u=B.i.fM(v),t=this.e
t===$&&A.d()
if(v===u)u=B.o.v(B.i.M(v))
else{u=B.i.ac(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb2(0,u)
this.l(new C.cIH())},
aAw(d,e,f,g){var w=null,v=g!=null?A.W(g,B.aV,w,w,w,20):w,u=d.a,t=u?B.k4:B.iE,s=A.m(14),r=A.m(14)
u=u?B.ei:B.bO
return A.bA(w,new A.b6(4,s,B.du),w,B.bH,w,w,w,w,!0,new A.b6(4,r,new A.aw(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.afp),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cgv(d,e,f){return this.aAw(d,e,f,null)},
L5(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.gala()<=0){s.c.K(x.q).f.U(D.fvU)
return}r=s.c
r.toString
v=s.gKn()
u=s.gala()
t=s.gb7t()
A.a6(r,!1).N(new C.aU7(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.uk(n),l=n?B.eg:B.c,k=A.m(24),j=x.O,i=A.a([B.aV.j(0.22),B.bQ.j(0.14)],j),h=A.m(14)
i=A.o(o,D.bWy,B.f,o,o,new A.n(o,o,A.K(B.aV.j(0.35),B.r,1),h,o,new A.a8(B.a5,B.a9,B.x,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bB,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.cF,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.D,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.ba,h,A.aH(o,o,o,o,A.W(B.cB,n?B.bu:B.bh,o,o,o,o),o,o,o,new C.cIN(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aAw(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Qm),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.La,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.G,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.k4:B.iE
t=A.m(14)
s=A.K(n?B.ei:B.bO,B.r,1)
r=A.aH(o,o,o,o,A.W(B.xc,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cIO(p),o,o,o,o,o,B.cj)
q=p.e
q===$&&A.d()
q=A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c7Y,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ec,o,o,o,1,o,o,!1,"\u2022",o,new C.cIP(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.o(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aH(o,o,o,o,A.W(B.i5,n?B.aS:B.aw,o,o,o,20),o,o,o,new C.cIQ(p),o,o,o,o,o,B.cj)],w),B.l,o,B.e,B.N,0,o,o),B.f,o,o,new A.n(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.as,A.E(A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aAw(m,"Amount","0.00",B.hG),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.ec,o,o,o,1,o,o,!1,"\u2022",o,new C.cIR(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.D,o,B.e,B.h,0,o,o)
t=x.gv
u=A.B(new A.N(D.deC,new C.cIS(p,m),t),t.k("ak.E"))
i=A.a([i,B.bx,v,B.aB,h,B.P,s,B.af,A.c_(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.T,A.aN(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cgv(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cIT(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.lh,o,o,o,o)],w))}i.push(B.aO)
h=B.aV.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.K(B.aV.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKn()===B.i.fM(p.gKn())?B.i.M(p.gKn()):p.gKn()
s=p.gb7t()
r=A.Bt(p.gala())
i.push(A.o(o,A.A(A.a([A.E(A.x(A.a([u,B.av,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bh,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.D,o,B.e,B.h,0,B.p),1),C.bH8(p.gKn()*p.gala(),B.b5,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.n(o,o,v,h,o,new A.a8(B.a5,B.a9,B.x,j,o,o),B.m),o,o,o,o,B.jy,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.ei:B.bO
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cn,o,new A.ba(j,B.a1),new A.aw(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cIU(d),h),1),B.as,A.E(A.db(D.atI,o,D.h6C,p.ga3Y(),A.bn(B.aV,o,o,0,B.c,o,B.cn,o,new A.ba(A.m(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.eI(o,l,new A.cO(B.MB,A.cc(A.x(i,B.al,o,B.e,B.N,0,B.p),B.t,o,B.y,o,o,W.tj,o,o,B.ah),o),o,o,o,B.OX,o,B.d7,o,new A.ba(k,B.a1),o)}}
C.a2I.prototype={
T(){return new C.bzu()}}
C.bzu.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.at(new A.bc(w,B.b8,B.aP),v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ax()
w.R$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.O(d).ax.a===B.I,q=r?B.eg:B.c,p=A.m(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.aw,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.k4:B.iE
v=A.aN(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bA(s,new A.b6(4,A.m(12),B.du),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fq1(t,d),s,!1,s,s,!1,s,!0,s,B.ae,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dp,new C.fq2(d),s),1)
r=A.bn(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eI(s,q,new A.D(B.CY,A.x(A.a([o,B.aB,v,B.aO,A.A(A.a([u,B.as,A.E(A.bJ(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fq3(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.N,0,B.p),s),s,s,s,s,s,B.d7,s,new A.ba(p,B.a1),s)}}
C.ad1.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gy.prototype={
T(){return new C.bzs(null,null)}}
C.bzs.prototype={
Z(){var w,v=this
v.a4()
w=A.bp(null,D.bDl,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCu()},
gbE5(){switch(this.a.r.a){case 1:return A.a([B.aV,B.bQ,B.b5],x.O)
case 2:return A.a([B.bv,B.aV,B.b5],x.O)
case 3:return A.a([B.aH,B.ce,B.jM],x.O)
case 4:return A.a([B.fO,B.bQ,B.fs],x.O)
case 0:return A.a([B.aV,B.bQ,B.b5],x.O)}},
B(d){var w=A.O(d),v=this.d
v===$&&A.d()
return new A.e6(A.c7(v,new C.fq_(this,new C.uk(w.ax.a===B.I)),null),null)}}
C.azD.prototype={
T(){return new C.bzt(null,null)}}
C.bzt.prototype={
Z(){var w,v=this
v.a4()
w=A.bp(null,B.nJ,null,1,null,v)
w.cK(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bCv()},
B(d){var w=this.d
w===$&&A.d()
return A.c7(w,new C.fq0(this),null)}}
C.bzr.prototype={
a2(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bu(new A.a2(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aG($.R().r,B.ai,null,null,A.a([],x.v))
u.E(new A.j9(v))
w=A.L()
w.b=B.aa
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.aa
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.zG(u)
t=A.a([],x.U)
w=new A.uT(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bj(A.jH(y.B));--r
q=new A.BV(w,r)
w.jO()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aV9(d,q,r,o,0,0.2,4.2,0.92)
p.aV9(d,q,r,s,0.52,0.11,3.2,0.58)}},
aV9(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hUf(e.a.a,e,t,t+f*i,!0),r=A.ai6(s.gle().a.getBounds())
$.R()
w=A.L()
w.b=B.aa
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a8(B.a5,B.a9,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.J3,null).aA(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aQa.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.aQb.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b8()
this.b5()
this.bC()}}
C.uk.prototype={}
C.auK.prototype={
T(){return new C.aHr()},
ge3(){return this.c}}
C.aHr.prototype={
Z(){var w=this
w.a4()
w.d=w.a.d
w.aiR()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.Mn(w,v)
this.a3()},
aiR(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aiR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bFx(t.c,t.d.a),$async$aiR)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.eYz(u,s))
return A.h(null,v)}})
return A.i($async$aiR,v)},
Rc(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Rc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.eYq(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.Mn(t,s),$async$Rc)
case 2:if(u.c!=null)u.l(new C.eYr(u))
return A.h(null,v)}})
return A.i($async$Rc,v)},
RK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.O(p)
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.eYx(t,new C.uk(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$RK)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aa2(q),$async$RK)
case 6:case 5:t.l(new C.eYy(t,r))
w=7
return A.b(t.Rc(),$async$RK)
case 7:case 1:return A.h(u,v)}})
return A.i($async$RK,v)},
WW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.ixB(r),$async$WW)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.eYl(t,new C.rv(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Rc(),$async$WW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WW,v)},
clB(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hLJ(t,new C.eYp(u),w,v)},
acF(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.o(w,w,B.f,w,w,new A.n(w,w,new A.bF(new A.aw(v,2.5,B.r,-1),B.a1,B.a1,new A.aw(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b6W,w,w,B.m),w,22,w,w,w,w,w,22)},
abH(d){return this.bQg(d)},
bQg(d){var w=0,v=A.j(x.H),u=this
var $async$abH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.eYo(u,d))
w=2
return A.b(u.Rc(),$async$abH)
case 2:return A.h(null,v)}})
return A.i($async$abH,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.O(a2).ax.a===B.I,e=f?B.c6:B.hP,d=A.m(8),a0=A.W(K.a39,f?B.bu:B.bh,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.D(B.HB,A.A(A.a([a0,B.bm,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.N,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eYA(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.X(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b3,B.t,A.a([A.bw(A.m(22),C.aT9(!0,A.m(22),1/0,B.qY,g,d,1/0),B.aq),A.ao(10,A.db(D.c0h,g,D.h9_,h.gb5o(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.hg,g,new A.ba(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.H,B.aV.j(f?0.5:0.38),B.eO,22),new A.ac(-4,B.H,B.bQ.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.o(g,A.o(g,A.bw(s,new A.an(B.a0,g,B.b3,B.t,A.a([C.aT9(!0,A.m(16),1/0,B.PP,g,r.c,1/0),new A.bP(new A.n(g,g,g,g,g,new A.a8(B.aX,B.b4,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.m),B.bl,g,g),A.ao(g,h.acF(!0),g,g,8,g,8,g),A.ao(g,A.cFk(h.acF(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cFk(h.acF(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cFk(h.acF(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.db(D.bX9,g,D.h2j,h.gb5o(),A.bn(B.w.j(0.45),g,g,g,B.c,g,B.hg,g,new A.ba(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.n(g,g,g,d,v,D.c9F,B.m),g,g,g,g,B.lX,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bhW,B.os,B.hq],u):A.a([B.b5,B.aV,B.bQ],u)
t=x.V
s=A.a([new A.ac(0,B.H,B.aV.j(f?0.45:0.35),B.eO,24)],t)
r=A.m(22)
p=A.ao(g,A.W(B.jz,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.o(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.G,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.n(o,g,m,n,g,g,B.m),g,g,g,g,B.hr,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aB,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.G,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bH8(h.d.gxO(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.P,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cF,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.D,g,B.e,B.h,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.K(B.he.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.H,B.aH.j(0.28),B.cN,14)],t)
j=B.aH.j(0.22)
i=A.m(10)
u=A.o(g,A.bw(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bIe,A.A(A.a([o,B.as,A.aF(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eE(new A.D(L.wP,A.x(A.a([A.o(g,D.ath,B.f,g,g,new A.n(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.cr,g,g,g),B.fH,D.fRS],a1),B.l,g,B.e,B.N,0,B.p),g),g,new A.n(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gclA(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.n(g,g,g,v,s,new A.a8(B.ay,B.aC,B.x,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fG(1.7777777777777777,d,g),B.aO,w,B.P,u,B.bx,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,16,g,g,B.G,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b_,A.db(B.a51,g,D.fPH,h.gbEA(),A.bn(B.aV,g,g,g,B.c,g,B.hW,g,new A.ba(A.m(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.eg:B.c
v=A.m(14)
u=A.K(f?B.ei:B.bO,B.r,1)
t=A.W(B.a3v,f?B.bu:B.bh,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.aw,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.o(g,A.x(A.a([t,B.T,s,B.am,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bh,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.n(w,g,u,v,g,g,B.m),g,g,g,g,B.qU,g,g,1/0))}else B.d.u(d,new A.N(w,new C.eYB(h,new C.uk(f)),A.T(w).k("N<1,w>")))
if(h.e)d.push(new A.D(B.z4,A.as(A.n3(g,f?B.bu:B.bh,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c5(g,e,A.bm(!0,A.x(A.a([new A.D(B.CP,a0,g),A.E(A.cc(A.x(d,B.D,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,B.zh,g,g,B.ah),1)],a1),B.D,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bIh(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.eg:B.c,p=A.m(16),o=A.a([new A.ac(0,B.H,B.w.j(r?0.35:0.08),B.cN,12)],x.V),n=A.m(16),m=A.o(u,u,B.f,u,u,D.b9H,u,u,u,u,u,u,u,5),l=B.aV.j(r?0.22:0.12),k=A.m(12)
l=A.o(u,A.W(s?B.ip:B.fT,B.b5,u,u,u,20),B.f,u,u,new A.n(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.G,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd1r()
v=A.Bt(d.d)
B.d.u(t,A.a([B.av,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.D,u,B.b9,B.N,0,B.p)}t=A.E(t,1)
k=A.a([B.aV.j(0.14),B.bQ.j(0.1)],x.O)
w=A.m(12)
k=A.o(u,C.bH8(d.c*d.d,B.b5,!1,B.u),B.f,u,u,new A.n(u,u,u,w,u,new A.a8(B.a5,B.a9,B.x,k,u,u),B.m),u,u,u,u,B.hg,u,u,u)
w=x.p
return A.o(u,A.bw(n,new A.F_(A.A(A.a([m,A.E(new A.D(B.an9,A.A(A.a([l,B.ba,t,B.ab,k,A.aH(u,u,u,u,A.W(B.cB,(r?B.bu:B.bh).j(0.75),u,u,u,20),u,u,u,new C.eYm(this,d),u,u,u,u,u,B.cj)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.al,u,B.e,B.h,0,u,u),u),B.aq),B.f,u,D.b8x,new A.n(q,u,u,p,o,u,B.m),u,u,u,B.da,u,u,u,u)}}
C.af6.prototype={
F9(d){return this.bRE(d)},
bRE(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$F9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pF(d,o,!1),$async$F9)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
w=4
return A.b(A.bN(V.CK,null,x.H),$async$F9)
case 4:s=t.d
w=5
return A.b(C.h_C(!0,o,s),$async$F9)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Ht(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$F9)
case 6:p=f
w=7
return A.b(A.pE(o,!1),$async$F9)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$F9,v)},
a0V(d){return this.cCc(d)},
cCc(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0V=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pF(d,s,!1),$async$a0V)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).N(null)
A.hF(d,new C.auE(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pE(s,!1),$async$a0V)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0V,v)},
Rd(d){return this.cyd(d)},
cyd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(A.hF(d,D.aN4,!0,"NgmyWorksheetProjectScan",x.N),$async$Rd)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bH9(s),$async$Rd)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.fv0)
w=1
break}q=C.hmp(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dL(p,x.H),$async$Rd)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Rd,v)},
a0W(d){return this.cKC(d)},
cKC(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0W=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).N(null)
w=3
return A.b(C.bGD(),$async$a0W)
case 3:s=f
if(s==null){w=1
break}r=C.hmp(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dL(q,x.H),$async$a0W)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0W,v)},
B(d){var w=this,v=null,u=A.O(d).ax.a===B.I,t=new C.uk(u),s=w.d.d.length,r=u?B.eg:B.c,q=A.m(28),p=A.a([new A.ac(0,B.H,B.w.j(u?0.35:0.08),B.kL,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wO,A.o(v,A.x(A.a([w.cAM(d,t,s),new A.D(D.bHC,A.x(A.a([w.b8o(t,"QR restore"),B.T,A.A(A.a([w.b3n(t,!0,B.jB,B.aH,B.aH,new C.eYD(w,d),"Show to scan","QR code"),B.as,w.aAx(t,B.jC,B.b2,B.bi,new C.eYE(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.dc,w.b8o(t,"Backup files"),B.T,A.A(A.a([w.aAx(t,B.hH,B.aV,B.bQ,new C.eYF(w,d),"Full copy","Backup file"),B.as,w.aAx(t,B.zY,B.at,B.aQ,new C.eYG(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.D,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.N,0,B.p),B.aq,v,v,new A.n(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cAM(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.ff,B.cX,B.h0],k):A.a([B.b5,B.aV,B.bQ],k)
w=A.ao(l,A.W(B.vn,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.o(l,l,B.f,l,l,new A.n(B.c.j(0.35),l,l,A.m(4),l,l,B.m),l,4,l,B.kG,l,l,l,36),l,l,l)
u=A.m(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.H,B.w.j(0.2),B.cN,12)],x.V)
r=this.d
s=A.o(l,C.aT9(!0,A.m(13),64,D.bSj,l,r.c,64),B.aq,l,l,new A.n(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.G,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,E.acM,l,l,l)
r=C.bH8(r.gxO(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.o(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bI_,A.x(A.a([v,A.A(A.a([s,B.eu,A.E(A.x(A.a([u,B.av,t,B.P,A.A(A.a([r,B.ab,A.o(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.G,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.n(q,l,o,p,l,l,B.m),l,l,l,l,B.fx,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.D,l,B.e,B.h,0,B.p),1),A.aH(l,l,l,l,A.W(B.cB,B.c.j(0.85),l,l,l,l),l,l,l,new C.eYC(d),l,l,l,A.n7(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,B.aVu,l,l,l,l),l,l)],m),B.D,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.n(l,l,l,l,l,new A.a8(B.ay,B.aC,B.x,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b8o(d,e){var w=null,v=A.o(w,w,B.f,w,w,new A.n(B.aV,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ab,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,B.G,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b3n(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.alH:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.ei:B.bO
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.H,B.aH.j(0.12),B.cN,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.K(h.j(0.35),B.r,1)
t=A.o(r,A.W(f,h,r,r,r,22),B.f,r,r,new A.n(u,r,s,t,r,r,B.m),r,r,r,r,B.tl,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eE(new A.D(B.a1z,A.x(A.a([t,B.af,u,B.bB,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,B.cF,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.D,r,B.e,B.h,0,B.p),r),r,new A.n(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
aAx(d,e,f,g,h,i,j){return this.b3n(d,!1,e,f,g,h,i,j)}}
C.auE.prototype={
T(){return new C.bom()}}
C.bom.prototype={
Z(){this.a4()
this.agK()},
agK(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$agK=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bHa(p.c,p.d),$async$agK)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.eYg(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.eYh(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agK,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.O(d).ax.a===B.I,f=g?B.Cf:B.hP,e=i.d
e=e==null?h:B.a.X(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.W(B.eJ,g?B.ac:B.an,h,h,h,18),h,h,h,new C.eYi(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.u5],u),B.l,h,B.e,B.h,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.ff,B.cX,B.h0],s):A.a([B.b5,B.aV,B.bQ],s)
r=x.V
q=A.a([new A.ac(0,B.H,B.aV.j(g?0.4:0.3),B.eO,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dn,B.K,h,h)
p=C.bH8(p.gxO(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.o(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ab,A.o(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.G,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.n(n,h,h,m,h,h,B.m),h,h,h,h,B.fx,h,h,h)],u),B.l,h,B.b9,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.n(h,h,h,t,q,new A.a8(B.ay,B.aC,B.x,s,h,h),B.m),h,h,h,h,B.a1U,h,h,1/0)
t=g?D.btE:B.c
q=A.m(24)
p=A.K(w?B.aH.j(0.4):B.aV.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.H,B.w.j(g?0.25:0.06),B.dm,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.Wi,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.ezk)
else{m=A.m(20)
l=A.K(B.bn,B.r,1)
o.push(A.o(h,A.qi(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.n(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bS,h,h,h))}}o.push(B.aO)
n=w?B.aH:B.aV
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.K((w?B.aH:B.aV).j(0.35),B.r,1)
k=w?B.Q4:B.QD
k=A.W(k,w?B.aH:B.aV,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.o(h,A.A(A.a([k,B.as,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ac:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.n(n,h,l,m,h,h,B.m),h,h,h,h,B.hW,h,h,h))
return A.c5(h,f,A.bm(!0,A.x(A.a([new A.D(B.Pa,e,h),A.E(A.cc(A.x(A.a([s,B.aO,A.o(h,A.x(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.n(t,h,p,q,r,h,B.m),h,h,h,h,B.uZ,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,B.aok,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.auJ.prototype={
T(){return new C.aHq(A.A0(B.Op,B.ol,B.vv))}}
C.aHq.prototype={
t(){this.d.t()
this.a3()},
aPw(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j3(w,d)},
chn(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.ivB(t)
if(s!=null){this.aPw(s)
return}r=C.hBx(t)
if(r!=null)q=A.cT(r,p,0)
else q=!1
if(q){this.aPw(B.a.i(B.a.aX(r,B.a.ce(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aH(t,t,t,t,A.W(u.f?B.va:B.Qc,t,t,t,t,t),t,t,t,new C.eYk(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Cf,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.h2b,t,t,t,1,t,!0),q=A.A_(u.d,B.bZ,u.gchm()),p=A.m(28)
p=A.as(A.o(t,t,B.f,t,t,new A.n(t,t,A.K(B.aV,B.r,3),p,A.a([new A.ac(2,B.H,B.aV.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c5(r,B.w,new A.an(B.a0,t,B.b3,B.t,A.a([q,p,A.ao(32,A.o(t,D.h0X,B.f,t,t,new A.n(w,t,A.K(B.aV.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jy,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aMn.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.Pd.prototype={
T(){return new C.aHs(D.aeK,A.a([],x.D))},
bu(){return this.r.$0()},
ge3(){return this.c}}
C.aHs.prototype={
gcIn(){return J.bIj(this.e,0,new C.eZ2())},
Z(){this.a4()
$.aU.bZ$.push(this)
this.wt()},
t(){$.aU.hZ(this)
this.a3()},
jn(d){if(d===B.h_)this.wt()},
wt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DM(q.a.c).dc(0,B.kb),$async$wt)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.eYZ(q,p))
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
if(q.c!=null&&q.f)q.l(new C.eZ_(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wt,v)},
IG(d){return this.bOm(d)},
bOl(){return this.IG(null)},
bOm(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.ixD(l,d),$async$IG)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.lD(l,r,q,D.dqG,new A.V(Date.now(),0,!1))
w=4
return A.b(C.Mn(t.a.c,p),$async$IG)
case 4:o=f
w=5
return A.b(t.wt(),$async$IG)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.fs4)
w=1
break}n=J.aT(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.ftU)
else n.K(q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fd(m)
case 1:return A.h(u,v)}})
return A.i($async$IG,v)},
Fd(d){return this.clm(d)},
clm(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Fd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hF(s,new C.auK(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Fd)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.Mn(u.a.c,t),$async$Fd)
case 5:case 4:w=6
return A.b(u.wt(),$async$Fd)
case 6:return A.h(null,v)}})
return A.i($async$Fd,v)},
we(d){return this.c3I(d)},
c3I(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$we=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bGD(),$async$we)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hF(r,D.aN4,!0,"NgmyWorksheetProjectScan",x.N),$async$we)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bH9(q),$async$we)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.K(x.q).f
r.U(A.b2(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hmp(s)
w=15
return A.b(C.Mn(t.a.c,p),$async$we)
case 15:o=f
w=16
return A.b(t.wt(),$async$we)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.ftZ)
w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
t.Fd(p)
case 1:return A.h(u,v)}})
return A.i($async$we,v)},
OP(d){return this.bMZ(d)},
bMZ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$OP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ce(null,null,!0,null,new C.eYK(d),s,null,!0,!0,x.y),$async$OP)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pc(t.a.c,A.a([],x.D)),$async$OP)
case 6:w=7
return A.b(t.wt(),$async$OP)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fs9)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
clz(d){var w=this.c
w.toString
A.bU(B.L,null,new C.eYT(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b91(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.k4
else w=B.c
v=A.m(16)
u=A.K(p?B.ei:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.o(r,A.W(e,d,r,r,r,22),B.f,r,r,new A.n(t,r,r,s,r,r,B.m),r,r,r,r,B.bT,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.aw,r,r,r,r,r,r,r,r,14,r,r,B.G,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a3,!0,r,A.aM(!1,q,!0,A.o(r,A.x(A.a([s,B.af,t,B.bB,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bh,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.D,r,B.e,B.h,0,B.p),B.f,r,r,new A.n(w,r,u,v,r,r,B.m),r,r,r,r,B.th,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a1p(d,e){return this.cln(d,e)},
cln(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1p=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.eYO(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1p)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hLJ(r,new C.eYP(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.OR(d,e),$async$a1p)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1p,v)},
b60(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.o(u,A.W(e,f,u,u,u,22),B.f,u,u,new A.n(t,u,u,s,u,u,B.m),u,u,u,u,B.bT,u,u,u)
if(d)t=B.aA
else t=h.a?B.aS:B.aw
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.G,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bh,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.D,u,B.e,B.h,0,B.p),1)
return A.aF(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.D(B.CW,A.A(A.a([s,B.ba,t,A.W(B.eK,w?B.bu:B.bh,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cso(d,e,f,g,h,i){return this.b60(!1,d,e,f,g,h,i)},
OR(d,e){return this.bN8(d,e)},
bN8(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lm(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$OR)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bFj(t.a.c,d.a),$async$OR)
case 6:w=7
return A.b(t.wt(),$async$OR)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$OR,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.O(d).ax.a===B.I,m=new C.uk(n),l=n?B.c6:B.hP
if(p.f)n=D.bfF
else{w=A.aD(d,B.dF,x.w).w
v=p.bHn(m)
u=p.c2M(m)
t=p.gbEs()
if(n)s=B.k4
else s=B.c
r=A.m(13)
q=x.p
t=A.a([v,B.af,u,B.aO,new C.Gy(A.o(o,A.A(A.a([p.aE6(B.PO,"Projects",m,D.aeK),p.aE6(B.v4,"Cashier",m,D.b3p),p.aE6(B.HS,"Family Tree",m,D.hPE)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.n(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eB,0.95,t,o),B.bx],q)
v=p.d
if(v===D.aeK){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.aw,o,o,o,o,o,o,o,o,16,o,o,B.G,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b_,new C.azD(p.gaTU(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aB,p.csr(m)],q))}else{n=p.a
if(v===D.b3p)t.push(new C.aqv(n.c,m,o))
else{v=p.r
t.push(new C.arK(n.c,n.d,n.e,n.f,new C.eZ5(p),new C.eZ6(p),new A.bl(v,x.b4)))}}n=A.cc(A.x(t,B.D,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.P(20,w.r.b+8,20,32),o,o,B.ah)}return A.c5(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bHn(d){var w=null,v=A.m(8),u=d.a,t=A.W(K.a39,u?B.bu:B.bh,w,w,w,16)
return A.aM(!1,v,!0,new A.D(B.kc,A.A(A.a([t,B.bm,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.N,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eYH(this),w,w,w,w,w,w,w)},
gbEs(){switch(this.d.a){case 0:return D.adT
case 1:return D.hEk
case 2:return D.adU}},
c2M(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.H,B.aV.j(0.35),B.cz,16)],x.V),t=x.p,s=A.A(A.a([A.o(w,D.c2d,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,44,w,w,w,w,w,44),B.ba,D.bMD,A.aF(!1,B.a3,!0,w,A.aM(!1,A.m(12),!0,A.o(w,D.c_x,B.f,w,w,new A.n(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eYL(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.D,w,B.e,B.h,0,w,w),r=B.b5.j(0.55),q=A.m(12)
return new C.Gy(A.o(w,A.x(A.a([new A.D(B.Hu,s,w),A.o(w,A.x(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.av,A.c(A.Bt(this.gcIn()),w,w,w,w,w,w,D.fLR,w,w,w)],t),B.D,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(r,w,w,q,w,w,B.m),w,w,w,B.tg,B.jy,w,w,1/0)],t),B.D,w,B.e,B.h,0,B.p),B.f,w,w,new A.n(B.aV,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hEj,w)},
aE6(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aV:B.L,q=A.m(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.H,B.aV.j(0.42),B.cN,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bh
w=A.W(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bh
return A.E(A.aF(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cU(u,A.A(A.a([w,B.e3,new A.dc(1,B.ck,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.b9,B.h,0,u,u),u,u,B.cl,new A.n(r,u,p,q,o,u,B.m),B.iX,u,u,u,u,B.HC,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eZ1(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
csr(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.eg:B.c
u=A.m(15)
t=A.o(p,D.c_E,B.f,p,p,new A.n(p,p,p,p,A.a([new A.ac(2,B.H,B.aV.j(0.5),B.eO,28)],x.V),D.ccf,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.aw,p,p,p,p,p,p,p,p,18,p,p,B.G,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gy(A.o(p,A.x(A.a([t,B.dc,s,B.P,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bh,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.e4,A.A(A.a([A.E(q.aVv(B.jC,"Scan QR",new C.eYW(q),d),1),B.as,A.E(q.aVv(B.zY,"Upload file",new C.eYX(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aB,A.bJ(D.hcJ,p,q.gaTU(),A.bn(B.aV,p,p,p,B.c,B.hl,p,p,new A.ba(A.m(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.n(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bJ5,1.05,D.adT,p)}w=J.b9(q.e,new C.eYY(q,d),x.l)
w=A.B(w,w.$ti.k("ak.E"))
return new C.Gy(A.x(w,B.l,p,B.e,B.h,0,B.p),16,B.bT,1,D.adT,p)},
aVv(d,e,f,g){var w=null,v=B.aV.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.K(B.aV.j(0.45),B.r,1)
return A.aF(!1,B.a3,!0,u,A.aM(!1,t,!0,A.o(w,A.x(A.a([A.W(d,B.b5,w,w,w,26),B.P,A.c(e,w,w,w,w,w,w,D.fK2,B.K,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),B.f,w,w,new A.n(w,w,r,s,w,w,B.m),w,w,w,w,B.a1m,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
csq(d,e){var w,v,u=null,t=e.a,s=t?B.eg:B.c,r=A.m(14),q=A.K(t?B.ei:B.bO,B.r,1),p=A.a([new A.ac(0,B.H,B.w.j(t?0.35:0.08),B.et,10)],x.V),o=A.m(14),n=t?B.bu:B.bh
n=A.bw(B.Yv,new A.fG(1.7777777777777777,C.aT9(!0,B.fj,1/0,B.PO,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.aw,u,u,u,u,u,u,u,u,15,u,u,B.G,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.av,A.c(""+d.d.length+" budget items \xb7 "+A.Bt(d.gxO()),u,u,u,u,u,u,D.fI_,u,u,u)],w),B.D,u,B.e,B.h,0,B.p),1)
return A.o(u,A.aF(!1,B.a3,!0,u,A.aM(!1,o,!0,A.x(A.a([n,new A.D(B.bH,A.A(A.a([v,A.aH(u,u,u,u,A.W(Z.a4g,t?B.bu:B.bh,u,u,u,u),u,u,u,new C.eYU(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.D,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eYV(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.n(s,u,q,r,p,u,B.m),u,u,u,B.e8,u,u,u,1/0)}}
C.bBf.prototype={}
C.rv.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd1r(){var w,v,u,t,s=this.c
if(s===B.i.fM(s))w=B.o.v(B.i.M(s))
else{v=B.i.ac(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lD.prototype={
gxO(){return B.d.cC(this.d,0,new C.cI0())},
ak(){var w=this,v=w.d,u=A.T(v).k("N<1,ab<q,@>>")
v=A.B(new A.N(v,new C.cI_(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bgs(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lD(w.a,w.b,v,u,w.e)},
bga(d){return this.bgs(d,null)},
TZ(d){return this.bgs(null,d)}}
C.IC.prototype={
a7(){return"FamilyGender."+this.b}}
C.i5.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hGS(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aGR(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.i5(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.amI.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kZ.prototype={
gar9(){var w=this.f
return new A.Y(w,new C.bU9(),A.T(w).k("Y<1>")).gL(0)},
ak(){var w=this,v=w.f,u=A.T(v).k("N<1,ab<q,@>>")
v=A.B(new A.N(v,new C.bU8(),u),u.k("ak.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.inI(w.y),"games",w.z],x.N,x.z)},
xa(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kZ(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bgr(d,e){var w=null
return this.xa(w,w,w,d,e,w,w,w,w)},
cRM(d,e,f,g,h,i,j){return this.xa(d,e,null,f,g,h,i,j,null)},
aGW(d,e){var w=null
return this.xa(w,w,w,w,d,w,w,e,w)},
cRO(d,e,f,g,h,i,j,k){return this.xa(d,e,null,f,g,h,i,j,k)},
cQh(d){var w=null
return this.xa(w,w,w,w,w,w,w,d,w)},
cQF(d){var w=null
return this.xa(w,w,w,w,w,w,w,w,d)},
bg4(d){var w=null
return this.xa(w,w,d,w,w,w,w,w,w)},
aGH(d){var w=null
return this.xa(w,w,w,w,w,d,w,w,w)},
cRj(d,e,f){var w=null
return this.xa(w,d,w,w,e,w,w,f,w)},
cQ4(d){var w=null
return this.xa(w,w,w,d,w,w,w,w,w)},
cQR(d,e){var w=null
return this.xa(d,w,w,w,w,w,e,w,w)}}
C.cI1.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cI2.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aJz.prototype={}
C.bbJ.prototype={
aj(d){this.a=d.a
this.b=d.b},
d_(d){var w=new C.bbJ()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bbI.prototype={
gx0(){return!0},
gGM(){return this.z.b<this.b.length},
aXb(d){switch(0){case 0:return d.a.c}},
aWS(d){switch(0){case 0:return d.a.d}},
bXd(d,e){switch(0){case 0:return new A.i_(d,e)}},
bWB(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hi(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iT(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Il(b4)
switch(0){case 0:v=b5.b
u=new A.kW(0,v,0,1/0)
t=w===B.Wa
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fK(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hi(b4,u,!0)
f=b1.aXb(g)
f.toString
e=b1.aWS(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJz(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aJz(k,j,i))}d=s.length
switch(0){case 0:q=b5.cB(new A.i_(m,l))
a0=q.a
a1=q.b
b1.a=new A.iT(0,0,a0,a1)
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
for(q=B.d.fK(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aXb(g)
e=b1.aWS(g)
e.toString
a9=b1.bWB(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bXd(a6,a3+a9)
b0=g.a
g.a=new A.iT(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fW(d){var w,v,u,t,s,r=this
r.lE(d)
w=d.b
w.iy()
v=A.dt()
u=r.a
v.ed(u.a,u.b,0,1)
w.px(0,v)
for(u=r.z,u=B.d.du(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].fW(d)
w.nH(0)},
Hi(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iy(){return this.z}}
C.bzv.prototype={}
var z=a.updateTypes(["aA<~>()","Q(i5)","~()","Q(kZ)","Q(nv)","ab<q,@>(kZ)","H(kZ,kZ)","H(i5,i5)","q(i5)","kZ(ab<@,@>)","Q(lD)","nv(ab<@,@>)","ab<q,@>(nv)","Q(uV)","uV()","H(i5)","ai<i5>()","Q(zI)","a0B(Z)","q?(i5)","eS<q?>(i5)","aA<~>(lD)","Q(rv)","ab<q,@>(i5)","i5(ab<@,@>)","H(lD,lD)","~(bf)","w(oN)","Q(agp)","H(H,aas)","Uk(Z)","Q(N0)","Q(uU)","~(i5)","q(q)","WF(Z)","Uj(Z)","aeM(Z)","a_x(Z)","i5(i5)","cL(bC<q,GO>)","cL(L4)","a00(Z)","H?(i5)","i5()","Q(L4)","D(i5)","~(IC)","a_X(Z)","w(IC,q,a_)","Q(agi)","bC<q,ai<ab<q,@>>>(q,ai<nv>)","a_Z(Z)","+count,id,name(H,q,q)(kZ)","kZ(kZ)","q(kZ)","a0W(Z)","Q(lT)","lT()","a_4(Z)","a2I(Z)","a_z(Z)","a_y(Z)","~(H)","~(q,ls?)","w(rv)","af6(Z)","~(nU)","aA<~>([q?])","G(G,lD)","w(lD)","G(G,rv)","ab<q,@>(rv)","rv(ab<@,@>)","ai<ls>()","uU()","q(V)","lD(ab<@,@>)","cw(IB)","q(lD)","ab<q,@>(lD)","H(nv,nv)","kZ(ab<q,@>)","a0V(Z)"])
C.fSD.prototype={
$1(d){return d.a+" "+d.b},
$S:138}
C.fSC.prototype={
bpL(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rm(s,d,B.i7,"book",B.Hg),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.X(r!=null&&A.M9(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bpL(d)},
$S:290}
C.fSE.prototype={
$1(d){return d.b},
$S:138}
C.h1Q.prototype={
$1(d){var w=null
return A.eI(w,B.L,new A.QH(this.a,this.b,w),w,w,0,B.a1A,w,B.d7,w,w,w)},
$S:48}
C.fFE.prototype={
$1(d){return d!=null},
$S:248}
C.fFF.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:248}
C.fFK.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:178}
C.fQl.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fe(d,w,w,w,A.hi(w,B.tX,w,w,w,w,w,w,w,B.dG,w,w,10.5,w,B.eE,w,!0,w,w,w,w),w),u=f?B.eE:B.wY
return new A.of(D.bEp,A.abh(A.a([new A.h0(130,w,v),new A.zH(1,B.HM,A.fe(e,w,w,w,A.hi(w,g==null?D.eBI:g,w,w,w,w,w,w,w,B.dG,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yW,B.m2))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2278}
C.fQk.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w6(999)
f=A.xM(A.lO(h,A.fe("Cashier",h,h,h,A.hi(h,D.AS,h,h,h,h,h,h,h,B.dG,h,h,10,h,B.eE,h,!0,h,h,h,h),h),h,new A.kX(D.eBz,h,f,B.id,h),h,h,D.bET,h))
w=A.xM(A.fe("Debt receipt",h,h,h,A.hi(h,h,h,h,h,h,h,h,h,B.dG,h,h,22,h,B.eE,h,!0,h,h,h,h),h))
v=A.xM(A.fe(C.xs(new A.V(Date.now(),0,!1),!0),h,h,h,D.acl,h))
u=A.w6(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fe(s,h,h,h,A.hi(h,h,h,h,h,h,h,h,h,B.dG,h,h,14,h,B.eE,h,!0,h,h,h,h),h)
r=A.fe("Person who owes",h,h,h,D.acl,h)
q=A.w6(10)
p=x.Z
u=A.lO(h,A.zy(A.a([s,new A.h0(h,2,h),r,new A.h0(h,10,h),A.lO(h,A.zy(A.a([A.fe("Amount owed",h,h,h,D.acl,h),new A.h0(h,2,h),A.fe(A.Bt(t.c),h,h,h,A.hi(h,D.AS,h,h,h,h,h,h,h,B.dG,h,h,20,h,B.eE,h,!0,h,h,h,h),h)],p),B.t8,B.m2),h,new A.kX(B.pZ,h,q,B.id,h),h,h,D.bE5,1/0)],p),B.t8,B.m2),h,new A.kX(B.aOs,h,u,B.id,h),h,h,D.bG3,1/0)
q=new A.nW(D.eBC,0.9,B.ll)
r=A.w6(12)
s=i.c
o=s.$2("Original due",C.xs(t.r,!1))
n=s.$2("Current due",C.xs(t.f,!1))
m=i.d
l=new A.nW(m,1.1,B.ll)
k=A.w6(8)
j=i.a
k=A.a([o,n,new A.h0(h,6,h),A.lO(h,A.xM(A.fe(t.gaO2(),h,h,h,A.hi(h,m,h,h,h,h,h,h,h,B.dG,h,h,11,h,B.eE,h,!0,0.5,h,h,h),h)),h,new A.kX(h,new A.q4(l,l,l,l),k,B.id,h),h,h,D.bF1,1/0),new A.h0(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.AS))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.AS))
else{n=A.fe("Missed days ("+n+")",h,h,h,A.hi(h,B.tX,h,h,h,h,h,h,h,B.dG,h,h,10.5,h,B.eE,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,TT>")
o=A.B(new A.N(o,new C.fQj(),m),m.k("ak.E"))
B.d.u(k,A.a([new A.h0(h,4,h),n,new A.h0(h,6,h),new C.bbI(5,5,new C.bbJ(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h0(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h0(h,8,h),w,new A.h0(h,3,h),v,new A.h0(h,16,h),u,new A.h0(h,10,h),A.lO(h,A.zy(k,B.yW,B.m2),h,new A.kX(h,new A.q4(q,q,q,q),r,B.id,h),h,h,B.and,1/0)],p)
w=j.a
if(w!=null){v=new A.nW(B.Kh,1,B.ll)
B.d.u(f,A.a([new A.h0(h,16,h),A.fe("Debtor signature",h,h,h,A.hi(h,B.tX,h,h,h,h,h,h,h,B.dG,h,h,10,h,B.eE,h,!0,h,h,h,h),h),new A.h0(h,6,h),A.lO(h,new A.IT(w,B.YI,h,h),h,new A.kX(h,new A.q4(v,v,v,v),A.w6(6),B.id,h),82,h,B.P7,1/0)],p))}f.push(new A.h0(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fe(w,h,h,h,D.fAe,h))
f.push(new A.h0(h,18,h))
f.push(A.xM(A.fe("NGMY.ORG",h,h,h,A.hi(h,D.AS,h,h,h,h,h,h,h,B.dG,h,h,14,h,B.eE,h,!0,1.8,h,h,h),h)))
return f},
$S:416}
C.fQj.prototype={
$1(d){var w=null,v=new A.nW(D.Ki,0.7,B.ll),u=A.w6(999)
return A.lO(w,A.fe(C.xs(d,!1),w,w,w,A.hi(w,D.Ki,w,w,w,w,w,w,w,B.dG,w,w,9.5,w,B.eE,w,!0,w,w,w,w),w),w,new A.kX(w,new A.q4(v,v,v,v),u,B.id,w),w,w,D.bKy,w)},
$S:2279}
C.c9t.prototype={
$1(d){var w=null,v=B.bE.j(0.08),u=A.m(999),t=A.K(B.bE.j(0.28),B.r,1)
return A.o(w,A.c(C.xs(d,!1),w,w,w,w,w,w,D.fHr,w,w,w),B.f,w,w,new A.n(v,w,t,u,w,w,B.m),w,w,w,w,B.eS,w,w,w)},
$S:2280}
C.h2m.prototype={
$1(d){var w=null,v=A.aD(d,B.bY,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.c3c,w,w,w,new C.h2j(d),w,w,w,w,w,B.cj),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eI(w,B.L,new A.cO(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a3,!0,u,new A.D(B.a1n,A.x(A.a([new A.bK(B.a9,w,w,t,w),new A.dc(1,B.ck,A.cc(A.x(A.a([new A.e6(new C.b0G(r,w),s),B.T,A.A(A.a([A.E(A.eo(B.A5,w,D.h8V,new C.h2k(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.f6,w,new A.ba(A.m(14),B.a1),new A.aw(q,1,B.r,-1),w,w,w,w)),1),B.ab,A.E(A.db(B.a4S,w,D.h5j,new C.h2l(r,d),A.bn(B.b5,w,w,w,B.c,w,B.f6,w,new A.ba(A.m(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.N,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.N,0,B.p),w),B.f,B.aw,0,w,w,w,w,w,B.aj),w),w,w,0,A0.a1M,w,B.d7,w,w,w)},
$S:48}
C.h2j.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h2k.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aU.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lx(2.5),$async$$0)
case 4:w=3
return A.b(e.hk(B.hi),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eQ(B.dH.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.az(o,0,32)
w=5
return A.b(A.rp(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h2l.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fXe(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b2(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h2e.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eI(w,B.aw,A.x(A.a([new A.D(D.bFS,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nl,w,w,w),1),A.aH(w,w,w,w,B.ly,w,w,w,new C.h2c(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.dc(1,B.ck,new A.D(B.f2,A.bw(A.m(14),A.fY(t,B.z,w,w,B.cp,B.dC,!1,w,!1,w,w),B.aq),w),w),new A.D(B.OL,new A.a5(1/0,w,A.db(B.nY,w,D.aYR,new C.h2d(t,this.c,d),A.bn(B.b5,w,w,w,B.c,w,w,w,new A.ba(A.m(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.N,0,B.p),w,w,w,B.OY,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:48}
C.h2c.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h2d.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rp(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h2q.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eI(w,B.aw,new A.D(D.bG_,A.x(A.a([A.A(A.a([D.bLJ,A.aH(w,w,w,w,B.ly,w,w,w,new C.h2o(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.P,new A.e6(A.bw(A.m(14),A.o(w,A.b4(w,w,w,new C.bdY(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.db(B.nY,w,D.aYR,new C.h2p(t,s,d),A.bn(B.b5,w,w,w,B.c,w,w,w,new A.ba(A.m(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(v,B.a1),w)},
$S:48}
C.h2o.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.h2p.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aU.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lx(2.5),$async$$0)
case 4:w=3
return A.b(e.hk(B.hi),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.az(p,0,32)
r=J.eQ(B.dH.gaU(s))
w=5
return A.b(A.rp(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b2(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fKz.prototype={
$1(d){return d.a===this.a},
$S:277}
C.dSB.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dSm.prototype={
boY(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.eg:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dSp(s,q,e),p,!0,!0,!1,B.KB,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dSq(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.boY(d,e)},
$S:2281}
C.dSp.prototype={
$1(d){var w,v=null,u=this.c===B.xy,t=u?D.dxI:D.dtb
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.aw,v,v,v,v,v,v,v,v,15,v,v,B.G,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(G.anL,A.x(A.a([u,B.av,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iA(!0,v,v,B.y,D.fqJ,new C.dSo(this.a,w,t,d),t.length,v,B.e0,B.ah,!0)],x.p),B.al,v,B.e,B.N,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:28}
C.dSo.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cX.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.m(14)
if(q)u=B.cX
else u=(t.b.a.d.a?B.bu:B.bh).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.o(B.z,C.b0F(r,26),B.f,s,s,new A.n(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dSn(t.d,r),s,s,s,s,s,s,s)},
$S:190}
C.dSn.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.dSq.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dSk.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:94}
C.dSl.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cH(B.cl,e,v)
return new A.d4(e,!1,A.is(B.z,A.as(A.aF(!1,B.a3,!0,v,new A.e0(new C.dSj(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bh(t,new A.bt(0.96,1,u),u.k("bh<bQ.T>"))),v)},
$S:34}
C.dSj.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aD(d,B.bY,x.w).w,i=l.b,h=i.a.d.a,g=h?B.eg:B.c,f=A.m(14),e=A.K((h?B.bu:B.bh).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,16,k,k,B.G,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.D(B.eB,A.W(B.cB,i.a.d.a?B.bu:B.bh,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dS4(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aW1("Name")
r=l.a
q=r.d==null?k:new C.dS5(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bs:B.mg
n=A.K(B.cX.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bgk(new A.D(B.f1,A.aM(!1,p,!0,A.o(B.z,C.b0F(m==null?"\ud83d\udc64":A.fRa(r.e,m),18),B.f,k,k,new A.n(o,k,n,k,k,k,B.a6),k,34,k,B.cr,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.lh,k,B.aca,k,k)
v=A.a([v,B.af,t,B.P,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aWI("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dS6(r,a0),r.d===B.xy),1),B.ab,A.E(i.aWI("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dSb(r,a0),r.d===B.a8I),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.P,new A.bK(B.a5,k,k,A.hu(D.c1r,D.h7b,new C.dSc(r,l.e,a0),A.fr(k,k,k,k,k,k,k,k,k,k,k,B.cX,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cj)),k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uY(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aW2("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.ec,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.T)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.K((t?B.bu:B.bh).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xs(r.a,!1)
v.push(A.aF(!1,B.a3,!0,q,A.aM(!1,p,!0,A.o(k,A.A(A.a([A.E(A.x(A.a([t,B.bB,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.D,k,B.e,B.h,0,B.p),1),D.bZ1],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.n(k,k,n,o,k,k,B.m),k,k,k,k,B.bk,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dSd(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.u(v,A.a([B.P,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.T)
t=A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aW1("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.aw,k,k,k,k,k,k,k,k,12.5,k,k,B.G,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b4n(r.b.length!==0,B.mn,new C.dSe(r,i,a0),new C.dSf(r,a0),"Upload from gallery","ID photo"))
v.push(i.b4n(r.c.length!==0,D.bSh,new C.dSg(r,i,d,a0),new C.dSh(r,a0),"Camera or gallery","Selfie"))
v.push(B.P)
t=l.w
v.push(new A_.a97("Signature (optional)",t,new C.dSi(a0),new C.dS7(a0,t),new C.dS8(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bh
s=(i?B.bu:B.bh).j(0.28)
s=A.E(A.dU(B.aYK,new C.dS9(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.qS,k,new A.ba(A.m(10),B.a1),new A.aw(s,1,B.r,-1),k,k,k,k)),1)
t=A.bn(B.cX,k,k,k,B.c,k,B.qS,k,new A.ba(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ab,A.E(A.bJ(A.c(h?"Save":"Update",k,k,k,k,k,k,B.w_,k,k,k),k,new C.dSa(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.o(k,A.cc(A.x(v,B.al,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.n(g,k,e,f,k,k,B.m),k,k,k,B.ti,B.jy,k,k,360)},
$S:170}
C.dS4.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dS5.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dS6.prototype={
$0(){return this.b.$1(new C.dS3(this.a))},
$S:0}
C.dS3.prototype={
$0(){var w=this.a
w.d=B.xy
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dSb.prototype={
$0(){return this.b.$1(new C.dS2(this.a))},
$S:0}
C.dS2.prototype={
$0(){var w=this.a
w.d=B.a8I
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dSc.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dSd.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.w0(null,u.b,A.c0(2020,1,1,0,0,0,0,0),null,s,A.c0(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dS1(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dS1.prototype={
$0(){var w=this.b
return this.a.a=A.c0(w.gck(),w.gcg(),w.gcv(),0,0,0,0,0)},
$S:0}
C.dSe.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Qu(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dS0(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dS0.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dSf.prototype={
$0(){return this.b.$1(new C.dS_(this.a))},
$S:0}
C.dS_.prototype={
$0(){return this.a.b=""},
$S:0}
C.dSg.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.eg:B.c
w=3
return A.b(A.bU(q,null,new C.dRY(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Qu(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dRZ(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRY.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.at8,w,w,w,w,new C.dRS(d),!1,w,w,w,w,w,w,w,D.fYc,w,w,w),A.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.at6,w,w,w,w,new C.dRT(d),!1,w,w,w,w,w,w,w,D.h4h,w,w,w)],x.p),B.l,w,B.e,B.N,0,B.p),!0,!1,B.ag,!0,!0)},
$S:28}
C.dRS.prototype={
$0(){A.a6(this.a,!1).N("camera")
return null},
$S:0}
C.dRT.prototype={
$0(){A.a6(this.a,!1).N("gallery")
return null},
$S:0}
C.dRZ.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dSh.prototype={
$0(){return this.b.$1(new C.dRX(this.a))},
$S:0}
C.dRX.prototype={
$0(){return this.a.c=""},
$S:0}
C.dSi.prototype={
$0(){return this.a.$1(new C.dRW())},
$S:0}
C.dRW.prototype={
$0(){},
$S:0}
C.dS7.prototype={
$0(){return this.a.$1(new C.dRV(this.b))},
$S:0}
C.dRV.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dS8.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ajg(u.a,null,null,new C.dRU(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dRU.prototype={
$4(d,e,f,g){this.a.$1(new C.dRR(this.b,d))},
$S:378}
C.dRR.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.u(w,this.b)},
$S:0}
C.dS9.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dSa.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.fvT)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.fsI)
return}A.a6(w.c,!1).N(!0)},
$S:0}
C.dSE.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:94}
C.dSF.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.eg:B.c,n=A.m(14),m=A.K((p?B.bu:B.bh).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.aw,r,r,r,r,r,r,r,r,16,r,r,B.G,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bt(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bh,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zU(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zU(r).length>0?B.bE:B.cX,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bh
t=(q?B.bu:B.bh).j(0.28)
s=x.p
return new A.d4(e,!1,A.as(A.aF(!1,B.a3,!0,r,A.o(r,A.x(A.a([p,B.P,v,u,B.aB,A.A(A.a([A.E(A.dU(B.oe,new C.dSC(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jQ,r,new A.ba(A.m(10),B.a1),new A.aw(t,1,B.r,-1),r,r,r,r)),1),B.ab,A.E(A.bJ(D.h4J,r,new C.dSD(d),A.bn(B.cX,r,r,r,B.c,r,B.jQ,r,new A.ba(A.m(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.al,r,B.e,B.N,0,B.p),B.f,r,r,new A.n(o,r,m,n,r,r,B.m),r,r,r,B.D_,B.Hu,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dSC.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dSD.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dSy.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dSz(r),p=r.a.d.a,o=p?B.eg:B.c,n=A.m(14),m=A.K((p?B.bu:B.bh).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.aw,s,s,s,s,s,s,s,s,14,s,s,B.G,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.Bt(l.c),s,s,s,s,s,s,D.fJ3,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.iR((r.a.d.a?B.bu:B.bh).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a3v,"View receipt",new C.dSr(r,d,l))
u=l.x!=null
t=u?B.pL:B.r0
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bFX,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dSs(r,d,l)),q.$3$icon$label$onTap(B.De,"Edit",new C.dSt(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mn,"View / download ID",new C.dSu(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bSg,"View / download selfie",new C.dSv(r,d,l)))
if(l.gaIC())p.push(q.$3$icon$label$onTap(B.a4I,"View / download signature",new C.dSw(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bE,B.ek,"Delete",new C.dSx(r,d,l)))
p.push(B.av)
return A.bm(!0,new A.D(B.tg,A.o(s,A.x(p,B.l,s,B.e,B.N,0,B.p),B.f,s,s,new A.n(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:28}
C.dSz.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.aw
else w=d
return A.aM(!1,v,!0,new A.D(B.eR,A.A(A.a([A.W(e,w,v,v,v,20),B.ba,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2282}
C.dSr.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h2i(w,this.c)},
$S:0}
C.dSs.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Th(this.c)},
$S:0}
C.dSt.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.DU(this.c)},
$S:0}
C.dSu.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHu(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dSv.prototype={
$0(){var w,v,u
A.a6(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bHu(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dSw.prototype={
$0(){A.a6(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h2n(w,this.c)},
$S:0}
C.dSx.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.Qt(0,this.c)},
$S:0}
C.dSG.prototype={
$1(d){return d.x==null},
$S:277}
C.dSH.prototype={
$1(d){return d.x!=null},
$S:277}
C.dSI.prototype={
$2(d,e){return d+e.c},
$S:2283}
C.dSJ.prototype={
$0(){return this.a.bEZ()},
$S:0}
C.dSA.prototype={
$0(){return this.a.agX(this.b)},
$S:0}
C.fLk.prototype={
$1(d){return d.a===this.a},
$S:z+32}
C.fLl.prototype={
$0(){return B.d.gH(D.a60)},
$S:z+75}
C.dih.prototype={
$0(){var w=this.a
return w.l(new C.dif(w,this.b))},
$S:0}
C.dif.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dig.prototype={
$0(){},
$S:0}
C.dii.prototype={
$0(){var w=this.a.gc3w()
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.fNS.prototype={
$1(d){return C.hqQ(A.a1(d,x.N,x.z))},
$S:z+11}
C.fNT.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fNU.prototype={
$2(d,e){var w=A.cb(d.a,null),v=A.cb(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+81}
C.h0U.prototype={
$1(d){return d.ak()},
$S:z+12}
C.h9z.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fKq.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bSR.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eC(e,v)?v:null},
$S:2284}
C.h1u.prototype={
$1(d){var w=this
return new C.a_Z(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+52}
C.diX.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.diW(w,d))},
$S:z+78}
C.diW.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diL.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cK(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.diI.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dij.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dik.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.diM.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dis.prototype={
$1(d){var w=null,v=A.O(d).ax.a===B.I,u=v?B.eg:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bO(!1,B.dp,w,w,!0,w,w,w,new C.diq(d),w,w),A.bJ(B.xX,w,new C.dir(d),A.bn(B.nw,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.diq.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dir.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dit.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.diJ.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.diK.prototype={
$0(){return B.d.gH(D.Ah)},
$S:z+14}
C.dio.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzd(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Uj(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+36}
C.dip.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diu.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_x(v,u,J.ad(w.d),null)},
$S:z+38}
C.div.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diV.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.ay(s,new C.a_d(r.y,r.gzd(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.diT(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bdi(v,e,w,u,t,r.gbVG(),C.hGR(r.y.Q),r.gzd(0),s)
w=t}return A.c7(q,new C.diU(r,e),new A.D(B.a1F,w,s))},
$S:2285}
C.diU.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd7(t).ay){t=this.b
u=x.cy.a(B.d.gd7(u.f.f)).gvw(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dt()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fE(v*3.141592653589793*0.5)
return A.fA(B.a5,A.d0(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.diT.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aJO(B.qK,B.iJ)},
$S:0}
C.diF.prototype={
$0(){var w=this.a
return w.l(new C.diE(w))},
$S:0}
C.diE.prototype={
$0(){return this.a.w=!0},
$S:0}
C.diG.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).N(null)
return null},
$S:0}
C.dil.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=B.kC.j(0.5),r=x.p,q=A.a([D.fWK,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.a_j(d,B.ea,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_j(d,B.ar4,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cK(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cy,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kW.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cy,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kW.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_j(d,I.as0,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_j(d,B.oT,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_j(d,B.oT,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eI(u,B.Cp,A.bm(!0,new A.D(B.zf,A.x(q,B.D,u,B.e,B.N,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.P0,u,B.d7,u,new A.ba(t,new A.aw(s,1.4,B.r,-1)),u)},
$S:48}
C.diH.prototype={
$0(){A.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.diy.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cK(w.d)
return new C.a00(v,J.cK(w.d),w.r+1,null)},
$S:z+42}
C.diz.prototype={
$1(d){var w=null
return A.oS(!1,A.ek(w,w,w,B.Cp,new A.kj(this.a,new C.dix(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:303}
C.dix.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.abP,B.pc,A.E(A.c(e,w,w,w,w,w,w,B.jI,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:745}
C.diA.prototype={
$0(){return this.a.a=!1},
$S:53}
C.diB.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:207}
C.diC.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diD.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BC(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.SW(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.diw(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.diw.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.diO.prototype={
$1(d){var w=null
return A.oS(!1,A.ek(w,w,w,B.Cp,new A.kj(this.a,new C.diN(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:303}
C.diN.prototype={
$3(d,e,f){var w=null
return A.A(A.a([B.abP,B.pc,A.E(A.c(e,w,w,w,w,w,w,B.jI,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:745}
C.diP.prototype={
$0(){return this.a.a=!1},
$S:53}
C.diQ.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:207}
C.diR.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:207}
C.diS.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BC(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lh(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dim.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.blV(B.qK,O.Oz)},
$S:0}
C.din.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aJO(B.qK,O.Oz)},
$S:0}
C.dkJ.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dkK.prototype={
$1(d){var w=this.a
return w.l(new C.dkI(w))},
$S:9}
C.dkI.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dkL.prototype={
$1(d){var w=this.a
return w.l(new C.dkH(w))},
$S:9}
C.dkH.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dkM.prototype={
$1(d){var w=this.a
return w.l(new C.dkG(w))},
$S:9}
C.dkG.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dkN.prototype={
$0(){var w=this.a
return w.l(new C.dkF(w,this.b))},
$S:0}
C.dkF.prototype={
$0(){var w=this.b
this.a.d.sb2(0,w)
return w},
$S:0}
C.dkO.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga3e()
A.a6(this.b,!1).N(new A.bse(w,v))},
$S:0}
C.djb.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dja.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_X(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+48}
C.djf.prototype={
$1(d){return d.a===this.a},
$S:z+50}
C.dje.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bbT(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hx,v,v,v)
return A.ek(A.a([A.bO(!1,B.dp,v,v,!0,v,v,v,new C.djc(d),v,v),A.bJ(B.xX,v,new C.djd(d),A.bn(B.nw,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,B.Cp,w,v,v,v,v,D.fVw,v)},
$S:18}
C.djc.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.djd.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.djg.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.djh.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cc(A.c_(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bGW,t,t,B.ah)},
$S:330}
C.dj9.prototype={
$0(){return this.a.Rh(0,this.b)},
$S:0}
C.dj8.prototype={
$0(){return this.a.QI(0,this.b)},
$S:0}
C.cR4.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cR5.prototype={
$0(){return B.d.gH(D.Ah)},
$S:z+14}
C.cR6.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bS(0,new A.D(d,new A.bP(new A.n(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bl,w,w),w),0,0,0)},
$S:2287}
C.da3.prototype={
$1(d){return this.a.l(new C.da2(this.b,this.c))},
$S:9}
C.da2.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.das.prototype={
$1(d){return this.a.l(new C.daf())},
$S:2}
C.daf.prototype={
$0(){},
$S:0}
C.dat.prototype={
$1(d){return this.a.l(new C.dae())},
$S:2}
C.dae.prototype={
$0(){},
$S:0}
C.dau.prototype={
$0(){var w=this.a
return w.l(new C.dad(w,this.b))},
$S:0}
C.dad.prototype={
$0(){var w=this.a
return w.d=w.goC().Gr(this.b.a)},
$S:0}
C.dav.prototype={
$0(){var w=this.a
return w.l(new C.dac(w,this.b))},
$S:0}
C.dac.prototype={
$0(){var w=this.a
return w.d=w.goC().cPB(this.b)},
$S:0}
C.daw.prototype={
$1(d){return this.a.l(new C.dab())},
$S:2}
C.dab.prototype={
$0(){},
$S:0}
C.dax.prototype={
$0(){var w=this.a
return w.l(new C.daa(w,this.b))},
$S:0}
C.daa.prototype={
$0(){var w=this.a
return w.d=w.goC().cPG(this.b.a)},
$S:0}
C.day.prototype={
$1(d){var w=this.a
return w.l(new C.dan(w,d))},
$S:6}
C.dan.prototype={
$0(){var w=this.a
return w.d=w.goC().cQA(this.b)},
$S:0}
C.daz.prototype={
$1(d){var w=this.a
return w.d=w.goC().aGK(d)},
$S:2}
C.daA.prototype={
$1(d){var w=this.a
return w.d=w.goC().cPJ(d)},
$S:2}
C.daC.prototype={
$1(d){var w=this.a
return w.d=w.goC().cQy(d)},
$S:2}
C.daD.prototype={
$1(d){var w=this.a
return w.l(new C.dam(w,d))},
$S:9}
C.dam.prototype={
$0(){var w=this.a
return w.d=w.goC().cQp(this.b)},
$S:0}
C.daE.prototype={
$0(){var w=this.a,v=w.goC(),u=B.a.i(w.gzd(0).a.a),t=B.a.i(w.gaDV().a.a)
u=v.bgB(B.a.i(w.gats().a.a),t,u)
A.a6(this.b,!1).N(u)
return null},
$S:0}
C.bT0.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bSV.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bSU(w,d))},
$S:12}
C.bSU.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bT3.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bSW.prototype={
$0(){var w=this.a
w.Q=D.b2Z
w.aex(1)
w.r.x=null},
$S:0}
C.bSX.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b2Z)return
w=new A.e_()
w.cU(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d82[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bT_.prototype={
$0(){var w=this.a
w.Q=D.aeq
w.aex(2)
w.r.z=null},
$S:0}
C.bSZ.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hNz
t.aex(3)
w=t.r
w.d=s
w.x="I say: "+t.gCM()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.deN[v.aw(4)]:D.dAi[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bT1.prototype={
$0(){var w=this.a
w.Q=D.b3_
w.CW=this.b
w.cy=1
w.aex(4)
w.r.f=w.f.a+5},
$S:0}
C.bT2.prototype={
$0(){},
$S:0}
C.bSY.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bSS.prototype={
$0(){return this.a.Lq(this.b)},
$S:0}
C.bST.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bUx.prototype={
$0(){var w=this
return w.a.RA(w.b,0,w.c,w.d)},
$S:0}
C.bUy.prototype={
$0(){var w=this
return w.a.RA(w.b,3,w.c,w.d)},
$S:0}
C.bUz.prototype={
$0(){var w=this
return w.a.RA(w.b,1,w.c,w.d)},
$S:0}
C.bUA.prototype={
$0(){var w=this
return w.a.bV6(w.b,w.c,w.d)},
$S:0}
C.bUB.prototype={
$0(){var w=this
return w.a.RA(w.b,4,w.c,w.d)},
$S:0}
C.bUC.prototype={
$0(){var w=this
return w.a.RA(w.b,2,w.c,w.d)},
$S:0}
C.bUD.prototype={
$0(){var w=this
return w.a.RA(w.b,5,w.c,w.d)},
$S:0}
C.bUE.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:658}
C.bUw.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a78[d],p=q.a.a5(0,new A.r(0,-q.b*1.2*124)),o=A.fs(r,B.cw,r,3,r,A.cR(r,r,r,r,r,r,r,r,r,D.fzV,e),B.a7,B.bW,r,B.dD,B.bX)
o.nD(130)
w=o.b.a.c
w=p.aJ(0,new A.r(0,w.gb9(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bu(A.bY(w,v.gb9(v)+12,u+18),B.ib)
u=this.a
v=t.eE(B.dO)
w=$.R()
s=A.L()
s.r=B.dE.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qA.gp(0)
u.aq(t,s)
w=new A.aG(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bx())
v=A.L()
v.r=D.qA.gp(0)
u.af(w,v)
o.a2(u,new A.r(t.a+9,t.b+6))},
$S:842}
C.bTh.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bTi.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.anf(d),w.anf(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fyn.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h9p.prototype={
$2(d,e){if(e!=null)J.c4(this.a.c_(0,d,new C.h9q()),e)},
$S:z+64}
C.h9q.prototype={
$0(){return A.a([],x.J)},
$S:z+74}
C.h9r.prototype={
$1(d){return d!==this.a},
$S:3}
C.h9s.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h9t.prototype={
$1(d){return d!==this.a&&!B.d.aS(this.b,new C.h9o(this.c,d))},
$S:3}
C.h9o.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h9u.prototype={
$1(d){return d!==this.a},
$S:3}
C.h9v.prototype={
$1(d){return d!==this.a},
$S:3}
C.h9w.prototype={
$1(d){return d!==this.a&&!B.d.aS(this.b,new C.h9n(this.c,d))},
$S:3}
C.h9n.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fLY.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.h_O.prototype={
$1(d){return d.Q},
$S:z+15}
C.h_P.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fHM.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fOO.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bO2.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h9Q.prototype={
$2(d,e){return B.o.aQ(C.hD0(d),C.hD0(e))},
$S:228}
C.h9R.prototype={
$1(d){return d!==this.a},
$S:3}
C.h0q.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bMb.prototype={
$0(){var w=this.a
w.ch=!0
w.ba5()},
$S:0}
C.bM6.prototype={
$0(){},
$S:0}
C.bMc.prototype={
$1(d){return d.f<=0},
$S:z+28}
C.bM4.prototype={
$0(){},
$S:0}
C.bM5.prototype={
$0(){},
$S:0}
C.bMa.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.be_(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.o(u,A.c(t.dy,u,u,u,u,u,u,D.fHD,B.K,u,u),B.f,u,u,new A.n(w,u,u,v,u,u,B.m),u,u,u,u,B.bT,u,u,u),u,u,14,14,6,u))}return A.ay(B.c1,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bM7(t,e),u,u,u,u,u,u,u,new C.bM8(t,e),u,u,u,u,u,u,u,u,u,new C.bM9(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bM7.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bM9.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bM8.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bM3.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.cs1.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cs2.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cs0(w))},
$S:0}
C.cs0.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cs3.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cs4.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cs5.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cs6.prototype={
$0(){},
$S:0}
C.cs7.prototype={
$0(){var w=this.a
w.z=w.XO(++w.e)
w.Q=A.c1(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.crY.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.crZ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cs_(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.B(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.c7(new A.he(a0),new C.crT(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.R_(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cL(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new A.N8(new C.crU(g,u),new C.crV(g,u),new C.crW(g,u),j,j,new A.bl("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fi:B.be,j,j,j,j,j,j,j,j,13,j,j,B.G,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.as(C.uy(a0,g.gqt(g),B.cV,B.jA,D.fF),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.XO(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.XO(0)
o=s}else o=s
n=s[u]
n=A.e1(B.z,new C.R_(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.XO(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rc(new A.bt(0,p,t),new C.crX(),new A.EA(u,j,new C.R_(l.b,k,62,!1,j),new A.kL(0.25,new C.R_(m.b,k,62,!1,j),j),new A.kd(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,A.hGJ(),!0,!0,j,j,j,j,j,j,!1,B.j_,j,new A.bl("chip-"+r,a0),w),B.b0,B.iY,j,new A.bl("t"+r+"-"+q,a0),v))}++u}g=A.c_(B.fM,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:66}
C.cs_.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:542}
C.crT.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b4(p,p,p,new C.bdr(q.b,o,v,w,p),B.az)},
$S:59}
C.crV.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:2289}
C.crW.prototype={
$1(d){return this.a.cTr(this.b,d.a)},
$S:2290}
C.crU.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.m(18),q=e.length!==0?B.cV.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.cV:B.k6,B.r,2)
u=s?A.lC(new C.crS(),A.as(new C.R_(u.gaGc()[u.gj1()[t]].b,u.gaGc()[u.gj1()[t]].a,62,!1,v),v,v,v),B.nq,B.iY,v,v,new A.bt(0.3,1,x.X),x.i):D.bei
return A.cU(v,u,v,v,B.b0,new A.n(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2291}
C.crS.prototype={
$3(d,e,f){return A.e1(B.z,f,e,null,null)},
$S:116}
C.crX.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:116}
C.cS8.prototype={
$1(d){return d>=1},
$S:128}
C.cH_.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.l(new C.cGZ(w))},
$S:12}
C.cGZ.prototype={
$0(){return this.a.f++},
$S:0}
C.cH7.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cH8.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cH9.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cH6(w))},
$S:0}
C.cH6.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cHa.prototype={
$0(){return this.a.f++},
$S:0}
C.cHb.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cHc.prototype={
$0(){},
$S:0}
C.cHd.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cH1.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.cH2.prototype={
$3(d,e,f){var w=null
return A.lC(new C.cH0(this.a,e),w,B.b0,B.hC,w,w,new A.bt(w,this.b,x.X),x.i)},
$S:2292}
C.cH0.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cV.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.o(v,A.i4(new A.BM(new A.uS(B.w.j(e),B.Mw,v,B.Za),A.bYM(A.b4(v,v,v,new C.aCj(u.gkS()[u.e].c,u.as,v),B.az),new A.EF(w,w,B.X2)),v),B.aq),B.f,v,v,new A.n(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2293}
C.cH3.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,14*(1-e))),e)},
$S:108}
C.cH4.prototype={
$3(d,e,f){return A.dO(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:116}
C.cH5.prototype={
$0(){return this.a.brf(this.b)},
$S:0}
C.faF.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.anM$)
v.anM$=w
v.qh$.sp(0,w)
v.arG(u)},
$S:7}
C.fkV.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:12}
C.bU2.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bU1())},
$S:0}
C.bU1.prototype={
$0(){},
$S:0}
C.bU_.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bTY.prototype={
$0(){},
$S:0}
C.bTZ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gN7()
w=s+1>=r.length?3:5
break
case 3:q=C.bHI(p.gaqw(0),0,r.length)
p.l(new C.bTV(p,q))
o=p
w=6
return A.b(C.BY(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BZ(s.d,s.c.a,"school",p.gaqw(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bTW())
w=4
break
case 5:p.l(new C.bTX(p))
p.gqB().Wl(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bTV.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bTW.prototype={
$0(){},
$S:0}
C.bTX.prototype={
$0(){return this.a.x++},
$S:0}
C.bU0.prototype={
$0(){return this.a.Lq(this.b)},
$S:0}
C.bTU.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.faG.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hGX(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.EQ
C.SU(q,D.ev_,0,0.2,-0.6,-0.2,null,w,D.etJ,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.R()
p=A.L()
p.r=D.GT.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.faH.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.SU(this.a,D.eu5,0,u,0.7,-0.5,null,null,D.Ka,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.faI.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.SU(this.a,D.evN,0,0,0.8,-0.5,null,null,D.Ka,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.faJ.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.SU(w.b,D.euU,0,v,-0.8,-0.5,null,null,D.Ka,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.faK.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.euY:D.EQ
C.SU(p,D.euo,0,t,0,-0.6,null,v,D.Ka,3,0,s,1.3,u,0,w,0)
q=q.cdL(new A.r(222,455),9)
$.R()
w=A.L()
w.r=B.cV.gp(0)
p.af(q,w)},
$S:0}
C.faL.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:658}
C.bTG.prototype={
$2(d,e){return d+e},
$S:68}
C.bTR.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bTS.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bTT.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.qh$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bTN.prototype={
$1(d){return d},
$S:102}
C.bTM.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qh$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bTO.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bTP.prototype={
$0(){},
$S:0}
C.bTQ.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FV(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.ce(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bTI.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.bTJ.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:68}
C.bTK.prototype={
$2(d,e){var w=null,v=C.hhE(new A.au(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.ay(B.c1,new A.e6(A.b4(w,w,w,new C.bkE(u,u.qh$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bTH(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bTH.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.i.be((t.a-s.a)/r/450*v),0,v-1)
w.d3i(w.gj1()[u])}},
$S:22}
C.bTL.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:82}
C.dtT.prototype={
$2(d,e){return 0},
$S:68}
C.bTs.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bTr())},
$S:0}
C.bTr.prototype={
$0(){},
$S:0}
C.bTq.prototype={
$0(){},
$S:0}
C.bTk.prototype={
$0(){},
$S:0}
C.bTl.prototype={
$0(){},
$S:0}
C.bTp.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.BC},
$S:0}
C.bTo.prototype={
$1(d){var w=null,v=this.a.gqB(),u=A.c(d,w,w,w,w,w,w,D.aXj,w,w,w),t=v.gbnG(0)
return A.ay(B.c1,A.x(A.a([u,B.bB,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aXx,w,w,w)],x.p),B.D,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbtC(v),w,w,w,w,w,w,!1,B.a4)},
$S:147}
C.bTm.prototype={
$0(){return this.a.Lq(this.b)},
$S:0}
C.bTn.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bTj.prototype={
$0(){return A.a6(this.a,!1).hY()},
$S:0}
C.e4c.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e4d.prototype={
$1(d){return this.a},
$S:39}
C.e4e.prototype={
$0(){var w=this.a
return w.d=w.gTj().bg4(this.b)},
$S:0}
C.e4a.prototype={
$1(d){return new C.Uk(this.a,null)},
$S:z+30}
C.e4b.prototype={
$1(d){return d.a===this.a.a},
$S:z+31}
C.e49.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hx,w,w,w)
return A.ek(A.a([A.bO(!1,B.aYU,w,w,!0,w,w,w,new C.e47(d),w,w),A.bO(!1,D.h2a,w,w,!0,w,w,w,new C.e48(d),w,w)],x.p),w,w,D.fF,v,w,w,w,w,D.fPA,w)},
$S:18}
C.e47.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e48.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e46.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.U(A.b2(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Y,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e4f.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e4g.prototype={
$0(){var w=this.a,v=this.b,u=C.bFp(v,10,w.r,!1)
return w.uG(C.hqR(w.a.d,"kahoot",u,w.gb7C(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e4h.prototype={
$0(){var w=this.a
return w.uG(new C.amx(this.b,w.a.d,w.r,null))},
$S:0}
C.e4i.prototype={
$0(){var w=this.a
return w.uG(new C.akH(this.b,w.a.d,w.r,null))},
$S:0}
C.e4l.prototype={
$0(){var w=this.a
return w.uG(new C.avA(this.b,w.a.d,w.r,null))},
$S:0}
C.e4m.prototype={
$0(){var w=this.a
return w.uG(new C.azx(this.b,w.a.d,w.r,null))},
$S:0}
C.e4n.prototype={
$0(){var w=this.a
return w.uG(new C.amA(this.b,w.a.d,w.r,null))},
$S:0}
C.e4o.prototype={
$0(){var w=this.a
return w.uG(new C.amE(this.b,w.a.d,w.r,null))},
$S:0}
C.e4p.prototype={
$0(){var w=this.a
return w.uG(new C.amG(this.b,w.a.d,w.r,null))},
$S:0}
C.e4q.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d3D()
return v.uG(C.hqR(v.a.d,"creator_"+u.a,w,v.gb7C(),"A game by the family",t,this.c.a))},
$S:0}
C.e4r.prototype={
$0(){return this.a.Pd(this.b)},
$S:0}
C.e4s.prototype={
$0(){return this.a.Yf(0,this.b)},
$S:0}
C.e4j.prototype={
$0(){return this.a.Pd(null)},
$S:0}
C.e4k.prototype={
$0(){return this.a.K(x.q).f.U(D.fsO)},
$S:0}
C.bTE.prototype={
$0(){var w=this.a
w.d=D.b2n
w.z=3},
$S:0}
C.bTF.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aQG()}else w.l(new C.bTD(w))},
$S:12}
C.bTD.prototype={
$0(){return this.a.z--},
$S:0}
C.bTu.prototype={
$0(){var w=this.a
w.d=D.ae6
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bTv.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bTt(w))
if(w.as<=0){d.a1(0)
w.b7y(-1)}},
$S:12}
C.bTt.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bTA.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.XJ},
$S:0}
C.bTB.prototype={
$0(){return this.a.e++},
$S:0}
C.bTx.prototype={
$0(){var w=this.a
w.d=D.b2o
w.ay=this.b},
$S:0}
C.bTy.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bTC.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:2294}
C.bTz.prototype={
$0(){return this.a.Lq(this.b)},
$S:0}
C.bTw.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hY()},
$S:0}
C.bT4.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ax()
s=A.a([new A.at(new A.bc(s,B.b8,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.at(new A.bc(u,B.b8,B.aP),r))}return s},
$S:2295}
C.bT5.prototype={
$0(){return this.a.gDm().c.push(C.hbt(null,0,20,""))},
$S:0}
C.bTf.prototype={
$1(d){var w=null
return A.bA(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Fm,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:266}
C.bTe.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDm().c,m=this.b,l=n[m],k=o.cgQ(l),j=B.c.j(0.06),i=A.m(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.Lt,p,p,p),B.b_],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.asU,p,p,p,new C.bT9(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bTa(l),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),B.P],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aEV[v]
t=D.aEB[v]
s=v+1
f.push(new A.D(B.eI,new A.c6(B.aM,B.e,B.h,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ab,new A.bz(1,B.bd,A.aN(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bTb(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.dk,!0,B.a7,p,B.ao,p,p,p,p),p),new T.PB(v,l.c,new C.bTc(o,l),p,!1,D.lN,p,p,p,p,p,!1,!1,p,E.b2N,p,p,p,p,p,w)],g),p),p))}f.push(D.fVb)
f.push(B.am)
n=A.a([D.fOE,B.ab],g)
for(r=0;r<3;++r){q=D.chH[r]
n.push(new A.D(B.f1,A.jw(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bTd(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.o(p,A.x(f,B.D,p,B.e,B.h,0,B.p),B.f,p,p,new A.n(j,p,h,i,p,p,B.m),p,p,p,B.kG,B.bk,p,p,p)},
$S:158}
C.bT9.prototype={
$0(){var w=this.a
return w.l(new C.bT8(w,this.b))},
$S:0}
C.bT8.prototype={
$0(){return B.d.cH(this.a.gDm().c,this.b)},
$S:0}
C.bTa.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bTb.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bTc.prototype={
$1(d){return this.a.l(new C.bT7(this.b,d))},
$S:167}
C.bT7.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bTd.prototype={
$1(d){return this.a.l(new C.bT6(this.b,this.c))},
$S:9}
C.bT6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5S.prototype={
$0(){var w=this.a
w.wE()
w.a.bu()
w.a.qu()},
$S:0}
C.e5R.prototype={
$0(){var w=this.a
w.wE()
w.a.bu()
w.a.qu()},
$S:0}
C.e5U.prototype={
$0(){var w=this,v=w.b
if(J.cK(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e5V.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5W.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e5Q.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e5T.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e5Y.prototype={
$0(){this.a.Pz()
return null},
$S:0}
C.e5X.prototype={
$0(){return this.a.Fe(this.b)},
$S:0}
C.e5i.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bO(!1,B.dp,w,w,!0,w,w,w,new C.e5g(d),w,w),r=A.bn(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bJ(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e5h(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e5g.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e5h.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.e5j.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cQ4(this.b)},
$S:0}
C.e5d.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aWi(w.b,w.c,w.d)},
$S:7}
C.e4F.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e4G.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4X.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hx(t.a.c),$async$$0)
case 2:s=r.ny(q.dI(e,new C.e4V(t)))
if(s!=null&&t.c!=null)t.l(new C.e4W(t,s))
t.a.bu()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e4V.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e4W.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e4Y.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e4Z.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e5c.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cQR(C.hH6(w),w)},
$S:0}
C.e4U.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.WF(u,w,C.aRP(u,w),new C.e4T(v),null)},
$S:z+35}
C.e4T.prototype={
$1(d){return this.bp4(d)},
bp4(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e4S(s,d))
w=3
return A.b(s.uC(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:853}
C.e4S.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bg4(this.b)},
$S:0}
C.e59.prototype={
$1(d){return d.as},
$S:z+1}
C.e5a.prototype={
$1(d){var w=this
return new A.e0(new C.e58(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e58.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.eg:B.c,h=A.m(26),g=A.K(B.bQ.j(0.5),B.r,1.5),f=A.o(k,D.bXf,B.f,k,k,new A.n(B.bQ.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.x(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.D,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.ba,a0,A.aH(k,k,k,k,A.W(B.cB,j?B.bu:B.bh,k,k,k,k),k,k,k,new C.e52(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.aw(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.ay(k,A.cU(k,A.c(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.n(q,k,new A.bF(n,n,n,n),new A.be(p,p,p,p),k,k,B.m),B.hf,k,k,k,k,B.CR,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e53(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.c_(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c8u,new A.D(D.bHl,f,k),new A.D(D.bHc,e,k),new A.D(B.ti,a0,k),new A.D(I.aod,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bh,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.W(X.aqQ,j?B.bu:B.bh,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bHe,A.A(A.a([a0,B.as,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.aw,k,k,k,k,k,k,k,k,k,k,k,B.G,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ayf(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e54(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aB)
j=A.m(20)
e=A.a([new A.ac(0,B.H,B.aD.j(0.35),B.ia,12)],x.V)
f.push(A.ay(k,A.o(k,A.A(A.a([D.fP_,B.ba,D.bLG,D.bXV],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.n(k,k,k,j,e,D.cci,B.m),k,k,k,B.i4,B.bH,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e55(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.wR,A.A(A.a([A.E(A.dU(B.dp,new C.e56(a1),k),1),B.as,A.E(A.bJ(F.aZk,k,new C.e57(t,a1),A.bn(B.bQ,k,k,k,k,k,B.cn,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bm(!0,A.o(k,A.cc(A.x(f,B.D,k,B.e,B.N,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.aq,k,k,new A.n(i,k,g,h,k,k,B.m),k,k,k,B.z7,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:93}
C.e52.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e53.prototype={
$0(){return this.b.$1(new C.e51(this.a,this.c))},
$S:0}
C.e51.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e54.prototype={
$1(d){var w=this.a
w.l(new C.e5_(w,d))
this.b.$1(new C.e50())},
$S:9}
C.e5_.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e50.prototype={
$0(){},
$S:0}
C.e55.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aIt(!0,w))
return null},
$S:0}
C.e56.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e57.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(new A.aIt(!1,w))
return null},
$S:0}
C.e5b.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cQF(this.b.b)
w.r.a8(0)},
$S:0}
C.e4t.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.ajr(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hA8(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e4u.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aGH(w)},
$S:0}
C.e5l.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.aeM(this.b,w,this.c,null)},
$S:z+37}
C.e5f.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.eg:B.c,t=A.m(20),s=A.W(B.l4,B.aV,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.N,0,B.p)
return A.ek(A.a([A.bJ(D.h5Y,w,new C.e5e(d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w))],o),B.b9,w,u,v,w,s,w,new A.ba(t,B.a1),r,w)},
$S:18}
C.e5e.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e4v.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e4w.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e4x.prototype={
$1(d){return d.a},
$S:z+8}
C.e4y.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.i5(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aGH(w)},
$S:0}
C.e4C.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.ajr(q)
w=A.T(q).k("Y<1>")
q=A.B(new A.Y(q,new C.e4A(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hA8(v.e,null,r,v.f,v.r,new C.e4B(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e4B.prototype={
$0(){return this.a.abI(this.b)},
$S:0}
C.e4A.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e4D.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.T(w).k("N<1,i5>")
w=A.B(new A.N(w,new C.e4z(this.b),v),v.k("ak.E"))
u.d=t.aGH(w)},
$S:0}
C.e4z.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+39}
C.e5k.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e4P.prototype={
$1(d){return d.length!==0},
$S:3}
C.e4Q.prototype={
$1(d){var w=this
return new A.e0(new C.e4O(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e4O.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.eg:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.aw,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.N(o,new C.e4K(u,e,o),A.T(o).k("N<1,w>")))
p.push(B.P)
u=w.d
p.push(A.aN(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.m(12),B.du),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mG,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.N,0,B.p)
t=w.a
return A.ek(A.a([A.bO(!1,B.dp,v,v,!0,v,v,v,new C.e4L(d),v,v),A.bJ(B.LD,v,new C.e4M(t,u,o,e),A.bn(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fTx,v,new C.e4N(t,u,o,d),A.bn(B.aV,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:225}
C.e4K.prototype={
$1(d){var w=null
return A.dJ(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.aw,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c5i,w,w,w,new C.e4J(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2296}
C.e4J.prototype={
$0(){return this.a.$1(new C.e4H(this.b,this.c))},
$S:0}
C.e4H.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e4L.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.e4M.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e4I(w.c,u))
v.bP(0,B.ci)}},
$S:0}
C.e4I.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e4N.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).N(!0)},
$S:0}
C.e4R.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cRj(this.b,D.v1,C.Hv(v,w.a.c))},
$S:0}
C.e5s.prototype={
$1(d){return d.as},
$S:z+1}
C.e5t.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j3(this.b,w)},
$S:0}
C.e5u.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.ixj(v)
return w.X1(v==null?null:v.a)},
$S:0}
C.e5v.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.i8T(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cyn(new A.au(u,t),v.gbmM(),new A.au(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d5Q:D.d3X
q=A.K(s?B.dq:D.bmc,B.r,1)
p=A.m(22)
o=A.bS(0,A.b4(m,m,m,new C.bgK(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.o(m,A.bw(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bS(0,A.v4(new A.P(n,n,n,n),new A.a5(u,t,new C.bhG(l.d,v,l.f,w,new C.e5o(l),l.gci1(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bzC(s,new C.e5p(l,e),new C.e5q(l,e),new C.e5r(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.n(m,m,q,k,m,new A.a8(B.aX,B.b4,B.x,r,m,m),B.m),m,m,m,B.anh,m,m,m,m)},
$S:187}
C.e5o.prototype={
$1(d){var w=this.a
w.l(new C.e5m(w,d))},
$S:2}
C.e5m.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.I(0,v)},
$S:0}
C.e5p.prototype={
$0(){var w=this.b
return this.a.bec(1.25,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e5q.prototype={
$0(){var w=this.b
return this.a.bec(0.8,new A.au(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e5r.prototype={
$0(){var w=this,v=w.b
return w.a.aWi(new A.au(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.au(w.c,w.d),w.e.gbmM())},
$S:0}
C.e5w.prototype={
$0(){var w=this.a
return w.l(new C.e5n(w))},
$S:0}
C.e5n.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e4E.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fH(new A.fy(s.c)),$async$$0)
case 2:t.yF("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.djl.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.blv(u,C.hLN(v.c,u),new C.djk(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+40}
C.djk.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.djm.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.boR(d.d,d.c,u.f.q(0,d.a),new C.djj(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+41}
C.djj.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fLo.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.T(v)
return A.ny(new A.cN(new A.Y(v,new C.fLp(d),w.k("Y<1>")),new C.fLq(),w.k("cN<1,q>")))},
$S:z+19}
C.fLp.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fLq.prototype={
$1(d){return d.a},
$S:z+8}
C.fLm.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fLn.prototype={
$1(d){return d.b},
$S:z+8}
C.fLt.prototype={
$1(d){var w,v=d.e
if(this.a.an(0,v))return v
v=this.b
w=A.T(v)
return A.ny(new A.cN(new A.Y(v,new C.fLu(d),w.k("Y<1>")),new C.fLv(),w.k("cN<1,q>")))},
$S:z+19}
C.fLu.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fLv.prototype={
$1(d){return d.a},
$S:z+8}
C.fLr.prototype={
$1(d){var w,v=A.ew([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.an(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+43}
C.fLs.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.djo.prototype={
$0(){return this.a},
$S:z+44}
C.djF.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.an(0,d)},
$S:216}
C.djx.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.djy()),v=J.a7(w)
if(!v.q(w,e))v.I(w,e)},
$S:121}
C.djy.prototype={
$0(){return A.a([],x.s)},
$S:846}
C.djw.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eC(w,e)
return w===!0},
$S:258}
C.djp.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.djv.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dju.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aT(v==null?D.E8:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aT(v==null?B.Z:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aT(t==null?D.E8:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:2298}
C.djq.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.djz.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.I(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aT(u==null?B.Z:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gP(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.I(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.u(w,r)
if(u){t=t.h(0,s)
t=J.aT(t==null?D.E8:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aS(w,new C.djA(r)))w.push(r)}}B.d.bq(w,new C.djB(a8))
B.d.b0(w,new C.djC())
q=C.i8S(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f15],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.I)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.y(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.I)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gH(k)+B.d.gal(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.brY(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2299}
C.djA.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.djB.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.djC.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.djD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cC(0,0,B.oj)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:767}
C.djE.prototype={
$1(d){return 16+d*156},
$S:161}
C.djn.prototype={
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
t.n(0,d,new C.GO(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GO(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GO(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aT(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.L4(d,new A.r(e+t,w),s,s.length))}},
$S:207}
C.djr.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aLB(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:121}
C.djs.prototype={
$1(d){return d.a===this.a},
$S:z+45}
C.djt.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:839}
C.djG.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:839}
C.djH.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:423}
C.djI.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:194}
C.djJ.prototype={
$1(d){return d>=0.5},
$S:128}
C.fqw.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hd(A.aM(!1,v,!0,new A.a5(38,38,A.W(d,this.a.c?B.c:B.cu,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:2301}
C.f0p.prototype={
$1(d){var w=null,v=A.m(8),u=B.bQ.j(0.12),t=A.m(8)
return new A.D(B.nK,A.aM(!1,v,!0,A.o(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fEr,B.K,w,w),B.f,w,w,new A.n(u,w,w,t,w,w,B.m),w,w,w,w,B.P6,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f0o(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+46}
C.f0o.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dzC.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dzB.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nk,B.K,w,w)
return A.ek(A.a([A.bO(!1,B.dp,w,w,!0,w,w,w,new C.dzz(d),w,w),A.bO(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.mZ,w,w,w,w,w,w,w,w,w,w,w,B.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dzA(d),w,w)],x.p),B.b9,B.CM,w,u,D.bIg,w,D.bKf,new A.ba(v,B.a1),w,w)},
$S:18}
C.dzz.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dzA.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dzL.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dzM.prototype={
$1(d){var w=this.a
return w.l(new C.dzK(w,d))},
$S:z+47}
C.dzK.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dzN.prototype={
$1(d){var w=null
return A.qO(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dzQ.prototype={
$1(d){var w=this.a
return w.l(new C.dzJ(w,d))},
$S:35}
C.dzJ.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dzP.prototype={
$1(d){var w=null
return A.qO(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dzR.prototype={
$1(d){var w=this.a
return w.l(new C.dzI(w,d))},
$S:35}
C.dzI.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dzS.prototype={
$0(){var w=this.a
return w.l(new C.dzH(w))},
$S:0}
C.dzH.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dzT.prototype={
$0(){var w=this.a
return w.l(new C.dzG(w))},
$S:0}
C.dzG.prototype={
$0(){return++this.a.at},
$S:0}
C.dzU.prototype={
$0(){var w=this.a
return w.l(new C.dzF(w))},
$S:0}
C.dzF.prototype={
$0(){return--this.a.ax},
$S:0}
C.dzV.prototype={
$0(){var w=this.a
return w.l(new C.dzE(w))},
$S:0}
C.dzE.prototype={
$0(){return++this.a.ax},
$S:0}
C.dzW.prototype={
$1(d){var w=this.a
return w.l(new C.dzD(w,d))},
$S:9}
C.dzD.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dzO.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.dzX.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.eg:B.c
v=A.m(12)
if(p)u=B.bQ
else u=(q.c.a?B.ei:B.bO).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bh
t=A.W(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bh
return A.E(A.aF(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cU(r,A.x(A.a([t,B.av,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.G,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.b0,new A.n(w,r,u,v,r,r,B.m),B.eD,r,r,r,r,B.jQ,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dzY(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+49}
C.dzY.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dA6.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cgx.prototype={
$2(d,e){return new A.bC(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:101}
C.cgE.prototype={
$1(d){return d.ak()},
$S:z+5}
C.cgF.prototype={
$2(d,e){var w=J.b9(e,new C.cgD(),x.a)
w=A.B(w,w.$ti.k("ak.E"))
return new A.bC(d,w,x.d2)},
$S:z+51}
C.cgD.prototype={
$1(d){return d.ak()},
$S:z+12}
C.cgz.prototype={
$1(d){return C.amJ(A.a1(d,x.N,x.z))},
$S:z+9}
C.cgA.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cgB.prototype={
$1(d){return C.hqQ(A.a1(d,x.N,x.z))},
$S:z+11}
C.cgC.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cgJ.prototype={
$1(d){return new A.aIF(d.f.length,d.a,d.b)},
$S:z+53}
C.cgK.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:621}
C.cgG.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cgH.prototype={
$1(d){return d.cQh(C.Hv(d,this.a))},
$S:z+54}
C.e5F.prototype={
$1(d){return C.uz(d,this.a.a.c)},
$S:z+3}
C.e5G.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e5K.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e5L.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e5C.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2b(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.ze("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pE(r.c,r.e),$async$$0)
case 4:s.ze(p)
w=5
return A.b(s.Ks(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5D.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2b(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.ze("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pE(r.c,r.e),$async$$0)
case 4:s.ze(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5E.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.WI(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.ze("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.ze("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.ze("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Ks(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.aa(j)
o=r.a
if(o.c==null){w=1
break}o.ze(B.a.el(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e5J.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b2a(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.ze("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cc(A.ed(new C.e5I(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pE(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e5I.prototype={
$1(d){var w=this.b
return new C.a0V(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+83}
C.e5H.prototype={
$1(d){return D.hJT},
$S:z+56}
C.e5N.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e5O.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e5M(w,d)
return new A.D(B.da,new C.bhK(this.b,d.c,d.a,w,null),null)},
$S:2302}
C.e5M.prototype={
$0(){return this.a.YU(this.b.b)},
$S:0}
C.e5x.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e5y.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e5z.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e5A.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e5B.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.e5P.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.X(s,"NGMYFTSYNC2"))t=!A.cT(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).N(s)
return}},
$S:169}
C.dRJ.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+57}
C.dRK.prototype={
$0(){return B.d.gH(D.a7x)},
$S:z+58}
C.dRL.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.as(A.W(this.b.d,B.c.j(0.95),w,w,D.dcS,44),w,w,w),w,w,new C.bmD(u,t,v,w),B.az)},
$S:59}
C.h1X.prototype={
$1(d){return A.pn(new C.h1W(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:152}
C.h1W.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.eg:B.c,p=A.a([new A.ac(0,B.H,B.w.j(r?0.35:0.08),B.tV,24)],x.V),o=r?B.ei:B.bO
o=A.o(t,t,B.f,t,t,new A.n(o,t,t,A.m(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aV.j(0.25),B.bQ.j(0.18)],x.O)
w=A.o(t,D.c_k,B.f,t,t,new A.n(t,t,t,A.m(12),t,new A.a8(B.a5,B.a9,B.x,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.aw,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.o(t,A.x(A.a([B.T,o,new A.D(B.aoh,A.A(A.a([w,B.ba,A.E(A.x(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bh,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.D,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.iA(!0,t,e,B.y,D.fqR,new C.h1V(this.b,s),20,B.anP,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.n(q,t,t,B.lk,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:124}
C.h1V.prototype={
$2(d,e){var w=null,v=D.a7x[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.K(s?B.ei:B.bO,B.r,1),q=A.a([new A.ac(0,B.H,B.w.j(s?0.35:0.08),B.et,8)],x.V),p=A.m(15),o=A.E(new C.a7K(v.a,!0,w),1),n=s?B.k4:B.iE,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.aw,w,w,w,w,w,w,w,w,13,w,w,B.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eE(A.bw(p,A.x(A.a([o,A.o(w,A.x(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bu:B.bh,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.D,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.kd,w,w,w)],l),B.al,w,B.e,B.h,0,B.p),B.aq),w,new A.n(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h1U(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:86}
C.h1U.prototype={
$0(){A.a6(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cqj.prototype={
$0(){return this.a.ai_(this.b)},
$S:0}
C.h1k.prototype={
$1(d){return D.hEx},
$S:z+59}
C.h97.prototype={
$1(d){var w=this
return new C.a2I(w.a,w.b,w.c,w.d,null)},
$S:z+60}
C.h1o.prototype={
$1(d){return new C.a_z(this.a,null)},
$S:z+61}
C.h1n.prototype={
$1(d){return D.hFy},
$S:z+62}
C.daQ.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.daR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.daP(w,d))},
$S:35}
C.daP.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.daS.prototype={
$1(d){return this.a.L5()},
$S:2}
C.daT.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.daM.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.daN.prototype={
$1(d){return this.a.L5()},
$S:2}
C.daO.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cIH.prototype={
$0(){},
$S:0}
C.cIN.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.cIO.prototype={
$0(){return this.a.aRx(-1)},
$S:0}
C.cIP.prototype={
$1(d){return this.a.l(new C.cIM())},
$S:2}
C.cIM.prototype={
$0(){},
$S:0}
C.cIQ.prototype={
$0(){return this.a.aRx(1)},
$S:0}
C.cIR.prototype={
$1(d){return this.a.l(new C.cIL())},
$S:2}
C.cIL.prototype={
$0(){},
$S:0}
C.cIS.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aV.j(0.2)
if(s)v=B.aV
else v=this.b.a?B.ei:B.bO
return A.uX(u,u,B.b5,r,u,new C.cIK(t,d),B.wV,s,w,u,new A.aw(v,1,B.r,-1),B.cj)},
$S:2303}
C.cIK.prototype={
$1(d){var w=this.a
return w.l(new C.cII(w,this.b))},
$S:9}
C.cII.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cIT.prototype={
$1(d){return this.a.l(new C.cIJ())},
$S:2}
C.cIJ.prototype={
$0(){},
$S:0}
C.cIU.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fq1.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).N(w)},
$S:2}
C.fq2.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.fq3.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).N(w)},
$S:0}
C.fq_.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbE5()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bKe,new A.e6(A.o(r,q.a.c,B.f,r,r,new A.n(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bzr(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:59}
C.fq0.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dL.aB(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ap(B.aV,B.bQ,w)
s.toString
s=A.a([B.b5,s,B.aV],x.O)
return A.aF(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eE(D.ezy,r,new A.n(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a8(new A.de(-1.2+t,-0.5),new A.de(1.2-t,0.8),B.x,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:140}
C.h_B.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:63}
C.eYz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eYq.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eYr.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eYx.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.e0(new C.eYw(w,this.b),null)},
$S:20}
C.eYw.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.eg:B.c,t=A.m(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.aw,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eI(w,u,new A.D(B.aob,A.x(A.a([s,B.am,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bh,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hwY(new C.eYt(r,e),r.a),B.aB,A.A(A.a([A.E(A.dU(B.dp,new C.eYu(d),w),1),B.as,A.E(A.bJ(B.WX,w,new C.eYv(r,d),A.bn(B.aV,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.al,w,B.e,B.N,0,B.p),w),w,w,w,w,w,B.d7,w,new A.ba(t,B.a1),w)},
$S:109}
C.eYt.prototype={
$1(d){return this.b.$1(new C.eYs(this.a,d))},
$S:35}
C.eYs.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eYu.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eYv.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).N(w)
return null},
$S:0}
C.eYy.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.TZ(this.b)},
$S:0}
C.eYl.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bga(w)},
$S:0}
C.eYp.prototype={
$1(d){return this.bpr(d)},
bpr(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mn(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j3(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eYo.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.T(w).k("Y<1>")
w=A.B(new A.Y(w,new C.eYn(this.b),v),v.k("M.E"))
u.d=t.bga(w)},
$S:0}
C.eYn.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eYA.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j3(this.b,w)},
$S:0}
C.eYB.prototype={
$1(d){return this.a.bIh(d,this.b)},
$S:z+65}
C.eYm.prototype={
$0(){return this.a.abH(this.b)},
$S:0}
C.h8V.prototype={
$1(d){return new C.af6(this.a,this.b,this.c,null)},
$S:z+66}
C.eYD.prototype={
$0(){return this.a.a0V(this.b)},
$S:0}
C.eYE.prototype={
$0(){return this.a.Rd(this.b)},
$S:0}
C.eYF.prototype={
$0(){return this.a.F9(this.b)},
$S:0}
C.eYG.prototype={
$0(){return this.a.a0W(this.b)},
$S:0}
C.eYC.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eYg.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eYh.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eYi.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
C.eYk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qA(),$async$$0)
case 2:if(t.c!=null)t.l(new C.eYj(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eYj.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eZ2.prototype={
$2(d,e){return d+e.gxO()},
$S:z+69}
C.eYZ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eZ_.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eYK.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.eg:B.c,s=A.m(24),r=A.o(v,D.c_P,B.f,v,v,new A.n(B.aA.j(u?0.18:0.08),v,A.K(B.aA.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.aw,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bh,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.aw
u=u?B.ei:B.bO
w=x.p
return A.eI(v,t,new A.D(B.wU,A.x(A.a([r,B.aO,q,B.P,p,B.dc,A.A(A.a([A.E(A.dU(B.oe,new C.eYI(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.f6,v,new A.ba(A.m(14),B.a1),new A.aw(u,1,B.r,-1),v,v,v,v)),1),B.as,A.E(A.bJ(D.h9R,v,new C.eYJ(d),A.bn(B.aA,v,v,v,v,v,B.f6,v,new A.ba(A.m(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.N,0,B.p),v),v,v,v,v,v,B.d7,v,new A.ba(s,B.a1),v)},
$S:48}
C.eYI.prototype={
$0(){A.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eYJ.prototype={
$0(){A.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eYT.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.eg:B.c,i=A.m(28),h=A.a([new A.ac(0,B.H,B.w.j(k?0.35:0.08),B.fU,28)],x.V),g=k?D.dkh:B.a6Q,f=x.p
g=A.o(m,A.x(A.a([A.o(m,m,B.f,m,m,new A.n(B.c.j(0.45),m,m,A.m(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aB,D.fjW,B.av,new A.bK(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cF,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.n(m,m,m,m,m,new A.a8(B.ay,B.aC,B.x,g,m,m),B.m),m,m,m,m,B.aof,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.G,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b91(B.b2,B.jC,new C.eYQ(v,d),l,"Camera import","Scan QR"),1),B.as,A.E(v.b91(B.cE,B.zY,new C.eYR(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,11,m,m,B.G,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aA.j(k?0.14:0.06)
q=A.m(16)
p=A.K(B.aA.j(0.28),B.r,1)
o=A.o(m,D.c_7,B.f,m,m,new A.n(B.aA.j(0.12),m,m,A.m(12),m,m,B.m),m,m,m,m,B.bT,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.aw,m,m,m,m,m,m,m,m,m,m,m,B.G,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bh,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.D,m,B.e,B.h,0,B.p),1)
return A.bm(!0,new A.D(B.wO,A.o(m,A.x(A.a([g,new A.D(B.aoc,A.x(A.a([w,B.T,u,B.bx,t,B.T,A.aF(!1,B.a3,!0,m,A.aM(!1,s,!0,A.o(m,A.A(A.a([o,B.ba,n,A.W(B.eK,k?B.bu:B.bh,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.n(r,m,p,q,m,m,B.m),m,m,m,m,B.bH,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eYS(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.D,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.N,0,B.p),B.aq,m,m,new A.n(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:28}
C.eYQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.we("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eYR.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.we("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eYS.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).N(null)
w=2
return A.b(u.a.OP(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eYO.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.eg:B.c,m=A.m(24),l=A.a([new A.ac(0,B.H,B.w.j(o?0.35:0.08),B.eO,24)],x.V),k=o?B.ei:B.bO
k=A.o(q,q,B.f,q,q,new A.n(k,q,q,A.m(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bu:B.bh
u=A.bw(w,new A.a5(48,48,C.aT9(!0,A.m(12),48,B.PO,u,v.c,48),q),B.aq)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.aw,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bt(v.gxO())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wO,A.o(q,A.x(A.a([B.T,k,new A.D(D.ao9,A.A(A.a([u,B.ba,A.E(A.x(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bh,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.D,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.CF,r.cso(B.vn,B.aV,new C.eYM(d),p,"QR code or backup file","Transfer project"),r.b60(!0,B.ek,B.aA,new C.eYN(d),p,"Remove from this device","Delete project"),B.T],s),B.l,q,B.e,B.N,0,B.p),B.f,q,q,new A.n(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:28}
C.eYM.prototype={
$0(){A.a6(this.a,!1).N("transfer")
return null},
$S:0}
C.eYN.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
C.eYP.prototype={
$1(d){return this.bps(d)},
bps(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.Mn(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wt(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eZ5.prototype={
$0(){var w=this.a
w.a.bu()
w.l(new C.eZ4(w))},
$S:0}
C.eZ4.prototype={
$0(){return this.a.r++},
$S:0}
C.eZ6.prototype={
$0(){var w=this.a
return w.l(new C.eZ3(w))},
$S:0}
C.eZ3.prototype={
$0(){return this.a.r++},
$S:0}
C.eYH.prototype={
$0(){var w=this.a.c
w.toString
return A.j3(w,null)},
$S:0}
C.eYL.prototype={
$0(){return this.a.clz(this.b)},
$S:0}
C.eZ1.prototype={
$0(){var w=this.a
return w.l(new C.eZ0(w,this.b))},
$S:0}
C.eZ0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eYW.prototype={
$0(){return this.a.we("scan")},
$S:0}
C.eYX.prototype={
$0(){return this.a.we("file")},
$S:0}
C.eYY.prototype={
$1(d){return this.a.csq(d,this.b)},
$S:z+70}
C.eYV.prototype={
$0(){return this.a.Fd(this.b)},
$S:0}
C.eYU.prototype={
$0(){return this.a.a1p(this.b,this.c)},
$S:0}
C.cI0.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+71}
C.cI_.prototype={
$1(d){return d.ak()},
$S:z+72}
C.cHY.prototype={
$1(d){return C.hRW(A.a1(d,x.N,x.z))},
$S:z+73}
C.cHZ.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fKg.prototype={
$1(d){return d.y===D.l3},
$S:z+3}
C.h9H.prototype={
$1(d){return C.aRP(d,this.a)},
$S:z+3}
C.fHL.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bU9.prototype={
$1(d){return!d.as},
$S:z+1}
C.bU8.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bU5.prototype={
$1(d){return C.hqS(A.a1(d,x.N,x.z))},
$S:z+24}
C.bU6.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bU7.prototype={
$1(d){return J.k(d)},
$S:16}
C.fxX.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.ftu.prototype={
$1(d){return C.hgg(A.a1(d,x.N,x.z))},
$S:z+77}
C.ftv.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.ftw.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h18.prototype={
$1(d){return J.k(d)},
$S:16}
C.h19.prototype={
$1(d){return d.a},
$S:z+79}
C.h1a.prototype={
$1(d){return d.length!==0},
$S:3}
C.h1b.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h1c.prototype={
$1(d){return d.TZ(null).ak()},
$S:z+80}
C.h9F.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fKK.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fNY.prototype={
$1(d){return C.amJ(A.a1(d,x.N,x.z))},
$S:z+9}
C.fNZ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fO_.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fO0.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fO1.prototype={
$1(d){return C.uz(d,this.a)},
$S:z+3}
C.h0W.prototype={
$1(d){return C.uz(d,this.a)},
$S:z+3}
C.h9A.prototype={
$1(d){return C.amJ(A.a1(d,x.N,x.z))},
$S:z+9}
C.h9B.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h9C.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fKr.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fKs.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h9L.prototype={
$1(d){return!d.as},
$S:z+1}
C.fJW.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fJX.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fJY.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.h98.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fOP.prototype={
$1(d){return d.Q},
$S:z+15}
C.h0P.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fNV.prototype={
$1(d){return C.amJ(A.a1(d,x.N,x.z))},
$S:z+9}
C.fNW.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fNX.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h0K.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fu2.prototype={
$1(d){return d.length!==0},
$S:3}
C.fu3.prototype={
$1(d){return C.hqS(A.a1(d,x.N,x.z))},
$S:z+24}
C.fu4.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fu5.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:16}
C.fu6.prototype={
$1(d){return d.length!==0},
$S:3}
C.fuj.prototype={
$2(d,e){return d.eG(new C.fuk(e))},
$S:2304}
C.fuk.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.ch},
$S:2305}
C.fug.prototype={
$1(d){return C.idJ(d,this.a)},
$S:z+82}
C.fuh.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fui.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fyG.prototype={
$1(d){return d.a},
$S:z+55}
C.fyH.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyI.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fBH.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fH_.prototype={
$1(d){return C.hCA(d,C.Hv(d,this.a))},
$S:z+5}
C.fH0.prototype={
$1(d){return C.hCB(d,C.Hv(d,this.a))},
$S:z+5};(function aliases(){var w=C.aCl.prototype
w.bxi=w.t
w=C.aAv.prototype
w.bxd=w.t
w=C.aHQ.prototype
w.bxG=w.t
w=C.aCm.prototype
w.bxj=w.t
w=C.aCo.prototype
w.bxk=w.t
w=C.aCp.prototype
w.bxl=w.t
w=C.aO2.prototype
w.bA9=w.t
w=C.aQa.prototype
w.bCu=w.t
w=C.aQb.prototype
w.bCv=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aFm.prototype,"gcpg","cph",27)
var r
w(r=C.aCk.prototype,"gci7","ci8",63)
v(r,"gaPK","Ol",0)
v(r,"gcxJ","BD",0)
v(r,"gbQb","P3",0)
v(r,"gcMh","zf",0)
v(r,"gcrm","a27",0)
v(r,"gbLx","OL",0)
v(r,"gbQB","Yk",0)
w(r,"gbVG","bVH",76)
v(r,"gbFM","Az",0)
v(C.aCn.prototype,"gcMd","G6",0)
v(r=C.amy.prototype,"gbtE","btF",2)
v(r,"gbtw","btx",2)
v(r,"gcNl","cNm",2)
u(r,"gqt","kN",0)
u(r=C.akI.prototype,"geY","fY",2)
w(r,"gcdI","cdJ",26)
u(C.avB.prototype,"gqt","kN",0)
v(r=C.azy.prototype,"gcYV","cYW",2)
u(r,"gqt","kN",0)
u(C.aLG.prototype,"gbtC","btD",2)
v(C.amH.prototype,"gC8","cNy",2)
u(r=C.amF.prototype,"gcOf","cOg",2)
u(r,"gqt","kN",0)
v(r=C.amB.prototype,"gbsu","bsv",2)
v(r,"gcTp","cTq",2)
u(r=C.amD.prototype,"geY","fY",2)
u(r,"giC","cMS",2)
v(r=C.amz.prototype,"gcMH","cMI",2)
u(r,"gbrm","jG",2)
v(r=C.aFW.prototype,"gahC","wu",0)
v(r,"gckP","a1h",0)
v(r,"gaTZ","IH",0)
v(r=C.aFT.prototype,"gcI9","a4e",0)
v(r,"gahC","wu",0)
v(r,"gcvI","a2M",0)
v(r,"gckK","b4d",2)
v(r,"gclM","a1u",0)
w(r,"gci1","ci2",33)
v(r,"gbQt","IM",0)
v(r,"gcJf","cJg",2)
v(r,"gc7F","a_6",0)
w(r,"gcgw","cgx",34)
v(r,"gcky","ckz",2)
v(r=C.aEl.prototype,"gcdO","QK",0)
v(r,"gcdQ","cdR",2)
v(r,"gbN1","abj",0)
v(r=C.aFV.prototype,"gbU4","YQ",0)
v(r,"gc3D","Zv",0)
v(r,"gcCb","a3C",0)
v(r,"gcyi","a3d",0)
v(C.aFU.prototype,"gcy1","ajq",0)
v(C.auL.prototype,"gcgu","a0T",0)
v(C.aB4.prototype,"ga3Y","L5",2)
v(C.aB3.prototype,"ga3Y","L5",2)
v(C.azK.prototype,"ga3Y","L5",2)
v(r=C.aHr.prototype,"gb5o","RK",0)
v(r,"gbEA","WW",0)
v(r,"gclA","clB",2)
w(C.aHq.prototype,"gchm","chn",67)
t(C.aHs.prototype,"gaTU",0,0,null,["$1","$0"],["IG","bOl"],68,0,0)
s(C,"hKS","inG",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aK,[C.aqi,C.uU,C.nv,C.IB,C.agi,C.KY,C.uV,C.bUF,C.tg,C.bq8,C.amQ,C.aeo,C.ls,C.bTg,C.auX,C.zI,C.alo,C.N0,C.bbv,C.aas,C.biP,C.agp,C.aAM,C.agd,C.aLG,C.L4,C.GO,C.bhI,C.aLB,C.arH,C.djK,C.lT,C.aW6,C.aW5,C.aU7,C.uk,C.rv,C.lD,C.i5,C.kZ,C.aJz])
u(A.kp,[C.fSD,C.fSC,C.fSE,C.h1Q,C.fFE,C.fFF,C.fFK,C.fQl,C.fQk,C.fQj,C.c9t,C.h2m,C.h2e,C.h2q,C.fKz,C.dSp,C.dSk,C.dSl,C.dRY,C.dRU,C.dSE,C.dSF,C.dSy,C.dSz,C.dSG,C.dSH,C.fLk,C.fNS,C.fNT,C.h0U,C.h9z,C.fKq,C.h1u,C.diX,C.dij,C.dis,C.diJ,C.dio,C.diu,C.dil,C.diy,C.diz,C.dix,C.diO,C.diN,C.dkK,C.dkL,C.dkM,C.dja,C.djf,C.dje,C.cR4,C.cR6,C.da3,C.das,C.dat,C.daw,C.day,C.daz,C.daA,C.daC,C.daD,C.bT0,C.bSV,C.fyn,C.h9r,C.h9s,C.h9t,C.h9o,C.h9u,C.h9v,C.h9w,C.h9n,C.fLY,C.h_O,C.fHM,C.fOO,C.bO2,C.h9R,C.h0q,C.bMc,C.bM7,C.bM9,C.bM8,C.cs_,C.crV,C.crW,C.crU,C.crS,C.crX,C.cS8,C.cH_,C.cH2,C.cH0,C.cH3,C.cH4,C.faF,C.fkV,C.bTN,C.bTH,C.bTL,C.bTo,C.e4d,C.e4a,C.e4b,C.e49,C.e4f,C.bTF,C.bTv,C.bTf,C.bTe,C.bTa,C.bTb,C.bTc,C.bTd,C.e5T,C.e5i,C.e5d,C.e4F,C.e4V,C.e4Y,C.e4U,C.e4T,C.e59,C.e5a,C.e54,C.e4t,C.e5l,C.e5f,C.e4v,C.e4w,C.e4x,C.e4C,C.e4A,C.e4z,C.e4P,C.e4Q,C.e4K,C.e5s,C.e5o,C.djl,C.djm,C.fLo,C.fLp,C.fLq,C.fLm,C.fLn,C.fLt,C.fLu,C.fLv,C.fLr,C.fLs,C.djF,C.djv,C.djq,C.djA,C.djB,C.djE,C.djs,C.djH,C.djI,C.djJ,C.fqw,C.f0p,C.dzB,C.dzL,C.dzM,C.dzN,C.dzQ,C.dzP,C.dzR,C.dzW,C.dzX,C.cgE,C.cgD,C.cgz,C.cgA,C.cgB,C.cgC,C.cgJ,C.cgG,C.cgH,C.e5F,C.e5I,C.e5H,C.e5O,C.e5P,C.dRJ,C.h1X,C.h1k,C.h97,C.h1o,C.h1n,C.daR,C.daS,C.daN,C.cIP,C.cIR,C.cIS,C.cIK,C.cIT,C.fq1,C.h_B,C.eYx,C.eYt,C.eYp,C.eYn,C.eYB,C.h8V,C.eYK,C.eYT,C.eYO,C.eYP,C.eYY,C.cI_,C.cHY,C.cHZ,C.fKg,C.h9H,C.fHL,C.bU9,C.bU8,C.bU5,C.bU6,C.bU7,C.ftu,C.ftv,C.h18,C.h19,C.h1a,C.h1b,C.h1c,C.h9F,C.fKK,C.fNY,C.fNZ,C.fO0,C.fO1,C.h0W,C.h9A,C.h9B,C.h9C,C.fKr,C.fKs,C.h9L,C.fJW,C.fJX,C.h98,C.fOP,C.h0P,C.fNV,C.fNW,C.h0K,C.fu2,C.fu3,C.fu4,C.fu5,C.fu6,C.fuk,C.fug,C.fuh,C.fyG,C.fyH,C.fBH,C.fH_,C.fH0])
u(A.av,[C.b0G,C.amw,C.aXn,C.a_d,C.bdi,C.R_,C.a6Z,C.tG,C.ID,C.bhG,C.blv,C.bzC,C.boR,C.aeL,C.blu,C.aeK,C.blt,C.aEm,C.aKD,C.aeM,C.GK,C.bhH,C.ae0,C.bhF,C.bhK,C.b0E,C.auL,C.af6])
u(A.qa,[C.bdY,C.bfa,C.bf1,C.aJt,C.bkw,C.bq7,C.aXs,C.be_,C.aCj,C.bdr,C.bud,C.bkE,C.bk4,C.bkb,C.bhJ,C.bgK,C.bmD,C.bzr])
u(A.mC,[C.h2j,C.h2k,C.h2l,C.h2c,C.h2d,C.h2o,C.h2p,C.dSB,C.dSn,C.dSq,C.dS4,C.dS5,C.dS6,C.dS3,C.dSb,C.dS2,C.dSc,C.dSd,C.dS1,C.dSe,C.dS0,C.dSf,C.dS_,C.dSg,C.dRS,C.dRT,C.dRZ,C.dSh,C.dRX,C.dSi,C.dRW,C.dS7,C.dRV,C.dS8,C.dRR,C.dS9,C.dSa,C.dSC,C.dSD,C.dSr,C.dSs,C.dSt,C.dSu,C.dSv,C.dSw,C.dSx,C.dSJ,C.dSA,C.fLl,C.dih,C.dif,C.dig,C.dii,C.diW,C.diL,C.diI,C.dik,C.diM,C.diq,C.dir,C.dit,C.diK,C.dip,C.div,C.diT,C.diF,C.diE,C.diG,C.diH,C.diA,C.diC,C.diD,C.diw,C.diP,C.diS,C.dim,C.din,C.dkJ,C.dkI,C.dkH,C.dkG,C.dkN,C.dkF,C.dkO,C.djb,C.djc,C.djd,C.djg,C.dj9,C.dj8,C.cR5,C.da2,C.daf,C.dae,C.dau,C.dad,C.dav,C.dac,C.dab,C.dax,C.daa,C.dan,C.dam,C.daE,C.bSU,C.bT3,C.bSW,C.bSX,C.bT_,C.bSZ,C.bT1,C.bT2,C.bSY,C.bSS,C.bST,C.bUx,C.bUy,C.bUz,C.bUA,C.bUB,C.bUC,C.bUD,C.h9q,C.h_P,C.bMb,C.bM6,C.bM4,C.bM5,C.bM3,C.cs1,C.cs2,C.cs0,C.cs3,C.cs5,C.cs6,C.cs7,C.crY,C.cGZ,C.cH7,C.cH8,C.cH9,C.cH6,C.cHa,C.cHb,C.cHc,C.cHd,C.cH1,C.cH5,C.bU2,C.bU1,C.bU_,C.bTY,C.bTZ,C.bTV,C.bTW,C.bTX,C.bU0,C.bTU,C.faG,C.faH,C.faI,C.faJ,C.faK,C.bTR,C.bTS,C.bTT,C.bTM,C.bTO,C.bTP,C.bTQ,C.bTI,C.bTs,C.bTr,C.bTq,C.bTk,C.bTl,C.bTp,C.bTm,C.bTn,C.bTj,C.e4c,C.e4e,C.e47,C.e48,C.e46,C.e4g,C.e4h,C.e4i,C.e4l,C.e4m,C.e4n,C.e4o,C.e4p,C.e4q,C.e4r,C.e4s,C.e4j,C.e4k,C.bTE,C.bTD,C.bTu,C.bTt,C.bTA,C.bTB,C.bTx,C.bTy,C.bTz,C.bTw,C.bT4,C.bT5,C.bT9,C.bT8,C.bT7,C.bT6,C.e5S,C.e5R,C.e5U,C.e5V,C.e5W,C.e5Q,C.e5Y,C.e5X,C.e5g,C.e5h,C.e5j,C.e4G,C.e4X,C.e4W,C.e4Z,C.e5c,C.e4S,C.e52,C.e53,C.e51,C.e5_,C.e50,C.e55,C.e56,C.e57,C.e5b,C.e4u,C.e5e,C.e4y,C.e4B,C.e4D,C.e5k,C.e4J,C.e4H,C.e4L,C.e4M,C.e4I,C.e4N,C.e4R,C.e5t,C.e5u,C.e5m,C.e5p,C.e5q,C.e5r,C.e5w,C.e5n,C.e4E,C.djk,C.djj,C.djo,C.djy,C.djp,C.f0o,C.dzC,C.dzz,C.dzA,C.dzK,C.dzJ,C.dzI,C.dzS,C.dzH,C.dzT,C.dzG,C.dzU,C.dzF,C.dzV,C.dzE,C.dzD,C.dzO,C.dzY,C.dA6,C.e5G,C.e5K,C.e5L,C.e5C,C.e5D,C.e5E,C.e5J,C.e5N,C.e5M,C.e5x,C.e5y,C.e5z,C.e5A,C.e5B,C.dRK,C.h1U,C.cqj,C.daQ,C.daP,C.daT,C.daM,C.daO,C.cIH,C.cIN,C.cIO,C.cIM,C.cIQ,C.cIL,C.cII,C.cIJ,C.cIU,C.fq2,C.fq3,C.eYz,C.eYq,C.eYr,C.eYs,C.eYu,C.eYv,C.eYy,C.eYl,C.eYo,C.eYA,C.eYm,C.eYD,C.eYE,C.eYF,C.eYG,C.eYC,C.eYg,C.eYh,C.eYi,C.eYk,C.eYj,C.eYZ,C.eZ_,C.eYI,C.eYJ,C.eYQ,C.eYR,C.eYS,C.eYM,C.eYN,C.eZ5,C.eZ4,C.eZ6,C.eZ3,C.eYH,C.eYL,C.eZ1,C.eZ0,C.eYW,C.eYX,C.eYV,C.eYU])
u(A.ag,[C.aqv,C.Uj,C.a_X,C.a00,C.a_Z,C.a_x,C.amx,C.akH,C.avA,C.azx,C.amG,C.amE,C.amA,C.WF,C.amC,C.Uk,C.arK,C.arE,C.a0B,C.arI,C.a0V,C.a0W,C.a7K,C.a_z,C.a_y,C.a_4,C.a2I,C.Gy,C.azD,C.auK,C.auE,C.auJ,C.Pd])
u(A.ah,[C.aFm,C.bhA,C.aCk,C.bhZ,C.aCn,C.bf8,C.aCl,C.aAv,C.aHQ,C.azy,C.aCp,C.aCo,C.aCm,C.bmZ,C.amD,C.amz,C.aFW,C.aFT,C.aEl,C.aFV,C.aFU,C.bn_,C.aO2,C.aB4,C.aB3,C.azK,C.bzu,C.aQa,C.aQb,C.aHr,C.bom,C.aHq,C.bBf])
u(A.mh,[C.dSm,C.dSo,C.dSj,C.dSI,C.fNU,C.bSR,C.diV,C.diU,C.diB,C.diQ,C.diR,C.djh,C.bUE,C.bUw,C.bTh,C.bTi,C.h9p,C.h9Q,C.bMa,C.cs4,C.crZ,C.crT,C.faL,C.bTG,C.bTJ,C.bTK,C.dtT,C.bTC,C.e58,C.e4O,C.e5v,C.djx,C.djw,C.dju,C.djz,C.djC,C.djD,C.djn,C.djr,C.djt,C.djG,C.cgx,C.cgF,C.cgK,C.dRL,C.h1W,C.h1V,C.fq_,C.fq0,C.eYw,C.eZ2,C.cI0,C.fxX,C.ftw,C.fO_,C.fJY,C.fNX,C.fuj,C.fui,C.fyI])
u(A.qz,[C.a2c,C.agr,C.a2v,C.a0o,C.ad1,C.aMn,C.IC,C.amI,C.cI1,C.cI2])
t(C.amy,C.aCl)
t(C.akI,C.aAv)
t(C.avB,C.aHQ)
t(C.bhE,C.aCp)
t(C.amH,C.bhE)
t(C.bhD,C.aCo)
t(C.amF,C.bhD)
t(C.bhC,C.aCm)
t(C.amB,C.bhC)
t(C.bmE,C.aO2)
t(C.bzs,C.aQa)
t(C.bzt,C.aQb)
t(C.aHs,C.bBf)
t(C.bbJ,A.bbw)
t(C.bzv,A.apa)
t(C.bbI,C.bzv)
w(C.aCl,A.ch)
w(C.aAv,A.ch)
w(C.aHQ,A.eO)
w(C.aCm,A.ch)
v(C.bhC,C.agd)
w(C.aCo,A.ch)
v(C.bhD,C.agd)
w(C.aCp,A.ch)
v(C.bhE,C.agd)
w(C.aO2,A.eO)
w(C.aQa,A.ch)
w(C.aQb,A.ch)
v(C.bBf,A.eG)
v(C.bzv,A.jh)})()
A.nL(b.typeUniverse,JSON.parse('{"b0G":{"av":[],"w":[]},"bdY":{"aB":[]},"aqv":{"ag":[],"w":[]},"aFm":{"ah":["aqv"]},"Uj":{"ag":[],"w":[]},"amw":{"av":[],"w":[]},"aXn":{"av":[],"w":[]},"bhA":{"ah":["Uj"]},"a_X":{"ag":[],"w":[]},"a00":{"ag":[],"w":[]},"a_Z":{"ag":[],"w":[]},"a_x":{"ag":[],"w":[]},"aCk":{"ah":["a_X"]},"bhZ":{"ah":["a00"]},"aCn":{"ah":["a_Z"]},"a_d":{"av":[],"w":[]},"bfa":{"aB":[]},"bf1":{"aB":[]},"bf8":{"ah":["a_x"]},"aJt":{"aB":[]},"bkw":{"aB":[]},"bdi":{"av":[],"w":[]},"amx":{"ag":[],"w":[]},"amy":{"ah":["amx"]},"bq7":{"aB":[]},"aXs":{"aB":[]},"akH":{"ag":[],"w":[]},"avA":{"ag":[],"w":[]},"azx":{"ag":[],"w":[]},"akI":{"ah":["akH"]},"be_":{"aB":[]},"R_":{"av":[],"w":[]},"aCj":{"aB":[]},"avB":{"ah":["avA"]},"bdr":{"aB":[]},"azy":{"ah":["azx"]},"amG":{"ag":[],"w":[]},"amE":{"ag":[],"w":[]},"amA":{"ag":[],"w":[]},"amH":{"ah":["amG"]},"bud":{"aB":[]},"amF":{"ah":["amE"]},"bkE":{"aB":[]},"amB":{"ah":["amA"]},"bk4":{"aB":[]},"WF":{"ag":[],"w":[]},"amC":{"ag":[],"w":[]},"Uk":{"ag":[],"w":[]},"a6Z":{"av":[],"w":[]},"bkb":{"aB":[]},"tG":{"av":[],"w":[]},"ID":{"av":[],"w":[]},"bmZ":{"ah":["WF"]},"amD":{"ah":["amC"]},"amz":{"ah":["Uk"]},"arK":{"ag":[],"w":[]},"arE":{"ag":[],"w":[]},"a0B":{"ag":[],"w":[]},"aeM":{"av":[],"w":[]},"aFW":{"ah":["arK"]},"aFT":{"ah":["arE"]},"bhG":{"av":[],"w":[]},"bhJ":{"aB":[]},"blv":{"av":[],"w":[]},"bgK":{"aB":[]},"bzC":{"av":[],"w":[]},"boR":{"av":[],"w":[]},"aEl":{"ah":["a0B"]},"aeL":{"av":[],"w":[]},"blu":{"av":[],"w":[]},"aeK":{"av":[],"w":[]},"blt":{"av":[],"w":[]},"aEm":{"av":[],"w":[]},"aKD":{"av":[],"w":[]},"GK":{"av":[],"w":[]},"arI":{"ag":[],"w":[]},"a0V":{"ag":[],"w":[]},"a0W":{"ag":[],"w":[]},"aFV":{"ah":["arI"]},"bhH":{"av":[],"w":[]},"ae0":{"av":[],"w":[]},"bhF":{"av":[],"w":[]},"bhK":{"av":[],"w":[]},"aFU":{"ah":["a0V"]},"bn_":{"ah":["a0W"]},"b0E":{"av":[],"w":[]},"a7K":{"ag":[],"w":[]},"bmE":{"ah":["a7K"]},"bmD":{"aB":[]},"auL":{"av":[],"w":[]},"a_z":{"ag":[],"w":[]},"a_y":{"ag":[],"w":[]},"a_4":{"ag":[],"w":[]},"a2I":{"ag":[],"w":[]},"aB4":{"ah":["a_z"]},"aB3":{"ah":["a_y"]},"azK":{"ah":["a_4"]},"bzu":{"ah":["a2I"]},"Gy":{"ag":[],"w":[]},"azD":{"ag":[],"w":[]},"bzs":{"ah":["Gy"]},"bzt":{"ah":["azD"]},"bzr":{"aB":[]},"auK":{"ag":[],"w":[]},"aHr":{"ah":["auK"]},"af6":{"av":[],"w":[]},"auE":{"ag":[],"w":[]},"auJ":{"ag":[],"w":[]},"bom":{"ah":["auE"]},"aHq":{"ah":["auJ"]},"Pd":{"ag":[],"w":[]},"aHs":{"ah":["Pd"],"eG":[]},"bbI":{"jh":[],"fp":[]}}'))
A.a2w(b.typeUniverse,JSON.parse('{"agd":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aE
return{e2:w("aU7"),cq:w("mg"),Q:w("rv"),r:w("bq<q,q>"),c5:w("aW5"),dY:w("aW6"),fH:w("N0"),de:w("alo"),dN:w("N8<H>"),gc:w("EA<H>"),A:w("eS<q?>"),e:w("IB"),B:w("nv"),P:w("i5"),df:w("ls"),k:w("kZ"),x:w("aA<~>"),U:w("U<aUS>"),V:w("U<ac>"),C:w("U<rv>"),O:w("U<u>"),c:w("U<N0>"),b:w("U<alo>"),ac:w("U<eS<q?>>"),I:w("U<nv>"),u:w("U<i5>"),J:w("U<ls>"),_:w("U<kZ>"),cl:w("U<aA<ai<ab<q,@>>>>"),R:w("U<o4>"),eU:w("U<ai<+(G,G)>>"),ez:w("U<ab<q,aK>>"),gE:w("U<ab<q,q>>"),Y:w("U<ab<q,@>>"),fD:w("U<o6>"),bp:w("U<oN>"),g:w("U<r>"),ar:w("U<auX>"),v:w("U<hO>"),gy:w("U<aas>"),L:w("U<+(q,q)>"),G:w("U<+(G,G)>"),E:w("U<+(G,~())>"),bd:w("U<+(q,H,Q)>"),bF:w("U<+count,id,name(H,q,q)>"),F:w("U<d8>"),s:w("U<q>"),cF:w("U<at>"),aS:w("U<jL>"),dT:w("U<bbv>"),p:w("U<w>"),Z:w("U<fp>"),D:w("U<lD>"),h:w("U<aAM>"),cC:w("U<biP>"),fp:w("U<KY>"),M:w("U<L4>"),gZ:w("U<aJz>"),gA:w("U<agi>"),e4:w("U<agp>"),dE:w("U<aLB>"),f7:w("U<Q>"),n:w("U<G>"),t:w("U<H>"),dS:w("U<aB?>"),d4:w("U<q?>"),eF:w("cB<ah<ag>>"),d:w("ai<nv>"),do:w("ai<i5>"),cg:w("ai<ls>"),ax:w("ai<kZ>"),fO:w("ai<ab<q,@>>"),cz:w("ai<+(q,q)>"),bC:w("ai<+count,id,name(H,q,q)>"),dy:w("ai<q>"),er:w("ai<at>"),gk:w("ai<lD>"),j:w("ai<@>"),fK:w("bC<q,q>"),d2:w("bC<q,ai<ab<q,@>>>"),a:w("ab<q,@>"),f:w("ab<@,@>"),gv:w("N<q,IE>"),cM:w("N<H,q>"),w:w("kH"),g2:w("tR"),bV:w("aqi"),fL:w("cw"),K:w("aK"),dc:w("hO"),fo:w("PB<H>"),fz:w("+(q,q)"),ei:w("+scope,text(q,q)"),bn:w("+games,limit(Q,H)"),d9:w("+dx,hidden(G,ai<i5>)"),cs:w("+count,id,name(H,q,q)"),N:w("q"),fT:w("iD<i5>"),ec:w("iD<q>"),gW:w("rc<G>"),X:w("bt<G>"),bW:w("e2"),W:w("bl<q>"),b4:w("bl<H>"),cI:w("kj<q>"),av:w("Y<zI>"),cc:w("Y<q>"),l:w("w"),gF:w("fp"),fA:w("lD"),dO:w("GO"),bw:w("aeK<q?>"),cy:w("L6"),q:w("p6"),y:w("Q"),i:w("G"),z:w("@"),S:w("H"),eK:w("ai<kZ>?"),m:w("arH?"),cT:w("r?"),h5:w("+(q,q)?"),eo:w("+code,qrPayload,usesRemaining(q,q,H)?"),he:w("+qrPayload,token,usesRemaining(q,q,H)?"),gG:w("+members,trees,viewOnly(H,H,Q)?"),az:w("qp?"),T:w("q?"),aD:w("e2?"),o:w("lD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6H=new A.be(B.fV,B.bJ,B.fV,B.bJ)
D.afj=new A.be(B.fV,B.iv,B.fV,B.iv)
D.b6W=new A.be(B.jE,B.bJ,B.bJ,B.bJ)
D.b7_=new A.aw(B.cX,1.4,B.r,-1)
D.b79=new A.aw(B.ac,1,B.r,-1)
D.afP=new A.aY(140,1/0,0,1/0)
D.b8x=new A.aY(0,1/0,64,1/0)
D.b8B=new A.aY(0,84,0,1/0)
D.afW=new A.aY(130,1/0,0,1/0)
D.aEt=w([B.mg,B.t4,B.c],x.O)
D.cbn=new A.a8(B.ay,B.aC,B.x,D.aEt,null,null)
D.b9m=new A.n(null,null,null,null,null,D.cbn,B.m)
D.djI=w([B.aV,B.bQ],x.O)
D.cdy=new A.a8(B.aX,B.b4,B.x,D.djI,null,null)
D.b9H=new A.n(null,null,null,null,null,D.cdy,B.m)
D.Zi=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fF=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dnJ=w([B.dz,D.Zi,D.fF],x.O)
D.cay=new A.a8(B.aX,B.b4,B.x,D.dnJ,null,null)
D.bas=new A.n(null,null,null,null,null,D.cay,B.m)
D.fBE=new A.F(!0,B.bV,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcm=new A.C("?",null,D.fBE,null,null,null,null,null,null,null,null,null)
D.bei=new A.cl(B.z,null,null,D.hcm,null)
D.WM=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVi=new A.C("\ud83c\udf33",null,D.WM,null,null,null,null,null,null,null,null,null)
D.agG=new A.cl(B.z,null,null,D.fVi,null)
D.fXY=new A.C("\ud83c\udfc6",null,B.Ll,null,null,null,null,null,null,null,null,null)
D.bet=new A.cl(B.z,null,null,D.fXY,null)
D.bgj=new A.fm(null,null,null,null,null,B.kC,null,null,null,null)
D.agH=new A.cl(B.z,null,null,D.bgj,null)
D.kW=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fCc=new A.F(!0,D.kW,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWY=new A.C("No books on the shelf yet.",null,D.fCc,null,null,null,null,null,null,null,null,null)
D.ezz=new A.D(B.nQ,D.fWY,null)
D.beK=new A.cl(B.z,null,null,D.ezz,null)
D.fJn=new A.F(!0,D.fF,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hdi=new A.C("\ud83d\ude8c  On the road\u2026",null,D.fJn,null,null,null,null,null,null,null,null,null)
D.eA8=new A.D(B.cr,D.hdi,null)
D.bfc=new A.cl(B.z,null,null,D.eA8,null)
D.aYI=new A.C("\ud83e\uddfa",null,D.WM,null,null,null,null,null,null,null,null,null)
D.bfr=new A.cl(B.z,null,null,D.aYI,null)
D.h_r=new A.C("\ud83c\udfad",null,D.WM,null,null,null,null,null,null,null,null,null)
D.bfC=new A.cl(B.z,null,null,D.h_r,null)
D.bfF=new A.cl(B.z,null,null,R.Z4,null)
D.ah0=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ah7=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bhW=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bi0=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bic=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bie=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.big=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bio=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lM=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bis=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bix=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.biz=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.biA=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lN=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bjd=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.C4=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bjm=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bjG=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bjJ=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bjP=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bjX=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ahP=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bk3=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Zw=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ahS=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bke=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Zy=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bkz=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ai3=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bkY=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bld=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.blD=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.blO=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Gq=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bmc=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bmf=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bmj=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aiw=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bmB=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bmH=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bmO=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aiA=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bmX=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bnr=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bnC=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bnF=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bnL=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.aiQ=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bop=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aje=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bpo=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ajq=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bpO=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.GE=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bpW=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bq5=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bq7=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.aju=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bqp=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bqr=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bqu=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ajD=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_j=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bqT=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.brf=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.brk=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ajP=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.brs=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_p=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.brP=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.brQ=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.GN=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bsD=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.btf=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.btl=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.btp=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qA=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.btA=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.btE=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.btK=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.btM=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.akC=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.akG=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.GT=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a_L=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.akP=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bv_=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bvh=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bvK=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bvT=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ale=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a_X=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bw3=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bwk=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a02=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bwB=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bwS=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a06=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bwX=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.aly=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.alA=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bxf=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.alH=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bxI=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bxM=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bxT=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.by1=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bya=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.byM=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bzh=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fR6=new A.C("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bCN=new A.eS(null,D.fR6,B.fd,null,x.A)
D.h_i=new A.C("None",null,null,null,null,null,null,null,null,null,null,null)
D.bCP=new A.eS(null,D.h_i,B.fd,null,x.A)
D.bDl=new A.bf(38e5)
D.bE5=new A.iy(0,10,0,10)
D.bEe=new A.P(0,1,0,0)
D.bEp=new A.iy(0,4,0,4)
D.bEs=new A.P(0,4,5,0)
D.bEI=new A.P(10,10,14,10)
D.bET=new A.iy(10,4,10,4)
D.bF1=new A.iy(10,8,10,8)
D.bF2=new A.P(10,8,8,8)
D.bFw=new A.P(12,6,12,2)
D.bFO=new A.P(14,0,14,6)
D.bFS=new A.P(14,10,6,6)
D.bFT=new A.P(14,12,14,0)
D.bFX=new A.P(14,12,14,8)
D.bG_=new A.P(14,12,8,14)
D.bG3=new A.iy(14,14,14,14)
D.bGm=new A.P(14,6,14,40)
D.bGp=new A.P(14,8,14,30)
D.bGM=new A.P(16,2,16,10)
D.bGW=new A.P(16,6,16,30)
D.bGY=new A.P(16,6,16,8)
D.bHc=new A.P(18,10,18,4)
D.bHe=new A.P(18,12,18,0)
D.bHl=new A.P(18,14,12,4)
D.ao9=new A.P(18,16,18,8)
D.bHC=new A.P(18,20,18,22)
D.bHI=new A.P(18,30,18,30)
D.bI_=new A.P(20,10,12,20)
D.bI2=new A.P(20,11,20,11)
D.bIe=new A.P(20,18,16,18)
D.bIg=new A.P(20,18,20,6)
D.bJ5=new A.P(24,32,24,28)
D.bJ6=new A.P(24,36,24,32)
D.bJ9=new A.P(26,26,24,14)
D.bJo=new A.P(2,4,2,8)
D.bJs=new A.P(30,0,30,0)
D.bJD=new A.P(38,22,22,22)
D.aox=new A.P(40,24,24,24)
D.bJF=new A.iy(40,40,40,40)
D.bJH=new A.P(46,30,30,30)
D.bKa=new A.P(56,40,40,40)
D.bKe=new A.P(1.25,1.25,1.25,1.25)
D.bKf=new A.P(60,0,60,0)
D.bKj=new A.P(6,14,6,16)
D.bKn=new A.P(6,4,12,0)
D.bKr=new A.P(6,6,10,2)
D.bKy=new A.iy(7,3,7,3)
D.bL4=new A.P(5,1.5,5,1.5)
D.bLf=new A.P(6,2.5,6,2.5)
D.h7v=new A.C("Family Games",null,B.jX,null,null,null,null,null,null,null,null,null)
D.fPI=new A.C("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.WD,null,null,null,null,null,null,null,null,null)
D.cMS=w([D.h7v,D.fPI],x.p)
D.bAg=new A.fo(B.ah,B.e,B.h,B.D,null,B.p,null,0,D.cMS,null)
D.bLG=new A.bz(1,B.bd,D.bAg,null)
D.hbU=new A.C("Signature",null,B.nl,null,null,null,null,null,null,null,null,null)
D.bLJ=new A.bz(1,B.bd,D.hbU,null)
D.h42=new A.C("MADE BY THE ONE WHO PLANTED THE TREE",null,B.uc,null,null,null,null,null,null,null,null,null)
D.bMg=new A.bz(1,B.bd,D.h42,null)
D.h8Y=new A.C("Tell the AI what to fix",null,B.dn,null,null,null,null,null,null,null,null,null)
D.bMx=new A.bz(1,B.bd,D.h8Y,null)
D.fK9=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.haZ=new A.C("Worksheets",null,D.fK9,null,null,null,null,null,null,null,null,null)
D.fKl=new A.F(!0,B.ahw,null,null,null,null,13,B.cF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9P=new A.C("Track your project spending",null,D.fKl,null,null,null,null,null,null,null,null,null)
D.daN=w([D.haZ,B.av,D.h9P],x.p)
D.bzU=new A.fo(B.ah,B.e,B.h,B.D,null,B.p,null,0,D.daN,null)
D.bMD=new A.bz(1,B.bd,D.bzU,null)
D.fF3=new A.F(!0,B.kC,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQh=new A.C("FAMILY LIBRARY",null,D.fF3,null,null,null,null,null,null,null,null,null)
D.bMW=new A.bz(1,B.bd,D.fQh,null)
D.Pq=new C.IB("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wX=new C.IC(0,"male")
D.oI=new C.IC(1,"female")
D.zr=new C.IC(2,"unknown")
D.v1=new C.amI(0,"owner")
D.Pr=new C.amI(1,"editor")
D.l3=new C.amI(2,"viewer")
D.aqu=new A.a_(61199,"MaterialIcons",!1)
D.bSg=new A.a_(61504,"MaterialIcons",!1)
D.bSh=new A.a_(61505,"MaterialIcons",!1)
D.bSj=new A.a_(61587,"MaterialIcons",!1)
D.bSq=new A.a_(61890,"MaterialIcons",!1)
D.bTk=new A.a_(63034,"MaterialIcons",!0)
D.bTC=new A.a_(63153,"MaterialIcons",!1)
D.bU9=new A.a_(63429,"MaterialIcons",!1)
D.asy=new A.a_(984520,"MaterialIcons",!1)
D.bSP=new A.a_(62776,"MaterialIcons",!1)
D.bWy=new A.ae(D.bSP,26,B.b5,null,null,null)
D.bRe=new A.a_(57648,"MaterialIcons",!1)
D.bWS=new A.ae(D.bRe,14,B.c,null,null,null)
D.bX9=new A.ae(B.HU,17,null,null,null,null)
D.bXf=new A.ae(B.PW,null,B.bQ,null,null,null)
D.bXF=new A.ae(B.a3I,null,null,null,null,null)
D.bXI=new A.ae(B.ji,18,B.kC,null,null,null)
D.a3r=new A.a_(62044,"MaterialIcons",!1)
D.bXO=new A.ae(D.a3r,null,B.aV,null,null,null)
D.bXV=new A.ae(B.zE,18,B.c,null,null,null)
D.bYC=new A.ae(B.ea,16,null,null,null,null)
D.bYJ=new A.ae(D.a3r,32,B.aV,null,null,null)
D.bZ1=new A.ae(B.aqv,18,B.cX,null,null,null)
D.c_7=new A.ae(B.I4,22,B.aA,null,null,null)
D.c_k=new A.ae(B.ea,22,B.b5,null,null,null)
D.c_x=new A.ae(K.a3w,22,B.c,null,null,null)
D.c_E=new A.ae(B.vb,52,B.c,null,null,null)
D.c_P=new A.ae(B.I4,30,B.aA,null,null,null)
D.c08=new A.ae(B.a3M,null,B.c,null,null,null)
D.ath=new A.ae(B.vn,22,B.c,null,null,null)
D.c0h=new A.ae(B.ea,17,null,null,null,null)
D.c0F=new A.ae(B.xa,26,B.cX,null,null,null)
D.c1r=new A.ae(B.a3Y,16,null,null,null,null)
D.c2d=new A.ae(B.vb,24,B.c,null,null,null)
D.c2i=new A.ae(B.PU,20,B.tL,null,null,null)
D.c2n=new A.ae(B.HS,null,B.bQ,null,null,null)
D.c2w=new A.ae(B.ji,18,B.c,null,null,null)
D.c3c=new A.ae(B.cB,22,B.ac,null,null,null)
D.c45=new A.ae(B.ek,16,B.ac,null,null,null)
D.c4h=new A.ae(D.a3r,20,B.aV,null,null,null)
D.atI=new A.ae(B.hh,20,null,null,null,null)
D.c4P=new A.ae(B.cB,18,D.kW,null,null,null)
D.c56=new A.ae(B.zO,28,B.c,null,null,null)
D.c5i=new A.ae(B.PK,null,B.fi,null,null,null)
D.c5D=new A.ae(B.zO,24,B.c,null,null,null)
D.c64=new A.ae(B.vb,null,B.aV,null,null,null)
D.c65=new A.ae(B.jz,20,B.cX,null,null,null)
D.c6p=new A.ae(B.HU,16,null,null,null,null)
D.c7Y=new A.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eP,!0,null,null,null,null)
D.aur=new C.a6Z(10,null)
D.c8u=new C.a6Z(12,null)
D.c8v=new C.a6Z(14,null)
D.drQ=w([B.bv,B.aV,B.fs,B.b5],x.O)
D.c9F=new A.a8(B.ay,B.aC,B.x,D.drQ,null,null)
D.bsp=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.byT=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d7c=w([D.bsp,D.byT],x.O)
D.c9S=new A.a8(B.aX,B.b4,B.x,D.d7c,null,null)
D.dlI=w([B.ff,B.h0,B.fs],x.O)
D.c9Y=new A.a8(B.ay,B.aC,B.x,D.dlI,null,null)
D.akp=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.biB=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d9o=w([D.akp,D.biB],x.O)
D.caz=new A.a8(B.aX,B.b4,B.x,D.d9o,null,null)
D.bms=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aDK=w([D.bms,D.akp],x.O)
D.caT=new A.a8(B.ay,B.aC,B.x,D.aDK,null,null)
D.aj6=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bpf=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dkN=w([D.aj6,D.bpf],x.O)
D.cbz=new A.a8(B.a5,B.a9,B.x,D.dkN,null,null)
D.dz4=w([B.bE,B.nC],x.O)
D.cbB=new A.a8(B.aX,B.b4,B.x,D.dz4,null,null)
D.bsk=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dA1=w([D.bsk,D.kW,D.kW,E.NS],x.O)
D.dCG=w([0,0.07,0.9,1],x.n)
D.cc6=new A.a8(B.a5,B.a9,B.x,D.dA1,D.dCG,null)
D.ccf=new A.a8(B.ay,B.aC,B.x,B.TG,null,null)
D.d4V=w([B.aD,D.lM],x.O)
D.cci=new A.a8(B.a5,B.a9,B.x,D.d4V,null,null)
D.dyC=w([B.b5,B.aV,B.bQ],x.O)
D.cdl=new A.a8(B.ay,B.aC,B.x,D.dyC,null,null)
D.chH=w([10,20,30],x.t)
D.crG=w([-1,-0.4,0.3,1],x.n)
D.czb=w([B.bv,B.b5,B.ff],x.O)
D.czj=w([B.bi,B.aD,B.kB],x.O)
D.czl=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cA3=w([30,140,262,360],x.n)
D.bqA=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cFE=w([D.bqA,B.ajZ],x.O)
D.eud=new A.r(1,2)
D.fmY=new A.d8(B.b6,D.eud,3)
D.aAB=w([D.fmY],x.F)
D.cN8=w([B.hd,B.ce,B.fr],x.O)
D.cPV=w([B.bP,B.bz,B.bs],x.O)
D.bNM=new C.uU("classic","Classic leather","Gold-edged brown leather",D.aDK,B.kC,B.kC,"\u2766",B.K,!0,!1,!1,!1)
D.bhG=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bxy=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dcB=w([D.bhG,D.bxy],x.O)
D.ak1=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bNH=new C.uU("ornate","Ornate gold","Double gold border and flourishes",D.dcB,D.ak1,D.ak1,"\u2726",B.K,!0,!0,!0,!1)
D.blZ=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bt9=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d3L=w([D.blZ,D.bt9],x.O)
D.bNG=new C.uU("parchment","Parchment","Old paper with dark ink",D.d3L,D.GN,B.je,"\u2767",B.K,!0,!1,!1,!0)
D.ah9=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bvH=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dwL=w([D.ah9,D.bvH],x.O)
D.bq2=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.buU=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bNJ=new C.uU("minimal","Clean paper","Plain and elegant, like a printed book",D.dwL,D.bq2,D.buU,"",B.K,!0,!0,!1,!0)
D.bNL=new C.uU("midnight","Midnight","Deep blue with silver stars",B.aE3,B.cA,B.cg,"\u2727",B.K,!0,!0,!1,!1)
D.bNF=new C.uU("emerald","Emerald library","Green cloth, title on the left",H.aB0,B.kC,B.h2,"\u25c6",B.b7,!0,!1,!1,!1)
D.bwc=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.duK=w([B.eq,D.bwc],x.O)
D.brr=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bsI=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bNK=new C.uU("rose","Rose vintage","Burgundy with rose-gold lettering",D.duK,D.brr,D.bsI,"\u2740",B.K,!0,!1,!0,!1)
D.dzD=w([B.cu,B.n1],x.O)
D.bNI=new C.uU("modern","Modern","Dark, bold, left-aligned",D.dzD,B.aH,B.c,"",B.b7,!1,!0,!1,!1)
D.a60=w([D.bNM,D.bNH,D.bNG,D.bNJ,D.bNL,D.bNF,D.bNK,D.bNI],A.aE("U<uU>"))
D.cSW=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dzq=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bNX=new C.ls('What does "Ubuntu" mean?',D.dzq,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d5B=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bO_=new C.ls("In Swahili, what do we call a grandmother?",D.d5B,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d5t=w(["Babu","Mama","Baba","Dada"],x.s)
D.bNV=new C.ls("In Swahili, what do we call a grandfather?",D.d5t,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d6O=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bNZ=new C.ls("What is a sister called in Swahili?",D.d6O,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dc2=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bNW=new C.ls("What is a brother called in Swahili?",D.dc2,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d5s=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bO6=new C.ls("Which word means father in Swahili?",D.d5s,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dAC=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bO5=new C.ls('"Umoja ni nguvu" means...',D.dAC,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dxt=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bO7=new C.ls('"Haba na haba hujaza kibaba" teaches us...',D.dxt,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d9x=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bO4=new C.ls('The African saying "It takes a village to raise a child" means...',D.d9x,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dAV=w(["The elders","The market","The river","The drum"],x.s)
D.bO0=new C.ls("Who is the traditional keeper of the family stories?",D.dAV,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cXc=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bNY=new C.ls("Why do families sit round the fire at night?",D.cXc,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dzF=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bO2=new C.ls('What does "Harambee" mean?',D.dzF,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.deX=w(["An elder","A baby","A market","A cow"],x.s)
D.bO1=new C.ls('"Mzee" is a respectful word for...',D.deX,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.duA=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bO3=new C.ls('What does "Shikamoo" show?',D.duA,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aAW=w([D.bNX,D.bO_,D.bNV,D.bNZ,D.bNW,D.bO6,D.bO5,D.bO7,D.bO4,D.bO0,D.bNY,D.bO2,D.bO1,D.bO3],x.J)
D.d0B=w([90,360],x.n)
D.d3h=w([B.bQ,B.bp],x.O)
D.bs7=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d3X=w([D.ah9,D.bs7],x.O)
D.d4E=w([-1,-0.3,0.4,1],x.n)
D.d5y=w([0,0.45,0.72,0.92,1],x.n)
D.blV=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d5Q=w([D.blV,B.bA],x.O)
D.bjB=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.alR=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d6r=w([B.dz,D.bjB,D.alR],x.O)
D.d7t=w([B.bb,B.jr,B.pr],x.O)
D.bmu=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.buL=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bjh=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d7y=w([D.bmu,D.buL,D.bjh],x.O)
D.d7T=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d82=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hGU=new C.aeo(78,424,48,44,56)
D.hGS=new C.aeo(214,396,34,34,42)
D.hGT=new C.aeo(442,452,56,50,64)
D.aBV=w([D.hGU,D.hGS,D.hGT],A.aE("U<aeo>"))
D.d8B=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.biu=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.boo=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dCC=w([D.aj6,D.biu,D.boo],x.O)
D.bNN=new C.uV("leather","Leather",D.dCC,"vintage")
D.dfZ=w([B.dh,B.GC,B.ZN],x.O)
D.bNU=new C.uV("midnight","Midnight",D.dfZ,"starry")
D.d7u=w([B.ep,B.ed,B.lq],x.O)
D.bNT=new C.uV("forest","Forest",D.d7u,"story")
D.dEI=w([B.er,B.eq,B.kE],x.O)
D.bNQ=new C.uV("burgundy","Burgundy",D.dEI,"royal")
D.cPt=w([B.aD,B.mX,B.nt],x.O)
D.bNR=new C.uV("royal","Royal",D.cPt,"royal")
D.da3=w([B.bz,B.cu,B.n1],x.O)
D.bNO=new C.uV("charcoal","Charcoal",D.da3,"geo")
D.dCL=w([B.c9,B.dS,B.yH],x.O)
D.bNS=new C.uV("sunset","Sunset",D.dCL,"sunset")
D.dDx=w([B.jr,B.yK,B.ZR],x.O)
D.bNP=new C.uV("ocean","Ocean",D.dDx,"band")
D.Ah=w([D.bNN,D.bNU,D.bNT,D.bNQ,D.bNR,D.bNO,D.bNS,D.bNP],A.aE("U<uV>"))
D.daB=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.dbh=w([B.an,B.aL,B.a_],x.O)
D.dcG=w([B.eq,B.ed,B.dh,B.iT,B.yM,B.cX,B.k7,B.cP,B.d6],x.O)
D.dcH=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fmZ=new A.d8(B.dE,B.dO,8)
D.dcS=w([D.fmZ],x.F)
D.de3=w([B.c4,B.dS,B.k2],x.O)
D.bks=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.boH=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bt4=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.del=w([D.bks,B.aky,D.boH,D.bt4,D.alR],x.O)
D.deC=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.deN=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bhS=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bo1=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dfe=w([D.bhS,D.aiA,D.bo1],x.O)
D.dfU=w([B.c4,B.hO],x.O)
D.dg_=w([B.nv,B.il,B.ahl,B.cV],x.O)
D.dhC=w([B.cV,B.nv,B.il,D.lN,B.cV],x.O)
D.dif=w([B.aQ,B.yI,B.yy],x.O)
D.aCX=w(["True","False"],x.s)
D.eRz=new A.y(-0.65,0.6)
D.f3j=new A.y(-0.2,0.95)
D.f4q=new A.y(0.25,0.95)
D.eV3=new A.y(0.7,0.6)
D.f5_=new A.y(1,0.1)
D.dj1=w([S.Vu,D.eRz,D.f3j,D.f4q,D.eV3,D.f5_],x.G)
D.bqU=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bxq=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bls=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dj7=w([D.bqU,D.bxq,D.bls],x.O)
D.djc=w([B.bL,B.c_,B.dA,B.aQ],x.O)
D.djJ=w([B.hR,B.c9,B.uC],x.O)
D.dk6=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dkh=w([B.ff,B.cX],x.O)
D.bst=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dkI=w([D.bst,D.ah7],x.O)
D.dkU=w([B.cR,B.fP,B.h3],x.O)
D.dl5=w([B.aH,B.bp,B.dh],x.O)
D.dlF=w([B.ew,B.dr,B.ed],x.O)
D.dlZ=w([B.dX,B.dh,B.GC],x.O)
D.dm2=w([B.bt,B.mU,B.d6],x.O)
D.dmj=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.brG=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bpK=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dmE=w([D.brG,D.aiw,D.bpK],x.O)
D.dnt=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dow=w([1,0,7,6,3,2],x.t)
D.a6X=w(["leather","linen","plain","stars","rays"],x.s)
D.doH=w([0.5,2,3.6],x.n)
D.dpf=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bVR=new A.a_(983781,"MaterialIcons",!1)
D.aDq=w([B.PW,B.hI,B.kI,B.i6,B.asG,B.Ig,B.r_,D.bVR,B.asj,B.Dz,B.r2,B.mp],A.aE("U<a_>"))
D.a70=w(["double","single","corners","none"],x.s)
D.bNC=new C.zI("Little Seed","\ud83c\udf31",0)
D.bNE=new C.zI("Young Listener","\ud83d\udc42",40)
D.bND=new C.zI("Storyteller","\ud83e\ude98",120)
D.bNB=new C.zI("Village Pride","\ud83c\udfe1",300)
D.bNz=new C.zI("Keeper of Roots","\ud83c\udf33",700)
D.bNA=new C.zI("Elder of the Fire","\ud83d\udd25",1500)
D.aDs=w([D.bNC,D.bNE,D.bND,D.bNB,D.bNz,D.bNA],A.aE("U<zI>"))
D.dqq=w([B.cW,B.bh,B.cP],x.O)
D.dqG=w([],x.C)
D.E8=w([],x.u)
D.aNC=new A.r(225,528)
D.eTf=new A.y(D.aNC,1)
D.euZ=new A.r(350,548)
D.eZw=new A.y(D.euZ,0.95)
D.aNw=new A.r(158,656)
D.eZp=new A.y(D.aNw,1.12)
D.evM=new A.r(92,544)
D.eOO=new A.y(D.evM,0.93)
D.ev1=new A.r(398,614)
D.eVq=new A.y(D.ev1,1.04)
D.euQ=new A.r(318,662)
D.eK8=new A.y(D.euQ,1.1)
D.a78=w([D.eTf,D.eZw,D.eZp,D.eOO,D.eVq,D.eK8],A.aE("U<+(r,G)>"))
D.dsH=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dtb=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dug=w([B.cV,B.nv,B.il,D.lN,B.cV,B.il],x.O)
D.dvG=w([B.at,B.fP,B.iT],x.O)
D.dwl=w([-70,58],x.n)
D.dwn=w([-70,-30,20],x.n)
D.dxq=w([B.bt,B.mU,B.a_Y],x.O)
D.dxI=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dTK=new C.lT("construction","Construction","Jobsite & builds",B.r1)
D.dTR=new C.lT("house","Home Build","Houses & rooms",B.vd)
D.dTH=new C.lT("grocery","Grocery","Store & pantry",B.a4w)
D.dTG=new C.lT("calculator","Calculations","Math & estimates",B.Q1)
D.dTP=new C.lT("lumber","Materials","Lumber & supplies",B.Id)
D.dTD=new C.lT("kitchen","Kitchen","Remodel & meals",N.Ql)
D.bVP=new A.a_(983756,"MaterialIcons",!1)
D.dTI=new C.lT("landscape","Landscaping","Yard & garden",D.bVP)
D.dTC=new C.lT("plumbing","Plumbing","Pipes & water",B.pO)
D.dTS=new C.lT("electrical","Electrical","Wiring & power",B.hs)
D.dTA=new C.lT("store","Retail Shop","Daily business",B.kl)
D.dTB=new C.lT("paint_remodel","Paint & Remodel","Colors & walls",N.Qh)
D.bVa=new A.a_(983311,"MaterialIcons",!1)
D.dTO=new C.lT("roofing","Roofing","Roofs & exteriors",D.bVa)
D.bW_=new A.a_(983986,"MaterialIcons",!1)
D.dTz=new C.lT("warehouse","Warehouse","Storage & stock",D.bW_)
D.dTM=new C.lT("vehicles","Vehicles","Fleet & transport",B.Dv)
D.bSR=new A.a_(62785,"MaterialIcons",!1)
D.dTF=new C.lT("farm","Farm","Crops & livestock",D.bSR)
D.dTE=new C.lT("restaurant","Restaurant","Food & catering",B.vk)
D.dTL=new C.lT("tools","Tools","Workshop gear",B.Dr)
D.dTQ=new C.lT("wallet","Cash & Wallet","Quick spending",B.jz)
D.dTN=new C.lT("concrete","Concrete","Foundation work",B.arq)
D.dTJ=new C.lT("blueprint","Blueprint","Plans & design",B.aqZ)
D.a7x=w([D.dTK,D.dTR,D.dTH,D.dTG,D.dTP,D.dTD,D.dTI,D.dTC,D.dTS,D.dTA,D.dTB,D.dTO,D.dTz,D.dTM,D.dTF,D.dTE,D.dTL,D.dTQ,D.dTN,D.dTJ],A.aE("U<lT>"))
D.dyg=w([B.bu,B.bh],x.O)
D.dz5=w([B.iB,B.oq,B.dW],x.O)
D.ajk=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.akk=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bq6=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bhl=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aEB=w([D.ajk,D.akk,D.bq6,D.bhl],x.O)
D.dAi=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a7H=w(["top","middle","bottom"],x.s)
D.dBN=w([B.ct,B.bp,B.dh],x.O)
D.aEV=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.baW=new A.ac(0,B.H,B.b6,B.J,14)
D.aEZ=w([D.baW],x.V)
D.boW=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dCv=w([D.ahP,D.a_X,D.boW],x.O)
D.dCw=w([B.be,B.dr,B.ed],x.O)
D.euz=new A.r(24,-8)
D.evh=new A.r(48,0)
D.euv=new A.r(24,6)
D.dEf=w([B.J,D.euz,D.evh,D.euv],x.g)
D.dEE=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.er0={top:0,middle:1,bottom:2}
D.dHU=new A.bq(D.er0,["Top","Middle","Bottom"],x.r)
D.eqA={double:0,single:1,corners:2,none:3}
D.dI_=new A.bq(D.eqA,["Double line","One line","Corners","None"],x.r)
D.erP={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dJE=new A.bq(D.erP,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dJQ=new A.bq(B.i9,[],A.aE("bq<H,+(q,q)>"))
D.eqS={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Eo=new A.bq(D.eqS,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aE("bq<q,H>"))
D.dO8=new A.O4(32,null)
D.dO9=new A.O4(40,null)
D.dOa=new A.O4(46,null)
D.aN4=new C.auJ(null)
D.etq=new A.r(0,40)
D.etr=new A.r(0,412)
D.etu=new A.r(0,900)
D.etD=new A.r(0,-34)
D.etE=new A.r(0,-46)
D.etG=new A.r(0,-74)
D.etJ=new A.r(100,300)
D.etK=new A.r(10,14)
D.etN=new A.r(10,-10)
D.etS=new A.r(10,-46)
D.etT=new A.r(10,-58)
D.etU=new A.r(116,442)
D.etW=new A.r(11,-1)
D.etX=new A.r(11,-10)
D.etY=new A.r(11,-21)
D.aNr=new A.r(11,-60)
D.eu4=new A.r(14,-2)
D.eu5=new A.r(150,520)
D.a9S=new A.r(150,592)
D.eu8=new A.r(15,-15)
D.eu9=new A.r(16,-1)
D.euc=new A.r(190,444)
D.euf=new A.r(1,5)
D.eun=new A.r(21,-78)
D.euo=new A.r(222,615)
D.Ka=new A.r(225,300)
D.a9U=new A.r(225,574)
D.euy=new A.r(24,-52)
D.euA=new A.r(250,210)
D.euL=new A.r(2,-56)
D.aNG=new A.r(300,0)
D.euM=new A.r(300,440)
D.euP=new A.r(318,476)
D.euS=new A.r(324,144)
D.a9X=new A.r(332,150)
D.euU=new A.r(335,585)
D.euV=new A.r(338,140)
D.euW=new A.r(340,158)
D.euY=new A.r(34,-60)
D.EQ=new A.r(36,-24)
D.ev_=new A.r(372,470)
D.ev0=new A.r(390,455)
D.ev9=new A.r(42,468)
D.eva=new A.r(431,510)
D.evb=new A.r(431,520)
D.evc=new A.r(45,-92)
D.evd=new A.r(46,20)
D.eve=new A.r(46,-92)
D.evf=new A.r(46,-94)
D.evg=new A.r(47,-4)
D.evi=new A.r(48,-4)
D.evq=new A.r(4,-26)
D.evy=new A.r(60,455)
D.evH=new A.r(8,14)
D.evL=new A.r(8,-76)
D.evN=new A.r(95,575)
D.evO=new A.r(98,-24)
D.evQ=new A.r(9,-2)
D.evR=new A.r(9,-58)
D.aNP=new A.r(9,-79)
D.evS=new A.r(9,-9)
D.ewu=new A.r(16.5,8)
D.eww=new A.r(3.2,0)
D.ewx=new A.r(-16.5,8)
D.ewE=new A.r(16.5,2)
D.ewH=new A.r(-3.2,0)
D.ewP=new A.r(9.5,6)
D.ewS=new A.r(-10,14)
D.ewT=new A.r(-10,-12)
D.ewU=new A.r(-10,-58)
D.ewW=new A.r(-11,-10)
D.ewY=new A.r(-11,-60)
D.ewZ=new A.r(-12,-14)
D.ex_=new A.r(-12,-16)
D.ex4=new A.r(-14,-2)
D.ex7=new A.r(-15,-15)
D.ex8=new A.r(-15,-3)
D.exa=new A.r(-16,-1)
D.exq=new A.r(-24,-52)
D.exz=new A.r(-2,-34)
D.exA=new A.r(-2,-38)
D.exC=new A.r(-30,-100)
D.a9Z=new A.r(-36,-24)
D.exN=new A.r(-4,-26)
D.exP=new A.r(-4,-6)
D.exY=new A.r(-8,-3)
D.exZ=new A.r(-8,-48)
D.ey1=new A.r(-9,-2)
D.ey3=new A.r(-9,-58)
D.ey4=new A.r(-9,-79)
D.ey5=new A.r(-9,-9)
D.ey7=new A.r(-9.5,6)
D.eyk=new A.r(-16.5,2)
D.fXE=new A.C("Write a new book",null,B.hm,null,B.K,null,null,null,null,null,null,null)
D.eyU=new A.D(B.l1,D.fXE,null)
D.hbs=new A.C("Tap to go on",null,B.vZ,null,null,null,null,null,null,null,null,null)
D.ezf=new A.D(B.ls,D.hbs,null)
D.asQ=new A.ae(B.i5,18,B.c,null,null,null)
D.fQD=new A.C("Add",null,B.kO,null,null,null,null,null,null,null,null,null)
D.djq=w([D.asQ,B.ro,D.fQD],x.p)
D.fk2=new A.c6(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.djq,null)
D.ezi=new A.D(B.nN,D.fk2,null)
D.ezk=new A.D(B.amZ,R.Z4,null)
D.fK4=new A.F(!0,B.c,null,null,null,null,13.5,B.G,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTQ=new A.C("New Project",null,D.fK4,null,null,null,null,null,null,null,null,null)
D.dnR=w([D.asQ,B.ab,D.fTQ],x.p)
D.fk5=new A.c6(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dnR,null)
D.ezy=new A.D(B.hW,D.fk5,null)
D.fWn=new A.C("Choose your header",null,B.u9,null,null,null,null,null,null,null,null,null)
D.ezT=new A.D(B.i4,D.fWn,null)
D.bgz=new A.fm(2.2,null,null,null,null,B.cX,null,null,null,null)
D.fpS=new A.a5(22,22,D.bgz,null)
D.beF=new A.cl(B.z,null,null,D.fpS,null)
D.ezY=new A.D(B.a1i,D.beF,null)
D.bGe=new A.P(14,2,14,6)
D.h9y=new A.C("The top of your book. Tap a design to see it.",null,B.ua,null,null,null,null,null,null,null,null,null)
D.ezZ=new A.D(D.bGe,D.h9y,null)
D.fVx=new A.C("\ud83c\udfc6 A new record!",null,B.hb,null,null,null,null,null,null,null,null,null)
D.eA0=new A.D(B.ls,D.fVx,null)
D.eBz=new A.jf(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eBC=new A.jf(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aOr=new A.jf(1,0.9607843137254902,0.48627450980392156,0)
D.Ki=new A.jf(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.AS=new A.jf(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eBI=new A.jf(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hIW=new C.bkw(null)
D.bB2=new A.mD(D.hIW,null,B.az,null,null)
D.aS4=new A.cL(0,0,0,0,null,null,D.bB2,null)
D.fQF=new A.C("\ud83c\udfc5",null,B.acg,null,null,null,null,null,null,null,null,null)
D.eG7=new A.cL(null,0,-34,null,null,null,D.fQF,null)
D.eOs=new A.y("E","Sit by the fire again")
D.eU3=new A.y("C","Good Learner")
D.eXu=new A.y("D","Still Growing")
D.f15=new A.y(-42,42)
D.f2s=new A.y("B","Faithful Listener")
D.f4s=new A.y("A","Keeper of the Family")
D.f7B=new A.b3(-17,0.7,0)
D.f89=new A.b3(-8,0.95,1.3)
D.f9f=new A.b3(18,0.65,5.2)
D.f9h=new A.b3(0,1.15,2.6)
D.f9C=new A.b3(9,0.9,3.9)
D.fbz=new A.b7([0,0,1,1])
D.aTB=new A.a2(0,0,520,160)
D.fh5=new A.a2(10,612,440,618)
D.fh6=new A.a2(10,612,440,628)
D.fh9=new A.a2(14,-64,34,-12)
D.fhc=new A.a2(300,336,350,348)
D.aaT=new A.a2(30,96,420,346)
D.fhd=new A.a2(30,-9,46,1)
D.fhe=new A.a2(4,2,11,14)
D.fhg=new A.a2(-8,-12.5,8,-7)
D.fhh=new A.a2(-16.5,-21,16.5,1)
D.fhi=new A.a2(60,342,88,348)
D.Vv=new A.a2(66,-66,94,-36)
D.fhj=new A.a2(6,8,10,14)
D.fhm=new A.a2(95,343,115,348)
D.fhn=new A.a2(-6.5,-74,6.5,-58)
D.fht=new A.a2(-100,-74,100,-12)
D.fhu=new A.a2(-10,8,-6,14)
D.fhv=new A.a2(-11,2,-4,14)
D.fhw=new A.a2(-11,-70,11,-56)
D.fhD=new A.a2(-13,-24,13,-4)
D.fhK=new A.a2(-15,-21,15,0)
D.fhN=new A.a2(-16,-21,16,1)
D.fhO=new A.a2(-16,-21,16,2)
D.fhR=new A.a2(-16,-26,16,-6)
D.fhZ=new A.a2(-230,-26,230,26)
D.fin=new A.a2(-38,-26,12,-6)
D.fir=new A.a2(-3,-70,3,-63)
D.fis=new A.a2(-44,-22,44,0)
D.fiu=new A.a2(-46,-9,-30,1)
D.aTF=new A.a2(-80,-190,80,20)
D.fiB=new A.a2(-8,-26,40,-6)
D.fiC=new A.a2(-98,-80,92,-75)
D.fiD=new A.a2(-9,-15,9,-9)
D.h94=new A.C("Let the AI write it from your tree",null,B.iP,null,B.K,null,null,null,null,null,null,null)
D.bOH=new A.dc(1,B.ck,D.h94,null)
D.dfT=w([B.a5_,B.ab,D.bOH],x.p)
D.fjH=new A.c6(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.dfT,null)
D.fQi=new A.C("Save member",null,B.cd,null,null,null,null,null,null,null,null,null)
D.dw5=w([D.atI,B.ab,D.fQi],x.p)
D.fjR=new A.c6(B.aM,B.b9,B.h,B.l,null,B.p,null,0,D.dw5,null)
D.c_q=new A.ae(B.ip,14,B.b5,null,null,null)
D.fDz=new A.F(!0,B.b5,null,null,null,null,12,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUg=new A.C("Cashier",null,D.fDz,null,null,null,null,null,null,null,null,null)
D.don=w([D.c_q,B.bm,D.fUg],x.p)
D.fjV=new A.c6(B.aM,B.e,B.N,B.l,null,B.p,null,0,D.don,null)
D.fQj=new A.C("Transfer & settings",null,B.dn,null,null,null,null,null,null,null,null,null)
D.bMn=new A.bz(1,B.bd,D.fQj,null)
D.d6X=w([D.ath,B.as,D.bMn],x.p)
D.fjW=new A.c6(B.aM,B.e,B.h,B.l,null,B.p,null,0,D.d6X,null)
D.fox=new A.au(16,40)
D.foC=new A.au(22,64)
D.foJ=new A.au(280,88)
D.fpx=new A.a5(30,null,null,null)
D.fPo=new A.C("The teacher is writing\u2026",null,B.Be,null,null,null,null,null,null,null,null,null)
D.bfL=new A.cl(B.z,null,null,D.fPo,null)
D.hCQ=new A.bl("w",x.W)
D.fpW=new A.a5(null,56,D.bfL,D.hCQ)
D.fqJ=new A.hP(5,8,8,1,null)
D.fqR=new A.hP(2,12,12,1.05,null)
D.fTW=new A.C("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.frB=new A.b0(D.fTW,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fUb=new A.C("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aVZ=new A.b0(D.fUb,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h1H=new A.C("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fs4=new A.b0(D.h1H,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hcv=new A.C("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fs9=new A.b0(D.hcv,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fWl=new A.C("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fsg=new A.b0(D.fWl,null,null,null,null,null,null,null,null,null,null,null,null,B.fR,!1,null,null,null,B.t,null)
D.h9L=new A.C("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aW3=new A.b0(D.h9L,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fWj=new A.C("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fsG=new A.b0(D.fWj,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fQW=new A.C("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fsI=new A.b0(D.fQW,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h_6=new A.C("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fsO=new A.b0(D.h_6,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hdf=new A.C("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.ftu=new A.b0(D.hdf,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h7Z=new A.C("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.ftU=new A.b0(D.h7Z,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.hcz=new A.C("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.ftX=new A.b0(D.hcz,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h3k=new A.C("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.ftZ=new A.b0(D.h3k,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYg=new A.C("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fu_=new A.b0(D.fYg,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fYh=new A.C("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fv0=new A.b0(D.fYh,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fTY=new A.C("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fvi=new A.b0(D.fTY,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fVZ=new A.C("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fvC=new A.b0(D.fVZ,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.h2O=new A.C("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fvT=new A.b0(D.h2O,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fZ5=new A.C("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fvU=new A.b0(D.fZ5,null,null,null,null,null,null,null,null,null,null,null,null,B.Y,!1,null,null,null,B.t,null)
D.fIL=new A.F(!0,B.bD,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxs=new A.es("\u2665",null,null,B.cM,null,null,null,null,null,null,D.fIL)
D.fFU=new A.F(!0,B.aS,null,null,null,null,28,B.O,B.cK,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxI=new A.es("Today: how well do you know the family?",null,null,B.cM,null,null,null,null,null,null,D.fFU)
D.fxZ=new A.F(!0,B.qo,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fza=new A.F(!0,D.kW,null,null,null,null,13,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzx=new A.F(!0,D.kW,null,null,null,null,12,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzB=new A.F(!0,B.cV,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzK=new A.F(!0,D.fF,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzV=new A.F(!0,D.fF,null,null,null,null,13,B.G,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAe=new A.t8(!0,B.tX,null,null,null,null,B.dG,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAu=new A.F(!0,B.cV,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAy=new A.F(!0,D.kW,null,null,null,null,18,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAz=new A.F(!0,B.cV,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAE=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAH=new A.F(!0,B.cV,null,null,null,null,15,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBc=new A.F(!0,B.b5,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBd=new A.F(!0,B.ac,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBf=new A.F(!0,B.aS,null,null,null,null,15.5,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBG=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXi=new A.F(!0,B.aR,null,null,null,null,null,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXj=new A.F(!0,D.lM,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC5=new A.F(!0,B.cV,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acl=new A.t8(!0,B.V1,null,null,null,null,B.dG,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Wo=new A.F(!0,B.cV,null,null,null,null,null,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCf=new A.F(!0,B.a_,null,null,null,null,12.5,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCk=new A.F(!0,D.fF,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCJ=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDU=new A.F(!0,D.fF,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXt=new A.F(!0,D.fF,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEd=new A.F(!0,B.ac,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEp=new A.F(!0,D.fF,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEr=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEx=new A.F(!0,B.je,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXx=new A.F(!0,D.fF,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFu=new A.F(!0,D.fF,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFN=new A.F(!0,D.fF,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFP=new A.F(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFR=new A.F(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGe=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,Q.Ja,null,null,null)
D.aXL=new A.F(!0,D.fF,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGD=new A.F(!0,B.a_,null,null,null,null,17,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGZ=new A.F(!0,B.fi,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHm=new A.F(!0,B.bQ,null,null,null,null,8,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHr=new A.F(!0,B.bE,null,null,null,null,11,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHD=new A.F(!0,B.c,null,null,null,null,13.5,B.G,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHG=new A.F(!0,D.fF,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHO=new A.F(!0,D.GN,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI_=new A.F(!0,B.b5,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIo=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIv=new A.F(!0,B.ac,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.E0,null,null,null)
D.fIW=new A.F(!0,B.cV,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ3=new A.F(!0,B.cX,null,null,null,null,13,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJg=new A.F(!0,D.lN,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aY7=new A.F(!0,D.fF,null,null,null,null,null,B.G,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Lt=new A.F(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aY9=new A.F(!0,B.cV,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.E0,null,null,null)
D.fJB=new A.F(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJF=new A.F(!0,B.nv,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK2=new A.F(!0,B.b5,null,null,null,null,13,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKk=new A.F(!0,D.fF,null,null,null,null,15,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKI=new A.F(!0,B.c,null,null,null,null,null,B.G,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL6=new A.F(!0,D.fF,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLC=new A.F(!0,D.fF,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLH=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLR=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acP=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acS=new A.F(!0,D.lM,null,null,null,null,null,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNB=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNW=new A.F(!0,B.aS,null,null,null,null,27,B.O,B.cK,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO2=new A.F(!0,B.je,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOa=new A.F(!0,B.je,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOE=new A.C("Time:",null,B.hx,null,null,null,null,null,null,null,null,null)
D.fP_=new A.C("\ud83c\udfae",null,B.acF,null,null,null,null,null,null,null,null,null)
D.fP0=new A.C("Themes",null,B.q6,null,null,null,null,null,null,null,null,null)
D.fPw=new A.C("\ud83c\udfb2",null,B.xV,null,null,null,null,null,null,null,null,null)
D.fPA=new A.C("Delete this game?",null,B.iP,null,null,null,null,null,null,null,null,null)
D.fPH=new A.C("Add Item",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fE7=new A.F(!0,B.a_,null,null,null,null,22,B.G,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ7=new A.C("Debt receipt",null,D.fE7,null,B.K,null,null,null,null,null,null,null)
D.aYn=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQq=new A.C("Person who owes",null,D.aYn,null,null,null,null,null,null,null,null,null)
D.fRp=new A.C("Notes",null,B.acv,null,null,null,null,null,null,null,null,null)
D.fRQ=new A.C("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fD0=new A.F(!0,B.c,null,null,null,null,11,B.G,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRS=new A.C("Share",null,D.fD0,null,null,null,null,null,null,null,null,null)
D.fST=new A.C("Move your family trees",null,E.acM,null,null,null,null,null,null,null,null,null)
D.fTx=new A.C("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fUa=new A.C("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fUy=new A.C("SAVE",null,D.Lt,null,null,null,null,null,null,null,null,null)
D.fVb=new A.C("The round button is the right answer.",null,B.Bi,null,null,null,null,null,null,null,null,null)
D.fVw=new A.C("Remove this book?",null,B.hb,null,null,null,null,null,null,null,null,null)
D.fK_=new A.F(!0,B.cV,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,E.E0,null,null,null)
D.fW3=new A.C("Fireside Stories",null,D.fK_,null,null,null,null,null,null,null,null,null)
D.aYR=new A.C("Download",null,B.cd,null,null,null,null,null,null,null,null,null)
D.fWK=new A.C("What should the AI do?",null,B.dn,null,null,null,null,null,null,null,null,null)
D.fCE=new A.F(!0,D.lM,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWZ=new A.C("REPORT CARD",null,D.fCE,null,null,null,null,null,null,null,null,null)
D.fXL=new A.C("Calabash Catch",null,B.WN,null,null,null,null,null,null,null,null,null)
D.fYc=new A.C("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fYD=new A.C("\ud83c\udfe1",null,B.Fl,null,null,null,null,null,null,null,null,null)
D.fZk=new A.C("Ribbon bookmark",null,B.jI,null,null,null,null,null,null,null,null,null)
D.fLB=new A.F(!0,B.b5,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZP=new A.C("NGMY.ORG",null,D.fLB,null,B.K,null,null,null,null,null,null,null)
D.h09=new A.C("Scan family tree QR",null,B.cH,null,null,null,null,null,null,null,null,null)
D.fHH=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0X=new A.C("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fHH,null,B.K,null,null,null,null,null,null,null)
D.h2a=new A.C("Delete",null,B.Wi,null,null,null,null,null,null,null,null,null)
D.h2b=new A.C("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.h2j=new A.C("Thumbnail",null,B.q6,null,null,null,null,null,null,null,null,null)
D.h2T=new A.C("Save the cover",null,B.cH,null,null,null,null,null,null,null,null,null)
D.h2Y=new A.C("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.Bm,null,B.K,null,null,null,null,null,null,null)
D.h3l=new A.C("Your photos",null,B.q6,null,null,null,null,null,null,null,null,null)
D.h3B=new A.C("Create Project",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h3Y=new A.C("\u2b50 stars",null,B.Wy,null,null,null,null,null,null,null,null,null)
D.h4b=new A.C("Design your cover",null,B.u9,null,null,null,null,null,null,null,null,null)
D.h4h=new A.C("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.h4k=new A.C("PICTURE",null,F.w1,null,null,null,null,null,null,null,null,null)
D.h4m=new A.C("\ud83c\udfaf",null,D.WM,null,null,null,null,null,null,null,null,null)
D.h4J=new A.C("Paid",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h4L=new A.C("You can undo it right after.",null,B.Bi,null,null,null,null,null,null,null,null,null)
D.h5j=new A.C("Print",null,B.w_,null,null,null,null,null,null,null,null,null)
D.h5J=new A.C("Amount owed",null,D.aYn,null,null,null,null,null,null,null,null,null)
D.h5Y=new A.C("Got it",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h6z=new A.C("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.h6C=new A.C("Add to budget",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h71=new A.C("Debtor signature",null,B.acv,null,null,null,null,null,null,null,null,null)
D.h7b=new A.C("Change icon",null,B.acu,null,null,null,null,null,null,null,null,null)
D.h8_=new A.C("MADE BY THE SYSTEM, FROM YOUR TREE",null,B.uc,null,null,null,null,null,null,null,null,null)
D.h8r=new A.C("Family tree QR",null,B.cH,null,null,null,null,null,null,null,null,null)
D.h8x=new A.C("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.WL,null,null,null,null,null,null,null,null,null)
D.h8V=new A.C("Download",null,B.w_,null,null,null,null,null,null,null,null,null)
D.h8W=new A.C("The person who planted this tree has not made a game yet.",null,B.Bk,null,null,null,null,null,null,null,null,null)
D.h9_=new A.C("Change",null,B.q6,null,null,null,null,null,null,null,null,null)
D.h9R=new A.C("Clear all",null,B.cd,null,null,null,null,null,null,null,null,null)
D.h9U=new A.C("WHAT SHOULD IT CHANGE?",null,F.w1,null,null,null,null,null,null,null,null,null)
D.har=new A.C("COLOUR",null,F.w1,null,null,null,null,null,null,null,null,null)
D.haG=new A.C("Do it",null,B.cH,null,null,null,null,null,null,null,null,null)
D.haK=new A.C("Create Tree",null,B.cd,null,null,null,null,null,null,null,null,null)
D.haU=new A.C("Give me another clue",null,D.Lt,null,null,null,null,null,null,null,null,null)
D.hbO=new A.C("Create Family Tree",null,B.fb,null,null,null,null,null,null,null,null,null)
D.hbY=new A.C("THE TEACHER EXPLAINS THESE",null,B.uc,null,null,null,null,null,null,null,null,null)
D.fxY=new A.F(!0,B.kC,null,null,null,null,null,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hc3=new A.C("Write the first page myself",null,D.fxY,null,null,null,null,null,null,null,null,null)
D.hcC=new A.C("Use this header",null,B.cH,null,null,null,null,null,null,null,null,null)
D.hcJ=new A.C("Create Project",null,B.aY3,null,null,null,null,null,null,null,null,null)
D.hEj=new C.ad1(1,"header")
D.adT=new C.ad1(2,"projects")
D.hEk=new C.ad1(3,"cashier")
D.adU=new C.ad1(4,"familyTree")
D.hRV=new C.cI1(0,"start")
D.hRW=new C.cI2(0,"start")
D.hEx=new C.a_4(null)
D.hFy=new C.a_y(null)
D.dJN=new A.bq(B.i9,[],A.aE("bq<q,GO>"))
D.dr4=w([],x.dE)
D.dr5=w([],x.M)
D.hGc=new C.bhI(D.dJN,D.dr4,D.dr5,0,0,null,null)
D.b2m=new C.a0o(0,"intro")
D.b2n=new C.a0o(1,"countdown")
D.ae6=new C.a0o(2,"ask")
D.XJ=new C.a0o(3,"reveal")
D.b2o=new C.a0o(4,"end")
D.hIY=new C.tg(B.GW,D.lN,B.cV,B.md,5,!1,!1,!1,0,null)
D.hJ0=new C.tg(B.GW,B.er,B.cV,B.bO,2,!0,!0,!1,2,B.cV)
D.hJ2=new C.tg(B.qC,B.cX,B.cV,B.md,2,!0,!1,!1,2,B.at)
D.hJ3=new C.tg(B.GW,B.dX,B.cV,B.md,5,!1,!1,!1,1,null)
D.hJ5=new C.tg(B.a0d,D.akk,B.cV,B.md,4,!0,!1,!0,0,null)
D.b2r=new C.tg(B.a0d,B.dS,B.cV,B.md,3,!0,!1,!0,2,null)
D.b2s=new C.tg(B.t6,D.lN,B.c,B.md,0,!1,!1,!0,0,null)
D.b2t=new C.tg(B.qC,B.aD,B.cV,B.bO,2,!0,!0,!1,2,B.dS)
D.b2u=new C.tg(B.qC,B.nv,B.il,B.md,5,!1,!1,!0,3,null)
D.hJ9=new C.tg(B.qC,B.dS,B.cV,B.md,0,!0,!1,!1,0,B.aD)
D.b2v=new C.tg(B.GW,B.er,B.cV,B.bO,1,!1,!0,!1,1,null)
D.b2w=new C.tg(B.Gs,B.at,B.aD,B.md,4,!0,!1,!0,2,null)
D.hJb=new C.tg(B.t6,B.at,B.er,B.md,3,!0,!1,!1,0,null)
D.hJd=new C.tg(B.qC,B.dX,B.cV,B.bO,1,!1,!0,!1,1,null)
D.hJe=new C.tg(B.Gs,D.ajk,B.c,B.md,5,!1,!1,!0,0,null)
D.hJT=new C.a0W(null)
D.hS3=new C.agr(0,"still")
D.Y5=new C.agr(1,"walk")
D.b2X=new C.agr(2,"pound")
D.b2Y=new C.agr(3,"drum")
D.hNy=new C.a2c(0,"greet")
D.b2Z=new C.a2c(1,"teach")
D.aeq=new C.a2c(2,"ask")
D.hNz=new C.a2c(3,"feedback")
D.b3_=new C.a2c(4,"end")
D.Yc=new C.a2v(0,"intro")
D.Yd=new C.a2v(1,"asking")
D.BC=new C.a2v(2,"reacting")
D.aeB=new C.a2v(3,"driving")
D.aeC=new C.a2v(4,"arrived")
D.aeK=new C.aMn(0,"projects")
D.b3p=new C.aMn(1,"cashier")
D.hPE=new C.aMn(2,"familyTree")})()};
(a=>{a["tUBKi4WTXoRpIe0MWB4l9VZrrm8="]=a.current})($__dart_deferred_initializers__);