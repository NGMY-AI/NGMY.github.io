((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A9,S,A_,Aa,P,A0,T,M,Ab,L,A1,U,H,E,Ac,V,Ad,A2,Ae,Af,Ag,Ah,Q,Ai,Aj,N,A3,Ak,A4,A5,A6,Al,W,A7,Am,An,G,Ao,Ap,Aq,A8,Ar,As,At,Au,X,O,F,Av,I,Y,K,Aw,Z,R,Ax,C={
bIx(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bIx=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wf(null,""),$async$bIx)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nF(b1)
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
return A.b(A.rx(t,a1,B.ii,"book",E.HC),$async$bIx)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Sa(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A.Mm(l)?y.k:y.y)
for(j=J.a1(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a_(r.a(j.h(a2,a7)),q,p):B.cD
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a4J(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIx,v)},
aji(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$aji=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.wf(null,""),$async$aji)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nF(b6)
s=x.S
r=A.cU(c1,0,A.dw(4,"count",s),A.U(c1).c)
q=H.a4s(new A.O(r,new C.fZ8(),r.$ti.k("O<aj.E,n>")).aL(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fZ7(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.V.au(b7,null)+"\nAllowed values: style one of "+B.d.aL(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$aji)
case 6:l=c5
k=H.Sa(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.ar6(s,D.dOv,r.b(k.h(0,"cover"))?A.a_(r.a(k.h(0,"cover")),x.N,x.z):null)
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
return A.b(m.$1(f+B.V.au(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$aji)
case 10:l=c5
k=l==null?null:H.Sa(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cK(a8,d),a5=J.aQ(a2.a),a2=a2.$ti,a7=new A.jz(a5,a2.k("jz<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gP(a5))
b0=J.a1(a9)
b1=A.aK(b0.h(a9,"index"))
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
p=A.cs(new A.ba(h,s),new C.fZ9(),s.k("M.E"),p)
p=H.a4s(A.pg(p,3,A.a3(p).k("M.E")).aL(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cu<1>")
b4=A.B(new A.cu(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a4J(s,b9),$async$aji)
case 13:b5=c5
for(s=J.a1(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.ar6(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aji,v)},
hSU(d,e,f){return A.cf(null,B.v.j(0.65),!1,null,new C.h8M(e,f),d,null,!0,!0,x.g2)},
ar6:function ar6(d,e,f){this.a=d
this.b=e
this.c=f},
fZ8:function fZ8(){},
fZ7:function fZ7(d){this.a=d},
fZ9:function fZ9(){},
h8M:function h8M(d,e){this.a=d
this.b=e},
bGe(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bGe=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fLT())){u=null
w=1
break}t=B.d.cw(b1,new C.fLU())
s=$.T()
r=new A.oZ(new A.ow())
q=A.v5(r,D.aUs)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aUs,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bG
o.e=B.dP
n=new C.fLZ(t)
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
a3=new A.aI(s.r,B.ak,null,null,p)
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
a3=new A.aI(s.r,B.ak,null,null,p)
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
return A.b(r.n3().vO(520,160),$async$bGe)
case 4:w=3
return A.b(b3.ho(B.hq),$async$bGe)
case 3:b0=b3
u=b0==null?null:J.eW(B.dM.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bGe,v)},
fWK(d){return C.iyr(d)},
iyr(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fWK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.blW()
n=d.x!=null&&d.A5(null).length===0
if(d.x!=null)t=n?D.Be:D.KL
else t=d.gVq()?D.KL:D.aPi
w=3
return A.b(C.bGe(d.ax),$async$fWK)
case 3:s=f
p.a=null
if(s!=null)p.a=A.apK(s)
r=A.a6s(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aPi}else{p.c=C.xC(q,!0)
p.b=n?D.Be:D.KL}r.a5k(A.hjy(new C.fWM(p,d,new C.fWN(),t,n,o),null,D.bKW,B.xZ))
u=r.jK(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fWK,v)},
h34(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h34=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fWK(d),$async$h34)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aJ(s,r,"_")
if(q.length>40)q=B.a.av(q,0,40)
u=Ah.HP(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h34,v)},
fLT:function fLT(){},
fLU:function fLU(){},
fLZ:function fLZ(d){this.a=d},
fWN:function fWN(){},
fWM:function fWM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWL:function fWL(){},
h9f(d,e){var w=0,v=A.j(x.H)
var $async$h9f=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.v.j(0.55),!0,null,new C.h9j(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h9f)
case 2:return A.h(null,v)}})
return A.i($async$h9f,v)},
bJ_(d,e,f,g){return C.iGn(d,e,f,g)},
iGn(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bJ_=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cK.aK(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.T(D.fEz)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.h9b(g,r,f),d,null,!0,!0,x.H),$async$bJ_)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bJ_,v)},
h9k(d,e){var w=0,v=A.j(x.H)
var $async$h9k=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.h9n(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$h9k)
case 2:return A.h(null,v)}})
return A.i($async$h9k,v)},
b1M:function b1M(d,e){this.c=d
this.a=e},
cb_:function cb_(){},
bfb:function bfb(d,e){this.b=d
this.a=e},
h9j:function h9j(d,e){this.a=d
this.b=e},
h9g:function h9g(d){this.a=d},
h9h:function h9h(d,e,f){this.a=d
this.b=e
this.c=f},
h9i:function h9i(d,e){this.a=d
this.b=e},
h9b:function h9b(d,e,f){this.a=d
this.b=e
this.c=f},
h99:function h99(d){this.a=d},
h9a:function h9a(d,e,f){this.a=d
this.b=e
this.c=f},
h9n:function h9n(d,e){this.a=d
this.b=e},
h9l:function h9l(d){this.a=d},
h9m:function h9m(d,e,f){this.a=d
this.b=e
this.c=f},
fQQ(d,e){var w=0,v=A.j(x.y),u,t
var $async$fQQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4c(d),$async$fQQ)
case 3:t=g
J.nh(t,new C.fQR(e))
u=A.ak_(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQQ,v)},
fQR:function fQR(d){this.a=d},
arj:function arj(d,e,f){this.c=d
this.d=e
this.a=f},
aG9:function aG9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dVn:function dVn(d,e){this.a=d
this.b=e},
dV8:function dV8(d,e){this.a=d
this.b=e},
dVb:function dVb(d,e,f){this.a=d
this.b=e
this.c=f},
dVa:function dVa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dV9:function dV9(d,e){this.a=d
this.b=e},
dVc:function dVc(d,e){this.a=d
this.b=e},
dV6:function dV6(){},
dV7:function dV7(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dV5:function dV5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dUR:function dUR(d){this.a=d},
dUS:function dUS(d,e,f){this.a=d
this.b=e
this.c=f},
dUT:function dUT(d,e){this.a=d
this.b=e},
dUQ:function dUQ(d){this.a=d},
dUY:function dUY(d,e){this.a=d
this.b=e},
dUP:function dUP(d){this.a=d},
dUZ:function dUZ(d,e,f){this.a=d
this.b=e
this.c=f},
dV_:function dV_(d,e,f){this.a=d
this.b=e
this.c=f},
dUO:function dUO(d,e){this.a=d
this.b=e},
dV0:function dV0(d,e,f){this.a=d
this.b=e
this.c=f},
dUN:function dUN(d,e){this.a=d
this.b=e},
dV1:function dV1(d,e){this.a=d
this.b=e},
dUM:function dUM(d){this.a=d},
dV2:function dV2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dUK:function dUK(){},
dUE:function dUE(d){this.a=d},
dUF:function dUF(d){this.a=d},
dUL:function dUL(d,e){this.a=d
this.b=e},
dV3:function dV3(d,e){this.a=d
this.b=e},
dUJ:function dUJ(d){this.a=d},
dV4:function dV4(d){this.a=d},
dUI:function dUI(){},
dUU:function dUU(d,e){this.a=d
this.b=e},
dUH:function dUH(d){this.a=d},
dUV:function dUV(d,e,f){this.a=d
this.b=e
this.c=f},
dUG:function dUG(d,e){this.a=d
this.b=e},
dUD:function dUD(d,e){this.a=d
this.b=e},
dUW:function dUW(d){this.a=d},
dUX:function dUX(d,e,f){this.a=d
this.b=e
this.c=f},
dVq:function dVq(){},
dVr:function dVr(d,e){this.a=d
this.b=e},
dVo:function dVo(d){this.a=d},
dVp:function dVp(d){this.a=d},
dVk:function dVk(d,e){this.a=d
this.b=e},
dVl:function dVl(d){this.a=d},
dVd:function dVd(d,e,f){this.a=d
this.b=e
this.c=f},
dVe:function dVe(d,e,f){this.a=d
this.b=e
this.c=f},
dVf:function dVf(d,e,f){this.a=d
this.b=e
this.c=f},
dVg:function dVg(d,e,f){this.a=d
this.b=e
this.c=f},
dVh:function dVh(d,e,f){this.a=d
this.b=e
this.c=f},
dVi:function dVi(d,e,f){this.a=d
this.b=e
this.c=f},
dVj:function dVj(d,e,f){this.a=d
this.b=e
this.c=f},
dVs:function dVs(){},
dVt:function dVt(){},
dVu:function dVu(){},
dVv:function dVv(d){this.a=d},
dVm:function dVm(d,e){this.a=d
this.b=e},
hOg(d){return B.d.dr(D.a6x,new C.fRC(d),new C.fRD())},
va:function va(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fRC:function fRC(d){this.a=d},
fRD:function fRD(){},
anj:function anj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aYr:function aYr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UJ:function UJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biR:function biR(){this.d=$
this.c=this.a=null},
dkm:function dkm(d,e){this.a=d
this.b=e},
dkk:function dkk(d,e){this.a=d
this.b=e},
dkl:function dkl(){},
dkn:function dkn(d,e){this.a=d
this.b=e},
hxX(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.be(J.k(u==null?"":u))
return new C.nM(t,w,v,u==null?new A.W(Date.now(),0,!1):u)},
M7(d,e){return C.ix3(d,e)},
ix3(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$M7=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$M7)
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
o=A.cs(o,new C.fUa(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("X<M.E>")
o=A.B(new A.X(o,new C.fUb(),n),n.k("M.E"))
B.d.b_(o,new C.fUc())
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
return A.i($async$M7,v)},
BJ(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BJ)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.h7O(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.V.au(r,null)),$async$BJ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BJ,v)},
aUw(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aUw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.M7(d,e),$async$aUw)
case 2:u=h
t=J.cJ(u)
s=t.bl(u,new C.hgx(f))
if(s===-1)t.ce(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BJ(d,e,u),$async$aUw)
case 3:return A.h(null,v)}})
return A.i($async$aUw,v)},
bGJ(d,e,f){var w=0,v=A.j(x.H),u
var $async$bGJ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.M7(d,e),$async$bGJ)
case 2:u=h
J.nh(u,new C.fQI(f))
w=3
return A.b(C.BJ(d,e,u),$async$bGJ)
case 3:return A.h(null,v)}})
return A.i($async$bGJ,v)},
bGZ(d,e){return C.ix2(d,e)},
ix2(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bGZ=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bGZ)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.PX
w=1
break}p=B.V.aP(0,q,null)
if(x.f.b(p)){o=A.a_(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aK(o.h(0,"emblem"))
k=k==null?null:B.i.M(k)
if(k==null)k=0
if(D.EI.am(0,o.h(0,"foil")))j=A.cV(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a8f,o.h(0,"position"))?A.cV(o.h(0,"position")):"middle"
g=B.d.q(D.a7A,o.h(0,"frame"))?A.cV(o.h(0,"frame")):"double"
f=B.d.q(D.a7w,o.h(0,"texture"))?A.cV(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.dde,o.h(0,"header"))?A.cV(o.h(0,"header")):"classic"
o=new C.IN(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.PX
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.PX
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bGZ,v)},
Tm(d,e,f){return C.iFS(d,e,f)},
iFS(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Tm=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aB(),$async$Tm)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.V.au(f.ak(),null)),$async$Tm)
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
return A.i($async$Tm,v)},
SM(d,e){return C.ix4(d,e)},
ix4(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$SM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$SM)
case 7:r=g
q=r.nd("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.M7(d,e),$async$SM)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lH(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$SM)
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
return A.i($async$SM,v)},
aiD(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aiD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SM(d,e),$async$aiD)
case 3:s=g
r=J.a1(s)
if(r.gJ(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gJ(s):"main"
r.I(s,t)
w=5
return A.b(A.aB(),$async$aiD)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aiD)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiD,v)},
a4U(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a4U=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.SM(d,e),$async$a4U)
case 2:s=h
J.fO(s,f)
w=3
return A.b(A.aB(),$async$a4U)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a4U)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4U)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a4U)
case 6:return A.h(null,v)}})
return A.i($async$a4U,v)},
nM:function nM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fUa:function fUa(){},
fUb:function fUb(){},
fUc:function fUc(){},
h7O:function h7O(){},
hgx:function hgx(d){this.a=d},
fQI:function fQI(d){this.a=d},
IN:function IN(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bUn:function bUn(d){this.a=d},
iGb(d,e,f,g,h,i,j){return A.a8(d,!1).ca(A.e7(new C.h8p(j,i,f,e,h,g),!0,null,x.H))},
SI(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$SI=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SM(h,g),$async$SI)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.T(D.aWS)
u=!1
w=1
break}w=4
return A.b(C.hSU(d,f,e),$async$SI)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aiD(h,g),$async$SI)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nM(""+(q+n),l,B.a.i(m.b),new A.W(Date.now(),0,!1)))}w=6
return A.b(C.BJ(h,r,p),$async$SI)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Tm(h,r,new C.IN("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$SI)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SI,v)},
h8p:function h8p(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a0t:function a0t(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aD6:function aD6(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dl1:function dl1(d){this.a=d},
dl0:function dl0(d,e){this.a=d
this.b=e},
dkQ:function dkQ(d,e){this.a=d
this.b=e},
dkN:function dkN(d,e){this.a=d
this.b=e},
dko:function dko(d){this.a=d},
dkp:function dkp(d,e){this.a=d
this.b=e},
dkR:function dkR(d){this.a=d},
dkx:function dkx(d){this.a=d},
dkv:function dkv(d){this.a=d},
dkw:function dkw(d){this.a=d},
dky:function dky(d){this.a=d},
dkO:function dkO(d){this.a=d},
dkP:function dkP(){},
dkt:function dkt(d){this.a=d},
dku:function dku(d,e){this.a=d
this.b=e},
dkz:function dkz(d){this.a=d},
dkA:function dkA(d,e){this.a=d
this.b=e},
dl_:function dl_(d){this.a=d},
dkZ:function dkZ(d,e){this.a=d
this.b=e},
dkY:function dkY(d){this.a=d},
dkK:function dkK(d){this.a=d},
dkJ:function dkJ(d){this.a=d},
dkL:function dkL(d){this.a=d},
dkq:function dkq(d,e){this.a=d
this.b=e},
dkM:function dkM(d,e){this.a=d
this.b=e},
dkD:function dkD(d){this.a=d},
dkE:function dkE(d){this.a=d},
dkC:function dkC(){},
dkF:function dkF(d){this.a=d},
dkG:function dkG(d){this.a=d},
dkH:function dkH(d,e){this.a=d
this.b=e},
dkI:function dkI(d,e,f){this.a=d
this.b=e
this.c=f},
dkB:function dkB(d,e){this.a=d
this.b=e},
dkT:function dkT(d){this.a=d},
dkS:function dkS(){},
dkU:function dkU(d){this.a=d},
dkV:function dkV(d){this.a=d},
dkW:function dkW(d){this.a=d},
dkX:function dkX(d,e){this.a=d
this.b=e},
dkr:function dkr(d){this.a=d},
dks:function dks(d){this.a=d},
a0x:function a0x(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjf:function bjf(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dmO:function dmO(d){this.a=d},
dmP:function dmP(d){this.a=d},
dmN:function dmN(d){this.a=d},
dmQ:function dmQ(d){this.a=d},
dmM:function dmM(d){this.a=d},
dmR:function dmR(d){this.a=d},
dmL:function dmL(d){this.a=d},
dmS:function dmS(d,e){this.a=d
this.b=e},
dmK:function dmK(d,e){this.a=d
this.b=e},
dmT:function dmT(d,e){this.a=d
this.b=e},
a0v:function a0v(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ah2:function ah2(d,e,f){this.a=d
this.b=e
this.c=f},
aD9:function aD9(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dlg:function dlg(d,e){this.a=d
this.b=e},
dlf:function dlf(d,e){this.a=d
this.b=e},
dlk:function dlk(d){this.a=d},
dlj:function dlj(d,e){this.a=d
this.b=e},
dlh:function dlh(d){this.a=d},
dli:function dli(d){this.a=d},
dll:function dll(d){this.a=d},
dlm:function dlm(d){this.a=d},
dle:function dle(d,e){this.a=d
this.b=e},
dld:function dld(d,e){this.a=d
this.b=e},
L9:function L9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_I:function a_I(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cT3:function cT3(d){this.a=d},
cT4:function cT4(){},
cT5:function cT5(d){this.a=d},
bgq:function bgq(d,e,f){this.b=d
this.c=e
this.a=f},
bgh:function bgh(d,e){this.b=d
this.a=e},
vb:function vb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a03:function a03(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgo:function bgo(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
dc6:function dc6(d,e,f){this.a=d
this.b=e
this.c=f},
dc5:function dc5(d,e){this.a=d
this.b=e},
dcv:function dcv(d){this.a=d},
dci:function dci(){},
dcw:function dcw(d){this.a=d},
dch:function dch(){},
dcx:function dcx(d,e){this.a=d
this.b=e},
dcg:function dcg(d,e){this.a=d
this.b=e},
dcy:function dcy(d,e){this.a=d
this.b=e},
dcf:function dcf(d,e){this.a=d
this.b=e},
dcz:function dcz(d){this.a=d},
dce:function dce(){},
dcA:function dcA(d,e){this.a=d
this.b=e},
dcd:function dcd(d,e){this.a=d
this.b=e},
dcB:function dcB(d){this.a=d},
dcq:function dcq(d,e){this.a=d
this.b=e},
dcC:function dcC(d){this.a=d},
dcD:function dcD(d){this.a=d},
dcF:function dcF(d){this.a=d},
dcG:function dcG(d){this.a=d},
dcp:function dcp(d,e){this.a=d
this.b=e},
dcH:function dcH(d,e){this.a=d
this.b=e},
aKk:function aKk(d){this.a=d},
blP:function blP(d){this.a=d},
bew:function bew(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
ank:function ank(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a2M:function a2M(d,e){this.a=d
this.b=e},
anl:function anl(d,e,f,g,h,i){var _=this
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
bUx:function bUx(d){this.a=d},
bUr:function bUr(d){this.a=d},
bUq:function bUq(d,e){this.a=d
this.b=e},
bUA:function bUA(d){this.a=d},
bUs:function bUs(d){this.a=d},
bUt:function bUt(d){this.a=d},
bUw:function bUw(d){this.a=d},
bUv:function bUv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bUy:function bUy(d,e){this.a=d
this.b=e},
bUz:function bUz(){},
bUu:function bUu(d){this.a=d},
bUo:function bUo(d,e){this.a=d
this.b=e},
bUp:function bUp(d){this.a=d},
brs:function brs(d,e){this.b=d
this.a=e},
aD7:function aD7(){},
iS(d,e){var w
$.T()
w=A.L()
w.b=B.ae
w.c=e
w.r=d.gp(0)
w.d=B.bG
w.e=B.dP
return w},
bGg(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.nO(0,a0?-f:f,f)
w=A.bZ(B.hF,8,36)
v=B.v.j(0.3)
u=$.T()
t=A.L()
t.r=v.gp(0)
d.c1(w,t)
w=a1===D.YG
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eFI,new A.r(-4+v,-2),C.iS(q,5))
d.ah(D.eDl,new A.r(4-v,-2),C.iS(q,5))}else{t=A.bZ(B.KC,14,40)
p=A.L()
p.r=v.gp(0)
d.c1(t,p)}v=u.r
u=x.v
o=new A.aI(v,B.ak,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.ck(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.ck(15,-40,11,t))
o.E(new A.bA())
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aI(v,B.ak,k,k,A.a([],u))
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
break}if(a1===D.b4b){n=-52+w*14
d.ah(new A.r(10,n-22),new A.r(10,n+44),C.iS(F.GO,3.4))
d.ah(D.eFZ,new A.r(9,n),C.iS(q,4))
d.ah(D.eDM,new A.r(10,n),C.iS(q,4))}else if(a1===D.b4c){d.ah(D.eEP,new A.r(-8,-26-Math.max(0,w)*6),C.iS(q,4))
d.ah(D.eBO,new A.r(8,-26-Math.max(0,-w)*6),C.iS(q,4))}else{w=s*3
v=-38-r
d.ah(D.eET,new A.r(-12-w,v),C.iS(q,4))
d.ah(D.aOi,new A.r(12+w,v),C.iS(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fro,w)
m=new A.r(0,-77-r)
w=A.bZ(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c1(w,v)
w=h.y
if(w!=null){v=A.bZ(m.a7(0,K.wa),15,24)
u=A.L()
u.r=w.gp(0)
d.c1(v,u)
u=m.a7(0,D.eBI)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.bZ(m.a7(0,B.ui),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cQ(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a7(0,D.eFX),m.a7(0,D.eEN),C.iS(v,2.2))
d.ah(m.a7(0,D.eDL),m.a7(0,D.eBF),C.iS(v,2.2))}if(w===4){w=m.a7(0,D.eG0)
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
v.r=D.lY.gp(0)
d.c1(w,v)
v=A.bZ(l.a7(0,K.aOf),5,12)
w=A.L()
w.r=D.bjB.gp(0)
d.c1(v,w)
d.ah(l.a7(0,D.eFT),l.a7(0,K.aOD),C.iS(B.d_,1.4))
d.ah(D.aOi,new A.r(15,-88-r),C.iS(q,3.6))}j.restore()},
hMS(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
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
d.lB(D.aUw,A.L())
C.ils(d,g,h,i,j)
s=(k==null?D.aau:k).a-w>=0?1:-1
w=A.L()
w.a=B.MY
w.san(A.jR(new A.r(s*70,-60),new A.r(-s*70,-60),A.a([D.akx.j(0.5),D.akx.j(0.12),D.brk.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.w,null))
d.aE(D.aUw,w)
r.restore()
r.restore()},
ils(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
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
s=A.bx(D.frp,B.un)
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
a1.nO(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aI(p.r,B.ak,e,e,A.a([],n))
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
a1.mC(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dkK[j]
i=new A.ar(B.U,B.S,B.X,B.Y,B.W)
i.b=B.ae
i.c=5
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(-34+u,-64),new A.r(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ao(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.T()
f=new A.ar(B.U,B.S,B.X,B.Y,B.W)
f.r=i.gp(0)
a1.O(new A.r(g,h),3.6,f)
f=new A.ar(B.U,B.S,B.X,B.Y,B.W)
f.r=u.gp(0)
a1.O(new A.r(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.U,B.S,B.X,B.Y,B.W)
i.b=B.ae
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(g,-64),new A.r(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.U,B.S,B.X,B.Y,B.W)
i.b=B.ae
i.c=1.6
i.r=k.gp(0)
i.d=B.bG
i.e=B.dP
a1.ah(new A.r(-30,h),new A.r(30,h),i)}break
default:a1.ah(D.eFl,D.eCt,C.iS(a2.c.j(0.9),3))}a1.ah(D.eFU,D.eEV,C.iS(B.v.j(0.18),1.6))
a1.ah(D.eBN,K.aOk,C.iS(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.T()
i=A.L()
i.r=u.gp(0)
a1.aE(D.fq6,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.fqk,i)
n=new A.aI(k.r,B.ak,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.ck(0,-57,9,-66))
n.E(new A.ck(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cQ(D.fqt,0.1,2.941592653589793,!1,C.iS(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.aaz
n=25*q
k=23*q
i=9*q
C.hIC(a1,new A.r(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.F9:o
C.hIC(a1,new A.r(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eDd,D.eD9,C.iS(D.alw,4))
a1.ah(D.eDb,D.eD7,C.iS(D.He.j(0.7),1.4))
u=A.L()
u.r=B.d_.gp(0)
a1.O(D.eDa,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.ju(0,a3.f)
a1.bV(0,r)
C.ilo(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hIC(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcM(),q=r===0?B.hF:s.f0(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.r(o,w)
if(o*i<0)v=new A.r(-o,-w)
u=e.a7(0,q.aO(0,n)).a7(0,v.aO(0,m))
t=e.a7(0,q.aO(0,p))
d.ah(e,u,C.iS(j,l))
o=A.ap(j,B.v,0.2)
o.toString
d.ah(e,u,C.iS(o,l*0.35))
d.ah(u,t,C.iS(k,l*0.78))
o=A.ap(k,B.v,0.22)
o.toString
d.ah(u,t,C.iS(o,l*0.22))
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
ilo(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bZ(B.w9,40,38)
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
t=new A.aI(v,B.ak,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.i5(13,-20,17,-9,16,2))
t.E(new A.i5(15,13,8,20,0,20))
t.E(new A.i5(-8,20,-15,13,-16,2))
t.E(new A.i5(-17,-9,-13,-20,0,-20))
t.E(new A.bA())
u=A.L()
u.san(A.ww(D.eFK,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.w,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iS(c8.j(0.5),0.8)
c2.cQ(D.frA,3.455751918948773,2.5132741228718345,!1,s)
c2.cQ(D.fqd,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eF_,K.aOM,s)
c2.ah(D.eC_,D.eBR,s)
c2.cQ(D.fqs,2.2,1.4,!1,s)
c2.cQ(D.fqb,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.U,B.S,B.X,B.Y,B.W)
n.r=c0.gp(0)
c2.O(new A.r(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fqH,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aI(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.ck(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.ck(0,-12,-13,-6))
p.E(new A.bA())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eER,D.eBS,C.iS(G.nN,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eF5,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.eC4,3,o)
o=new A.aI(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.ck(-12,22,0,26))
o.E(new A.ck(12,22,13,6))
o.E(new A.ck(8,13,0,12))
o.E(new A.ck(-8,13,-13,6))
o.E(new A.bA())
p=A.L()
p.r=B.hX.gp(0)
c2.af(o,p)
p=new A.aI(v,B.ak,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.ck(0,6,7,8))
p.E(new A.ck(0,10.5,-7,8))
o=A.L()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aI(v,B.ak,b9,b9,A.a([],w))
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
c2.cQ(D.fqO,3.4,2.5,!1,C.iS(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cQ(D.fqA,3.6,2.2,!1,C.iS(o,1.2))
o=new A.aI(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.ck(27,-34,25,-19))
o.E(new A.ck(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aI(v,B.ak,b9,b9,A.a([],w))
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
o=new A.ar(B.U,B.S,B.X,B.Y,B.W)
o.b=B.ae
o.c=0.9
o.r=p.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(r*3.6,-19+Math.abs(r)*0.8),new A.r(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aEZ[l]
o=new A.ar(B.U,B.S,B.X,B.Y,B.W)
o.b=B.ae
o.c=4.5
o.r=c0.gp(0)
o.d=B.bG
o.e=B.dP
c2.ah(new A.r(k,0),new A.r(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.U,B.S,B.X,B.Y,B.W)
o.r=p.gp(0)
c2.O(new A.r(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fqK,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aap,K.aao,C.iS(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cQ(D.fqe,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bZ(D.eG2,5,8)
o=D.ahK.j(i)
n=A.L()
n.r=o.gp(0)
c2.c1(p,n)
n=A.bZ(D.eEK,5,8)
p=D.ahK.j(i)
o=A.L()
o.r=p.gp(0)
c2.c1(n,o)
h=c4.e*2.4
o=new A.aI(v,B.ak,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.ck(h-3.4,6,h-2.6,7.4))
o.E(new A.ck(h,8.8,h+2.6,7.4))
c2.af(o,C.iS(c8.j(0.75),1.1))
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
a6=new A.ar(B.U,B.S,B.X,B.Y,B.W)
a6.r=B.c.j(0.96).gp(0)
c2.c1(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bs(d.save())
a6=A.a([],w)
a4=new A.aI(v,B.ak,b9,b9,a6)
a6.push(new A.jL(A.bZ(new A.r(a5,-3),a3,7)))
a4.ac()
a3=a4.e
if(a3==null)a3=a4.e=new A.Ev(a4.gle().a.snapshot())
d.clipPath(a3.a,$.mT(),!0)
a3=new A.ar(B.U,B.S,B.X,B.Y,B.W)
a3.r=D.bnx.gp(0)
c2.O(new A.r(a7,a8),2.1,a3)
a3=new A.ar(B.U,B.S,B.X,B.Y,B.W)
a3.r=B.v.gp(0)
c2.O(new A.r(a7,a8),1.05,a3)
a3=new A.ar(B.U,B.S,B.X,B.Y,B.W)
a3.r=B.c.gp(0)
c2.O(new A.r(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a_R:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.U,B.S,B.X,B.Y,B.W)
a9.b=B.ae
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
b1.toString}b2=new A.ar(B.U,B.S,B.X,B.Y,B.W)
b2.b=B.ae
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bG
b2.e=B.dP
c2.ah(new A.r(a5-a4,b0-a6+0.4),new A.r(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.by6
else{u=A.ap(c8,D.brm,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aI(v,B.ak,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.ck(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.ck(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bA())
v=A.L()
v.r=D.bqE.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mC(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a5(w,11,w+b6*2,13.2),u)
u=A.bZ(new A.r(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.byb.gp(0)
c2.c1(u,w)
d.restore()
c2.af(b8,C.iS(b4,1.1))}else{u=new A.aI(v,B.ak,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.ck(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iS(b4,1.5))
if(b5>0.6){w=new A.aI(v,B.ak,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.ck(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.ck(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cQ(D.fqr,-1.2,2.2,!1,C.iS(c8.j(0.5),0.8))
c2.cQ(D.fqg,2.141592653589793,2.2,!1,C.iS(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.eEs,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.eEp,1.7,w)}},
iqV(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.T(),f=new A.oZ(new A.ow()),e=A.v5(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jR(B.J,new A.r(0,a0*0.46),D.dhc,D.d7I,B.w,h))
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
t=new A.ar(B.U,B.S,B.X,B.Y,B.W)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.O(new A.r(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bs(a2.save())
a2.translate(200,120)
e.ju(0,-0.5)
d=A.L()
a0=x.O
d.san(A.ww(B.J,230,A.a([D.bma,B.L],a0),h,B.w,h,h,0))
e.c1(D.fqW,d)
a2.restore()
d=A.L()
d.san(A.ww(D.aax,58,A.a([D.bpE,B.L],a0),h,B.w,h,h,0))
e.O(D.aax,58,d)
d=A.L()
d.r=D.bkT.gp(0)
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
r=new A.aI(g.r,B.ak,h,h,u)
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
g=[D.bjp,D.blr,D.brG][s]
u=$.T()
t=new A.ar(B.U,B.S,B.X,B.Y,B.W)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cBH[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.U,B.S,B.X,B.Y,B.W)
u.b=B.ae
u.c=2.4
u.r=D.a0E.gp(0)
u.d=B.bG
u.e=B.dP
e.ah(new A.r(o,k),new A.r(g,d),u)
g=A.bZ(new A.r(g,k-27),11,46)
u=new A.ar(B.U,B.S,B.X,B.Y,B.W)
u.r=D.a0E.gp(0)
e.c1(g,u)
d=A.bZ(new A.r(o-12,d),8,24)
u=new A.ar(B.U,B.S,B.X,B.Y,B.W)
u.r=D.a0E.gp(0)
e.c1(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ar(B.U,B.S,B.X,B.Y,B.W)
u.r=D.bkW.j(0.8).gp(0)
e.O(new A.r(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jR(D.eBm,D.eBp,D.d9W,B.xN,B.w,h))
e.aE(new A.a5(-200,412,650,1300),g)
j=new A.e4()
j.cV(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bZ(new A.r(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h9()?B.c:B.v
d=new A.ar(B.U,B.S,B.X,B.Y,B.W)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.c1(u,d)}J.bs(a2.save())
a2.translate(225,590)
e.nO(0,1,0.34)
g=A.L()
g.san(A.ww(B.J,250,A.a([D.bsG,D.blM,D.buC],a0),A.a([0,0.8,1],x.n),B.w,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.akd,D.bkq,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.T()
a0=new A.ar(B.U,B.S,B.X,B.Y,B.W)
a0.b=B.ae
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o+i*2,k),new A.r(o+i*5,g+Math.abs(i)*3),a0)}}C.ijC(e)
for(l=0;l<3;++l)C.imS(e,D.aCN[l])
C.imH(e,D.eCH)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.T()
a0=new A.ar(B.U,B.S,B.X,B.Y,B.W)
a0.b=B.ae
a0.c=2.4
a0.r=D.a0A.gp(0)
a0.d=B.bG
a0.e=B.dP
e.ah(new A.r(o,452+g),new A.r(o+1,436+d),a0)}e.ah(D.eBP,D.eC7,C.iS(D.bl9,1.6))
a2.restore()
return f.n3()},
ijC(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.T().r,g=x.v,f=new A.aI(h,B.ak,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.i5(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i5(416,382,432,422,428,462))
f.E(new A.bA())
w=A.L()
w.san(A.jR(new A.r(354,0),new A.r(430,0),D.dGU,B.mc,B.w,i))
d.af(f,w)
v=new A.e4()
v.cV(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.v.j(0.18)
p=new A.ar(B.U,B.S,B.X,B.Y,B.W)
p.b=B.ae
p.c=1.1
p.r=q.gp(0)
p.d=B.bG
p.e=B.dP
d.ah(new A.r(t,s),new A.r(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.dmh[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aI(h,B.ak,i,i,l)
l.push(new A.aZ(r,336))
k.ac()
r=new A.ck(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.aj(p)
k.ac()
r=new A.ar(B.U,B.S,B.X,B.Y,B.W)
r.b=B.ae
r.c=8
r.r=D.aiw.gp(0)
r.d=B.bG
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.U,B.S,B.X,B.Y,B.W)
l.r=A.ap(D.bl1,D.brE,v.ai()).j(0.92).gp(0)
d.O(new A.r(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.U,B.S,B.X,B.Y,B.W)
r.b=B.ae
r.c=1.2
r.r=D.a0A.gp(0)
r.d=B.bG
r.e=B.dP
d.ah(new A.r(w,q+8),new A.r(w,q+22),r)
q=A.bZ(new A.r(w,q+28),13,7)
w=new A.ar(B.U,B.S,B.X,B.Y,B.W)
w.r=D.bt2.gp(0)
d.c1(q,w)}},
imS(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bZ(new A.r(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.T(),b3=A.L()
b3.r=b1.gp(0)
b4.c1(b0,b3)
b2=b2.r
b3=x.v
w=new A.aI(b2,B.ak,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.ck(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bA())
u=A.L()
u.san(A.jR(new A.r(b0,0),new A.r(v,0),D.dmo,B.mc,B.w,a4))
b4.af(w,u)
t=new A.e4()
t.cV(B.o.S(a5*7))
v=b4.c
J.bs(v.save())
b4.mC(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.v.j(0.14)
n=new A.ar(B.U,B.S,B.X,B.Y,B.W)
n.b=B.ae
n.c=1
n.r=o.gp(0)
n.d=B.bG
n.e=B.dP
b4.ah(new A.r(r,q),new A.r(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ak9.j(0.75)
n=A.L()
n.r=o.gp(0)
b4.aE(new A.a5(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.bd(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aI(b2,B.ak,a4,a4,j)
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
j=new A.ar(B.U,B.S,B.X,B.Y,B.W)
j.r=D.lY.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aI(b2,B.ak,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.bd(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iS(D.ak9.j(0.7),1.6))
v.restore()
b0=$.T().r
b2=new A.aI(b0,B.ak,a4,a4,A.a([],b3))
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
m.r=D.akl.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.akl.gp(0)
b4.O(new A.r(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aI(b0,B.ak,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.ck(a5-a9,n,a5,u))
e.E(new A.ck(a5+a9,n,p,j))
e.E(new A.ck(a5,b1+a7*0.34,o,j))
e.E(new A.bA())
b1=A.L()
n=a7*1.4
b1.san(A.jR(new A.r(a5-n,0),new A.r(a5+n,0),D.dq7,B.mc,B.w,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mC(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h9()?B.v:D.bkz).j(0.16)
i=new A.ar(B.U,B.S,B.X,B.Y,B.W)
i.b=B.ae
i.c=0.9
i.r=n.gp(0)
i.d=B.bG
i.e=B.dP
b4.ah(new A.r(a5+(p-0.5)*3,u),new A.r(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aI(b0,B.ak,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ac()
n=new A.ck(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.aj(b1)
p.ac()
b1=B.v.j(0.22)
n=new A.ar(B.U,B.S,B.X,B.Y,B.W)
n.b=B.ae
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
v=new A.ar(B.U,B.S,B.X,B.Y,B.W)
v.b=B.ae
v.c=1.1
v.r=D.bs7.gp(0)
v.d=B.bG
v.e=B.dP
b4.ah(new A.r(a2,a3),new A.r(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aI(b0,B.ak,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bA())
b0=A.L()
b0.r=D.bo1.gp(0)
b4.af(a9,b0)},
imH(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aEW[s]
$.T()
q=new A.ar(B.U,B.S,B.X,B.Y,B.W)
q.b=B.ae
q.c=3
q.r=D.a0A.gp(0)
q.d=B.bG
q.e=B.dP
d.ah(new A.r(r,u),new A.r(r,t),q)}u=A.bZ(e.a7(0,K.aOe),24,36)
t=$.T()
r=A.L()
r.r=D.bxj.gp(0)
d.c1(u,r)
t=new A.aI(t.r,B.ak,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.ck(w,v-24,r,u))
t.E(new A.bA())
u=A.L()
u.r=D.aje.gp(0)
d.af(t,u)},
im3(d){switch(B.o.F(d,8)){case 0:return D.b3r
case 1:return D.b3p
case 2:return D.b3o
case 3:return D.b3n
case 4:return D.b3q
case 5:return D.b3s
case 6:return D.hSG
default:return D.hSF}},
Tj(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.brt()
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
C.hMS(d,e,p,C.im3(m),w,s,m,l)},
hOm(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bWb:function bWb(){var _=this
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
tt:function tt(d,e,f,g,h,i,j,k,l,m){var _=this
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
brt:function brt(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
anD:function anD(){this.b=this.a=null},
aYw:function aYw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bW3:function bW3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bW4:function bW4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bW5:function bW5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bW6:function bW6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bW7:function bW7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bW8:function bW8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bW9:function bW9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWa:function bWa(){},
bW2:function bW2(d){this.a=d},
ahb:function ahb(d,e){this.a=d
this.b=e},
af6:function af6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Nw(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bUN(s)
s.bE6(d)
return s},
Hr(d,e,f,g,h,i,j){var w,v=A.U(g).k("X<1>")
v=A.d7(new A.X(g,new C.fEy(f),v),v.k("M.E"))
w=A.B(v,A.a3(v).k("ci.E"))
B.d.dY(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cU(w,0,A.dw(3,"count",x.S),A.U(w).c))
B.d.dY(v,d)
return new C.lN(e,v,B.d.c8(v,f),h,i,"tree",j)},
iHR(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.hgn(c1),c3=x.s,c4=A.a([],c3)
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
if(h===D.xi)g="father"
else g=h===D.oY?"mother":"parent"
h=B.a.i(i.b)
f=A.B(new A.X(t,new C.hgp(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.Hr(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hgq(i,m),p),o)
B.d.dY(d,c6)
c2.$2(b4,new C.lN("True or false: "+h+" is the "+g+" of "+l+".",A6.Ty,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lN("True or false: "+B.a.i(B.d.gG(d).b)+" is the "+g+" of "+l+".",A6.Ty,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.GE(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hgr(l,a0,c5),v),s)
e=a1.c
if(e===D.xi)e="son"
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
for(e=A.U(a0),a2=e.k("iQ<1>"),a3=new A.iQ(a0,1,b3,a2),a3.nf(a0,1,b3,e.c),a3=new A.bR(a3,a3.gJ(0),a2.k("bR<aj.E>")),a2=a2.k("aj.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.Hr(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gG(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gG(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.asS(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hgs(l),v),s)
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
j=A.B(new A.X(t,new C.hgt(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.xi
if(e)a2=b7
else a2=f===D.oY?b8:b9
if(e)f=b7
else f=f===D.oY?b8:b9
c2.$2("grand",C.Hr(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aOQ(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.X(t,new C.hgu(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.Hr(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cUI)
h=l+" was born in "+k
c2.$2("place",C.Hr(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.db3)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.Hr(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.Hr(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jj(b1,b3,b3)
c2.$2("year",C.Hr(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bGV(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Nw(d),l=new A.e4()
l.cV(f)
w=C.iHR(m,l,g)
for(v=new A.ds(w,w.r,w.e);v.C();)J.hw_(v.d,l)
v=A.a3(w).k("cu<1>")
u=A.B(new A.cu(w,v),v.k("M.E"))
B.d.dY(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fSf(n,w))))break
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
t.push(C.hMZ(o,l))}}else if(!g&&v>3){o=C.hMZ(D.aBP[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hMZ(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.dY(w,e)
return new C.lN(d.a,w,B.d.c8(w,v),d.d,d.e,d.f,d.r)},
hSt(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Nw(a2),a1=new A.e4()
a1.cV(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.GE(q).length>=2)u.push(q)}B.d.dY(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.GE(n)
l=A.U(m)
k=new A.iQ(m,0,5,l.k("iQ<1>"))
k.nf(m,0,5,l.c)
j=k.dd(0)
if(new A.O(j,new C.h6I(),A.U(j).k("O<1,G>")).fD(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aUg(a0,j[i]))
w.push(new C.avL("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.c8(e.c_(0,a0.ao0(q),new C.h6J()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cu<1>")
d=A.B(new A.cu(e,t),t.k("M.E"))
B.d.fd(d)
v=A.a([],v)
for(u=A.cU(d,0,A.dw(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bR(u,u.gJ(0),t.k("bR<aj.E>")),t=t.k("aj.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cJ(s)
m.dY(s,a1)
v.push(m.gG(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aUg(a0,v[r]))
w.push(new C.avL("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aSG(d){return B.d.aps(D.aEi,new C.fO3(d))},
ixy(d){return A.nP(new A.X(D.aEi,new C.fV6(d),x.av))},
bVB(d){return C.i1m(d)},
i1m(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bVB=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bVB)
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
return A.i($async$bVB,v)},
C3(d,e){return C.i1j(d,e)},
i1j(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
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
bVA(d,e,f){return C.i1k(d,e,f)},
i1k(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bVA=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bVA)
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
return A.i($async$bVA,v)},
C4(d,e,f,g){return C.i1l(d,e,f,g)},
i1l(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
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
bJd(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hir(d,e,f,g){return new C.amb(g,d==null?A.a(["","","",""],x.s):d,e,f)},
i_n(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aQ(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.bO)
while(u.C())w.push(J.k(u.gP(u)))
u=x.N
w=A.cU(w,0,A.dw(4,"count",x.S),u).dd(0)
B.d.u(w,A.c3(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.i.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.i.M(u)
return C.hir(w,v,B.o.D(u==null?20:u,5,60),t)},
hxa(d){var w,v,u,t,s,r,q=J.a1(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.i_n(A.a_(r,t,s)))}return new C.Ne(p,w,v)},
hra(d){var w,v=A.a([],x.c)
for(w=J.aQ(d.z);w.C();)v.push(C.hxa(w.gP(w)))
return v},
aUg(d,e){var w=e.c===D.oY
if(d.ao0(e)===0&&d.GE(e).length!==0)return w?0:1
if(d.GE(e).length!==0||d.asS(e)!=null)return w?2:3
return w?4:5},
hTy(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nw(a4),a3=new A.e4()
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
j=i.h(0,k)}h=a2.GE(m)
g=a2.asS(m)
f=a2.aOQ(m)
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
if(k===D.xi)k="father"
else k=k===D.oY?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gG(h).b)+".")}if(j!=null){k=j.c
if(k===D.xi)k="father"
else k=k===D.oY?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dY(l,a3)
B.d.b_(l,new C.hgO())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hgP(d),o),n)
B.d.dY(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iQ(a0,0,3,i.k("iQ<1>"))
a1.nf(a0,0,3,i.c)
B.d.u(k,a1)
B.d.dY(k,a3)
a1=C.aUg(a2,m)
i=new A.iQ(l,0,4,p)
i.nf(l,0,4,r)
w.push(new C.bcG(d,a1,i.dd(0),k))
if(w.length>=5)break}return w},
hKe(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hSE(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Nw(a4),a3=new A.e4()
a3.cV(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.GE(q).length>=2)u.push(q)}B.d.dY(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.GE(l)
j=A.U(k)
i=new A.iQ(k,0,4,j.k("iQ<1>"))
i.nf(k,0,4,j.c)
h=i.dd(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.h7k(q))&&q.d!==j)i.push(q)}B.d.dY(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iQ(i,0,k,m)
j.nf(i,0,k,n)
f=j.dd(0)
j=B.a.i(l.b)
k=C.aUg(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aUg(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aUg(a2,f[g]))
w.push(new C.ab8(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lN:function lN(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bUN:function bUN(d){this.b=d
this.c=$},
bUO:function bUO(){},
bUP:function bUP(d){this.a=d},
fEy:function fEy(d){this.a=d},
hgn:function hgn(d){this.a=d},
hgo:function hgo(){},
hgp:function hgp(d){this.a=d},
hgq:function hgq(d,e){this.a=d
this.b=e},
hgr:function hgr(d,e,f){this.a=d
this.b=e
this.c=f},
hgm:function hgm(d,e){this.a=d
this.b=e},
hgs:function hgs(d){this.a=d},
hgt:function hgt(d){this.a=d},
hgu:function hgu(d,e,f){this.a=d
this.b=e
this.c=f},
hgl:function hgl(d,e){this.a=d
this.b=e},
fSf:function fSf(d,e){this.a=d
this.b=e},
avL:function avL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h6I:function h6I(){},
h6J:function h6J(){},
zT:function zT(d,e,f){this.a=d
this.b=e
this.c=f},
fO3:function fO3(d){this.a=d},
fV6:function fV6(d){this.a=d},
amb:function amb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPz:function bPz(){},
Ne:function Ne(d,e,f){this.a=d
this.b=e
this.c=f},
bcG:function bcG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hgO:function hgO(){},
hgP:function hgP(d){this.a=d},
ab8:function ab8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h7k:function h7k(d){this.a=d},
bk5:function bk5(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ah9:function ah9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
alu:function alu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alv:function alv(d,e,f,g,h){var _=this
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
bNH:function bNH(d){this.a=d},
bNC:function bNC(){},
bNI:function bNI(){},
bNA:function bNA(){},
bNB:function bNB(){},
bNG:function bNG(d){this.a=d},
bND:function bND(d,e){this.a=d
this.b=e},
bNF:function bNF(d,e){this.a=d
this.b=e},
bNE:function bNE(d,e){this.a=d
this.b=e},
bNz:function bNz(d){this.a=d},
bfd:function bfd(d,e){this.b=d
this.a=e},
Rm:function Rm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD5:function aD5(d,e,f){this.b=d
this.c=e
this.a=f},
aBw:function aBw(d,e,f){this.a=d
this.b=e
this.c=f},
awl:function awl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awm:function awm(d,e,f){var _=this
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
ctL:function ctL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctM:function ctM(d){this.a=d},
ctK:function ctK(d){this.a=d},
ctN:function ctN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctO:function ctO(){},
ctP:function ctP(d,e){this.a=d
this.b=e},
ctQ:function ctQ(){},
ctR:function ctR(d){this.a=d},
ctH:function ctH(d){this.a=d},
ctI:function ctI(d,e){this.a=d
this.b=e},
ctJ:function ctJ(d,e,f){this.a=d
this.b=e
this.c=f},
ctC:function ctC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ctE:function ctE(d,e){this.a=d
this.b=e},
ctF:function ctF(d,e){this.a=d
this.b=e},
ctD:function ctD(d,e){this.a=d
this.b=e},
ctB:function ctB(){},
ctG:function ctG(){},
beF:function beF(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cU7:function cU7(){},
aAh:function aAh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAi:function aAi(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cII:function cII(d){this.a=d},
cIH:function cIH(d){this.a=d},
cIQ:function cIQ(d,e){this.a=d
this.b=e},
cIR:function cIR(d,e){this.a=d
this.b=e},
cIS:function cIS(d){this.a=d},
cIP:function cIP(d){this.a=d},
cIT:function cIT(d){this.a=d},
cIU:function cIU(d,e){this.a=d
this.b=e},
cIV:function cIV(){},
cIW:function cIW(d){this.a=d},
cIK:function cIK(d){this.a=d},
cIL:function cIL(d,e){this.a=d
this.b=e},
cIJ:function cIJ(d,e){this.a=d
this.b=e},
cIM:function cIM(){},
cIN:function cIN(){},
cIO:function cIO(d,e){this.a=d
this.b=e},
aBg:function aBg(){},
aII:function aII(){},
hoM(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.btR((w-450*u)/2,(v-900*u)/2,u)},
agY:function agY(){},
fgI:function fgI(d){this.a=d},
aMA:function aMA(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fr4:function fr4(d){this.a=d},
ant:function ant(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anu:function anu(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qk$=f
_.ME$=g
_.aox$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
bVz:function bVz(d){this.a=d},
bVy:function bVy(){},
bVw:function bVw(d){this.a=d},
bVu:function bVu(){},
bVv:function bVv(d){this.a=d},
bVr:function bVr(d,e){this.a=d
this.b=e},
bVs:function bVs(){},
bVt:function bVt(d){this.a=d},
bVx:function bVx(d,e){this.a=d
this.b=e},
bVq:function bVq(d){this.a=d},
bvB:function bvB(d,e){this.b=d
this.a=e},
fgJ:function fgJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fgK:function fgK(d,e,f){this.a=d
this.b=e
this.c=f},
fgL:function fgL(d,e,f){this.a=d
this.b=e
this.c=f},
fgM:function fgM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fgN:function fgN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fgO:function fgO(){},
anr:function anr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ans:function ans(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qk$=f
_.ME$=g
_.aox$=h
_.bv$=i
_.ab$=j
_.c=_.a=null},
bVc:function bVc(){},
bVn:function bVn(d,e){this.a=d
this.b=e},
bVo:function bVo(d){this.a=d},
bVp:function bVp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVj:function bVj(){},
bVi:function bVi(d,e){this.a=d
this.b=e},
bVk:function bVk(d,e){this.a=d
this.b=e},
bVl:function bVl(){},
bVm:function bVm(d){this.a=d},
bVe:function bVe(d){this.a=d},
bVf:function bVf(d){this.a=d},
bVg:function bVg(d){this.a=d},
bVd:function bVd(d,e){this.a=d
this.b=e},
bVh:function bVh(d){this.a=d},
blX:function blX(d,e){this.b=d
this.a=e},
dwg:function dwg(){},
a34:function a34(d,e){this.a=d
this.b=e},
ann:function ann(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ano:function ano(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qk$=e
_.ME$=f
_.aox$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
bUZ:function bUZ(d){this.a=d},
bUY:function bUY(){},
bUX:function bUX(){},
bUR:function bUR(){},
bUS:function bUS(){},
bUW:function bUW(d,e,f){this.a=d
this.b=e
this.c=f},
bUV:function bUV(d){this.a=d},
bUT:function bUT(d,e){this.a=d
this.b=e},
bUU:function bUU(d){this.a=d},
blm:function blm(d,e){this.b=d
this.a=e},
aD8:function aD8(){},
biT:function biT(){},
aDa:function aDa(){},
biU:function biU(){},
aDb:function aDb(){},
biV:function biV(){},
uK(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.aa(0,B.H,f.j(0.4),B.hS,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.V(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.p(u,A.A(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.m),u,u,u,u,B.PB,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hxY(d,e,f,g,h,i,j){return new C.anp(i,h,d,j,e,f,g,null)},
a7z:function a7z(d,e){this.c=d
this.a=e},
blt:function blt(d){this.a=d},
tS:function tS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bUQ:function bUQ(d){this.a=d},
IP:function IP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
X4:function X4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
boh:function boh(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e76:function e76(d,e){this.a=d
this.b=e},
e77:function e77(d){this.a=d},
e78:function e78(d,e){this.a=d
this.b=e},
e74:function e74(d){this.a=d},
e75:function e75(d){this.a=d},
e73:function e73(d){this.a=d},
e71:function e71(d){this.a=d},
e72:function e72(d){this.a=d},
e70:function e70(d,e){this.a=d
this.b=e},
e79:function e79(d){this.a=d},
e7a:function e7a(d,e){this.a=d
this.b=e},
e7b:function e7b(d,e){this.a=d
this.b=e},
e7c:function e7c(d,e){this.a=d
this.b=e},
e7f:function e7f(d,e){this.a=d
this.b=e},
e7g:function e7g(d,e){this.a=d
this.b=e},
e7h:function e7h(d,e){this.a=d
this.b=e},
e7i:function e7i(d,e){this.a=d
this.b=e},
e7j:function e7j(d,e){this.a=d
this.b=e},
e7k:function e7k(d,e,f){this.a=d
this.b=e
this.c=f},
e7l:function e7l(d,e){this.a=d
this.b=e},
e7m:function e7m(d,e){this.a=d
this.b=e},
e7d:function e7d(d){this.a=d},
e7e:function e7e(d){this.a=d},
a0V:function a0V(d,e){this.a=d
this.b=e},
anp:function anp(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
anq:function anq(d){var _=this
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
bVa:function bVa(d){this.a=d},
bVb:function bVb(d){this.a=d},
bV9:function bV9(d){this.a=d},
bV0:function bV0(d){this.a=d},
bV1:function bV1(d){this.a=d},
bV_:function bV_(d){this.a=d},
bV6:function bV6(d,e,f){this.a=d
this.b=e
this.c=f},
bV7:function bV7(d){this.a=d},
bV3:function bV3(d,e){this.a=d
this.b=e},
bV4:function bV4(d,e,f){this.a=d
this.b=e
this.c=f},
bV8:function bV8(){},
bV5:function bV5(d,e){this.a=d
this.b=e},
bV2:function bV2(d){this.a=d},
UK:function UK(d,e){this.c=d
this.a=e},
anm:function anm(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bUB:function bUB(d){this.a=d},
bUC:function bUC(d){this.a=d},
bUM:function bUM(){},
bUL:function bUL(d,e,f){this.a=d
this.b=e
this.c=f},
bUG:function bUG(d,e){this.a=d
this.b=e},
bUF:function bUF(d,e){this.a=d
this.b=e},
bUH:function bUH(d){this.a=d},
bUI:function bUI(d,e){this.a=d
this.b=e},
bUJ:function bUJ(d,e){this.a=d
this.b=e},
bUE:function bUE(d,e){this.a=d
this.b=e},
bUK:function bUK(d,e,f){this.a=d
this.b=e
this.c=f},
bUD:function bUD(d,e){this.a=d
this.b=e},
iw0(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.akf(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.W(Date.now(),0,!1))
s=new C.fRG(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("X<1>"),q=q.k("cQ<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.zN)m.push(l===D.xi?"male":"female")
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
if(l&&h==null)m.push("about "+(t-A.jj(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jj(h,a2,a2)-A.jj(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.B(new A.cQ(new A.X(a4,new C.fRE(u,f),p),new C.fRF(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aL(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aL(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.av(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iw1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.akf(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fRL(v,e)
q=new C.fRJ(v)
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
for(l=B.d.gae(e),k=new A.eR(l,new C.fRK(p,m));k.C();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aL(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
igS(d,e,f,g){var w,v,u=C.iw2(d,e)
if(u<=0||f.length<=u)return new A.agC(!1,D.Et,f)
if(g.q(0,e.a))return new A.agC(!1,D.Et,f)
w=A.U(f).c
v=A.cU(f,0,A.dw(u,"count",x.S),w).dd(0)
return new A.agC(!0,A.cU(f,u,null,w).dd(0),v)},
igT(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.akf(d3),d2=d1.length
if(d2===0)return D.hPG
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c_(0,t.a,new C.dlt(t))}s=new C.dlK(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dlC(r)
for(p=new A.ds(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dlB(r)
l=A.S(w,x.do)
for(p=new A.ds(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c8(l.c_(0,k,new C.dlu()),o)}h=new C.dlA(s)
g=new C.dlz(l,r)
p=v.$ti.k("ba<2>")
o=p.k("X<M.E>")
f=A.B(new A.X(new A.ba(v,p),new C.dlv(h),o),o.k("M.E"))
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
a9=new C.dlI(new C.dlE(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.ds(v,v.r,v.e),j=a2.ganw(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eC([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.I(0,i))break}if(h.$1(b0)&&a2.am(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nP(J.dO(i==null?B.M:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.S(w,x.dO)
b5=A.a([],x.M)
b6=A.S(w,d2)
b7=new C.dls(a2,new C.dlJ(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=b4.$ti.k("cu<1>")
d2=A.B(new A.cu(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GZ(o,new A.r(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Lg(c5.a,new A.r(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cu<1>")
d2=A.B(new A.cu(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.dlw(c6,b4))
for(d2=new A.ch(a4,a4.$ti.k("ch<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aQ(c7.b);j.C();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.r(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eR(j,new C.dlx(c8));i.C();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.dly())
c6.push(new C.aMu(new A.r(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.biZ(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hNJ(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cI(d)
return w==null?null:w.b[1]},
hHg(d,e,f,g,h,i,j,k,l,m,n){return new C.a18(k,f,j,e,l,n,m,d,g,h,i,null)},
aF9(d,e,f,g,h,i,j){return new C.bmN(i,d,e,f,j,h,g,null)},
asx:function asx(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGK:function aGK(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e8M:function e8M(d){this.a=d},
e8L:function e8L(d){this.a=d},
e8O:function e8O(d,e){this.a=d
this.b=e},
e8P:function e8P(d,e){this.a=d
this.b=e},
e8Q:function e8Q(d){this.a=d},
e8K:function e8K(d,e){this.a=d
this.b=e},
e8N:function e8N(d){this.a=d},
e8S:function e8S(d){this.a=d},
e8R:function e8R(d,e){this.a=d
this.b=e},
asr:function asr(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGH:function aGH(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e8c:function e8c(d){this.a=d},
e8a:function e8a(d){this.a=d},
e8b:function e8b(d){this.a=d},
e8d:function e8d(d,e){this.a=d
this.b=e},
e87:function e87(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7z:function e7z(d){this.a=d},
e7A:function e7A(d,e){this.a=d
this.b=e},
e7R:function e7R(d){this.a=d},
e7P:function e7P(d){this.a=d},
e7Q:function e7Q(d,e){this.a=d
this.b=e},
e7S:function e7S(d){this.a=d},
e7T:function e7T(d,e){this.a=d
this.b=e},
e86:function e86(d,e){this.a=d
this.b=e},
e7O:function e7O(d){this.a=d},
e7N:function e7N(d){this.a=d},
e7M:function e7M(d,e){this.a=d
this.b=e},
e83:function e83(){},
e84:function e84(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e82:function e82(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e7X:function e7X(d){this.a=d},
e7Y:function e7Y(d,e,f){this.a=d
this.b=e
this.c=f},
e7W:function e7W(d,e){this.a=d
this.b=e},
e7Z:function e7Z(d,e){this.a=d
this.b=e},
e7U:function e7U(d,e){this.a=d
this.b=e},
e7V:function e7V(){},
e8_:function e8_(d,e){this.a=d
this.b=e},
e80:function e80(d){this.a=d},
e81:function e81(d,e){this.a=d
this.b=e},
e85:function e85(d,e){this.a=d
this.b=e},
e7n:function e7n(d,e){this.a=d
this.b=e},
e7o:function e7o(d,e){this.a=d
this.b=e},
e8f:function e8f(d,e,f){this.a=d
this.b=e
this.c=f},
e89:function e89(d,e,f){this.a=d
this.b=e
this.c=f},
e88:function e88(d){this.a=d},
e7p:function e7p(d){this.a=d},
e7q:function e7q(d){this.a=d},
e7r:function e7r(){},
e7s:function e7s(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7w:function e7w(d,e){this.a=d
this.b=e},
e7v:function e7v(d,e){this.a=d
this.b=e},
e7u:function e7u(d){this.a=d},
e7x:function e7x(d,e){this.a=d
this.b=e},
e7t:function e7t(d){this.a=d},
e8e:function e8e(d){this.a=d},
e7J:function e7J(){},
e7K:function e7K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7I:function e7I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7E:function e7E(d,e,f){this.a=d
this.b=e
this.c=f},
e7D:function e7D(d,e,f){this.a=d
this.b=e
this.c=f},
e7B:function e7B(d,e){this.a=d
this.b=e},
e7F:function e7F(d){this.a=d},
e7G:function e7G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7C:function e7C(d,e){this.a=d
this.b=e},
e7H:function e7H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7L:function e7L(d,e){this.a=d
this.b=e},
e8m:function e8m(){},
e8n:function e8n(d,e){this.a=d
this.b=e},
e8o:function e8o(d){this.a=d},
e8p:function e8p(d,e){this.a=d
this.b=e},
e8i:function e8i(d){this.a=d},
e8g:function e8g(d,e){this.a=d
this.b=e},
e8j:function e8j(d,e){this.a=d
this.b=e},
e8k:function e8k(d,e){this.a=d
this.b=e},
e8l:function e8l(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e8q:function e8q(d){this.a=d},
e8h:function e8h(d){this.a=d},
e7y:function e7y(d){this.a=d},
biX:function biX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dlq:function dlq(d){this.a=d},
dlp:function dlp(d,e){this.a=d
this.b=e},
dlr:function dlr(d){this.a=d},
dlo:function dlo(d,e){this.a=d
this.b=e},
fRG:function fRG(d,e){this.a=d
this.b=e},
fRH:function fRH(d){this.a=d},
fRI:function fRI(){},
fRE:function fRE(d,e){this.a=d
this.b=e},
fRF:function fRF(){},
fRL:function fRL(d,e){this.a=d
this.b=e},
fRM:function fRM(d){this.a=d},
fRN:function fRN(){},
fRJ:function fRJ(d){this.a=d},
fRK:function fRK(d,e){this.a=d
this.b=e},
Lg:function Lg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GZ:function GZ(d,e){this.a=d
this.b=e},
biZ:function biZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dlt:function dlt(d){this.a=d},
dlK:function dlK(d){this.a=d},
dlC:function dlC(d){this.a=d},
dlD:function dlD(){},
dlB:function dlB(d){this.a=d},
dlu:function dlu(){},
dlA:function dlA(d){this.a=d},
dlz:function dlz(d,e){this.a=d
this.b=e},
dlv:function dlv(d){this.a=d},
dlE:function dlE(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dlF:function dlF(d){this.a=d},
dlG:function dlG(d){this.a=d},
dlH:function dlH(){},
dlI:function dlI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dlJ:function dlJ(){},
dls:function dls(d,e,f,g,h,i,j,k,l,m){var _=this
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
dlw:function dlw(d,e){this.a=d
this.b=e},
dlx:function dlx(d){this.a=d},
dly:function dly(){},
aMu:function aMu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bj_:function bj_(d,e){this.b=d
this.a=e},
dlL:function dlL(){},
dlM:function dlM(d){this.a=d},
dlN:function dlN(d){this.a=d},
dlO:function dlO(){},
bmO:function bmO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bi_:function bi_(d,e){this.b=d
this.a=e},
bB_:function bB_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fwF:function fwF(d){this.a=d},
bqb:function bqb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f6s:function f6s(d){this.a=d},
f6r:function f6r(d,e){this.a=d
this.b=e},
a18:function a18(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aF7:function aF7(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dC2:function dC2(d,e){this.a=d
this.b=e},
dC1:function dC1(d){this.a=d},
dC_:function dC_(d){this.a=d},
dC0:function dC0(d){this.a=d},
dCb:function dCb(d){this.a=d},
dCc:function dCc(d){this.a=d},
dCa:function dCa(d,e){this.a=d
this.b=e},
dCd:function dCd(){},
dCg:function dCg(d){this.a=d},
dC9:function dC9(d,e){this.a=d
this.b=e},
dCf:function dCf(){},
dCh:function dCh(d){this.a=d},
dC8:function dC8(d,e){this.a=d
this.b=e},
dCi:function dCi(d){this.a=d},
dC7:function dC7(d){this.a=d},
dCj:function dCj(d){this.a=d},
dC6:function dC6(d){this.a=d},
dCk:function dCk(d){this.a=d},
dC5:function dC5(d){this.a=d},
dCl:function dCl(d){this.a=d},
dC4:function dC4(d){this.a=d},
dCm:function dCm(d){this.a=d},
dC3:function dC3(d,e){this.a=d
this.b=e},
dCe:function dCe(d){this.a=d},
aft:function aft(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmN:function bmN(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
afs:function afs(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bmM:function bmM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dCn:function dCn(d){this.a=d},
dCo:function dCo(d,e){this.a=d
this.b=e},
aF8:function aF8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aLw:function aLw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afu:function afu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dCx:function dCx(d){this.a=d},
GV:function GV(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hC1(d){var w=d.cH,v=x.N
return w.iZ(w,new C.ci3(),v,v)},
i83(d){var w=d.bF
if(w>=0)return w
return 5},
hC3(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hC1(d).h(0,v)
if(w==null||w.length===0)return null
return A.be(w)},
hC2(d,e){var w=C.hC3(d,e)
if(w!=null&&w.c9(new A.W(Date.now(),0,!1)))return!0
return!1},
i84(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a_(C.hC1(d),w,w)
u=C.hC3(d,e)
t=u!=null&&u.c9(new A.W(Date.now(),0,!1))?u:new A.W(Date.now(),0,!1)
v.n(0,s,t.bL(A.du(30,0,0,0,0,0).a).aa().ag())
d.cH=v},
b3e(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b3e=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lW(t,B.Kv),$async$b3e)
case 3:if(l){u=!0
w=1
break}u=A.lw(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Kv,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3e,v)},
ci3:function ci3(){},
i81(){var w,v=$.oP(),u=J.e6(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hl(u)},
JK(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JK=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$JK)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.fb("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JK)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"codes")
if(x.f.b(q)){o=A.a_(q,x.N,x.z)
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
return A.i($async$JK,v)},
a9j(d){return C.i82(d)},
i82(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a9j=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$a9j)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i0("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cY,null),$async$a9j)
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
return A.i($async$a9j,v)},
ci2(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ci2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JK(),$async$ci2)
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
return A.i($async$ci2,v)},
OS(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$OS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ci2(d),$async$OS)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JK(),$async$OS)
case 6:s=f
r=J.a1(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dA(A.a_(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a9j(s),$async$OS)
case 9:case 8:u=t
w=1
break
case 5:n=C.i81()
w=10
return A.b(C.JK(),$async$OS)
case 10:s=f
J.aL(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a9j(s),$async$OS)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$OS,v)},
b3d(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b3d=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JK(),$async$b3d)
case 3:t=f
for(s=J.dx(t),r=s.gdU(t),r=r.dd(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a9j(t),$async$b3d)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b3d,v)},
a9k(d,e,f){var w=0,v=A.j(x.H),u
var $async$a9k=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.asw(d,e),$async$a9k)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.OS(d),$async$a9k)
case 7:w=4
break
case 5:w=8
return A.b(C.b3d(d),$async$a9k)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a9k,v)},
asq(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$asq=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.asw(f,e),$async$asq)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.ce(),$async$asq)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JK(),$async$asq)
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
return A.i($async$asq,v)},
b3c(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b3c=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.ce(),$async$b3c)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JK(),$async$b3c)
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
return A.i($async$b3c,v)},
i85(){var w,v=$.oP(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hl(u)},
ast(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$ast=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$ast)
case 3:if(!g){u=null
w=1
break}t=C.i85()
w=4
return A.b(A.X5(),$async$ast)
case 4:s=g
r=B.e3.aK(B.V.au(d.eT(),null))
r=B.cS.gcp().aK(r)
q=e?999:2
J.aL(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a9l(s),$async$ast)
case 5:p=e?999:2
u=new A.a2k("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ast,v)},
ass(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$ass=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.X5(),$async$ass)
case 3:p=a0
o=J.a1(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a1(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.i.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b3c(J.k(l==null?"":l),j),$async$ass)
case 4:if(!a0)$.an.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cf.cF(0,B.cK.aK(t))
s=C.hC4(r)}catch(f){q=A.ac(f)
$.an.$1("[family tree qr stash] decode: "+A.v(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.X(p,g)
else{m=x.N
l=x.z
l=A.dA(A.a_(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a9l(p),$async$ass)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ass,v)},
hC4(d){var w,v,u,t,s=null
try{w=B.V.aP(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.i87(A.a_(w,x.N,x.z))
return u}catch(t){v=A.ac(t)
$.an.$1("[family tree sync] parse: "+A.v(v))
return s}},
hkz(d){var w=0,v=A.j(x.m),u,t,s
var $async$hkz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.ass(t[1])
w=1
break}u=null
w=1
break}u=C.hC4(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hkz,v)},
i87(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cK(v,x.f)
u=A.cs(u,new C.ci5(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("X<M.E>")
s=A.B(new A.X(u,new C.ci6(),t),t.k("M.E"))}else s=A.a([],x._)
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
n=A.cs(n,new C.ci7(),n.$ti.k("M.E"),o)
k=A.a3(n).k("X<M.E>")
j=A.B(new A.X(n,new C.ci8(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.asu(h,w,s,r,q)},
asw(d,e){var w=0,v=A.j(x.y),u,t
var $async$asw=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(R.OI(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bz(d),$async$asw)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asw,v)},
cie(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cie=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bz(d),$async$cie)
case 3:t=s.b8(f,new C.cif(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b_(t,new C.cig())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cie,v)},
X6(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$X6=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.asw(e,d),$async$X6)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.OS(e),$async$X6)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bz(e),$async$X6)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dO(r,new C.cic(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a1(r)
if(t.gar(r)){u=null
w=1
break}t=t.dR(r,new C.cid(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.M7(e,o),$async$X6)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.asu(s,B.a.i(e.toLowerCase()),r,new A.W(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$X6,v)},
b3h(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b3h=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.X6(d,e,f,g),$async$b3h)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gG(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aJ(t,s,"_")
r=q.a
u=A.HG(A.Lc(q.eT(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3h,v)},
b3g(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b3g=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.X6(d,e,f,g),$async$b3g)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.ast(r,f),$async$b3g)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aJt(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3g,v)},
X7(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$X7=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hkz(a0),$async$X7)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.asq(g.a,d,e,f,s,r),$async$X7)
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
return A.b(C.bGz(e,j),$async$X7)
case 12:case 11:w=13
return A.b(C.ajY(e,j,s),$async$X7)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.BJ(e,i,h),$async$X7)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.btX(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$X7,v)},
asu:function asu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cia:function cia(){},
cib:function cib(){},
ci9:function ci9(){},
ci5:function ci5(){},
ci6:function ci6(){},
ci7:function ci7(){},
ci8:function ci8(){},
cif:function cif(){},
cig:function cig(){},
cic:function cic(d){this.a=d},
cid:function cid(d){this.a=d},
hu1(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f9(null,x.H)
return A.he(d,new C.asv(w,e,g,i,f,h,null),!0,null,x.H)},
dln(d,e,f,g,h,i,j,k){return new C.biW(i,e,k,j,g,f,h,d,null)},
asv:function asv(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aGJ:function aGJ(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e8z:function e8z(d){this.a=d},
e8A:function e8A(d,e,f){this.a=d
this.b=e
this.c=f},
e8E:function e8E(d,e){this.a=d
this.b=e},
e8F:function e8F(d){this.a=d},
e8w:function e8w(d){this.a=d},
e8x:function e8x(d,e){this.a=d
this.b=e},
e8y:function e8y(d,e){this.a=d
this.b=e},
e8D:function e8D(d){this.a=d},
e8C:function e8C(d,e){this.a=d
this.b=e},
e8B:function e8B(){},
e8H:function e8H(d){this.a=d},
e8I:function e8I(d,e){this.a=d
this.b=e},
e8G:function e8G(d,e){this.a=d
this.b=e},
dlP:function dlP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
biY:function biY(d,e,f){this.d=d
this.e=e
this.a=f},
aeI:function aeI(d,e,f){this.c=d
this.d=e
this.a=f},
biW:function biW(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bj0:function bj0(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a1s:function a1s(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGI:function aGI(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e8r:function e8r(d,e){this.a=d
this.b=e},
e8s:function e8s(d){this.a=d},
e8t:function e8t(d){this.a=d},
e8u:function e8u(d){this.a=d},
e8v:function e8v(d){this.a=d},
a1t:function a1t(d){this.a=d},
boi:function boi(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e8J:function e8J(d,e){this.a=d
this.b=e},
b1L(d,e){return new C.b1K(d,e,null)},
b1K:function b1K(d,e,f){this.c=d
this.d=e
this.a=f},
iyw(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
iGm(d){return A.bV(B.L,null,new C.h8T(new C.uv(A.Q(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hE6(d,e){return new C.avz(e,d,null)},
aUa(d,e,f,g,h,i,j){var w=C.iyw(i)
if(w!=null)return A.bv(e,new A.a4(j,f,new C.a8m(w,!0,null),null),B.ap)
return A.aTu(e,B.c0,f,g,h,i,j)},
mi:function mi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a8m:function a8m(d,e,f){this.c=d
this.d=e
this.a=f},
bnX:function bnX(d,e){var _=this
_.e=_.d=$
_.ds$=d
_.bc$=e
_.c=_.a=null},
dUu:function dUu(d){this.a=d},
dUv:function dUv(){},
dUw:function dUw(d,e){this.a=d
this.b=e},
bnW:function bnW(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
h8T:function h8T(d){this.a=d},
h8S:function h8S(d,e){this.a=d
this.b=e},
h8R:function h8R(d,e){this.a=d
this.b=e},
h8Q:function h8Q(d,e){this.a=d
this.b=e},
avz:function avz(d,e,f){this.c=d
this.d=e
this.a=f},
cs2:function cs2(d,e){this.a=d
this.b=e},
aOX:function aOX(){},
iG6(d){var w=null
return A.cf(w,w,!0,w,new C.h8f(),d,w,!0,!0,x.e2)},
iHm(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.hg5(h,g,f,e),d,w,!0,!0,x.N)},
iG8(d,e){var w=null
return A.cf(w,w,!0,w,new C.h8j(e),d,w,!0,!0,x.dY)},
iG7(d){var w=null
return A.cf(w,w,!0,w,new C.h8i(),d,w,!0,!0,x.c5)},
aX8:function aX8(d,e){this.a=d
this.b=e},
aX7:function aX7(d){this.a=d},
aVa:function aVa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h8f:function h8f(){},
hg5:function hg5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h8j:function h8j(d){this.a=d},
h8i:function h8i(){},
a05:function a05(d,e){this.c=d
this.a=e},
aBQ:function aBQ(){var _=this
_.d=$
_.c=_.a=_.e=null},
dcT:function dcT(d){this.a=d},
dcU:function dcU(d){this.a=d},
dcS:function dcS(d,e){this.a=d
this.b=e},
dcV:function dcV(d){this.a=d},
dcW:function dcW(d){this.a=d},
a04:function a04(d){this.a=d},
aBP:function aBP(){this.d=$
this.c=this.a=null},
dcP:function dcP(d){this.a=d},
dcQ:function dcQ(d){this.a=d},
dcR:function dcR(d){this.a=d},
a_y:function a_y(d){this.a=d},
aAu:function aAu(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cKn:function cKn(){},
cKt:function cKt(d){this.a=d},
cKu:function cKu(d){this.a=d},
cKv:function cKv(d){this.a=d},
cKs:function cKs(){},
cKw:function cKw(d){this.a=d},
cKx:function cKx(d){this.a=d},
cKr:function cKr(){},
cKy:function cKy(d,e){this.a=d
this.b=e},
cKq:function cKq(d,e){this.a=d
this.b=e},
cKo:function cKo(d,e){this.a=d
this.b=e},
cKz:function cKz(d){this.a=d},
cKp:function cKp(){},
cKA:function cKA(d){this.a=d},
a3g:function a3g(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bAS:function bAS(){this.d=$
this.c=this.a=null},
fwa:function fwa(d,e){this.a=d
this.b=e},
fwb:function fwb(d){this.a=d},
fwc:function fwc(d,e){this.a=d
this.b=e},
adJ:function adJ(d,e){this.a=d
this.b=e},
GK:function GK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bAQ:function bAQ(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
fw8:function fw8(d,e){this.a=d
this.b=e},
aAn:function aAn(d,e){this.c=d
this.a=e},
bAR:function bAR(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
fw9:function fw9(d){this.a=d},
bAP:function bAP(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aR4:function aR4(){},
aR5:function aR5(){},
bIE(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bd(u),s=B.o.D(B.i.S((u-t)*100),0,99),r=d<0?"-":"",q=A.oa(B.o.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h6v(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.N,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aZ(B.o.v(s),2,"0")
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.GB(A.cW(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aTN(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aTN=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.id().l8(85,1280,B.f1),$async$aTN)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fv(),$async$aTN)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hE5()
w=9
return A.b(C.cs1(q,r),$async$aTN)
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
return A.i($async$aTN,v)},
aU8(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aU8=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.crZ(g)
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
return A.b(A.HH(p,!0,null,o).d7(0,B.fO),$async$aU8)
case 9:n=a1
w=10
return A.b(n.lc(),$async$aU8)
case 10:m=a1
w=11
return A.b(m.b.ho(B.hq),$async$aU8)
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
return A.i($async$aU8,v)},
h6v:function h6v(){},
uv:function uv(d){this.a=d},
avy:function avy(d,e,f){this.c=d
this.d=e
this.a=f},
aIi:function aIi(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f3C:function f3C(d,e){this.a=d
this.b=e},
f3t:function f3t(d){this.a=d},
f3u:function f3u(d){this.a=d},
f3A:function f3A(d,e){this.a=d
this.b=e},
f3z:function f3z(d,e){this.a=d
this.b=e},
f3w:function f3w(d,e){this.a=d
this.b=e},
f3v:function f3v(d,e){this.a=d
this.b=e},
f3x:function f3x(d){this.a=d},
f3y:function f3y(d,e){this.a=d
this.b=e},
f3B:function f3B(d,e){this.a=d
this.b=e},
f3o:function f3o(d,e){this.a=d
this.b=e},
f3s:function f3s(d){this.a=d},
f3r:function f3r(d,e){this.a=d
this.b=e},
f3q:function f3q(d){this.a=d},
f3D:function f3D(d,e){this.a=d
this.b=e},
f3E:function f3E(d,e){this.a=d
this.b=e},
f3p:function f3p(d,e){this.a=d
this.b=e},
hS3(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.W(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
h6w(d,e,f){var w=0,v=A.j(x.N),u
var $async$h6w=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.V.au(C.hS3(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h6w,v)},
bIG(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bIG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h6w(!0,d,e),$async$bIG)
case 4:w=3
return A.b(r.avw(g,d,e.a),$async$bIG)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e3.aK(B.V.au(C.hS3(d,e,null),null))
u="NGMY_WS:"+B.l1.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIG,v)},
hII(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
htD(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.db(s,"NGMYWSSYNC2|"))return!0
if(J.db(s,"NGMY_WS:"))return!0
if(J.eF(s,t))return!0
if(J.db(s,"{"))try{w=B.V.aP(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iE5(d){var w,v,u,t=C.hII(d)
if(t==null)return null
if(C.htD(t))return t
w=B.a.c8(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.htD(v))return v}u=B.a.c8(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.htD(v))return v}return null},
htC(d){var w,v,u,t,s,r=null,q=B.a.i(d)
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
t=C.hnj(A.a_(u,x.N,x.z))
return t}catch(s){return r}},
bIF(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bIF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.avv(t[1]),$async$bIF)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.htC(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.htC(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIF,v)},
htB(d){var w=B.o.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.m_(w,v,d.c,d.d,new A.W(Date.now(),0,!1))},
bI8(){var w=0,v=A.j(x.o),u,t
var $async$bI8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HQ(),$async$bI8)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.htC(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bI8,v)},
hTh(d,e,f,g){return A.bV(B.L,null,new C.hfT(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
hfT:function hfT(d,e,f){this.a=d
this.b=e
this.c=f},
afP:function afP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f3G:function f3G(d,e){this.a=d
this.b=e},
f3H:function f3H(d,e){this.a=d
this.b=e},
f3I:function f3I(d,e){this.a=d
this.b=e},
f3J:function f3J(d,e){this.a=d
this.b=e},
f3F:function f3F(d){this.a=d},
avs:function avs(d,e,f){this.c=d
this.d=e
this.a=f},
bpH:function bpH(){var _=this
_.c=_.a=_.e=_.d=null},
f3j:function f3j(d,e){this.a=d
this.b=e},
f3k:function f3k(d){this.a=d},
f3l:function f3l(d){this.a=d},
avx:function avx(d){this.a=d},
aIh:function aIh(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f3n:function f3n(d){this.a=d},
f3m:function f3m(d){this.a=d},
iby(d,e,f,g,h){return new C.PB(h,g,d,e,f,null)},
aNh:function aNh(d,e){this.a=d
this.b=e},
PB:function PB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIj:function aIj(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f45:function f45(){},
f41:function f41(d,e){this.a=d
this.b=e},
f42:function f42(d){this.a=d},
f3N:function f3N(d){this.a=d},
f3L:function f3L(d){this.a=d},
f3M:function f3M(d){this.a=d},
f3W:function f3W(d,e){this.a=d
this.b=e},
f3T:function f3T(d,e){this.a=d
this.b=e},
f3U:function f3U(d,e){this.a=d
this.b=e},
f3V:function f3V(d,e,f){this.a=d
this.b=e
this.c=f},
f3R:function f3R(d,e,f){this.a=d
this.b=e
this.c=f},
f3P:function f3P(d){this.a=d},
f3Q:function f3Q(d){this.a=d},
f3S:function f3S(d){this.a=d},
f48:function f48(d){this.a=d},
f47:function f47(d){this.a=d},
f49:function f49(d){this.a=d},
f46:function f46(d){this.a=d},
f3K:function f3K(d){this.a=d},
f3O:function f3O(d,e){this.a=d
this.b=e},
f44:function f44(d,e){this.a=d
this.b=e},
f43:function f43(d,e){this.a=d
this.b=e},
f3Z:function f3Z(d){this.a=d},
f4_:function f4_(d){this.a=d},
f40:function f40(d,e){this.a=d
this.b=e},
f3Y:function f3Y(d,e){this.a=d
this.b=e},
f3X:function f3X(d,e,f){this.a=d
this.b=e
this.c=f},
bCE:function bCE(){},
Bm(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aJ(v,w,"_")},
air(d,e,f){return C.irR(d,e,f)},
irR(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$air=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$air)
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
return A.i($async$air,v)},
aiq(d,e){return C.irQ(d,e)},
irQ(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aiq=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$aiq)
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
return A.i($async$aiq,v)},
iqG(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Uq(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bFs(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bFs=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b6z(q),$async$bFs)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aU8(q,!1),$async$bFs)
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
return A.i($async$bFs,v)},
hZD(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rH(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rH(p,J.k(u==null?"":u),1,o,q)},
hnj(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cK(s,x.f)
w=A.cs(w,new C.cJG(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("X<M.E>")
r=A.B(new A.X(w,new C.cJH(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.be(J.k(t==null?"":t))
return new C.m_(w,v,u,r,t==null?new A.W(Date.now(),0,!1):t)},
ivX(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.xi
case"female":case"f":return D.oY
default:return D.zN}},
hOh(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hxZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ivX(v==null?j:J.k(v))
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
m=m==null?j:B.i.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aK(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.i.M(k)
return new C.ic(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ivZ(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.PY
case"viewer":return D.lf
default:return D.vp}},
iw_(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HI(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aSL(d,e){return B.a.i(e.toLowerCase())===C.HI(d,e)&&d.y!==D.lf},
uL(d,e){var w,v=d.y
if(v===D.lf)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HI(d,e))return!0
if(v===D.PY)return!0
v=d.e
return new A.O(v,A.htJ(),A.U(v).k("O<1,n>")).q(0,w)},
ivj(d){return J.dO(d,new C.fQy()).gJ(0)},
hgE(d){var w=0,v=A.j(x.y),u,t
var $async$hgE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bz(d),$async$hgE)
case 3:u=t.rC(f,new C.hgF(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hgE,v)},
bGz(d,e){var w=0,v=A.j(x.H),u,t
var $async$bGz=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bz(d),$async$bGz)
case 3:t=g
if(J.rC(t,new C.fO2(e))){w=1
break}if(C.ivj(t)>=2)throw A.Y(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bGz,v)},
anw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cK(h,x.f)
w=A.cs(w,new C.bVC(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("X<M.E>")
g=A.B(new A.X(w,new C.bVD(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bVE(),x.N)
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
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ivZ(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aQ(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.bO)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gP(f)
if(l.b(i))m.push(A.a_(i,k,j))}return new C.le(w,v,s,!r,t,g,q,p,o,n,m)},
hOw(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.av(v,0,8)},
DW(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ti(d),$async$DW)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aB(),$async$DW)
case 4:t=f
w=5
return A.b(t.a8t(0),$async$DW)
case 5:w=6
return A.b(C.fE5(t,l),$async$DW)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.ga_(B.a.i(l.toLowerCase()))
q=t.a
p=J.a1(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hJk(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pv(l,n),$async$DW)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.ga_(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hJk(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pv(l,n),$async$DW)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DW,v)},
fE5(d,e){return C.io0(d,e)},
io0(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fE5=A.e(function(b0,b1){if(b0===1){s.push(b1)
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
break}k=C.hnj(A.a_(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bm(a9)+"_"+n))
i=C.iqG(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b6z(h),$async$fE5)
case 17:g=b1
if(g!=null){i=i.Uq(g)
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
case 8:J.Tt(q,new C.fE6())
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
return A.i($async$fE5,v)},
bH2(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bH2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ti(d),$async$bH2)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DW(r),$async$bH2)
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
return A.i($async$bH2,v)},
hJk(d){var w,v,u,t
try{w=B.V.aP(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cK(w,x.f)
v=A.cs(v,new C.fzD(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("X<M.E>")
v=A.B(new A.X(v,new C.fzE(),u),u.k("M.E"))
B.d.b_(v,new C.fzF())
return v}catch(t){v=A.a([],x.D)
return v}},
pv(d,e){return C.iFW(d,e)},
iFW(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pv=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Ti(b2),$async$pv)
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
o=J.b8(x.j.a(B.V.aP(0,p,null)),new C.h83(),a2).fD(0)
a2=J.b8(b3,new C.h84(),a2).c0(0,new C.h85())
n=A.d7(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e9(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eF(n,m)?17:18
break
case 17:a5=C.Bm(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aaH(l),$async$pv)
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
return A.b(C.aaH(a5==null?null:J.k(a5)),$async$pv)
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
return A.b(C.aiq(r,"ngmy_worksheet_item_v3_"+C.Bm(a8)+"_"+m),$async$pv)
case 29:w=30
return A.b(C.aiq(r,"ngmy_worksheet_thumb_v3_"+C.Bm(a8)+"_"+m),$async$pv)
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
return A.b(C.bFs(h),$async$pv)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.air(r,"ngmy_worksheet_thumb_v3_"+C.Bm(a8)+"_"+a4,f),$async$pv)
case 40:g=i.Uq(f)
w=38
break
case 39:$.an.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aiq(r,"ngmy_worksheet_thumb_v3_"+C.Bm(a8)+"_"+a4),$async$pv)
case 41:g=i.Uq(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aiq(r,"ngmy_worksheet_thumb_v3_"+C.Bm(a8)+"_"+a4),$async$pv)
case 42:case 34:a4=i.a
w=43
return A.b(C.air(r,"ngmy_worksheet_item_v3_"+C.Bm(a8)+"_"+a4,B.V.au(g.ak(),null)),$async$pv)
case 43:e=b5
if(!e){$.an.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.c8(q,i.a)
w=31
break
case 32:w=44
return A.b(C.air(r,"ngmy_worksheets_index_v3_"+C.Bm(a8),B.V.au(q,null)),$async$pv)
case 44:d=b5
if(!d){$.an.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eU(b3,new C.h86(q))
a4=a3.$ti.k("cQ<1,a9<n,@>>")
a7=A.B(new A.cQ(a3,new C.h87(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.air(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.ga_(B.a.i(a8.toLowerCase()))),B.V.au(a0,null)),$async$pv)
case 45:w=46
return A.b(J.hYI(r),$async$pv)
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
MC(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$MC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DW(d),$async$MC)
case 3:t=g
s=J.cJ(t)
r=s.bl(t,new C.hgD(e))
if(r===-1)s.ce(t,0,e)
else s.n(t,r,e)
u=C.pv(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MC,v)},
bGP(d,e){var w=0,v=A.j(x.H),u
var $async$bGP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DW(d),$async$bGP)
case 2:u=g
J.nh(u,new C.fR1(e))
w=3
return A.b(C.pv(d,u),$async$bGP)
case 3:return A.h(null,v)}})
return A.i($async$bGP,v)},
HK(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$HK)
case 3:l=f
k=A.a([],x._)
j=B.a.ga_(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.V.aP(0,i,null)
if(x.j.b(t)){j=J.cK(t,x.f)
j=A.cs(j,new C.fUg(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("X<M.E>")
r=A.B(new A.X(j,new C.fUh(),s),s.k("M.E"))
B.d.b_(r,new C.fUi())
k=r}}catch(h){}w=4
return A.b(C.fAp(d),$async$HK)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ion(k,p,d)
j=A.U(o)
s=j.k("O<1,a9<n,@>>")
s=A.B(new A.O(o,new C.fUj(),s),s.k("aj.E"))
n=B.V.au(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.So(d,o),$async$HK)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fUk(d),j),j.k("M.E"))
if(m.length!==0)C.aSx(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HK,v)},
h7P(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$h7P=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.So(d,e),$async$h7P)
case 3:t=J.dO(e,new C.h7Q(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aSx(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h7P,v)},
a4Y(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a4Y=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a4Y)
case 2:n=g
m=B.a.ga_(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.V.aP(0,l,null)
if(x.j.b(u)){m=J.cK(u,x.f)
m=A.cs(m,new C.hgy(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("X<M.E>")
s=A.B(new A.X(m,new C.hgz(),t),t.k("M.E"))
o=s}}catch(k){}q=J.oU(o,new C.hgA(e))
if(B.a.i(e.x).length===0&&C.uL(e,d)){m=B.a.i(d.toLowerCase())
p=e.aHW(e.y===D.lf?D.lf:D.vp,m)}else p=e
if(q===-1)J.ng(o,0,p)
else J.aL(o,q,p)
w=3
return A.b(C.So(d,o),$async$a4Y)
case 3:w=C.uL(p,d)?4:5
break
case 4:w=6
return A.b(C.aSw(C.HI(p,d),p),$async$a4Y)
case 6:if(!g)$.an.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a4Y,v)},
aSJ(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aSJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HK(d),$async$aSJ)
case 2:u=g
t=J.cJ(u)
s=A.nP(t.eU(u,new C.fQJ(e)))
t.br(u,new C.fQK(e))
w=3
return A.b(C.So(d,u),$async$aSJ)
case 3:w=s!=null&&C.aSL(s,d)?4:5
break
case 4:w=6
return A.b(C.fzH(e),$async$aSJ)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aSJ,v)},
akf(d){var w=d.f,v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.hgJ(),v),v.k("M.E"))
return w},
hqZ(d,e){var w,v=d.f,u=A.nP(new A.X(v,new C.fQd(e),A.U(v).k("X<1>")))
v=C.akf(d)
w=A.U(v).k("X<1>")
v=A.B(new A.X(v,new C.fQe(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fQf())
return v},
iw2(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hTl(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bl(C.hqZ(d,u),new C.hg6(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ixz(d,e){var w
if(e==null||e.length===0)return 1
w=C.hqZ(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fV7(),A.U(w).k("O<1,G>")).eH(0,B.yK)+1},
iFP(d){var w,v=C.akf(d)
if(v.length===0)return null
w=new A.X(v,new C.h7J(),A.U(v).k("X<1>"))
if(!w.gar(0))return w.gG(0)
return B.d.gG(v)},
ivY(d){return A.J(["id",d.a,"name",d.b,"gender",C.hOh(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ixu(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
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
d=q.aHR(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cUc(a1,w,a3.d,a2.y,s,a0,v)},
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
p=A.cs(p,new C.fUd(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("X<M.E>")
p=A.B(new A.X(p,new C.fUe(),s),s.k("M.E"))
B.d.b_(p,new C.fUf())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bz,v)},
ajY(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ajY=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.vp:D.lf
a7=C.HI(b2,b3)
w=2
return A.b(C.Bz(b1),$async$ajY)
case 2:a8=b5
a9=J.cJ(a8)
b0=a9.bl(a8,new C.h7E(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bGz(b1,b2),$async$ajY)
case 5:case 4:if(b0===-1){u=b2.aHW(a6,a7)
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
s.n(0,m,l.aHR(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("ba<2>")
s=A.B(new A.ba(s,k),k.k("M.E"))
k=a5?D.vp:D.lf
u=t.cUe(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.So(b1,a8),$async$ajY)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aSw(B.a.i(b3.toLowerCase()),u),$async$ajY)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ajY,v)},
hJO(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.W(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("O<1,a9<n,@>>"),k=A.B(new A.O(m,C.hSq(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hJP(d,e){var w=new A.W(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("O<1,a9<n,@>>")
u=A.B(new A.O(u,C.hSq(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
ilV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a1(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.anw(A.a_(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.htJ(),A.U(j).k("O<1,n>")).c0(0,new C.fAc())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.vp
else s=B.d.q(t,u)?D.PY:D.lf
return w.aHW(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.anw(A.a_(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cK(q,h)
h=A.cs(h,new C.fAd(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("X<M.E>")
o=A.B(new A.X(h,new C.fAe(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fAf(),x.N).c0(0,new C.fAg())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.vp
else s=B.d.q(t,u)?D.PY:D.lf
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
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.M(j)
if(j==null)j=0
return new C.le(h,r,p,!m,t,o,l,j,v,s,B.co)},
fAp(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fAp=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fAt()
h=x.N
g=x.z
w=7
return A.b(A.hc(A.a([A.m4("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.m4("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.m4("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fAp)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.fV(l,o)
J.fV(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aL(m,j,k)}l=m
h=A.a3(l).k("ba<2>")
h=A.cs(new A.ba(l,h),new C.fAq(a0),h.k("M.E"),x.k)
l=A.a3(h).k("X<M.E>")
l=A.B(new A.X(h,new C.fAr(),l),l.k("M.E"))
B.d.b_(l,new C.fAs())
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
return A.i($async$fAp,v)},
ion(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a1(e)
if(j.gar(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dR(e,new C.fER(),v).c0(0,new C.fES())
t=A.d7(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HI(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.lf){m=q.e
m=!new A.O(m,A.htJ(),A.U(m).k("O<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ixu(l,v)
o=C.HI(k,w)
p=v.d
s.n(0,u,o===w?k.bhz(p,D.vp):k.bhz(p,v.y))}j=s.$ti.k("ba<2>")
j=A.B(new A.ba(s,j),j.k("M.E"))
B.d.b_(j,new C.fET())
return j},
So(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$So=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$So)
case 2:u=g
t=B.a.ga_(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fHT(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.V.au(s,null)),$async$So)
case 3:return A.h(null,v)}})
return A.i($async$So,v)},
aSw(d,e){return C.itK(d,e)},
itK(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aSw=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mx("family_trees",A.a([C.hJO(e,d)],p),null,B.cY),$async$aSw)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mx("family_trees",A.a([C.hJP(e,d)],p),null,B.cY),$async$aSw)
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
return A.i($async$aSw,v)},
aSx(d,e){return C.itL(d,e)},
itL(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aSx=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("O<1,a9<n,@>>")
m=n.k("aj.E")
l=A.B(new A.O(e,new C.fNg(d),n),m)
r=l
w=7
return A.b(A.mx("family_trees",r,null,B.cY),$async$aSx)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fNh(d),n),m)
p=k
w=8
return A.b(A.mx("family_trees",p,null,B.cY),$async$aSx)
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
return A.i($async$aSx,v)},
fzH(d){return C.il7(d)},
il7(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fzH=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.SQ("family_trees",A.J(["id",d],x.N,x.z),null,B.cY),$async$fzH)
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
return A.i($async$fzH,v)},
rH:function rH(d,e,f,g,h){var _=this
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
cJJ:function cJJ(){},
cJI:function cJI(){},
cJG:function cJG(){},
cJH:function cJH(){},
IO:function IO(d,e){this.a=d
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
anv:function anv(d,e){this.a=d
this.b=e},
fQy:function fQy(){},
hgF:function hgF(d){this.a=d},
fO2:function fO2(d){this.a=d},
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
bVG:function bVG(){},
bVF:function bVF(){},
bVC:function bVC(){},
bVD:function bVD(){},
bVE:function bVE(){},
fE6:function fE6(){},
fzD:function fzD(){},
fzE:function fzE(){},
fzF:function fzF(){},
h83:function h83(){},
h84:function h84(){},
h85:function h85(){},
h86:function h86(d){this.a=d},
h87:function h87(){},
hgD:function hgD(d){this.a=d},
fR1:function fR1(d){this.a=d},
fUg:function fUg(){},
fUh:function fUh(){},
fUi:function fUi(){},
fUj:function fUj(){},
fUk:function fUk(d){this.a=d},
h7Q:function h7Q(d){this.a=d},
hgy:function hgy(){},
hgz:function hgz(){},
hgA:function hgA(d){this.a=d},
fQJ:function fQJ(d){this.a=d},
fQK:function fQK(d){this.a=d},
hgJ:function hgJ(){},
fQd:function fQd(d){this.a=d},
fQe:function fQe(d,e){this.a=d
this.b=e},
fQf:function fQf(){},
hg6:function hg6(d){this.a=d},
fV7:function fV7(){},
h7J:function h7J(){},
fUd:function fUd(){},
fUe:function fUe(){},
fUf:function fUf(){},
h7E:function h7E(d){this.a=d},
fAc:function fAc(){},
fAd:function fAd(){},
fAe:function fAe(){},
fAf:function fAf(){},
fAg:function fAg(){},
fAt:function fAt(){},
fAu:function fAu(d){this.a=d},
fAq:function fAq(d){this.a=d},
fAr:function fAr(){},
fAs:function fAs(){},
fER:function fER(){},
fES:function fES(){},
fET:function fET(){},
fHT:function fHT(){},
fNg:function fNg(d){this.a=d},
fNh:function fNh(d){this.a=d},
cJK:function cJK(d,e){this.a=d
this.b=e},
cJL:function cJL(d,e){this.a=d
this.b=e},
aKq:function aKq(d,e,f){this.a=d
this.b=e
this.c=f},
bcU:function bcU(){this.b=this.a=0},
bcT:function bcT(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bAT:function bAT(){},
xC(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gci()+"/"+w.gcB()+"/"+w.gck()
if(!e)return v
return v+" "+B.a.aZ(B.o.v(w.gnC()),2,"0")+":"+B.a.aZ(B.o.v(w.gHi()),2,"0")},
iuQ(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
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
i=new A.ar(B.U,B.S,B.X,B.Y,B.W)
i.r=B.dl.gp(0)
a5.aq(j,i)
k-=q
k=A.bx(new A.a5(k,p,k+o,n),new A.aP(m,m))
i=new A.ar(B.U,B.S,B.X,B.Y,B.W)
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
a5.ah(g,g.a7(0,new A.r(s,a7*0.17)),O.aip(F.tt,t))
s=g.a7(0,new A.r(s,a7*0.18))
q=A.L()
q.r=F.tt.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a7(0,new A.r(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,O.aip(F.tt,t))
w=A.L()
w.r=F.tt.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.r(0,v)
a1=a7*0.22
if(b1===1){w=a0.a7(0,new A.r(0,-a1*0.12))
u=A.L()
u.r=F.mo.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.tt.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.bY(a0,a1)
u=A.L()
u.r=F.mo.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.bY(a0,a1)
u=A.L()
u.r=F.mo.gp(0)
a5.cQ(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.hr[l]
t=new A.ar(B.U,B.S,B.X,B.Y,B.W)
t.r=F.mo.gp(0)
a5.O(new A.r(0+a2*a1*1.05,w),u,t)}}a3=B.i.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.hr[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.U,B.S,B.X,B.Y,B.W)
k.b=B.ae
k.c=1.6
k.r=B.bq.gp(0)
k.d=B.bG
a5.ah(new A.r(m+q,p),new A.r(m+o,p),k)}else{k=new A.ar(B.U,B.S,B.X,B.Y,B.W)
k.r=B.c.gp(0)
a5.O(new A.r(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.U,B.S,B.X,B.Y,B.W)
j.r=B.v.gp(0)
a5.O(new A.r(m+k*a1*0.06,p),r,j)}m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.r=B.hZ.j(0.5).gp(0)
a5.O(new A.r(0+n*0.62,w),u,m)}a5.cQ(A.bZ(a0.a7(0,new A.r(0,a1*0.5)).aI(0,new A.r(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,O.aip(B.bq,1.8))
a4.restore()},
ibv(){var w,v=$.oP(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hl(u)},
avt(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$avt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avt)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.fb("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$avt)
case 8:r=e
if(r==null){u=A.S(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=A.a_(q,x.N,x.z)
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
return A.i($async$avt,v)},
avu(d){return C.ibw(d)},
ibw(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$avu=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avu)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i0("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cY,null),$async$avu)
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
return A.i($async$avu,v)},
avw(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$avw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avw)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.ibv()
w=4
return A.b(C.avt(),$async$avw)
case 4:r=h
q=B.a.i(e)
p=B.e3.aK(t)
J.aL(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cS.gcp().aK(p),"usesRemaining",25,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.avu(r),$async$avw)
case 5:u=new A.a2k("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avw,v)},
avv(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$avv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.ce(),$async$avv)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.avt(),$async$avv)
case 4:q=f
p=J.a1(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a1(o)
m=A.aK(n.h(o,"usesRemaining"))
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
m=A.dA(A.a_(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.avu(q),$async$avv)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avv,v)},
hE5(){var w=new A.W(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cV.aw(999999)},
ibx(d){var w,v,u,t,s,r,q
try{w=A.Bx(d)
if(w==null)return d
v=w
if(J.MI(v)>960||J.MH(v)>960){s=v
r=J.MI(v)>=J.MH(v)?960:null
v=A.SK(s,J.MH(v)>J.MI(v)?960:null,B.J_,r)}s=v
u=A.J9(82).zM(s,B.ry)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ac(q)
$.an.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
cs1(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cs1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.ibx(e)
$.crY.n(0,s,t)
u=C.bII(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cs1,v)},
b6z(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b6z=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.db(l,"data:image")){u=null
w=1
break}t=4
r=J.eF(l,",")?B.d.gal(J.m8(l,",")):l
q=B.cK.aK(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hE5()
w=7
return A.b(C.cs1(p,q),$async$b6z)
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
return A.i($async$b6z,v)},
crZ(d){var w=0,v=A.j(x.T),u,t,s
var $async$crZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.cs0(s),$async$crZ)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcp().aK(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$crZ,v)},
aaH(d){var w=0,v=A.j(x.H),u,t
var $async$aaH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hS4(d)
if(t==null){w=1
break}$.crY.X(0,t)
w=3
return A.b(C.bIH(t),$async$aaH)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aaH,v)},
bII(d,e){return C.iE8(d,e)},
iE8(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bII=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aRl
w=7
return A.b(n==null?$.aRl=A.hpM():n,$async$bII)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mA(r,"thumbs","readwrite")
B.iV.mm(J.mz(p,"thumbs"),q,l)
w=8
return A.b(J.oT(p),$async$bII)
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
return A.i($async$bII,v)},
bIH(d){return C.iE6(d)},
iE6(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bIH=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aRl
w=7
return A.b(o==null?$.aRl=A.hpM():o,$async$bIH)
case 7:r=f
q=J.mA(r,"thumbs","readwrite")
B.iV.GS(J.mz(q,"thumbs"),m)
w=8
return A.b(J.oT(q),$async$bIH)
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
return A.i($async$bIH,v)}},D
J=c[1]
A=c[0]
B=c[2]
A9=c[85]
S=c[292]
A_=c[111]
Aa=c[291]
P=c[296]
A0=c[202]
T=c[66]
M=c[69]
Ab=c[268]
L=c[240]
A1=c[118]
U=c[153]
H=c[41]
E=c[256]
Ac=c[271]
V=c[137]
Ad=c[166]
A2=c[114]
Ae=c[104]
Af=c[72]
Ag=c[267]
Ah=c[50]
Q=c[266]
Ai=c[290]
Aj=c[236]
N=c[97]
A3=c[93]
Ak=c[209]
A4=c[162]
A5=c[214]
A6=c[252]
Al=c[158]
W=c[297]
A7=c[295]
Am=c[293]
An=c[86]
G=c[294]
Ao=c[165]
Ap=c[298]
Aq=c[152]
A8=c[244]
Ar=c[40]
As=c[195]
At=c[113]
Au=c[232]
X=c[283]
O=c[49]
F=c[129]
Av=c[39]
I=c[136]
Y=c[106]
K=c[171]
Aw=c[119]
Z=c[83]
R=c[38]
Ax=c[116]
C=a.updateHolder(c[7],C)
D=c[289]
C.ar6.prototype={}
C.b1M.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.blW(),f=h.x!=null&&h.A5(i).length===0
if(h.x!=null)w=f?B.b6:B.bA
else w=h.gVq()?B.bA:B.ec
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.K(D.bt3,B.r,1)
s=x.p
r=A.p(i,A.w(A.a([A.p(i,D.fsT,B.f,i,i,new A.o(B.b6.j(0.12),i,i,A.m(999),i,i,B.m),i,i,i,i,B.ho,i,i,i),B.R,D.fZn,B.at,A.c(C.xC(new A.W(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fUV,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,D.baB,i,i,i,i,B.Pz,i,i,i)
q=A.m(16)
p=A.K(B.bn,B.r,1)
o=A.K(B.b6.j(0.28),B.r,1)
n=A.hs7(h.d)
o=A.p(B.z,C.b1L(A.fXD(h.e,n),30),B.f,i,i,new A.o(B.mr,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fPP,B.K,i,i)
m=A.m(14)
l=A.K(B.bn,B.r,1)
q=A.p(i,A.w(A.a([o,B.O,n,B.bs,D.fZG,B.af,A.p(i,A.w(A.a([D.hf4,B.bs,A.c(A.BC(h.c),i,i,i,i,i,i,D.fKf,i,i,i)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.m),i,i,i,i,B.fc,i,i,1/0)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,p,q,i,i,B.m),i,i,i,i,B.a29,i,i,i)
p=A.m(16)
m=A.K(B.bn,B.r,1)
l=j.aV3("Original due",C.xC(h.r,!1))
n=j.aV3("Current due",C.xC(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.R,A.p(i,A.w(A.a([l,B.O,n,B.R,A.p(i,A.c(h.gaP0(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.m),i,i,i,i,B.x6,i,i,1/0),B.R,j.com(),B.O,j.cat(g,f)],s),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.K(B.bn,B.r,1)
B.d.u(p,A.a([B.R,A.p(i,A.w(A.a([D.h_G,B.at,A.c(q,i,i,i,i,i,i,D.fOY,i,i,i)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaJB()){q=A.m(14)
o=A.K(B.cE,B.r,1.6)
B.d.u(p,A.a([B.R,A.p(i,A.w(A.a([D.hgp,B.O,A.bv(A.m(12),A.em(new A.a4(1/0,88,A.b4(i,i,i,new A.XY(h.ax,B.a_,D.fxG,!0,3.5,i),B.aA),i),B.c,!0),B.ap)],s),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.m),i,i,i,i,B.Da,i,i,i)],s))}p.push(B.aB)
p.push(D.h8b)
return A.p(i,A.w(A.a([r,new A.C(B.a2b,A.w(p,B.am,i,B.e,B.h,0,B.p),i)],s),B.am,i,B.e,B.P,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aV3(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.ads,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fLj,w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
com(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.abK(B.ec,u,"Not paid yet")
w=t.A5(null).length
v=w===0?B.b6:B.bA
return this.abK(v,u,C.xC(t.x,!0))},
cat(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.abK(B.b6,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.abK(B.b6,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.ads,u,u,u)
v=A.U(d).k("O<1,ht>")
v=A.B(new A.O(d,new C.cb_(),v),v.k("aj.E"))
return A.w(A.a([w,B.aj,A.c_(B.bI,v,B.br,u,6,6)],x.p),B.B,u,B.e,B.h,0,B.p)},
abK(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.ads,w,w,w),1),new A.d0(1,B.c9,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dX,w,w),w)],x.p),B.B,w,B.e,B.h,0,w,w)}}
C.bfb.prototype={
a4(d,e){new A.XY(this.b,B.a_,e,!0,3.5,null).a4(d,e)},
aD(d){return d.b!==this.b}}
C.arj.prototype={
R(){return new C.aG9(A.a([],x.bp))},
ge9(){return this.c}}
C.aG9.prototype={
Z(){this.a3()
this.JT()},
JT(){var w=0,v=A.j(x.H),u,t=this,s
var $async$JT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4c(t.a.c),$async$JT)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dVn(t,s))
case 1:return A.h(u,v)}})
return A.i($async$JT,v)},
aX2(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bv:B.bl).j(0.22)
w=A.m(10)
return A.bB(v,new A.b6(4,r,new A.ax(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b6(4,w,new A.ax((this.a.d.a?B.bv:B.bl).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b8g),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aX1(d){return this.aX2(d,null)},
QV(d){return this.cs6(d)},
cs6(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QV=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.IZ:B.f1
w=7
return A.b(new A.id().Dg(72,900,900,n),$async$QV)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fv(),$async$QV)
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
return A.i($async$QV,v)},
b5r(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.m(10),n=A.K((q?B.bv:B.bl).j(0.18),B.r,1)
if(d)q=B.cX
else q=s.a.d.a?B.bv:B.bl
q=A.V(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,12.5,r,r,B.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cX
else u=s.a.d.a?B.bv:B.bl
t=x.p
u=A.E(A.w(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.h,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cX,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cp)
q=A.a([q,B.aa,u,A.bJ(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aH(r,r,r,r,A.V(B.cC,s.a.d.a?B.bv:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cp))
return A.p(r,A.A(q,B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.m),r,r,r,B.jF,D.bGi,r,r,r)},
E9(d){return this.bGg(d)},
bGf(){return this.E9(null)},
bGg(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E9=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ay()
r=new A.au(new A.bb(a4,B.b5,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.fJ(a4)
p=a5.c
a4=a4===q?B.o.v(B.i.M(p)):B.i.a5(p,2)}o=new A.au(new A.bb(a4,B.b5,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.bb(a4,B.b5,B.aO),s)
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
i=a3?null:A.hs7(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.xT?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i1(B.v.j(0.55),!0,"Dismiss",a4,new C.dV6(),new C.dV7(a2,t,a5,r,new C.dV8(a2,t),o,n,j),B.eK,!0,x.y),$async$E9)
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
break}a1=A.fXD(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.xT?"male":"female"
w=7
return A.b(A.ake(a3,A.hAF(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$E9)
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
if(!a3.A(0,A.c2(a4.gck(),a4.gci(),a4.gcB(),0,0,0,0,0)))a5.cWB(a2.a)
w=8
return A.b(A.ake(t.a.c,a5),$async$E9)
case 8:case 5:w=9
return A.b(t.JT(),$async$E9)
case 9:case 1:return A.h(u,v)}})
return A.i($async$E9,v)},
aXI(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cX.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cX
else s=(this.a.d.a?B.bv:B.bl).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b1L(d,18)
if(g)q=B.cX
else q=this.a.d.a?B.aS:B.ax
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,A.p(p,A.A(A.a([r,B.b7,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bc,B.h,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.m),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
TJ(d){return this.cKt(d)},
cKt(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$TJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i1(B.v.j(0.55),!0,"Dismiss",s,new C.dVq(),new C.dVr(t,d),B.hn,!0,x.y),$async$TJ)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.W(s,0,!1)
case 4:w=7
return A.b(A.ake(t.a.c,d),$async$TJ)
case 7:w=8
return A.b(t.JT(),$async$TJ)
case 8:case 1:return A.h(u,v)}})
return A.i($async$TJ,v)},
QU(d,e){return this.bRq(0,e)},
bRq(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$QU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lE(s,"Cancel","Delete",e.b+" \xb7 "+A.BC(e.c)+" will be removed from this device.","Delete this debt?"),$async$QU)
case 3:if(!g){w=1
break}w=4
return A.b(C.fQQ(t.a.c,e.a),$async$QU)
case 4:w=5
return A.b(t.JT(),$async$QU)
case 5:case 1:return A.h(u,v)}})
return A.i($async$QU,v)},
ahK(d){return this.clD(d)},
clD(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.L,null,new C.dVk(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ahK)
case 2:return A.h(null,v)}})
return A.i($async$ahK,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eHT
w=J.dO(m.d,new C.dVs())
v=A.B(w,w.$ti.k("M.E"))
w=J.dO(m.d,new C.dVt())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cD(v,0,new C.dVu())
w=A.m(18)
s=m.a.d.a
r=s?D.cHi:D.aFj
q=A.K(s?B.cX.j(0.35):B.cX.j(0.18),B.r,1)
s=A.p(l,D.c7w,B.f,l,l,new A.o(B.cX.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aE(!1,B.a3,!0,A.m(12),A.aM(!1,A.m(12),!0,D.eHd,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dVv(m),l,l,l,l,l,l,l),B.f,B.cX,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.h,0,l,l)
o=A.E(m.cGs("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BC(t)
r=A.a([A.p(l,A.w(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.bbH(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.h,0,l,l)],p),B.B,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a6(B.aw,B.aD,B.w,r,l,l),B.m),l,l,l,l,B.ao2,l,l,l),B.aB],p)
if(J.cx(m.d)){w=m.a.d.a
s=w?B.el:B.c
q=A.m(18)
o=A.K((w?B.bv:B.bl).j(0.12),B.r,1)
n=A.p(l,D.c23,B.f,l,l,new A.o(B.cX.j(0.12),l,l,A.m(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,15,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.w(A.a([n,B.af,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.h,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.m),l,l,l,l,D.bJ_,l,l,1/0))}else{w=m.gcrk()
s=A.B(new A.O(v,w,A.U(v).k("O<1,x>")),x.l)
if(u.length!==0){q=A.a([B.aj,new A.C(D.bKF,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.U(u).k("O<1,x>")))
B.d.u(s,q)}B.d.u(r,s)}return A.w(r,B.am,l,B.e,B.h,0,B.p)},
bbH(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.m(14),r=A.K((v.a.d.a?B.bv:B.bl).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cX
else w=v.a.d.a?B.aS:B.ax
return A.p(u,A.w(A.a([q,B.bs,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.h,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.m),u,u,u,u,B.ep,u,u,u)},
cGs(d,e){return this.bbH(!1,d,e)},
crl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.A5(j).length,h=d.blb()
if(d.x!=null){w=d.A5(j).length
v=w===0?B.cX:B.bA}else if(d.gVq())v=B.bA
else{if(h)w=B.cX
else w=k.a.d.a?B.bv:B.bl
v=w}if(d.x!=null){w=d.A5(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xC(u,!1)}else{u.toString
t="Paid "+C.xC(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xC(w,!1)+" \xb7 "+i+" missed":"Due "+C.xC(w,!1)}w=k.a.d.a?B.el:B.c
u=A.m(18)
if(d.gVq()&&d.x==null)s=B.bA.j(0.35)
else s=(k.a.d.a?B.bv:B.bl).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.aa(0,B.H,B.v.j(0.04),B.cN,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bt:B.mr
o=A.K(d.gVq()&&d.x==null?B.bA.j(0.45):B.cX.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hs7(d.d)
o=A.p(B.z,A.d2(C.b1L(A.fXD(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.ax
m=x.p
n=A.a([new A.d0(1,B.c9,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaJB())B.d.u(n,A.a([B.e0,A.V(B.Qo,B.cX.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.A(n,B.l,j,B.e,B.h,0,j,j),B.cQ,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.N,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.h,0,B.p),1)
n=A.BC(d.c)
l=k.a.d.a?B.aS:B.ax
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aE(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.C(Ai.anQ,A.A(A.a([o,B.ba,p,B.aa,A.w(A.a([n,B.bs,A.V(B.eL,(k.a.d.a?B.bv:B.bl).j(0.5),j,j,j,18)],m),B.dr,j,B.e,B.h,0,B.p)],m),B.l,j,B.e,B.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dVm(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.o(w,j,s,u,r,j,B.m),j,j,j,B.d2,j,j,j,j)}}
C.va.prototype={}
C.anj.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bb
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
if(j&&!v)l.push(new A.C(B.j6,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
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
e=new A.C(B.lF,A.w(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hN,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a6(B.aw,B.aD,B.w,a1.d,a0,a0),B.m),a0,a0,a0,D.bGO,a0,a0,a0,a0)}}
C.aYr.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bb?B.bb:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.c(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bo:B.cR,q,B.N,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.c(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.h,0,q,q),B.cQ,n],m)
if(p.z)o.push(new A.C(B.tC,n,q))
return new A.C(B.d2,A.w(o,B.l,q,B.e,B.P,0,B.p),q)}}
C.UJ.prototype={
R(){return new C.biR()}}
C.biR.prototype={
gc4Z(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aF(d,n,x.w).w,l=x.p,k=A.a([D.eHO,D.eHU],l)
for(w=0;w<8;++w){v=D.a6x[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.IN:B.Ad
q=t===s
r=A.V(r,q?B.eJ:B.bX,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.b7,A.c(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bu(1,B.b8,A.c(v.c,n,1,B.a2,n,n,n,B.BB,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ax(B.eJ,2,B.r,-1)
s=new A.o(n,n,new A.bE(p,p,p,p),new A.bc(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.C(B.f_,A.w(A.a([new A.C(B.mz,new A.c0(B.aK,B.e,B.h,B.l,n,B.p,n,0,r,n),n),A.p(n,new A.dp(!0,new C.anj(v,q.d,q.e,new C.dkl(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.h,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dkm(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.C(D.bHb,A.bH(D.hm1,n,new C.dkn(o,d),A.bp(B.b_,n,n,n,n,B.po,n,n,new A.b9(A.m(16),B.a1),n,n,n)),n))
return A.bo(!0,new A.cP(new A.aY(0,1/0,0,m.a.b*0.9),A.co(k,n,n,D.bLz,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nM.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bhL(d,e,f){return new C.nM(this.a,e,d,f)}}
C.IN.prototype={
xf(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IN(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aHJ(d){var w=null
return this.xf(w,w,w,w,w,d,w,w,w,w,w,w)},
cSb(d){var w=null
return this.xf(w,w,w,w,d,w,w,w,w,w,w,w)},
bhJ(d,e,f){var w=null
return this.xf(d,w,w,w,w,w,w,w,e,w,f,w)},
cSQ(d){var w=null
return this.xf(w,w,w,w,w,w,d,w,w,w,w,w)},
cSZ(d){var w=null
return this.xf(w,w,w,w,w,w,w,w,w,d,w,w)},
cS9(d){var w=null
return this.xf(w,w,w,d,w,w,w,w,w,w,w,w)},
cT0(d){var w=null
return this.xf(w,w,w,w,w,w,w,w,w,w,w,d)},
cS6(d){var w=null
return this.xf(w,w,d,w,w,w,w,w,w,w,w,w)},
cS1(d){var w=null
return this.xf(w,d,w,w,w,w,w,w,w,w,w,w)},
GJ(d){var w=null
return this.xf(w,w,w,w,w,w,w,d,w,w,w,w)},
cT8(d,e,f,g,h,i,j,k,l,m,n){return this.xf(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cPG(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bUn(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.i.M(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cV(d.h(0,n))).length!==0?B.a.i(A.cV(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cV(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.EI.geB(D.EI))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a8f)
q=l.$2("frame",D.a7A)
l=l.$2("texture",D.a7w)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cV(d.h(0,"author"))):o
return this.cT8(p,u,t,q,r,A.rv(d.h(0,"ribbon"))?A.Hk(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a0t.prototype={
R(){return new C.aD6(A.a([],x.I),D.PX)},
ge9(){return this.c}}
C.aD6.prototype={
Z(){var w,v=this
v.a3()
v.f=A.Au(0,1)
w=$.ay()
v.z=new A.au(B.ay,w)
v.Q=new A.au(B.ay,w)
v.lh()
w=v.a
C.bGZ(w.c,w.d).bD(new C.dl1(v),x.fL)},
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
lh(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.M7(s.c,s.d),$async$lh)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.dkQ(t,r))
t.az9()
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
gavH(){var w,v=this
if(!J.cx(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
az9(){var w,v,u=this.gavH(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cjX(d){this.l(new C.dkN(this,d))
this.az9()},
OJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$OJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nM(B.o.v(1000*Date.now()),"Untitled page","",new A.W(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aUw(r.c,r.d,s),$async$OJ)
case 3:w=4
return A.b(t.lh(),$async$OJ)
case 4:if(t.c==null||J.cx(t.d)){w=1
break}q=J.oU(t.d,new C.dko(s))
p=q>=0?q:J.ad(t.d)-1
t.l(new C.dkp(t,p))
t.az9()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Cf(p+1,B.cn,B.lb),$async$OJ)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$OJ,v)},
BS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$BS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gavH()
s=s==null?null:s.a
if(s==null)s=B.o.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aUw(o.c,o.d,new C.nM(s,r,q,new A.W(p,0,!1))),$async$BS)
case 3:w=4
return A.b(t.lh(),$async$BS)
case 4:if(t.c==null){w=1
break}t.l(new C.dkR(t))
case 1:return A.h(u,v)}})
return A.i($async$BS,v)},
Ps(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ps=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gavH()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dkx(r),s,null,!0,!0,x.y),$async$Ps)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bGJ(s.c,s.d,r.a),$async$Ps)
case 4:t.l(new C.dky(t))
w=5
return A.b(t.lh(),$async$Ps)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.Vt(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Ps,v)},
zt(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zt=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BS(),$async$zt)
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
return A.b(C.SI(s,r.r,o,p,q),$async$zt)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a8(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hSU(s,r.x,r.r),$async$zt)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.M7(s.c,s.d),$async$zt)
case 10:l=e
for(s=n.d,r=J.cJ(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.I(l,new C.nM(""+(m+k),q,B.a.i(j.b),new A.W(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BJ(r.c,r.d,l),$async$zt)
case 11:w=12
return A.b(t.lh(),$async$zt)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zt,v)},
a2F(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a2F=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BS(),$async$a2F)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzr(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dr(D.AF,new C.dkO(t),new C.dkP())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.n6("Our Family",o,"",""))
for(o=J.aQ(t.d);o.C();){n=o.gP(o)
p.push(new H.n6(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.htZ(o,new H.t2(s,r,"",p,new H.vr(q.d,null,null,null,null,"","","")),null),$async$a2F)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a2F,v)},
P9(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$P9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BS(),$async$P9)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.aiL,null,new C.dkt(t),s,!0,!0,!0,I.abz,!1,!1,x.N),$async$P9)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cSb(r)
t.l(new C.dku(t,q))
s=t.a
w=7
return A.b(C.Tm(s.c,s.d,q),$async$P9)
case 7:case 1:return A.h(u,v)}})
return A.i($async$P9,v)},
YK(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$YK=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.aiL,null,new C.dkz(t),r,!0,!0,!0,I.abz,!1,!1,x.e),$async$YK)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.dkA(t,s))
r=t.a
w=4
return A.b(C.Tm(r.c,r.d,s),$async$YK)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.Cf(0,B.ed,B.nk)
case 1:return A.h(u,v)}})
return A.i($async$YK,v)},
bX7(d){var w=d.bU(),v=B.a.aZ(B.o.v(w.gci()),2,"0"),u=B.a.aZ(B.o.v(w.gcB()),2,"0")
return""+w.gck()+"-"+v+"-"+u},
gzr(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c4c()
if(r.e)w=D.ahq
else if(J.cx(r.d)){w=r.y
v=r.gzr(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fJy,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.C(X.apg,new C.a_I(w,v,0,q),q),q),B.bx,t,B.aj,A.c(u,q,q,q,q,q,q,A.l(q,q,D.l6.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.p(q,D.fsE,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.aa(0,B.H,B.e_.j(0.45),B.J,18)],x.V),E.xJ,B.m),q,q,q,q,B.PB,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcOJ(),q,q,q,q,q,q,!1,B.a4))
w.push(B.R)
w.push(A.hy(D.bZ2,D.hlt,r.gaQI(),q))
B.d.u(u,w)}w=A.at(A.cc(A.w(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.ew,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.l6.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.N,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.e8:B.yJ
u=A.w(A.a([new A.C(D.bIg,w,q),A.E(A.Ka(v,new C.dl_(r),J.ad(r.d)+1,q,r.gcjW(),u,B.aK),1),r.bJg()],x.p),B.l,q,B.e,B.h,0,B.p)
w=u}v=x.p
return A.c6(q,D.a_R,new A.am(B.a0,q,B.b4,B.t,A.a([D.aSW,A.bo(!0,A.w(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c4c(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.L9(B.eh,"AI",h.gbH2(),!0))
if(h.a.f)f.push(new C.L9(B.m9,"Cover",h.gbS_(),!1))
if(h.a.f)f.push(new C.L9(B.xB,"Header",h.gbMT(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.L9(B.vF,"Print",h.gctv(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.h1:B.jo
t=v?"Save":"Edit"
f.push(new C.L9(u,t,v?h.gczV():new C.dkK(h),!1))}if(h.a.f)f.push(new C.L9(B.ig,"Add page",h.gaQI(),!1))
v=C.hOg(h.y.Q)
u=h.gzr(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dSP
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kI.j(0.5),1,B.r,-1)
j=A.p(g,A.V(l.a,D.l6,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bE(i,i,i,i),new A.bc(k,k,k,k),g,new A.a6(B.a5,B.a9,B.w,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.l6.j(0.85)
p.push(new A.bu(1,B.b8,A.aA(B.bZ,A.w(A.a([k,B.bs,A.c(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.C,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.anj(v,u,t+" \xb7 "+s+" "+r,new C.dkL(h),A.A(p,B.l,g,B.e,B.h,0,g,g),g)},
AL(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.BS(),$async$AL)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aQ(t.d);r.C();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a4s(B.d.aL(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dkq(t,p),s,null,!0,!0,x.N),$async$AL)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zt(),$async$AL)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.EJ(),$async$AL)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Gm("Swahili (Kiswahili)",!0),$async$AL)
case 18:w=16
break
case 17:w=19
return A.b(t.cL8(o==="sw"?"Swahili (Kiswahili)":"English"),$async$AL)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$AL,v)},
a_J(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.K(E.kI.j(0.3),B.r,1),r=x.p
return new A.C(B.cB,A.aM(!1,v,!0,A.p(w,A.A(A.a([A.p(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.xJ,B.a6),w,42,w,w,w,w,w,42),B.ba,A.E(A.w(A.a([A.c(f,w,w,w,w,w,w,A3.LQ,w,w,w),A.c(g,w,w,w,w,w,w,B.FE,w,w,w)],r),B.B,w,B.e,B.h,0,B.p),1)],r),B.l,w,B.e,B.h,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.m),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dkM(d,h),w,w,w,w,w,w,w),w)},
EJ(){return this.bWB()},
bWB(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$EJ=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dkD(r),a7,null,!0,!0,x.ei),$async$EJ)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eN("Working on it\u2026",$.ay())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dkE(o),a7,null,!0,!0,x.H).fA(new C.dkF(a6))
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
for(a1=0;a1<8;++a1){i=D.AF[a1]
J.c8(j,i.a)}w=8
return A.b(C.aji(a0,a7,new C.dkG(o),d,l,e,j),$async$EJ)
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
l.sil($.ay())
J.aV0(l,0)
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
a7=j.bhL(m.b.h(0,a4).b,a7,new A.W(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BJ(j.c,j.d,l),$async$EJ)
case 11:w=12
return A.b(r.lh(),$async$EJ)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.AF[a1].a)
a5=l.cPG(j,12,a7)
l=r.a
w=15
return A.b(C.Tm(l.c,l.d,a5),$async$EJ)
case 15:if(r.c!=null)r.l(new C.dkH(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.Cf(0,B.ed,B.nk)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b0(a3?A.cDy("Undo",new C.dkI(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.em,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$EJ,v)},
Gm(d,e){return this.cL9(d,e)},
cL8(d){return this.Gm(d,!1)},
cL9(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Gm=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eN("Starting\u2026",$.ay())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dkT(a0),k,null,!0,!0,x.H).fA(new C.dkU(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.c8(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a4J(m,new C.dkV(a0)),$async$Gm)
case 10:w=8
break
case 9:w=11
return A.b(C.bIx(new C.dkW(a0),m,a2),$async$Gm)
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
o.sil($.ay())
J.aV0(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.T(A.b0(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bhL(J.t(p,g).b,j.a,new A.W(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BJ(k.c,k.d,o),$async$Gm)
case 12:w=13
return A.b(r.lh(),$async$Gm)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b0(A.cDy("Undo",new C.dkX(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Gm,v)},
bJg(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dkr(v):u
r=A.aH(u,u,u,u,A.V(D.bUz,s?D.l6:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hy(A.V(B.xn,B.Ho,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.Ho,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbRA(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.l6.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dks(v):u
return A.bo(!0,new A.C(D.bI5,A.A(A.a([r,s,A.aH(u,u,u,u,A.V(B.eL,t<J.ad(v.d)?D.l6:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.h,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0x.prototype={
R(){return new C.bjf(new A.au(B.ay,$.ay()))}}
C.bjf.prototype={
ga3P(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ay()
w.W$=0
this.a2()},
gbVa(){switch(this.ga3P()){case"cover":var w=D.dfs
break
case"book":w=D.daj
break
default:w=D.dJc
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=E.kI.j(0.5),m=x.p,l=A.A(A.a([D.dSQ,B.ar,D.bNN,A.aH(p,p,p,p,B.lJ,p,p,p,new C.dmO(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.h,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jE(p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dmP(q),q.ga3P()==="page",p,p,p,p))
if(q.a.d)k.push(A.jE(p,p,p,D.hfX,p,new C.dmQ(q),q.ga3P()==="book",p,p,p,p))
k.push(A.jE(p,p,p,D.h2v,p,new C.dmR(q),q.ga3P()==="cover",p,p,p,p))
k=A.c_(B.bI,k,B.br,p,6,8)
j=B.c.j(0.07)
j=A.aN(p,B.M,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bB(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kC,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a7,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbVa(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,Ae.LN,p,p,p)
w.push(A.mU(p,B.c.j(0.08),r,B.hH,new C.dmS(q,s),p,p,p,p))}return A.ez(p,E.CK,A.cc(A.w(A.a([l,B.R,D.hji,B.aj,k,B.af,j,B.O,A.c_(B.bI,w,B.br,p,6,6),B.aB,A.de(D.bZ_,p,D.hk5,new C.dmT(q,d),A.bp(B.b_,p,p,p,p,B.po,p,p,new A.b9(A.m(16),B.a1),p,p,p)),B.at,D.he6],m),B.B,p,B.e,B.P,0,B.p),B.t,p,B.y,p,p,B.f6,p,p,B.ah),p,p,p,B.HU,p,B.da,p,new A.b9(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a0v.prototype={
R(){return new C.aD9(A.a([],x.gA))},
ge9(){return this.c}}
C.ah2.prototype={}
C.aD9.prototype={
Z(){this.a3()
this.lh()},
lh(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.SM(p.c,p.d),$async$lh)
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
return A.b(C.bGZ(r.c,q),$async$lh)
case 6:j=e
i=J
w=7
return A.b(C.M7(t.a.c,q),$async$lh)
case 7:m.push(new l.ah2(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.dlg(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lh,v)},
bd0(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
RL(d,e){return this.clA(0,e)},
clA(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$RL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a8(s,!1).ca(A.e7(new C.dlf(u,e),!0,null,x.y)),$async$RL)
case 2:t=g
w=3
return A.b(u.lh(),$async$RL)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.T(D.aWX)
return A.h(null,v)}})
return A.i($async$RL,v)},
Go(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Go=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.T(D.aWS)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aiD(s.c,s.d),$async$Go)
case 5:q=e
w=6
return A.b(t.lh(),$async$Go)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.RL(0,B.d.fg(t.d,new C.dlk(q))),$async$Go)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.SI(p,s.f,r,n,o),$async$Go)
case 10:m=e
w=11
return A.b(t.lh(),$async$Go)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.T(D.aWX)
case 1:return A.h(u,v)}})
return A.i($async$Go,v)},
R9(d,e){return this.cxz(0,e)},
cxz(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$R9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dlj(t,e),s,null,!0,!0,x.y),$async$R9)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a4U(s.c,s.d,e.a),$async$R9)
case 4:w=5
return A.b(t.lh(),$async$R9)
case 5:case 1:return A.h(u,v)}})
return A.i($async$R9,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bJj(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.K(E.kI.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fP(0.7142857142857143,A.p(n,A.w(A.a([D.dSR,B.af,D.eGP,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.l6.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bc,B.h,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcOF(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.K(E.kI.j(0.85),B.r,1.6)
s=A.aA(n,A.p(n,D.c6g,B.f,n,n,new A.o(B.v.j(0.3),n,A.K(E.kI.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dll(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.v.j(0.3)
p=A.K(E.kI.j(0.5),B.r,1)
w=A.p(n,A.A(A.a([s,B.ba,D.bOb,A.p(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fIv,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.m),n,n,n,n,B.ho,n,n,n)],l),B.l,n,B.e,B.h,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.cck,B.m),n,n,n,Aa.Pn,D.bFY,n,n,n)
if(o.e)k=D.ahq
else k=k.length===0?D.bfY:A.cg(new C.dlm(k))
return A.c6(n,D.a_R,new A.am(B.a0,n,B.b4,B.t,A.a([D.aSW,A.bo(!0,A.w(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bJj(d){var w,v,u=this,t=null,s=u.bd0(d),r=d.c,q=x.p,p=A.a([A.bT(0,new A.d6(B.dE,B.z,B.f,new A.a4(300,420,new C.a_I(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.p(t,D.c5v,B.f,t,t,new A.o(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dld(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fI7,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.w(A.a([new A.fP(0.7142857142857143,new A.am(B.a0,t,B.ac,B.t,p,t),t),B.O,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.l6.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.h,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dle(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.L9.prototype={}
C.a_I.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dr(D.AF,new C.cT3(m),new C.cT4()),j=m.c,i=D.EI.h(0,j.e),h=A.b2(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mN:B.bc
v=new C.cT5(h)
i=A.a([new A.aa(0,B.H,B.v.j(0.6),D.eDC,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b4(l,l,l,new C.bgq(j.x,h,l),B.aA),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cR(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bc(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.aph,8,0.85,2.2),v.$4(D.bKY,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.aph,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.C(D.bKU,A.b4(l,l,l,new C.bgh(h,l),B.aA),l),0,0,0))
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
t.push(A.bT(0,new A.C(D.bLq,A.w(o,B.l,l,w,B.h,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aKk(l),D.fxz),l,l,l,46,0,l))
return A.p(l,A.bv(D.afZ,new A.am(B.a0,l,B.ac,B.t,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.afZ,i,new A.a6(B.aw,B.aD,B.w,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bgq.prototype={
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
l=new A.ar(B.U,B.S,B.X,B.Y,B.W)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.O(new A.r(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.T()
l=A.a([],n)
j=new A.aI(m.r,B.ak,null,null,l)
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
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
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
C.bgh.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.T(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ae
j.c=2.4
j.d=B.bG
for(w=e.a,v=e.b,v=[D.fkt,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aI(k,B.ak,null,null,s)
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
s=new A.ar(B.U,B.S,B.X,B.Y,B.W)
s.r=i.j(0.9).gp(0)
d.O(new A.r(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.vb.prototype={}
C.a03.prototype={
R(){return new C.bgo()}}
C.bgo.prototype={
goF(){var w=this.d
return w===$?this.d=this.a.c:w},
gzr(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bb(w.b,B.b5,B.aO),$.ay())}return v},
gaES(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bb(w.c,B.b5,B.aO),$.ay())}return v},
gaud(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bb(w.y,B.b5,B.aO),$.ay())}return v},
t(){var w=this,v=w.gzr(0),u=v.V$=$.ay()
v.W$=0
v=w.gaES()
v.V$=u
v.W$=0
v=w.gaud()
v.V$=u
v.W$=0
w.a2()},
auR(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jE(s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.dc6(this,f,u),e===u,s,s,s,s))}return A.c_(B.bI,r,B.br,s,6,8)},
aAF(d){var w=null,v=B.c.j(0.07)
return A.bB(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mh,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goF(),a0=f.gzr(0),a1=a0.a.a,a2=f.gaES(),a3=a2.a.a,a4=f.gaud(),a5=d.bhJ(a4.a.a,a3,a1)
a1=x.w
a3=A.aF(a6,e,a1).w
a1=A.aF(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a4(190,260,new A.d6(B.dE,B.z,B.f,new A.a4(270,370,new C.a_I(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aN(e,B.M,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.aAF("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dcv(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a7,e,B.ao,e,e,e,e)
a2=A.aN(e,B.M,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.aAF("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dcw(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a7,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.AF[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ax(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bE(o,o,o,o),e,e,new A.a6(B.aw,B.aD,B.w,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aF
v.push(A.aA(e,A.w(A.a([p,B.cQ,A.c(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.N,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dcx(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.c_(B.bI,v,B.br,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b_.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eJ:B.L,2,B.r,-1)
q.push(A.aA(e,A.p(e,A.V(D.aEg[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bE(o,o,o,o),new A.bc(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dcy(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.c_(B.bI,q,B.br,e,8,8)
a4=A.aN(e,B.M,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.aAF("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.al,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.dcz(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a7,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,N.wn,e,e,e)
m=A.a([],w)
for(l=D.EI.gdU(D.EI),l=l.gae(l);l.C();){k=l.gP(l)
j=A.b2(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eJ:B.aT
g=r.e===i
o=new A.ax(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bE(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aF
m.push(A.aA(e,A.w(A.a([j,B.bs,A.c(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.N,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.dcA(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.c_(B.bI,m,B.br,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.wn,e,e,e)
k=f.goF()
return new A.C(new A.R(0,0,0,a3.f.d),A.bo(!0,new A.cP(new A.aY(0,1/0,0,a1.a.b*0.92),A.co(A.a([D.hdx,B.af,d,B.aN,a0,B.R,a2,B.aB,D.hjR,B.O,v,B.aB,D.hdG,B.O,q,B.aB,a4,B.aB,p,B.O,m,B.aB,l,A.lg(e,9,""+B.i.S(f.goF().f),36,18,new C.dcB(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.wn,e,e,e),B.aj,f.auR(D.a8f,f.goF().r,new C.dcC(f),D.dMy),B.af,A.c("BORDER",e,e,e,e,e,e,N.wn,e,e,e),B.aj,f.auR(D.a7A,f.goF().w,new C.dcD(f),D.dME),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,N.wn,e,e,e),B.aj,f.auR(D.a7w,f.goF().x,new C.dcF(f),D.dOj),B.aj,A.jd(e,B.b_,e,B.ag,e,new C.dcG(f),e,e,e,D.h7H,f.goF().z),B.bx,A.bH(D.hcd,e,new C.dcH(f,a6),A.bp(B.b_,e,e,e,e,B.po,e,e,new A.b9(A.m(16),B.a1),e,e,e))],w),e,e,S.aoJ,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aKk.prototype={
a4(d,e){var w,v,u,t=new A.aI($.T().r,B.ak,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bA())
u=A.L()
u.san(D.cd1.az(0,new A.a5(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.blP.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.T()
w=A.L()
w.san(D.cc0.az(0,new A.a5(0,0,a2,a3)))
a4.aE(new A.a5(0,0,a2,a3),w)
v=B.i.cG(a1/112)
u=new A.e4()
u.cV(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dfr[u.aw(9)]
j=u.aw(14)
J.bs(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a5(n,j,n+m,j+l)
h=A.bx(i,B.hG)
g=new A.ar(B.U,B.S,B.X,B.Y,B.W)
f=A.ap(k,B.c,0.12)
f.toString
e=A.ap(k,B.v,0.45)
e.toString
g.san(new A.a6(B.a5,B.a9,B.w,A.a([f,k,e],w),d,d).az(0,i))
a4.aq(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ar(B.U,B.S,B.X,B.Y,B.W)
e.r=E.kI.j(0.55).gp(0)
a4.aE(new A.a5(g,j,h,j+2),e)
e=new A.ar(B.U,B.S,B.X,B.Y,B.W)
e.r=E.kI.j(0.4).gp(0)
a4.aE(new A.a5(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ar(B.U,B.S,B.X,B.Y,B.W)
p.san(D.cbi.az(0,new A.a5(0,r,a2,q)))
a4.aE(new A.a5(0,r,a2,q),p)
p=new A.ar(B.U,B.S,B.X,B.Y,B.W)
p.r=B.v.j(0.5).gp(0)
p.y=B.le
a4.aE(new A.a5(0,q,a2,q+14),p)}t=A.L()
t.r=D.bjM.j(0.72).gp(0)
a4.aE(new A.a5(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bU(B.z,0.5,B.w,d,0,A.a([D.bsu.j(0.22),B.L],w),d,d).az(0,A.bY(new A.r(t,a1),a0)))
a4.O(new A.r(t,a1),a0,a3)},
aD(d){return!1}}
C.bew.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aJ(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cR(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.o(A.ap(D.l6,D.bxQ,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.N_,o,o,B.m),B.bm,o,o),o))}v=x.V
u=A.a([new A.aa(0,B.H,B.v.j(0.35),B.aOv,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kI.j(0.6),o,o,new A.bc(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.p(o,A.w(t,B.l,o,B.rC,B.h,0,B.p),B.f,o,o,new A.o(o,o,o,D.b7Y,u,D.cd_,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.aa(0,B.H,B.v.j(0.4),B.dv,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aKk(o),D.fxu),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aYr(p.y,r,L.jk,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bB(o,B.eV,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.jk.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fXq,!0,B.a7,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.jk.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.R,A.E(A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bB(o,B.eV,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.jk.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.al,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fNF,!0,B.a7,B.Bx,B.ao,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.fXi,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.jk.j(0.5),o,o,o,o,o,o,o,o,11,B.cR,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.A(A.a([A.E(A.p(o,o,B.f,D.H8.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fD,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.H8.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.H8.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.h,0,o,o),B.aB],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.jk.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.GB(A.cW(A.a([A.cW(o,o,o,o,o,o,o,o,o,D.fR_,B.a.av(k,0,1)),A.cW(o,o,o,o,o,o,o,o,o,o,B.a.aV(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.jk.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cc(A.w(n,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.C(B.hz,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.jk.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.p(o,A.bv(B.N_,new A.am(B.a0,o,B.ac,B.t,A.a([t,new A.C(D.bKr,A.w(s,B.am,o,B.e,B.h,0,B.p),o),A.ao(0,new A.bP(new A.o(o,o,o,o,o,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bm,o,o),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.N_,v,D.cdx,B.m),o,o,o,o,o,o,o,o),1)],m),B.am,o,B.e,B.h,0,o,o))
return new A.am(B.a0,o,B.ac,B.t,l,o)}}
C.ank.prototype={
R(){return new C.anl(new A.eN(0,$.ay()),new C.bWb(),new C.anD(),D.hZ6,null,null)},
gd2(){return this.d}}
C.a2M.prototype={
a9(){return"_Step."+this.b}}
C.anl.prototype={
gD3(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGV(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nw(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gUL(){var w=this.ghi(0)
return w.gzK()==null?"Babu":B.a.i(w.gzK().b)},
Z(){var w,v=this
v.a3()
w=v.ghi(0).gzK()
w=w==null?null:w.c
v.r.b=w===D.oY
w=v.qd(new C.bUx(v))
w.fS(0)
v.x!==$&&A.aT()
v.x=w
v.a3L("Come closer, my children. I am "+v.gUL()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.byy()},
a3L(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d4(E.a1B,new C.bUr(w))},
buU(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.l(new C.bUA(v))},
afg(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
buM(){return this.bcy()},
bcy(){var w=this,v=w.gD3()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bUs(w))
w.a3L(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cC(B.o0,new C.bUt(w))},
cPN(){var w=this
w.l(new C.bUw(w))
w.a3L(w.gD3()[w.as].a)},
LQ(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.af4)return
w=p.gD3()
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
p.l(new C.bUv(p,d,u,q))
p.a3L(u?D.dwC[q.aw(4)]+" "+w[p.as].d:D.dsW[q.aw(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gD3()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bJd(t.at,t.ay,p)
t.l(new C.bUy(t,s))
t.a3L(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.C3(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.C4(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bUz())
w=1
break
case 4:++t.as
t.bcy()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.ZS,new A.am(B.a0,v,B.ac,B.t,A.a([A.bT(0,new A.ea(A.b4(v,v,v,new C.aYw(u,w.r,w.w,u),B.aA),v),0,0,0),A.bo(!0,A.w(A.a([w.cfm(0),B.aX,w.bUl()],t),B.l,v,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cfm(d){var w,v,u,t=this,s=null,r=A.aH(s,s,s,s,B.Rr,s,s,s,new C.bUu(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gD3().length;++w){v=t.as
if(w<v||t.Q===D.b4e)v=B.d_
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,D.bFI,s,s,s,22))}p=A.E(A.w(A.a([D.h4o,A.A(p,B.l,s,B.e,B.h,0,s,s)],q),B.B,s,B.e,B.h,0,B.p),1)
v=A.m(14)
u=A.K(B.fM,B.r,1)
return new A.C(D.bLD,A.A(A.a([r,p,A.p(s,A.c("\ud83d\udd25 "+B.i.S(t.cy*100)+"%",s,s,s,s,s,s,B.iX,s,s,s),B.f,s,s,new A.o(B.b9,s,u,v,s,s,B.m),s,s,s,s,B.ho,s,s,s)],q),B.l,s,B.e,B.h,0,s,s),s)},
bUl(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghi(0).gzK()
if(h==null)w=1
else w=h.c===D.oY?0:1
v=j.dx
u=j.db
t=D.r_.j(0.96)
s=A.m(22)
r=A.K(B.d_,B.r,3)
q=A.b4(i,i,i,new C.brs(w,i),B.aA)
p=A.c(j.Q===D.af4?j.gUL()+" asks":"Elder "+j.gUL(),i,i,i,i,i,i,D.aYd,i,i,i)
o=j.db
o=B.a.av(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.bZ,A.A(A.a([new A.a4(62,62,q,i),B.ar,A.E(A.w(A.a([p,B.bs,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aYq,i,i,i)],n),B.B,i,B.e,B.h,0,B.p),1)],n),B.B,i,B.e,B.h,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbuT(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.abi("Sit down by the fire",j.gbuL()),i,i,i)
break
case 1:v=A.at(j.abi("Ask me, Elder",j.gcPM()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gD3()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ax(D.lY,2.5,B.r,-1)
v.push(A.aA(i,A.p(i,A.c(u[m],i,i,i,i,i,i,D.aYm,B.K,i,i),B.f,i,D.agE,new A.o(D.ame,i,new A.bE(l,l,l,l),new A.bc(q,q,q,q),i,i,B.m),i,i,i,i,B.x9,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bUo(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.c_(B.bI,v,B.br,i,8,8)
break
case 3:v=j.fr
u=v?B.kn:Am.asi
u=A.V(u,v?B.et:D.lY,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.et:D.lY,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gD3().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.abi(v,j.gqw(j))],n),B.l,i,B.e,B.h,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gD3().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aYE,i,i,i)],n)
u=j.cx
if(u>0){u=C.aSG(u)
q=C.aSG(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.adv,i,i,i))}v.push(B.O)
v.push(j.abi("Back to the games",new C.bUp(j)))
v=A.w(v,B.l,i,B.e,B.h,0,B.p)
break
default:v=i}return A.p(i,A.w(A.a([o,B.R,v],n),B.B,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aFP,i,B.m),i,i,i,B.zs,B.bg,i,i,i)},
abi(d,e){var w=null,v=A.m(16),u=A.K(B.d_,B.r,2)
return A.aA(w,A.p(w,A.c(d,w,w,w,w,w,w,A3.LQ,w,w,w),B.f,w,w,new A.o(D.lY,w,u,v,w,w,B.m),w,w,w,w,D.bJk,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.brs.prototype={
a4(d,e){O.htK(d,e.eo(B.J),e.gdl()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aD7.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bWb.prototype={}
C.tt.prototype={}
C.brt.prototype={}
C.anD.prototype={
Nf(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.iqV(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aYw.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.CL(l.d.Nf(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bV(0,u)
l.cF4(d,j)
l.bSU(d,j)
l.cNy(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.nO(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.T()
q=A.L()
p=x.O
o=x.n
q.san(A.ww(B.J,r,A.a([D.bww.j(0.55*s),F.OD.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.w,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bW3(l,d,j,i)),new A.y(540,new C.bW4(l,d,j,i)),new A.y(546,new C.bW5(l,d,j,i)),new A.y(574,new C.bW6(l,d,j,i)),new A.y(612,new C.bW7(l,d,j,i)),new A.y(650,new C.bW8(l,d,j,i)),new A.y(656,new C.bW9(l,d,j,i))],x.E)
B.d.b_(n,new C.bWa())
for(m=0;m<7;++m)n[m].b.$0()
l.bJC(d,j,i)
l.bWz(d,j)
t.restore()
$.T()
t=A.L()
t.san(A.ww(new A.r(w/2,v*0.6),e.gapB()*0.75,A.a([B.L,D.bjF],p),A.a([0.55,1],o),B.w,k,k,0))
d.aE(new A.a5(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cF4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e4()
h.cV(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.T()
r=new A.ar(B.U,B.S,B.X,B.Y,B.W)
r.r=t.gp(0)
d.O(new A.r(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.r(60+q*220,70+q*90)
d.ah(p,p.aI(0,D.eD8),C.iS(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.T()
k=A.a([],t)
l=new A.aI(l.r,B.ak,null,null,k)
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
s=new A.ar(B.U,B.S,B.X,B.Y,B.W)
s.b=B.ae
s.c=1.6
s.r=D.bmq.gp(0)
s.d=B.bG
s.e=B.dP
d.af(l,s)}},
bSU(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
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
j=new A.ar(B.U,B.S,B.X,B.Y,B.W)
j.r=k.gp(0)
d.c1(l,j)
q=A.bZ(new A.r(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.r=B.wM.j(u).gp(0)
d.c1(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ar(B.U,B.S,B.X,B.Y,B.W)
o.r=D.ajz.j(0.16*(1-h)).gp(0)
d.O(new A.r(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cNy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bGg(d,D.eD4,0.9,e,D.hSN,!1,!1,D.b4b,1,!1)
w=$.T().r
v=x.v
u=new A.aI(w,B.ak,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bA())
t=A.L()
t.r=D.alw.gp(0)
d.af(u,t)
C.bGg(d,D.eD6,0.95,e,D.hSB,!1,!1,D.b4c,1,!0)
t=new A.aI(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.ck(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.ck(431,553,421,548))
t.E(new A.bA())
u=A.L()
u.r=F.GO.gp(0)
d.af(t,u)
u=A.bZ(D.eD5,8,28)
t=A.L()
t.r=D.byX.gp(0)
d.c1(u,t)
C.bGg(d,new A.r(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hSP,!0,!1,D.YG,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c1(A.bZ(new A.r(s+q*16,r-6),16,11),C.iS(D.aln,1.8))
u=q<0
C.bGg(d,new A.r(s-q*6,r),0.62,e,D.hSS,!1,u,D.YG,2.2,!1)
C.bGg(d,new A.r(s-q*32,r+4),0.58,e+1,D.hSJ,!1,u,D.YG,2.2,!1)
this.bZj(d,D.eCK,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bZ(new A.r(o,n),8,11)
k=p===1
j=k?D.alj:D.alW
i=new A.ar(B.U,B.S,B.X,B.Y,B.W)
i.r=j.gp(0)
d.c1(l,i)
l=k?D.alj:D.alW
k=new A.ar(B.U,B.S,B.X,B.Y,B.W)
k.r=l.gp(0)
d.O(new A.r(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.U,B.S,B.X,B.Y,B.W)
k.b=B.ae
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o+7.5,n+(-2+m)),new A.r(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.U,B.S,B.X,B.Y,B.W)
k.b=B.ae
k.c=1
k.r=B.as.gp(0)
k.d=B.bG
k.e=B.dP
d.ah(new A.r(o,n+4),new A.r(o,n+8),k)}h=e<f.f
u=A.bZ(D.aas,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.ajY.gp(0)
d.c1(u,t)
u=A.bZ(D.aas.a7(0,new A.r(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.boF.gp(0)
d.c1(u,t)
t=new A.aI(w,B.ak,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bA())
u=A.L()
u.r=D.boS.gp(0)
d.af(t,u)
u=D.aas.a7(0,new A.r(-17,h?-9:-2))
t=A.L()
t.r=B.iu.gp(0)
d.O(u,1.1,t)
v=new A.aI(w,B.ak,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.ck(180,588+w*(h?6:0),178,595))
d.af(v,C.iS(D.ajY,3.5))},
bZj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a7(0,new A.r(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.T()
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.b=B.ae
m.c=2
m.r=D.a_5.gp(0)
m.d=B.bG
m.e=B.dP
d.ah(new A.r(u+o,s),new A.r(u+(o+n*1.5),q),m)}w=A.bZ(k,17,32)
v=$.T()
r=A.L()
r.r=D.GM.gp(0)
d.c1(w,r)
r=A.bZ(k.a7(0,D.eCa),7,26)
w=A.ap(D.GM,B.v,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c1(r,q)
v=new A.aI(v.r,B.ak,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bA())
s=A.L()
s.r=D.GM.gp(0)
d.af(v,s)
s=A.bZ(k.a7(0,new A.r(24,-7+l)),9,12)
v=A.L()
v.r=D.GM.gp(0)
d.c1(s,v)
v=-11+l
d.ah(k.a7(0,new A.r(22,v)),k.a7(0,new A.r(21,-17+l)),C.iS(D.a_5,1.6))
d.ah(k.a7(0,new A.r(26,v)),k.a7(0,new A.r(28,-16+l)),C.iS(D.a_5,1.6))
v=k.a7(0,new A.r(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a7(0,new A.r(26,-3+l)),k.a7(0,new A.r(26,1+l)),C.iS(D.brJ,1.4))
d.ah(k.a7(0,D.eF3),k.a7(0,new A.r(-19,-7+Math.sin(f*7)*2)),C.iS(D.GM,2.4))},
bWx(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bZ(new A.r(225+u*36,574+(t*13+6)),8,11)
$.T()
t=new A.ar(B.U,B.S,B.X,B.Y,B.W)
t.r=D.bxz.gp(0)
a6.c1(u,t)}}u=A.bZ(D.aau.a7(0,B.cy),17,52)
$.T()
t=A.L()
t.r=D.bjd.gp(0)
a6.c1(u,t)
t=A.bZ(D.aau.a7(0,B.cy),12,44)
u=D.bmR.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c1(t,s)
for(r=0;r<3;++r){v=D.dsn[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.U,B.S,B.X,B.Y,B.W)
o.b=B.ae
o.c=7
o.r=D.H_.gp(0)
o.d=B.bG
o.e=B.dP
a6.ah(new A.r(u+t*24,579+s*4),new A.r(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Cp.j(0.6)
n=new A.ar(B.U,B.S,B.X,B.Y,B.W)
n.b=B.ae
n.c=2
n.r=t.gp(0)
n.d=B.bG
n.e=B.dP
a6.ah(new A.r(u+o*24,579+(p*4-2)),new A.r(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.fgp,D.fh_,D.fi9,D.fiu,D.fi7]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.buN,D.br3,D.bwZ][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.T()
f=A.a([],q)
a2=new A.aI(g.r,B.ak,null,null,f)
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
g=new A.ar(B.U,B.S,B.X,B.Y,B.W)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.alU.j((1-a5)*0.9)
$.T()
o=new A.ar(B.U,B.S,B.X,B.Y,B.W)
o.r=p.gp(0)
a6.O(new A.r(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ajz.j(0.1*(1-a5))
$.T()
p=new A.ar(B.U,B.S,B.X,B.Y,B.W)
p.r=q.gp(0)
a6.O(new A.r(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bWz(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bz7.j(0.18*p)
$.T()
n=new A.ar(B.U,B.S,B.X,B.Y,B.W)
n.r=o.gp(0)
d.O(new A.r(r,q),5,n)
n=new A.ar(B.U,B.S,B.X,B.Y,B.W)
n.r=D.bsz.j(0.9*p).gp(0)
d.O(new A.r(r,q),1.4,n)}},
c8A(d,e){switch(d){case 0:return e.b?D.hSD:D.b3r
case 1:return e.b?D.hSR:D.b3p
case 2:return D.b3o
case 3:return D.b3n
case 4:return D.b3q
default:return D.b3s}},
aF6(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
S3(d,e,f,g){var w,v=this,u=D.a7I[e],t=v.c8A(e,g),s=new C.brt(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a7I[e],l=e===0
m=B.i.D(((l?D.aOn:D.aOt).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.aaz
s.as=D.F9
if(l){s.a=o?v.aF6(f,0):0
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
s.as=D.aOG}if(e===2&&g.x!=null&&f<g.y){s.a=v.aF6(f,5)
s.b=0.4
s.as=new A.r(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aF6(f,e*3)
s.b=0.5
s.c=0.4}}C.hMS(d,u.a,u.b*1.2,t,s,f,e,null)},
bJC(d,e,f){var w=new C.bW2(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd5(d){return this.c}}
C.ahb.prototype={
a9(){return"_Stand."+this.b}}
C.af6.prototype={}
C.lN.prototype={}
C.bUN.prototype={
bE6(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aT()
this.c=s},
GE(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bUO())
return r},
asS(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aOQ(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
ao0(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzK(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b_(w,new C.bUP(this))
return B.d.gG(w)}}
C.avL.prototype={}
C.zT.prototype={}
C.amb.prototype={
gCz(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bPz(),A.U(w).k("X<1>")).gJ(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Ne.prototype={
gaqU(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCz(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d6d(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaqU(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lN(B.a.i(s.a),p,B.d.c8(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bcG.prototype={}
C.ab8.prototype={}
C.bk5.prototype={}
C.ah9.prototype={}
C.alu.prototype={
R(){return new C.alv(B.bH,A.a([],x.cC),A.a([],x.e4),null,null)},
gd2(){return this.d}}
C.alv.prototype={
gNw(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGV(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbcU(){var w,v=this,u=v.e
if(u===$){w=v.qd(v.gckZ())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a3()
this.gbcU().fS(0)},
t(){this.gbcU().t()
this.byt()},
fS(d){this.l(new C.bNH(this))},
cl_(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fL(0,v)
if(w.c!=null)w.l(new C.bNC())},
bbc(){var w,v,u,t=this,s=t.r
B.d.a6(s)
w=t.gNw()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bk5(u,(u+0.5)/v,w[t.x].b[u]))},
fL(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.br(w,new C.bNI())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.cbt()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gNw()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.aup(v,0.8,B.d_)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.aup(m.cy,0.8,G.nN)
m.b0q("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.aup(q,0.88,D.lY)
p=m.gNw()[m.x]
n=p.c
if(u===n){m.b0q("The right gourd fell! It was "+p.b[n]+".")
return}}}},
aup(d,e,f){var w,v,u,t=new A.e4()
t.cV(B.i.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ah9(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b0q(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Ra()}},
cbt(){var w=this
if(w.x+1>=w.gNw().length){w.Ra()
return}++w.x
w.bbc()},
Ra(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Ra=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gNw().length
r=C.bJd(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bNA())
w=2
return A.b(C.C3(u.a.d,r),$async$Ra)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.C4(t.d,t.c.a,"catch",u.z),$async$Ra)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bNB())
return A.h(null,v)}})
return A.i($async$Ra,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cfn()
else w=v.ch?v.cfo():A.at(new A.C(B.ew,A.w(A.a([D.aZE,B.O,D.h66,B.R,D.hci,B.eb,C.uK("Play",v.gf2(v),B.d_,B.fQ,D.fL)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tS("Calabash Catch",w,B.fh,u)},
cfo(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hQ:B.Iw
p.push(A.V(u,v?B.aC:B.bX,r,r,r,22))}p.push(B.aX)
v=s.x
u=s.gNw()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aYc,r,r,r))
p.push(B.ba)
v=A.m(14)
p.push(A.p(r,A.c(""+s.z,r,r,r,r,r,r,B.iX,r,r,r),B.f,r,r,new A.o(B.by,r,r,v,r,r,B.m),r,r,r,r,A1.Db,r,r,r))
p=A.A(p,B.l,r,B.e,B.h,0,r,r)
v=A.m(18)
t=A.K(B.d_,B.r,3)
return A.w(A.a([new A.C(D.bH6,p,r),A.p(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fQS,B.K,r,r),B.f,r,r,new A.o(D.r_,r,t,v,r,r,B.m),r,r,r,B.eY,B.bg,r,r,1/0),B.aj,A.E(A.cg(new C.bNG(s)),1)],q),B.l,r,B.e,B.h,0,B.p)},
cfn(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qA,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gNw().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.X1,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.co(A.a([D.bgF,u,t,B.aN,new C.IP(s,r,w.cx,v),B.aN,A.at(C.uK("Back to the games",new C.bNz(w),B.d_,B.km,D.fL),v,v,v)],x.p),v,v,B.ad,v,v,B.ah,!1)}}
C.bfd.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.T(),a3=A.L()
a3.san(A.jR(B.J,new A.r(0,a0),D.d8H,G.aD3,B.w,e))
a4.aE(new A.a5(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.OH.gp(0)
a4.O(new A.r(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aI(a2.r,B.ak,e,e,w)
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
w.r=D.bnP.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aI(a2.r,B.ak,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.ck(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.ck(r+14,t,r+26,w))
a2.E(new A.bA())
w=A.L()
w.r=D.aiz.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.ctf[q]
s=new A.ar(B.U,B.S,B.X,B.Y,B.W)
s.r=D.aiz.gp(0)
s.c=7
s.d=B.bG
a4.ah(new A.r(r,a2),new A.r(r+p*46,w),s)
s=new A.ar(B.U,B.S,B.X,B.Y,B.W)
s.r=D.ahR.gp(0)
a4.O(new A.r(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.boP.gp(0)
a4.aE(new A.a5(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.U,B.S,B.X,B.Y,B.W)
t.r=D.akd.gp(0)
t.c=2
a4.ah(new A.r(w,a1),new A.r(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bZ(new A.r(u,s),12,54)
$.T()
l=new A.ar(B.U,B.S,B.X,B.Y,B.W)
l.r=D.lY.j(0.6).gp(0)
a4.c1(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.T()
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.r=D.aji.gp(0)
a4.O(D.eBy,14,m)
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.r=D.btR.gp(0)
m.c=4
m.d=B.bG
a4.ah(D.eBz,D.eCG,m)
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.san(new A.an4(D.eEO,46,D.dif,B.vP,B.w,e,e,0))
a4.O(B.J,34,m)
m=A.bZ(D.eEU,8,12)
l=new A.ar(B.U,B.S,B.X,B.Y,B.W)
l.r=B.c.j(0.35).gp(0)
a4.c1(m,l)
k=new A.j5(new A.eJ(n.c,e,e,B.cZ,e,e,e,e,e,e,D.fOD),B.K,B.cd,new A.kj(1),e,e,3,e,B.ce,e,B.cL)
k.nE(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bx(A.bZ(B.cN,m.gb4(m)+8,l),B.h4)
l=new A.ar(B.U,B.S,B.X,B.Y,B.W)
l.r=D.r_.gp(0)
a4.aq(j,l)
l=new A.ar(B.U,B.S,B.X,B.Y,B.W)
l.r=D.lY.gp(0)
l.b=B.ae
l.c=1.5
a4.aq(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.r(-m/2,4-l.gb4(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
C.iuQ(a4,new A.r(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.e_,(w+1)/2)
h=A.bZ(new A.r(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aI($.T().r,B.ak,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.ck(h.gbE().a,s+8,w+8,s))
a3.E(new A.bA())
m=A.L()
m.r=D.a_X.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.r=D.Cp.gp(0)
m.c=1.4
a4.ah(new A.r(t,a2),new A.r(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.nN.gp(0)
a4.aE(new A.a5(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bnV.gp(0)
a4.c1(new A.a5(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.O(new A.r(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.h0(e,B.cL,e,e,e,A.cW(e,e,e,e,e,e,e,e,e,A.l(e,e,B.d_.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Ek,e,e),"+"+a2),B.a7,B.cd,e,B.e4,B.ce)
k.eL()
k.a4(a4,new A.r(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.Rm.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aD5(w.c,w.f,v),B.aA),s=A.m(10),r=A.K(B.bE,B.r,1.4)
return new A.a4(u+22,v,A.w(A.a([new A.a4(u,u,t,v),B.cQ,A.p(v,A.c(w.d,v,1,B.a2,v,v,v,D.fGW,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.m),v,v,v,v,B.nm,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
ga0(d){return this.e}}
C.aD5.prototype={
a4(d,e){var w=e.eo(B.J),v=e.gdl(),u=this.c?0.8:0
return O.htK(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aBw.prototype={}
C.awl.prototype={
R(){return new C.awm(A.S(x.S,x.cq),null,null)},
gd2(){return this.d}}
C.awm.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hSE(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaHa(){var w=this.z
return w===$?this.z=this.Yd(0):w},
gj3(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c3(w,-1,!1,x.S)}return v},
Yd(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aBw(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aBw(v[t],u[t],-1))
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
u=u.goM()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e0$.a.a6(0)
v.qM()}this.byW()},
cVT(d,e){var w,v,u,t,s,r=this
if(d>=r.gj3().length||r.gj3()[d]!==-1||B.d.q(r.gj3(),e))return
w=r.gaHa()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.ctL(r,e,w,v))
A.cC(B.m4,new C.ctM(r))
return}++r.r
u=A.br(null,B.hy,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.ctN(r,d,e,w,v))
u.cs(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cD(n,0,new C.ctO())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.ctP(t,r))
w=5
return A.b(C.C3(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.C4(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.l(new C.ctQ())
w=1
break
case 4:for(o=t.as,n=new A.ds(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eR$
p.b=!1
B.d.a6(p.a)
p=p.goM()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e0$.a.a6(0)
q.qM()}o.a6(0)
t.l(new C.ctR(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qA,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.X1,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tS(q,A.co(A.a([D.ahp,w,v,B.aN,new C.IP(u,t,r.ch,p),B.aN,A.at(C.uK("Back to the games",new C.ctH(d),B.d_,B.km,D.fL),p,p,p)],x.p),p,p,B.ad,p,p,B.ah,!1),B.fh,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tS(q,new A.C(B.tF,A.w(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aY7,B.K,p,p),A.E(A.cg(new C.ctI(r,s)),1)],x.p),B.l,p,B.e,B.h,0,B.p),p),B.fh,p)}}
C.beF.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cU7(),A.U(b2).k("X<1>")).gJ(0),b4=a9.b,b5=b4.a7(0,B.KA)
$.T()
w=A.L()
w.r=D.lZ.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a7(0,D.eBl)
u=A.L()
u.r=B.r0.j(0.5).gp(0)
u.c=10
u.d=B.bG
b6.ah(new A.r(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.ed.aA(0,B.i.D(b2[p],0,1))
l=$.T().r
k=A.a([],s)
j=new A.aI(l,B.ak,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ac()
o=new A.ck((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.aj(n)
j.ac()
if(m<1)for(o=new A.aI(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),i=new A.v9(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jY(b1));--h
g=new A.C0(i,h)
f=0
for(;;){i.jR()
e=n[h].b
e===$&&A.d()
if(!(f<e.a.length()))break
i.jR()
e=n[h].b
e===$&&A.d()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.T()
a1=new A.ar(B.U,B.S,B.X,B.Y,B.W)
a1.r=B.aT.gp(0)
a1.b=B.ae
a1.c=3
b6.af(new A.aI(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aI(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),k=new A.v9(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jY(b1));--a0
k.jR()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.T()
a4=new A.ar(B.U,B.S,B.X,B.Y,B.W)
a4.r=D.He.gp(0)
a4.b=B.ae
a4.c=h
a4.d=B.bG
b6.af(new A.aI(l,a2,b0,new A.b7([new A.C0(k,a0),0,a1*m,!0]),a3),a4)
k.jR()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jR()
a5=n[a0].WF(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bZ(new A.r(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.U,B.S,B.X,B.Y,B.W)
a3.r=B.bf.gp(0)
b6.c1(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.j5(D.fGp,B.a7,B.cd,new A.kj(1),b0,b0,b0,b0,B.ce,b0,B.cL)
a8.eL()
a8.a4(b6,new A.r(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.aAh.prototype={
R(){return new C.aAi(A.aR(x.S))},
gd2(){return this.d}}
C.aAi.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hTy(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a3()
this.bbl()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a2()},
bbl(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.d4(B.tz,new C.cII(this))},
bsu(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.l(new C.cIQ(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cIR(v,d))
A.cC(B.j5,new C.cIS(v))}},
d0r(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.l(new C.cIT(w))},
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
t.l(new C.cIU(t,s))
w=5
return A.b(C.C3(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.C4(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cIV())
w=1
break
case 4:t.l(new C.cIW(t))
t.bbl()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.qA,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.X1,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tS(a1,A.co(A.a([D.bgQ,w,v,B.aN,new C.IP(u,t,a0.ax,a2),B.aN,A.at(C.uK("Back to the games",new C.cIK(a3),B.d_,B.km,D.fL),a2,a2,a2)],x.p),a2,a2,B.ad,a2,a2,B.ah,!1),B.fh,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.LW,B.K,a2,a2),B.R,A.at(A.l1(new C.cIL(a0,r),a2,B.aZ,B.hy,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ax(B.d_,2,B.r,-1)
k=o+1
w.push(new A.rn(new A.bq(0,1,u),new C.cIM(),A.p(a2,new A.c0(B.aK,B.e,B.h,B.l,a2,B.p,a2,0,A.a([new A.qV(A.c(""+k,a2,a2,a2,a2,a2,a2,B.ou,a2,a2,a2),D.lY,a2,12,a2),B.ar,new A.bu(1,B.b8,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fTv,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.r_,a2,new A.bE(l,l,l,l),new A.bc(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cB,B.bg,a2,a2,a2),B.aZ,B.j5,a2,new A.bg("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bJ(!1,D.hkj,a2,a2,!0,a2,a2,a2,a0.gd0q(),a2,a2),a2,a2,a2))
w.push(B.O)
if(a0.as){u=D.lZ.j(0.2)
q=A.m(16)
p=A.K(D.lZ,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fS,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.w(A.a([m,B.R,C.uK(v,a0.gqw(a0),B.d_,B.jI,D.fL)],t),B.l,a2,B.e,B.h,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bD,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dz:B.d_.j(0.2)
g=new A.aP(16,16)
l=new A.ax(n.q(0,o)?B.fs:B.d_,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bX:B.c
d=n.q(0,o)?B.y7:a2
t.push(new A.rn(new A.bq(0,i,u),new C.cIN(),A.aA(a2,A.p(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.agx,new A.o(h,a2,new A.bE(l,l,l,l),new A.bc(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jG,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cIO(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.aZ,B.mw,a2,new A.bg("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.c_(B.fX,t,B.br,a2,10,10))}return new C.tS(a1,A.co(w,a2,a2,B.aoe,a2,a2,B.ah,!1),B.fh,a2)}}
C.aBg.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aII.prototype={
b0(){this.b8()
this.b5()
this.dT()},
t(){var w=this,v=w.bc$
if(v!=null)v.a8(0,w.gdO())
w.bc$=null
w.a2()}}
C.agY.prototype={
asq(d){},
asW(){var w=this,v=w.qd(new C.fgI(w))
v.fS(0)
w.ME$!==$&&A.aT()
w.ME$=v}}
C.aMA.prototype={
gboQ(d){var w=this.c
return B.a.av(w,0,Math.min(this.d,w.length))},
WN(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.d4(E.a1B,new C.fr4(w))},
buS(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.ant.prototype={
R(){return new C.anu(new C.anD(),A.a([],x.t),new A.eN(0,$.ay()),$,0,null,null)},
gd2(){return this.d}}
C.anu.prototype={
gNu(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGV(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nw(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqD(){var w=this.r
return w===$?this.r=new C.aMA(new C.bVz(this)):w},
garg(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gNu()[v].c)u.push(1)
return u.length},
gbo8(){var w=this.ghi(0)
return w.gzK()==null?"Elder":B.a.i(w.gzK().b)},
Z(){this.a3()
this.asW()},
t(){var w,v=this
v.gqD().t()
v.f.t()
w=v.ME$
w===$&&A.d()
w.t()
w=v.qk$
w.V$=$.ay()
w.W$=0
v.byB()},
cPZ(){var w=this
w.l(new C.bVw(w))
w.gqD().WN(w.gNu()[w.x].a)},
LQ(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqD()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qk$.a
v.ax=u
v.ay=u+1
v.l(new C.bVu())
A.cC(B.hy,new C.bVv(v))},
bsq(){var w=this.garg(0)/this.gNu().length*100
if(w>=90)return D.fdb
if(w>=75)return D.fb3
if(w>=60)return D.f1g
if(w>=45)return D.f4R
return D.eWv},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cy2()
w=A.bT(0,new A.ea(A.b4(m,m,m,new C.bvB(n,n.qk$),B.aA),m),0,0,0)
if(!n.Q){v=D.r_.j(0.96)
u=A.m(20)
t=A.K(B.d_,B.r,3)
u=A.p(m,A.w(A.a([A.c("Elder "+n.gbo8()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aZ2,B.K,m,m),B.R,C.uK("Start the test",n.gCp(),B.d_,B.jo,D.fL)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.m),m,m,m,m,B.bD,m,m,m)
v=u}else{v=n.x
u=n.gNu()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aZ4,m,m,m)
if(n.Q){t=n.gqD()
t=t.d<t.c.length}else t=!1
if(t)u=D.fyT
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ax(D.Cp,4,B.r,-1)
s.push(A.aA(m,A.p(m,A.c(q[r],m,m,m,m,m,m,D.fKi,B.K,m,m),B.f,m,D.agx,new A.o(D.bjK,m,new A.bE(o,o,o,o),new A.bc(p,p,p,p),m,m,B.m),m,m,m,m,B.Pt,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bVx(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.c_(B.fX,s,B.br,new A.bg("o"+t,x.W),8,8)}u=A.w(A.a([v,B.aj,A.oX(u,B.nj,A.q9(),B.aZ,B.aZ,A.M4())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.tS("Village School",new A.am(B.a0,m,B.ac,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fh,m)},
cy2(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bsq(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gNu()[v].c)g.push(v)
u=A.m(22)
t=A.K(B.d_,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fOW,B.K,i,i)
r=A.c("Signed by Elder "+j.gbo8(),i,i,i,i,i,i,D.fNw,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fSR,i,i,i),D.eO3],q)
o=A.c(h.b,i,i,i,i,i,i,D.fUQ,i,i,i)
n=j.garg(0)
m=j.gNu()
u=A.p(i,A.w(A.a([D.h5j,B.at,s,r,B.R,new A.am(B.z,i,B.ac,B.t,p,i),o,B.aj,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.adv,i,i,i),B.O,D.avj],q),B.l,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(D.r_,i,t,u,i,i,B.m),i,i,i,i,B.f6,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.IP(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aN,D.hln,B.O],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ax(B.by,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.w(A.a([A.c(p.a,i,i,i,i,i,i,B.hi,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fQa,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fSs,i,i,i)],q),B.B,i,B.e,B.h,0,B.p),B.f,i,i,new A.o(B.dz,i,new A.bE(k,k,k,k),new A.bc(r,r,r,r),i,i,B.m),i,i,i,B.cB,B.bg,i,i,i))}B.d.u(s,u)}s.push(B.aB)
s.push(A.at(C.uK("Back to the games",new C.bVq(j),B.d_,B.km,D.fL),i,i,i))
return new C.tS("Village School",A.co(s,i,i,B.bR,i,i,B.ah,!1),B.fh,i)}}
C.bvB.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qk$.a
a0.CL(e.f.Nf(a1))
w=C.hoM(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bV(0,w.c)
if(e.Q){u=e.gqD()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d2v[s]-6
$.T()
r=new A.ar(B.U,B.S,B.X,B.Y,B.W)
r.r=D.H_.gp(0)
a0.aE(new A.a5(u,340,u+12,450),r)}u=A.bx(D.abs.ct(10),B.il)
$.T()
r=A.L()
r.r=D.Cp.gp(0)
a0.aq(u,r)
r=A.bx(D.abs,B.iD)
u=A.L()
u.san(A.jR(new A.r(30,96),new A.r(420,346),D.do6,f,B.w,f))
a0.aq(r,u)
q=new A.e4()
q.cV(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bZ(new A.r(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.U,B.S,B.X,B.Y,B.W)
r.r=B.c.j(0.025).gp(0)
a0.c1(o,r)}u=A.L()
u.r=I.al3.gp(0)
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
if(e.Q){u=e.gqD().gboQ(0)
m=A.h0(f,B.cL,f,7,f,A.cW(f,f,f,f,f,f,f,f,f,D.fXb,u+(t?"|":"")),B.a7,B.cd,f,B.e4,B.ce)
m.nE(346)
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
u.r=D.bA1.gp(0)
a0.aq(r,u)}}else{m=A.h0(f,B.cL,f,f,f,D.fGF,B.K,B.cd,f,B.e4,B.ce)
m.nE(340)
m.a4(a0,new A.r(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqD().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.U,B.S,B.X,B.Y,B.W)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.r(70+o+k*6,166+l*70),1.6,j)}u=e.ghi(0).gzK()
i=(u==null?f:u.c)===D.oY?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fgJ(d,a0,i,t,h,D.eCv)),new A.y(520,new C.fgK(a0,d,t)),new A.y(575,new C.fgL(a0,d,t)),new A.y(585,new C.fgM(this,a0,d,t)),new A.y(615,new C.fgN(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.fgO())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cfp(d,e){var w,v,u,t,s,r,q,p=$.T(),o=A.a([],x.v),n=new A.aI(p.r,B.ak,null,null,o)
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
C.anr.prototype={
R(){return new C.ans(new C.anD(),A.S(x.S,x.i),new A.eN(0,$.ay()),$,0,null,null)},
gd2(){return this.d}}
C.ans.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hSt(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj3(){var w=this.z
return w===$?this.z=this.Gc(0):w},
gaNr(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Gc(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.c8(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Gc(0):r).length);++v}s.Q=w
r=w}return r},
Gc(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e6(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e4()
u.cV(this.a.e+d*7)
B.d.dY(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eH(u,new C.bVc())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a3()
this.asW()},
t(){var w,v=this
v.e.t()
w=v.ME$
w===$&&A.d()
w.t()
w=v.qk$
w.V$=$.ay()
w.W$=0
v.byA()},
asq(d){var w,v,u,t,s,r=this,q=r.gj3().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.c8(u===$?r.z=r.Gc(0):u,v)
s=r.gaNr()
s[v]=s[v]+(450*(t+0.5)/q-r.gaNr()[v])*Math.min(1,w)}},
d5T(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj3().length)return
w=v.y
if(w===-1){v.l(new C.bVn(v,d))
return}if(w===d){v.l(new C.bVo(v))
return}v.l(new C.bVp(v,B.d.c8(v.gj3(),v.y),d,B.d.c8(v.gj3(),d)))},
cQH(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Gc(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Gc(0):u)[v]]===v);++v}s.l(new C.bVi(s,B.d.cw(w,new C.bVj())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bVk(t,s))
w=5
return A.b(C.C3(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.C4(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bVl())
w=1
break
case 4:t.l(new C.bVm(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.qA,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tS("Line Up",A.co(A.a([D.ahp,w,B.aN,new C.IP(v,u,l.ch,k),B.aN,A.at(C.uK("Back to the games",new C.bVe(d),B.d_,B.km,D.fL),k,k,k)],x.p),k,k,B.ad,k,k,B.ah,!1),B.fh,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bVf(l))
u=A.bT(0,A.cg(new C.bVg(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aZ4,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.w(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fPo,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fRH,B.K,k,k)],q),B.l,k,B.e,B.h,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.m(16)
n=l.ax
m=A.K(n?D.lZ:G.nN,B.r,2)
r.push(A.p(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bVh(l),x.cM).aL(0,", then ")+".",k,k,k,k,k,k,D.fTU,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.m),k,k,k,B.d2,B.bg,k,k,1/0))}if(!l.at)r.push(C.uK("That is my line!",l.gcQG(l),B.d_,B.h1,D.fL))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uK(w,l.gqw(l),B.d_,B.jI,D.fL))}return new C.tS("Line Up",new A.am(B.a0,k,B.ac,B.t,A.a([u,s,A.ao(12,A.w(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.fh,k)}}
C.blX.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qk$.a
c7.CL(c5.e.Nf(c8))
w=C.hoM(c8)
v=c7.c
J.bs(v.save())
v.translate(w.a,w.b)
c7.bV(0,w.c)
u=c5.gj3().length
t=$.T().r
s=x.v
r=new A.aI(t,B.ak,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.ck(225,500,440,470))
q=A.L()
q.r=D.a_X.gp(0)
q.b=B.ae
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aI(t,B.ak,c4,c4,l)
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
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.r=[B.d_,G.nN,D.lZ,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b3d(c7,"OLDEST",D.eDt,B.d_)
this.b3d(c7,"YOUNGEST",D.eCW,B.bf)
t=A.bx(D.fq3,B.h4)
s=A.L()
s.r=D.H_.gp(0)
c7.aq(t,s)
s=A.bx(D.fq2,B.iD)
t=A.L()
t.r=D.Cp.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.dwg())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.c8(a1===$?c5.z=c5.Gc(0):a1,f)
o=c5.gaNr()[f]
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
if(a3){$.T()
a9=new A.ar(B.U,B.S,B.X,B.Y,B.W)
a9.r=B.d_.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.r(o,520),54,a9)}a9=D.dsb[B.o.F(b0,6)]
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
C.Tj(c7,new A.r(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.KD,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.j5(new A.eJ(a8,c4,c4,B.cZ,c4,c4,c4,c4,c4,c4,D.fN0),B.a7,B.cd,new A.kj(1),"\u2026",c4,1,c4,B.ce,c4,B.cL)
c1.nE(q)
c2=A.bx(A.bZ(new A.r(o,650),24,c1.b.c+16),B.h4)
$.T()
a8=new A.ar(B.U,B.S,B.X,B.Y,B.W)
if(a6)a9=B.iM
else a9=a7?B.ts:D.r_
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.U,B.S,B.X,B.Y,B.W)
if(a6)a9=D.lZ
else a9=a7?G.nN:D.lY
a8.r=a9.gp(0)
a8.b=B.ae
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.r(o-a9/2,650-a8.gb4(a8)/2))
c3=new A.j5(new A.eJ(""+(a2+1),c4,c4,B.cZ,c4,c4,c4,c4,c4,c4,D.fNk),B.a7,B.cd,new A.kj(1),c4,c4,c4,c4,B.ce,c4,B.cL)
c3.eL()
c3.a4(c7,new A.r(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bZ(B.J,4,8)
$.T()
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.r=[B.d_,G.nN,D.lZ,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b3d(d,e,f,g){var w,v,u=null,t=A.h0(u,B.cL,u,u,u,A.cW(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Ek,u,u),e),B.a7,B.cd,u,B.e4,B.ce)
t.eL()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aI(0,new A.r(v/2,w.gb4(w)/2)))},
aD(d){return!1}}
C.a34.prototype={
a9(){return"_Trip."+this.b}}
C.ann.prototype={
R(){return new C.ano(D.YN,new A.eN(0,$.ay()),$,0,null,null)},
gd2(){return this.d}}
C.ano.prototype={
gDX(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bGV(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghi(d){var w,v=this,u=v.e
if(u===$){w=C.Nw(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqD(){var w=this.f
return w===$?this.f=new C.aMA(new C.bUZ(this)):w},
gUL(){var w=this.ghi(0)
return w.gzK()==null?"Grandma":B.a.i(w.gzK().b)},
Z(){this.a3()
this.asW()},
t(){var w,v=this
v.gqD().t()
w=v.ME$
w===$&&A.d()
w.t()
w=v.qk$
w.V$=$.ay()
w.W$=0
v.byz()},
asq(d){var w,v,u,t=this
if(t.r!==D.aff)return
w=B.dQ.aA(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDX()
if(v+1>=u.length){t.r=D.afg
t.XJ()}else{++t.w
t.ay=!1
t.r=D.YO
t.gqD().WN(u[t.w].a)}if(t.c!=null)t.l(new C.bUX())}},
XJ(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$XJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqD().WN("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDX().length
r=C.bJd(t,u.z,s)
u.as=r
w=2
return A.b(C.C3(u.a.d,r),$async$XJ)
case 2:u.at=e
s=u.a
w=3
return A.b(C.C4(s.d,s.c.a,"journey",u.x*10),$async$XJ)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bUR())
return A.h(null,v)}})
return A.i($async$XJ,v)},
btK(){this.aWc()},
aWc(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.aff
if(w.c!=null)w.l(new C.bUS())},
LQ(d){var w,v,u,t,s=this
if(s.r!==D.YO)return
w=s.gDX()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bUW(s,d,v))
u=s.gqD()
t=s.w
u.WN(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cVS(){if(this.r!==D.BY)return
this.aWc()},
B(d){var w,v,u,t=this,s=null,r=A.bT(0,new A.ea(A.b4(s,s,s,new C.blm(t,t.qk$),B.aA),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDX().length;++w){v=t.w
if(w<v||t.r===D.afg)v=B.d_
else v=w===v?B.c:B.aT
u=new A.aP(4,4)
p.push(new A.bu(1,B.b8,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,B.xg,s,s,s,s),s))}p.push(B.b7)
p.push(D.h7_)
return new C.tS("Safari Journey",new A.am(B.a0,s,B.ac,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.h,0,s,s),s,s,12,12,2,s),A.ao(10,t.cpu(),s,s,10,10,s,s)],q),s),B.fh,s)},
cpu(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bUV(o),l=D.r_.j(0.96),k=A.m(22),j=A.K(B.d_,B.r,3)
switch(o.r.a){case 0:w=A.w(A.a([A.c("A long drive to the village of Elder "+o.gUL()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aZ2,B.K,n,n),B.R,C.uK("Start the journey",o.gbtJ(),B.d_,D.bUR,D.fL)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bgq
break
case 1:w=o.w
v=o.gDX()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ax(D.lY,2.5,B.r,-1)
t.push(A.aA(n,A.p(n,A.c(r[s],n,n,n,n,n,n,D.aYm,B.K,n,n),B.f,n,D.agE,new A.o(D.ame,n,new A.bE(p,p,p,p),new A.bc(q,q,q,q),n,n,B.m),n,n,n,n,B.x9,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bUT(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.w(A.a([w,B.O,A.c_(B.bI,t,B.br,n,8,8)],u),B.B,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDX().length?"Drive home":"Drive on"
v=A.w(A.a([w,B.O,new A.bL(B.a9,n,n,C.uK(v,o.gcVR(),B.d_,B.jI,D.fL),n)],x.p),B.B,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gUL()),B.O,A.c(""+o.x+" of "+o.gDX().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aYE,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aSG(v)
u=C.aSG(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.adv,n,n,n))}w.push(B.O)
w.push(A.at(C.uK("Back to the games",new C.bUU(o),B.d_,B.km,D.fL),n,n,n))
w=A.w(w,B.B,n,B.e,B.P,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aFP,n,B.m),n,n,n,n,B.bg,n,n,n)}}
C.blm.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qk$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDX(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.aff,d2=c7*0.5
c8=A.ap(D.blg,D.bwe,d0)
c8.toString
w=A.ap(D.a_7,G.ajP,d0)
w.toString
v=A.ap(B.uZ,D.buy,d0)
v.toString
$.T()
u=A.L()
t=x.O
u.san(A.jR(B.J,new A.r(0,d2),A.a([c8,w,v],t),G.a6a,B.w,c3))
d3.aE(new A.a5(0,0,0+c6,0+c7),u)
s=new A.r(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.ww(s,60,A.a([D.buX,B.L],t),c3,B.w,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.a_k.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dIL[o]
$.T()
u=new A.ar(B.U,B.S,B.X,B.Y,B.W)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.r(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.T()
j=A.a([],m)
i=new A.aI(k.r,B.ak,c3,c3,j)
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
k=new A.ar(B.U,B.S,B.X,B.Y,B.W)
k.r=A.ap(l===0?D.bjN:D.bzp,D.boY,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cfq(d3,new A.r(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.T()
w=A.L()
v=A.ap(D.aln,D.He,d0)
v.toString
w.san(A.jR(new A.r(0,d2),new A.r(0,c7),A.a([v,D.buZ],t),c3,B.w,c3))
d3.aE(new A.a5(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.boa.gp(0)
d3.aE(new A.a5(0,a0,c6,a1),w)
w=A.L()
w.r=D.bz0.gp(0)
d3.aE(new A.a5(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.U,B.S,B.X,B.Y,B.W)
u.r=I.NU.gp(0)
d3.aE(new A.a5(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.T()
b2=new A.ar(B.U,B.S,B.X,B.Y,B.W)
b2.r=D.bjr.gp(0)
d3.aE(new A.a5(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aI(b1.r,B.ak,c3,c3,b2)
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
b0=new A.ar(B.U,B.S,B.X,B.Y,B.W)
b0.r=D.bx7.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.U,B.S,B.X,B.Y,B.W)
b1.r=D.fL.gp(0)
d3.aE(new A.a5(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.U,B.S,B.X,B.Y,B.W)
b0.r=D.H_.gp(0)
d3.aE(new A.a5(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a5(b0,a4,b0+60,a5),B.jN)
b0=new A.ar(B.U,B.S,B.X,B.Y,B.W)
b0.r=D.bAx.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.U,B.S,B.X,B.Y,B.W)
b0.r=D.Cp.gp(0)
b0.b=B.ae
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.j5(new A.eJ(b6,c3,c3,B.cZ,c3,c3,c3,c3,c3,c3,D.fLo),B.a7,B.cd,new A.kj(1),c3,c3,c3,c3,B.ce,c3,B.cL)
b7.eL()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.r(b4-b1/2,a2-b0.gb4(b0)/2))
if(a7)b8=c4.r===D.afg
else if(r===c4.w){b0=c4.r
b0=b0===D.YO||b0===D.BY
b8=b0}else b8=!1
if(a7){b0=c4.ghi(0).gzK()
b9=(b0==null?c3:b0.c)===D.oY?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqD()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.BY
b0=c0?C.hOm(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.YO?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.r(40,-110+Math.sin(g)*10)
else a7=c0?new A.r(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Tj(d3,new A.r(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.r(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bL_(d3,new A.r(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.T()
t=new A.ar(B.U,B.S,B.X,B.Y,B.W)
t.r=D.byu.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.YN)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.T()
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.r(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.BY&&c4.ax){b7=A.h0(c3,B.cL,c3,c3,c3,A.cW(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.d_,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A7.Jz,c3,c3),"BEEP BEEP!"),B.a7,B.cd,c3,B.e4,B.ce)
b7.eL()
b7.a4(d3,new A.r(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cfq(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.bus,D.bnt,g)
o.toString
if(f){w=new A.aI($.T().r,B.ak,null,null,A.a([],x.v))
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
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d6I[r]
p=new A.ar(B.U,B.S,B.X,B.Y,B.W)
p.r=D.a0u.gp(0)
p.c=4
p.d=B.bG
d.ah(new A.r(w,t),new A.r(v+q*24,s),p)
p=new A.ar(B.U,B.S,B.X,B.Y,B.W)
p.r=o.gp(0)
d.O(new A.r(v+q*26,u),10,p)}}else{w=e.a7(0,D.eFu)
$.T()
v=A.L()
v.r=D.bjt.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bZ(e.a7(0,D.eFv),16,60)
w=A.L()
w.r=o.gp(0)
d.c1(v,w)}},
bL_(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.YN?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.ju(0,a0)
for(w=0;w<2;++w){v=D.dAr[w]
u=d.ay&&d.r!==D.YN&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.T()
s=new A.ar(B.U,B.S,B.X,B.Y,B.W)
s.r=D.bzg.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.U,B.S,B.X,B.Y,B.W)
s.r=D.bra.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.U,B.S,B.X,B.Y,B.W)
q.r=B.bl.gp(0)
q.c=2
a2.ah(B.J,new A.r(s*9,t*9),q)}a1.restore()}p=A.rb(D.fqq,B.h4,B.h4,B.i8,B.hT)
$.T()
t=A.L()
t.san(A.jR(D.eBB,B.aan,D.dpv,G.a6a,B.w,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.U,B.S,B.X,B.Y,B.W)
s.r=D.dj1[B.o.F(o,4)].gp(0)
a2.aE(new A.a5(t,-26,t+10,-19),s)}n=d.r===D.BY&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a5(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.nf(A.bx(l,B.pl)),$.mT(),!0)
k=new A.ar(B.U,B.S,B.X,B.Y,B.W)
k.r=D.a_7.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.BY?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Tj(a2,new A.r(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aOx,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.pl)
i=new A.ar(B.U,B.S,B.X,B.Y,B.W)
i.r=D.amg.gp(0)
i.b=B.ae
i.c=2
a2.aq(j,i)}d=A.bx(D.W7,B.pl)
t=A.L()
t.r=D.a_7.gp(0)
a2.aq(d,t)
J.bs(a1.save())
a1.clipRRect(A.nf(A.bx(D.W7,B.pl)),$.mT(),!0)
C.Tj(a2,new A.r(D.W7.gbE().a,-10),0,0,0.7,-0.1,f,f,D.aOx,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.W7,B.pl)
d=A.L()
d.r=D.amg.gp(0)
d.b=B.ae
d.c=2
a2.aq(t,d)
d=A.L()
d.r=Ao.CO.gp(0)
a2.O(D.eDJ,4,d)
d=A.L()
d.r=D.H_.gp(0)
a2.aE(D.frz,d)
for(w=0;w<3;++w){v=D.dAt[w]
d=A.bx(new A.a5(v,-96,v+28,-79),B.jN)
t=new A.ar(B.U,B.S,B.X,B.Y,B.W)
t.r=D.He.gp(0)
a2.aq(d,t)}a1.restore()},
aD(d){return!1}}
C.aD8.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.biT.prototype={}
C.aDa.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.biU.prototype={}
C.aDb.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.biV.prototype={}
C.a7z.prototype={
B(d){var w=null
return new A.a4(1/0,this.c,A.b4(w,w,w,new C.blt(w),B.aA),w)}}
C.blt.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dyi[B.o.F(n,6)]
k=$.T()
j=new A.ar(B.U,B.S,B.X,B.Y,B.W)
j.r=l.gp(0)
d.aE(new A.a5(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aI(k.r,B.ak,null,null,j)
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
k=new A.ar(B.U,B.S,B.X,B.Y,B.W)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tS.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aH(w,w,w,w,B.Rr,w,w,w,new C.bUQ(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fIz,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c6(w,D.ZS,A.p(w,A.bo(!0,A.w(A.a([D.c9W,new A.C(D.bLH,A.A(u,B.l,w,B.e,B.h,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bbG,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IP.prototype={
B(d){var w=null,v=this.d,u=C.aSG(v),t=C.ixy(v),s=B.c.j(0.08),r=A.m(18),q=A.K(B.d_.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fL9,w,w,w)],x.p)
if(this.e)p.push(D.eHW)
p.push(B.aj)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.hi,w,w,w))
if(t!=null)p.push(new A.C(B.rg,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.FE,w,w,w),w))
return A.p(w,A.w(p,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.m),w,w,w,w,B.bD,w,w,w)}}
C.X4.prototype={
R(){return new C.boh(A.S(x.N,x.S),B.o.F(Date.now(),1e5))},
d1S(d){return this.f.$1(d)},
ge9(){return this.d}}
C.boh.prototype={
gTL(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a3()
this.Qj()},
Qj(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Qj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bVB(u.a.d),$async$Qj)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dns[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bVA(p,(o===$?u.d=q.c:o).a,r),$async$Qj)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e76(u,n))
return A.h(null,v)}})
return A.i($async$Qj,v)},
uL(d){return this.csD(d)},
csD(d){var w=0,v=A.j(x.H),u=this,t
var $async$uL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a8(t,!1).ca(A.e7(new C.e77(d),!1,null,x.H)),$async$uL)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Qj()
return A.h(null,v)}})
return A.i($async$uL,v)},
gb8H(){var w,v,u,t=C.Nw(this.gTL()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a3E(d){return this.cA_(d)},
cA_(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a3E=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d1S(r),$async$a3E)
case 2:if(u.c!=null)u.l(new C.e78(u,r))
return A.h(null,v)}})
return A.i($async$a3E,v)},
PC(d){return this.bTS(d)},
bTS(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$PC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hra(t.gTL())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Ne("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a8(s,!1).ca(A.e7(new C.e74(q),!1,null,r)),$async$PC)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bl(j,new C.e75(p))
o=s.length
B.d.ce(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a3E(A.cU(s,0,A.dw(2,"count",x.S),r).dd(0)),$async$PC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$PC,v)},
YF(d,e){return this.bRr(0,e)},
bRr(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$YF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e73(e),o,null,!0,!0,x.y),$async$YF)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hra(u.gTL()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a3E(o),$async$YF)
case 5:case 3:return A.h(null,v)}})
return A.i($async$YF,v)},
abq(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e70(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.aa(0,B.H,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.WX,p,p,p),B.aX],s)
q=A.m(10)
r.push(A.p(p,A.c(i,p,p,p,p,p,p,D.fJu,p,p,p),B.f,p,p,new A.o(B.i0,p,p,q,p,p,B.m),p,p,p,p,B.zG,p,p,p))
return A.aA(p,A.d2(A.p(p,A.w(A.a([A.A(r,B.l,p,B.e,B.h,0,p,p),B.aX,A.c(e,p,2,p,p,p,p,D.fRA,p,p,p),B.cQ,A.c(f,p,3,B.a2,p,p,p,D.fKg,p,p,p)],s),B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a6(B.aw,B.aD,B.w,w,p,p),B.m),p,p,p,p,B.x7,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Y8(d,e,f,g,h,i){return this.abq(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Nw(s.gTL()),p=s.gTL(),o=C.aSG(s.e),n=C.hra(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e79(s),k=C.hSt(p,1).length,j=C.hSE(p,1).length,i=C.hTy(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.K(B.d_.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.adh,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fP_,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.A(A.a([e,B.ba,A.E(A.w(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.Xe,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),1),A.w(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qA,r,r,r),D.hdj],a1),B.l,r,B.e,B.h,0,B.p)],a1),B.l,r,B.e,B.h,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.m),r,r,r,r,B.bD,r,r,r)
f=s.Y8("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.az,new C.e7a(s,p),l.$1("kahoot"))
h=s.Y8("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lY,new C.e7b(s,p),l.$1("fire"))
a0=s.Y8("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.vc,new C.e7c(s,p),l.$1("catch"))
j=j!==0?new C.e7f(s,p):r
j=s.abq("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hY,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e7g(s,p):r
i=s.abq("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lX,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Y8("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.ev,new C.e7h(s,p),l.$1("journey"))
k=k!==0?new C.e7i(s,p):r
k=A.a([g,B.aN,D.hho,B.O,A.lf(0.98,A.a([f,h,a0,j,i,e,s.abq("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.et,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Y8("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.de,new C.e7j(s,p),l.$1("school"))],a1),2,12,12,r,B.e8,!0),B.df,A.A(A.a([D.bNw,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fJz,r,r,r)],a1),B.l,r,B.e,B.h,0,r,r),B.O],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fYM,B.ba,new A.bu(1,B.b8,A.w(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hj,r,r,r),A.c(""+v.gaqU(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.FE,r,r,r)],a1),B.B,r,B.e,B.h,0,B.p),r)],a1)
if(v.gaqU(0).length>=2){f=D.lZ.j(0.2)
t=new A.ax(D.lZ,1,B.r,-1)
g.push(A.aA(r,A.p(r,A.V(B.fQ,D.lZ,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e7k(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.d_.j(0.2)
t=new A.ax(B.d_,1,B.r,-1)
f=A.aA(r,A.p(r,A.V(B.jo,B.d_,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e7l(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fs.j(0.2)
t=new A.ax(B.fs,1,B.r,-1)
B.d.u(g,A.a([B.b7,f,B.b7,A.aA(r,A.p(r,A.V(B.eq,B.fs,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e7m(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.c0(B.aK,B.e,B.h,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bE(u,u,u,u),new A.bc(h,h,h,h),r,r,B.m),r,r,r,B.d2,B.bg,r,r,r))}if(s.a.e){j=m?new C.e7d(s):new C.e7e(a2)
i=A.m(18)
h=A.K(m?B.d_:B.aT,B.r,2)
g=m?B.d_.j(0.12):B.dz
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.p(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.d_:B.aF,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.m),r,r,r,r,B.Pi,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hik)
k.push(B.aB)
k.push(D.avj)
return new C.tS("Family Games \xb7 "+p.b,A.co(k,r,r,D.bHI,r,r,B.ah,!1),B.fh,r)}}
C.a0V.prototype={
a9(){return"_KPhase."+this.b}}
C.anp.prototype={
R(){return new C.anq(D.b3i)},
gd2(){return this.e}}
C.anq.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a2()},
fS(d){var w,v=this
v.l(new C.bVa(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.d4(B.fr,new C.bVb(v))},
aRE(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.l(new C.bV0(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.d4(B.fq,new C.bV1(w))},
LQ(d){var w
if(this.d!==D.aeL)return
w=this.at
if(w!=null)w.a1(0)
this.b8D(d)},
b8D(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.S(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bV6(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cC(B.tz,v.giD(v))},
cPi(d){var w=this
if(w.d!==D.Yj)return
if(w.e+1>=w.a.w.length)w.Zs()
else{w.l(new C.bV7(w))
w.aRE()}},
Zs(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Zs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bJd(p,u.w,t)
u.l(new C.bV3(u,s))
w=2
return A.b(C.C3(u.a.e,s),$async$Zs)
case 2:r=e
t=u.a
w=3
return A.b(C.C4(t.e,t.f,t.r,u.f),$async$Zs)
case 3:q=e
if(u.c!=null)u.l(new C.bV4(u,r,q))
return A.h(null,v)}})
return A.i($async$Zs,v)},
cQ7(){var w,v,u,t,s=this,r=s.a,q=new A.e4()
q.cV(r.w.length*31+B.a.ga_(r.f))
w=s.a.w.length*900
v=A.a([new A.b1("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.dY(r,q)
for(r=A.cU(r,0,A.dw(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bR(r,r.gJ(0),u.k("bR<aj.E>")),u=u.k("aj.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b1(t,B.i.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bV8())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b3i===r){w=A.a([D.hdI,B.R,A.c(s,t,t,t,t,t,t,B.Xo,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fJI,t,t,t))
w.push(B.aB)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.BH,B.K,t,t))
w.push(B.eb)
w.push(C.uK("Play",u.gf2(u),B.d_,B.fQ,D.fL))
w=A.at(new A.C(B.ew,A.w(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b3j===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fS7,t,t,t),t,t,t)
break A}if(D.aeL===r||D.Yj===r){w=u.cvi()
break A}if(D.b3k===r){w=u.cfr()
break A}w=t}return new C.tS(s,w,B.fh,t)},
cvi(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.Yj,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aYc,j,j,j),B.aX],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.LW,j,j,j))
g.push(B.ar)
f=A.m(14)
g.push(A.p(j,A.c(""+k.f,j,j,j,j,j,j,B.iX,j,j,j),B.f,j,j,new A.o(B.by,j,j,f,j,j,B.m),j,j,j,j,A1.Db,j,j,j))
g=A.A(g,B.l,j,B.e,B.h,0,j,j)
f=A.m(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.bv(f,A.jH(B.by,j,k.as<5?B.fs:B.d_,9,j,w,j),B.ap)
w=A.m(22)
v=A.K(B.d_,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.w(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lZ:G.nN,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.O,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fII,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fUj,B.K,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.r_,j,v,w,j,j,B.m),j,j,j,j,B.f6,j,j,1/0),3)
v=A.a([],h)
for(u=k.giD(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bV5(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aFr[o]
m=new A.aP(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aFL[o],j,j,j,j,j,j,D.fKK,j,j,j),B.ar,new A.bu(1,B.b8,A.c(r[t],j,3,B.a2,j,j,j,D.fJF,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.atK)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c1x)
v.push(A.aA(j,new A.TB(A.p(j,new A.c0(B.aK,B.e,B.h,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bE(l,l,l,l),new A.bc(m,m,m,m),W.aDQ,j,B.m),j,j,j,j,B.eY,j,j,j),p,B.aZ,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.aj,f,B.af,w,B.af,A.E(A.lf(1.45,v,2,10,10,j,B.e8,!1),4)],h)
if(i)h.push(D.eHa)
return new A.C(B.a2b,A.w(h,B.l,j,B.e,B.h,0,B.p),j)},
cfr(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cQ7(),m=x.p,l=A.a([D.bfH,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qA,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.X1,o,o,o),o,o,o),B.aN],m)
for(w=0;w<n.length;++w){v=n[w].c?B.d_.j(0.25):B.dz
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.d_:B.by,1,B.r,-1)
q=A.c(w<3?D.dpM[w]:""+(w+1),o,o,o,o,o,o,B.mg,o,o,o)
s=s?B.u:B.N
l.push(A.p(o,new A.c0(B.aK,B.e,B.h,B.l,o,B.p,o,0,A.a([new A.a4(34,o,q,o),new A.bu(1,B.b8,A.c(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iX,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bE(r,r,r,r),new A.bc(u,u,u,u),o,o,B.m),o,o,o,B.cB,B.eZ,o,o,o))}l.push(B.R)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IP(m,v,p.CW,o))
l.push(B.aN)
l.push(A.at(C.uK("Back to the games",new C.bV2(p),B.d_,B.km,D.fL),o,o,o))
return A.co(l,o,o,B.f6,o,o,B.ah,!1)}}
C.UK.prototype={
R(){return new C.anm(A.S(x.de,x.er))}}
C.anm.prototype={
gDC(){var w,v=this,u=v.d
if(u===$){w=C.hxa(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glZ(d){var w,v,u=this,t=u.e
if(t===$){w=u.gDC().b
v=$.ay()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bb(w,B.b5,B.aO),v)}return t},
ciE(d){return this.f.c_(0,d,new C.bUB(d))},
Z(){this.a3()
var w=this.gDC().c
if(w.length===0)w.push(C.hir(null,0,20,""))},
t(){var w,v,u=this.glZ(0)
u.V$=$.ay()
u.W$=0
for(u=this.f,u=new A.ds(u,u.r,u.e);u.C();)for(w=J.aQ(u.d);w.C();){v=w.gP(w)
v.V$=$.ay()
v.W$=0}this.a2()},
cP8(){if(this.gDC().c.length>=12)return
this.l(new C.bUC(this))},
jK(d){var w,v,u=this,t=u.gDC()
t.b=B.a.i(u.glZ(0).a.a)
w=t.gaqU(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.T(D.fBD)
return}v=t.c
B.d.a6(v)
B.d.u(v,w)
v=u.c
v.toString
A.a8(v,!1).N(t)},
B(d){var w,v,u=this,t=null,s=new C.bUM(),r=x.p,q=A.a([A.bJ(!1,D.h2T,t,t,!0,t,t,t,u.gbsB(u),t,t)],r),p=A.a([D.hhW,B.af,A.aN(t,B.M,!1,t,!0,B.t,t,A.aO(),u.glZ(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.al,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ad,t,t,t,t,t,t,t,t,t,t,t,B.hi,!0,B.a7,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gDC().c.length,w<v;++w)B.d.u(p,A.a([new A.fm(new C.bUL(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uK("\uff0b Add a question",u.gcP7(),B.aT,t,B.c),t,t,t))
return new C.tS("Make your game",A.co(p,t,t,D.bHF,t,t,B.ah,!1),q,t)}}
C.asx.prototype={
R(){return new C.aGK(A.a([],x._))},
bw(){return this.r.$0()},
qx(){return this.w.$0()},
ge9(){return this.c}}
C.aGK.prototype={
Z(){var w,v
this.a3()
this.wK()
w=this.a
v=w.c
if(v.length!==0)C.a9k(v,w.e,w.d.w)},
wA(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hu1(r,t.e,!1,s.w,new C.e8M(u),null,s),$async$wA)
case 2:w=3
return A.b(u.wK(),$async$wA)
case 3:return A.h(null,v)}})
return A.i($async$wA,v)},
a1M(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1M=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hu1(r,t.e,!0,s.w,new C.e8L(u),null,s),$async$a1M)
case 2:w=3
return A.b(u.wK(),$async$a1M)
case 3:return A.h(null,v)}})
return A.i($async$a1M,v)},
wK(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wK=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bz(q.a.c),$async$wK)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.l(new C.e8O(q,p))
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
return A.b(C.HK(q.a.c).d7(0,B.rc),$async$wK)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.e8P(q,o))
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
if(q.c!=null&&q.e)q.l(new C.e8Q(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wK,v)},
PY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$PY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.T(D.fBd)
w=3
return A.b(C.HK(t.a.c),$async$PY)
case 3:r=e
w=4
return A.b(C.h7P(t.a.c,r),$async$PY)
case 4:q=e
w=5
return A.b(C.HK(t.a.c),$async$PY)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.e8K(t,p))
o=t.c.K(s).f
s=A.c(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b0(null,null,null,q?B.dR:B.d9,null,B.t,null,s,null,B.lC,null,null,null,null,null,null,null,null,null,null))
t.a.qx()
case 1:return A.h(u,v)}})
return A.i($async$PY,v)},
J1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$J1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iG7(l),$async$J1)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.i83(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b3e(q,p.e,l,"Each family tree costs $"+B.i.a5(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$J1)
case 4:if(!e||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
p=C.hOw(r)
o=Date.now()
n=t.a.c
m=new C.le(l,r.toUpperCase(),p,!0,B.M,D.Et,new A.W(o,0,!1),0,n,D.vp,B.co)
w=5
return A.b(C.a4Y(n,m),$async$J1)
case 5:w=6
return A.b(t.wK(),$async$J1)
case 6:t.a.bw()
t.a.qx()
if(t.c==null){w=1
break}t.Fw(m)
case 1:return A.h(u,v)}})
return A.i($async$J1,v)},
Fw(d){return this.cnM(d)},
cnM(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$Fw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bz(u.a.c),$async$Fw)
case 2:n=l.nP(k.dO(f,new C.e8N(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.he(m,new C.asr(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$Fw)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a4Y(u.a.c,o),$async$Fw)
case 6:case 5:w=7
return A.b(u.wK(),$async$Fw)
case 7:u.a.qx()
return A.h(null,v)}})
return A.i($async$Fw,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=new C.uv(p)
if(r.e)return A.at(A.nk(q,p?B.bv:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.cx(r.d)){w=p?B.el:B.c
v=A.m(15)
u=A.aE(!1,B.a3,!0,q,A.aM(!1,q,!0,A.p(q,D.c_3,B.f,q,q,new A.o(B.aW.j(0.12),q,A.K(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cM,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcmM(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GK(A.p(q,A.w(A.a([u,B.aN,t,B.O,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.eb,A.bH(D.hld,q,r.gaUZ(),A.bp(B.bU,q,q,q,q,q,B.a2B,q,new A.b9(A.m(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.h,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.m),q,q,q,q,D.bKo,q,q,1/0),15,B.ag,1.05,D.aey,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aX],v)
if(J.cL(r.d))w.push(A.aH(q,q,q,q,A.V(B.Am,B.aW,q,q,q,q),q,q,q,new C.e8S(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aH(q,q,q,q,A.V(B.Ai,B.aW,q,q,q,q),q,q,q,r.gaiq(),q,q,q,q,"Transfer / backup file",q))
w.push(A.de(E.auH,q,D.h09,r.gaUZ(),A.bp(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.h,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GK(r.cLf(J.t(r.d,s),o),14,B.ag,1,D.aey,q))
B.d.u(w,u)}return A.w(A.a([p,B.aB,A.w(w,B.l,q,B.e,B.h,0,B.p)],v),B.B,q,B.e,B.h,0,B.p)},
cLf(d,e){var w=null,v=e.a,u=v?B.el:B.c,t=A.m(14),s=A.K((v?B.eo:B.bP).j(0.55),B.r,1),r=A.a([new A.aa(0,B.H,B.v.j(v?0.35:0.08),B.eF,10)],x.V),q=A.m(14),p=A.p(w,D.bZ8,B.f,w,w,new A.o(B.aW.j(0.15),w,w,A.m(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.garV(),m=d.d?"":" \xb7 Public",l=d.y===D.lf?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bs,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.h,0,B.p),1)
return A.p(w,A.aE(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.C(B.bD,A.A(A.a([p,B.ba,l,A.V(B.Q9,v?B.bv:B.bl,w,w,w,w)],k),B.l,w,B.e,B.h,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e8R(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.o(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.asr.prototype={
R(){return new C.aGH(A.a([],x._),A.aR(x.N),A.bc3())},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aGH.prototype={
Z(){var w,v,u=this
u.a3()
u.d=u.a.w
u.aeX()
w=u.a
v=w.c
if(v.length!==0)C.a9k(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ay()
w.W$=0
this.a2()},
a4S(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4S=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yQ("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e8c(r),s,null,!0,!0,x.y),$async$a4S)
case 3:if(e!==!0||t.c==null){w=1
break}t.KK()
t.l(new C.e8d(t,r))
w=4
return A.b(t.uH(),$async$a4S)
case 4:t.a.bw()
t.yQ(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a4S,v)},
cAC(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.U$.push(new C.e87(w,f,d,e))},
aXi(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dB()
u.ei(w,v,0,1)
u.k6(q,q,1,1)
this.w.sp(0,u)},
bfl(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eT(new Float64Array(16))
q.ed(r)
w=q.DH()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dB()
t.ei(r,u,0,1)
t.k6(v,v,1,1)
t.ei(-r,-u,0,1)
t.j_(0,q)
s.sp(0,t)},
aeX(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$aeX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bz(u.a.c),$async$aeX)
case 2:t=s.nP(r.dO(e,new C.e7z(u)))
if(t!=null&&u.c!=null)u.l(new C.e7A(u,t))
return A.h(null,v)}})
return A.i($async$aeX,v)},
yQ(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b0(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
wA(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.hu1(o,t,!1,r,new C.e7R(u),q.a,s),$async$wA)
case 2:n=A
m=J
w=3
return A.b(C.HK(u.a.c),$async$wA)
case 3:p=n.nP(m.dO(e,new C.e7S(u)))
if(p!=null&&u.c!=null)u.l(new C.e7T(u,p))
return A.h(null,v)}})
return A.i($async$wA,v)},
KK(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cJ(w,0)},
uH(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a4Y(t,s),$async$uH)
case 2:return A.h(null,v)}})
return A.i($async$uH,v)},
a3k(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a3k=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uL(q,t.a.c)){t.yQ("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iHm(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a3k)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.KK()
t.l(new C.e86(t,r))
w=4
return A.b(t.uH(),$async$a3k)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3k,v)},
b5g(){var w=this.c
w.toString
A.a8(w,!1).ca(A.e7(new C.e7O(this),!1,null,x.H))},
a20(){return this.cnO()},
cnO(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a20=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uL(m,t.a.c)){t.yQ("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e83(),A.U(s).k("X<1>")).gJ(0)
s=A.eC([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("ci.E"))
B.d.fd(p)
s=t.c
s.toString
w=3
return A.b(A.bV(B.L,null,new C.e84(n,t,new C.uv(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a20)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.KK()
t.l(new C.e85(t,o))
w=6
return A.b(t.uH(),$async$a20)
case 6:case 5:if(o.a&&t.c!=null)t.b5g()
case 1:return A.h(u,v)}})
return A.i($async$a20,v)},
Xr(d){return this.bGd(d)},
bGd(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xr=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uL(r,t.a.c)){t.yQ("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e7n(t,d),r,null,!0,!0,x.P),$async$Xr)
case 3:s=f
if(s==null){w=1
break}t.KK()
t.l(new C.e7o(t,s))
w=4
return A.b(t.uH(),$async$Xr)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xr,v)},
a5c(d){return this.cNw(d)},
cNw(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a5c=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e8f(u,d,new C.uv(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a5c)
case 2:return A.h(null,v)}})
return A.i($async$a5c,v)},
cjR(d){var w=this,v=w.d
v===$&&A.d()
if(C.uL(v,w.a.c))w.PD(d)
else w.a5c(d)},
akU(d,e){return this.cEF(d,e)},
cEF(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$akU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e89(new C.uv(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$akU)
case 3:case 1:return A.h(u,v)}})
return A.i($async$akU,v)},
J6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$J6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.lf?3:5
break
case 3:w=6
return A.b(C.hgE(t.a.c),$async$J6)
case 6:s=e
o=t.a
r=C.hC2(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.akU(!s,!r),$async$J6)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aSL(o,t.a.c)){t.yQ("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lE(o,"Cancel","Remove",q.y===D.lf?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$J6)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aSJ(t.a.c,t.d.a),$async$J6)
case 11:t.a.bw()
o=t.c
if(o==null){w=1
break}A.j3(o,null)
case 1:return A.h(u,v)}})
return A.i($async$J6,v)},
acm(d){return this.bRI(d)},
bRI(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$acm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uL(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e7p(p))){o=A.U(s)
p.a=A.nP(new A.cQ(new A.X(s,new C.e7q(d),o.k("X<1>")),new C.e7r(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.KK()
t.l(new C.e7s(t,s,d,q))
w=3
return A.b(t.uH(),$async$acm)
case 3:t.yQ(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$acm,v)},
PD(d){return this.bTW(d)},
bTW(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uL(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a5c(d),$async$PD)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e7w(t,d),r,null,!0,!0,x.P),$async$PD)
case 6:s=f
if(s==null){w=1
break}t.KK()
t.l(new C.e7x(t,s))
w=7
return A.b(t.uH(),$async$PD)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PD,v)},
cLH(){var w=this,v=w.d
v===$&&A.d()
if(!C.uL(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e8e(w))
w.uH()},
a_x(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aSL(n,t.a.c)){t.yQ("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.ay()
r=new A.au(B.ay,s)
q=t.d.e
p=A.bt(new A.O(q,t.gcik(),A.U(q).k("O<1,n>")).c0(0,new C.e7J()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e7K(t,new C.uv(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a_x)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.KK()
t.l(new C.e7L(t,p))
w=4
return A.b(t.uH(),$async$a_x)
case 4:t.yQ("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a_x,v)},
cil(d){return B.a.i(d.toLowerCase())},
cmt(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uL(v,w)
t=r.d
s=C.iw1(t)
C.iGb(q,t.b,u,C.iw0(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uv(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.e8m(),A.U(l).k("X<1>")).gJ(0)
l=n?B.c7:B.hX
v=A.V(B.a3L,n?B.bv:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.C(A_.Dc,A.aM(!1,o,!0,new A.C(B.hA,A.A(A.a([v,B.b7,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e8n(p,d),o,o,o,o,o,o,o),o),new A.C(B.o6,p.c4d(m),o)],u)
if(p.d.y===D.lf){t=B.u9.j(0.15)
s=A.m(12)
r=A.K(B.u9.j(0.45),B.r,1)
q=C.HI(p.d,p.a.c)
v.push(new A.C(B.zz,A.p(o,A.A(A.a([D.c3H,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.m),o,o,o,o,B.hp,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,15,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aX],u)
if(C.uL(p.d,p.a.c)&&p.e.length!==0)u.push(new C.GV("Undo",B.q7,p.gcLG(),m,o,o))
u.push(new C.GV("Family Book",D.bTG,p.gcms(),m,B.v_,o))
u.push(new C.GV("Family games",B.oe,p.gcmE(),m,B.az,o))
if(C.uL(p.d,p.a.c))u.push(new C.GV("Display settings",B.E0,p.gcnN(),m,B.b6,o))
u.push(new C.GV("Sync",B.Ai,p.gaiq(),m,o,o))
t=p.d
if(t.y===D.lf||C.aSL(t,p.a.c)){t=p.d.y===D.lf?"Remove shared tree":"Delete tree"
u.push(new C.GV(t,B.eq,p.gbRS(),m,B.fs,o))}if(C.uL(p.d,p.a.c))u.push(new C.GV("Add member",B.xv,new C.e8o(p),m,B.bU,o))
v.push(new A.C(S.aog,A.A(u,B.l,o,B.e,B.h,0,o,o),o))
if(p.d.garV()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cg(new C.e8p(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.V(n?B.a3P:B.Qa,o,o,o,o,o)
v.push(A.at(A.hy(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e8q(p),o),o,o,o))}return A.c6(o,l,A.bo(!0,A.w(v,B.B,o,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c4d(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.m(22)
v=A.a([new A.aa(0,B.H,B.h7.j(0.35),B.dv,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.V(B.A9,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aE(!1,B.a3,!0,m,A.aM(!1,m,!0,A.p(m,D.c72,B.f,m,m,new A.o(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cM,!0,m,m,m,m,m,m,m,m,m,m,m,n.gaiq(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fLP,m,m,m)
r=r.garV()
p=n.d.garV()===1?"member":"members"
o=x.p
p=A.a([s,B.ba,A.E(A.w(A.a([q,B.bs,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.h,0,B.p),1)],o)
if(C.uL(n.d,n.a.c))p.push(A.aH(m,m,m,m,D.c3W,m,m,m,n.gcxS(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.h,0,m,m)
r=n.d.d
q=r?B.iQ:B.np
r=r?"Private":"Public"
r=A.E(n.ayu(q,"Privacy",r,n.a.d.w?n.gcKx():m),1)
q=A.E(n.ayu(B.xA,"Tree code",n.d.c,new C.e7y(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.ayu(D.bVn,"Collaborators",p,n.gc9h()),1)],o),B.l,m,B.e,B.h,0,m,m)],o)
if(n.d.y===D.lf){s=B.c.j(0.15)
B.d.u(p,A.a([B.O,A.aE(!1,B.a3,!0,A.m(999),A.aM(!1,A.m(999),!0,new A.C(B.h0,A.A(A.a([A.V(B.of,B.c,m,m,m,14),B.e0,A.c("View only",m,m,m,m,m,m,B.acY,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.p(m,A.bv(u,new A.am(B.a0,m,B.ac,B.t,A.a([t,new A.C(B.HN,A.w(p,B.B,m,B.e,B.h,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.cbo,B.m),m,m,m,m,m,m,m,1/0)},
ayu(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aE(!1,B.a3,!0,A.m(14),A.aM(!1,A.m(14),!0,new A.C(K.apD,A.w(A.a([A.V(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rQ,A.c(f,w,1,B.a2,w,w,w,Aq.y9,w,w,w)],x.p),B.l,w,B.e,B.h,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.biX.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gar(r)&&s.c.length===0)return B.bK
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bj_(s,t),new A.av(w,v))],x.p)
r=r.gdU(r)
B.d.u(u,r.dR(r,new C.dlq(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dlr(this),A.U(r).k("O<1,x>")))
return new A.C(B.vm,new A.a4(w,v,new A.am(B.a0,t,B.ac,B.f,u,t),t),t)}}
C.Lg.prototype={}
C.GZ.prototype={}
C.biZ.prototype={
gbnV(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aMu.prototype={}
C.bj_.prototype={
bTx(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.T()
v=A.L()
v.r=B.bE.j(0.75).gp(0)
v.c=2
v.d=B.bG
d.ah(new A.r(n,w),new A.r(m,w),v)
u=(n+m)/2
t=new A.aI(q.r,B.ak,null,null,A.a([],x.v))
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
bTu(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dlL())
w=f.b
v=w+(B.d.gG(a0).b-w)/2
u=B.d.aR(a0,new C.dlM(f))
t=new A.O(a0,new C.dlN(f),A.U(a0).k("O<1,H>")).c0(0,new C.dlO()).cD(0,1/0,B.pC)
w=f.a
d.ah(f,new A.r(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.I)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.r(o,v),p,e)
continue}l=J.m6(n)
k=Math.min(10,m/2)
m=$.T()
j=A.a([],r)
i=new A.aI(m.r,B.ak,null,null,j)
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
w.b=B.ae
w.d=B.bG
w.e=B.dP
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bTu(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bTx(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bmO.prototype={
gcft(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aG3
switch(w.c.a){case 0:return D.d5c
case 1:return D.diW
case 2:return D.dCw}},
gcfw(){var w=this.c,v=C.hNJ(w.w),u=C.hNJ(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=t.gcft(),p=t.c,o=A.bHN(p.f),n=t.gcfw(),m=x.V,l=A.a([new A.aa(0,B.H,B.d.gal(q).j(0.35),B.cN,10)],m),k=r?B.ax:B.c,j=A.K(r?B.ax:B.c,B.r,2)
if(o!=null)w=A.tX(B.z,s,B.cr,B.c0,!1,s,o,!1,s,s)
else{w=A.a([B.d.gG(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a6(B.a5,B.a9,B.w,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.ib(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a6(B.aw,B.aD,B.w,q,s,s),B.a6),s,56,s,s,B.Dq,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.K(r?B.ax:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.c(""+k,s,s,s,s,s,s,D.fWR,s,s,s),B.f,s,s,new A.o(B.ci,s,w,j,s,s,B.m),s,s,s,s,D.bMk,s,s,s),s,s,s,-6,-4,s))}k=r?B.cx:B.c
j=A.m(8)
w=A.K(B.d.gG(q).j(0.35),B.r,1)
m=A.a([new A.aa(0,B.H,B.v.j(r?0.3:0.06),B.dS,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cx,s,s,s,s,s,s,s,s,u,s,s,B.C,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a4(84,112,A.w(A.a([new A.am(B.a0,s,B.ac,B.f,l,s),B.at,A.p(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.b9P,new A.o(k,s,w,j,m,s,B.m),s,s,s,s,D.bMv,s,s,s)],v),B.l,s,B.e,B.h,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bi_.prototype={
a4(d,e){var w,v,u,t,s
$.T()
w=A.L()
v=this.b
u=v?B.c:D.bn1
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.r(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bB_.prototype={
B(d){var w=this,v=null,u=new C.fwF(w),t=w.c,s=t?B.cx:B.c,r=A.m(12),q=u.$3(B.ig,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.by:B.fA,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xx,"Zoom out",w.e)
return A.aE(!1,B.a3,!0,r,A.w(A.a([q,p,o,A.p(v,v,B.f,t?B.by:B.fA,v,v,v,1,v,v,v,v,v,22),u.$3(B.as5,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dJ,v,v,v,B.ai)}}
C.bqb.prototype={
B(d){var w=this,v=null,u=B.bU.j(0.15),t=A.K(B.bU,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.p(v,A.w(A.a([A.V(s?B.a3P:B.Qa,B.bU,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fSN,v,v,v)],r),B.l,v,B.bc,B.h,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.aj,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fQy,B.K,v,v)],r)
if(s){t=A.a([B.aj],r)
s=w.d
B.d.u(t,new A.O(s,new C.f6s(w),A.U(s).k("O<1,x>")))
B.d.u(u,t)}return new A.a4(84,v,A.w(u,B.l,v,B.e,B.h,0,B.p),v)}}
C.a18.prototype={
R(){return new C.aF7()},
bw(){return this.Q.$0()},
ge9(){return this.w}}
C.aF7.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a3()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.ay()
r.d!==$&&A.aT()
r.d=new A.au(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aT()
r.e=new A.au(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aT()
r.f=new A.au(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aT()
r.r=new A.au(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aT()
r.w=new A.au(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aT()
r.x=new A.au(new A.bb(t,B.b5,B.aO),s)
t=u?q:v.c
r.y=t==null?D.zN:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ixz(w.r,w.f)
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
Rb(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Rb=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hC2(p.y,p.w)
w=3
return A.b(A.lW(t.a.w,B.Kv),$async$Rb)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b3e(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Rb)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.i84(p.y,p.w)
t.a.bw()
case 5:w=7
return A.b(A.DZ(78,800),$async$Rb)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dC2(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Rb,v)},
cfv(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
s=v.aHR(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a8(k,!1).N(s)},
abY(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$abY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dC1(r),s,null,!0,!0,x.y),$async$abY)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a8(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$abY,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.I,i=new C.uv(j),h=l.a.e,g=A.U(h).k("X<1>"),f=A.B(new A.X(h,new C.dCb(l),g),g.k("M.E"))
h=j?B.el:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bKJ,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hb(A.aM(!1,k,!0,new A.C(B.m6,A.V(B.eq,B.pP,k,k,k,17),k),B.cM,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbOn(),k,k,k,k,k,k,k),k,"Delete member",k,k,k),k,k,k,0,k,k))
u=j?B.kc:B.iL
t=A.bHN(l.as)
if(l.as==null)s=A.V(B.q_,j?B.bv:B.bl,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.am(B.a0,k,B.ac,B.t,A.a([A.ho(u,t,s,k,42),A.ao(0,A.ho(B.bU,k,D.bYb,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcfs(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aF9(t,"Full name",B.mB,1,1,i,B.mT)
u=l.y
u===$&&A.d()
u=A.w(A.a([t,B.R,new C.bmM(i,u,new C.dCc(l),k)],v),B.l,k,B.e,B.h,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bE2],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dCd(),A.U(o).k("O<1,eP<n?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bE4],q)
B.d.u(q,new A.O(f,new C.dCf(),A.U(f).k("O<1,eP<n?>>")))
o=A.w(A.a([t,B.aj,new C.afs(i,r,"Who is their parent?",p,new C.dCg(l),k,o),B.aB,n,B.aj,new C.afs(i,m,"Who is their spouse / partner?",q,new C.dCh(l),k,o)],v),B.am,k,B.e,B.h,0,B.p)
q=l.f
q===$&&A.d()
q=C.aF9(q,"Birth date",D.arg,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aF9(m,"Birth place",B.a44,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aF9(n,"Date of death (if deceased)",D.atn,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aF9(p,"Occupation",Y.Rf,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.am(B.z,k,B.ac,B.t,w,k),B.aB,s,B.bx,new C.aft(i,"Identity",u,k),B.af,new C.aft(i,"Family links",o,k),B.af,new C.aft(i,"Life details",A.w(A.a([q,B.R,m,B.R,n,B.R,p,B.R,C.aF9(r,"Notes",B.lh,5,3,i,k)],v),B.l,k,B.e,B.h,0,B.p),k),B.af,new C.aF8(i,"Child order",l.co3(l.at),new C.dCi(l),new C.dCj(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hqZ(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dCk(l):k
B.d.u(r,A.a([B.R,new C.aF8(i,"Visible in tree",u,w,new C.dCl(l),k)],v))}r.push(B.R)
w=j?B.kc:B.iL
u=A.m(14)
t=A.K(j?B.eo:B.bP,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.jd(k,B.bU,k,B.ag,k,new C.dCm(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.m),k,k,k,k,B.anU,k,k,k))
r.push(B.bx)
w=j?B.aS:B.ax
j=j?B.eo:B.bP
r.push(A.A(A.a([A.E(A.dV(B.ov,new C.dCe(d),A.dh(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.b9(A.m(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.ba,A.E(A.bH(D.fsP,k,l.gcfu(),A.bp(B.aW,k,k,0,B.c,k,B.cq,k,new A.b9(A.m(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.h,0,k,k))
r.push(B.at)
return A.el(B.fh,k,B.ag,h,new A.a4(420,k,A.cc(A.w(r,B.am,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.aoR,k,B.ao5,new A.b9(g,B.a1),k,k)},
co3(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aft.prototype={
B(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.kc:B.iL,s=A.m(16)
return A.w(A.a([new A.C(B.a2F,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.K(v?B.eo:B.bP,B.r,1),s,w,w,B.m),w,w,w,w,B.bg,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)}}
C.bmN.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.el:B.c,r=A.m(12),q=A.K((t?B.eo:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aN(u,B.M,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bB(u,B.eV,u,B.tG,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cF,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.al,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ad,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a7,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.afs.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.el:B.c,s=A.m(12),r=A.K((u?B.eo:B.bP).j(0.85),B.r,1),q=A.V(B.tR,u?B.bv:B.bl,v,v,v,v),p=A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.el:B.c
return A.p(v,new A.EM(A.a6u(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cF,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.m),v,v,v,v,B.ld,v,v,v)}}
C.bmM.prototype={
B(d){var w=new C.dCn(this)
return A.A(A.a([w.$3(D.xi,"Male",B.QZ),B.aa,w.$3(D.oY,"Female",B.QJ),B.aa,w.$3(D.zN,"Other",B.oc)],x.p),B.l,null,B.e,B.h,0,null,null)}}
C.aF8.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.kc:B.iL,r=A.m(14),q=A.K(t?B.eo:B.bP,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,13,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.A(A.a([A.E(A.w(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.h,0,B.p),1),new C.aLw(u,B.xx,w.f,v),B.b7,new C.aLw(u,B.ig,w.r,v)],o),B.l,v,B.e,B.h,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.m),v,v,v,v,B.ep,v,v,v)}}
C.aLw.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.el:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bU
else t=(s.c.a?B.bv:B.bl).j(0.4)
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a4(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.afu.prototype={
bXK(d){switch(d.a){case 0:return B.bU
case 1:return B.bE
case 2:return B.cG}},
bXL(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b0P(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
B8(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.el:B.c
u=A.m(12)
t=A.K((w?B.eo:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.u(r,A.a([A.V(f,B.bU,p,p,p,18),B.ar],s))
q=A.c(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bl,p,p,p,p,p,p,p,p,9,p,p,B.C,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.w(A.a([q,B.at,A.c(o,p,p,p,p,p,p,A.l(p,p,w?B.aS:B.ax,p,p,p,p,p,p,p,p,14,p,p,B.N,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.B,p,B.e,B.h,0,B.p),1))
return A.p(p,A.A(r,B.B,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.m),p,p,p,B.cB,B.zw,p,p,1/0)},
agK(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.kc:B.iL,s=A.m(16),r=A.K(v?B.eo:B.bP,B.r,1)
return A.w(A.a([new A.C(B.a2F,u,w),A.p(w,A.w(e,B.l,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.m),w,w,w,w,B.bS,w,w,1/0)],x.p),B.B,w,B.e,B.h,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hTl(r,q),o=q.c,n=t.bXK(o),m=A.bHN(q.f),l=t.e.a,k=l?B.el:B.c,j=A.m(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.lf?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.aa(0,B.H,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.ho(u,m,m==null?A.V(B.q_,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.eD,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.c(t.bXL(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,B.lE,s,s,s),s,s,s)
u=x.p
i=A.a([t.B8("Full name",i,B.mB)],u)
if(p>0)i.push(t.B8("Child order","#"+p,B.QP))
r=A.a([h,B.at,r,B.aN,l,B.R,v,B.bx,t.agK("Identity",i),B.af,t.agK("Life details",A.a([t.B8("Birth date",q.w,D.arg),t.B8("Birth place",q.x,B.a44),t.B8("Date of death",q.y,D.atn),t.B8("Occupation",q.z,Y.Rf)],u)),B.af,t.agK("Family links",A.a([t.B8("1. Parent",t.b0P(q.d),B.Ie),t.B8("2. Spouse",t.b0P(q.e),B.Iw)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.agK("Notes",A.a([t.B8("Notes",q,B.lh)],u))],u))
r.push(B.bx)
r.push(A.bH(B.M2,s,new C.dCx(d),A.bp(B.aW,s,s,s,s,s,B.cq,s,new A.b9(A.m(14),B.a1),s,s,s)))
return A.ez(s,k,new A.cP(B.lV,A.cc(A.w(r,B.am,s,B.e,B.P,0,B.p),B.t,s,B.y,s,s,B.xc,s,s,B.ah),s),s,s,s,B.HQ,s,B.da,s,new A.b9(j,B.a1),s)}}
C.GV.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.tJ,A.hb(A.aE(!1,B.a3,!0,A.m(8),A.aM(!1,A.m(8),!0,new A.a4(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u,u),u)}}
C.asu.prototype={
eT(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("O<1,a9<n,@>>")
w=A.B(new A.O(w,new C.cia(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.iZ(w,new C.cib(),t,x.fO))
return s}}
C.asv.prototype={
R(){return new C.aGJ(A.a([],x.bF))},
gd2(){return this.c}}
C.aGJ.prototype={
Z(){this.a3()
this.KR()},
KR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$KR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cie(t.a.c),$async$KR)
case 3:r=e
w=4
return A.b(C.Bz(t.a.c),$async$KR)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rC(q,new C.e8z(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.e8A(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$KR,v)},
zs(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.T(A.b0(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
LH(d,e){return this.cOe(d,e)},
cOe(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$LH=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.e8E(q,e))
t=3
w=6
return A.b(d.$0(),$async$LH)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.e8F(q))
$.eX.mN()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$LH,v)},
Zf(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pT(r,s.c,s.e),$async$Zf)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.LH(new C.e8w(t),"Preparing download\u2026"),$async$Zf)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zf,v)},
Zj(d){return this.bVA(d)},
bVA(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pT(r,s.c,s.e),$async$Zj)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.LH(new C.e8x(t,d),"Preparing file\u2026"),$async$Zj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Zj,v)},
aiN(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aiN=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.y3.cq().Np(B.U4,B.vq,!0),$async$aiN)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
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
case 6:u=A.HQ()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiN,v)},
ZX(d){return this.c58(d)},
c58(d){var w=0,v=A.j(x.H),u=this
var $async$ZX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.LH(new C.e8y(u,d),"Restoring family trees\u2026"),$async$ZX)
case 2:return A.h(null,v)}})
return A.i($async$ZX,v)},
ZW(){var w=0,v=A.j(x.H),u,t=this,s
var $async$ZW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aiN(),$async$ZW)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.ZX(s),$async$ZW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZW,v)},
a4e(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4e=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pT(r,s.c,s.e),$async$a4e)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.LH(new C.e8D(t),"Creating QR code\u2026"),$async$a4e)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a4e,v)},
a3O(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3O=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DX()){t.zs("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a8(s,!1).ca(A.e7(new C.e8B(),!0,null,x.N)),$async$a3O)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.ZX(r),$async$a3O)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a3O,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.I,n=o?B.CA:B.hX,m=o?D.amn:B.aS,l=o?B.aM:B.bP,k=o?B.aS:B.ax,j=new C.dlP(n,m,l,k,o?B.bQ:B.bl)
l=A.aH(p,p,p,p,A.V(B.eE,k,p,p,p,20),p,p,p,new C.e8H(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eS(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dln(!0,B.jK,B.aH,B.aH,q.r?p:q.gcEt(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcAw()
t.push(A.E(C.dln(!s,B.jL,B.b_,B.bj,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.h,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dln(!1,B.hP,B.aW,B.bU,q.r?p:q.gbVt(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dln(!1,Q.Aj,B.as,B.aQ,q.r?p:q.gc55(),j,s,"Upload backup file"),1))
l=A.a([new C.biY(v,l,p),B.lq,new C.aeI(j,"QR restore",p),B.R,t,B.df,new C.aeI(j,"Backup files",p),B.R,A.A(r,B.l,p,B.e,B.h,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.lq,new C.aeI(j,"One tree",p),B.R],u)
B.d.u(v,J.b8(q.d,new C.e8I(q,j),x.l))
B.d.u(l,v)}l=A.a([A.co(l,p,p,At.a2x,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.K(B.aW.j(0.35),B.r,1)
s=A.a([new A.aa(0,B.H,B.v.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bo(!0,A.p(p,A.A(A.a([Au.aWz,B.ba,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.N,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.h,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.m),p,p,p,p,A2.Di,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.am(B.a0,p,B.ac,B.t,l,p),p,!1,!1,p,p)}}
C.dlP.prototype={}
C.biY.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.aa(0,B.H,B.aW.j(0.32),B.kx,28)],x.V)
t=A.ao(p,A.V(B.vJ,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.am(B.a0,p,B.ac,B.t,A.a([t,new A.C(B.ad,A.A(A.a([A.p(p,D.c6x,B.f,p,p,new A.o(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pp,A.E(A.w(A.a([D.h1c,B.O,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.h,0,B.p),1)],q),B.B,p,B.e,B.h,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.ceN,B.m),p,p,p,p,p,p,p,p)}}
C.aeI.prototype={
B(d){var w=null
return A.A(A.a([A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)}}
C.biW.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.aa(0,B.H,B.aH.j(0.1),B.cN,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aE(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eL(A.d2(new A.C(E.a28,A.w(A.a([A.p(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.m),q,q,q,q,B.tK,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bs,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cF,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.h,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bj0.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aW.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aE(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eL(new A.C(B.eZ,A.A(A.a([A.p(v,D.c5H,B.f,v,v,new A.o(q,v,A.K(B.aW.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tK,v,v,v),B.ba,A.E(A.w(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.h,0,B.p),1),A.V(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.h,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a1s.prototype={
R(){return new C.aGI()},
gd2(){return this.c}}
C.aGI.prototype={
Z(){this.a3()
this.abv()},
abv(){var w=0,v=A.j(x.H),u=this,t
var $async$abv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(R.b5X(u.a.c,B.F6),$async$abv)
case 2:t=e
if(u.c!=null)u.l(new C.e8r(u,t))
return A.h(null,v)}})
return A.i($async$abv,v)},
akd(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$akd=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e8s(q))
t=4
p=R.hDR(q.a.d,B.F6)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(R.auO(n.e,m,l,B.F6,p,n.f),$async$akd)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.e8t(q))
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
if(q.c!=null)q.l(new C.e8u(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$akd,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=p?B.nW:B.nh,n=p?B.iZ:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eS(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hhQ,q,q,q,1,q,!0)
w=A.m(24)
v=A.K(B.aW.j(0.35),B.r,1)
u=A.qt(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.w(A.a([B.O,u,B.bx,t,B.O,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bc,B.h,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.m),q,q,q,q,B.ad,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.N,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcAd()
if(u)u=B.Lv
else u=A.V(r.e===!0?B.h1:Ax.arf,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a4(1/0,q,A.ei(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.ch,q,q,q),t,A.dh(q,q,q,q,q,q,q,q,q,B.aW,q,B.ht,q,q,q,new A.ax(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.hz,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aF:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.R)
w.push(new A.a4(1/0,q,A.bH(Af.BJ,q,new C.e8v(d),A.bp(B.aW,q,q,q,q,B.ht,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.C(B.ad,A.w(w,B.l,q,B.e,B.h,0,B.p),q),q,!1,!1,q,q)}}
C.a1t.prototype={
R(){return new C.boi(A.A9(B.zl,B.oC,B.vQ))}}
C.boi.prototype={
t(){this.d.t()
this.a2()},
B(d){var w=null
return A.c6(A.eS(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.h9u,w,w,w,1,w,!0),B.v,A.A8(this.d,B.c0,new C.e8J(this,d)),w,!1,!1,w,w)}}
C.b1K.prototype={
B(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.Tx,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.mi.prototype={}
C.a8m.prototype={
R(){return new C.bnX(null,null)}}
C.bnX.prototype={
Z(){var w=this,v=null
w.a3()
w.d=A.br(v,B.tz,v,1,v,w)
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
this.bBp()},
B(d){var w,v,u=this,t=B.d.dr(D.a85,new C.dUu(u),new C.dUv())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cGj(A.c9(new A.hB(A.a([w,v],x.dS)),new C.dUw(u,t),null),!0)}}
C.bnW.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b5I(d,e)
break
case"house":p.ms(d,e,D.dov)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdl()
$.T()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.r(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.my(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.BZ(d,e,12)
p.z2(d,e,B.lz,5,14)
break
case"grocery":p.coO(d,e)
break
case"calculator":p.cov(d,e)
break
case"lumber":p.coW(d,e)
break
case"kitchen":p.coR(d,e)
break
case"landscape":p.ms(d,e,D.dp5)
s=new A.aI($.T().r,B.ak,null,null,A.a([],x.v))
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
p.BZ(d,e,8)
p.z2(d,e,B.iM,4,18)
break
case"plumbing":p.cp5(d,e)
break
case"electrical":p.ms(d,e,D.dBz)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.T()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a5(0,0,0+e.a,0+e.b),u)
p.my(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.my(d,e,B.oQ.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.BZ(d,e,10)
break
case"store":p.cpf(d,e)
break
case"paint_remodel":p.cp0(d,e)
break
case"roofing":p.cp7(d,e)
break
case"warehouse":p.cpm(d,e)
break
case"vehicles":p.cpk(d,e)
break
case"farm":p.coI(d,e)
break
case"restaurant":p.cp6(d,e)
break
case"tools":p.cpi(d,e)
break
case"wallet":p.cpl(d,e)
break
case"concrete":p.coB(d,e)
break
case"blueprint":p.cot(d,e)
break
default:p.b5I(d,e)}},
ms(d,e,f){var w,v=new A.a5(0,0,0+e.a,0+e.b)
$.T()
w=A.L()
w.san(new A.a6(B.aw,B.aD,B.w,f,null,null).az(0,v))
d.aE(v,w)},
my(d,e,f,g,h){var w,v,u,t=new A.r(e.a/2,e.b/2),s=e.gdl()/2-h
$.T()
w=A.L()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cQ(A.bY(t,s),u,u+0.1439896632895322-u,!1,w)}},
z2(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdl()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.T()
r=new A.ar(B.U,B.S,B.X,B.Y,B.W)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.r(q+t*o,p+s*o),3.5,r)}},
BZ(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.T()
p=new A.ar(B.U,B.S,B.X,B.Y,B.W)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.r(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b5I(d,e){var w,v=this
v.ms(d,e,D.dzK)
w=v.c
v.my(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.my(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bTq(d,e,B.i_,w)
v.z2(d,e,B.c.j(0.7),6,8)},
bTq(d,e,f,g){var w,v,u,t,s,r
$.T()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a5(16,r,t,r+3),w)}},
coO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.ms(d,e,D.cAO)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ao(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.T()
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.r=D.dmu[B.o.F(t,4)].j(0.85).gp(0)
d.O(new A.r(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.my(d,e,B.c.j(0.35),w,16)
l.z2(d,e,B.iM,5,12)},
cov(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.ms(d,e,D.cAW)
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
p=A.h0(h,B.cL,h,h,h,h,B.a7,B.cd,h,B.e4,B.ce)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dr_[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.eJ(r,h,h,B.cZ,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a4(d,new A.r(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cAY[o]
l=B.l4.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.eJ(m,h,h,B.cZ,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a4(d,new A.r(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}i.my(d,e,B.c.j(0.35),w*1.5,14)
i.my(d,e,B.eJ.j(0.55),-v*3.141592653589793*2,8)
i.my(d,e,B.oK.j(0.4),r*2.8,22)
i.z2(d,e,B.pK,8,10)
i.BZ(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.T()
v=new A.ar(B.U,B.S,B.X,B.Y,B.W)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.r(12,j),new A.r(t,j),v)}},
coW(d,e){var w,v,u,t,s,r,q,p,o=this
o.ms(d,e,W.aD9)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a5(20,r,u,r+10),B.hs)
$.T()
p=new A.ar(B.U,B.S,B.X,B.Y,B.W)
p.r=A.ap(B.h9,B.nL,(s+1)/2).gp(0)
d.aq(q,p)}o.my(d,e,B.h9.j(0.35),w,15)
o.BZ(d,e,8)},
coR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.ms(d,e,D.dn2)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.T()
m=new A.ar(B.U,B.S,B.X,B.Y,B.W)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.r(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.my(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.z2(d,e,B.qN,4,14)},
cp5(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.ms(d,e,D.d9R)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.T()
o=new A.ar(B.U,B.S,B.X,B.Y,B.W)
o.b=B.ae
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.r(w,u),q*(0.12+r*0.14+p),o)}n.z2(d,e,B.pO,6,12)
n.my(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cpf(d,e){var w,v,u,t,s,r,q,p=this
p.ms(d,e,D.cOQ)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a5(r,14,r+u,22),B.jN)
$.T()
q=new A.ar(B.U,B.S,B.X,B.Y,B.W)
q.r=A.ap(B.fy,B.bM,(s+1)/2).gp(0)
d.aq(r,q)}p.my(d,e,B.c.j(0.3),w,16)
p.BZ(d,e,8)
p.z2(d,e,B.wR,5,13)},
cp0(d,e){var w,v,u,t,s,r,q
this.ms(d,e,D.dgV)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a5(r,q,r+8,q+(18+s*22)),B.iD)
$.T()
r=new A.ar(B.U,B.S,B.X,B.Y,B.W)
r.r=[B.iJ,B.dH,B.bM,B.eH][t].j(0.85).gp(0)
d.aq(q,r)}this.my(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cp7(d,e){var w,v,u,t,s,r,q
this.ms(d,e,D.ddX)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.T()
q=new A.ar(B.U,B.S,B.X,B.Y,B.W)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.r(u*(0.1+r),s),new A.r(u*(0.18+r),s+10),q)}this.z2(d,e,B.cE,7,11)},
cpm(d,e){var w,v,u,t,s,r,q,p
this.ms(d,e,D.cRF)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a5(q,p,q+(t-s*8),p+16),B.hs)
$.T()
q=new A.ar(B.U,B.S,B.X,B.Y,B.W)
q.r=A.ap(B.cE,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.my(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cpk(d,e){var w,v,u,t,s,r,q
this.ms(d,e,D.dG9)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bx(new A.a5(s,r,s+28,r+8),B.hs)
$.T()
q=new A.ar(B.U,B.S,B.X,B.Y,B.W)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.BZ(d,e,6)},
coI(d,e){var w,v,u,t,s,r,q,p
this.ms(d,e,D.dlq)
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
p=new A.ar(B.U,B.S,B.X,B.Y,B.W)
p.r=B.hY.j(0.85).gp(0)
p.c=3
d.ah(new A.r(q,v),new A.r(q+s*6,t),p)}this.my(d,e,B.oQ.j(0.35),w,14)},
cp6(d,e){var w,v,u,t,s,r,q=this
q.ms(d,e,D.doi)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bZ(new A.r(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.T()
r=new A.ar(B.U,B.S,B.X,B.Y,B.W)
r.r=B.c.j(0.22).gp(0)
d.c1(s,r)}q.z2(d,e,B.qN,5,16)
q.BZ(d,e,7)},
cpi(d,e){var w,v,u,t,s,r,q,p,o=this
o.ms(d,e,D.dDn)
w=o.c
v=w*3.141592653589793
o.my(d,e,B.nL.j(0.55),v*3,10)
o.my(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.T()
p=new A.ar(B.U,B.S,B.X,B.Y,B.W)
p.r=B.nL.j(0.8).gp(0)
d.O(new A.r(v+r*34,u+q*22),4,p)}},
cpl(d,e){var w,v,u,t,s,r,q,p,o=this
o.ms(d,e,D.dGV)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a5(q,p,q+36,p+22),B.jN)
$.T()
q=new A.ar(B.U,B.S,B.X,B.Y,B.W)
q.r=A.ap(B.iM,B.oQ,r).gp(0)
d.aq(p,q)}o.BZ(d,e,9)
o.my(d,e,B.c.j(0.4),w*2.2,12)},
coB(d,e){var w,v,u,t,s,r,q,p
this.ms(d,e,D.duc)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bY(new A.r(v,u),34)
$.T()
s=A.L()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cQ(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.U,B.S,B.X,B.Y,B.W)
p.r=B.bP.j(0.85).gp(0)
d.O(new A.r(v+t*34,u+s*34),3,p)}},
cot(d,e){var w,v,u,t,s,r,q
this.ms(d,e,D.dpr)
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
this.my(d,e,B.lz.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.avz.prototype={
a1m(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1m=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aTN(),$async$a1m)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aaH(s),$async$a1m)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a1m,v)},
aiO(d){return this.crH(d)},
crH(d){var w=0,v=A.j(x.H),u=this,t
var $async$aiO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iGm(d),$async$aiO)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$aiO,v)},
B(d){var w,v,u=null,t=A.Q(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.kc:B.iL
w=x.p
v=A.a([C.aUa(!0,B.t_,1/0,B.rm,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.o(u,u,u,u,u,new A.a6(B.aU,B.b1,B.w,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bm,new A.bL(B.aU,u,u,new A.C(B.tB,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,B.aE6,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.de(D.bZX,u,D.fYg,new C.cs2(this,d),A.bp(B.aW,u,u,u,B.c,u,B.jE,u,u,u,u,B.cp)),1),B.aa,A.E(A.ei(D.c7Q,u,D.hcG,this.gcii(),A.dh(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jE,u,u,D.b8r,u,u,u,B.cp)),1)],w),B.l,u,B.e,B.h,0,u,u),u,u,8,8,u,u))
return new A.fP(1.7777777777777777,A.aE(!1,B.a3,!0,B.t_,new A.am(B.a0,u,B.b4,B.t,v,u),B.ap,t,0,u,u,u,u,u,B.ai),u)}}
C.aOX.prototype={
b0(){this.b8()
this.b5()
this.dT()},
t(){var w=this,v=w.bc$
if(v!=null)v.a8(0,w.gdO())
w.bc$=null
w.a2()}}
C.aX8.prototype={}
C.aX7.prototype={}
C.aVa.prototype={}
C.a05.prototype={
R(){return new C.aBQ()}}
C.aBQ.prototype={
Z(){var w,v,u=this
u.a3()
u.a.toString
w=new A.bb("",B.b5,B.aO)
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a2()},
Lu(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.T(D.fCX)
return}t=u.c
t.toString
v=u.e
A.a8(t,!1).N(new C.aX8(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.I,l=m?B.el:B.c,k=A.m(20),j=A.p(n,D.c7v,B.f,n,n,new A.o(B.aW.j(0.15),n,n,A.m(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bs,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.h,0,B.p),1)
j=A.A(A.a([j,B.ba,i,A.aH(n,n,n,n,A.V(B.cC,m?B.bv:B.bl,n,n,n,n),n,n,n,new C.dcT(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.h,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.N,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cF,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hE6(new C.dcU(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.kc:B.iL
r=A.m(12)
q=A.m(12)
p=m?B.eo:B.bP
t=A.aN(n,B.M,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bB(n,new A.b6(4,r,B.dx),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.al,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dcV(o),n,!1,n,n,!1,n,!0,n,B.ad,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a7,n,A0.LD,n,n,n,n)
u=m?B.aS:B.ax
m=m?B.eo:B.bP
return A.ez(n,l,new A.cP(B.lV,A.cc(A.w(A.a([j,B.aN,i,B.at,w,B.O,v,B.aN,t,B.bx,A.A(A.a([A.E(A.dV(B.dy,new C.dcW(d),A.dh(n,n,n,n,n,n,n,n,n,u,n,n,B.cq,n,new A.b9(A.m(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bH(D.hcX,n,o.ga4A(),A.bp(B.aW,n,n,n,B.c,n,B.cq,n,new A.b9(A.m(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.h,0,n,n)],h),B.B,n,B.e,B.P,0,B.p),B.t,n,B.y,n,n,B.Dl,n,n,B.ah),n),n,n,n,B.Dm,n,B.da,n,new A.b9(k,B.a1),n)}}
C.a04.prototype={
R(){return new C.aBP()}}
C.aBP.prototype={
Z(){this.a3()
var w=$.ay()
this.d!==$&&A.aT()
this.d=new A.au(B.ay,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a2()},
Lu(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.T(D.fAy)
return}v=this.c
v.toString
A.a8(v,!1).N(new C.aX7(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.I,o=p?B.el:B.c,n=A.m(20),m=A.p(q,D.c3N,B.f,q,q,new A.o(B.bU.j(0.15),q,q,A.m(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bs,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.h,0,B.p),1)
m=A.A(A.a([m,B.ba,l,A.aH(q,q,q,q,A.V(B.cC,p?B.bv:B.bl,q,q,q,q),q,q,q,new C.dcP(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.h,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.m(12)
v=A.K(B.aW.j(0.25),B.r,1)
u=A.V(B.ar1,B.aW.j(0.9),q,q,q,18)
l=A.p(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.h,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.m),q,q,q,q,B.bD,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.kc:B.iL
t=A.m(12)
s=A.m(12)
r=p?B.eo:B.bP
v=A.aN(q,B.M,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bB(q,new A.b6(4,t,B.dx),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.al,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.dcQ(this),q,!1,q,q,!1,q,!0,q,B.ad,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a7,q,B.kX,q,q,q,q)
w=p?B.aS:B.ax
p=p?B.eo:B.bP
return A.ez(q,o,new A.cP(B.lV,A.cc(A.w(A.a([m,B.aN,l,B.aB,v,B.bx,A.A(A.a([A.E(A.dV(B.dy,new C.dcR(d),A.dh(q,q,q,q,q,q,q,q,q,w,q,q,B.cq,q,new A.b9(A.m(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bH(D.hk9,q,this.ga4A(),A.bp(B.bU,q,q,q,B.c,q,B.cq,q,new A.b9(A.m(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.h,0,q,q)],k),B.B,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.Dl,q,q,B.ah),q),q,q,q,B.Dm,q,B.da,q,new A.b9(n,B.a1),q)}}
C.a_y.prototype={
R(){return new C.aAu()}}
C.aAu.prototype={
Z(){var w,v=this
v.a3()
w=$.ay()
v.d!==$&&A.aT()
v.d=new A.au(B.ay,w)
v.e!==$&&A.aT()
v.e=new A.au(new A.bb("1",B.b5,B.aO),w)
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
gKM(){var w,v=this.e
v===$&&A.d()
w=A.cA(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
galY(){var w=this.f
w===$&&A.d()
w=A.cA(B.a.i(w.a.a))
return w==null?0:w},
gb8y(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aSx(d){var w,v=B.i.D(this.gKM()+d,0.25,999999),u=B.i.fJ(v),t=this.e
t===$&&A.d()
if(v===u)u=B.o.v(B.i.M(v))
else{u=B.i.a5(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aJ(u,w,"")}t.sb1(0,u)
this.l(new C.cKn())},
aBr(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.kc:B.iL,s=A.m(14),r=A.m(14)
u=u?B.eo:B.bP
return A.bB(w,new A.b6(4,s,B.dx),w,B.bD,w,w,w,w,!0,new A.b6(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.ag4),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cij(d,e,f){return this.aBr(d,e,f,null)},
Lu(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.galY()<=0){s.c.K(x.q).f.T(D.fER)
return}r=s.c
r.toString
v=s.gKM()
u=s.galY()
t=s.gb8y()
A.a8(r,!1).N(new C.aVa(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uv(n),l=n?B.el:B.c,k=A.m(24),j=x.O,i=A.a([B.aW.j(0.22),B.bU.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bXQ,B.f,o,o,new A.o(o,o,A.K(B.aW.j(0.35),B.r,1),h,o,new A.a6(B.a5,B.a9,B.w,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bs,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cF,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1)
i=A.A(A.a([i,B.ba,h,A.aH(o,o,o,o,A.V(B.cC,n?B.bv:B.bl,o,o,o,o),o,o,o,new C.cKt(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.h,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aN(o,B.M,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.aBr(m,"Item name (optional)","Lumber, paint, labor\u2026",B.QX),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,A0.LD,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.C,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.kc:B.iL
t=A.m(14)
s=A.K(n?B.eo:B.bP,B.r,1)
r=A.aH(o,o,o,o,A.V(B.xx,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cKu(p),o,o,o,o,o,B.cp)
q=p.e
q===$&&A.d()
q=A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c9o,B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.ei,o,o,o,1,o,o,!1,"\u2022",o,new C.cKv(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.p(o,A.A(A.a([r,new A.a4(52,o,q,o),A.aH(o,o,o,o,A.V(B.ig,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cKw(p),o,o,o,o,o,B.cp)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.N,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.aBr(m,"Amount","0.00",B.hB),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,B.ei,o,o,o,1,o,o,!1,"\u2022",o,new C.cKx(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a7,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.h,0,o,o)
t=x.gv
u=A.B(new A.O(D.dhu,new C.cKy(p,m),t),t.k("aj.E"))
i=A.a([i,B.bx,v,B.aB,h,B.O,s,B.af,A.c_(B.bI,u,B.br,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.R,A.aN(o,B.M,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.cij(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.al,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cKz(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a7,o,B.kX,o,o,o,o)],w))}i.push(B.aN)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.K(B.aW.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.N,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gKM()===B.i.fJ(p.gKM())?B.i.M(p.gKM()):p.gKM()
s=p.gb8y()
r=A.BC(p.galY())
i.push(A.p(o,A.A(A.a([A.E(A.w(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.h,0,B.p),1),C.bIE(p.gKM()*p.galY(),B.b6,!1,B.u)],w),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a6(B.a5,B.a9,B.w,j,o,o),B.m),o,o,o,o,B.jG,o,o,o))
i.push(B.bx)
j=A.m(14)
h=n?B.eo:B.bP
h=A.dh(o,o,o,o,o,o,o,o,o,o,o,o,B.cq,o,new A.b9(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.N,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cKA(d),h),1),B.ar,A.E(A.de(D.auy,o,D.hg_,p.ga4A(),A.bp(B.aW,o,o,0,B.c,o,B.cq,o,new A.b9(A.m(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.h,0,o,o))
return A.ez(o,l,new A.cP(B.N4,A.cc(A.w(i,B.am,o,B.e,B.P,0,B.p),B.t,o,B.y,o,o,Aj.tH,o,o,B.ah),o),o,o,o,B.Pw,o,B.da,o,new A.b9(k,B.a1),o)}}
C.a3g.prototype={
R(){return new C.bAS()}}
C.bAS.prototype={
Z(){var w,v,u=this
u.a3()
w=u.a.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bb(w,B.b5,B.aO),v)},
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
r=r?B.kc:B.iL
v=A.aN(s,B.M,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bB(s,new A.b6(4,A.m(12),B.dx),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fwa(t,d),s,!1,s,s,!1,s,!0,s,B.ad,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a7,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.dy,new C.fwb(d),s),1)
r=A.bp(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.ez(s,q,new A.C(B.Dl,A.w(A.a([o,B.aB,v,B.aN,A.A(A.a([u,B.ar,A.E(A.bH(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fwc(t,d),r),1)],w),B.l,s,B.e,B.h,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,s,B.da,s,new A.b9(p,B.a1),s)}}
C.adJ.prototype={
a9(){return"WorksheetFrameStyle."+this.b}}
C.GK.prototype={
R(){return new C.bAQ(null,null)}}
C.bAQ.prototype={
Z(){var w,v=this
v.a3()
w=A.br(null,D.bEC,null,1,null,v)
w.cT(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bDK()},
gbFm(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bU,B.b6],x.O)
case 2:return A.a([B.bw,B.aW,B.b6],x.O)
case 3:return A.a([B.aH,B.ci,B.jU],x.O)
case 4:return A.a([B.fK,B.bU,B.fz],x.O)
case 0:return A.a([B.aW,B.bU,B.b6],x.O)}},
B(d){var w=A.Q(d),v=this.d
v===$&&A.d()
return new A.ea(A.c9(v,new C.fw8(this,new C.uv(w.ax.a===B.I)),null),null)}}
C.aAn.prototype={
R(){return new C.bAR(null,null)}}
C.bAR.prototype={
Z(){var w,v=this
v.a3()
w=A.br(null,B.o1,null,1,null,v)
w.cT(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bDL()},
B(d){var w=this.d
w===$&&A.d()
return A.c9(w,new C.fw9(this),null)}}
C.bAP.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a5(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aI($.T().r,B.ak,null,null,A.a([],x.v))
u.E(new A.jr(v))
w=A.L()
w.b=B.ae
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.aq(v,w)
w=A.L()
w.b=B.ae
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.zR(u)
t=A.a([],x.U)
w=new A.v9(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jY(y.B));--r
q=new A.C0(w,r)
w.jR()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aW9(d,q,r,o,0,0.2,4.2,0.92)
p.aW9(d,q,r,s,0.52,0.11,3.2,0.58)}},
aW9(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.i0Y(e.a.a,e,t,t+f*i,!0),r=A.aiS(s.gle().a.getBounds())
$.T()
w=A.L()
w.b=B.ae
w.c=j
w.d=B.bG
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a6(B.a5,B.a9,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Js,null).az(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aR4.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aR5.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.uv.prototype={}
C.avy.prototype={
R(){return new C.aIi()},
ge9(){return this.c}}
C.aIi.prototype={
Z(){var w=this
w.a3()
w.d=w.a.d
w.ajE()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.MC(w,v)
this.a2()},
ajE(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ajE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bH2(t.c,t.d.a),$async$ajE)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f3C(u,s))
return A.h(null,v)}})
return A.i($async$ajE,v)},
RF(){var w=0,v=A.j(x.H),u=this,t,s
var $async$RF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f3t(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.MC(t,s),$async$RF)
case 2:if(u.c!=null)u.l(new C.f3u(u))
return A.h(null,v)}})
return A.i($async$RF,v)},
Sc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Sc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.f3A(t,new C.uv(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$Sc)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aaH(q),$async$Sc)
case 6:case 5:t.l(new C.f3B(t,r))
w=7
return A.b(t.RF(),$async$Sc)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Sc,v)},
Xl(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xl=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iG6(r),$async$Xl)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f3o(t,new C.rH(B.o.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.RF(),$async$Xl)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Xl,v)},
cnC(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hTh(t,new C.f3s(u),w,v)},
adl(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b8c,w,w,B.m),w,22,w,w,w,w,w,22)},
acl(d){return this.bRF(d)},
bRF(d){var w=0,v=A.j(x.H),u=this
var $async$acl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f3r(u,d))
w=2
return A.b(u.RF(),$async$acl)
case 2:return A.h(null,v)}})
return A.i($async$acl,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.I,e=f?B.c7:B.hX,d=A.m(8),a0=A.V(Z.a3M,f?B.bv:B.bl,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.C(B.HX,A.A(A.a([a0,B.b7,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f3D(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.am(B.a0,g,B.b4,B.t,A.a([A.bv(A.m(22),C.aUa(!0,A.m(22),1/0,B.rm,g,d,1/0),B.ap),A.ao(10,A.de(D.c1G,g,D.hio,h.gb6t(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hd,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.aa(0,B.H,B.aW.j(f?0.5:0.38),B.eP,22),new A.aa(-4,B.H,B.bU.j(0.2),B.J,32)],w)
u=A.m(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.aa(-2,B.H,B.c.j(0.18),B.J,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bv(s,new A.am(B.a0,g,B.b4,B.t,A.a([C.aUa(!0,A.m(16),1/0,B.Ql,g,r.c,1/0),new A.bP(new A.o(g,g,g,g,g,new A.a6(B.aU,B.b1,B.w,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bm,g,g),A.ao(g,h.adl(!0),g,g,8,g,8,g),A.ao(g,A.cH2(h.adl(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cH2(h.adl(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cH2(h.adl(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.de(D.bYt,g,D.hbE,h.gb6t(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.hd,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.cb5,B.m),g,g,g,g,B.m6,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bj8,B.oI,B.hx],u):A.a([B.b6,B.aW,B.bU],u)
t=x.V
s=A.a([new A.aa(0,B.H,B.aW.j(f?0.45:0.35),B.eP,24)],t)
r=A.m(22)
p=A.ao(g,A.V(B.jH,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.p(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.m),g,g,g,g,B.ho,g,g,g)],a1),B.l,g,B.e,B.h,0,g,g),B.aB,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.aj,C.bIE(h.d.gxX(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.O,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cF,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.B,g,B.e,B.h,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.K(B.hm.j(0.75),B.r,1.6)
t=A.a([new A.aa(0,B.H,B.aH.j(0.28),B.cN,14)],t)
j=B.aH.j(0.22)
i=A.m(10)
u=A.p(g,A.bv(r,new A.am(B.a0,g,B.ac,B.t,A.a([p,new A.C(D.bJw,A.A(A.a([o,B.ar,A.aE(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eL(new A.C(B.x9,A.w(A.a([A.p(g,D.au7,B.f,g,g,new A.o(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.cu,g,g,g),B.fR,D.h0b],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcnB(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.h,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a6(B.aw,B.aD,B.w,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fP(1.7777777777777777,d,g),B.aN,w,B.O,u,B.bx,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,16,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aX,A.de(A9.a5z,g,D.fYX,h.gbFR(),A.bp(B.aW,g,g,g,B.c,g,B.hp,g,new A.b9(A.m(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.h,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.el:B.c
v=A.m(14)
u=A.K(f?B.eo:B.bP,B.r,1)
t=A.V(B.a47,f?B.bv:B.bl,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,g,g,g,B.N,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.w(A.a([t,B.R,s,B.aj,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.h,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.m),g,g,g,g,B.pX,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f3E(h,new C.uv(f)),A.U(w).k("O<1,x>")))
if(h.e)d.push(new A.C(B.zq,A.at(A.nk(g,f?B.bv:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bo(!0,A.w(A.a([new A.C(A_.Dc,a0,g),A.E(A.cc(A.w(d,B.B,g,B.e,B.h,0,B.p),B.t,g,B.y,g,g,E.zC,g,g,B.ah),1)],a1),B.B,g,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bJD(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.el:B.c,p=A.m(16),o=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.cN,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.baW,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.V(s?B.iw:B.h3,B.b6,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bK
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd40()
v=A.BC(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.B,u,B.bc,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bU.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bIE(d.c*d.d,B.b6,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a6(B.a5,B.a9,B.w,k,u,u),B.m),u,u,u,u,B.hd,u,u,u)
w=x.p
return A.p(u,A.bv(n,new A.Fa(A.A(A.a([m,A.E(new A.C(B.anN,A.A(A.a([l,B.ba,t,B.aa,k,A.aH(u,u,u,u,A.V(B.cC,(r?B.bv:B.bl).j(0.75),u,u,u,20),u,u,u,new C.f3p(this,d),u,u,u,u,u,B.cp)],w),B.l,u,B.e,B.h,0,u,u),u),1)],w),B.am,u,B.e,B.h,0,u,u),u),B.ap),B.f,u,D.b9L,new A.o(q,u,u,p,o,u,B.m),u,u,u,B.d2,u,u,u,u)}}
C.afP.prototype={
Fq(d){return this.bT2(d)},
bT2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Fq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pT(d,o,!1),$async$Fq)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
w=4
return A.b(A.bO(B.D4,null,x.H),$async$Fq)
case 4:s=t.d
w=5
return A.b(C.h6w(!0,o,s),$async$Fq)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.HG(r,"ngmy_project_"+A.aJ(s.b,q,"_"),!1),$async$Fq)
case 6:p=f
w=7
return A.b(M.pS(o,!1),$async$Fq)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Fq,v)},
a1o(d){return this.cEu(d)},
cEu(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a1o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pT(d,s,!1),$async$a1o)
case 3:if(!f||d.e==null){w=1
break}A.a8(d,!1).N(null)
A.he(d,new C.avs(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pS(s,!1),$async$a1o)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1o,v)},
RH(d){return this.cAq(d)},
cAq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$RH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(A.he(d,D.aNX,!0,"NgmyWorksheetProjectScan",x.N),$async$RH)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bIF(s),$async$RH)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.T(D.fDY)
w=1
break}q=C.htB(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dT(p,x.H),$async$RH)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$RH,v)},
a1p(d){return this.cN2(d)},
cN2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1p=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a8(d,!1).N(null)
w=3
return A.b(C.bI8(),$async$a1p)
case 3:s=f
if(s==null){w=1
break}r=C.htB(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dT(q,x.H),$async$a1p)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a1p,v)},
B(d){var w=this,v=null,u=A.Q(d).ax.a===B.I,t=new C.uv(u),s=w.d.d.length,r=u?B.el:B.c,q=A.m(28),p=A.a([new A.aa(0,B.H,B.v.j(u?0.35:0.08),B.kx,36)],x.V),o=x.p
return A.bo(!0,new A.C(B.x8,A.p(v,A.w(A.a([w.cD3(d,t,s),new A.C(D.bIV,A.w(A.a([w.b4q(t,"QR restore"),B.R,A.A(A.a([w.b4p(t,!0,B.jK,B.aH,B.aH,new C.f3G(w,d),"Show to scan","QR code"),B.ar,w.aBs(t,B.jL,B.b_,B.bj,new C.f3H(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.h,0,v,v),B.df,w.b4q(t,"Backup files"),B.R,A.A(A.a([w.aBs(t,B.hP,B.aW,B.bU,new C.f3I(w,d),"Full copy","Backup file"),B.ar,w.aBs(t,Q.Aj,B.as,B.aQ,new C.f3J(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.h,0,v,v)],o),B.B,v,B.e,B.h,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cD3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fo,B.cX,B.h7],k):A.a([B.b6,B.aW,B.bU],k)
w=A.ao(l,A.V(B.vJ,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.m),l,4,l,B.kM,l,l,l,36),l,l,l)
u=A.m(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.aa(0,B.H,B.v.j(0.2),B.cN,12)],x.V)
r=this.d
s=A.p(l,C.aUa(!0,A.m(13),64,D.bTz,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.C,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.adp,l,l,l)
r=C.bIE(r.gxX(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.am(B.a0,l,B.ac,B.t,A.a([w,new A.C(D.bJh,A.w(A.a([v,A.A(A.a([s,B.er,A.E(A.w(A.a([u,B.at,t,B.O,A.A(A.a([r,B.aa,A.p(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.m),l,l,l,l,B.f7,l,l,l)],m),B.l,l,B.e,B.h,0,l,l)],m),B.B,l,B.e,B.h,0,B.p),1),A.aH(l,l,l,l,A.V(B.cC,B.c.j(0.85),l,l,l,l),l,l,l,new C.f3F(d),l,l,l,A.np(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aWn,l,l,l,l),l,l)],m),B.B,l,B.e,B.h,0,l,l)],m),B.l,l,B.e,B.h,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a6(B.aw,B.aD,B.w,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b4q(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.h,0,w,w)},
b4p(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.amn:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eo:B.bP
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.aa(0,B.H,B.aH.j(0.12),B.cN,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.K(h.j(0.35),B.r,1)
t=A.p(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.m),r,r,r,r,B.tK,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aE(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eL(new A.C(E.a28,A.w(A.a([t,B.af,u,B.bs,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cF,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aBs(d,e,f,g,h,i,j){return this.b4p(d,!1,e,f,g,h,i,j)}}
C.avs.prototype={
R(){return new C.bpH()}}
C.bpH.prototype={
Z(){this.a3()
this.ahx()},
ahx(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ahx=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bIG(p.c,p.d),$async$ahx)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f3j(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f3k(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahx,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.I,f=g?B.CA:B.hX,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aH(h,h,h,h,A.V(B.eE,g?B.ab:B.an,h,h,h,18),h,h,h,new C.f3l(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.uv],u),B.l,h,B.e,B.h,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.fo,B.cX,B.h7],s):A.a([B.b6,B.aW,B.bU],s)
r=x.V
q=A.a([new A.aa(0,B.H,B.aW.j(g?0.4:0.3),B.eP,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dw,B.K,h,h)
p=C.bIE(p.gxX(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.w(A.a([o,B.aj,A.A(A.a([p,B.aa,A.p(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.m),h,h,h,h,B.f7,h,h,h)],u),B.l,h,B.bc,B.h,0,h,h)],u),B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a6(B.aw,B.aD,B.w,s,h,h),B.m),h,h,h,h,E.a2w,h,h,1/0)
t=g?D.buR:B.c
q=A.m(24)
p=A.K(w?B.aH.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.aa(0,B.H,B.v.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.WW,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eHf)
else{m=A.m(20)
l=A.K(B.bn,B.r,1)
o.push(A.p(h,A.qt(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h))}}o.push(B.aN)
n=w?B.aH:B.aW
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.K((w?B.aH:B.aW).j(0.35),B.r,1)
k=w?B.QC:B.Re
k=A.V(k,w?B.aH:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.h,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.m),h,h,h,h,B.hp,h,h,h))
return A.c6(h,f,A.bo(!0,A.w(A.a([new A.C(Ag.PI,e,h),A.E(A.cc(A.w(A.a([s,B.aN,A.p(h,A.w(o,B.l,h,B.e,B.h,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.m),h,h,h,h,B.vn,h,h,1/0)],u),B.l,h,B.e,B.h,0,B.p),B.t,h,B.y,h,h,E.ap2,h,h,B.ah),1)],u),B.l,h,B.e,B.h,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.avx.prototype={
R(){return new C.aIh(A.A9(B.P_,B.oC,B.vQ))}}
C.aIh.prototype={
t(){this.d.t()
this.a2()},
aQt(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j3(w,d)},
cjb(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iE5(t)
if(s!=null){this.aQt(s)
return}r=C.hII(t)
if(r!=null)q=A.d_(r,p,0)
else q=!1
if(q){this.aQt(B.a.i(B.a.aV(r,B.a.c8(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eS(A.a([A.aH(t,t,t,t,A.V(u.f?B.rr:Ab.QL,t,t,t,t,t),t,t,t,new C.f3n(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.CA,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.hbw,t,t,t,1,t,!0),q=A.A8(u.d,B.c0,u.gcja()),p=A.m(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.K(B.aW,B.r,3),p,A.a([new A.aa(2,B.H,B.aW.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.m(16)
return A.c6(r,B.v,new A.am(B.a0,t,B.b4,B.t,A.a([q,p,A.ao(32,A.p(t,D.hah,B.f,t,t,new A.o(w,t,A.K(B.aW.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jG,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aNh.prototype={
a9(){return"_WorksheetTab."+this.b}}
C.PB.prototype={
R(){return new C.aIj(D.afo,A.a([],x.D))},
bw(){return this.r.$0()},
ge9(){return this.c}}
C.aIj.prototype={
gcKL(){return J.bJO(this.e,0,new C.f45())},
Z(){this.a3()
$.aS.cS$.push(this)
this.wz()},
t(){$.aS.hM(this)
this.a2()},
jb(d){if(d===B.fY)this.wz()},
wz(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DW(q.a.c).d7(0,B.ki),$async$wz)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f41(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f42(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wz,v)},
J0(d){return this.bPJ(d)},
bPI(){return this.J0(null)},
bPJ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$J0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iG8(l,d),$async$J0)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.v(1000*Date.now())
r=s.a
q=s.b
p=new C.m_(l,r,q,D.dus,new A.W(Date.now(),0,!1))
w=4
return A.b(C.MC(t.a.c,p),$async$J0)
case 4:o=f
w=5
return A.b(t.wz(),$async$J0)
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
t.Fu(m)
case 1:return A.h(u,v)}})
return A.i($async$J0,v)},
Fu(d){return this.cnm(d)},
cnm(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$Fu=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.he(s,new C.avy(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$Fu)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.MC(u.a.c,t),$async$Fu)
case 5:case 4:w=6
return A.b(u.wz(),$async$Fu)
case 6:return A.h(null,v)}})
return A.i($async$Fu,v)},
wj(d){return this.c5a(d)},
c5a(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bI8(),$async$wj)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.he(r,D.aNX,!0,"NgmyWorksheetProjectScan",x.N),$async$wj)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bIF(q),$async$wj)
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
break}p=C.htB(s)
w=15
return A.b(C.MC(t.a.c,p),$async$wj)
case 15:o=f
w=16
return A.b(t.wz(),$async$wj)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.T(D.fCW)
w=1
break}r.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.Fu(p)
case 1:return A.h(u,v)}})
return A.i($async$wj,v)},
Pd(d){return this.bOk(d)},
bOk(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Pd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.f3N(d),s,null,!0,!0,x.y),$async$Pd)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pv(t.a.c,A.a([],x.D)),$async$Pd)
case 6:w=7
return A.b(t.wz(),$async$Pd)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.T(D.fB6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pd,v)},
cnA(d){var w=this.c
w.toString
A.bV(B.L,null,new C.f3W(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
ba8(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.kc
else w=B.c
v=A.m(16)
u=A.K(p?B.eo:B.bP,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.m),r,r,r,r,B.bS,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aE(!1,B.a3,!0,r,A.aM(!1,q,!0,A.p(r,A.w(A.a([s,B.af,t,B.bs,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.h,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.m),r,r,r,r,B.tG,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a1V(d,e){return this.cnn(d,e)},
cnn(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1V=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.L,null,new C.f3R(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a1V)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hTh(r,new C.f3S(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Pf(d,e),$async$a1V)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a1V,v)},
b75(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.m),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aC
else t=h.a?B.aS:B.ax
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.h,0,B.p),1)
return A.aE(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.C(A2.Di,A.A(A.a([s,B.ba,t,A.V(B.eL,w?B.bv:B.bl,u,u,u,u)],v),B.l,u,B.e,B.h,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cux(d,e,f,g,h,i){return this.b75(!1,d,e,f,g,h,i)},
Pf(d,e){return this.bOu(d,e)},
bOu(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Pf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lE(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Pf)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bGP(t.a.c,d.a),$async$Pf)
case 6:w=7
return A.b(t.wz(),$async$Pf)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Pf,v)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uv(n),l=n?B.c7:B.hX
if(p.f)n=D.bgT
else{w=A.aF(d,B.dK,x.w).w
v=p.bIJ(m)
u=p.c4e(m)
t=p.gbFJ()
if(n)s=B.kc
else s=B.c
r=A.m(13)
q=x.p
t=A.a([v,B.af,u,B.aN,new C.GK(A.p(o,A.A(A.a([p.aF4(P.Qk,"Projects",m,D.afo),p.aF4(B.vt,"Cashier",m,D.b4E),p.aF4(B.Ie,"Family Tree",m,D.i0c)],q),B.l,o,B.e,B.h,0,o,o),B.f,o,o,new A.o(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eD,0.95,t,o),B.bx],q)
v=p.d
if(v===D.afo){v=J.ad(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aX,new C.aAn(p.gaUU(),o)],q),B.l,o,B.e,B.h,0,o,o),B.aB,p.cuz(m)],q))}else{n=p.a
if(v===D.b4E)t.push(new C.arj(n.c,m,o))
else{v=p.r
t.push(new C.asx(n.c,n.d,n.e,n.f,new C.f48(p),new C.f49(p),new A.bg(v,x.b4)))}}n=A.cc(A.w(t,B.B,o,B.e,B.h,0,B.p),B.t,o,B.y,o,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c6(o,l,A.bo(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bIJ(d){var w=null,v=A.m(8),u=d.a,t=A.V(Z.a3M,u?B.bv:B.bl,w,w,w,16)
return A.aM(!1,v,!0,new A.C(B.k_,A.A(A.a([t,B.b7,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f3K(this),w,w,w,w,w,w,w)},
gbFJ(){switch(this.d.a){case 0:return D.aex
case 1:return D.hNO
case 2:return D.aey}},
c4e(d){var w=null,v=A.m(15),u=A.a([new A.aa(0,B.H,B.aW.j(0.35),B.cy,16)],x.V),t=x.p,s=A.A(A.a([A.p(w,D.c3B,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,44,w,w,w,w,w,44),B.ba,D.bNT,A.aE(!1,B.a3,!0,w,A.aM(!1,A.m(12),!0,A.p(w,D.c0V,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f3O(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.h,0,w,w),r=B.b6.j(0.55),q=A.m(12)
return new C.GK(A.p(w,A.w(A.a([new A.C(B.HP,s,w),A.p(w,A.w(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.BC(this.gcKL()),w,w,w,w,w,w,D.fV4,w,w,w)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.m),w,w,w,B.tF,B.jG,w,w,1/0)],t),B.B,w,B.e,B.h,0,B.p),B.f,w,w,new A.o(B.aW,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hNN,w)},
aF4(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aW:B.L,q=A.m(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.aa(0.5,B.H,B.aW.j(0.42),B.cN,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bl
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bl
return A.E(A.aE(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cY(u,A.A(A.a([w,B.e0,new A.d0(1,B.c9,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bc,B.h,0,u,u),u,u,B.cn,new A.o(r,u,p,q,o,u,B.m),B.j4,u,u,u,u,B.HY,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f44(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cuz(d){var w,v,u,t,s,r,q=this,p=null
if(J.cx(q.e)){w=d.a
v=w?B.el:B.c
u=A.m(15)
t=A.p(p,D.c11,B.f,p,p,new A.o(p,p,p,p,A.a([new A.aa(2,B.H,B.aW.j(0.5),B.eP,28)],x.V),D.cdG,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.ax,p,p,p,p,p,p,p,p,18,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GK(A.p(p,A.w(A.a([t,B.df,s,B.O,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.eb,A.A(A.a([A.E(q.aWv(B.jL,"Scan QR",new C.f3Z(q),d),1),B.ar,A.E(q.aWv(Q.Aj,"Upload file",new C.f4_(q),d),1)],r),B.l,p,B.e,B.h,0,p,p),B.aB,A.bH(D.hm8,p,q.gaUU(),A.bp(B.aW,p,p,p,B.c,B.ht,p,p,new A.b9(A.m(12),B.a1),p,p,p))],r),B.l,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bKn,1.05,D.aex,p)}w=J.b8(q.e,new C.f40(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GK(A.w(w,B.l,p,B.e,B.h,0,B.p),16,B.bS,1,D.aex,p)},
aWv(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.K(B.aW.j(0.45),B.r,1)
return A.aE(!1,B.a3,!0,u,A.aM(!1,t,!0,A.p(w,A.w(A.a([A.V(d,B.b6,w,w,w,26),B.O,A.c(e,w,w,w,w,w,w,D.fTe,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.m),w,w,w,w,Aw.a1V,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cuy(d,e){var w,v,u=null,t=e.a,s=t?B.el:B.c,r=A.m(14),q=A.K(t?B.eo:B.bP,B.r,1),p=A.a([new A.aa(0,B.H,B.v.j(t?0.35:0.08),B.eF,10)],x.V),o=A.m(14),n=t?B.bv:B.bl
n=A.bv(B.Z5,new A.fP(1.7777777777777777,C.aUa(!0,B.ft,1/0,P.Qk,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.w(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.BC(d.gxX()),u,u,u,u,u,u,D.fRb,u,u,u)],w),B.B,u,B.e,B.h,0,B.p),1)
return A.p(u,A.aE(!1,B.a3,!0,u,A.aM(!1,o,!0,A.w(A.a([n,new A.C(B.bD,A.A(A.a([v,A.aH(u,u,u,u,A.V(An.a4P,t?B.bv:B.bl,u,u,u,u),u,u,u,new C.f3X(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.h,0,u,u),u)],w),B.B,u,B.e,B.h,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f3Y(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.o(s,u,q,r,p,u,B.m),u,u,u,B.dV,u,u,u,1/0)}}
C.bCE.prototype={}
C.rH.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd40(){var w,v,u,t,s=this.c
if(s===B.i.fJ(s))w=B.o.v(B.i.M(s))
else{v=B.i.a5(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aJ(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.m_.prototype={
gxX(){return B.d.cD(this.d,0,new C.cJJ())},
ak(){var w=this,v=w.d,u=A.U(v).k("O<1,a9<n,@>>")
v=A.B(new A.O(v,new C.cJI(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bhA(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.m_(w.a,w.b,v,u,w.e)},
bhj(d){return this.bhA(d,null)},
Uq(d){return this.bhA(null,d)}}
C.IO.prototype={
a9(){return"FamilyGender."+this.b}}
C.ic.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hOh(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aHR(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.ic(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.anv.prototype={
a9(){return"FamilyTreeAccessRole."+this.b}}
C.le.prototype={
garV(){var w=this.f
return new A.X(w,new C.bVG(),A.U(w).k("X<1>")).gJ(0)},
ak(){var w=this,v=w.f,u=A.U(v).k("O<1,a9<n,@>>")
v=A.B(new A.O(v,new C.bVF(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.iw_(w.y),"games",w.z],x.N,x.z)},
xh(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.le(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bhz(d,e){var w=null
return this.xh(w,w,w,d,e,w,w,w,w)},
cUc(d,e,f,g,h,i,j){return this.xh(d,e,null,f,g,h,i,j,null)},
aHW(d,e){var w=null
return this.xh(w,w,w,w,d,w,w,e,w)},
cUe(d,e,f,g,h,i,j,k){return this.xh(d,e,null,f,g,h,i,j,k)},
cSI(d){var w=null
return this.xh(w,w,w,w,w,w,w,d,w)},
cT5(d){var w=null
return this.xh(w,w,w,w,w,w,w,w,d)},
bhd(d){var w=null
return this.xh(w,w,d,w,w,w,w,w,w)},
aHG(d){var w=null
return this.xh(w,w,w,w,w,d,w,w,w)},
cTK(d,e,f){var w=null
return this.xh(w,d,w,w,e,w,w,f,w)},
cSv(d){var w=null
return this.xh(w,w,w,d,w,w,w,w,w)},
cTh(d,e){var w=null
return this.xh(d,w,w,w,w,w,e,w,w)}}
C.cJK.prototype={
a9(){return"WrapAlignment."+this.b}}
C.cJL.prototype={
a9(){return"WrapCrossAlignment."+this.b}}
C.aKq.prototype={}
C.bcU.prototype={
aj(d){this.a=d.a
this.b=d.b},
d1(d){var w=new C.bcU()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b5(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bcT.prototype={
gx9(){return!0},
gH4(){return this.z.b<this.b.length},
aYb(d){switch(0){case 0:return d.a.c}},
aXS(d){switch(0){case 0:return d.a.d}},
bYE(d,e){switch(0){case 0:return new A.i7(d,e)}},
bY1(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hm(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.jb(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ix(b4)
switch(0){case 0:v=b5.b
u=new A.lb(0,v,0,1/0)
t=w===B.WO
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fB(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hm(b4,u,!0)
f=b1.aYb(g)
f.toString
e=b1.aXS(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aKq(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aKq(k,j,i))}d=s.length
switch(0){case 0:q=b5.cE(new A.i7(m,l))
a0=q.a
a1=q.b
b1.a=new A.jb(0,0,a0,a1)
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
a8=b1.aYb(g)
e=b1.aXS(g)
e.toString
a9=b1.bY1(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bYE(a6,a3+a9)
b0=g.a
g.a=new A.jb(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h_(d){var w,v,u,t,s,r=this
r.lE(d)
w=d.b
w.iz()
v=A.dB()
u=r.a
v.ei(u.a,u.b,0,1)
w.pz(0,v)
for(u=r.z,u=B.d.dv(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].h_(d)
w.nI(0)},
HC(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iz(){return this.z}}
C.bAT.prototype={}
var z=a.updateTypes(["az<~>()","P(ic)","~()","P(le)","P(nM)","a9<n,@>(le)","G(le,le)","G(ic,ic)","n(ic)","le(a9<@,@>)","P(m_)","nM(a9<@,@>)","a9<n,@>(nM)","P(vb)","vb()","G(ic)","ai<ic>()","P(zT)","a18(Z)","n?(ic)","eP<n?>(ic)","az<~>(m_)","P(rH)","a9<n,@>(ic)","ic(a9<@,@>)","G(m_,m_)","P(ah9)","~(bh)","x(p7)","G(G,ab8)","P(qX<G>)","~(qX<G>)","UK(Z)","P(Ne)","P(va)","~(ic)","n(n)","X4(Z)","UJ(Z)","afu(Z)","a03(Z)","ic(ic)","cR(bw<n,GZ>)","cR(Lg)","a0x(Z)","G?(ic)","ic()","P(Lg)","C(ic)","~(IO)","a0t(Z)","x(IO,n,a0)","P(ah2)","bw<n,ai<a9<n,@>>>(n,ai<nM>)","a0v(Z)","+count,id,name(G,n,n)(le)","n(le)","a1s(Z)","a1t(Z)","P(mi)","mi()","a_y(Z)","a3g(Z)","a05(Z)","a04(Z)","~(G)","~(n,lN?)","x(rH)","afP(Z)","~(lJ)","az<~>([n?])","H(H,m_)","x(m_)","H(H,rH)","a9<n,@>(rH)","rH(a9<@,@>)","ai<lN>()","va()","n(W)","m_(a9<@,@>)","cp(IN)","n(m_)","a9<n,@>(m_)","G(nM,nM)","le(a9<n,@>)","le(le)"])
C.fZ8.prototype={
$1(d){return d.a+" "+d.b},
$S:131}
C.fZ7.prototype={
bqY(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rx(s,d,B.ii,"book",E.HC),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A.Mm(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bqY(d)},
$S:262}
C.fZ9.prototype={
$1(d){return d.b},
$S:131}
C.h8M.prototype={
$1(d){var w=null
return A.ez(w,B.L,new H.R2(this.a,this.b,w),w,w,0,B.a2a,w,B.da,w,w,w)},
$S:46}
C.fLT.prototype={
$1(d){return d!=null},
$S:209}
C.fLU.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:209}
C.fLZ.prototype={
$1(d){if(this.a)return new A.r(d.a*520,d.b*160)
return d},
$S:168}
C.fWN.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fk(d,w,w,w,A.hr(w,B.ul,w,w,w,w,w,w,w,B.dL,w,w,10.5,w,B.eN,w,!0,w,w,w,w),w),u=f?B.eN:B.xj
return new A.ou(D.bFF,A.abX(A.a([new A.ha(130,w,v),new A.zS(1,B.I8,A.fk(e,w,w,w,A.hr(w,g==null?D.eJE:g,w,w,w,w,w,w,w,B.dL,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.zi,B.md))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2013}
C.fWM.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.wl(999)
f=A.xW(A.mc(h,A.fk("Cashier",h,h,h,A.hr(h,D.Be,h,h,h,h,h,h,h,B.dL,h,h,10,h,B.eN,h,!0,h,h,h,h),h),h,new A.lc(D.eJv,h,f,B.io,h),h,h,D.bG8,h))
w=A.xW(A.fk("Debt receipt",h,h,h,A.hr(h,h,h,h,h,h,h,h,h,B.dL,h,h,22,h,B.eN,h,!0,h,h,h,h),h))
v=A.xW(A.fk(C.xC(new A.W(Date.now(),0,!1),!0),h,h,h,D.acV,h))
u=A.wl(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fk(s,h,h,h,A.hr(h,h,h,h,h,h,h,h,h,B.dL,h,h,14,h,B.eN,h,!0,h,h,h,h),h)
r=A.fk("Person who owes",h,h,h,D.acV,h)
q=A.wl(10)
p=x.Z
u=A.mc(h,A.zK(A.a([s,new A.ha(h,2,h),r,new A.ha(h,10,h),A.mc(h,A.zK(A.a([A.fk("Amount owed",h,h,h,D.acV,h),new A.ha(h,2,h),A.fk(A.BC(t.c),h,h,h,A.hr(h,D.Be,h,h,h,h,h,h,h,B.dL,h,h,20,h,B.eN,h,!0,h,h,h,h),h)],p),B.tv,B.md),h,new A.lc(B.qm,h,q,B.io,h),h,h,D.bFl,1/0)],p),B.tv,B.md),h,new A.lc(E.aPj,h,u,B.io,h),h,h,D.bHm,1/0)
q=new A.od(D.eJy,0.9,B.lv)
r=A.wl(12)
s=i.c
o=s.$2("Original due",C.xC(t.r,!1))
n=s.$2("Current due",C.xC(t.f,!1))
m=i.d
l=new A.od(m,1.1,B.lv)
k=A.wl(8)
j=i.a
k=A.a([o,n,new A.ha(h,6,h),A.mc(h,A.xW(A.fk(t.gaP0(),h,h,h,A.hr(h,m,h,h,h,h,h,h,h,B.dL,h,h,11,h,B.eN,h,!0,0.5,h,h,h),h)),h,new A.lc(h,new A.qi(l,l,l,l),k,B.io,h),h,h,D.bGh,1/0),new A.ha(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Be))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Be))
else{n=A.fk("Missed days ("+n+")",h,h,h,A.hr(h,B.ul,h,h,h,h,h,h,h,B.dL,h,h,10.5,h,B.eN,h,!0,h,h,h,h),h)
m=A.U(o).k("O<1,Uj>")
o=A.B(new A.O(o,new C.fWL(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.ha(h,4,h),n,new A.ha(h,6,h),new C.bcT(5,5,new C.bcU(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.ha(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.ha(h,8,h),w,new A.ha(h,3,h),v,new A.ha(h,16,h),u,new A.ha(h,10,h),A.mc(h,A.zK(k,B.zi,B.md),h,new A.lc(h,new A.qi(q,q,q,q),r,B.io,h),h,h,B.anR,1/0)],p)
w=j.a
if(w!=null){v=new A.od(B.KK,1,B.lv)
B.d.u(f,A.a([new A.ha(h,16,h),A.fk("Debtor signature",h,h,h,A.hr(h,B.ul,h,h,h,h,h,h,h,B.dL,h,h,10,h,B.eN,h,!0,h,h,h,h),h),new A.ha(h,6,h),A.mc(h,new A.J4(w,B.Zh,h,h),h,new A.lc(h,new A.qi(v,v,v,v),A.wl(6),B.io,h),82,h,B.PF,1/0)],p))}f.push(new A.ha(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fk(w,h,h,h,D.fJe,h))
f.push(new A.ha(h,18,h))
f.push(A.xW(A.fk("NGMY.ORG",h,h,h,A.hr(h,D.Be,h,h,h,h,h,h,h,B.dL,h,h,14,h,B.eN,h,!0,1.8,h,h,h),h)))
return f},
$S:362}
C.fWL.prototype={
$1(d){var w=null,v=new A.od(D.KL,0.7,B.lv),u=A.wl(999)
return A.mc(w,A.fk(C.xC(d,!1),w,w,w,A.hr(w,D.KL,w,w,w,w,w,w,w,B.dL,w,w,9.5,w,B.eN,w,!0,w,w,w,w),w),w,new A.lc(w,new A.qi(v,v,v,v),u,B.io,w),w,w,D.bLO,w)},
$S:2014}
C.cb_.prototype={
$1(d){var w=null,v=B.bA.j(0.08),u=A.m(999),t=A.K(B.bA.j(0.28),B.r,1)
return A.p(w,A.c(C.xC(d,!1),w,w,w,w,w,w,D.fQD,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.m),w,w,w,w,B.f_,w,w,w)},
$S:2015}
C.h9j.prototype={
$1(d){var w=null,v=A.aF(d,B.c_,x.w).w,u=A.m(26),t=A.aH(w,w,w,w,D.c4C,w,w,w,new C.h9g(d),w,w,w,w,w,B.cp),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.ez(w,B.L,new A.cP(new A.aY(0,380,0,v.a.b*0.9),A.aE(!1,B.a3,!0,u,new A.C(B.a1W,A.w(A.a([new A.bL(B.a9,w,w,t,w),new A.d0(1,B.c9,A.cc(A.w(A.a([new A.ea(new C.b1M(r,w),s),B.R,A.A(A.a([A.E(A.ei(B.As,w,D.hij,new C.h9h(s,r,d),A.dh(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fc,w,new A.b9(A.m(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.de(B.a5p,w,D.heF,new C.h9i(r,d),A.bp(B.b6,w,w,w,B.c,w,B.fc,w,new A.b9(A.m(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.h,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.ax,0,w,w,w,w,w,B.ai),w),w,w,0,B.a2o,w,B.da,w,w,w)},
$S:46}
C.h9g.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h9h.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.bk$.x.h(0,t.a)
m=m==null?null:m.gbf()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.ly(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.hq),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eW(B.dM.gaS(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aJ(q,p,"_")
if(o.length>32)o=B.a.av(o,0,32)
w=5
return A.b(A.rA(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.h9i.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h34(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.T(A.b0(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.h9b.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.ez(w,B.ax,A.w(A.a([new A.C(D.bHa,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.nD,w,w,w),1),A.aH(w,w,w,w,B.lJ,w,w,w,new C.h99(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),w),new A.d0(1,B.c9,new A.C(B.eY,A.bv(A.m(14),A.h7(t,B.z,w,w,B.cr,B.dE,!1,w,!1,w,w),B.ap),w),w),new A.C(B.Pl,new A.a4(1/0,w,A.de(B.oh,w,D.aZN,new C.h9a(t,this.c,d),A.bp(B.b6,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.Px,w,B.da,w,new A.b9(v,B.a1),w)},
$S:46}
C.h99.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h9a.prototype={
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
C.h9n.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.ez(w,B.ax,new A.C(D.bHi,A.w(A.a([A.A(A.a([D.bMZ,A.aH(w,w,w,w,B.lJ,w,w,w,new C.h9l(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.h,0,w,w),B.O,new A.ea(A.bv(A.m(14),A.p(w,A.b4(w,w,w,new C.bfb(s.ax,w),B.aA),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.af,new A.a4(1/0,w,A.de(B.oh,w,D.aZN,new C.h9m(t,s,d),A.bp(B.b6,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.da,w,new A.b9(v,B.a1),w)},
$S:46}
C.h9l.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.h9m.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.bk$.x.h(0,t.a)
n=n==null?null:n.gbf()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.ly(2.5),$async$$0)
case 4:w=3
return A.b(e.ho(B.hq),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aJ(r,q,"_")
if(p.length>32)p=B.a.av(p,0,32)
r=J.eW(B.dM.gaS(s))
w=5
return A.b(A.rA(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.T(A.b0(null,null,null,null,null,B.t,null,A.c(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fQR.prototype={
$1(d){return d.a===this.a},
$S:267}
C.dVn.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dV8.prototype={
bq9(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.el:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dVb(s,q,e),p,!0,!0,!1,B.L3,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dVc(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bq9(d,e)},
$S:2016}
C.dVb.prototype={
$1(d){var w,v=null,u=this.c===B.xT,t=u?D.dBR:D.dxa
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.ax,v,v,v,v,v,v,v,v,15,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bo(!0,new A.C(B.aop,A.w(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.iM(!0,v,v,B.y,D.fzF,new C.dVa(this.a,w,t,d),t.length,v,B.e8,B.ah,!0)],x.p),B.am,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:32}
C.dVa.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cX.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.m(14)
if(q)u=B.cX
else u=(t.b.a.d.a?B.bv:B.bl).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.p(B.z,C.b1L(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dV9(t.d,r),s,s,s,s,s,s,s)},
$S:174}
C.dV9.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.dVc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dV6.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:89}
C.dV7.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cM(B.cn,e,v)
return new A.dd(e,!1,A.iC(B.z,A.at(A.aE(!1,B.a3,!0,v,new A.e8(new C.dV5(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bk(t,new A.bq(0.96,1,u),u.k("bk<bS.T>"))),v)},
$S:34}
C.dV5.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aF(d,B.c_,x.w).w,i=l.b,h=i.a.d.a,g=h?B.el:B.c,f=A.m(14),e=A.K((h?B.bv:B.bl).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,16,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.C(B.eD,A.V(B.cC,i.a.d.a?B.bv:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dUR(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.h,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aX1("Name")
r=l.a
q=r.d==null?k:new C.dUS(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bt:B.mr
n=A.K(B.cX.j(0.35),B.r,1)
m=r.d
t=A.aN(k,B.M,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.aHO(new A.C(B.fb,A.aM(!1,p,!0,A.p(B.z,C.b1L(m==null?"\ud83d\udc64":A.fXD(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cu,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.kX,k,B.acK,k,k)
v=A.a([v,B.af,t,B.O,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.aj,A.A(A.a([A.E(i.aXI("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dUT(r,a0),r.d===B.xT),1),B.aa,A.E(i.aXI("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dUY(r,a0),r.d===B.a9h),1)],u),B.l,k,B.e,B.h,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.O,new A.bL(B.a5,k,k,A.hy(D.c2Q,D.hgA,new C.dUZ(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cX,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cp)),k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.tT(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aN(k,B.M,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aX2("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.al,k,k,s,k,k,B.ei,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.R)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.K((t?B.bv:B.bl).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xC(r.a,!1)
v.push(A.aE(!1,B.a3,!0,q,A.aM(!1,p,!0,A.p(k,A.A(A.a([A.E(A.w(A.a([t,B.bs,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.h,0,B.p),1),D.c_n],u),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.m),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dV_(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.O,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.R)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aN(k,B.M,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aX1("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.al,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a7,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,12.5,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b5r(r.b.length!==0,B.mB,new C.dV0(r,i,a0),new C.dV1(r,a0),"Upload from gallery","ID photo"))
v.push(i.b5r(r.c.length!==0,D.bTx,new C.dV2(r,i,d,a0),new C.dV3(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Ar.a9N("Signature (optional)",t,new C.dV4(a0),new C.dUU(a0,t),new C.dUV(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bv:B.bl
s=(i?B.bv:B.bl).j(0.28)
s=A.E(A.dV(E.aZG,new C.dUW(d),A.dh(k,k,k,k,k,k,k,k,k,t,k,k,B.rf,k,new A.b9(A.m(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cX,k,k,k,B.c,k,B.rf,k,new A.b9(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bH(A.c(h?"Save":"Update",k,k,k,k,k,k,B.wl,k,k,k),k,new C.dUX(r,w,d),t),1)],u),B.l,k,B.e,B.h,0,k,k))
return A.p(k,A.cc(A.w(v,B.am,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.m),k,k,k,B.ri,B.jG,k,k,360)},
$S:175}
C.dUR.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dUS.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dUT.prototype={
$0(){return this.b.$1(new C.dUQ(this.a))},
$S:0}
C.dUQ.prototype={
$0(){var w=this.a
w.d=B.xT
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dUY.prototype={
$0(){return this.b.$1(new C.dUP(this.a))},
$S:0}
C.dUP.prototype={
$0(){var w=this.a
w.d=B.a9h
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dUZ.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dV_.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wh(null,u.b,A.c2(2020,1,1,0,0,0,0,0),null,s,A.c2(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dUO(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUO.prototype={
$0(){var w=this.b
return this.a.a=A.c2(w.gck(),w.gci(),w.gcB(),0,0,0,0,0)},
$S:0}
C.dV0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.QV(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dUN(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUN.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dV1.prototype={
$0(){return this.b.$1(new C.dUM(this.a))},
$S:0}
C.dUM.prototype={
$0(){return this.a.b=""},
$S:0}
C.dV2.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.el:B.c
w=3
return A.b(A.bV(q,null,new C.dUK(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.QV(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dUL(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUK.prototype={
$1(d){var w=null
return A.bo(!0,A.w(A.a([A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.atY,w,w,w,w,new C.dUE(d),!1,w,w,w,w,w,w,w,D.h6y,w,w,w),A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.atW,w,w,w,w,new C.dUF(d),!1,w,w,w,w,w,w,w,D.hdD,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:32}
C.dUE.prototype={
$0(){A.a8(this.a,!1).N("camera")
return null},
$S:0}
C.dUF.prototype={
$0(){A.a8(this.a,!1).N("gallery")
return null},
$S:0}
C.dUL.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dV3.prototype={
$0(){return this.b.$1(new C.dUJ(this.a))},
$S:0}
C.dUJ.prototype={
$0(){return this.a.c=""},
$S:0}
C.dV4.prototype={
$0(){return this.a.$1(new C.dUI())},
$S:0}
C.dUI.prototype={
$0(){},
$S:0}
C.dUU.prototype={
$0(){return this.a.$1(new C.dUH(this.b))},
$S:0}
C.dUH.prototype={
$0(){return B.d.a6(this.a)},
$S:0}
C.dUV.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ak4(u.a,null,null,new C.dUG(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dUG.prototype={
$4(d,e,f,g){this.a.$1(new C.dUD(this.b,d))},
$S:449}
C.dUD.prototype={
$0(){var w=this.a
B.d.a6(w)
B.d.u(w,this.b)},
$S:0}
C.dUW.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dUX.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.T(D.fEQ)
return}if(w.a.d==null){w.c.K(x.q).f.T(D.fBF)
return}A.a8(w.c,!1).N(!0)},
$S:0}
C.dVq.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:89}
C.dVr.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.el:B.c,n=A.m(14),m=A.K((p?B.bv:B.bl).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,16,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BC(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.A5(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.A5(r).length>0?B.bA:B.cX,r,r,r,r,r,r,r,r,12,r,r,B.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bl
t=(q?B.bv:B.bl).j(0.28)
s=x.p
return new A.dd(e,!1,A.at(A.aE(!1,B.a3,!0,r,A.p(r,A.w(A.a([p,B.O,v,u,B.aB,A.A(A.a([A.E(A.dV(B.ov,new C.dVo(d),A.dh(r,r,r,r,r,r,r,r,r,w,r,r,B.jE,r,new A.b9(A.m(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bH(D.he4,r,new C.dVp(d),A.bp(B.cX,r,r,r,B.c,r,B.jE,r,new A.b9(A.m(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.h,0,r,r)],s),B.am,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.m),r,r,r,B.zD,B.HP,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dVo.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dVp.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dVk.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dVl(r),p=r.a.d.a,o=p?B.el:B.c,n=A.m(14),m=A.K((p?B.bv:B.bl).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.ax,s,s,s,s,s,s,s,s,14,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BC(l.c),s,s,s,s,s,s,D.fSf,s,s,s)],p),B.l,s,B.e,B.h,0,s,s)
w=A.j9((r.a.d.a?B.bv:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a47,"View receipt",new C.dVd(r,d,l))
u=l.x!=null
t=u?B.q7:B.ro
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bHf,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dVe(r,d,l)),q.$3$icon$label$onTap(B.DB,"Edit",new C.dVf(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mB,"View / download ID",new C.dVg(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bTw,"View / download selfie",new C.dVh(r,d,l)))
if(l.gaJB())p.push(q.$3$icon$label$onTap(B.a5f,"View / download signature",new C.dVi(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bA,B.eq,"Delete",new C.dVj(r,d,l)))
p.push(B.at)
return A.bo(!0,new A.C(B.tF,A.p(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:32}
C.dVl.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.ax
else w=d
return A.aM(!1,v,!0,new A.C(B.eZ,A.A(A.a([A.V(e,w,v,v,v,20),B.ba,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2017}
C.dVd.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h9f(w,this.c)},
$S:0}
C.dVe.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.TJ(this.c)},
$S:0}
C.dVf.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.E9(this.c)},
$S:0}
C.dVg.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bJ_(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dVh.prototype={
$0(){var w,v,u
A.a8(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bJ_(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dVi.prototype={
$0(){A.a8(this.b,!1).N(null)
var w=this.a.c
w.toString
C.h9k(w,this.c)},
$S:0}
C.dVj.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.QU(0,this.c)},
$S:0}
C.dVs.prototype={
$1(d){return d.x==null},
$S:267}
C.dVt.prototype={
$1(d){return d.x!=null},
$S:267}
C.dVu.prototype={
$2(d,e){return d+e.c},
$S:2018}
C.dVv.prototype={
$0(){return this.a.bGf()},
$S:0}
C.dVm.prototype={
$0(){return this.a.ahK(this.b)},
$S:0}
C.fRC.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fRD.prototype={
$0(){return B.d.gG(D.a6x)},
$S:z+77}
C.dkm.prototype={
$0(){var w=this.a
return w.l(new C.dkk(w,this.b))},
$S:0}
C.dkk.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dkl.prototype={
$0(){},
$S:0}
C.dkn.prototype={
$0(){var w=this.a.gc4Z()
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.fUa.prototype={
$1(d){return C.hxX(A.a_(d,x.N,x.z))},
$S:z+11}
C.fUb.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fUc.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.h7O.prototype={
$1(d){return d.ak()},
$S:z+12}
C.hgx.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fQI.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bUn.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eF(e,v)?v:null},
$S:2019}
C.h8p.prototype={
$1(d){var w=this
return new C.a0v(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dl1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dl0(w,d))},
$S:z+80}
C.dl0.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkQ.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dkN.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dko.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dkp.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dkR.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dkx.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.I,u=v?B.el:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.el(A.a([A.bJ(!1,B.dy,w,w,!0,w,w,w,new C.dkv(d),w,w),A.bH(B.yi,w,new C.dkw(d),A.bp(B.nO,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dkv.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dkw.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dky.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dkO.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dkP.prototype={
$0(){return B.d.gG(D.AF)},
$S:z+14}
C.dkt.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzr(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.UJ(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dku.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkz.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a03(v,u,J.ad(w.d),null)},
$S:z+40}
C.dkA.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dl_.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a_I(r.y,r.gzr(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dkY(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bew(v,e,w,u,t,r.gbX6(),C.hOg(r.y.Q),r.gzr(0),s)
w=t}return A.c9(q,new C.dkZ(r,e),new A.C(B.a2f,w,s))},
$S:2020}
C.dkZ.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd4(t).ay){t=this.b
u=x.cy.a(B.d.gd4(u.f.f)).gvB(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.dB()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fI(v*3.141592653589793*0.5)
return A.fG(B.a5,A.d2(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:47}
C.dkY.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aKN(B.ra,B.iO)},
$S:0}
C.dkK.prototype={
$0(){var w=this.a
return w.l(new C.dkJ(w))},
$S:0}
C.dkJ.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dkL.prototype={
$0(){var w=this.a.c
w.toString
A.a8(w,!1).N(null)
return null},
$S:0}
C.dkq.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.kI.j(0.5),r=x.p,q=A.a([D.h54,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cx(p.d)?"Write this book":"Write a new book"
q.push(p.a_J(d,B.eh,w,J.cx(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a_J(d,K.arQ,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cB,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.l6.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cB,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.l6.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a_J(d,X.asQ,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a_J(d,B.p5,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a_J(d,B.p5,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.ez(u,E.CK,A.bo(!0,new A.C(B.xb,A.w(q,B.B,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.HU,u,B.da,u,new A.b9(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.dkM.prototype={
$0(){A.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.dkD.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.a0x(v,J.cL(w.d),w.r+1,null)},
$S:z+44}
C.dkE.prototype={
$1(d){var w=null
return A.pc(!1,A.el(w,w,w,E.CK,new A.ki(this.a,new C.dkC(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:346}
C.dkC.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aco,B.pp,A.E(A.c(e,w,w,w,w,w,w,B.jQ,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:782}
C.dkF.prototype={
$0(){return this.a.a=!1},
$S:53}
C.dkG.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:191}
C.dkH.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkI.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BJ(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Tm(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.dkB(s,t))
w=4
return A.b(s.lh(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dkB.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dkT.prototype={
$1(d){var w=null
return A.pc(!1,A.el(w,w,w,E.CK,new A.ki(this.a,new C.dkS(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:346}
C.dkS.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aco,B.pp,A.E(A.c(e,w,w,w,w,w,w,B.jQ,w,w,w),1)],x.p),B.l,w,B.e,B.h,0,w,w)},
$S:782}
C.dkU.prototype={
$0(){return this.a.a=!1},
$S:53}
C.dkV.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:191}
C.dkW.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:191}
C.dkX.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BJ(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lh(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dkr.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bn3(B.ra,A5.P9)},
$S:0}
C.dks.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aKN(B.ra,A5.P9)},
$S:0}
C.dmO.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dmP.prototype={
$1(d){var w=this.a
return w.l(new C.dmN(w))},
$S:9}
C.dmN.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dmQ.prototype={
$1(d){var w=this.a
return w.l(new C.dmM(w))},
$S:9}
C.dmM.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dmR.prototype={
$1(d){var w=this.a
return w.l(new C.dmL(w))},
$S:9}
C.dmL.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dmS.prototype={
$0(){var w=this.a
return w.l(new C.dmK(w,this.b))},
$S:0}
C.dmK.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dmT.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga3P()
A.a8(this.b,!1).N(new A.btB(w,v))},
$S:0}
C.dlg.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dlf.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a0t(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dlk.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dlj.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.bd0(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hH,v,v,v)
return A.el(A.a([A.bJ(!1,B.dy,v,v,!0,v,v,v,new C.dlh(d),v,v),A.bH(B.yi,v,new C.dli(d),A.bp(B.nO,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.CK,w,v,v,v,v,D.h3R,v)},
$S:18}
C.dlh.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dli.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dll.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dlm.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.cc(A.c_(B.bI,r,B.br,t,18,14),B.t,t,B.y,t,t,D.bIe,t,t,B.ah)},
$S:333}
C.dle.prototype={
$0(){return this.a.RL(0,this.b)},
$S:0}
C.dld.prototype={
$0(){return this.a.R9(0,this.b)},
$S:0}
C.cT3.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cT4.prototype={
$0(){return B.d.gG(D.AF)},
$S:z+14}
C.cT5.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bT(0,new A.C(d,new A.bP(new A.o(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bm,w,w),w),0,0,0)},
$S:2022}
C.dc6.prototype={
$1(d){return this.a.l(new C.dc5(this.b,this.c))},
$S:9}
C.dc5.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.dcv.prototype={
$1(d){return this.a.l(new C.dci())},
$S:2}
C.dci.prototype={
$0(){},
$S:0}
C.dcw.prototype={
$1(d){return this.a.l(new C.dch())},
$S:2}
C.dch.prototype={
$0(){},
$S:0}
C.dcx.prototype={
$0(){var w=this.a
return w.l(new C.dcg(w,this.b))},
$S:0}
C.dcg.prototype={
$0(){var w=this.a
return w.d=w.goF().GJ(this.b.a)},
$S:0}
C.dcy.prototype={
$0(){var w=this.a
return w.l(new C.dcf(w,this.b))},
$S:0}
C.dcf.prototype={
$0(){var w=this.a
return w.d=w.goF().cS1(this.b)},
$S:0}
C.dcz.prototype={
$1(d){return this.a.l(new C.dce())},
$S:2}
C.dce.prototype={
$0(){},
$S:0}
C.dcA.prototype={
$0(){var w=this.a
return w.l(new C.dcd(w,this.b))},
$S:0}
C.dcd.prototype={
$0(){var w=this.a
return w.d=w.goF().cS6(this.b.a)},
$S:0}
C.dcB.prototype={
$1(d){var w=this.a
return w.l(new C.dcq(w,d))},
$S:6}
C.dcq.prototype={
$0(){var w=this.a
return w.d=w.goF().cT0(this.b)},
$S:0}
C.dcC.prototype={
$1(d){var w=this.a
return w.d=w.goF().aHJ(d)},
$S:2}
C.dcD.prototype={
$1(d){var w=this.a
return w.d=w.goF().cS9(d)},
$S:2}
C.dcF.prototype={
$1(d){var w=this.a
return w.d=w.goF().cSZ(d)},
$S:2}
C.dcG.prototype={
$1(d){var w=this.a
return w.l(new C.dcp(w,d))},
$S:9}
C.dcp.prototype={
$0(){var w=this.a
return w.d=w.goF().cSQ(this.b)},
$S:0}
C.dcH.prototype={
$0(){var w=this.a,v=w.goF(),u=B.a.i(w.gzr(0).a.a),t=B.a.i(w.gaES().a.a)
u=v.bhJ(B.a.i(w.gaud().a.a),t,u)
A.a8(this.b,!1).N(u)
return null},
$S:0}
C.bUx.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bUr.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bUq(w,d))},
$S:10}
C.bUq.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bUA.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bUs.prototype={
$0(){var w=this.a
w.Q=D.b4d
w.afg(1)
w.r.x=null},
$S:0}
C.bUt.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b4d)return
w=new A.e4()
w.cV(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.dat[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bUw.prototype={
$0(){var w=this.a
w.Q=D.af4
w.afg(2)
w.r.z=null},
$S:0}
C.bUv.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hZ7
t.afg(3)
w=t.r
w.d=s
w.x="I say: "+t.gD3()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.dhJ[v.aw(4)]:D.dEB[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bUy.prototype={
$0(){var w=this.a
w.Q=D.b4e
w.CW=this.b
w.cy=1
w.afg(4)
w.r.f=w.f.a+5},
$S:0}
C.bUz.prototype={
$0(){},
$S:0}
C.bUu.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hZ()},
$S:0}
C.bUo.prototype={
$0(){return this.a.LQ(this.b)},
$S:0}
C.bUp.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hZ()},
$S:0}
C.bW3.prototype={
$0(){var w=this
return w.a.S3(w.b,0,w.c,w.d)},
$S:0}
C.bW4.prototype={
$0(){var w=this
return w.a.S3(w.b,3,w.c,w.d)},
$S:0}
C.bW5.prototype={
$0(){var w=this
return w.a.S3(w.b,1,w.c,w.d)},
$S:0}
C.bW6.prototype={
$0(){var w=this
return w.a.bWx(w.b,w.c,w.d)},
$S:0}
C.bW7.prototype={
$0(){var w=this
return w.a.S3(w.b,4,w.c,w.d)},
$S:0}
C.bW8.prototype={
$0(){var w=this
return w.a.S3(w.b,2,w.c,w.d)},
$S:0}
C.bW9.prototype={
$0(){var w=this
return w.a.S3(w.b,5,w.c,w.d)},
$S:0}
C.bWa.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:783}
C.bW2.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a7I[d],p=q.a.a7(0,new A.r(0,-q.b*1.2*124)),o=A.h0(r,B.cL,r,3,r,A.cW(r,r,r,r,r,r,r,r,r,D.fIT,e),B.a7,B.cd,r,B.e4,B.ce)
o.nE(130)
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
s.r=D.r_.gp(0)
u.aq(t,s)
w=new A.aI(w.r,B.ak,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bA())
v=A.L()
v.r=D.r_.gp(0)
u.af(w,v)
o.a4(u,new A.r(t.a+9,t.b+6))},
$S:784}
C.bUO.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.bUP.prototype={
$2(d,e){var w=this.a,v=B.o.aQ(w.ao0(d),w.ao0(e))
if(v!==0)return v
return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.fEy.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.hgn.prototype={
$2(d,e){if(e!=null)J.c8(this.a.c_(0,d,new C.hgo()),e)},
$S:z+66}
C.hgo.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.hgp.prototype={
$1(d){return d!==this.a},
$S:3}
C.hgq.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hgr.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hgm(this.c,d))},
$S:3}
C.hgm.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hgs.prototype={
$1(d){return d!==this.a},
$S:3}
C.hgt.prototype={
$1(d){return d!==this.a},
$S:3}
C.hgu.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hgl(this.c,d))},
$S:3}
C.hgl.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fSf.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.h6I.prototype={
$1(d){return d.Q},
$S:z+15}
C.h6J.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fO3.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fV6.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bPz.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hgO.prototype={
$2(d,e){return B.o.aQ(C.hKe(d),C.hKe(e))},
$S:222}
C.hgP.prototype={
$1(d){return d!==this.a},
$S:3}
C.h7k.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bNH.prototype={
$0(){var w=this.a
w.ch=!0
w.bbc()},
$S:0}
C.bNC.prototype={
$0(){},
$S:0}
C.bNI.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bNA.prototype={
$0(){},
$S:0}
C.bNB.prototype={
$0(){},
$S:0}
C.bNG.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bT(0,A.b4(u,u,u,new C.bfd(t,u),B.aA),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.p(u,A.c(t.dy,u,u,u,u,u,u,D.fQP,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.m),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.aA(B.bZ,new A.am(B.a0,u,B.ac,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bND(t,e),u,u,u,u,u,u,u,new C.bNE(t,e),u,u,u,u,u,u,u,u,u,new C.bNF(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bND.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bNF.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bNE.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bNz.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hZ()},
$S:0}
C.ctL.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.ctM.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.ctK(w))},
$S:0}
C.ctK.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.ctN.prototype={
$0(){var w=this,v=w.a
v.gj3()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.ctO.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.ctP.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.ctQ.prototype={
$0(){},
$S:0}
C.ctR.prototype={
$0(){var w=this.a
w.z=w.Yd(++w.e)
w.Q=A.c3(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.ctH.prototype={
$0(){return A.a8(this.a,!1).hZ()},
$S:0}
C.ctI.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj3().length,e=i/2,d=new C.ctJ(i,f,h),a0=g.as,a1=A.a3(a0).k("ba<2>")
a0=A.B(new A.ba(a0,a1),a1.k("M.E"))
a0=A.bT(0,A.c9(new A.hB(a0),new C.ctC(g,new A.r(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj3().length!==0&&!B.d.q(g.gj3(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.Rm(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cR(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new T.Nn(new C.ctD(g,u),new C.ctE(g,u),new C.ctF(g,u),j,j,new A.bg("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fs:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj3().length!==0&&!B.d.q(g.gj3(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.at(C.uK(a0,g.gqw(g),B.d_,B.jI,D.fL),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Yd(0):s).length))break
if(!B.d.q(g.gj3(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Yd(0)
o=s}else o=s
n=s[u]
n=A.e0(B.z,new C.Rm(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Yd(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rn(new A.bq(0,p,t),new C.ctG(),new T.EL(u,j,new C.Rm(l.b,k,62,!1,j),new A.kZ(0.25,new C.Rm(m.b,k,62,!1,j),j),new A.kt(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,T.hO8(),!0,!0,j,j,j,j,j,j,!1,B.j7,j,new A.bg("chip-"+r,a0),w),B.aZ,B.j5,j,new A.bg("t"+r+"-"+q,a0),v))}++u}g=A.c_(B.fX,a1,B.br,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.am(B.a0,j,B.ac,B.t,e,j)},
$S:63}
C.ctJ.prototype={
$1(d){return new A.r(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:775}
C.ctC.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gj3().length!==0&&!B.d.q(t.gj3(),-1)
return A.b4(p,p,p,new C.beF(q.b,o,v,w,p),B.aA)},
$S:52}
C.ctE.prototype={
$1(d){return this.a.gj3()[this.b]===-1},
$S:z+30}
C.ctF.prototype={
$1(d){return this.a.cVT(this.b,d.a)},
$S:z+31}
C.ctD.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj3()[t]!==-1,r=A.m(18),q=e.length!==0?B.d_.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.d_:B.jX,B.r,2)
u=s?A.l1(new C.ctB(),A.at(new C.Rm(u.gaHa()[u.gj3()[t]].b,u.gaHa()[u.gj3()[t]].a,62,!1,v),v,v,v),B.n1,B.j5,v,v,new A.bq(0.3,1,x.X),x.i):D.bfw
return A.cY(v,u,v,v,B.aZ,new A.o(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2025}
C.ctB.prototype={
$3(d,e,f){return A.e0(B.z,f,e,null,null)},
$S:112}
C.ctG.prototype={
$3(d,e,f){return A.dQ(f,new A.r(Math.sin(e*24)*8*(1-e),0))},
$S:112}
C.cU7.prototype={
$1(d){return d>=1},
$S:122}
C.cII.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.l(new C.cIH(w))},
$S:10}
C.cIH.prototype={
$0(){return this.a.f++},
$S:0}
C.cIQ.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cIR.prototype={
$0(){var w=this.a,v=this.b
w.z.I(0,v)
w.Q=v},
$S:0}
C.cIS.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cIP(w))},
$S:0}
C.cIP.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cIT.prototype={
$0(){return this.a.f++},
$S:0}
C.cIU.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cIV.prototype={
$0(){},
$S:0}
C.cIW.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a6(0)
w.as=!1
w.ay=0},
$S:0}
C.cIK.prototype={
$0(){return A.a8(this.a,!1).hZ()},
$S:0}
C.cIL.prototype={
$3(d,e,f){var w=null
return A.l1(new C.cIJ(this.a,e),w,B.aZ,B.hy,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:2026}
C.cIJ.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.d_.j(u.as?0.6:0.15)
t=A.a([new A.aa(0,B.H,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.p(v,A.ib(new A.BT(new A.v8(B.v.j(e),B.MY,v,B.ZK),H.c_j(A.b4(v,v,v,new C.aD5(u.gkS()[u.e].c,u.as,v),B.aA),new A.EQ(w,w,B.XD)),v),B.ap),B.f,v,v,new A.o(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2027}
C.cIM.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,14*(1-e))),e)},
$S:92}
C.cIN.prototype={
$3(d,e,f){return A.dQ(f,new A.r(Math.sin(e*22)*8*(1-e),0))},
$S:112}
C.cIO.prototype={
$0(){return this.a.bsu(this.b)},
$S:0}
C.fgI.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.aox$)
v.aox$=w
v.qk$.sp(0,w)
v.asq(u)},
$S:7}
C.fr4.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:10}
C.bVz.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bVy())},
$S:0}
C.bVy.prototype={
$0(){},
$S:0}
C.bVw.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bVu.prototype={
$0(){},
$S:0}
C.bVv.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gNu()
w=s+1>=r.length?3:5
break
case 3:q=C.bJd(p.garg(0),0,r.length)
p.l(new C.bVr(p,q))
o=p
w=6
return A.b(C.C3(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.C4(s.d,s.c.a,"school",p.garg(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bVs())
w=4
break
case 5:p.l(new C.bVt(p))
p.gqD().WN(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bVr.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bVs.prototype={
$0(){},
$S:0}
C.bVt.prototype={
$0(){return this.a.x++},
$S:0}
C.bVx.prototype={
$0(){return this.a.LQ(this.b)},
$S:0}
C.bVq.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hZ()},
$S:0}
C.fgJ.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.r(t,s),q=v.b,p=v.d,o=p?C.hOm(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.F9
C.Tj(q,D.eCV,0,0.2,-0.6,-0.2,null,w,D.eBE,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a7(0,new A.r(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.T()
p=A.L()
p.r=D.He.gp(0)
p.c=3
p.d=B.bG
q.ah(new A.r(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fgK.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Tj(this.a,D.eC0,0,u,0.7,-0.5,null,null,D.KD,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fgL.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Tj(this.a,D.eDI,0,0,0.8,-0.5,null,null,D.KD,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fgM.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Tj(w.b,D.eCP,0,v,-0.8,-0.5,null,null,D.KD,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fgN.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.r(34,-122+Math.sin(w*5)*5)
else v=v?D.eCT:D.F9
C.Tj(p,D.eCj,0,t,0,-0.6,null,v,D.KD,3,0,s,1.3,u,0,w,0)
q=q.cfp(new A.r(222,455),9)
$.T()
w=A.L()
w.r=B.d_.gp(0)
p.af(q,w)},
$S:0}
C.fgO.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:783}
C.bVc.prototype={
$2(d,e){return d+e},
$S:64}
C.bVn.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bVo.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bVp.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj3()[u.b]=s
t.gj3()[u.d]=t.y
w=t.as
v=t.qk$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bVj.prototype={
$1(d){return d},
$S:100}
C.bVi.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qk$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bVk.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bVl.prototype={
$0(){},
$S:0}
C.bVm.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Gc(++s.f)
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
C.bVe.prototype={
$0(){return A.a8(this.a,!1).hZ()},
$S:0}
C.bVf.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aQ(w[d],w[e])},
$S:64}
C.bVg.prototype={
$2(d,e){var w=null,v=C.hoM(new A.av(A.aU(1/0,e.a,e.b),A.aU(1/0,e.c,e.d))),u=this.a
return A.aA(B.bZ,new A.ea(A.b4(w,w,w,new C.blX(u,u.qk$),B.aA),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bVd(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bVd.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj3().length
u=B.o.D(B.i.bd((t.a-s.a)/r/450*v),0,v-1)
w.d5T(w.gj3()[u])}},
$S:24}
C.bVh.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:79}
C.dwg.prototype={
$2(d,e){return 0},
$S:64}
C.bUZ.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bUY())},
$S:0}
C.bUY.prototype={
$0(){},
$S:0}
C.bUX.prototype={
$0(){},
$S:0}
C.bUR.prototype={
$0(){},
$S:0}
C.bUS.prototype={
$0(){},
$S:0}
C.bUW.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.BY},
$S:0}
C.bUV.prototype={
$1(d){var w=null,v=this.a.gqD(),u=A.c(d,w,w,w,w,w,w,D.aYd,w,w,w),t=v.gboQ(0)
return A.aA(B.bZ,A.w(A.a([u,B.bs,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aYq,w,w,w)],x.p),B.B,w,B.e,B.h,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbuR(v),w,w,w,w,w,w,!1,B.a4)},
$S:123}
C.bUT.prototype={
$0(){return this.a.LQ(this.b)},
$S:0}
C.bUU.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hZ()},
$S:0}
C.bUQ.prototype={
$0(){return A.a8(this.a,!1).hZ()},
$S:0}
C.e76.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e77.prototype={
$1(d){return this.a},
$S:43}
C.e78.prototype={
$0(){var w=this.a
return w.d=w.gTL().bhd(this.b)},
$S:0}
C.e74.prototype={
$1(d){return new C.UK(this.a,null)},
$S:z+32}
C.e75.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e73.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hH,w,w,w)
return A.el(A.a([A.bJ(!1,E.aZQ,w,w,!0,w,w,w,new C.e71(d),w,w),A.bJ(!1,D.hbv,w,w,!0,w,w,w,new C.e72(d),w,w)],x.p),w,w,D.fL,v,w,w,w,w,D.fYQ,w)},
$S:18}
C.e71.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e72.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e70.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.T(A.b0(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e79.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e7a.prototype={
$0(){var w=this.a,v=this.b,u=C.bGV(v,10,w.r,!1)
return w.uL(C.hxY(w.a.d,"kahoot",u,w.gb8H(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e7b.prototype={
$0(){var w=this.a
return w.uL(new C.ank(this.b,w.a.d,w.r,null))},
$S:0}
C.e7c.prototype={
$0(){var w=this.a
return w.uL(new C.alu(this.b,w.a.d,w.r,null))},
$S:0}
C.e7f.prototype={
$0(){var w=this.a
return w.uL(new C.awl(this.b,w.a.d,w.r,null))},
$S:0}
C.e7g.prototype={
$0(){var w=this.a
return w.uL(new C.aAh(this.b,w.a.d,w.r,null))},
$S:0}
C.e7h.prototype={
$0(){var w=this.a
return w.uL(new C.ann(this.b,w.a.d,w.r,null))},
$S:0}
C.e7i.prototype={
$0(){var w=this.a
return w.uL(new C.anr(this.b,w.a.d,w.r,null))},
$S:0}
C.e7j.prototype={
$0(){var w=this.a
return w.uL(new C.ant(this.b,w.a.d,w.r,null))},
$S:0}
C.e7k.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d6d()
return v.uL(C.hxY(v.a.d,"creator_"+u.a,w,v.gb8H(),"A game by the family",t,this.c.a))},
$S:0}
C.e7l.prototype={
$0(){return this.a.PC(this.b)},
$S:0}
C.e7m.prototype={
$0(){return this.a.YF(0,this.b)},
$S:0}
C.e7d.prototype={
$0(){return this.a.PC(null)},
$S:0}
C.e7e.prototype={
$0(){return this.a.K(x.q).f.T(D.fBL)},
$S:0}
C.bVa.prototype={
$0(){var w=this.a
w.d=D.b3j
w.z=3},
$S:0}
C.bVb.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aRE()}else w.l(new C.bV9(w))},
$S:10}
C.bV9.prototype={
$0(){return this.a.z--},
$S:0}
C.bV0.prototype={
$0(){var w=this.a
w.d=D.aeL
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bV1.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bV_(w))
if(w.as<=0){d.a1(0)
w.b8D(-1)}},
$S:10}
C.bV_.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bV6.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.Yj},
$S:0}
C.bV7.prototype={
$0(){return this.a.e++},
$S:0}
C.bV3.prototype={
$0(){var w=this.a
w.d=D.b3k
w.ay=this.b},
$S:0}
C.bV4.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bV8.prototype={
$2(d,e){return B.o.aQ(e.b,d.b)},
$S:2028}
C.bV5.prototype={
$0(){return this.a.LQ(this.b)},
$S:0}
C.bV2.prototype={
$0(){var w=this.a.c
w.toString
return A.a8(w,!1).hZ()},
$S:0}
C.bUB.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ay()
s=A.a([new A.au(new A.bb(s,B.b5,B.aO),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bb(u,B.b5,B.aO),r))}return s},
$S:2029}
C.bUC.prototype={
$0(){return this.a.gDC().c.push(C.hir(null,0,20,""))},
$S:0}
C.bUM.prototype={
$1(d){var w=null
return A.bB(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dz,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.FI,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:269}
C.bUL.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gDC().c,m=this.b,l=n[m],k=o.ciE(l),j=B.c.j(0.06),i=A.m(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.LW,p,p,p),B.aX],g)
if(n.length>1)f.push(A.aH(p,p,p,p,B.atJ,p,p,p,new C.bUG(o,m),p,p,p,p,p,p))
n=J.a1(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.h,0,p,p),A.aN(p,B.M,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bUH(l),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a7,p,B.ao,p,p,p,p),B.O],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aFL[v]
t=D.aFr[v]
s=v+1
f.push(new A.C(B.eC,new A.c0(B.aK,B.e,B.h,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bu(1,B.b8,A.aN(p,B.M,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.al,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bUI(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a7,p,B.ao,p,p,p,p),p),new Av.PY(v,l.c,new C.bUJ(o,l),p,!1,D.lZ,p,p,p,p,p,!1,!1,p,I.b41,p,p,p,p,p,w)],g),p),p))}f.push(D.h3w)
f.push(B.aj)
n=A.a([D.fXU,B.aa],g)
for(r=0;r<3;++r){q=D.cjd[r]
n.push(new A.C(B.fb,A.jE(p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bUK(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.h,0,p,p))
return A.p(p,A.w(f,B.B,p,B.e,B.h,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.m),p,p,p,B.kM,B.bg,p,p,p)},
$S:153}
C.bUG.prototype={
$0(){var w=this.a
return w.l(new C.bUF(w,this.b))},
$S:0}
C.bUF.prototype={
$0(){return B.d.cJ(this.a.gDC().c,this.b)},
$S:0}
C.bUH.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bUI.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bUJ.prototype={
$1(d){return this.a.l(new C.bUE(this.b,d))},
$S:158}
C.bUE.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bUK.prototype={
$1(d){return this.a.l(new C.bUD(this.b,this.c))},
$S:9}
C.bUD.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e8M.prototype={
$0(){var w=this.a
w.wK()
w.a.bw()
w.a.qx()},
$S:0}
C.e8L.prototype={
$0(){var w=this.a
w.wK()
w.a.bw()
w.a.qx()},
$S:0}
C.e8O.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.cx(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e8P.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e8Q.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e8K.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e8N.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e8S.prototype={
$0(){this.a.PY()
return null},
$S:0}
C.e8R.prototype={
$0(){return this.a.Fw(this.b)},
$S:0}
C.e8c.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bJ(!1,B.dy,w,w,!0,w,w,w,new C.e8a(d),w,w),r=A.bp(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.el(A.a([s,A.bH(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e8b(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e8a.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e8b.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.e8d.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cSv(this.b)},
$S:0}
C.e87.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aXi(w.b,w.c,w.d)},
$S:7}
C.e7z.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e7A.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7R.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HK(t.a.c),$async$$0)
case 2:s=r.nP(q.dO(e,new C.e7P(t)))
if(s!=null&&t.c!=null)t.l(new C.e7Q(t,s))
t.a.bw()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e7P.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e7Q.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e7S.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e7T.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e86.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cTh(C.hOw(w),w)},
$S:0}
C.e7O.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.X4(u,w,C.aSL(u,w),new C.e7N(v),null)},
$S:z+37}
C.e7N.prototype={
$1(d){return this.bqg(d)},
bqg(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e7M(s,d))
w=3
return A.b(s.uH(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:555}
C.e7M.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bhd(this.b)},
$S:0}
C.e83.prototype={
$1(d){return d.as},
$S:z+1}
C.e84.prototype={
$1(d){var w=this
return new A.e8(new C.e82(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e82.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.el:B.c,h=A.m(26),g=A.K(B.bU.j(0.5),B.r,1.5),f=A.p(k,D.bYA,B.f,k,k,new A.o(B.bU.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.w(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,B.N,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.h,0,B.p),1)
f=A.A(A.a([f,B.ba,a0,A.aH(k,k,k,k,A.V(B.cC,j?B.bv:B.bl,k,k,k,k),k,k,k,new C.e7X(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.h,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bU:B.bU.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ax(B.bU,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bU
a0.push(A.aA(k,A.cY(k,A.c(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.aZ,new A.o(q,k,new A.bE(n,n,n,n),new A.bc(p,p,p,p),k,k,B.m),B.hn,k,k,k,k,B.De,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e7Y(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.c_(B.bI,a0,B.br,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c9V,new A.C(D.bIE,f,k),new A.C(D.bIv,e,k),new A.C(B.ri,a0,k),new A.C(X.aoW,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.V(Ak.arC,j?B.bv:B.bl,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.C(D.bIx,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,k,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.az1(k,B.bU,k,k,!1,B.y,k,k,k,k,k,k,new C.e7Z(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.h,0,k,k),k))}f.push(B.aB)
j=A.m(20)
e=A.a([new A.aa(0,B.H,B.az.j(0.35),B.hS,12)],x.V)
f.push(A.aA(k,A.p(k,A.A(A.a([D.fYf,B.ba,D.bMW,D.bZf],w),B.l,k,B.e,B.h,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.cdJ,B.m),k,k,k,B.ie,B.bD,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e8_(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.C(B.xc,A.A(A.a([A.E(A.dV(B.dy,new C.e80(a1),k),1),B.ar,A.E(A.bH(N.b_h,k,new C.e81(t,a1),A.bp(B.bU,k,k,k,k,k,B.cq,k,k,k,k,k)),1)],w),B.l,k,B.e,B.h,0,k,k),k))
return A.bo(!0,A.p(k,A.cc(A.w(f,B.B,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.ap,k,k,new A.o(i,k,g,h,k,k,B.m),k,k,k,B.zs,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:90}
C.e7X.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e7Y.prototype={
$0(){return this.b.$1(new C.e7W(this.a,this.c))},
$S:0}
C.e7W.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e7Z.prototype={
$1(d){var w=this.a
w.l(new C.e7U(w,d))
this.b.$1(new C.e7V())},
$S:9}
C.e7U.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e7V.prototype={
$0(){},
$S:0}
C.e8_.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aJj(!0,w))
return null},
$S:0}
C.e80.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e81.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(new A.aJj(!1,w))
return null},
$S:0}
C.e85.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cT5(this.b.b)
w.r.a6(0)},
$S:0}
C.e7n.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.akf(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hHg(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e7o.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aHG(w)},
$S:0}
C.e8f.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.afu(this.b,w,this.c,null)},
$S:z+39}
C.e89.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.el:B.c,t=A.m(20),s=A.V(B.kQ,B.aW,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.w(p,B.l,w,B.e,B.P,0,B.p)
return A.el(A.a([A.bH(D.hfk,w,new C.e88(d),A.bp(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.bc,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e88.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e7p.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e7q.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e7r.prototype={
$1(d){return d.a},
$S:z+8}
C.e7s.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.ic(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aHG(w)},
$S:0}
C.e7w.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.akf(q)
w=A.U(q).k("X<1>")
q=A.B(new A.X(q,new C.e7u(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hHg(v.e,null,r,v.f,v.r,new C.e7v(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e7v.prototype={
$0(){return this.a.acm(this.b)},
$S:0}
C.e7u.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e7x.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.U(w).k("O<1,ic>")
w=A.B(new A.O(w,new C.e7t(this.b),v),v.k("aj.E"))
u.d=t.aHG(w)},
$S:0}
C.e7t.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e8e.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e7J.prototype={
$1(d){return d.length!==0},
$S:3}
C.e7K.prototype={
$1(d){var w=this
return new A.e8(new C.e7I(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e7I.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.el:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e7E(u,e,o),A.U(o).k("O<1,x>")))
p.push(B.O)
u=w.d
p.push(A.aN(v,B.M,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.m(12),B.dx),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.al,v,v,v,v,v,B.mf,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a7,v,B.ao,v,v,v,v))
p=A.w(p,B.am,v,B.e,B.P,0,B.p)
t=w.a
return A.el(A.a([A.bJ(!1,B.dy,v,v,!0,v,v,v,new C.e7F(d),v,v),A.bH(B.M4,v,new C.e7G(t,u,o,e),A.bp(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bH(D.h1S,v,new C.e7H(t,u,o,d),A.bp(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:217}
C.e7E.prototype={
$1(d){var w=null
return A.dP(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aH(w,w,w,w,D.c6J,w,w,w,new C.e7D(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2030}
C.e7D.prototype={
$0(){return this.a.$1(new C.e7B(this.b,this.c))},
$S:0}
C.e7B.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e7F.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.e7G.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e7C(w.c,u))
v.bM(0,B.ck)}},
$S:0}
C.e7C.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e7H.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a8(w.d,!1).N(!0)},
$S:0}
C.e7L.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cTK(this.b,D.vp,C.HI(v,w.a.c))},
$S:0}
C.e8m.prototype={
$1(d){return d.as},
$S:z+1}
C.e8n.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j3(this.b,w)},
$S:0}
C.e8o.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iFP(v)
return w.Xr(v==null?null:v.a)},
$S:0}
C.e8p.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.igT(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcn(k)){k=A.aU(1/0,e.a,e.b)
s=A.aU(1/0,e.c,e.d)
l.cAC(new A.av(u,t),v.gbnV(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d83:D.d5W
q=A.K(s?B.dz:D.bnq,B.r,1)
p=A.m(22)
o=A.bT(0,A.b4(m,m,m,new C.bi_(s,m),B.aA),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bv(p,new A.am(B.a0,m,B.ac,B.t,A.a([o,A.bT(0,A.u_(new A.R(n,n,n,n),new A.a4(u,t,new C.biX(l.d,v,l.f,w,new C.e8i(l),l.gcjQ(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bB_(s,new C.e8j(l,e),new C.e8k(l,e),new C.e8l(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a6(B.aU,B.b1,B.w,r,m,m),B.m),m,m,m,S.anV,m,m,m,m)},
$S:176}
C.e8i.prototype={
$1(d){var w=this.a
w.l(new C.e8g(w,d))},
$S:2}
C.e8g.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.I(0,v)},
$S:0}
C.e8j.prototype={
$0(){var w=this.b
return this.a.bfl(1.25,new A.av(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.e8k.prototype={
$0(){var w=this.b
return this.a.bfl(0.8,new A.av(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.e8l.prototype={
$0(){var w=this,v=w.b
return w.a.aXi(new A.av(A.aU(1/0,v.a,v.b),A.aU(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbnV())},
$S:0}
C.e8q.prototype={
$0(){var w=this.a
return w.l(new C.e8h(w))},
$S:0}
C.e8h.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e7y.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fK(new A.fA(s.c)),$async$$0)
case 2:t.yQ("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dlq.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bmO(u,C.hTl(v.c,u),new C.dlp(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dlp.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dlr.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bqb(d.d,d.c,u.f.q(0,d.a),new C.dlo(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dlo.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fRG.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nP(new A.cQ(new A.X(v,new C.fRH(d),w.k("X<1>")),new C.fRI(),w.k("cQ<1,n>")))},
$S:z+19}
C.fRH.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fRI.prototype={
$1(d){return d.a},
$S:z+8}
C.fRE.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fRF.prototype={
$1(d){return d.b},
$S:z+8}
C.fRL.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.U(v)
return A.nP(new A.cQ(new A.X(v,new C.fRM(d),w.k("X<1>")),new C.fRN(),w.k("cQ<1,n>")))},
$S:z+19}
C.fRM.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fRN.prototype={
$1(d){return d.a},
$S:z+8}
C.fRJ.prototype={
$1(d){var w,v=A.eC([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.I(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fRK.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dlt.prototype={
$0(){return this.a},
$S:z+46}
C.dlK.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:272}
C.dlC.prototype={
$2(d,e){var w=this.a.c_(0,d,new C.dlD()),v=J.a1(w)
if(!v.q(w,e))v.I(w,e)},
$S:120}
C.dlD.prototype={
$0(){return A.a([],x.s)},
$S:785}
C.dlB.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eF(w,e)
return w===!0},
$S:245}
C.dlu.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dlA.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dlz.prototype={
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
$S:2032}
C.dlv.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dlE.prototype={
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
if(r.a!==a9&&!B.d.aR(w,new C.dlF(r)))w.push(r)}}B.d.br(w,new C.dlG(a8))
B.d.b_(w,new C.dlH())
q=C.igS(a7.r,v,w,a7.w)
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
else a8.n(0,a9,new A.btj(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2033}
C.dlF.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dlG.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dlH.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.dlI.prototype={
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
$S:575}
C.dlJ.prototype={
$1(d){return 16+d*156},
$S:155}
C.dls.prototype={
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
t.n(0,d,new C.GZ(r,new A.r(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GZ(s,new A.r(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GZ(s,new A.r(e,v)))}t=o.r.h(0,d)
t=J.aQ(t==null?B.M:t)
s=o.w
while(t.C()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Lg(d,new A.r(e+t,w),s,s.length))}},
$S:191}
C.dlw.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aMu(new A.r(v.a,v.b+28),new A.r(w.a,w.b+28),!0,null))},
$S:120}
C.dlx.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dly.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:786}
C.dlL.prototype={
$2(d,e){return B.i.aQ(d.a,e.a)},
$S:786}
C.dlM.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:472}
C.dlN.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:205}
C.dlO.prototype={
$1(d){return d>=0.5},
$S:122}
C.fwF.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hb(A.aM(!1,v,!0,new A.a4(38,38,A.V(d,this.a.c?B.c:B.cx,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w,w)},
$S:2035}
C.f6s.prototype={
$1(d){var w=null,v=A.m(8),u=B.bU.j(0.12),t=A.m(8)
return new A.C(B.lc,A.aM(!1,v,!0,A.p(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fNy,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.m),w,w,w,w,B.PE,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f6r(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f6r.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dC2.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dC1.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mU,B.K,w,w)
return A.el(A.a([A.bJ(!1,B.dy,w,w,!0,w,w,w,new C.dC_(d),w,w),A.bJ(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.nd,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dC0(d),w,w)],x.p),B.bc,B.D9,w,u,D.bJy,w,D.bLv,new A.b9(v,B.a1),w,w)},
$S:18}
C.dC_.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.dC0.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.dCb.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dCc.prototype={
$1(d){var w=this.a
return w.l(new C.dCa(w,d))},
$S:z+49}
C.dCa.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dCd.prototype={
$1(d){var w=null
return A.qY(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dCg.prototype={
$1(d){var w=this.a
return w.l(new C.dC9(w,d))},
$S:35}
C.dC9.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dCf.prototype={
$1(d){var w=null
return A.qY(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dCh.prototype={
$1(d){var w=this.a
return w.l(new C.dC8(w,d))},
$S:35}
C.dC8.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dCi.prototype={
$0(){var w=this.a
return w.l(new C.dC7(w))},
$S:0}
C.dC7.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dCj.prototype={
$0(){var w=this.a
return w.l(new C.dC6(w))},
$S:0}
C.dC6.prototype={
$0(){return++this.a.at},
$S:0}
C.dCk.prototype={
$0(){var w=this.a
return w.l(new C.dC5(w))},
$S:0}
C.dC5.prototype={
$0(){return--this.a.ax},
$S:0}
C.dCl.prototype={
$0(){var w=this.a
return w.l(new C.dC4(w))},
$S:0}
C.dC4.prototype={
$0(){return++this.a.ax},
$S:0}
C.dCm.prototype={
$1(d){var w=this.a
return w.l(new C.dC3(w,d))},
$S:9}
C.dC3.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dCe.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dCn.prototype={
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
return A.E(A.aE(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cY(r,A.w(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.h,0,B.p),r,r,B.aZ,new A.o(w,r,u,v,r,r,B.m),B.eK,r,r,r,r,B.jE,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dCo(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dCo.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dCx.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.ci3.prototype={
$2(d,e){return new A.bw(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:102}
C.cia.prototype={
$1(d){return d.ak()},
$S:z+5}
C.cib.prototype={
$2(d,e){var w=J.b8(e,new C.ci9(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bw(d,w,x.d2)},
$S:z+53}
C.ci9.prototype={
$1(d){return d.ak()},
$S:z+12}
C.ci5.prototype={
$1(d){return C.anw(A.a_(d,x.N,x.z))},
$S:z+9}
C.ci6.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.ci7.prototype={
$1(d){return C.hxX(A.a_(d,x.N,x.z))},
$S:z+11}
C.ci8.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cif.prototype={
$1(d){return new A.aJv(d.f.length,d.a,d.b)},
$S:z+55}
C.cig.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:732}
C.cic.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cid.prototype={
$1(d){return d.cSI(C.HI(d,this.a))},
$S:z+85}
C.e8z.prototype={
$1(d){return C.uL(d,this.a.a.c)},
$S:z+3}
C.e8A.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e8E.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e8F.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e8w.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3h(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zs("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pS(r.c,r.e),$async$$0)
case 4:s.zs(p)
w=5
return A.b(s.KR(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e8x.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3h(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zs("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pS(r.c,r.e),$async$$0)
case 4:s.zs(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e8y.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.X7(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zs("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zs("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zs("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.KR(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ac(j)
o=r.a
if(o.c==null){w=1
break}o.zs(B.a.eq(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e8D.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3g(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zs("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a8(r,!1).ca(A.e7(new C.e8C(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pS(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e8C.prototype={
$1(d){var w=this.b
return new C.a1s(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e8B.prototype={
$1(d){return D.hTw},
$S:z+58}
C.e8H.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e8I.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e8G(w,d)
return new A.C(B.d2,new C.bj0(this.b,d.c,d.a,w,null),null)},
$S:2036}
C.e8G.prototype={
$0(){return this.a.Zj(this.b.b)},
$S:0}
C.e8r.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e8s.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e8t.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e8u.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e8v.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.e8J.prototype={
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
$S:224}
C.dUu.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dUv.prototype={
$0(){return B.d.gG(D.a85)},
$S:z+60}
C.dUw.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.dfF,44),w,w,w),w,w,new C.bnW(u,t,v,w),B.aA)},
$S:52}
C.h8T.prototype={
$1(d){return A.og(new C.h8S(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:134}
C.h8S.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.el:B.c,p=A.a([new A.aa(0,B.H,B.v.j(r?0.35:0.08),B.uj,24)],x.V),o=r?B.eo:B.bP
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bU.j(0.18)],x.O)
w=A.p(t,D.c0I,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a6(B.a5,B.a9,B.w,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.ax,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.w(A.a([B.R,o,new A.C(E.ap_,A.A(A.a([w,B.ba,A.E(A.w(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.h,0,B.p),1)],u),B.l,t,B.e,B.h,0,t,t),t),A.E(A.iM(!0,t,e,B.y,D.fzN,new C.h8R(this.b,s),20,B.aou,t,B.ah,!1),1)],u),B.l,t,B.e,B.h,0,B.p),B.f,t,t,new A.o(q,t,t,B.lu,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:116}
C.h8R.prototype={
$2(d,e){var w=null,v=D.a85[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.K(s?B.eo:B.bP,B.r,1),q=A.a([new A.aa(0,B.H,B.v.j(s?0.35:0.08),B.eF,8)],x.V),p=A.m(15),o=A.E(new C.a8m(v.a,!0,w),1),n=s?B.kc:B.iL,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.ax,w,w,w,w,w,w,w,w,13,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aE(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eL(A.bv(p,A.w(A.a([o,A.p(w,A.w(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.h,0,B.p),B.f,n,w,w,w,w,w,w,B.iP,w,w,w)],l),B.am,w,B.e,B.h,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.h8Q(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:81}
C.h8Q.prototype={
$0(){A.a8(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cs2.prototype={
$0(){return this.a.aiO(this.b)},
$S:0}
C.h8f.prototype={
$1(d){return D.hO0},
$S:z+61}
C.hg5.prototype={
$1(d){var w=this
return new C.a3g(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.h8j.prototype={
$1(d){return new C.a05(this.a,null)},
$S:z+63}
C.h8i.prototype={
$1(d){return D.hP1},
$S:z+64}
C.dcT.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dcU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dcS(w,d))},
$S:35}
C.dcS.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dcV.prototype={
$1(d){return this.a.Lu()},
$S:2}
C.dcW.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dcP.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.dcQ.prototype={
$1(d){return this.a.Lu()},
$S:2}
C.dcR.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cKn.prototype={
$0(){},
$S:0}
C.cKt.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.cKu.prototype={
$0(){return this.a.aSx(-1)},
$S:0}
C.cKv.prototype={
$1(d){return this.a.l(new C.cKs())},
$S:2}
C.cKs.prototype={
$0(){},
$S:0}
C.cKw.prototype={
$0(){return this.a.aSx(1)},
$S:0}
C.cKx.prototype={
$1(d){return this.a.l(new C.cKr())},
$S:2}
C.cKr.prototype={
$0(){},
$S:0}
C.cKy.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.eo:B.bP
return A.vd(u,u,B.b6,r,u,new C.cKq(t,d),B.xg,s,w,u,new A.ax(v,1,B.r,-1),B.cp)},
$S:2037}
C.cKq.prototype={
$1(d){var w=this.a
return w.l(new C.cKo(w,this.b))},
$S:9}
C.cKo.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cKz.prototype={
$1(d){return this.a.l(new C.cKp())},
$S:2}
C.cKp.prototype={
$0(){},
$S:0}
C.cKA.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fwa.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a8(this.b,!1).N(w)},
$S:2}
C.fwb.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.fwc.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a8(this.b,!1).N(w)},
$S:0}
C.fw8.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbFm()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b4(new A.C(D.bLu,new A.ea(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bAP(p,v,this.b.a,u,t,r),r,r,B.aA)},
$S:52}
C.fw9.prototype={
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
s=A.a([B.b6,s,B.aW],x.O)
return A.aE(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eL(D.eHt,r,new A.o(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a6(new A.dj(-1.2+t,-0.5),new A.dj(1.2-t,0.8),B.w,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:142}
C.h6v.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:59}
C.f3C.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f3t.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f3u.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f3A.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.e8(new C.f3z(w,this.b),null)},
$S:20}
C.f3z.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.el:B.c,t=A.m(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.ez(w,u,new A.C(B.aoT,A.w(A.a([s,B.aj,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hE6(new C.f3w(r,e),r.a),B.aB,A.A(A.a([A.E(A.dV(B.dy,new C.f3x(d),w),1),B.ar,A.E(A.bH(B.Xx,w,new C.f3y(r,d),A.bp(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.h,0,w,w)],q),B.am,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.da,w,new A.b9(t,B.a1),w)},
$S:97}
C.f3w.prototype={
$1(d){return this.b.$1(new C.f3v(this.a,d))},
$S:35}
C.f3v.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f3x.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f3y.prototype={
$0(){var w=this.a.a
A.a8(this.b,!1).N(w)
return null},
$S:0}
C.f3B.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.Uq(this.b)},
$S:0}
C.f3o.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bhj(w)},
$S:0}
C.f3s.prototype={
$1(d){return this.bqE(d)},
bqE(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.MC(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j3(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f3r.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.U(w).k("X<1>")
w=A.B(new A.X(w,new C.f3q(this.b),v),v.k("M.E"))
u.d=t.bhj(w)},
$S:0}
C.f3q.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f3D.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j3(this.b,w)},
$S:0}
C.f3E.prototype={
$1(d){return this.a.bJD(d,this.b)},
$S:z+67}
C.f3p.prototype={
$0(){return this.a.acl(this.b)},
$S:0}
C.hfT.prototype={
$1(d){return new C.afP(this.a,this.b,this.c,null)},
$S:z+68}
C.f3G.prototype={
$0(){return this.a.a1o(this.b)},
$S:0}
C.f3H.prototype={
$0(){return this.a.RH(this.b)},
$S:0}
C.f3I.prototype={
$0(){return this.a.Fq(this.b)},
$S:0}
C.f3J.prototype={
$0(){return this.a.a1p(this.b)},
$S:0}
C.f3F.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f3j.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f3k.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f3l.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
C.f3n.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qC(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f3m(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f3m.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f45.prototype={
$2(d,e){return d+e.gxX()},
$S:z+71}
C.f41.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f42.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f3N.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.el:B.c,s=A.m(24),r=A.p(v,D.c1b,B.f,v,v,new A.o(B.aC.j(u?0.18:0.08),v,A.K(B.aC.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.ax
u=u?B.eo:B.bP
w=x.p
return A.ez(v,t,new A.C(B.xf,A.w(A.a([r,B.aN,q,B.O,p,B.df,A.A(A.a([A.E(A.dV(B.ov,new C.f3L(d),A.dh(v,v,v,v,v,v,v,v,v,o,v,v,B.fc,v,new A.b9(A.m(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bH(D.hjf,v,new C.f3M(d),A.bp(B.aC,v,v,v,v,v,B.fc,v,new A.b9(A.m(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.h,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,v,B.da,v,new A.b9(s,B.a1),v)},
$S:46}
C.f3L.prototype={
$0(){A.a8(this.a,!1).N(!1)
return null},
$S:0}
C.f3M.prototype={
$0(){A.a8(this.a,!1).N(!0)
return null},
$S:0}
C.f3W.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.el:B.c,i=A.m(28),h=A.a([new A.aa(0,B.H,B.v.j(k?0.35:0.08),B.fF,28)],x.V),g=k?D.dnE:As.a7o,f=x.p
g=A.p(m,A.w(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.m),m,4,m,m,m,m,m,40),B.aB,D.fsU,B.at,new A.bL(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cF,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.h,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a6(B.aw,B.aD,B.w,g,m,m),B.m),m,m,m,m,E.aoY,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.ba8(B.b_,B.jL,new C.f3T(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.ba8(B.cI,Q.Aj,new C.f3U(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.h,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aC.j(k?0.14:0.06)
q=A.m(16)
p=A.K(B.aC.j(0.28),B.r,1)
o=A.p(m,D.c0u,B.f,m,m,new A.o(B.aC.j(0.12),m,m,A.m(12),m,m,B.m),m,m,m,m,B.bS,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.ax,m,m,m,m,m,m,m,m,m,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.h,0,B.p),1)
return A.bo(!0,new A.C(B.x8,A.p(m,A.w(A.a([g,new A.C(B.aoU,A.w(A.a([w,B.R,u,B.bx,t,B.R,A.aE(!1,B.a3,!0,m,A.aM(!1,s,!0,A.p(m,A.A(A.a([o,B.ba,n,A.V(B.eL,k?B.bv:B.bl,m,m,m,m)],f),B.l,m,B.e,B.h,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.m),m,m,m,m,B.bD,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f3V(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.h,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:32}
C.f3T.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.wj("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f3U.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.wj("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f3V.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a8(u.b,!1).N(null)
w=2
return A.b(u.a.Pd(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f3R.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.el:B.c,m=A.m(24),l=A.a([new A.aa(0,B.H,B.v.j(o?0.35:0.08),B.eP,24)],x.V),k=o?B.eo:B.bP
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bv:B.bl
u=A.bv(w,new A.a4(48,48,C.aUa(!0,A.m(12),48,P.Qk,u,v.c,48),q),B.ap)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BC(v.gxX())
s=x.p
r=this.a
return A.bo(!0,new A.C(B.x8,A.p(q,A.w(A.a([B.R,k,new A.C(D.aoR,A.A(A.a([u,B.ba,A.E(A.w(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.h,0,B.p),1)],s),B.l,q,B.e,B.h,0,q,q),q),B.D_,r.cux(B.vJ,B.aW,new C.f3P(d),p,"QR code or backup file","Transfer project"),r.b75(!0,B.eq,B.aC,new C.f3Q(d),p,"Remove from this device","Delete project"),B.R],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:32}
C.f3P.prototype={
$0(){A.a8(this.a,!1).N("transfer")
return null},
$S:0}
C.f3Q.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
C.f3S.prototype={
$1(d){return this.bqF(d)},
bqF(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.MC(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wz(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f48.prototype={
$0(){var w=this.a
w.a.bw()
w.l(new C.f47(w))},
$S:0}
C.f47.prototype={
$0(){return this.a.r++},
$S:0}
C.f49.prototype={
$0(){var w=this.a
return w.l(new C.f46(w))},
$S:0}
C.f46.prototype={
$0(){return this.a.r++},
$S:0}
C.f3K.prototype={
$0(){var w=this.a.c
w.toString
return A.j3(w,null)},
$S:0}
C.f3O.prototype={
$0(){return this.a.cnA(this.b)},
$S:0}
C.f44.prototype={
$0(){var w=this.a
return w.l(new C.f43(w,this.b))},
$S:0}
C.f43.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f3Z.prototype={
$0(){return this.a.wj("scan")},
$S:0}
C.f4_.prototype={
$0(){return this.a.wj("file")},
$S:0}
C.f40.prototype={
$1(d){return this.a.cuy(d,this.b)},
$S:z+72}
C.f3Y.prototype={
$0(){return this.a.Fu(this.b)},
$S:0}
C.f3X.prototype={
$0(){return this.a.a1V(this.b,this.c)},
$S:0}
C.cJJ.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cJI.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cJG.prototype={
$1(d){return C.hZD(A.a_(d,x.N,x.z))},
$S:z+75}
C.cJH.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fQy.prototype={
$1(d){return d.y===D.lf},
$S:z+3}
C.hgF.prototype={
$1(d){return C.aSL(d,this.a)},
$S:z+3}
C.fO2.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bVG.prototype={
$1(d){return!d.as},
$S:z+1}
C.bVF.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bVC.prototype={
$1(d){return C.hxZ(A.a_(d,x.N,x.z))},
$S:z+24}
C.bVD.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bVE.prototype={
$1(d){return J.k(d)},
$S:15}
C.fE6.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fzD.prototype={
$1(d){return C.hnj(A.a_(d,x.N,x.z))},
$S:z+79}
C.fzE.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fzF.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.h83.prototype={
$1(d){return J.k(d)},
$S:15}
C.h84.prototype={
$1(d){return d.a},
$S:z+81}
C.h85.prototype={
$1(d){return d.length!==0},
$S:3}
C.h86.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.h87.prototype={
$1(d){return d.Uq(null).ak()},
$S:z+82}
C.hgD.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fR1.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fUg.prototype={
$1(d){return C.anw(A.a_(d,x.N,x.z))},
$S:z+9}
C.fUh.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fUi.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fUj.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fUk.prototype={
$1(d){return C.uL(d,this.a)},
$S:z+3}
C.h7Q.prototype={
$1(d){return C.uL(d,this.a)},
$S:z+3}
C.hgy.prototype={
$1(d){return C.anw(A.a_(d,x.N,x.z))},
$S:z+9}
C.hgz.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.hgA.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fQJ.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fQK.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hgJ.prototype={
$1(d){return!d.as},
$S:z+1}
C.fQd.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fQe.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fQf.prototype={
$2(d,e){return B.o.aQ(d.Q,e.Q)},
$S:z+7}
C.hg6.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fV7.prototype={
$1(d){return d.Q},
$S:z+15}
C.h7J.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fUd.prototype={
$1(d){return C.anw(A.a_(d,x.N,x.z))},
$S:z+9}
C.fUe.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fUf.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.h7E.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fAc.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAd.prototype={
$1(d){return C.hxZ(A.a_(d,x.N,x.z))},
$S:z+24}
C.fAe.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fAf.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fAg.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAt.prototype={
$2(d,e){return d.eD(new C.fAu(e))},
$S:2038}
C.fAu.prototype={
$1(d){$.an.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.co},
$S:2039}
C.fAq.prototype={
$1(d){return C.ilV(d,this.a)},
$S:z+84}
C.fAr.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fAs.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fER.prototype={
$1(d){return d.a},
$S:z+56}
C.fES.prototype={
$1(d){return d.length!==0},
$S:3}
C.fET.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fHT.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fNg.prototype={
$1(d){return C.hJO(d,C.HI(d,this.a))},
$S:z+5}
C.fNh.prototype={
$1(d){return C.hJP(d,C.HI(d,this.a))},
$S:z+5};(function aliases(){var w=C.aD7.prototype
w.byy=w.t
w=C.aBg.prototype
w.byt=w.t
w=C.aII.prototype
w.byW=w.t
w=C.aD8.prototype
w.byz=w.t
w=C.aDa.prototype
w.byA=w.t
w=C.aDb.prototype
w.byB=w.t
w=C.aOX.prototype
w.bBp=w.t
w=C.aR4.prototype
w.bDK=w.t
w=C.aR5.prototype
w.bDL=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aG9.prototype,"gcrk","crl",28)
var r
w(r=C.aD6.prototype,"gcjW","cjX",65)
v(r,"gaQI","OJ",0)
v(r,"gczV","BS",0)
v(r,"gbRA","Ps",0)
v(r,"gcOJ","zt",0)
v(r,"gctv","a2F",0)
v(r,"gbMT","P9",0)
v(r,"gbS_","YK",0)
w(r,"gbX6","bX7",78)
v(r,"gbH2","AL",0)
v(C.aD9.prototype,"gcOF","Go",0)
v(r=C.anl.prototype,"gbuT","buU",2)
v(r,"gbuL","buM",2)
v(r,"gcPM","cPN",2)
u(r,"gqw","kN",0)
u(r=C.alv.prototype,"gf2","fS",2)
w(r,"gckZ","cl_",27)
u(C.awm.prototype,"gqw","kN",0)
v(r=C.aAi.prototype,"gd0q","d0r",2)
u(r,"gqw","kN",0)
u(C.aMA.prototype,"gbuR","buS",2)
v(C.anu.prototype,"gCp","cPZ",2)
u(r=C.ans.prototype,"gcQG","cQH",2)
u(r,"gqw","kN",0)
v(r=C.ano.prototype,"gbtJ","btK",2)
v(r,"gcVR","cVS",2)
u(r=C.anq.prototype,"gf2","fS",2)
u(r,"giD","cPi",2)
v(r=C.anm.prototype,"gcP7","cP8",2)
u(r,"gbsB","jK",2)
v(r=C.aGK.prototype,"gaiq","wA",0)
v(r,"gcmM","a1M",0)
v(r,"gaUZ","J1",0)
v(r=C.aGH.prototype,"gcKx","a4S",0)
v(r,"gaiq","wA",0)
v(r,"gcxS","a3k",0)
v(r,"gcmE","b5g",2)
v(r,"gcnN","a20",0)
w(r,"gcjQ","cjR",35)
v(r,"gbRS","J6",0)
v(r,"gcLG","cLH",2)
v(r,"gc9h","a_x",0)
w(r,"gcik","cil",36)
v(r,"gcms","cmt",2)
v(r=C.aF7.prototype,"gcfs","Rb",0)
v(r,"gcfu","cfv",2)
v(r,"gbOn","abY",0)
v(r=C.aGJ.prototype,"gbVt","Zf",0)
v(r,"gc55","ZW",0)
v(r,"gcEt","a4e",0)
v(r,"gcAw","a3O",0)
v(C.aGI.prototype,"gcAd","akd",0)
v(C.avz.prototype,"gcii","a1m",0)
v(C.aBQ.prototype,"ga4A","Lu",2)
v(C.aBP.prototype,"ga4A","Lu",2)
v(C.aAu.prototype,"ga4A","Lu",2)
v(r=C.aIi.prototype,"gb6t","Sc",0)
v(r,"gbFR","Xl",0)
v(r,"gcnB","cnC",2)
w(C.aIh.prototype,"gcja","cjb",69)
t(C.aIj.prototype,"gaUU",0,0,null,["$1","$0"],["J0","bPI"],70,0,0)
s(C,"hSq","ivY",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aG,[C.ar6,C.va,C.nM,C.IN,C.ah2,C.L9,C.vb,C.bWb,C.tt,C.brt,C.anD,C.af6,C.lN,C.bUN,C.avL,C.zT,C.amb,C.Ne,C.bcG,C.ab8,C.bk5,C.ah9,C.aBw,C.agY,C.aMA,C.Lg,C.GZ,C.biZ,C.aMu,C.asu,C.dlP,C.mi,C.aX8,C.aX7,C.aVa,C.uv,C.rH,C.m_,C.ic,C.le,C.aKq])
u(A.hp,[C.fZ8,C.fZ7,C.fZ9,C.h8M,C.fLT,C.fLU,C.fLZ,C.fWN,C.fWM,C.fWL,C.cb_,C.h9j,C.h9b,C.h9n,C.fQR,C.dVb,C.dV6,C.dV7,C.dUK,C.dUG,C.dVq,C.dVr,C.dVk,C.dVl,C.dVs,C.dVt,C.fRC,C.fUa,C.fUb,C.h7O,C.hgx,C.fQI,C.h8p,C.dl1,C.dko,C.dkx,C.dkO,C.dkt,C.dkz,C.dkq,C.dkD,C.dkE,C.dkC,C.dkT,C.dkS,C.dmP,C.dmQ,C.dmR,C.dlf,C.dlk,C.dlj,C.cT3,C.cT5,C.dc6,C.dcv,C.dcw,C.dcz,C.dcB,C.dcC,C.dcD,C.dcF,C.dcG,C.bUx,C.bUr,C.fEy,C.hgp,C.hgq,C.hgr,C.hgm,C.hgs,C.hgt,C.hgu,C.hgl,C.fSf,C.h6I,C.fO3,C.fV6,C.bPz,C.hgP,C.h7k,C.bNI,C.bND,C.bNF,C.bNE,C.ctJ,C.ctE,C.ctF,C.ctD,C.ctB,C.ctG,C.cU7,C.cII,C.cIL,C.cIJ,C.cIM,C.cIN,C.fgI,C.fr4,C.bVj,C.bVd,C.bVh,C.bUV,C.e77,C.e74,C.e75,C.e73,C.e79,C.bVb,C.bV1,C.bUM,C.bUL,C.bUH,C.bUI,C.bUJ,C.bUK,C.e8N,C.e8c,C.e87,C.e7z,C.e7P,C.e7S,C.e7O,C.e7N,C.e83,C.e84,C.e7Z,C.e7n,C.e8f,C.e89,C.e7p,C.e7q,C.e7r,C.e7w,C.e7u,C.e7t,C.e7J,C.e7K,C.e7E,C.e8m,C.e8i,C.dlq,C.dlr,C.fRG,C.fRH,C.fRI,C.fRE,C.fRF,C.fRL,C.fRM,C.fRN,C.fRJ,C.fRK,C.dlK,C.dlA,C.dlv,C.dlF,C.dlG,C.dlJ,C.dlx,C.dlM,C.dlN,C.dlO,C.fwF,C.f6s,C.dC1,C.dCb,C.dCc,C.dCd,C.dCg,C.dCf,C.dCh,C.dCm,C.dCn,C.cia,C.ci9,C.ci5,C.ci6,C.ci7,C.ci8,C.cif,C.cic,C.cid,C.e8z,C.e8C,C.e8B,C.e8I,C.e8J,C.dUu,C.h8T,C.h8f,C.hg5,C.h8j,C.h8i,C.dcU,C.dcV,C.dcQ,C.cKv,C.cKx,C.cKy,C.cKq,C.cKz,C.fwa,C.h6v,C.f3A,C.f3w,C.f3s,C.f3q,C.f3E,C.hfT,C.f3N,C.f3W,C.f3R,C.f3S,C.f40,C.cJI,C.cJG,C.cJH,C.fQy,C.hgF,C.fO2,C.bVG,C.bVF,C.bVC,C.bVD,C.bVE,C.fzD,C.fzE,C.h83,C.h84,C.h85,C.h86,C.h87,C.hgD,C.fR1,C.fUg,C.fUh,C.fUj,C.fUk,C.h7Q,C.hgy,C.hgz,C.hgA,C.fQJ,C.fQK,C.hgJ,C.fQd,C.fQe,C.hg6,C.fV7,C.h7J,C.fUd,C.fUe,C.h7E,C.fAc,C.fAd,C.fAe,C.fAf,C.fAg,C.fAu,C.fAq,C.fAr,C.fER,C.fES,C.fHT,C.fNg,C.fNh])
u(A.aw,[C.b1M,C.anj,C.aYr,C.a_I,C.bew,C.Rm,C.a7z,C.tS,C.IP,C.biX,C.bmO,C.bB_,C.bqb,C.aft,C.bmN,C.afs,C.bmM,C.aF8,C.aLw,C.afu,C.GV,C.biY,C.aeI,C.biW,C.bj0,C.b1K,C.avz,C.afP])
u(A.lM,[C.bfb,C.bgq,C.bgh,C.aKk,C.blP,C.brs,C.aYw,C.bfd,C.aD5,C.beF,C.bvB,C.blX,C.blm,C.blt,C.bj_,C.bi_,C.bnW,C.bAP])
u(A.iW,[C.h9g,C.h9h,C.h9i,C.h99,C.h9a,C.h9l,C.h9m,C.dVn,C.dV9,C.dVc,C.dUR,C.dUS,C.dUT,C.dUQ,C.dUY,C.dUP,C.dUZ,C.dV_,C.dUO,C.dV0,C.dUN,C.dV1,C.dUM,C.dV2,C.dUE,C.dUF,C.dUL,C.dV3,C.dUJ,C.dV4,C.dUI,C.dUU,C.dUH,C.dUV,C.dUD,C.dUW,C.dUX,C.dVo,C.dVp,C.dVd,C.dVe,C.dVf,C.dVg,C.dVh,C.dVi,C.dVj,C.dVv,C.dVm,C.fRD,C.dkm,C.dkk,C.dkl,C.dkn,C.dl0,C.dkQ,C.dkN,C.dkp,C.dkR,C.dkv,C.dkw,C.dky,C.dkP,C.dku,C.dkA,C.dkY,C.dkK,C.dkJ,C.dkL,C.dkM,C.dkF,C.dkH,C.dkI,C.dkB,C.dkU,C.dkX,C.dkr,C.dks,C.dmO,C.dmN,C.dmM,C.dmL,C.dmS,C.dmK,C.dmT,C.dlg,C.dlh,C.dli,C.dll,C.dle,C.dld,C.cT4,C.dc5,C.dci,C.dch,C.dcx,C.dcg,C.dcy,C.dcf,C.dce,C.dcA,C.dcd,C.dcq,C.dcp,C.dcH,C.bUq,C.bUA,C.bUs,C.bUt,C.bUw,C.bUv,C.bUy,C.bUz,C.bUu,C.bUo,C.bUp,C.bW3,C.bW4,C.bW5,C.bW6,C.bW7,C.bW8,C.bW9,C.hgo,C.h6J,C.bNH,C.bNC,C.bNA,C.bNB,C.bNz,C.ctL,C.ctM,C.ctK,C.ctN,C.ctP,C.ctQ,C.ctR,C.ctH,C.cIH,C.cIQ,C.cIR,C.cIS,C.cIP,C.cIT,C.cIU,C.cIV,C.cIW,C.cIK,C.cIO,C.bVz,C.bVy,C.bVw,C.bVu,C.bVv,C.bVr,C.bVs,C.bVt,C.bVx,C.bVq,C.fgJ,C.fgK,C.fgL,C.fgM,C.fgN,C.bVn,C.bVo,C.bVp,C.bVi,C.bVk,C.bVl,C.bVm,C.bVe,C.bUZ,C.bUY,C.bUX,C.bUR,C.bUS,C.bUW,C.bUT,C.bUU,C.bUQ,C.e76,C.e78,C.e71,C.e72,C.e70,C.e7a,C.e7b,C.e7c,C.e7f,C.e7g,C.e7h,C.e7i,C.e7j,C.e7k,C.e7l,C.e7m,C.e7d,C.e7e,C.bVa,C.bV9,C.bV0,C.bV_,C.bV6,C.bV7,C.bV3,C.bV4,C.bV5,C.bV2,C.bUB,C.bUC,C.bUG,C.bUF,C.bUE,C.bUD,C.e8M,C.e8L,C.e8O,C.e8P,C.e8Q,C.e8K,C.e8S,C.e8R,C.e8a,C.e8b,C.e8d,C.e7A,C.e7R,C.e7Q,C.e7T,C.e86,C.e7M,C.e7X,C.e7Y,C.e7W,C.e7U,C.e7V,C.e8_,C.e80,C.e81,C.e85,C.e7o,C.e88,C.e7s,C.e7v,C.e7x,C.e8e,C.e7D,C.e7B,C.e7F,C.e7G,C.e7C,C.e7H,C.e7L,C.e8n,C.e8o,C.e8g,C.e8j,C.e8k,C.e8l,C.e8q,C.e8h,C.e7y,C.dlp,C.dlo,C.dlt,C.dlD,C.dlu,C.f6r,C.dC2,C.dC_,C.dC0,C.dCa,C.dC9,C.dC8,C.dCi,C.dC7,C.dCj,C.dC6,C.dCk,C.dC5,C.dCl,C.dC4,C.dC3,C.dCe,C.dCo,C.dCx,C.e8A,C.e8E,C.e8F,C.e8w,C.e8x,C.e8y,C.e8D,C.e8H,C.e8G,C.e8r,C.e8s,C.e8t,C.e8u,C.e8v,C.dUv,C.h8Q,C.cs2,C.dcT,C.dcS,C.dcW,C.dcP,C.dcR,C.cKn,C.cKt,C.cKu,C.cKs,C.cKw,C.cKr,C.cKo,C.cKp,C.cKA,C.fwb,C.fwc,C.f3C,C.f3t,C.f3u,C.f3v,C.f3x,C.f3y,C.f3B,C.f3o,C.f3r,C.f3D,C.f3p,C.f3G,C.f3H,C.f3I,C.f3J,C.f3F,C.f3j,C.f3k,C.f3l,C.f3n,C.f3m,C.f41,C.f42,C.f3L,C.f3M,C.f3T,C.f3U,C.f3V,C.f3P,C.f3Q,C.f48,C.f47,C.f49,C.f46,C.f3K,C.f3O,C.f44,C.f43,C.f3Z,C.f4_,C.f3Y,C.f3X])
u(A.af,[C.arj,C.UJ,C.a0t,C.a0x,C.a0v,C.a03,C.ank,C.alu,C.awl,C.aAh,C.ant,C.anr,C.ann,C.X4,C.anp,C.UK,C.asx,C.asr,C.a18,C.asv,C.a1s,C.a1t,C.a8m,C.a05,C.a04,C.a_y,C.a3g,C.GK,C.aAn,C.avy,C.avs,C.avx,C.PB])
u(A.ah,[C.aG9,C.biR,C.aD6,C.bjf,C.aD9,C.bgo,C.aD7,C.aBg,C.aII,C.aAi,C.aDb,C.aDa,C.aD8,C.boh,C.anq,C.anm,C.aGK,C.aGH,C.aF7,C.aGJ,C.aGI,C.boi,C.aOX,C.aBQ,C.aBP,C.aAu,C.bAS,C.aR4,C.aR5,C.aIi,C.bpH,C.aIh,C.bCE])
u(A.iX,[C.dV8,C.dVa,C.dV5,C.dVu,C.fUc,C.bUn,C.dl_,C.dkZ,C.dkG,C.dkV,C.dkW,C.dlm,C.bWa,C.bW2,C.bUO,C.bUP,C.hgn,C.hgO,C.bNG,C.ctO,C.ctI,C.ctC,C.fgO,C.bVc,C.bVf,C.bVg,C.dwg,C.bV8,C.e82,C.e7I,C.e8p,C.dlC,C.dlB,C.dlz,C.dlE,C.dlH,C.dlI,C.dls,C.dlw,C.dly,C.dlL,C.ci3,C.cib,C.cig,C.dUw,C.h8S,C.h8R,C.fw8,C.fw9,C.f3z,C.f45,C.cJJ,C.fE6,C.fzF,C.fUi,C.fQf,C.fUf,C.fAt,C.fAs,C.fET])
u(A.lk,[C.a2M,C.ahb,C.a34,C.a0V,C.adJ,C.aNh,C.IO,C.anv,C.cJK,C.cJL])
t(C.anl,C.aD7)
t(C.alv,C.aBg)
t(C.awm,C.aII)
t(C.biV,C.aDb)
t(C.anu,C.biV)
t(C.biU,C.aDa)
t(C.ans,C.biU)
t(C.biT,C.aD8)
t(C.ano,C.biT)
t(C.bnX,C.aOX)
t(C.bAQ,C.aR4)
t(C.bAR,C.aR5)
t(C.aIj,C.bCE)
t(C.bcU,A.bcH)
t(C.bAT,A.a8_)
t(C.bcT,C.bAT)
w(C.aD7,A.cj)
w(C.aBg,A.cj)
w(C.aII,A.eY)
w(C.aD8,A.cj)
v(C.biT,C.agY)
w(C.aDa,A.cj)
v(C.biU,C.agY)
w(C.aDb,A.cj)
v(C.biV,C.agY)
w(C.aOX,A.eY)
w(C.aR4,A.cj)
w(C.aR5,A.cj)
v(C.bCE,A.eE)
v(C.bAT,A.jy)})()
A.jf(b.typeUniverse,JSON.parse('{"b1M":{"aw":[],"x":[]},"bfb":{"aC":[]},"arj":{"af":[],"x":[]},"aG9":{"ah":["arj"]},"UJ":{"af":[],"x":[]},"anj":{"aw":[],"x":[]},"aYr":{"aw":[],"x":[]},"biR":{"ah":["UJ"]},"a0t":{"af":[],"x":[]},"a0x":{"af":[],"x":[]},"a0v":{"af":[],"x":[]},"a03":{"af":[],"x":[]},"aD6":{"ah":["a0t"]},"bjf":{"ah":["a0x"]},"aD9":{"ah":["a0v"]},"a_I":{"aw":[],"x":[]},"bgq":{"aC":[]},"bgh":{"aC":[]},"bgo":{"ah":["a03"]},"aKk":{"aC":[]},"blP":{"aC":[]},"bew":{"aw":[],"x":[]},"ank":{"af":[],"x":[]},"anl":{"ah":["ank"]},"brs":{"aC":[]},"aYw":{"aC":[]},"alu":{"af":[],"x":[]},"awl":{"af":[],"x":[]},"aAh":{"af":[],"x":[]},"alv":{"ah":["alu"]},"bfd":{"aC":[]},"Rm":{"aw":[],"x":[]},"aD5":{"aC":[]},"awm":{"ah":["awl"]},"beF":{"aC":[]},"aAi":{"ah":["aAh"]},"ant":{"af":[],"x":[]},"anr":{"af":[],"x":[]},"ann":{"af":[],"x":[]},"anu":{"ah":["ant"]},"bvB":{"aC":[]},"ans":{"ah":["anr"]},"blX":{"aC":[]},"ano":{"ah":["ann"]},"blm":{"aC":[]},"X4":{"af":[],"x":[]},"anp":{"af":[],"x":[]},"UK":{"af":[],"x":[]},"a7z":{"aw":[],"x":[]},"blt":{"aC":[]},"tS":{"aw":[],"x":[]},"IP":{"aw":[],"x":[]},"boh":{"ah":["X4"]},"anq":{"ah":["anp"]},"anm":{"ah":["UK"]},"asx":{"af":[],"x":[]},"asr":{"af":[],"x":[]},"a18":{"af":[],"x":[]},"afu":{"aw":[],"x":[]},"aGK":{"ah":["asx"]},"aGH":{"ah":["asr"]},"biX":{"aw":[],"x":[]},"bj_":{"aC":[]},"bmO":{"aw":[],"x":[]},"bi_":{"aC":[]},"bB_":{"aw":[],"x":[]},"bqb":{"aw":[],"x":[]},"aF7":{"ah":["a18"]},"aft":{"aw":[],"x":[]},"bmN":{"aw":[],"x":[]},"afs":{"aw":[],"x":[]},"bmM":{"aw":[],"x":[]},"aF8":{"aw":[],"x":[]},"aLw":{"aw":[],"x":[]},"GV":{"aw":[],"x":[]},"asv":{"af":[],"x":[]},"a1s":{"af":[],"x":[]},"a1t":{"af":[],"x":[]},"aGJ":{"ah":["asv"]},"biY":{"aw":[],"x":[]},"aeI":{"aw":[],"x":[]},"biW":{"aw":[],"x":[]},"bj0":{"aw":[],"x":[]},"aGI":{"ah":["a1s"]},"boi":{"ah":["a1t"]},"b1K":{"aw":[],"x":[]},"a8m":{"af":[],"x":[]},"bnX":{"ah":["a8m"]},"bnW":{"aC":[]},"avz":{"aw":[],"x":[]},"a05":{"af":[],"x":[]},"a04":{"af":[],"x":[]},"a_y":{"af":[],"x":[]},"a3g":{"af":[],"x":[]},"aBQ":{"ah":["a05"]},"aBP":{"ah":["a04"]},"aAu":{"ah":["a_y"]},"bAS":{"ah":["a3g"]},"GK":{"af":[],"x":[]},"aAn":{"af":[],"x":[]},"bAQ":{"ah":["GK"]},"bAR":{"ah":["aAn"]},"bAP":{"aC":[]},"avy":{"af":[],"x":[]},"aIi":{"ah":["avy"]},"afP":{"aw":[],"x":[]},"avs":{"af":[],"x":[]},"avx":{"af":[],"x":[]},"bpH":{"ah":["avs"]},"aIh":{"ah":["avx"]},"PB":{"af":[],"x":[]},"aIj":{"ah":["PB"],"eE":[]},"bcT":{"jy":[],"fq":[]}}'))
A.RV(b.typeUniverse,JSON.parse('{"agY":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aVa"),cq:w("mB"),Q:w("rH"),r:w("bm<n,n>"),c5:w("aX7"),dY:w("aX8"),fH:w("Ne"),de:w("amb"),dN:w("Nn<G>"),gc:w("EL<G>"),A:w("eP<n?>"),e:w("IN"),B:w("nM"),P:w("ic"),df:w("lN"),k:w("le"),x:w("az<~>"),U:w("N<a5m>"),V:w("N<aa>"),C:w("N<rH>"),O:w("N<u>"),c:w("N<Ne>"),b:w("N<amb>"),ac:w("N<eP<n?>>"),I:w("N<nM>"),u:w("N<ic>"),J:w("N<lN>"),_:w("N<le>"),cl:w("N<az<ai<a9<n,@>>>>"),R:w("N<mF>"),eU:w("N<ai<+(H,H)>>"),ez:w("N<a9<n,aG>>"),gE:w("N<a9<n,n>>"),Y:w("N<a9<n,@>>"),fD:w("N<n6>"),bp:w("N<p7>"),g:w("N<r>"),ar:w("N<avL>"),v:w("N<h_>"),gy:w("N<ab8>"),L:w("N<+(n,n)>"),G:w("N<+(H,H)>"),E:w("N<+(H,~())>"),bd:w("N<+(n,G,P)>"),bF:w("N<+count,id,name(G,n,n)>"),F:w("N<d3>"),s:w("N<n>"),cF:w("N<au>"),aS:w("N<jo>"),dT:w("N<bcG>"),p:w("N<x>"),Z:w("N<fq>"),D:w("N<m_>"),h:w("N<aBw>"),cC:w("N<bk5>"),fp:w("N<L9>"),M:w("N<Lg>"),gZ:w("N<aKq>"),gA:w("N<ah2>"),e4:w("N<ah9>"),dE:w("N<aMu>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<G>"),dS:w("N<aC?>"),d4:w("N<n?>"),eF:w("cB<ah<af>>"),d:w("ai<nM>"),do:w("ai<ic>"),cg:w("ai<lN>"),ax:w("ai<le>"),fO:w("ai<a9<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(G,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<m_>"),j:w("ai<@>"),fK:w("bw<n,n>"),d2:w("bw<n,ai<a9<n,@>>>"),a:w("a9<n,@>"),f:w("a9<@,@>"),gv:w("O<n,IQ>"),cM:w("O<G,n>"),w:w("im"),g2:w("t2"),bV:w("ar6"),fL:w("cp"),K:w("aG"),dc:w("h_"),fo:w("PY<G>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(P,G)"),d9:w("+dx,hidden(H,ai<ic>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),fT:w("iQ<ic>"),ec:w("iQ<n>"),gW:w("rn<H>"),X:w("bq<H>"),bW:w("dF"),W:w("bg<n>"),b4:w("bg<G>"),cI:w("ki<n>"),av:w("X<zT>"),cc:w("X<n>"),l:w("x"),gF:w("fq"),fA:w("m_"),dO:w("GZ"),bw:w("afs<n?>"),cy:w("Li"),q:w("l2"),y:w("P"),i:w("H"),z:w("@"),S:w("G"),eK:w("ai<le>?"),m:w("asu?"),cT:w("r?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),he:w("+qrPayload,token,usesRemaining(n,n,G)?"),gG:w("+members,trees,viewOnly(G,G,P)?"),az:w("oy?"),T:w("n?"),aD:w("dF?"),o:w("m_?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b7Y=new A.bc(B.h4,B.bJ,B.h4,B.bJ)
D.afZ=new A.bc(B.h4,B.i8,B.h4,B.i8)
D.b8c=new A.bc(B.jN,B.bJ,B.bJ,B.bJ)
D.b8g=new A.ax(B.cX,1.4,B.r,-1)
D.b8r=new A.ax(B.ab,1,B.r,-1)
D.agx=new A.aY(140,1/0,0,1/0)
D.b9L=new A.aY(0,1/0,64,1/0)
D.b9P=new A.aY(0,84,0,1/0)
D.agE=new A.aY(130,1/0,0,1/0)
D.aFj=w([B.mr,B.tr,B.c],x.O)
D.ccP=new A.a6(B.aw,B.aD,B.w,D.aFj,null,null)
D.baB=new A.o(null,null,null,null,null,D.ccP,B.m)
D.dn1=w([B.aW,B.bU],x.O)
D.cf0=new A.a6(B.aU,B.b1,B.w,D.dn1,null,null)
D.baW=new A.o(null,null,null,null,null,D.cf0,B.m)
D.ZS=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fL=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.drh=w([B.dD,D.ZS,D.fL],x.O)
D.cc_=new A.a6(B.aU,B.b1,B.w,D.drh,null,null)
D.bbG=new A.o(null,null,null,null,null,D.cc_,B.m)
D.fKI=new A.F(!0,B.bX,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hlM=new A.D("?",null,D.fKI,null,null,null,null,null,null,null,null,null)
D.bfw=new A.cn(B.z,null,null,D.hlM,null)
D.Xn=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3D=new A.D("\ud83c\udf33",null,D.Xn,null,null,null,null,null,null,null,null,null)
D.ahp=new A.cn(B.z,null,null,D.h3D,null)
D.h6j=new A.D("\ud83c\udfc6",null,B.LO,null,null,null,null,null,null,null,null,null)
D.bfH=new A.cn(B.z,null,null,D.h6j,null)
D.bhx=new A.fs(null,null,null,null,null,E.kI,null,null,null,null)
D.ahq=new A.cn(B.z,null,null,D.bhx,null)
D.l6=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fLg=new A.F(!0,D.l6,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5i=new A.D("No books on the shelf yet.",null,D.fLg,null,null,null,null,null,null,null,null,null)
D.eHu=new A.C(B.o8,D.h5i,null)
D.bfY=new A.cn(B.z,null,null,D.eHu,null)
D.fSz=new A.F(!0,D.fL,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hmK=new A.D("\ud83d\ude8c  On the road\u2026",null,D.fSz,null,null,null,null,null,null,null,null,null)
D.eI3=new A.C(B.cu,D.hmK,null)
D.bgq=new A.cn(B.z,null,null,D.eI3,null)
D.aZE=new A.D("\ud83e\uddfa",null,D.Xn,null,null,null,null,null,null,null,null,null)
D.bgF=new A.cn(B.z,null,null,D.aZE,null)
D.h8N=new A.D("\ud83c\udfad",null,D.Xn,null,null,null,null,null,null,null,null,null)
D.bgQ=new A.cn(B.z,null,null,D.h8N,null)
D.bgT=new A.cn(B.z,null,null,A8.ZE,null)
D.ahK=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ahR=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bj8=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bjd=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bjp=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bjr=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bjt=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bjB=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lY=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bjF=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bjK=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bjM=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bjN=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lZ=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bkq=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Cp=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bkz=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bkT=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bkW=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bl1=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bl9=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aiw=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.blg=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.a_5=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aiz=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.blr=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.a_7=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.blM=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.aiL=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bma=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bmq=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bmR=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bn1=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GM=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bnq=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bnt=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bnx=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.aje=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bnP=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bnV=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bo1=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.aji=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.boa=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.boF=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.boP=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.boS=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.boY=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ajz=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bpE=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ajY=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bqE=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ak9=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.br3=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.H_=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bra=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.brk=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.brm=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.akd=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.brE=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.brG=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.brJ=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.akl=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a_R=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bs7=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bsu=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bsz=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.akx=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bsG=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a_X=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bt2=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bt3=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.H8=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.btR=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bus=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.buy=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.buC=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.r_=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.buN=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.buR=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.buX=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.buZ=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.alj=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aln=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.He=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a0i=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.alw=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bwe=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bww=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bwZ=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bx7=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.alW=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a0u=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bxj=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bxz=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0A=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bxQ=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.by6=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0E=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.byb=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ame=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.amg=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.byu=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.amn=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.byX=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bz0=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bz7=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bzg=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bzp=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bA1=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bAx=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.h_n=new A.D("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bE2=new A.eP(null,D.h_n,B.fm,null,x.A)
D.h8E=new A.D("None",null,null,null,null,null,null,null,null,null,null,null)
D.bE4=new A.eP(null,D.h8E,B.fm,null,x.A)
D.bEC=new A.bh(38e5)
D.bFl=new A.iK(0,10,0,10)
D.bFF=new A.iK(0,4,0,4)
D.bFI=new A.R(0,4,5,0)
D.bFY=new A.R(10,10,14,10)
D.bG8=new A.iK(10,4,10,4)
D.bGh=new A.iK(10,8,10,8)
D.bGi=new A.R(10,8,8,8)
D.bGO=new A.R(12,6,12,2)
D.bH6=new A.R(14,0,14,6)
D.bHa=new A.R(14,10,6,6)
D.bHb=new A.R(14,12,14,0)
D.bHf=new A.R(14,12,14,8)
D.bHi=new A.R(14,12,8,14)
D.bHm=new A.iK(14,14,14,14)
D.bHF=new A.R(14,6,14,40)
D.bHI=new A.R(14,8,14,30)
D.bI5=new A.R(16,2,16,10)
D.bIe=new A.R(16,6,16,30)
D.bIg=new A.R(16,6,16,8)
D.bIv=new A.R(18,10,18,4)
D.bIx=new A.R(18,12,18,0)
D.bIE=new A.R(18,14,12,4)
D.aoR=new A.R(18,16,18,8)
D.bIV=new A.R(18,20,18,22)
D.bJ_=new A.R(18,30,18,30)
D.bJh=new A.R(20,10,12,20)
D.bJk=new A.R(20,11,20,11)
D.bJw=new A.R(20,18,16,18)
D.bJy=new A.R(20,18,20,6)
D.bKn=new A.R(24,32,24,28)
D.bKo=new A.R(24,36,24,32)
D.bKr=new A.R(26,26,24,14)
D.bKF=new A.R(2,4,2,8)
D.bKJ=new A.R(30,0,30,0)
D.bKU=new A.R(38,22,22,22)
D.aph=new A.R(40,24,24,24)
D.bKW=new A.iK(40,40,40,40)
D.bKY=new A.R(46,30,30,30)
D.bLq=new A.R(56,40,40,40)
D.bLu=new A.R(1.25,1.25,1.25,1.25)
D.bLv=new A.R(60,0,60,0)
D.bLz=new A.R(6,14,6,16)
D.bLD=new A.R(6,4,12,0)
D.bLH=new A.R(6,6,10,2)
D.bLO=new A.iK(7,3,7,3)
D.bMk=new A.R(5,1.5,5,1.5)
D.bMv=new A.R(6,2.5,6,2.5)
D.hgU=new A.D("Family Games",null,B.js,null,null,null,null,null,null,null,null,null)
D.fYY=new A.D("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.Xe,null,null,null,null,null,null,null,null,null)
D.cOy=w([D.hgU,D.fYY],x.p)
D.bBw=new A.fv(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.cOy,null)
D.bMW=new A.bu(1,B.b8,D.bBw,null)
D.hlj=new A.D("Signature",null,B.nD,null,null,null,null,null,null,null,null,null)
D.bMZ=new A.bu(1,B.b8,D.hlj,null)
D.hdo=new A.D("MADE BY THE ONE WHO PLANTED THE TREE",null,U.uB,null,null,null,null,null,null,null,null,null)
D.bNw=new A.bu(1,B.b8,D.hdo,null)
D.him=new A.D("Tell the AI what to fix",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bNN=new A.bu(1,B.b8,D.him,null)
D.hko=new A.D("Worksheets",null,B.aZ8,null,null,null,null,null,null,null,null,null)
D.fTw=new A.F(!0,E.aif,null,null,null,null,13,B.cF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hjd=new A.D("Track your project spending",null,D.fTw,null,null,null,null,null,null,null,null,null)
D.ddr=w([D.hko,B.at,D.hjd],x.p)
D.bB9=new A.fv(B.ah,B.e,B.h,B.B,null,B.p,null,0,D.ddr,null)
D.bNT=new A.bu(1,B.b8,D.bB9,null)
D.fOb=new A.F(!0,E.kI,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZx=new A.D("FAMILY LIBRARY",null,D.fOb,null,null,null,null,null,null,null,null,null)
D.bOb=new A.bu(1,B.b8,D.fZx,null)
D.PX=new C.IN("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.xi=new C.IO(0,"male")
D.oY=new C.IO(1,"female")
D.zN=new C.IO(2,"unknown")
D.vp=new C.anv(0,"owner")
D.PY=new C.anv(1,"editor")
D.lf=new C.anv(2,"viewer")
D.arg=new A.a0(61199,"MaterialIcons",!1)
D.bTw=new A.a0(61504,"MaterialIcons",!1)
D.bTx=new A.a0(61505,"MaterialIcons",!1)
D.bTz=new A.a0(61587,"MaterialIcons",!1)
D.bTG=new A.a0(61890,"MaterialIcons",!1)
D.bUz=new A.a0(63034,"MaterialIcons",!0)
D.bUR=new A.a0(63153,"MaterialIcons",!1)
D.bVn=new A.a0(63429,"MaterialIcons",!1)
D.atn=new A.a0(984520,"MaterialIcons",!1)
D.bU5=new A.a0(62776,"MaterialIcons",!1)
D.bXQ=new A.ae(D.bU5,26,B.b6,null,null,null)
D.bSu=new A.a0(57648,"MaterialIcons",!1)
D.bYb=new A.ae(D.bSu,14,B.c,null,null,null)
D.bYt=new A.ae(B.Ig,17,null,null,null,null)
D.bYA=new A.ae(B.Qs,null,B.bU,null,null,null)
D.bZ_=new A.ae(E.a4k,null,null,null,null,null)
D.bZ2=new A.ae(B.jo,18,E.kI,null,null,null)
D.a43=new A.a0(62044,"MaterialIcons",!1)
D.bZ8=new A.ae(D.a43,null,B.aW,null,null,null)
D.bZf=new A.ae(B.A_,18,B.c,null,null,null)
D.bZX=new A.ae(B.eh,16,null,null,null,null)
D.c_3=new A.ae(D.a43,32,B.aW,null,null,null)
D.c_n=new A.ae(E.arh,18,B.cX,null,null,null)
D.c0u=new A.ae(B.It,22,B.aC,null,null,null)
D.c0I=new A.ae(B.eh,22,B.b6,null,null,null)
D.c0V=new A.ae(Z.a48,22,B.c,null,null,null)
D.c11=new A.ae(B.vx,52,B.c,null,null,null)
D.c1b=new A.ae(B.It,30,B.aC,null,null,null)
D.c1x=new A.ae(B.Iq,null,B.c,null,null,null)
D.au7=new A.ae(B.vJ,22,B.c,null,null,null)
D.c1G=new A.ae(B.eh,17,null,null,null,null)
D.c23=new A.ae(B.xv,26,B.cX,null,null,null)
D.c2Q=new A.ae(B.a4y,16,null,null,null,null)
D.c3B=new A.ae(B.vx,24,B.c,null,null,null)
D.c3H=new A.ae(B.Qq,20,B.u9,null,null,null)
D.c3N=new A.ae(B.Ie,null,B.bU,null,null,null)
D.c3W=new A.ae(B.jo,18,B.c,null,null,null)
D.c4C=new A.ae(B.cC,22,B.ab,null,null,null)
D.c5v=new A.ae(B.eq,16,B.ab,null,null,null)
D.c5H=new A.ae(D.a43,20,B.aW,null,null,null)
D.auy=new A.ae(B.h1,20,null,null,null,null)
D.c6g=new A.ae(B.cC,18,D.l6,null,null,null)
D.c6x=new A.ae(B.A9,28,B.c,null,null,null)
D.c6J=new A.ae(B.Qg,null,B.fs,null,null,null)
D.c72=new A.ae(B.A9,24,B.c,null,null,null)
D.c7v=new A.ae(B.vx,null,B.aW,null,null,null)
D.c7w=new A.ae(B.jH,20,B.cX,null,null,null)
D.c7Q=new A.ae(B.Ig,16,null,null,null,null)
D.c9o=new A.ef(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eV,!0,null,null,null,null)
D.avj=new C.a7z(10,null)
D.c9V=new C.a7z(12,null)
D.c9W=new C.a7z(14,null)
D.dvH=w([B.bw,B.aW,B.fz,B.b6],x.O)
D.cb5=new A.a6(B.aw,B.aD,B.w,D.dvH,null,null)
D.btD=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bA8=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d9x=w([D.btD,D.bA8],x.O)
D.cbi=new A.a6(B.aU,B.b1,B.w,D.d9x,null,null)
D.dp8=w([B.fo,B.h7,B.fz],x.O)
D.cbo=new A.a6(B.aw,B.aD,B.w,D.dp8,null,null)
D.al8=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bjO=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.dbY=w([D.al8,D.bjO],x.O)
D.cc0=new A.a6(B.aU,B.b1,B.w,D.dbY,null,null)
D.bnG=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aEA=w([D.bnG,D.al8],x.O)
D.cck=new A.a6(B.aw,B.aD,B.w,D.aEA,null,null)
D.ajQ=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bqv=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dob=w([D.ajQ,D.bqv],x.O)
D.cd_=new A.a6(B.a5,B.a9,B.w,D.dob,null,null)
D.dDm=w([B.bA,B.nU],x.O)
D.cd1=new A.a6(B.aU,B.b1,B.w,D.dDm,null,null)
D.bty=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dEk=w([D.bty,D.l6,D.l6,I.Oq],x.O)
D.dH4=w([0,0.07,0.9,1],x.n)
D.cdx=new A.a6(B.a5,B.a9,B.w,D.dEk,D.dH4,null)
D.cdG=new A.a6(B.aw,B.aD,B.w,B.Uj,null,null)
D.d7_=w([B.az,D.lY],x.O)
D.cdJ=new A.a6(B.a5,B.a9,B.w,D.d7_,null,null)
D.dCT=w([B.b6,B.aW,B.bU],x.O)
D.ceN=new A.a6(B.aw,B.aD,B.w,D.dCT,null,null)
D.cjd=w([10,20,30],x.t)
D.ctf=w([-1,-0.4,0.3,1],x.n)
D.cAO=w([B.bw,B.b6,B.fo],x.O)
D.cAW=w([B.bj,B.az,B.kH],x.O)
D.cAY=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cBH=w([30,140,262,360],x.n)
D.brP=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cHi=w([D.brP,E.akH],x.O)
D.eC8=new A.r(1,2)
D.fvX=new A.d3(B.b9,D.eC8,3)
D.aBu=w([D.fvX],x.F)
D.cOQ=w([B.hl,B.ci,B.fy],x.O)
D.cRF=w([B.bQ,B.bz,B.bt],x.O)
D.bP1=new C.va("classic","Classic leather","Gold-edged brown leather",D.aEA,E.kI,E.kI,"\u2766",B.K,!0,!1,!1,!1)
D.biT=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.byN=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dfl=w([D.biT,D.byN],x.O)
D.akK=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bOX=new C.va("ornate","Ornate gold","Double gold border and flourishes",D.dfl,D.akK,D.akK,"\u2726",B.K,!0,!0,!0,!1)
D.bnc=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bum=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d5G=w([D.bnc,D.bum],x.O)
D.bOW=new C.va("parchment","Parchment","Old paper with dark ink",D.d5G,D.H8,L.jk,"\u2767",B.K,!0,!1,!1,!0)
D.ahT=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bwW=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dAT=w([D.ahT,D.bwW],x.O)
D.brh=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bw8=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bOZ=new C.va("minimal","Clean paper","Plain and elegant, like a printed book",D.dAT,D.brh,D.bw8,"",B.K,!0,!0,!1,!0)
D.bP0=new C.va("midnight","Midnight","Deep blue with silver stars",K.aEU,B.cE,B.cm,"\u2727",B.K,!0,!0,!1,!1)
D.bOV=new C.va("emerald","Emerald library","Green cloth, title on the left",W.aBU,E.kI,B.h9,"\u25c6",B.bb,!0,!1,!1,!1)
D.bxs=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dyN=w([B.eA,D.bxs],x.O)
D.bsF=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.btW=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bP_=new C.va("rose","Rose vintage","Burgundy with rose-gold lettering",D.dyN,D.bsF,D.btW,"\u2740",B.K,!0,!1,!0,!1)
D.dDW=w([B.cx,F.ni],x.O)
D.bOY=new C.va("modern","Modern","Dark, bold, left-aligned",D.dDW,B.aH,B.c,"",B.bb,!1,!0,!1,!1)
D.a6x=w([D.bP1,D.bOX,D.bOW,D.bOZ,D.bP0,D.bOV,D.bP_,D.bOY],A.as("N<va>"))
D.cUI=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dDI=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bPc=new C.lN('What does "Ubuntu" mean?',D.dDI,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d7L=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bPf=new C.lN("In Swahili, what do we call a grandmother?",D.d7L,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d7C=w(["Babu","Mama","Baba","Dada"],x.s)
D.bPa=new C.lN("In Swahili, what do we call a grandfather?",D.d7C,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d93=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bPe=new C.lN("What is a sister called in Swahili?",D.d93,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.deI=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bPb=new C.lN("What is a brother called in Swahili?",D.deI,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d7B=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bPm=new C.lN("Which word means father in Swahili?",D.d7B,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dEW=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bPl=new C.lN('"Umoja ni nguvu" means...',D.dEW,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dBC=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bPn=new C.lN('"Haba na haba hujaza kibaba" teaches us...',D.dBC,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.dc6=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bPk=new C.lN('The African saying "It takes a village to raise a child" means...',D.dc6,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dFe=w(["The elders","The market","The river","The drum"],x.s)
D.bPg=new C.lN("Who is the traditional keeper of the family stories?",D.dFe,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cZ1=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bPd=new C.lN("Why do families sit round the fire at night?",D.cZ1,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dDY=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bPi=new C.lN('What does "Harambee" mean?',D.dDY,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.dhW=w(["An elder","A baby","A market","A cow"],x.s)
D.bPh=new C.lN('"Mzee" is a respectful word for...',D.dhW,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dyC=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bPj=new C.lN('What does "Shikamoo" show?',D.dyC,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aBP=w([D.bPc,D.bPf,D.bPa,D.bPe,D.bPb,D.bPm,D.bPl,D.bPn,D.bPk,D.bPg,D.bPd,D.bPi,D.bPh,D.bPj],x.J)
D.d2v=w([90,360],x.n)
D.d5c=w([B.bU,B.bp],x.O)
D.btl=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d5W=w([D.ahT,D.btl],x.O)
D.d6I=w([-1,-0.3,0.4,1],x.n)
D.d7I=w([0,0.45,0.72,0.92,1],x.n)
D.bn8=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d83=w([D.bn8,B.bF],x.O)
D.bkO=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.amx=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d8H=w([B.dD,D.bkO,D.amx],x.O)
D.d9R=w([B.bd,B.jy,B.pI],x.O)
D.bnI=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bw_=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bku=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d9W=w([D.bnI,D.bw_,D.bku],x.O)
D.daj=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.dat=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hQn=new C.af6(78,424,48,44,56)
D.hQl=new C.af6(214,396,34,34,42)
D.hQm=new C.af6(442,452,56,50,64)
D.aCN=w([D.hQn,D.hQl,D.hQm],A.as("N<af6>"))
D.db3=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bjH=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bpD=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dH0=w([D.ajQ,D.bjH,D.bpD],x.O)
D.bP2=new C.vb("leather","Leather",D.dH0,"vintage")
D.dj0=w([B.dl,B.GY,Ac.a_m],x.O)
D.bP9=new C.vb("midnight","Midnight",D.dj0,"starry")
D.d9S=w([B.et,B.ej,B.lA],x.O)
D.bP8=new C.vb("forest","Forest",D.d9S,"story")
D.dJh=w([B.eu,B.eA,B.kK],x.O)
D.bP5=new C.vb("burgundy","Burgundy",D.dJh,"royal")
D.cRc=w([B.az,B.nb,B.nK],x.O)
D.bP6=new C.vb("royal","Royal",D.cRc,"royal")
D.dcG=w([B.bz,B.cx,F.ni],x.O)
D.bP3=new C.vb("charcoal","Charcoal",D.dcG,"geo")
D.dH9=w([B.c8,B.e_,B.wS],x.O)
D.bP7=new C.vb("sunset","Sunset",D.dH9,"sunset")
D.dHX=w([B.jy,B.z6,B.a_q],x.O)
D.bP4=new C.vb("ocean","Ocean",D.dHX,"band")
D.AF=w([D.bP2,D.bP9,D.bP8,D.bP5,D.bP6,D.bP3,D.bP7,D.bP4],A.as("N<vb>"))
D.dde=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.ddX=w([B.an,B.aM,B.a_],x.O)
D.dfr=w([B.eA,B.ej,B.dl,B.j0,B.z8,B.cX,B.ke,B.cU,B.de],x.O)
D.dfs=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fvY=new A.d3(B.dJ,B.dS,8)
D.dfF=w([D.fvY],x.F)
D.dgV=w([B.c5,B.e_,B.ka],x.O)
D.blF=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.bpW=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.buh=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.dhc=w([D.blF,G.alg,D.bpW,D.buh,D.amx],x.O)
D.dhu=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.dhJ=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bj4=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bpe=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dif=w([D.bj4,D.aji,D.bpe],x.O)
D.diW=w([B.c5,B.hK],x.O)
D.dj1=w([G.nN,B.iu,G.ai4,B.d_],x.O)
D.dkK=w([B.d_,G.nN,B.iu,D.lZ,B.d_],x.O)
D.dlq=w([B.aQ,B.z4,B.yV],x.O)
D.eZI=new A.y(-0.65,0.6)
D.fc0=new A.y(-0.2,0.95)
D.fd9=new A.y(0.25,0.95)
D.f2h=new A.y(0.7,0.6)
D.fdK=new A.y(1,0.1)
D.dmh=w([Al.W6,D.eZI,D.fc0,D.fd9,D.f2h,D.fdK],x.G)
D.bs8=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.byF=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bmG=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.dmo=w([D.bs8,D.byF,D.bmG],x.O)
D.dmu=w([B.bM,B.c1,B.dH,B.aQ],x.O)
D.dn2=w([B.hZ,B.c8,B.v0],x.O)
D.dns=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dnE=w([B.fo,B.cX],x.O)
D.btH=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.do6=w([D.btH,D.ahR],x.O)
D.doi=w([B.cW,B.fM,B.h_],x.O)
D.dov=w([B.aH,B.bp,B.dl],x.O)
D.dp5=w([B.eH,B.dq,B.ej],x.O)
D.dpr=w([B.dT,B.dl,B.GY],x.O)
D.dpv=w([B.bu,B.n8,B.de],x.O)
D.dpM=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bsU=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.br_=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dq7=w([D.bsU,D.aje,D.br_],x.O)
D.dr_=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dsb=w([1,0,7,6,3,2],x.t)
D.a7w=w(["leather","linen","plain","stars","rays"],x.s)
D.dsn=w([0.5,2,3.6],x.n)
D.dsW=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bX6=new A.a0(983781,"MaterialIcons",!1)
D.aEg=w([B.Qs,B.hQ,B.kP,B.ih,F.atv,B.IE,B.rn,D.bX6,K.at8,B.DV,B.rq,B.m7],A.as("N<a0>"))
D.a7A=w(["double","single","corners","none"],x.s)
D.bOS=new C.zT("Little Seed","\ud83c\udf31",0)
D.bOU=new C.zT("Young Listener","\ud83d\udc42",40)
D.bOT=new C.zT("Storyteller","\ud83e\ude98",120)
D.bOR=new C.zT("Village Pride","\ud83c\udfe1",300)
D.bOP=new C.zT("Keeper of Roots","\ud83c\udf33",700)
D.bOQ=new C.zT("Elder of the Fire","\ud83d\udd25",1500)
D.aEi=w([D.bOS,D.bOU,D.bOT,D.bOR,D.bOP,D.bOQ],A.as("N<zT>"))
D.duc=w([B.d0,B.bl,B.cU],x.O)
D.dus=w([],x.C)
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
D.dwC=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dxa=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dyi=w([B.d_,G.nN,B.iu,D.lZ,B.d_,B.iu],x.O)
D.dzK=w([B.as,B.fM,B.j0],x.O)
D.dAr=w([-70,58],x.n)
D.dAt=w([-70,-30,20],x.n)
D.dBz=w([B.bu,B.n8,B.a0v],x.O)
D.dBR=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dYq=new C.mi("construction","Construction","Jobsite & builds",B.rp)
D.dYx=new C.mi("house","Home Build","Houses & rooms",B.vA)
D.dYn=new C.mi("grocery","Grocery","Store & pantry",B.a52)
D.dYm=new C.mi("calculator","Calculations","Math & estimates",B.Qz)
D.dYv=new C.mi("lumber","Materials","Lumber & supplies",B.IB)
D.dYj=new C.mi("kitchen","Kitchen","Remodel & meals",A4.QW)
D.bX3=new A.a0(983756,"MaterialIcons",!1)
D.dYo=new C.mi("landscape","Landscaping","Yard & garden",D.bX3)
D.dYi=new C.mi("plumbing","Plumbing","Pipes & water",B.qb)
D.dYy=new C.mi("electrical","Electrical","Wiring & power",B.fP)
D.dYg=new C.mi("store","Retail Shop","Daily business",B.kp)
D.dYh=new C.mi("paint_remodel","Paint & Remodel","Colors & walls",A4.QQ)
D.bWp=new A.a0(983311,"MaterialIcons",!1)
D.dYu=new C.mi("roofing","Roofing","Roofs & exteriors",D.bWp)
D.bXg=new A.a0(983986,"MaterialIcons",!1)
D.dYf=new C.mi("warehouse","Warehouse","Storage & stock",D.bXg)
D.dYs=new C.mi("vehicles","Vehicles","Fleet & transport",B.DS)
D.bU7=new A.a0(62785,"MaterialIcons",!1)
D.dYl=new C.mi("farm","Farm","Crops & livestock",D.bU7)
D.dYk=new C.mi("restaurant","Restaurant","Food & catering",B.vH)
D.dYr=new C.mi("tools","Tools","Workshop gear",B.DO)
D.dYw=new C.mi("wallet","Cash & Wallet","Quick spending",B.jH)
D.dYt=new C.mi("concrete","Concrete","Foundation work",F.asd)
D.dYp=new C.mi("blueprint","Blueprint","Plans & design",Ap.arL)
D.a85=w([D.dYq,D.dYx,D.dYn,D.dYm,D.dYv,D.dYj,D.dYo,D.dYi,D.dYy,D.dYg,D.dYh,D.dYu,D.dYf,D.dYs,D.dYl,D.dYk,D.dYr,D.dYw,D.dYt,D.dYp],A.as("N<mi>"))
D.dCw=w([B.bv,B.bl],x.O)
D.dDn=w([B.iI,B.oG,B.e5],x.O)
D.ak3=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.al2=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.brl=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.biz=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aFr=w([D.ak3,D.al2,D.brl,D.biz],x.O)
D.dEB=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a8f=w(["top","middle","bottom"],x.s)
D.dG9=w([B.cw,B.bp,B.dl],x.O)
D.aFL=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bc9=new A.aa(0,B.H,B.b9,B.J,14)
D.aFP=w([D.bc9],x.V)
D.bqa=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dGU=w([D.aiw,D.a0u,D.bqa],x.O)
D.dGV=w([B.bf,B.dq,B.ej],x.O)
D.eCu=new A.r(24,-8)
D.eDc=new A.r(48,0)
D.eCq=new A.r(24,6)
D.dIL=w([B.J,D.eCu,D.eDc,D.eCq],x.g)
D.dJc=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eyV={top:0,middle:1,bottom:2}
D.dMy=new A.bm(D.eyV,["Top","Middle","Bottom"],x.r)
D.eyr={double:0,single:1,corners:2,none:3}
D.dME=new A.bm(D.eyr,["Double line","One line","Corners","None"],x.r)
D.ezJ={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dOj=new A.bm(D.ezJ,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dOv=new A.bm(B.ik,[],A.as("bm<G,+(n,n)>"))
D.eyM={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.EI=new A.bm(D.eyM,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bm<n,G>"))
D.dSP=new H.Om(32,null)
D.dSQ=new H.Om(40,null)
D.dSR=new H.Om(46,null)
D.aNX=new C.avx(null)
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
D.KD=new A.r(225,300)
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
D.h6_=new A.D("Write a new book",null,B.hj,null,B.K,null,null,null,null,null,null,null)
D.eGP=new A.C(B.ld,D.h6_,null)
D.hkS=new A.D("Tap to go on",null,B.wk,null,null,null,null,null,null,null,null,null)
D.eHa=new A.C(B.kO,D.hkS,null)
D.atF=new A.ae(B.ig,18,B.c,null,null,null)
D.fZU=new A.D("Add",null,B.kY,null,null,null,null,null,null,null,null,null)
D.dmK=w([D.atF,B.pq,D.fZU],x.p)
D.ft0=new A.c0(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.dmK,null)
D.eHd=new A.C(B.o5,D.ft0,null)
D.eHf=new A.C(E.anE,A8.ZE,null)
D.fTg=new A.F(!0,B.c,null,null,null,null,13.5,B.C,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2a=new A.D("New Project",null,D.fTg,null,null,null,null,null,null,null,null,null)
D.drr=w([D.atF,B.aa,D.h2a],x.p)
D.ft3=new A.c0(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.drr,null)
D.eHt=new A.C(B.hp,D.ft3,null)
D.h4I=new A.D("Choose your header",null,B.uy,null,null,null,null,null,null,null,null,null)
D.eHO=new A.C(B.ie,D.h4I,null)
D.bhN=new A.fs(2.2,null,null,null,null,B.cX,null,null,null,null)
D.fyP=new A.a4(22,22,D.bhN,null)
D.bfT=new A.cn(B.z,null,null,D.fyP,null)
D.eHT=new A.C(B.a1S,D.bfT,null)
D.bHx=new A.R(14,2,14,6)
D.hiX=new A.D("The top of your book. Tap a design to see it.",null,V.uz,null,null,null,null,null,null,null,null,null)
D.eHU=new A.C(D.bHx,D.hiX,null)
D.h3S=new A.D("\ud83c\udfc6 A new record!",null,B.hi,null,null,null,null,null,null,null,null,null)
D.eHW=new A.C(B.kO,D.h3S,null)
D.eJv=new A.jm(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eJy=new A.jm(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aPi=new A.jm(1,0.9607843137254902,0.48627450980392156,0)
D.KL=new A.jm(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Be=new A.jm(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eJE=new A.jm(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hSz=new C.blP(null)
D.bCi=new A.mX(D.hSz,null,B.aA,null,null)
D.aSW=new A.cR(0,0,0,0,null,null,D.bCi,null)
D.fZW=new A.D("\ud83c\udfc5",null,B.acQ,null,null,null,null,null,null,null,null,null)
D.eO3=new A.cR(null,0,-34,null,null,null,D.fZW,null)
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
D.W7=new A.a5(66,-66,94,-36)
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
D.hit=new A.D("Let the AI write it from your tree",null,B.iX,null,B.K,null,null,null,null,null,null,null)
D.bPX=new A.d0(1,B.c9,D.hit,null)
D.diV=w([E.a5y,B.aa,D.bPX],x.p)
D.fsE=new A.c0(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.diV,null)
D.fZy=new A.D("Save member",null,B.ch,null,null,null,null,null,null,null,null,null)
D.dAa=w([D.auy,B.aa,D.fZy],x.p)
D.fsP=new A.c0(B.aK,B.bc,B.h,B.l,null,B.p,null,0,D.dAa,null)
D.c0O=new A.ae(B.iw,14,B.b6,null,null,null)
D.fMH=new A.F(!0,B.b6,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2B=new A.D("Cashier",null,D.fMH,null,null,null,null,null,null,null,null,null)
D.ds0=w([D.c0O,B.b7,D.h2B],x.p)
D.fsT=new A.c0(B.aK,B.e,B.P,B.l,null,B.p,null,0,D.ds0,null)
D.fZz=new A.D("Transfer & settings",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bND=new A.bu(1,B.b8,D.fZz,null)
D.d9c=w([D.au7,B.ar,D.bND],x.p)
D.fsU=new A.c0(B.aK,B.e,B.h,B.l,null,B.p,null,0,D.d9c,null)
D.fxu=new A.av(16,40)
D.fxz=new A.av(22,64)
D.fxG=new A.av(280,88)
D.fyu=new A.a4(30,null,null,null)
D.fYE=new A.D("The teacher is writing\u2026",null,B.BA,null,null,null,null,null,null,null,null,null)
D.bgZ=new A.cn(B.z,null,null,D.fYE,null)
D.hMi=new A.bg("w",x.W)
D.fyT=new A.a4(null,56,D.bgZ,D.hMi)
D.fzF=new A.hY(5,8,8,1,null)
D.fzN=new A.hY(2,12,12,1.05,null)
D.h2g=new A.D("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fAy=new A.b3(D.h2g,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h2w=new A.D("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aWS=new A.b3(D.h2w,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hb1=new A.D("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fB1=new A.b3(D.hb1,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hlV=new A.D("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fB6=new A.b3(D.hlV,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h4G=new A.D("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fBd=new A.b3(D.h4G,null,null,null,null,null,null,null,null,null,null,null,null,B.fO,!1,null,null,null,B.t,null)
D.hj9=new A.D("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aWX=new A.b3(D.hj9,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h4E=new A.D("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fBD=new A.b3(D.h4E,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h_c=new A.D("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fBF=new A.b3(D.h_c,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h8s=new A.D("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fBL=new A.b3(D.h8s,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hmH=new A.D("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fCr=new A.b3(D.hmH,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hhn=new A.D("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fCR=new A.b3(D.hhn,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hlZ=new A.D("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fCU=new A.b3(D.hlZ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hcF=new A.D("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fCW=new A.b3(D.hcF,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h6C=new A.D("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fCX=new A.b3(D.h6C,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h6D=new A.D("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fDY=new A.b3(D.h6D,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h2i=new A.D("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fEf=new A.b3(D.h2i,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h4j=new A.D("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fEz=new A.b3(D.h4j,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hc8=new A.D("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fEQ=new A.b3(D.hc8,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h7s=new A.D("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fER=new A.b3(D.h7s,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fRX=new A.F(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGp=new A.eJ("\u2665",null,null,B.cZ,null,null,null,null,null,null,D.fRX)
D.fP2=new A.F(!0,B.aS,null,null,null,null,28,B.N,B.cR,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGF=new A.eJ("Today: how well do you know the family?",null,null,B.cZ,null,null,null,null,null,null,D.fP2)
D.fGW=new A.F(!0,B.qM,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI7=new A.F(!0,D.l6,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIv=new A.F(!0,D.l6,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIz=new A.F(!0,B.d_,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fII=new A.F(!0,D.fL,null,null,null,null,15,B.N,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIT=new A.F(!0,D.fL,null,null,null,null,13,B.C,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJe=new A.tk(!0,B.ul,null,null,null,null,B.dL,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJu=new A.F(!0,B.d_,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJy=new A.F(!0,D.l6,null,null,null,null,18,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJz=new A.F(!0,B.d_,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJF=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJI=new A.F(!0,B.d_,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKf=new A.F(!0,B.b6,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKg=new A.F(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKi=new A.F(!0,B.aS,null,null,null,null,15.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKK=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYc=new A.F(!0,B.aR,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYd=new A.F(!0,D.lY,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL9=new A.F(!0,B.d_,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.acV=new A.tk(!0,B.VE,null,null,null,null,B.dL,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.X1=new A.F(!0,B.d_,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLj=new A.F(!0,B.a_,null,null,null,null,12.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLo=new A.F(!0,D.fL,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLP=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN0=new A.F(!0,D.fL,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYm=new A.F(!0,D.fL,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNk=new A.F(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNw=new A.F(!0,D.fL,null,null,null,null,null,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNy=new A.F(!0,null,null,null,null,null,8,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNF=new A.F(!0,L.jk,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYq=new A.F(!0,D.fL,null,null,null,null,14.5,B.N,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOD=new A.F(!0,D.fL,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOW=new A.F(!0,D.fL,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOY=new A.F(!0,B.a_,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP_=new A.F(!0,B.d_,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPo=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.Jz,null,null,null)
D.aYE=new A.F(!0,D.fL,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPP=new A.F(!0,B.a_,null,null,null,null,17,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQa=new A.F(!0,B.fs,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQy=new A.F(!0,B.bU,null,null,null,null,8,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQD=new A.F(!0,B.bA,null,null,null,null,11,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQP=new A.F(!0,B.c,null,null,null,null,13.5,B.C,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQS=new A.F(!0,D.fL,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR_=new A.F(!0,D.H8,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRb=new A.F(!0,B.b6,null,null,null,null,13,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRA=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRH=new A.F(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ek,null,null,null)
D.fS7=new A.F(!0,B.d_,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSf=new A.F(!0,B.cX,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSs=new A.F(!0,D.lZ,null,null,null,null,13,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZ2=new A.F(!0,D.fL,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.LW=new A.F(!0,B.d_,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZ4=new A.F(!0,B.d_,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ek,null,null,null)
D.fSN=new A.F(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSR=new A.F(!0,G.nN,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTe=new A.F(!0,B.b6,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTv=new A.F(!0,D.fL,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTU=new A.F(!0,B.c,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUj=new A.F(!0,D.fL,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUQ=new A.F(!0,D.fL,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUV=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV4=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ads=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adv=new A.F(!0,D.lY,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWR=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXb=new A.F(!0,B.aS,null,null,null,null,27,B.N,B.cR,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXi=new A.F(!0,L.jk,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXq=new A.F(!0,L.jk,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXU=new A.D("Time:",null,B.hH,null,null,null,null,null,null,null,null,null)
D.fYf=new A.D("\ud83c\udfae",null,K.adh,null,null,null,null,null,null,null,null,null)
D.fYg=new A.D("Themes",null,B.pt,null,null,null,null,null,null,null,null,null)
D.fYM=new A.D("\ud83c\udfb2",null,B.yg,null,null,null,null,null,null,null,null,null)
D.fYQ=new A.D("Delete this game?",null,B.iX,null,null,null,null,null,null,null,null,null)
D.fYX=new A.D("Add Item",null,B.ch,null,null,null,null,null,null,null,null,null)
D.fNe=new A.F(!0,B.a_,null,null,null,null,22,B.C,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZn=new A.D("Debt receipt",null,D.fNe,null,B.K,null,null,null,null,null,null,null)
D.aZi=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZG=new A.D("Person who owes",null,D.aZi,null,null,null,null,null,null,null,null,null)
D.h_G=new A.D("Notes",null,B.ad6,null,null,null,null,null,null,null,null,null)
D.h09=new A.D("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fM7=new A.F(!0,B.c,null,null,null,null,11,B.C,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0b=new A.D("Share",null,D.fM7,null,null,null,null,null,null,null,null,null)
D.h1c=new A.D("Move your family trees",null,I.adp,null,null,null,null,null,null,null,null,null)
D.h1S=new A.D("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.h2v=new A.D("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.h2T=new A.D("SAVE",null,D.LW,null,null,null,null,null,null,null,null,null)
D.h3w=new A.D("The round button is the right answer.",null,V.BD,null,null,null,null,null,null,null,null,null)
D.h3R=new A.D("Remove this book?",null,B.hi,null,null,null,null,null,null,null,null,null)
D.fTb=new A.F(!0,B.d_,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ek,null,null,null)
D.h4o=new A.D("Fireside Stories",null,D.fTb,null,null,null,null,null,null,null,null,null)
D.aZN=new A.D("Download",null,B.ch,null,null,null,null,null,null,null,null,null)
D.h54=new A.D("What should the AI do?",null,B.dw,null,null,null,null,null,null,null,null,null)
D.fLI=new A.F(!0,D.lY,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5j=new A.D("REPORT CARD",null,D.fLI,null,null,null,null,null,null,null,null,null)
D.h66=new A.D("Calabash Catch",null,B.Xo,null,null,null,null,null,null,null,null,null)
D.h6y=new A.D("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.h7_=new A.D("\ud83c\udfe1",null,B.FG,null,null,null,null,null,null,null,null,null)
D.h7H=new A.D("Ribbon bookmark",null,B.jQ,null,null,null,null,null,null,null,null,null)
D.fUP=new A.F(!0,B.b6,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8b=new A.D("NGMY.ORG",null,D.fUP,null,B.K,null,null,null,null,null,null,null)
D.h9u=new A.D("Scan family tree QR",null,B.cJ,null,null,null,null,null,null,null,null,null)
D.fQT=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hah=new A.D("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fQT,null,B.K,null,null,null,null,null,null,null)
D.hbv=new A.D("Delete",null,B.WW,null,null,null,null,null,null,null,null,null)
D.hbw=new A.D("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.hbE=new A.D("Thumbnail",null,B.pt,null,null,null,null,null,null,null,null,null)
D.hcd=new A.D("Save the cover",null,B.cJ,null,null,null,null,null,null,null,null,null)
D.hci=new A.D("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.BH,null,B.K,null,null,null,null,null,null,null)
D.hcG=new A.D("Your photos",null,B.pt,null,null,null,null,null,null,null,null,null)
D.hcX=new A.D("Create Project",null,B.ch,null,null,null,null,null,null,null,null,null)
D.hdj=new A.D("\u2b50 stars",null,B.FH,null,null,null,null,null,null,null,null,null)
D.hdx=new A.D("Design your cover",null,B.uy,null,null,null,null,null,null,null,null,null)
D.hdD=new A.D("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.hdG=new A.D("PICTURE",null,N.wn,null,null,null,null,null,null,null,null,null)
D.hdI=new A.D("\ud83c\udfaf",null,D.Xn,null,null,null,null,null,null,null,null,null)
D.he4=new A.D("Paid",null,B.ch,null,null,null,null,null,null,null,null,null)
D.he6=new A.D("You can undo it right after.",null,V.BD,null,null,null,null,null,null,null,null,null)
D.heF=new A.D("Print",null,B.wl,null,null,null,null,null,null,null,null,null)
D.hf4=new A.D("Amount owed",null,D.aZi,null,null,null,null,null,null,null,null,null)
D.hfk=new A.D("Got it",null,B.ch,null,null,null,null,null,null,null,null,null)
D.hfX=new A.D("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hg_=new A.D("Add to budget",null,B.ch,null,null,null,null,null,null,null,null,null)
D.hgp=new A.D("Debtor signature",null,B.ad6,null,null,null,null,null,null,null,null,null)
D.hgA=new A.D("Change icon",null,B.ad5,null,null,null,null,null,null,null,null,null)
D.hho=new A.D("MADE BY THE SYSTEM, FROM YOUR TREE",null,U.uB,null,null,null,null,null,null,null,null,null)
D.hhQ=new A.D("Family tree QR",null,B.cJ,null,null,null,null,null,null,null,null,null)
D.hhW=new A.D("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.Xm,null,null,null,null,null,null,null,null,null)
D.hij=new A.D("Download",null,B.wl,null,null,null,null,null,null,null,null,null)
D.hik=new A.D("The person who planted this tree has not made a game yet.",null,Y.BF,null,null,null,null,null,null,null,null,null)
D.hio=new A.D("Change",null,B.pt,null,null,null,null,null,null,null,null,null)
D.hjf=new A.D("Clear all",null,B.ch,null,null,null,null,null,null,null,null,null)
D.hji=new A.D("WHAT SHOULD IT CHANGE?",null,N.wn,null,null,null,null,null,null,null,null,null)
D.hjR=new A.D("COLOUR",null,N.wn,null,null,null,null,null,null,null,null,null)
D.hk5=new A.D("Do it",null,B.cJ,null,null,null,null,null,null,null,null,null)
D.hk9=new A.D("Create Tree",null,B.ch,null,null,null,null,null,null,null,null,null)
D.hkj=new A.D("Give me another clue",null,D.LW,null,null,null,null,null,null,null,null,null)
D.hld=new A.D("Create Family Tree",null,B.fk,null,null,null,null,null,null,null,null,null)
D.hln=new A.D("THE TEACHER EXPLAINS THESE",null,U.uB,null,null,null,null,null,null,null,null,null)
D.fGV=new A.F(!0,E.kI,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hlt=new A.D("Write the first page myself",null,D.fGV,null,null,null,null,null,null,null,null,null)
D.hm1=new A.D("Use this header",null,B.cJ,null,null,null,null,null,null,null,null,null)
D.hm8=new A.D("Create Project",null,E.aYY,null,null,null,null,null,null,null,null,null)
D.hNN=new C.adJ(1,"header")
D.aex=new C.adJ(2,"projects")
D.hNO=new C.adJ(3,"cashier")
D.aey=new C.adJ(4,"familyTree")
D.i2t=new C.cJK(0,"start")
D.i2u=new C.cJL(0,"start")
D.hO0=new C.a_y(null)
D.hP1=new C.a04(null)
D.dOs=new A.bm(B.ik,[],A.as("bm<n,GZ>"))
D.duS=w([],x.dE)
D.duT=w([],x.M)
D.hPG=new C.biZ(D.dOs,D.duS,D.duT,0,0,null,null)
D.b3i=new C.a0V(0,"intro")
D.b3j=new C.a0V(1,"countdown")
D.aeL=new C.a0V(2,"ask")
D.Yj=new C.a0V(3,"reveal")
D.b3k=new C.a0V(4,"end")
D.hSB=new C.tt(F.Hh,D.lZ,B.d_,F.mo,5,!1,!1,!1,0,null)
D.hSD=new C.tt(F.Hh,B.eu,B.d_,B.bP,2,!0,!0,!1,2,B.d_)
D.hSF=new C.tt(B.r0,B.cX,B.d_,F.mo,2,!0,!1,!1,2,B.as)
D.hSG=new C.tt(F.Hh,B.dT,B.d_,F.mo,5,!1,!1,!1,1,null)
D.hSJ=new C.tt(F.a0L,D.al2,B.d_,F.mo,4,!0,!1,!0,0,null)
D.b3n=new C.tt(F.a0L,B.e_,B.d_,F.mo,3,!0,!1,!0,2,null)
D.b3o=new C.tt(F.tt,D.lZ,B.c,F.mo,0,!1,!1,!0,0,null)
D.b3p=new C.tt(B.r0,B.az,B.d_,B.bP,2,!0,!0,!1,2,B.e_)
D.b3q=new C.tt(B.r0,G.nN,B.iu,F.mo,5,!1,!1,!0,3,null)
D.hSN=new C.tt(B.r0,B.e_,B.d_,F.mo,0,!0,!1,!1,0,B.az)
D.b3r=new C.tt(F.Hh,B.eu,B.d_,B.bP,1,!1,!0,!1,1,null)
D.b3s=new C.tt(F.GO,B.as,B.az,F.mo,4,!0,!1,!0,2,null)
D.hSP=new C.tt(F.tt,B.as,B.eu,F.mo,3,!0,!1,!1,0,null)
D.hSR=new C.tt(B.r0,B.dT,B.d_,B.bP,1,!1,!0,!1,1,null)
D.hSS=new C.tt(F.GO,D.ak3,B.c,F.mo,5,!1,!1,!0,0,null)
D.hTw=new C.a1t(null)
D.i2C=new C.ahb(0,"still")
D.YG=new C.ahb(1,"walk")
D.b4b=new C.ahb(2,"pound")
D.b4c=new C.ahb(3,"drum")
D.hZ6=new C.a2M(0,"greet")
D.b4d=new C.a2M(1,"teach")
D.af4=new C.a2M(2,"ask")
D.hZ7=new C.a2M(3,"feedback")
D.b4e=new C.a2M(4,"end")
D.YN=new C.a34(0,"intro")
D.YO=new C.a34(1,"asking")
D.BY=new C.a34(2,"reacting")
D.aff=new C.a34(3,"driving")
D.afg=new C.a34(4,"arrived")
D.afo=new C.aNh(0,"projects")
D.b4E=new C.aNh(1,"cashier")
D.i0c=new C.aNh(2,"familyTree")})()};
(a=>{a["dK2XRCO78t7RQyIuBX4zCbuJKnw="]=a.current})($__dart_deferred_initializers__);