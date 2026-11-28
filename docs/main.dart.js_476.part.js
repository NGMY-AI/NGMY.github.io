((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A9,S,Z,Aa,P,A_,T,M,Ab,L,A0,U,H,E,Ac,V,Ad,A1,Ae,Af,Ag,Ah,Ai,Q,Aj,Ak,N,A2,Al,A3,A4,A5,W,A6,Am,An,Ao,G,Ap,Aq,Ar,A7,As,At,Au,Av,X,O,F,Aw,I,A8,K,Ax,Y,R,Ay,C={
bJv(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bJv=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uZ(null,""),$async$bJv)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nl(b1)
s=A.c4(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dm(b3,k,Math.min(i,j))
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
return A.b(A.r0(t,a1,B.i8,"book",E.HO),$async$bJv)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Sr(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ab(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A.HZ(l)?y.k:y.y)
for(j=J.a0(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a1(r.a(j.h(a2,a7)),q,p):B.cF
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a56(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJv,v)},
ajJ(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ajJ=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uZ(null,""),$async$ajJ)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nl(b6)
s=x.S
r=A.cE(c1,0,A.dy(4,"count",s),A.T(c1).c)
q=H.a4P(new A.O(r,new C.h1q(),r.$ti.k("O<aj.E,o>")).aJ(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.h1p(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.T.au(b7,null)+"\nAllowed values: style one of "+B.d.aJ(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ajJ)
case 6:l=c5
k=H.Sr(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.arA(s,D.dRH,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dm(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.T.au(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ajJ)
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
case 9:if(h.a!==0){s=h.$ti.k("bb<2>")
p=A.ct(new A.bb(h,s),new C.h1r(),s.k("L.E"),p)
p=H.a4P(A.pk(p,3,A.a3(p).k("L.E")).aJ(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cv<1>")
b4=A.B(new A.cv(h,s),s.k("L.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a56(s,b9),$async$ajJ)
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
return A.i($async$ajJ,v)},
hX7(d,e,f){return A.cf(null,B.v.j(0.65),!1,null,new C.hcf(e,f),d,null,!0,!0,x.g2)},
arA:function arA(d,e,f){this.a=d
this.b=e
this.c=f},
h1q:function h1q(){},
h1p:function h1p(d){this.a=d},
h1r:function h1r(){},
hcf:function hcf(d,e){this.a=d
this.b=e},
bHb(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bHb=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fOr())){u=null
w=1
break}t=B.d.cE(b1,new C.fOs())
s=$.U()
r=new A.p2(new A.oE())
q=A.vc(r,D.aVv)
p=A.M()
p.r=B.c.gp(0)
q.aE(D.aVv,p)
o=A.M()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bH
o.e=B.dR
n=new C.fOx(t)
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
a3=new A.aI(s.r,B.ak,null,null,p)
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
a3=new A.aI(s.r,B.ak,null,null,p)
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
return A.b(r.ng().w8(520,160),$async$bHb)
case 4:w=3
return A.b(b3.ht(B.hs),$async$bHb)
case 3:b0=b3
u=b0==null?null:J.eU(B.dN.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHb,v)},
fZR(d){return C.iDq(d)},
iDq(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fZR=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bnb()
n=d.x!=null&&d.Ay(null).length===0
if(d.x!=null)t=n?D.Bm:D.KW
else t=d.gVY()?D.KW:D.aQh
w=3
return A.b(C.bHb(d.ax),$async$fZR)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aqd(s)
r=A.a6R(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aQh}else{p.c=C.xK(q,!0)
p.b=n?D.Bm:D.KW}r.a60(A.hnc(new C.fZT(p,d,new C.fZU(),t,n,o),null,D.bM6,B.wg))
u=r.jE(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fZR,v)},
h6x(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h6x=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fZR(d),$async$h6x)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aE(s,r,"_")
if(q.length>40)q=B.a.av(q,0,40)
u=Ai.HY(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h6x,v)},
fOr:function fOr(){},
fOs:function fOs(){},
fOx:function fOx(d){this.a=d},
fZU:function fZU(){},
fZT:function fZT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fZS:function fZS(){},
hcJ(d,e){var w=0,v=A.j(x.H)
var $async$hcJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.v.j(0.55),!0,null,new C.hcN(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$hcJ)
case 2:return A.h(null,v)}})
return A.i($async$hcJ,v)},
bJY(d,e,f,g){return C.iLL(d,e,f,g)},
iLL(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bJY=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cM.aL(t)}catch(q){r=null}if(r==null||r.length===0){d.M(x.q).f.T(D.fK0)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.hcF(g,r,f),d,null,!0,!0,x.H),$async$bJY)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bJY,v)},
hcO(d,e){var w=0,v=A.j(x.H)
var $async$hcO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.hcR(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$hcO)
case 2:return A.h(null,v)}})
return A.i($async$hcO,v)},
b2w:function b2w(d,e){this.c=d
this.a=e},
cbY:function cbY(){},
bg1:function bg1(d,e){this.b=d
this.a=e},
hcN:function hcN(d,e){this.a=d
this.b=e},
hcK:function hcK(d){this.a=d},
hcL:function hcL(d,e,f){this.a=d
this.b=e
this.c=f},
hcM:function hcM(d,e){this.a=d
this.b=e},
hcF:function hcF(d,e,f){this.a=d
this.b=e
this.c=f},
hcD:function hcD(d){this.a=d},
hcE:function hcE(d,e,f){this.a=d
this.b=e
this.c=f},
hcR:function hcR(d,e){this.a=d
this.b=e},
hcP:function hcP(d){this.a=d},
hcQ:function hcQ(d,e,f){this.a=d
this.b=e
this.c=f},
fTv(d,e){var w=0,v=A.j(x.y),u,t
var $async$fTv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4z(d),$async$fTv)
case 3:t=g
J.mI(t,new C.fTw(e))
u=A.akr(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fTv,v)},
fTw:function fTw(d){this.a=d},
arN:function arN(d,e,f){this.c=d
this.d=e
this.a=f},
aGN:function aGN(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dX7:function dX7(d,e){this.a=d
this.b=e},
dWT:function dWT(d,e){this.a=d
this.b=e},
dWW:function dWW(d,e,f){this.a=d
this.b=e
this.c=f},
dWV:function dWV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWU:function dWU(d,e){this.a=d
this.b=e},
dWX:function dWX(d,e){this.a=d
this.b=e},
dWR:function dWR(){},
dWS:function dWS(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dWQ:function dWQ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dWB:function dWB(d){this.a=d},
dWC:function dWC(d,e,f){this.a=d
this.b=e
this.c=f},
dWD:function dWD(d,e){this.a=d
this.b=e},
dWA:function dWA(d){this.a=d},
dWI:function dWI(d,e){this.a=d
this.b=e},
dWz:function dWz(d){this.a=d},
dWJ:function dWJ(d,e,f){this.a=d
this.b=e
this.c=f},
dWK:function dWK(d,e,f){this.a=d
this.b=e
this.c=f},
dWy:function dWy(d,e){this.a=d
this.b=e},
dWL:function dWL(d,e,f){this.a=d
this.b=e
this.c=f},
dWx:function dWx(d,e){this.a=d
this.b=e},
dWM:function dWM(d,e){this.a=d
this.b=e},
dWw:function dWw(d){this.a=d},
dWN:function dWN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWu:function dWu(){},
dWo:function dWo(d){this.a=d},
dWp:function dWp(d){this.a=d},
dWv:function dWv(d,e){this.a=d
this.b=e},
dWO:function dWO(d,e){this.a=d
this.b=e},
dWt:function dWt(d){this.a=d},
dWP:function dWP(d){this.a=d},
dWs:function dWs(){},
dWE:function dWE(d,e){this.a=d
this.b=e},
dWr:function dWr(d){this.a=d},
dWF:function dWF(d,e,f){this.a=d
this.b=e
this.c=f},
dWq:function dWq(d,e){this.a=d
this.b=e},
dWn:function dWn(d,e){this.a=d
this.b=e},
dWG:function dWG(d){this.a=d},
dWH:function dWH(d,e,f){this.a=d
this.b=e
this.c=f},
dXa:function dXa(){},
dXb:function dXb(d,e){this.a=d
this.b=e},
dX8:function dX8(d){this.a=d},
dX9:function dX9(d){this.a=d},
dX4:function dX4(d,e){this.a=d
this.b=e},
dX5:function dX5(d){this.a=d},
dWY:function dWY(d,e,f){this.a=d
this.b=e
this.c=f},
dWZ:function dWZ(d,e,f){this.a=d
this.b=e
this.c=f},
dX_:function dX_(d,e,f){this.a=d
this.b=e
this.c=f},
dX0:function dX0(d,e,f){this.a=d
this.b=e
this.c=f},
dX1:function dX1(d,e,f){this.a=d
this.b=e
this.c=f},
dX2:function dX2(d,e,f){this.a=d
this.b=e
this.c=f},
dX3:function dX3(d,e,f){this.a=d
this.b=e
this.c=f},
dXc:function dXc(){},
dXd:function dXd(){},
dXe:function dXe(){},
dXf:function dXf(d){this.a=d},
dX6:function dX6(d,e){this.a=d
this.b=e},
hSp(d){return B.d.du(D.a6S,new C.fUg(d),new C.fUh())},
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
fUg:function fUg(d){this.a=d},
fUh:function fUh(){},
anN:function anN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aZb:function aZb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UY:function UY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjI:function bjI(){this.d=$
this.c=this.a=null},
dlZ:function dlZ(d,e){this.a=d
this.b=e},
dlX:function dlX(d,e){this.a=d
this.b=e},
dlY:function dlY(){},
dm_:function dm_(d,e){this.a=d
this.b=e},
hBO(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bf(J.k(u==null?"":u))
return new C.nR(t,w,v,u==null?new A.W(Date.now(),0,!1):u)},
Mo(d,e){return C.iC1(d,e)},
iC1(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
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
o=A.ct(o,new C.fXe(),o.$ti.k("L.E"),x.B)
n=A.a3(o).k("X<L.E>")
o=A.B(new A.X(o,new C.fXf(),n),n.k("L.E"))
B.d.b_(o,new C.fXg())
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
BW(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BW=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BW)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.hbh(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.T.au(r,null)),$async$BW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BW,v)},
aVh(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aVh=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Mo(d,e),$async$aVh)
case 2:u=h
t=J.cK(u)
s=t.bl(u,new C.hk9(f))
if(s===-1)t.cl(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BW(d,e,u),$async$aVh)
case 3:return A.h(null,v)}})
return A.i($async$aVh,v)},
bHF(d,e,f){var w=0,v=A.j(x.H),u
var $async$bHF=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Mo(d,e),$async$bHF)
case 2:u=h
J.mI(u,new C.fTn(f))
w=3
return A.b(C.BW(d,e,u),$async$bHF)
case 3:return A.h(null,v)}})
return A.i($async$bHF,v)},
bHW(d,e){return C.iC0(d,e)},
iC0(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bHW=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bHW)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aW(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Qd
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
if(D.EU.am(0,o.h(0,"foil")))j=A.cV(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.h.D(i==null?25:i,18,36)
h=B.d.q(D.a8E,o.h(0,"position"))?A.cV(o.h(0,"position")):"middle"
g=B.d.q(D.a7Y,o.h(0,"frame"))?A.cV(o.h(0,"frame")):"double"
f=B.d.q(D.a7U,o.h(0,"texture"))?A.cV(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.dfd,o.h(0,"header"))?A.cV(o.h(0,"header")):"classic"
o=new C.J_(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Qd
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Qd
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bHW,v)},
TB(d,e,f){return C.iLf(d,e,f)},
iLf(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
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
T1(d,e){return C.iC2(d,e)},
iC2(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$T1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$T1)
case 7:r=g
q=r.nX("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Mo(d,e),$async$T1)
case 8:if(!j.cM(g)){n=B.a.i(d.toLowerCase())
m=J.lM(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
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
aj2(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aj2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T1(d,e),$async$aj2)
case 3:s=g
r=J.a0(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.K(s,t)
w=5
return A.b(A.aB(),$async$aj2)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aj2)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aj2,v)},
a5h(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a5h=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.T1(d,e),$async$a5h)
case 2:s=h
J.fN(s,f)
w=3
return A.b(A.aB(),$async$a5h)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a5h)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a5h)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a5h)
case 6:return A.h(null,v)}})
return A.i($async$a5h,v)},
nR:function nR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXe:function fXe(){},
fXf:function fXf(){},
fXg:function fXg(){},
hbh:function hbh(){},
hk9:function hk9(d){this.a=d},
fTn:function fTn(d){this.a=d},
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
bVk:function bVk(d){this.a=d},
iLz(d,e,f,g,h,i,j){return A.a7(d,!1).ca(A.e4(new C.hbT(j,i,f,e,h,g),!0,null,x.H))},
SZ(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$SZ=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T1(h,g),$async$SZ)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ab(k)>=6){d.M(x.q).f.T(D.aXU)
u=!1
w=1
break}w=4
return A.b(C.hX7(d,f,e),$async$SZ)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aj2(h,g),$async$SZ)
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
return A.b(C.BW(h,r,p),$async$SZ)
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
hbT:function hbT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a0L:function a0L(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aDJ:function aDJ(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dmE:function dmE(d){this.a=d},
dmD:function dmD(d,e){this.a=d
this.b=e},
dms:function dms(d,e){this.a=d
this.b=e},
dmp:function dmp(d,e){this.a=d
this.b=e},
dm0:function dm0(d){this.a=d},
dm1:function dm1(d,e){this.a=d
this.b=e},
dmt:function dmt(d){this.a=d},
dm9:function dm9(d){this.a=d},
dm7:function dm7(d){this.a=d},
dm8:function dm8(d){this.a=d},
dma:function dma(d){this.a=d},
dmq:function dmq(d){this.a=d},
dmr:function dmr(){},
dm5:function dm5(d){this.a=d},
dm6:function dm6(d,e){this.a=d
this.b=e},
dmb:function dmb(d){this.a=d},
dmc:function dmc(d,e){this.a=d
this.b=e},
dmC:function dmC(d){this.a=d},
dmB:function dmB(d,e){this.a=d
this.b=e},
dmA:function dmA(d){this.a=d},
dmm:function dmm(d){this.a=d},
dml:function dml(d){this.a=d},
dmn:function dmn(d){this.a=d},
dm2:function dm2(d,e){this.a=d
this.b=e},
dmo:function dmo(d,e){this.a=d
this.b=e},
dmf:function dmf(d){this.a=d},
dmg:function dmg(d){this.a=d},
dme:function dme(){},
dmh:function dmh(d){this.a=d},
dmi:function dmi(d){this.a=d},
dmj:function dmj(d,e){this.a=d
this.b=e},
dmk:function dmk(d,e,f){this.a=d
this.b=e
this.c=f},
dmd:function dmd(d,e){this.a=d
this.b=e},
dmv:function dmv(d){this.a=d},
dmu:function dmu(){},
dmw:function dmw(d){this.a=d},
dmx:function dmx(d){this.a=d},
dmy:function dmy(d){this.a=d},
dmz:function dmz(d,e){this.a=d
this.b=e},
dm3:function dm3(d){this.a=d},
dm4:function dm4(d){this.a=d},
a0P:function a0P(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bk6:function bk6(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
doq:function doq(d){this.a=d},
dor:function dor(d){this.a=d},
dop:function dop(d){this.a=d},
dos:function dos(d){this.a=d},
doo:function doo(d){this.a=d},
dot:function dot(d){this.a=d},
don:function don(d){this.a=d},
dou:function dou(d,e){this.a=d
this.b=e},
dom:function dom(d,e){this.a=d
this.b=e},
dov:function dov(d,e){this.a=d
this.b=e},
a0N:function a0N(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ahs:function ahs(d,e,f){this.a=d
this.b=e
this.c=f},
aDM:function aDM(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dmT:function dmT(d,e){this.a=d
this.b=e},
dmS:function dmS(d,e){this.a=d
this.b=e},
dmX:function dmX(d){this.a=d},
dmW:function dmW(d,e){this.a=d
this.b=e},
dmU:function dmU(d){this.a=d},
dmV:function dmV(d){this.a=d},
dmY:function dmY(d){this.a=d},
dmZ:function dmZ(d){this.a=d},
dmR:function dmR(d,e){this.a=d
this.b=e},
dmQ:function dmQ(d,e){this.a=d
this.b=e},
Ln:function Ln(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_X:function a_X(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cU5:function cU5(d){this.a=d},
cU6:function cU6(){},
cU7:function cU7(d){this.a=d},
bhg:function bhg(d,e,f){this.b=d
this.c=e
this.a=f},
bh7:function bh7(d,e){this.b=d
this.a=e},
vi:function vi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0i:function a0i(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhe:function bhe(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
dd8:function dd8(d,e,f){this.a=d
this.b=e
this.c=f},
dd7:function dd7(d,e){this.a=d
this.b=e},
ddx:function ddx(d){this.a=d},
ddk:function ddk(){},
ddy:function ddy(d){this.a=d},
ddj:function ddj(){},
ddz:function ddz(d,e){this.a=d
this.b=e},
ddi:function ddi(d,e){this.a=d
this.b=e},
ddA:function ddA(d,e){this.a=d
this.b=e},
ddh:function ddh(d,e){this.a=d
this.b=e},
ddB:function ddB(d){this.a=d},
ddg:function ddg(){},
ddC:function ddC(d,e){this.a=d
this.b=e},
ddf:function ddf(d,e){this.a=d
this.b=e},
ddD:function ddD(d){this.a=d},
dds:function dds(d,e){this.a=d
this.b=e},
ddE:function ddE(d){this.a=d},
ddF:function ddF(d){this.a=d},
ddH:function ddH(d){this.a=d},
ddI:function ddI(d){this.a=d},
ddr:function ddr(d,e){this.a=d
this.b=e},
ddJ:function ddJ(d,e){this.a=d
this.b=e},
aL0:function aL0(d){this.a=d},
bmG:function bmG(d){this.a=d},
bfm:function bfm(d,e,f,g,h,i,j,k,l){var _=this
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
a36:function a36(d,e){this.a=d
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
_.bx$=h
_.ab$=i
_.c=_.a=null},
bVu:function bVu(d){this.a=d},
bVo:function bVo(d){this.a=d},
bVn:function bVn(d,e){this.a=d
this.b=e},
bVx:function bVx(d){this.a=d},
bVp:function bVp(d){this.a=d},
bVq:function bVq(d){this.a=d},
bVt:function bVt(d){this.a=d},
bVs:function bVs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVv:function bVv(d,e){this.a=d
this.b=e},
bVw:function bVw(){},
bVr:function bVr(d){this.a=d},
bVl:function bVl(d,e){this.a=d
this.b=e},
bVm:function bVm(d){this.a=d},
bsk:function bsk(d,e){this.b=d
this.a=e},
aDK:function aDK(){},
iW(d,e){var w
$.U()
w=A.M()
w.b=B.ae
w.c=e
w.r=d.gp(0)
w.d=B.bH
w.e=B.dR
return w},
bHd(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.o_(0,a0?-f:f,f)
w=A.c1(B.hu,8,36)
v=B.v.j(0.3)
u=$.U()
t=A.M()
t.r=v.gp(0)
d.c3(w,t)
w=a1===D.Z1
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eK_,new A.m(-4+v,-2),C.iW(q,5))
d.ah(D.eHA,new A.m(4-v,-2),C.iW(q,5))}else{t=A.c1(B.KO,14,40)
p=A.M()
p.r=v.gp(0)
d.c3(t,p)}v=u.r
u=x.v
o=new A.aI(v,B.ak,k,k,A.a([],u))
t=-64-r
o.E(new A.b_(-11,t))
o.E(new A.cn(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.cn(15,-40,11,t))
o.E(new A.bz())
t=A.M()
t.r=w.gp(0)
d.af(o,t)
u=new A.aI(v,B.ak,k,k,A.a([],u))
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
break}if(a1===D.b5i){n=-52+w*14
d.ah(new A.m(10,n-22),new A.m(10,n+44),C.iW(F.H_,3.4))
d.ah(D.eKg,new A.m(9,n),C.iW(q,4))
d.ah(D.eI0,new A.m(10,n),C.iW(q,4))}else if(a1===D.b5j){d.ah(D.eJ6,new A.m(-8,-26-Math.max(0,w)*6),C.iW(q,4))
d.ah(D.eG2,new A.m(8,-26-Math.max(0,-w)*6),C.iW(q,4))}else{w=s*3
v=-38-r
d.ah(D.eJa,new A.m(-12-w,v),C.iW(q,4))
d.ah(D.aPe,new A.m(12+w,v),C.iW(q,4))}w=A.M()
w.r=q.gp(0)
d.aE(D.fwJ,w)
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
u=m.a6(0,D.eFX)
v=A.M()
v.r=w.gp(0)
d.P(u,4,v)}else{w=A.c1(m.a6(0,B.rR),23,20)
v=h.d
u=A.M()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a6(0,D.eKe),m.a6(0,D.eJ4),C.iW(v,2.2))
d.ah(m.a6(0,D.eI_),m.a6(0,D.eFU),C.iW(v,2.2))}if(w===4){w=m.a6(0,D.eKi)
u=A.M()
u.r=v.gp(0)
d.P(w,6,u)
u=m.a6(0,D.eI1)
w=A.M()
w.r=v.gp(0)
d.P(u,6,w)}}w=m.a6(0,D.eIU)
v=A.M()
v.r=B.iv.gp(0)
d.P(w,0.9,v)
v=m.a6(0,D.eIJ)
w=A.M()
w.r=B.iv.gp(0)
d.P(v,0.9,w)
if(i){l=m.a6(0,K.aaU)
w=A.c1(l,21,22)
v=A.M()
v.r=D.lZ.gp(0)
d.c3(w,v)
v=A.c1(l.a6(0,K.aPb),5,12)
w=A.M()
w.r=D.bkK.gp(0)
d.c3(v,w)
d.ah(l.a6(0,D.eKa),l.a6(0,K.aPz),C.iW(B.d0,1.4))
d.ah(D.aPe,new A.m(15,-88-r),C.iW(q,3.6))}j.restore()},
hQZ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.c1(B.dQ,18,96)
u=B.v.j(0.28)
$.U()
t=A.M()
t.r=u.gp(0)
d.c3(v,t)
t=A.c1(B.dQ,11,70)
v=B.v.j(0.2)
u=A.M()
u.r=v.gp(0)
d.c3(t,u)
d.lN(D.aVz,A.M())
C.ipQ(d,g,h,i,j)
s=(k==null?D.aaZ:k).a-w>=0?1:-1
w=A.M()
w.a=B.Ne
w.san(A.jT(new A.m(s*70,-60),new A.m(-s*70,-60),A.a([D.al5.j(0.5),D.al5.j(0.12),D.bst.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.w,null))
d.aE(D.aVz,w)
r.restore()
r.restore()},
ipQ(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
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
s=A.bx(D.fwK,B.ur)
p=$.U()
o=A.M()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bx(D.fwF,B.hU)
s=A.ap(v,B.v,0.18)
s.toString
n=A.M()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bx(D.fwT,B.hU)
o=A.ap(v,B.v,0.1)
o.toString
s=A.M()
s.r=o.gp(0)
a1.aq(n,s)
s=A.M()
s.r=d.gp(0)
a1.c3(D.fwM,s)
s=A.M()
s.r=d.gp(0)
a1.c3(D.fvt,s)
s=a1.c
J.bs(s.save())
s.translate(a3.w,0)
J.bs(s.save())
a1.o_(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aI(p.r,B.ak,e,e,A.a([],n))
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
a1.mO(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dmZ[j]
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.ae
i.c=5
i.r=k.gp(0)
i.d=B.bH
i.e=B.dR
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
i.b=B.ae
i.c=1.6
i.r=k.gp(0)
i.d=B.bH
i.e=B.dR
a1.ah(new A.m(g,-64),new A.m(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.ae
i.c=1.6
i.r=k.gp(0)
i.d=B.bH
i.e=B.dR
a1.ah(new A.m(-30,h),new A.m(30,h),i)}break
default:a1.ah(D.eJD,D.eGI,C.iW(a2.c.j(0.9),3))}a1.ah(D.eKb,D.eJc,C.iW(B.v.j(0.18),1.6))
a1.ah(D.eG1,K.aPg,C.iW(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.U()
i=A.M()
i.r=u.gp(0)
a1.aE(D.fvp,i)
s.restore()
i=A.M()
i.r=a0.gp(0)
a1.aE(D.fvD,i)
n=new A.aI(k.r,B.ak,e,e,A.a([],n))
n.E(new A.b_(-9,-66))
n.E(new A.cn(0,-57,9,-66))
n.E(new A.cn(0,-60,-9,-66))
k=A.M()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fvO,0.1,2.941592653589793,!1,C.iW(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.ab4
n=25*q
k=23*q
i=9*q
C.hMt(a1,new A.m(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.Fm:o
C.hMt(a1,new A.m(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eHs,D.eHo,C.iW(D.am4,4))
a1.ah(D.eHq,D.eHm,C.iW(D.Hq.j(0.7),1.4))
u=A.M()
u.r=B.d0.gp(0)
a1.P(D.eHp,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jB(0,a3.f)
a1.bW(0,r)
C.ipM(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hMt(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcD(),q=r===0?B.hu:s.eB(0,r),p=B.h.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
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
ipM(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.c1(B.we,40,38)
$.U()
v=A.M()
v.r=c0.gp(0)
c2.c3(w,v)}if(c1===4){$.U()
w=A.M()
w.r=c0.gp(0)
c2.P(D.eJk,9.5,w)
w=A.M()
w.r=c0.gp(0)
c2.P(D.eGi,9.5,w)}w=A.c1(D.eKz,10,6)
v=$.U()
u=A.M()
u.r=c8.gp(0)
c2.c3(w,u)
u=A.c1(D.eIR,10,6)
w=A.M()
w.r=c8.gp(0)
c2.c3(u,w)
v=v.r
w=x.v
t=new A.aI(v,B.ak,b9,b9,A.a([],w))
t.E(new A.b_(0,-20))
t.E(new A.i7(13,-20,17,-9,16,2))
t.E(new A.i7(15,13,8,20,0,20))
t.E(new A.i7(-8,20,-15,13,-16,2))
t.E(new A.i7(-17,-9,-13,-20,0,-20))
t.E(new A.bz())
u=A.M()
u.san(A.wH(D.eK1,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.w,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iW(c8.j(0.5),0.8)
c2.cQ(D.fwV,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fvw,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eJh,K.aPK,s)
c2.ah(D.eGe,D.eG5,s)
c2.cQ(D.fvN,2.2,1.4,!1,s)
c2.cQ(D.fvu,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=c0.gp(0)
c2.P(new A.m(p*14.5,-3+o*17.5),4.3,n)}p=A.M()
p.r=c0.gp(0)
c2.cQ(D.fw1,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aI(v,B.ak,b9,b9,A.a([],w))
p.E(new A.b_(-15,-11))
p.E(new A.cn(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.cn(0,-12,-13,-6))
p.E(new A.bz())
o=A.M()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eJ8,D.eG6,C.iW(G.nR,1.4))
o=A.M()
o.r=c0.gp(0)
c2.P(D.eJn,3,o)
o=A.M()
o.r=c0.gp(0)
c2.P(D.eGj,3,o)
o=new A.aI(v,B.ak,b9,b9,A.a([],w))
o.E(new A.b_(-13,6))
o.E(new A.cn(-12,22,0,26))
o.E(new A.cn(12,22,13,6))
o.E(new A.cn(8,13,0,12))
o.E(new A.cn(-8,13,-13,6))
o.E(new A.bz())
p=A.M()
p.r=B.hY.gp(0)
c2.af(o,p)
p=new A.aI(v,B.ak,b9,b9,A.a([],w))
p.E(new A.b_(-7,8))
p.E(new A.cn(0,6,7,8))
p.E(new A.cn(0,10.5,-7,8))
o=A.M()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aI(v,B.ak,b9,b9,A.a([],w))
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
c2.cQ(D.fw8,3.4,2.5,!1,C.iW(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fvV,3.6,2.2,!1,C.iW(o,1.2))
o=new A.aI(v,B.ak,b9,b9,A.a([],w))
o.E(new A.b_(11,-22))
o.E(new A.cn(27,-34,25,-19))
o.E(new A.cn(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.M()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aI(v,B.ak,b9,b9,A.a([],w))
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
c2.P(D.eG7,3,p)
break
case 3:p=A.M()
p.r=c0.gp(0)
c2.cQ(D.fw5,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.ae
o.c=0.9
o.r=p.gp(0)
o.d=B.bH
o.e=B.dR
c2.ah(new A.m(r*3.6,-19+Math.abs(r)*0.8),new A.m(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aFN[l]
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.ae
o.c=4.5
o.r=c0.gp(0)
o.d=B.bH
o.e=B.dR
c2.ah(new A.m(k,0),new A.m(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
c2.P(new A.m(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.M()
p.r=c0.gp(0)
c2.cQ(D.fw4,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aaU,K.aaT,C.iW(p,1))
break
default:p=A.M()
p.r=c0.gp(0)
c2.cQ(D.fvx,3.267256359733385,2.8902652413026098,!0,p)}i=B.h.D(c4.b,0,1)*0.4+0.1
p=A.c1(D.eKl,5,8)
o=D.aih.j(i)
n=A.M()
n.r=o.gp(0)
c2.c3(p,n)
n=A.c1(D.eJ1,5,8)
p=D.aih.j(i)
o=A.M()
o.r=p.gp(0)
c2.c3(n,o)
h=c4.e*2.4
o=new A.aI(v,B.ak,b9,b9,A.a([],w))
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
a4=new A.aI(v,B.ak,b9,b9,a6)
a6.push(new A.jO(A.c1(new A.m(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.EH(a4.gln().a.snapshot())
d.clipPath(a3.a,$.n0(),!0)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=D.boH.gp(0)
c2.P(new A.m(a7,a8),2.1,a3)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.v.gp(0)
c2.P(new A.m(a7,a8),1.05,a3)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.c.gp(0)
c2.P(new A.m(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a0d:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a9.b=B.ae
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bH
a9.e=B.dR
a3=p?0.8:0
c2.cQ(A.c1(new A.m(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dW
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b2.b=B.ae
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bH
b2.e=B.dR
c2.ah(new A.m(a5-a4,b0-a6+0.4),new A.m(a5+a4,b0-0.6-a3),b2)}b3=B.h.D(c4.a,0,1)
if(o)b4=D.bzg
else{u=A.ap(c8,D.bsv,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.h.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aI(v,B.ak,b9,b9,A.a([],w))
w=-b6
b8.E(new A.b_(w,11.5))
b8.E(new A.cn(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.cn(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bz())
v=A.M()
v.r=D.brO.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mO(0,b8)
v=B.c.j(0.95)
u=A.M()
u.r=v.gp(0)
c2.aE(new A.a5(w,11,w+b6*2,13.2),u)
u=A.c1(new A.m(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.M()
w.r=D.bzl.gp(0)
c2.c3(u,w)
d.restore()
c2.af(b8,C.iW(b4,1.1))}else{u=new A.aI(v,B.ak,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.b_(-5.2,p))
u.E(new A.cn(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iW(b4,1.5))
if(b5>0.6){w=new A.aI(v,B.ak,b9,b9,A.a([],w))
w.E(new A.b_(-4.6,11.8))
w.E(new A.cn(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.cn(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.M()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fvM,-1.2,2.2,!1,C.iW(c8.j(0.5),0.8))
c2.cQ(D.fvz,2.141592653589793,2.2,!1,C.iW(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.M()
w.r=c1.gp(0)
c2.P(D.eIK,1.7,w)
w=A.M()
w.r=c1.gp(0)
c2.P(D.eIH,1.7,w)}},
ivH(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.U(),f=new A.p2(new A.oE()),e=A.vc(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.M()
a2.san(A.jT(B.J,new A.m(0,a0*0.46),D.djj,D.d9x,B.w,h))
e.aE(new A.a5(0,0,0+d,0+a0),a2)
a2=e.c
J.bs(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bW(0,a1)
w=new A.e7()
w.cV(8)
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
d.san(A.wH(B.J,230,A.a([D.bnj,B.L],a0),h,B.w,h,h,0))
e.c3(D.fwg,d)
a2.restore()
d=A.M()
d.san(A.wH(D.ab1,58,A.a([D.bqO,B.L],a0),h,B.w,h,h,0))
e.P(D.ab1,58,d)
d=A.M()
d.r=D.bm1.gp(0)
e.P(D.ab1,24,d)
d=A.M()
d.r=D.a0E.gp(0)
e.P(D.eH1,5,d)
d=A.M()
d.r=D.a0E.gp(0)
e.P(D.eH5,3.4,d)
d=A.M()
d.r=D.a0E.gp(0)
e.P(D.eH4,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aI(g.r,B.ak,h,h,u)
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
g=[D.bky,D.bmA,D.bsP][s]
u=$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cDk[l]
k=384+B.n.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.b=B.ae
u.c=2.4
u.r=D.a1_.gp(0)
u.d=B.bH
u.e=B.dR
e.ah(new A.m(o,k),new A.m(g,d),u)
g=A.c1(new A.m(g,k-27),11,46)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.a1_.gp(0)
e.c3(g,u)
d=A.c1(new A.m(o-12,d),8,24)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.a1_.gp(0)
e.c3(d,u)}for(v=0;v<9;++v){g=B.n.F(v,3)
d=B.n.F(v,4)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.bm4.j(0.8).gp(0)
e.P(new A.m(20+v*52+g*7,400+d*5),1.2,u)}g=A.M()
g.san(A.jT(D.eFB,D.eFE,D.dbR,B.xU,B.w,h))
e.aE(new A.a5(-200,412,650,1300),g)
j=new A.e7()
j.cV(21)
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
e.o_(0,1,0.34)
g=A.M()
g.san(A.wH(B.J,250,A.a([D.btP,D.bmV,D.bvL],a0),A.a([0,0.8,1],x.n),B.w,h,h,0))
e.P(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.akM,D.blz,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.U()
a0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a0.b=B.ae
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bH
a0.e=B.dR
e.ah(new A.m(o+i*2,k),new A.m(o+i*5,g+Math.abs(i)*3),a0)}}C.inR(e)
for(l=0;l<3;++l)C.iro(e,D.aDy[l])
C.irc(e,D.eGW)
for(o=118;o<190;o+=11){g=B.n.F(o,3)
d=B.n.F(o,4)
$.U()
a0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a0.b=B.ae
a0.c=2.4
a0.r=D.a0W.gp(0)
a0.d=B.bH
a0.e=B.dR
e.ah(new A.m(o,452+g),new A.m(o+1,436+d),a0)}e.ah(D.eG3,D.eGm,C.iW(D.bmi,1.6))
a2.restore()
return f.ng()},
inR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.U().r,g=x.v,f=new A.aI(h,B.ak,i,i,A.a([],g))
f.E(new A.b_(358,462))
f.E(new A.i7(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i7(416,382,432,422,428,462))
f.E(new A.bz())
w=A.M()
w.san(A.jT(new A.m(354,0),new A.m(430,0),D.dJY,B.md,B.w,i))
d.af(f,w)
v=new A.e7()
v.cV(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.b=B.ae
p.c=1.1
p.r=q.gp(0)
p.d=B.bH
p.e=B.dR
d.ah(new A.m(t,s),new A.m(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.doA[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aI(h,B.ak,i,i,l)
l.push(new A.b_(r,336))
k.ac()
r=new A.cn(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.b=B.ae
r.c=8
r.r=D.aj3.gp(0)
r.d=B.bH
r.e=B.dR
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=A.ap(D.bma,D.bsN,v.ai()).j(0.92).gp(0)
d.P(new A.m(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.b=B.ae
r.c=1.2
r.r=D.a0W.gp(0)
r.d=B.bH
r.e=B.dR
d.ah(new A.m(w,q+8),new A.m(w,q+22),r)
q=A.c1(new A.m(w,q+28),13,7)
w=new A.ar(B.V,B.R,B.X,B.Y,B.W)
w.r=D.bub.gp(0)
d.c3(q,w)}},
iro(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.c1(new A.m(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.U(),b3=A.M()
b3.r=b1.gp(0)
b4.c3(b0,b3)
b2=b2.r
b3=x.v
w=new A.aI(b2,B.ak,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.b_(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.cn(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bz())
u=A.M()
u.san(A.jT(new A.m(b0,0),new A.m(v,0),D.doH,B.md,B.w,a4))
b4.af(w,u)
t=new A.e7()
t.cV(B.n.S(a5*7))
v=b4.c
J.bs(v.save())
b4.mO(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.b=B.ae
n.c=1
n.r=o.gp(0)
n.d=B.bH
n.e=B.dR
b4.ah(new A.m(r,q),new A.m(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.akI.j(0.75)
n=A.M()
n.r=o.gp(0)
b4.aE(new A.a5(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.h.bb(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aI(b2,B.ak,a4,a4,j)
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
f=new A.aI(b2,B.ak,a4,a4,u)
b2=a6-8
f.E(new A.b_(b0,b2))
for(p/=6,l=0;l<=B.h.bb(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iW(D.akI.j(0.7),1.6))
v.restore()
b0=$.U().r
b2=new A.aI(b0,B.ak,a4,a4,A.a([],b3))
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
m.r=D.akU.gp(0)
b4.af(b2,m)
m=A.M()
m.r=D.akU.gp(0)
b4.P(new A.m(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aI(b0,B.ak,a4,a4,A.a([],b3))
e.E(new A.b_(o,j))
n=b1-m*0.55
e.E(new A.cn(a5-a9,n,a5,u))
e.E(new A.cn(a5+a9,n,p,j))
e.E(new A.cn(a5,b1+a7*0.34,o,j))
e.E(new A.bz())
b1=A.M()
n=a7*1.4
b1.san(A.jT(new A.m(a5-n,0),new A.m(a5+n,0),D.dsz,B.md,B.w,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mO(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.he()?B.v:D.blI).j(0.16)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.ae
i.c=0.9
i.r=n.gp(0)
i.d=B.bH
i.e=B.dR
b4.ah(new A.m(a5+(p-0.5)*3,u),new A.m(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aI(b0,B.ak,a4,a4,b1)
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
n.b=B.ae
n.c=1.2
n.r=b1.gp(0)
n.d=B.bH
n.e=B.dR
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.V,B.R,B.X,B.Y,B.W)
v.b=B.ae
v.c=1.1
v.r=D.btg.gp(0)
v.d=B.bH
v.e=B.dR
b4.ah(new A.m(a2,a3),new A.m(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aI(b0,B.ak,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.b_(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bz())
b0=A.M()
b0.r=D.bpb.gp(0)
b4.af(a9,b0)},
irc(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aFK[s]
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.b=B.ae
q.c=3
q.r=D.a0W.gp(0)
q.d=B.bH
q.e=B.dR
d.ah(new A.m(r,u),new A.m(r,t),q)}u=A.c1(e.a6(0,K.aPa),24,36)
t=$.U()
r=A.M()
r.r=D.bys.gp(0)
d.c3(u,r)
t=new A.aI(t.r,B.ak,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.b_(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.cn(w,v-24,r,u))
t.E(new A.bz())
u=A.M()
u.r=D.ajM.gp(0)
d.af(t,u)},
iqw(d){switch(B.n.F(d,8)){case 0:return D.b4y
case 1:return D.b4w
case 2:return D.b4v
case 3:return D.b4u
case 4:return D.b4x
case 5:return D.b4z
case 6:return D.hYD
default:return D.hYC}},
Tz(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bsl()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.ab4:j
w.as=k==null?D.Fm:k
C.hQZ(d,e,p,C.iqw(m),w,s,m,l)},
hSv(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bX8:function bX8(){var _=this
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
bsl:function bsl(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
ao6:function ao6(){this.b=this.a=null},
aZg:function aZg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
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
bX5:function bX5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX6:function bX6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bX7:function bX7(){},
bX_:function bX_(d){this.a=d},
ahB:function ahB(d,e){this.a=d
this.b=e},
afv:function afv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NL(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bVK(s)
s.bFs(d)
return s},
HB(d,e,f,g,h,i,j){var w,v=A.T(g).k("X<1>")
v=A.d9(new A.X(g,new C.fH1(f),v),v.k("L.E"))
w=A.B(v,A.a3(v).k("cl.E"))
B.d.e_(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cE(w,0,A.dy(3,"count",x.S),A.T(w).c))
B.d.e_(v,d)
return new C.lT(e,v,B.d.c8(v,f),h,i,"tree",j)},
iNj(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.hk_(c1),c3=x.s,c4=A.a([],c3)
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
if(h===D.xo)g="father"
else g=h===D.p3?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.X(t,new C.hk1(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.HB(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hk2(i,m),p),o)
B.d.e_(d,c6)
c2.$2(b4,new C.lT("True or false: "+h+" is the "+g+" of "+l+".",A5.TU,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lT("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",A5.TU,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.Ha(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hk3(l,a0,c5),v),s)
e=a1.c
if(e===D.xo)e="son"
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
for(f=a5.$ti,e=new A.m7(a5,a5.r,f.k("m7<1>")),e.c=a5.e,f=f.c;e.A();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.HB(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("ib<1>"),a3=new A.ib(a0,1,b3,a2),a3.mC(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gI(0),a2.k("bQ<aj.E>")),a2=a2.k("aj.E");a3.A();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.HB(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.atM(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hk4(l),v),s)
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
j=A.B(new A.X(t,new C.hk5(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.xo
if(e)a2=b7
else a2=f===D.p3?b8:b9
if(e)f=b7
else f=f===D.p3?b8:b9
c2.$2("grand",C.HB(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aPZ(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.X(t,new C.hk6(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.HB(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cWr)
h=l+" was born in "+k
c2.$2("place",C.HB(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.dcZ)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.HB(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.HB(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jc(b1,b3,b3)
c2.$2("year",C.HB(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bHS(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.NL(d),l=new A.e7()
l.cV(f)
w=C.iNj(m,l,g)
for(v=new A.ds(w,w.r,w.e);v.A();)J.hzQ(v.d,l)
v=A.a3(w).k("cv<1>")
u=A.B(new A.cv(w,v),v.k("L.E"))
B.d.e_(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fUU(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.I)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ab(p)>n.a){p=w.h(0,q)
p.toString
p=s.K(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.B(D.aCA,x.df)
B.d.e_(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hR5(o,l))}}else if(!g&&v>3){o=C.hR5(D.aCA[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hR5(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.e_(w,e)
return new C.lT(d.a,w,B.d.c8(w,v),d.d,d.e,d.f,d.r)},
hWH(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.NL(a2),a1=new A.e7()
a1.cV(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.Ha(q).length>=2)u.push(q)}B.d.e_(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.Ha(n)
l=A.T(m)
k=new A.ib(m,0,5,l.k("ib<1>"))
k.mC(m,0,5,l.c)
j=k.dd(0)
if(new A.O(j,new C.hab(),A.T(j).k("O<1,F>")).fK(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aV1(a0,j[i]))
w.push(new C.awj("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.bU(e.c0(0,a0.aoS(q),new C.hac()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cv<1>")
d=A.B(new A.cv(e,t),t.k("L.E"))
B.d.fl(d)
v=A.a([],v)
for(u=A.cE(d,0,A.dy(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bQ(u,u.gI(0),t.k("bQ<aj.E>")),t=t.k("aj.E");u.A();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cK(s)
m.e_(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aV1(a0,v[r]))
w.push(new C.awj("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aTo(d){return B.d.aqk(D.aF4,new C.fQJ(d))},
iCw(d){return A.nU(new A.X(D.aF4,new C.fYa(d),x.av))},
bWy(d){return C.i5B(d)},
i5B(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bWy=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bWy)
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
return A.i($async$bWy,v)},
Cf(d,e){return C.i5y(d,e)},
i5y(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
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
bWx(d,e,f){return C.i5z(d,e,f)},
i5z(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bWx=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bWx)
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
return A.i($async$bWx,v)},
Cg(d,e,f,g){return C.i5A(d,e,f,g)},
i5A(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
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
bKb(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hm5(d,e,f,g){return new C.amF(g,d==null?A.a(["","","",""],x.s):d,e,f)},
i3C(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aM(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.bK)
while(u.A())w.push(J.k(u.gO(u)))
u=x.N
w=A.cE(w,0,A.dy(4,"count",x.S),u).dd(0)
B.d.u(w,A.c4(Math.max(0,4-(v.b(d.h(0,"a"))?J.ab(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.h.L(v)
v=B.n.D(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.h.L(u)
return C.hm5(w,v,B.n.D(u==null?20:u,5,60),t)},
hB1(d){var w,v,u,t,s,r,q=J.a0(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.i3C(A.a1(r,t,s)))}return new C.Nt(p,w,v)},
huU(d){var w,v=A.a([],x.c)
for(w=J.aM(d.z);w.A();)v.push(C.hB1(w.gO(w)))
return v},
aV1(d,e){var w=e.c===D.p3
if(d.aoS(e)===0&&d.Ha(e).length!==0)return w?0:1
if(d.Ha(e).length!==0||d.atM(e)!=null)return w?2:3
return w?4:5},
hXN(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.NL(a4),a3=new A.e7()
a3.cV(a5)
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
j=i.h(0,k)}h=a2.Ha(m)
g=a2.atM(m)
f=a2.aPZ(m)
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
if(k===D.xo)k="father"
else k=k===D.p3?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.xo)k="father"
else k=k===D.p3?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e_(l,a3)
B.d.b_(l,new C.hkq())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hkr(d),o),n)
B.d.e_(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.ib(a0,0,3,i.k("ib<1>"))
a1.mC(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e_(k,a3)
a1=C.aV1(a2,m)
i=new A.ib(l,0,4,p)
i.mC(l,0,4,r)
w.push(new C.bdw(d,a1,i.dd(0),k))
if(w.length>=5)break}return w},
hOb(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hWS(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.NL(a4),a3=new A.e7()
a3.cV(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.Ha(q).length>=2)u.push(q)}B.d.e_(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.Ha(l)
j=A.T(k)
i=new A.ib(k,0,4,j.k("ib<1>"))
i.mC(k,0,4,j.c)
h=i.dd(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.haO(q))&&q.d!==j)i.push(q)}B.d.e_(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.ib(i,0,k,m)
j.mC(i,0,k,n)
f=j.dd(0)
j=B.a.i(l.b)
k=C.aV1(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aV1(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aV1(a2,f[g]))
w.push(new C.abx(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lT:function lT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bVK:function bVK(d){this.b=d
this.c=$},
bVL:function bVL(){},
bVM:function bVM(d){this.a=d},
fH1:function fH1(d){this.a=d},
hk_:function hk_(d){this.a=d},
hk0:function hk0(){},
hk1:function hk1(d){this.a=d},
hk2:function hk2(d,e){this.a=d
this.b=e},
hk3:function hk3(d,e,f){this.a=d
this.b=e
this.c=f},
hjZ:function hjZ(d,e){this.a=d
this.b=e},
hk4:function hk4(d){this.a=d},
hk5:function hk5(d){this.a=d},
hk6:function hk6(d,e,f){this.a=d
this.b=e
this.c=f},
hjY:function hjY(d,e){this.a=d
this.b=e},
fUU:function fUU(d,e){this.a=d
this.b=e},
awj:function awj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hab:function hab(){},
hac:function hac(){},
A4:function A4(d,e,f){this.a=d
this.b=e
this.c=f},
fQJ:function fQJ(d){this.a=d},
fYa:function fYa(d){this.a=d},
amF:function amF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQw:function bQw(){},
Nt:function Nt(d,e,f){this.a=d
this.b=e
this.c=f},
bdw:function bdw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hkq:function hkq(){},
hkr:function hkr(d){this.a=d},
abx:function abx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
haO:function haO(d){this.a=d},
bkY:function bkY(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ahz:function ahz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
alX:function alX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alY:function alY(d,e,f,g,h){var _=this
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
_.bx$=g
_.ab$=h
_.c=_.a=null},
bOE:function bOE(d){this.a=d},
bOz:function bOz(){},
bOF:function bOF(){},
bOx:function bOx(){},
bOy:function bOy(){},
bOD:function bOD(d){this.a=d},
bOA:function bOA(d,e){this.a=d
this.b=e},
bOC:function bOC(d,e){this.a=d
this.b=e},
bOB:function bOB(d,e){this.a=d
this.b=e},
bOw:function bOw(d){this.a=d},
bg3:function bg3(d,e){this.b=d
this.a=e},
RD:function RD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDI:function aDI(d,e,f){this.b=d
this.c=e
this.a=f},
aC4:function aC4(d,e,f){this.a=d
this.b=e
this.c=f},
awU:function awU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awV:function awV(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.dv$=e
_.bd$=f
_.c=_.a=null},
cuO:function cuO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuP:function cuP(d){this.a=d},
cuN:function cuN(d){this.a=d},
cuQ:function cuQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cuR:function cuR(){},
cuS:function cuS(d,e){this.a=d
this.b=e},
cuT:function cuT(){},
cuU:function cuU(d){this.a=d},
cuK:function cuK(d){this.a=d},
cuL:function cuL(d,e){this.a=d
this.b=e},
cuM:function cuM(d,e,f){this.a=d
this.b=e
this.c=f},
cuF:function cuF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuH:function cuH(d,e){this.a=d
this.b=e},
cuI:function cuI(d,e){this.a=d
this.b=e},
cuG:function cuG(d,e){this.a=d
this.b=e},
cuE:function cuE(){},
cuJ:function cuJ(){},
bfv:function bfv(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cV9:function cV9(){},
aAQ:function aAQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAR:function aAR(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cJK:function cJK(d){this.a=d},
cJJ:function cJJ(d){this.a=d},
cJS:function cJS(d,e){this.a=d
this.b=e},
cJT:function cJT(d,e){this.a=d
this.b=e},
cJU:function cJU(d){this.a=d},
cJR:function cJR(d){this.a=d},
cJV:function cJV(d){this.a=d},
cJW:function cJW(d,e){this.a=d
this.b=e},
cJX:function cJX(){},
cJY:function cJY(d){this.a=d},
cJM:function cJM(d){this.a=d},
cJN:function cJN(d,e){this.a=d
this.b=e},
cJL:function cJL(d,e){this.a=d
this.b=e},
cJO:function cJO(){},
cJP:function cJP(){},
cJQ:function cJQ(d,e){this.a=d
this.b=e},
aBP:function aBP(){},
aJl:function aJl(){},
hss(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.buK((w-450*u)/2,(v-900*u)/2,u)},
ahn:function ahn(){},
fiK:function fiK(d){this.a=d},
aNg:function aNg(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
ft9:function ft9(d){this.a=d},
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
_.qy$=f
_.Ne$=g
_.app$=h
_.bx$=i
_.ab$=j
_.c=_.a=null},
bWw:function bWw(d){this.a=d},
bWv:function bWv(){},
bWt:function bWt(d){this.a=d},
bWr:function bWr(){},
bWs:function bWs(d){this.a=d},
bWo:function bWo(d,e){this.a=d
this.b=e},
bWp:function bWp(){},
bWq:function bWq(d){this.a=d},
bWu:function bWu(d,e){this.a=d
this.b=e},
bWn:function bWn(d){this.a=d},
bwt:function bwt(d,e){this.b=d
this.a=e},
fiL:function fiL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fiM:function fiM(d,e,f){this.a=d
this.b=e
this.c=f},
fiN:function fiN(d,e,f){this.a=d
this.b=e
this.c=f},
fiO:function fiO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiP:function fiP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiQ:function fiQ(){},
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
_.qy$=f
_.Ne$=g
_.app$=h
_.bx$=i
_.ab$=j
_.c=_.a=null},
bW9:function bW9(){},
bWk:function bWk(d,e){this.a=d
this.b=e},
bWl:function bWl(d){this.a=d},
bWm:function bWm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWg:function bWg(){},
bWf:function bWf(d,e){this.a=d
this.b=e},
bWh:function bWh(d,e){this.a=d
this.b=e},
bWi:function bWi(){},
bWj:function bWj(d){this.a=d},
bWb:function bWb(d){this.a=d},
bWc:function bWc(d){this.a=d},
bWd:function bWd(d){this.a=d},
bWa:function bWa(d,e){this.a=d
this.b=e},
bWe:function bWe(d){this.a=d},
bmO:function bmO(d,e){this.b=d
this.a=e},
dy_:function dy_(){},
a3p:function a3p(d,e){this.a=d
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
_.qy$=e
_.Ne$=f
_.app$=g
_.bx$=h
_.ab$=i
_.c=_.a=null},
bVW:function bVW(d){this.a=d},
bVV:function bVV(){},
bVU:function bVU(){},
bVO:function bVO(){},
bVP:function bVP(){},
bVT:function bVT(d,e,f){this.a=d
this.b=e
this.c=f},
bVS:function bVS(d){this.a=d},
bVQ:function bVQ(d,e){this.a=d
this.b=e},
bVR:function bVR(d){this.a=d},
bmd:function bmd(d,e){this.b=d
this.a=e},
aDL:function aDL(){},
bjK:function bjK(){},
aDN:function aDN(){},
bjL:function bjL(){},
aDO:function aDO(){},
bjM:function bjM(){},
uS(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.hT,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.V(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.q(u,A.A(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.m),u,u,u,u,B.PS,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hBP(d,e,f,g,h,i,j){return new C.anT(i,h,d,j,e,f,g,null)},
a7Z:function a7Z(d,e){this.c=d
this.a=e},
bmk:function bmk(d){this.a=d},
u1:function u1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVN:function bVN(d){this.a=d},
J1:function J1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Xk:function Xk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bp9:function bp9(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e8V:function e8V(d,e){this.a=d
this.b=e},
e8W:function e8W(d){this.a=d},
e8X:function e8X(d,e){this.a=d
this.b=e},
e8T:function e8T(d){this.a=d},
e8U:function e8U(d){this.a=d},
e8S:function e8S(d){this.a=d},
e8Q:function e8Q(d){this.a=d},
e8R:function e8R(d){this.a=d},
e8P:function e8P(d,e){this.a=d
this.b=e},
e8Y:function e8Y(d){this.a=d},
e8Z:function e8Z(d,e){this.a=d
this.b=e},
e9_:function e9_(d,e){this.a=d
this.b=e},
e90:function e90(d,e){this.a=d
this.b=e},
e93:function e93(d,e){this.a=d
this.b=e},
e94:function e94(d,e){this.a=d
this.b=e},
e95:function e95(d,e){this.a=d
this.b=e},
e96:function e96(d,e){this.a=d
this.b=e},
e97:function e97(d,e){this.a=d
this.b=e},
e98:function e98(d,e,f){this.a=d
this.b=e
this.c=f},
e99:function e99(d,e){this.a=d
this.b=e},
e9a:function e9a(d,e){this.a=d
this.b=e},
e91:function e91(d){this.a=d},
e92:function e92(d){this.a=d},
a1d:function a1d(d,e){this.a=d
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
bW7:function bW7(d){this.a=d},
bW8:function bW8(d){this.a=d},
bW6:function bW6(d){this.a=d},
bVY:function bVY(d){this.a=d},
bVZ:function bVZ(d){this.a=d},
bVX:function bVX(d){this.a=d},
bW3:function bW3(d,e,f){this.a=d
this.b=e
this.c=f},
bW4:function bW4(d){this.a=d},
bW0:function bW0(d,e){this.a=d
this.b=e},
bW1:function bW1(d,e,f){this.a=d
this.b=e
this.c=f},
bW5:function bW5(){},
bW2:function bW2(d,e){this.a=d
this.b=e},
bW_:function bW_(d){this.a=d},
UZ:function UZ(d,e){this.c=d
this.a=e},
anQ:function anQ(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bVy:function bVy(d){this.a=d},
bVz:function bVz(d){this.a=d},
bVJ:function bVJ(){},
bVI:function bVI(d,e,f){this.a=d
this.b=e
this.c=f},
bVD:function bVD(d,e){this.a=d
this.b=e},
bVC:function bVC(d,e){this.a=d
this.b=e},
bVE:function bVE(d){this.a=d},
bVF:function bVF(d,e){this.a=d
this.b=e},
bVG:function bVG(d,e){this.a=d
this.b=e},
bVB:function bVB(d,e){this.a=d
this.b=e},
bVH:function bVH(d,e,f){this.a=d
this.b=e
this.c=f},
bVA:function bVA(d,e){this.a=d
this.b=e},
iAZ(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.akH(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.W(Date.now(),0,!1))
s=new C.fUk(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("X<1>"),q=q.k("cQ<1,o>"),o=q.k("L.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zV)m.push(l===D.xo?"male":"female")
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
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.X(a4,new C.fUi(u,f),p),new C.fUj(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aJ(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aJ(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.av(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iB_(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.akH(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fUp(v,e)
q=new C.fUn(v)
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
p.n(0,s.a,d)}}d=p.$ti.k("bb<2>")
d=A.d9(new A.bb(p,d),d.k("L.E"))
n=A.B(d,A.a3(d).k("cl.E"))
B.d.fl(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eu(l,new C.fUo(p,m));k.A();t=f){j=l.gO(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aJ(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
il6(d,e,f,g){var w,v,u=C.iB0(d,e)
if(u<=0||f.length<=u)return new A.ah1(!1,D.EF,f)
if(g.q(0,e.a))return new A.ah1(!1,D.EF,f)
w=A.T(f).c
v=A.cE(f,0,A.dy(u,"count",x.S),w).dd(0)
return new A.ah1(!0,A.cE(f,u,null,w).dd(0),v)},
il7(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.akH(d3),d2=d1.length
if(d2===0)return D.hVD
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c0(0,t.a,new C.dn5(t))}s=new C.dnm(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dne(r)
for(p=new A.ds(v,v.r,v.e);p.A();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dnd(r)
l=A.S(w,x.do)
for(p=new A.ds(v,v.r,v.e);p.A();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.bU(l.c0(0,k,new C.dn6()),o)}h=new C.dnc(s)
g=new C.dnb(l,r)
p=v.$ti.k("bb<2>")
o=p.k("X<L.E>")
f=A.B(new A.X(new A.bb(v,p),new C.dn7(h),o),o.k("L.E"))
e=f.length===0?new A.bb(v,p).gH(0):B.d.gH(f)
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
a9=new C.dnk(new C.dng(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.ds(v,v.r,v.e),j=a2.gaon(a2);o.A();){b0=o.d
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
b7=new C.dn4(a2,new C.dnl(),b6,a3,b4,v,a4,a5,a6,b5)
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
a3.bP(0,new C.dn8(c6,b4))
for(d2=new A.cj(a4,a4.$ti.k("cj<1,2>")).gae(0),w=x.g;d2.A();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aM(c7.b);j.A();){i=j.gO(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.m(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eu(j,new C.dn9(c8));i.A();)o.push(j.gO(0).b)
if(o.length===0)continue
B.d.b_(o,new C.dna())
c6.push(new C.aNa(new A.m(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bjQ(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hRS(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(d)
return w==null?null:w.b[1]},
hL7(d,e,f,g,h,i,j,k,l,m,n){return new C.a1r(k,f,j,e,l,n,m,d,g,h,i,null)},
aFN(d,e,f,g,h,i,j){return new C.bnE(i,d,e,f,j,h,g,null)},
at3:function at3(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHn:function aHn(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
eaA:function eaA(d){this.a=d},
eaz:function eaz(d){this.a=d},
eaC:function eaC(d,e){this.a=d
this.b=e},
eaD:function eaD(d,e){this.a=d
this.b=e},
eaE:function eaE(d){this.a=d},
eay:function eay(d,e){this.a=d
this.b=e},
eaB:function eaB(d){this.a=d},
eaG:function eaG(d){this.a=d},
eaF:function eaF(d,e){this.a=d
this.b=e},
asY:function asY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHk:function aHk(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
ea0:function ea0(d){this.a=d},
e9Z:function e9Z(d){this.a=d},
ea_:function ea_(d){this.a=d},
ea1:function ea1(d,e){this.a=d
this.b=e},
e9W:function e9W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9n:function e9n(d){this.a=d},
e9o:function e9o(d,e){this.a=d
this.b=e},
e9F:function e9F(d){this.a=d},
e9D:function e9D(d){this.a=d},
e9E:function e9E(d,e){this.a=d
this.b=e},
e9G:function e9G(d){this.a=d},
e9H:function e9H(d,e){this.a=d
this.b=e},
e9V:function e9V(d,e){this.a=d
this.b=e},
e9C:function e9C(d){this.a=d},
e9B:function e9B(d){this.a=d},
e9A:function e9A(d,e){this.a=d
this.b=e},
e9S:function e9S(){},
e9T:function e9T(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e9R:function e9R(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e9L:function e9L(d){this.a=d},
e9M:function e9M(d,e,f){this.a=d
this.b=e
this.c=f},
e9K:function e9K(d,e){this.a=d
this.b=e},
e9N:function e9N(d,e){this.a=d
this.b=e},
e9I:function e9I(d,e){this.a=d
this.b=e},
e9J:function e9J(){},
e9O:function e9O(d,e){this.a=d
this.b=e},
e9P:function e9P(d){this.a=d},
e9Q:function e9Q(d,e){this.a=d
this.b=e},
e9U:function e9U(d,e){this.a=d
this.b=e},
e9b:function e9b(d,e){this.a=d
this.b=e},
e9c:function e9c(d,e){this.a=d
this.b=e},
ea3:function ea3(d,e,f){this.a=d
this.b=e
this.c=f},
e9Y:function e9Y(d,e,f){this.a=d
this.b=e
this.c=f},
e9X:function e9X(d){this.a=d},
e9d:function e9d(d){this.a=d},
e9e:function e9e(d){this.a=d},
e9f:function e9f(){},
e9g:function e9g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9k:function e9k(d,e){this.a=d
this.b=e},
e9j:function e9j(d,e){this.a=d
this.b=e},
e9i:function e9i(d){this.a=d},
e9l:function e9l(d,e){this.a=d
this.b=e},
e9h:function e9h(d){this.a=d},
ea2:function ea2(d){this.a=d},
e9x:function e9x(){},
e9y:function e9y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9w:function e9w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9s:function e9s(d,e,f){this.a=d
this.b=e
this.c=f},
e9r:function e9r(d,e,f){this.a=d
this.b=e
this.c=f},
e9p:function e9p(d,e){this.a=d
this.b=e},
e9t:function e9t(d){this.a=d},
e9u:function e9u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9q:function e9q(d,e){this.a=d
this.b=e},
e9v:function e9v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9z:function e9z(d,e){this.a=d
this.b=e},
eaa:function eaa(){},
eab:function eab(d,e){this.a=d
this.b=e},
eac:function eac(d){this.a=d},
ead:function ead(d,e){this.a=d
this.b=e},
ea6:function ea6(d){this.a=d},
ea4:function ea4(d,e){this.a=d
this.b=e},
ea7:function ea7(d,e){this.a=d
this.b=e},
ea8:function ea8(d,e){this.a=d
this.b=e},
ea9:function ea9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eae:function eae(d){this.a=d},
ea5:function ea5(d){this.a=d},
e9m:function e9m(d){this.a=d},
bjO:function bjO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dn2:function dn2(d){this.a=d},
dn1:function dn1(d,e){this.a=d
this.b=e},
dn3:function dn3(d){this.a=d},
dn0:function dn0(d,e){this.a=d
this.b=e},
fUk:function fUk(d,e){this.a=d
this.b=e},
fUl:function fUl(d){this.a=d},
fUm:function fUm(){},
fUi:function fUi(d,e){this.a=d
this.b=e},
fUj:function fUj(){},
fUp:function fUp(d,e){this.a=d
this.b=e},
fUq:function fUq(d){this.a=d},
fUr:function fUr(){},
fUn:function fUn(d){this.a=d},
fUo:function fUo(d,e){this.a=d
this.b=e},
Lv:function Lv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
H9:function H9(d,e){this.a=d
this.b=e},
bjQ:function bjQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dn5:function dn5(d){this.a=d},
dnm:function dnm(d){this.a=d},
dne:function dne(d){this.a=d},
dnf:function dnf(){},
dnd:function dnd(d){this.a=d},
dn6:function dn6(){},
dnc:function dnc(d){this.a=d},
dnb:function dnb(d,e){this.a=d
this.b=e},
dn7:function dn7(d){this.a=d},
dng:function dng(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dnh:function dnh(d){this.a=d},
dni:function dni(d){this.a=d},
dnj:function dnj(){},
dnk:function dnk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dnl:function dnl(){},
dn4:function dn4(d,e,f,g,h,i,j,k,l,m){var _=this
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
dn8:function dn8(d,e){this.a=d
this.b=e},
dn9:function dn9(d){this.a=d},
dna:function dna(){},
aNa:function aNa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjR:function bjR(d,e){this.b=d
this.a=e},
dnn:function dnn(){},
dno:function dno(d){this.a=d},
dnp:function dnp(d){this.a=d},
dnq:function dnq(){},
bnF:function bnF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biR:function biR(d,e){this.b=d
this.a=e},
bBV:function bBV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fyW:function fyW(d){this.a=d},
br3:function br3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f8r:function f8r(d){this.a=d},
f8q:function f8q(d,e){this.a=d
this.b=e},
a1r:function a1r(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aFL:function aFL(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dDM:function dDM(d,e){this.a=d
this.b=e},
dDL:function dDL(d){this.a=d},
dDJ:function dDJ(d){this.a=d},
dDK:function dDK(d){this.a=d},
dDV:function dDV(d){this.a=d},
dDW:function dDW(d){this.a=d},
dDU:function dDU(d,e){this.a=d
this.b=e},
dDX:function dDX(){},
dE_:function dE_(d){this.a=d},
dDT:function dDT(d,e){this.a=d
this.b=e},
dDZ:function dDZ(){},
dE0:function dE0(d){this.a=d},
dDS:function dDS(d,e){this.a=d
this.b=e},
dE1:function dE1(d){this.a=d},
dDR:function dDR(d){this.a=d},
dE2:function dE2(d){this.a=d},
dDQ:function dDQ(d){this.a=d},
dE3:function dE3(d){this.a=d},
dDP:function dDP(d){this.a=d},
dE4:function dE4(d){this.a=d},
dDO:function dDO(d){this.a=d},
dE5:function dE5(d){this.a=d},
dDN:function dDN(d,e){this.a=d
this.b=e},
dDY:function dDY(d){this.a=d},
afS:function afS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bnE:function bnE(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
afR:function afR(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bnD:function bnD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dE6:function dE6(d){this.a=d},
dE7:function dE7(d,e){this.a=d
this.b=e},
aFM:function aFM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aMc:function aMc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afT:function afT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dEg:function dEg(d){this.a=d},
H5:function H5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hFT(d){var w=d.cS,v=x.N
return w.j6(w,new C.cj7(),v,v)},
ici(d){var w=d.bv
if(w>=0)return w
return 5},
hFV(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hFT(d).h(0,v)
if(w==null||w.length===0)return null
return A.bf(w)},
hFU(d,e){var w=C.hFV(d,e)
if(w!=null&&w.cb(new A.W(Date.now(),0,!1)))return!0
return!1},
icj(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hFT(d),w,w)
u=C.hFV(d,e)
t=u!=null&&u.cb(new A.W(Date.now(),0,!1))?u:new A.W(Date.now(),0,!1)
v.n(0,s,t.bM(A.dw(30,0,0,0,0,0).a).aa().ag())
d.cS=v},
b45(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b45=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.m1(t,B.KH),$async$b45)
case 3:if(l){u=!0
w=1
break}u=A.lB(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.KH,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b45,v)},
cj7:function cj7(){},
icg(){var w,v=$.oi(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hq(u)},
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
a9I(d){return C.ich(d)},
ich(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a9I=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$a9I)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i4("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.d_,null),$async$a9I)
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
return A.i($async$a9I,v)},
cj6(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cj6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JY(),$async$cj6)
case 3:t=m.im(f),t=t.gae(t),s=x.f
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
return A.i($async$cj6,v)},
P6(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$P6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cj6(d),$async$P6)
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
return A.b(C.a9I(s),$async$P6)
case 9:case 8:u=t
w=1
break
case 5:n=C.icg()
w=10
return A.b(C.JY(),$async$P6)
case 10:s=f
J.aL(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a9I(s),$async$P6)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$P6,v)},
b44(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b44=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JY(),$async$b44)
case 3:t=f
for(s=J.dz(t),r=s.gdW(t),r=r.dd(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a9I(t),$async$b44)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b44,v)},
a9J(d,e,f){var w=0,v=A.j(x.H),u
var $async$a9J=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.at2(d,e),$async$a9J)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.P6(d),$async$a9J)
case 7:w=4
break
case 5:w=8
return A.b(C.b44(d),$async$a9J)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a9J,v)},
asX(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$asX=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.at2(f,e),$async$asX)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.ce(),$async$asX)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JY(),$async$asX)
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
return A.i($async$asX,v)},
b43(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b43=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.ce(),$async$b43)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JY(),$async$b43)
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
return A.i($async$b43,v)},
ick(){var w,v=$.oi(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hq(u)},
at_(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$at_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$at_)
case 3:if(!g){u=null
w=1
break}t=C.ick()
w=4
return A.b(A.Xl(),$async$at_)
case 4:s=g
r=B.e5.aL(B.T.au(d.fb(),null))
r=B.cS.gcq().aL(r)
q=e?999:2
J.aL(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a9K(s),$async$at_)
case 5:p=e?999:2
u=new A.a2D("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$at_,v)},
asZ(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$asZ=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Xl(),$async$asZ)
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
return A.b(C.b43(J.k(l==null?"":l),j),$async$asZ)
case 4:if(!a0)$.an.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ab(t)===0){u=null
w=1
break}s=null
try{r=B.ch.cJ(0,B.cM.aL(t))
s=C.hFW(r)}catch(f){q=A.ad(f)
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
return A.b(A.a9K(p),$async$asZ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asZ,v)},
hFW(d){var w,v,u,t,s=null
try{w=B.T.aN(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.icm(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ad(t)
$.an.$1("[family tree sync] parse: "+A.v(v))
return s}},
hod(d){var w=0,v=A.j(x.m),u,t,s
var $async$hod=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.asZ(t[1])
w=1
break}u=null
w=1
break}u=C.hFW(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hod,v)},
icm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cL(v,x.f)
u=A.ct(u,new C.cj9(),u.$ti.k("L.E"),x.k)
t=A.a3(u).k("X<L.E>")
s=A.B(new A.X(u,new C.cja(),t),t.k("L.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bf(J.k(u==null?"":u))
if(r==null)r=new A.W(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.im(p),t=t.gae(t),o=x.B;t.A();){n=t.gO(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cL(l,u)
n=A.ct(n,new C.cjb(),n.$ti.k("L.E"),o)
k=A.a3(n).k("X<L.E>")
j=A.B(new A.X(n,new C.cjc(),k),k.k("L.E"))
if(j.length!==0)q.n(0,m,j)}return new C.at0(h,w,s,r,q)},
at2(d,e){var w=0,v=A.j(x.y),u,t
var $async$at2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(R.OX(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.BM(d),$async$at2)
case 3:u=t.cM(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$at2,v)},
cji(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cji=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.BM(d),$async$cji)
case 3:t=s.b8(f,new C.cjj(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b_(t,new C.cjk())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cji,v)},
Xm(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Xm=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.at2(e,d),$async$Xm)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.P6(e),$async$Xm)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.BM(e),$async$Xm)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dO(r,new C.cjg(g))
r=A.B(t,t.$ti.k("L.E"))}t=J.a0(r)
if(t.gar(r)){u=null
w=1
break}t=t.dT(r,new C.cjh(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Mo(e,o),$async$Xm)
case 14:n=i
if(J.cM(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.at0(s,B.a.i(e.toLowerCase()),r,new A.W(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Xm,v)},
b48(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b48=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Xm(d,e,f,g),$async$b48)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aE(t,s,"_")
r=q.a
u=A.HP(A.Lq(q.fb(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b48,v)},
b47(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b47=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Xm(d,e,f,g),$async$b47)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.at_(r,f),$async$b47)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aK8(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b47,v)},
Xn(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Xn=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hod(a0),$async$Xn)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.asX(g.a,d,e,f,s,r),$async$Xn)
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
return A.b(C.bHw(e,j),$async$Xn)
case 12:case 11:w=13
return A.b(C.akp(e,j,s),$async$Xn)
case 13:h=n.h(0,i)
w=h!=null&&J.cM(h)?14:15
break
case 14:w=16
return A.b(C.BW(e,i,h),$async$Xn)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.buQ(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Xn,v)},
at0:function at0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cje:function cje(){},
cjf:function cjf(){},
cjd:function cjd(){},
cj9:function cj9(){},
cja:function cja(){},
cjb:function cjb(){},
cjc:function cjc(){},
cjj:function cjj(){},
cjk:function cjk(){},
cjg:function cjg(d){this.a=d},
cjh:function cjh(d){this.a=d},
hxU(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fc(null,x.H)
return A.hf(d,new C.at1(w,e,g,i,f,h,null),!0,null,x.H)},
dn_(d,e,f,g,h,i,j,k){return new C.bjN(i,e,k,j,g,f,h,d,null)},
at1:function at1(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHm:function aHm(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
ean:function ean(d){this.a=d},
eao:function eao(d,e,f){this.a=d
this.b=e
this.c=f},
eas:function eas(d,e){this.a=d
this.b=e},
eat:function eat(d){this.a=d},
eak:function eak(d){this.a=d},
eal:function eal(d,e){this.a=d
this.b=e},
eam:function eam(d,e){this.a=d
this.b=e},
ear:function ear(d){this.a=d},
eaq:function eaq(d,e){this.a=d
this.b=e},
eap:function eap(){},
eav:function eav(d){this.a=d},
eaw:function eaw(d,e){this.a=d
this.b=e},
eau:function eau(d,e){this.a=d
this.b=e},
dnr:function dnr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bjP:function bjP(d,e,f){this.d=d
this.e=e
this.a=f},
af6:function af6(d,e,f){this.c=d
this.d=e
this.a=f},
bjN:function bjN(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bjS:function bjS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a1L:function a1L(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aHl:function aHl(){var _=this
_.d=!1
_.c=_.a=_.e=null},
eaf:function eaf(d,e){this.a=d
this.b=e},
eag:function eag(d){this.a=d},
eah:function eah(d){this.a=d},
eai:function eai(d){this.a=d},
eaj:function eaj(d){this.a=d},
a1M:function a1M(d){this.a=d},
bpa:function bpa(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
eax:function eax(d,e){this.a=d
this.b=e},
b2v(d,e){return new C.b2u(d,e,null)},
b2u:function b2u(d,e,f){this.c=d
this.d=e
this.a=f},
iDw(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
iLK(d){return A.bW(B.L,null,new C.hcm(new C.uD(A.R(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hHZ(d,e){return new C.aw8(e,d,null)},
aUW(d,e,f,g,h,i,j){var w=C.iDw(i)
if(w!=null)return A.bv(e,new A.a4(j,f,new C.a8L(w,!0,null),null),B.ap)
return A.aUf(e,B.c1,f,g,h,i,j)},
mq:function mq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a8L:function a8L(d,e,f){this.c=d
this.d=e
this.a=f},
boO:function boO(d,e){var _=this
_.e=_.d=$
_.dv$=d
_.bd$=e
_.c=_.a=null},
dWe:function dWe(d){this.a=d},
dWf:function dWf(){},
dWg:function dWg(d,e){this.a=d
this.b=e},
boN:function boN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
hcm:function hcm(d){this.a=d},
hcl:function hcl(d,e){this.a=d
this.b=e},
hck:function hck(d,e){this.a=d
this.b=e},
hcj:function hcj(d,e){this.a=d
this.b=e},
aw8:function aw8(d,e,f){this.c=d
this.d=e
this.a=f},
ct5:function ct5(d,e){this.a=d
this.b=e},
aPD:function aPD(){},
iLu(d){var w=null
return A.cf(w,w,!0,w,new C.hbJ(),d,w,!0,!0,x.e2)},
iMP(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.hjI(h,g,f,e),d,w,!0,!0,x.N)},
iLw(d,e){var w=null
return A.cf(w,w,!0,w,new C.hbN(e),d,w,!0,!0,x.dY)},
iLv(d){var w=null
return A.cf(w,w,!0,w,new C.hbM(),d,w,!0,!0,x.c5)},
aXU:function aXU(d,e){this.a=d
this.b=e},
aXT:function aXT(d){this.a=d},
aVX:function aVX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hbJ:function hbJ(){},
hjI:function hjI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hbN:function hbN(d){this.a=d},
hbM:function hbM(){},
a0n:function a0n(d,e){this.c=d
this.a=e},
aCr:function aCr(){var _=this
_.d=$
_.c=_.a=_.e=null},
dev:function dev(d){this.a=d},
dew:function dew(d){this.a=d},
deu:function deu(d,e){this.a=d
this.b=e},
dex:function dex(d){this.a=d},
dey:function dey(d){this.a=d},
a0m:function a0m(d){this.a=d},
aCq:function aCq(){this.d=$
this.c=this.a=null},
der:function der(d){this.a=d},
des:function des(d){this.a=d},
det:function det(d){this.a=d},
a_N:function a_N(d){this.a=d},
aB2:function aB2(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cLp:function cLp(){},
cLv:function cLv(d){this.a=d},
cLw:function cLw(d){this.a=d},
cLx:function cLx(d){this.a=d},
cLu:function cLu(){},
cLy:function cLy(d){this.a=d},
cLz:function cLz(d){this.a=d},
cLt:function cLt(){},
cLA:function cLA(d,e){this.a=d
this.b=e},
cLs:function cLs(d,e){this.a=d
this.b=e},
cLq:function cLq(d,e){this.a=d
this.b=e},
cLB:function cLB(d){this.a=d},
cLr:function cLr(){},
cLC:function cLC(d){this.a=d},
a3C:function a3C(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bBN:function bBN(){this.d=$
this.c=this.a=null},
fyr:function fyr(d,e){this.a=d
this.b=e},
fys:function fys(d){this.a=d},
fyt:function fyt(d,e){this.a=d
this.b=e},
ae7:function ae7(d,e){this.a=d
this.b=e},
GV:function GV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bBL:function bBL(d,e){var _=this
_.d=$
_.bx$=d
_.ab$=e
_.c=_.a=null},
fyp:function fyp(d,e){this.a=d
this.b=e},
aAW:function aAW(d,e){this.c=d
this.a=e},
bBM:function bBM(d,e){var _=this
_.d=$
_.bx$=d
_.ab$=e
_.c=_.a=null},
fyq:function fyq(d){this.a=d},
bBK:function bBK(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aRL:function aRL(){},
aRM:function aRM(){},
bJC(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.h.bb(u),s=B.n.D(B.h.S((u-t)*100),0,99),r=d<0?"-":"",q=A.og(B.n.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h9Z(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aY(B.n.v(s),2,"0")
n.push(A.cX(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.GM(A.cX(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aUy(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aUy=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.ig().lh(85,1280,B.f5),$async$aUy)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fG(),$async$aUy)
case 8:r=e
if(J.ab(r)===0){u=null
w=1
break}q=C.hHY()
w=9
return A.b(C.ct4(q,r),$async$aUy)
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
return A.i($async$aUy,v)},
aUU(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aUU=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.ct1(g)
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
return A.b(A.HQ(p,!0,null,o).d8(0,B.fQ),$async$aUU)
case 9:n=a1
w=10
return A.b(n.ll(),$async$aUU)
case 10:m=a1
w=11
return A.b(m.b.ht(B.hs),$async$aUU)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eU(B.dN.gaS(l))
k="data:image/png;base64,"+B.cS.gcq().aL(i)
if(J.ab(k)<=r){u=k
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
return A.i($async$aUU,v)},
h9Z:function h9Z(){},
uD:function uD(d){this.a=d},
aw7:function aw7(d,e,f){this.c=d
this.d=e
this.a=f},
aIW:function aIW(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f5B:function f5B(d,e){this.a=d
this.b=e},
f5s:function f5s(d){this.a=d},
f5t:function f5t(d){this.a=d},
f5z:function f5z(d,e){this.a=d
this.b=e},
f5y:function f5y(d,e){this.a=d
this.b=e},
f5v:function f5v(d,e){this.a=d
this.b=e},
f5u:function f5u(d,e){this.a=d
this.b=e},
f5w:function f5w(d){this.a=d},
f5x:function f5x(d,e){this.a=d
this.b=e},
f5A:function f5A(d,e){this.a=d
this.b=e},
f5n:function f5n(d,e){this.a=d
this.b=e},
f5r:function f5r(d){this.a=d},
f5q:function f5q(d,e){this.a=d
this.b=e},
f5p:function f5p(d){this.a=d},
f5C:function f5C(d,e){this.a=d
this.b=e},
f5D:function f5D(d,e){this.a=d
this.b=e},
f5o:function f5o(d,e){this.a=d
this.b=e},
hWh(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.W(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
ha_(d,e,f){var w=0,v=A.j(x.N),u
var $async$ha_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.T.au(C.hWh(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ha_,v)},
bJE(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bJE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.ha_(!0,d,e),$async$bJE)
case 4:w=3
return A.b(r.aw5(g,d,e.a),$async$bJE)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e5.aL(B.T.au(C.hWh(d,e,null),null))
u="NGMY_WS:"+B.l2.gcq().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJE,v)},
hMz(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hxv(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ab(s)===0)return!1
if(J.de(s,"NGMYWSSYNC2|"))return!0
if(J.de(s,"NGMY_WS:"))return!0
if(J.eI(s,t))return!0
if(J.de(s,"{"))try{w=B.T.aN(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iJn(d){var w,v,u,t=C.hMz(d)
if(t==null)return null
if(C.hxv(t))return t
w=B.a.c8(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.hxv(v))return v}u=B.a.c8(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.hxv(v))return v}return null},
hxu(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ab(q)===0)return r
if(J.de(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.de(q,"NGMY_WS:")){v=B.ch.cJ(0,B.cM.aL(J.no(q,8)))
w=t.a(B.T.aN(0,v,r))}else w=t.a(B.T.aN(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hqZ(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bJD(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bJD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.aw4(t[1]),$async$bJD)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hxu(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hxu(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJD,v)},
hxt(d){var w=B.n.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.m6(w,v,d.c,d.d,new A.W(Date.now(),0,!1))},
bJ6(){var w=0,v=A.j(x.o),u,t
var $async$bJ6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.I_(),$async$bJ6)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hxu(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJ6,v)},
hXw(d,e,f,g){return A.bW(B.L,null,new C.hjv(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
hjv:function hjv(d,e,f){this.a=d
this.b=e
this.c=f},
agd:function agd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f5F:function f5F(d,e){this.a=d
this.b=e},
f5G:function f5G(d,e){this.a=d
this.b=e},
f5H:function f5H(d,e){this.a=d
this.b=e},
f5I:function f5I(d,e){this.a=d
this.b=e},
f5E:function f5E(d){this.a=d},
aw1:function aw1(d,e,f){this.c=d
this.d=e
this.a=f},
bqz:function bqz(){var _=this
_.c=_.a=_.e=_.d=null},
f5i:function f5i(d,e){this.a=d
this.b=e},
f5j:function f5j(d){this.a=d},
f5k:function f5k(d){this.a=d},
aw6:function aw6(d){this.a=d},
aIV:function aIV(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f5m:function f5m(d){this.a=d},
f5l:function f5l(d){this.a=d},
ifM(d,e,f,g,h){return new C.PR(h,g,d,e,f,null)},
aNY:function aNY(d,e){this.a=d
this.b=e},
PR:function PR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIX:function aIX(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f64:function f64(){},
f60:function f60(d,e){this.a=d
this.b=e},
f61:function f61(d){this.a=d},
f5M:function f5M(d){this.a=d},
f5K:function f5K(d){this.a=d},
f5L:function f5L(d){this.a=d},
f5V:function f5V(d,e){this.a=d
this.b=e},
f5S:function f5S(d,e){this.a=d
this.b=e},
f5T:function f5T(d,e){this.a=d
this.b=e},
f5U:function f5U(d,e,f){this.a=d
this.b=e
this.c=f},
f5Q:function f5Q(d,e,f){this.a=d
this.b=e
this.c=f},
f5O:function f5O(d){this.a=d},
f5P:function f5P(d){this.a=d},
f5R:function f5R(d){this.a=d},
f67:function f67(d){this.a=d},
f66:function f66(d){this.a=d},
f68:function f68(d){this.a=d},
f65:function f65(d){this.a=d},
f5J:function f5J(d){this.a=d},
f5N:function f5N(d,e){this.a=d
this.b=e},
f63:function f63(d,e){this.a=d
this.b=e},
f62:function f62(d,e){this.a=d
this.b=e},
f5Y:function f5Y(d){this.a=d},
f5Z:function f5Z(d){this.a=d},
f6_:function f6_(d,e){this.a=d
this.b=e},
f5X:function f5X(d,e){this.a=d
this.b=e},
f5W:function f5W(d,e,f){this.a=d
this.b=e
this.c=f},
bDz:function bDz(){},
BA(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aE(v,w,"_")},
aiR(d,e,f){return C.iwE(d,e,f)},
iwE(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aiR=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$aiR)
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
return A.i($async$aiR,v)},
aiQ(d,e){return C.iwD(d,e)},
iwD(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aiQ=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$aiQ)
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
return A.i($async$aiQ,v)},
ivr(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.UY(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bGp(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bGp=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b7o(q),$async$bGp)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aUU(q,!1),$async$bGp)
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
return A.i($async$bGp,v)},
i2T(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rR(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rR(p,J.k(u==null?"":u),1,o,q)},
hqZ(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cL(s,x.f)
w=A.ct(w,new C.cKI(),w.$ti.k("L.E"),x.Q)
v=A.a3(w).k("X<L.E>")
r=A.B(new A.X(w,new C.cKJ(),v),v.k("L.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bf(J.k(t==null?"":t))
return new C.m6(w,v,u,r,t==null?new A.W(Date.now(),0,!1):t)},
iAV(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.xo
case"female":case"f":return D.p3
default:return D.zV}},
hSq(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hBQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.iAV(v==null?j:J.k(v))
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
return new C.ie(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
iAX(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Qe
case"viewer":return D.lf
default:return D.vu}},
iAY(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HR(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aTu(d,e){return B.a.i(e.toLowerCase())===C.HR(d,e)&&d.y!==D.lf},
uT(d,e){var w,v=d.y
if(v===D.lf)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HR(d,e))return!0
if(v===D.Qe)return!0
v=d.e
return new A.O(v,A.hxB(),A.T(v).k("O<1,o>")).q(0,w)},
iAh(d){return J.dO(d,new C.fTd()).gI(0)},
hkg(d){var w=0,v=A.j(x.y),u,t
var $async$hkg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.BM(d),$async$hkg)
case 3:u=t.rM(f,new C.hkh(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hkg,v)},
bHw(d,e){var w=0,v=A.j(x.H),u,t
var $async$bHw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BM(d),$async$bHw)
case 3:t=g
if(J.rM(t,new C.fQI(e))){w=1
break}if(C.iAh(t)>=2)throw A.Y(A.be("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bHw,v)},
ao_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cL(h,x.f)
w=A.ct(w,new C.bWz(),w.$ti.k("L.E"),x.P)
v=A.a3(w).k("X<L.E>")
g=A.B(new A.X(w,new C.bWA(),v),v.k("L.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bWB(),x.N)
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
n=C.iAX(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aM(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.bK)
l=x.f
k=x.N
j=x.z
while(f.A()){i=f.gO(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.lj(w,v,s,!r,t,g,q,p,o,n,m)},
hSF(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aE(d.toUpperCase(),w,"")
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
return A.b(t.a9a(0),$async$E7)
case 5:w=6
return A.b(C.fGy(t,l),$async$E7)
case 6:s=f
if(J.cM(s)){u=s
w=1
break}r=B.a.ga_(B.a.i(l.toLowerCase()))
q=t.a
p=J.a0(q)
o=A.aW(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hNf(o)
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
case 12:n=C.hNf(m)
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
fGy(d,e){return C.isB(d,e)},
isB(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fGy=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a0(a3)
a5=A.aW(a4.h(a3,"ngmy_worksheets_index_v3_"+C.BA(a9)))
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
if(J.ab(n)===0){w=7
break}m=A.aW(a4.h(a3,"ngmy_worksheet_item_v3_"+C.BA(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.T.aN(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hqZ(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aW(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.BA(a9)+"_"+n))
i=C.ivr(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b7o(h),$async$fGy)
case 17:g=b1
if(g!=null){i=i.UY(g)
p=!0}case 16:J.bU(q,i)
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
case 8:J.TI(q,new C.fGz())
if(p&&J.ab(q)!==0)C.pz(a9,q)
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
return A.i($async$fGy,v)},
bI_(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bI_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ty(d),$async$bI_)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.E7(r),$async$bI_)
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
return A.i($async$bI_,v)},
hNf(d){var w,v,u,t
try{w=B.T.aN(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cL(w,x.f)
v=A.ct(v,new C.fC_(),v.$ti.k("L.E"),x.fA)
u=A.a3(v).k("X<L.E>")
v=A.B(new A.X(v,new C.fC0(),u),u.k("L.E"))
B.d.b_(v,new C.fC1())
return v}catch(t){v=A.a([],x.D)
return v}},
pz(d,e){return C.iLj(d,e)},
iLj(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pz=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Ty(b2),$async$pz)
case 3:a8=b5
if(J.ab(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aB(),$async$pz)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.BA(a8)
p=A.aW(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.T.aN(0,p,null)),new C.hbx(),a2).fK(0)
a2=J.b8(b3,new C.hby(),a2).c2(0,new C.hbz())
n=A.d9(a2,a2.$ti.k("L.E"))
a2=o,a2=A.e9(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.A()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eI(n,m)?17:18
break
case 17:a5=C.BA(a8)
l=A.aW(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.ab4(l),$async$pz)
case 19:t=21
a5=C.BA(a8)
k=A.aW(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.T.aN(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.ab4(a5==null?null:J.k(a5)),$async$pz)
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
return A.b(C.aiQ(r,"ngmy_worksheet_item_v3_"+C.BA(a8)+"_"+m),$async$pz)
case 29:w=30
return A.b(C.aiQ(r,"ngmy_worksheet_thumb_v3_"+C.BA(a8)+"_"+m),$async$pz)
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
return A.b(C.bGp(h),$async$pz)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aiR(r,"ngmy_worksheet_thumb_v3_"+C.BA(a8)+"_"+a4,f),$async$pz)
case 40:g=i.UY(f)
w=38
break
case 39:$.an.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aiQ(r,"ngmy_worksheet_thumb_v3_"+C.BA(a8)+"_"+a4),$async$pz)
case 41:g=i.UY(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aiQ(r,"ngmy_worksheet_thumb_v3_"+C.BA(a8)+"_"+a4),$async$pz)
case 42:case 34:a4=i.a
w=43
return A.b(C.aiR(r,"ngmy_worksheet_item_v3_"+C.BA(a8)+"_"+a4,B.T.au(g.ak(),null)),$async$pz)
case 43:e=b5
if(!e){$.an.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.bU(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aiR(r,"ngmy_worksheets_index_v3_"+C.BA(a8),B.T.au(q,null)),$async$pz)
case 44:d=b5
if(!d){$.an.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eY(b3,new C.hbA(q))
a4=a3.$ti.k("cQ<1,a9<o,@>>")
a7=A.B(new A.cQ(a3,new C.hbB(),a4),a4.k("L.E"))
a0=a7
w=45
return A.b(C.aiR(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.ga_(B.a.i(a8.toLowerCase()))),B.T.au(a0,null)),$async$pz)
case 45:w=46
return A.b(J.i1Y(r),$async$pz)
case 46:if(a2.gcp(b3)&&J.ab(q)===0){u=!1
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
r=s.bl(t,new C.hkf(e))
if(r===-1)s.cl(t,0,e)
else s.n(t,r,e)
u=C.pz(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MS,v)},
bHL(d,e){var w=0,v=A.j(x.H),u
var $async$bHL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.E7(d),$async$bHL)
case 2:u=g
J.mI(u,new C.fTH(e))
w=3
return A.b(C.pz(d,u),$async$bHL)
case 3:return A.h(null,v)}})
return A.i($async$bHL,v)},
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
j=A.ct(j,new C.fXk(),j.$ti.k("L.E"),x.k)
s=A.a3(j).k("X<L.E>")
r=A.B(new A.X(j,new C.fXl(),s),s.k("L.E"))
B.d.b_(r,new C.fXm())
k=r}}catch(h){}w=4
return A.b(C.fCR(d),$async$HT)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.it_(k,p,d)
j=A.T(o)
s=j.k("O<1,a9<o,@>>")
s=A.B(new A.O(o,new C.fXn(),s),s.k("aj.E"))
n=B.T.au(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.SF(d,o),$async$HT)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fXo(d),j),j.k("L.E"))
if(m.length!==0)C.aTf(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HT,v)},
hbi(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$hbi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SF(d,e),$async$hbi)
case 3:t=J.dO(e,new C.hbj(d))
s=A.B(t,t.$ti.k("L.E"))
if(s.length===0){u=!0
w=1
break}u=C.aTf(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hbi,v)},
a5l(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a5l=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a5l)
case 2:n=g
m=B.a.ga_(B.a.i(d.toLowerCase()))
l=A.aW(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.T.aN(0,l,null)
if(x.j.b(u)){m=J.cL(u,x.f)
m=A.ct(m,new C.hka(),m.$ti.k("L.E"),x.k)
t=A.a3(m).k("X<L.E>")
s=A.B(new A.X(m,new C.hkb(),t),t.k("L.E"))
o=s}}catch(k){}q=J.nM(o,new C.hkc(e))
if(B.a.i(e.x).length===0&&C.uT(e,d)){m=B.a.i(d.toLowerCase())
p=e.aJ0(e.y===D.lf?D.lf:D.vu,m)}else p=e
if(q===-1)J.lu(o,0,p)
else J.aL(o,q,p)
w=3
return A.b(C.SF(d,o),$async$a5l)
case 3:w=C.uT(p,d)?4:5
break
case 4:w=6
return A.b(C.aTe(C.HR(p,d),p),$async$a5l)
case 6:if(!g)$.an.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a5l,v)},
aTs(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aTs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HT(d),$async$aTs)
case 2:u=g
t=J.cK(u)
s=A.nU(t.eY(u,new C.fTo(e)))
t.bs(u,new C.fTp(e))
w=3
return A.b(C.SF(d,u),$async$aTs)
case 3:w=s!=null&&C.aTu(s,d)?4:5
break
case 4:w=6
return A.b(C.fC3(e),$async$aTs)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aTs,v)},
akH(d){var w=d.f,v=A.T(w).k("X<1>")
w=A.B(new A.X(w,new C.hkl(),v),v.k("L.E"))
return w},
huI(d,e){var w,v=d.f,u=A.nU(new A.X(v,new C.fST(e),A.T(v).k("X<1>")))
v=C.akH(d)
w=A.T(v).k("X<1>")
v=A.B(new A.X(v,new C.fSU(e,u),w),w.k("L.E"))
B.d.b_(v,new C.fSV())
return v},
iB0(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hXA(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bl(C.huI(d,u),new C.hjJ(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iCx(d,e){var w
if(e==null||e.length===0)return 1
w=C.huI(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fYb(),A.T(w).k("O<1,F>")).eJ(0,B.wP)+1},
iLc(d){var w,v=C.akH(d)
if(v.length===0)return null
w=new A.X(v,new C.hbc(),A.T(v).k("X<1>"))
if(!w.gar(0))return w.gH(0)
return B.d.gH(v)},
iAW(d){return A.J(["id",d.a,"name",d.b,"gender",C.hSq(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
iCs(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
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
d=q.aIW(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cVO(a1,w,a3.d,a2.y,s,a0,v)},
BM(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$BM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$BM)
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
p=A.ct(p,new C.fXh(),p.$ti.k("L.E"),x.k)
s=A.a3(p).k("X<L.E>")
p=A.B(new A.X(p,new C.fXi(),s),s.k("L.E"))
B.d.b_(p,new C.fXj())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$BM,v)},
akp(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$akp=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.vu:D.lf
a7=C.HR(b2,b3)
w=2
return A.b(C.BM(b1),$async$akp)
case 2:a8=b5
a9=J.cK(a8)
b0=a9.bl(a8,new C.hb7(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bHw(b1,b2),$async$akp)
case 5:case 4:if(b0===-1){u=b2.aJ0(a6,a7)
a9.cl(a8,0,u)}else{t=a9.h(a8,b0)
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
s.n(0,m,l.aIW(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bb<2>")
s=A.B(new A.bb(s,k),k.k("L.E"))
k=a5?D.vu:D.lf
u=t.cVQ(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.SF(b1,a8),$async$akp)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aTe(B.a.i(b3.toLowerCase()),u),$async$akp)
case 9:case 8:return A.h(null,v)}})
return A.i($async$akp,v)},
hNK(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.W(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("O<1,a9<o,@>>"),k=A.B(new A.O(m,C.hWE(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hNL(d,e){var w=new A.W(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("O<1,a9<o,@>>")
u=A.B(new A.O(u,C.hWE(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
iqj(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a0(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ao_(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.hxB(),A.T(j).k("O<1,o>")).c2(0,new C.fCD())
t=A.B(j,j.$ti.k("L.E"))
if(u===v)s=D.vu
else s=B.d.q(t,u)?D.Qe:D.lf
return w.aJ0(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ao_(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cL(q,h)
h=A.ct(h,new C.fCE(),h.$ti.k("L.E"),x.P)
p=A.a3(h).k("X<L.E>")
o=A.B(new A.X(h,new C.fCF(),p),p.k("L.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fCG(),x.N).c2(0,new C.fCH())
t=A.B(h,h.$ti.k("L.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.vu
else s=B.d.q(t,u)?D.Qe:D.lf
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
return new C.lj(h,r,p,!m,t,o,l,j,v,s,B.co)},
fCR(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fCR=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ab(a0)===0){u=null
w=1
break}t=4
r=new C.fCV()
h=x.N
g=x.z
w=7
return A.b(A.hd(A.a([A.mc("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.mc("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.mc("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fCR)
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
if(J.ab(j)!==0)J.aL(m,j,k)}l=m
h=A.a3(l).k("bb<2>")
h=A.ct(new A.bb(l,h),new C.fCS(a0),h.k("L.E"),x.k)
l=A.a3(h).k("X<L.E>")
l=A.B(new A.X(h,new C.fCT(),l),l.k("L.E"))
B.d.b_(l,new C.fCU())
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
return A.i($async$fCR,v)},
it_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a0(e)
if(j.gar(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dT(e,new C.fHk(),v).c2(0,new C.fHl())
t=A.d9(u,u.$ti.k("L.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HR(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.lf){m=q.e
m=!new A.O(m,A.hxB(),A.T(m).k("O<1,o>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.A();){v=j.gO(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.iCs(l,v)
o=C.HR(k,w)
p=v.d
s.n(0,u,o===w?k.biP(p,D.vu):k.biP(p,v.y))}j=s.$ti.k("bb<2>")
j=A.B(new A.bb(s,j),j.k("L.E"))
B.d.b_(j,new C.fHm())
return j},
SF(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$SF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$SF)
case 2:u=g
t=B.a.ga_(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fKl(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.T.au(s,null)),$async$SF)
case 3:return A.h(null,v)}})
return A.i($async$SF,v)},
aTe(d,e){return C.iyD(d,e)},
iyD(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aTe=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mF("family_trees",A.a([C.hNK(e,d)],p),null,B.d_),$async$aTe)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mF("family_trees",A.a([C.hNL(e,d)],p),null,B.d_),$async$aTe)
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
return A.i($async$aTe,v)},
aTf(d,e){return C.iyE(d,e)},
iyE(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aTf=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("O<1,a9<o,@>>")
m=n.k("aj.E")
l=A.B(new A.O(e,new C.fPT(d),n),m)
r=l
w=7
return A.b(A.mF("family_trees",r,null,B.d_),$async$aTf)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fPU(d),n),m)
p=k
w=8
return A.b(A.mF("family_trees",p,null,B.d_),$async$aTf)
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
return A.i($async$aTf,v)},
fC3(d){return C.ips(d)},
ips(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fC3=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.T5("family_trees",A.J(["id",d],x.N,x.z),null,B.d_),$async$fC3)
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
return A.i($async$fC3,v)},
rR:function rR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
m6:function m6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cKL:function cKL(){},
cKK:function cKK(){},
cKI:function cKI(){},
cKJ:function cKJ(){},
J0:function J0(d,e){this.a=d
this.b=e},
ie:function ie(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
fTd:function fTd(){},
hkh:function hkh(d){this.a=d},
fQI:function fQI(d){this.a=d},
lj:function lj(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bWD:function bWD(){},
bWC:function bWC(){},
bWz:function bWz(){},
bWA:function bWA(){},
bWB:function bWB(){},
fGz:function fGz(){},
fC_:function fC_(){},
fC0:function fC0(){},
fC1:function fC1(){},
hbx:function hbx(){},
hby:function hby(){},
hbz:function hbz(){},
hbA:function hbA(d){this.a=d},
hbB:function hbB(){},
hkf:function hkf(d){this.a=d},
fTH:function fTH(d){this.a=d},
fXk:function fXk(){},
fXl:function fXl(){},
fXm:function fXm(){},
fXn:function fXn(){},
fXo:function fXo(d){this.a=d},
hbj:function hbj(d){this.a=d},
hka:function hka(){},
hkb:function hkb(){},
hkc:function hkc(d){this.a=d},
fTo:function fTo(d){this.a=d},
fTp:function fTp(d){this.a=d},
hkl:function hkl(){},
fST:function fST(d){this.a=d},
fSU:function fSU(d,e){this.a=d
this.b=e},
fSV:function fSV(){},
hjJ:function hjJ(d){this.a=d},
fYb:function fYb(){},
hbc:function hbc(){},
fXh:function fXh(){},
fXi:function fXi(){},
fXj:function fXj(){},
hb7:function hb7(d){this.a=d},
fCD:function fCD(){},
fCE:function fCE(){},
fCF:function fCF(){},
fCG:function fCG(){},
fCH:function fCH(){},
fCV:function fCV(){},
fCW:function fCW(d){this.a=d},
fCS:function fCS(d){this.a=d},
fCT:function fCT(){},
fCU:function fCU(){},
fHk:function fHk(){},
fHl:function fHl(){},
fHm:function fHm(){},
fKl:function fKl(){},
fPT:function fPT(d){this.a=d},
fPU:function fPU(d){this.a=d},
cKM:function cKM(d,e){this.a=d
this.b=e},
cKN:function cKN(d,e){this.a=d
this.b=e},
aL6:function aL6(d,e,f){this.a=d
this.b=e
this.c=f},
bdK:function bdK(){this.b=this.a=0},
bdJ:function bdJ(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bBO:function bBO(){},
xK(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcC()+"/"+w.gcm()
if(!e)return v
return v+" "+B.a.aY(B.n.v(w.gnN()),2,"0")+":"+B.a.aY(B.n.v(w.gHS()),2,"0")},
izO(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
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
a5.ah(g,g.a6(0,new A.m(s,a7*0.17)),O.aiP(F.tC,t))
s=g.a6(0,new A.m(s,a7*0.18))
q=A.M()
q.r=F.tC.gp(0)
a5.P(s,r,q)
e=-2.5+b3*0.5
d=f.a6(0,new A.m(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,O.aiP(F.tC,t))
w=A.M()
w.r=F.tC.gp(0)
a5.P(d,r,w)
v*=0.7
a0=new A.m(0,v)
a1=a7*0.22
if(b1===1){w=a0.a6(0,new A.m(0,-a1*0.12))
u=A.M()
u.r=F.mq.gp(0)
a5.P(w,a1*1.18,u)}w=A.M()
w.r=F.tC.gp(0)
a5.P(a0,a1,w)
if(b1===0){w=A.c0(a0,a1)
u=A.M()
u.r=F.mq.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.c0(a0,a1)
u=A.M()
u.r=F.mq.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.ht[l]
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=F.mq.gp(0)
a5.P(new A.m(0+a2*a1*1.05,w),u,t)}}a3=B.h.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.ht[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.ae
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
m.r=B.i_.j(0.5).gp(0)
a5.P(new A.m(0+n*0.62,w),u,m)}a5.cQ(A.c1(a0.a6(0,new A.m(0,a1*0.5)).aI(0,new A.m(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,O.aiP(B.br,1.8))
a4.restore()},
ifJ(){var w,v=$.oi(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hq(u)},
aw2(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$aw2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$aw2)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f9("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$aw2)
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
return A.i($async$aw2,v)},
aw3(d){return C.ifK(d)},
ifK(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$aw3=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$aw3)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i4("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.d_,null),$async$aw3)
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
return A.i($async$aw3,v)},
aw5(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aw5=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$aw5)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.ifJ()
w=4
return A.b(C.aw2(),$async$aw5)
case 4:r=h
q=B.a.i(e)
p=B.e5.aL(t)
J.aL(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cS.gcq().aL(p),"usesRemaining",25,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.aw3(r),$async$aw5)
case 5:u=new A.a2D("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aw5,v)},
aw4(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aw4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.ce(),$async$aw4)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.aw2(),$async$aw4)
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
if(J.ab(t)===0){u=null
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
return A.b(C.aw3(q),$async$aw4)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aw4,v)},
hHY(){var w=new A.W(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cX.aw(999999)},
ifL(d){var w,v,u,t,s,r,q
try{w=A.zA(d)
if(w==null)return d
v=w
if(J.MY(v)>960||J.MX(v)>960){s=v
r=J.MY(v)>=J.MX(v)?960:null
v=A.Ml(s,J.MX(v)>J.MY(v)?960:null,B.J8,r)}s=v
u=A.Jm(82).Ad(s,B.rG)
if(J.ab(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ad(q)
$.an.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
ct4(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$ct4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.ifL(e)
$.ct0.n(0,s,t)
u=C.bJG(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ct4,v)},
b7o(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b7o=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.de(l,"data:image")){u=null
w=1
break}t=4
r=J.eI(l,",")?B.d.gal(J.mg(l,",")):l
q=B.cM.aL(r)
if(J.ab(q)===0){u=null
w=1
break}p=C.hHY()
w=7
return A.b(C.ct4(p,q),$async$b7o)
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
return A.i($async$b7o,v)},
ct1(d){var w=0,v=A.j(x.T),u,t,s
var $async$ct1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.ct3(s),$async$ct1)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcq().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ct1,v)},
ab4(d){var w=0,v=A.j(x.H),u,t
var $async$ab4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hWi(d)
if(t==null){w=1
break}$.ct0.X(0,t)
w=3
return A.b(C.bJF(t),$async$ab4)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ab4,v)},
bJG(d,e){return C.iJq(d,e)},
iJq(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bJG=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aS2
w=7
return A.b(n==null?$.aS2=A.htt():n,$async$bJG)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mJ(r,"thumbs","readwrite")
B.iW.mx(J.mH(p,"thumbs"),q,l)
w=8
return A.b(J.oY(p),$async$bJG)
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
return A.i($async$bJG,v)},
bJF(d){return C.iJo(d)},
iJo(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bJF=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aS2
w=7
return A.b(o==null?$.aS2=A.htt():o,$async$bJF)
case 7:r=f
q=J.mJ(r,"thumbs","readwrite")
B.iW.Hq(J.mH(q,"thumbs"),m)
w=8
return A.b(J.oY(q),$async$bJF)
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
return A.i($async$bJF,v)}},D
J=c[1]
A=c[0]
B=c[2]
A9=c[85]
S=c[296]
Z=c[112]
Aa=c[295]
P=c[300]
A_=c[206]
T=c[66]
M=c[69]
Ab=c[272]
L=c[244]
A0=c[120]
U=c[156]
H=c[41]
E=c[260]
Ac=c[275]
V=c[139]
Ad=c[170]
A1=c[115]
Ae=c[105]
Af=c[107]
Ag=c[72]
Ah=c[271]
Ai=c[50]
Q=c[270]
Aj=c[294]
Ak=c[240]
N=c[97]
A2=c[93]
Al=c[213]
A3=c[166]
A4=c[218]
A5=c[256]
W=c[301]
A6=c[299]
Am=c[162]
An=c[297]
Ao=c[86]
G=c[298]
Ap=c[169]
Aq=c[302]
Ar=c[155]
A7=c[248]
As=c[40]
At=c[199]
Au=c[114]
Av=c[236]
X=c[287]
O=c[49]
F=c[131]
Aw=c[39]
I=c[138]
A8=c[119]
K=c[175]
Ax=c[121]
Y=c[83]
R=c[38]
Ay=c[117]
C=a.updateHolder(c[7],C)
D=c[293]
C.arA.prototype={}
C.b2w.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bnb(),f=h.x!=null&&h.Ay(i).length===0
if(h.x!=null)w=f?B.b8:B.bC
else w=h.gVY()?B.bC:B.ef
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.K(D.buc,B.r,1)
s=x.p
r=A.q(i,A.w(A.a([A.q(i,D.fyi,B.f,i,i,new A.p(B.b8.j(0.12),i,i,A.n(999),i,i,B.m),i,i,i,i,B.hq,i,i,i),B.S,D.h3N,B.at,A.c(C.xK(new A.W(Date.now(),0,!1),!0),i,i,i,i,i,i,D.h_k,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.bbH,i,i,i,i,B.PP,i,i,i)
q=A.n(16)
p=A.K(B.bo,B.r,1)
o=A.K(B.b8.j(0.28),B.r,1)
n=A.hvT(h.d)
o=A.q(B.z,C.b2v(A.h_K(h.e,n),30),B.f,i,i,new A.p(B.mt,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fVd,B.K,i,i)
m=A.n(14)
l=A.K(B.bo,B.r,1)
q=A.q(i,A.w(A.a([o,B.N,n,B.bs,D.h45,B.af,A.q(i,A.w(A.a([D.hkD,B.bs,A.c(A.BP(h.c),i,i,i,i,i,i,D.fPE,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.m),i,i,i,i,B.fc,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aS,i,p,q,i,i,B.m),i,i,i,i,B.a2v,i,i,i)
p=A.n(16)
m=A.K(B.bo,B.r,1)
l=j.aWc("Original due",C.xK(h.r,!1))
n=j.aWc("Current due",C.xK(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.S,A.q(i,A.w(A.a([l,B.N,n,B.S,A.q(i,A.c(h.gaQ9(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.m),i,i,i,i,B.xe,i,i,1/0),B.S,j.cpL(),B.N,j.cbN(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.K(B.bo,B.r,1)
B.d.u(p,A.a([B.S,A.q(i,A.w(A.a([D.h56,B.at,A.c(q,i,i,i,i,i,i,D.fUm,i,i,i)],s),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaKE()){q=A.n(14)
o=A.K(B.cG,B.r,1.6)
B.d.u(p,A.a([B.S,A.q(i,A.w(A.a([D.hlY,B.N,A.bv(A.n(12),A.en(new A.a4(1/0,88,A.b5(i,i,i,new A.Yd(h.ax,B.a_,D.fD5,!0,3.5,i),B.az),i),B.c,!0),B.ap)],s),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.m),i,i,i,i,B.Di,i,i,i)],s))}p.push(B.aA)
p.push(D.hdG)
return A.q(i,A.w(A.a([r,new A.C(B.a2x,A.w(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.P,0,B.p),B.ap,i,i,new A.p(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aWc(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.ae_,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fQK,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
cpL(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.acv(B.ef,u,"Not paid yet")
w=t.Ay(null).length
v=w===0?B.b8:B.bC
return this.acv(v,u,C.xK(t.x,!0))},
cbN(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.acv(B.b8,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.acv(B.b8,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.ae_,u,u,u)
v=A.T(d).k("O<1,hx>")
v=A.B(new A.O(d,new C.cbY(),v),v.k("aj.E"))
return A.w(A.a([w,B.aj,A.bX(B.bG,v,B.bq,u,6,6)],x.p),B.B,u,B.e,B.i,0,B.p)},
acv(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.ae_,w,w,w),1),new A.cZ(1,B.c6,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dL,w,w),w)],x.p),B.B,w,B.e,B.i,0,w,w)}}
C.bg1.prototype={
a5(d,e){new A.Yd(this.b,B.a_,e,!0,3.5,null).a5(d,e)},
aC(d){return d.b!==this.b}}
C.arN.prototype={
R(){return new C.aGN(A.a([],x.bp))},
gec(){return this.c}}
C.aGN.prototype={
Z(){this.a4()
this.Kt()},
Kt(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Kt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4z(t.a.c),$async$Kt)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dX7(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Kt,v)},
aYe(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bv:B.bl).j(0.22)
w=A.n(10)
return A.bB(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bv:B.bl).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.n(10),D.b9n),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aYd(d){return this.aYe(d,null)},
Rt(d){return this.ctx(d)},
ctx(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rt=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.J7:B.f5
w=7
return A.b(new A.ig().DL(72,900,900,n),$async$Rt)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fG(),$async$Rt)
case 8:p=f
n=B.cS.gcq().aL(p)
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
return A.i($async$Rt,v)},
b6F(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.n(10),n=A.K((q?B.bv:B.bl).j(0.18),B.r,1)
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
q=A.a([q,B.aa,u,A.bJ(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aJ(r,r,r,r,A.V(B.cD,s.a.d.a?B.bv:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cp))
return A.q(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.m),r,r,r,B.jE,D.bHs,r,r,r)},
EG(d){return this.bHC(d)},
bHB(){return this.EG(null)},
bHC(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$EG=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ay()
r=new A.au(new A.bd(a4,B.bb,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.h.b9(a4)
p=a5.c
a4=a4===q?B.n.v(B.h.L(p)):B.h.a1(p,2)}o=new A.au(new A.bd(a4,B.bb,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bd(a4,B.bb,B.aP),s)
if(a3){a4=new A.W(Date.now(),0,!1).bM(6048e8)
m=A.c3(a4.gcm(),a4.gci(),a4.gcC(),0,0,0,0,0)}else{a4=a5.f
m=A.c3(a4.gcm(),a4.gci(),a4.gcC(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bt(a4,!0,x.cT)
i=a3?null:A.hvT(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.y_?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hU(B.v.j(0.55),!0,"Dismiss",a4,new C.dWR(),new C.dWS(a2,t,a5,r,new C.dWT(a2,t),o,n,j),B.eN,!0,x.y),$async$EG)
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
break}if(f.length===0||e<=0){t.c.M(x.q).f.T(D.fJH)
w=1
break}a0=a2.d
if(a0==null){t.c.M(x.q).f.T(D.fIl)
w=1
break}a1=A.h_K(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.y_?"male":"female"
w=7
return A.b(A.akG(a3,A.hEw(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$EG)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.y_?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a7(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c3(a3.gcm(),a3.gci(),a3.gcC(),0,0,0,0,0)
a4=a5.f
if(!a3.B(0,A.c3(a4.gcm(),a4.gci(),a4.gcC(),0,0,0,0,0)))a5.cYb(a2.a)
w=8
return A.b(A.akG(t.a.c,a5),$async$EG)
case 8:case 5:w=9
return A.b(t.Kt(),$async$EG)
case 9:case 1:return A.h(u,v)}})
return A.i($async$EG,v)},
aYT(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cZ.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cZ
else s=(this.a.d.a?B.bv:B.bl).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b2v(d,18)
if(g)q=B.cZ
else q=this.a.d.a?B.aS:B.ax
return A.aD(!1,B.a3,!0,v,A.aN(!1,u,!0,A.q(p,A.A(A.a([r,B.b7,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.ba,B.i,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.m),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Uf(d){return this.cLW(d)},
cLW(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Uf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hU(B.v.j(0.55),!0,"Dismiss",s,new C.dXa(),new C.dXb(t,d),B.he,!0,x.y),$async$Uf)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.W(s,0,!1)
case 4:w=7
return A.b(A.akG(t.a.c,d),$async$Uf)
case 7:w=8
return A.b(t.Kt(),$async$Uf)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Uf,v)},
Rs(d,e){return this.bSL(0,e)},
bSL(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lJ(s,"Cancel","Delete",e.b+" \xb7 "+A.BP(e.c)+" will be removed from this device.","Delete this debt?"),$async$Rs)
case 3:if(!g){w=1
break}w=4
return A.b(C.fTv(t.a.c,e.a),$async$Rs)
case 4:w=5
return A.b(t.Kt(),$async$Rs)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Rs,v)},
aiy(d){return this.cn1(d)},
cn1(d){var w=0,v=A.j(x.H),u=this,t
var $async$aiy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bW(B.L,null,new C.dX4(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aiy)
case 2:return A.h(null,v)}})
return A.i($async$aiy,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eMf
w=J.dO(m.d,new C.dXc())
v=A.B(w,w.$ti.k("L.E"))
w=J.dO(m.d,new C.dXd())
u=A.B(w,w.$ti.k("L.E"))
t=B.d.cH(v,0,new C.dXe())
w=A.n(18)
s=m.a.d.a
r=s?D.cIX:D.aG8
q=A.K(s?B.cZ.j(0.35):B.cZ.j(0.18),B.r,1)
s=A.q(l,D.c93,B.f,l,l,new A.p(B.cZ.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aD(!1,B.a3,!0,A.n(12),A.aN(!1,A.n(12),!0,D.eLy,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dXf(m),l,l,l,l,l,l,l),B.f,B.cZ,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cHT("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BP(t)
r=A.a([A.q(l,A.w(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.bcT(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.B,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a6(B.aw,B.aD,B.w,r,l,l),B.m),l,l,l,l,B.aoE,l,l,l),B.aA],p)
if(J.ci(m.d)){w=m.a.d.a
s=w?B.eo:B.c
q=A.n(18)
o=A.K((w?B.bv:B.bl).j(0.12),B.r,1)
n=A.q(l,D.c3z,B.f,l,l,new A.p(B.cZ.j(0.12),l,l,A.n(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,15,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.w(A.a([n,B.af,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.m),l,l,l,l,D.bKb,l,l,1/0))}else{w=m.gcsK()
s=A.B(new A.O(v,w,A.T(v).k("O<1,x>")),x.l)
if(u.length!==0){q=A.a([B.aj,new A.C(D.bLQ,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.T(u).k("O<1,x>")))
B.d.u(s,q)}B.d.u(r,s)}return A.w(r,B.al,l,B.e,B.i,0,B.p)},
bcT(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.n(14),r=A.K((v.a.d.a?B.bv:B.bl).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cZ
else w=v.a.d.a?B.aS:B.ax
return A.q(u,A.w(A.a([q,B.bs,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.i,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.m),u,u,u,u,B.es,u,u,u)},
cHT(d,e){return this.bcT(!1,d,e)},
csL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.Ay(j).length,h=d.bmr()
if(d.x!=null){w=d.Ay(j).length
v=w===0?B.cZ:B.bC}else if(d.gVY())v=B.bC
else{if(h)w=B.cZ
else w=k.a.d.a?B.bv:B.bl
v=w}if(d.x!=null){w=d.Ay(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xK(u,!1)}else{u.toString
t="Paid "+C.xK(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xK(w,!1)+" \xb7 "+i+" missed":"Due "+C.xK(w,!1)}w=k.a.d.a?B.eo:B.c
u=A.n(18)
if(d.gVY()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bv:B.bl).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.v.j(0.04),B.cO,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bt:B.mt
o=A.K(d.gVY()&&d.x==null?B.bC.j(0.45):B.cZ.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hvT(d.d)
o=A.q(B.z,A.d3(C.b2v(A.h_K(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.ax
m=x.p
n=A.a([new A.cZ(1,B.c6,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaKE())B.d.u(n,A.a([B.dU,A.V(B.QG,B.cZ.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cR,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.i,0,B.p),1)
n=A.BP(d.c)
l=k.a.d.a?B.aS:B.ax
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aD(!1,B.a3,!0,j,A.aN(!1,q,!0,new A.C(Aj.aoq,A.A(A.a([o,B.bd,p,B.aa,A.w(A.a([n,B.bs,A.V(B.eP,(k.a.d.a?B.bv:B.bl).j(0.5),j,j,j,18)],m),B.ds,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dX6(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.p(w,j,s,u,r,j,B.m),j,j,j,B.d3,j,j,j,j)}}
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
n.push(A.aA(a0,A.q(a0,A.V(B.cD,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.p(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.i4,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aCe,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Dw,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.d8(B.dn,m,B.f,A.A(l,B.l,a0,B.e,B.P,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(B.aoa,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cN:B.bm,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.C(B.fE,A.w(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.fDU)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.C(B.vm,A.q(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a6(B.a5,B.a9,B.w,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.lH,A.w(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hN,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a6(B.aw,B.aD,B.w,a1.d,a0,a0),B.m),a0,a0,a0,D.bHX,a0,a0,a0,a0)}}
C.aZb.prototype={
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
if(p.z)o.push(new A.C(B.rl,n,q))
return new A.C(B.d3,A.w(o,B.l,q,B.e,B.P,0,B.p),q)}}
C.UY.prototype={
R(){return new C.bjI()}}
C.bjI.prototype={
gc6j(){var w=this.d
return w===$?this.d=this.a.c:w},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.eMa,D.eMg],l)
for(w=0;w<8;++w){v=D.a6S[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.IW:B.An
q=t===s
r=A.V(r,q?B.eM:B.bX,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.b7,A.c(v.b,n,n,n,n,n,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bu(1,B.b9,A.c(v.c,n,1,B.a2,n,n,n,B.wr,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aQ(24,24)
p=new A.ax(B.eM,2,B.r,-1)
s=new A.p(n,n,new A.bE(p,p,p,p),new A.bc(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.C(B.f4,A.w(A.a([new A.C(B.mB,new A.bZ(B.aJ,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.q(n,new A.dp(!0,new C.anN(v,q.d,q.e,new C.dlY(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dlZ(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.C(D.bIk,A.bH(D.hrH,n,new C.dm_(o,d),A.bp(B.b2,n,n,n,n,B.pu,n,n,new A.ba(A.n(16),B.a1),n,n,n)),n))
return A.bn(!0,new A.cO(new A.aY(0,1/0,0,m.a.b*0.9),A.ck(k,n,n,D.bMJ,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nR.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bj0(d,e,f){return new C.nR(this.a,e,d,f)}}
C.J_.prototype={
xE(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.J_(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aIN(d){var w=null
return this.xE(w,w,w,w,w,d,w,w,w,w,w,w)},
cTJ(d){var w=null
return this.xE(w,w,w,w,d,w,w,w,w,w,w,w)},
biZ(d,e,f){var w=null
return this.xE(d,w,w,w,w,w,w,w,e,w,f,w)},
cUn(d){var w=null
return this.xE(w,w,w,w,w,w,d,w,w,w,w,w)},
cUw(d){var w=null
return this.xE(w,w,w,w,w,w,w,w,w,d,w,w)},
cTH(d){var w=null
return this.xE(w,w,w,d,w,w,w,w,w,w,w,w)},
cUy(d){var w=null
return this.xE(w,w,w,w,w,w,w,w,w,w,w,d)},
cTE(d){var w=null
return this.xE(w,w,d,w,w,w,w,w,w,w,w,w)},
cTz(d){var w=null
return this.xE(w,d,w,w,w,w,w,w,w,w,w,w)},
Hf(d){var w=null
return this.xE(w,w,w,w,w,w,w,d,w,w,w,w)},
cUH(d,e,f,g,h,i,j,k,l,m,n){return this.xE(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cRb(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bVk(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.h.L(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cV(d.h(0,n))).length!==0?B.a.i(A.cV(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cV(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.EU.geF(D.EU))
s=i==null?o:B.h.D(i,18,36)
r=l.$2("position",D.a8E)
q=l.$2("frame",D.a7Y)
l=l.$2("texture",D.a7U)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cV(d.h(0,"author"))):o
return this.cUH(p,u,t,q,r,A.qW(d.h(0,"ribbon"))?A.DQ(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a0L.prototype={
R(){return new C.aDJ(A.a([],x.I),D.Qd)},
gec(){return this.c}}
C.aDJ.prototype={
Z(){var w,v=this
v.a4()
v.f=A.AI(0,1)
w=$.ay()
v.z=new A.au(B.ay,w)
v.Q=new A.au(B.ay,w)
v.lq()
w=v.a
C.bHW(w.c,w.d).bB(new C.dmE(v),x.fL)},
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
lq(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mo(s.c,s.d),$async$lq)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.dms(t,r))
t.aA5()
case 1:return A.h(u,v)}})
return A.i($async$lq,v)},
gawC(){var w,v=this
if(!J.ci(v.d)){w=v.r
w=w<0||w>=J.ab(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
aA5(){var w,v,u=this.gawC(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
clk(d){this.l(new C.dmp(this,d))
this.aA5()},
Pg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nR(B.n.v(1000*Date.now()),"Untitled page","",new A.W(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aVh(r.c,r.d,s),$async$Pg)
case 3:w=4
return A.b(t.lq(),$async$Pg)
case 4:if(t.c==null||J.ci(t.d)){w=1
break}q=J.nM(t.d,new C.dm0(s))
p=q>=0?q:J.ab(t.d)-1
t.l(new C.dm1(t,p))
t.aA5()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.CL(p+1,B.cm,B.lc),$async$Pg)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Pg,v)},
Cm(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Cm=A.e(function(d,e){if(d===1)return A.f(e,v)
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
return A.b(C.aVh(o.c,o.d,new C.nR(s,r,q,new A.W(p,0,!1))),$async$Cm)
case 3:w=4
return A.b(t.lq(),$async$Cm)
case 4:if(t.c==null){w=1
break}t.l(new C.dmt(t))
case 1:return A.h(u,v)}})
return A.i($async$Cm,v)},
PZ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gawC()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dm9(r),s,null,!0,!0,x.y),$async$PZ)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bHF(s.c,s.d,r.a),$async$PZ)
case 4:t.l(new C.dma(t))
w=5
return A.b(t.lq(),$async$PZ)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.W0(B.n.D(t.r+1,0,J.ab(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$PZ,v)},
zU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cm(),$async$zU)
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
return A.b(C.SZ(s,r.r,o,p,q),$async$zU)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hX7(s,r.x,r.r),$async$zU)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Mo(s.c,s.d),$async$zU)
case 10:l=e
for(s=n.d,r=J.cK(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.nR(""+(m+k),q,B.a.i(j.b),new A.W(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BW(r.c,r.d,l),$async$zU)
case 11:w=12
return A.b(t.lq(),$async$zU)
case 12:r=t.c
if(r==null){w=1
break}r.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zU,v)},
a3m(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a3m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cm(),$async$a3m)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzS(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.du(D.AN,new C.dmq(t),new C.dmr())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.ne("Our Family",o,"",""))
for(o=J.aM(t.d);o.A();){n=o.gO(o)
p.push(new H.ne(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hxR(o,new H.tc(s,r,"",p,new H.vz(q.d,null,null,null,null,"","","")),null),$async$a3m)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a3m,v)},
PG(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$PG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cm(),$async$PG)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bW(D.aji,null,new C.dm5(t),s,!0,!0,!0,I.ac5,!1,!1,x.N),$async$PG)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cTJ(r)
t.l(new C.dm6(t,q))
s=t.a
w=7
return A.b(C.TB(s.c,s.d,q),$async$PG)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PG,v)},
Zn(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bW(D.aji,null,new C.dmb(t),r,!0,!0,!0,I.ac5,!1,!1,x.e),$async$Zn)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.dmc(t,s))
r=t.a
w=4
return A.b(C.TB(r.c,r.d,s),$async$Zn)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.CL(0,B.ed,B.nm)
case 1:return A.h(u,v)}})
return A.i($async$Zn,v)},
bYt(d){var w=d.bU(),v=B.a.aY(B.n.v(w.gci()),2,"0"),u=B.a.aY(B.n.v(w.gcC()),2,"0")
return""+w.gcm()+"-"+v+"-"+u},
gzS(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
C(d){var w,v,u,t,s,r=this,q=null,p=r.c5x()
if(r.e)w=D.ahY
else if(J.ci(r.d)){w=r.y
v=r.gzS(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fOZ,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.C(X.apS,new C.a_X(w,v,0,q),q),q),B.bx,t,B.aj,A.c(u,q,q,q,q,q,q,A.l(q,q,D.l7.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.q(q,D.fy2,B.f,q,q,new A.p(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.e1.j(0.45),B.J,18)],x.V),E.xP,B.m),q,q,q,q,B.PS,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcQd(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hA(D.c_u,D.hr8,r.gaRR(),q))
B.d.u(u,w)}w=A.at(A.cb(A.w(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.eB,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ab(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.l7.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e9:B.yT
u=A.w(A.a([new A.C(D.bJq,w,q),A.E(A.Ko(v,new C.dmC(r),J.ab(r.d)+1,q,r.gclj(),u,B.aJ),1),r.bKB()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c6(q,D.a0d,new A.am(B.a0,q,B.b6,B.t,A.a([D.aTV,A.bn(!0,A.w(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c5x(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cM(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Ln(B.eb,"AI",h.gbIo(),!0))
if(h.a.f)f.push(new C.Ln(B.ma,"Cover",h.gbTk(),!1))
if(h.a.f)f.push(new C.Ln(B.xG,"Header",h.gbOd(),!1))
if(J.cM(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Ln(B.vK,"Print",h.gcuU(),!1))
if(h.a.f&&J.cM(h.d)&&h.r>=0){v=h.w
u=v?B.h2:B.jm
t=v?"Save":"Edit"
f.push(new C.Ln(u,t,v?h.gcBj():new C.dmm(h),!1))}if(h.a.f)f.push(new C.Ln(B.ii,"Add page",h.gaRR(),!1))
v=C.hSp(h.y.Q)
u=h.gzS(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ab(h.d)
r=J.ab(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dW1
else{k=new A.aQ(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kJ.j(0.5),1,B.r,-1)
j=A.q(g,A.V(l.a,D.l7,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bE(i,i,i,i),new A.bc(k,k,k,k),g,new A.a6(B.a5,B.a9,B.w,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.l7.j(0.85)
p.push(new A.bu(1,B.b9,A.aA(B.c0,A.w(A.a([k,B.bs,A.c(l.b,g,1,g,g,g,g,new A.H(!0,j,g,g,g,g,9.5,B.C,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.anN(v,u,t+" \xb7 "+s+" "+r,new C.dmn(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
Be(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Be=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cm(),$async$Be)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aM(t.d);r.A();){q=r.gO(r)
s.push(q.b+" "+q.c)}p=H.a4P(B.d.aJ(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dm2(t,p),s,null,!0,!0,x.N),$async$Be)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zU(),$async$Be)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ff(),$async$Be)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.GT("Swahili (Kiswahili)",!0),$async$Be)
case 18:w=16
break
case 17:w=19
return A.b(t.cMB(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Be)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Be,v)},
a0n(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.K(E.kJ.j(0.3),B.r,1),r=x.p
return new A.C(B.cB,A.aN(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.xP,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.w(A.a([A.c(f,w,w,w,w,w,w,A2.M2,w,w,w),A.c(g,w,w,w,w,w,w,B.BJ,w,w,w)],r),B.B,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.m),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dmo(d,h),w,w,w,w,w,w,w),w)},
Ff(){return this.bXX()},
bXX(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ff=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dmf(r),a7,null,!0,!0,x.ei),$async$Ff)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eP("Working on it\u2026",$.ay())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dmg(o),a7,null,!0,!0,x.H).fI(new C.dmh(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.bU(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.AN[a1]
J.bU(j,i.a)}w=8
return A.b(C.ajJ(a0,a7,new C.dmi(o),d,l,e,j),$async$Ff)
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
if(l!=null&&a6.a)A.a7(l,!0).e3()
l=o
l.siw($.ay())
J.aVN(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.M(x.q).f
j=n
l.T(A.b2(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcp(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ab(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bj0(m.b.h(0,a4).b,a7,new A.W(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BW(j.c,j.d,l),$async$Ff)
case 11:w=12
return A.b(r.lq(),$async$Ff)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.AN[a1].a)
a5=l.cRb(j,12,a7)
l=r.a
w=15
return A.b(C.TB(l.c,l.d,a5),$async$Ff)
case 15:if(r.c!=null)r.l(new C.dmj(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.CL(0,B.ed,B.nm)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.M(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cEB("Undo",new C.dmk(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ep,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ff,v)},
GT(d,e){return this.cMC(d,e)},
cMB(d){return this.GT(d,!1)},
cMC(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$GT=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eP("Starting\u2026",$.ay())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dmv(a0),k,null,!0,!0,x.H).fI(new C.dmw(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.bU(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a56(m,new C.dmx(a0)),$async$GT)
case 10:w=8
break
case 9:w=11
return A.b(C.bJv(new C.dmy(a0),m,a2),$async$GT)
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
if(o!=null&&f.a)A.a7(o,!0).e3()
o=a0
o.siw($.ay())
J.aVN(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.M(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ab(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bj0(J.t(p,g).b,j.a,new A.W(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BW(k.c,k.d,o),$async$GT)
case 12:w=13
return A.b(r.lq(),$async$GT)
case 13:o=r.c
if(o==null){w=1
break}o=o.M(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cEB("Undo",new C.dmz(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$GT,v)},
bKB(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dm3(v):u
r=A.aJ(u,u,u,u,A.V(D.bVV,s?D.l7:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cM(v.d)&&!v.w&&v.r>=0)s=A.hA(A.V(B.xs,B.HA,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.HA,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbSV(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.l7.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ab(v.d)?new C.dm4(v):u
return A.bn(!0,new A.C(D.bJf,A.A(A.a([r,s,A.aJ(u,u,u,u,A.V(B.eP,t<J.ab(v.d)?D.l7:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0P.prototype={
R(){return new C.bk6(new A.au(B.ay,$.ay()))}}
C.bk6.prototype={
ga4w(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ay()
w.W$=0
this.a3()},
gbWw(){switch(this.ga4w()){case"cover":var w=D.dhv
break
case"book":w=D.dce
break
default:w=D.dMj
break}return w},
C(d){var w,v,u,t,s,r,q=this,p=null,o=A.n(26),n=E.kJ.j(0.5),m=x.p,l=A.A(A.a([D.dW2,B.ar,D.bOY,A.aJ(p,p,p,p,B.lM,p,p,p,new C.doq(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.iB(p,p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dor(q),q.ga4w()==="page",p,p,p,p))
if(q.a.d)k.push(A.iB(p,p,p,p,D.hlv,p,new C.dos(q),q.ga4w()==="book",p,p,p,p))
k.push(A.iB(p,p,p,p,D.h7Z,p,new C.dot(q),q.ga4w()==="cover",p,p,p,p))
k=A.bX(B.bG,k,B.bq,p,6,8)
j=B.c.j(0.07)
j=A.aO(p,B.M,!1,p,!0,B.t,p,A.aP(),q.d,p,p,p,p,p,2,A.bB(p,new A.b6(4,A.n(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.jP,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dr,!0,B.a8,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbWw(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,Ae.M_,p,p,p)
w.push(A.lN(p,B.c.j(0.08),p,r,B.hH,new C.dou(q,s),p,p,p,p))}return A.eE(p,E.CS,A.cb(A.w(A.a([l,B.S,D.hoW,B.aj,k,B.af,j,B.N,A.bX(B.bG,w,B.bq,p,6,6),B.aA,A.dg(D.c_r,p,D.hpJ,new C.dov(q,d),A.bp(B.b2,p,p,p,p,B.pu,p,p,new A.ba(A.n(16),B.a1),p,p,p)),B.at,D.hjD],m),B.B,p,B.e,B.P,0,B.p),B.t,p,B.y,p,p,B.f7,p,p,B.ah),p,p,p,B.PQ,p,B.db,p,new A.ba(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a0N.prototype={
R(){return new C.aDM(A.a([],x.gA))},
gec(){return this.c}}
C.ahs.prototype={}
C.aDM.prototype={
Z(){this.a4()
this.lq()},
lq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.T1(p.c,p.d),$async$lq)
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
return A.b(C.bHW(r.c,q),$async$lq)
case 6:j=e
i=J
w=7
return A.b(C.Mo(t.a.c,q),$async$lq)
case 7:m.push(new l.ahs(k,j,i.ab(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.dmT(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lq,v)},
bec(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Si(d,e){return this.cmZ(0,e)},
cmZ(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Si=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).ca(A.e4(new C.dmS(u,e),!0,null,x.y)),$async$Si)
case 2:t=g
w=3
return A.b(u.lq(),$async$Si)
case 3:if(t===!0&&u.c!=null)u.c.M(x.q).f.T(D.aXZ)
return A.h(null,v)}})
return A.i($async$Si,v)},
GV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$GV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.M(x.q).f.T(D.aXU)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aj2(s.c,s.d),$async$GV)
case 5:q=e
w=6
return A.b(t.lq(),$async$GV)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Si(0,B.d.f9(t.d,new C.dmX(q))),$async$GV)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.SZ(p,s.f,r,n,o),$async$GV)
case 10:m=e
w=11
return A.b(t.lq(),$async$GV)
case 11:if(m&&t.c!=null)t.c.M(x.q).f.T(D.aXZ)
case 1:return A.h(u,v)}})
return A.i($async$GV,v)},
RH(d,e){return this.cyY(0,e)},
cyY(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$RH=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dmW(t,e),s,null,!0,!0,x.y),$async$RH)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a5h(s.c,s.d,e.a),$async$RH)
case 4:w=5
return A.b(t.lq(),$async$RH)
case 5:case 1:return A.h(u,v)}})
return A.i($async$RH,v)},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bKE(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.K(E.kJ.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fC(0.7142857142857143,A.q(n,A.w(A.a([D.dW3,B.af,D.eL8,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.l7.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.ba,B.i,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcQ9(),n,n,n,n,n,n,!1,B.a4))}w=A.n(22)
v=A.K(E.kJ.j(0.85),B.r,1.6)
s=A.aA(n,A.q(n,D.c7O,B.f,n,n,new A.p(B.v.j(0.3),n,A.K(E.kJ.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dmY(d),n,n,n,n,n,n,!1,B.a4)
r=A.n(14)
q=B.v.j(0.3)
p=A.K(E.kJ.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.bd,D.bPm,A.q(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fNX,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.m),n,n,n,n,B.hq,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.cdT,B.m),n,n,n,Aa.PD,D.bH7,n,n,n)
if(o.e)k=D.ahY
else k=k.length===0?D.bh4:A.cg(new C.dmZ(k))
return A.c6(n,D.a0d,new A.am(B.a0,n,B.b6,B.t,A.a([D.aTV,A.bn(!0,A.w(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bKE(d){var w,v,u=this,t=null,s=u.bec(d),r=d.c,q=x.p,p=A.a([A.bT(0,new A.d8(B.dE,B.z,B.f,new A.a4(300,420,new C.a_X(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.q(t,D.c72,B.f,t,t,new A.p(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dmQ(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fNz,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.w(A.a([new A.fC(0.7142857142857143,new A.am(B.a0,t,B.ac,B.t,p,t),t),B.N,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.l7.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dmR(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.Ln.prototype={}
C.a_X.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.du(D.AN,new C.cU5(m),new C.cU6()),j=m.c,i=D.EU.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mO:B.ba
v=new C.cU7(h)
i=A.a([new A.ac(0,B.G,B.v.j(0.6),D.eHR,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b5(l,l,l,new C.bhg(j.x,h,l),B.az),0,0,0),A.ao(0,A.q(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aQ(3,3)
t.push(new A.cS(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.bc(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.apT,8,0.85,2.2),v.$4(D.bM8,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.apT,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.C(D.bM4,A.b5(l,l,l,new C.bh7(h,l),B.az),l),0,0,0))
r=A.V(D.aF2[B.n.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aCe,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cN,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aN,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.C,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bT(0,new A.C(D.bMB,A.w(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b5(l,l,l,new C.aL0(l),D.fCZ),l,l,l,46,0,l))
return A.q(l,A.bv(D.agv,new A.am(B.a0,l,B.ac,B.t,t,l),B.ap),B.f,l,l,new A.p(l,l,l,D.agv,i,new A.a6(B.aw,B.aD,B.w,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bhg.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e7()
g.cV(11)
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
j=new A.aI(m.r,B.ak,null,null,l)
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
C.bh7.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.U(),j=A.M(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ae
j.c=2.4
j.d=B.bH
for(w=e.a,v=e.b,v=[D.fpB,new A.b3([w,0,-1,1]),new A.b3([0,v,1,-1]),new A.b3([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aI(k,B.ak,null,null,s)
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
C.a0i.prototype={
R(){return new C.bhe()}}
C.bhe.prototype={
goV(){var w=this.d
return w===$?this.d=this.a.c:w},
gzS(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bd(w.b,B.bb,B.aP),$.ay())}return v},
gaFS(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bd(w.c,B.bb,B.aP),$.ay())}return v},
gav8(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bd(w.y,B.bb,B.aP),$.ay())}return v},
t(){var w=this,v=w.gzS(0),u=v.V$=$.ay()
v.W$=0
v=w.gaFS()
v.V$=u
v.W$=0
v=w.gav8()
v.V$=u
v.W$=0
w.a3()},
avN(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.iB(s,s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.dd8(this,f,u),e===u,s,s,s,s))}return A.bX(B.bG,r,B.bq,s,6,8)},
aBB(d){var w=null,v=B.c.j(0.07)
return A.bB(w,new A.b6(4,A.n(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mi,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
C(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goV(),a0=f.gzS(0),a1=a0.a.a,a2=f.gaFS(),a3=a2.a.a,a4=f.gav8(),a5=d.biZ(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a4(190,260,new A.d8(B.dE,B.z,B.f,new A.a4(270,370,new C.a_X(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aO(e,B.M,!1,e,!0,B.t,e,A.aP(),a0,e,e,e,e,e,2,f.aBB("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.ddx(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dr,!0,B.a8,e,B.ao,e,e,e,e)
a2=A.aO(e,B.M,!1,e,!0,B.t,e,A.aP(),a2,e,e,e,e,e,2,f.aBB("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.ddy(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dr,!0,B.a8,e,B.ao,e,e,e,e)
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
v.push(A.aA(e,A.w(A.a([p,B.cR,A.c(t.b,e,e,e,e,e,e,new A.H(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.ddz(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bX(B.bG,v,B.bq,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.aQ(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eM:B.L,2,B.r,-1)
q.push(A.aA(e,A.q(e,A.V(D.aF2[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bE(o,o,o,o),new A.bc(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.ddA(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bX(B.bG,q,B.bq,e,8,8)
a4=A.aO(e,B.M,!1,e,!0,B.t,e,A.aP(),a4,e,e,e,e,e,2,f.aBB("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.ddB(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dr,!0,B.a8,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,N.wu,e,e,e)
m=A.a([],w)
for(l=D.EU.gdW(D.EU),l=l.gae(l);l.A();){k=l.gO(l)
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
m.push(A.aA(e,A.w(A.a([j,B.bs,A.c(i,e,e,e,e,e,e,new A.H(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.ddC(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bX(B.bG,m,B.bq,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.wu,e,e,e)
k=f.goV()
return new A.C(new A.Q(0,0,0,a3.f.d),A.bn(!0,new A.cO(new A.aY(0,1/0,0,a1.a.b*0.92),A.ck(A.a([D.hj3,B.af,d,B.aN,a0,B.S,a2,B.aA,D.hpu,B.N,v,B.aA,D.hjc,B.N,q,B.aA,a4,B.aA,p,B.N,m,B.aA,l,A.kT(e,9,e,""+B.h.S(f.goV().f),36,18,e,new C.ddD(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.wu,e,e,e),B.aj,f.avN(D.a8E,f.goV().r,new C.ddE(f),D.dPK),B.af,A.c("BORDER",e,e,e,e,e,e,N.wu,e,e,e),B.aj,f.avN(D.a7Y,f.goV().w,new C.ddF(f),D.dPQ),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,N.wu,e,e,e),B.aj,f.avN(D.a7U,f.goV().x,new C.ddH(f),D.dRv),B.aj,A.ji(e,B.b2,e,B.ag,e,new C.ddI(f),e,e,e,D.hdb,f.goV().z),B.bx,A.bH(D.hhJ,e,new C.ddJ(f,a6),A.bp(B.b2,e,e,e,e,B.pu,e,e,new A.ba(A.n(16),B.a1),e,e,e))],w),e,e,S.apk,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aL0.prototype={
a5(d,e){var w,v,u,t=new A.aI($.U().r,B.ak,null,null,A.a([],x.v))
t.E(new A.b_(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bz())
u=A.M()
u.san(D.ceA.az(0,new A.a5(0,0,0+w,0+v)))
d.af(t,u)},
aC(d){return!1}}
C.bmG.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.U()
w=A.M()
w.san(D.cdA.az(0,new A.a5(0,0,a2,a3)))
a4.aE(new A.a5(0,0,a2,a3),w)
v=B.h.cB(a1/112)
u=new A.e7()
u.cV(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dhu[u.aw(9)]
j=u.aw(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a5(n,j,n+m,j+l)
h=A.bx(i,B.hG)
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
e.r=E.kJ.j(0.55).gp(0)
a4.aE(new A.a5(g,j,h,j+2),e)
e=new A.ar(B.V,B.R,B.X,B.Y,B.W)
e.r=E.kJ.j(0.4).gp(0)
a4.aE(new A.a5(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.san(D.ccS.az(0,new A.a5(0,r,a2,q)))
a4.aE(new A.a5(0,r,a2,q),p)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.v.j(0.5).gp(0)
p.y=B.le
a4.aE(new A.a5(0,q,a2,q+14),p)}t=A.M()
t.r=D.bkV.j(0.72).gp(0)
a4.aE(new A.a5(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.M()
a3.san(new A.bV(B.z,0.5,B.w,d,0,A.a([D.btD.j(0.22),B.L],w),d,d).az(0,A.c0(new A.m(t,a1),a0)))
a4.P(new A.m(t,a1),a0,a3)},
aC(d){return!1}}
C.bfm.prototype={
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aE(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cS(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.p(A.ap(D.l7,D.bz_,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.Ng,o,o,B.m),B.bn,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.v.j(0.35),B.aPr,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aQ(2,2)
t.push(A.q(o,o,B.f,o,o,new A.p(E.kJ.j(0.6),o,o,new A.bc(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.q(o,A.w(t,B.l,o,B.rK,B.i,0,B.p),B.f,o,o,new A.p(o,o,o,D.b94,u,D.cey,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.v.j(0.4),B.dv,18)],v)
t=A.ao(o,A.b5(o,o,o,new C.aL0(o),D.fCU),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aZb(p.y,r,L.ji,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),p.r,o,o,o,o,o,2,A.bB(o,B.f_,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.ji.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.h1Q,!0,B.a8,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.ji.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),p.w,o,o,o,o,o,2,A.bB(o,B.f_,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.ji.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.am,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fT4,!0,B.a8,B.BF,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.h1I,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.ji.j(0.5),o,o,o,o,o,o,o,o,11,B.cN,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.A(A.a([A.E(A.q(o,o,B.f,D.Hk.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fE,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.Hk.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.Hk.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aA],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.ji.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.GM(A.cX(A.a([A.cX(o,o,o,o,o,o,o,o,o,D.fWo,B.a.av(k,0,1)),A.cX(o,o,o,o,o,o,o,o,o,o,B.a.aV(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.ji.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cb(A.w(n,B.B,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.C(B.hp,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.ji.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.bv(B.Ng,new A.am(B.a0,o,B.ac,B.t,A.a([t,new A.C(D.bLC,A.w(s,B.al,o,B.e,B.i,0,B.p),o),A.ao(0,new A.bP(new A.p(o,o,o,o,o,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bn,o,o),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.p(o,o,o,B.Ng,v,D.cf5,B.m),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.am(B.a0,o,B.ac,B.t,l,o)}}
C.anO.prototype={
R(){return new C.anP(new A.eP(0,$.ay()),new C.bX8(),new C.ao6(),D.i43,null,null)},
gd7(){return this.d}}
C.a36.prototype={
a9(){return"_Step."+this.b}}
C.anP.prototype={
gDy(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHS(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghm(d){var w,v=this,u=v.e
if(u===$){w=C.NL(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gVi(){var w=this.ghm(0)
return w.gAb()==null?"Babu":B.a.i(w.gAb().b)},
Z(){var w,v=this
v.a4()
w=v.ghm(0).gAb()
w=w==null?null:w.c
v.r.b=w===D.p3
w=v.qr(new C.bVu(v))
w.fY(0)
v.x!==$&&A.aT()
v.x=w
v.a4s("Come closer, my children. I am "+v.gVi()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bzU()},
a4s(d){var w=this,v=w.y
if(v!=null)v.a2(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d5(E.a1X,new C.bVo(w))},
bwf(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a2(0)
v.l(new C.bVx(v))},
ag1(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bw7(){return this.bdK()},
bdK(){var w=this,v=w.gDy()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bVp(w))
w.a4s(u)
v=w.z
if(v!=null)v.a2(0)
w.z=A.cD(B.o4,new C.bVq(w))},
cRi(){var w=this
w.l(new C.bVt(w))
w.a4s(w.gDy()[w.as].a)},
Ms(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.afB)return
w=p.gDy()
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
q.cV(v*7+d)
p.l(new C.bVs(p,d,u,q))
p.a4s(u?D.dzh[q.aw(4)]+" "+w[p.as].d:D.dvs[q.aw(3)]+" "+w[p.as].d)},
kU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gDy()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bKb(t.at,t.ay,p)
t.l(new C.bVv(t,s))
t.a4s(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Cf(t.a.d,s),$async$kU)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Cg(r.d,r.c.a,"fire",t.at*10),$async$kU)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bVw())
w=1
break
case 4:++t.as
t.bdK()
case 1:return A.h(u,v)}})
return A.i($async$kU,v)},
C(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.a_e,new A.am(B.a0,v,B.ac,B.t,A.a([A.bT(0,new A.ea(A.b5(v,v,v,new C.aZg(u,w.r,w.w,u),B.az),v),0,0,0),A.bn(!0,A.w(A.a([w.cgH(0),B.aY,w.bVH()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cgH(d){var w,v,u,t=this,s=null,r=A.aJ(s,s,s,s,B.RM,s,s,s,new C.bVr(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gDy().length;++w){v=t.as
if(w<v||t.Q===D.b5l)v=B.d0
else v=w===v?B.c:B.aT
u=new A.aQ(4,4)
p.push(A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,D.bGS,s,s,s,22))}p=A.E(A.w(A.a([D.h9T,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.B,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.K(B.fO,B.r,1)
return new A.C(D.bMN,A.A(A.a([r,p,A.q(s,A.c("\ud83d\udd25 "+B.h.S(t.cy*100)+"%",s,s,s,s,s,s,B.iY,s,s,s),B.f,s,s,new A.p(B.bc,s,u,v,s,s,B.m),s,s,s,s,B.hq,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bVH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghm(0).gAb()
if(h==null)w=1
else w=h.c===D.p3?0:1
v=j.dx
u=j.db
t=D.r5.j(0.96)
s=A.n(22)
r=A.K(B.d0,B.r,3)
q=A.b5(i,i,i,new C.bsk(w,i),B.az)
p=A.c(j.Q===D.afB?j.gVi()+" asks":"Elder "+j.gVi(),i,i,i,i,i,i,D.aZh,i,i,i)
o=j.db
o=B.a.av(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c0,A.A(A.a([new A.a4(62,62,q,i),B.ar,A.E(A.w(A.a([p,B.bs,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aZv,i,i,i)],n),B.B,i,B.e,B.i,0,B.p),1)],n),B.B,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbwe(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.ac3("Sit down by the fire",j.gbw6()),i,i,i)
break
case 1:v=A.at(j.ac3("Ask me, Elder",j.gcRh()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gDy()[j.as].b,m<u.length;++m){q=new A.aQ(14,14)
l=new A.ax(D.lZ,2.5,B.r,-1)
v.push(A.aA(i,A.q(i,A.c(u[m],i,i,i,i,i,i,D.aZr,B.K,i,i),B.f,i,D.ahb,new A.p(D.amP,i,new A.bE(l,l,l,l),new A.bc(q,q,q,q),i,i,B.m),i,i,i,i,B.xh,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bVl(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bX(B.bG,v,B.bq,i,8,8)
break
case 3:v=j.fr
u=v?B.kp:An.at_
u=A.V(u,v?B.ew:D.lZ,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.ew:D.lZ,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gDy().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.ac3(v,j.gqK(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gDy().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aZK,i,i,i)],n)
u=j.cx
if(u>0){u=C.aTo(u)
q=C.aTo(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.ae2,i,i,i))}v.push(B.N)
v.push(j.ac3("Back to the games",new C.bVm(j)))
v=A.w(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.q(i,A.w(A.a([o,B.S,v],n),B.B,i,B.e,B.P,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aGE,i,B.m),i,i,i,B.zA,B.bg,i,i,i)},
ac3(d,e){var w=null,v=A.n(16),u=A.K(B.d0,B.r,2)
return A.aA(w,A.q(w,A.c(d,w,w,w,w,w,w,A2.M2,w,w,w),B.f,w,w,new A.p(D.lZ,w,u,v,w,w,B.m),w,w,w,w,D.bKw,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bsk.prototype={
a5(d,e){O.hxC(d,e.er(B.J),e.gdl()*0.45,this.b,0,0.4)},
aC(d){return d.b!==this.b}}
C.aDK.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bX8.prototype={}
C.tB.prototype={}
C.bsl.prototype={}
C.ao6.prototype={
NO(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ivH(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aZg.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.Dg(l.d.NO(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bW(0,u)
l.cGv(d,j)
l.bUf(d,j)
l.cP1(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.o_(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.U()
q=A.M()
p=x.O
o=x.n
q.san(A.wH(B.J,r,A.a([D.bxF.j(0.55*s),F.OT.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.w,k,k,0))
d.P(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bX0(l,d,j,i)),new A.y(540,new C.bX1(l,d,j,i)),new A.y(546,new C.bX2(l,d,j,i)),new A.y(574,new C.bX3(l,d,j,i)),new A.y(612,new C.bX4(l,d,j,i)),new A.y(650,new C.bX5(l,d,j,i)),new A.y(656,new C.bX6(l,d,j,i))],x.E)
B.d.b_(n,new C.bX7())
for(m=0;m<7;++m)n[m].b.$0()
l.bKX(d,j,i)
l.bXV(d,j)
t.restore()
$.U()
t=A.M()
t.san(A.wH(new A.m(w/2,v*0.6),e.gaqu()*0.75,A.a([B.L,D.bkO],p),A.a([0.55,1],o),B.w,k,k,0))
d.aE(new A.a5(0,0,0+w,0+v),t)},
aC(d){return d.c!==this.c||d.d!==this.d},
cGv(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e7()
h.cV(3)
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
d.ah(p,p.aI(0,D.eHn),C.iW(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.h.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.U()
k=A.a([],t)
l=new A.aI(l.r,B.ak,null,null,k)
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
s.b=B.ae
s.c=1.6
s.r=D.bnA.gp(0)
s.d=B.bH
s.e=B.dR
d.af(l,s)}},
bUf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aDy[t]
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
o.r=D.ak6.j(0.16*(1-h)).gp(0)
d.P(new A.m(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cP1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bHd(d,D.eHj,0.9,e,D.hYK,!1,!1,D.b5i,1,!1)
w=$.U().r
v=x.v
u=new A.aI(w,B.ak,g,g,A.a([],v))
u.E(new A.b_(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bz())
t=A.M()
t.r=D.am4.gp(0)
d.af(u,t)
C.bHd(d,D.eHl,0.95,e,D.hYy,!1,!1,D.b5j,1,!0)
t=new A.aI(w,B.ak,g,g,A.a([],v))
t.E(new A.b_(417,510))
t.E(new A.cn(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.cn(431,553,421,548))
t.E(new A.bz())
u=A.M()
u.r=F.H_.gp(0)
d.af(t,u)
u=A.c1(D.eHk,8,28)
t=A.M()
t.r=D.bA6.gp(0)
d.c3(u,t)
C.bHd(d,new A.m(-30+B.h.F(e/26,1)*510,492),0.82,e,D.hYM,!0,!1,D.Z1,1,!1)
t=B.h.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c3(A.c1(new A.m(s+q*16,r-6),16,11),C.iW(D.alW,1.8))
u=q<0
C.bHd(d,new A.m(s-q*6,r),0.62,e,D.hYP,!1,u,D.Z1,2.2,!1)
C.bHd(d,new A.m(s-q*32,r+4),0.58,e+1,D.hYG,!1,u,D.Z1,2.2,!1)
this.c_F(d,D.eGZ,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.n.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.c1(new A.m(o,n),8,11)
k=p===1
j=k?D.alS:D.amv
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=j.gp(0)
d.c3(l,i)
l=k?D.alS:D.amv
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=l.gp(0)
d.P(new A.m(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.ae
k.c=1
k.r=B.as.gp(0)
k.d=B.bH
k.e=B.dR
d.ah(new A.m(o+7.5,n+(-2+m)),new A.m(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.ae
k.c=1
k.r=B.as.gp(0)
k.d=B.bH
k.e=B.dR
d.ah(new A.m(o,n+4),new A.m(o,n+8),k)}h=e<f.f
u=A.c1(D.aaX,15+Math.sin(e*2)*0.8,40)
t=A.M()
t.r=D.akv.gp(0)
d.c3(u,t)
u=A.c1(D.aaX.a6(0,new A.m(-14,h?-9:-2)),12,15)
t=A.M()
t.r=D.bpP.gp(0)
d.c3(u,t)
t=new A.aI(w,B.ak,g,g,A.a([],v))
t.E(new A.b_(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bz())
u=A.M()
u.r=D.bq1.gp(0)
d.af(t,u)
u=D.aaX.a6(0,new A.m(-17,h?-9:-2))
t=A.M()
t.r=B.iv.gp(0)
d.P(u,1.1,t)
v=new A.aI(w,B.ak,g,g,A.a([],v))
v.E(new A.b_(168,590))
w=Math.sin(e*8)
v.E(new A.cn(180,588+w*(h?6:0),178,595))
d.af(v,C.iW(D.akv,3.5))},
c_F(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a6(0,new A.m(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.b=B.ae
m.c=2
m.r=D.a_s.gp(0)
m.d=B.bH
m.e=B.dR
d.ah(new A.m(u+o,s),new A.m(u+(o+n*1.5),q),m)}w=A.c1(k,17,32)
v=$.U()
r=A.M()
r.r=D.GY.gp(0)
d.c3(w,r)
r=A.c1(k.a6(0,D.eGp),7,26)
w=A.ap(D.GY,B.v,0.12)
w.toString
q=A.M()
q.r=w.gp(0)
d.c3(r,q)
v=new A.aI(v.r,B.ak,null,null,A.a([],x.v))
v.E(new A.b_(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bz())
s=A.M()
s.r=D.GY.gp(0)
d.af(v,s)
s=A.c1(k.a6(0,new A.m(24,-7+l)),9,12)
v=A.M()
v.r=D.GY.gp(0)
d.c3(s,v)
v=-11+l
d.ah(k.a6(0,new A.m(22,v)),k.a6(0,new A.m(21,-17+l)),C.iW(D.a_s,1.6))
d.ah(k.a6(0,new A.m(26,v)),k.a6(0,new A.m(28,-16+l)),C.iW(D.a_s,1.6))
v=k.a6(0,new A.m(26,-8+l))
s=A.M()
s.r=B.v.gp(0)
d.P(v,0.9,s)
d.ah(k.a6(0,new A.m(26,-3+l)),k.a6(0,new A.m(26,1+l)),C.iW(D.bsS,1.4))
d.ah(k.a6(0,D.eJl),k.a6(0,new A.m(-19,-7+Math.sin(f*7)*2)),C.iW(D.GY,2.4))},
bXT(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.c1(new A.m(225+u*36,574+(t*13+6)),8,11)
$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.byI.gp(0)
a6.c3(u,t)}}u=A.c1(D.aaZ.a6(0,B.cy),17,52)
$.U()
t=A.M()
t.r=D.bkm.gp(0)
a6.c3(u,t)
t=A.c1(D.aaZ.a6(0,B.cy),12,44)
u=D.bo0.j(0.6+0.3*Math.sin(a7*6))
s=A.M()
s.r=u.gp(0)
a6.c3(t,s)
for(r=0;r<3;++r){v=D.duR[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.ae
o.c=7
o.r=D.Hb.gp(0)
o.d=B.bH
o.e=B.dR
a6.ah(new A.m(u+t*24,579+s*4),new A.m(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Cw.j(0.6)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.b=B.ae
n.c=2
n.r=t.gp(0)
n.d=B.bH
n.e=B.dR
a6.ah(new A.m(u+o*24,579+(p*4-2)),new A.m(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.flv,D.fm5,D.fnf,D.fnA,D.fnd]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bvX,D.bsc,D.by7][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.U()
f=A.a([],q)
a2=new A.aI(g.r,B.ak,null,null,f)
f.push(new A.b_(a0-a1,578))
a2.ac()
g=a0+d*0.6
a3=new A.i7(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.i7(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
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
p=G.amt.j((1-a5)*0.9)
$.U()
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
a6.P(new A.m(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.h.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ak6.j(0.1*(1-a5))
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=q.gp(0)
a6.P(new A.m(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bXV(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.h.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.n.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bAh.j(0.18*p)
$.U()
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=o.gp(0)
d.P(new A.m(r,q),5,n)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=D.btI.j(0.9*p).gp(0)
d.P(new A.m(r,q),1.4,n)}},
c9U(d,e){switch(d){case 0:return e.b?D.hYA:D.b4y
case 1:return e.b?D.hYO:D.b4w
case 2:return D.b4v
case 3:return D.b4u
case 4:return D.b4x
default:return D.b4z}},
aG6(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
SB(d,e,f,g){var w,v=this,u=D.a85[e],t=v.c9U(e,g),s=new C.bsl(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a85[e],l=e===0
m=B.h.D(((l?D.aPj:D.aPp).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.ab4
s.as=D.Fm
if(l){s.a=o?v.aG6(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.m(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.m(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Fm
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eGx
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eHV
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
s.Q=D.eKh
s.as=D.aPC}if(e===2&&g.x!=null&&f<g.y){s.a=v.aG6(f,5)
s.b=0.4
s.as=new A.m(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aG6(f,e*3)
s.b=0.5
s.c=0.4}}C.hQZ(d,u.a,u.b*1.2,t,s,f,e,null)},
bKX(d,e,f){var w=new C.bX_(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd5(d){return this.c}}
C.ahB.prototype={
a9(){return"_Stand."+this.b}}
C.afv.prototype={}
C.lT.prototype={}
C.bVK.prototype={
bFs(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aT()
this.c=s},
Ha(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bVL())
return r},
atM(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aPZ(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
aoS(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gAb(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b_(w,new C.bVM(this))
return B.d.gH(w)}}
C.awj.prototype={}
C.A4.prototype={}
C.amF.prototype={
gD5(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bQw(),A.T(w).k("X<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Nt.prototype={
garP(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gD5(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d7Y(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.garP(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lT(B.a.i(s.a),p,B.d.c8(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bdw.prototype={}
C.abx.prototype={}
C.bkY.prototype={}
C.ahz.prototype={}
C.alX.prototype={
R(){return new C.alY(B.bI,A.a([],x.cC),A.a([],x.e4),null,null)},
gd7(){return this.d}}
C.alY.prototype={
gO5(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHS(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbe5(){var w,v=this,u=v.e
if(u===$){w=v.qr(v.gcmm())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a4()
this.gbe5().fY(0)},
t(){this.gbe5().t()
this.bzP()},
fY(d){this.l(new C.bOE(this))},
cmn(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fS(0,v)
if(w.c!=null)w.l(new C.bOz())},
bco(){var w,v,u,t=this,s=t.r
B.d.a7(s)
w=t.gO5()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bkY(u,(u+0.5)/v,w[t.x].b[u]))},
fS(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bOF())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.ccN()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gO5()
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
m.fx=1.8}else{m.avl(m.cy,0.8,G.nR)
m.b1C("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.avl(q,0.88,D.lZ)
p=m.gO5()[m.x]
n=p.c
if(u===n){m.b1C("The right gourd fell! It was "+p.b[n]+".")
return}}}},
avl(d,e,f){var w,v,u,t=new A.e7()
t.cV(B.h.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ahz(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b1C(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.RI()}},
ccN(){var w=this
if(w.x+1>=w.gO5().length){w.RI()
return}++w.x
w.bco()},
RI(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$RI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gO5().length
r=C.bKb(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bOx())
w=2
return A.b(C.Cf(u.a.d,r),$async$RI)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Cg(t.d,t.c.a,"catch",u.z),$async$RI)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bOy())
return A.h(null,v)}})
return A.i($async$RI,v)},
C(d){var w,v=this,u=null
if(v.CW)w=v.cgI()
else w=v.ch?v.cgJ():A.at(new A.C(B.eB,A.w(A.a([D.b_J,B.N,D.hbB,B.S,D.hhO,B.ee,C.uS("Play",v.gf6(v),B.d0,B.fS,D.fN)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.u1("Calabash Catch",w,B.fh,u)},
cgJ(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hQ:B.IG
p.push(A.V(u,v?B.aC:B.bX,r,r,r,22))}p.push(B.aY)
v=s.x
u=s.gO5()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aZg,r,r,r))
p.push(B.bd)
v=A.n(14)
p.push(A.q(r,A.c(""+s.z,r,r,r,r,r,r,B.iY,r,r,r),B.f,r,r,new A.p(B.by,r,r,v,r,r,B.m),r,r,r,r,A0.Dj,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.K(B.d0,B.r,3)
return A.w(A.a([new A.C(D.bIf,p,r),A.q(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fWg,B.K,r,r),B.f,r,r,new A.p(D.r5,r,t,v,r,r,B.m),r,r,r,B.eA,B.bg,r,r,1/0),B.aj,A.E(A.cg(new C.bOD(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cgI(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qH,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gO5().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Xo,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.ck(A.a([D.bhN,u,t,B.aN,new C.J1(s,r,w.cx,v),B.aN,A.at(C.uS("Back to the games",new C.bOw(w),B.d0,B.k0,D.fN),v,v,v)],x.p),v,v,B.ad,v,v,B.ah,!1)}}
C.bg3.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.U(),a3=A.M()
a3.san(A.jT(B.J,new A.m(0,a0),D.daA,G.aDP,B.w,e))
a4.aE(new A.a5(0,0,a1,0+a0),a3)
a3=A.M()
a3.r=G.OX.gp(0)
a4.P(new A.m(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aI(a2.r,B.ak,e,e,w)
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
w.r=D.boZ.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aI(a2.r,B.ak,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.b_(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.cn(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.cn(r+14,t,r+26,w))
a2.E(new A.bz())
w=A.M()
w.r=D.aj6.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cuR[q]
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.aj6.gp(0)
s.c=7
s.d=B.bH
a4.ah(new A.m(r,a2),new A.m(r+p*46,w),s)
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.aio.gp(0)
a4.P(new A.m(r+p*50,t),18,s)}a2=a0*0.88
w=A.M()
w.r=D.bpZ.gp(0)
a4.aE(new A.a5(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.akM.gp(0)
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
m.r=D.ajQ.gp(0)
a4.P(D.eFN,14,m)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.bv_.gp(0)
m.c=4
m.d=B.bH
a4.ah(D.eFO,D.eGV,m)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.san(new A.anz(D.eJ5,46,D.dkr,B.vU,B.w,e,e,0))
a4.P(B.J,34,m)
m=A.c1(D.eJb,8,12)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=B.c.j(0.35).gp(0)
a4.c3(m,l)
k=new A.iU(new A.eG(n.c,e,e,B.cW,e,e,e,e,e,e,D.fU1),B.K,B.cb,new A.k3(1),e,e,3,e,B.cc,e,B.cK)
k.nO(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bx(A.c1(B.cO,m.gb4(m)+8,l),B.h5)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.r5.gp(0)
a4.aq(j,l)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.lZ.gp(0)
l.b=B.ae
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a5(a4,new A.m(-m/2,4-l.gb4(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.izO(a4,new A.m(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.e1,(w+1)/2)
h=A.c1(new A.m(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aI($.U().r,B.ak,e,e,A.a([],a3))
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
m.r=D.a0i.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.Cw.gp(0)
m.c=1.4
a4.ah(new A.m(t,a2),new A.m(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.M()
s.r=G.nR.gp(0)
a4.aE(new A.a5(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.M()
s.r=D.bp4.gp(0)
a4.c3(new A.a5(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=g.e.j(B.h.D(s,0,1)).gp(0)
a4.P(new A.m(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.h2(e,B.cK,e,e,e,A.cX(e,e,e,e,e,e,e,e,e,A.l(e,e,B.d0.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Ev,e,e),"+"+a2),B.a8,B.cb,e,B.e6,B.cc)
k.eL()
k.a5(a4,new A.m(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aC(d){return!0}}
C.RD.prototype={
C(d){var w=this,v=null,u=w.e,t=A.b5(v,v,v,new C.aDI(w.c,w.f,v),B.az),s=A.n(10),r=A.K(B.bE,B.r,1.4)
return new A.a4(u+22,v,A.w(A.a([new A.a4(u,u,t,v),B.cR,A.q(v,A.c(w.d,v,1,B.a2,v,v,v,D.fMn,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.m),v,v,v,v,B.np,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
ga0(d){return this.e}}
C.aDI.prototype={
a5(d,e){var w=e.er(B.J),v=e.gdl(),u=this.c?0.8:0
return O.hxC(d,w,v*0.44,this.b,0,u)},
aC(d){return d.b!==this.b||d.c!==this.c}}
C.aC4.prototype={}
C.awU.prototype={
R(){return new C.awV(A.S(x.S,x.cq),null,null)},
gd7(){return this.d}}
C.awV.prototype={
gkZ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hWS(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaId(){var w=this.z
return w===$?this.z=this.YR(0):w},
gjb(){var w,v=this.Q
if(v===$){w=this.gkZ()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c4(w,-1,!1,x.S)}return v},
YR(d){var w,v,u,t,s=this.gkZ()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aC4(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aC4(v[t],u[t],-1))
v=new A.e7()
v.cV(this.a.e*31+d)
B.d.e_(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.ds(w,w.r,w.e);w.A();){v=w.d
v.r.t()
v.r=null
u=v.eW$
u.b=!1
B.d.a7(u.a)
u=u.gp5()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e2$.a.a7(0)
v.r_()}this.bAh()},
cXt(d,e){var w,v,u,t,s,r=this
if(d>=r.gjb().length||r.gjb()[d]!==-1||B.d.q(r.gjb(),e))return
w=r.gaId()[e]
v=r.gkZ()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.cuO(r,e,w,v))
A.cD(B.m5,new C.cuP(r))
return}++r.r
u=A.br(null,B.hB,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.cuQ(r,d,e,w,v))
u.ct(0)},
kU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkZ()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cH(n,0,new C.cuR())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.cuS(t,r))
w=5
return A.b(C.Cf(t.a.d,r),$async$kU)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Cg(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kU)
case 6:t.ch=f
if(t.c!=null)t.l(new C.cuT())
w=1
break
case 4:for(o=t.as,n=new A.ds(o,o.r,o.e);n.A();){q=n.d
q.r.t()
q.r=null
p=q.eW$
p.b=!1
B.d.a7(p.a)
p=p.gp5()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e2$.a.a7(0)
q.r_()}o.a7(0)
t.l(new C.cuU(t))
case 1:return A.h(u,v)}})
return A.i($async$kU,v)},
C(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qH,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Xo,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.u1(q,A.ck(A.a([D.ahX,w,v,B.aN,new C.J1(u,t,r.ch,p),B.aN,A.at(C.uS("Back to the games",new C.cuK(d),B.d0,B.k0,D.fN),p,p,p)],x.p),p,p,B.ad,p,p,B.ah,!1),B.fh,p)}w=r.gkZ()
v=r.e
s=w[v]
return new C.u1(q,new A.C(B.tN,A.w(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aZb,B.K,p,p),A.E(A.cg(new C.cuL(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.fh,p)}}
C.bfv.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cV9(),A.T(b2).k("X<1>")).gI(0),b4=a9.b,b5=b4.a6(0,B.KM)
$.U()
w=A.M()
w.r=D.m_.j(0.18+0.1*b3).gp(0)
b6.P(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a6(0,D.eFA)
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
j=new A.aI(l,B.ak,b0,b0,k)
k.push(new A.b_(u,b4))
j.ac()
o=new A.cn((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aI(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),i=new A.vg(o,!1,n);i.A();){h=i.c
if(h===0||i.f)A.bi(A.k_(b1));--h
g=new A.Cd(i,h)
f=0
for(;;){i.jY()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jY()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.U()
a1=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a1.r=B.aT.gp(0)
a1.b=B.ae
a1.c=3
b6.af(new A.aI(l,d,b0,new A.b3([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aI(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),k=new A.vg(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.A();){a0=k.c
if(a0===0||k.f)A.bi(A.k_(b1));--a0
k.jY()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.U()
a4=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a4.r=D.Hq.gp(0)
a4.b=B.ae
a4.c=h
a4.d=B.bH
b6.af(new A.aI(l,a2,b0,new A.b3([new A.Cd(k,a0),0,a1*m,!0]),a3),a4)
k.jY()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jY()
a5=n[a0].Xf(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.c1(new A.m(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.bf.gp(0)
b6.c3(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iU(D.fLR,B.a8,B.cb,new A.k3(1),b0,b0,b0,b0,B.cc,b0,B.cK)
a8.eL()
a8.a5(b6,new A.m(w*(0.15+p*0.14),b2-B.n.F(p,3)*14))}},
aC(d){return!0}}
C.aAQ.prototype={
R(){return new C.aAR(A.aR(x.S))},
gd7(){return this.d}}
C.aAR.prototype={
gkZ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hXN(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a4()
this.bcx()},
t(){var w=this.ch
if(w!=null)w.a2(0)
this.a3()},
bcx(){var w=this.ch
if(w!=null)w.a2(0)
this.ch=A.d5(B.tI,new C.cJK(this))},
btR(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkZ()[v.e]
if(w.e[d]===w.b)v.l(new C.cJS(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cJT(v,d))
A.cD(B.j5,new C.cJU(v))}},
d21(){var w=this
if(!w.as&&w.f<w.gkZ()[w.e].d.length)w.l(new C.cJV(w))},
kU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkZ()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a2(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.l(new C.cJW(t,s))
w=5
return A.b(C.Cf(t.a.d,s),$async$kU)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Cg(q.d,q.c.a,"who",t.r),$async$kU)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cJX())
w=1
break
case 4:t.l(new C.cJY(t))
t.bcx()
case 1:return A.h(u,v)}})
return A.i($async$kU,v)},
C(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gkZ().length+" guessed",a2,a2,a2,a2,a2,a2,B.qH,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Xo,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.u1(a1,A.ck(A.a([D.bhY,w,v,B.aN,new C.J1(u,t,a0.ax,a2),B.aN,A.at(C.uS("Back to the games",new C.cJM(a3),B.d0,B.k0,D.fN),a2,a2,a2)],x.p),a2,a2,B.ad,a2,a2,B.ah,!1),B.fh,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkZ()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.M9,B.K,a2,a2),B.S,A.at(A.l6(new C.cJN(a0,r),a2,B.b0,B.hB,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aQ(16,16)
l=new A.ax(B.d0,2,B.r,-1)
k=o+1
w.push(new A.rz(new A.bq(0,1,u),new C.cJO(),A.q(a2,new A.bZ(B.aJ,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.r4(A.c(""+k,a2,a2,a2,a2,a2,a2,B.oB,a2,a2,a2),D.lZ,a2,12,a2),B.ar,new A.bu(1,B.b9,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fYU,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.r5,a2,new A.bE(l,l,l,l),new A.bc(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cB,B.bg,a2,a2,a2),B.b0,B.j5,a2,new A.b9("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bJ(!1,D.hpY,a2,a2,!0,a2,a2,a2,a0.gd20(),a2,a2),a2,a2,a2))
w.push(B.N)
if(a0.as){u=D.m_.j(0.2)
q=A.n(16)
p=A.K(D.m_,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fU,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.w(A.a([m,B.S,C.uS(v,a0.gqK(a0),B.d0,B.jH,D.fN)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bD,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dA:B.d0.j(0.2)
g=new A.aQ(16,16)
l=new A.ax(n.q(0,o)?B.fs:B.d0,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bX:B.c
d=n.q(0,o)?B.yd:a2
t.push(new A.rz(new A.bq(0,i,u),new C.cJP(),A.aA(a2,A.q(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.H(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.ah3,new A.p(h,a2,new A.bE(l,l,l,l),new A.bc(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jF,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cJQ(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b0,B.my,a2,new A.b9("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bX(B.fL,t,B.bq,a2,10,10))}return new C.u1(a1,A.ck(w,a2,a2,B.aoQ,a2,a2,B.ah,!1),B.fh,a2)}}
C.aBP.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.aJl.prototype={
b0(){this.b8()
this.b6()
this.dV()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdQ())
w.bd$=null
w.a3()}}
C.ahn.prototype={
atk(d){},
atR(){var w=this,v=w.qr(new C.fiK(w))
v.fY(0)
w.Ne$!==$&&A.aT()
w.Ne$=v}}
C.aNg.prototype={
gbqa(d){var w=this.c
return B.a.av(w,0,Math.min(this.d,w.length))},
Xn(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.c=d
w.d=0
w.b=A.d5(E.a1X,new C.ft9(w))},
bwd(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a2(0)}}
C.anX.prototype={
R(){return new C.anY(new C.ao6(),A.a([],x.t),new A.eP(0,$.ay()),$,0,null,null)},
gd7(){return this.d}}
C.anY.prototype={
gO3(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHS(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghm(d){var w,v=this,u=v.e
if(u===$){w=C.NL(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqR(){var w=this.r
return w===$?this.r=new C.aNg(new C.bWw(this)):w},
gasa(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gO3()[v].c)u.push(1)
return u.length},
gbpp(){var w=this.ghm(0)
return w.gAb()==null?"Elder":B.a.i(w.gAb().b)},
Z(){this.a4()
this.atR()},
t(){var w,v=this
v.gqR().t()
v.f.t()
w=v.Ne$
w===$&&A.d()
w.t()
w=v.qy$
w.V$=$.ay()
w.W$=0
v.bzX()},
cRu(){var w=this
w.l(new C.bWt(w))
w.gqR().Xn(w.gO3()[w.x].a)},
Ms(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqR()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qy$.a
v.ax=u
v.ay=u+1
v.l(new C.bWr())
A.cD(B.hB,new C.bWs(v))},
btN(){var w=this.gasa(0)/this.gO3().length*100
if(w>=90)return D.fia
if(w>=75)return D.ffS
if(w>=60)return D.f5R
if(w>=45)return D.f9v
return D.f01},
C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.czr()
w=A.bT(0,new A.ea(A.b5(m,m,m,new C.bwt(n,n.qy$),B.az),m),0,0,0)
if(!n.Q){v=D.r5.j(0.96)
u=A.n(20)
t=A.K(B.d0,B.r,3)
u=A.q(m,A.w(A.a([A.c("Elder "+n.gbpp()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.b_8,B.K,m,m),B.S,C.uS("Start the test",n.gCV(),B.d0,B.jm,D.fN)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.m),m,m,m,m,B.bD,m,m,m)
v=u}else{v=n.x
u=n.gO3()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.b_a,m,m,m)
if(n.Q){t=n.gqR()
t=t.d<t.c.length}else t=!1
if(t)u=D.fEj
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aQ(10,10)
o=new A.ax(D.Cw,4,B.r,-1)
s.push(A.aA(m,A.q(m,A.c(q[r],m,m,m,m,m,m,D.fPH,B.K,m,m),B.f,m,D.ah3,new A.p(D.bkT,m,new A.bE(o,o,o,o),new A.bc(p,p,p,p),m,m,B.m),m,m,m,m,B.PJ,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bWu(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bX(B.fL,s,B.bq,new A.b9("o"+t,x.W),8,8)}u=A.w(A.a([v,B.aj,A.p0(u,B.nl,A.qe(),B.b0,B.b0,A.Mk())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.u1("Village School",new A.am(B.a0,m,B.ac,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fh,m)},
czr(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.btN(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gO3()[v].c)g.push(v)
u=A.n(22)
t=A.K(B.d0,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fUk,B.K,i,i)
r=A.c("Signed by Elder "+j.gbpp(),i,i,i,i,i,i,D.fSW,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fYf,i,i,i),D.eSs],q)
o=A.c(h.b,i,i,i,i,i,i,D.h_f,i,i,i)
n=j.gasa(0)
m=j.gO3()
u=A.q(i,A.w(A.a([D.haO,B.at,s,r,B.S,new A.am(B.z,i,B.ac,B.t,p,i),o,B.aj,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.ae2,i,i,i),B.N,D.aw1],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(D.r5,i,t,u,i,i,B.m),i,i,i,i,B.f7,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.J1(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aN,D.hr2,B.N],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aQ(14,14)
k=new A.ax(B.by,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.w(A.a([A.c(p.a,i,i,i,i,i,i,B.h6,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fVz,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fXR,i,i,i)],q),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.dA,i,new A.bE(k,k,k,k),new A.bc(r,r,r,r),i,i,B.m),i,i,i,B.cB,B.bg,i,i,i))}B.d.u(s,u)}s.push(B.aA)
s.push(A.at(C.uS("Back to the games",new C.bWn(j),B.d0,B.k0,D.fN),i,i,i))
return new C.u1("Village School",A.ck(s,i,i,B.bR,i,i,B.ah,!1),B.fh,i)}}
C.bwt.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qy$.a
a0.Dg(e.f.NO(a1))
w=C.hss(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bW(0,w.c)
if(e.Q){u=e.gqR()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d4h[s]-6
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=D.Hb.gp(0)
a0.aE(new A.a5(u,340,u+12,450),r)}u=A.bx(D.abZ.cu(10),B.im)
$.U()
r=A.M()
r.r=D.Cw.gp(0)
a0.aq(u,r)
r=A.bx(D.abZ,B.iF)
u=A.M()
u.san(A.jT(new A.m(30,96),new A.m(420,346),D.dqs,f,B.w,f))
a0.aq(r,u)
q=new A.e7()
q.cV(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.c1(new A.m(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.025).gp(0)
a0.c3(o,r)}u=A.M()
u.r=I.alC.gp(0)
a0.aE(new A.a5(30,354,420,362),u)
u=A.M()
u.r=B.aS.gp(0)
a0.aE(D.fvy,u)
u=A.M()
u.r=B.bO.gp(0)
a0.aE(D.fvC,u)
u=A.bx(D.fvs,B.hv)
r=A.M()
r.r=D.a0i.gp(0)
a0.aq(u,r)
n=B.h.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqR().gbqa(0)
m=A.h2(f,B.cK,f,7,f,A.cX(f,f,f,f,f,f,f,f,f,D.h1B,u+(t?"|":"")),B.a8,B.cb,f,B.e6,B.cc)
m.nO(346)
J.bs(v.save())
u=A.hV(D.abZ)
r=$.lK()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hV(new A.a5(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.m(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bx(new A.a5(u,r,u+40,r+90),B.h5)
u=A.M()
u.r=D.bBb.gp(0)
a0.aq(r,u)}}else{m=A.h2(f,B.cK,f,f,f,D.fM6,B.K,B.cb,f,B.e6,B.cc)
m.nO(340)
m.a5(a0,new A.m(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.h.F(u+p/8,1)
o=B.n.F(e.gqR().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.P(new A.m(70+o+k*6,166+l*70),1.6,j)}u=e.ghm(0).gAb()
i=(u==null?f:u.c)===D.p3?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fiL(d,a0,i,t,h,D.eGK)),new A.y(520,new C.fiM(a0,d,t)),new A.y(575,new C.fiN(a0,d,t)),new A.y(585,new C.fiO(this,a0,d,t)),new A.y(615,new C.fiP(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.fiQ())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cgK(d,e){var w,v,u,t,s,r,q,p=$.U(),o=A.a([],x.v),n=new A.aI(p.r,B.ak,null,null,o)
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
gd7(){return this.d}}
C.anW.prototype={
gkZ(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hWH(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gjb(){var w=this.z
return w===$?this.z=this.GJ(0):w},
gaOy(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.GJ(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.c8(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.GJ(0):r).length);++v}s.Q=w
r=w}return r},
GJ(d){var w,v,u,t,s=this.gkZ()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e7()
u.cV(this.a.e+d*7)
B.d.e_(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eJ(u,new C.bW9())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a4()
this.atR()},
t(){var w,v=this
v.e.t()
w=v.Ne$
w===$&&A.d()
w.t()
w=v.qy$
w.V$=$.ay()
w.W$=0
v.bzW()},
atk(d){var w,v,u,t,s,r=this,q=r.gjb().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.c8(u===$?r.z=r.GJ(0):u,v)
s=r.gaOy()
s[v]=s[v]+(450*(t+0.5)/q-r.gaOy()[v])*Math.min(1,w)}},
d7u(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gjb().length)return
w=v.y
if(w===-1){v.l(new C.bWk(v,d))
return}if(w===d){v.l(new C.bWl(v))
return}v.l(new C.bWm(v,B.d.c8(v.gjb(),v.y),d,B.d.c8(v.gjb(),d)))},
cSc(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.GJ(0):u).length))break
t=s.gkZ()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.GJ(0):u)[v]]===v);++v}s.l(new C.bWf(s,B.d.cE(w,new C.bWg())))},
kU(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkZ().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bWh(t,s))
w=5
return A.b(C.Cf(t.a.d,s),$async$kU)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Cg(q.d,q.c.a,"lineup",t.r*10),$async$kU)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bWi())
w=1
break
case 4:t.l(new C.bWj(t))
case 1:return A.h(u,v)}})
return A.i($async$kU,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gkZ().length+" lines right",k,k,k,k,k,k,B.qH,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.u1("Line Up",A.ck(A.a([D.ahX,w,B.aN,new C.J1(v,u,l.ch,k),B.aN,A.at(C.uS("Back to the games",new C.bWb(d),B.d0,B.k0,D.fN),k,k,k)],x.p),k,k,B.ad,k,k,B.ah,!1),B.fh,k)}w=A.a([],x.t)
for(t=0;v=l.gkZ(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bWc(l))
u=A.bT(0,A.cg(new C.bWd(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.b_a,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.w(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fUN,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fX5,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.n(16)
n=l.ax
m=A.K(n?D.m_:G.nR,B.r,2)
r.push(A.q(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bWe(l),x.cM).aJ(0,", then ")+".",k,k,k,k,k,k,D.fZi,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.m),k,k,k,B.d3,B.bg,k,k,1/0))}if(!l.at)r.push(C.uS("That is my line!",l.gcSb(l),B.d0,B.h2,D.fN))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uS(w,l.gqK(l),B.d0,B.jH,D.fN))}return new C.u1("Line Up",new A.am(B.a0,k,B.ac,B.t,A.a([u,s,A.ao(12,A.w(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.fh,k)}}
C.bmO.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qy$.a
c7.Dg(c5.e.NO(c8))
w=C.hss(c8)
v=c7.c
J.bs(v.save())
v.translate(w.a,w.b)
c7.bW(0,w.c)
u=c5.gjb().length
t=$.U().r
s=x.v
r=new A.aI(t,B.ak,c4,c4,A.a([],s))
r.E(new A.b_(10,470))
r.E(new A.cn(225,500,440,470))
q=A.M()
q.r=D.a0i.gp(0)
q.b=B.ae
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aI(t,B.ak,c4,c4,l)
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
m.r=[B.d0,G.nR,D.m_,B.aH][B.n.F(p,4)].gp(0)
c7.af(k,m)}this.b4q(c7,"OLDEST",D.eHI,B.d0)
this.b4q(c7,"YOUNGEST",D.eHa,B.bf)
t=A.bx(D.fvm,B.h5)
s=A.M()
s.r=D.Hb.gp(0)
c7.aq(t,s)
s=A.bx(D.fvl,B.iF)
t=A.M()
t.r=D.Cw.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.dy_())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.c8(a1===$?c5.z=c5.GJ(0):a1,f)
o=c5.gaOy()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkZ()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkZ()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.U()
a9=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a9.r=B.d0.j(0.22+0.1*Math.sin(e)).gp(0)
c7.P(new A.m(o,520),54,a9)}a9=D.duF[B.n.F(b0,6)]
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
else b9=a3?D.eJP:c4
if(b1)c0=new A.m(3+b2*8,-56)
else if(h&&a7)c0=D.aPC
else c0=a3?new A.m(30,-104+Math.sin(e)*5):c4
C.Tz(c7,new A.m(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.KP,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iU(new A.eG(a8,c4,c4,B.cW,c4,c4,c4,c4,c4,c4,D.fSq),B.a8,B.cb,new A.k3(1),"\u2026",c4,1,c4,B.cc,c4,B.cK)
c1.nO(q)
c2=A.bx(A.c1(new A.m(o,650),24,c1.b.c+16),B.h5)
$.U()
a8=new A.ar(B.V,B.R,B.X,B.Y,B.W)
if(a6)a9=B.iO
else a9=a7?B.tB:D.r5
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.V,B.R,B.X,B.Y,B.W)
if(a6)a9=D.m_
else a9=a7?G.nR:D.lZ
a8.r=a9.gp(0)
a8.b=B.ae
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.m(o-a9/2,650-a8.gb4(a8)/2))
c3=new A.iU(new A.eG(""+(a2+1),c4,c4,B.cW,c4,c4,c4,c4,c4,c4,D.fSK),B.a8,B.cb,new A.k3(1),c4,c4,c4,c4,B.cc,c4,B.cK)
c3.eL()
c3.a5(c7,new A.m(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.h.F(p*53+Math.sin(c5+p)*20,450)
q=B.h.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.c1(B.J,4,8)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=[B.d0,G.nR,D.m_,B.aH,B.c][B.n.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b4q(d,e,f,g){var w,v,u=null,t=A.h2(u,B.cK,u,u,u,A.cX(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Ev,u,u),e),B.a8,B.cb,u,B.e6,B.cc)
t.eL()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aI(0,new A.m(v/2,w.gb4(w)/2)))},
aC(d){return!1}}
C.a3p.prototype={
a9(){return"_Trip."+this.b}}
C.anR.prototype={
R(){return new C.anS(D.Z8,new A.eP(0,$.ay()),$,0,null,null)},
gd7(){return this.d}}
C.anS.prototype={
gEt(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHS(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghm(d){var w,v=this,u=v.e
if(u===$){w=C.NL(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqR(){var w=this.f
return w===$?this.f=new C.aNg(new C.bVW(this)):w},
gVi(){var w=this.ghm(0)
return w.gAb()==null?"Grandma":B.a.i(w.gAb().b)},
Z(){this.a4()
this.atR()},
t(){var w,v=this
v.gqR().t()
w=v.Ne$
w===$&&A.d()
w.t()
w=v.qy$
w.V$=$.ay()
w.W$=0
v.bzV()},
atk(d){var w,v,u,t=this
if(t.r!==D.afM)return
w=B.dS.aA(0,B.h.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gEt()
if(v+1>=u.length){t.r=D.afN
t.Ym()}else{++t.w
t.ay=!1
t.r=D.Z9
t.gqR().Xn(u[t.w].a)}if(t.c!=null)t.l(new C.bVU())}},
Ym(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Ym=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqR().Xn("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gEt().length
r=C.bKb(t,u.z,s)
u.as=r
w=2
return A.b(C.Cf(u.a.d,r),$async$Ym)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Cg(s.d,s.c.a,"journey",u.x*10),$async$Ym)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bVO())
return A.h(null,v)}})
return A.i($async$Ym,v)},
bv5(){this.aXo()},
aXo(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.afM
if(w.c!=null)w.l(new C.bVP())},
Ms(d){var w,v,u,t,s=this
if(s.r!==D.Z9)return
w=s.gEt()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bVT(s,d,v))
u=s.gqR()
t=s.w
u.Xn(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cXs(){if(this.r!==D.C4)return
this.aXo()},
C(d){var w,v,u,t=this,s=null,r=A.bT(0,new A.ea(A.b5(s,s,s,new C.bmd(t,t.qy$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gEt().length;++w){v=t.w
if(w<v||t.r===D.afN)v=B.d0
else v=w===v?B.c:B.aT
u=new A.aQ(4,4)
p.push(new A.bu(1,B.b9,A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,B.xm,s,s,s,s),s))}p.push(B.b7)
p.push(D.hcu)
return new C.u1("Safari Journey",new A.am(B.a0,s,B.ac,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cqT(),s,s,10,10,s,s)],q),s),B.fh,s)},
cqT(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bVS(o),l=D.r5.j(0.96),k=A.n(22),j=A.K(B.d0,B.r,3)
switch(o.r.a){case 0:w=A.w(A.a([A.c("A long drive to the village of Elder "+o.gVi()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.b_8,B.K,n,n),B.S,C.uS("Start the journey",o.gbv4(),B.d0,D.bWd,D.fN)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bhx
break
case 1:w=o.w
v=o.gEt()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aQ(14,14)
p=new A.ax(D.lZ,2.5,B.r,-1)
t.push(A.aA(n,A.q(n,A.c(r[s],n,n,n,n,n,n,D.aZr,B.K,n,n),B.f,n,D.ahb,new A.p(D.amP,n,new A.bE(p,p,p,p),new A.bc(q,q,q,q),n,n,B.m),n,n,n,n,B.xh,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bVQ(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.w(A.a([w,B.N,A.bX(B.bG,t,B.bq,n,8,8)],u),B.B,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gEt().length?"Drive home":"Drive on"
v=A.w(A.a([w,B.N,new A.bK(B.a9,n,n,C.uS(v,o.gcXr(),B.d0,B.jH,D.fN),n)],x.p),B.B,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gVi()),B.N,A.c(""+o.x+" of "+o.gEt().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aZK,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aTo(v)
u=C.aTo(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.ae2,n,n,n))}w.push(B.N)
w.push(A.at(C.uS("Back to the games",new C.bVR(o),B.d0,B.k0,D.fN),n,n,n))
w=A.w(w,B.B,n,B.e,B.P,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.p(l,n,j,k,D.aGE,n,B.m),n,n,n,n,B.bg,n,n,n)}}
C.bmd.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qy$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gEt(),d0=B.h.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.afM,d2=c7*0.5
c8=A.ap(D.bmp,D.bxn,d0)
c8.toString
w=A.ap(D.a_u,G.akm,d0)
w.toString
v=A.ap(B.v1,D.bvH,d0)
v.toString
$.U()
u=A.M()
t=x.O
u.san(A.jT(B.J,new A.m(0,d2),A.a([c8,w,v],t),G.a6u,B.w,c3))
d3.aE(new A.a5(0,0,0+c6,0+c7),u)
s=new A.m(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.M()
u.san(A.wH(s,60,A.a([D.bw6,B.L],t),c3,B.w,c3,c3,0))
d3.P(s,60,u)
u=A.M()
u.r=B.a_H.gp(0)
d3.P(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.h.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.n.F(r,3)*22
for(o=0;o<4;++o){n=D.dLS[o]
$.U()
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=B.c.j(0.75).gp(0)
d3.P(new A.m(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.U()
j=A.a([],m)
i=new A.aI(k.r,B.ak,c3,c3,j)
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
k.r=A.ap(l===0?D.bkW:D.bAz,D.bq7,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cgL(d3,new A.m(B.h.F(B.h.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.U()
w=A.M()
v=A.ap(D.alW,D.Hq,d0)
v.toString
w.san(A.jT(new A.m(0,d2),new A.m(0,c7),A.a([v,D.bw8],t),c3,B.w,c3))
d3.aE(new A.a5(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.M()
w.r=D.bpk.gp(0)
d3.aE(new A.a5(0,a0,c6,a1),w)
w=A.M()
w.r=D.bAa.gp(0)
d3.aE(new A.a5(0,a0-3,c6,a0),w)
for(q=-B.h.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=I.O9.gp(0)
d3.aE(new A.a5(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.U()
b2=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b2.r=D.bkA.gp(0)
d3.aE(new A.a5(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aI(b1.r,B.ak,c3,c3,b2)
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
b0.r=D.byg.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b1.r=D.fN.gp(0)
d3.aE(new A.a5(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.Hb.gp(0)
d3.aE(new A.a5(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a5(b0,a4,b0+60,a5),B.jL)
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.bBH.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.Cw.gp(0)
b0.b=B.ae
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iU(new A.eG(b6,c3,c3,B.cW,c3,c3,c3,c3,c3,c3,D.fQP),B.a8,B.cb,new A.k3(1),c3,c3,c3,c3,B.cc,c3,B.cK)
b7.eL()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.m(b4-b1/2,a2-b0.gb4(b0)/2))
if(a7)b8=c4.r===D.afN
else if(r===c4.w){b0=c4.r
b0=b0===D.Z9||b0===D.C4
b8=b0}else b8=!1
if(a7){b0=c4.ghm(0).gAb()
b9=(b0==null?c3:b0.c)===D.p3?1:0}else b9=[0,3,6,7,2,1,4,5][B.n.F(r,8)]
b0=c4.gqR()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.C4
b0=c0?C.hSv(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Z9?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.m(40,-110+Math.sin(g)*10)
else a7=c0?new A.m(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Tz(d3,new A.m(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.m(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bMk(d3,new A.m(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.h.F(w+r/7,1)
$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.bzE.j(0.5*(1-c2)).gp(0)
d3.P(new A.m(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Z8)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.h.F(w+r/5,1)
t=Math.sin(r+c8)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.P(new A.m(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.C4&&c4.ax){b7=A.h2(c3,B.cK,c3,c3,c3,A.cX(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.d0,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.JI,c3,c3),"BEEP BEEP!"),B.a8,B.cb,c3,B.e6,B.cc)
b7.eL()
b7.a5(d3,new A.m(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cgL(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.bvB,D.boD,g)
o.toString
if(f){w=new A.aI($.U().r,B.ak,null,null,A.a([],x.v))
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
t.r=D.a0Q.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d8w[r]
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=D.a0Q.gp(0)
p.c=4
p.d=B.bH
d.ah(new A.m(w,t),new A.m(v+q*24,s),p)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=o.gp(0)
d.P(new A.m(v+q*26,u),10,p)}}else{w=e.a6(0,D.eJM)
$.U()
v=A.M()
v.r=D.bkC.gp(0)
v.c=4
d.ah(e,w,v)
v=A.c1(e.a6(0,D.eJN),16,60)
w=A.M()
w.r=o.gp(0)
d.c3(v,w)}},
bMk(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Z8?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jB(0,a0)
for(w=0;w<2;++w){v=D.dDc[w]
u=d.ay&&d.r!==D.Z8&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.U()
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.bAq.gp(0)
a2.P(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.bsj.gp(0)
a2.P(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.bl.gp(0)
q.c=2
a2.ah(B.J,new A.m(s*9,t*9),q)}a1.restore()}p=A.rn(D.fvL,B.h5,B.h5,B.ia,B.hU)
$.U()
t=A.M()
t.san(A.jT(D.eFQ,B.aaS,D.drV,G.a6u,B.w,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.dle[B.n.F(o,4)].gp(0)
a2.aE(new A.a5(t,-26,t+10,-19),s)}n=d.r===D.C4&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a5(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.nn(A.bx(l,B.pr)),$.n0(),!0)
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=D.a_u.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.C4?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Tz(a2,new A.m(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aPt,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.pr)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=D.amR.gp(0)
i.b=B.ae
i.c=2
a2.aq(j,i)}d=A.bx(D.Wu,B.pr)
t=A.M()
t.r=D.a_u.gp(0)
a2.aq(d,t)
J.bs(a1.save())
a1.clipRRect(A.nn(A.bx(D.Wu,B.pr)),$.n0(),!0)
C.Tz(a2,new A.m(D.Wu.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aPt,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.Wu,B.pr)
d=A.M()
d.r=D.amR.gp(0)
d.b=B.ae
d.c=2
a2.aq(t,d)
d=A.M()
d.r=Ap.CW.gp(0)
a2.P(D.eHY,4,d)
d=A.M()
d.r=D.Hb.gp(0)
a2.aE(D.fwU,d)
for(w=0;w<3;++w){v=D.dDe[w]
d=A.bx(new A.a5(v,-96,v+28,-79),B.jL)
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.Hq.gp(0)
a2.aq(d,t)}a1.restore()},
aC(d){return!1}}
C.aDL.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bjK.prototype={}
C.aDN.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bjL.prototype={}
C.aDO.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bjM.prototype={}
C.a7Z.prototype={
C(d){var w=null
return new A.a4(1/0,this.c,A.b5(w,w,w,new C.bmk(w),B.az),w)}}
C.bmk.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dB_[B.n.F(n,6)]
k=$.U()
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=l.gp(0)
d.aE(new A.a5(m,0,m+v,u),j)
if(B.n.F(n,3)===0){j=A.a([],o)
i=new A.aI(k.r,B.ak,null,null,j)
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
C(d){var w=null,v=x.p,u=A.a([A.aJ(w,w,w,w,B.RM,w,w,w,new C.bVN(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fO0,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c6(w,D.a_e,A.q(w,A.bn(!0,A.w(A.a([D.cbv,new A.C(D.bMR,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bcM,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.J1.prototype={
C(d){var w=null,v=this.d,u=C.aTo(v),t=C.iCw(v),s=B.c.j(0.08),r=A.n(18),q=A.K(B.d0.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fQA,w,w,w)],x.p)
if(this.e)p.push(D.eMi)
p.push(B.aj)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h6,w,w,w))
if(t!=null)p.push(new A.C(B.rm,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.BJ,w,w,w),w))
return A.q(w,A.w(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.m),w,w,w,w,B.bD,w,w,w)}}
C.Xk.prototype={
R(){return new C.bp9(A.S(x.N,x.S),B.n.F(Date.now(),1e5))},
d3s(d){return this.f.$1(d)},
gec(){return this.d}}
C.bp9.prototype={
gUh(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a4()
this.QQ()},
QQ(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$QQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bWy(u.a.d),$async$QQ)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dpM[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bWx(p,(o===$?u.d=q.c:o).a,r),$async$QQ)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e8V(u,n))
return A.h(null,v)}})
return A.i($async$QQ,v)},
v3(d){return this.cu2(d)},
cu2(d){var w=0,v=A.j(x.H),u=this,t
var $async$v3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a7(t,!1).ca(A.e4(new C.e8W(d),!1,null,x.H)),$async$v3)
case 2:u.r=B.n.F(Date.now(),1e5)
if(u.c!=null)u.QQ()
return A.h(null,v)}})
return A.i($async$v3,v)},
gb9U(){var w,v,u,t=C.NL(this.gUh()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a4l(d){return this.cBo(d)},
cBo(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a4l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d3s(r),$async$a4l)
case 2:if(u.c!=null)u.l(new C.e8X(u,r))
return A.h(null,v)}})
return A.i($async$a4l,v)},
Q8(d){return this.bVd(d)},
bVd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Q8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.huU(t.gUh())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Nt("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a7(s,!1).ca(A.e4(new C.e8T(q),!1,null,r)),$async$Q8)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bl(j,new C.e8U(p))
o=s.length
B.d.cl(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a4l(A.cE(s,0,A.dy(2,"count",x.S),r).dd(0)),$async$Q8)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Q8,v)},
Zi(d,e){return this.bSM(0,e)},
bSM(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Zi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e8S(e),o,null,!0,!0,x.y),$async$Zi)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.huU(u.gUh()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a4l(o),$async$Zi)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Zi,v)},
acb(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e8P(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.Xj,p,p,p),B.aY],s)
q=A.n(10)
r.push(A.q(p,A.c(i,p,p,p,p,p,p,D.fOV,p,p,p),B.f,p,p,new A.p(B.i1,p,p,q,p,p,B.m),p,p,p,p,B.zO,p,p,p))
return A.aA(p,A.d3(A.q(p,A.w(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.aY,A.c(e,p,2,p,p,p,p,D.fWZ,p,p,p),B.cR,A.c(f,p,3,B.a2,p,p,p,D.fPF,p,p,p)],s),B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a6(B.aw,B.aD,B.w,w,p,p),B.m),p,p,p,p,B.xf,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
YM(d,e,f,g,h,i){return this.acb(d,e,f,g,h,i,null)},
C(a2){var w,v,u,t,s=this,r=null,q=C.NL(s.gUh()),p=s.gUh(),o=C.aTo(s.e),n=C.huU(p),m=s.a.e&&J.ab(p.z)<2,l=new C.e8Y(s),k=C.hWH(p,1).length,j=C.hWS(p,1).length,i=C.hXN(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.K(B.d0.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.adQ,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fUo,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.bd,A.E(A.w(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.XB,r,r,r)],a1),B.B,r,B.e,B.i,0,B.p),1),A.w(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qH,r,r,r),D.hiQ],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.m),r,r,r,r,B.bD,r,r,r)
f=s.YM("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aB,new C.e8Z(s,p),l.$1("kahoot"))
h=s.YM("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lZ,new C.e9_(s,p),l.$1("fire"))
a0=s.YM("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.vf,new C.e90(s,p),l.$1("catch"))
j=j!==0?new C.e93(s,p):r
j=s.acb("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hZ,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e94(s,p):r
i=s.acb("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lY,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.YM("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.ey,new C.e95(s,p),l.$1("journey"))
k=k!==0?new C.e96(s,p):r
k=A.a([g,B.aN,D.hn_,B.N,A.lk(0.98,A.a([f,h,a0,j,i,e,s.acb("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ew,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.YM("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.de,new C.e97(s,p),l.$1("school"))],a1),2,12,12,r,B.e9,!0),B.df,A.A(A.a([D.bOH,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fP_,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.N],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aQ(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.h3b,B.bd,new A.bu(1,B.b9,A.w(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hl,r,r,r),A.c(""+v.garP(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.BJ,r,r,r)],a1),B.B,r,B.e,B.i,0,B.p),r)],a1)
if(v.garP(0).length>=2){f=D.m_.j(0.2)
t=new A.ax(D.m_,1,B.r,-1)
g.push(A.aA(r,A.q(r,A.V(B.fS,D.m_,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e98(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.d0.j(0.2)
t=new A.ax(B.d0,1,B.r,-1)
f=A.aA(r,A.q(r,A.V(B.jm,B.d0,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e99(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fs.j(0.2)
t=new A.ax(B.fs,1,B.r,-1)
B.d.u(g,A.a([B.b7,f,B.b7,A.aA(r,A.q(r,A.V(B.et,B.fs,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e9a(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.bZ(B.aJ,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bE(u,u,u,u),new A.bc(h,h,h,h),r,r,B.m),r,r,r,B.d3,B.bg,r,r,r))}if(s.a.e){j=m?new C.e91(s):new C.e92(a2)
i=A.n(18)
h=A.K(m?B.d0:B.aT,B.r,2)
g=m?B.d0.j(0.12):B.dA
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.q(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.d0:B.aE,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.m),r,r,r,r,B.Py,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hnY)
k.push(B.aA)
k.push(D.aw1)
return new C.u1("Family Games \xb7 "+p.b,A.ck(k,r,r,D.bIS,r,r,B.ah,!1),B.fh,r)}}
C.a1d.prototype={
a9(){return"_KPhase."+this.b}}
C.anT.prototype={
R(){return new C.anU(D.b4p)},
gd7(){return this.e}}
C.anU.prototype={
t(){var w=this.at
if(w!=null)w.a2(0)
w=this.ax
if(w!=null)w.a2(0)
this.a3()},
fY(d){var w,v=this
v.l(new C.bW7(v))
w=v.at
if(w!=null)w.a2(0)
v.at=A.d5(B.fr,new C.bW8(v))},
aSN(){var w=this,v=w.ax
if(v!=null)v.a2(0)
w.l(new C.bVY(w))
v=w.at
if(v!=null)v.a2(0)
w.at=A.d5(B.fq,new C.bVZ(w))},
Ms(d){var w
if(this.d!==D.afh)return
w=this.at
if(w!=null)w.a2(0)
this.b9Q(d)},
b9Q(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.h.S(500+500*B.h.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bW3(u,v,d))
u=v.ax
if(u!=null)u.a2(0)
v.ax=A.cD(B.tI,v.giL(v))},
cQN(d){var w=this
if(w.d!==D.YF)return
if(w.e+1>=w.a.w.length)w.a_5()
else{w.l(new C.bW4(w))
w.aSN()}},
a_5(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$a_5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a2(0)
p=u.x
t=u.a.w.length
s=C.bKb(p,u.w,t)
u.l(new C.bW0(u,s))
w=2
return A.b(C.Cf(u.a.e,s),$async$a_5)
case 2:r=e
t=u.a
w=3
return A.b(C.Cg(t.e,t.f,t.r,u.f),$async$a_5)
case 3:q=e
if(u.c!=null)u.l(new C.bW1(u,r,q))
return A.h(null,v)}})
return A.i($async$a_5,v)},
cRD(){var w,v,u,t,s=this,r=s.a,q=new A.e7()
q.cV(r.w.length*31+B.a.ga_(r.f))
w=s.a.w.length*900
v=A.a([new A.aV("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.e_(r,q)
for(r=A.cE(r,0,A.dy(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bQ(r,r.gI(0),u.k("bQ<aj.E>")),u=u.k("aj.E");r.A();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.aV(t,B.h.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bW5())
return v},
C(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b4p===r){w=A.a([D.hje,B.S,A.c(s,t,t,t,t,t,t,B.XJ,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fP7,t,t,t))
w.push(B.aA)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.BN,B.K,t,t))
w.push(B.ee)
w.push(C.uS("Play",u.gf6(u),B.d0,B.fS,D.fN))
w=A.at(new A.C(B.eB,A.w(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b4q===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fXw,t,t,t),t,t,t)
break A}if(D.afh===r||D.YF===r){w=u.cwH()
break A}if(D.b4r===r){w=u.cgM()
break A}w=t}return new C.u1(s,w,B.fh,t)},
cwH(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.YF,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aZg,j,j,j),B.aY],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.M9,j,j,j))
g.push(B.ar)
f=A.n(14)
g.push(A.q(j,A.c(""+k.f,j,j,j,j,j,j,B.iY,j,j,j),B.f,j,j,new A.p(B.by,j,j,f,j,j,B.m),j,j,j,j,A0.Dj,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.n(6)
w=i?0:B.h.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.jK(B.by,j,k.as<5?B.fs:B.d0,9,j,w,j),B.ap)
w=A.n(22)
v=A.K(B.d0,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.w(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.m_:G.nR,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fO9,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fZI,B.K,j,j)
w=A.E(A.q(j,A.at(u,j,j,j),B.f,j,j,new A.p(D.r5,j,v,w,j,j,B.m),j,j,j,j,B.f7,j,j,1/0),3)
v=A.a([],h)
for(u=k.giL(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bW2(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.n.F(t,4)
n=D.aGg[o]
m=new A.aQ(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aGA[o],j,j,j,j,j,j,D.fQ9,j,j,j),B.ar,new A.bu(1,B.b9,A.c(r[t],j,3,B.a2,j,j,j,D.fP4,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.aur)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c31)
v.push(A.aA(j,new A.TQ(A.q(j,new A.bZ(B.aJ,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bE(l,l,l,l),new A.bc(m,m,m,m),W.aEC,j,B.m),j,j,j,j,B.eA,j,j,j),p,B.b0,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.aj,f,B.af,w,B.af,A.E(A.lk(1.45,v,2,10,10,j,B.e9,!1),4)],h)
if(i)h.push(D.eLv)
return new A.C(B.a2x,A.w(h,B.l,j,B.e,B.i,0,B.p),j)},
cgM(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cRD(),m=x.p,l=A.a([D.bgO,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qH,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Xo,o,o,o),o,o,o),B.aN],m)
for(w=0;w<n.length;++w){v=n[w].c?B.d0.j(0.25):B.dA
u=new A.aQ(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.d0:B.by,1,B.r,-1)
q=A.c(w<3?D.dsc[w]:""+(w+1),o,o,o,o,o,o,B.mh,o,o,o)
s=s?B.u:B.O
l.push(A.q(o,new A.bZ(B.aJ,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a4(34,o,q,o),new A.bu(1,B.b9,A.c(t.a,o,o,o,o,o,o,new A.H(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iY,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bE(r,r,r,r),new A.bc(u,u,u,u),o,o,B.m),o,o,o,B.cB,B.f3,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.J1(m,v,p.CW,o))
l.push(B.aN)
l.push(A.at(C.uS("Back to the games",new C.bW_(p),B.d0,B.k0,D.fN),o,o,o))
return A.ck(l,o,o,B.f7,o,o,B.ah,!1)}}
C.UZ.prototype={
R(){return new C.anQ(A.S(x.de,x.er))}}
C.anQ.prototype={
gE8(){var w,v=this,u=v.d
if(u===$){w=C.hB1(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gma(d){var w,v,u=this,t=u.e
if(t===$){w=u.gE8().b
v=$.ay()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bd(w,B.bb,B.aP),v)}return t},
ck1(d){return this.f.c0(0,d,new C.bVy(d))},
Z(){this.a4()
var w=this.gE8().c
if(w.length===0)w.push(C.hm5(null,0,20,""))},
t(){var w,v,u=this.gma(0)
u.V$=$.ay()
u.W$=0
for(u=this.f,u=new A.ds(u,u.r,u.e);u.A();)for(w=J.aM(u.d);w.A();){v=w.gO(w)
v.V$=$.ay()
v.W$=0}this.a3()},
cQD(){if(this.gE8().c.length>=12)return
this.l(new C.bVz(this))},
jE(d){var w,v,u=this,t=u.gE8()
t.b=B.a.i(u.gma(0).a.a)
w=t.garP(0)
if(t.b.length===0||w.length<2){u.c.M(x.q).f.T(D.fH4)
return}v=t.c
B.d.a7(v)
B.d.u(v,w)
v=u.c
v.toString
A.a7(v,!1).N(t)},
C(d){var w,v,u=this,t=null,s=new C.bVJ(),r=x.p,q=A.a([A.bJ(!1,D.h8m,t,t,!0,t,t,t,u.gbtY(u),t,t)],r),p=A.a([D.hnz,B.af,A.aO(t,B.M,!1,t,!0,B.t,t,A.aP(),u.gma(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.am,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ad,t,t,t,t,t,t,t,t,t,t,t,B.h6,!0,B.a8,t,B.ao,t,t,t,t),B.aA],r)
for(w=0;v=u.gE8().c.length,w<v;++w)B.d.u(p,A.a([new A.fo(new C.bVI(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uS("\uff0b Add a question",u.gcQC(),B.aT,t,B.c),t,t,t))
return new C.u1("Make your game",A.ck(p,t,t,D.bIP,t,t,B.ah,!1),q,t)}}
C.at3.prototype={
R(){return new C.aHn(A.a([],x._))},
by(){return this.r.$0()},
qL(){return this.w.$0()},
gec(){return this.c}}
C.aHn.prototype={
Z(){var w,v
this.a4()
this.x8()
w=this.a
v=w.c
if(v.length!==0)C.a9J(v,w.e,w.d.w)},
wX(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hxU(r,t.e,!1,s.w,new C.eaA(u),null,s),$async$wX)
case 2:w=3
return A.b(u.x8(),$async$wX)
case 3:return A.h(null,v)}})
return A.i($async$wX,v)},
a2s(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hxU(r,t.e,!0,s.w,new C.eaz(u),null,s),$async$a2s)
case 2:w=3
return A.b(u.x8(),$async$a2s)
case 3:return A.h(null,v)}})
return A.i($async$a2s,v)},
x8(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$x8=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BM(q.a.c),$async$x8)
case 7:p=e
if(q.c!=null)n=q.e||J.cM(p)
else n=!1
if(n)q.l(new C.eaC(q,p))
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
return A.b(C.HT(q.a.c).d8(0,B.rh),$async$x8)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.eaD(q,o))
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
if(q.c!=null&&q.e)q.l(new C.eaE(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$x8,v)},
Qu(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Qu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.M(s).f.T(D.fGF)
w=3
return A.b(C.HT(t.a.c),$async$Qu)
case 3:r=e
w=4
return A.b(C.hbi(t.a.c,r),$async$Qu)
case 4:q=e
w=5
return A.b(C.HT(t.a.c),$async$Qu)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.eay(t,p))
o=t.c.M(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ab(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dT:B.d9,null,B.t,null,s,null,B.lE,null,null,null,null,null,null,null,null,null,null))
t.a.qL()
case 1:return A.h(u,v)}})
return A.i($async$Qu,v)},
JC(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JC=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iLv(l),$async$JC)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.ici(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b45(q,p.e,l,"Each family tree costs $"+B.h.a1(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$JC)
case 4:if(!e||t.c==null){w=1
break}l=B.n.v(1000*Date.now())
p=C.hSF(r)
o=Date.now()
n=t.a.c
m=new C.lj(l,r.toUpperCase(),p,!0,B.M,D.EF,new A.W(o,0,!1),0,n,D.vu,B.co)
w=5
return A.b(C.a5l(n,m),$async$JC)
case 5:w=6
return A.b(t.x8(),$async$JC)
case 6:t.a.by()
t.a.qL()
if(t.c==null){w=1
break}t.G2(m)
case 1:return A.h(u,v)}})
return A.i($async$JC,v)},
G2(d){return this.cp9(d)},
cp9(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$G2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.BM(u.a.c),$async$G2)
case 2:n=l.nU(k.dO(f,new C.eaB(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hf(m,new C.asY(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$G2)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a5l(u.a.c,o),$async$G2)
case 6:case 5:w=7
return A.b(u.x8(),$async$G2)
case 7:u.a.qL()
return A.h(null,v)}})
return A.i($async$G2,v)},
C(d){var w,v,u,t,s,r=this,q=null,p=A.R(d).ax.a===B.I,o=new C.uD(p)
if(r.e)return A.at(A.nq(q,p?B.bv:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.ci(r.d)){w=p?B.eo:B.c
v=A.n(15)
u=A.aD(!1,B.a3,!0,q,A.aN(!1,q,!0,A.q(q,D.c0w,B.f,q,q,new A.p(B.aZ.j(0.12),q,A.K(B.aZ,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cA,!0,q,q,q,q,q,q,q,q,q,q,q,r.gco9(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GV(A.q(q,A.w(A.a([u,B.aN,t,B.N,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.ee,A.bH(D.hqT,q,r.gaW7(),A.bp(B.bU,q,q,q,q,q,B.a2W,q,new A.ba(A.n(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.m),q,q,q,q,D.bLz,q,q,1/0),15,B.ag,1.05,D.af4,q)}w=J.ab(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aY],v)
if(J.cM(r.d))w.push(A.aJ(q,q,q,q,A.V(B.Aw,B.aZ,q,q,q,q),q,q,q,new C.eaG(r),q,q,q,q,"Sync family trees with database",q))
if(J.cM(r.d))w.push(A.aJ(q,q,q,q,A.V(B.As,B.aZ,q,q,q,q),q,q,q,r.gajg(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dg(E.avp,q,D.h5B,r.gaW7(),A.bp(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ab(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GV(r.cMI(J.t(r.d,s),o),14,B.ag,1,D.af4,q))
B.d.u(w,u)}return A.w(A.a([p,B.aA,A.w(w,B.l,q,B.e,B.i,0,B.p)],v),B.B,q,B.e,B.i,0,B.p)},
cMI(d,e){var w=null,v=e.a,u=v?B.eo:B.c,t=A.n(14),s=A.K((v?B.er:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.v.j(v?0.35:0.08),B.eJ,10)],x.V),q=A.n(14),p=A.q(w,D.c_A,B.f,w,w,new A.p(B.aZ.j(0.15),w,w,A.n(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gasP(),m=d.d?"":" \xb7 Public",l=d.y===D.lf?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bs,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.i,0,B.p),1)
return A.q(w,A.aD(!1,B.a3,!0,w,A.aN(!1,q,!0,new A.C(B.bD,A.A(A.a([p,B.bd,l,A.V(B.Qq,v?B.bv:B.bl,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eaF(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.p(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.asY.prototype={
R(){return new C.aHk(A.a([],x._),A.aR(x.N),A.bcU())},
by(){return this.r.$0()},
gec(){return this.c}}
C.aHk.prototype={
Z(){var w,v,u=this
u.a4()
u.d=u.a.w
u.afI()
w=u.a
v=w.c
if(v.length!==0)C.a9J(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ay()
w.W$=0
this.a3()},
a5y(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a5y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.zg("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.ea0(r),s,null,!0,!0,x.y),$async$a5y)
case 3:if(e!==!0||t.c==null){w=1
break}t.Ll()
t.l(new C.ea1(t,r))
w=4
return A.b(t.v_(),$async$a5y)
case 4:t.a.by()
t.zg(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a5y,v)},
cC0(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.U$.push(new C.e9W(w,f,d,e))},
aYu(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dB()
u.el(w,v,0,1)
u.kf(q,q,1,1)
this.w.sp(0,u)},
bgx(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eV(new Float64Array(16))
q.eg(r)
w=q.Ed()
v=B.h.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dB()
t.el(r,u,0,1)
t.kf(v,v,1,1)
t.el(-r,-u,0,1)
t.j7(0,q)
s.sp(0,t)},
afI(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$afI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.BM(u.a.c),$async$afI)
case 2:t=s.nU(r.dO(e,new C.e9n(u)))
if(t!=null&&u.c!=null)u.l(new C.e9o(u,t))
return A.h(null,v)}})
return A.i($async$afI,v)},
zg(d){var w=null,v=this.c
if(v==null)return
v.M(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
wX(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.hxU(o,t,!1,r,new C.e9F(u),q.a,s),$async$wX)
case 2:n=A
m=J
w=3
return A.b(C.HT(u.a.c),$async$wX)
case 3:p=n.nU(m.dO(e,new C.e9G(u)))
if(p!=null&&u.c!=null)u.l(new C.e9H(u,p))
return A.h(null,v)}})
return A.i($async$wX,v)},
Ll(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cO(w,0)},
v_(){var w=0,v=A.j(x.H),u=this,t,s
var $async$v_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a5l(t,s),$async$v_)
case 2:return A.h(null,v)}})
return A.i($async$v_,v)},
a41(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a41=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uT(q,t.a.c)){t.zg("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iMP(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a41)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Ll()
t.l(new C.e9V(t,r))
w=4
return A.b(t.v_(),$async$a41)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a41,v)},
b6u(){var w=this.c
w.toString
A.a7(w,!1).ca(A.e4(new C.e9C(this),!1,null,x.H))},
a2I(){return this.cpb()},
cpb(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a2I=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uT(m,t.a.c)){t.zg("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.R(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e9S(),A.T(s).k("X<1>")).gI(0)
s=A.eB([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("cl.E"))
B.d.fl(p)
s=t.c
s.toString
w=3
return A.b(A.bW(B.L,null,new C.e9T(n,t,new C.uD(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a2I)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Ll()
t.l(new C.e9U(t,o))
w=6
return A.b(t.v_(),$async$a2I)
case 6:case 5:if(o.a&&t.c!=null)t.b6u()
case 1:return A.h(u,v)}})
return A.i($async$a2I,v)},
Y4(d){return this.bHz(d)},
bHz(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uT(r,t.a.c)){t.zg("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e9b(t,d),r,null,!0,!0,x.P),$async$Y4)
case 3:s=f
if(s==null){w=1
break}t.Ll()
t.l(new C.e9c(t,s))
w=4
return A.b(t.v_(),$async$Y4)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y4,v)},
a5T(d){return this.cP_(d)},
cP_(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a5T=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.R(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.ea3(u,d,new C.uD(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a5T)
case 2:return A.h(null,v)}})
return A.i($async$a5T,v)},
cle(d){var w=this,v=w.d
v===$&&A.d()
if(C.uT(v,w.a.c))w.Q9(d)
else w.a5T(d)},
alM(d,e){return this.cG5(d,e)},
cG5(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$alM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.R(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e9Y(new C.uD(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$alM)
case 3:case 1:return A.h(u,v)}})
return A.i($async$alM,v)},
JH(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$JH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.lf?3:5
break
case 3:w=6
return A.b(C.hkg(t.a.c),$async$JH)
case 6:s=e
o=t.a
r=C.hFU(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.alM(!s,!r),$async$JH)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aTu(o,t.a.c)){t.zg("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lJ(o,"Cancel","Remove",q.y===D.lf?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$JH)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aTs(t.a.c,t.d.a),$async$JH)
case 11:t.a.by()
o=t.c
if(o==null){w=1
break}A.j8(o,null)
case 1:return A.h(u,v)}})
return A.i($async$JH,v)},
ad7(d){return this.bT2(d)},
bT2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ad7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uT(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e9d(p))){o=A.T(s)
p.a=A.nU(new A.cQ(new A.X(s,new C.e9e(d),o.k("X<1>")),new C.e9f(),o.k("cQ<1,o>")))}q=p.a
if(q==null)q=d.d
t.Ll()
t.l(new C.e9g(t,s,d,q))
w=3
return A.b(t.v_(),$async$ad7)
case 3:t.zg(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ad7,v)},
Q9(d){return this.bVh(d)},
bVh(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Q9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uT(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a5T(d),$async$Q9)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e9k(t,d),r,null,!0,!0,x.P),$async$Q9)
case 6:s=f
if(s==null){w=1
break}t.Ll()
t.l(new C.e9l(t,s))
w=7
return A.b(t.v_(),$async$Q9)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Q9,v)},
cNa(){var w=this,v=w.d
v===$&&A.d()
if(!C.uT(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.ea2(w))
w.v_()},
a0a(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aTu(n,t.a.c)){t.zg("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.R(n)
s=$.ay()
r=new A.au(B.ay,s)
q=t.d.e
p=A.bt(new A.O(q,t.gcjI(),A.T(q).k("O<1,o>")).c2(0,new C.e9x()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e9y(t,new C.uD(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a0a)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.Ll()
t.l(new C.e9z(t,p))
w=4
return A.b(t.v_(),$async$a0a)
case 4:t.zg("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a0a,v)},
cjJ(d){return B.a.i(d.toLowerCase())},
cnR(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uT(v,w)
t=r.d
s=C.iB_(t)
C.iLz(q,t.b,u,C.iAZ(r.d),s,v.a,w)},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.I,m=new C.uD(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.eaa(),A.T(l).k("X<1>")).gI(0)
l=n?B.c9:B.hY
v=A.V(B.a45,n?B.bv:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.C(Z.Dk,A.aN(!1,o,!0,new A.C(B.hC,A.A(A.a([v,B.b7,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.eab(p,d),o,o,o,o,o,o,o),o),new A.C(B.ob,p.c5y(m),o)],u)
if(p.d.y===D.lf){t=B.ue.j(0.15)
s=A.n(12)
r=A.K(B.ue.j(0.45),B.r,1)
q=C.HR(p.d,p.a.c)
v.push(new A.C(B.zH,A.q(o,A.A(A.a([D.c5d,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.m),o,o,o,o,B.hr,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,15,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],u)
if(C.uT(p.d,p.a.c)&&p.e.length!==0)u.push(new C.H5("Undo",B.qf,p.gcN9(),m,o,o))
u.push(new C.H5("Family Book",E.as4,p.gcnQ(),m,B.v3,o))
u.push(new C.H5("Family games",B.ok,p.gco1(),m,B.aB,o))
if(C.uT(p.d,p.a.c))u.push(new C.H5("Display settings",B.Ea,p.gcpa(),m,B.b8,o))
u.push(new C.H5("Sync",B.As,p.gajg(),m,o,o))
t=p.d
if(t.y===D.lf||C.aTu(t,p.a.c)){t=p.d.y===D.lf?"Remove shared tree":"Delete tree"
u.push(new C.H5(t,B.et,p.gbTc(),m,B.fs,o))}if(C.uT(p.d,p.a.c))u.push(new C.H5("Add member",B.xA,new C.eac(p),m,B.bU,o))
v.push(new A.C(S.aoS,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gasP()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cg(new C.ead(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.V(n?B.a49:B.Qr,o,o,o,o,o)
v.push(A.at(A.hA(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.eae(p),o),o,o,o))}return A.c6(o,l,A.bn(!0,A.w(v,B.B,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c5y(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.h9.j(0.35),B.dv,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.V(B.Aj,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aD(!1,B.a3,!0,m,A.aN(!1,m,!0,A.q(m,D.c8A,B.f,m,m,new A.p(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cA,!0,m,m,m,m,m,m,m,m,m,m,m,n.gajg(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fRg,m,m,m)
r=r.gasP()
p=n.d.gasP()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.w(A.a([q,B.bs,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.i,0,B.p),1)],o)
if(C.uT(n.d,n.a.c))p.push(A.aJ(m,m,m,m,D.c5s,m,m,m,n.gczg(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.j8:B.ns
r=r?"Private":"Public"
r=A.E(n.azq(q,"Privacy",r,n.a.d.w?n.gcM_():m),1)
q=A.E(n.azq(B.xF,"Tree code",n.d.c,new C.e9m(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.azq(D.bWJ,"Collaborators",p,n.gcaB()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.lf){s=B.c.j(0.15)
B.d.u(p,A.a([B.N,A.aD(!1,B.a3,!0,A.n(999),A.aN(!1,A.n(999),!0,new A.C(B.h0,A.A(A.a([A.V(B.ol,B.c,m,m,m,14),B.dU,A.c("View only",m,m,m,m,m,m,B.adu,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.q(m,A.bv(u,new A.am(B.a0,m,B.ac,B.t,A.a([t,new A.C(B.HZ,A.w(p,B.B,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.p(m,m,m,w,v,D.ccY,B.m),m,m,m,m,m,m,m,1/0)},
azq(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aD(!1,B.a3,!0,A.n(14),A.aN(!1,A.n(14),!0,new A.C(K.aqf,A.w(A.a([A.V(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rX,A.c(f,w,1,B.a2,w,w,w,Ar.yg,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bjO.prototype={
C(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gar(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b5(t,t,t,new C.bjR(s,t),new A.aw(w,v))],x.p)
r=r.gdW(r)
B.d.u(u,r.dT(r,new C.dn2(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dn3(this),A.T(r).k("O<1,x>")))
return new A.C(B.vq,new A.a4(w,v,new A.am(B.a0,t,B.ac,B.f,u,t),t),t)}}
C.Lv.prototype={}
C.H9.prototype={}
C.bjQ.prototype={
gbpb(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aNa.prototype={}
C.bjR.prototype={
bUT(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.U()
v=A.M()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bH
d.ah(new A.m(n,w),new A.m(m,w),v)
u=(n+m)/2
t=new A.aI(q.r,B.ak,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.b_(u,q))
s=w-1.1
r=w-8.8
t.E(new A.i7(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.i7(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bz())
q=A.M()
q.r=B.c.gp(0)
d.P(new A.m(u,w),9,q)
q=A.M()
q.r=B.bE.gp(0)
d.af(t,q)},
bUQ(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dnn())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aR(a0,new C.dno(f))
t=new A.O(a0,new C.dnp(f),A.T(a0).k("O<1,G>")).c2(0,new C.dnq()).cH(0,1/0,B.pI)
w=f.a
d.ah(f,new A.m(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.m(o,v),p,e)
continue}l=J.me(n)
k=Math.min(10,m/2)
m=$.U()
j=A.a([],r)
i=new A.aI(m.r,B.ak,null,null,j)
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
w.b=B.ae
w.d=B.bH
w.e=B.dR
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bUQ(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bUT(d,w,r.a,r.b)}},
aC(d){return d.b!==this.b}}
C.bnF.prototype={
gcgO(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aGT
switch(w.c.a){case 0:return D.d7_
case 1:return D.dl8
case 2:return D.dFo}},
gcgR(){var w=this.c,v=C.hRS(w.w),u=C.hRS(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
C(d){var w,v,u,t=this,s=null,r=A.R(d).ax.a===B.I,q=t.gcgO(),p=t.c,o=A.bIL(p.f),n=t.gcgR(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cO,10)],m),k=r?B.ax:B.c,j=A.K(r?B.ax:B.c,B.r,2)
if(o!=null)w=A.u5(B.z,s,B.cr,B.c1,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a6(B.a5,B.a9,B.w,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.id(w,B.ap),B.f,s,s,new A.p(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a6(B.aw,B.aD,B.w,q,s,s),B.a6),s,56,s,s,B.DA,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.K(r?B.ax:B.c,B.r,1.5)
l.push(A.ao(s,A.q(s,A.c(""+k,s,s,s,s,s,s,D.h1g,s,s,s),B.f,s,s,new A.p(B.cj,s,w,j,s,s,B.m),s,s,s,s,D.bNv,s,s,s),s,s,s,-6,-4,s))}k=r?B.cx:B.c
j=A.n(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.v.j(r?0.3:0.06),B.dQ,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cx,s,s,s,s,s,s,s,s,u,s,s,B.C,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a4(84,112,A.w(A.a([new A.am(B.a0,s,B.ac,B.f,l,s),B.at,A.q(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.baW,new A.p(k,s,w,j,m,s,B.m),s,s,s,s,D.bNG,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.biR.prototype={
a5(d,e){var w,v,u,t,s
$.U()
w=A.M()
v=this.b
u=v?B.c:D.bob
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.P(new A.m(s,t),1,w)},
aC(d){return d.b!==this.b}}
C.bBV.prototype={
C(d){var w=this,v=null,u=new C.fyW(w),t=w.c,s=t?B.cx:B.c,r=A.n(12),q=u.$3(B.ii,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.by:B.fw,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xC,"Zoom out",w.e)
return A.aD(!1,B.a3,!0,r,A.w(A.a([q,p,o,A.q(v,v,B.f,t?B.by:B.fw,v,v,v,1,v,v,v,v,v,22),u.$3(B.asM,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dJ,v,v,v,B.ai)}}
C.br3.prototype={
C(d){var w=this,v=null,u=B.bU.j(0.15),t=A.K(B.bU,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.q(v,A.w(A.a([A.V(s?B.a49:B.Qr,B.bU,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fYb,v,v,v)],r),B.l,v,B.ba,B.i,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.aj,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fVX,B.K,v,v)],r)
if(s){t=A.a([B.aj],r)
s=w.d
B.d.u(t,new A.O(s,new C.f8r(w),A.T(s).k("O<1,x>")))
B.d.u(u,t)}return new A.a4(84,v,A.w(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a1r.prototype={
R(){return new C.aFL()},
by(){return this.Q.$0()},
gec(){return this.w}}
C.aFL.prototype={
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
if(t==null)w=C.iCx(w.r,w.f)
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
o=C.hFU(p.y,p.w)
w=3
return A.b(A.m1(t.a.w,B.KH),$async$RJ)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b45(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$RJ)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.icj(p.y,p.w)
t.a.by()
case 5:w=7
return A.b(A.Ea(78,800),$async$RJ)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dDM(t,q))
case 1:return A.h(u,v)}})
return A.i($async$RJ,v)},
cgQ(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.ie(B.n.v(1000*Date.now()),w,D.zV,null,null,null,"","","","","",1,!1,0)
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
s=v.aIW(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).N(s)},
acJ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dDL(r),s,null,!0,!0,x.y),$async$acJ)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$acJ,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===B.I,i=new C.uD(j),h=l.a.e,g=A.T(h).k("X<1>"),f=A.B(new A.X(h,new C.dDV(l),g),g.k("L.E"))
h=j?B.eo:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bLU,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.fQ(A.aN(!1,k,!0,new A.C(B.m7,A.V(B.et,B.pV,k,k,k,17),k),B.cA,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbPI(),k,k,k,k,k,k,k),k,"Delete member",k,k,k),k,k,k,0,k,k))
u=j?B.kf:B.iN
t=A.bIL(l.as)
if(l.as==null)s=A.V(B.q6,j?B.bv:B.bl,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.am(B.a0,k,B.ac,B.t,A.a([A.hr(u,t,s,k,42),A.ao(0,A.hr(B.bU,k,D.bZB,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcgN(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aFN(t,"Full name",B.mD,1,1,i,B.mU)
u=l.y
u===$&&A.d()
u=A.w(A.a([t,B.S,new C.bnD(i,u,new C.dDW(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bFc],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dDX(),A.T(o).k("O<1,eS<o?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bFe],q)
B.d.u(q,new A.O(f,new C.dDZ(),A.T(f).k("O<1,eS<o?>>")))
o=A.w(A.a([t,B.aj,new C.afR(i,r,"Who is their parent?",p,new C.dE_(l),k,o),B.aA,n,B.aj,new C.afR(i,m,"Who is their spouse / partner?",q,new C.dE0(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.d()
q=C.aFN(q,"Birth date",D.arU,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aFN(m,"Birth place",B.a4r,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aFN(n,"Date of death (if deceased)",D.au4,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aFN(p,"Occupation",A8.Rz,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.am(B.z,k,B.ac,B.t,w,k),B.aA,s,B.bx,new C.afS(i,"Identity",u,k),B.af,new C.afS(i,"Family links",o,k),B.af,new C.afS(i,"Life details",A.w(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aFN(r,"Notes",B.lh,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.af,new C.aFM(i,"Child order",l.cpr(l.at),new C.dE1(l),new C.dE2(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.huI(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dE3(l):k
B.d.u(r,A.a([B.S,new C.aFM(i,"Visible in tree",u,w,new C.dE4(l),k)],v))}r.push(B.S)
w=j?B.kf:B.iN
u=A.n(14)
t=A.K(j?B.er:B.bP,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.ji(k,B.bU,k,B.ag,k,new C.dE5(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.m),k,k,k,k,B.aov,k,k,k))
r.push(B.bx)
w=j?B.aS:B.ax
j=j?B.er:B.bP
r.push(A.A(A.a([A.E(A.dV(B.oC,new C.dDY(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.ba(A.n(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bH(D.fye,k,l.gcgP(),A.bp(B.aZ,k,k,0,B.c,k,B.cq,k,new A.ba(A.n(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.at)
return A.em(B.fh,k,B.ag,h,new A.a4(420,k,A.cb(A.w(r,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.aps,k,B.aoH,new A.ba(g,B.a1),k,k)},
cpr(d){var w=B.n.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.n.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.afS.prototype={
C(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.kf:B.iN,s=A.n(16)
return A.w(A.a([new A.C(B.a3_,u,w),A.q(w,this.e,B.f,w,w,new A.p(t,w,A.K(v?B.er:B.bP,B.r,1),s,w,w,B.m),w,w,w,w,B.bg,w,w,1/0)],x.p),B.B,w,B.e,B.i,0,B.p)}}
C.bnE.prototype={
C(d){var w,v=this,u=null,t=v.c.a,s=t?B.eo:B.c,r=A.n(12),q=A.K((t?B.er:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aO(u,B.M,!1,u,!0,B.t,u,A.aP(),v.d,u,u,u,u,u,2,A.bB(u,B.f_,u,B.tO,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cE,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.am,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ad,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a8,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.afR.prototype={
C(d){var w=this,v=null,u=w.c.a,t=u?B.eo:B.c,s=A.n(12),r=A.K((u?B.er:B.bP).j(0.85),B.r,1),q=A.V(B.tX,u?B.bv:B.bl,v,v,v,v),p=A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.eo:B.c
return A.q(v,new A.EY(A.a6T(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cE,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.m),v,v,v,v,B.ld,v,v,v)}}
C.bnD.prototype={
C(d){var w=new C.dE6(this)
return A.A(A.a([w.$3(D.xo,"Male",B.Rh),B.aa,w.$3(D.p3,"Female",B.R1),B.aa,w.$3(D.zV,"Other",B.oi)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aFM.prototype={
C(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.kf:B.iN,r=A.n(14),q=A.K(t?B.er:B.bP,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,13,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.w(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.i,0,B.p),1),new C.aMc(u,B.xC,w.f,v),B.b7,new C.aMc(u,B.ii,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.m),v,v,v,v,B.es,v,v,v)}}
C.aMc.prototype={
C(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.eo:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bU
else t=(s.c.a?B.bv:B.bl).j(0.4)
return A.aD(!1,B.a3,!0,v,A.aN(!1,u,!0,new A.a4(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.afT.prototype={
bZ5(d){switch(d.a){case 0:return B.bU
case 1:return B.bE
case 2:return B.cH}},
bZ6(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b20(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
BC(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
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
ahv(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.kf:B.iN,s=A.n(16),r=A.K(v?B.er:B.bP,B.r,1)
return A.w(A.a([new A.C(B.a3_,u,w),A.q(w,A.w(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.m),w,w,w,w,B.bS,w,w,1/0)],x.p),B.B,w,B.e,B.i,0,B.p)},
C(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hXA(r,q),o=q.c,n=t.bZ5(o),m=A.bIL(q.f),l=t.e.a,k=l?B.eo:B.c,j=A.n(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.lf?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.q(s,A.hr(u,m,m==null?A.V(B.q6,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a6),s,s,s,s,B.eH,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.q(s,A.c(t.bZ6(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.m),s,s,s,s,B.lG,s,s,s),s,s,s)
u=x.p
i=A.a([t.BC("Full name",i,B.mD)],u)
if(p>0)i.push(t.BC("Child order","#"+p,B.R7))
r=A.a([h,B.at,r,B.aN,l,B.S,v,B.bx,t.ahv("Identity",i),B.af,t.ahv("Life details",A.a([t.BC("Birth date",q.w,D.arU),t.BC("Birth place",q.x,B.a4r),t.BC("Date of death",q.y,D.au4),t.BC("Occupation",q.z,A8.Rz)],u)),B.af,t.ahv("Family links",A.a([t.BC("1. Parent",t.b20(q.d),B.Ip),t.BC("2. Spouse",t.b20(q.e),B.IG)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.ahv("Notes",A.a([t.BC("Notes",q,B.lh)],u))],u))
r.push(B.bx)
r.push(A.bH(B.Mj,s,new C.dEg(d),A.bp(B.aZ,s,s,s,s,s,B.cq,s,new A.ba(A.n(14),B.a1),s,s,s)))
return A.eE(s,k,new A.cO(B.mo,A.cb(A.w(r,B.al,s,B.e,B.P,0,B.p),B.t,s,B.y,s,s,B.xj,s,s,B.ah),s),s,s,s,B.I1,s,B.db,s,new A.ba(j,B.a1),s)}}
C.H5.prototype={
C(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.tR,A.fQ(A.aD(!1,B.a3,!0,A.n(8),A.aN(!1,A.n(8),!0,new A.a4(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u,u),u)}}
C.at0.prototype={
fb(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.T(w).k("O<1,a9<o,@>>")
w=A.B(new A.O(w,new C.cje(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j6(w,new C.cjf(),t,x.fO))
return s}}
C.at1.prototype={
R(){return new C.aHm(A.a([],x.bF))},
gd7(){return this.c}}
C.aHm.prototype={
Z(){this.a4()
this.Ls()},
Ls(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ls=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cji(t.a.c),$async$Ls)
case 3:r=e
w=4
return A.b(C.BM(t.a.c),$async$Ls)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rM(q,new C.ean(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.eao(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Ls,v)},
zT(d){var w=null,v=this.c
if(v==null)return
v.M(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
Mj(d,e){return this.cPJ(d,e)},
cPJ(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Mj=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.eas(q,e))
t=3
w=6
return A.b(d.$0(),$async$Mj)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.eat(q))
$.eY.mZ()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Mj,v)},
ZT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pX(r,s.c,s.e),$async$ZT)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Mj(new C.eak(t),"Preparing download\u2026"),$async$ZT)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZT,v)},
ZX(d){return this.bWW(d)},
bWW(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pX(r,s.c,s.e),$async$ZX)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Mj(new C.eal(t,d),"Preparing file\u2026"),$async$ZX)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZX,v)},
ajD(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ajD=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.yb.cr().NY(B.Ur,B.vv,!0),$async$ajD)
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
return A.i($async$ajD,v)},
a_A(d){return this.c6t(d)},
c6t(d){var w=0,v=A.j(x.H),u=this
var $async$a_A=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Mj(new C.eam(u,d),"Restoring family trees\u2026"),$async$a_A)
case 2:return A.h(null,v)}})
return A.i($async$a_A,v)},
a_z(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ajD(),$async$a_z)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.a_A(s),$async$a_z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_z,v)},
a4W(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4W=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pX(r,s.c,s.e),$async$a4W)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Mj(new C.ear(t),"Creating QR code\u2026"),$async$a4W)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a4W,v)},
a4v(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4v=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.E8()){t.zT("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).ca(A.e4(new C.eap(),!0,null,x.N)),$async$a4v)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.a_A(r),$async$a4v)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a4v,v)},
C(d){var w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===B.I,n=o?B.CI:B.hY,m=o?D.amY:B.aS,l=o?B.aM:B.bP,k=o?B.aS:B.ax,j=new C.dnr(n,m,l,k,o?B.bQ:B.bl)
l=A.aJ(p,p,p,p,A.V(B.eI,k,p,p,p,20),p,p,p,new C.eav(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dn_(!0,B.jI,B.aH,B.aH,q.r?p:q.gcFU(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcBV()
t.push(A.E(C.dn_(!s,B.jJ,B.b2,B.bk,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dn_(!1,B.hP,B.aZ,B.bU,q.r?p:q.gbWP(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dn_(!1,Q.At,B.as,B.aQ,q.r?p:q.gc6q(),j,s,"Upload backup file"),1))
l=A.a([new C.bjP(v,l,p),B.lr,new C.af6(j,"QR restore",p),B.S,t,B.df,new C.af6(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ab(q.d)>1&&q.a.f==null){v=A.a([B.lr,new C.af6(j,"One tree",p),B.S],u)
B.d.u(v,J.b8(q.d,new C.eaw(q,j),x.l))
B.d.u(l,v)}l=A.a([A.ck(l,p,p,Au.a2S,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.K(B.aZ.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.v.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bn(!0,A.q(p,A.A(A.a([Av.aXB,B.bd,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.m),p,p,p,p,A1.Dr,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.am(B.a0,p,B.ac,B.t,l,p),p,!1,!1,p,p)}}
C.dnr.prototype={}
C.bjP.prototype={
C(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aZ.j(0.32),B.ky,28)],x.V)
t=A.ao(p,A.V(B.vO,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.q(p,new A.am(B.a0,p,B.ac,B.t,A.a([t,new A.C(B.ad,A.A(A.a([A.q(p,D.c84,B.f,p,p,new A.p(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pv,A.E(A.w(A.a([D.h6E,B.N,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.i,0,B.p),1)],q),B.B,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.cgn,B.m),p,p,p,p,p,p,p,p)}}
C.af6.prototype={
C(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.p(B.aZ,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bjN.prototype={
C(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cO,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aD(!1,B.a3,!0,q,A.aN(!1,o,!0,A.eK(A.d3(new A.C(E.a2u,A.w(A.a([A.q(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.m),q,q,q,q,B.tS,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bs,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cE,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.i,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bjS.prototype={
C(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aZ.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aD(!1,B.a3,!0,v,A.aN(!1,u,!0,A.eK(new A.C(B.f3,A.A(A.a([A.q(v,D.c7e,B.f,v,v,new A.p(q,v,A.K(B.aZ.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tS,v,v,v),B.bd,A.E(A.w(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.i,0,B.p),1),A.V(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a1L.prototype={
R(){return new C.aHl()},
gd7(){return this.c}}
C.aHl.prototype={
Z(){this.a4()
this.acg()},
acg(){var w=0,v=A.j(x.H),u=this,t
var $async$acg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(R.b6M(u.a.c,B.Fj),$async$acg)
case 2:t=e
if(u.c!=null)u.l(new C.eaf(u,t))
return A.h(null,v)}})
return A.i($async$acg,v)},
al3(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$al3=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.eag(q))
t=4
p=R.hHJ(q.a.d,B.Fj)
if(p==null){n=A.be("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(R.avn(n.e,m,l,B.Fj,p,n.f),$async$al3)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.eah(q))
q.c.M(x.q).f.T(D.fHT)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ad(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(B.a.eu(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.eai(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$al3,v)},
C(d){var w,v,u,t,s,r=this,q=null,p=A.R(d).ax.a===B.I,o=p?B.o_:B.nj,n=p?B.j_:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hnt,q,q,q,1,q,!0)
w=A.n(24)
v=A.K(B.aZ.j(0.35),B.r,1)
u=A.qy(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aZ,q,q,q,q,q,q,q,q,q,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.w(A.a([B.N,u,B.bx,t,B.N,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.ba,B.i,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.m),q,q,q,q,B.ad,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcBC()
if(u)u=B.LH
else u=A.V(r.e===!0?B.h2:Ay.arS,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a4(1/0,q,A.eo(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cg,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aZ,q,B.hw,q,q,q,new A.ax(B.aZ.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.hp,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aE:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a4(1/0,q,A.bH(Ag.BP,q,new C.eaj(d),A.bp(B.aZ,q,q,q,q,B.hw,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.C(B.ad,A.w(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a1M.prototype={
R(){return new C.bpa(A.Al(B.zt,B.oJ,B.vV))}}
C.bpa.prototype={
t(){this.d.t()
this.a3()},
C(d){var w=null
return A.c6(A.eR(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.heZ,w,w,w,1,w,!0),B.v,A.Ak(this.d,B.c1,new C.eax(this,d)),w,!1,!1,w,w)}}
C.b2u.prototype={
C(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.TT,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.mq.prototype={}
C.a8L.prototype={
R(){return new C.boO(null,null)}}
C.boO.prototype={
Z(){var w=this,v=null
w.a4()
w.d=A.br(v,B.tI,v,1,v,w)
w.e=A.br(v,B.o3,v,1,v,w)
w.a.toString
w.d.cT(0)
w.e.cT(0)},
bA(d){var w,v,u=this
u.bK(d)
u.a.toString
w=u.d
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cT(0)
w=u.e
w===$&&A.d()
v=w.r
if(!(v!=null&&v.a!=null))w.cT(0)},
t(){var w=this.d
w===$&&A.d()
w.t()
w=this.e
w===$&&A.d()
w.t()
this.bCL()},
C(d){var w,v,u=this,t=B.d.du(D.a8u,new C.dWe(u),new C.dWf())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cHl(A.ca(new A.hD(A.a([w,v],x.dS)),new C.dWg(u,t),null),!0)}}
C.boN.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b6V(d,e)
break
case"house":p.mE(d,e,D.dqR)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdl()
$.U()
t=A.M()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.P(new A.m(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mK(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Ct(d,e,12)
p.zs(d,e,B.lB,5,14)
break
case"grocery":p.cqc(d,e)
break
case"calculator":p.cpU(d,e)
break
case"lumber":p.cqk(d,e)
break
case"kitchen":p.cqf(d,e)
break
case"landscape":p.mE(d,e,D.drs)
s=new A.aI($.U().r,B.ak,null,null,A.a([],x.v))
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
p.Ct(d,e,8)
p.zs(d,e,B.iO,4,18)
break
case"plumbing":p.cqu(d,e)
break
case"electrical":p.mE(d,e,D.dEo)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.U()
u=A.M()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a5(0,0,0+e.a,0+e.b),u)
p.mK(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mK(d,e,B.oX.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Ct(d,e,10)
break
case"store":p.cqE(d,e)
break
case"paint_remodel":p.cqp(d,e)
break
case"roofing":p.cqw(d,e)
break
case"warehouse":p.cqL(d,e)
break
case"vehicles":p.cqJ(d,e)
break
case"farm":p.cq6(d,e)
break
case"restaurant":p.cqv(d,e)
break
case"tools":p.cqH(d,e)
break
case"wallet":p.cqK(d,e)
break
case"concrete":p.cq_(d,e)
break
case"blueprint":p.cpS(d,e)
break
default:p.b6V(d,e)}},
mE(d,e,f){var w,v=new A.a5(0,0,0+e.a,0+e.b)
$.U()
w=A.M()
w.san(new A.a6(B.aw,B.aD,B.w,f,null,null).az(0,v))
d.aE(v,w)},
mK(d,e,f,g,h){var w,v,u,t=new A.m(e.a/2,e.b/2),s=e.gdl()/2-h
$.U()
w=A.M()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.c0(t,s),u,u+0.1439896632895322-u,!1,w)}},
zs(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdl()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.P(new A.m(q+t*o,p+s*o),3.5,r)}},
Ct(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.h.F(t*0.17,0.9)
q=B.h.F(t*0.23,0.85)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.P(new A.m(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b6V(d,e){var w,v=this
v.mE(d,e,D.dCu)
w=v.c
v.mK(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mK(d,e,B.bO.j(0.45),-w*3.141592653589793*1.4,22)
v.bUM(d,e,B.i0,w)
v.zs(d,e,B.c.j(0.7),6,8)},
bUM(d,e,f,g){var w,v,u,t,s,r
$.U()
w=A.M()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a5(16,r,t,r+3),w)}},
cqc(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mE(d,e,D.cCq)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.n.F(t,3)
q=Math.sin(s)
p=B.n.ao(t,3)
o=Math.cos(s*0.8)
n=B.n.F(t,2)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.doN[B.n.F(t,4)].j(0.85).gp(0)
d.P(new A.m(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mK(d,e,B.c.j(0.35),w,16)
l.zs(d,e,B.iO,5,12)},
cpU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mE(d,e,D.cCy)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdl()
$.U()
q=A.M()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.P(new A.m(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h2(h,B.cK,h,h,h,h,B.a8,B.cb,h,B.e6,B.cc)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dtt[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.n.F(o,2)
p.sb1(0,new A.eG(r,h,h,B.cW,h,h,h,h,h,h,new A.H(!0,q,h,h,h,h,14+m*4,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a5(d,new A.m(t*(0.08+B.n.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.n.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cCB[o]
l=B.l5.j(0.28+0.3*Math.sin(n))
k=B.n.F(o,2)
p.sb1(0,new A.eG(m,h,h,B.cW,h,h,h,h,h,h,new A.H(!0,l,h,h,h,h,12+k*3,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a5(d,new A.m(t*(0.55+B.n.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.n.ao(o,3)*0.38)+Math.sin(n)*6))}i.mK(d,e,B.c.j(0.35),w*1.5,14)
i.mK(d,e,B.eM.j(0.55),-v*3.141592653589793*2,8)
i.mK(d,e,B.oR.j(0.4),r*2.8,22)
i.zs(d,e,B.pQ,8,10)
i.Ct(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.h.F(w+o*0.22,0.9)
$.U()
v=new A.ar(B.V,B.R,B.X,B.Y,B.W)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.m(12,j),new A.m(t,j),v)}},
cqk(d,e){var w,v,u,t,s,r,q,p,o=this
o.mE(d,e,W.aDV)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a5(20,r,u,r+10),B.hv)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=A.ap(B.hb,B.nP,(s+1)/2).gp(0)
d.aq(q,p)}o.mK(d,e,B.hb.j(0.35),w,15)
o.Ct(d,e,8)},
cqf(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mE(d,e,D.dpm)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.h.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.h.F(s*0.13,0.7)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.P(new A.m(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mK(d,e,B.bO.j(0.4),-w*3.141592653589793*2.2,11)
l.zs(d,e,B.qU,4,14)},
cqu(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mE(d,e,D.dbL)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.h.F(s,0.12)
$.U()
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.ae
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.P(new A.m(w,u),q*(0.12+r*0.14+p),o)}n.zs(d,e,B.pU,6,12)
n.mK(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cqE(d,e){var w,v,u,t,s,r,q,p=this
p.mE(d,e,D.cQw)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a5(r,14,r+u,22),B.jL)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.fA,B.bO,(s+1)/2).gp(0)
d.aq(r,q)}p.mK(d,e,B.c.j(0.3),w,16)
p.Ct(d,e,8)
p.zs(d,e,B.wZ,5,13)},
cqp(d,e){var w,v,u,t,s,r,q
this.mE(d,e,D.dj1)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.h.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a5(r,q,r+8,q+(18+s*22)),B.iF)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=[B.iL,B.dH,B.bO,B.el][t].j(0.85).gp(0)
d.aq(q,r)}this.mK(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cqw(d,e){var w,v,u,t,s,r,q
this.mE(d,e,D.dfX)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.h.F(v+t*0.12,0.75))
r=B.n.F(t,4)*0.22
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.m(u*(0.1+r),s),new A.m(u*(0.18+r),s+10),q)}this.zs(d,e,B.cG,7,11)},
cqL(d,e){var w,v,u,t,s,r,q,p
this.mE(d,e,D.cTn)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a5(q,p,q+(t-s*8),p+16),B.hv)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.cG,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mK(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cqJ(d,e){var w,v,u,t,s,r,q
this.mE(d,e,D.dJb)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.h.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.n.F(t,2)*0.08)
r=A.bx(new A.a5(s,r,s+28,r+8),B.hv)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.Ct(d,e,6)},
cq6(d,e){var w,v,u,t,s,r,q,p
this.mE(d,e,D.dnI)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.U()
s=A.M()
s.r=B.oX.j(0.75).gp(0)
d.P(new A.m(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.hZ.j(0.85).gp(0)
p.c=3
d.ah(new A.m(q,v),new A.m(q+s*6,t),p)}this.mK(d,e,B.oX.j(0.35),w,14)},
cqv(d,e){var w,v,u,t,s,r,q=this
q.mE(d,e,D.dqE)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.c1(new A.m(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.22).gp(0)
d.c3(s,r)}q.zs(d,e,B.qU,5,16)
q.Ct(d,e,7)},
cqH(d,e){var w,v,u,t,s,r,q,p,o=this
o.mE(d,e,D.dGh)
w=o.c
v=w*3.141592653589793
o.mK(d,e,B.nP.j(0.55),v*3,10)
o.mK(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.nP.j(0.8).gp(0)
d.P(new A.m(v+r*34,u+q*22),4,p)}},
cqK(d,e){var w,v,u,t,s,r,q,p,o=this
o.mE(d,e,D.dJZ)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a5(q,p,q+36,p+22),B.jL)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.iO,B.oX,r).gp(0)
d.aq(p,q)}o.Ct(d,e,9)
o.mK(d,e,B.c.j(0.4),w*2.2,12)},
cq_(d,e){var w,v,u,t,s,r,q,p
this.mE(d,e,D.dwM)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.c0(new A.m(v,u),34)
$.U()
s=A.M()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.bP.j(0.85).gp(0)
d.P(new A.m(v+t*34,u+s*34),3,p)}},
cpS(d,e){var w,v,u,t,s,r,q
this.mE(d,e,D.drR)
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
u.r=B.dH.j(0.45).gp(0)
d.aE(new A.a5(0,q,0+v,q+6),u)
this.mK(d,e,B.lB.j(0.45),-r*3.141592653589793*2,11)},
aC(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aw8.prototype={
a21(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a21=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aUy(),$async$a21)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.ab4(s),$async$a21)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a21,v)},
ajE(d){return this.ct6(d)},
ct6(d){var w=0,v=A.j(x.H),u=this,t
var $async$ajE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iLK(d),$async$ajE)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ajE,v)},
C(d){var w,v,u=null,t=A.R(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.kf:B.iN
w=x.p
v=A.a([C.aUW(!0,B.t7,1/0,B.q9,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.p(u,u,u,u,u,new A.a6(B.aV,B.b1,B.w,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bn,new A.bK(B.aV,u,u,new A.C(B.tK,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aET,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.dg(D.c0o,u,D.h2G,new C.ct5(this,d),A.bp(B.aZ,u,u,u,B.c,u,B.jD,u,u,u,u,B.cp)),1),B.aa,A.E(A.eo(D.c9p,u,D.hic,this.gcjG(),A.dj(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jD,u,u,D.b9y,u,u,u,B.cp)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fC(1.7777777777777777,A.aD(!1,B.a3,!0,B.t7,new A.am(B.a0,u,B.b6,B.t,v,u),B.ap,t,0,u,u,u,u,u,B.ai),u)}}
C.aPD.prototype={
b0(){this.b8()
this.b6()
this.dV()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdQ())
w.bd$=null
w.a3()}}
C.aXU.prototype={}
C.aXT.prototype={}
C.aVX.prototype={}
C.a0n.prototype={
R(){return new C.aCr()}}
C.aCr.prototype={
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
M6(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.M(x.q).f.T(D.fIo)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).N(new C.aXU(w,v))},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.R(d).ax.a===B.I,l=m?B.eo:B.c,k=A.n(20),j=A.q(n,D.c92,B.f,n,n,new A.p(B.aZ.j(0.15),n,n,A.n(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bs,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aJ(n,n,n,n,A.V(B.cD,m?B.bv:B.bl,n,n,n,n),n,n,n,new C.dev(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cE,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hHZ(new C.dew(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.kf:B.iN
r=A.n(12)
q=A.n(12)
p=m?B.er:B.bP
t=A.aO(n,B.M,!0,n,!0,B.t,n,A.aP(),u,n,n,n,n,n,2,A.bB(n,new A.b6(4,r,B.dz),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.am,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dex(o),n,!1,n,n,!1,n,!0,n,B.ad,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a8,n,A_.LQ,n,n,n,n)
u=m?B.aS:B.ax
m=m?B.er:B.bP
return A.eE(n,l,new A.cO(B.mo,A.cb(A.w(A.a([j,B.aN,i,B.at,w,B.N,v,B.aN,t,B.bx,A.A(A.a([A.E(A.dV(B.dy,new C.dey(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.cq,n,new A.ba(A.n(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bH(D.hit,n,o.ga5g(),A.bp(B.aZ,n,n,n,B.c,n,B.cq,n,new A.ba(A.n(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.B,n,B.e,B.P,0,B.p),B.t,n,B.y,n,n,B.Du,n,n,B.ah),n),n,n,n,B.Dv,n,B.db,n,new A.ba(k,B.a1),n)}}
C.a0m.prototype={
R(){return new C.aCq()}}
C.aCq.prototype={
Z(){this.a4()
var w=$.ay()
this.d!==$&&A.aT()
this.d=new A.au(B.ay,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
M6(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.M(x.q).f.T(D.fG_)
return}v=this.c
v.toString
A.a7(v,!1).N(new C.aXT(w))},
C(d){var w,v,u,t,s,r,q=null,p=A.R(d).ax.a===B.I,o=p?B.eo:B.c,n=A.n(20),m=A.q(q,D.c5j,B.f,q,q,new A.p(B.bU.j(0.15),q,q,A.n(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bs,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aJ(q,q,q,q,A.V(B.cD,p?B.bv:B.bl,q,q,q,q),q,q,q,new C.der(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aZ.j(p?0.12:0.08)
w=A.n(12)
v=A.K(B.aZ.j(0.25),B.r,1)
u=A.V(B.arE,B.aZ.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.m),q,q,q,q,B.bD,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.kf:B.iN
t=A.n(12)
s=A.n(12)
r=p?B.er:B.bP
v=A.aO(q,B.M,!0,q,!0,B.t,q,A.aP(),w,q,q,q,q,q,2,A.bB(q,new A.b6(4,t,B.dz),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.am,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.des(this),q,!1,q,q,!1,q,!0,q,B.ad,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a8,q,B.ls,q,q,q,q)
w=p?B.aS:B.ax
p=p?B.er:B.bP
return A.eE(q,o,new A.cO(B.mo,A.cb(A.w(A.a([m,B.aN,l,B.aA,v,B.bx,A.A(A.a([A.E(A.dV(B.dy,new C.det(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.cq,q,new A.ba(A.n(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bH(D.hpN,q,this.ga5g(),A.bp(B.bU,q,q,q,B.c,q,B.cq,q,new A.ba(A.n(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.B,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.Du,q,q,B.ah),q),q,q,q,B.Dv,q,B.db,q,new A.ba(n,B.a1),q)}}
C.a_N.prototype={
R(){return new C.aB2()}}
C.aB2.prototype={
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
gLn(){var w,v=this.e
v===$&&A.d()
w=A.cA(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gamO(){var w=this.f
w===$&&A.d()
w=A.cA(B.a.i(w.a.a))
return w==null?0:w},
gb9L(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aTG(d){var w,v=B.h.D(this.gLn()+d,0.25,999999),u=B.h.b9(v),t=this.e
t===$&&A.d()
if(v===u)u=B.n.v(B.h.L(v))
else{u=B.h.a1(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aE(u,w,"")}t.sb1(0,u)
this.l(new C.cLp())},
aCq(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aZ,w,w,w,20):w,u=d.a,t=u?B.kf:B.iN,s=A.n(14),r=A.n(14)
u=u?B.er:B.bP
return A.bB(w,new A.b6(4,s,B.dz),w,B.bD,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.n(14),B.agB),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cjH(d,e,f){return this.aCq(d,e,f,null)},
M6(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.gamO()<=0){s.c.M(x.q).f.T(D.fKi)
return}r=s.c
r.toString
v=s.gLn()
u=s.gamO()
t=s.gb9L()
A.a7(r,!1).N(new C.aVX(w,v,u,t))},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.I,m=new C.uD(n),l=n?B.eo:B.c,k=A.n(24),j=x.O,i=A.a([B.aZ.j(0.22),B.bU.j(0.14)],j),h=A.n(14)
i=A.q(o,D.bZf,B.f,o,o,new A.p(o,o,A.K(B.aZ.j(0.35),B.r,1),h,o,new A.a6(B.a5,B.a9,B.w,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bs,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cE,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aJ(o,o,o,o,A.V(B.cD,n?B.bv:B.bl,o,o,o,o),o,o,o,new C.cLv(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aO(o,B.M,!0,o,!0,B.t,o,A.aP(),h,o,o,o,o,o,2,p.aCq(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Rf),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a8,o,A_.LQ,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.C,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.kf:B.iN
t=A.n(14)
s=A.K(n?B.er:B.bP,B.r,1)
r=A.aJ(o,o,o,o,A.V(B.xC,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cLw(p),o,o,o,o,o,B.cp)
q=p.e
q===$&&A.d()
q=A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),q,o,o,o,o,o,2,D.caY,B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.ek,o,o,o,1,o,o,!1,"\u2022",o,new C.cLx(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a4(52,o,q,o),A.aJ(o,o,o,o,A.V(B.ii,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cLy(p),o,o,o,o,o,B.cp)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),t,o,o,o,o,o,2,p.aCq(m,"Amount","0.00",B.hD),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.ek,o,o,o,1,o,o,!1,"\u2022",o,new C.cLz(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a8,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.i,0,o,o)
t=x.gv
u=A.B(new A.O(D.djD,new C.cLA(p,m),t),t.k("aj.E"))
i=A.a([i,B.bx,v,B.aA,h,B.N,s,B.af,A.bX(B.bG,u,B.bq,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),h,o,o,o,o,o,2,p.cjH(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cLB(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a8,o,B.ls,o,o,o,o)],w))}i.push(B.aN)
h=B.aZ.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.K(B.aZ.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gLn()===B.h.b9(p.gLn())?B.h.L(p.gLn()):p.gLn()
s=p.gb9L()
r=A.BP(p.gamO())
i.push(A.q(o,A.A(A.a([A.E(A.w(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.i,0,B.p),1),C.bJC(p.gLn()*p.gamO(),B.b8,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a6(B.a5,B.a9,B.w,j,o,o),B.m),o,o,o,o,B.jF,o,o,o))
i.push(B.bx)
j=A.n(14)
h=n?B.er:B.bP
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.cq,o,new A.ba(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cLC(d),h),1),B.ar,A.E(A.dg(D.avg,o,D.hly,p.ga5g(),A.bp(B.aZ,o,o,0,B.c,o,B.cq,o,new A.ba(A.n(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eE(o,l,new A.cO(B.Nk,A.cb(A.w(i,B.al,o,B.e,B.P,0,B.p),B.t,o,B.y,o,o,Ak.tP,o,o,B.ah),o),o,o,o,B.PM,o,B.db,o,new A.ba(k,B.a1),o)}}
C.a3C.prototype={
R(){return new C.bBN()}}
C.bBN.prototype={
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
C(d){var w,v,u,t=this,s=null,r=A.R(d).ax.a===B.I,q=r?B.eo:B.c,p=A.n(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.ax,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.kf:B.iN
v=A.aO(s,B.M,!0,s,!0,B.t,s,A.aP(),w,s,s,s,s,s,2,A.bB(s,new A.b6(4,A.n(12),B.dz),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fyr(t,d),s,!1,s,s,!1,s,!0,s,B.ad,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a8,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.dy,new C.fys(d),s),1)
r=A.bp(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eE(s,q,new A.C(B.Du,A.w(A.a([o,B.aA,v,B.aN,A.A(A.a([u,B.ar,A.E(A.bH(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fyt(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,s,B.db,s,new A.ba(p,B.a1),s)}}
C.ae7.prototype={
a9(){return"WorksheetFrameStyle."+this.b}}
C.GV.prototype={
R(){return new C.bBL(null,null)}}
C.bBL.prototype={
Z(){var w,v=this
v.a4()
w=A.br(null,D.bFM,null,1,null,v)
w.cT(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bF5()},
gbGI(){switch(this.a.r.a){case 1:return A.a([B.aZ,B.bU,B.b8],x.O)
case 2:return A.a([B.bw,B.aZ,B.b8],x.O)
case 3:return A.a([B.aH,B.cj,B.jU],x.O)
case 4:return A.a([B.fM,B.bU,B.fB],x.O)
case 0:return A.a([B.aZ,B.bU,B.b8],x.O)}},
C(d){var w=A.R(d),v=this.d
v===$&&A.d()
return new A.ea(A.ca(v,new C.fyp(this,new C.uD(w.ax.a===B.I)),null),null)}}
C.aAW.prototype={
R(){return new C.bBM(null,null)}}
C.bBM.prototype={
Z(){var w,v=this
v.a4()
w=A.br(null,B.o5,null,1,null,v)
w.cT(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bF6()},
C(d){var w=this.d
w===$&&A.d()
return A.ca(w,new C.fyq(this),null)}}
C.bBK.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a5(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aQ(w,w))
u=new A.aI($.U().r,B.ak,null,null,A.a([],x.v))
u.E(new A.ju(v))
w=A.M()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.M()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.A1(u)
t=A.a([],x.U)
w=new A.vg(w,!1,t)
for(o=p.b,s=-o*0.85;w.A();){r=w.c
if(r===0||w.f)A.bi(A.k_(y.B));--r
q=new A.Cd(w,r)
w.jY()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aXl(d,q,r,o,0,0.2,4.2,0.92)
p.aXl(d,q,r,s,0.52,0.11,3.2,0.58)}},
aXl(d,e,f,g,h,i,j,k){var w,v,u,t=B.h.F(g+h,1)*f,s=A.i5c(e.a.a,e,t,t+f*i,!0),r=A.ajh(s.gln().a.getBounds())
$.U()
w=A.M()
w.b=B.ae
w.c=j
w.d=B.bH
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a6(B.a5,B.a9,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.JB,null).az(0,r))
d.af(s,w)},
aC(d){return d.b!==this.b||d.d!==this.d}}
C.aRL.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.aRM.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.uD.prototype={}
C.aw7.prototype={
R(){return new C.aIW()},
gec(){return this.c}}
C.aIW.prototype={
Z(){var w=this
w.a4()
w.d=w.a.d
w.aku()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.MS(w,v)
this.a3()},
aku(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aku=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bI_(t.c,t.d.a),$async$aku)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f5B(u,s))
return A.h(null,v)}})
return A.i($async$aku,v)},
Sd(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Sd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f5s(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.MS(t,s),$async$Sd)
case 2:if(u.c!=null)u.l(new C.f5t(u))
return A.h(null,v)}})
return A.i($async$Sd,v)},
SK(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$SK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.R(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.f5z(t,new C.uD(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$SK)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.ab4(q),$async$SK)
case 6:case 5:t.l(new C.f5A(t,r))
w=7
return A.b(t.Sd(),$async$SK)
case 7:case 1:return A.h(u,v)}})
return A.i($async$SK,v)},
XZ(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iLu(r),$async$XZ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f5n(t,new C.rR(B.n.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Sd(),$async$XZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XZ,v)},
cp_(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hXw(t,new C.f5r(u),w,v)},
ae6(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.p(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b9j,w,w,B.m),w,22,w,w,w,w,w,22)},
ad6(d){return this.bT_(d)},
bT_(d){var w=0,v=A.j(x.H),u=this
var $async$ad6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f5q(u,d))
w=2
return A.b(u.Sd(),$async$ad6)
case 2:return A.h(null,v)}})
return A.i($async$ad6,v)},
C(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.R(a2).ax.a===B.I,e=f?B.c9:B.hY,d=A.n(8),a0=A.V(Y.a46,f?B.bv:B.bl,g,g,g,16),a1=x.p
a0=A.aN(!1,d,!0,new A.C(B.I8,A.A(A.a([a0,B.b7,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f5C(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.am(B.a0,g,B.b6,B.t,A.a([A.bv(A.n(22),C.aUW(!0,A.n(22),1/0,B.q9,g,d,1/0),B.ap),A.ao(10,A.dg(D.c3a,g,D.ho1,h.gb7G(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.h1,g,new A.ba(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aZ.j(f?0.5:0.38),B.eS,22),new A.ac(-4,B.G,B.bU.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.q(g,A.q(g,A.bv(s,new A.am(B.a0,g,B.b6,B.t,A.a([C.aUW(!0,A.n(16),1/0,B.QC,g,r.c,1/0),new A.bP(new A.p(g,g,g,g,g,new A.a6(B.aV,B.b1,B.w,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bn,g,g),A.ao(g,h.ae6(!0),g,g,8,g,8,g),A.ao(g,A.cI4(h.ae6(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cI4(h.ae6(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cI4(h.ae6(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dg(D.bZU,g,D.hh9,h.gb7G(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.h1,g,new A.ba(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.p(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.ccF,B.m),g,g,g,g,B.m7,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.bkh,B.oP,B.hA],u):A.a([B.b8,B.aZ,B.bU],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aZ.j(f?0.45:0.35),B.eS,24)],t)
r=A.n(22)
p=A.ao(g,A.V(B.jG,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.m),g,g,g,g,B.hq,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aA,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.aj,C.bJC(h.d.gyq(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.N,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cE,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.B,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.K(B.ho.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cO,14)],t)
j=B.aH.j(0.22)
i=A.n(10)
u=A.q(g,A.bv(r,new A.am(B.a0,g,B.ac,B.t,A.a([p,new A.C(D.bKI,A.A(A.a([o,B.ar,A.aD(!1,B.a3,!0,g,A.aN(!1,n,!0,A.eK(new A.C(B.xh,A.w(A.a([A.q(g,D.auP,B.f,g,g,new A.p(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.ct,g,g,g),B.fT,D.h5D],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcoZ(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.p(g,g,g,v,s,new A.a6(B.aw,B.aD,B.w,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fC(1.7777777777777777,d,g),B.aN,w,B.N,u,B.bx,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,16,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aY,A.dg(A9.a5S,g,D.h3m,h.gbHc(),A.bp(B.aZ,g,g,g,B.c,g,B.hr,g,new A.ba(A.n(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.eo:B.c
v=A.n(14)
u=A.K(f?B.er:B.bP,B.r,1)
t=A.V(B.a4u,f?B.bv:B.bl,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.w(A.a([t,B.S,s,B.aj,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.m),g,g,g,g,B.q3,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f5D(h,new C.uD(f)),A.T(w).k("O<1,x>")))
if(h.e)d.push(new A.C(B.zy,A.at(A.nq(g,f?B.bv:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bn(!0,A.w(A.a([new A.C(Z.Dk,a0,g),A.E(A.cb(A.w(d,B.B,g,B.e,B.i,0,B.p),B.t,g,B.y,g,g,E.zK,g,g,B.ah),1)],a1),B.B,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bKY(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.eo:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.v.j(r?0.35:0.08),B.cO,12)],x.V),n=A.n(16),m=A.q(u,u,B.f,u,u,D.bc1,u,u,u,u,u,u,u,5),l=B.aZ.j(r?0.22:0.12),k=A.n(12)
l=A.q(u,A.V(s?B.iy:B.h4,B.b8,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd5C()
v=A.BP(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.B,u,B.ba,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aZ.j(0.14),B.bU.j(0.1)],x.O)
w=A.n(12)
k=A.q(u,C.bJC(d.c*d.d,B.b8,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a6(B.a5,B.a9,B.w,k,u,u),B.m),u,u,u,u,B.h1,u,u,u)
w=x.p
return A.q(u,A.bv(n,new A.Fm(A.A(A.a([m,A.E(new A.C(B.aon,A.A(A.a([l,B.bd,t,B.aa,k,A.aJ(u,u,u,u,A.V(B.cD,(r?B.bv:B.bl).j(0.75),u,u,u,20),u,u,u,new C.f5o(this,d),u,u,u,u,u,B.cp)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.baS,new A.p(q,u,u,p,o,u,B.m),u,u,u,B.d3,u,u,u,u)}}
C.agd.prototype={
FX(d){return this.bUo(d)},
bUo(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$FX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pX(d,o,!1),$async$FX)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
w=4
return A.b(A.bM(B.Dc,null,x.H),$async$FX)
case 4:s=t.d
w=5
return A.b(C.ha_(!0,o,s),$async$FX)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.HP(r,"ngmy_project_"+A.aE(s.b,q,"_"),!1),$async$FX)
case 6:p=f
w=7
return A.b(M.pW(o,!1),$async$FX)
case 7:if(d.e==null){w=1
break}d.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$FX,v)},
a23(d){return this.cFV(d)},
cFV(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a23=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pX(d,s,!1),$async$a23)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
A.hf(d,new C.aw1(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pW(s,!1),$async$a23)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a23,v)},
Se(d){return this.cBP(d)},
cBP(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Se=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(A.hf(d,D.aOT,!0,"NgmyWorksheetProjectScan",x.N),$async$Se)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bJD(s),$async$Se)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.M(x.q).f.T(D.fJp)
w=1
break}q=C.hxt(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dT(p,x.H),$async$Se)
case 5:if(d.e==null){w=1
break}d.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Se,v)},
a24(d){return this.cOw(d)},
cOw(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a24=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(C.bJ6(),$async$a24)
case 3:s=f
if(s==null){w=1
break}r=C.hxt(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dT(q,x.H),$async$a24)
case 4:if(d.e==null){w=1
break}d.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a24,v)},
C(d){var w=this,v=null,u=A.R(d).ax.a===B.I,t=new C.uD(u),s=w.d.d.length,r=u?B.eo:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.v.j(u?0.35:0.08),B.ky,36)],x.V),o=x.p
return A.bn(!0,new A.C(B.xg,A.q(v,A.w(A.a([w.cEu(d,t,s),new A.C(D.bK6,A.w(A.a([w.b5E(t,"QR restore"),B.S,A.A(A.a([w.b5D(t,!0,B.jI,B.aH,B.aH,new C.f5F(w,d),"Show to scan","QR code"),B.ar,w.aCr(t,B.jJ,B.b2,B.bk,new C.f5G(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.df,w.b5E(t,"Backup files"),B.S,A.A(A.a([w.aCr(t,B.hP,B.aZ,B.bU,new C.f5H(w,d),"Full copy","Backup file"),B.ar,w.aCr(t,Q.At,B.as,B.aQ,new C.f5I(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.B,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.ap,v,v,new A.p(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cEu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fo,B.cZ,B.h9],k):A.a([B.b8,B.aZ,B.bU],k)
w=A.ao(l,A.V(B.vO,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.q(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.n(4),l,l,B.m),l,4,l,B.kN,l,l,l,36),l,l,l)
u=A.n(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.v.j(0.2),B.cO,12)],x.V)
r=this.d
s=A.q(l,C.aUW(!0,A.n(13),64,D.bUQ,l,r.c,64),B.ap,l,l,new A.p(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.C,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.adY,l,l,l)
r=C.bJC(r.gyq(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.am(B.a0,l,B.ac,B.t,A.a([w,new A.C(D.bKt,A.w(A.a([v,A.A(A.a([s,B.eu,A.E(A.w(A.a([u,B.at,t,B.N,A.A(A.a([r,B.aa,A.q(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.m),l,l,l,l,B.f8,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.B,l,B.e,B.i,0,B.p),1),A.aJ(l,l,l,l,A.V(B.cD,B.c.j(0.85),l,l,l,l),l,l,l,new C.f5E(d),l,l,l,A.nu(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aXq,l,l,l,l),l,l)],m),B.B,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a6(B.aw,B.aD,B.w,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b5E(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.p(B.aZ,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b5D(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.amY:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.er:B.bP
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cO,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.K(h.j(0.35),B.r,1)
t=A.q(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.m),r,r,r,r,B.tS,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aD(!1,B.a3,!0,r,A.aN(!1,q,!0,A.eK(new A.C(E.a2u,A.w(A.a([t,B.af,u,B.bs,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cE,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.i,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aCr(d,e,f,g,h,i,j){return this.b5D(d,!1,e,f,g,h,i,j)}}
C.aw1.prototype={
R(){return new C.bqz()}}
C.bqz.prototype={
Z(){this.a4()
this.aik()},
aik(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aik=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bJE(p.c,p.d),$async$aik)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f5i(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f5j(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aik,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.R(d).ax.a===B.I,f=g?B.CI:B.hY,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aJ(h,h,h,h,A.V(B.eI,g?B.ab:B.an,h,h,h,18),h,h,h,new C.f5k(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.uz],u),B.l,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.fo,B.cZ,B.h9],s):A.a([B.b8,B.aZ,B.bU],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aZ.j(g?0.4:0.3),B.eS,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dw,B.K,h,h)
p=C.bJC(p.gyq(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.q(h,A.w(A.a([o,B.aj,A.A(A.a([p,B.aa,A.q(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.m),h,h,h,h,B.f8,h,h,h)],u),B.l,h,B.ba,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a6(B.aw,B.aD,B.w,s,h,h),B.m),h,h,h,h,E.a2R,h,h,1/0)
t=g?D.bw0:B.c
q=A.n(24)
p=A.K(w?B.aH.j(0.4):B.aZ.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.v.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.Xi,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eLA)
else{m=A.n(20)
l=A.K(B.bo,B.r,1)
o.push(A.q(h,A.qy(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h))}}o.push(B.aN)
n=w?B.aH:B.aZ
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.K((w?B.aH:B.aZ).j(0.35),B.r,1)
k=w?B.QV:B.Ry
k=A.V(k,w?B.aH:B.aZ,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.m),h,h,h,h,B.hr,h,h,h))
return A.c6(h,f,A.bn(!0,A.w(A.a([new A.C(Ah.PZ,e,h),A.E(A.cb(A.w(A.a([s,B.aN,A.q(h,A.w(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.m),h,h,h,h,B.vs,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,h,E.apE,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aw6.prototype={
R(){return new C.aIV(A.Al(B.Pf,B.oJ,B.vV))}}
C.aIV.prototype={
t(){this.d.t()
this.a3()},
aRC(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j8(w,d)},
ckz(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iJn(t)
if(s!=null){this.aRC(s)
return}r=C.hMz(t)
if(r!=null)q=A.cW(r,p,0)
else q=!1
if(q){this.aRC(B.a.i(B.a.aV(r,B.a.c8(r,p))))
return}}},
C(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aJ(t,t,t,t,A.V(u.f?B.ry:Ab.R3,t,t,t,t,t),t,t,t,new C.f5m(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.CI,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.hh1,t,t,t,1,t,!0),q=A.Ak(u.d,B.c1,u.gcky()),p=A.n(28)
p=A.at(A.q(t,t,B.f,t,t,new A.p(t,t,A.K(B.aZ,B.r,3),p,A.a([new A.ac(2,B.G,B.aZ.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.n(16)
return A.c6(r,B.v,new A.am(B.a0,t,B.b6,B.t,A.a([q,p,A.ao(32,A.q(t,D.hfM,B.f,t,t,new A.p(w,t,A.K(B.aZ.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jF,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aNY.prototype={
a9(){return"_WorksheetTab."+this.b}}
C.PR.prototype={
R(){return new C.aIX(D.afV,A.a([],x.D))},
by(){return this.r.$0()},
gec(){return this.c}}
C.aIX.prototype={
gcMd(){return J.bKM(this.e,0,new C.f64())},
Z(){this.a4()
$.aS.dG$.push(this)
this.wW()},
t(){$.aS.hS(this)
this.a3()},
jj(d){if(d===B.fY)this.wW()},
wW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.E7(q.a.c).d8(0,B.km),$async$wW)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f60(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f61(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wW,v)},
JB(d){return this.bR3(d)},
bR2(){return this.JB(null)},
bR3(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iLw(l,d),$async$JB)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.n.v(1000*Date.now())
r=s.a
q=s.b
p=new C.m6(l,r,q,D.dx3,new A.W(Date.now(),0,!1))
w=4
return A.b(C.MS(t.a.c,p),$async$JB)
case 4:o=f
w=5
return A.b(t.wW(),$async$JB)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.M(x.q).f.T(D.fGt)
w=1
break}n=J.aM(t.e)
for(;;){if(!n.A()){m=p
break}m=n.gO(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.M(q).f.T(D.fIi)
else n.M(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.G0(m)
case 1:return A.h(u,v)}})
return A.i($async$JB,v)},
G0(d){return this.coK(d)},
coK(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$G0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hf(s,new C.aw7(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$G0)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.MS(u.a.c,t),$async$G0)
case 5:case 4:w=6
return A.b(u.wW(),$async$G0)
case 6:return A.h(null,v)}})
return A.i($async$G0,v)},
wG(d){return this.c6v(d)},
c6v(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bJ6(),$async$wG)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hf(r,D.aOT,!0,"NgmyWorksheetProjectScan",x.N),$async$wG)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bJD(q),$async$wG)
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
break}p=C.hxt(s)
w=15
return A.b(C.MS(t.a.c,p),$async$wG)
case 15:o=f
w=16
return A.b(t.wW(),$async$wG)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.M(x.q).f.T(D.fIn)
w=1
break}r.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.G0(p)
case 1:return A.h(u,v)}})
return A.i($async$wG,v)},
PK(d){return this.bPF(d)},
bPF(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$PK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.f5M(d),s,null,!0,!0,x.y),$async$PK)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pz(t.a.c,A.a([],x.D)),$async$PK)
case 6:w=7
return A.b(t.wW(),$async$PK)
case 7:s=t.c
if(s==null){w=1
break}s.M(x.q).f.T(D.fGy)
case 4:case 1:return A.h(u,v)}})
return A.i($async$PK,v)},
coY(d){var w=this.c
w.toString
A.bW(B.L,null,new C.f5V(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
bbk(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.kf
else w=B.c
v=A.n(16)
u=A.K(p?B.er:B.bP,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.q(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.m),r,r,r,r,B.bS,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aD(!1,B.a3,!0,r,A.aN(!1,q,!0,A.q(r,A.w(A.a([s,B.af,t,B.bs,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.i,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.m),r,r,r,r,B.tO,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a2C(d,e){return this.coL(d,e)},
coL(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2C=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bW(B.L,null,new C.f5Q(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a2C)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hXw(r,new C.f5R(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.PM(d,e),$async$a2C)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2C,v)},
b8i(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.q(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.m),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aC
else t=h.a?B.aS:B.ax
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.i,0,B.p),1)
return A.aD(!1,B.a3,!0,u,A.aN(!1,u,!0,new A.C(A1.Dr,A.A(A.a([s,B.bd,t,A.V(B.eP,w?B.bv:B.bl,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cvW(d,e,f,g,h,i){return this.b8i(!1,d,e,f,g,h,i)},
PM(d,e){return this.bPP(d,e)},
bPP(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lJ(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$PM)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bHL(t.a.c,d.a),$async$PM)
case 6:w=7
return A.b(t.wW(),$async$PM)
case 7:r=t.c
if(r==null){w=1
break}r.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$PM,v)},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.R(d).ax.a===B.I,m=new C.uD(n),l=n?B.c9:B.hY
if(p.f)n=D.bi0
else{w=A.aH(d,B.dM,x.w).w
v=p.bK3(m)
u=p.c5z(m)
t=p.gbH4()
if(n)s=B.kf
else s=B.c
r=A.n(13)
q=x.p
t=A.a([v,B.af,u,B.aN,new C.GV(A.q(o,A.A(A.a([p.aG4(P.QB,"Projects",m,D.afV),p.aG4(B.vz,"Cashier",m,D.b5L),p.aG4(B.Ip,"Family Tree",m,D.i69)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eH,0.95,t,o),B.bx],q)
v=p.d
if(v===D.afV){v=J.ab(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY,new C.aAW(p.gaW2(),o)],q),B.l,o,B.e,B.i,0,o,o),B.aA,p.cvY(m)],q))}else{n=p.a
if(v===D.b5L)t.push(new C.arN(n.c,m,o))
else{v=p.r
t.push(new C.at3(n.c,n.d,n.e,n.f,new C.f67(p),new C.f68(p),new A.b9(v,x.b4)))}}n=A.cb(A.w(t,B.B,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,new A.Q(20,w.r.b+8,20,32),o,o,B.ah)}return A.c6(o,l,A.bn(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bK3(d){var w=null,v=A.n(8),u=d.a,t=A.V(Y.a46,u?B.bv:B.bl,w,w,w,16)
return A.aN(!1,v,!0,new A.C(B.jZ,A.A(A.a([t,B.b7,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f5J(this),w,w,w,w,w,w,w)},
gbH4(){switch(this.d.a){case 0:return D.af3
case 1:return D.hTK
case 2:return D.af4}},
c5z(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aZ.j(0.35),B.cy,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.c57,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bd,D.bP3,A.aD(!1,B.a3,!0,w,A.aN(!1,A.n(12),!0,A.q(w,D.c2p,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f5N(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.i,0,w,w),r=B.b8.j(0.55),q=A.n(12)
return new C.GV(A.q(w,A.w(A.a([new A.C(B.I0,s,w),A.q(w,A.w(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.BP(this.gcMd()),w,w,w,w,w,w,D.h_u,w,w,w)],t),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.m),w,w,w,B.tN,B.jF,w,w,1/0)],t),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(B.aZ,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hTJ,w)},
aG4(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aZ:B.L,q=A.n(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aZ.j(0.42),B.cO,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bl
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bl
return A.E(A.aD(!1,B.a3,!0,u,A.aN(!1,s,!0,A.cY(u,A.A(A.a([w,B.dU,new A.cZ(1,B.c6,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.ba,B.i,0,u,u),u,u,B.cm,new A.p(r,u,p,q,o,u,B.m),B.iw,u,u,u,u,B.I9,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f63(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cvY(d){var w,v,u,t,s,r,q=this,p=null
if(J.ci(q.e)){w=d.a
v=w?B.eo:B.c
u=A.n(15)
t=A.q(p,D.c2w,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.G,B.aZ.j(0.5),B.eS,28)],x.V),D.cfe,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.ax,p,p,p,p,p,p,p,p,18,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GV(A.q(p,A.w(A.a([t,B.df,s,B.N,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.ee,A.A(A.a([A.E(q.aXH(B.jJ,"Scan QR",new C.f5Y(q),d),1),B.ar,A.E(q.aXH(Q.At,"Upload file",new C.f5Z(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aA,A.bH(D.hrO,p,q.gaW2(),A.bp(B.aZ,p,p,p,B.c,B.hw,p,p,new A.ba(A.n(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bLy,1.05,D.af3,p)}w=J.b8(q.e,new C.f6_(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GV(A.w(w,B.l,p,B.e,B.i,0,B.p),16,B.bS,1,D.af3,p)},
aXH(d,e,f,g){var w=null,v=B.aZ.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.K(B.aZ.j(0.45),B.r,1)
return A.aD(!1,B.a3,!0,u,A.aN(!1,t,!0,A.q(w,A.w(A.a([A.V(d,B.b8,w,w,w,26),B.N,A.c(e,w,w,w,w,w,w,D.fYD,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.m),w,w,w,w,Ax.a2g,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cvX(d,e){var w,v,u=null,t=e.a,s=t?B.eo:B.c,r=A.n(14),q=A.K(t?B.er:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.v.j(t?0.35:0.08),B.eJ,10)],x.V),o=A.n(14),n=t?B.bv:B.bl
n=A.bv(B.Zr,new A.fC(1.7777777777777777,C.aUW(!0,B.ft,1/0,P.QB,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.w(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.BP(d.gyq()),u,u,u,u,u,u,D.fWA,u,u,u)],w),B.B,u,B.e,B.i,0,B.p),1)
return A.q(u,A.aD(!1,B.a3,!0,u,A.aN(!1,o,!0,A.w(A.a([n,new A.C(B.bD,A.A(A.a([v,A.aJ(u,u,u,u,A.V(Ao.a59,t?B.bv:B.bl,u,u,u,u),u,u,u,new C.f5W(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.B,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f5X(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.p(s,u,q,r,p,u,B.m),u,u,u,B.dX,u,u,u,1/0)}}
C.bDz.prototype={}
C.rR.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd5C(){var w,v,u,t,s=this.c
if(s===B.h.b9(s))w=B.n.v(B.h.L(s))
else{v=B.h.a1(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aE(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.m6.prototype={
gyq(){return B.d.cH(this.d,0,new C.cKL())},
ak(){var w=this,v=w.d,u=A.T(v).k("O<1,a9<o,@>>")
v=A.B(new A.O(v,new C.cKK(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
biQ(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.m6(w.a,w.b,v,u,w.e)},
bix(d){return this.biQ(d,null)},
UY(d){return this.biQ(null,d)}}
C.J0.prototype={
a9(){return"FamilyGender."+this.b}}
C.ie.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hSq(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aIW(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.ie(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.anZ.prototype={
a9(){return"FamilyTreeAccessRole."+this.b}}
C.lj.prototype={
gasP(){var w=this.f
return new A.X(w,new C.bWD(),A.T(w).k("X<1>")).gI(0)},
ak(){var w=this,v=w.f,u=A.T(v).k("O<1,a9<o,@>>")
v=A.B(new A.O(v,new C.bWC(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.iAY(w.y),"games",w.z],x.N,x.z)},
xG(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.lj(w.a,v,u,t,s,r,w.r,q,p,o,n)},
biP(d,e){var w=null
return this.xG(w,w,w,d,e,w,w,w,w)},
cVO(d,e,f,g,h,i,j){return this.xG(d,e,null,f,g,h,i,j,null)},
aJ0(d,e){var w=null
return this.xG(w,w,w,w,d,w,w,e,w)},
cVQ(d,e,f,g,h,i,j,k){return this.xG(d,e,null,f,g,h,i,j,k)},
cUf(d){var w=null
return this.xG(w,w,w,w,w,w,w,d,w)},
cUE(d){var w=null
return this.xG(w,w,w,w,w,w,w,w,d)},
bir(d){var w=null
return this.xG(w,w,d,w,w,w,w,w,w)},
aIJ(d){var w=null
return this.xG(w,w,w,w,w,d,w,w,w)},
cVk(d,e,f){var w=null
return this.xG(w,d,w,w,e,w,w,f,w)},
cU2(d){var w=null
return this.xG(w,w,w,d,w,w,w,w,w)},
cUQ(d,e){var w=null
return this.xG(d,w,w,w,w,w,e,w,w)}}
C.cKM.prototype={
a9(){return"WrapAlignment."+this.b}}
C.cKN.prototype={
a9(){return"WrapCrossAlignment."+this.b}}
C.aL6.prototype={}
C.bdK.prototype={
aj(d){this.a=d.a
this.b=d.b},
d3(d){var w=new C.bdK()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b7(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bdJ.prototype={
gxx(){return!0},
gHD(){return this.z.b<this.b.length},
aZm(d){switch(0){case 0:return d.a.c}},
aZ2(d){switch(0){case 0:return d.a.d}},
c__(d,e){switch(0){case 0:return new A.i1(d,e)}},
bZn(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hr(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.jg(0,0,B.n.D(0,b5.a,b5.b),B.n.D(0,b5.c,b5.d))
return}w=A.IK(b4)
switch(0){case 0:v=b5.b
u=new A.lg(0,v,0,1/0)
t=w===B.X9
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fB(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hr(b4,u,!0)
f=b1.aZm(g)
f.toString
e=b1.aZ2(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aL6(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aL6(k,j,i))}d=s.length
switch(0){case 0:q=b5.cI(new A.i1(m,l))
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
for(q=B.d.fB(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.I)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aZm(g)
e=b1.aZ2(g)
e.toString
a9=b1.bZn(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.c__(a6,a3+a9)
b0=g.a
g.a=new A.jg(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h5(d){var w,v,u,t,s,r=this
r.lQ(d)
w=d.b
w.iH()
v=A.dB()
u=r.a
v.el(u.a,u.b,0,1)
w.pO(0,v)
for(u=r.z,u=B.d.dm(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].h5(d)
w.nT(0)},
Ia(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iH(){return this.z}}
C.bBO.prototype={}
var z=a.updateTypes(["az<~>()","P(ie)","~()","P(lj)","P(nR)","a9<o,@>(lj)","F(lj,lj)","F(ie,ie)","o(ie)","lj(a9<@,@>)","P(m6)","nR(a9<@,@>)","a9<o,@>(nR)","P(vi)","vi()","F(ie)","ah<ie>()","P(A4)","a1r(Z)","o?(ie)","eS<o?>(ie)","az<~>(m6)","P(rR)","a9<o,@>(ie)","ie(a9<@,@>)","F(m6,m6)","P(ahz)","~(bh)","x(pb)","F(F,abx)","P(r6<F>)","~(r6<F>)","UZ(Z)","P(Nt)","P(vh)","~(ie)","o(o)","Xk(Z)","UY(Z)","afT(Z)","a0i(Z)","ie(ie)","cS(bw<o,H9>)","cS(Lv)","a0P(Z)","F?(ie)","ie()","P(Lv)","C(ie)","~(J0)","a0L(Z)","x(J0,o,a_)","P(ahs)","bw<o,ah<a9<o,@>>>(o,ah<nR>)","a0N(Z)","+count,id,name(F,o,o)(lj)","o(lj)","a1L(Z)","a1M(Z)","P(mq)","mq()","a_N(Z)","a3C(Z)","a0n(Z)","a0m(Z)","~(F)","~(o,lT?)","x(rR)","agd(Z)","~(lP)","az<~>([o?])","G(G,m6)","x(m6)","G(G,rR)","a9<o,@>(rR)","rR(a9<@,@>)","ah<lT>()","vh()","o(W)","m6(a9<@,@>)","cr(J_)","o(m6)","a9<o,@>(m6)","F(nR,nR)","lj(a9<o,@>)","lj(lj)"])
C.h1q.prototype={
$1(d){return d.a+" "+d.b},
$S:125}
C.h1p.prototype={
bsk(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.r0(s,d,B.i8,"book",E.HO),$async$$1)
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
$1(d){return this.bsk(d)},
$S:264}
C.h1r.prototype={
$1(d){return d.b},
$S:125}
C.hcf.prototype={
$1(d){var w=null
return A.eE(w,B.L,new H.Rj(this.a,this.b,w),w,w,0,B.a2w,w,B.db,w,w,w)},
$S:46}
C.fOr.prototype={
$1(d){return d!=null},
$S:234}
C.fOs.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:234}
C.fOx.prototype={
$1(d){if(this.a)return new A.m(d.a*520,d.b*160)
return d},
$S:130}
C.fZU.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.ff(d,w,w,w,A.ho(w,B.up,w,w,w,w,w,w,w,B.dK,w,w,10.5,w,B.eO,w,!0,w,w,w,w),w),u=f?B.eO:B.vw
return new A.oC(D.bGP,A.acl(A.a([new A.h7(130,w,v),new A.A2(1,B.Ij,A.ff(e,w,w,w,A.ho(w,g==null?D.eO2:g,w,w,w,w,w,w,w,B.dK,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.zq,B.mf))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2027}
C.fZT.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.ww(999)
f=A.y3(A.mk(h,A.ff("Cashier",h,h,h,A.ho(h,D.Bm,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eO,h,!0,h,h,h,h),h),h,new A.lh(D.eNT,h,f,B.ip,h),h,h,D.bHi,h))
w=A.y3(A.ff("Debt receipt",h,h,h,A.ho(h,h,h,h,h,h,h,h,h,B.dK,h,h,22,h,B.eO,h,!0,h,h,h,h),h))
v=A.y3(A.ff(C.xK(new A.W(Date.now(),0,!1),!0),h,h,h,D.adr,h))
u=A.ww(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.ff(s,h,h,h,A.ho(h,h,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eO,h,!0,h,h,h,h),h)
r=A.ff("Person who owes",h,h,h,D.adr,h)
q=A.ww(10)
p=x.Z
u=A.mk(h,A.zV(A.a([s,new A.h7(h,2,h),r,new A.h7(h,10,h),A.mk(h,A.zV(A.a([A.ff("Amount owed",h,h,h,D.adr,h),new A.h7(h,2,h),A.ff(A.BP(t.c),h,h,h,A.ho(h,D.Bm,h,h,h,h,h,h,h,B.dK,h,h,20,h,B.eO,h,!0,h,h,h,h),h)],p),B.tE,B.mf),h,new A.lh(B.qv,h,q,B.ip,h),h,h,D.bGu,1/0)],p),B.tE,B.mf),h,new A.lh(E.aQi,h,u,B.ip,h),h,h,D.bIv,1/0)
q=new A.ol(D.eNX,0.9,B.lx)
r=A.ww(12)
s=i.c
o=s.$2("Original due",C.xK(t.r,!1))
n=s.$2("Current due",C.xK(t.f,!1))
m=i.d
l=new A.ol(m,1.1,B.lx)
k=A.ww(8)
j=i.a
k=A.a([o,n,new A.h7(h,6,h),A.mk(h,A.y3(A.ff(t.gaQ9(),h,h,h,A.ho(h,m,h,h,h,h,h,h,h,B.dK,h,h,11,h,B.eO,h,!0,0.5,h,h,h),h)),h,new A.lh(h,new A.qn(l,l,l,l),k,B.ip,h),h,h,D.bHr,1/0),new A.h7(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Bm))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Bm))
else{n=A.ff("Missed days ("+n+")",h,h,h,A.ho(h,B.up,h,h,h,h,h,h,h,B.dK,h,h,10.5,h,B.eO,h,!0,h,h,h,h),h)
m=A.T(o).k("O<1,Uy>")
o=A.B(new A.O(o,new C.fZS(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.h7(h,4,h),n,new A.h7(h,6,h),new C.bdJ(5,5,new C.bdK(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h7(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h7(h,8,h),w,new A.h7(h,3,h),v,new A.h7(h,16,h),u,new A.h7(h,10,h),A.mk(h,A.zV(k,B.zq,B.mf),h,new A.lh(h,new A.qn(q,q,q,q),r,B.ip,h),h,h,B.aor,1/0)],p)
w=j.a
if(w!=null){v=new A.ol(B.KV,1,B.lx)
B.d.u(f,A.a([new A.h7(h,16,h),A.ff("Debtor signature",h,h,h,A.ho(h,B.up,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eO,h,!0,h,h,h,h),h),new A.h7(h,6,h),A.mk(h,new A.Jh(w,B.ZD,h,h),h,new A.lh(h,new A.qn(v,v,v,v),A.ww(6),B.ip,h),82,h,B.PW,1/0)],p))}f.push(new A.h7(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.ff(w,h,h,h,D.fOF,h))
f.push(new A.h7(h,18,h))
f.push(A.y3(A.ff("NGMY.ORG",h,h,h,A.ho(h,D.Bm,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eO,h,!0,1.8,h,h,h),h)))
return f},
$S:363}
C.fZS.prototype={
$1(d){var w=null,v=new A.ol(D.KW,0.7,B.lx),u=A.ww(999)
return A.mk(w,A.ff(C.xK(d,!1),w,w,w,A.ho(w,D.KW,w,w,w,w,w,w,w,B.dK,w,w,9.5,w,B.eO,w,!0,w,w,w,w),w),w,new A.lh(w,new A.qn(v,v,v,v),u,B.ip,w),w,w,D.bMZ,w)},
$S:2028}
C.cbY.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.n(999),t=A.K(B.bC.j(0.28),B.r,1)
return A.q(w,A.c(C.xK(d,!1),w,w,w,w,w,w,D.fW1,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.m),w,w,w,w,B.f4,w,w,w)},
$S:2029}
C.hcN.prototype={
$1(d){var w=null,v=A.aH(d,B.bZ,x.w).w,u=A.n(26),t=A.aJ(w,w,w,w,E.av7,w,w,w,new C.hcK(d),w,w,w,w,w,B.cp),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eE(w,B.L,new A.cO(new A.aY(0,380,0,v.a.b*0.9),A.aD(!1,B.a3,!0,u,new A.C(B.a2h,A.w(A.a([new A.bK(B.a9,w,w,t,w),new A.cZ(1,B.c6,A.cb(A.w(A.a([new A.ea(new C.b2w(r,w),s),B.S,A.A(A.a([A.E(A.eo(B.AB,w,D.hnX,new C.hcL(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fc,w,new A.ba(A.n(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.dg(B.a5J,w,D.hkc,new C.hcM(r,d),A.bp(B.b8,w,w,w,B.c,w,B.fc,w,new A.ba(A.n(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.ax,0,w,w,w,w,w,B.ai),w),w,w,0,B.a2K,w,B.db,w,w,w)},
$S:46}
C.hcK.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.hcL.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.bo$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lK(2.5),$async$$0)
case 4:w=3
return A.b(e.ht(B.hs),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eU(B.dN.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aE(q,p,"_")
if(o.length>32)o=B.a.av(o,0,32)
w=5
return A.b(A.rK(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.hcM.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h6x(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.M(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.hcF.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eE(w,B.ax,A.w(A.a([new A.C(D.bIj,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nH,w,w,w),1),A.aJ(w,w,w,w,B.lM,w,w,w,new C.hcD(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.cZ(1,B.c6,new A.C(B.eA,A.bv(A.n(14),A.ha(t,B.z,w,w,B.cr,B.dE,!1,w,!1,w,w),B.ap),w),w),new A.C(B.PB,new A.a4(1/0,w,A.dg(B.on,w,D.b_S,new C.hcE(t,this.c,d),A.bp(B.b8,w,w,w,B.c,w,w,w,new A.ba(A.n(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.PN,w,B.db,w,new A.ba(v,B.a1),w)},
$S:46}
C.hcD.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.hcE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rK(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.hcR.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eE(w,B.ax,new A.C(D.bIr,A.w(A.a([A.A(A.a([D.bO9,A.aJ(w,w,w,w,B.lM,w,w,w,new C.hcP(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.N,new A.ea(A.bv(A.n(14),A.q(w,A.b5(w,w,w,new C.bg1(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.af,new A.a4(1/0,w,A.dg(B.on,w,D.b_S,new C.hcQ(t,s,d),A.bp(B.b8,w,w,w,B.c,w,w,w,new A.ba(A.n(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.db,w,new A.ba(v,B.a1),w)},
$S:46}
C.hcP.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.hcQ.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.bo$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lK(2.5),$async$$0)
case 4:w=3
return A.b(e.ht(B.hs),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aE(r,q,"_")
if(p.length>32)p=B.a.av(p,0,32)
r=J.eU(B.dN.gaS(s))
w=5
return A.b(A.rK(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fTw.prototype={
$1(d){return d.a===this.a},
$S:252}
C.dX7.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dWT.prototype={
brw(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.eo:B.c
s=u.a
w=2
return A.b(A.bW(t,null,new C.dWW(s,q,e),p,!0,!0,!1,B.Lf,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dWX(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.brw(d,e)},
$S:2030}
C.dWW.prototype={
$1(d){var w,v=null,u=this.c===B.y_,t=u?D.dEH:D.dzS
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.ax,v,v,v,v,v,v,v,v,15,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.C(B.ap0,A.w(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.ip(!0,v,v,B.y,D.fF6,new C.dWV(this.a,w,t,d),t.length,v,B.e9,B.ah,!0)],x.p),B.al,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:30}
C.dWV.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cZ.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.n(14)
if(q)u=B.cZ
else u=(t.b.a.d.a?B.bv:B.bl).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aN(!1,p,!0,A.q(B.z,C.b2v(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dWU(t.d,r),s,s,s,s,s,s,s)},
$S:176}
C.dWU.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.dWX.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dWR.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:87}
C.dWS.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cN(B.cm,e,v)
return new A.dc(e,!1,A.iz(B.z,A.at(A.aD(!1,B.a3,!0,v,new A.ec(new C.dWQ(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bj(t,new A.bq(0.96,1,u),u.k("bj<bS.T>"))),v)},
$S:34}
C.dWQ.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.eo:B.c,f=A.n(14),e=A.K((h?B.bv:B.bl).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,16,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.A(A.a([w,A.aN(!1,v,!0,new A.C(B.eH,A.V(B.cD,i.a.d.a?B.bv:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dWB(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aYd("Name")
r=l.a
q=r.d==null?k:new C.dWC(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bt:B.mt
n=A.K(B.cZ.j(0.35),B.r,1)
m=r.d
t=A.aO(k,B.M,h,k,!0,B.t,k,A.aP(),w,k,k,k,k,k,2,s.aIS(new A.C(B.eW,A.aN(!1,p,!0,A.q(B.z,C.b2v(m==null?"\ud83d\udc64":A.h_K(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a6),k,34,k,B.ct,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.ls,k,B.adg,k,k)
v=A.a([v,B.af,t,B.N,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.aj,A.A(A.a([A.E(i.aYT("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dWD(r,a0),r.d===B.y_),1),B.aa,A.E(i.aYT("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dWI(r,a0),r.d===B.a9H),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.N,new A.bK(B.a5,k,k,A.hA(D.c4l,D.hm9,new C.dWJ(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cZ,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cp)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.vl(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aO(k,B.M,!1,k,!0,B.t,k,A.aP(),l.f,k,k,k,k,k,2,i.aYe("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.am,k,k,s,k,k,B.ek,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.ao,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.K((t?B.bv:B.bl).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xK(r.a,!1)
v.push(A.aD(!1,B.a3,!0,q,A.aN(!1,p,!0,A.q(k,A.A(A.a([A.E(A.w(A.a([t,B.bs,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.i,0,B.p),1),D.c0Q],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.m),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dWK(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.N,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aO(k,B.M,!1,k,!0,B.t,k,A.aP(),l.r,k,k,k,k,k,2,i.aYd("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,12.5,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b6F(r.b.length!==0,B.mD,new C.dWL(r,i,a0),new C.dWM(r,a0),"Upload from gallery","ID photo"))
v.push(i.b6F(r.c.length!==0,D.bUN,new C.dWN(r,i,d,a0),new C.dWO(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new As.aaa("Signature (optional)",t,new C.dWP(a0),new C.dWE(a0,t),new C.dWF(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bv:B.bl
s=(i?B.bv:B.bl).j(0.28)
s=A.E(A.dV(E.b_L,new C.dWG(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.rk,k,new A.ba(A.n(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cZ,k,k,k,B.c,k,B.rk,k,new A.ba(A.n(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bH(A.c(h?"Save":"Update",k,k,k,k,k,k,B.ws,k,k,k),k,new C.dWH(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.q(k,A.cb(A.w(v,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.m),k,k,k,B.ro,B.jF,k,k,360)},
$S:183}
C.dWB.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dWC.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dWD.prototype={
$0(){return this.b.$1(new C.dWA(this.a))},
$S:0}
C.dWA.prototype={
$0(){var w=this.a
w.d=B.y_
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dWI.prototype={
$0(){return this.b.$1(new C.dWz(this.a))},
$S:0}
C.dWz.prototype={
$0(){var w=this.a
w.d=B.a9H
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dWJ.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dWK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.ws(null,u.b,A.c3(2020,1,1,0,0,0,0,0),null,s,A.c3(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dWy(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWy.prototype={
$0(){var w=this.b
return this.a.a=A.c3(w.gcm(),w.gci(),w.gcC(),0,0,0,0,0)},
$S:0}
C.dWL.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Rt(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dWx(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWx.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dWM.prototype={
$0(){return this.b.$1(new C.dWw(this.a))},
$S:0}
C.dWw.prototype={
$0(){return this.a.b=""},
$S:0}
C.dWN.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.eo:B.c
w=3
return A.b(A.bW(q,null,new C.dWu(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Rt(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dWv(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWu.prototype={
$1(d){var w=null
return A.bn(!0,A.w(A.a([A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.auF,w,w,w,w,new C.dWo(d),!1,w,w,w,w,w,w,w,D.hc2,w,w,w),A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.auD,w,w,w,w,new C.dWp(d),!1,w,w,w,w,w,w,w,D.hj9,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:30}
C.dWo.prototype={
$0(){A.a7(this.a,!1).N("camera")
return null},
$S:0}
C.dWp.prototype={
$0(){A.a7(this.a,!1).N("gallery")
return null},
$S:0}
C.dWv.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dWO.prototype={
$0(){return this.b.$1(new C.dWt(this.a))},
$S:0}
C.dWt.prototype={
$0(){return this.a.c=""},
$S:0}
C.dWP.prototype={
$0(){return this.a.$1(new C.dWs())},
$S:0}
C.dWs.prototype={
$0(){},
$S:0}
C.dWE.prototype={
$0(){return this.a.$1(new C.dWr(this.b))},
$S:0}
C.dWr.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dWF.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.akw(u.a,null,null,new C.dWq(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWq.prototype={
$4(d,e,f,g){this.a.$1(new C.dWn(this.b,d))},
$S:454}
C.dWn.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.u(w,this.b)},
$S:0}
C.dWG.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dWH.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.M(x.q).f.T(D.fKh)
return}if(w.a.d==null){w.c.M(x.q).f.T(D.fH6)
return}A.a7(w.c,!1).N(!0)},
$S:0}
C.dXa.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:87}
C.dXb.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.eo:B.c,n=A.n(14),m=A.K((p?B.bv:B.bl).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,16,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BP(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.Ay(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.Ay(r).length>0?B.bC:B.cZ,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bl
t=(q?B.bv:B.bl).j(0.28)
s=x.p
return new A.dc(e,!1,A.at(A.aD(!1,B.a3,!0,r,A.q(r,A.w(A.a([p,B.N,v,u,B.aA,A.A(A.a([A.E(A.dV(B.oC,new C.dX8(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.jD,r,new A.ba(A.n(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bH(D.hjB,r,new C.dX9(d),A.bp(B.cZ,r,r,r,B.c,r,B.jD,r,new A.ba(A.n(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.m),r,r,r,B.zL,B.I0,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dX8.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dX9.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dX4.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dX5(r),p=r.a.d.a,o=p?B.eo:B.c,n=A.n(14),m=A.K((p?B.bv:B.bl).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.ax,s,s,s,s,s,s,s,s,14,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BP(l.c),s,s,s,s,s,s,D.fXE,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.jd((r.a.d.a?B.bv:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a4u,"View receipt",new C.dWY(r,d,l))
u=l.x!=null
t=u?B.qf:B.rv
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bIo,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dWZ(r,d,l)),q.$3$icon$label$onTap(B.DL,"Edit",new C.dX_(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mD,"View / download ID",new C.dX0(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bUM,"View / download selfie",new C.dX1(r,d,l)))
if(l.gaKE())p.push(q.$3$icon$label$onTap(B.a5z,"View / download signature",new C.dX2(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.et,"Delete",new C.dX3(r,d,l)))
p.push(B.at)
return A.bn(!0,new A.C(B.tN,A.q(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:30}
C.dX5.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.ax
else w=d
return A.aN(!1,v,!0,new A.C(B.f3,A.A(A.a([A.V(e,w,v,v,v,20),B.bd,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2031}
C.dWY.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.hcJ(w,this.c)},
$S:0}
C.dWZ.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.Uf(this.c)},
$S:0}
C.dX_.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.EG(this.c)},
$S:0}
C.dX0.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bJY(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dX1.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bJY(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dX2.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.hcO(w,this.c)},
$S:0}
C.dX3.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.Rs(0,this.c)},
$S:0}
C.dXc.prototype={
$1(d){return d.x==null},
$S:252}
C.dXd.prototype={
$1(d){return d.x!=null},
$S:252}
C.dXe.prototype={
$2(d,e){return d+e.c},
$S:2032}
C.dXf.prototype={
$0(){return this.a.bHB()},
$S:0}
C.dX6.prototype={
$0(){return this.a.aiy(this.b)},
$S:0}
C.fUg.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fUh.prototype={
$0(){return B.d.gH(D.a6S)},
$S:z+77}
C.dlZ.prototype={
$0(){var w=this.a
return w.l(new C.dlX(w,this.b))},
$S:0}
C.dlX.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dlY.prototype={
$0(){},
$S:0}
C.dm_.prototype={
$0(){var w=this.a.gc6j()
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.fXe.prototype={
$1(d){return C.hBO(A.a1(d,x.N,x.z))},
$S:z+11}
C.fXf.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fXg.prototype={
$2(d,e){var w=A.c9(d.a,null),v=A.c9(e.a,null)
if(w!=null&&v!=null)return B.n.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.hbh.prototype={
$1(d){return d.ak()},
$S:z+12}
C.hk9.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fTn.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bVk.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eI(e,v)?v:null},
$S:2033}
C.hbT.prototype={
$1(d){var w=this
return new C.a0N(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dmE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dmD(w,d))},
$S:z+80}
C.dmD.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dms.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cM(u)?v.r>=J.ab(v.d):w)v.r=J.ab(v.d)-1},
$S:0}
C.dmp.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dm0.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dm1.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dmt.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dm9.prototype={
$1(d){var w=null,v=A.R(d).ax.a===B.I,u=v?B.eo:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bJ(!1,B.dy,w,w,!0,w,w,w,new C.dm7(d),w,w),A.bH(B.ys,w,new C.dm8(d),A.bp(B.nS,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dm7.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dm8.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dma.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.n.D(w.r-1,-1,999)},
$S:0}
C.dmq.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dmr.prototype={
$0(){return B.d.gH(D.AN)},
$S:z+14}
C.dm5.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzS(0),t=J.ab(w.d)
w=J.ab(w.d)===1?"page":"pages"
return new C.UY(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dm6.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmb.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a0i(v,u,J.ab(w.d),null)},
$S:z+40}
C.dmc.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmC.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a_X(r.y,r.gzS(0),J.ab(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dmA(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ab(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bfm(v,e,w,u,t,r.gbYs(),C.hSp(r.y.Q),r.gzS(0),s)
w=t}return A.ca(q,new C.dmB(r,e),new A.C(B.a2B,w,s))},
$S:2034}
C.dmB.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd2(t).ay){t=this.b
u=x.cy.a(B.d.gd2(u.f.f)).gvW(0)
w=t-(u==null?t:u)}else w=0
v=B.h.D(w,-1,0)
u=A.dB()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fQ(v*3.141592653589793*0.5)
return A.fJ(B.a5,A.d3(e,B.h.D(1+v*0.5,0,1)),null,u,!0)},
$S:48}
C.dmA.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aLQ(B.rf,B.iQ)},
$S:0}
C.dmm.prototype={
$0(){var w=this.a
return w.l(new C.dml(w))},
$S:0}
C.dml.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dmn.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).N(null)
return null},
$S:0}
C.dm2.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kJ.j(0.5),r=x.p,q=A.a([D.haz,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ci(p.d)?"Write this book":"Write a new book"
q.push(p.a0n(d,B.eb,w,J.ci(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a0n(d,K.asw,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cM(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cB,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.l7.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cB,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.l7.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a0n(d,X.atx,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a0n(d,B.pa,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a0n(d,B.pa,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eE(u,E.CS,A.bn(!0,new A.C(B.xi,A.w(q,B.B,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.PQ,u,B.db,u,new A.ba(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.dmo.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.dmf.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cM(w.d)
return new C.a0P(v,J.cM(w.d),w.r+1,null)},
$S:z+44}
C.dmg.prototype={
$1(d){var w=null
return A.pg(!1,A.em(w,w,w,E.CS,new A.km(this.a,new C.dme(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:309}
C.dme.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.acW,B.pv,A.E(A.c(e,w,w,w,w,w,w,B.jO,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:783}
C.dmh.prototype={
$0(){return this.a.a=!1},
$S:53}
C.dmi.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:188}
C.dmj.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BW(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.TB(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.dmd(s,t))
w=4
return A.b(s.lq(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dmd.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmv.prototype={
$1(d){var w=null
return A.pg(!1,A.em(w,w,w,E.CS,new A.km(this.a,new C.dmu(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:309}
C.dmu.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.acW,B.pv,A.E(A.c(e,w,w,w,w,w,w,B.jO,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:783}
C.dmw.prototype={
$0(){return this.a.a=!1},
$S:53}
C.dmx.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:188}
C.dmy.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:188}
C.dmz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BW(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lq(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dm3.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bok(B.rf,A4.Pp)},
$S:0}
C.dm4.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aLQ(B.rf,A4.Pp)},
$S:0}
C.doq.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dor.prototype={
$1(d){var w=this.a
return w.l(new C.dop(w))},
$S:8}
C.dop.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dos.prototype={
$1(d){var w=this.a
return w.l(new C.doo(w))},
$S:8}
C.doo.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dot.prototype={
$1(d){var w=this.a
return w.l(new C.don(w))},
$S:8}
C.don.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dou.prototype={
$0(){var w=this.a
return w.l(new C.dom(w,this.b))},
$S:0}
C.dom.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dov.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga4w()
A.a7(this.b,!1).N(new A.buu(w,v))},
$S:0}
C.dmT.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dmS.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a0L(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dmX.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dmW.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bec(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hH,v,v,v)
return A.em(A.a([A.bJ(!1,B.dy,v,v,!0,v,v,v,new C.dmU(d),v,v),A.bH(B.ys,v,new C.dmV(d),A.bp(B.nS,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.CS,w,v,v,v,v,D.h9k,v)},
$S:18}
C.dmU.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dmV.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dmY.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dmZ.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.cb(A.bX(B.bG,r,B.bq,t,18,14),B.t,t,B.y,t,t,D.bJo,t,t,B.ah)},
$S:352}
C.dmR.prototype={
$0(){return this.a.Si(0,this.b)},
$S:0}
C.dmQ.prototype={
$0(){return this.a.RH(0,this.b)},
$S:0}
C.cU5.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cU6.prototype={
$0(){return B.d.gH(D.AN)},
$S:z+14}
C.cU7.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bT(0,new A.C(d,new A.bP(new A.p(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bn,w,w),w),0,0,0)},
$S:2036}
C.dd8.prototype={
$1(d){return this.a.l(new C.dd7(this.b,this.c))},
$S:8}
C.dd7.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ddx.prototype={
$1(d){return this.a.l(new C.ddk())},
$S:2}
C.ddk.prototype={
$0(){},
$S:0}
C.ddy.prototype={
$1(d){return this.a.l(new C.ddj())},
$S:2}
C.ddj.prototype={
$0(){},
$S:0}
C.ddz.prototype={
$0(){var w=this.a
return w.l(new C.ddi(w,this.b))},
$S:0}
C.ddi.prototype={
$0(){var w=this.a
return w.d=w.goV().Hf(this.b.a)},
$S:0}
C.ddA.prototype={
$0(){var w=this.a
return w.l(new C.ddh(w,this.b))},
$S:0}
C.ddh.prototype={
$0(){var w=this.a
return w.d=w.goV().cTz(this.b)},
$S:0}
C.ddB.prototype={
$1(d){return this.a.l(new C.ddg())},
$S:2}
C.ddg.prototype={
$0(){},
$S:0}
C.ddC.prototype={
$0(){var w=this.a
return w.l(new C.ddf(w,this.b))},
$S:0}
C.ddf.prototype={
$0(){var w=this.a
return w.d=w.goV().cTE(this.b.a)},
$S:0}
C.ddD.prototype={
$1(d){var w=this.a
return w.l(new C.dds(w,d))},
$S:6}
C.dds.prototype={
$0(){var w=this.a
return w.d=w.goV().cUy(this.b)},
$S:0}
C.ddE.prototype={
$1(d){var w=this.a
return w.d=w.goV().aIN(d)},
$S:2}
C.ddF.prototype={
$1(d){var w=this.a
return w.d=w.goV().cTH(d)},
$S:2}
C.ddH.prototype={
$1(d){var w=this.a
return w.d=w.goV().cUw(d)},
$S:2}
C.ddI.prototype={
$1(d){var w=this.a
return w.l(new C.ddr(w,d))},
$S:8}
C.ddr.prototype={
$0(){var w=this.a
return w.d=w.goV().cUn(this.b)},
$S:0}
C.ddJ.prototype={
$0(){var w=this.a,v=w.goV(),u=B.a.i(w.gzS(0).a.a),t=B.a.i(w.gaFS().a.a)
u=v.biZ(B.a.i(w.gav8().a.a),t,u)
A.a7(this.b,!1).N(u)
return null},
$S:0}
C.bVu.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bVo.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bVn(w,d))},
$S:10}
C.bVn.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a2(0)}},
$S:0}
C.bVx.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bVp.prototype={
$0(){var w=this.a
w.Q=D.b5k
w.ag1(1)
w.r.x=null},
$S:0}
C.bVq.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b5k)return
w=new A.e7()
w.cV(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.dco[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bVt.prototype={
$0(){var w=this.a
w.Q=D.afB
w.ag1(2)
w.r.z=null},
$S:0}
C.bVs.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.i44
t.ag1(3)
w=t.r
w.d=s
w.x="I say: "+t.gDy()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.djU[v.aw(4)]:D.dHz[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bVv.prototype={
$0(){var w=this.a
w.Q=D.b5l
w.CW=this.b
w.cy=1
w.ag1(4)
w.r.f=w.f.a+5},
$S:0}
C.bVw.prototype={
$0(){},
$S:0}
C.bVr.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.bVl.prototype={
$0(){return this.a.Ms(this.b)},
$S:0}
C.bVm.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.bX0.prototype={
$0(){var w=this
return w.a.SB(w.b,0,w.c,w.d)},
$S:0}
C.bX1.prototype={
$0(){var w=this
return w.a.SB(w.b,3,w.c,w.d)},
$S:0}
C.bX2.prototype={
$0(){var w=this
return w.a.SB(w.b,1,w.c,w.d)},
$S:0}
C.bX3.prototype={
$0(){var w=this
return w.a.bXT(w.b,w.c,w.d)},
$S:0}
C.bX4.prototype={
$0(){var w=this
return w.a.SB(w.b,4,w.c,w.d)},
$S:0}
C.bX5.prototype={
$0(){var w=this
return w.a.SB(w.b,2,w.c,w.d)},
$S:0}
C.bX6.prototype={
$0(){var w=this
return w.a.SB(w.b,5,w.c,w.d)},
$S:0}
C.bX7.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:784}
C.bX_.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a85[d],p=q.a.a6(0,new A.m(0,-q.b*1.2*124)),o=A.h2(r,B.cK,r,3,r,A.cX(r,r,r,r,r,r,r,r,r,D.fOk,e),B.a8,B.cb,r,B.e6,B.cc)
o.nO(130)
w=o.b.a.c
w=p.aI(0,new A.m(0,w.gb4(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bx(A.c1(w,v.gb4(v)+12,u+18),B.im)
u=this.a
v=t.eN(B.dQ)
w=$.U()
s=A.M()
s.r=B.dJ.gp(0)
u.aq(v,s)
s=A.M()
s.r=D.r5.gp(0)
u.aq(t,s)
w=new A.aI(w.r,B.ak,r,r,A.a([],x.v))
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
$S:785}
C.bVL.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.bVM.prototype={
$2(d,e){var w=this.a,v=B.n.aQ(w.aoS(d),w.aoS(e))
if(v!==0)return v
return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.fH1.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.hk_.prototype={
$2(d,e){if(e!=null)J.bU(this.a.c0(0,d,new C.hk0()),e)},
$S:z+66}
C.hk0.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.hk1.prototype={
$1(d){return d!==this.a},
$S:3}
C.hk2.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hk3.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hjZ(this.c,d))},
$S:3}
C.hjZ.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hk4.prototype={
$1(d){return d!==this.a},
$S:3}
C.hk5.prototype={
$1(d){return d!==this.a},
$S:3}
C.hk6.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hjY(this.c,d))},
$S:3}
C.hjY.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fUU.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ab(w)>this.a.a},
$S:3}
C.hab.prototype={
$1(d){return d.Q},
$S:z+15}
C.hac.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fQJ.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fYa.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bQw.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hkq.prototype={
$2(d,e){return B.n.aQ(C.hOb(d),C.hOb(e))},
$S:220}
C.hkr.prototype={
$1(d){return d!==this.a},
$S:3}
C.haO.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bOE.prototype={
$0(){var w=this.a
w.ch=!0
w.bco()},
$S:0}
C.bOz.prototype={
$0(){},
$S:0}
C.bOF.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bOx.prototype={
$0(){},
$S:0}
C.bOy.prototype={
$0(){},
$S:0}
C.bOD.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bT(0,A.b5(u,u,u,new C.bg3(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.n(14)
s.push(A.ao(u,A.q(u,A.c(t.dy,u,u,u,u,u,u,D.fWd,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.m),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.aA(B.c0,new A.am(B.a0,u,B.ac,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bOA(t,e),u,u,u,u,u,u,u,new C.bOB(t,e),u,u,u,u,u,u,u,u,u,new C.bOC(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bOA.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bOC.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bOB.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bOw.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.cuO.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cuP.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cuN(w))},
$S:0}
C.cuN.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cuQ.prototype={
$0(){var w=this,v=w.a
v.gjb()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cuR.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cuS.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cuT.prototype={
$0(){},
$S:0}
C.cuU.prototype={
$0(){var w=this.a
w.z=w.YR(++w.e)
w.Q=A.c4(w.gkZ()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cuK.prototype={
$0(){return A.a7(this.a,!1).i2()},
$S:0}
C.cuL.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gjb().length,e=i/2,d=new C.cuM(i,f,h),a0=g.as,a1=A.a3(a0).k("bb<2>")
a0=A.B(new A.bb(a0,a1),a1.k("L.E"))
a0=A.bT(0,A.ca(new A.hD(a0),new C.cuF(g,new A.m(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gjb().length!==0&&!B.d.q(g.gjb(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.RD(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cS(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new T.NC(new C.cuG(g,u),new C.cuH(g,u),new C.cuI(g,u),j,j,new A.b9("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fs:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gjb().length!==0&&!B.d.q(g.gjb(),-1)){a0=g.e+1>=g.gkZ().length?"See my result":"Next family"
g=A.at(C.uS(a0,g.gqK(g),B.d0,B.jH,D.fN),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.YR(0):s).length))break
if(!B.d.q(g.gjb(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.YR(0)
o=s}else o=s
n=s[u]
n=A.e0(B.z,new C.RD(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.YR(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rz(new A.bq(0,p,t),new C.cuJ(),new T.EX(u,j,new C.RD(l.b,k,62,!1,j),new A.l3(0.25,new C.RD(m.b,k,62,!1,j),j),new A.kv(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,T.hSh(),!0,!0,j,j,j,j,j,j,!1,B.j6,j,new A.b9("chip-"+r,a0),w),B.b0,B.j5,j,new A.b9("t"+r+"-"+q,a0),v))}++u}g=A.bX(B.fL,a1,B.bq,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.am(B.a0,j,B.ac,B.t,e,j)},
$S:62}
C.cuM.prototype={
$1(d){return new A.m(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:775}
C.cuF.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gjb().length!==0&&!B.d.q(t.gjb(),-1)
return A.b5(p,p,p,new C.bfv(q.b,o,v,w,p),B.az)},
$S:52}
C.cuH.prototype={
$1(d){return this.a.gjb()[this.b]===-1},
$S:z+30}
C.cuI.prototype={
$1(d){return this.a.cXt(this.b,d.a)},
$S:z+31}
C.cuG.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gjb()[t]!==-1,r=A.n(18),q=e.length!==0?B.d0.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.d0:B.jX,B.r,2)
u=s?A.l6(new C.cuE(),A.at(new C.RD(u.gaId()[u.gjb()[t]].b,u.gaId()[u.gjb()[t]].a,62,!1,v),v,v,v),B.n3,B.j5,v,v,new A.bq(0.3,1,x.X),x.i):D.bgD
return A.cY(v,u,v,v,B.b0,new A.p(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2039}
C.cuE.prototype={
$3(d,e,f){return A.e0(B.z,f,e,null,null)},
$S:107}
C.cuJ.prototype={
$3(d,e,f){return A.dQ(f,new A.m(Math.sin(e*24)*8*(1-e),0))},
$S:107}
C.cV9.prototype={
$1(d){return d>=1},
$S:126}
C.cJK.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkZ()[w.e].d.length)w.l(new C.cJJ(w))},
$S:10}
C.cJJ.prototype={
$0(){return this.a.f++},
$S:0}
C.cJS.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cJT.prototype={
$0(){var w=this.a,v=this.b
w.z.K(0,v)
w.Q=v},
$S:0}
C.cJU.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cJR(w))},
$S:0}
C.cJR.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cJV.prototype={
$0(){return this.a.f++},
$S:0}
C.cJW.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cJX.prototype={
$0(){},
$S:0}
C.cJY.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a7(0)
w.as=!1
w.ay=0},
$S:0}
C.cJM.prototype={
$0(){return A.a7(this.a,!1).i2()},
$S:0}
C.cJN.prototype={
$3(d,e,f){var w=null
return A.l6(new C.cJL(this.a,e),w,B.b0,B.hB,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:2040}
C.cJL.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.d0.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.id(new A.C5(new A.vf(B.v.j(e),B.Ne,v,B.a_5),H.c0g(A.b5(v,v,v,new C.aDI(u.gkZ()[u.e].c,u.as,v),B.az),new A.F1(w,w,B.XZ)),v),B.ap),B.f,v,v,new A.p(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2041}
C.cJO.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,14*(1-e))),e)},
$S:92}
C.cJP.prototype={
$3(d,e,f){return A.dQ(f,new A.m(Math.sin(e*22)*8*(1-e),0))},
$S:107}
C.cJQ.prototype={
$0(){return this.a.btR(this.b)},
$S:0}
C.fiK.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.app$)
v.app$=w
v.qy$.sp(0,w)
v.atk(u)},
$S:7}
C.ft9.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a2(0)
w.a.$0()},
$S:10}
C.bWw.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bWv())},
$S:0}
C.bWv.prototype={
$0(){},
$S:0}
C.bWt.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bWr.prototype={
$0(){},
$S:0}
C.bWs.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gO3()
w=s+1>=r.length?3:5
break
case 3:q=C.bKb(p.gasa(0),0,r.length)
p.l(new C.bWo(p,q))
o=p
w=6
return A.b(C.Cf(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Cg(s.d,s.c.a,"school",p.gasa(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bWp())
w=4
break
case 5:p.l(new C.bWq(p))
p.gqR().Xn(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bWo.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bWp.prototype={
$0(){},
$S:0}
C.bWq.prototype={
$0(){return this.a.x++},
$S:0}
C.bWu.prototype={
$0(){return this.a.Ms(this.b)},
$S:0}
C.bWn.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.fiL.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.m(t,s),q=v.b,p=v.d,o=p?C.hSv(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Fm
C.Tz(q,D.eH9,0,0.2,-0.6,-0.2,null,w,D.eFT,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a6(0,new A.m(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.U()
p=A.M()
p.r=D.Hq.gp(0)
p.c=3
p.d=B.bH
q.ah(new A.m(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fiM.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Tz(this.a,D.eGf,0,u,0.7,-0.5,null,null,D.KP,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fiN.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Tz(this.a,D.eHX,0,0,0.8,-0.5,null,null,D.KP,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fiO.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Tz(w.b,D.eH3,0,v,-0.8,-0.5,null,null,D.KP,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fiP.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.m(34,-122+Math.sin(w*5)*5)
else v=v?D.eH7:D.Fm
C.Tz(p,D.eGy,0,t,0,-0.6,null,v,D.KP,3,0,s,1.3,u,0,w,0)
q=q.cgK(new A.m(222,455),9)
$.U()
w=A.M()
w.r=B.d0.gp(0)
p.af(q,w)},
$S:0}
C.fiQ.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:784}
C.bW9.prototype={
$2(d,e){return d+e},
$S:65}
C.bWk.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bWl.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bWm.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gjb()[u.b]=s
t.gjb()[u.d]=t.y
w=t.as
v=t.qy$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bWg.prototype={
$1(d){return d},
$S:99}
C.bWf.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qy$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bWh.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bWi.prototype={
$0(){},
$S:0}
C.bWj.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.GJ(++s.f)
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
C.bWb.prototype={
$0(){return A.a7(this.a,!1).i2()},
$S:0}
C.bWc.prototype={
$2(d,e){var w=this.a
w=w.gkZ()[w.f].e
return B.n.aQ(w[d],w[e])},
$S:65}
C.bWd.prototype={
$2(d,e){var w=null,v=C.hss(new A.aw(A.aU(1/0,e.a,e.b),A.aU(1/0,e.c,e.d))),u=this.a
return A.aA(B.c0,new A.ea(A.b5(w,w,w,new C.bmO(u,u.qy$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bWa(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bWa.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gjb().length
u=B.n.D(B.h.bb((t.a-s.a)/r/450*v),0,v-1)
w.d7u(w.gjb()[u])}},
$S:24}
C.bWe.prototype={
$1(d){var w=this.a
return w.gkZ()[w.f].d[d]},
$S:77}
C.dy_.prototype={
$2(d,e){return 0},
$S:65}
C.bVW.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bVV())},
$S:0}
C.bVV.prototype={
$0(){},
$S:0}
C.bVU.prototype={
$0(){},
$S:0}
C.bVO.prototype={
$0(){},
$S:0}
C.bVP.prototype={
$0(){},
$S:0}
C.bVT.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.C4},
$S:0}
C.bVS.prototype={
$1(d){var w=null,v=this.a.gqR(),u=A.c(d,w,w,w,w,w,w,D.aZh,w,w,w),t=v.gbqa(0)
return A.aA(B.c0,A.w(A.a([u,B.bs,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aZv,w,w,w)],x.p),B.B,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbwc(v),w,w,w,w,w,w,!1,B.a4)},
$S:122}
C.bVQ.prototype={
$0(){return this.a.Ms(this.b)},
$S:0}
C.bVR.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.bVN.prototype={
$0(){return A.a7(this.a,!1).i2()},
$S:0}
C.e8V.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e8W.prototype={
$1(d){return this.a},
$S:42}
C.e8X.prototype={
$0(){var w=this.a
return w.d=w.gUh().bir(this.b)},
$S:0}
C.e8T.prototype={
$1(d){return new C.UZ(this.a,null)},
$S:z+32}
C.e8U.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e8S.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hH,w,w,w)
return A.em(A.a([A.bJ(!1,E.b_V,w,w,!0,w,w,w,new C.e8Q(d),w,w),A.bJ(!1,D.hh0,w,w,!0,w,w,w,new C.e8R(d),w,w)],x.p),w,w,D.fN,v,w,w,w,w,D.h3f,w)},
$S:18}
C.e8Q.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e8R.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e8P.prototype={
$0(){var w=null,v=this.a.c.M(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e8Y.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e8Z.prototype={
$0(){var w=this.a,v=this.b,u=C.bHS(v,10,w.r,!1)
return w.v3(C.hBP(w.a.d,"kahoot",u,w.gb9U(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e9_.prototype={
$0(){var w=this.a
return w.v3(new C.anO(this.b,w.a.d,w.r,null))},
$S:0}
C.e90.prototype={
$0(){var w=this.a
return w.v3(new C.alX(this.b,w.a.d,w.r,null))},
$S:0}
C.e93.prototype={
$0(){var w=this.a
return w.v3(new C.awU(this.b,w.a.d,w.r,null))},
$S:0}
C.e94.prototype={
$0(){var w=this.a
return w.v3(new C.aAQ(this.b,w.a.d,w.r,null))},
$S:0}
C.e95.prototype={
$0(){var w=this.a
return w.v3(new C.anR(this.b,w.a.d,w.r,null))},
$S:0}
C.e96.prototype={
$0(){var w=this.a
return w.v3(new C.anV(this.b,w.a.d,w.r,null))},
$S:0}
C.e97.prototype={
$0(){var w=this.a
return w.v3(new C.anX(this.b,w.a.d,w.r,null))},
$S:0}
C.e98.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d7Y()
return v.v3(C.hBP(v.a.d,"creator_"+u.a,w,v.gb9U(),"A game by the family",t,this.c.a))},
$S:0}
C.e99.prototype={
$0(){return this.a.Q8(this.b)},
$S:0}
C.e9a.prototype={
$0(){return this.a.Zi(0,this.b)},
$S:0}
C.e91.prototype={
$0(){return this.a.Q8(null)},
$S:0}
C.e92.prototype={
$0(){return this.a.M(x.q).f.T(D.fHc)},
$S:0}
C.bW7.prototype={
$0(){var w=this.a
w.d=D.b4q
w.z=3},
$S:0}
C.bW8.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a2(0)
w.aSN()}else w.l(new C.bW6(w))},
$S:10}
C.bW6.prototype={
$0(){return this.a.z--},
$S:0}
C.bVY.prototype={
$0(){var w=this.a
w.d=D.afh
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bVZ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bVX(w))
if(w.as<=0){d.a2(0)
w.b9Q(-1)}},
$S:10}
C.bVX.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bW3.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.YF},
$S:0}
C.bW4.prototype={
$0(){return this.a.e++},
$S:0}
C.bW0.prototype={
$0(){var w=this.a
w.d=D.b4r
w.ay=this.b},
$S:0}
C.bW1.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bW5.prototype={
$2(d,e){return B.n.aQ(e.b,d.b)},
$S:2042}
C.bW2.prototype={
$0(){return this.a.Ms(this.b)},
$S:0}
C.bW_.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.bVy.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ay()
s=A.a([new A.au(new A.bd(s,B.bb,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bd(u,B.bb,B.aP),r))}return s},
$S:2043}
C.bVz.prototype={
$0(){return this.a.gE8().c.push(C.hm5(null,0,20,""))},
$S:0}
C.bVJ.prototype={
$1(d){var w=null
return A.bB(w,new A.b6(4,A.n(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dA,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.FT,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:260}
C.bVI.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gE8().c,m=this.b,l=n[m],k=o.ck1(l),j=B.c.j(0.06),i=A.n(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.M9,p,p,p),B.aY],g)
if(n.length>1)f.push(A.aJ(p,p,p,p,B.auq,p,p,p,new C.bVD(o,m),p,p,p,p,p,p))
n=J.a0(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aO(p,B.M,!1,p,!0,B.t,p,A.aP(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bVE(l),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dr,!0,B.a8,p,B.ao,p,p,p,p),B.N],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aGA[v]
t=D.aGg[v]
s=v+1
f.push(new A.C(B.ez,new A.bZ(B.aJ,B.e,B.i,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.H(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bu(1,B.b9,A.aO(p,B.M,!1,p,!0,B.t,p,A.aP(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bVF(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dr,!0,B.a8,p,B.ao,p,p,p,p),p),new Aw.Qe(v,l.c,new C.bVG(o,l),p,!1,D.m_,p,p,p,p,p,!1,!1,p,I.b58,p,p,p,p,p,w)],g),p),p))}f.push(D.h9_)
f.push(B.aj)
n=A.a([D.h2j,B.aa],g)
for(r=0;r<3;++r){q=D.ckO[r]
n.push(new A.C(B.eW,A.iB(p,p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bVH(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.q(p,A.w(f,B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.m),p,p,p,B.kN,B.bg,p,p,p)},
$S:162}
C.bVD.prototype={
$0(){var w=this.a
return w.l(new C.bVC(w,this.b))},
$S:0}
C.bVC.prototype={
$0(){return B.d.cO(this.a.gE8().c,this.b)},
$S:0}
C.bVE.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bVF.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bVG.prototype={
$1(d){return this.a.l(new C.bVB(this.b,d))},
$S:157}
C.bVB.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bVH.prototype={
$1(d){return this.a.l(new C.bVA(this.b,this.c))},
$S:8}
C.bVA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eaA.prototype={
$0(){var w=this.a
w.x8()
w.a.by()
w.a.qL()},
$S:0}
C.eaz.prototype={
$0(){var w=this.a
w.x8()
w.a.by()
w.a.qL()},
$S:0}
C.eaC.prototype={
$0(){var w=this,v=w.b
if(J.cM(v)||J.ci(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.eaD.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eaE.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eay.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.eaB.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.eaG.prototype={
$0(){this.a.Qu()
return null},
$S:0}
C.eaF.prototype={
$0(){return this.a.G2(this.b)},
$S:0}
C.ea0.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bJ(!1,B.dy,w,w,!0,w,w,w,new C.e9Z(d),w,w),r=A.bp(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bH(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.ea_(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e9Z.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.ea_.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.ea1.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cU2(this.b)},
$S:0}
C.e9W.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aYu(w.b,w.c,w.d)},
$S:7}
C.e9n.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e9o.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e9F.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HT(t.a.c),$async$$0)
case 2:s=r.nU(q.dO(e,new C.e9D(t)))
if(s!=null&&t.c!=null)t.l(new C.e9E(t,s))
t.a.by()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e9D.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e9E.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e9G.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e9H.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e9V.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cUQ(C.hSF(w),w)},
$S:0}
C.e9C.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.Xk(u,w,C.aTu(u,w),new C.e9B(v),null)},
$S:z+37}
C.e9B.prototype={
$1(d){return this.brD(d)},
brD(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e9A(s,d))
w=3
return A.b(s.v_(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:556}
C.e9A.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bir(this.b)},
$S:0}
C.e9S.prototype={
$1(d){return d.as},
$S:z+1}
C.e9T.prototype={
$1(d){var w=this
return new A.ec(new C.e9R(w.a,w.b,w.c,w.d,w.e),null)},
$S:21}
C.e9R.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.eo:B.c,h=A.n(26),g=A.K(B.bU.j(0.5),B.r,1.5),f=A.q(k,D.c_0,B.f,k,k,new A.p(B.bU.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.w(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bd,a0,A.aJ(k,k,k,k,A.V(B.cD,j?B.bv:B.bl,k,k,k,k),k,k,k,new C.e9L(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bU:B.bU.j(0.1)
p=new A.aQ(20,20)
o=t.a===r
n=new A.ax(B.bU,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bU
a0.push(A.aA(k,A.cY(k,A.c(m,k,k,k,k,k,k,new A.H(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b0,new A.p(q,k,new A.bE(n,n,n,n),new A.bc(p,p,p,p),k,k,B.m),B.he,k,k,k,k,B.Dn,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e9M(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bX(B.bG,a0,B.bq,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.cbu,new A.C(D.bJP,f,k),new A.C(D.bJG,e,k),new A.C(B.ro,a0,k),new A.C(X.apx,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.V(Al.asi,j?B.bv:B.bl,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.C(D.bJI,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,k,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.azA(k,B.bU,k,k,!1,B.y,k,k,k,k,k,k,new C.e9N(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aA)
j=A.n(20)
e=A.a([new A.ac(0,B.G,B.aB.j(0.35),B.hT,12)],x.V)
f.push(A.aA(k,A.q(k,A.A(A.a([D.h2F,B.bd,D.bO6,D.c_H],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.cfh,B.m),k,k,k,B.ih,B.bD,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e9O(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.C(B.xj,A.A(A.a([A.E(A.dV(B.dy,new C.e9P(a1),k),1),B.ar,A.E(A.bH(N.b0m,k,new C.e9Q(t,a1),A.bp(B.bU,k,k,k,k,k,B.cq,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bn(!0,A.q(k,A.cb(A.w(f,B.B,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.ap,k,k,new A.p(i,k,g,h,k,k,B.m),k,k,k,B.zA,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:89}
C.e9L.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e9M.prototype={
$0(){return this.b.$1(new C.e9K(this.a,this.c))},
$S:0}
C.e9K.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e9N.prototype={
$1(d){var w=this.a
w.l(new C.e9I(w,d))
this.b.$1(new C.e9J())},
$S:8}
C.e9I.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e9J.prototype={
$0(){},
$S:0}
C.e9O.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aJY(!0,w))
return null},
$S:0}
C.e9P.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e9Q.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aJY(!1,w))
return null},
$S:0}
C.e9U.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cUE(this.b.b)
w.r.a7(0)},
$S:0}
C.e9b.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.akH(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hL7(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e9c.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aIJ(w)},
$S:0}
C.ea3.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.afT(this.b,w,this.c,null)},
$S:z+39}
C.e9Y.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.eo:B.c,t=A.n(20),s=A.V(B.kS,B.aZ,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.w(p,B.l,w,B.e,B.P,0,B.p)
return A.em(A.a([A.bH(D.hkT,w,new C.e9X(d),A.bp(B.aZ,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.ba(t,B.a1),r,w)},
$S:18}
C.e9X.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e9d.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e9e.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e9f.prototype={
$1(d){return d.a},
$S:z+8}
C.e9g.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.ie(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aIJ(w)},
$S:0}
C.e9k.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.akH(q)
w=A.T(q).k("X<1>")
q=A.B(new A.X(q,new C.e9i(r),w),w.k("L.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hL7(v.e,null,r,v.f,v.r,new C.e9j(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e9j.prototype={
$0(){return this.a.ad7(this.b)},
$S:0}
C.e9i.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e9l.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.T(w).k("O<1,ie>")
w=A.B(new A.O(w,new C.e9h(this.b),v),v.k("aj.E"))
u.d=t.aIJ(w)},
$S:0}
C.e9h.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.ea2.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e9x.prototype={
$1(d){return d.length!==0},
$S:3}
C.e9y.prototype={
$1(d){var w=this
return new A.ec(new C.e9w(w.a,w.b,w.c,w.d),null)},
$S:21}
C.e9w.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.eo:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e9s(u,e,o),A.T(o).k("O<1,x>")))
p.push(B.N)
u=w.d
p.push(A.aO(v,B.M,!1,v,!0,B.t,v,A.aP(),u,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.n(12),B.dz),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.am,v,v,v,v,v,B.mV,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a8,v,B.ao,v,v,v,v))
p=A.w(p,B.al,v,B.e,B.P,0,B.p)
t=w.a
return A.em(A.a([A.bJ(!1,B.dy,v,v,!0,v,v,v,new C.e9t(d),v,v),A.bH(B.Ml,v,new C.e9u(t,u,o,e),A.bp(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.h7j,v,new C.e9v(t,u,o,d),A.bp(B.aZ,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:215}
C.e9s.prototype={
$1(d){var w=null
return A.dP(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aJ(w,w,w,w,D.c8g,w,w,w,new C.e9r(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2044}
C.e9r.prototype={
$0(){return this.a.$1(new C.e9p(this.b,this.c))},
$S:0}
C.e9p.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e9t.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e9u.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e9q(w.c,u))
v.bN(0,B.ck)}},
$S:0}
C.e9q.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e9v.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).N(!0)},
$S:0}
C.e9z.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cVk(this.b,D.vu,C.HR(v,w.a.c))},
$S:0}
C.eaa.prototype={
$1(d){return d.as},
$S:z+1}
C.eab.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j8(this.b,w)},
$S:0}
C.eac.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iLc(v)
return w.Y4(v==null?null:v.a)},
$S:0}
C.ead.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.il7(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcp(k)){k=A.aU(1/0,e.a,e.b)
s=A.aU(1/0,e.c,e.d)
l.cC0(new A.aw(u,t),v.gbpb(),new A.aw(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d9U:D.d7K
q=A.K(s?B.dA:D.boA,B.r,1)
p=A.n(22)
o=A.bT(0,A.b5(m,m,m,new C.biR(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.bv(p,new A.am(B.a0,m,B.ac,B.t,A.a([o,A.bT(0,A.u8(new A.Q(n,n,n,n),new A.a4(u,t,new C.bjO(l.d,v,l.f,w,new C.ea6(l),l.gcld(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bBV(s,new C.ea7(l,e),new C.ea8(l,e),new C.ea9(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.p(m,m,q,k,m,new A.a6(B.aV,B.b1,B.w,r,m,m),B.m),m,m,m,S.aow,m,m,m,m)},
$S:178}
C.ea6.prototype={
$1(d){var w=this.a
w.l(new C.ea4(w,d))},
$S:2}
C.ea4.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.K(0,v)},
$S:0}
C.ea7.prototype={
$0(){var w=this.b
return this.a.bgx(1.25,new A.aw(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.ea8.prototype={
$0(){var w=this.b
return this.a.bgx(0.8,new A.aw(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.ea9.prototype={
$0(){var w=this,v=w.b
return w.a.aYu(new A.aw(A.aU(1/0,v.a,v.b),A.aU(1/0,v.c,v.d)),new A.aw(w.c,w.d),w.e.gbpb())},
$S:0}
C.eae.prototype={
$0(){var w=this.a
return w.l(new C.ea5(w))},
$S:0}
C.ea5.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e9m.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fS(new A.fG(s.c)),$async$$0)
case 2:t.zg("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dn2.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bnF(u,C.hXA(v.c,u),new C.dn1(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dn1.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dn3.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.br3(d.d,d.c,u.f.q(0,d.a),new C.dn0(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dn0.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fUk.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nU(new A.cQ(new A.X(v,new C.fUl(d),w.k("X<1>")),new C.fUm(),w.k("cQ<1,o>")))},
$S:z+19}
C.fUl.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fUm.prototype={
$1(d){return d.a},
$S:z+8}
C.fUi.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fUj.prototype={
$1(d){return d.b},
$S:z+8}
C.fUp.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nU(new A.cQ(new A.X(v,new C.fUq(d),w.k("X<1>")),new C.fUr(),w.k("cQ<1,o>")))},
$S:z+19}
C.fUq.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fUr.prototype={
$1(d){return d.a},
$S:z+8}
C.fUn.prototype={
$1(d){var w,v=A.eB([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fUo.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dn5.prototype={
$0(){return this.a},
$S:z+46}
C.dnm.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:262}
C.dne.prototype={
$2(d,e){var w=this.a.c0(0,d,new C.dnf()),v=J.a0(w)
if(!v.q(w,e))v.K(w,e)},
$S:120}
C.dnf.prototype={
$0(){return A.a([],x.s)},
$S:786}
C.dnd.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eI(w,e)
return w===!0},
$S:263}
C.dn6.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dnc.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dnb.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aM(v==null?D.EF:v)
u=1
while(v.A())u+=s.$2(v.gO(v).a,e)
v=s.b.h(0,d)
v=J.aM(v==null?B.M:v)
while(v.A()){t=v.gO(v)
if(e.q(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aM(t==null?D.EF:t)
while(t.A())u+=s.$2(t.gO(t).a,e)}return u},
$S:2046}
C.dn7.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dng.prototype={
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
t=J.aM(t==null?D.EF:t)
while(t.A()){r=t.gO(t)
if(r.a!==a9&&!B.d.aR(w,new C.dnh(r)))w.push(r)}}B.d.bs(w,new C.dni(a8))
B.d.b_(w,new C.dnj())
q=C.il6(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.fer],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.buc(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2047}
C.dnh.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dni.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dnj.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.dnk.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a0(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bb(v,A.a3(v).k("bb<2>")).cH(0,0,B.oH)+88-w.gH(n).a}else u=0
for(w=J.a0(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:576}
C.dnl.prototype={
$1(d){return 16+d*156},
$S:155}
C.dn4.prototype={
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
$S:188}
C.dn8.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aNa(new A.m(v.a,v.b+28),new A.m(w.a,w.b+28),!0,null))},
$S:120}
C.dn9.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dna.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:787}
C.dnn.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:787}
C.dno.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:476}
C.dnp.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:169}
C.dnq.prototype={
$1(d){return d>=0.5},
$S:126}
C.fyW.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.fQ(A.aN(!1,v,!0,new A.a4(38,38,A.V(d,this.a.c?B.c:B.cx,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w,w)},
$S:2049}
C.f8r.prototype={
$1(d){var w=null,v=A.n(8),u=B.bU.j(0.12),t=A.n(8)
return new A.C(B.kO,A.aN(!1,v,!0,A.q(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fSY,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.m),w,w,w,w,B.PV,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f8q(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f8q.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dDM.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dDL.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mW,B.K,w,w)
return A.em(A.a([A.bJ(!1,B.dy,w,w,!0,w,w,w,new C.dDJ(d),w,w),A.bJ(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.nf,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dDK(d),w,w)],x.p),B.ba,B.Dh,w,u,D.bKK,w,D.bMF,new A.ba(v,B.a1),w,w)},
$S:18}
C.dDJ.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dDK.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dDV.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dDW.prototype={
$1(d){var w=this.a
return w.l(new C.dDU(w,d))},
$S:z+49}
C.dDU.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dDX.prototype={
$1(d){var w=null
return A.r7(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dE_.prototype={
$1(d){var w=this.a
return w.l(new C.dDT(w,d))},
$S:35}
C.dDT.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dDZ.prototype={
$1(d){var w=null
return A.r7(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dE0.prototype={
$1(d){var w=this.a
return w.l(new C.dDS(w,d))},
$S:35}
C.dDS.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dE1.prototype={
$0(){var w=this.a
return w.l(new C.dDR(w))},
$S:0}
C.dDR.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dE2.prototype={
$0(){var w=this.a
return w.l(new C.dDQ(w))},
$S:0}
C.dDQ.prototype={
$0(){return++this.a.at},
$S:0}
C.dE3.prototype={
$0(){var w=this.a
return w.l(new C.dDP(w))},
$S:0}
C.dDP.prototype={
$0(){return--this.a.ax},
$S:0}
C.dE4.prototype={
$0(){var w=this.a
return w.l(new C.dDO(w))},
$S:0}
C.dDO.prototype={
$0(){return++this.a.ax},
$S:0}
C.dE5.prototype={
$1(d){var w=this.a
return w.l(new C.dDN(w,d))},
$S:8}
C.dDN.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dDY.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dE6.prototype={
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
return A.E(A.aD(!1,B.a3,!0,r,A.aN(!1,o,!0,A.cY(r,A.w(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b0,new A.p(w,r,u,v,r,r,B.m),B.eN,r,r,r,r,B.jD,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dE7(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dE7.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dEg.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cj7.prototype={
$2(d,e){return new A.bw(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:100}
C.cje.prototype={
$1(d){return d.ak()},
$S:z+5}
C.cjf.prototype={
$2(d,e){var w=J.b8(e,new C.cjd(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bw(d,w,x.d2)},
$S:z+53}
C.cjd.prototype={
$1(d){return d.ak()},
$S:z+12}
C.cj9.prototype={
$1(d){return C.ao_(A.a1(d,x.N,x.z))},
$S:z+9}
C.cja.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cjb.prototype={
$1(d){return C.hBO(A.a1(d,x.N,x.z))},
$S:z+11}
C.cjc.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cjj.prototype={
$1(d){return new A.aKa(d.f.length,d.a,d.b)},
$S:z+55}
C.cjk.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:733}
C.cjg.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cjh.prototype={
$1(d){return d.cUf(C.HR(d,this.a))},
$S:z+85}
C.ean.prototype={
$1(d){return C.uT(d,this.a.a.c)},
$S:z+3}
C.eao.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.eas.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.eat.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.eak.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b48(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zT("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pW(r.c,r.e),$async$$0)
case 4:s.zT(p)
w=5
return A.b(s.Ls(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.eal.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b48(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zT("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pW(r.c,r.e),$async$$0)
case 4:s.zT(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.eam.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Xn(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zT("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zT("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zT("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Ls(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ad(j)
o=r.a
if(o.c==null){w=1
break}o.zT(B.a.eu(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.ear.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b47(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zT("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).ca(A.e4(new C.eaq(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pW(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.eaq.prototype={
$1(d){var w=this.b
return new C.a1L(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.eap.prototype={
$1(d){return D.hZt},
$S:z+58}
C.eav.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.eaw.prototype={
$1(d){var w=this.a
w=w.r?null:new C.eau(w,d)
return new A.C(B.d3,new C.bjS(this.b,d.c,d.a,w,null),null)},
$S:2050}
C.eau.prototype={
$0(){return this.a.ZX(this.b.b)},
$S:0}
C.eaf.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eag.prototype={
$0(){return this.a.d=!0},
$S:0}
C.eah.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eai.prototype={
$0(){return this.a.d=!1},
$S:0}
C.eaj.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.eax.prototype={
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
$S:238}
C.dWe.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dWf.prototype={
$0(){return B.d.gH(D.a8u)},
$S:z+60}
C.dWg.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b5(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.dhI,44),w,w,w),w,w,new C.boN(u,t,v,w),B.az)},
$S:52}
C.hcm.prototype={
$1(d){return A.oo(new C.hcl(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:134}
C.hcl.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.eo:B.c,p=A.a([new A.ac(0,B.G,B.v.j(r?0.35:0.08),B.un,24)],x.V),o=r?B.er:B.bP
o=A.q(t,t,B.f,t,t,new A.p(o,t,t,A.n(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aZ.j(0.25),B.bU.j(0.18)],x.O)
w=A.q(t,D.c2c,B.f,t,t,new A.p(t,t,t,A.n(12),t,new A.a6(B.a5,B.a9,B.w,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.ax,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.w(A.a([B.S,o,new A.C(E.apB,A.A(A.a([w,B.bd,A.E(A.w(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.ip(!0,t,e,B.y,D.fFe,new C.hck(this.b,s),20,B.ap5,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.p(q,t,t,B.lw,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:118}
C.hck.prototype={
$2(d,e){var w=null,v=D.a8u[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.K(s?B.er:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.v.j(s?0.35:0.08),B.eJ,8)],x.V),p=A.n(15),o=A.E(new C.a8L(v.a,!0,w),1),n=s?B.kf:B.iN,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.ax,w,w,w,w,w,w,w,w,13,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aD(!1,B.a3,!0,w,A.aN(!1,u,!0,A.eK(A.bv(p,A.w(A.a([o,A.q(w,A.w(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.iR,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.ap),w,new A.p(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.hcj(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:81}
C.hcj.prototype={
$0(){A.a7(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.ct5.prototype={
$0(){return this.a.ajE(this.b)},
$S:0}
C.hbJ.prototype={
$1(d){return D.hTX},
$S:z+61}
C.hjI.prototype={
$1(d){var w=this
return new C.a3C(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.hbN.prototype={
$1(d){return new C.a0n(this.a,null)},
$S:z+63}
C.hbM.prototype={
$1(d){return D.hUZ},
$S:z+64}
C.dev.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dew.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.deu(w,d))},
$S:35}
C.deu.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dex.prototype={
$1(d){return this.a.M6()},
$S:2}
C.dey.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.der.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.des.prototype={
$1(d){return this.a.M6()},
$S:2}
C.det.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cLp.prototype={
$0(){},
$S:0}
C.cLv.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cLw.prototype={
$0(){return this.a.aTG(-1)},
$S:0}
C.cLx.prototype={
$1(d){return this.a.l(new C.cLu())},
$S:2}
C.cLu.prototype={
$0(){},
$S:0}
C.cLy.prototype={
$0(){return this.a.aTG(1)},
$S:0}
C.cLz.prototype={
$1(d){return this.a.l(new C.cLt())},
$S:2}
C.cLt.prototype={
$0(){},
$S:0}
C.cLA.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aZ.j(0.2)
if(s)v=B.aZ
else v=this.b.a?B.er:B.bP
return A.vk(u,u,B.b8,r,u,new C.cLs(t,d),B.xm,s,w,u,new A.ax(v,1,B.r,-1),B.cp)},
$S:2051}
C.cLs.prototype={
$1(d){var w=this.a
return w.l(new C.cLq(w,this.b))},
$S:8}
C.cLq.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cLB.prototype={
$1(d){return this.a.l(new C.cLr())},
$S:2}
C.cLr.prototype={
$0(){},
$S:0}
C.cLC.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.fyr.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).N(w)},
$S:2}
C.fys.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.fyt.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).N(w)},
$S:0}
C.fyp.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbGI()
w=w.e
s=A.n(B.n.D(v-1,0,v))
return A.b5(new A.C(D.bME,new A.ea(A.q(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bBK(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:52}
C.fyq.prototype={
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
s=A.a([B.b8,s,B.aZ],x.O)
return A.aD(!1,B.a3,!0,p,A.aN(!1,v,!0,A.eK(D.eLP,r,new A.p(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a6(new A.dl(-1.2+t,-0.5),new A.dl(1.2-t,0.8),B.w,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:141}
C.h9Z.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:58}
C.f5B.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f5s.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f5t.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f5z.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.ec(new C.f5y(w,this.b),null)},
$S:21}
C.f5y.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.eo:B.c,t=A.n(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eE(w,u,new A.C(B.apu,A.w(A.a([s,B.aj,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hHZ(new C.f5v(r,e),r.a),B.aA,A.A(A.a([A.E(A.dV(B.dy,new C.f5w(d),w),1),B.ar,A.E(A.bH(B.XT,w,new C.f5x(r,d),A.bp(B.aZ,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.db,w,new A.ba(t,B.a1),w)},
$S:105}
C.f5v.prototype={
$1(d){return this.b.$1(new C.f5u(this.a,d))},
$S:35}
C.f5u.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f5w.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f5x.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.f5A.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.UY(this.b)},
$S:0}
C.f5n.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bix(w)},
$S:0}
C.f5r.prototype={
$1(d){return this.bs0(d)},
bs0(d){var w=0,v=A.j(x.H),u,t=this,s
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
C.f5q.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.T(w).k("X<1>")
w=A.B(new A.X(w,new C.f5p(this.b),v),v.k("L.E"))
u.d=t.bix(w)},
$S:0}
C.f5p.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f5C.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j8(this.b,w)},
$S:0}
C.f5D.prototype={
$1(d){return this.a.bKY(d,this.b)},
$S:z+67}
C.f5o.prototype={
$0(){return this.a.ad6(this.b)},
$S:0}
C.hjv.prototype={
$1(d){return new C.agd(this.a,this.b,this.c,null)},
$S:z+68}
C.f5F.prototype={
$0(){return this.a.a23(this.b)},
$S:0}
C.f5G.prototype={
$0(){return this.a.Se(this.b)},
$S:0}
C.f5H.prototype={
$0(){return this.a.FX(this.b)},
$S:0}
C.f5I.prototype={
$0(){return this.a.a24(this.b)},
$S:0}
C.f5E.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f5i.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f5j.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f5k.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f5m.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qQ(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f5l(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5l.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f64.prototype={
$2(d,e){return d+e.gyq()},
$S:z+71}
C.f60.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f61.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f5M.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.eo:B.c,s=A.n(24),r=A.q(v,D.c2G,B.f,v,v,new A.p(B.aC.j(u?0.18:0.08),v,A.K(B.aC.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.ax
u=u?B.er:B.bP
w=x.p
return A.eE(v,t,new A.C(B.xl,A.w(A.a([r,B.aN,q,B.N,p,B.df,A.A(A.a([A.E(A.dV(B.oC,new C.f5K(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fc,v,new A.ba(A.n(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bH(D.hoT,v,new C.f5L(d),A.bp(B.aC,v,v,v,v,v,B.fc,v,new A.ba(A.n(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,v,B.db,v,new A.ba(s,B.a1),v)},
$S:46}
C.f5K.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.f5L.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.f5V.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.eo:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.v.j(k?0.35:0.08),B.fy,28)],x.V),g=k?D.dpZ:At.a7L,f=x.p
g=A.q(m,A.w(A.a([A.q(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.n(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aA,D.fyj,B.at,new A.bK(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cE,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a6(B.aw,B.aD,B.w,g,m,m),B.m),m,m,m,m,E.apz,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.bbk(B.b2,B.jJ,new C.f5S(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.bbk(B.cJ,Q.At,new C.f5T(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.aC.j(k?0.14:0.06)
q=A.n(16)
p=A.K(B.aC.j(0.28),B.r,1)
o=A.q(m,D.c1Y,B.f,m,m,new A.p(B.aC.j(0.12),m,m,A.n(12),m,m,B.m),m,m,m,m,B.bS,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.ax,m,m,m,m,m,m,m,m,m,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.i,0,B.p),1)
return A.bn(!0,new A.C(B.xg,A.q(m,A.w(A.a([g,new A.C(B.apv,A.w(A.a([w,B.S,u,B.bx,t,B.S,A.aD(!1,B.a3,!0,m,A.aN(!1,s,!0,A.q(m,A.A(A.a([o,B.bd,n,A.V(B.eP,k?B.bv:B.bl,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.m),m,m,m,m,B.bD,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f5U(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.ap,m,m,new A.p(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:30}
C.f5S.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.wG("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5T.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.wG("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5U.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.PK(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5Q.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.eo:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.v.j(o?0.35:0.08),B.eS,24)],x.V),k=o?B.er:B.bP
k=A.q(q,q,B.f,q,q,new A.p(k,q,q,A.n(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bv:B.bl
u=A.bv(w,new A.a4(48,48,C.aUW(!0,A.n(12),48,P.QB,u,v.c,48),q),B.ap)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BP(v.gyq())
s=x.p
r=this.a
return A.bn(!0,new A.C(B.xg,A.q(q,A.w(A.a([B.S,k,new A.C(D.aps,A.A(A.a([u,B.bd,A.E(A.w(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.D7,r.cvW(B.vO,B.aZ,new C.f5O(d),p,"QR code or backup file","Transfer project"),r.b8i(!0,B.et,B.aC,new C.f5P(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:30}
C.f5O.prototype={
$0(){A.a7(this.a,!1).N("transfer")
return null},
$S:0}
C.f5P.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
C.f5R.prototype={
$1(d){return this.bs1(d)},
bs1(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.MS(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wW(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f67.prototype={
$0(){var w=this.a
w.a.by()
w.l(new C.f66(w))},
$S:0}
C.f66.prototype={
$0(){return this.a.r++},
$S:0}
C.f68.prototype={
$0(){var w=this.a
return w.l(new C.f65(w))},
$S:0}
C.f65.prototype={
$0(){return this.a.r++},
$S:0}
C.f5J.prototype={
$0(){var w=this.a.c
w.toString
return A.j8(w,null)},
$S:0}
C.f5N.prototype={
$0(){return this.a.coY(this.b)},
$S:0}
C.f63.prototype={
$0(){var w=this.a
return w.l(new C.f62(w,this.b))},
$S:0}
C.f62.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f5Y.prototype={
$0(){return this.a.wG("scan")},
$S:0}
C.f5Z.prototype={
$0(){return this.a.wG("file")},
$S:0}
C.f6_.prototype={
$1(d){return this.a.cvX(d,this.b)},
$S:z+72}
C.f5X.prototype={
$0(){return this.a.G0(this.b)},
$S:0}
C.f5W.prototype={
$0(){return this.a.a2C(this.b,this.c)},
$S:0}
C.cKL.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cKK.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cKI.prototype={
$1(d){return C.i2T(A.a1(d,x.N,x.z))},
$S:z+75}
C.cKJ.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fTd.prototype={
$1(d){return d.y===D.lf},
$S:z+3}
C.hkh.prototype={
$1(d){return C.aTu(d,this.a)},
$S:z+3}
C.fQI.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bWD.prototype={
$1(d){return!d.as},
$S:z+1}
C.bWC.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bWz.prototype={
$1(d){return C.hBQ(A.a1(d,x.N,x.z))},
$S:z+24}
C.bWA.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bWB.prototype={
$1(d){return J.k(d)},
$S:15}
C.fGz.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fC_.prototype={
$1(d){return C.hqZ(A.a1(d,x.N,x.z))},
$S:z+79}
C.fC0.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fC1.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.hbx.prototype={
$1(d){return J.k(d)},
$S:15}
C.hby.prototype={
$1(d){return d.a},
$S:z+81}
C.hbz.prototype={
$1(d){return d.length!==0},
$S:3}
C.hbA.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.hbB.prototype={
$1(d){return d.UY(null).ak()},
$S:z+82}
C.hkf.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fTH.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fXk.prototype={
$1(d){return C.ao_(A.a1(d,x.N,x.z))},
$S:z+9}
C.fXl.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fXm.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fXn.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fXo.prototype={
$1(d){return C.uT(d,this.a)},
$S:z+3}
C.hbj.prototype={
$1(d){return C.uT(d,this.a)},
$S:z+3}
C.hka.prototype={
$1(d){return C.ao_(A.a1(d,x.N,x.z))},
$S:z+9}
C.hkb.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.hkc.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fTo.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fTp.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hkl.prototype={
$1(d){return!d.as},
$S:z+1}
C.fST.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fSU.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fSV.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.hjJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fYb.prototype={
$1(d){return d.Q},
$S:z+15}
C.hbc.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fXh.prototype={
$1(d){return C.ao_(A.a1(d,x.N,x.z))},
$S:z+9}
C.fXi.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fXj.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.hb7.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fCD.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCE.prototype={
$1(d){return C.hBQ(A.a1(d,x.N,x.z))},
$S:z+24}
C.fCF.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fCG.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fCH.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCV.prototype={
$2(d,e){return d.eH(new C.fCW(e))},
$S:2052}
C.fCW.prototype={
$1(d){$.an.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.co},
$S:2053}
C.fCS.prototype={
$1(d){return C.iqj(d,this.a)},
$S:z+84}
C.fCT.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fCU.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fHk.prototype={
$1(d){return d.a},
$S:z+56}
C.fHl.prototype={
$1(d){return d.length!==0},
$S:3}
C.fHm.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fKl.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fPT.prototype={
$1(d){return C.hNK(d,C.HR(d,this.a))},
$S:z+5}
C.fPU.prototype={
$1(d){return C.hNL(d,C.HR(d,this.a))},
$S:z+5};(function aliases(){var w=C.aDK.prototype
w.bzU=w.t
w=C.aBP.prototype
w.bzP=w.t
w=C.aJl.prototype
w.bAh=w.t
w=C.aDL.prototype
w.bzV=w.t
w=C.aDN.prototype
w.bzW=w.t
w=C.aDO.prototype
w.bzX=w.t
w=C.aPD.prototype
w.bCL=w.t
w=C.aRL.prototype
w.bF5=w.t
w=C.aRM.prototype
w.bF6=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aGN.prototype,"gcsK","csL",28)
var r
w(r=C.aDJ.prototype,"gclj","clk",65)
v(r,"gaRR","Pg",0)
v(r,"gcBj","Cm",0)
v(r,"gbSV","PZ",0)
v(r,"gcQd","zU",0)
v(r,"gcuU","a3m",0)
v(r,"gbOd","PG",0)
v(r,"gbTk","Zn",0)
w(r,"gbYs","bYt",78)
v(r,"gbIo","Be",0)
v(C.aDM.prototype,"gcQ9","GV",0)
v(r=C.anP.prototype,"gbwe","bwf",2)
v(r,"gbw6","bw7",2)
v(r,"gcRh","cRi",2)
u(r,"gqK","kU",0)
u(r=C.alY.prototype,"gf6","fY",2)
w(r,"gcmm","cmn",27)
u(C.awV.prototype,"gqK","kU",0)
v(r=C.aAR.prototype,"gd20","d21",2)
u(r,"gqK","kU",0)
u(C.aNg.prototype,"gbwc","bwd",2)
v(C.anY.prototype,"gCV","cRu",2)
u(r=C.anW.prototype,"gcSb","cSc",2)
u(r,"gqK","kU",0)
v(r=C.anS.prototype,"gbv4","bv5",2)
v(r,"gcXr","cXs",2)
u(r=C.anU.prototype,"gf6","fY",2)
u(r,"giL","cQN",2)
v(r=C.anQ.prototype,"gcQC","cQD",2)
u(r,"gbtY","jE",2)
v(r=C.aHn.prototype,"gajg","wX",0)
v(r,"gco9","a2s",0)
v(r,"gaW7","JC",0)
v(r=C.aHk.prototype,"gcM_","a5y",0)
v(r,"gajg","wX",0)
v(r,"gczg","a41",0)
v(r,"gco1","b6u",2)
v(r,"gcpa","a2I",0)
w(r,"gcld","cle",35)
v(r,"gbTc","JH",0)
v(r,"gcN9","cNa",2)
v(r,"gcaB","a0a",0)
w(r,"gcjI","cjJ",36)
v(r,"gcnQ","cnR",2)
v(r=C.aFL.prototype,"gcgN","RJ",0)
v(r,"gcgP","cgQ",2)
v(r,"gbPI","acJ",0)
v(r=C.aHm.prototype,"gbWP","ZT",0)
v(r,"gc6q","a_z",0)
v(r,"gcFU","a4W",0)
v(r,"gcBV","a4v",0)
v(C.aHl.prototype,"gcBC","al3",0)
v(C.aw8.prototype,"gcjG","a21",0)
v(C.aCr.prototype,"ga5g","M6",2)
v(C.aCq.prototype,"ga5g","M6",2)
v(C.aB2.prototype,"ga5g","M6",2)
v(r=C.aIW.prototype,"gb7G","SK",0)
v(r,"gbHc","XZ",0)
v(r,"gcoZ","cp_",2)
w(C.aIV.prototype,"gcky","ckz",69)
t(C.aIX.prototype,"gaW2",0,0,null,["$1","$0"],["JB","bR2"],70,0,0)
s(C,"hWE","iAW",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aG,[C.arA,C.vh,C.nR,C.J_,C.ahs,C.Ln,C.vi,C.bX8,C.tB,C.bsl,C.ao6,C.afv,C.lT,C.bVK,C.awj,C.A4,C.amF,C.Nt,C.bdw,C.abx,C.bkY,C.ahz,C.aC4,C.ahn,C.aNg,C.Lv,C.H9,C.bjQ,C.aNa,C.at0,C.dnr,C.mq,C.aXU,C.aXT,C.aVX,C.uD,C.rR,C.m6,C.ie,C.lj,C.aL6])
u(A.hs,[C.h1q,C.h1p,C.h1r,C.hcf,C.fOr,C.fOs,C.fOx,C.fZU,C.fZT,C.fZS,C.cbY,C.hcN,C.hcF,C.hcR,C.fTw,C.dWW,C.dWR,C.dWS,C.dWu,C.dWq,C.dXa,C.dXb,C.dX4,C.dX5,C.dXc,C.dXd,C.fUg,C.fXe,C.fXf,C.hbh,C.hk9,C.fTn,C.hbT,C.dmE,C.dm0,C.dm9,C.dmq,C.dm5,C.dmb,C.dm2,C.dmf,C.dmg,C.dme,C.dmv,C.dmu,C.dor,C.dos,C.dot,C.dmS,C.dmX,C.dmW,C.cU5,C.cU7,C.dd8,C.ddx,C.ddy,C.ddB,C.ddD,C.ddE,C.ddF,C.ddH,C.ddI,C.bVu,C.bVo,C.fH1,C.hk1,C.hk2,C.hk3,C.hjZ,C.hk4,C.hk5,C.hk6,C.hjY,C.fUU,C.hab,C.fQJ,C.fYa,C.bQw,C.hkr,C.haO,C.bOF,C.bOA,C.bOC,C.bOB,C.cuM,C.cuH,C.cuI,C.cuG,C.cuE,C.cuJ,C.cV9,C.cJK,C.cJN,C.cJL,C.cJO,C.cJP,C.fiK,C.ft9,C.bWg,C.bWa,C.bWe,C.bVS,C.e8W,C.e8T,C.e8U,C.e8S,C.e8Y,C.bW8,C.bVZ,C.bVJ,C.bVI,C.bVE,C.bVF,C.bVG,C.bVH,C.eaB,C.ea0,C.e9W,C.e9n,C.e9D,C.e9G,C.e9C,C.e9B,C.e9S,C.e9T,C.e9N,C.e9b,C.ea3,C.e9Y,C.e9d,C.e9e,C.e9f,C.e9k,C.e9i,C.e9h,C.e9x,C.e9y,C.e9s,C.eaa,C.ea6,C.dn2,C.dn3,C.fUk,C.fUl,C.fUm,C.fUi,C.fUj,C.fUp,C.fUq,C.fUr,C.fUn,C.fUo,C.dnm,C.dnc,C.dn7,C.dnh,C.dni,C.dnl,C.dn9,C.dno,C.dnp,C.dnq,C.fyW,C.f8r,C.dDL,C.dDV,C.dDW,C.dDX,C.dE_,C.dDZ,C.dE0,C.dE5,C.dE6,C.cje,C.cjd,C.cj9,C.cja,C.cjb,C.cjc,C.cjj,C.cjg,C.cjh,C.ean,C.eaq,C.eap,C.eaw,C.eax,C.dWe,C.hcm,C.hbJ,C.hjI,C.hbN,C.hbM,C.dew,C.dex,C.des,C.cLx,C.cLz,C.cLA,C.cLs,C.cLB,C.fyr,C.h9Z,C.f5z,C.f5v,C.f5r,C.f5p,C.f5D,C.hjv,C.f5M,C.f5V,C.f5Q,C.f5R,C.f6_,C.cKK,C.cKI,C.cKJ,C.fTd,C.hkh,C.fQI,C.bWD,C.bWC,C.bWz,C.bWA,C.bWB,C.fC_,C.fC0,C.hbx,C.hby,C.hbz,C.hbA,C.hbB,C.hkf,C.fTH,C.fXk,C.fXl,C.fXn,C.fXo,C.hbj,C.hka,C.hkb,C.hkc,C.fTo,C.fTp,C.hkl,C.fST,C.fSU,C.hjJ,C.fYb,C.hbc,C.fXh,C.fXi,C.hb7,C.fCD,C.fCE,C.fCF,C.fCG,C.fCH,C.fCW,C.fCS,C.fCT,C.fHk,C.fHl,C.fKl,C.fPT,C.fPU])
u(A.av,[C.b2w,C.anN,C.aZb,C.a_X,C.bfm,C.RD,C.a7Z,C.u1,C.J1,C.bjO,C.bnF,C.bBV,C.br3,C.afS,C.bnE,C.afR,C.bnD,C.aFM,C.aMc,C.afT,C.H5,C.bjP,C.af6,C.bjN,C.bjS,C.b2u,C.aw8,C.agd])
u(A.lS,[C.bg1,C.bhg,C.bh7,C.aL0,C.bmG,C.bsk,C.aZg,C.bg3,C.aDI,C.bfv,C.bwt,C.bmO,C.bmd,C.bmk,C.bjR,C.biR,C.boN,C.bBK])
u(A.j0,[C.hcK,C.hcL,C.hcM,C.hcD,C.hcE,C.hcP,C.hcQ,C.dX7,C.dWU,C.dWX,C.dWB,C.dWC,C.dWD,C.dWA,C.dWI,C.dWz,C.dWJ,C.dWK,C.dWy,C.dWL,C.dWx,C.dWM,C.dWw,C.dWN,C.dWo,C.dWp,C.dWv,C.dWO,C.dWt,C.dWP,C.dWs,C.dWE,C.dWr,C.dWF,C.dWn,C.dWG,C.dWH,C.dX8,C.dX9,C.dWY,C.dWZ,C.dX_,C.dX0,C.dX1,C.dX2,C.dX3,C.dXf,C.dX6,C.fUh,C.dlZ,C.dlX,C.dlY,C.dm_,C.dmD,C.dms,C.dmp,C.dm1,C.dmt,C.dm7,C.dm8,C.dma,C.dmr,C.dm6,C.dmc,C.dmA,C.dmm,C.dml,C.dmn,C.dmo,C.dmh,C.dmj,C.dmk,C.dmd,C.dmw,C.dmz,C.dm3,C.dm4,C.doq,C.dop,C.doo,C.don,C.dou,C.dom,C.dov,C.dmT,C.dmU,C.dmV,C.dmY,C.dmR,C.dmQ,C.cU6,C.dd7,C.ddk,C.ddj,C.ddz,C.ddi,C.ddA,C.ddh,C.ddg,C.ddC,C.ddf,C.dds,C.ddr,C.ddJ,C.bVn,C.bVx,C.bVp,C.bVq,C.bVt,C.bVs,C.bVv,C.bVw,C.bVr,C.bVl,C.bVm,C.bX0,C.bX1,C.bX2,C.bX3,C.bX4,C.bX5,C.bX6,C.hk0,C.hac,C.bOE,C.bOz,C.bOx,C.bOy,C.bOw,C.cuO,C.cuP,C.cuN,C.cuQ,C.cuS,C.cuT,C.cuU,C.cuK,C.cJJ,C.cJS,C.cJT,C.cJU,C.cJR,C.cJV,C.cJW,C.cJX,C.cJY,C.cJM,C.cJQ,C.bWw,C.bWv,C.bWt,C.bWr,C.bWs,C.bWo,C.bWp,C.bWq,C.bWu,C.bWn,C.fiL,C.fiM,C.fiN,C.fiO,C.fiP,C.bWk,C.bWl,C.bWm,C.bWf,C.bWh,C.bWi,C.bWj,C.bWb,C.bVW,C.bVV,C.bVU,C.bVO,C.bVP,C.bVT,C.bVQ,C.bVR,C.bVN,C.e8V,C.e8X,C.e8Q,C.e8R,C.e8P,C.e8Z,C.e9_,C.e90,C.e93,C.e94,C.e95,C.e96,C.e97,C.e98,C.e99,C.e9a,C.e91,C.e92,C.bW7,C.bW6,C.bVY,C.bVX,C.bW3,C.bW4,C.bW0,C.bW1,C.bW2,C.bW_,C.bVy,C.bVz,C.bVD,C.bVC,C.bVB,C.bVA,C.eaA,C.eaz,C.eaC,C.eaD,C.eaE,C.eay,C.eaG,C.eaF,C.e9Z,C.ea_,C.ea1,C.e9o,C.e9F,C.e9E,C.e9H,C.e9V,C.e9A,C.e9L,C.e9M,C.e9K,C.e9I,C.e9J,C.e9O,C.e9P,C.e9Q,C.e9U,C.e9c,C.e9X,C.e9g,C.e9j,C.e9l,C.ea2,C.e9r,C.e9p,C.e9t,C.e9u,C.e9q,C.e9v,C.e9z,C.eab,C.eac,C.ea4,C.ea7,C.ea8,C.ea9,C.eae,C.ea5,C.e9m,C.dn1,C.dn0,C.dn5,C.dnf,C.dn6,C.f8q,C.dDM,C.dDJ,C.dDK,C.dDU,C.dDT,C.dDS,C.dE1,C.dDR,C.dE2,C.dDQ,C.dE3,C.dDP,C.dE4,C.dDO,C.dDN,C.dDY,C.dE7,C.dEg,C.eao,C.eas,C.eat,C.eak,C.eal,C.eam,C.ear,C.eav,C.eau,C.eaf,C.eag,C.eah,C.eai,C.eaj,C.dWf,C.hcj,C.ct5,C.dev,C.deu,C.dey,C.der,C.det,C.cLp,C.cLv,C.cLw,C.cLu,C.cLy,C.cLt,C.cLq,C.cLr,C.cLC,C.fys,C.fyt,C.f5B,C.f5s,C.f5t,C.f5u,C.f5w,C.f5x,C.f5A,C.f5n,C.f5q,C.f5C,C.f5o,C.f5F,C.f5G,C.f5H,C.f5I,C.f5E,C.f5i,C.f5j,C.f5k,C.f5m,C.f5l,C.f60,C.f61,C.f5K,C.f5L,C.f5S,C.f5T,C.f5U,C.f5O,C.f5P,C.f67,C.f66,C.f68,C.f65,C.f5J,C.f5N,C.f63,C.f62,C.f5Y,C.f5Z,C.f5X,C.f5W])
u(A.af,[C.arN,C.UY,C.a0L,C.a0P,C.a0N,C.a0i,C.anO,C.alX,C.awU,C.aAQ,C.anX,C.anV,C.anR,C.Xk,C.anT,C.UZ,C.at3,C.asY,C.a1r,C.at1,C.a1L,C.a1M,C.a8L,C.a0n,C.a0m,C.a_N,C.a3C,C.GV,C.aAW,C.aw7,C.aw1,C.aw6,C.PR])
u(A.ai,[C.aGN,C.bjI,C.aDJ,C.bk6,C.aDM,C.bhe,C.aDK,C.aBP,C.aJl,C.aAR,C.aDO,C.aDN,C.aDL,C.bp9,C.anU,C.anQ,C.aHn,C.aHk,C.aFL,C.aHm,C.aHl,C.bpa,C.aPD,C.aCr,C.aCq,C.aB2,C.bBN,C.aRL,C.aRM,C.aIW,C.bqz,C.aIV,C.bDz])
u(A.j1,[C.dWT,C.dWV,C.dWQ,C.dXe,C.fXg,C.bVk,C.dmC,C.dmB,C.dmi,C.dmx,C.dmy,C.dmZ,C.bX7,C.bX_,C.bVL,C.bVM,C.hk_,C.hkq,C.bOD,C.cuR,C.cuL,C.cuF,C.fiQ,C.bW9,C.bWc,C.bWd,C.dy_,C.bW5,C.e9R,C.e9w,C.ead,C.dne,C.dnd,C.dnb,C.dng,C.dnj,C.dnk,C.dn4,C.dn8,C.dna,C.dnn,C.cj7,C.cjf,C.cjk,C.dWg,C.hcl,C.hck,C.fyp,C.fyq,C.f5y,C.f64,C.cKL,C.fGz,C.fC1,C.fXm,C.fSV,C.fXj,C.fCV,C.fCU,C.fHm])
u(A.lo,[C.a36,C.ahB,C.a3p,C.a1d,C.ae7,C.aNY,C.J0,C.anZ,C.cKM,C.cKN])
t(C.anP,C.aDK)
t(C.alY,C.aBP)
t(C.awV,C.aJl)
t(C.bjM,C.aDO)
t(C.anY,C.bjM)
t(C.bjL,C.aDN)
t(C.anW,C.bjL)
t(C.bjK,C.aDL)
t(C.anS,C.bjK)
t(C.boO,C.aPD)
t(C.bBL,C.aRL)
t(C.bBM,C.aRM)
t(C.aIX,C.bDz)
t(C.bdK,A.bdx)
t(C.bBO,A.a8p)
t(C.bdJ,C.bBO)
w(C.aDK,A.cm)
w(C.aBP,A.cm)
w(C.aJl,A.eZ)
w(C.aDL,A.cm)
v(C.bjK,C.ahn)
w(C.aDN,A.cm)
v(C.bjL,C.ahn)
w(C.aDO,A.cm)
v(C.bjM,C.ahn)
w(C.aPD,A.eZ)
w(C.aRL,A.cm)
w(C.aRM,A.cm)
v(C.bDz,A.eH)
v(C.bBO,A.jA)})()
A.jj(b.typeUniverse,JSON.parse('{"b2w":{"av":[],"x":[]},"bg1":{"aC":[]},"arN":{"af":[],"x":[]},"aGN":{"ai":["arN"]},"UY":{"af":[],"x":[]},"anN":{"av":[],"x":[]},"aZb":{"av":[],"x":[]},"bjI":{"ai":["UY"]},"a0L":{"af":[],"x":[]},"a0P":{"af":[],"x":[]},"a0N":{"af":[],"x":[]},"a0i":{"af":[],"x":[]},"aDJ":{"ai":["a0L"]},"bk6":{"ai":["a0P"]},"aDM":{"ai":["a0N"]},"a_X":{"av":[],"x":[]},"bhg":{"aC":[]},"bh7":{"aC":[]},"bhe":{"ai":["a0i"]},"aL0":{"aC":[]},"bmG":{"aC":[]},"bfm":{"av":[],"x":[]},"anO":{"af":[],"x":[]},"anP":{"ai":["anO"]},"bsk":{"aC":[]},"aZg":{"aC":[]},"alX":{"af":[],"x":[]},"awU":{"af":[],"x":[]},"aAQ":{"af":[],"x":[]},"alY":{"ai":["alX"]},"bg3":{"aC":[]},"RD":{"av":[],"x":[]},"aDI":{"aC":[]},"awV":{"ai":["awU"]},"bfv":{"aC":[]},"aAR":{"ai":["aAQ"]},"anX":{"af":[],"x":[]},"anV":{"af":[],"x":[]},"anR":{"af":[],"x":[]},"anY":{"ai":["anX"]},"bwt":{"aC":[]},"anW":{"ai":["anV"]},"bmO":{"aC":[]},"anS":{"ai":["anR"]},"bmd":{"aC":[]},"Xk":{"af":[],"x":[]},"anT":{"af":[],"x":[]},"UZ":{"af":[],"x":[]},"a7Z":{"av":[],"x":[]},"bmk":{"aC":[]},"u1":{"av":[],"x":[]},"J1":{"av":[],"x":[]},"bp9":{"ai":["Xk"]},"anU":{"ai":["anT"]},"anQ":{"ai":["UZ"]},"at3":{"af":[],"x":[]},"asY":{"af":[],"x":[]},"a1r":{"af":[],"x":[]},"afT":{"av":[],"x":[]},"aHn":{"ai":["at3"]},"aHk":{"ai":["asY"]},"bjO":{"av":[],"x":[]},"bjR":{"aC":[]},"bnF":{"av":[],"x":[]},"biR":{"aC":[]},"bBV":{"av":[],"x":[]},"br3":{"av":[],"x":[]},"aFL":{"ai":["a1r"]},"afS":{"av":[],"x":[]},"bnE":{"av":[],"x":[]},"afR":{"av":[],"x":[]},"bnD":{"av":[],"x":[]},"aFM":{"av":[],"x":[]},"aMc":{"av":[],"x":[]},"H5":{"av":[],"x":[]},"at1":{"af":[],"x":[]},"a1L":{"af":[],"x":[]},"a1M":{"af":[],"x":[]},"aHm":{"ai":["at1"]},"bjP":{"av":[],"x":[]},"af6":{"av":[],"x":[]},"bjN":{"av":[],"x":[]},"bjS":{"av":[],"x":[]},"aHl":{"ai":["a1L"]},"bpa":{"ai":["a1M"]},"b2u":{"av":[],"x":[]},"a8L":{"af":[],"x":[]},"boO":{"ai":["a8L"]},"boN":{"aC":[]},"aw8":{"av":[],"x":[]},"a0n":{"af":[],"x":[]},"a0m":{"af":[],"x":[]},"a_N":{"af":[],"x":[]},"a3C":{"af":[],"x":[]},"aCr":{"ai":["a0n"]},"aCq":{"ai":["a0m"]},"aB2":{"ai":["a_N"]},"bBN":{"ai":["a3C"]},"GV":{"af":[],"x":[]},"aAW":{"af":[],"x":[]},"bBL":{"ai":["GV"]},"bBM":{"ai":["aAW"]},"bBK":{"aC":[]},"aw7":{"af":[],"x":[]},"aIW":{"ai":["aw7"]},"agd":{"av":[],"x":[]},"aw1":{"af":[],"x":[]},"aw6":{"af":[],"x":[]},"bqz":{"ai":["aw1"]},"aIV":{"ai":["aw6"]},"PR":{"af":[],"x":[]},"aIX":{"ai":["PR"],"eH":[]},"bdJ":{"jA":[],"fs":[]}}'))
A.Sb(b.typeUniverse,JSON.parse('{"ahn":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aVX"),cq:w("mK"),Q:w("rR"),r:w("bl<o,o>"),c5:w("aXT"),dY:w("aXU"),fH:w("Nt"),de:w("amF"),dN:w("NC<F>"),gc:w("EX<F>"),A:w("eS<o?>"),e:w("J_"),B:w("nR"),P:w("ie"),df:w("lT"),k:w("lj"),x:w("az<~>"),U:w("N<a5L>"),V:w("N<ac>"),C:w("N<rR>"),O:w("N<u>"),c:w("N<Nt>"),b:w("N<amF>"),ac:w("N<eS<o?>>"),I:w("N<nR>"),u:w("N<ie>"),J:w("N<lT>"),_:w("N<lj>"),cl:w("N<az<ah<a9<o,@>>>>"),R:w("N<mO>"),eU:w("N<ah<+(G,G)>>"),ez:w("N<a9<o,aG>>"),gE:w("N<a9<o,o>>"),Y:w("N<a9<o,@>>"),fD:w("N<ne>"),bp:w("N<pb>"),g:w("N<m>"),ar:w("N<awj>"),v:w("N<h1>"),gy:w("N<abx>"),L:w("N<+(o,o)>"),G:w("N<+(G,G)>"),E:w("N<+(G,~())>"),bd:w("N<+(o,F,P)>"),bF:w("N<+count,id,name(F,o,o)>"),F:w("N<d4>"),s:w("N<o>"),cF:w("N<au>"),aS:w("N<jr>"),dT:w("N<bdw>"),p:w("N<x>"),Z:w("N<fs>"),D:w("N<m6>"),h:w("N<aC4>"),cC:w("N<bkY>"),fp:w("N<Ln>"),M:w("N<Lv>"),gZ:w("N<aL6>"),gA:w("N<ahs>"),e4:w("N<ahz>"),dE:w("N<aNa>"),f7:w("N<P>"),n:w("N<G>"),t:w("N<F>"),dS:w("N<aC?>"),d4:w("N<o?>"),eF:w("cB<ai<af>>"),d:w("ah<nR>"),do:w("ah<ie>"),cg:w("ah<lT>"),ax:w("ah<lj>"),fO:w("ah<a9<o,@>>"),cz:w("ah<+(o,o)>"),bC:w("ah<+count,id,name(F,o,o)>"),dy:w("ah<o>"),er:w("ah<au>"),gk:w("ah<m6>"),j:w("ah<@>"),fK:w("bw<o,o>"),d2:w("bw<o,ah<a9<o,@>>>"),a:w("a9<o,@>"),f:w("a9<@,@>"),gv:w("O<o,J2>"),cM:w("O<F,o>"),w:w("it"),g2:w("tc"),bV:w("arA"),fL:w("cr"),K:w("aG"),dc:w("h1"),fo:w("Qe<F>"),fz:w("+(o,o)"),ei:w("+scope,text(o,o)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(G,ah<ie>)"),cs:w("+count,id,name(F,o,o)"),N:w("o"),fT:w("ib<ie>"),ec:w("ib<o>"),gW:w("rz<G>"),X:w("bq<G>"),bW:w("dG"),W:w("b9<o>"),b4:w("b9<F>"),cI:w("km<o>"),av:w("X<A4>"),cc:w("X<o>"),l:w("x"),gF:w("fs"),fA:w("m6"),dO:w("H9"),bw:w("afR<o?>"),cy:w("Lx"),q:w("l7"),y:w("P"),i:w("G"),z:w("@"),S:w("F"),eK:w("ah<lj>?"),m:w("at0?"),cT:w("m?"),h5:w("+(o,o)?"),eo:w("+code,qrPayload,usesRemaining(o,o,F)?"),he:w("+qrPayload,token,usesRemaining(o,o,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("oG?"),T:w("o?"),aD:w("dG?"),o:w("m6?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b94=new A.bc(B.h5,B.bJ,B.h5,B.bJ)
D.agv=new A.bc(B.h5,B.ia,B.h5,B.ia)
D.b9j=new A.bc(B.jL,B.bJ,B.bJ,B.bJ)
D.b9n=new A.ax(B.cZ,1.4,B.r,-1)
D.b9y=new A.ax(B.ab,1,B.r,-1)
D.ah3=new A.aY(140,1/0,0,1/0)
D.baS=new A.aY(0,1/0,64,1/0)
D.baW=new A.aY(0,84,0,1/0)
D.ahb=new A.aY(130,1/0,0,1/0)
D.aG8=w([B.mt,B.tA,B.c],x.O)
D.cen=new A.a6(B.aw,B.aD,B.w,D.aG8,null,null)
D.bbH=new A.p(null,null,null,null,null,D.cen,B.m)
D.dpl=w([B.aZ,B.bU],x.O)
D.cgB=new A.a6(B.aV,B.b1,B.w,D.dpl,null,null)
D.bc1=new A.p(null,null,null,null,null,D.cgB,B.m)
D.a_e=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fN=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dtL=w([B.dD,D.a_e,D.fN],x.O)
D.cdz=new A.a6(B.aV,B.b1,B.w,D.dtL,null,null)
D.bcM=new A.p(null,null,null,null,null,D.cdz,B.m)
D.fQ7=new A.H(!0,B.bX,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hrr=new A.D("?",null,D.fQ7,null,null,null,null,null,null,null,null,null)
D.bgD=new A.cp(B.z,null,null,D.hrr,null)
D.XI=new A.H(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h96=new A.D("\ud83c\udf33",null,D.XI,null,null,null,null,null,null,null,null,null)
D.ahX=new A.cp(B.z,null,null,D.h96,null)
D.hbO=new A.D("\ud83c\udfc6",null,B.M0,null,null,null,null,null,null,null,null,null)
D.bgO=new A.cp(B.z,null,null,D.hbO,null)
D.biF=new A.fp(null,null,null,null,null,E.kJ,null,null,null,null)
D.ahY=new A.cp(B.z,null,null,D.biF,null)
D.l7=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fQH=new A.H(!0,D.l7,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.haN=new A.D("No books on the shelf yet.",null,D.fQH,null,null,null,null,null,null,null,null,null)
D.eLQ=new A.C(B.oc,D.haN,null)
D.bh4=new A.cp(B.z,null,null,D.eLQ,null)
D.fXY=new A.H(!0,D.fN,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hsp=new A.D("\ud83d\ude8c  On the road\u2026",null,D.fXY,null,null,null,null,null,null,null,null,null)
D.eMq=new A.C(B.ct,D.hsp,null)
D.bhx=new A.cp(B.z,null,null,D.eMq,null)
D.b_J=new A.D("\ud83e\uddfa",null,D.XI,null,null,null,null,null,null,null,null,null)
D.bhN=new A.cp(B.z,null,null,D.b_J,null)
D.heh=new A.D("\ud83c\udfad",null,D.XI,null,null,null,null,null,null,null,null,null)
D.bhY=new A.cp(B.z,null,null,D.heh,null)
D.bi0=new A.cp(B.z,null,null,A7.a__,null)
D.aih=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.aio=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bkh=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bkm=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bky=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bkA=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bkC=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bkK=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lZ=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bkO=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bkT=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bkV=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bkW=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.m_=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.blz=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Cw=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.blI=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bm1=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bm4=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bma=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bmi=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aj3=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bmp=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.a_s=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aj6=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bmA=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.a_u=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bmV=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aji=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bnj=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bnA=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bo0=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bob=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GY=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.boA=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.boD=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.boH=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ajM=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.boZ=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bp4=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bpb=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ajQ=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bpk=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bpP=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bpZ=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bq1=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bq7=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ak6=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bqO=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.akv=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.brO=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.akI=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bsc=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Hb=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bsj=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bst=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bsv=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.akM=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bsN=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bsP=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bsS=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.akU=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a0d=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.btg=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.btD=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.btI=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.al5=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.btP=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a0i=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bub=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.buc=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Hk=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bv_=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bvB=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bvH=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bvL=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.r5=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bvX=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bw0=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bw6=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bw8=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.alS=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.alW=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Hq=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a0E=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.am4=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bxn=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bxF=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.by7=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.byg=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.amv=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a0Q=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bys=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.byI=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0W=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bz_=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bzg=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a1_=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bzl=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.amP=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.amR=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bzE=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.amY=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bA6=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bAa=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bAh=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bAq=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bAz=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bBb=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bBH=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.h4O=new A.D("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bFc=new A.eS(null,D.h4O,B.fm,null,x.A)
D.he8=new A.D("None",null,null,null,null,null,null,null,null,null,null,null)
D.bFe=new A.eS(null,D.he8,B.fm,null,x.A)
D.bFM=new A.bh(38e5)
D.bGu=new A.iP(0,10,0,10)
D.bGP=new A.iP(0,4,0,4)
D.bGS=new A.Q(0,4,5,0)
D.bH7=new A.Q(10,10,14,10)
D.bHi=new A.iP(10,4,10,4)
D.bHr=new A.iP(10,8,10,8)
D.bHs=new A.Q(10,8,8,8)
D.bHX=new A.Q(12,6,12,2)
D.bIf=new A.Q(14,0,14,6)
D.bIj=new A.Q(14,10,6,6)
D.bIk=new A.Q(14,12,14,0)
D.bIo=new A.Q(14,12,14,8)
D.bIr=new A.Q(14,12,8,14)
D.bIv=new A.iP(14,14,14,14)
D.bIP=new A.Q(14,6,14,40)
D.bIS=new A.Q(14,8,14,30)
D.bJf=new A.Q(16,2,16,10)
D.bJo=new A.Q(16,6,16,30)
D.bJq=new A.Q(16,6,16,8)
D.bJG=new A.Q(18,10,18,4)
D.bJI=new A.Q(18,12,18,0)
D.bJP=new A.Q(18,14,12,4)
D.aps=new A.Q(18,16,18,8)
D.bK6=new A.Q(18,20,18,22)
D.bKb=new A.Q(18,30,18,30)
D.bKt=new A.Q(20,10,12,20)
D.bKw=new A.Q(20,11,20,11)
D.bKI=new A.Q(20,18,16,18)
D.bKK=new A.Q(20,18,20,6)
D.bLy=new A.Q(24,32,24,28)
D.bLz=new A.Q(24,36,24,32)
D.bLC=new A.Q(26,26,24,14)
D.bLQ=new A.Q(2,4,2,8)
D.bLU=new A.Q(30,0,30,0)
D.bM4=new A.Q(38,22,22,22)
D.apT=new A.Q(40,24,24,24)
D.bM6=new A.iP(40,40,40,40)
D.bM8=new A.Q(46,30,30,30)
D.bMB=new A.Q(56,40,40,40)
D.bME=new A.Q(1.25,1.25,1.25,1.25)
D.bMF=new A.Q(60,0,60,0)
D.bMJ=new A.Q(6,14,6,16)
D.bMN=new A.Q(6,4,12,0)
D.bMR=new A.Q(6,6,10,2)
D.bMZ=new A.iP(7,3,7,3)
D.bNv=new A.Q(5,1.5,5,1.5)
D.bNG=new A.Q(6,2.5,6,2.5)
D.hmu=new A.D("Family Games",null,B.jr,null,null,null,null,null,null,null,null,null)
D.h3n=new A.D("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.XB,null,null,null,null,null,null,null,null,null)
D.cQe=w([D.hmu,D.h3n],x.p)
D.bCG=new A.fv(B.ah,B.e,B.i,B.B,null,B.p,null,0,D.cQe,null)
D.bO6=new A.bu(1,B.b9,D.bCG,null)
D.hqZ=new A.D("Signature",null,B.nH,null,null,null,null,null,null,null,null,null)
D.bO9=new A.bu(1,B.b9,D.hqZ,null)
D.hiV=new A.D("MADE BY THE ONE WHO PLANTED THE TREE",null,U.uF,null,null,null,null,null,null,null,null,null)
D.bOH=new A.bu(1,B.b9,D.hiV,null)
D.ho_=new A.D("Tell the AI what to fix",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bOY=new A.bu(1,B.b9,D.ho_,null)
D.hq2=new A.D("Worksheets",null,B.b_e,null,null,null,null,null,null,null,null,null)
D.fYV=new A.H(!0,E.aiN,null,null,null,null,13,B.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hoR=new A.D("Track your project spending",null,D.fYV,null,null,null,null,null,null,null,null,null)
D.dfr=w([D.hq2,B.at,D.hoR],x.p)
D.bCj=new A.fv(B.ah,B.e,B.i,B.B,null,B.p,null,0,D.dfr,null)
D.bP3=new A.bu(1,B.b9,D.bCj,null)
D.fTB=new A.H(!0,E.kJ,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3X=new A.D("FAMILY LIBRARY",null,D.fTB,null,null,null,null,null,null,null,null,null)
D.bPm=new A.bu(1,B.b9,D.h3X,null)
D.Qd=new C.J_("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.xo=new C.J0(0,"male")
D.p3=new C.J0(1,"female")
D.zV=new C.J0(2,"unknown")
D.vu=new C.anZ(0,"owner")
D.Qe=new C.anZ(1,"editor")
D.lf=new C.anZ(2,"viewer")
D.arU=new A.a_(61199,"MaterialIcons",!1)
D.bUM=new A.a_(61504,"MaterialIcons",!1)
D.bUN=new A.a_(61505,"MaterialIcons",!1)
D.bUQ=new A.a_(61587,"MaterialIcons",!1)
D.bVV=new A.a_(63034,"MaterialIcons",!0)
D.bWd=new A.a_(63153,"MaterialIcons",!1)
D.bWJ=new A.a_(63429,"MaterialIcons",!1)
D.au4=new A.a_(984520,"MaterialIcons",!1)
D.bVr=new A.a_(62776,"MaterialIcons",!1)
D.bZf=new A.ae(D.bVr,26,B.b8,null,null,null)
D.bTF=new A.a_(57648,"MaterialIcons",!1)
D.bZB=new A.ae(D.bTF,14,B.c,null,null,null)
D.bZU=new A.ae(B.Ir,17,null,null,null,null)
D.c_0=new A.ae(B.QK,null,B.bU,null,null,null)
D.c_r=new A.ae(E.a4G,null,null,null,null,null)
D.c_u=new A.ae(B.jm,18,E.kJ,null,null,null)
D.a4q=new A.a_(62044,"MaterialIcons",!1)
D.c_A=new A.ae(D.a4q,null,B.aZ,null,null,null)
D.c_H=new A.ae(B.A7,18,B.c,null,null,null)
D.c0o=new A.ae(B.eb,16,null,null,null,null)
D.c0w=new A.ae(D.a4q,32,B.aZ,null,null,null)
D.c0Q=new A.ae(E.arV,18,B.cZ,null,null,null)
D.c1Y=new A.ae(B.ID,22,B.aC,null,null,null)
D.c2c=new A.ae(B.eb,22,B.b8,null,null,null)
D.c2p=new A.ae(Y.a4v,22,B.c,null,null,null)
D.c2w=new A.ae(B.vD,52,B.c,null,null,null)
D.c2G=new A.ae(B.ID,30,B.aC,null,null,null)
D.c31=new A.ae(B.IA,null,B.c,null,null,null)
D.auP=new A.ae(B.vO,22,B.c,null,null,null)
D.c3a=new A.ae(B.eb,17,null,null,null,null)
D.c3z=new A.ae(B.xA,26,B.cZ,null,null,null)
D.c4l=new A.ae(B.a4T,16,null,null,null,null)
D.c57=new A.ae(B.vD,24,B.c,null,null,null)
D.c5d=new A.ae(B.QI,20,B.ue,null,null,null)
D.c5j=new A.ae(B.Ip,null,B.bU,null,null,null)
D.c5s=new A.ae(B.jm,18,B.c,null,null,null)
D.c72=new A.ae(B.et,16,B.ab,null,null,null)
D.c7e=new A.ae(D.a4q,20,B.aZ,null,null,null)
D.avg=new A.ae(B.h2,20,null,null,null,null)
D.c7O=new A.ae(B.cD,18,D.l7,null,null,null)
D.c84=new A.ae(B.Aj,28,B.c,null,null,null)
D.c8g=new A.ae(B.Qx,null,B.fs,null,null,null)
D.c8A=new A.ae(B.Aj,24,B.c,null,null,null)
D.c92=new A.ae(B.vD,null,B.aZ,null,null,null)
D.c93=new A.ae(B.jG,20,B.cZ,null,null,null)
D.c9p=new A.ae(B.Ir,16,null,null,null,null)
D.caY=new A.ee(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.f_,!0,null,null,null,null)
D.aw1=new C.a7Z(10,null)
D.cbu=new C.a7Z(12,null)
D.cbv=new C.a7Z(14,null)
D.dyl=w([B.bw,B.aZ,B.fB,B.b8],x.O)
D.ccF=new A.a6(B.aw,B.aD,B.w,D.dyl,null,null)
D.buM=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bBi=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.dbr=w([D.buM,D.bBi],x.O)
D.ccS=new A.a6(B.aV,B.b1,B.w,D.dbr,null,null)
D.drv=w([B.fo,B.h9,B.fB],x.O)
D.ccY=new A.a6(B.aw,B.aD,B.w,D.drv,null,null)
D.alH=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bkX=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.ddV=w([D.alH,D.bkX],x.O)
D.cdA=new A.a6(B.aV,B.b1,B.w,D.ddV,null,null)
D.boQ=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aFo=w([D.boQ,D.alH],x.O)
D.cdT=new A.a6(B.aw,B.aD,B.w,D.aFo,null,null)
D.akn=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.brF=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dqx=w([D.akn,D.brF],x.O)
D.cey=new A.a6(B.a5,B.a9,B.w,D.dqx,null,null)
D.dGg=w([B.bC,B.nY],x.O)
D.ceA=new A.a6(B.aV,B.b1,B.w,D.dGg,null,null)
D.buH=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dHh=w([D.buH,D.l7,D.l7,I.OH],x.O)
D.dK9=w([0,0.07,0.9,1],x.n)
D.cf5=new A.a6(B.a5,B.a9,B.w,D.dHh,D.dK9,null)
D.cfe=new A.a6(B.aw,B.aD,B.w,B.UG,null,null)
D.d8O=w([B.aB,D.lZ],x.O)
D.cfh=new A.a6(B.a5,B.a9,B.w,D.d8O,null,null)
D.dFN=w([B.b8,B.aZ,B.bU],x.O)
D.cgn=new A.a6(B.aw,B.aD,B.w,D.dFN,null,null)
D.ckO=w([10,20,30],x.t)
D.cuR=w([-1,-0.4,0.3,1],x.n)
D.cCq=w([B.bw,B.b8,B.fo],x.O)
D.cCy=w([B.bk,B.aB,B.kI],x.O)
D.cCB=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cDk=w([30,140,262,360],x.n)
D.bsY=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cIX=w([D.bsY,E.alf],x.O)
D.eGn=new A.m(1,2)
D.fBm=new A.d4(B.bc,D.eGn,3)
D.aCe=w([D.fBm],x.F)
D.cQw=w([B.hn,B.cj,B.fA],x.O)
D.cTn=w([B.bQ,B.bz,B.bt],x.O)
D.bQc=new C.vh("classic","Classic leather","Gold-edged brown leather",D.aFo,E.kJ,E.kJ,"\u2766",B.K,!0,!1,!1,!1)
D.bk1=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bzX=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dhn=w([D.bk1,D.bzX],x.O)
D.ali=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bQ7=new C.vh("ornate","Ornate gold","Double gold border and flourishes",D.dhn,D.ali,D.ali,"\u2726",B.K,!0,!0,!0,!1)
D.bom=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bvv=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d7u=w([D.bom,D.bvv],x.O)
D.bQ6=new C.vh("parchment","Parchment","Old paper with dark ink",D.d7u,D.Hk,L.ji,"\u2767",B.K,!0,!1,!1,!0)
D.aiq=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.by4=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dDE=w([D.aiq,D.by4],x.O)
D.bsq=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bxh=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bQ9=new C.vh("minimal","Clean paper","Plain and elegant, like a printed book",D.dDE,D.bsq,D.bxh,"",B.K,!0,!0,!1,!0)
D.bQb=new C.vh("midnight","Midnight","Deep blue with silver stars",K.aFI,B.cG,B.cn,"\u2727",B.K,!0,!0,!1,!1)
D.bQ5=new C.vh("emerald","Emerald library","Green cloth, title on the left",W.aCF,E.kJ,B.hb,"\u25c6",B.aU,!0,!1,!1,!1)
D.byB=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dBw=w([B.eF,D.byB],x.O)
D.btO=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bv4=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bQa=new C.vh("rose","Rose vintage","Burgundy with rose-gold lettering",D.dBw,D.btO,D.bv4,"\u2740",B.K,!0,!1,!0,!1)
D.dGT=w([B.cx,F.nk],x.O)
D.bQ8=new C.vh("modern","Modern","Dark, bold, left-aligned",D.dGT,B.aH,B.c,"",B.aU,!1,!0,!1,!1)
D.a6S=w([D.bQc,D.bQ7,D.bQ6,D.bQ9,D.bQb,D.bQ5,D.bQa,D.bQ8],A.as("N<vh>"))
D.cWr=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dGF=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bQn=new C.lT('What does "Ubuntu" mean?',D.dGF,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d9B=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bQq=new C.lT("In Swahili, what do we call a grandmother?",D.d9B,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d9r=w(["Babu","Mama","Baba","Dada"],x.s)
D.bQl=new C.lT("In Swahili, what do we call a grandfather?",D.d9r,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.daX=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bQp=new C.lT("What is a sister called in Swahili?",D.daX,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dgK=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bQm=new C.lT("What is a brother called in Swahili?",D.dgK,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d9q=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bQx=new C.lT("Which word means father in Swahili?",D.d9q,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dHW=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bQw=new C.lT('"Umoja ni nguvu" means...',D.dHW,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dEr=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bQy=new C.lT('"Haba na haba hujaza kibaba" teaches us...',D.dEr,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.de4=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bQv=new C.lT('The African saying "It takes a village to raise a child" means...',D.de4,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dIe=w(["The elders","The market","The river","The drum"],x.s)
D.bQr=new C.lT("Who is the traditional keeper of the family stories?",D.dIe,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.d_N=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bQo=new C.lT("Why do families sit round the fire at night?",D.d_N,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dGV=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bQt=new C.lT('What does "Harambee" mean?',D.dGV,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dk7=w(["An elder","A baby","A market","A cow"],x.s)
D.bQs=new C.lT('"Mzee" is a respectful word for...',D.dk7,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dBl=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bQu=new C.lT('What does "Shikamoo" show?',D.dBl,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aCA=w([D.bQn,D.bQq,D.bQl,D.bQp,D.bQm,D.bQx,D.bQw,D.bQy,D.bQv,D.bQr,D.bQo,D.bQt,D.bQs,D.bQu],x.J)
D.d4h=w([90,360],x.n)
D.d7_=w([B.bU,B.bp],x.O)
D.buu=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d7K=w([D.aiq,D.buu],x.O)
D.d8w=w([-1,-0.3,0.4,1],x.n)
D.d9x=w([0,0.45,0.72,0.92,1],x.n)
D.boi=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d9U=w([D.boi,B.bF],x.O)
D.blX=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.an7=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.daA=w([B.dD,D.blX,D.an7],x.O)
D.dbL=w([B.be,B.jx,B.pO],x.O)
D.boS=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bx9=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.blD=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.dbR=w([D.boS,D.bx9,D.blD],x.O)
D.dce=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.dco=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hWk=new C.afv(78,424,48,44,56)
D.hWi=new C.afv(214,396,34,34,42)
D.hWj=new C.afv(442,452,56,50,64)
D.aDy=w([D.hWk,D.hWi,D.hWj],A.as("N<afv>"))
D.dcZ=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bkQ=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bqN=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dK5=w([D.akn,D.bkQ,D.bqN],x.O)
D.bQd=new C.vi("leather","Leather",D.dK5,"vintage")
D.dld=w([B.dl,B.H9,Ac.a_J],x.O)
D.bQk=new C.vi("midnight","Midnight",D.dld,"starry")
D.dbM=w([B.ew,B.em,B.lC],x.O)
D.bQj=new C.vi("forest","Forest",D.dbM,"story")
D.dMq=w([B.ex,B.eF,B.kL],x.O)
D.bQg=new C.vi("burgundy","Burgundy",D.dMq,"royal")
D.cST=w([B.aB,B.nd,B.nO],x.O)
D.bQh=new C.vi("royal","Royal",D.cST,"royal")
D.deE=w([B.bz,B.cx,F.nk],x.O)
D.bQe=new C.vi("charcoal","Charcoal",D.deE,"geo")
D.dKe=w([B.ca,B.e1,B.x_],x.O)
D.bQi=new C.vi("sunset","Sunset",D.dKe,"sunset")
D.dL2=w([B.jx,B.ze,B.a_N],x.O)
D.bQf=new C.vi("ocean","Ocean",D.dL2,"band")
D.AN=w([D.bQd,D.bQk,D.bQj,D.bQg,D.bQh,D.bQe,D.bQi,D.bQf],A.as("N<vi>"))
D.dfd=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.dfX=w([B.an,B.aM,B.a_],x.O)
D.dhu=w([B.eF,B.em,B.dl,B.j1,B.zg,B.cZ,B.kh,B.cU,B.de],x.O)
D.dhv=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fBn=new A.d4(B.dJ,B.dQ,8)
D.dhI=w([D.fBn],x.F)
D.dj1=w([B.c7,B.e1,B.kd],x.O)
D.bmO=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.br5=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bvq=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.djj=w([D.bmO,G.alP,D.br5,D.bvq,D.an7],x.O)
D.djD=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.djU=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bkd=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bqo=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dkr=w([D.bkd,D.ajQ,D.bqo],x.O)
D.dl8=w([B.c7,B.hK],x.O)
D.dle=w([G.nR,B.iv,G.aiC,B.d0],x.O)
D.dmZ=w([B.d0,G.nR,B.iv,D.m_,B.d0],x.O)
D.dnI=w([B.aQ,B.zc,B.z3],x.O)
D.f3i=new A.y(-0.65,0.6)
D.fgQ=new A.y(-0.2,0.95)
D.fi8=new A.y(0.25,0.95)
D.f6T=new A.y(0.7,0.6)
D.fiK=new A.y(1,0.1)
D.doA=w([Am.Wt,D.f3i,D.fgQ,D.fi8,D.f6T,D.fiK],x.G)
D.bth=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bzP=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bnQ=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.doH=w([D.bth,D.bzP,D.bnQ],x.O)
D.doN=w([B.bO,B.c3,B.dH,B.aQ],x.O)
D.dpm=w([B.i_,B.ca,B.v4],x.O)
D.dpM=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dpZ=w([B.fo,B.cZ],x.O)
D.buQ=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dqs=w([D.buQ,D.aio],x.O)
D.dqE=w([B.cY,B.fO,B.h_],x.O)
D.dqR=w([B.aH,B.bp,B.dl],x.O)
D.drs=w([B.el,B.dq,B.em],x.O)
D.drR=w([B.dV,B.dl,B.H9],x.O)
D.drV=w([B.bu,B.na,B.de],x.O)
D.dsc=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bu2=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bs8=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dsz=w([D.bu2,D.ajM,D.bs8],x.O)
D.dtt=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.duF=w([1,0,7,6,3,2],x.t)
D.a7U=w(["leather","linen","plain","stars","rays"],x.s)
D.duR=w([0.5,2,3.6],x.n)
D.dvs=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bYt=new A.a_(983781,"MaterialIcons",!1)
D.aF2=w([B.QK,B.hQ,B.kR,B.ij,F.auc,B.IO,B.rs,D.bYt,K.atQ,B.E4,B.rx,B.m8],A.as("N<a_>"))
D.a7Y=w(["double","single","corners","none"],x.s)
D.bQ2=new C.A4("Little Seed","\ud83c\udf31",0)
D.bQ4=new C.A4("Young Listener","\ud83d\udc42",40)
D.bQ3=new C.A4("Storyteller","\ud83e\ude98",120)
D.bQ1=new C.A4("Village Pride","\ud83c\udfe1",300)
D.bQ_=new C.A4("Keeper of Roots","\ud83c\udf33",700)
D.bQ0=new C.A4("Elder of the Fire","\ud83d\udd25",1500)
D.aF4=w([D.bQ2,D.bQ4,D.bQ3,D.bQ1,D.bQ_,D.bQ0],A.as("N<A4>"))
D.dwM=w([B.d1,B.bl,B.cU],x.O)
D.dx3=w([],x.C)
D.EF=w([],x.u)
D.aPp=new A.m(225,528)
D.f5_=new A.y(D.aPp,1)
D.eH8=new A.m(350,548)
D.fbG=new A.y(D.eH8,0.95)
D.aPj=new A.m(158,656)
D.fbz=new A.y(D.aPj,1.12)
D.eHW=new A.m(92,544)
D.f0o=new A.y(D.eHW,0.93)
D.eHb=new A.m(398,614)
D.f7g=new A.y(D.eHb,1.04)
D.eH_=new A.m(318,662)
D.eWy=new A.y(D.eH_,1.1)
D.a85=w([D.f5_,D.fbG,D.fbz,D.f0o,D.f7g,D.eWy],A.as("N<+(m,G)>"))
D.dzh=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dzS=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dB_=w([B.d0,G.nR,B.iv,D.m_,B.d0,B.iv],x.O)
D.dCu=w([B.as,B.fO,B.j1],x.O)
D.dDc=w([-70,58],x.n)
D.dDe=w([-70,-30,20],x.n)
D.dEo=w([B.bu,B.na,B.a0R],x.O)
D.dEH=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.e0D=new C.mq("construction","Construction","Jobsite & builds",B.rw)
D.e0K=new C.mq("house","Home Build","Houses & rooms",B.vF)
D.e0A=new C.mq("grocery","Grocery","Store & pantry",B.a5m)
D.e0z=new C.mq("calculator","Calculations","Math & estimates",B.QR)
D.e0I=new C.mq("lumber","Materials","Lumber & supplies",B.IL)
D.e0w=new C.mq("kitchen","Kitchen","Remodel & meals",A3.Re)
D.bYq=new A.a_(983756,"MaterialIcons",!1)
D.e0B=new C.mq("landscape","Landscaping","Yard & garden",D.bYq)
D.e0v=new C.mq("plumbing","Plumbing","Pipes & water",B.qi)
D.e0L=new C.mq("electrical","Electrical","Wiring & power",B.fR)
D.e0t=new C.mq("store","Retail Shop","Daily business",B.kr)
D.e0u=new C.mq("paint_remodel","Paint & Remodel","Colors & walls",A3.R8)
D.bXL=new A.a_(983311,"MaterialIcons",!1)
D.e0H=new C.mq("roofing","Roofing","Roofs & exteriors",D.bXL)
D.bYD=new A.a_(983986,"MaterialIcons",!1)
D.e0s=new C.mq("warehouse","Warehouse","Storage & stock",D.bYD)
D.e0F=new C.mq("vehicles","Vehicles","Fleet & transport",B.E0)
D.bVt=new A.a_(62785,"MaterialIcons",!1)
D.e0y=new C.mq("farm","Farm","Crops & livestock",D.bVt)
D.e0x=new C.mq("restaurant","Restaurant","Food & catering",B.vM)
D.e0E=new C.mq("tools","Tools","Workshop gear",B.DX)
D.e0J=new C.mq("wallet","Cash & Wallet","Quick spending",B.jG)
D.e0G=new C.mq("concrete","Concrete","Foundation work",F.asU)
D.e0C=new C.mq("blueprint","Blueprint","Plans & design",Aq.asr)
D.a8u=w([D.e0D,D.e0K,D.e0A,D.e0z,D.e0I,D.e0w,D.e0B,D.e0v,D.e0L,D.e0t,D.e0u,D.e0H,D.e0s,D.e0F,D.e0y,D.e0x,D.e0E,D.e0J,D.e0G,D.e0C],A.as("N<mq>"))
D.dFo=w([B.bv,B.bl],x.O)
D.dGh=w([B.iK,B.oN,B.e7],x.O)
D.akB=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.alB=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bsu=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bjI=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aGg=w([D.akB,D.alB,D.bsu,D.bjI],x.O)
D.dHz=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a8E=w(["top","middle","bottom"],x.s)
D.dJb=w([B.cw,B.bp,B.dl],x.O)
D.aGA=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bdf=new A.ac(0,B.G,B.bc,B.J,14)
D.aGE=w([D.bdf],x.V)
D.brk=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dJY=w([D.aj3,D.a0Q,D.brk],x.O)
D.dJZ=w([B.bf,B.dq,B.em],x.O)
D.eGJ=new A.m(24,-8)
D.eHr=new A.m(48,0)
D.eGF=new A.m(24,6)
D.dLS=w([B.J,D.eGJ,D.eHr,D.eGF],x.g)
D.dMj=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eD7={top:0,middle:1,bottom:2}
D.dPK=new A.bl(D.eD7,["Top","Middle","Bottom"],x.r)
D.eCD={double:0,single:1,corners:2,none:3}
D.dPQ=new A.bl(D.eCD,["Double line","One line","Corners","None"],x.r)
D.eDW={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dRv=new A.bl(D.eDW,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dRH=new A.bl(B.il,[],A.as("bl<F,+(o,o)>"))
D.eCY={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.EU=new A.bl(D.eCY,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bl<o,F>"))
D.dW1=new H.OB(32,null)
D.dW2=new H.OB(40,null)
D.dW3=new H.OB(46,null)
D.aOT=new C.aw6(null)
D.eFA=new A.m(0,40)
D.eFB=new A.m(0,412)
D.eFE=new A.m(0,900)
D.eFN=new A.m(0,-34)
D.eFO=new A.m(0,-46)
D.eFQ=new A.m(0,-74)
D.eFT=new A.m(100,300)
D.eFU=new A.m(10,14)
D.eFX=new A.m(10,-10)
D.eG1=new A.m(10,-46)
D.eG2=new A.m(10,-58)
D.eG3=new A.m(116,442)
D.eG5=new A.m(11,-1)
D.eG6=new A.m(11,-10)
D.eG7=new A.m(11,-21)
D.aPe=new A.m(11,-60)
D.eGe=new A.m(14,-2)
D.eGf=new A.m(150,520)
D.aaX=new A.m(150,592)
D.eGi=new A.m(15,-15)
D.eGj=new A.m(16,-1)
D.eGm=new A.m(190,444)
D.eGp=new A.m(1,5)
D.eGx=new A.m(21,-78)
D.eGy=new A.m(222,615)
D.KP=new A.m(225,300)
D.aaZ=new A.m(225,574)
D.eGI=new A.m(24,-52)
D.eGK=new A.m(250,210)
D.eGV=new A.m(2,-56)
D.aPt=new A.m(300,0)
D.eGW=new A.m(300,440)
D.eGZ=new A.m(318,476)
D.eH1=new A.m(324,144)
D.ab1=new A.m(332,150)
D.eH3=new A.m(335,585)
D.eH4=new A.m(338,140)
D.eH5=new A.m(340,158)
D.eH7=new A.m(34,-60)
D.Fm=new A.m(36,-24)
D.eH9=new A.m(372,470)
D.eHa=new A.m(390,455)
D.eHj=new A.m(42,468)
D.eHk=new A.m(431,510)
D.eHl=new A.m(431,520)
D.eHm=new A.m(45,-92)
D.eHn=new A.m(46,20)
D.eHo=new A.m(46,-92)
D.eHp=new A.m(46,-94)
D.eHq=new A.m(47,-4)
D.eHs=new A.m(48,-4)
D.eHA=new A.m(4,-26)
D.eHI=new A.m(60,455)
D.eHR=new A.m(8,14)
D.eHV=new A.m(8,-76)
D.eHX=new A.m(95,575)
D.eHY=new A.m(98,-24)
D.eI_=new A.m(9,-2)
D.eI0=new A.m(9,-58)
D.aPC=new A.m(9,-79)
D.eI1=new A.m(9,-9)
D.eIH=new A.m(16.5,8)
D.eIJ=new A.m(3.2,0)
D.eIK=new A.m(-16.5,8)
D.eIR=new A.m(16.5,2)
D.eIU=new A.m(-3.2,0)
D.eJ1=new A.m(9.5,6)
D.eJ4=new A.m(-10,14)
D.eJ5=new A.m(-10,-12)
D.eJ6=new A.m(-10,-58)
D.eJ8=new A.m(-11,-10)
D.eJa=new A.m(-11,-60)
D.eJb=new A.m(-12,-14)
D.eJc=new A.m(-12,-16)
D.eJh=new A.m(-14,-2)
D.eJk=new A.m(-15,-15)
D.eJl=new A.m(-15,-3)
D.eJn=new A.m(-16,-1)
D.eJD=new A.m(-24,-52)
D.eJM=new A.m(-2,-34)
D.eJN=new A.m(-2,-38)
D.eJP=new A.m(-30,-100)
D.ab4=new A.m(-36,-24)
D.eK_=new A.m(-4,-26)
D.eK1=new A.m(-4,-6)
D.eKa=new A.m(-8,-3)
D.eKb=new A.m(-8,-48)
D.eKe=new A.m(-9,-2)
D.eKg=new A.m(-9,-58)
D.eKh=new A.m(-9,-79)
D.eKi=new A.m(-9,-9)
D.eKl=new A.m(-9.5,6)
D.eKz=new A.m(-16.5,2)
D.hbu=new A.D("Write a new book",null,B.hl,null,B.K,null,null,null,null,null,null,null)
D.eL8=new A.C(B.ld,D.hbu,null)
D.hqx=new A.D("Tap to go on",null,B.wq,null,null,null,null,null,null,null,null,null)
D.eLv=new A.C(B.kQ,D.hqx,null)
D.aum=new A.ae(B.ii,18,B.c,null,null,null)
D.h4k=new A.D("Add",null,B.kZ,null,null,null,null,null,null,null,null,null)
D.dp2=w([D.aum,B.pw,D.h4k],x.p)
D.fyq=new A.bZ(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dp2,null)
D.eLy=new A.C(B.oa,D.fyq,null)
D.eLA=new A.C(E.aoe,A7.a__,null)
D.fYF=new A.H(!0,B.c,null,null,null,null,13.5,B.C,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7E=new A.D("New Project",null,D.fYF,null,null,null,null,null,null,null,null,null)
D.dtV=w([D.aum,B.aa,D.h7E],x.p)
D.fyt=new A.bZ(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dtV,null)
D.eLP=new A.C(B.hr,D.fyt,null)
D.hac=new A.D("Choose your header",null,B.uC,null,null,null,null,null,null,null,null,null)
D.eMa=new A.C(B.ih,D.hac,null)
D.biV=new A.fp(2.2,null,null,null,null,B.cZ,null,null,null,null)
D.fEf=new A.a4(22,22,D.biV,null)
D.bh_=new A.cp(B.z,null,null,D.fEf,null)
D.eMf=new A.C(B.a2d,D.bh_,null)
D.bIG=new A.Q(14,2,14,6)
D.hoA=new A.D("The top of your book. Tap a design to see it.",null,V.uD,null,null,null,null,null,null,null,null,null)
D.eMg=new A.C(D.bIG,D.hoA,null)
D.h9l=new A.D("\ud83c\udfc6 A new record!",null,B.h6,null,null,null,null,null,null,null,null,null)
D.eMi=new A.C(B.kQ,D.h9l,null)
D.eNT=new A.jf(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eNX=new A.jf(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aQh=new A.jf(1,0.9607843137254902,0.48627450980392156,0)
D.KW=new A.jf(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Bm=new A.jf(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eO2=new A.jf(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hYw=new C.bmG(null)
D.bDs=new A.n4(D.hYw,null,B.az,null,null)
D.aTV=new A.cS(0,0,0,0,null,null,D.bDs,null)
D.h4m=new A.D("\ud83c\udfc5",null,B.adm,null,null,null,null,null,null,null,null,null)
D.eSs=new A.cS(null,0,-34,null,null,null,D.h4m,null)
D.f01=new A.y("E","Sit by the fire again")
D.f5R=new A.y("C","Good Learner")
D.f9v=new A.y("D","Still Growing")
D.fer=new A.y(-42,42)
D.ffS=new A.y("B","Faithful Listener")
D.fia=new A.y("A","Keeper of the Family")
D.flv=new A.aV(-17,0.7,0)
D.fm5=new A.aV(-8,0.95,1.3)
D.fnd=new A.aV(18,0.65,5.2)
D.fnf=new A.aV(0,1.15,2.6)
D.fnA=new A.aV(9,0.9,3.9)
D.fpB=new A.b3([0,0,1,1])
D.aVv=new A.a5(0,0,520,160)
D.fvl=new A.a5(10,612,440,618)
D.fvm=new A.a5(10,612,440,628)
D.fvp=new A.a5(14,-64,34,-12)
D.fvs=new A.a5(300,336,350,348)
D.abZ=new A.a5(30,96,420,346)
D.fvt=new A.a5(30,-9,46,1)
D.fvu=new A.a5(4,2,11,14)
D.fvw=new A.a5(-8,-12.5,8,-7)
D.fvx=new A.a5(-16.5,-21,16.5,1)
D.fvy=new A.a5(60,342,88,348)
D.Wu=new A.a5(66,-66,94,-36)
D.fvz=new A.a5(6,8,10,14)
D.fvC=new A.a5(95,343,115,348)
D.fvD=new A.a5(-6.5,-74,6.5,-58)
D.fvL=new A.a5(-100,-74,100,-12)
D.fvM=new A.a5(-10,8,-6,14)
D.fvN=new A.a5(-11,2,-4,14)
D.fvO=new A.a5(-11,-70,11,-56)
D.fvV=new A.a5(-13,-24,13,-4)
D.fw1=new A.a5(-15,-21,15,0)
D.fw4=new A.a5(-16,-21,16,1)
D.fw5=new A.a5(-16,-21,16,2)
D.fw8=new A.a5(-16,-26,16,-6)
D.fwg=new A.a5(-230,-26,230,26)
D.fwF=new A.a5(-38,-26,12,-6)
D.fwJ=new A.a5(-3,-70,3,-63)
D.fwK=new A.a5(-44,-22,44,0)
D.fwM=new A.a5(-46,-9,-30,1)
D.aVz=new A.a5(-80,-190,80,20)
D.fwT=new A.a5(-8,-26,40,-6)
D.fwU=new A.a5(-98,-80,92,-75)
D.fwV=new A.a5(-9,-15,9,-9)
D.ho6=new A.D("Let the AI write it from your tree",null,B.iY,null,B.K,null,null,null,null,null,null,null)
D.bR7=new A.cZ(1,B.c6,D.ho6,null)
D.dl7=w([E.RG,B.aa,D.bR7],x.p)
D.fy2=new A.bZ(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dl7,null)
D.h3Y=new A.D("Save member",null,B.cg,null,null,null,null,null,null,null,null,null)
D.dCW=w([D.avg,B.aa,D.h3Y],x.p)
D.fye=new A.bZ(B.aJ,B.ba,B.i,B.l,null,B.p,null,0,D.dCW,null)
D.c2i=new A.ae(B.iy,14,B.b8,null,null,null)
D.fS6=new A.H(!0,B.b8,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h84=new A.D("Cashier",null,D.fS6,null,null,null,null,null,null,null,null,null)
D.duu=w([D.c2i,B.b7,D.h84],x.p)
D.fyi=new A.bZ(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.duu,null)
D.h3Z=new A.D("Transfer & settings",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bOO=new A.bu(1,B.b9,D.h3Z,null)
D.db6=w([D.auP,B.ar,D.bOO],x.p)
D.fyj=new A.bZ(B.aJ,B.e,B.i,B.l,null,B.p,null,0,D.db6,null)
D.fCU=new A.aw(16,40)
D.fCZ=new A.aw(22,64)
D.fD5=new A.aw(280,88)
D.fDU=new A.a4(30,null,null,null)
D.h33=new A.D("The teacher is writing\u2026",null,B.yf,null,null,null,null,null,null,null,null,null)
D.bi6=new A.cp(B.z,null,null,D.h33,null)
D.hSe=new A.b9("w",x.W)
D.fEj=new A.a4(null,56,D.bi6,D.hSe)
D.fF6=new A.hG(5,8,8,1,null)
D.fFe=new A.hG(2,12,12,1.05,null)
D.h7K=new A.D("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fG_=new A.b4(D.h7K,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h8_=new A.D("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aXU=new A.b4(D.h8_,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hgx=new A.D("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fGt=new A.b4(D.hgx,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hrA=new A.D("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fGy=new A.b4(D.hrA,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.haa=new A.D("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fGF=new A.b4(D.haa,null,null,null,null,null,null,null,null,null,null,null,null,B.fQ,!1,null,null,null,B.t,null)
D.hoN=new A.D("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aXZ=new A.b4(D.hoN,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.ha8=new A.D("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fH4=new A.b4(D.ha8,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h4D=new A.D("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fH6=new A.b4(D.h4D,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hdX=new A.D("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fHc=new A.b4(D.hdX,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hsm=new A.D("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fHT=new A.b4(D.hsm,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hmZ=new A.D("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fIi=new A.b4(D.hmZ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hrE=new A.D("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fIl=new A.b4(D.hrE,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hib=new A.D("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fIn=new A.b4(D.hib,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hc6=new A.D("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fIo=new A.b4(D.hc6,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hc7=new A.D("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fJp=new A.b4(D.hc7,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7M=new A.D("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fJH=new A.b4(D.h7M,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h9O=new A.D("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fK0=new A.b4(D.h9O,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hhE=new A.D("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fKh=new A.b4(D.hhE,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hcX=new A.D("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fKi=new A.b4(D.hcX,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fXl=new A.H(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLR=new A.eG("\u2665",null,null,B.cW,null,null,null,null,null,null,D.fXl)
D.fUr=new A.H(!0,B.aS,null,null,null,null,28,B.O,B.cN,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM6=new A.eG("Today: how well do you know the family?",null,null,B.cW,null,null,null,null,null,null,D.fUr)
D.fMn=new A.H(!0,B.qT,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNz=new A.H(!0,D.l7,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNX=new A.H(!0,D.l7,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO0=new A.H(!0,B.d0,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO9=new A.H(!0,D.fN,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOk=new A.H(!0,D.fN,null,null,null,null,13,B.C,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOF=new A.ts(!0,B.up,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOV=new A.H(!0,B.d0,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOZ=new A.H(!0,D.l7,null,null,null,null,18,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP_=new A.H(!0,B.d0,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP4=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP7=new A.H(!0,B.d0,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPE=new A.H(!0,B.b8,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPF=new A.H(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPH=new A.H(!0,B.aS,null,null,null,null,15.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ9=new A.H(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZg=new A.H(!0,B.aR,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZh=new A.H(!0,D.lZ,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQA=new A.H(!0,B.d0,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adr=new A.ts(!0,B.W0,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Xo=new A.H(!0,B.d0,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQK=new A.H(!0,B.a_,null,null,null,null,12.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQP=new A.H(!0,D.fN,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRg=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSq=new A.H(!0,D.fN,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZr=new A.H(!0,D.fN,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSK=new A.H(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSW=new A.H(!0,D.fN,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSY=new A.H(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT4=new A.H(!0,L.ji,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZv=new A.H(!0,D.fN,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU1=new A.H(!0,D.fN,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUk=new A.H(!0,D.fN,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUm=new A.H(!0,B.a_,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUo=new A.H(!0,B.d0,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUN=new A.H(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.JI,null,null,null)
D.aZK=new A.H(!0,D.fN,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVd=new A.H(!0,B.a_,null,null,null,null,17,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVz=new A.H(!0,B.fs,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVX=new A.H(!0,B.bU,null,null,null,null,8,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW1=new A.H(!0,B.bC,null,null,null,null,11,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWd=new A.H(!0,B.c,null,null,null,null,13.5,B.C,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWg=new A.H(!0,D.fN,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWo=new A.H(!0,D.Hk,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWA=new A.H(!0,B.b8,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWZ=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX5=new A.H(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ev,null,null,null)
D.fXw=new A.H(!0,B.d0,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXE=new A.H(!0,B.cZ,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXR=new A.H(!0,D.m_,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_8=new A.H(!0,D.fN,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.M9=new A.H(!0,B.d0,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_a=new A.H(!0,B.d0,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ev,null,null,null)
D.fYb=new A.H(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYf=new A.H(!0,G.nR,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYD=new A.H(!0,B.b8,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYU=new A.H(!0,D.fN,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZi=new A.H(!0,B.c,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZI=new A.H(!0,D.fN,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_f=new A.H(!0,D.fN,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_k=new A.H(!0,B.an,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_u=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae_=new A.H(!0,B.an,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae2=new A.H(!0,D.lZ,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1g=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1B=new A.H(!0,B.aS,null,null,null,null,27,B.O,B.cN,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1I=new A.H(!0,L.ji,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1Q=new A.H(!0,L.ji,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2j=new A.D("Time:",null,B.hH,null,null,null,null,null,null,null,null,null)
D.h2F=new A.D("\ud83c\udfae",null,K.adQ,null,null,null,null,null,null,null,null,null)
D.h2G=new A.D("Themes",null,B.pz,null,null,null,null,null,null,null,null,null)
D.h3b=new A.D("\ud83c\udfb2",null,B.yp,null,null,null,null,null,null,null,null,null)
D.h3f=new A.D("Delete this game?",null,B.iY,null,null,null,null,null,null,null,null,null)
D.h3m=new A.D("Add Item",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fSE=new A.H(!0,B.a_,null,null,null,null,22,B.C,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3N=new A.D("Debt receipt",null,D.fSE,null,B.K,null,null,null,null,null,null,null)
D.b_n=new A.H(!0,B.an,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h45=new A.D("Person who owes",null,D.b_n,null,null,null,null,null,null,null,null,null)
D.h56=new A.D("Notes",null,B.adD,null,null,null,null,null,null,null,null,null)
D.h5B=new A.D("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fRz=new A.H(!0,B.c,null,null,null,null,11,B.C,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5D=new A.D("Share",null,D.fRz,null,null,null,null,null,null,null,null,null)
D.h6E=new A.D("Move your family trees",null,I.adY,null,null,null,null,null,null,null,null,null)
D.h7j=new A.D("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.h7Z=new A.D("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.h8m=new A.D("SAVE",null,D.M9,null,null,null,null,null,null,null,null,null)
D.h9_=new A.D("The round button is the right answer.",null,V.yk,null,null,null,null,null,null,null,null,null)
D.h9k=new A.D("Remove this book?",null,B.h6,null,null,null,null,null,null,null,null,null)
D.fYA=new A.H(!0,B.d0,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ev,null,null,null)
D.h9T=new A.D("Fireside Stories",null,D.fYA,null,null,null,null,null,null,null,null,null)
D.b_S=new A.D("Download",null,B.cg,null,null,null,null,null,null,null,null,null)
D.haz=new A.D("What should the AI do?",null,B.dw,null,null,null,null,null,null,null,null,null)
D.fR9=new A.H(!0,D.lZ,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.haO=new A.D("REPORT CARD",null,D.fR9,null,null,null,null,null,null,null,null,null)
D.hbB=new A.D("Calabash Catch",null,B.XJ,null,null,null,null,null,null,null,null,null)
D.hc2=new A.D("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.hcu=new A.D("\ud83c\udfe1",null,B.FR,null,null,null,null,null,null,null,null,null)
D.hdb=new A.D("Ribbon bookmark",null,B.jO,null,null,null,null,null,null,null,null,null)
D.h_e=new A.H(!0,B.b8,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hdG=new A.D("NGMY.ORG",null,D.h_e,null,B.K,null,null,null,null,null,null,null)
D.heZ=new A.D("Scan family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.fWh=new A.H(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hfM=new A.D("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fWh,null,B.K,null,null,null,null,null,null,null)
D.hh0=new A.D("Delete",null,B.Xi,null,null,null,null,null,null,null,null,null)
D.hh1=new A.D("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.hh9=new A.D("Thumbnail",null,B.pz,null,null,null,null,null,null,null,null,null)
D.hhJ=new A.D("Save the cover",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hhO=new A.D("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.BN,null,B.K,null,null,null,null,null,null,null)
D.hic=new A.D("Your photos",null,B.pz,null,null,null,null,null,null,null,null,null)
D.hit=new A.D("Create Project",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hiQ=new A.D("\u2b50 stars",null,B.FS,null,null,null,null,null,null,null,null,null)
D.hj3=new A.D("Design your cover",null,B.uC,null,null,null,null,null,null,null,null,null)
D.hj9=new A.D("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.hjc=new A.D("PICTURE",null,N.wu,null,null,null,null,null,null,null,null,null)
D.hje=new A.D("\ud83c\udfaf",null,D.XI,null,null,null,null,null,null,null,null,null)
D.hjB=new A.D("Paid",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hjD=new A.D("You can undo it right after.",null,V.yk,null,null,null,null,null,null,null,null,null)
D.hkc=new A.D("Print",null,B.ws,null,null,null,null,null,null,null,null,null)
D.hkD=new A.D("Amount owed",null,D.b_n,null,null,null,null,null,null,null,null,null)
D.hkT=new A.D("Got it",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hlv=new A.D("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hly=new A.D("Add to budget",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hlY=new A.D("Debtor signature",null,B.adD,null,null,null,null,null,null,null,null,null)
D.hm9=new A.D("Change icon",null,B.adC,null,null,null,null,null,null,null,null,null)
D.hn_=new A.D("MADE BY THE SYSTEM, FROM YOUR TREE",null,U.uF,null,null,null,null,null,null,null,null,null)
D.hnt=new A.D("Family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hnz=new A.D("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.XH,null,null,null,null,null,null,null,null,null)
D.hnX=new A.D("Download",null,B.ws,null,null,null,null,null,null,null,null,null)
D.hnY=new A.D("The person who planted this tree has not made a game yet.",null,Af.yo,null,null,null,null,null,null,null,null,null)
D.ho1=new A.D("Change",null,B.pz,null,null,null,null,null,null,null,null,null)
D.hoT=new A.D("Clear all",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hoW=new A.D("WHAT SHOULD IT CHANGE?",null,N.wu,null,null,null,null,null,null,null,null,null)
D.hpu=new A.D("COLOUR",null,N.wu,null,null,null,null,null,null,null,null,null)
D.hpJ=new A.D("Do it",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hpN=new A.D("Create Tree",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hpY=new A.D("Give me another clue",null,D.M9,null,null,null,null,null,null,null,null,null)
D.hqT=new A.D("Create Family Tree",null,B.fk,null,null,null,null,null,null,null,null,null)
D.hr2=new A.D("THE TEACHER EXPLAINS THESE",null,U.uF,null,null,null,null,null,null,null,null,null)
D.fMm=new A.H(!0,E.kJ,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hr8=new A.D("Write the first page myself",null,D.fMm,null,null,null,null,null,null,null,null,null)
D.hrH=new A.D("Use this header",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hrO=new A.D("Create Project",null,E.b_2,null,null,null,null,null,null,null,null,null)
D.hTJ=new C.ae7(1,"header")
D.af3=new C.ae7(2,"projects")
D.hTK=new C.ae7(3,"cashier")
D.af4=new C.ae7(4,"familyTree")
D.i8v=new C.cKM(0,"start")
D.i8w=new C.cKN(0,"start")
D.hTX=new C.a_N(null)
D.hUZ=new C.a0m(null)
D.dRE=new A.bl(B.il,[],A.as("bl<o,H9>"))
D.dwV=w([],x.dE)
D.dwW=w([],x.M)
D.hVD=new C.bjQ(D.dRE,D.dwV,D.dwW,0,0,null,null)
D.b4p=new C.a1d(0,"intro")
D.b4q=new C.a1d(1,"countdown")
D.afh=new C.a1d(2,"ask")
D.YF=new C.a1d(3,"reveal")
D.b4r=new C.a1d(4,"end")
D.hYy=new C.tB(F.Ht,D.m_,B.d0,F.mq,5,!1,!1,!1,0,null)
D.hYA=new C.tB(F.Ht,B.ex,B.d0,B.bP,2,!0,!0,!1,2,B.d0)
D.hYC=new C.tB(B.r6,B.cZ,B.d0,F.mq,2,!0,!1,!1,2,B.as)
D.hYD=new C.tB(F.Ht,B.dV,B.d0,F.mq,5,!1,!1,!1,1,null)
D.hYG=new C.tB(F.a16,D.alB,B.d0,F.mq,4,!0,!1,!0,0,null)
D.b4u=new C.tB(F.a16,B.e1,B.d0,F.mq,3,!0,!1,!0,2,null)
D.b4v=new C.tB(F.tC,D.m_,B.c,F.mq,0,!1,!1,!0,0,null)
D.b4w=new C.tB(B.r6,B.aB,B.d0,B.bP,2,!0,!0,!1,2,B.e1)
D.b4x=new C.tB(B.r6,G.nR,B.iv,F.mq,5,!1,!1,!0,3,null)
D.hYK=new C.tB(B.r6,B.e1,B.d0,F.mq,0,!0,!1,!1,0,B.aB)
D.b4y=new C.tB(F.Ht,B.ex,B.d0,B.bP,1,!1,!0,!1,1,null)
D.b4z=new C.tB(F.H_,B.as,B.aB,F.mq,4,!0,!1,!0,2,null)
D.hYM=new C.tB(F.tC,B.as,B.ex,F.mq,3,!0,!1,!1,0,null)
D.hYO=new C.tB(B.r6,B.dV,B.d0,B.bP,1,!1,!0,!1,1,null)
D.hYP=new C.tB(F.H_,D.akB,B.c,F.mq,5,!1,!1,!0,0,null)
D.hZt=new C.a1M(null)
D.i8E=new C.ahB(0,"still")
D.Z1=new C.ahB(1,"walk")
D.b5i=new C.ahB(2,"pound")
D.b5j=new C.ahB(3,"drum")
D.i43=new C.a36(0,"greet")
D.b5k=new C.a36(1,"teach")
D.afB=new C.a36(2,"ask")
D.i44=new C.a36(3,"feedback")
D.b5l=new C.a36(4,"end")
D.Z8=new C.a3p(0,"intro")
D.Z9=new C.a3p(1,"asking")
D.C4=new C.a3p(2,"reacting")
D.afM=new C.a3p(3,"driving")
D.afN=new C.a3p(4,"arrived")
D.afV=new C.aNY(0,"projects")
D.b5L=new C.aNY(1,"cashier")
D.i69=new C.aNY(2,"familyTree")})()};
(a=>{a["O9aqV0EYzSXRiObKGeCmoDLoMcM="]=a.current})($__dart_deferred_initializers__);