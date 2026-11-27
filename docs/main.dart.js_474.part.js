((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,A9,S,Z,Aa,P,A_,T,M,Ab,L,A0,U,H,E,Ac,V,Ad,A1,Ae,Af,Ag,Ah,Ai,Q,Aj,Ak,N,A2,Al,A3,A4,A5,W,A6,Am,An,Ao,G,Ap,Aq,Ar,A7,As,At,Au,Av,X,O,F,Aw,I,A8,K,Ax,Y,R,Ay,C={
bJk(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bJk=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uY(null,""),$async$bJk)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.Y(y.z)
t=A.nl(b1)
s=A.c4(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dw(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cX(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.I)(h),++d){a0=h[d]
f.push(A.J(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.T.au(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.qZ(t,a1,B.i7,"book",E.HM),$async$bJk)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Sp(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.aa(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.Y(l!=null&&A.HY(l)?y.k:y.y)
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a50(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJk,v)},
ajB(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ajB=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.uY(null,""),$async$ajB)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.Y(y.z)
t=A.nl(b6)
s=x.S
r=A.cI(c1,0,A.dy(4,"count",s),A.T(c1).c)
q=H.a4K(new A.O(r,new C.h0V(),r.$ti.k("O<aj.E,o>")).aJ(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.h0U(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.T.au(b7,null)+"\nAllowed values: style one of "+B.d.aJ(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ajB)
case 6:l=c5
k=H.Sp(l==null?"":l)
if(k==null)throw A.Y("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.v(s==null?"I updated the cover.":s)
r=x.f
u=new C.arv(s,D.dR7,r.b(k.h(0,"cover"))?A.a1(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dw(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.I)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.J(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.T.au(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ajB)
case 10:l=c5
k=l==null?null:H.Sp(l)
if(k==null)throw A.Y(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.v(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.v(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.cL(a8,d),a5=J.aN(a2.a),a2=a2.$ti,a7=new A.jB(a5,a2.k("jB<1>")),a2=a2.c;a7.A();){a9=a2.a(a5.gP(a5))
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
p=A.ct(new A.ba(h,s),new C.h0W(),s.k("M.E"),p)
p=H.a4K(A.pk(p,3,A.a3(p).k("M.E")).aJ(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cv<1>")
b4=A.B(new A.cv(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.I)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a50(s,b9),$async$ajB)
case 13:b5=c5
for(s=J.a0(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.arv(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ajB,v)},
hWo(d,e,f){return A.cf(null,B.v.j(0.65),!1,null,new C.hbK(e,f),d,null,!0,!0,x.g2)},
arv:function arv(d,e,f){this.a=d
this.b=e
this.c=f},
h0V:function h0V(){},
h0U:function h0U(d){this.a=d},
h0W:function h0W(){},
hbK:function hbK(d,e){this.a=d
this.b=e},
bH0(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bH0=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aR(b1,new C.fO1())){u=null
w=1
break}t=B.d.cE(b1,new C.fO2())
s=$.U()
r=new A.p2(new A.oD())
q=A.vb(r,D.aVr)
p=A.L()
p.r=B.c.gp(0)
q.aE(D.aVr,p)
o=A.L()
o.r=B.a_.gp(0)
o.c=3.6
o.b=B.ae
o.d=B.bH
o.e=B.dQ
n=new C.fO7(t)
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
return A.b(r.ne().w4(520,160),$async$bH0)
case 4:w=3
return A.b(b3.hs(B.hr),$async$bH0)
case 3:b0=b3
u=b0==null?null:J.eU(B.dM.gaS(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bH0,v)},
fZm(d){return C.iCE(d)},
iCE(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fZm=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bn1()
n=d.x!=null&&d.At(null).length===0
if(d.x!=null)t=n?D.Bm:D.KR
else t=d.gVW()?D.KR:D.aQd
w=3
return A.b(C.bH0(d.ax),$async$fZm)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aq8(s)
r=A.a6L(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aQd}else{p.c=C.xJ(q,!0)
p.b=n?D.Bm:D.KR}r.a5W(A.hmD(new C.fZo(p,d,new C.fZp(),t,n,o),null,D.bLZ,B.wg))
u=r.jD(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fZm,v)},
h61(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$h61=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fZm(d),$async$h61)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aD(s,r,"_")
if(q.length>40)q=B.a.av(q,0,40)
u=Ai.HX(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h61,v)},
fO1:function fO1(){},
fO2:function fO2(){},
fO7:function fO7(d){this.a=d},
fZp:function fZp(){},
fZo:function fZo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fZn:function fZn(){},
hcd(d,e){var w=0,v=A.j(x.H)
var $async$hcd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.v.j(0.55),!0,null,new C.hch(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$hcd)
case 2:return A.h(null,v)}})
return A.i($async$hcd,v)},
bJN(d,e,f,g){return C.iKT(d,e,f,g)},
iKT(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bJN=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gal(e.split(",")):e
r=B.cM.aL(t)}catch(q){r=null}if(r==null||r.length===0){d.M(x.q).f.T(D.fIS)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.hc9(g,r,f),d,null,!0,!0,x.H),$async$bJN)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bJN,v)},
hci(d,e){var w=0,v=A.j(x.H)
var $async$hci=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.hcl(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$hci)
case 2:return A.h(null,v)}})
return A.i($async$hci,v)},
b2q:function b2q(d,e){this.c=d
this.a=e},
cbN:function cbN(){},
bfT:function bfT(d,e){this.b=d
this.a=e},
hch:function hch(d,e){this.a=d
this.b=e},
hce:function hce(d){this.a=d},
hcf:function hcf(d,e,f){this.a=d
this.b=e
this.c=f},
hcg:function hcg(d,e){this.a=d
this.b=e},
hc9:function hc9(d,e,f){this.a=d
this.b=e
this.c=f},
hc7:function hc7(d){this.a=d},
hc8:function hc8(d,e,f){this.a=d
this.b=e
this.c=f},
hcl:function hcl(d,e){this.a=d
this.b=e},
hcj:function hcj(d){this.a=d},
hck:function hck(d,e,f){this.a=d
this.b=e
this.c=f},
fT4(d,e){var w=0,v=A.j(x.y),u,t
var $async$fT4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4u(d),$async$fT4)
case 3:t=g
J.mH(t,new C.fT5(e))
u=A.akl(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fT4,v)},
fT5:function fT5(d){this.a=d},
arI:function arI(d,e,f){this.c=d
this.d=e
this.a=f},
aGH:function aGH(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dWQ:function dWQ(d,e){this.a=d
this.b=e},
dWB:function dWB(d,e){this.a=d
this.b=e},
dWE:function dWE(d,e,f){this.a=d
this.b=e
this.c=f},
dWD:function dWD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWC:function dWC(d,e){this.a=d
this.b=e},
dWF:function dWF(d,e){this.a=d
this.b=e},
dWz:function dWz(){},
dWA:function dWA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dWy:function dWy(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dWj:function dWj(d){this.a=d},
dWk:function dWk(d,e,f){this.a=d
this.b=e
this.c=f},
dWl:function dWl(d,e){this.a=d
this.b=e},
dWi:function dWi(d){this.a=d},
dWq:function dWq(d,e){this.a=d
this.b=e},
dWh:function dWh(d){this.a=d},
dWr:function dWr(d,e,f){this.a=d
this.b=e
this.c=f},
dWs:function dWs(d,e,f){this.a=d
this.b=e
this.c=f},
dWg:function dWg(d,e){this.a=d
this.b=e},
dWt:function dWt(d,e,f){this.a=d
this.b=e
this.c=f},
dWf:function dWf(d,e){this.a=d
this.b=e},
dWu:function dWu(d,e){this.a=d
this.b=e},
dWe:function dWe(d){this.a=d},
dWv:function dWv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWc:function dWc(){},
dW6:function dW6(d){this.a=d},
dW7:function dW7(d){this.a=d},
dWd:function dWd(d,e){this.a=d
this.b=e},
dWw:function dWw(d,e){this.a=d
this.b=e},
dWb:function dWb(d){this.a=d},
dWx:function dWx(d){this.a=d},
dWa:function dWa(){},
dWm:function dWm(d,e){this.a=d
this.b=e},
dW9:function dW9(d){this.a=d},
dWn:function dWn(d,e,f){this.a=d
this.b=e
this.c=f},
dW8:function dW8(d,e){this.a=d
this.b=e},
dW5:function dW5(d,e){this.a=d
this.b=e},
dWo:function dWo(d){this.a=d},
dWp:function dWp(d,e,f){this.a=d
this.b=e
this.c=f},
dWT:function dWT(){},
dWU:function dWU(d,e){this.a=d
this.b=e},
dWR:function dWR(d){this.a=d},
dWS:function dWS(d){this.a=d},
dWN:function dWN(d,e){this.a=d
this.b=e},
dWO:function dWO(d){this.a=d},
dWG:function dWG(d,e,f){this.a=d
this.b=e
this.c=f},
dWH:function dWH(d,e,f){this.a=d
this.b=e
this.c=f},
dWI:function dWI(d,e,f){this.a=d
this.b=e
this.c=f},
dWJ:function dWJ(d,e,f){this.a=d
this.b=e
this.c=f},
dWK:function dWK(d,e,f){this.a=d
this.b=e
this.c=f},
dWL:function dWL(d,e,f){this.a=d
this.b=e
this.c=f},
dWM:function dWM(d,e,f){this.a=d
this.b=e
this.c=f},
dWV:function dWV(){},
dWW:function dWW(){},
dWX:function dWX(){},
dWY:function dWY(d){this.a=d},
dWP:function dWP(d,e){this.a=d
this.b=e},
hRG(d){return B.d.ds(D.a6P,new C.fTQ(d),new C.fTR())},
vg:function vg(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fTQ:function fTQ(d){this.a=d},
fTR:function fTR(){},
anI:function anI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aZ5:function aZ5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
UW:function UW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjz:function bjz(){this.d=$
this.c=this.a=null},
dlK:function dlK(d,e){this.a=d
this.b=e},
dlI:function dlI(d,e){this.a=d
this.b=e},
dlJ:function dlJ(){},
dlL:function dlL(d,e){this.a=d
this.b=e},
hB6(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bf(J.k(u==null?"":u))
return new C.nR(t,w,v,u==null?new A.W(Date.now(),0,!1):u)},
Mk(d,e){return C.iBf(d,e)},
iBf(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Mk=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$Mk)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.T.aN(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.cL(p,x.f)
o=A.ct(o,new C.fWK(),o.$ti.k("M.E"),x.B)
n=A.a3(o).k("X<M.E>")
o=A.B(new A.X(o,new C.fWL(),n),n.k("M.E"))
B.d.b_(o,new C.fWM())
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
return A.i($async$Mk,v)},
BU(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$BU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.aB(),$async$BU)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.haM(),x.a)
r=A.B(r,r.$ti.k("aj.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.T.au(r,null)),$async$BU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$BU,v)},
aVb(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aVb=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Mk(d,e),$async$aVb)
case 2:u=h
t=J.cK(u)
s=t.bm(u,new C.hjA(f))
if(s===-1)t.ck(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.BU(d,e,u),$async$aVb)
case 3:return A.h(null,v)}})
return A.i($async$aVb,v)},
bHu(d,e,f){var w=0,v=A.j(x.H),u
var $async$bHu=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Mk(d,e),$async$bHu)
case 2:u=h
J.mH(u,new C.fSX(f))
w=3
return A.b(C.BU(d,e,u),$async$bHu)
case 3:return A.h(null,v)}})
return A.i($async$bHu,v)},
bHL(d,e){return C.iBe(d,e)},
iBe(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bHL=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bHL)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aV(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Qb
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
if(D.ET.am(0,o.h(0,"foil")))j=A.cV(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.h.D(i==null?25:i,18,36)
h=B.d.q(D.a8C,o.h(0,"position"))?A.cV(o.h(0,"position")):"middle"
g=B.d.q(D.a7W,o.h(0,"frame"))?A.cV(o.h(0,"frame")):"double"
f=B.d.q(D.a7S,o.h(0,"texture"))?A.cV(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.deU,o.h(0,"header"))?A.cV(o.h(0,"header")):"classic"
o=new C.IX(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Qb
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Qb
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bHL,v)},
Tz(d,e,f){return C.iKn(d,e,f)},
iKn(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Tz=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.aB(),$async$Tz)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.T.au(f.ak(),null)),$async$Tz)
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
return A.i($async$Tz,v)},
T_(d,e){return C.iBg(d,e)},
iBg(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$T_=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.aB(),$async$T_)
case 7:r=g
q=r.nW("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.B(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Mk(d,e),$async$T_)
case 8:if(!j.cM(g)){n=B.a.i(d.toLowerCase())
m=J.lK(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$T_)
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
return A.i($async$T_,v)},
aiW(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$aiW=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T_(d,e),$async$aiW)
case 3:s=g
r=J.a0(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.K(s,t)
w=5
return A.b(A.aB(),$async$aiW)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$aiW)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aiW,v)},
a5b(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a5b=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.T_(d,e),$async$a5b)
case 2:s=h
J.fN(s,f)
w=3
return A.b(A.aB(),$async$a5b)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a5b)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.X(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a5b)
case 5:w=6
return A.b(u.X(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a5b)
case 6:return A.h(null,v)}})
return A.i($async$a5b,v)},
nR:function nR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fWK:function fWK(){},
fWL:function fWL(){},
fWM:function fWM(){},
haM:function haM(){},
hjA:function hjA(d){this.a=d},
fSX:function fSX(d){this.a=d},
IX:function IX(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bV9:function bV9(d){this.a=d},
iKH(d,e,f,g,h,i,j){return A.a7(d,!1).ca(A.e4(new C.hbn(j,i,f,e,h,g),!0,null,x.H))},
SX(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$SX=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.T_(h,g),$async$SX)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.aa(k)>=6){d.M(x.q).f.T(D.aXQ)
u=!1
w=1
break}w=4
return A.b(C.hWo(d,f,e),$async$SX)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.aiW(h,g),$async$SX)
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
return A.b(C.BU(h,r,p),$async$SX)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Tz(h,r,new C.IX("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$SX)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$SX,v)},
hbn:function hbn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a0I:function a0I(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aDE:function aDE(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dmp:function dmp(d){this.a=d},
dmo:function dmo(d,e){this.a=d
this.b=e},
dmd:function dmd(d,e){this.a=d
this.b=e},
dma:function dma(d,e){this.a=d
this.b=e},
dlM:function dlM(d){this.a=d},
dlN:function dlN(d,e){this.a=d
this.b=e},
dme:function dme(d){this.a=d},
dlV:function dlV(d){this.a=d},
dlT:function dlT(d){this.a=d},
dlU:function dlU(d){this.a=d},
dlW:function dlW(d){this.a=d},
dmb:function dmb(d){this.a=d},
dmc:function dmc(){},
dlR:function dlR(d){this.a=d},
dlS:function dlS(d,e){this.a=d
this.b=e},
dlX:function dlX(d){this.a=d},
dlY:function dlY(d,e){this.a=d
this.b=e},
dmn:function dmn(d){this.a=d},
dmm:function dmm(d,e){this.a=d
this.b=e},
dml:function dml(d){this.a=d},
dm7:function dm7(d){this.a=d},
dm6:function dm6(d){this.a=d},
dm8:function dm8(d){this.a=d},
dlO:function dlO(d,e){this.a=d
this.b=e},
dm9:function dm9(d,e){this.a=d
this.b=e},
dm0:function dm0(d){this.a=d},
dm1:function dm1(d){this.a=d},
dm_:function dm_(){},
dm2:function dm2(d){this.a=d},
dm3:function dm3(d){this.a=d},
dm4:function dm4(d,e){this.a=d
this.b=e},
dm5:function dm5(d,e,f){this.a=d
this.b=e
this.c=f},
dlZ:function dlZ(d,e){this.a=d
this.b=e},
dmg:function dmg(d){this.a=d},
dmf:function dmf(){},
dmh:function dmh(d){this.a=d},
dmi:function dmi(d){this.a=d},
dmj:function dmj(d){this.a=d},
dmk:function dmk(d,e){this.a=d
this.b=e},
dlP:function dlP(d){this.a=d},
dlQ:function dlQ(d){this.a=d},
a0M:function a0M(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjY:function bjY(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dob:function dob(d){this.a=d},
doc:function doc(d){this.a=d},
doa:function doa(d){this.a=d},
dod:function dod(d){this.a=d},
do9:function do9(d){this.a=d},
doe:function doe(d){this.a=d},
do8:function do8(d){this.a=d},
dof:function dof(d,e){this.a=d
this.b=e},
do7:function do7(d,e){this.a=d
this.b=e},
dog:function dog(d,e){this.a=d
this.b=e},
a0K:function a0K(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ahl:function ahl(d,e,f){this.a=d
this.b=e
this.c=f},
aDH:function aDH(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dmE:function dmE(d,e){this.a=d
this.b=e},
dmD:function dmD(d,e){this.a=d
this.b=e},
dmI:function dmI(d){this.a=d},
dmH:function dmH(d,e){this.a=d
this.b=e},
dmF:function dmF(d){this.a=d},
dmG:function dmG(d){this.a=d},
dmJ:function dmJ(d){this.a=d},
dmK:function dmK(d){this.a=d},
dmC:function dmC(d,e){this.a=d
this.b=e},
dmB:function dmB(d,e){this.a=d
this.b=e},
Lk:function Lk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_U:function a_U(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cTQ:function cTQ(d){this.a=d},
cTR:function cTR(){},
cTS:function cTS(d){this.a=d},
bh7:function bh7(d,e,f){this.b=d
this.c=e
this.a=f},
bgZ:function bgZ(d,e){this.b=d
this.a=e},
vh:function vh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0f:function a0f(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bh5:function bh5(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
dcT:function dcT(d,e,f){this.a=d
this.b=e
this.c=f},
dcS:function dcS(d,e){this.a=d
this.b=e},
ddh:function ddh(d){this.a=d},
dd4:function dd4(){},
ddi:function ddi(d){this.a=d},
dd3:function dd3(){},
ddj:function ddj(d,e){this.a=d
this.b=e},
dd2:function dd2(d,e){this.a=d
this.b=e},
ddk:function ddk(d,e){this.a=d
this.b=e},
dd1:function dd1(d,e){this.a=d
this.b=e},
ddl:function ddl(d){this.a=d},
dd0:function dd0(){},
ddm:function ddm(d,e){this.a=d
this.b=e},
dd_:function dd_(d,e){this.a=d
this.b=e},
ddn:function ddn(d){this.a=d},
ddc:function ddc(d,e){this.a=d
this.b=e},
ddo:function ddo(d){this.a=d},
ddp:function ddp(d){this.a=d},
ddr:function ddr(d){this.a=d},
dds:function dds(d){this.a=d},
ddb:function ddb(d,e){this.a=d
this.b=e},
ddt:function ddt(d,e){this.a=d
this.b=e},
aKV:function aKV(d){this.a=d},
bmw:function bmw(d){this.a=d},
bfd:function bfd(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
anJ:function anJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a31:function a31(d,e){this.a=d
this.b=e},
anK:function anK(d,e,f,g,h,i){var _=this
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
bVj:function bVj(d){this.a=d},
bVd:function bVd(d){this.a=d},
bVc:function bVc(d,e){this.a=d
this.b=e},
bVm:function bVm(d){this.a=d},
bVe:function bVe(d){this.a=d},
bVf:function bVf(d){this.a=d},
bVi:function bVi(d){this.a=d},
bVh:function bVh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bVk:function bVk(d,e){this.a=d
this.b=e},
bVl:function bVl(){},
bVg:function bVg(d){this.a=d},
bVa:function bVa(d,e){this.a=d
this.b=e},
bVb:function bVb(d){this.a=d},
bsa:function bsa(d,e){this.b=d
this.a=e},
aDF:function aDF(){},
iW(d,e){var w
$.U()
w=A.L()
w.b=B.ae
w.c=e
w.r=d.gp(0)
w.d=B.bH
w.e=B.dQ
return w},
bH2(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bs(j.save())
j.translate(e.a,e.b)
d.nZ(0,a0?-f:f,f)
w=A.c1(B.ht,8,36)
v=B.v.j(0.3)
u=$.U()
t=A.L()
t.r=v.gp(0)
d.c3(w,t)
w=a1===D.YY
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ap(w,B.v,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eJe,new A.m(-4+v,-2),C.iW(q,5))
d.ah(D.eGP,new A.m(4-v,-2),C.iW(q,5))}else{t=A.c1(B.KJ,14,40)
p=A.L()
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
t=A.L()
t.r=w.gp(0)
d.af(o,t)
u=new A.aJ(v,B.ak,k,k,A.a([],u))
u.E(new A.b_(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bz())
v=A.L()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b5f){n=-52+w*14
d.ah(new A.m(10,n-22),new A.m(10,n+44),C.iW(F.GY,3.4))
d.ah(D.eJv,new A.m(9,n),C.iW(q,4))
d.ah(D.eHf,new A.m(10,n),C.iW(q,4))}else if(a1===D.b5g){d.ah(D.eIl,new A.m(-8,-26-Math.max(0,w)*6),C.iW(q,4))
d.ah(D.eFh,new A.m(8,-26-Math.max(0,-w)*6),C.iW(q,4))}else{w=s*3
v=-38-r
d.ah(D.eIp,new A.m(-12-w,v),C.iW(q,4))
d.ah(D.aPa,new A.m(12+w,v),C.iW(q,4))}w=A.L()
w.r=q.gp(0)
d.aE(D.fvz,w)
m=new A.m(0,-77-r)
w=A.c1(m,22,19)
v=A.L()
v.r=q.gp(0)
d.c3(w,v)
w=h.y
if(w!=null){v=A.c1(m.a6(0,K.wf),15,24)
u=A.L()
u.r=w.gp(0)
d.c3(v,u)
u=m.a6(0,D.eFb)
v=A.L()
v.r=w.gp(0)
d.O(u,4,v)}else{w=A.c1(m.a6(0,B.rR),23,20)
v=h.d
u=A.L()
u.r=v.gp(0)
d.cR(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a6(0,D.eJt),m.a6(0,D.eIj),C.iW(v,2.2))
d.ah(m.a6(0,D.eHe),m.a6(0,D.eF8),C.iW(v,2.2))}if(w===4){w=m.a6(0,D.eJx)
u=A.L()
u.r=v.gp(0)
d.O(w,6,u)
u=m.a6(0,D.eHg)
w=A.L()
w.r=v.gp(0)
d.O(u,6,w)}}w=m.a6(0,D.eI8)
v=A.L()
v.r=B.iv.gp(0)
d.O(w,0.9,v)
v=m.a6(0,D.eHY)
w=A.L()
w.r=B.iv.gp(0)
d.O(v,0.9,w)
if(i){l=m.a6(0,K.aaP)
w=A.c1(l,21,22)
v=A.L()
v.r=D.lY.gp(0)
d.c3(w,v)
v=A.c1(l.a6(0,K.aP7),5,12)
w=A.L()
w.r=D.bkG.gp(0)
d.c3(v,w)
d.ah(l.a6(0,D.eJp),l.a6(0,K.aPv),C.iW(B.d0,1.4))
d.ah(D.aPa,new A.m(15,-88-r),C.iW(q,3.6))}j.restore()},
hQf(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bs(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.c1(B.dP,18,96)
u=B.v.j(0.28)
$.U()
t=A.L()
t.r=u.gp(0)
d.c3(v,t)
t=A.c1(B.dP,11,70)
v=B.v.j(0.2)
u=A.L()
u.r=v.gp(0)
d.c3(t,u)
d.lK(D.aVv,A.L())
C.ip7(d,g,h,i,j)
s=(k==null?D.aaU:k).a-w>=0?1:-1
w=A.L()
w.a=B.N9
w.san(A.jT(new A.m(s*70,-60),new A.m(-s*70,-60),A.a([D.al2.j(0.5),D.al2.j(0.12),D.bsp.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.w,null))
d.aE(D.aVv,w)
r.restore()
r.restore()},
ip7(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ap(d,B.v,0.28)
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
s=A.bx(D.fvA,B.uq)
p=$.U()
o=A.L()
o.r=u.gp(0)
a1.aq(s,o)
o=A.bx(D.fvv,B.hT)
s=A.ap(v,B.v,0.18)
s.toString
n=A.L()
n.r=s.gp(0)
a1.aq(o,n)
n=A.bx(D.fvJ,B.hT)
o=A.ap(v,B.v,0.1)
o.toString
s=A.L()
s.r=o.gp(0)
a1.aq(n,s)
s=A.L()
s.r=d.gp(0)
a1.c3(D.fvC,s)
s=A.L()
s.r=d.gp(0)
a1.c3(D.fuj,s)
s=a1.c
J.bs(s.save())
s.translate(a3.w,0)
J.bs(s.save())
a1.nZ(0,q,q*(1+t*0.012))
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
k=A.L()
k.r=v.gp(0)
a1.af(l,k)
J.bs(s.save())
a1.mN(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dmD[j]
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.ae
i.c=5
i.r=k.gp(0)
i.d=B.bH
i.e=B.dQ
a1.ah(new A.m(-34+u,-64),new A.m(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.n.F(B.n.ao(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.U()
f=new A.ar(B.V,B.R,B.X,B.Y,B.W)
f.r=i.gp(0)
a1.O(new A.m(g,h),3.6,f)
f=new A.ar(B.V,B.R,B.X,B.Y,B.W)
f.r=u.gp(0)
a1.O(new A.m(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.ae
i.c=1.6
i.r=k.gp(0)
i.d=B.bH
i.e=B.dQ
a1.ah(new A.m(g,-64),new A.m(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.ae
i.c=1.6
i.r=k.gp(0)
i.d=B.bH
i.e=B.dQ
a1.ah(new A.m(-30,h),new A.m(30,h),i)}break
default:a1.ah(D.eIS,D.eFX,C.iW(a2.c.j(0.9),3))}a1.ah(D.eJq,D.eIr,C.iW(B.v.j(0.18),1.6))
a1.ah(D.eFg,K.aPc,C.iW(B.v.j(0.18),1.6))
u=B.v.j(0.12)
k=$.U()
i=A.L()
i.r=u.gp(0)
a1.aE(D.fuf,i)
s.restore()
i=A.L()
i.r=a0.gp(0)
a1.aE(D.fut,i)
n=new A.aJ(k.r,B.ak,e,e,A.a([],n))
n.E(new A.b_(-9,-66))
n.E(new A.cn(0,-57,9,-66))
n.E(new A.cn(0,-60,-9,-66))
k=A.L()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cR(D.fuE,0.1,2.941592653589793,!1,C.iW(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.ab_
n=25*q
k=23*q
i=9*q
C.hLM(a1,new A.m(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.Fl:o
C.hLM(a1,new A.m(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.eGH,D.eGD,C.iW(D.am1,4))
a1.ah(D.eGF,D.eGB,C.iW(D.Ho.j(0.7),1.4))
u=A.L()
u.r=B.d0.gp(0)
a1.O(D.eGE,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bs(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.jA(0,a3.f)
a1.bW(0,r)
C.ip3(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hLM(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aI(0,e),r=s.gcD(),q=r===0?B.ht:s.eA(0,r),p=B.h.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
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
o=A.L()
o.r=j.gp(0)
d.O(u,l*0.55,o)
o=A.c1(t,l*1.15,l)
w=A.L()
w.r=k.gp(0)
d.c3(o,w)
w=-l
w=t.a6(0,new A.m(i*w*0.45,w*0.1))
o=A.L()
o.r=k.gp(0)
d.O(w,l*0.28,o)},
ip3(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.c1(B.we,40,38)
$.U()
v=A.L()
v.r=c0.gp(0)
c2.c3(w,v)}if(c1===4){$.U()
w=A.L()
w.r=c0.gp(0)
c2.O(D.eIz,9.5,w)
w=A.L()
w.r=c0.gp(0)
c2.O(D.eFx,9.5,w)}w=A.c1(D.eJO,10,6)
v=$.U()
u=A.L()
u.r=c8.gp(0)
c2.c3(w,u)
u=A.c1(D.eI5,10,6)
w=A.L()
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
u=A.L()
u.san(A.wF(D.eJg,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.w,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iW(c8.j(0.5),0.8)
c2.cR(D.fvL,3.455751918948773,2.5132741228718345,!1,s)
c2.cR(D.fum,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eIw,K.aPG,s)
c2.ah(D.eFt,D.eFk,s)
c2.cR(D.fuD,2.2,1.4,!1,s)
c2.cR(D.fuk,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=c0.gp(0)
c2.O(new A.m(p*14.5,-3+o*17.5),4.3,n)}p=A.L()
p.r=c0.gp(0)
c2.cR(D.fuS,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aJ(v,B.ak,b9,b9,A.a([],w))
p.E(new A.b_(-15,-11))
p.E(new A.cn(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.cn(0,-12,-13,-6))
p.E(new A.bz())
o=A.L()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eIn,D.eFl,C.iW(G.nS,1.4))
o=A.L()
o.r=c0.gp(0)
c2.O(D.eIC,3,o)
o=A.L()
o.r=c0.gp(0)
c2.O(D.eFy,3,o)
o=new A.aJ(v,B.ak,b9,b9,A.a([],w))
o.E(new A.b_(-13,6))
o.E(new A.cn(-12,22,0,26))
o.E(new A.cn(12,22,13,6))
o.E(new A.cn(8,13,0,12))
o.E(new A.cn(-8,13,-13,6))
o.E(new A.bz())
p=A.L()
p.r=B.hX.gp(0)
c2.af(o,p)
p=new A.aJ(v,B.ak,b9,b9,A.a([],w))
p.E(new A.b_(-7,8))
p.E(new A.cn(0,6,7,8))
p.E(new A.cn(0,10.5,-7,8))
o=A.L()
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
o=A.L()
o.r=m.gp(0)
c2.af(p,o)
o=A.ap(m,B.v,0.3)
o.toString
c2.cR(D.fuZ,3.4,2.5,!1,C.iW(o,1.4))
o=A.ap(m,B.c,0.3)
o.toString
c2.cR(D.fuL,3.6,2.2,!1,C.iW(o,1.2))
o=new A.aJ(v,B.ak,b9,b9,A.a([],w))
o.E(new A.b_(11,-22))
o.E(new A.cn(27,-34,25,-19))
o.E(new A.cn(18,-18,11,-22))
p=A.ap(m,B.c,0.1)
p.toString
n=A.L()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aJ(v,B.ak,b9,b9,A.a([],w))
n.E(new A.b_(11,-22))
n.E(new A.cn(24,-12,27,-26))
n.E(new A.cn(18,-22,11,-22))
o=A.ap(m,B.v,0.2)
o.toString
p=A.L()
p.r=o.gp(0)
c2.af(n,p)
p=A.L()
p.r=c3.c.gp(0)
c2.O(D.eFm,3,p)
break
case 3:p=A.L()
p.r=c0.gp(0)
c2.cR(D.fuW,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ap(c0,B.c,0.18)
p.toString
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.ae
o.c=0.9
o.r=p.gp(0)
o.d=B.bH
o.e=B.dQ
c2.ah(new A.m(r*3.6,-19+Math.abs(r)*0.8),new A.m(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aFJ[l]
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.ae
o.c=4.5
o.r=c0.gp(0)
o.d=B.bH
o.e=B.dQ
c2.ah(new A.m(k,0),new A.m(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
c2.O(new A.m(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.L()
p.r=c0.gp(0)
c2.cR(D.fuV,3.204424506661589,3.015928947446201,!0,p)
p=A.ap(c0,B.c,0.25)
p.toString
c2.ah(K.aaP,K.aaO,C.iW(p,1))
break
default:p=A.L()
p.r=c0.gp(0)
c2.cR(D.fun,3.267256359733385,2.8902652413026098,!0,p)}i=B.h.D(c4.b,0,1)*0.4+0.1
p=A.c1(D.eJA,5,8)
o=D.aie.j(i)
n=A.L()
n.r=o.gp(0)
c2.c3(p,n)
n=A.c1(D.eIg,5,8)
p=D.aie.j(i)
o=A.L()
o.r=p.gp(0)
c2.c3(n,o)
h=c4.e*2.4
o=new A.aJ(v,B.ak,b9,b9,A.a([],w))
o.E(new A.b_(h-0.6,-2))
o.E(new A.cn(h-3.4,6,h-2.6,7.4))
o.E(new A.cn(h,8.8,h+2.6,7.4))
c2.af(o,C.iW(c8.j(0.75),1.1))
o=A.L()
o.r=c8.gp(0)
c2.O(new A.m(h-1.5,7.2),0.7,o)
o=A.L()
o.r=c8.gp(0)
c2.O(new A.m(h+1.5,7.2),0.7,o)
g=B.h.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.hs[l]
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
if(a3==null)a3=a4.e=new A.EG(a4.glk().a.snapshot())
d.clipPath(a3.a,$.n_(),!0)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=D.boD.gp(0)
c2.O(new A.m(a7,a8),2.1,a3)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.v.gp(0)
c2.O(new A.m(a7,a8),1.05,a3)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.c.gp(0)
c2.O(new A.m(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.a09:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a9.b=B.ae
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
b2.b=B.ae
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bH
b2.e=B.dQ
c2.ah(new A.m(a5-a4,b0-a6+0.4),new A.m(a5+a4,b0-0.6-a3),b2)}b3=B.h.D(c4.a,0,1)
if(o)b4=D.bzb
else{u=A.ap(c8,D.bsr,0.6)
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
v=A.L()
v.r=D.brK.gp(0)
c2.af(b8,v)
J.bs(d.save())
c2.mN(0,b8)
v=B.c.j(0.95)
u=A.L()
u.r=v.gp(0)
c2.aE(new A.a5(w,11,w+b6*2,13.2),u)
u=A.c1(new A.m(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.L()
w.r=D.bzg.gp(0)
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
u=A.L()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cR(D.fuC,-1.2,2.2,!1,C.iW(c8.j(0.5),0.8))
c2.cR(D.fup,2.141592653589793,2.2,!1,C.iW(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.L()
w.r=c1.gp(0)
c2.O(D.eHZ,1.7,w)
w=A.L()
w.r=c1.gp(0)
c2.O(D.eHW,1.7,w)}},
iuV(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.U(),f=new A.p2(new A.oD()),e=A.vb(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.L()
a2.san(A.jT(B.J,new A.m(0,a0*0.46),D.diZ,D.d9f,B.w,h))
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
e.O(new A.m(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bs(a2.save())
a2.translate(200,120)
e.jA(0,-0.5)
d=A.L()
a0=x.O
d.san(A.wF(B.J,230,A.a([D.bnf,B.L],a0),h,B.w,h,h,0))
e.c3(D.fv6,d)
a2.restore()
d=A.L()
d.san(A.wF(D.aaX,58,A.a([D.bqK,B.L],a0),h,B.w,h,h,0))
e.O(D.aaX,58,d)
d=A.L()
d.r=D.blY.gp(0)
e.O(D.aaX,24,d)
d=A.L()
d.r=D.a0A.gp(0)
e.O(D.eGg,5,d)
d=A.L()
d.r=D.a0A.gp(0)
e.O(D.eGk,3.4,d)
d=A.L()
d.r=D.a0A.gp(0)
e.O(D.eGj,2.4,d)
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
g=[D.bku,D.bmw,D.bsL][s]
u=$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cD6[l]
k=384+B.n.F(o,11)
g=o-2
d=k-24
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.b=B.ae
u.c=2.4
u.r=D.a0W.gp(0)
u.d=B.bH
u.e=B.dQ
e.ah(new A.m(o,k),new A.m(g,d),u)
g=A.c1(new A.m(g,k-27),11,46)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.a0W.gp(0)
e.c3(g,u)
d=A.c1(new A.m(o-12,d),8,24)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.a0W.gp(0)
e.c3(d,u)}for(v=0;v<9;++v){g=B.n.F(v,3)
d=B.n.F(v,4)
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=D.bm0.j(0.8).gp(0)
e.O(new A.m(20+v*52+g*7,400+d*5),1.2,u)}g=A.L()
g.san(A.jT(D.eEQ,D.eET,D.dby,B.xU,B.w,h))
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
e.nZ(0,1,0.34)
g=A.L()
g.san(A.wF(B.J,250,A.a([D.btL,D.bmR,D.bvH],a0),A.a([0,0.8,1],x.n),B.w,h,h,0))
e.O(B.J,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ap(D.akJ,D.blv,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.U()
a0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a0.b=B.ae
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bH
a0.e=B.dQ
e.ah(new A.m(o+i*2,k),new A.m(o+i*5,g+Math.abs(i)*3),a0)}}C.in8(e)
for(l=0;l<3;++l)C.iqF(e,D.aDu[l])
C.iqt(e,D.eGa)
for(o=118;o<190;o+=11){g=B.n.F(o,3)
d=B.n.F(o,4)
$.U()
a0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a0.b=B.ae
a0.c=2.4
a0.r=D.a0S.gp(0)
a0.d=B.bH
a0.e=B.dQ
e.ah(new A.m(o,452+g),new A.m(o+1,436+d),a0)}e.ah(D.eFi,D.eFB,C.iW(D.bme,1.6))
a2.restore()
return f.ne()},
in8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.U().r,g=x.v,f=new A.aJ(h,B.ak,i,i,A.a([],g))
f.E(new A.b_(358,462))
f.E(new A.i6(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.i6(416,382,432,422,428,462))
f.E(new A.bz())
w=A.L()
w.san(A.jT(new A.m(354,0),new A.m(430,0),D.dJn,B.mc,B.w,i))
d.af(f,w)
v=new A.e7()
v.cW(4)
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
p.e=B.dQ
d.ah(new A.m(t,s),new A.m(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.doc[o]
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
r.b=B.ae
r.c=8
r.r=D.aj0.gp(0)
r.d=B.bH
r.e=B.dQ
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=A.ap(D.bm6,D.bsJ,v.ai()).j(0.92).gp(0)
d.O(new A.m(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.b=B.ae
r.c=1.2
r.r=D.a0S.gp(0)
r.d=B.bH
r.e=B.dQ
d.ah(new A.m(w,q+8),new A.m(w,q+22),r)
q=A.c1(new A.m(w,q+28),13,7)
w=new A.ar(B.V,B.R,B.X,B.Y,B.W)
w.r=D.bu7.gp(0)
d.c3(q,w)}},
iqF(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.c1(new A.m(a5,a6+2),a9,a7*2.8),b1=B.v.j(0.3),b2=$.U(),b3=A.L()
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
u=A.L()
u.san(A.jT(new A.m(b0,0),new A.m(v,0),D.doj,B.mc,B.w,a4))
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
n.b=B.ae
n.c=1
n.r=o.gp(0)
n.d=B.bH
n.e=B.dQ
b4.ah(new A.m(r,q),new A.m(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.akF.j(0.75)
n=A.L()
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
j.r=D.lY.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aJ(b2,B.ak,a4,a4,u)
b2=a6-8
f.E(new A.b_(b0,b2))
for(p/=6,l=0;l<=B.h.ba(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.aj(n)
f.ac()}b4.af(f,C.iW(D.akF.j(0.7),1.6))
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
m=A.L()
m.r=D.akR.gp(0)
b4.af(b2,m)
m=A.L()
m.r=D.akR.gp(0)
b4.O(new A.m(a5-a7*0.62,a6-a8*0.5),u,m)
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
b1=A.L()
n=a7*1.4
b1.san(A.jT(new A.m(a5-n,0),new A.m(a5+n,0),D.dsa,B.mc,B.w,a4))
b4.af(e,b1)
J.bs(v.save())
b4.mN(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.he()?B.v:D.blE).j(0.16)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.b=B.ae
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
n.b=B.ae
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
v.b=B.ae
v.c=1.1
v.r=D.btc.gp(0)
v.d=B.bH
v.e=B.dQ
b4.ah(new A.m(a2,a3),new A.m(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aJ(b0,B.ak,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.b_(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bz())
b0=A.L()
b0.r=D.bp7.gp(0)
b4.af(a9,b0)},
iqt(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aFG[s]
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.b=B.ae
q.c=3
q.r=D.a0S.gp(0)
q.d=B.bH
q.e=B.dQ
d.ah(new A.m(r,u),new A.m(r,t),q)}u=A.c1(e.a6(0,K.aP6),24,36)
t=$.U()
r=A.L()
r.r=D.byn.gp(0)
d.c3(u,r)
t=new A.aJ(t.r,B.ak,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.b_(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.cn(w,v-24,r,u))
t.E(new A.bz())
u=A.L()
u.r=D.ajJ.gp(0)
d.af(t,u)},
ipN(d){switch(B.n.F(d,8)){case 0:return D.b4v
case 1:return D.b4t
case 2:return D.b4s
case 3:return D.b4r
case 4:return D.b4u
case 5:return D.b4w
case 6:return D.hXs
default:return D.hXr}},
Tx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bsb()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.ab_:j
w.as=k==null?D.Fl:k
C.hQf(d,e,p,C.ipN(m),w,s,m,l)},
hRM(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bWY:function bWY(){var _=this
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
tA:function tA(d,e,f,g,h,i,j,k,l,m){var _=this
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
bsb:function bsb(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
ao1:function ao1(){this.b=this.a=null},
aZa:function aZa(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bWQ:function bWQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWR:function bWR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWS:function bWS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWT:function bWT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWU:function bWU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWV:function bWV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWW:function bWW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bWX:function bWX(){},
bWP:function bWP(d){this.a=d},
ahu:function ahu(d,e){this.a=d
this.b=e},
afo:function afo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
NI(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bVz(s)
s.bFg(d)
return s},
HA(d,e,f,g,h,i,j){var w,v=A.T(g).k("X<1>")
v=A.d8(new A.X(g,new C.fGE(f),v),v.k("M.E"))
w=A.B(v,A.a3(v).k("cl.E"))
B.d.e_(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.u(v,A.cI(w,0,A.dy(3,"count",x.S),A.T(w).c))
B.d.e_(v,d)
return new C.lR(e,v,B.d.c8(v,f),h,i,"tree",j)},
iMq(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.S(c0,x.cg),c2=new C.hjq(c1),c3=x.s,c4=A.a([],c3)
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
for(c4=w.length,v=A.T(t).k("X<1>"),s=v.k("M.E"),p=A.T(w).k("X<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.I)(w),++u){m=w[u]
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
f=A.B(new A.X(t,new C.hjs(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.HA(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.B(new A.X(w,new C.hjt(i,m),p),o)
B.d.e_(d,c6)
c2.$2(b4,new C.lR("True or false: "+h+" is the "+g+" of "+l+".",A5.TQ,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lR("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",A5.TQ,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.H8(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.B(new A.X(t,new C.hju(l,a0,c5),v),s)
e=a1.c
if(e===D.xo)e="son"
else e=e===D.p3?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.HA(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eA([h+1,h+2,Math.max(0,h-1)],n)
a5.X(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.m5(a5,a5.r,f.k("m5<1>")),e.c=a5.e,f=f.c;e.A();){a3=e.d
a4.push(A.v(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.HA(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("ia<1>"),a3=new A.ia(a0,1,b3,a2),a3.mB(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gI(0),a2.k("bQ<aj.E>")),a2=a2.k("aj.E");a3.A();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.HA(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.atH(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.B(new A.X(t,new C.hjv(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.HA(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.d()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.d()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.B(new A.X(t,new C.hjw(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.xo
if(e)a2=b7
else a2=f===D.p3?b8:b9
if(e)f=b7
else f=f===D.p3?b8:b9
c2.$2("grand",C.HA(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aPO(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.B(new A.X(t,new C.hjx(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.HA(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.B(r,c0)
B.d.u(j,D.cWb)
h=l+" was born in "+k
c2.$2("place",C.HA(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.B(q,c0)
B.d.u(j,D.dcG)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.HA(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.I)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.HA(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jc(b1,b3,b3)
c2.$2("year",C.HA(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bHH(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.NI(d),l=new A.e7()
l.cW(f)
w=C.iMq(m,l,g)
for(v=new A.ds(w,w.r,w.e);v.A();)J.hz9(v.d,l)
v=A.a3(w).k("cv<1>")
u=A.B(new A.cv(w,v),v.k("M.E"))
B.d.e_(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aR(u,new C.fUt(n,w))))break
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
if(v<e){v=A.B(D.aCw,x.df)
B.d.e_(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hQm(o,l))}}else if(!g&&v>3){o=C.hQm(D.aCw[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hQm(d,e){var w=d.b,v=w[d.c]
w=A.B(w,x.N)
B.d.e_(w,e)
return new C.lR(d.a,w,B.d.c8(w,v),d.d,d.e,d.f,d.r)},
hVY(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.NI(a2),a1=new A.e7()
a1.cW(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a0.H8(q).length>=2)u.push(q)}B.d.e_(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){n=u[r]
m=a0.H8(n)
l=A.T(m)
k=new A.ia(m,0,5,l.k("ia<1>"))
k.mB(m,0,5,l.c)
j=k.de(0)
if(new A.O(j,new C.h9G(),A.T(j).k("O<1,F>")).fI(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.I)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.I)(j),++i)g.push(C.aUW(a0,j[i]))
w.push(new C.awd("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.S(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
J.bW(e.c0(0,a0.aoO(q),new C.h9H()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cv<1>")
d=A.B(new A.cv(e,t),t.k("M.E"))
B.d.fj(d)
v=A.a([],v)
for(u=A.cI(d,0,A.dy(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bQ(u,u.gI(0),t.k("bQ<aj.E>")),t=t.k("aj.E");u.A();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cK(s)
m.e_(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.I)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.I)(v),++r)s.push(C.aUW(a0,v[r]))
w.push(new C.awd("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aTi(d){return B.d.aqg(D.aF0,new C.fQi(d))},
iBK(d){return A.nU(new A.X(D.aF0,new C.fXG(d),x.av))},
bWn(d){return C.i4T(d)},
i4T(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bWn=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bWn)
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
return A.i($async$bWn,v)},
Ce(d,e){return C.i4Q(d,e)},
i4Q(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Ce=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Ce)
case 7:r=g
p=B.a.i(d)
o=A.ev(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Ce)
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
return A.i($async$Ce,v)},
bWm(d,e,f){return C.i4R(d,e,f)},
i4R(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bWm=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$bWm)
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
return A.i($async$bWm,v)},
Cf(d,e,f,g){return C.i4S(d,e,f,g)},
i4S(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$Cf=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.aB(),$async$Cf)
case 7:r=i
p=B.a.i(d)
o=A.ev(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$Cf)
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
return A.i($async$Cf,v)},
bK0(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
hlw(d,e,f,g){return new C.amz(g,d==null?A.a(["","","",""],x.s):d,e,f)},
i2U(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aN(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.bL)
while(u.A())w.push(J.k(u.gP(u)))
u=x.N
w=A.cI(w,0,A.dy(4,"count",x.S),u).de(0)
B.d.u(w,A.c4(Math.max(0,4-(v.b(d.h(0,"a"))?J.aa(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.h.L(v)
v=B.n.D(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.h.L(u)
return C.hlw(w,v,B.n.D(u==null?20:u,5,60),t)},
hAk(d){var w,v,u,t,s,r,q=J.a0(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aN(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.bL)
u=x.f
t=x.N
s=x.z
while(q.A()){r=q.gP(q)
if(u.b(r))v.push(C.i2U(A.a1(r,t,s)))}return new C.Nq(p,w,v)},
hui(d){var w,v=A.a([],x.c)
for(w=J.aN(d.z);w.A();)v.push(C.hAk(w.gP(w)))
return v},
aUW(d,e){var w=e.c===D.p3
if(d.aoO(e)===0&&d.H8(e).length!==0)return w?0:1
if(d.H8(e).length!==0||d.atH(e)!=null)return w?2:3
return w?4:5},
hX3(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.NI(a4),a3=new A.e7()
a3.cW(a5)
w=A.a([],x.dT)
v=a2.b
u=A.B(v,x.P)
B.d.e_(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.I)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.I)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.d()
j=i.h(0,k)}h=a2.H8(m)
g=a2.atH(m)
f=a2.aPO(m)
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
B.d.b_(l,new C.hjR())
d=B.a.i(m.b)
a0=A.B(new A.X(s,new C.hjS(d),o),n)
B.d.e_(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.ia(a0,0,3,i.k("ia<1>"))
a1.mB(a0,0,3,i.c)
B.d.u(k,a1)
B.d.e_(k,a3)
a1=C.aUW(a2,m)
i=new A.ia(l,0,4,p)
i.mB(l,0,4,r)
w.push(new C.bdn(d,a1,i.de(0),k))
if(w.length>=5)break}return w},
hNu(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.Y(d,"My ")?1:0},
hW8(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.NI(a4),a3=new A.e7()
a3.cW(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.I)(t),++r){q=t[r]
if(a2.H8(q).length>=2)u.push(q)}B.d.e_(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.I)(u),++r){l=u[r]
k=a2.H8(l)
j=A.T(k)
i=new A.ia(k,0,4,j.k("ia<1>"))
i.mB(k,0,4,j.c)
h=i.de(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.I)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aR(h,new C.hai(q))&&q.d!==j)i.push(q)}B.d.e_(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.ia(i,0,k,m)
j.mB(i,0,k,n)
f=j.de(0)
j=B.a.i(l.b)
k=C.aUW(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.I)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.I)(h),++g)e.push(C.aUW(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.I)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.I)(f),++g)a0.push(C.aUW(a2,f[g]))
w.push(new C.abq(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lR:function lR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bVz:function bVz(d){this.b=d
this.c=$},
bVA:function bVA(){},
bVB:function bVB(d){this.a=d},
fGE:function fGE(d){this.a=d},
hjq:function hjq(d){this.a=d},
hjr:function hjr(){},
hjs:function hjs(d){this.a=d},
hjt:function hjt(d,e){this.a=d
this.b=e},
hju:function hju(d,e,f){this.a=d
this.b=e
this.c=f},
hjp:function hjp(d,e){this.a=d
this.b=e},
hjv:function hjv(d){this.a=d},
hjw:function hjw(d){this.a=d},
hjx:function hjx(d,e,f){this.a=d
this.b=e
this.c=f},
hjo:function hjo(d,e){this.a=d
this.b=e},
fUt:function fUt(d,e){this.a=d
this.b=e},
awd:function awd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
h9G:function h9G(){},
h9H:function h9H(){},
A2:function A2(d,e,f){this.a=d
this.b=e
this.c=f},
fQi:function fQi(d){this.a=d},
fXG:function fXG(d){this.a=d},
amz:function amz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQl:function bQl(){},
Nq:function Nq(d,e,f){this.a=d
this.b=e
this.c=f},
bdn:function bdn(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
hjR:function hjR(){},
hjS:function hjS(d){this.a=d},
abq:function abq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hai:function hai(d){this.a=d},
bkO:function bkO(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
ahs:function ahs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
alR:function alR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alS:function alS(d,e,f,g,h){var _=this
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
bOt:function bOt(d){this.a=d},
bOo:function bOo(){},
bOu:function bOu(){},
bOm:function bOm(){},
bOn:function bOn(){},
bOs:function bOs(d){this.a=d},
bOp:function bOp(d,e){this.a=d
this.b=e},
bOr:function bOr(d,e){this.a=d
this.b=e},
bOq:function bOq(d,e){this.a=d
this.b=e},
bOl:function bOl(d){this.a=d},
bfV:function bfV(d,e){this.b=d
this.a=e},
RA:function RA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDD:function aDD(d,e,f){this.b=d
this.c=e
this.a=f},
aC_:function aC_(d,e,f){this.a=d
this.b=e
this.c=f},
awO:function awO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
awP:function awP(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.dt$=e
_.bd$=f
_.c=_.a=null},
cuz:function cuz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cuA:function cuA(d){this.a=d},
cuy:function cuy(d){this.a=d},
cuB:function cuB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cuC:function cuC(){},
cuD:function cuD(d,e){this.a=d
this.b=e},
cuE:function cuE(){},
cuF:function cuF(d){this.a=d},
cuv:function cuv(d){this.a=d},
cuw:function cuw(d,e){this.a=d
this.b=e},
cux:function cux(d,e,f){this.a=d
this.b=e
this.c=f},
cuq:function cuq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cus:function cus(d,e){this.a=d
this.b=e},
cut:function cut(d,e){this.a=d
this.b=e},
cur:function cur(d,e){this.a=d
this.b=e},
cup:function cup(){},
cuu:function cuu(){},
bfm:function bfm(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cUU:function cUU(){},
aAL:function aAL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAM:function aAM(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cJu:function cJu(d){this.a=d},
cJt:function cJt(d){this.a=d},
cJC:function cJC(d,e){this.a=d
this.b=e},
cJD:function cJD(d,e){this.a=d
this.b=e},
cJE:function cJE(d){this.a=d},
cJB:function cJB(d){this.a=d},
cJF:function cJF(d){this.a=d},
cJG:function cJG(d,e){this.a=d
this.b=e},
cJH:function cJH(){},
cJI:function cJI(d){this.a=d},
cJw:function cJw(d){this.a=d},
cJx:function cJx(d,e){this.a=d
this.b=e},
cJv:function cJv(d,e){this.a=d
this.b=e},
cJy:function cJy(){},
cJz:function cJz(){},
cJA:function cJA(d,e){this.a=d
this.b=e},
aBK:function aBK(){},
aJf:function aJf(){},
hrS(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.buA((w-450*u)/2,(v-900*u)/2,u)},
ahg:function ahg(){},
fik:function fik(d){this.a=d},
aNa:function aNa(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fsK:function fsK(d){this.a=d},
anS:function anS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anT:function anT(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.qv$=f
_.Nc$=g
_.apl$=h
_.bw$=i
_.ab$=j
_.c=_.a=null},
bWl:function bWl(d){this.a=d},
bWk:function bWk(){},
bWi:function bWi(d){this.a=d},
bWg:function bWg(){},
bWh:function bWh(d){this.a=d},
bWd:function bWd(d,e){this.a=d
this.b=e},
bWe:function bWe(){},
bWf:function bWf(d){this.a=d},
bWj:function bWj(d,e){this.a=d
this.b=e},
bWc:function bWc(d){this.a=d},
bwj:function bwj(d,e){this.b=d
this.a=e},
fil:function fil(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fim:function fim(d,e,f){this.a=d
this.b=e
this.c=f},
fin:function fin(d,e,f){this.a=d
this.b=e
this.c=f},
fio:function fio(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fip:function fip(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiq:function fiq(){},
anQ:function anQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anR:function anR(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.qv$=f
_.Nc$=g
_.apl$=h
_.bw$=i
_.ab$=j
_.c=_.a=null},
bVZ:function bVZ(){},
bW9:function bW9(d,e){this.a=d
this.b=e},
bWa:function bWa(d){this.a=d},
bWb:function bWb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bW5:function bW5(){},
bW4:function bW4(d,e){this.a=d
this.b=e},
bW6:function bW6(d,e){this.a=d
this.b=e},
bW7:function bW7(){},
bW8:function bW8(d){this.a=d},
bW0:function bW0(d){this.a=d},
bW1:function bW1(d){this.a=d},
bW2:function bW2(d){this.a=d},
bW_:function bW_(d,e){this.a=d
this.b=e},
bW3:function bW3(d){this.a=d},
bmE:function bmE(d,e){this.b=d
this.a=e},
dxI:function dxI(){},
a3k:function a3k(d,e){this.a=d
this.b=e},
anM:function anM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anN:function anN(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.qv$=e
_.Nc$=f
_.apl$=g
_.bw$=h
_.ab$=i
_.c=_.a=null},
bVL:function bVL(d){this.a=d},
bVK:function bVK(){},
bVJ:function bVJ(){},
bVD:function bVD(){},
bVE:function bVE(){},
bVI:function bVI(d,e,f){this.a=d
this.b=e
this.c=f},
bVH:function bVH(d){this.a=d},
bVF:function bVF(d,e){this.a=d
this.b=e},
bVG:function bVG(d){this.a=d},
bm3:function bm3(d,e){this.b=d
this.a=e},
aDG:function aDG(){},
bjB:function bjB(){},
aDI:function aDI(){},
bjC:function bjC(){},
aDJ:function aDJ(){},
bjD:function bjD(){},
uR(d,e,f,g,h){var w,v,u=null,t=A.n(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.hS,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.u(v,A.a([A.V(g,h,u,u,u,20),B.aa],w))
v.push(A.c(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.q(u,A.A(v,B.l,u,B.e,B.P,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.m),u,u,u,u,B.PQ,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hB7(d,e,f,g,h,i,j){return new C.anO(i,h,d,j,e,f,g,null)},
a7S:function a7S(d,e){this.c=d
this.a=e},
bma:function bma(d){this.a=d},
u0:function u0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVC:function bVC(d){this.a=d},
IZ:function IZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Xh:function Xh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bp_:function bp_(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e8D:function e8D(d,e){this.a=d
this.b=e},
e8E:function e8E(d){this.a=d},
e8F:function e8F(d,e){this.a=d
this.b=e},
e8B:function e8B(d){this.a=d},
e8C:function e8C(d){this.a=d},
e8A:function e8A(d){this.a=d},
e8y:function e8y(d){this.a=d},
e8z:function e8z(d){this.a=d},
e8x:function e8x(d,e){this.a=d
this.b=e},
e8G:function e8G(d){this.a=d},
e8H:function e8H(d,e){this.a=d
this.b=e},
e8I:function e8I(d,e){this.a=d
this.b=e},
e8J:function e8J(d,e){this.a=d
this.b=e},
e8M:function e8M(d,e){this.a=d
this.b=e},
e8N:function e8N(d,e){this.a=d
this.b=e},
e8O:function e8O(d,e){this.a=d
this.b=e},
e8P:function e8P(d,e){this.a=d
this.b=e},
e8Q:function e8Q(d,e){this.a=d
this.b=e},
e8R:function e8R(d,e,f){this.a=d
this.b=e
this.c=f},
e8S:function e8S(d,e){this.a=d
this.b=e},
e8T:function e8T(d,e){this.a=d
this.b=e},
e8K:function e8K(d){this.a=d},
e8L:function e8L(d){this.a=d},
a19:function a19(d,e){this.a=d
this.b=e},
anO:function anO(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
anP:function anP(d){var _=this
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
bVX:function bVX(d){this.a=d},
bVY:function bVY(d){this.a=d},
bVW:function bVW(d){this.a=d},
bVN:function bVN(d){this.a=d},
bVO:function bVO(d){this.a=d},
bVM:function bVM(d){this.a=d},
bVT:function bVT(d,e,f){this.a=d
this.b=e
this.c=f},
bVU:function bVU(d){this.a=d},
bVQ:function bVQ(d,e){this.a=d
this.b=e},
bVR:function bVR(d,e,f){this.a=d
this.b=e
this.c=f},
bVV:function bVV(){},
bVS:function bVS(d,e){this.a=d
this.b=e},
bVP:function bVP(d){this.a=d},
UX:function UX(d,e){this.c=d
this.a=e},
anL:function anL(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bVn:function bVn(d){this.a=d},
bVo:function bVo(d){this.a=d},
bVy:function bVy(){},
bVx:function bVx(d,e,f){this.a=d
this.b=e
this.c=f},
bVs:function bVs(d,e){this.a=d
this.b=e},
bVr:function bVr(d,e){this.a=d
this.b=e},
bVt:function bVt(d){this.a=d},
bVu:function bVu(d,e){this.a=d
this.b=e},
bVv:function bVv(d,e){this.a=d
this.b=e},
bVq:function bVq(d,e){this.a=d
this.b=e},
bVw:function bVw(d,e,f){this.a=d
this.b=e
this.c=f},
bVp:function bVp(d,e){this.a=d
this.b=e},
iAc(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.akB(a6),a5=a4.length
if(a5===0)return""
w=A.S(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bD(new A.W(Date.now(),0,!1))
s=new C.fTU(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("X<1>"),q=q.k("cP<1,o>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.I)(a4),++v){u=a4[v]
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
m.push("child of "+l+k)}a0=A.B(new A.cP(new A.X(a4,new C.fTS(u,f),p),new C.fTT(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aJ(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aJ(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.av(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
iAd(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.akB(a0),d=e.length
if(d===0)return""
w=x.N
v=A.S(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.I)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fTZ(v,e)
q=new C.fTX(v)
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
d=A.d8(new A.ba(p,d),d.k("M.E"))
n=A.B(d,A.a3(d).k("cl.E"))
B.d.fj(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.I)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eB(l,new C.fTY(p,m));k.A();t=f){j=l.gP(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.am(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aJ(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
iko(d,e,f,g){var w,v,u=C.iAe(d,e)
if(u<=0||f.length<=u)return new A.agV(!1,D.EE,f)
if(g.q(0,e.a))return new A.agV(!1,D.EE,f)
w=A.T(f).c
v=A.cI(f,0,A.dy(u,"count",x.S),w).de(0)
return new A.agV(!0,A.cI(f,u,null,w).de(0),v)},
ikp(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.akB(d3),d2=d1.length
if(d2===0)return D.hUs
w=x.N
v=A.S(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.I)(d1),++u){t=d1[u]
v.c0(0,t.a,new C.dmR(t))}s=new C.dn7(v)
d2=x.dy
r=A.S(w,d2)
q=new C.dn_(r)
for(p=new A.ds(v,v.r,v.e);p.A();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dmZ(r)
l=A.S(w,x.do)
for(p=new A.ds(v,v.r,v.e);p.A();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.bW(l.c0(0,k,new C.dmS()),o)}h=new C.dmY(s)
g=new C.dmX(l,r)
p=v.$ti.k("ba<2>")
o=p.k("X<M.E>")
f=A.B(new A.X(new A.ba(v,p),new C.dmT(h),o),o.k("M.E"))
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
a9=new C.dn5(new C.dn1(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.S(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.ds(v,v.r,v.e),j=a2.gaoj(a2);o.A();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.eA([i],w)
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
b7=new C.dmQ(a2,new C.dn6(),b6,a3,b4,v,a4,a5,a6,b5)
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
d2=A.B(new A.cv(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.H8(o,new A.m(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Lr(c5.a,new A.m(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cv<1>")
d2=A.B(new A.cv(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.I)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bP(0,new C.dmU(c6,b4))
for(d2=new A.ci(a4,a4.$ti.k("ci<1,2>")).gae(0),w=x.g;d2.A();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aN(c7.b);j.A();){i=j.gP(j)
if(b6.am(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.m(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eB(j,new C.dmV(c8));i.A();)o.push(j.gP(0).b)
if(o.length===0)continue
B.d.b_(o,new C.dmW())
c6.push(new C.aN4(new A.m(c9,b4.h(0,c8).b.b+112),B.J,!1,o))}return new C.bjH(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hR8(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cG(d)
return w==null?null:w.b[1]},
hKq(d,e,f,g,h,i,j,k,l,m,n){return new C.a1n(k,f,j,e,l,n,m,d,g,h,i,null)},
aFH(d,e,f,g,h,i,j){return new C.bnu(i,d,e,f,j,h,g,null)},
asY:function asY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHh:function aHh(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
eai:function eai(d){this.a=d},
eah:function eah(d){this.a=d},
eak:function eak(d,e){this.a=d
this.b=e},
eal:function eal(d,e){this.a=d
this.b=e},
eam:function eam(d){this.a=d},
eag:function eag(d,e){this.a=d
this.b=e},
eaj:function eaj(d){this.a=d},
eao:function eao(d){this.a=d},
ean:function ean(d,e){this.a=d
this.b=e},
asS:function asS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHe:function aHe(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e9J:function e9J(d){this.a=d},
e9H:function e9H(d){this.a=d},
e9I:function e9I(d){this.a=d},
e9K:function e9K(d,e){this.a=d
this.b=e},
e9E:function e9E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e95:function e95(d){this.a=d},
e96:function e96(d,e){this.a=d
this.b=e},
e9n:function e9n(d){this.a=d},
e9l:function e9l(d){this.a=d},
e9m:function e9m(d,e){this.a=d
this.b=e},
e9o:function e9o(d){this.a=d},
e9p:function e9p(d,e){this.a=d
this.b=e},
e9D:function e9D(d,e){this.a=d
this.b=e},
e9k:function e9k(d){this.a=d},
e9j:function e9j(d){this.a=d},
e9i:function e9i(d,e){this.a=d
this.b=e},
e9A:function e9A(){},
e9B:function e9B(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e9z:function e9z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e9t:function e9t(d){this.a=d},
e9u:function e9u(d,e,f){this.a=d
this.b=e
this.c=f},
e9s:function e9s(d,e){this.a=d
this.b=e},
e9v:function e9v(d,e){this.a=d
this.b=e},
e9q:function e9q(d,e){this.a=d
this.b=e},
e9r:function e9r(){},
e9w:function e9w(d,e){this.a=d
this.b=e},
e9x:function e9x(d){this.a=d},
e9y:function e9y(d,e){this.a=d
this.b=e},
e9C:function e9C(d,e){this.a=d
this.b=e},
e8U:function e8U(d,e){this.a=d
this.b=e},
e8V:function e8V(d,e){this.a=d
this.b=e},
e9M:function e9M(d,e,f){this.a=d
this.b=e
this.c=f},
e9G:function e9G(d,e,f){this.a=d
this.b=e
this.c=f},
e9F:function e9F(d){this.a=d},
e8W:function e8W(d){this.a=d},
e8X:function e8X(d){this.a=d},
e8Y:function e8Y(){},
e8Z:function e8Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e92:function e92(d,e){this.a=d
this.b=e},
e91:function e91(d,e){this.a=d
this.b=e},
e90:function e90(d){this.a=d},
e93:function e93(d,e){this.a=d
this.b=e},
e9_:function e9_(d){this.a=d},
e9L:function e9L(d){this.a=d},
e9f:function e9f(){},
e9g:function e9g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9e:function e9e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9a:function e9a(d,e,f){this.a=d
this.b=e
this.c=f},
e99:function e99(d,e,f){this.a=d
this.b=e
this.c=f},
e97:function e97(d,e){this.a=d
this.b=e},
e9b:function e9b(d){this.a=d},
e9c:function e9c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e98:function e98(d,e){this.a=d
this.b=e},
e9d:function e9d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e9h:function e9h(d,e){this.a=d
this.b=e},
e9T:function e9T(){},
e9U:function e9U(d,e){this.a=d
this.b=e},
e9V:function e9V(d){this.a=d},
e9W:function e9W(d,e){this.a=d
this.b=e},
e9P:function e9P(d){this.a=d},
e9N:function e9N(d,e){this.a=d
this.b=e},
e9Q:function e9Q(d,e){this.a=d
this.b=e},
e9R:function e9R(d,e){this.a=d
this.b=e},
e9S:function e9S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e9X:function e9X(d){this.a=d},
e9O:function e9O(d){this.a=d},
e94:function e94(d){this.a=d},
bjF:function bjF(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dmO:function dmO(d){this.a=d},
dmN:function dmN(d,e){this.a=d
this.b=e},
dmP:function dmP(d){this.a=d},
dmM:function dmM(d,e){this.a=d
this.b=e},
fTU:function fTU(d,e){this.a=d
this.b=e},
fTV:function fTV(d){this.a=d},
fTW:function fTW(){},
fTS:function fTS(d,e){this.a=d
this.b=e},
fTT:function fTT(){},
fTZ:function fTZ(d,e){this.a=d
this.b=e},
fU_:function fU_(d){this.a=d},
fU0:function fU0(){},
fTX:function fTX(d){this.a=d},
fTY:function fTY(d,e){this.a=d
this.b=e},
Lr:function Lr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
H8:function H8(d,e){this.a=d
this.b=e},
bjH:function bjH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dmR:function dmR(d){this.a=d},
dn7:function dn7(d){this.a=d},
dn_:function dn_(d){this.a=d},
dn0:function dn0(){},
dmZ:function dmZ(d){this.a=d},
dmS:function dmS(){},
dmY:function dmY(d){this.a=d},
dmX:function dmX(d,e){this.a=d
this.b=e},
dmT:function dmT(d){this.a=d},
dn1:function dn1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dn2:function dn2(d){this.a=d},
dn3:function dn3(d){this.a=d},
dn4:function dn4(){},
dn5:function dn5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dn6:function dn6(){},
dmQ:function dmQ(d,e,f,g,h,i,j,k,l,m){var _=this
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
dmU:function dmU(d,e){this.a=d
this.b=e},
dmV:function dmV(d){this.a=d},
dmW:function dmW(){},
aN4:function aN4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjI:function bjI(d,e){this.b=d
this.a=e},
dn8:function dn8(){},
dn9:function dn9(d){this.a=d},
dna:function dna(d){this.a=d},
dnb:function dnb(){},
bnv:function bnv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biI:function biI(d,e){this.b=d
this.a=e},
bBL:function bBL(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fyx:function fyx(d){this.a=d},
bqU:function bqU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
f82:function f82(d){this.a=d},
f81:function f81(d,e){this.a=d
this.b=e},
a1n:function a1n(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aFF:function aFF(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dDu:function dDu(d,e){this.a=d
this.b=e},
dDt:function dDt(d){this.a=d},
dDr:function dDr(d){this.a=d},
dDs:function dDs(d){this.a=d},
dDD:function dDD(d){this.a=d},
dDE:function dDE(d){this.a=d},
dDC:function dDC(d,e){this.a=d
this.b=e},
dDF:function dDF(){},
dDI:function dDI(d){this.a=d},
dDB:function dDB(d,e){this.a=d
this.b=e},
dDH:function dDH(){},
dDJ:function dDJ(d){this.a=d},
dDA:function dDA(d,e){this.a=d
this.b=e},
dDK:function dDK(d){this.a=d},
dDz:function dDz(d){this.a=d},
dDL:function dDL(d){this.a=d},
dDy:function dDy(d){this.a=d},
dDM:function dDM(d){this.a=d},
dDx:function dDx(d){this.a=d},
dDN:function dDN(d){this.a=d},
dDw:function dDw(d){this.a=d},
dDO:function dDO(d){this.a=d},
dDv:function dDv(d,e){this.a=d
this.b=e},
dDG:function dDG(d){this.a=d},
afL:function afL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bnu:function bnu(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
afK:function afK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bnt:function bnt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dDP:function dDP(d){this.a=d},
dDQ:function dDQ(d,e){this.a=d
this.b=e},
aFG:function aFG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aM6:function aM6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afM:function afM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dDZ:function dDZ(d){this.a=d},
H4:function H4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hFb(d){var w=d.cK,v=x.N
return w.j5(w,new C.ciT(),v,v)},
ibA(d){var w=d.bG
if(w>=0)return w
return 5},
hFd(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hFb(d).h(0,v)
if(w==null||w.length===0)return null
return A.bf(w)},
hFc(d,e){var w=C.hFd(d,e)
if(w!=null&&w.cb(new A.W(Date.now(),0,!1)))return!0
return!1},
ibB(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a1(C.hFb(d),w,w)
u=C.hFd(d,e)
t=u!=null&&u.cb(new A.W(Date.now(),0,!1))?u:new A.W(Date.now(),0,!1)
v.n(0,s,t.bM(A.dw(30,0,0,0,0,0).a).aa().ag())
d.cK=v},
b3X(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b3X=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.m_(t,B.KC),$async$b3X)
case 3:if(l){u=!0
w=1
break}u=A.lz(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.KC,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3X,v)},
ciT:function ciT(){},
iby(){var w,v=$.oh(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hp(u)},
JV(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$JV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$JV)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f9("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$JV)
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
return A.i($async$JV,v)},
a9B(d){return C.ibz(d)},
ibz(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a9B=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$a9B)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i2("ngmy_family_tree_backup_codes_v1",A.J(["codes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cZ,null),$async$a9B)
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
return A.i($async$a9B,v)},
ciS(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ciS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.JV(),$async$ciS)
case 3:t=m.ik(f),t=t.gae(t),s=x.f
case 4:if(!t.A()){w=5
break}r=t.gP(t)
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
return A.i($async$ciS,v)},
P3(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$P3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ciS(d),$async$P3)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.JV(),$async$P3)
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
return A.b(C.a9B(s),$async$P3)
case 9:case 8:u=t
w=1
break
case 5:n=C.iby()
w=10
return A.b(C.JV(),$async$P3)
case 10:s=f
J.aL(s,n,A.J(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a9B(s),$async$P3)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$P3,v)},
b3W(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b3W=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.JV(),$async$b3W)
case 3:t=f
for(s=J.dz(t),r=s.gdV(t),r=r.de(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.I)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.X(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a9B(t),$async$b3W)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b3W,v)},
a9C(d,e,f){var w=0,v=A.j(x.H),u
var $async$a9C=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.asX(d,e),$async$a9C)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.P3(d),$async$a9C)
case 7:w=4
break
case 5:w=8
return A.b(C.b3W(d),$async$a9C)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a9C,v)},
asR(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$asR=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.asX(f,e),$async$asR)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.ce(),$async$asR)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.JV(),$async$asR)
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
return A.i($async$asR,v)},
b3V(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b3V=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.ce(),$async$b3V)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.JV(),$async$b3V)
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
return A.i($async$b3V,v)},
ibC(){var w,v=$.oh(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.hp(u)},
asU(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$asU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$asU)
case 3:if(!g){u=null
w=1
break}t=C.ibC()
w=4
return A.b(A.Xi(),$async$asU)
case 4:s=g
r=B.e5.aL(B.T.au(d.fa(),null))
r=B.cS.gcp().aL(r)
q=e?999:2
J.aL(s,t,A.J(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a9D(s),$async$asU)
case 5:p=e?999:2
u=new A.a2z("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asU,v)},
asT(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$asT=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Xi(),$async$asT)
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
return A.b(C.b3V(J.k(l==null?"":l),j),$async$asT)
case 4:if(!a0)$.an.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.aa(t)===0){u=null
w=1
break}s=null
try{r=B.ch.cJ(0,B.cM.aL(t))
s=C.hFe(r)}catch(f){q=A.ad(f)
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
return A.b(A.a9D(p),$async$asT)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asT,v)},
hFe(d){var w,v,u,t,s=null
try{w=B.T.aN(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.ibE(A.a1(w,x.N,x.z))
return u}catch(t){v=A.ad(t)
$.an.$1("[family tree sync] parse: "+A.v(v))
return s}},
hnE(d){var w=0,v=A.j(x.m),u,t,s
var $async$hnE=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.Y(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.asT(t[1])
w=1
break}u=null
w=1
break}u=C.hFe(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hnE,v)},
ibE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.cL(v,x.f)
u=A.ct(u,new C.ciV(),u.$ti.k("M.E"),x.k)
t=A.a3(u).k("X<M.E>")
s=A.B(new A.X(u,new C.ciW(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bf(J.k(u==null?"":u))
if(r==null)r=new A.W(Date.now(),0,!1)
q=A.S(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.ik(p),t=t.gae(t),o=x.B;t.A();){n=t.gP(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.cL(l,u)
n=A.ct(n,new C.ciX(),n.$ti.k("M.E"),o)
k=A.a3(n).k("X<M.E>")
j=A.B(new A.X(n,new C.ciY(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.asV(h,w,s,r,q)},
asX(d,e){var w=0,v=A.j(x.y),u,t
var $async$asX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(R.OU(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.BK(d),$async$asX)
case 3:u=t.cM(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$asX,v)},
cj3(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cj3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.BK(d),$async$cj3)
case 3:t=s.b8(f,new C.cj4(),x.cs)
t=A.B(t,t.$ti.k("aj.E"))
B.d.b_(t,new C.cj5())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cj3,v)},
Xj(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Xj=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.asX(e,d),$async$Xj)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.P3(e),$async$Xj)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.BK(e),$async$Xj)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dO(r,new C.cj1(g))
r=A.B(t,t.$ti.k("M.E"))}t=J.a0(r)
if(t.gar(r)){u=null
w=1
break}t=t.dS(r,new C.cj2(e),x.k)
r=A.B(t,t.$ti.k("aj.E"))
q=A.S(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Mk(e,o),$async$Xj)
case 14:n=i
if(J.cM(n))q.n(0,o,n)
case 12:r.length===t||(0,A.I)(r),++p
w=11
break
case 13:u=new C.asV(s,B.a.i(e.toLowerCase()),r,new A.W(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Xj,v)},
b4_(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b4_=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Xj(d,e,f,g),$async$b4_)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aD(t,s,"_")
r=q.a
u=A.HO(A.Ln(q.fa(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b4_,v)},
b3Z(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b3Z=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Xj(d,e,f,g),$async$b3Z)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.asU(r,f),$async$b3Z)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aK1(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b3Z,v)},
Xk(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Xk=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.hnE(a0),$async$Xk)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.Y(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.asR(g.a,d,e,f,s,r),$async$Xk)
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
return A.b(C.bHl(e,j),$async$Xk)
case 12:case 11:w=13
return A.b(C.akj(e,j,s),$async$Xk)
case 13:h=n.h(0,i)
w=h!=null&&J.cM(h)?14:15
break
case 14:w=16
return A.b(C.BU(e,i,h),$async$Xk)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.I)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.buG(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Xk,v)},
asV:function asV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cj_:function cj_(){},
cj0:function cj0(){},
ciZ:function ciZ(){},
ciV:function ciV(){},
ciW:function ciW(){},
ciX:function ciX(){},
ciY:function ciY(){},
cj4:function cj4(){},
cj5:function cj5(){},
cj1:function cj1(d){this.a=d},
cj2:function cj2(d){this.a=d},
hxe(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.fc(null,x.H)
return A.hf(d,new C.asW(w,e,g,i,f,h,null),!0,null,x.H)},
dmL(d,e,f,g,h,i,j,k){return new C.bjE(i,e,k,j,g,f,h,d,null)},
asW:function asW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aHg:function aHg(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
ea5:function ea5(d){this.a=d},
ea6:function ea6(d,e,f){this.a=d
this.b=e
this.c=f},
eaa:function eaa(d,e){this.a=d
this.b=e},
eab:function eab(d){this.a=d},
ea2:function ea2(d){this.a=d},
ea3:function ea3(d,e){this.a=d
this.b=e},
ea4:function ea4(d,e){this.a=d
this.b=e},
ea9:function ea9(d){this.a=d},
ea8:function ea8(d,e){this.a=d
this.b=e},
ea7:function ea7(){},
ead:function ead(d){this.a=d},
eae:function eae(d,e){this.a=d
this.b=e},
eac:function eac(d,e){this.a=d
this.b=e},
dnc:function dnc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bjG:function bjG(d,e,f){this.d=d
this.e=e
this.a=f},
af_:function af_(d,e,f){this.c=d
this.d=e
this.a=f},
bjE:function bjE(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bjJ:function bjJ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a1H:function a1H(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aHf:function aHf(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e9Y:function e9Y(d,e){this.a=d
this.b=e},
e9Z:function e9Z(d){this.a=d},
ea_:function ea_(d){this.a=d},
ea0:function ea0(d){this.a=d},
ea1:function ea1(d){this.a=d},
a1I:function a1I(d){this.a=d},
bp0:function bp0(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
eaf:function eaf(d,e){this.a=d
this.b=e},
b2p(d,e){return new C.b2o(d,e,null)},
b2o:function b2o(d,e,f){this.c=d
this.d=e
this.a=f},
iCK(d){if(!(d!=null&&B.a.Y(d,"ngmy:thumb:")))return null
return B.a.aV(d,11)},
iKS(d){return A.bU(B.L,null,new C.hbR(new C.uC(A.Q(d).ax.a===B.I)),d,!0,!0,!0,null,!1,!1,x.N)},
hHh(d,e){return new C.aw2(e,d,null)},
aUQ(d,e,f,g,h,i,j){var w=C.iCK(i)
if(w!=null)return A.bv(e,new A.a4(j,f,new C.a8E(w,!0,null),null),B.ap)
return A.aU9(e,B.c1,f,g,h,i,j)},
mp:function mp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a8E:function a8E(d,e,f){this.c=d
this.d=e
this.a=f},
boE:function boE(d,e){var _=this
_.e=_.d=$
_.dt$=d
_.bd$=e
_.c=_.a=null},
dVX:function dVX(d){this.a=d},
dVY:function dVY(){},
dVZ:function dVZ(d,e){this.a=d
this.b=e},
boD:function boD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
hbR:function hbR(d){this.a=d},
hbQ:function hbQ(d,e){this.a=d
this.b=e},
hbP:function hbP(d,e){this.a=d
this.b=e},
hbO:function hbO(d,e){this.a=d
this.b=e},
aw2:function aw2(d,e,f){this.c=d
this.d=e
this.a=f},
csR:function csR(d,e){this.a=d
this.b=e},
aPx:function aPx(){},
iKC(d){var w=null
return A.cf(w,w,!0,w,new C.hbd(),d,w,!0,!0,x.e2)},
iLW(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.hj8(h,g,f,e),d,w,!0,!0,x.N)},
iKE(d,e){var w=null
return A.cf(w,w,!0,w,new C.hbh(e),d,w,!0,!0,x.dY)},
iKD(d){var w=null
return A.cf(w,w,!0,w,new C.hbg(),d,w,!0,!0,x.c5)},
aXO:function aXO(d,e){this.a=d
this.b=e},
aXN:function aXN(d){this.a=d},
aVR:function aVR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hbd:function hbd(){},
hj8:function hj8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hbh:function hbh(d){this.a=d},
hbg:function hbg(){},
a0k:function a0k(d,e){this.c=d
this.a=e},
aCm:function aCm(){var _=this
_.d=$
_.c=_.a=_.e=null},
deg:function deg(d){this.a=d},
deh:function deh(d){this.a=d},
def:function def(d,e){this.a=d
this.b=e},
dei:function dei(d){this.a=d},
dej:function dej(d){this.a=d},
a0j:function a0j(d){this.a=d},
aCl:function aCl(){this.d=$
this.c=this.a=null},
dec:function dec(d){this.a=d},
ded:function ded(d){this.a=d},
dee:function dee(d){this.a=d},
a_K:function a_K(d){this.a=d},
aAY:function aAY(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cL9:function cL9(){},
cLf:function cLf(d){this.a=d},
cLg:function cLg(d){this.a=d},
cLh:function cLh(d){this.a=d},
cLe:function cLe(){},
cLi:function cLi(d){this.a=d},
cLj:function cLj(d){this.a=d},
cLd:function cLd(){},
cLk:function cLk(d,e){this.a=d
this.b=e},
cLc:function cLc(d,e){this.a=d
this.b=e},
cLa:function cLa(d,e){this.a=d
this.b=e},
cLl:function cLl(d){this.a=d},
cLb:function cLb(){},
cLm:function cLm(d){this.a=d},
a3x:function a3x(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bBD:function bBD(){this.d=$
this.c=this.a=null},
fy2:function fy2(d,e){this.a=d
this.b=e},
fy3:function fy3(d){this.a=d},
fy4:function fy4(d,e){this.a=d
this.b=e},
ae0:function ae0(d,e){this.a=d
this.b=e},
GU:function GU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bBB:function bBB(d,e){var _=this
_.d=$
_.bw$=d
_.ab$=e
_.c=_.a=null},
fy0:function fy0(d,e){this.a=d
this.b=e},
aAR:function aAR(d,e){this.c=d
this.a=e},
bBC:function bBC(d,e){var _=this
_.d=$
_.bw$=d
_.ab$=e
_.c=_.a=null},
fy1:function fy1(d){this.a=d},
bBA:function bBA(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aRF:function aRF(){},
aRG:function aRG(){},
bJr(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.h.ba(u),s=B.n.D(B.h.S((u-t)*100),0,99),r=d<0?"-":"",q=A.of(B.n.v(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.h9t(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aY(B.n.v(s),2,"0")
n.push(A.cW(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.GL(A.cW(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aUs(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aUs=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.ie().le(85,1280,B.f5),$async$aUs)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fD(),$async$aUs)
case 8:r=e
if(J.aa(r)===0){u=null
w=1
break}q=C.hHg()
w=9
return A.b(C.csQ(q,r),$async$aUs)
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
return A.i($async$aUs,v)},
aUO(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aUO=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.Y(g,"ngmy:ws-thumb:")
if(i){u=C.csN(g)
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
return A.b(A.HP(p,!0,null,o).d9(0,B.fP),$async$aUO)
case 9:n=a1
w=10
return A.b(n.li(),$async$aUO)
case 10:m=a1
w=11
return A.b(m.b.hs(B.hr),$async$aUO)
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
return A.i($async$aUO,v)},
h9t:function h9t(){},
uC:function uC(d){this.a=d},
aw1:function aw1(d,e,f){this.c=d
this.d=e
this.a=f},
aIQ:function aIQ(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
f5c:function f5c(d,e){this.a=d
this.b=e},
f53:function f53(d){this.a=d},
f54:function f54(d){this.a=d},
f5a:function f5a(d,e){this.a=d
this.b=e},
f59:function f59(d,e){this.a=d
this.b=e},
f56:function f56(d,e){this.a=d
this.b=e},
f55:function f55(d,e){this.a=d
this.b=e},
f57:function f57(d){this.a=d},
f58:function f58(d,e){this.a=d
this.b=e},
f5b:function f5b(d,e){this.a=d
this.b=e},
f4Z:function f4Z(d,e){this.a=d
this.b=e},
f52:function f52(d){this.a=d},
f51:function f51(d,e){this.a=d
this.b=e},
f50:function f50(d){this.a=d},
f5d:function f5d(d,e){this.a=d
this.b=e},
f5e:function f5e(d,e){this.a=d
this.b=e},
f5_:function f5_(d,e){this.a=d
this.b=e},
hVy(d,e,f){var w="thumbnailPath",v=e.ak()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.X(0,w)
return A.J(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.W(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
h9u(d,e,f){var w=0,v=A.j(x.N),u
var $async$h9u=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.T.au(C.hVy(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h9u,v)},
bJt(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bJt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.h9u(!0,d,e),$async$bJt)
case 4:w=3
return A.b(r.aw_(g,d,e.a),$async$bJt)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.e5.aL(B.T.au(C.hVy(d,e,null),null))
u="NGMY_WS:"+B.l1.gcp().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJt,v)},
hLS(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hwQ(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.aa(s)===0)return!1
if(J.dc(s,"NGMYWSSYNC2|"))return!0
if(J.dc(s,"NGMY_WS:"))return!0
if(J.eI(s,t))return!0
if(J.dc(s,"{"))try{w=B.T.aN(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
iIw(d){var w,v,u,t=C.hLS(d)
if(t==null)return null
if(C.hwQ(t))return t
w=B.a.c8(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.aV(t,w))
if(C.hwQ(v))return v}u=B.a.c8(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.aV(t,u))
if(C.hwQ(v))return v}return null},
hwP(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.aa(q)===0)return r
if(J.dc(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.dc(q,"NGMY_WS:")){v=B.ch.cJ(0,B.cM.aL(J.no(q,8)))
w=t.a(B.T.aN(0,v,r))}else w=t.a(B.T.aN(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hqp(A.a1(u,x.N,x.z))
return t}catch(s){return r}},
bJs(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bJs=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.Y(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.avZ(t[1]),$async$bJs)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hwP(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hwP(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bJs,v)},
hwO(d){var w=B.n.v(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.m4(w,v,d.c,d.d,new A.W(Date.now(),0,!1))},
bIW(){var w=0,v=A.j(x.o),u,t
var $async$bIW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.HZ(),$async$bIW)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hwP(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bIW,v)},
hWN(d,e,f,g){return A.bU(B.L,null,new C.hiW(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
hiW:function hiW(d,e,f){this.a=d
this.b=e
this.c=f},
ag6:function ag6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f5g:function f5g(d,e){this.a=d
this.b=e},
f5h:function f5h(d,e){this.a=d
this.b=e},
f5i:function f5i(d,e){this.a=d
this.b=e},
f5j:function f5j(d,e){this.a=d
this.b=e},
f5f:function f5f(d){this.a=d},
avW:function avW(d,e,f){this.c=d
this.d=e
this.a=f},
bqp:function bqp(){var _=this
_.c=_.a=_.e=_.d=null},
f4U:function f4U(d,e){this.a=d
this.b=e},
f4V:function f4V(d){this.a=d},
f4W:function f4W(d){this.a=d},
aw0:function aw0(d){this.a=d},
aIP:function aIP(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
f4Y:function f4Y(d){this.a=d},
f4X:function f4X(d){this.a=d},
if3(d,e,f,g,h){return new C.PO(h,g,d,e,f,null)},
aNS:function aNS(d,e){this.a=d
this.b=e},
PO:function PO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aIR:function aIR(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
f5G:function f5G(){},
f5C:function f5C(d,e){this.a=d
this.b=e},
f5D:function f5D(d){this.a=d},
f5n:function f5n(d){this.a=d},
f5l:function f5l(d){this.a=d},
f5m:function f5m(d){this.a=d},
f5w:function f5w(d,e){this.a=d
this.b=e},
f5t:function f5t(d,e){this.a=d
this.b=e},
f5u:function f5u(d,e){this.a=d
this.b=e},
f5v:function f5v(d,e,f){this.a=d
this.b=e
this.c=f},
f5r:function f5r(d,e,f){this.a=d
this.b=e
this.c=f},
f5p:function f5p(d){this.a=d},
f5q:function f5q(d){this.a=d},
f5s:function f5s(d){this.a=d},
f5J:function f5J(d){this.a=d},
f5I:function f5I(d){this.a=d},
f5K:function f5K(d){this.a=d},
f5H:function f5H(d){this.a=d},
f5k:function f5k(d){this.a=d},
f5o:function f5o(d,e){this.a=d
this.b=e},
f5F:function f5F(d,e){this.a=d
this.b=e},
f5E:function f5E(d,e){this.a=d
this.b=e},
f5z:function f5z(d){this.a=d},
f5A:function f5A(d){this.a=d},
f5B:function f5B(d,e){this.a=d
this.b=e},
f5y:function f5y(d,e){this.a=d
this.b=e},
f5x:function f5x(d,e,f){this.a=d
this.b=e
this.c=f},
bDp:function bDp(){},
By(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aD(v,w,"_")},
aiK(d,e,f){return C.ivS(d,e,f)},
ivS(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$aiK=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$aiK)
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
return A.i($async$aiK,v)},
aiJ(d,e){return C.ivR(d,e)},
ivR(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$aiJ=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.X(0,e),$async$aiJ)
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
return A.i($async$aiJ,v)},
iuF(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.UW(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bGe(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bGe=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b7f(q),$async$bGe)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aUO(q,!1),$async$bGe)
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
return A.i($async$bGe,v)},
i29(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
hqp(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.cL(s,x.f)
w=A.ct(w,new C.cKs(),w.$ti.k("M.E"),x.Q)
v=A.a3(w).k("X<M.E>")
r=A.B(new A.X(w,new C.cKt(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bf(J.k(t==null?"":t))
return new C.m4(w,v,u,r,t==null?new A.W(Date.now(),0,!1):t)},
iA8(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.xo
case"female":case"f":return D.p3
default:return D.zV}},
hRH(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hB8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.iA8(v==null?j:J.k(v))
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
iAa(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Qc
case"viewer":return D.le
default:return D.vu}},
iAb(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
HQ(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aTo(d,e){return B.a.i(e.toLowerCase())===C.HQ(d,e)&&d.y!==D.le},
uS(d,e){var w,v=d.y
if(v===D.le)return!1
w=B.a.i(e.toLowerCase())
if(w===C.HQ(d,e))return!0
if(v===D.Qc)return!0
v=d.e
return new A.O(v,A.hwW(),A.T(v).k("O<1,o>")).q(0,w)},
izv(d){return J.dO(d,new C.fSN()).gI(0)},
hjH(d){var w=0,v=A.j(x.y),u,t
var $async$hjH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.BK(d),$async$hjH)
case 3:u=t.rK(f,new C.hjI(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$hjH,v)},
bHl(d,e){var w=0,v=A.j(x.H),u,t
var $async$bHl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.BK(d),$async$bHl)
case 3:t=g
if(J.rK(t,new C.fQh(e))){w=1
break}if(C.izv(t)>=2)throw A.Y(A.be("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bHl,v)},
anV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.cL(h,x.f)
w=A.ct(w,new C.bWo(),w.$ti.k("M.E"),x.P)
v=A.a3(w).k("X<M.E>")
g=A.B(new A.X(w,new C.bWp(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bWq(),x.N)
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
n=C.iAa(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aN(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.bL)
l=x.f
k=x.N
j=x.z
while(f.A()){i=f.gP(f)
if(l.b(i))m.push(A.a1(i,k,j))}return new C.li(w,v,s,!r,t,g,q,p,o,n,m)},
hRW(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.av(v,0,8)},
E6(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$E6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Tw(d),$async$E6)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.aB(),$async$E6)
case 4:t=f
w=5
return A.b(t.a96(0),$async$E6)
case 5:w=6
return A.b(C.fGa(t,l),$async$E6)
case 6:s=f
if(J.cM(s)){u=s
w=1
break}r=B.a.ga_(B.a.i(l.toLowerCase()))
q=t.a
p=J.a0(q)
o=A.aV(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hMy(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.pz(l,n),$async$E6)
case 11:u=n
w=1
break
case 10:case 8:m=A.aV(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.ga_(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hMy(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.pz(l,n),$async$E6)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$E6,v)},
fGa(d,e){return C.irQ(d,e)},
irQ(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fGa=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a0(a3)
a5=A.aV(a4.h(a3,"ngmy_worksheets_index_v3_"+C.By(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.T.aN(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aN(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.A()){w=8
break}o=f.gP(f)
n=B.a.i(J.k(o))
if(J.aa(n)===0){w=7
break}m=A.aV(a4.h(a3,"ngmy_worksheet_item_v3_"+C.By(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.T.aN(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hqp(A.a1(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aV(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.By(a9)+"_"+n))
i=C.iuF(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.Y(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b7f(h),$async$fGa)
case 17:g=b1
if(g!=null){i=i.UW(g)
p=!0}case 16:J.bW(q,i)
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
case 8:J.TG(q,new C.fGb())
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
return A.i($async$fGa,v)},
bHP(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bHP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Tw(d),$async$bHP)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.E6(r),$async$bHP)
case 4:t=p.aN(g)
case 5:if(!t.A()){w=6
break}s=t.gP(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bHP,v)},
hMy(d){var w,v,u,t
try{w=B.T.aN(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.cL(w,x.f)
v=A.ct(v,new C.fBB(),v.$ti.k("M.E"),x.fA)
u=A.a3(v).k("X<M.E>")
v=A.B(new A.X(v,new C.fBC(),u),u.k("M.E"))
B.d.b_(v,new C.fBD())
return v}catch(t){v=A.a([],x.D)
return v}},
pz(d,e){return C.iKr(d,e)},
iKr(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$pz=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Tw(b2),$async$pz)
case 3:a8=b5
if(J.aa(a8)===0){u=!1
w=1
break}w=4
return A.b(A.aB(),$async$pz)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.By(a8)
p=A.aV(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.T.aN(0,p,null)),new C.hb1(),a2).fI(0)
a2=J.b8(b3,new C.hb2(),a2).c2(0,new C.hb3())
n=A.d8(a2,a2.$ti.k("M.E"))
a2=o,a2=A.e9(a2,a2.r,A.a3(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.A()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eI(n,m)?17:18
break
case 17:a5=C.By(a8)
l=A.aV(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.aaY(l),$async$pz)
case 19:t=21
a5=C.By(a8)
k=A.aV(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.T.aN(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.aaY(a5==null?null:J.k(a5)),$async$pz)
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
return A.b(C.aiJ(r,"ngmy_worksheet_item_v3_"+C.By(a8)+"_"+m),$async$pz)
case 29:w=30
return A.b(C.aiJ(r,"ngmy_worksheet_thumb_v3_"+C.By(a8)+"_"+m),$async$pz)
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
break}i=a3.gP(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bGe(h),$async$pz)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.aiK(r,"ngmy_worksheet_thumb_v3_"+C.By(a8)+"_"+a4,f),$async$pz)
case 40:g=i.UW(f)
w=38
break
case 39:$.an.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.aiJ(r,"ngmy_worksheet_thumb_v3_"+C.By(a8)+"_"+a4),$async$pz)
case 41:g=i.UW(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.aiJ(r,"ngmy_worksheet_thumb_v3_"+C.By(a8)+"_"+a4),$async$pz)
case 42:case 34:a4=i.a
w=43
return A.b(C.aiK(r,"ngmy_worksheet_item_v3_"+C.By(a8)+"_"+a4,B.T.au(g.ak(),null)),$async$pz)
case 43:e=b5
if(!e){$.an.$1("[worksheets] failed to save project "+i.a+" for "+A.v(a8))
w=31
break}J.bW(q,i.a)
w=31
break
case 32:w=44
return A.b(C.aiK(r,"ngmy_worksheets_index_v3_"+C.By(a8),B.T.au(q,null)),$async$pz)
case 44:d=b5
if(!d){$.an.$1("[worksheets] failed to save project index for "+A.v(a8))
u=!1
w=1
break}a3=a2.eY(b3,new C.hb4(q))
a4=a3.$ti.k("cP<1,a9<o,@>>")
a7=A.B(new A.cP(a3,new C.hb5(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.aiK(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.ga_(B.a.i(a8.toLowerCase()))),B.T.au(a0,null)),$async$pz)
case 45:w=46
return A.b(J.i1e(r),$async$pz)
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
MP(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$MP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.E6(d),$async$MP)
case 3:t=g
s=J.cK(t)
r=s.bm(t,new C.hjG(e))
if(r===-1)s.ck(t,0,e)
else s.n(t,r,e)
u=C.pz(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$MP,v)},
bHA(d,e){var w=0,v=A.j(x.H),u
var $async$bHA=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.E6(d),$async$bHA)
case 2:u=g
J.mH(u,new C.fTg(e))
w=3
return A.b(C.pz(d,u),$async$bHA)
case 3:return A.h(null,v)}})
return A.i($async$bHA,v)},
HS(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$HS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$HS)
case 3:l=f
k=A.a([],x._)
j=B.a.ga_(B.a.i(d.toLowerCase()))
i=A.aV(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.T.aN(0,i,null)
if(x.j.b(t)){j=J.cL(t,x.f)
j=A.ct(j,new C.fWQ(),j.$ti.k("M.E"),x.k)
s=A.a3(j).k("X<M.E>")
r=A.B(new A.X(j,new C.fWR(),s),s.k("M.E"))
B.d.b_(r,new C.fWS())
k=r}}catch(h){}w=4
return A.b(C.fCt(d),$async$HS)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ise(k,p,d)
j=A.T(o)
s=j.k("O<1,a9<o,@>>")
s=A.B(new A.O(o,new C.fWT(),s),s.k("aj.E"))
n=B.T.au(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.SD(d,o),$async$HS)
case 7:case 6:j=j.k("X<1>")
m=A.B(new A.X(o,new C.fWU(d),j),j.k("M.E"))
if(m.length!==0)C.aT9(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$HS,v)},
haN(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$haN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.SD(d,e),$async$haN)
case 3:t=J.dO(e,new C.haO(d))
s=A.B(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aT9(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$haN,v)},
a5f(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a5f=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.aB(),$async$a5f)
case 2:n=g
m=B.a.ga_(B.a.i(d.toLowerCase()))
l=A.aV(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.T.aN(0,l,null)
if(x.j.b(u)){m=J.cL(u,x.f)
m=A.ct(m,new C.hjB(),m.$ti.k("M.E"),x.k)
t=A.a3(m).k("X<M.E>")
s=A.B(new A.X(m,new C.hjC(),t),t.k("M.E"))
o=s}}catch(k){}q=J.nM(o,new C.hjD(e))
if(B.a.i(e.x).length===0&&C.uS(e,d)){m=B.a.i(d.toLowerCase())
p=e.aIR(e.y===D.le?D.le:D.vu,m)}else p=e
if(q===-1)J.lt(o,0,p)
else J.aL(o,q,p)
w=3
return A.b(C.SD(d,o),$async$a5f)
case 3:w=C.uS(p,d)?4:5
break
case 4:w=6
return A.b(C.aT8(C.HQ(p,d),p),$async$a5f)
case 6:if(!g)$.an.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a5f,v)},
aTm(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aTm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.HS(d),$async$aTm)
case 2:u=g
t=J.cK(u)
s=A.nU(t.eY(u,new C.fSY(e)))
t.bs(u,new C.fSZ(e))
w=3
return A.b(C.SD(d,u),$async$aTm)
case 3:w=s!=null&&C.aTo(s,d)?4:5
break
case 4:w=6
return A.b(C.fBF(e),$async$aTm)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aTm,v)},
akB(d){var w=d.f,v=A.T(w).k("X<1>")
w=A.B(new A.X(w,new C.hjM(),v),v.k("M.E"))
return w},
hu6(d,e){var w,v=d.f,u=A.nU(new A.X(v,new C.fSs(e),A.T(v).k("X<1>")))
v=C.akB(d)
w=A.T(v).k("X<1>")
v=A.B(new A.X(v,new C.fSt(e,u),w),w.k("M.E"))
B.d.b_(v,new C.fSu())
return v},
iAe(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hWR(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bm(C.hu6(d,u),new C.hj9(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iBL(d,e){var w
if(e==null||e.length===0)return 1
w=C.hu6(d,e)
if(w.length===0)return 1
return new A.O(w,new C.fXH(),A.T(w).k("O<1,F>")).eJ(0,B.wP)+1},
iKk(d){var w,v=C.akB(d)
if(v.length===0)return null
w=new A.X(v,new C.haH(),A.T(v).k("X<1>"))
if(!w.gar(0))return w.gH(0)
return B.d.gH(v)},
iA9(d){return A.J(["id",d.a,"name",d.b,"gender",C.hRH(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
iBG(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.S(a0,x.P)
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
d=q.aIM(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.I)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cVy(a1,w,a3.d,a2.y,s,a0,v)},
BK(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$BK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.aB(),$async$BK)
case 3:q=f
p=B.a.ga_(B.a.i(d.toLowerCase()))
o=A.aV(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.T.aN(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.cL(t,x.f)
p=A.ct(p,new C.fWN(),p.$ti.k("M.E"),x.k)
s=A.a3(p).k("X<M.E>")
p=A.B(new A.X(p,new C.fWO(),s),s.k("M.E"))
B.d.b_(p,new C.fWP())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$BK,v)},
akj(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$akj=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.vu:D.le
a7=C.HQ(b2,b3)
w=2
return A.b(C.BK(b1),$async$akj)
case 2:a8=b5
a9=J.cK(a8)
b0=a9.bm(a8,new C.haC(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bHl(b1,b2),$async$akj)
case 5:case 4:if(b0===-1){u=b2.aIR(a6,a7)
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
s.n(0,m,l.aIM(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("ba<2>")
s=A.B(new A.ba(s,k),k.k("M.E"))
k=a5?D.vu:D.le
u=t.cVA(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.SD(b1,a8),$async$akj)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aT8(B.a.i(b3.toLowerCase()),u),$async$akj)
case 9:case 8:return A.h(null,v)}})
return A.i($async$akj,v)},
hN2(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.W(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("O<1,a9<o,@>>"),k=A.B(new A.O(m,C.hVV(),l),l.k("aj.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.J(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.J(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hN3(d,e){var w=new A.W(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("O<1,a9<o,@>>")
u=A.B(new A.O(u,C.hVV(),t),t.k("aj.E"))
return A.J(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
ipB(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a0(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.anV(A.a1(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.O(j,A.hwW(),A.T(j).k("O<1,o>")).c2(0,new C.fCf())
t=A.B(j,j.$ti.k("M.E"))
if(u===v)s=D.vu
else s=B.d.q(t,u)?D.Qc:D.le
return w.aIR(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.anV(A.a1(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.cL(q,h)
h=A.ct(h,new C.fCg(),h.$ti.k("M.E"),x.P)
p=A.a3(h).k("X<M.E>")
o=A.B(new A.X(h,new C.fCh(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fCi(),x.N).c2(0,new C.fCj())
t=A.B(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.vu
else s=B.d.q(t,u)?D.Qc:D.le
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
fCt(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fCt=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.aa(a0)===0){u=null
w=1
break}t=4
r=new C.fCx()
h=x.N
g=x.z
w=7
return A.b(A.hd(A.a([A.mb("family_trees","*",null,A.J(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.mb("family_trees","*",A.J(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.mb("family_trees","*",null,A.J(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fCt)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.S(h,g)
h=A.B(p,g)
l=h
J.fM(l,o)
J.fM(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.I)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.aa(j)!==0)J.aL(m,j,k)}l=m
h=A.a3(l).k("ba<2>")
h=A.ct(new A.ba(l,h),new C.fCu(a0),h.k("M.E"),x.k)
l=A.a3(h).k("X<M.E>")
l=A.B(new A.X(h,new C.fCv(),l),l.k("M.E"))
B.d.b_(l,new C.fCw())
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
return A.i($async$fCt,v)},
ise(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a0(e)
if(j.gar(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dS(e,new C.fGX(),v).c2(0,new C.fGY())
t=A.d8(u,u.$ti.k("M.E"))
s=A.S(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.I)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.HQ(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.le){m=q.e
m=!new A.O(m,A.hwW(),A.T(m).k("O<1,o>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.A();){v=j.gP(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.iBG(l,v)
o=C.HQ(k,w)
p=v.d
s.n(0,u,o===w?k.biG(p,D.vu):k.biG(p,v.y))}j=s.$ti.k("ba<2>")
j=A.B(new A.ba(s,j),j.k("M.E"))
B.d.b_(j,new C.fGZ())
return j},
SD(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$SD=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.aB(),$async$SD)
case 2:u=g
t=B.a.ga_(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fJZ(),x.a)
s=A.B(s,s.$ti.k("aj.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.T.au(s,null)),$async$SD)
case 3:return A.h(null,v)}})
return A.i($async$SD,v)},
aT8(d,e){return C.ixR(d,e)},
ixR(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aT8=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mE("family_trees",A.a([C.hN2(e,d)],p),null,B.cZ),$async$aT8)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mE("family_trees",A.a([C.hN3(e,d)],p),null,B.cZ),$async$aT8)
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
return A.i($async$aT8,v)},
aT9(d,e){return C.ixS(d,e)},
ixS(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aT9=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("O<1,a9<o,@>>")
m=n.k("aj.E")
l=A.B(new A.O(e,new C.fPs(d),n),m)
r=l
w=7
return A.b(A.mE("family_trees",r,null,B.cZ),$async$aT9)
case 7:q=g
if(q){u=!0
w=1
break}k=A.B(new A.O(e,new C.fPt(d),n),m)
p=k
w=8
return A.b(A.mE("family_trees",p,null,B.cZ),$async$aT9)
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
return A.i($async$aT9,v)},
fBF(d){return C.ioK(d)},
ioK(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fBF=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.T3("family_trees",A.J(["id",d],x.N,x.z),null,B.cZ),$async$fBF)
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
return A.i($async$fBF,v)},
rP:function rP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
m4:function m4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cKv:function cKv(){},
cKu:function cKu(){},
cKs:function cKs(){},
cKt:function cKt(){},
IY:function IY(d,e){this.a=d
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
anU:function anU(d,e){this.a=d
this.b=e},
fSN:function fSN(){},
hjI:function hjI(d){this.a=d},
fQh:function fQh(d){this.a=d},
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
bWs:function bWs(){},
bWr:function bWr(){},
bWo:function bWo(){},
bWp:function bWp(){},
bWq:function bWq(){},
fGb:function fGb(){},
fBB:function fBB(){},
fBC:function fBC(){},
fBD:function fBD(){},
hb1:function hb1(){},
hb2:function hb2(){},
hb3:function hb3(){},
hb4:function hb4(d){this.a=d},
hb5:function hb5(){},
hjG:function hjG(d){this.a=d},
fTg:function fTg(d){this.a=d},
fWQ:function fWQ(){},
fWR:function fWR(){},
fWS:function fWS(){},
fWT:function fWT(){},
fWU:function fWU(d){this.a=d},
haO:function haO(d){this.a=d},
hjB:function hjB(){},
hjC:function hjC(){},
hjD:function hjD(d){this.a=d},
fSY:function fSY(d){this.a=d},
fSZ:function fSZ(d){this.a=d},
hjM:function hjM(){},
fSs:function fSs(d){this.a=d},
fSt:function fSt(d,e){this.a=d
this.b=e},
fSu:function fSu(){},
hj9:function hj9(d){this.a=d},
fXH:function fXH(){},
haH:function haH(){},
fWN:function fWN(){},
fWO:function fWO(){},
fWP:function fWP(){},
haC:function haC(d){this.a=d},
fCf:function fCf(){},
fCg:function fCg(){},
fCh:function fCh(){},
fCi:function fCi(){},
fCj:function fCj(){},
fCx:function fCx(){},
fCy:function fCy(d){this.a=d},
fCu:function fCu(d){this.a=d},
fCv:function fCv(){},
fCw:function fCw(){},
fGX:function fGX(){},
fGY:function fGY(){},
fGZ:function fGZ(){},
fJZ:function fJZ(){},
fPs:function fPs(d){this.a=d},
fPt:function fPt(d){this.a=d},
cKw:function cKw(d,e){this.a=d
this.b=e},
cKx:function cKx(d,e){this.a=d
this.b=e},
aL0:function aL0(d,e,f){this.a=d
this.b=e
this.c=f},
bdB:function bdB(){this.b=this.a=0},
bdA:function bdA(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bBE:function bBE(){},
xJ(d,e){var w,v
if(d==null)return""
w=d.bV()
v=""+w.gci()+"/"+w.gcC()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.aY(B.n.v(w.gnL()),2,"0")+":"+B.a.aY(B.n.v(w.gHP()),2,"0")},
iz1(a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=a5.c
J.bs(a4.save())
a4.translate(a6.a,a6.b-b0)
w=A.c1(new A.m(0,b0+a7*0.005),a7*0.06,a7*0.45)
v=B.v.j(0.22)
$.U()
u=A.L()
u.r=v.gp(0)
a5.c3(w,u)
for(w=a7*0.05,v=-a7,u=v*0.24,t=a7*0.1,s=u+a7*0.2,r=a7*0.04,q=a7*0.065,p=v*0.05,o=a7*0.14,n=p+w,m=a7*0.025,l=0;l<2;++l){k=F.hs[l]*a7*0.075
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
q=A.L()
q.r=b2.gp(0)
a5.aq(h,q)
q=v*0.27
t=a7*0.02
t=A.bx(new A.a5(w,q,s,q+a7*0.045),new A.aQ(t,t))
q=B.c.j(0.35)
s=A.L()
s.r=q.gp(0)
a5.aq(t,s)
s=v*0.47
g=new A.m(v*0.15,s)
f=new A.m(a7*0.15,s)
s=v*0.06
t=a7*0.07
a5.ah(g,g.a6(0,new A.m(s,a7*0.17)),O.aiI(F.tA,t))
s=g.a6(0,new A.m(s,a7*0.18))
q=A.L()
q.r=F.tA.gp(0)
a5.O(s,r,q)
e=-2.5+b3*0.5
d=f.a6(0,new A.m(Math.sin(e)*a7*0.2,Math.cos(e)*a7*0.2))
a5.ah(f,d,O.aiI(F.tA,t))
w=A.L()
w.r=F.tA.gp(0)
a5.O(d,r,w)
v*=0.7
a0=new A.m(0,v)
a1=a7*0.22
if(b1===1){w=a0.a6(0,new A.m(0,-a1*0.12))
u=A.L()
u.r=F.mo.gp(0)
a5.O(w,a1*1.18,u)}w=A.L()
w.r=F.tA.gp(0)
a5.O(a0,a1,w)
if(b1===0){w=A.c0(a0,a1)
u=A.L()
u.r=F.mo.gp(0)
a5.cR(w,3.141592653589793,3.141592653589793,!0,u)}else if(b1===2){w=A.c0(a0,a1)
u=A.L()
u.r=F.mo.gp(0)
a5.cR(w,3.141592653589793,3.141592653589793,!0,u)
for(w=v+a1*0.3,u=a1*0.2,l=0;l<2;++l){a2=F.hs[l]
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=F.mo.gp(0)
a5.O(new A.m(0+a2*a1*1.05,w),u,t)}}a3=B.h.F(a8*0.8,3)>2.85
for(w=v+a1*0.42,u=a1*0.12,t=a1*0.25,s=a8*0.7,r=a1*0.13,v+=a1*0.05,q=-a1*0.15,p=v+0,o=a1*0.15,l=0;l<2;++l){n=F.hs[l]*a1
m=0+n*0.4
if(a3){k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.ae
k.c=1.6
k.r=B.br.gp(0)
k.d=B.bH
a5.ah(new A.m(m+q,p),new A.m(m+o,p),k)}else{k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=B.c.gp(0)
a5.O(new A.m(m,v),t,k)
k=Math.sin(s)
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=B.v.gp(0)
a5.O(new A.m(m+k*a1*0.06,p),r,j)}m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.hZ.j(0.5).gp(0)
a5.O(new A.m(0+n*0.62,w),u,m)}a5.cR(A.c1(a0.a6(0,new A.m(0,a1*0.5)).aI(0,new A.m(0,a1*0.1)),a1*0.4,a1*0.65),0.2,2.741592653589793,!1,O.aiI(B.br,1.8))
a4.restore()},
if0(){var w,v=$.oh(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.hp(u)},
avX(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$avX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avX)
case 3:if(!e){u=A.S(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f9("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$avX)
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
return A.i($async$avX,v)},
avY(d){return C.if1(d)},
if1(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$avY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$avY)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.i2("ngmy_worksheet_project_qr_stashes_v1",A.J(["stashes",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cZ,null),$async$avY)
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
return A.i($async$avY,v)},
aw_(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aw_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.ce(),$async$aw_)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.if0()
w=4
return A.b(C.avX(),$async$aw_)
case 4:r=h
q=B.a.i(e)
p=B.e5.aL(t)
J.aL(r,s,A.J(["ownerEmail",q,"projectId",f,"payload",B.cS.gcp().aL(p),"usesRemaining",25,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.avY(r),$async$aw_)
case 5:u=new A.a2z("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aw_,v)},
avZ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$avZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.ce(),$async$avZ)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.avX(),$async$avZ)
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
return A.b(C.avY(q),$async$avZ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$avZ,v)},
hHg(){var w=new A.W(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cW.aw(999999)},
if2(d){var w,v,u,t,s,r,q
try{w=A.zz(d)
if(w==null)return d
v=w
if(J.MV(v)>960||J.MU(v)>960){s=v
r=J.MV(v)>=J.MU(v)?960:null
v=A.Mh(s,J.MU(v)>J.MV(v)?960:null,B.J4,r)}s=v
u=A.Jj(82).A9(s,B.rG)
if(J.aa(u)===0)return d
s=new Uint8Array(A.cd(u))
return s}catch(q){t=A.ad(q)
$.an.$1("[worksheet-thumb] compress failed: "+A.v(t))
return d}},
csQ(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$csQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.if2(e)
$.csM.n(0,s,t)
u=C.bJv(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$csQ,v)},
b7f(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b7f=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.dc(l,"data:image")){u=null
w=1
break}t=4
r=J.eI(l,",")?B.d.gal(J.mf(l,",")):l
q=B.cM.aL(r)
if(J.aa(q)===0){u=null
w=1
break}p=C.hHg()
w=7
return A.b(C.csQ(p,q),$async$b7f)
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
return A.i($async$b7f,v)},
csN(d){var w=0,v=A.j(x.T),u,t,s
var $async$csN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.Y(s,"data:image")){u=s
w=1
break}w=3
return A.b(A.csP(s),$async$csN)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cS.gcp().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$csN,v)},
aaY(d){var w=0,v=A.j(x.H),u,t
var $async$aaY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=A.hVz(d)
if(t==null){w=1
break}$.csM.X(0,t)
w=3
return A.b(C.bJu(t),$async$aaY)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aaY,v)},
bJv(d,e){return C.iIz(d,e)},
iIz(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bJv=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aRX
w=7
return A.b(n==null?$.aRX=A.hsT():n,$async$bJv)
case 7:r=g
q=new Uint8Array(A.cd(e))
p=J.mI(r,"thumbs","readwrite")
B.iW.mw(J.mG(p,"thumbs"),q,l)
w=8
return A.b(J.oY(p),$async$bJv)
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
return A.i($async$bJv,v)},
bJu(d){return C.iIx(d)},
iIx(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bJu=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aRX
w=7
return A.b(o==null?$.aRX=A.hsT():o,$async$bJu)
case 7:r=f
q=J.mI(r,"thumbs","readwrite")
B.iW.Hn(J.mG(q,"thumbs"),m)
w=8
return A.b(J.oY(q),$async$bJu)
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
return A.i($async$bJu,v)}},D
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
C.arv.prototype={}
C.b2q.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bn1(),f=h.x!=null&&h.At(i).length===0
if(h.x!=null)w=f?B.b8:B.bC
else w=h.gVW()?B.bC:B.ef
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.n(22)
t=A.K(D.bu8,B.r,1)
s=x.p
r=A.q(i,A.w(A.a([A.q(i,D.fx7,B.f,i,i,new A.p(B.b8.j(0.12),i,i,A.n(999),i,i,B.m),i,i,i,i,B.hp,i,i,i),B.S,D.h2E,B.at,A.c(C.xJ(new A.W(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fZb,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.bbE,i,i,i,i,B.PN,i,i,i)
q=A.n(16)
p=A.K(B.bo,B.r,1)
o=A.K(B.b8.j(0.28),B.r,1)
n=A.hvg(h.d)
o=A.q(B.z,C.b2p(A.h_f(h.e,n),30),B.f,i,i,new A.p(B.mr,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.c(v,i,i,i,i,i,i,D.fU4,B.K,i,i)
m=A.n(14)
l=A.K(B.bo,B.r,1)
q=A.q(i,A.w(A.a([o,B.N,n,B.bs,D.h2X,B.af,A.q(i,A.w(A.a([D.hjt,B.bs,A.c(A.BN(h.c),i,i,i,i,i,i,D.fOw,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.m),i,i,i,i,B.fc,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aS,i,p,q,i,i,B.m),i,i,i,i,B.a2r,i,i,i)
p=A.n(16)
m=A.K(B.bo,B.r,1)
l=j.aW2("Original due",C.xJ(h.r,!1))
n=j.aW2("Current due",C.xJ(h.f,!1))
o=w.j(0.1)
k=A.n(12)
p=A.a([q,B.S,A.q(i,A.w(A.a([l,B.N,n,B.S,A.q(i,A.c(h.gaQ_(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.m),i,i,i,i,B.xe,i,i,1/0),B.S,j.cpz(),B.N,j.cbB(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.m),i,i,i,i,B.bg,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.n(14)
n=A.K(B.bo,B.r,1)
B.d.u(p,A.a([B.S,A.q(i,A.w(A.a([D.h3Y,B.at,A.c(q,i,i,i,i,i,i,D.fTd,i,i,i)],s),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aS,i,n,o,i,i,B.m),i,i,i,i,B.bg,i,i,1/0)],s))}if(h.gaKu()){q=A.n(14)
o=A.K(B.cH,B.r,1.6)
B.d.u(p,A.a([B.S,A.q(i,A.w(A.a([D.hkO,B.N,A.bv(A.n(12),A.en(new A.a4(1/0,88,A.b4(i,i,i,new A.Ya(h.ax,B.a_,D.fBV,!0,3.5,i),B.aA),i),B.c,!0),B.ap)],s),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.m),i,i,i,i,B.Di,i,i,i)],s))}p.push(B.az)
p.push(D.hcw)
return A.q(i,A.w(A.a([r,new A.C(B.a2t,A.w(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.P,0,B.p),B.ap,i,i,new A.p(B.c,i,t,u,i,i,B.m),i,i,i,i,i,i,i,1/0)},
aW2(d,e){var w=null
return A.A(A.a([A.E(A.c(d,w,w,w,w,w,w,D.adW,w,w,w),1),A.c(e,w,w,w,w,w,w,D.fPC,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
cpz(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.acs(B.ef,u,"Not paid yet")
w=t.At(null).length
v=w===0?B.b8:B.bC
return this.acs(v,u,C.xJ(t.x,!0))},
cbB(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.acs(B.b8,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.acs(B.b8,t,"None yet")
w=A.c("Missed days ("+w+")",u,u,u,u,u,u,D.adW,u,u,u)
v=A.T(d).k("O<1,hv>")
v=A.B(new A.O(d,new C.cbN(),v),v.k("aj.E"))
return A.w(A.a([w,B.aj,A.bX(B.bG,v,B.bq,u,6,6)],x.p),B.B,u,B.e,B.i,0,B.p)},
acs(d,e,f){var w=null
return A.A(A.a([A.E(A.c(e,w,w,w,w,w,w,D.adW,w,w,w),1),new A.d_(1,B.c9,A.c(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dR,w,w),w)],x.p),B.B,w,B.e,B.i,0,w,w)}}
C.bfT.prototype={
a5(d,e){new A.Ya(this.b,B.a_,e,!0,3.5,null).a5(d,e)},
aD(d){return d.b!==this.b}}
C.arI.prototype={
R(){return new C.aGH(A.a([],x.bp))},
gea(){return this.c}}
C.aGH.prototype={
Z(){this.a4()
this.Kr()},
Kr(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Kr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a4u(t.a.c),$async$Kr)
case 3:s=e
if(t.c==null){w=1
break}t.l(new C.dWQ(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Kr,v)},
aY4(d,e){var w,v=null,u=this.a.d.a,t=u?B.a_:B.aS,s=A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.n(10)
u=(this.a.d.a?B.bv:B.bl).j(0.22)
w=A.n(10)
return A.bB(v,new A.b5(4,r,new A.ax(u,1,B.r,-1)),v,B.bg,v,v,v,v,!0,new A.b5(4,w,new A.ax((this.a.d.a?B.bv:B.bl).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.n(10),D.b9k),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aY3(d){return this.aY4(d,null)},
Rr(d){return this.ctk(d)},
ctk(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rr=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.J3:B.f5
w=7
return A.b(new A.ie().DH(72,900,900,n),$async$Rr)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fD(),$async$Rr)
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
return A.i($async$Rr,v)},
b6w(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.a_:B.aS,o=A.n(10),n=A.K((q?B.bv:B.bl).j(0.18),B.r,1)
if(d)q=B.cY
else q=s.a.d.a?B.bv:B.bl
q=A.V(e,q,r,r,r,18)
w=A.c(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,12.5,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cY
else u=s.a.d.a?B.bv:B.bl
t=x.p
u=A.E(A.w(A.a([w,A.c(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.B,r,B.e,B.i,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cY,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cp)
q=A.a([q,B.aa,u,A.bK(!1,A.c(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aI(r,r,r,r,A.V(B.cD,s.a.d.a?B.bv:B.bl,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cp))
return A.q(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.m),r,r,r,B.jE,D.bHn,r,r,r)},
ED(d){return this.bHq(d)},
bHp(){return this.ED(null)},
bHq(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$ED=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.ay()
r=new A.au(new A.bd(a4,B.bb,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.h.bg(a4)
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
i=a3?null:A.hvg(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.y_?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i3(B.v.j(0.55),!0,"Dismiss",a4,new C.dWz(),new C.dWA(a2,t,a5,r,new C.dWB(a2,t),o,n,j),B.eN,!0,x.y),$async$ED)
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
break}if(f.length===0||e<=0){t.c.M(x.q).f.T(D.fIy)
w=1
break}a0=a2.d
if(a0==null){t.c.M(x.q).f.T(D.fHc)
w=1
break}a1=A.h_f(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.y_?"male":"female"
w=7
return A.b(A.akA(a3,A.hDP(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$ED)
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
a3=A.c3(a3.gcl(),a3.gci(),a3.gcC(),0,0,0,0,0)
a4=a5.f
if(!a3.B(0,A.c3(a4.gcl(),a4.gci(),a4.gcC(),0,0,0,0,0)))a5.cXX(a2.a)
w=8
return A.b(A.akA(t.a.c,a5),$async$ED)
case 8:case 5:w=9
return A.b(t.Kr(),$async$ED)
case 9:case 1:return A.h(u,v)}})
return A.i($async$ED,v)},
aYK(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cY.j(0.14)
else w=this.a.d.a?B.a_:B.aS
v=A.n(12)
u=A.n(12)
t=A.n(12)
if(g)s=B.cY
else s=(this.a.d.a?B.bv:B.bl).j(0.2)
s=A.K(s,B.r,g?1.5:1)
r=C.b2p(d,18)
if(g)q=B.cY
else q=this.a.d.a?B.aS:B.ax
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.q(p,A.A(A.a([r,B.b6,A.c(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bc,B.i,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.m),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.ai)},
Ue(d){return this.cLI(d)},
cLI(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Ue=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i3(B.v.j(0.55),!0,"Dismiss",s,new C.dWT(),new C.dWU(t,d),B.ho,!0,x.y),$async$Ue)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.W(s,0,!1)
case 4:w=7
return A.b(A.akA(t.a.c,d),$async$Ue)
case 7:w=8
return A.b(t.Kr(),$async$Ue)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Ue,v)},
Rq(d,e){return this.bSz(0,e)},
bSz(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Rq=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lH(s,"Cancel","Delete",e.b+" \xb7 "+A.BN(e.c)+" will be removed from this device.","Delete this debt?"),$async$Rq)
case 3:if(!g){w=1
break}w=4
return A.b(C.fT4(t.a.c,e.a),$async$Rq)
case 4:w=5
return A.b(t.Kr(),$async$Rq)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Rq,v)},
aiv(d){return this.cmQ(d)},
cmQ(d){var w=0,v=A.j(x.H),u=this,t
var $async$aiv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bU(B.L,null,new C.dWN(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$aiv)
case 2:return A.h(null,v)}})
return A.i($async$aiv,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.eLt
w=J.dO(m.d,new C.dWV())
v=A.B(w,w.$ti.k("M.E"))
w=J.dO(m.d,new C.dWW())
u=A.B(w,w.$ti.k("M.E"))
t=B.d.cH(v,0,new C.dWX())
w=A.n(18)
s=m.a.d.a
r=s?D.cIJ:D.aG4
q=A.K(s?B.cY.j(0.35):B.cY.j(0.18),B.r,1)
s=A.q(l,D.c8U,B.f,l,l,new A.p(B.cY.j(m.a.d.a?0.28:0.14),l,l,A.n(12),l,l,B.m),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.ar,A.E(A.c("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aG(!1,B.a3,!0,A.n(12),A.aM(!1,A.n(12),!0,D.eKN,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dWY(m),l,l,l,l,l,l,l),B.f,B.cY,0,l,l,l,l,l,B.ai)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cHH("Open",""+v.length),1)
n=v.length===0?"$0.00":A.BN(t)
r=A.a([A.q(l,A.w(A.a([s,B.af,A.A(A.a([o,B.aa,A.E(m.bcL(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.B,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a6(B.aw,B.aD,B.w,r,l,l),B.m),l,l,l,l,B.aoB,l,l,l),B.az],p)
if(J.ch(m.d)){w=m.a.d.a
s=w?B.eo:B.c
q=A.n(18)
o=A.K((w?B.bv:B.bl).j(0.12),B.r,1)
n=A.q(l,D.c3n,B.f,l,l,new A.p(B.cY.j(0.12),l,l,A.n(16),l,l,B.m),l,52,l,l,l,l,l,52)
w=A.c("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aS:B.ax,l,l,l,l,l,l,l,l,15,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.w(A.a([n,B.af,w,B.at,A.c("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.m),l,l,l,l,D.bK3,l,l,1/0))}else{w=m.gcsy()
s=A.B(new A.O(v,w,A.T(v).k("O<1,x>")),x.l)
if(u.length!==0){q=A.a([B.aj,new A.C(D.bLI,A.c("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.bl,l,l,l,l,l,l,l,l,12,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.u(q,new A.O(u,w,A.T(u).k("O<1,x>")))
B.d.u(s,q)}B.d.u(r,s)}return A.w(r,B.al,l,B.e,B.i,0,B.p)},
bcL(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.v.j(0.22):B.c.j(0.85),s=A.n(14),r=A.K((v.a.d.a?B.bv:B.bl).j(0.12),B.r,1),q=A.c(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.bl,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cY
else w=v.a.d.a?B.aS:B.ax
return A.q(u,A.w(A.a([q,B.bs,A.c(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.B,u,B.e,B.i,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.m),u,u,u,u,B.es,u,u,u)},
cHH(d,e){return this.bcL(!1,d,e)},
csz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.At(j).length,h=d.bmh()
if(d.x!=null){w=d.At(j).length
v=w===0?B.cY:B.bC}else if(d.gVW())v=B.bC
else{if(h)w=B.cY
else w=k.a.d.a?B.bv:B.bl
v=w}if(d.x!=null){w=d.At(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xJ(u,!1)}else{u.toString
t="Paid "+C.xJ(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xJ(w,!1)+" \xb7 "+i+" missed":"Due "+C.xJ(w,!1)}w=k.a.d.a?B.eo:B.c
u=A.n(18)
if(d.gVW()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bv:B.bl).j(0.12)
s=A.K(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.v.j(0.04),B.cO,12)],x.V)
q=A.n(18)
p=k.a.d.a?B.bt:B.mr
o=A.K(d.gVW()&&d.x==null?B.bC.j(0.45):B.cY.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hvg(d.d)
o=A.q(B.z,A.d3(C.b2p(A.h_f(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aS:B.ax
m=x.p
n=A.a([new A.d_(1,B.c9,A.c(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaKu())B.d.u(n,A.a([B.dU,A.V(B.QE,B.cY.j(0.8),j,j,j,14)],m))
p=A.E(A.w(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cR,A.c(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.B,j,B.e,B.i,0,B.p),1)
n=A.BN(d.c)
l=k.a.d.a?B.aS:B.ax
n=A.c(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aG(!1,B.a3,!0,j,A.aM(!1,q,!0,new A.C(Aj.aon,A.A(A.a([o,B.bd,p,B.aa,A.w(A.a([n,B.bs,A.V(B.eP,(k.a.d.a?B.bv:B.bl).j(0.5),j,j,j,18)],m),B.dr,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dWP(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.ai),B.f,j,j,new A.p(w,j,s,u,r,j,B.m),j,j,j,B.d3,j,j,j,j)}}
C.vg.prototype={}
C.anI.prototype={
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
if(j&&!v)l.push(new A.C(B.i3,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.c(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.aCa,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.C(B.Dv,A.c(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([new A.d7(B.dn,m,B.f,A.A(l,B.l,a0,B.e,B.P,0,a0,a0),a0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.C(B.ao7,A.c(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cN:B.bm,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.C(B.fD,A.w(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.fCJ)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.u(a2,A.a([new A.C(B.vm,A.q(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a6(B.a5,B.a9,B.w,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.m),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.C(B.lG,A.w(a2,B.l,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.n(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,A.K(r.j(0.45),B.r,1),a2,a0,a0,B.m),a0,a0,a0,B.hO,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a6(B.aw,B.aD,B.w,a1.d,a0,a0),B.m),a0,a0,a0,D.bHS,a0,a0,a0,a0)}}
C.aZ5.prototype={
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
C.UW.prototype={
R(){return new C.bjz()}}
C.bjz.prototype={
gc67(){var w=this.d
return w===$?this.d=this.a.c:w},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aE(d,n,x.w).w,l=x.p,k=A.a([D.eLo,D.eLu],l)
for(w=0;w<8;++w){v=D.a6P[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.IS:B.An
q=t===s
r=A.V(r,q?B.eM:B.bX,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.b6,A.c(v.b,n,n,n,n,n,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.aa,new A.bu(1,B.b9,A.c(v.c,n,1,B.a2,n,n,n,B.wr,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aQ(24,24)
p=new A.ax(B.eM,2,B.r,-1)
s=new A.p(n,n,new A.bE(p,p,p,p),new A.bc(s,s,s,s),n,n,B.m)}else s=n
q=o.a
k.push(A.aA(n,new A.C(B.f4,A.w(A.a([new A.C(B.mz,new A.c_(B.aJ,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.q(n,new A.dp(!0,new C.anI(v,q.d,q.e,new C.dlJ(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.B,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dlK(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.C(D.bIf,A.bI(D.hqz,n,new C.dlL(o,d),A.bp(B.b2,n,n,n,n,B.pt,n,n,new A.bb(A.n(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cR(new A.aX(0,1/0,0,m.a.b*0.9),A.cj(k,n,n,D.bMB,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nR.prototype={
ak(){var w=this
return A.J(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
biS(d,e,f){return new C.nR(this.a,e,d,f)}}
C.IX.prototype={
xA(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.IX(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aID(d){var w=null
return this.xA(w,w,w,w,w,d,w,w,w,w,w,w)},
cTu(d){var w=null
return this.xA(w,w,w,w,d,w,w,w,w,w,w,w)},
biQ(d,e,f){var w=null
return this.xA(d,w,w,w,w,w,w,w,e,w,f,w)},
cU8(d){var w=null
return this.xA(w,w,w,w,w,w,d,w,w,w,w,w)},
cUh(d){var w=null
return this.xA(w,w,w,w,w,w,w,w,w,d,w,w)},
cTs(d){var w=null
return this.xA(w,w,w,d,w,w,w,w,w,w,w,w)},
cUj(d){var w=null
return this.xA(w,w,w,w,w,w,w,w,w,w,w,d)},
cTp(d){var w=null
return this.xA(w,w,d,w,w,w,w,w,w,w,w,w)},
cTk(d){var w=null
return this.xA(w,d,w,w,w,w,w,w,w,w,w,w)},
Hd(d){var w=null
return this.xA(w,w,w,w,w,w,w,d,w,w,w,w)},
cUr(d,e,f,g,h,i,j,k,l,m,n){return this.xA(d,e,f,g,null,h,i,j,k,l,m,n)},
ak(){var w=this
return A.J(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cQY(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bV9(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.h.L(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cV(d.h(0,n))).length!==0?B.a.i(A.cV(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cV(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.ET.geE(D.ET))
s=i==null?o:B.h.D(i,18,36)
r=l.$2("position",D.a8C)
q=l.$2("frame",D.a7W)
l=l.$2("texture",D.a7S)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cV(d.h(0,"author"))):o
return this.cUr(p,u,t,q,r,A.qU(d.h(0,"ribbon"))?A.DP(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a0I.prototype={
R(){return new C.aDE(A.a([],x.I),D.Qb)},
gea(){return this.c}}
C.aDE.prototype={
Z(){var w,v=this
v.a4()
v.f=A.AG(0,1)
w=$.ay()
v.z=new A.au(B.ay,w)
v.Q=new A.au(B.ay,w)
v.ln()
w=v.a
C.bHL(w.c,w.d).bB(new C.dmp(v),x.fL)},
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
ln(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ln=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Mk(s.c,s.d),$async$ln)
case 3:r=e
if(t.c==null){w=1
break}t.l(new C.dmd(t,r))
t.azZ()
case 1:return A.h(u,v)}})
return A.i($async$ln,v)},
gaww(){var w,v=this
if(!J.ch(v.d)){w=v.r
w=w<0||w>=J.aa(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
azZ(){var w,v,u=this.gaww(),t=this.z
t===$&&A.d()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.d()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cl8(d){this.l(new C.dma(this,d))
this.azZ()},
Pe(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Pe=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nR(B.n.v(1000*Date.now()),"Untitled page","",new A.W(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aVb(r.c,r.d,s),$async$Pe)
case 3:w=4
return A.b(t.ln(),$async$Pe)
case 4:if(t.c==null||J.ch(t.d)){w=1
break}q=J.nM(t.d,new C.dlM(s))
p=q>=0?q:J.aa(t.d)-1
t.l(new C.dlN(t,p))
t.azZ()
r=t.f
r===$&&A.d()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.CE(p+1,B.cn,B.lb),$async$Pe)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$Pe,v)},
Cg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Cg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.d()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.d()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaww()
s=s==null?null:s.a
if(s==null)s=B.n.v(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aVb(o.c,o.d,new C.nR(s,r,q,new A.W(p,0,!1))),$async$Cg)
case 3:w=4
return A.b(t.ln(),$async$Cg)
case 4:if(t.c==null){w=1
break}t.l(new C.dme(t))
case 1:return A.h(u,v)}})
return A.i($async$Cg,v)},
PX(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaww()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dlV(r),s,null,!0,!0,x.y),$async$PX)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bHu(s.c,s.d,r.a),$async$PX)
case 4:t.l(new C.dlW(t))
w=5
return A.b(t.ln(),$async$PX)
case 5:if(t.c!=null){s=t.f
s===$&&A.d()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.d()
s.VZ(B.n.D(t.r+1,0,J.aa(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$PX,v)},
zP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$zP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cg(),$async$zP)
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
return A.b(C.SX(s,r.r,o,p,q),$async$zP)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).N(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hWo(s,r.x,r.r),$async$zP)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Mk(s.c,s.d),$async$zP)
case 10:l=e
for(s=n.d,r=J.cK(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.K(l,new C.nR(""+(m+k),q,B.a.i(j.b),new A.W(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.BU(r.c,r.d,l),$async$zP)
case 11:w=12
return A.b(t.ln(),$async$zP)
case 12:r=t.c
if(r==null){w=1
break}r.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$zP,v)},
a3h(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a3h=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cg(),$async$a3h)
case 5:case 4:if(t.c==null){w=1
break}s=t.gzN(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.ds(D.AN,new C.dmb(t),new C.dmc())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.nd("Our Family",o,"",""))
for(o=J.aN(t.d);o.A();){n=o.gP(o)
p.push(new H.nd(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hxb(o,new H.ta(s,r,"",p,new H.vy(q.d,null,null,null,null,"","","")),null),$async$a3h)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a3h,v)},
PE(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$PE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cg(),$async$PE)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bU(D.ajf,null,new C.dlR(t),s,!0,!0,!0,I.ac0,!1,!1,x.N),$async$PE)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cTu(r)
t.l(new C.dlS(t,q))
s=t.a
w=7
return A.b(C.Tz(s.c,s.d,q),$async$PE)
case 7:case 1:return A.h(u,v)}})
return A.i($async$PE,v)},
Zi(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Zi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(D.ajf,null,new C.dlX(t),r,!0,!0,!0,I.ac0,!1,!1,x.e),$async$Zi)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.dlY(t,s))
r=t.a
w=4
return A.b(C.Tz(r.c,r.d,s),$async$Zi)
case 4:r=t.f
r===$&&A.d()
if(r.f.length!==0)r.CE(0,B.ed,B.nn)
case 1:return A.h(u,v)}})
return A.i($async$Zi,v)},
bYh(d){var w=d.bV(),v=B.a.aY(B.n.v(w.gci()),2,"0"),u=B.a.aY(B.n.v(w.gcC()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gzN(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
C(d){var w,v,u,t,s,r=this,q=null,p=r.c5l()
if(r.e)w=D.ahV
else if(J.ch(r.d)){w=r.y
v=r.gzN(0)
u=r.a.f
t=A.c(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fNQ,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a4(q,330,new A.C(X.apP,new C.a_U(w,v,0,q),q),q),B.bx,t,B.aj,A.c(u,q,q,q,q,q,q,A.l(q,q,D.l6.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bx],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.q(q,D.fwT,B.f,q,q,new A.p(q,q,q,A.n(18),A.a([new A.ac(0,B.G,B.e1.j(0.45),B.J,18)],x.V),E.xP,B.m),q,q,q,q,B.PQ,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcQ_(),q,q,q,q,q,q,!1,B.a4))
w.push(B.S)
w.push(A.hz(D.c_h,D.hq0,r.gaRH(),q))
B.d.u(u,w)}w=A.at(A.cb(A.w(u,B.l,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.eA,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.aa(r.d)
w=A.c(w,q,q,q,q,q,q,A.l(q,q,D.l6.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.O,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.d()
u=r.w?B.eb:B.yS
u=A.w(A.a([new A.C(D.bJk,w,q),A.E(A.Kl(v,new C.dmn(r),J.aa(r.d)+1,q,r.gcl7(),u,B.aJ),1),r.bKp()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c6(q,D.a09,new A.am(B.a0,q,B.b7,B.t,A.a([D.aTR,A.bm(!0,A.w(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c5l(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cM(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Lk(B.e9,"AI",h.gbIc(),!0))
if(h.a.f)f.push(new C.Lk(B.m9,"Cover",h.gbT8(),!1))
if(h.a.f)f.push(new C.Lk(B.xG,"Header",h.gbO1(),!1))
if(J.cM(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Lk(B.vK,"Print",h.gcuI(),!1))
if(h.a.f&&J.cM(h.d)&&h.r>=0){v=h.w
u=v?B.h2:B.jm
t=v?"Save":"Edit"
f.push(new C.Lk(u,t,v?h.gcB7():new C.dm7(h),!1))}if(h.a.f)f.push(new C.Lk(B.ii,"Add page",h.gaRH(),!1))
v=C.hRG(h.y.Q)
u=h.gzN(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.aa(h.d)
r=J.aa(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.I)(f),++m){l=f[m]
if(l.d)k=D.dVr
else{k=new A.aQ(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ax(E.kI.j(0.5),1,B.r,-1)
j=A.q(g,A.V(l.a,D.l6,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bE(i,i,i,i),new A.bc(k,k,k,k),g,new A.a6(B.a5,B.a9,B.w,j,g,g),B.m),g,32,g,g,g,g,g,32)
k=j}j=D.l6.j(0.85)
p.push(new A.bu(1,B.b9,A.aA(B.c0,A.w(A.a([k,B.bs,A.c(l.b,g,1,g,g,g,g,new A.H(!0,j,g,g,g,g,9.5,B.C,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.anI(v,u,t+" \xb7 "+s+" "+r,new C.dm8(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
B8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$B8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Cg(),$async$B8)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aN(t.d);r.A();){q=r.gP(r)
s.push(q.b+" "+q.c)}p=H.a4K(B.d.aJ(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dlO(t,p),s,null,!0,!0,x.N),$async$B8)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.zP(),$async$B8)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Fc(),$async$B8)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.GR("Swahili (Kiswahili)",!0),$async$B8)
case 18:w=16
break
case 17:w=19
return A.b(t.cMn(o==="sw"?"Swahili (Kiswahili)":"English"),$async$B8)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$B8,v)},
a0i(d,e,f,g,h){var w=null,v=A.n(16),u=B.c.j(0.07),t=A.n(16),s=A.K(E.kI.j(0.3),B.r,1),r=x.p
return new A.C(B.cA,A.aM(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.V(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.xP,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.w(A.a([A.c(f,w,w,w,w,w,w,A2.LX,w,w,w),A.c(g,w,w,w,w,w,w,B.BJ,w,w,w)],r),B.B,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.m),w,w,w,w,B.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dm9(d,h),w,w,w,w,w,w,w),w)},
Fc(){return this.bXL()},
bXL(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Fc=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dm0(r),a7,null,!0,!0,x.ei),$async$Fc)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.B(r.d,x.B)
p=g
f=r.y
o=new A.eP("Working on it\u2026",$.ay())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dm1(o),a7,null,!0,!0,x.H).fF(new C.dm2(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.I)(d),++a1){k=d[a1]
J.bW(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.ak()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.AN[a1]
J.bW(j,i.a)}w=8
return A.b(C.ajB(a0,a7,new C.dm3(o),d,l,e,j),$async$Fc)
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
J.aVH(l,0)
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
a7=j.biS(m.b.h(0,a4).b,a7,new A.W(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.BU(j.c,j.d,l),$async$Fc)
case 11:w=12
return A.b(r.ln(),$async$Fc)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.AN[a1].a)
a5=l.cQY(j,12,a7)
l=r.a
w=15
return A.b(C.Tz(l.c,l.d,a5),$async$Fc)
case 15:if(r.c!=null)r.l(new C.dm4(r,a5))
l=r.f
l===$&&A.d()
if(l.f.length!==0&&q.a==="cover")l.CE(0,B.ed,B.nn)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.M(x.q).f
j=A.c(m.a,null,null,null,null,null,null,null,null,null,null)
l.T(A.b2(a3?A.cEl("Undo",new C.dm5(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ep,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fc,v)},
GR(d,e){return this.cMo(d,e)},
cMn(d){return this.GR(d,!1)},
cMo(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$GR=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.B(r.d,x.B)
d=e
a0=new A.eP("Starting\u2026",$.ay())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dmg(a0),k,null,!0,!0,x.H).fF(new C.dmh(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.I)(k),++i){n=k[i]
J.bW(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a50(m,new C.dmi(a0)),$async$GR)
case 10:w=8
break
case 9:w=11
return A.b(C.bJk(new C.dmj(a0),m,a2),$async$GR)
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
J.aVH(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.M(x.q).f
k=q
o.T(A.b2(null,null,null,null,null,B.t,null,A.c(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.aa(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.biS(J.t(p,g).b,j.a,new A.W(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.BU(k.c,k.d,o),$async$GR)
case 12:w=13
return A.b(r.ln(),$async$GR)
case 13:o=r.c
if(o==null){w=1
break}o=o.M(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.Y(a2,"Swahili")?"Swahili":"English")+"."
k=A.c(k,null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(A.cEl("Undo",new C.dmk(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$GR,v)},
bKp(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dlP(v):u
r=A.aI(u,u,u,u,A.V(D.bVK,s?D.l6:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cM(v.d)&&!v.w&&v.r>=0)s=A.hz(A.V(B.xs,B.Hy,u,u,u,16),A.c("Delete page",u,u,u,u,u,u,A.l(u,u,B.Hy,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbSJ(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.c(s,u,u,u,u,u,u,A.l(u,u,D.l6.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.aa(v.d)?new C.dlQ(v):u
return A.bm(!0,new A.C(D.bJ9,A.A(A.a([r,s,A.aI(u,u,u,u,A.V(B.eP,t<J.aa(v.d)?D.l6:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a0M.prototype={
R(){return new C.bjY(new A.au(B.ay,$.ay()))}}
C.bjY.prototype={
ga4r(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.V$=$.ay()
w.W$=0
this.a3()},
gbWk(){switch(this.ga4r()){case"cover":var w=D.dhb
break
case"book":w=D.dbW
break
default:w=D.dLJ
break}return w},
C(d){var w,v,u,t,s,r,q=this,p=null,o=A.n(26),n=E.kI.j(0.5),m=x.p,l=A.A(A.a([D.dVs,B.ar,D.bOQ,A.aI(p,p,p,p,B.lL,p,p,p,new C.dob(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.iy(p,p,p,p,A.c("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.doc(q),q.ga4r()==="page",p,p,p,p))
if(q.a.d)k.push(A.iy(p,p,p,p,D.hkl,p,new C.dod(q),q.ga4r()==="book",p,p,p,p))
k.push(A.iy(p,p,p,p,D.h6P,p,new C.doe(q),q.ga4r()==="cover",p,p,p,p))
k=A.bX(B.bG,k,B.bq,p,6,8)
j=B.c.j(0.07)
j=A.aO(p,B.M,!1,p,!0,B.t,p,A.aP(),q.d,p,p,p,p,p,2,A.bB(p,new A.b5(4,A.n(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.jP,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a8,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbWk(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.c(s,p,p,p,p,p,p,Ae.LU,p,p,p)
w.push(A.lL(p,B.c.j(0.08),p,r,B.hI,new C.dof(q,s),p,p,p,p))}return A.eE(p,E.CS,A.cb(A.w(A.a([l,B.S,D.hnN,B.aj,k,B.af,j,B.N,A.bX(B.bG,w,B.bq,p,6,6),B.az,A.df(D.c_e,p,D.hoA,new C.dog(q,d),A.bp(B.b2,p,p,p,p,B.pt,p,p,new A.bb(A.n(16),B.a1),p,p,p)),B.at,D.hit],m),B.B,p,B.e,B.P,0,B.p),B.t,p,B.y,p,p,B.f7,p,p,B.ah),p,p,p,B.PO,p,B.db,p,new A.bb(o,new A.ax(n,1.4,B.r,-1)),p)}}
C.a0K.prototype={
R(){return new C.aDH(A.a([],x.gA))},
gea(){return this.c}}
C.ahl.prototype={}
C.aDH.prototype={
Z(){this.a4()
this.ln()},
ln(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$ln=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.T_(p.c,p.d),$async$ln)
case 3:o=e
n=A.a([],x.gA)
p=J.aN(o)
case 4:if(!p.A()){w=5
break}s=p.gP(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bHL(r.c,q),$async$ln)
case 6:j=e
i=J
w=7
return A.b(C.Mk(t.a.c,q),$async$ln)
case 7:m.push(new l.ahl(k,j,i.aa(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.l(new C.dmE(t,n))
case 1:return A.h(u,v)}})
return A.i($async$ln,v)},
be4(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Sh(d,e){return this.cmN(0,e)},
cmN(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Sh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).ca(A.e4(new C.dmD(u,e),!0,null,x.y)),$async$Sh)
case 2:t=g
w=3
return A.b(u.ln(),$async$Sh)
case 3:if(t===!0&&u.c!=null)u.c.M(x.q).f.T(D.aXV)
return A.h(null,v)}})
return A.i($async$Sh,v)},
GT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$GT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.M(x.q).f.T(D.aXQ)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.aiW(s.c,s.d),$async$GT)
case 5:q=e
w=6
return A.b(t.ln(),$async$GT)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Sh(0,B.d.f8(t.d,new C.dmI(q))),$async$GT)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.SX(p,s.f,r,n,o),$async$GT)
case 10:m=e
w=11
return A.b(t.ln(),$async$GT)
case 11:if(m&&t.c!=null)t.c.M(x.q).f.T(D.aXV)
case 1:return A.h(u,v)}})
return A.i($async$GT,v)},
RF(d,e){return this.cyM(0,e)},
cyM(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$RF=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dmH(t,e),s,null,!0,!0,x.y),$async$RF)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a5b(s.c,s.d,e.a),$async$RF)
case 4:w=5
return A.b(t.ln(),$async$RF)
case 5:case 1:return A.h(u,v)}})
return A.i($async$RF,v)},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)k.push(o.bKs(w[u]))
if(m){t=6-o.d.length
w=A.n(18)
v=B.c.j(0.05)
s=A.K(E.kI.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fD(0.7142857142857143,A.q(n,A.w(A.a([D.dVt,B.af,D.eKn,B.at,A.c(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.l6.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bc,B.i,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.m),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcPW(),n,n,n,n,n,n,!1,B.a4))}w=A.n(22)
v=A.K(E.kI.j(0.85),B.r,1.6)
s=A.aA(n,A.q(n,D.c7E,B.f,n,n,new A.p(B.v.j(0.3),n,A.K(E.kI.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dmJ(d),n,n,n,n,n,n,!1,B.a4)
r=A.n(14)
q=B.v.j(0.3)
p=A.K(E.kI.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.bd,D.bPe,A.q(n,A.c(""+o.d.length+" of 6",n,n,n,n,n,n,D.fMO,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.m),n,n,n,n,B.hp,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.cdH,B.m),n,n,n,Aa.PB,D.bH2,n,n,n)
if(o.e)k=D.ahV
else k=k.length===0?D.bh0:A.cg(new C.dmK(k))
return A.c6(n,D.a09,new A.am(B.a0,n,B.b7,B.t,A.a([D.aTR,A.bm(!0,A.w(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bKs(d){var w,v,u=this,t=null,s=u.be4(d),r=d.c,q=x.p,p=A.a([A.bS(0,new A.d7(B.dE,B.z,B.f,new A.a4(300,420,new C.a_U(d.b,s,r,t),t),t),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aA(t,A.q(t,D.c6T,B.f,t,t,new A.p(B.v.j(0.55),t,A.K(B.aT,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dmB(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.c(s,t,1,B.a2,t,t,t,D.fMq,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.w(A.a([new A.fD(0.7142857142857143,new A.am(B.a0,t,B.ac,B.t,p,t),t),B.N,w,A.c(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.l6.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dmC(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.Lk.prototype={}
C.a_U.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.ds(D.AN,new C.cTQ(m),new C.cTR()),j=m.c,i=D.ET.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mN:B.bc
v=new C.cTS(h)
i=A.a([new A.ac(0,B.G,B.v.j(0.6),D.eH5,28)],x.V)
u=x.p
t=A.a([A.bS(0,A.b4(l,l,l,new C.bh7(j.x,h,l),B.aA),0,0,0),A.ao(0,A.q(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.45),B.L],x.O),l,l),B.m),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aQ(3,3)
t.push(new A.cS(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.bc(r,r,r,r),l,l,B.m),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.u(t,A.a([v.$4(D.apQ,8,0.85,2.2),v.$4(D.bM0,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.apQ,8,0.85,2.4))
else if(r==="corners")t.push(A.bS(0,new A.C(D.bLX,A.b4(l,l,l,new C.bgZ(h,l),B.aA),l),0,0,0))
r=A.V(D.aEZ[B.n.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.c(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.aCa,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.az,q,B.af,p,B.af,A.c(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cN,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.u(o,A.a([B.aN,A.c(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.C,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bS(0,new A.C(D.bMt,A.w(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aKV(l),D.fBO),l,l,l,46,0,l))
return A.q(l,A.bv(D.agr,new A.am(B.a0,l,B.ac,B.t,t,l),B.ap),B.f,l,l,new A.p(l,l,l,D.agr,i,new A.a6(B.aw,B.aD,B.w,k.c,l,l),B.m),l,l,l,l,l,l,l,l)}}
C.bh7.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e7()
g.cW(11)
switch(this.b){case"plain":return
case"linen":$.U()
w=A.L()
w.r=B.v.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.m(0,t),new A.m(u,t),w)
$.U()
s=A.L()
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
d.O(new A.m(o*v,n*u),0.6+m*1.6,l)}break
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
w=A.L()
w.r=B.v.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.O(new A.m(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.U()
h=A.L()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.O(new A.m(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.B(0,this.c)}}
C.bgZ.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.U(),j=A.L(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.ae
j.c=2.4
j.d=B.bH
for(w=e.a,v=e.b,v=[D.foz,new A.b7([w,0,-1,1]),new A.b7([0,v,1,-1]),new A.b7([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
d.O(new A.m(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.B(0,this.b)}}
C.vh.prototype={}
C.a0f.prototype={
R(){return new C.bh5()}}
C.bh5.prototype={
goT(){var w=this.d
return w===$?this.d=this.a.c:w},
gzN(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.bd(w.b,B.bb,B.aP),$.ay())}return v},
gaFK(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.bd(w.c,B.bb,B.aP),$.ay())}return v},
gav2(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.bd(w.y,B.bb,B.aP),$.ay())}return v},
t(){var w=this,v=w.gzN(0),u=v.V$=$.ay()
v.W$=0
v=w.gaFK()
v.V$=u
v.W$=0
v=w.gav2()
v.V$=u
v.W$=0
w.a3()},
avH(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.iy(s,s,s,s,A.c(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.dcT(this,f,u),e===u,s,s,s,s))}return A.bX(B.bG,r,B.bq,s,6,8)},
aBu(d){var w=null,v=B.c.j(0.07)
return A.bB(w,new A.b5(4,A.n(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mg,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
C(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goT(),a0=f.gzN(0),a1=a0.a.a,a2=f.gaFK(),a3=a2.a.a,a4=f.gav2(),a5=d.biQ(a4.a.a,a3,a1)
a1=x.w
a3=A.aE(a6,e,a1).w
a1=A.aE(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a4(190,260,new A.d7(B.dE,B.z,B.f,new A.a4(270,370,new C.a_U(a5,d,f.a.e,e),e),e),e),e,e,e)
a0=A.aO(e,B.M,!1,e,!0,B.t,e,A.aP(),a0,e,e,e,e,e,2,f.aBu("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.ddh(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a8,e,B.ao,e,e,e,e)
a2=A.aO(e,B.M,!1,e,!0,B.t,e,A.aP(),a2,e,e,e,e,e,2,f.aBu("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.ddi(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a8,e,B.ao,e,e,e,e)
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
v.push(A.aA(e,A.w(A.a([p,B.cR,A.c(t.b,e,e,e,e,e,e,new A.H(!0,q,e,e,e,e,10.5,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.ddj(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bX(B.bG,v,B.bq,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b2.j(0.35):B.c.j(0.07)
m=new A.aQ(14,14)
s=f.d
o=new A.ax((s===$?f.d=f.a.c:s).d===n?B.eM:B.L,2,B.r,-1)
q.push(A.aA(e,A.q(e,A.V(D.aEZ[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bE(o,o,o,o),new A.bc(m,m,m,m),e,e,B.m),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.ddk(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bX(B.bG,q,B.bq,e,8,8)
a4=A.aO(e,B.M,!1,e,!0,B.t,e,A.aP(),a4,e,e,e,e,e,2,f.aBu("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.am,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.ddl(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.du,!0,B.a8,e,B.ao,e,e,e,e)
p=A.c("LETTERING COLOUR",e,e,e,e,e,e,N.wu,e,e,e)
m=A.a([],w)
for(l=D.ET.gdV(D.ET),l=l.gae(l);l.A();){k=l.gP(l)
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
m.push(A.aA(e,A.w(A.a([j,B.bs,A.c(i,e,e,e,e,e,e,new A.H(!0,h,e,e,e,e,10,B.O,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.ddm(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bX(B.bG,m,B.bq,e,8,10)
l=A.c("TITLE SIZE",e,e,e,e,e,e,N.wu,e,e,e)
k=f.goT()
return new A.C(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cR(new A.aX(0,1/0,0,a1.a.b*0.92),A.cj(A.a([D.hhU,B.af,d,B.aN,a0,B.S,a2,B.az,D.hol,B.N,v,B.az,D.hi2,B.N,q,B.az,a4,B.az,p,B.N,m,B.az,l,A.kT(e,9,e,""+B.h.S(f.goT().f),36,18,e,new C.ddn(f),k.f),A.c("WHERE THE WORDS SIT",e,e,e,e,e,e,N.wu,e,e,e),B.aj,f.avH(D.a8C,f.goT().r,new C.ddo(f),D.dP9),B.af,A.c("BORDER",e,e,e,e,e,e,N.wu,e,e,e),B.aj,f.avH(D.a7W,f.goT().w,new C.ddp(f),D.dPg),B.af,A.c("COVER MATERIAL",e,e,e,e,e,e,N.wu,e,e,e),B.aj,f.avH(D.a7S,f.goT().x,new C.ddr(f),D.dQW),B.aj,A.ji(e,B.b2,e,B.ag,e,new C.dds(f),e,e,e,D.hc1,f.goT().z),B.bx,A.bI(D.hgz,e,new C.ddt(f,a6),A.bp(B.b2,e,e,e,e,B.pt,e,e,new A.bb(A.n(16),B.a1),e,e,e))],w),e,e,S.aph,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aKV.prototype={
a5(d,e){var w,v,u,t=new A.aJ($.U().r,B.ak,null,null,A.a([],x.v))
t.E(new A.b_(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bz())
u=A.L()
u.san(D.ceo.az(0,new A.a5(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bmw.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.U()
w=A.L()
w.san(D.cdo.az(0,new A.a5(0,0,a2,a3)))
a4.aE(new A.a5(0,0,a2,a3),w)
v=B.h.cB(a1/112)
u=new A.e7()
u.cW(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.dha[u.aw(9)]
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
p.san(D.ccG.az(0,new A.a5(0,r,a2,q)))
a4.aE(new A.a5(0,r,a2,q),p)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.v.j(0.5).gp(0)
p.y=B.ld
a4.aE(new A.a5(0,q,a2,q+14),p)}t=A.L()
t.r=D.bkR.j(0.72).gp(0)
a4.aE(new A.a5(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.L()
a3.san(new A.bV(B.z,0.5,B.w,d,0,A.a([D.btz.j(0.22),B.L],w),d,d).az(0,A.c0(new A.m(t,a1),a0)))
a4.O(new A.m(t,a1),a0,a3)},
aD(d){return!1}}
C.bfd.prototype={
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aD(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cS(14,w*2,v*2.2,v*2,o,o,new A.bP(new A.p(A.ap(D.l6,D.byV,w/4),o,new A.bE(B.a1,new A.ax(B.v.j(0.12),1,B.r,-1),B.a1,B.a1),B.Nb,o,o,B.m),B.bn,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.v.j(0.35),B.aPn,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aQ(2,2)
t.push(A.q(o,o,B.f,o,o,new A.p(E.kI.j(0.6),o,o,new A.bc(s,s,s,s),o,o,B.m),o,14,o,o,o,o,o,3))}u=A.q(o,A.w(t,B.l,o,B.rK,B.i,0,B.p),B.f,o,o,new A.p(o,o,o,D.b91,u,D.cem,B.m),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.v.j(0.4),B.dv,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aKV(o),D.fBJ),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aZ5(p.y,r,L.ji,o))
r=n.d
q=p.x
if(p.f)n=A.w(A.a([A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),p.r,o,o,o,o,o,2,A.bB(o,B.f_,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.ji.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.h0H,!0,B.a8,o,B.ao,o,o,o,o),A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.ji.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.S,A.E(A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),p.w,o,o,o,o,o,2,A.bB(o,B.f_,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.ji.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.am,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fRX,!0,B.a8,B.BF,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.c(n.b,o,o,o,o,o,o,D.h0z,o,o,o),B.at,A.c(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.ji.j(0.5),o,o,o,o,o,o,o,o,11,B.cN,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.N,A.A(A.a([A.E(A.q(o,o,B.f,D.Hi.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.C(B.fD,A.c("\u2766",o,o,o,o,o,o,A.l(o,o,D.Hi.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.Hi.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.az],m)
if(k.length===0)n.push(A.c("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.ji.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.GL(A.cW(A.a([A.cW(o,o,o,o,o,o,o,o,o,D.fVf,B.a.av(k,0,1)),A.cW(o,o,o,o,o,o,o,o,o,o,B.a.aV(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.ji.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cb(A.w(n,B.B,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.C(B.hB,A.c("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.ji.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.bv(B.Nb,new A.am(B.a0,o,B.ac,B.t,A.a([t,new A.C(D.bLu,A.w(s,B.al,o,B.e,B.i,0,B.p),o),A.ao(0,new A.bP(new A.p(o,o,o,o,o,new A.a6(B.a5,B.a9,B.w,A.a([B.v.j(0.16),B.L],x.O),o,o),B.m),B.bn,o,o),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.p(o,o,o,B.Nb,v,D.ceU,B.m),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.am(B.a0,o,B.ac,B.t,l,o)}}
C.anJ.prototype={
R(){return new C.anK(new A.eP(0,$.ay()),new C.bWY(),new C.ao1(),D.i2T,null,null)},
gd8(){return this.d}}
C.a31.prototype={
a9(){return"_Step."+this.b}}
C.anK.prototype={
gDt(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHH(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghm(d){var w,v=this,u=v.e
if(u===$){w=C.NI(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gVg(){var w=this.ghm(0)
return w.gA7()==null?"Babu":B.a.i(w.gA7().b)},
Z(){var w,v=this
v.a4()
w=v.ghm(0).gA7()
w=w==null?null:w.c
v.r.b=w===D.p3
w=v.qo(new C.bVj(v))
w.fW(0)
v.x!==$&&A.aT()
v.x=w
v.a4n("Come closer, my children. I am "+v.gVg()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bzI()},
a4n(d){var w=this,v=w.y
if(v!=null)v.a2(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.d5(E.a1T,new C.bVd(w))},
bw3(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a2(0)
v.l(new C.bVm(v))},
afZ(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bvW(){return this.bdC()},
bdC(){var w=this,v=w.gDt()[w.as],u=v.e
u=u.length!==0?u:v.d
w.l(new C.bVe(w))
w.a4n(u)
v=w.z
if(v!=null)v.a2(0)
w.z=A.cD(B.o5,new C.bVf(w))},
cR4(){var w=this
w.l(new C.bVi(w))
w.a4n(w.gDt()[w.as].a)},
Mp(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.afx)return
w=p.gDt()
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
p.l(new C.bVh(p,d,u,q))
p.a4n(u?D.dyO[q.aw(4)]+" "+w[p.as].d:D.dv1[q.aw(3)]+" "+w[p.as].d)},
kT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gDt()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bK0(t.at,t.ay,p)
t.l(new C.bVk(t,s))
t.a4n(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Ce(t.a.d,s),$async$kT)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.Cf(r.d,r.c.a,"fire",t.at*10),$async$kT)
case 6:t.dy=f
if(t.c!=null)t.l(new C.bVl())
w=1
break
case 4:++t.as
t.bdC()
case 1:return A.h(u,v)}})
return A.i($async$kT,v)},
C(d){var w=this,v=null,u=w.f,t=x.p
return A.c6(v,D.a_a,new A.am(B.a0,v,B.ac,B.t,A.a([A.bS(0,new A.ea(A.b4(v,v,v,new C.aZa(u,w.r,w.w,u),B.aA),v),0,0,0),A.bm(!0,A.w(A.a([w.cgv(0),B.aY,w.bVv()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cgv(d){var w,v,u,t=this,s=null,r=A.aI(s,s,s,s,B.RJ,s,s,s,new C.bVg(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gDt().length;++w){v=t.as
if(w<v||t.Q===D.b5i)v=B.d0
else v=w===v?B.c:B.aT
u=new A.aQ(4,4)
p.push(A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,D.bGN,s,s,s,22))}p=A.E(A.w(A.a([D.h8J,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.B,s,B.e,B.i,0,B.p),1)
v=A.n(14)
u=A.K(B.fN,B.r,1)
return new A.C(D.bMF,A.A(A.a([r,p,A.q(s,A.c("\ud83d\udd25 "+B.h.S(t.cy*100)+"%",s,s,s,s,s,s,B.iY,s,s,s),B.f,s,s,new A.p(B.ba,s,u,v,s,s,B.m),s,s,s,s,B.hp,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bVv(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghm(0).gA7()
if(h==null)w=1
else w=h.c===D.p3?0:1
v=j.dx
u=j.db
t=D.r5.j(0.96)
s=A.n(22)
r=A.K(B.d0,B.r,3)
q=A.b4(i,i,i,new C.bsa(w,i),B.aA)
p=A.c(j.Q===D.afx?j.gVg()+" asks":"Elder "+j.gVg(),i,i,i,i,i,i,D.aZd,i,i,i)
o=j.db
o=B.a.av(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c0,A.A(A.a([new A.a4(62,62,q,i),B.ar,A.E(A.w(A.a([p,B.bs,A.c(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aZr,i,i,i)],n),B.B,i,B.e,B.i,0,B.p),1)],n),B.B,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbw2(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.ac0("Sit down by the fire",j.gbvV()),i,i,i)
break
case 1:v=A.at(j.ac0("Ask me, Elder",j.gcR3()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gDt()[j.as].b,m<u.length;++m){q=new A.aQ(14,14)
l=new A.ax(D.lY,2.5,B.r,-1)
v.push(A.aA(i,A.q(i,A.c(u[m],i,i,i,i,i,i,D.aZn,B.K,i,i),B.f,i,D.ah7,new A.p(D.amM,i,new A.bE(l,l,l,l),new A.bc(q,q,q,q),i,i,B.m),i,i,i,i,B.xh,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bVa(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bX(B.bG,v,B.bq,i,8,8)
break
case 3:v=j.fr
u=v?B.kp:An.asX
u=A.V(u,v?B.ew:D.lY,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.c(q,i,i,i,i,i,i,A.l(i,i,v?B.ew:D.lY,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gDt().length?"Finish":"Next story"
v=A.A(A.a([u,B.aa,q,j.ac0(v,j.gqH(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.c(""+j.at+" of "+j.gDt().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aZH,i,i,i)],n)
u=j.cx
if(u>0){u=C.aTi(u)
q=C.aTi(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.c(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.adZ,i,i,i))}v.push(B.N)
v.push(j.ac0("Back to the games",new C.bVb(j)))
v=A.w(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.q(i,A.w(A.a([o,B.S,v],n),B.B,i,B.e,B.P,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aGA,i,B.m),i,i,i,B.zz,B.bg,i,i,i)},
ac0(d,e){var w=null,v=A.n(16),u=A.K(B.d0,B.r,2)
return A.aA(w,A.q(w,A.c(d,w,w,w,w,w,w,A2.LX,w,w,w),B.f,w,w,new A.p(D.lY,w,u,v,w,w,B.m),w,w,w,w,D.bKo,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bsa.prototype={
a5(d,e){O.hwX(d,e.ep(B.J),e.gdm()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aDF.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bWY.prototype={}
C.tA.prototype={}
C.bsb.prototype={}
C.ao1.prototype={
NM(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.iuV(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aZa.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.Db(l.d.NM(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bs(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bW(0,u)
l.cGj(d,j)
l.bU3(d,j)
l.cOO(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bs(t.save())
t.translate(225,580)
d.nZ(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.U()
q=A.L()
p=x.O
o=x.n
q.san(A.wF(B.J,r,A.a([D.bxA.j(0.55*s),F.OQ.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.w,k,k,0))
d.O(B.J,r,q)
t.restore()
n=A.a([new A.y(528,new C.bWQ(l,d,j,i)),new A.y(540,new C.bWR(l,d,j,i)),new A.y(546,new C.bWS(l,d,j,i)),new A.y(574,new C.bWT(l,d,j,i)),new A.y(612,new C.bWU(l,d,j,i)),new A.y(650,new C.bWV(l,d,j,i)),new A.y(656,new C.bWW(l,d,j,i))],x.E)
B.d.b_(n,new C.bWX())
for(m=0;m<7;++m)n[m].b.$0()
l.bKL(d,j,i)
l.bXJ(d,j)
t.restore()
$.U()
t=A.L()
t.san(A.wF(new A.m(w/2,v*0.6),e.gaqp()*0.75,A.a([B.L,D.bkK],p),A.a([0.55,1],o),B.w,k,k,0))
d.aE(new A.a5(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cGj(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e7()
h.cW(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=t.gp(0)
d.O(new A.m(v*450,20+u*300),0.8+s*1.1,r)}q=B.h.F(e,17)/1.2
if(q<1){p=new A.m(60+q*220,70+q*90)
d.ah(p,p.aI(0,D.eGC),C.iW(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.h.F(v+o*0.05,1)
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
s.b=B.ae
s.c=1.6
s.r=D.bnw.gp(0)
s.d=B.bH
s.e=B.dQ
d.af(l,s)}},
bU3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aDu[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.c1(new A.m(p,m),n*0.74,q*0.5)
k=Ad.zl.j(v)
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
o.r=D.ak3.j(0.16*(1-h)).gp(0)
d.O(new A.m(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cOO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bH2(d,D.eGy,0.9,e,D.hXz,!1,!1,D.b5f,1,!1)
w=$.U().r
v=x.v
u=new A.aJ(w,B.ak,g,g,A.a([],v))
u.E(new A.b_(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bz())
t=A.L()
t.r=D.am1.gp(0)
d.af(u,t)
C.bH2(d,D.eGA,0.95,e,D.hXn,!1,!1,D.b5g,1,!0)
t=new A.aJ(w,B.ak,g,g,A.a([],v))
t.E(new A.b_(417,510))
t.E(new A.cn(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.cn(431,553,421,548))
t.E(new A.bz())
u=A.L()
u.r=F.GY.gp(0)
d.af(t,u)
u=A.c1(D.eGz,8,28)
t=A.L()
t.r=D.bA1.gp(0)
d.c3(u,t)
C.bH2(d,new A.m(-30+B.h.F(e/26,1)*510,492),0.82,e,D.hXB,!0,!1,D.YY,1,!1)
t=B.h.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.c3(A.c1(new A.m(s+q*16,r-6),16,11),C.iW(D.alT,1.8))
u=q<0
C.bH2(d,new A.m(s-q*6,r),0.62,e,D.hXE,!1,u,D.YY,2.2,!1)
C.bH2(d,new A.m(s-q*32,r+4),0.58,e+1,D.hXv,!1,u,D.YY,2.2,!1)
this.c_t(d,D.eGd,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.n.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.c1(new A.m(o,n),8,11)
k=p===1
j=k?D.alP:D.ams
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=j.gp(0)
d.c3(l,i)
l=k?D.alP:D.ams
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=l.gp(0)
d.O(new A.m(o+5,n+(-3+m)),2.6,k)
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.ae
k.c=1
k.r=B.as.gp(0)
k.d=B.bH
k.e=B.dQ
d.ah(new A.m(o+7.5,n+(-2+m)),new A.m(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.b=B.ae
k.c=1
k.r=B.as.gp(0)
k.d=B.bH
k.e=B.dQ
d.ah(new A.m(o,n+4),new A.m(o,n+8),k)}h=e<f.f
u=A.c1(D.aaS,15+Math.sin(e*2)*0.8,40)
t=A.L()
t.r=D.aks.gp(0)
d.c3(u,t)
u=A.c1(D.aaS.a6(0,new A.m(-14,h?-9:-2)),12,15)
t=A.L()
t.r=D.bpL.gp(0)
d.c3(u,t)
t=new A.aJ(w,B.ak,g,g,A.a([],v))
t.E(new A.b_(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bz())
u=A.L()
u.r=D.bpY.gp(0)
d.af(t,u)
u=D.aaS.a6(0,new A.m(-17,h?-9:-2))
t=A.L()
t.r=B.iv.gp(0)
d.O(u,1.1,t)
v=new A.aJ(w,B.ak,g,g,A.a([],v))
v.E(new A.b_(168,590))
w=Math.sin(e*8)
v.E(new A.cn(180,588+w*(h?6:0),178,595))
d.af(v,C.iW(D.aks,3.5))},
c_t(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a6(0,new A.m(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.b=B.ae
m.c=2
m.r=D.a_o.gp(0)
m.d=B.bH
m.e=B.dQ
d.ah(new A.m(u+o,s),new A.m(u+(o+n*1.5),q),m)}w=A.c1(k,17,32)
v=$.U()
r=A.L()
r.r=D.GW.gp(0)
d.c3(w,r)
r=A.c1(k.a6(0,D.eFE),7,26)
w=A.ap(D.GW,B.v,0.12)
w.toString
q=A.L()
q.r=w.gp(0)
d.c3(r,q)
v=new A.aJ(v.r,B.ak,null,null,A.a([],x.v))
v.E(new A.b_(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bz())
s=A.L()
s.r=D.GW.gp(0)
d.af(v,s)
s=A.c1(k.a6(0,new A.m(24,-7+l)),9,12)
v=A.L()
v.r=D.GW.gp(0)
d.c3(s,v)
v=-11+l
d.ah(k.a6(0,new A.m(22,v)),k.a6(0,new A.m(21,-17+l)),C.iW(D.a_o,1.6))
d.ah(k.a6(0,new A.m(26,v)),k.a6(0,new A.m(28,-16+l)),C.iW(D.a_o,1.6))
v=k.a6(0,new A.m(26,-8+l))
s=A.L()
s.r=B.v.gp(0)
d.O(v,0.9,s)
d.ah(k.a6(0,new A.m(26,-3+l)),k.a6(0,new A.m(26,1+l)),C.iW(D.bsO,1.4))
d.ah(k.a6(0,D.eIA),k.a6(0,new A.m(-19,-7+Math.sin(f*7)*2)),C.iW(D.GW,2.4))},
bXH(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.c1(new A.m(225+u*36,574+(t*13+6)),8,11)
$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.byD.gp(0)
a6.c3(u,t)}}u=A.c1(D.aaU.a6(0,B.cy),17,52)
$.U()
t=A.L()
t.r=D.bki.gp(0)
a6.c3(u,t)
t=A.c1(D.aaU.a6(0,B.cy),12,44)
u=D.bnX.j(0.6+0.3*Math.sin(a7*6))
s=A.L()
s.r=u.gp(0)
a6.c3(t,s)
for(r=0;r<3;++r){v=D.dur[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.ae
o.c=7
o.r=D.H9.gp(0)
o.d=B.bH
o.e=B.dQ
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
n.e=B.dQ
a6.ah(new A.m(u+o*24,579+(p*4-2)),new A.m(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.fkt,D.fl3,D.fmd,D.fmy,D.fmb]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bvS,D.bs8,D.by2][k]
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
p=G.amq.j((1-a5)*0.9)
$.U()
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.r=p.gp(0)
a6.O(new A.m(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.h.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ak3.j(0.1*(1-a5))
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=q.gp(0)
a6.O(new A.m(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bXJ(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.h.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.n.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bAc.j(0.18*p)
$.U()
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=o.gp(0)
d.O(new A.m(r,q),5,n)
n=new A.ar(B.V,B.R,B.X,B.Y,B.W)
n.r=D.btE.j(0.9*p).gp(0)
d.O(new A.m(r,q),1.4,n)}},
c9I(d,e){switch(d){case 0:return e.b?D.hXp:D.b4v
case 1:return e.b?D.hXD:D.b4t
case 2:return D.b4s
case 3:return D.b4r
case 4:return D.b4u
default:return D.b4w}},
aFZ(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
SA(d,e,f,g){var w,v=this,u=D.a83[e],t=v.c9I(e,g),s=new C.bsb(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a83[e],l=e===0
m=B.h.D(((l?D.aPf:D.aPl).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.ab_
s.as=D.Fl
if(l){s.a=o?v.aFZ(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.m(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.m(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Fl
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.eFM
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.eH9
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
s.Q=D.eJw
s.as=D.aPy}if(e===2&&g.x!=null&&f<g.y){s.a=v.aFZ(f,5)
s.b=0.4
s.as=new A.m(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aFZ(f,e*3)
s.b=0.5
s.c=0.4}}C.hQf(d,u.a,u.b*1.2,t,s,f,e,null)},
bKL(d,e,f){var w=new C.bWP(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.ahu.prototype={
a9(){return"_Stand."+this.b}}
C.afo.prototype={}
C.lR.prototype={}
C.bVz.prototype={
bFg(d){var w,v,u,t,s=A.S(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aT()
this.c=s},
H8(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.b_(r,new C.bVA())
return r},
atH(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.d()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aPO(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
aoO(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gA7(){var w=this.b
if(w.length===0)return null
w=A.B(w,x.P)
B.d.b_(w,new C.bVB(this))
return B.d.gH(w)}}
C.awd.prototype={}
C.A2.prototype={}
C.amz.prototype={
gCZ(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.X(w,new C.bQl(),A.T(w).k("X<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ak(){var w=this
return A.J(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Nq.prototype={
garK(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
if(t.gCZ(0))s.push(t)}return s},
ak(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.I)(w),++s){r=w[s]
p.push(A.J(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.J(["id",this.a,"title",q,"qs",p],u,t)},
d7H(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.garK(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.I)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lR(B.a.i(s.a),p,B.d.c8(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bdn.prototype={}
C.abq.prototype={}
C.bkO.prototype={}
C.ahs.prototype={}
C.alR.prototype={
R(){return new C.alS(B.bI,A.a([],x.cC),A.a([],x.e4),null,null)},
gd8(){return this.d}}
C.alS.prototype={
gO3(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHH(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbdY(){var w,v=this,u=v.e
if(u===$){w=v.qo(v.gcma())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Z(){this.a4()
this.gbdY().fW(0)},
t(){this.gbdY().t()
this.bzD()},
fW(d){this.l(new C.bOt(this))},
cmb(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fQ(0,v)
if(w.c!=null)w.l(new C.bOo())},
bcg(){var w,v,u,t=this,s=t.r
B.d.a7(s)
w=t.gO3()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bkO(u,(u+0.5)/v,w[t.x].b[u]))},
fQ(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bOu())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.ccB()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.I)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gO3()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.h.S((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.avf(v,0.8,B.d0)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.avf(m.cy,0.8,G.nS)
m.b1t("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.avf(q,0.88,D.lY)
p=m.gO3()[m.x]
n=p.c
if(u===n){m.b1t("The right gourd fell! It was "+p.b[n]+".")
return}}}},
avf(d,e,f){var w,v,u,t=new A.e7()
t.cW(B.h.S(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.ahs(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
b1t(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.RH()}},
ccB(){var w=this
if(w.x+1>=w.gO3().length){w.RH()
return}++w.x
w.bcg()},
RH(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$RH=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gO3().length
r=C.bK0(t,u.at,s)
u.ax=r
if(u.c!=null)u.l(new C.bOm())
w=2
return A.b(C.Ce(u.a.d,r),$async$RH)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.Cf(t.d,t.c.a,"catch",u.z),$async$RH)
case 3:u.cx=e
if(u.c!=null)u.l(new C.bOn())
return A.h(null,v)}})
return A.i($async$RH,v)},
C(d){var w,v=this,u=null
if(v.CW)w=v.cgw()
else w=v.ch?v.cgx():A.at(new A.C(B.eA,A.w(A.a([D.b_G,B.N,D.har,B.S,D.hgE,B.ee,C.uR("Play",v.gf5(v),B.d0,B.fR,D.fM)],x.p),B.l,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.u0("Calabash Catch",w,B.fh,u)},
cgx(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hQ:B.IC
p.push(A.V(u,v?B.aC:B.bX,r,r,r,22))}p.push(B.aY)
v=s.x
u=s.gO3()
p.push(A.c(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aZc,r,r,r))
p.push(B.bd)
v=A.n(14)
p.push(A.q(r,A.c(""+s.z,r,r,r,r,r,r,B.iY,r,r,r),B.f,r,r,new A.p(B.by,r,r,v,r,r,B.m),r,r,r,r,A0.Dj,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.n(18)
t=A.K(B.d0,B.r,3)
return A.w(A.a([new A.C(D.bIa,p,r),A.q(r,A.c(u[s.x].a,r,r,r,r,r,r,D.fV7,B.K,r,r),B.f,r,r,new A.p(D.r5,r,t,v,r,r,B.m),r,r,r,B.eG,B.bg,r,r,1/0),B.aj,A.E(A.cg(new C.bOs(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cgw(){var w=this,v=null,u=A.at(A.c(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.qG,v,v,v),v,v,v),t=A.at(A.c(""+w.Q+" of "+w.gO3().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Xl,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cj(A.a([D.bhJ,u,t,B.aN,new C.IZ(s,r,w.cx,v),B.aN,A.at(C.uR("Back to the games",new C.bOl(w),B.d0,B.ko,D.fM),v,v,v)],x.p),v,v,B.ad,v,v,B.ah,!1)}}
C.bfV.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.U(),a3=A.L()
a3.san(A.jT(B.J,new A.m(0,a0),D.dah,G.aDL,B.w,e))
a4.aE(new A.a5(0,0,a1,0+a0),a3)
a3=A.L()
a3.r=G.OU.gp(0)
a4.O(new A.m(d*0.82,a0*0.16),22,a3)
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
w=A.L()
w.r=D.boV.gp(0)
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
w=A.L()
w.r=D.aj3.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cuD[q]
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.aj3.gp(0)
s.c=7
s.d=B.bH
a4.ah(new A.m(r,a2),new A.m(r+p*46,w),s)
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.ail.gp(0)
a4.O(new A.m(r+p*50,t),18,s)}a2=a0*0.88
w=A.L()
w.r=D.bpV.gp(0)
a4.aE(new A.a5(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.akJ.gp(0)
t.c=2
a4.ah(new A.m(w,a1),new A.m(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.I)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.c1(new A.m(u,s),12,54)
$.U()
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.lY.j(0.6).gp(0)
a4.c3(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bs(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.ajN.gp(0)
a4.O(D.eF1,14,m)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.buW.gp(0)
m.c=4
m.d=B.bH
a4.ah(D.eF2,D.eG9,m)
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.san(new A.ant(D.eIk,46,D.dk6,B.vU,B.w,e,e,0))
a4.O(B.J,34,m)
m=A.c1(D.eIq,8,12)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=B.c.j(0.35).gp(0)
a4.c3(m,l)
k=new A.iU(new A.eG(n.c,e,e,B.cV,e,e,e,e,e,e,D.fSU),B.K,B.cb,new A.k3(1),e,e,3,e,B.cc,e,B.cK)
k.nM(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bx(A.c1(B.cO,m.gb4(m)+8,l),B.h5)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.r5.gp(0)
a4.aq(j,l)
l=new A.ar(B.V,B.R,B.X,B.Y,B.W)
l.r=D.lY.gp(0)
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
C.iz1(a4,new A.m(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.e1,(w+1)/2)
h=A.c1(new A.m(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aJ($.U().r,B.ak,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.b_(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.cn(h.gbF().a,s+8,w+8,s))
a3.E(new A.bz())
m=A.L()
m.r=D.a0e.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.Cw.gp(0)
m.c=1.4
a4.ah(new A.m(t,a2),new A.m(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.L()
s.r=G.nS.gp(0)
a4.aE(new A.a5(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.L()
s.r=D.bp0.gp(0)
a4.c3(new A.a5(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.I)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=g.e.j(B.h.D(s,0,1)).gp(0)
a4.O(new A.m(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.h2(e,B.cK,e,e,e,A.cW(e,e,e,e,e,e,e,e,e,A.l(e,e,B.d0.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Ev,e,e),"+"+a2),B.a8,B.cb,e,B.e6,B.cc)
k.eL()
k.a5(a4,new A.m(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.RA.prototype={
C(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aDD(w.c,w.f,v),B.aA),s=A.n(10),r=A.K(B.bE,B.r,1.4)
return new A.a4(u+22,v,A.w(A.a([new A.a4(u,u,t,v),B.cR,A.q(v,A.c(w.d,v,1,B.a2,v,v,v,D.fLe,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.m),v,v,v,v,B.nq,v,v,v)],x.p),B.l,v,B.e,B.P,0,B.p),v)},
ga0(d){return this.e}}
C.aDD.prototype={
a5(d,e){var w=e.ep(B.J),v=e.gdm(),u=this.c?0.8:0
return O.hwX(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aC_.prototype={}
C.awO.prototype={
R(){return new C.awP(A.S(x.S,x.cq),null,null)},
gd8(){return this.d}}
C.awP.prototype={
gkY(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hW8(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaI3(){var w=this.z
return w===$?this.z=this.YM(0):w},
gja(){var w,v=this.Q
if(v===$){w=this.gkY()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c4(w,-1,!1,x.S)}return v},
YM(d){var w,v,u,t,s=this.gkY()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aC_(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aC_(v[t],u[t],-1))
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
u=u.gp_()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.e2$.a.a7(0)
v.qY()}this.bA5()},
cXe(d,e){var w,v,u,t,s,r=this
if(d>=r.gja().length||r.gja()[d]!==-1||B.d.q(r.gja(),e))return
w=r.gaI3()[e]
v=r.gkY()[r.e].a
if(w.c<0){++r.f;++r.y
r.l(new C.cuz(r,e,w,v))
A.cD(B.m4,new C.cuA(r))
return}++r.r
u=A.br(null,B.hA,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.l(new C.cuB(r,d,e,w,v))
u.ct(0)},
kT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkY()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cH(n,0,new C.cuC())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.l(new C.cuD(t,r))
w=5
return A.b(C.Ce(t.a.d,r),$async$kT)
case 5:t.x=f
o=t.a
w=6
return A.b(C.Cf(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kT)
case 6:t.ch=f
if(t.c!=null)t.l(new C.cuE())
w=1
break
case 4:for(o=t.as,n=new A.ds(o,o.r,o.e);n.A();){q=n.d
q.r.t()
q.r=null
p=q.eV$
p.b=!1
B.d.a7(p.a)
p=p.gp_()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.e2$.a.a7(0)
q.qY()}o.a7(0)
t.l(new C.cuF(t))
case 1:return A.h(u,v)}})
return A.i($async$kT,v)},
C(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.c(""+r.r+" branches grown",p,p,p,p,p,p,B.qG,p,p,p),p,p,p)
v=r.f
v=A.at(A.c(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Xl,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.u0(q,A.cj(A.a([D.ahU,w,v,B.aN,new C.IZ(u,t,r.ch,p),B.aN,A.at(C.uR("Back to the games",new C.cuv(d),B.d0,B.ko,D.fM),p,p,p)],x.p),p,p,B.ad,p,p,B.ah,!1),B.fh,p)}w=r.gkY()
v=r.e
s=w[v]
return new C.u0(q,new A.C(B.tM,A.w(A.a([A.c("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aZ7,B.K,p,p),A.E(A.cg(new C.cuw(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.fh,p)}}
C.bfm.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.X(b2,new C.cUU(),A.T(b2).k("X<1>")).gI(0),b4=a9.b,b5=b4.a6(0,B.KH)
$.U()
w=A.L()
w.r=D.lZ.j(0.18+0.1*b3).gp(0)
b6.O(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a6(0,D.eEP)
u=A.L()
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
if(m<1)for(o=new A.aJ(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),i=new A.vf(o,!1,n);i.A();){h=i.c
if(h===0||i.f)A.bi(A.k_(b1));--h
g=new A.Cb(i,h)
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
a1.b=B.ae
a1.c=3
b6.af(new A.aJ(l,d,b0,new A.b7([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aJ(l,j.b,j.c,b0,A.bt(k,!0,r)),n=A.a([],q),k=new A.vf(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.A();){a0=k.c
if(a0===0||k.f)A.bi(A.k_(b1));--a0
k.jZ()
a1=n[a0].b
a1===$&&A.d()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.U()
a4=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a4.r=D.Ho.gp(0)
a4.b=B.ae
a4.c=h
a4.d=B.bH
b6.af(new A.aJ(l,a2,b0,new A.b7([new A.Cb(k,a0),0,a1*m,!0]),a3),a4)
k.jZ()
a4=n[a0].b
a4===$&&A.d()
a4=a4.a.length()
k.jZ()
a5=n[a0].Xb(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.c1(new A.m(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a3.r=B.bf.gp(0)
b6.c3(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iU(D.fKI,B.a8,B.cb,new A.k3(1),b0,b0,b0,b0,B.cc,b0,B.cK)
a8.eL()
a8.a5(b6,new A.m(w*(0.15+p*0.14),b2-B.n.F(p,3)*14))}},
aD(d){return!0}}
C.aAL.prototype={
R(){return new C.aAM(A.aR(x.S))},
gd8(){return this.d}}
C.aAM.prototype={
gkY(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hX3(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Z(){this.a4()
this.bcp()},
t(){var w=this.ch
if(w!=null)w.a2(0)
this.a3()},
bcp(){var w=this.ch
if(w!=null)w.a2(0)
this.ch=A.d5(B.tG,new C.cJu(this))},
btF(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkY()[v.e]
if(w.e[d]===w.b)v.l(new C.cJC(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.l(new C.cJD(v,d))
A.cD(B.j5,new C.cJE(v))}},
d1N(){var w=this
if(!w.as&&w.f<w.gkY()[w.e].d.length)w.l(new C.cJF(w))},
kT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkY()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a2(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.l(new C.cJG(t,s))
w=5
return A.b(C.Ce(t.a.d,s),$async$kT)
case 5:t.y=f
q=t.a
w=6
return A.b(C.Cf(q.d,q.c.a,"who",t.r),$async$kT)
case 6:t.ax=f
if(t.c!=null)t.l(new C.cJH())
w=1
break
case 4:t.l(new C.cJI(t))
t.bcp()
case 1:return A.h(u,v)}})
return A.i($async$kT,v)},
C(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.c(""+a0.w+" of "+a0.gkY().length+" guessed",a2,a2,a2,a2,a2,a2,B.qG,a2,a2,a2),a2,a2,a2)
v=A.at(A.c(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Xl,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.u0(a1,A.cj(A.a([D.bhU,w,v,B.aN,new C.IZ(u,t,a0.ax,a2),B.aN,A.at(C.uR("Back to the games",new C.cJw(a3),B.d0,B.ko,D.fM),a2,a2,a2)],x.p),a2,a2,B.ad,a2,a2,B.ah,!1),B.fh,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkY()
u=x.X
t=x.p
w=A.a([A.c("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.M3,B.K,a2,a2),B.S,A.at(A.l5(new C.cJx(a0,r),a2,B.b1,B.hA,a2,a2,new A.bq(a2,s,u),x.i),a2,a2,a2),B.az],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aQ(16,16)
l=new A.ax(B.d0,2,B.r,-1)
k=o+1
w.push(new A.rx(new A.bq(0,1,u),new C.cJy(),A.q(a2,new A.c_(B.aJ,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.r2(A.c(""+k,a2,a2,a2,a2,a2,a2,B.oA,a2,a2,a2),D.lY,a2,12,a2),B.ar,new A.bu(1,B.b9,A.c(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fXL,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.r5,a2,new A.bE(l,l,l,l),new A.bc(m,m,m,m),a2,a2,B.m),a2,a2,a2,B.cA,B.bg,a2,a2,a2),B.b1,B.j5,a2,new A.b9("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bK(!1,D.hoP,a2,a2,!0,a2,a2,a2,a0.gd1M(),a2,a2),a2,a2,a2))
w.push(B.N)
if(a0.as){u=D.lZ.j(0.2)
q=A.n(16)
p=A.K(D.lZ,B.r,1)
n=a0.e
m=A.c("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fT,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.w(A.a([m,B.S,C.uR(v,a0.gqH(a0),B.d0,B.jH,D.fM)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.m),a2,a2,a2,a2,B.bD,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dA:B.d0.j(0.2)
g=new A.aQ(16,16)
l=new A.ax(n.q(0,o)?B.fs:B.d0,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bX:B.c
d=n.q(0,o)?B.yd:a2
t.push(new A.rx(new A.bq(0,i,u),new C.cJz(),A.aA(a2,A.q(a2,A.c(f,a2,a2,a2,a2,a2,a2,new A.H(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.ah_,new A.p(h,a2,new A.bE(l,l,l,l),new A.bc(g,g,g,g),a2,a2,B.m),a2,a2,a2,a2,B.jF,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cJA(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b1,B.mw,a2,new A.b9("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bX(B.fX,t,B.bq,a2,10,10))}return new C.u0(a1,A.cj(w,a2,a2,B.aoN,a2,a2,B.ah,!1),B.fh,a2)}}
C.aBK.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.aJf.prototype={
b0(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdP())
w.bd$=null
w.a3()}}
C.ahg.prototype={
atf(d){},
atL(){var w=this,v=w.qo(new C.fik(w))
v.fW(0)
w.Nc$!==$&&A.aT()
w.Nc$=v}}
C.aNa.prototype={
gbq0(d){var w=this.c
return B.a.av(w,0,Math.min(this.d,w.length))},
Xj(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.c=d
w.d=0
w.b=A.d5(E.a1T,new C.fsK(w))},
bw1(d){var w=this,v=w.b
if(v!=null)v.a2(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a2(0)}}
C.anS.prototype={
R(){return new C.anT(new C.ao1(),A.a([],x.t),new A.eP(0,$.ay()),$,0,null,null)},
gd8(){return this.d}}
C.anT.prototype={
gO1(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHH(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghm(d){var w,v=this,u=v.e
if(u===$){w=C.NI(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqP(){var w=this.r
return w===$?this.r=new C.aNa(new C.bWl(this)):w},
gas5(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gO1()[v].c)u.push(1)
return u.length},
gbpe(){var w=this.ghm(0)
return w.gA7()==null?"Elder":B.a.i(w.gA7().b)},
Z(){this.a4()
this.atL()},
t(){var w,v=this
v.gqP().t()
v.f.t()
w=v.Nc$
w===$&&A.d()
w.t()
w=v.qv$
w.V$=$.ay()
w.W$=0
v.bzL()},
cRg(){var w=this
w.l(new C.bWi(w))
w.gqP().Xj(w.gO1()[w.x].a)},
Mp(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqP()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.qv$.a
v.ax=u
v.ay=u+1
v.l(new C.bWg())
A.cD(B.hA,new C.bWh(v))},
btB(){var w=this.gas5(0)/this.gO1().length*100
if(w>=90)return D.fhb
if(w>=75)return D.feT
if(w>=60)return D.f4X
if(w>=45)return D.f8z
return D.f_9},
C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.czf()
w=A.bS(0,new A.ea(A.b4(m,m,m,new C.bwj(n,n.qv$),B.aA),m),0,0,0)
if(!n.Q){v=D.r5.j(0.96)
u=A.n(20)
t=A.K(B.d0,B.r,3)
u=A.q(m,A.w(A.a([A.c("Elder "+n.gbpe()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.b_5,B.K,m,m),B.S,C.uR("Start the test",n.gCO(),B.d0,B.jm,D.fM)],x.p),B.l,m,B.e,B.P,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.m),m,m,m,m,B.bD,m,m,m)
v=u}else{v=n.x
u=n.gO1()
v=A.c("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.b_7,m,m,m)
if(n.Q){t=n.gqP()
t=t.d<t.c.length}else t=!1
if(t)u=D.fD8
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aQ(10,10)
o=new A.ax(D.Cw,4,B.r,-1)
s.push(A.aA(m,A.q(m,A.c(q[r],m,m,m,m,m,m,D.fOz,B.K,m,m),B.f,m,D.ah_,new A.p(D.bkP,m,new A.bE(o,o,o,o),new A.bc(p,p,p,p),m,m,B.m),m,m,m,m,B.PH,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bWj(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bX(B.fX,s,B.bq,new A.b9("o"+t,x.W),8,8)}u=A.w(A.a([v,B.aj,A.p0(u,B.nm,A.qd(),B.b1,B.b1,A.Mg())],x.p),B.l,m,B.e,B.P,0,B.p)
v=u}return new C.u0("Village School",new A.am(B.a0,m,B.ac,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fh,m)},
czf(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.btB(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gO1()[v].c)g.push(v)
u=A.n(22)
t=A.K(B.d0,B.r,4)
s=A.c(j.a.c.b,i,i,i,i,i,i,D.fTb,B.K,i,i)
r=A.c("Signed by Elder "+j.gbpe(),i,i,i,i,i,i,D.fRO,i,i,i)
q=x.p
p=A.a([A.c(h.a,i,i,i,i,i,i,D.fX6,i,i,i),D.eRG],q)
o=A.c(h.b,i,i,i,i,i,i,D.fZ6,i,i,i)
n=j.gas5(0)
m=j.gO1()
u=A.q(i,A.w(A.a([D.h9E,B.at,s,r,B.S,new A.am(B.z,i,B.ac,B.t,p,i),o,B.aj,A.c(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.adZ,i,i,i),B.N,D.avY],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(D.r5,i,t,u,i,i,B.m),i,i,i,i,B.f7,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.az,new C.IZ(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aN,D.hpV,B.N],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.I)(g),++l){v=g[l]
r=new A.aQ(14,14)
k=new A.ax(B.by,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.w(A.a([A.c(p.a,i,i,i,i,i,i,B.h6,i,i,i),B.at,A.c("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fUq,i,i,i),A.c(p.d,i,i,i,i,i,i,D.fWI,i,i,i)],q),B.B,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.dA,i,new A.bE(k,k,k,k),new A.bc(r,r,r,r),i,i,B.m),i,i,i,B.cA,B.bg,i,i,i))}B.d.u(s,u)}s.push(B.az)
s.push(A.at(C.uR("Back to the games",new C.bWc(j),B.d0,B.ko,D.fM),i,i,i))
return new C.u0("Village School",A.cj(s,i,i,B.bR,i,i,B.ah,!1),B.fh,i)}}
C.bwj.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.qv$.a
a0.Db(e.f.NM(a1))
w=C.hrS(a1)
v=a0.c
J.bs(v.save())
v.translate(w.a,w.b)
a0.bW(0,w.c)
if(e.Q){u=e.gqP()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.d40[s]-6
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=D.H9.gp(0)
a0.aE(new A.a5(u,340,u+12,450),r)}u=A.bx(D.abU.cu(10),B.im)
$.U()
r=A.L()
r.r=D.Cw.gp(0)
a0.aq(u,r)
r=A.bx(D.abU,B.iE)
u=A.L()
u.san(A.jT(new A.m(30,96),new A.m(420,346),D.dq3,f,B.w,f))
a0.aq(r,u)
q=new A.e7()
q.cW(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.c1(new A.m(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.025).gp(0)
a0.c3(o,r)}u=A.L()
u.r=I.alz.gp(0)
a0.aE(new A.a5(30,354,420,362),u)
u=A.L()
u.r=B.aS.gp(0)
a0.aE(D.fuo,u)
u=A.L()
u.r=B.bO.gp(0)
a0.aE(D.fus,u)
u=A.bx(D.fui,B.hu)
r=A.L()
r.r=D.a0e.gp(0)
a0.aq(u,r)
n=B.h.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqP().gbq0(0)
m=A.h2(f,B.cK,f,7,f,A.cW(f,f,f,f,f,f,f,f,f,D.h0s,u+(t?"|":"")),B.a8,B.cb,f,B.e6,B.cc)
m.nM(346)
J.bs(v.save())
u=A.hS(D.abU)
r=$.lI()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hS(new A.a5(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.m(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bx(new A.a5(u,r,u+40,r+90),B.h5)
u=A.L()
u.r=D.bB6.gp(0)
a0.aq(r,u)}}else{m=A.h2(f,B.cK,f,f,f,D.fKY,B.K,B.cb,f,B.e6,B.cc)
m.nM(340)
m.a5(a0,new A.m(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.h.F(u+p/8,1)
o=B.n.F(e.gqP().d*9,310)
k=Math.sin(p+r)
j=new A.ar(B.V,B.R,B.X,B.Y,B.W)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.O(new A.m(70+o+k*6,166+l*70),1.6,j)}u=e.ghm(0).gA7()
i=(u==null?f:u.c)===D.p3?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.fil(d,a0,i,t,h,D.eFZ)),new A.y(520,new C.fim(a0,d,t)),new A.y(575,new C.fin(a0,d,t)),new A.y(585,new C.fio(this,a0,d,t)),new A.y(615,new C.fip(this,t,a0,d,h))],x.E)
B.d.b_(g,new C.fiq())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cgy(d,e){var w,v,u,t,s,r,q,p=$.U(),o=A.a([],x.v),n=new A.aJ(p.r,B.ak,null,null,o)
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
aD(d){return!1}}
C.anQ.prototype={
R(){return new C.anR(new C.ao1(),A.S(x.S,x.i),new A.eP(0,$.ay()),$,0,null,null)},
gd8(){return this.d}}
C.anR.prototype={
gkY(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hVY(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gja(){var w=this.z
return w===$?this.z=this.GG(0):w},
gaOn(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.GG(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.c8(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.GG(0):r).length);++v}s.Q=w
r=w}return r},
GG(d){var w,v,u,t,s=this.gkY()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e7()
u.cW(this.a.e+d*7)
B.d.e_(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.eJ(u,new C.bVZ())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a4()
this.atL()},
t(){var w,v=this
v.e.t()
w=v.Nc$
w===$&&A.d()
w.t()
w=v.qv$
w.V$=$.ay()
w.W$=0
v.bzK()},
atf(d){var w,v,u,t,s,r=this,q=r.gja().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.c8(u===$?r.z=r.GG(0):u,v)
s=r.gaOn()
s[v]=s[v]+(450*(t+0.5)/q-r.gaOn()[v])*Math.min(1,w)}},
d7f(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gja().length)return
w=v.y
if(w===-1){v.l(new C.bW9(v,d))
return}if(w===d){v.l(new C.bWa(v))
return}v.l(new C.bWb(v,B.d.c8(v.gja(),v.y),d,B.d.c8(v.gja(),d)))},
cRZ(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.GG(0):u).length))break
t=s.gkY()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.GG(0):u)[v]]===v);++v}s.l(new C.bW4(s,B.d.cE(w,new C.bW5())))},
kT(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkY().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.l(new C.bW6(t,s))
w=5
return A.b(C.Ce(t.a.d,s),$async$kT)
case 5:t.x=f
q=t.a
w=6
return A.b(C.Cf(q.d,q.c.a,"lineup",t.r*10),$async$kT)
case 6:t.ch=f
if(t.c!=null)t.l(new C.bW7())
w=1
break
case 4:t.l(new C.bW8(t))
case 1:return A.h(u,v)}})
return A.i($async$kT,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.c(""+l.r+" of "+l.gkY().length+" lines right",k,k,k,k,k,k,B.qG,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.u0("Line Up",A.cj(A.a([D.ahU,w,B.aN,new C.IZ(v,u,l.ch,k),B.aN,A.at(C.uR("Back to the games",new C.bW0(d),B.d0,B.ko,D.fM),k,k,k)],x.p),k,k,B.ad,k,k,B.ah,!1),B.fh,k)}w=A.a([],x.t)
for(t=0;v=l.gkY(),t<v[l.f].d.length;++t)w.push(t)
B.d.b_(w,new C.bW1(l))
u=A.bS(0,A.cg(new C.bW2(l)),0,0,0)
s=l.f
r=A.c("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.b_7,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.w(A.a([r,A.c(s.a,k,k,k,k,k,k,D.fTE,B.K,k,k),A.c(s.b,k,k,k,k,k,k,D.fVX,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.v.j(0.7)
o=A.n(16)
n=l.ax
m=A.K(n?D.lZ:G.nS,B.r,2)
r.push(A.q(k,A.c(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.O(w,new C.bW3(l),x.cM).aJ(0,", then ")+".",k,k,k,k,k,k,D.fY9,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.m),k,k,k,B.d3,B.bg,k,k,1/0))}if(!l.at)r.push(C.uR("That is my line!",l.gcRY(l),B.d0,B.h2,D.fM))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uR(w,l.gqH(l),B.d0,B.jH,D.fM))}return new C.u0("Line Up",new A.am(B.a0,k,B.ac,B.t,A.a([u,s,A.ao(12,A.w(r,B.l,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.fh,k)}}
C.bmE.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.qv$.a
c7.Db(c5.e.NM(c8))
w=C.hrS(c8)
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
q=A.L()
q.r=D.a0e.gp(0)
q.b=B.ae
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
m.r=[B.d0,G.nS,D.lZ,B.aH][B.n.F(p,4)].gp(0)
c7.af(k,m)}this.b4h(c7,"OLDEST",D.eGX,B.d0)
this.b4h(c7,"YOUNGEST",D.eGp,B.bf)
t=A.bx(D.fuc,B.h5)
s=A.L()
s.r=D.H9.gp(0)
c7.aq(t,s)
s=A.bx(D.fub,B.iE)
t=A.L()
t.r=D.Cw.gp(0)
c7.aq(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.b_(t,new C.dxI())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.I)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.c8(a1===$?c5.z=c5.GG(0):a1,f)
o=c5.gaOn()[f]
a3=c5.y===f
a4=a3?Math.abs(Math.sin(j))*10:0
a5=k.h(0,f)
if(a5!=null&&c6<a5)a4+=Math.sin((1-(a5-c6)/0.5)*3.141592653589793)*14
a6=c5.at&&c5.gkY()[c5.f].e[f]===a2
a7=c5.at&&!c5.ax&&!a6
a8=c5.gkY()
a9=a8[c5.f].c
b0=a9.length>f?a9[f]:f
if(l)b1=c5.at&&a6
else b1=!0
b2=Math.max(0,Math.sin(m+f))
if(a3){$.U()
a9=new A.ar(B.V,B.R,B.X,B.Y,B.W)
a9.r=B.d0.j(0.22+0.1*Math.sin(e)).gp(0)
c7.O(new A.m(o,520),54,a9)}a9=D.duf[B.n.F(b0,6)]
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
else b9=a3?D.eJ3:c4
if(b1)c0=new A.m(3+b2*8,-56)
else if(h&&a7)c0=D.aPy
else c0=a3?new A.m(30,-104+Math.sin(e)*5):c4
C.Tx(c7,new A.m(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.KK,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iU(new A.eG(a8,c4,c4,B.cV,c4,c4,c4,c4,c4,c4,D.fRi),B.a8,B.cb,new A.k3(1),"\u2026",c4,1,c4,B.cc,c4,B.cK)
c1.nM(q)
c2=A.bx(A.c1(new A.m(o,650),24,c1.b.c+16),B.h5)
$.U()
a8=new A.ar(B.V,B.R,B.X,B.Y,B.W)
if(a6)a9=B.iN
else a9=a7?B.tz:D.r5
a8.r=a9.gp(0)
c7.aq(c2,a8)
a8=new A.ar(B.V,B.R,B.X,B.Y,B.W)
if(a6)a9=D.lZ
else a9=a7?G.nS:D.lY
a8.r=a9.gp(0)
a8.b=B.ae
a8.c=2
c7.aq(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.m(o-a9/2,650-a8.gb4(a8)/2))
c3=new A.iU(new A.eG(""+(a2+1),c4,c4,B.cV,c4,c4,c4,c4,c4,c4,D.fRC),B.a8,B.cb,new A.k3(1),c4,c4,c4,c4,B.cc,c4,B.cK)
c3.eL()
c3.a5(c7,new A.m(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.h.F(p*53+Math.sin(c5+p)*20,450)
q=B.h.F(t+p*37,420)
J.bs(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.c1(B.J,4,8)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=[B.d0,G.nS,D.lZ,B.aH,B.c][B.n.F(p,5)].gp(0)
c7.aE(q,m)
v.restore()}v.restore()},
b4h(d,e,f,g){var w,v,u=null,t=A.h2(u,B.cK,u,u,u,A.cW(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Ev,u,u),e),B.a8,B.cb,u,B.e6,B.cc)
t.eL()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aI(0,new A.m(v/2,w.gb4(w)/2)))},
aD(d){return!1}}
C.a3k.prototype={
a9(){return"_Trip."+this.b}}
C.anM.prototype={
R(){return new C.anN(D.Z4,new A.eP(0,$.ay()),$,0,null,null)},
gd8(){return this.d}}
C.anN.prototype={
gEq(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bHH(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghm(d){var w,v=this,u=v.e
if(u===$){w=C.NI(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqP(){var w=this.f
return w===$?this.f=new C.aNa(new C.bVL(this)):w},
gVg(){var w=this.ghm(0)
return w.gA7()==null?"Grandma":B.a.i(w.gA7().b)},
Z(){this.a4()
this.atL()},
t(){var w,v=this
v.gqP().t()
w=v.Nc$
w===$&&A.d()
w.t()
w=v.qv$
w.V$=$.ay()
w.W$=0
v.bzJ()},
atf(d){var w,v,u,t=this
if(t.r!==D.afI)return
w=B.dS.aA(0,B.h.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gEq()
if(v+1>=u.length){t.r=D.afJ
t.Yh()}else{++t.w
t.ay=!1
t.r=D.Z5
t.gqP().Xj(u[t.w].a)}if(t.c!=null)t.l(new C.bVJ())}},
Yh(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Yh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqP().Xj("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gEq().length
r=C.bK0(t,u.z,s)
u.as=r
w=2
return A.b(C.Ce(u.a.d,r),$async$Yh)
case 2:u.at=e
s=u.a
w=3
return A.b(C.Cf(s.d,s.c.a,"journey",u.x*10),$async$Yh)
case 3:u.ch=e
if(u.c!=null)u.l(new C.bVD())
return A.h(null,v)}})
return A.i($async$Yh,v)},
buU(){this.aXe()},
aXe(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.afI
if(w.c!=null)w.l(new C.bVE())},
Mp(d){var w,v,u,t,s=this
if(s.r!==D.Z5)return
w=s.gEq()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.l(new C.bVI(s,d,v))
u=s.gqP()
t=s.w
u.Xj(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cXd(){if(this.r!==D.C4)return
this.aXe()},
C(d){var w,v,u,t=this,s=null,r=A.bS(0,new A.ea(A.b4(s,s,s,new C.bm3(t,t.qv$),B.aA),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gEq().length;++w){v=t.w
if(w<v||t.r===D.afJ)v=B.d0
else v=w===v?B.c:B.aT
u=new A.aQ(4,4)
p.push(new A.bu(1,B.b9,A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bc(u,u,u,u),s,s,B.m),s,7,s,B.xm,s,s,s,s),s))}p.push(B.b6)
p.push(D.hbk)
return new C.u0("Safari Journey",new A.am(B.a0,s,B.ac,B.t,A.a([r,A.ao(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.cqH(),s,s,10,10,s,s)],q),s),B.fh,s)},
cqH(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bVH(o),l=D.r5.j(0.96),k=A.n(22),j=A.K(B.d0,B.r,3)
switch(o.r.a){case 0:w=A.w(A.a([A.c("A long drive to the village of Elder "+o.gVg()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.b_5,B.K,n,n),B.S,C.uR("Start the journey",o.gbuT(),B.d0,D.bW2,D.fM)],x.p),B.l,n,B.e,B.P,0,B.p)
break
case 3:w=D.bht
break
case 1:w=o.w
v=o.gEq()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aQ(14,14)
p=new A.ax(D.lY,2.5,B.r,-1)
t.push(A.aA(n,A.q(n,A.c(r[s],n,n,n,n,n,n,D.aZn,B.K,n,n),B.f,n,D.ah7,new A.p(D.amM,n,new A.bE(p,p,p,p),new A.bc(q,q,q,q),n,n,B.m),n,n,n,n,B.xh,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bVF(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.w(A.a([w,B.N,A.bX(B.bG,t,B.bq,n,8,8)],u),B.B,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gEq().length?"Drive home":"Drive on"
v=A.w(A.a([w,B.N,new A.bH(B.a9,n,n,C.uR(v,o.gcXc(),B.d0,B.jH,D.fM),n)],x.p),B.B,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gVg()),B.N,A.c(""+o.x+" of "+o.gEq().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aZH,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aTi(v)
u=C.aTi(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.c(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.adZ,n,n,n))}w.push(B.N)
w.push(A.at(C.uR("Back to the games",new C.bVG(o),B.d0,B.ko,D.fM),n,n,n))
w=A.w(w,B.B,n,B.e,B.P,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.p(l,n,j,k,D.aGA,n,B.m),n,n,n,n,B.bg,n,n,n)}}
C.bm3.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.qv$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gEq(),d0=B.h.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.afI,d2=c7*0.5
c8=A.ap(D.bml,D.bxi,d0)
c8.toString
w=A.ap(D.a_q,G.akj,d0)
w.toString
v=A.ap(B.v1,D.bvD,d0)
v.toString
$.U()
u=A.L()
t=x.O
u.san(A.jT(B.J,new A.m(0,d2),A.a([c8,w,v],t),G.a6r,B.w,c3))
d3.aE(new A.a5(0,0,0+c6,0+c7),u)
s=new A.m(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.L()
u.san(A.wF(s,60,A.a([D.bw1,B.L],t),c3,B.w,c3,c3,0))
d3.O(s,60,u)
u=A.L()
u.r=B.a_D.gp(0)
d3.O(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.h.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.n.F(r,3)*22
for(o=0;o<4;++o){n=D.dLh[o]
$.U()
u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=B.c.j(0.75).gp(0)
d3.O(new A.m(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.U()
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
k.r=A.ap(l===0?D.bkS:D.bAu,D.bq3,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cgz(d3,new A.m(B.h.F(B.h.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.U()
w=A.L()
v=A.ap(D.alT,D.Ho,d0)
v.toString
w.san(A.jT(new A.m(0,d2),new A.m(0,c7),A.a([v,D.bw3],t),c3,B.w,c3))
d3.aE(new A.a5(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.L()
w.r=D.bpg.gp(0)
d3.aE(new A.a5(0,a0,c6,a1),w)
w=A.L()
w.r=D.bA5.gp(0)
d3.aE(new A.a5(0,a0-3,c6,a0),w)
for(q=-B.h.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ar(B.V,B.R,B.X,B.Y,B.W)
u.r=I.O6.gp(0)
d3.aE(new A.a5(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.U()
b2=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b2.r=D.bkw.gp(0)
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
b0.r=D.byb.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b1.r=D.fM.gp(0)
d3.aE(new A.a5(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.H9.gp(0)
d3.aE(new A.a5(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bx(new A.a5(b0,a4,b0+60,a5),B.jL)
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.bBC.gp(0)
d3.aq(b5,b0)
b0=new A.ar(B.V,B.R,B.X,B.Y,B.W)
b0.r=D.Cw.gp(0)
b0.b=B.ae
b0.c=2
d3.aq(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iU(new A.eG(b6,c3,c3,B.cV,c3,c3,c3,c3,c3,c3,D.fPH),B.a8,B.cb,new A.k3(1),c3,c3,c3,c3,B.cc,c3,B.cK)
b7.eL()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.m(b4-b1/2,a2-b0.gb4(b0)/2))
if(a7)b8=c4.r===D.afJ
else if(r===c4.w){b0=c4.r
b0=b0===D.Z5||b0===D.C4
b8=b0}else b8=!1
if(a7){b0=c4.ghm(0).gA7()
b9=(b0==null?c3:b0.c)===D.p3?1:0}else b9=[0,3,6,7,2,1,4,5][B.n.F(r,8)]
b0=c4.gqP()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.C4
b0=c0?C.hRM(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Z5?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.m(40,-110+Math.sin(g)*10)
else a7=c0?new A.m(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Tx(d3,new A.m(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.m(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bM8(d3,new A.m(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.h.F(w+r/7,1)
$.U()
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.bzz.j(0.5*(1-c2)).gp(0)
d3.O(new A.m(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Z4)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.h.F(w+r/5,1)
t=Math.sin(r+c8)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.O(new A.m(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.C4&&c4.ax){b7=A.h2(c3,B.cK,c3,c3,c3,A.cW(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.d0,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.JE,c3,c3),"BEEP BEEP!"),B.a8,B.cb,c3,B.e6,B.cc)
b7.eL()
b7.a5(d3,new A.m(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cgz(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ap(D.bvx,D.boz,g)
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
t=A.L()
t.r=D.a0M.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d8f[r]
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=D.a0M.gp(0)
p.c=4
p.d=B.bH
d.ah(new A.m(w,t),new A.m(v+q*24,s),p)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=o.gp(0)
d.O(new A.m(v+q*26,u),10,p)}}else{w=e.a6(0,D.eJ0)
$.U()
v=A.L()
v.r=D.bky.gp(0)
v.c=4
d.ah(e,w,v)
v=A.c1(e.a6(0,D.eJ1),16,60)
w=A.L()
w.r=o.gp(0)
d.c3(v,w)}},
bM8(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Z4?0.045:0,a1=a2.c
J.bs(a1.save())
a1.translate(a3.a,a3.b+e)
a2.jA(0,a0)
for(w=0;w<2;++w){v=D.dCH[w]
u=d.ay&&d.r!==D.Z4&&v>0
J.bs(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.U()
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.bAl.gp(0)
a2.O(B.J,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.bsf.gp(0)
a2.O(B.J,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.bl.gp(0)
q.c=2
a2.ah(B.J,new A.m(s*9,t*9),q)}a1.restore()}p=A.rl(D.fuB,B.h5,B.h5,B.ia,B.hT)
$.U()
t=A.L()
t.san(A.jT(D.eF4,B.aaN,D.drw,G.a6r,B.w,f))
a2.aq(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ar(B.V,B.R,B.X,B.Y,B.W)
s.r=D.dkU[B.n.F(o,4)].gp(0)
a2.aE(new A.a5(t,-26,t+10,-19),s)}n=d.r===D.C4&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a5(s,-66,q,-36)
J.bs(a1.save())
a1.clipRRect(A.nn(A.bx(l,B.pq)),$.n_(),!0)
k=new A.ar(B.V,B.R,B.X,B.Y,B.W)
k.r=D.a_q.gp(0)
a2.aE(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.C4?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Tx(a2,new A.m(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aPp,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bx(l,B.pq)
i=new A.ar(B.V,B.R,B.X,B.Y,B.W)
i.r=D.amO.gp(0)
i.b=B.ae
i.c=2
a2.aq(j,i)}d=A.bx(D.Wr,B.pq)
t=A.L()
t.r=D.a_q.gp(0)
a2.aq(d,t)
J.bs(a1.save())
a1.clipRRect(A.nn(A.bx(D.Wr,B.pq)),$.n_(),!0)
C.Tx(a2,new A.m(D.Wr.gbF().a,-10),0,0,0.7,-0.1,f,f,D.aPp,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bx(D.Wr,B.pq)
d=A.L()
d.r=D.amO.gp(0)
d.b=B.ae
d.c=2
a2.aq(t,d)
d=A.L()
d.r=Ap.CW.gp(0)
a2.O(D.eHc,4,d)
d=A.L()
d.r=D.H9.gp(0)
a2.aE(D.fvK,d)
for(w=0;w<3;++w){v=D.dCJ[w]
d=A.bx(new A.a5(v,-96,v+28,-79),B.jL)
t=new A.ar(B.V,B.R,B.X,B.Y,B.W)
t.r=D.Ho.gp(0)
a2.aq(d,t)}a1.restore()},
aD(d){return!1}}
C.aDG.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bjB.prototype={}
C.aDI.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bjC.prototype={}
C.aDJ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bjD.prototype={}
C.a7S.prototype={
C(d){var w=null
return new A.a4(1/0,this.c,A.b4(w,w,w,new C.bma(w),B.aA),w)}}
C.bma.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dAw[B.n.F(n,6)]
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
aD(d){return!1}}
C.u0.prototype={
C(d){var w=null,v=x.p,u=A.a([A.aI(w,w,w,w,B.RJ,w,w,w,new C.bVC(d),w,w,w,w,w,w),A.E(A.c(this.c,w,1,B.a2,w,w,w,D.fMS,w,w,w),1)],v)
B.d.u(u,this.e)
return A.c6(w,D.a_a,A.q(w,A.bm(!0,A.w(A.a([D.cbj,new A.C(D.bMJ,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.bcJ,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.IZ.prototype={
C(d){var w=null,v=this.d,u=C.aTi(v),t=C.iBK(v),s=B.c.j(0.08),r=A.n(18),q=A.K(B.d0.j(0.6),B.r,1.5),p=A.a([A.c("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fPs,w,w,w)],x.p)
if(this.e)p.push(D.eLw)
p.push(B.aj)
p.push(A.c(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h6,w,w,w))
if(t!=null)p.push(new A.C(B.rm,A.c(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.BJ,w,w,w),w))
return A.q(w,A.w(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.m),w,w,w,w,B.bD,w,w,w)}}
C.Xh.prototype={
R(){return new C.bp_(A.S(x.N,x.S),B.n.F(Date.now(),1e5))},
d3d(d){return this.f.$1(d)},
gea(){return this.d}}
C.bp_.prototype={
gUg(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a4()
this.QO()},
QO(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$QO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bWn(u.a.d),$async$QO)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.dpo[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bWm(p,(o===$?u.d=q.c:o).a,r),$async$QO)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.l(new C.e8D(u,n))
return A.h(null,v)}})
return A.i($async$QO,v)},
v2(d){return this.ctR(d)},
ctR(d){var w=0,v=A.j(x.H),u=this,t
var $async$v2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a7(t,!1).ca(A.e4(new C.e8E(d),!1,null,x.H)),$async$v2)
case 2:u.r=B.n.F(Date.now(),1e5)
if(u.c!=null)u.QO()
return A.h(null,v)}})
return A.i($async$v2,v)},
gb9L(){var w,v,u,t=C.NI(this.gUg()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)s.push(B.a.i(w[u].b))
return s},
a4g(d){return this.cBc(d)},
cBc(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a4g=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.I)(d),++s)r.push(d[s].ak())
w=2
return A.b(u.a.d3d(r),$async$a4g)
case 2:if(u.c!=null)u.l(new C.e8F(u,r))
return A.h(null,v)}})
return A.i($async$a4g,v)},
Q6(d){return this.bV1(d)},
bV1(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Q6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hui(t.gUg())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Nq("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a7(s,!1).ca(A.e4(new C.e8B(q),!1,null,r)),$async$Q6)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.I)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bm(j,new C.e8C(p))
o=s.length
B.d.ck(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a4g(A.cI(s,0,A.dy(2,"count",x.S),r).de(0)),$async$Q6)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Q6,v)},
Zd(d,e){return this.bSA(0,e)},
bSA(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Zd=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e8A(e),o,null,!0,!0,x.y),$async$Zd)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hui(u.gUg()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.I)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a4g(o),$async$Zd)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Zd,v)},
ac8(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e8x(this,j):h
o=o?0.55:1
w=A.ap(g,B.v,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.n(20)
u=A.K(B.aT,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cy,12)],x.V)
s=x.p
r=A.a([A.c(d,p,p,p,p,p,p,B.Xg,p,p,p),B.aY],s)
q=A.n(10)
r.push(A.q(p,A.c(i,p,p,p,p,p,p,D.fNM,p,p,p),B.f,p,p,new A.p(B.i0,p,p,q,p,p,B.m),p,p,p,p,B.zO,p,p,p))
return A.aA(p,A.d3(A.q(p,A.w(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.aY,A.c(e,p,2,p,p,p,p,D.fVQ,p,p,p),B.cR,A.c(f,p,3,B.a2,p,p,p,D.fOx,p,p,p)],s),B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a6(B.aw,B.aD,B.w,w,p,p),B.m),p,p,p,p,B.xf,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
YH(d,e,f,g,h,i){return this.ac8(d,e,f,g,h,i,null)},
C(a2){var w,v,u,t,s=this,r=null,q=C.NI(s.gUg()),p=s.gUg(),o=C.aTi(s.e),n=C.hui(p),m=s.a.e&&J.aa(p.z)<2,l=new C.e8G(s),k=C.hVY(p,1).length,j=C.hW8(p,1).length,i=C.hX3(p,1).length,h=B.c.j(0.07),g=A.n(20),f=A.K(B.d0.j(0.5),B.r,1),e=A.c(o.b,r,r,r,r,r,r,K.adL,r,r,r),d=A.c(o.a,r,r,r,r,r,r,D.fTf,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.bd,A.E(A.w(A.a([d,A.c(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.Xy,r,r,r)],a1),B.B,r,B.e,B.i,0,B.p),1),A.w(A.a([A.c(""+s.e,r,r,r,r,r,r,B.qG,r,r,r),D.hhG],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.m),r,r,r,r,B.bD,r,r,r)
f=s.YH("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aB,new C.e8H(s,p),l.$1("kahoot"))
h=s.YH("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lY,new C.e8I(s,p),l.$1("fire"))
a0=s.YH("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.vf,new C.e8J(s,p),l.$1("catch"))
j=j!==0?new C.e8M(s,p):r
j=s.ac8("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hY,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e8N(s,p):r
i=s.ac8("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.lX,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.YH("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.ey,new C.e8O(s,p),l.$1("journey"))
k=k!==0?new C.e8P(s,p):r
k=A.a([g,B.aN,D.hlR,B.N,A.lj(0.98,A.a([f,h,a0,j,i,e,s.ac8("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ew,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.YH("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.de,new C.e8Q(s,p),l.$1("school"))],a1),2,12,12,r,B.eb,!0),B.df,A.A(A.a([D.bOz,A.c(""+n.length+" of 2",r,r,r,r,r,r,D.fNR,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.N],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.I)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aQ(18,18)
u=new A.ax(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.h22,B.bd,new A.bu(1,B.b9,A.w(A.a([A.c(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hk,r,r,r),A.c(""+v.garK(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.BJ,r,r,r)],a1),B.B,r,B.e,B.i,0,B.p),r)],a1)
if(v.garK(0).length>=2){f=D.lZ.j(0.2)
t=new A.ax(D.lZ,1,B.r,-1)
g.push(A.aA(r,A.q(r,A.V(B.fR,D.lZ,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e8R(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.d0.j(0.2)
t=new A.ax(B.d0,1,B.r,-1)
f=A.aA(r,A.q(r,A.V(B.jm,B.d0,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e8S(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fs.j(0.2)
t=new A.ax(B.fs,1,B.r,-1)
B.d.u(g,A.a([B.b6,f,B.b6,A.aA(r,A.q(r,A.V(B.et,B.fs,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bE(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e8T(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.c_(B.aJ,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bE(u,u,u,u),new A.bc(h,h,h,h),r,r,B.m),r,r,r,B.d3,B.bg,r,r,r))}if(s.a.e){j=m?new C.e8K(s):new C.e8L(a2)
i=A.n(18)
h=A.K(m?B.d0:B.aT,B.r,2)
g=m?B.d0.j(0.12):B.dA
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.q(r,A.at(A.c(f,r,r,r,r,r,r,A.l(r,r,m?B.d0:B.aE,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.m),r,r,r,r,B.Pw,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.hmP)
k.push(B.az)
k.push(D.avY)
return new C.u0("Family Games \xb7 "+p.b,A.cj(k,r,r,D.bIN,r,r,B.ah,!1),B.fh,r)}}
C.a19.prototype={
a9(){return"_KPhase."+this.b}}
C.anO.prototype={
R(){return new C.anP(D.b4m)},
gd8(){return this.e}}
C.anP.prototype={
t(){var w=this.at
if(w!=null)w.a2(0)
w=this.ax
if(w!=null)w.a2(0)
this.a3()},
fW(d){var w,v=this
v.l(new C.bVX(v))
w=v.at
if(w!=null)w.a2(0)
v.at=A.d5(B.fr,new C.bVY(v))},
aSD(){var w=this,v=w.ax
if(v!=null)v.a2(0)
w.l(new C.bVN(w))
v=w.at
if(v!=null)v.a2(0)
w.at=A.d5(B.fq,new C.bVO(w))},
Mp(d){var w
if(this.d!==D.afd)return
w=this.at
if(w!=null)w.a2(0)
this.b9H(d)},
b9H(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.h.S(500+500*B.h.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.l(new C.bVT(u,v,d))
u=v.ax
if(u!=null)u.a2(0)
v.ax=A.cD(B.tG,v.giK(v))},
cQz(d){var w=this
if(w.d!==D.YB)return
if(w.e+1>=w.a.w.length)w.a_0()
else{w.l(new C.bVU(w))
w.aSD()}},
a_0(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$a_0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a2(0)
p=u.x
t=u.a.w.length
s=C.bK0(p,u.w,t)
u.l(new C.bVQ(u,s))
w=2
return A.b(C.Ce(u.a.e,s),$async$a_0)
case 2:r=e
t=u.a
w=3
return A.b(C.Cf(t.e,t.f,t.r,u.f),$async$a_0)
case 3:q=e
if(u.c!=null)u.l(new C.bVR(u,r,q))
return A.h(null,v)}})
return A.i($async$a_0,v)},
cRp(){var w,v,u,t,s=this,r=s.a,q=new A.e7()
q.cW(r.w.length*31+B.a.ga_(r.f))
w=s.a.w.length*900
v=A.a([new A.aZ("You",s.f,!0)],x.bd)
r=A.B(s.a.x,x.N)
B.d.e_(r,q)
for(r=A.cI(r,0,A.dy(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bQ(r,r.gI(0),u.k("bQ<aj.E>")),u=u.k("aj.E");r.A();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.aZ(t,B.h.S(w*(0.35+q.ai()*0.5)),!1))}B.d.b_(v,new C.bVV())
return v},
C(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b4m===r){w=A.a([D.hi4,B.S,A.c(s,t,t,t,t,t,t,B.XG,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.c(v,t,t,t,t,t,t,D.fO_,t,t,t))
w.push(B.az)
w.push(A.c(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.BO,B.K,t,t))
w.push(B.ee)
w.push(C.uR("Play",u.gf5(u),B.d0,B.fR,D.fM))
w=A.at(new A.C(B.eA,A.w(w,B.l,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.b4n===r){w=A.at(A.c(""+u.z,t,t,t,t,t,t,D.fWn,t,t,t),t,t,t)
break A}if(D.afd===r||D.YB===r){w=u.cwv()
break A}if(D.b4o===r){w=u.cgA()
break A}w=t}return new C.u0(s,w,B.fh,t)},
cwv(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.YB,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.c(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aZc,j,j,j),B.aY],h)
f=k.r
if(f>=2)g.push(A.c("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.M3,j,j,j))
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
u=A.w(A.a([A.c(u,j,j,j,j,j,j,A.l(j,j,e?D.lZ:G.nS,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.N,A.c(k.a.w[k.e].d,j,j,j,j,j,j,D.fN0,B.K,j,j)],h),B.l,j,B.e,B.P,0,B.p)}else u=A.c(k.a.w[k.e].a,j,j,j,j,j,j,D.fYz,B.K,j,j)
w=A.E(A.q(j,A.at(u,j,j,j),B.f,j,j,new A.p(D.r5,j,v,w,j,j,B.m),j,j,j,j,B.f7,j,j,1/0),3)
v=A.a([],h)
for(u=k.giK(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bVS(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.n.F(t,4)
n=D.aGc[o]
m=new A.aQ(16,16)
l=new A.ax(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.c(D.aGw[o],j,j,j,j,j,j,D.fP1,j,j,j),B.ar,new A.bu(1,B.b9,A.c(r[t],j,3,B.a2,j,j,j,D.fNW,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.auo)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.c2Q)
v.push(A.aA(j,new A.TO(A.q(j,new A.c_(B.aJ,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bE(l,l,l,l),new A.bc(m,m,m,m),W.aEy,j,B.m),j,j,j,j,B.eG,j,j,j),p,B.b1,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.aj,f,B.af,w,B.af,A.E(A.lj(1.45,v,2,10,10,j,B.eb,!1),4)],h)
if(i)h.push(D.eKK)
return new A.C(B.a2t,A.w(h,B.l,j,B.e,B.i,0,B.p),j)},
cgA(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cRp(),m=x.p,l=A.a([D.bgK,A.at(A.c(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.qG,o,o,o),o,o,o),A.at(A.c(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Xl,o,o,o),o,o,o),B.aN],m)
for(w=0;w<n.length;++w){v=n[w].c?B.d0.j(0.25):B.dA
u=new A.aQ(14,14)
t=n[w]
s=t.c
r=new A.ax(s?B.d0:B.by,1,B.r,-1)
q=A.c(w<3?D.drO[w]:""+(w+1),o,o,o,o,o,o,B.mf,o,o,o)
s=s?B.u:B.O
l.push(A.q(o,new A.c_(B.aJ,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a4(34,o,q,o),new A.bu(1,B.b9,A.c(t.a,o,o,o,o,o,o,new A.H(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.c(""+t.b,o,o,o,o,o,o,B.iY,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bE(r,r,r,r),new A.bc(u,u,u,u),o,o,B.m),o,o,o,B.cA,B.f3,o,o,o))}l.push(B.S)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.IZ(m,v,p.CW,o))
l.push(B.aN)
l.push(A.at(C.uR("Back to the games",new C.bVP(p),B.d0,B.ko,D.fM),o,o,o))
return A.cj(l,o,o,B.f7,o,o,B.ah,!1)}}
C.UX.prototype={
R(){return new C.anL(A.S(x.de,x.er))}}
C.anL.prototype={
gE5(){var w,v=this,u=v.d
if(u===$){w=C.hAk(v.a.c.ak())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
gm9(d){var w,v,u=this,t=u.e
if(t===$){w=u.gE5().b
v=$.ay()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.bd(w,B.bb,B.aP),v)}return t},
cjQ(d){return this.f.c0(0,d,new C.bVn(d))},
Z(){this.a4()
var w=this.gE5().c
if(w.length===0)w.push(C.hlw(null,0,20,""))},
t(){var w,v,u=this.gm9(0)
u.V$=$.ay()
u.W$=0
for(u=this.f,u=new A.ds(u,u.r,u.e);u.A();)for(w=J.aN(u.d);w.A();){v=w.gP(w)
v.V$=$.ay()
v.W$=0}this.a3()},
cQp(){if(this.gE5().c.length>=12)return
this.l(new C.bVo(this))},
jD(d){var w,v,u=this,t=u.gE5()
t.b=B.a.i(u.gm9(0).a.a)
w=t.garK(0)
if(t.b.length===0||w.length<2){u.c.M(x.q).f.T(D.fFW)
return}v=t.c
B.d.a7(v)
B.d.u(v,w)
v=u.c
v.toString
A.a7(v,!1).N(t)},
C(d){var w,v,u=this,t=null,s=new C.bVy(),r=x.p,q=A.a([A.bK(!1,D.h7c,t,t,!0,t,t,t,u.gbtM(u),t,t)],r),p=A.a([D.hmq,B.af,A.aO(t,B.M,!1,t,!0,B.t,t,A.aP(),u.gm9(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.am,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ad,t,t,t,t,t,t,t,t,t,t,t,B.h6,!0,B.a8,t,B.ao,t,t,t,t),B.az],r)
for(w=0;v=u.gE5().c.length,w<v;++w)B.d.u(p,A.a([new A.fo(new C.bVx(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uR("\uff0b Add a question",u.gcQo(),B.aT,t,B.c),t,t,t))
return new C.u0("Make your game",A.cj(p,t,t,D.bIK,t,t,B.ah,!1),q,t)}}
C.asY.prototype={
R(){return new C.aHh(A.a([],x._))},
bx(){return this.r.$0()},
qI(){return this.w.$0()},
gea(){return this.c}}
C.aHh.prototype={
Z(){var w,v
this.a4()
this.x4()
w=this.a
v=w.c
if(v.length!==0)C.a9C(v,w.e,w.d.w)},
wT(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hxe(r,t.e,!1,s.w,new C.eai(u),null,s),$async$wT)
case 2:w=3
return A.b(u.x4(),$async$wT)
case 3:return A.h(null,v)}})
return A.i($async$wT,v)},
a2n(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hxe(r,t.e,!0,s.w,new C.eah(u),null,s),$async$a2n)
case 2:w=3
return A.b(u.x4(),$async$a2n)
case 3:return A.h(null,v)}})
return A.i($async$a2n,v)},
x4(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$x4=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.BK(q.a.c),$async$x4)
case 7:p=e
if(q.c!=null)n=q.e||J.cM(p)
else n=!1
if(n)q.l(new C.eak(q,p))
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
return A.b(C.HS(q.a.c).d9(0,B.ri),$async$x4)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.l(new C.eal(q,o))
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
if(q.c!=null&&q.e)q.l(new C.eam(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$x4,v)},
Qs(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Qs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.M(s).f.T(D.fFw)
w=3
return A.b(C.HS(t.a.c),$async$Qs)
case 3:r=e
w=4
return A.b(C.haN(t.a.c,r),$async$Qs)
case 4:q=e
w=5
return A.b(C.HS(t.a.c),$async$Qs)
case 5:p=e
if(t.c==null){w=1
break}t.l(new C.eag(t,p))
o=t.c.M(s).f
s=A.c(q?"Family trees synced \u2014 "+J.aa(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.T(A.b2(null,null,null,q?B.dT:B.d9,null,B.t,null,s,null,B.lD,null,null,null,null,null,null,null,null,null,null))
t.a.qI()
case 1:return A.h(u,v)}})
return A.i($async$Qs,v)},
JA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iKD(l),$async$JA)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.ibA(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b3X(q,p.e,l,"Each family tree costs $"+B.h.a1(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$JA)
case 4:if(!e||t.c==null){w=1
break}l=B.n.v(1000*Date.now())
p=C.hRW(r)
o=Date.now()
n=t.a.c
m=new C.li(l,r.toUpperCase(),p,!0,B.M,D.EE,new A.W(o,0,!1),0,n,D.vu,B.co)
w=5
return A.b(C.a5f(n,m),$async$JA)
case 5:w=6
return A.b(t.x4(),$async$JA)
case 6:t.a.bx()
t.a.qI()
if(t.c==null){w=1
break}t.G_(m)
case 1:return A.h(u,v)}})
return A.i($async$JA,v)},
G_(d){return this.coY(d)},
coY(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$G_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.BK(u.a.c),$async$G_)
case 2:n=l.nU(k.dO(f,new C.eaj(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hf(m,new C.asS(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$G_)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a5f(u.a.c,o),$async$G_)
case 6:case 5:w=7
return A.b(u.x4(),$async$G_)
case 7:u.a.qI()
return A.h(null,v)}})
return A.i($async$G_,v)},
C(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=new C.uC(p)
if(r.e)return A.at(A.nq(q,p?B.bv:B.bl,q,q,q,q,q,q,q,q),q,q,q)
if(J.ch(r.d)){w=p?B.eo:B.c
v=A.n(15)
u=A.aG(!1,B.a3,!0,q,A.aM(!1,q,!0,A.q(q,D.c0j,B.f,q,q,new A.p(B.aZ.j(0.12),q,A.K(B.aZ,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cC,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcnY(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)
t=A.c("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.GU(A.q(q,A.w(A.a([u,B.aN,t,B.N,A.c("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.ee,A.bI(D.hpL,q,r.gaVY(),A.bp(B.bU,q,q,q,q,q,B.a2U,q,new A.bb(A.n(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.m),q,q,q,q,D.bLr,q,q,1/0),15,B.ag,1.05,D.af0,q)}w=J.aa(r.d)
v=x.p
w=A.a([A.c("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aY],v)
if(J.cM(r.d))w.push(A.aI(q,q,q,q,A.V(B.Aw,B.aZ,q,q,q,q),q,q,q,new C.eao(r),q,q,q,q,"Sync family trees with database",q))
if(J.cM(r.d))w.push(A.aI(q,q,q,q,A.V(B.As,B.aZ,q,q,q,q),q,q,q,r.gajc(),q,q,q,q,"Transfer / backup file",q))
w.push(A.df(E.avl,q,D.h4s,r.gaVY(),A.bp(B.bU,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.aa(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.GU(r.cMu(J.t(r.d,s),o),14,B.ag,1,D.af0,q))
B.d.u(w,u)}return A.w(A.a([p,B.az,A.w(w,B.l,q,B.e,B.i,0,B.p)],v),B.B,q,B.e,B.i,0,B.p)},
cMu(d,e){var w=null,v=e.a,u=v?B.eo:B.c,t=A.n(14),s=A.K((v?B.er:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.v.j(v?0.35:0.08),B.eJ,10)],x.V),q=A.n(14),p=A.q(w,D.c_n,B.f,w,w,new A.p(B.aZ.j(0.15),w,w,A.n(12),w,w,B.m),w,48,w,w,w,w,w,48),o=A.c(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gasK(),m=d.d?"":" \xb7 Public",l=d.y===D.le?" \xb7 View only":"",k=x.p
l=A.E(A.w(A.a([o,B.bs,A.c(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.B,w,B.e,B.i,0,B.p),1)
return A.q(w,A.aG(!1,B.a3,!0,w,A.aM(!1,q,!0,new A.C(B.bD,A.A(A.a([p,B.bd,l,A.V(B.Qo,v?B.bv:B.bl,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ean(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai),B.f,w,w,new A.p(u,w,s,t,r,w,B.m),w,w,w,w,w,w,w,1/0)}}
C.asS.prototype={
R(){return new C.aHe(A.a([],x._),A.aR(x.N),A.bcL())},
bx(){return this.r.$0()},
gea(){return this.c}}
C.aHe.prototype={
Z(){var w,v,u=this
u.a4()
u.d=u.a.w
u.afF()
w=u.a
v=w.c
if(v.length!==0)C.a9C(v,w.e,w.d.w)},
t(){var w=this.w
w.V$=$.ay()
w.W$=0
this.a3()},
a5t(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a5t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.zb("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.d()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e9J(r),s,null,!0,!0,x.y),$async$a5t)
case 3:if(e!==!0||t.c==null){w=1
break}t.Li()
t.l(new C.e9K(t,r))
w=4
return A.b(t.uZ(),$async$a5t)
case 4:t.a.bx()
t.zb(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a5t,v)},
cBP(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.d()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aS.U$.push(new C.e9E(w,f,d,e))},
aYk(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dB()
u.ej(w,v,0,1)
u.kf(q,q,1,1)
this.w.sp(0,u)},
bgp(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eV(new Float64Array(16))
q.ee(r)
w=q.Ea()
v=B.h.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dB()
t.ej(r,u,0,1)
t.kf(v,v,1,1)
t.ej(-r,-u,0,1)
t.j6(0,q)
s.sp(0,t)},
afF(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$afF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.BK(u.a.c),$async$afF)
case 2:t=s.nU(r.dO(e,new C.e95(u)))
if(t!=null&&u.c!=null)u.l(new C.e96(u,t))
return A.h(null,v)}})
return A.i($async$afF,v)},
zb(d){var w=null,v=this.c
if(v==null)return
v.M(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
wT(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.d()
w=2
return A.b(C.hxe(o,t,!1,r,new C.e9n(u),q.a,s),$async$wT)
case 2:n=A
m=J
w=3
return A.b(C.HS(u.a.c),$async$wT)
case 3:p=n.nU(m.dO(e,new C.e9o(u)))
if(p!=null&&u.c!=null)u.l(new C.e9p(u,p))
return A.h(null,v)}})
return A.i($async$wT,v)},
Li(){var w=this.e,v=this.d
v===$&&A.d()
w.push(v)
if(w.length>25)B.d.cP(w,0)},
uZ(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.a5f(t,s),$async$uZ)
case 2:return A.h(null,v)}})
return A.i($async$uZ,v)},
a3X(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a3X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.d()
if(!C.uS(q,t.a.c)){t.zb("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.iLW(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a3X)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.Li()
t.l(new C.e9D(t,r))
w=4
return A.b(t.uZ(),$async$a3X)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a3X,v)},
b6l(){var w=this.c
w.toString
A.a7(w,!1).ca(A.e4(new C.e9k(this),!1,null,x.H))},
a2D(){return this.cp_()},
cp_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a2D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.d()
if(!C.uS(m,t.a.c)){t.zb("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.Q(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.X(s,new C.e9A(),A.T(s).k("X<1>")).gI(0)
s=A.eA([0,2,3,4,5,6,8,r],x.S)
p=A.B(s,s.$ti.k("cl.E"))
B.d.fj(p)
s=t.c
s.toString
w=3
return A.b(A.bU(B.L,null,new C.e9B(n,t,new C.uC(m.ax.a===B.I),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a2D)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.Li()
t.l(new C.e9C(t,o))
w=6
return A.b(t.uZ(),$async$a2D)
case 6:case 5:if(o.a&&t.c!=null)t.b6l()
case 1:return A.h(u,v)}})
return A.i($async$a2D,v)},
Y_(d){return this.bHn(d)},
bHn(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
if(!C.uS(r,t.a.c)){t.zb("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e8U(t,d),r,null,!0,!0,x.P),$async$Y_)
case 3:s=f
if(s==null){w=1
break}t.Li()
t.l(new C.e8V(t,s))
w=4
return A.b(t.uZ(),$async$Y_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y_,v)},
a5O(d){return this.cOM(d)},
cOM(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a5O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.Q(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e9M(u,d,new C.uC(s.ax.a===B.I)),t,null,!0,!0,x.H),$async$a5O)
case 2:return A.h(null,v)}})
return A.i($async$a5O,v)},
cl2(d){var w=this,v=w.d
v===$&&A.d()
if(C.uS(v,w.a.c))w.Q7(d)
else w.a5O(d)},
alI(d,e){return this.cFU(d,e)},
cFU(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$alI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.Q(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e9G(new C.uC(r.ax.a===B.I),d,e),s,null,!0,!0,x.H),$async$alI)
case 3:case 1:return A.h(u,v)}})
return A.i($async$alI,v)},
JF(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$JF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.d()
w=o.y===D.le?3:5
break
case 3:w=6
return A.b(C.hjH(t.a.c),$async$JF)
case 6:s=e
o=t.a
r=C.hFc(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.alI(!s,!r),$async$JF)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aTo(o,t.a.c)){t.zb("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lH(o,"Cancel","Remove",q.y===D.le?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$JF)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aTm(t.a.c,t.d.a),$async$JF)
case 11:t.a.bx()
o=t.c
if(o==null){w=1
break}A.j8(o,null)
case 1:return A.h(u,v)}})
return A.i($async$JF,v)},
ad4(d){return this.bSR(d)},
bSR(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ad4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.d()
if(!C.uS(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aR(s,new C.e8W(p))){o=A.T(s)
p.a=A.nU(new A.cP(new A.X(s,new C.e8X(d),o.k("X<1>")),new C.e8Y(),o.k("cP<1,o>")))}q=p.a
if(q==null)q=d.d
t.Li()
t.l(new C.e8Z(t,s,d,q))
w=3
return A.b(t.uZ(),$async$ad4)
case 3:t.zb(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ad4,v)},
Q7(d){return this.bV5(d)},
bV5(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Q7=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.d()
w=!C.uS(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a5O(d),$async$Q7)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e92(t,d),r,null,!0,!0,x.P),$async$Q7)
case 6:s=f
if(s==null){w=1
break}t.Li()
t.l(new C.e93(t,s))
w=7
return A.b(t.uZ(),$async$Q7)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Q7,v)},
cMX(){var w=this,v=w.d
v===$&&A.d()
if(!C.uS(v,w.a.c))return
if(w.e.length===0)return
w.l(new C.e9L(w))
w.uZ()},
a05(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a05=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.d()
if(!C.aTo(n,t.a.c)){t.zb("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.Q(n)
s=$.ay()
r=new A.au(B.ay,s)
q=t.d.e
p=A.bt(new A.O(q,t.gcjw(),A.T(q).k("O<1,o>")).c2(0,new C.e9f()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e9g(t,new C.uC(n.ax.a===B.I),p,r),q,null,!0,!0,x.y),$async$a05)
case 3:o=e
r.V$=s
r.W$=0
if(o!==!0||t.c==null){w=1
break}t.Li()
t.l(new C.e9h(t,p))
w=4
return A.b(t.uZ(),$async$a05)
case 4:t.zb("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$a05,v)},
cjx(d){return B.a.i(d.toLowerCase())},
cnF(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.d()
u=C.uS(v,w)
t=r.d
s=C.iAd(t)
C.iKH(q,t.b,u,C.iAc(r.d),s,v.a,w)},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uC(n),l=p.d
l===$&&A.d()
l=l.f
w=new A.X(l,new C.e9T(),A.T(l).k("X<1>")).gI(0)
l=n?B.c8:B.hX
v=A.V(B.a43,n?B.bv:B.bl,o,o,o,18)
u=x.p
v=A.a([new A.C(Z.Dk,A.aM(!1,o,!0,new A.C(B.hC,A.A(A.a([v,B.b6,A.c("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e9U(p,d),o,o,o,o,o,o,o),o),new A.C(B.ob,p.c5m(m),o)],u)
if(p.d.y===D.le){t=B.ud.j(0.15)
s=A.n(12)
r=A.K(B.ud.j(0.45),B.r,1)
q=C.HQ(p.d,p.a.c)
v.push(new A.C(B.zG,A.q(o,A.A(A.a([D.c51,B.ar,A.E(A.c("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.m),o,o,o,o,B.hq,o,o,1/0),o))}u=A.a([A.c("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,15,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY],u)
if(C.uS(p.d,p.a.c)&&p.e.length!==0)u.push(new C.H4("Undo",B.qd,p.gcMW(),m,o,o))
u.push(new C.H4("Family Book",E.as1,p.gcnE(),m,B.v3,o))
u.push(new C.H4("Family games",B.ok,p.gcnQ(),m,B.aB,o))
if(C.uS(p.d,p.a.c))u.push(new C.H4("Display settings",B.E9,p.gcoZ(),m,B.b8,o))
u.push(new C.H4("Sync",B.As,p.gajc(),m,o,o))
t=p.d
if(t.y===D.le||C.aTo(t,p.a.c)){t=p.d.y===D.le?"Remove shared tree":"Delete tree"
u.push(new C.H4(t,B.et,p.gbT0(),m,B.fs,o))}if(C.uS(p.d,p.a.c))u.push(new C.H4("Add member",B.xA,new C.e9V(p),m,B.bU,o))
v.push(new A.C(S.aoQ,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gasK()===0){u=A.at(A.c("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cg(new C.e9W(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.V(n?B.a47:B.Qp,o,o,o,o,o)
v.push(A.at(A.hz(u,A.c(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e9X(p),o),o,o,o))}return A.c6(o,l,A.bm(!0,A.w(v,B.B,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c5m(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.d()
w=A.n(22)
v=A.a([new A.ac(0,B.G,B.h9.j(0.35),B.dv,18)],x.V)
u=A.n(22)
t=A.ao(-26,A.V(B.Aj,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aG(!1,B.a3,!0,m,A.aM(!1,m,!0,A.q(m,D.c8q,B.f,m,m,new A.p(B.c.j(0.16),m,A.K(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cC,!0,m,m,m,m,m,m,m,m,m,m,m,n.gajc(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)
r=n.d
q=A.c(r.b,m,1,B.a2,m,m,m,D.fQ8,m,m,m)
r=r.gasK()
p=n.d.gasK()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.w(A.a([q,B.bs,A.c(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.B,m,B.e,B.i,0,B.p),1)],o)
if(C.uS(n.d,n.a.c))p.push(A.aI(m,m,m,m,D.c5g,m,m,m,n.gcz4(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.j8:B.nt
r=r?"Private":"Public"
r=A.E(n.azj(q,"Privacy",r,n.a.d.w?n.gcLM():m),1)
q=A.E(n.azj(B.xF,"Tree code",n.d.c,new C.e94(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.aa,q,B.aa,A.E(n.azj(D.bWy,"Collaborators",p,n.gcap()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.le){s=B.c.j(0.15)
B.d.u(p,A.a([B.N,A.aG(!1,B.a3,!0,A.n(999),A.aM(!1,A.n(999),!0,new A.C(B.h0,A.A(A.a([A.V(B.ol,B.c,m,m,m,14),B.dU,A.c("View only",m,m,m,m,m,m,B.adp,m,m,m)],o),B.l,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.ai)],o))}return A.q(m,A.bv(u,new A.am(B.a0,m,B.ac,B.t,A.a([t,new A.C(B.HW,A.w(p,B.B,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.p(m,m,m,w,v,D.ccM,B.m),m,m,m,m,m,m,m,1/0)},
azj(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aG(!1,B.a3,!0,A.n(14),A.aM(!1,A.n(14),!0,new A.C(K.aqc,A.w(A.a([A.V(d,B.c,w,w,w,18),B.at,A.c(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.rX,A.c(f,w,1,B.a2,w,w,w,Aq.yg,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)}}
C.bjF.prototype={
C(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gar(r)&&s.c.length===0)return B.bK
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bjI(s,t),new A.av(w,v))],x.p)
r=r.gdV(r)
B.d.u(u,r.dS(r,new C.dmO(this),x.l))
r=s.c
B.d.u(u,new A.O(r,new C.dmP(this),A.T(r).k("O<1,x>")))
return new A.C(B.vq,new A.a4(w,v,new A.am(B.a0,t,B.ac,B.f,u,t),t),t)}}
C.Lr.prototype={}
C.H8.prototype={}
C.bjH.prototype={
gbp0(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aN4.prototype={}
C.bjI.prototype={
bUH(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.U()
v=A.L()
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
q=A.L()
q.r=B.c.gp(0)
d.O(new A.m(u,w),9,q)
q=A.L()
q.r=B.bE.gp(0)
d.af(t,q)},
bUE(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.b_(a0,new C.dn8())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aR(a0,new C.dn9(f))
t=new A.O(a0,new C.dna(f),A.T(a0).k("O<1,G>")).c2(0,new C.dnb()).cH(0,1/0,B.pH)
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
w=A.L()
w.r=B.bU.j(0.75).gp(0)
w.c=2.2
w.b=B.ae
w.d=B.bH
w.e=B.dQ
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.I)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bUE(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.I)(v),++t){r=v[t]
if(r.c)this.bUH(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bnv.prototype={
gcgC(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aGP
switch(w.c.a){case 0:return D.d6J
case 1:return D.dkO
case 2:return D.dES}},
gcgF(){var w=this.c,v=C.hR8(w.w),u=C.hR8(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
C(d){var w,v,u,t=this,s=null,r=A.Q(d).ax.a===B.I,q=t.gcgC(),p=t.c,o=A.bIA(p.f),n=t.gcgF(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gal(q).j(0.35),B.cO,10)],m),k=r?B.ax:B.c,j=A.K(r?B.ax:B.c,B.r,2)
if(o!=null)w=A.u4(B.z,s,B.cr,B.c1,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gal(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.z,A.c(v,s,s,s,s,s,s,A.l(s,s,B.d.gal(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a6(B.a5,B.a9,B.w,w,s,s),B.m),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.ic(w,B.ap),B.f,s,s,new A.p(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a6(B.aw,B.aD,B.w,q,s,s),B.a6),s,56,s,s,B.Dz,s,s,56)],v)
k=t.d
if(k>0){j=A.n(10)
w=A.K(r?B.ax:B.c,B.r,1.5)
l.push(A.ao(s,A.q(s,A.c(""+k,s,s,s,s,s,s,D.h07,s,s,s),B.f,s,s,new A.p(B.cj,s,w,j,s,s,B.m),s,s,s,s,D.bNm,s,s,s),s,s,s,-6,-4,s))}k=r?B.cx:B.c
j=A.n(8)
w=A.K(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.v.j(r?0.3:0.06),B.dP,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.c(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cx,s,s,s,s,s,s,s,s,u,s,s,B.C,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.c(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bl,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a4(84,112,A.w(A.a([new A.am(B.a0,s,B.ac,B.f,l,s),B.at,A.q(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,D.baT,new A.p(k,s,w,j,m,s,B.m),s,s,s,s,D.bNx,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.biI.prototype={
a5(d,e){var w,v,u,t,s
$.U()
w=A.L()
v=this.b
u=v?B.c:D.bo7
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.O(new A.m(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.bBL.prototype={
C(d){var w=this,v=null,u=new C.fyx(w),t=w.c,s=t?B.cx:B.c,r=A.n(12),q=u.$3(B.ii,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.by:B.fA,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.xC,"Zoom out",w.e)
return A.aG(!1,B.a3,!0,r,A.w(A.a([q,p,o,A.q(v,v,B.f,t?B.by:B.fA,v,v,v,1,v,v,v,v,v,22),u.$3(B.asJ,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dH,v,v,v,B.ai)}}
C.bqU.prototype={
C(d){var w=this,v=null,u=B.bU.j(0.15),t=A.K(B.bU,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.q(v,A.w(A.a([A.V(s?B.a47:B.Qp,B.bU,v,v,v,22),A.c("+"+w.c,v,v,v,v,v,v,D.fX2,v,v,v)],r),B.l,v,B.bc,B.i,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.aj,A.c(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fUO,B.K,v,v)],r)
if(s){t=A.a([B.aj],r)
s=w.d
B.d.u(t,new A.O(s,new C.f82(w),A.T(s).k("O<1,x>")))
B.d.u(u,t)}return new A.a4(84,v,A.w(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a1n.prototype={
R(){return new C.aFF()},
bx(){return this.Q.$0()},
gea(){return this.w}}
C.aFF.prototype={
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
if(t==null)w=C.iBL(w.r,w.f)
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
RI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$RI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hFc(p.y,p.w)
w=3
return A.b(A.m_(t.a.w,B.KC),$async$RI)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b3X(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$RI)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.ibB(p.y,p.w)
t.a.bx()
case 5:w=7
return A.b(A.E9(78,800),$async$RI)
case 7:q=e
if(q!=null&&t.c!=null)t.l(new C.dDu(t,q))
case 1:return A.h(u,v)}})
return A.i($async$RI,v)},
cgE(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
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
s=v.aIM(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).N(s)},
acG(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$acG=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dDt(r),s,null,!0,!0,x.y),$async$acG)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).N(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$acG,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===B.I,i=new C.uC(j),h=l.a.e,g=A.T(h).k("X<1>"),f=A.B(new A.X(h,new C.dDD(l),g),g.k("M.E"))
h=j?B.eo:B.c
g=A.n(22)
w=l.a.c
v=x.p
w=A.a([new A.C(D.bLM,A.c(w,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.fU(A.aM(!1,k,!0,new A.C(B.m6,A.V(B.et,B.pU,k,k,k,17),k),B.cC,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbPw(),k,k,k,k,k,k,k),k,"Delete member",k,k,k),k,k,k,0,k,k))
u=j?B.ke:B.iM
t=A.bIA(l.as)
if(l.as==null)s=A.V(B.q4,j?B.bv:B.bl,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.am(B.a0,k,B.ac,B.t,A.a([A.hq(u,t,s,k,42),A.ao(0,A.hq(B.bU,k,D.bZp,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcgB(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.d()
t=C.aFH(t,"Full name",B.mB,1,1,i,B.mT)
u=l.y
u===$&&A.d()
u=A.w(A.a([t,B.S,new C.bnt(i,u,new C.dDE(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.c("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bF7],q)
o=l.a.e
B.d.u(p,new A.O(o,new C.dDF(),A.T(o).k("O<1,eS<o?>>")))
o=x.bw
n=A.c("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.C,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bF9],q)
B.d.u(q,new A.O(f,new C.dDH(),A.T(f).k("O<1,eS<o?>>")))
o=A.w(A.a([t,B.aj,new C.afK(i,r,"Who is their parent?",p,new C.dDI(l),k,o),B.az,n,B.aj,new C.afK(i,m,"Who is their spouse / partner?",q,new C.dDJ(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.d()
q=C.aFH(q,"Birth date",D.arR,1,1,i,k)
m=l.r
m===$&&A.d()
m=C.aFH(m,"Birth place",B.a4o,1,1,i,k)
n=l.w
n===$&&A.d()
n=C.aFH(n,"Date of death (if deceased)",D.au1,1,1,i,k)
p=l.x
p===$&&A.d()
p=C.aFH(p,"Occupation",A8.Rx,1,1,i,k)
r=l.e
r===$&&A.d()
r=A.a([new A.am(B.z,k,B.ac,B.t,w,k),B.az,s,B.bx,new C.afL(i,"Identity",u,k),B.af,new C.afL(i,"Family links",o,k),B.af,new C.afL(i,"Life details",A.w(A.a([q,B.S,m,B.S,n,B.S,p,B.S,C.aFH(r,"Notes",B.lg,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.af,new C.aFG(i,"Child order",l.cpf(l.at),new C.dDK(l),new C.dDL(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hu6(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dDM(l):k
B.d.u(r,A.a([B.S,new C.aFG(i,"Visible in tree",u,w,new C.dDN(l),k)],v))}r.push(B.S)
w=j?B.ke:B.iM
u=A.n(14)
t=A.K(j?B.er:B.bP,B.r,1)
s=A.c("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.ji(k,B.bU,k,B.ag,k,new C.dDO(l),k,A.c("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.m),k,k,k,k,B.aos,k,k,k))
r.push(B.bx)
w=j?B.aS:B.ax
j=j?B.er:B.bP
r.push(A.A(A.a([A.E(A.dV(B.oB,new C.dDG(d),A.dj(k,k,k,k,k,k,k,k,k,w,k,k,B.cq,k,new A.bb(A.n(14),B.a1),new A.ax(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bI(D.fx3,k,l.gcgD(),A.bp(B.aZ,k,k,0,B.c,k,B.cq,k,new A.bb(A.n(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.at)
return A.em(B.fh,k,B.ag,h,new A.a4(420,k,A.cb(A.w(r,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),k),D.app,k,B.aoE,new A.bb(g,B.a1),k,k)},
cpf(d){var w=B.n.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.n.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.afL.prototype={
C(d){var w=null,v=this.c.a,u=A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ke:B.iM,s=A.n(16)
return A.w(A.a([new A.C(B.a2Y,u,w),A.q(w,this.e,B.f,w,w,new A.p(t,w,A.K(v?B.er:B.bP,B.r,1),s,w,w,B.m),w,w,w,w,B.bg,w,w,1/0)],x.p),B.B,w,B.e,B.i,0,B.p)}}
C.bnu.prototype={
C(d){var w,v=this,u=null,t=v.c.a,s=t?B.eo:B.c,r=A.n(12),q=A.K((t?B.er:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aO(u,B.M,!1,u,!0,B.t,u,A.aP(),v.d,u,u,u,u,u,2,A.bB(u,B.f_,u,B.tN,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.bl,u,u,u,u,u,u,u,u,u,u,u,B.cE,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.V(v.f,B.bU,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.am,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ad,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a8,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.m),u,u,u,u,u,u,u,u)}}
C.afK.prototype={
C(d){var w=this,v=null,u=w.c.a,t=u?B.eo:B.c,s=A.n(12),r=A.K((u?B.er:B.bP).j(0.85),B.r,1),q=A.V(B.tW,u?B.bv:B.bl,v,v,v,v),p=A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.eo:B.c
return A.q(v,new A.EX(A.a6N(v,o,A.c(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,v,v,v,B.cE,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.m),v,v,v,v,B.lc,v,v,v)}}
C.bnt.prototype={
C(d){var w=new C.dDP(this)
return A.A(A.a([w.$3(D.xo,"Male",B.Rf),B.aa,w.$3(D.p3,"Female",B.R_),B.aa,w.$3(D.zV,"Other",B.oi)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aFG.prototype={
C(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.ke:B.iM,r=A.n(14),q=A.K(t?B.er:B.bP,B.r,1),p=A.c(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,13,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.w(A.a([p,A.c(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.B,v,B.e,B.i,0,B.p),1),new C.aM6(u,B.xC,w.f,v),B.b6,new C.aM6(u,B.ii,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.m),v,v,v,v,B.es,v,v,v)}}
C.aM6.prototype={
C(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bU.j(0.12)
else w=s.c.a?B.eo:B.c
v=A.n(10)
u=A.n(10)
if(p)t=B.bU
else t=(s.c.a?B.bv:B.bl).j(0.4)
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,new A.a4(36,36,A.V(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.ai)}}
C.afM.prototype={
bYU(d){switch(d.a){case 0:return B.bU
case 1:return B.bE
case 2:return B.cG}},
bYV(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b1S(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Bw(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
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
return A.q(p,A.A(r,B.B,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.m),p,p,p,B.cA,B.zD,p,p,1/0)},
ahs(d,e){var w=null,v=this.e.a,u=A.c(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.C,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.ke:B.iM,s=A.n(16),r=A.K(v?B.er:B.bP,B.r,1)
return A.w(A.a([new A.C(B.a2Y,u,w),A.q(w,A.w(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.m),w,w,w,w,B.bS,w,w,1/0)],x.p),B.B,w,B.e,B.i,0,B.p)},
C(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hWR(r,q),o=q.c,n=t.bYU(o),m=A.bIA(q.f),l=t.e.a,k=l?B.eo:B.c,j=A.n(22),i=q.b,h=A.c(i,s,s,s,s,s,s,A.l(s,s,l?B.aS:B.ax,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.le?"Shared family tree \xb7 view only":"Member profile"
r=A.c(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.bl,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.K(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.J,12)],x.V)
u=n.j(0.12)
l=A.at(A.q(s,A.hq(u,m,m==null?A.V(B.q4,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a6),s,s,s,s,B.eH,s,s,s),s,s,s)
w=n.j(0.14)
v=A.n(20)
u=A.K(n.j(0.45),B.r,1)
v=A.at(A.q(s,A.c(t.bYV(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.m),s,s,s,s,B.lF,s,s,s),s,s,s)
u=x.p
i=A.a([t.Bw("Full name",i,B.mB)],u)
if(p>0)i.push(t.Bw("Child order","#"+p,B.R5))
r=A.a([h,B.at,r,B.aN,l,B.S,v,B.bx,t.ahs("Identity",i),B.af,t.ahs("Life details",A.a([t.Bw("Birth date",q.w,D.arR),t.Bw("Birth place",q.x,B.a4o),t.Bw("Date of death",q.y,D.au1),t.Bw("Occupation",q.z,A8.Rx)],u)),B.af,t.ahs("Family links",A.a([t.Bw("1. Parent",t.b1S(q.d),B.Il),t.Bw("2. Spouse",t.b1S(q.e),B.IC)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.u(r,A.a([B.af,t.ahs("Notes",A.a([t.Bw("Notes",q,B.lg)],u))],u))
r.push(B.bx)
r.push(A.bI(B.Md,s,new C.dDZ(d),A.bp(B.aZ,s,s,s,s,s,B.cq,s,new A.bb(A.n(14),B.a1),s,s,s)))
return A.eE(s,k,new A.cR(B.mm,A.cb(A.w(r,B.al,s,B.e,B.P,0,B.p),B.t,s,B.y,s,s,B.xj,s,s,B.ah),s),s,s,s,B.HZ,s,B.db,s,new A.bb(j,B.a1),s)}}
C.H4.prototype={
C(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.bl
w=t.j(v.f.a?0.14:0.08)
return new A.C(B.tQ,A.fU(A.aG(!1,B.a3,!0,A.n(8),A.aM(!1,A.n(8),!0,new A.a4(30,30,A.V(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.ai),u,v.c,u,u,u),u)}}
C.asV.prototype={
fa(){var w,v,u=this,t=x.N,s=A.S(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.T(w).k("O<1,a9<o,@>>")
w=A.B(new A.O(w,new C.cj_(),v),v.k("aj.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.j5(w,new C.cj0(),t,x.fO))
return s}}
C.asW.prototype={
R(){return new C.aHg(A.a([],x.bF))},
gd8(){return this.c}}
C.aHg.prototype={
Z(){this.a4()
this.Lp()},
Lp(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Lp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cj3(t.a.c),$async$Lp)
case 3:r=e
w=4
return A.b(C.BK(t.a.c),$async$Lp)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rK(q,new C.ea5(t))
else s=!1
if(t.c==null){w=1
break}t.l(new C.ea6(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$Lp,v)},
zO(d){var w=null,v=this.c
if(v==null)return
v.M(x.q).f.T(A.b2(w,w,w,w,w,B.t,w,A.c(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
Mg(d,e){return this.cPv(d,e)},
cPv(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Mg=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.l(new C.eaa(q,e))
t=3
w=6
return A.b(d.$0(),$async$Mg)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.l(new C.eab(q))
$.eY.mY()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Mg,v)},
ZO(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pX(r,s.c,s.e),$async$ZO)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Mg(new C.ea2(t),"Preparing download\u2026"),$async$ZO)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZO,v)},
ZS(d){return this.bWK(d)},
bWK(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ZS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pX(r,s.c,s.e),$async$ZS)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Mg(new C.ea3(t,d),"Preparing file\u2026"),$async$ZS)
case 4:case 1:return A.h(u,v)}})
return A.i($async$ZS,v)},
ajz(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ajz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.ya.cr().NW(B.Un,B.vv,!0),$async$ajz)
case 7:r=e
o=r
q=o==null?null:J.ex(o.a)
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
case 6:u=A.HZ()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ajz,v)},
a_v(d){return this.c6h(d)},
c6h(d){var w=0,v=A.j(x.H),u=this
var $async$a_v=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Mg(new C.ea4(u,d),"Restoring family trees\u2026"),$async$a_v)
case 2:return A.h(null,v)}})
return A.i($async$a_v,v)},
a_u(){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ajz(),$async$a_u)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.a_v(s),$async$a_u)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_u,v)},
a4R(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(M.pX(r,s.c,s.e),$async$a4R)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Mg(new C.ea9(t),"Creating QR code\u2026"),$async$a4R)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a4R,v)},
a4q(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a4q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.E7()){t.zO("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).ca(A.e4(new C.ea7(),!0,null,x.N)),$async$a4q)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.a_v(r),$async$a4q)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a4q,v)},
C(d){var w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===B.I,n=o?B.CI:B.hX,m=o?D.amV:B.aS,l=o?B.aM:B.bP,k=o?B.aS:B.ax,j=new C.dnc(n,m,l,k,o?B.bQ:B.bl)
l=A.aI(p,p,p,p,A.V(B.eI,k,p,p,p,20),p,p,p,new C.ead(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eR(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.c(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.u(t,A.a([A.E(C.dmL(!0,B.jI,B.aH,B.aH,q.r?p:q.gcFI(),j,s,"Show restore QR"),1),B.ar],u))}s=q.e
r=q.r?p:q.gcBJ()
t.push(A.E(C.dmL(!s,B.jJ,B.b2,B.bk,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.u(r,A.a([A.E(C.dmL(!1,B.hP,B.aZ,B.bU,q.r?p:q.gbWD(),j,"Photos & books included","Download all trees"),1),B.ar],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dmL(!1,Q.At,B.as,B.aQ,q.r?p:q.gc6e(),j,s,"Upload backup file"),1))
l=A.a([new C.bjG(v,l,p),B.lq,new C.af_(j,"QR restore",p),B.S,t,B.df,new C.af_(j,"Backup files",p),B.S,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.aa(q.d)>1&&q.a.f==null){v=A.a([B.lq,new C.af_(j,"One tree",p),B.S],u)
B.d.u(v,J.b8(q.d,new C.eae(q,j),x.l))
B.d.u(l,v)}l=A.a([A.cj(l,p,p,Au.a2Q,p,p,B.ah,!1)],u)
if(q.r){v=A.n(18)
t=A.K(B.aZ.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.v.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bm(!0,A.q(p,A.A(A.a([Av.aXx,B.bd,A.E(A.c(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.m),p,p,p,p,A1.Dq,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c6(w,n,new A.am(B.a0,p,B.ac,B.t,l,p),p,!1,!1,p,p)}}
C.dnc.prototype={}
C.bjG.prototype={
C(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.n(24)
u=A.a([new A.ac(0,B.G,B.aZ.j(0.32),B.ky,28)],x.V)
t=A.ao(p,A.V(B.vO,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.n(18)
q=x.p
return A.q(p,new A.am(B.a0,p,B.ac,B.t,A.a([t,new A.C(B.ad,A.A(A.a([A.q(p,D.c7V,B.f,p,p,new A.p(s,p,A.K(B.c.j(0.35),B.r,1.5),r,p,p,B.m),p,56,p,p,p,p,p,56),B.pu,A.E(A.w(A.a([D.h5v,B.N,A.c(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.B,p,B.e,B.i,0,B.p),1)],q),B.B,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.cga,B.m),p,p,p,p,p,p,p,p)}}
C.af_.prototype={
C(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.p(B.aZ,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3),B.aa,A.c(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bjE.prototype={
C(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.n(18),n=A.n(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.K(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cO,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.n(12)
t=r.r
s=A.K(t.j(0.35),B.r,1)
return A.aG(!1,B.a3,!0,q,A.aM(!1,o,!0,A.eK(A.d3(new A.C(E.a2q,A.w(A.a([A.q(q,A.V(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.m),q,q,q,q,B.tR,q,q,q),B.af,A.c(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bs,A.c(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cE,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.B,q,B.e,B.i,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.m),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.ai)}}
C.bjJ.prototype={
C(d){var w=this,v=null,u=A.n(18),t=A.n(18),s=w.c,r=A.K(s.c,B.r,1),q=B.aZ.j(0.14),p=A.n(12),o=s.e,n=x.p
return A.aG(!1,B.a3,!0,v,A.aM(!1,u,!0,A.eK(new A.C(B.f3,A.A(A.a([A.q(v,D.c74,B.f,v,v,new A.p(q,v,A.K(B.aZ.j(0.35),B.r,1),p,v,v,B.m),v,v,v,v,B.tR,v,v,v),B.bd,A.E(A.w(A.a([A.c(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.B,v,B.e,B.i,0,B.p),1),A.V(B.hP,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.m),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.ai)}}
C.a1H.prototype={
R(){return new C.aHf()},
gd8(){return this.c}}
C.aHf.prototype={
Z(){this.a4()
this.acd()},
acd(){var w=0,v=A.j(x.H),u=this,t
var $async$acd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(R.b6D(u.a.c,B.Fi),$async$acd)
case 2:t=e
if(u.c!=null)u.l(new C.e9Y(u,t))
return A.h(null,v)}})
return A.i($async$acd,v)},
al_(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$al_=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.l(new C.e9Z(q))
t=4
p=R.hH1(q.a.d,B.Fi)
if(p==null){n=A.be("Could not read this QR code.")
throw A.Y(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(R.avh(n.e,m,l,B.Fi,p,n.f),$async$al_)
case 7:if(q.c==null){r=[1]
w=5
break}q.l(new C.ea_(q))
q.c.M(x.q).f.T(D.fGK)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ad(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(B.a.er(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.l(new C.ea0(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$al_,v)},
C(d){var w,v,u,t,s,r=this,q=null,p=A.Q(d).ax.a===B.I,o=p?B.o0:B.nk,n=p?B.j_:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eR(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.hmk,q,q,q,1,q,!0)
w=A.n(24)
v=A.K(B.aZ.j(0.35),B.r,1)
u=A.qx(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.c(l,q,q,q,q,q,q,A.l(q,q,B.aZ,q,q,q,q,q,q,q,q,q,q,q,B.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.w(A.a([B.N,u,B.bx,t,B.N,A.c("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bc,B.i,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.m),q,q,q,q,B.ad,q,q,1/0),1)
v=r.a.e
v=A.c("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bz,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcBq()
if(u)u=B.LB
else u=A.V(r.e===!0?B.h2:Ay.arP,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a4(1/0,q,A.eo(u,q,A.c(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cg,q,q,q),t,A.dj(q,q,q,q,q,q,q,q,q,B.aZ,q,B.hv,q,q,q,new A.ax(B.aZ.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.C(B.hB,A.c("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aE:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.S)
w.push(new A.a4(1/0,q,A.bI(Ag.BQ,q,new C.ea1(d),A.bp(B.aZ,q,q,q,q,B.hv,q,q,q,q,q,q)),q))
return A.c6(m,o,new A.C(B.ad,A.w(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a1I.prototype={
R(){return new C.bp0(A.Aj(B.zs,B.oI,B.vV))}}
C.bp0.prototype={
t(){this.d.t()
this.a3()},
C(d){var w=null
return A.c6(A.eR(w,w,w,!0,!0,B.v,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.hdP,w,w,w,1,w,!0),B.v,A.Ai(this.d,B.c1,new C.eaf(this,d)),w,!1,!1,w,w)}}
C.b2o.prototype={
C(d){var w=null
return A.c(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.TP,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.mp.prototype={}
C.a8E.prototype={
R(){return new C.boE(null,null)}}
C.boE.prototype={
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
this.bCz()},
C(d){var w,v,u=this,t=B.d.ds(D.a8s,new C.dVX(u),new C.dVY())
u.a.toString
w=u.d
w===$&&A.d()
v=u.e
v===$&&A.d()
return A.cH5(A.ca(new A.hC(A.a([w,v],x.dS)),new C.dVZ(u,t),null),!0)}}
C.boD.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b6M(d,e)
break
case"house":p.mD(d,e,D.dqs)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdm()
$.U()
t=A.L()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.O(new A.m(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mJ(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Cn(d,e,12)
p.zn(d,e,B.lA,5,14)
break
case"grocery":p.cq0(d,e)
break
case"calculator":p.cpI(d,e)
break
case"lumber":p.cq8(d,e)
break
case"kitchen":p.cq3(d,e)
break
case"landscape":p.mD(d,e,D.dr3)
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
w=A.L()
w.r=B.ew.j(0.85).gp(0)
d.af(s,w)
p.Cn(d,e,8)
p.zn(d,e,B.iN,4,18)
break
case"plumbing":p.cqi(d,e)
break
case"electrical":p.mD(d,e,D.dDT)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.U()
u=A.L()
u.r=B.c.j(q*0.12).gp(0)
d.aE(new A.a5(0,0,0+e.a,0+e.b),u)
p.mJ(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mJ(d,e,B.oW.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Cn(d,e,10)
break
case"store":p.cqs(d,e)
break
case"paint_remodel":p.cqd(d,e)
break
case"roofing":p.cqk(d,e)
break
case"warehouse":p.cqz(d,e)
break
case"vehicles":p.cqx(d,e)
break
case"farm":p.cpV(d,e)
break
case"restaurant":p.cqj(d,e)
break
case"tools":p.cqv(d,e)
break
case"wallet":p.cqy(d,e)
break
case"concrete":p.cpO(d,e)
break
case"blueprint":p.cpG(d,e)
break
default:p.b6M(d,e)}},
mD(d,e,f){var w,v=new A.a5(0,0,0+e.a,0+e.b)
$.U()
w=A.L()
w.san(new A.a6(B.aw,B.aD,B.w,f,null,null).az(0,v))
d.aE(v,w)},
mJ(d,e,f,g,h){var w,v,u,t=new A.m(e.a/2,e.b/2),s=e.gdm()/2-h
$.U()
w=A.L()
w.b=B.ae
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cR(A.c0(t,s),u,u+0.1439896632895322-u,!1,w)}},
zn(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdm()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.O(new A.m(q+t*o,p+s*o),3.5,r)}},
Cn(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.h.F(t*0.17,0.9)
q=B.h.F(t*0.23,0.85)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.O(new A.m(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b6M(d,e){var w,v=this
v.mD(d,e,D.dC_)
w=v.c
v.mJ(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mJ(d,e,B.bO.j(0.45),-w*3.141592653589793*1.4,22)
v.bUA(d,e,B.i_,w)
v.zn(d,e,B.c.j(0.7),6,8)},
bUA(d,e,f,g){var w,v,u,t,s,r
$.U()
w=A.L()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.aE(new A.a5(16,r,t,r+3),w)}},
cq0(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mD(d,e,D.cCd)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.n.F(t,3)
q=Math.sin(s)
p=B.n.ao(t,3)
o=Math.cos(s*0.8)
n=B.n.F(t,2)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=D.dop[B.n.F(t,4)].j(0.85).gp(0)
d.O(new A.m(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mJ(d,e,B.c.j(0.35),w,16)
l.zn(d,e,B.iN,5,12)},
cpI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mD(d,e,D.cCl)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdm()
$.U()
q=A.L()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.O(new A.m(t/2,s/2),r*(0.18+u*0.08),q)
p=A.h2(h,B.cK,h,h,h,h,B.a8,B.cb,h,B.e6,B.cc)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dt3[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.n.F(o,2)
p.sb1(0,new A.eG(r,h,h,B.cV,h,h,h,h,h,h,new A.H(!0,q,h,h,h,h,14+m*4,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a5(d,new A.m(t*(0.08+B.n.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.n.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cCn[o]
l=B.l4.j(0.28+0.3*Math.sin(n))
k=B.n.F(o,2)
p.sb1(0,new A.eG(m,h,h,B.cV,h,h,h,h,h,h,new A.H(!0,l,h,h,h,h,12+k*3,B.C,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.eL()
p.a5(d,new A.m(t*(0.55+B.n.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.n.ao(o,3)*0.38)+Math.sin(n)*6))}i.mJ(d,e,B.c.j(0.35),w*1.5,14)
i.mJ(d,e,B.eM.j(0.55),-v*3.141592653589793*2,8)
i.mJ(d,e,B.oQ.j(0.4),r*2.8,22)
i.zn(d,e,B.pP,8,10)
i.Cn(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.h.F(w+o*0.22,0.9)
$.U()
v=new A.ar(B.V,B.R,B.X,B.Y,B.W)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.m(12,j),new A.m(t,j),v)}},
cq8(d,e){var w,v,u,t,s,r,q,p,o=this
o.mD(d,e,W.aDR)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bx(new A.a5(20,r,u,r+10),B.hu)
$.U()
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=A.ap(B.hb,B.nQ,(s+1)/2).gp(0)
d.aq(q,p)}o.mJ(d,e,B.hb.j(0.35),w,15)
o.Cn(d,e,8)},
cq3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mD(d,e,D.doZ)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.h.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.h.F(s*0.13,0.7)
$.U()
m=new A.ar(B.V,B.R,B.X,B.Y,B.W)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.O(new A.m(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mJ(d,e,B.bO.j(0.4),-w*3.141592653589793*2.2,11)
l.zn(d,e,B.qU,4,14)},
cqi(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mD(d,e,D.dbs)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.h.F(s,0.12)
$.U()
o=new A.ar(B.V,B.R,B.X,B.Y,B.W)
o.b=B.ae
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.O(new A.m(w,u),q*(0.12+r*0.14+p),o)}n.zn(d,e,B.pT,6,12)
n.mJ(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cqs(d,e){var w,v,u,t,s,r,q,p=this
p.mD(d,e,D.cQg)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bx(new A.a5(r,14,r+u,22),B.jL)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.fy,B.bO,(s+1)/2).gp(0)
d.aq(r,q)}p.mJ(d,e,B.c.j(0.3),w,16)
p.Cn(d,e,8)
p.zn(d,e,B.wZ,5,13)},
cqd(d,e){var w,v,u,t,s,r,q
this.mD(d,e,D.diH)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.h.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bx(new A.a5(r,q,r+8,q+(18+s*22)),B.iE)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=[B.iK,B.dI,B.bO,B.ej][t].j(0.85).gp(0)
d.aq(q,r)}this.mJ(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cqk(d,e){var w,v,u,t,s,r,q
this.mD(d,e,D.dfD)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.h.F(v+t*0.12,0.75))
r=B.n.F(t,4)*0.22
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.m(u*(0.1+r),s),new A.m(u*(0.18+r),s+10),q)}this.zn(d,e,B.cH,7,11)},
cqz(d,e){var w,v,u,t,s,r,q,p
this.mD(d,e,D.cT7)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bx(new A.a5(q,p,q+(t-s*8),p+16),B.hu)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.cH,B.aS,(Math.sin(r)+1)/2).gp(0)
d.aq(p,q)}this.mJ(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cqx(d,e){var w,v,u,t,s,r,q
this.mD(d,e,D.dIB)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.h.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.n.F(t,2)*0.08)
r=A.bx(new A.a5(s,r,s+28,r+8),B.hu)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.aq(r,q)}this.Cn(d,e,6)},
cpV(d,e){var w,v,u,t,s,r,q,p
this.mD(d,e,D.dnk)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.U()
s=A.L()
s.r=B.oW.j(0.75).gp(0)
d.O(new A.m(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.hY.j(0.85).gp(0)
p.c=3
d.ah(new A.m(q,v),new A.m(q+s*6,t),p)}this.mJ(d,e,B.oW.j(0.35),w,14)},
cqj(d,e){var w,v,u,t,s,r,q=this
q.mD(d,e,D.dqf)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.c1(new A.m(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.U()
r=new A.ar(B.V,B.R,B.X,B.Y,B.W)
r.r=B.c.j(0.22).gp(0)
d.c3(s,r)}q.zn(d,e,B.qU,5,16)
q.Cn(d,e,7)},
cqv(d,e){var w,v,u,t,s,r,q,p,o=this
o.mD(d,e,D.dFL)
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
d.O(new A.m(v+r*34,u+q*22),4,p)}},
cqy(d,e){var w,v,u,t,s,r,q,p,o=this
o.mD(d,e,D.dJo)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bx(new A.a5(q,p,q+36,p+22),B.jL)
$.U()
q=new A.ar(B.V,B.R,B.X,B.Y,B.W)
q.r=A.ap(B.iN,B.oW,r).gp(0)
d.aq(p,q)}o.Cn(d,e,9)
o.mJ(d,e,B.c.j(0.4),w*2.2,12)},
cpO(d,e){var w,v,u,t,s,r,q,p
this.mD(d,e,D.dwl)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.c0(new A.m(v,u),34)
$.U()
s=A.L()
s.b=B.ae
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cR(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ar(B.V,B.R,B.X,B.Y,B.W)
p.r=B.bP.j(0.85).gp(0)
d.O(new A.m(v+t*34,u+s*34),3,p)}},
cpG(d,e){var w,v,u,t,s,r,q
this.mD(d,e,D.drs)
$.U()
w=A.L()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.m(t,0),new A.m(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.m(0,s),new A.m(v,s),w)
r=this.c
q=u*B.h.F(r*0.85,1)
$.U()
u=A.L()
u.r=B.dI.j(0.45).gp(0)
d.aE(new A.a5(0,q,0+v,q+6),u)
this.mJ(d,e,B.lA.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.aw2.prototype={
a1X(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a1X=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aUs(),$async$a1X)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.aaY(s),$async$a1X)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a1X,v)},
ajA(d){return this.csV(d)},
csV(d){var w=0,v=A.j(x.H),u=this,t
var $async$ajA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iKS(d),$async$ajA)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ajA,v)},
C(d){var w,v,u=null,t=A.Q(d),s=this.c,r=s!=null&&B.a.i(s).length!==0
s=r?s:"ngmy:thumb:construction"
t=t.ax.a===B.I?B.ke:B.iM
w=x.p
v=A.a([C.aUQ(!0,B.t6,1/0,B.q7,u,s,1/0)],w)
if(!r)v.push(new A.bP(new A.p(u,u,u,u,u,new A.a6(B.aW,B.b0,B.w,A.a([B.L,B.v.j(0.35)],x.O),u,u),B.m),B.bn,new A.bH(B.aW,u,u,new A.C(B.tI,A.c("Pick a theme or your own photo",u,u,u,u,u,u,A.l(u,u,B.c.j(0.92),u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,B.aEP,u,u),u,u,u),u),u),u))
v.push(A.ao(8,A.A(A.a([A.E(A.df(D.c0b,u,D.h1x,new C.csR(this,d),A.bp(B.aZ,u,u,u,B.c,u,B.jD,u,u,u,u,B.cp)),1),B.aa,A.E(A.eo(D.c9d,u,D.hh2,this.gcju(),A.dj(u,u,B.v.j(0.35),u,u,u,u,u,u,B.c,u,u,B.jD,u,u,D.b9v,u,u,u,B.cp)),1)],w),B.l,u,B.e,B.i,0,u,u),u,u,8,8,u,u))
return new A.fD(1.7777777777777777,A.aG(!1,B.a3,!0,B.t6,new A.am(B.a0,u,B.b7,B.t,v,u),B.ap,t,0,u,u,u,u,u,B.ai),u)}}
C.aPx.prototype={
b0(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdP())
w.bd$=null
w.a3()}}
C.aXO.prototype={}
C.aXN.prototype={}
C.aVR.prototype={}
C.a0k.prototype={
R(){return new C.aCm()}}
C.aCm.prototype={
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
M3(){var w,v,u=this,t=u.d
t===$&&A.d()
w=B.a.i(t.a.a)
if(w.length===0){u.c.M(x.q).f.T(D.fHf)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).N(new C.aXO(w,v))},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.Q(d).ax.a===B.I,l=m?B.eo:B.c,k=A.n(20),j=A.q(n,D.c8T,B.f,n,n,new A.p(B.aZ.j(0.15),n,n,A.n(12),n,n,B.m),n,44,n,n,n,n,n,44),i=A.c("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.w(A.a([i,B.bs,A.c("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.B,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aI(n,n,n,n,A.V(B.cD,m?B.bv:B.bl,n,n,n,n),n,n,n,new C.deg(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.c("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,12,n,n,B.O,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.c("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.bl,n,n,n,n,n,n,n,n,11,n,n,B.cE,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hHh(new C.deh(o),o.e)
u=o.d
u===$&&A.d()
t=A.l(n,n,m?B.aS:B.ax,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.ke:B.iM
r=A.n(12)
q=A.n(12)
p=m?B.er:B.bP
t=A.aO(n,B.M,!0,n,!0,B.t,n,A.aP(),u,n,n,n,n,n,2,A.bB(n,new A.b5(4,r,B.dz),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ax(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.am,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.dei(o),n,!1,n,n,!1,n,!0,n,B.ad,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a8,n,A_.LK,n,n,n,n)
u=m?B.aS:B.ax
m=m?B.er:B.bP
return A.eE(n,l,new A.cR(B.mm,A.cb(A.w(A.a([j,B.aN,i,B.at,w,B.N,v,B.aN,t,B.bx,A.A(A.a([A.E(A.dV(B.dy,new C.dej(d),A.dj(n,n,n,n,n,n,n,n,n,u,n,n,B.cq,n,new A.bb(A.n(12),B.a1),new A.ax(m,1,B.r,-1),n,n,n,n)),1),B.ar,A.E(A.bI(D.hhj,n,o.ga5b(),A.bp(B.aZ,n,n,n,B.c,n,B.cq,n,new A.bb(A.n(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.B,n,B.e,B.P,0,B.p),B.t,n,B.y,n,n,B.Dt,n,n,B.ah),n),n,n,n,B.Du,n,B.db,n,new A.bb(k,B.a1),n)}}
C.a0j.prototype={
R(){return new C.aCl()}}
C.aCl.prototype={
Z(){this.a4()
var w=$.ay()
this.d!==$&&A.aT()
this.d=new A.au(B.ay,w)},
t(){var w=this.d
w===$&&A.d()
w.V$=$.ay()
w.W$=0
this.a3()},
M3(){var w,v=this.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0){this.c.M(x.q).f.T(D.fER)
return}v=this.c
v.toString
A.a7(v,!1).N(new C.aXN(w))},
C(d){var w,v,u,t,s,r,q=null,p=A.Q(d).ax.a===B.I,o=p?B.eo:B.c,n=A.n(20),m=A.q(q,D.c57,B.f,q,q,new A.p(B.bU.j(0.15),q,q,A.n(12),q,q,B.m),q,44,q,q,q,q,q,44),l=A.c("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.w(A.a([l,B.bs,A.c("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.B,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aI(q,q,q,q,A.V(B.cD,p?B.bv:B.bl,q,q,q,q),q,q,q,new C.dec(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aZ.j(p?0.12:0.08)
w=A.n(12)
v=A.K(B.aZ.j(0.25),B.r,1)
u=A.V(B.arB,B.aZ.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.ar,A.E(A.c("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.m),q,q,q,q,B.bD,q,q,1/0)
w=this.d
w===$&&A.d()
v=A.l(q,q,p?B.aS:B.ax,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.ke:B.iM
t=A.n(12)
s=A.n(12)
r=p?B.er:B.bP
v=A.aO(q,B.M,!0,q,!0,B.t,q,A.aP(),w,q,q,q,q,q,2,A.bB(q,new A.b5(4,t,B.dz),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ax(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.am,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.ded(this),q,!1,q,q,!1,q,!0,q,B.ad,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a8,q,B.lr,q,q,q,q)
w=p?B.aS:B.ax
p=p?B.er:B.bP
return A.eE(q,o,new A.cR(B.mm,A.cb(A.w(A.a([m,B.aN,l,B.az,v,B.bx,A.A(A.a([A.E(A.dV(B.dy,new C.dee(d),A.dj(q,q,q,q,q,q,q,q,q,w,q,q,B.cq,q,new A.bb(A.n(12),B.a1),new A.ax(p,1,B.r,-1),q,q,q,q)),1),B.ar,A.E(A.bI(D.hoE,q,this.ga5b(),A.bp(B.bU,q,q,q,B.c,q,B.cq,q,new A.bb(A.n(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.B,q,B.e,B.P,0,B.p),B.t,q,B.y,q,q,B.Dt,q,q,B.ah),q),q,q,q,B.Du,q,B.db,q,new A.bb(n,B.a1),q)}}
C.a_K.prototype={
R(){return new C.aAY()}}
C.aAY.prototype={
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
gLk(){var w,v=this.e
v===$&&A.d()
w=A.cA(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gamK(){var w=this.f
w===$&&A.d()
w=A.cA(B.a.i(w.a.a))
return w==null?0:w},
gb9C(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.d()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aTw(d){var w,v=B.h.D(this.gLk()+d,0.25,999999),u=B.h.bg(v),t=this.e
t===$&&A.d()
if(v===u)u=B.n.v(B.h.L(v))
else{u=B.h.a1(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aD(u,w,"")}t.sb1(0,u)
this.l(new C.cL9())},
aCj(d,e,f,g){var w=null,v=g!=null?A.V(g,B.aZ,w,w,w,20):w,u=d.a,t=u?B.ke:B.iM,s=A.n(14),r=A.n(14)
u=u?B.er:B.bP
return A.bB(w,new A.b5(4,s,B.dz),w,B.bD,w,w,w,w,!0,new A.b5(4,r,new A.ax(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.n(14),B.agx),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cjv(d,e,f){return this.aCj(d,e,f,null)},
M3(){var w,v,u,t,s=this,r=s.d
r===$&&A.d()
w=B.a.i(r.a.a)
if(s.gamK()<=0){s.c.M(x.q).f.T(D.fJ9)
return}r=s.c
r.toString
v=s.gLk()
u=s.gamK()
t=s.gb9C()
A.a7(r,!1).N(new C.aVR(w,v,u,t))},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uC(n),l=n?B.eo:B.c,k=A.n(24),j=x.O,i=A.a([B.aZ.j(0.22),B.bU.j(0.14)],j),h=A.n(14)
i=A.q(o,D.bZ3,B.f,o,o,new A.p(o,o,A.K(B.aZ.j(0.35),B.r,1),h,o,new A.a6(B.a5,B.a9,B.w,i,o,o),B.m),o,48,o,o,o,o,o,48)
h=A.c("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.w(A.a([h,B.bs,A.c("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.cE,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aI(o,o,o,o,A.V(B.cD,n?B.bv:B.bl,o,o,o,o),o,o,o,new C.cLf(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aO(o,B.M,!0,o,!0,B.t,o,A.aP(),h,o,o,o,o,o,2,p.aCj(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Rd),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a8,o,A_.LK,o,o,o,o)
h=A.c("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.C,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.ke:B.iM
t=A.n(14)
s=A.K(n?B.er:B.bP,B.r,1)
r=A.aI(o,o,o,o,A.V(B.xC,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cLg(p),o,o,o,o,o,B.cp)
q=p.e
q===$&&A.d()
q=A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),q,o,o,o,o,o,2,D.caM,B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.el,o,o,o,1,o,o,!1,"\u2022",o,new C.cLh(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a4(52,o,q,o),A.aI(o,o,o,o,A.V(B.ii,n?B.aS:B.ax,o,o,o,20),o,o,o,new C.cLi(p),o,o,o,o,o,B.cp)],w),B.l,o,B.e,B.P,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.m),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.d()
s=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.ar,A.E(A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),t,o,o,o,o,o,2,p.aCj(m,"Amount","0.00",B.hE),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,B.el,o,o,o,1,o,o,!1,"\u2022",o,new C.cLj(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a8,o,B.ao,o,o,o,o),1)],w),B.B,o,B.e,B.i,0,o,o)
t=x.gv
u=A.B(new A.O(D.dji,new C.cLk(p,m),t),t.k("aj.E"))
i=A.a([i,B.bx,v,B.az,h,B.N,s,B.af,A.bX(B.bG,u,B.bq,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.d()
v=A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.u(i,A.a([B.S,A.aO(o,B.M,!1,o,!0,B.t,o,A.aP(),h,o,o,o,o,o,2,p.cjv(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.am,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cLl(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a8,o,B.lr,o,o,o,o)],w))}i.push(B.aN)
h=B.aZ.j(n?0.18:0.1)
j=A.a([h,B.bU.j(n?0.12:0.06)],j)
h=A.n(16)
v=A.K(B.aZ.j(0.35),B.r,1)
u=A.c("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,11,o,o,B.O,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gLk()===B.h.bg(p.gLk())?B.h.L(p.gLk()):p.gLk()
s=p.gb9C()
r=A.BN(p.gamK())
i.push(A.q(o,A.A(A.a([A.E(A.w(A.a([u,B.at,A.c(A.v(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.bl,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.B,o,B.e,B.i,0,B.p),1),C.bJr(p.gLk()*p.gamK(),B.b8,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a6(B.a5,B.a9,B.w,j,o,o),B.m),o,o,o,o,B.jF,o,o,o))
i.push(B.bx)
j=A.n(14)
h=n?B.er:B.bP
h=A.dj(o,o,o,o,o,o,o,o,o,o,o,o,B.cq,o,new A.bb(j,B.a1),new A.ax(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dV(A.c("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,o,o,o,B.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cLm(d),h),1),B.ar,A.E(A.df(D.avc,o,D.hko,p.ga5b(),A.bp(B.aZ,o,o,0,B.c,o,B.cq,o,new A.bb(A.n(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eE(o,l,new A.cR(B.Ng,A.cb(A.w(i,B.al,o,B.e,B.P,0,B.p),B.t,o,B.y,o,o,Ak.tO,o,o,B.ah),o),o,o,o,B.PK,o,B.db,o,new A.bb(k,B.a1),o)}}
C.a3x.prototype={
R(){return new C.bBD()}}
C.bBD.prototype={
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
v=A.aO(s,B.M,!0,s,!0,B.t,s,A.aP(),w,s,s,s,s,s,2,A.bB(s,new A.b5(4,A.n(12),B.dz),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fy2(t,d),s,!1,s,s,!1,s,!0,s,B.ad,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a8,s,B.ao,s,s,s,s)
u=A.E(A.dV(B.dy,new C.fy3(d),s),1)
r=A.bp(B.bU,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eE(s,q,new A.C(B.Dt,A.w(A.a([o,B.az,v,B.aN,A.A(A.a([u,B.ar,A.E(A.bI(A.c(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fy4(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.P,0,B.p),s),s,s,s,s,s,B.db,s,new A.bb(p,B.a1),s)}}
C.ae0.prototype={
a9(){return"WorksheetFrameStyle."+this.b}}
C.GU.prototype={
R(){return new C.bBB(null,null)}}
C.bBB.prototype={
Z(){var w,v=this
v.a4()
w=A.br(null,D.bFH,null,1,null,v)
w.cU(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bEU()},
gbGw(){switch(this.a.r.a){case 1:return A.a([B.aZ,B.bU,B.b8],x.O)
case 2:return A.a([B.bw,B.aZ,B.b8],x.O)
case 3:return A.a([B.aH,B.cj,B.jU],x.O)
case 4:return A.a([B.fL,B.bU,B.fz],x.O)
case 0:return A.a([B.aZ,B.bU,B.b8],x.O)}},
C(d){var w=A.Q(d),v=this.d
v===$&&A.d()
return new A.ea(A.ca(v,new C.fy0(this,new C.uC(w.ax.a===B.I)),null),null)}}
C.aAR.prototype={
R(){return new C.bBC(null,null)}}
C.bBC.prototype={
Z(){var w,v=this
v.a4()
w=A.br(null,B.o6,null,1,null,v)
w.cU(0)
v.d!==$&&A.aT()
v.d=w},
t(){var w=this.d
w===$&&A.d()
w.t()
this.bEV()},
C(d){var w=this.d
w===$&&A.d()
return A.ca(w,new C.fy1(this),null)}}
C.bBA.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bx(new A.a5(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aQ(w,w))
u=new A.aJ($.U().r,B.ak,null,null,A.a([],x.v))
u.E(new A.ju(v))
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
w=A.A0(u)
t=A.a([],x.U)
w=new A.vf(w,!1,t)
for(o=p.b,s=-o*0.85;w.A();){r=w.c
if(r===0||w.f)A.bi(A.k_(y.B));--r
q=new A.Cb(w,r)
w.jZ()
r=t[r].b
r===$&&A.d()
r=r.a.length()
p.aXb(d,q,r,o,0,0.2,4.2,0.92)
p.aXb(d,q,r,s,0.52,0.11,3.2,0.58)}},
aXb(d,e,f,g,h,i,j,k){var w,v,u,t=B.h.F(g+h,1)*f,s=A.i4u(e.a.a,e,t,t+f*i,!0),r=A.aja(s.glk().a.getBounds())
$.U()
w=A.L()
w.b=B.ae
w.c=j
w.d=B.bH
w.f=!0
v=this.f
u=k*this.e
w.san(new A.a6(B.a5,B.a9,B.w,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Jx,null).az(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aRF.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.aRG.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.uC.prototype={}
C.aw1.prototype={
R(){return new C.aIQ()},
gea(){return this.c}}
C.aIQ.prototype={
Z(){var w=this
w.a4()
w.d=w.a.d
w.akq()},
t(){var w=this.a.c,v=this.d
v===$&&A.d()
C.MP(w,v)
this.a3()},
akq(){var w=0,v=A.j(x.H),u=this,t,s
var $async$akq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bHP(t.c,t.d.a),$async$akq)
case 2:s=e
if(s!=null&&u.c!=null)u.l(new C.f5c(u,s))
return A.h(null,v)}})
return A.i($async$akq,v)},
Sc(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Sc=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.l(new C.f53(u))
t=u.a.c
s=u.d
s===$&&A.d()
w=2
return A.b(C.MP(t,s),$async$Sc)
case 2:if(u.c!=null)u.l(new C.f54(u))
return A.h(null,v)}})
return A.i($async$Sc,v)},
SJ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$SJ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.Q(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.f5a(t,new C.uC(p.ax.a===B.I)),s,null,!0,!0,x.T),$async$SJ)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.d()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.aaY(q),$async$SJ)
case 6:case 5:t.l(new C.f5b(t,r))
w=7
return A.b(t.Sc(),$async$SJ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$SJ,v)},
XU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iKC(r),$async$XU)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.l(new C.f4Z(t,new C.rP(B.n.v(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Sc(),$async$XU)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XU,v)},
coO(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.d()
C.hWN(t,new C.f52(u),w,v)},
ae3(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.p(w,w,new A.bE(new A.ax(v,2.5,B.r,-1),B.a1,B.a1,new A.ax(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b9g,w,w,B.m),w,22,w,w,w,w,w,22)},
ad3(d){return this.bSO(d)},
bSO(d){var w=0,v=A.j(x.H),u=this
var $async$ad3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.l(new C.f51(u,d))
w=2
return A.b(u.Sc(),$async$ad3)
case 2:return A.h(null,v)}})
return A.i($async$ad3,v)},
C(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.Q(a2).ax.a===B.I,e=f?B.c8:B.hX,d=A.n(8),a0=A.V(Y.a44,f?B.bv:B.bl,g,g,g,16),a1=x.p
a0=A.aM(!1,d,!0,new A.C(B.I4,A.A(A.a([a0,B.b6,A.c("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.f5d(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.d()
d=d.c
if(d!=null&&B.a.Y(d,"ngmy:thumb:"))d=new A.am(B.a0,g,B.b7,B.t,A.a([A.bv(A.n(22),C.aUQ(!0,A.n(22),1/0,B.q7,g,d,1/0),B.ap),A.ao(10,A.df(D.c2Z,g,D.hmT,h.gb7x(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.h1,g,new A.bb(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.n(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aZ.j(f?0.5:0.38),B.eS,22),new A.ac(-4,B.G,B.bU.j(0.2),B.J,32)],w)
u=A.n(17)
t=A.K(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.J,10)],w)
s=A.n(16)
r=h.d
v=A.q(g,A.q(g,A.bv(s,new A.am(B.a0,g,B.b7,B.t,A.a([C.aUQ(!0,A.n(16),1/0,B.QA,g,r.c,1/0),new A.bP(new A.p(g,g,g,g,g,new A.a6(B.aW,B.b0,B.w,A.a([B.c.j(0.06),B.L,B.v.j(0.22)],x.O),g,g),B.m),B.bn,g,g),A.ao(g,h.ae3(!0),g,g,8,g,8,g),A.ao(g,A.cHP(h.ae3(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cHP(h.ae3(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cHP(h.ae3(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.df(D.bZH,g,D.hg_,h.gb7x(),A.bp(B.v.j(0.45),g,g,g,B.c,g,B.h1,g,new A.bb(A.n(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.p(g,g,t,u,w,g,B.m),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.cct,B.m),g,g,g,g,B.m6,g,g,g)
d=v}w=h.d
w=A.c(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.n(22)
u=x.O
u=f?A.a([D.bkd,B.oO,B.hz],u):A.a([B.b8,B.aZ,B.bU],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aZ.j(f?0.45:0.35),B.eS,24)],t)
r=A.n(22)
p=A.ao(g,A.V(B.jG,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.n(20)
m=A.K(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.c(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.m),g,g,g,g,B.hp,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.az,A.c("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.C,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.aj,C.bJr(h.d.gyl(),B.c,!0,B.u)],a1)
if(q>0)B.d.u(n,A.a([B.N,A.c("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cE,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.w(n,B.B,g,B.e,B.i,0,B.p),1)
n=A.n(14)
m=A.n(14)
l=B.c.j(0.12)
k=A.K(B.hn.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cO,14)],t)
j=B.aH.j(0.22)
i=A.n(10)
u=A.q(g,A.bv(r,new A.am(B.a0,g,B.ac,B.t,A.a([p,new A.C(D.bKA,A.A(A.a([o,B.ar,A.aG(!1,B.a3,!0,g,A.aM(!1,n,!0,A.eK(new A.C(B.xh,A.w(A.a([A.q(g,D.auM,B.f,g,g,new A.p(j,g,A.K(B.aH.j(0.5),B.r,1),i,g,g,B.m),g,g,g,g,B.ct,g,g,g),B.fS,D.h4u],a1),B.l,g,B.e,B.P,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.m),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcoN(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.ai)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.p(g,g,g,v,s,new A.a6(B.aw,B.aD,B.w,u,g,g),B.m),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fD(1.7777777777777777,d,g),B.aN,w,B.N,u,B.bx,A.A(A.a([A.c("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,16,g,g,B.C,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.aY,A.df(A9.a5P,g,D.h2d,h.gbH0(),A.bp(B.aZ,g,g,g,B.c,g,B.hq,g,new A.bb(A.n(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.eo:B.c
v=A.n(14)
u=A.K(f?B.er:B.bP,B.r,1)
t=A.V(B.a4r,f?B.bv:B.bl,g,g,g,48)
s=A.c("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aS:B.ax,g,g,g,g,g,g,g,g,g,g,g,B.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.w(A.a([t,B.S,s,B.aj,A.c("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.bl,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.m),g,g,g,g,B.q1,g,g,1/0))}else B.d.u(d,new A.O(w,new C.f5e(h,new C.uC(f)),A.T(w).k("O<1,x>")))
if(h.e)d.push(new A.C(B.zx,A.at(A.nq(g,f?B.bv:B.bl,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c6(g,e,A.bm(!0,A.w(A.a([new A.C(Z.Dk,a0,g),A.E(A.cb(A.w(d,B.B,g,B.e,B.i,0,B.p),B.t,g,B.y,g,g,E.zK,g,g,B.ah),1)],a1),B.B,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bKM(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.eo:B.c,p=A.n(16),o=A.a([new A.ac(0,B.G,B.v.j(r?0.35:0.08),B.cO,12)],x.V),n=A.n(16),m=A.q(u,u,B.f,u,u,D.bbZ,u,u,u,u,u,u,u,5),l=B.aZ.j(r?0.22:0.12),k=A.n(12)
l=A.q(u,A.V(s?B.ix:B.h4,B.b8,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.m),u,40,u,u,u,u,u,40)
if(s)t=B.bK
else{k=x.p
t=A.a([A.c(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd5n()
v=A.BN(d.d)
B.d.u(t,A.a([B.at,A.c(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.w(t,B.B,u,B.bc,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aZ.j(0.14),B.bU.j(0.1)],x.O)
w=A.n(12)
k=A.q(u,C.bJr(d.c*d.d,B.b8,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a6(B.a5,B.a9,B.w,k,u,u),B.m),u,u,u,u,B.h1,u,u,u)
w=x.p
return A.q(u,A.bv(n,new A.Fl(A.A(A.a([m,A.E(new A.C(B.aok,A.A(A.a([l,B.bd,t,B.aa,k,A.aI(u,u,u,u,A.V(B.cD,(r?B.bv:B.bl).j(0.75),u,u,u,20),u,u,u,new C.f5_(this,d),u,u,u,u,u,B.cp)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.baP,new A.p(q,u,u,p,o,u,B.m),u,u,u,B.d3,u,u,u,u)}}
C.ag6.prototype={
FU(d){return this.bUc(d)},
bUc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$FU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(M.pX(d,o,!1),$async$FU)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
w=4
return A.b(A.bM(B.Dc,null,x.H),$async$FU)
case 4:s=t.d
w=5
return A.b(C.h9u(!0,o,s),$async$FU)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.HO(r,"ngmy_project_"+A.aD(s.b,q,"_"),!1),$async$FU)
case 6:p=f
w=7
return A.b(M.pW(o,!1),$async$FU)
case 7:if(d.e==null){w=1
break}d.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$FU,v)},
a1Z(d){return this.cFJ(d)},
cFJ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a1Z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(M.pX(d,s,!1),$async$a1Z)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).N(null)
A.hf(d,new C.avW(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(M.pW(s,!1),$async$a1Z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1Z,v)},
Sd(d){return this.cBD(d)},
cBD(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Sd=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(A.hf(d,D.aOO,!0,"NgmyWorksheetProjectScan",x.N),$async$Sd)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bJs(s),$async$Sd)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.M(x.q).f.T(D.fIg)
w=1
break}q=C.hwO(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dT(p,x.H),$async$Sd)
case 5:if(d.e==null){w=1
break}d.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Sd,v)},
a2_(d){return this.cOi(d)},
cOi(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a2_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).N(null)
w=3
return A.b(C.bIW(),$async$a2_)
case 3:s=f
if(s==null){w=1
break}r=C.hwO(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dT(q,x.H),$async$a2_)
case 4:if(d.e==null){w=1
break}d.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a2_,v)},
C(d){var w=this,v=null,u=A.Q(d).ax.a===B.I,t=new C.uC(u),s=w.d.d.length,r=u?B.eo:B.c,q=A.n(28),p=A.a([new A.ac(0,B.G,B.v.j(u?0.35:0.08),B.ky,36)],x.V),o=x.p
return A.bm(!0,new A.C(B.xg,A.q(v,A.w(A.a([w.cEi(d,t,s),new A.C(D.bJZ,A.w(A.a([w.b5v(t,"QR restore"),B.S,A.A(A.a([w.b5u(t,!0,B.jI,B.aH,B.aH,new C.f5g(w,d),"Show to scan","QR code"),B.ar,w.aCk(t,B.jJ,B.b2,B.bk,new C.f5h(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.df,w.b5v(t,"Backup files"),B.S,A.A(A.a([w.aCk(t,B.hP,B.aZ,B.bU,new C.f5i(w,d),"Full copy","Backup file"),B.ar,w.aCk(t,Q.At,B.as,B.aQ,new C.f5j(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.B,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.P,0,B.p),B.ap,v,v,new A.p(r,v,v,q,p,v,B.m),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cEi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.fo,B.cY,B.h9],k):A.a([B.b8,B.aZ,B.bU],k)
w=A.ao(l,A.V(B.vO,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.q(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.n(4),l,l,B.m),l,4,l,B.kM,l,l,l,36),l,l,l)
u=A.n(14)
t=A.K(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.v.j(0.2),B.cO,12)],x.V)
r=this.d
s=A.q(l,C.aUQ(!0,A.n(13),64,D.bUG,l,r.c,64),B.ap,l,l,new A.p(l,l,t,u,s,l,B.m),l,64,l,l,l,l,l,64)
u=A.c("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.C,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.c(r.b,l,2,B.a2,l,l,l,I.adT,l,l,l)
r=C.bJr(r.gyl(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.n(20)
o=A.K(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.am(B.a0,l,B.ac,B.t,A.a([w,new A.C(D.bKl,A.w(A.a([v,A.A(A.a([s,B.eu,A.E(A.w(A.a([u,B.at,t,B.N,A.A(A.a([r,B.aa,A.q(l,A.c(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.m),l,l,l,l,B.f8,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.B,l,B.e,B.i,0,B.p),1),A.aI(l,l,l,l,A.V(B.cD,B.c.j(0.85),l,l,l,l),l,l,l,new C.f5f(d),l,l,l,A.nu(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aXm,l,l,l,l),l,l)],m),B.B,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a6(B.aw,B.aD,B.w,k,l,l),B.m),l,l,l,l,l,l,l,1/0)},
b5v(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.p(B.aZ,w,w,A.n(2),w,w,B.m),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.aa,A.c(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,B.C,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b5u(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.n(18),p=A.n(18),o=d.a,n=o?D.amV:B.aS
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.er:B.bP
w=w.j(o?0.8:1)}w=A.K(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cO,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.n(12)
s=A.K(h.j(0.35),B.r,1)
t=A.q(r,A.V(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.m),r,r,r,r,B.tR,r,r,r)
u=A.c(k,r,r,r,r,r,r,A.l(r,r,o?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.eK(new A.C(E.a2q,A.w(A.a([t,B.af,u,B.bs,A.c(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,B.cE,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.i,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
aCk(d,e,f,g,h,i,j){return this.b5u(d,!1,e,f,g,h,i,j)}}
C.avW.prototype={
R(){return new C.bqp()}}
C.bqp.prototype={
Z(){this.a4()
this.aih()},
aih(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aih=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bJt(p.c,p.d),$async$aih)
case 7:q=e
if(r.c==null){w=1
break}r.l(new C.f4U(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.l(new C.f4V(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aih,v)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.Q(d).ax.a===B.I,f=g?B.CI:B.hX,e=i.d
e=e==null?h:B.a.Y(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aI(h,h,h,h,A.V(B.eI,g?B.ab:B.an,h,h,h,18),h,h,h,new C.f4W(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.c("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.a_,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.uy],u),B.l,h,B.e,B.i,0,h,h)
t=A.n(24)
s=x.O
s=g?A.a([B.fo,B.cY,B.h9],s):A.a([B.b8,B.aZ,B.bU],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aZ.j(g?0.4:0.3),B.eS,24)],r)
p=i.a.d
o=A.c(p.b,h,h,h,h,h,h,B.dw,B.K,h,h)
p=C.bJr(p.gyl(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.n(20)
l=v===1?"item":"items"
s=A.q(h,A.w(A.a([o,B.aj,A.A(A.a([p,B.aa,A.q(h,A.c(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.m),h,h,h,h,B.f8,h,h,h)],u),B.l,h,B.bc,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a6(B.aw,B.aD,B.w,s,h,h),B.m),h,h,h,h,E.a2P,h,h,1/0)
t=g?D.bvW:B.c
q=A.n(24)
p=A.K(w?B.aH.j(0.4):B.aZ.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.v.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.c(n,h,h,h,h,h,h,B.Xf,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eKP)
else{m=A.n(20)
l=A.K(B.bo,B.r,1)
o.push(A.q(h,A.qx(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.m),h,h,h,h,B.bR,h,h,h))}}o.push(B.aN)
n=w?B.aH:B.aZ
n=n.j(g?0.15:0.1)
m=A.n(12)
l=A.K((w?B.aH:B.aZ).j(0.35),B.r,1)
k=w?B.QT:B.Rw
k=A.V(k,w?B.aH:B.aZ,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.ar,A.E(A.c(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.m),h,h,h,h,B.hq,h,h,h))
return A.c6(h,f,A.bm(!0,A.w(A.a([new A.C(Ah.PX,e,h),A.E(A.cb(A.w(A.a([s,B.aN,A.q(h,A.w(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.m),h,h,h,h,B.vs,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,h,E.apB,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.aw0.prototype={
R(){return new C.aIP(A.Aj(B.Pc,B.oI,B.vV))}}
C.aIP.prototype={
t(){this.d.t()
this.a3()},
aRs(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j8(w,d)},
ckn(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u]
s=C.iIw(t)
if(s!=null){this.aRs(s)
return}r=C.hLS(t)
if(r!=null)q=A.cX(r,p,0)
else q=!1
if(q){this.aRs(B.a.i(B.a.aV(r,B.a.c8(r,p))))
return}}},
C(d){var w,v,u=this,t=null,s=x.p,r=A.eR(A.a([A.aI(t,t,t,t,A.V(u.f?B.ry:Ab.R1,t,t,t,t,t),t,t,t,new C.f4Y(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.CI,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.hfS,t,t,t,1,t,!0),q=A.Ai(u.d,B.c1,u.gckm()),p=A.n(28)
p=A.at(A.q(t,t,B.f,t,t,new A.p(t,t,A.K(B.aZ,B.r,3),p,A.a([new A.ac(2,B.G,B.aZ.j(0.35),B.J,24)],x.V),t,B.m),t,260,t,t,t,t,t,260),t,t,t)
w=B.v.j(0.72)
v=A.n(16)
return A.c6(r,B.v,new A.am(B.a0,t,B.b7,B.t,A.a([q,p,A.ao(32,A.q(t,D.heC,B.f,t,t,new A.p(w,t,A.K(B.aZ.j(0.45),B.r,1),v,t,t,B.m),t,t,t,t,B.jF,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aNS.prototype={
a9(){return"_WorksheetTab."+this.b}}
C.PO.prototype={
R(){return new C.aIR(D.afR,A.a([],x.D))},
bx(){return this.r.$0()},
gea(){return this.c}}
C.aIR.prototype={
gcM_(){return J.bKB(this.e,0,new C.f5G())},
Z(){this.a4()
$.aS.cT$.push(this)
this.wS()},
t(){$.aS.hR(this)
this.a3()},
ji(d){if(d===B.fY)this.wS()},
wS(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wS=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.E6(q.a.c).d9(0,B.kl),$async$wS)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.l(new C.f5C(q,p))
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
if(q.c!=null&&q.f)q.l(new C.f5D(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wS,v)},
Jz(d){return this.bQS(d)},
bQR(){return this.Jz(null)},
bQS(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Jz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iKE(l,d),$async$Jz)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.n.v(1000*Date.now())
r=s.a
q=s.b
p=new C.m4(l,r,q,D.dwD,new A.W(Date.now(),0,!1))
w=4
return A.b(C.MP(t.a.c,p),$async$Jz)
case 4:o=f
w=5
return A.b(t.wS(),$async$Jz)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.M(x.q).f.T(D.fFk)
w=1
break}n=J.aN(t.e)
for(;;){if(!n.A()){m=p
break}m=n.gP(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.M(q).f.T(D.fH9)
else n.M(q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.FY(m)
case 1:return A.h(u,v)}})
return A.i($async$Jz,v)},
FY(d){return this.coy(d)},
coy(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$FY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hf(s,new C.aw1(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$FY)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.MP(u.a.c,t),$async$FY)
case 5:case 4:w=6
return A.b(u.wS(),$async$FY)
case 6:return A.h(null,v)}})
return A.i($async$FY,v)},
wC(d){return this.c6j(d)},
c6j(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$wC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bIW(),$async$wC)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hf(r,D.aOO,!0,"NgmyWorksheetProjectScan",x.N),$async$wC)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bJs(q),$async$wC)
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
break}p=C.hwO(s)
w=15
return A.b(C.MP(t.a.c,p),$async$wC)
case 15:o=f
w=16
return A.b(t.wS(),$async$wC)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.M(x.q).f.T(D.fHe)
w=1
break}r.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.FY(p)
case 1:return A.h(u,v)}})
return A.i($async$wC,v)},
PI(d){return this.bPt(d)},
bPt(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$PI=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.f5n(d),s,null,!0,!0,x.y),$async$PI)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.pz(t.a.c,A.a([],x.D)),$async$PI)
case 6:w=7
return A.b(t.wS(),$async$PI)
case 7:s=t.c
if(s==null){w=1
break}s.M(x.q).f.T(D.fFp)
case 4:case 1:return A.h(u,v)}})
return A.i($async$PI,v)},
coM(d){var w=this.c
w.toString
A.bU(B.L,null,new C.f5w(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
bbc(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.n(16),p=g.a
if(p)w=B.ke
else w=B.c
v=A.n(16)
u=A.K(p?B.er:B.bP,B.r,1)
t=d.j(0.14)
s=A.n(12)
s=A.q(r,A.V(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.m),r,r,r,r,B.bS,r,r,r)
t=A.c(i,r,r,r,r,r,r,A.l(r,r,p?B.aS:B.ax,r,r,r,r,r,r,r,r,14,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aG(!1,B.a3,!0,r,A.aM(!1,q,!0,A.q(r,A.w(A.a([s,B.af,t,B.bs,A.c(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.bl,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.B,r,B.e,B.i,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.m),r,r,r,r,B.tN,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
a2x(d,e){return this.coz(d,e)},
coz(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2x=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bU(B.L,null,new C.f5r(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a2x)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hWN(r,new C.f5s(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.PK(d,e),$async$a2x)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2x,v)},
b89(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.n(12)
s=A.q(u,A.V(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.m),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aC
else t=h.a?B.aS:B.ax
t=A.c(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.w(A.a([t,A.c(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.bl,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.B,u,B.e,B.i,0,B.p),1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,u,!0,new A.C(A1.Dq,A.A(A.a([s,B.bd,t,A.V(B.eP,w?B.bv:B.bl,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai)},
cvK(d,e,f,g,h,i){return this.b89(!1,d,e,f,g,h,i)},
PK(d,e){return this.bPD(d,e)},
bPD(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$PK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lH(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$PK)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bHA(t.a.c,d.a),$async$PK)
case 6:w=7
return A.b(t.wS(),$async$PK)
case 7:r=t.c
if(r==null){w=1
break}r.M(x.q).f.T(A.b2(null,null,null,null,null,B.t,null,A.c("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$PK,v)},
C(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.Q(d).ax.a===B.I,m=new C.uC(n),l=n?B.c8:B.hX
if(p.f)n=D.bhX
else{w=A.aE(d,B.dL,x.w).w
v=p.bJS(m)
u=p.c5n(m)
t=p.gbGT()
if(n)s=B.ke
else s=B.c
r=A.n(13)
q=x.p
t=A.a([v,B.af,u,B.aN,new C.GU(A.q(o,A.A(A.a([p.aFX(P.Qz,"Projects",m,D.afR),p.aFX(B.vz,"Cashier",m,D.b5I),p.aFX(B.Il,"Family Tree",m,D.i4Z)],q),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(s,o,o,r,o,o,B.m),o,o,o,o,o,o,o,o),14,B.eH,0.95,t,o),B.bx],q)
v=p.d
if(v===D.afR){v=J.aa(p.e)
B.d.u(t,A.a([A.A(A.a([A.c("Projects ("+v+")",o,o,o,o,o,o,A.l(o,o,n?B.aS:B.ax,o,o,o,o,o,o,o,o,16,o,o,B.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.aY,new C.aAR(p.gaVT(),o)],q),B.l,o,B.e,B.i,0,o,o),B.az,p.cvM(m)],q))}else{n=p.a
if(v===D.b5I)t.push(new C.arI(n.c,m,o))
else{v=p.r
t.push(new C.asY(n.c,n.d,n.e,n.f,new C.f5J(p),new C.f5K(p),new A.b9(v,x.b4)))}}n=A.cb(A.w(t,B.B,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,new A.R(20,w.r.b+8,20,32),o,o,B.ah)}return A.c6(o,l,A.bm(!0,n,!0,!1,B.ag,!0,!1),o,!1,!1,o,o)},
bJS(d){var w=null,v=A.n(8),u=d.a,t=A.V(Y.a44,u?B.bv:B.bl,w,w,w,16)
return A.aM(!1,v,!0,new A.C(B.jZ,A.A(A.a([t,B.b6,A.c("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f5k(this),w,w,w,w,w,w,w)},
gbGT(){switch(this.d.a){case 0:return D.af_
case 1:return D.hSz
case 2:return D.af0}},
c5n(d){var w=null,v=A.n(15),u=A.a([new A.ac(0,B.G,B.aZ.j(0.35),B.cy,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.c4W,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,44,w,w,w,w,w,44),B.bd,D.bOW,A.aG(!1,B.a3,!0,w,A.aM(!1,A.n(12),!0,A.q(w,D.c2d,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.n(12),w,w,B.m),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f5o(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)],t),B.B,w,B.e,B.i,0,w,w),r=B.b8.j(0.55),q=A.n(12)
return new C.GU(A.q(w,A.w(A.a([new A.C(B.HY,s,w),A.q(w,A.w(A.a([A.c("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.at,A.c(A.BN(this.gcM_()),w,w,w,w,w,w,D.fZl,w,w,w)],t),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.m),w,w,w,B.tM,B.jF,w,w,1/0)],t),B.B,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(B.aZ,w,w,v,u,w,B.m),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hSy,w)},
aFX(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.n(12),r=t?B.aZ:B.L,q=A.n(12),p=t?A.K(B.c.j(0.55),B.r,2):A.K(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aZ.j(0.42),B.cO,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.bl
w=A.V(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.bl
return A.E(A.aG(!1,B.a3,!0,u,A.aM(!1,s,!0,A.cZ(u,A.A(A.a([w,B.dU,new A.d_(1,B.c9,A.c(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bc,B.i,0,u,u),u,u,B.cn,new A.p(r,u,p,q,o,u,B.m),B.iP,u,u,u,u,B.I5,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f5F(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),1)},
cvM(d){var w,v,u,t,s,r,q=this,p=null
if(J.ch(q.e)){w=d.a
v=w?B.eo:B.c
u=A.n(15)
t=A.q(p,D.c2k,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.G,B.aZ.j(0.5),B.eS,28)],x.V),D.cf2,B.a6),p,108,p,p,p,p,p,108)
s=A.c("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aS:B.ax,p,p,p,p,p,p,p,p,18,p,p,B.C,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.GU(A.q(p,A.w(A.a([t,B.df,s,B.N,A.c("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.bl,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.ee,A.A(A.a([A.E(q.aXx(B.jJ,"Scan QR",new C.f5z(q),d),1),B.ar,A.E(q.aXx(Q.At,"Upload file",new C.f5A(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.az,A.bI(D.hqG,p,q.gaVT(),A.bp(B.aZ,p,p,p,B.c,B.hv,p,p,new A.bb(A.n(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.m),p,p,p,p,p,p,p,1/0),16,D.bLq,1.05,D.af_,p)}w=J.b8(q.e,new C.f5B(q,d),x.l)
w=A.B(w,w.$ti.k("aj.E"))
return new C.GU(A.w(w,B.l,p,B.e,B.i,0,B.p),16,B.bS,1,D.af_,p)},
aXx(d,e,f,g){var w=null,v=B.aZ.j(g.a?0.18:0.1),u=A.n(12),t=A.n(12),s=A.n(12),r=A.K(B.aZ.j(0.45),B.r,1)
return A.aG(!1,B.a3,!0,u,A.aM(!1,t,!0,A.q(w,A.w(A.a([A.V(d,B.b8,w,w,w,26),B.N,A.c(e,w,w,w,w,w,w,D.fXu,B.K,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.m),w,w,w,w,Ax.a2c,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.ai)},
cvL(d,e){var w,v,u=null,t=e.a,s=t?B.eo:B.c,r=A.n(14),q=A.K(t?B.er:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.v.j(t?0.35:0.08),B.eJ,10)],x.V),o=A.n(14),n=t?B.bv:B.bl
n=A.bv(B.Zn,new A.fD(1.7777777777777777,C.aUQ(!0,B.ft,1/0,P.Qz,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.w(A.a([A.c(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aS:B.ax,u,u,u,u,u,u,u,u,15,u,u,B.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.at,A.c(""+d.d.length+" budget items \xb7 "+A.BN(d.gyl()),u,u,u,u,u,u,D.fVr,u,u,u)],w),B.B,u,B.e,B.i,0,B.p),1)
return A.q(u,A.aG(!1,B.a3,!0,u,A.aM(!1,o,!0,A.w(A.a([n,new A.C(B.bD,A.A(A.a([v,A.aI(u,u,u,u,A.V(Ao.a56,t?B.bv:B.bl,u,u,u,u),u,u,u,new C.f5x(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.B,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.f5y(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.ai),B.f,u,u,new A.p(s,u,q,r,p,u,B.m),u,u,u,B.dX,u,u,u,1/0)}}
C.bDp.prototype={}
C.rP.prototype={
ak(){var w=this,v=w.c,u=w.d
return A.J(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd5n(){var w,v,u,t,s=this.c
if(s===B.h.bg(s))w=B.n.v(B.h.L(s))
else{v=B.h.a1(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aD(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.m4.prototype={
gyl(){return B.d.cH(this.d,0,new C.cKv())},
ak(){var w=this,v=w.d,u=A.T(v).k("O<1,a9<o,@>>")
v=A.B(new A.O(v,new C.cKu(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
biH(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.m4(w.a,w.b,v,u,w.e)},
bio(d){return this.biH(d,null)},
UW(d){return this.biH(null,d)}}
C.IY.prototype={
a9(){return"FamilyGender."+this.b}}
C.id.prototype={
ak(){var w=this
return A.J(["id",w.a,"name",w.b,"gender",C.hRH(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aIM(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.id(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.anU.prototype={
a9(){return"FamilyTreeAccessRole."+this.b}}
C.li.prototype={
gasK(){var w=this.f
return new A.X(w,new C.bWs(),A.T(w).k("X<1>")).gI(0)},
ak(){var w=this,v=w.f,u=A.T(v).k("O<1,a9<o,@>>")
v=A.B(new A.O(v,new C.bWr(),u),u.k("aj.E"))
return A.J(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.iAb(w.y),"games",w.z],x.N,x.z)},
xC(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.li(w.a,v,u,t,s,r,w.r,q,p,o,n)},
biG(d,e){var w=null
return this.xC(w,w,w,d,e,w,w,w,w)},
cVy(d,e,f,g,h,i,j){return this.xC(d,e,null,f,g,h,i,j,null)},
aIR(d,e){var w=null
return this.xC(w,w,w,w,d,w,w,e,w)},
cVA(d,e,f,g,h,i,j,k){return this.xC(d,e,null,f,g,h,i,j,k)},
cU0(d){var w=null
return this.xC(w,w,w,w,w,w,w,d,w)},
cUo(d){var w=null
return this.xC(w,w,w,w,w,w,w,w,d)},
bii(d){var w=null
return this.xC(w,w,d,w,w,w,w,w,w)},
aIz(d){var w=null
return this.xC(w,w,w,w,w,d,w,w,w)},
cV4(d,e,f){var w=null
return this.xC(w,d,w,w,e,w,w,f,w)},
cTO(d){var w=null
return this.xC(w,w,w,d,w,w,w,w,w)},
cUA(d,e){var w=null
return this.xC(d,w,w,w,w,w,e,w,w)}}
C.cKw.prototype={
a9(){return"WrapAlignment."+this.b}}
C.cKx.prototype={
a9(){return"WrapCrossAlignment."+this.b}}
C.aL0.prototype={}
C.bdB.prototype={
aj(d){this.a=d.a
this.b=d.b},
d4(d){var w=new C.bdB()
w.a=this.a
w.b=this.b
return w},
v(d){return A.b6(this).v(0)+" first:"+this.a+" last:"+this.b}}
C.bdA.prototype={
gxt(){return!0},
gHA(){return this.z.b<this.b.length},
aZd(d){switch(0){case 0:return d.a.c}},
aYU(d){switch(0){case 0:return d.a.d}},
bZO(d,e){switch(0){case 0:return new A.hZ(d,e)}},
bZb(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hq(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.jg(0,0,B.n.D(0,b5.a,b5.b),B.n.D(0,b5.c,b5.d))
return}w=A.IH(b4)
switch(0){case 0:v=b5.b
u=new A.lf(0,v,0,1/0)
t=w===B.X6
break}s=A.a([],x.gZ)
r=A.S(x.gF,x.S)
for(b3=b1.z,q=B.d.fG(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.I)(q),++h){g=q[h]
g.hq(b4,u,!0)
f=b1.aZd(g)
f.toString
e=b1.aYU(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aL0(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aL0(k,j,i))}d=s.length
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
a8=b1.aZd(g)
e=b1.aYU(g)
e.toString
a9=b1.bZb(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bZO(a6,a3+a9)
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
v.ej(u.a,u.b,0,1)
w.pL(0,v)
for(u=r.z,u=B.d.dw(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.I)(u),++s)u[s].h3(d)
w.nR(0)},
I7(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
iG(){return this.z}}
C.bBE.prototype={}
var z=a.updateTypes(["az<~>()","P(id)","~()","P(li)","P(nR)","a9<o,@>(li)","F(li,li)","F(id,id)","o(id)","li(a9<@,@>)","P(m4)","nR(a9<@,@>)","a9<o,@>(nR)","P(vh)","vh()","F(id)","ah<id>()","P(A2)","a1n(Z)","o?(id)","eS<o?>(id)","az<~>(m4)","P(rP)","a9<o,@>(id)","id(a9<@,@>)","F(m4,m4)","P(ahs)","~(bh)","x(pb)","F(F,abq)","P(r4<F>)","~(r4<F>)","UX(Z)","P(Nq)","P(vg)","~(id)","o(o)","Xh(Z)","UW(Z)","afM(Z)","a0f(Z)","id(id)","cS(bw<o,H8>)","cS(Lr)","a0M(Z)","F?(id)","id()","P(Lr)","C(id)","~(IY)","a0I(Z)","x(IY,o,a_)","P(ahl)","bw<o,ah<a9<o,@>>>(o,ah<nR>)","a0K(Z)","+count,id,name(F,o,o)(li)","o(li)","a1H(Z)","a1I(Z)","P(mp)","mp()","a_K(Z)","a3x(Z)","a0k(Z)","a0j(Z)","~(F)","~(o,lR?)","x(rP)","ag6(Z)","~(lN)","az<~>([o?])","G(G,m4)","x(m4)","G(G,rP)","a9<o,@>(rP)","rP(a9<@,@>)","ah<lR>()","vg()","o(W)","m4(a9<@,@>)","cr(IX)","o(m4)","a9<o,@>(m4)","F(nR,nR)","li(a9<o,@>)","li(li)"])
C.h0V.prototype={
$1(d){return d.a+" "+d.b},
$S:126}
C.h0U.prototype={
bs8(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.qZ(s,d,B.i7,"book",E.HM),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.Y(r!=null&&A.HY(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bs8(d)},
$S:250}
C.h0W.prototype={
$1(d){return d.b},
$S:126}
C.hbK.prototype={
$1(d){var w=null
return A.eE(w,B.L,new H.Rg(this.a,this.b,w),w,w,0,B.a2s,w,B.db,w,w,w)},
$S:46}
C.fO1.prototype={
$1(d){return d!=null},
$S:238}
C.fO2.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:238}
C.fO7.prototype={
$1(d){if(this.a)return new A.m(d.a*520,d.b*160)
return d},
$S:138}
C.fZp.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.ff(d,w,w,w,A.hn(w,B.uo,w,w,w,w,w,w,w,B.dK,w,w,10.5,w,B.eO,w,!0,w,w,w,w),w),u=f?B.eO:B.vw
return new A.oB(D.bGK,A.ace(A.a([new A.h7(130,w,v),new A.A1(1,B.If,A.ff(e,w,w,w,A.hn(w,g==null?D.eNg:g,w,w,w,w,w,w,w,B.dK,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.zp,B.md))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:2026}
C.fZo.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.wu(999)
f=A.y2(A.mj(h,A.ff("Cashier",h,h,h,A.hn(h,D.Bm,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eO,h,!0,h,h,h,h),h),h,new A.lg(D.eN6,h,f,B.ip,h),h,h,D.bHd,h))
w=A.y2(A.ff("Debt receipt",h,h,h,A.hn(h,h,h,h,h,h,h,h,h,B.dK,h,h,22,h,B.eO,h,!0,h,h,h,h),h))
v=A.y2(A.ff(C.xJ(new A.W(Date.now(),0,!1),!0),h,h,h,D.adm,h))
u=A.wu(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.ff(s,h,h,h,A.hn(h,h,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eO,h,!0,h,h,h,h),h)
r=A.ff("Person who owes",h,h,h,D.adm,h)
q=A.wu(10)
p=x.Z
u=A.mj(h,A.zU(A.a([s,new A.h7(h,2,h),r,new A.h7(h,10,h),A.mj(h,A.zU(A.a([A.ff("Amount owed",h,h,h,D.adm,h),new A.h7(h,2,h),A.ff(A.BN(t.c),h,h,h,A.hn(h,D.Bm,h,h,h,h,h,h,h,B.dK,h,h,20,h,B.eO,h,!0,h,h,h,h),h)],p),B.tC,B.md),h,new A.lg(B.qu,h,q,B.ip,h),h,h,D.bGp,1/0)],p),B.tC,B.md),h,new A.lg(E.aQe,h,u,B.ip,h),h,h,D.bIq,1/0)
q=new A.ok(D.eNa,0.9,B.lw)
r=A.wu(12)
s=i.c
o=s.$2("Original due",C.xJ(t.r,!1))
n=s.$2("Current due",C.xJ(t.f,!1))
m=i.d
l=new A.ok(m,1.1,B.lw)
k=A.wu(8)
j=i.a
k=A.a([o,n,new A.h7(h,6,h),A.mj(h,A.y2(A.ff(t.gaQ_(),h,h,h,A.hn(h,m,h,h,h,h,h,h,h,B.dK,h,h,11,h,B.eO,h,!0,0.5,h,h,h),h)),h,new A.lg(h,new A.qm(l,l,l,l),k,B.ip,h),h,h,D.bHm,1/0),new A.h7(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Bm))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Bm))
else{n=A.ff("Missed days ("+n+")",h,h,h,A.hn(h,B.uo,h,h,h,h,h,h,h,B.dK,h,h,10.5,h,B.eO,h,!0,h,h,h,h),h)
m=A.T(o).k("O<1,Uw>")
o=A.B(new A.O(o,new C.fZn(),m),m.k("aj.E"))
B.d.u(k,A.a([new A.h7(h,4,h),n,new A.h7(h,6,h),new C.bdA(5,5,new C.bdB(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.u(k,A.a([new A.h7(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.h7(h,8,h),w,new A.h7(h,3,h),v,new A.h7(h,16,h),u,new A.h7(h,10,h),A.mj(h,A.zU(k,B.zp,B.md),h,new A.lg(h,new A.qm(q,q,q,q),r,B.ip,h),h,h,B.aoo,1/0)],p)
w=j.a
if(w!=null){v=new A.ok(B.KQ,1,B.lw)
B.d.u(f,A.a([new A.h7(h,16,h),A.ff("Debtor signature",h,h,h,A.hn(h,B.uo,h,h,h,h,h,h,h,B.dK,h,h,10,h,B.eO,h,!0,h,h,h,h),h),new A.h7(h,6,h),A.mj(h,new A.Je(w,B.Zz,h,h),h,new A.lg(h,new A.qm(v,v,v,v),A.wu(6),B.ip,h),82,h,B.PU,1/0)],p))}f.push(new A.h7(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.ff(w,h,h,h,D.fNw,h))
f.push(new A.h7(h,18,h))
f.push(A.y2(A.ff("NGMY.ORG",h,h,h,A.hn(h,D.Bm,h,h,h,h,h,h,h,B.dK,h,h,14,h,B.eO,h,!0,1.8,h,h,h),h)))
return f},
$S:363}
C.fZn.prototype={
$1(d){var w=null,v=new A.ok(D.KR,0.7,B.lw),u=A.wu(999)
return A.mj(w,A.ff(C.xJ(d,!1),w,w,w,A.hn(w,D.KR,w,w,w,w,w,w,w,B.dK,w,w,9.5,w,B.eO,w,!0,w,w,w,w),w),w,new A.lg(w,new A.qm(v,v,v,v),u,B.ip,w),w,w,D.bMQ,w)},
$S:2027}
C.cbN.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.n(999),t=A.K(B.bC.j(0.28),B.r,1)
return A.q(w,A.c(C.xJ(d,!1),w,w,w,w,w,w,D.fUT,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.m),w,w,w,w,B.f4,w,w,w)},
$S:2028}
C.hch.prototype={
$1(d){var w=null,v=A.aE(d,B.bY,x.w).w,u=A.n(26),t=A.aI(w,w,w,w,D.c5Y,w,w,w,new C.hce(d),w,w,w,w,w,B.cp),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eE(w,B.L,new A.cR(new A.aX(0,380,0,v.a.b*0.9),A.aG(!1,B.a3,!0,u,new A.C(B.a2d,A.w(A.a([new A.bH(B.a9,w,w,t,w),new A.d_(1,B.c9,A.cb(A.w(A.a([new A.ea(new C.b2q(r,w),s),B.S,A.A(A.a([A.E(A.eo(B.AB,w,D.hmO,new C.hcf(s,r,d),A.dj(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fc,w,new A.bb(A.n(14),B.a1),new A.ax(q,1,B.r,-1),w,w,w,w)),1),B.aa,A.E(A.df(B.a5G,w,D.hj2,new C.hcg(r,d),A.bp(B.b8,w,w,w,B.c,w,B.fc,w,new A.bb(A.n(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.P,0,B.p),w),B.f,B.ax,0,w,w,w,w,w,B.ai),w),w,w,0,B.a2H,w,B.db,w,w,w)},
$S:46}
C.hce.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.hcf.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aS.bl$.x.h(0,t.a)
m=m==null?null:m.gbf()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.lG(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hr),$async$$0)
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
C.hcg.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.h61(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.M(x.q).f
s.T(A.b2(null,null,null,null,null,B.t,null,A.c(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.hc9.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.b
return A.eE(w,B.ax,A.w(A.a([new A.C(D.bIe,A.A(A.a([A.E(A.c(this.a,w,w,w,w,w,w,B.mX,w,w,w),1),A.aI(w,w,w,w,B.lL,w,w,w,new C.hc7(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.d_(1,B.c9,new A.C(B.eG,A.bv(A.n(14),A.ha(t,B.z,w,w,B.cr,B.dE,!1,w,!1,w,w),B.ap),w),w),new A.C(B.Pz,new A.a4(1/0,w,A.df(B.on,w,D.b_P,new C.hc8(t,this.c,d),A.bp(B.b8,w,w,w,B.c,w,w,w,new A.bb(A.n(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.P,0,B.p),w,w,w,B.PL,w,B.db,w,new A.bb(v,B.a1),w)},
$S:46}
C.hc7.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.hc8.prototype={
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
C.hcl.prototype={
$1(d){var w=null,v=A.n(20),u=x.p,t=this.a,s=this.b
return A.eE(w,B.ax,new A.C(D.bIm,A.w(A.a([A.A(A.a([D.bO1,A.aI(w,w,w,w,B.lL,w,w,w,new C.hcj(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.N,new A.ea(A.bv(A.n(14),A.q(w,A.b4(w,w,w,new C.bfT(s.ax,w),B.aA),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.af,new A.a4(1/0,w,A.df(B.on,w,D.b_P,new C.hck(t,s,d),A.bp(B.b8,w,w,w,B.c,w,w,w,new A.bb(A.n(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.db,w,new A.bb(v,B.a1),w)},
$S:46}
C.hcj.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.hck.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aS.bl$.x.h(0,t.a)
n=n==null?null:n.gbf()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.lG(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hr),$async$$0)
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
C.fT5.prototype={
$1(d){return d.a===this.a},
$S:266}
C.dWQ.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dWB.prototype={
brk(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.eo:B.c
s=u.a
w=2
return A.b(A.bU(t,null,new C.dWE(s,q,e),p,!0,!0,!1,B.FE,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dWF(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.brk(d,e)},
$S:2029}
C.dWE.prototype={
$1(d){var w,v=null,u=this.c===B.y_,t=u?D.dEa:D.dzo
u=u?"Male":"Female"
w=this.b
u=A.c("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aS:B.ax,v,v,v,v,v,v,v,v,15,v,v,B.C,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.C(B.aoY,A.w(A.a([u,B.at,A.c("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.im(!0,v,v,B.y,D.fDV,new C.dWD(this.a,w,t,d),t.length,v,B.eb,B.ah,!0)],x.p),B.al,v,B.e,B.P,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:28}
C.dWD.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.n(14)
if(q)w=B.cY.j(0.14)
else w=t.b.a.d.a?B.a_:B.aS
v=A.n(14)
if(q)u=B.cY
else u=(t.b.a.d.a?B.bv:B.bl).j(0.16)
u=A.K(u,B.r,q?1.6:1)
return A.aM(!1,p,!0,A.q(B.z,C.b2p(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.m),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dWC(t.d,r),s,s,s,s,s,s,s)},
$S:155}
C.dWC.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.dWF.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dWz.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:89}
C.dWA.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cN(B.cn,e,v)
return new A.de(e,!1,A.iF(B.z,A.at(A.aG(!1,B.a3,!0,v,new A.ec(new C.dWy(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.ai),v,v,v),v,new A.bk(t,new A.bq(0.96,1,u),u.k("bk<bT.T>"))),v)},
$S:34}
C.dWy.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aE(d,B.bY,x.w).w,i=l.b,h=i.a.d.a,g=h?B.eo:B.c,f=A.n(14),e=A.K((h?B.bv:B.bl).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.c(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,16,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.n(8)
u=x.p
v=A.A(A.a([w,A.aM(!1,v,!0,new A.C(B.eH,A.V(B.cD,i.a.d.a?B.bv:B.bl,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dWj(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aY3("Name")
r=l.a
q=r.d==null?k:new C.dWk(r,l.e,a0)
p=A.n(20)
o=i.a.d.a?B.bt:B.mr
n=A.K(B.cY.j(0.35),B.r,1)
m=r.d
t=A.aO(k,B.M,h,k,!0,B.t,k,A.aP(),w,k,k,k,k,k,2,s.aII(new A.C(B.eX,A.aM(!1,p,!0,A.q(B.z,C.b2p(m==null?"\ud83d\udc64":A.h_f(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a6),k,34,k,B.ct,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.lr,k,B.adb,k,k)
v=A.a([v,B.af,t,B.N,A.c("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.aj,A.A(A.a([A.E(i.aYK("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dWl(r,a0),r.d===B.y_),1),B.aa,A.E(i.aYK("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dWq(r,a0),r.d===B.a9F),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.u(v,A.a([B.N,new A.bH(B.a5,k,k,A.hz(D.c49,D.hl_,new C.dWr(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cY,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cp)),k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.vk(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aO(k,B.M,!1,k,!0,B.t,k,A.aP(),l.f,k,k,k,k,k,2,i.aY4("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.am,k,k,s,k,k,B.el,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.ao,k,k,k,k))
v.push(B.S)
t=i.a.d.a
s=t?B.a_:B.aS
q=A.n(10)
p=A.n(10)
o=A.n(10)
n=A.K((t?B.bv:B.bl).j(0.22),B.r,1)
t=A.c("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xJ(r.a,!1)
v.push(A.aG(!1,B.a3,!0,q,A.aM(!1,p,!0,A.q(k,A.A(A.a([A.E(A.w(A.a([t,B.bs,A.c(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,14,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.B,k,B.e,B.i,0,B.p),1),D.c0D],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.m),k,k,k,k,B.bg,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dWs(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.ai))
if(!h)B.d.u(v,A.a([B.N,A.c("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.S)
t=A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aO(k,B.M,!1,k,!0,B.t,k,A.aP(),l.r,k,k,k,k,k,2,i.aY3("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.am,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a8,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.c("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aS:B.ax,k,k,k,k,k,k,k,k,12.5,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.c("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b6w(r.b.length!==0,B.mB,new C.dWt(r,i,a0),new C.dWu(r,a0),"Upload from gallery","ID photo"))
v.push(i.b6w(r.c.length!==0,D.bUD,new C.dWv(r,i,d,a0),new C.dWw(r,a0),"Camera or gallery","Selfie"))
v.push(B.N)
t=l.w
v.push(new As.aa3("Signature (optional)",t,new C.dWx(a0),new C.dWm(a0,t),new C.dWn(d,t,a0),k))
v.push(B.az)
i=i.a.d.a
t=i?B.bv:B.bl
s=(i?B.bv:B.bl).j(0.28)
s=A.E(A.dV(E.b_I,new C.dWo(d),A.dj(k,k,k,k,k,k,k,k,k,t,k,k,B.rl,k,new A.bb(A.n(10),B.a1),new A.ax(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cY,k,k,k,B.c,k,B.rl,k,new A.bb(A.n(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.aa,A.E(A.bI(A.c(h?"Save":"Update",k,k,k,k,k,k,B.ws,k,k,k),k,new C.dWp(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.q(k,A.cb(A.w(v,B.al,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.f,k,new A.aX(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.m),k,k,k,B.ro,B.jF,k,k,360)},
$S:180}
C.dWj.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dWk.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dWl.prototype={
$0(){return this.b.$1(new C.dWi(this.a))},
$S:0}
C.dWi.prototype={
$0(){var w=this.a
w.d=B.y_
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dWq.prototype={
$0(){return this.b.$1(new C.dWh(this.a))},
$S:0}
C.dWh.prototype={
$0(){var w=this.a
w.d=B.a9F
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dWr.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dWs.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.wq(null,u.b,A.c3(2020,1,1,0,0,0,0,0),null,s,A.c3(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dWg(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWg.prototype={
$0(){var w=this.b
return this.a.a=A.c3(w.gcl(),w.gci(),w.gcC(),0,0,0,0,0)},
$S:0}
C.dWt.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Rr(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dWf(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWf.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dWu.prototype={
$0(){return this.b.$1(new C.dWe(this.a))},
$S:0}
C.dWe.prototype={
$0(){return this.a.b=""},
$S:0}
C.dWv.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.eo:B.c
w=3
return A.b(A.bU(q,null,new C.dWc(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Rr(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dWd(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dWc.prototype={
$1(d){var w=null
return A.bm(!0,A.w(A.a([A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.auC,w,w,w,w,new C.dW6(d),!1,w,w,w,w,w,w,w,D.haT,w,w,w),A.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.auA,w,w,w,w,new C.dW7(d),!1,w,w,w,w,w,w,w,D.hi_,w,w,w)],x.p),B.l,w,B.e,B.P,0,B.p),!0,!1,B.ag,!0,!0)},
$S:28}
C.dW6.prototype={
$0(){A.a7(this.a,!1).N("camera")
return null},
$S:0}
C.dW7.prototype={
$0(){A.a7(this.a,!1).N("gallery")
return null},
$S:0}
C.dWd.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dWw.prototype={
$0(){return this.b.$1(new C.dWb(this.a))},
$S:0}
C.dWb.prototype={
$0(){return this.a.c=""},
$S:0}
C.dWx.prototype={
$0(){return this.a.$1(new C.dWa())},
$S:0}
C.dWa.prototype={
$0(){},
$S:0}
C.dWm.prototype={
$0(){return this.a.$1(new C.dW9(this.b))},
$S:0}
C.dW9.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dWn.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.akq(u.a,null,null,new C.dW8(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dW8.prototype={
$4(d,e,f,g){this.a.$1(new C.dW5(this.b,d))},
$S:453}
C.dW5.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.u(w,this.b)},
$S:0}
C.dWo.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dWp.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.M(x.q).f.T(D.fJ8)
return}if(w.a.d==null){w.c.M(x.q).f.T(D.fFY)
return}A.a7(w.c,!1).N(!0)},
$S:0}
C.dWT.prototype={
$3(d,e,f){return B.bK},
$C:"$3",
$R:3,
$S:89}
C.dWU.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.eo:B.c,n=A.n(14),m=A.K((p?B.bv:B.bl).j(0.16),B.r,1)
p=A.c("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aS:B.ax,r,r,r,r,r,r,r,r,16,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.BN(w.c)
v=A.c(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.bl,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.At(r).length
u=A.c("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.At(r).length>0?B.bC:B.cY,r,r,r,r,r,r,r,r,12,r,r,B.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.bl
t=(q?B.bv:B.bl).j(0.28)
s=x.p
return new A.de(e,!1,A.at(A.aG(!1,B.a3,!0,r,A.q(r,A.w(A.a([p,B.N,v,u,B.az,A.A(A.a([A.E(A.dV(B.oB,new C.dWR(d),A.dj(r,r,r,r,r,r,r,r,r,w,r,r,B.jD,r,new A.bb(A.n(10),B.a1),new A.ax(t,1,B.r,-1),r,r,r,r)),1),B.aa,A.E(A.bI(D.hir,r,new C.dWS(d),A.bp(B.cY,r,r,r,B.c,r,B.jD,r,new A.bb(A.n(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.P,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.m),r,r,r,B.zL,B.HY,r,r,300),B.f,B.L,0,r,r,r,r,r,B.ai),r,r,r),r)},
$S:34}
C.dWR.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dWS.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dWN.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dWO(r),p=r.a.d.a,o=p?B.eo:B.c,n=A.n(14),m=A.K((p?B.bv:B.bl).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.c(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aS:B.ax,s,s,s,s,s,s,s,s,14,s,s,B.C,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.c(A.BN(l.c),s,s,s,s,s,s,D.fWv,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.jd((r.a.d.a?B.bv:B.bl).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a4r,"View receipt",new C.dWG(r,d,l))
u=l.x!=null
t=u?B.qd:B.rv
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.C(D.bIj,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dWH(r,d,l)),q.$3$icon$label$onTap(B.DK,"Edit",new C.dWI(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mB,"View / download ID",new C.dWJ(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bUC,"View / download selfie",new C.dWK(r,d,l)))
if(l.gaKu())p.push(q.$3$icon$label$onTap(B.a5w,"View / download signature",new C.dWL(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.et,"Delete",new C.dWM(r,d,l)))
p.push(B.at)
return A.bm(!0,new A.C(B.tM,A.q(s,A.w(p,B.l,s,B.e,B.P,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.m),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:28}
C.dWO.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aS:B.ax
else w=d
return A.aM(!1,v,!0,new A.C(B.f3,A.A(A.a([A.V(e,w,v,v,v,20),B.bd,A.c(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:2030}
C.dWG.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.hcd(w,this.c)},
$S:0}
C.dWH.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.Ue(this.c)},
$S:0}
C.dWI.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.ED(this.c)},
$S:0}
C.dWJ.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bJN(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dWK.prototype={
$0(){var w,v,u
A.a7(this.b,!1).N(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bJN(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dWL.prototype={
$0(){A.a7(this.b,!1).N(null)
var w=this.a.c
w.toString
C.hci(w,this.c)},
$S:0}
C.dWM.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.Rq(0,this.c)},
$S:0}
C.dWV.prototype={
$1(d){return d.x==null},
$S:266}
C.dWW.prototype={
$1(d){return d.x!=null},
$S:266}
C.dWX.prototype={
$2(d,e){return d+e.c},
$S:2031}
C.dWY.prototype={
$0(){return this.a.bHp()},
$S:0}
C.dWP.prototype={
$0(){return this.a.aiv(this.b)},
$S:0}
C.fTQ.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fTR.prototype={
$0(){return B.d.gH(D.a6P)},
$S:z+77}
C.dlK.prototype={
$0(){var w=this.a
return w.l(new C.dlI(w,this.b))},
$S:0}
C.dlI.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dlJ.prototype={
$0(){},
$S:0}
C.dlL.prototype={
$0(){var w=this.a.gc67()
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.fWK.prototype={
$1(d){return C.hB6(A.a1(d,x.N,x.z))},
$S:z+11}
C.fWL.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fWM.prototype={
$2(d,e){var w=A.c9(d.a,null),v=A.c9(e.a,null)
if(w!=null&&v!=null)return B.n.aQ(w,v)
return d.d.aQ(0,e.d)},
$S:z+83}
C.haM.prototype={
$1(d){return d.ak()},
$S:z+12}
C.hjA.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fSX.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bV9.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eI(e,v)?v:null},
$S:2032}
C.hbn.prototype={
$1(d){var w=this
return new C.a0K(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dmp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.dmo(w,d))},
$S:z+80}
C.dmo.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmd.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cM(u)?v.r>=J.aa(v.d):w)v.r=J.aa(v.d)-1},
$S:0}
C.dma.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dlM.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dlN.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dme.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dlV.prototype={
$1(d){var w=null,v=A.Q(d).ax.a===B.I,u=v?B.eo:B.c,t=A.c("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.c("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.em(A.a([A.bK(!1,B.dy,w,w,!0,w,w,w,new C.dlT(d),w,w),A.bI(B.yr,w,new C.dlU(d),A.bp(B.nT,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:17}
C.dlT.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dlU.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dlW.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.n.D(w.r-1,-1,999)},
$S:0}
C.dmb.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dmc.prototype={
$0(){return B.d.gH(D.AN)},
$S:z+14}
C.dlR.prototype={
$1(d){var w=this.a,v=w.y,u=w.gzN(0),t=J.aa(w.d)
w=J.aa(w.d)===1?"page":"pages"
return new C.UW(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dlS.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dlX.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a0f(v,u,J.aa(w.d),null)},
$S:z+40}
C.dlY.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmn.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.d()
if(e===0)w=A.aA(s,new C.a_U(r.y,r.gzN(0),J.aa(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dml(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.aa(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.d()
t=r.Q
t===$&&A.d()
t=new C.bfd(v,e,w,u,t,r.gbYg(),C.hRG(r.y.Q),r.gzN(0),s)
w=t}return A.ca(q,new C.dmm(r,e),new A.C(B.a2y,w,s))},
$S:2033}
C.dmm.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.d()
t=t.f
if(t.length!==0&&B.d.gd3(t).ay){t=this.b
u=x.cy.a(B.d.gd3(u.f.f)).gvS(0)
w=t-(u==null?t:u)}else w=0
v=B.h.D(w,-1,0)
u=A.dB()
t=u.a
t.$flags&2&&A.ak(t)
t[11]=0.0013
u.fO(v*3.141592653589793*0.5)
return A.fI(B.a5,A.d3(e,B.h.D(1+v*0.5,0,1)),null,u,!0)},
$S:47}
C.dml.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aLG(B.rg,B.iQ)},
$S:0}
C.dm7.prototype={
$0(){var w=this.a
return w.l(new C.dm6(w))},
$S:0}
C.dm6.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dm8.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).N(null)
return null},
$S:0}
C.dlO.prototype={
$1(d){var w,v,u=null,t=A.n(26),s=E.kI.j(0.5),r=x.p,q=A.a([D.h9p,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ch(p.d)?"Write this book":"Write a new book"
q.push(p.a0i(d,B.e9,w,J.ch(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.a0i(d,K.ast,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cM(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.C(B.cA,A.c("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.l6.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.C(B.cA,A.c("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.l6.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.a0i(d,X.atu,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.a0i(d,B.pa,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.a0i(d,B.pa,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.u(q,r)}return A.eE(u,E.CS,A.bm(!0,new A.C(B.xi,A.w(q,B.B,u,B.e,B.P,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,B.PO,u,B.db,u,new A.bb(t,new A.ax(s,1.4,B.r,-1)),u)},
$S:46}
C.dm9.prototype={
$0(){A.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.dm0.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cM(w.d)
return new C.a0M(v,J.cM(w.d),w.r+1,null)},
$S:z+44}
C.dm1.prototype={
$1(d){var w=null
return A.pg(!1,A.em(w,w,w,E.CS,new A.km(this.a,new C.dm_(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:308}
C.dm_.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.acR,B.pu,A.E(A.c(e,w,w,w,w,w,w,B.jO,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:679}
C.dm2.prototype={
$0(){return this.a.a=!1},
$S:54}
C.dm3.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:208}
C.dm4.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dm5.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.BU(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Tz(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.l(new C.dlZ(s,t))
w=4
return A.b(s.ln(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dlZ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dmg.prototype={
$1(d){var w=null
return A.pg(!1,A.em(w,w,w,E.CS,new A.km(this.a,new C.dmf(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:308}
C.dmf.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.acR,B.pu,A.E(A.c(e,w,w,w,w,w,w,B.jO,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:679}
C.dmh.prototype={
$0(){return this.a.a=!1},
$S:54}
C.dmi.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:208}
C.dmj.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:208}
C.dmk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.BU(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.ln(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dlP.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.bo9(B.rg,A4.Pm)},
$S:0}
C.dlQ.prototype={
$0(){var w=this.a.f
w===$&&A.d()
return w.aLG(B.rg,A4.Pm)},
$S:0}
C.dob.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.doc.prototype={
$1(d){var w=this.a
return w.l(new C.doa(w))},
$S:8}
C.doa.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dod.prototype={
$1(d){var w=this.a
return w.l(new C.do9(w))},
$S:8}
C.do9.prototype={
$0(){return this.a.e="book"},
$S:0}
C.doe.prototype={
$1(d){var w=this.a
return w.l(new C.do8(w))},
$S:8}
C.do8.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dof.prototype={
$0(){var w=this.a
return w.l(new C.do7(w,this.b))},
$S:0}
C.do7.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dog.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga4r()
A.a7(this.b,!1).N(new A.buk(w,v))},
$S:0}
C.dmE.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dmD.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a0I(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dmI.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dmH.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.be4(u)
u=u.c
w=u===1?"page":"pages"
w=A.c("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hI,v,v,v)
return A.em(A.a([A.bK(!1,B.dy,v,v,!0,v,v,v,new C.dmF(d),v,v),A.bI(B.yr,v,new C.dmG(d),A.bp(B.nT,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.CS,w,v,v,v,v,D.h8a,v)},
$S:17}
C.dmF.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dmG.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dmJ.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dmK.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u)r.push(new A.a4(s,t,w[u],t))
return A.cb(A.bX(B.bG,r,B.bq,t,18,14),B.t,t,B.y,t,t,D.bJi,t,t,B.ah)},
$S:299}
C.dmC.prototype={
$0(){return this.a.Sh(0,this.b)},
$S:0}
C.dmB.prototype={
$0(){return this.a.RF(0,this.b)},
$S:0}
C.cTQ.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cTR.prototype={
$0(){return B.d.gH(D.AN)},
$S:z+14}
C.cTS.prototype={
$4(d,e,f,g){var w=null,v=A.n(e)
return A.bS(0,new A.C(d,new A.bP(new A.p(w,w,A.K(this.a.j(f),B.r,g),v,w,w,B.m),B.bn,w,w),w),0,0,0)},
$S:2035}
C.dcT.prototype={
$1(d){return this.a.l(new C.dcS(this.b,this.c))},
$S:8}
C.dcS.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ddh.prototype={
$1(d){return this.a.l(new C.dd4())},
$S:2}
C.dd4.prototype={
$0(){},
$S:0}
C.ddi.prototype={
$1(d){return this.a.l(new C.dd3())},
$S:2}
C.dd3.prototype={
$0(){},
$S:0}
C.ddj.prototype={
$0(){var w=this.a
return w.l(new C.dd2(w,this.b))},
$S:0}
C.dd2.prototype={
$0(){var w=this.a
return w.d=w.goT().Hd(this.b.a)},
$S:0}
C.ddk.prototype={
$0(){var w=this.a
return w.l(new C.dd1(w,this.b))},
$S:0}
C.dd1.prototype={
$0(){var w=this.a
return w.d=w.goT().cTk(this.b)},
$S:0}
C.ddl.prototype={
$1(d){return this.a.l(new C.dd0())},
$S:2}
C.dd0.prototype={
$0(){},
$S:0}
C.ddm.prototype={
$0(){var w=this.a
return w.l(new C.dd_(w,this.b))},
$S:0}
C.dd_.prototype={
$0(){var w=this.a
return w.d=w.goT().cTp(this.b.a)},
$S:0}
C.ddn.prototype={
$1(d){var w=this.a
return w.l(new C.ddc(w,d))},
$S:6}
C.ddc.prototype={
$0(){var w=this.a
return w.d=w.goT().cUj(this.b)},
$S:0}
C.ddo.prototype={
$1(d){var w=this.a
return w.d=w.goT().aID(d)},
$S:2}
C.ddp.prototype={
$1(d){var w=this.a
return w.d=w.goT().cTs(d)},
$S:2}
C.ddr.prototype={
$1(d){var w=this.a
return w.d=w.goT().cUh(d)},
$S:2}
C.dds.prototype={
$1(d){var w=this.a
return w.l(new C.ddb(w,d))},
$S:8}
C.ddb.prototype={
$0(){var w=this.a
return w.d=w.goT().cU8(this.b)},
$S:0}
C.ddt.prototype={
$0(){var w=this.a,v=w.goT(),u=B.a.i(w.gzN(0).a.a),t=B.a.i(w.gaFK().a.a)
u=v.biQ(B.a.i(w.gav2().a.a),t,u)
A.a7(this.b,!1).N(u)
return null},
$S:0}
C.bVj.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bVd.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bVc(w,d))},
$S:10}
C.bVc.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a2(0)}},
$S:0}
C.bVm.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bVe.prototype={
$0(){var w=this.a
w.Q=D.b5h
w.afZ(1)
w.r.x=null},
$S:0}
C.bVf.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b5h)return
w=new A.e7()
w.cW(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.dc5[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bVi.prototype={
$0(){var w=this.a
w.Q=D.afx
w.afZ(2)
w.r.z=null},
$S:0}
C.bVh.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.i2U
t.afZ(3)
w=t.r
w.d=s
w.x="I say: "+t.gDt()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.djz[v.aw(4)]:D.dH0[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bVk.prototype={
$0(){var w=this.a
w.Q=D.b5i
w.CW=this.b
w.cy=1
w.afZ(4)
w.r.f=w.f.a+5},
$S:0}
C.bVl.prototype={
$0(){},
$S:0}
C.bVg.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.bVa.prototype={
$0(){return this.a.Mp(this.b)},
$S:0}
C.bVb.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.bWQ.prototype={
$0(){var w=this
return w.a.SA(w.b,0,w.c,w.d)},
$S:0}
C.bWR.prototype={
$0(){var w=this
return w.a.SA(w.b,3,w.c,w.d)},
$S:0}
C.bWS.prototype={
$0(){var w=this
return w.a.SA(w.b,1,w.c,w.d)},
$S:0}
C.bWT.prototype={
$0(){var w=this
return w.a.bXH(w.b,w.c,w.d)},
$S:0}
C.bWU.prototype={
$0(){var w=this
return w.a.SA(w.b,4,w.c,w.d)},
$S:0}
C.bWV.prototype={
$0(){var w=this
return w.a.SA(w.b,2,w.c,w.d)},
$S:0}
C.bWW.prototype={
$0(){var w=this
return w.a.SA(w.b,5,w.c,w.d)},
$S:0}
C.bWX.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:661}
C.bWP.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a83[d],p=q.a.a6(0,new A.m(0,-q.b*1.2*124)),o=A.h2(r,B.cK,r,3,r,A.cW(r,r,r,r,r,r,r,r,r,D.fNb,e),B.a8,B.cb,r,B.e6,B.cc)
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
s=A.L()
s.r=B.dH.gp(0)
u.aq(v,s)
s=A.L()
s.r=D.r5.gp(0)
u.aq(t,s)
w=new A.aJ(w.r,B.ak,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.b_(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bz())
v=A.L()
v.r=D.r5.gp(0)
u.af(w,v)
o.a5(u,new A.m(t.a+9,t.b+6))},
$S:658}
C.bVA.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.bVB.prototype={
$2(d,e){var w=this.a,v=B.n.aQ(w.aoO(d),w.aoO(e))
if(v!==0)return v
return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.fGE.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.hjq.prototype={
$2(d,e){if(e!=null)J.bW(this.a.c0(0,d,new C.hjr()),e)},
$S:z+66}
C.hjr.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.hjs.prototype={
$1(d){return d!==this.a},
$S:3}
C.hjt.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.hju.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hjp(this.c,d))},
$S:3}
C.hjp.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.hjv.prototype={
$1(d){return d!==this.a},
$S:3}
C.hjw.prototype={
$1(d){return d!==this.a},
$S:3}
C.hjx.prototype={
$1(d){return d!==this.a&&!B.d.aR(this.b,new C.hjo(this.c,d))},
$S:3}
C.hjo.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fUt.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.aa(w)>this.a.a},
$S:3}
C.h9G.prototype={
$1(d){return d.Q},
$S:z+15}
C.h9H.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fQi.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fXG.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bQl.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.hjR.prototype={
$2(d,e){return B.n.aQ(C.hNu(d),C.hNu(e))},
$S:234}
C.hjS.prototype={
$1(d){return d!==this.a},
$S:3}
C.hai.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bOt.prototype={
$0(){var w=this.a
w.ch=!0
w.bcg()},
$S:0}
C.bOo.prototype={
$0(){},
$S:0}
C.bOu.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bOm.prototype={
$0(){},
$S:0}
C.bOn.prototype={
$0(){},
$S:0}
C.bOs.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bS(0,A.b4(u,u,u,new C.bfV(t,u),B.aA),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.v.j(0.7)
v=A.n(14)
s.push(A.ao(u,A.q(u,A.c(t.dy,u,u,u,u,u,u,D.fV4,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.m),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.aA(B.c0,new A.am(B.a0,u,B.ac,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bOp(t,e),u,u,u,u,u,u,u,new C.bOq(t,e),u,u,u,u,u,u,u,u,u,new C.bOr(t,e),u,u,u,u,!1,B.a4)},
$S:35}
C.bOp.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bOr.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bOq.prototype={
$1(d){return this.a.db=B.h.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bOl.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.cuz.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cuA.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cuy(w))},
$S:0}
C.cuy.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cuB.prototype={
$0(){var w=this,v=w.a
v.gja()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cuC.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cuD.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cuE.prototype={
$0(){},
$S:0}
C.cuF.prototype={
$0(){var w=this.a
w.z=w.YM(++w.e)
w.Q=A.c4(w.gkY()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cuv.prototype={
$0(){return A.a7(this.a,!1).i2()},
$S:0}
C.cuw.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gja().length,e=i/2,d=new C.cux(i,f,h),a0=g.as,a1=A.a3(a0).k("ba<2>")
a0=A.B(new A.ba(a0,a1),a1.k("M.E"))
a0=A.bS(0,A.ca(new A.hC(a0),new C.cuq(g,new A.m(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gja().length!==0&&!B.d.q(g.gja(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.RA(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cS(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new T.Nz(new C.cur(g,u),new C.cus(g,u),new C.cut(g,u),j,j,new A.b9("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.c(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fs:B.bf,j,j,j,j,j,j,j,j,13,j,j,B.C,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gja().length!==0&&!B.d.q(g.gja(),-1)){a0=g.e+1>=g.gkY().length?"See my result":"Next family"
g=A.at(C.uR(a0,g.gqH(g),B.d0,B.jH,D.fM),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.YM(0):s).length))break
if(!B.d.q(g.gja(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.YM(0)
o=s}else o=s
n=s[u]
n=A.e0(B.z,new C.RA(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.YM(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.rx(new A.bq(0,p,t),new C.cuu(),new T.EW(u,j,new C.RA(l.b,k,62,!1,j),new A.l2(0.25,new C.RA(m.b,k,62,!1,j),j),new A.kv(n,B.ai,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.J,T.hRy(),!0,!0,j,j,j,j,j,j,!1,B.j6,j,new A.b9("chip-"+r,a0),w),B.b1,B.j5,j,new A.b9("t"+r+"-"+q,a0),v))}++u}g=A.bX(B.fX,a1,B.bq,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.am(B.a0,j,B.ac,B.t,e,j)},
$S:63}
C.cux.prototype={
$1(d){return new A.m(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:733}
C.cuq.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.d()}v.push(r==null?0:r)}w=t.gja().length!==0&&!B.d.q(t.gja(),-1)
return A.b4(p,p,p,new C.bfm(q.b,o,v,w,p),B.aA)},
$S:52}
C.cus.prototype={
$1(d){return this.a.gja()[this.b]===-1},
$S:z+30}
C.cut.prototype={
$1(d){return this.a.cXe(this.b,d.a)},
$S:z+31}
C.cur.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gja()[t]!==-1,r=A.n(18),q=e.length!==0?B.d0.j(0.3):B.L
if(s)w=v
else w=A.K(e.length!==0?B.d0:B.jX,B.r,2)
u=s?A.l5(new C.cup(),A.at(new C.RA(u.gaI3()[u.gja()[t]].b,u.gaI3()[u.gja()[t]].a,62,!1,v),v,v,v),B.n3,B.j5,v,v,new A.bq(0.3,1,x.X),x.i):D.bgz
return A.cZ(v,u,v,v,B.b1,new A.p(q,v,w,r,v,v,B.m),B.a3,v,100,v,v,v,v,v,88)},
$S:2038}
C.cup.prototype={
$3(d,e,f){return A.e0(B.z,f,e,null,null)},
$S:111}
C.cuu.prototype={
$3(d,e,f){return A.dQ(f,new A.m(Math.sin(e*24)*8*(1-e),0))},
$S:111}
C.cUU.prototype={
$1(d){return d>=1},
$S:124}
C.cJu.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkY()[w.e].d.length)w.l(new C.cJt(w))},
$S:10}
C.cJt.prototype={
$0(){return this.a.f++},
$S:0}
C.cJC.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cJD.prototype={
$0(){var w=this.a,v=this.b
w.z.K(0,v)
w.Q=v},
$S:0}
C.cJE.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.cJB(w))},
$S:0}
C.cJB.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cJF.prototype={
$0(){return this.a.f++},
$S:0}
C.cJG.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cJH.prototype={
$0(){},
$S:0}
C.cJI.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a7(0)
w.as=!1
w.ay=0},
$S:0}
C.cJw.prototype={
$0(){return A.a7(this.a,!1).i2()},
$S:0}
C.cJx.prototype={
$3(d,e,f){var w=null
return A.l5(new C.cJv(this.a,e),w,B.b1,B.hA,w,w,new A.bq(w,this.b,x.X),x.i)},
$S:2039}
C.cJv.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.d0.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.J,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.ic(new A.C3(new A.ve(B.v.j(e),B.N9,v,B.a_1),H.c05(A.b4(v,v,v,new C.aDD(u.gkY()[u.e].c,u.as,v),B.aA),new A.F0(w,w,B.XV)),v),B.ap),B.f,v,v,new A.p(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:2040}
C.cJy.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,14*(1-e))),e)},
$S:95}
C.cJz.prototype={
$3(d,e,f){return A.dQ(f,new A.m(Math.sin(e*22)*8*(1-e),0))},
$S:111}
C.cJA.prototype={
$0(){return this.a.btF(this.b)},
$S:0}
C.fik.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.apl$)
v.apl$=w
v.qv$.sp(0,w)
v.atf(u)},
$S:7}
C.fsK.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a2(0)
w.a.$0()},
$S:10}
C.bWl.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bWk())},
$S:0}
C.bWk.prototype={
$0(){},
$S:0}
C.bWi.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bWg.prototype={
$0(){},
$S:0}
C.bWh.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gO1()
w=s+1>=r.length?3:5
break
case 3:q=C.bK0(p.gas5(0),0,r.length)
p.l(new C.bWd(p,q))
o=p
w=6
return A.b(C.Ce(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.Cf(s.d,s.c.a,"school",p.gas5(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.l(new C.bWe())
w=4
break
case 5:p.l(new C.bWf(p))
p.gqP().Xj(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bWd.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bWe.prototype={
$0(){},
$S:0}
C.bWf.prototype={
$0(){return this.a.x++},
$S:0}
C.bWj.prototype={
$0(){return this.a.Mp(this.b)},
$S:0}
C.bWc.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.fil.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.m(t,s),q=v.b,p=v.d,o=p?C.hRM(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Fl
C.Tx(q,D.eGo,0,0.2,-0.6,-0.2,null,w,D.eF7,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a6(0,new A.m(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.U()
p=A.L()
p.r=D.Ho.gp(0)
p.c=3
p.d=B.bH
q.ah(new A.m(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.fim.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Tx(this.a,D.eFu,0,u,0.7,-0.5,null,null,D.KK,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.fin.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Tx(this.a,D.eHb,0,0,0.8,-0.5,null,null,D.KK,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.fio.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Tx(w.b,D.eGi,0,v,-0.8,-0.5,null,null,D.KK,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.fip.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.m(34,-122+Math.sin(w*5)*5)
else v=v?D.eGm:D.Fl
C.Tx(p,D.eFN,0,t,0,-0.6,null,v,D.KK,3,0,s,1.3,u,0,w,0)
q=q.cgy(new A.m(222,455),9)
$.U()
w=A.L()
w.r=B.d0.gp(0)
p.af(q,w)},
$S:0}
C.fiq.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:661}
C.bVZ.prototype={
$2(d,e){return d+e},
$S:61}
C.bW9.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bWa.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bWb.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gja()[u.b]=s
t.gja()[u.d]=t.y
w=t.as
v=t.qv$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bW5.prototype={
$1(d){return d},
$S:96}
C.bW4.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.qv$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bW6.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bW7.prototype={
$0(){},
$S:0}
C.bW8.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.GG(++s.f)
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
C.bW0.prototype={
$0(){return A.a7(this.a,!1).i2()},
$S:0}
C.bW1.prototype={
$2(d,e){var w=this.a
w=w.gkY()[w.f].e
return B.n.aQ(w[d],w[e])},
$S:61}
C.bW2.prototype={
$2(d,e){var w=null,v=C.hrS(new A.av(A.aU(1/0,e.a,e.b),A.aU(1/0,e.c,e.d))),u=this.a
return A.aA(B.c0,new A.ea(A.b4(w,w,w,new C.bmE(u,u.qv$),B.aA),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bW_(u,v),w,w,w,w,!1,B.a4)},
$S:35}
C.bW_.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gja().length
u=B.n.D(B.h.ba((t.a-s.a)/r/450*v),0,v-1)
w.d7f(w.gja()[u])}},
$S:24}
C.bW3.prototype={
$1(d){var w=this.a
return w.gkY()[w.f].d[d]},
$S:80}
C.dxI.prototype={
$2(d,e){return 0},
$S:61}
C.bVL.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bVK())},
$S:0}
C.bVK.prototype={
$0(){},
$S:0}
C.bVJ.prototype={
$0(){},
$S:0}
C.bVD.prototype={
$0(){},
$S:0}
C.bVE.prototype={
$0(){},
$S:0}
C.bVI.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.C4},
$S:0}
C.bVH.prototype={
$1(d){var w=null,v=this.a.gqP(),u=A.c(d,w,w,w,w,w,w,D.aZd,w,w,w),t=v.gbq0(0)
return A.aA(B.c0,A.w(A.a([u,B.bs,A.c(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aZr,w,w,w)],x.p),B.B,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbw0(v),w,w,w,w,w,w,!1,B.a4)},
$S:121}
C.bVF.prototype={
$0(){return this.a.Mp(this.b)},
$S:0}
C.bVG.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.bVC.prototype={
$0(){return A.a7(this.a,!1).i2()},
$S:0}
C.e8D.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e8E.prototype={
$1(d){return this.a},
$S:43}
C.e8F.prototype={
$0(){var w=this.a
return w.d=w.gUg().bii(this.b)},
$S:0}
C.e8B.prototype={
$1(d){return new C.UX(this.a,null)},
$S:z+32}
C.e8C.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e8A.prototype={
$1(d){var w=null,v=this.a.b
v=A.c('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hI,w,w,w)
return A.em(A.a([A.bK(!1,E.b_S,w,w,!0,w,w,w,new C.e8y(d),w,w),A.bK(!1,D.hfR,w,w,!0,w,w,w,new C.e8z(d),w,w)],x.p),w,w,D.fM,v,w,w,w,w,D.h26,w)},
$S:17}
C.e8y.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e8z.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e8x.prototype={
$0(){var w=null,v=this.a.c.M(x.q).f,u=this.b
return v.T(A.b2(w,w,w,w,w,B.t,w,A.c(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e8G.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.v(w.h(0,d)):"NEW"},
$S:13}
C.e8H.prototype={
$0(){var w=this.a,v=this.b,u=C.bHH(v,10,w.r,!1)
return w.v2(C.hB7(w.a.d,"kahoot",u,w.gb9L(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e8I.prototype={
$0(){var w=this.a
return w.v2(new C.anJ(this.b,w.a.d,w.r,null))},
$S:0}
C.e8J.prototype={
$0(){var w=this.a
return w.v2(new C.alR(this.b,w.a.d,w.r,null))},
$S:0}
C.e8M.prototype={
$0(){var w=this.a
return w.v2(new C.awO(this.b,w.a.d,w.r,null))},
$S:0}
C.e8N.prototype={
$0(){var w=this.a
return w.v2(new C.aAL(this.b,w.a.d,w.r,null))},
$S:0}
C.e8O.prototype={
$0(){var w=this.a
return w.v2(new C.anM(this.b,w.a.d,w.r,null))},
$S:0}
C.e8P.prototype={
$0(){var w=this.a
return w.v2(new C.anQ(this.b,w.a.d,w.r,null))},
$S:0}
C.e8Q.prototype={
$0(){var w=this.a
return w.v2(new C.anS(this.b,w.a.d,w.r,null))},
$S:0}
C.e8R.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d7H()
return v.v2(C.hB7(v.a.d,"creator_"+u.a,w,v.gb9L(),"A game by the family",t,this.c.a))},
$S:0}
C.e8S.prototype={
$0(){return this.a.Q6(this.b)},
$S:0}
C.e8T.prototype={
$0(){return this.a.Zd(0,this.b)},
$S:0}
C.e8K.prototype={
$0(){return this.a.Q6(null)},
$S:0}
C.e8L.prototype={
$0(){return this.a.M(x.q).f.T(D.fG3)},
$S:0}
C.bVX.prototype={
$0(){var w=this.a
w.d=D.b4n
w.z=3},
$S:0}
C.bVY.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a2(0)
w.aSD()}else w.l(new C.bVW(w))},
$S:10}
C.bVW.prototype={
$0(){return this.a.z--},
$S:0}
C.bVN.prototype={
$0(){var w=this.a
w.d=D.afd
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bVO.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.l(new C.bVM(w))
if(w.as<=0){d.a2(0)
w.b9H(-1)}},
$S:10}
C.bVM.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bVT.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.YB},
$S:0}
C.bVU.prototype={
$0(){return this.a.e++},
$S:0}
C.bVQ.prototype={
$0(){var w=this.a
w.d=D.b4o
w.ay=this.b},
$S:0}
C.bVR.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bVV.prototype={
$2(d,e){return B.n.aQ(e.b,d.b)},
$S:2041}
C.bVS.prototype={
$0(){return this.a.Mp(this.b)},
$S:0}
C.bVP.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).i2()},
$S:0}
C.bVn.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.ay()
s=A.a([new A.au(new A.bd(s,B.bb,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.I)(t),++v){u=t[v]
s.push(new A.au(new A.bd(u,B.bb,B.aP),r))}return s},
$S:2042}
C.bVo.prototype={
$0(){return this.a.gE5().c.push(C.hlw(null,0,20,""))},
$S:0}
C.bVy.prototype={
$1(d){var w=null
return A.bB(w,new A.b5(4,A.n(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dA,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.FT,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:260}
C.bVx.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gE5().c,m=this.b,l=n[m],k=o.cjQ(l),j=B.c.j(0.06),i=A.n(18),h=A.K(B.aT,B.r,1),g=x.p,f=A.a([A.c("Question "+(m+1),p,p,p,p,p,p,D.M3,p,p,p),B.aY],g)
if(n.length>1)f.push(A.aI(p,p,p,p,B.aun,p,p,p,new C.bVs(o,m),p,p,p,p,p,p))
n=J.a0(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aO(p,B.M,!1,p,!0,B.t,p,A.aP(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bVt(l),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a8,p,B.ao,p,p,p,p),B.N],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aGw[v]
t=D.aGc[v]
s=v+1
f.push(new A.C(B.ez,new A.c_(B.aJ,B.e,B.i,B.l,p,B.p,p,0,A.a([A.c(u,p,p,p,p,p,p,new A.H(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.aa,new A.bu(1,B.b9,A.aO(p,B.M,!1,p,!0,B.t,p,A.aP(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.am,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bVu(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.du,!0,B.a8,p,B.ao,p,p,p,p),p),new Aw.Qb(v,l.c,new C.bVv(o,l),p,!1,D.lZ,p,p,p,p,p,!1,!1,p,I.b55,p,p,p,p,p,w)],g),p),p))}f.push(D.h7Q)
f.push(B.aj)
n=A.a([D.h1a,B.aa],g)
for(r=0;r<3;++r){q=D.ckB[r]
n.push(new A.C(B.eX,A.iy(p,p,p,p,A.c(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bVw(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.q(p,A.w(f,B.B,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.m),p,p,p,B.kM,B.bg,p,p,p)},
$S:156}
C.bVs.prototype={
$0(){var w=this.a
return w.l(new C.bVr(w,this.b))},
$S:0}
C.bVr.prototype={
$0(){return B.d.cP(this.a.gE5().c,this.b)},
$S:0}
C.bVt.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bVu.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bVv.prototype={
$1(d){return this.a.l(new C.bVq(this.b,d))},
$S:157}
C.bVq.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bVw.prototype={
$1(d){return this.a.l(new C.bVp(this.b,this.c))},
$S:8}
C.bVp.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eai.prototype={
$0(){var w=this.a
w.x4()
w.a.bx()
w.a.qI()},
$S:0}
C.eah.prototype={
$0(){var w=this.a
w.x4()
w.a.bx()
w.a.qI()},
$S:0}
C.eak.prototype={
$0(){var w=this,v=w.b
if(J.cM(v)||J.ch(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.eal.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eam.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eag.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.eaj.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.eao.prototype={
$0(){this.a.Qs()
return null},
$S:0}
C.ean.prototype={
$0(){return this.a.G_(this.b)},
$S:0}
C.e9J.prototype={
$1(d){var w=null,v=this.a,u=A.c(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.c(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bK(!1,B.dy,w,w,!0,w,w,w,new C.e9H(d),w,w),r=A.bp(B.bU,w,w,w,w,w,w,w,w,w,w,w)
return A.em(A.a([s,A.bI(A.c(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e9I(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:17}
C.e9H.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e9I.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.e9K.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.cTO(this.b)},
$S:0}
C.e9E.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aYk(w.b,w.c,w.d)},
$S:7}
C.e95.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e96.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e9n.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.HS(t.a.c),$async$$0)
case 2:s=r.nU(q.dO(e,new C.e9l(t)))
if(s!=null&&t.c!=null)t.l(new C.e9m(t,s))
t.a.bx()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e9l.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e9m.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e9o.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return d.a===w.a},
$S:z+3}
C.e9p.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e9D.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=this.b
v.d=u.cUA(C.hRW(w),w)},
$S:0}
C.e9k.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.d()
w=v.a.c
return new C.Xh(u,w,C.aTo(u,w),new C.e9j(v),null)},
$S:z+37}
C.e9j.prototype={
$1(d){return this.brr(d)},
brr(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.l(new C.e9i(s,d))
w=3
return A.b(s.uZ(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:798}
C.e9i.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.bii(this.b)},
$S:0}
C.e9A.prototype={
$1(d){return d.as},
$S:z+1}
C.e9B.prototype={
$1(d){var w=this
return new A.ec(new C.e9z(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e9z.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.eo:B.c,h=A.n(26),g=A.K(B.bU.j(0.5),B.r,1.5),f=A.q(k,D.bZO,B.f,k,k,new A.p(B.bU.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.c("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.d()
w=x.p
a0=A.E(A.w(A.a([e,A.c(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,B.O,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.B,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bd,a0,A.aI(k,k,k,k,A.V(B.cD,j?B.bv:B.bl,k,k,k,k),k,k,k,new C.e9t(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.c("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.I)(v),++s){r=v[s]
q=t.a===r?B.bU:B.bU.j(0.1)
p=new A.aQ(20,20)
o=t.a===r
n=new A.ax(B.bU,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bU
a0.push(A.aA(k,A.cZ(k,A.c(m,k,k,k,k,k,k,new A.H(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b1,new A.p(q,k,new A.bE(n,n,n,n),new A.bc(p,p,p,p),k,k,B.m),B.ho,k,k,k,k,B.Dn,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e9u(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bX(B.bG,a0,B.bq,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.cbi,new A.C(D.bJI,f,k),new A.C(D.bJz,e,k),new A.C(B.ro,a0,k),new A.C(X.apu,A.c(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.bl,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.V(Al.asf,j?B.bv:B.bl,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.C(D.bJB,A.A(A.a([a0,B.ar,A.E(A.c(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aS:B.ax,k,k,k,k,k,k,k,k,k,k,k,B.C,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.azv(k,B.bU,k,k,!1,B.y,k,k,k,k,k,k,new C.e9v(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.az)
j=A.n(20)
e=A.a([new A.ac(0,B.G,B.aB.j(0.35),B.hS,12)],x.V)
f.push(A.aA(k,A.q(k,A.A(A.a([D.h1w,B.bd,D.bNY,D.c_u],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.cf5,B.m),k,k,k,B.ih,B.bD,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e9w(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.C(B.xj,A.A(A.a([A.E(A.dV(B.dy,new C.e9x(a1),k),1),B.ar,A.E(A.bI(N.b0j,k,new C.e9y(t,a1),A.bp(B.bU,k,k,k,k,k,B.cq,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.q(k,A.cb(A.w(f,B.B,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,k,B.ah),B.ap,k,k,new A.p(i,k,g,h,k,k,B.m),k,k,k,B.zz,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:88}
C.e9t.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e9u.prototype={
$0(){return this.b.$1(new C.e9s(this.a,this.c))},
$S:0}
C.e9s.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e9v.prototype={
$1(d){var w=this.a
w.l(new C.e9q(w,d))
this.b.$1(new C.e9r())},
$S:8}
C.e9q.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e9r.prototype={
$0(){},
$S:0}
C.e9w.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aJR(!0,w))
return null},
$S:0}
C.e9x.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e9y.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(new A.aJR(!1,w))
return null},
$S:0}
C.e9C.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cUo(this.b.b)
w.r.a7(0)},
$S:0}
C.e8U.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.d()
s=C.akB(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hKq(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e8V.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.f,x.P)
w.push(this.b)
v.d=u.aIz(w)},
$S:0}
C.e9M.prototype={
$1(d){var w=this.a.d
w===$&&A.d()
return new C.afM(this.b,w,this.c,null)},
$S:z+39}
C.e9G.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.eo:B.c,t=A.n(20),s=A.V(B.kR,B.aZ,w,w,w,36),r=A.c("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.c(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.u(p,A.a([B.af,A.c("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.w(p,B.l,w,B.e,B.P,0,B.p)
return A.em(A.a([A.bI(D.hjJ,w,new C.e9F(d),A.bp(B.aZ,w,w,w,w,w,w,w,w,w,w,w))],o),B.bc,w,u,v,w,s,w,new A.bb(t,B.a1),r,w)},
$S:17}
C.e9F.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.e8W.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e8X.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e8Y.prototype={
$1(d){return d.a},
$S:z+8}
C.e8Z.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.d()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.I)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.id(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aIz(w)},
$S:0}
C.e92.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.d()
q=C.akB(q)
w=A.T(q).k("X<1>")
q=A.B(new A.X(q,new C.e90(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hKq(v.e,null,r,v.f,v.r,new C.e91(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e91.prototype={
$0(){return this.a.ad4(this.b)},
$S:0}
C.e90.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e93.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.f
v=A.T(w).k("O<1,id>")
w=A.B(new A.O(w,new C.e9_(this.b),v),v.k("aj.E"))
u.d=t.aIz(w)},
$S:0}
C.e9_.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e9L.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e9f.prototype={
$1(d){return d.length!==0},
$S:3}
C.e9g.prototype={
$1(d){var w=this
return new A.ec(new C.e9e(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e9e.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.eo:B.c,r=A.c("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aS:B.ax,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.c("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.c("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.u(p,new A.O(o,new C.e9a(u,e,o),A.T(o).k("O<1,x>")))
p.push(B.N)
u=w.d
p.push(A.aO(v,B.M,!1,v,!0,B.t,v,A.aP(),u,v,v,v,v,v,2,A.bB(v,new A.b5(4,A.n(12),B.dz),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.am,v,v,v,v,v,B.mU,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a8,v,B.ao,v,v,v,v))
p=A.w(p,B.al,v,B.e,B.P,0,B.p)
t=w.a
return A.em(A.a([A.bK(!1,B.dy,v,v,!0,v,v,v,new C.e9b(d),v,v),A.bI(B.Mf,v,new C.e9c(t,u,o,e),A.bp(B.bU,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.h6a,v,new C.e9d(t,u,o,d),A.bp(B.aZ,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a4(360,v,p,v),v,v,v,v,r,v)},
$S:227}
C.e9a.prototype={
$1(d){var w=null
return A.dP(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.c(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aS:B.ax,w,w,w,w,w,w,w,w,w,w,w,B.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aI(w,w,w,w,D.c86,w,w,w,new C.e99(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:2043}
C.e99.prototype={
$0(){return this.a.$1(new C.e97(this.b,this.c))},
$S:0}
C.e97.prototype={
$0(){return B.d.X(this.a,this.b)},
$S:0}
C.e9b.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.e9c.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e98(w.c,u))
v.bN(0,B.ck)}},
$S:0}
C.e98.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e9d.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).N(!0)},
$S:0}
C.e9h.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
w.d=v.cV4(this.b,D.vu,C.HQ(v,w.a.c))},
$S:0}
C.e9T.prototype={
$1(d){return d.as},
$S:z+1}
C.e9U.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j8(this.b,w)},
$S:0}
C.e9V.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
v=C.iKk(v)
return w.Y_(v==null?null:v.a)},
$S:0}
C.e9W.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.d()
w=l.r
v=C.ikp(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gco(k)){k=A.aU(1/0,e.a,e.b)
s=A.aU(1/0,e.c,e.d)
l.cBP(new A.av(u,t),v.gbp0(),new A.av(k,s))}k=A.n(22)
s=this.b.a
r=s?D.d9B:D.d7t
q=A.K(s?B.dA:D.bow,B.r,1)
p=A.n(22)
o=A.bS(0,A.b4(m,m,m,new C.biI(s,m),B.aA),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.bv(p,new A.am(B.a0,m,B.ac,B.t,A.a([o,A.bS(0,A.u7(new A.R(n,n,n,n),new A.a4(u,t,new C.bjF(l.d,v,l.f,w,new C.e9P(l),l.gcl1(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bBL(s,new C.e9Q(l,e),new C.e9R(l,e),new C.e9S(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.p(m,m,q,k,m,new A.a6(B.aW,B.b0,B.w,r,m,m),B.m),m,m,m,S.aot,m,m,m,m)},
$S:174}
C.e9P.prototype={
$1(d){var w=this.a
w.l(new C.e9N(w,d))},
$S:2}
C.e9N.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.X(0,v)
else w.K(0,v)},
$S:0}
C.e9Q.prototype={
$0(){var w=this.b
return this.a.bgp(1.25,new A.av(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.e9R.prototype={
$0(){var w=this.b
return this.a.bgp(0.8,new A.av(A.aU(1/0,w.a,w.b),A.aU(1/0,w.c,w.d)))},
$S:0}
C.e9S.prototype={
$0(){var w=this,v=w.b
return w.a.aYk(new A.av(A.aU(1/0,v.a,v.b),A.aU(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbp0())},
$S:0}
C.e9X.prototype={
$0(){var w=this.a
return w.l(new C.e9O(w))},
$S:0}
C.e9O.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e94.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.d()
w=2
return A.b(A.fR(new A.fF(s.c)),$async$$0)
case 2:t.zb("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dmO.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bnv(u,C.hWR(v.c,u),new C.dmN(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dmN.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dmP.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bqU(d.d,d.c,u.f.q(0,d.a),new C.dmM(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dmM.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fTU.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nU(new A.cP(new A.X(v,new C.fTV(d),w.k("X<1>")),new C.fTW(),w.k("cP<1,o>")))},
$S:z+19}
C.fTV.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fTW.prototype={
$1(d){return d.a},
$S:z+8}
C.fTS.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fTT.prototype={
$1(d){return d.b},
$S:z+8}
C.fTZ.prototype={
$1(d){var w,v=d.e
if(this.a.am(0,v))return v
v=this.b
w=A.T(v)
return A.nU(new A.cP(new A.X(v,new C.fU_(d),w.k("X<1>")),new C.fU0(),w.k("cP<1,o>")))},
$S:z+19}
C.fU_.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fU0.prototype={
$1(d){return d.a},
$S:z+8}
C.fTX.prototype={
$1(d){var w,v=A.eA([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.am(0,w)&&v.K(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fTY.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dmR.prototype={
$0(){return this.a},
$S:z+46}
C.dn7.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.am(0,d)},
$S:253}
C.dn_.prototype={
$2(d,e){var w=this.a.c0(0,d,new C.dn0()),v=J.a0(w)
if(!v.q(w,e))v.K(w,e)},
$S:120}
C.dn0.prototype={
$0(){return A.a([],x.s)},
$S:652}
C.dmZ.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eI(w,e)
return w===!0},
$S:252}
C.dmS.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dmY.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dmX.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.K(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aN(v==null?D.EE:v)
u=1
while(v.A())u+=s.$2(v.gP(v).a,e)
v=s.b.h(0,d)
v=J.aN(v==null?B.M:v)
while(v.A()){t=v.gP(v)
if(e.q(0,t))continue
e.K(0,t)
t=w.h(0,t)
t=J.aN(t==null?D.EE:t)
while(t.A())u+=s.$2(t.gP(t).a,e)}return u},
$S:2045}
C.dmT.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dn1.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.K(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aN(u==null?B.M:u)
t=v.d
for(;;){if(!u.A()){s=null
break}A:{s=u.gP(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.K(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.u(w,r)
if(u){t=t.h(0,s)
t=J.aN(t==null?D.EE:t)
while(t.A()){r=t.gP(t)
if(r.a!==a9&&!B.d.aR(w,new C.dn2(r)))w.push(r)}}B.d.bs(w,new C.dn3(a8))
B.d.b_(w,new C.dn4())
q=C.iko(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.I)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.fdt],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bu1(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:2046}
C.dn2.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dn3.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dn4.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.dn5.prototype={
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
$S:774}
C.dn6.prototype={
$1(d){return 16+d*156},
$S:161}
C.dmQ.prototype={
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
t.n(0,d,new C.H8(r,new A.m(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.H8(s,new A.m(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.H8(s,new A.m(e,v)))}t=o.r.h(0,d)
t=J.aN(t==null?B.M:t)
s=o.w
while(t.A()){r=t.gP(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Lr(d,new A.m(e+t,w),s,s.length))}},
$S:208}
C.dmU.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aN4(new A.m(v.a,v.b+28),new A.m(w.a,w.b+28),!0,null))},
$S:120}
C.dmV.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dmW.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:637}
C.dn8.prototype={
$2(d,e){return B.h.aQ(d.a,e.a)},
$S:637}
C.dn9.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:475}
C.dna.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:166}
C.dnb.prototype={
$1(d){return d>=0.5},
$S:124}
C.fyx.prototype={
$3(d,e,f){var w=null,v=A.n(10)
return A.fU(A.aM(!1,v,!0,new A.a4(38,38,A.V(d,this.a.c?B.c:B.cx,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w,w)},
$S:2048}
C.f82.prototype={
$1(d){var w=null,v=A.n(8),u=B.bU.j(0.12),t=A.n(8)
return new A.C(B.kN,A.aM(!1,v,!0,A.q(w,A.c("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fRQ,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.m),w,w,w,w,B.PT,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f81(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.f81.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dDu.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dDt.prototype={
$1(d){var w=null,v=A.n(18),u=this.a
u=A.c("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.mV,B.K,w,w)
return A.em(A.a([A.bK(!1,B.dy,w,w,!0,w,w,w,new C.dDr(d),w,w),A.bK(!1,A.c("Delete",w,w,w,w,w,w,A.l(w,w,B.ng,w,w,w,w,w,w,w,w,w,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dDs(d),w,w)],x.p),B.bc,B.Dh,w,u,D.bKC,w,D.bMx,new A.bb(v,B.a1),w,w)},
$S:17}
C.dDr.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.dDs.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.dDD.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dDE.prototype={
$1(d){var w=this.a
return w.l(new C.dDC(w,d))},
$S:z+49}
C.dDC.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dDF.prototype={
$1(d){var w=null
return A.r5(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dDI.prototype={
$1(d){var w=this.a
return w.l(new C.dDB(w,d))},
$S:36}
C.dDB.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dDH.prototype={
$1(d){var w=null
return A.r5(A.c(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dDJ.prototype={
$1(d){var w=this.a
return w.l(new C.dDA(w,d))},
$S:36}
C.dDA.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dDK.prototype={
$0(){var w=this.a
return w.l(new C.dDz(w))},
$S:0}
C.dDz.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dDL.prototype={
$0(){var w=this.a
return w.l(new C.dDy(w))},
$S:0}
C.dDy.prototype={
$0(){return++this.a.at},
$S:0}
C.dDM.prototype={
$0(){var w=this.a
return w.l(new C.dDx(w))},
$S:0}
C.dDx.prototype={
$0(){return--this.a.ax},
$S:0}
C.dDN.prototype={
$0(){var w=this.a
return w.l(new C.dDw(w))},
$S:0}
C.dDw.prototype={
$0(){return++this.a.ax},
$S:0}
C.dDO.prototype={
$1(d){var w=this.a
return w.l(new C.dDv(w,d))},
$S:8}
C.dDv.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dDG.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dDP.prototype={
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
return A.E(A.aG(!1,B.a3,!0,r,A.aM(!1,o,!0,A.cZ(r,A.w(A.a([t,B.at,A.c(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b1,new A.p(w,r,u,v,r,r,B.m),B.eN,r,r,r,r,B.jD,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dDQ(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai),1)},
$S:z+51}
C.dDQ.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dDZ.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.ciT.prototype={
$2(d,e){return new A.bw(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:99}
C.cj_.prototype={
$1(d){return d.ak()},
$S:z+5}
C.cj0.prototype={
$2(d,e){var w=J.b8(e,new C.ciZ(),x.a)
w=A.B(w,w.$ti.k("aj.E"))
return new A.bw(d,w,x.d2)},
$S:z+53}
C.ciZ.prototype={
$1(d){return d.ak()},
$S:z+12}
C.ciV.prototype={
$1(d){return C.anV(A.a1(d,x.N,x.z))},
$S:z+9}
C.ciW.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.ciX.prototype={
$1(d){return C.hB6(A.a1(d,x.N,x.z))},
$S:z+11}
C.ciY.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cj4.prototype={
$1(d){return new A.aK3(d.f.length,d.a,d.b)},
$S:z+55}
C.cj5.prototype={
$2(d,e){return B.a.aQ(d.c,e.c)},
$S:589}
C.cj1.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cj2.prototype={
$1(d){return d.cU0(C.HQ(d,this.a))},
$S:z+85}
C.ea5.prototype={
$1(d){return C.uS(d,this.a.a.c)},
$S:z+3}
C.ea6.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.eaa.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.eab.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.ea2.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b4_(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zO("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(M.pW(r.c,r.e),$async$$0)
case 4:s.zO(p)
w=5
return A.b(s.Lp(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.ea3.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b4_(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.zO("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(M.pW(r.c,r.e),$async$$0)
case 4:s.zO(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.ea4.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Xk(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.zO("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.zO("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.zO("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.Lp(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ad(j)
o=r.a
if(o.c==null){w=1
break}o.zO(B.a.er(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.ea9.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b3Z(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.zO("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).ca(A.e4(new C.ea8(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(M.pW(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.ea8.prototype={
$1(d){var w=this.b
return new C.a1H(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.ea7.prototype={
$1(d){return D.hYi},
$S:z+58}
C.ead.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.eae.prototype={
$1(d){var w=this.a
w=w.r?null:new C.eac(w,d)
return new A.C(B.d3,new C.bjJ(this.b,d.c,d.a,w,null),null)},
$S:2049}
C.eac.prototype={
$0(){return this.a.ZS(this.b.b)},
$S:0}
C.e9Y.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e9Z.prototype={
$0(){return this.a.d=!0},
$S:0}
C.ea_.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ea0.prototype={
$0(){return this.a.d=!1},
$S:0}
C.ea1.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.eaf.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.I)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.Y(s,"NGMYFTSYNC2"))t=!A.cX(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).N(s)
return}},
$S:218}
C.dVX.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dVY.prototype={
$0(){return B.d.gH(D.a8s)},
$S:z+60}
C.dVZ.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.d()
t=t.x
t===$&&A.d()
v=v.e
v===$&&A.d()
v=v.x
v===$&&A.d()
return A.b4(A.at(A.V(this.b.d,B.c.j(0.95),w,w,D.dho,44),w,w,w),w,w,new C.boD(u,t,v,w),B.aA)},
$S:52}
C.hbR.prototype={
$1(d){return A.on(new C.hbQ(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:136}
C.hbQ.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.eo:B.c,p=A.a([new A.ac(0,B.G,B.v.j(r?0.35:0.08),B.um,24)],x.V),o=r?B.er:B.bP
o=A.q(t,t,B.f,t,t,new A.p(o,t,t,A.n(99),t,t,B.m),t,4,t,t,t,t,t,40)
w=A.a([B.aZ.j(0.25),B.bU.j(0.18)],x.O)
w=A.q(t,D.c20,B.f,t,t,new A.p(t,t,t,A.n(12),t,new A.a6(B.a5,B.a9,B.w,w,t,t),B.m),t,40,t,t,t,t,t,40)
v=A.c("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aS:B.ax,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.w(A.a([B.S,o,new A.C(E.apy,A.A(A.a([w,B.bd,A.E(A.w(A.a([v,A.c("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.bl,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.B,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.im(!0,t,e,B.y,D.fE2,new C.hbP(this.b,s),20,B.ap2,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.p(q,t,t,B.lv,p,t,B.m),t,t,t,t,t,t,t,t)},
$S:117}
C.hbP.prototype={
$2(d,e){var w=null,v=D.a8s[e],u=A.n(16),t=A.n(16),s=this.b.a,r=A.K(s?B.er:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.v.j(s?0.35:0.08),B.eJ,8)],x.V),p=A.n(15),o=A.E(new C.a8E(v.a,!0,w),1),n=s?B.ke:B.iM,m=A.c(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aS:B.ax,w,w,w,w,w,w,w,w,13,w,w,B.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aG(!1,B.a3,!0,w,A.aM(!1,u,!0,A.eK(A.bv(p,A.w(A.a([o,A.q(w,A.w(A.a([m,A.c(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.bl,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.B,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.iR,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.ap),w,new A.p(w,w,r,t,q,w,B.m),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.hbO(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.ai)},
$S:79}
C.hbO.prototype={
$0(){A.a7(this.a,!1).N("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.csR.prototype={
$0(){return this.a.ajA(this.b)},
$S:0}
C.hbd.prototype={
$1(d){return D.hSM},
$S:z+61}
C.hj8.prototype={
$1(d){var w=this
return new C.a3x(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.hbh.prototype={
$1(d){return new C.a0k(this.a,null)},
$S:z+63}
C.hbg.prototype={
$1(d){return D.hTO},
$S:z+64}
C.deg.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.deh.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.def(w,d))},
$S:36}
C.def.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dei.prototype={
$1(d){return this.a.M3()},
$S:2}
C.dej.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.dec.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.ded.prototype={
$1(d){return this.a.M3()},
$S:2}
C.dee.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cL9.prototype={
$0(){},
$S:0}
C.cLf.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.cLg.prototype={
$0(){return this.a.aTw(-1)},
$S:0}
C.cLh.prototype={
$1(d){return this.a.l(new C.cLe())},
$S:2}
C.cLe.prototype={
$0(){},
$S:0}
C.cLi.prototype={
$0(){return this.a.aTw(1)},
$S:0}
C.cLj.prototype={
$1(d){return this.a.l(new C.cLd())},
$S:2}
C.cLd.prototype={
$0(){},
$S:0}
C.cLk.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.c(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aZ.j(0.2)
if(s)v=B.aZ
else v=this.b.a?B.er:B.bP
return A.vj(u,u,B.b8,r,u,new C.cLc(t,d),B.xm,s,w,u,new A.ax(v,1,B.r,-1),B.cp)},
$S:2050}
C.cLc.prototype={
$1(d){var w=this.a
return w.l(new C.cLa(w,this.b))},
$S:8}
C.cLa.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cLl.prototype={
$1(d){return this.a.l(new C.cLb())},
$S:2}
C.cLb.prototype={
$0(){},
$S:0}
C.cLm.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.fy2.prototype={
$1(d){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).N(w)},
$S:2}
C.fy3.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.fy4.prototype={
$0(){var w,v=this.a.d
v===$&&A.d()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).N(w)},
$S:0}
C.fy0.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.d()
p=p.x
p===$&&A.d()
w=q.a
v=w.d
u=w.f
t=q.gbGw()
w=w.e
s=A.n(B.n.D(v-1,0,v))
return A.b4(new A.C(D.bMw,new A.ea(A.q(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.m),r,r,r,r,w,r,r,r),r),r),new C.bBA(p,v,this.b.a,u,t,r),r,r,B.aA)},
$S:52}
C.fy1.prototype={
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
return A.aG(!1,B.a3,!0,p,A.aM(!1,v,!0,A.eK(D.eL3,r,new A.p(r,r,A.K(B.c.j(0.4),B.r,1.5),u,r,new A.a6(new A.dl(-1.2+t,-0.5),new A.dl(1.2-t,0.8),B.w,s,r,r),B.m),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.ai)},
$S:145}
C.h9t.prototype={
$1(d){return A.v(d.h(0,1))+","},
$S:58}
C.f5c.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f53.prototype={
$0(){return this.a.e=!0},
$S:0}
C.f54.prototype={
$0(){return this.a.e=!1},
$S:0}
C.f5a.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.d()
w.a=v.c
return new A.ec(new C.f59(w,this.b),null)},
$S:20}
C.f59.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.eo:B.c,t=A.n(20),s=A.c("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aS:B.ax,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eE(w,u,new A.C(B.apr,A.w(A.a([s,B.aj,A.c("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.bl,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hHh(new C.f56(r,e),r.a),B.az,A.A(A.a([A.E(A.dV(B.dy,new C.f57(d),w),1),B.ar,A.E(A.bI(B.XP,w,new C.f58(r,d),A.bp(B.aZ,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.P,0,B.p),w),w,w,w,w,w,B.db,w,new A.bb(t,B.a1),w)},
$S:103}
C.f56.prototype={
$1(d){return this.b.$1(new C.f55(this.a,d))},
$S:36}
C.f55.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.f57.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f58.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).N(w)
return null},
$S:0}
C.f5b.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.d()
return w.d=v.UW(this.b)},
$S:0}
C.f4Z.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.d()
w=A.B(u.d,x.Q)
w.push(this.b)
v.d=u.bio(w)},
$S:0}
C.f52.prototype={
$1(d){return this.brP(d)},
brP(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.MP(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j8(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f51.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.d()
w=t.d
v=A.T(w).k("X<1>")
w=A.B(new A.X(w,new C.f50(this.b),v),v.k("M.E"))
u.d=t.bio(w)},
$S:0}
C.f50.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.f5d.prototype={
$0(){var w=this.a.d
w===$&&A.d()
return A.j8(this.b,w)},
$S:0}
C.f5e.prototype={
$1(d){return this.a.bKM(d,this.b)},
$S:z+67}
C.f5_.prototype={
$0(){return this.a.ad3(this.b)},
$S:0}
C.hiW.prototype={
$1(d){return new C.ag6(this.a,this.b,this.c,null)},
$S:z+68}
C.f5g.prototype={
$0(){return this.a.a1Z(this.b)},
$S:0}
C.f5h.prototype={
$0(){return this.a.Sd(this.b)},
$S:0}
C.f5i.prototype={
$0(){return this.a.FU(this.b)},
$S:0}
C.f5j.prototype={
$0(){return this.a.a2_(this.b)},
$S:0}
C.f5f.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f4U.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f4V.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.f4W.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
C.f4Y.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qO(),$async$$0)
case 2:if(t.c!=null)t.l(new C.f4X(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f4X.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.f5G.prototype={
$2(d,e){return d+e.gyl()},
$S:z+71}
C.f5C.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f5D.prototype={
$0(){return this.a.f=!1},
$S:0}
C.f5n.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.eo:B.c,s=A.n(24),r=A.q(v,D.c2u,B.f,v,v,new A.p(B.aC.j(u?0.18:0.08),v,A.K(B.aC.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.c("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aS:B.ax,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.c("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.bl,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aS:B.ax
u=u?B.er:B.bP
w=x.p
return A.eE(v,t,new A.C(B.xl,A.w(A.a([r,B.aN,q,B.N,p,B.df,A.A(A.a([A.E(A.dV(B.oB,new C.f5l(d),A.dj(v,v,v,v,v,v,v,v,v,o,v,v,B.fc,v,new A.bb(A.n(14),B.a1),new A.ax(u,1,B.r,-1),v,v,v,v)),1),B.ar,A.E(A.bI(D.hnK,v,new C.f5m(d),A.bp(B.aC,v,v,v,v,v,B.fc,v,new A.bb(A.n(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.P,0,B.p),v),v,v,v,v,v,B.db,v,new A.bb(s,B.a1),v)},
$S:46}
C.f5l.prototype={
$0(){A.a7(this.a,!1).N(!1)
return null},
$S:0}
C.f5m.prototype={
$0(){A.a7(this.a,!1).N(!0)
return null},
$S:0}
C.f5w.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.eo:B.c,i=A.n(28),h=A.a([new A.ac(0,B.G,B.v.j(k?0.35:0.08),B.fF,28)],x.V),g=k?D.dpA:At.a7J,f=x.p
g=A.q(m,A.w(A.a([A.q(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.n(99),m,m,B.m),m,4,m,m,m,m,m,40),B.az,D.fx8,B.at,new A.bH(B.a5,m,m,A.c("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cE,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a6(B.aw,B.aD,B.w,g,m,m),B.m),m,m,m,m,E.apw,m,m,1/0)
w=A.c("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.bbc(B.b2,B.jJ,new C.f5t(v,d),l,"Camera import","Scan QR"),1),B.ar,A.E(v.bbc(B.cJ,Q.At,new C.f5u(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.c("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,11,m,m,B.C,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.n(16)
r=B.aC.j(k?0.14:0.06)
q=A.n(16)
p=A.K(B.aC.j(0.28),B.r,1)
o=A.q(m,D.c1M,B.f,m,m,new A.p(B.aC.j(0.12),m,m,A.n(12),m,m,B.m),m,m,m,m,B.bS,m,m,m)
n=A.c("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aS:B.ax,m,m,m,m,m,m,m,m,m,m,m,B.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.w(A.a([n,A.c("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.bl,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.B,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.C(B.xg,A.q(m,A.w(A.a([g,new A.C(B.aps,A.w(A.a([w,B.S,u,B.bx,t,B.S,A.aG(!1,B.a3,!0,m,A.aM(!1,s,!0,A.q(m,A.A(A.a([o,B.bd,n,A.V(B.eP,k?B.bv:B.bl,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.m),m,m,m,m,B.bD,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.f5v(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.ai)],f),B.B,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.P,0,B.p),B.ap,m,m,new A.p(j,m,m,i,h,m,B.m),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:28}
C.f5t.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.wC("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5u.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.wC("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5v.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).N(null)
w=2
return A.b(u.a.PI(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.f5r.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.eo:B.c,m=A.n(24),l=A.a([new A.ac(0,B.G,B.v.j(o?0.35:0.08),B.eS,24)],x.V),k=o?B.er:B.bP
k=A.q(q,q,B.f,q,q,new A.p(k,q,q,A.n(99),q,q,B.m),q,4,q,q,q,q,q,40)
w=A.n(12)
v=this.c
u=o?B.bv:B.bl
u=A.bv(w,new A.a4(48,48,C.aUQ(!0,A.n(12),48,P.Qz,u,v.c,48),q),B.ap)
w=A.c(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aS:B.ax,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.BN(v.gyl())
s=x.p
r=this.a
return A.bm(!0,new A.C(B.xg,A.q(q,A.w(A.a([B.S,k,new A.C(D.app,A.A(A.a([u,B.bd,A.E(A.w(A.a([w,A.c(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.bl,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.B,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.D7,r.cvK(B.vO,B.aZ,new C.f5p(d),p,"QR code or backup file","Transfer project"),r.b89(!0,B.et,B.aC,new C.f5q(d),p,"Remove from this device","Delete project"),B.S],s),B.l,q,B.e,B.P,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.m),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:28}
C.f5p.prototype={
$0(){A.a7(this.a,!1).N("transfer")
return null},
$S:0}
C.f5q.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
C.f5s.prototype={
$1(d){return this.brQ(d)},
brQ(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.MP(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wS(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.f5J.prototype={
$0(){var w=this.a
w.a.bx()
w.l(new C.f5I(w))},
$S:0}
C.f5I.prototype={
$0(){return this.a.r++},
$S:0}
C.f5K.prototype={
$0(){var w=this.a
return w.l(new C.f5H(w))},
$S:0}
C.f5H.prototype={
$0(){return this.a.r++},
$S:0}
C.f5k.prototype={
$0(){var w=this.a.c
w.toString
return A.j8(w,null)},
$S:0}
C.f5o.prototype={
$0(){return this.a.coM(this.b)},
$S:0}
C.f5F.prototype={
$0(){var w=this.a
return w.l(new C.f5E(w,this.b))},
$S:0}
C.f5E.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.f5z.prototype={
$0(){return this.a.wC("scan")},
$S:0}
C.f5A.prototype={
$0(){return this.a.wC("file")},
$S:0}
C.f5B.prototype={
$1(d){return this.a.cvL(d,this.b)},
$S:z+72}
C.f5y.prototype={
$0(){return this.a.FY(this.b)},
$S:0}
C.f5x.prototype={
$0(){return this.a.a2x(this.b,this.c)},
$S:0}
C.cKv.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cKu.prototype={
$1(d){return d.ak()},
$S:z+74}
C.cKs.prototype={
$1(d){return C.i29(A.a1(d,x.N,x.z))},
$S:z+75}
C.cKt.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fSN.prototype={
$1(d){return d.y===D.le},
$S:z+3}
C.hjI.prototype={
$1(d){return C.aTo(d,this.a)},
$S:z+3}
C.fQh.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bWs.prototype={
$1(d){return!d.as},
$S:z+1}
C.bWr.prototype={
$1(d){return d.ak()},
$S:z+23}
C.bWo.prototype={
$1(d){return C.hB8(A.a1(d,x.N,x.z))},
$S:z+24}
C.bWp.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bWq.prototype={
$1(d){return J.k(d)},
$S:15}
C.fGb.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.fBB.prototype={
$1(d){return C.hqp(A.a1(d,x.N,x.z))},
$S:z+79}
C.fBC.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fBD.prototype={
$2(d,e){return e.e.aQ(0,d.e)},
$S:z+25}
C.hb1.prototype={
$1(d){return J.k(d)},
$S:15}
C.hb2.prototype={
$1(d){return d.a},
$S:z+81}
C.hb3.prototype={
$1(d){return d.length!==0},
$S:3}
C.hb4.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.hb5.prototype={
$1(d){return d.UW(null).ak()},
$S:z+82}
C.hjG.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fTg.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fWQ.prototype={
$1(d){return C.anV(A.a1(d,x.N,x.z))},
$S:z+9}
C.fWR.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fWS.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fWT.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fWU.prototype={
$1(d){return C.uS(d,this.a)},
$S:z+3}
C.haO.prototype={
$1(d){return C.uS(d,this.a)},
$S:z+3}
C.hjB.prototype={
$1(d){return C.anV(A.a1(d,x.N,x.z))},
$S:z+9}
C.hjC.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.hjD.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fSY.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fSZ.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.hjM.prototype={
$1(d){return!d.as},
$S:z+1}
C.fSs.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fSt.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fSu.prototype={
$2(d,e){return B.n.aQ(d.Q,e.Q)},
$S:z+7}
C.hj9.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fXH.prototype={
$1(d){return d.Q},
$S:z+15}
C.haH.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fWN.prototype={
$1(d){return C.anV(A.a1(d,x.N,x.z))},
$S:z+9}
C.fWO.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fWP.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.haC.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fCf.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCg.prototype={
$1(d){return C.hB8(A.a1(d,x.N,x.z))},
$S:z+24}
C.fCh.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fCi.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:15}
C.fCj.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCx.prototype={
$2(d,e){return d.eH(new C.fCy(e))},
$S:2051}
C.fCy.prototype={
$1(d){$.an.$1("[family_trees] "+this.a+" fetch: "+A.v(d))
return B.co},
$S:2052}
C.fCu.prototype={
$1(d){return C.ipB(d,this.a)},
$S:z+84}
C.fCv.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fCw.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fGX.prototype={
$1(d){return d.a},
$S:z+56}
C.fGY.prototype={
$1(d){return d.length!==0},
$S:3}
C.fGZ.prototype={
$2(d,e){return e.r.aQ(0,d.r)},
$S:z+6}
C.fJZ.prototype={
$1(d){return d.ak()},
$S:z+5}
C.fPs.prototype={
$1(d){return C.hN2(d,C.HQ(d,this.a))},
$S:z+5}
C.fPt.prototype={
$1(d){return C.hN3(d,C.HQ(d,this.a))},
$S:z+5};(function aliases(){var w=C.aDF.prototype
w.bzI=w.t
w=C.aBK.prototype
w.bzD=w.t
w=C.aJf.prototype
w.bA5=w.t
w=C.aDG.prototype
w.bzJ=w.t
w=C.aDI.prototype
w.bzK=w.t
w=C.aDJ.prototype
w.bzL=w.t
w=C.aPx.prototype
w.bCz=w.t
w=C.aRF.prototype
w.bEU=w.t
w=C.aRG.prototype
w.bEV=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aGH.prototype,"gcsy","csz",28)
var r
w(r=C.aDE.prototype,"gcl7","cl8",65)
v(r,"gaRH","Pe",0)
v(r,"gcB7","Cg",0)
v(r,"gbSJ","PX",0)
v(r,"gcQ_","zP",0)
v(r,"gcuI","a3h",0)
v(r,"gbO1","PE",0)
v(r,"gbT8","Zi",0)
w(r,"gbYg","bYh",78)
v(r,"gbIc","B8",0)
v(C.aDH.prototype,"gcPW","GT",0)
v(r=C.anK.prototype,"gbw2","bw3",2)
v(r,"gbvV","bvW",2)
v(r,"gcR3","cR4",2)
u(r,"gqH","kT",0)
u(r=C.alS.prototype,"gf5","fW",2)
w(r,"gcma","cmb",27)
u(C.awP.prototype,"gqH","kT",0)
v(r=C.aAM.prototype,"gd1M","d1N",2)
u(r,"gqH","kT",0)
u(C.aNa.prototype,"gbw0","bw1",2)
v(C.anT.prototype,"gCO","cRg",2)
u(r=C.anR.prototype,"gcRY","cRZ",2)
u(r,"gqH","kT",0)
v(r=C.anN.prototype,"gbuT","buU",2)
v(r,"gcXc","cXd",2)
u(r=C.anP.prototype,"gf5","fW",2)
u(r,"giK","cQz",2)
v(r=C.anL.prototype,"gcQo","cQp",2)
u(r,"gbtM","jD",2)
v(r=C.aHh.prototype,"gajc","wT",0)
v(r,"gcnY","a2n",0)
v(r,"gaVY","JA",0)
v(r=C.aHe.prototype,"gcLM","a5t",0)
v(r,"gajc","wT",0)
v(r,"gcz4","a3X",0)
v(r,"gcnQ","b6l",2)
v(r,"gcoZ","a2D",0)
w(r,"gcl1","cl2",35)
v(r,"gbT0","JF",0)
v(r,"gcMW","cMX",2)
v(r,"gcap","a05",0)
w(r,"gcjw","cjx",36)
v(r,"gcnE","cnF",2)
v(r=C.aFF.prototype,"gcgB","RI",0)
v(r,"gcgD","cgE",2)
v(r,"gbPw","acG",0)
v(r=C.aHg.prototype,"gbWD","ZO",0)
v(r,"gc6e","a_u",0)
v(r,"gcFI","a4R",0)
v(r,"gcBJ","a4q",0)
v(C.aHf.prototype,"gcBq","al_",0)
v(C.aw2.prototype,"gcju","a1X",0)
v(C.aCm.prototype,"ga5b","M3",2)
v(C.aCl.prototype,"ga5b","M3",2)
v(C.aAY.prototype,"ga5b","M3",2)
v(r=C.aIQ.prototype,"gb7x","SJ",0)
v(r,"gbH0","XU",0)
v(r,"gcoN","coO",2)
w(C.aIP.prototype,"gckm","ckn",69)
t(C.aIR.prototype,"gaVT",0,0,null,["$1","$0"],["Jz","bQR"],70,0,0)
s(C,"hVV","iA9",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aH,[C.arv,C.vg,C.nR,C.IX,C.ahl,C.Lk,C.vh,C.bWY,C.tA,C.bsb,C.ao1,C.afo,C.lR,C.bVz,C.awd,C.A2,C.amz,C.Nq,C.bdn,C.abq,C.bkO,C.ahs,C.aC_,C.ahg,C.aNa,C.Lr,C.H8,C.bjH,C.aN4,C.asV,C.dnc,C.mp,C.aXO,C.aXN,C.aVR,C.uC,C.rP,C.m4,C.id,C.li,C.aL0])
u(A.hr,[C.h0V,C.h0U,C.h0W,C.hbK,C.fO1,C.fO2,C.fO7,C.fZp,C.fZo,C.fZn,C.cbN,C.hch,C.hc9,C.hcl,C.fT5,C.dWE,C.dWz,C.dWA,C.dWc,C.dW8,C.dWT,C.dWU,C.dWN,C.dWO,C.dWV,C.dWW,C.fTQ,C.fWK,C.fWL,C.haM,C.hjA,C.fSX,C.hbn,C.dmp,C.dlM,C.dlV,C.dmb,C.dlR,C.dlX,C.dlO,C.dm0,C.dm1,C.dm_,C.dmg,C.dmf,C.doc,C.dod,C.doe,C.dmD,C.dmI,C.dmH,C.cTQ,C.cTS,C.dcT,C.ddh,C.ddi,C.ddl,C.ddn,C.ddo,C.ddp,C.ddr,C.dds,C.bVj,C.bVd,C.fGE,C.hjs,C.hjt,C.hju,C.hjp,C.hjv,C.hjw,C.hjx,C.hjo,C.fUt,C.h9G,C.fQi,C.fXG,C.bQl,C.hjS,C.hai,C.bOu,C.bOp,C.bOr,C.bOq,C.cux,C.cus,C.cut,C.cur,C.cup,C.cuu,C.cUU,C.cJu,C.cJx,C.cJv,C.cJy,C.cJz,C.fik,C.fsK,C.bW5,C.bW_,C.bW3,C.bVH,C.e8E,C.e8B,C.e8C,C.e8A,C.e8G,C.bVY,C.bVO,C.bVy,C.bVx,C.bVt,C.bVu,C.bVv,C.bVw,C.eaj,C.e9J,C.e9E,C.e95,C.e9l,C.e9o,C.e9k,C.e9j,C.e9A,C.e9B,C.e9v,C.e8U,C.e9M,C.e9G,C.e8W,C.e8X,C.e8Y,C.e92,C.e90,C.e9_,C.e9f,C.e9g,C.e9a,C.e9T,C.e9P,C.dmO,C.dmP,C.fTU,C.fTV,C.fTW,C.fTS,C.fTT,C.fTZ,C.fU_,C.fU0,C.fTX,C.fTY,C.dn7,C.dmY,C.dmT,C.dn2,C.dn3,C.dn6,C.dmV,C.dn9,C.dna,C.dnb,C.fyx,C.f82,C.dDt,C.dDD,C.dDE,C.dDF,C.dDI,C.dDH,C.dDJ,C.dDO,C.dDP,C.cj_,C.ciZ,C.ciV,C.ciW,C.ciX,C.ciY,C.cj4,C.cj1,C.cj2,C.ea5,C.ea8,C.ea7,C.eae,C.eaf,C.dVX,C.hbR,C.hbd,C.hj8,C.hbh,C.hbg,C.deh,C.dei,C.ded,C.cLh,C.cLj,C.cLk,C.cLc,C.cLl,C.fy2,C.h9t,C.f5a,C.f56,C.f52,C.f50,C.f5e,C.hiW,C.f5n,C.f5w,C.f5r,C.f5s,C.f5B,C.cKu,C.cKs,C.cKt,C.fSN,C.hjI,C.fQh,C.bWs,C.bWr,C.bWo,C.bWp,C.bWq,C.fBB,C.fBC,C.hb1,C.hb2,C.hb3,C.hb4,C.hb5,C.hjG,C.fTg,C.fWQ,C.fWR,C.fWT,C.fWU,C.haO,C.hjB,C.hjC,C.hjD,C.fSY,C.fSZ,C.hjM,C.fSs,C.fSt,C.hj9,C.fXH,C.haH,C.fWN,C.fWO,C.haC,C.fCf,C.fCg,C.fCh,C.fCi,C.fCj,C.fCy,C.fCu,C.fCv,C.fGX,C.fGY,C.fJZ,C.fPs,C.fPt])
u(A.aw,[C.b2q,C.anI,C.aZ5,C.a_U,C.bfd,C.RA,C.a7S,C.u0,C.IZ,C.bjF,C.bnv,C.bBL,C.bqU,C.afL,C.bnu,C.afK,C.bnt,C.aFG,C.aM6,C.afM,C.H4,C.bjG,C.af_,C.bjE,C.bjJ,C.b2o,C.aw2,C.ag6])
u(A.lQ,[C.bfT,C.bh7,C.bgZ,C.aKV,C.bmw,C.bsa,C.aZa,C.bfV,C.aDD,C.bfm,C.bwj,C.bmE,C.bm3,C.bma,C.bjI,C.biI,C.boD,C.bBA])
u(A.j0,[C.hce,C.hcf,C.hcg,C.hc7,C.hc8,C.hcj,C.hck,C.dWQ,C.dWC,C.dWF,C.dWj,C.dWk,C.dWl,C.dWi,C.dWq,C.dWh,C.dWr,C.dWs,C.dWg,C.dWt,C.dWf,C.dWu,C.dWe,C.dWv,C.dW6,C.dW7,C.dWd,C.dWw,C.dWb,C.dWx,C.dWa,C.dWm,C.dW9,C.dWn,C.dW5,C.dWo,C.dWp,C.dWR,C.dWS,C.dWG,C.dWH,C.dWI,C.dWJ,C.dWK,C.dWL,C.dWM,C.dWY,C.dWP,C.fTR,C.dlK,C.dlI,C.dlJ,C.dlL,C.dmo,C.dmd,C.dma,C.dlN,C.dme,C.dlT,C.dlU,C.dlW,C.dmc,C.dlS,C.dlY,C.dml,C.dm7,C.dm6,C.dm8,C.dm9,C.dm2,C.dm4,C.dm5,C.dlZ,C.dmh,C.dmk,C.dlP,C.dlQ,C.dob,C.doa,C.do9,C.do8,C.dof,C.do7,C.dog,C.dmE,C.dmF,C.dmG,C.dmJ,C.dmC,C.dmB,C.cTR,C.dcS,C.dd4,C.dd3,C.ddj,C.dd2,C.ddk,C.dd1,C.dd0,C.ddm,C.dd_,C.ddc,C.ddb,C.ddt,C.bVc,C.bVm,C.bVe,C.bVf,C.bVi,C.bVh,C.bVk,C.bVl,C.bVg,C.bVa,C.bVb,C.bWQ,C.bWR,C.bWS,C.bWT,C.bWU,C.bWV,C.bWW,C.hjr,C.h9H,C.bOt,C.bOo,C.bOm,C.bOn,C.bOl,C.cuz,C.cuA,C.cuy,C.cuB,C.cuD,C.cuE,C.cuF,C.cuv,C.cJt,C.cJC,C.cJD,C.cJE,C.cJB,C.cJF,C.cJG,C.cJH,C.cJI,C.cJw,C.cJA,C.bWl,C.bWk,C.bWi,C.bWg,C.bWh,C.bWd,C.bWe,C.bWf,C.bWj,C.bWc,C.fil,C.fim,C.fin,C.fio,C.fip,C.bW9,C.bWa,C.bWb,C.bW4,C.bW6,C.bW7,C.bW8,C.bW0,C.bVL,C.bVK,C.bVJ,C.bVD,C.bVE,C.bVI,C.bVF,C.bVG,C.bVC,C.e8D,C.e8F,C.e8y,C.e8z,C.e8x,C.e8H,C.e8I,C.e8J,C.e8M,C.e8N,C.e8O,C.e8P,C.e8Q,C.e8R,C.e8S,C.e8T,C.e8K,C.e8L,C.bVX,C.bVW,C.bVN,C.bVM,C.bVT,C.bVU,C.bVQ,C.bVR,C.bVS,C.bVP,C.bVn,C.bVo,C.bVs,C.bVr,C.bVq,C.bVp,C.eai,C.eah,C.eak,C.eal,C.eam,C.eag,C.eao,C.ean,C.e9H,C.e9I,C.e9K,C.e96,C.e9n,C.e9m,C.e9p,C.e9D,C.e9i,C.e9t,C.e9u,C.e9s,C.e9q,C.e9r,C.e9w,C.e9x,C.e9y,C.e9C,C.e8V,C.e9F,C.e8Z,C.e91,C.e93,C.e9L,C.e99,C.e97,C.e9b,C.e9c,C.e98,C.e9d,C.e9h,C.e9U,C.e9V,C.e9N,C.e9Q,C.e9R,C.e9S,C.e9X,C.e9O,C.e94,C.dmN,C.dmM,C.dmR,C.dn0,C.dmS,C.f81,C.dDu,C.dDr,C.dDs,C.dDC,C.dDB,C.dDA,C.dDK,C.dDz,C.dDL,C.dDy,C.dDM,C.dDx,C.dDN,C.dDw,C.dDv,C.dDG,C.dDQ,C.dDZ,C.ea6,C.eaa,C.eab,C.ea2,C.ea3,C.ea4,C.ea9,C.ead,C.eac,C.e9Y,C.e9Z,C.ea_,C.ea0,C.ea1,C.dVY,C.hbO,C.csR,C.deg,C.def,C.dej,C.dec,C.dee,C.cL9,C.cLf,C.cLg,C.cLe,C.cLi,C.cLd,C.cLa,C.cLb,C.cLm,C.fy3,C.fy4,C.f5c,C.f53,C.f54,C.f55,C.f57,C.f58,C.f5b,C.f4Z,C.f51,C.f5d,C.f5_,C.f5g,C.f5h,C.f5i,C.f5j,C.f5f,C.f4U,C.f4V,C.f4W,C.f4Y,C.f4X,C.f5C,C.f5D,C.f5l,C.f5m,C.f5t,C.f5u,C.f5v,C.f5p,C.f5q,C.f5J,C.f5I,C.f5K,C.f5H,C.f5k,C.f5o,C.f5F,C.f5E,C.f5z,C.f5A,C.f5y,C.f5x])
u(A.af,[C.arI,C.UW,C.a0I,C.a0M,C.a0K,C.a0f,C.anJ,C.alR,C.awO,C.aAL,C.anS,C.anQ,C.anM,C.Xh,C.anO,C.UX,C.asY,C.asS,C.a1n,C.asW,C.a1H,C.a1I,C.a8E,C.a0k,C.a0j,C.a_K,C.a3x,C.GU,C.aAR,C.aw1,C.avW,C.aw0,C.PO])
u(A.ai,[C.aGH,C.bjz,C.aDE,C.bjY,C.aDH,C.bh5,C.aDF,C.aBK,C.aJf,C.aAM,C.aDJ,C.aDI,C.aDG,C.bp_,C.anP,C.anL,C.aHh,C.aHe,C.aFF,C.aHg,C.aHf,C.bp0,C.aPx,C.aCm,C.aCl,C.aAY,C.bBD,C.aRF,C.aRG,C.aIQ,C.bqp,C.aIP,C.bDp])
u(A.j1,[C.dWB,C.dWD,C.dWy,C.dWX,C.fWM,C.bV9,C.dmn,C.dmm,C.dm3,C.dmi,C.dmj,C.dmK,C.bWX,C.bWP,C.bVA,C.bVB,C.hjq,C.hjR,C.bOs,C.cuC,C.cuw,C.cuq,C.fiq,C.bVZ,C.bW1,C.bW2,C.dxI,C.bVV,C.e9z,C.e9e,C.e9W,C.dn_,C.dmZ,C.dmX,C.dn1,C.dn4,C.dn5,C.dmQ,C.dmU,C.dmW,C.dn8,C.ciT,C.cj0,C.cj5,C.dVZ,C.hbQ,C.hbP,C.fy0,C.fy1,C.f59,C.f5G,C.cKv,C.fGb,C.fBD,C.fWS,C.fSu,C.fWP,C.fCx,C.fCw,C.fGZ])
u(A.ln,[C.a31,C.ahu,C.a3k,C.a19,C.ae0,C.aNS,C.IY,C.anU,C.cKw,C.cKx])
t(C.anK,C.aDF)
t(C.alS,C.aBK)
t(C.awP,C.aJf)
t(C.bjD,C.aDJ)
t(C.anT,C.bjD)
t(C.bjC,C.aDI)
t(C.anR,C.bjC)
t(C.bjB,C.aDG)
t(C.anN,C.bjB)
t(C.boE,C.aPx)
t(C.bBB,C.aRF)
t(C.bBC,C.aRG)
t(C.aIR,C.bDp)
t(C.bdB,A.bdo)
t(C.bBE,A.a8i)
t(C.bdA,C.bBE)
w(C.aDF,A.cm)
w(C.aBK,A.cm)
w(C.aJf,A.eZ)
w(C.aDG,A.cm)
v(C.bjB,C.ahg)
w(C.aDI,A.cm)
v(C.bjC,C.ahg)
w(C.aDJ,A.cm)
v(C.bjD,C.ahg)
w(C.aPx,A.eZ)
w(C.aRF,A.cm)
w(C.aRG,A.cm)
v(C.bDp,A.eH)
v(C.bBE,A.jA)})()
A.jj(b.typeUniverse,JSON.parse('{"b2q":{"aw":[],"x":[]},"bfT":{"aC":[]},"arI":{"af":[],"x":[]},"aGH":{"ai":["arI"]},"UW":{"af":[],"x":[]},"anI":{"aw":[],"x":[]},"aZ5":{"aw":[],"x":[]},"bjz":{"ai":["UW"]},"a0I":{"af":[],"x":[]},"a0M":{"af":[],"x":[]},"a0K":{"af":[],"x":[]},"a0f":{"af":[],"x":[]},"aDE":{"ai":["a0I"]},"bjY":{"ai":["a0M"]},"aDH":{"ai":["a0K"]},"a_U":{"aw":[],"x":[]},"bh7":{"aC":[]},"bgZ":{"aC":[]},"bh5":{"ai":["a0f"]},"aKV":{"aC":[]},"bmw":{"aC":[]},"bfd":{"aw":[],"x":[]},"anJ":{"af":[],"x":[]},"anK":{"ai":["anJ"]},"bsa":{"aC":[]},"aZa":{"aC":[]},"alR":{"af":[],"x":[]},"awO":{"af":[],"x":[]},"aAL":{"af":[],"x":[]},"alS":{"ai":["alR"]},"bfV":{"aC":[]},"RA":{"aw":[],"x":[]},"aDD":{"aC":[]},"awP":{"ai":["awO"]},"bfm":{"aC":[]},"aAM":{"ai":["aAL"]},"anS":{"af":[],"x":[]},"anQ":{"af":[],"x":[]},"anM":{"af":[],"x":[]},"anT":{"ai":["anS"]},"bwj":{"aC":[]},"anR":{"ai":["anQ"]},"bmE":{"aC":[]},"anN":{"ai":["anM"]},"bm3":{"aC":[]},"Xh":{"af":[],"x":[]},"anO":{"af":[],"x":[]},"UX":{"af":[],"x":[]},"a7S":{"aw":[],"x":[]},"bma":{"aC":[]},"u0":{"aw":[],"x":[]},"IZ":{"aw":[],"x":[]},"bp_":{"ai":["Xh"]},"anP":{"ai":["anO"]},"anL":{"ai":["UX"]},"asY":{"af":[],"x":[]},"asS":{"af":[],"x":[]},"a1n":{"af":[],"x":[]},"afM":{"aw":[],"x":[]},"aHh":{"ai":["asY"]},"aHe":{"ai":["asS"]},"bjF":{"aw":[],"x":[]},"bjI":{"aC":[]},"bnv":{"aw":[],"x":[]},"biI":{"aC":[]},"bBL":{"aw":[],"x":[]},"bqU":{"aw":[],"x":[]},"aFF":{"ai":["a1n"]},"afL":{"aw":[],"x":[]},"bnu":{"aw":[],"x":[]},"afK":{"aw":[],"x":[]},"bnt":{"aw":[],"x":[]},"aFG":{"aw":[],"x":[]},"aM6":{"aw":[],"x":[]},"H4":{"aw":[],"x":[]},"asW":{"af":[],"x":[]},"a1H":{"af":[],"x":[]},"a1I":{"af":[],"x":[]},"aHg":{"ai":["asW"]},"bjG":{"aw":[],"x":[]},"af_":{"aw":[],"x":[]},"bjE":{"aw":[],"x":[]},"bjJ":{"aw":[],"x":[]},"aHf":{"ai":["a1H"]},"bp0":{"ai":["a1I"]},"b2o":{"aw":[],"x":[]},"a8E":{"af":[],"x":[]},"boE":{"ai":["a8E"]},"boD":{"aC":[]},"aw2":{"aw":[],"x":[]},"a0k":{"af":[],"x":[]},"a0j":{"af":[],"x":[]},"a_K":{"af":[],"x":[]},"a3x":{"af":[],"x":[]},"aCm":{"ai":["a0k"]},"aCl":{"ai":["a0j"]},"aAY":{"ai":["a_K"]},"bBD":{"ai":["a3x"]},"GU":{"af":[],"x":[]},"aAR":{"af":[],"x":[]},"bBB":{"ai":["GU"]},"bBC":{"ai":["aAR"]},"bBA":{"aC":[]},"aw1":{"af":[],"x":[]},"aIQ":{"ai":["aw1"]},"ag6":{"aw":[],"x":[]},"avW":{"af":[],"x":[]},"aw0":{"af":[],"x":[]},"bqp":{"ai":["avW"]},"aIP":{"ai":["aw0"]},"PO":{"af":[],"x":[]},"aIR":{"ai":["PO"],"eH":[]},"bdA":{"jA":[],"fs":[]}}'))
A.S9(b.typeUniverse,JSON.parse('{"ahg":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aVR"),cq:w("mJ"),Q:w("rP"),r:w("bl<o,o>"),c5:w("aXN"),dY:w("aXO"),fH:w("Nq"),de:w("amz"),dN:w("Nz<F>"),gc:w("EW<F>"),A:w("eS<o?>"),e:w("IX"),B:w("nR"),P:w("id"),df:w("lR"),k:w("li"),x:w("az<~>"),U:w("N<a5F>"),V:w("N<ac>"),C:w("N<rP>"),O:w("N<u>"),c:w("N<Nq>"),b:w("N<amz>"),ac:w("N<eS<o?>>"),I:w("N<nR>"),u:w("N<id>"),J:w("N<lR>"),_:w("N<li>"),cl:w("N<az<ah<a9<o,@>>>>"),R:w("N<mN>"),eU:w("N<ah<+(G,G)>>"),ez:w("N<a9<o,aH>>"),gE:w("N<a9<o,o>>"),Y:w("N<a9<o,@>>"),fD:w("N<nd>"),bp:w("N<pb>"),g:w("N<m>"),ar:w("N<awd>"),v:w("N<h1>"),gy:w("N<abq>"),L:w("N<+(o,o)>"),G:w("N<+(G,G)>"),E:w("N<+(G,~())>"),bd:w("N<+(o,F,P)>"),bF:w("N<+count,id,name(F,o,o)>"),F:w("N<d4>"),s:w("N<o>"),cF:w("N<au>"),aS:w("N<jr>"),dT:w("N<bdn>"),p:w("N<x>"),Z:w("N<fs>"),D:w("N<m4>"),h:w("N<aC_>"),cC:w("N<bkO>"),fp:w("N<Lk>"),M:w("N<Lr>"),gZ:w("N<aL0>"),gA:w("N<ahl>"),e4:w("N<ahs>"),dE:w("N<aN4>"),f7:w("N<P>"),n:w("N<G>"),t:w("N<F>"),dS:w("N<aC?>"),d4:w("N<o?>"),eF:w("cB<ai<af>>"),d:w("ah<nR>"),do:w("ah<id>"),cg:w("ah<lR>"),ax:w("ah<li>"),fO:w("ah<a9<o,@>>"),cz:w("ah<+(o,o)>"),bC:w("ah<+count,id,name(F,o,o)>"),dy:w("ah<o>"),er:w("ah<au>"),gk:w("ah<m4>"),j:w("ah<@>"),fK:w("bw<o,o>"),d2:w("bw<o,ah<a9<o,@>>>"),a:w("a9<o,@>"),f:w("a9<@,@>"),gv:w("O<o,J_>"),cM:w("O<F,o>"),w:w("iq"),g2:w("ta"),bV:w("arv"),fL:w("cr"),K:w("aH"),dc:w("h1"),fo:w("Qb<F>"),fz:w("+(o,o)"),ei:w("+scope,text(o,o)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(G,ah<id>)"),cs:w("+count,id,name(F,o,o)"),N:w("o"),fT:w("ia<id>"),ec:w("ia<o>"),gW:w("rx<G>"),X:w("bq<G>"),bW:w("dG"),W:w("b9<o>"),b4:w("b9<F>"),cI:w("km<o>"),av:w("X<A2>"),cc:w("X<o>"),l:w("x"),gF:w("fs"),fA:w("m4"),dO:w("H8"),bw:w("afK<o?>"),cy:w("Lt"),q:w("l6"),y:w("P"),i:w("G"),z:w("@"),S:w("F"),eK:w("ah<li>?"),m:w("asV?"),cT:w("m?"),h5:w("+(o,o)?"),eo:w("+code,qrPayload,usesRemaining(o,o,F)?"),he:w("+qrPayload,token,usesRemaining(o,o,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("oF?"),T:w("o?"),aD:w("dG?"),o:w("m4?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b91=new A.bc(B.h5,B.bJ,B.h5,B.bJ)
D.agr=new A.bc(B.h5,B.ia,B.h5,B.ia)
D.b9g=new A.bc(B.jL,B.bJ,B.bJ,B.bJ)
D.b9k=new A.ax(B.cY,1.4,B.r,-1)
D.b9v=new A.ax(B.ab,1,B.r,-1)
D.ah_=new A.aX(140,1/0,0,1/0)
D.baP=new A.aX(0,1/0,64,1/0)
D.baT=new A.aX(0,84,0,1/0)
D.ah7=new A.aX(130,1/0,0,1/0)
D.aG4=w([B.mr,B.ty,B.c],x.O)
D.ceb=new A.a6(B.aw,B.aD,B.w,D.aG4,null,null)
D.bbE=new A.p(null,null,null,null,null,D.ceb,B.m)
D.doY=w([B.aZ,B.bU],x.O)
D.cgo=new A.a6(B.aW,B.b0,B.w,D.doY,null,null)
D.bbZ=new A.p(null,null,null,null,null,D.cgo,B.m)
D.a_a=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fM=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dtl=w([B.dD,D.a_a,D.fM],x.O)
D.cdn=new A.a6(B.aW,B.b0,B.w,D.dtl,null,null)
D.bcJ=new A.p(null,null,null,null,null,D.cdn,B.m)
D.fP_=new A.H(!0,B.bX,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hqj=new A.D("?",null,D.fP_,null,null,null,null,null,null,null,null,null)
D.bgz=new A.cp(B.z,null,null,D.hqj,null)
D.XF=new A.H(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7X=new A.D("\ud83c\udf33",null,D.XF,null,null,null,null,null,null,null,null,null)
D.ahU=new A.cp(B.z,null,null,D.h7X,null)
D.haE=new A.D("\ud83c\udfc6",null,B.LV,null,null,null,null,null,null,null,null,null)
D.bgK=new A.cp(B.z,null,null,D.haE,null)
D.biB=new A.fp(null,null,null,null,null,E.kI,null,null,null,null)
D.ahV=new A.cp(B.z,null,null,D.biB,null)
D.l6=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fPz=new A.H(!0,D.l6,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9D=new A.D("No books on the shelf yet.",null,D.fPz,null,null,null,null,null,null,null,null,null)
D.eL4=new A.C(B.oc,D.h9D,null)
D.bh0=new A.cp(B.z,null,null,D.eL4,null)
D.fWP=new A.H(!0,D.fM,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hrh=new A.D("\ud83d\ude8c  On the road\u2026",null,D.fWP,null,null,null,null,null,null,null,null,null)
D.eLE=new A.C(B.ct,D.hrh,null)
D.bht=new A.cp(B.z,null,null,D.eLE,null)
D.b_G=new A.D("\ud83e\uddfa",null,D.XF,null,null,null,null,null,null,null,null,null)
D.bhJ=new A.cp(B.z,null,null,D.b_G,null)
D.hd7=new A.D("\ud83c\udfad",null,D.XF,null,null,null,null,null,null,null,null,null)
D.bhU=new A.cp(B.z,null,null,D.hd7,null)
D.bhX=new A.cp(B.z,null,null,A7.ZW,null)
D.aie=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.ail=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bkd=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bki=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bku=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bkw=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bky=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bkG=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lY=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bkK=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bkP=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bkR=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bkS=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lZ=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.blv=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Cw=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.blE=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.blY=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bm0=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bm6=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bme=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aj0=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bml=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.a_o=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.aj3=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bmw=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.a_q=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bmR=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.ajf=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bnf=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bnw=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bnX=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bo7=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.GW=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bow=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.boz=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.boD=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.ajJ=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.boV=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bp0=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bp7=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.ajN=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bpg=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bpL=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bpV=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bpY=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bq3=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ak3=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bqK=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.aks=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.brK=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.akF=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bs8=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.H9=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bsf=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bsp=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bsr=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.akJ=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bsJ=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bsL=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bsO=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.akR=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.a09=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.btc=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.btz=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.btE=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.al2=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.btL=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.a0e=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bu7=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bu8=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Hi=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.buW=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bvx=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bvD=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bvH=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.r5=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bvS=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bvW=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bw1=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bw3=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.alP=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.alT=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Ho=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.a0A=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.am1=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bxi=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bxA=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.by2=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.byb=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ams=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.a0M=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.byn=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.byD=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.a0S=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.byV=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bzb=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.a0W=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bzg=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.amM=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.amO=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bzz=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.amV=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bA1=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bA5=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bAc=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bAl=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bAu=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bB6=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bBC=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.h3F=new A.D("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bF7=new A.eS(null,D.h3F,B.fm,null,x.A)
D.hcZ=new A.D("None",null,null,null,null,null,null,null,null,null,null,null)
D.bF9=new A.eS(null,D.hcZ,B.fm,null,x.A)
D.bFH=new A.bh(38e5)
D.bGp=new A.iP(0,10,0,10)
D.bGK=new A.iP(0,4,0,4)
D.bGN=new A.R(0,4,5,0)
D.bH2=new A.R(10,10,14,10)
D.bHd=new A.iP(10,4,10,4)
D.bHm=new A.iP(10,8,10,8)
D.bHn=new A.R(10,8,8,8)
D.bHS=new A.R(12,6,12,2)
D.bIa=new A.R(14,0,14,6)
D.bIe=new A.R(14,10,6,6)
D.bIf=new A.R(14,12,14,0)
D.bIj=new A.R(14,12,14,8)
D.bIm=new A.R(14,12,8,14)
D.bIq=new A.iP(14,14,14,14)
D.bIK=new A.R(14,6,14,40)
D.bIN=new A.R(14,8,14,30)
D.bJ9=new A.R(16,2,16,10)
D.bJi=new A.R(16,6,16,30)
D.bJk=new A.R(16,6,16,8)
D.bJz=new A.R(18,10,18,4)
D.bJB=new A.R(18,12,18,0)
D.bJI=new A.R(18,14,12,4)
D.app=new A.R(18,16,18,8)
D.bJZ=new A.R(18,20,18,22)
D.bK3=new A.R(18,30,18,30)
D.bKl=new A.R(20,10,12,20)
D.bKo=new A.R(20,11,20,11)
D.bKA=new A.R(20,18,16,18)
D.bKC=new A.R(20,18,20,6)
D.bLq=new A.R(24,32,24,28)
D.bLr=new A.R(24,36,24,32)
D.bLu=new A.R(26,26,24,14)
D.bLI=new A.R(2,4,2,8)
D.bLM=new A.R(30,0,30,0)
D.bLX=new A.R(38,22,22,22)
D.apQ=new A.R(40,24,24,24)
D.bLZ=new A.iP(40,40,40,40)
D.bM0=new A.R(46,30,30,30)
D.bMt=new A.R(56,40,40,40)
D.bMw=new A.R(1.25,1.25,1.25,1.25)
D.bMx=new A.R(60,0,60,0)
D.bMB=new A.R(6,14,6,16)
D.bMF=new A.R(6,4,12,0)
D.bMJ=new A.R(6,6,10,2)
D.bMQ=new A.iP(7,3,7,3)
D.bNm=new A.R(5,1.5,5,1.5)
D.bNx=new A.R(6,2.5,6,2.5)
D.hll=new A.D("Family Games",null,B.jr,null,null,null,null,null,null,null,null,null)
D.h2e=new A.D("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.Xy,null,null,null,null,null,null,null,null,null)
D.cPZ=w([D.hll,D.h2e],x.p)
D.bCB=new A.fv(B.ah,B.e,B.i,B.B,null,B.p,null,0,D.cPZ,null)
D.bNY=new A.bu(1,B.b9,D.bCB,null)
D.hpR=new A.D("Signature",null,B.mX,null,null,null,null,null,null,null,null,null)
D.bO1=new A.bu(1,B.b9,D.hpR,null)
D.hhL=new A.D("MADE BY THE ONE WHO PLANTED THE TREE",null,U.uE,null,null,null,null,null,null,null,null,null)
D.bOz=new A.bu(1,B.b9,D.hhL,null)
D.hmR=new A.D("Tell the AI what to fix",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bOQ=new A.bu(1,B.b9,D.hmR,null)
D.hoU=new A.D("Worksheets",null,B.b_b,null,null,null,null,null,null,null,null,null)
D.fXM=new A.H(!0,E.aiK,null,null,null,null,13,B.cE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hnI=new A.D("Track your project spending",null,D.fXM,null,null,null,null,null,null,null,null,null)
D.df7=w([D.hoU,B.at,D.hnI],x.p)
D.bCe=new A.fv(B.ah,B.e,B.i,B.B,null,B.p,null,0,D.df7,null)
D.bOW=new A.bu(1,B.b9,D.bCe,null)
D.fSt=new A.H(!0,E.kI,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2O=new A.D("FAMILY LIBRARY",null,D.fSt,null,null,null,null,null,null,null,null,null)
D.bPe=new A.bu(1,B.b9,D.h2O,null)
D.Qb=new C.IX("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.xo=new C.IY(0,"male")
D.p3=new C.IY(1,"female")
D.zV=new C.IY(2,"unknown")
D.vu=new C.anU(0,"owner")
D.Qc=new C.anU(1,"editor")
D.le=new C.anU(2,"viewer")
D.arR=new A.a_(61199,"MaterialIcons",!1)
D.bUC=new A.a_(61504,"MaterialIcons",!1)
D.bUD=new A.a_(61505,"MaterialIcons",!1)
D.bUG=new A.a_(61587,"MaterialIcons",!1)
D.bVK=new A.a_(63034,"MaterialIcons",!0)
D.bW2=new A.a_(63153,"MaterialIcons",!1)
D.bWy=new A.a_(63429,"MaterialIcons",!1)
D.au1=new A.a_(984520,"MaterialIcons",!1)
D.bVg=new A.a_(62776,"MaterialIcons",!1)
D.bZ3=new A.ae(D.bVg,26,B.b8,null,null,null)
D.bTx=new A.a_(57648,"MaterialIcons",!1)
D.bZp=new A.ae(D.bTx,14,B.c,null,null,null)
D.bZH=new A.ae(B.In,17,null,null,null,null)
D.bZO=new A.ae(B.QI,null,B.bU,null,null,null)
D.c_e=new A.ae(E.a4D,null,null,null,null,null)
D.c_h=new A.ae(B.jm,18,E.kI,null,null,null)
D.a4n=new A.a_(62044,"MaterialIcons",!1)
D.c_n=new A.ae(D.a4n,null,B.aZ,null,null,null)
D.c_u=new A.ae(B.A7,18,B.c,null,null,null)
D.c0b=new A.ae(B.e9,16,null,null,null,null)
D.c0j=new A.ae(D.a4n,32,B.aZ,null,null,null)
D.c0D=new A.ae(E.arS,18,B.cY,null,null,null)
D.c1M=new A.ae(B.Iz,22,B.aC,null,null,null)
D.c20=new A.ae(B.e9,22,B.b8,null,null,null)
D.c2d=new A.ae(Y.a4s,22,B.c,null,null,null)
D.c2k=new A.ae(B.vD,52,B.c,null,null,null)
D.c2u=new A.ae(B.Iz,30,B.aC,null,null,null)
D.c2Q=new A.ae(B.Iw,null,B.c,null,null,null)
D.auM=new A.ae(B.vO,22,B.c,null,null,null)
D.c2Z=new A.ae(B.e9,17,null,null,null,null)
D.c3n=new A.ae(B.xA,26,B.cY,null,null,null)
D.c49=new A.ae(B.a4Q,16,null,null,null,null)
D.c4W=new A.ae(B.vD,24,B.c,null,null,null)
D.c51=new A.ae(B.QG,20,B.ud,null,null,null)
D.c57=new A.ae(B.Il,null,B.bU,null,null,null)
D.c5g=new A.ae(B.jm,18,B.c,null,null,null)
D.c5Y=new A.ae(B.cD,22,B.ab,null,null,null)
D.c6T=new A.ae(B.et,16,B.ab,null,null,null)
D.c74=new A.ae(D.a4n,20,B.aZ,null,null,null)
D.avc=new A.ae(B.h2,20,null,null,null,null)
D.c7E=new A.ae(B.cD,18,D.l6,null,null,null)
D.c7V=new A.ae(B.Aj,28,B.c,null,null,null)
D.c86=new A.ae(B.Qv,null,B.fs,null,null,null)
D.c8q=new A.ae(B.Aj,24,B.c,null,null,null)
D.c8T=new A.ae(B.vD,null,B.aZ,null,null,null)
D.c8U=new A.ae(B.jG,20,B.cY,null,null,null)
D.c9d=new A.ae(B.In,16,null,null,null,null)
D.caM=new A.ee(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.f_,!0,null,null,null,null)
D.avY=new C.a7S(10,null)
D.cbi=new C.a7S(12,null)
D.cbj=new C.a7S(14,null)
D.dxT=w([B.bw,B.aZ,B.fz,B.b8],x.O)
D.cct=new A.a6(B.aw,B.aD,B.w,D.dxT,null,null)
D.buI=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bBd=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.db8=w([D.buI,D.bBd],x.O)
D.ccG=new A.a6(B.aW,B.b0,B.w,D.db8,null,null)
D.dr6=w([B.fo,B.h9,B.fz],x.O)
D.ccM=new A.a6(B.aw,B.aD,B.w,D.dr6,null,null)
D.alE=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bkT=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.ddC=w([D.alE,D.bkT],x.O)
D.cdo=new A.a6(B.aW,B.b0,B.w,D.ddC,null,null)
D.boM=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aFk=w([D.boM,D.alE],x.O)
D.cdH=new A.a6(B.aw,B.aD,B.w,D.aFk,null,null)
D.akk=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.brB=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dq8=w([D.akk,D.brB],x.O)
D.cem=new A.a6(B.a5,B.a9,B.w,D.dq8,null,null)
D.dFK=w([B.bC,B.nZ],x.O)
D.ceo=new A.a6(B.aW,B.b0,B.w,D.dFK,null,null)
D.buD=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dGK=w([D.buD,D.l6,D.l6,I.OE],x.O)
D.dJz=w([0,0.07,0.9,1],x.n)
D.ceU=new A.a6(B.a5,B.a9,B.w,D.dGK,D.dJz,null)
D.cf2=new A.a6(B.aw,B.aD,B.w,B.UC,null,null)
D.d8x=w([B.aB,D.lY],x.O)
D.cf5=new A.a6(B.a5,B.a9,B.w,D.d8x,null,null)
D.dFg=w([B.b8,B.aZ,B.bU],x.O)
D.cga=new A.a6(B.aw,B.aD,B.w,D.dFg,null,null)
D.ckB=w([10,20,30],x.t)
D.cuD=w([-1,-0.4,0.3,1],x.n)
D.cCd=w([B.bw,B.b8,B.fo],x.O)
D.cCl=w([B.bk,B.aB,B.kH],x.O)
D.cCn=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cD6=w([30,140,262,360],x.n)
D.bsU=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cIJ=w([D.bsU,E.alc],x.O)
D.eFC=new A.m(1,2)
D.fAb=new A.d4(B.ba,D.eFC,3)
D.aCa=w([D.fAb],x.F)
D.cQg=w([B.hm,B.cj,B.fy],x.O)
D.cT7=w([B.bQ,B.bz,B.bt],x.O)
D.bQ4=new C.vg("classic","Classic leather","Gold-edged brown leather",D.aFk,E.kI,E.kI,"\u2766",B.K,!0,!1,!1,!1)
D.bjY=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bzS=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.dh3=w([D.bjY,D.bzS],x.O)
D.alf=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bQ_=new C.vg("ornate","Ornate gold","Double gold border and flourishes",D.dh3,D.alf,D.alf,"\u2726",B.K,!0,!0,!0,!1)
D.boi=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bvr=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d7d=w([D.boi,D.bvr],x.O)
D.bPZ=new C.vg("parchment","Parchment","Old paper with dark ink",D.d7d,D.Hi,L.ji,"\u2767",B.K,!0,!1,!1,!0)
D.ain=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.by_=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dD8=w([D.ain,D.by_],x.O)
D.bsm=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.bxc=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bQ1=new C.vg("minimal","Clean paper","Plain and elegant, like a printed book",D.dD8,D.bsm,D.bxc,"",B.K,!0,!0,!1,!0)
D.bQ3=new C.vg("midnight","Midnight","Deep blue with silver stars",K.aFE,B.cH,B.cm,"\u2727",B.K,!0,!0,!1,!1)
D.bPY=new C.vg("emerald","Emerald library","Green cloth, title on the left",W.aCB,E.kI,B.hb,"\u25c6",B.aU,!0,!1,!1,!1)
D.byw=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dB2=w([B.eE,D.byw],x.O)
D.btK=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bv0=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bQ2=new C.vg("rose","Rose vintage","Burgundy with rose-gold lettering",D.dB2,D.btK,D.bv0,"\u2740",B.K,!0,!1,!0,!1)
D.dGl=w([B.cx,F.nl],x.O)
D.bQ0=new C.vg("modern","Modern","Dark, bold, left-aligned",D.dGl,B.aH,B.c,"",B.aU,!1,!0,!1,!1)
D.a6P=w([D.bQ4,D.bQ_,D.bPZ,D.bQ1,D.bQ3,D.bPY,D.bQ2,D.bQ0],A.as("N<vg>"))
D.cWb=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dG7=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bQf=new C.lR('What does "Ubuntu" mean?',D.dG7,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d9i=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bQi=new C.lR("In Swahili, what do we call a grandmother?",D.d9i,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d99=w(["Babu","Mama","Baba","Dada"],x.s)
D.bQd=new C.lR("In Swahili, what do we call a grandfather?",D.d99,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.daE=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bQh=new C.lR("What is a sister called in Swahili?",D.daE,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.dgq=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bQe=new C.lR("What is a brother called in Swahili?",D.dgq,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d98=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bQp=new C.lR("Which word means father in Swahili?",D.d98,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dHm=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bQo=new C.lR('"Umoja ni nguvu" means...',D.dHm,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dDW=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bQq=new C.lR('"Haba na haba hujaza kibaba" teaches us...',D.dDW,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.ddL=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bQn=new C.lR('The African saying "It takes a village to raise a child" means...',D.ddL,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dHF=w(["The elders","The market","The river","The drum"],x.s)
D.bQj=new C.lR("Who is the traditional keeper of the family stories?",D.dHF,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.d_x=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bQg=new C.lR("Why do families sit round the fire at night?",D.d_x,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dGn=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bQl=new C.lR('What does "Harambee" mean?',D.dGn,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.djN=w(["An elder","A baby","A market","A cow"],x.s)
D.bQk=new C.lR('"Mzee" is a respectful word for...',D.djN,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dAS=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bQm=new C.lR('What does "Shikamoo" show?',D.dAS,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.aCw=w([D.bQf,D.bQi,D.bQd,D.bQh,D.bQe,D.bQp,D.bQo,D.bQq,D.bQn,D.bQj,D.bQg,D.bQl,D.bQk,D.bQm],x.J)
D.d40=w([90,360],x.n)
D.d6J=w([B.bU,B.bp],x.O)
D.buq=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d7t=w([D.ain,D.buq],x.O)
D.d8f=w([-1,-0.3,0.4,1],x.n)
D.d9f=w([0,0.45,0.72,0.92,1],x.n)
D.boe=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d9B=w([D.boe,B.bF],x.O)
D.blT=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.an4=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.dah=w([B.dD,D.blT,D.an4],x.O)
D.dbs=w([B.be,B.jx,B.pN],x.O)
D.boO=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bx4=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.blz=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.dby=w([D.boO,D.bx4,D.blz],x.O)
D.dbW=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.dc5=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hV9=new C.afo(78,424,48,44,56)
D.hV7=new C.afo(214,396,34,34,42)
D.hV8=new C.afo(442,452,56,50,64)
D.aDu=w([D.hV9,D.hV7,D.hV8],A.as("N<afo>"))
D.dcG=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bkM=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bqJ=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dJv=w([D.akk,D.bkM,D.bqJ],x.O)
D.bQ5=new C.vh("leather","Leather",D.dJv,"vintage")
D.dkT=w([B.dl,B.H7,Ac.a_F],x.O)
D.bQc=new C.vh("midnight","Midnight",D.dkT,"starry")
D.dbt=w([B.ew,B.em,B.lB],x.O)
D.bQb=new C.vh("forest","Forest",D.dbt,"story")
D.dLP=w([B.ex,B.eE,B.kK],x.O)
D.bQ8=new C.vh("burgundy","Burgundy",D.dLP,"royal")
D.cSD=w([B.aB,B.ne,B.nP],x.O)
D.bQ9=new C.vh("royal","Royal",D.cSD,"royal")
D.dek=w([B.bz,B.cx,F.nl],x.O)
D.bQ6=new C.vh("charcoal","Charcoal",D.dek,"geo")
D.dJE=w([B.ca,B.e1,B.x_],x.O)
D.bQa=new C.vh("sunset","Sunset",D.dJE,"sunset")
D.dKs=w([B.jx,B.zd,B.a_J],x.O)
D.bQ7=new C.vh("ocean","Ocean",D.dKs,"band")
D.AN=w([D.bQ5,D.bQc,D.bQb,D.bQ8,D.bQ9,D.bQ6,D.bQa,D.bQ7],A.as("N<vh>"))
D.deU=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.dfD=w([B.an,B.aM,B.a_],x.O)
D.dha=w([B.eE,B.em,B.dl,B.j1,B.zf,B.cY,B.kg,B.cU,B.de],x.O)
D.dhb=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fAc=new A.d4(B.dH,B.dP,8)
D.dho=w([D.fAc],x.F)
D.diH=w([B.c6,B.e1,B.kc],x.O)
D.bmK=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.br1=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bvm=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.diZ=w([D.bmK,G.alM,D.br1,D.bvm,D.an4],x.O)
D.dji=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.djz=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bk9=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bqk=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dk6=w([D.bk9,D.ajN,D.bqk],x.O)
D.dkO=w([B.c6,B.hL],x.O)
D.dkU=w([G.nS,B.iv,G.aiz,B.d0],x.O)
D.dmD=w([B.d0,G.nS,B.iv,D.lZ,B.d0],x.O)
D.dnk=w([B.aQ,B.zb,B.z2],x.O)
D.f2o=new A.y(-0.65,0.6)
D.ffR=new A.y(-0.2,0.95)
D.fh9=new A.y(0.25,0.95)
D.f5Y=new A.y(0.7,0.6)
D.fhL=new A.y(1,0.1)
D.doc=w([Am.Wq,D.f2o,D.ffR,D.fh9,D.f5Y,D.fhL],x.G)
D.btd=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bzK=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bnM=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.doj=w([D.btd,D.bzK,D.bnM],x.O)
D.dop=w([B.bO,B.c3,B.dI,B.aQ],x.O)
D.doZ=w([B.hZ,B.ca,B.v4],x.O)
D.dpo=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dpA=w([B.fo,B.cY],x.O)
D.buM=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dq3=w([D.buM,D.ail],x.O)
D.dqf=w([B.cX,B.fN,B.h_],x.O)
D.dqs=w([B.aH,B.bp,B.dl],x.O)
D.dr3=w([B.ej,B.dq,B.em],x.O)
D.drs=w([B.dV,B.dl,B.H7],x.O)
D.drw=w([B.bu,B.nb,B.de],x.O)
D.drO=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.btZ=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bs4=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dsa=w([D.btZ,D.ajJ,D.bs4],x.O)
D.dt3=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.duf=w([1,0,7,6,3,2],x.t)
D.a7S=w(["leather","linen","plain","stars","rays"],x.s)
D.dur=w([0.5,2,3.6],x.n)
D.dv1=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bYi=new A.a_(983781,"MaterialIcons",!1)
D.aEZ=w([B.QI,B.hQ,B.kQ,B.ij,F.au9,B.IK,B.rs,D.bYi,K.atN,B.E3,B.rx,B.m7],A.as("N<a_>"))
D.a7W=w(["double","single","corners","none"],x.s)
D.bPV=new C.A2("Little Seed","\ud83c\udf31",0)
D.bPX=new C.A2("Young Listener","\ud83d\udc42",40)
D.bPW=new C.A2("Storyteller","\ud83e\ude98",120)
D.bPU=new C.A2("Village Pride","\ud83c\udfe1",300)
D.bPS=new C.A2("Keeper of Roots","\ud83c\udf33",700)
D.bPT=new C.A2("Elder of the Fire","\ud83d\udd25",1500)
D.aF0=w([D.bPV,D.bPX,D.bPW,D.bPU,D.bPS,D.bPT],A.as("N<A2>"))
D.dwl=w([B.d1,B.bl,B.cU],x.O)
D.dwD=w([],x.C)
D.EE=w([],x.u)
D.aPl=new A.m(225,528)
D.f45=new A.y(D.aPl,1)
D.eGn=new A.m(350,548)
D.faI=new A.y(D.eGn,0.95)
D.aPf=new A.m(158,656)
D.faB=new A.y(D.aPf,1.12)
D.eHa=new A.m(92,544)
D.f_w=new A.y(D.eHa,0.93)
D.eGq=new A.m(398,614)
D.f6l=new A.y(D.eGq,1.04)
D.eGe=new A.m(318,662)
D.eVI=new A.y(D.eGe,1.1)
D.a83=w([D.f45,D.faI,D.faB,D.f_w,D.f6l,D.eVI],A.as("N<+(m,G)>"))
D.dyO=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dzo=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dAw=w([B.d0,G.nS,B.iv,D.lZ,B.d0,B.iv],x.O)
D.dC_=w([B.as,B.fN,B.j1],x.O)
D.dCH=w([-70,58],x.n)
D.dCJ=w([-70,-30,20],x.n)
D.dDT=w([B.bu,B.nb,B.a0N],x.O)
D.dEa=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.e02=new C.mp("construction","Construction","Jobsite & builds",B.rw)
D.e09=new C.mp("house","Home Build","Houses & rooms",B.vF)
D.e0_=new C.mp("grocery","Grocery","Store & pantry",B.a5j)
D.e_Z=new C.mp("calculator","Calculations","Math & estimates",B.QP)
D.e07=new C.mp("lumber","Materials","Lumber & supplies",B.IH)
D.e_W=new C.mp("kitchen","Kitchen","Remodel & meals",A3.Rc)
D.bYf=new A.a_(983756,"MaterialIcons",!1)
D.e00=new C.mp("landscape","Landscaping","Yard & garden",D.bYf)
D.e_V=new C.mp("plumbing","Plumbing","Pipes & water",B.qh)
D.e0a=new C.mp("electrical","Electrical","Wiring & power",B.fQ)
D.e_T=new C.mp("store","Retail Shop","Daily business",B.kr)
D.e_U=new C.mp("paint_remodel","Paint & Remodel","Colors & walls",A3.R6)
D.bXA=new A.a_(983311,"MaterialIcons",!1)
D.e06=new C.mp("roofing","Roofing","Roofs & exteriors",D.bXA)
D.bYs=new A.a_(983986,"MaterialIcons",!1)
D.e_S=new C.mp("warehouse","Warehouse","Storage & stock",D.bYs)
D.e04=new C.mp("vehicles","Vehicles","Fleet & transport",B.E_)
D.bVi=new A.a_(62785,"MaterialIcons",!1)
D.e_Y=new C.mp("farm","Farm","Crops & livestock",D.bVi)
D.e_X=new C.mp("restaurant","Restaurant","Food & catering",B.vM)
D.e03=new C.mp("tools","Tools","Workshop gear",B.DW)
D.e08=new C.mp("wallet","Cash & Wallet","Quick spending",B.jG)
D.e05=new C.mp("concrete","Concrete","Foundation work",F.asR)
D.e01=new C.mp("blueprint","Blueprint","Plans & design",Ar.aso)
D.a8s=w([D.e02,D.e09,D.e0_,D.e_Z,D.e07,D.e_W,D.e00,D.e_V,D.e0a,D.e_T,D.e_U,D.e06,D.e_S,D.e04,D.e_Y,D.e_X,D.e03,D.e08,D.e05,D.e01],A.as("N<mp>"))
D.dES=w([B.bv,B.bl],x.O)
D.dFL=w([B.iJ,B.oM,B.e7],x.O)
D.aky=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aly=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bsq=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bjE=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aGc=w([D.aky,D.aly,D.bsq,D.bjE],x.O)
D.dH0=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a8C=w(["top","middle","bottom"],x.s)
D.dIB=w([B.cw,B.bp,B.dl],x.O)
D.aGw=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.bdc=new A.ac(0,B.G,B.ba,B.J,14)
D.aGA=w([D.bdc],x.V)
D.brg=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dJn=w([D.aj0,D.a0M,D.brg],x.O)
D.dJo=w([B.bf,B.dq,B.em],x.O)
D.eFY=new A.m(24,-8)
D.eGG=new A.m(48,0)
D.eFU=new A.m(24,6)
D.dLh=w([B.J,D.eFY,D.eGG,D.eFU],x.g)
D.dLJ=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eCn={top:0,middle:1,bottom:2}
D.dP9=new A.bl(D.eCn,["Top","Middle","Bottom"],x.r)
D.eBU={double:0,single:1,corners:2,none:3}
D.dPg=new A.bl(D.eBU,["Double line","One line","Corners","None"],x.r)
D.eDb={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dQW=new A.bl(D.eDb,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dR7=new A.bl(B.il,[],A.as("bl<F,+(o,o)>"))
D.eCe={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.ET=new A.bl(D.eCe,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bl<o,F>"))
D.dVr=new H.Oy(32,null)
D.dVs=new H.Oy(40,null)
D.dVt=new H.Oy(46,null)
D.aOO=new C.aw0(null)
D.eEP=new A.m(0,40)
D.eEQ=new A.m(0,412)
D.eET=new A.m(0,900)
D.eF1=new A.m(0,-34)
D.eF2=new A.m(0,-46)
D.eF4=new A.m(0,-74)
D.eF7=new A.m(100,300)
D.eF8=new A.m(10,14)
D.eFb=new A.m(10,-10)
D.eFg=new A.m(10,-46)
D.eFh=new A.m(10,-58)
D.eFi=new A.m(116,442)
D.eFk=new A.m(11,-1)
D.eFl=new A.m(11,-10)
D.eFm=new A.m(11,-21)
D.aPa=new A.m(11,-60)
D.eFt=new A.m(14,-2)
D.eFu=new A.m(150,520)
D.aaS=new A.m(150,592)
D.eFx=new A.m(15,-15)
D.eFy=new A.m(16,-1)
D.eFB=new A.m(190,444)
D.eFE=new A.m(1,5)
D.eFM=new A.m(21,-78)
D.eFN=new A.m(222,615)
D.KK=new A.m(225,300)
D.aaU=new A.m(225,574)
D.eFX=new A.m(24,-52)
D.eFZ=new A.m(250,210)
D.eG9=new A.m(2,-56)
D.aPp=new A.m(300,0)
D.eGa=new A.m(300,440)
D.eGd=new A.m(318,476)
D.eGg=new A.m(324,144)
D.aaX=new A.m(332,150)
D.eGi=new A.m(335,585)
D.eGj=new A.m(338,140)
D.eGk=new A.m(340,158)
D.eGm=new A.m(34,-60)
D.Fl=new A.m(36,-24)
D.eGo=new A.m(372,470)
D.eGp=new A.m(390,455)
D.eGy=new A.m(42,468)
D.eGz=new A.m(431,510)
D.eGA=new A.m(431,520)
D.eGB=new A.m(45,-92)
D.eGC=new A.m(46,20)
D.eGD=new A.m(46,-92)
D.eGE=new A.m(46,-94)
D.eGF=new A.m(47,-4)
D.eGH=new A.m(48,-4)
D.eGP=new A.m(4,-26)
D.eGX=new A.m(60,455)
D.eH5=new A.m(8,14)
D.eH9=new A.m(8,-76)
D.eHb=new A.m(95,575)
D.eHc=new A.m(98,-24)
D.eHe=new A.m(9,-2)
D.eHf=new A.m(9,-58)
D.aPy=new A.m(9,-79)
D.eHg=new A.m(9,-9)
D.eHW=new A.m(16.5,8)
D.eHY=new A.m(3.2,0)
D.eHZ=new A.m(-16.5,8)
D.eI5=new A.m(16.5,2)
D.eI8=new A.m(-3.2,0)
D.eIg=new A.m(9.5,6)
D.eIj=new A.m(-10,14)
D.eIk=new A.m(-10,-12)
D.eIl=new A.m(-10,-58)
D.eIn=new A.m(-11,-10)
D.eIp=new A.m(-11,-60)
D.eIq=new A.m(-12,-14)
D.eIr=new A.m(-12,-16)
D.eIw=new A.m(-14,-2)
D.eIz=new A.m(-15,-15)
D.eIA=new A.m(-15,-3)
D.eIC=new A.m(-16,-1)
D.eIS=new A.m(-24,-52)
D.eJ0=new A.m(-2,-34)
D.eJ1=new A.m(-2,-38)
D.eJ3=new A.m(-30,-100)
D.ab_=new A.m(-36,-24)
D.eJe=new A.m(-4,-26)
D.eJg=new A.m(-4,-6)
D.eJp=new A.m(-8,-3)
D.eJq=new A.m(-8,-48)
D.eJt=new A.m(-9,-2)
D.eJv=new A.m(-9,-58)
D.eJw=new A.m(-9,-79)
D.eJx=new A.m(-9,-9)
D.eJA=new A.m(-9.5,6)
D.eJO=new A.m(-16.5,2)
D.hak=new A.D("Write a new book",null,B.hk,null,B.K,null,null,null,null,null,null,null)
D.eKn=new A.C(B.lc,D.hak,null)
D.hpp=new A.D("Tap to go on",null,B.wq,null,null,null,null,null,null,null,null,null)
D.eKK=new A.C(B.kP,D.hpp,null)
D.auj=new A.ae(B.ii,18,B.c,null,null,null)
D.h3b=new A.D("Add",null,B.kY,null,null,null,null,null,null,null,null,null)
D.doF=w([D.auj,B.pv,D.h3b],x.p)
D.fxf=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.doF,null)
D.eKN=new A.C(B.oa,D.fxf,null)
D.eKP=new A.C(E.aob,A7.ZW,null)
D.fXw=new A.H(!0,B.c,null,null,null,null,13.5,B.C,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6u=new A.D("New Project",null,D.fXw,null,null,null,null,null,null,null,null,null)
D.dtv=w([D.auj,B.aa,D.h6u],x.p)
D.fxi=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dtv,null)
D.eL3=new A.C(B.hq,D.fxi,null)
D.h92=new A.D("Choose your header",null,B.uB,null,null,null,null,null,null,null,null,null)
D.eLo=new A.C(B.ih,D.h92,null)
D.biR=new A.fp(2.2,null,null,null,null,B.cY,null,null,null,null)
D.fD4=new A.a4(22,22,D.biR,null)
D.bgW=new A.cp(B.z,null,null,D.fD4,null)
D.eLt=new A.C(B.a29,D.bgW,null)
D.bIB=new A.R(14,2,14,6)
D.hnr=new A.D("The top of your book. Tap a design to see it.",null,V.uC,null,null,null,null,null,null,null,null,null)
D.eLu=new A.C(D.bIB,D.hnr,null)
D.h8b=new A.D("\ud83c\udfc6 A new record!",null,B.h6,null,null,null,null,null,null,null,null,null)
D.eLw=new A.C(B.kP,D.h8b,null)
D.eN6=new A.jf(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.eNa=new A.jf(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aQd=new A.jf(1,0.9607843137254902,0.48627450980392156,0)
D.KR=new A.jf(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Bm=new A.jf(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eNg=new A.jf(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hXl=new C.bmw(null)
D.bDn=new A.n3(D.hXl,null,B.aA,null,null)
D.aTR=new A.cS(0,0,0,0,null,null,D.bDn,null)
D.h3d=new A.D("\ud83c\udfc5",null,B.adh,null,null,null,null,null,null,null,null,null)
D.eRG=new A.cS(null,0,-34,null,null,null,D.h3d,null)
D.f_9=new A.y("E","Sit by the fire again")
D.f4X=new A.y("C","Good Learner")
D.f8z=new A.y("D","Still Growing")
D.fdt=new A.y(-42,42)
D.feT=new A.y("B","Faithful Listener")
D.fhb=new A.y("A","Keeper of the Family")
D.fkt=new A.aZ(-17,0.7,0)
D.fl3=new A.aZ(-8,0.95,1.3)
D.fmb=new A.aZ(18,0.65,5.2)
D.fmd=new A.aZ(0,1.15,2.6)
D.fmy=new A.aZ(9,0.9,3.9)
D.foz=new A.b7([0,0,1,1])
D.aVr=new A.a5(0,0,520,160)
D.fub=new A.a5(10,612,440,618)
D.fuc=new A.a5(10,612,440,628)
D.fuf=new A.a5(14,-64,34,-12)
D.fui=new A.a5(300,336,350,348)
D.abU=new A.a5(30,96,420,346)
D.fuj=new A.a5(30,-9,46,1)
D.fuk=new A.a5(4,2,11,14)
D.fum=new A.a5(-8,-12.5,8,-7)
D.fun=new A.a5(-16.5,-21,16.5,1)
D.fuo=new A.a5(60,342,88,348)
D.Wr=new A.a5(66,-66,94,-36)
D.fup=new A.a5(6,8,10,14)
D.fus=new A.a5(95,343,115,348)
D.fut=new A.a5(-6.5,-74,6.5,-58)
D.fuB=new A.a5(-100,-74,100,-12)
D.fuC=new A.a5(-10,8,-6,14)
D.fuD=new A.a5(-11,2,-4,14)
D.fuE=new A.a5(-11,-70,11,-56)
D.fuL=new A.a5(-13,-24,13,-4)
D.fuS=new A.a5(-15,-21,15,0)
D.fuV=new A.a5(-16,-21,16,1)
D.fuW=new A.a5(-16,-21,16,2)
D.fuZ=new A.a5(-16,-26,16,-6)
D.fv6=new A.a5(-230,-26,230,26)
D.fvv=new A.a5(-38,-26,12,-6)
D.fvz=new A.a5(-3,-70,3,-63)
D.fvA=new A.a5(-44,-22,44,0)
D.fvC=new A.a5(-46,-9,-30,1)
D.aVv=new A.a5(-80,-190,80,20)
D.fvJ=new A.a5(-8,-26,40,-6)
D.fvK=new A.a5(-98,-80,92,-75)
D.fvL=new A.a5(-9,-15,9,-9)
D.hmY=new A.D("Let the AI write it from your tree",null,B.iY,null,B.K,null,null,null,null,null,null,null)
D.bR_=new A.d_(1,B.c9,D.hmY,null)
D.dkN=w([E.RE,B.aa,D.bR_],x.p)
D.fwT=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.dkN,null)
D.h2P=new A.D("Save member",null,B.cg,null,null,null,null,null,null,null,null,null)
D.dCq=w([D.avc,B.aa,D.h2P],x.p)
D.fx3=new A.c_(B.aJ,B.bc,B.i,B.l,null,B.p,null,0,D.dCq,null)
D.c26=new A.ae(B.ix,14,B.b8,null,null,null)
D.fQZ=new A.H(!0,B.b8,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6V=new A.D("Cashier",null,D.fQZ,null,null,null,null,null,null,null,null,null)
D.du4=w([D.c26,B.b6,D.h6V],x.p)
D.fx7=new A.c_(B.aJ,B.e,B.P,B.l,null,B.p,null,0,D.du4,null)
D.h2Q=new A.D("Transfer & settings",null,B.dw,null,null,null,null,null,null,null,null,null)
D.bOG=new A.bu(1,B.b9,D.h2Q,null)
D.daO=w([D.auM,B.ar,D.bOG],x.p)
D.fx8=new A.c_(B.aJ,B.e,B.i,B.l,null,B.p,null,0,D.daO,null)
D.fBJ=new A.av(16,40)
D.fBO=new A.av(22,64)
D.fBV=new A.av(280,88)
D.fCJ=new A.a4(30,null,null,null)
D.h1V=new A.D("The teacher is writing\u2026",null,B.yf,null,null,null,null,null,null,null,null,null)
D.bi2=new A.cp(B.z,null,null,D.h1V,null)
D.hR3=new A.b9("w",x.W)
D.fD8=new A.a4(null,56,D.bi2,D.hR3)
D.fDV=new A.i_(5,8,8,1,null)
D.fE2=new A.i_(2,12,12,1.05,null)
D.h6A=new A.D("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fER=new A.b3(D.h6A,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h6Q=new A.D("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aXQ=new A.b3(D.h6Q,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hfn=new A.D("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fFk=new A.b3(D.hfn,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hqs=new A.D("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fFp=new A.b3(D.hqs,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h90=new A.D("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fFw=new A.b3(D.h90,null,null,null,null,null,null,null,null,null,null,null,null,B.fP,!1,null,null,null,B.t,null)
D.hnE=new A.D("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aXV=new A.b3(D.hnE,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h8Z=new A.D("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fFW=new A.b3(D.h8Z,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h3u=new A.D("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fFY=new A.b3(D.h3u,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hcN=new A.D("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fG3=new A.b3(D.hcN,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hre=new A.D("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fGK=new A.b3(D.hre,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hlQ=new A.D("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fH9=new A.b3(D.hlQ,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hqw=new A.D("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fHc=new A.b3(D.hqw,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hh1=new A.D("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fHe=new A.b3(D.hh1,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.haX=new A.D("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fHf=new A.b3(D.haX,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.haY=new A.D("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fIg=new A.b3(D.haY,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h6C=new A.D("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fIy=new A.b3(D.h6C,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.h8E=new A.D("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fIS=new A.b3(D.h8E,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hgu=new A.D("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fJ8=new A.b3(D.hgu,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.hbN=new A.D("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fJ9=new A.b3(D.hbN,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fWc=new A.H(!0,B.bE,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKI=new A.eG("\u2665",null,null,B.cV,null,null,null,null,null,null,D.fWc)
D.fTi=new A.H(!0,B.aS,null,null,null,null,28,B.O,B.cN,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKY=new A.eG("Today: how well do you know the family?",null,null,B.cV,null,null,null,null,null,null,D.fTi)
D.fLe=new A.H(!0,B.qT,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMq=new A.H(!0,D.l6,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMO=new A.H(!0,D.l6,null,null,null,null,12,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMS=new A.H(!0,B.d0,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN0=new A.H(!0,D.fM,null,null,null,null,15,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNb=new A.H(!0,D.fM,null,null,null,null,13,B.C,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNw=new A.tr(!0,B.uo,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNM=new A.H(!0,B.d0,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNQ=new A.H(!0,D.l6,null,null,null,null,18,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNR=new A.H(!0,B.d0,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNW=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO_=new A.H(!0,B.d0,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOw=new A.H(!0,B.b8,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOx=new A.H(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOz=new A.H(!0,B.aS,null,null,null,null,15.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP1=new A.H(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZc=new A.H(!0,B.aR,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZd=new A.H(!0,D.lY,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPs=new A.H(!0,B.d0,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adm=new A.tr(!0,B.VY,null,null,null,null,B.dK,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Xl=new A.H(!0,B.d0,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPC=new A.H(!0,B.a_,null,null,null,null,12.5,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPH=new A.H(!0,D.fM,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ8=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRi=new A.H(!0,D.fM,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZn=new A.H(!0,D.fM,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRC=new A.H(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRO=new A.H(!0,D.fM,null,null,null,null,null,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRQ=new A.H(!0,null,null,null,null,null,8,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRX=new A.H(!0,L.ji,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZr=new A.H(!0,D.fM,null,null,null,null,14.5,B.O,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSU=new A.H(!0,D.fM,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTb=new A.H(!0,D.fM,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTd=new A.H(!0,B.a_,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTf=new A.H(!0,B.d0,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTE=new A.H(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.JE,null,null,null)
D.aZH=new A.H(!0,D.fM,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU4=new A.H(!0,B.a_,null,null,null,null,17,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUq=new A.H(!0,B.fs,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUO=new A.H(!0,B.bU,null,null,null,null,8,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUT=new A.H(!0,B.bC,null,null,null,null,11,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV4=new A.H(!0,B.c,null,null,null,null,13.5,B.C,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV7=new A.H(!0,D.fM,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVf=new A.H(!0,D.Hi,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVr=new A.H(!0,B.b8,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVQ=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVX=new A.H(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ev,null,null,null)
D.fWn=new A.H(!0,B.d0,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWv=new A.H(!0,B.cY,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWI=new A.H(!0,D.lZ,null,null,null,null,13,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_5=new A.H(!0,D.fM,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.M3=new A.H(!0,B.d0,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_7=new A.H(!0,B.d0,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ev,null,null,null)
D.fX2=new A.H(!0,B.bU,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX6=new A.H(!0,G.nS,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXu=new A.H(!0,B.b8,null,null,null,null,13,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXL=new A.H(!0,D.fM,null,null,null,null,15,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fY9=new A.H(!0,B.c,null,null,null,null,null,B.C,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYz=new A.H(!0,D.fM,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ6=new A.H(!0,D.fM,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZb=new A.H(!0,B.an,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZl=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adW=new A.H(!0,B.an,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.adZ=new A.H(!0,D.lY,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h07=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0s=new A.H(!0,B.aS,null,null,null,null,27,B.O,B.cN,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0z=new A.H(!0,L.ji,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0H=new A.H(!0,L.ji,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1a=new A.D("Time:",null,B.hI,null,null,null,null,null,null,null,null,null)
D.h1w=new A.D("\ud83c\udfae",null,K.adL,null,null,null,null,null,null,null,null,null)
D.h1x=new A.D("Themes",null,B.py,null,null,null,null,null,null,null,null,null)
D.h22=new A.D("\ud83c\udfb2",null,B.yp,null,null,null,null,null,null,null,null,null)
D.h26=new A.D("Delete this game?",null,B.iY,null,null,null,null,null,null,null,null,null)
D.h2d=new A.D("Add Item",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fRw=new A.H(!0,B.a_,null,null,null,null,22,B.C,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2E=new A.D("Debt receipt",null,D.fRw,null,B.K,null,null,null,null,null,null,null)
D.b_k=new A.H(!0,B.an,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2X=new A.D("Person who owes",null,D.b_k,null,null,null,null,null,null,null,null,null)
D.h3Y=new A.D("Notes",null,B.ady,null,null,null,null,null,null,null,null,null)
D.h4s=new A.D("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fQr=new A.H(!0,B.c,null,null,null,null,11,B.C,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4u=new A.D("Share",null,D.fQr,null,null,null,null,null,null,null,null,null)
D.h5v=new A.D("Move your family trees",null,I.adT,null,null,null,null,null,null,null,null,null)
D.h6a=new A.D("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.h6P=new A.D("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.h7c=new A.D("SAVE",null,D.M3,null,null,null,null,null,null,null,null,null)
D.h7Q=new A.D("The round button is the right answer.",null,V.yk,null,null,null,null,null,null,null,null,null)
D.h8a=new A.D("Remove this book?",null,B.h6,null,null,null,null,null,null,null,null,null)
D.fXr=new A.H(!0,B.d0,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Ev,null,null,null)
D.h8J=new A.D("Fireside Stories",null,D.fXr,null,null,null,null,null,null,null,null,null)
D.b_P=new A.D("Download",null,B.cg,null,null,null,null,null,null,null,null,null)
D.h9p=new A.D("What should the AI do?",null,B.dw,null,null,null,null,null,null,null,null,null)
D.fQ1=new A.H(!0,D.lY,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h9E=new A.D("REPORT CARD",null,D.fQ1,null,null,null,null,null,null,null,null,null)
D.har=new A.D("Calabash Catch",null,B.XG,null,null,null,null,null,null,null,null,null)
D.haT=new A.D("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.hbk=new A.D("\ud83c\udfe1",null,B.FR,null,null,null,null,null,null,null,null,null)
D.hc1=new A.D("Ribbon bookmark",null,B.jO,null,null,null,null,null,null,null,null,null)
D.fZ5=new A.H(!0,B.b8,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcw=new A.D("NGMY.ORG",null,D.fZ5,null,B.K,null,null,null,null,null,null,null)
D.hdP=new A.D("Scan family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.fV8=new A.H(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.heC=new A.D("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fV8,null,B.K,null,null,null,null,null,null,null)
D.hfR=new A.D("Delete",null,B.Xf,null,null,null,null,null,null,null,null,null)
D.hfS=new A.D("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.hg_=new A.D("Thumbnail",null,B.py,null,null,null,null,null,null,null,null,null)
D.hgz=new A.D("Save the cover",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hgE=new A.D("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.BO,null,B.K,null,null,null,null,null,null,null)
D.hh2=new A.D("Your photos",null,B.py,null,null,null,null,null,null,null,null,null)
D.hhj=new A.D("Create Project",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hhG=new A.D("\u2b50 stars",null,B.FS,null,null,null,null,null,null,null,null,null)
D.hhU=new A.D("Design your cover",null,B.uB,null,null,null,null,null,null,null,null,null)
D.hi_=new A.D("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.hi2=new A.D("PICTURE",null,N.wu,null,null,null,null,null,null,null,null,null)
D.hi4=new A.D("\ud83c\udfaf",null,D.XF,null,null,null,null,null,null,null,null,null)
D.hir=new A.D("Paid",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hit=new A.D("You can undo it right after.",null,V.yk,null,null,null,null,null,null,null,null,null)
D.hj2=new A.D("Print",null,B.ws,null,null,null,null,null,null,null,null,null)
D.hjt=new A.D("Amount owed",null,D.b_k,null,null,null,null,null,null,null,null,null)
D.hjJ=new A.D("Got it",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hkl=new A.D("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.hko=new A.D("Add to budget",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hkO=new A.D("Debtor signature",null,B.ady,null,null,null,null,null,null,null,null,null)
D.hl_=new A.D("Change icon",null,B.adx,null,null,null,null,null,null,null,null,null)
D.hlR=new A.D("MADE BY THE SYSTEM, FROM YOUR TREE",null,U.uE,null,null,null,null,null,null,null,null,null)
D.hmk=new A.D("Family tree QR",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hmq=new A.D("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.XE,null,null,null,null,null,null,null,null,null)
D.hmO=new A.D("Download",null,B.ws,null,null,null,null,null,null,null,null,null)
D.hmP=new A.D("The person who planted this tree has not made a game yet.",null,Af.yo,null,null,null,null,null,null,null,null,null)
D.hmT=new A.D("Change",null,B.py,null,null,null,null,null,null,null,null,null)
D.hnK=new A.D("Clear all",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hnN=new A.D("WHAT SHOULD IT CHANGE?",null,N.wu,null,null,null,null,null,null,null,null,null)
D.hol=new A.D("COLOUR",null,N.wu,null,null,null,null,null,null,null,null,null)
D.hoA=new A.D("Do it",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hoE=new A.D("Create Tree",null,B.cg,null,null,null,null,null,null,null,null,null)
D.hoP=new A.D("Give me another clue",null,D.M3,null,null,null,null,null,null,null,null,null)
D.hpL=new A.D("Create Family Tree",null,B.fk,null,null,null,null,null,null,null,null,null)
D.hpV=new A.D("THE TEACHER EXPLAINS THESE",null,U.uE,null,null,null,null,null,null,null,null,null)
D.fLd=new A.H(!0,E.kI,null,null,null,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hq0=new A.D("Write the first page myself",null,D.fLd,null,null,null,null,null,null,null,null,null)
D.hqz=new A.D("Use this header",null,B.cL,null,null,null,null,null,null,null,null,null)
D.hqG=new A.D("Create Project",null,E.b__,null,null,null,null,null,null,null,null,null)
D.hSy=new C.ae0(1,"header")
D.af_=new C.ae0(2,"projects")
D.hSz=new C.ae0(3,"cashier")
D.af0=new C.ae0(4,"familyTree")
D.i7i=new C.cKw(0,"start")
D.i7j=new C.cKx(0,"start")
D.hSM=new C.a_K(null)
D.hTO=new C.a0j(null)
D.dR4=new A.bl(B.il,[],A.as("bl<o,H8>"))
D.dwu=w([],x.dE)
D.dwv=w([],x.M)
D.hUs=new C.bjH(D.dR4,D.dwu,D.dwv,0,0,null,null)
D.b4m=new C.a19(0,"intro")
D.b4n=new C.a19(1,"countdown")
D.afd=new C.a19(2,"ask")
D.YB=new C.a19(3,"reveal")
D.b4o=new C.a19(4,"end")
D.hXn=new C.tA(F.Hr,D.lZ,B.d0,F.mo,5,!1,!1,!1,0,null)
D.hXp=new C.tA(F.Hr,B.ex,B.d0,B.bP,2,!0,!0,!1,2,B.d0)
D.hXr=new C.tA(B.r6,B.cY,B.d0,F.mo,2,!0,!1,!1,2,B.as)
D.hXs=new C.tA(F.Hr,B.dV,B.d0,F.mo,5,!1,!1,!1,1,null)
D.hXv=new C.tA(F.a12,D.aly,B.d0,F.mo,4,!0,!1,!0,0,null)
D.b4r=new C.tA(F.a12,B.e1,B.d0,F.mo,3,!0,!1,!0,2,null)
D.b4s=new C.tA(F.tA,D.lZ,B.c,F.mo,0,!1,!1,!0,0,null)
D.b4t=new C.tA(B.r6,B.aB,B.d0,B.bP,2,!0,!0,!1,2,B.e1)
D.b4u=new C.tA(B.r6,G.nS,B.iv,F.mo,5,!1,!1,!0,3,null)
D.hXz=new C.tA(B.r6,B.e1,B.d0,F.mo,0,!0,!1,!1,0,B.aB)
D.b4v=new C.tA(F.Hr,B.ex,B.d0,B.bP,1,!1,!0,!1,1,null)
D.b4w=new C.tA(F.GY,B.as,B.aB,F.mo,4,!0,!1,!0,2,null)
D.hXB=new C.tA(F.tA,B.as,B.ex,F.mo,3,!0,!1,!1,0,null)
D.hXD=new C.tA(B.r6,B.dV,B.d0,B.bP,1,!1,!0,!1,1,null)
D.hXE=new C.tA(F.GY,D.aky,B.c,F.mo,5,!1,!1,!0,0,null)
D.hYi=new C.a1I(null)
D.i7r=new C.ahu(0,"still")
D.YY=new C.ahu(1,"walk")
D.b5f=new C.ahu(2,"pound")
D.b5g=new C.ahu(3,"drum")
D.i2T=new C.a31(0,"greet")
D.b5h=new C.a31(1,"teach")
D.afx=new C.a31(2,"ask")
D.i2U=new C.a31(3,"feedback")
D.b5i=new C.a31(4,"end")
D.Z4=new C.a3k(0,"intro")
D.Z5=new C.a3k(1,"asking")
D.C4=new C.a3k(2,"reacting")
D.afI=new C.a3k(3,"driving")
D.afJ=new C.a3k(4,"arrived")
D.afR=new C.aNS(0,"projects")
D.b5I=new C.aNS(1,"cashier")
D.i4Z=new C.aNS(2,"familyTree")})()};
(a=>{a["q6KL0FClWkrYYvJoMIJMPvOxeJw="]=a.current})($__dart_deferred_initializers__);