((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A9,S,Z,Aa,P,A_,T,M,Ab,L,A0,U,H,E,Ac,V,Ad,A1,Ae,Af,Ag,Ah,Ai,Q,Aj,Ak,N,A2,Al,A3,A4,A5,W,A6,Am,An,Ao,G,Ap,Aq,Ar,A7,As,At,Au,Av,X,O,F,Aw,I,A8,K,Ax,Y,R,Ay,C={
bJt(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bJt=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uZ(null,""),$async$bJt)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nl(b1)
s=A.c4(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dr(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cW(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.T.au(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qZ(t,a1,B.i7,"book",E.HP),$async$bJt)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Sr(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.aa(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A.HZ(l)?y.k:y.y)
for(j=J.a0(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cG
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a55(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJt,v)},
ajI(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ajI=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uZ(null,""),$async$ajI)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nl(b6)
s=x.S
r=A.cH(c1,0,A.dy(4,"count",s),A.T(c1).c)
q=H.a4O(new A.O(r,new C.h1f(),r.$ti.k("O<aj.E,o>")).aJ(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.h1e(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.T.au(b7,null)+"\nAllowed values: style one of "+B.d.aJ(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ajI)
case 6:l=c5
k=H.Sr(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.arA(s,D.dRo,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.Y("There is no page to change.")
h=A.S(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dr(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.T.au(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ajI)
case 10:l=c5
k=l==null?null:H.Sr(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cL(a8,d),a5=J.aM(a2.a),a2=a2.$ti,a7=new A.jB(a5,a2.k("jB<1>")),a2=a2.c;a7.A();){a9=a2.a(a5.gO(a5))
b0=J.a0(a9)
b1=A.aK(b0.h(a9,"index"))
i=b1==null?null:B.h.L(b1)
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
case 9:if(h.a!==0){s=h.$ti.k("ba<2>")
p=A.ct(new A.ba(h,s),new C.h1g(),s.k("L.E"),p)
p=H.a4O(A.pk(p,3,A.a3(p).k("L.E")).aJ(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cv<1>")
b4=A.B(new A.cv(h,s),s.k("L.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a55(s,b9),$async$ajI)
case 13:b5=c5
for(s=J.a0(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.arA(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ajI,v)},
hWR(d,e,f){return A.cf(null,B.v.j(0.65),!1,null,new C.hc4(e,f),d,null,!0,!0,x.g2)},
arA:function arA(d,e,f){this.a=d
this.b=e
this.c=f},
h1f:function h1f(){},
h1e:function h1e(d){this.a=d},
h1g:function h1g(){},
hc4:function hc4(d,e){this.a=d
this.b=e},
bH9(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bH9=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fOj())){u=null
w=1
break}t=B.d.cE(b1,new C.fOk())
s=$.U()
r=new A.p2(new A.oD())
q=A.vc(r,D.aVs)
p=A.M()
p.r=B.c.gp(0)
q.aE(D.aVs,p)
o=A.M()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.af
o.d=B.bH
o.e=B.dQ
n=new C.fOp(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.h.D(k-m,1,1e4)
d=B.h.D(j-l,1,1e4)
a0=B.h.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.U()
p=A.a([],x.v)
a3=new A.aJ(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.b_(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aJ(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.b_(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}w=4
return A.b(r.ne().w5(520,160),$async$bH9)
case 4:w=3
return A.b(b3.hs(B.hs),$async$bH9)
case 3:b0=b3
u=b0==null?null:J.eU(B.dM.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bH9,v)},
fZG(d){return C.iD7(d)},
iD7(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fZG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bn8()
n=d.x!=null&&d.Av(null).length===0
if(d.x!=null)t=n?D.Bm:D.KU
else t=d.gVX()?D.KU:D.aQe
w=3
return A.b(C.bH9(d.ax),$async$fZG)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aqd(s)
r=A.a6Q(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aQe}else{p.c=C.xK(q,!0)
p.b=n?D.Bm:D.KU}r.a5Y(A.hmZ(new C.fZI(p,d,new C.fZJ(),t,n,o),null,D.bM_,B.wg))
u=r.jE(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fZG,v)},
h6m(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h6m=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fZG(d),$async$h6m)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aD(s,r,"_")
if(q.length>40)q=B.a.av(q,0,40)
u=Ai.HY(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h6m,v)},
fOj:function fOj(){},
fOk:function fOk(){},
fOp:function fOp(d){this.a=d},
fZJ:function fZJ(){},
fZI:function fZI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fZH:function fZH(){},
hcy(d,e){var w=0,v=A.j(x.H)
var $async$hcy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.v.j(0.55),!0,null,new C.hcC(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$hcy)
case 2:return A.h(null,v)}})
return A.i($async$hcy,v)},
bJW(d,e,f,g){return C.iLr(d,e,f,g)},
iLr(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bJW=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cM.aL(t)}catch(q){r=null}if(r==null||r.length===0){d.M(x.q).f.T(D.fJH)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.hcu(g,r,f),d,null,!0,!0,x.H),$async$bJW)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bJW,v)},
hcD(d,e){var w=0,v=A.j(x.H)
var $async$hcD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.hcG(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$hcD)
case 2:return A.h(null,v)}})
return A.i($async$hcD,v)},
b2u:function b2u(d,e){this.c=d
this.a=e},
cbW:function cbW(){},
bfZ:function bfZ(d,e){this.b=d
this.a=e},
hcC:function hcC(d,e){this.a=d
this.b=e},
hcz:function hcz(d){this.a=d},
hcA:function hcA(d,e,f){this.a=d
this.b=e
this.c=f},
hcB:function hcB(d,e){this.a=d
this.b=e},
hcu:function hcu(d,e,f){this.a=d
this.b=e
this.c=f},
hcs:function hcs(d){this.a=d},
hct:function hct(d,e,f){this.a=d
this.b=e
this.c=f},
hcG:function hcG(d,e){this.a=d
this.b=e},
hcE:function hcE(d){this.a=d},
hcF:function hcF(d,e,f){this.a=d
this.b=e
this.c=f},
fTn(d,e){var w=0,v=A.j(x.y),u,t
var $async$fTn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4y(d),$async$fTn)
case 3:t=g
J.mH(t,new C.fTo(e))
u=A.akq(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTn,v)},
fTo:function fTo(d){this.a=d},
arN:function arN(d,e,f){this.c=d
this.d=e
this.a=f},
aGL:function aGL(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dX2:function dX2(d,e){this.a=d
this.b=e},
dWO:function dWO(d,e){this.a=d
this.b=e},
dWR:function dWR(d,e,f){this.a=d
this.b=e
this.c=f},
dWQ:function dWQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWP:function dWP(d,e){this.a=d
this.b=e},
dWS:function dWS(d,e){this.a=d
this.b=e},
dWM:function dWM(){},
dWN:function dWN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dWL:function dWL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dWw:function dWw(d){this.a=d},
dWx:function dWx(d,e,f){this.a=d
this.b=e
this.c=f},
dWy:function dWy(d,e){this.a=d
this.b=e},
dWv:function dWv(d){this.a=d},
dWD:function dWD(d,e){this.a=d
this.b=e},
dWu:function dWu(d){this.a=d},
dWE:function dWE(d,e,f){this.a=d
this.b=e
this.c=f},
dWF:function dWF(d,e,f){this.a=d
this.b=e
this.c=f},
dWt:function dWt(d,e){this.a=d
this.b=e},
dWG:function dWG(d,e,f){this.a=d
this.b=e
this.c=f},
dWs:function dWs(d,e){this.a=d
this.b=e},
dWH:function dWH(d,e){this.a=d
this.b=e},
dWr:function dWr(d){this.a=d},
dWI:function dWI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWp:function dWp(){},
dWj:function dWj(d){this.a=d},
dWk:function dWk(d){this.a=d},
dWq:function dWq(d,e){this.a=d
this.b=e},
dWJ:function dWJ(d,e){this.a=d
this.b=e},
dWo:function dWo(d){this.a=d},
dWK:function dWK(d){this.a=d},
dWn:function dWn(){},
dWz:function dWz(d,e){this.a=d
this.b=e},
dWm:function dWm(d){this.a=d},
dWA:function dWA(d,e,f){this.a=d
this.b=e
this.c=f},
dWl:function dWl(d,e){this.a=d
this.b=e},
dWi:function dWi(d,e){this.a=d
this.b=e},
dWB:function dWB(d){this.a=d},
dWC:function dWC(d,e,f){this.a=d
this.b=e
this.c=f},
dX5:function dX5(){},
dX6:function dX6(d,e){this.a=d
this.b=e},
dX3:function dX3(d){this.a=d},
dX4:function dX4(d){this.a=d},
dX_:function dX_(d,e){this.a=d
this.b=e},
dX0:function dX0(d){this.a=d},
dWT:function dWT(d,e,f){this.a=d
this.b=e
this.c=f},
dWU:function dWU(d,e,f){this.a=d
this.b=e
this.c=f},
dWV:function dWV(d,e,f){this.a=d
this.b=e
this.c=f},
dWW:function dWW(d,e,f){this.a=d
this.b=e
this.c=f},
dWX:function dWX(d,e,f){this.a=d
this.b=e
this.c=f},
dWY:function dWY(d,e,f){this.a=d
this.b=e
this.c=f},
dWZ:function dWZ(d,e,f){this.a=d
this.b=e
this.c=f},
dX7:function dX7(){},
dX8:function dX8(){},
dX9:function dX9(){},
dXa:function dXa(d){this.a=d},
dX1:function dX1(d,e){this.a=d
this.b=e},
hS8(d){return B.d.dt(D.a6R,new C.fU8(d),new C.fU9())},
vh:function vh(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fU8:function fU8(d){this.a=d},
fU9:function fU9(){},
anN:function anN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aZ9:function aZ9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UY:function UY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjF:function bjF(){this.d=$
this.c=this.a=null},
dlU:function dlU(d,e){this.a=d
this.b=e},
dlS:function dlS(d,e){this.a=d
this.b=e},
dlT:function dlT(){},
dlV:function dlV(d,e){this.a=d
this.b=e},
hBy(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bf(J.k(u==null?"":u))
return new C.nR(t,w,v,u==null?new A.W(Date.now(),0,!1):u)},
Mo(d,e){return C.iBJ(d,e)},
iBJ(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Mo=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$Mo)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.T.aN(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.cL(p,x.f)
o=A.ct(o,new C.fX3(),o.$ti.k("L.E"),x.B)
n=A.a3(o).k("X<L.E>")
o=A.B(new A.X(o,new C.fX4(),n),n.k("L.E"))
B.d.b_(o,new C.fX5())
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
return A.i($async$Mo,v)},
BV(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BV=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BV)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.hb6(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.T.au(r,null)),$async$BV)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BV,v)},
aVf(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aVf=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Mo(d,e),$async$aVf)
case 2:u=h
t=J.cK(u)
s=t.bm(u,new C.hjW(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BV(d,e,u),$async$aVf)
case 3:return A.h(null,v)}})
return A.i($async$aVf,v)},
bHD(d,e,f){var w=0,v=A.j(x.H),u
var $async$bHD=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Mo(d,e),$async$bHD)
case 2:u=h
J.mH(u,new C.fTf(f))
w=3
return A.b(C.BV(d,e,u),$async$bHD)
case 3:return A.h(null,v)}})
return A.i($async$bHD,v)},
bHU(d,e){return C.iBI(d,e)},
iBI(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bHU=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bHU)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Qc
w=1
break}p=B.T.aN(0,q,null)
if(x.f.b(p)){o=A.a1(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aK(o.h(0,"emblem"))
k=k==null?null:B.h.L(k)
if(k==null)k=0
if(D.EW.am(0,o.h(0,"foil")))j=A.cV(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.h.D(i==null?25:i,18,36)
h=B.d.q(D.a8D,o.h(0,"position"))?A.cV(o.h(0,"position")):"middle"
g=B.d.q(D.a7X,o.h(0,"frame"))?A.cV(o.h(0,"frame")):"double"
f=B.d.q(D.a7T,o.h(0,"texture"))?A.cV(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.df_,o.h(0,"header"))?A.cV(o.h(0,"header")):"classic"
o=new C.J_(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Qc
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Qc
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bHU,v)},
TB(d,e,f){return C.iKW(d,e,f)},
iKW(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$TB=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aB(),$async$TB)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.T.au(f.ak(),null)),$async$TB)
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
return A.i($async$TB,v)},
T1(d,e){return C.iBK(d,e)},
iBK(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$T1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$T1)
case 7:r=g
q=r.nV("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Mo(d,e),$async$T1)
case 8:if(!j.cM(g)){n=B.a.i(d.toLowerCase())
m=J.lL(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$T1)
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
return A.i($async$T1,v)},
aj1(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aj1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T1(d,e),$async$aj1)
case 3:s=g
r=J.a0(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.K(s,t)
w=5
return A.b(A.aB(),$async$aj1)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aj1)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aj1,v)},
a5g(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a5g=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.T1(d,e),$async$a5g)
case 2:s=h
J.fN(s,f)
w=3
return A.b(A.aB(),$async$a5g)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a5g)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a5g)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a5g)
case 6:return A.h(null,v)}})
return A.i($async$a5g,v)},
nR:function nR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fX3:function fX3(){},
fX4:function fX4(){},
fX5:function fX5(){},
hb6:function hb6(){},
hjW:function hjW(d){this.a=d},
fTf:function fTf(d){this.a=d},
J_:function J_(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bVi:function bVi(d){this.a=d},
iLf(d,e,f,g,h,i,j){return A.a7(d,!1).ca(A.e4(new C.hbI(j,i,f,e,h,g),!0,null,x.H))},
SZ(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$SZ=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T1(h,g),$async$SZ)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.aa(k)>=6){d.M(x.q).f.T(D.aXR)
u=!1
w=1
break}w=4
return A.b(C.hWR(d,f,e),$async$SZ)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aj1(h,g),$async$SZ)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nR(""+(q+n),l,B.a.i(m.b),new A.W(Date.now(),0,!1)))}w=6
return A.b(C.BV(h,r,p),$async$SZ)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.TB(h,r,new C.J_("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$SZ)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SZ,v)},
hbI:function hbI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a0K:function a0K(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aDI:function aDI(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dmz:function dmz(d){this.a=d},
dmy:function dmy(d,e){this.a=d
this.b=e},
dmn:function dmn(d,e){this.a=d
this.b=e},
dmk:function dmk(d,e){this.a=d
this.b=e},
dlW:function dlW(d){this.a=d},
dlX:function dlX(d,e){this.a=d
this.b=e},
dmo:function dmo(d){this.a=d},
dm4:function dm4(d){this.a=d},
dm2:function dm2(d){this.a=d},
dm3:function dm3(d){this.a=d},
dm5:function dm5(d){this.a=d},
dml:function dml(d){this.a=d},
dmm:function dmm(){},
dm0:function dm0(d){this.a=d},
dm1:function dm1(d,e){this.a=d
this.b=e},
dm6:function dm6(d){this.a=d},
dm7:function dm7(d,e){this.a=d
this.b=e},
dmx:function dmx(d){this.a=d},
dmw:function dmw(d,e){this.a=d
this.b=e},
dmv:function dmv(d){this.a=d},
dmh:function dmh(d){this.a=d},
dmg:function dmg(d){this.a=d},
dmi:function dmi(d){this.a=d},
dlY:function dlY(d,e){this.a=d
this.b=e},
dmj:function dmj(d,e){this.a=d
this.b=e},
dma:function dma(d){this.a=d},
dmb:function dmb(d){this.a=d},
dm9:function dm9(){},
dmc:function dmc(d){this.a=d},
dmd:function dmd(d){this.a=d},
dme:function dme(d,e){this.a=d
this.b=e},
dmf:function dmf(d,e,f){this.a=d
this.b=e
this.c=f},
dm8:function dm8(d,e){this.a=d
this.b=e},
dmq:function dmq(d){this.a=d},
dmp:function dmp(){},
dmr:function dmr(d){this.a=d},
dms:function dms(d){this.a=d},
dmt:function dmt(d){this.a=d},
dmu:function dmu(d,e){this.a=d
this.b=e},
dlZ:function dlZ(d){this.a=d},
dm_:function dm_(d){this.a=d},
a0O:function a0O(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bk3:function bk3(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dol:function dol(d){this.a=d},
dom:function dom(d){this.a=d},
dok:function dok(d){this.a=d},
don:function don(d){this.a=d},
doj:function doj(d){this.a=d},
doo:function doo(d){this.a=d},
doi:function doi(d){this.a=d},
dop:function dop(d,e){this.a=d
this.b=e},
doh:function doh(d,e){this.a=d
this.b=e},
doq:function doq(d,e){this.a=d
this.b=e},
a0M:function a0M(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ahr:function ahr(d,e,f){this.a=d
this.b=e
this.c=f},
aDL:function aDL(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dmO:function dmO(d,e){this.a=d
this.b=e},
dmN:function dmN(d,e){this.a=d
this.b=e},
dmS:function dmS(d){this.a=d},
dmR:function dmR(d,e){this.a=d
this.b=e},
dmP:function dmP(d){this.a=d},
dmQ:function dmQ(d){this.a=d},
dmT:function dmT(d){this.a=d},
dmU:function dmU(d){this.a=d},
dmM:function dmM(d,e){this.a=d
this.b=e},
dmL:function dmL(d,e){this.a=d
this.b=e},
Ln:function Ln(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_W:function a_W(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cU_:function cU_(d){this.a=d},
cU0:function cU0(){},
cU1:function cU1(d){this.a=d},
bhd:function bhd(d,e,f){this.b=d
this.c=e
this.a=f},
bh4:function bh4(d,e){this.b=d
this.a=e},
vi:function vi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0h:function a0h(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhb:function bhb(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
dd2:function dd2(d,e,f){this.a=d
this.b=e
this.c=f},
dd1:function dd1(d,e){this.a=d
this.b=e},
ddr:function ddr(d){this.a=d},
dde:function dde(){},
dds:function dds(d){this.a=d},
ddd:function ddd(){},
ddt:function ddt(d,e){this.a=d
this.b=e},
ddc:function ddc(d,e){this.a=d
this.b=e},
ddu:function ddu(d,e){this.a=d
this.b=e},
ddb:function ddb(d,e){this.a=d
this.b=e},
ddv:function ddv(d){this.a=d},
dda:function dda(){},
ddw:function ddw(d,e){this.a=d
this.b=e},
dd9:function dd9(d,e){this.a=d
this.b=e},
ddx:function ddx(d){this.a=d},
ddm:function ddm(d,e){this.a=d
this.b=e},
ddy:function ddy(d){this.a=d},
ddz:function ddz(d){this.a=d},
ddB:function ddB(d){this.a=d},
ddC:function ddC(d){this.a=d},
ddl:function ddl(d,e){this.a=d
this.b=e},
ddD:function ddD(d,e){this.a=d
this.b=e},
aKZ:function aKZ(d){this.a=d},
bmE:function bmE(d){this.a=d},
bfj:function bfj(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
anO:function anO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a35:function a35(d,e){this.a=d
this.b=e},
anP:function anP(d,e,f,g,h,i){var _=this
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
_.bw$=h
_.ab$=i
_.c=_.a=null},
bVs:function bVs(d){this.a=d},
bVm:function bVm(d){this.a=d},
bVl:function bVl(d,e){this.a=d
this.b=e},
bVv:function bVv(d){this.a=d},
bVn:function bVn(d){this.a=d},
bVo:function bVo(d){this.a=d},
bVr:function bVr(d){this.a=d},
bVq:function bVq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVt:function bVt(d,e){this.a=d
this.b=e},
bVu:function bVu(){},
bVp:function bVp(d){this.a=d},
bVj:function bVj(d,e){this.a=d
this.b=e},
bVk:function bVk(d){this.a=d},
bsi:function bsi(d,e){this.b=d
this.a=e},
aDJ:function aDJ(){},
iW(d,e){var w
$.U()
w=A.M()
w.b=B.af
w.c=e
w.r=d.gp(0)
w.d=B.bH
w.e=B.dQ
return w},
bHb(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.nY(0,a0?-f:f,f)
w=A.c1(B.hu,8,36)
v=B.v.j(0.3)
u=$.U()
t=A.M()
t.r=v.gp(0)
d.c3(w,t)
w=a1===D.Z_
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eJH,new A.m(-4+v,-2),C.iW(q,5))
d.ah(D.eHh,new A.m(4-v,-2),C.iW(q,5))}else{t=A.c1(B.KM,14,40)
p=A.M()
p.r=v.gp(0)
d.c3(t,p)}v=u.r
u=x.v
o=new A.aJ(v,B.ak,k,k,A.a([],u))
t=-64-r
o.E(new A.b_(-11,t))
o.E(new A.cn(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.cn(15,-40,11,t))
o.E(new A.bz())
t=A.M()
t.r=w.gp(0)
d.af(o,t)
u=new A.aJ(v,B.ak,k,k,A.a([],u))
u.E(new A.b_(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bz())
v=A.M()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b5g){n=-52+w*14
d.ah(new A.m(10,n-22),new A.m(10,n+44),C.iW(F.H0,3.4))
d.ah(D.eJY,new A.m(9,n),C.iW(q,4))
d.ah(D.eHI,new A.m(10,n),C.iW(q,4))}else if(a1===D.b5h){d.ah(D.eIO,new A.m(-8,-26-Math.max(0,w)*6),C.iW(q,4))
d.ah(D.eFK,new A.m(8,-26-Math.max(0,-w)*6),C.iW(q,4))}else{w=s*3
v=-38-r
d.ah(D.eIS,new A.m(-12-w,v),C.iW(q,4))
d.ah(D.aPb,new A.m(12+w,v),C.iW(q,4))}w=A.M()
w.r=q.gp(0)
d.aE(D.fwn,w)
m=new A.m(0,-77-r)
w=A.c1(m,22,19)
v=A.M()
v.r=q.gp(0)
d.c3(w,v)
w=h.y
if(w!=null){v=A.c1(m.a6(0,K.wf),15,24)
u=A.M()
u.r=w.gp(0)
d.c3(v,u)
u=m.a6(0,D.eFE)
v=A.M()
v.r=w.gp(0)
d.P(u,4,v)}else{w=A.c1(m.a6(0,B.rR),23,20)
v=h.d
u=A.M()
u.r=v.gp(0)
d.cR(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a6(0,D.eJW),m.a6(0,D.eIM),C.iW(v,2.2))
d.ah(m.a6(0,D.eHH),m.a6(0,D.eFB),C.iW(v,2.2))}if(w===4){w=m.a6(0,D.eK_)
u=A.M()
u.r=v.gp(0)
d.P(w,6,u)
u=m.a6(0,D.eHJ)
w=A.M()
w.r=v.gp(0)
d.P(u,6,w)}}w=m.a6(0,D.eIB)
v=A.M()
v.r=B.iv.gp(0)
d.P(w,0.9,v)
v=m.a6(0,D.eIq)
w=A.M()
w.r=B.iv.gp(0)
d.P(v,0.9,w)
if(i){l=m.a6(0,K.aaQ)
w=A.c1(l,21,22)
v=A.M()
v.r=D.lZ.gp(0)
d.c3(w,v)
v=A.c1(l.a6(0,K.aP8),5,12)
w=A.M()
w.r=D.bkH.gp(0)
d.c3(v,w)
d.ah(l.a6(0,D.eJS),l.a6(0,K.aPw),C.iW(B.d0,1.4))
d.ah(D.aPb,new A.m(15,-88-r),C.iW(q,3.6))}j.restore()},
hQI(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.c1(B.dP,18,96)
u=B.v.j(0.28)
$.U()
t=A.M()
t.r=u.gp(0)
d.c3(v,t)
t=A.c1(B.dP,11,70)
v=B.v.j(0.2)
u=A.M()
u.r=v.gp(0)
d.c3(t,u)
d.lK(D.aVw,A.M())
C.ipA(d,g,h,i,j)
s=(k==null?D.aaV:k).a-w>=0?1:-1
w=A.M()
w.a=B.Nb
w.san(A.jT(new A.m(s*70,-60),new A.m(-s*70,-60),A.a([D.al4.j(0.5),D.al4.j(0.12),D.bsq.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.w,null))
d.aE(D.aVw,w)
r.restore()
r.restore()},
ipA(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
a0.toString
w=A.ap(d,B.c,0.16)
w.toString
v=a2.b
u=A.ap(v,B.v,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.bx(D.fwo,B.uq)
p=$.U()
o=A.M()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bx(D.fwj,B.hT)
s=A.ap(v,B.v,0.18)
s.toString
n=A.M()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bx(D.fwx,B.hT)
o=A.ap(v,B.v,0.1)
o.toString
s=A.M()
s.r=o.gp(0)
a1.aq(n,s)
s=A.M()
s.r=d.gp(0)
a1.c3(D.fwq,s)
s=A.M()
s.r=d.gp(0)
a1.c3(D.fv7,s)
s=a1.c
J.bs(s.save())
s.translate(a3.w,0)
J.bs(s.save())
a1.nY(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aJ(p.r,B.ak,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.b_(k,-58))
l.E(new A.cn(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.cn(m+3,-62,m-2,-58))
l.E(new A.cn(0,-70,k,-58))
l.E(new A.bz())
k=A.M()
k.r=v.gp(0)
a1.af(l,k)
J.bs(s.save())
a1.mN(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dmK[j]
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.af
i.c=5
i.r=k.gp(0)
i.d=B.bH
i.e=B.dQ
a1.ah(new A.m(-34+u,-64),new A.m(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.n.F(B.n.ao(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.U()
f=new A.ar(B.V,B.R,B.X,B.Y,B.W)
f.r=i.gp(0)
a1.P(new A.m(g,h),3.6,f)
f=new A.ar(B.V,B.R,B.X,B.Y,B.W)
f.r=u.gp(0)
a1.P(new A.m(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.af
i.c=1.6
i.r=k.gp(0)
i.d=B.bH
i.e=B.dQ
a1.ah(new A.m(g,-64),new A.m(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.af
i.c=1.6
i.r=k.gp(0)
i.d=B.bH
i.e=B.dQ
a1.ah(new A.m(-30,h),new A.m(30,h),i)}break
default:a1.ah(D.eJk,D.eGp,C.iW(a2.c.j(0.9),3))}a1.ah(D.eJT,D.eIU,C.iW(B.v.j(0.18),1.6))
a1.ah(D.eFJ,K.aPd,C.iW(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.U()
i=A.M()
i.r=u.gp(0)
a1.aE(D.fv3,i)
s.restore()
i=A.M()
i.r=a0.gp(0)
a1.aE(D.fvh,i)
n=new A.aJ(k.r,B.ak,e,e,A.a([],n))
n.E(new A.b_(-9,-66))
n.E(new A.cn(0,-57,9,-66))
n.E(new A.cn(0,-60,-9,-66))
k=A.M()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cR(D.fvs,0.1,2.941592653589793,!1,C.iW(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.ab0
n=25*q
k=23*q
i=9*q
C.hMd(a1,new A.m(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.Fo:o
C.hMd(a1,new A.m(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eH9,D.eH5,C.iW(D.am3,4))
a1.ah(D.eH7,D.eH3,C.iW(D.Hr.j(0.7),1.4))
u=A.M()
u.r=B.d0.gp(0)
a1.P(D.eH6,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jB(0,a3.f)
a1.bW(0,r)
C.ipw(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hMd(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcD(),q=r===0?B.hu:s.eB(0,r),p=B.h.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.m(o,w)
if(o*i<0)v=new A.m(-o,-w)
u=e.a6(0,q.aK(0,n)).a6(0,v.aK(0,m))
t=e.a6(0,q.aK(0,p))
d.ah(e,u,C.iW(j,l))
o=A.ap(j,B.v,0.2)
o.toString
d.ah(e,u,C.iW(o,l*0.35))
d.ah(u,t,C.iW(k,l*0.78))
o=A.ap(k,B.v,0.22)
o.toString
d.ah(u,t,C.iW(o,l*0.22))
$.U()
o=A.M()
o.r=j.gp(0)
d.P(u,l*0.55,o)
o=A.c1(t,l*1.15,l)
w=A.M()
w.r=k.gp(0)
d.c3(o,w)
w=-l
w=t.a6(0,new A.m(i*w*0.45,w*0.1))
o=A.M()
o.r=k.gp(0)
d.P(w,l*0.28,o)},
ipw(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.c1(B.we,40,38)
$.U()
v=A.M()
v.r=c0.gp(0)
c2.c3(w,v)}if(c1===4){$.U()
w=A.M()
w.r=c0.gp(0)
c2.P(D.eJ1,9.5,w)
w=A.M()
w.r=c0.gp(0)
c2.P(D.eG_,9.5,w)}w=A.c1(D.eKg,10,6)
v=$.U()
u=A.M()
u.r=c8.gp(0)
c2.c3(w,u)
u=A.c1(D.eIy,10,6)
w=A.M()
w.r=c8.gp(0)
c2.c3(u,w)
v=v.r
w=x.v
t=new A.aJ(v,B.ak,b9,b9,A.a([],w))
t.E(new A.b_(0,-20))
t.E(new A.i6(13,-20,17,-9,16,2))
t.E(new A.i6(15,13,8,20,0,20))
t.E(new A.i6(-8,20,-15,13,-16,2))
t.E(new A.i6(-17,-9,-13,-20,0,-20))
t.E(new A.bz())
u=A.M()
u.san(A.wG(D.eJJ,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.w,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iW(c8.j(0.5),0.8)
c2.cR(D.fwz,3.455751918948773,2.5132741228718345,!1,s)
c2.cR(D.fva,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eIZ,K.aPH,s)
c2.ah(D.eFW,D.eFN,s)
c2.cR(D.fvr,2.2,1.4,!1,s)
c2.cR(D.fv8,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=c0.gp(0)
c2.P(new A.m(p*14.5,-3+o*17.5),4.3,n)}p=A.M()
p.r=c0.gp(0)
c2.cR(D.fvG,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aJ(v,B.ak,b9,b9,A.a([],w))
p.E(new A.b_(-15,-11))
p.E(new A.cn(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.cn(0,-12,-13,-6))
p.E(new A.bz())
o=A.M()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eIQ,D.eFO,C.iW(G.nS,1.4))
o=A.M()
o.r=c0.gp(0)
c2.P(D.eJ4,3,o)
o=A.M()
o.r=c0.gp(0)
c2.P(D.eG0,3,o)
o=new A.aJ(v,B.ak,b9,b9,A.a([],w))
o.E(new A.b_(-13,6))
o.E(new A.cn(-12,22,0,26))
o.E(new A.cn(12,22,13,6))
o.E(new A.cn(8,13,0,12))
o.E(new A.cn(-8,13,-13,6))
o.E(new A.bz())
p=A.M()
p.r=B.hX.gp(0)
c2.af(o,p)
p=new A.aJ(v,B.ak,b9,b9,A.a([],w))
p.E(new A.b_(-7,8))
p.E(new A.cn(0,6,7,8))
p.E(new A.cn(0,10.5,-7,8))
o=A.M()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aJ(v,B.ak,b9,b9,A.a([],w))
p.E(new A.b_(-17,-4))
p.E(new A.cn(-20,-27,0,-29))
p.E(new A.cn(20,-27,17,-4))
p.E(new A.cn(0,-14,-17,-4))
p.E(new A.bz())
o=A.M()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.v,0.3)
o.toString
c2.cR(D.fvN,3.4,2.5,!1,C.iW(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cR(D.fvz,3.6,2.2,!1,C.iW(o,1.2))
o=new A.aJ(v,B.ak,b9,b9,A.a([],w))
o.E(new A.b_(11,-22))
o.E(new A.cn(27,-34,25,-19))
o.E(new A.cn(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.M()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aJ(v,B.ak,b9,b9,A.a([],w))
n.E(new A.b_(11,-22))
n.E(new A.cn(24,-12,27,-26))
n.E(new A.cn(18,-22,11,-22))
o=A.ap(m,B.v,0.2)
o.toString
p=A.M()
p.r=o.gp(0)
c2.af(n,p)
p=A.M()
p.r=c3.c.gp(0)
c2.P(D.eFP,3,p)
break
case 3:p=A.M()
p.r=c0.gp(0)
c2.cR(D.fvK,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.af
o.c=0.9
o.r=p.gp(0)
o.d=B.bH
o.e=B.dQ
c2.ah(new A.m(r*3.6,-19+Math.abs(r)*0.8),new A.m(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aFL[l]
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.af
o.c=4.5
o.r=c0.gp(0)
o.d=B.bH
o.e=B.dQ
c2.ah(new A.m(k,0),new A.m(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
c2.P(new A.m(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.M()
p.r=c0.gp(0)
c2.cR(D.fvJ,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aaQ,K.aaP,C.iW(p,1))
break
default:p=A.M()
p.r=c0.gp(0)
c2.cR(D.fvb,3.267256359733385,2.8902652413026098,!0,p)}i=B.h.D(c4.b,0,1)*0.4+0.1
p=A.c1(D.eK2,5,8)
o=D.aig.j(i)
n=A.M()
n.r=o.gp(0)
c2.c3(p,n)
n=A.c1(D.eIJ,5,8)
p=D.aig.j(i)
o=A.M()
o.r=p.gp(0)
c2.c3(n,o)
h=c4.e*2.4
o=new A.aJ(v,B.ak,b9,b9,A.a([],w))
o.E(new A.b_(h-0.6,-2))
o.E(new A.cn(h-3.4,6,h-2.6,7.4))
o.E(new A.cn(h,8.8,h+2.6,7.4))
c2.af(o,C.iW(c8.j(0.75),1.1))
o=A.M()
o.r=c8.gp(0)
c2.P(new A.m(h-1.5,7.2),0.7,o)
o=A.M()
o.r=c8.gp(0)
c2.P(new A.m(h+1.5,7.2),0.7,o)
g=B.h.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.ht[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.c1(new A.m(a5,-3),a3,7)
a6=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a6.r=B.c.j(0.96).gp(0)
c2.c3(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bs(d.save())
a6=A.a([],w)
a4=new A.aJ(v,B.ak,b9,b9,a6)
a6.push(new A.jO(A.c1(new A.m(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.EH(a4.glm().a.snapshot())
d.clipPath(a3.a,$.n0(),!0)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=D.boE.gp(0)
c2.P(new A.m(a7,a8),2.1,a3)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.v.gp(0)
c2.P(new A.m(a7,a8),1.05,a3)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.c.gp(0)
c2.P(new A.m(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a0b:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a9.b=B.af
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bH
a9.e=B.dQ
a3=p?0.8:0
c2.cR(A.c1(new A.m(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dW
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b2.b=B.af
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bH
b2.e=B.dQ
c2.ah(new A.m(a5-a4,b0-a6+0.4),new A.m(a5+a4,b0-0.6-a3),b2)}b3=B.h.D(c4.a,0,1)
if(o)b4=D.bzc
else{u=A.ap(c8,D.bss,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.h.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aJ(v,B.ak,b9,b9,A.a([],w))
w=-b6
b8.E(new A.b_(w,11.5))
b8.E(new A.cn(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.cn(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bz())
v=A.M()
v.r=D.brL.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mN(0,b8)
v=B.c.j(0.95)
u=A.M()
u.r=v.gp(0)
c2.aE(new A.a5(w,11,w+b6*2,13.2),u)
u=A.c1(new A.m(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.M()
w.r=D.bzh.gp(0)
c2.c3(u,w)
d.restore()
c2.af(b8,C.iW(b4,1.1))}else{u=new A.aJ(v,B.ak,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.b_(-5.2,p))
u.E(new A.cn(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iW(b4,1.5))
if(b5>0.6){w=new A.aJ(v,B.ak,b9,b9,A.a([],w))
w.E(new A.b_(-4.6,11.8))
w.E(new A.cn(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.cn(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.M()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cR(D.fvq,-1.2,2.2,!1,C.iW(c8.j(0.5),0.8))
c2.cR(D.fvd,2.141592653589793,2.2,!1,C.iW(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.M()
w.r=c1.gp(0)
c2.P(D.eIr,1.7,w)
w=A.M()
w.r=c1.gp(0)
c2.P(D.eIo,1.7,w)}},
ivo(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.U(),f=new A.p2(new A.oD()),e=A.vc(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.M()
a2.san(A.jT(B.J,new A.m(0,a0*0.46),D.dj5,D.d9l,B.w,h))
e.aE(new A.a5(0,0,0+d,0+a0),a2)
a2=e.c
J.bs(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bW(0,a1)
w=new A.e7()
w.cW(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.P(new A.m(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bs(a2.save())
a2.translate(200,120)
e.jB(0,-0.5)
d=A.M()
a0=x.O
d.san(A.wG(B.J,230,A.a([D.bng,B.L],a0),h,B.w,h,h,0))
e.c3(D.fvV,d)
a2.restore()
d=A.M()
d.san(A.wG(D.aaY,58,A.a([D.bqL,B.L],a0),h,B.w,h,h,0))
e.P(D.aaY,58,d)
d=A.M()
d.r=D.blZ.gp(0)
e.P(D.aaY,24,d)
d=A.M()
d.r=D.a0C.gp(0)
e.P(D.eGJ,5,d)
d=A.M()
d.r=D.a0C.gp(0)
e.P(D.eGN,3.4,d)
d=A.M()
d.r=D.a0C.gp(0)
e.P(D.eGM,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aJ(g.r,B.ak,h,h,u)
u.push(new A.b_(-60,420))
r.ac()
for(g=372+s*12,t=60+s*20,q=s*2,p=14-s*3,o=-60;o<=510;o+=8){n=new A.aq(o,g+Math.sin(o/t+q)*p+Math.sin(o/23+s)*3)
u.push(n)
m=r.f
if(m!=null)n.aj(m)
r.ac()}g=new A.aq(510,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.ac()
g=new A.aq(-60,470)
u.push(g)
t=r.f
if(t!=null)g.aj(t)
r.ac()
g=new A.bz()
u.push(g)
u=r.f
if(u!=null)g.aj(u)
r.ac()
g=[D.bkv,D.bmx,D.bsM][s]
u=$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cDa[l]
k=384+B.n.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.b=B.af
u.c=2.4
u.r=D.a0Y.gp(0)
u.d=B.bH
u.e=B.dQ
e.ah(new A.m(o,k),new A.m(g,d),u)
g=A.c1(new A.m(g,k-27),11,46)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.a0Y.gp(0)
e.c3(g,u)
d=A.c1(new A.m(o-12,d),8,24)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.a0Y.gp(0)
e.c3(d,u)}for(v=0;v<9;++v){g=B.n.F(v,3)
d=B.n.F(v,4)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.bm1.j(0.8).gp(0)
e.P(new A.m(20+v*52+g*7,400+d*5),1.2,u)}g=A.M()
g.san(A.jT(D.eFi,D.eFl,D.dbE,B.xV,B.w,h))
e.aE(new A.a5(-200,412,650,1300),g)
j=new A.e7()
j.cW(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.c1(new A.m(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.he()?B.c:B.v
d=new A.ar(B.V,B.R,B.X,B.Y,B.W)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c3(u,d)}J.bs(a2.save())
a2.translate(225,590)
e.nY(0,1,0.34)
g=A.M()
g.san(A.wG(B.J,250,A.a([D.btM,D.bmS,D.bvI],a0),A.a([0,0.8,1],x.n),B.w,h,h,0))
e.P(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.akL,D.blw,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.U()
a0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a0.b=B.af
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bH
a0.e=B.dQ
e.ah(new A.m(o+i*2,k),new A.m(o+i*5,g+Math.abs(i)*3),a0)}}C.inB(e)
for(l=0;l<3;++l)C.ir7(e,D.aDw[l])
C.iqW(e,D.eGD)
for(o=118;o<190;o+=11){g=B.n.F(o,3)
d=B.n.F(o,4)
$.U()
a0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a0.b=B.af
a0.c=2.4
a0.r=D.a0U.gp(0)
a0.d=B.bH
a0.e=B.dQ
e.ah(new A.m(o,452+g),new A.m(o+1,436+d),a0)}e.ah(D.eFL,D.eG3,C.iW(D.bmf,1.6))
a2.restore()
return f.ne()},
inB(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.U().r,g=x.v,f=new A.aJ(h,B.ak,i,i,A.a([],g))
f.E(new A.b_(358,462))
f.E(new A.i6(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i6(416,382,432,422,428,462))
f.E(new A.bz())
w=A.M()
w.san(A.jT(new A.m(354,0),new A.m(430,0),D.dJE,B.md,B.w,i))
d.af(f,w)
v=new A.e7()
v.cW(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.b=B.af
p.c=1.1
p.r=q.gp(0)
p.d=B.bH
p.e=B.dQ
d.ah(new A.m(t,s),new A.m(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dok[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aJ(h,B.ak,i,i,l)
l.push(new A.b_(r,336))
k.ac()
r=new A.cn(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.b=B.af
r.c=8
r.r=D.aj2.gp(0)
r.d=B.bH
r.e=B.dQ
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=A.ap(D.bm7,D.bsK,v.ai()).j(0.92).gp(0)
d.P(new A.m(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.b=B.af
r.c=1.2
r.r=D.a0U.gp(0)
r.d=B.bH
r.e=B.dQ
d.ah(new A.m(w,q+8),new A.m(w,q+22),r)
q=A.c1(new A.m(w,q+28),13,7)
w=new A.ar(B.V,B.R,B.X,B.Y,B.W)
w.r=D.bu8.gp(0)
d.c3(q,w)}},
ir7(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.c1(new A.m(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.U(),b3=A.M()
b3.r=b1.gp(0)
b4.c3(b0,b3)
b2=b2.r
b3=x.v
w=new A.aJ(b2,B.ak,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.b_(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.cn(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bz())
u=A.M()
u.san(A.jT(new A.m(b0,0),new A.m(v,0),D.dor,B.md,B.w,a4))
b4.af(w,u)
t=new A.e7()
t.cW(B.n.S(a5*7))
v=b4.c
J.bs(v.save())
b4.mN(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.b=B.af
n.c=1
n.r=o.gp(0)
n.d=B.bH
n.e=B.dQ
b4.ah(new A.m(r,q),new A.m(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.akH.j(0.75)
n=A.M()
n.r=o.gp(0)
b4.aE(new A.a5(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.h.ba(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aJ(b2,B.ak,a4,a4,j)
j.push(new A.b_(k,o))
i.ac()
h=new A.aq(k+5,n)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
h=new A.aq(k+10,o)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
h=new A.bz()
j.push(h)
j=i.f
if(j!=null)h.aj(j)
i.ac()
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=D.lZ.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aJ(b2,B.ak,a4,a4,u)
b2=a6-8
f.E(new A.b_(b0,b2))
for(p/=6,l=0;l<=B.h.ba(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iW(D.akH.j(0.7),1.6))
v.restore()
b0=$.U().r
b2=new A.aJ(b0,B.ak,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.b_(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.cn(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bz())
m=A.M()
m.r=D.akT.gp(0)
b4.af(b2,m)
m=A.M()
m.r=D.akT.gp(0)
b4.P(new A.m(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aJ(b0,B.ak,a4,a4,A.a([],b3))
e.E(new A.b_(o,j))
n=b1-m*0.55
e.E(new A.cn(a5-a9,n,a5,u))
e.E(new A.cn(a5+a9,n,p,j))
e.E(new A.cn(a5,b1+a7*0.34,o,j))
e.E(new A.bz())
b1=A.M()
n=a7*1.4
b1.san(A.jT(new A.m(a5-n,0),new A.m(a5+n,0),D.dsj,B.md,B.w,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mN(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.he()?B.v:D.blF).j(0.16)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.af
i.c=0.9
i.r=n.gp(0)
i.d=B.bH
i.e=B.dQ
b4.ah(new A.m(a5+(p-0.5)*3,u),new A.m(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aJ(b0,B.ak,a4,a4,b1)
n=a0+2
b1.push(new A.b_(a5-a1,n))
p.ac()
n=new A.cn(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ac()
b1=B.v.j(0.22)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.b=B.af
n.c=1.2
n.r=b1.gp(0)
n.d=B.bH
n.e=B.dQ
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.V,B.R,B.X,B.Y,B.W)
v.b=B.af
v.c=1.1
v.r=D.btd.gp(0)
v.d=B.bH
v.e=B.dQ
b4.ah(new A.m(a2,a3),new A.m(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aJ(b0,B.ak,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.b_(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bz())
b0=A.M()
b0.r=D.bp8.gp(0)
b4.af(a9,b0)},
iqW(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aFI[s]
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.b=B.af
q.c=3
q.r=D.a0U.gp(0)
q.d=B.bH
q.e=B.dQ
d.ah(new A.m(r,u),new A.m(r,t),q)}u=A.c1(e.a6(0,K.aP7),24,36)
t=$.U()
r=A.M()
r.r=D.byo.gp(0)
d.c3(u,r)
t=new A.aJ(t.r,B.ak,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.b_(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.cn(w,v-24,r,u))
t.E(new A.bz())
u=A.M()
u.r=D.ajL.gp(0)
d.af(t,u)},
iqf(d){switch(B.n.F(d,8)){case 0:return D.b4w
case 1:return D.b4u
case 2:return D.b4t
case 3:return D.b4s
case 4:return D.b4v
case 5:return D.b4x
case 6:return D.hYi
default:return D.hYh}},
Tz(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bsj()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.ab0:j
w.as=k==null?D.Fo:k
C.hQI(d,e,p,C.iqf(m),w,s,m,l)},
hSe(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bX6:function bX6(){var _=this
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
tB:function tB(d,e,f,g,h,i,j,k,l,m){var _=this
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
bsj:function bsj(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
ao6:function ao6(){this.b=this.a=null},
aZe:function aZe(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bWZ:function bWZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX_:function bX_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX0:function bX0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX1:function bX1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX2:function bX2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX3:function bX3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX4:function bX4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX5:function bX5(){},
bWY:function bWY(d){this.a=d},
ahA:function ahA(d,e){this.a=d
this.b=e},
afu:function afu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NL(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bVI(s)
s.bFq(d)
return s},
HB(d,e,f,g,h,i,j){var w,v=A.T(g).k("X<1>")
v=A.d9(new A.X(g,new C.fGV(f),v),v.k("L.E"))
w=A.B(v,A.a3(v).k("cl.E"))
B.d.e_(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cH(w,0,A.dy(3,"count",x.S),A.T(w).c))
B.d.e_(v,d)
return new C.lS(e,v,B.d.c8(v,f),h,i,"tree",j)},
iN_(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.hjM(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jw(c4,c0)
t=A.B(c4,A.a3(c4).k("cl.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jw(c4,c0)
r=A.B(c4,A.a3(c4).k("cl.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jw(c4,c0)
q=A.B(c4,A.a3(c4).k("cl.E"))
for(c4=w.length,v=A.T(t).k("X<1>"),s=v.k("L.E"),p=A.T(w).k("X<1>"),o=p.k("L.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.xp)g="father"
else g=h===D.p3?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.X(t,new C.hjO(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.HB(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hjP(i,m),p),o)
B.d.e_(d,c6)
c2.$2(b4,new C.lS("True or false: "+h+" is the "+g+" of "+l+".",A5.TS,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lS("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",A5.TS,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.H9(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hjQ(l,a0,c5),v),s)
e=a1.c
if(e===D.xp)e="son"
else e=e===D.p3?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.HB(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eB([h+1,h+2,Math.max(0,h-1)],n)
a5.X(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.m6(a5,a5.r,f.k("m6<1>")),e.c=a5.e,f=f.c;e.A();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.HB(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("ia<1>"),a3=new A.ia(a0,1,b3,a2),a3.mB(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gI(0),a2.k("bQ<aj.E>")),a2=a2.k("aj.E");a3.A();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.HB(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.atM(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hjR(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.HB(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.d()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.d()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.X(t,new C.hjS(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.xp
if(e)a2=b7
else a2=f===D.p3?b8:b9
if(e)f=b7
else f=f===D.p3?b8:b9
c2.$2("grand",C.HB(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aPV(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.X(t,new C.hjT(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.HB(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cWf)
h=l+" was born in "+k
c2.$2("place",C.HB(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.dcM)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.HB(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.HB(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jc(b1,b3,b3)
c2.$2("year",C.HB(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bHQ(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.NL(d),l=new A.e7()
l.cW(f)
w=C.iN_(m,l,g)
for(v=new A.ds(w,w.r,w.e);v.A();)J.hzB(v.d,l)
v=A.a3(w).k("cv<1>")
u=A.B(new A.cv(w,v),v.k("L.E"))
B.d.e_(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fUM(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.I)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.aa(p)>n.a){p=w.h(0,q)
p.toString
p=s.K(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.B(D.aCy,x.df)
B.d.e_(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hQP(o,l))}}else if(!g&&v>3){o=C.hQP(D.aCy[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hQP(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.e_(w,e)
return new C.lS(d.a,w,B.d.c8(w,v),d.d,d.e,d.f,d.r)},
hWq(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.NL(a2),a1=new A.e7()
a1.cW(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.H9(q).length>=2)u.push(q)}B.d.e_(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.H9(n)
l=A.T(m)
k=new A.ia(m,0,5,l.k("ia<1>"))
k.mB(m,0,5,l.c)
j=k.de(0)
if(new A.O(j,new C.ha0(),A.T(j).k("O<1,F>")).fI(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aV_(a0,j[i]))
w.push(new C.awi("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.bV(e.c0(0,a0.aoR(q),new C.ha1()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cv<1>")
d=A.B(new A.cv(e,t),t.k("L.E"))
B.d.fj(d)
v=A.a([],v)
for(u=A.cH(d,0,A.dy(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bQ(u,u.gI(0),t.k("bQ<aj.E>")),t=t.k("aj.E");u.A();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cK(s)
m.e_(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aV_(a0,v[r]))
w.push(new C.awi("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aTm(d){return B.d.aqj(D.aF2,new C.fQB(d))},
iCd(d){return A.nU(new A.X(D.aF2,new C.fY_(d),x.av))},
bWw(d){return C.i5l(d)},
i5l(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bWw=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bWw)
case 7:r=f
q=B.a.i(d)
q=A.ew(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bWw,v)},
Cf(d,e){return C.i5i(d,e)},
i5i(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Cf=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Cf)
case 7:r=g
p=B.a.i(d)
o=A.ew(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Cf)
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
return A.i($async$Cf,v)},
bWv(d,e,f){return C.i5j(d,e,f)},
i5j(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bWv=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bWv)
case 7:r=h
q=B.a.i(d)
q=A.ew(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bWv,v)},
Cg(d,e,f,g){return C.i5k(d,e,f,g)},
i5k(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Cg=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Cg)
case 7:r=i
p=B.a.i(d)
o=A.ew(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Cg)
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
return A.i($async$Cg,v)},
bK9(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hlS(d,e,f,g){return new C.amE(g,d==null?A.a(["","","",""],x.s):d,e,f)},
i3m(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aM(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.bK)
while(u.A())w.push(J.k(u.gO(u)))
u=x.N
w=A.cH(w,0,A.dy(4,"count",x.S),u).de(0)
B.d.u(w,A.c4(Math.max(0,4-(v.b(d.h(0,"a"))?J.aa(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.h.L(v)
v=B.n.D(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.h.L(u)
return C.hlS(w,v,B.n.D(u==null?20:u,5,60),t)},
hAM(d){var w,v,u,t,s,r,q=J.a0(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aM(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.bK)
u=x.f
t=x.N
s=x.z
while(q.A()){r=q.gO(q)
if(u.b(r))v.push(C.i3m(A.a1(r,t,s)))}return new C.Nt(p,w,v)},
huG(d){var w,v=A.a([],x.c)
for(w=J.aM(d.z);w.A();)v.push(C.hAM(w.gO(w)))
return v},
aV_(d,e){var w=e.c===D.p3
if(d.aoR(e)===0&&d.H9(e).length!==0)return w?0:1
if(d.H9(e).length!==0||d.atM(e)!=null)return w?2:3
return w?4:5},
hXw(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.NL(a4),a3=new A.e7()
a3.cW(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
B.d.e_(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("L.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.d()
j=i.h(0,k)}h=a2.H9(m)
g=a2.atM(m)
f=a2.aPV(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.xp)k="father"
else k=k===D.p3?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.xp)k="father"
else k=k===D.p3?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e_(l,a3)
B.d.b_(l,new C.hkc())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hkd(d),o),n)
B.d.e_(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.ia(a0,0,3,i.k("ia<1>"))
a1.mB(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e_(k,a3)
a1=C.aV_(a2,m)
i=new A.ia(l,0,4,p)
i.mB(l,0,4,r)
w.push(new C.bdt(d,a1,i.de(0),k))
if(w.length>=5)break}return w},
hNW(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hWB(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.NL(a4),a3=new A.e7()
a3.cW(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.H9(q).length>=2)u.push(q)}B.d.e_(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.H9(l)
j=A.T(k)
i=new A.ia(k,0,4,j.k("ia<1>"))
i.mB(k,0,4,j.c)
h=i.de(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.haD(q))&&q.d!==j)i.push(q)}B.d.e_(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.ia(i,0,k,m)
j.mB(i,0,k,n)
f=j.de(0)
j=B.a.i(l.b)
k=C.aV_(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aV_(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aV_(a2,f[g]))
w.push(new C.abv(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lS:function lS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bVI:function bVI(d){this.b=d
this.c=$},
bVJ:function bVJ(){},
bVK:function bVK(d){this.a=d},
fGV:function fGV(d){this.a=d},
hjM:function hjM(d){this.a=d},
hjN:function hjN(){},
hjO:function hjO(d){this.a=d},
hjP:function hjP(d,e){this.a=d
this.b=e},
hjQ:function hjQ(d,e,f){this.a=d
this.b=e
this.c=f},
hjL:function hjL(d,e){this.a=d
this.b=e},
hjR:function hjR(d){this.a=d},
hjS:function hjS(d){this.a=d},
hjT:function hjT(d,e,f){this.a=d
this.b=e
this.c=f},
hjK:function hjK(d,e){this.a=d
this.b=e},
fUM:function fUM(d,e){this.a=d
this.b=e},
awi:function awi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ha0:function ha0(){},
ha1:function ha1(){},
A3:function A3(d,e,f){this.a=d
this.b=e
this.c=f},
fQB:function fQB(d){this.a=d},
fY_:function fY_(d){this.a=d},
amE:function amE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQu:function bQu(){},
Nt:function Nt(d,e,f){this.a=d
this.b=e
this.c=f},
bdt:function bdt(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hkc:function hkc(){},
hkd:function hkd(d){this.a=d},
abv:function abv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
haD:function haD(d){this.a=d},
bkW:function bkW(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ahy:function ahy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
alW:function alW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alX:function alX(d,e,f,g,h){var _=this
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
_.bw$=g
_.ab$=h
_.c=_.a=null},
bOC:function bOC(d){this.a=d},
bOx:function bOx(){},
bOD:function bOD(){},
bOv:function bOv(){},
bOw:function bOw(){},
bOB:function bOB(d){this.a=d},
bOy:function bOy(d,e){this.a=d
this.b=e},
bOA:function bOA(d,e){this.a=d
this.b=e},
bOz:function bOz(d,e){this.a=d
this.b=e},
bOu:function bOu(d){this.a=d},
bg0:function bg0(d,e){this.b=d
this.a=e},
RD:function RD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDH:function aDH(d,e,f){this.b=d
this.c=e
this.a=f},
aC3:function aC3(d,e,f){this.a=d
this.b=e
this.c=f},
awT:function awT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awU:function awU(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.du$=e
_.be$=f
_.c=_.a=null},
cuJ:function cuJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuK:function cuK(d){this.a=d},
cuI:function cuI(d){this.a=d},
cuL:function cuL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cuM:function cuM(){},
cuN:function cuN(d,e){this.a=d
this.b=e},
cuO:function cuO(){},
cuP:function cuP(d){this.a=d},
cuF:function cuF(d){this.a=d},
cuG:function cuG(d,e){this.a=d
this.b=e},
cuH:function cuH(d,e,f){this.a=d
this.b=e
this.c=f},
cuA:function cuA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuC:function cuC(d,e){this.a=d
this.b=e},
cuD:function cuD(d,e){this.a=d
this.b=e},
cuB:function cuB(d,e){this.a=d
this.b=e},
cuz:function cuz(){},
cuE:function cuE(){},
bfs:function bfs(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cV3:function cV3(){},
aAP:function aAP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAQ:function aAQ(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cJE:function cJE(d){this.a=d},
cJD:function cJD(d){this.a=d},
cJM:function cJM(d,e){this.a=d
this.b=e},
cJN:function cJN(d,e){this.a=d
this.b=e},
cJO:function cJO(d){this.a=d},
cJL:function cJL(d){this.a=d},
cJP:function cJP(d){this.a=d},
cJQ:function cJQ(d,e){this.a=d
this.b=e},
cJR:function cJR(){},
cJS:function cJS(d){this.a=d},
cJG:function cJG(d){this.a=d},
cJH:function cJH(d,e){this.a=d
this.b=e},
cJF:function cJF(d,e){this.a=d
this.b=e},
cJI:function cJI(){},
cJJ:function cJJ(){},
cJK:function cJK(d,e){this.a=d
this.b=e},
aBO:function aBO(){},
aJj:function aJj(){},
hse(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.buI((w-450*u)/2,(v-900*u)/2,u)},
ahm:function ahm(){},
fiC:function fiC(d){this.a=d},
aNe:function aNe(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
ft1:function ft1(d){this.a=d},
anX:function anX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anY:function anY(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qw$=f
_.Nd$=g
_.apo$=h
_.bw$=i
_.ab$=j
_.c=_.a=null},
bWu:function bWu(d){this.a=d},
bWt:function bWt(){},
bWr:function bWr(d){this.a=d},
bWp:function bWp(){},
bWq:function bWq(d){this.a=d},
bWm:function bWm(d,e){this.a=d
this.b=e},
bWn:function bWn(){},
bWo:function bWo(d){this.a=d},
bWs:function bWs(d,e){this.a=d
this.b=e},
bWl:function bWl(d){this.a=d},
bwr:function bwr(d,e){this.b=d
this.a=e},
fiD:function fiD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fiE:function fiE(d,e,f){this.a=d
this.b=e
this.c=f},
fiF:function fiF(d,e,f){this.a=d
this.b=e
this.c=f},
fiG:function fiG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiH:function fiH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiI:function fiI(){},
anV:function anV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anW:function anW(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qw$=f
_.Nd$=g
_.apo$=h
_.bw$=i
_.ab$=j
_.c=_.a=null},
bW7:function bW7(){},
bWi:function bWi(d,e){this.a=d
this.b=e},
bWj:function bWj(d){this.a=d},
bWk:function bWk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWe:function bWe(){},
bWd:function bWd(d,e){this.a=d
this.b=e},
bWf:function bWf(d,e){this.a=d
this.b=e},
bWg:function bWg(){},
bWh:function bWh(d){this.a=d},
bW9:function bW9(d){this.a=d},
bWa:function bWa(d){this.a=d},
bWb:function bWb(d){this.a=d},
bW8:function bW8(d,e){this.a=d
this.b=e},
bWc:function bWc(d){this.a=d},
bmM:function bmM(d,e){this.b=d
this.a=e},
dxV:function dxV(){},
a3o:function a3o(d,e){this.a=d
this.b=e},
anR:function anR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anS:function anS(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qw$=e
_.Nd$=f
_.apo$=g
_.bw$=h
_.ab$=i
_.c=_.a=null},
bVU:function bVU(d){this.a=d},
bVT:function bVT(){},
bVS:function bVS(){},
bVM:function bVM(){},
bVN:function bVN(){},
bVR:function bVR(d,e,f){this.a=d
this.b=e
this.c=f},
bVQ:function bVQ(d){this.a=d},
bVO:function bVO(d,e){this.a=d
this.b=e},
bVP:function bVP(d){this.a=d},
bmb:function bmb(d,e){this.b=d
this.a=e},
aDK:function aDK(){},
bjH:function bjH(){},
aDM:function aDM(){},
bjI:function bjI(){},
aDN:function aDN(){},
bjJ:function bjJ(){},
uS(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.hS,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.V(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.q(u,A.A(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.m),u,u,u,u,B.PR,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hBz(d,e,f,g,h,i,j){return new C.anT(i,h,d,j,e,f,g,null)},
a7X:function a7X(d,e){this.c=d
this.a=e},
bmi:function bmi(d){this.a=d},
u1:function u1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVL:function bVL(d){this.a=d},
J1:function J1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Xj:function Xj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bp7:function bp7(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e8Q:function e8Q(d,e){this.a=d
this.b=e},
e8R:function e8R(d){this.a=d},
e8S:function e8S(d,e){this.a=d
this.b=e},
e8O:function e8O(d){this.a=d},
e8P:function e8P(d){this.a=d},
e8N:function e8N(d){this.a=d},
e8L:function e8L(d){this.a=d},
e8M:function e8M(d){this.a=d},
e8K:function e8K(d,e){this.a=d
this.b=e},
e8T:function e8T(d){this.a=d},
e8U:function e8U(d,e){this.a=d
this.b=e},
e8V:function e8V(d,e){this.a=d
this.b=e},
e8W:function e8W(d,e){this.a=d
this.b=e},
e8Z:function e8Z(d,e){this.a=d
this.b=e},
e9_:function e9_(d,e){this.a=d
this.b=e},
e90:function e90(d,e){this.a=d
this.b=e},
e91:function e91(d,e){this.a=d
this.b=e},
e92:function e92(d,e){this.a=d
this.b=e},
e93:function e93(d,e,f){this.a=d
this.b=e
this.c=f},
e94:function e94(d,e){this.a=d
this.b=e},
e95:function e95(d,e){this.a=d
this.b=e},
e8X:function e8X(d){this.a=d},
e8Y:function e8Y(d){this.a=d},
a1c:function a1c(d,e){this.a=d
this.b=e},
anT:function anT(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
anU:function anU(d){var _=this
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
bW5:function bW5(d){this.a=d},
bW6:function bW6(d){this.a=d},
bW4:function bW4(d){this.a=d},
bVW:function bVW(d){this.a=d},
bVX:function bVX(d){this.a=d},
bVV:function bVV(d){this.a=d},
bW1:function bW1(d,e,f){this.a=d
this.b=e
this.c=f},
bW2:function bW2(d){this.a=d},
bVZ:function bVZ(d,e){this.a=d
this.b=e},
bW_:function bW_(d,e,f){this.a=d
this.b=e
this.c=f},
bW3:function bW3(){},
bW0:function bW0(d,e){this.a=d
this.b=e},
bVY:function bVY(d){this.a=d},
UZ:function UZ(d,e){this.c=d
this.a=e},
anQ:function anQ(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bVw:function bVw(d){this.a=d},
bVx:function bVx(d){this.a=d},
bVH:function bVH(){},
bVG:function bVG(d,e,f){this.a=d
this.b=e
this.c=f},
bVB:function bVB(d,e){this.a=d
this.b=e},
bVA:function bVA(d,e){this.a=d
this.b=e},
bVC:function bVC(d){this.a=d},
bVD:function bVD(d,e){this.a=d
this.b=e},
bVE:function bVE(d,e){this.a=d
this.b=e},
bVz:function bVz(d,e){this.a=d
this.b=e},
bVF:function bVF(d,e,f){this.a=d
this.b=e
this.c=f},
bVy:function bVy(d,e){this.a=d
this.b=e},
iAG(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.akG(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.W(Date.now(),0,!1))
s=new C.fUc(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("X<1>"),q=q.k("cQ<1,o>"),o=q.k("L.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zV)m.push(l===D.xp?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cG(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cG(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jc(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jc(h,a2,a2)-A.jc(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.X(a4,new C.fUa(u,f),p),new C.fUb(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aJ(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aJ(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.av(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iAH(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.akG(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fUh(v,e)
q=new C.fUf(v)
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
if(d!=null&&v.am(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.am(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("ba<2>")
d=A.d9(new A.ba(p,d),d.k("L.E"))
n=A.B(d,A.a3(d).k("cl.E"))
B.d.fj(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eu(l,new C.fUg(p,m));k.A();t=f){j=l.gO(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aJ(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
ikR(d,e,f,g){var w,v,u=C.iAI(d,e)
if(u<=0||f.length<=u)return new A.ah0(!1,D.EH,f)
if(g.q(0,e.a))return new A.ah0(!1,D.EH,f)
w=A.T(f).c
v=A.cH(f,0,A.dy(u,"count",x.S),w).de(0)
return new A.ah0(!0,A.cH(f,u,null,w).de(0),v)},
ikS(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.akG(d3),d2=d1.length
if(d2===0)return D.hVi
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c0(0,t.a,new C.dn0(t))}s=new C.dnh(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dn9(r)
for(p=new A.ds(v,v.r,v.e);p.A();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dn8(r)
l=A.S(w,x.do)
for(p=new A.ds(v,v.r,v.e);p.A();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.bV(l.c0(0,k,new C.dn1()),o)}h=new C.dn7(s)
g=new C.dn6(l,r)
p=v.$ti.k("ba<2>")
o=p.k("X<L.E>")
f=A.B(new A.X(new A.ba(v,p),new C.dn2(h),o),o.k("L.E"))
e=f.length===0?new A.ba(v,p).gH(0):B.d.gH(f)
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
a9=new C.dnf(new C.dnb(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.ds(v,v.r,v.e),j=a2.gaom(a2);o.A();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eB([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.K(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nU(J.dO(i==null?B.M:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.dn_(a2,new C.dng(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.ds(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.A();){w=d2.d.b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+156)}for(d2=b5.length,u=0;u<d2;++u){w=b5[u].b
o=w.a
b9=Math.min(b9,o-42)
c0=Math.max(c0,o+42)
c1=Math.max(c1,w.b+112+40)}c2=24-(b9===1/0?0:b9)
d2=b4.$ti.k("cv<1>")
d2=A.B(new A.cv(b4,d2),d2.k("L.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.H9(o,new A.m(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Lv(c5.a,new A.m(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cv<1>")
d2=A.B(new A.cv(b6,d2),d2.k("L.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.dn3(c6,b4))
for(d2=new A.cj(a4,a4.$ti.k("cj<1,2>")).gae(0),w=x.g;d2.A();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aM(c7.b);j.A();){i=j.gO(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.m(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eu(j,new C.dn4(c8));i.A();)o.push(j.gO(0).b)
if(o.length===0)continue
B.d.b_(o,new C.dn5())
c6.push(new C.aN8(new A.m(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bjN(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hRB(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(d)
return w==null?null:w.b[1]},
hKS(d,e,f,g,h,i,j,k,l,m,n){return new C.a1q(k,f,j,e,l,n,m,d,g,h,i,null)},
aFL(d,e,f,g,h,i,j){return new C.bnC(i,d,e,f,j,h,g,null)},
at2:function at2(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHl:function aHl(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
eav:function eav(d){this.a=d},
eau:function eau(d){this.a=d},
eax:function eax(d,e){this.a=d
this.b=e},
eay:function eay(d,e){this.a=d
this.b=e},
eaz:function eaz(d){this.a=d},
eat:function eat(d,e){this.a=d
this.b=e},
eaw:function eaw(d){this.a=d},
eaB:function eaB(d){this.a=d},
eaA:function eaA(d,e){this.a=d
this.b=e},
asX:function asX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHi:function aHi(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e9W:function e9W(d){this.a=d},
e9U:function e9U(d){this.a=d},
e9V:function e9V(d){this.a=d},
e9X:function e9X(d,e){this.a=d
this.b=e},
e9R:function e9R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9i:function e9i(d){this.a=d},
e9j:function e9j(d,e){this.a=d
this.b=e},
e9A:function e9A(d){this.a=d},
e9y:function e9y(d){this.a=d},
e9z:function e9z(d,e){this.a=d
this.b=e},
e9B:function e9B(d){this.a=d},
e9C:function e9C(d,e){this.a=d
this.b=e},
e9Q:function e9Q(d,e){this.a=d
this.b=e},
e9x:function e9x(d){this.a=d},
e9w:function e9w(d){this.a=d},
e9v:function e9v(d,e){this.a=d
this.b=e},
e9N:function e9N(){},
e9O:function e9O(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e9M:function e9M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e9G:function e9G(d){this.a=d},
e9H:function e9H(d,e,f){this.a=d
this.b=e
this.c=f},
e9F:function e9F(d,e){this.a=d
this.b=e},
e9I:function e9I(d,e){this.a=d
this.b=e},
e9D:function e9D(d,e){this.a=d
this.b=e},
e9E:function e9E(){},
e9J:function e9J(d,e){this.a=d
this.b=e},
e9K:function e9K(d){this.a=d},
e9L:function e9L(d,e){this.a=d
this.b=e},
e9P:function e9P(d,e){this.a=d
this.b=e},
e96:function e96(d,e){this.a=d
this.b=e},
e97:function e97(d,e){this.a=d
this.b=e},
e9Z:function e9Z(d,e,f){this.a=d
this.b=e
this.c=f},
e9T:function e9T(d,e,f){this.a=d
this.b=e
this.c=f},
e9S:function e9S(d){this.a=d},
e98:function e98(d){this.a=d},
e99:function e99(d){this.a=d},
e9a:function e9a(){},
e9b:function e9b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9f:function e9f(d,e){this.a=d
this.b=e},
e9e:function e9e(d,e){this.a=d
this.b=e},
e9d:function e9d(d){this.a=d},
e9g:function e9g(d,e){this.a=d
this.b=e},
e9c:function e9c(d){this.a=d},
e9Y:function e9Y(d){this.a=d},
e9s:function e9s(){},
e9t:function e9t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9r:function e9r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9n:function e9n(d,e,f){this.a=d
this.b=e
this.c=f},
e9m:function e9m(d,e,f){this.a=d
this.b=e
this.c=f},
e9k:function e9k(d,e){this.a=d
this.b=e},
e9o:function e9o(d){this.a=d},
e9p:function e9p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9l:function e9l(d,e){this.a=d
this.b=e},
e9q:function e9q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9u:function e9u(d,e){this.a=d
this.b=e},
ea5:function ea5(){},
ea6:function ea6(d,e){this.a=d
this.b=e},
ea7:function ea7(d){this.a=d},
ea8:function ea8(d,e){this.a=d
this.b=e},
ea1:function ea1(d){this.a=d},
ea_:function ea_(d,e){this.a=d
this.b=e},
ea2:function ea2(d,e){this.a=d
this.b=e},
ea3:function ea3(d,e){this.a=d
this.b=e},
ea4:function ea4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ea9:function ea9(d){this.a=d},
ea0:function ea0(d){this.a=d},
e9h:function e9h(d){this.a=d},
bjL:function bjL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dmY:function dmY(d){this.a=d},
dmX:function dmX(d,e){this.a=d
this.b=e},
dmZ:function dmZ(d){this.a=d},
dmW:function dmW(d,e){this.a=d
this.b=e},
fUc:function fUc(d,e){this.a=d
this.b=e},
fUd:function fUd(d){this.a=d},
fUe:function fUe(){},
fUa:function fUa(d,e){this.a=d
this.b=e},
fUb:function fUb(){},
fUh:function fUh(d,e){this.a=d
this.b=e},
fUi:function fUi(d){this.a=d},
fUj:function fUj(){},
fUf:function fUf(d){this.a=d},
fUg:function fUg(d,e){this.a=d
this.b=e},
Lv:function Lv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
H9:function H9(d,e){this.a=d
this.b=e},
bjN:function bjN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dn0:function dn0(d){this.a=d},
dnh:function dnh(d){this.a=d},
dn9:function dn9(d){this.a=d},
dna:function dna(){},
dn8:function dn8(d){this.a=d},
dn1:function dn1(){},
dn7:function dn7(d){this.a=d},
dn6:function dn6(d,e){this.a=d
this.b=e},
dn2:function dn2(d){this.a=d},
dnb:function dnb(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dnc:function dnc(d){this.a=d},
dnd:function dnd(d){this.a=d},
dne:function dne(){},
dnf:function dnf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dng:function dng(){},
dn_:function dn_(d,e,f,g,h,i,j,k,l,m){var _=this
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
dn3:function dn3(d,e){this.a=d
this.b=e},
dn4:function dn4(d){this.a=d},
dn5:function dn5(){},
aN8:function aN8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjO:function bjO(d,e){this.b=d
this.a=e},
dni:function dni(){},
dnj:function dnj(d){this.a=d},
dnk:function dnk(d){this.a=d},
dnl:function dnl(){},
bnD:function bnD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biO:function biO(d,e){this.b=d
this.a=e},
bBT:function bBT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fyP:function fyP(d){this.a=d},
br1:function br1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f8j:function f8j(d){this.a=d},
f8i:function f8i(d,e){this.a=d
this.b=e},
a1q:function a1q(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aFJ:function aFJ(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dDH:function dDH(d,e){this.a=d
this.b=e},
dDG:function dDG(d){this.a=d},
dDE:function dDE(d){this.a=d},
dDF:function dDF(d){this.a=d},
dDQ:function dDQ(d){this.a=d},
dDR:function dDR(d){this.a=d},
dDP:function dDP(d,e){this.a=d
this.b=e},
dDS:function dDS(){},
dDV:function dDV(d){this.a=d},
dDO:function dDO(d,e){this.a=d
this.b=e},
dDU:function dDU(){},
dDW:function dDW(d){this.a=d},
dDN:function dDN(d,e){this.a=d
this.b=e},
dDX:function dDX(d){this.a=d},
dDM:function dDM(d){this.a=d},
dDY:function dDY(d){this.a=d},
dDL:function dDL(d){this.a=d},
dDZ:function dDZ(d){this.a=d},
dDK:function dDK(d){this.a=d},
dE_:function dE_(d){this.a=d},
dDJ:function dDJ(d){this.a=d},
dE0:function dE0(d){this.a=d},
dDI:function dDI(d,e){this.a=d
this.b=e},
dDT:function dDT(d){this.a=d},
afR:function afR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bnC:function bnC(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
afQ:function afQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bnB:function bnB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dE1:function dE1(d){this.a=d},
dE2:function dE2(d,e){this.a=d
this.b=e},
aFK:function aFK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aMa:function aMa(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afS:function afS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dEb:function dEb(d){this.a=d},
H5:function H5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hFD(d){var w=d.cK,v=x.N
return w.j5(w,new C.cj2(),v,v)},
ic2(d){var w=d.bG
if(w>=0)return w
return 5},
hFF(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hFD(d).h(0,v)
if(w==null||w.length===0)return null
return A.bf(w)},
hFE(d,e){var w=C.hFF(d,e)
if(w!=null&&w.cb(new A.W(Date.now(),0,!1)))return!0
return!1},
ic3(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hFD(d),w,w)
u=C.hFF(d,e)
t=u!=null&&u.cb(new A.W(Date.now(),0,!1))?u:new A.W(Date.now(),0,!1)
v.n(0,s,t.bM(A.dw(30,0,0,0,0,0).a).aa().ag())
d.cK=v},
b42(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b42=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.m0(t,B.KF),$async$b42)
case 3:if(l){u=!0
w=1
break}u=A.lz(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.KF,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b42,v)},
cj2:function cj2(){},
ic0(){var w,v=$.oh(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hp(u)},
JY(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JY=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$JY)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f9("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JY)
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
p=A.ad(m)
$.an.$1("[family tree sync codes] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$JY,v)},
a9G(d){return C.ic1(d)},
ic1(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a9G=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$a9G)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i2("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.d_,null),$async$a9G)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ad(p)
$.an.$1("[family tree sync codes] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a9G,v)},
cj1(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cj1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JY(),$async$cj1)
case 3:t=m.il(f),t=t.gae(t),s=x.f
case 4:if(!t.A()){w=5
break}r=t.gO(t)
q=r.b
if(s.b(q)){p=J.a0(q)
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
return A.i($async$cj1,v)},
P6(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$P6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cj1(d),$async$P6)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JY(),$async$P6)
case 6:s=f
r=J.a0(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dE(A.a1(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a9G(s),$async$P6)
case 9:case 8:u=t
w=1
break
case 5:n=C.ic0()
w=10
return A.b(C.JY(),$async$P6)
case 10:s=f
J.aL(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a9G(s),$async$P6)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$P6,v)},
b41(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b41=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JY(),$async$b41)
case 3:t=f
for(s=J.dz(t),r=s.gdV(t),r=r.de(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a9G(t),$async$b41)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b41,v)},
a9H(d,e,f){var w=0,v=A.j(x.H),u
var $async$a9H=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.at1(d,e),$async$a9H)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.P6(d),$async$a9H)
case 7:w=4
break
case 5:w=8
return A.b(C.b41(d),$async$a9H)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a9H,v)},
asW(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$asW=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.at1(f,e),$async$asW)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.ce(),$async$asW)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JY(),$async$asW)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a0(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asW,v)},
b40(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b40=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.ce(),$async$b40)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JY(),$async$b40)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a0(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b40,v)},
ic4(){var w,v=$.oh(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hp(u)},
asZ(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$asZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$asZ)
case 3:if(!g){u=null
w=1
break}t=C.ic4()
w=4
return A.b(A.Xk(),$async$asZ)
case 4:s=g
r=B.e5.aL(B.T.au(d.fa(),null))
r=B.cS.gcp().aL(r)
q=e?999:2
J.aL(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a9I(s),$async$asZ)
case 5:p=e?999:2
u=new A.a2C("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asZ,v)},
asY(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$asY=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Xk(),$async$asY)
case 3:p=a0
o=J.a0(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a0(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.h.L(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b40(J.k(l==null?"":l),j),$async$asY)
case 4:if(!a0)$.an.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{r=B.ch.cJ(0,B.cM.aL(t))
s=C.hFG(r)}catch(f){q=A.ad(f)
$.an.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.X(p,g)
else{m=x.N
l=x.z
l=A.dE(A.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a9I(p),$async$asY)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asY,v)},
hFG(d){var w,v,u,t,s=null
try{w=B.T.aN(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.ic6(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ad(t)
$.an.$1("[family tree sync] parse: "+A.v(v))
return s}},
ho_(d){var w=0,v=A.j(x.m),u,t,s
var $async$ho_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.asY(t[1])
w=1
break}u=null
w=1
break}u=C.hFG(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ho_,v)},
ic6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cL(v,x.f)
u=A.ct(u,new C.cj4(),u.$ti.k("L.E"),x.k)
t=A.a3(u).k("X<L.E>")
s=A.B(new A.X(u,new C.cj5(),t),t.k("L.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bf(J.k(u==null?"":u))
if(r==null)r=new A.W(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.il(p),t=t.gae(t),o=x.B;t.A();){n=t.gO(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cL(l,u)
n=A.ct(n,new C.cj6(),n.$ti.k("L.E"),o)
k=A.a3(n).k("X<L.E>")
j=A.B(new A.X(n,new C.cj7(),k),k.k("L.E"))
if(j.length!==0)q.n(0,m,j)}return new C.at_(h,w,s,r,q)},
at1(d,e){var w=0,v=A.j(x.y),u,t
var $async$at1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(R.OX(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.BL(d),$async$at1)
case 3:u=t.cM(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$at1,v)},
cjd(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cjd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.BL(d),$async$cjd)
case 3:t=s.b8(f,new C.cje(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b_(t,new C.cjf())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cjd,v)},
Xl(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Xl=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.at1(e,d),$async$Xl)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.P6(e),$async$Xl)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.BL(e),$async$Xl)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dO(r,new C.cjb(g))
r=A.B(t,t.$ti.k("L.E"))}t=J.a0(r)
if(t.gar(r)){u=null
w=1
break}t=t.dS(r,new C.cjc(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Mo(e,o),$async$Xl)
case 14:n=i
if(J.cM(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.at_(s,B.a.i(e.toLowerCase()),r,new A.W(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Xl,v)},
b45(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b45=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Xl(d,e,f,g),$async$b45)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aD(t,s,"_")
r=q.a
u=A.HP(A.Lq(q.fa(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b45,v)},
b44(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b44=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Xl(d,e,f,g),$async$b44)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.asZ(r,f),$async$b44)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aK6(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b44,v)},
Xm(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Xm=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ho_(a0),$async$Xm)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.asW(g.a,d,e,f,s,r),$async$Xm)
case 6:if(!a2){if(r)throw A.Y(A.be("This backup expired or the sender's tree is no longer available."))
throw A.Y(A.be("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bHu(e,j),$async$Xm)
case 12:case 11:w=13
return A.b(C.ako(e,j,s),$async$Xm)
case 13:h=n.h(0,i)
w=h!=null&&J.cM(h)?14:15
break
case 14:w=16
return A.b(C.BV(e,i,h),$async$Xm)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.buO(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Xm,v)},
at_:function at_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cj9:function cj9(){},
cja:function cja(){},
cj8:function cj8(){},
cj4:function cj4(){},
cj5:function cj5(){},
cj6:function cj6(){},
cj7:function cj7(){},
cje:function cje(){},
cjf:function cjf(){},
cjb:function cjb(d){this.a=d},
cjc:function cjc(d){this.a=d},
hxG(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fc(null,x.H)
return A.hf(d,new C.at0(w,e,g,i,f,h,null),!0,null,x.H)},
dmV(d,e,f,g,h,i,j,k){return new C.bjK(i,e,k,j,g,f,h,d,null)},
at0:function at0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHk:function aHk(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
eai:function eai(d){this.a=d},
eaj:function eaj(d,e,f){this.a=d
this.b=e
this.c=f},
ean:function ean(d,e){this.a=d
this.b=e},
eao:function eao(d){this.a=d},
eaf:function eaf(d){this.a=d},
eag:function eag(d,e){this.a=d
this.b=e},
eah:function eah(d,e){this.a=d
this.b=e},
eam:function eam(d){this.a=d},
eal:function eal(d,e){this.a=d
this.b=e},
eak:function eak(){},
eaq:function eaq(d){this.a=d},
ear:function ear(d,e){this.a=d
this.b=e},
eap:function eap(d,e){this.a=d
this.b=e},
dnm:function dnm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bjM:function bjM(d,e,f){this.d=d
this.e=e
this.a=f},
af5:function af5(d,e,f){this.c=d
this.d=e
this.a=f},
bjK:function bjK(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bjP:function bjP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a1K:function a1K(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aHj:function aHj(){var _=this
_.d=!1
_.c=_.a=_.e=null},
eaa:function eaa(d,e){this.a=d
this.b=e},
eab:function eab(d){this.a=d},
eac:function eac(d){this.a=d},
ead:function ead(d){this.a=d},
eae:function eae(d){this.a=d},
a1L:function a1L(d){this.a=d},
bp8:function bp8(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
eas:function eas(d,e){this.a=d
this.b=e},
b2t(d,e){return new C.b2s(d,e,null)},
b2s:function b2s(d,e,f){this.c=d
this.d=e
this.a=f},
iDd(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
iLq(d){return A.bU(B.L,null,new C.hcb(new C.uD(A.Q(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hHJ(d,e){return new C.aw7(e,d,null)},
aUU(d,e,f,g,h,i,j){var w=C.iDd(i)
if(w!=null)return A.bv(e,new A.a4(j,f,new C.a8J(w,!0,null),null),B.ap)
return A.aUd(e,B.c1,f,g,h,i,j)},
mp:function mp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a8J:function a8J(d,e,f){this.c=d
this.d=e
this.a=f},
boM:function boM(d,e){var _=this
_.e=_.d=$
_.du$=d
_.be$=e
_.c=_.a=null},
dW9:function dW9(d){this.a=d},
dWa:function dWa(){},
dWb:function dWb(d,e){this.a=d
this.b=e},
boL:function boL(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
hcb:function hcb(d){this.a=d},
hca:function hca(d,e){this.a=d
this.b=e},
hc9:function hc9(d,e){this.a=d
this.b=e},
hc8:function hc8(d,e){this.a=d
this.b=e},
aw7:function aw7(d,e,f){this.c=d
this.d=e
this.a=f},
ct0:function ct0(d,e){this.a=d
this.b=e},
aPB:function aPB(){},
iLa(d){var w=null
return A.cf(w,w,!0,w,new C.hby(),d,w,!0,!0,x.e2)},
iMv(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.hju(h,g,f,e),d,w,!0,!0,x.N)},
iLc(d,e){var w=null
return A.cf(w,w,!0,w,new C.hbC(e),d,w,!0,!0,x.dY)},
iLb(d){var w=null
return A.cf(w,w,!0,w,new C.hbB(),d,w,!0,!0,x.c5)},
aXS:function aXS(d,e){this.a=d
this.b=e},
aXR:function aXR(d){this.a=d},
aVV:function aVV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hby:function hby(){},
hju:function hju(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hbC:function hbC(d){this.a=d},
hbB:function hbB(){},
a0m:function a0m(d,e){this.c=d
this.a=e},
aCq:function aCq(){var _=this
_.d=$
_.c=_.a=_.e=null},
deq:function deq(d){this.a=d},
der:function der(d){this.a=d},
dep:function dep(d,e){this.a=d
this.b=e},
des:function des(d){this.a=d},
det:function det(d){this.a=d},
a0l:function a0l(d){this.a=d},
aCp:function aCp(){this.d=$
this.c=this.a=null},
dem:function dem(d){this.a=d},
den:function den(d){this.a=d},
deo:function deo(d){this.a=d},
a_M:function a_M(d){this.a=d},
aB1:function aB1(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cLj:function cLj(){},
cLp:function cLp(d){this.a=d},
cLq:function cLq(d){this.a=d},
cLr:function cLr(d){this.a=d},
cLo:function cLo(){},
cLs:function cLs(d){this.a=d},
cLt:function cLt(d){this.a=d},
cLn:function cLn(){},
cLu:function cLu(d,e){this.a=d
this.b=e},
cLm:function cLm(d,e){this.a=d
this.b=e},
cLk:function cLk(d,e){this.a=d
this.b=e},
cLv:function cLv(d){this.a=d},
cLl:function cLl(){},
cLw:function cLw(d){this.a=d},
a3B:function a3B(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bBL:function bBL(){this.d=$
this.c=this.a=null},
fyk:function fyk(d,e){this.a=d
this.b=e},
fyl:function fyl(d){this.a=d},
fym:function fym(d,e){this.a=d
this.b=e},
ae6:function ae6(d,e){this.a=d
this.b=e},
GV:function GV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bBJ:function bBJ(d,e){var _=this
_.d=$
_.bw$=d
_.ab$=e
_.c=_.a=null},
fyi:function fyi(d,e){this.a=d
this.b=e},
aAV:function aAV(d,e){this.c=d
this.a=e},
bBK:function bBK(d,e){var _=this
_.d=$
_.bw$=d
_.ab$=e
_.c=_.a=null},
fyj:function fyj(d){this.a=d},
bBI:function bBI(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aRJ:function aRJ(){},
aRK:function aRK(){},
bJA(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.h.ba(u),s=B.n.D(B.h.S((u-t)*100),0,99),r=d<0?"-":"",q=A.of(B.n.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h9O(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aY(B.n.v(s),2,"0")
n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.GM(A.cX(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aUw(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aUw=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.ig().lg(85,1280,B.f5),$async$aUw)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fD(),$async$aUw)
case 8:r=e
if(J.aa(r)===0){u=null
w=1
break}q=C.hHI()
w=9
return A.b(C.ct_(q,r),$async$aUw)
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
o=A.ad(l)
$.an.$1("[worksheets] pick photo failed: "+A.v(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aUw,v)},
aUS(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aUS=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.csX(g)
w=1
break}if(!B.a.Y(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cM.aL(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.HQ(p,!0,null,o).d9(0,B.fQ),$async$aUS)
case 9:n=a1
w=10
return A.b(n.lk(),$async$aUS)
case 10:m=a1
w=11
return A.b(m.b.hs(B.hs),$async$aUS)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eU(B.dM.gaS(l))
k="data:image/png;base64,"+B.cS.gcp().aL(i)
if(J.aa(k)<=r){u=k
w=1
break}o=B.h.S(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.ad(f)
$.an.$1("[worksheets] thumbnail shrink failed: "+A.v(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aUS,v)},
h9O:function h9O(){},
uD:function uD(d){this.a=d},
aw6:function aw6(d,e,f){this.c=d
this.d=e
this.a=f},
aIU:function aIU(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f5t:function f5t(d,e){this.a=d
this.b=e},
f5k:function f5k(d){this.a=d},
f5l:function f5l(d){this.a=d},
f5r:function f5r(d,e){this.a=d
this.b=e},
f5q:function f5q(d,e){this.a=d
this.b=e},
f5n:function f5n(d,e){this.a=d
this.b=e},
f5m:function f5m(d,e){this.a=d
this.b=e},
f5o:function f5o(d){this.a=d},
f5p:function f5p(d,e){this.a=d
this.b=e},
f5s:function f5s(d,e){this.a=d
this.b=e},
f5f:function f5f(d,e){this.a=d
this.b=e},
f5j:function f5j(d){this.a=d},
f5i:function f5i(d,e){this.a=d
this.b=e},
f5h:function f5h(d){this.a=d},
f5u:function f5u(d,e){this.a=d
this.b=e},
f5v:function f5v(d,e){this.a=d
this.b=e},
f5g:function f5g(d,e){this.a=d
this.b=e},
hW0(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.W(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
h9P(d,e,f){var w=0,v=A.j(x.N),u
var $async$h9P=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.T.au(C.hW0(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h9P,v)},
bJC(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bJC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h9P(!0,d,e),$async$bJC)
case 4:w=3
return A.b(r.aw4(g,d,e.a),$async$bJC)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e5.aL(B.T.au(C.hW0(d,e,null),null))
u="NGMY_WS:"+B.l1.gcp().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJC,v)},
hMj(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hxh(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.aa(s)===0)return!1
if(J.dd(s,"NGMYWSSYNC2|"))return!0
if(J.dd(s,"NGMY_WS:"))return!0
if(J.eI(s,t))return!0
if(J.dd(s,"{"))try{w=B.T.aN(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iJ4(d){var w,v,u,t=C.hMj(d)
if(t==null)return null
if(C.hxh(t))return t
w=B.a.c8(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.hxh(v))return v}u=B.a.c8(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.hxh(v))return v}return null},
hxg(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.aa(q)===0)return r
if(J.dd(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.dd(q,"NGMY_WS:")){v=B.ch.cJ(0,B.cM.aL(J.no(q,8)))
w=t.a(B.T.aN(0,v,r))}else w=t.a(B.T.aN(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hqL(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bJB(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bJB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aw3(t[1]),$async$bJB)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hxg(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hxg(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJB,v)},
hxf(d){var w=B.n.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.m5(w,v,d.c,d.d,new A.W(Date.now(),0,!1))},
bJ4(){var w=0,v=A.j(x.o),u,t
var $async$bJ4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.I_(),$async$bJ4)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hxg(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJ4,v)},
hXf(d,e,f,g){return A.bU(B.L,null,new C.hjh(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
hjh:function hjh(d,e,f){this.a=d
this.b=e
this.c=f},
agc:function agc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f5x:function f5x(d,e){this.a=d
this.b=e},
f5y:function f5y(d,e){this.a=d
this.b=e},
f5z:function f5z(d,e){this.a=d
this.b=e},
f5A:function f5A(d,e){this.a=d
this.b=e},
f5w:function f5w(d){this.a=d},
aw0:function aw0(d,e,f){this.c=d
this.d=e
this.a=f},
bqx:function bqx(){var _=this
_.c=_.a=_.e=_.d=null},
f5a:function f5a(d,e){this.a=d
this.b=e},
f5b:function f5b(d){this.a=d},
f5c:function f5c(d){this.a=d},
aw5:function aw5(d){this.a=d},
aIT:function aIT(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f5e:function f5e(d){this.a=d},
f5d:function f5d(d){this.a=d},
ifw(d,e,f,g,h){return new C.PR(h,g,d,e,f,null)},
aNW:function aNW(d,e){this.a=d
this.b=e},
PR:function PR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIV:function aIV(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f5X:function f5X(){},
f5T:function f5T(d,e){this.a=d
this.b=e},
f5U:function f5U(d){this.a=d},
f5E:function f5E(d){this.a=d},
f5C:function f5C(d){this.a=d},
f5D:function f5D(d){this.a=d},
f5N:function f5N(d,e){this.a=d
this.b=e},
f5K:function f5K(d,e){this.a=d
this.b=e},
f5L:function f5L(d,e){this.a=d
this.b=e},
f5M:function f5M(d,e,f){this.a=d
this.b=e
this.c=f},
f5I:function f5I(d,e,f){this.a=d
this.b=e
this.c=f},
f5G:function f5G(d){this.a=d},
f5H:function f5H(d){this.a=d},
f5J:function f5J(d){this.a=d},
f6_:function f6_(d){this.a=d},
f5Z:function f5Z(d){this.a=d},
f60:function f60(d){this.a=d},
f5Y:function f5Y(d){this.a=d},
f5B:function f5B(d){this.a=d},
f5F:function f5F(d,e){this.a=d
this.b=e},
f5W:function f5W(d,e){this.a=d
this.b=e},
f5V:function f5V(d,e){this.a=d
this.b=e},
f5Q:function f5Q(d){this.a=d},
f5R:function f5R(d){this.a=d},
f5S:function f5S(d,e){this.a=d
this.b=e},
f5P:function f5P(d,e){this.a=d
this.b=e},
f5O:function f5O(d,e,f){this.a=d
this.b=e
this.c=f},
bDx:function bDx(){},
Bz(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aD(v,w,"_")},
aiQ(d,e,f){return C.iwl(d,e,f)},
iwl(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aiQ=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$aiQ)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ad(o)
$.an.$1("[worksheets] setString failed for "+e+": "+A.v(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiQ,v)},
aiP(d,e){return C.iwk(d,e)},
iwk(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aiP=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$aiP)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ad(q)
$.an.$1("[worksheets] remove failed for "+e+": "+A.v(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$aiP,v)},
iv8(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.UX(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bGn(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bGn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:q=B.a.i(d)
if(q.length===0){u=null
w=1
break}t=B.a.Y(q,"ngmy:thumb:")
if(!t)t=B.a.Y(q,"ngmy:ws-thumb:")
else t=!0
if(t){u=q
w=1
break}w=B.a.Y(q,"data:image")?3:4
break
case 3:w=5
return A.b(C.b7l(q),$async$bGn)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aUS(q,!1),$async$bGn)
case 6:r=f
if(r!=null&&B.a.Y(r,"data:image")&&r.length<=12e4){u=r
w=1
break}u=null
w=1
break
case 4:u=q
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGn,v)},
i2C(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rP(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rP(p,J.k(u==null?"":u),1,o,q)},
hqL(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cL(s,x.f)
w=A.ct(w,new C.cKC(),w.$ti.k("L.E"),x.Q)
v=A.a3(w).k("X<L.E>")
r=A.B(new A.X(w,new C.cKD(),v),v.k("L.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bf(J.k(t==null?"":t))
return new C.m5(w,v,u,r,t==null?new A.W(Date.now(),0,!1):t)},
iAC(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.xp
case"female":case"f":return D.p3
default:return D.zV}},
hS9(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hBA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.iAC(v==null?j:J.k(v))
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
m=m==null?j:B.h.L(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aK(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.h.L(k)
return new C.id(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
iAE(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Qd
case"viewer":return D.le
default:return D.vu}},
iAF(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HR(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aTs(d,e){return B.a.i(e.toLowerCase())===C.HR(d,e)&&d.y!==D.le},
uT(d,e){var w,v=d.y
if(v===D.le)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HR(d,e))return!0
if(v===D.Qd)return!0
v=d.e
return new A.O(v,A.hxn(),A.T(v).k("O<1,o>")).q(0,w)},
izZ(d){return J.dO(d,new C.fT5()).gI(0)},
hk2(d){var w=0,v=A.j(x.y),u,t
var $async$hk2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.BL(d),$async$hk2)
case 3:u=t.rK(f,new C.hk3(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hk2,v)},
bHu(d,e){var w=0,v=A.j(x.H),u,t
var $async$bHu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BL(d),$async$bHu)
case 3:t=g
if(J.rK(t,new C.fQA(e))){w=1
break}if(C.izZ(t)>=2)throw A.Y(A.be("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bHu,v)},
ao_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cL(h,x.f)
w=A.ct(w,new C.bWx(),w.$ti.k("L.E"),x.P)
v=A.a3(w).k("X<L.E>")
g=A.B(new A.X(w,new C.bWy(),v),v.k("L.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bWz(),x.N)
t=A.B(w,w.$ti.k("aj.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bf(J.k(q==null?"":q))
if(q==null)q=new A.W(Date.now(),0,!1)
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.h.L(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.iAE(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aM(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.bK)
l=x.f
k=x.N
j=x.z
while(f.A()){i=f.gO(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.li(w,v,s,!r,t,g,q,p,o,n,m)},
hSo(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.av(v,0,8)},
E7(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$E7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ty(d),$async$E7)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aB(),$async$E7)
case 4:t=f
w=5
return A.b(t.a98(0),$async$E7)
case 5:w=6
return A.b(C.fGr(t,l),$async$E7)
case 6:s=f
if(J.cM(s)){u=s
w=1
break}r=B.a.ga_(B.a.i(l.toLowerCase()))
q=t.a
p=J.a0(q)
o=A.aW(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hN_(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pz(l,n),$async$E7)
case 11:u=n
w=1
break
case 10:case 8:m=A.aW(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.ga_(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hN_(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pz(l,n),$async$E7)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$E7,v)},
fGr(d,e){return C.isj(d,e)},
isj(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fGr=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a0(a3)
a5=A.aW(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bz(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.T.aN(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aM(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.A()){w=8
break}o=f.gO(f)
n=B.a.i(J.k(o))
if(J.aa(n)===0){w=7
break}m=A.aW(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bz(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.T.aN(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hqL(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aW(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bz(a9)+"_"+n))
i=C.iv8(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b7l(h),$async$fGr)
case 17:g=b1
if(g!=null){i=i.UX(g)
p=!0}case 16:J.bV(q,i)
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
case 8:J.TI(q,new C.fGs())
if(p&&J.aa(q)!==0)C.pz(a9,q)
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
return A.i($async$fGr,v)},
bHY(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bHY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ty(d),$async$bHY)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.E7(r),$async$bHY)
case 4:t=p.aM(g)
case 5:if(!t.A()){w=6
break}s=t.gO(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHY,v)},
hN_(d){var w,v,u,t
try{w=B.T.aN(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cL(w,x.f)
v=A.ct(v,new C.fBT(),v.$ti.k("L.E"),x.fA)
u=A.a3(v).k("X<L.E>")
v=A.B(new A.X(v,new C.fBU(),u),u.k("L.E"))
B.d.b_(v,new C.fBV())
return v}catch(t){v=A.a([],x.D)
return v}},
pz(d,e){return C.iL_(d,e)},
iL_(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pz=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Ty(b2),$async$pz)
case 3:a8=b5
if(J.aa(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aB(),$async$pz)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bz(a8)
p=A.aW(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.T.aN(0,p,null)),new C.hbm(),a2).fI(0)
a2=J.b8(b3,new C.hbn(),a2).c2(0,new C.hbo())
n=A.d9(a2,a2.$ti.k("L.E"))
a2=o,a2=A.e9(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.A()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eI(n,m)?17:18
break
case 17:a5=C.Bz(a8)
l=A.aW(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.ab2(l),$async$pz)
case 19:t=21
a5=C.Bz(a8)
k=A.aW(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.T.aN(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.ab2(a5==null?null:J.k(a5)),$async$pz)
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
return A.b(C.aiP(r,"ngmy_worksheet_item_v3_"+C.Bz(a8)+"_"+m),$async$pz)
case 29:w=30
return A.b(C.aiP(r,"ngmy_worksheet_thumb_v3_"+C.Bz(a8)+"_"+m),$async$pz)
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
case 14:case 10:a2=J.cK(b3),a3=a2.gae(b3)
case 31:if(!a3.A()){w=32
break}i=a3.gO(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bGn(h),$async$pz)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aiQ(r,"ngmy_worksheet_thumb_v3_"+C.Bz(a8)+"_"+a4,f),$async$pz)
case 40:g=i.UX(f)
w=38
break
case 39:$.an.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aiP(r,"ngmy_worksheet_thumb_v3_"+C.Bz(a8)+"_"+a4),$async$pz)
case 41:g=i.UX(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aiP(r,"ngmy_worksheet_thumb_v3_"+C.Bz(a8)+"_"+a4),$async$pz)
case 42:case 34:a4=i.a
w=43
return A.b(C.aiQ(r,"ngmy_worksheet_item_v3_"+C.Bz(a8)+"_"+a4,B.T.au(g.ak(),null)),$async$pz)
case 43:e=b5
if(!e){$.an.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.bV(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aiQ(r,"ngmy_worksheets_index_v3_"+C.Bz(a8),B.T.au(q,null)),$async$pz)
case 44:d=b5
if(!d){$.an.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eY(b3,new C.hbp(q))
a4=a3.$ti.k("cQ<1,a9<o,@>>")
a7=A.B(new A.cQ(a3,new C.hbq(),a4),a4.k("L.E"))
a0=a7
w=45
return A.b(C.aiQ(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.ga_(B.a.i(a8.toLowerCase()))),B.T.au(a0,null)),$async$pz)
case 45:w=46
return A.b(J.i1H(r),$async$pz)
case 46:if(a2.gco(b3)&&J.aa(q)===0){u=!1
w=1
break}u=!0
w=1
break
t=2
w=8
break
case 6:t=5
b1=s.pop()
a1=A.ad(b1)
$.an.$1("[worksheets] saveWorksheetProjects error: "+A.v(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$pz,v)},
MS(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$MS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.E7(d),$async$MS)
case 3:t=g
s=J.cK(t)
r=s.bm(t,new C.hk1(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.pz(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MS,v)},
bHJ(d,e){var w=0,v=A.j(x.H),u
var $async$bHJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.E7(d),$async$bHJ)
case 2:u=g
J.mH(u,new C.fTz(e))
w=3
return A.b(C.pz(d,u),$async$bHJ)
case 3:return A.h(null,v)}})
return A.i($async$bHJ,v)},
HT(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$HT)
case 3:l=f
k=A.a([],x._)
j=B.a.ga_(B.a.i(d.toLowerCase()))
i=A.aW(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.T.aN(0,i,null)
if(x.j.b(t)){j=J.cL(t,x.f)
j=A.ct(j,new C.fX9(),j.$ti.k("L.E"),x.k)
s=A.a3(j).k("X<L.E>")
r=A.B(new A.X(j,new C.fXa(),s),s.k("L.E"))
B.d.b_(r,new C.fXb())
k=r}}catch(h){}w=4
return A.b(C.fCK(d),$async$HT)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.isI(k,p,d)
j=A.T(o)
s=j.k("O<1,a9<o,@>>")
s=A.B(new A.O(o,new C.fXc(),s),s.k("aj.E"))
n=B.T.au(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.SF(d,o),$async$HT)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fXd(d),j),j.k("L.E"))
if(m.length!==0)C.aTd(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HT,v)},
hb7(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$hb7=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SF(d,e),$async$hb7)
case 3:t=J.dO(e,new C.hb8(d))
s=A.B(t,t.$ti.k("L.E"))
if(s.length===0){u=!0
w=1
break}u=C.aTd(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hb7,v)},
a5k(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a5k=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a5k)
case 2:n=g
m=B.a.ga_(B.a.i(d.toLowerCase()))
l=A.aW(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.T.aN(0,l,null)
if(x.j.b(u)){m=J.cL(u,x.f)
m=A.ct(m,new C.hjX(),m.$ti.k("L.E"),x.k)
t=A.a3(m).k("X<L.E>")
s=A.B(new A.X(m,new C.hjY(),t),t.k("L.E"))
o=s}}catch(k){}q=J.nM(o,new C.hjZ(e))
if(B.a.i(e.x).length===0&&C.uT(e,d)){m=B.a.i(d.toLowerCase())
p=e.aIY(e.y===D.le?D.le:D.vu,m)}else p=e
if(q===-1)J.lt(o,0,p)
else J.aL(o,q,p)
w=3
return A.b(C.SF(d,o),$async$a5k)
case 3:w=C.uT(p,d)?4:5
break
case 4:w=6
return A.b(C.aTc(C.HR(p,d),p),$async$a5k)
case 6:if(!g)$.an.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a5k,v)},
aTq(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aTq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HT(d),$async$aTq)
case 2:u=g
t=J.cK(u)
s=A.nU(t.eY(u,new C.fTg(e)))
t.bs(u,new C.fTh(e))
w=3
return A.b(C.SF(d,u),$async$aTq)
case 3:w=s!=null&&C.aTs(s,d)?4:5
break
case 4:w=6
return A.b(C.fBX(e),$async$aTq)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aTq,v)},
akG(d){var w=d.f,v=A.T(w).k("X<1>")
w=A.B(new A.X(w,new C.hk7(),v),v.k("L.E"))
return w},
huu(d,e){var w,v=d.f,u=A.nU(new A.X(v,new C.fSL(e),A.T(v).k("X<1>")))
v=C.akG(d)
w=A.T(v).k("X<1>")
v=A.B(new A.X(v,new C.fSM(e,u),w),w.k("L.E"))
B.d.b_(v,new C.fSN())
return v},
iAI(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hXj(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bm(C.huu(d,u),new C.hjv(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iCe(d,e){var w
if(e==null||e.length===0)return 1
w=C.huu(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fY0(),A.T(w).k("O<1,F>")).eJ(0,B.wP)+1},
iKT(d){var w,v=C.akG(d)
if(v.length===0)return null
w=new A.X(v,new C.hb1(),A.T(v).k("X<1>"))
if(!w.gar(0))return w.gH(0)
return B.d.gH(v)},
iAD(d){return A.J(["id",d.a,"name",d.b,"gender",C.hS9(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
iC9(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aR(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.I)(a0),++u){q=a0[u]
p=q.a
r.K(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.zV?n:q.c
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
d=q.aIT(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cVI(a1,w,a3.d,a2.y,s,a0,v)},
BL(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$BL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$BL)
case 3:q=f
p=B.a.ga_(B.a.i(d.toLowerCase()))
o=A.aW(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.T.aN(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.cL(t,x.f)
p=A.ct(p,new C.fX6(),p.$ti.k("L.E"),x.k)
s=A.a3(p).k("X<L.E>")
p=A.B(new A.X(p,new C.fX7(),s),s.k("L.E"))
B.d.b_(p,new C.fX8())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$BL,v)},
ako(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ako=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.vu:D.le
a7=C.HR(b2,b3)
w=2
return A.b(C.BL(b1),$async$ako)
case 2:a8=b5
a9=J.cK(a8)
b0=a9.bm(a8,new C.haX(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bHu(b1,b2),$async$ako)
case 5:case 4:if(b0===-1){u=b2.aIY(a6,a7)
a9.ck(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.zV?i:l.c
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
s.n(0,m,l.aIT(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("ba<2>")
s=A.B(new A.ba(s,k),k.k("L.E"))
k=a5?D.vu:D.le
u=t.cVK(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.SF(b1,a8),$async$ako)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aTc(B.a.i(b3.toLowerCase()),u),$async$ako)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ako,v)},
hNu(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.W(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("O<1,a9<o,@>>"),k=A.B(new A.O(m,C.hWn(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hNv(d,e){var w=new A.W(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("O<1,a9<o,@>>")
u=A.B(new A.O(u,C.hWn(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
iq3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a0(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ao_(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.hxn(),A.T(j).k("O<1,o>")).c2(0,new C.fCw())
t=A.B(j,j.$ti.k("L.E"))
if(u===v)s=D.vu
else s=B.d.q(t,u)?D.Qd:D.le
return w.aIY(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ao_(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cL(q,h)
h=A.ct(h,new C.fCx(),h.$ti.k("L.E"),x.P)
p=A.a3(h).k("X<L.E>")
o=A.B(new A.X(h,new C.fCy(),p),p.k("L.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fCz(),x.N).c2(0,new C.fCA())
t=A.B(h,h.$ti.k("L.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.vu
else s=B.d.q(t,u)?D.Qd:D.le
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bf(J.k(l==null?"":l))
if(l==null)l=new A.W(Date.now(),0,!1)
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.h.L(j)
if(j==null)j=0
return new C.li(h,r,p,!m,t,o,l,j,v,s,B.co)},
fCK(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fCK=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.aa(a0)===0){u=null
w=1
break}t=4
r=new C.fCO()
h=x.N
g=x.z
w=7
return A.b(A.hd(A.a([A.mb("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.mb("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.mb("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fCK)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.fB(l,o)
J.fB(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.aa(j)!==0)J.aL(m,j,k)}l=m
h=A.a3(l).k("ba<2>")
h=A.ct(new A.ba(l,h),new C.fCL(a0),h.k("L.E"),x.k)
l=A.a3(h).k("X<L.E>")
l=A.B(new A.X(h,new C.fCM(),l),l.k("L.E"))
B.d.b_(l,new C.fCN())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.ad(a1)
d=J.k(i)
l=B.a.q(d,"Could not find the table 'public.family_trees'")||B.a.q(d,'relation "public.family_trees" does not exist')
h=$.an
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
return A.i($async$fCK,v)},
isI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a0(e)
if(j.gar(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dS(e,new C.fHd(),v).c2(0,new C.fHe())
t=A.d9(u,u.$ti.k("L.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HR(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.le){m=q.e
m=!new A.O(m,A.hxn(),A.T(m).k("O<1,o>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.A();){v=j.gO(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.iC9(l,v)
o=C.HR(k,w)
p=v.d
s.n(0,u,o===w?k.biN(p,D.vu):k.biN(p,v.y))}j=s.$ti.k("ba<2>")
j=A.B(new A.ba(s,j),j.k("L.E"))
B.d.b_(j,new C.fHf())
return j},
SF(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$SF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$SF)
case 2:u=g
t=B.a.ga_(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fKf(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.T.au(s,null)),$async$SF)
case 3:return A.h(null,v)}})
return A.i($async$SF,v)},
aTc(d,e){return C.iyk(d,e)},
iyk(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aTc=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mE("family_trees",A.a([C.hNu(e,d)],p),null,B.d_),$async$aTc)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mE("family_trees",A.a([C.hNv(e,d)],p),null,B.d_),$async$aTc)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.ad(n)
$.an.$1("[family_trees] upsert error: "+A.v(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aTc,v)},
aTd(d,e){return C.iyl(d,e)},
iyl(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aTd=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("O<1,a9<o,@>>")
m=n.k("aj.E")
l=A.B(new A.O(e,new C.fPL(d),n),m)
r=l
w=7
return A.b(A.mE("family_trees",r,null,B.d_),$async$aTd)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fPM(d),n),m)
p=k
w=8
return A.b(A.mE("family_trees",p,null,B.d_),$async$aTd)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ad(i)
$.an.$1("[family_trees] bulk upsert error: "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aTd,v)},
fBX(d){return C.ipc(d)},
ipc(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fBX=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.T5("family_trees",A.J(["id",d],x.N,x.z),null,B.d_),$async$fBX)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ad(p)
$.an.$1("[family_trees] delete error: "+A.v(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fBX,v)},
rP:function rP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
m5:function m5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cKF:function cKF(){},
cKE:function cKE(){},
cKC:function cKC(){},
cKD:function cKD(){},
J0:function J0(d,e){this.a=d
this.b=e},
id:function id(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
anZ:function anZ(d,e){this.a=d
this.b=e},
fT5:function fT5(){},
hk3:function hk3(d){this.a=d},
fQA:function fQA(d){this.a=d},
li:function li(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bWB:function bWB(){},
bWA:function bWA(){},
bWx:function bWx(){},
bWy:function bWy(){},
bWz:function bWz(){},
fGs:function fGs(){},
fBT:function fBT(){},
fBU:function fBU(){},
fBV:function fBV(){},
hbm:function hbm(){},
hbn:function hbn(){},
hbo:function hbo(){},
hbp:function hbp(d){this.a=d},
hbq:function hbq(){},
hk1:function hk1(d){this.a=d},
fTz:function fTz(d){this.a=d},
fX9:function fX9(){},
fXa:function fXa(){},
fXb:function fXb(){},
fXc:function fXc(){},
fXd:function fXd(d){this.a=d},
hb8:function hb8(d){this.a=d},
hjX:function hjX(){},
hjY:function hjY(){},
hjZ:function hjZ(d){this.a=d},
fTg:function fTg(d){this.a=d},
fTh:function fTh(d){this.a=d},
hk7:function hk7(){},
fSL:function fSL(d){this.a=d},
fSM:function fSM(d,e){this.a=d
this.b=e},
fSN:function fSN(){},
hjv:function hjv(d){this.a=d},
fY0:function fY0(){},
hb1:function hb1(){},
fX6:function fX6(){},
fX7:function fX7(){},
fX8:function fX8(){},
haX:function haX(d){this.a=d},
fCw:function fCw(){},
fCx:function fCx(){},
fCy:function fCy(){},
fCz:function fCz(){},
fCA:function fCA(){},
fCO:function fCO(){},
fCP:function fCP(d){this.a=d},
fCL:function fCL(d){this.a=d},
fCM:function fCM(){},
fCN:function fCN(){},
fHd:function fHd(){},
fHe:function fHe(){},
fHf:function fHf(){},
fKf:function fKf(){},
fPL:function fPL(d){this.a=d},
fPM:function fPM(d){this.a=d},
cKG:function cKG(d,e){this.a=d
this.b=e},
cKH:function cKH(d,e){this.a=d
this.b=e},
aL4:function aL4(d,e,f){this.a=d
this.b=e
this.c=f},
bdH:function bdH(){this.b=this.a=0},
bdG:function bdG(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bBM:function bBM(){},
xK(d,e){var w,v
if(d==null)return""
w=d.bV()
v=""+w.gci()+"/"+w.gcC()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.aY(B.n.v(w.gnL()),2,"0")+":"+B.a.aY(B.n.v(w.gHQ()),2,"0")},
izv(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.bs(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.c1(new A.m(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.v.j(0.22)
$.U()
u=A.M()
u.r=v.gp(0)
a5.c3(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.ht[l]*a7*0.075
j=k-w
j=A.bx(new A.a5(j,u,j+t,s),new A.aQ(r,r))
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=B.dl.gp(0)
a5.aq(j,i)
k-=q
k=A.bx(new A.a5(k,p,k+o,n),new A.aQ(m,m))
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bx(new A.a5(w,u,s,u+t),new A.aQ(q,q))
q=A.M()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bx(new A.a5(w,q,s,q+a7*0.045),new A.aQ(t,t))
q=B.c.j(0.35)
s=A.M()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.m(v*0.15,s)
f=new A.m(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a6(0,new A.m(s,a7*0.17)),O.aiO(F.tA,t))
s=g.a6(0,new A.m(s,a7*0.18))
q=A.M()
q.r=F.tA.gp(0)
a5.P(s,r,q)
e=-2.5+b3*0.5
d=f.a6(0,new A.m(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,O.aiO(F.tA,t))
w=A.M()
w.r=F.tA.gp(0)
a5.P(d,r,w)
v*=0.7
a0=new A.m(0,v)
a1=a7*0.22
if(b1===1){w=a0.a6(0,new A.m(0,-a1*0.12))
u=A.M()
u.r=F.mq.gp(0)
a5.P(w,a1*1.18,u)}w=A.M()
w.r=F.tA.gp(0)
a5.P(a0,a1,w)
if(b1===0){w=A.c0(a0,a1)
u=A.M()
u.r=F.mq.gp(0)
a5.cR(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.c0(a0,a1)
u=A.M()
u.r=F.mq.gp(0)
a5.cR(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.ht[l]
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=F.mq.gp(0)
a5.P(new A.m(0+a2*a1*1.05,w),u,t)}}a3=B.h.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.ht[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.af
k.c=1.6
k.r=B.br.gp(0)
k.d=B.bH
a5.ah(new A.m(m+q,p),new A.m(m+o,p),k)}else{k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=B.c.gp(0)
a5.P(new A.m(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=B.v.gp(0)
a5.P(new A.m(m+k*a1*0.06,p),r,j)}m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.hZ.j(0.5).gp(0)
a5.P(new A.m(0+n*0.62,w),u,m)}a5.cR(A.c1(a0.a6(0,new A.m(0,a1*0.5)).aI(0,new A.m(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,O.aiO(B.br,1.8))
a4.restore()},
ift(){var w,v=$.oh(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hp(u)},
aw1(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aw1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$aw1)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f9("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$aw1)
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
p=A.ad(m)
$.an.$1("[worksheet qr stash] load: "+A.v(p))
w=7
break
case 4:w=2
break
case 7:u=A.S(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aw1,v)},
aw2(d){return C.ifu(d)},
ifu(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aw2=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$aw2)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i2("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.d_,null),$async$aw2)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ad(p)
$.an.$1("[worksheet qr stash] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aw2,v)},
aw4(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aw4=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$aw4)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.ift()
w=4
return A.b(C.aw1(),$async$aw4)
case 4:r=h
q=B.a.i(e)
p=B.e5.aL(t)
J.aL(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cS.gcp().aL(p),"usesRemaining",25,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.aw2(r),$async$aw4)
case 5:u=new A.a2C("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aw4,v)},
aw3(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aw3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.ce(),$async$aw3)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aw1(),$async$aw3)
case 4:q=f
p=J.a0(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a0(o)
m=A.aK(n.h(o,"usesRemaining"))
l=m==null?null:B.h.L(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{s=B.ch.cJ(0,B.cM.aL(t))}catch(h){r=A.ad(h)
$.an.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.X(q,i)
else{n=x.N
m=x.z
m=A.dE(A.a1(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.aw2(q),$async$aw3)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aw3,v)},
hHI(){var w=new A.W(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cX.aw(999999)},
ifv(d){var w,v,u,t,s,r,q
try{w=A.zA(d)
if(w==null)return d
v=w
if(J.MY(v)>960||J.MX(v)>960){s=v
r=J.MY(v)>=J.MX(v)?960:null
v=A.Ml(s,J.MX(v)>J.MY(v)?960:null,B.J7,r)}s=v
u=A.Jm(82).Aa(s,B.rG)
if(J.aa(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ad(q)
$.an.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
ct_(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$ct_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.ifv(e)
$.csW.n(0,s,t)
u=C.bJE(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ct_,v)},
b7l(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b7l=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.dd(l,"data:image")){u=null
w=1
break}t=4
r=J.eI(l,",")?B.d.gal(J.mf(l,",")):l
q=B.cM.aL(r)
if(J.aa(q)===0){u=null
w=1
break}p=C.hHI()
w=7
return A.b(C.ct_(p,q),$async$b7l)
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
n=A.ad(k)
$.an.$1("[worksheet-thumb] persistDataUrl failed: "+A.v(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b7l,v)},
csX(d){var w=0,v=A.j(x.T),u,t,s
var $async$csX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.csZ(s),$async$csX)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcp().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$csX,v)},
ab2(d){var w=0,v=A.j(x.H),u,t
var $async$ab2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hW1(d)
if(t==null){w=1
break}$.csW.X(0,t)
w=3
return A.b(C.bJD(t),$async$ab2)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ab2,v)},
bJE(d,e){return C.iJ7(d,e)},
iJ7(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bJE=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aS0
w=7
return A.b(n==null?$.aS0=A.htf():n,$async$bJE)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mI(r,"thumbs","readwrite")
B.iW.mw(J.mG(p,"thumbs"),q,l)
w=8
return A.b(J.oY(p),$async$bJE)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ad(k)
$.an.$1("[worksheet-thumb idb put] "+A.v(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bJE,v)},
bJD(d){return C.iJ5(d)},
iJ5(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bJD=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aS0
w=7
return A.b(o==null?$.aS0=A.htf():o,$async$bJD)
case 7:r=f
q=J.mI(r,"thumbs","readwrite")
B.iW.Ho(J.mG(q,"thumbs"),m)
w=8
return A.b(J.oY(q),$async$bJD)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ad(l)
$.an.$1("[worksheet-thumb idb delete] "+A.v(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bJD,v)}},D
J=c[1]
A=c[0]
B=c[2]
A9=c[85]
S=c[295]
Z=c[112]
Aa=c[294]
P=c[299]
A_=c[205]
T=c[66]
M=c[69]
Ab=c[271]
L=c[243]
A0=c[120]
U=c[156]
H=c[41]
E=c[259]
Ac=c[274]
V=c[139]
Ad=c[169]
A1=c[115]
Ae=c[105]
Af=c[107]
Ag=c[72]
Ah=c[270]
Ai=c[50]
Q=c[269]
Aj=c[293]
Ak=c[239]
N=c[97]
A2=c[93]
Al=c[212]
A3=c[165]
A4=c[217]
A5=c[255]
W=c[300]
A6=c[298]
Am=c[161]
An=c[296]
Ao=c[86]
G=c[297]
Ap=c[168]
Aq=c[155]
Ar=c[301]
A7=c[247]
As=c[40]
At=c[198]
Au=c[114]
Av=c[235]
X=c[286]
O=c[49]
F=c[131]
Aw=c[39]
I=c[138]
A8=c[119]
K=c[174]
Ax=c[121]
Y=c[83]
R=c[38]
Ay=c[117]
C=a.updateHolder(c[7],C)
D=c[292]
C.arA.prototype={}
C.b2u.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bn8(),f=h.x!=null&&h.Av(i).length===0
if(h.x!=null)w=f?B.b9:B.bC
else w=h.gVX()?B.bC:B.ef
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.K(D.bu9,B.r,1)
s=x.p
r=A.q(i,A.w(A.a([A.q(i,D.fxW,B.f,i,i,new A.p(B.b9.j(0.12),i,i,A.n(999),i,i,B.m),i,i,i,i,B.hp,i,i,i),B.S,D.h3s,B.at,A.c(C.xK(new A.W(Date.now(),0,!1),!0),i,i,i,i,i,i,D.h__,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.bbF,i,i,i,i,B.PO,i,i,i)
q=A.n(16)
p=A.K(B.bo,B.r,1)
o=A.K(B.b9.j(0.28),B.r,1)
n=A.hvF(h.d)
o=A.q(B.z,C.b2t(A.h_z(h.e,n),30),B.f,i,i,new A.p(B.mt,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fUT,B.K,i,i)
m=A.n(14)
l=A.K(B.bo,B.r,1)
q=A.q(i,A.w(A.a([o,B.N,n,B.bs,D.h3L,B.ae,A.q(i,A.w(A.a([D.hkh,B.bs,A.c(A.BO(h.c),i,i,i,i,i,i,D.fPk,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.m),i,i,i,i,B.fc,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aS,i,p,q,i,i,B.m),i,i,i,i,B.a2t,i,i,i)
p=A.n(16)
m=A.K(B.bo,B.r,1)
l=j.aW8("Original due",C.xK(h.r,!1))
n=j.aW8("Current due",C.xK(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.S,A.q(i,A.w(A.a([l,B.N,n,B.S,A.q(i,A.c(h.gaQ5(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.m),i,i,i,i,B.xe,i,i,1/0),B.S,j.cpJ(),B.N,j.cbL(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.K(B.bo,B.r,1)
B.d.u(p,A.a([B.S,A.q(i,A.w(A.a([D.h4M,B.at,A.c(q,i,i,i,i,i,i,D.fU1,i,i,i)],s),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaKB()){q=A.n(14)
o=A.K(B.cH,B.r,1.6)
B.d.u(p,A.a([B.S,A.q(i,A.w(A.a([D.hlC,B.N,A.bv(A.n(12),A.en(new A.a4(1/0,88,A.b5(i,i,i,new A.Yc(h.ax,B.a_,D.fCJ,!0,3.5,i),B.az),i),B.c,!0),B.ap)],s),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.m),i,i,i,i,B.Dk,i,i,i)],s))}p.push(B.aA)
p.push(D.hdk)
return A.q(i,A.w(A.a([r,new A.C(B.a2v,A.w(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.P,0,B.p),B.ap,i,i,new A.p(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aW8(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.adY,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fQq,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
cpJ(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.acu(B.ef,u,"Not paid yet")
w=t.Av(null).length
v=w===0?B.b9:B.bC
return this.acu(v,u,C.xK(t.x,!0))},
cbL(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.acu(B.b9,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.acu(B.b9,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.adY,u,u,u)
v=A.T(d).k("O<1,hv>")
v=A.B(new A.O(d,new C.cbW(),v),v.k("aj.E"))
return A.w(A.a([w,B.aj,A.bX(B.bG,v,B.bq,u,6,6)],x.p),B.B,u,B.e,B.i,0,B.p)},
acu(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.adY,w,w,w),1),new A.d_(1,B.c9,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dR,w,w),w)],x.p),B.B,w,B.e,B.i,0,w,w)}}
C.bfZ.prototype={
a5(d,e){new A.Yc(this.b,B.a_,e,!0,3.5,null).a5(d,e)},
aC(d){return d.b!==this.b}}
C.arN.prototype={
R(){return new C.aGL(A.a([],x.bp))},
gea(){return this.c}}
C.aGL.prototype={
Z(){this.a4()
this.Ks()},
Ks(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ks=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4y(t.a.c),$async$Ks)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dX2(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Ks,v)},
aYa(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bv:B.bl).j(0.22)
w=A.n(10)
return A.bB(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bv:B.bl).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.n(10),D.b9l),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aY9(d){return this.aYa(d,null)},
Rs(d){return this.ctv(d)},
ctv(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rs=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.J6:B.f5
w=7
return A.b(new A.ig().DJ(72,900,900,n),$async$Rs)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fD(),$async$Rs)
case 8:p=f
n=B.cS.gcp().aL(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.ad(l)
n=r.c
if(n!=null)n.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Rs,v)},
b6C(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.n(10),n=A.K((q?B.bv:B.bl).j(0.18),B.r,1)
if(d)q=B.cZ
else q=s.a.d.a?B.bv:B.bl
q=A.V(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cZ
else u=s.a.d.a?B.bv:B.bl
t=x.p
u=A.E(A.w(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.i,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cZ,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cp)
q=A.a([q,B.aa,u,A.bK(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.V(B.cE,s.a.d.a?B.bv:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cp))
return A.q(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.m),r,r,r,B.jE,D.bHo,r,r,r)},
EF(d){return this.bHA(d)},
bHz(){return this.EF(null)},
bHA(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$EF=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ay()
r=new A.au(new A.bd(a4,B.bb,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.h.bd(a4)
p=a5.c
a4=a4===q?B.n.v(B.h.L(p)):B.h.a1(p,2)}o=new A.au(new A.bd(a4,B.bb,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bd(a4,B.bb,B.aP),s)
if(a3){a4=new A.W(Date.now(),0,!1).bM(6048e8)
m=A.c3(a4.gcl(),a4.gci(),a4.gcC(),0,0,0,0,0)}else{a4=a5.f
m=A.c3(a4.gcl(),a4.gci(),a4.gcC(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bt(a4,!0,x.cT)
i=a3?null:A.hvF(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.y0?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i3(B.v.j(0.55),!0,"Dismiss",a4,new C.dWM(),new C.dWN(a2,t,a5,r,new C.dWO(a2,t),o,n,j),B.eN,!0,x.y),$async$EF)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cA(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.V$=s
r.W$=0
o.V$=s
o.W$=0
n.V$=s
n.W$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.M(x.q).f.T(D.fJn)
w=1
break}a0=a2.d
if(a0==null){t.c.M(x.q).f.T(D.fI1)
w=1
break}a1=A.h_z(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.y0?"male":"female"
w=7
return A.b(A.akF(a3,A.hEg(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$EF)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.y0?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a7(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c3(a3.gcl(),a3.gci(),a3.gcC(),0,0,0,0,0)
a4=a5.f
if(!a3.B(0,A.c3(a4.gcl(),a4.gci(),a4.gcC(),0,0,0,0,0)))a5.cY6(a2.a)
w=8
return A.b(A.akF(t.a.c,a5),$async$EF)
case 8:case 5:w=9
return A.b(t.Ks(),$async$EF)
case 9:case 1:return A.h(u,v)}})
return A.i($async$EF,v)},
aYQ(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cZ.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cZ
else s=(this.a.d.a?B.bv:B.bl).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b2t(d,18)
if(g)q=B.cZ
else q=this.a.d.a?B.aS:B.ax
return A.aF(!1,B.a3,!0,v,A.aN(!1,u,!0,A.q(p,A.A(A.a([r,B.b7,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bc,B.i,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.m),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Uf(d){return this.cLS(d)},
cLS(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Uf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i3(B.v.j(0.55),!0,"Dismiss",s,new C.dX5(),new C.dX6(t,d),B.ho,!0,x.y),$async$Uf)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.W(s,0,!1)
case 4:w=7
return A.b(A.akF(t.a.c,d),$async$Uf)
case 7:w=8
return A.b(t.Ks(),$async$Uf)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Uf,v)},
Rr(d,e){return this.bSJ(0,e)},
bSJ(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rr=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lI(s,"Cancel","Delete",e.b+" \xb7 "+A.BO(e.c)+" will be removed from this device.","Delete this debt?"),$async$Rr)
case 3:if(!g){w=1
break}w=4
return A.b(C.fTn(t.a.c,e.a),$async$Rr)
case 4:w=5
return A.b(t.Ks(),$async$Rr)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Rr,v)},
aix(d){return this.cn_(d)},
cn_(d){var w=0,v=A.j(x.H),u=this,t
var $async$aix=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dX_(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aix)
case 2:return A.h(null,v)}})
return A.i($async$aix,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eLW
w=J.dO(m.d,new C.dX7())
v=A.B(w,w.$ti.k("L.E"))
w=J.dO(m.d,new C.dX8())
u=A.B(w,w.$ti.k("L.E"))
t=B.d.cH(v,0,new C.dX9())
w=A.n(18)
s=m.a.d.a
r=s?D.cIN:D.aG6
q=A.K(s?B.cZ.j(0.35):B.cZ.j(0.18),B.r,1)
s=A.q(l,D.c8X,B.f,l,l,new A.p(B.cZ.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aF(!1,B.a3,!0,A.n(12),A.aN(!1,A.n(12),!0,D.eLf,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dXa(m),l,l,l,l,l,l,l),B.f,B.cZ,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cHR("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BO(t)
r=A.a([A.q(l,A.w(A.a([s,B.ae,A.A(A.a([o,B.aa,A.E(m.bcR(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.B,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a6(B.aw,B.aD,B.w,r,l,l),B.m),l,l,l,l,B.aoD,l,l,l),B.aA],p)
if(J.ci(m.d)){w=m.a.d.a
s=w?B.eo:B.c
q=A.n(18)
o=A.K((w?B.bv:B.bl).j(0.12),B.r,1)
n=A.q(l,D.c3q,B.f,l,l,new A.p(B.cZ.j(0.12),l,l,A.n(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,15,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.w(A.a([n,B.ae,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.m),l,l,l,l,D.bK4,l,l,1/0))}else{w=m.gcsI()
s=A.B(new A.O(v,w,A.T(v).k("O<1,x>")),x.l)
if(u.length!==0){q=A.a([B.aj,new A.C(D.bLJ,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.T(u).k("O<1,x>")))
B.d.u(s,q)}B.d.u(r,s)}return A.w(r,B.al,l,B.e,B.i,0,B.p)},
bcR(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.n(14),r=A.K((v.a.d.a?B.bv:B.bl).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cZ
else w=v.a.d.a?B.aS:B.ax
return A.q(u,A.w(A.a([q,B.bs,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.i,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.m),u,u,u,u,B.es,u,u,u)},
cHR(d,e){return this.bcR(!1,d,e)},
csJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.Av(j).length,h=d.bmo()
if(d.x!=null){w=d.Av(j).length
v=w===0?B.cZ:B.bC}else if(d.gVX())v=B.bC
else{if(h)w=B.cZ
else w=k.a.d.a?B.bv:B.bl
v=w}if(d.x!=null){w=d.Av(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xK(u,!1)}else{u.toString
t="Paid "+C.xK(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xK(w,!1)+" \xb7 "+i+" missed":"Due "+C.xK(w,!1)}w=k.a.d.a?B.eo:B.c
u=A.n(18)
if(d.gVX()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bv:B.bl).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.v.j(0.04),B.cO,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bt:B.mt
o=A.K(d.gVX()&&d.x==null?B.bC.j(0.45):B.cZ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hvF(d.d)
o=A.q(B.z,A.d3(C.b2t(A.h_z(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.ax
m=x.p
n=A.a([new A.d_(1,B.c9,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaKB())B.d.u(n,A.a([B.dU,A.V(B.QF,B.cZ.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cR,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.i,0,B.p),1)
n=A.BO(d.c)
l=k.a.d.a?B.aS:B.ax
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aF(!1,B.a3,!0,j,A.aN(!1,q,!0,new A.C(Aj.aop,A.A(A.a([o,B.bd,p,B.aa,A.w(A.a([n,B.bs,A.V(B.eP,(k.a.d.a?B.bv:B.bl).j(0.5),j,j,j,18)],m),B.dr,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dX1(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.p(w,j,s,u,r,j,B.m),j,j,j,B.d3,j,j,j,j)}}
C.vh.prototype={}
C.anN.prototype={
C(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.aU
u=v?B.B:B.l
t=a1.as
s=A.n(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.v.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.v.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.q(a0,A.V(B.cE,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.p(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.i3,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aCc,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Dx,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.d8(B.dn,m,B.f,A.A(l,B.l,a0,B.e,B.P,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(B.ao9,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cN:B.bm,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.C(B.fD,A.w(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.fDx)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.C(B.vm,A.q(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a6(B.a5,B.a9,B.w,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.lH,A.w(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hO,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a6(B.aw,B.aD,B.w,a1.d,a0,a0),B.m),a0,a0,a0,D.bHT,a0,a0,a0,a0)}}
C.aZ9.prototype={
C(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.q(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.aU?B.aU:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bm:B.cN,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.i,0,q,q),B.cR,n],m)
if(p.z)o.push(new A.C(B.tJ,n,q))
return new A.C(B.d3,A.w(o,B.l,q,B.e,B.P,0,B.p),q)}}
C.UY.prototype={
R(){return new C.bjF()}}
C.bjF.prototype={
gc6h(){var w=this.d
return w===$?this.d=this.a.c:w},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.eLR,D.eLX],l)
for(w=0;w<8;++w){v=D.a6R[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.IV:B.An
q=t===s
r=A.V(r,q?B.eM:B.bX,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.b7,A.c(v.b,n,n,n,n,n,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bu(1,B.ba,A.c(v.c,n,1,B.a2,n,n,n,B.wr,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aQ(24,24)
p=new A.ax(B.eM,2,B.r,-1)
s=new A.p(n,n,new A.bE(p,p,p,p),new A.bc(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.C(B.f4,A.w(A.a([new A.C(B.mB,new A.c_(B.aJ,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.q(n,new A.dp(!0,new C.anN(v,q.d,q.e,new C.dlT(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dlU(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.C(D.bIg,A.bI(D.hro,n,new C.dlV(o,d),A.bp(B.b2,n,n,n,n,B.pt,n,n,new A.bb(A.n(16),B.a1),n,n,n)),n))
return A.bl(!0,new A.cO(new A.aY(0,1/0,0,m.a.b*0.9),A.ck(k,n,n,D.bMC,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nR.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
biZ(d,e,f){return new C.nR(this.a,e,d,f)}}
C.J_.prototype={
xB(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.J_(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aIK(d){var w=null
return this.xB(w,w,w,w,w,d,w,w,w,w,w,w)},
cTE(d){var w=null
return this.xB(w,w,w,w,d,w,w,w,w,w,w,w)},
biX(d,e,f){var w=null
return this.xB(d,w,w,w,w,w,w,w,e,w,f,w)},
cUi(d){var w=null
return this.xB(w,w,w,w,w,w,d,w,w,w,w,w)},
cUr(d){var w=null
return this.xB(w,w,w,w,w,w,w,w,w,d,w,w)},
cTC(d){var w=null
return this.xB(w,w,w,d,w,w,w,w,w,w,w,w)},
cUt(d){var w=null
return this.xB(w,w,w,w,w,w,w,w,w,w,w,d)},
cTz(d){var w=null
return this.xB(w,w,d,w,w,w,w,w,w,w,w,w)},
cTu(d){var w=null
return this.xB(w,d,w,w,w,w,w,w,w,w,w,w)},
He(d){var w=null
return this.xB(w,w,w,w,w,w,w,d,w,w,w,w)},
cUB(d,e,f,g,h,i,j,k,l,m,n){return this.xB(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cR7(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bVi(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.h.L(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cV(d.h(0,n))).length!==0?B.a.i(A.cV(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cV(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.EW.geF(D.EW))
s=i==null?o:B.h.D(i,18,36)
r=l.$2("position",D.a8D)
q=l.$2("frame",D.a7X)
l=l.$2("texture",D.a7T)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cV(d.h(0,"author"))):o
return this.cUB(p,u,t,q,r,A.qU(d.h(0,"ribbon"))?A.DQ(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a0K.prototype={
R(){return new C.aDI(A.a([],x.I),D.Qc)},
gea(){return this.c}}
C.aDI.prototype={
Z(){var w,v=this
v.a4()
v.f=A.AH(0,1)
w=$.ay()
v.z=new A.au(B.ay,w)
v.Q=new A.au(B.ay,w)
v.lp()
w=v.a
C.bHU(w.c,w.d).bB(new C.dmz(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.d()
u.t()
u=v.z
u===$&&A.d()
w=$.ay()
u.V$=w
u.W$=0
u=v.Q
u===$&&A.d()
u.V$=w
u.W$=0
v.a3()},
lp(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mo(s.c,s.d),$async$lp)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.dmn(t,r))
t.aA4()
case 1:return A.h(u,v)}})
return A.i($async$lp,v)},
gawC(){var w,v=this
if(!J.ci(v.d)){w=v.r
w=w<0||w>=J.aa(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
aA4(){var w,v,u=this.gawC(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cli(d){this.l(new C.dmk(this,d))
this.aA4()},
Pf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nR(B.n.v(1000*Date.now()),"Untitled page","",new A.W(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aVf(r.c,r.d,s),$async$Pf)
case 3:w=4
return A.b(t.lp(),$async$Pf)
case 4:if(t.c==null||J.ci(t.d)){w=1
break}q=J.nM(t.d,new C.dlW(s))
p=q>=0?q:J.aa(t.d)-1
t.l(new C.dlX(t,p))
t.aA4()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.CI(p+1,B.cn,B.lb),$async$Pf)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Pf,v)},
Cj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Cj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gawC()
s=s==null?null:s.a
if(s==null)s=B.n.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aVf(o.c,o.d,new C.nR(s,r,q,new A.W(p,0,!1))),$async$Cj)
case 3:w=4
return A.b(t.lp(),$async$Cj)
case 4:if(t.c==null){w=1
break}t.l(new C.dmo(t))
case 1:return A.h(u,v)}})
return A.i($async$Cj,v)},
PY(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gawC()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dm4(r),s,null,!0,!0,x.y),$async$PY)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bHD(s.c,s.d,r.a),$async$PY)
case 4:t.l(new C.dm5(t))
w=5
return A.b(t.lp(),$async$PY)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.W_(B.n.D(t.r+1,0,J.aa(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$PY,v)},
zR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cj(),$async$zR)
case 5:case 4:if(t.c==null){w=1
break}w=J.cM(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.SZ(s,r.r,o,p,q),$async$zR)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hWR(s,r.x,r.r),$async$zR)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Mo(s.c,s.d),$async$zR)
case 10:l=e
for(s=n.d,r=J.cK(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.nR(""+(m+k),q,B.a.i(j.b),new A.W(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BV(r.c,r.d,l),$async$zR)
case 11:w=12
return A.b(t.lp(),$async$zR)
case 12:r=t.c
if(r==null){w=1
break}r.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zR,v)},
a3j(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a3j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cj(),$async$a3j)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzP(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dt(D.AN,new C.dml(t),new C.dmm())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.ne("Our Family",o,"",""))
for(o=J.aM(t.d);o.A();){n=o.gO(o)
p.push(new H.ne(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hxD(o,new H.ta(s,r,"",p,new H.vz(q.d,null,null,null,null,"","","")),null),$async$a3j)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a3j,v)},
PF(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$PF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cj(),$async$PF)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ajh,null,new C.dm0(t),s,!0,!0,!0,I.ac1,!1,!1,x.N),$async$PF)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cTE(r)
t.l(new C.dm1(t,q))
s=t.a
w=7
return A.b(C.TB(s.c,s.d,q),$async$PF)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PF,v)},
Zk(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ajh,null,new C.dm6(t),r,!0,!0,!0,I.ac1,!1,!1,x.e),$async$Zk)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.dm7(t,s))
r=t.a
w=4
return A.b(C.TB(r.c,r.d,s),$async$Zk)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.CI(0,B.ed,B.nn)
case 1:return A.h(u,v)}})
return A.i($async$Zk,v)},
bYr(d){var w=d.bV(),v=B.a.aY(B.n.v(w.gci()),2,"0"),u=B.a.aY(B.n.v(w.gcC()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gzP(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
C(d){var w,v,u,t,s,r=this,q=null,p=r.c5v()
if(r.e)w=D.ahX
else if(J.ci(r.d)){w=r.y
v=r.gzP(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fOF,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.C(X.apR,new C.a_W(w,v,0,q),q),q),B.bx,t,B.aj,A.c(u,q,q,q,q,q,q,A.l(q,q,D.l6.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.q(q,D.fxH,B.f,q,q,new A.p(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.e1.j(0.45),B.J,18)],x.V),E.xQ,B.m),q,q,q,q,B.PR,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcQ9(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hz(D.c_k,D.hqQ,r.gaRN(),q))
B.d.u(u,w)}w=A.at(A.cb(A.w(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.aa(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.l6.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.eb:B.yT
u=A.w(A.a([new A.C(D.bJl,w,q),A.E(A.Ko(v,new C.dmx(r),J.aa(r.d)+1,q,r.gclh(),u,B.aJ),1),r.bKz()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c6(q,D.a0b,new A.am(B.a0,q,B.b6,B.t,A.a([D.aTS,A.bl(!0,A.w(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c5v(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cM(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Ln(B.e9,"AI",h.gbIm(),!0))
if(h.a.f)f.push(new C.Ln(B.ma,"Cover",h.gbTi(),!1))
if(h.a.f)f.push(new C.Ln(B.xH,"Header",h.gbOb(),!1))
if(J.cM(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Ln(B.vK,"Print",h.gcuS(),!1))
if(h.a.f&&J.cM(h.d)&&h.r>=0){v=h.w
u=v?B.h2:B.jm
t=v?"Save":"Edit"
f.push(new C.Ln(u,t,v?h.gcBh():new C.dmh(h),!1))}if(h.a.f)f.push(new C.Ln(B.ii,"Add page",h.gaRN(),!1))
v=C.hS8(h.y.Q)
u=h.gzP(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.aa(h.d)
r=J.aa(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dVI
else{k=new A.aQ(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kI.j(0.5),1,B.r,-1)
j=A.q(g,A.V(l.a,D.l6,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bE(i,i,i,i),new A.bc(k,k,k,k),g,new A.a6(B.a5,B.a9,B.w,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.l6.j(0.85)
p.push(new A.bu(1,B.ba,A.aA(B.c0,A.w(A.a([k,B.bs,A.c(l.b,g,1,g,g,g,g,new A.H(!0,j,g,g,g,g,9.5,B.C,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.anN(v,u,t+" \xb7 "+s+" "+r,new C.dmi(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
Bb(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cj(),$async$Bb)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aM(t.d);r.A();){q=r.gO(r)
s.push(q.b+" "+q.c)}p=H.a4O(B.d.aJ(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dlY(t,p),s,null,!0,!0,x.N),$async$Bb)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zR(),$async$Bb)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Fe(),$async$Bb)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.GS("Swahili (Kiswahili)",!0),$async$Bb)
case 18:w=16
break
case 17:w=19
return A.b(t.cMx(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Bb)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Bb,v)},
a0k(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.K(E.kI.j(0.3),B.r,1),r=x.p
return new A.C(B.cB,A.aN(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.xQ,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.w(A.a([A.c(f,w,w,w,w,w,w,A2.M_,w,w,w),A.c(g,w,w,w,w,w,w,B.BK,w,w,w)],r),B.B,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.m),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dmj(d,h),w,w,w,w,w,w,w),w)},
Fe(){return this.bXV()},
bXV(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Fe=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dma(r),a7,null,!0,!0,x.ei),$async$Fe)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eP("Working on it\u2026",$.ay())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dmb(o),a7,null,!0,!0,x.H).fF(new C.dmc(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.bV(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.AN[a1]
J.bV(j,i.a)}w=8
return A.b(C.ajI(a0,a7,new C.dmd(o),d,l,e,j),$async$Fe)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ad(a8)
n=A.v(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a7(l,!0).dY()
l=o
l.siv($.ay())
J.aVL(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.M(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gco(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.aa(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.biZ(m.b.h(0,a4).b,a7,new A.W(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BV(j.c,j.d,l),$async$Fe)
case 11:w=12
return A.b(r.lp(),$async$Fe)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.AN[a1].a)
a5=l.cR7(j,12,a7)
l=r.a
w=15
return A.b(C.TB(l.c,l.d,a5),$async$Fe)
case 15:if(r.c!=null)r.l(new C.dme(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.CI(0,B.ed,B.nn)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.M(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cEv("Undo",new C.dmf(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ep,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fe,v)},
GS(d,e){return this.cMy(d,e)},
cMx(d){return this.GS(d,!1)},
cMy(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$GS=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eP("Starting\u2026",$.ay())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dmq(a0),k,null,!0,!0,x.H).fF(new C.dmr(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.bV(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a55(m,new C.dms(a0)),$async$GS)
case 10:w=8
break
case 9:w=11
return A.b(C.bJt(new C.dmt(a0),m,a2),$async$GS)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ad(a1)
q=A.v(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a7(o,!0).dY()
o=a0
o.siv($.ay())
J.aVL(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.M(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.aa(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.biZ(J.t(p,g).b,j.a,new A.W(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BV(k.c,k.d,o),$async$GS)
case 12:w=13
return A.b(r.lp(),$async$GS)
case 13:o=r.c
if(o==null){w=1
break}o=o.M(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cEv("Undo",new C.dmu(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$GS,v)},
bKz(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dlZ(v):u
r=A.aI(u,u,u,u,A.V(D.bVN,s?D.l6:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cM(v.d)&&!v.w&&v.r>=0)s=A.hz(A.V(B.xt,B.HB,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.HB,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbST(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.l6.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.aa(v.d)?new C.dm_(v):u
return A.bl(!0,new A.C(D.bJa,A.A(A.a([r,s,A.aI(u,u,u,u,A.V(B.eP,t<J.aa(v.d)?D.l6:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0O.prototype={
R(){return new C.bk3(new A.au(B.ay,$.ay()))}}
C.bk3.prototype={
ga4t(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ay()
w.W$=0
this.a3()},
gbWu(){switch(this.ga4t()){case"cover":var w=D.dhh
break
case"book":w=D.dc1
break
default:w=D.dM_
break}return w},
C(d){var w,v,u,t,s,r,q=this,p=null,o=A.n(26),n=E.kI.j(0.5),m=x.p,l=A.A(A.a([D.dVJ,B.ar,D.bOR,A.aI(p,p,p,p,B.lM,p,p,p,new C.dol(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.iy(p,p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dom(q),q.ga4t()==="page",p,p,p,p))
if(q.a.d)k.push(A.iy(p,p,p,p,D.hl9,p,new C.don(q),q.ga4t()==="book",p,p,p,p))
k.push(A.iy(p,p,p,p,D.h7D,p,new C.doo(q),q.ga4t()==="cover",p,p,p,p))
k=A.bX(B.bG,k,B.bq,p,6,8)
j=B.c.j(0.07)
j=A.aO(p,B.M,!1,p,!0,B.t,p,A.aP(),q.d,p,p,p,p,p,2,A.bB(p,new A.b6(4,A.n(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.jP,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a8,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbWu(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,Ae.LX,p,p,p)
w.push(A.lM(p,B.c.j(0.08),p,r,B.hI,new C.dop(q,s),p,p,p,p))}return A.eE(p,E.CU,A.cb(A.w(A.a([l,B.S,D.hoB,B.aj,k,B.ae,j,B.N,A.bX(B.bG,w,B.bq,p,6,6),B.aA,A.dg(D.c_h,p,D.hpo,new C.doq(q,d),A.bp(B.b2,p,p,p,p,B.pt,p,p,new A.bb(A.n(16),B.a1),p,p,p)),B.at,D.hjh],m),B.B,p,B.e,B.P,0,B.p),B.t,p,B.y,p,p,B.f7,p,p,B.ah),p,p,p,B.PP,p,B.db,p,new A.bb(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a0M.prototype={
R(){return new C.aDL(A.a([],x.gA))},
gea(){return this.c}}
C.ahr.prototype={}
C.aDL.prototype={
Z(){this.a4()
this.lp()},
lp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.T1(p.c,p.d),$async$lp)
case 3:o=e
n=A.a([],x.gA)
p=J.aM(o)
case 4:if(!p.A()){w=5
break}s=p.gO(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bHU(r.c,q),$async$lp)
case 6:j=e
i=J
w=7
return A.b(C.Mo(t.a.c,q),$async$lp)
case 7:m.push(new l.ahr(k,j,i.aa(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.dmO(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lp,v)},
bea(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Si(d,e){return this.cmX(0,e)},
cmX(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Si=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).ca(A.e4(new C.dmN(u,e),!0,null,x.y)),$async$Si)
case 2:t=g
w=3
return A.b(u.lp(),$async$Si)
case 3:if(t===!0&&u.c!=null)u.c.M(x.q).f.T(D.aXW)
return A.h(null,v)}})
return A.i($async$Si,v)},
GU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$GU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.M(x.q).f.T(D.aXR)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aj1(s.c,s.d),$async$GU)
case 5:q=e
w=6
return A.b(t.lp(),$async$GU)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Si(0,B.d.f8(t.d,new C.dmS(q))),$async$GU)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.SZ(p,s.f,r,n,o),$async$GU)
case 10:m=e
w=11
return A.b(t.lp(),$async$GU)
case 11:if(m&&t.c!=null)t.c.M(x.q).f.T(D.aXW)
case 1:return A.h(u,v)}})
return A.i($async$GU,v)},
RH(d,e){return this.cyW(0,e)},
cyW(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$RH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dmR(t,e),s,null,!0,!0,x.y),$async$RH)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a5g(s.c,s.d,e.a),$async$RH)
case 4:w=5
return A.b(t.lp(),$async$RH)
case 5:case 1:return A.h(u,v)}})
return A.i($async$RH,v)},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bKC(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.K(E.kI.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fC(0.7142857142857143,A.q(n,A.w(A.a([D.dVK,B.ae,D.eKQ,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.l6.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bc,B.i,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcQ5(),n,n,n,n,n,n,!1,B.a4))}w=A.n(22)
v=A.K(E.kI.j(0.85),B.r,1.6)
s=A.aA(n,A.q(n,D.c7H,B.f,n,n,new A.p(B.v.j(0.3),n,A.K(E.kI.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dmT(d),n,n,n,n,n,n,!1,B.a4)
r=A.n(14)
q=B.v.j(0.3)
p=A.K(E.kI.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.bd,D.bPf,A.q(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fND,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.m),n,n,n,n,B.hp,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.cdL,B.m),n,n,n,Aa.PC,D.bH3,n,n,n)
if(o.e)k=D.ahX
else k=k.length===0?D.bh1:A.cg(new C.dmU(k))
return A.c6(n,D.a0b,new A.am(B.a0,n,B.b6,B.t,A.a([D.aTS,A.bl(!0,A.w(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bKC(d){var w,v,u=this,t=null,s=u.bea(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.d8(B.dE,B.z,B.f,new A.a4(300,420,new C.a_W(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.q(t,D.c6W,B.f,t,t,new A.p(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dmL(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fNf,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.w(A.a([new A.fC(0.7142857142857143,new A.am(B.a0,t,B.ac,B.t,p,t),t),B.N,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.l6.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dmM(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.Ln.prototype={}
C.a_W.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dt(D.AN,new C.cU_(m),new C.cU0()),j=m.c,i=D.EW.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mO:B.bc
v=new C.cU1(h)
i=A.a([new A.ac(0,B.G,B.v.j(0.6),D.eHy,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b5(l,l,l,new C.bhd(j.x,h,l),B.az),0,0,0),A.ao(0,A.q(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aQ(3,3)
t.push(new A.cS(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.bc(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.apS,8,0.85,2.2),v.$4(D.bM1,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.apS,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.C(D.bLY,A.b5(l,l,l,new C.bh4(h,l),B.az),l),0,0,0))
r=A.V(D.aF0[B.n.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aCc,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ae,p,B.ae,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cN,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aN,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.C,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.C(D.bMu,A.w(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b5(l,l,l,new C.aKZ(l),D.fCC),l,l,l,46,0,l))
return A.q(l,A.bv(D.agt,new A.am(B.a0,l,B.ac,B.t,t,l),B.ap),B.f,l,l,new A.p(l,l,l,D.agt,i,new A.a6(B.aw,B.aD,B.w,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bhd.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e7()
g.cW(11)
switch(this.b){case"plain":return
case"linen":$.U()
w=A.M()
w.r=B.v.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.m(0,t),new A.m(u,t),w)
$.U()
s=A.M()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.m(r,0),new A.m(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.U()
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.P(new A.m(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.U()
l=A.a([],n)
j=new A.aJ(m.r,B.ak,null,null,l)
l.push(new A.b_(v,q))
j.ac()
m=k-0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.ac()
m=k+0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.aj(i)
j.ac()
m=new A.bz()
l.push(m)
l=j.f
if(l!=null)m.aj(l)
j.ac()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.U()
w=A.M()
w.r=B.v.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.P(new A.m(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.U()
h=A.M()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.P(new A.m(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aC(d){return d.b!==this.b||!d.c.B(0,this.c)}}
C.bh4.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.U(),j=A.M(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.af
j.c=2.4
j.d=B.bH
for(w=e.a,v=e.b,v=[D.fph,new A.b4([w,0,-1,1]),new A.b4([0,v,1,-1]),new A.b4([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aJ(k,B.ak,null,null,s)
s.push(new A.b_(r+p*34,q))
n.ac()
m=new A.aq(r,q)
s.push(m)
l=n.f
if(l!=null)m.aj(l)
n.ac()
m=new A.aq(r,q+o*34)
s.push(m)
s=n.f
if(s!=null)m.aj(s)
n.ac()
d.af(n,j)
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=i.j(0.9).gp(0)
d.P(new A.m(r+p*9,q+o*9),3,s)}},
aC(d){return!d.b.B(0,this.b)}}
C.vi.prototype={}
C.a0h.prototype={
R(){return new C.bhb()}}
C.bhb.prototype={
goS(){var w=this.d
return w===$?this.d=this.a.c:w},
gzP(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bd(w.b,B.bb,B.aP),$.ay())}return v},
gaFQ(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bd(w.c,B.bb,B.aP),$.ay())}return v},
gav8(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bd(w.y,B.bb,B.aP),$.ay())}return v},
t(){var w=this,v=w.gzP(0),u=v.V$=$.ay()
v.W$=0
v=w.gaFQ()
v.V$=u
v.W$=0
v=w.gav8()
v.V$=u
v.W$=0
w.a3()},
avN(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.iy(s,s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.dd2(this,f,u),e===u,s,s,s,s))}return A.bX(B.bG,r,B.bq,s,6,8)},
aBA(d){var w=null,v=B.c.j(0.07)
return A.bB(w,new A.b6(4,A.n(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mi,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
C(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goS(),a0=f.gzP(0),a1=a0.a.a,a2=f.gaFQ(),a3=a2.a.a,a4=f.gav8(),a5=d.biX(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a4(190,260,new A.d8(B.dE,B.z,B.f,new A.a4(270,370,new C.a_W(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aO(e,B.M,!1,e,!0,B.t,e,A.aP(),a0,e,e,e,e,e,2,f.aBA("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.ddr(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a8,e,B.ao,e,e,e,e)
a2=A.aO(e,B.M,!1,e,!0,B.t,e,A.aP(),a2,e,e,e,e,e,2,f.aBA("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dds(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a8,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.AN[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.q(e,e,B.f,e,e,new A.p(e,e,new A.bE(o,o,o,o),e,e,new A.a6(B.aw,B.aD,B.w,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aE
v.push(A.aA(e,A.w(A.a([p,B.cR,A.c(t.b,e,e,e,e,e,e,new A.H(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.ddt(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bX(B.bG,v,B.bq,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.aQ(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eM:B.L,2,B.r,-1)
q.push(A.aA(e,A.q(e,A.V(D.aF0[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bE(o,o,o,o),new A.bc(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.ddu(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bX(B.bG,q,B.bq,e,8,8)
a4=A.aO(e,B.M,!1,e,!0,B.t,e,A.aP(),a4,e,e,e,e,e,2,f.aBA("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.ddv(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a8,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,N.wu,e,e,e)
m=A.a([],w)
for(l=D.EW.gdV(D.EW),l=l.gae(l);l.A();){k=l.gO(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eM:B.aT
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.q(e,e,B.f,e,e,new A.p(j,e,new A.bE(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aE
m.push(A.aA(e,A.w(A.a([j,B.bs,A.c(i,e,e,e,e,e,e,new A.H(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.ddw(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bX(B.bG,m,B.bq,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.wu,e,e,e)
k=f.goS()
return new A.C(new A.R(0,0,0,a3.f.d),A.bl(!0,new A.cO(new A.aY(0,1/0,0,a1.a.b*0.92),A.ck(A.a([D.hiI,B.ae,d,B.aN,a0,B.S,a2,B.aA,D.hp9,B.N,v,B.aA,D.hiR,B.N,q,B.aA,a4,B.aA,p,B.N,m,B.aA,l,A.kT(e,9,e,""+B.h.S(f.goS().f),36,18,e,new C.ddx(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.wu,e,e,e),B.aj,f.avN(D.a8D,f.goS().r,new C.ddy(f),D.dPq),B.ae,A.c("BORDER",e,e,e,e,e,e,N.wu,e,e,e),B.aj,f.avN(D.a7X,f.goS().w,new C.ddz(f),D.dPw),B.ae,A.c("COVER MATERIAL",e,e,e,e,e,e,N.wu,e,e,e),B.aj,f.avN(D.a7T,f.goS().x,new C.ddB(f),D.dRc),B.aj,A.ji(e,B.b2,e,B.ag,e,new C.ddC(f),e,e,e,D.hcQ,f.goS().z),B.bx,A.bI(D.hhn,e,new C.ddD(f,a6),A.bp(B.b2,e,e,e,e,B.pt,e,e,new A.bb(A.n(16),B.a1),e,e,e))],w),e,e,S.apj,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aKZ.prototype={
a5(d,e){var w,v,u,t=new A.aJ($.U().r,B.ak,null,null,A.a([],x.v))
t.E(new A.b_(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bz())
u=A.M()
u.san(D.ces.az(0,new A.a5(0,0,0+w,0+v)))
d.af(t,u)},
aC(d){return!1}}
C.bmE.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.U()
w=A.M()
w.san(D.cds.az(0,new A.a5(0,0,a2,a3)))
a4.aE(new A.a5(0,0,a2,a3),w)
v=B.h.cB(a1/112)
u=new A.e7()
u.cW(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dhg[u.aw(9)]
j=u.aw(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a5(n,j,n+m,j+l)
h=A.bx(i,B.hH)
g=new A.ar(B.V,B.R,B.X,B.Y,B.W)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.san(new A.a6(B.a5,B.a9,B.w,A.a([f,k,e],w),d,d).az(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.V,B.R,B.X,B.Y,B.W)
e.r=E.kI.j(0.55).gp(0)
a4.aE(new A.a5(g,j,h,j+2),e)
e=new A.ar(B.V,B.R,B.X,B.Y,B.W)
e.r=E.kI.j(0.4).gp(0)
a4.aE(new A.a5(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.san(D.ccK.az(0,new A.a5(0,r,a2,q)))
a4.aE(new A.a5(0,r,a2,q),p)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.v.j(0.5).gp(0)
p.y=B.ld
a4.aE(new A.a5(0,q,a2,q+14),p)}t=A.M()
t.r=D.bkS.j(0.72).gp(0)
a4.aE(new A.a5(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.M()
a3.san(new A.bW(B.z,0.5,B.w,d,0,A.a([D.btA.j(0.22),B.L],w),d,d).az(0,A.c0(new A.m(t,a1),a0)))
a4.P(new A.m(t,a1),a0,a3)},
aC(d){return!1}}
C.bfj.prototype={
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aD(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cS(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.p(A.ap(D.l6,D.byW,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.Nd,o,o,B.m),B.bn,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.v.j(0.35),B.aPo,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aQ(2,2)
t.push(A.q(o,o,B.f,o,o,new A.p(E.kI.j(0.6),o,o,new A.bc(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.q(o,A.w(t,B.l,o,B.rK,B.i,0,B.p),B.f,o,o,new A.p(o,o,o,D.b92,u,D.ceq,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.v.j(0.4),B.dv,18)],v)
t=A.ao(o,A.b5(o,o,o,new C.aKZ(o),D.fCx),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aZ9(p.y,r,L.ji,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),p.r,o,o,o,o,o,2,A.bB(o,B.f_,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.ji.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.h1v,!0,B.a8,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.ji.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),p.w,o,o,o,o,o,2,A.bB(o,B.f_,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.ji.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.am,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fSL,!0,B.a8,B.BG,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.h1n,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.ji.j(0.5),o,o,o,o,o,o,o,o,11,B.cN,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.A(A.a([A.E(A.q(o,o,B.f,D.Hl.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fD,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.Hl.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.Hl.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aA],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.ji.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.GM(A.cX(A.a([A.cX(o,o,o,o,o,o,o,o,o,D.fW3,B.a.av(k,0,1)),A.cX(o,o,o,o,o,o,o,o,o,o,B.a.aV(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.ji.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cb(A.w(n,B.B,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.C(B.hC,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.ji.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.bv(B.Nd,new A.am(B.a0,o,B.ac,B.t,A.a([t,new A.C(D.bLv,A.w(s,B.al,o,B.e,B.i,0,B.p),o),A.ao(0,new A.bP(new A.p(o,o,o,o,o,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bn,o,o),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.p(o,o,o,B.Nd,v,D.ceY,B.m),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.am(B.a0,o,B.ac,B.t,l,o)}}
C.anO.prototype={
R(){return new C.anP(new A.eP(0,$.ay()),new C.bX6(),new C.ao6(),D.i3J,null,null)},
gd8(){return this.d}}
C.a35.prototype={
a9(){return"_Step."+this.b}}
C.anP.prototype={
gDw(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHQ(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghm(d){var w,v=this,u=v.e
if(u===$){w=C.NL(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gVh(){var w=this.ghm(0)
return w.gA8()==null?"Babu":B.a.i(w.gA8().b)},
Z(){var w,v=this
v.a4()
w=v.ghm(0).gA8()
w=w==null?null:w.c
v.r.b=w===D.p3
w=v.qp(new C.bVs(v))
w.fW(0)
v.x!==$&&A.aT()
v.x=w
v.a4p("Come closer, my children. I am "+v.gVh()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.d()
v.t()
v=w.y
if(v!=null)v.a2(0)
v=w.z
if(v!=null)v.a2(0)
w.w.t()
v=w.f
v.V$=$.ay()
v.W$=0
w.bzS()},
a4p(d){var w=this,v=w.y
if(v!=null)v.a2(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d5(E.a1V,new C.bVm(w))},
bwd(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a2(0)
v.l(new C.bVv(v))},
ag0(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bw5(){return this.bdI()},
bdI(){var w=this,v=w.gDw()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bVn(w))
w.a4p(u)
v=w.z
if(v!=null)v.a2(0)
w.z=A.cD(B.o5,new C.bVo(w))},
cRe(){var w=this
w.l(new C.bVr(w))
w.a4p(w.gDw()[w.as].a)},
Mq(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.afz)return
w=p.gDw()
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
t.r=s.a+1.5}q=new A.e7()
q.cW(v*7+d)
p.l(new C.bVq(p,d,u,q))
p.a4p(u?D.dyZ[q.aw(4)]+" "+w[p.as].d:D.dvb[q.aw(3)]+" "+w[p.as].d)},
kV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gDw()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bK9(t.at,t.ay,p)
t.l(new C.bVt(t,s))
t.a4p(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Cf(t.a.d,s),$async$kV)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Cg(r.d,r.c.a,"fire",t.at*10),$async$kV)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bVu())
w=1
break
case 4:++t.as
t.bdI()
case 1:return A.h(u,v)}})
return A.i($async$kV,v)},
C(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.a_c,new A.am(B.a0,v,B.ac,B.t,A.a([A.bS(0,new A.ea(A.b5(v,v,v,new C.aZe(u,w.r,w.w,u),B.az),v),0,0,0),A.bl(!0,A.w(A.a([w.cgF(0),B.aY,w.bVF()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cgF(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.RK,s,s,s,new C.bVp(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gDw().length;++w){v=t.as
if(w<v||t.Q===D.b5j)v=B.d0
else v=w===v?B.c:B.aT
u=new A.aQ(4,4)
p.push(A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,D.bGO,s,s,s,22))}p=A.E(A.w(A.a([D.h9x,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.B,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.K(B.fO,B.r,1)
return new A.C(D.bMG,A.A(A.a([r,p,A.q(s,A.c("\ud83d\udd25 "+B.h.S(t.cy*100)+"%",s,s,s,s,s,s,B.iY,s,s,s),B.f,s,s,new A.p(B.b8,s,u,v,s,s,B.m),s,s,s,s,B.hp,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bVF(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghm(0).gA8()
if(h==null)w=1
else w=h.c===D.p3?0:1
v=j.dx
u=j.db
t=D.r5.j(0.96)
s=A.n(22)
r=A.K(B.d0,B.r,3)
q=A.b5(i,i,i,new C.bsi(w,i),B.az)
p=A.c(j.Q===D.afz?j.gVh()+" asks":"Elder "+j.gVh(),i,i,i,i,i,i,D.aZf,i,i,i)
o=j.db
o=B.a.av(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c0,A.A(A.a([new A.a4(62,62,q,i),B.ar,A.E(A.w(A.a([p,B.bs,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aZt,i,i,i)],n),B.B,i,B.e,B.i,0,B.p),1)],n),B.B,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbwc(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.ac2("Sit down by the fire",j.gbw4()),i,i,i)
break
case 1:v=A.at(j.ac2("Ask me, Elder",j.gcRd()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gDw()[j.as].b,m<u.length;++m){q=new A.aQ(14,14)
l=new A.ax(D.lZ,2.5,B.r,-1)
v.push(A.aA(i,A.q(i,A.c(u[m],i,i,i,i,i,i,D.aZp,B.K,i,i),B.f,i,D.ah9,new A.p(D.amO,i,new A.bE(l,l,l,l),new A.bc(q,q,q,q),i,i,B.m),i,i,i,i,B.xh,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bVj(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bX(B.bG,v,B.bq,i,8,8)
break
case 3:v=j.fr
u=v?B.kp:An.asZ
u=A.V(u,v?B.ew:D.lZ,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.ew:D.lZ,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gDw().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.ac2(v,j.gqI(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gDw().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aZI,i,i,i)],n)
u=j.cx
if(u>0){u=C.aTm(u)
q=C.aTm(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ae0,i,i,i))}v.push(B.N)
v.push(j.ac2("Back to the games",new C.bVk(j)))
v=A.w(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.q(i,A.w(A.a([o,B.S,v],n),B.B,i,B.e,B.P,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aGC,i,B.m),i,i,i,B.zA,B.bg,i,i,i)},
ac2(d,e){var w=null,v=A.n(16),u=A.K(B.d0,B.r,2)
return A.aA(w,A.q(w,A.c(d,w,w,w,w,w,w,A2.M_,w,w,w),B.f,w,w,new A.p(D.lZ,w,u,v,w,w,B.m),w,w,w,w,D.bKp,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bsi.prototype={
a5(d,e){O.hxo(d,e.eq(B.J),e.gdm()*0.45,this.b,0,0.4)},
aC(d){return d.b!==this.b}}
C.aDJ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bX6.prototype={}
C.tB.prototype={}
C.bsj.prototype={}
C.ao6.prototype={
NN(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ivo(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aZe.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.De(l.d.NN(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bW(0,u)
l.cGt(d,j)
l.bUd(d,j)
l.cOY(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.nY(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.U()
q=A.M()
p=x.O
o=x.n
q.san(A.wG(B.J,r,A.a([D.bxB.j(0.55*s),F.OR.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.w,k,k,0))
d.P(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bWZ(l,d,j,i)),new A.y(540,new C.bX_(l,d,j,i)),new A.y(546,new C.bX0(l,d,j,i)),new A.y(574,new C.bX1(l,d,j,i)),new A.y(612,new C.bX2(l,d,j,i)),new A.y(650,new C.bX3(l,d,j,i)),new A.y(656,new C.bX4(l,d,j,i))],x.E)
B.d.b_(n,new C.bX5())
for(m=0;m<7;++m)n[m].b.$0()
l.bKV(d,j,i)
l.bXT(d,j)
t.restore()
$.U()
t=A.M()
t.san(A.wG(new A.m(w/2,v*0.6),e.gaqt()*0.75,A.a([B.L,D.bkL],p),A.a([0.55,1],o),B.w,k,k,0))
d.aE(new A.a5(0,0,0+w,0+v),t)},
aC(d){return d.c!==this.c||d.d!==this.d},
cGt(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e7()
h.cW(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=t.gp(0)
d.P(new A.m(v*450,20+u*300),0.8+s*1.1,r)}q=B.h.F(e,17)/1.2
if(q<1){p=new A.m(60+q*220,70+q*90)
d.ah(p,p.aI(0,D.eH4),C.iW(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.h.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.U()
k=A.a([],t)
l=new A.aJ(l.r,B.ak,null,null,k)
m=r+m*4
k.push(new A.b_(s-6,m))
l.ac()
j=r-3
r=new A.cn(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.aj(i)
l.ac()
s=new A.cn(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.aj(r)
l.ac()
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.b=B.af
s.c=1.6
s.r=D.bnx.gp(0)
s.d=B.bH
s.e=B.dQ
d.af(l,s)}},
bUd(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aDw[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.c1(new A.m(p,m),n*0.74,q*0.5)
k=Ad.zm.j(v)
$.U()
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=k.gp(0)
d.c3(l,j)
q=A.c1(new A.m(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.wU.j(u).gp(0)
d.c3(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.h.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=D.ak5.j(0.16*(1-h)).gp(0)
d.P(new A.m(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cOY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bHb(d,D.eH0,0.9,e,D.hYp,!1,!1,D.b5g,1,!1)
w=$.U().r
v=x.v
u=new A.aJ(w,B.ak,g,g,A.a([],v))
u.E(new A.b_(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bz())
t=A.M()
t.r=D.am3.gp(0)
d.af(u,t)
C.bHb(d,D.eH2,0.95,e,D.hYd,!1,!1,D.b5h,1,!0)
t=new A.aJ(w,B.ak,g,g,A.a([],v))
t.E(new A.b_(417,510))
t.E(new A.cn(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.cn(431,553,421,548))
t.E(new A.bz())
u=A.M()
u.r=F.H0.gp(0)
d.af(t,u)
u=A.c1(D.eH1,8,28)
t=A.M()
t.r=D.bA2.gp(0)
d.c3(u,t)
C.bHb(d,new A.m(-30+B.h.F(e/26,1)*510,492),0.82,e,D.hYr,!0,!1,D.Z_,1,!1)
t=B.h.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c3(A.c1(new A.m(s+q*16,r-6),16,11),C.iW(D.alV,1.8))
u=q<0
C.bHb(d,new A.m(s-q*6,r),0.62,e,D.hYu,!1,u,D.Z_,2.2,!1)
C.bHb(d,new A.m(s-q*32,r+4),0.58,e+1,D.hYl,!1,u,D.Z_,2.2,!1)
this.c_D(d,D.eGG,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.n.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.c1(new A.m(o,n),8,11)
k=p===1
j=k?D.alR:D.amu
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=j.gp(0)
d.c3(l,i)
l=k?D.alR:D.amu
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=l.gp(0)
d.P(new A.m(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.af
k.c=1
k.r=B.as.gp(0)
k.d=B.bH
k.e=B.dQ
d.ah(new A.m(o+7.5,n+(-2+m)),new A.m(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.af
k.c=1
k.r=B.as.gp(0)
k.d=B.bH
k.e=B.dQ
d.ah(new A.m(o,n+4),new A.m(o,n+8),k)}h=e<f.f
u=A.c1(D.aaT,15+Math.sin(e*2)*0.8,40)
t=A.M()
t.r=D.aku.gp(0)
d.c3(u,t)
u=A.c1(D.aaT.a6(0,new A.m(-14,h?-9:-2)),12,15)
t=A.M()
t.r=D.bpM.gp(0)
d.c3(u,t)
t=new A.aJ(w,B.ak,g,g,A.a([],v))
t.E(new A.b_(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bz())
u=A.M()
u.r=D.bpZ.gp(0)
d.af(t,u)
u=D.aaT.a6(0,new A.m(-17,h?-9:-2))
t=A.M()
t.r=B.iv.gp(0)
d.P(u,1.1,t)
v=new A.aJ(w,B.ak,g,g,A.a([],v))
v.E(new A.b_(168,590))
w=Math.sin(e*8)
v.E(new A.cn(180,588+w*(h?6:0),178,595))
d.af(v,C.iW(D.aku,3.5))},
c_D(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a6(0,new A.m(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.b=B.af
m.c=2
m.r=D.a_q.gp(0)
m.d=B.bH
m.e=B.dQ
d.ah(new A.m(u+o,s),new A.m(u+(o+n*1.5),q),m)}w=A.c1(k,17,32)
v=$.U()
r=A.M()
r.r=D.GZ.gp(0)
d.c3(w,r)
r=A.c1(k.a6(0,D.eG6),7,26)
w=A.ap(D.GZ,B.v,0.12)
w.toString
q=A.M()
q.r=w.gp(0)
d.c3(r,q)
v=new A.aJ(v.r,B.ak,null,null,A.a([],x.v))
v.E(new A.b_(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bz())
s=A.M()
s.r=D.GZ.gp(0)
d.af(v,s)
s=A.c1(k.a6(0,new A.m(24,-7+l)),9,12)
v=A.M()
v.r=D.GZ.gp(0)
d.c3(s,v)
v=-11+l
d.ah(k.a6(0,new A.m(22,v)),k.a6(0,new A.m(21,-17+l)),C.iW(D.a_q,1.6))
d.ah(k.a6(0,new A.m(26,v)),k.a6(0,new A.m(28,-16+l)),C.iW(D.a_q,1.6))
v=k.a6(0,new A.m(26,-8+l))
s=A.M()
s.r=B.v.gp(0)
d.P(v,0.9,s)
d.ah(k.a6(0,new A.m(26,-3+l)),k.a6(0,new A.m(26,1+l)),C.iW(D.bsP,1.4))
d.ah(k.a6(0,D.eJ2),k.a6(0,new A.m(-19,-7+Math.sin(f*7)*2)),C.iW(D.GZ,2.4))},
bXR(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.c1(new A.m(225+u*36,574+(t*13+6)),8,11)
$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.byE.gp(0)
a6.c3(u,t)}}u=A.c1(D.aaV.a6(0,B.cy),17,52)
$.U()
t=A.M()
t.r=D.bkj.gp(0)
a6.c3(u,t)
t=A.c1(D.aaV.a6(0,B.cy),12,44)
u=D.bnY.j(0.6+0.3*Math.sin(a7*6))
s=A.M()
s.r=u.gp(0)
a6.c3(t,s)
for(r=0;r<3;++r){v=D.duA[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.af
o.c=7
o.r=D.Hc.gp(0)
o.d=B.bH
o.e=B.dQ
a6.ah(new A.m(u+t*24,579+s*4),new A.m(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Cy.j(0.6)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.b=B.af
n.c=2
n.r=t.gp(0)
n.d=B.bH
n.e=B.dQ
a6.ah(new A.m(u+o*24,579+(p*4-2)),new A.m(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.flb,D.flM,D.fmW,D.fng,D.fmU]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bvT,D.bs9,D.by3][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.U()
f=A.a([],q)
a2=new A.aJ(g.r,B.ak,null,null,f)
f.push(new A.b_(a0-a1,578))
a2.ac()
g=a0+d*0.6
a3=new A.i6(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.i6(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ac()
g=new A.bz()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ac()
g=new A.ar(B.V,B.R,B.X,B.Y,B.W)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.h.F(a7*(0.35+B.n.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.n.F(w,3)
p=G.ams.j((1-a5)*0.9)
$.U()
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
a6.P(new A.m(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.h.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ak5.j(0.1*(1-a5))
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=q.gp(0)
a6.P(new A.m(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bXT(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.h.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.n.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bAd.j(0.18*p)
$.U()
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=o.gp(0)
d.P(new A.m(r,q),5,n)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=D.btF.j(0.9*p).gp(0)
d.P(new A.m(r,q),1.4,n)}},
c9S(d,e){switch(d){case 0:return e.b?D.hYf:D.b4w
case 1:return e.b?D.hYt:D.b4u
case 2:return D.b4t
case 3:return D.b4s
case 4:return D.b4v
default:return D.b4x}},
aG4(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
SB(d,e,f,g){var w,v=this,u=D.a84[e],t=v.c9S(e,g),s=new C.bsj(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a84[e],l=e===0
m=B.h.D(((l?D.aPg:D.aPm).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.ab0
s.as=D.Fo
if(l){s.a=o?v.aG4(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.m(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.m(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Fo
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.m(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.m(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.m(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.m(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eGe
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eHC
if(e===4)s.as=new A.m(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.m(-3-m,p)
s.as=new A.m(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.eJZ
s.as=D.aPz}if(e===2&&g.x!=null&&f<g.y){s.a=v.aG4(f,5)
s.b=0.4
s.as=new A.m(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aG4(f,e*3)
s.b=0.5
s.c=0.4}}C.hQI(d,u.a,u.b*1.2,t,s,f,e,null)},
bKV(d,e,f){var w=new C.bWY(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.ahA.prototype={
a9(){return"_Stand."+this.b}}
C.afu.prototype={}
C.lS.prototype={}
C.bVI.prototype={
bFq(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aT()
this.c=s},
H9(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bVJ())
return r},
atM(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aPV(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
aoR(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.d()
v=v.h(0,w)!=null&&u.K(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.d()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gA8(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b_(w,new C.bVK(this))
return B.d.gH(w)}}
C.awi.prototype={}
C.A3.prototype={}
C.amE.prototype={
gD2(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bQu(),A.T(w).k("X<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Nt.prototype={
garP(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gD2(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d7S(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.garP(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lS(B.a.i(s.a),p,B.d.c8(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bdt.prototype={}
C.abv.prototype={}
C.bkW.prototype={}
C.ahy.prototype={}
C.alW.prototype={
R(){return new C.alX(B.bI,A.a([],x.cC),A.a([],x.e4),null,null)},
gd8(){return this.d}}
C.alX.prototype={
gO4(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHQ(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbe3(){var w,v=this,u=v.e
if(u===$){w=v.qp(v.gcmk())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a4()
this.gbe3().fW(0)},
t(){this.gbe3().t()
this.bzN()},
fW(d){this.l(new C.bOC(this))},
cml(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fQ(0,v)
if(w.c!=null)w.l(new C.bOx())},
bcm(){var w,v,u,t=this,s=t.r
B.d.a7(s)
w=t.gO4()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bkW(u,(u+0.5)/v,w[t.x].b[u]))},
fQ(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bOD())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.ccL()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gO4()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.h.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.avl(v,0.8,B.d0)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.avl(m.cy,0.8,G.nS)
m.b1z("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.avl(q,0.88,D.lZ)
p=m.gO4()[m.x]
n=p.c
if(u===n){m.b1z("The right gourd fell! It was "+p.b[n]+".")
return}}}},
avl(d,e,f){var w,v,u,t=new A.e7()
t.cW(B.h.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ahy(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b1z(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.RI()}},
ccL(){var w=this
if(w.x+1>=w.gO4().length){w.RI()
return}++w.x
w.bcm()},
RI(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$RI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gO4().length
r=C.bK9(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bOv())
w=2
return A.b(C.Cf(u.a.d,r),$async$RI)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Cg(t.d,t.c.a,"catch",u.z),$async$RI)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bOw())
return A.h(null,v)}})
return A.i($async$RI,v)},
C(d){var w,v=this,u=null
if(v.CW)w=v.cgG()
else w=v.ch?v.cgH():A.at(new A.C(B.eA,A.w(A.a([D.b_H,B.N,D.hbf,B.S,D.hhs,B.ee,C.uS("Play",v.gf5(v),B.d0,B.fS,D.fN)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.u1("Calabash Catch",w,B.fh,u)},
cgH(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hQ:B.IF
p.push(A.V(u,v?B.aC:B.bX,r,r,r,22))}p.push(B.aY)
v=s.x
u=s.gO4()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aZe,r,r,r))
p.push(B.bd)
v=A.n(14)
p.push(A.q(r,A.c(""+s.z,r,r,r,r,r,r,B.iY,r,r,r),B.f,r,r,new A.p(B.by,r,r,v,r,r,B.m),r,r,r,r,A0.Dl,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.K(B.d0,B.r,3)
return A.w(A.a([new A.C(D.bIb,p,r),A.q(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fVW,B.K,r,r),B.f,r,r,new A.p(D.r5,r,t,v,r,r,B.m),r,r,r,B.eG,B.bg,r,r,1/0),B.aj,A.E(A.cg(new C.bOB(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cgG(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qG,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gO4().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Xn,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.ck(A.a([D.bhK,u,t,B.aN,new C.J1(s,r,w.cx,v),B.aN,A.at(C.uS("Back to the games",new C.bOu(w),B.d0,B.ko,D.fN),v,v,v)],x.p),v,v,B.ad,v,v,B.ah,!1)}}
C.bg0.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.U(),a3=A.M()
a3.san(A.jT(B.J,new A.m(0,a0),D.dan,G.aDN,B.w,e))
a4.aE(new A.a5(0,0,a1,0+a0),a3)
a3=A.M()
a3.r=G.OV.gp(0)
a4.P(new A.m(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aJ(a2.r,B.ak,e,e,w)
a2=a0*0.7
v.E(new A.b_(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.aj(s)
v.ac()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.U()
w=A.M()
w.r=D.boW.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aJ(a2.r,B.ak,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.b_(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.cn(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.cn(r+14,t,r+26,w))
a2.E(new A.bz())
w=A.M()
w.r=D.aj5.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cuH[q]
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.aj5.gp(0)
s.c=7
s.d=B.bH
a4.ah(new A.m(r,a2),new A.m(r+p*46,w),s)
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.ain.gp(0)
a4.P(new A.m(r+p*50,t),18,s)}a2=a0*0.88
w=A.M()
w.r=D.bpW.gp(0)
a4.aE(new A.a5(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.akL.gp(0)
t.c=2
a4.ah(new A.m(w,a1),new A.m(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.c1(new A.m(u,s),12,54)
$.U()
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.lZ.j(0.6).gp(0)
a4.c3(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.ajP.gp(0)
a4.P(D.eFu,14,m)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.buX.gp(0)
m.c=4
m.d=B.bH
a4.ah(D.eFv,D.eGC,m)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.san(new A.any(D.eIN,46,D.dkd,B.vU,B.w,e,e,0))
a4.P(B.J,34,m)
m=A.c1(D.eIT,8,12)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=B.c.j(0.35).gp(0)
a4.c3(m,l)
k=new A.iT(new A.eG(n.c,e,e,B.cW,e,e,e,e,e,e,D.fTI),B.K,B.cb,new A.k3(1),e,e,3,e,B.cc,e,B.cK)
k.nM(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bx(A.c1(B.cO,m.gb4(m)+8,l),B.h5)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.r5.gp(0)
a4.aq(j,l)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.lZ.gp(0)
l.b=B.af
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a5(a4,new A.m(-m/2,4-l.gb4(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.izv(a4,new A.m(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.e1,(w+1)/2)
h=A.c1(new A.m(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aJ($.U().r,B.ak,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.b_(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.cn(h.gbD().a,s+8,w+8,s))
a3.E(new A.bz())
m=A.M()
m.r=D.a0g.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.Cy.gp(0)
m.c=1.4
a4.ah(new A.m(t,a2),new A.m(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.M()
s.r=G.nS.gp(0)
a4.aE(new A.a5(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.M()
s.r=D.bp1.gp(0)
a4.c3(new A.a5(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=g.e.j(B.h.D(s,0,1)).gp(0)
a4.P(new A.m(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.h2(e,B.cK,e,e,e,A.cX(e,e,e,e,e,e,e,e,e,A.l(e,e,B.d0.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Ex,e,e),"+"+a2),B.a8,B.cb,e,B.e6,B.cc)
k.eL()
k.a5(a4,new A.m(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aC(d){return!0}}
C.RD.prototype={
C(d){var w=this,v=null,u=w.e,t=A.b5(v,v,v,new C.aDH(w.c,w.f,v),B.az),s=A.n(10),r=A.K(B.bE,B.r,1.4)
return new A.a4(u+22,v,A.w(A.a([new A.a4(u,u,t,v),B.cR,A.q(v,A.c(w.d,v,1,B.a2,v,v,v,D.fM3,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.m),v,v,v,v,B.nq,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
ga0(d){return this.e}}
C.aDH.prototype={
a5(d,e){var w=e.eq(B.J),v=e.gdm(),u=this.c?0.8:0
return O.hxo(d,w,v*0.44,this.b,0,u)},
aC(d){return d.b!==this.b||d.c!==this.c}}
C.aC3.prototype={}
C.awT.prototype={
R(){return new C.awU(A.S(x.S,x.cq),null,null)},
gd8(){return this.d}}
C.awU.prototype={
gl_(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hWB(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaIa(){var w=this.z
return w===$?this.z=this.YO(0):w},
gja(){var w,v=this.Q
if(v===$){w=this.gl_()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c4(w,-1,!1,x.S)}return v},
YO(d){var w,v,u,t,s=this.gl_()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aC3(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aC3(v[t],u[t],-1))
v=new A.e7()
v.cW(this.a.e*31+d)
B.d.e_(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.ds(w,w.r,w.e);w.A();){v=w.d
v.r.t()
v.r=null
u=v.eV$
u.b=!1
B.d.a7(u.a)
u=u.goZ()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e2$.a.a7(0)
v.qZ()}this.bAf()},
cXo(d,e){var w,v,u,t,s,r=this
if(d>=r.gja().length||r.gja()[d]!==-1||B.d.q(r.gja(),e))return
w=r.gaIa()[e]
v=r.gl_()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.cuJ(r,e,w,v))
A.cD(B.m5,new C.cuK(r))
return}++r.r
u=A.br(null,B.hB,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.cuL(r,d,e,w,v))
u.ct(0)},
kV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gl_()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cH(n,0,new C.cuM())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.cuN(t,r))
w=5
return A.b(C.Cf(t.a.d,r),$async$kV)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Cg(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kV)
case 6:t.ch=f
if(t.c!=null)t.l(new C.cuO())
w=1
break
case 4:for(o=t.as,n=new A.ds(o,o.r,o.e);n.A();){q=n.d
q.r.t()
q.r=null
p=q.eV$
p.b=!1
B.d.a7(p.a)
p=p.goZ()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e2$.a.a7(0)
q.qZ()}o.a7(0)
t.l(new C.cuP(t))
case 1:return A.h(u,v)}})
return A.i($async$kV,v)},
C(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qG,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Xn,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.u1(q,A.ck(A.a([D.ahW,w,v,B.aN,new C.J1(u,t,r.ch,p),B.aN,A.at(C.uS("Back to the games",new C.cuF(d),B.d0,B.ko,D.fN),p,p,p)],x.p),p,p,B.ad,p,p,B.ah,!1),B.fh,p)}w=r.gl_()
v=r.e
s=w[v]
return new C.u1(q,new A.C(B.tM,A.w(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aZ9,B.K,p,p),A.E(A.cg(new C.cuG(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.fh,p)}}
C.bfs.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cV3(),A.T(b2).k("X<1>")).gI(0),b4=a9.b,b5=b4.a6(0,B.KK)
$.U()
w=A.M()
w.r=D.m_.j(0.18+0.1*b3).gp(0)
b6.P(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a6(0,D.eFh)
u=A.M()
u.r=B.r6.j(0.5).gp(0)
u.c=10
u.d=B.bH
b6.ah(new A.m(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.ed.aA(0,B.h.D(b2[p],0,1))
l=$.U().r
k=A.a([],s)
j=new A.aJ(l,B.ak,b0,b0,k)
k.push(new A.b_(u,b4))
j.ac()
o=new A.cn((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aJ(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),i=new A.vg(o,!1,n);i.A();){h=i.c
if(h===0||i.f)A.bi(A.k_(b1));--h
g=new A.Cc(i,h)
f=0
for(;;){i.jZ()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jZ()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.U()
a1=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a1.r=B.aT.gp(0)
a1.b=B.af
a1.c=3
b6.af(new A.aJ(l,d,b0,new A.b4([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aJ(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),k=new A.vg(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.A();){a0=k.c
if(a0===0||k.f)A.bi(A.k_(b1));--a0
k.jZ()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.U()
a4=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a4.r=D.Hr.gp(0)
a4.b=B.af
a4.c=h
a4.d=B.bH
b6.af(new A.aJ(l,a2,b0,new A.b4([new A.Cc(k,a0),0,a1*m,!0]),a3),a4)
k.jZ()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jZ()
a5=n[a0].Xd(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.c1(new A.m(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.bf.gp(0)
b6.c3(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iT(D.fLx,B.a8,B.cb,new A.k3(1),b0,b0,b0,b0,B.cc,b0,B.cK)
a8.eL()
a8.a5(b6,new A.m(w*(0.15+p*0.14),b2-B.n.F(p,3)*14))}},
aC(d){return!0}}
C.aAP.prototype={
R(){return new C.aAQ(A.aR(x.S))},
gd8(){return this.d}}
C.aAQ.prototype={
gl_(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hXw(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a4()
this.bcv()},
t(){var w=this.ch
if(w!=null)w.a2(0)
this.a3()},
bcv(){var w=this.ch
if(w!=null)w.a2(0)
this.ch=A.d5(B.tG,new C.cJE(this))},
btP(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gl_()[v.e]
if(w.e[d]===w.b)v.l(new C.cJM(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cJN(v,d))
A.cD(B.j5,new C.cJO(v))}},
d1X(){var w=this
if(!w.as&&w.f<w.gl_()[w.e].d.length)w.l(new C.cJP(w))},
kV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gl_()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a2(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.l(new C.cJQ(t,s))
w=5
return A.b(C.Cf(t.a.d,s),$async$kV)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Cg(q.d,q.c.a,"who",t.r),$async$kV)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cJR())
w=1
break
case 4:t.l(new C.cJS(t))
t.bcv()
case 1:return A.h(u,v)}})
return A.i($async$kV,v)},
C(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gl_().length+" guessed",a2,a2,a2,a2,a2,a2,B.qG,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Xn,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.u1(a1,A.ck(A.a([D.bhV,w,v,B.aN,new C.J1(u,t,a0.ax,a2),B.aN,A.at(C.uS("Back to the games",new C.cJG(a3),B.d0,B.ko,D.fN),a2,a2,a2)],x.p),a2,a2,B.ad,a2,a2,B.ah,!1),B.fh,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gl_()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.M6,B.K,a2,a2),B.S,A.at(A.l5(new C.cJH(a0,r),a2,B.b1,B.hB,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aQ(16,16)
l=new A.ax(B.d0,2,B.r,-1)
k=o+1
w.push(new A.rx(new A.bq(0,1,u),new C.cJI(),A.q(a2,new A.c_(B.aJ,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.r2(A.c(""+k,a2,a2,a2,a2,a2,a2,B.oA,a2,a2,a2),D.lZ,a2,12,a2),B.ar,new A.bu(1,B.ba,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fYz,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.r5,a2,new A.bE(l,l,l,l),new A.bc(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cB,B.bg,a2,a2,a2),B.b1,B.j5,a2,new A.b9("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bK(!1,D.hpE,a2,a2,!0,a2,a2,a2,a0.gd1W(),a2,a2),a2,a2,a2))
w.push(B.N)
if(a0.as){u=D.m_.j(0.2)
q=A.n(16)
p=A.K(D.m_,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fU,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.w(A.a([m,B.S,C.uS(v,a0.gqI(a0),B.d0,B.jH,D.fN)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bD,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dA:B.d0.j(0.2)
g=new A.aQ(16,16)
l=new A.ax(n.q(0,o)?B.fs:B.d0,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bX:B.c
d=n.q(0,o)?B.ye:a2
t.push(new A.rx(new A.bq(0,i,u),new C.cJJ(),A.aA(a2,A.q(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.H(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.ah1,new A.p(h,a2,new A.bE(l,l,l,l),new A.bc(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jF,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cJK(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b1,B.my,a2,new A.b9("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bX(B.fL,t,B.bq,a2,10,10))}return new C.u1(a1,A.ck(w,a2,a2,B.aoP,a2,a2,B.ah,!1),B.fh,a2)}}
C.aBO.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.aJj.prototype={
b0(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.be$
if(v!=null)v.a8(0,w.gdP())
w.be$=null
w.a3()}}
C.ahm.prototype={
atk(d){},
atR(){var w=this,v=w.qp(new C.fiC(w))
v.fW(0)
w.Nd$!==$&&A.aT()
w.Nd$=v}}
C.aNe.prototype={
gbq8(d){var w=this.c
return B.a.av(w,0,Math.min(this.d,w.length))},
Xl(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.c=d
w.d=0
w.b=A.d5(E.a1V,new C.ft1(w))},
bwb(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a2(0)}}
C.anX.prototype={
R(){return new C.anY(new C.ao6(),A.a([],x.t),new A.eP(0,$.ay()),$,0,null,null)},
gd8(){return this.d}}
C.anY.prototype={
gO2(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHQ(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghm(d){var w,v=this,u=v.e
if(u===$){w=C.NL(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqQ(){var w=this.r
return w===$?this.r=new C.aNe(new C.bWu(this)):w},
gasa(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gO2()[v].c)u.push(1)
return u.length},
gbpm(){var w=this.ghm(0)
return w.gA8()==null?"Elder":B.a.i(w.gA8().b)},
Z(){this.a4()
this.atR()},
t(){var w,v=this
v.gqQ().t()
v.f.t()
w=v.Nd$
w===$&&A.d()
w.t()
w=v.qw$
w.V$=$.ay()
w.W$=0
v.bzV()},
cRq(){var w=this
w.l(new C.bWr(w))
w.gqQ().Xl(w.gO2()[w.x].a)},
Mq(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqQ()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qw$.a
v.ax=u
v.ay=u+1
v.l(new C.bWp())
A.cD(B.hB,new C.bWq(v))},
btL(){var w=this.gasa(0)/this.gO2().length*100
if(w>=90)return D.fhR
if(w>=75)return D.ffy
if(w>=60)return D.f5x
if(w>=45)return D.f9b
return D.f_I},
C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.czp()
w=A.bS(0,new A.ea(A.b5(m,m,m,new C.bwr(n,n.qw$),B.az),m),0,0,0)
if(!n.Q){v=D.r5.j(0.96)
u=A.n(20)
t=A.K(B.d0,B.r,3)
u=A.q(m,A.w(A.a([A.c("Elder "+n.gbpm()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.b_6,B.K,m,m),B.S,C.uS("Start the test",n.gCS(),B.d0,B.jm,D.fN)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.m),m,m,m,m,B.bD,m,m,m)
v=u}else{v=n.x
u=n.gO2()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.b_8,m,m,m)
if(n.Q){t=n.gqQ()
t=t.d<t.c.length}else t=!1
if(t)u=D.fDX
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aQ(10,10)
o=new A.ax(D.Cy,4,B.r,-1)
s.push(A.aA(m,A.q(m,A.c(q[r],m,m,m,m,m,m,D.fPn,B.K,m,m),B.f,m,D.ah1,new A.p(D.bkQ,m,new A.bE(o,o,o,o),new A.bc(p,p,p,p),m,m,B.m),m,m,m,m,B.PI,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bWs(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bX(B.fL,s,B.bq,new A.b9("o"+t,x.W),8,8)}u=A.w(A.a([v,B.aj,A.p0(u,B.nm,A.qd(),B.b1,B.b1,A.Mk())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.u1("Village School",new A.am(B.a0,m,B.ac,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fh,m)},
czp(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.btL(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gO2()[v].c)g.push(v)
u=A.n(22)
t=A.K(B.d0,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fU_,B.K,i,i)
r=A.c("Signed by Elder "+j.gbpm(),i,i,i,i,i,i,D.fSC,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fXV,i,i,i),D.eS8],q)
o=A.c(h.b,i,i,i,i,i,i,D.fZV,i,i,i)
n=j.gasa(0)
m=j.gO2()
u=A.q(i,A.w(A.a([D.has,B.at,s,r,B.S,new A.am(B.z,i,B.ac,B.t,p,i),o,B.aj,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ae0,i,i,i),B.N,D.aw_],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(D.r5,i,t,u,i,i,B.m),i,i,i,i,B.f7,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.J1(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aN,D.hqK,B.N],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aQ(14,14)
k=new A.ax(B.by,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.w(A.a([A.c(p.a,i,i,i,i,i,i,B.h6,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fVe,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fXw,i,i,i)],q),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.dA,i,new A.bE(k,k,k,k),new A.bc(r,r,r,r),i,i,B.m),i,i,i,B.cB,B.bg,i,i,i))}B.d.u(s,u)}s.push(B.aA)
s.push(A.at(C.uS("Back to the games",new C.bWl(j),B.d0,B.ko,D.fN),i,i,i))
return new C.u1("Village School",A.ck(s,i,i,B.bR,i,i,B.ah,!1),B.fh,i)}}
C.bwr.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qw$.a
a0.De(e.f.NN(a1))
w=C.hse(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bW(0,w.c)
if(e.Q){u=e.gqQ()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d45[s]-6
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=D.Hc.gp(0)
a0.aE(new A.a5(u,340,u+12,450),r)}u=A.bx(D.abV.cu(10),B.im)
$.U()
r=A.M()
r.r=D.Cy.gp(0)
a0.aq(u,r)
r=A.bx(D.abV,B.iE)
u=A.M()
u.san(A.jT(new A.m(30,96),new A.m(420,346),D.dqc,f,B.w,f))
a0.aq(r,u)
q=new A.e7()
q.cW(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.c1(new A.m(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.025).gp(0)
a0.c3(o,r)}u=A.M()
u.r=I.alB.gp(0)
a0.aE(new A.a5(30,354,420,362),u)
u=A.M()
u.r=B.aS.gp(0)
a0.aE(D.fvc,u)
u=A.M()
u.r=B.bO.gp(0)
a0.aE(D.fvg,u)
u=A.bx(D.fv6,B.hv)
r=A.M()
r.r=D.a0g.gp(0)
a0.aq(u,r)
n=B.h.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqQ().gbq8(0)
m=A.h2(f,B.cK,f,7,f,A.cX(f,f,f,f,f,f,f,f,f,D.h1g,u+(t?"|":"")),B.a8,B.cb,f,B.e6,B.cc)
m.nM(346)
J.bs(v.save())
u=A.hS(D.abV)
r=$.lJ()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hS(new A.a5(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.m(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bx(new A.a5(u,r,u+40,r+90),B.h5)
u=A.M()
u.r=D.bB7.gp(0)
a0.aq(r,u)}}else{m=A.h2(f,B.cK,f,f,f,D.fLN,B.K,B.cb,f,B.e6,B.cc)
m.nM(340)
m.a5(a0,new A.m(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.h.F(u+p/8,1)
o=B.n.F(e.gqQ().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.P(new A.m(70+o+k*6,166+l*70),1.6,j)}u=e.ghm(0).gA8()
i=(u==null?f:u.c)===D.p3?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fiD(d,a0,i,t,h,D.eGr)),new A.y(520,new C.fiE(a0,d,t)),new A.y(575,new C.fiF(a0,d,t)),new A.y(585,new C.fiG(this,a0,d,t)),new A.y(615,new C.fiH(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.fiI())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cgI(d,e){var w,v,u,t,s,r,q,p=$.U(),o=A.a([],x.v),n=new A.aJ(p.r,B.ak,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.b_(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ac()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ac()}}n.E(new A.bz())
return n},
aC(d){return!1}}
C.anV.prototype={
R(){return new C.anW(new C.ao6(),A.S(x.S,x.i),new A.eP(0,$.ay()),$,0,null,null)},
gd8(){return this.d}}
C.anW.prototype={
gl_(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hWq(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gja(){var w=this.z
return w===$?this.z=this.GI(0):w},
gaOu(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.GI(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.c8(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.GI(0):r).length);++v}s.Q=w
r=w}return r},
GI(d){var w,v,u,t,s=this.gl_()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e7()
u.cW(this.a.e+d*7)
B.d.e_(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eJ(u,new C.bW7())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a4()
this.atR()},
t(){var w,v=this
v.e.t()
w=v.Nd$
w===$&&A.d()
w.t()
w=v.qw$
w.V$=$.ay()
w.W$=0
v.bzU()},
atk(d){var w,v,u,t,s,r=this,q=r.gja().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.c8(u===$?r.z=r.GI(0):u,v)
s=r.gaOu()
s[v]=s[v]+(450*(t+0.5)/q-r.gaOu()[v])*Math.min(1,w)}},
d7p(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gja().length)return
w=v.y
if(w===-1){v.l(new C.bWi(v,d))
return}if(w===d){v.l(new C.bWj(v))
return}v.l(new C.bWk(v,B.d.c8(v.gja(),v.y),d,B.d.c8(v.gja(),d)))},
cS8(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.GI(0):u).length))break
t=s.gl_()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.GI(0):u)[v]]===v);++v}s.l(new C.bWd(s,B.d.cE(w,new C.bWe())))},
kV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gl_().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bWf(t,s))
w=5
return A.b(C.Cf(t.a.d,s),$async$kV)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Cg(q.d,q.c.a,"lineup",t.r*10),$async$kV)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bWg())
w=1
break
case 4:t.l(new C.bWh(t))
case 1:return A.h(u,v)}})
return A.i($async$kV,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gl_().length+" lines right",k,k,k,k,k,k,B.qG,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.u1("Line Up",A.ck(A.a([D.ahW,w,B.aN,new C.J1(v,u,l.ch,k),B.aN,A.at(C.uS("Back to the games",new C.bW9(d),B.d0,B.ko,D.fN),k,k,k)],x.p),k,k,B.ad,k,k,B.ah,!1),B.fh,k)}w=A.a([],x.t)
for(t=0;v=l.gl_(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bWa(l))
u=A.bS(0,A.cg(new C.bWb(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.b_8,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.w(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fUs,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fWL,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.n(16)
n=l.ax
m=A.K(n?D.m_:G.nS,B.r,2)
r.push(A.q(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bWc(l),x.cM).aJ(0,", then ")+".",k,k,k,k,k,k,D.fYY,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.m),k,k,k,B.d3,B.bg,k,k,1/0))}if(!l.at)r.push(C.uS("That is my line!",l.gcS7(l),B.d0,B.h2,D.fN))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uS(w,l.gqI(l),B.d0,B.jH,D.fN))}return new C.u1("Line Up",new A.am(B.a0,k,B.ac,B.t,A.a([u,s,A.ao(12,A.w(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.fh,k)}}
C.bmM.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qw$.a
c7.De(c5.e.NN(c8))
w=C.hse(c8)
v=c7.c
J.bs(v.save())
v.translate(w.a,w.b)
c7.bW(0,w.c)
u=c5.gja().length
t=$.U().r
s=x.v
r=new A.aJ(t,B.ak,c4,c4,A.a([],s))
r.E(new A.b_(10,470))
r.E(new A.cn(225,500,440,470))
q=A.M()
q.r=D.a0g.gp(0)
q.b=B.af
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aJ(t,B.ak,c4,c4,l)
l.push(new A.b_(o,n))
k.ac()
m=new A.aq(o+16,n+6+m*3)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.ac()
m=new A.aq(o,n+20)
l.push(m)
j=k.f
if(j!=null)m.aj(j)
k.ac()
m=new A.bz()
l.push(m)
l=k.f
if(l!=null)m.aj(l)
k.ac()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=[B.d0,G.nS,D.m_,B.aH][B.n.F(p,4)].gp(0)
c7.af(k,m)}this.b4n(c7,"OLDEST",D.eHp,B.d0)
this.b4n(c7,"YOUNGEST",D.eGS,B.bf)
t=A.bx(D.fv0,B.h5)
s=A.M()
s.r=D.Hc.gp(0)
c7.aq(t,s)
s=A.bx(D.fv_,B.iE)
t=A.M()
t.r=D.Cy.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.dxV())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.c8(a1===$?c5.z=c5.GI(0):a1,f)
o=c5.gaOu()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gl_()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gl_()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.U()
a9=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a9.r=B.d0.j(0.22+0.1*Math.sin(e)).gp(0)
c7.P(new A.m(o,520),54,a9)}a9=D.duo[B.n.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.m(-3-b2*8,-56)
else b9=a3?D.eJw:c4
if(b1)c0=new A.m(3+b2*8,-56)
else if(h&&a7)c0=D.aPz
else c0=a3?new A.m(30,-104+Math.sin(e)*5):c4
C.Tz(c7,new A.m(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.KN,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iT(new A.eG(a8,c4,c4,B.cW,c4,c4,c4,c4,c4,c4,D.fS6),B.a8,B.cb,new A.k3(1),"\u2026",c4,1,c4,B.cc,c4,B.cK)
c1.nM(q)
c2=A.bx(A.c1(new A.m(o,650),24,c1.b.c+16),B.h5)
$.U()
a8=new A.ar(B.V,B.R,B.X,B.Y,B.W)
if(a6)a9=B.iN
else a9=a7?B.tz:D.r5
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.V,B.R,B.X,B.Y,B.W)
if(a6)a9=D.m_
else a9=a7?G.nS:D.lZ
a8.r=a9.gp(0)
a8.b=B.af
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.m(o-a9/2,650-a8.gb4(a8)/2))
c3=new A.iT(new A.eG(""+(a2+1),c4,c4,B.cW,c4,c4,c4,c4,c4,c4,D.fSq),B.a8,B.cb,new A.k3(1),c4,c4,c4,c4,B.cc,c4,B.cK)
c3.eL()
c3.a5(c7,new A.m(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.h.F(p*53+Math.sin(c5+p)*20,450)
q=B.h.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.c1(B.J,4,8)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=[B.d0,G.nS,D.m_,B.aH,B.c][B.n.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b4n(d,e,f,g){var w,v,u=null,t=A.h2(u,B.cK,u,u,u,A.cX(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Ex,u,u),e),B.a8,B.cb,u,B.e6,B.cc)
t.eL()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aI(0,new A.m(v/2,w.gb4(w)/2)))},
aC(d){return!1}}
C.a3o.prototype={
a9(){return"_Trip."+this.b}}
C.anR.prototype={
R(){return new C.anS(D.Z6,new A.eP(0,$.ay()),$,0,null,null)},
gd8(){return this.d}}
C.anS.prototype={
gEs(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHQ(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghm(d){var w,v=this,u=v.e
if(u===$){w=C.NL(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqQ(){var w=this.f
return w===$?this.f=new C.aNe(new C.bVU(this)):w},
gVh(){var w=this.ghm(0)
return w.gA8()==null?"Grandma":B.a.i(w.gA8().b)},
Z(){this.a4()
this.atR()},
t(){var w,v=this
v.gqQ().t()
w=v.Nd$
w===$&&A.d()
w.t()
w=v.qw$
w.V$=$.ay()
w.W$=0
v.bzT()},
atk(d){var w,v,u,t=this
if(t.r!==D.afK)return
w=B.dS.aA(0,B.h.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gEs()
if(v+1>=u.length){t.r=D.afL
t.Yj()}else{++t.w
t.ay=!1
t.r=D.Z7
t.gqQ().Xl(u[t.w].a)}if(t.c!=null)t.l(new C.bVS())}},
Yj(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Yj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqQ().Xl("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gEs().length
r=C.bK9(t,u.z,s)
u.as=r
w=2
return A.b(C.Cf(u.a.d,r),$async$Yj)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Cg(s.d,s.c.a,"journey",u.x*10),$async$Yj)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bVM())
return A.h(null,v)}})
return A.i($async$Yj,v)},
bv3(){this.aXk()},
aXk(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.afK
if(w.c!=null)w.l(new C.bVN())},
Mq(d){var w,v,u,t,s=this
if(s.r!==D.Z7)return
w=s.gEs()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bVR(s,d,v))
u=s.gqQ()
t=s.w
u.Xl(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cXn(){if(this.r!==D.C6)return
this.aXk()},
C(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.ea(A.b5(s,s,s,new C.bmb(t,t.qw$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gEs().length;++w){v=t.w
if(w<v||t.r===D.afL)v=B.d0
else v=w===v?B.c:B.aT
u=new A.aQ(4,4)
p.push(new A.bu(1,B.ba,A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,B.xn,s,s,s,s),s))}p.push(B.b7)
p.push(D.hc8)
return new C.u1("Safari Journey",new A.am(B.a0,s,B.ac,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cqR(),s,s,10,10,s,s)],q),s),B.fh,s)},
cqR(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bVQ(o),l=D.r5.j(0.96),k=A.n(22),j=A.K(B.d0,B.r,3)
switch(o.r.a){case 0:w=A.w(A.a([A.c("A long drive to the village of Elder "+o.gVh()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.b_6,B.K,n,n),B.S,C.uS("Start the journey",o.gbv2(),B.d0,D.bW5,D.fN)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bhu
break
case 1:w=o.w
v=o.gEs()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aQ(14,14)
p=new A.ax(D.lZ,2.5,B.r,-1)
t.push(A.aA(n,A.q(n,A.c(r[s],n,n,n,n,n,n,D.aZp,B.K,n,n),B.f,n,D.ah9,new A.p(D.amO,n,new A.bE(p,p,p,p),new A.bc(q,q,q,q),n,n,B.m),n,n,n,n,B.xh,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bVO(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.w(A.a([w,B.N,A.bX(B.bG,t,B.bq,n,8,8)],u),B.B,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gEs().length?"Drive home":"Drive on"
v=A.w(A.a([w,B.N,new A.bH(B.a9,n,n,C.uS(v,o.gcXm(),B.d0,B.jH,D.fN),n)],x.p),B.B,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gVh()),B.N,A.c(""+o.x+" of "+o.gEs().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aZI,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aTm(v)
u=C.aTm(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ae0,n,n,n))}w.push(B.N)
w.push(A.at(C.uS("Back to the games",new C.bVP(o),B.d0,B.ko,D.fN),n,n,n))
w=A.w(w,B.B,n,B.e,B.P,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.p(l,n,j,k,D.aGC,n,B.m),n,n,n,n,B.bg,n,n,n)}}
C.bmb.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qw$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gEs(),d0=B.h.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.afK,d2=c7*0.5
c8=A.ap(D.bmm,D.bxj,d0)
c8.toString
w=A.ap(D.a_s,G.akl,d0)
w.toString
v=A.ap(B.v1,D.bvE,d0)
v.toString
$.U()
u=A.M()
t=x.O
u.san(A.jT(B.J,new A.m(0,d2),A.a([c8,w,v],t),G.a6t,B.w,c3))
d3.aE(new A.a5(0,0,0+c6,0+c7),u)
s=new A.m(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.M()
u.san(A.wG(s,60,A.a([D.bw2,B.L],t),c3,B.w,c3,c3,0))
d3.P(s,60,u)
u=A.M()
u.r=B.a_F.gp(0)
d3.P(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.h.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.n.F(r,3)*22
for(o=0;o<4;++o){n=D.dLy[o]
$.U()
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=B.c.j(0.75).gp(0)
d3.P(new A.m(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.U()
j=A.a([],m)
i=new A.aJ(k.r,B.ak,c3,c3,j)
j.push(new A.b_(0,v))
i.ac()
for(k=u-l*12,h=0.12+l*0.1,g=70+l*30,f=14-l*3,q=0;q<=c6;q+=6){e=new A.aq(q,k+Math.sin((q+c4.CW*h)/g)*f)
j.push(e)
d=i.f
if(d!=null)e.aj(d)
i.ac()}k=new A.aq(c6,v)
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
$.U()
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=A.ap(l===0?D.bkT:D.bAv,D.bq4,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cgJ(d3,new A.m(B.h.F(B.h.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.U()
w=A.M()
v=A.ap(D.alV,D.Hr,d0)
v.toString
w.san(A.jT(new A.m(0,d2),new A.m(0,c7),A.a([v,D.bw4],t),c3,B.w,c3))
d3.aE(new A.a5(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.M()
w.r=D.bph.gp(0)
d3.aE(new A.a5(0,a0,c6,a1),w)
w=A.M()
w.r=D.bA6.gp(0)
d3.aE(new A.a5(0,a0-3,c6,a0),w)
for(q=-B.h.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=I.O7.gp(0)
d3.aE(new A.a5(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.U()
b2=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b2.r=D.bkx.gp(0)
d3.aE(new A.a5(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aJ(b1.r,B.ak,c3,c3,b2)
b2.push(new A.b_(a9-36,t))
b1.ac()
b0=new A.aq(a9,a6)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.ac()
b0=new A.aq(a9+36,t)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.aj(b3)
b1.ac()
b0=new A.bz()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.aj(b2)
b1.ac()
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.byc.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b1.r=D.fN.gp(0)
d3.aE(new A.a5(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.Hc.gp(0)
d3.aE(new A.a5(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a5(b0,a4,b0+60,a5),B.jL)
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.bBD.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.Cy.gp(0)
b0.b=B.af
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iT(new A.eG(b6,c3,c3,B.cW,c3,c3,c3,c3,c3,c3,D.fQv),B.a8,B.cb,new A.k3(1),c3,c3,c3,c3,B.cc,c3,B.cK)
b7.eL()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.m(b4-b1/2,a2-b0.gb4(b0)/2))
if(a7)b8=c4.r===D.afL
else if(r===c4.w){b0=c4.r
b0=b0===D.Z7||b0===D.C6
b8=b0}else b8=!1
if(a7){b0=c4.ghm(0).gA8()
b9=(b0==null?c3:b0.c)===D.p3?1:0}else b9=[0,3,6,7,2,1,4,5][B.n.F(r,8)]
b0=c4.gqQ()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.C6
b0=c0?C.hSe(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Z7?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.m(40,-110+Math.sin(g)*10)
else a7=c0?new A.m(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Tz(d3,new A.m(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.m(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bMi(d3,new A.m(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.h.F(w+r/7,1)
$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.bzA.j(0.5*(1-c2)).gp(0)
d3.P(new A.m(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Z6)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.h.F(w+r/5,1)
t=Math.sin(r+c8)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.P(new A.m(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.C6&&c4.ax){b7=A.h2(c3,B.cK,c3,c3,c3,A.cX(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.d0,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.JH,c3,c3),"BEEP BEEP!"),B.a8,B.cb,c3,B.e6,B.cc)
b7.eL()
b7.a5(d3,new A.m(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cgJ(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.bvy,D.boA,g)
o.toString
if(f){w=new A.aJ($.U().r,B.ak,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.b_(v-16,u))
t=u-36
s=u-56
w.E(new A.cn(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.cn(v+9,t,v+16,u))
w.E(new A.bz())
t=A.M()
t.r=D.a0O.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d8k[r]
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=D.a0O.gp(0)
p.c=4
p.d=B.bH
d.ah(new A.m(w,t),new A.m(v+q*24,s),p)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=o.gp(0)
d.P(new A.m(v+q*26,u),10,p)}}else{w=e.a6(0,D.eJt)
$.U()
v=A.M()
v.r=D.bkz.gp(0)
v.c=4
d.ah(e,w,v)
v=A.c1(e.a6(0,D.eJu),16,60)
w=A.M()
w.r=o.gp(0)
d.c3(v,w)}},
bMi(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Z6?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jB(0,a0)
for(w=0;w<2;++w){v=D.dCT[w]
u=d.ay&&d.r!==D.Z6&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.U()
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.bAm.gp(0)
a2.P(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.bsg.gp(0)
a2.P(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.bl.gp(0)
q.c=2
a2.ah(B.J,new A.m(s*9,t*9),q)}a1.restore()}p=A.rl(D.fvp,B.h5,B.h5,B.ia,B.hT)
$.U()
t=A.M()
t.san(A.jT(D.eFx,B.aaO,D.drF,G.a6t,B.w,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.dl0[B.n.F(o,4)].gp(0)
a2.aE(new A.a5(t,-26,t+10,-19),s)}n=d.r===D.C6&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a5(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.nn(A.bx(l,B.pq)),$.n0(),!0)
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=D.a_s.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.C6?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Tz(a2,new A.m(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aPq,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.pq)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=D.amQ.gp(0)
i.b=B.af
i.c=2
a2.aq(j,i)}d=A.bx(D.Wt,B.pq)
t=A.M()
t.r=D.a_s.gp(0)
a2.aq(d,t)
J.bs(a1.save())
a1.clipRRect(A.nn(A.bx(D.Wt,B.pq)),$.n0(),!0)
C.Tz(a2,new A.m(D.Wt.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aPq,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.Wt,B.pq)
d=A.M()
d.r=D.amQ.gp(0)
d.b=B.af
d.c=2
a2.aq(t,d)
d=A.M()
d.r=Ap.CY.gp(0)
a2.P(D.eHF,4,d)
d=A.M()
d.r=D.Hc.gp(0)
a2.aE(D.fwy,d)
for(w=0;w<3;++w){v=D.dCV[w]
d=A.bx(new A.a5(v,-96,v+28,-79),B.jL)
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.Hr.gp(0)
a2.aq(d,t)}a1.restore()},
aC(d){return!1}}
C.aDK.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bjH.prototype={}
C.aDM.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bjI.prototype={}
C.aDN.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bjJ.prototype={}
C.a7X.prototype={
C(d){var w=null
return new A.a4(1/0,this.c,A.b5(w,w,w,new C.bmi(w),B.az),w)}}
C.bmi.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dAH[B.n.F(n,6)]
k=$.U()
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=l.gp(0)
d.aE(new A.a5(m,0,m+v,u),j)
if(B.n.F(n,3)===0){j=A.a([],o)
i=new A.aJ(k.r,B.ak,null,null,j)
k=m+r
j.push(new A.b_(k,f))
i.ac()
h=new A.aq(m+p,s)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
k=new A.aq(k,q)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.ac()
k=new A.aq(m+t,s)
j.push(k)
h=i.f
if(h!=null)k.aj(h)
i.ac()
k=new A.bz()
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aC(d){return!1}}
C.u1.prototype={
C(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.RK,w,w,w,new C.bVL(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fNH,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c6(w,D.a_c,A.q(w,A.bl(!0,A.w(A.a([D.cbn,new A.C(D.bMK,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bcK,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.J1.prototype={
C(d){var w=null,v=this.d,u=C.aTm(v),t=C.iCd(v),s=B.c.j(0.08),r=A.n(18),q=A.K(B.d0.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fQg,w,w,w)],x.p)
if(this.e)p.push(D.eLZ)
p.push(B.aj)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h6,w,w,w))
if(t!=null)p.push(new A.C(B.rm,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.BK,w,w,w),w))
return A.q(w,A.w(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.m),w,w,w,w,B.bD,w,w,w)}}
C.Xj.prototype={
R(){return new C.bp7(A.S(x.N,x.S),B.n.F(Date.now(),1e5))},
d3n(d){return this.f.$1(d)},
gea(){return this.d}}
C.bp7.prototype={
gUh(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a4()
this.QP()},
QP(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$QP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bWw(u.a.d),$async$QP)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dpw[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bWv(p,(o===$?u.d=q.c:o).a,r),$async$QP)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e8Q(u,n))
return A.h(null,v)}})
return A.i($async$QP,v)},
v2(d){return this.cu0(d)},
cu0(d){var w=0,v=A.j(x.H),u=this,t
var $async$v2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a7(t,!1).ca(A.e4(new C.e8R(d),!1,null,x.H)),$async$v2)
case 2:u.r=B.n.F(Date.now(),1e5)
if(u.c!=null)u.QP()
return A.h(null,v)}})
return A.i($async$v2,v)},
gb9R(){var w,v,u,t=C.NL(this.gUh()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a4i(d){return this.cBm(d)},
cBm(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a4i=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d3n(r),$async$a4i)
case 2:if(u.c!=null)u.l(new C.e8S(u,r))
return A.h(null,v)}})
return A.i($async$a4i,v)},
Q7(d){return this.bVb(d)},
bVb(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Q7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.huG(t.gUh())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Nt("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a7(s,!1).ca(A.e4(new C.e8O(q),!1,null,r)),$async$Q7)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bm(j,new C.e8P(p))
o=s.length
B.d.ck(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a4i(A.cH(s,0,A.dy(2,"count",x.S),r).de(0)),$async$Q7)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Q7,v)},
Zf(d,e){return this.bSK(0,e)},
bSK(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Zf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e8N(e),o,null,!0,!0,x.y),$async$Zf)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.huG(u.gUh()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a4i(o),$async$Zf)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Zf,v)},
aca(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e8K(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.Xi,p,p,p),B.aY],s)
q=A.n(10)
r.push(A.q(p,A.c(i,p,p,p,p,p,p,D.fOB,p,p,p),B.f,p,p,new A.p(B.i0,p,p,q,p,p,B.m),p,p,p,p,B.zO,p,p,p))
return A.aA(p,A.d3(A.q(p,A.w(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.aY,A.c(e,p,2,p,p,p,p,D.fWE,p,p,p),B.cR,A.c(f,p,3,B.a2,p,p,p,D.fPl,p,p,p)],s),B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a6(B.aw,B.aD,B.w,w,p,p),B.m),p,p,p,p,B.xf,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
YJ(d,e,f,g,h,i){return this.aca(d,e,f,g,h,i,null)},
C(a2){var w,v,u,t,s=this,r=null,q=C.NL(s.gUh()),p=s.gUh(),o=C.aTm(s.e),n=C.huG(p),m=s.a.e&&J.aa(p.z)<2,l=new C.e8T(s),k=C.hWq(p,1).length,j=C.hWB(p,1).length,i=C.hXw(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.K(B.d0.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.adN,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fU3,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.bd,A.E(A.w(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.XA,r,r,r)],a1),B.B,r,B.e,B.i,0,B.p),1),A.w(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qG,r,r,r),D.hiu],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.m),r,r,r,r,B.bD,r,r,r)
f=s.YJ("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aB,new C.e8U(s,p),l.$1("kahoot"))
h=s.YJ("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lZ,new C.e8V(s,p),l.$1("fire"))
a0=s.YJ("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.vf,new C.e8W(s,p),l.$1("catch"))
j=j!==0?new C.e8Z(s,p):r
j=s.aca("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hY,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e9_(s,p):r
i=s.aca("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lY,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.YJ("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.ey,new C.e90(s,p),l.$1("journey"))
k=k!==0?new C.e91(s,p):r
k=A.a([g,B.aN,D.hmF,B.N,A.lj(0.98,A.a([f,h,a0,j,i,e,s.aca("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ew,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.YJ("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.de,new C.e92(s,p),l.$1("school"))],a1),2,12,12,r,B.eb,!0),B.df,A.A(A.a([D.bOA,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fOG,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.N],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aQ(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.h2R,B.bd,new A.bu(1,B.ba,A.w(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hk,r,r,r),A.c(""+v.garP(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.BK,r,r,r)],a1),B.B,r,B.e,B.i,0,B.p),r)],a1)
if(v.garP(0).length>=2){f=D.m_.j(0.2)
t=new A.ax(D.m_,1,B.r,-1)
g.push(A.aA(r,A.q(r,A.V(B.fS,D.m_,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e93(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.d0.j(0.2)
t=new A.ax(B.d0,1,B.r,-1)
f=A.aA(r,A.q(r,A.V(B.jm,B.d0,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e94(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fs.j(0.2)
t=new A.ax(B.fs,1,B.r,-1)
B.d.u(g,A.a([B.b7,f,B.b7,A.aA(r,A.q(r,A.V(B.et,B.fs,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e95(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.c_(B.aJ,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bE(u,u,u,u),new A.bc(h,h,h,h),r,r,B.m),r,r,r,B.d3,B.bg,r,r,r))}if(s.a.e){j=m?new C.e8X(s):new C.e8Y(a2)
i=A.n(18)
h=A.K(m?B.d0:B.aT,B.r,2)
g=m?B.d0.j(0.12):B.dA
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.q(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.d0:B.aE,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.m),r,r,r,r,B.Px,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hnD)
k.push(B.aA)
k.push(D.aw_)
return new C.u1("Family Games \xb7 "+p.b,A.ck(k,r,r,D.bIO,r,r,B.ah,!1),B.fh,r)}}
C.a1c.prototype={
a9(){return"_KPhase."+this.b}}
C.anT.prototype={
R(){return new C.anU(D.b4n)},
gd8(){return this.e}}
C.anU.prototype={
t(){var w=this.at
if(w!=null)w.a2(0)
w=this.ax
if(w!=null)w.a2(0)
this.a3()},
fW(d){var w,v=this
v.l(new C.bW5(v))
w=v.at
if(w!=null)w.a2(0)
v.at=A.d5(B.fr,new C.bW6(v))},
aSJ(){var w=this,v=w.ax
if(v!=null)v.a2(0)
w.l(new C.bVW(w))
v=w.at
if(v!=null)v.a2(0)
w.at=A.d5(B.fq,new C.bVX(w))},
Mq(d){var w
if(this.d!==D.aff)return
w=this.at
if(w!=null)w.a2(0)
this.b9N(d)},
b9N(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.h.S(500+500*B.h.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bW1(u,v,d))
u=v.ax
if(u!=null)u.a2(0)
v.ax=A.cD(B.tG,v.giK(v))},
cQJ(d){var w=this
if(w.d!==D.YD)return
if(w.e+1>=w.a.w.length)w.a_2()
else{w.l(new C.bW2(w))
w.aSJ()}},
a_2(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$a_2=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a2(0)
p=u.x
t=u.a.w.length
s=C.bK9(p,u.w,t)
u.l(new C.bVZ(u,s))
w=2
return A.b(C.Cf(u.a.e,s),$async$a_2)
case 2:r=e
t=u.a
w=3
return A.b(C.Cg(t.e,t.f,t.r,u.f),$async$a_2)
case 3:q=e
if(u.c!=null)u.l(new C.bW_(u,r,q))
return A.h(null,v)}})
return A.i($async$a_2,v)},
cRz(){var w,v,u,t,s=this,r=s.a,q=new A.e7()
q.cW(r.w.length*31+B.a.ga_(r.f))
w=s.a.w.length*900
v=A.a([new A.aV("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.e_(r,q)
for(r=A.cH(r,0,A.dy(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bQ(r,r.gI(0),u.k("bQ<aj.E>")),u=u.k("aj.E");r.A();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.aV(t,B.h.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bW3())
return v},
C(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b4n===r){w=A.a([D.hiT,B.S,A.c(s,t,t,t,t,t,t,B.XI,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fOO,t,t,t))
w.push(B.aA)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.BP,B.K,t,t))
w.push(B.ee)
w.push(C.uS("Play",u.gf5(u),B.d0,B.fS,D.fN))
w=A.at(new A.C(B.eA,A.w(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b4o===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fXb,t,t,t),t,t,t)
break A}if(D.aff===r||D.YD===r){w=u.cwF()
break A}if(D.b4p===r){w=u.cgK()
break A}w=t}return new C.u1(s,w,B.fh,t)},
cwF(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.YD,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aZe,j,j,j),B.aY],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.M6,j,j,j))
g.push(B.ar)
f=A.n(14)
g.push(A.q(j,A.c(""+k.f,j,j,j,j,j,j,B.iY,j,j,j),B.f,j,j,new A.p(B.by,j,j,f,j,j,B.m),j,j,j,j,A0.Dl,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.n(6)
w=i?0:B.h.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.jK(B.by,j,k.as<5?B.fs:B.d0,9,j,w,j),B.ap)
w=A.n(22)
v=A.K(B.d0,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.w(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.m_:G.nS,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fNQ,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fZn,B.K,j,j)
w=A.E(A.q(j,A.at(u,j,j,j),B.f,j,j,new A.p(D.r5,j,v,w,j,j,B.m),j,j,j,j,B.f7,j,j,1/0),3)
v=A.a([],h)
for(u=k.giK(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bW0(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.n.F(t,4)
n=D.aGe[o]
m=new A.aQ(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aGy[o],j,j,j,j,j,j,D.fPQ,j,j,j),B.ar,new A.bu(1,B.ba,A.c(r[t],j,3,B.a2,j,j,j,D.fOL,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.auq)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c2T)
v.push(A.aA(j,new A.TQ(A.q(j,new A.c_(B.aJ,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bE(l,l,l,l),new A.bc(m,m,m,m),W.aEA,j,B.m),j,j,j,j,B.eG,j,j,j),p,B.b1,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.aj,f,B.ae,w,B.ae,A.E(A.lj(1.45,v,2,10,10,j,B.eb,!1),4)],h)
if(i)h.push(D.eLc)
return new A.C(B.a2v,A.w(h,B.l,j,B.e,B.i,0,B.p),j)},
cgK(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cRz(),m=x.p,l=A.a([D.bgL,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qG,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Xn,o,o,o),o,o,o),B.aN],m)
for(w=0;w<n.length;++w){v=n[w].c?B.d0.j(0.25):B.dA
u=new A.aQ(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.d0:B.by,1,B.r,-1)
q=A.c(w<3?D.drX[w]:""+(w+1),o,o,o,o,o,o,B.mh,o,o,o)
s=s?B.u:B.O
l.push(A.q(o,new A.c_(B.aJ,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a4(34,o,q,o),new A.bu(1,B.ba,A.c(t.a,o,o,o,o,o,o,new A.H(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iY,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bE(r,r,r,r),new A.bc(u,u,u,u),o,o,B.m),o,o,o,B.cB,B.f3,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.J1(m,v,p.CW,o))
l.push(B.aN)
l.push(A.at(C.uS("Back to the games",new C.bVY(p),B.d0,B.ko,D.fN),o,o,o))
return A.ck(l,o,o,B.f7,o,o,B.ah,!1)}}
C.UZ.prototype={
R(){return new C.anQ(A.S(x.de,x.er))}}
C.anQ.prototype={
gE7(){var w,v=this,u=v.d
if(u===$){w=C.hAM(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gm9(d){var w,v,u=this,t=u.e
if(t===$){w=u.gE7().b
v=$.ay()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bd(w,B.bb,B.aP),v)}return t},
ck_(d){return this.f.c0(0,d,new C.bVw(d))},
Z(){this.a4()
var w=this.gE7().c
if(w.length===0)w.push(C.hlS(null,0,20,""))},
t(){var w,v,u=this.gm9(0)
u.V$=$.ay()
u.W$=0
for(u=this.f,u=new A.ds(u,u.r,u.e);u.A();)for(w=J.aM(u.d);w.A();){v=w.gO(w)
v.V$=$.ay()
v.W$=0}this.a3()},
cQz(){if(this.gE7().c.length>=12)return
this.l(new C.bVx(this))},
jE(d){var w,v,u=this,t=u.gE7()
t.b=B.a.i(u.gm9(0).a.a)
w=t.garP(0)
if(t.b.length===0||w.length<2){u.c.M(x.q).f.T(D.fGL)
return}v=t.c
B.d.a7(v)
B.d.u(v,w)
v=u.c
v.toString
A.a7(v,!1).N(t)},
C(d){var w,v,u=this,t=null,s=new C.bVH(),r=x.p,q=A.a([A.bK(!1,D.h80,t,t,!0,t,t,t,u.gbtW(u),t,t)],r),p=A.a([D.hne,B.ae,A.aO(t,B.M,!1,t,!0,B.t,t,A.aP(),u.gm9(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.am,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ad,t,t,t,t,t,t,t,t,t,t,t,B.h6,!0,B.a8,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gE7().c.length,w<v;++w)B.d.u(p,A.a([new A.fo(new C.bVG(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uS("\uff0b Add a question",u.gcQy(),B.aT,t,B.c),t,t,t))
return new C.u1("Make your game",A.ck(p,t,t,D.bIL,t,t,B.ah,!1),q,t)}}
C.at2.prototype={
R(){return new C.aHl(A.a([],x._))},
bx(){return this.r.$0()},
qJ(){return this.w.$0()},
gea(){return this.c}}
C.aHl.prototype={
Z(){var w,v
this.a4()
this.x5()
w=this.a
v=w.c
if(v.length!==0)C.a9H(v,w.e,w.d.w)},
wU(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hxG(r,t.e,!1,s.w,new C.eav(u),null,s),$async$wU)
case 2:w=3
return A.b(u.x5(),$async$wU)
case 3:return A.h(null,v)}})
return A.i($async$wU,v)},
a2p(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2p=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hxG(r,t.e,!0,s.w,new C.eau(u),null,s),$async$a2p)
case 2:w=3
return A.b(u.x5(),$async$a2p)
case 3:return A.h(null,v)}})
return A.i($async$a2p,v)},
x5(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$x5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BL(q.a.c),$async$x5)
case 7:p=e
if(q.c!=null)n=q.e||J.cM(p)
else n=!1
if(n)q.l(new C.eax(q,p))
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
return A.b(C.HT(q.a.c).d9(0,B.ri),$async$x5)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.eay(q,o))
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
if(q.c!=null&&q.e)q.l(new C.eaz(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$x5,v)},
Qt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Qt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.M(s).f.T(D.fGl)
w=3
return A.b(C.HT(t.a.c),$async$Qt)
case 3:r=e
w=4
return A.b(C.hb7(t.a.c,r),$async$Qt)
case 4:q=e
w=5
return A.b(C.HT(t.a.c),$async$Qt)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.eat(t,p))
o=t.c.M(s).f
s=A.c(q?"Family trees synced \u2014 "+J.aa(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dT:B.d9,null,B.t,null,s,null,B.lE,null,null,null,null,null,null,null,null,null,null))
t.a.qJ()
case 1:return A.h(u,v)}})
return A.i($async$Qt,v)},
JB(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iLb(l),$async$JB)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.ic2(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b42(q,p.e,l,"Each family tree costs $"+B.h.a1(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$JB)
case 4:if(!e||t.c==null){w=1
break}l=B.n.v(1000*Date.now())
p=C.hSo(r)
o=Date.now()
n=t.a.c
m=new C.li(l,r.toUpperCase(),p,!0,B.M,D.EH,new A.W(o,0,!1),0,n,D.vu,B.co)
w=5
return A.b(C.a5k(n,m),$async$JB)
case 5:w=6
return A.b(t.x5(),$async$JB)
case 6:t.a.bx()
t.a.qJ()
if(t.c==null){w=1
break}t.G1(m)
case 1:return A.h(u,v)}})
return A.i($async$JB,v)},
G1(d){return this.cp7(d)},
cp7(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$G1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.BL(u.a.c),$async$G1)
case 2:n=l.nU(k.dO(f,new C.eaw(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hf(m,new C.asX(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$G1)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a5k(u.a.c,o),$async$G1)
case 6:case 5:w=7
return A.b(u.x5(),$async$G1)
case 7:u.a.qJ()
return A.h(null,v)}})
return A.i($async$G1,v)},
C(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=new C.uD(p)
if(r.e)return A.at(A.nq(q,p?B.bv:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.ci(r.d)){w=p?B.eo:B.c
v=A.n(15)
u=A.aF(!1,B.a3,!0,q,A.aN(!1,q,!0,A.q(q,D.c0m,B.f,q,q,new A.p(B.aZ.j(0.12),q,A.K(B.aZ,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cA,!0,q,q,q,q,q,q,q,q,q,q,q,r.gco7(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GV(A.q(q,A.w(A.a([u,B.aN,t,B.N,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.ee,A.bI(D.hqA,q,r.gaW3(),A.bp(B.bU,q,q,q,q,q,B.a2W,q,new A.bb(A.n(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.m),q,q,q,q,D.bLs,q,q,1/0),15,B.ag,1.05,D.af2,q)}w=J.aa(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aY],v)
if(J.cM(r.d))w.push(A.aI(q,q,q,q,A.V(B.Aw,B.aZ,q,q,q,q),q,q,q,new C.eaB(r),q,q,q,q,"Sync family trees with database",q))
if(J.cM(r.d))w.push(A.aI(q,q,q,q,A.V(B.As,B.aZ,q,q,q,q),q,q,q,r.gajf(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dg(E.avn,q,D.h5g,r.gaW3(),A.bp(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.aa(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ae)
u.push(new C.GV(r.cME(J.t(r.d,s),o),14,B.ag,1,D.af2,q))
B.d.u(w,u)}return A.w(A.a([p,B.aA,A.w(w,B.l,q,B.e,B.i,0,B.p)],v),B.B,q,B.e,B.i,0,B.p)},
cME(d,e){var w=null,v=e.a,u=v?B.eo:B.c,t=A.n(14),s=A.K((v?B.er:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.v.j(v?0.35:0.08),B.eJ,10)],x.V),q=A.n(14),p=A.q(w,D.c_q,B.f,w,w,new A.p(B.aZ.j(0.15),w,w,A.n(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gasP(),m=d.d?"":" \xb7 Public",l=d.y===D.le?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bs,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.i,0,B.p),1)
return A.q(w,A.aF(!1,B.a3,!0,w,A.aN(!1,q,!0,new A.C(B.bD,A.A(A.a([p,B.bd,l,A.V(B.Qp,v?B.bv:B.bl,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eaA(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.p(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.asX.prototype={
R(){return new C.aHi(A.a([],x._),A.aR(x.N),A.bcR())},
bx(){return this.r.$0()},
gea(){return this.c}}
C.aHi.prototype={
Z(){var w,v,u=this
u.a4()
u.d=u.a.w
u.afH()
w=u.a
v=w.c
if(v.length!==0)C.a9H(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ay()
w.W$=0
this.a3()},
a5v(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a5v=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.zd("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e9W(r),s,null,!0,!0,x.y),$async$a5v)
case 3:if(e!==!0||t.c==null){w=1
break}t.Lj()
t.l(new C.e9X(t,r))
w=4
return A.b(t.uZ(),$async$a5v)
case 4:t.a.bx()
t.zd(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a5v,v)},
cBZ(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.U$.push(new C.e9R(w,f,d,e))},
aYq(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dB()
u.ek(w,v,0,1)
u.kh(q,q,1,1)
this.w.sp(0,u)},
bgv(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eV(new Float64Array(16))
q.ef(r)
w=q.Ec()
v=B.h.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dB()
t.ek(r,u,0,1)
t.kh(v,v,1,1)
t.ek(-r,-u,0,1)
t.j6(0,q)
s.sp(0,t)},
afH(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$afH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.BL(u.a.c),$async$afH)
case 2:t=s.nU(r.dO(e,new C.e9i(u)))
if(t!=null&&u.c!=null)u.l(new C.e9j(u,t))
return A.h(null,v)}})
return A.i($async$afH,v)},
zd(d){var w=null,v=this.c
if(v==null)return
v.M(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
wU(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.hxG(o,t,!1,r,new C.e9A(u),q.a,s),$async$wU)
case 2:n=A
m=J
w=3
return A.b(C.HT(u.a.c),$async$wU)
case 3:p=n.nU(m.dO(e,new C.e9B(u)))
if(p!=null&&u.c!=null)u.l(new C.e9C(u,p))
return A.h(null,v)}})
return A.i($async$wU,v)},
Lj(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cP(w,0)},
uZ(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a5k(t,s),$async$uZ)
case 2:return A.h(null,v)}})
return A.i($async$uZ,v)},
a3Z(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a3Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uT(q,t.a.c)){t.zd("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iMv(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a3Z)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Lj()
t.l(new C.e9Q(t,r))
w=4
return A.b(t.uZ(),$async$a3Z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3Z,v)},
b6r(){var w=this.c
w.toString
A.a7(w,!1).ca(A.e4(new C.e9x(this),!1,null,x.H))},
a2F(){return this.cp9()},
cp9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a2F=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uT(m,t.a.c)){t.zd("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e9N(),A.T(s).k("X<1>")).gI(0)
s=A.eB([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("cl.E"))
B.d.fj(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e9O(n,t,new C.uD(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a2F)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Lj()
t.l(new C.e9P(t,o))
w=6
return A.b(t.uZ(),$async$a2F)
case 6:case 5:if(o.a&&t.c!=null)t.b6r()
case 1:return A.h(u,v)}})
return A.i($async$a2F,v)},
Y1(d){return this.bHx(d)},
bHx(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uT(r,t.a.c)){t.zd("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e96(t,d),r,null,!0,!0,x.P),$async$Y1)
case 3:s=f
if(s==null){w=1
break}t.Lj()
t.l(new C.e97(t,s))
w=4
return A.b(t.uZ(),$async$Y1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y1,v)},
a5Q(d){return this.cOW(d)},
cOW(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a5Q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e9Z(u,d,new C.uD(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a5Q)
case 2:return A.h(null,v)}})
return A.i($async$a5Q,v)},
clc(d){var w=this,v=w.d
v===$&&A.d()
if(C.uT(v,w.a.c))w.Q8(d)
else w.a5Q(d)},
alL(d,e){return this.cG3(d,e)},
cG3(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$alL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e9T(new C.uD(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$alL)
case 3:case 1:return A.h(u,v)}})
return A.i($async$alL,v)},
JG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$JG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.le?3:5
break
case 3:w=6
return A.b(C.hk2(t.a.c),$async$JG)
case 6:s=e
o=t.a
r=C.hFE(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.alL(!s,!r),$async$JG)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aTs(o,t.a.c)){t.zd("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lI(o,"Cancel","Remove",q.y===D.le?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$JG)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aTq(t.a.c,t.d.a),$async$JG)
case 11:t.a.bx()
o=t.c
if(o==null){w=1
break}A.j8(o,null)
case 1:return A.h(u,v)}})
return A.i($async$JG,v)},
ad6(d){return this.bT0(d)},
bT0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ad6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uT(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e98(p))){o=A.T(s)
p.a=A.nU(new A.cQ(new A.X(s,new C.e99(d),o.k("X<1>")),new C.e9a(),o.k("cQ<1,o>")))}q=p.a
if(q==null)q=d.d
t.Lj()
t.l(new C.e9b(t,s,d,q))
w=3
return A.b(t.uZ(),$async$ad6)
case 3:t.zd(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ad6,v)},
Q8(d){return this.bVf(d)},
bVf(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Q8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uT(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a5Q(d),$async$Q8)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e9f(t,d),r,null,!0,!0,x.P),$async$Q8)
case 6:s=f
if(s==null){w=1
break}t.Lj()
t.l(new C.e9g(t,s))
w=7
return A.b(t.uZ(),$async$Q8)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Q8,v)},
cN6(){var w=this,v=w.d
v===$&&A.d()
if(!C.uT(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e9Y(w))
w.uZ()},
a07(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a07=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aTs(n,t.a.c)){t.zd("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.ay()
r=new A.au(B.ay,s)
q=t.d.e
p=A.bt(new A.O(q,t.gcjG(),A.T(q).k("O<1,o>")).c2(0,new C.e9s()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e9t(t,new C.uD(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a07)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.Lj()
t.l(new C.e9u(t,p))
w=4
return A.b(t.uZ(),$async$a07)
case 4:t.zd("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a07,v)},
cjH(d){return B.a.i(d.toLowerCase())},
cnP(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uT(v,w)
t=r.d
s=C.iAH(t)
C.iLf(q,t.b,u,C.iAG(r.d),s,v.a,w)},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uD(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.ea5(),A.T(l).k("X<1>")).gI(0)
l=n?B.c8:B.hX
v=A.V(B.a45,n?B.bv:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.C(Z.Dm,A.aN(!1,o,!0,new A.C(B.hD,A.A(A.a([v,B.b7,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.ea6(p,d),o,o,o,o,o,o,o),o),new A.C(B.ob,p.c5w(m),o)],u)
if(p.d.y===D.le){t=B.ud.j(0.15)
s=A.n(12)
r=A.K(B.ud.j(0.45),B.r,1)
q=C.HR(p.d,p.a.c)
v.push(new A.C(B.zH,A.q(o,A.A(A.a([D.c54,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.m),o,o,o,o,B.hq,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,15,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],u)
if(C.uT(p.d,p.a.c)&&p.e.length!==0)u.push(new C.H5("Undo",B.qd,p.gcN5(),m,o,o))
u.push(new C.H5("Family Book",E.as3,p.gcnO(),m,B.v3,o))
u.push(new C.H5("Family games",B.ok,p.gco_(),m,B.aB,o))
if(C.uT(p.d,p.a.c))u.push(new C.H5("Display settings",B.Eb,p.gcp8(),m,B.b9,o))
u.push(new C.H5("Sync",B.As,p.gajf(),m,o,o))
t=p.d
if(t.y===D.le||C.aTs(t,p.a.c)){t=p.d.y===D.le?"Remove shared tree":"Delete tree"
u.push(new C.H5(t,B.et,p.gbTa(),m,B.fs,o))}if(C.uT(p.d,p.a.c))u.push(new C.H5("Add member",B.xB,new C.ea7(p),m,B.bU,o))
v.push(new A.C(S.aoS,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gasP()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cg(new C.ea8(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.V(n?B.a49:B.Qq,o,o,o,o,o)
v.push(A.at(A.hz(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.ea9(p),o),o,o,o))}return A.c6(o,l,A.bl(!0,A.w(v,B.B,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c5w(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.h9.j(0.35),B.dv,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.V(B.Aj,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aF(!1,B.a3,!0,m,A.aN(!1,m,!0,A.q(m,D.c8t,B.f,m,m,new A.p(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cA,!0,m,m,m,m,m,m,m,m,m,m,m,n.gajf(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fQX,m,m,m)
r=r.gasP()
p=n.d.gasP()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.w(A.a([q,B.bs,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.i,0,B.p),1)],o)
if(C.uT(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c5j,m,m,m,n.gcze(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.j8:B.nt
r=r?"Private":"Public"
r=A.E(n.azp(q,"Privacy",r,n.a.d.w?n.gcLW():m),1)
q=A.E(n.azp(B.xG,"Tree code",n.d.c,new C.e9h(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ae,A.A(A.a([r,B.aa,q,B.aa,A.E(n.azp(D.bWB,"Collaborators",p,n.gcaz()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.le){s=B.c.j(0.15)
B.d.u(p,A.a([B.N,A.aF(!1,B.a3,!0,A.n(999),A.aN(!1,A.n(999),!0,new A.C(B.h0,A.A(A.a([A.V(B.ol,B.c,m,m,m,14),B.dU,A.c("View only",m,m,m,m,m,m,B.adq,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.q(m,A.bv(u,new A.am(B.a0,m,B.ac,B.t,A.a([t,new A.C(B.HZ,A.w(p,B.B,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.p(m,m,m,w,v,D.ccQ,B.m),m,m,m,m,m,m,m,1/0)},
azp(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aF(!1,B.a3,!0,A.n(14),A.aN(!1,A.n(14),!0,new A.C(K.aqe,A.w(A.a([A.V(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rX,A.c(f,w,1,B.a2,w,w,w,Aq.yh,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bjL.prototype={
C(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gar(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b5(t,t,t,new C.bjO(s,t),new A.av(w,v))],x.p)
r=r.gdV(r)
B.d.u(u,r.dS(r,new C.dmY(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dmZ(this),A.T(r).k("O<1,x>")))
return new A.C(B.vq,new A.a4(w,v,new A.am(B.a0,t,B.ac,B.f,u,t),t),t)}}
C.Lv.prototype={}
C.H9.prototype={}
C.bjN.prototype={
gbp8(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aN8.prototype={}
C.bjO.prototype={
bUR(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.U()
v=A.M()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bH
d.ah(new A.m(n,w),new A.m(m,w),v)
u=(n+m)/2
t=new A.aJ(q.r,B.ak,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b_(u,q))
s=w-1.1
r=w-8.8
t.E(new A.i6(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.i6(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bz())
q=A.M()
q.r=B.c.gp(0)
d.P(new A.m(u,w),9,q)
q=A.M()
q.r=B.bE.gp(0)
d.af(t,q)},
bUO(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dni())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aR(a0,new C.dnj(f))
t=new A.O(a0,new C.dnk(f),A.T(a0).k("O<1,G>")).c2(0,new C.dnl()).cH(0,1/0,B.pH)
w=f.a
d.ah(f,new A.m(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.m(o,v),p,e)
continue}l=J.md(n)
k=Math.min(10,m/2)
m=$.U()
j=A.a([],r)
i=new A.aJ(m.r,B.ak,null,null,j)
j.push(new A.b_(w,v-k))
i.ac()
m=l*k
h=new A.cn(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
m=new A.cn(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.aj(m)
i.ac()
d.af(i,e)}},
a5(d,e){var w,v,u,t,s,r
$.U()
w=A.M()
w.r=B.bU.j(0.75).gp(0)
w.c=2.2
w.b=B.af
w.d=B.bH
w.e=B.dQ
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bUO(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bUR(d,w,r.a,r.b)}},
aC(d){return d.b!==this.b}}
C.bnD.prototype={
gcgM(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aGR
switch(w.c.a){case 0:return D.d6O
case 1:return D.dkV
case 2:return D.dF4}},
gcgP(){var w=this.c,v=C.hRB(w.w),u=C.hRB(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
C(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=t.gcgM(),p=t.c,o=A.bIJ(p.f),n=t.gcgP(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cO,10)],m),k=r?B.ax:B.c,j=A.K(r?B.ax:B.c,B.r,2)
if(o!=null)w=A.u5(B.z,s,B.cr,B.c1,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a6(B.a5,B.a9,B.w,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.ic(w,B.ap),B.f,s,s,new A.p(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a6(B.aw,B.aD,B.w,q,s,s),B.a6),s,56,s,s,B.DB,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.K(r?B.ax:B.c,B.r,1.5)
l.push(A.ao(s,A.q(s,A.c(""+k,s,s,s,s,s,s,D.h0W,s,s,s),B.f,s,s,new A.p(B.cj,s,w,j,s,s,B.m),s,s,s,s,D.bNn,s,s,s),s,s,s,-6,-4,s))}k=r?B.cx:B.c
j=A.n(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.v.j(r?0.3:0.06),B.dP,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cx,s,s,s,s,s,s,s,s,u,s,s,B.C,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a4(84,112,A.w(A.a([new A.am(B.a0,s,B.ac,B.f,l,s),B.at,A.q(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.baU,new A.p(k,s,w,j,m,s,B.m),s,s,s,s,D.bNy,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.biO.prototype={
a5(d,e){var w,v,u,t,s
$.U()
w=A.M()
v=this.b
u=v?B.c:D.bo8
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.P(new A.m(s,t),1,w)},
aC(d){return d.b!==this.b}}
C.bBT.prototype={
C(d){var w=this,v=null,u=new C.fyP(w),t=w.c,s=t?B.cx:B.c,r=A.n(12),q=u.$3(B.ii,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.by:B.fA,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xD,"Zoom out",w.e)
return A.aF(!1,B.a3,!0,r,A.w(A.a([q,p,o,A.q(v,v,B.f,t?B.by:B.fA,v,v,v,1,v,v,v,v,v,22),u.$3(B.asL,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dH,v,v,v,B.ai)}}
C.br1.prototype={
C(d){var w=this,v=null,u=B.bU.j(0.15),t=A.K(B.bU,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.q(v,A.w(A.a([A.V(s?B.a49:B.Qq,B.bU,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fXR,v,v,v)],r),B.l,v,B.bc,B.i,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.aj,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fVC,B.K,v,v)],r)
if(s){t=A.a([B.aj],r)
s=w.d
B.d.u(t,new A.O(s,new C.f8j(w),A.T(s).k("O<1,x>")))
B.d.u(u,t)}return new A.a4(84,v,A.w(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a1q.prototype={
R(){return new C.aFJ()},
bx(){return this.Q.$0()},
gea(){return this.w}}
C.aFJ.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ay()
r.d!==$&&A.aT()
r.d=new A.au(new A.bd(t,B.bb,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aT()
r.e=new A.au(new A.bd(t,B.bb,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aT()
r.f=new A.au(new A.bd(t,B.bb,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aT()
r.r=new A.au(new A.bd(t,B.bb,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aT()
r.w=new A.au(new A.bd(t,B.bb,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aT()
r.x=new A.au(new A.bd(t,B.bb,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zV:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.iCe(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.ay()
u.W$=0
u=v.e
u===$&&A.d()
u.V$=w
u.W$=0
u=v.f
u===$&&A.d()
u.V$=w
u.W$=0
u=v.r
u===$&&A.d()
u.V$=w
u.W$=0
u=v.w
u===$&&A.d()
u.V$=w
u.W$=0
u=v.x
u===$&&A.d()
u.V$=w
u.W$=0
v.a3()},
RJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$RJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hFE(p.y,p.w)
w=3
return A.b(A.m0(t.a.w,B.KF),$async$RJ)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b42(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$RJ)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.ic3(p.y,p.w)
t.a.bx()
case 5:w=7
return A.b(A.Ea(78,800),$async$RJ)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dDH(t,q))
case 1:return A.h(u,v)}})
return A.i($async$RJ,v)},
cgO(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.id(B.n.v(1000*Date.now()),w,D.zV,null,null,null,"","","","","",1,!1,0)
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
s=v.aIT(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).N(s)},
acI(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dDG(r),s,null,!0,!0,x.y),$async$acI)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$acI,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.I,i=new C.uD(j),h=l.a.e,g=A.T(h).k("X<1>"),f=A.B(new A.X(h,new C.dDQ(l),g),g.k("L.E"))
h=j?B.eo:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bLN,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.fQ(A.aN(!1,k,!0,new A.C(B.m7,A.V(B.et,B.pU,k,k,k,17),k),B.cA,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbPG(),k,k,k,k,k,k,k),k,"Delete member",k,k,k),k,k,k,0,k,k))
u=j?B.ke:B.iM
t=A.bIJ(l.as)
if(l.as==null)s=A.V(B.q4,j?B.bv:B.bl,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.am(B.a0,k,B.ac,B.t,A.a([A.hq(u,t,s,k,42),A.ao(0,A.hq(B.bU,k,D.bZs,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcgL(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aFL(t,"Full name",B.mD,1,1,i,B.mU)
u=l.y
u===$&&A.d()
u=A.w(A.a([t,B.S,new C.bnB(i,u,new C.dDR(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bF8],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dDS(),A.T(o).k("O<1,eS<o?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bFa],q)
B.d.u(q,new A.O(f,new C.dDU(),A.T(f).k("O<1,eS<o?>>")))
o=A.w(A.a([t,B.aj,new C.afQ(i,r,"Who is their parent?",p,new C.dDV(l),k,o),B.aA,n,B.aj,new C.afQ(i,m,"Who is their spouse / partner?",q,new C.dDW(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.d()
q=C.aFL(q,"Birth date",D.arT,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aFL(m,"Birth place",B.a4q,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aFL(n,"Date of death (if deceased)",D.au3,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aFL(p,"Occupation",A8.Ry,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.am(B.z,k,B.ac,B.t,w,k),B.aA,s,B.bx,new C.afR(i,"Identity",u,k),B.ae,new C.afR(i,"Family links",o,k),B.ae,new C.afR(i,"Life details",A.w(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aFL(r,"Notes",B.lg,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.ae,new C.aFK(i,"Child order",l.cpp(l.at),new C.dDX(l),new C.dDY(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.huu(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dDZ(l):k
B.d.u(r,A.a([B.S,new C.aFK(i,"Visible in tree",u,w,new C.dE_(l),k)],v))}r.push(B.S)
w=j?B.ke:B.iM
u=A.n(14)
t=A.K(j?B.er:B.bP,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.ji(k,B.bU,k,B.ag,k,new C.dE0(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.m),k,k,k,k,B.aou,k,k,k))
r.push(B.bx)
w=j?B.aS:B.ax
j=j?B.er:B.bP
r.push(A.A(A.a([A.E(A.dV(B.oB,new C.dDT(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.bb(A.n(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bI(D.fxS,k,l.gcgN(),A.bp(B.aZ,k,k,0,B.c,k,B.cq,k,new A.bb(A.n(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.at)
return A.em(B.fh,k,B.ag,h,new A.a4(420,k,A.cb(A.w(r,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.apr,k,B.aoG,new A.bb(g,B.a1),k,k)},
cpp(d){var w=B.n.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.n.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.afR.prototype={
C(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ke:B.iM,s=A.n(16)
return A.w(A.a([new A.C(B.a3_,u,w),A.q(w,this.e,B.f,w,w,new A.p(t,w,A.K(v?B.er:B.bP,B.r,1),s,w,w,B.m),w,w,w,w,B.bg,w,w,1/0)],x.p),B.B,w,B.e,B.i,0,B.p)}}
C.bnC.prototype={
C(d){var w,v=this,u=null,t=v.c.a,s=t?B.eo:B.c,r=A.n(12),q=A.K((t?B.er:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aO(u,B.M,!1,u,!0,B.t,u,A.aP(),v.d,u,u,u,u,u,2,A.bB(u,B.f_,u,B.tN,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cF,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.am,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ad,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a8,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.afQ.prototype={
C(d){var w=this,v=null,u=w.c.a,t=u?B.eo:B.c,s=A.n(12),r=A.K((u?B.er:B.bP).j(0.85),B.r,1),q=A.V(B.tW,u?B.bv:B.bl,v,v,v,v),p=A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.eo:B.c
return A.q(v,new A.EY(A.a6S(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cF,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.m),v,v,v,v,B.lc,v,v,v)}}
C.bnB.prototype={
C(d){var w=new C.dE1(this)
return A.A(A.a([w.$3(D.xp,"Male",B.Rg),B.aa,w.$3(D.p3,"Female",B.R0),B.aa,w.$3(D.zV,"Other",B.oi)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aFK.prototype={
C(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.ke:B.iM,r=A.n(14),q=A.K(t?B.er:B.bP,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,13,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.w(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.i,0,B.p),1),new C.aMa(u,B.xD,w.f,v),B.b7,new C.aMa(u,B.ii,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.m),v,v,v,v,B.es,v,v,v)}}
C.aMa.prototype={
C(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.eo:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bU
else t=(s.c.a?B.bv:B.bl).j(0.4)
return A.aF(!1,B.a3,!0,v,A.aN(!1,u,!0,new A.a4(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.afS.prototype={
bZ3(d){switch(d.a){case 0:return B.bU
case 1:return B.bE
case 2:return B.cD}},
bZ4(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b1Y(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Bz(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.eo:B.c
u=A.n(12)
t=A.K((w?B.er:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.V(f,B.bU,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bl,p,p,p,p,p,p,p,p,9,p,p,B.C,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.w(A.a([q,B.at,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.ax,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.i,0,B.p),1))
return A.q(p,A.A(r,B.B,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.m),p,p,p,B.cB,B.zE,p,p,1/0)},
ahu(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ke:B.iM,s=A.n(16),r=A.K(v?B.er:B.bP,B.r,1)
return A.w(A.a([new A.C(B.a3_,u,w),A.q(w,A.w(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.m),w,w,w,w,B.bS,w,w,1/0)],x.p),B.B,w,B.e,B.i,0,B.p)},
C(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hXj(r,q),o=q.c,n=t.bZ3(o),m=A.bIJ(q.f),l=t.e.a,k=l?B.eo:B.c,j=A.n(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.le?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.q(s,A.hq(u,m,m==null?A.V(B.q4,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a6),s,s,s,s,B.eH,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.q(s,A.c(t.bZ4(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.m),s,s,s,s,B.lG,s,s,s),s,s,s)
u=x.p
i=A.a([t.Bz("Full name",i,B.mD)],u)
if(p>0)i.push(t.Bz("Child order","#"+p,B.R6))
r=A.a([h,B.at,r,B.aN,l,B.S,v,B.bx,t.ahu("Identity",i),B.ae,t.ahu("Life details",A.a([t.Bz("Birth date",q.w,D.arT),t.Bz("Birth place",q.x,B.a4q),t.Bz("Date of death",q.y,D.au3),t.Bz("Occupation",q.z,A8.Ry)],u)),B.ae,t.ahu("Family links",A.a([t.Bz("1. Parent",t.b1Y(q.d),B.Io),t.Bz("2. Spouse",t.b1Y(q.e),B.IF)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.ae,t.ahu("Notes",A.a([t.Bz("Notes",q,B.lg)],u))],u))
r.push(B.bx)
r.push(A.bI(B.Mg,s,new C.dEb(d),A.bp(B.aZ,s,s,s,s,s,B.cq,s,new A.bb(A.n(14),B.a1),s,s,s)))
return A.eE(s,k,new A.cO(B.mo,A.cb(A.w(r,B.al,s,B.e,B.P,0,B.p),B.t,s,B.y,s,s,B.xk,s,s,B.ah),s),s,s,s,B.I1,s,B.db,s,new A.bb(j,B.a1),s)}}
C.H5.prototype={
C(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.tQ,A.fQ(A.aF(!1,B.a3,!0,A.n(8),A.aN(!1,A.n(8),!0,new A.a4(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u,u),u)}}
C.at_.prototype={
fa(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.T(w).k("O<1,a9<o,@>>")
w=A.B(new A.O(w,new C.cj9(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j5(w,new C.cja(),t,x.fO))
return s}}
C.at0.prototype={
R(){return new C.aHk(A.a([],x.bF))},
gd8(){return this.c}}
C.aHk.prototype={
Z(){this.a4()
this.Lq()},
Lq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Lq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cjd(t.a.c),$async$Lq)
case 3:r=e
w=4
return A.b(C.BL(t.a.c),$async$Lq)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rK(q,new C.eai(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.eaj(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Lq,v)},
zQ(d){var w=null,v=this.c
if(v==null)return
v.M(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
Mh(d,e){return this.cPF(d,e)},
cPF(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Mh=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.ean(q,e))
t=3
w=6
return A.b(d.$0(),$async$Mh)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.eao(q))
$.eY.mY()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Mh,v)},
ZQ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pX(r,s.c,s.e),$async$ZQ)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Mh(new C.eaf(t),"Preparing download\u2026"),$async$ZQ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZQ,v)},
ZU(d){return this.bWU(d)},
bWU(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pX(r,s.c,s.e),$async$ZU)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Mh(new C.eag(t,d),"Preparing file\u2026"),$async$ZU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZU,v)},
ajC(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ajC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.yb.cr().NX(B.Up,B.vv,!0),$async$ajC)
case 7:r=e
o=r
q=o==null?null:J.ey(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
o=A.k1(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ad(m)
$.an.$1("[family tree sync pick] file_picker: "+A.v(p))
w=6
break
case 3:w=2
break
case 6:u=A.I_()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajC,v)},
a_x(d){return this.c6r(d)},
c6r(d){var w=0,v=A.j(x.H),u=this
var $async$a_x=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Mh(new C.eah(u,d),"Restoring family trees\u2026"),$async$a_x)
case 2:return A.h(null,v)}})
return A.i($async$a_x,v)},
a_w(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_w=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ajC(),$async$a_w)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.a_x(s),$async$a_w)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_w,v)},
a4T(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pX(r,s.c,s.e),$async$a4T)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Mh(new C.eam(t),"Creating QR code\u2026"),$async$a4T)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a4T,v)},
a4s(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.E8()){t.zQ("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).ca(A.e4(new C.eak(),!0,null,x.N)),$async$a4s)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.a_x(r),$async$a4s)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a4s,v)},
C(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.I,n=o?B.CK:B.hX,m=o?D.amX:B.aS,l=o?B.aM:B.bP,k=o?B.aS:B.ax,j=new C.dnm(n,m,l,k,o?B.bQ:B.bl)
l=A.aI(p,p,p,p,A.V(B.eI,k,p,p,p,20),p,p,p,new C.eaq(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dmV(!0,B.jI,B.aH,B.aH,q.r?p:q.gcFS(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcBT()
t.push(A.E(C.dmV(!s,B.jJ,B.b2,B.bk,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dmV(!1,B.hP,B.aZ,B.bU,q.r?p:q.gbWN(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dmV(!1,Q.At,B.as,B.aQ,q.r?p:q.gc6o(),j,s,"Upload backup file"),1))
l=A.a([new C.bjM(v,l,p),B.lq,new C.af5(j,"QR restore",p),B.S,t,B.df,new C.af5(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.aa(q.d)>1&&q.a.f==null){v=A.a([B.lq,new C.af5(j,"One tree",p),B.S],u)
B.d.u(v,J.b8(q.d,new C.ear(q,j),x.l))
B.d.u(l,v)}l=A.a([A.ck(l,p,p,Au.a2S,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.K(B.aZ.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.v.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bl(!0,A.q(p,A.A(A.a([Av.aXy,B.bd,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.m),p,p,p,p,A1.Ds,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.am(B.a0,p,B.ac,B.t,l,p),p,!1,!1,p,p)}}
C.dnm.prototype={}
C.bjM.prototype={
C(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aZ.j(0.32),B.ky,28)],x.V)
t=A.ao(p,A.V(B.vO,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.q(p,new A.am(B.a0,p,B.ac,B.t,A.a([t,new A.C(B.ad,A.A(A.a([A.q(p,D.c7Y,B.f,p,p,new A.p(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pu,A.E(A.w(A.a([D.h6j,B.N,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.i,0,B.p),1)],q),B.B,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.cge,B.m),p,p,p,p,p,p,p,p)}}
C.af5.prototype={
C(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.p(B.aZ,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bjK.prototype={
C(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cO,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aF(!1,B.a3,!0,q,A.aN(!1,o,!0,A.eK(A.d3(new A.C(E.a2s,A.w(A.a([A.q(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.m),q,q,q,q,B.tR,q,q,q),B.ae,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bs,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cF,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.i,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bjP.prototype={
C(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aZ.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aF(!1,B.a3,!0,v,A.aN(!1,u,!0,A.eK(new A.C(B.f3,A.A(A.a([A.q(v,D.c77,B.f,v,v,new A.p(q,v,A.K(B.aZ.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tR,v,v,v),B.bd,A.E(A.w(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.i,0,B.p),1),A.V(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a1K.prototype={
R(){return new C.aHj()},
gd8(){return this.c}}
C.aHj.prototype={
Z(){this.a4()
this.acf()},
acf(){var w=0,v=A.j(x.H),u=this,t
var $async$acf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(R.b6J(u.a.c,B.Fl),$async$acf)
case 2:t=e
if(u.c!=null)u.l(new C.eaa(u,t))
return A.h(null,v)}})
return A.i($async$acf,v)},
al2(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$al2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.eab(q))
t=4
p=R.hHt(q.a.d,B.Fl)
if(p==null){n=A.be("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(R.avm(n.e,m,l,B.Fl,p,n.f),$async$al2)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.eac(q))
q.c.M(x.q).f.T(D.fHz)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ad(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(B.a.es(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.ead(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$al2,v)},
C(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=p?B.o0:B.nk,n=p?B.j_:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hn8,q,q,q,1,q,!0)
w=A.n(24)
v=A.K(B.aZ.j(0.35),B.r,1)
u=A.qx(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aZ,q,q,q,q,q,q,q,q,q,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.w(A.a([B.N,u,B.bx,t,B.N,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bc,B.i,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.m),q,q,q,q,B.ad,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcBA()
if(u)u=B.LE
else u=A.V(r.e===!0?B.h2:Ay.arR,q,q,q,q,q)
w=A.a([w,B.ae,v,B.ae,new A.a4(1/0,q,A.eo(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cg,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aZ,q,B.hw,q,q,q,new A.ax(B.aZ.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.hC,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aE:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a4(1/0,q,A.bI(Ag.BR,q,new C.eae(d),A.bp(B.aZ,q,q,q,q,B.hw,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.C(B.ad,A.w(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a1L.prototype={
R(){return new C.bp8(A.Ak(B.zt,B.oI,B.vV))}}
C.bp8.prototype={
t(){this.d.t()
this.a3()},
C(d){var w=null
return A.c6(A.eR(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.heD,w,w,w,1,w,!0),B.v,A.Aj(this.d,B.c1,new C.eas(this,d)),w,!1,!1,w,w)}}
C.b2s.prototype={
C(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.TR,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.mp.prototype={}
C.a8J.prototype={
R(){return new C.boM(null,null)}}
C.boM.prototype={
Z(){var w=this,v=null
w.a4()
w.d=A.br(v,B.tG,v,1,v,w)
w.e=A.br(v,B.o4,v,1,v,w)
w.a.toString
w.d.cU(0)
w.e.cU(0)},
bz(d){var w,v,u=this
u.bK(d)
u.a.toString
w=u.d
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cU(0)
w=u.e
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cU(0)},
t(){var w=this.d
w===$&&A.d()
w.t()
w=this.e
w===$&&A.d()
w.t()
this.bCJ()},
C(d){var w,v,u=this,t=B.d.dt(D.a8t,new C.dW9(u),new C.dWa())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cHf(A.ca(new A.hC(A.a([w,v],x.dS)),new C.dWb(u,t),null),!0)}}
C.boL.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b6S(d,e)
break
case"house":p.mD(d,e,D.dqB)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdm()
$.U()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.P(new A.m(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mJ(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Cq(d,e,12)
p.zp(d,e,B.lB,5,14)
break
case"grocery":p.cqa(d,e)
break
case"calculator":p.cpS(d,e)
break
case"lumber":p.cqi(d,e)
break
case"kitchen":p.cqd(d,e)
break
case"landscape":p.mD(d,e,D.drc)
s=new A.aJ($.U().r,B.ak,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.b_(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.cn(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.cn(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bz())
w=A.M()
w.r=B.ew.j(0.85).gp(0)
d.af(s,w)
p.Cq(d,e,8)
p.zp(d,e,B.iN,4,18)
break
case"plumbing":p.cqs(d,e)
break
case"electrical":p.mD(d,e,D.dE4)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.U()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a5(0,0,0+e.a,0+e.b),u)
p.mJ(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mJ(d,e,B.oW.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Cq(d,e,10)
break
case"store":p.cqC(d,e)
break
case"paint_remodel":p.cqn(d,e)
break
case"roofing":p.cqu(d,e)
break
case"warehouse":p.cqJ(d,e)
break
case"vehicles":p.cqH(d,e)
break
case"farm":p.cq4(d,e)
break
case"restaurant":p.cqt(d,e)
break
case"tools":p.cqF(d,e)
break
case"wallet":p.cqI(d,e)
break
case"concrete":p.cpY(d,e)
break
case"blueprint":p.cpQ(d,e)
break
default:p.b6S(d,e)}},
mD(d,e,f){var w,v=new A.a5(0,0,0+e.a,0+e.b)
$.U()
w=A.M()
w.san(new A.a6(B.aw,B.aD,B.w,f,null,null).az(0,v))
d.aE(v,w)},
mJ(d,e,f,g,h){var w,v,u,t=new A.m(e.a/2,e.b/2),s=e.gdm()/2-h
$.U()
w=A.M()
w.b=B.af
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cR(A.c0(t,s),u,u+0.1439896632895322-u,!1,w)}},
zp(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdm()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.P(new A.m(q+t*o,p+s*o),3.5,r)}},
Cq(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.h.F(t*0.17,0.9)
q=B.h.F(t*0.23,0.85)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.P(new A.m(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b6S(d,e){var w,v=this
v.mD(d,e,D.dCa)
w=v.c
v.mJ(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mJ(d,e,B.bO.j(0.45),-w*3.141592653589793*1.4,22)
v.bUK(d,e,B.i_,w)
v.zp(d,e,B.c.j(0.7),6,8)},
bUK(d,e,f,g){var w,v,u,t,s,r
$.U()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a5(16,r,t,r+3),w)}},
cqa(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mD(d,e,D.cCh)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.n.F(t,3)
q=Math.sin(s)
p=B.n.ao(t,3)
o=Math.cos(s*0.8)
n=B.n.F(t,2)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.dox[B.n.F(t,4)].j(0.85).gp(0)
d.P(new A.m(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mJ(d,e,B.c.j(0.35),w,16)
l.zp(d,e,B.iN,5,12)},
cpS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mD(d,e,D.cCp)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdm()
$.U()
q=A.M()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.P(new A.m(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h2(h,B.cK,h,h,h,h,B.a8,B.cb,h,B.e6,B.cc)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dtc[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.n.F(o,2)
p.sb1(0,new A.eG(r,h,h,B.cW,h,h,h,h,h,h,new A.H(!0,q,h,h,h,h,14+m*4,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a5(d,new A.m(t*(0.08+B.n.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.n.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cCr[o]
l=B.l4.j(0.28+0.3*Math.sin(n))
k=B.n.F(o,2)
p.sb1(0,new A.eG(m,h,h,B.cW,h,h,h,h,h,h,new A.H(!0,l,h,h,h,h,12+k*3,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a5(d,new A.m(t*(0.55+B.n.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.n.ao(o,3)*0.38)+Math.sin(n)*6))}i.mJ(d,e,B.c.j(0.35),w*1.5,14)
i.mJ(d,e,B.eM.j(0.55),-v*3.141592653589793*2,8)
i.mJ(d,e,B.oQ.j(0.4),r*2.8,22)
i.zp(d,e,B.pP,8,10)
i.Cq(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.h.F(w+o*0.22,0.9)
$.U()
v=new A.ar(B.V,B.R,B.X,B.Y,B.W)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.m(12,j),new A.m(t,j),v)}},
cqi(d,e){var w,v,u,t,s,r,q,p,o=this
o.mD(d,e,W.aDT)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a5(20,r,u,r+10),B.hv)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=A.ap(B.hb,B.nQ,(s+1)/2).gp(0)
d.aq(q,p)}o.mJ(d,e,B.hb.j(0.35),w,15)
o.Cq(d,e,8)},
cqd(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mD(d,e,D.dp6)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.h.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.h.F(s*0.13,0.7)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.P(new A.m(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mJ(d,e,B.bO.j(0.4),-w*3.141592653589793*2.2,11)
l.zp(d,e,B.qU,4,14)},
cqs(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mD(d,e,D.dby)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.h.F(s,0.12)
$.U()
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.af
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.P(new A.m(w,u),q*(0.12+r*0.14+p),o)}n.zp(d,e,B.pT,6,12)
n.mJ(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cqC(d,e){var w,v,u,t,s,r,q,p=this
p.mD(d,e,D.cQk)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a5(r,14,r+u,22),B.jL)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.fy,B.bO,(s+1)/2).gp(0)
d.aq(r,q)}p.mJ(d,e,B.c.j(0.3),w,16)
p.Cq(d,e,8)
p.zp(d,e,B.wZ,5,13)},
cqn(d,e){var w,v,u,t,s,r,q
this.mD(d,e,D.diO)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.h.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a5(r,q,r+8,q+(18+s*22)),B.iE)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=[B.iK,B.dI,B.bO,B.ej][t].j(0.85).gp(0)
d.aq(q,r)}this.mJ(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cqu(d,e){var w,v,u,t,s,r,q
this.mD(d,e,D.dfJ)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.h.F(v+t*0.12,0.75))
r=B.n.F(t,4)*0.22
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.m(u*(0.1+r),s),new A.m(u*(0.18+r),s+10),q)}this.zp(d,e,B.cH,7,11)},
cqJ(d,e){var w,v,u,t,s,r,q,p
this.mD(d,e,D.cTb)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a5(q,p,q+(t-s*8),p+16),B.hv)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.cH,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mJ(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cqH(d,e){var w,v,u,t,s,r,q
this.mD(d,e,D.dIS)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.h.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.n.F(t,2)*0.08)
r=A.bx(new A.a5(s,r,s+28,r+8),B.hv)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.Cq(d,e,6)},
cq4(d,e){var w,v,u,t,s,r,q,p
this.mD(d,e,D.dns)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.U()
s=A.M()
s.r=B.oW.j(0.75).gp(0)
d.P(new A.m(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.hY.j(0.85).gp(0)
p.c=3
d.ah(new A.m(q,v),new A.m(q+s*6,t),p)}this.mJ(d,e,B.oW.j(0.35),w,14)},
cqt(d,e){var w,v,u,t,s,r,q=this
q.mD(d,e,D.dqo)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.c1(new A.m(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.22).gp(0)
d.c3(s,r)}q.zp(d,e,B.qU,5,16)
q.Cq(d,e,7)},
cqF(d,e){var w,v,u,t,s,r,q,p,o=this
o.mD(d,e,D.dFY)
w=o.c
v=w*3.141592653589793
o.mJ(d,e,B.nQ.j(0.55),v*3,10)
o.mJ(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.nQ.j(0.8).gp(0)
d.P(new A.m(v+r*34,u+q*22),4,p)}},
cqI(d,e){var w,v,u,t,s,r,q,p,o=this
o.mD(d,e,D.dJF)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a5(q,p,q+36,p+22),B.jL)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.iN,B.oW,r).gp(0)
d.aq(p,q)}o.Cq(d,e,9)
o.mJ(d,e,B.c.j(0.4),w*2.2,12)},
cpY(d,e){var w,v,u,t,s,r,q,p
this.mD(d,e,D.dwv)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.c0(new A.m(v,u),34)
$.U()
s=A.M()
s.b=B.af
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cR(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.bP.j(0.85).gp(0)
d.P(new A.m(v+t*34,u+s*34),3,p)}},
cpQ(d,e){var w,v,u,t,s,r,q
this.mD(d,e,D.drB)
$.U()
w=A.M()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.m(t,0),new A.m(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.m(0,s),new A.m(v,s),w)
r=this.c
q=u*B.h.F(r*0.85,1)
$.U()
u=A.M()
u.r=B.dI.j(0.45).gp(0)
d.aE(new A.a5(0,q,0+v,q+6),u)
this.mJ(d,e,B.lB.j(0.45),-r*3.141592653589793*2,11)},
aC(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aw7.prototype={
a1Z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aUw(),$async$a1Z)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.ab2(s),$async$a1Z)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a1Z,v)},
ajD(d){return this.ct4(d)},
ct4(d){var w=0,v=A.j(x.H),u=this,t
var $async$ajD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iLq(d),$async$ajD)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ajD,v)},
C(d){var w,v,u=null,t=A.Q(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.ke:B.iM
w=x.p
v=A.a([C.aUU(!0,B.t6,1/0,B.q7,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.p(u,u,u,u,u,new A.a6(B.aW,B.b0,B.w,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bn,new A.bH(B.aW,u,u,new A.C(B.tI,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aER,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.dg(D.c0e,u,D.h2l,new C.ct0(this,d),A.bp(B.aZ,u,u,u,B.c,u,B.jD,u,u,u,u,B.cp)),1),B.aa,A.E(A.eo(D.c9h,u,D.hhR,this.gcjE(),A.dj(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jD,u,u,D.b9w,u,u,u,B.cp)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fC(1.7777777777777777,A.aF(!1,B.a3,!0,B.t6,new A.am(B.a0,u,B.b6,B.t,v,u),B.ap,t,0,u,u,u,u,u,B.ai),u)}}
C.aPB.prototype={
b0(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.be$
if(v!=null)v.a8(0,w.gdP())
w.be$=null
w.a3()}}
C.aXS.prototype={}
C.aXR.prototype={}
C.aVV.prototype={}
C.a0m.prototype={
R(){return new C.aCq()}}
C.aCq.prototype={
Z(){var w,v,u=this
u.a4()
u.a.toString
w=new A.bd("",B.bb,B.aP)
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
M4(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.M(x.q).f.T(D.fI4)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).N(new C.aXS(w,v))},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.I,l=m?B.eo:B.c,k=A.n(20),j=A.q(n,D.c8W,B.f,n,n,new A.p(B.aZ.j(0.15),n,n,A.n(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bs,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aI(n,n,n,n,A.V(B.cE,m?B.bv:B.bl,n,n,n,n),n,n,n,new C.deq(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cF,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hHJ(new C.der(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ke:B.iM
r=A.n(12)
q=A.n(12)
p=m?B.er:B.bP
t=A.aO(n,B.M,!0,n,!0,B.t,n,A.aP(),u,n,n,n,n,n,2,A.bB(n,new A.b6(4,r,B.dz),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.am,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.des(o),n,!1,n,n,!1,n,!0,n,B.ad,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a8,n,A_.LN,n,n,n,n)
u=m?B.aS:B.ax
m=m?B.er:B.bP
return A.eE(n,l,new A.cO(B.mo,A.cb(A.w(A.a([j,B.aN,i,B.at,w,B.N,v,B.aN,t,B.bx,A.A(A.a([A.E(A.dV(B.dy,new C.det(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.cq,n,new A.bb(A.n(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bI(D.hi7,n,o.ga5d(),A.bp(B.aZ,n,n,n,B.c,n,B.cq,n,new A.bb(A.n(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.B,n,B.e,B.P,0,B.p),B.t,n,B.y,n,n,B.Dv,n,n,B.ah),n),n,n,n,B.Dw,n,B.db,n,new A.bb(k,B.a1),n)}}
C.a0l.prototype={
R(){return new C.aCp()}}
C.aCp.prototype={
Z(){this.a4()
var w=$.ay()
this.d!==$&&A.aT()
this.d=new A.au(B.ay,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
M4(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.M(x.q).f.T(D.fFG)
return}v=this.c
v.toString
A.a7(v,!1).N(new C.aXR(w))},
C(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.I,o=p?B.eo:B.c,n=A.n(20),m=A.q(q,D.c5a,B.f,q,q,new A.p(B.bU.j(0.15),q,q,A.n(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bs,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aI(q,q,q,q,A.V(B.cE,p?B.bv:B.bl,q,q,q,q),q,q,q,new C.dem(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aZ.j(p?0.12:0.08)
w=A.n(12)
v=A.K(B.aZ.j(0.25),B.r,1)
u=A.V(B.arD,B.aZ.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.m),q,q,q,q,B.bD,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.ke:B.iM
t=A.n(12)
s=A.n(12)
r=p?B.er:B.bP
v=A.aO(q,B.M,!0,q,!0,B.t,q,A.aP(),w,q,q,q,q,q,2,A.bB(q,new A.b6(4,t,B.dz),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.am,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.den(this),q,!1,q,q,!1,q,!0,q,B.ad,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a8,q,B.lr,q,q,q,q)
w=p?B.aS:B.ax
p=p?B.er:B.bP
return A.eE(q,o,new A.cO(B.mo,A.cb(A.w(A.a([m,B.aN,l,B.aA,v,B.bx,A.A(A.a([A.E(A.dV(B.dy,new C.deo(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.cq,q,new A.bb(A.n(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bI(D.hps,q,this.ga5d(),A.bp(B.bU,q,q,q,B.c,q,B.cq,q,new A.bb(A.n(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.B,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.Dv,q,q,B.ah),q),q,q,q,B.Dw,q,B.db,q,new A.bb(n,B.a1),q)}}
C.a_M.prototype={
R(){return new C.aB1()}}
C.aB1.prototype={
Z(){var w,v=this
v.a4()
w=$.ay()
v.d!==$&&A.aT()
v.d=new A.au(B.ay,w)
v.e!==$&&A.aT()
v.e=new A.au(new A.bd("1",B.bb,B.aP),w)
v.f!==$&&A.aT()
v.f=new A.au(B.ay,w)
v.r!==$&&A.aT()
v.r=new A.au(B.ay,w)},
t(){var w,v=this,u=v.d
u===$&&A.d()
w=u.V$=$.ay()
u.W$=0
u=v.e
u===$&&A.d()
u.V$=w
u.W$=0
u=v.f
u===$&&A.d()
u.V$=w
u.W$=0
u=v.r
u===$&&A.d()
u.V$=w
u.W$=0
v.a3()},
gLl(){var w,v=this.e
v===$&&A.d()
w=A.cA(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gamN(){var w=this.f
w===$&&A.d()
w=A.cA(B.a.i(w.a.a))
return w==null?0:w},
gb9I(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aTC(d){var w,v=B.h.D(this.gLl()+d,0.25,999999),u=B.h.bd(v),t=this.e
t===$&&A.d()
if(v===u)u=B.n.v(B.h.L(v))
else{u=B.h.a1(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aD(u,w,"")}t.sb1(0,u)
this.l(new C.cLj())},
aCp(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aZ,w,w,w,20):w,u=d.a,t=u?B.ke:B.iM,s=A.n(14),r=A.n(14)
u=u?B.er:B.bP
return A.bB(w,new A.b6(4,s,B.dz),w,B.bD,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.n(14),B.agz),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cjF(d,e,f){return this.aCp(d,e,f,null)},
M4(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.gamN()<=0){s.c.M(x.q).f.T(D.fJZ)
return}r=s.c
r.toString
v=s.gLl()
u=s.gamN()
t=s.gb9I()
A.a7(r,!1).N(new C.aVV(w,v,u,t))},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uD(n),l=n?B.eo:B.c,k=A.n(24),j=x.O,i=A.a([B.aZ.j(0.22),B.bU.j(0.14)],j),h=A.n(14)
i=A.q(o,D.bZ6,B.f,o,o,new A.p(o,o,A.K(B.aZ.j(0.35),B.r,1),h,o,new A.a6(B.a5,B.a9,B.w,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bs,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cF,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aI(o,o,o,o,A.V(B.cE,n?B.bv:B.bl,o,o,o,o),o,o,o,new C.cLp(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aO(o,B.M,!0,o,!0,B.t,o,A.aP(),h,o,o,o,o,o,2,p.aCp(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Re),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a8,o,A_.LN,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.C,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.ke:B.iM
t=A.n(14)
s=A.K(n?B.er:B.bP,B.r,1)
r=A.aI(o,o,o,o,A.V(B.xD,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cLq(p),o,o,o,o,o,B.cp)
q=p.e
q===$&&A.d()
q=A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),q,o,o,o,o,o,2,D.caQ,B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.el,o,o,o,1,o,o,!1,"\u2022",o,new C.cLr(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a4(52,o,q,o),A.aI(o,o,o,o,A.V(B.ii,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cLs(p),o,o,o,o,o,B.cp)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),t,o,o,o,o,o,2,p.aCp(m,"Amount","0.00",B.hE),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.el,o,o,o,1,o,o,!1,"\u2022",o,new C.cLt(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a8,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.i,0,o,o)
t=x.gv
u=A.B(new A.O(D.djp,new C.cLu(p,m),t),t.k("aj.E"))
i=A.a([i,B.bx,v,B.aA,h,B.N,s,B.ae,A.bX(B.bG,u,B.bq,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),h,o,o,o,o,o,2,p.cjF(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cLv(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a8,o,B.lr,o,o,o,o)],w))}i.push(B.aN)
h=B.aZ.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.K(B.aZ.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gLl()===B.h.bd(p.gLl())?B.h.L(p.gLl()):p.gLl()
s=p.gb9I()
r=A.BO(p.gamN())
i.push(A.q(o,A.A(A.a([A.E(A.w(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.i,0,B.p),1),C.bJA(p.gLl()*p.gamN(),B.b9,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a6(B.a5,B.a9,B.w,j,o,o),B.m),o,o,o,o,B.jF,o,o,o))
i.push(B.bx)
j=A.n(14)
h=n?B.er:B.bP
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.cq,o,new A.bb(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cLw(d),h),1),B.ar,A.E(A.dg(D.ave,o,D.hlc,p.ga5d(),A.bp(B.aZ,o,o,0,B.c,o,B.cq,o,new A.bb(A.n(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eE(o,l,new A.cO(B.Ni,A.cb(A.w(i,B.al,o,B.e,B.P,0,B.p),B.t,o,B.y,o,o,Ak.tO,o,o,B.ah),o),o,o,o,B.PL,o,B.db,o,new A.bb(k,B.a1),o)}}
C.a3B.prototype={
R(){return new C.bBL()}}
C.bBL.prototype={
Z(){var w,v,u=this
u.a4()
w=u.a.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bd(w,B.bb,B.aP),v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
C(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=r?B.eo:B.c,p=A.n(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.ax,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.ke:B.iM
v=A.aO(s,B.M,!0,s,!0,B.t,s,A.aP(),w,s,s,s,s,s,2,A.bB(s,new A.b6(4,A.n(12),B.dz),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fyk(t,d),s,!1,s,s,!1,s,!0,s,B.ad,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a8,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.dy,new C.fyl(d),s),1)
r=A.bp(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eE(s,q,new A.C(B.Dv,A.w(A.a([o,B.aA,v,B.aN,A.A(A.a([u,B.ar,A.E(A.bI(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fym(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,s,B.db,s,new A.bb(p,B.a1),s)}}
C.ae6.prototype={
a9(){return"WorksheetFrameStyle."+this.b}}
C.GV.prototype={
R(){return new C.bBJ(null,null)}}
C.bBJ.prototype={
Z(){var w,v=this
v.a4()
w=A.br(null,D.bFI,null,1,null,v)
w.cU(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bF3()},
gbGG(){switch(this.a.r.a){case 1:return A.a([B.aZ,B.bU,B.b9],x.O)
case 2:return A.a([B.bw,B.aZ,B.b9],x.O)
case 3:return A.a([B.aH,B.cj,B.jU],x.O)
case 4:return A.a([B.fM,B.bU,B.fz],x.O)
case 0:return A.a([B.aZ,B.bU,B.b9],x.O)}},
C(d){var w=A.Q(d),v=this.d
v===$&&A.d()
return new A.ea(A.ca(v,new C.fyi(this,new C.uD(w.ax.a===B.I)),null),null)}}
C.aAV.prototype={
R(){return new C.bBK(null,null)}}
C.bBK.prototype={
Z(){var w,v=this
v.a4()
w=A.br(null,B.o6,null,1,null,v)
w.cU(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bF4()},
C(d){var w=this.d
w===$&&A.d()
return A.ca(w,new C.fyj(this),null)}}
C.bBI.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a5(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aQ(w,w))
u=new A.aJ($.U().r,B.ak,null,null,A.a([],x.v))
u.E(new A.ju(v))
w=A.M()
w.b=B.af
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.M()
w.b=B.af
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.A1(u)
t=A.a([],x.U)
w=new A.vg(w,!1,t)
for(o=p.b,s=-o*0.85;w.A();){r=w.c
if(r===0||w.f)A.bi(A.k_(y.B));--r
q=new A.Cc(w,r)
w.jZ()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aXh(d,q,r,o,0,0.2,4.2,0.92)
p.aXh(d,q,r,s,0.52,0.11,3.2,0.58)}},
aXh(d,e,f,g,h,i,j,k){var w,v,u,t=B.h.F(g+h,1)*f,s=A.i4X(e.a.a,e,t,t+f*i,!0),r=A.ajg(s.glm().a.getBounds())
$.U()
w=A.M()
w.b=B.af
w.c=j
w.d=B.bH
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a6(B.a5,B.a9,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.JA,null).az(0,r))
d.af(s,w)},
aC(d){return d.b!==this.b||d.d!==this.d}}
C.aRJ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.aRK.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.uD.prototype={}
C.aw6.prototype={
R(){return new C.aIU()},
gea(){return this.c}}
C.aIU.prototype={
Z(){var w=this
w.a4()
w.d=w.a.d
w.akt()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.MS(w,v)
this.a3()},
akt(){var w=0,v=A.j(x.H),u=this,t,s
var $async$akt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bHY(t.c,t.d.a),$async$akt)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f5t(u,s))
return A.h(null,v)}})
return A.i($async$akt,v)},
Sd(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Sd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f5k(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.MS(t,s),$async$Sd)
case 2:if(u.c!=null)u.l(new C.f5l(u))
return A.h(null,v)}})
return A.i($async$Sd,v)},
SK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$SK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.f5r(t,new C.uD(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$SK)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.ab2(q),$async$SK)
case 6:case 5:t.l(new C.f5s(t,r))
w=7
return A.b(t.Sd(),$async$SK)
case 7:case 1:return A.h(u,v)}})
return A.i($async$SK,v)},
XW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iLa(r),$async$XW)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f5f(t,new C.rP(B.n.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Sd(),$async$XW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XW,v)},
coY(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hXf(t,new C.f5j(u),w,v)},
ae5(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.p(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b9h,w,w,B.m),w,22,w,w,w,w,w,22)},
ad5(d){return this.bSY(d)},
bSY(d){var w=0,v=A.j(x.H),u=this
var $async$ad5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f5i(u,d))
w=2
return A.b(u.Sd(),$async$ad5)
case 2:return A.h(null,v)}})
return A.i($async$ad5,v)},
C(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.I,e=f?B.c8:B.hX,d=A.n(8),a0=A.V(Y.a46,f?B.bv:B.bl,g,g,g,16),a1=x.p
a0=A.aN(!1,d,!0,new A.C(B.I7,A.A(A.a([a0,B.b7,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f5u(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.am(B.a0,g,B.b6,B.t,A.a([A.bv(A.n(22),C.aUU(!0,A.n(22),1/0,B.q7,g,d,1/0),B.ap),A.ao(10,A.dg(D.c31,g,D.hnH,h.gb7D(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.h1,g,new A.bb(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aZ.j(f?0.5:0.38),B.eS,22),new A.ac(-4,B.G,B.bU.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.q(g,A.q(g,A.bv(s,new A.am(B.a0,g,B.b6,B.t,A.a([C.aUU(!0,A.n(16),1/0,B.QB,g,r.c,1/0),new A.bP(new A.p(g,g,g,g,g,new A.a6(B.aW,B.b0,B.w,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bn,g,g),A.ao(g,h.ae5(!0),g,g,8,g,8,g),A.ao(g,A.cHZ(h.ae5(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cHZ(h.ae5(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cHZ(h.ae5(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dg(D.bZK,g,D.hgO,h.gb7D(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.h1,g,new A.bb(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.p(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.ccx,B.m),g,g,g,g,B.m7,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.bke,B.oO,B.hA],u):A.a([B.b9,B.aZ,B.bU],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aZ.j(f?0.45:0.35),B.eS,24)],t)
r=A.n(22)
p=A.ao(g,A.V(B.jG,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.m),g,g,g,g,B.hp,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aA,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.aj,C.bJA(h.d.gyn(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.N,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cF,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.B,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.K(B.hn.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cO,14)],t)
j=B.aH.j(0.22)
i=A.n(10)
u=A.q(g,A.bv(r,new A.am(B.a0,g,B.ac,B.t,A.a([p,new A.C(D.bKB,A.A(A.a([o,B.ar,A.aF(!1,B.a3,!0,g,A.aN(!1,n,!0,A.eK(new A.C(B.xh,A.w(A.a([A.q(g,D.auO,B.f,g,g,new A.p(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.ct,g,g,g),B.fT,D.h5i],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcoX(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.p(g,g,g,v,s,new A.a6(B.aw,B.aD,B.w,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fC(1.7777777777777777,d,g),B.aN,w,B.N,u,B.bx,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,16,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aY,A.dg(A9.a5R,g,D.h31,h.gbHa(),A.bp(B.aZ,g,g,g,B.c,g,B.hq,g,new A.bb(A.n(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.ae],a1)
w=h.d.d
if(w.length===0){w=f?B.eo:B.c
v=A.n(14)
u=A.K(f?B.er:B.bP,B.r,1)
t=A.V(B.a4t,f?B.bv:B.bl,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.w(A.a([t,B.S,s,B.aj,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.m),g,g,g,g,B.q1,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f5v(h,new C.uD(f)),A.T(w).k("O<1,x>")))
if(h.e)d.push(new A.C(B.zy,A.at(A.nq(g,f?B.bv:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bl(!0,A.w(A.a([new A.C(Z.Dm,a0,g),A.E(A.cb(A.w(d,B.B,g,B.e,B.i,0,B.p),B.t,g,B.y,g,g,E.zK,g,g,B.ah),1)],a1),B.B,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bKW(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.eo:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.v.j(r?0.35:0.08),B.cO,12)],x.V),n=A.n(16),m=A.q(u,u,B.f,u,u,D.bc_,u,u,u,u,u,u,u,5),l=B.aZ.j(r?0.22:0.12),k=A.n(12)
l=A.q(u,A.V(s?B.ix:B.h4,B.b9,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd5x()
v=A.BO(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.B,u,B.bc,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aZ.j(0.14),B.bU.j(0.1)],x.O)
w=A.n(12)
k=A.q(u,C.bJA(d.c*d.d,B.b9,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a6(B.a5,B.a9,B.w,k,u,u),B.m),u,u,u,u,B.h1,u,u,u)
w=x.p
return A.q(u,A.bv(n,new A.Fm(A.A(A.a([m,A.E(new A.C(B.aom,A.A(A.a([l,B.bd,t,B.aa,k,A.aI(u,u,u,u,A.V(B.cE,(r?B.bv:B.bl).j(0.75),u,u,u,20),u,u,u,new C.f5g(this,d),u,u,u,u,u,B.cp)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.baQ,new A.p(q,u,u,p,o,u,B.m),u,u,u,B.d3,u,u,u,u)}}
C.agc.prototype={
FW(d){return this.bUm(d)},
bUm(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$FW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pX(d,o,!1),$async$FW)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
w=4
return A.b(A.bM(B.De,null,x.H),$async$FW)
case 4:s=t.d
w=5
return A.b(C.h9P(!0,o,s),$async$FW)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.HP(r,"ngmy_project_"+A.aD(s.b,q,"_"),!1),$async$FW)
case 6:p=f
w=7
return A.b(M.pW(o,!1),$async$FW)
case 7:if(d.e==null){w=1
break}d.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$FW,v)},
a20(d){return this.cFT(d)},
cFT(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a20=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pX(d,s,!1),$async$a20)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
A.hf(d,new C.aw0(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pW(s,!1),$async$a20)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a20,v)},
Se(d){return this.cBN(d)},
cBN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Se=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(A.hf(d,D.aOQ,!0,"NgmyWorksheetProjectScan",x.N),$async$Se)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bJB(s),$async$Se)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.M(x.q).f.T(D.fJ5)
w=1
break}q=C.hxf(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dT(p,x.H),$async$Se)
case 5:if(d.e==null){w=1
break}d.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Se,v)},
a21(d){return this.cOs(d)},
cOs(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a21=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(C.bJ4(),$async$a21)
case 3:s=f
if(s==null){w=1
break}r=C.hxf(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dT(q,x.H),$async$a21)
case 4:if(d.e==null){w=1
break}d.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a21,v)},
C(d){var w=this,v=null,u=A.Q(d).ax.a===B.I,t=new C.uD(u),s=w.d.d.length,r=u?B.eo:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.v.j(u?0.35:0.08),B.ky,36)],x.V),o=x.p
return A.bl(!0,new A.C(B.xg,A.q(v,A.w(A.a([w.cEs(d,t,s),new A.C(D.bK_,A.w(A.a([w.b5B(t,"QR restore"),B.S,A.A(A.a([w.b5A(t,!0,B.jI,B.aH,B.aH,new C.f5x(w,d),"Show to scan","QR code"),B.ar,w.aCq(t,B.jJ,B.b2,B.bk,new C.f5y(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.df,w.b5B(t,"Backup files"),B.S,A.A(A.a([w.aCq(t,B.hP,B.aZ,B.bU,new C.f5z(w,d),"Full copy","Backup file"),B.ar,w.aCq(t,Q.At,B.as,B.aQ,new C.f5A(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.B,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.ap,v,v,new A.p(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cEs(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fo,B.cZ,B.h9],k):A.a([B.b9,B.aZ,B.bU],k)
w=A.ao(l,A.V(B.vO,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.q(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.n(4),l,l,B.m),l,4,l,B.kM,l,l,l,36),l,l,l)
u=A.n(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.v.j(0.2),B.cO,12)],x.V)
r=this.d
s=A.q(l,C.aUU(!0,A.n(13),64,D.bUJ,l,r.c,64),B.ap,l,l,new A.p(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.C,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.adV,l,l,l)
r=C.bJA(r.gyn(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.am(B.a0,l,B.ac,B.t,A.a([w,new A.C(D.bKm,A.w(A.a([v,A.A(A.a([s,B.eu,A.E(A.w(A.a([u,B.at,t,B.N,A.A(A.a([r,B.aa,A.q(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.m),l,l,l,l,B.f8,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.B,l,B.e,B.i,0,B.p),1),A.aI(l,l,l,l,A.V(B.cE,B.c.j(0.85),l,l,l,l),l,l,l,new C.f5w(d),l,l,l,A.nu(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aXn,l,l,l,l),l,l)],m),B.B,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a6(B.aw,B.aD,B.w,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b5B(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.p(B.aZ,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b5A(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.amX:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.er:B.bP
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cO,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.K(h.j(0.35),B.r,1)
t=A.q(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.m),r,r,r,r,B.tR,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aF(!1,B.a3,!0,r,A.aN(!1,q,!0,A.eK(new A.C(E.a2s,A.w(A.a([t,B.ae,u,B.bs,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cF,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.i,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aCq(d,e,f,g,h,i,j){return this.b5A(d,!1,e,f,g,h,i,j)}}
C.aw0.prototype={
R(){return new C.bqx()}}
C.bqx.prototype={
Z(){this.a4()
this.aij()},
aij(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aij=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bJC(p.c,p.d),$async$aij)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f5a(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f5b(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aij,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.I,f=g?B.CK:B.hX,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.V(B.eI,g?B.ab:B.an,h,h,h,18),h,h,h,new C.f5c(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.uy],u),B.l,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.fo,B.cZ,B.h9],s):A.a([B.b9,B.aZ,B.bU],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aZ.j(g?0.4:0.3),B.eS,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dw,B.K,h,h)
p=C.bJA(p.gyn(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.q(h,A.w(A.a([o,B.aj,A.A(A.a([p,B.aa,A.q(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.m),h,h,h,h,B.f8,h,h,h)],u),B.l,h,B.bc,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a6(B.aw,B.aD,B.w,s,h,h),B.m),h,h,h,h,E.a2R,h,h,1/0)
t=g?D.bvX:B.c
q=A.n(24)
p=A.K(w?B.aH.j(0.4):B.aZ.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.v.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.Xh,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eLh)
else{m=A.n(20)
l=A.K(B.bo,B.r,1)
o.push(A.q(h,A.qx(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h))}}o.push(B.aN)
n=w?B.aH:B.aZ
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.K((w?B.aH:B.aZ).j(0.35),B.r,1)
k=w?B.QU:B.Rx
k=A.V(k,w?B.aH:B.aZ,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.m),h,h,h,h,B.hq,h,h,h))
return A.c6(h,f,A.bl(!0,A.w(A.a([new A.C(Ah.PY,e,h),A.E(A.cb(A.w(A.a([s,B.aN,A.q(h,A.w(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.m),h,h,h,h,B.vs,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,h,E.apD,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aw5.prototype={
R(){return new C.aIT(A.Ak(B.Pd,B.oI,B.vV))}}
C.aIT.prototype={
t(){this.d.t()
this.a3()},
aRy(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j8(w,d)},
ckx(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iJ4(t)
if(s!=null){this.aRy(s)
return}r=C.hMj(t)
if(r!=null)q=A.cW(r,p,0)
else q=!1
if(q){this.aRy(B.a.i(B.a.aV(r,B.a.c8(r,p))))
return}}},
C(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aI(t,t,t,t,A.V(u.f?B.ry:Ab.R2,t,t,t,t,t),t,t,t,new C.f5e(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.CK,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.hgG,t,t,t,1,t,!0),q=A.Aj(u.d,B.c1,u.gckw()),p=A.n(28)
p=A.at(A.q(t,t,B.f,t,t,new A.p(t,t,A.K(B.aZ,B.r,3),p,A.a([new A.ac(2,B.G,B.aZ.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.n(16)
return A.c6(r,B.v,new A.am(B.a0,t,B.b6,B.t,A.a([q,p,A.ao(32,A.q(t,D.hfq,B.f,t,t,new A.p(w,t,A.K(B.aZ.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jF,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aNW.prototype={
a9(){return"_WorksheetTab."+this.b}}
C.PR.prototype={
R(){return new C.aIV(D.afT,A.a([],x.D))},
bx(){return this.r.$0()},
gea(){return this.c}}
C.aIV.prototype={
gcM9(){return J.bKK(this.e,0,new C.f5X())},
Z(){this.a4()
$.aS.cT$.push(this)
this.wT()},
t(){$.aS.hR(this)
this.a3()},
ji(d){if(d===B.fY)this.wT()},
wT(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wT=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.E7(q.a.c).d9(0,B.kl),$async$wT)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f5T(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f5U(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wT,v)},
JA(d){return this.bR1(d)},
bR0(){return this.JA(null)},
bR1(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iLc(l,d),$async$JA)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.n.v(1000*Date.now())
r=s.a
q=s.b
p=new C.m5(l,r,q,D.dwN,new A.W(Date.now(),0,!1))
w=4
return A.b(C.MS(t.a.c,p),$async$JA)
case 4:o=f
w=5
return A.b(t.wT(),$async$JA)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.M(x.q).f.T(D.fG9)
w=1
break}n=J.aM(t.e)
for(;;){if(!n.A()){m=p
break}m=n.gO(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.M(q).f.T(D.fHZ)
else n.M(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.G_(m)
case 1:return A.h(u,v)}})
return A.i($async$JA,v)},
G_(d){return this.coI(d)},
coI(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$G_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hf(s,new C.aw6(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$G_)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.MS(u.a.c,t),$async$G_)
case 5:case 4:w=6
return A.b(u.wT(),$async$G_)
case 6:return A.h(null,v)}})
return A.i($async$G_,v)},
wD(d){return this.c6t(d)},
c6t(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bJ4(),$async$wD)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hf(r,D.aOQ,!0,"NgmyWorksheetProjectScan",x.N),$async$wD)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bJB(q),$async$wD)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.M(x.q).f
r.T(A.b2(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hxf(s)
w=15
return A.b(C.MS(t.a.c,p),$async$wD)
case 15:o=f
w=16
return A.b(t.wT(),$async$wD)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.M(x.q).f.T(D.fI3)
w=1
break}r.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.G_(p)
case 1:return A.h(u,v)}})
return A.i($async$wD,v)},
PJ(d){return this.bPD(d)},
bPD(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$PJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.f5E(d),s,null,!0,!0,x.y),$async$PJ)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pz(t.a.c,A.a([],x.D)),$async$PJ)
case 6:w=7
return A.b(t.wT(),$async$PJ)
case 7:s=t.c
if(s==null){w=1
break}s.M(x.q).f.T(D.fGe)
case 4:case 1:return A.h(u,v)}})
return A.i($async$PJ,v)},
coW(d){var w=this.c
w.toString
A.bU(B.L,null,new C.f5N(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
bbi(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.ke
else w=B.c
v=A.n(16)
u=A.K(p?B.er:B.bP,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.q(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.m),r,r,r,r,B.bS,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aF(!1,B.a3,!0,r,A.aN(!1,q,!0,A.q(r,A.w(A.a([s,B.ae,t,B.bs,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.i,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.m),r,r,r,r,B.tN,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a2z(d,e){return this.coJ(d,e)},
coJ(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2z=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.f5I(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a2z)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hXf(r,new C.f5J(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.PL(d,e),$async$a2z)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2z,v)},
b8f(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.q(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.m),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aC
else t=h.a?B.aS:B.ax
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.i,0,B.p),1)
return A.aF(!1,B.a3,!0,u,A.aN(!1,u,!0,new A.C(A1.Ds,A.A(A.a([s,B.bd,t,A.V(B.eP,w?B.bv:B.bl,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cvU(d,e,f,g,h,i){return this.b8f(!1,d,e,f,g,h,i)},
PL(d,e){return this.bPN(d,e)},
bPN(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lI(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$PL)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bHJ(t.a.c,d.a),$async$PL)
case 6:w=7
return A.b(t.wT(),$async$PL)
case 7:r=t.c
if(r==null){w=1
break}r.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$PL,v)},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uD(n),l=n?B.c8:B.hX
if(p.f)n=D.bhY
else{w=A.aE(d,B.dL,x.w).w
v=p.bK1(m)
u=p.c5x(m)
t=p.gbH2()
if(n)s=B.ke
else s=B.c
r=A.n(13)
q=x.p
t=A.a([v,B.ae,u,B.aN,new C.GV(A.q(o,A.A(A.a([p.aG2(P.QA,"Projects",m,D.afT),p.aG2(B.vz,"Cashier",m,D.b5J),p.aG2(B.Io,"Family Tree",m,D.i5P)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eH,0.95,t,o),B.bx],q)
v=p.d
if(v===D.afT){v=J.aa(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY,new C.aAV(p.gaVZ(),o)],q),B.l,o,B.e,B.i,0,o,o),B.aA,p.cvW(m)],q))}else{n=p.a
if(v===D.b5J)t.push(new C.arN(n.c,m,o))
else{v=p.r
t.push(new C.at2(n.c,n.d,n.e,n.f,new C.f6_(p),new C.f60(p),new A.b9(v,x.b4)))}}n=A.cb(A.w(t,B.B,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c6(o,l,A.bl(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bK1(d){var w=null,v=A.n(8),u=d.a,t=A.V(Y.a46,u?B.bv:B.bl,w,w,w,16)
return A.aN(!1,v,!0,new A.C(B.jZ,A.A(A.a([t,B.b7,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f5B(this),w,w,w,w,w,w,w)},
gbH2(){switch(this.d.a){case 0:return D.af1
case 1:return D.hTp
case 2:return D.af2}},
c5x(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aZ.j(0.35),B.cy,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.c4Z,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bd,D.bOX,A.aF(!1,B.a3,!0,w,A.aN(!1,A.n(12),!0,A.q(w,D.c2g,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f5F(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.i,0,w,w),r=B.b9.j(0.55),q=A.n(12)
return new C.GV(A.q(w,A.w(A.a([new A.C(B.I0,s,w),A.q(w,A.w(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.BO(this.gcM9()),w,w,w,w,w,w,D.h_9,w,w,w)],t),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.m),w,w,w,B.tM,B.jF,w,w,1/0)],t),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(B.aZ,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hTo,w)},
aG2(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aZ:B.L,q=A.n(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aZ.j(0.42),B.cO,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bl
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bl
return A.E(A.aF(!1,B.a3,!0,u,A.aN(!1,s,!0,A.cZ(u,A.A(A.a([w,B.dU,new A.d_(1,B.c9,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bc,B.i,0,u,u),u,u,B.cn,new A.p(r,u,p,q,o,u,B.m),B.iP,u,u,u,u,B.I8,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f5W(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cvW(d){var w,v,u,t,s,r,q=this,p=null
if(J.ci(q.e)){w=d.a
v=w?B.eo:B.c
u=A.n(15)
t=A.q(p,D.c2n,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.G,B.aZ.j(0.5),B.eS,28)],x.V),D.cf6,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.ax,p,p,p,p,p,p,p,p,18,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GV(A.q(p,A.w(A.a([t,B.df,s,B.N,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.ee,A.A(A.a([A.E(q.aXD(B.jJ,"Scan QR",new C.f5Q(q),d),1),B.ar,A.E(q.aXD(Q.At,"Upload file",new C.f5R(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aA,A.bI(D.hrv,p,q.gaVZ(),A.bp(B.aZ,p,p,p,B.c,B.hw,p,p,new A.bb(A.n(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bLr,1.05,D.af1,p)}w=J.b8(q.e,new C.f5S(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GV(A.w(w,B.l,p,B.e,B.i,0,B.p),16,B.bS,1,D.af1,p)},
aXD(d,e,f,g){var w=null,v=B.aZ.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.K(B.aZ.j(0.45),B.r,1)
return A.aF(!1,B.a3,!0,u,A.aN(!1,t,!0,A.q(w,A.w(A.a([A.V(d,B.b9,w,w,w,26),B.N,A.c(e,w,w,w,w,w,w,D.fYi,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.m),w,w,w,w,Ax.a2e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cvV(d,e){var w,v,u=null,t=e.a,s=t?B.eo:B.c,r=A.n(14),q=A.K(t?B.er:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.v.j(t?0.35:0.08),B.eJ,10)],x.V),o=A.n(14),n=t?B.bv:B.bl
n=A.bv(B.Zp,new A.fC(1.7777777777777777,C.aUU(!0,B.ft,1/0,P.QA,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.w(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.BO(d.gyn()),u,u,u,u,u,u,D.fWf,u,u,u)],w),B.B,u,B.e,B.i,0,B.p),1)
return A.q(u,A.aF(!1,B.a3,!0,u,A.aN(!1,o,!0,A.w(A.a([n,new A.C(B.bD,A.A(A.a([v,A.aI(u,u,u,u,A.V(Ao.a58,t?B.bv:B.bl,u,u,u,u),u,u,u,new C.f5O(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.B,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f5P(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.p(s,u,q,r,p,u,B.m),u,u,u,B.dX,u,u,u,1/0)}}
C.bDx.prototype={}
C.rP.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd5x(){var w,v,u,t,s=this.c
if(s===B.h.bd(s))w=B.n.v(B.h.L(s))
else{v=B.h.a1(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aD(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.m5.prototype={
gyn(){return B.d.cH(this.d,0,new C.cKF())},
ak(){var w=this,v=w.d,u=A.T(v).k("O<1,a9<o,@>>")
v=A.B(new A.O(v,new C.cKE(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
biO(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.m5(w.a,w.b,v,u,w.e)},
biv(d){return this.biO(d,null)},
UX(d){return this.biO(null,d)}}
C.J0.prototype={
a9(){return"FamilyGender."+this.b}}
C.id.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hS9(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aIT(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.id(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.anZ.prototype={
a9(){return"FamilyTreeAccessRole."+this.b}}
C.li.prototype={
gasP(){var w=this.f
return new A.X(w,new C.bWB(),A.T(w).k("X<1>")).gI(0)},
ak(){var w=this,v=w.f,u=A.T(v).k("O<1,a9<o,@>>")
v=A.B(new A.O(v,new C.bWA(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.iAF(w.y),"games",w.z],x.N,x.z)},
xD(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.li(w.a,v,u,t,s,r,w.r,q,p,o,n)},
biN(d,e){var w=null
return this.xD(w,w,w,d,e,w,w,w,w)},
cVI(d,e,f,g,h,i,j){return this.xD(d,e,null,f,g,h,i,j,null)},
aIY(d,e){var w=null
return this.xD(w,w,w,w,d,w,w,e,w)},
cVK(d,e,f,g,h,i,j,k){return this.xD(d,e,null,f,g,h,i,j,k)},
cUa(d){var w=null
return this.xD(w,w,w,w,w,w,w,d,w)},
cUy(d){var w=null
return this.xD(w,w,w,w,w,w,w,w,d)},
bip(d){var w=null
return this.xD(w,w,d,w,w,w,w,w,w)},
aIG(d){var w=null
return this.xD(w,w,w,w,w,d,w,w,w)},
cVe(d,e,f){var w=null
return this.xD(w,d,w,w,e,w,w,f,w)},
cTY(d){var w=null
return this.xD(w,w,w,d,w,w,w,w,w)},
cUK(d,e){var w=null
return this.xD(d,w,w,w,w,w,e,w,w)}}
C.cKG.prototype={
a9(){return"WrapAlignment."+this.b}}
C.cKH.prototype={
a9(){return"WrapCrossAlignment."+this.b}}
C.aL4.prototype={}
C.bdH.prototype={
aj(d){this.a=d.a
this.b=d.b},
d4(d){var w=new C.bdH()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b7(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bdG.prototype={
gxu(){return!0},
gHB(){return this.z.b<this.b.length},
aZj(d){switch(0){case 0:return d.a.c}},
aZ_(d){switch(0){case 0:return d.a.d}},
bZY(d,e){switch(0){case 0:return new A.hZ(d,e)}},
bZl(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hq(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.jg(0,0,B.n.D(0,b5.a,b5.b),B.n.D(0,b5.c,b5.d))
return}w=A.IK(b4)
switch(0){case 0:v=b5.b
u=new A.lf(0,v,0,1/0)
t=w===B.X8
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fG(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hq(b4,u,!0)
f=b1.aZj(g)
f.toString
e=b1.aZ_(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aL4(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aL4(k,j,i))}d=s.length
switch(0){case 0:q=b5.cI(new A.hZ(m,l))
a0=q.a
a1=q.b
b1.a=new A.jg(0,0,a0,a1)
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
for(q=B.d.fG(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aZj(g)
e=b1.aZ_(g)
e.toString
a9=b1.bZl(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bZY(a6,a3+a9)
b0=g.a
g.a=new A.jg(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h3(d){var w,v,u,t,s,r=this
r.lN(d)
w=d.b
w.iG()
v=A.dB()
u=r.a
v.ek(u.a,u.b,0,1)
w.pL(0,v)
for(u=r.z,u=B.d.dr(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].h3(d)
w.nR(0)},
I8(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iG(){return this.z}}
C.bBM.prototype={}
var z=a.updateTypes(["az<~>()","P(id)","~()","P(li)","P(nR)","a9<o,@>(li)","F(li,li)","F(id,id)","o(id)","li(a9<@,@>)","P(m5)","nR(a9<@,@>)","a9<o,@>(nR)","P(vi)","vi()","F(id)","ah<id>()","P(A3)","a1q(Z)","o?(id)","eS<o?>(id)","az<~>(m5)","P(rP)","a9<o,@>(id)","id(a9<@,@>)","F(m5,m5)","P(ahy)","~(bh)","x(pb)","F(F,abv)","P(r4<F>)","~(r4<F>)","UZ(Z)","P(Nt)","P(vh)","~(id)","o(o)","Xj(Z)","UY(Z)","afS(Z)","a0h(Z)","id(id)","cS(bw<o,H9>)","cS(Lv)","a0O(Z)","F?(id)","id()","P(Lv)","C(id)","~(J0)","a0K(Z)","x(J0,o,a_)","P(ahr)","bw<o,ah<a9<o,@>>>(o,ah<nR>)","a0M(Z)","+count,id,name(F,o,o)(li)","o(li)","a1K(Z)","a1L(Z)","P(mp)","mp()","a_M(Z)","a3B(Z)","a0m(Z)","a0l(Z)","~(F)","~(o,lS?)","x(rP)","agc(Z)","~(lO)","az<~>([o?])","G(G,m5)","x(m5)","G(G,rP)","a9<o,@>(rP)","rP(a9<@,@>)","ah<lS>()","vh()","o(W)","m5(a9<@,@>)","cr(J_)","o(m5)","a9<o,@>(m5)","F(nR,nR)","li(a9<o,@>)","li(li)"])
C.h1f.prototype={
$1(d){return d.a+" "+d.b},
$S:126}
C.h1e.prototype={
bsi(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qZ(s,d,B.i7,"book",E.HP),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A.HZ(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bsi(d)},
$S:250}
C.h1g.prototype={
$1(d){return d.b},
$S:126}
C.hc4.prototype={
$1(d){var w=null
return A.eE(w,B.L,new H.Rj(this.a,this.b,w),w,w,0,B.a2u,w,B.db,w,w,w)},
$S:46}
C.fOj.prototype={
$1(d){return d!=null},
$S:238}
C.fOk.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:238}
C.fOp.prototype={
$1(d){if(this.a)return new A.m(d.a*520,d.b*160)
return d},
$S:138}
C.fZJ.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.ff(d,w,w,w,A.hn(w,B.uo,w,w,w,w,w,w,w,B.dK,w,w,10.5,w,B.eO,w,!0,w,w,w,w),w),u=f?B.eO:B.vw
return new A.oB(D.bGL,A.acj(A.a([new A.h7(130,w,v),new A.A2(1,B.Ii,A.ff(e,w,w,w,A.hn(w,g==null?D.eNJ:g,w,w,w,w,w,w,w,B.dK,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.zq,B.mf))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2027}
C.fZI.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.wv(999)
f=A.y3(A.mj(h,A.ff("Cashier",h,h,h,A.hn(h,D.Bm,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eO,h,!0,h,h,h,h),h),h,new A.lg(D.eNz,h,f,B.ip,h),h,h,D.bHe,h))
w=A.y3(A.ff("Debt receipt",h,h,h,A.hn(h,h,h,h,h,h,h,h,h,B.dK,h,h,22,h,B.eO,h,!0,h,h,h,h),h))
v=A.y3(A.ff(C.xK(new A.W(Date.now(),0,!1),!0),h,h,h,D.adn,h))
u=A.wv(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.ff(s,h,h,h,A.hn(h,h,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eO,h,!0,h,h,h,h),h)
r=A.ff("Person who owes",h,h,h,D.adn,h)
q=A.wv(10)
p=x.Z
u=A.mj(h,A.zV(A.a([s,new A.h7(h,2,h),r,new A.h7(h,10,h),A.mj(h,A.zV(A.a([A.ff("Amount owed",h,h,h,D.adn,h),new A.h7(h,2,h),A.ff(A.BO(t.c),h,h,h,A.hn(h,D.Bm,h,h,h,h,h,h,h,B.dK,h,h,20,h,B.eO,h,!0,h,h,h,h),h)],p),B.tC,B.mf),h,new A.lg(B.qu,h,q,B.ip,h),h,h,D.bGq,1/0)],p),B.tC,B.mf),h,new A.lg(E.aQf,h,u,B.ip,h),h,h,D.bIr,1/0)
q=new A.ok(D.eND,0.9,B.lw)
r=A.wv(12)
s=i.c
o=s.$2("Original due",C.xK(t.r,!1))
n=s.$2("Current due",C.xK(t.f,!1))
m=i.d
l=new A.ok(m,1.1,B.lw)
k=A.wv(8)
j=i.a
k=A.a([o,n,new A.h7(h,6,h),A.mj(h,A.y3(A.ff(t.gaQ5(),h,h,h,A.hn(h,m,h,h,h,h,h,h,h,B.dK,h,h,11,h,B.eO,h,!0,0.5,h,h,h),h)),h,new A.lg(h,new A.qm(l,l,l,l),k,B.ip,h),h,h,D.bHn,1/0),new A.h7(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Bm))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Bm))
else{n=A.ff("Missed days ("+n+")",h,h,h,A.hn(h,B.uo,h,h,h,h,h,h,h,B.dK,h,h,10.5,h,B.eO,h,!0,h,h,h,h),h)
m=A.T(o).k("O<1,Uy>")
o=A.B(new A.O(o,new C.fZH(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.h7(h,4,h),n,new A.h7(h,6,h),new C.bdG(5,5,new C.bdH(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h7(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h7(h,8,h),w,new A.h7(h,3,h),v,new A.h7(h,16,h),u,new A.h7(h,10,h),A.mj(h,A.zV(k,B.zq,B.mf),h,new A.lg(h,new A.qm(q,q,q,q),r,B.ip,h),h,h,B.aoq,1/0)],p)
w=j.a
if(w!=null){v=new A.ok(B.KT,1,B.lw)
B.d.u(f,A.a([new A.h7(h,16,h),A.ff("Debtor signature",h,h,h,A.hn(h,B.uo,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eO,h,!0,h,h,h,h),h),new A.h7(h,6,h),A.mj(h,new A.Jh(w,B.ZB,h,h),h,new A.lg(h,new A.qm(v,v,v,v),A.wv(6),B.ip,h),82,h,B.PV,1/0)],p))}f.push(new A.h7(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.ff(w,h,h,h,D.fOl,h))
f.push(new A.h7(h,18,h))
f.push(A.y3(A.ff("NGMY.ORG",h,h,h,A.hn(h,D.Bm,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eO,h,!0,1.8,h,h,h),h)))
return f},
$S:363}
C.fZH.prototype={
$1(d){var w=null,v=new A.ok(D.KU,0.7,B.lw),u=A.wv(999)
return A.mj(w,A.ff(C.xK(d,!1),w,w,w,A.hn(w,D.KU,w,w,w,w,w,w,w,B.dK,w,w,9.5,w,B.eO,w,!0,w,w,w,w),w),w,new A.lg(w,new A.qm(v,v,v,v),u,B.ip,w),w,w,D.bMR,w)},
$S:2028}
C.cbW.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.n(999),t=A.K(B.bC.j(0.28),B.r,1)
return A.q(w,A.c(C.xK(d,!1),w,w,w,w,w,w,D.fVH,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.m),w,w,w,w,B.f4,w,w,w)},
$S:2029}
C.hcC.prototype={
$1(d){var w=null,v=A.aE(d,B.bY,x.w).w,u=A.n(26),t=A.aI(w,w,w,w,D.c60,w,w,w,new C.hcz(d),w,w,w,w,w,B.cp),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eE(w,B.L,new A.cO(new A.aY(0,380,0,v.a.b*0.9),A.aF(!1,B.a3,!0,u,new A.C(B.a2f,A.w(A.a([new A.bH(B.a9,w,w,t,w),new A.d_(1,B.c9,A.cb(A.w(A.a([new A.ea(new C.b2u(r,w),s),B.S,A.A(A.a([A.E(A.eo(B.AB,w,D.hnC,new C.hcA(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fc,w,new A.bb(A.n(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.dg(B.a5I,w,D.hjR,new C.hcB(r,d),A.bp(B.b9,w,w,w,B.c,w,B.fc,w,new A.bb(A.n(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.ax,0,w,w,w,w,w,B.ai),w),w,w,0,B.a2J,w,B.db,w,w,w)},
$S:46}
C.hcz.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.hcA.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.bl$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lH(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hs),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eU(B.dM.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aD(q,p,"_")
if(o.length>32)o=B.a.av(o,0,32)
w=5
return A.b(A.rI(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.hcB.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h6m(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.M(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.hcu.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eE(w,B.ax,A.w(A.a([new A.C(D.bIf,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.mY,w,w,w),1),A.aI(w,w,w,w,B.lM,w,w,w,new C.hcs(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.d_(1,B.c9,new A.C(B.eG,A.bv(A.n(14),A.ha(t,B.z,w,w,B.cr,B.dE,!1,w,!1,w,w),B.ap),w),w),new A.C(B.PA,new A.a4(1/0,w,A.dg(B.on,w,D.b_Q,new C.hct(t,this.c,d),A.bp(B.b9,w,w,w,B.c,w,w,w,new A.bb(A.n(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.PM,w,B.db,w,new A.bb(v,B.a1),w)},
$S:46}
C.hcs.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.hct.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rI(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.hcG.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eE(w,B.ax,new A.C(D.bIn,A.w(A.a([A.A(A.a([D.bO2,A.aI(w,w,w,w,B.lM,w,w,w,new C.hcE(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.N,new A.ea(A.bv(A.n(14),A.q(w,A.b5(w,w,w,new C.bfZ(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ae,new A.a4(1/0,w,A.dg(B.on,w,D.b_Q,new C.hcF(t,s,d),A.bp(B.b9,w,w,w,B.c,w,w,w,new A.bb(A.n(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.db,w,new A.bb(v,B.a1),w)},
$S:46}
C.hcE.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.hcF.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.bl$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lH(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hs),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aD(r,q,"_")
if(p.length>32)p=B.a.av(p,0,32)
r=J.eU(B.dM.gaS(s))
w=5
return A.b(A.rI(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fTo.prototype={
$1(d){return d.a===this.a},
$S:266}
C.dX2.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dWO.prototype={
bru(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.eo:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dWR(s,q,e),p,!0,!0,!1,B.Bu,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dWS(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bru(d,e)},
$S:2030}
C.dWR.prototype={
$1(d){var w,v=null,u=this.c===B.y0,t=u?D.dEn:D.dzz
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.ax,v,v,v,v,v,v,v,v,15,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bl(!0,new A.C(B.ap_,A.w(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae,A.ie(!0,v,v,B.y,D.fEJ,new C.dWQ(this.a,w,t,d),t.length,v,B.eb,B.ah,!0)],x.p),B.al,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:28}
C.dWQ.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cZ.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.n(14)
if(q)u=B.cZ
else u=(t.b.a.d.a?B.bv:B.bl).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aN(!1,p,!0,A.q(B.z,C.b2t(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dWP(t.d,r),s,s,s,s,s,s,s)},
$S:154}
C.dWP.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.dWS.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dWM.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:89}
C.dWN.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cN(B.cn,e,v)
return new A.df(e,!1,A.iF(B.z,A.at(A.aF(!1,B.a3,!0,v,new A.ec(new C.dWL(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bk(t,new A.bq(0.96,1,u),u.k("bk<bT.T>"))),v)},
$S:34}
C.dWL.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.bY,x.w).w,i=l.b,h=i.a.d.a,g=h?B.eo:B.c,f=A.n(14),e=A.K((h?B.bv:B.bl).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,16,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.A(A.a([w,A.aN(!1,v,!0,new A.C(B.eH,A.V(B.cE,i.a.d.a?B.bv:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dWw(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aY9("Name")
r=l.a
q=r.d==null?k:new C.dWx(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bt:B.mt
n=A.K(B.cZ.j(0.35),B.r,1)
m=r.d
t=A.aO(k,B.M,h,k,!0,B.t,k,A.aP(),w,k,k,k,k,k,2,s.aIP(new A.C(B.eX,A.aN(!1,p,!0,A.q(B.z,C.b2t(m==null?"\ud83d\udc64":A.h_z(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a6),k,34,k,B.ct,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.lr,k,B.adc,k,k)
v=A.a([v,B.ae,t,B.N,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.aj,A.A(A.a([A.E(i.aYQ("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dWy(r,a0),r.d===B.y0),1),B.aa,A.E(i.aYQ("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dWD(r,a0),r.d===B.a9G),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.N,new A.bH(B.a5,k,k,A.hz(D.c4c,D.hlO,new C.dWE(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cZ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cp)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.vl(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aO(k,B.M,!1,k,!0,B.t,k,A.aP(),l.f,k,k,k,k,k,2,i.aYa("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.am,k,k,s,k,k,B.el,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.ao,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.K((t?B.bv:B.bl).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xK(r.a,!1)
v.push(A.aF(!1,B.a3,!0,q,A.aN(!1,p,!0,A.q(k,A.A(A.a([A.E(A.w(A.a([t,B.bs,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.i,0,B.p),1),D.c0G],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.m),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dWF(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.N,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aO(k,B.M,!1,k,!0,B.t,k,A.aP(),l.r,k,k,k,k,k,2,i.aY9("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.ao,k,k,k,k))
v.push(B.ae)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,12.5,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b6C(r.b.length!==0,B.mD,new C.dWG(r,i,a0),new C.dWH(r,a0),"Upload from gallery","ID photo"))
v.push(i.b6C(r.c.length!==0,D.bUG,new C.dWI(r,i,d,a0),new C.dWJ(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new As.aa8("Signature (optional)",t,new C.dWK(a0),new C.dWz(a0,t),new C.dWA(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bv:B.bl
s=(i?B.bv:B.bl).j(0.28)
s=A.E(A.dV(E.b_J,new C.dWB(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.rl,k,new A.bb(A.n(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cZ,k,k,k,B.c,k,B.rl,k,new A.bb(A.n(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bI(A.c(h?"Save":"Update",k,k,k,k,k,k,B.ws,k,k,k),k,new C.dWC(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.q(k,A.cb(A.w(v,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.m),k,k,k,B.ro,B.jF,k,k,360)},
$S:177}
C.dWw.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dWx.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dWy.prototype={
$0(){return this.b.$1(new C.dWv(this.a))},
$S:0}
C.dWv.prototype={
$0(){var w=this.a
w.d=B.y0
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dWD.prototype={
$0(){return this.b.$1(new C.dWu(this.a))},
$S:0}
C.dWu.prototype={
$0(){var w=this.a
w.d=B.a9G
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dWE.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dWF.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wr(null,u.b,A.c3(2020,1,1,0,0,0,0,0),null,s,A.c3(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dWt(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWt.prototype={
$0(){var w=this.b
return this.a.a=A.c3(w.gcl(),w.gci(),w.gcC(),0,0,0,0,0)},
$S:0}
C.dWG.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Rs(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dWs(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWs.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dWH.prototype={
$0(){return this.b.$1(new C.dWr(this.a))},
$S:0}
C.dWr.prototype={
$0(){return this.a.b=""},
$S:0}
C.dWI.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.eo:B.c
w=3
return A.b(A.bU(q,null,new C.dWp(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Rs(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dWq(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWp.prototype={
$1(d){var w=null
return A.bl(!0,A.w(A.a([A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.auE,w,w,w,w,new C.dWj(d),!1,w,w,w,w,w,w,w,D.hbH,w,w,w),A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.auC,w,w,w,w,new C.dWk(d),!1,w,w,w,w,w,w,w,D.hiO,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:28}
C.dWj.prototype={
$0(){A.a7(this.a,!1).N("camera")
return null},
$S:0}
C.dWk.prototype={
$0(){A.a7(this.a,!1).N("gallery")
return null},
$S:0}
C.dWq.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dWJ.prototype={
$0(){return this.b.$1(new C.dWo(this.a))},
$S:0}
C.dWo.prototype={
$0(){return this.a.c=""},
$S:0}
C.dWK.prototype={
$0(){return this.a.$1(new C.dWn())},
$S:0}
C.dWn.prototype={
$0(){},
$S:0}
C.dWz.prototype={
$0(){return this.a.$1(new C.dWm(this.b))},
$S:0}
C.dWm.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dWA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.akv(u.a,null,null,new C.dWl(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWl.prototype={
$4(d,e,f,g){this.a.$1(new C.dWi(this.b,d))},
$S:453}
C.dWi.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.u(w,this.b)},
$S:0}
C.dWB.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dWC.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.M(x.q).f.T(D.fJY)
return}if(w.a.d==null){w.c.M(x.q).f.T(D.fGN)
return}A.a7(w.c,!1).N(!0)},
$S:0}
C.dX5.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:89}
C.dX6.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.eo:B.c,n=A.n(14),m=A.K((p?B.bv:B.bl).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,16,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BO(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.Av(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.Av(r).length>0?B.bC:B.cZ,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bl
t=(q?B.bv:B.bl).j(0.28)
s=x.p
return new A.df(e,!1,A.at(A.aF(!1,B.a3,!0,r,A.q(r,A.w(A.a([p,B.N,v,u,B.aA,A.A(A.a([A.E(A.dV(B.oB,new C.dX3(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.jD,r,new A.bb(A.n(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bI(D.hjf,r,new C.dX4(d),A.bp(B.cZ,r,r,r,B.c,r,B.jD,r,new A.bb(A.n(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.m),r,r,r,B.zL,B.I0,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dX3.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dX4.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dX_.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dX0(r),p=r.a.d.a,o=p?B.eo:B.c,n=A.n(14),m=A.K((p?B.bv:B.bl).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.ax,s,s,s,s,s,s,s,s,14,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BO(l.c),s,s,s,s,s,s,D.fXj,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.jd((r.a.d.a?B.bv:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a4t,"View receipt",new C.dWT(r,d,l))
u=l.x!=null
t=u?B.qd:B.rv
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bIk,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dWU(r,d,l)),q.$3$icon$label$onTap(B.DM,"Edit",new C.dWV(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mD,"View / download ID",new C.dWW(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bUF,"View / download selfie",new C.dWX(r,d,l)))
if(l.gaKB())p.push(q.$3$icon$label$onTap(B.a5y,"View / download signature",new C.dWY(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.et,"Delete",new C.dWZ(r,d,l)))
p.push(B.at)
return A.bl(!0,new A.C(B.tM,A.q(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:28}
C.dX0.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.ax
else w=d
return A.aN(!1,v,!0,new A.C(B.f3,A.A(A.a([A.V(e,w,v,v,v,20),B.bd,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2031}
C.dWT.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.hcy(w,this.c)},
$S:0}
C.dWU.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.Uf(this.c)},
$S:0}
C.dWV.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.EF(this.c)},
$S:0}
C.dWW.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bJW(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dWX.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bJW(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dWY.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.hcD(w,this.c)},
$S:0}
C.dWZ.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.Rr(0,this.c)},
$S:0}
C.dX7.prototype={
$1(d){return d.x==null},
$S:266}
C.dX8.prototype={
$1(d){return d.x!=null},
$S:266}
C.dX9.prototype={
$2(d,e){return d+e.c},
$S:2032}
C.dXa.prototype={
$0(){return this.a.bHz()},
$S:0}
C.dX1.prototype={
$0(){return this.a.aix(this.b)},
$S:0}
C.fU8.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fU9.prototype={
$0(){return B.d.gH(D.a6R)},
$S:z+77}
C.dlU.prototype={
$0(){var w=this.a
return w.l(new C.dlS(w,this.b))},
$S:0}
C.dlS.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dlT.prototype={
$0(){},
$S:0}
C.dlV.prototype={
$0(){var w=this.a.gc6h()
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.fX3.prototype={
$1(d){return C.hBy(A.a1(d,x.N,x.z))},
$S:z+11}
C.fX4.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fX5.prototype={
$2(d,e){var w=A.c9(d.a,null),v=A.c9(e.a,null)
if(w!=null&&v!=null)return B.n.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.hb6.prototype={
$1(d){return d.ak()},
$S:z+12}
C.hjW.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fTf.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bVi.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eI(e,v)?v:null},
$S:2033}
C.hbI.prototype={
$1(d){var w=this
return new C.a0M(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dmz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dmy(w,d))},
$S:z+80}
C.dmy.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmn.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cM(u)?v.r>=J.aa(v.d):w)v.r=J.aa(v.d)-1},
$S:0}
C.dmk.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dlW.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dlX.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dmo.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dm4.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.I,u=v?B.eo:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bK(!1,B.dy,w,w,!0,w,w,w,new C.dm2(d),w,w),A.bI(B.ys,w,new C.dm3(d),A.bp(B.nT,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:17}
C.dm2.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dm3.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dm5.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.n.D(w.r-1,-1,999)},
$S:0}
C.dml.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dmm.prototype={
$0(){return B.d.gH(D.AN)},
$S:z+14}
C.dm0.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzP(0),t=J.aa(w.d)
w=J.aa(w.d)===1?"page":"pages"
return new C.UY(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dm1.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dm6.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a0h(v,u,J.aa(w.d),null)},
$S:z+40}
C.dm7.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmx.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a_W(r.y,r.gzP(0),J.aa(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dmv(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.aa(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bfj(v,e,w,u,t,r.gbYq(),C.hS8(r.y.Q),r.gzP(0),s)
w=t}return A.ca(q,new C.dmw(r,e),new A.C(B.a2A,w,s))},
$S:2034}
C.dmw.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd3(t).ay){t=this.b
u=x.cy.a(B.d.gd3(u.f.f)).gvT(0)
w=t-(u==null?t:u)}else w=0
v=B.h.D(w,-1,0)
u=A.dB()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fO(v*3.141592653589793*0.5)
return A.fJ(B.a5,A.d3(e,B.h.D(1+v*0.5,0,1)),null,u,!0)},
$S:47}
C.dmv.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aLN(B.rg,B.iQ)},
$S:0}
C.dmh.prototype={
$0(){var w=this.a
return w.l(new C.dmg(w))},
$S:0}
C.dmg.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dmi.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).N(null)
return null},
$S:0}
C.dlY.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kI.j(0.5),r=x.p,q=A.a([D.had,B.ae],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ci(p.d)?"Write this book":"Write a new book"
q.push(p.a0k(d,B.e9,w,J.ci(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a0k(d,K.asv,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cM(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cB,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.l6.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cB,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.l6.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a0k(d,X.atw,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a0k(d,B.pa,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a0k(d,B.pa,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eE(u,E.CU,A.bl(!0,new A.C(B.xj,A.w(q,B.B,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.PP,u,B.db,u,new A.bb(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.dmj.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.dma.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cM(w.d)
return new C.a0O(v,J.cM(w.d),w.r+1,null)},
$S:z+44}
C.dmb.prototype={
$1(d){var w=null
return A.pg(!1,A.em(w,w,w,E.CU,new A.km(this.a,new C.dm9(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:308}
C.dm9.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.acS,B.pu,A.E(A.c(e,w,w,w,w,w,w,B.jO,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:679}
C.dmc.prototype={
$0(){return this.a.a=!1},
$S:54}
C.dmd.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:208}
C.dme.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmf.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BV(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.TB(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.dm8(s,t))
w=4
return A.b(s.lp(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dm8.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmq.prototype={
$1(d){var w=null
return A.pg(!1,A.em(w,w,w,E.CU,new A.km(this.a,new C.dmp(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:308}
C.dmp.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.acS,B.pu,A.E(A.c(e,w,w,w,w,w,w,B.jO,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:679}
C.dmr.prototype={
$0(){return this.a.a=!1},
$S:54}
C.dms.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:208}
C.dmt.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:208}
C.dmu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BV(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lp(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dlZ.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.boh(B.rg,A4.Pn)},
$S:0}
C.dm_.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aLN(B.rg,A4.Pn)},
$S:0}
C.dol.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dom.prototype={
$1(d){var w=this.a
return w.l(new C.dok(w))},
$S:8}
C.dok.prototype={
$0(){return this.a.e="page"},
$S:0}
C.don.prototype={
$1(d){var w=this.a
return w.l(new C.doj(w))},
$S:8}
C.doj.prototype={
$0(){return this.a.e="book"},
$S:0}
C.doo.prototype={
$1(d){var w=this.a
return w.l(new C.doi(w))},
$S:8}
C.doi.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dop.prototype={
$0(){var w=this.a
return w.l(new C.doh(w,this.b))},
$S:0}
C.doh.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.doq.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga4t()
A.a7(this.b,!1).N(new A.bus(w,v))},
$S:0}
C.dmO.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dmN.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a0K(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dmS.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dmR.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bea(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hI,v,v,v)
return A.em(A.a([A.bK(!1,B.dy,v,v,!0,v,v,v,new C.dmP(d),v,v),A.bI(B.ys,v,new C.dmQ(d),A.bp(B.nT,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.CU,w,v,v,v,v,D.h8Z,v)},
$S:17}
C.dmP.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dmQ.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dmT.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dmU.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.cb(A.bX(B.bG,r,B.bq,t,18,14),B.t,t,B.y,t,t,D.bJj,t,t,B.ah)},
$S:299}
C.dmM.prototype={
$0(){return this.a.Si(0,this.b)},
$S:0}
C.dmL.prototype={
$0(){return this.a.RH(0,this.b)},
$S:0}
C.cU_.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cU0.prototype={
$0(){return B.d.gH(D.AN)},
$S:z+14}
C.cU1.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bS(0,new A.C(d,new A.bP(new A.p(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bn,w,w),w),0,0,0)},
$S:2036}
C.dd2.prototype={
$1(d){return this.a.l(new C.dd1(this.b,this.c))},
$S:8}
C.dd1.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ddr.prototype={
$1(d){return this.a.l(new C.dde())},
$S:2}
C.dde.prototype={
$0(){},
$S:0}
C.dds.prototype={
$1(d){return this.a.l(new C.ddd())},
$S:2}
C.ddd.prototype={
$0(){},
$S:0}
C.ddt.prototype={
$0(){var w=this.a
return w.l(new C.ddc(w,this.b))},
$S:0}
C.ddc.prototype={
$0(){var w=this.a
return w.d=w.goS().He(this.b.a)},
$S:0}
C.ddu.prototype={
$0(){var w=this.a
return w.l(new C.ddb(w,this.b))},
$S:0}
C.ddb.prototype={
$0(){var w=this.a
return w.d=w.goS().cTu(this.b)},
$S:0}
C.ddv.prototype={
$1(d){return this.a.l(new C.dda())},
$S:2}
C.dda.prototype={
$0(){},
$S:0}
C.ddw.prototype={
$0(){var w=this.a
return w.l(new C.dd9(w,this.b))},
$S:0}
C.dd9.prototype={
$0(){var w=this.a
return w.d=w.goS().cTz(this.b.a)},
$S:0}
C.ddx.prototype={
$1(d){var w=this.a
return w.l(new C.ddm(w,d))},
$S:6}
C.ddm.prototype={
$0(){var w=this.a
return w.d=w.goS().cUt(this.b)},
$S:0}
C.ddy.prototype={
$1(d){var w=this.a
return w.d=w.goS().aIK(d)},
$S:2}
C.ddz.prototype={
$1(d){var w=this.a
return w.d=w.goS().cTC(d)},
$S:2}
C.ddB.prototype={
$1(d){var w=this.a
return w.d=w.goS().cUr(d)},
$S:2}
C.ddC.prototype={
$1(d){var w=this.a
return w.l(new C.ddl(w,d))},
$S:8}
C.ddl.prototype={
$0(){var w=this.a
return w.d=w.goS().cUi(this.b)},
$S:0}
C.ddD.prototype={
$0(){var w=this.a,v=w.goS(),u=B.a.i(w.gzP(0).a.a),t=B.a.i(w.gaFQ().a.a)
u=v.biX(B.a.i(w.gav8().a.a),t,u)
A.a7(this.b,!1).N(u)
return null},
$S:0}
C.bVs.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bVm.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bVl(w,d))},
$S:10}
C.bVl.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a2(0)}},
$S:0}
C.bVv.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bVn.prototype={
$0(){var w=this.a
w.Q=D.b5i
w.ag0(1)
w.r.x=null},
$S:0}
C.bVo.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b5i)return
w=new A.e7()
w.cW(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.dcb[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bVr.prototype={
$0(){var w=this.a
w.Q=D.afz
w.ag0(2)
w.r.z=null},
$S:0}
C.bVq.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.i3K
t.ag0(3)
w=t.r
w.d=s
w.x="I say: "+t.gDw()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.djG[v.aw(4)]:D.dHf[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bVt.prototype={
$0(){var w=this.a
w.Q=D.b5j
w.CW=this.b
w.cy=1
w.ag0(4)
w.r.f=w.f.a+5},
$S:0}
C.bVu.prototype={
$0(){},
$S:0}
C.bVp.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.bVj.prototype={
$0(){return this.a.Mq(this.b)},
$S:0}
C.bVk.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.bWZ.prototype={
$0(){var w=this
return w.a.SB(w.b,0,w.c,w.d)},
$S:0}
C.bX_.prototype={
$0(){var w=this
return w.a.SB(w.b,3,w.c,w.d)},
$S:0}
C.bX0.prototype={
$0(){var w=this
return w.a.SB(w.b,1,w.c,w.d)},
$S:0}
C.bX1.prototype={
$0(){var w=this
return w.a.bXR(w.b,w.c,w.d)},
$S:0}
C.bX2.prototype={
$0(){var w=this
return w.a.SB(w.b,4,w.c,w.d)},
$S:0}
C.bX3.prototype={
$0(){var w=this
return w.a.SB(w.b,2,w.c,w.d)},
$S:0}
C.bX4.prototype={
$0(){var w=this
return w.a.SB(w.b,5,w.c,w.d)},
$S:0}
C.bX5.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:661}
C.bWY.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a84[d],p=q.a.a6(0,new A.m(0,-q.b*1.2*124)),o=A.h2(r,B.cK,r,3,r,A.cX(r,r,r,r,r,r,r,r,r,D.fO0,e),B.a8,B.cb,r,B.e6,B.cc)
o.nM(130)
w=o.b.a.c
w=p.aI(0,new A.m(0,w.gb4(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bx(A.c1(w,v.gb4(v)+12,u+18),B.im)
u=this.a
v=t.eN(B.dP)
w=$.U()
s=A.M()
s.r=B.dH.gp(0)
u.aq(v,s)
s=A.M()
s.r=D.r5.gp(0)
u.aq(t,s)
w=new A.aJ(w.r,B.ak,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.b_(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bz())
v=A.M()
v.r=D.r5.gp(0)
u.af(w,v)
o.a5(u,new A.m(t.a+9,t.b+6))},
$S:658}
C.bVJ.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.bVK.prototype={
$2(d,e){var w=this.a,v=B.n.aQ(w.aoR(d),w.aoR(e))
if(v!==0)return v
return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.fGV.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.hjM.prototype={
$2(d,e){if(e!=null)J.bV(this.a.c0(0,d,new C.hjN()),e)},
$S:z+66}
C.hjN.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.hjO.prototype={
$1(d){return d!==this.a},
$S:3}
C.hjP.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hjQ.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hjL(this.c,d))},
$S:3}
C.hjL.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hjR.prototype={
$1(d){return d!==this.a},
$S:3}
C.hjS.prototype={
$1(d){return d!==this.a},
$S:3}
C.hjT.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hjK(this.c,d))},
$S:3}
C.hjK.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fUM.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.aa(w)>this.a.a},
$S:3}
C.ha0.prototype={
$1(d){return d.Q},
$S:z+15}
C.ha1.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fQB.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fY_.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bQu.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hkc.prototype={
$2(d,e){return B.n.aQ(C.hNW(d),C.hNW(e))},
$S:234}
C.hkd.prototype={
$1(d){return d!==this.a},
$S:3}
C.haD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bOC.prototype={
$0(){var w=this.a
w.ch=!0
w.bcm()},
$S:0}
C.bOx.prototype={
$0(){},
$S:0}
C.bOD.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bOv.prototype={
$0(){},
$S:0}
C.bOw.prototype={
$0(){},
$S:0}
C.bOB.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b5(u,u,u,new C.bg0(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.n(14)
s.push(A.ao(u,A.q(u,A.c(t.dy,u,u,u,u,u,u,D.fVT,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.m),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.aA(B.c0,new A.am(B.a0,u,B.ac,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bOy(t,e),u,u,u,u,u,u,u,new C.bOz(t,e),u,u,u,u,u,u,u,u,u,new C.bOA(t,e),u,u,u,u,!1,B.a4)},
$S:35}
C.bOy.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bOA.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bOz.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bOu.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.cuJ.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cuK.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cuI(w))},
$S:0}
C.cuI.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cuL.prototype={
$0(){var w=this,v=w.a
v.gja()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cuM.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cuN.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cuO.prototype={
$0(){},
$S:0}
C.cuP.prototype={
$0(){var w=this.a
w.z=w.YO(++w.e)
w.Q=A.c4(w.gl_()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cuF.prototype={
$0(){return A.a7(this.a,!1).i2()},
$S:0}
C.cuG.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gja().length,e=i/2,d=new C.cuH(i,f,h),a0=g.as,a1=A.a3(a0).k("ba<2>")
a0=A.B(new A.ba(a0,a1),a1.k("L.E"))
a0=A.bS(0,A.ca(new A.hC(a0),new C.cuA(g,new A.m(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gja().length!==0&&!B.d.q(g.gja(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.RD(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cS(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new T.NC(new C.cuB(g,u),new C.cuC(g,u),new C.cuD(g,u),j,j,new A.b9("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fs:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gja().length!==0&&!B.d.q(g.gja(),-1)){a0=g.e+1>=g.gl_().length?"See my result":"Next family"
g=A.at(C.uS(a0,g.gqI(g),B.d0,B.jH,D.fN),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.YO(0):s).length))break
if(!B.d.q(g.gja(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.YO(0)
o=s}else o=s
n=s[u]
n=A.e0(B.z,new C.RD(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.YO(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rx(new A.bq(0,p,t),new C.cuE(),new T.EX(u,j,new C.RD(l.b,k,62,!1,j),new A.l2(0.25,new C.RD(m.b,k,62,!1,j),j),new A.kv(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,T.hS0(),!0,!0,j,j,j,j,j,j,!1,B.j6,j,new A.b9("chip-"+r,a0),w),B.b1,B.j5,j,new A.b9("t"+r+"-"+q,a0),v))}++u}g=A.bX(B.fL,a1,B.bq,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.am(B.a0,j,B.ac,B.t,e,j)},
$S:63}
C.cuH.prototype={
$1(d){return new A.m(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:733}
C.cuA.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gja().length!==0&&!B.d.q(t.gja(),-1)
return A.b5(p,p,p,new C.bfs(q.b,o,v,w,p),B.az)},
$S:52}
C.cuC.prototype={
$1(d){return this.a.gja()[this.b]===-1},
$S:z+30}
C.cuD.prototype={
$1(d){return this.a.cXo(this.b,d.a)},
$S:z+31}
C.cuB.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gja()[t]!==-1,r=A.n(18),q=e.length!==0?B.d0.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.d0:B.jX,B.r,2)
u=s?A.l5(new C.cuz(),A.at(new C.RD(u.gaIa()[u.gja()[t]].b,u.gaIa()[u.gja()[t]].a,62,!1,v),v,v,v),B.n4,B.j5,v,v,new A.bq(0.3,1,x.X),x.i):D.bgA
return A.cZ(v,u,v,v,B.b1,new A.p(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2039}
C.cuz.prototype={
$3(d,e,f){return A.e0(B.z,f,e,null,null)},
$S:111}
C.cuE.prototype={
$3(d,e,f){return A.dQ(f,new A.m(Math.sin(e*24)*8*(1-e),0))},
$S:111}
C.cV3.prototype={
$1(d){return d>=1},
$S:124}
C.cJE.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gl_()[w.e].d.length)w.l(new C.cJD(w))},
$S:10}
C.cJD.prototype={
$0(){return this.a.f++},
$S:0}
C.cJM.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cJN.prototype={
$0(){var w=this.a,v=this.b
w.z.K(0,v)
w.Q=v},
$S:0}
C.cJO.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cJL(w))},
$S:0}
C.cJL.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cJP.prototype={
$0(){return this.a.f++},
$S:0}
C.cJQ.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cJR.prototype={
$0(){},
$S:0}
C.cJS.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a7(0)
w.as=!1
w.ay=0},
$S:0}
C.cJG.prototype={
$0(){return A.a7(this.a,!1).i2()},
$S:0}
C.cJH.prototype={
$3(d,e,f){var w=null
return A.l5(new C.cJF(this.a,e),w,B.b1,B.hB,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:2040}
C.cJF.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.d0.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.ic(new A.C4(new A.vf(B.v.j(e),B.Nb,v,B.a_3),H.c0e(A.b5(v,v,v,new C.aDH(u.gl_()[u.e].c,u.as,v),B.az),new A.F1(w,w,B.XX)),v),B.ap),B.f,v,v,new A.p(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2041}
C.cJI.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,14*(1-e))),e)},
$S:95}
C.cJJ.prototype={
$3(d,e,f){return A.dQ(f,new A.m(Math.sin(e*22)*8*(1-e),0))},
$S:111}
C.cJK.prototype={
$0(){return this.a.btP(this.b)},
$S:0}
C.fiC.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.apo$)
v.apo$=w
v.qw$.sp(0,w)
v.atk(u)},
$S:7}
C.ft1.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a2(0)
w.a.$0()},
$S:10}
C.bWu.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bWt())},
$S:0}
C.bWt.prototype={
$0(){},
$S:0}
C.bWr.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bWp.prototype={
$0(){},
$S:0}
C.bWq.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gO2()
w=s+1>=r.length?3:5
break
case 3:q=C.bK9(p.gasa(0),0,r.length)
p.l(new C.bWm(p,q))
o=p
w=6
return A.b(C.Cf(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Cg(s.d,s.c.a,"school",p.gasa(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bWn())
w=4
break
case 5:p.l(new C.bWo(p))
p.gqQ().Xl(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bWm.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bWn.prototype={
$0(){},
$S:0}
C.bWo.prototype={
$0(){return this.a.x++},
$S:0}
C.bWs.prototype={
$0(){return this.a.Mq(this.b)},
$S:0}
C.bWl.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.fiD.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.m(t,s),q=v.b,p=v.d,o=p?C.hSe(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Fo
C.Tz(q,D.eGR,0,0.2,-0.6,-0.2,null,w,D.eFA,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a6(0,new A.m(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.U()
p=A.M()
p.r=D.Hr.gp(0)
p.c=3
p.d=B.bH
q.ah(new A.m(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fiE.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Tz(this.a,D.eFX,0,u,0.7,-0.5,null,null,D.KN,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fiF.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Tz(this.a,D.eHE,0,0,0.8,-0.5,null,null,D.KN,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fiG.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Tz(w.b,D.eGL,0,v,-0.8,-0.5,null,null,D.KN,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fiH.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.m(34,-122+Math.sin(w*5)*5)
else v=v?D.eGP:D.Fo
C.Tz(p,D.eGf,0,t,0,-0.6,null,v,D.KN,3,0,s,1.3,u,0,w,0)
q=q.cgI(new A.m(222,455),9)
$.U()
w=A.M()
w.r=B.d0.gp(0)
p.af(q,w)},
$S:0}
C.fiI.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:661}
C.bW7.prototype={
$2(d,e){return d+e},
$S:61}
C.bWi.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bWj.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bWk.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gja()[u.b]=s
t.gja()[u.d]=t.y
w=t.as
v=t.qw$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bWe.prototype={
$1(d){return d},
$S:96}
C.bWd.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qw$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bWf.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bWg.prototype={
$0(){},
$S:0}
C.bWh.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.GI(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.c8(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a7(0)},
$S:0}
C.bW9.prototype={
$0(){return A.a7(this.a,!1).i2()},
$S:0}
C.bWa.prototype={
$2(d,e){var w=this.a
w=w.gl_()[w.f].e
return B.n.aQ(w[d],w[e])},
$S:61}
C.bWb.prototype={
$2(d,e){var w=null,v=C.hse(new A.av(A.aU(1/0,e.a,e.b),A.aU(1/0,e.c,e.d))),u=this.a
return A.aA(B.c0,new A.ea(A.b5(w,w,w,new C.bmM(u,u.qw$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bW8(u,v),w,w,w,w,!1,B.a4)},
$S:35}
C.bW8.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gja().length
u=B.n.D(B.h.ba((t.a-s.a)/r/450*v),0,v-1)
w.d7p(w.gja()[u])}},
$S:24}
C.bWc.prototype={
$1(d){var w=this.a
return w.gl_()[w.f].d[d]},
$S:80}
C.dxV.prototype={
$2(d,e){return 0},
$S:61}
C.bVU.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bVT())},
$S:0}
C.bVT.prototype={
$0(){},
$S:0}
C.bVS.prototype={
$0(){},
$S:0}
C.bVM.prototype={
$0(){},
$S:0}
C.bVN.prototype={
$0(){},
$S:0}
C.bVR.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.C6},
$S:0}
C.bVQ.prototype={
$1(d){var w=null,v=this.a.gqQ(),u=A.c(d,w,w,w,w,w,w,D.aZf,w,w,w),t=v.gbq8(0)
return A.aA(B.c0,A.w(A.a([u,B.bs,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aZt,w,w,w)],x.p),B.B,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbwa(v),w,w,w,w,w,w,!1,B.a4)},
$S:121}
C.bVO.prototype={
$0(){return this.a.Mq(this.b)},
$S:0}
C.bVP.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.bVL.prototype={
$0(){return A.a7(this.a,!1).i2()},
$S:0}
C.e8Q.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e8R.prototype={
$1(d){return this.a},
$S:43}
C.e8S.prototype={
$0(){var w=this.a
return w.d=w.gUh().bip(this.b)},
$S:0}
C.e8O.prototype={
$1(d){return new C.UZ(this.a,null)},
$S:z+32}
C.e8P.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e8N.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hI,w,w,w)
return A.em(A.a([A.bK(!1,E.b_T,w,w,!0,w,w,w,new C.e8L(d),w,w),A.bK(!1,D.hgF,w,w,!0,w,w,w,new C.e8M(d),w,w)],x.p),w,w,D.fN,v,w,w,w,w,D.h2V,w)},
$S:17}
C.e8L.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e8M.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e8K.prototype={
$0(){var w=null,v=this.a.c.M(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e8T.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e8U.prototype={
$0(){var w=this.a,v=this.b,u=C.bHQ(v,10,w.r,!1)
return w.v2(C.hBz(w.a.d,"kahoot",u,w.gb9R(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e8V.prototype={
$0(){var w=this.a
return w.v2(new C.anO(this.b,w.a.d,w.r,null))},
$S:0}
C.e8W.prototype={
$0(){var w=this.a
return w.v2(new C.alW(this.b,w.a.d,w.r,null))},
$S:0}
C.e8Z.prototype={
$0(){var w=this.a
return w.v2(new C.awT(this.b,w.a.d,w.r,null))},
$S:0}
C.e9_.prototype={
$0(){var w=this.a
return w.v2(new C.aAP(this.b,w.a.d,w.r,null))},
$S:0}
C.e90.prototype={
$0(){var w=this.a
return w.v2(new C.anR(this.b,w.a.d,w.r,null))},
$S:0}
C.e91.prototype={
$0(){var w=this.a
return w.v2(new C.anV(this.b,w.a.d,w.r,null))},
$S:0}
C.e92.prototype={
$0(){var w=this.a
return w.v2(new C.anX(this.b,w.a.d,w.r,null))},
$S:0}
C.e93.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d7S()
return v.v2(C.hBz(v.a.d,"creator_"+u.a,w,v.gb9R(),"A game by the family",t,this.c.a))},
$S:0}
C.e94.prototype={
$0(){return this.a.Q7(this.b)},
$S:0}
C.e95.prototype={
$0(){return this.a.Zf(0,this.b)},
$S:0}
C.e8X.prototype={
$0(){return this.a.Q7(null)},
$S:0}
C.e8Y.prototype={
$0(){return this.a.M(x.q).f.T(D.fGT)},
$S:0}
C.bW5.prototype={
$0(){var w=this.a
w.d=D.b4o
w.z=3},
$S:0}
C.bW6.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a2(0)
w.aSJ()}else w.l(new C.bW4(w))},
$S:10}
C.bW4.prototype={
$0(){return this.a.z--},
$S:0}
C.bVW.prototype={
$0(){var w=this.a
w.d=D.aff
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bVX.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bVV(w))
if(w.as<=0){d.a2(0)
w.b9N(-1)}},
$S:10}
C.bVV.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bW1.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.YD},
$S:0}
C.bW2.prototype={
$0(){return this.a.e++},
$S:0}
C.bVZ.prototype={
$0(){var w=this.a
w.d=D.b4p
w.ay=this.b},
$S:0}
C.bW_.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bW3.prototype={
$2(d,e){return B.n.aQ(e.b,d.b)},
$S:2042}
C.bW0.prototype={
$0(){return this.a.Mq(this.b)},
$S:0}
C.bVY.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.bVw.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ay()
s=A.a([new A.au(new A.bd(s,B.bb,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bd(u,B.bb,B.aP),r))}return s},
$S:2043}
C.bVx.prototype={
$0(){return this.a.gE7().c.push(C.hlS(null,0,20,""))},
$S:0}
C.bVH.prototype={
$1(d){var w=null
return A.bB(w,new A.b6(4,A.n(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dA,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.FV,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:260}
C.bVG.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gE7().c,m=this.b,l=n[m],k=o.ck_(l),j=B.c.j(0.06),i=A.n(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.M6,p,p,p),B.aY],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.aup,p,p,p,new C.bVB(o,m),p,p,p,p,p,p))
n=J.a0(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aO(p,B.M,!1,p,!0,B.t,p,A.aP(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bVC(l),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a8,p,B.ao,p,p,p,p),B.N],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aGy[v]
t=D.aGe[v]
s=v+1
f.push(new A.C(B.ez,new A.c_(B.aJ,B.e,B.i,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.H(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bu(1,B.ba,A.aO(p,B.M,!1,p,!0,B.t,p,A.aP(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bVD(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a8,p,B.ao,p,p,p,p),p),new Aw.Qe(v,l.c,new C.bVE(o,l),p,!1,D.m_,p,p,p,p,p,!1,!1,p,I.b56,p,p,p,p,p,w)],g),p),p))}f.push(D.h8E)
f.push(B.aj)
n=A.a([D.h1Z,B.aa],g)
for(r=0;r<3;++r){q=D.ckF[r]
n.push(new A.C(B.eX,A.iy(p,p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bVF(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.q(p,A.w(f,B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.m),p,p,p,B.kM,B.bg,p,p,p)},
$S:157}
C.bVB.prototype={
$0(){var w=this.a
return w.l(new C.bVA(w,this.b))},
$S:0}
C.bVA.prototype={
$0(){return B.d.cP(this.a.gE7().c,this.b)},
$S:0}
C.bVC.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bVD.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bVE.prototype={
$1(d){return this.a.l(new C.bVz(this.b,d))},
$S:158}
C.bVz.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bVF.prototype={
$1(d){return this.a.l(new C.bVy(this.b,this.c))},
$S:8}
C.bVy.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eav.prototype={
$0(){var w=this.a
w.x5()
w.a.bx()
w.a.qJ()},
$S:0}
C.eau.prototype={
$0(){var w=this.a
w.x5()
w.a.bx()
w.a.qJ()},
$S:0}
C.eax.prototype={
$0(){var w=this,v=w.b
if(J.cM(v)||J.ci(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.eay.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eaz.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eat.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.eaw.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.eaB.prototype={
$0(){this.a.Qt()
return null},
$S:0}
C.eaA.prototype={
$0(){return this.a.G1(this.b)},
$S:0}
C.e9W.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.dy,w,w,!0,w,w,w,new C.e9U(d),w,w),r=A.bp(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bI(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e9V(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:17}
C.e9U.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e9V.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e9X.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cTY(this.b)},
$S:0}
C.e9R.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aYq(w.b,w.c,w.d)},
$S:7}
C.e9i.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e9j.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e9A.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HT(t.a.c),$async$$0)
case 2:s=r.nU(q.dO(e,new C.e9y(t)))
if(s!=null&&t.c!=null)t.l(new C.e9z(t,s))
t.a.bx()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e9y.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e9z.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e9B.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e9C.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e9Q.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cUK(C.hSo(w),w)},
$S:0}
C.e9x.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.Xj(u,w,C.aTs(u,w),new C.e9w(v),null)},
$S:z+37}
C.e9w.prototype={
$1(d){return this.brB(d)},
brB(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e9v(s,d))
w=3
return A.b(s.uZ(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:799}
C.e9v.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bip(this.b)},
$S:0}
C.e9N.prototype={
$1(d){return d.as},
$S:z+1}
C.e9O.prototype={
$1(d){var w=this
return new A.ec(new C.e9M(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e9M.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.eo:B.c,h=A.n(26),g=A.K(B.bU.j(0.5),B.r,1.5),f=A.q(k,D.bZR,B.f,k,k,new A.p(B.bU.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.w(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bd,a0,A.aI(k,k,k,k,A.V(B.cE,j?B.bv:B.bl,k,k,k,k),k,k,k,new C.e9G(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bU:B.bU.j(0.1)
p=new A.aQ(20,20)
o=t.a===r
n=new A.ax(B.bU,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bU
a0.push(A.aA(k,A.cZ(k,A.c(m,k,k,k,k,k,k,new A.H(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b1,new A.p(q,k,new A.bE(n,n,n,n),new A.bc(p,p,p,p),k,k,B.m),B.ho,k,k,k,k,B.Dp,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e9H(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bX(B.bG,a0,B.bq,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.cbm,new A.C(D.bJJ,f,k),new A.C(D.bJA,e,k),new A.C(B.ro,a0,k),new A.C(X.apw,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.V(Al.ash,j?B.bv:B.bl,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.C(D.bJC,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,k,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.azz(k,B.bU,k,k,!1,B.y,k,k,k,k,k,k,new C.e9I(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aA)
j=A.n(20)
e=A.a([new A.ac(0,B.G,B.aB.j(0.35),B.hS,12)],x.V)
f.push(A.aA(k,A.q(k,A.A(A.a([D.h2k,B.bd,D.bNZ,D.c_x],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.cf9,B.m),k,k,k,B.ih,B.bD,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e9J(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.C(B.xk,A.A(A.a([A.E(A.dV(B.dy,new C.e9K(a1),k),1),B.ar,A.E(A.bI(N.b0k,k,new C.e9L(t,a1),A.bp(B.bU,k,k,k,k,k,B.cq,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bl(!0,A.q(k,A.cb(A.w(f,B.B,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.ap,k,k,new A.p(i,k,g,h,k,k,B.m),k,k,k,B.zA,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:88}
C.e9G.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e9H.prototype={
$0(){return this.b.$1(new C.e9F(this.a,this.c))},
$S:0}
C.e9F.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e9I.prototype={
$1(d){var w=this.a
w.l(new C.e9D(w,d))
this.b.$1(new C.e9E())},
$S:8}
C.e9D.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e9E.prototype={
$0(){},
$S:0}
C.e9J.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aJW(!0,w))
return null},
$S:0}
C.e9K.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e9L.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aJW(!1,w))
return null},
$S:0}
C.e9P.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cUy(this.b.b)
w.r.a7(0)},
$S:0}
C.e96.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.akG(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hKS(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e97.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aIG(w)},
$S:0}
C.e9Z.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.afS(this.b,w,this.c,null)},
$S:z+39}
C.e9T.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.eo:B.c,t=A.n(20),s=A.V(B.kR,B.aZ,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.ae,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.w(p,B.l,w,B.e,B.P,0,B.p)
return A.em(A.a([A.bI(D.hkx,w,new C.e9S(d),A.bp(B.aZ,w,w,w,w,w,w,w,w,w,w,w))],o),B.bc,w,u,v,w,s,w,new A.bb(t,B.a1),r,w)},
$S:17}
C.e9S.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e98.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e99.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e9a.prototype={
$1(d){return d.a},
$S:z+8}
C.e9b.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.id(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aIG(w)},
$S:0}
C.e9f.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.akG(q)
w=A.T(q).k("X<1>")
q=A.B(new A.X(q,new C.e9d(r),w),w.k("L.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hKS(v.e,null,r,v.f,v.r,new C.e9e(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e9e.prototype={
$0(){return this.a.ad6(this.b)},
$S:0}
C.e9d.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e9g.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.T(w).k("O<1,id>")
w=A.B(new A.O(w,new C.e9c(this.b),v),v.k("aj.E"))
u.d=t.aIG(w)},
$S:0}
C.e9c.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e9Y.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e9s.prototype={
$1(d){return d.length!==0},
$S:3}
C.e9t.prototype={
$1(d){var w=this
return new A.ec(new C.e9r(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e9r.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.eo:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ae],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e9n(u,e,o),A.T(o).k("O<1,x>")))
p.push(B.N)
u=w.d
p.push(A.aO(v,B.M,!1,v,!0,B.t,v,A.aP(),u,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.n(12),B.dz),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.am,v,v,v,v,v,B.mV,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a8,v,B.ao,v,v,v,v))
p=A.w(p,B.al,v,B.e,B.P,0,B.p)
t=w.a
return A.em(A.a([A.bK(!1,B.dy,v,v,!0,v,v,v,new C.e9o(d),v,v),A.bI(B.Mi,v,new C.e9p(t,u,o,e),A.bp(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.h6Z,v,new C.e9q(t,u,o,d),A.bp(B.aZ,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:227}
C.e9n.prototype={
$1(d){var w=null
return A.dP(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c89,w,w,w,new C.e9m(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2044}
C.e9m.prototype={
$0(){return this.a.$1(new C.e9k(this.b,this.c))},
$S:0}
C.e9k.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e9o.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e9p.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e9l(w.c,u))
v.bN(0,B.ck)}},
$S:0}
C.e9l.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e9q.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).N(!0)},
$S:0}
C.e9u.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cVe(this.b,D.vu,C.HR(v,w.a.c))},
$S:0}
C.ea5.prototype={
$1(d){return d.as},
$S:z+1}
C.ea6.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j8(this.b,w)},
$S:0}
C.ea7.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iKT(v)
return w.Y1(v==null?null:v.a)},
$S:0}
C.ea8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.ikS(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gco(k)){k=A.aU(1/0,e.a,e.b)
s=A.aU(1/0,e.c,e.d)
l.cBZ(new A.av(u,t),v.gbp8(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d9H:D.d7y
q=A.K(s?B.dA:D.box,B.r,1)
p=A.n(22)
o=A.bS(0,A.b5(m,m,m,new C.biO(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.bv(p,new A.am(B.a0,m,B.ac,B.t,A.a([o,A.bS(0,A.u8(new A.R(n,n,n,n),new A.a4(u,t,new C.bjL(l.d,v,l.f,w,new C.ea1(l),l.gclb(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bBT(s,new C.ea2(l,e),new C.ea3(l,e),new C.ea4(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.p(m,m,q,k,m,new A.a6(B.aW,B.b0,B.w,r,m,m),B.m),m,m,m,S.aov,m,m,m,m)},
$S:179}
C.ea1.prototype={
$1(d){var w=this.a
w.l(new C.ea_(w,d))},
$S:2}
C.ea_.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.K(0,v)},
$S:0}
C.ea2.prototype={
$0(){var w=this.b
return this.a.bgv(1.25,new A.av(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.ea3.prototype={
$0(){var w=this.b
return this.a.bgv(0.8,new A.av(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.ea4.prototype={
$0(){var w=this,v=w.b
return w.a.aYq(new A.av(A.aU(1/0,v.a,v.b),A.aU(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbp8())},
$S:0}
C.ea9.prototype={
$0(){var w=this.a
return w.l(new C.ea0(w))},
$S:0}
C.ea0.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e9h.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fS(new A.fG(s.c)),$async$$0)
case 2:t.zd("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dmY.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bnD(u,C.hXj(v.c,u),new C.dmX(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dmX.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dmZ.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.br1(d.d,d.c,u.f.q(0,d.a),new C.dmW(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dmW.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fUc.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nU(new A.cQ(new A.X(v,new C.fUd(d),w.k("X<1>")),new C.fUe(),w.k("cQ<1,o>")))},
$S:z+19}
C.fUd.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fUe.prototype={
$1(d){return d.a},
$S:z+8}
C.fUa.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fUb.prototype={
$1(d){return d.b},
$S:z+8}
C.fUh.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nU(new A.cQ(new A.X(v,new C.fUi(d),w.k("X<1>")),new C.fUj(),w.k("cQ<1,o>")))},
$S:z+19}
C.fUi.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fUj.prototype={
$1(d){return d.a},
$S:z+8}
C.fUf.prototype={
$1(d){var w,v=A.eB([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fUg.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dn0.prototype={
$0(){return this.a},
$S:z+46}
C.dnh.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:253}
C.dn9.prototype={
$2(d,e){var w=this.a.c0(0,d,new C.dna()),v=J.a0(w)
if(!v.q(w,e))v.K(w,e)},
$S:120}
C.dna.prototype={
$0(){return A.a([],x.s)},
$S:652}
C.dn8.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eI(w,e)
return w===!0},
$S:252}
C.dn1.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dn7.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dn6.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aM(v==null?D.EH:v)
u=1
while(v.A())u+=s.$2(v.gO(v).a,e)
v=s.b.h(0,d)
v=J.aM(v==null?B.M:v)
while(v.A()){t=v.gO(v)
if(e.q(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aM(t==null?D.EH:t)
while(t.A())u+=s.$2(t.gO(t).a,e)}return u},
$S:2046}
C.dn2.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dnb.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.K(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aM(u==null?B.M:u)
t=v.d
for(;;){if(!u.A()){s=null
break}A:{s=u.gO(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.K(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.u(w,r)
if(u){t=t.h(0,s)
t=J.aM(t==null?D.EH:t)
while(t.A()){r=t.gO(t)
if(r.a!==a9&&!B.d.aR(w,new C.dnc(r)))w.push(r)}}B.d.bs(w,new C.dnd(a8))
B.d.b_(w,new C.dne())
q=C.ikR(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.fe7],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bua(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2047}
C.dnc.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dnd.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dne.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.dnf.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a0(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.ba(v,A.a3(v).k("ba<2>")).cH(0,0,B.oG)+88-w.gH(n).a}else u=0
for(w=J.a0(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:775}
C.dng.prototype={
$1(d){return 16+d*156},
$S:159}
C.dn_.prototype={
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
t.n(0,d,new C.H9(r,new A.m(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.H9(s,new A.m(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.H9(s,new A.m(e,v)))}t=o.r.h(0,d)
t=J.aM(t==null?B.M:t)
s=o.w
while(t.A()){r=t.gO(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Lv(d,new A.m(e+t,w),s,s.length))}},
$S:208}
C.dn3.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aN8(new A.m(v.a,v.b+28),new A.m(w.a,w.b+28),!0,null))},
$S:120}
C.dn4.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dn5.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:551}
C.dni.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:551}
C.dnj.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:475}
C.dnk.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:182}
C.dnl.prototype={
$1(d){return d>=0.5},
$S:124}
C.fyP.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.fQ(A.aN(!1,v,!0,new A.a4(38,38,A.V(d,this.a.c?B.c:B.cx,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w,w)},
$S:2049}
C.f8j.prototype={
$1(d){var w=null,v=A.n(8),u=B.bU.j(0.12),t=A.n(8)
return new A.C(B.kN,A.aN(!1,v,!0,A.q(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fSE,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.m),w,w,w,w,B.PU,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f8i(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f8i.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dDH.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dDG.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mW,B.K,w,w)
return A.em(A.a([A.bK(!1,B.dy,w,w,!0,w,w,w,new C.dDE(d),w,w),A.bK(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.ng,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dDF(d),w,w)],x.p),B.bc,B.Dj,w,u,D.bKD,w,D.bMy,new A.bb(v,B.a1),w,w)},
$S:17}
C.dDE.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dDF.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dDQ.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dDR.prototype={
$1(d){var w=this.a
return w.l(new C.dDP(w,d))},
$S:z+49}
C.dDP.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dDS.prototype={
$1(d){var w=null
return A.r5(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dDV.prototype={
$1(d){var w=this.a
return w.l(new C.dDO(w,d))},
$S:36}
C.dDO.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dDU.prototype={
$1(d){var w=null
return A.r5(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dDW.prototype={
$1(d){var w=this.a
return w.l(new C.dDN(w,d))},
$S:36}
C.dDN.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dDX.prototype={
$0(){var w=this.a
return w.l(new C.dDM(w))},
$S:0}
C.dDM.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dDY.prototype={
$0(){var w=this.a
return w.l(new C.dDL(w))},
$S:0}
C.dDL.prototype={
$0(){return++this.a.at},
$S:0}
C.dDZ.prototype={
$0(){var w=this.a
return w.l(new C.dDK(w))},
$S:0}
C.dDK.prototype={
$0(){return--this.a.ax},
$S:0}
C.dE_.prototype={
$0(){var w=this.a
return w.l(new C.dDJ(w))},
$S:0}
C.dDJ.prototype={
$0(){return++this.a.ax},
$S:0}
C.dE0.prototype={
$1(d){var w=this.a
return w.l(new C.dDI(w,d))},
$S:8}
C.dDI.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dDT.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dE1.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.n(12)
if(p)w=B.bU.j(0.18)
else w=q.c.a?B.eo:B.c
v=A.n(12)
if(p)u=B.bU
else u=(q.c.a?B.er:B.bP).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bU
else t=q.c.a?B.bv:B.bl
t=A.V(f,t,r,r,r,18)
if(p)s=B.bU
else s=q.c.a?B.bv:B.bl
return A.E(A.aF(!1,B.a3,!0,r,A.aN(!1,o,!0,A.cZ(r,A.w(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b1,new A.p(w,r,u,v,r,r,B.m),B.eN,r,r,r,r,B.jD,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dE2(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dE2.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dEb.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cj2.prototype={
$2(d,e){return new A.bw(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:99}
C.cj9.prototype={
$1(d){return d.ak()},
$S:z+5}
C.cja.prototype={
$2(d,e){var w=J.b8(e,new C.cj8(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bw(d,w,x.d2)},
$S:z+53}
C.cj8.prototype={
$1(d){return d.ak()},
$S:z+12}
C.cj4.prototype={
$1(d){return C.ao_(A.a1(d,x.N,x.z))},
$S:z+9}
C.cj5.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cj6.prototype={
$1(d){return C.hBy(A.a1(d,x.N,x.z))},
$S:z+11}
C.cj7.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cje.prototype={
$1(d){return new A.aK8(d.f.length,d.a,d.b)},
$S:z+55}
C.cjf.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:589}
C.cjb.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cjc.prototype={
$1(d){return d.cUa(C.HR(d,this.a))},
$S:z+85}
C.eai.prototype={
$1(d){return C.uT(d,this.a.a.c)},
$S:z+3}
C.eaj.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.ean.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.eao.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.eaf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b45(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zQ("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pW(r.c,r.e),$async$$0)
case 4:s.zQ(p)
w=5
return A.b(s.Lq(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.eag.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b45(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zQ("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pW(r.c,r.e),$async$$0)
case 4:s.zQ(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.eah.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Xm(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zQ("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zQ("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zQ("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Lq(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ad(j)
o=r.a
if(o.c==null){w=1
break}o.zQ(B.a.es(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.eam.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b44(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zQ("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).ca(A.e4(new C.eal(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pW(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.eal.prototype={
$1(d){var w=this.b
return new C.a1K(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.eak.prototype={
$1(d){return D.hZ8},
$S:z+58}
C.eaq.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.ear.prototype={
$1(d){var w=this.a
w=w.r?null:new C.eap(w,d)
return new A.C(B.d3,new C.bjP(this.b,d.c,d.a,w,null),null)},
$S:2050}
C.eap.prototype={
$0(){return this.a.ZU(this.b.b)},
$S:0}
C.eaa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eab.prototype={
$0(){return this.a.d=!0},
$S:0}
C.eac.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ead.prototype={
$0(){return this.a.d=!1},
$S:0}
C.eae.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.eas.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Y(s,"NGMYFTSYNC2"))t=!A.cW(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).N(s)
return}},
$S:218}
C.dW9.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dWa.prototype={
$0(){return B.d.gH(D.a8t)},
$S:z+60}
C.dWb.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b5(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.dhu,44),w,w,w),w,w,new C.boL(u,t,v,w),B.az)},
$S:52}
C.hcb.prototype={
$1(d){return A.on(new C.hca(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:136}
C.hca.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.eo:B.c,p=A.a([new A.ac(0,B.G,B.v.j(r?0.35:0.08),B.um,24)],x.V),o=r?B.er:B.bP
o=A.q(t,t,B.f,t,t,new A.p(o,t,t,A.n(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aZ.j(0.25),B.bU.j(0.18)],x.O)
w=A.q(t,D.c23,B.f,t,t,new A.p(t,t,t,A.n(12),t,new A.a6(B.a5,B.a9,B.w,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.ax,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.w(A.a([B.S,o,new A.C(E.apA,A.A(A.a([w,B.bd,A.E(A.w(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.ie(!0,t,e,B.y,D.fER,new C.hc9(this.b,s),20,B.ap4,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.p(q,t,t,B.lv,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:117}
C.hc9.prototype={
$2(d,e){var w=null,v=D.a8t[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.K(s?B.er:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.v.j(s?0.35:0.08),B.eJ,8)],x.V),p=A.n(15),o=A.E(new C.a8J(v.a,!0,w),1),n=s?B.ke:B.iM,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.ax,w,w,w,w,w,w,w,w,13,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aF(!1,B.a3,!0,w,A.aN(!1,u,!0,A.eK(A.bv(p,A.w(A.a([o,A.q(w,A.w(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.iR,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.ap),w,new A.p(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.hc8(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:79}
C.hc8.prototype={
$0(){A.a7(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.ct0.prototype={
$0(){return this.a.ajD(this.b)},
$S:0}
C.hby.prototype={
$1(d){return D.hTC},
$S:z+61}
C.hju.prototype={
$1(d){var w=this
return new C.a3B(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.hbC.prototype={
$1(d){return new C.a0m(this.a,null)},
$S:z+63}
C.hbB.prototype={
$1(d){return D.hUE},
$S:z+64}
C.deq.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.der.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dep(w,d))},
$S:36}
C.dep.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.des.prototype={
$1(d){return this.a.M4()},
$S:2}
C.det.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dem.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.den.prototype={
$1(d){return this.a.M4()},
$S:2}
C.deo.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cLj.prototype={
$0(){},
$S:0}
C.cLp.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cLq.prototype={
$0(){return this.a.aTC(-1)},
$S:0}
C.cLr.prototype={
$1(d){return this.a.l(new C.cLo())},
$S:2}
C.cLo.prototype={
$0(){},
$S:0}
C.cLs.prototype={
$0(){return this.a.aTC(1)},
$S:0}
C.cLt.prototype={
$1(d){return this.a.l(new C.cLn())},
$S:2}
C.cLn.prototype={
$0(){},
$S:0}
C.cLu.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aZ.j(0.2)
if(s)v=B.aZ
else v=this.b.a?B.er:B.bP
return A.vk(u,u,B.b9,r,u,new C.cLm(t,d),B.xn,s,w,u,new A.ax(v,1,B.r,-1),B.cp)},
$S:2051}
C.cLm.prototype={
$1(d){var w=this.a
return w.l(new C.cLk(w,this.b))},
$S:8}
C.cLk.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cLv.prototype={
$1(d){return this.a.l(new C.cLl())},
$S:2}
C.cLl.prototype={
$0(){},
$S:0}
C.cLw.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.fyk.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).N(w)},
$S:2}
C.fyl.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.fym.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).N(w)},
$S:0}
C.fyi.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbGG()
w=w.e
s=A.n(B.n.D(v-1,0,v))
return A.b5(new A.C(D.bMx,new A.ea(A.q(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bBI(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:52}
C.fyj.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dS.aA(0,p)
p=A.n(12)
q=q.a.c
v=A.n(12)
u=A.n(12)
t=w*2.4
s=A.ap(B.aZ,B.bU,w)
s.toString
s=A.a([B.b9,s,B.aZ],x.O)
return A.aF(!1,B.a3,!0,p,A.aN(!1,v,!0,A.eK(D.eLw,r,new A.p(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a6(new A.dl(-1.2+t,-0.5),new A.dl(1.2-t,0.8),B.w,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:145}
C.h9O.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:58}
C.f5t.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f5k.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f5l.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f5r.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.ec(new C.f5q(w,this.b),null)},
$S:20}
C.f5q.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.eo:B.c,t=A.n(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eE(w,u,new A.C(B.apt,A.w(A.a([s,B.aj,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ae,C.hHJ(new C.f5n(r,e),r.a),B.aA,A.A(A.a([A.E(A.dV(B.dy,new C.f5o(d),w),1),B.ar,A.E(A.bI(B.XR,w,new C.f5p(r,d),A.bp(B.aZ,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.db,w,new A.bb(t,B.a1),w)},
$S:103}
C.f5n.prototype={
$1(d){return this.b.$1(new C.f5m(this.a,d))},
$S:36}
C.f5m.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f5o.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f5p.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.f5s.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.UX(this.b)},
$S:0}
C.f5f.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.biv(w)},
$S:0}
C.f5j.prototype={
$1(d){return this.brZ(d)},
brZ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.MS(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j8(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f5i.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.T(w).k("X<1>")
w=A.B(new A.X(w,new C.f5h(this.b),v),v.k("L.E"))
u.d=t.biv(w)},
$S:0}
C.f5h.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f5u.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j8(this.b,w)},
$S:0}
C.f5v.prototype={
$1(d){return this.a.bKW(d,this.b)},
$S:z+67}
C.f5g.prototype={
$0(){return this.a.ad5(this.b)},
$S:0}
C.hjh.prototype={
$1(d){return new C.agc(this.a,this.b,this.c,null)},
$S:z+68}
C.f5x.prototype={
$0(){return this.a.a20(this.b)},
$S:0}
C.f5y.prototype={
$0(){return this.a.Se(this.b)},
$S:0}
C.f5z.prototype={
$0(){return this.a.FW(this.b)},
$S:0}
C.f5A.prototype={
$0(){return this.a.a21(this.b)},
$S:0}
C.f5w.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f5a.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f5b.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f5c.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f5e.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qP(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f5d(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5d.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f5X.prototype={
$2(d,e){return d+e.gyn()},
$S:z+71}
C.f5T.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f5U.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f5E.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.eo:B.c,s=A.n(24),r=A.q(v,D.c2x,B.f,v,v,new A.p(B.aC.j(u?0.18:0.08),v,A.K(B.aC.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.ax
u=u?B.er:B.bP
w=x.p
return A.eE(v,t,new A.C(B.xm,A.w(A.a([r,B.aN,q,B.N,p,B.df,A.A(A.a([A.E(A.dV(B.oB,new C.f5C(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fc,v,new A.bb(A.n(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bI(D.hoy,v,new C.f5D(d),A.bp(B.aC,v,v,v,v,v,B.fc,v,new A.bb(A.n(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,v,B.db,v,new A.bb(s,B.a1),v)},
$S:46}
C.f5C.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.f5D.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.f5N.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.eo:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.v.j(k?0.35:0.08),B.fF,28)],x.V),g=k?D.dpJ:At.a7K,f=x.p
g=A.q(m,A.w(A.a([A.q(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.n(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aA,D.fxX,B.at,new A.bH(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cF,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a6(B.aw,B.aD,B.w,g,m,m),B.m),m,m,m,m,E.apy,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.bbi(B.b2,B.jJ,new C.f5K(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.bbi(B.cJ,Q.At,new C.f5L(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.aC.j(k?0.14:0.06)
q=A.n(16)
p=A.K(B.aC.j(0.28),B.r,1)
o=A.q(m,D.c1P,B.f,m,m,new A.p(B.aC.j(0.12),m,m,A.n(12),m,m,B.m),m,m,m,m,B.bS,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.ax,m,m,m,m,m,m,m,m,m,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.i,0,B.p),1)
return A.bl(!0,new A.C(B.xg,A.q(m,A.w(A.a([g,new A.C(B.apu,A.w(A.a([w,B.S,u,B.bx,t,B.S,A.aF(!1,B.a3,!0,m,A.aN(!1,s,!0,A.q(m,A.A(A.a([o,B.bd,n,A.V(B.eP,k?B.bv:B.bl,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.m),m,m,m,m,B.bD,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f5M(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.ap,m,m,new A.p(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:28}
C.f5K.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.wD("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5L.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.wD("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5M.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.PJ(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5I.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.eo:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.v.j(o?0.35:0.08),B.eS,24)],x.V),k=o?B.er:B.bP
k=A.q(q,q,B.f,q,q,new A.p(k,q,q,A.n(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bv:B.bl
u=A.bv(w,new A.a4(48,48,C.aUU(!0,A.n(12),48,P.QA,u,v.c,48),q),B.ap)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BO(v.gyn())
s=x.p
r=this.a
return A.bl(!0,new A.C(B.xg,A.q(q,A.w(A.a([B.S,k,new A.C(D.apr,A.A(A.a([u,B.bd,A.E(A.w(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.D9,r.cvU(B.vO,B.aZ,new C.f5G(d),p,"QR code or backup file","Transfer project"),r.b8f(!0,B.et,B.aC,new C.f5H(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:28}
C.f5G.prototype={
$0(){A.a7(this.a,!1).N("transfer")
return null},
$S:0}
C.f5H.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
C.f5J.prototype={
$1(d){return this.bs_(d)},
bs_(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.MS(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wT(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f6_.prototype={
$0(){var w=this.a
w.a.bx()
w.l(new C.f5Z(w))},
$S:0}
C.f5Z.prototype={
$0(){return this.a.r++},
$S:0}
C.f60.prototype={
$0(){var w=this.a
return w.l(new C.f5Y(w))},
$S:0}
C.f5Y.prototype={
$0(){return this.a.r++},
$S:0}
C.f5B.prototype={
$0(){var w=this.a.c
w.toString
return A.j8(w,null)},
$S:0}
C.f5F.prototype={
$0(){return this.a.coW(this.b)},
$S:0}
C.f5W.prototype={
$0(){var w=this.a
return w.l(new C.f5V(w,this.b))},
$S:0}
C.f5V.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f5Q.prototype={
$0(){return this.a.wD("scan")},
$S:0}
C.f5R.prototype={
$0(){return this.a.wD("file")},
$S:0}
C.f5S.prototype={
$1(d){return this.a.cvV(d,this.b)},
$S:z+72}
C.f5P.prototype={
$0(){return this.a.G_(this.b)},
$S:0}
C.f5O.prototype={
$0(){return this.a.a2z(this.b,this.c)},
$S:0}
C.cKF.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cKE.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cKC.prototype={
$1(d){return C.i2C(A.a1(d,x.N,x.z))},
$S:z+75}
C.cKD.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fT5.prototype={
$1(d){return d.y===D.le},
$S:z+3}
C.hk3.prototype={
$1(d){return C.aTs(d,this.a)},
$S:z+3}
C.fQA.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bWB.prototype={
$1(d){return!d.as},
$S:z+1}
C.bWA.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bWx.prototype={
$1(d){return C.hBA(A.a1(d,x.N,x.z))},
$S:z+24}
C.bWy.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bWz.prototype={
$1(d){return J.k(d)},
$S:15}
C.fGs.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fBT.prototype={
$1(d){return C.hqL(A.a1(d,x.N,x.z))},
$S:z+79}
C.fBU.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fBV.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.hbm.prototype={
$1(d){return J.k(d)},
$S:15}
C.hbn.prototype={
$1(d){return d.a},
$S:z+81}
C.hbo.prototype={
$1(d){return d.length!==0},
$S:3}
C.hbp.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.hbq.prototype={
$1(d){return d.UX(null).ak()},
$S:z+82}
C.hk1.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fTz.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fX9.prototype={
$1(d){return C.ao_(A.a1(d,x.N,x.z))},
$S:z+9}
C.fXa.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fXb.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fXc.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fXd.prototype={
$1(d){return C.uT(d,this.a)},
$S:z+3}
C.hb8.prototype={
$1(d){return C.uT(d,this.a)},
$S:z+3}
C.hjX.prototype={
$1(d){return C.ao_(A.a1(d,x.N,x.z))},
$S:z+9}
C.hjY.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.hjZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fTg.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fTh.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hk7.prototype={
$1(d){return!d.as},
$S:z+1}
C.fSL.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fSM.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fSN.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.hjv.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fY0.prototype={
$1(d){return d.Q},
$S:z+15}
C.hb1.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fX6.prototype={
$1(d){return C.ao_(A.a1(d,x.N,x.z))},
$S:z+9}
C.fX7.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fX8.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.haX.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fCw.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCx.prototype={
$1(d){return C.hBA(A.a1(d,x.N,x.z))},
$S:z+24}
C.fCy.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fCz.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fCA.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCO.prototype={
$2(d,e){return d.eH(new C.fCP(e))},
$S:2052}
C.fCP.prototype={
$1(d){$.an.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.co},
$S:2053}
C.fCL.prototype={
$1(d){return C.iq3(d,this.a)},
$S:z+84}
C.fCM.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fCN.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fHd.prototype={
$1(d){return d.a},
$S:z+56}
C.fHe.prototype={
$1(d){return d.length!==0},
$S:3}
C.fHf.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fKf.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fPL.prototype={
$1(d){return C.hNu(d,C.HR(d,this.a))},
$S:z+5}
C.fPM.prototype={
$1(d){return C.hNv(d,C.HR(d,this.a))},
$S:z+5};(function aliases(){var w=C.aDJ.prototype
w.bzS=w.t
w=C.aBO.prototype
w.bzN=w.t
w=C.aJj.prototype
w.bAf=w.t
w=C.aDK.prototype
w.bzT=w.t
w=C.aDM.prototype
w.bzU=w.t
w=C.aDN.prototype
w.bzV=w.t
w=C.aPB.prototype
w.bCJ=w.t
w=C.aRJ.prototype
w.bF3=w.t
w=C.aRK.prototype
w.bF4=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aGL.prototype,"gcsI","csJ",28)
var r
w(r=C.aDI.prototype,"gclh","cli",65)
v(r,"gaRN","Pf",0)
v(r,"gcBh","Cj",0)
v(r,"gbST","PY",0)
v(r,"gcQ9","zR",0)
v(r,"gcuS","a3j",0)
v(r,"gbOb","PF",0)
v(r,"gbTi","Zk",0)
w(r,"gbYq","bYr",78)
v(r,"gbIm","Bb",0)
v(C.aDL.prototype,"gcQ5","GU",0)
v(r=C.anP.prototype,"gbwc","bwd",2)
v(r,"gbw4","bw5",2)
v(r,"gcRd","cRe",2)
u(r,"gqI","kV",0)
u(r=C.alX.prototype,"gf5","fW",2)
w(r,"gcmk","cml",27)
u(C.awU.prototype,"gqI","kV",0)
v(r=C.aAQ.prototype,"gd1W","d1X",2)
u(r,"gqI","kV",0)
u(C.aNe.prototype,"gbwa","bwb",2)
v(C.anY.prototype,"gCS","cRq",2)
u(r=C.anW.prototype,"gcS7","cS8",2)
u(r,"gqI","kV",0)
v(r=C.anS.prototype,"gbv2","bv3",2)
v(r,"gcXm","cXn",2)
u(r=C.anU.prototype,"gf5","fW",2)
u(r,"giK","cQJ",2)
v(r=C.anQ.prototype,"gcQy","cQz",2)
u(r,"gbtW","jE",2)
v(r=C.aHl.prototype,"gajf","wU",0)
v(r,"gco7","a2p",0)
v(r,"gaW3","JB",0)
v(r=C.aHi.prototype,"gcLW","a5v",0)
v(r,"gajf","wU",0)
v(r,"gcze","a3Z",0)
v(r,"gco_","b6r",2)
v(r,"gcp8","a2F",0)
w(r,"gclb","clc",35)
v(r,"gbTa","JG",0)
v(r,"gcN5","cN6",2)
v(r,"gcaz","a07",0)
w(r,"gcjG","cjH",36)
v(r,"gcnO","cnP",2)
v(r=C.aFJ.prototype,"gcgL","RJ",0)
v(r,"gcgN","cgO",2)
v(r,"gbPG","acI",0)
v(r=C.aHk.prototype,"gbWN","ZQ",0)
v(r,"gc6o","a_w",0)
v(r,"gcFS","a4T",0)
v(r,"gcBT","a4s",0)
v(C.aHj.prototype,"gcBA","al2",0)
v(C.aw7.prototype,"gcjE","a1Z",0)
v(C.aCq.prototype,"ga5d","M4",2)
v(C.aCp.prototype,"ga5d","M4",2)
v(C.aB1.prototype,"ga5d","M4",2)
v(r=C.aIU.prototype,"gb7D","SK",0)
v(r,"gbHa","XW",0)
v(r,"gcoX","coY",2)
w(C.aIT.prototype,"gckw","ckx",69)
t(C.aIV.prototype,"gaVZ",0,0,null,["$1","$0"],["JA","bR0"],70,0,0)
s(C,"hWn","iAD",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aH,[C.arA,C.vh,C.nR,C.J_,C.ahr,C.Ln,C.vi,C.bX6,C.tB,C.bsj,C.ao6,C.afu,C.lS,C.bVI,C.awi,C.A3,C.amE,C.Nt,C.bdt,C.abv,C.bkW,C.ahy,C.aC3,C.ahm,C.aNe,C.Lv,C.H9,C.bjN,C.aN8,C.at_,C.dnm,C.mp,C.aXS,C.aXR,C.aVV,C.uD,C.rP,C.m5,C.id,C.li,C.aL4])
u(A.hr,[C.h1f,C.h1e,C.h1g,C.hc4,C.fOj,C.fOk,C.fOp,C.fZJ,C.fZI,C.fZH,C.cbW,C.hcC,C.hcu,C.hcG,C.fTo,C.dWR,C.dWM,C.dWN,C.dWp,C.dWl,C.dX5,C.dX6,C.dX_,C.dX0,C.dX7,C.dX8,C.fU8,C.fX3,C.fX4,C.hb6,C.hjW,C.fTf,C.hbI,C.dmz,C.dlW,C.dm4,C.dml,C.dm0,C.dm6,C.dlY,C.dma,C.dmb,C.dm9,C.dmq,C.dmp,C.dom,C.don,C.doo,C.dmN,C.dmS,C.dmR,C.cU_,C.cU1,C.dd2,C.ddr,C.dds,C.ddv,C.ddx,C.ddy,C.ddz,C.ddB,C.ddC,C.bVs,C.bVm,C.fGV,C.hjO,C.hjP,C.hjQ,C.hjL,C.hjR,C.hjS,C.hjT,C.hjK,C.fUM,C.ha0,C.fQB,C.fY_,C.bQu,C.hkd,C.haD,C.bOD,C.bOy,C.bOA,C.bOz,C.cuH,C.cuC,C.cuD,C.cuB,C.cuz,C.cuE,C.cV3,C.cJE,C.cJH,C.cJF,C.cJI,C.cJJ,C.fiC,C.ft1,C.bWe,C.bW8,C.bWc,C.bVQ,C.e8R,C.e8O,C.e8P,C.e8N,C.e8T,C.bW6,C.bVX,C.bVH,C.bVG,C.bVC,C.bVD,C.bVE,C.bVF,C.eaw,C.e9W,C.e9R,C.e9i,C.e9y,C.e9B,C.e9x,C.e9w,C.e9N,C.e9O,C.e9I,C.e96,C.e9Z,C.e9T,C.e98,C.e99,C.e9a,C.e9f,C.e9d,C.e9c,C.e9s,C.e9t,C.e9n,C.ea5,C.ea1,C.dmY,C.dmZ,C.fUc,C.fUd,C.fUe,C.fUa,C.fUb,C.fUh,C.fUi,C.fUj,C.fUf,C.fUg,C.dnh,C.dn7,C.dn2,C.dnc,C.dnd,C.dng,C.dn4,C.dnj,C.dnk,C.dnl,C.fyP,C.f8j,C.dDG,C.dDQ,C.dDR,C.dDS,C.dDV,C.dDU,C.dDW,C.dE0,C.dE1,C.cj9,C.cj8,C.cj4,C.cj5,C.cj6,C.cj7,C.cje,C.cjb,C.cjc,C.eai,C.eal,C.eak,C.ear,C.eas,C.dW9,C.hcb,C.hby,C.hju,C.hbC,C.hbB,C.der,C.des,C.den,C.cLr,C.cLt,C.cLu,C.cLm,C.cLv,C.fyk,C.h9O,C.f5r,C.f5n,C.f5j,C.f5h,C.f5v,C.hjh,C.f5E,C.f5N,C.f5I,C.f5J,C.f5S,C.cKE,C.cKC,C.cKD,C.fT5,C.hk3,C.fQA,C.bWB,C.bWA,C.bWx,C.bWy,C.bWz,C.fBT,C.fBU,C.hbm,C.hbn,C.hbo,C.hbp,C.hbq,C.hk1,C.fTz,C.fX9,C.fXa,C.fXc,C.fXd,C.hb8,C.hjX,C.hjY,C.hjZ,C.fTg,C.fTh,C.hk7,C.fSL,C.fSM,C.hjv,C.fY0,C.hb1,C.fX6,C.fX7,C.haX,C.fCw,C.fCx,C.fCy,C.fCz,C.fCA,C.fCP,C.fCL,C.fCM,C.fHd,C.fHe,C.fKf,C.fPL,C.fPM])
u(A.aw,[C.b2u,C.anN,C.aZ9,C.a_W,C.bfj,C.RD,C.a7X,C.u1,C.J1,C.bjL,C.bnD,C.bBT,C.br1,C.afR,C.bnC,C.afQ,C.bnB,C.aFK,C.aMa,C.afS,C.H5,C.bjM,C.af5,C.bjK,C.bjP,C.b2s,C.aw7,C.agc])
u(A.lR,[C.bfZ,C.bhd,C.bh4,C.aKZ,C.bmE,C.bsi,C.aZe,C.bg0,C.aDH,C.bfs,C.bwr,C.bmM,C.bmb,C.bmi,C.bjO,C.biO,C.boL,C.bBI])
u(A.j0,[C.hcz,C.hcA,C.hcB,C.hcs,C.hct,C.hcE,C.hcF,C.dX2,C.dWP,C.dWS,C.dWw,C.dWx,C.dWy,C.dWv,C.dWD,C.dWu,C.dWE,C.dWF,C.dWt,C.dWG,C.dWs,C.dWH,C.dWr,C.dWI,C.dWj,C.dWk,C.dWq,C.dWJ,C.dWo,C.dWK,C.dWn,C.dWz,C.dWm,C.dWA,C.dWi,C.dWB,C.dWC,C.dX3,C.dX4,C.dWT,C.dWU,C.dWV,C.dWW,C.dWX,C.dWY,C.dWZ,C.dXa,C.dX1,C.fU9,C.dlU,C.dlS,C.dlT,C.dlV,C.dmy,C.dmn,C.dmk,C.dlX,C.dmo,C.dm2,C.dm3,C.dm5,C.dmm,C.dm1,C.dm7,C.dmv,C.dmh,C.dmg,C.dmi,C.dmj,C.dmc,C.dme,C.dmf,C.dm8,C.dmr,C.dmu,C.dlZ,C.dm_,C.dol,C.dok,C.doj,C.doi,C.dop,C.doh,C.doq,C.dmO,C.dmP,C.dmQ,C.dmT,C.dmM,C.dmL,C.cU0,C.dd1,C.dde,C.ddd,C.ddt,C.ddc,C.ddu,C.ddb,C.dda,C.ddw,C.dd9,C.ddm,C.ddl,C.ddD,C.bVl,C.bVv,C.bVn,C.bVo,C.bVr,C.bVq,C.bVt,C.bVu,C.bVp,C.bVj,C.bVk,C.bWZ,C.bX_,C.bX0,C.bX1,C.bX2,C.bX3,C.bX4,C.hjN,C.ha1,C.bOC,C.bOx,C.bOv,C.bOw,C.bOu,C.cuJ,C.cuK,C.cuI,C.cuL,C.cuN,C.cuO,C.cuP,C.cuF,C.cJD,C.cJM,C.cJN,C.cJO,C.cJL,C.cJP,C.cJQ,C.cJR,C.cJS,C.cJG,C.cJK,C.bWu,C.bWt,C.bWr,C.bWp,C.bWq,C.bWm,C.bWn,C.bWo,C.bWs,C.bWl,C.fiD,C.fiE,C.fiF,C.fiG,C.fiH,C.bWi,C.bWj,C.bWk,C.bWd,C.bWf,C.bWg,C.bWh,C.bW9,C.bVU,C.bVT,C.bVS,C.bVM,C.bVN,C.bVR,C.bVO,C.bVP,C.bVL,C.e8Q,C.e8S,C.e8L,C.e8M,C.e8K,C.e8U,C.e8V,C.e8W,C.e8Z,C.e9_,C.e90,C.e91,C.e92,C.e93,C.e94,C.e95,C.e8X,C.e8Y,C.bW5,C.bW4,C.bVW,C.bVV,C.bW1,C.bW2,C.bVZ,C.bW_,C.bW0,C.bVY,C.bVw,C.bVx,C.bVB,C.bVA,C.bVz,C.bVy,C.eav,C.eau,C.eax,C.eay,C.eaz,C.eat,C.eaB,C.eaA,C.e9U,C.e9V,C.e9X,C.e9j,C.e9A,C.e9z,C.e9C,C.e9Q,C.e9v,C.e9G,C.e9H,C.e9F,C.e9D,C.e9E,C.e9J,C.e9K,C.e9L,C.e9P,C.e97,C.e9S,C.e9b,C.e9e,C.e9g,C.e9Y,C.e9m,C.e9k,C.e9o,C.e9p,C.e9l,C.e9q,C.e9u,C.ea6,C.ea7,C.ea_,C.ea2,C.ea3,C.ea4,C.ea9,C.ea0,C.e9h,C.dmX,C.dmW,C.dn0,C.dna,C.dn1,C.f8i,C.dDH,C.dDE,C.dDF,C.dDP,C.dDO,C.dDN,C.dDX,C.dDM,C.dDY,C.dDL,C.dDZ,C.dDK,C.dE_,C.dDJ,C.dDI,C.dDT,C.dE2,C.dEb,C.eaj,C.ean,C.eao,C.eaf,C.eag,C.eah,C.eam,C.eaq,C.eap,C.eaa,C.eab,C.eac,C.ead,C.eae,C.dWa,C.hc8,C.ct0,C.deq,C.dep,C.det,C.dem,C.deo,C.cLj,C.cLp,C.cLq,C.cLo,C.cLs,C.cLn,C.cLk,C.cLl,C.cLw,C.fyl,C.fym,C.f5t,C.f5k,C.f5l,C.f5m,C.f5o,C.f5p,C.f5s,C.f5f,C.f5i,C.f5u,C.f5g,C.f5x,C.f5y,C.f5z,C.f5A,C.f5w,C.f5a,C.f5b,C.f5c,C.f5e,C.f5d,C.f5T,C.f5U,C.f5C,C.f5D,C.f5K,C.f5L,C.f5M,C.f5G,C.f5H,C.f6_,C.f5Z,C.f60,C.f5Y,C.f5B,C.f5F,C.f5W,C.f5V,C.f5Q,C.f5R,C.f5P,C.f5O])
u(A.af,[C.arN,C.UY,C.a0K,C.a0O,C.a0M,C.a0h,C.anO,C.alW,C.awT,C.aAP,C.anX,C.anV,C.anR,C.Xj,C.anT,C.UZ,C.at2,C.asX,C.a1q,C.at0,C.a1K,C.a1L,C.a8J,C.a0m,C.a0l,C.a_M,C.a3B,C.GV,C.aAV,C.aw6,C.aw0,C.aw5,C.PR])
u(A.ai,[C.aGL,C.bjF,C.aDI,C.bk3,C.aDL,C.bhb,C.aDJ,C.aBO,C.aJj,C.aAQ,C.aDN,C.aDM,C.aDK,C.bp7,C.anU,C.anQ,C.aHl,C.aHi,C.aFJ,C.aHk,C.aHj,C.bp8,C.aPB,C.aCq,C.aCp,C.aB1,C.bBL,C.aRJ,C.aRK,C.aIU,C.bqx,C.aIT,C.bDx])
u(A.j1,[C.dWO,C.dWQ,C.dWL,C.dX9,C.fX5,C.bVi,C.dmx,C.dmw,C.dmd,C.dms,C.dmt,C.dmU,C.bX5,C.bWY,C.bVJ,C.bVK,C.hjM,C.hkc,C.bOB,C.cuM,C.cuG,C.cuA,C.fiI,C.bW7,C.bWa,C.bWb,C.dxV,C.bW3,C.e9M,C.e9r,C.ea8,C.dn9,C.dn8,C.dn6,C.dnb,C.dne,C.dnf,C.dn_,C.dn3,C.dn5,C.dni,C.cj2,C.cja,C.cjf,C.dWb,C.hca,C.hc9,C.fyi,C.fyj,C.f5q,C.f5X,C.cKF,C.fGs,C.fBV,C.fXb,C.fSN,C.fX8,C.fCO,C.fCN,C.fHf])
u(A.ln,[C.a35,C.ahA,C.a3o,C.a1c,C.ae6,C.aNW,C.J0,C.anZ,C.cKG,C.cKH])
t(C.anP,C.aDJ)
t(C.alX,C.aBO)
t(C.awU,C.aJj)
t(C.bjJ,C.aDN)
t(C.anY,C.bjJ)
t(C.bjI,C.aDM)
t(C.anW,C.bjI)
t(C.bjH,C.aDK)
t(C.anS,C.bjH)
t(C.boM,C.aPB)
t(C.bBJ,C.aRJ)
t(C.bBK,C.aRK)
t(C.aIV,C.bDx)
t(C.bdH,A.bdu)
t(C.bBM,A.a8n)
t(C.bdG,C.bBM)
w(C.aDJ,A.cm)
w(C.aBO,A.cm)
w(C.aJj,A.eZ)
w(C.aDK,A.cm)
v(C.bjH,C.ahm)
w(C.aDM,A.cm)
v(C.bjI,C.ahm)
w(C.aDN,A.cm)
v(C.bjJ,C.ahm)
w(C.aPB,A.eZ)
w(C.aRJ,A.cm)
w(C.aRK,A.cm)
v(C.bDx,A.eH)
v(C.bBM,A.jA)})()
A.jj(b.typeUniverse,JSON.parse('{"b2u":{"aw":[],"x":[]},"bfZ":{"aC":[]},"arN":{"af":[],"x":[]},"aGL":{"ai":["arN"]},"UY":{"af":[],"x":[]},"anN":{"aw":[],"x":[]},"aZ9":{"aw":[],"x":[]},"bjF":{"ai":["UY"]},"a0K":{"af":[],"x":[]},"a0O":{"af":[],"x":[]},"a0M":{"af":[],"x":[]},"a0h":{"af":[],"x":[]},"aDI":{"ai":["a0K"]},"bk3":{"ai":["a0O"]},"aDL":{"ai":["a0M"]},"a_W":{"aw":[],"x":[]},"bhd":{"aC":[]},"bh4":{"aC":[]},"bhb":{"ai":["a0h"]},"aKZ":{"aC":[]},"bmE":{"aC":[]},"bfj":{"aw":[],"x":[]},"anO":{"af":[],"x":[]},"anP":{"ai":["anO"]},"bsi":{"aC":[]},"aZe":{"aC":[]},"alW":{"af":[],"x":[]},"awT":{"af":[],"x":[]},"aAP":{"af":[],"x":[]},"alX":{"ai":["alW"]},"bg0":{"aC":[]},"RD":{"aw":[],"x":[]},"aDH":{"aC":[]},"awU":{"ai":["awT"]},"bfs":{"aC":[]},"aAQ":{"ai":["aAP"]},"anX":{"af":[],"x":[]},"anV":{"af":[],"x":[]},"anR":{"af":[],"x":[]},"anY":{"ai":["anX"]},"bwr":{"aC":[]},"anW":{"ai":["anV"]},"bmM":{"aC":[]},"anS":{"ai":["anR"]},"bmb":{"aC":[]},"Xj":{"af":[],"x":[]},"anT":{"af":[],"x":[]},"UZ":{"af":[],"x":[]},"a7X":{"aw":[],"x":[]},"bmi":{"aC":[]},"u1":{"aw":[],"x":[]},"J1":{"aw":[],"x":[]},"bp7":{"ai":["Xj"]},"anU":{"ai":["anT"]},"anQ":{"ai":["UZ"]},"at2":{"af":[],"x":[]},"asX":{"af":[],"x":[]},"a1q":{"af":[],"x":[]},"afS":{"aw":[],"x":[]},"aHl":{"ai":["at2"]},"aHi":{"ai":["asX"]},"bjL":{"aw":[],"x":[]},"bjO":{"aC":[]},"bnD":{"aw":[],"x":[]},"biO":{"aC":[]},"bBT":{"aw":[],"x":[]},"br1":{"aw":[],"x":[]},"aFJ":{"ai":["a1q"]},"afR":{"aw":[],"x":[]},"bnC":{"aw":[],"x":[]},"afQ":{"aw":[],"x":[]},"bnB":{"aw":[],"x":[]},"aFK":{"aw":[],"x":[]},"aMa":{"aw":[],"x":[]},"H5":{"aw":[],"x":[]},"at0":{"af":[],"x":[]},"a1K":{"af":[],"x":[]},"a1L":{"af":[],"x":[]},"aHk":{"ai":["at0"]},"bjM":{"aw":[],"x":[]},"af5":{"aw":[],"x":[]},"bjK":{"aw":[],"x":[]},"bjP":{"aw":[],"x":[]},"aHj":{"ai":["a1K"]},"bp8":{"ai":["a1L"]},"b2s":{"aw":[],"x":[]},"a8J":{"af":[],"x":[]},"boM":{"ai":["a8J"]},"boL":{"aC":[]},"aw7":{"aw":[],"x":[]},"a0m":{"af":[],"x":[]},"a0l":{"af":[],"x":[]},"a_M":{"af":[],"x":[]},"a3B":{"af":[],"x":[]},"aCq":{"ai":["a0m"]},"aCp":{"ai":["a0l"]},"aB1":{"ai":["a_M"]},"bBL":{"ai":["a3B"]},"GV":{"af":[],"x":[]},"aAV":{"af":[],"x":[]},"bBJ":{"ai":["GV"]},"bBK":{"ai":["aAV"]},"bBI":{"aC":[]},"aw6":{"af":[],"x":[]},"aIU":{"ai":["aw6"]},"agc":{"aw":[],"x":[]},"aw0":{"af":[],"x":[]},"aw5":{"af":[],"x":[]},"bqx":{"ai":["aw0"]},"aIT":{"ai":["aw5"]},"PR":{"af":[],"x":[]},"aIV":{"ai":["PR"],"eH":[]},"bdG":{"jA":[],"fs":[]}}'))
A.Sb(b.typeUniverse,JSON.parse('{"ahm":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aVV"),cq:w("mJ"),Q:w("rP"),r:w("bm<o,o>"),c5:w("aXR"),dY:w("aXS"),fH:w("Nt"),de:w("amE"),dN:w("NC<F>"),gc:w("EX<F>"),A:w("eS<o?>"),e:w("J_"),B:w("nR"),P:w("id"),df:w("lS"),k:w("li"),x:w("az<~>"),U:w("N<a5K>"),V:w("N<ac>"),C:w("N<rP>"),O:w("N<u>"),c:w("N<Nt>"),b:w("N<amE>"),ac:w("N<eS<o?>>"),I:w("N<nR>"),u:w("N<id>"),J:w("N<lS>"),_:w("N<li>"),cl:w("N<az<ah<a9<o,@>>>>"),R:w("N<mN>"),eU:w("N<ah<+(G,G)>>"),ez:w("N<a9<o,aH>>"),gE:w("N<a9<o,o>>"),Y:w("N<a9<o,@>>"),fD:w("N<ne>"),bp:w("N<pb>"),g:w("N<m>"),ar:w("N<awi>"),v:w("N<h1>"),gy:w("N<abv>"),L:w("N<+(o,o)>"),G:w("N<+(G,G)>"),E:w("N<+(G,~())>"),bd:w("N<+(o,F,P)>"),bF:w("N<+count,id,name(F,o,o)>"),F:w("N<d4>"),s:w("N<o>"),cF:w("N<au>"),aS:w("N<jr>"),dT:w("N<bdt>"),p:w("N<x>"),Z:w("N<fs>"),D:w("N<m5>"),h:w("N<aC3>"),cC:w("N<bkW>"),fp:w("N<Ln>"),M:w("N<Lv>"),gZ:w("N<aL4>"),gA:w("N<ahr>"),e4:w("N<ahy>"),dE:w("N<aN8>"),f7:w("N<P>"),n:w("N<G>"),t:w("N<F>"),dS:w("N<aC?>"),d4:w("N<o?>"),eF:w("cB<ai<af>>"),d:w("ah<nR>"),do:w("ah<id>"),cg:w("ah<lS>"),ax:w("ah<li>"),fO:w("ah<a9<o,@>>"),cz:w("ah<+(o,o)>"),bC:w("ah<+count,id,name(F,o,o)>"),dy:w("ah<o>"),er:w("ah<au>"),gk:w("ah<m5>"),j:w("ah<@>"),fK:w("bw<o,o>"),d2:w("bw<o,ah<a9<o,@>>>"),a:w("a9<o,@>"),f:w("a9<@,@>"),gv:w("O<o,J2>"),cM:w("O<F,o>"),w:w("iq"),g2:w("ta"),bV:w("arA"),fL:w("cr"),K:w("aH"),dc:w("h1"),fo:w("Qe<F>"),fz:w("+(o,o)"),ei:w("+scope,text(o,o)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(G,ah<id>)"),cs:w("+count,id,name(F,o,o)"),N:w("o"),fT:w("ia<id>"),ec:w("ia<o>"),gW:w("rx<G>"),X:w("bq<G>"),bW:w("dG"),W:w("b9<o>"),b4:w("b9<F>"),cI:w("km<o>"),av:w("X<A3>"),cc:w("X<o>"),l:w("x"),gF:w("fs"),fA:w("m5"),dO:w("H9"),bw:w("afQ<o?>"),cy:w("Lx"),q:w("l6"),y:w("P"),i:w("G"),z:w("@"),S:w("F"),eK:w("ah<li>?"),m:w("at_?"),cT:w("m?"),h5:w("+(o,o)?"),eo:w("+code,qrPayload,usesRemaining(o,o,F)?"),he:w("+qrPayload,token,usesRemaining(o,o,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("oF?"),T:w("o?"),aD:w("dG?"),o:w("m5?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b92=new A.bc(B.h5,B.bJ,B.h5,B.bJ)
D.agt=new A.bc(B.h5,B.ia,B.h5,B.ia)
D.b9h=new A.bc(B.jL,B.bJ,B.bJ,B.bJ)
D.b9l=new A.ax(B.cZ,1.4,B.r,-1)
D.b9w=new A.ax(B.ab,1,B.r,-1)
D.ah1=new A.aY(140,1/0,0,1/0)
D.baQ=new A.aY(0,1/0,64,1/0)
D.baU=new A.aY(0,84,0,1/0)
D.ah9=new A.aY(130,1/0,0,1/0)
D.aG6=w([B.mt,B.ty,B.c],x.O)
D.cef=new A.a6(B.aw,B.aD,B.w,D.aG6,null,null)
D.bbF=new A.p(null,null,null,null,null,D.cef,B.m)
D.dp5=w([B.aZ,B.bU],x.O)
D.cgs=new A.a6(B.aW,B.b0,B.w,D.dp5,null,null)
D.bc_=new A.p(null,null,null,null,null,D.cgs,B.m)
D.a_c=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fN=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dtu=w([B.dD,D.a_c,D.fN],x.O)
D.cdr=new A.a6(B.aW,B.b0,B.w,D.dtu,null,null)
D.bcK=new A.p(null,null,null,null,null,D.cdr,B.m)
D.fPO=new A.H(!0,B.bX,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hr8=new A.D("?",null,D.fPO,null,null,null,null,null,null,null,null,null)
D.bgA=new A.cp(B.z,null,null,D.hr8,null)
D.XH=new A.H(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8L=new A.D("\ud83c\udf33",null,D.XH,null,null,null,null,null,null,null,null,null)
D.ahW=new A.cp(B.z,null,null,D.h8L,null)
D.hbs=new A.D("\ud83c\udfc6",null,B.LY,null,null,null,null,null,null,null,null,null)
D.bgL=new A.cp(B.z,null,null,D.hbs,null)
D.biC=new A.fp(null,null,null,null,null,E.kI,null,null,null,null)
D.ahX=new A.cp(B.z,null,null,D.biC,null)
D.l6=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fQn=new A.H(!0,D.l6,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.har=new A.D("No books on the shelf yet.",null,D.fQn,null,null,null,null,null,null,null,null,null)
D.eLx=new A.C(B.oc,D.har,null)
D.bh1=new A.cp(B.z,null,null,D.eLx,null)
D.fXD=new A.H(!0,D.fN,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hs6=new A.D("\ud83d\ude8c  On the road\u2026",null,D.fXD,null,null,null,null,null,null,null,null,null)
D.eM6=new A.C(B.ct,D.hs6,null)
D.bhu=new A.cp(B.z,null,null,D.eM6,null)
D.b_H=new A.D("\ud83e\uddfa",null,D.XH,null,null,null,null,null,null,null,null,null)
D.bhK=new A.cp(B.z,null,null,D.b_H,null)
D.hdW=new A.D("\ud83c\udfad",null,D.XH,null,null,null,null,null,null,null,null,null)
D.bhV=new A.cp(B.z,null,null,D.hdW,null)
D.bhY=new A.cp(B.z,null,null,A7.ZY,null)
D.aig=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ain=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bke=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bkj=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bkv=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bkx=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bkz=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bkH=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lZ=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bkL=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bkQ=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bkS=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bkT=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.m_=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.blw=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Cy=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.blF=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.blZ=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bm1=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bm7=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bmf=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aj2=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bmm=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.a_q=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aj5=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bmx=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.a_s=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bmS=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ajh=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bng=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bnx=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bnY=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bo8=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GZ=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.box=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.boA=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.boE=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ajL=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.boW=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bp1=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bp8=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ajP=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bph=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bpM=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bpW=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bpZ=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bq4=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ak5=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bqL=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aku=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.brL=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.akH=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bs9=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Hc=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bsg=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bsq=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bss=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.akL=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bsK=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bsM=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bsP=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.akT=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a0b=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.btd=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.btA=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.btF=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.al4=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.btM=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a0g=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bu8=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bu9=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Hl=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.buX=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bvy=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bvE=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bvI=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.r5=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bvT=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bvX=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bw2=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bw4=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.alR=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.alV=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Hr=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a0C=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.am3=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bxj=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bxB=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.by3=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.byc=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.amu=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a0O=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.byo=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.byE=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0U=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.byW=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bzc=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0Y=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bzh=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.amO=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.amQ=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bzA=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.amX=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bA2=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bA6=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bAd=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bAm=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bAv=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bB7=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bBD=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.h4t=new A.D("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bF8=new A.eS(null,D.h4t,B.fm,null,x.A)
D.hdN=new A.D("None",null,null,null,null,null,null,null,null,null,null,null)
D.bFa=new A.eS(null,D.hdN,B.fm,null,x.A)
D.bFI=new A.bh(38e5)
D.bGq=new A.iO(0,10,0,10)
D.bGL=new A.iO(0,4,0,4)
D.bGO=new A.R(0,4,5,0)
D.bH3=new A.R(10,10,14,10)
D.bHe=new A.iO(10,4,10,4)
D.bHn=new A.iO(10,8,10,8)
D.bHo=new A.R(10,8,8,8)
D.bHT=new A.R(12,6,12,2)
D.bIb=new A.R(14,0,14,6)
D.bIf=new A.R(14,10,6,6)
D.bIg=new A.R(14,12,14,0)
D.bIk=new A.R(14,12,14,8)
D.bIn=new A.R(14,12,8,14)
D.bIr=new A.iO(14,14,14,14)
D.bIL=new A.R(14,6,14,40)
D.bIO=new A.R(14,8,14,30)
D.bJa=new A.R(16,2,16,10)
D.bJj=new A.R(16,6,16,30)
D.bJl=new A.R(16,6,16,8)
D.bJA=new A.R(18,10,18,4)
D.bJC=new A.R(18,12,18,0)
D.bJJ=new A.R(18,14,12,4)
D.apr=new A.R(18,16,18,8)
D.bK_=new A.R(18,20,18,22)
D.bK4=new A.R(18,30,18,30)
D.bKm=new A.R(20,10,12,20)
D.bKp=new A.R(20,11,20,11)
D.bKB=new A.R(20,18,16,18)
D.bKD=new A.R(20,18,20,6)
D.bLr=new A.R(24,32,24,28)
D.bLs=new A.R(24,36,24,32)
D.bLv=new A.R(26,26,24,14)
D.bLJ=new A.R(2,4,2,8)
D.bLN=new A.R(30,0,30,0)
D.bLY=new A.R(38,22,22,22)
D.apS=new A.R(40,24,24,24)
D.bM_=new A.iO(40,40,40,40)
D.bM1=new A.R(46,30,30,30)
D.bMu=new A.R(56,40,40,40)
D.bMx=new A.R(1.25,1.25,1.25,1.25)
D.bMy=new A.R(60,0,60,0)
D.bMC=new A.R(6,14,6,16)
D.bMG=new A.R(6,4,12,0)
D.bMK=new A.R(6,6,10,2)
D.bMR=new A.iO(7,3,7,3)
D.bNn=new A.R(5,1.5,5,1.5)
D.bNy=new A.R(6,2.5,6,2.5)
D.hm9=new A.D("Family Games",null,B.jr,null,null,null,null,null,null,null,null,null)
D.h32=new A.D("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.XA,null,null,null,null,null,null,null,null,null)
D.cQ2=w([D.hm9,D.h32],x.p)
D.bCC=new A.fv(B.ah,B.e,B.i,B.B,null,B.p,null,0,D.cQ2,null)
D.bNZ=new A.bu(1,B.ba,D.bCC,null)
D.hqG=new A.D("Signature",null,B.mY,null,null,null,null,null,null,null,null,null)
D.bO2=new A.bu(1,B.ba,D.hqG,null)
D.hiz=new A.D("MADE BY THE ONE WHO PLANTED THE TREE",null,U.uE,null,null,null,null,null,null,null,null,null)
D.bOA=new A.bu(1,B.ba,D.hiz,null)
D.hnF=new A.D("Tell the AI what to fix",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bOR=new A.bu(1,B.ba,D.hnF,null)
D.hpJ=new A.D("Worksheets",null,B.b_c,null,null,null,null,null,null,null,null,null)
D.fYA=new A.H(!0,E.aiM,null,null,null,null,13,B.cF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.how=new A.D("Track your project spending",null,D.fYA,null,null,null,null,null,null,null,null,null)
D.dfd=w([D.hpJ,B.at,D.how],x.p)
D.bCf=new A.fv(B.ah,B.e,B.i,B.B,null,B.p,null,0,D.dfd,null)
D.bOX=new A.bu(1,B.ba,D.bCf,null)
D.fTh=new A.H(!0,E.kI,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3C=new A.D("FAMILY LIBRARY",null,D.fTh,null,null,null,null,null,null,null,null,null)
D.bPf=new A.bu(1,B.ba,D.h3C,null)
D.Qc=new C.J_("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.xp=new C.J0(0,"male")
D.p3=new C.J0(1,"female")
D.zV=new C.J0(2,"unknown")
D.vu=new C.anZ(0,"owner")
D.Qd=new C.anZ(1,"editor")
D.le=new C.anZ(2,"viewer")
D.arT=new A.a_(61199,"MaterialIcons",!1)
D.bUF=new A.a_(61504,"MaterialIcons",!1)
D.bUG=new A.a_(61505,"MaterialIcons",!1)
D.bUJ=new A.a_(61587,"MaterialIcons",!1)
D.bVN=new A.a_(63034,"MaterialIcons",!0)
D.bW5=new A.a_(63153,"MaterialIcons",!1)
D.bWB=new A.a_(63429,"MaterialIcons",!1)
D.au3=new A.a_(984520,"MaterialIcons",!1)
D.bVj=new A.a_(62776,"MaterialIcons",!1)
D.bZ6=new A.ae(D.bVj,26,B.b9,null,null,null)
D.bTy=new A.a_(57648,"MaterialIcons",!1)
D.bZs=new A.ae(D.bTy,14,B.c,null,null,null)
D.bZK=new A.ae(B.Iq,17,null,null,null,null)
D.bZR=new A.ae(B.QJ,null,B.bU,null,null,null)
D.c_h=new A.ae(E.a4F,null,null,null,null,null)
D.c_k=new A.ae(B.jm,18,E.kI,null,null,null)
D.a4p=new A.a_(62044,"MaterialIcons",!1)
D.c_q=new A.ae(D.a4p,null,B.aZ,null,null,null)
D.c_x=new A.ae(B.A7,18,B.c,null,null,null)
D.c0e=new A.ae(B.e9,16,null,null,null,null)
D.c0m=new A.ae(D.a4p,32,B.aZ,null,null,null)
D.c0G=new A.ae(E.arU,18,B.cZ,null,null,null)
D.c1P=new A.ae(B.IC,22,B.aC,null,null,null)
D.c23=new A.ae(B.e9,22,B.b9,null,null,null)
D.c2g=new A.ae(Y.a4u,22,B.c,null,null,null)
D.c2n=new A.ae(B.vD,52,B.c,null,null,null)
D.c2x=new A.ae(B.IC,30,B.aC,null,null,null)
D.c2T=new A.ae(B.Iz,null,B.c,null,null,null)
D.auO=new A.ae(B.vO,22,B.c,null,null,null)
D.c31=new A.ae(B.e9,17,null,null,null,null)
D.c3q=new A.ae(B.xB,26,B.cZ,null,null,null)
D.c4c=new A.ae(B.a4S,16,null,null,null,null)
D.c4Z=new A.ae(B.vD,24,B.c,null,null,null)
D.c54=new A.ae(B.QH,20,B.ud,null,null,null)
D.c5a=new A.ae(B.Io,null,B.bU,null,null,null)
D.c5j=new A.ae(B.jm,18,B.c,null,null,null)
D.c60=new A.ae(B.cE,22,B.ab,null,null,null)
D.c6W=new A.ae(B.et,16,B.ab,null,null,null)
D.c77=new A.ae(D.a4p,20,B.aZ,null,null,null)
D.ave=new A.ae(B.h2,20,null,null,null,null)
D.c7H=new A.ae(B.cE,18,D.l6,null,null,null)
D.c7Y=new A.ae(B.Aj,28,B.c,null,null,null)
D.c89=new A.ae(B.Qw,null,B.fs,null,null,null)
D.c8t=new A.ae(B.Aj,24,B.c,null,null,null)
D.c8W=new A.ae(B.vD,null,B.aZ,null,null,null)
D.c8X=new A.ae(B.jG,20,B.cZ,null,null,null)
D.c9h=new A.ae(B.Iq,16,null,null,null,null)
D.caQ=new A.ee(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.f_,!0,null,null,null,null)
D.aw_=new C.a7X(10,null)
D.cbm=new C.a7X(12,null)
D.cbn=new C.a7X(14,null)
D.dy3=w([B.bw,B.aZ,B.fz,B.b9],x.O)
D.ccx=new A.a6(B.aw,B.aD,B.w,D.dy3,null,null)
D.buJ=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bBe=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.dbe=w([D.buJ,D.bBe],x.O)
D.ccK=new A.a6(B.aW,B.b0,B.w,D.dbe,null,null)
D.drf=w([B.fo,B.h9,B.fz],x.O)
D.ccQ=new A.a6(B.aw,B.aD,B.w,D.drf,null,null)
D.alG=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bkU=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.ddI=w([D.alG,D.bkU],x.O)
D.cds=new A.a6(B.aW,B.b0,B.w,D.ddI,null,null)
D.boN=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aFm=w([D.boN,D.alG],x.O)
D.cdL=new A.a6(B.aw,B.aD,B.w,D.aFm,null,null)
D.akm=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.brC=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dqh=w([D.akm,D.brC],x.O)
D.ceq=new A.a6(B.a5,B.a9,B.w,D.dqh,null,null)
D.dFX=w([B.bC,B.nZ],x.O)
D.ces=new A.a6(B.aW,B.b0,B.w,D.dFX,null,null)
D.buE=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dGY=w([D.buE,D.l6,D.l6,I.OF],x.O)
D.dJQ=w([0,0.07,0.9,1],x.n)
D.ceY=new A.a6(B.a5,B.a9,B.w,D.dGY,D.dJQ,null)
D.cf6=new A.a6(B.aw,B.aD,B.w,B.UE,null,null)
D.d8C=w([B.aB,D.lZ],x.O)
D.cf9=new A.a6(B.a5,B.a9,B.w,D.d8C,null,null)
D.dFt=w([B.b9,B.aZ,B.bU],x.O)
D.cge=new A.a6(B.aw,B.aD,B.w,D.dFt,null,null)
D.ckF=w([10,20,30],x.t)
D.cuH=w([-1,-0.4,0.3,1],x.n)
D.cCh=w([B.bw,B.b9,B.fo],x.O)
D.cCp=w([B.bk,B.aB,B.kH],x.O)
D.cCr=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cDa=w([30,140,262,360],x.n)
D.bsV=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cIN=w([D.bsV,E.ale],x.O)
D.eG4=new A.m(1,2)
D.fB_=new A.d4(B.b8,D.eG4,3)
D.aCc=w([D.fB_],x.F)
D.cQk=w([B.hm,B.cj,B.fy],x.O)
D.cTb=w([B.bQ,B.bz,B.bt],x.O)
D.bQ5=new C.vh("classic","Classic leather","Gold-edged brown leather",D.aFm,E.kI,E.kI,"\u2766",B.K,!0,!1,!1,!1)
D.bjZ=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bzT=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dh9=w([D.bjZ,D.bzT],x.O)
D.alh=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bQ0=new C.vh("ornate","Ornate gold","Double gold border and flourishes",D.dh9,D.alh,D.alh,"\u2726",B.K,!0,!0,!0,!1)
D.boj=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bvs=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d7i=w([D.boj,D.bvs],x.O)
D.bQ_=new C.vh("parchment","Parchment","Old paper with dark ink",D.d7i,D.Hl,L.ji,"\u2767",B.K,!0,!1,!1,!0)
D.aip=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.by0=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dDk=w([D.aip,D.by0],x.O)
D.bsn=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bxd=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bQ2=new C.vh("minimal","Clean paper","Plain and elegant, like a printed book",D.dDk,D.bsn,D.bxd,"",B.K,!0,!0,!1,!0)
D.bQ4=new C.vh("midnight","Midnight","Deep blue with silver stars",K.aFG,B.cH,B.cm,"\u2727",B.K,!0,!0,!1,!1)
D.bPZ=new C.vh("emerald","Emerald library","Green cloth, title on the left",W.aCD,E.kI,B.hb,"\u25c6",B.aU,!0,!1,!1,!1)
D.byx=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dBd=w([B.eE,D.byx],x.O)
D.btL=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bv1=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bQ3=new C.vh("rose","Rose vintage","Burgundy with rose-gold lettering",D.dBd,D.btL,D.bv1,"\u2740",B.K,!0,!1,!0,!1)
D.dGz=w([B.cx,F.nl],x.O)
D.bQ1=new C.vh("modern","Modern","Dark, bold, left-aligned",D.dGz,B.aH,B.c,"",B.aU,!1,!0,!1,!1)
D.a6R=w([D.bQ5,D.bQ0,D.bQ_,D.bQ2,D.bQ4,D.bPZ,D.bQ3,D.bQ1],A.as("N<vh>"))
D.cWf=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dGl=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bQg=new C.lS('What does "Ubuntu" mean?',D.dGl,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d9o=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bQj=new C.lS("In Swahili, what do we call a grandmother?",D.d9o,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d9f=w(["Babu","Mama","Baba","Dada"],x.s)
D.bQe=new C.lS("In Swahili, what do we call a grandfather?",D.d9f,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.daK=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bQi=new C.lS("What is a sister called in Swahili?",D.daK,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dgw=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bQf=new C.lS("What is a brother called in Swahili?",D.dgw,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d9e=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bQq=new C.lS("Which word means father in Swahili?",D.d9e,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dHC=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bQp=new C.lS('"Umoja ni nguvu" means...',D.dHC,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dE7=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bQr=new C.lS('"Haba na haba hujaza kibaba" teaches us...',D.dE7,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.ddR=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bQo=new C.lS('The African saying "It takes a village to raise a child" means...',D.ddR,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dHV=w(["The elders","The market","The river","The drum"],x.s)
D.bQk=new C.lS("Who is the traditional keeper of the family stories?",D.dHV,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.d_C=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bQh=new C.lS("Why do families sit round the fire at night?",D.d_C,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dGB=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bQm=new C.lS('What does "Harambee" mean?',D.dGB,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.djU=w(["An elder","A baby","A market","A cow"],x.s)
D.bQl=new C.lS('"Mzee" is a respectful word for...',D.djU,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dB2=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bQn=new C.lS('What does "Shikamoo" show?',D.dB2,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aCy=w([D.bQg,D.bQj,D.bQe,D.bQi,D.bQf,D.bQq,D.bQp,D.bQr,D.bQo,D.bQk,D.bQh,D.bQm,D.bQl,D.bQn],x.J)
D.d45=w([90,360],x.n)
D.d6O=w([B.bU,B.bp],x.O)
D.bur=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d7y=w([D.aip,D.bur],x.O)
D.d8k=w([-1,-0.3,0.4,1],x.n)
D.d9l=w([0,0.45,0.72,0.92,1],x.n)
D.bof=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d9H=w([D.bof,B.bF],x.O)
D.blU=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.an6=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.dan=w([B.dD,D.blU,D.an6],x.O)
D.dby=w([B.be,B.jx,B.pN],x.O)
D.boP=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bx5=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.blA=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.dbE=w([D.boP,D.bx5,D.blA],x.O)
D.dc1=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.dcb=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hW_=new C.afu(78,424,48,44,56)
D.hVY=new C.afu(214,396,34,34,42)
D.hVZ=new C.afu(442,452,56,50,64)
D.aDw=w([D.hW_,D.hVY,D.hVZ],A.as("N<afu>"))
D.dcM=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bkN=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bqK=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dJM=w([D.akm,D.bkN,D.bqK],x.O)
D.bQ6=new C.vi("leather","Leather",D.dJM,"vintage")
D.dl_=w([B.dl,B.Ha,Ac.a_H],x.O)
D.bQd=new C.vi("midnight","Midnight",D.dl_,"starry")
D.dbz=w([B.ew,B.em,B.lC],x.O)
D.bQc=new C.vi("forest","Forest",D.dbz,"story")
D.dM6=w([B.ex,B.eE,B.kK],x.O)
D.bQ9=new C.vi("burgundy","Burgundy",D.dM6,"royal")
D.cSH=w([B.aB,B.ne,B.nP],x.O)
D.bQa=new C.vi("royal","Royal",D.cSH,"royal")
D.deq=w([B.bz,B.cx,F.nl],x.O)
D.bQ7=new C.vi("charcoal","Charcoal",D.deq,"geo")
D.dJV=w([B.ca,B.e1,B.x_],x.O)
D.bQb=new C.vi("sunset","Sunset",D.dJV,"sunset")
D.dKJ=w([B.jx,B.ze,B.a_L],x.O)
D.bQ8=new C.vi("ocean","Ocean",D.dKJ,"band")
D.AN=w([D.bQ6,D.bQd,D.bQc,D.bQ9,D.bQa,D.bQ7,D.bQb,D.bQ8],A.as("N<vi>"))
D.df_=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.dfJ=w([B.an,B.aM,B.a_],x.O)
D.dhg=w([B.eE,B.em,B.dl,B.j1,B.zg,B.cZ,B.kg,B.cU,B.de],x.O)
D.dhh=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fB0=new A.d4(B.dH,B.dP,8)
D.dhu=w([D.fB0],x.F)
D.diO=w([B.c6,B.e1,B.kc],x.O)
D.bmL=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.br2=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bvn=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dj5=w([D.bmL,G.alO,D.br2,D.bvn,D.an6],x.O)
D.djp=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.djG=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bka=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bql=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dkd=w([D.bka,D.ajP,D.bql],x.O)
D.dkV=w([B.c6,B.hL],x.O)
D.dl0=w([G.nS,B.iv,G.aiB,B.d0],x.O)
D.dmK=w([B.d0,G.nS,B.iv,D.m_,B.d0],x.O)
D.dns=w([B.aQ,B.zc,B.z3],x.O)
D.f2Z=new A.y(-0.65,0.6)
D.fgw=new A.y(-0.2,0.95)
D.fhP=new A.y(0.25,0.95)
D.f6z=new A.y(0.7,0.6)
D.fiq=new A.y(1,0.1)
D.dok=w([Am.Ws,D.f2Z,D.fgw,D.fhP,D.f6z,D.fiq],x.G)
D.bte=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bzL=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bnN=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dor=w([D.bte,D.bzL,D.bnN],x.O)
D.dox=w([B.bO,B.c3,B.dI,B.aQ],x.O)
D.dp6=w([B.hZ,B.ca,B.v4],x.O)
D.dpw=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dpJ=w([B.fo,B.cZ],x.O)
D.buN=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dqc=w([D.buN,D.ain],x.O)
D.dqo=w([B.cY,B.fO,B.h_],x.O)
D.dqB=w([B.aH,B.bp,B.dl],x.O)
D.drc=w([B.ej,B.dq,B.em],x.O)
D.drB=w([B.dV,B.dl,B.Ha],x.O)
D.drF=w([B.bu,B.nb,B.de],x.O)
D.drX=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bu_=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bs5=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dsj=w([D.bu_,D.ajL,D.bs5],x.O)
D.dtc=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.duo=w([1,0,7,6,3,2],x.t)
D.a7T=w(["leather","linen","plain","stars","rays"],x.s)
D.duA=w([0.5,2,3.6],x.n)
D.dvb=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bYl=new A.a_(983781,"MaterialIcons",!1)
D.aF0=w([B.QJ,B.hQ,B.kQ,B.ij,F.aub,B.IN,B.rs,D.bYl,K.atP,B.E5,B.rx,B.m8],A.as("N<a_>"))
D.a7X=w(["double","single","corners","none"],x.s)
D.bPW=new C.A3("Little Seed","\ud83c\udf31",0)
D.bPY=new C.A3("Young Listener","\ud83d\udc42",40)
D.bPX=new C.A3("Storyteller","\ud83e\ude98",120)
D.bPV=new C.A3("Village Pride","\ud83c\udfe1",300)
D.bPT=new C.A3("Keeper of Roots","\ud83c\udf33",700)
D.bPU=new C.A3("Elder of the Fire","\ud83d\udd25",1500)
D.aF2=w([D.bPW,D.bPY,D.bPX,D.bPV,D.bPT,D.bPU],A.as("N<A3>"))
D.dwv=w([B.d1,B.bl,B.cU],x.O)
D.dwN=w([],x.C)
D.EH=w([],x.u)
D.aPm=new A.m(225,528)
D.f4G=new A.y(D.aPm,1)
D.eGQ=new A.m(350,548)
D.fbm=new A.y(D.eGQ,0.95)
D.aPg=new A.m(158,656)
D.fbf=new A.y(D.aPg,1.12)
D.eHD=new A.m(92,544)
D.f04=new A.y(D.eHD,0.93)
D.eGT=new A.m(398,614)
D.f6X=new A.y(D.eGT,1.04)
D.eGH=new A.m(318,662)
D.eWe=new A.y(D.eGH,1.1)
D.a84=w([D.f4G,D.fbm,D.fbf,D.f04,D.f6X,D.eWe],A.as("N<+(m,G)>"))
D.dyZ=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dzz=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dAH=w([B.d0,G.nS,B.iv,D.m_,B.d0,B.iv],x.O)
D.dCa=w([B.as,B.fO,B.j1],x.O)
D.dCT=w([-70,58],x.n)
D.dCV=w([-70,-30,20],x.n)
D.dE4=w([B.bu,B.nb,B.a0P],x.O)
D.dEn=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.e0j=new C.mp("construction","Construction","Jobsite & builds",B.rw)
D.e0q=new C.mp("house","Home Build","Houses & rooms",B.vF)
D.e0g=new C.mp("grocery","Grocery","Store & pantry",B.a5l)
D.e0f=new C.mp("calculator","Calculations","Math & estimates",B.QQ)
D.e0o=new C.mp("lumber","Materials","Lumber & supplies",B.IK)
D.e0c=new C.mp("kitchen","Kitchen","Remodel & meals",A3.Rd)
D.bYi=new A.a_(983756,"MaterialIcons",!1)
D.e0h=new C.mp("landscape","Landscaping","Yard & garden",D.bYi)
D.e0b=new C.mp("plumbing","Plumbing","Pipes & water",B.qh)
D.e0r=new C.mp("electrical","Electrical","Wiring & power",B.fR)
D.e09=new C.mp("store","Retail Shop","Daily business",B.kr)
D.e0a=new C.mp("paint_remodel","Paint & Remodel","Colors & walls",A3.R7)
D.bXD=new A.a_(983311,"MaterialIcons",!1)
D.e0n=new C.mp("roofing","Roofing","Roofs & exteriors",D.bXD)
D.bYv=new A.a_(983986,"MaterialIcons",!1)
D.e08=new C.mp("warehouse","Warehouse","Storage & stock",D.bYv)
D.e0l=new C.mp("vehicles","Vehicles","Fleet & transport",B.E1)
D.bVl=new A.a_(62785,"MaterialIcons",!1)
D.e0e=new C.mp("farm","Farm","Crops & livestock",D.bVl)
D.e0d=new C.mp("restaurant","Restaurant","Food & catering",B.vM)
D.e0k=new C.mp("tools","Tools","Workshop gear",B.DY)
D.e0p=new C.mp("wallet","Cash & Wallet","Quick spending",B.jG)
D.e0m=new C.mp("concrete","Concrete","Foundation work",F.asT)
D.e0i=new C.mp("blueprint","Blueprint","Plans & design",Ar.asq)
D.a8t=w([D.e0j,D.e0q,D.e0g,D.e0f,D.e0o,D.e0c,D.e0h,D.e0b,D.e0r,D.e09,D.e0a,D.e0n,D.e08,D.e0l,D.e0e,D.e0d,D.e0k,D.e0p,D.e0m,D.e0i],A.as("N<mp>"))
D.dF4=w([B.bv,B.bl],x.O)
D.dFY=w([B.iJ,B.oM,B.e7],x.O)
D.akA=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.alA=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bsr=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bjF=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aGe=w([D.akA,D.alA,D.bsr,D.bjF],x.O)
D.dHf=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a8D=w(["top","middle","bottom"],x.s)
D.dIS=w([B.cw,B.bp,B.dl],x.O)
D.aGy=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bdd=new A.ac(0,B.G,B.b8,B.J,14)
D.aGC=w([D.bdd],x.V)
D.brh=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dJE=w([D.aj2,D.a0O,D.brh],x.O)
D.dJF=w([B.bf,B.dq,B.em],x.O)
D.eGq=new A.m(24,-8)
D.eH8=new A.m(48,0)
D.eGm=new A.m(24,6)
D.dLy=w([B.J,D.eGq,D.eH8,D.eGm],x.g)
D.dM_=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eCO={top:0,middle:1,bottom:2}
D.dPq=new A.bm(D.eCO,["Top","Middle","Bottom"],x.r)
D.eCk={double:0,single:1,corners:2,none:3}
D.dPw=new A.bm(D.eCk,["Double line","One line","Corners","None"],x.r)
D.eDE={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dRc=new A.bm(D.eDE,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dRo=new A.bm(B.il,[],A.as("bm<F,+(o,o)>"))
D.eCF={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.EW=new A.bm(D.eCF,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bm<o,F>"))
D.dVI=new H.OB(32,null)
D.dVJ=new H.OB(40,null)
D.dVK=new H.OB(46,null)
D.aOQ=new C.aw5(null)
D.eFh=new A.m(0,40)
D.eFi=new A.m(0,412)
D.eFl=new A.m(0,900)
D.eFu=new A.m(0,-34)
D.eFv=new A.m(0,-46)
D.eFx=new A.m(0,-74)
D.eFA=new A.m(100,300)
D.eFB=new A.m(10,14)
D.eFE=new A.m(10,-10)
D.eFJ=new A.m(10,-46)
D.eFK=new A.m(10,-58)
D.eFL=new A.m(116,442)
D.eFN=new A.m(11,-1)
D.eFO=new A.m(11,-10)
D.eFP=new A.m(11,-21)
D.aPb=new A.m(11,-60)
D.eFW=new A.m(14,-2)
D.eFX=new A.m(150,520)
D.aaT=new A.m(150,592)
D.eG_=new A.m(15,-15)
D.eG0=new A.m(16,-1)
D.eG3=new A.m(190,444)
D.eG6=new A.m(1,5)
D.eGe=new A.m(21,-78)
D.eGf=new A.m(222,615)
D.KN=new A.m(225,300)
D.aaV=new A.m(225,574)
D.eGp=new A.m(24,-52)
D.eGr=new A.m(250,210)
D.eGC=new A.m(2,-56)
D.aPq=new A.m(300,0)
D.eGD=new A.m(300,440)
D.eGG=new A.m(318,476)
D.eGJ=new A.m(324,144)
D.aaY=new A.m(332,150)
D.eGL=new A.m(335,585)
D.eGM=new A.m(338,140)
D.eGN=new A.m(340,158)
D.eGP=new A.m(34,-60)
D.Fo=new A.m(36,-24)
D.eGR=new A.m(372,470)
D.eGS=new A.m(390,455)
D.eH0=new A.m(42,468)
D.eH1=new A.m(431,510)
D.eH2=new A.m(431,520)
D.eH3=new A.m(45,-92)
D.eH4=new A.m(46,20)
D.eH5=new A.m(46,-92)
D.eH6=new A.m(46,-94)
D.eH7=new A.m(47,-4)
D.eH9=new A.m(48,-4)
D.eHh=new A.m(4,-26)
D.eHp=new A.m(60,455)
D.eHy=new A.m(8,14)
D.eHC=new A.m(8,-76)
D.eHE=new A.m(95,575)
D.eHF=new A.m(98,-24)
D.eHH=new A.m(9,-2)
D.eHI=new A.m(9,-58)
D.aPz=new A.m(9,-79)
D.eHJ=new A.m(9,-9)
D.eIo=new A.m(16.5,8)
D.eIq=new A.m(3.2,0)
D.eIr=new A.m(-16.5,8)
D.eIy=new A.m(16.5,2)
D.eIB=new A.m(-3.2,0)
D.eIJ=new A.m(9.5,6)
D.eIM=new A.m(-10,14)
D.eIN=new A.m(-10,-12)
D.eIO=new A.m(-10,-58)
D.eIQ=new A.m(-11,-10)
D.eIS=new A.m(-11,-60)
D.eIT=new A.m(-12,-14)
D.eIU=new A.m(-12,-16)
D.eIZ=new A.m(-14,-2)
D.eJ1=new A.m(-15,-15)
D.eJ2=new A.m(-15,-3)
D.eJ4=new A.m(-16,-1)
D.eJk=new A.m(-24,-52)
D.eJt=new A.m(-2,-34)
D.eJu=new A.m(-2,-38)
D.eJw=new A.m(-30,-100)
D.ab0=new A.m(-36,-24)
D.eJH=new A.m(-4,-26)
D.eJJ=new A.m(-4,-6)
D.eJS=new A.m(-8,-3)
D.eJT=new A.m(-8,-48)
D.eJW=new A.m(-9,-2)
D.eJY=new A.m(-9,-58)
D.eJZ=new A.m(-9,-79)
D.eK_=new A.m(-9,-9)
D.eK2=new A.m(-9.5,6)
D.eKg=new A.m(-16.5,2)
D.hb8=new A.D("Write a new book",null,B.hk,null,B.K,null,null,null,null,null,null,null)
D.eKQ=new A.C(B.lc,D.hb8,null)
D.hqe=new A.D("Tap to go on",null,B.wq,null,null,null,null,null,null,null,null,null)
D.eLc=new A.C(B.kP,D.hqe,null)
D.aul=new A.ae(B.ii,18,B.c,null,null,null)
D.h4_=new A.D("Add",null,B.kY,null,null,null,null,null,null,null,null,null)
D.doN=w([D.aul,B.pv,D.h4_],x.p)
D.fy3=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.doN,null)
D.eLf=new A.C(B.oa,D.fy3,null)
D.eLh=new A.C(E.aod,A7.ZY,null)
D.fYk=new A.H(!0,B.c,null,null,null,null,13.5,B.C,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7i=new A.D("New Project",null,D.fYk,null,null,null,null,null,null,null,null,null)
D.dtE=w([D.aul,B.aa,D.h7i],x.p)
D.fy6=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dtE,null)
D.eLw=new A.C(B.hq,D.fy6,null)
D.h9R=new A.D("Choose your header",null,B.uB,null,null,null,null,null,null,null,null,null)
D.eLR=new A.C(B.ih,D.h9R,null)
D.biS=new A.fp(2.2,null,null,null,null,B.cZ,null,null,null,null)
D.fDT=new A.a4(22,22,D.biS,null)
D.bgX=new A.cp(B.z,null,null,D.fDT,null)
D.eLW=new A.C(B.a2b,D.bgX,null)
D.bIC=new A.R(14,2,14,6)
D.hof=new A.D("The top of your book. Tap a design to see it.",null,V.uC,null,null,null,null,null,null,null,null,null)
D.eLX=new A.C(D.bIC,D.hof,null)
D.h9_=new A.D("\ud83c\udfc6 A new record!",null,B.h6,null,null,null,null,null,null,null,null,null)
D.eLZ=new A.C(B.kP,D.h9_,null)
D.eNz=new A.jf(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eND=new A.jf(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aQe=new A.jf(1,0.9607843137254902,0.48627450980392156,0)
D.KU=new A.jf(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Bm=new A.jf(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eNJ=new A.jf(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hYb=new C.bmE(null)
D.bDo=new A.n4(D.hYb,null,B.az,null,null)
D.aTS=new A.cS(0,0,0,0,null,null,D.bDo,null)
D.h41=new A.D("\ud83c\udfc5",null,B.adi,null,null,null,null,null,null,null,null,null)
D.eS8=new A.cS(null,0,-34,null,null,null,D.h41,null)
D.f_I=new A.y("E","Sit by the fire again")
D.f5x=new A.y("C","Good Learner")
D.f9b=new A.y("D","Still Growing")
D.fe7=new A.y(-42,42)
D.ffy=new A.y("B","Faithful Listener")
D.fhR=new A.y("A","Keeper of the Family")
D.flb=new A.aV(-17,0.7,0)
D.flM=new A.aV(-8,0.95,1.3)
D.fmU=new A.aV(18,0.65,5.2)
D.fmW=new A.aV(0,1.15,2.6)
D.fng=new A.aV(9,0.9,3.9)
D.fph=new A.b4([0,0,1,1])
D.aVs=new A.a5(0,0,520,160)
D.fv_=new A.a5(10,612,440,618)
D.fv0=new A.a5(10,612,440,628)
D.fv3=new A.a5(14,-64,34,-12)
D.fv6=new A.a5(300,336,350,348)
D.abV=new A.a5(30,96,420,346)
D.fv7=new A.a5(30,-9,46,1)
D.fv8=new A.a5(4,2,11,14)
D.fva=new A.a5(-8,-12.5,8,-7)
D.fvb=new A.a5(-16.5,-21,16.5,1)
D.fvc=new A.a5(60,342,88,348)
D.Wt=new A.a5(66,-66,94,-36)
D.fvd=new A.a5(6,8,10,14)
D.fvg=new A.a5(95,343,115,348)
D.fvh=new A.a5(-6.5,-74,6.5,-58)
D.fvp=new A.a5(-100,-74,100,-12)
D.fvq=new A.a5(-10,8,-6,14)
D.fvr=new A.a5(-11,2,-4,14)
D.fvs=new A.a5(-11,-70,11,-56)
D.fvz=new A.a5(-13,-24,13,-4)
D.fvG=new A.a5(-15,-21,15,0)
D.fvJ=new A.a5(-16,-21,16,1)
D.fvK=new A.a5(-16,-21,16,2)
D.fvN=new A.a5(-16,-26,16,-6)
D.fvV=new A.a5(-230,-26,230,26)
D.fwj=new A.a5(-38,-26,12,-6)
D.fwn=new A.a5(-3,-70,3,-63)
D.fwo=new A.a5(-44,-22,44,0)
D.fwq=new A.a5(-46,-9,-30,1)
D.aVw=new A.a5(-80,-190,80,20)
D.fwx=new A.a5(-8,-26,40,-6)
D.fwy=new A.a5(-98,-80,92,-75)
D.fwz=new A.a5(-9,-15,9,-9)
D.hnM=new A.D("Let the AI write it from your tree",null,B.iY,null,B.K,null,null,null,null,null,null,null)
D.bR0=new A.d_(1,B.c9,D.hnM,null)
D.dkU=w([E.RF,B.aa,D.bR0],x.p)
D.fxH=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dkU,null)
D.h3D=new A.D("Save member",null,B.cg,null,null,null,null,null,null,null,null,null)
D.dCC=w([D.ave,B.aa,D.h3D],x.p)
D.fxS=new A.c_(B.aJ,B.bc,B.i,B.l,null,B.p,null,0,D.dCC,null)
D.c29=new A.ae(B.ix,14,B.b9,null,null,null)
D.fRN=new A.H(!0,B.b9,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7J=new A.D("Cashier",null,D.fRN,null,null,null,null,null,null,null,null,null)
D.dud=w([D.c29,B.b7,D.h7J],x.p)
D.fxW=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dud,null)
D.h3E=new A.D("Transfer & settings",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bOH=new A.bu(1,B.ba,D.h3E,null)
D.daU=w([D.auO,B.ar,D.bOH],x.p)
D.fxX=new A.c_(B.aJ,B.e,B.i,B.l,null,B.p,null,0,D.daU,null)
D.fCx=new A.av(16,40)
D.fCC=new A.av(22,64)
D.fCJ=new A.av(280,88)
D.fDx=new A.a4(30,null,null,null)
D.h2J=new A.D("The teacher is writing\u2026",null,B.yg,null,null,null,null,null,null,null,null,null)
D.bi3=new A.cp(B.z,null,null,D.h2J,null)
D.hRU=new A.b9("w",x.W)
D.fDX=new A.a4(null,56,D.bi3,D.hRU)
D.fEJ=new A.i_(5,8,8,1,null)
D.fER=new A.i_(2,12,12,1.05,null)
D.h7o=new A.D("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fFG=new A.b3(D.h7o,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7E=new A.D("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aXR=new A.b3(D.h7E,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hgb=new A.D("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fG9=new A.b3(D.hgb,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hrh=new A.D("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fGe=new A.b3(D.hrh,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h9P=new A.D("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fGl=new A.b3(D.h9P,null,null,null,null,null,null,null,null,null,null,null,null,B.fQ,!1,null,null,null,B.t,null)
D.hos=new A.D("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aXW=new A.b3(D.hos,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h9N=new A.D("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fGL=new A.b3(D.h9N,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h4i=new A.D("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fGN=new A.b3(D.h4i,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hdB=new A.D("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fGT=new A.b3(D.hdB,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hs3=new A.D("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fHz=new A.b3(D.hs3,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hmE=new A.D("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fHZ=new A.b3(D.hmE,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hrl=new A.D("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fI1=new A.b3(D.hrl,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hhQ=new A.D("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fI3=new A.b3(D.hhQ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hbL=new A.D("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fI4=new A.b3(D.hbL,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hbM=new A.D("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fJ5=new A.b3(D.hbM,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7q=new A.D("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fJn=new A.b3(D.h7q,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h9s=new A.D("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fJH=new A.b3(D.h9s,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hhi=new A.D("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fJY=new A.b3(D.hhi,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hcB=new A.D("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fJZ=new A.b3(D.hcB,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fX0=new A.H(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLx=new A.eG("\u2665",null,null,B.cW,null,null,null,null,null,null,D.fX0)
D.fU6=new A.H(!0,B.aS,null,null,null,null,28,B.O,B.cN,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLN=new A.eG("Today: how well do you know the family?",null,null,B.cW,null,null,null,null,null,null,D.fU6)
D.fM3=new A.H(!0,B.qT,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNf=new A.H(!0,D.l6,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fND=new A.H(!0,D.l6,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNH=new A.H(!0,B.d0,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNQ=new A.H(!0,D.fN,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO0=new A.H(!0,D.fN,null,null,null,null,13,B.C,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOl=new A.ts(!0,B.uo,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOB=new A.H(!0,B.d0,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOF=new A.H(!0,D.l6,null,null,null,null,18,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOG=new A.H(!0,B.d0,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOL=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOO=new A.H(!0,B.d0,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPk=new A.H(!0,B.b9,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPl=new A.H(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPn=new A.H(!0,B.aS,null,null,null,null,15.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPQ=new A.H(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZe=new A.H(!0,B.aR,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZf=new A.H(!0,D.lZ,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQg=new A.H(!0,B.d0,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adn=new A.ts(!0,B.W_,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Xn=new A.H(!0,B.d0,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQq=new A.H(!0,B.a_,null,null,null,null,12.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQv=new A.H(!0,D.fN,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQX=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS6=new A.H(!0,D.fN,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZp=new A.H(!0,D.fN,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSq=new A.H(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSC=new A.H(!0,D.fN,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSE=new A.H(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSL=new A.H(!0,L.ji,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZt=new A.H(!0,D.fN,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTI=new A.H(!0,D.fN,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU_=new A.H(!0,D.fN,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU1=new A.H(!0,B.a_,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU3=new A.H(!0,B.d0,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUs=new A.H(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.JH,null,null,null)
D.aZI=new A.H(!0,D.fN,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUT=new A.H(!0,B.a_,null,null,null,null,17,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVe=new A.H(!0,B.fs,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVC=new A.H(!0,B.bU,null,null,null,null,8,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVH=new A.H(!0,B.bC,null,null,null,null,11,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVT=new A.H(!0,B.c,null,null,null,null,13.5,B.C,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVW=new A.H(!0,D.fN,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW3=new A.H(!0,D.Hl,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWf=new A.H(!0,B.b9,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWE=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWL=new A.H(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ex,null,null,null)
D.fXb=new A.H(!0,B.d0,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXj=new A.H(!0,B.cZ,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXw=new A.H(!0,D.m_,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_6=new A.H(!0,D.fN,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.M6=new A.H(!0,B.d0,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_8=new A.H(!0,B.d0,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ex,null,null,null)
D.fXR=new A.H(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXV=new A.H(!0,G.nS,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYi=new A.H(!0,B.b9,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYz=new A.H(!0,D.fN,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYY=new A.H(!0,B.c,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZn=new A.H(!0,D.fN,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZV=new A.H(!0,D.fN,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h__=new A.H(!0,B.an,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_9=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adY=new A.H(!0,B.an,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae0=new A.H(!0,D.lZ,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0W=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1g=new A.H(!0,B.aS,null,null,null,null,27,B.O,B.cN,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1n=new A.H(!0,L.ji,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1v=new A.H(!0,L.ji,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1Z=new A.D("Time:",null,B.hI,null,null,null,null,null,null,null,null,null)
D.h2k=new A.D("\ud83c\udfae",null,K.adN,null,null,null,null,null,null,null,null,null)
D.h2l=new A.D("Themes",null,B.py,null,null,null,null,null,null,null,null,null)
D.h2R=new A.D("\ud83c\udfb2",null,B.yq,null,null,null,null,null,null,null,null,null)
D.h2V=new A.D("Delete this game?",null,B.iY,null,null,null,null,null,null,null,null,null)
D.h31=new A.D("Add Item",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fSk=new A.H(!0,B.a_,null,null,null,null,22,B.C,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3s=new A.D("Debt receipt",null,D.fSk,null,B.K,null,null,null,null,null,null,null)
D.b_l=new A.H(!0,B.an,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3L=new A.D("Person who owes",null,D.b_l,null,null,null,null,null,null,null,null,null)
D.h4M=new A.D("Notes",null,B.adz,null,null,null,null,null,null,null,null,null)
D.h5g=new A.D("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fRf=new A.H(!0,B.c,null,null,null,null,11,B.C,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5i=new A.D("Share",null,D.fRf,null,null,null,null,null,null,null,null,null)
D.h6j=new A.D("Move your family trees",null,I.adV,null,null,null,null,null,null,null,null,null)
D.h6Z=new A.D("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.h7D=new A.D("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.h80=new A.D("SAVE",null,D.M6,null,null,null,null,null,null,null,null,null)
D.h8E=new A.D("The round button is the right answer.",null,V.yl,null,null,null,null,null,null,null,null,null)
D.h8Z=new A.D("Remove this book?",null,B.h6,null,null,null,null,null,null,null,null,null)
D.fYf=new A.H(!0,B.d0,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ex,null,null,null)
D.h9x=new A.D("Fireside Stories",null,D.fYf,null,null,null,null,null,null,null,null,null)
D.b_Q=new A.D("Download",null,B.cg,null,null,null,null,null,null,null,null,null)
D.had=new A.D("What should the AI do?",null,B.dw,null,null,null,null,null,null,null,null,null)
D.fQQ=new A.H(!0,D.lZ,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.has=new A.D("REPORT CARD",null,D.fQQ,null,null,null,null,null,null,null,null,null)
D.hbf=new A.D("Calabash Catch",null,B.XI,null,null,null,null,null,null,null,null,null)
D.hbH=new A.D("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.hc8=new A.D("\ud83c\udfe1",null,B.FT,null,null,null,null,null,null,null,null,null)
D.hcQ=new A.D("Ribbon bookmark",null,B.jO,null,null,null,null,null,null,null,null,null)
D.fZU=new A.H(!0,B.b9,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hdk=new A.D("NGMY.ORG",null,D.fZU,null,B.K,null,null,null,null,null,null,null)
D.heD=new A.D("Scan family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.fVX=new A.H(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hfq=new A.D("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fVX,null,B.K,null,null,null,null,null,null,null)
D.hgF=new A.D("Delete",null,B.Xh,null,null,null,null,null,null,null,null,null)
D.hgG=new A.D("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.hgO=new A.D("Thumbnail",null,B.py,null,null,null,null,null,null,null,null,null)
D.hhn=new A.D("Save the cover",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hhs=new A.D("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.BP,null,B.K,null,null,null,null,null,null,null)
D.hhR=new A.D("Your photos",null,B.py,null,null,null,null,null,null,null,null,null)
D.hi7=new A.D("Create Project",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hiu=new A.D("\u2b50 stars",null,B.FU,null,null,null,null,null,null,null,null,null)
D.hiI=new A.D("Design your cover",null,B.uB,null,null,null,null,null,null,null,null,null)
D.hiO=new A.D("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.hiR=new A.D("PICTURE",null,N.wu,null,null,null,null,null,null,null,null,null)
D.hiT=new A.D("\ud83c\udfaf",null,D.XH,null,null,null,null,null,null,null,null,null)
D.hjf=new A.D("Paid",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hjh=new A.D("You can undo it right after.",null,V.yl,null,null,null,null,null,null,null,null,null)
D.hjR=new A.D("Print",null,B.ws,null,null,null,null,null,null,null,null,null)
D.hkh=new A.D("Amount owed",null,D.b_l,null,null,null,null,null,null,null,null,null)
D.hkx=new A.D("Got it",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hl9=new A.D("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hlc=new A.D("Add to budget",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hlC=new A.D("Debtor signature",null,B.adz,null,null,null,null,null,null,null,null,null)
D.hlO=new A.D("Change icon",null,B.ady,null,null,null,null,null,null,null,null,null)
D.hmF=new A.D("MADE BY THE SYSTEM, FROM YOUR TREE",null,U.uE,null,null,null,null,null,null,null,null,null)
D.hn8=new A.D("Family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hne=new A.D("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.XG,null,null,null,null,null,null,null,null,null)
D.hnC=new A.D("Download",null,B.ws,null,null,null,null,null,null,null,null,null)
D.hnD=new A.D("The person who planted this tree has not made a game yet.",null,Af.yp,null,null,null,null,null,null,null,null,null)
D.hnH=new A.D("Change",null,B.py,null,null,null,null,null,null,null,null,null)
D.hoy=new A.D("Clear all",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hoB=new A.D("WHAT SHOULD IT CHANGE?",null,N.wu,null,null,null,null,null,null,null,null,null)
D.hp9=new A.D("COLOUR",null,N.wu,null,null,null,null,null,null,null,null,null)
D.hpo=new A.D("Do it",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hps=new A.D("Create Tree",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hpE=new A.D("Give me another clue",null,D.M6,null,null,null,null,null,null,null,null,null)
D.hqA=new A.D("Create Family Tree",null,B.fk,null,null,null,null,null,null,null,null,null)
D.hqK=new A.D("THE TEACHER EXPLAINS THESE",null,U.uE,null,null,null,null,null,null,null,null,null)
D.fM2=new A.H(!0,E.kI,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hqQ=new A.D("Write the first page myself",null,D.fM2,null,null,null,null,null,null,null,null,null)
D.hro=new A.D("Use this header",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hrv=new A.D("Create Project",null,E.b_0,null,null,null,null,null,null,null,null,null)
D.hTo=new C.ae6(1,"header")
D.af1=new C.ae6(2,"projects")
D.hTp=new C.ae6(3,"cashier")
D.af2=new C.ae6(4,"familyTree")
D.i8a=new C.cKG(0,"start")
D.i8b=new C.cKH(0,"start")
D.hTC=new C.a_M(null)
D.hUE=new C.a0l(null)
D.dRl=new A.bm(B.il,[],A.as("bm<o,H9>"))
D.dwE=w([],x.dE)
D.dwF=w([],x.M)
D.hVi=new C.bjN(D.dRl,D.dwE,D.dwF,0,0,null,null)
D.b4n=new C.a1c(0,"intro")
D.b4o=new C.a1c(1,"countdown")
D.aff=new C.a1c(2,"ask")
D.YD=new C.a1c(3,"reveal")
D.b4p=new C.a1c(4,"end")
D.hYd=new C.tB(F.Hu,D.m_,B.d0,F.mq,5,!1,!1,!1,0,null)
D.hYf=new C.tB(F.Hu,B.ex,B.d0,B.bP,2,!0,!0,!1,2,B.d0)
D.hYh=new C.tB(B.r6,B.cZ,B.d0,F.mq,2,!0,!1,!1,2,B.as)
D.hYi=new C.tB(F.Hu,B.dV,B.d0,F.mq,5,!1,!1,!1,1,null)
D.hYl=new C.tB(F.a14,D.alA,B.d0,F.mq,4,!0,!1,!0,0,null)
D.b4s=new C.tB(F.a14,B.e1,B.d0,F.mq,3,!0,!1,!0,2,null)
D.b4t=new C.tB(F.tA,D.m_,B.c,F.mq,0,!1,!1,!0,0,null)
D.b4u=new C.tB(B.r6,B.aB,B.d0,B.bP,2,!0,!0,!1,2,B.e1)
D.b4v=new C.tB(B.r6,G.nS,B.iv,F.mq,5,!1,!1,!0,3,null)
D.hYp=new C.tB(B.r6,B.e1,B.d0,F.mq,0,!0,!1,!1,0,B.aB)
D.b4w=new C.tB(F.Hu,B.ex,B.d0,B.bP,1,!1,!0,!1,1,null)
D.b4x=new C.tB(F.H0,B.as,B.aB,F.mq,4,!0,!1,!0,2,null)
D.hYr=new C.tB(F.tA,B.as,B.ex,F.mq,3,!0,!1,!1,0,null)
D.hYt=new C.tB(B.r6,B.dV,B.d0,B.bP,1,!1,!0,!1,1,null)
D.hYu=new C.tB(F.H0,D.akA,B.c,F.mq,5,!1,!1,!0,0,null)
D.hZ8=new C.a1L(null)
D.i8j=new C.ahA(0,"still")
D.Z_=new C.ahA(1,"walk")
D.b5g=new C.ahA(2,"pound")
D.b5h=new C.ahA(3,"drum")
D.i3J=new C.a35(0,"greet")
D.b5i=new C.a35(1,"teach")
D.afz=new C.a35(2,"ask")
D.i3K=new C.a35(3,"feedback")
D.b5j=new C.a35(4,"end")
D.Z6=new C.a3o(0,"intro")
D.Z7=new C.a3o(1,"asking")
D.C6=new C.a3o(2,"reacting")
D.afK=new C.a3o(3,"driving")
D.afL=new C.a3o(4,"arrived")
D.afT=new C.aNW(0,"projects")
D.b5J=new C.aNW(1,"cashier")
D.i5P=new C.aNW(2,"familyTree")})()};
(a=>{a["qQ3TDNPZmHaHwvTbNnC2PG4ktgk="]=a.current})($__dart_deferred_initializers__);