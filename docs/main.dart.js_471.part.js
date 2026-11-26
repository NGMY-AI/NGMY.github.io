((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A9,S,A_,Aa,P,A0,T,M,Ab,L,A1,U,H,E,Ac,V,Ad,A2,Ae,Af,Ag,Ah,Q,Ai,Aj,N,A3,Ak,A4,A5,A6,Al,W,A7,Am,An,G,Ao,Ap,Aq,A8,Ar,As,At,Au,X,O,F,Av,I,Y,K,Aw,Z,R,Ax,C={
bIn(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bIn=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.we(null,""),$async$bIn)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nE(b1)
s=A.c3(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dv(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.d_(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.V.au(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rx(t,a1,B.ii,"book",E.HD),$async$bIn)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.S8(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A.Ml(l)?y.k:y.y)
for(j=J.a1(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a0(r.a(j.h(a2,a7)),q,p):B.cD
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a4G(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIn,v)},
ajf(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ajf=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.we(null,""),$async$ajf)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nE(b6)
s=x.S
r=A.cV(c1,0,A.dz(4,"count",s),A.U(c1).c)
q=H.a4p(new A.O(r,new C.fYO(),r.$ti.k("O<aj.E,n>")).aL(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fYN(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.V.au(b7,null)+"\nAllowed values: style one of "+B.d.aL(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ajf)
case 6:l=c5
k=H.S8(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.ar3(s,D.dOx,r.b(k.h(0,"cover"))?A.a0(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dv(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.V.au(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ajf)
case 10:l=c5
k=l==null?null:H.S8(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cK(a8,d),a5=J.aQ(a2.a),a2=a2.$ti,a7=new A.jz(a5,a2.k("jz<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a1(a9)
b1=A.aJ(b0.h(a9,"index"))
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
case 9:if(h.a!==0){s=h.$ti.k("ba<2>")
p=A.cs(new A.ba(h,s),new C.fYP(),s.k("M.E"),p)
p=H.a4p(A.pf(p,3,A.a3(p).k("M.E")).aL(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("ct<1>")
b4=A.B(new A.ct(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a4G(s,b9),$async$ajf)
case 13:b5=c5
for(s=J.a1(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.ar3(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ajf,v)},
hSz(d,e,f){return A.ce(null,B.v.j(0.65),!1,null,new C.h8q(e,f),d,null,!0,!0,x.g2)},
ar3:function ar3(d,e,f){this.a=d
this.b=e
this.c=f},
fYO:function fYO(){},
fYN:function fYN(d){this.a=d},
fYP:function fYP(){},
h8q:function h8q(d,e){this.a=d
this.b=e},
bG3(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bG3=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fLy())){u=null
w=1
break}t=B.d.cw(b1,new C.fLz())
s=$.T()
r=new A.oY(new A.ov())
q=A.v4(r,D.aUs)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aUs,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ad
o.d=B.bG
o.e=B.dP
n=new C.fLE(t)
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
s=$.T()
p=A.a([],x.v)
a3=new A.aH(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aZ(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aH(s.r,B.ak,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.I)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aZ(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.ac()}}q.af(a3,o)}w=4
return A.b(r.n1().vL(520,160),$async$bG3)
case 4:w=3
return A.b(b3.ho(B.hq),$async$bG3)
case 3:b0=b3
u=b0==null?null:J.eW(B.dM.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bG3,v)},
fWp(d){return C.iy1(d)},
iy1(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fWp=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.blO()
n=d.x!=null&&d.A3(null).length===0
if(d.x!=null)t=n?D.Bc:D.KK
else t=d.gVm()?D.KK:D.aPi
w=3
return A.b(C.bG3(d.ax),$async$fWp)
case 3:s=f
p.a=null
if(s!=null)p.a=A.apH(s)
r=A.a6q(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aPi}else{p.c=C.xB(q,!0)
p.b=n?D.Bc:D.KK}r.a5f(A.hjc(new C.fWr(p,d,new C.fWs(),t,n,o),null,D.bKY,B.xZ))
u=r.jJ(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fWp,v)},
h2K(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h2K=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fWp(d),$async$h2K)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aK(s,r,"_")
if(q.length>40)q=B.a.aw(q,0,40)
u=Ah.HO(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h2K,v)},
fLy:function fLy(){},
fLz:function fLz(){},
fLE:function fLE(d){this.a=d},
fWs:function fWs(){},
fWr:function fWr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWq:function fWq(){},
h8U(d,e){var w=0,v=A.j(x.H)
var $async$h8U=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,B.v.j(0.55),!0,null,new C.h8Y(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h8U)
case 2:return A.h(null,v)}})
return A.i($async$h8U,v)},
bIQ(d,e,f,g){return C.iFS(d,e,f,g)},
iFS(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bIQ=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cK.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.T(D.fEz)
w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.h8Q(g,r,f),d,null,!0,!0,x.H),$async$bIQ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bIQ,v)},
h8Z(d,e){var w=0,v=A.j(x.H)
var $async$h8Z=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,null,!0,null,new C.h91(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h8Z)
case 2:return A.h(null,v)}})
return A.i($async$h8Z,v)},
b1H:function b1H(d,e){this.c=d
this.a=e},
caQ:function caQ(){},
bf4:function bf4(d,e){this.b=d
this.a=e},
h8Y:function h8Y(d,e){this.a=d
this.b=e},
h8V:function h8V(d){this.a=d},
h8W:function h8W(d,e,f){this.a=d
this.b=e
this.c=f},
h8X:function h8X(d,e){this.a=d
this.b=e},
h8Q:function h8Q(d,e,f){this.a=d
this.b=e
this.c=f},
h8O:function h8O(d){this.a=d},
h8P:function h8P(d,e,f){this.a=d
this.b=e
this.c=f},
h91:function h91(d,e){this.a=d
this.b=e},
h9_:function h9_(d){this.a=d},
h90:function h90(d,e,f){this.a=d
this.b=e
this.c=f},
fQv(d,e){var w=0,v=A.j(x.y),u,t
var $async$fQv=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a49(d),$async$fQv)
case 3:t=g
J.nh(t,new C.fQw(e))
u=A.ajX(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQv,v)},
fQw:function fQw(d){this.a=d},
arg:function arg(d,e,f){this.c=d
this.d=e
this.a=f},
aG6:function aG6(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dV6:function dV6(d,e){this.a=d
this.b=e},
dUS:function dUS(d,e){this.a=d
this.b=e},
dUV:function dUV(d,e,f){this.a=d
this.b=e
this.c=f},
dUU:function dUU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUT:function dUT(d,e){this.a=d
this.b=e},
dUW:function dUW(d,e){this.a=d
this.b=e},
dUQ:function dUQ(){},
dUR:function dUR(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dUP:function dUP(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dUA:function dUA(d){this.a=d},
dUB:function dUB(d,e,f){this.a=d
this.b=e
this.c=f},
dUC:function dUC(d,e){this.a=d
this.b=e},
dUz:function dUz(d){this.a=d},
dUH:function dUH(d,e){this.a=d
this.b=e},
dUy:function dUy(d){this.a=d},
dUI:function dUI(d,e,f){this.a=d
this.b=e
this.c=f},
dUJ:function dUJ(d,e,f){this.a=d
this.b=e
this.c=f},
dUx:function dUx(d,e){this.a=d
this.b=e},
dUK:function dUK(d,e,f){this.a=d
this.b=e
this.c=f},
dUw:function dUw(d,e){this.a=d
this.b=e},
dUL:function dUL(d,e){this.a=d
this.b=e},
dUv:function dUv(d){this.a=d},
dUM:function dUM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUt:function dUt(){},
dUn:function dUn(d){this.a=d},
dUo:function dUo(d){this.a=d},
dUu:function dUu(d,e){this.a=d
this.b=e},
dUN:function dUN(d,e){this.a=d
this.b=e},
dUs:function dUs(d){this.a=d},
dUO:function dUO(d){this.a=d},
dUr:function dUr(){},
dUD:function dUD(d,e){this.a=d
this.b=e},
dUq:function dUq(d){this.a=d},
dUE:function dUE(d,e,f){this.a=d
this.b=e
this.c=f},
dUp:function dUp(d,e){this.a=d
this.b=e},
dUm:function dUm(d,e){this.a=d
this.b=e},
dUF:function dUF(d){this.a=d},
dUG:function dUG(d,e,f){this.a=d
this.b=e
this.c=f},
dV9:function dV9(){},
dVa:function dVa(d,e){this.a=d
this.b=e},
dV7:function dV7(d){this.a=d},
dV8:function dV8(d){this.a=d},
dV3:function dV3(d,e){this.a=d
this.b=e},
dV4:function dV4(d){this.a=d},
dUX:function dUX(d,e,f){this.a=d
this.b=e
this.c=f},
dUY:function dUY(d,e,f){this.a=d
this.b=e
this.c=f},
dUZ:function dUZ(d,e,f){this.a=d
this.b=e
this.c=f},
dV_:function dV_(d,e,f){this.a=d
this.b=e
this.c=f},
dV0:function dV0(d,e,f){this.a=d
this.b=e
this.c=f},
dV1:function dV1(d,e,f){this.a=d
this.b=e
this.c=f},
dV2:function dV2(d,e,f){this.a=d
this.b=e
this.c=f},
dVb:function dVb(){},
dVc:function dVc(){},
dVd:function dVd(){},
dVe:function dVe(d){this.a=d},
dV5:function dV5(d,e){this.a=d
this.b=e},
hNW(d){return B.d.dr(D.a6x,new C.fRh(d),new C.fRi())},
v9:function v9(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fRh:function fRh(d){this.a=d},
fRi:function fRi(){},
ang:function ang(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYm:function aYm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UG:function UG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biK:function biK(){this.d=$
this.c=this.a=null},
dk9:function dk9(d,e){this.a=d
this.b=e},
dk7:function dk7(d,e){this.a=d
this.b=e},
dk8:function dk8(){},
dka:function dka(d,e){this.a=d
this.b=e},
hxC(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.be(J.k(u==null?"":u))
return new C.nL(t,w,v,u==null?new A.W(Date.now(),0,!1):u)},
M6(d,e){return C.iwE(d,e)},
iwE(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$M6=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$M6)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.V.aP(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.cK(p,x.f)
o=A.cs(o,new C.fTQ(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("X<M.E>")
o=A.B(new A.X(o,new C.fTR(),n),n.k("M.E"))
B.d.b_(o,new C.fTS())
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
return A.i($async$M6,v)},
BJ(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BJ)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.h7t(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.V.au(r,null)),$async$BJ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BJ,v)},
aUr(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aUr=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.M6(d,e),$async$aUr)
case 2:u=h
t=J.cJ(u)
s=t.bl(u,new C.hgb(f))
if(s===-1)t.ce(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BJ(d,e,u),$async$aUr)
case 3:return A.h(null,v)}})
return A.i($async$aUr,v)},
bGy(d,e,f){var w=0,v=A.j(x.H),u
var $async$bGy=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.M6(d,e),$async$bGy)
case 2:u=h
J.nh(u,new C.fQn(f))
w=3
return A.b(C.BJ(d,e,u),$async$bGy)
case 3:return A.h(null,v)}})
return A.i($async$bGy,v)},
bGO(d,e){return C.iwD(d,e)},
iwD(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bGO=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bGO)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.PU
w=1
break}p=B.V.aP(0,q,null)
if(x.f.b(p)){o=A.a0(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.i.M(k)
if(k==null)k=0
if(D.EI.am(0,o.h(0,"foil")))j=A.cU(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a8f,o.h(0,"position"))?A.cU(o.h(0,"position")):"middle"
g=B.d.q(D.a7A,o.h(0,"frame"))?A.cU(o.h(0,"frame")):"double"
f=B.d.q(D.a7w,o.h(0,"texture"))?A.cU(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.ddg,o.h(0,"header"))?A.cU(o.h(0,"header")):"classic"
o=new C.IM(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.PU
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.PU
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bGO,v)},
Tj(d,e,f){return C.iFm(d,e,f)},
iFm(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Tj=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aB(),$async$Tj)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.V.au(f.ak(),null)),$async$Tj)
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
return A.i($async$Tj,v)},
SK(d,e){return C.iwF(d,e)},
iwF(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$SK=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$SK)
case 7:r=g
q=r.pt("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.M6(d,e),$async$SK)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lH(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$SK)
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
return A.i($async$SK,v)},
aiA(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aiA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SK(d,e),$async$aiA)
case 3:s=g
r=J.a1(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aB(),$async$aiA)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aiA)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiA,v)},
a4R(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4R=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.SK(d,e),$async$a4R)
case 2:s=h
J.fS(s,f)
w=3
return A.b(A.aB(),$async$a4R)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4R)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4R)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4R)
case 6:return A.h(null,v)}})
return A.i($async$a4R,v)},
nL:function nL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fTQ:function fTQ(){},
fTR:function fTR(){},
fTS:function fTS(){},
h7t:function h7t(){},
hgb:function hgb(d){this.a=d},
fQn:function fQn(d){this.a=d},
IM:function IM(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bUd:function bUd(d){this.a=d},
iFG(d,e,f,g,h,i,j){return A.a8(d,!1).ca(A.e7(new C.h83(j,i,f,e,h,g),!0,null,x.H))},
SG(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$SG=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SK(h,g),$async$SG)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.T(D.aWT)
u=!1
w=1
break}w=4
return A.b(C.hSz(d,f,e),$async$SG)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aiA(h,g),$async$SG)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nL(""+(q+n),l,B.a.i(m.b),new A.W(Date.now(),0,!1)))}w=6
return A.b(C.BJ(h,r,p),$async$SG)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Tj(h,r,new C.IM("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$SG)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SG,v)},
h83:function h83(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a0p:function a0p(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aD3:function aD3(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dkP:function dkP(d){this.a=d},
dkO:function dkO(d,e){this.a=d
this.b=e},
dkD:function dkD(d,e){this.a=d
this.b=e},
dkA:function dkA(d,e){this.a=d
this.b=e},
dkb:function dkb(d){this.a=d},
dkc:function dkc(d,e){this.a=d
this.b=e},
dkE:function dkE(d){this.a=d},
dkk:function dkk(d){this.a=d},
dki:function dki(d){this.a=d},
dkj:function dkj(d){this.a=d},
dkl:function dkl(d){this.a=d},
dkB:function dkB(d){this.a=d},
dkC:function dkC(){},
dkg:function dkg(d){this.a=d},
dkh:function dkh(d,e){this.a=d
this.b=e},
dkm:function dkm(d){this.a=d},
dkn:function dkn(d,e){this.a=d
this.b=e},
dkN:function dkN(d){this.a=d},
dkM:function dkM(d,e){this.a=d
this.b=e},
dkL:function dkL(d){this.a=d},
dkx:function dkx(d){this.a=d},
dkw:function dkw(d){this.a=d},
dky:function dky(d){this.a=d},
dkd:function dkd(d,e){this.a=d
this.b=e},
dkz:function dkz(d,e){this.a=d
this.b=e},
dkq:function dkq(d){this.a=d},
dkr:function dkr(d){this.a=d},
dkp:function dkp(){},
dks:function dks(d){this.a=d},
dkt:function dkt(d){this.a=d},
dku:function dku(d,e){this.a=d
this.b=e},
dkv:function dkv(d,e,f){this.a=d
this.b=e
this.c=f},
dko:function dko(d,e){this.a=d
this.b=e},
dkG:function dkG(d){this.a=d},
dkF:function dkF(){},
dkH:function dkH(d){this.a=d},
dkI:function dkI(d){this.a=d},
dkJ:function dkJ(d){this.a=d},
dkK:function dkK(d,e){this.a=d
this.b=e},
dke:function dke(d){this.a=d},
dkf:function dkf(d){this.a=d},
a0t:function a0t(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bj8:function bj8(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dmB:function dmB(d){this.a=d},
dmC:function dmC(d){this.a=d},
dmA:function dmA(d){this.a=d},
dmD:function dmD(d){this.a=d},
dmz:function dmz(d){this.a=d},
dmE:function dmE(d){this.a=d},
dmy:function dmy(d){this.a=d},
dmF:function dmF(d,e){this.a=d
this.b=e},
dmx:function dmx(d,e){this.a=d
this.b=e},
dmG:function dmG(d,e){this.a=d
this.b=e},
a0r:function a0r(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ah_:function ah_(d,e,f){this.a=d
this.b=e
this.c=f},
aD6:function aD6(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dl3:function dl3(d,e){this.a=d
this.b=e},
dl2:function dl2(d,e){this.a=d
this.b=e},
dl7:function dl7(d){this.a=d},
dl6:function dl6(d,e){this.a=d
this.b=e},
dl4:function dl4(d){this.a=d},
dl5:function dl5(d){this.a=d},
dl8:function dl8(d){this.a=d},
dl9:function dl9(d){this.a=d},
dl1:function dl1(d,e){this.a=d
this.b=e},
dl0:function dl0(d,e){this.a=d
this.b=e},
L8:function L8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_E:function a_E(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cSR:function cSR(d){this.a=d},
cSS:function cSS(){},
cST:function cST(d){this.a=d},
bgj:function bgj(d,e,f){this.b=d
this.c=e
this.a=f},
bga:function bga(d,e){this.b=d
this.a=e},
va:function va(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0_:function a0_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgh:function bgh(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
dbU:function dbU(d,e,f){this.a=d
this.b=e
this.c=f},
dbT:function dbT(d,e){this.a=d
this.b=e},
dci:function dci(d){this.a=d},
dc5:function dc5(){},
dcj:function dcj(d){this.a=d},
dc4:function dc4(){},
dck:function dck(d,e){this.a=d
this.b=e},
dc3:function dc3(d,e){this.a=d
this.b=e},
dcl:function dcl(d,e){this.a=d
this.b=e},
dc2:function dc2(d,e){this.a=d
this.b=e},
dcm:function dcm(d){this.a=d},
dc1:function dc1(){},
dcn:function dcn(d,e){this.a=d
this.b=e},
dc0:function dc0(d,e){this.a=d
this.b=e},
dco:function dco(d){this.a=d},
dcd:function dcd(d,e){this.a=d
this.b=e},
dcp:function dcp(d){this.a=d},
dcq:function dcq(d){this.a=d},
dcs:function dcs(d){this.a=d},
dct:function dct(d){this.a=d},
dcc:function dcc(d,e){this.a=d
this.b=e},
dcu:function dcu(d,e){this.a=d
this.b=e},
aKg:function aKg(d){this.a=d},
blG:function blG(d){this.a=d},
bep:function bep(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
anh:function anh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2I:function a2I(d,e){this.a=d
this.b=e},
ani:function ani(d,e,f,g,h,i){var _=this
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
_.ab$=i
_.c=_.a=null},
bUn:function bUn(d){this.a=d},
bUh:function bUh(d){this.a=d},
bUg:function bUg(d,e){this.a=d
this.b=e},
bUq:function bUq(d){this.a=d},
bUi:function bUi(d){this.a=d},
bUj:function bUj(d){this.a=d},
bUm:function bUm(d){this.a=d},
bUl:function bUl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUo:function bUo(d,e){this.a=d
this.b=e},
bUp:function bUp(){},
bUk:function bUk(d){this.a=d},
bUe:function bUe(d,e){this.a=d
this.b=e},
bUf:function bUf(d){this.a=d},
bri:function bri(d,e){this.b=d
this.a=e},
aD4:function aD4(){},
iR(d,e){var w
$.T()
w=A.L()
w.b=B.ad
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dP
return w},
bG5(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.nL(0,a0?-f:f,f)
w=A.bZ(B.hF,8,36)
v=B.v.j(0.3)
u=$.T()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.YE
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eFI,new A.r(-4+v,-2),C.iR(q,5))
d.ah(D.eDl,new A.r(4-v,-2),C.iR(q,5))}else{t=A.bZ(B.KB,14,40)
p=A.L()
p.r=v.gp(0)
d.c1(t,p)}v=u.r
u=x.v
o=new A.aH(v,B.ak,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.ck(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.ck(15,-40,11,t))
o.E(new A.bA())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aH(v,B.ak,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bA())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b4d){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iR(F.GP,3.4))
d.ah(D.eFZ,new A.r(9,n),C.iR(q,4))
d.ah(D.eDM,new A.r(10,n),C.iR(q,4))}else if(a1===D.b4e){d.ah(D.eEP,new A.r(-8,-26-Math.max(0,w)*6),C.iR(q,4))
d.ah(D.eBO,new A.r(8,-26-Math.max(0,-w)*6),C.iR(q,4))}else{w=s*3
v=-38-r
d.ah(D.eET,new A.r(-12-w,v),C.iR(q,4))
d.ah(D.aOi,new A.r(12+w,v),C.iR(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fro,w)
m=new A.r(0,-77-r)
w=A.bZ(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bZ(m.a7(0,K.w9),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a7(0,D.eBI)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bZ(m.a7(0,B.uh),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a7(0,D.eFX),m.a7(0,D.eEN),C.iR(v,2.2))
d.ah(m.a7(0,D.eDL),m.a7(0,D.eBF),C.iR(v,2.2))}if(w===4){w=m.a7(0,D.eG0)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a7(0,D.eDN)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a7(0,D.eEC)
v=A.L()
v.r=B.iu.gp(0)
d.O(w,0.9,v)
v=m.a7(0,D.eEr)
w=A.L()
w.r=B.iu.gp(0)
d.O(v,0.9,w)
if(i){l=m.a7(0,K.aap)
w=A.bZ(l,21,22)
v=A.L()
v.r=D.lW.gp(0)
d.c1(w,v)
v=A.bZ(l.a7(0,K.aOf),5,12)
w=A.L()
w.r=D.bjE.gp(0)
d.c1(v,w)
d.ah(l.a7(0,D.eFT),l.a7(0,K.aOD),C.iR(B.d_,1.4))
d.ah(D.aOi,new A.r(15,-88-r),C.iR(q,3.6))}j.restore()},
hMx(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bV(0,f)
v=A.bZ(B.dS,18,96)
u=B.v.j(0.28)
$.T()
t=A.L()
t.r=u.gp(0)
d.c1(v,t)
t=A.bZ(B.dS,11,70)
v=B.v.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c1(t,u)
d.lA(D.aUw,A.L())
C.il2(d,g,h,i,j)
s=(k==null?D.aau:k).a-w>=0?1:-1
w=A.L()
w.a=B.MW
w.san(A.jR(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.akw.j(0.5),D.akw.j(0.12),D.brm.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.w,null))
d.aE(D.aUw,w)
r.restore()
r.restore()},
il2(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
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
s=A.bx(D.frp,B.um)
p=$.T()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bx(D.frk,B.hT)
s=A.ap(v,B.v,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bx(D.fry,B.hT)
o=A.ap(v,B.v,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.frr,s)
s=A.L()
s.r=d.gp(0)
a1.c1(D.fqa,s)
s=a1.c
J.bs(s.save())
s.translate(a3.w,0)
J.bs(s.save())
a1.nL(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aH(p.r,B.ak,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.ck(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.ck(m+3,-62,m-2,-58))
l.E(new A.ck(0,-70,k,-58))
l.E(new A.bA())
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bs(s.save())
a1.mA(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dkM[j]
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.b=B.ad
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ao(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.T()
f=new A.ar(B.U,B.R,B.X,B.Y,B.W)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.U,B.R,B.X,B.Y,B.W)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.b=B.ad
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.b=B.ad
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.eFl,D.eCt,C.iR(a2.c.j(0.9),3))}a1.ah(D.eFU,D.eEV,C.iR(B.v.j(0.18),1.6))
a1.ah(D.eBN,K.aOk,C.iR(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.T()
i=A.L()
i.r=u.gp(0)
a1.aE(D.fq6,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.fqk,i)
n=new A.aH(k.r,B.ak,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ck(0,-57,9,-66))
n.E(new A.ck(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fqt,0.1,2.941592653589793,!1,C.iR(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.aaz
n=25*q
k=23*q
i=9*q
C.hIh(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.F9:o
C.hIh(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eDd,D.eD9,C.iR(D.alv,4))
a1.ah(D.eDb,D.eD7,C.iR(D.Hf.j(0.7),1.4))
u=A.L()
u.r=B.d_.gp(0)
a1.O(D.eDa,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jt(0,a3.f)
a1.bV(0,r)
C.ikZ(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hIh(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcL(),q=r===0?B.hF:s.f_(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a7(0,q.aO(0,n)).a7(0,v.aO(0,m))
t=e.a7(0,q.aO(0,p))
d.ah(e,u,C.iR(j,l))
o=A.ap(j,B.v,0.2)
o.toString
d.ah(e,u,C.iR(o,l*0.35))
d.ah(u,t,C.iR(k,l*0.78))
o=A.ap(k,B.v,0.22)
o.toString
d.ah(u,t,C.iR(o,l*0.22))
$.T()
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.bZ(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c1(o,w)
w=-l
w=t.a7(0,new A.r(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
ikZ(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bZ(B.w8,40,38)
$.T()
v=A.L()
v.r=c0.gp(0)
c2.c1(w,v)}if(c1===4){$.T()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eF2,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.eC3,9.5,w)}w=A.bZ(D.eGf,10,6)
v=$.T()
u=A.L()
u.r=c8.gp(0)
c2.c1(w,u)
u=A.bZ(D.eEz,10,6)
w=A.L()
w.r=c8.gp(0)
c2.c1(u,w)
v=v.r
w=x.v
t=new A.aH(v,B.ak,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.i5(13,-20,17,-9,16,2))
t.E(new A.i5(15,13,8,20,0,20))
t.E(new A.i5(-8,20,-15,13,-16,2))
t.E(new A.i5(-17,-9,-13,-20,0,-20))
t.E(new A.bA())
u=A.L()
u.san(A.wv(D.eFK,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.w,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iR(c8.j(0.5),0.8)
c2.cQ(D.frA,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fqd,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eF_,K.aOM,s)
c2.ah(D.eC_,D.eBR,s)
c2.cQ(D.fqs,2.2,1.4,!1,s)
c2.cQ(D.fqb,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fqH,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aH(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.ck(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.ck(0,-12,-13,-6))
p.E(new A.bA())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eER,D.eBS,C.iR(G.nN,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eF5,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.eC4,3,o)
o=new A.aH(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ck(-12,22,0,26))
o.E(new A.ck(12,22,13,6))
o.E(new A.ck(8,13,0,12))
o.E(new A.ck(-8,13,-13,6))
o.E(new A.bA())
p=A.L()
p.r=B.hX.gp(0)
c2.af(o,p)
p=new A.aH(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.ck(0,6,7,8))
p.E(new A.ck(0,10.5,-7,8))
o=A.L()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aH(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.ck(-20,-27,0,-29))
p.E(new A.ck(20,-27,17,-4))
p.E(new A.ck(0,-14,-17,-4))
p.E(new A.bA())
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.v,0.3)
o.toString
c2.cQ(D.fqO,3.4,2.5,!1,C.iR(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fqA,3.6,2.2,!1,C.iR(o,1.2))
o=new A.aH(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.ck(27,-34,25,-19))
o.E(new A.ck(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aH(v,B.ak,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.ck(24,-12,27,-26))
n.E(new A.ck(18,-22,11,-22))
o=A.ap(m,B.v,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.eBT,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fqL,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.b=B.ad
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aEZ[l]
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.b=B.ad
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fqK,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aap,K.aao,C.iR(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fqe,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bZ(D.eG2,5,8)
o=D.ahJ.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bZ(D.eEK,5,8)
p=D.ahJ.j(i)
o=A.L()
o.r=p.gp(0)
c2.c1(n,o)
h=c4.e*2.4
o=new A.aH(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ck(h-3.4,6,h-2.6,7.4))
o.E(new A.ck(h,8.8,h+2.6,7.4))
c2.af(o,C.iR(c8.j(0.75),1.1))
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
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.hr[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bZ(new A.r(a5,-3),a3,7)
a6=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a6.r=B.c.j(0.96).gp(0)
c2.c1(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bs(d.save())
a6=A.a([],w)
a4=new A.aH(v,B.ak,b9,b9,a6)
a6.push(new A.jL(A.bZ(new A.r(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.Ew(a4.gld().a.snapshot())
d.clipPath(a3.a,$.mS(),!0)
a3=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3.r=D.bnA.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3.r=B.v.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_R:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a9.b=B.ad
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bG
a9.e=B.dP
a3=p?0.8:0
c2.cQ(A.bZ(new A.r(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.dU
else{b1=A.ap(c0,B.v,0.2)
b1.toString}b2=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b2.b=B.ad
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dP
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.by8
else{u=A.ap(c8,D.bro,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aH(v,B.ak,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.ck(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.ck(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bA())
v=A.L()
v.r=D.bqG.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mA(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a5(w,11,w+b6*2,13.2),u)
u=A.bZ(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.byd.gp(0)
c2.c1(u,w)
d.restore()
c2.af(b8,C.iR(b4,1.1))}else{u=new A.aH(v,B.ak,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ck(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iR(b4,1.5))
if(b5>0.6){w=new A.aH(v,B.ak,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ck(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ck(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fqr,-1.2,2.2,!1,C.iR(c8.j(0.5),0.8))
c2.cQ(D.fqg,2.141592653589793,2.2,!1,C.iR(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.eEs,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.eEp,1.7,w)}},
iqv(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.T(),f=new A.oY(new A.ov()),e=A.v4(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jR(B.J,new A.r(0,a0*0.46),D.dhe,D.d7J,B.w,h))
e.aE(new A.a5(0,0,0+d,0+a0),a2)
a2=e.c
J.bs(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bV(0,a1)
w=new A.e4()
w.cV(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bs(a2.save())
a2.translate(200,120)
e.jt(0,-0.5)
d=A.L()
a0=x.O
d.san(A.wv(B.J,230,A.a([D.bmd,B.L],a0),h,B.w,h,h,0))
e.c1(D.fqW,d)
a2.restore()
d=A.L()
d.san(A.wv(D.aax,58,A.a([D.bpG,B.L],a0),h,B.w,h,h,0))
e.O(D.aax,58,d)
d=A.L()
d.r=D.bkW.gp(0)
e.O(D.aax,24,d)
d=A.L()
d.r=D.a0i.gp(0)
e.O(D.eCN,5,d)
d=A.L()
d.r=D.a0i.gp(0)
e.O(D.eCR,3.4,d)
d=A.L()
d.r=D.a0i.gp(0)
e.O(D.eCQ,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aH(g.r,B.ak,h,h,u)
u.push(new A.aZ(-60,420))
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
g=new A.bA()
u.push(g)
u=r.f
if(u!=null)g.aj(u)
r.ac()
g=[D.bjs,D.blu,D.brI][s]
u=$.T()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cBI[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.b=B.ad
u.c=2.4
u.r=D.a0E.gp(0)
u.d=B.bG
u.e=B.dP
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bZ(new A.r(g,k-27),11,46)
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=D.a0E.gp(0)
e.c1(g,u)
d=A.bZ(new A.r(o-12,d),8,24)
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=D.a0E.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=D.bkZ.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jR(D.eBm,D.eBp,D.d9Y,B.xM,B.w,h))
e.aE(new A.a5(-200,412,650,1300),g)
j=new A.e4()
j.cV(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bZ(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h9()?B.c:B.v
d=new A.ar(B.U,B.R,B.X,B.Y,B.W)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.bs(a2.save())
a2.translate(225,590)
e.nL(0,1,0.34)
g=A.L()
g.san(A.wv(B.J,250,A.a([D.bsI,D.blP,D.buE],a0),A.a([0,0.8,1],x.n),B.w,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.akc,D.bkt,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.T()
a0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a0.b=B.ad
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.ijc(e)
for(l=0;l<3;++l)C.ims(e,D.aCN[l])
C.imh(e,D.eCH)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.T()
a0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a0.b=B.ad
a0.c=2.4
a0.r=D.a0A.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.eBP,D.eC7,C.iR(D.blc,1.6))
a2.restore()
return f.n1()},
ijc(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.T().r,g=x.v,f=new A.aH(h,B.ak,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.i5(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i5(416,382,432,422,428,462))
f.E(new A.bA())
w=A.L()
w.san(A.jR(new A.r(354,0),new A.r(430,0),D.dGW,B.mb,B.w,i))
d.af(f,w)
v=new A.e4()
v.cV(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.b=B.ad
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dP
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dmj[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aH(h,B.ak,i,i,l)
l.push(new A.aZ(r,336))
k.ac()
r=new A.ck(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.b=B.ad
r.c=8
r.r=D.aiv.gp(0)
r.d=B.bG
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=A.ap(D.bl4,D.brG,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.b=B.ad
r.c=1.2
r.r=D.a0A.gp(0)
r.d=B.bG
r.e=B.dP
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bZ(new A.r(w,q+28),13,7)
w=new A.ar(B.U,B.R,B.X,B.Y,B.W)
w.r=D.bt4.gp(0)
d.c1(q,w)}},
ims(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bZ(new A.r(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.T(),b3=A.L()
b3.r=b1.gp(0)
b4.c1(b0,b3)
b2=b2.r
b3=x.v
w=new A.aH(b2,B.ak,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.ck(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bA())
u=A.L()
u.san(A.jR(new A.r(b0,0),new A.r(v,0),D.dmq,B.mb,B.w,a4))
b4.af(w,u)
t=new A.e4()
t.cV(B.o.S(a5*7))
v=b4.c
J.bs(v.save())
b4.mA(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.b=B.ad
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dP
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ak8.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aE(new A.a5(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.bd(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aH(b2,B.ak,a4,a4,j)
j.push(new A.aZ(k,o))
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
h=new A.bA()
j.push(h)
j=i.f
if(j!=null)h.aj(j)
i.ac()
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=D.lW.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aH(b2,B.ak,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.bd(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iR(D.ak8.j(0.7),1.6))
v.restore()
b0=$.T().r
b2=new A.aH(b0,B.ak,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.ck(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bA())
m=A.L()
m.r=D.akk.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.akk.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aH(b0,B.ak,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.ck(a5-a9,n,a5,u))
e.E(new A.ck(a5+a9,n,p,j))
e.E(new A.ck(a5,b1+a7*0.34,o,j))
e.E(new A.bA())
b1=A.L()
n=a7*1.4
b1.san(A.jR(new A.r(a5-n,0),new A.r(a5+n,0),D.dq9,B.mb,B.w,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mA(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h9()?B.v:D.bkC).j(0.16)
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.b=B.ad
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dP
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aH(b0,B.ak,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ac()
n=new A.ck(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ac()
b1=B.v.j(0.22)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.b=B.ad
n.c=1.2
n.r=b1.gp(0)
n.d=B.bG
n.e=B.dP
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ar(B.U,B.R,B.X,B.Y,B.W)
v.b=B.ad
v.c=1.1
v.r=D.bs9.gp(0)
v.d=B.bG
v.e=B.dP
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aH(b0,B.ak,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bA())
b0=A.L()
b0.r=D.bo4.gp(0)
b4.af(a9,b0)},
imh(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aEW[s]
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.b=B.ad
q.c=3
q.r=D.a0A.gp(0)
q.d=B.bG
q.e=B.dP
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bZ(e.a7(0,K.aOe),24,36)
t=$.T()
r=A.L()
r.r=D.bxl.gp(0)
d.c1(u,r)
t=new A.aH(t.r,B.ak,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.ck(w,v-24,r,u))
t.E(new A.bA())
u=A.L()
u.r=D.ajd.gp(0)
d.af(t,u)},
ilE(d){switch(B.o.F(d,8)){case 0:return D.b3t
case 1:return D.b3r
case 2:return D.b3q
case 3:return D.b3p
case 4:return D.b3s
case 5:return D.b3u
case 6:return D.hSC
default:return D.hSB}},
Th(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.brj()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.aaz:j
w.as=k==null?D.F9:k
C.hMx(d,e,p,C.ilE(m),w,s,m,l)},
hO1(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bW1:function bW1(){var _=this
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
tr:function tr(d,e,f,g,h,i,j,k,l,m){var _=this
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
brj:function brj(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
anA:function anA(){this.b=this.a=null},
aYr:function aYr(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bVU:function bVU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVV:function bVV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVW:function bVW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVX:function bVX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVY:function bVY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVZ:function bVZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bW_:function bW_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bW0:function bW0(){},
bVT:function bVT(d){this.a=d},
ah8:function ah8(d,e){this.a=d
this.b=e},
af3:function af3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nv(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bUD(s)
s.bDZ(d)
return s},
Hr(d,e,f,g,h,i,j){var w,v=A.U(g).k("X<1>")
v=A.d7(new A.X(g,new C.fEd(f),v),v.k("M.E"))
w=A.B(v,A.a3(v).k("ci.E"))
B.d.dY(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cV(w,0,A.dz(3,"count",x.S),A.U(w).c))
B.d.dY(v,d)
return new C.lN(e,v,B.d.c8(v,f),h,i,"tree",j)},
iHl(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.hg1(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.ju(c4,c0)
t=A.B(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.ju(c4,c0)
r=A.B(c4,A.a3(c4).k("ci.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.ju(c4,c0)
q=A.B(c4,A.a3(c4).k("ci.E"))
for(c4=w.length,v=A.U(t).k("X<1>"),s=v.k("M.E"),p=A.U(w).k("X<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.d()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.xh)g="father"
else g=h===D.oY?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.X(t,new C.hg3(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hr(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hg4(i,m),p),o)
B.d.dY(d,c6)
c2.$2(b4,new C.lN("True or false: "+h+" is the "+g+" of "+l+".",A6.Tv,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lN("True or false: "+B.a.i(B.d.gG(d).b)+" is the "+g+" of "+l+".",A6.Tv,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.GB(m)
h=a0.length
if(h!==0){a1=a0[c6.av(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hg5(l,a0,c5),v),s)
e=a1.c
if(e===D.xh)e="son"
else e=e===D.oY?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.Hr(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eC([h+1,h+2,Math.max(0,h-1)],n)
a5.X(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mL(a5,a5.r,f.k("mL<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.Hr(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gG(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iP<1>"),a3=new A.iP(a0,1,b3,a2),a3.nc(a0,1,b3,e.c),a3=new A.bR(a3,a3.gJ(0),a2.k("bR<aj.E>")),a2=a2.k("aj.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hr(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gG(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gG(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.asM(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hg6(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.Hr(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.d()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.d()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.X(t,new C.hg7(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.xh
if(e)a2=b7
else a2=f===D.oY?b8:b9
if(e)f=b7
else f=f===D.oY?b8:b9
c2.$2("grand",C.Hr(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aOJ(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.av(k)].b)
j=A.B(new A.X(t,new C.hg8(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hr(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cUJ)
h=l+" was born in "+k
c2.$2("place",C.Hr(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.db5)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hr(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hr(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jh(b1,b3,b3)
c2.$2("year",C.Hr(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bGK(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nv(d),l=new A.e4()
l.cV(f)
w=C.iHl(m,l,g)
for(v=new A.ds(w,w.r,w.e);v.C();)J.hvF(v.d,l)
v=A.a3(w).k("ct<1>")
u=A.B(new A.ct(w,v),v.k("M.E"))
B.d.dY(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fRV(n,w))))break
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
if(v<e){v=A.B(D.aBP,x.df)
B.d.dY(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hME(o,l))}}else if(!g&&v>3){o=C.hME(D.aBP[l.av(14)],l)
t[t.length-1-l.av(3)]=o}return t},
hME(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.dY(w,e)
return new C.lN(d.a,w,B.d.c8(w,v),d.d,d.e,d.f,d.r)},
hS8(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nv(a2),a1=new A.e4()
a1.cV(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.GB(q).length>=2)u.push(q)}B.d.dY(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.GB(n)
l=A.U(m)
k=new A.iP(m,0,5,l.k("iP<1>"))
k.nc(m,0,5,l.c)
j=k.df(0)
if(new A.O(j,new C.h6n(),A.U(j).k("O<1,G>")).fD(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aUb(a0,j[i]))
w.push(new C.avI("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c8(e.c_(0,a0.anV(q),new C.h6o()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("ct<1>")
d=A.B(new A.ct(e,t),t.k("M.E"))
B.d.fd(d)
v=A.a([],v)
for(u=A.cV(d,0,A.dz(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bR(u,u.gJ(0),t.k("bR<aj.E>")),t=t.k("aj.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cJ(s)
m.dY(s,a1)
v.push(m.gG(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aUb(a0,v[r]))
w.push(new C.avI("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aSC(d){return B.d.apm(D.aEi,new C.fNJ(d))},
ix8(d){return A.nO(new A.X(D.aEi,new C.fUM(d),x.av))},
bVr(d){return C.i11(d)},
i11(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bVr=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bVr)
case 7:r=f
q=B.a.i(d)
q=A.ev(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bVr,v)},
C3(d,e){return C.i0Z(d,e)},
i0Z(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$C3=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$C3)
case 7:r=g
p=B.a.i(d)
o=A.ev(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$C3)
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
return A.i($async$C3,v)},
bVq(d,e,f){return C.i1_(d,e,f)},
i1_(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bVq=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bVq)
case 7:r=h
q=B.a.i(d)
q=A.ev(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bVq,v)},
C4(d,e,f,g){return C.i10(d,e,f,g)},
i10(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$C4=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$C4)
case 7:r=i
p=B.a.i(d)
o=A.ev(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$C4)
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
return A.i($async$C4,v)},
bJ3(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hi5(d,e,f,g){return new C.am8(g,d==null?A.a(["","","",""],x.s):d,e,f)},
i_2(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aQ(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.bO)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cV(w,0,A.dz(4,"count",x.S),u).df(0)
B.d.u(w,A.c3(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.hi5(w,v,B.o.D(u==null?20:u,5,60),t)},
hwQ(d){var w,v,u,t,s,r,q=J.a1(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aQ(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.bO)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gP(q)
if(u.b(r))v.push(C.i_2(A.a0(r,t,s)))}return new C.Nd(p,w,v)},
hqP(d){var w,v=A.a([],x.c)
for(w=J.aQ(d.z);w.C();)v.push(C.hwQ(w.gP(w)))
return v},
aUb(d,e){var w=e.c===D.oY
if(d.anV(e)===0&&d.GB(e).length!==0)return w?0:1
if(d.GB(e).length!==0||d.asM(e)!=null)return w?2:3
return w?4:5},
hTd(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nv(a4),a3=new A.e4()
a3.cV(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
B.d.dY(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.d()
j=i.h(0,k)}h=a2.GB(m)
g=a2.asM(m)
f=a2.aOJ(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.xh)k="father"
else k=k===D.oY?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gG(h).b)+".")}if(j!=null){k=j.c
if(k===D.xh)k="father"
else k=k===D.oY?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dY(l,a3)
B.d.b_(l,new C.hgs())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hgt(d),o),n)
B.d.dY(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iP(a0,0,3,i.k("iP<1>"))
a1.nc(a0,0,3,i.c)
B.d.u(k,a1)
B.d.dY(k,a3)
a1=C.aUb(a2,m)
i=new A.iP(l,0,4,p)
i.nc(l,0,4,r)
w.push(new C.bcz(d,a1,i.df(0),k))
if(w.length>=5)break}return w},
hJU(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hSj(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nv(a4),a3=new A.e4()
a3.cV(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.GB(q).length>=2)u.push(q)}B.d.dY(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.GB(l)
j=A.U(k)
i=new A.iP(k,0,4,j.k("iP<1>"))
i.nc(k,0,4,j.c)
h=i.df(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.h7_(q))&&q.d!==j)i.push(q)}B.d.dY(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iP(i,0,k,m)
j.nc(i,0,k,n)
f=j.df(0)
j=B.a.i(l.b)
k=C.aUb(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aUb(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aUb(a2,f[g]))
w.push(new C.ab5(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lN:function lN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bUD:function bUD(d){this.b=d
this.c=$},
bUE:function bUE(){},
bUF:function bUF(d){this.a=d},
fEd:function fEd(d){this.a=d},
hg1:function hg1(d){this.a=d},
hg2:function hg2(){},
hg3:function hg3(d){this.a=d},
hg4:function hg4(d,e){this.a=d
this.b=e},
hg5:function hg5(d,e,f){this.a=d
this.b=e
this.c=f},
hg0:function hg0(d,e){this.a=d
this.b=e},
hg6:function hg6(d){this.a=d},
hg7:function hg7(d){this.a=d},
hg8:function hg8(d,e,f){this.a=d
this.b=e
this.c=f},
hg_:function hg_(d,e){this.a=d
this.b=e},
fRV:function fRV(d,e){this.a=d
this.b=e},
avI:function avI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h6n:function h6n(){},
h6o:function h6o(){},
zT:function zT(d,e,f){this.a=d
this.b=e
this.c=f},
fNJ:function fNJ(d){this.a=d},
fUM:function fUM(d){this.a=d},
am8:function am8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPp:function bPp(){},
Nd:function Nd(d,e,f){this.a=d
this.b=e
this.c=f},
bcz:function bcz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hgs:function hgs(){},
hgt:function hgt(d){this.a=d},
ab5:function ab5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h7_:function h7_(d){this.a=d},
bjZ:function bjZ(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ah6:function ah6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
alr:function alr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
als:function als(d,e,f,g,h){var _=this
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
_.ab$=h
_.c=_.a=null},
bNx:function bNx(d){this.a=d},
bNs:function bNs(){},
bNy:function bNy(){},
bNq:function bNq(){},
bNr:function bNr(){},
bNw:function bNw(d){this.a=d},
bNt:function bNt(d,e){this.a=d
this.b=e},
bNv:function bNv(d,e){this.a=d
this.b=e},
bNu:function bNu(d,e){this.a=d
this.b=e},
bNp:function bNp(d){this.a=d},
bf6:function bf6(d,e){this.b=d
this.a=e},
Rj:function Rj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD2:function aD2(d,e,f){this.b=d
this.c=e
this.a=f},
aBt:function aBt(d,e,f){this.a=d
this.b=e
this.c=f},
awi:function awi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awj:function awj(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.ds$=e
_.bc$=f
_.c=_.a=null},
cty:function cty(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctz:function ctz(d){this.a=d},
ctx:function ctx(d){this.a=d},
ctA:function ctA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctB:function ctB(){},
ctC:function ctC(d,e){this.a=d
this.b=e},
ctD:function ctD(){},
ctE:function ctE(d){this.a=d},
ctu:function ctu(d){this.a=d},
ctv:function ctv(d,e){this.a=d
this.b=e},
ctw:function ctw(d,e,f){this.a=d
this.b=e
this.c=f},
ctp:function ctp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctr:function ctr(d,e){this.a=d
this.b=e},
cts:function cts(d,e){this.a=d
this.b=e},
ctq:function ctq(d,e){this.a=d
this.b=e},
cto:function cto(){},
ctt:function ctt(){},
bey:function bey(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cTV:function cTV(){},
aAe:function aAe(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAf:function aAf(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cIv:function cIv(d){this.a=d},
cIu:function cIu(d){this.a=d},
cID:function cID(d,e){this.a=d
this.b=e},
cIE:function cIE(d,e){this.a=d
this.b=e},
cIF:function cIF(d){this.a=d},
cIC:function cIC(d){this.a=d},
cIG:function cIG(d){this.a=d},
cIH:function cIH(d,e){this.a=d
this.b=e},
cII:function cII(){},
cIJ:function cIJ(d){this.a=d},
cIx:function cIx(d){this.a=d},
cIy:function cIy(d,e){this.a=d
this.b=e},
cIw:function cIw(d,e){this.a=d
this.b=e},
cIz:function cIz(){},
cIA:function cIA(){},
cIB:function cIB(d,e){this.a=d
this.b=e},
aBd:function aBd(){},
aIF:function aIF(){},
hoq(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.btG((w-450*u)/2,(v-900*u)/2,u)},
agV:function agV(){},
fgg:function fgg(d){this.a=d},
aMw:function aMw(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fqJ:function fqJ(d){this.a=d},
anq:function anq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anr:function anr(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qh$=f
_.MA$=g
_.aor$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
bVp:function bVp(d){this.a=d},
bVo:function bVo(){},
bVm:function bVm(d){this.a=d},
bVk:function bVk(){},
bVl:function bVl(d){this.a=d},
bVh:function bVh(d,e){this.a=d
this.b=e},
bVi:function bVi(){},
bVj:function bVj(d){this.a=d},
bVn:function bVn(d,e){this.a=d
this.b=e},
bVg:function bVg(d){this.a=d},
bvq:function bvq(d,e){this.b=d
this.a=e},
fgh:function fgh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fgi:function fgi(d,e,f){this.a=d
this.b=e
this.c=f},
fgj:function fgj(d,e,f){this.a=d
this.b=e
this.c=f},
fgk:function fgk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fgl:function fgl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgm:function fgm(){},
ano:function ano(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anp:function anp(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qh$=f
_.MA$=g
_.aor$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
bV2:function bV2(){},
bVd:function bVd(d,e){this.a=d
this.b=e},
bVe:function bVe(d){this.a=d},
bVf:function bVf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bV9:function bV9(){},
bV8:function bV8(d,e){this.a=d
this.b=e},
bVa:function bVa(d,e){this.a=d
this.b=e},
bVb:function bVb(){},
bVc:function bVc(d){this.a=d},
bV4:function bV4(d){this.a=d},
bV5:function bV5(d){this.a=d},
bV6:function bV6(d){this.a=d},
bV3:function bV3(d,e){this.a=d
this.b=e},
bV7:function bV7(d){this.a=d},
blO:function blO(d,e){this.b=d
this.a=e},
dw2:function dw2(){},
a31:function a31(d,e){this.a=d
this.b=e},
ank:function ank(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anl:function anl(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qh$=e
_.MA$=f
_.aor$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
bUP:function bUP(d){this.a=d},
bUO:function bUO(){},
bUN:function bUN(){},
bUH:function bUH(){},
bUI:function bUI(){},
bUM:function bUM(d,e,f){this.a=d
this.b=e
this.c=f},
bUL:function bUL(d){this.a=d},
bUJ:function bUJ(d,e){this.a=d
this.b=e},
bUK:function bUK(d){this.a=d},
bld:function bld(d,e){this.b=d
this.a=e},
aD5:function aD5(){},
biM:function biM(){},
aD7:function aD7(){},
biN:function biN(){},
aD8:function aD8(){},
biO:function biO(){},
uJ(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.aa(0,B.H,f.j(0.4),B.hS,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.V(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.A(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.m),u,u,u,u,B.Py,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hxD(d,e,f,g,h,i,j){return new C.anm(i,h,d,j,e,f,g,null)},
a7x:function a7x(d,e){this.c=d
this.a=e},
blk:function blk(d){this.a=d},
tR:function tR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bUG:function bUG(d){this.a=d},
IO:function IO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
X2:function X2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bo7:function bo7(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e6Q:function e6Q(d,e){this.a=d
this.b=e},
e6R:function e6R(d){this.a=d},
e6S:function e6S(d,e){this.a=d
this.b=e},
e6O:function e6O(d){this.a=d},
e6P:function e6P(d){this.a=d},
e6N:function e6N(d){this.a=d},
e6L:function e6L(d){this.a=d},
e6M:function e6M(d){this.a=d},
e6K:function e6K(d,e){this.a=d
this.b=e},
e6T:function e6T(d){this.a=d},
e6U:function e6U(d,e){this.a=d
this.b=e},
e6V:function e6V(d,e){this.a=d
this.b=e},
e6W:function e6W(d,e){this.a=d
this.b=e},
e6Z:function e6Z(d,e){this.a=d
this.b=e},
e7_:function e7_(d,e){this.a=d
this.b=e},
e70:function e70(d,e){this.a=d
this.b=e},
e71:function e71(d,e){this.a=d
this.b=e},
e72:function e72(d,e){this.a=d
this.b=e},
e73:function e73(d,e,f){this.a=d
this.b=e
this.c=f},
e74:function e74(d,e){this.a=d
this.b=e},
e75:function e75(d,e){this.a=d
this.b=e},
e6X:function e6X(d){this.a=d},
e6Y:function e6Y(d){this.a=d},
a0R:function a0R(d,e){this.a=d
this.b=e},
anm:function anm(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ann:function ann(d){var _=this
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
bV0:function bV0(d){this.a=d},
bV1:function bV1(d){this.a=d},
bV_:function bV_(d){this.a=d},
bUR:function bUR(d){this.a=d},
bUS:function bUS(d){this.a=d},
bUQ:function bUQ(d){this.a=d},
bUX:function bUX(d,e,f){this.a=d
this.b=e
this.c=f},
bUY:function bUY(d){this.a=d},
bUU:function bUU(d,e){this.a=d
this.b=e},
bUV:function bUV(d,e,f){this.a=d
this.b=e
this.c=f},
bUZ:function bUZ(){},
bUW:function bUW(d,e){this.a=d
this.b=e},
bUT:function bUT(d){this.a=d},
UH:function UH(d,e){this.c=d
this.a=e},
anj:function anj(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bUr:function bUr(d){this.a=d},
bUs:function bUs(d){this.a=d},
bUC:function bUC(){},
bUB:function bUB(d,e,f){this.a=d
this.b=e
this.c=f},
bUw:function bUw(d,e){this.a=d
this.b=e},
bUv:function bUv(d,e){this.a=d
this.b=e},
bUx:function bUx(d){this.a=d},
bUy:function bUy(d,e){this.a=d
this.b=e},
bUz:function bUz(d,e){this.a=d
this.b=e},
bUu:function bUu(d,e){this.a=d
this.b=e},
bUA:function bUA(d,e,f){this.a=d
this.b=e
this.c=f},
bUt:function bUt(d,e){this.a=d
this.b=e},
ivB(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.akc(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.W(Date.now(),0,!1))
s=new C.fRl(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("X<1>"),q=q.k("cQ<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zN)m.push(l===D.xh?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cI(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cI(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jh(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jh(h,a2,a2)-A.jh(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.X(a4,new C.fRj(u,f),p),new C.fRk(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aL(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aL(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aw(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ivC(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.akc(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fRq(v,e)
q=new C.fRo(v)
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
d=A.d7(new A.ba(p,d),d.k("M.E"))
n=A.B(d,A.a3(d).k("ci.E"))
B.d.fd(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eR(l,new C.fRp(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aL(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
igt(d,e,f,g){var w,v,u=C.ivD(d,e)
if(u<=0||f.length<=u)return new A.agz(!1,D.Et,f)
if(g.q(0,e.a))return new A.agz(!1,D.Et,f)
w=A.U(f).c
v=A.cV(f,0,A.dz(u,"count",x.S),w).df(0)
return new A.agz(!0,A.cV(f,u,null,w).df(0),v)},
igu(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.akc(d3),d2=d1.length
if(d2===0)return D.hPC
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.dlg(t))}s=new C.dlx(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dlp(r)
for(p=new A.ds(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dlo(r)
l=A.S(w,x.do)
for(p=new A.ds(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c8(l.c_(0,k,new C.dlh()),o)}h=new C.dln(s)
g=new C.dlm(l,r)
p=v.$ti.k("ba<2>")
o=p.k("X<M.E>")
f=A.B(new A.X(new A.ba(v,p),new C.dli(h),o),o.k("M.E"))
e=f.length===0?new A.ba(v,p).gG(0):B.d.gG(f)
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
a9=new C.dlv(new C.dlr(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.ds(v,v.r,v.e),j=a2.ganq(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eC([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nO(J.dO(i==null?B.M:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.dlf(a2,new C.dlw(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.I)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("ct<1>")
d2=A.B(new A.ct(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.H_(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Lf(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("ct<1>")
d2=A.B(new A.ct(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.dlj(c6,b4))
for(d2=new A.ch(a4,a4.$ti.k("ch<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aQ(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eR(j,new C.dlk(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.dll())
c6.push(new C.aMq(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.biS(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hNo(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(d)
return w==null?null:w.b[1]},
hGW(d,e,f,g,h,i,j,k,l,m,n){return new C.a14(k,f,j,e,l,n,m,d,g,h,i,null)},
aF6(d,e,f,g,h,i,j){return new C.bmE(i,d,e,f,j,h,g,null)},
asu:function asu(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGH:function aGH(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e8v:function e8v(d){this.a=d},
e8u:function e8u(d){this.a=d},
e8x:function e8x(d,e){this.a=d
this.b=e},
e8y:function e8y(d,e){this.a=d
this.b=e},
e8z:function e8z(d){this.a=d},
e8t:function e8t(d,e){this.a=d
this.b=e},
e8w:function e8w(d){this.a=d},
e8B:function e8B(d){this.a=d},
e8A:function e8A(d,e){this.a=d
this.b=e},
aso:function aso(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGE:function aGE(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e7W:function e7W(d){this.a=d},
e7U:function e7U(d){this.a=d},
e7V:function e7V(d){this.a=d},
e7X:function e7X(d,e){this.a=d
this.b=e},
e7R:function e7R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7i:function e7i(d){this.a=d},
e7j:function e7j(d,e){this.a=d
this.b=e},
e7A:function e7A(d){this.a=d},
e7y:function e7y(d){this.a=d},
e7z:function e7z(d,e){this.a=d
this.b=e},
e7B:function e7B(d){this.a=d},
e7C:function e7C(d,e){this.a=d
this.b=e},
e7Q:function e7Q(d,e){this.a=d
this.b=e},
e7x:function e7x(d){this.a=d},
e7w:function e7w(d){this.a=d},
e7v:function e7v(d,e){this.a=d
this.b=e},
e7N:function e7N(){},
e7O:function e7O(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e7M:function e7M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e7G:function e7G(d){this.a=d},
e7H:function e7H(d,e,f){this.a=d
this.b=e
this.c=f},
e7F:function e7F(d,e){this.a=d
this.b=e},
e7I:function e7I(d,e){this.a=d
this.b=e},
e7D:function e7D(d,e){this.a=d
this.b=e},
e7E:function e7E(){},
e7J:function e7J(d,e){this.a=d
this.b=e},
e7K:function e7K(d){this.a=d},
e7L:function e7L(d,e){this.a=d
this.b=e},
e7P:function e7P(d,e){this.a=d
this.b=e},
e76:function e76(d,e){this.a=d
this.b=e},
e77:function e77(d,e){this.a=d
this.b=e},
e7Z:function e7Z(d,e,f){this.a=d
this.b=e
this.c=f},
e7T:function e7T(d,e,f){this.a=d
this.b=e
this.c=f},
e7S:function e7S(d){this.a=d},
e78:function e78(d){this.a=d},
e79:function e79(d){this.a=d},
e7a:function e7a(){},
e7b:function e7b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7f:function e7f(d,e){this.a=d
this.b=e},
e7e:function e7e(d,e){this.a=d
this.b=e},
e7d:function e7d(d){this.a=d},
e7g:function e7g(d,e){this.a=d
this.b=e},
e7c:function e7c(d){this.a=d},
e7Y:function e7Y(d){this.a=d},
e7s:function e7s(){},
e7t:function e7t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7r:function e7r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7n:function e7n(d,e,f){this.a=d
this.b=e
this.c=f},
e7m:function e7m(d,e,f){this.a=d
this.b=e
this.c=f},
e7k:function e7k(d,e){this.a=d
this.b=e},
e7o:function e7o(d){this.a=d},
e7p:function e7p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7l:function e7l(d,e){this.a=d
this.b=e},
e7q:function e7q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7u:function e7u(d,e){this.a=d
this.b=e},
e85:function e85(){},
e86:function e86(d,e){this.a=d
this.b=e},
e87:function e87(d){this.a=d},
e88:function e88(d,e){this.a=d
this.b=e},
e81:function e81(d){this.a=d},
e8_:function e8_(d,e){this.a=d
this.b=e},
e82:function e82(d,e){this.a=d
this.b=e},
e83:function e83(d,e){this.a=d
this.b=e},
e84:function e84(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e89:function e89(d){this.a=d},
e80:function e80(d){this.a=d},
e7h:function e7h(d){this.a=d},
biQ:function biQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dld:function dld(d){this.a=d},
dlc:function dlc(d,e){this.a=d
this.b=e},
dle:function dle(d){this.a=d},
dlb:function dlb(d,e){this.a=d
this.b=e},
fRl:function fRl(d,e){this.a=d
this.b=e},
fRm:function fRm(d){this.a=d},
fRn:function fRn(){},
fRj:function fRj(d,e){this.a=d
this.b=e},
fRk:function fRk(){},
fRq:function fRq(d,e){this.a=d
this.b=e},
fRr:function fRr(d){this.a=d},
fRs:function fRs(){},
fRo:function fRo(d){this.a=d},
fRp:function fRp(d,e){this.a=d
this.b=e},
Lf:function Lf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
H_:function H_(d,e){this.a=d
this.b=e},
biS:function biS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dlg:function dlg(d){this.a=d},
dlx:function dlx(d){this.a=d},
dlp:function dlp(d){this.a=d},
dlq:function dlq(){},
dlo:function dlo(d){this.a=d},
dlh:function dlh(){},
dln:function dln(d){this.a=d},
dlm:function dlm(d,e){this.a=d
this.b=e},
dli:function dli(d){this.a=d},
dlr:function dlr(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dls:function dls(d){this.a=d},
dlt:function dlt(d){this.a=d},
dlu:function dlu(){},
dlv:function dlv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dlw:function dlw(){},
dlf:function dlf(d,e,f,g,h,i,j,k,l,m){var _=this
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
dlj:function dlj(d,e){this.a=d
this.b=e},
dlk:function dlk(d){this.a=d},
dll:function dll(){},
aMq:function aMq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
biT:function biT(d,e){this.b=d
this.a=e},
dly:function dly(){},
dlz:function dlz(d){this.a=d},
dlA:function dlA(d){this.a=d},
dlB:function dlB(){},
bmF:function bmF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bhT:function bhT(d,e){this.b=d
this.a=e},
bAQ:function bAQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fwj:function fwj(d){this.a=d},
bq1:function bq1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f60:function f60(d){this.a=d},
f6_:function f6_(d,e){this.a=d
this.b=e},
a14:function a14(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aF4:function aF4(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dBP:function dBP(d,e){this.a=d
this.b=e},
dBO:function dBO(d){this.a=d},
dBM:function dBM(d){this.a=d},
dBN:function dBN(d){this.a=d},
dBY:function dBY(d){this.a=d},
dBZ:function dBZ(d){this.a=d},
dBX:function dBX(d,e){this.a=d
this.b=e},
dC_:function dC_(){},
dC2:function dC2(d){this.a=d},
dBW:function dBW(d,e){this.a=d
this.b=e},
dC1:function dC1(){},
dC3:function dC3(d){this.a=d},
dBV:function dBV(d,e){this.a=d
this.b=e},
dC4:function dC4(d){this.a=d},
dBU:function dBU(d){this.a=d},
dC5:function dC5(d){this.a=d},
dBT:function dBT(d){this.a=d},
dC6:function dC6(d){this.a=d},
dBS:function dBS(d){this.a=d},
dC7:function dC7(d){this.a=d},
dBR:function dBR(d){this.a=d},
dC8:function dC8(d){this.a=d},
dBQ:function dBQ(d,e){this.a=d
this.b=e},
dC0:function dC0(d){this.a=d},
afq:function afq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmE:function bmE(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
afp:function afp(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bmD:function bmD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dC9:function dC9(d){this.a=d},
dCa:function dCa(d,e){this.a=d
this.b=e},
aF5:function aF5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aLs:function aLs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afr:function afr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dCj:function dCj(d){this.a=d},
GW:function GW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hBH(d){var w=d.cH,v=x.N
return w.iX(w,new C.chU(),v,v)},
i7I(d){var w=d.bF
if(w>=0)return w
return 5},
hBJ(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hBH(d).h(0,v)
if(w==null||w.length===0)return null
return A.be(w)},
hBI(d,e){var w=C.hBJ(d,e)
if(w!=null&&w.c9(new A.W(Date.now(),0,!1)))return!0
return!1},
i7J(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a0(C.hBH(d),w,w)
u=C.hBJ(d,e)
t=u!=null&&u.c9(new A.W(Date.now(),0,!1))?u:new A.W(Date.now(),0,!1)
v.n(0,s,t.bL(A.dt(30,0,0,0,0,0).a).aa().ag())
d.cH=v},
b39(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b39=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lW(t,B.Ku),$async$b39)
case 3:if(l){u=!0
w=1
break}u=A.lw(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Ku,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b39,v)},
chU:function chU(){},
i7G(){var w,v=$.oO(),u=J.e6(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.hl(u)},
JJ(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cf(),$async$JJ)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.fb("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JJ)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"codes")
if(x.f.b(q)){o=A.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
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
return A.i($async$JJ,v)},
a9g(d){return C.i7H(d)},
i7H(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a9g=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cf(),$async$a9g)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i0("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cY,null),$async$a9g)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.an.$1("[family tree sync codes] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a9g,v)},
chT(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$chT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JJ(),$async$chT)
case 3:t=m.ii(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gP(t)
q=r.b
if(s.b(q)){p=J.a1(q)
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
return A.i($async$chT,v)},
OQ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$OQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.chT(d),$async$OQ)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JJ(),$async$OQ)
case 6:s=f
r=J.a1(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dE(A.a0(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a9g(s),$async$OQ)
case 9:case 8:u=t
w=1
break
case 5:n=C.i7G()
w=10
return A.b(C.JJ(),$async$OQ)
case 10:s=f
J.aL(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a9g(s),$async$OQ)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
b38(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b38=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JJ(),$async$b38)
case 3:t=f
for(s=J.dw(t),r=s.gdT(t),r=r.df(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a9g(t),$async$b38)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b38,v)},
a9h(d,e,f){var w=0,v=A.j(x.H),u
var $async$a9h=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ast(d,e),$async$a9h)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.OQ(d),$async$a9h)
case 7:w=4
break
case 5:w=8
return A.b(C.b38(d),$async$a9h)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a9h,v)},
asn(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$asn=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ast(f,e),$async$asn)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.cf(),$async$asn)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JJ(),$async$asn)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a1(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asn,v)},
b37(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b37=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.cf(),$async$b37)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JJ(),$async$b37)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a1(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b37,v)},
i7K(){var w,v=$.oO(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"FT"+B.d.hl(u)},
asq(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$asq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cf(),$async$asq)
case 3:if(!g){u=null
w=1
break}t=C.i7K()
w=4
return A.b(A.X3(),$async$asq)
case 4:s=g
r=B.e3.aK(B.V.au(d.f4(),null))
r=B.cS.gcp().aK(r)
q=e?999:2
J.aL(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a9i(s),$async$asq)
case 5:p=e?999:2
u=new A.a2g("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asq,v)},
asp(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$asp=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.X3(),$async$asp)
case 3:p=a0
o=J.a1(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a1(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.i.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b37(J.k(l==null?"":l),j),$async$asp)
case 4:if(!a0)$.an.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cf.cF(0,B.cK.aK(t))
s=C.hBK(r)}catch(f){q=A.ac(f)
$.an.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.X(p,g)
else{m=x.N
l=x.z
l=A.dE(A.a0(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a9i(p),$async$asp)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asp,v)},
hBK(d){var w,v,u,t,s=null
try{w=B.V.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i7M(A.a0(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.an.$1("[family tree sync] parse: "+A.v(v))
return s}},
hkd(d){var w=0,v=A.j(x.m),u,t,s
var $async$hkd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.asp(t[1])
w=1
break}u=null
w=1
break}u=C.hBK(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hkd,v)},
i7M(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cK(v,x.f)
u=A.cs(u,new C.chW(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("X<M.E>")
s=A.B(new A.X(u,new C.chX(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.be(J.k(u==null?"":u))
if(r==null)r=new A.W(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ii(p),t=t.gae(t),o=x.B;t.C();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cK(l,u)
n=A.cs(n,new C.chY(),n.$ti.k("M.E"),o)
k=A.a3(n).k("X<M.E>")
j=A.B(new A.X(n,new C.chZ(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.asr(h,w,s,r,q)},
ast(d,e){var w=0,v=A.j(x.y),u,t
var $async$ast=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(R.OG(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bz(d),$async$ast)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ast,v)},
ci4(d){var w=0,v=A.j(x.bC),u,t,s
var $async$ci4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bz(d),$async$ci4)
case 3:t=s.b8(f,new C.ci5(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b_(t,new C.ci6())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ci4,v)},
X4(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$X4=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ast(e,d),$async$X4)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.OQ(e),$async$X4)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bz(e),$async$X4)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dO(r,new C.ci2(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a1(r)
if(t.gar(r)){u=null
w=1
break}t=t.dQ(r,new C.ci3(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.M6(e,o),$async$X4)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.asr(s,B.a.i(e.toLowerCase()),r,new A.W(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$X4,v)},
b3c(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b3c=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.X4(d,e,f,g),$async$b3c)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gG(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aK(t,s,"_")
r=q.a
u=A.HF(A.Lb(q.f4(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3c,v)},
b3b(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b3b=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.X4(d,e,f,g),$async$b3b)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.asq(r,f),$async$b3b)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aJq(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3b,v)},
X5(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$X5=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hkd(a0),$async$X5)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.asn(g.a,d,e,f,s,r),$async$X5)
case 6:if(!a2){if(r)throw A.Y(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.Y(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bGo(e,j),$async$X5)
case 12:case 11:w=13
return A.b(C.ajV(e,j,s),$async$X5)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.BJ(e,i,h),$async$X5)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.btM(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$X5,v)},
asr:function asr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ci0:function ci0(){},
ci1:function ci1(){},
ci_:function ci_(){},
chW:function chW(){},
chX:function chX(){},
chY:function chY(){},
chZ:function chZ(){},
ci5:function ci5(){},
ci6:function ci6(){},
ci2:function ci2(d){this.a=d},
ci3:function ci3(d){this.a=d},
htH(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f9(null,x.H)
return A.hk(d,new C.ass(w,e,g,i,f,h,null),!0,null,x.H)},
dla(d,e,f,g,h,i,j,k){return new C.biP(i,e,k,j,g,f,h,d,null)},
ass:function ass(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGG:function aGG(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e8i:function e8i(d){this.a=d},
e8j:function e8j(d,e,f){this.a=d
this.b=e
this.c=f},
e8n:function e8n(d,e){this.a=d
this.b=e},
e8o:function e8o(d){this.a=d},
e8f:function e8f(d){this.a=d},
e8g:function e8g(d,e){this.a=d
this.b=e},
e8h:function e8h(d,e){this.a=d
this.b=e},
e8m:function e8m(d){this.a=d},
e8l:function e8l(d,e){this.a=d
this.b=e},
e8k:function e8k(){},
e8q:function e8q(d){this.a=d},
e8r:function e8r(d,e){this.a=d
this.b=e},
e8p:function e8p(d,e){this.a=d
this.b=e},
dlC:function dlC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
biR:function biR(d,e,f){this.d=d
this.e=e
this.a=f},
aeF:function aeF(d,e,f){this.c=d
this.d=e
this.a=f},
biP:function biP(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
biU:function biU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a1o:function a1o(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGF:function aGF(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e8a:function e8a(d,e){this.a=d
this.b=e},
e8b:function e8b(d){this.a=d},
e8c:function e8c(d){this.a=d},
e8d:function e8d(d){this.a=d},
e8e:function e8e(d){this.a=d},
a1p:function a1p(d){this.a=d},
bo8:function bo8(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e8s:function e8s(d,e){this.a=d
this.b=e},
b1G(d,e){return new C.b1F(d,e,null)},
b1F:function b1F(d,e,f){this.c=d
this.d=e
this.a=f},
iy6(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
iFR(d){return A.bV(B.L,null,new C.h8x(new C.uu(A.Q(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hDM(d,e){return new C.avw(e,d,null)},
aU5(d,e,f,g,h,i,j){var w=C.iy6(i)
if(w!=null)return A.bv(e,new A.a4(j,f,new C.a8j(w,!0,null),null),B.ap)
return A.aTp(e,B.c_,f,g,h,i,j)},
mh:function mh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a8j:function a8j(d,e,f){this.c=d
this.d=e
this.a=f},
bnN:function bnN(d,e){var _=this
_.e=_.d=$
_.ds$=d
_.bc$=e
_.c=_.a=null},
dUd:function dUd(d){this.a=d},
dUe:function dUe(){},
dUf:function dUf(d,e){this.a=d
this.b=e},
bnM:function bnM(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h8x:function h8x(d){this.a=d},
h8w:function h8w(d,e){this.a=d
this.b=e},
h8v:function h8v(d,e){this.a=d
this.b=e},
h8u:function h8u(d,e){this.a=d
this.b=e},
avw:function avw(d,e,f){this.c=d
this.d=e
this.a=f},
crQ:function crQ(d,e){this.a=d
this.b=e},
aOT:function aOT(){},
iFB(d){var w=null
return A.ce(w,w,!0,w,new C.h7U(),d,w,!0,!0,x.e2)},
iGR(d,e,f,g,h){var w=null
return A.ce(w,w,!0,w,new C.hfK(h,g,f,e),d,w,!0,!0,x.N)},
iFD(d,e){var w=null
return A.ce(w,w,!0,w,new C.h7Y(e),d,w,!0,!0,x.dY)},
iFC(d){var w=null
return A.ce(w,w,!0,w,new C.h7X(),d,w,!0,!0,x.c5)},
aX3:function aX3(d,e){this.a=d
this.b=e},
aX2:function aX2(d){this.a=d},
aV5:function aV5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h7U:function h7U(){},
hfK:function hfK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h7Y:function h7Y(d){this.a=d},
h7X:function h7X(){},
a01:function a01(d,e){this.c=d
this.a=e},
aBN:function aBN(){var _=this
_.d=$
_.c=_.a=_.e=null},
dcG:function dcG(d){this.a=d},
dcH:function dcH(d){this.a=d},
dcF:function dcF(d,e){this.a=d
this.b=e},
dcI:function dcI(d){this.a=d},
dcJ:function dcJ(d){this.a=d},
a00:function a00(d){this.a=d},
aBM:function aBM(){this.d=$
this.c=this.a=null},
dcC:function dcC(d){this.a=d},
dcD:function dcD(d){this.a=d},
dcE:function dcE(d){this.a=d},
a_u:function a_u(d){this.a=d},
aAr:function aAr(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cKa:function cKa(){},
cKg:function cKg(d){this.a=d},
cKh:function cKh(d){this.a=d},
cKi:function cKi(d){this.a=d},
cKf:function cKf(){},
cKj:function cKj(d){this.a=d},
cKk:function cKk(d){this.a=d},
cKe:function cKe(){},
cKl:function cKl(d,e){this.a=d
this.b=e},
cKd:function cKd(d,e){this.a=d
this.b=e},
cKb:function cKb(d,e){this.a=d
this.b=e},
cKm:function cKm(d){this.a=d},
cKc:function cKc(){},
cKn:function cKn(d){this.a=d},
a3d:function a3d(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bAI:function bAI(){this.d=$
this.c=this.a=null},
fvP:function fvP(d,e){this.a=d
this.b=e},
fvQ:function fvQ(d){this.a=d},
fvR:function fvR(d,e){this.a=d
this.b=e},
adG:function adG(d,e){this.a=d
this.b=e},
GL:function GL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bAG:function bAG(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
fvN:function fvN(d,e){this.a=d
this.b=e},
aAk:function aAk(d,e){this.c=d
this.a=e},
bAH:function bAH(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
fvO:function fvO(d){this.a=d},
bAF:function bAF(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aR0:function aR0(){},
aR1:function aR1(){},
bIu(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bd(u),s=B.o.D(B.i.S((u-t)*100),0,99),r=d<0?"-":"",q=A.o9(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h6a(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aZ(B.o.v(s),2,"0")
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.GC(A.cW(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aTI(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aTI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.id().l7(85,1280,B.f0),$async$aTI)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fv(),$async$aTI)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hDL()
w=9
return A.b(C.crP(q,r),$async$aTI)
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
o=A.ac(l)
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
return A.i($async$aTI,v)},
aU3(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aU3=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.crM(g)
w=1
break}if(!B.a.Y(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gal(g.split(",")):g
p=B.cK.aK(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.HG(p,!0,null,o).d7(0,B.fO),$async$aU3)
case 9:n=a1
w=10
return A.b(n.lb(),$async$aU3)
case 10:m=a1
w=11
return A.b(m.b.ho(B.hq),$async$aU3)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eW(B.dM.gaS(l))
k="data:image/png;base64,"+B.cS.gcp().aK(i)
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
j=A.ac(f)
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
return A.i($async$aU3,v)},
h6a:function h6a(){},
uu:function uu(d){this.a=d},
avv:function avv(d,e,f){this.c=d
this.d=e
this.a=f},
aIf:function aIf(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f3a:function f3a(d,e){this.a=d
this.b=e},
f31:function f31(d){this.a=d},
f32:function f32(d){this.a=d},
f38:function f38(d,e){this.a=d
this.b=e},
f37:function f37(d,e){this.a=d
this.b=e},
f34:function f34(d,e){this.a=d
this.b=e},
f33:function f33(d,e){this.a=d
this.b=e},
f35:function f35(d){this.a=d},
f36:function f36(d,e){this.a=d
this.b=e},
f39:function f39(d,e){this.a=d
this.b=e},
f2X:function f2X(d,e){this.a=d
this.b=e},
f30:function f30(d){this.a=d},
f3_:function f3_(d,e){this.a=d
this.b=e},
f2Z:function f2Z(d){this.a=d},
f3b:function f3b(d,e){this.a=d
this.b=e},
f3c:function f3c(d,e){this.a=d
this.b=e},
f2Y:function f2Y(d,e){this.a=d
this.b=e},
hRJ(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.W(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
h6b(d,e,f){var w=0,v=A.j(x.N),u
var $async$h6b=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.V.au(C.hRJ(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h6b,v)},
bIw(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bIw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h6b(!0,d,e),$async$bIw)
case 4:w=3
return A.b(r.avt(g,d,e.a),$async$bIw)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e3.aK(B.V.au(C.hRJ(d,e,null),null))
u="NGMY_WS:"+B.l0.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIw,v)},
hIn(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hth(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.db(s,"NGMYWSSYNC2|"))return!0
if(J.db(s,"NGMY_WS:"))return!0
if(J.eF(s,t))return!0
if(J.db(s,"{"))try{w=B.V.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iDB(d){var w,v,u,t=C.hIn(d)
if(t==null)return null
if(C.hth(t))return t
w=B.a.c8(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.hth(v))return v}u=B.a.c8(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.hth(v))return v}return null},
htg(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.db(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.db(q,"NGMY_WS:")){v=B.cf.cF(0,B.cK.aK(J.ni(q,8)))
w=t.a(B.V.aP(0,v,r))}else w=t.a(B.V.aP(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hmY(A.a0(u,x.N,x.z))
return t}catch(s){return r}},
bIv(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bIv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.avs(t[1]),$async$bIv)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.htg(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.htg(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIv,v)},
htf(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.m_(w,v,d.c,d.d,new A.W(Date.now(),0,!1))},
bHZ(){var w=0,v=A.j(x.o),u,t
var $async$bHZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HP(),$async$bHZ)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.htg(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHZ,v)},
hSX(d,e,f,g){return A.bV(B.L,null,new C.hfx(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
hfx:function hfx(d,e,f){this.a=d
this.b=e
this.c=f},
afM:function afM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f3e:function f3e(d,e){this.a=d
this.b=e},
f3f:function f3f(d,e){this.a=d
this.b=e},
f3g:function f3g(d,e){this.a=d
this.b=e},
f3h:function f3h(d,e){this.a=d
this.b=e},
f3d:function f3d(d){this.a=d},
avp:function avp(d,e,f){this.c=d
this.d=e
this.a=f},
bpx:function bpx(){var _=this
_.c=_.a=_.e=_.d=null},
f2S:function f2S(d,e){this.a=d
this.b=e},
f2T:function f2T(d){this.a=d},
f2U:function f2U(d){this.a=d},
avu:function avu(d){this.a=d},
aIe:function aIe(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f2W:function f2W(d){this.a=d},
f2V:function f2V(d){this.a=d},
ib9(d,e,f,g,h){return new C.Py(h,g,d,e,f,null)},
aNd:function aNd(d,e){this.a=d
this.b=e},
Py:function Py(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIg:function aIg(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f3E:function f3E(){},
f3A:function f3A(d,e){this.a=d
this.b=e},
f3B:function f3B(d){this.a=d},
f3l:function f3l(d){this.a=d},
f3j:function f3j(d){this.a=d},
f3k:function f3k(d){this.a=d},
f3u:function f3u(d,e){this.a=d
this.b=e},
f3r:function f3r(d,e){this.a=d
this.b=e},
f3s:function f3s(d,e){this.a=d
this.b=e},
f3t:function f3t(d,e,f){this.a=d
this.b=e
this.c=f},
f3p:function f3p(d,e,f){this.a=d
this.b=e
this.c=f},
f3n:function f3n(d){this.a=d},
f3o:function f3o(d){this.a=d},
f3q:function f3q(d){this.a=d},
f3H:function f3H(d){this.a=d},
f3G:function f3G(d){this.a=d},
f3I:function f3I(d){this.a=d},
f3F:function f3F(d){this.a=d},
f3i:function f3i(d){this.a=d},
f3m:function f3m(d,e){this.a=d
this.b=e},
f3D:function f3D(d,e){this.a=d
this.b=e},
f3C:function f3C(d,e){this.a=d
this.b=e},
f3x:function f3x(d){this.a=d},
f3y:function f3y(d){this.a=d},
f3z:function f3z(d,e){this.a=d
this.b=e},
f3w:function f3w(d,e){this.a=d
this.b=e},
f3v:function f3v(d,e,f){this.a=d
this.b=e
this.c=f},
bCu:function bCu(){},
Bm(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aK(v,w,"_")},
aio(d,e,f){return C.irr(d,e,f)},
irr(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aio=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$aio)
case 7:q=h
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
r=A.ac(o)
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
return A.i($async$aio,v)},
ain(d,e){return C.irq(d,e)},
irq(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ain=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$ain)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ac(q)
$.an.$1("[worksheets] remove failed for "+e+": "+A.v(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ain,v)},
iqg(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Um(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bFh(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bFh=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b6s(q),$async$bFh)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aU3(q,!1),$async$bFh)
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
return A.i($async$bFh,v)},
hZi(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rG(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rG(p,J.k(u==null?"":u),1,o,q)},
hmY(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cK(s,x.f)
w=A.cs(w,new C.cJt(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("X<M.E>")
r=A.B(new A.X(w,new C.cJu(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.be(J.k(t==null?"":t))
return new C.m_(w,v,u,r,t==null?new A.W(Date.now(),0,!1):t)},
ivx(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.xh
case"female":case"f":return D.oY
default:return D.zN}},
hNX(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hxE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ivx(v==null?j:J.k(v))
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
m=m==null?j:B.i.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.i.M(k)
return new C.ic(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ivz(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.PV
case"viewer":return D.le
default:return D.vp}},
ivA(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HH(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aSH(d,e){return B.a.i(e.toLowerCase())===C.HH(d,e)&&d.y!==D.le},
uK(d,e){var w,v=d.y
if(v===D.le)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HH(d,e))return!0
if(v===D.PV)return!0
v=d.e
return new A.O(v,A.htn(),A.U(v).k("O<1,n>")).q(0,w)},
iuU(d){return J.dO(d,new C.fQd()).gJ(0)},
hgi(d){var w=0,v=A.j(x.y),u,t
var $async$hgi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bz(d),$async$hgi)
case 3:u=t.rB(f,new C.hgj(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hgi,v)},
bGo(d,e){var w=0,v=A.j(x.H),u,t
var $async$bGo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bz(d),$async$bGo)
case 3:t=g
if(J.rB(t,new C.fNI(e))){w=1
break}if(C.iuU(t)>=2)throw A.Y(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bGo,v)},
ant(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cK(h,x.f)
w=A.cs(w,new C.bVs(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("X<M.E>")
g=A.B(new A.X(w,new C.bVt(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bVu(),x.N)
t=A.B(w,w.$ti.k("aj.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.be(J.k(q==null?"":q))
if(q==null)q=new A.W(Date.now(),0,!1)
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ivz(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aQ(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.bO)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a0(i,k,j))}return new C.le(w,v,s,!r,t,g,q,p,o,n,m)},
hOb(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aw(v,0,8)},
DX(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Tg(d),$async$DX)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aB(),$async$DX)
case 4:t=f
w=5
return A.b(t.a8o(0),$async$DX)
case 5:w=6
return A.b(C.fDK(t,l),$async$DX)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.ga_(B.a.i(l.toLowerCase()))
q=t.a
p=J.a1(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hJ_(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pv(l,n),$async$DX)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.ga_(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hJ_(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pv(l,n),$async$DX)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DX,v)},
fDK(d,e){return C.inB(d,e)},
inB(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fDK=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a1(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bm(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.V.aP(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aQ(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gP(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bm(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.V.aP(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hmY(A.a0(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bm(a9)+"_"+n))
i=C.iqg(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b6s(h),$async$fDK)
case 17:g=b1
if(g!=null){i=i.Um(g)
p=!0}case 16:J.c8(q,i)
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
case 8:J.Tq(q,new C.fDL())
if(p&&J.ad(q)!==0)C.pv(a9,q)
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
return A.i($async$fDK,v)},
bGS(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bGS=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Tg(d),$async$bGS)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DX(r),$async$bGS)
case 4:t=p.aQ(g)
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
return A.i($async$bGS,v)},
hJ_(d){var w,v,u,t
try{w=B.V.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cK(w,x.f)
v=A.cs(v,new C.fzh(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("X<M.E>")
v=A.B(new A.X(v,new C.fzi(),u),u.k("M.E"))
B.d.b_(v,new C.fzj())
return v}catch(t){v=A.a([],x.D)
return v}},
pv(d,e){return C.iFq(d,e)},
iFq(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pv=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Tg(b2),$async$pv)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aB(),$async$pv)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bm(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.V.aP(0,p,null)),new C.h7I(),a2).fD(0)
a2=J.b8(b3,new C.h7J(),a2).c0(0,new C.h7K())
n=A.d7(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e8(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eF(n,m)?17:18
break
case 17:a5=C.Bm(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aaE(l),$async$pv)
case 19:t=21
a5=C.Bm(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.V.aP(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.aaE(a5==null?null:J.k(a5)),$async$pv)
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
return A.b(C.ain(r,"ngmy_worksheet_item_v3_"+C.Bm(a8)+"_"+m),$async$pv)
case 29:w=30
return A.b(C.ain(r,"ngmy_worksheet_thumb_v3_"+C.Bm(a8)+"_"+m),$async$pv)
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
case 14:case 10:a2=J.cJ(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bFh(h),$async$pv)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aio(r,"ngmy_worksheet_thumb_v3_"+C.Bm(a8)+"_"+a4,f),$async$pv)
case 40:g=i.Um(f)
w=38
break
case 39:$.an.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ain(r,"ngmy_worksheet_thumb_v3_"+C.Bm(a8)+"_"+a4),$async$pv)
case 41:g=i.Um(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ain(r,"ngmy_worksheet_thumb_v3_"+C.Bm(a8)+"_"+a4),$async$pv)
case 42:case 34:a4=i.a
w=43
return A.b(C.aio(r,"ngmy_worksheet_item_v3_"+C.Bm(a8)+"_"+a4,B.V.au(g.ak(),null)),$async$pv)
case 43:e=b5
if(!e){$.an.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.c8(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aio(r,"ngmy_worksheets_index_v3_"+C.Bm(a8),B.V.au(q,null)),$async$pv)
case 44:d=b5
if(!d){$.an.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eT(b3,new C.h7L(q))
a4=a3.$ti.k("cQ<1,a9<n,@>>")
a7=A.B(new A.cQ(a3,new C.h7M(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.aio(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.ga_(B.a.i(a8.toLowerCase()))),B.V.au(a0,null)),$async$pv)
case 45:w=46
return A.b(J.hYn(r),$async$pv)
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
a1=A.ac(b1)
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
return A.i($async$pv,v)},
MB(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$MB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DX(d),$async$MB)
case 3:t=g
s=J.cJ(t)
r=s.bl(t,new C.hgh(e))
if(r===-1)s.ce(t,0,e)
else s.n(t,r,e)
u=C.pv(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MB,v)},
bGE(d,e){var w=0,v=A.j(x.H),u
var $async$bGE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DX(d),$async$bGE)
case 2:u=g
J.nh(u,new C.fQH(e))
w=3
return A.b(C.pv(d,u),$async$bGE)
case 3:return A.h(null,v)}})
return A.i($async$bGE,v)},
HJ(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$HJ)
case 3:l=f
k=A.a([],x._)
j=B.a.ga_(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.V.aP(0,i,null)
if(x.j.b(t)){j=J.cK(t,x.f)
j=A.cs(j,new C.fTW(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("X<M.E>")
r=A.B(new A.X(j,new C.fTX(),s),s.k("M.E"))
B.d.b_(r,new C.fTY())
k=r}}catch(h){}w=4
return A.b(C.fA3(d),$async$HJ)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.inY(k,p,d)
j=A.U(o)
s=j.k("O<1,a9<n,@>>")
s=A.B(new A.O(o,new C.fTZ(),s),s.k("aj.E"))
n=B.V.au(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Sm(d,o),$async$HJ)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fU_(d),j),j.k("M.E"))
if(m.length!==0)C.aSt(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HJ,v)},
h7u(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h7u=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Sm(d,e),$async$h7u)
case 3:t=J.dO(e,new C.h7v(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aSt(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h7u,v)},
a4W(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4W=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a4W)
case 2:n=g
m=B.a.ga_(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.V.aP(0,l,null)
if(x.j.b(u)){m=J.cK(u,x.f)
m=A.cs(m,new C.hgc(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("X<M.E>")
s=A.B(new A.X(m,new C.hgd(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oT(o,new C.hge(e))
if(B.a.i(e.x).length===0&&C.uK(e,d)){m=B.a.i(d.toLowerCase())
p=e.aHQ(e.y===D.le?D.le:D.vp,m)}else p=e
if(q===-1)J.ng(o,0,p)
else J.aL(o,q,p)
w=3
return A.b(C.Sm(d,o),$async$a4W)
case 3:w=C.uK(p,d)?4:5
break
case 4:w=6
return A.b(C.aSs(C.HH(p,d),p),$async$a4W)
case 6:if(!g)$.an.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4W,v)},
aSF(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aSF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HJ(d),$async$aSF)
case 2:u=g
t=J.cJ(u)
s=A.nO(t.eT(u,new C.fQo(e)))
t.br(u,new C.fQp(e))
w=3
return A.b(C.Sm(d,u),$async$aSF)
case 3:w=s!=null&&C.aSH(s,d)?4:5
break
case 4:w=6
return A.b(C.fzl(e),$async$aSF)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aSF,v)},
akc(d){var w=d.f,v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.hgn(),v),v.k("M.E"))
return w},
hqD(d,e){var w,v=d.f,u=A.nO(new A.X(v,new C.fPT(e),A.U(v).k("X<1>")))
v=C.akc(d)
w=A.U(v).k("X<1>")
v=A.B(new A.X(v,new C.fPU(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fPV())
return v},
ivD(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hT0(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bl(C.hqD(d,u),new C.hfL(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ix9(d,e){var w
if(e==null||e.length===0)return 1
w=C.hqD(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fUN(),A.U(w).k("O<1,G>")).eH(0,B.yK)+1},
iFj(d){var w,v=C.akc(d)
if(v.length===0)return null
w=new A.X(v,new C.h7o(),A.U(v).k("X<1>"))
if(!w.gar(0))return w.gG(0)
return B.d.gG(v)},
ivy(d){return A.J(["id",d.a,"name",d.b,"gender",C.hNX(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ix4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
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
n=n!==D.zN?n:q.c
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
d=q.aHL(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cU5(a1,w,a3.d,a2.y,s,a0,v)},
Bz(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$Bz)
case 3:q=f
p=B.a.ga_(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.V.aP(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.cK(t,x.f)
p=A.cs(p,new C.fTT(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("X<M.E>")
p=A.B(new A.X(p,new C.fTU(),s),s.k("M.E"))
B.d.b_(p,new C.fTV())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bz,v)},
ajV(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ajV=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.vp:D.le
a7=C.HH(b2,b3)
w=2
return A.b(C.Bz(b1),$async$ajV)
case 2:a8=b5
a9=J.cJ(a8)
b0=a9.bl(a8,new C.h7j(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bGo(b1,b2),$async$ajV)
case 5:case 4:if(b0===-1){u=b2.aHQ(a6,a7)
a9.ce(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.zN?i:l.c
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
s.n(0,m,l.aHL(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("ba<2>")
s=A.B(new A.ba(s,k),k.k("M.E"))
k=a5?D.vp:D.le
u=t.cU7(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Sm(b1,a8),$async$ajV)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aSs(B.a.i(b3.toLowerCase()),u),$async$ajV)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ajV,v)},
hJt(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.W(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("O<1,a9<n,@>>"),k=A.B(new A.O(m,C.hS5(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hJu(d,e){var w=new A.W(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("O<1,a9<n,@>>")
u=A.B(new A.O(u,C.hS5(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
ilv(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a1(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.ant(A.a0(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.htn(),A.U(j).k("O<1,n>")).c0(0,new C.fzR())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.vp
else s=B.d.q(t,u)?D.PV:D.le
return w.aHQ(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.ant(A.a0(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cK(q,h)
h=A.cs(h,new C.fzS(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("X<M.E>")
o=A.B(new A.X(h,new C.fzT(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fzU(),x.N).c0(0,new C.fzV())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.vp
else s=B.d.q(t,u)?D.PV:D.le
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.be(J.k(l==null?"":l))
if(l==null)l=new A.W(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.M(j)
if(j==null)j=0
return new C.le(h,r,p,!m,t,o,l,j,v,s,B.co)},
fA3(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fA3=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fA7()
h=x.N
g=x.z
w=7
return A.b(A.hc(A.a([A.m4("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.m4("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.m4("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fA3)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.h4(l,o)
J.h4(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aL(m,j,k)}l=m
h=A.a3(l).k("ba<2>")
h=A.cs(new A.ba(l,h),new C.fA4(a0),h.k("M.E"),x.k)
l=A.a3(h).k("X<M.E>")
l=A.B(new A.X(h,new C.fA5(),l),l.k("M.E"))
B.d.b_(l,new C.fA6())
u=l
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
i=A.ac(a1)
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
return A.i($async$fA3,v)},
inY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a1(e)
if(j.gar(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dQ(e,new C.fEw(),v).c0(0,new C.fEx())
t=A.d7(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HH(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.le){m=q.e
m=!new A.O(m,A.htn(),A.U(m).k("O<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ix4(l,v)
o=C.HH(k,w)
p=v.d
s.n(0,u,o===w?k.bhr(p,D.vp):k.bhr(p,v.y))}j=s.$ti.k("ba<2>")
j=A.B(new A.ba(s,j),j.k("M.E"))
B.d.b_(j,new C.fEy())
return j},
Sm(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Sm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$Sm)
case 2:u=g
t=B.a.ga_(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fHy(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.V.au(s,null)),$async$Sm)
case 3:return A.h(null,v)}})
return A.i($async$Sm,v)},
aSs(d,e){return C.itk(d,e)},
itk(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aSs=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mw("family_trees",A.a([C.hJt(e,d)],p),null,B.cY),$async$aSs)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mw("family_trees",A.a([C.hJu(e,d)],p),null,B.cY),$async$aSs)
case 8:p=g
u=p
w=1
break
t=2
w=6
break
case 4:t=3
n=s.pop()
q=A.ac(n)
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
return A.i($async$aSs,v)},
aSt(d,e){return C.itl(d,e)},
itl(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aSt=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("O<1,a9<n,@>>")
m=n.k("aj.E")
l=A.B(new A.O(e,new C.fMW(d),n),m)
r=l
w=7
return A.b(A.mw("family_trees",r,null,B.cY),$async$aSt)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fMX(d),n),m)
p=k
w=8
return A.b(A.mw("family_trees",p,null,B.cY),$async$aSt)
case 8:n=g
u=n
w=1
break
t=2
w=6
break
case 4:t=3
i=s.pop()
o=A.ac(i)
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
return A.i($async$aSt,v)},
fzl(d){return C.ikI(d)},
ikI(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fzl=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.SO("family_trees",A.J(["id",d],x.N,x.z),null,B.cY),$async$fzl)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ac(p)
$.an.$1("[family_trees] delete error: "+A.v(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fzl,v)},
rG:function rG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
m_:function m_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cJw:function cJw(){},
cJv:function cJv(){},
cJt:function cJt(){},
cJu:function cJu(){},
IN:function IN(d,e){this.a=d
this.b=e},
ic:function ic(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
ans:function ans(d,e){this.a=d
this.b=e},
fQd:function fQd(){},
hgj:function hgj(d){this.a=d},
fNI:function fNI(d){this.a=d},
le:function le(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bVw:function bVw(){},
bVv:function bVv(){},
bVs:function bVs(){},
bVt:function bVt(){},
bVu:function bVu(){},
fDL:function fDL(){},
fzh:function fzh(){},
fzi:function fzi(){},
fzj:function fzj(){},
h7I:function h7I(){},
h7J:function h7J(){},
h7K:function h7K(){},
h7L:function h7L(d){this.a=d},
h7M:function h7M(){},
hgh:function hgh(d){this.a=d},
fQH:function fQH(d){this.a=d},
fTW:function fTW(){},
fTX:function fTX(){},
fTY:function fTY(){},
fTZ:function fTZ(){},
fU_:function fU_(d){this.a=d},
h7v:function h7v(d){this.a=d},
hgc:function hgc(){},
hgd:function hgd(){},
hge:function hge(d){this.a=d},
fQo:function fQo(d){this.a=d},
fQp:function fQp(d){this.a=d},
hgn:function hgn(){},
fPT:function fPT(d){this.a=d},
fPU:function fPU(d,e){this.a=d
this.b=e},
fPV:function fPV(){},
hfL:function hfL(d){this.a=d},
fUN:function fUN(){},
h7o:function h7o(){},
fTT:function fTT(){},
fTU:function fTU(){},
fTV:function fTV(){},
h7j:function h7j(d){this.a=d},
fzR:function fzR(){},
fzS:function fzS(){},
fzT:function fzT(){},
fzU:function fzU(){},
fzV:function fzV(){},
fA7:function fA7(){},
fA8:function fA8(d){this.a=d},
fA4:function fA4(d){this.a=d},
fA5:function fA5(){},
fA6:function fA6(){},
fEw:function fEw(){},
fEx:function fEx(){},
fEy:function fEy(){},
fHy:function fHy(){},
fMW:function fMW(d){this.a=d},
fMX:function fMX(d){this.a=d},
cJx:function cJx(d,e){this.a=d
this.b=e},
cJy:function cJy(d,e){this.a=d
this.b=e},
aKm:function aKm(d,e,f){this.a=d
this.b=e
this.c=f},
bcN:function bcN(){this.b=this.a=0},
bcM:function bcM(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bAJ:function bAJ(){},
xB(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcB()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aZ(B.o.v(w.gnz()),2,"0")+":"+B.a.aZ(B.o.v(w.gHf()),2,"0")},
iuq(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.bs(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.bZ(new A.r(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.v.j(0.22)
$.T()
u=A.L()
u.r=v.gp(0)
a5.c1(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.hr[l]*a7*0.075
j=k-w
j=A.bx(new A.a5(j,u,j+t,s),new A.aP(r,r))
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.r=B.dl.gp(0)
a5.aq(j,i)
k-=q
k=A.bx(new A.a5(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.r=B.c.gp(0)
a5.aq(k,i)}w=v*0.16
u=v*0.52
t=a7*0.32
s=w+t
q=a7*0.09
h=A.bx(new A.a5(w,u,s,u+t),new A.aP(q,q))
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bx(new A.a5(w,q,s,q+a7*0.045),new A.aP(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.r(v*0.15,s)
f=new A.r(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a7(0,new A.r(s,a7*0.17)),O.aim(F.ts,t))
s=g.a7(0,new A.r(s,a7*0.18))
q=A.L()
q.r=F.ts.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a7(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,O.aim(F.ts,t))
w=A.L()
w.r=F.ts.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a7(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=F.mn.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.ts.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bY(a0,a1)
u=A.L()
u.r=F.mn.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bY(a0,a1)
u=A.L()
u.r=F.mn.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.hr[l]
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=F.mn.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.i.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.hr[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.b=B.ad
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=B.v.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=B.hZ.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bZ(a0.a7(0,new A.r(0,a1*0.5)).aI(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,O.aim(B.bq,1.8))
a4.restore()},
ib6(){var w,v=$.oO(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.av(32)]
return"WS"+B.d.hl(u)},
avq(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$avq=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cf(),$async$avq)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.fb("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$avq)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=A.a0(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ac(m)
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
return A.i($async$avq,v)},
avr(d){return C.ib7(d)},
ib7(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$avr=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.cf(),$async$avr)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i0("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cY,null),$async$avr)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ac(p)
$.an.$1("[worksheet qr stash] save: "+A.v(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$avr,v)},
avt(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$avt=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.cf(),$async$avt)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.ib6()
w=4
return A.b(C.avq(),$async$avt)
case 4:r=h
q=B.a.i(e)
p=B.e3.aK(t)
J.aL(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cS.gcp().aK(p),"usesRemaining",25,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.avr(r),$async$avt)
case 5:u=new A.a2g("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avt,v)},
avs(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$avs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.cf(),$async$avs)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.avq(),$async$avs)
case 4:q=f
p=J.a1(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a1(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.i.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cf.cF(0,B.cK.aK(t))}catch(h){r=A.ac(h)
$.an.$1("[worksheet qr stash] decode: "+A.v(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.X(q,i)
else{n=x.N
m=x.z
m=A.dE(A.a0(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.avr(q),$async$avs)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avs,v)},
hDL(){var w=new A.W(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cV.av(999999)},
ib8(d){var w,v,u,t,s,r,q
try{w=A.Bx(d)
if(w==null)return d
v=w
if(J.MH(v)>960||J.MG(v)>960){s=v
r=J.MH(v)>=J.MG(v)?960:null
v=A.SI(s,J.MG(v)>J.MH(v)?960:null,B.J_,r)}s=v
u=A.J8(82).zK(s,B.rv)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ac(q)
$.an.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
crP(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$crP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.ib8(e)
$.crL.n(0,s,t)
u=C.bIy(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$crP,v)},
b6s(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b6s=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.db(l,"data:image")){u=null
w=1
break}t=4
r=J.eF(l,",")?B.d.gal(J.m7(l,",")):l
q=B.cK.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hDL()
w=7
return A.b(C.crP(p,q),$async$b6s)
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
n=A.ac(k)
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
return A.i($async$b6s,v)},
crM(d){var w=0,v=A.j(x.T),u,t,s
var $async$crM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.crO(s),$async$crM)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$crM,v)},
aaE(d){var w=0,v=A.j(x.H),u,t
var $async$aaE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hRK(d)
if(t==null){w=1
break}$.crL.X(0,t)
w=3
return A.b(C.bIx(t),$async$aaE)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aaE,v)},
bIy(d,e){return C.iDE(d,e)},
iDE(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bIy=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aRh
w=7
return A.b(n==null?$.aRh=A.hpq():n,$async$bIy)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mA(r,"thumbs","readwrite")
B.iU.mk(J.mz(p,"thumbs"),q,l)
w=8
return A.b(J.oS(p),$async$bIy)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ac(k)
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
return A.i($async$bIy,v)},
bIx(d){return C.iDC(d)},
iDC(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bIx=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aRh
w=7
return A.b(o==null?$.aRh=A.hpq():o,$async$bIx)
case 7:r=f
q=J.mA(r,"thumbs","readwrite")
B.iU.GP(J.mz(q,"thumbs"),m)
w=8
return A.b(J.oS(q),$async$bIx)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ac(l)
$.an.$1("[worksheet-thumb idb delete] "+A.v(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bIx,v)}},D
J=c[1]
A=c[0]
B=c[2]
A9=c[85]
S=c[293]
A_=c[112]
Aa=c[292]
P=c[297]
A0=c[203]
T=c[66]
M=c[69]
Ab=c[269]
L=c[241]
A1=c[119]
U=c[154]
H=c[41]
E=c[257]
Ac=c[272]
V=c[138]
Ad=c[167]
A2=c[115]
Ae=c[105]
Af=c[72]
Ag=c[268]
Ah=c[50]
Q=c[267]
Ai=c[291]
Aj=c[237]
N=c[97]
A3=c[93]
Ak=c[210]
A4=c[163]
A5=c[215]
A6=c[253]
Al=c[159]
W=c[298]
A7=c[296]
Am=c[294]
An=c[86]
G=c[295]
Ao=c[166]
Ap=c[299]
Aq=c[153]
A8=c[245]
Ar=c[40]
As=c[196]
At=c[114]
Au=c[233]
X=c[284]
O=c[49]
F=c[130]
Av=c[39]
I=c[137]
Y=c[107]
K=c[172]
Aw=c[120]
Z=c[83]
R=c[38]
Ax=c[117]
C=a.updateHolder(c[7],C)
D=c[290]
C.ar3.prototype={}
C.b1H.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.blO(),f=h.x!=null&&h.A3(i).length===0
if(h.x!=null)w=f?B.b5:B.bC
else w=h.gVm()?B.bC:B.ec
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.K(D.bt5,B.r,1)
s=x.p
r=A.p(i,A.w(A.a([A.p(i,D.fsT,B.f,i,i,new A.o(B.b5.j(0.12),i,i,A.m(999),i,i,B.m),i,i,i,i,B.ho,i,i,i),B.S,D.fZj,B.at,A.c(C.xB(new A.W(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fUR,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.baD,i,i,i,i,B.Pv,i,i,i)
q=A.m(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b5.j(0.28),B.r,1)
n=A.hrM(h.d)
o=A.p(B.z,C.b1G(A.fXi(h.e,n),30),B.f,i,i,new A.o(B.mq,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fPL,B.K,i,i)
m=A.m(14)
l=A.K(B.bn,B.r,1)
q=A.p(i,A.w(A.a([o,B.N,n,B.bs,D.fZC,B.af,A.p(i,A.w(A.a([D.hf0,B.bs,A.c(A.BC(h.c),i,i,i,i,i,i,D.fKc,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.m),i,i,i,i,B.fb,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.m),i,i,i,i,B.a29,i,i,i)
p=A.m(16)
m=A.K(B.bn,B.r,1)
l=j.aUX("Original due",C.xB(h.r,!1))
n=j.aUX("Current due",C.xB(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.S,A.p(i,A.w(A.a([l,B.N,n,B.S,A.p(i,A.c(h.gaOU(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.m),i,i,i,i,B.x5,i,i,1/0),B.S,j.coe(),B.N,j.cak(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.S,A.p(i,A.w(A.a([D.h_C,B.at,A.c(q,i,i,i,i,i,i,D.fOU,i,i,i)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaJv()){q=A.m(14)
o=A.K(B.cE,B.r,1.6)
B.d.u(p,A.a([B.S,A.p(i,A.w(A.a([D.hgl,B.N,A.bv(A.m(12),A.el(new A.a4(1/0,88,A.b4(i,i,i,new A.XU(h.ax,B.a_,D.fxG,!0,3.5,i),B.aA),i),B.c,!0),B.ap)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.m),i,i,i,i,B.D8,i,i,i)],s))}p.push(B.aB)
p.push(D.h87)
return A.p(i,A.w(A.a([r,new A.C(B.a2b,A.w(p,B.al,i,B.e,B.h,0,B.p),i)],s),B.al,i,B.e,B.P,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aUX(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.adr,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fLg,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
coe(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.abF(B.ec,u,"Not paid yet")
w=t.A3(null).length
v=w===0?B.b5:B.bC
return this.abF(v,u,C.xB(t.x,!0))},
cak(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.abF(B.b5,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.abF(B.b5,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.adr,u,u,u)
v=A.U(d).k("O<1,hh>")
v=A.B(new A.O(d,new C.caQ(),v),v.k("aj.E"))
return A.w(A.a([w,B.aj,A.c_(B.bI,v,B.br,u,6,6)],x.p),B.B,u,B.e,B.h,0,B.p)},
abF(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.adr,w,w,w),1),new A.d0(1,B.c9,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dX,w,w),w)],x.p),B.B,w,B.e,B.h,0,w,w)}}
C.bf4.prototype={
a4(d,e){new A.XU(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aD(d){return d.b!==this.b}}
C.arg.prototype={
R(){return new C.aG6(A.a([],x.bp))},
ge9(){return this.c}}
C.aG6.prototype={
Z(){this.a3()
this.JQ()},
JQ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$JQ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a49(t.a.c),$async$JQ)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dV6(t,s))
case 1:return A.h(u,v)}})
return A.i($async$JQ,v)},
aWW(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bv:B.bl).j(0.22)
w=A.m(10)
return A.bC(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bv:B.bl).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b8i),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aWV(d){return this.aWW(d,null)},
QP(d){return this.cs_(d)},
cs_(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QP=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.IZ:B.f0
w=7
return A.b(new A.id().Df(72,900,900,n),$async$QP)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fv(),$async$QP)
case 8:p=f
n=B.cS.gcp().aK(p)
u="data:image/jpeg;base64,"+n
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
o=A.ac(l)
n=r.c
if(n!=null)n.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c("Could not pick photo: "+A.v(o),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$QP,v)},
b5k(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.m(10),n=A.K((q?B.bv:B.bl).j(0.18),B.r,1)
if(d)q=B.cX
else q=s.a.d.a?B.bv:B.bl
q=A.V(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cX
else u=s.a.d.a?B.bv:B.bl
t=x.p
u=A.E(A.w(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.h,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cX,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cp)
q=A.a([q,B.aa,u,A.bJ(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.V(B.cC,s.a.d.a?B.bv:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cp))
return A.p(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.m),r,r,r,B.jE,D.bGk,r,r,r)},
E8(d){return this.bG8(d)},
bG7(){return this.E8(null)},
bG8(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E8=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ay()
r=new A.au(new A.bb(a4,B.b8,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.fJ(a4)
p=a5.c
a4=a4===q?B.o.v(B.i.M(p)):B.i.a5(p,2)}o=new A.au(new A.bb(a4,B.b8,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bb(a4,B.b8,B.aP),s)
if(a3){a4=new A.W(Date.now(),0,!1).bL(6048e8)
m=A.c2(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)}else{a4=a5.f
m=A.c2(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bt(a4,!0,x.cT)
i=a3?null:A.hrM(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xT?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i1(B.v.j(0.55),!0,"Dismiss",a4,new C.dUQ(),new C.dUR(a2,t,a5,r,new C.dUS(a2,t),o,n,j),B.eK,!0,x.y),$async$E8)
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
break}if(f.length===0||e<=0){t.c.K(x.q).f.T(D.fEf)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.T(D.fCU)
w=1
break}a1=A.fXi(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xT?"male":"female"
w=7
return A.b(A.akb(a3,A.hAk(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$E8)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.xT?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a6(a3)
B.d.u(a3,j)
a3=a2.a
a3=A.c2(a3.gck(),a3.gci(),a3.gcB(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c2(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)))a5.cWu(a2.a)
w=8
return A.b(A.akb(t.a.c,a5),$async$E8)
case 8:case 5:w=9
return A.b(t.JQ(),$async$E8)
case 9:case 1:return A.h(u,v)}})
return A.i($async$E8,v)},
aXB(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cX.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cX
else s=(this.a.d.a?B.bv:B.bl).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b1G(d,18)
if(g)q=B.cX
else q=this.a.d.a?B.aS:B.ax
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,A.p(p,A.A(A.a([r,B.b7,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bb,B.h,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.m),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
TF(d){return this.cKm(d)},
cKm(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$TF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i1(B.v.j(0.55),!0,"Dismiss",s,new C.dV9(),new C.dVa(t,d),B.hn,!0,x.y),$async$TF)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.W(s,0,!1)
case 4:w=7
return A.b(A.akb(t.a.c,d),$async$TF)
case 7:w=8
return A.b(t.JQ(),$async$TF)
case 8:case 1:return A.h(u,v)}})
return A.i($async$TF,v)},
QO(d,e){return this.bRi(0,e)},
bRi(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lE(s,"Cancel","Delete",e.b+" \xb7 "+A.BC(e.c)+" will be removed from this device.","Delete this debt?"),$async$QO)
case 3:if(!g){w=1
break}w=4
return A.b(C.fQv(t.a.c,e.a),$async$QO)
case 4:w=5
return A.b(t.JQ(),$async$QO)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QO,v)},
ahE(d){return this.clv(d)},
clv(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.L,null,new C.dV3(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ahE)
case 2:return A.h(null,v)}})
return A.i($async$ahE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eHT
w=J.dO(m.d,new C.dVb())
v=A.B(w,w.$ti.k("M.E"))
w=J.dO(m.d,new C.dVc())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cD(v,0,new C.dVd())
w=A.m(18)
s=m.a.d.a
r=s?D.cHj:D.aFj
q=A.K(s?B.cX.j(0.35):B.cX.j(0.18),B.r,1)
s=A.p(l,D.c7x,B.f,l,l,new A.o(B.cX.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aE(!1,B.a3,!0,A.m(12),A.aM(!1,A.m(12),!0,D.eHd,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dVe(m),l,l,l,l,l,l,l),B.f,B.cX,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cGm("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BC(t)
r=A.a([A.p(l,A.w(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.bbz(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a6(B.aw,B.aD,B.w,r,l,l),B.m),l,l,l,l,B.ao2,l,l,l),B.aB],p)
if(J.cx(m.d)){w=m.a.d.a
s=w?B.el:B.c
q=A.m(18)
o=A.K((w?B.bv:B.bl).j(0.12),B.r,1)
n=A.p(l,D.c24,B.f,l,l,new A.o(B.cX.j(0.12),l,l,A.m(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,15,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.w(A.a([n,B.af,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.m),l,l,l,l,D.bJ1,l,l,1/0))}else{w=m.gcrd()
s=A.B(new A.O(v,w,A.U(v).k("O<1,x>")),x.l)
if(u.length!==0){q=A.a([B.aj,new A.C(D.bKH,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.U(u).k("O<1,x>")))
B.d.u(s,q)}B.d.u(r,s)}return A.w(r,B.al,l,B.e,B.h,0,B.p)},
bbz(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.m(14),r=A.K((v.a.d.a?B.bv:B.bl).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cX
else w=v.a.d.a?B.aS:B.ax
return A.p(u,A.w(A.a([q,B.bs,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.h,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.m),u,u,u,u,B.ep,u,u,u)},
cGm(d,e){return this.bbz(!1,d,e)},
cre(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.A3(j).length,h=d.bl3()
if(d.x!=null){w=d.A3(j).length
v=w===0?B.cX:B.bC}else if(d.gVm())v=B.bC
else{if(h)w=B.cX
else w=k.a.d.a?B.bv:B.bl
v=w}if(d.x!=null){w=d.A3(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xB(u,!1)}else{u.toString
t="Paid "+C.xB(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xB(w,!1)+" \xb7 "+i+" missed":"Due "+C.xB(w,!1)}w=k.a.d.a?B.el:B.c
u=A.m(18)
if(d.gVm()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bv:B.bl).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.H,B.v.j(0.04),B.cN,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bt:B.mq
o=A.K(d.gVm()&&d.x==null?B.bC.j(0.45):B.cX.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hrM(d.d)
o=A.p(B.z,A.d2(C.b1G(A.fXi(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.ax
m=x.p
n=A.a([new A.d0(1,B.c9,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaJv())B.d.u(n,A.a([B.e0,A.V(B.Ql,B.cX.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cQ,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.h,0,B.p),1)
n=A.BC(d.c)
l=k.a.d.a?B.aS:B.ax
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aE(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.C(Ai.anQ,A.A(A.a([o,B.bc,p,B.aa,A.w(A.a([n,B.bs,A.V(B.eL,(k.a.d.a?B.bv:B.bl).j(0.5),j,j,j,18)],m),B.dr,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dV5(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.m),j,j,j,B.d2,j,j,j,j)}}
C.v9.prototype={}
C.ang.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.ba
u=v?B.B:B.l
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.K(q,B.r,t?1.2:1.6)
p=A.a([new A.aa(0,B.H,B.v.j(0.45),B.cy,16)],x.V)
o=x.p
n=A.a([],o)
m=B.v.j(t?0.07:0.3)
l=A.K(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.p(a0,A.V(B.cC,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.z
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.C(B.j5,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aBu,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.HZ,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.d6(B.dn,m,B.f,A.A(l,B.l,a0,B.e,B.P,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(B.anz,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cR:B.bo,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.C(B.fD,A.w(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.fyu)
a2=A.a([A.A(n,B.l,a0,B.e,B.h,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.C(B.vj,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a6(B.a5,B.a9,B.w,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.lE,A.w(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hN,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a6(B.aw,B.aD,B.w,a1.d,a0,a0),B.m),a0,a0,a0,D.bGQ,a0,a0,a0,a0)}}
C.aYm.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.ba?B.ba:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cR,q,B.O,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cQ,n],m)
if(p.z)o.push(new A.C(B.tB,n,q))
return new A.C(B.d2,A.w(o,B.l,q,B.e,B.P,0,B.p),q)}}
C.UG.prototype={
R(){return new C.biK()}}
C.biK.prototype={
gc4Q(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.eHO,D.eHU],l)
for(w=0;w<8;++w){v=D.a6x[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.IN:B.Ad
q=t===s
r=A.V(r,q?B.eI:B.bX,n,n,n,17)
q=q?B.c:B.ac
r=A.a([r,B.b7,A.c(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bu(1,B.b6,A.c(v.c,n,1,B.a2,n,n,n,B.Bz,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ax(B.eI,2,B.r,-1)
s=new A.o(n,n,new A.bE(p,p,p,p),new A.bc(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.C(B.f_,A.w(A.a([new A.C(B.mz,new A.c0(B.aK,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.p(n,new A.dp(!0,new C.ang(v,q.d,q.e,new C.dk8(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dk9(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.C(D.bHd,A.bH(D.hlY,n,new C.dka(o,d),A.bp(B.b_,n,n,n,n,B.po,n,n,new A.b9(A.m(16),B.a1),n,n,n)),n))
return A.bo(!0,new A.cP(new A.aX(0,1/0,0,m.a.b*0.9),A.co(k,n,n,D.bLB,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nL.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bhD(d,e,f){return new C.nL(this.a,e,d,f)}}
C.IM.prototype={
xd(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IM(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aHD(d){var w=null
return this.xd(w,w,w,w,w,d,w,w,w,w,w,w)},
cS4(d){var w=null
return this.xd(w,w,w,w,d,w,w,w,w,w,w,w)},
bhB(d,e,f){var w=null
return this.xd(d,w,w,w,w,w,w,w,e,w,f,w)},
cSJ(d){var w=null
return this.xd(w,w,w,w,w,w,d,w,w,w,w,w)},
cSS(d){var w=null
return this.xd(w,w,w,w,w,w,w,w,w,d,w,w)},
cS2(d){var w=null
return this.xd(w,w,w,d,w,w,w,w,w,w,w,w)},
cSU(d){var w=null
return this.xd(w,w,w,w,w,w,w,w,w,w,w,d)},
cS_(d){var w=null
return this.xd(w,w,d,w,w,w,w,w,w,w,w,w)},
cRV(d){var w=null
return this.xd(w,d,w,w,w,w,w,w,w,w,w,w)},
GG(d){var w=null
return this.xd(w,w,w,w,w,w,w,d,w,w,w,w)},
cT1(d,e,f,g,h,i,j,k,l,m,n){return this.xd(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cPz(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bUd(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cU(d.h(0,n))).length!==0?B.a.i(A.cU(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cU(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.EI.geA(D.EI))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a8f)
q=l.$2("frame",D.a7A)
l=l.$2("texture",D.a7w)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cU(d.h(0,"author"))):o
return this.cT1(p,u,t,q,r,A.rv(d.h(0,"ribbon"))?A.Hk(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a0p.prototype={
R(){return new C.aD3(A.a([],x.I),D.PU)},
ge9(){return this.c}}
C.aD3.prototype={
Z(){var w,v=this
v.a3()
v.f=A.Au(0,1)
w=$.ay()
v.z=new A.au(B.ay,w)
v.Q=new A.au(B.ay,w)
v.lg()
w=v.a
C.bGO(w.c,w.d).bE(new C.dkP(v),x.fL)},
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
v.a2()},
lg(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.M6(s.c,s.d),$async$lg)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.dkD(t,r))
t.az2()
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
gavB(){var w,v=this
if(!J.cx(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
az2(){var w,v,u=this.gavB(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cjP(d){this.l(new C.dkA(this,d))
this.az2()},
OF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nL(B.o.v(1000*Date.now()),"Untitled page","",new A.W(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aUr(r.c,r.d,s),$async$OF)
case 3:w=4
return A.b(t.lg(),$async$OF)
case 4:if(t.c==null||J.cx(t.d)){w=1
break}q=J.oT(t.d,new C.dkb(s))
p=q>=0?q:J.ad(t.d)-1
t.l(new C.dkc(t,p))
t.az2()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Ce(p+1,B.cn,B.la),$async$OF)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$OF,v)},
BR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$BR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gavB()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aUr(o.c,o.d,new C.nL(s,r,q,new A.W(p,0,!1))),$async$BR)
case 3:w=4
return A.b(t.lg(),$async$BR)
case 4:if(t.c==null){w=1
break}t.l(new C.dkE(t))
case 1:return A.h(u,v)}})
return A.i($async$BR,v)},
Pn(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gavB()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dkk(r),s,null,!0,!0,x.y),$async$Pn)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bGy(s.c,s.d,r.a),$async$Pn)
case 4:t.l(new C.dkl(t))
w=5
return A.b(t.lg(),$async$Pn)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.Vp(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Pn,v)},
zr(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BR(),$async$zr)
case 5:case 4:if(t.c==null){w=1
break}w=J.cL(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.SG(s,r.r,o,p,q),$async$zr)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a8(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hSz(s,r.x,r.r),$async$zr)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.M6(s.c,s.d),$async$zr)
case 10:l=e
for(s=n.d,r=J.cJ(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nL(""+(m+k),q,B.a.i(j.b),new A.W(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BJ(r.c,r.d,l),$async$zr)
case 11:w=12
return A.b(t.lg(),$async$zr)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zr,v)},
a2B(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a2B=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BR(),$async$a2B)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzp(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dr(D.AD,new C.dkB(t),new C.dkC())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.n5("Our Family",o,"",""))
for(o=J.aQ(t.d);o.C();){n=o.gP(o)
p.push(new H.n5(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.htE(o,new H.t1(s,r,"",p,new H.vq(q.d,null,null,null,null,"","","")),null),$async$a2B)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a2B,v)},
P4(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$P4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BR(),$async$P4)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.aiK,null,new C.dkg(t),s,!0,!0,!0,I.abz,!1,!1,x.N),$async$P4)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cS4(r)
t.l(new C.dkh(t,q))
s=t.a
w=7
return A.b(C.Tj(s.c,s.d,q),$async$P4)
case 7:case 1:return A.h(u,v)}})
return A.i($async$P4,v)},
YG(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.aiK,null,new C.dkm(t),r,!0,!0,!0,I.abz,!1,!1,x.e),$async$YG)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.dkn(t,s))
r=t.a
w=4
return A.b(C.Tj(r.c,r.d,s),$async$YG)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.Ce(0,B.ed,B.nk)
case 1:return A.h(u,v)}})
return A.i($async$YG,v)},
bX_(d){var w=d.bU(),v=B.a.aZ(B.o.v(w.gci()),2,"0"),u=B.a.aZ(B.o.v(w.gcB()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gzp(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c43()
if(r.e)w=D.ahp
else if(J.cx(r.d)){w=r.y
v=r.gzp(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fJx,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.C(X.apg,new C.a_E(w,v,0,q),q),q),B.bx,t,B.aj,A.c(u,q,q,q,q,q,q,A.l(q,q,D.l5.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.fsE,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.aa(0,B.H,B.e_.j(0.45),B.J,18)],x.V),E.xI,B.m),q,q,q,q,B.Py,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcOC(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hy(D.bZ3,D.hlp,r.gaQB(),q))
B.d.u(u,w)}w=A.at(A.cc(A.w(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.ev,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.l5.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e8:B.yJ
u=A.w(A.a([new A.C(D.bIi,w,q),A.E(A.K9(v,new C.dkN(r),J.ad(r.d)+1,q,r.gcjO(),u,B.aK),1),r.bJ7()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c6(q,D.a_R,new A.am(B.a0,q,B.b4,B.t,A.a([D.aSW,A.bo(!0,A.w(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c43(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.L8(B.eh,"AI",h.gbGV(),!0))
if(h.a.f)f.push(new C.L8(B.m7,"Cover",h.gbRS(),!1))
if(h.a.f)f.push(new C.L8(B.xA,"Header",h.gbML(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.L8(B.vF,"Print",h.gctn(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.h1:B.jm
t=v?"Save":"Edit"
f.push(new C.L8(u,t,v?h.gczO():new C.dkx(h),!1))}if(h.a.f)f.push(new C.L8(B.ig,"Add page",h.gaQB(),!1))
v=C.hNW(h.y.Q)
u=h.gzp(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dSQ
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kI.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.l5,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bE(i,i,i,i),new A.bc(k,k,k,k),g,new A.a6(B.a5,B.a9,B.w,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.l5.j(0.85)
p.push(new A.bu(1,B.b6,A.aA(B.c0,A.w(A.a([k,B.bs,A.c(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.C,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.ang(v,u,t+" \xb7 "+s+" "+r,new C.dky(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
AJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BR(),$async$AJ)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aQ(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a4p(B.d.aL(s," "))
s=t.c
s.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.dkd(t,p),s,null,!0,!0,x.N),$async$AJ)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zr(),$async$AJ)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.EI(),$async$AJ)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Gj("Swahili (Kiswahili)",!0),$async$AJ)
case 18:w=16
break
case 17:w=19
return A.b(t.cL1(o==="sw"?"Swahili (Kiswahili)":"English"),$async$AJ)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$AJ,v)},
a_F(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.K(E.kI.j(0.3),B.r,1),r=x.p
return new A.C(B.cB,A.aM(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.xI,B.a6),w,42,w,w,w,w,w,42),B.bc,A.E(A.w(A.a([A.c(f,w,w,w,w,w,w,A3.LO,w,w,w),A.c(g,w,w,w,w,w,w,B.FE,w,w,w)],r),B.B,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.m),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dkz(d,h),w,w,w,w,w,w,w),w)},
EI(){return this.bWt()},
bWt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$EI=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dkq(r),a7,null,!0,!0,x.ei),$async$EI)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eN("Working on it\u2026",$.ay())
a6.a=!0
a7=r.c
a7.toString
A.ce(null,null,!1,null,new C.dkr(o),a7,null,!0,!0,x.H).fA(new C.dks(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.c8(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.AD[a1]
J.c8(j,i.a)}w=8
return A.b(C.ajf(a0,a7,new C.dkt(o),d,l,e,j),$async$EI)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ac(a8)
n=A.v(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a8(l,!0).e4()
l=o
l.sik($.ay())
J.aUW(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
j=n
l.T(A.b0(null,null,null,null,null,B.t,null,A.c(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcn(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.am(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bhD(m.b.h(0,a4).b,a7,new A.W(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BJ(j.c,j.d,l),$async$EI)
case 11:w=12
return A.b(r.lg(),$async$EI)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.AD[a1].a)
a5=l.cPz(j,12,a7)
l=r.a
w=15
return A.b(C.Tj(l.c,l.d,a5),$async$EI)
case 15:if(r.c!=null)r.l(new C.dku(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.Ce(0,B.ed,B.nk)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b0(a3?A.cDl("Undo",new C.dkv(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.em,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EI,v)},
Gj(d,e){return this.cL2(d,e)},
cL1(d){return this.Gj(d,!1)},
cL2(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Gj=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eN("Starting\u2026",$.ay())
f.a=!0
k=r.c
k.toString
A.ce(null,null,!1,null,new C.dkG(a0),k,null,!0,!0,x.H).fA(new C.dkH(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c8(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a4G(m,new C.dkI(a0)),$async$Gj)
case 10:w=8
break
case 9:w=11
return A.b(C.bIn(new C.dkJ(a0),m,a2),$async$Gj)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ac(a1)
q=A.v(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a8(o,!0).e4()
o=a0
o.sik($.ay())
J.aUW(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.T(A.b0(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bhD(J.t(p,g).b,j.a,new A.W(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BJ(k.c,k.d,o),$async$Gj)
case 12:w=13
return A.b(r.lg(),$async$Gj)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b0(A.cDl("Undo",new C.dkK(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Gj,v)},
bJ7(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dke(v):u
r=A.aI(u,u,u,u,A.V(D.bUA,s?D.l5:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hy(A.V(B.xm,B.Hp,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.Hp,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbRs(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.l5.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dkf(v):u
return A.bo(!0,new A.C(D.bI7,A.A(A.a([r,s,A.aI(u,u,u,u,A.V(B.eL,t<J.ad(v.d)?D.l5:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0t.prototype={
R(){return new C.bj8(new A.au(B.ay,$.ay()))}}
C.bj8.prototype={
ga3L(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ay()
w.W$=0
this.a2()},
gbV2(){switch(this.ga3L()){case"cover":var w=D.dfu
break
case"book":w=D.dal
break
default:w=D.dJe
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=E.kI.j(0.5),m=x.p,l=A.A(A.a([D.dSR,B.ar,D.bNP,A.aI(p,p,p,p,B.lI,p,p,p,new C.dmB(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jE(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dmC(q),q.ga3L()==="page",p,p,p,p))
if(q.a.d)k.push(A.jE(p,p,p,D.hfT,p,new C.dmD(q),q.ga3L()==="book",p,p,p,p))
k.push(A.jE(p,p,p,D.h2r,p,new C.dmE(q),q.ga3L()==="cover",p,p,p,p))
k=A.c_(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.M,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bC(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kC,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a8,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbV2(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,Ae.LM,p,p,p)
w.push(A.mT(p,B.c.j(0.08),r,B.hH,new C.dmF(q,s),p,p,p,p))}return A.ez(p,E.CI,A.cc(A.w(A.a([l,B.S,D.hje,B.aj,k,B.af,j,B.N,A.c_(B.bI,w,B.br,p,6,6),B.aB,A.de(D.bZ0,p,D.hk1,new C.dmG(q,d),A.bp(B.b_,p,p,p,p,B.po,p,p,new A.b9(A.m(16),B.a1),p,p,p)),B.at,D.he2],m),B.B,p,B.e,B.P,0,B.p),B.t,p,B.y,p,p,B.f4,p,p,B.ah),p,p,p,B.Pw,p,B.da,p,new A.b9(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a0r.prototype={
R(){return new C.aD6(A.a([],x.gA))},
ge9(){return this.c}}
C.ah_.prototype={}
C.aD6.prototype={
Z(){this.a3()
this.lg()},
lg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.SK(p.c,p.d),$async$lg)
case 3:o=e
n=A.a([],x.gA)
p=J.aQ(o)
case 4:if(!p.C()){w=5
break}s=p.gP(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bGO(r.c,q),$async$lg)
case 6:j=e
i=J
w=7
return A.b(C.M6(t.a.c,q),$async$lg)
case 7:m.push(new l.ah_(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.dl3(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
bcT(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
RF(d,e){return this.cls(0,e)},
cls(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$RF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a8(s,!1).ca(A.e7(new C.dl2(u,e),!0,null,x.y)),$async$RF)
case 2:t=g
w=3
return A.b(u.lg(),$async$RF)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.T(D.aWY)
return A.h(null,v)}})
return A.i($async$RF,v)},
Gl(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Gl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.T(D.aWT)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aiA(s.c,s.d),$async$Gl)
case 5:q=e
w=6
return A.b(t.lg(),$async$Gl)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.RF(0,B.d.fg(t.d,new C.dl7(q))),$async$Gl)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.SG(p,s.f,r,n,o),$async$Gl)
case 10:m=e
w=11
return A.b(t.lg(),$async$Gl)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.T(D.aWY)
case 1:return A.h(u,v)}})
return A.i($async$Gl,v)},
R2(d,e){return this.cxs(0,e)},
cxs(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$R2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dl6(t,e),s,null,!0,!0,x.y),$async$R2)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4R(s.c,s.d,e.a),$async$R2)
case 4:w=5
return A.b(t.lg(),$async$R2)
case 5:case 1:return A.h(u,v)}})
return A.i($async$R2,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bJa(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.K(E.kI.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fN(0.7142857142857143,A.p(n,A.w(A.a([D.dSS,B.af,D.eGP,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.l5.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bb,B.h,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcOy(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.K(E.kI.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.c6h,B.f,n,n,new A.o(B.v.j(0.3),n,A.K(E.kI.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dl8(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.v.j(0.3)
p=A.K(E.kI.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.bc,D.bOd,A.p(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fIv,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.m),n,n,n,n,B.ho,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.ccl,B.m),n,n,n,Aa.Pj,D.bG_,n,n,n)
if(o.e)k=D.ahp
else k=k.length===0?D.bg_:A.cg(new C.dl9(k))
return A.c6(n,D.a_R,new A.am(B.a0,n,B.b4,B.t,A.a([D.aSW,A.bo(!0,A.w(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bJa(d){var w,v,u=this,t=null,s=u.bcT(d),r=d.c,q=x.p,p=A.a([A.bT(0,new A.d6(B.dE,B.z,B.f,new A.a4(300,420,new C.a_E(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.p(t,D.c5w,B.f,t,t,new A.o(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dl0(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fI7,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.w(A.a([new A.fN(0.7142857142857143,new A.am(B.a0,t,B.ab,B.t,p,t),t),B.N,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.l5.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dl1(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.L8.prototype={}
C.a_E.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dr(D.AD,new C.cSR(m),new C.cSS()),j=m.c,i=D.EI.h(0,j.e),h=A.b2(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mM:B.bb
v=new C.cST(h)
i=A.a([new A.aa(0,B.H,B.v.j(0.6),D.eDC,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b4(l,l,l,new C.bgj(j.x,h,l),B.aA),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cR(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bc(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aph,8,0.85,2.2),v.$4(D.bL_,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aph,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.C(D.bKW,A.b4(l,l,l,new C.bga(h,l),B.aA),l),0,0,0))
r=A.V(D.aEg[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aBu,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cR,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aN,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.C,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bT(0,new A.C(D.bLs,A.w(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aKg(l),D.fxz),l,l,l,46,0,l))
return A.p(l,A.bv(D.afY,new A.am(B.a0,l,B.ab,B.t,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.afY,i,new A.a6(B.aw,B.aD,B.w,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bgj.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e4()
g.cV(11)
switch(this.b){case"plain":return
case"linen":$.T()
w=A.L()
w.r=B.v.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.r(0,t),new A.r(u,t),w)
$.T()
s=A.L()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.r(r,0),new A.r(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.T()
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.T()
l=A.a([],n)
j=new A.aH(m.r,B.ak,null,null,l)
l.push(new A.aZ(v,q))
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
m=new A.bA()
l.push(m)
l=j.f
if(l!=null)m.aj(l)
j.ac()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.T()
w=A.L()
w.r=B.v.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.T()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.r(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bga.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.T(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ad
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.fkt,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aH(k,B.ak,null,null,s)
s.push(new A.aZ(r+p*34,q))
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
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.va.prototype={}
C.a0_.prototype={
R(){return new C.bgh()}}
C.bgh.prototype={
goD(){var w=this.d
return w===$?this.d=this.a.c:w},
gzp(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bb(w.b,B.b8,B.aP),$.ay())}return v},
gaEM(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bb(w.c,B.b8,B.aP),$.ay())}return v},
gau7(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bb(w.y,B.b8,B.aP),$.ay())}return v},
t(){var w=this,v=w.gzp(0),u=v.V$=$.ay()
v.W$=0
v=w.gaEM()
v.V$=u
v.W$=0
v=w.gau7()
v.V$=u
v.W$=0
w.a2()},
auL(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jE(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.dbU(this,f,u),e===u,s,s,s,s))}return A.c_(B.bI,r,B.br,s,6,8)},
aAz(d){var w=null,v=B.c.j(0.07)
return A.bC(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mf,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goD(),a0=f.gzp(0),a1=a0.a.a,a2=f.gaEM(),a3=a2.a.a,a4=f.gau7(),a5=d.bhB(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a4(190,260,new A.d6(B.dE,B.z,B.f,new A.a4(270,370,new C.a_E(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.M,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.aAz("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dci(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a8,e,B.ao,e,e,e,e)
a2=A.aN(e,B.M,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.aAz("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dcj(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a8,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.AD[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bE(o,o,o,o),e,e,new A.a6(B.aw,B.aD,B.w,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.aA(e,A.w(A.a([p,B.cQ,A.c(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dck(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.c_(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b_.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eI:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.V(D.aEg[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bE(o,o,o,o),new A.bc(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dcl(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.c_(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.M,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.aAz("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dcm(f),e,e,e,!1,e,e,!1,e,!0,e,B.ae,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a8,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,N.wm,e,e,e)
m=A.a([],w)
for(l=D.EI.gdT(D.EI),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b2(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eI:B.aT
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bE(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.aA(e,A.w(A.a([j,B.bs,A.c(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dcn(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.c_(B.bI,m,B.br,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.wm,e,e,e)
k=f.goD()
return new A.C(new A.R(0,0,0,a3.f.d),A.bo(!0,new A.cP(new A.aX(0,1/0,0,a1.a.b*0.92),A.co(A.a([D.hdt,B.af,d,B.aN,a0,B.S,a2,B.aB,D.hjN,B.N,v,B.aB,D.hdC,B.N,q,B.aB,a4,B.aB,p,B.N,m,B.aB,l,A.lg(e,9,""+B.i.S(f.goD().f),36,18,new C.dco(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.wm,e,e,e),B.aj,f.auL(D.a8f,f.goD().r,new C.dcp(f),D.dMB),B.af,A.c("BORDER",e,e,e,e,e,e,N.wm,e,e,e),B.aj,f.auL(D.a7A,f.goD().w,new C.dcq(f),D.dMH),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,N.wm,e,e,e),B.aj,f.auL(D.a7w,f.goD().x,new C.dcs(f),D.dOl),B.aj,A.jb(e,B.b_,e,B.ag,e,new C.dct(f),e,e,e,D.h7D,f.goD().z),B.bx,A.bH(D.hc9,e,new C.dcu(f,a6),A.bp(B.b_,e,e,e,e,B.po,e,e,new A.b9(A.m(16),B.a1),e,e,e))],w),e,e,S.aoJ,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aKg.prototype={
a4(d,e){var w,v,u,t=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bA())
u=A.L()
u.san(D.cd2.az(0,new A.a5(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.blG.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.T()
w=A.L()
w.san(D.cc1.az(0,new A.a5(0,0,a2,a3)))
a4.aE(new A.a5(0,0,a2,a3),w)
v=B.i.cG(a1/112)
u=new A.e4()
u.cV(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dft[u.av(9)]
j=u.av(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a5(n,j,n+m,j+l)
h=A.bx(i,B.hG)
g=new A.ar(B.U,B.R,B.X,B.Y,B.W)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.san(new A.a6(B.a5,B.a9,B.w,A.a([f,k,e],w),d,d).az(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.U,B.R,B.X,B.Y,B.W)
e.r=E.kI.j(0.55).gp(0)
a4.aE(new A.a5(g,j,h,j+2),e)
e=new A.ar(B.U,B.R,B.X,B.Y,B.W)
e.r=E.kI.j(0.4).gp(0)
a4.aE(new A.a5(g,q,h,p),e)
t.restore()
j=u.av(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.san(D.cbj.az(0,new A.a5(0,r,a2,q)))
a4.aE(new A.a5(0,r,a2,q),p)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.v.j(0.5).gp(0)
p.y=B.ld
a4.aE(new A.a5(0,q,a2,q+14),p)}t=A.L()
t.r=D.bjP.j(0.72).gp(0)
a4.aE(new A.a5(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bU(B.z,0.5,B.w,d,0,A.a([D.bsw.j(0.22),B.L],w),d,d).az(0,A.bY(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aD(d){return!1}}
C.bep.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aK(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cR(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.o(A.ap(D.l5,D.bxS,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.MY,o,o,B.m),B.bm,o,o),o))}v=x.V
u=A.a([new A.aa(0,B.H,B.v.j(0.35),B.aOv,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kI.j(0.6),o,o,new A.bc(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.p(o,A.w(t,B.l,o,B.rz,B.h,0,B.p),B.f,o,o,new A.o(o,o,o,D.b8_,u,D.cd0,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.aa(0,B.H,B.v.j(0.4),B.dv,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aKg(o),D.fxu),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aYm(p.y,r,L.ji,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bC(o,B.eV,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.ji.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fXm,!0,B.a8,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.ji.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bC(o,B.eV,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.ji.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.am,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,D.fNB,!0,B.a8,B.Bv,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.h,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.fXe,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.ji.j(0.5),o,o,o,o,o,o,o,o,11,B.cR,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.A(A.a([A.E(A.p(o,o,B.f,D.H9.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fD,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.H9.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.H9.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aB],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.ji.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.GC(A.cW(A.a([A.cW(o,o,o,o,o,o,o,o,o,D.fQW,B.a.aw(k,0,1)),A.cW(o,o,o,o,o,o,o,o,o,o,B.a.aV(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.ji.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.w(n,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.C(B.hz,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.ji.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bv(B.MY,new A.am(B.a0,o,B.ab,B.t,A.a([t,new A.C(D.bKt,A.w(s,B.al,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bP(new A.o(o,o,o,o,o,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bm,o,o),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.MY,v,D.cdy,B.m),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.h,0,o,o))
return new A.am(B.a0,o,B.ab,B.t,l,o)}}
C.anh.prototype={
R(){return new C.ani(new A.eN(0,$.ay()),new C.bW1(),new C.anA(),D.hZ2,null,null)},
gd6(){return this.d}}
C.a2I.prototype={
a9(){return"_Step."+this.b}}
C.ani.prototype={
gD2(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGK(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gUH(){var w=this.ghi(0)
return w.gzI()==null?"Babu":B.a.i(w.gzI().b)},
Z(){var w,v=this
v.a3()
w=v.ghi(0).gzI()
w=w==null?null:w.c
v.r.b=w===D.oY
w=v.qa(new C.bUn(v))
w.fS(0)
v.x!==$&&A.aT()
v.x=w
v.a3H("Come closer, my children. I am "+v.gUH()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.d()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.V$=$.ay()
v.W$=0
w.byq()},
a3H(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d3(E.a1B,new C.bUh(w))},
buM(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.l(new C.bUq(v))},
afb(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
buE(){return this.bcq()},
bcq(){var w=this,v=w.gD2()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bUi(w))
w.a3H(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cC(B.o0,new C.bUj(w))},
cPG(){var w=this
w.l(new C.bUm(w))
w.a3H(w.gD2()[w.as].a)},
LM(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.af3)return
w=p.gD2()
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
t.r=s.a+1.5}q=new A.e4()
q.cV(v*7+d)
p.l(new C.bUl(p,d,u,q))
p.a3H(u?D.dwD[q.av(4)]+" "+w[p.as].d:D.dsY[q.av(3)]+" "+w[p.as].d)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gD2()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bJ3(t.at,t.ay,p)
t.l(new C.bUo(t,s))
t.a3H(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.C3(t.a.d,s),$async$kM)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.C4(r.d,r.c.a,"fire",t.at*10),$async$kM)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bUp())
w=1
break
case 4:++t.as
t.bcq()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.ZR,new A.am(B.a0,v,B.ab,B.t,A.a([A.bT(0,new A.e9(A.b4(v,v,v,new C.aYr(u,w.r,w.w,u),B.aA),v),0,0,0),A.bo(!0,A.w(A.a([w.cfd(0),B.aX,w.bUd()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cfd(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.Ro,s,s,s,new C.bUk(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gD2().length;++w){v=t.as
if(w<v||t.Q===D.b4g)v=B.d_
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,D.bFK,s,s,s,22))}p=A.E(A.w(A.a([D.h4k,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.B,s,B.e,B.h,0,B.p),1)
v=A.m(14)
u=A.K(B.fM,B.r,1)
return new A.C(D.bLF,A.A(A.a([r,p,A.p(s,A.c("\ud83d\udd25 "+B.i.S(t.cy*100)+"%",s,s,s,s,s,s,B.iW,s,s,s),B.f,s,s,new A.o(B.b9,s,u,v,s,s,B.m),s,s,s,s,B.ho,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bUd(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghi(0).gzI()
if(h==null)w=1
else w=h.c===D.oY?0:1
v=j.dx
u=j.db
t=D.qW.j(0.96)
s=A.m(22)
r=A.K(B.d_,B.r,3)
q=A.b4(i,i,i,new C.bri(w,i),B.aA)
p=A.c(j.Q===D.af3?j.gUH()+" asks":"Elder "+j.gUH(),i,i,i,i,i,i,D.aYe,i,i,i)
o=j.db
o=B.a.aw(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c0,A.A(A.a([new A.a4(62,62,q,i),B.ar,A.E(A.w(A.a([p,B.bs,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aYr,i,i,i)],n),B.B,i,B.e,B.h,0,B.p),1)],n),B.B,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbuL(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.abd("Sit down by the fire",j.gbuD()),i,i,i)
break
case 1:v=A.at(j.abd("Ask me, Elder",j.gcPF()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gD2()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ax(D.lW,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,A.c(u[m],i,i,i,i,i,i,D.aYn,B.K,i,i),B.f,i,D.agD,new A.o(D.ame,i,new A.bE(l,l,l,l),new A.bc(q,q,q,q),i,i,B.m),i,i,i,i,B.x8,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bUe(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.c_(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kn:Am.asi
u=A.V(u,v?B.et:D.lW,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.et:D.lW,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gD2().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.abd(v,j.gqt(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gD2().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aYF,i,i,i)],n)
u=j.cx
if(u>0){u=C.aSC(u)
q=C.aSC(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.adu,i,i,i))}v.push(B.N)
v.push(j.abd("Back to the games",new C.bUf(j)))
v=A.w(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.p(i,A.w(A.a([o,B.S,v],n),B.B,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aFP,i,B.m),i,i,i,B.zs,B.bg,i,i,i)},
abd(d,e){var w=null,v=A.m(16),u=A.K(B.d_,B.r,2)
return A.aA(w,A.p(w,A.c(d,w,w,w,w,w,w,A3.LO,w,w,w),B.f,w,w,new A.o(D.lW,w,u,v,w,w,B.m),w,w,w,w,D.bJm,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bri.prototype={
a4(d,e){O.hto(d,e.eo(B.J),e.gdl()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aD4.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bW1.prototype={}
C.tr.prototype={}
C.brj.prototype={}
C.anA.prototype={
Nb(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.iqv(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aYr.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.CK(l.d.Nb(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cEZ(d,j)
l.bSM(d,j)
l.cNr(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.nL(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.T()
q=A.L()
p=x.O
o=x.n
q.san(A.wv(B.J,r,A.a([D.bwy.j(0.55*s),F.Oz.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.w,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bVU(l,d,j,i)),new A.y(540,new C.bVV(l,d,j,i)),new A.y(546,new C.bVW(l,d,j,i)),new A.y(574,new C.bVX(l,d,j,i)),new A.y(612,new C.bVY(l,d,j,i)),new A.y(650,new C.bVZ(l,d,j,i)),new A.y(656,new C.bW_(l,d,j,i))],x.E)
B.d.b_(n,new C.bW0())
for(m=0;m<7;++m)n[m].b.$0()
l.bJt(d,j,i)
l.bWr(d,j)
t.restore()
$.T()
t=A.L()
t.san(A.wv(new A.r(w/2,v*0.6),e.gapv()*0.75,A.a([B.L,D.bjI],p),A.a([0.55,1],o),B.w,k,k,0))
d.aE(new A.a5(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cEZ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e4()
h.cV(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aI(0,D.eD8),C.iR(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.T()
k=A.a([],t)
l=new A.aH(l.r,B.ak,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ac()
j=r-3
r=new A.ck(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.aj(i)
l.ac()
s=new A.ck(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.aj(r)
l.ac()
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.b=B.ad
s.c=1.6
s.r=D.bmt.gp(0)
s.d=B.bG
s.e=B.dP
d.af(l,s)}},
bSM(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aCN[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bZ(new A.r(p,m),n*0.74,q*0.5)
k=Ad.ze.j(v)
$.T()
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=k.gp(0)
d.c1(l,j)
q=A.bZ(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=B.wL.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.r=D.ajy.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cNr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bG5(d,D.eD4,0.9,e,D.hSJ,!1,!1,D.b4d,1,!1)
w=$.T().r
v=x.v
u=new A.aH(w,B.ak,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bA())
t=A.L()
t.r=D.alv.gp(0)
d.af(u,t)
C.bG5(d,D.eD6,0.95,e,D.hSx,!1,!1,D.b4e,1,!0)
t=new A.aH(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ck(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ck(431,553,421,548))
t.E(new A.bA())
u=A.L()
u.r=F.GP.gp(0)
d.af(t,u)
u=A.bZ(D.eD5,8,28)
t=A.L()
t.r=D.byZ.gp(0)
d.c1(u,t)
C.bG5(d,new A.r(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hSL,!0,!1,D.YE,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bZ(new A.r(s+q*16,r-6),16,11),C.iR(D.alm,1.8))
u=q<0
C.bG5(d,new A.r(s-q*6,r),0.62,e,D.hSO,!1,u,D.YE,2.2,!1)
C.bG5(d,new A.r(s-q*32,r+4),0.58,e+1,D.hSF,!1,u,D.YE,2.2,!1)
this.bZb(d,D.eCK,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bZ(new A.r(o,n),8,11)
k=p===1
j=k?D.ali:D.alV
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.ali:D.alV
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.b=B.ad
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.b=B.ad
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bZ(D.aas,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.ajX.gp(0)
d.c1(u,t)
u=A.bZ(D.aas.a7(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.boH.gp(0)
d.c1(u,t)
t=new A.aH(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bA())
u=A.L()
u.r=D.boU.gp(0)
d.af(t,u)
u=D.aas.a7(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.iu.gp(0)
d.O(u,1.1,t)
v=new A.aH(w,B.ak,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ck(180,588+w*(h?6:0),178,595))
d.af(v,C.iR(D.ajX,3.5))},
bZb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a7(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.b=B.ad
m.c=2
m.r=D.a_4.gp(0)
m.d=B.bG
m.e=B.dP
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bZ(k,17,32)
v=$.T()
r=A.L()
r.r=D.GN.gp(0)
d.c1(w,r)
r=A.bZ(k.a7(0,D.eCa),7,26)
w=A.ap(D.GN,B.v,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c1(r,q)
v=new A.aH(v.r,B.ak,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bA())
s=A.L()
s.r=D.GN.gp(0)
d.af(v,s)
s=A.bZ(k.a7(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.GN.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a7(0,new A.r(22,v)),k.a7(0,new A.r(21,-17+l)),C.iR(D.a_4,1.6))
d.ah(k.a7(0,new A.r(26,v)),k.a7(0,new A.r(28,-16+l)),C.iR(D.a_4,1.6))
v=k.a7(0,new A.r(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a7(0,new A.r(26,-3+l)),k.a7(0,new A.r(26,1+l)),C.iR(D.brL,1.4))
d.ah(k.a7(0,D.eF3),k.a7(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iR(D.GN,2.4))},
bWp(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bZ(new A.r(225+u*36,574+(t*13+6)),8,11)
$.T()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=D.bxB.gp(0)
a6.c1(u,t)}}u=A.bZ(D.aau.a7(0,B.cy),17,52)
$.T()
t=A.L()
t.r=D.bjg.gp(0)
a6.c1(u,t)
t=A.bZ(D.aau.a7(0,B.cy),12,44)
u=D.bmU.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.dsp[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.b=B.ad
o.c=7
o.r=D.H0.gp(0)
o.d=B.bG
o.e=B.dP
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Cn.j(0.6)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.b=B.ad
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dP
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.fgp,D.fh_,D.fi9,D.fiu,D.fi7]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.buP,D.br5,D.bx0][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.T()
f=A.a([],q)
a2=new A.aH(g.r,B.ak,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ac()
g=a0+d*0.6
a3=new A.i5(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.aj(a4)
a2.ac()
g=new A.i5(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.aj(a3)
a2.ac()
g=new A.bA()
f.push(g)
f=a2.f
if(f!=null)g.aj(f)
a2.ac()
g=new A.ar(B.U,B.R,B.X,B.Y,B.W)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.alT.j((1-a5)*0.9)
$.T()
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ajy.j(0.1*(1-a5))
$.T()
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bWr(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bz9.j(0.18*p)
$.T()
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.U,B.R,B.X,B.Y,B.W)
n.r=D.bsB.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c8r(d,e){switch(d){case 0:return e.b?D.hSz:D.b3t
case 1:return e.b?D.hSN:D.b3r
case 2:return D.b3q
case 3:return D.b3p
case 4:return D.b3s
default:return D.b3u}},
aF0(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
S_(d,e,f,g){var w,v=this,u=D.a7I[e],t=v.c8r(e,g),s=new C.brj(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a7I[e],l=e===0
m=B.i.D(((l?D.aOn:D.aOt).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.aaz
s.as=D.F9
if(l){s.a=o?v.aF0(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.r(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.r(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.F9
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eCi
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eDG
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
s.Q=D.eG_
s.as=D.aOG}if(e===2&&g.x!=null&&f<g.y){s.a=v.aF0(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aF0(f,e*3)
s.b=0.5
s.c=0.4}}C.hMx(d,u.a,u.b*1.2,t,s,f,e,null)},
bJt(d,e,f){var w=new C.bVT(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd4(d){return this.c}}
C.ah8.prototype={
a9(){return"_Stand."+this.b}}
C.af3.prototype={}
C.lN.prototype={}
C.bUD.prototype={
bDZ(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aT()
this.c=s},
GB(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bUE())
return r},
asM(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aOJ(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
anV(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzI(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b_(w,new C.bUF(this))
return B.d.gG(w)}}
C.avI.prototype={}
C.zT.prototype={}
C.am8.prototype={
gCy(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bPp(),A.U(w).k("X<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Nd.prototype={
gaqO(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCy(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d66(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaqO(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lN(B.a.i(s.a),p,B.d.c8(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bcz.prototype={}
C.ab5.prototype={}
C.bjZ.prototype={}
C.ah6.prototype={}
C.alr.prototype={
R(){return new C.als(B.bH,A.a([],x.cC),A.a([],x.e4),null,null)},
gd6(){return this.d}}
C.als.prototype={
gNs(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGK(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbcM(){var w,v=this,u=v.e
if(u===$){w=v.qa(v.gckR())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a3()
this.gbcM().fS(0)},
t(){this.gbcM().t()
this.byl()},
fS(d){this.l(new C.bNx(this))},
ckS(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fL(0,v)
if(w.c!=null)w.l(new C.bNs())},
bb4(){var w,v,u,t=this,s=t.r
B.d.a6(s)
w=t.gNs()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bjZ(u,(u+0.5)/v,w[t.x].b[u]))},
fL(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.br(w,new C.bNy())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.cbk()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gNs()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.auj(v,0.8,B.d_)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.auj(m.cy,0.8,G.nN)
m.b0j("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.auj(q,0.88,D.lW)
p=m.gNs()[m.x]
n=p.c
if(u===n){m.b0j("The right gourd fell! It was "+p.b[n]+".")
return}}}},
auj(d,e,f){var w,v,u,t=new A.e4()
t.cV(B.i.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ah6(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b0j(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.R3()}},
cbk(){var w=this
if(w.x+1>=w.gNs().length){w.R3()
return}++w.x
w.bb4()},
R3(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$R3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gNs().length
r=C.bJ3(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bNq())
w=2
return A.b(C.C3(u.a.d,r),$async$R3)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.C4(t.d,t.c.a,"catch",u.z),$async$R3)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bNr())
return A.h(null,v)}})
return A.i($async$R3,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cfe()
else w=v.ch?v.cff():A.at(new A.C(B.ev,A.w(A.a([D.aZG,B.N,D.h62,B.S,D.hce,B.eb,C.uJ("Play",v.gf1(v),B.d_,B.fQ,D.fL)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tR("Calabash Catch",w,B.fh,u)},
cff(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hQ:B.Iw
p.push(A.V(u,v?B.aC:B.bX,r,r,r,22))}p.push(B.aX)
v=s.x
u=s.gNs()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aYd,r,r,r))
p.push(B.bc)
v=A.m(14)
p.push(A.p(r,A.c(""+s.z,r,r,r,r,r,r,B.iW,r,r,r),B.f,r,r,new A.o(B.by,r,r,v,r,r,B.m),r,r,r,r,A1.D9,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.m(18)
t=A.K(B.d_,B.r,3)
return A.w(A.a([new A.C(D.bH8,p,r),A.p(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fQO,B.K,r,r),B.f,r,r,new A.o(D.qW,r,t,v,r,r,B.m),r,r,r,B.eY,B.bg,r,r,1/0),B.aj,A.E(A.cg(new C.bNw(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
cfe(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qy,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gNs().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.X_,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.co(A.a([D.bgH,u,t,B.aN,new C.IO(s,r,w.cx,v),B.aN,A.at(C.uJ("Back to the games",new C.bNp(w),B.d_,B.km,D.fL),v,v,v)],x.p),v,v,B.ae,v,v,B.ah,!1)}}
C.bf6.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.T(),a3=A.L()
a3.san(A.jR(B.J,new A.r(0,a0),D.d8I,G.aD3,B.w,e))
a4.aE(new A.a5(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.OD.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aH(a2.r,B.ak,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.aj(s)
v.ac()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.T()
w=A.L()
w.r=D.bnS.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aH(a2.r,B.ak,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.ck(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.ck(r+14,t,r+26,w))
a2.E(new A.bA())
w=A.L()
w.r=D.aiy.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.ctg[q]
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.aiy.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.ahQ.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.boR.gp(0)
a4.aE(new A.a5(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=D.akc.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bZ(new A.r(u,s),12,54)
$.T()
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=D.lW.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=D.ajh.gp(0)
a4.O(D.eBy,14,m)
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=D.btT.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.eBz,D.eCG,m)
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.san(new A.an1(D.eEO,46,D.dih,B.vP,B.w,e,e,0))
a4.O(B.J,34,m)
m=A.bZ(D.eEU,8,12)
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.j4(new A.eJ(n.c,e,e,B.cZ,e,e,e,e,e,e,D.fOz),B.K,B.cd,new A.kj(1),e,e,3,e,B.ce,e,B.cL)
k.nB(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bx(A.bZ(B.cN,m.gb4(m)+8,l),B.h4)
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=D.qW.gp(0)
a4.aq(j,l)
l=new A.ar(B.U,B.R,B.X,B.Y,B.W)
l.r=D.lW.gp(0)
l.b=B.ad
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.r(-m/2,4-l.gb4(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.iuq(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.e_,(w+1)/2)
h=A.bZ(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aH($.T().r,B.ak,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.ck(h.gbD().a,s+8,w+8,s))
a3.E(new A.bA())
m=A.L()
m.r=D.a_X.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=D.Cn.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.nN.gp(0)
a4.aE(new A.a5(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bnY.gp(0)
a4.c1(new A.a5(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.h_(e,B.cL,e,e,e,A.cW(e,e,e,e,e,e,e,e,e,A.l(e,e,B.d_.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Ek,e,e),"+"+a2),B.a8,B.cd,e,B.e4,B.ce)
k.eL()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.Rj.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aD2(w.c,w.f,v),B.aA),s=A.m(10),r=A.K(B.bE,B.r,1.4)
return new A.a4(u+22,v,A.w(A.a([new A.a4(u,u,t,v),B.cQ,A.p(v,A.c(w.d,v,1,B.a2,v,v,v,D.fGW,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.m),v,v,v,v,B.nm,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
ga0(d){return this.e}}
C.aD2.prototype={
a4(d,e){var w=e.eo(B.J),v=e.gdl(),u=this.c?0.8:0
return O.hto(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aBt.prototype={}
C.awi.prototype={
R(){return new C.awj(A.S(x.S,x.cq),null,null)},
gd6(){return this.d}}
C.awj.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hSj(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaH4(){var w=this.z
return w===$?this.z=this.Y9(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkR()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c3(w,-1,!1,x.S)}return v},
Y9(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aBt(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aBt(v[t],u[t],-1))
v=new A.e4()
v.cV(this.a.e*31+d)
B.d.dY(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.ds(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eR$
u.b=!1
B.d.a6(u.a)
u=u.goK()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e0$.a.a6(0)
v.qJ()}this.byO()},
cVM(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaH4()[e]
v=r.gkR()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.cty(r,e,w,v))
A.cC(B.m2,new C.ctz(r))
return}++r.r
u=A.br(null,B.hy,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.ctA(r,d,e,w,v))
u.cs(0)},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkR()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cD(n,0,new C.ctB())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.ctC(t,r))
w=5
return A.b(C.C3(t.a.d,r),$async$kM)
case 5:t.x=f
o=t.a
w=6
return A.b(C.C4(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.l(new C.ctD())
w=1
break
case 4:for(o=t.as,n=new A.ds(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eR$
p.b=!1
B.d.a6(p.a)
p=p.goK()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e0$.a.a6(0)
q.qJ()}o.a6(0)
t.l(new C.ctE(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qy,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.X_,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tR(q,A.co(A.a([D.aho,w,v,B.aN,new C.IO(u,t,r.ch,p),B.aN,A.at(C.uJ("Back to the games",new C.ctu(d),B.d_,B.km,D.fL),p,p,p)],x.p),p,p,B.ae,p,p,B.ah,!1),B.fh,p)}w=r.gkR()
v=r.e
s=w[v]
return new C.tR(q,new A.C(B.tE,A.w(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aY8,B.K,p,p),A.E(A.cg(new C.ctv(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.fh,p)}}
C.bey.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cTV(),A.U(b2).k("X<1>")).gJ(0),b4=a9.b,b5=b4.a7(0,B.Kz)
$.T()
w=A.L()
w.r=D.lX.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a7(0,D.eBl)
u=A.L()
u.r=B.qX.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.ed.aA(0,B.i.D(b2[p],0,1))
l=$.T().r
k=A.a([],s)
j=new A.aH(l,B.ak,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ac()
o=new A.ck((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aH(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),i=new A.v8(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jY(b1));--h
g=new A.C0(i,h)
f=0
for(;;){i.jQ()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jQ()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.T()
a1=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a1.r=B.aT.gp(0)
a1.b=B.ad
a1.c=3
b6.af(new A.aH(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aH(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),k=new A.v8(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jY(b1));--a0
k.jQ()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.T()
a4=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a4.r=D.Hf.gp(0)
a4.b=B.ad
a4.c=h
a4.d=B.bG
b6.af(new A.aH(l,a2,b0,new A.b7([new A.C0(k,a0),0,a1*m,!0]),a3),a4)
k.jQ()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jQ()
a5=n[a0].WB(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bZ(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a3.r=B.bf.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.j4(D.fGp,B.a8,B.cd,new A.kj(1),b0,b0,b0,b0,B.ce,b0,B.cL)
a8.eL()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.aAe.prototype={
R(){return new C.aAf(A.aR(x.S))},
gd6(){return this.d}}
C.aAf.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hTd(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a3()
this.bbd()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
bbd(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.d3(B.ty,new C.cIv(this))},
bsm(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkR()[v.e]
if(w.e[d]===w.b)v.l(new C.cID(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cIE(v,d))
A.cC(B.j4,new C.cIF(v))}},
d0k(){var w=this
if(!w.as&&w.f<w.gkR()[w.e].d.length)w.l(new C.cIG(w))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkR()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a1(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.l(new C.cIH(t,s))
w=5
return A.b(C.C3(t.a.d,s),$async$kM)
case 5:t.y=f
q=t.a
w=6
return A.b(C.C4(q.d,q.c.a,"who",t.r),$async$kM)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cII())
w=1
break
case 4:t.l(new C.cIJ(t))
t.bbd()
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gkR().length+" guessed",a2,a2,a2,a2,a2,a2,B.qy,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.X_,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tR(a1,A.co(A.a([D.bgS,w,v,B.aN,new C.IO(u,t,a0.ax,a2),B.aN,A.at(C.uJ("Back to the games",new C.cIx(a3),B.d_,B.km,D.fL),a2,a2,a2)],x.p),a2,a2,B.ae,a2,a2,B.ah,!1),B.fh,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkR()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.LU,B.K,a2,a2),B.S,A.at(A.l1(new C.cIy(a0,r),a2,B.aZ,B.hy,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ax(B.d_,2,B.r,-1)
k=o+1
w.push(new A.rn(new A.bq(0,1,u),new C.cIz(),A.p(a2,new A.c0(B.aK,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qV(A.c(""+k,a2,a2,a2,a2,a2,a2,B.ou,a2,a2,a2),D.lW,a2,12,a2),B.ar,new A.bu(1,B.b6,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fTr,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.qW,a2,new A.bE(l,l,l,l),new A.bc(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cB,B.bg,a2,a2,a2),B.aZ,B.j4,a2,new A.bg("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bJ(!1,D.hkf,a2,a2,!0,a2,a2,a2,a0.gd0j(),a2,a2),a2,a2,a2))
w.push(B.N)
if(a0.as){u=D.lX.j(0.2)
q=A.m(16)
p=A.K(D.lX,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fS,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.w(A.a([m,B.S,C.uJ(v,a0.gqt(a0),B.d_,B.jH,D.fL)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bD,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dz:B.d_.j(0.2)
g=new A.aP(16,16)
l=new A.ax(n.q(0,o)?B.fs:B.d_,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bX:B.c
d=n.q(0,o)?B.y7:a2
t.push(new A.rn(new A.bq(0,i,u),new C.cIA(),A.aA(a2,A.p(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.agw,new A.o(h,a2,new A.bE(l,l,l,l),new A.bc(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jF,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cIB(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.aZ,B.mw,a2,new A.bg("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.c_(B.fX,t,B.br,a2,10,10))}return new C.tR(a1,A.co(w,a2,a2,B.aoe,a2,a2,B.ah,!1),B.fh,a2)}}
C.aBd.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aIF.prototype={
b0(){this.b8()
this.b5()
this.dS()},
t(){var w=this,v=w.bc$
if(v!=null)v.a8(0,w.gdN())
w.bc$=null
w.a2()}}
C.agV.prototype={
ask(d){},
asQ(){var w=this,v=w.qa(new C.fgg(w))
v.fS(0)
w.MA$!==$&&A.aT()
w.MA$=v}}
C.aMw.prototype={
gboJ(d){var w=this.c
return B.a.aw(w,0,Math.min(this.d,w.length))},
WJ(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.d3(E.a1B,new C.fqJ(w))},
buK(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.anq.prototype={
R(){return new C.anr(new C.anA(),A.a([],x.t),new A.eN(0,$.ay()),$,0,null,null)},
gd6(){return this.d}}
C.anr.prototype={
gNq(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGK(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqA(){var w=this.r
return w===$?this.r=new C.aMw(new C.bVp(this)):w},
gar9(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gNq()[v].c)u.push(1)
return u.length},
gbo1(){var w=this.ghi(0)
return w.gzI()==null?"Elder":B.a.i(w.gzI().b)},
Z(){this.a3()
this.asQ()},
t(){var w,v=this
v.gqA().t()
v.f.t()
w=v.MA$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ay()
w.W$=0
v.byt()},
cPS(){var w=this
w.l(new C.bVm(w))
w.gqA().WJ(w.gNq()[w.x].a)},
LM(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqA()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qh$.a
v.ax=u
v.ay=u+1
v.l(new C.bVk())
A.cC(B.hy,new C.bVl(v))},
bsi(){var w=this.gar9(0)/this.gNq().length*100
if(w>=90)return D.fdb
if(w>=75)return D.fb3
if(w>=60)return D.f1g
if(w>=45)return D.f4R
return D.eWv},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cxW()
w=A.bT(0,new A.e9(A.b4(m,m,m,new C.bvq(n,n.qh$),B.aA),m),0,0,0)
if(!n.Q){v=D.qW.j(0.96)
u=A.m(20)
t=A.K(B.d_,B.r,3)
u=A.p(m,A.w(A.a([A.c("Elder "+n.gbo1()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aZ3,B.K,m,m),B.S,C.uJ("Start the test",n.gCo(),B.d_,B.jm,D.fL)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.m),m,m,m,m,B.bD,m,m,m)
v=u}else{v=n.x
u=n.gNq()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aZ5,m,m,m)
if(n.Q){t=n.gqA()
t=t.d<t.c.length}else t=!1
if(t)u=D.fyU
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ax(D.Cn,4,B.r,-1)
s.push(A.aA(m,A.p(m,A.c(q[r],m,m,m,m,m,m,D.fKf,B.K,m,m),B.f,m,D.agw,new A.o(D.bjN,m,new A.bE(o,o,o,o),new A.bc(p,p,p,p),m,m,B.m),m,m,m,m,B.Pp,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bVn(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.c_(B.fX,s,B.br,new A.bg("o"+t,x.W),8,8)}u=A.w(A.a([v,B.aj,A.oW(u,B.nj,A.q9(),B.aZ,B.aZ,A.M3())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.tR("Village School",new A.am(B.a0,m,B.ab,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fh,m)},
cxW(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bsi(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gNq()[v].c)g.push(v)
u=A.m(22)
t=A.K(B.d_,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fOS,B.K,i,i)
r=A.c("Signed by Elder "+j.gbo1(),i,i,i,i,i,i,D.fNs,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fSN,i,i,i),D.eO3],q)
o=A.c(h.b,i,i,i,i,i,i,D.fUM,i,i,i)
n=j.gar9(0)
m=j.gNq()
u=A.p(i,A.w(A.a([D.h5f,B.at,s,r,B.S,new A.am(B.z,i,B.ab,B.t,p,i),o,B.aj,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.adu,i,i,i),B.N,D.avj],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(D.qW,i,t,u,i,i,B.m),i,i,i,i,B.f4,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.IO(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aN,D.hlj,B.N],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ax(B.by,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.w(A.a([A.c(p.a,i,i,i,i,i,i,B.hj,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fQ6,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fSo,i,i,i)],q),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.dz,i,new A.bE(k,k,k,k),new A.bc(r,r,r,r),i,i,B.m),i,i,i,B.cB,B.bg,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.at(C.uJ("Back to the games",new C.bVg(j),B.d_,B.km,D.fL),i,i,i))
return new C.tR("Village School",A.co(s,i,i,B.bR,i,i,B.ah,!1),B.fh,i)}}
C.bvq.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qh$.a
a0.CK(e.f.Nb(a1))
w=C.hoq(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqA()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d2w[s]-6
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=D.H0.gp(0)
a0.aE(new A.a5(u,340,u+12,450),r)}u=A.bx(D.abs.ct(10),B.il)
$.T()
r=A.L()
r.r=D.Cn.gp(0)
a0.aq(u,r)
r=A.bx(D.abs,B.iD)
u=A.L()
u.san(A.jR(new A.r(30,96),new A.r(420,346),D.do8,f,B.w,f))
a0.aq(r,u)
q=new A.e4()
q.cV(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bZ(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=I.al2.gp(0)
a0.aE(new A.a5(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aE(D.fqf,u)
u=A.L()
u.r=B.bM.gp(0)
a0.aE(D.fqj,u)
u=A.bx(D.fq9,B.hs)
r=A.L()
r.r=D.a_X.gp(0)
a0.aq(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqA().gboJ(0)
m=A.h_(f,B.cL,f,7,f,A.cW(f,f,f,f,f,f,f,f,f,D.fX7,u+(t?"|":"")),B.a8,B.cd,f,B.e4,B.ce)
m.nB(346)
J.bs(v.save())
u=A.hS(D.abs)
r=$.lF()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hS(new A.a5(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.r(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bx(new A.a5(u,r,u+40,r+90),B.h4)
u=A.L()
u.r=D.bA3.gp(0)
a0.aq(r,u)}}else{m=A.h_(f,B.cL,f,f,f,D.fGF,B.K,B.cd,f,B.e4,B.ce)
m.nB(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqA().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghi(0).gzI()
i=(u==null?f:u.c)===D.oY?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fgh(d,a0,i,t,h,D.eCv)),new A.y(520,new C.fgi(a0,d,t)),new A.y(575,new C.fgj(a0,d,t)),new A.y(585,new C.fgk(this,a0,d,t)),new A.y(615,new C.fgl(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.fgm())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cfg(d,e){var w,v,u,t,s,r,q,p=$.T(),o=A.a([],x.v),n=new A.aH(p.r,B.ak,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aZ(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ac()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.aj(q)
n.ac()}}n.E(new A.bA())
return n},
aD(d){return!1}}
C.ano.prototype={
R(){return new C.anp(new C.anA(),A.S(x.S,x.i),new A.eN(0,$.ay()),$,0,null,null)},
gd6(){return this.d}}
C.anp.prototype={
gkR(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hS8(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.G9(0):w},
gaNk(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.G9(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.c8(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.G9(0):r).length);++v}s.Q=w
r=w}return r},
G9(d){var w,v,u,t,s=this.gkR()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e6(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e4()
u.cV(this.a.e+d*7)
B.d.dY(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eH(u,new C.bV2())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a3()
this.asQ()},
t(){var w,v=this
v.e.t()
w=v.MA$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ay()
w.W$=0
v.bys()},
ask(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.c8(u===$?r.z=r.G9(0):u,v)
s=r.gaNk()
s[v]=s[v]+(450*(t+0.5)/q-r.gaNk()[v])*Math.min(1,w)}},
d5M(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.l(new C.bVd(v,d))
return}if(w===d){v.l(new C.bVe(v))
return}v.l(new C.bVf(v,B.d.c8(v.gj1(),v.y),d,B.d.c8(v.gj1(),d)))},
cQA(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.G9(0):u).length))break
t=s.gkR()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.G9(0):u)[v]]===v);++v}s.l(new C.bV8(s,B.d.cw(w,new C.bV9())))},
kM(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkR().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bVa(t,s))
w=5
return A.b(C.C3(t.a.d,s),$async$kM)
case 5:t.x=f
q=t.a
w=6
return A.b(C.C4(q.d,q.c.a,"lineup",t.r*10),$async$kM)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bVb())
w=1
break
case 4:t.l(new C.bVc(t))
case 1:return A.h(u,v)}})
return A.i($async$kM,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gkR().length+" lines right",k,k,k,k,k,k,B.qy,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tR("Line Up",A.co(A.a([D.aho,w,B.aN,new C.IO(v,u,l.ch,k),B.aN,A.at(C.uJ("Back to the games",new C.bV4(d),B.d_,B.km,D.fL),k,k,k)],x.p),k,k,B.ae,k,k,B.ah,!1),B.fh,k)}w=A.a([],x.t)
for(t=0;v=l.gkR(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bV5(l))
u=A.bT(0,A.cg(new C.bV6(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aZ5,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.w(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fPk,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fRD,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.m(16)
n=l.ax
m=A.K(n?D.lX:G.nN,B.r,2)
r.push(A.p(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bV7(l),x.cM).aL(0,", then ")+".",k,k,k,k,k,k,D.fTQ,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.m),k,k,k,B.d2,B.bg,k,k,1/0))}if(!l.at)r.push(C.uJ("That is my line!",l.gcQz(l),B.d_,B.h1,D.fL))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uJ(w,l.gqt(l),B.d_,B.jH,D.fL))}return new C.tR("Line Up",new A.am(B.a0,k,B.ab,B.t,A.a([u,s,A.ao(12,A.w(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.fh,k)}}
C.blO.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qh$.a
c7.CK(c5.e.Nb(c8))
w=C.hoq(c8)
v=c7.c
J.bs(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj1().length
t=$.T().r
s=x.v
r=new A.aH(t,B.ak,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ck(225,500,440,470))
q=A.L()
q.r=D.a_X.gp(0)
q.b=B.ad
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aH(t,B.ak,c4,c4,l)
l.push(new A.aZ(o,n))
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
m=new A.bA()
l.push(m)
l=k.f
if(l!=null)m.aj(l)
k.ac()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=[B.d_,G.nN,D.lX,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b36(c7,"OLDEST",D.eDt,B.d_)
this.b36(c7,"YOUNGEST",D.eCW,B.bf)
t=A.bx(D.fq3,B.h4)
s=A.L()
s.r=D.H0.gp(0)
c7.aq(t,s)
s=A.bx(D.fq2,B.iD)
t=A.L()
t.r=D.Cn.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.dw2())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.c8(a1===$?c5.z=c5.G9(0):a1,f)
o=c5.gaNk()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkR()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkR()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.T()
a9=new A.ar(B.U,B.R,B.X,B.Y,B.W)
a9.r=B.d_.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dsd[B.o.F(b0,6)]
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
else b9=a3?D.eFx:c4
if(b1)c0=new A.r(3+b2*8,-56)
else if(h&&a7)c0=D.aOG
else c0=a3?new A.r(30,-104+Math.sin(e)*5):c4
C.Th(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.KC,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.j4(new A.eJ(a8,c4,c4,B.cZ,c4,c4,c4,c4,c4,c4,D.fMX),B.a8,B.cd,new A.kj(1),"\u2026",c4,1,c4,B.ce,c4,B.cL)
c1.nB(q)
c2=A.bx(A.bZ(new A.r(o,650),24,c1.b.c+16),B.h4)
$.T()
a8=new A.ar(B.U,B.R,B.X,B.Y,B.W)
if(a6)a9=B.iM
else a9=a7?B.tr:D.qW
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.U,B.R,B.X,B.Y,B.W)
if(a6)a9=D.lX
else a9=a7?G.nN:D.lW
a8.r=a9.gp(0)
a8.b=B.ad
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gb4(a8)/2))
c3=new A.j4(new A.eJ(""+(a2+1),c4,c4,B.cZ,c4,c4,c4,c4,c4,c4,D.fNg),B.a8,B.cd,new A.kj(1),c4,c4,c4,c4,B.ce,c4,B.cL)
c3.eL()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bZ(B.J,4,8)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=[B.d_,G.nN,D.lX,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b36(d,e,f,g){var w,v,u=null,t=A.h_(u,B.cL,u,u,u,A.cW(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Ek,u,u),e),B.a8,B.cd,u,B.e4,B.ce)
t.eL()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aI(0,new A.r(v/2,w.gb4(w)/2)))},
aD(d){return!1}}
C.a31.prototype={
a9(){return"_Trip."+this.b}}
C.ank.prototype={
R(){return new C.anl(D.YL,new A.eN(0,$.ay()),$,0,null,null)},
gd6(){return this.d}}
C.anl.prototype={
gDW(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGK(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nv(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqA(){var w=this.f
return w===$?this.f=new C.aMw(new C.bUP(this)):w},
gUH(){var w=this.ghi(0)
return w.gzI()==null?"Grandma":B.a.i(w.gzI().b)},
Z(){this.a3()
this.asQ()},
t(){var w,v=this
v.gqA().t()
w=v.MA$
w===$&&A.d()
w.t()
w=v.qh$
w.V$=$.ay()
w.W$=0
v.byr()},
ask(d){var w,v,u,t=this
if(t.r!==D.afe)return
w=B.dQ.aA(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDW()
if(v+1>=u.length){t.r=D.aff
t.XF()}else{++t.w
t.ay=!1
t.r=D.YM
t.gqA().WJ(u[t.w].a)}if(t.c!=null)t.l(new C.bUN())}},
XF(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$XF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqA().WJ("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDW().length
r=C.bJ3(t,u.z,s)
u.as=r
w=2
return A.b(C.C3(u.a.d,r),$async$XF)
case 2:u.at=e
s=u.a
w=3
return A.b(C.C4(s.d,s.c.a,"journey",u.x*10),$async$XF)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bUH())
return A.h(null,v)}})
return A.i($async$XF,v)},
btC(){this.aW5()},
aW5(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.afe
if(w.c!=null)w.l(new C.bUI())},
LM(d){var w,v,u,t,s=this
if(s.r!==D.YM)return
w=s.gDW()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bUM(s,d,v))
u=s.gqA()
t=s.w
u.WJ(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cVL(){if(this.r!==D.BW)return
this.aW5()},
B(d){var w,v,u,t=this,s=null,r=A.bT(0,new A.e9(A.b4(s,s,s,new C.bld(t,t.qh$),B.aA),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDW().length;++w){v=t.w
if(w<v||t.r===D.aff)v=B.d_
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bu(1,B.b6,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,B.xf,s,s,s,s),s))}p.push(B.b7)
p.push(D.h6W)
return new C.tR("Safari Journey",new A.am(B.a0,s,B.ab,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.cpm(),s,s,10,10,s,s)],q),s),B.fh,s)},
cpm(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bUL(o),l=D.qW.j(0.96),k=A.m(22),j=A.K(B.d_,B.r,3)
switch(o.r.a){case 0:w=A.w(A.a([A.c("A long drive to the village of Elder "+o.gUH()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aZ3,B.K,n,n),B.S,C.uJ("Start the journey",o.gbtB(),B.d_,D.bUS,D.fL)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bgs
break
case 1:w=o.w
v=o.gDW()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ax(D.lW,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,A.c(r[s],n,n,n,n,n,n,D.aYn,B.K,n,n),B.f,n,D.agD,new A.o(D.ame,n,new A.bE(p,p,p,p),new A.bc(q,q,q,q),n,n,B.m),n,n,n,n,B.x8,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bUJ(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.w(A.a([w,B.N,A.c_(B.bI,t,B.br,n,8,8)],u),B.B,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDW().length?"Drive home":"Drive on"
v=A.w(A.a([w,B.N,new A.bL(B.a9,n,n,C.uJ(v,o.gcVK(),B.d_,B.jH,D.fL),n)],x.p),B.B,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUH()),B.N,A.c(""+o.x+" of "+o.gDW().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aYF,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aSC(v)
u=C.aSC(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.adu,n,n,n))}w.push(B.N)
w.push(A.at(C.uJ("Back to the games",new C.bUK(o),B.d_,B.km,D.fL),n,n,n))
w=A.w(w,B.B,n,B.e,B.P,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aFP,n,B.m),n,n,n,n,B.bg,n,n,n)}}
C.bld.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qh$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDW(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.afe,d2=c7*0.5
c8=A.ap(D.blj,D.bwg,d0)
c8.toString
w=A.ap(D.a_6,G.ajO,d0)
w.toString
v=A.ap(B.uY,D.buA,d0)
v.toString
$.T()
u=A.L()
t=x.O
u.san(A.jR(B.J,new A.r(0,d2),A.a([c8,w,v],t),G.a6a,B.w,c3))
d3.aE(new A.a5(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.wv(s,60,A.a([D.buZ,B.L],t),c3,B.w,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.a_j.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dIN[o]
$.T()
u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.T()
j=A.a([],m)
i=new A.aH(k.r,B.ak,c3,c3,j)
j.push(new A.aZ(0,v))
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
$.T()
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=A.ap(l===0?D.bjQ:D.bzr,D.bp_,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cfh(d3,new A.r(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.T()
w=A.L()
v=A.ap(D.alm,D.Hf,d0)
v.toString
w.san(A.jR(new A.r(0,d2),new A.r(0,c7),A.a([v,D.bv0],t),c3,B.w,c3))
d3.aE(new A.a5(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bod.gp(0)
d3.aE(new A.a5(0,a0,c6,a1),w)
w=A.L()
w.r=D.bz2.gp(0)
d3.aE(new A.a5(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.U,B.R,B.X,B.Y,B.W)
u.r=I.NR.gp(0)
d3.aE(new A.a5(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.T()
b2=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b2.r=D.bju.gp(0)
d3.aE(new A.a5(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aH(b1.r,B.ak,c3,c3,b2)
b2.push(new A.aZ(a9-36,t))
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
b0=new A.bA()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.aj(b2)
b1.ac()
b0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b0.r=D.bx9.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b1.r=D.fL.gp(0)
d3.aE(new A.a5(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b0.r=D.H0.gp(0)
d3.aE(new A.a5(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a5(b0,a4,b0+60,a5),B.jL)
b0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b0.r=D.bAz.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.U,B.R,B.X,B.Y,B.W)
b0.r=D.Cn.gp(0)
b0.b=B.ad
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.j4(new A.eJ(b6,c3,c3,B.cZ,c3,c3,c3,c3,c3,c3,D.fLl),B.a8,B.cd,new A.kj(1),c3,c3,c3,c3,B.ce,c3,B.cL)
b7.eL()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gb4(b0)/2))
if(a7)b8=c4.r===D.aff
else if(r===c4.w){b0=c4.r
b0=b0===D.YM||b0===D.BW
b8=b0}else b8=!1
if(a7){b0=c4.ghi(0).gzI()
b9=(b0==null?c3:b0.c)===D.oY?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqA()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.BW
b0=c0?C.hO1(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.YM?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Th(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bKR(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.T()
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=D.byw.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.YL)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.BW&&c4.ax){b7=A.h_(c3,B.cL,c3,c3,c3,A.cW(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.d_,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A7.Jz,c3,c3),"BEEP BEEP!"),B.a8,B.cd,c3,B.e4,B.ce)
b7.eL()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cfh(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.buu,D.bnw,g)
o.toString
if(f){w=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.ck(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.ck(v+9,t,v+16,u))
w.E(new A.bA())
t=A.L()
t.r=D.a0u.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d6J[r]
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=D.a0u.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a7(0,D.eFu)
$.T()
v=A.L()
v.r=D.bjw.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bZ(e.a7(0,D.eFv),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bKR(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.YL?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jt(0,a0)
for(w=0;w<2;++w){v=D.dAs[w]
u=d.ay&&d.r!==D.YL&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.T()
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.bzi.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.brc.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=B.bl.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.rb(D.fqq,B.h4,B.h4,B.i8,B.hT)
$.T()
t=A.L()
t.san(A.jR(D.eBB,B.aan,D.dpx,G.a6a,B.w,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.U,B.R,B.X,B.Y,B.W)
s.r=D.dj3[B.o.F(o,4)].gp(0)
a2.aE(new A.a5(t,-26,t+10,-19),s)}n=d.r===D.BW&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a5(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.nf(A.bx(l,B.pl)),$.mS(),!0)
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=D.a_6.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.BW?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Th(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aOx,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.pl)
i=new A.ar(B.U,B.R,B.X,B.Y,B.W)
i.r=D.amg.gp(0)
i.b=B.ad
i.c=2
a2.aq(j,i)}d=A.bx(D.W5,B.pl)
t=A.L()
t.r=D.a_6.gp(0)
a2.aq(d,t)
J.bs(a1.save())
a1.clipRRect(A.nf(A.bx(D.W5,B.pl)),$.mS(),!0)
C.Th(a2,new A.r(D.W5.gbD().a,-10),0,0,0.7,-0.1,f,f,D.aOx,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.W5,B.pl)
d=A.L()
d.r=D.amg.gp(0)
d.b=B.ad
d.c=2
a2.aq(t,d)
d=A.L()
d.r=Ao.CM.gp(0)
a2.O(D.eDJ,4,d)
d=A.L()
d.r=D.H0.gp(0)
a2.aE(D.frz,d)
for(w=0;w<3;++w){v=D.dAu[w]
d=A.bx(new A.a5(v,-96,v+28,-79),B.jL)
t=new A.ar(B.U,B.R,B.X,B.Y,B.W)
t.r=D.Hf.gp(0)
a2.aq(d,t)}a1.restore()},
aD(d){return!1}}
C.aD5.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.biM.prototype={}
C.aD7.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.biN.prototype={}
C.aD8.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.biO.prototype={}
C.a7x.prototype={
B(d){var w=null
return new A.a4(1/0,this.c,A.b4(w,w,w,new C.blk(w),B.aA),w)}}
C.blk.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dyj[B.o.F(n,6)]
k=$.T()
j=new A.ar(B.U,B.R,B.X,B.Y,B.W)
j.r=l.gp(0)
d.aE(new A.a5(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aH(k.r,B.ak,null,null,j)
k=m+r
j.push(new A.aZ(k,f))
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
k=new A.bA()
j.push(k)
j=i.f
if(j!=null)k.aj(j)
i.ac()
k=new A.ar(B.U,B.R,B.X,B.Y,B.W)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tR.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.Ro,w,w,w,new C.bUG(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fIz,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c6(w,D.ZR,A.p(w,A.bo(!0,A.w(A.a([D.c9X,new A.C(D.bLJ,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bbI,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IO.prototype={
B(d){var w=null,v=this.d,u=C.aSC(v),t=C.ix8(v),s=B.c.j(0.08),r=A.m(18),q=A.K(B.d_.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fL6,w,w,w)],x.p)
if(this.e)p.push(D.eHW)
p.push(B.aj)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.hj,w,w,w))
if(t!=null)p.push(new A.C(B.rc,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.FE,w,w,w),w))
return A.p(w,A.w(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.m),w,w,w,w,B.bD,w,w,w)}}
C.X2.prototype={
R(){return new C.bo7(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
d1L(d){return this.f.$1(d)},
ge9(){return this.d}}
C.bo7.prototype={
gTH(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a3()
this.Qd()},
Qd(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Qd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bVr(u.a.d),$async$Qd)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dnu[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bVq(p,(o===$?u.d=q.c:o).a,r),$async$Qd)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e6Q(u,n))
return A.h(null,v)}})
return A.i($async$Qd,v)},
uI(d){return this.csw(d)},
csw(d){var w=0,v=A.j(x.H),u=this,t
var $async$uI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a8(t,!1).ca(A.e7(new C.e6R(d),!1,null,x.H)),$async$uI)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Qd()
return A.h(null,v)}})
return A.i($async$uI,v)},
gb8A(){var w,v,u,t=C.Nv(this.gTH()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a3A(d){return this.czT(d)},
czT(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a3A=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d1L(r),$async$a3A)
case 2:if(u.c!=null)u.l(new C.e6S(u,r))
return A.h(null,v)}})
return A.i($async$a3A,v)},
Px(d){return this.bTK(d)},
bTK(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Px=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hqP(t.gTH())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Nd("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a8(s,!1).ca(A.e7(new C.e6O(q),!1,null,r)),$async$Px)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bl(j,new C.e6P(p))
o=s.length
B.d.ce(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a3A(A.cV(s,0,A.dz(2,"count",x.S),r).df(0)),$async$Px)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Px,v)},
YB(d,e){return this.bRj(0,e)},
bRj(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$YB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ce(null,null,!0,null,new C.e6N(e),o,null,!0,!0,x.y),$async$YB)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hqP(u.gTH()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a3A(o),$async$YB)
case 5:case 3:return A.h(null,v)}})
return A.i($async$YB,v)},
abl(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e6K(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.aa(0,B.H,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.WV,p,p,p),B.aX],s)
q=A.m(10)
r.push(A.p(p,A.c(i,p,p,p,p,p,p,D.fJt,p,p,p),B.f,p,p,new A.o(B.i0,p,p,q,p,p,B.m),p,p,p,p,B.zG,p,p,p))
return A.aA(p,A.d2(A.p(p,A.w(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.aX,A.c(e,p,2,p,p,p,p,D.fRw,p,p,p),B.cQ,A.c(f,p,3,B.a2,p,p,p,D.fKd,p,p,p)],s),B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a6(B.aw,B.aD,B.w,w,p,p),B.m),p,p,p,p,B.x6,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Y4(d,e,f,g,h,i){return this.abl(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nv(s.gTH()),p=s.gTH(),o=C.aSC(s.e),n=C.hqP(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e6T(s),k=C.hS8(p,1).length,j=C.hSj(p,1).length,i=C.hTd(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.K(B.d_.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.adh,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fOW,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.bc,A.E(A.w(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.Xc,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),1),A.w(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qy,r,r,r),D.hdf],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.m),r,r,r,r,B.bD,r,r,r)
f=s.Y4("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.az,new C.e6U(s,p),l.$1("kahoot"))
h=s.Y4("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lW,new C.e6V(s,p),l.$1("fire"))
a0=s.Y4("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.vc,new C.e6W(s,p),l.$1("catch"))
j=j!==0?new C.e6Z(s,p):r
j=s.abl("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hY,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e7_(s,p):r
i=s.abl("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lV,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Y4("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eJ,new C.e70(s,p),l.$1("journey"))
k=k!==0?new C.e71(s,p):r
k=A.a([g,B.aN,D.hhk,B.N,A.lf(0.98,A.a([f,h,a0,j,i,e,s.abl("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.et,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Y4("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.de,new C.e72(s,p),l.$1("school"))],a1),2,12,12,r,B.e8,!0),B.df,A.A(A.a([D.bNy,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fJy,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.N],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fYI,B.bc,new A.bu(1,B.b6,A.w(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hk,r,r,r),A.c(""+v.gaqO(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.FE,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),r)],a1)
if(v.gaqO(0).length>=2){f=D.lX.j(0.2)
t=new A.ax(D.lX,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.V(B.fQ,D.lX,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e73(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.d_.j(0.2)
t=new A.ax(B.d_,1,B.r,-1)
f=A.aA(r,A.p(r,A.V(B.jm,B.d_,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e74(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fs.j(0.2)
t=new A.ax(B.fs,1,B.r,-1)
B.d.u(g,A.a([B.b7,f,B.b7,A.aA(r,A.p(r,A.V(B.eq,B.fs,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e75(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c0(B.aK,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bE(u,u,u,u),new A.bc(h,h,h,h),r,r,B.m),r,r,r,B.d2,B.bg,r,r,r))}if(s.a.e){j=m?new C.e6X(s):new C.e6Y(a2)
i=A.m(18)
h=A.K(m?B.d_:B.aT,B.r,2)
g=m?B.d_.j(0.12):B.dz
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.d_:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.m),r,r,r,r,B.Pe,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hig)
k.push(B.aB)
k.push(D.avj)
return new C.tR("Family Games \xb7 "+p.b,A.co(k,r,r,D.bHK,r,r,B.ah,!1),B.fh,r)}}
C.a0R.prototype={
a9(){return"_KPhase."+this.b}}
C.anm.prototype={
R(){return new C.ann(D.b3k)},
gd6(){return this.e}}
C.ann.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fS(d){var w,v=this
v.l(new C.bV0(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.d3(B.fr,new C.bV1(v))},
aRx(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.l(new C.bUR(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.d3(B.fq,new C.bUS(w))},
LM(d){var w
if(this.d!==D.aeK)return
w=this.at
if(w!=null)w.a1(0)
this.b8w(d)},
b8w(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.S(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bUX(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cC(B.ty,v.giA(v))},
cPb(d){var w=this
if(w.d!==D.Yh)return
if(w.e+1>=w.a.w.length)w.Zo()
else{w.l(new C.bUY(w))
w.aRx()}},
Zo(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Zo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bJ3(p,u.w,t)
u.l(new C.bUU(u,s))
w=2
return A.b(C.C3(u.a.e,s),$async$Zo)
case 2:r=e
t=u.a
w=3
return A.b(C.C4(t.e,t.f,t.r,u.f),$async$Zo)
case 3:q=e
if(u.c!=null)u.l(new C.bUV(u,r,q))
return A.h(null,v)}})
return A.i($async$Zo,v)},
cQ0(){var w,v,u,t,s=this,r=s.a,q=new A.e4()
q.cV(r.w.length*31+B.a.ga_(r.f))
w=s.a.w.length*900
v=A.a([new A.b1("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.dY(r,q)
for(r=A.cV(r,0,A.dz(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<aj.E>")),u=u.k("aj.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b1(t,B.i.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bUZ())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b3k===r){w=A.a([D.hdE,B.S,A.c(s,t,t,t,t,t,t,B.Xm,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fJG,t,t,t))
w.push(B.aB)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.BF,B.K,t,t))
w.push(B.eb)
w.push(C.uJ("Play",u.gf1(u),B.d_,B.fQ,D.fL))
w=A.at(new A.C(B.ev,A.w(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b3l===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fS3,t,t,t),t,t,t)
break A}if(D.aeK===r||D.Yh===r){w=u.cvb()
break A}if(D.b3m===r){w=u.cfi()
break A}w=t}return new C.tR(s,w,B.fh,t)},
cvb(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Yh,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aYd,j,j,j),B.aX],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.LU,j,j,j))
g.push(B.ar)
f=A.m(14)
g.push(A.p(j,A.c(""+k.f,j,j,j,j,j,j,B.iW,j,j,j),B.f,j,j,new A.o(B.by,j,j,f,j,j,B.m),j,j,j,j,A1.D9,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.m(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.jH(B.by,j,k.as<5?B.fs:B.d_,9,j,w,j),B.ap)
w=A.m(22)
v=A.K(B.d_,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.w(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lX:G.nN,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fII,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fUf,B.K,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.qW,j,v,w,j,j,B.m),j,j,j,j,B.f4,j,j,1/0),3)
v=A.a([],h)
for(u=k.giA(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bUW(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aFr[o]
m=new A.aP(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aFL[o],j,j,j,j,j,j,D.fKH,j,j,j),B.ar,new A.bu(1,B.b6,A.c(r[t],j,3,B.a2,j,j,j,D.fJD,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.atK)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c1y)
v.push(A.aA(j,new A.Ty(A.p(j,new A.c0(B.aK,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bE(l,l,l,l),new A.bc(m,m,m,m),W.aDQ,j,B.m),j,j,j,j,B.eY,j,j,j),p,B.aZ,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.aj,f,B.af,w,B.af,A.E(A.lf(1.45,v,2,10,10,j,B.e8,!1),4)],h)
if(i)h.push(D.eHa)
return new A.C(B.a2b,A.w(h,B.l,j,B.e,B.h,0,B.p),j)},
cfi(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cQ0(),m=x.p,l=A.a([D.bfJ,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qy,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.X_,o,o,o),o,o,o),B.aN],m)
for(w=0;w<n.length;++w){v=n[w].c?B.d_.j(0.25):B.dz
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.d_:B.by,1,B.r,-1)
q=A.c(w<3?D.dpO[w]:""+(w+1),o,o,o,o,o,o,B.me,o,o,o)
s=s?B.u:B.O
l.push(A.p(o,new A.c0(B.aK,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a4(34,o,q,o),new A.bu(1,B.b6,A.c(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iW,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bE(r,r,r,r),new A.bc(u,u,u,u),o,o,B.m),o,o,o,B.cB,B.eZ,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IO(m,v,p.CW,o))
l.push(B.aN)
l.push(A.at(C.uJ("Back to the games",new C.bUT(p),B.d_,B.km,D.fL),o,o,o))
return A.co(l,o,o,B.f4,o,o,B.ah,!1)}}
C.UH.prototype={
R(){return new C.anj(A.S(x.de,x.er))}}
C.anj.prototype={
gDB(){var w,v=this,u=v.d
if(u===$){w=C.hwQ(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glY(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDB().b
v=$.ay()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bb(w,B.b8,B.aP),v)}return t},
ciw(d){return this.f.c_(0,d,new C.bUr(d))},
Z(){this.a3()
var w=this.gDB().c
if(w.length===0)w.push(C.hi5(null,0,20,""))},
t(){var w,v,u=this.glY(0)
u.V$=$.ay()
u.W$=0
for(u=this.f,u=new A.ds(u,u.r,u.e);u.C();)for(w=J.aQ(u.d);w.C();){v=w.gP(w)
v.V$=$.ay()
v.W$=0}this.a2()},
cP1(){if(this.gDB().c.length>=12)return
this.l(new C.bUs(this))},
jJ(d){var w,v,u=this,t=u.gDB()
t.b=B.a.i(u.glY(0).a.a)
w=t.gaqO(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.T(D.fBD)
return}v=t.c
B.d.a6(v)
B.d.u(v,w)
v=u.c
v.toString
A.a8(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bUC(),r=x.p,q=A.a([A.bJ(!1,D.h2P,t,t,!0,t,t,t,u.gbst(u),t,t)],r),p=A.a([D.hhS,B.af,A.aN(t,B.M,!1,t,!0,B.t,t,A.aO(),u.glY(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.am,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ae,t,t,t,t,t,t,t,t,t,t,t,B.hj,!0,B.a8,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDB().c.length,w<v;++w)B.d.u(p,A.a([new A.fm(new C.bUB(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uJ("\uff0b Add a question",u.gcP0(),B.aT,t,B.c),t,t,t))
return new C.tR("Make your game",A.co(p,t,t,D.bHH,t,t,B.ah,!1),q,t)}}
C.asu.prototype={
R(){return new C.aGH(A.a([],x._))},
bw(){return this.r.$0()},
qu(){return this.w.$0()},
ge9(){return this.c}}
C.aGH.prototype={
Z(){var w,v
this.a3()
this.wI()
w=this.a
v=w.c
if(v.length!==0)C.a9h(v,w.e,w.d.w)},
wy(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.htH(r,t.e,!1,s.w,new C.e8v(u),null,s),$async$wy)
case 2:w=3
return A.b(u.wI(),$async$wy)
case 3:return A.h(null,v)}})
return A.i($async$wy,v)},
a1J(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1J=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.htH(r,t.e,!0,s.w,new C.e8u(u),null,s),$async$a1J)
case 2:w=3
return A.b(u.wI(),$async$a1J)
case 3:return A.h(null,v)}})
return A.i($async$a1J,v)},
wI(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bz(q.a.c),$async$wI)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.l(new C.e8x(q,p))
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
return A.b(C.HJ(q.a.c).d7(0,B.r8),$async$wI)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e8y(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e8z(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wI,v)},
PT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$PT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.T(D.fBd)
w=3
return A.b(C.HJ(t.a.c),$async$PT)
case 3:r=e
w=4
return A.b(C.h7u(t.a.c,r),$async$PT)
case 4:q=e
w=5
return A.b(C.HJ(t.a.c),$async$PT)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e8t(t,p))
o=t.c.K(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b0(null,null,null,q?B.dR:B.d9,null,B.t,null,s,null,B.m1,null,null,null,null,null,null,null,null,null,null))
t.a.qu()
case 1:return A.h(u,v)}})
return A.i($async$PT,v)},
IZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iFC(l),$async$IZ)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i7I(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b39(q,p.e,l,"Each family tree costs $"+B.i.a5(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$IZ)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hOb(r)
o=Date.now()
n=t.a.c
m=new C.le(l,r.toUpperCase(),p,!0,B.M,D.Et,new A.W(o,0,!1),0,n,D.vp,B.co)
w=5
return A.b(C.a4W(n,m),$async$IZ)
case 5:w=6
return A.b(t.wI(),$async$IZ)
case 6:t.a.bw()
t.a.qu()
if(t.c==null){w=1
break}t.Ft(m)
case 1:return A.h(u,v)}})
return A.i($async$IZ,v)},
Ft(d){return this.cnE(d)},
cnE(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Ft=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bz(u.a.c),$async$Ft)
case 2:n=l.nO(k.dO(f,new C.e8w(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hk(m,new C.aso(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Ft)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4W(u.a.c,o),$async$Ft)
case 6:case 5:w=7
return A.b(u.wI(),$async$Ft)
case 7:u.a.qu()
return A.h(null,v)}})
return A.i($async$Ft,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=new C.uu(p)
if(r.e)return A.at(A.nk(q,p?B.bv:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.cx(r.d)){w=p?B.el:B.c
v=A.m(15)
u=A.aE(!1,B.a3,!0,q,A.aM(!1,q,!0,A.p(q,D.c_4,B.f,q,q,new A.o(B.aW.j(0.12),q,A.K(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cM,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcmE(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GL(A.p(q,A.w(A.a([u,B.aN,t,B.N,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.eb,A.bH(D.hl9,q,r.gaUS(),A.bp(B.bU,q,q,q,q,q,B.a2B,q,new A.b9(A.m(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.m),q,q,q,q,D.bKq,q,q,1/0),15,B.ag,1.05,D.aex,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aX],v)
if(J.cL(r.d))w.push(A.aI(q,q,q,q,A.V(B.Al,B.aW,q,q,q,q),q,q,q,new C.e8B(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aI(q,q,q,q,A.V(B.Ah,B.aW,q,q,q,q),q,q,q,r.gaij(),q,q,q,q,"Transfer / backup file",q))
w.push(A.de(E.auH,q,D.h05,r.gaUS(),A.bp(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GL(r.cL8(J.t(r.d,s),o),14,B.ag,1,D.aex,q))
B.d.u(w,u)}return A.w(A.a([p,B.aB,A.w(w,B.l,q,B.e,B.h,0,B.p)],v),B.B,q,B.e,B.h,0,B.p)},
cL8(d,e){var w=null,v=e.a,u=v?B.el:B.c,t=A.m(14),s=A.K((v?B.eo:B.bP).j(0.55),B.r,1),r=A.a([new A.aa(0,B.H,B.v.j(v?0.35:0.08),B.eE,10)],x.V),q=A.m(14),p=A.p(w,D.bZ9,B.f,w,w,new A.o(B.aW.j(0.15),w,w,A.m(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.garP(),m=d.d?"":" \xb7 Public",l=d.y===D.le?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bs,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.h,0,B.p),1)
return A.p(w,A.aE(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.C(B.bD,A.A(A.a([p,B.bc,l,A.V(B.Q6,v?B.bv:B.bl,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e8A(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.aso.prototype={
R(){return new C.aGE(A.a([],x._),A.aR(x.N),A.bbX())},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aGE.prototype={
Z(){var w,v,u=this
u.a3()
u.d=u.a.w
u.aeS()
w=u.a
v=w.c
if(v.length!==0)C.a9h(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ay()
w.W$=0
this.a2()},
a4N(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4N=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yP("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e7W(r),s,null,!0,!0,x.y),$async$a4N)
case 3:if(e!==!0||t.c==null){w=1
break}t.KG()
t.l(new C.e7X(t,r))
w=4
return A.b(t.uE(),$async$a4N)
case 4:t.a.bw()
t.yP(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a4N,v)},
cAv(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.U$.push(new C.e7R(w,f,d,e))},
aXb(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dA()
u.ei(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bfd(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eT(new Float64Array(16))
q.ed(r)
w=q.DG()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dA()
t.ei(r,u,0,1)
t.k5(v,v,1,1)
t.ei(-r,-u,0,1)
t.iY(0,q)
s.sp(0,t)},
aeS(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aeS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bz(u.a.c),$async$aeS)
case 2:t=s.nO(r.dO(e,new C.e7i(u)))
if(t!=null&&u.c!=null)u.l(new C.e7j(u,t))
return A.h(null,v)}})
return A.i($async$aeS,v)},
yP(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b0(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
wy(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.htH(o,t,!1,r,new C.e7A(u),q.a,s),$async$wy)
case 2:n=A
m=J
w=3
return A.b(C.HJ(u.a.c),$async$wy)
case 3:p=n.nO(m.dO(e,new C.e7B(u)))
if(p!=null&&u.c!=null)u.l(new C.e7C(u,p))
return A.h(null,v)}})
return A.i($async$wy,v)},
KG(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cJ(w,0)},
uE(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a4W(t,s),$async$uE)
case 2:return A.h(null,v)}})
return A.i($async$uE,v)},
a3g(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a3g=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uK(q,t.a.c)){t.yP("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iGR(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a3g)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.KG()
t.l(new C.e7Q(t,r))
w=4
return A.b(t.uE(),$async$a3g)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3g,v)},
b59(){var w=this.c
w.toString
A.a8(w,!1).ca(A.e7(new C.e7x(this),!1,null,x.H))},
a1X(){return this.cnG()},
cnG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a1X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uK(m,t.a.c)){t.yP("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e7N(),A.U(s).k("X<1>")).gJ(0)
s=A.eC([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ci.E"))
B.d.fd(p)
s=t.c
s.toString
w=3
return A.b(A.bV(B.L,null,new C.e7O(n,t,new C.uu(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a1X)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.KG()
t.l(new C.e7P(t,o))
w=6
return A.b(t.uE(),$async$a1X)
case 6:case 5:if(o.a&&t.c!=null)t.b59()
case 1:return A.h(u,v)}})
return A.i($async$a1X,v)},
Xn(d){return this.bG5(d)},
bG5(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uK(r,t.a.c)){t.yP("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e76(t,d),r,null,!0,!0,x.P),$async$Xn)
case 3:s=f
if(s==null){w=1
break}t.KG()
t.l(new C.e77(t,s))
w=4
return A.b(t.uE(),$async$Xn)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xn,v)},
a57(d){return this.cNp(d)},
cNp(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a57=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.ce(null,null,!0,null,new C.e7Z(u,d,new C.uu(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a57)
case 2:return A.h(null,v)}})
return A.i($async$a57,v)},
cjJ(d){var w=this,v=w.d
v===$&&A.d()
if(C.uK(v,w.a.c))w.Py(d)
else w.a57(d)},
akO(d,e){return this.cEz(d,e)},
cEz(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$akO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.e7T(new C.uu(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$akO)
case 3:case 1:return A.h(u,v)}})
return A.i($async$akO,v)},
J3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$J3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.le?3:5
break
case 3:w=6
return A.b(C.hgi(t.a.c),$async$J3)
case 6:s=e
o=t.a
r=C.hBI(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.akO(!s,!r),$async$J3)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aSH(o,t.a.c)){t.yP("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lE(o,"Cancel","Remove",q.y===D.le?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$J3)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aSF(t.a.c,t.d.a),$async$J3)
case 11:t.a.bw()
o=t.c
if(o==null){w=1
break}A.j2(o,null)
case 1:return A.h(u,v)}})
return A.i($async$J3,v)},
ach(d){return this.bRA(d)},
bRA(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ach=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uK(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e78(p))){o=A.U(s)
p.a=A.nO(new A.cQ(new A.X(s,new C.e79(d),o.k("X<1>")),new C.e7a(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.KG()
t.l(new C.e7b(t,s,d,q))
w=3
return A.b(t.uE(),$async$ach)
case 3:t.yP(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ach,v)},
Py(d){return this.bTO(d)},
bTO(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Py=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uK(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a57(d),$async$Py)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.e7f(t,d),r,null,!0,!0,x.P),$async$Py)
case 6:s=f
if(s==null){w=1
break}t.KG()
t.l(new C.e7g(t,s))
w=7
return A.b(t.uE(),$async$Py)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Py,v)},
cLA(){var w=this,v=w.d
v===$&&A.d()
if(!C.uK(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e7Y(w))
w.uE()},
a_t(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aSH(n,t.a.c)){t.yP("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.ay()
r=new A.au(B.ay,s)
q=t.d.e
p=A.bt(new A.O(q,t.gcic(),A.U(q).k("O<1,n>")).c0(0,new C.e7s()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e7t(t,new C.uu(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_t)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.KG()
t.l(new C.e7u(t,p))
w=4
return A.b(t.uE(),$async$a_t)
case 4:t.yP("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_t,v)},
cid(d){return B.a.i(d.toLowerCase())},
cmk(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uK(v,w)
t=r.d
s=C.ivC(t)
C.iFG(q,t.b,u,C.ivB(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uu(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.e85(),A.U(l).k("X<1>")).gJ(0)
l=n?B.c7:B.hX
v=A.V(B.a3L,n?B.bv:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.C(A_.Da,A.aM(!1,o,!0,new A.C(B.hA,A.A(A.a([v,B.b7,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e86(p,d),o,o,o,o,o,o,o),o),new A.C(B.o6,p.c44(m),o)],u)
if(p.d.y===D.le){t=B.u8.j(0.15)
s=A.m(12)
r=A.K(B.u8.j(0.45),B.r,1)
q=C.HH(p.d,p.a.c)
v.push(new A.C(B.zz,A.p(o,A.A(A.a([D.c3I,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.m),o,o,o,o,B.hp,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,15,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aX],u)
if(C.uK(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GW("Undo",B.q5,p.gcLz(),m,o,o))
u.push(new C.GW("Family Book",D.bTI,p.gcmj(),m,B.v_,o))
u.push(new C.GW("Family games",B.oe,p.gcmw(),m,B.az,o))
if(C.uK(p.d,p.a.c))u.push(new C.GW("Display settings",B.E_,p.gcnF(),m,B.b5,o))
u.push(new C.GW("Sync",B.Ah,p.gaij(),m,o,o))
t=p.d
if(t.y===D.le||C.aSH(t,p.a.c)){t=p.d.y===D.le?"Remove shared tree":"Delete tree"
u.push(new C.GW(t,B.eq,p.gbRK(),m,B.fs,o))}if(C.uK(p.d,p.a.c))u.push(new C.GW("Add member",B.xu,new C.e87(p),m,B.bU,o))
v.push(new A.C(S.aog,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.garP()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cg(new C.e88(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.V(n?B.a3P:B.Q7,o,o,o,o,o)
v.push(A.at(A.hy(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e89(p),o),o,o,o))}return A.c6(o,l,A.bo(!0,A.w(v,B.B,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c44(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.m(22)
v=A.a([new A.aa(0,B.H,B.h7.j(0.35),B.dv,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.V(B.A9,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aE(!1,B.a3,!0,m,A.aM(!1,m,!0,A.p(m,D.c73,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cM,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaij(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fLM,m,m,m)
r=r.garP()
p=n.d.garP()===1?"member":"members"
o=x.p
p=A.a([s,B.bc,A.E(A.w(A.a([q,B.bs,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.h,0,B.p),1)],o)
if(C.uK(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c3X,m,m,m,n.gcxL(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.j8:B.np
r=r?"Private":"Public"
r=A.E(n.ayn(q,"Privacy",r,n.a.d.w?n.gcKq():m),1)
q=A.E(n.ayn(B.xz,"Tree code",n.d.c,new C.e7h(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.ayn(D.bVo,"Collaborators",p,n.gc98()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.le){s=B.c.j(0.15)
B.d.u(p,A.a([B.N,A.aE(!1,B.a3,!0,A.m(999),A.aM(!1,A.m(999),!0,new A.C(B.h0,A.A(A.a([A.V(B.of,B.c,m,m,m,14),B.e0,A.c("View only",m,m,m,m,m,m,B.acY,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bv(u,new A.am(B.a0,m,B.ab,B.t,A.a([t,new A.C(B.HO,A.w(p,B.B,m,B.e,B.h,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.cbp,B.m),m,m,m,m,m,m,m,1/0)},
ayn(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aE(!1,B.a3,!0,A.m(14),A.aM(!1,A.m(14),!0,new A.C(K.apD,A.w(A.a([A.V(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rN,A.c(f,w,1,B.a2,w,w,w,Aq.y9,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.biQ.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gar(r)&&s.c.length===0)return B.bK
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.biT(s,t),new A.av(w,v))],x.p)
r=r.gdT(r)
B.d.u(u,r.dQ(r,new C.dld(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dle(this),A.U(r).k("O<1,x>")))
return new A.C(B.vm,new A.a4(w,v,new A.am(B.a0,t,B.ab,B.f,u,t),t),t)}}
C.Lf.prototype={}
C.H_.prototype={}
C.biS.prototype={
gbnO(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aMq.prototype={}
C.biT.prototype={
bTp(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.T()
v=A.L()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aH(q.r,B.ak,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.i5(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.i5(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bA())
q=A.L()
q.r=B.c.gp(0)
d.O(new A.r(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bTm(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dly())
w=f.b
v=w+(B.d.gG(a0).b-w)/2
u=B.d.aR(a0,new C.dlz(f))
t=new A.O(a0,new C.dlA(f),A.U(a0).k("O<1,H>")).c0(0,new C.dlB()).cD(0,1/0,B.pB)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.m5(n)
k=Math.min(10,m/2)
m=$.T()
j=A.a([],r)
i=new A.aH(m.r,B.ak,null,null,j)
j.push(new A.aZ(w,v-k))
i.ac()
m=l*k
h=new A.ck(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.aj(g)
i.ac()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.aj(h)
i.ac()
m=new A.ck(o,v,o,v+k)
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
a4(d,e){var w,v,u,t,s,r
$.T()
w=A.L()
w.r=B.bU.j(0.75).gp(0)
w.c=2.2
w.b=B.ad
w.d=B.bG
w.e=B.dP
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bTm(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bTp(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bmF.prototype={
gcfk(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aG3
switch(w.c.a){case 0:return D.d5d
case 1:return D.diY
case 2:return D.dCx}},
gcfn(){var w=this.c,v=C.hNo(w.w),u=C.hNo(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=t.gcfk(),p=t.c,o=A.bHD(p.f),n=t.gcfn(),m=x.V,l=A.a([new A.aa(0,B.H,B.d.gal(q).j(0.35),B.cN,10)],m),k=r?B.ax:B.c,j=A.K(r?B.ax:B.c,B.r,2)
if(o!=null)w=A.tV(B.z,s,B.cr,B.c_,!1,s,o,!1,s,s)
else{w=A.a([B.d.gG(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a6(B.a5,B.a9,B.w,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.ib(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a6(B.aw,B.aD,B.w,q,s,s),B.a6),s,56,s,s,B.Do,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.K(r?B.ax:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.c(""+k,s,s,s,s,s,s,D.fWN,s,s,s),B.f,s,s,new A.o(B.ci,s,w,j,s,s,B.m),s,s,s,s,D.bMm,s,s,s),s,s,s,-6,-4,s))}k=r?B.cx:B.c
j=A.m(8)
w=A.K(B.d.gG(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.H,B.v.j(r?0.3:0.06),B.dS,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cx,s,s,s,s,s,s,s,s,u,s,s,B.C,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a4(84,112,A.w(A.a([new A.am(B.a0,s,B.ab,B.f,l,s),B.at,A.p(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.b9R,new A.o(k,s,w,j,m,s,B.m),s,s,s,s,D.bMx,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bhT.prototype={
a4(d,e){var w,v,u,t,s
$.T()
w=A.L()
v=this.b
u=v?B.c:D.bn4
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bAQ.prototype={
B(d){var w=this,v=null,u=new C.fwj(w),t=w.c,s=t?B.cx:B.c,r=A.m(12),q=u.$3(B.ig,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.by:B.fA,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xw,"Zoom out",w.e)
return A.aE(!1,B.a3,!0,r,A.w(A.a([q,p,o,A.p(v,v,B.f,t?B.by:B.fA,v,v,v,1,v,v,v,v,v,22),u.$3(B.as5,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dJ,v,v,v,B.ai)}}
C.bq1.prototype={
B(d){var w=this,v=null,u=B.bU.j(0.15),t=A.K(B.bU,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.w(A.a([A.V(s?B.a3P:B.Q7,B.bU,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fSJ,v,v,v)],r),B.l,v,B.bb,B.h,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.aj,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fQu,B.K,v,v)],r)
if(s){t=A.a([B.aj],r)
s=w.d
B.d.u(t,new A.O(s,new C.f60(w),A.U(s).k("O<1,x>")))
B.d.u(u,t)}return new A.a4(84,v,A.w(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a14.prototype={
R(){return new C.aF4()},
bw(){return this.Q.$0()},
ge9(){return this.w}}
C.aF4.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ay()
r.d!==$&&A.aT()
r.d=new A.au(new A.bb(t,B.b8,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aT()
r.e=new A.au(new A.bb(t,B.b8,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aT()
r.f=new A.au(new A.bb(t,B.b8,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aT()
r.r=new A.au(new A.bb(t,B.b8,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aT()
r.w=new A.au(new A.bb(t,B.b8,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aT()
r.x=new A.au(new A.bb(t,B.b8,B.aP),s)
t=u?q:v.c
r.y=t==null?D.zN:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ix9(w.r,w.f)
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
v.a2()},
R4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$R4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hBI(p.y,p.w)
w=3
return A.b(A.lW(t.a.w,B.Ku),$async$R4)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b39(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$R4)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i7J(p.y,p.w)
t.a.bw()
case 5:w=7
return A.b(A.E_(78,800),$async$R4)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dBP(t,q))
case 1:return A.h(u,v)}})
return A.i($async$R4,v)},
cfm(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.d()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.ic(B.o.v(1000*Date.now()),w,D.zN,null,null,null,"","","","","",1,!1,0)
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
s=v.aHL(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a8(k,!1).N(s)},
abT(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dBO(r),s,null,!0,!0,x.y),$async$abT)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a8(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$abT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.I,i=new C.uu(j),h=l.a.e,g=A.U(h).k("X<1>"),f=A.B(new A.X(h,new C.dBY(l),g),g.k("M.E"))
h=j?B.el:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bKL,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hb(A.aM(!1,k,!0,new A.C(B.m4,A.V(B.eq,B.pO,k,k,k,17),k),B.cM,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbOf(),k,k,k,k,k,k,k),k,"Delete member",k,k,k),k,k,k,0,k,k))
u=j?B.kd:B.iL
t=A.bHD(l.as)
if(l.as==null)s=A.V(B.pZ,j?B.bv:B.bl,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.am(B.a0,k,B.ab,B.t,A.a([A.hp(u,t,s,k,42),A.ao(0,A.hp(B.bU,k,D.bYc,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcfj(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aF6(t,"Full name",B.mB,1,1,i,B.mS)
u=l.y
u===$&&A.d()
u=A.w(A.a([t,B.S,new C.bmD(i,u,new C.dBZ(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bE4],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dC_(),A.U(o).k("O<1,eP<n?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bE6],q)
B.d.u(q,new A.O(f,new C.dC1(),A.U(f).k("O<1,eP<n?>>")))
o=A.w(A.a([t,B.aj,new C.afp(i,r,"Who is their parent?",p,new C.dC2(l),k,o),B.aB,n,B.aj,new C.afp(i,m,"Who is their spouse / partner?",q,new C.dC3(l),k,o)],v),B.al,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.d()
q=C.aF6(q,"Birth date",D.arg,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aF6(m,"Birth place",B.a44,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aF6(n,"Date of death (if deceased)",D.atn,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aF6(p,"Occupation",Y.Rc,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.am(B.z,k,B.ab,B.t,w,k),B.aB,s,B.bx,new C.afq(i,"Identity",u,k),B.af,new C.afq(i,"Family links",o,k),B.af,new C.afq(i,"Life details",A.w(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aF6(r,"Notes",B.lg,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aF5(i,"Child order",l.cnW(l.at),new C.dC4(l),new C.dC5(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hqD(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dC6(l):k
B.d.u(r,A.a([B.S,new C.aF5(i,"Visible in tree",u,w,new C.dC7(l),k)],v))}r.push(B.S)
w=j?B.kd:B.iL
u=A.m(14)
t=A.K(j?B.eo:B.bP,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.jb(k,B.bU,k,B.ag,k,new C.dC8(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.m),k,k,k,k,B.anU,k,k,k))
r.push(B.bx)
w=j?B.aS:B.ax
j=j?B.eo:B.bP
r.push(A.A(A.a([A.E(A.dU(B.ov,new C.dC0(d),A.dh(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.b9(A.m(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bc,A.E(A.bH(D.fsP,k,l.gcfl(),A.bp(B.aW,k,k,0,B.c,k,B.cq,k,new A.b9(A.m(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.at)
return A.ek(B.fh,k,B.ag,h,new A.a4(420,k,A.cc(A.w(r,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.aoR,k,B.ao5,new A.b9(g,B.a1),k,k)},
cnW(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.afq.prototype={
B(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.kd:B.iL,s=A.m(16)
return A.w(A.a([new A.C(B.a2F,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.eo:B.bP,B.r,1),s,w,w,B.m),w,w,w,w,B.bg,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)}}
C.bmE.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.el:B.c,r=A.m(12),q=A.K((t?B.eo:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.M,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bC(u,B.eV,u,B.tF,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cF,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.am,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ae,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a8,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.afp.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.el:B.c,s=A.m(12),r=A.K((u?B.eo:B.bP).j(0.85),B.r,1),q=A.V(B.tQ,u?B.bv:B.bl,v,v,v,v),p=A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.el:B.c
return A.p(v,new A.EN(A.a6s(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cF,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.m),v,v,v,v,B.lc,v,v,v)}}
C.bmD.prototype={
B(d){var w=new C.dC9(this)
return A.A(A.a([w.$3(D.xh,"Male",B.QW),B.aa,w.$3(D.oY,"Female",B.QG),B.aa,w.$3(D.zN,"Other",B.oc)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aF5.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.kd:B.iL,r=A.m(14),q=A.K(t?B.eo:B.bP,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,13,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.w(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.h,0,B.p),1),new C.aLs(u,B.xw,w.f,v),B.b7,new C.aLs(u,B.ig,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.m),v,v,v,v,B.ep,v,v,v)}}
C.aLs.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.el:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bU
else t=(s.c.a?B.bv:B.bl).j(0.4)
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a4(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.afr.prototype={
bXC(d){switch(d.a){case 0:return B.bU
case 1:return B.bE
case 2:return B.cG}},
bXD(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b0I(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
B6(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.el:B.c
u=A.m(12)
t=A.K((w?B.eo:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.V(f,B.bU,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bl,p,p,p,p,p,p,p,p,9,p,p,B.C,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.w(A.a([q,B.at,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.ax,p,p,p,p,p,p,p,p,14,p,p,B.O,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.h,0,B.p),1))
return A.p(p,A.A(r,B.B,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.m),p,p,p,B.cB,B.zw,p,p,1/0)},
agE(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.kd:B.iL,s=A.m(16),r=A.K(v?B.eo:B.bP,B.r,1)
return A.w(A.a([new A.C(B.a2F,u,w),A.p(w,A.w(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.m),w,w,w,w,B.bS,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hT0(r,q),o=q.c,n=t.bXC(o),m=A.bHD(q.f),l=t.e.a,k=l?B.el:B.c,j=A.m(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.le?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.aa(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.hp(u,m,m==null?A.V(B.pZ,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eC,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.c(t.bXD(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,B.lD,s,s,s),s,s,s)
u=x.p
i=A.a([t.B6("Full name",i,B.mB)],u)
if(p>0)i.push(t.B6("Child order","#"+p,B.QM))
r=A.a([h,B.at,r,B.aN,l,B.S,v,B.bx,t.agE("Identity",i),B.af,t.agE("Life details",A.a([t.B6("Birth date",q.w,D.arg),t.B6("Birth place",q.x,B.a44),t.B6("Date of death",q.y,D.atn),t.B6("Occupation",q.z,Y.Rc)],u)),B.af,t.agE("Family links",A.a([t.B6("1. Parent",t.b0I(q.d),B.Ie),t.B6("2. Spouse",t.b0I(q.e),B.Iw)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.agE("Notes",A.a([t.B6("Notes",q,B.lg)],u))],u))
r.push(B.bx)
r.push(A.bH(B.M0,s,new C.dCj(d),A.bp(B.aW,s,s,s,s,s,B.cq,s,new A.b9(A.m(14),B.a1),s,s,s)))
return A.ez(s,k,new A.cP(B.ml,A.cc(A.w(r,B.al,s,B.e,B.P,0,B.p),B.t,s,B.y,s,s,B.xb,s,s,B.ah),s),s,s,s,B.HR,s,B.da,s,new A.b9(j,B.a1),s)}}
C.GW.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.tI,A.hb(A.aE(!1,B.a3,!0,A.m(8),A.aM(!1,A.m(8),!0,new A.a4(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u,u),u)}}
C.asr.prototype={
f4(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("O<1,a9<n,@>>")
w=A.B(new A.O(w,new C.ci0(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iX(w,new C.ci1(),t,x.fO))
return s}}
C.ass.prototype={
R(){return new C.aGG(A.a([],x.bF))},
gd6(){return this.c}}
C.aGG.prototype={
Z(){this.a3()
this.KN()},
KN(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$KN=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ci4(t.a.c),$async$KN)
case 3:r=e
w=4
return A.b(C.Bz(t.a.c),$async$KN)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rB(q,new C.e8i(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e8j(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$KN,v)},
zq(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b0(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
LD(d,e){return this.cO7(d,e)},
cO7(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$LD=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e8n(q,e))
t=3
w=6
return A.b(d.$0(),$async$LD)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e8o(q))
$.eX.mL()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LD,v)},
Zb(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pT(r,s.c,s.e),$async$Zb)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.LD(new C.e8f(t),"Preparing download\u2026"),$async$Zb)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zb,v)},
Zf(d){return this.bVs(d)},
bVs(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zf=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pT(r,s.c,s.e),$async$Zf)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.LD(new C.e8g(t,d),"Preparing file\u2026"),$async$Zf)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zf,v)},
aiH(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aiH=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.y2.cq().Nl(B.U1,B.vq,!0),$async$aiH)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
o=A.k_(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ac(m)
$.an.$1("[family tree sync pick] file_picker: "+A.v(p))
w=6
break
case 3:w=2
break
case 6:u=A.HP()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiH,v)},
ZT(d){return this.c5_(d)},
c5_(d){var w=0,v=A.j(x.H),u=this
var $async$ZT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.LD(new C.e8h(u,d),"Restoring family trees\u2026"),$async$ZT)
case 2:return A.h(null,v)}})
return A.i($async$ZT,v)},
ZS(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aiH(),$async$ZS)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.ZT(s),$async$ZS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZS,v)},
a4a(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4a=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pT(r,s.c,s.e),$async$a4a)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.LD(new C.e8m(t),"Creating QR code\u2026"),$async$a4a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a4a,v)},
a3K(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3K=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DY()){t.zq("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).ca(A.e7(new C.e8k(),!0,null,x.N)),$async$a3K)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.ZT(r),$async$a3K)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a3K,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.I,n=o?B.Cy:B.hX,m=o?D.amn:B.aS,l=o?B.aM:B.bP,k=o?B.aS:B.ax,j=new C.dlC(n,m,l,k,o?B.bQ:B.bl)
l=A.aI(p,p,p,p,A.V(B.eD,k,p,p,p,20),p,p,p,new C.e8q(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eS(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dla(!0,B.jI,B.aH,B.aH,q.r?p:q.gcEn(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcAp()
t.push(A.E(C.dla(!s,B.jJ,B.b_,B.bj,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dla(!1,B.hP,B.aW,B.bU,q.r?p:q.gbVl(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dla(!1,Q.Ai,B.as,B.aQ,q.r?p:q.gc4X(),j,s,"Upload backup file"),1))
l=A.a([new C.biR(v,l,p),B.lp,new C.aeF(j,"QR restore",p),B.S,t,B.df,new C.aeF(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lp,new C.aeF(j,"One tree",p),B.S],u)
B.d.u(v,J.b8(q.d,new C.e8r(q,j),x.l))
B.d.u(l,v)}l=A.a([A.co(l,p,p,At.a2x,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.K(B.aW.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.H,B.v.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bo(!0,A.p(p,A.A(A.a([Au.aWz,B.bc,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.m),p,p,p,p,A2.Dg,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.am(B.a0,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.dlC.prototype={}
C.biR.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.aa(0,B.H,B.aW.j(0.32),B.kx,28)],x.V)
t=A.ao(p,A.V(B.vJ,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.a0,p,B.ab,B.t,A.a([t,new A.C(B.ae,A.A(A.a([A.p(p,D.c6y,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pp,A.E(A.w(A.a([D.h18,B.N,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.h,0,B.p),1)],q),B.B,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.ceO,B.m),p,p,p,p,p,p,p,p)}}
C.aeF.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.biP.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.H,B.aH.j(0.1),B.cN,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aE(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eL(A.d2(new A.C(E.a28,A.w(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.m),q,q,q,q,B.tJ,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bs,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cF,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.h,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.biU.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aW.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eL(new A.C(B.eZ,A.A(A.a([A.p(v,D.c5I,B.f,v,v,new A.o(q,v,A.K(B.aW.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tJ,v,v,v),B.bc,A.E(A.w(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.h,0,B.p),1),A.V(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a1o.prototype={
R(){return new C.aGF()},
gd6(){return this.c}}
C.aGF.prototype={
Z(){this.a3()
this.abq()},
abq(){var w=0,v=A.j(x.H),u=this,t
var $async$abq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(R.b5Q(u.a.c,B.F6),$async$abq)
case 2:t=e
if(u.c!=null)u.l(new C.e8a(u,t))
return A.h(null,v)}})
return A.i($async$abq,v)},
ak7(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ak7=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e8b(q))
t=4
p=R.hDw(q.a.d,B.F6)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(R.auL(n.e,m,l,B.F6,p,n.f),$async$ak7)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e8c(q))
q.c.K(x.q).f.T(D.fCr)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ac(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c(B.a.eq(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.e8d(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ak7,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=p?B.nW:B.nh,n=p?B.iY:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eS(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hhM,q,q,q,1,q,!0)
w=A.m(24)
v=A.K(B.aW.j(0.35),B.r,1)
u=A.qt(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.w(A.a([B.N,u,B.bx,t,B.N,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bb,B.h,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.m),q,q,q,q,B.ae,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ac:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcA6()
if(u)u=B.Lu
else u=A.V(r.e===!0?B.h1:Ax.arf,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a4(1/0,q,A.em(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ch,q,q,q),t,A.dh(q,q,q,q,q,q,q,q,q,B.aW,q,B.ht,q,q,q,new A.ax(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.hz,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a4(1/0,q,A.bH(Af.BH,q,new C.e8e(d),A.bp(B.aW,q,q,q,q,B.ht,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.C(B.ae,A.w(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a1p.prototype={
R(){return new C.bo8(A.A9(B.zl,B.oC,B.vQ))}}
C.bo8.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c6(A.eS(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h9q,w,w,w,1,w,!0),B.v,A.A8(this.d,B.c_,new C.e8s(this,d)),w,!1,!1,w,w)}}
C.b1F.prototype={
B(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Tu,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.mh.prototype={}
C.a8j.prototype={
R(){return new C.bnN(null,null)}}
C.bnN.prototype={
Z(){var w=this,v=null
w.a3()
w.d=A.br(v,B.ty,v,1,v,w)
w.e=A.br(v,B.o_,v,1,v,w)
w.a.toString
w.d.cT(0)
w.e.cT(0)},
by(d){var w,v,u=this
u.bJ(d)
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
this.bBh()},
B(d){var w,v,u=this,t=B.d.dr(D.a85,new C.dUd(u),new C.dUe())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cG6(A.c9(new A.hB(A.a([w,v],x.dS)),new C.dUf(u,t),null),!0)}}
C.bnM.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b5B(d,e)
break
case"house":p.mq(d,e,D.dox)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdl()
$.T()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mw(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BY(d,e,12)
p.z0(d,e,B.lz,5,14)
break
case"grocery":p.coG(d,e)
break
case"calculator":p.con(d,e)
break
case"lumber":p.coO(d,e)
break
case"kitchen":p.coJ(d,e)
break
case"landscape":p.mq(d,e,D.dp7)
s=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.ck(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.ck(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bA())
w=A.L()
w.r=B.et.j(0.85).gp(0)
d.af(s,w)
p.BY(d,e,8)
p.z0(d,e,B.iM,4,18)
break
case"plumbing":p.coY(d,e)
break
case"electrical":p.mq(d,e,D.dBA)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.T()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a5(0,0,0+e.a,0+e.b),u)
p.mw(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mw(d,e,B.oQ.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BY(d,e,10)
break
case"store":p.cp7(d,e)
break
case"paint_remodel":p.coT(d,e)
break
case"roofing":p.cp_(d,e)
break
case"warehouse":p.cpe(d,e)
break
case"vehicles":p.cpc(d,e)
break
case"farm":p.coA(d,e)
break
case"restaurant":p.coZ(d,e)
break
case"tools":p.cpa(d,e)
break
case"wallet":p.cpd(d,e)
break
case"concrete":p.cot(d,e)
break
case"blueprint":p.col(d,e)
break
default:p.b5B(d,e)}},
mq(d,e,f){var w,v=new A.a5(0,0,0+e.a,0+e.b)
$.T()
w=A.L()
w.san(new A.a6(B.aw,B.aD,B.w,f,null,null).az(0,v))
d.aE(v,w)},
mw(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdl()/2-h
$.T()
w=A.L()
w.b=B.ad
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bY(t,s),u,u+0.1439896632895322-u,!1,w)}},
z0(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdl()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BY(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.T()
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b5B(d,e){var w,v=this
v.mq(d,e,D.dzL)
w=v.c
v.mw(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mw(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bTi(d,e,B.i_,w)
v.z0(d,e,B.c.j(0.7),6,8)},
bTi(d,e,f,g){var w,v,u,t,s,r
$.T()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a5(16,r,t,r+3),w)}},
coG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mq(d,e,D.cAP)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ao(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=D.dmw[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mw(d,e,B.c.j(0.35),w,16)
l.z0(d,e,B.iM,5,12)},
con(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mq(d,e,D.cAX)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdl()
$.T()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.r(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h_(h,B.cL,h,h,h,h,B.a8,B.cd,h,B.e4,B.ce)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dr1[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.eJ(r,h,h,B.cZ,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cAZ[o]
l=B.l3.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.eJ(m,h,h,B.cZ,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}i.mw(d,e,B.c.j(0.35),w*1.5,14)
i.mw(d,e,B.eI.j(0.55),-v*3.141592653589793*2,8)
i.mw(d,e,B.oK.j(0.4),r*2.8,22)
i.z0(d,e,B.pJ,8,10)
i.BY(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.T()
v=new A.ar(B.U,B.R,B.X,B.Y,B.W)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
coO(d,e){var w,v,u,t,s,r,q,p,o=this
o.mq(d,e,W.aD9)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a5(20,r,u,r+10),B.hs)
$.T()
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=A.ap(B.ha,B.nL,(s+1)/2).gp(0)
d.aq(q,p)}o.mw(d,e,B.ha.j(0.35),w,15)
o.BY(d,e,8)},
coJ(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mq(d,e,D.dn4)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.T()
m=new A.ar(B.U,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mw(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.z0(d,e,B.qK,4,14)},
coY(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mq(d,e,D.d9T)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.T()
o=new A.ar(B.U,B.R,B.X,B.Y,B.W)
o.b=B.ad
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.z0(d,e,B.pN,6,12)
n.mw(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cp7(d,e){var w,v,u,t,s,r,q,p=this
p.mq(d,e,D.cOR)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a5(r,14,r+u,22),B.jL)
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.fy,B.bM,(s+1)/2).gp(0)
d.aq(r,q)}p.mw(d,e,B.c.j(0.3),w,16)
p.BY(d,e,8)
p.z0(d,e,B.wQ,5,13)},
coT(d,e){var w,v,u,t,s,r,q
this.mq(d,e,D.dgX)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a5(r,q,r+8,q+(18+s*22)),B.iD)
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=[B.iJ,B.dH,B.bM,B.eG][t].j(0.85).gp(0)
d.aq(q,r)}this.mw(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cp_(d,e){var w,v,u,t,s,r,q
this.mq(d,e,D.ddZ)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.z0(d,e,B.cE,7,11)},
cpe(d,e){var w,v,u,t,s,r,q,p
this.mq(d,e,D.cRG)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a5(q,p,q+(t-s*8),p+16),B.hs)
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.cE,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mw(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cpc(d,e){var w,v,u,t,s,r,q
this.mq(d,e,D.dGb)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bx(new A.a5(s,r,s+28,r+8),B.hs)
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BY(d,e,6)},
coA(d,e){var w,v,u,t,s,r,q,p
this.mq(d,e,D.dls)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.T()
s=A.L()
s.r=B.oQ.j(0.75).gp(0)
d.O(new A.r(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.hY.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.mw(d,e,B.oQ.j(0.35),w,14)},
coZ(d,e){var w,v,u,t,s,r,q=this
q.mq(d,e,D.dok)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bZ(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.T()
r=new A.ar(B.U,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.z0(d,e,B.qK,5,16)
q.BY(d,e,7)},
cpa(d,e){var w,v,u,t,s,r,q,p,o=this
o.mq(d,e,D.dDo)
w=o.c
v=w*3.141592653589793
o.mw(d,e,B.nL.j(0.55),v*3,10)
o.mw(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.T()
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.nL.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cpd(d,e){var w,v,u,t,s,r,q,p,o=this
o.mq(d,e,D.dGX)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a5(q,p,q+36,p+22),B.jL)
$.T()
q=new A.ar(B.U,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.iM,B.oQ,r).gp(0)
d.aq(p,q)}o.BY(d,e,9)
o.mw(d,e,B.c.j(0.4),w*2.2,12)},
cot(d,e){var w,v,u,t,s,r,q,p
this.mq(d,e,D.due)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bY(new A.r(v,u),34)
$.T()
s=A.L()
s.b=B.ad
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.U,B.R,B.X,B.Y,B.W)
p.r=B.bP.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
col(d,e){var w,v,u,t,s,r,q
this.mq(d,e,D.dpt)
$.T()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.r(t,0),new A.r(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.r(0,s),new A.r(v,s),w)
r=this.c
q=u*B.i.F(r*0.85,1)
$.T()
u=A.L()
u.r=B.dH.j(0.45).gp(0)
d.aE(new A.a5(0,q,0+v,q+6),u)
this.mw(d,e,B.lz.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.avw.prototype={
a1j(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1j=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aTI(),$async$a1j)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aaE(s),$async$a1j)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a1j,v)},
aiI(d){return this.crA(d)},
crA(d){var w=0,v=A.j(x.H),u=this,t
var $async$aiI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iFR(d),$async$aiI)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aiI,v)},
B(d){var w,v,u=null,t=A.Q(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.kd:B.iL
w=x.p
v=A.a([C.aU5(!0,B.rZ,1/0,B.ri,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.o(u,u,u,u,u,new A.a6(B.aU,B.b1,B.w,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bm,new A.bL(B.aU,u,u,new A.C(B.tA,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aE6,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.de(D.bZY,u,D.fYc,new C.crQ(this,d),A.bp(B.aW,u,u,u,B.c,u,B.jD,u,u,u,u,B.cp)),1),B.aa,A.E(A.em(D.c7R,u,D.hcC,this.gcia(),A.dh(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jD,u,u,D.b8t,u,u,u,B.cp)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fN(1.7777777777777777,A.aE(!1,B.a3,!0,B.rZ,new A.am(B.a0,u,B.b4,B.t,v,u),B.ap,t,0,u,u,u,u,u,B.ai),u)}}
C.aOT.prototype={
b0(){this.b8()
this.b5()
this.dS()},
t(){var w=this,v=w.bc$
if(v!=null)v.a8(0,w.gdN())
w.bc$=null
w.a2()}}
C.aX3.prototype={}
C.aX2.prototype={}
C.aV5.prototype={}
C.a01.prototype={
R(){return new C.aBN()}}
C.aBN.prototype={
Z(){var w,v,u=this
u.a3()
u.a.toString
w=new A.bb("",B.b8,B.aP)
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a2()},
Lq(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.T(D.fCX)
return}t=u.c
t.toString
v=u.e
A.a8(t,!1).N(new C.aX3(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.I,l=m?B.el:B.c,k=A.m(20),j=A.p(n,D.c7w,B.f,n,n,new A.o(B.aW.j(0.15),n,n,A.m(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bs,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.bc,i,A.aI(n,n,n,n,A.V(B.cC,m?B.bv:B.bl,n,n,n,n),n,n,n,new C.dcG(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cF,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hDM(new C.dcH(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.kd:B.iL
r=A.m(12)
q=A.m(12)
p=m?B.eo:B.bP
t=A.aN(n,B.M,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bC(n,new A.b6(4,r,B.dy),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.am,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dcI(o),n,!1,n,n,!1,n,!0,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a8,n,A0.LC,n,n,n,n)
u=m?B.aS:B.ax
m=m?B.eo:B.bP
return A.ez(n,l,new A.cP(B.ml,A.cc(A.w(A.a([j,B.aN,i,B.at,w,B.N,v,B.aN,t,B.bx,A.A(A.a([A.E(A.dU(B.dx,new C.dcJ(d),A.dh(n,n,n,n,n,n,n,n,n,u,n,n,B.cq,n,new A.b9(A.m(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bH(D.hcT,n,o.ga4w(),A.bp(B.aW,n,n,n,B.c,n,B.cq,n,new A.b9(A.m(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.B,n,B.e,B.P,0,B.p),B.t,n,B.y,n,n,B.Dj,n,n,B.ah),n),n,n,n,B.Dk,n,B.da,n,new A.b9(k,B.a1),n)}}
C.a00.prototype={
R(){return new C.aBM()}}
C.aBM.prototype={
Z(){this.a3()
var w=$.ay()
this.d!==$&&A.aT()
this.d=new A.au(B.ay,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a2()},
Lq(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.T(D.fAy)
return}v=this.c
v.toString
A.a8(v,!1).N(new C.aX2(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.I,o=p?B.el:B.c,n=A.m(20),m=A.p(q,D.c3O,B.f,q,q,new A.o(B.bU.j(0.15),q,q,A.m(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bs,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.bc,l,A.aI(q,q,q,q,A.V(B.cC,p?B.bv:B.bl,q,q,q,q),q,q,q,new C.dcC(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.m(12)
v=A.K(B.aW.j(0.25),B.r,1)
u=A.V(B.ar1,B.aW.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.m),q,q,q,q,B.bD,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.kd:B.iL
t=A.m(12)
s=A.m(12)
r=p?B.eo:B.bP
v=A.aN(q,B.M,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bC(q,new A.b6(4,t,B.dy),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.am,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.dcD(this),q,!1,q,q,!1,q,!0,q,B.ae,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a8,q,B.lq,q,q,q,q)
w=p?B.aS:B.ax
p=p?B.eo:B.bP
return A.ez(q,o,new A.cP(B.ml,A.cc(A.w(A.a([m,B.aN,l,B.aB,v,B.bx,A.A(A.a([A.E(A.dU(B.dx,new C.dcE(d),A.dh(q,q,q,q,q,q,q,q,q,w,q,q,B.cq,q,new A.b9(A.m(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bH(D.hk5,q,this.ga4w(),A.bp(B.bU,q,q,q,B.c,q,B.cq,q,new A.b9(A.m(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.B,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.Dj,q,q,B.ah),q),q,q,q,B.Dk,q,B.da,q,new A.b9(n,B.a1),q)}}
C.a_u.prototype={
R(){return new C.aAr()}}
C.aAr.prototype={
Z(){var w,v=this
v.a3()
w=$.ay()
v.d!==$&&A.aT()
v.d=new A.au(B.ay,w)
v.e!==$&&A.aT()
v.e=new A.au(new A.bb("1",B.b8,B.aP),w)
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
v.a2()},
gKI(){var w,v=this.e
v===$&&A.d()
w=A.cA(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
galS(){var w=this.f
w===$&&A.d()
w=A.cA(B.a.i(w.a.a))
return w==null?0:w},
gb8r(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aSq(d){var w,v=B.i.D(this.gKI()+d,0.25,999999),u=B.i.fJ(v),t=this.e
t===$&&A.d()
if(v===u)u=B.o.v(B.i.M(v))
else{u=B.i.a5(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aK(u,w,"")}t.sb1(0,u)
this.l(new C.cKa())},
aBl(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.kd:B.iL,s=A.m(14),r=A.m(14)
u=u?B.eo:B.bP
return A.bC(w,new A.b6(4,s,B.dy),w,B.bD,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.ag3),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cib(d,e,f){return this.aBl(d,e,f,null)},
Lq(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.galS()<=0){s.c.K(x.q).f.T(D.fER)
return}r=s.c
r.toString
v=s.gKI()
u=s.galS()
t=s.gb8r()
A.a8(r,!1).N(new C.aV5(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uu(n),l=n?B.el:B.c,k=A.m(24),j=x.O,i=A.a([B.aW.j(0.22),B.bU.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bXR,B.f,o,o,new A.o(o,o,A.K(B.aW.j(0.35),B.r,1),h,o,new A.a6(B.a5,B.a9,B.w,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bs,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cF,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.bc,h,A.aI(o,o,o,o,A.V(B.cC,n?B.bv:B.bl,o,o,o,o),o,o,o,new C.cKg(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.M,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aBl(m,"Item name (optional)","Lumber, paint, labor\u2026",B.QU),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a8,o,A0.LC,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.C,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.kd:B.iL
t=A.m(14)
s=A.K(n?B.eo:B.bP,B.r,1)
r=A.aI(o,o,o,o,A.V(B.xw,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cKh(p),o,o,o,o,o,B.cp)
q=p.e
q===$&&A.d()
q=A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c9p,B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.ei,o,o,o,1,o,o,!1,"\u2022",o,new C.cKi(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a4(52,o,q,o),A.aI(o,o,o,o,A.V(B.ig,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cKj(p),o,o,o,o,o,B.cp)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aBl(m,"Amount","0.00",B.hB),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.ei,o,o,o,1,o,o,!1,"\u2022",o,new C.cKk(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a8,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.h,0,o,o)
t=x.gv
u=A.B(new A.O(D.dhw,new C.cKl(p,m),t),t.k("aj.E"))
i=A.a([i,B.bx,v,B.aB,h,B.N,s,B.af,A.c_(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cib(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cKm(p),o,o,o,!1,o,o,!1,o,!0,o,B.ae,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a8,o,B.lq,o,o,o,o)],w))}i.push(B.aN)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.K(B.aW.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKI()===B.i.fJ(p.gKI())?B.i.M(p.gKI()):p.gKI()
s=p.gb8r()
r=A.BC(p.galS())
i.push(A.p(o,A.A(A.a([A.E(A.w(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1),C.bIu(p.gKI()*p.galS(),B.b5,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a6(B.a5,B.a9,B.w,j,o,o),B.m),o,o,o,o,B.jF,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.eo:B.bP
h=A.dh(o,o,o,o,o,o,o,o,o,o,o,o,B.cq,o,new A.b9(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cKn(d),h),1),B.ar,A.E(A.de(D.auy,o,D.hfW,p.ga4w(),A.bp(B.aW,o,o,0,B.c,o,B.cq,o,new A.b9(A.m(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.ez(o,l,new A.cP(B.N2,A.cc(A.w(i,B.al,o,B.e,B.P,0,B.p),B.t,o,B.y,o,o,Aj.tG,o,o,B.ah),o),o,o,o,B.Ps,o,B.da,o,new A.b9(k,B.a1),o)}}
C.a3d.prototype={
R(){return new C.bAI()}}
C.bAI.prototype={
Z(){var w,v,u=this
u.a3()
w=u.a.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bb(w,B.b8,B.aP),v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a2()},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=r?B.el:B.c,p=A.m(20),o=t.a.c
o=A.c(o,s,s,s,s,s,s,A.l(s,s,r?B.aS:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.d()
v=A.l(s,s,r?B.aS:B.ax,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.kd:B.iL
v=A.aN(s,B.M,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bC(s,new A.b6(4,A.m(12),B.dy),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fvP(t,d),s,!1,s,s,!1,s,!0,s,B.ae,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a8,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dx,new C.fvQ(d),s),1)
r=A.bp(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.ez(s,q,new A.C(B.Dj,A.w(A.a([o,B.aB,v,B.aN,A.A(A.a([u,B.ar,A.E(A.bH(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fvR(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,s,B.da,s,new A.b9(p,B.a1),s)}}
C.adG.prototype={
a9(){return"WorksheetFrameStyle."+this.b}}
C.GL.prototype={
R(){return new C.bAG(null,null)}}
C.bAG.prototype={
Z(){var w,v=this
v.a3()
w=A.br(null,D.bEE,null,1,null,v)
w.cT(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bDC()},
gbFe(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bU,B.b5],x.O)
case 2:return A.a([B.bw,B.aW,B.b5],x.O)
case 3:return A.a([B.aH,B.ci,B.jT],x.O)
case 4:return A.a([B.fK,B.bU,B.fz],x.O)
case 0:return A.a([B.aW,B.bU,B.b5],x.O)}},
B(d){var w=A.Q(d),v=this.d
v===$&&A.d()
return new A.e9(A.c9(v,new C.fvN(this,new C.uu(w.ax.a===B.I)),null),null)}}
C.aAk.prototype={
R(){return new C.bAH(null,null)}}
C.bAH.prototype={
Z(){var w,v=this
v.a3()
w=A.br(null,B.o1,null,1,null,v)
w.cT(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bDD()},
B(d){var w=this.d
w===$&&A.d()
return A.c9(w,new C.fvO(this),null)}}
C.bAF.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a5(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aH($.T().r,B.ak,null,null,A.a([],x.v))
u.E(new A.jr(v))
w=A.L()
w.b=B.ad
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.ad
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.zR(u)
t=A.a([],x.U)
w=new A.v8(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jY(y.B));--r
q=new A.C0(w,r)
w.jQ()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aW2(d,q,r,o,0,0.2,4.2,0.92)
p.aW2(d,q,r,s,0.52,0.11,3.2,0.58)}},
aW2(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.i0D(e.a.a,e,t,t+f*i,!0),r=A.aiP(s.gld().a.getBounds())
$.T()
w=A.L()
w.b=B.ad
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a6(B.a5,B.a9,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Js,null).az(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aR0.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aR1.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.uu.prototype={}
C.avv.prototype={
R(){return new C.aIf()},
ge9(){return this.c}}
C.aIf.prototype={
Z(){var w=this
w.a3()
w.d=w.a.d
w.ajy()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.MB(w,v)
this.a2()},
ajy(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ajy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bGS(t.c,t.d.a),$async$ajy)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f3a(u,s))
return A.h(null,v)}})
return A.i($async$ajy,v)},
RA(){var w=0,v=A.j(x.H),u=this,t,s
var $async$RA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f31(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.MB(t,s),$async$RA)
case 2:if(u.c!=null)u.l(new C.f32(u))
return A.h(null,v)}})
return A.i($async$RA,v)},
S8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$S8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.f38(t,new C.uu(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$S8)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aaE(q),$async$S8)
case 6:case 5:t.l(new C.f39(t,r))
w=7
return A.b(t.RA(),$async$S8)
case 7:case 1:return A.h(u,v)}})
return A.i($async$S8,v)},
Xh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iFB(r),$async$Xh)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f2X(t,new C.rG(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.RA(),$async$Xh)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xh,v)},
cnu(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hSX(t,new C.f30(u),w,v)},
adg(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b8e,w,w,B.m),w,22,w,w,w,w,w,22)},
acg(d){return this.bRx(d)},
bRx(d){var w=0,v=A.j(x.H),u=this
var $async$acg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f3_(u,d))
w=2
return A.b(u.RA(),$async$acg)
case 2:return A.h(null,v)}})
return A.i($async$acg,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.I,e=f?B.c7:B.hX,d=A.m(8),a0=A.V(Z.a3M,f?B.bv:B.bl,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.C(B.HX,A.A(A.a([a0,B.b7,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f3b(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.am(B.a0,g,B.b4,B.t,A.a([A.bv(A.m(22),C.aU5(!0,A.m(22),1/0,B.ri,g,d,1/0),B.ap),A.ao(10,A.de(D.c1H,g,D.hik,h.gb6m(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.he,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.aa(0,B.H,B.aW.j(f?0.5:0.38),B.eP,22),new A.aa(-4,B.H,B.bU.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.am(B.a0,g,B.b4,B.t,A.a([C.aU5(!0,A.m(16),1/0,B.Qi,g,r.c,1/0),new A.bP(new A.o(g,g,g,g,g,new A.a6(B.aU,B.b1,B.w,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bm,g,g),A.ao(g,h.adg(!0),g,g,8,g,8,g),A.ao(g,A.cGQ(h.adg(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cGQ(h.adg(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cGQ(h.adg(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.de(D.bYu,g,D.hbA,h.gb6m(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.he,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.cb6,B.m),g,g,g,g,B.m4,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bjb,B.oI,B.hx],u):A.a([B.b5,B.aW,B.bU],u)
t=x.V
s=A.a([new A.aa(0,B.H,B.aW.j(f?0.45:0.35),B.eP,24)],t)
r=A.m(22)
p=A.ao(g,A.V(B.jG,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.m),g,g,g,g,B.ho,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aB,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.aj,C.bIu(h.d.gxW(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.N,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cF,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.B,g,B.e,B.h,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.K(B.hm.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.H,B.aH.j(0.28),B.cN,14)],t)
j=B.aH.j(0.22)
i=A.m(10)
u=A.p(g,A.bv(r,new A.am(B.a0,g,B.ab,B.t,A.a([p,new A.C(D.bJy,A.A(A.a([o,B.ar,A.aE(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eL(new A.C(B.x8,A.w(A.a([A.p(g,D.au7,B.f,g,g,new A.o(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.cu,g,g,g),B.fR,D.h07],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcnt(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a6(B.aw,B.aD,B.w,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fN(1.7777777777777777,d,g),B.aN,w,B.N,u,B.bx,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,16,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aX,A.de(A9.a5z,g,D.fYT,h.gbFJ(),A.bp(B.aW,g,g,g,B.c,g,B.hp,g,new A.b9(A.m(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.el:B.c
v=A.m(14)
u=A.K(f?B.eo:B.bP,B.r,1)
t=A.V(B.a47,f?B.bv:B.bl,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.w(A.a([t,B.S,s,B.aj,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.m),g,g,g,g,B.pW,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f3c(h,new C.uu(f)),A.U(w).k("O<1,x>")))
if(h.e)d.push(new A.C(B.zq,A.at(A.nk(g,f?B.bv:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bo(!0,A.w(A.a([new A.C(A_.Da,a0,g),A.E(A.cc(A.w(d,B.B,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,E.zC,g,g,B.ah),1)],a1),B.B,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bJu(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.el:B.c,p=A.m(16),o=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.cN,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.baY,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.iw:B.h3,B.b5,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bK
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd3U()
v=A.BC(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.B,u,B.bb,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bU.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bIu(d.c*d.d,B.b5,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a6(B.a5,B.a9,B.w,k,u,u),B.m),u,u,u,u,B.he,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.Fb(A.A(A.a([m,A.E(new A.C(B.anN,A.A(A.a([l,B.bc,t,B.aa,k,A.aI(u,u,u,u,A.V(B.cC,(r?B.bv:B.bl).j(0.75),u,u,u,20),u,u,u,new C.f2Y(this,d),u,u,u,u,u,B.cp)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.al,u,B.e,B.h,0,u,u),u),B.ap),B.f,u,D.b9N,new A.o(q,u,u,p,o,u,B.m),u,u,u,B.d2,u,u,u,u)}}
C.afM.prototype={
Fo(d){return this.bSV(d)},
bSV(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Fo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pT(d,o,!1),$async$Fo)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
w=4
return A.b(A.bO(B.D2,null,x.H),$async$Fo)
case 4:s=t.d
w=5
return A.b(C.h6b(!0,o,s),$async$Fo)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.HF(r,"ngmy_project_"+A.aK(s.b,q,"_"),!1),$async$Fo)
case 6:p=f
w=7
return A.b(M.pS(o,!1),$async$Fo)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Fo,v)},
a1l(d){return this.cEo(d)},
cEo(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a1l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pT(d,s,!1),$async$a1l)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
A.hk(d,new C.avp(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pS(s,!1),$async$a1l)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1l,v)},
RB(d){return this.cAj(d)},
cAj(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(A.hk(d,D.aNX,!0,"NgmyWorksheetProjectScan",x.N),$async$RB)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bIv(s),$async$RB)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.T(D.fDY)
w=1
break}q=C.htf(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dS(p,x.H),$async$RB)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$RB,v)},
a1m(d){return this.cMW(d)},
cMW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1m=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(C.bHZ(),$async$a1m)
case 3:s=f
if(s==null){w=1
break}r=C.htf(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dS(q,x.H),$async$a1m)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1m,v)},
B(d){var w=this,v=null,u=A.Q(d).ax.a===B.I,t=new C.uu(u),s=w.d.d.length,r=u?B.el:B.c,q=A.m(28),p=A.a([new A.aa(0,B.H,B.v.j(u?0.35:0.08),B.kx,36)],x.V),o=x.p
return A.bo(!0,new A.C(B.x7,A.p(v,A.w(A.a([w.cCY(d,t,s),new A.C(D.bIX,A.w(A.a([w.b4j(t,"QR restore"),B.S,A.A(A.a([w.b4i(t,!0,B.jI,B.aH,B.aH,new C.f3e(w,d),"Show to scan","QR code"),B.ar,w.aBm(t,B.jJ,B.b_,B.bj,new C.f3f(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.df,w.b4j(t,"Backup files"),B.S,A.A(A.a([w.aBm(t,B.hP,B.aW,B.bU,new C.f3g(w,d),"Full copy","Backup file"),B.ar,w.aBm(t,Q.Ai,B.as,B.aQ,new C.f3h(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.B,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cCY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fo,B.cX,B.h7],k):A.a([B.b5,B.aW,B.bU],k)
w=A.ao(l,A.V(B.vJ,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.m),l,4,l,B.kM,l,l,l,36),l,l,l)
u=A.m(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.H,B.v.j(0.2),B.cN,12)],x.V)
r=this.d
s=A.p(l,C.aU5(!0,A.m(13),64,D.bTB,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.C,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.ado,l,l,l)
r=C.bIu(r.gxW(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.a0,l,B.ab,B.t,A.a([w,new A.C(D.bJj,A.w(A.a([v,A.A(A.a([s,B.er,A.E(A.w(A.a([u,B.at,t,B.N,A.A(A.a([r,B.aa,A.p(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.m),l,l,l,l,B.f5,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.B,l,B.e,B.h,0,B.p),1),A.aI(l,l,l,l,A.V(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.f3d(d),l,l,l,A.np(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aWn,l,l,l,l),l,l)],m),B.B,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a6(B.aw,B.aD,B.w,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b4j(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b4i(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.amn:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eo:B.bP
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.H,B.aH.j(0.12),B.cN,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.m),r,r,r,r,B.tJ,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aE(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eL(new A.C(E.a28,A.w(A.a([t,B.af,u,B.bs,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cF,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aBm(d,e,f,g,h,i,j){return this.b4i(d,!1,e,f,g,h,i,j)}}
C.avp.prototype={
R(){return new C.bpx()}}
C.bpx.prototype={
Z(){this.a3()
this.ahr()},
ahr(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ahr=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bIw(p.c,p.d),$async$ahr)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f2S(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f2T(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahr,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.I,f=g?B.Cy:B.hX,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.V(B.eD,g?B.ac:B.an,h,h,h,18),h,h,h,new C.f2U(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.uu],u),B.l,h,B.e,B.h,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.fo,B.cX,B.h7],s):A.a([B.b5,B.aW,B.bU],s)
r=x.V
q=A.a([new A.aa(0,B.H,B.aW.j(g?0.4:0.3),B.eP,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dw,B.K,h,h)
p=C.bIu(p.gxW(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.w(A.a([o,B.aj,A.A(A.a([p,B.aa,A.p(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.m),h,h,h,h,B.f5,h,h,h)],u),B.l,h,B.bb,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a6(B.aw,B.aD,B.w,s,h,h),B.m),h,h,h,h,E.a2w,h,h,1/0)
t=g?D.buT:B.c
q=A.m(24)
p=A.K(w?B.aH.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.H,B.v.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.WU,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eHf)
else{m=A.m(20)
l=A.K(B.bn,B.r,1)
o.push(A.p(h,A.qt(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h))}}o.push(B.aN)
n=w?B.aH:B.aW
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.K((w?B.aH:B.aW).j(0.35),B.r,1)
k=w?B.Qz:B.Rb
k=A.V(k,w?B.aH:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ac:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.m),h,h,h,h,B.hp,h,h,h))
return A.c6(h,f,A.bo(!0,A.w(A.a([new A.C(Ag.PF,e,h),A.E(A.cc(A.w(A.a([s,B.aN,A.p(h,A.w(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.m),h,h,h,h,B.vn,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,E.ap2,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.avu.prototype={
R(){return new C.aIe(A.A9(B.OW,B.oC,B.vQ))}}
C.aIe.prototype={
t(){this.d.t()
this.a2()},
aQm(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j2(w,d)},
cj3(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iDB(t)
if(s!=null){this.aQm(s)
return}r=C.hIn(t)
if(r!=null)q=A.d_(r,p,0)
else q=!1
if(q){this.aQm(B.a.i(B.a.aV(r,B.a.c8(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eS(A.a([A.aI(t,t,t,t,A.V(u.f?B.ro:Ab.QI,t,t,t,t,t),t,t,t,new C.f2W(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Cy,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.hbs,t,t,t,1,t,!0),q=A.A8(u.d,B.c_,u.gcj2()),p=A.m(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aW,B.r,3),p,A.a([new A.aa(2,B.H,B.aW.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.m(16)
return A.c6(r,B.v,new A.am(B.a0,t,B.b4,B.t,A.a([q,p,A.ao(32,A.p(t,D.had,B.f,t,t,new A.o(w,t,A.K(B.aW.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jF,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aNd.prototype={
a9(){return"_WorksheetTab."+this.b}}
C.Py.prototype={
R(){return new C.aIg(D.afn,A.a([],x.D))},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aIg.prototype={
gcKE(){return J.bJE(this.e,0,new C.f3E())},
Z(){this.a3()
$.aS.cS$.push(this)
this.wx()},
t(){$.aS.hM(this)
this.a2()},
j9(d){if(d===B.fY)this.wx()},
wx(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DX(q.a.c).d7(0,B.jZ),$async$wx)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f3A(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f3B(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wx,v)},
IY(d){return this.bPB(d)},
bPA(){return this.IY(null)},
bPB(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$IY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iFD(l,d),$async$IY)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.m_(l,r,q,D.duu,new A.W(Date.now(),0,!1))
w=4
return A.b(C.MB(t.a.c,p),$async$IY)
case 4:o=f
w=5
return A.b(t.wx(),$async$IY)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.T(D.fB1)
w=1
break}n=J.aQ(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.T(D.fCR)
else n.K(q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.Fs(m)
case 1:return A.h(u,v)}})
return A.i($async$IY,v)},
Fs(d){return this.cne(d)},
cne(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Fs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hk(s,new C.avv(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Fs)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.MB(u.a.c,t),$async$Fs)
case 5:case 4:w=6
return A.b(u.wx(),$async$Fs)
case 6:return A.h(null,v)}})
return A.i($async$Fs,v)},
wg(d){return this.c51(d)},
c51(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wg=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bHZ(),$async$wg)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hk(r,D.aNX,!0,"NgmyWorksheetProjectScan",x.N),$async$wg)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bIv(q),$async$wg)
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
r.T(A.b0(null,null,null,null,null,B.t,null,A.c(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.htf(s)
w=15
return A.b(C.MB(t.a.c,p),$async$wg)
case 15:o=f
w=16
return A.b(t.wx(),$async$wg)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.T(D.fCW)
w=1
break}r.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.Fs(p)
case 1:return A.h(u,v)}})
return A.i($async$wg,v)},
P8(d){return this.bOc(d)},
bOc(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$P8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ce(null,null,!0,null,new C.f3l(d),s,null,!0,!0,x.y),$async$P8)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pv(t.a.c,A.a([],x.D)),$async$P8)
case 6:w=7
return A.b(t.wx(),$async$P8)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.fB6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$P8,v)},
cns(d){var w=this.c
w.toString
A.bV(B.L,null,new C.f3u(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
ba0(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.kd
else w=B.c
v=A.m(16)
u=A.K(p?B.eo:B.bP,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.m),r,r,r,r,B.bS,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aE(!1,B.a3,!0,r,A.aM(!1,q,!0,A.p(r,A.w(A.a([s,B.af,t,B.bs,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.m),r,r,r,r,B.tF,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a1S(d,e){return this.cnf(d,e)},
cnf(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1S=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.L,null,new C.f3p(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1S)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hSX(r,new C.f3q(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Pa(d,e),$async$a1S)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1S,v)},
b6Z(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.m),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aC
else t=h.a?B.aS:B.ax
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
return A.aE(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.C(A2.Dg,A.A(A.a([s,B.bc,t,A.V(B.eL,w?B.bv:B.bl,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cuq(d,e,f,g,h,i){return this.b6Z(!1,d,e,f,g,h,i)},
Pa(d,e){return this.bOm(d,e)},
bOm(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lE(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Pa)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bGE(t.a.c,d.a),$async$Pa)
case 6:w=7
return A.b(t.wx(),$async$Pa)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pa,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uu(n),l=n?B.c7:B.hX
if(p.f)n=D.bgV
else{w=A.aF(d,B.dK,x.w).w
v=p.bIA(m)
u=p.c45(m)
t=p.gbFB()
if(n)s=B.kd
else s=B.c
r=A.m(13)
q=x.p
t=A.a([v,B.af,u,B.aN,new C.GL(A.p(o,A.A(A.a([p.aEZ(P.Qh,"Projects",m,D.afn),p.aEZ(B.vt,"Cashier",m,D.b4G),p.aEZ(B.Ie,"Family Tree",m,D.i08)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eC,0.95,t,o),B.bx],q)
v=p.d
if(v===D.afn){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aX,new C.aAk(p.gaUN(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aB,p.cus(m)],q))}else{n=p.a
if(v===D.b4G)t.push(new C.arg(n.c,m,o))
else{v=p.r
t.push(new C.asu(n.c,n.d,n.e,n.f,new C.f3H(p),new C.f3I(p),new A.bg(v,x.b4)))}}n=A.cc(A.w(t,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c6(o,l,A.bo(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bIA(d){var w=null,v=A.m(8),u=d.a,t=A.V(Z.a3M,u?B.bv:B.bl,w,w,w,16)
return A.aM(!1,v,!0,new A.C(B.k_,A.A(A.a([t,B.b7,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f3i(this),w,w,w,w,w,w,w)},
gbFB(){switch(this.d.a){case 0:return D.aew
case 1:return D.hNK
case 2:return D.aex}},
c45(d){var w=null,v=A.m(15),u=A.a([new A.aa(0,B.H,B.aW.j(0.35),B.cy,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.c3C,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bc,D.bNV,A.aE(!1,B.a3,!0,w,A.aM(!1,A.m(12),!0,A.p(w,D.c0W,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f3m(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.h,0,w,w),r=B.b5.j(0.55),q=A.m(12)
return new C.GL(A.p(w,A.w(A.a([new A.C(B.HQ,s,w),A.p(w,A.w(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.BC(this.gcKE()),w,w,w,w,w,w,D.fV0,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.m),w,w,w,B.tE,B.jF,w,w,1/0)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(B.aW,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hNJ,w)},
aEZ(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aW:B.L,q=A.m(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.aa(0.5,B.H,B.aW.j(0.42),B.cN,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bl
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bl
return A.E(A.aE(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cY(u,A.A(A.a([w,B.e0,new A.d0(1,B.c9,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bb,B.h,0,u,u),u,u,B.cn,new A.o(r,u,p,q,o,u,B.m),B.j3,u,u,u,u,B.HY,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f3D(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cus(d){var w,v,u,t,s,r,q=this,p=null
if(J.cx(q.e)){w=d.a
v=w?B.el:B.c
u=A.m(15)
t=A.p(p,D.c12,B.f,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.H,B.aW.j(0.5),B.eP,28)],x.V),D.cdH,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.ax,p,p,p,p,p,p,p,p,18,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GL(A.p(p,A.w(A.a([t,B.df,s,B.N,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.eb,A.A(A.a([A.E(q.aWo(B.jJ,"Scan QR",new C.f3x(q),d),1),B.ar,A.E(q.aWo(Q.Ai,"Upload file",new C.f3y(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aB,A.bH(D.hm4,p,q.gaUN(),A.bp(B.aW,p,p,p,B.c,B.ht,p,p,new A.b9(A.m(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bKp,1.05,D.aew,p)}w=J.b8(q.e,new C.f3z(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GL(A.w(w,B.l,p,B.e,B.h,0,B.p),16,B.bS,1,D.aew,p)},
aWo(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.K(B.aW.j(0.45),B.r,1)
return A.aE(!1,B.a3,!0,u,A.aM(!1,t,!0,A.p(w,A.w(A.a([A.V(d,B.b5,w,w,w,26),B.N,A.c(e,w,w,w,w,w,w,D.fTa,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.m),w,w,w,w,Aw.a1V,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cur(d,e){var w,v,u=null,t=e.a,s=t?B.el:B.c,r=A.m(14),q=A.K(t?B.eo:B.bP,B.r,1),p=A.a([new A.aa(0,B.H,B.v.j(t?0.35:0.08),B.eE,10)],x.V),o=A.m(14),n=t?B.bv:B.bl
n=A.bv(B.Z3,new A.fN(1.7777777777777777,C.aU5(!0,B.ft,1/0,P.Qh,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.w(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.BC(d.gxW()),u,u,u,u,u,u,D.fR7,u,u,u)],w),B.B,u,B.e,B.h,0,B.p),1)
return A.p(u,A.aE(!1,B.a3,!0,u,A.aM(!1,o,!0,A.w(A.a([n,new A.C(B.bD,A.A(A.a([v,A.aI(u,u,u,u,A.V(An.a4P,t?B.bv:B.bl,u,u,u,u),u,u,u,new C.f3v(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.B,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f3w(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.m),u,u,u,B.dV,u,u,u,1/0)}}
C.bCu.prototype={}
C.rG.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd3U(){var w,v,u,t,s=this.c
if(s===B.i.fJ(s))w=B.o.v(B.i.M(s))
else{v=B.i.a5(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aK(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.m_.prototype={
gxW(){return B.d.cD(this.d,0,new C.cJw())},
ak(){var w=this,v=w.d,u=A.U(v).k("O<1,a9<n,@>>")
v=A.B(new A.O(v,new C.cJv(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bhs(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.m_(w.a,w.b,v,u,w.e)},
bhb(d){return this.bhs(d,null)},
Um(d){return this.bhs(null,d)}}
C.IN.prototype={
a9(){return"FamilyGender."+this.b}}
C.ic.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hNX(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aHL(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.ic(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.ans.prototype={
a9(){return"FamilyTreeAccessRole."+this.b}}
C.le.prototype={
garP(){var w=this.f
return new A.X(w,new C.bVw(),A.U(w).k("X<1>")).gJ(0)},
ak(){var w=this,v=w.f,u=A.U(v).k("O<1,a9<n,@>>")
v=A.B(new A.O(v,new C.bVv(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ivA(w.y),"games",w.z],x.N,x.z)},
xf(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.le(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bhr(d,e){var w=null
return this.xf(w,w,w,d,e,w,w,w,w)},
cU5(d,e,f,g,h,i,j){return this.xf(d,e,null,f,g,h,i,j,null)},
aHQ(d,e){var w=null
return this.xf(w,w,w,w,d,w,w,e,w)},
cU7(d,e,f,g,h,i,j,k){return this.xf(d,e,null,f,g,h,i,j,k)},
cSB(d){var w=null
return this.xf(w,w,w,w,w,w,w,d,w)},
cSZ(d){var w=null
return this.xf(w,w,w,w,w,w,w,w,d)},
bh5(d){var w=null
return this.xf(w,w,d,w,w,w,w,w,w)},
aHA(d){var w=null
return this.xf(w,w,w,w,w,d,w,w,w)},
cTD(d,e,f){var w=null
return this.xf(w,d,w,w,e,w,w,f,w)},
cSo(d){var w=null
return this.xf(w,w,w,d,w,w,w,w,w)},
cTa(d,e){var w=null
return this.xf(d,w,w,w,w,w,e,w,w)}}
C.cJx.prototype={
a9(){return"WrapAlignment."+this.b}}
C.cJy.prototype={
a9(){return"WrapCrossAlignment."+this.b}}
C.aKm.prototype={}
C.bcN.prototype={
aj(d){this.a=d.a
this.b=d.b},
d1(d){var w=new C.bcN()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bcM.prototype={
gx7(){return!0},
gH1(){return this.z.b<this.b.length},
aY4(d){switch(0){case 0:return d.a.c}},
aXL(d){switch(0){case 0:return d.a.d}},
bYw(d,e){switch(0){case 0:return new A.i7(d,e)}},
bXU(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hm(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.j9(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Iw(b4)
switch(0){case 0:v=b5.b
u=new A.lb(0,v,0,1/0)
t=w===B.WM
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fB(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hm(b4,u,!0)
f=b1.aY4(g)
f.toString
e=b1.aXL(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aKm(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aKm(k,j,i))}d=s.length
switch(0){case 0:q=b5.cE(new A.i7(m,l))
a0=q.a
a1=q.b
b1.a=new A.j9(0,0,a0,a1)
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
a8=b1.aY4(g)
e=b1.aXL(g)
e.toString
a9=b1.bXU(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bYw(a6,a3+a9)
b0=g.a
g.a=new A.j9(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h_(d){var w,v,u,t,s,r=this
r.lD(d)
w=d.b
w.iw()
v=A.dA()
u=r.a
v.ei(u.a,u.b,0,1)
w.px(0,v)
for(u=r.z,u=B.d.dv(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].h_(d)
w.nF(0)},
Hz(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iw(){return this.z}}
C.bAJ.prototype={}
var z=a.updateTypes(["az<~>()","P(ic)","~()","P(le)","P(nL)","a9<n,@>(le)","G(le,le)","G(ic,ic)","n(ic)","le(a9<@,@>)","P(m_)","nL(a9<@,@>)","a9<n,@>(nL)","P(va)","va()","G(ic)","ai<ic>()","P(zT)","a14(Z)","n?(ic)","eP<n?>(ic)","az<~>(m_)","P(rG)","a9<n,@>(ic)","ic(a9<@,@>)","G(m_,m_)","P(ah6)","~(bh)","x(p6)","G(G,ab5)","P(qX<G>)","~(qX<G>)","UH(Z)","P(Nd)","P(v9)","~(ic)","n(n)","X2(Z)","UG(Z)","afr(Z)","a0_(Z)","ic(ic)","cR(bw<n,H_>)","cR(Lf)","a0t(Z)","G?(ic)","ic()","P(Lf)","C(ic)","~(IN)","a0p(Z)","x(IN,n,a_)","P(ah_)","bw<n,ai<a9<n,@>>>(n,ai<nL>)","a0r(Z)","+count,id,name(G,n,n)(le)","n(le)","a1o(Z)","a1p(Z)","P(mh)","mh()","a_u(Z)","a3d(Z)","a01(Z)","a00(Z)","~(G)","~(n,lN?)","x(rG)","afM(Z)","~(lJ)","az<~>([n?])","H(H,m_)","x(m_)","H(H,rG)","a9<n,@>(rG)","rG(a9<@,@>)","ai<lN>()","v9()","n(W)","m_(a9<@,@>)","cp(IM)","n(m_)","a9<n,@>(m_)","G(nL,nL)","le(a9<n,@>)","le(le)"])
C.fYO.prototype={
$1(d){return d.a+" "+d.b},
$S:134}
C.fYN.prototype={
bqQ(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rx(s,d,B.ii,"book",E.HD),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A.Ml(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bqQ(d)},
$S:275}
C.fYP.prototype={
$1(d){return d.b},
$S:134}
C.h8q.prototype={
$1(d){var w=null
return A.ez(w,B.L,new H.R_(this.a,this.b,w),w,w,0,B.a2a,w,B.da,w,w,w)},
$S:46}
C.fLy.prototype={
$1(d){return d!=null},
$S:241}
C.fLz.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:241}
C.fLE.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:178}
C.fWs.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fk(d,w,w,w,A.hs(w,B.uk,w,w,w,w,w,w,w,B.dL,w,w,10.5,w,B.eN,w,!0,w,w,w,w),w),u=f?B.eN:B.xi
return new A.ot(D.bFH,A.abU(A.a([new A.ha(130,w,v),new A.zS(1,B.I8,A.fk(e,w,w,w,A.hs(w,g==null?D.eJE:g,w,w,w,w,w,w,w,B.dL,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.zi,B.mc))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2015}
C.fWr.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.wk(999)
f=A.xV(A.mb(h,A.fk("Cashier",h,h,h,A.hs(h,D.Bc,h,h,h,h,h,h,h,B.dL,h,h,10,h,B.eN,h,!0,h,h,h,h),h),h,new A.lc(D.eJv,h,f,B.io,h),h,h,D.bGa,h))
w=A.xV(A.fk("Debt receipt",h,h,h,A.hs(h,h,h,h,h,h,h,h,h,B.dL,h,h,22,h,B.eN,h,!0,h,h,h,h),h))
v=A.xV(A.fk(C.xB(new A.W(Date.now(),0,!1),!0),h,h,h,D.acV,h))
u=A.wk(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fk(s,h,h,h,A.hs(h,h,h,h,h,h,h,h,h,B.dL,h,h,14,h,B.eN,h,!0,h,h,h,h),h)
r=A.fk("Person who owes",h,h,h,D.acV,h)
q=A.wk(10)
p=x.Z
u=A.mb(h,A.zK(A.a([s,new A.ha(h,2,h),r,new A.ha(h,10,h),A.mb(h,A.zK(A.a([A.fk("Amount owed",h,h,h,D.acV,h),new A.ha(h,2,h),A.fk(A.BC(t.c),h,h,h,A.hs(h,D.Bc,h,h,h,h,h,h,h,B.dL,h,h,20,h,B.eN,h,!0,h,h,h,h),h)],p),B.tu,B.mc),h,new A.lc(B.qk,h,q,B.io,h),h,h,D.bFn,1/0)],p),B.tu,B.mc),h,new A.lc(E.aPj,h,u,B.io,h),h,h,D.bHo,1/0)
q=new A.oc(D.eJy,0.9,B.lv)
r=A.wk(12)
s=i.c
o=s.$2("Original due",C.xB(t.r,!1))
n=s.$2("Current due",C.xB(t.f,!1))
m=i.d
l=new A.oc(m,1.1,B.lv)
k=A.wk(8)
j=i.a
k=A.a([o,n,new A.ha(h,6,h),A.mb(h,A.xV(A.fk(t.gaOU(),h,h,h,A.hs(h,m,h,h,h,h,h,h,h,B.dL,h,h,11,h,B.eN,h,!0,0.5,h,h,h),h)),h,new A.lc(h,new A.qi(l,l,l,l),k,B.io,h),h,h,D.bGj,1/0),new A.ha(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Bc))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Bc))
else{n=A.fk("Missed days ("+n+")",h,h,h,A.hs(h,B.uk,h,h,h,h,h,h,h,B.dL,h,h,10.5,h,B.eN,h,!0,h,h,h,h),h)
m=A.U(o).k("O<1,Ug>")
o=A.B(new A.O(o,new C.fWq(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.ha(h,4,h),n,new A.ha(h,6,h),new C.bcM(5,5,new C.bcN(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.ha(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.ha(h,8,h),w,new A.ha(h,3,h),v,new A.ha(h,16,h),u,new A.ha(h,10,h),A.mb(h,A.zK(k,B.zi,B.mc),h,new A.lc(h,new A.qi(q,q,q,q),r,B.io,h),h,h,B.anR,1/0)],p)
w=j.a
if(w!=null){v=new A.oc(B.KJ,1,B.lv)
B.d.u(f,A.a([new A.ha(h,16,h),A.fk("Debtor signature",h,h,h,A.hs(h,B.uk,h,h,h,h,h,h,h,B.dL,h,h,10,h,B.eN,h,!0,h,h,h,h),h),new A.ha(h,6,h),A.mb(h,new A.J3(w,B.Zf,h,h),h,new A.lc(h,new A.qi(v,v,v,v),A.wk(6),B.io,h),82,h,B.PC,1/0)],p))}f.push(new A.ha(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fk(w,h,h,h,D.fJd,h))
f.push(new A.ha(h,18,h))
f.push(A.xV(A.fk("NGMY.ORG",h,h,h,A.hs(h,D.Bc,h,h,h,h,h,h,h,B.dL,h,h,14,h,B.eN,h,!0,1.8,h,h,h),h)))
return f},
$S:387}
C.fWq.prototype={
$1(d){var w=null,v=new A.oc(D.KK,0.7,B.lv),u=A.wk(999)
return A.mb(w,A.fk(C.xB(d,!1),w,w,w,A.hs(w,D.KK,w,w,w,w,w,w,w,B.dL,w,w,9.5,w,B.eN,w,!0,w,w,w,w),w),w,new A.lc(w,new A.qi(v,v,v,v),u,B.io,w),w,w,D.bLQ,w)},
$S:2016}
C.caQ.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.m(999),t=A.K(B.bC.j(0.28),B.r,1)
return A.p(w,A.c(C.xB(d,!1),w,w,w,w,w,w,D.fQz,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,w,B.f_,w,w,w)},
$S:2017}
C.h8Y.prototype={
$1(d){var w=null,v=A.aF(d,B.bZ,x.w).w,u=A.m(26),t=A.aI(w,w,w,w,D.c4D,w,w,w,new C.h8V(d),w,w,w,w,w,B.cp),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.ez(w,B.L,new A.cP(new A.aX(0,380,0,v.a.b*0.9),A.aE(!1,B.a3,!0,u,new A.C(B.a1W,A.w(A.a([new A.bL(B.a9,w,w,t,w),new A.d0(1,B.c9,A.cc(A.w(A.a([new A.e9(new C.b1H(r,w),s),B.S,A.A(A.a([A.E(A.em(B.Aq,w,D.hif,new C.h8W(s,r,d),A.dh(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fb,w,new A.b9(A.m(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.de(B.a5p,w,D.heB,new C.h8X(r,d),A.bp(B.b5,w,w,w,B.c,w,B.fb,w,new A.b9(A.m(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.ax,0,w,w,w,w,w,B.ai),w),w,w,0,B.a2o,w,B.da,w,w,w)},
$S:46}
C.h8V.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h8W.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.bk$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lx(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.hq),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eW(B.dM.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aK(q,p,"_")
if(o.length>32)o=B.a.aw(o,0,32)
w=5
return A.b(A.rA(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h8X.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h2K(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.T(A.b0(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h8Q.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.ez(w,B.ax,A.w(A.a([new A.C(D.bHc,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nD,w,w,w),1),A.aI(w,w,w,w,B.lI,w,w,w,new C.h8O(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.d0(1,B.c9,new A.C(B.eY,A.bv(A.m(14),A.h7(t,B.z,w,w,B.cr,B.dE,!1,w,!1,w,w),B.ap),w),w),new A.C(B.Ph,new A.a4(1/0,w,A.de(B.oh,w,D.aZP,new C.h8P(t,this.c,d),A.bp(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.Pt,w,B.da,w,new A.b9(v,B.a1),w)},
$S:46}
C.h8O.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h8P.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.rA(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h91.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.ez(w,B.ax,new A.C(D.bHk,A.w(A.a([A.A(A.a([D.bN0,A.aI(w,w,w,w,B.lI,w,w,w,new C.h9_(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.N,new A.e9(A.bv(A.m(14),A.p(w,A.b4(w,w,w,new C.bf4(s.ax,w),B.aA),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.af,new A.a4(1/0,w,A.de(B.oh,w,D.aZP,new C.h90(t,s,d),A.bp(B.b5,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.da,w,new A.b9(v,B.a1),w)},
$S:46}
C.h9_.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h90.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.bk$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lx(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.hq),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aK(r,q,"_")
if(p.length>32)p=B.a.aw(p,0,32)
r=J.eW(B.dM.gaS(s))
w=5
return A.b(A.rA(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fQw.prototype={
$1(d){return d.a===this.a},
$S:245}
C.dV6.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dUS.prototype={
bq2(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.el:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dUV(s,q,e),p,!0,!0,!1,B.L2,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dUW(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bq2(d,e)},
$S:2018}
C.dUV.prototype={
$1(d){var w,v=null,u=this.c===B.xT,t=u?D.dBS:D.dxb
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.ax,v,v,v,v,v,v,v,v,15,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bo(!0,new A.C(B.aop,A.w(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iL(!0,v,v,B.y,D.fzF,new C.dUU(this.a,w,t,d),t.length,v,B.e8,B.ah,!0)],x.p),B.al,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:29}
C.dUU.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cX.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.m(14)
if(q)u=B.cX
else u=(t.b.a.d.a?B.bv:B.bl).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.z,C.b1G(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dUT(t.d,r),s,s,s,s,s,s,s)},
$S:167}
C.dUT.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.dUW.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dUQ.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:87}
C.dUR.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cM(B.cn,e,v)
return new A.dd(e,!1,A.iB(B.z,A.at(A.aE(!1,B.a3,!0,v,new A.eb(new C.dUP(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bk(t,new A.bq(0.96,1,u),u.k("bk<bS.T>"))),v)},
$S:34}
C.dUP.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.bZ,x.w).w,i=l.b,h=i.a.d.a,g=h?B.el:B.c,f=A.m(14),e=A.K((h?B.bv:B.bl).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,16,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.C(B.eC,A.V(B.cC,i.a.d.a?B.bv:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dUA(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aWV("Name")
r=l.a
q=r.d==null?k:new C.dUB(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bt:B.mq
n=A.K(B.cX.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.M,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.aHI(new A.C(B.fa,A.aM(!1,p,!0,A.p(B.z,C.b1G(m==null?"\ud83d\udc64":A.fXi(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cu,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.lq,k,B.acK,k,k)
v=A.a([v,B.af,t,B.N,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.aj,A.A(A.a([A.E(i.aXB("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dUC(r,a0),r.d===B.xT),1),B.aa,A.E(i.aXB("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dUH(r,a0),r.d===B.a9h),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.N,new A.bL(B.a5,k,k,A.hy(D.c2R,D.hgw,new C.dUI(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cX,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cp)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.vd(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.M,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aWW("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.am,k,k,s,k,k,B.ei,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.ao,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.K((t?B.bv:B.bl).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xB(r.a,!1)
v.push(A.aE(!1,B.a3,!0,q,A.aM(!1,p,!0,A.p(k,A.A(A.a([A.E(A.w(A.a([t,B.bs,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.h,0,B.p),1),D.c_o],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.m),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dUJ(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.N,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.M,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aWV("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,12.5,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b5k(r.b.length!==0,B.mB,new C.dUK(r,i,a0),new C.dUL(r,a0),"Upload from gallery","ID photo"))
v.push(i.b5k(r.c.length!==0,D.bTz,new C.dUM(r,i,d,a0),new C.dUN(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new Ar.a9K("Signature (optional)",t,new C.dUO(a0),new C.dUD(a0,t),new C.dUE(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bv:B.bl
s=(i?B.bv:B.bl).j(0.28)
s=A.E(A.dU(E.aZI,new C.dUF(d),A.dh(k,k,k,k,k,k,k,k,k,t,k,k,B.rb,k,new A.b9(A.m(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cX,k,k,k,B.c,k,B.rb,k,new A.b9(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bH(A.c(h?"Save":"Update",k,k,k,k,k,k,B.wk,k,k,k),k,new C.dUG(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.p(k,A.cc(A.w(v,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aX(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.m),k,k,k,B.re,B.jF,k,k,360)},
$S:171}
C.dUA.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dUB.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dUC.prototype={
$0(){return this.b.$1(new C.dUz(this.a))},
$S:0}
C.dUz.prototype={
$0(){var w=this.a
w.d=B.xT
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dUH.prototype={
$0(){return this.b.$1(new C.dUy(this.a))},
$S:0}
C.dUy.prototype={
$0(){var w=this.a
w.d=B.a9h
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dUI.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dUJ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wg(null,u.b,A.c2(2020,1,1,0,0,0,0,0),null,s,A.c2(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dUx(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUx.prototype={
$0(){var w=this.b
return this.a.a=A.c2(w.gck(),w.gci(),w.gcB(),0,0,0,0,0)},
$S:0}
C.dUK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.QP(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dUw(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUw.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dUL.prototype={
$0(){return this.b.$1(new C.dUv(this.a))},
$S:0}
C.dUv.prototype={
$0(){return this.a.b=""},
$S:0}
C.dUM.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.el:B.c
w=3
return A.b(A.bV(q,null,new C.dUt(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.QP(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dUu(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUt.prototype={
$1(d){var w=null
return A.bo(!0,A.w(A.a([A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.atY,w,w,w,w,new C.dUn(d),!1,w,w,w,w,w,w,w,D.h6u,w,w,w),A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.atW,w,w,w,w,new C.dUo(d),!1,w,w,w,w,w,w,w,D.hdz,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:29}
C.dUn.prototype={
$0(){A.a8(this.a,!1).N("camera")
return null},
$S:0}
C.dUo.prototype={
$0(){A.a8(this.a,!1).N("gallery")
return null},
$S:0}
C.dUu.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dUN.prototype={
$0(){return this.b.$1(new C.dUs(this.a))},
$S:0}
C.dUs.prototype={
$0(){return this.a.c=""},
$S:0}
C.dUO.prototype={
$0(){return this.a.$1(new C.dUr())},
$S:0}
C.dUr.prototype={
$0(){},
$S:0}
C.dUD.prototype={
$0(){return this.a.$1(new C.dUq(this.b))},
$S:0}
C.dUq.prototype={
$0(){return B.d.a6(this.a)},
$S:0}
C.dUE.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ak1(u.a,null,null,new C.dUp(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUp.prototype={
$4(d,e,f,g){this.a.$1(new C.dUm(this.b,d))},
$S:380}
C.dUm.prototype={
$0(){var w=this.a
B.d.a6(w)
B.d.u(w,this.b)},
$S:0}
C.dUF.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dUG.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.T(D.fEQ)
return}if(w.a.d==null){w.c.K(x.q).f.T(D.fBF)
return}A.a8(w.c,!1).N(!0)},
$S:0}
C.dV9.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:87}
C.dVa.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.el:B.c,n=A.m(14),m=A.K((p?B.bv:B.bl).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,16,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BC(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.A3(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.A3(r).length>0?B.bC:B.cX,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bl
t=(q?B.bv:B.bl).j(0.28)
s=x.p
return new A.dd(e,!1,A.at(A.aE(!1,B.a3,!0,r,A.p(r,A.w(A.a([p,B.N,v,u,B.aB,A.A(A.a([A.E(A.dU(B.ov,new C.dV7(d),A.dh(r,r,r,r,r,r,r,r,r,w,r,r,B.jD,r,new A.b9(A.m(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bH(D.he0,r,new C.dV8(d),A.bp(B.cX,r,r,r,B.c,r,B.jD,r,new A.b9(A.m(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.m),r,r,r,B.zD,B.HQ,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dV7.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dV8.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dV3.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dV4(r),p=r.a.d.a,o=p?B.el:B.c,n=A.m(14),m=A.K((p?B.bv:B.bl).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.ax,s,s,s,s,s,s,s,s,14,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BC(l.c),s,s,s,s,s,s,D.fSb,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.j7((r.a.d.a?B.bv:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a47,"View receipt",new C.dUX(r,d,l))
u=l.x!=null
t=u?B.q5:B.rl
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bHh,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dUY(r,d,l)),q.$3$icon$label$onTap(B.Dz,"Edit",new C.dUZ(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mB,"View / download ID",new C.dV_(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bTy,"View / download selfie",new C.dV0(r,d,l)))
if(l.gaJv())p.push(q.$3$icon$label$onTap(B.a5f,"View / download signature",new C.dV1(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.eq,"Delete",new C.dV2(r,d,l)))
p.push(B.at)
return A.bo(!0,new A.C(B.tE,A.p(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:29}
C.dV4.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.ax
else w=d
return A.aM(!1,v,!0,new A.C(B.eZ,A.A(A.a([A.V(e,w,v,v,v,20),B.bc,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2019}
C.dUX.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h8U(w,this.c)},
$S:0}
C.dUY.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.TF(this.c)},
$S:0}
C.dUZ.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.E8(this.c)},
$S:0}
C.dV_.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bIQ(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dV0.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bIQ(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dV1.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h8Z(w,this.c)},
$S:0}
C.dV2.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.QO(0,this.c)},
$S:0}
C.dVb.prototype={
$1(d){return d.x==null},
$S:245}
C.dVc.prototype={
$1(d){return d.x!=null},
$S:245}
C.dVd.prototype={
$2(d,e){return d+e.c},
$S:2020}
C.dVe.prototype={
$0(){return this.a.bG7()},
$S:0}
C.dV5.prototype={
$0(){return this.a.ahE(this.b)},
$S:0}
C.fRh.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fRi.prototype={
$0(){return B.d.gG(D.a6x)},
$S:z+77}
C.dk9.prototype={
$0(){var w=this.a
return w.l(new C.dk7(w,this.b))},
$S:0}
C.dk7.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dk8.prototype={
$0(){},
$S:0}
C.dka.prototype={
$0(){var w=this.a.gc4Q()
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.fTQ.prototype={
$1(d){return C.hxC(A.a0(d,x.N,x.z))},
$S:z+11}
C.fTR.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fTS.prototype={
$2(d,e){var w=A.cb(d.a,null),v=A.cb(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.h7t.prototype={
$1(d){return d.ak()},
$S:z+12}
C.hgb.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fQn.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bUd.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eF(e,v)?v:null},
$S:2021}
C.h83.prototype={
$1(d){var w=this
return new C.a0r(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dkP.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dkO(w,d))},
$S:z+80}
C.dkO.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkD.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dkA.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dkb.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dkc.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dkE.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dkk.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.I,u=v?B.el:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.ek(A.a([A.bJ(!1,B.dx,w,w,!0,w,w,w,new C.dki(d),w,w),A.bH(B.yi,w,new C.dkj(d),A.bp(B.nO,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dki.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dkj.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dkl.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dkB.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dkC.prototype={
$0(){return B.d.gG(D.AD)},
$S:z+14}
C.dkg.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzp(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.UG(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dkh.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkm.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a0_(v,u,J.ad(w.d),null)},
$S:z+40}
C.dkn.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkN.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a_E(r.y,r.gzp(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dkL(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bep(v,e,w,u,t,r.gbWZ(),C.hNW(r.y.Q),r.gzp(0),s)
w=t}return A.c9(q,new C.dkM(r,e),new A.C(B.a2f,w,s))},
$S:2022}
C.dkM.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd3(t).ay){t=this.b
u=x.cy.a(B.d.gd3(u.f.f)).gvy(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dA()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fI(v*3.141592653589793*0.5)
return A.fG(B.a5,A.d2(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:47}
C.dkL.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aKH(B.r6,B.iO)},
$S:0}
C.dkx.prototype={
$0(){var w=this.a
return w.l(new C.dkw(w))},
$S:0}
C.dkw.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dky.prototype={
$0(){var w=this.a.c
w.toString
A.a8(w,!1).N(null)
return null},
$S:0}
C.dkd.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.kI.j(0.5),r=x.p,q=A.a([D.h50,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cx(p.d)?"Write this book":"Write a new book"
q.push(p.a_F(d,B.eh,w,J.cx(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_F(d,K.arQ,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cB,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.l5.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cB,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.l5.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_F(d,X.asQ,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_F(d,B.p5,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_F(d,B.p5,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.ez(u,E.CI,A.bo(!0,new A.C(B.xa,A.w(q,B.B,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.Pw,u,B.da,u,new A.b9(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.dkz.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.dkq.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.a0t(v,J.cL(w.d),w.r+1,null)},
$S:z+44}
C.dkr.prototype={
$1(d){var w=null
return A.pb(!1,A.ek(w,w,w,E.CI,new A.ki(this.a,new C.dkp(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:334}
C.dkp.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aco,B.pp,A.E(A.c(e,w,w,w,w,w,w,B.jO,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:771}
C.dks.prototype={
$0(){return this.a.a=!1},
$S:54}
C.dkt.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dku.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkv.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BJ(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Tj(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.dko(s,t))
w=4
return A.b(s.lg(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dko.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkG.prototype={
$1(d){var w=null
return A.pb(!1,A.ek(w,w,w,E.CI,new A.ki(this.a,new C.dkF(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:334}
C.dkF.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aco,B.pp,A.E(A.c(e,w,w,w,w,w,w,B.jO,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:771}
C.dkH.prototype={
$0(){return this.a.a=!1},
$S:54}
C.dkI.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dkJ.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dkK.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BJ(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lg(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dke.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bmX(B.r6,A5.P5)},
$S:0}
C.dkf.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aKH(B.r6,A5.P5)},
$S:0}
C.dmB.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dmC.prototype={
$1(d){var w=this.a
return w.l(new C.dmA(w))},
$S:9}
C.dmA.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dmD.prototype={
$1(d){var w=this.a
return w.l(new C.dmz(w))},
$S:9}
C.dmz.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dmE.prototype={
$1(d){var w=this.a
return w.l(new C.dmy(w))},
$S:9}
C.dmy.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dmF.prototype={
$0(){var w=this.a
return w.l(new C.dmx(w,this.b))},
$S:0}
C.dmx.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dmG.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga3L()
A.a8(this.b,!1).N(new A.btq(w,v))},
$S:0}
C.dl3.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dl2.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a0p(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dl7.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dl6.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bcT(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hH,v,v,v)
return A.ek(A.a([A.bJ(!1,B.dx,v,v,!0,v,v,v,new C.dl4(d),v,v),A.bH(B.yi,v,new C.dl5(d),A.bp(B.nO,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.CI,w,v,v,v,v,D.h3N,v)},
$S:18}
C.dl4.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dl5.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dl8.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dl9.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.cc(A.c_(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bIg,t,t,B.ah)},
$S:314}
C.dl1.prototype={
$0(){return this.a.RF(0,this.b)},
$S:0}
C.dl0.prototype={
$0(){return this.a.R2(0,this.b)},
$S:0}
C.cSR.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cSS.prototype={
$0(){return B.d.gG(D.AD)},
$S:z+14}
C.cST.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bT(0,new A.C(d,new A.bP(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bm,w,w),w),0,0,0)},
$S:2024}
C.dbU.prototype={
$1(d){return this.a.l(new C.dbT(this.b,this.c))},
$S:9}
C.dbT.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.dci.prototype={
$1(d){return this.a.l(new C.dc5())},
$S:2}
C.dc5.prototype={
$0(){},
$S:0}
C.dcj.prototype={
$1(d){return this.a.l(new C.dc4())},
$S:2}
C.dc4.prototype={
$0(){},
$S:0}
C.dck.prototype={
$0(){var w=this.a
return w.l(new C.dc3(w,this.b))},
$S:0}
C.dc3.prototype={
$0(){var w=this.a
return w.d=w.goD().GG(this.b.a)},
$S:0}
C.dcl.prototype={
$0(){var w=this.a
return w.l(new C.dc2(w,this.b))},
$S:0}
C.dc2.prototype={
$0(){var w=this.a
return w.d=w.goD().cRV(this.b)},
$S:0}
C.dcm.prototype={
$1(d){return this.a.l(new C.dc1())},
$S:2}
C.dc1.prototype={
$0(){},
$S:0}
C.dcn.prototype={
$0(){var w=this.a
return w.l(new C.dc0(w,this.b))},
$S:0}
C.dc0.prototype={
$0(){var w=this.a
return w.d=w.goD().cS_(this.b.a)},
$S:0}
C.dco.prototype={
$1(d){var w=this.a
return w.l(new C.dcd(w,d))},
$S:6}
C.dcd.prototype={
$0(){var w=this.a
return w.d=w.goD().cSU(this.b)},
$S:0}
C.dcp.prototype={
$1(d){var w=this.a
return w.d=w.goD().aHD(d)},
$S:2}
C.dcq.prototype={
$1(d){var w=this.a
return w.d=w.goD().cS2(d)},
$S:2}
C.dcs.prototype={
$1(d){var w=this.a
return w.d=w.goD().cSS(d)},
$S:2}
C.dct.prototype={
$1(d){var w=this.a
return w.l(new C.dcc(w,d))},
$S:9}
C.dcc.prototype={
$0(){var w=this.a
return w.d=w.goD().cSJ(this.b)},
$S:0}
C.dcu.prototype={
$0(){var w=this.a,v=w.goD(),u=B.a.i(w.gzp(0).a.a),t=B.a.i(w.gaEM().a.a)
u=v.bhB(B.a.i(w.gau7().a.a),t,u)
A.a8(this.b,!1).N(u)
return null},
$S:0}
C.bUn.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bUh.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bUg(w,d))},
$S:10}
C.bUg.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bUq.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bUi.prototype={
$0(){var w=this.a
w.Q=D.b4f
w.afb(1)
w.r.x=null},
$S:0}
C.bUj.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b4f)return
w=new A.e4()
w.cV(u.as*13+u.a.e)
v=u.r
v.Q=3+w.av(3)
v.z=D.dav[w.av(6)]
v.as=u.f.a+2.6},
$S:0}
C.bUm.prototype={
$0(){var w=this.a
w.Q=D.af3
w.afb(2)
w.r.z=null},
$S:0}
C.bUl.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hZ3
t.afb(3)
w=t.r
w.d=s
w.x="I say: "+t.gD2()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.av(3)
w.z=s?D.dhL[v.av(4)]:D.dED[v.av(3)]
w.as=t.a+2.8},
$S:0}
C.bUo.prototype={
$0(){var w=this.a
w.Q=D.b4g
w.CW=this.b
w.cy=1
w.afb(4)
w.r.f=w.f.a+5},
$S:0}
C.bUp.prototype={
$0(){},
$S:0}
C.bUk.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hZ()},
$S:0}
C.bUe.prototype={
$0(){return this.a.LM(this.b)},
$S:0}
C.bUf.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hZ()},
$S:0}
C.bVU.prototype={
$0(){var w=this
return w.a.S_(w.b,0,w.c,w.d)},
$S:0}
C.bVV.prototype={
$0(){var w=this
return w.a.S_(w.b,3,w.c,w.d)},
$S:0}
C.bVW.prototype={
$0(){var w=this
return w.a.S_(w.b,1,w.c,w.d)},
$S:0}
C.bVX.prototype={
$0(){var w=this
return w.a.bWp(w.b,w.c,w.d)},
$S:0}
C.bVY.prototype={
$0(){var w=this
return w.a.S_(w.b,4,w.c,w.d)},
$S:0}
C.bVZ.prototype={
$0(){var w=this
return w.a.S_(w.b,2,w.c,w.d)},
$S:0}
C.bW_.prototype={
$0(){var w=this
return w.a.S_(w.b,5,w.c,w.d)},
$S:0}
C.bW0.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:772}
C.bVT.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a7I[d],p=q.a.a7(0,new A.r(0,-q.b*1.2*124)),o=A.h_(r,B.cL,r,3,r,A.cW(r,r,r,r,r,r,r,r,r,D.fIT,e),B.a8,B.cd,r,B.e4,B.ce)
o.nB(130)
w=o.b.a.c
w=p.aI(0,new A.r(0,w.gb4(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bx(A.bZ(w,v.gb4(v)+12,u+18),B.il)
u=this.a
v=t.eI(B.dS)
w=$.T()
s=A.L()
s.r=B.dJ.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.qW.gp(0)
u.aq(t,s)
w=new A.aH(w.r,B.ak,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bA())
v=A.L()
v.r=D.qW.gp(0)
u.af(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:773}
C.bUE.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bUF.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.anV(d),w.anV(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fEd.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.hg1.prototype={
$2(d,e){if(e!=null)J.c8(this.a.c_(0,d,new C.hg2()),e)},
$S:z+66}
C.hg2.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.hg3.prototype={
$1(d){return d!==this.a},
$S:3}
C.hg4.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hg5.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hg0(this.c,d))},
$S:3}
C.hg0.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hg6.prototype={
$1(d){return d!==this.a},
$S:3}
C.hg7.prototype={
$1(d){return d!==this.a},
$S:3}
C.hg8.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hg_(this.c,d))},
$S:3}
C.hg_.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fRV.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.h6n.prototype={
$1(d){return d.Q},
$S:z+15}
C.h6o.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fNJ.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fUM.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bPp.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hgs.prototype={
$2(d,e){return B.o.aQ(C.hJU(d),C.hJU(e))},
$S:239}
C.hgt.prototype={
$1(d){return d!==this.a},
$S:3}
C.h7_.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bNx.prototype={
$0(){var w=this.a
w.ch=!0
w.bb4()},
$S:0}
C.bNs.prototype={
$0(){},
$S:0}
C.bNy.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bNq.prototype={
$0(){},
$S:0}
C.bNr.prototype={
$0(){},
$S:0}
C.bNw.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bT(0,A.b4(u,u,u,new C.bf6(t,u),B.aA),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.p(u,A.c(t.dy,u,u,u,u,u,u,D.fQL,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.m),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.aA(B.c0,new A.am(B.a0,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bNt(t,e),u,u,u,u,u,u,u,new C.bNu(t,e),u,u,u,u,u,u,u,u,u,new C.bNv(t,e),u,u,u,u,!1,B.a4)},
$S:35}
C.bNt.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bNv.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bNu.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bNp.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hZ()},
$S:0}
C.cty.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.ctz.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.ctx(w))},
$S:0}
C.ctx.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.ctA.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.ctB.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.ctC.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.ctD.prototype={
$0(){},
$S:0}
C.ctE.prototype={
$0(){var w=this.a
w.z=w.Y9(++w.e)
w.Q=A.c3(w.gkR()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.ctu.prototype={
$0(){return A.a8(this.a,!1).hZ()},
$S:0}
C.ctv.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.ctw(i,f,h),a0=g.as,a1=A.a3(a0).k("ba<2>")
a0=A.B(new A.ba(a0,a1),a1.k("M.E"))
a0=A.bT(0,A.c9(new A.hB(a0),new C.ctp(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.Rj(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cR(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new T.Nm(new C.ctq(g,u),new C.ctr(g,u),new C.cts(g,u),j,j,new A.bg("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fs:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkR().length?"See my result":"Next family"
g=A.at(C.uJ(a0,g.gqt(g),B.d_,B.jH,D.fL),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Y9(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Y9(0)
o=s}else o=s
n=s[u]
n=A.e0(B.z,new C.Rj(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Y9(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rn(new A.bq(0,p,t),new C.ctt(),new T.EM(u,j,new C.Rj(l.b,k,62,!1,j),new A.kZ(0.25,new C.Rj(m.b,k,62,!1,j),j),new A.kt(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,T.hNO(),!0,!0,j,j,j,j,j,j,!1,B.j6,j,new A.bg("chip-"+r,a0),w),B.aZ,B.j4,j,new A.bg("t"+r+"-"+q,a0),v))}++u}g=A.c_(B.fX,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.am(B.a0,j,B.ab,B.t,e,j)},
$S:61}
C.ctw.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:759}
C.ctp.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b4(p,p,p,new C.bey(q.b,o,v,w,p),B.aA)},
$S:52}
C.ctr.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cts.prototype={
$1(d){return this.a.cVM(this.b,d.a)},
$S:z+31}
C.ctq.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.m(18),q=e.length!==0?B.d_.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.d_:B.jW,B.r,2)
u=s?A.l1(new C.cto(),A.at(new C.Rj(u.gaH4()[u.gj1()[t]].b,u.gaH4()[u.gj1()[t]].a,62,!1,v),v,v,v),B.n1,B.j4,v,v,new A.bq(0.3,1,x.X),x.i):D.bfy
return A.cY(v,u,v,v,B.aZ,new A.o(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2027}
C.cto.prototype={
$3(d,e,f){return A.e0(B.z,f,e,null,null)},
$S:110}
C.ctt.prototype={
$3(d,e,f){return A.dQ(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:110}
C.cTV.prototype={
$1(d){return d>=1},
$S:121}
C.cIv.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkR()[w.e].d.length)w.l(new C.cIu(w))},
$S:10}
C.cIu.prototype={
$0(){return this.a.f++},
$S:0}
C.cID.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cIE.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cIF.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cIC(w))},
$S:0}
C.cIC.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cIG.prototype={
$0(){return this.a.f++},
$S:0}
C.cIH.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cII.prototype={
$0(){},
$S:0}
C.cIJ.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a6(0)
w.as=!1
w.ay=0},
$S:0}
C.cIx.prototype={
$0(){return A.a8(this.a,!1).hZ()},
$S:0}
C.cIy.prototype={
$3(d,e,f){var w=null
return A.l1(new C.cIw(this.a,e),w,B.aZ,B.hy,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:2028}
C.cIw.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.d_.j(u.as?0.6:0.15)
t=A.a([new A.aa(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.ib(new A.BT(new A.v7(B.v.j(e),B.MW,v,B.ZI),H.c_9(A.b4(v,v,v,new C.aD2(u.gkR()[u.e].c,u.as,v),B.aA),new A.ER(w,w,B.XB)),v),B.ap),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2029}
C.cIz.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,14*(1-e))),e)},
$S:93}
C.cIA.prototype={
$3(d,e,f){return A.dQ(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:110}
C.cIB.prototype={
$0(){return this.a.bsm(this.b)},
$S:0}
C.fgg.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.aor$)
v.aor$=w
v.qh$.sp(0,w)
v.ask(u)},
$S:7}
C.fqJ.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:10}
C.bVp.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bVo())},
$S:0}
C.bVo.prototype={
$0(){},
$S:0}
C.bVm.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bVk.prototype={
$0(){},
$S:0}
C.bVl.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gNq()
w=s+1>=r.length?3:5
break
case 3:q=C.bJ3(p.gar9(0),0,r.length)
p.l(new C.bVh(p,q))
o=p
w=6
return A.b(C.C3(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.C4(s.d,s.c.a,"school",p.gar9(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bVi())
w=4
break
case 5:p.l(new C.bVj(p))
p.gqA().WJ(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bVh.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bVi.prototype={
$0(){},
$S:0}
C.bVj.prototype={
$0(){return this.a.x++},
$S:0}
C.bVn.prototype={
$0(){return this.a.LM(this.b)},
$S:0}
C.bVg.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hZ()},
$S:0}
C.fgh.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hO1(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.F9
C.Th(q,D.eCV,0,0.2,-0.6,-0.2,null,w,D.eBE,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a7(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.T()
p=A.L()
p.r=D.Hf.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fgi.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Th(this.a,D.eC0,0,u,0.7,-0.5,null,null,D.KC,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fgj.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Th(this.a,D.eDI,0,0,0.8,-0.5,null,null,D.KC,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fgk.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Th(w.b,D.eCP,0,v,-0.8,-0.5,null,null,D.KC,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fgl.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.eCT:D.F9
C.Th(p,D.eCj,0,t,0,-0.6,null,v,D.KC,3,0,s,1.3,u,0,w,0)
q=q.cfg(new A.r(222,455),9)
$.T()
w=A.L()
w.r=B.d_.gp(0)
p.af(q,w)},
$S:0}
C.fgm.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:772}
C.bV2.prototype={
$2(d,e){return d+e},
$S:62}
C.bVd.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bVe.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bVf.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.qh$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bV9.prototype={
$1(d){return d},
$S:101}
C.bV8.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qh$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bVa.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bVb.prototype={
$0(){},
$S:0}
C.bVc.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.G9(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.c8(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a6(0)},
$S:0}
C.bV4.prototype={
$0(){return A.a8(this.a,!1).hZ()},
$S:0}
C.bV5.prototype={
$2(d,e){var w=this.a
w=w.gkR()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:62}
C.bV6.prototype={
$2(d,e){var w=null,v=C.hoq(new A.av(A.aU(1/0,e.a,e.b),A.aU(1/0,e.c,e.d))),u=this.a
return A.aA(B.c0,new A.e9(A.b4(w,w,w,new C.blO(u,u.qh$),B.aA),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bV3(u,v),w,w,w,w,!1,B.a4)},
$S:35}
C.bV3.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.i.bd((t.a-s.a)/r/450*v),0,v-1)
w.d5M(w.gj1()[u])}},
$S:24}
C.bV7.prototype={
$1(d){var w=this.a
return w.gkR()[w.f].d[d]},
$S:77}
C.dw2.prototype={
$2(d,e){return 0},
$S:62}
C.bUP.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUO())},
$S:0}
C.bUO.prototype={
$0(){},
$S:0}
C.bUN.prototype={
$0(){},
$S:0}
C.bUH.prototype={
$0(){},
$S:0}
C.bUI.prototype={
$0(){},
$S:0}
C.bUM.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.BW},
$S:0}
C.bUL.prototype={
$1(d){var w=null,v=this.a.gqA(),u=A.c(d,w,w,w,w,w,w,D.aYe,w,w,w),t=v.gboJ(0)
return A.aA(B.c0,A.w(A.a([u,B.bs,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aYr,w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbuJ(v),w,w,w,w,w,w,!1,B.a4)},
$S:124}
C.bUJ.prototype={
$0(){return this.a.LM(this.b)},
$S:0}
C.bUK.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hZ()},
$S:0}
C.bUG.prototype={
$0(){return A.a8(this.a,!1).hZ()},
$S:0}
C.e6Q.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e6R.prototype={
$1(d){return this.a},
$S:43}
C.e6S.prototype={
$0(){var w=this.a
return w.d=w.gTH().bh5(this.b)},
$S:0}
C.e6O.prototype={
$1(d){return new C.UH(this.a,null)},
$S:z+32}
C.e6P.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e6N.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hH,w,w,w)
return A.ek(A.a([A.bJ(!1,E.aZS,w,w,!0,w,w,w,new C.e6L(d),w,w),A.bJ(!1,D.hbr,w,w,!0,w,w,w,new C.e6M(d),w,w)],x.p),w,w,D.fL,v,w,w,w,w,D.fYM,w)},
$S:18}
C.e6L.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e6M.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e6K.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.T(A.b0(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e6T.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e6U.prototype={
$0(){var w=this.a,v=this.b,u=C.bGK(v,10,w.r,!1)
return w.uI(C.hxD(w.a.d,"kahoot",u,w.gb8A(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e6V.prototype={
$0(){var w=this.a
return w.uI(new C.anh(this.b,w.a.d,w.r,null))},
$S:0}
C.e6W.prototype={
$0(){var w=this.a
return w.uI(new C.alr(this.b,w.a.d,w.r,null))},
$S:0}
C.e6Z.prototype={
$0(){var w=this.a
return w.uI(new C.awi(this.b,w.a.d,w.r,null))},
$S:0}
C.e7_.prototype={
$0(){var w=this.a
return w.uI(new C.aAe(this.b,w.a.d,w.r,null))},
$S:0}
C.e70.prototype={
$0(){var w=this.a
return w.uI(new C.ank(this.b,w.a.d,w.r,null))},
$S:0}
C.e71.prototype={
$0(){var w=this.a
return w.uI(new C.ano(this.b,w.a.d,w.r,null))},
$S:0}
C.e72.prototype={
$0(){var w=this.a
return w.uI(new C.anq(this.b,w.a.d,w.r,null))},
$S:0}
C.e73.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d66()
return v.uI(C.hxD(v.a.d,"creator_"+u.a,w,v.gb8A(),"A game by the family",t,this.c.a))},
$S:0}
C.e74.prototype={
$0(){return this.a.Px(this.b)},
$S:0}
C.e75.prototype={
$0(){return this.a.YB(0,this.b)},
$S:0}
C.e6X.prototype={
$0(){return this.a.Px(null)},
$S:0}
C.e6Y.prototype={
$0(){return this.a.K(x.q).f.T(D.fBL)},
$S:0}
C.bV0.prototype={
$0(){var w=this.a
w.d=D.b3l
w.z=3},
$S:0}
C.bV1.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aRx()}else w.l(new C.bV_(w))},
$S:10}
C.bV_.prototype={
$0(){return this.a.z--},
$S:0}
C.bUR.prototype={
$0(){var w=this.a
w.d=D.aeK
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bUS.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bUQ(w))
if(w.as<=0){d.a1(0)
w.b8w(-1)}},
$S:10}
C.bUQ.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bUX.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Yh},
$S:0}
C.bUY.prototype={
$0(){return this.a.e++},
$S:0}
C.bUU.prototype={
$0(){var w=this.a
w.d=D.b3m
w.ay=this.b},
$S:0}
C.bUV.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bUZ.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:2030}
C.bUW.prototype={
$0(){return this.a.LM(this.b)},
$S:0}
C.bUT.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hZ()},
$S:0}
C.bUr.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ay()
s=A.a([new A.au(new A.bb(s,B.b8,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bb(u,B.b8,B.aP),r))}return s},
$S:2031}
C.bUs.prototype={
$0(){return this.a.gDB().c.push(C.hi5(null,0,20,""))},
$S:0}
C.bUC.prototype={
$1(d){var w=null
return A.bC(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dz,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.FJ,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:266}
C.bUB.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDB().c,m=this.b,l=n[m],k=o.ciw(l),j=B.c.j(0.06),i=A.m(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.LU,p,p,p),B.aX],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.atJ,p,p,p,new C.bUw(o,m),p,p,p,p,p,p))
n=J.a1(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.M,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bUx(l),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a8,p,B.ao,p,p,p,p),B.N],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aFL[v]
t=D.aFr[v]
s=v+1
f.push(new A.C(B.eB,new A.c0(B.aK,B.e,B.h,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bu(1,B.b6,A.aN(p,B.M,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bUy(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ae,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a8,p,B.ao,p,p,p,p),p),new Av.PV(v,l.c,new C.bUz(o,l),p,!1,D.lX,p,p,p,p,p,!1,!1,p,I.b43,p,p,p,p,p,w)],g),p),p))}f.push(D.h3s)
f.push(B.aj)
n=A.a([D.fXQ,B.aa],g)
for(r=0;r<3;++r){q=D.cje[r]
n.push(new A.C(B.fa,A.jE(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bUA(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.p(p,A.w(f,B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.m),p,p,p,B.kM,B.bg,p,p,p)},
$S:155}
C.bUw.prototype={
$0(){var w=this.a
return w.l(new C.bUv(w,this.b))},
$S:0}
C.bUv.prototype={
$0(){return B.d.cJ(this.a.gDB().c,this.b)},
$S:0}
C.bUx.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bUy.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bUz.prototype={
$1(d){return this.a.l(new C.bUu(this.b,d))},
$S:157}
C.bUu.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bUA.prototype={
$1(d){return this.a.l(new C.bUt(this.b,this.c))},
$S:9}
C.bUt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e8v.prototype={
$0(){var w=this.a
w.wI()
w.a.bw()
w.a.qu()},
$S:0}
C.e8u.prototype={
$0(){var w=this.a
w.wI()
w.a.bw()
w.a.qu()},
$S:0}
C.e8x.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.cx(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e8y.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e8z.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e8t.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e8w.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e8B.prototype={
$0(){this.a.PT()
return null},
$S:0}
C.e8A.prototype={
$0(){return this.a.Ft(this.b)},
$S:0}
C.e7W.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bJ(!1,B.dx,w,w,!0,w,w,w,new C.e7U(d),w,w),r=A.bp(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.ek(A.a([s,A.bH(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e7V(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e7U.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e7V.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e7X.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cSo(this.b)},
$S:0}
C.e7R.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aXb(w.b,w.c,w.d)},
$S:7}
C.e7i.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e7j.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7A.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HJ(t.a.c),$async$$0)
case 2:s=r.nO(q.dO(e,new C.e7y(t)))
if(s!=null&&t.c!=null)t.l(new C.e7z(t,s))
t.a.bw()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e7y.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e7z.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7B.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e7C.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7Q.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cTa(C.hOb(w),w)},
$S:0}
C.e7x.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.X2(u,w,C.aSH(u,w),new C.e7w(v),null)},
$S:z+37}
C.e7w.prototype={
$1(d){return this.bq9(d)},
bq9(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e7v(s,d))
w=3
return A.b(s.uE(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:551}
C.e7v.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bh5(this.b)},
$S:0}
C.e7N.prototype={
$1(d){return d.as},
$S:z+1}
C.e7O.prototype={
$1(d){var w=this
return new A.eb(new C.e7M(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e7M.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.el:B.c,h=A.m(26),g=A.K(B.bU.j(0.5),B.r,1.5),f=A.p(k,D.bYB,B.f,k,k,new A.o(B.bU.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.w(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.bc,a0,A.aI(k,k,k,k,A.V(B.cC,j?B.bv:B.bl,k,k,k,k),k,k,k,new C.e7G(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bU:B.bU.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ax(B.bU,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bU
a0.push(A.aA(k,A.cY(k,A.c(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.aZ,new A.o(q,k,new A.bE(n,n,n,n),new A.bc(p,p,p,p),k,k,B.m),B.hn,k,k,k,k,B.Dc,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e7H(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.c_(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c9W,new A.C(D.bIG,f,k),new A.C(D.bIx,e,k),new A.C(B.re,a0,k),new A.C(X.aoW,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.V(Ak.arC,j?B.bv:B.bl,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.C(D.bIz,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,k,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.ayZ(k,B.bU,k,k,!1,B.y,k,k,k,k,k,k,new C.e7I(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aB)
j=A.m(20)
e=A.a([new A.aa(0,B.H,B.az.j(0.35),B.hS,12)],x.V)
f.push(A.aA(k,A.p(k,A.A(A.a([D.fYb,B.bc,D.bMY,D.bZg],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.cdK,B.m),k,k,k,B.ie,B.bD,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e7J(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.C(B.xb,A.A(A.a([A.E(A.dU(B.dx,new C.e7K(a1),k),1),B.ar,A.E(A.bH(N.b_j,k,new C.e7L(t,a1),A.bp(B.bU,k,k,k,k,k,B.cq,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bo(!0,A.p(k,A.cc(A.w(f,B.B,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.ap,k,k,new A.o(i,k,g,h,k,k,B.m),k,k,k,B.zs,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:89}
C.e7G.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e7H.prototype={
$0(){return this.b.$1(new C.e7F(this.a,this.c))},
$S:0}
C.e7F.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e7I.prototype={
$1(d){var w=this.a
w.l(new C.e7D(w,d))
this.b.$1(new C.e7E())},
$S:9}
C.e7D.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e7E.prototype={
$0(){},
$S:0}
C.e7J.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aJg(!0,w))
return null},
$S:0}
C.e7K.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e7L.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aJg(!1,w))
return null},
$S:0}
C.e7P.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cSZ(this.b.b)
w.r.a6(0)},
$S:0}
C.e76.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.akc(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hGW(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e77.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aHA(w)},
$S:0}
C.e7Z.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.afr(this.b,w,this.c,null)},
$S:z+39}
C.e7T.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.el:B.c,t=A.m(20),s=A.V(B.kQ,B.aW,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.w(p,B.l,w,B.e,B.P,0,B.p)
return A.ek(A.a([A.bH(D.hfg,w,new C.e7S(d),A.bp(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e7S.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e78.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e79.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e7a.prototype={
$1(d){return d.a},
$S:z+8}
C.e7b.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.ic(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aHA(w)},
$S:0}
C.e7f.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.akc(q)
w=A.U(q).k("X<1>")
q=A.B(new A.X(q,new C.e7d(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hGW(v.e,null,r,v.f,v.r,new C.e7e(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e7e.prototype={
$0(){return this.a.ach(this.b)},
$S:0}
C.e7d.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e7g.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.U(w).k("O<1,ic>")
w=A.B(new A.O(w,new C.e7c(this.b),v),v.k("aj.E"))
u.d=t.aHA(w)},
$S:0}
C.e7c.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e7Y.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e7s.prototype={
$1(d){return d.length!==0},
$S:3}
C.e7t.prototype={
$1(d){var w=this
return new A.eb(new C.e7r(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e7r.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.el:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e7n(u,e,o),A.U(o).k("O<1,x>")))
p.push(B.N)
u=w.d
p.push(A.aN(v,B.M,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(12),B.dy),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.am,v,v,v,v,v,B.mT,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a8,v,B.ao,v,v,v,v))
p=A.w(p,B.al,v,B.e,B.P,0,B.p)
t=w.a
return A.ek(A.a([A.bJ(!1,B.dx,v,v,!0,v,v,v,new C.e7o(d),v,v),A.bH(B.M2,v,new C.e7p(t,u,o,e),A.bp(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.h1O,v,new C.e7q(t,u,o,d),A.bp(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:230}
C.e7n.prototype={
$1(d){var w=null
return A.dP(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c6K,w,w,w,new C.e7m(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2032}
C.e7m.prototype={
$0(){return this.a.$1(new C.e7k(this.b,this.c))},
$S:0}
C.e7k.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e7o.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e7p.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e7l(w.c,u))
v.bM(0,B.ck)}},
$S:0}
C.e7l.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e7q.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a8(w.d,!1).N(!0)},
$S:0}
C.e7u.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cTD(this.b,D.vp,C.HH(v,w.a.c))},
$S:0}
C.e85.prototype={
$1(d){return d.as},
$S:z+1}
C.e86.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j2(this.b,w)},
$S:0}
C.e87.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iFj(v)
return w.Xn(v==null?null:v.a)},
$S:0}
C.e88.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.igu(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aU(1/0,e.a,e.b)
s=A.aU(1/0,e.c,e.d)
l.cAv(new A.av(u,t),v.gbnO(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d84:D.d5X
q=A.K(s?B.dz:D.bnt,B.r,1)
p=A.m(22)
o=A.bT(0,A.b4(m,m,m,new C.bhT(s,m),B.aA),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.am(B.a0,m,B.ab,B.t,A.a([o,A.bT(0,A.tY(new A.R(n,n,n,n),new A.a4(u,t,new C.biQ(l.d,v,l.f,w,new C.e81(l),l.gcjI(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bAQ(s,new C.e82(l,e),new C.e83(l,e),new C.e84(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a6(B.aU,B.b1,B.w,r,m,m),B.m),m,m,m,S.anV,m,m,m,m)},
$S:174}
C.e81.prototype={
$1(d){var w=this.a
w.l(new C.e8_(w,d))},
$S:2}
C.e8_.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.I(0,v)},
$S:0}
C.e82.prototype={
$0(){var w=this.b
return this.a.bfd(1.25,new A.av(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.e83.prototype={
$0(){var w=this.b
return this.a.bfd(0.8,new A.av(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.e84.prototype={
$0(){var w=this,v=w.b
return w.a.aXb(new A.av(A.aU(1/0,v.a,v.b),A.aU(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbnO())},
$S:0}
C.e89.prototype={
$0(){var w=this.a
return w.l(new C.e80(w))},
$S:0}
C.e80.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e7h.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fO(new A.fD(s.c)),$async$$0)
case 2:t.yP("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dld.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bmF(u,C.hT0(v.c,u),new C.dlc(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dlc.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dle.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bq1(d.d,d.c,u.f.q(0,d.a),new C.dlb(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dlb.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fRl.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nO(new A.cQ(new A.X(v,new C.fRm(d),w.k("X<1>")),new C.fRn(),w.k("cQ<1,n>")))},
$S:z+19}
C.fRm.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fRn.prototype={
$1(d){return d.a},
$S:z+8}
C.fRj.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fRk.prototype={
$1(d){return d.b},
$S:z+8}
C.fRq.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nO(new A.cQ(new A.X(v,new C.fRr(d),w.k("X<1>")),new C.fRs(),w.k("cQ<1,n>")))},
$S:z+19}
C.fRr.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fRs.prototype={
$1(d){return d.a},
$S:z+8}
C.fRo.prototype={
$1(d){var w,v=A.eC([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fRp.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dlg.prototype={
$0(){return this.a},
$S:z+46}
C.dlx.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:258}
C.dlp.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.dlq()),v=J.a1(w)
if(!v.q(w,e))v.I(w,e)},
$S:125}
C.dlq.prototype={
$0(){return A.a([],x.s)},
$S:774}
C.dlo.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eF(w,e)
return w===!0},
$S:269}
C.dlh.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dln.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dlm.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.I(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aQ(v==null?D.Et:v)
u=1
while(v.C())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aQ(v==null?B.M:v)
while(v.C()){t=v.gP(v)
if(e.q(0,t))continue
e.I(0,t)
t=w.h(0,t)
t=J.aQ(t==null?D.Et:t)
while(t.C())u+=s.$2(t.gP(t).a,e)}return u},
$S:2034}
C.dli.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dlr.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.I(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aQ(u==null?B.M:u)
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
t=J.aQ(t==null?D.Et:t)
while(t.C()){r=t.gP(t)
if(r.a!==a9&&!B.d.aR(w,new C.dls(r)))w.push(r)}}B.d.br(w,new C.dlt(a8))
B.d.b_(w,new C.dlu())
q=C.igt(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.f9E],x.G))}a8=A.a([],x.s)
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
else j.push(d)}}a0=(B.d.gG(k)+B.d.gal(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bt9(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2035}
C.dls.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dlt.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dlu.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.dlv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a1(n),v=o.c,u=-1/0,t=0;t<w.gJ(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.ba(v,A.a3(v).k("ba<2>")).cD(0,0,B.oA)+88-w.gG(n).a}else u=0
for(w=J.a1(n),v=o.c,t=0;t<w.gJ(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:529}
C.dlw.prototype={
$1(d){return 16+d*156},
$S:162}
C.dlf.prototype={
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
t.n(0,d,new C.H_(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.H_(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.H_(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aQ(t==null?B.M:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Lf(d,new A.r(e+t,w),s,s.length))}},
$S:185}
C.dlj.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aMq(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:125}
C.dlk.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dll.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:775}
C.dly.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:775}
C.dlz.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:381}
C.dlA.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:206}
C.dlB.prototype={
$1(d){return d>=0.5},
$S:121}
C.fwj.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hb(A.aM(!1,v,!0,new A.a4(38,38,A.V(d,this.a.c?B.c:B.cx,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w,w)},
$S:2037}
C.f60.prototype={
$1(d){var w=null,v=A.m(8),u=B.bU.j(0.12),t=A.m(8)
return new A.C(B.lb,A.aM(!1,v,!0,A.p(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fNu,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.PB,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f6_(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f6_.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dBP.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dBO.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mU,B.K,w,w)
return A.ek(A.a([A.bJ(!1,B.dx,w,w,!0,w,w,w,new C.dBM(d),w,w),A.bJ(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.nd,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dBN(d),w,w)],x.p),B.bb,B.D7,w,u,D.bJA,w,D.bLx,new A.b9(v,B.a1),w,w)},
$S:18}
C.dBM.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dBN.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dBY.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dBZ.prototype={
$1(d){var w=this.a
return w.l(new C.dBX(w,d))},
$S:z+49}
C.dBX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dC_.prototype={
$1(d){var w=null
return A.qY(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dC2.prototype={
$1(d){var w=this.a
return w.l(new C.dBW(w,d))},
$S:37}
C.dBW.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dC1.prototype={
$1(d){var w=null
return A.qY(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dC3.prototype={
$1(d){var w=this.a
return w.l(new C.dBV(w,d))},
$S:37}
C.dBV.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dC4.prototype={
$0(){var w=this.a
return w.l(new C.dBU(w))},
$S:0}
C.dBU.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dC5.prototype={
$0(){var w=this.a
return w.l(new C.dBT(w))},
$S:0}
C.dBT.prototype={
$0(){return++this.a.at},
$S:0}
C.dC6.prototype={
$0(){var w=this.a
return w.l(new C.dBS(w))},
$S:0}
C.dBS.prototype={
$0(){return--this.a.ax},
$S:0}
C.dC7.prototype={
$0(){var w=this.a
return w.l(new C.dBR(w))},
$S:0}
C.dBR.prototype={
$0(){return++this.a.ax},
$S:0}
C.dC8.prototype={
$1(d){var w=this.a
return w.l(new C.dBQ(w,d))},
$S:9}
C.dBQ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dC0.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dC9.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bU.j(0.18)
else w=q.c.a?B.el:B.c
v=A.m(12)
if(p)u=B.bU
else u=(q.c.a?B.eo:B.bP).j(0.85)
u=A.K(u,B.r,p?1.5:1)
if(p)t=B.bU
else t=q.c.a?B.bv:B.bl
t=A.V(f,t,r,r,r,18)
if(p)s=B.bU
else s=q.c.a?B.bv:B.bl
return A.E(A.aE(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cY(r,A.w(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.aZ,new A.o(w,r,u,v,r,r,B.m),B.eK,r,r,r,r,B.jD,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dCa(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dCa.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dCj.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.chU.prototype={
$2(d,e){return new A.bw(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:102}
C.ci0.prototype={
$1(d){return d.ak()},
$S:z+5}
C.ci1.prototype={
$2(d,e){var w=J.b8(e,new C.ci_(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bw(d,w,x.d2)},
$S:z+53}
C.ci_.prototype={
$1(d){return d.ak()},
$S:z+12}
C.chW.prototype={
$1(d){return C.ant(A.a0(d,x.N,x.z))},
$S:z+9}
C.chX.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.chY.prototype={
$1(d){return C.hxC(A.a0(d,x.N,x.z))},
$S:z+11}
C.chZ.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ci5.prototype={
$1(d){return new A.aJs(d.f.length,d.a,d.b)},
$S:z+55}
C.ci6.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:690}
C.ci2.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.ci3.prototype={
$1(d){return d.cSB(C.HH(d,this.a))},
$S:z+85}
C.e8i.prototype={
$1(d){return C.uK(d,this.a.a.c)},
$S:z+3}
C.e8j.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e8n.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e8o.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e8f.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3c(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zq("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pS(r.c,r.e),$async$$0)
case 4:s.zq(p)
w=5
return A.b(s.KN(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e8g.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3c(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zq("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pS(r.c,r.e),$async$$0)
case 4:s.zq(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e8h.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.X5(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zq("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zq("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zq("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.KN(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.zq(B.a.eq(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e8m.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3b(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zq("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a8(r,!1).ca(A.e7(new C.e8l(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pS(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e8l.prototype={
$1(d){var w=this.b
return new C.a1o(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e8k.prototype={
$1(d){return D.hTs},
$S:z+58}
C.e8q.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e8r.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e8p(w,d)
return new A.C(B.d2,new C.biU(this.b,d.c,d.a,w,null),null)},
$S:2038}
C.e8p.prototype={
$0(){return this.a.Zf(this.b.b)},
$S:0}
C.e8a.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e8b.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e8c.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e8d.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e8e.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e8s.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Y(s,"NGMYFTSYNC2"))t=!A.d_(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a8(this.b,!1).N(s)
return}},
$S:212}
C.dUd.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dUe.prototype={
$0(){return B.d.gG(D.a85)},
$S:z+60}
C.dUf.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.dfH,44),w,w,w),w,w,new C.bnM(u,t,v,w),B.aA)},
$S:52}
C.h8x.prototype={
$1(d){return A.of(new C.h8w(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:136}
C.h8w.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.el:B.c,p=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.ui,24)],x.V),o=r?B.eo:B.bP
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bU.j(0.18)],x.O)
w=A.p(t,D.c0J,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a6(B.a5,B.a9,B.w,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.ax,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.w(A.a([B.S,o,new A.C(E.ap_,A.A(A.a([w,B.bc,A.E(A.w(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.iL(!0,t,e,B.y,D.fzN,new C.h8v(this.b,s),20,B.aou,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.o(q,t,t,B.lu,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:117}
C.h8v.prototype={
$2(d,e){var w=null,v=D.a85[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.K(s?B.eo:B.bP,B.r,1),q=A.a([new A.aa(0,B.H,B.v.j(s?0.35:0.08),B.eE,8)],x.V),p=A.m(15),o=A.E(new C.a8j(v.a,!0,w),1),n=s?B.kd:B.iL,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.ax,w,w,w,w,w,w,w,w,13,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aE(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eL(A.bv(p,A.w(A.a([o,A.p(w,A.w(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.iP,w,w,w)],l),B.al,w,B.e,B.h,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h8u(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:80}
C.h8u.prototype={
$0(){A.a8(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.crQ.prototype={
$0(){return this.a.aiI(this.b)},
$S:0}
C.h7U.prototype={
$1(d){return D.hNX},
$S:z+61}
C.hfK.prototype={
$1(d){var w=this
return new C.a3d(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.h7Y.prototype={
$1(d){return new C.a01(this.a,null)},
$S:z+63}
C.h7X.prototype={
$1(d){return D.hOY},
$S:z+64}
C.dcG.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dcH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dcF(w,d))},
$S:37}
C.dcF.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dcI.prototype={
$1(d){return this.a.Lq()},
$S:2}
C.dcJ.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dcC.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dcD.prototype={
$1(d){return this.a.Lq()},
$S:2}
C.dcE.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cKa.prototype={
$0(){},
$S:0}
C.cKg.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cKh.prototype={
$0(){return this.a.aSq(-1)},
$S:0}
C.cKi.prototype={
$1(d){return this.a.l(new C.cKf())},
$S:2}
C.cKf.prototype={
$0(){},
$S:0}
C.cKj.prototype={
$0(){return this.a.aSq(1)},
$S:0}
C.cKk.prototype={
$1(d){return this.a.l(new C.cKe())},
$S:2}
C.cKe.prototype={
$0(){},
$S:0}
C.cKl.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.eo:B.bP
return A.vc(u,u,B.b5,r,u,new C.cKd(t,d),B.xf,s,w,u,new A.ax(v,1,B.r,-1),B.cp)},
$S:2039}
C.cKd.prototype={
$1(d){var w=this.a
return w.l(new C.cKb(w,this.b))},
$S:9}
C.cKb.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cKm.prototype={
$1(d){return this.a.l(new C.cKc())},
$S:2}
C.cKc.prototype={
$0(){},
$S:0}
C.cKn.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fvP.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a8(this.b,!1).N(w)},
$S:2}
C.fvQ.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fvR.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a8(this.b,!1).N(w)},
$S:0}
C.fvN.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbFe()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b4(new A.C(D.bLw,new A.e9(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bAF(p,v,this.b.a,u,t,r),r,r,B.aA)},
$S:52}
C.fvO.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=B.dQ.aA(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ap(B.aW,B.bU,w)
s.toString
s=A.a([B.b5,s,B.aW],x.O)
return A.aE(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eL(D.eHt,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a6(new A.di(-1.2+t,-0.5),new A.di(1.2-t,0.8),B.w,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:146}
C.h6a.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:59}
C.f3a.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f31.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f32.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f38.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.eb(new C.f37(w,this.b),null)},
$S:20}
C.f37.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.el:B.c,t=A.m(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.ez(w,u,new A.C(B.aoT,A.w(A.a([s,B.aj,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hDM(new C.f34(r,e),r.a),B.aB,A.A(A.a([A.E(A.dU(B.dx,new C.f35(d),w),1),B.ar,A.E(A.bH(B.Xv,w,new C.f36(r,d),A.bp(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.al,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.da,w,new A.b9(t,B.a1),w)},
$S:106}
C.f34.prototype={
$1(d){return this.b.$1(new C.f33(this.a,d))},
$S:37}
C.f33.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f35.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f36.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.f39.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.Um(this.b)},
$S:0}
C.f2X.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bhb(w)},
$S:0}
C.f30.prototype={
$1(d){return this.bqw(d)},
bqw(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.MB(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j2(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f3_.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.f2Z(this.b),v),v.k("M.E"))
u.d=t.bhb(w)},
$S:0}
C.f2Z.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f3b.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j2(this.b,w)},
$S:0}
C.f3c.prototype={
$1(d){return this.a.bJu(d,this.b)},
$S:z+67}
C.f2Y.prototype={
$0(){return this.a.acg(this.b)},
$S:0}
C.hfx.prototype={
$1(d){return new C.afM(this.a,this.b,this.c,null)},
$S:z+68}
C.f3e.prototype={
$0(){return this.a.a1l(this.b)},
$S:0}
C.f3f.prototype={
$0(){return this.a.RB(this.b)},
$S:0}
C.f3g.prototype={
$0(){return this.a.Fo(this.b)},
$S:0}
C.f3h.prototype={
$0(){return this.a.a1m(this.b)},
$S:0}
C.f3d.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f2S.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f2T.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f2U.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f2W.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qz(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f2V(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f2V.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f3E.prototype={
$2(d,e){return d+e.gxW()},
$S:z+71}
C.f3A.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f3B.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f3l.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.el:B.c,s=A.m(24),r=A.p(v,D.c1c,B.f,v,v,new A.o(B.aC.j(u?0.18:0.08),v,A.K(B.aC.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.ax
u=u?B.eo:B.bP
w=x.p
return A.ez(v,t,new A.C(B.xe,A.w(A.a([r,B.aN,q,B.N,p,B.df,A.A(A.a([A.E(A.dU(B.ov,new C.f3j(d),A.dh(v,v,v,v,v,v,v,v,v,o,v,v,B.fb,v,new A.b9(A.m(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bH(D.hjb,v,new C.f3k(d),A.bp(B.aC,v,v,v,v,v,B.fb,v,new A.b9(A.m(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,v,B.da,v,new A.b9(s,B.a1),v)},
$S:46}
C.f3j.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.f3k.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.f3u.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.el:B.c,i=A.m(28),h=A.a([new A.aa(0,B.H,B.v.j(k?0.35:0.08),B.fF,28)],x.V),g=k?D.dnG:As.a7o,f=x.p
g=A.p(m,A.w(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aB,D.fsU,B.at,new A.bL(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cF,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a6(B.aw,B.aD,B.w,g,m,m),B.m),m,m,m,m,E.aoY,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.ba0(B.b_,B.jJ,new C.f3r(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.ba0(B.cI,Q.Ai,new C.f3s(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aC.j(k?0.14:0.06)
q=A.m(16)
p=A.K(B.aC.j(0.28),B.r,1)
o=A.p(m,D.c0v,B.f,m,m,new A.o(B.aC.j(0.12),m,m,A.m(12),m,m,B.m),m,m,m,m,B.bS,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.ax,m,m,m,m,m,m,m,m,m,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.h,0,B.p),1)
return A.bo(!0,new A.C(B.x7,A.p(m,A.w(A.a([g,new A.C(B.aoU,A.w(A.a([w,B.S,u,B.bx,t,B.S,A.aE(!1,B.a3,!0,m,A.aM(!1,s,!0,A.p(m,A.A(A.a([o,B.bc,n,A.V(B.eL,k?B.bv:B.bl,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.m),m,m,m,m,B.bD,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f3t(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:29}
C.f3r.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.wg("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f3s.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.wg("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f3t.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.P8(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f3p.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.el:B.c,m=A.m(24),l=A.a([new A.aa(0,B.H,B.v.j(o?0.35:0.08),B.eP,24)],x.V),k=o?B.eo:B.bP
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bv:B.bl
u=A.bv(w,new A.a4(48,48,C.aU5(!0,A.m(12),48,P.Qh,u,v.c,48),q),B.ap)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BC(v.gxW())
s=x.p
r=this.a
return A.bo(!0,new A.C(B.x7,A.p(q,A.w(A.a([B.S,k,new A.C(D.aoR,A.A(A.a([u,B.bc,A.E(A.w(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.CY,r.cuq(B.vJ,B.aW,new C.f3n(d),p,"QR code or backup file","Transfer project"),r.b6Z(!0,B.eq,B.aC,new C.f3o(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:29}
C.f3n.prototype={
$0(){A.a8(this.a,!1).N("transfer")
return null},
$S:0}
C.f3o.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
C.f3q.prototype={
$1(d){return this.bqx(d)},
bqx(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.MB(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wx(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f3H.prototype={
$0(){var w=this.a
w.a.bw()
w.l(new C.f3G(w))},
$S:0}
C.f3G.prototype={
$0(){return this.a.r++},
$S:0}
C.f3I.prototype={
$0(){var w=this.a
return w.l(new C.f3F(w))},
$S:0}
C.f3F.prototype={
$0(){return this.a.r++},
$S:0}
C.f3i.prototype={
$0(){var w=this.a.c
w.toString
return A.j2(w,null)},
$S:0}
C.f3m.prototype={
$0(){return this.a.cns(this.b)},
$S:0}
C.f3D.prototype={
$0(){var w=this.a
return w.l(new C.f3C(w,this.b))},
$S:0}
C.f3C.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f3x.prototype={
$0(){return this.a.wg("scan")},
$S:0}
C.f3y.prototype={
$0(){return this.a.wg("file")},
$S:0}
C.f3z.prototype={
$1(d){return this.a.cur(d,this.b)},
$S:z+72}
C.f3w.prototype={
$0(){return this.a.Fs(this.b)},
$S:0}
C.f3v.prototype={
$0(){return this.a.a1S(this.b,this.c)},
$S:0}
C.cJw.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cJv.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cJt.prototype={
$1(d){return C.hZi(A.a0(d,x.N,x.z))},
$S:z+75}
C.cJu.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fQd.prototype={
$1(d){return d.y===D.le},
$S:z+3}
C.hgj.prototype={
$1(d){return C.aSH(d,this.a)},
$S:z+3}
C.fNI.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bVw.prototype={
$1(d){return!d.as},
$S:z+1}
C.bVv.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bVs.prototype={
$1(d){return C.hxE(A.a0(d,x.N,x.z))},
$S:z+24}
C.bVt.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bVu.prototype={
$1(d){return J.k(d)},
$S:15}
C.fDL.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fzh.prototype={
$1(d){return C.hmY(A.a0(d,x.N,x.z))},
$S:z+79}
C.fzi.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fzj.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h7I.prototype={
$1(d){return J.k(d)},
$S:15}
C.h7J.prototype={
$1(d){return d.a},
$S:z+81}
C.h7K.prototype={
$1(d){return d.length!==0},
$S:3}
C.h7L.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h7M.prototype={
$1(d){return d.Um(null).ak()},
$S:z+82}
C.hgh.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fQH.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fTW.prototype={
$1(d){return C.ant(A.a0(d,x.N,x.z))},
$S:z+9}
C.fTX.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fTY.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fTZ.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fU_.prototype={
$1(d){return C.uK(d,this.a)},
$S:z+3}
C.h7v.prototype={
$1(d){return C.uK(d,this.a)},
$S:z+3}
C.hgc.prototype={
$1(d){return C.ant(A.a0(d,x.N,x.z))},
$S:z+9}
C.hgd.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.hge.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fQo.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fQp.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hgn.prototype={
$1(d){return!d.as},
$S:z+1}
C.fPT.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fPU.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fPV.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.hfL.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fUN.prototype={
$1(d){return d.Q},
$S:z+15}
C.h7o.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fTT.prototype={
$1(d){return C.ant(A.a0(d,x.N,x.z))},
$S:z+9}
C.fTU.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fTV.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h7j.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fzR.prototype={
$1(d){return d.length!==0},
$S:3}
C.fzS.prototype={
$1(d){return C.hxE(A.a0(d,x.N,x.z))},
$S:z+24}
C.fzT.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fzU.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fzV.prototype={
$1(d){return d.length!==0},
$S:3}
C.fA7.prototype={
$2(d,e){return d.eD(new C.fA8(e))},
$S:2040}
C.fA8.prototype={
$1(d){$.an.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.co},
$S:2041}
C.fA4.prototype={
$1(d){return C.ilv(d,this.a)},
$S:z+84}
C.fA5.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fA6.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fEw.prototype={
$1(d){return d.a},
$S:z+56}
C.fEx.prototype={
$1(d){return d.length!==0},
$S:3}
C.fEy.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fHy.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fMW.prototype={
$1(d){return C.hJt(d,C.HH(d,this.a))},
$S:z+5}
C.fMX.prototype={
$1(d){return C.hJu(d,C.HH(d,this.a))},
$S:z+5};(function aliases(){var w=C.aD4.prototype
w.byq=w.t
w=C.aBd.prototype
w.byl=w.t
w=C.aIF.prototype
w.byO=w.t
w=C.aD5.prototype
w.byr=w.t
w=C.aD7.prototype
w.bys=w.t
w=C.aD8.prototype
w.byt=w.t
w=C.aOT.prototype
w.bBh=w.t
w=C.aR0.prototype
w.bDC=w.t
w=C.aR1.prototype
w.bDD=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aG6.prototype,"gcrd","cre",28)
var r
w(r=C.aD3.prototype,"gcjO","cjP",65)
v(r,"gaQB","OF",0)
v(r,"gczO","BR",0)
v(r,"gbRs","Pn",0)
v(r,"gcOC","zr",0)
v(r,"gctn","a2B",0)
v(r,"gbML","P4",0)
v(r,"gbRS","YG",0)
w(r,"gbWZ","bX_",78)
v(r,"gbGV","AJ",0)
v(C.aD6.prototype,"gcOy","Gl",0)
v(r=C.ani.prototype,"gbuL","buM",2)
v(r,"gbuD","buE",2)
v(r,"gcPF","cPG",2)
u(r,"gqt","kM",0)
u(r=C.als.prototype,"gf1","fS",2)
w(r,"gckR","ckS",27)
u(C.awj.prototype,"gqt","kM",0)
v(r=C.aAf.prototype,"gd0j","d0k",2)
u(r,"gqt","kM",0)
u(C.aMw.prototype,"gbuJ","buK",2)
v(C.anr.prototype,"gCo","cPS",2)
u(r=C.anp.prototype,"gcQz","cQA",2)
u(r,"gqt","kM",0)
v(r=C.anl.prototype,"gbtB","btC",2)
v(r,"gcVK","cVL",2)
u(r=C.ann.prototype,"gf1","fS",2)
u(r,"giA","cPb",2)
v(r=C.anj.prototype,"gcP0","cP1",2)
u(r,"gbst","jJ",2)
v(r=C.aGH.prototype,"gaij","wy",0)
v(r,"gcmE","a1J",0)
v(r,"gaUS","IZ",0)
v(r=C.aGE.prototype,"gcKq","a4N",0)
v(r,"gaij","wy",0)
v(r,"gcxL","a3g",0)
v(r,"gcmw","b59",2)
v(r,"gcnF","a1X",0)
w(r,"gcjI","cjJ",35)
v(r,"gbRK","J3",0)
v(r,"gcLz","cLA",2)
v(r,"gc98","a_t",0)
w(r,"gcic","cid",36)
v(r,"gcmj","cmk",2)
v(r=C.aF4.prototype,"gcfj","R4",0)
v(r,"gcfl","cfm",2)
v(r,"gbOf","abT",0)
v(r=C.aGG.prototype,"gbVl","Zb",0)
v(r,"gc4X","ZS",0)
v(r,"gcEn","a4a",0)
v(r,"gcAp","a3K",0)
v(C.aGF.prototype,"gcA6","ak7",0)
v(C.avw.prototype,"gcia","a1j",0)
v(C.aBN.prototype,"ga4w","Lq",2)
v(C.aBM.prototype,"ga4w","Lq",2)
v(C.aAr.prototype,"ga4w","Lq",2)
v(r=C.aIf.prototype,"gb6m","S8",0)
v(r,"gbFJ","Xh",0)
v(r,"gcnt","cnu",2)
w(C.aIe.prototype,"gcj2","cj3",69)
t(C.aIg.prototype,"gaUN",0,0,null,["$1","$0"],["IY","bPA"],70,0,0)
s(C,"hS5","ivy",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aG,[C.ar3,C.v9,C.nL,C.IM,C.ah_,C.L8,C.va,C.bW1,C.tr,C.brj,C.anA,C.af3,C.lN,C.bUD,C.avI,C.zT,C.am8,C.Nd,C.bcz,C.ab5,C.bjZ,C.ah6,C.aBt,C.agV,C.aMw,C.Lf,C.H_,C.biS,C.aMq,C.asr,C.dlC,C.mh,C.aX3,C.aX2,C.aV5,C.uu,C.rG,C.m_,C.ic,C.le,C.aKm])
u(A.hq,[C.fYO,C.fYN,C.fYP,C.h8q,C.fLy,C.fLz,C.fLE,C.fWs,C.fWr,C.fWq,C.caQ,C.h8Y,C.h8Q,C.h91,C.fQw,C.dUV,C.dUQ,C.dUR,C.dUt,C.dUp,C.dV9,C.dVa,C.dV3,C.dV4,C.dVb,C.dVc,C.fRh,C.fTQ,C.fTR,C.h7t,C.hgb,C.fQn,C.h83,C.dkP,C.dkb,C.dkk,C.dkB,C.dkg,C.dkm,C.dkd,C.dkq,C.dkr,C.dkp,C.dkG,C.dkF,C.dmC,C.dmD,C.dmE,C.dl2,C.dl7,C.dl6,C.cSR,C.cST,C.dbU,C.dci,C.dcj,C.dcm,C.dco,C.dcp,C.dcq,C.dcs,C.dct,C.bUn,C.bUh,C.fEd,C.hg3,C.hg4,C.hg5,C.hg0,C.hg6,C.hg7,C.hg8,C.hg_,C.fRV,C.h6n,C.fNJ,C.fUM,C.bPp,C.hgt,C.h7_,C.bNy,C.bNt,C.bNv,C.bNu,C.ctw,C.ctr,C.cts,C.ctq,C.cto,C.ctt,C.cTV,C.cIv,C.cIy,C.cIw,C.cIz,C.cIA,C.fgg,C.fqJ,C.bV9,C.bV3,C.bV7,C.bUL,C.e6R,C.e6O,C.e6P,C.e6N,C.e6T,C.bV1,C.bUS,C.bUC,C.bUB,C.bUx,C.bUy,C.bUz,C.bUA,C.e8w,C.e7W,C.e7R,C.e7i,C.e7y,C.e7B,C.e7x,C.e7w,C.e7N,C.e7O,C.e7I,C.e76,C.e7Z,C.e7T,C.e78,C.e79,C.e7a,C.e7f,C.e7d,C.e7c,C.e7s,C.e7t,C.e7n,C.e85,C.e81,C.dld,C.dle,C.fRl,C.fRm,C.fRn,C.fRj,C.fRk,C.fRq,C.fRr,C.fRs,C.fRo,C.fRp,C.dlx,C.dln,C.dli,C.dls,C.dlt,C.dlw,C.dlk,C.dlz,C.dlA,C.dlB,C.fwj,C.f60,C.dBO,C.dBY,C.dBZ,C.dC_,C.dC2,C.dC1,C.dC3,C.dC8,C.dC9,C.ci0,C.ci_,C.chW,C.chX,C.chY,C.chZ,C.ci5,C.ci2,C.ci3,C.e8i,C.e8l,C.e8k,C.e8r,C.e8s,C.dUd,C.h8x,C.h7U,C.hfK,C.h7Y,C.h7X,C.dcH,C.dcI,C.dcD,C.cKi,C.cKk,C.cKl,C.cKd,C.cKm,C.fvP,C.h6a,C.f38,C.f34,C.f30,C.f2Z,C.f3c,C.hfx,C.f3l,C.f3u,C.f3p,C.f3q,C.f3z,C.cJv,C.cJt,C.cJu,C.fQd,C.hgj,C.fNI,C.bVw,C.bVv,C.bVs,C.bVt,C.bVu,C.fzh,C.fzi,C.h7I,C.h7J,C.h7K,C.h7L,C.h7M,C.hgh,C.fQH,C.fTW,C.fTX,C.fTZ,C.fU_,C.h7v,C.hgc,C.hgd,C.hge,C.fQo,C.fQp,C.hgn,C.fPT,C.fPU,C.hfL,C.fUN,C.h7o,C.fTT,C.fTU,C.h7j,C.fzR,C.fzS,C.fzT,C.fzU,C.fzV,C.fA8,C.fA4,C.fA5,C.fEw,C.fEx,C.fHy,C.fMW,C.fMX])
u(A.aw,[C.b1H,C.ang,C.aYm,C.a_E,C.bep,C.Rj,C.a7x,C.tR,C.IO,C.biQ,C.bmF,C.bAQ,C.bq1,C.afq,C.bmE,C.afp,C.bmD,C.aF5,C.aLs,C.afr,C.GW,C.biR,C.aeF,C.biP,C.biU,C.b1F,C.avw,C.afM])
u(A.lM,[C.bf4,C.bgj,C.bga,C.aKg,C.blG,C.bri,C.aYr,C.bf6,C.aD2,C.bey,C.bvq,C.blO,C.bld,C.blk,C.biT,C.bhT,C.bnM,C.bAF])
u(A.iV,[C.h8V,C.h8W,C.h8X,C.h8O,C.h8P,C.h9_,C.h90,C.dV6,C.dUT,C.dUW,C.dUA,C.dUB,C.dUC,C.dUz,C.dUH,C.dUy,C.dUI,C.dUJ,C.dUx,C.dUK,C.dUw,C.dUL,C.dUv,C.dUM,C.dUn,C.dUo,C.dUu,C.dUN,C.dUs,C.dUO,C.dUr,C.dUD,C.dUq,C.dUE,C.dUm,C.dUF,C.dUG,C.dV7,C.dV8,C.dUX,C.dUY,C.dUZ,C.dV_,C.dV0,C.dV1,C.dV2,C.dVe,C.dV5,C.fRi,C.dk9,C.dk7,C.dk8,C.dka,C.dkO,C.dkD,C.dkA,C.dkc,C.dkE,C.dki,C.dkj,C.dkl,C.dkC,C.dkh,C.dkn,C.dkL,C.dkx,C.dkw,C.dky,C.dkz,C.dks,C.dku,C.dkv,C.dko,C.dkH,C.dkK,C.dke,C.dkf,C.dmB,C.dmA,C.dmz,C.dmy,C.dmF,C.dmx,C.dmG,C.dl3,C.dl4,C.dl5,C.dl8,C.dl1,C.dl0,C.cSS,C.dbT,C.dc5,C.dc4,C.dck,C.dc3,C.dcl,C.dc2,C.dc1,C.dcn,C.dc0,C.dcd,C.dcc,C.dcu,C.bUg,C.bUq,C.bUi,C.bUj,C.bUm,C.bUl,C.bUo,C.bUp,C.bUk,C.bUe,C.bUf,C.bVU,C.bVV,C.bVW,C.bVX,C.bVY,C.bVZ,C.bW_,C.hg2,C.h6o,C.bNx,C.bNs,C.bNq,C.bNr,C.bNp,C.cty,C.ctz,C.ctx,C.ctA,C.ctC,C.ctD,C.ctE,C.ctu,C.cIu,C.cID,C.cIE,C.cIF,C.cIC,C.cIG,C.cIH,C.cII,C.cIJ,C.cIx,C.cIB,C.bVp,C.bVo,C.bVm,C.bVk,C.bVl,C.bVh,C.bVi,C.bVj,C.bVn,C.bVg,C.fgh,C.fgi,C.fgj,C.fgk,C.fgl,C.bVd,C.bVe,C.bVf,C.bV8,C.bVa,C.bVb,C.bVc,C.bV4,C.bUP,C.bUO,C.bUN,C.bUH,C.bUI,C.bUM,C.bUJ,C.bUK,C.bUG,C.e6Q,C.e6S,C.e6L,C.e6M,C.e6K,C.e6U,C.e6V,C.e6W,C.e6Z,C.e7_,C.e70,C.e71,C.e72,C.e73,C.e74,C.e75,C.e6X,C.e6Y,C.bV0,C.bV_,C.bUR,C.bUQ,C.bUX,C.bUY,C.bUU,C.bUV,C.bUW,C.bUT,C.bUr,C.bUs,C.bUw,C.bUv,C.bUu,C.bUt,C.e8v,C.e8u,C.e8x,C.e8y,C.e8z,C.e8t,C.e8B,C.e8A,C.e7U,C.e7V,C.e7X,C.e7j,C.e7A,C.e7z,C.e7C,C.e7Q,C.e7v,C.e7G,C.e7H,C.e7F,C.e7D,C.e7E,C.e7J,C.e7K,C.e7L,C.e7P,C.e77,C.e7S,C.e7b,C.e7e,C.e7g,C.e7Y,C.e7m,C.e7k,C.e7o,C.e7p,C.e7l,C.e7q,C.e7u,C.e86,C.e87,C.e8_,C.e82,C.e83,C.e84,C.e89,C.e80,C.e7h,C.dlc,C.dlb,C.dlg,C.dlq,C.dlh,C.f6_,C.dBP,C.dBM,C.dBN,C.dBX,C.dBW,C.dBV,C.dC4,C.dBU,C.dC5,C.dBT,C.dC6,C.dBS,C.dC7,C.dBR,C.dBQ,C.dC0,C.dCa,C.dCj,C.e8j,C.e8n,C.e8o,C.e8f,C.e8g,C.e8h,C.e8m,C.e8q,C.e8p,C.e8a,C.e8b,C.e8c,C.e8d,C.e8e,C.dUe,C.h8u,C.crQ,C.dcG,C.dcF,C.dcJ,C.dcC,C.dcE,C.cKa,C.cKg,C.cKh,C.cKf,C.cKj,C.cKe,C.cKb,C.cKc,C.cKn,C.fvQ,C.fvR,C.f3a,C.f31,C.f32,C.f33,C.f35,C.f36,C.f39,C.f2X,C.f3_,C.f3b,C.f2Y,C.f3e,C.f3f,C.f3g,C.f3h,C.f3d,C.f2S,C.f2T,C.f2U,C.f2W,C.f2V,C.f3A,C.f3B,C.f3j,C.f3k,C.f3r,C.f3s,C.f3t,C.f3n,C.f3o,C.f3H,C.f3G,C.f3I,C.f3F,C.f3i,C.f3m,C.f3D,C.f3C,C.f3x,C.f3y,C.f3w,C.f3v])
u(A.af,[C.arg,C.UG,C.a0p,C.a0t,C.a0r,C.a0_,C.anh,C.alr,C.awi,C.aAe,C.anq,C.ano,C.ank,C.X2,C.anm,C.UH,C.asu,C.aso,C.a14,C.ass,C.a1o,C.a1p,C.a8j,C.a01,C.a00,C.a_u,C.a3d,C.GL,C.aAk,C.avv,C.avp,C.avu,C.Py])
u(A.ah,[C.aG6,C.biK,C.aD3,C.bj8,C.aD6,C.bgh,C.aD4,C.aBd,C.aIF,C.aAf,C.aD8,C.aD7,C.aD5,C.bo7,C.ann,C.anj,C.aGH,C.aGE,C.aF4,C.aGG,C.aGF,C.bo8,C.aOT,C.aBN,C.aBM,C.aAr,C.bAI,C.aR0,C.aR1,C.aIf,C.bpx,C.aIe,C.bCu])
u(A.iW,[C.dUS,C.dUU,C.dUP,C.dVd,C.fTS,C.bUd,C.dkN,C.dkM,C.dkt,C.dkI,C.dkJ,C.dl9,C.bW0,C.bVT,C.bUE,C.bUF,C.hg1,C.hgs,C.bNw,C.ctB,C.ctv,C.ctp,C.fgm,C.bV2,C.bV5,C.bV6,C.dw2,C.bUZ,C.e7M,C.e7r,C.e88,C.dlp,C.dlo,C.dlm,C.dlr,C.dlu,C.dlv,C.dlf,C.dlj,C.dll,C.dly,C.chU,C.ci1,C.ci6,C.dUf,C.h8w,C.h8v,C.fvN,C.fvO,C.f37,C.f3E,C.cJw,C.fDL,C.fzj,C.fTY,C.fPV,C.fTV,C.fA7,C.fA6,C.fEy])
u(A.lk,[C.a2I,C.ah8,C.a31,C.a0R,C.adG,C.aNd,C.IN,C.ans,C.cJx,C.cJy])
t(C.ani,C.aD4)
t(C.als,C.aBd)
t(C.awj,C.aIF)
t(C.biO,C.aD8)
t(C.anr,C.biO)
t(C.biN,C.aD7)
t(C.anp,C.biN)
t(C.biM,C.aD5)
t(C.anl,C.biM)
t(C.bnN,C.aOT)
t(C.bAG,C.aR0)
t(C.bAH,C.aR1)
t(C.aIg,C.bCu)
t(C.bcN,A.bcA)
t(C.bAJ,A.a7Y)
t(C.bcM,C.bAJ)
w(C.aD4,A.cj)
w(C.aBd,A.cj)
w(C.aIF,A.eY)
w(C.aD5,A.cj)
v(C.biM,C.agV)
w(C.aD7,A.cj)
v(C.biN,C.agV)
w(C.aD8,A.cj)
v(C.biO,C.agV)
w(C.aOT,A.eY)
w(C.aR0,A.cj)
w(C.aR1,A.cj)
v(C.bCu,A.eE)
v(C.bAJ,A.jy)})()
A.jd(b.typeUniverse,JSON.parse('{"b1H":{"aw":[],"x":[]},"bf4":{"aC":[]},"arg":{"af":[],"x":[]},"aG6":{"ah":["arg"]},"UG":{"af":[],"x":[]},"ang":{"aw":[],"x":[]},"aYm":{"aw":[],"x":[]},"biK":{"ah":["UG"]},"a0p":{"af":[],"x":[]},"a0t":{"af":[],"x":[]},"a0r":{"af":[],"x":[]},"a0_":{"af":[],"x":[]},"aD3":{"ah":["a0p"]},"bj8":{"ah":["a0t"]},"aD6":{"ah":["a0r"]},"a_E":{"aw":[],"x":[]},"bgj":{"aC":[]},"bga":{"aC":[]},"bgh":{"ah":["a0_"]},"aKg":{"aC":[]},"blG":{"aC":[]},"bep":{"aw":[],"x":[]},"anh":{"af":[],"x":[]},"ani":{"ah":["anh"]},"bri":{"aC":[]},"aYr":{"aC":[]},"alr":{"af":[],"x":[]},"awi":{"af":[],"x":[]},"aAe":{"af":[],"x":[]},"als":{"ah":["alr"]},"bf6":{"aC":[]},"Rj":{"aw":[],"x":[]},"aD2":{"aC":[]},"awj":{"ah":["awi"]},"bey":{"aC":[]},"aAf":{"ah":["aAe"]},"anq":{"af":[],"x":[]},"ano":{"af":[],"x":[]},"ank":{"af":[],"x":[]},"anr":{"ah":["anq"]},"bvq":{"aC":[]},"anp":{"ah":["ano"]},"blO":{"aC":[]},"anl":{"ah":["ank"]},"bld":{"aC":[]},"X2":{"af":[],"x":[]},"anm":{"af":[],"x":[]},"UH":{"af":[],"x":[]},"a7x":{"aw":[],"x":[]},"blk":{"aC":[]},"tR":{"aw":[],"x":[]},"IO":{"aw":[],"x":[]},"bo7":{"ah":["X2"]},"ann":{"ah":["anm"]},"anj":{"ah":["UH"]},"asu":{"af":[],"x":[]},"aso":{"af":[],"x":[]},"a14":{"af":[],"x":[]},"afr":{"aw":[],"x":[]},"aGH":{"ah":["asu"]},"aGE":{"ah":["aso"]},"biQ":{"aw":[],"x":[]},"biT":{"aC":[]},"bmF":{"aw":[],"x":[]},"bhT":{"aC":[]},"bAQ":{"aw":[],"x":[]},"bq1":{"aw":[],"x":[]},"aF4":{"ah":["a14"]},"afq":{"aw":[],"x":[]},"bmE":{"aw":[],"x":[]},"afp":{"aw":[],"x":[]},"bmD":{"aw":[],"x":[]},"aF5":{"aw":[],"x":[]},"aLs":{"aw":[],"x":[]},"GW":{"aw":[],"x":[]},"ass":{"af":[],"x":[]},"a1o":{"af":[],"x":[]},"a1p":{"af":[],"x":[]},"aGG":{"ah":["ass"]},"biR":{"aw":[],"x":[]},"aeF":{"aw":[],"x":[]},"biP":{"aw":[],"x":[]},"biU":{"aw":[],"x":[]},"aGF":{"ah":["a1o"]},"bo8":{"ah":["a1p"]},"b1F":{"aw":[],"x":[]},"a8j":{"af":[],"x":[]},"bnN":{"ah":["a8j"]},"bnM":{"aC":[]},"avw":{"aw":[],"x":[]},"a01":{"af":[],"x":[]},"a00":{"af":[],"x":[]},"a_u":{"af":[],"x":[]},"a3d":{"af":[],"x":[]},"aBN":{"ah":["a01"]},"aBM":{"ah":["a00"]},"aAr":{"ah":["a_u"]},"bAI":{"ah":["a3d"]},"GL":{"af":[],"x":[]},"aAk":{"af":[],"x":[]},"bAG":{"ah":["GL"]},"bAH":{"ah":["aAk"]},"bAF":{"aC":[]},"avv":{"af":[],"x":[]},"aIf":{"ah":["avv"]},"afM":{"aw":[],"x":[]},"avp":{"af":[],"x":[]},"avu":{"af":[],"x":[]},"bpx":{"ah":["avp"]},"aIe":{"ah":["avu"]},"Py":{"af":[],"x":[]},"aIg":{"ah":["Py"],"eE":[]},"bcM":{"jy":[],"fr":[]}}'))
A.RT(b.typeUniverse,JSON.parse('{"agV":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aV5"),cq:w("mB"),Q:w("rG"),r:w("bn<n,n>"),c5:w("aX2"),dY:w("aX3"),fH:w("Nd"),de:w("am8"),dN:w("Nm<G>"),gc:w("EM<G>"),A:w("eP<n?>"),e:w("IM"),B:w("nL"),P:w("ic"),df:w("lN"),k:w("le"),x:w("az<~>"),U:w("N<a5k>"),V:w("N<aa>"),C:w("N<rG>"),O:w("N<u>"),c:w("N<Nd>"),b:w("N<am8>"),ac:w("N<eP<n?>>"),I:w("N<nL>"),u:w("N<ic>"),J:w("N<lN>"),_:w("N<le>"),cl:w("N<az<ai<a9<n,@>>>>"),R:w("N<mF>"),eU:w("N<ai<+(H,H)>>"),ez:w("N<a9<n,aG>>"),gE:w("N<a9<n,n>>"),Y:w("N<a9<n,@>>"),fD:w("N<n5>"),bp:w("N<p6>"),g:w("N<r>"),ar:w("N<avI>"),v:w("N<fZ>"),gy:w("N<ab5>"),L:w("N<+(n,n)>"),G:w("N<+(H,H)>"),E:w("N<+(H,~())>"),bd:w("N<+(n,G,P)>"),bF:w("N<+count,id,name(G,n,n)>"),F:w("N<d4>"),s:w("N<n>"),cF:w("N<au>"),aS:w("N<jn>"),dT:w("N<bcz>"),p:w("N<x>"),Z:w("N<fr>"),D:w("N<m_>"),h:w("N<aBt>"),cC:w("N<bjZ>"),fp:w("N<L8>"),M:w("N<Lf>"),gZ:w("N<aKm>"),gA:w("N<ah_>"),e4:w("N<ah6>"),dE:w("N<aMq>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<G>"),dS:w("N<aC?>"),d4:w("N<n?>"),eF:w("cB<ah<af>>"),d:w("ai<nL>"),do:w("ai<ic>"),cg:w("ai<lN>"),ax:w("ai<le>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(G,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<m_>"),j:w("ai<@>"),fK:w("bw<n,n>"),d2:w("bw<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("O<n,IP>"),cM:w("O<G,n>"),w:w("im"),g2:w("t1"),bV:w("ar3"),fL:w("cp"),K:w("aG"),dc:w("fZ"),fo:w("PV<G>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(P,G)"),d9:w("+dx,hidden(H,ai<ic>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),fT:w("iP<ic>"),ec:w("iP<n>"),gW:w("rn<H>"),X:w("bq<H>"),bW:w("dF"),W:w("bg<n>"),b4:w("bg<G>"),cI:w("ki<n>"),av:w("X<zT>"),cc:w("X<n>"),l:w("x"),gF:w("fr"),fA:w("m_"),dO:w("H_"),bw:w("afp<n?>"),cy:w("Lh"),q:w("l2"),y:w("P"),i:w("H"),z:w("@"),S:w("G"),eK:w("ai<le>?"),m:w("asr?"),cT:w("r?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),he:w("+qrPayload,token,usesRemaining(n,n,G)?"),gG:w("+members,trees,viewOnly(G,G,P)?"),az:w("ox?"),T:w("n?"),aD:w("dF?"),o:w("m_?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b8_=new A.bc(B.h4,B.bJ,B.h4,B.bJ)
D.afY=new A.bc(B.h4,B.i8,B.h4,B.i8)
D.b8e=new A.bc(B.jL,B.bJ,B.bJ,B.bJ)
D.b8i=new A.ax(B.cX,1.4,B.r,-1)
D.b8t=new A.ax(B.ac,1,B.r,-1)
D.agw=new A.aX(140,1/0,0,1/0)
D.b9N=new A.aX(0,1/0,64,1/0)
D.b9R=new A.aX(0,84,0,1/0)
D.agD=new A.aX(130,1/0,0,1/0)
D.aFj=w([B.mq,B.tq,B.c],x.O)
D.ccQ=new A.a6(B.aw,B.aD,B.w,D.aFj,null,null)
D.baD=new A.o(null,null,null,null,null,D.ccQ,B.m)
D.dn3=w([B.aW,B.bU],x.O)
D.cf1=new A.a6(B.aU,B.b1,B.w,D.dn3,null,null)
D.baY=new A.o(null,null,null,null,null,D.cf1,B.m)
D.ZR=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fL=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.drj=w([B.dD,D.ZR,D.fL],x.O)
D.cc0=new A.a6(B.aU,B.b1,B.w,D.drj,null,null)
D.bbI=new A.o(null,null,null,null,null,D.cc0,B.m)
D.fKF=new A.F(!0,B.bX,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hlI=new A.D("?",null,D.fKF,null,null,null,null,null,null,null,null,null)
D.bfy=new A.cn(B.z,null,null,D.hlI,null)
D.Xl=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3z=new A.D("\ud83c\udf33",null,D.Xl,null,null,null,null,null,null,null,null,null)
D.aho=new A.cn(B.z,null,null,D.h3z,null)
D.h6f=new A.D("\ud83c\udfc6",null,B.LN,null,null,null,null,null,null,null,null,null)
D.bfJ=new A.cn(B.z,null,null,D.h6f,null)
D.bhz=new A.fo(null,null,null,null,null,E.kI,null,null,null,null)
D.ahp=new A.cn(B.z,null,null,D.bhz,null)
D.l5=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fLd=new A.F(!0,D.l5,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5e=new A.D("No books on the shelf yet.",null,D.fLd,null,null,null,null,null,null,null,null,null)
D.eHu=new A.C(B.o8,D.h5e,null)
D.bg_=new A.cn(B.z,null,null,D.eHu,null)
D.fSv=new A.F(!0,D.fL,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hmG=new A.D("\ud83d\ude8c  On the road\u2026",null,D.fSv,null,null,null,null,null,null,null,null,null)
D.eI3=new A.C(B.cu,D.hmG,null)
D.bgs=new A.cn(B.z,null,null,D.eI3,null)
D.aZG=new A.D("\ud83e\uddfa",null,D.Xl,null,null,null,null,null,null,null,null,null)
D.bgH=new A.cn(B.z,null,null,D.aZG,null)
D.h8J=new A.D("\ud83c\udfad",null,D.Xl,null,null,null,null,null,null,null,null,null)
D.bgS=new A.cn(B.z,null,null,D.h8J,null)
D.bgV=new A.cn(B.z,null,null,A8.ZC,null)
D.ahJ=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ahQ=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bjb=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bjg=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bjs=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bju=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bjw=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bjE=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lW=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bjI=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bjN=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bjP=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bjQ=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lX=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bkt=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Cn=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bkC=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bkW=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bkZ=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bl4=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.blc=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aiv=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.blj=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.a_4=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aiy=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.blu=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.a_6=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.blP=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aiK=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bmd=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bmt=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bmU=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bn4=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GN=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bnt=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bnw=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bnA=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ajd=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bnS=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bnY=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bo4=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ajh=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bod=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.boH=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.boR=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.boU=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bp_=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ajy=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bpG=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ajX=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bqG=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ak8=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.br5=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.H0=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.brc=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.brm=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bro=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.akc=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.brG=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.brI=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.brL=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.akk=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_R=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bs9=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bsw=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bsB=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.akw=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bsI=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_X=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bt4=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bt5=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.H9=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.btT=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.buu=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.buA=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.buE=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qW=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.buP=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.buT=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.buZ=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bv0=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.ali=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.alm=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Hf=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a0i=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.alv=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bwg=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bwy=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bx0=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bx9=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.alV=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a0u=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bxl=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bxB=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0A=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bxS=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.by8=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0E=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.byd=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ame=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.amg=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.byw=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.amn=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.byZ=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bz2=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bz9=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bzi=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bzr=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bA3=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bAz=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.h_j=new A.D("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bE4=new A.eP(null,D.h_j,B.fm,null,x.A)
D.h8A=new A.D("None",null,null,null,null,null,null,null,null,null,null,null)
D.bE6=new A.eP(null,D.h8A,B.fm,null,x.A)
D.bEE=new A.bh(38e5)
D.bFn=new A.iJ(0,10,0,10)
D.bFH=new A.iJ(0,4,0,4)
D.bFK=new A.R(0,4,5,0)
D.bG_=new A.R(10,10,14,10)
D.bGa=new A.iJ(10,4,10,4)
D.bGj=new A.iJ(10,8,10,8)
D.bGk=new A.R(10,8,8,8)
D.bGQ=new A.R(12,6,12,2)
D.bH8=new A.R(14,0,14,6)
D.bHc=new A.R(14,10,6,6)
D.bHd=new A.R(14,12,14,0)
D.bHh=new A.R(14,12,14,8)
D.bHk=new A.R(14,12,8,14)
D.bHo=new A.iJ(14,14,14,14)
D.bHH=new A.R(14,6,14,40)
D.bHK=new A.R(14,8,14,30)
D.bI7=new A.R(16,2,16,10)
D.bIg=new A.R(16,6,16,30)
D.bIi=new A.R(16,6,16,8)
D.bIx=new A.R(18,10,18,4)
D.bIz=new A.R(18,12,18,0)
D.bIG=new A.R(18,14,12,4)
D.aoR=new A.R(18,16,18,8)
D.bIX=new A.R(18,20,18,22)
D.bJ1=new A.R(18,30,18,30)
D.bJj=new A.R(20,10,12,20)
D.bJm=new A.R(20,11,20,11)
D.bJy=new A.R(20,18,16,18)
D.bJA=new A.R(20,18,20,6)
D.bKp=new A.R(24,32,24,28)
D.bKq=new A.R(24,36,24,32)
D.bKt=new A.R(26,26,24,14)
D.bKH=new A.R(2,4,2,8)
D.bKL=new A.R(30,0,30,0)
D.bKW=new A.R(38,22,22,22)
D.aph=new A.R(40,24,24,24)
D.bKY=new A.iJ(40,40,40,40)
D.bL_=new A.R(46,30,30,30)
D.bLs=new A.R(56,40,40,40)
D.bLw=new A.R(1.25,1.25,1.25,1.25)
D.bLx=new A.R(60,0,60,0)
D.bLB=new A.R(6,14,6,16)
D.bLF=new A.R(6,4,12,0)
D.bLJ=new A.R(6,6,10,2)
D.bLQ=new A.iJ(7,3,7,3)
D.bMm=new A.R(5,1.5,5,1.5)
D.bMx=new A.R(6,2.5,6,2.5)
D.hgQ=new A.D("Family Games",null,B.jr,null,null,null,null,null,null,null,null,null)
D.fYU=new A.D("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.Xc,null,null,null,null,null,null,null,null,null)
D.cOz=w([D.hgQ,D.fYU],x.p)
D.bBy=new A.fv(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.cOz,null)
D.bMY=new A.bu(1,B.b6,D.bBy,null)
D.hlf=new A.D("Signature",null,B.nD,null,null,null,null,null,null,null,null,null)
D.bN0=new A.bu(1,B.b6,D.hlf,null)
D.hdk=new A.D("MADE BY THE ONE WHO PLANTED THE TREE",null,U.uA,null,null,null,null,null,null,null,null,null)
D.bNy=new A.bu(1,B.b6,D.hdk,null)
D.hii=new A.D("Tell the AI what to fix",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bNP=new A.bu(1,B.b6,D.hii,null)
D.hkk=new A.D("Worksheets",null,B.aZ9,null,null,null,null,null,null,null,null,null)
D.fTs=new A.F(!0,E.aie,null,null,null,null,13,B.cF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hj9=new A.D("Track your project spending",null,D.fTs,null,null,null,null,null,null,null,null,null)
D.ddt=w([D.hkk,B.at,D.hj9],x.p)
D.bBb=new A.fv(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.ddt,null)
D.bNV=new A.bu(1,B.b6,D.bBb,null)
D.fO7=new A.F(!0,E.kI,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZt=new A.D("FAMILY LIBRARY",null,D.fO7,null,null,null,null,null,null,null,null,null)
D.bOd=new A.bu(1,B.b6,D.fZt,null)
D.PU=new C.IM("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.xh=new C.IN(0,"male")
D.oY=new C.IN(1,"female")
D.zN=new C.IN(2,"unknown")
D.vp=new C.ans(0,"owner")
D.PV=new C.ans(1,"editor")
D.le=new C.ans(2,"viewer")
D.arg=new A.a_(61199,"MaterialIcons",!1)
D.bTy=new A.a_(61504,"MaterialIcons",!1)
D.bTz=new A.a_(61505,"MaterialIcons",!1)
D.bTB=new A.a_(61587,"MaterialIcons",!1)
D.bTI=new A.a_(61890,"MaterialIcons",!1)
D.bUA=new A.a_(63034,"MaterialIcons",!0)
D.bUS=new A.a_(63153,"MaterialIcons",!1)
D.bVo=new A.a_(63429,"MaterialIcons",!1)
D.atn=new A.a_(984520,"MaterialIcons",!1)
D.bU6=new A.a_(62776,"MaterialIcons",!1)
D.bXR=new A.ae(D.bU6,26,B.b5,null,null,null)
D.bSw=new A.a_(57648,"MaterialIcons",!1)
D.bYc=new A.ae(D.bSw,14,B.c,null,null,null)
D.bYu=new A.ae(B.Ig,17,null,null,null,null)
D.bYB=new A.ae(B.Qp,null,B.bU,null,null,null)
D.bZ0=new A.ae(E.a4k,null,null,null,null,null)
D.bZ3=new A.ae(B.jm,18,E.kI,null,null,null)
D.a43=new A.a_(62044,"MaterialIcons",!1)
D.bZ9=new A.ae(D.a43,null,B.aW,null,null,null)
D.bZg=new A.ae(B.A_,18,B.c,null,null,null)
D.bZY=new A.ae(B.eh,16,null,null,null,null)
D.c_4=new A.ae(D.a43,32,B.aW,null,null,null)
D.c_o=new A.ae(E.arh,18,B.cX,null,null,null)
D.c0v=new A.ae(B.It,22,B.aC,null,null,null)
D.c0J=new A.ae(B.eh,22,B.b5,null,null,null)
D.c0W=new A.ae(Z.a48,22,B.c,null,null,null)
D.c12=new A.ae(B.vx,52,B.c,null,null,null)
D.c1c=new A.ae(B.It,30,B.aC,null,null,null)
D.c1y=new A.ae(B.Iq,null,B.c,null,null,null)
D.au7=new A.ae(B.vJ,22,B.c,null,null,null)
D.c1H=new A.ae(B.eh,17,null,null,null,null)
D.c24=new A.ae(B.xu,26,B.cX,null,null,null)
D.c2R=new A.ae(B.a4y,16,null,null,null,null)
D.c3C=new A.ae(B.vx,24,B.c,null,null,null)
D.c3I=new A.ae(B.Qn,20,B.u8,null,null,null)
D.c3O=new A.ae(B.Ie,null,B.bU,null,null,null)
D.c3X=new A.ae(B.jm,18,B.c,null,null,null)
D.c4D=new A.ae(B.cC,22,B.ac,null,null,null)
D.c5w=new A.ae(B.eq,16,B.ac,null,null,null)
D.c5I=new A.ae(D.a43,20,B.aW,null,null,null)
D.auy=new A.ae(B.h1,20,null,null,null,null)
D.c6h=new A.ae(B.cC,18,D.l5,null,null,null)
D.c6y=new A.ae(B.A9,28,B.c,null,null,null)
D.c6K=new A.ae(B.Qd,null,B.fs,null,null,null)
D.c73=new A.ae(B.A9,24,B.c,null,null,null)
D.c7w=new A.ae(B.vx,null,B.aW,null,null,null)
D.c7x=new A.ae(B.jG,20,B.cX,null,null,null)
D.c7R=new A.ae(B.Ig,16,null,null,null,null)
D.c9p=new A.ef(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eV,!0,null,null,null,null)
D.avj=new C.a7x(10,null)
D.c9W=new C.a7x(12,null)
D.c9X=new C.a7x(14,null)
D.dvI=w([B.bw,B.aW,B.fz,B.b5],x.O)
D.cb6=new A.a6(B.aw,B.aD,B.w,D.dvI,null,null)
D.btF=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bAa=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d9z=w([D.btF,D.bAa],x.O)
D.cbj=new A.a6(B.aU,B.b1,B.w,D.d9z,null,null)
D.dpa=w([B.fo,B.h7,B.fz],x.O)
D.cbp=new A.a6(B.aw,B.aD,B.w,D.dpa,null,null)
D.al7=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bjR=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.dc_=w([D.al7,D.bjR],x.O)
D.cc1=new A.a6(B.aU,B.b1,B.w,D.dc_,null,null)
D.bnJ=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aEA=w([D.bnJ,D.al7],x.O)
D.ccl=new A.a6(B.aw,B.aD,B.w,D.aEA,null,null)
D.ajP=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bqx=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dod=w([D.ajP,D.bqx],x.O)
D.cd0=new A.a6(B.a5,B.a9,B.w,D.dod,null,null)
D.dDn=w([B.bC,B.nU],x.O)
D.cd2=new A.a6(B.aU,B.b1,B.w,D.dDn,null,null)
D.btA=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dEm=w([D.btA,D.l5,D.l5,I.On],x.O)
D.dH6=w([0,0.07,0.9,1],x.n)
D.cdy=new A.a6(B.a5,B.a9,B.w,D.dEm,D.dH6,null)
D.cdH=new A.a6(B.aw,B.aD,B.w,B.Ug,null,null)
D.d70=w([B.az,D.lW],x.O)
D.cdK=new A.a6(B.a5,B.a9,B.w,D.d70,null,null)
D.dCU=w([B.b5,B.aW,B.bU],x.O)
D.ceO=new A.a6(B.aw,B.aD,B.w,D.dCU,null,null)
D.cje=w([10,20,30],x.t)
D.ctg=w([-1,-0.4,0.3,1],x.n)
D.cAP=w([B.bw,B.b5,B.fo],x.O)
D.cAX=w([B.bj,B.az,B.kH],x.O)
D.cAZ=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cBI=w([30,140,262,360],x.n)
D.brR=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cHj=w([D.brR,E.akG],x.O)
D.eC8=new A.r(1,2)
D.fvX=new A.d4(B.b9,D.eC8,3)
D.aBu=w([D.fvX],x.F)
D.cOR=w([B.h9,B.ci,B.fy],x.O)
D.cRG=w([B.bQ,B.bz,B.bt],x.O)
D.bP3=new C.v9("classic","Classic leather","Gold-edged brown leather",D.aEA,E.kI,E.kI,"\u2766",B.K,!0,!1,!1,!1)
D.biW=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.byP=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dfn=w([D.biW,D.byP],x.O)
D.akJ=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bOZ=new C.v9("ornate","Ornate gold","Double gold border and flourishes",D.dfn,D.akJ,D.akJ,"\u2726",B.K,!0,!0,!0,!1)
D.bnf=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.buo=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d5H=w([D.bnf,D.buo],x.O)
D.bOY=new C.v9("parchment","Parchment","Old paper with dark ink",D.d5H,D.H9,L.ji,"\u2767",B.K,!0,!1,!1,!0)
D.ahS=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bwY=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dAU=w([D.ahS,D.bwY],x.O)
D.brj=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bwa=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bP0=new C.v9("minimal","Clean paper","Plain and elegant, like a printed book",D.dAU,D.brj,D.bwa,"",B.K,!0,!0,!1,!0)
D.bP2=new C.v9("midnight","Midnight","Deep blue with silver stars",K.aEU,B.cE,B.cm,"\u2727",B.K,!0,!0,!1,!1)
D.bOX=new C.v9("emerald","Emerald library","Green cloth, title on the left",W.aBU,E.kI,B.ha,"\u25c6",B.ba,!0,!1,!1,!1)
D.bxu=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dyO=w([B.ez,D.bxu],x.O)
D.bsH=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.btY=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bP1=new C.v9("rose","Rose vintage","Burgundy with rose-gold lettering",D.dyO,D.bsH,D.btY,"\u2740",B.K,!0,!1,!0,!1)
D.dDX=w([B.cx,F.ni],x.O)
D.bP_=new C.v9("modern","Modern","Dark, bold, left-aligned",D.dDX,B.aH,B.c,"",B.ba,!1,!0,!1,!1)
D.a6x=w([D.bP3,D.bOZ,D.bOY,D.bP0,D.bP2,D.bOX,D.bP1,D.bP_],A.as("N<v9>"))
D.cUJ=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dDJ=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bPe=new C.lN('What does "Ubuntu" mean?',D.dDJ,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d7M=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bPh=new C.lN("In Swahili, what do we call a grandmother?",D.d7M,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d7D=w(["Babu","Mama","Baba","Dada"],x.s)
D.bPc=new C.lN("In Swahili, what do we call a grandfather?",D.d7D,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d95=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bPg=new C.lN("What is a sister called in Swahili?",D.d95,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.deK=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bPd=new C.lN("What is a brother called in Swahili?",D.deK,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d7C=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bPo=new C.lN("Which word means father in Swahili?",D.d7C,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dEY=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bPn=new C.lN('"Umoja ni nguvu" means...',D.dEY,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dBD=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bPp=new C.lN('"Haba na haba hujaza kibaba" teaches us...',D.dBD,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.dc8=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bPm=new C.lN('The African saying "It takes a village to raise a child" means...',D.dc8,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dFg=w(["The elders","The market","The river","The drum"],x.s)
D.bPi=new C.lN("Who is the traditional keeper of the family stories?",D.dFg,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cZ2=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bPf=new C.lN("Why do families sit round the fire at night?",D.cZ2,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dDZ=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bPk=new C.lN('What does "Harambee" mean?',D.dDZ,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dhY=w(["An elder","A baby","A market","A cow"],x.s)
D.bPj=new C.lN('"Mzee" is a respectful word for...',D.dhY,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dyD=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bPl=new C.lN('What does "Shikamoo" show?',D.dyD,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aBP=w([D.bPe,D.bPh,D.bPc,D.bPg,D.bPd,D.bPo,D.bPn,D.bPp,D.bPm,D.bPi,D.bPf,D.bPk,D.bPj,D.bPl],x.J)
D.d2w=w([90,360],x.n)
D.d5d=w([B.bU,B.bp],x.O)
D.btn=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d5X=w([D.ahS,D.btn],x.O)
D.d6J=w([-1,-0.3,0.4,1],x.n)
D.d7J=w([0,0.45,0.72,0.92,1],x.n)
D.bnb=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d84=w([D.bnb,B.bF],x.O)
D.bkR=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.amx=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d8I=w([B.dD,D.bkR,D.amx],x.O)
D.d9T=w([B.bd,B.jx,B.pH],x.O)
D.bnL=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bw1=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bkx=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d9Y=w([D.bnL,D.bw1,D.bkx],x.O)
D.dal=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.dav=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hQj=new C.af3(78,424,48,44,56)
D.hQh=new C.af3(214,396,34,34,42)
D.hQi=new C.af3(442,452,56,50,64)
D.aCN=w([D.hQj,D.hQh,D.hQi],A.as("N<af3>"))
D.db5=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bjK=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bpF=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dH2=w([D.ajP,D.bjK,D.bpF],x.O)
D.bP4=new C.va("leather","Leather",D.dH2,"vintage")
D.dj2=w([B.dl,B.GZ,Ac.a_l],x.O)
D.bPb=new C.va("midnight","Midnight",D.dj2,"starry")
D.d9U=w([B.et,B.ej,B.lA],x.O)
D.bPa=new C.va("forest","Forest",D.d9U,"story")
D.dJj=w([B.eu,B.ez,B.kK],x.O)
D.bP7=new C.va("burgundy","Burgundy",D.dJj,"royal")
D.cRd=w([B.az,B.nb,B.nK],x.O)
D.bP8=new C.va("royal","Royal",D.cRd,"royal")
D.dcI=w([B.bz,B.cx,F.ni],x.O)
D.bP5=new C.va("charcoal","Charcoal",D.dcI,"geo")
D.dHb=w([B.c8,B.e_,B.wR],x.O)
D.bP9=new C.va("sunset","Sunset",D.dHb,"sunset")
D.dHZ=w([B.jx,B.z6,B.a_p],x.O)
D.bP6=new C.va("ocean","Ocean",D.dHZ,"band")
D.AD=w([D.bP4,D.bPb,D.bPa,D.bP7,D.bP8,D.bP5,D.bP9,D.bP6],A.as("N<va>"))
D.ddg=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.ddZ=w([B.an,B.aM,B.a_],x.O)
D.dft=w([B.ez,B.ej,B.dl,B.j_,B.z8,B.cX,B.kf,B.cU,B.de],x.O)
D.dfu=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fvY=new A.d4(B.dJ,B.dS,8)
D.dfH=w([D.fvY],x.F)
D.dgX=w([B.c5,B.e_,B.kb],x.O)
D.blI=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bpY=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.buj=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dhe=w([D.blI,G.alf,D.bpY,D.buj,D.amx],x.O)
D.dhw=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dhL=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bj7=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bpg=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dih=w([D.bj7,D.ajh,D.bpg],x.O)
D.diY=w([B.c5,B.hK],x.O)
D.dj3=w([G.nN,B.iu,G.ai3,B.d_],x.O)
D.dkM=w([B.d_,G.nN,B.iu,D.lX,B.d_],x.O)
D.dls=w([B.aQ,B.z4,B.yV],x.O)
D.eZI=new A.y(-0.65,0.6)
D.fc0=new A.y(-0.2,0.95)
D.fd9=new A.y(0.25,0.95)
D.f2h=new A.y(0.7,0.6)
D.fdK=new A.y(1,0.1)
D.dmj=w([Al.W4,D.eZI,D.fc0,D.fd9,D.f2h,D.fdK],x.G)
D.bsa=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.byH=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bmJ=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dmq=w([D.bsa,D.byH,D.bmJ],x.O)
D.dmw=w([B.bM,B.c1,B.dH,B.aQ],x.O)
D.dn4=w([B.hZ,B.c8,B.v0],x.O)
D.dnu=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dnG=w([B.fo,B.cX],x.O)
D.btJ=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.do8=w([D.btJ,D.ahQ],x.O)
D.dok=w([B.cW,B.fM,B.h_],x.O)
D.dox=w([B.aH,B.bp,B.dl],x.O)
D.dp7=w([B.eG,B.dq,B.ej],x.O)
D.dpt=w([B.dT,B.dl,B.GZ],x.O)
D.dpx=w([B.bu,B.n8,B.de],x.O)
D.dpO=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bsW=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.br1=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dq9=w([D.bsW,D.ajd,D.br1],x.O)
D.dr1=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dsd=w([1,0,7,6,3,2],x.t)
D.a7w=w(["leather","linen","plain","stars","rays"],x.s)
D.dsp=w([0.5,2,3.6],x.n)
D.dsY=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bX7=new A.a_(983781,"MaterialIcons",!1)
D.aEg=w([B.Qp,B.hQ,B.kP,B.ih,F.atv,B.IE,B.rj,D.bX7,K.at8,B.DT,B.rn,B.m5],A.as("N<a_>"))
D.a7A=w(["double","single","corners","none"],x.s)
D.bOU=new C.zT("Little Seed","\ud83c\udf31",0)
D.bOW=new C.zT("Young Listener","\ud83d\udc42",40)
D.bOV=new C.zT("Storyteller","\ud83e\ude98",120)
D.bOT=new C.zT("Village Pride","\ud83c\udfe1",300)
D.bOR=new C.zT("Keeper of Roots","\ud83c\udf33",700)
D.bOS=new C.zT("Elder of the Fire","\ud83d\udd25",1500)
D.aEi=w([D.bOU,D.bOW,D.bOV,D.bOT,D.bOR,D.bOS],A.as("N<zT>"))
D.due=w([B.d0,B.bl,B.cU],x.O)
D.duu=w([],x.C)
D.Et=w([],x.u)
D.aOt=new A.r(225,528)
D.f0p=new A.y(D.aOt,1)
D.eCU=new A.r(350,548)
D.f6W=new A.y(D.eCU,0.95)
D.aOn=new A.r(158,656)
D.f6P=new A.y(D.aOn,1.12)
D.eDH=new A.r(92,544)
D.eWR=new A.y(D.eDH,0.93)
D.eCX=new A.r(398,614)
D.f2F=new A.y(D.eCX,1.04)
D.eCL=new A.r(318,662)
D.eS5=new A.y(D.eCL,1.1)
D.a7I=w([D.f0p,D.f6W,D.f6P,D.eWR,D.f2F,D.eS5],A.as("N<+(r,H)>"))
D.dwD=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dxb=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dyj=w([B.d_,G.nN,B.iu,D.lX,B.d_,B.iu],x.O)
D.dzL=w([B.as,B.fM,B.j_],x.O)
D.dAs=w([-70,58],x.n)
D.dAu=w([-70,-30,20],x.n)
D.dBA=w([B.bu,B.n8,B.a0v],x.O)
D.dBS=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dYr=new C.mh("construction","Construction","Jobsite & builds",B.rm)
D.dYy=new C.mh("house","Home Build","Houses & rooms",B.vA)
D.dYo=new C.mh("grocery","Grocery","Store & pantry",B.a52)
D.dYn=new C.mh("calculator","Calculations","Math & estimates",B.Qw)
D.dYw=new C.mh("lumber","Materials","Lumber & supplies",B.IB)
D.dYk=new C.mh("kitchen","Kitchen","Remodel & meals",A4.QT)
D.bX4=new A.a_(983756,"MaterialIcons",!1)
D.dYp=new C.mh("landscape","Landscaping","Yard & garden",D.bX4)
D.dYj=new C.mh("plumbing","Plumbing","Pipes & water",B.q9)
D.dYz=new C.mh("electrical","Electrical","Wiring & power",B.fP)
D.dYh=new C.mh("store","Retail Shop","Daily business",B.kp)
D.dYi=new C.mh("paint_remodel","Paint & Remodel","Colors & walls",A4.QN)
D.bWq=new A.a_(983311,"MaterialIcons",!1)
D.dYv=new C.mh("roofing","Roofing","Roofs & exteriors",D.bWq)
D.bXh=new A.a_(983986,"MaterialIcons",!1)
D.dYg=new C.mh("warehouse","Warehouse","Storage & stock",D.bXh)
D.dYt=new C.mh("vehicles","Vehicles","Fleet & transport",B.DQ)
D.bU8=new A.a_(62785,"MaterialIcons",!1)
D.dYm=new C.mh("farm","Farm","Crops & livestock",D.bU8)
D.dYl=new C.mh("restaurant","Restaurant","Food & catering",B.vH)
D.dYs=new C.mh("tools","Tools","Workshop gear",B.DM)
D.dYx=new C.mh("wallet","Cash & Wallet","Quick spending",B.jG)
D.dYu=new C.mh("concrete","Concrete","Foundation work",F.asd)
D.dYq=new C.mh("blueprint","Blueprint","Plans & design",Ap.arL)
D.a85=w([D.dYr,D.dYy,D.dYo,D.dYn,D.dYw,D.dYk,D.dYp,D.dYj,D.dYz,D.dYh,D.dYi,D.dYv,D.dYg,D.dYt,D.dYm,D.dYl,D.dYs,D.dYx,D.dYu,D.dYq],A.as("N<mh>"))
D.dCx=w([B.bv,B.bl],x.O)
D.dDo=w([B.iI,B.oG,B.e5],x.O)
D.ak2=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.al1=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.brn=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.biC=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aFr=w([D.ak2,D.al1,D.brn,D.biC],x.O)
D.dED=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a8f=w(["top","middle","bottom"],x.s)
D.dGb=w([B.cw,B.bp,B.dl],x.O)
D.aFL=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bcb=new A.aa(0,B.H,B.b9,B.J,14)
D.aFP=w([D.bcb],x.V)
D.bqc=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dGW=w([D.aiv,D.a0u,D.bqc],x.O)
D.dGX=w([B.bf,B.dq,B.ej],x.O)
D.eCu=new A.r(24,-8)
D.eDc=new A.r(48,0)
D.eCq=new A.r(24,6)
D.dIN=w([B.J,D.eCu,D.eDc,D.eCq],x.g)
D.dJe=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eyV={top:0,middle:1,bottom:2}
D.dMB=new A.bn(D.eyV,["Top","Middle","Bottom"],x.r)
D.eys={double:0,single:1,corners:2,none:3}
D.dMH=new A.bn(D.eys,["Double line","One line","Corners","None"],x.r)
D.ezK={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dOl=new A.bn(D.ezK,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dOx=new A.bn(B.ik,[],A.as("bn<G,+(n,n)>"))
D.eyM={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.EI=new A.bn(D.eyM,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bn<n,G>"))
D.dSQ=new H.Ok(32,null)
D.dSR=new H.Ok(40,null)
D.dSS=new H.Ok(46,null)
D.aNX=new C.avu(null)
D.eBl=new A.r(0,40)
D.eBm=new A.r(0,412)
D.eBp=new A.r(0,900)
D.eBy=new A.r(0,-34)
D.eBz=new A.r(0,-46)
D.eBB=new A.r(0,-74)
D.eBE=new A.r(100,300)
D.eBF=new A.r(10,14)
D.eBI=new A.r(10,-10)
D.eBN=new A.r(10,-46)
D.eBO=new A.r(10,-58)
D.eBP=new A.r(116,442)
D.eBR=new A.r(11,-1)
D.eBS=new A.r(11,-10)
D.eBT=new A.r(11,-21)
D.aOi=new A.r(11,-60)
D.eC_=new A.r(14,-2)
D.eC0=new A.r(150,520)
D.aas=new A.r(150,592)
D.eC3=new A.r(15,-15)
D.eC4=new A.r(16,-1)
D.eC7=new A.r(190,444)
D.eCa=new A.r(1,5)
D.eCi=new A.r(21,-78)
D.eCj=new A.r(222,615)
D.KC=new A.r(225,300)
D.aau=new A.r(225,574)
D.eCt=new A.r(24,-52)
D.eCv=new A.r(250,210)
D.eCG=new A.r(2,-56)
D.aOx=new A.r(300,0)
D.eCH=new A.r(300,440)
D.eCK=new A.r(318,476)
D.eCN=new A.r(324,144)
D.aax=new A.r(332,150)
D.eCP=new A.r(335,585)
D.eCQ=new A.r(338,140)
D.eCR=new A.r(340,158)
D.eCT=new A.r(34,-60)
D.F9=new A.r(36,-24)
D.eCV=new A.r(372,470)
D.eCW=new A.r(390,455)
D.eD4=new A.r(42,468)
D.eD5=new A.r(431,510)
D.eD6=new A.r(431,520)
D.eD7=new A.r(45,-92)
D.eD8=new A.r(46,20)
D.eD9=new A.r(46,-92)
D.eDa=new A.r(46,-94)
D.eDb=new A.r(47,-4)
D.eDd=new A.r(48,-4)
D.eDl=new A.r(4,-26)
D.eDt=new A.r(60,455)
D.eDC=new A.r(8,14)
D.eDG=new A.r(8,-76)
D.eDI=new A.r(95,575)
D.eDJ=new A.r(98,-24)
D.eDL=new A.r(9,-2)
D.eDM=new A.r(9,-58)
D.aOG=new A.r(9,-79)
D.eDN=new A.r(9,-9)
D.eEp=new A.r(16.5,8)
D.eEr=new A.r(3.2,0)
D.eEs=new A.r(-16.5,8)
D.eEz=new A.r(16.5,2)
D.eEC=new A.r(-3.2,0)
D.eEK=new A.r(9.5,6)
D.eEN=new A.r(-10,14)
D.eEO=new A.r(-10,-12)
D.eEP=new A.r(-10,-58)
D.eER=new A.r(-11,-10)
D.eET=new A.r(-11,-60)
D.eEU=new A.r(-12,-14)
D.eEV=new A.r(-12,-16)
D.eF_=new A.r(-14,-2)
D.eF2=new A.r(-15,-15)
D.eF3=new A.r(-15,-3)
D.eF5=new A.r(-16,-1)
D.eFl=new A.r(-24,-52)
D.eFu=new A.r(-2,-34)
D.eFv=new A.r(-2,-38)
D.eFx=new A.r(-30,-100)
D.aaz=new A.r(-36,-24)
D.eFI=new A.r(-4,-26)
D.eFK=new A.r(-4,-6)
D.eFT=new A.r(-8,-3)
D.eFU=new A.r(-8,-48)
D.eFX=new A.r(-9,-2)
D.eFZ=new A.r(-9,-58)
D.eG_=new A.r(-9,-79)
D.eG0=new A.r(-9,-9)
D.eG2=new A.r(-9.5,6)
D.eGf=new A.r(-16.5,2)
D.h5W=new A.D("Write a new book",null,B.hk,null,B.K,null,null,null,null,null,null,null)
D.eGP=new A.C(B.lc,D.h5W,null)
D.hkO=new A.D("Tap to go on",null,B.wj,null,null,null,null,null,null,null,null,null)
D.eHa=new A.C(B.kO,D.hkO,null)
D.atF=new A.ae(B.ig,18,B.c,null,null,null)
D.fZQ=new A.D("Add",null,B.kX,null,null,null,null,null,null,null,null,null)
D.dmM=w([D.atF,B.pq,D.fZQ],x.p)
D.ft0=new A.c0(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.dmM,null)
D.eHd=new A.C(B.o5,D.ft0,null)
D.eHf=new A.C(E.anE,A8.ZC,null)
D.fTc=new A.F(!0,B.c,null,null,null,null,13.5,B.C,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h26=new A.D("New Project",null,D.fTc,null,null,null,null,null,null,null,null,null)
D.drt=w([D.atF,B.aa,D.h26],x.p)
D.ft3=new A.c0(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.drt,null)
D.eHt=new A.C(B.hp,D.ft3,null)
D.h4E=new A.D("Choose your header",null,B.ux,null,null,null,null,null,null,null,null,null)
D.eHO=new A.C(B.ie,D.h4E,null)
D.bhP=new A.fo(2.2,null,null,null,null,B.cX,null,null,null,null)
D.fyP=new A.a4(22,22,D.bhP,null)
D.bfV=new A.cn(B.z,null,null,D.fyP,null)
D.eHT=new A.C(B.a1S,D.bfV,null)
D.bHz=new A.R(14,2,14,6)
D.hiT=new A.D("The top of your book. Tap a design to see it.",null,V.uy,null,null,null,null,null,null,null,null,null)
D.eHU=new A.C(D.bHz,D.hiT,null)
D.h3O=new A.D("\ud83c\udfc6 A new record!",null,B.hj,null,null,null,null,null,null,null,null,null)
D.eHW=new A.C(B.kO,D.h3O,null)
D.eJv=new A.jl(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eJy=new A.jl(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aPi=new A.jl(1,0.9607843137254902,0.48627450980392156,0)
D.KK=new A.jl(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Bc=new A.jl(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eJE=new A.jl(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hSv=new C.blG(null)
D.bCk=new A.mW(D.hSv,null,B.aA,null,null)
D.aSW=new A.cR(0,0,0,0,null,null,D.bCk,null)
D.fZS=new A.D("\ud83c\udfc5",null,B.acQ,null,null,null,null,null,null,null,null,null)
D.eO3=new A.cR(null,0,-34,null,null,null,D.fZS,null)
D.eWv=new A.y("E","Sit by the fire again")
D.f1g=new A.y("C","Good Learner")
D.f4R=new A.y("D","Still Growing")
D.f9E=new A.y(-42,42)
D.fb3=new A.y("B","Faithful Listener")
D.fdb=new A.y("A","Keeper of the Family")
D.fgp=new A.b1(-17,0.7,0)
D.fh_=new A.b1(-8,0.95,1.3)
D.fi7=new A.b1(18,0.65,5.2)
D.fi9=new A.b1(0,1.15,2.6)
D.fiu=new A.b1(9,0.9,3.9)
D.fkt=new A.b7([0,0,1,1])
D.aUs=new A.a5(0,0,520,160)
D.fq2=new A.a5(10,612,440,618)
D.fq3=new A.a5(10,612,440,628)
D.fq6=new A.a5(14,-64,34,-12)
D.fq9=new A.a5(300,336,350,348)
D.abs=new A.a5(30,96,420,346)
D.fqa=new A.a5(30,-9,46,1)
D.fqb=new A.a5(4,2,11,14)
D.fqd=new A.a5(-8,-12.5,8,-7)
D.fqe=new A.a5(-16.5,-21,16.5,1)
D.fqf=new A.a5(60,342,88,348)
D.W5=new A.a5(66,-66,94,-36)
D.fqg=new A.a5(6,8,10,14)
D.fqj=new A.a5(95,343,115,348)
D.fqk=new A.a5(-6.5,-74,6.5,-58)
D.fqq=new A.a5(-100,-74,100,-12)
D.fqr=new A.a5(-10,8,-6,14)
D.fqs=new A.a5(-11,2,-4,14)
D.fqt=new A.a5(-11,-70,11,-56)
D.fqA=new A.a5(-13,-24,13,-4)
D.fqH=new A.a5(-15,-21,15,0)
D.fqK=new A.a5(-16,-21,16,1)
D.fqL=new A.a5(-16,-21,16,2)
D.fqO=new A.a5(-16,-26,16,-6)
D.fqW=new A.a5(-230,-26,230,26)
D.frk=new A.a5(-38,-26,12,-6)
D.fro=new A.a5(-3,-70,3,-63)
D.frp=new A.a5(-44,-22,44,0)
D.frr=new A.a5(-46,-9,-30,1)
D.aUw=new A.a5(-80,-190,80,20)
D.fry=new A.a5(-8,-26,40,-6)
D.frz=new A.a5(-98,-80,92,-75)
D.frA=new A.a5(-9,-15,9,-9)
D.hip=new A.D("Let the AI write it from your tree",null,B.iW,null,B.K,null,null,null,null,null,null,null)
D.bPZ=new A.d0(1,B.c9,D.hip,null)
D.diX=w([E.a5y,B.aa,D.bPZ],x.p)
D.fsE=new A.c0(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.diX,null)
D.fZu=new A.D("Save member",null,B.ch,null,null,null,null,null,null,null,null,null)
D.dAb=w([D.auy,B.aa,D.fZu],x.p)
D.fsP=new A.c0(B.aK,B.bb,B.h,B.l,null,B.p,null,0,D.dAb,null)
D.c0P=new A.ae(B.iw,14,B.b5,null,null,null)
D.fMD=new A.F(!0,B.b5,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2x=new A.D("Cashier",null,D.fMD,null,null,null,null,null,null,null,null,null)
D.ds2=w([D.c0P,B.b7,D.h2x],x.p)
D.fsT=new A.c0(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.ds2,null)
D.fZv=new A.D("Transfer & settings",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bNF=new A.bu(1,B.b6,D.fZv,null)
D.d9e=w([D.au7,B.ar,D.bNF],x.p)
D.fsU=new A.c0(B.aK,B.e,B.h,B.l,null,B.p,null,0,D.d9e,null)
D.fxu=new A.av(16,40)
D.fxz=new A.av(22,64)
D.fxG=new A.av(280,88)
D.fyu=new A.a4(30,null,null,null)
D.fYA=new A.D("The teacher is writing\u2026",null,B.By,null,null,null,null,null,null,null,null,null)
D.bh0=new A.cn(B.z,null,null,D.fYA,null)
D.hMe=new A.bg("w",x.W)
D.fyU=new A.a4(null,56,D.bh0,D.hMe)
D.fzF=new A.hY(5,8,8,1,null)
D.fzN=new A.hY(2,12,12,1.05,null)
D.h2c=new A.D("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fAy=new A.b3(D.h2c,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h2s=new A.D("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aWT=new A.b3(D.h2s,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.haY=new A.D("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fB1=new A.b3(D.haY,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hlR=new A.D("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fB6=new A.b3(D.hlR,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h4C=new A.D("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fBd=new A.b3(D.h4C,null,null,null,null,null,null,null,null,null,null,null,null,B.fO,!1,null,null,null,B.t,null)
D.hj5=new A.D("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aWY=new A.b3(D.hj5,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h4A=new A.D("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fBD=new A.b3(D.h4A,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h_8=new A.D("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fBF=new A.b3(D.h_8,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h8o=new A.D("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fBL=new A.b3(D.h8o,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hmD=new A.D("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fCr=new A.b3(D.hmD,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hhj=new A.D("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fCR=new A.b3(D.hhj,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hlV=new A.D("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fCU=new A.b3(D.hlV,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hcB=new A.D("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fCW=new A.b3(D.hcB,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h6y=new A.D("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fCX=new A.b3(D.h6y,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h6z=new A.D("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fDY=new A.b3(D.h6z,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h2e=new A.D("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fEf=new A.b3(D.h2e,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h4f=new A.D("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fEz=new A.b3(D.h4f,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hc4=new A.D("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fEQ=new A.b3(D.hc4,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7o=new A.D("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fER=new A.b3(D.h7o,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fRT=new A.F(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGp=new A.eJ("\u2665",null,null,B.cZ,null,null,null,null,null,null,D.fRT)
D.fOZ=new A.F(!0,B.aS,null,null,null,null,28,B.O,B.cR,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGF=new A.eJ("Today: how well do you know the family?",null,null,B.cZ,null,null,null,null,null,null,D.fOZ)
D.fGW=new A.F(!0,B.qJ,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI7=new A.F(!0,D.l5,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIv=new A.F(!0,D.l5,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIz=new A.F(!0,B.d_,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fII=new A.F(!0,D.fL,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIT=new A.F(!0,D.fL,null,null,null,null,13,B.C,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJd=new A.tj(!0,B.uk,null,null,null,null,B.dL,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJt=new A.F(!0,B.d_,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJx=new A.F(!0,D.l5,null,null,null,null,18,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJy=new A.F(!0,B.d_,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJD=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJG=new A.F(!0,B.d_,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKc=new A.F(!0,B.b5,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKd=new A.F(!0,B.ac,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKf=new A.F(!0,B.aS,null,null,null,null,15.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKH=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYd=new A.F(!0,B.aR,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYe=new A.F(!0,D.lW,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL6=new A.F(!0,B.d_,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acV=new A.tj(!0,B.VC,null,null,null,null,B.dL,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.X_=new A.F(!0,B.d_,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLg=new A.F(!0,B.a_,null,null,null,null,12.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLl=new A.F(!0,D.fL,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLM=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMX=new A.F(!0,D.fL,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYn=new A.F(!0,D.fL,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNg=new A.F(!0,B.ac,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNs=new A.F(!0,D.fL,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNu=new A.F(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNB=new A.F(!0,L.ji,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYr=new A.F(!0,D.fL,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOz=new A.F(!0,D.fL,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOS=new A.F(!0,D.fL,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOU=new A.F(!0,B.a_,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOW=new A.F(!0,B.d_,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPk=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.Jz,null,null,null)
D.aYF=new A.F(!0,D.fL,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPL=new A.F(!0,B.a_,null,null,null,null,17,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ6=new A.F(!0,B.fs,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQu=new A.F(!0,B.bU,null,null,null,null,8,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQz=new A.F(!0,B.bC,null,null,null,null,11,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQL=new A.F(!0,B.c,null,null,null,null,13.5,B.C,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQO=new A.F(!0,D.fL,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQW=new A.F(!0,D.H9,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR7=new A.F(!0,B.b5,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRw=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRD=new A.F(!0,B.ac,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ek,null,null,null)
D.fS3=new A.F(!0,B.d_,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSb=new A.F(!0,B.cX,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSo=new A.F(!0,D.lX,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZ3=new A.F(!0,D.fL,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.LU=new A.F(!0,B.d_,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZ5=new A.F(!0,B.d_,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ek,null,null,null)
D.fSJ=new A.F(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSN=new A.F(!0,G.nN,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTa=new A.F(!0,B.b5,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTr=new A.F(!0,D.fL,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTQ=new A.F(!0,B.c,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUf=new A.F(!0,D.fL,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUM=new A.F(!0,D.fL,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUR=new A.F(!0,B.an,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV0=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adr=new A.F(!0,B.an,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adu=new A.F(!0,D.lW,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWN=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX7=new A.F(!0,B.aS,null,null,null,null,27,B.O,B.cR,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXe=new A.F(!0,L.ji,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXm=new A.F(!0,L.ji,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXQ=new A.D("Time:",null,B.hH,null,null,null,null,null,null,null,null,null)
D.fYb=new A.D("\ud83c\udfae",null,K.adh,null,null,null,null,null,null,null,null,null)
D.fYc=new A.D("Themes",null,B.ps,null,null,null,null,null,null,null,null,null)
D.fYI=new A.D("\ud83c\udfb2",null,B.yg,null,null,null,null,null,null,null,null,null)
D.fYM=new A.D("Delete this game?",null,B.iW,null,null,null,null,null,null,null,null,null)
D.fYT=new A.D("Add Item",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fNa=new A.F(!0,B.a_,null,null,null,null,22,B.C,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZj=new A.D("Debt receipt",null,D.fNa,null,B.K,null,null,null,null,null,null,null)
D.aZk=new A.F(!0,B.an,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZC=new A.D("Person who owes",null,D.aZk,null,null,null,null,null,null,null,null,null)
D.h_C=new A.D("Notes",null,B.ad6,null,null,null,null,null,null,null,null,null)
D.h05=new A.D("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fM4=new A.F(!0,B.c,null,null,null,null,11,B.C,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h07=new A.D("Share",null,D.fM4,null,null,null,null,null,null,null,null,null)
D.h18=new A.D("Move your family trees",null,I.ado,null,null,null,null,null,null,null,null,null)
D.h1O=new A.D("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.h2r=new A.D("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.h2P=new A.D("SAVE",null,D.LU,null,null,null,null,null,null,null,null,null)
D.h3s=new A.D("The round button is the right answer.",null,V.BB,null,null,null,null,null,null,null,null,null)
D.h3N=new A.D("Remove this book?",null,B.hj,null,null,null,null,null,null,null,null,null)
D.fT7=new A.F(!0,B.d_,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ek,null,null,null)
D.h4k=new A.D("Fireside Stories",null,D.fT7,null,null,null,null,null,null,null,null,null)
D.aZP=new A.D("Download",null,B.ch,null,null,null,null,null,null,null,null,null)
D.h50=new A.D("What should the AI do?",null,B.dw,null,null,null,null,null,null,null,null,null)
D.fLF=new A.F(!0,D.lW,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5f=new A.D("REPORT CARD",null,D.fLF,null,null,null,null,null,null,null,null,null)
D.h62=new A.D("Calabash Catch",null,B.Xm,null,null,null,null,null,null,null,null,null)
D.h6u=new A.D("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.h6W=new A.D("\ud83c\udfe1",null,B.FH,null,null,null,null,null,null,null,null,null)
D.h7D=new A.D("Ribbon bookmark",null,B.jO,null,null,null,null,null,null,null,null,null)
D.fUL=new A.F(!0,B.b5,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h87=new A.D("NGMY.ORG",null,D.fUL,null,B.K,null,null,null,null,null,null,null)
D.h9q=new A.D("Scan family tree QR",null,B.cJ,null,null,null,null,null,null,null,null,null)
D.fQP=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.had=new A.D("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fQP,null,B.K,null,null,null,null,null,null,null)
D.hbr=new A.D("Delete",null,B.WU,null,null,null,null,null,null,null,null,null)
D.hbs=new A.D("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.hbA=new A.D("Thumbnail",null,B.ps,null,null,null,null,null,null,null,null,null)
D.hc9=new A.D("Save the cover",null,B.cJ,null,null,null,null,null,null,null,null,null)
D.hce=new A.D("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.BF,null,B.K,null,null,null,null,null,null,null)
D.hcC=new A.D("Your photos",null,B.ps,null,null,null,null,null,null,null,null,null)
D.hcT=new A.D("Create Project",null,B.ch,null,null,null,null,null,null,null,null,null)
D.hdf=new A.D("\u2b50 stars",null,B.FI,null,null,null,null,null,null,null,null,null)
D.hdt=new A.D("Design your cover",null,B.ux,null,null,null,null,null,null,null,null,null)
D.hdz=new A.D("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.hdC=new A.D("PICTURE",null,N.wm,null,null,null,null,null,null,null,null,null)
D.hdE=new A.D("\ud83c\udfaf",null,D.Xl,null,null,null,null,null,null,null,null,null)
D.he0=new A.D("Paid",null,B.ch,null,null,null,null,null,null,null,null,null)
D.he2=new A.D("You can undo it right after.",null,V.BB,null,null,null,null,null,null,null,null,null)
D.heB=new A.D("Print",null,B.wk,null,null,null,null,null,null,null,null,null)
D.hf0=new A.D("Amount owed",null,D.aZk,null,null,null,null,null,null,null,null,null)
D.hfg=new A.D("Got it",null,B.ch,null,null,null,null,null,null,null,null,null)
D.hfT=new A.D("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hfW=new A.D("Add to budget",null,B.ch,null,null,null,null,null,null,null,null,null)
D.hgl=new A.D("Debtor signature",null,B.ad6,null,null,null,null,null,null,null,null,null)
D.hgw=new A.D("Change icon",null,B.ad5,null,null,null,null,null,null,null,null,null)
D.hhk=new A.D("MADE BY THE SYSTEM, FROM YOUR TREE",null,U.uA,null,null,null,null,null,null,null,null,null)
D.hhM=new A.D("Family tree QR",null,B.cJ,null,null,null,null,null,null,null,null,null)
D.hhS=new A.D("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Xk,null,null,null,null,null,null,null,null,null)
D.hif=new A.D("Download",null,B.wk,null,null,null,null,null,null,null,null,null)
D.hig=new A.D("The person who planted this tree has not made a game yet.",null,Y.BD,null,null,null,null,null,null,null,null,null)
D.hik=new A.D("Change",null,B.ps,null,null,null,null,null,null,null,null,null)
D.hjb=new A.D("Clear all",null,B.ch,null,null,null,null,null,null,null,null,null)
D.hje=new A.D("WHAT SHOULD IT CHANGE?",null,N.wm,null,null,null,null,null,null,null,null,null)
D.hjN=new A.D("COLOUR",null,N.wm,null,null,null,null,null,null,null,null,null)
D.hk1=new A.D("Do it",null,B.cJ,null,null,null,null,null,null,null,null,null)
D.hk5=new A.D("Create Tree",null,B.ch,null,null,null,null,null,null,null,null,null)
D.hkf=new A.D("Give me another clue",null,D.LU,null,null,null,null,null,null,null,null,null)
D.hl9=new A.D("Create Family Tree",null,B.fk,null,null,null,null,null,null,null,null,null)
D.hlj=new A.D("THE TEACHER EXPLAINS THESE",null,U.uA,null,null,null,null,null,null,null,null,null)
D.fGV=new A.F(!0,E.kI,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hlp=new A.D("Write the first page myself",null,D.fGV,null,null,null,null,null,null,null,null,null)
D.hlY=new A.D("Use this header",null,B.cJ,null,null,null,null,null,null,null,null,null)
D.hm4=new A.D("Create Project",null,E.aYZ,null,null,null,null,null,null,null,null,null)
D.hNJ=new C.adG(1,"header")
D.aew=new C.adG(2,"projects")
D.hNK=new C.adG(3,"cashier")
D.aex=new C.adG(4,"familyTree")
D.i2p=new C.cJx(0,"start")
D.i2q=new C.cJy(0,"start")
D.hNX=new C.a_u(null)
D.hOY=new C.a00(null)
D.dOu=new A.bn(B.ik,[],A.as("bn<n,H_>"))
D.duU=w([],x.dE)
D.duV=w([],x.M)
D.hPC=new C.biS(D.dOu,D.duU,D.duV,0,0,null,null)
D.b3k=new C.a0R(0,"intro")
D.b3l=new C.a0R(1,"countdown")
D.aeK=new C.a0R(2,"ask")
D.Yh=new C.a0R(3,"reveal")
D.b3m=new C.a0R(4,"end")
D.hSx=new C.tr(F.Hi,D.lX,B.d_,F.mn,5,!1,!1,!1,0,null)
D.hSz=new C.tr(F.Hi,B.eu,B.d_,B.bP,2,!0,!0,!1,2,B.d_)
D.hSB=new C.tr(B.qX,B.cX,B.d_,F.mn,2,!0,!1,!1,2,B.as)
D.hSC=new C.tr(F.Hi,B.dT,B.d_,F.mn,5,!1,!1,!1,1,null)
D.hSF=new C.tr(F.a0L,D.al1,B.d_,F.mn,4,!0,!1,!0,0,null)
D.b3p=new C.tr(F.a0L,B.e_,B.d_,F.mn,3,!0,!1,!0,2,null)
D.b3q=new C.tr(F.ts,D.lX,B.c,F.mn,0,!1,!1,!0,0,null)
D.b3r=new C.tr(B.qX,B.az,B.d_,B.bP,2,!0,!0,!1,2,B.e_)
D.b3s=new C.tr(B.qX,G.nN,B.iu,F.mn,5,!1,!1,!0,3,null)
D.hSJ=new C.tr(B.qX,B.e_,B.d_,F.mn,0,!0,!1,!1,0,B.az)
D.b3t=new C.tr(F.Hi,B.eu,B.d_,B.bP,1,!1,!0,!1,1,null)
D.b3u=new C.tr(F.GP,B.as,B.az,F.mn,4,!0,!1,!0,2,null)
D.hSL=new C.tr(F.ts,B.as,B.eu,F.mn,3,!0,!1,!1,0,null)
D.hSN=new C.tr(B.qX,B.dT,B.d_,B.bP,1,!1,!0,!1,1,null)
D.hSO=new C.tr(F.GP,D.ak2,B.c,F.mn,5,!1,!1,!0,0,null)
D.hTs=new C.a1p(null)
D.i2y=new C.ah8(0,"still")
D.YE=new C.ah8(1,"walk")
D.b4d=new C.ah8(2,"pound")
D.b4e=new C.ah8(3,"drum")
D.hZ2=new C.a2I(0,"greet")
D.b4f=new C.a2I(1,"teach")
D.af3=new C.a2I(2,"ask")
D.hZ3=new C.a2I(3,"feedback")
D.b4g=new C.a2I(4,"end")
D.YL=new C.a31(0,"intro")
D.YM=new C.a31(1,"asking")
D.BW=new C.a31(2,"reacting")
D.afe=new C.a31(3,"driving")
D.aff=new C.a31(4,"arrived")
D.afn=new C.aNd(0,"projects")
D.b4G=new C.aNd(1,"cashier")
D.i08=new C.aNd(2,"familyTree")})()};
(a=>{a["Xth6pKt7PAGFtdQ0nvJUPoHBkPU="]=a.current})($__dart_deferred_initializers__);