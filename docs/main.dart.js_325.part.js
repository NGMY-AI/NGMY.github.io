((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,P,A_,S,A9,I,H,E,T,Q,O,Aa,Ab,A0,Ac,Ad,R,L,A1,A2,Ae,A3,A4,A5,Af,Ag,A6,Ah,Ai,A7,Aj,A8,Ak,Al,U,N,Am,An,Ao,V,Ap,W,X,G,Aq,K,F,Y,C={
bEt(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bEt=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vx(null,""),$async$bEt)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nd(b1)
s=A.c1(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.ds(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cT(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.M)(h),++d){a0=h[d]
f.push(A.G(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.X.ap(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.r4(t,a1,B.hO,"book",E.FZ),$async$bEt)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.R1(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.Lu(l)?y.k:y.y)
for(j=J.a5(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a2(r.a(j.h(a2,a7)),q,p):B.cA
g=a8.h(0,"title")
a9=B.a.i(A.w(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.w(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.z(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.t(b4,"Swahili")){u=H.a2W(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEt,v)},
ahp(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ahp=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vx(null,""),$async$ahp)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nd(b6)
s=x.S
r=A.d1(c1,0,A.dB(4,"count",s),A.T(c1).c)
q=H.a2J(new A.N(r,new C.fHq(),r.$ti.k("N<ak.E,n>")).aH(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fHp(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.X.ap(b7,null)+"\nAllowed values: style one of "+B.d.aH(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahp)
case 6:l=c5
k=H.R1(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.aoU(s,D.dyN,r.b(k.h(0,"cover"))?A.a2(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.W("There is no page to change.")
h=A.U(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.ds(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.M)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.G(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.X.ap(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahp)
case 10:l=c5
k=l==null?null:H.R1(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dc(a8,d),a5=J.aW(a2.a),a2=a2.$ti,a7=new A.l9(a5,a2.k("l9<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gT(a5))
b0=J.a5(a9)
b1=A.aK(b0.h(a9,"index"))
i=b1==null?null:B.k.N(b1)
if(i==null||!B.d.t(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.w(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.w(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.z(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("bc<2>")
p=A.cG(new A.bc(h,s),new C.fHr(),s.k("L.E"),p)
p=H.a2J(A.pr(p,3,A.a7(p).k("L.E")).aH(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cv<1>")
b4=A.C(new A.cv(h,s),s.k("L.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.M)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a2W(s,b9),$async$ahp)
case 13:b5=c5
for(s=J.a5(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.aoU(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahp,v)},
hxc(d,e,f){return A.cj(null,B.w.j(0.65),!1,null,new C.fQV(e,f),d,null,!0,!0,x.g2)},
aoU:function aoU(d,e,f){this.a=d
this.b=e
this.c=f},
fHq:function fHq(){},
fHp:function fHp(d){this.a=d},
fHr:function fHr(){},
fQV:function fQV(d,e){this.a=d
this.b=e},
bCi(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bCi=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.b2(b1,new C.fvu())){u=null
w=1
break}t=B.d.d_(b1,new C.fvv())
s=$.S()
r=new A.p0()
q=A.z9(r,D.aPv)
p=A.I()
p.r=B.c.gp(0)
q.aP(D.aPv,p)
o=A.I()
o.r=B.M.gp(0)
o.c=3.6
o.b=B.ab
o.d=B.bE
o.e=B.dT
n=new C.fvA(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.k.E(k-m,1,1e4)
d=B.k.E(j-l,1,1e4)
a0=B.k.E(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.S()
p=A.a([],x.v)
a3=new A.aG(s.r,B.ah,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.M)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aY(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aG(a3,o)}else{p=A.a([],x.v)
a3=new A.aG(s.r,B.ah,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.M)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aY(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.by(a8)
a7=a3.e
if(a7!=null)a7.a.delete()
a3.e=null}}q.aG(a3,o)}w=4
return A.b(r.nf().x9(520,160),$async$bCi)
case 4:w=3
return A.b(b3.ht(B.h9),$async$bCi)
case 3:b0=b3
u=b0==null?null:J.eR(B.dJ.gaR(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bCi,v)},
fF6(d){return C.ibb(d)},
ibb(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fF6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bhy()
n=d.x!=null&&d.zd(null).length===0
if(d.x!=null)t=n?D.zT:D.Ja
else t=d.gU9()?D.Ja:D.aKr
w=3
return A.b(C.bCi(d.ax),$async$fF6)
case 3:s=f
p.a=null
if(s!=null)p.a=A.anC(s)
r=A.a4R(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aKr}else{p.c=C.x1(q,!0)
p.b=n?D.zT:D.Ja}r.a3C(A.h0k(new C.fF8(p,d,new C.fF9(),t,n,o),null,D.bCB,B.wK))
u=r.jy(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fF6,v)},
fLL(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fLL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fF6(d),$async$fLL)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aN(s,r,"_")
if(q.length>40)q=B.a.ar(q,0,40)
u=Ad.H2(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fLL,v)},
fvu:function fvu(){},
fvv:function fvv(){},
fvA:function fvA(d){this.a=d},
fF9:function fF9(){},
fF8:function fF8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fF7:function fF7(){},
fRn(d,e){var w=0,v=A.j(x.H)
var $async$fRn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cj(null,B.w.j(0.55),!0,null,new C.fRr(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$fRn)
case 2:return A.h(null,v)}})
return A.i($async$fRn,v)},
bEW(d,e,f,g){return C.iiM(d,e,f,g)},
iiM(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bEW=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.t(e,",")?B.d.gak(e.split(",")):e
r=B.cD.aL(t)}catch(q){r=null}if(r==null||r.length===0){d.K(x.q).f.U(D.fcq)
w=1
break}w=3
return A.b(A.cj(null,null,!0,null,new C.fRj(g,r,f),d,null,!0,!0,x.H),$async$bEW)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bEW,v)},
fRs(d,e){var w=0,v=A.j(x.H)
var $async$fRs=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cj(null,null,!0,null,new C.fRv(new A.cB(null,x.eF),e),d,null,!0,!0,x.H),$async$fRs)
case 2:return A.h(null,v)}})
return A.i($async$fRs,v)},
aZP:function aZP(d,e){this.c=d
this.a=e},
c6l:function c6l(){},
bc5:function bc5(d,e){this.b=d
this.a=e},
fRr:function fRr(d,e){this.a=d
this.b=e},
fRo:function fRo(d){this.a=d},
fRp:function fRp(d,e,f){this.a=d
this.b=e
this.c=f},
fRq:function fRq(d,e){this.a=d
this.b=e},
fRj:function fRj(d,e,f){this.a=d
this.b=e
this.c=f},
fRh:function fRh(d){this.a=d},
fRi:function fRi(d,e,f){this.a=d
this.b=e
this.c=f},
fRv:function fRv(d,e){this.a=d
this.b=e},
fRt:function fRt(d){this.a=d},
fRu:function fRu(d,e,f){this.a=d
this.b=e
this.c=f},
fzM(d,e){var w=0,v=A.j(x.y),u,t
var $async$fzM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2u(d),$async$fzM)
case 3:t=g
J.nA(t,new C.fzN(e))
u=A.ai3(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fzM,v)},
fzN:function fzN(d){this.a=d},
ap5:function ap5(d,e,f){this.c=d
this.d=e
this.a=f},
aDR:function aDR(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dMu:function dMu(d,e){this.a=d
this.b=e},
dMf:function dMf(d,e){this.a=d
this.b=e},
dMi:function dMi(d,e,f){this.a=d
this.b=e
this.c=f},
dMh:function dMh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dMg:function dMg(d,e){this.a=d
this.b=e},
dMj:function dMj(d,e){this.a=d
this.b=e},
dMd:function dMd(){},
dMe:function dMe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dMc:function dMc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dLY:function dLY(d){this.a=d},
dLZ:function dLZ(d,e,f){this.a=d
this.b=e
this.c=f},
dM_:function dM_(d,e){this.a=d
this.b=e},
dLX:function dLX(d){this.a=d},
dM4:function dM4(d,e){this.a=d
this.b=e},
dLW:function dLW(d){this.a=d},
dM5:function dM5(d,e,f){this.a=d
this.b=e
this.c=f},
dM6:function dM6(d,e,f){this.a=d
this.b=e
this.c=f},
dLV:function dLV(d,e){this.a=d
this.b=e},
dM7:function dM7(d,e,f){this.a=d
this.b=e
this.c=f},
dLU:function dLU(d,e){this.a=d
this.b=e},
dM8:function dM8(d,e){this.a=d
this.b=e},
dLT:function dLT(d){this.a=d},
dM9:function dM9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dLR:function dLR(){},
dLL:function dLL(d){this.a=d},
dLM:function dLM(d){this.a=d},
dLS:function dLS(d,e){this.a=d
this.b=e},
dMa:function dMa(d,e){this.a=d
this.b=e},
dLQ:function dLQ(d){this.a=d},
dMb:function dMb(d){this.a=d},
dLP:function dLP(){},
dM0:function dM0(d,e){this.a=d
this.b=e},
dLO:function dLO(d){this.a=d},
dM1:function dM1(d,e,f){this.a=d
this.b=e
this.c=f},
dLN:function dLN(d,e){this.a=d
this.b=e},
dLK:function dLK(d,e){this.a=d
this.b=e},
dM2:function dM2(d){this.a=d},
dM3:function dM3(d,e,f){this.a=d
this.b=e
this.c=f},
dMx:function dMx(){},
dMy:function dMy(d,e){this.a=d
this.b=e},
dMv:function dMv(d){this.a=d},
dMw:function dMw(d){this.a=d},
dMr:function dMr(d,e){this.a=d
this.b=e},
dMs:function dMs(d){this.a=d},
dMk:function dMk(d,e,f){this.a=d
this.b=e
this.c=f},
dMl:function dMl(d,e,f){this.a=d
this.b=e
this.c=f},
dMm:function dMm(d,e,f){this.a=d
this.b=e
this.c=f},
dMn:function dMn(d,e,f){this.a=d
this.b=e
this.c=f},
dMo:function dMo(d,e,f){this.a=d
this.b=e
this.c=f},
dMp:function dMp(d,e,f){this.a=d
this.b=e
this.c=f},
dMq:function dMq(d,e,f){this.a=d
this.b=e
this.c=f},
dMz:function dMz(){},
dMA:function dMA(){},
dMB:function dMB(){},
dMC:function dMC(d){this.a=d},
dMt:function dMt(d,e){this.a=d
this.b=e},
htg(d){return B.d.dK(D.a3I,new C.fAq(d),new C.fAr())},
uw:function uw(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fAq:function fAq(d){this.a=d},
fAr:function fAr(){},
al9:function al9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aVz:function aVz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Ti:function Ti(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfJ:function bfJ(){this.d=$
this.c=this.a=null},
dcD:function dcD(d,e){this.a=d
this.b=e},
dcB:function dcB(d,e){this.a=d
this.b=e},
dcC:function dcC(){},
dcE:function dcE(d,e){this.a=d
this.b=e},
hdR(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nl(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
Lg(d,e){return C.i9N(d,e)},
i9N(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$Lg=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Lg)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aS(J.r(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.X.aM(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dc(p,x.f)
o=A.cG(o,new C.fCH(),o.$ti.k("L.E"),x.B)
n=A.a7(o).k("Z<L.E>")
o=A.C(new A.Z(o,new C.fCI(),n),n.k("L.E"))
B.d.aW(o,new C.fCJ())
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
return A.i($async$Lg,v)},
Bc(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bc=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bc)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b6(f,new C.fQ0(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.au("String","ngmy_family_book_v1_"+s+"_"+e,B.X.ap(r,null)),$async$Bc)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bc,v)},
aRE(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aRE=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lg(d,e),$async$aRE)
case 2:u=h
t=J.cE(u)
s=t.bg(u,new C.fYm(f))
if(s===-1)t.c3(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bc(d,e,u),$async$aRE)
case 3:return A.h(null,v)}})
return A.i($async$aRE,v)},
bCM(d,e,f){var w=0,v=A.j(x.H),u
var $async$bCM=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Lg(d,e),$async$bCM)
case 2:u=h
J.nA(u,new C.fzE(f))
w=3
return A.b(C.Bc(d,e,u),$async$bCM)
case 3:return A.h(null,v)}})
return A.i($async$bCM,v)},
bD_(d,e){return C.i9M(d,e)},
i9M(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bD_=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bD_)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aS(J.r(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.NQ
w=1
break}p=B.X.aM(0,q,null)
if(x.f.b(p)){o=A.a2(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aK(o.h(0,"emblem"))
k=k==null?null:B.k.N(k)
if(k==null)k=0
if(D.Da.aj(0,o.h(0,"foil")))j=A.cP(o.h(0,"foil"))
else j=J.A(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aK(o.h(0,"titleSize"))
if(i==null)i=null
i=B.k.E(i==null?25:i,18,36)
h=B.d.t(D.a5m,o.h(0,"position"))?A.cP(o.h(0,"position")):"middle"
g=B.d.t(D.a4I,o.h(0,"frame"))?A.cP(o.h(0,"frame")):"double"
f=B.d.t(D.a4D,o.h(0,"texture"))?A.cP(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.A(o.h(0,"ribbon"),!1)
o=B.d.t(D.d1j,o.h(0,"header"))?A.cP(o.h(0,"header")):"classic"
o=new C.I0(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.NQ
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.NQ
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bD_,v)},
S6(d,e,f){return C.iii(d,e,f)},
iii(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$S6=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$S6)
case 7:r=h
w=8
return A.b(r.au("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.X.ap(f.ag(),null)),$async$S6)
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
return A.i($async$S6,v)},
Rz(d,e){return C.i9O(d,e)},
i9O(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$Rz=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$Rz)
case 7:r=g
q=r.ty("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.Lg(d,e),$async$Rz)
case 8:if(!j.cL(g)){n=B.a.i(d.toLowerCase())
m=J.lA(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$Rz)
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
return A.i($async$Rz,v)},
agJ(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$agJ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rz(d,e),$async$agJ)
case 3:s=g
r=J.a5(s)
if(r.gL(s)>=6){u=null
w=1
break}t=r.t(s,"main")?""+1000*Date.now()+"_"+r.gL(s):"main"
r.M(s,t)
w=5
return A.b(A.az(),$async$agJ)
case 5:w=4
return A.b(g.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$agJ)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$agJ,v)},
a37(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a37=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Rz(d,e),$async$a37)
case 2:s=h
J.hz(s,f)
w=3
return A.b(A.az(),$async$a37)
case 3:u=h
w=4
return A.b(u.au("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a37)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a37)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a37)
case 6:return A.h(null,v)}})
return A.i($async$a37,v)},
nl:function nl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCH:function fCH(){},
fCI:function fCI(){},
fCJ:function fCJ(){},
fQ0:function fQ0(){},
fYm:function fYm(d){this.a=d},
fzE:function fzE(d){this.a=d},
I0:function I0(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bPP:function bPP(d){this.a=d},
iiB(d,e,f,g,h,i,j){return A.a4(d,!1).cd(A.dZ(new C.fQz(j,i,f,e,h,g),!0,null,x.H))},
Rw(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$Rw=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rz(h,g),$async$Rw)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.K(x.q).f.U(D.aRB)
u=!1
w=1
break}w=4
return A.b(C.hxc(d,f,e),$async$Rw)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.agJ(h,g),$async$Rw)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nl(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Bc(h,r,p),$async$Rw)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.S6(h,r,new C.I0("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$Rw)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Rw,v)},
fQz:function fQz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ZS:function ZS(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAR:function aAR(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
ddi:function ddi(d){this.a=d},
ddh:function ddh(d,e){this.a=d
this.b=e},
dd6:function dd6(d,e){this.a=d
this.b=e},
dd3:function dd3(d,e){this.a=d
this.b=e},
dcF:function dcF(d){this.a=d},
dcG:function dcG(d,e){this.a=d
this.b=e},
dd7:function dd7(d){this.a=d},
dcO:function dcO(d){this.a=d},
dcM:function dcM(d){this.a=d},
dcN:function dcN(d){this.a=d},
dcP:function dcP(d){this.a=d},
dd4:function dd4(d){this.a=d},
dd5:function dd5(){},
dcK:function dcK(d){this.a=d},
dcL:function dcL(d,e){this.a=d
this.b=e},
dcQ:function dcQ(d){this.a=d},
dcR:function dcR(d,e){this.a=d
this.b=e},
ddg:function ddg(d){this.a=d},
ddf:function ddf(d,e){this.a=d
this.b=e},
dde:function dde(d){this.a=d},
dd0:function dd0(d){this.a=d},
dd_:function dd_(d){this.a=d},
dd1:function dd1(d){this.a=d},
dcH:function dcH(d,e){this.a=d
this.b=e},
dd2:function dd2(d,e){this.a=d
this.b=e},
dcU:function dcU(d){this.a=d},
dcV:function dcV(d){this.a=d},
dcT:function dcT(){},
dcW:function dcW(d){this.a=d},
dcX:function dcX(d){this.a=d},
dcY:function dcY(d,e){this.a=d
this.b=e},
dcZ:function dcZ(d,e,f){this.a=d
this.b=e
this.c=f},
dcS:function dcS(d,e){this.a=d
this.b=e},
dd9:function dd9(d){this.a=d},
dd8:function dd8(){},
dda:function dda(d){this.a=d},
ddb:function ddb(d){this.a=d},
ddc:function ddc(d){this.a=d},
ddd:function ddd(d,e){this.a=d
this.b=e},
dcI:function dcI(d){this.a=d},
dcJ:function dcJ(d){this.a=d},
ZW:function ZW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bg6:function bg6(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
df2:function df2(d){this.a=d},
df3:function df3(d){this.a=d},
df1:function df1(d){this.a=d},
df4:function df4(d){this.a=d},
df0:function df0(d){this.a=d},
df5:function df5(d){this.a=d},
df_:function df_(d){this.a=d},
df6:function df6(d,e){this.a=d
this.b=e},
deZ:function deZ(d,e){this.a=d
this.b=e},
df7:function df7(d,e){this.a=d
this.b=e},
ZU:function ZU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
af5:function af5(d,e,f){this.a=d
this.b=e
this.c=f},
aAU:function aAU(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
ddx:function ddx(d,e){this.a=d
this.b=e},
ddw:function ddw(d,e){this.a=d
this.b=e},
ddB:function ddB(d){this.a=d},
ddA:function ddA(d,e){this.a=d
this.b=e},
ddy:function ddy(d){this.a=d},
ddz:function ddz(d){this.a=d},
ddC:function ddC(d){this.a=d},
ddD:function ddD(d){this.a=d},
ddv:function ddv(d,e){this.a=d
this.b=e},
ddu:function ddu(d,e){this.a=d
this.b=e},
Km:function Km(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Z9:function Z9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cLL:function cLL(d){this.a=d},
cLM:function cLM(){},
cLN:function cLN(d){this.a=d},
bdj:function bdj(d,e,f){this.b=d
this.c=e
this.a=f},
bda:function bda(d,e){this.b=d
this.a=e},
ux:function ux(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Zs:function Zs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdh:function bdh(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d4A:function d4A(d,e,f){this.a=d
this.b=e
this.c=f},
d4z:function d4z(d,e){this.a=d
this.b=e},
d4Z:function d4Z(d){this.a=d},
d4M:function d4M(){},
d5_:function d5_(d){this.a=d},
d4L:function d4L(){},
d50:function d50(d,e){this.a=d
this.b=e},
d4K:function d4K(d,e){this.a=d
this.b=e},
d51:function d51(d,e){this.a=d
this.b=e},
d4J:function d4J(d,e){this.a=d
this.b=e},
d52:function d52(d){this.a=d},
d4I:function d4I(){},
d53:function d53(d,e){this.a=d
this.b=e},
d4H:function d4H(d,e){this.a=d
this.b=e},
d54:function d54(d){this.a=d},
d4U:function d4U(d,e){this.a=d
this.b=e},
d55:function d55(d){this.a=d},
d56:function d56(d){this.a=d},
d58:function d58(d){this.a=d},
d59:function d59(d){this.a=d},
d4T:function d4T(d,e){this.a=d
this.b=e},
d5a:function d5a(d,e){this.a=d
this.b=e},
aHW:function aHW(d){this.a=d},
biC:function biC(d){this.a=d},
bbs:function bbs(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
ala:function ala(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a19:function a19(d,e){this.a=d
this.b=e},
alb:function alb(d,e,f,g,h,i){var _=this
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
_.bz$=h
_.aa$=i
_.c=_.a=null},
bPZ:function bPZ(d){this.a=d},
bPT:function bPT(d){this.a=d},
bPS:function bPS(d,e){this.a=d
this.b=e},
bQ1:function bQ1(d){this.a=d},
bPU:function bPU(d){this.a=d},
bPV:function bPV(d){this.a=d},
bPY:function bPY(d){this.a=d},
bPX:function bPX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQ_:function bQ_(d,e){this.a=d
this.b=e},
bQ0:function bQ0(){},
bPW:function bPW(d){this.a=d},
bPQ:function bPQ(d,e){this.a=d
this.b=e},
bPR:function bPR(d){this.a=d},
bo6:function bo6(d,e){this.b=d
this.a=e},
aAS:function aAS(){},
it(d,e){var w
$.S()
w=A.I()
w.b=B.ab
w.c=e
w.r=d.gp(0)
w.d=B.bE
w.e=B.dT
return w},
bCk(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.a
J.bm(j.save())
j.translate(e.a,e.b)
d.p6(0,a0?-f:f,f)
w=A.bL(B.i7,8,36)
v=B.w.j(0.3)
u=$.S()
t=A.I()
t.r=v.gp(0)
d.dO(w,t)
w=a1===D.Wk
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.bo(D.ejH,new A.t(-4+v,-2),C.it(q,5))
d.bo(D.ehg,new A.t(4-v,-2),C.it(q,5))}else{t=A.bL(B.J0,14,40)
p=A.I()
p.r=v.gp(0)
d.dO(t,p)}v=u.r
u=x.v
o=new A.aG(v,B.ah,k,k,A.a([],u))
t=-64-r
o.D(new A.aY(-11,t))
o.D(new A.c5(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c5(15,-40,11,t))
o.D(new A.bt())
t=A.I()
t.r=w.gp(0)
d.aG(o,t)
u=new A.aG(v,B.ah,k,k,A.a([],u))
u.D(new A.aY(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.bt())
v=A.I()
v.r=h.c.gp(0)
d.aG(u,v)
A:{if(D.abG===a1){w=Math.sin(g*3.4)
break A}if(D.abH===a1){w=Math.sin(g*7.5)
break A}w=s
break A}if(a1===D.abG){n=-52+w*14
d.bo(new A.t(10,n-22),new A.t(10,n+44),C.it(G.Fd,3.4))
d.bo(D.ejY,new A.t(9,n),C.it(q,4))
d.bo(D.ehG,new A.t(10,n),C.it(q,4))}else if(a1===D.abH){d.bo(D.eiN,new A.t(-8,-26-Math.max(0,w)*6),C.it(q,4))
d.bo(D.efK,new A.t(8,-26-Math.max(0,-w)*6),C.it(q,4))}else{w=s*3
v=-38-r
d.bo(D.eiR,new A.t(-12-w,v),C.it(q,4))
d.bo(D.aJu,new A.t(12+w,v),C.it(q,4))}w=A.I()
w.r=q.gp(0)
d.aP(D.f_Y,w)
m=new A.t(0,-77-r)
w=A.bL(m,22,19)
v=A.I()
v.r=q.gp(0)
d.dO(w,v)
w=h.y
if(w!=null){v=A.bL(m.a9(0,F.v_),15,24)
u=A.I()
u.r=w.gp(0)
d.dO(v,u)
u=m.a9(0,D.efF)
v=A.I()
v.r=w.gp(0)
d.ad(u,4,v)}else{w=A.bL(m.a9(0,B.rU),23,20)
v=h.d
u=A.I()
u.r=v.gp(0)
d.e3(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.bo(m.a9(0,D.ejW),m.a9(0,D.eiL),C.it(v,2.2))
d.bo(m.a9(0,D.ehF),m.a9(0,D.efC),C.it(v,2.2))}if(w===4){w=m.a9(0,D.ek_)
u=A.I()
u.r=v.gp(0)
d.ad(w,6,u)
u=m.a9(0,D.ehH)
w=A.I()
w.r=v.gp(0)
d.ad(u,6,w)}}w=m.a9(0,D.eiy)
v=A.I()
v.r=B.hX.gp(0)
d.ad(w,0.9,v)
v=m.a9(0,D.eim)
w=A.I()
w.r=B.hX.gp(0)
d.ad(v,0.9,w)
if(i){l=m.a9(0,F.a7f)
w=A.bL(l,21,22)
v=A.I()
v.r=D.lv.gp(0)
d.dO(w,v)
v=A.bL(l.a9(0,F.aJr),5,12)
w=A.I()
w.r=D.bcJ.gp(0)
d.dO(v,w)
d.bo(l.a9(0,D.ejS),l.a9(0,F.aJO),C.it(B.cJ,1.4))
d.bo(D.aJu,new A.t(15,-88-r),C.it(q,3.6))}j.restore()},
hrZ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.a
J.bm(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bW(0,f)
v=A.bL(B.dB,18,96)
u=B.w.j(0.28)
$.S()
t=A.I()
t.r=u.gp(0)
d.dO(v,t)
t=A.bL(B.dB,11,70)
v=B.w.j(0.2)
u=A.I()
u.r=v.gp(0)
d.dO(t,u)
d.lo(D.aPz,A.I())
C.hZj(d,g,h,i,j)
s=(k==null?D.a7k:k).a-w>=0?1:-1
w=A.I()
w.a=B.Lb
w.sam(A.jq(new A.t(s*70,-60),new A.t(-s*70,-60),A.a([D.agO.j(0.5),D.agO.j(0.12),D.bjU.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.aP(D.aPz,w)
r.restore()
r.restore()},
hZj(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a3.a,a1=A.ar(a0,B.w,0.28)
a1.toString
w=A.ar(a0,B.c,0.16)
w.toString
v=a3.b
u=A.ar(v,B.w,0.32)
u.toString
t=Math.sin(a5*1.9+a6)*0.8
s=a3.w
r=s?1.06:1
q=s?0.86:1
s=A.bu(D.f_Z,B.rY)
p=$.S()
o=A.I()
o.r=u.gp(0)
a2.az(s,o)
o=A.bu(D.f_U,B.i8)
s=A.ar(v,B.w,0.18)
s.toString
n=A.I()
n.r=s.gp(0)
a2.az(o,n)
n=A.bu(D.f07,B.i8)
o=A.ar(v,B.w,0.1)
o.toString
s=A.I()
s.r=o.gp(0)
a2.az(n,s)
s=A.I()
s.r=a0.gp(0)
a2.dO(D.f00,s)
s=A.I()
s.r=a0.gp(0)
a2.dO(D.eZK,s)
s=a2.a
J.bm(s.save())
s.translate(a4.w,0)
J.bm(s.save())
a2.p6(0,q,q*(1+t*0.012))
o=a3.f
m=o&&!a3.r?25:28
n=x.v
l=new A.aG(p.r,B.ah,d,d,A.a([],n))
p=-m
k=p+2
l.D(new A.aY(k,-58))
l.D(new A.c5(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c5(m+3,-62,m-2,-58))
l.D(new A.c5(0,-70,k,-58))
l.D(new A.bt())
k=A.I()
k.r=v.gp(0)
a2.aG(l,k)
J.bm(s.save())
a2.mF(0,l)
switch(a3.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.d7U[j]
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.b=B.ab
i.c=5
i.r=k.gp(0)
i.d=B.bE
i.e=B.dT
h=i.G()
s.drawLine.apply(s,[-34+u,-64,14+u,-14,h])
h.delete()}break
case 2:for(k=a3.c,g=-56;g<-14;g+=11)for(f=-26+B.o.F(B.o.ao(g,11),2)*6;f<28;f+=12){i=k.j(0.85)
$.S()
e=new A.ap(B.R,B.N,B.U,B.V,B.S)
e.r=i.gp(0)
h=e.G()
s.drawCircle(f,g,3.6,h)
h.delete()
e=new A.ap(B.R,B.N,B.U,B.V,B.S)
e.r=u.gp(0)
h=e.G()
s.drawCircle(f,g,1.6,h)
h.delete()}break
case 3:for(u=a3.c,f=-28;f<30;f+=8){k=u.j(0.7)
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.b=B.ab
i.c=1.6
i.r=k.gp(0)
i.d=B.bE
i.e=B.dT
h=i.G()
s.drawLine.apply(s,[f,-64,f,-14,h])
h.delete()}for(g=-60;g<-14;g+=8){k=u.j(0.7)
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.b=B.ab
i.c=1.6
i.r=k.gp(0)
i.d=B.bE
i.e=B.dT
h=i.G()
s.drawLine.apply(s,[-30,g,30,g,h])
h.delete()}break
default:a2.bo(D.ejm,D.egn,C.it(a3.c.j(0.9),3))}a2.bo(D.ejT,D.eiT,C.it(B.w.j(0.18),1.6))
a2.bo(D.efJ,F.aJw,C.it(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.S()
i=A.I()
i.r=u.gp(0)
a2.aP(D.eZG,i)
s.restore()
i=A.I()
i.r=a1.gp(0)
a2.aP(D.eZU,i)
n=new A.aG(k.r,B.ah,d,d,A.a([],n))
n.D(new A.aY(-9,-66))
n.D(new A.c5(0,-57,9,-66))
n.D(new A.c5(0,-60,-9,-66))
k=A.I()
k.r=a0.gp(0)
a2.aG(n,k)
if(a3.e!==1)u=a3.r&&!o
else u=!0
if(u)a2.e3(D.f_2,0.1,2.941592653589793,!1,C.it(a3.c,2.2))
s.restore()
u=-56*q
o=a4.Q
if(o==null)o=D.a7o
n=25*q
k=23*q
i=9*q
C.hoe(a2,new A.t(p*q+2,u),o,n,k,-1,v,a0,i)
o=a4.as
p=o==null?D.DD:o
C.hoe(a2,new A.t(m*q-2,u),p,n,k,1,v,a0,i)
if(a4.at){a2.bo(D.eh8,D.eh4,C.it(D.ahF,4))
a2.bo(D.eh6,D.eh2,C.it(D.FC.j(0.7),1.4))
u=A.I()
u.r=B.cJ.gp(0)
a2.ad(D.eh5,5,u)}s.restore()
u=a4.w
p=a4.e
o=a4.r
J.bm(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a2.ig(0,a4.f)
a2.bW(0,r)
C.hZg(a2,a3,a4,a5,a6,a0,a1,w)
s.restore()},
hoe(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aF(0,e),r=s.gcI(),q=r===0?B.i7:s.eU(0,r),p=B.k.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.t(o,w)
if(o*i<0)v=new A.t(-o,-w)
u=e.a9(0,q.aI(0,n)).a9(0,v.aI(0,m))
t=e.a9(0,q.aI(0,p))
d.bo(e,u,C.it(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.bo(e,u,C.it(o,l*0.35))
d.bo(u,t,C.it(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.bo(u,t,C.it(o,l*0.22))
$.S()
o=A.I()
o.r=j.gp(0)
d.ad(u,l*0.55,o)
o=A.bL(t,l*1.15,l)
w=A.I()
w.r=k.gp(0)
d.dO(o,w)
w=-l
w=t.a9(0,new A.t(i*w*0.45,w*0.1))
o=A.I()
o.r=k.gp(0)
d.ad(w,l*0.28,o)},
hZg(c3,c4,c5,c6,c7,c8,c9,d0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=null,c1=c4.d,c2=c4.e
if(c2===3||c2===4){w=A.bL(B.uZ,40,38)
$.S()
v=A.I()
v.r=c1.gp(0)
c3.dO(w,v)}if(c2===4){$.S()
w=A.I()
w.r=c1.gp(0)
c3.ad(D.ej2,9.5,w)
w=A.I()
w.r=c1.gp(0)
c3.ad(D.efY,9.5,w)}w=A.bL(D.ekf,10,6)
v=$.S()
u=A.I()
u.r=c9.gp(0)
c3.dO(w,u)
u=A.bL(D.eiv,10,6)
w=A.I()
w.r=c9.gp(0)
c3.dO(u,w)
v=v.r
w=x.v
t=new A.aG(v,B.ah,c0,c0,A.a([],w))
t.D(new A.aY(0,-20))
t.D(new A.kZ(13,-20,17,-9,16,2))
t.D(new A.kZ(15,13,8,20,0,20))
t.D(new A.kZ(-8,20,-15,13,-16,2))
t.D(new A.kZ(-17,-9,-13,-20,0,-20))
t.D(new A.bt())
u=A.I()
u.sam(A.tp(D.ejJ,28,A.a([d0,c8,c9],x.O),A.a([0,0.55,1],x.n),B.x,c0,c0,0))
c3.aG(t,u)
u=c4.r
if(u){s=C.it(c9.j(0.5),0.8)
c3.e3(D.f09,3.455751918948773,2.5132741228718345,!1,s)
c3.e3(D.eZN,3.455751918948773,2.5132741228718345,!1,s)
c3.bo(D.ej_,D.eiO,s)
c3.bo(D.efU,D.efM,s)
c3.e3(D.f_1,2.2,1.4,!1,s)
c3.e3(D.eZL,-0.4,1.4,!1,s)}switch(c2){case 0:for(r=c3.a,q=0;q<16;++q){p=3.141592653589793*(1.02+0.96*q/15)
o=Math.cos(p)
n=Math.sin(p)
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=c1.gp(0)
l=m.G()
r.drawCircle(o*14.5,-3+n*17.5,4.3,l)
l.delete()}r=A.I()
r.r=c1.gp(0)
c3.e3(D.f_f,3.141592653589793,3.141592653589793,!0,r)
break
case 1:r=new A.aG(v,B.ah,c0,c0,A.a([],w))
r.D(new A.aY(-15,-11))
r.D(new A.c5(0,-30,15,-11))
r.D(new A.aq(13,-6))
r.D(new A.c5(0,-12,-13,-6))
r.D(new A.bt())
o=A.I()
o.r=c4.c.gp(0)
c3.aG(r,o)
c3.bo(D.eiP,D.efN,C.it(F.n7,1.4))
o=A.I()
o.r=c1.gp(0)
c3.ad(D.ej5,3,o)
o=A.I()
o.r=c1.gp(0)
c3.ad(D.efZ,3,o)
o=new A.aG(v,B.ah,c0,c0,A.a([],w))
o.D(new A.aY(-13,6))
o.D(new A.c5(-12,22,0,26))
o.D(new A.c5(12,22,13,6))
o.D(new A.c5(8,13,0,12))
o.D(new A.c5(-8,13,-13,6))
o.D(new A.bt())
r=A.I()
r.r=B.iu.gp(0)
c3.aG(o,r)
r=new A.aG(v,B.ah,c0,c0,A.a([],w))
r.D(new A.aY(-7,8))
r.D(new A.c5(0,6,7,8))
r.D(new A.c5(0,10.5,-7,8))
o=A.I()
o.r=B.bO.gp(0)
c3.aG(r,o)
break
case 2:k=c4.y
if(k==null)k=c4.b
r=new A.aG(v,B.ah,c0,c0,A.a([],w))
r.D(new A.aY(-17,-4))
r.D(new A.c5(-20,-27,0,-29))
r.D(new A.c5(20,-27,17,-4))
r.D(new A.c5(0,-14,-17,-4))
r.D(new A.bt())
o=A.I()
o.r=k.gp(0)
c3.aG(r,o)
o=A.ar(k,B.w,0.3)
o.toString
c3.e3(D.f_m,3.4,2.5,!1,C.it(o,1.4))
o=A.ar(k,B.c,0.3)
o.toString
c3.e3(D.f_9,3.6,2.2,!1,C.it(o,1.2))
o=new A.aG(v,B.ah,c0,c0,A.a([],w))
o.D(new A.aY(11,-22))
o.D(new A.c5(27,-34,25,-19))
o.D(new A.c5(18,-18,11,-22))
r=A.ar(k,B.c,0.1)
r.toString
n=A.I()
n.r=r.gp(0)
c3.aG(o,n)
n=new A.aG(v,B.ah,c0,c0,A.a([],w))
n.D(new A.aY(11,-22))
n.D(new A.c5(24,-12,27,-26))
n.D(new A.c5(18,-22,11,-22))
o=A.ar(k,B.w,0.2)
o.toString
r=A.I()
r.r=o.gp(0)
c3.aG(n,r)
r=A.I()
r.r=c4.c.gp(0)
c3.ad(D.efO,3,r)
break
case 3:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f_j,3.204424506661589,3.015928947446201,!0,r)
for(r=c3.a,q=-3;q<=3;++q){o=A.ar(c1,B.c,0.18)
o.toString
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.ab
n.c=0.9
n.r=o.gp(0)
n.d=B.bE
n.e=B.dT
l=n.G()
r.drawLine.apply(r,[q*3.6,-19+Math.abs(q)*0.8,q*4.6,-4,l])
l.delete()}for(o=c4.c,j=0;j<2;++j){i=D.dlI[j]
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.ab
n.c=4.5
n.r=c1.gp(0)
n.d=B.bE
n.e=B.dT
l=n.G()
r.drawLine.apply(r,[i,0,i*1.12,22,l])
l.delete()
for(h=0;h<3;++h){n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.r=o.gp(0)
l=n.G()
r.drawCircle(i*(1+h*0.04),7+h*6.5,1.8,l)
l.delete()}}break
case 4:r=A.I()
r.r=c1.gp(0)
c3.e3(D.f_i,3.204424506661589,3.015928947446201,!0,r)
r=A.ar(c1,B.c,0.25)
r.toString
c3.bo(F.a7f,F.a7e,C.it(r,1))
break
default:r=A.I()
r.r=c1.gp(0)
c3.e3(D.eZO,3.267256359733385,2.8902652413026098,!0,r)}g=B.k.E(c5.b,0,1)*0.4+0.1
r=A.bL(D.ek1,5,8)
o=D.aeg.j(g)
n=A.I()
n.r=o.gp(0)
c3.dO(r,n)
n=A.bL(D.eiH,5,8)
r=D.aeg.j(g)
o=A.I()
o.r=r.gp(0)
c3.dO(n,o)
f=c5.e*2.4
o=new A.aG(v,B.ah,c0,c0,A.a([],w))
o.D(new A.aY(f-0.6,-2))
o.D(new A.c5(f-3.4,6,f-2.6,7.4))
o.D(new A.c5(f,8.8,f+2.6,7.4))
c3.aG(o,C.it(c9.j(0.75),1.1))
o=A.I()
o.r=c9.gp(0)
c3.ad(new A.t(f-1.5,7.2),0.7,o)
o=A.I()
o.r=c9.gp(0)
c3.ad(new A.t(f+1.5,7.2),0.7,o)
e=B.k.F(c6*0.33+c7*0.37,1)>0.965?1:0
r=c5.d
o=c5.c>0.8?1.25:1
d=(1-e)*(1-r*0.6)*o
for(r=c3.a,o=d<0.15,n=c4.f,m=d>0.12,a0=2.5*d,a1=a0*2,a2=a0*2.2,j=0;j<2;++j){a3=G.hy[j]
a4=c5.e
a5=a3>0?0.7:1
a6=a3*6.4+a4*2*a5
if(m){a4=Math.max(0.6,a1)
a5=A.bL(new A.t(a6,-3),a4,7)
a7=new A.ap(B.R,B.N,B.U,B.V,B.S)
a7.r=B.c.j(0.96).gp(0)
l=a7.G()
r.drawOval(A.bH(a5),l)
l.delete()
a8=a6+c5.y*1.5
a9=-3+c5.z*0.7
J.bm(r.save())
a5=A.a([],w)
a7=new A.aG(v,B.ah,c0,c0,a5)
a5.push(new A.jF(A.bL(new A.t(a6,-3),a4,7)))
a4=a7.gbw().a.snapshot()
a4=a7.e=new A.cm(a4)
r.clipPath(a4.a,$.nz(),!0)
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=D.bgp.gp(0)
l=a4.G()
r.drawCircle(a8,a9,2.1,l)
l.delete()
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=B.w.gp(0)
l=a4.G()
r.drawCircle(a8,a9,1.05,l)
l.delete()
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=B.c.gp(0)
l=a4.G()
r.drawCircle(a8-0.7,a9-0.7,0.55,l)
l.delete()
r.restore()}a4=n?D.Yg:c9.j(0.9)
a5=n?1.5:1.1
b0=new A.ap(B.R,B.N,B.U,B.V,B.S)
b0.b=B.ab
b0.c=a5
b0.r=a4.gp(0)
b0.d=B.bE
b0.e=B.dT
a4=o?0.8:0
a4=A.bL(new A.t(a6,-3+a4),Math.max(1.2,a2),7.3500000000000005)
l=b0.G()
r.drawArc.apply(r,[A.bH(a4),189,162,!1,l])
l.delete()
a4=c5.c
b1=-9.2-a4*2.2
a5=a3*3.6
a7=a4<0?-a4*1.6:0
a4=a4>0?a4*0.6:0
if(u)b2=B.e4
else{b2=A.ar(c1,B.w,0.2)
b2.toString}b3=new A.ap(B.R,B.N,B.U,B.V,B.S)
b3.b=B.ab
b3.c=1.7
b3.r=b2.gp(0)
b3.d=B.bE
b3.e=B.dT
l=b3.G()
r.drawLine.apply(r,[a6-a5,b1-a7+0.4,a6+a5,b1-0.6-a4,l])
l.delete()}b4=B.k.E(c5.a,0,1)
if(n)b5=D.bq5
else{u=A.ar(c9,D.bjW,0.6)
u.toString
b5=u}b6=c5.b
if(b4>0.06){b7=5+B.k.E(b6,0,1)*2.2
b8=1.2+b4*6.5
b9=new A.aG(v,B.ah,c0,c0,A.a([],w))
w=-b7
b9.D(new A.aY(w,11.5))
b9.D(new A.c5(0,11.5+b8*0.2-c5.b*1.5,b7,11.5))
b9.D(new A.c5(0,11.5+b8*1.5+c5.b*1.5,w,11.5))
b9.D(new A.bt())
v=A.I()
v.r=D.bjg.gp(0)
c3.aG(b9,v)
J.bm(r.save())
c3.mF(0,b9)
v=B.c.j(0.95)
u=A.I()
u.r=v.gp(0)
c3.aP(new A.a3(w,11,w+b7*2,13.2),u)
u=A.bL(new A.t(0,11.5+b8*1.1),b8*0.9,b7*1.4)
w=A.I()
w.r=D.bqa.gp(0)
c3.dO(u,w)
r.restore()
c3.aG(b9,C.it(b5,1.1))}else{u=new A.aG(v,B.ah,c0,c0,A.a([],w))
r=11.5-b6*0.8
u.D(new A.aY(-5.2,r))
u.D(new A.c5(0,13.1+b6*2.8,5.2,r))
c3.aG(u,C.it(b5,1.5))
if(b6>0.6){w=new A.aG(v,B.ah,c0,c0,A.a([],w))
w.D(new A.aY(-4.6,11.8))
w.D(new A.c5(0,15.1+b6*1.4,4.6,11.8))
w.D(new A.c5(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.I()
u.r=v.gp(0)
c3.aG(w,u)}}if(c5.b>0.2){c3.e3(D.f_0,-1.2,2.2,!1,C.it(c9.j(0.5),0.8))
c3.e3(D.eZQ,2.141592653589793,2.2,!1,C.it(c9.j(0.5),0.8))}if(n&&c2!==2){c2=c4.c
w=A.I()
w.r=c2.gp(0)
c3.ad(D.eio,1.7,w)
w=A.I()
w.r=c2.gp(0)
c3.ad(D.eik,1.7,w)}},
i3H(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S(),e=new A.p0(),d=A.z9(e,g),a0=a4.a,a1=a4.b,a2=Math.min(a0/450,a1/900),a3=A.I()
a3.sam(A.jq(B.I,new A.t(0,a1*0.46),D.d4I,D.cXu,B.x,g))
d.aP(new A.a3(0,0,0+a0,0+a1),a3)
a3=d.a
J.bm(a3.save())
a3.translate((a0-450*a2)/2,(a1-900*a2)/2)
d.bW(0,a2)
w=new A.e9()
w.d4(8)
for(v=0;v<120;++v){a0=w.ah()
a1=w.ah()
u=w.ah()
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=B.c.j(0.2+w.ah()*0.5).gp(0)
s=t.G()
a3.drawCircle(a0*450*1.4-90,a1*330-40,0.5+u*0.9,s)
s.delete()}J.bm(a3.save())
a3.translate(200,120)
d.ig(0,-0.5)
a0=A.I()
a1=x.O
a0.sam(A.tp(B.I,230,A.a([D.bfc,B.L],a1),g,B.x,g,g,0))
d.dO(D.f_w,a0)
a3.restore()
a0=A.I()
a0.sam(A.tp(D.a7n,58,A.a([D.bim,B.L],a1),g,B.x,g,g,0))
d.ad(D.a7n,58,a0)
a0=A.I()
a0.r=D.bdV.gp(0)
d.ad(D.a7n,24,a0)
a0=A.I()
a0.r=D.YE.gp(0)
d.ad(D.egI,5,a0)
a0=A.I()
a0.r=D.YE.gp(0)
d.ad(D.egM,3.4,a0)
a0=A.I()
a0.r=D.YE.gp(0)
d.ad(D.egL,2.4,a0)
for(a0=x.v,r=0;r<3;++r,f=u){u=A.a([],a0)
q=new A.aG(f.r,B.ah,g,g,u)
u.push(new A.aY(-60,420))
for(f=372+r*12,t=60+r*20,p=r*2,o=14-r*3,n=-60;n<=510;n+=8){m=new A.aq(n,f+Math.sin(n/t+p)*o+Math.sin(n/23+r)*3)
u.push(m)
l=q.f
if(l!=null)m.by(l)
m=q.e
if(m!=null)m.a.delete()
q.e=null}f=new A.aq(510,470)
u.push(f)
t=q.f
if(t!=null)f.by(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.aq(-60,470)
u.push(f)
t=q.f
if(t!=null)f.by(t)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=new A.bt()
u.push(f)
u=q.f
if(u!=null)f.by(u)
f=q.e
if(f!=null)f.a.delete()
q.e=null
f=[D.bcy,D.beu,D.bke][r]
u=$.S()
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=f.gp(0)
s=t.G()
f=q.e
a3.drawPath((f==null?q.e=new A.cm(q.gbw().a.snapshot()):f).a,s)
s.delete()}for(k=0;k<4;++k){n=D.crB[k]
j=384+B.o.F(n,11)
f=n-2
a0=j-24
u=new A.ap(B.R,B.N,B.U,B.V,B.S)
u.b=B.ab
u.c=2.4
u.r=D.YV.gp(0)
u.d=B.bE
u.e=B.dT
s=u.G()
a3.drawLine.apply(a3,[n,j,f,a0,s])
s.delete()
f=A.bL(new A.t(f,j-27),11,46)
u=new A.ap(B.R,B.N,B.U,B.V,B.S)
u.r=D.YV.gp(0)
s=u.G()
a3.drawOval(A.bH(f),s)
s.delete()
a0=A.bL(new A.t(n-12,a0),8,24)
f=new A.ap(B.R,B.N,B.U,B.V,B.S)
f.r=D.YV.gp(0)
s=f.G()
a3.drawOval(A.bH(a0),s)
s.delete()}for(v=0;v<9;++v){f=B.o.F(v,3)
a0=B.o.F(v,4)
u=new A.ap(B.R,B.N,B.U,B.V,B.S)
u.r=D.bdY.j(0.8).gp(0)
s=u.G()
a3.drawCircle(20+v*52+f*7,400+a0*5,1.2,s)
s.delete()}f=A.I()
f.sam(A.jq(D.efl,D.efn,D.cZn,B.I1,B.x,g))
d.aP(new A.a3(-200,412,650,1300),f)
i=new A.e9()
i.d4(21)
for(v=0;v<260;++v){f=i.ah()
j=420+i.ah()*480
a0=i.ah()
u=j/900+0.4
u=A.bL(new A.t(f*450,j),1+i.ah()*2*u,1.5+a0*4*u)
f=i.hj()?B.c:B.w
a0=new A.ap(B.R,B.N,B.U,B.V,B.S)
a0.r=f.j(0.06+i.ah()*0.06).gp(0)
s=a0.G()
a3.drawOval(A.bH(u),s)
s.delete()}J.bm(a3.save())
a3.translate(225,590)
d.p6(0,1,0.34)
f=A.I()
f.sam(A.tp(B.I,250,A.a([D.bl5,D.beQ,D.bmW],a1),A.a([0,0.8,1],x.n),B.x,g,g,0))
d.ad(B.I,250,f)
a3.restore()
for(v=0;v<40;++v){n=i.ah()*450
j=640+i.ah()*260
f=i.ah()
a0=A.ar(D.agu,D.bds,i.ah())
a0.toString
for(f=j-(6+f*10),h=-1;h<=1;++h){$.S()
a1=new A.ap(B.R,B.N,B.U,B.V,B.S)
a1.b=B.ab
a1.c=1.3
a1.r=a0.gp(0)
a1.d=B.bE
a1.e=B.dT
s=a1.G()
a3.drawLine.apply(a3,[n+h*2,j,n+h*5,f+Math.abs(h)*3,s])
s.delete()}}C.hXA(d)
for(k=0;k<3;++k)C.i_L(d,D.ayd[k])
C.i_A(d,D.egC)
for(n=118;n<190;n+=11){f=B.o.F(n,3)
a0=B.o.F(n,4)
$.S()
a1=new A.ap(B.R,B.N,B.U,B.V,B.S)
a1.b=B.ab
a1.c=2.4
a1.r=D.YR.gp(0)
a1.d=B.bE
a1.e=B.dT
s=a1.G()
a3.drawLine.apply(a3,[n,452+f,n+1,436+a0,s])
s.delete()}d.bo(D.efL,D.eg2,C.it(D.beb,1.6))
a3.restore()
return e.nf()},
hXA(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=$.S().r,e=x.v,d=new A.aG(f,B.ah,g,g,A.a([],e))
d.D(new A.aY(358,462))
d.D(new A.kZ(354,422,370,382,374,332))
d.D(new A.aq(410,332))
d.D(new A.kZ(416,382,432,422,428,462))
d.D(new A.bt())
w=A.I()
w.sam(A.jq(new A.t(354,0),new A.t(430,0),D.drK,Q.zj,B.x,g))
a0.aG(d,w)
v=new A.e9()
v.d4(4)
for(w=a0.a,u=0;u<30;++u){t=364+v.ah()*56
s=462-v.ah()*126
r=v.ah()
q=v.ah()
p=B.w.j(0.18)
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.b=B.ab
o.c=1.1
o.r=p.gp(0)
o.d=B.bE
o.e=B.dT
n=o.G()
w.drawLine.apply(w,[t,s,t+r*3-1.5,s+8+q*12,n])
n.delete()}for(m=0;m<6;++m){l=D.d9e[m]
r=l.a
q=392+r*12
p=-l.b
o=q+r*52
k=336+(p*46-8)
r=o+r*42
p=k+(p*34+4)
j=A.a([],e)
i=new A.aG(f,B.ah,g,g,j)
j.push(new A.aY(q,336))
j.push(new A.c5(o,k,r,p))
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.b=B.ab
q.c=8
q.r=D.aeX.gp(0)
q.d=B.bE
q.e=B.dT
n=q.G()
q=i.gbw().a.snapshot()
w.drawPath((i.e=new A.cm(q)).a,n)
n.delete()
for(h=0;h<6;++h){q=v.ah()
o=v.ah()
k=v.ah()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=A.ar(D.be3,D.bkd,v.ah()).j(0.92).gp(0)
n=j.G()
w.drawCircle(r+(q*36-18),p+(o*18-14),8+k*7,n)
n.delete()}r+=0
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.b=B.ab
q.c=1.2
q.r=D.YR.gp(0)
q.d=B.bE
q.e=B.dT
n=q.G()
w.drawLine.apply(w,[r,p+8,r,p+22,n])
n.delete()
p=A.bL(new A.t(r,p+28),13,7)
r=new A.ap(B.R,B.N,B.U,B.V,B.S)
r.r=D.bln.gp(0)
n=r.G()
w.drawOval(A.bH(p),n)
n.delete()}},
i_L(b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b4.a,a5=b4.b,a6=b4.c,a7=b4.d,a8=a6*0.5,a9=A.bL(new A.t(a4,a5+2),a8,a6*2.8),b0=B.w.j(0.3),b1=$.S(),b2=A.I()
b2.r=b0.gp(0)
b3.dO(a9,b2)
b1=b1.r
b2=x.v
w=new A.aG(b1,B.ah,a3,a3,A.a([],b2))
a9=a4-a6
b0=a5-a7
w.D(new A.aY(a9,b0))
w.D(new A.aq(a9,a5))
v=a4+a6
w.D(new A.c5(a4,a5+a6*0.22,v,a5))
w.D(new A.aq(v,b0))
w.D(new A.bt())
u=A.I()
u.sam(A.jq(new A.t(a9,0),new A.t(v,0),D.d9k,Q.zj,B.x,a3))
b3.aG(w,u)
t=new A.e9()
t.d4(B.o.V(a4*7))
v=b3.a
J.bm(v.save())
b3.mF(0,w)
for(s=0;s<40;++s){r=a9+t.ah()*a6*2
q=b0+t.ah()*a7
u=t.ah()
p=t.ah()
o=B.w.j(0.14)
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.ab
n.c=1
n.r=o.gp(0)
n.d=B.bE
n.e=B.dT
m=n.G()
v.drawLine.apply(v,[r,q,r+4+u*5,q+p*2-1,m])
m.delete()}u=b0+5
p=a6*2
o=D.agq.j(0.75)
n=A.I()
n.r=o.gp(0)
b3.aP(new A.a3(a9,u,a9+p,u+7),n)
for(u=a6/5,o=b0+12,n=b0+20,l=a9+2,k=0;k<B.k.bh(u);++k){j=l+k*10
i=A.a([],b2)
h=new A.aG(b1,B.ah,a3,a3,i)
i.push(new A.aY(j,o))
i.push(new A.aq(j+5,n))
i.push(new A.aq(j+10,o))
i.push(new A.bt())
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=D.lv.j(0.85).gp(0)
m=i.G()
i=h.gbw().a.snapshot()
v.drawPath((h.e=new A.cm(i)).a,m)
m.delete()}u=A.a([],b2)
g=new A.aG(b1,B.ah,a3,a3,u)
b1=a5-8
g.D(new A.aY(a9,b1))
for(p/=6,k=0;k<=B.k.bh(p);++k){o=(k&1)===0?0:-5
o=new A.aq(a9+k*6,b1+o)
u.push(o)
n=g.f
if(n!=null)o.by(n)
o=g.e
if(o!=null)o.a.delete()
g.e=null}b3.aG(g,C.it(D.agq.j(0.7),1.6))
v.restore()
a9=$.S().r
b1=new A.aG(a9,B.ah,a3,a3,A.a([],b2))
u=a6*0.1
p=a4+u
o=a6*0.28
n=p-o
l=a5+1
b1.D(new A.aY(n,l))
i=a5-a7*0.55
b1.D(new A.aq(n,i))
o=p+o
b1.D(new A.c5(p,a5-a7*0.82,o,i))
b1.D(new A.aq(o,l))
b1.D(new A.bt())
l=A.I()
l.r=D.agB.gp(0)
b3.aG(b1,l)
l=A.I()
l.r=D.agB.gp(0)
b3.ad(new A.t(a4-a6*0.62,a5-a7*0.5),u,l)
l=b4.e
u=b0-l
b1=a6*1.38
o=a4-b1
i=b0+4
p=a4+b1
f=new A.aG(a9,B.ah,a3,a3,A.a([],b2))
f.D(new A.aY(o,i))
n=b0-l*0.55
f.D(new A.c5(a4-a8,n,a4,u))
f.D(new A.c5(a4+a8,n,p,i))
f.D(new A.c5(a4,b0+a6*0.34,o,i))
f.D(new A.bt())
b0=A.I()
n=a6*1.4
b0.sam(A.jq(new A.t(a4-n,0),new A.t(a4+n,0),D.dcK,Q.zj,B.x,a3))
b3.aG(f,b0)
J.bm(v.save())
b3.mF(0,f)
for(a8=p-o,s=0;s<70;++s){e=s/69
b0=Math.sin(e*3.141592653589793)
p=t.ah()
n=(t.hj()?B.w:D.bdB).j(0.16)
h=new A.ap(B.R,B.N,B.U,B.V,B.S)
h.b=B.ab
h.c=0.9
h.r=n.gp(0)
h.d=B.bE
h.e=B.dT
m=h.G()
v.drawLine.apply(v,[a4+(p-0.5)*3,u,o+a8*e,i+b0*a6*0.3,m])
m.delete()}for(k=1;k<5;++k){d=u+l*k/4.6
a0=b1*k/4.6
b0=A.a([],b2)
p=new A.aG(a9,B.ah,a3,a3,b0)
n=d+2
b0.push(new A.aY(a4-a0,n))
b0.push(new A.c5(a4,d+7+k*1.5,a4+a0,n))
b0=B.w.j(0.22)
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.ab
n.c=1.2
n.r=b0.gp(0)
n.d=B.bE
n.e=B.dT
m=n.G()
b0=p.gbw().a.snapshot()
v.drawPath((p.e=new A.cm(b0)).a,m)
m.delete()}v.restore()
for(s=0;s<46;++s){e=s/45
a1=o+a8*e
a2=i+Math.sin(e*3.141592653589793)*a6*0.3
b0=t.ah()
b1=t.ah()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.b=B.ab
p.c=1.1
p.r=D.bkA.gp(0)
p.d=B.bE
p.e=B.dT
m=p.G()
v.drawLine.apply(v,[a1,a2,a1+(b0-0.5)*2,a2+3+b1*4,m])
m.delete()}a8=new A.aG(a9,B.ah,a3,a3,A.a([],b2))
a9=u+4
a8.D(new A.aY(a4-2.5,a9))
a8.D(new A.aq(a4,u-7))
a8.D(new A.aq(a4+2.5,a9))
a8.D(new A.bt())
a9=A.I()
a9.r=D.bgV.gp(0)
b3.aG(a8,a9)},
i_A(d,e){var w,v,u,t,s,r,q,p,o
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=d.a,r=0;r<2;++r){q=w+D.dlF[r]
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.b=B.ab
p.c=3
p.r=D.YR.gp(0)
p.d=B.bE
p.e=B.dT
o=p.G()
s.drawLine.apply(s,[q,u,q,t,o])
o.delete()}u=A.bL(e.a9(0,F.aJq),24,36)
t=$.S()
s=A.I()
s.r=D.bpl.gp(0)
d.dO(u,s)
t=new A.aG(t.r,B.ah,null,null,A.a([],x.v))
s=w-24
u=v-30
t.D(new A.aY(s,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c5(w,v-24,s,u))
t.D(new A.bt())
u=A.I()
u.r=D.afy.gp(0)
d.aG(t,u)},
hZV(d){switch(B.o.F(d,8)){case 0:return D.aYu
case 1:return D.aYs
case 2:return D.aYr
case 3:return D.aYq
case 4:return D.aYt
case 5:return D.aYv
case 6:return D.hlv
default:return D.hlu}},
S3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bo7()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a7o:j
w.as=k==null?D.DD:k
C.hrZ(d,e,p,C.hZV(m),w,s,m,l)},
htl(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bRD:function bRD(){var _=this
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
rZ:function rZ(d,e,f,g,h,i,j,k,l,m){var _=this
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
bo7:function bo7(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
alt:function alt(){this.b=this.a=null},
aVE:function aVE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bRv:function bRv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRw:function bRw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRx:function bRx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRy:function bRy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRz:function bRz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRA:function bRA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRB:function bRB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRC:function bRC(){},
bRu:function bRu(d){this.a=d},
afe:function afe(d,e){this.a=d
this.b=e},
add:function add(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Mz(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bQe(s)
s.bzi(d)
return s},
GC(d,e,f,g,h,i,j){var w,v=A.T(g).k("Z<1>")
v=A.dg(new A.Z(g,new C.fou(f),v),v.k("L.E"))
w=A.C(v,A.a7(v).k("cs.E"))
B.d.dZ(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.d1(w,0,A.dB(3,"count",x.S),A.T(w).c))
B.d.dZ(v,d)
return new C.li(e,v,B.d.cv(v,f),h,i,"tree",j)},
ik9(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.U(c0,x.cg),c2=new C.fYd(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.k3(c4,c0)
t=A.C(c4,A.a7(c4).k("cs.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.k3(c4,c0)
r=A.C(c4,A.a7(c4).k("cs.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.k3(c4,c0)
q=A.C(c4,A.a7(c4).k("cs.E"))
for(c4=w.length,v=A.T(t).k("Z<1>"),s=v.k("L.E"),p=A.T(w).k("Z<1>"),o=p.k("L.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.M)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.w3)g="father"
else g=h===D.og?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Z(t,new C.fYf(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.GC(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Z(w,new C.fYg(i,m),p),o)
B.d.dZ(d,c6)
c2.$2(b4,new C.li("True or false: "+h+" is the "+g+" of "+l+".",D.aze,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.li("True or false: "+B.a.i(B.d.gI(d).b)+" is the "+g+" of "+l+".",D.aze,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.FP(m)
h=a0.length
if(h!==0){a1=a0[c6.aq(h)]
h=B.a.i(a1.b)
f=A.C(new A.Z(t,new C.fYh(l,a0,c5),v),s)
e=a1.c
if(e===D.w3)e="son"
else e=e===D.og?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.GC(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.eD([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.ml(a5,a5.r,f.k("ml<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.GC(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gI(a0).b)
f=A.a([],c3)
for(e=A.T(a0),a2=e.k("jy<1>"),a3=new A.jy(a0,1,b3,a2),a3.pg(a0,1,b3,e.c),a3=new A.bS(a3,a3.gL(0),a2.k("bS<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.GC(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gI(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gI(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aqj(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Z(t,new C.fYi(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.GC(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Z(t,new C.fYj(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.w3
if(e)a2=b7
else a2=f===D.og?b8:b9
if(e)f=b7
else f=f===D.og?b8:b9
c2.$2("grand",C.GC(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aLx(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aq(k)].b)
j=A.C(new A.Z(t,new C.fYk(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.GC(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cKb)
h=l+" was born in "+k
c2.$2("place",C.GC(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d_o)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.GC(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.M)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.GC(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.jW(b1,b3,b3)
c2.$2("year",C.GC(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bCW(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.Mz(d),l=new A.e9()
l.d4(f)
w=C.ik9(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hc0(v.d,l)
v=A.a7(w).k("cv<1>")
u=A.C(new A.cv(w,v),v.k("L.E"))
B.d.dZ(u,l)
t=A.a([],x.J)
s=A.aX(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.b2(u,new C.fAY(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.M)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.M(0,J.r(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.r(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.axf,x.df)
B.d.dZ(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.M)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hs5(o,l))}}else if(!g&&v>3){o=C.hs5(D.axf[l.aq(14)],l)
t[t.length-1-l.aq(3)]=o}return t},
hs5(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.dZ(w,e)
return new C.li(d.a,w,B.d.cv(w,v),d.d,d.e,d.f,d.r)},
hwM(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.Mz(a2),a1=new A.e9()
a1.d4(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(a0.FP(q).length>=2)u.push(q)}B.d.dZ(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.M)(u),++r){n=u[r]
m=a0.FP(n)
l=A.T(m)
k=new A.jy(m,0,5,l.k("jy<1>"))
k.pg(m,0,5,l.c)
j=k.dm(0)
if(new A.N(j,new C.fP1(),A.T(j).k("N<1,H>")).fI(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.M)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.M)(j),++i)g.push(C.aRp(a0,j[i]))
w.push(new C.atk("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.U(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
J.cc(e.c4(0,a0.alM(q),new C.fP2()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cv<1>")
d=A.C(new A.cv(e,t),t.k("L.E"))
B.d.fd(d)
v=A.a([],v)
for(u=A.d1(d,0,A.dB(5,"count",u),A.T(d).c),t=u.$ti,u=new A.bS(u,u.gL(0),t.k("bS<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cE(s)
m.dZ(s,a1)
v.push(m.gI(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.M)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.M)(v),++r)s.push(C.aRp(a0,v[r]))
w.push(new C.atk("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aPT(d){return B.d.an9(D.azI,new C.fxp(d))},
iak(d){return A.pT(new A.Z(D.azI,new C.fDC(d),x.av))},
bR2(d){return C.hG4(d)},
hG4(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bR2=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bR2)
case 7:r=f
q=B.a.i(d)
q=A.eB(J.r(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bR2,v)},
Bx(d,e){return C.hG1(d,e)},
hG1(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$Bx=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$Bx)
case 7:r=g
p=B.a.i(d)
o=A.eB(J.r(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.au("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$Bx)
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
return A.i($async$Bx,v)},
bR1(d,e,f){return C.hG2(d,e,f)},
hG2(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bR1=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bR1)
case 7:r=h
q=B.a.i(d)
q=A.eB(J.r(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bR1,v)},
By(d,e,f,g){return C.hG3(d,e,f,g)},
hG3(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$By=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$By)
case 7:r=i
p=B.a.i(d)
o=A.eB(J.r(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.au("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$By)
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
return A.i($async$By,v)},
bFc(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h_d(d,e,f,g){return new C.ak8(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hEa(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aW(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.co)
while(u.C())w.push(J.k(u.gT(u)))
u=x.N
w=A.d1(w,0,A.dB(4,"count",x.S),u).dm(0)
B.d.v(w,A.c1(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aK(d.h(0,"c"))
v=v==null?null:B.k.N(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aK(d.h(0,"s"))
u=u==null?null:B.k.N(u)
return C.h_d(w,v,B.o.E(u==null?20:u,5,60),t)},
hd3(d){var w,v,u,t,s,r,q=J.a5(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aW(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.co)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gT(q)
if(u.b(r))v.push(C.hEa(A.a2(r,t,s)))}return new C.Mk(p,w,v)},
h7u(d){var w,v=A.a([],x.c)
for(w=J.aW(d.z);w.C();)v.push(C.hd3(w.gT(w)))
return v},
aRp(d,e){var w=e.c===D.og
if(d.alM(e)===0&&d.FP(e).length!==0)return w?0:1
if(d.FP(e).length!==0||d.aqj(e)!=null)return w?2:3
return w?4:5},
hxR(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mz(a4),a3=new A.e9()
a3.d4(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.dZ(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.M)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("L.E"),q=0;q<u.length;u.length===v||(0,A.M)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.FP(m)
g=a2.aqj(m)
f=a2.aLx(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.w3)k="father"
else k=k===D.og?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gI(h).b)+".")}if(j!=null){k=j.c
if(k===D.w3)k="father"
else k=k===D.og?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.dZ(l,a3)
B.d.aW(l,new C.fYD())
d=B.a.i(m.b)
a0=A.C(new A.Z(s,new C.fYE(d),o),n)
B.d.dZ(a0,a3)
k=A.a([d],t)
i=A.T(a0)
a1=new A.jy(a0,0,3,i.k("jy<1>"))
a1.pg(a0,0,3,i.c)
B.d.v(k,a1)
B.d.dZ(k,a3)
a1=C.aRp(a2,m)
i=new A.jy(l,0,4,p)
i.pg(l,0,4,r)
w.push(new C.b9I(d,a1,i.dm(0),k))
if(w.length>=5)break}return w},
hpG(d){return B.a.t(d,"married to")||B.a.t(d," of ")||B.a.a0(d,"My ")?1:0},
hwX(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.Mz(a4),a3=new A.e9()
a3.d4(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.M)(t),++r){q=t[r]
if(a2.FP(q).length>=2)u.push(q)}B.d.dZ(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.M)(u),++r){l=u[r]
k=a2.FP(l)
j=A.T(k)
i=new A.jy(k,0,4,j.k("jy<1>"))
i.pg(k,0,4,j.c)
h=i.dm(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.M)(t),++g){q=t[g]
if(q.a!==j&&!B.d.b2(h,new C.fPy(q))&&q.d!==j)i.push(q)}B.d.dZ(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.jy(i,0,k,m)
j.pg(i,0,k,n)
f=j.dm(0)
j=B.a.i(l.b)
k=C.aRp(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.M)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.M)(h),++g)e.push(C.aRp(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.M)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.M)(f),++g)a0.push(C.aRp(a2,f[g]))
w.push(new C.a9p(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
li:function li(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bQe:function bQe(d){this.b=d
this.c=$},
bQf:function bQf(){},
bQg:function bQg(d){this.a=d},
fou:function fou(d){this.a=d},
fYd:function fYd(d){this.a=d},
fYe:function fYe(){},
fYf:function fYf(d){this.a=d},
fYg:function fYg(d,e){this.a=d
this.b=e},
fYh:function fYh(d,e,f){this.a=d
this.b=e
this.c=f},
fYc:function fYc(d,e){this.a=d
this.b=e},
fYi:function fYi(d){this.a=d},
fYj:function fYj(d){this.a=d},
fYk:function fYk(d,e,f){this.a=d
this.b=e
this.c=f},
fYb:function fYb(d,e){this.a=d
this.b=e},
fAY:function fAY(d,e){this.a=d
this.b=e},
atk:function atk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fP1:function fP1(){},
fP2:function fP2(){},
zh:function zh(d,e,f){this.a=d
this.b=e
this.c=f},
fxp:function fxp(d){this.a=d},
fDC:function fDC(d){this.a=d},
ak8:function ak8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bLe:function bLe(){},
Mk:function Mk(d,e,f){this.a=d
this.b=e
this.c=f},
b9I:function b9I(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
fYD:function fYD(){},
fYE:function fYE(d){this.a=d},
a9p:function a9p(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fPy:function fPy(d){this.a=d},
bgX:function bgX(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
afc:function afc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ajn:function ajn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ajo:function ajo(d,e,f,g,h){var _=this
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
_.bz$=g
_.aa$=h
_.c=_.a=null},
bJs:function bJs(d){this.a=d},
bJn:function bJn(){},
bJt:function bJt(){},
bJl:function bJl(){},
bJm:function bJm(){},
bJr:function bJr(d){this.a=d},
bJo:function bJo(d,e){this.a=d
this.b=e},
bJq:function bJq(d,e){this.a=d
this.b=e},
bJp:function bJp(d,e){this.a=d
this.b=e},
bJk:function bJk(d){this.a=d},
bc6:function bc6(d,e){this.b=d
this.a=e},
Qe:function Qe(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAQ:function aAQ(d,e,f){this.b=d
this.c=e
this.a=f},
azf:function azf(d,e,f){this.a=d
this.b=e
this.c=f},
au3:function au3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
au4:function au4(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cO$=e
_.b5$=f
_.c=_.a=null},
cnm:function cnm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnn:function cnn(d){this.a=d},
cnl:function cnl(d){this.a=d},
cno:function cno(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cnp:function cnp(){},
cnq:function cnq(d,e){this.a=d
this.b=e},
cnr:function cnr(){},
cns:function cns(d){this.a=d},
cni:function cni(d){this.a=d},
cnj:function cnj(d,e){this.a=d
this.b=e},
cnk:function cnk(d,e,f){this.a=d
this.b=e
this.c=f},
cnd:function cnd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cnf:function cnf(d,e){this.a=d
this.b=e},
cng:function cng(d,e){this.a=d
this.b=e},
cne:function cne(d,e){this.a=d
this.b=e},
cnc:function cnc(){},
cnh:function cnh(){},
bbB:function bbB(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cMP:function cMP(){},
axZ:function axZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ay_:function ay_(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cCm:function cCm(d){this.a=d},
cCl:function cCl(d){this.a=d},
cCu:function cCu(d,e){this.a=d
this.b=e},
cCv:function cCv(d,e){this.a=d
this.b=e},
cCw:function cCw(d){this.a=d},
cCt:function cCt(d){this.a=d},
cCx:function cCx(d){this.a=d},
cCy:function cCy(d,e){this.a=d
this.b=e},
cCz:function cCz(){},
cCA:function cCA(d){this.a=d},
cCo:function cCo(d){this.a=d},
cCp:function cCp(d,e){this.a=d
this.b=e},
cCn:function cCn(d,e){this.a=d
this.b=e},
cCq:function cCq(){},
cCr:function cCr(){},
cCs:function cCs(d,e){this.a=d
this.b=e},
az_:function az_(){},
aGj:function aGj(){},
h5n(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.bqp((w-450*u)/2,(v-900*u)/2,u)},
af0:function af0(){},
f1h:function f1h(d){this.a=d},
aK6:function aK6(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fbl:function fbl(d){this.a=d},
alj:function alj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alk:function alk(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.pV$=f
_.LE$=g
_.ami$=h
_.bz$=i
_.aa$=j
_.c=_.a=null},
bR0:function bR0(d){this.a=d},
bR_:function bR_(){},
bQY:function bQY(d){this.a=d},
bQW:function bQW(){},
bQX:function bQX(d){this.a=d},
bQT:function bQT(d,e){this.a=d
this.b=e},
bQU:function bQU(){},
bQV:function bQV(d){this.a=d},
bQZ:function bQZ(d,e){this.a=d
this.b=e},
bQS:function bQS(d){this.a=d},
bs4:function bs4(d,e){this.b=d
this.a=e},
f1i:function f1i(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f1j:function f1j(d,e,f){this.a=d
this.b=e
this.c=f},
f1k:function f1k(d,e,f){this.a=d
this.b=e
this.c=f},
f1l:function f1l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f1m:function f1m(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f1n:function f1n(){},
alh:function alh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ali:function ali(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.pV$=f
_.LE$=g
_.ami$=h
_.bz$=i
_.aa$=j
_.c=_.a=null},
bQE:function bQE(){},
bQP:function bQP(d,e){this.a=d
this.b=e},
bQQ:function bQQ(d){this.a=d},
bQR:function bQR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQL:function bQL(){},
bQK:function bQK(d,e){this.a=d
this.b=e},
bQM:function bQM(d,e){this.a=d
this.b=e},
bQN:function bQN(){},
bQO:function bQO(d){this.a=d},
bQG:function bQG(d){this.a=d},
bQH:function bQH(d){this.a=d},
bQI:function bQI(d){this.a=d},
bQF:function bQF(d,e){this.a=d
this.b=e},
bQJ:function bQJ(d){this.a=d},
biK:function biK(d,e){this.b=d
this.a=e},
doa:function doa(){},
a1s:function a1s(d,e){this.a=d
this.b=e},
ald:function ald(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ale:function ale(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.pV$=e
_.LE$=f
_.ami$=g
_.bz$=h
_.aa$=i
_.c=_.a=null},
bQq:function bQq(d){this.a=d},
bQp:function bQp(){},
bQo:function bQo(){},
bQi:function bQi(){},
bQj:function bQj(){},
bQn:function bQn(d,e,f){this.a=d
this.b=e
this.c=f},
bQm:function bQm(d){this.a=d},
bQk:function bQk(d,e){this.a=d
this.b=e},
bQl:function bQl(d){this.a=d},
bia:function bia(d,e){this.b=d
this.a=e},
aAT:function aAT(){},
bfL:function bfL(){},
aAV:function aAV(){},
bfM:function bfM(){},
aAW:function aAW(){},
bfN:function bfN(){},
ue(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j0,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ac],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aB(u,A.p(u,A.B(v,B.m,u,B.e,B.P,0,u,u),B.f,u,u,new A.o(f,u,u,t,s,u,B.n),u,u,u,u,B.Nz,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hdS(d,e,f,g,h,i,j){return new C.alf(i,h,d,j,e,f,g,null)},
a5U:function a5U(d,e){this.c=d
this.a=e},
bii:function bii(d){this.a=d},
tn:function tn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bQh:function bQh(d){this.a=d},
I2:function I2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
VF:function VF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkX:function bkX(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
dYk:function dYk(d,e){this.a=d
this.b=e},
dYl:function dYl(d){this.a=d},
dYm:function dYm(d,e){this.a=d
this.b=e},
dYi:function dYi(d){this.a=d},
dYj:function dYj(d){this.a=d},
dYh:function dYh(d){this.a=d},
dYf:function dYf(d){this.a=d},
dYg:function dYg(d){this.a=d},
dYe:function dYe(d,e){this.a=d
this.b=e},
dYn:function dYn(d){this.a=d},
dYo:function dYo(d,e){this.a=d
this.b=e},
dYp:function dYp(d,e){this.a=d
this.b=e},
dYq:function dYq(d,e){this.a=d
this.b=e},
dYt:function dYt(d,e){this.a=d
this.b=e},
dYu:function dYu(d,e){this.a=d
this.b=e},
dYv:function dYv(d,e){this.a=d
this.b=e},
dYw:function dYw(d,e){this.a=d
this.b=e},
dYx:function dYx(d,e){this.a=d
this.b=e},
dYy:function dYy(d,e,f){this.a=d
this.b=e
this.c=f},
dYz:function dYz(d,e){this.a=d
this.b=e},
dYA:function dYA(d,e){this.a=d
this.b=e},
dYr:function dYr(d){this.a=d},
dYs:function dYs(d){this.a=d},
a_j:function a_j(d,e){this.a=d
this.b=e},
alf:function alf(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
alg:function alg(d){var _=this
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
bQC:function bQC(d){this.a=d},
bQD:function bQD(d){this.a=d},
bQB:function bQB(d){this.a=d},
bQs:function bQs(d){this.a=d},
bQt:function bQt(d){this.a=d},
bQr:function bQr(d){this.a=d},
bQy:function bQy(d,e,f){this.a=d
this.b=e
this.c=f},
bQz:function bQz(d){this.a=d},
bQv:function bQv(d,e){this.a=d
this.b=e},
bQw:function bQw(d,e,f){this.a=d
this.b=e
this.c=f},
bQA:function bQA(){},
bQx:function bQx(d,e){this.a=d
this.b=e},
bQu:function bQu(d){this.a=d},
Tj:function Tj(d,e){this.c=d
this.a=e},
alc:function alc(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bQ2:function bQ2(d){this.a=d},
bQ3:function bQ3(d){this.a=d},
bQd:function bQd(){},
bQc:function bQc(d,e,f){this.a=d
this.b=e
this.c=f},
bQ7:function bQ7(d,e){this.a=d
this.b=e},
bQ6:function bQ6(d,e){this.a=d
this.b=e},
bQ8:function bQ8(d){this.a=d},
bQ9:function bQ9(d,e){this.a=d
this.b=e},
bQa:function bQa(d,e){this.a=d
this.b=e},
bQ5:function bQ5(d,e){this.a=d
this.b=e},
bQb:function bQb(d,e,f){this.a=d
this.b=e
this.c=f},
bQ4:function bQ4(d,e){this.a=d
this.b=e},
i8L(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aig(a6),a5=a4.length
if(a5===0)return""
w=A.U(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.M)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fAu(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.T(a4),p=q.k("Z<1>"),q=q.k("cQ<1,n>"),o=q.k("L.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.M)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yv)m.push(l===D.w3?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cC(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cC(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.jW(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.jW(h,a2,a2)-A.jW(j,a2,a2))+" years")
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
m.push("child of "+l+k)}a0=A.C(new A.cQ(new A.Z(a4,new C.fAs(u,f),p),new C.fAt(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aH(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aH(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.ar(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
i8M(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aig(a0),d=e.length
if(d===0)return""
w=x.N
v=A.U(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.M)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fAz(v,e)
q=new C.fAx(v)
p=A.U(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.M)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.M)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.M)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.aj(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.aj(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("bc<2>")
d=A.dg(new A.bc(p,d),d.k("L.E"))
n=A.C(d,A.a7(d).k("cs.E"))
B.d.fd(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.M)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gaf(e),k=new A.f5(l,new C.fAy(p,m));k.C();t=f){j=l.gT(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.aj(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aH(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
hV2(d,e,f,g){var w,v,u=C.i8N(d,e)
if(u<=0||f.length<=u)return new A.aeF(!1,D.CZ,f)
if(g.t(0,e.a))return new A.aeF(!1,D.CZ,f)
w=A.T(f).c
v=A.d1(f,0,A.dB(u,"count",x.S),w).dm(0)
return new A.aeF(!0,A.d1(f,u,null,w).dm(0),v)},
hV3(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aig(d3),d2=d1.length
if(d2===0)return D.hiQ
w=x.N
v=A.U(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.M)(d1),++u){t=d1[u]
v.c4(0,t.a,new C.ddK(t))}s=new C.de0(v)
d2=x.dy
r=A.U(w,d2)
q=new C.ddT(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.ddS(r)
l=A.U(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.cc(l.c4(0,k,new C.ddL()),o)}h=new C.ddR(s)
g=new C.ddQ(l,r)
p=v.$ti.k("bc<2>")
o=p.k("Z<L.E>")
f=A.C(new A.Z(new A.bc(v,p),new C.ddM(h),o),o.k("L.E"))
e=f.length===0?new A.bc(v,p).gI(0):B.d.gI(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.M)(f),++u){t=f[u]
a0=g.$2(t.a,A.aX(w))
if(a0>d){d=a0
e=t}}a1=A.aX(w)
p=x.S
a2=A.U(w,p)
a3=A.U(w,w)
a4=A.U(w,d2)
d2=x.i
a5=A.U(w,d2)
a6=A.U(w,x.d9)
a7=A.U(w,d2)
a8=A.a([],x.s)
a9=new C.ddZ(new C.ddV(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.U(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gale(a2);o.C();){b0=o.d
i=b0.a
if(a1.t(0,i))continue
b1=A.eD([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.t(0,i)||!b1.M(0,i))break}if(h.$1(b0)&&a2.aj(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.pT(J.dH(i==null?B.Y:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.U(w,x.dO)
b5=A.a([],x.M)
b6=A.U(w,d2)
b7=new C.ddJ(a2,new C.de_(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.M)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("cv<1>")
d2=A.C(new A.cv(b4,d2),d2.k("L.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.M)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.Gb(o,new A.t(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.Ku(c5.a,new A.t(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cv<1>")
d2=A.C(new A.cv(b6,d2),d2.k("L.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.M)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bQ(0,new C.ddN(c6,b4))
for(d2=new A.cH(a4,a4.$ti.k("cH<1,2>")).gaf(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aW(c7.b);j.C();){i=j.gT(j)
if(b6.aj(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.t(d0,b4.h(0,i).b.b))}}for(j=B.d.gaf(b5),i=new A.f5(j,new C.ddO(c8));i.C();)o.push(j.gT(0).b)
if(o.length===0)continue
B.d.aW(o,new C.ddP())
c6.push(new C.aK2(new A.t(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bfR(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hsK(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cC(d)
return w==null?null:w.b[1]},
hmX(d,e,f,g,h,i,j,k,l,m,n){return new C.a_w(k,f,j,e,l,n,m,d,g,h,i,null)},
aCS(d,e,f,g,h,i,j){return new C.bjx(i,d,e,f,j,h,g,null)},
aqd:function aqd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEp:function aEp(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e__:function e__(d){this.a=d},
dZZ:function dZZ(d){this.a=d},
e_1:function e_1(d,e){this.a=d
this.b=e},
e_2:function e_2(d,e){this.a=d
this.b=e},
e_3:function e_3(d){this.a=d},
dZY:function dZY(d,e){this.a=d
this.b=e},
e_0:function e_0(d){this.a=d},
e_5:function e_5(d){this.a=d},
e_4:function e_4(d,e){this.a=d
this.b=e},
aq7:function aq7(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEm:function aEm(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
dZq:function dZq(d){this.a=d},
dZo:function dZo(d){this.a=d},
dZp:function dZp(d){this.a=d},
dZr:function dZr(d,e){this.a=d
this.b=e},
dZl:function dZl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYN:function dYN(d){this.a=d},
dYO:function dYO(d,e){this.a=d
this.b=e},
dZ4:function dZ4(d){this.a=d},
dZ2:function dZ2(d){this.a=d},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
dZ5:function dZ5(d){this.a=d},
dZ6:function dZ6(d,e){this.a=d
this.b=e},
dZk:function dZk(d,e){this.a=d
this.b=e},
dZ1:function dZ1(d){this.a=d},
dZ0:function dZ0(d){this.a=d},
dZ_:function dZ_(d,e){this.a=d
this.b=e},
dZh:function dZh(){},
dZi:function dZi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZg:function dZg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZa:function dZa(d){this.a=d},
dZb:function dZb(d,e,f){this.a=d
this.b=e
this.c=f},
dZ9:function dZ9(d,e){this.a=d
this.b=e},
dZc:function dZc(d,e){this.a=d
this.b=e},
dZ7:function dZ7(d,e){this.a=d
this.b=e},
dZ8:function dZ8(){},
dZd:function dZd(d,e){this.a=d
this.b=e},
dZe:function dZe(d){this.a=d},
dZf:function dZf(d,e){this.a=d
this.b=e},
dZj:function dZj(d,e){this.a=d
this.b=e},
dYB:function dYB(d,e){this.a=d
this.b=e},
dYC:function dYC(d,e){this.a=d
this.b=e},
dZt:function dZt(d,e,f){this.a=d
this.b=e
this.c=f},
dZn:function dZn(d,e,f){this.a=d
this.b=e
this.c=f},
dZm:function dZm(d){this.a=d},
dYD:function dYD(d){this.a=d},
dYE:function dYE(d){this.a=d},
dYF:function dYF(){},
dYG:function dYG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYK:function dYK(d,e){this.a=d
this.b=e},
dYJ:function dYJ(d,e){this.a=d
this.b=e},
dYI:function dYI(d){this.a=d},
dYL:function dYL(d,e){this.a=d
this.b=e},
dYH:function dYH(d){this.a=d},
dZs:function dZs(d){this.a=d},
dYX:function dYX(){},
dYY:function dYY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYW:function dYW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYS:function dYS(d,e,f){this.a=d
this.b=e
this.c=f},
dYR:function dYR(d,e,f){this.a=d
this.b=e
this.c=f},
dYP:function dYP(d,e){this.a=d
this.b=e},
dYT:function dYT(d){this.a=d},
dYU:function dYU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYQ:function dYQ(d,e){this.a=d
this.b=e},
dYV:function dYV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYZ:function dYZ(d,e){this.a=d
this.b=e},
dZA:function dZA(){},
dZB:function dZB(d,e){this.a=d
this.b=e},
dZC:function dZC(d){this.a=d},
dZD:function dZD(d,e){this.a=d
this.b=e},
dZw:function dZw(d){this.a=d},
dZu:function dZu(d,e){this.a=d
this.b=e},
dZx:function dZx(d,e){this.a=d
this.b=e},
dZy:function dZy(d,e){this.a=d
this.b=e},
dZz:function dZz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZE:function dZE(d){this.a=d},
dZv:function dZv(d){this.a=d},
dYM:function dYM(d){this.a=d},
bfP:function bfP(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
ddH:function ddH(d){this.a=d},
ddG:function ddG(d,e){this.a=d
this.b=e},
ddI:function ddI(d){this.a=d},
ddF:function ddF(d,e){this.a=d
this.b=e},
fAu:function fAu(d,e){this.a=d
this.b=e},
fAv:function fAv(d){this.a=d},
fAw:function fAw(){},
fAs:function fAs(d,e){this.a=d
this.b=e},
fAt:function fAt(){},
fAz:function fAz(d,e){this.a=d
this.b=e},
fAA:function fAA(d){this.a=d},
fAB:function fAB(){},
fAx:function fAx(d){this.a=d},
fAy:function fAy(d,e){this.a=d
this.b=e},
Ku:function Ku(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Gb:function Gb(d,e){this.a=d
this.b=e},
bfR:function bfR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ddK:function ddK(d){this.a=d},
de0:function de0(d){this.a=d},
ddT:function ddT(d){this.a=d},
ddU:function ddU(){},
ddS:function ddS(d){this.a=d},
ddL:function ddL(){},
ddR:function ddR(d){this.a=d},
ddQ:function ddQ(d,e){this.a=d
this.b=e},
ddM:function ddM(d){this.a=d},
ddV:function ddV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ddW:function ddW(d){this.a=d},
ddX:function ddX(d){this.a=d},
ddY:function ddY(){},
ddZ:function ddZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
de_:function de_(){},
ddJ:function ddJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
ddN:function ddN(d,e){this.a=d
this.b=e},
ddO:function ddO(d){this.a=d},
ddP:function ddP(){},
aK2:function aK2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bfS:function bfS(d,e){this.b=d
this.a=e},
de1:function de1(){},
de2:function de2(d){this.a=d},
de3:function de3(d){this.a=d},
de4:function de4(){},
bjy:function bjy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beU:function beU(d,e){this.b=d
this.a=e},
bxo:function bxo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fh8:function fh8(d){this.a=d},
bmL:function bmL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eRn:function eRn(d){this.a=d},
eRm:function eRm(d,e){this.a=d
this.b=e},
a_w:function a_w(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aCQ:function aCQ(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dtQ:function dtQ(d,e){this.a=d
this.b=e},
dtP:function dtP(d){this.a=d},
dtN:function dtN(d){this.a=d},
dtO:function dtO(d){this.a=d},
dtZ:function dtZ(d){this.a=d},
du_:function du_(d){this.a=d},
dtY:function dtY(d,e){this.a=d
this.b=e},
du0:function du0(){},
du3:function du3(d){this.a=d},
dtX:function dtX(d,e){this.a=d
this.b=e},
du2:function du2(){},
du4:function du4(d){this.a=d},
dtW:function dtW(d,e){this.a=d
this.b=e},
du5:function du5(d){this.a=d},
dtV:function dtV(d){this.a=d},
du6:function du6(d){this.a=d},
dtU:function dtU(d){this.a=d},
du7:function du7(d){this.a=d},
dtT:function dtT(d){this.a=d},
du8:function du8(d){this.a=d},
dtS:function dtS(d){this.a=d},
du9:function du9(d){this.a=d},
dtR:function dtR(d,e){this.a=d
this.b=e},
du1:function du1(d){this.a=d},
adz:function adz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjx:function bjx(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ady:function ady(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bjw:function bjw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dua:function dua(d){this.a=d},
dub:function dub(d,e){this.a=d
this.b=e},
aCR:function aCR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJ4:function aJ4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
adA:function adA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
duk:function duk(d){this.a=d},
G7:function G7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hhQ(d){var w=d.S,v=x.N
return w.jh(w,new C.ccT(),v,v)},
hMz(d){var w=d.bB
if(w>=0)return w
return 5},
hhS(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hhQ(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hhR(d,e){var w=C.hhS(d,e)
if(w!=null&&w.cg(new A.V(Date.now(),0,!1)))return!0
return!1},
hMA(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a2(C.hhQ(d),w,w)
u=C.hhS(d,e)
t=u!=null&&u.cg(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bS(A.dD(30,0,0,0,0,0).a).a8().ae())
d.S=v},
b0g(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b0g=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lq(t,B.IV),$async$b0g)
case 3:if(l){u=!0
w=1
break}u=A.l4(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.IV,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0g,v)},
ccT:function ccT(){},
hMx(){var w,v=$.od(),u=J.dY(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aq(32)]
return"FT"+B.d.hi(u)},
IW(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$IW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$IW)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_family_tree_backup_codes_v1",null,!1,B.bK),$async$IW)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.r(r,"codes")
if(x.f.b(q)){o=A.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ab(m)
$.am.$1("[family tree sync codes] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$IW,v)},
a7D(d){return C.hMy(d)},
hMy(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a7D=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a7D)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.G(["codes",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.z),!1,!1,B.cG,null),$async$a7D)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.am.$1("[family tree sync codes] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a7D,v)},
ccS(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ccS=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.IW(),$async$ccS)
case 3:t=m.jZ(f),t=t.gaf(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gT(t)
q=r.b
if(s.b(q)){p=J.a5(q)
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
return A.i($async$ccS,v)},
NT(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$NT=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ccS(d),$async$NT)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.IW(),$async$NT)
case 6:s=f
r=J.a5(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dR(A.a2(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).a8().ae())
r.n(s,t,o)
w=9
return A.b(C.a7D(s),$async$NT)
case 9:case 8:u=t
w=1
break
case 5:n=C.hMx()
w=10
return A.b(C.IW(),$async$NT)
case 10:s=f
J.aI(s,n,A.G(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a8().ae(),"updatedAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.K))
w=11
return A.b(C.a7D(s),$async$NT)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$NT,v)},
b0f(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b0f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.IW(),$async$b0f)
case 3:t=f
for(s=J.dn(t),r=s.gdS(t),r=r.dm(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.M)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.r(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a7D(t),$async$b0f)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b0f,v)},
a7E(d,e,f){var w=0,v=A.j(x.H),u
var $async$a7E=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aqc(d,e),$async$a7E)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.NT(d),$async$a7E)
case 7:w=4
break
case 5:w=8
return A.b(C.b0f(d),$async$a7E)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a7E,v)},
aq6(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aq6=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aqc(f,e),$async$aq6)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$aq6)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.IW(),$async$aq6)
case 7:q=o.r(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a5(q)
if(!J.A(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq6,v)},
b0e(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b0e=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b0e)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.IW(),$async$b0e)
case 4:t=q.r(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a5(t)
if(!J.A(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0e,v)},
hMB(){var w,v=$.od(),u=J.dY(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aq(32)]
return"FT"+B.d.hi(u)},
aq9(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aq9=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aq9)
case 3:if(!g){u=null
w=1
break}t=C.hMB()
w=4
return A.b(A.VG(),$async$aq9)
case 4:s=g
r=B.dN.aL(B.X.ap(d.eZ(),null))
r=B.cI.gcp().aL(r)
q=e?999:2
J.aI(s,t,A.G(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.K))
w=5
return A.b(A.a7F(s),$async$aq9)
case 5:p=e?999:2
u=new A.a0I("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq9,v)},
aq8(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aq8=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.VG(),$async$aq8)
case 3:p=a0
o=J.a5(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a5(n)
l=A.aK(m.h(n,"usesRemaining"))
k=l==null?null:B.k.N(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b0e(J.k(l==null?"":l),j),$async$aq8)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.cd.cB(0,B.cD.aL(t))
s=C.hhT(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dR(A.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a8().ae())
o.n(p,g,l)}w=5
return A.b(A.a7F(p),$async$aq8)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aq8,v)},
hhT(d){var w,v,u,t,s=null
try{w=B.X.aM(0,d,s)
if(!x.f.b(w))return s
u=J.r(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hMD(A.a2(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h1o(d){var w=0,v=A.j(x.m),u,t,s
var $async$h1o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aq8(t[1])
w=1
break}u=null
w=1
break}u=C.hhT(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h1o,v)},
hMD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dc(v,x.f)
u=A.cG(u,new C.ccV(),u.$ti.k("L.E"),x.k)
t=A.a7(u).k("Z<L.E>")
s=A.C(new A.Z(u,new C.ccW(),t),t.k("L.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.U(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.jZ(p),t=t.gaf(t),o=x.B;t.C();){n=t.gT(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dc(l,u)
n=A.cG(n,new C.ccX(),n.$ti.k("L.E"),o)
k=A.a7(n).k("Z<L.E>")
j=A.C(new A.Z(n,new C.ccY(),k),k.k("L.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqa(h,w,s,r,q)},
aqc(d,e){var w=0,v=A.j(x.y),u,t
var $async$aqc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.NK(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.B1(d),$async$aqc)
case 3:u=t.cL(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqc,v)},
cd3(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cd3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.B1(d),$async$cd3)
case 3:t=s.b6(f,new C.cd4(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aW(t,new C.cd5())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cd3,v)},
VH(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$VH=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqc(e,d),$async$VH)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.NT(e),$async$VH)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.B1(e),$async$VH)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dH(r,new C.cd1(g))
r=A.C(t,t.$ti.k("L.E"))}t=J.a5(r)
if(t.gan(r)){u=null
w=1
break}t=t.dF(r,new C.cd2(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.U(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.Lg(e,o),$async$VH)
case 14:n=i
if(J.cL(n))q.n(0,o,n)
case 12:r.length===t||(0,A.M)(r),++p
w=11
break
case 13:u=new C.aqa(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VH,v)},
b0j(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b0j=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.VH(d,e,f,g),$async$b0j)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gI(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aN(t,s,"_")
r=q.a
u=A.GS(A.Kq(q.eZ(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0j,v)},
b0i(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b0i=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.VH(d,e,f,g),$async$b0i)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aq9(r,f),$async$b0i)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aH4(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0i,v)},
VI(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VI=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h1o(a0),$async$VI)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aq6(g.a,d,e,f,s,r),$async$VI)
case 6:if(!a2){if(r)throw A.W(A.bd("This backup expired or the sender's tree is no longer available."))
throw A.W(A.bd("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bCC(e,j),$async$VI)
case 12:case 11:w=13
return A.b(C.ai1(e,j,s),$async$VI)
case 13:h=n.h(0,i)
w=h!=null&&J.cL(h)?14:15
break
case 14:w=16
return A.b(C.Bc(e,i,h),$async$VI)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.M)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.bqv(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$VI,v)},
aqa:function aqa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cd_:function cd_(){},
cd0:function cd0(){},
ccZ:function ccZ(){},
ccV:function ccV(){},
ccW:function ccW(){},
ccX:function ccX(){},
ccY:function ccY(){},
cd4:function cd4(){},
cd5:function cd5(){},
cd1:function cd1(d){this.a=d},
cd2:function cd2(d){this.a=d},
ha_(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f8(null,x.H)
return A.hF(d,new C.aqb(w,e,g,i,f,h,null),!0,null,x.H)},
ddE(d,e,f,g,h,i,j,k){return new C.bfO(i,e,k,j,g,f,h,d,null)},
aqb:function aqb(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEo:function aEo(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
dZN:function dZN(d){this.a=d},
dZO:function dZO(d,e,f){this.a=d
this.b=e
this.c=f},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZT:function dZT(d){this.a=d},
dZK:function dZK(d){this.a=d},
dZL:function dZL(d,e){this.a=d
this.b=e},
dZM:function dZM(d,e){this.a=d
this.b=e},
dZR:function dZR(d){this.a=d},
dZQ:function dZQ(d,e){this.a=d
this.b=e},
dZP:function dZP(){},
dZV:function dZV(d){this.a=d},
dZW:function dZW(d,e){this.a=d
this.b=e},
dZU:function dZU(d,e){this.a=d
this.b=e},
de5:function de5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bfQ:function bfQ(d,e,f){this.d=d
this.e=e
this.a=f},
acQ:function acQ(d,e,f){this.c=d
this.d=e
this.a=f},
bfO:function bfO(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bfT:function bfT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a_R:function a_R(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEn:function aEn(){var _=this
_.d=!1
_.c=_.a=_.e=null},
dZF:function dZF(d,e){this.a=d
this.b=e},
dZG:function dZG(d){this.a=d},
dZH:function dZH(d){this.a=d},
dZI:function dZI(d){this.a=d},
dZJ:function dZJ(d){this.a=d},
a_S:function a_S(d){this.a=d},
bkY:function bkY(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
dZX:function dZX(d,e){this.a=d
this.b=e},
aZO(d,e){return new C.aZN(d,e,null)},
aZN:function aZN(d,e,f){this.c=d
this.d=e
this.a=f},
ibg(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b7(d,11)},
iiL(d){return A.bV(B.L,null,new C.fR1(new C.u1(A.P(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hjN(d,e){return new C.at8(e,d,null)},
aRj(d,e,f,g,h,i,j){var w=C.ibg(i)
if(w!=null)return A.bx(e,new A.a6(j,f,new C.a6J(w,!0,null),null),B.ap)
return M.aQF(e,B.bU,f,g,h,i,j)},
lL:function lL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6J:function a6J(d,e,f){this.c=d
this.d=e
this.a=f},
bkF:function bkF(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b5$=e
_.c=_.a=null},
dLC:function dLC(d){this.a=d},
dLD:function dLD(){},
dLE:function dLE(d,e){this.a=d
this.b=e},
bkE:function bkE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fR1:function fR1(d){this.a=d},
fR0:function fR0(d,e){this.a=d
this.b=e},
fR_:function fR_(d,e){this.a=d
this.b=e},
fQZ:function fQZ(d,e){this.a=d
this.b=e},
at8:function at8(d,e,f){this.c=d
this.d=e
this.a=f},
clz:function clz(d,e){this.a=d
this.b=e},
aMs:function aMs(){},
iiw(d){var w=null
return A.cj(w,w,!0,w,new C.fQo(),d,w,!0,!0,x.e2)},
ijH(d,e,f,g,h){var w=null
return A.cj(w,w,!0,w,new C.fXU(h,g,f,e),d,w,!0,!0,x.N)},
iiy(d,e){var w=null
return A.cj(w,w,!0,w,new C.fQt(e),d,w,!0,!0,x.dY)},
iix(d){var w=null
return A.cj(w,w,!0,w,new C.fQs(),d,w,!0,!0,x.c5)},
aUj:function aUj(d,e){this.a=d
this.b=e},
aUi:function aUi(d){this.a=d},
aSh:function aSh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fQo:function fQo(){},
fXU:function fXU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fQt:function fQt(d){this.a=d},
fQs:function fQs(){},
Zu:function Zu(d,e){this.c=d
this.a=e},
azA:function azA(){var _=this
_.d=$
_.c=_.a=_.e=null},
d5m:function d5m(d){this.a=d},
d5n:function d5n(d){this.a=d},
d5l:function d5l(d,e){this.a=d
this.b=e},
d5o:function d5o(d){this.a=d},
d5p:function d5p(d){this.a=d},
Zt:function Zt(d){this.a=d},
azz:function azz(){this.d=$
this.c=this.a=null},
d5i:function d5i(d){this.a=d},
d5j:function d5j(d){this.a=d},
d5k:function d5k(d){this.a=d},
Z0:function Z0(d){this.a=d},
ayd:function ayd(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cDx:function cDx(){},
cDD:function cDD(d){this.a=d},
cDE:function cDE(d){this.a=d},
cDF:function cDF(d){this.a=d},
cDC:function cDC(){},
cDG:function cDG(d){this.a=d},
cDH:function cDH(d){this.a=d},
cDB:function cDB(){},
cDI:function cDI(d,e){this.a=d
this.b=e},
cDA:function cDA(d,e){this.a=d
this.b=e},
cDy:function cDy(d,e){this.a=d
this.b=e},
cDJ:function cDJ(d){this.a=d},
cDz:function cDz(){},
cDK:function cDK(d){this.a=d},
a1E:function a1E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bxe:function bxe(){this.d=$
this.c=this.a=null},
fgs:function fgs(d,e){this.a=d
this.b=e},
fgt:function fgt(d){this.a=d},
fgu:function fgu(d,e){this.a=d
this.b=e},
abV:function abV(d,e){this.a=d
this.b=e},
FX:function FX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bxc:function bxc(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
fgq:function fgq(d,e){this.a=d
this.b=e},
ay6:function ay6(d,e){this.c=d
this.a=e},
bxd:function bxd(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
fgr:function fgr(d){this.a=d},
bxb:function bxb(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aOt:function aOt(){},
aOu:function aOu(){},
bEz(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.k.bh(u),s=B.o.E(B.k.V((u-t)*100),0,99),r=d<0?"-":"",q=A.oT(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fOP(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.Q,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.aS(B.o.u(s),2,"0")
n.push(A.cS(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Yo(A.cS(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aQV(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aQV=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hV().l1(85,1280,B.eL),$async$aQV)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fk(),$async$aQV)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hjM()
w=9
return A.b(C.cly(q,r),$async$aQV)
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
$.am.$1("[worksheets] pick photo failed: "+A.w(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aQV,v)},
aRh(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aRh=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.clv(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.t(g,",")?B.d.gak(g.split(",")):g
p=B.cD.aL(q)
o=960
case 7:if(!(o>=96)){w=8
break}i=o
w=9
return A.b($.S().LW(p,!0,null,i).d7(0,B.fY),$async$aRh)
case 9:n=a1
w=10
return A.b(n.lL(),$async$aRh)
case 10:m=a1
w=11
return A.b(J.a3k(m).ht(B.h9),$async$aRh)
case 11:l=a1
J.a3k(m).q()
if(l==null){w=8
break}i=J.eR(B.dJ.gaR(l))
k="data:image/png;base64,"+B.cI.gcp().aL(i)
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
$.am.$1("[worksheets] thumbnail shrink failed: "+A.w(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aRh,v)},
fOP:function fOP(){},
u1:function u1(d){this.a=d},
at7:function at7(d,e,f){this.c=d
this.d=e
this.a=f},
aFQ:function aFQ(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eOv:function eOv(d,e){this.a=d
this.b=e},
eOm:function eOm(d){this.a=d},
eOn:function eOn(d){this.a=d},
eOt:function eOt(d,e){this.a=d
this.b=e},
eOs:function eOs(d,e){this.a=d
this.b=e},
eOp:function eOp(d,e){this.a=d
this.b=e},
eOo:function eOo(d,e){this.a=d
this.b=e},
eOq:function eOq(d){this.a=d},
eOr:function eOr(d,e){this.a=d
this.b=e},
eOu:function eOu(d,e){this.a=d
this.b=e},
eOh:function eOh(d,e){this.a=d
this.b=e},
eOl:function eOl(d){this.a=d},
eOk:function eOk(d,e){this.a=d
this.b=e},
eOj:function eOj(d){this.a=d},
eOw:function eOw(d,e){this.a=d
this.b=e},
eOx:function eOx(d,e){this.a=d
this.b=e},
eOi:function eOi(d,e){this.a=d
this.b=e},
hwA(d,e,f){var w="thumbnailPath",v=e.ag()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.G(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).a8().ae(),"project",v],x.N,x.z)},
fOQ(d,e,f){var w=0,v=A.j(x.N),u
var $async$fOQ=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.X.ap(C.hwA(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fOQ,v)},
bEB(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bEB=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fOQ(!0,d,e),$async$bEB)
case 4:w=3
return A.b(r.at5(g,d,e.a),$async$bEB)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dN.aL(B.X.ap(C.hwA(d,e,null),null))
u="NGMY_WS:"+B.kv.gcp().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEB,v)},
hok(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
h9F(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d3(s,"NGMYWSSYNC2|"))return!0
if(J.d3(s,"NGMY_WS:"))return!0
if(J.f0(s,t))return!0
if(J.d3(s,"{"))try{w=B.X.aM(0,s,null)
if(x.f.b(w)){v=J.r(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
igo(d){var w,v,u,t=C.hok(d)
if(t==null)return null
if(C.h9F(t))return t
w=B.a.cv(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b7(t,w))
if(C.h9F(v))return v}u=B.a.cv(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b7(t,u))
if(C.h9F(v))return v}return null},
h9E(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d3(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d3(q,"NGMY_WS:")){v=B.cd.cB(0,B.cD.aL(J.ng(q,8)))
w=t.a(B.X.aM(0,v,r))}else w=t.a(B.X.aM(0,q,r))
t=J.r(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.r(w,"project")
if(!x.f.b(u))return r
t=C.h43(A.a2(u,x.N,x.z))
return t}catch(s){return r}},
bEA(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bEA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.at4(t[1]),$async$bEA)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.h9E(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.h9E(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEA,v)},
h9D(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lt(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bE6(){var w=0,v=A.j(x.o),u,t
var $async$bE6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.H3(),$async$bE6)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.h9E(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bE6,v)},
hxA(d,e,f,g){return A.bV(B.L,null,new C.fXK(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
fXK:function fXK(d,e,f){this.a=d
this.b=e
this.c=f},
adV:function adV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eOz:function eOz(d,e){this.a=d
this.b=e},
eOA:function eOA(d,e){this.a=d
this.b=e},
eOB:function eOB(d,e){this.a=d
this.b=e},
eOC:function eOC(d,e){this.a=d
this.b=e},
eOy:function eOy(d){this.a=d},
at1:function at1(d,e,f){this.c=d
this.d=e
this.a=f},
bmg:function bmg(){var _=this
_.c=_.a=_.e=_.d=null},
eOc:function eOc(d,e){this.a=d
this.b=e},
eOd:function eOd(d){this.a=d},
eOe:function eOe(d){this.a=d},
at6:function at6(d){this.a=d},
aFP:function aFP(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eOg:function eOg(d){this.a=d},
eOf:function eOf(d){this.a=d},
hPQ(d,e,f,g,h){return new C.Ox(h,g,d,e,f,null)},
aKP:function aKP(d,e){this.a=d
this.b=e},
Ox:function Ox(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFR:function aFR(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eOZ:function eOZ(){},
eOV:function eOV(d,e){this.a=d
this.b=e},
eOW:function eOW(d){this.a=d},
eOG:function eOG(d){this.a=d},
eOE:function eOE(d){this.a=d},
eOF:function eOF(d){this.a=d},
eOP:function eOP(d,e){this.a=d
this.b=e},
eOM:function eOM(d,e){this.a=d
this.b=e},
eON:function eON(d,e){this.a=d
this.b=e},
eOO:function eOO(d,e,f){this.a=d
this.b=e
this.c=f},
eOK:function eOK(d,e,f){this.a=d
this.b=e
this.c=f},
eOI:function eOI(d){this.a=d},
eOJ:function eOJ(d){this.a=d},
eOL:function eOL(d){this.a=d},
eP1:function eP1(d){this.a=d},
eP0:function eP0(d){this.a=d},
eP2:function eP2(d){this.a=d},
eP_:function eP_(d){this.a=d},
eOD:function eOD(d){this.a=d},
eOH:function eOH(d,e){this.a=d
this.b=e},
eOY:function eOY(d,e){this.a=d
this.b=e},
eOX:function eOX(d,e){this.a=d
this.b=e},
eOS:function eOS(d){this.a=d},
eOT:function eOT(d){this.a=d},
eOU:function eOU(d,e){this.a=d
this.b=e},
eOR:function eOR(d,e){this.a=d
this.b=e},
eOQ:function eOQ(d,e,f){this.a=d
this.b=e
this.c=f},
byV:function byV(){},
AR(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aN(v,w,"_")},
agr(d,e,f){return C.i4H(d,e,f)},
i4H(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$agr=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.au("String",e,f),$async$agr)
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
$.am.$1("[worksheets] setString failed for "+e+": "+A.w(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agr,v)},
agq(d,e){return C.i4G(d,e)},
i4G(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$agq=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$agq)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ab(q)
$.am.$1("[worksheets] remove failed for "+e+": "+A.w(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$agq,v)},
i3r(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.T8(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bBB(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bBB=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b3w(q),$async$bBB)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aRh(q,!1),$async$bBB)
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
return A.i($async$bBB,v)},
hDv(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aK(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rc(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rc(p,J.k(u==null?"":u),1,o,q)},
h43(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dc(s,x.f)
w=A.cG(w,new C.cCU(),w.$ti.k("L.E"),x.Q)
v=A.a7(w).k("Z<L.E>")
r=A.C(new A.Z(w,new C.cCV(),v),v.k("L.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lt(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
i8H(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.w3
case"female":case"f":return D.og
default:return D.yv}},
hth(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hdT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.i8H(v==null?j:J.k(v))
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
m=m==null?j:B.k.N(m)
if(m==null)m=1
l=J.A(d.h(0,"hidden"),!0)
k=A.aK(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.k.N(k)
return new C.hU(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
i8J(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.NR
case"viewer":return D.kH
default:return D.ub}},
i8K(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
GT(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQ1(d,e){return B.a.i(e.toLowerCase())===C.GT(d,e)&&d.y!==D.kH},
uf(d,e){var w,v=d.y
if(v===D.kH)return!1
w=B.a.i(e.toLowerCase())
if(w===C.GT(d,e))return!0
if(v===D.NR)return!0
v=d.e
return new A.N(v,A.h9K(),A.T(v).k("N<1,n>")).t(0,w)},
i89(d){return J.dH(d,new C.fzu()).gL(0)},
fYt(d){var w=0,v=A.j(x.y),u,t
var $async$fYt=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.B1(d),$async$fYt)
case 3:u=t.r7(f,new C.fYu(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fYt,v)},
bCC(d,e){var w=0,v=A.j(x.H),u,t
var $async$bCC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.B1(d),$async$bCC)
case 3:t=g
if(J.r7(t,new C.fxo(e))){w=1
break}if(C.i89(t)>=2)throw A.W(A.bd("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bCC,v)},
alm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dc(h,x.f)
w=A.cG(w,new C.bR3(),w.$ti.k("L.E"),x.P)
v=A.a7(w).k("Z<L.E>")
g=A.C(new A.Z(w,new C.bR4(),v),v.k("L.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b6(u,new C.bR5(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.A(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bj(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aK(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.k.N(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.i8J(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aW(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.co)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gT(f)
if(l.b(i))m.push(A.a2(i,k,j))}return new C.kO(w,v,s,!r,t,g,q,p,o,n,m)},
htr(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aN(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.ar(v,0,8)},
Df(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Df=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.S2(d),$async$Df)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Df)
case 4:t=f
w=5
return A.b(t.a6I(0),$async$Df)
case 5:w=6
return A.b(C.fo4(t,l),$async$Df)
case 6:s=f
if(J.cL(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a5(q)
o=A.aS(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hoV(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.oS(l,n),$async$Df)
case 11:u=n
w=1
break
case 10:case 8:m=A.aS(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hoV(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.oS(l,n),$async$Df)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Df,v)},
fo4(d,e){return C.i0T(d,e)},
i0T(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fo4=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a5(a3)
a5=A.aS(a4.h(a3,"ngmy_worksheets_index_v3_"+C.AR(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.X.aM(0,a5,null)
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
break}m=A.aS(a4.h(a3,"ngmy_worksheet_item_v3_"+C.AR(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.X.aM(0,m,null)
if(!a0.b(l)){w=7
break}k=C.h43(A.a2(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aS(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.AR(a9)+"_"+n))
i=C.i3r(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b3w(h),$async$fo4)
case 17:g=b1
if(g!=null){i=i.T8(g)
p=!0}case 16:J.cc(q,i)
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
case 8:J.Se(q,new C.fo5())
if(p&&J.ad(q)!==0)C.oS(a9,q)
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
return A.i($async$fo4,v)},
bD2(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bD2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.S2(d),$async$bD2)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Df(r),$async$bD2)
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
return A.i($async$bD2,v)},
hoV(d){var w,v,u,t
try{w=B.X.aM(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dc(w,x.f)
v=A.cG(v,new C.fjW(),v.$ti.k("L.E"),x.fA)
u=A.a7(v).k("Z<L.E>")
v=A.C(new A.Z(v,new C.fjX(),u),u.k("L.E"))
B.d.aW(v,new C.fjY())
return v}catch(t){v=A.a([],x.D)
return v}},
oS(d,e){return C.iim(d,e)},
iim(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$oS=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.S2(b2),$async$oS)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$oS)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.AR(a8)
p=A.aS(J.r(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b6(x.j.a(B.X.aM(0,p,null)),new C.fQf(),a2).fI(0)
a2=J.b6(b3,new C.fQg(),a2).c0(0,new C.fQh())
n=A.dg(a2,a2.$ti.k("L.E"))
a2=o,a2=A.eo(a2,a2.r,A.a7(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.f0(n,m)?17:18
break
case 17:a5=C.AR(a8)
l=A.aS(J.r(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a8X(l),$async$oS)
case 19:t=21
a5=C.AR(a8)
k=A.aS(J.r(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.X.aM(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.r(j,"thumbnailPath")
w=28
return A.b(C.a8X(a5==null?null:J.k(a5)),$async$oS)
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
return A.b(C.agq(r,"ngmy_worksheet_item_v3_"+C.AR(a8)+"_"+m),$async$oS)
case 29:w=30
return A.b(C.agq(r,"ngmy_worksheet_thumb_v3_"+C.AR(a8)+"_"+m),$async$oS)
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
case 14:case 10:a2=J.cE(b3),a3=a2.gaf(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gT(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bBB(h),$async$oS)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.agr(r,"ngmy_worksheet_thumb_v3_"+C.AR(a8)+"_"+a4,f),$async$oS)
case 40:g=i.T8(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agq(r,"ngmy_worksheet_thumb_v3_"+C.AR(a8)+"_"+a4),$async$oS)
case 41:g=i.T8(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.agq(r,"ngmy_worksheet_thumb_v3_"+C.AR(a8)+"_"+a4),$async$oS)
case 42:case 34:a4=i.a
w=43
return A.b(C.agr(r,"ngmy_worksheet_item_v3_"+C.AR(a8)+"_"+a4,B.X.ap(g.ag(),null)),$async$oS)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.cc(q,i.a)
w=31
break
case 32:w=44
return A.b(C.agr(r,"ngmy_worksheets_index_v3_"+C.AR(a8),B.X.ap(q,null)),$async$oS)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eB(b3,new C.fQi(q))
a4=a3.$ti.k("cQ<1,a8<n,@>>")
a7=A.C(new A.cQ(a3,new C.fQj(),a4),a4.k("L.E"))
a0=a7
w=45
return A.b(C.agr(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.X.ap(a0,null)),$async$oS)
case 45:w=46
return A.b(J.hCB(r),$async$oS)
case 46:if(a2.gcm(b3)&&J.ad(q)===0){u=!1
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
$.am.$1("[worksheets] saveWorksheetProjects error: "+A.w(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$oS,v)},
LG(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$LG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Df(d),$async$LG)
case 3:t=g
s=J.cE(t)
r=s.bg(t,new C.fYs(e))
if(r===-1)s.c3(t,0,e)
else s.n(t,r,e)
u=C.oS(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$LG,v)},
bCQ(d,e){var w=0,v=A.j(x.H),u
var $async$bCQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Df(d),$async$bCQ)
case 2:u=g
J.nA(u,new C.fzY(e))
w=3
return A.b(C.oS(d,u),$async$bCQ)
case 3:return A.h(null,v)}})
return A.i($async$bCQ,v)},
GV(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$GV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$GV)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aS(J.r(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.X.aM(0,i,null)
if(x.j.b(t)){j=J.dc(t,x.f)
j=A.cG(j,new C.fCN(),j.$ti.k("L.E"),x.k)
s=A.a7(j).k("Z<L.E>")
r=A.C(new A.Z(j,new C.fCO(),s),s.k("L.E"))
B.d.aW(r,new C.fCP())
k=r}}catch(h){}w=4
return A.b(C.fkG(d),$async$GV)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i1f(k,p,d)
j=A.T(o)
s=j.k("N<1,a8<n,@>>")
s=A.C(new A.N(o,new C.fCQ(),s),s.k("ak.E"))
n=B.X.ap(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.Rf(d,o),$async$GV)
case 7:case 6:j=j.k("Z<1>")
m=A.C(new A.Z(o,new C.fCR(d),j),j.k("L.E"))
if(m.length!==0)C.aPM(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$GV,v)},
fQ1(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fQ1=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Rf(d,e),$async$fQ1)
case 3:t=J.dH(e,new C.fQ2(d))
s=A.C(t,t.$ti.k("L.E"))
if(s.length===0){u=!0
w=1
break}u=C.aPM(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fQ1,v)},
a3d(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a3d=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a3d)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aS(J.r(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.X.aM(0,l,null)
if(x.j.b(u)){m=J.dc(u,x.f)
m=A.cG(m,new C.fYn(),m.$ti.k("L.E"),x.k)
t=A.a7(m).k("Z<L.E>")
s=A.C(new A.Z(m,new C.fYo(),t),t.k("L.E"))
o=s}}catch(k){}q=J.qt(o,new C.fYp(e))
if(B.a.i(e.x).length===0&&C.uf(e,d)){m=B.a.i(d.toLowerCase())
p=e.aEO(e.y===D.kH?D.kH:D.ub,m)}else p=e
if(q===-1)J.pK(o,0,p)
else J.aI(o,q,p)
w=3
return A.b(C.Rf(d,o),$async$a3d)
case 3:w=C.uf(p,d)?4:5
break
case 4:w=6
return A.b(C.aPL(C.GT(p,d),p),$async$a3d)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a3d,v)},
aPY(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aPY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.GV(d),$async$aPY)
case 2:u=g
t=J.cE(u)
s=A.pT(t.eB(u,new C.fzF(e)))
t.bs(u,new C.fzG(e))
w=3
return A.b(C.Rf(d,u),$async$aPY)
case 3:w=s!=null&&C.aQ1(s,d)?4:5
break
case 4:w=6
return A.b(C.fk_(e),$async$aPY)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aPY,v)},
aig(d){var w=d.f,v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.fYy(),v),v.k("L.E"))
return w},
h7i(d,e){var w,v=d.f,u=A.pT(new A.Z(v,new C.fz9(e),A.T(v).k("Z<1>")))
v=C.aig(d)
w=A.T(v).k("Z<1>")
v=A.C(new A.Z(v,new C.fza(e,u),w),w.k("L.E"))
B.d.aW(v,new C.fzb())
return v},
i8N(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hxE(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bg(C.h7i(d,u),new C.fXV(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ial(d,e){var w
if(e==null||e.length===0)return 1
w=C.h7i(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fDD(),A.T(w).k("N<1,H>")).fb(0,B.AQ)+1},
iif(d){var w,v=C.aig(d)
if(v.length===0)return null
w=new A.Z(v,new C.fPW(),A.T(v).k("Z<1>"))
if(!w.gan(0))return w.gI(0)
return B.d.gI(v)},
i8I(d){return A.G(["id",d.a,"name",d.b,"gender",C.hth(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
iag(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.U(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aX(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.M)(a0),++u){q=a0[u]
p=q.a
r.M(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yv?n:q.c
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
d=q.aEJ(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.M)(w),++u){o=w[u]
if(!r.t(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cMi(a1,w,a3.d,a2.y,s,a0,v)},
B1(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$B1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$B1)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aS(J.r(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.X.aM(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dc(t,x.f)
p=A.cG(p,new C.fCK(),p.$ti.k("L.E"),x.k)
s=A.a7(p).k("Z<L.E>")
p=A.C(new A.Z(p,new C.fCL(),s),s.k("L.E"))
B.d.aW(p,new C.fCM())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$B1,v)},
ai1(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$ai1=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.ub:D.kH
a7=C.GT(b2,b3)
w=2
return A.b(C.B1(b1),$async$ai1)
case 2:a8=b5
a9=J.cE(a8)
b0=a9.bg(a8,new C.fPR(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bCC(b1,b2),$async$ai1)
case 5:case 4:if(b0===-1){u=b2.aEO(a6,a7)
a9.c3(a8,0,u)}else{t=a9.h(a8,b0)
s=A.U(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.M)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.M)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.yv?i:l.c
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
s.n(0,m,l.aEJ(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("bc<2>")
s=A.C(new A.bc(s,k),k.k("L.E"))
k=a5?D.ub:D.kH
u=t.cMk(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.Rf(b1,a8),$async$ai1)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aPL(B.a.i(b3.toLowerCase()),u),$async$ai1)
case 9:case 8:return A.h(null,v)}})
return A.i($async$ai1,v)},
hpj(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).a8().ae(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.T(m).k("N<1,a8<n,@>>"),k=A.C(new A.N(m,C.hwJ(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.G(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.G(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.a8().ae(),"updatedAt",o],r,x.K),"createdAt",s.a8().ae(),"updatedAt",o],r,x.z)},
hpk(d,e){var w=new A.V(Date.now(),0,!1).a8().ae(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.T(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,C.hwJ(),t),t.k("ak.E"))
return A.G(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.a8().ae(),"updatedAt",w],x.N,x.z)},
hZL(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a5(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.alm(A.a2(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.h9K(),A.T(j).k("N<1,n>")).c0(0,new C.fkt())
t=A.C(j,j.$ti.k("L.E"))
if(u===v)s=D.ub
else s=B.d.t(t,u)?D.NR:D.kH
return w.aEO(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.alm(A.a2(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dc(q,h)
h=A.cG(h,new C.fku(),h.$ti.k("L.E"),x.P)
p=A.a7(h).k("Z<L.E>")
o=A.C(new A.Z(h,new C.fkv(),p),p.k("L.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b6(n,new C.fkw(),x.N).c0(0,new C.fkx())
t=A.C(h,h.$ti.k("L.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.ub
else s=B.d.t(t,u)?D.NR:D.kH
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.A(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bj(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aK(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.k.N(j)
if(j==null)j=0
return new C.kO(h,r,p,!m,t,o,l,j,v,s,B.ca)},
fkG(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fkG=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fkK()
h=x.N
g=x.z
w=7
return A.b(A.iQ(A.a([A.lz("family_trees","*",null,A.G(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bK),r.$2(A.lz("family_trees","*",A.G(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bK),"collaborator"),r.$2(A.lz("family_trees","*",null,A.G(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bK),"public")],x.cl),x.fO),$async$fkG)
case 7:q=a4
p=J.r(q,0)
o=J.r(q,1)
n=J.r(q,2)
g=x.a
m=A.U(h,g)
h=A.C(p,g)
l=h
J.h6(l,o)
J.h6(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.M)(l),++f){k=l[f]
g=J.r(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aI(m,j,k)}l=m
h=A.a7(l).k("bc<2>")
h=A.cG(new A.bc(l,h),new C.fkH(a0),h.k("L.E"),x.k)
l=A.a7(h).k("Z<L.E>")
l=A.C(new A.Z(h,new C.fkI(),l),l.k("L.E"))
B.d.aW(l,new C.fkJ())
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
l=B.a.t(d,"Could not find the table 'public.family_trees'")||B.a.t(d,'relation "public.family_trees" does not exist')
h=$.am
if(l)h.$1("[family_trees] table missing \u2014 run supabase/family_trees_table.sql")
else h.$1("[family_trees] fetch error: "+A.w(i))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fkG,v)},
i1f(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a5(e)
if(j.gan(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dF(e,new C.foN(),v).c0(0,new C.foO())
t=A.dg(u,u.$ti.k("L.E"))
s=A.U(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.M)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.GT(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kH){m=q.e
m=!new A.N(m,A.h9K(),A.T(m).k("N<1,n>")).t(0,w)}else m=n
n=m}if(n&&!t.t(0,p))continue
s.n(0,p,q)}for(j=j.gaf(e);j.C();){v=j.gT(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.iag(l,v)
o=C.GT(k,w)
p=v.d
s.n(0,u,o===w?k.bdd(p,D.ub):k.bdd(p,v.y))}j=s.$ti.k("bc<2>")
j=A.C(new A.bc(s,j),j.k("L.E"))
B.d.aW(j,new C.foP())
return j},
Rf(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$Rf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$Rf)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b6(e,new C.frw(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.au("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.X.ap(s,null)),$async$Rf)
case 3:return A.h(null,v)}})
return A.i($async$Rf,v)},
aPL(d,e){return C.i6u(d,e)},
i6u(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aPL=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.m3("family_trees",A.a([C.hpj(e,d)],p),null,B.cG),$async$aPL)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.m3("family_trees",A.a([C.hpk(e,d)],p),null,B.cG),$async$aPL)
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
$.am.$1("[family_trees] upsert error: "+A.w(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aPL,v)},
aPM(d,e){return C.i6v(d,e)},
i6v(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aPM=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.T(e).k("N<1,a8<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fwI(d),n),m)
r=l
w=7
return A.b(A.m3("family_trees",r,null,B.cG),$async$aPM)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fwJ(d),n),m)
p=k
w=8
return A.b(A.m3("family_trees",p,null,B.cG),$async$aPM)
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
$.am.$1("[family_trees] bulk upsert error: "+A.w(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aPM,v)},
fk_(d){return C.hZ3(d)},
hZ3(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fk_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.RD("family_trees",A.G(["id",d],x.N,x.z),null,B.cG),$async$fk_)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ab(p)
$.am.$1("[family_trees] delete error: "+A.w(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fk_,v)},
rc:function rc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lt:function lt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cCX:function cCX(){},
cCW:function cCW(){},
cCU:function cCU(){},
cCV:function cCV(){},
I1:function I1(d,e){this.a=d
this.b=e},
hU:function hU(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
all:function all(d,e){this.a=d
this.b=e},
fzu:function fzu(){},
fYu:function fYu(d){this.a=d},
fxo:function fxo(d){this.a=d},
kO:function kO(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bR7:function bR7(){},
bR6:function bR6(){},
bR3:function bR3(){},
bR4:function bR4(){},
bR5:function bR5(){},
fo5:function fo5(){},
fjW:function fjW(){},
fjX:function fjX(){},
fjY:function fjY(){},
fQf:function fQf(){},
fQg:function fQg(){},
fQh:function fQh(){},
fQi:function fQi(d){this.a=d},
fQj:function fQj(){},
fYs:function fYs(d){this.a=d},
fzY:function fzY(d){this.a=d},
fCN:function fCN(){},
fCO:function fCO(){},
fCP:function fCP(){},
fCQ:function fCQ(){},
fCR:function fCR(d){this.a=d},
fQ2:function fQ2(d){this.a=d},
fYn:function fYn(){},
fYo:function fYo(){},
fYp:function fYp(d){this.a=d},
fzF:function fzF(d){this.a=d},
fzG:function fzG(d){this.a=d},
fYy:function fYy(){},
fz9:function fz9(d){this.a=d},
fza:function fza(d,e){this.a=d
this.b=e},
fzb:function fzb(){},
fXV:function fXV(d){this.a=d},
fDD:function fDD(){},
fPW:function fPW(){},
fCK:function fCK(){},
fCL:function fCL(){},
fCM:function fCM(){},
fPR:function fPR(d){this.a=d},
fkt:function fkt(){},
fku:function fku(){},
fkv:function fkv(){},
fkw:function fkw(){},
fkx:function fkx(){},
fkK:function fkK(){},
fkL:function fkL(d){this.a=d},
fkH:function fkH(d){this.a=d},
fkI:function fkI(){},
fkJ:function fkJ(){},
foN:function foN(){},
foO:function foO(){},
foP:function foP(){},
frw:function frw(){},
fwI:function fwI(d){this.a=d},
fwJ:function fwJ(d){this.a=d},
cCY:function cCY(d,e){this.a=d
this.b=e},
cCZ:function cCZ(d,e){this.a=d
this.b=e},
aI0:function aI0(d,e,f){this.a=d
this.b=e
this.c=f},
b9V:function b9V(){this.b=this.a=0},
b9U:function b9U(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
bxf:function bxf(){},
x1(d,e){var w,v
if(d==null)return""
w=d.bU()
v=""+w.gcb()+"/"+w.gcu()+"/"+w.gcf()
if(!e)return v
return v+" "+B.a.aS(B.o.u(w.gnl()),2,"0")+":"+B.a.aS(B.o.u(w.gGu()),2,"0")},
hPN(){var w,v=$.od(),u=J.dY(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aq(32)]
return"WS"+B.d.hi(u)},
at2(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$at2=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$at2)
case 3:if(!e){u=A.U(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f6("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bK),$async$at2)
case 8:r=e
if(r==null){u=A.U(x.N,x.z)
w=1
break}q=J.r(r,"stashes")
if(x.f.b(q)){o=A.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ab(m)
$.am.$1("[worksheet qr stash] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.U(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$at2,v)},
at3(d){return C.hPO(d)},
hPO(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$at3=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$at3)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.G(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.z),!1,!1,B.cG,null),$async$at3)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.am.$1("[worksheet qr stash] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$at3,v)},
at5(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$at5=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$at5)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hPN()
w=4
return A.b(C.at2(),$async$at5)
case 4:r=h
q=B.a.i(e)
p=B.dN.aL(t)
J.aI(r,s,A.G(["ownerEmail",q,"projectId",f,"payload",B.cI.gcp().aL(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).a8().ae()],x.N,x.K))
w=5
return A.b(C.at3(r),$async$at5)
case 5:u=new A.a0I("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$at5,v)},
at4(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$at4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$at4)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.at2(),$async$at4)
case 4:q=f
p=J.a5(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a5(o)
m=A.aK(n.h(o,"usesRemaining"))
l=m==null?null:B.k.N(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.cd.cB(0,B.cD.aL(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dR(A.a2(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a8().ae())
p.n(q,i,m)}w=5
return A.b(C.at3(q),$async$at4)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$at4,v)},
hjM(){var w=new A.V(Date.now(),0,!1).a8()
return"wst_"+(1000*w.a+w.b)+"_"+B.cR.aq(999999)},
hPP(d){var w,v,u,t,s,r,q
try{w=A.agR(d)
if(w==null)return d
v=w
if(J.LL(v)>960||J.LK(v)>960){s=v
r=J.LL(v)>=J.LK(v)?960:null
v=A.agQ(s,J.LK(v)>J.LL(v)?960:null,B.P7,r)}s=v
u=A.amK(82).Tw(s,B.z9)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cl(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cly(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cly=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hPP(e)
$.clu.n(0,s,t)
u=C.bED(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cly,v)},
b3w(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b3w=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d3(l,"data:image")){u=null
w=1
break}t=4
r=J.f0(l,",")?B.d.gak(J.lC(l,",")):l
q=B.cD.aL(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hjM()
w=7
return A.b(C.cly(p,q),$async$b3w)
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
$.am.$1("[worksheet-thumb] persistDataUrl failed: "+A.w(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b3w,v)},
clv(d){var w=0,v=A.j(x.T),u,t,s
var $async$clv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(M.clx(s),$async$clv)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cI.gcp().aL(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$clv,v)},
a8X(d){var w=0,v=A.j(x.H),u,t
var $async$a8X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=M.hwB(d)
if(t==null){w=1
break}$.clu.W(0,t)
w=3
return A.b(C.bEC(t),$async$a8X)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a8X,v)},
bED(d,e){return C.igr(d,e)},
igr(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bED=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aOG
w=7
return A.b(n==null?$.aOG=M.h6f():n,$async$bED)
case 7:r=g
q=new Uint8Array(A.cl(e))
p=J.mQ(r,"thumbs","readwrite")
B.j_.mn(J.mP(p,"thumbs"),q,l)
w=8
return A.b(J.pJ(p),$async$bED)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ab(k)
$.am.$1("[worksheet-thumb idb put] "+A.w(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bED,v)},
bEC(d){return C.igp(d)},
igp(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bEC=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aOG
w=7
return A.b(o==null?$.aOG=M.h6f():o,$async$bEC)
case 7:r=f
q=J.mQ(r,"thumbs","readwrite")
B.j_.G1(J.mP(q,"thumbs"),m)
w=8
return A.b(J.pJ(q),$async$bEC)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ab(l)
$.am.$1("[worksheet-thumb idb delete] "+A.w(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bEC,v)}},D,Ar,As,Z,At,Au,M
J=c[1]
A=c[0]
B=c[2]
P=c[241]
A_=c[156]
S=c[57]
A9=c[224]
I=c[205]
H=c[33]
E=c[215]
T=c[116]
Q=c[151]
O=c[104]
Aa=c[113]
Ab=c[192]
A0=c[114]
Ac=c[223]
Ad=c[40]
R=c[222]
L=c[88]
A1=c[84]
A2=c[162]
Ae=c[124]
A3=c[165]
A4=c[236]
A5=c[193]
Af=c[184]
Ag=c[196]
A6=c[191]
Ah=c[239]
Ai=c[70]
A7=c[240]
Aj=c[76]
A8=c[209]
Ak=c[243]
Al=c[32]
U=c[115]
N=c[186]
Am=c[197]
An=c[120]
Ao=c[147]
V=c[242]
Ap=c[128]
W=c[232]
X=c[39]
G=c[95]
Aq=c[31]
K=c[103]
F=c[130]
Y=c[74]
C=a.updateHolder(c[7],C)
D=c[235]
Ar=c[75]
As=c[203]
Z=c[238]
At=c[237]
Au=c[61]
M=c[58]
C.aoU.prototype={}
C.aZP.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bhy(),f=h.x!=null&&h.zd(i).length===0
if(h.x!=null)w=f?B.b_:B.bx
else w=h.gU9()?B.bx:B.dY
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.J(D.blo,B.r,1)
s=x.p
r=A.p(i,A.x(A.a([A.p(i,D.f1p,B.f,i,i,new A.o(B.b_.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h4,i,i,i),B.W,D.fwB,B.au,A.d(C.x1(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fsf,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b3V,i,i,i,i,B.a_t,i,i,i)
q=A.m(16)
p=A.J(B.aL,B.r,1)
o=A.J(B.b_.j(0.28),B.r,1)
n=A.h8i(h.d)
o=A.p(B.A,C.aZO(A.fFY(h.e,n),30),B.f,i,i,new A.o(B.m1,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fnm,B.K,i,i)
m=A.m(14)
l=A.J(B.aL,B.r,1)
q=A.p(i,A.x(A.a([o,B.O,n,B.bD,D.fwT,B.ad,A.p(i,A.x(A.a([D.fN0,B.bD,A.d(A.B3(h.c),i,i,i,i,i,i,D.fi5,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fe,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,p,q,i,i,B.n),i,i,i,i,N.akd,i,i,i)
p=A.m(16)
m=A.J(B.aL,B.r,1)
l=j.aRA("Original due",C.x1(h.r,!1))
n=j.aRA("Current due",C.x1(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.W,A.p(i,A.x(A.a([l,B.O,n,B.W,A.p(i,A.d(h.gaLI(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.o(o,i,i,k,i,i,B.n),i,i,i,i,B.BI,i,i,1/0),B.W,j.chu(),B.O,j.c4G(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bf,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.J(B.aL,B.r,1)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fxT,B.au,A.d(q,i,i,i,i,i,i,D.fmA,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bf,i,i,1/0)],s))}if(h.gaGq()){q=A.m(14)
o=A.J(B.cs,B.r,1.6)
B.d.v(p,A.a([B.W,A.p(i,A.x(A.a([D.fOm,B.O,A.bx(A.m(12),A.eb(new A.a6(1/0,88,A.b4(i,i,i,new A.Ws(h.ax,B.M,D.f5D,!0,3.5,i),B.ax),i),B.c,!0),B.ap)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.c,i,o,q,i,i,B.n),i,i,i,i,B.G5,i,i,i)],s))}p.push(B.aA)
p.push(D.fGf)
return A.p(i,A.x(A.a([r,new A.D(B.a_h,A.x(p,B.ak,i,B.e,B.i,0,B.p),i)],s),B.ak,i,B.e,B.P,0,B.p),B.ap,i,i,new A.o(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aRA(d,e){var w=null
return A.B(A.a([A.E(A.d(d,w,w,w,w,w,w,D.aa7,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fj9,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
chu(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.a9V(B.dY,u,"Not paid yet")
w=t.zd(null).length
v=w===0?B.b_:B.bx
return this.a9V(v,u,C.x1(t.x,!0))},
c4G(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.a9V(B.b_,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.a9V(B.b_,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.aa7,u,u,u)
v=A.T(d).k("N<1,h0>")
v=A.C(new A.N(d,new C.c6l(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bX(B.bC,v,B.bq,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
a9V(d,e,f){var w=null
return A.B(A.a([A.E(A.d(e,w,w,w,w,w,w,D.aa7,w,w,w),1),new A.ds(1,B.cn,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dW,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bc5.prototype={
a3(d,e){new A.Ws(this.b,B.M,e,!0,3.5,null).a3(d,e)},
aw(d){return d.b!==this.b}}
C.ap5.prototype={
R(){return new C.aDR(A.a([],x.bp))},
ge1(){return this.c}}
C.aDR.prototype={
Z(){this.a2()
this.IZ()},
IZ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$IZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a2u(t.a.c),$async$IZ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dMu(t,s))
case 1:return A.h(u,v)}})
return A.i($async$IZ,v)},
aTx(d,e){var w,v=null,u=this.a.d.a,t=u?B.M:B.aP,s=A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bs:B.bn).j(0.22)
w=A.m(10)
return A.br(v,new A.b5(4,r,new A.ay(u,1,B.r,-1)),v,B.bf,v,v,v,v,!0,new A.b5(4,w,new A.ay((this.a.d.a?B.bs:B.bn).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b5(4,A.m(10),D.b1y),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aTw(d){return this.aTx(d,null)},
PM(d){return this.cl6(d)},
cl6(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PM=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.Hr:B.eL
w=7
return A.b(new A.hV().Ch(72,900,900,n),$async$PM)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fk(),$async$PM)
case 8:p=f
n=B.cI.gcp().aL(p)
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
if(n!=null)n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$PM,v)},
b1n(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.M:B.aP,o=A.m(10),n=A.J((q?B.bs:B.bn).j(0.18),B.r,1)
if(d)q=B.cO
else q=s.a.d.a?B.bs:B.bn
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,12.5,r,r,B.Q,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cO
else u=s.a.d.a?B.bs:B.bn
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cO,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cb)
q=A.a([q,B.ac,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aF(r,r,r,r,A.X(B.cz,s.a.d.a?B.bs:B.bn,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cb))
return A.p(r,A.B(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(p,r,n,o,r,r,B.n),r,r,r,B.jg,D.by5,r,r,r)},
Di(d){return this.bBn(d)},
bBm(){return this.Di(null)},
bBn(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Di=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.au()
r=new A.as(new A.b9(a4,B.b2,B.aO),s)
if(a3)a4=""
else{a4=a5.c
q=B.k.j3(a4)
p=a5.c
a4=a4===q?B.o.u(B.k.N(p)):B.k.ac(p,2)}o=new A.as(new A.b9(a4,B.b2,B.aO),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.as(new A.b9(a4,B.b2,B.aO),s)
if(a3){a4=new A.V(Date.now(),0,!1).bS(6048e8)
m=A.c3(a4.gcf(),a4.gcb(),a4.gcu(),0,0,0,0,0)}else{a4=a5.f
m=A.c3(a4.gcf(),a4.gcb(),a4.gcu(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.h8i(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wF?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",a4,new C.dMd(),new C.dMe(a2,t,a5,r,new C.dMf(a2,t),o,n,j),B.eO,!0,x.y),$async$Di)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.cY(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.S$=s
r.P$=0
o.S$=s
o.P$=0
n.S$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.K(x.q).f.U(D.fc6)
w=1
break}a0=a2.d
if(a0==null){t.c.K(x.q).f.U(D.faM)
w=1
break}a1=A.fFY(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wF?"male":"female"
w=7
return A.b(A.aif(a3,A.hgt(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$Di)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wF?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a7(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c3(a3.gcf(),a3.gcb(),a3.gcu(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c3(a4.gcf(),a4.gcb(),a4.gcu(),0,0,0,0,0)))a5.cOz(a2.a)
w=8
return A.b(A.aif(t.a.c,a5),$async$Di)
case 8:case 5:w=9
return A.b(t.IZ(),$async$Di)
case 9:case 1:return A.h(u,v)}})
return A.i($async$Di,v)},
aUa(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cO.j(0.14)
else w=this.a.d.a?B.M:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cO
else s=(this.a.d.a?B.bs:B.bn).j(0.2)
s=A.J(s,B.r,g?1.5:1)
r=C.aZO(d,18)
if(g)q=B.cO
else q=this.a.d.a?B.aP:B.av
return A.aH(!1,B.a2,!0,v,A.aO(!1,u,!0,A.p(p,A.B(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.b8,B.i,0,p,p),B.f,p,p,new A.o(p,p,s,t,p,p,B.n),p,p,p,p,B.bS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
Su(d){return this.cCQ(d)},
cCQ(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Su=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",s,new C.dMx(),new C.dMy(t,d),B.hr,!0,x.y),$async$Su)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aif(t.a.c,d),$async$Su)
case 7:w=8
return A.b(t.IZ(),$async$Su)
case 8:case 1:return A.h(u,v)}})
return A.i($async$Su,v)},
PL(d,e){return this.bMc(0,e)},
bMc(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ld(s,"Cancel","Delete",e.b+" \xb7 "+A.B3(e.c)+" will be removed from this device.","Delete this debt?"),$async$PL)
case 3:if(!g){w=1
break}w=4
return A.b(C.fzM(t.a.c,e.a),$async$PL)
case 4:w=5
return A.b(t.IZ(),$async$PL)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PL,v)},
afA(d){return this.ceV(d)},
ceV(d){var w=0,v=A.j(x.H),u=this,t
var $async$afA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bV(B.L,null,new C.dMr(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$afA)
case 2:return A.h(null,v)}})
return A.i($async$afA,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.elU
w=J.dH(m.d,new C.dMz())
v=A.C(w,w.$ti.k("L.E"))
w=J.dH(m.d,new C.dMA())
u=A.C(w,w.$ti.k("L.E"))
t=B.d.cH(v,0,new C.dMB())
w=A.m(18)
s=m.a.d.a
r=s?D.cx8:D.aAI
q=A.J(s?B.cO.j(0.35):B.cO.j(0.18),B.r,1)
s=A.p(l,D.bZ4,B.f,l,l,new A.o(B.cO.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.B(A.a([s,B.at,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aH(!1,B.a2,!0,A.m(12),A.aO(!1,A.m(12),!0,D.eld,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dMC(m),l,l,l,l,l,l,l),B.f,B.cO,0,l,l,l,l,l,B.aj)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.cz0("Open",""+v.length),1)
n=v.length===0?"$0.00":A.B3(t)
r=A.a([A.p(l,A.x(A.a([s,B.ad,A.B(A.a([o,B.ac,A.E(m.b7u(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(l,l,q,w,l,new A.a9(B.ay,B.aE,B.x,r,l,l),B.n),l,l,l,l,B.aka,l,l,l),B.aA],p)
if(J.ct(m.d)){w=m.a.d.a
s=w?B.e3:B.c
q=A.m(18)
o=A.J((w?B.bs:B.bn).j(0.12),B.r,1)
n=A.p(l,D.bTR,B.f,l,l,new A.o(B.cO.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.av,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.p(l,A.x(A.a([n,B.ad,w,B.au,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bn,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.o(s,l,o,q,l,l,B.n),l,l,l,l,D.bAE,l,l,1/0))}else{w=m.gckn()
s=A.C(new A.N(v,w,A.T(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bCk,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bs:B.bn,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.T(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.ak,l,B.e,B.i,0,B.p)},
b7u(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.J((v.a.d.a?B.bs:B.bn).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bs:B.bn,u,u,u,u,u,u,u,u,11,u,u,B.Q,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cO
else w=v.a.d.a?B.aP:B.av
return A.p(u,A.x(A.a([q,B.bD,A.d(f,u,1,B.a1,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.o(t,u,r,s,u,u,B.n),u,u,u,u,B.eB,u,u,u)},
cz0(d,e){return this.b7u(!1,d,e)},
cko(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zd(j).length,h=d.bgM()
if(d.x!=null){w=d.zd(j).length
v=w===0?B.cO:B.bx}else if(d.gU9())v=B.bx
else{if(h)w=B.cO
else w=k.a.d.a?B.bs:B.bn
v=w}if(d.x!=null){w=d.zd(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.x1(u,!1)}else{u.toString
t="Paid "+C.x1(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.x1(w,!1)+" \xb7 "+i+" missed":"Due "+C.x1(w,!1)}w=k.a.d.a?B.e3:B.c
u=A.m(18)
if(d.gU9()&&d.x==null)s=B.bx.j(0.35)
else s=(k.a.d.a?B.bs:B.bn).j(0.12)
s=A.J(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cH,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bo:B.m1
o=A.J(d.gU9()&&d.x==null?B.bx.j(0.45):B.cO.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.h8i(d.d)
o=A.p(B.A,A.d9(C.aZO(A.fFY(d.e,m),24),n),B.f,j,j,new A.o(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.av
m=x.p
n=A.a([new A.ds(1,B.cn,A.d(p,j,1,B.a1,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaGq())B.d.v(n,A.a([B.en,A.X(B.Oi,B.cO.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.B(n,B.m,j,B.e,B.i,0,j,j),B.cL,A.d(t,j,1,B.a1,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.Q,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.B3(d.c)
l=k.a.d.a?B.aP:B.av
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.p(j,A.aH(!1,B.a2,!0,j,A.aO(!1,q,!0,new A.D(A4.ajX,A.B(A.a([o,B.bd,p,B.ac,A.x(A.a([n,B.bD,A.X(B.eE,(k.a.d.a?B.bs:B.bn).j(0.5),j,j,j,18)],m),B.dH,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dMt(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.o(w,j,s,u,r,j,B.n),j,j,j,B.d2,j,j,j,j)}}
C.uw.prototype={}
C.al9.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bi
u=v?B.E:B.m
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.J(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cx,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.J(r.j(0.6),B.r,1)
n.push(A.aB(a0,A.p(a0,A.X(B.cz,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.o(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a5:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iA,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.awW,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.Gm,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.eN(m,A.B(l,B.m,a0,B.e,B.P,0,a0,a0),B.f,B.e2)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bxi,A.d(v,a0,1,B.a1,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cE:B.bp,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fC,A.x(a2,u,a0,B.e,B.P,0,B.p),a0),1))
n.push(D.f6q)
a2=A.a([A.B(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.vU,A.p(a0,a0,B.f,a0,a0,new A.o(a0,a0,a0,a0,a0,new A.a9(B.a5,B.a8,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lE,A.x(a2,B.m,a0,B.e,B.P,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,A.J(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hh,a0,a0,a0,a0)}return A.p(a0,e,B.f,a0,a0,new A.o(a0,a0,q,s,p,new A.a9(B.ay,B.aE,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.byx,a0,a0,a0,a0)}}
C.aVz.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.p(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bi?B.bi:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a1,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bp:B.cE,q,B.Q,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.B(l,B.m,q,B.e,B.i,0,q,q),B.cL,n],m)
if(p.z)o.push(new A.D(B.u1,n,q))
return new A.D(B.d2,A.x(o,B.m,q,B.e,B.P,0,B.p),q)}}
C.Ti.prototype={
R(){return new C.bfJ()}}
C.bfJ.prototype={
gc_B(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aJ(d,n,x.w).w,l=x.p,k=A.a([D.elP,D.elV],l)
for(w=0;w<8;++w){v=D.a3I[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.H9:B.Co
q=t===s
r=A.X(r,q?B.eH:B.bY,n,n,n,17)
q=q?B.c:B.ae
r=A.a([r,B.bm,new A.y(v.b,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n),B.ac,new A.bz(1,B.bb,new A.y(v.c,n,B.Ae,n,n,n,n,B.a1,n,1,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aP(24,24)
p=new A.ay(B.eH,2,B.r,-1)
s=new A.o(n,n,new A.bK(p,p,p,p),new A.bg(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aB(n,new A.D(B.eJ,A.x(A.a([new A.D(B.mJ,new A.ce(B.aM,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.p(n,new A.BH(!0,new C.al9(v,q.d,q.e,new C.dcC(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dcD(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.byT,A.bE(D.fTV,n,new C.dcE(o,d),A.bo(B.b6,n,n,n,n,B.oC,n,n,new A.b7(A.m(16),B.a0),n,n,n)),n))
return A.bl(!0,new A.cU(new A.aZ(0,1/0,0,m.a.b*0.9),A.cf(k,n,D.bDb,n,n,B.ag,!0),n),!0,!1,B.af,!0,!0)}}
C.nl.prototype={
ag(){var w=this
return A.G(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.a8().ae()],x.N,x.z)},
bdp(d,e,f){return new C.nl(this.a,e,d,f)}}
C.I0.prototype={
ww(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.I0(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aEC(d){var w=null
return this.ww(w,w,w,w,w,d,w,w,w,w,w,w)},
cKf(d){var w=null
return this.ww(w,w,w,w,d,w,w,w,w,w,w,w)},
bdn(d,e,f){var w=null
return this.ww(d,w,w,w,w,w,w,w,e,w,f,w)},
cKU(d){var w=null
return this.ww(w,w,w,w,w,w,d,w,w,w,w,w)},
cL2(d){var w=null
return this.ww(w,w,w,w,w,w,w,w,w,d,w,w)},
cKd(d){var w=null
return this.ww(w,w,w,d,w,w,w,w,w,w,w,w)},
cL4(d){var w=null
return this.ww(w,w,w,w,w,w,w,w,w,w,w,d)},
cKa(d){var w=null
return this.ww(w,w,d,w,w,w,w,w,w,w,w,w)},
cK5(d){var w=null
return this.ww(w,d,w,w,w,w,w,w,w,w,w,w)},
FU(d){var w=null
return this.ww(w,w,w,w,w,w,w,d,w,w,w,w)},
cLc(d,e,f,g,h,i,j,k,l,m,n){return this.ww(d,e,f,g,null,h,i,j,k,l,m,n)},
ag(){var w=this
return A.G(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cHN(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bPP(d),k=A.aK(d.h(0,"emblem")),j=k==null?o:B.k.N(k),i=A.aK(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cP(d.h(0,n))).length!==0?B.a.i(A.cP(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cP(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.Da.gev(D.Da))
s=i==null?o:B.k.E(i,18,36)
r=l.$2("position",D.a5m)
q=l.$2("frame",D.a4I)
l=l.$2("texture",D.a4D)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cP(d.h(0,"author"))):o
return this.cLc(p,u,t,q,r,A.r1(d.h(0,"ribbon"))?A.Gv(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.ZS.prototype={
R(){return new C.aAR(A.a([],x.I),D.NQ)},
ge1(){return this.c}}
C.aAR.prototype={
Z(){var w,v=this
v.a2()
v.f=A.zV(0,1)
w=$.au()
v.z=new A.as(B.as,w)
v.Q=new A.as(B.as,w)
v.l9()
w=v.a
C.bD_(w.c,w.d).bN(new C.ddi(v),x.fL)},
q(){var w,v=this,u=v.f
u===$&&A.c()
u.q()
u=v.z
u===$&&A.c()
w=$.au()
u.S$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.S$=w
u.P$=0
v.a1()},
l9(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$l9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.Lg(s.c,s.d),$async$l9)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dd6(t,r))
t.awq()
case 1:return A.h(u,v)}})
return A.i($async$l9,v)},
gat0(){var w,v=this
if(!J.ct(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.r(v.d,v.r)},
awq(){var w,v,u=this.gat0(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.saX(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.saX(0,w==null?"":w)},
cdl(d){this.m(new C.dd3(this,d))
this.awq()},
NI(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nl(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aRE(r.c,r.d,s),$async$NI)
case 3:w=4
return A.b(t.l9(),$async$NI)
case 4:if(t.c==null||J.ct(t.d)){w=1
break}q=J.qt(t.d,new C.dcF(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dcG(t,p))
t.awq()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.Bf(p+1,B.cu,B.kD),$async$NI)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NI,v)},
AW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$AW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gat0()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aRE(o.c,o.d,new C.nl(s,r,q,new A.V(p,0,!1))),$async$AW)
case 3:w=4
return A.b(t.l9(),$async$AW)
case 4:if(t.c==null){w=1
break}t.m(new C.dd7(t))
case 1:return A.h(u,v)}})
return A.i($async$AW,v)},
Om(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Om=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gat0()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.dcO(r),s,null,!0,!0,x.y),$async$Om)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bCM(s.c,s.d,r.a),$async$Om)
case 4:t.m(new C.dcP(t))
w=5
return A.b(t.l9(),$async$Om)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.Uc(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$Om,v)},
yA(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$yA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AW(),$async$yA)
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
return A.b(C.Rw(s,r.r,o,p,q),$async$yA)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a4(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hxc(s,r.x,r.r),$async$yA)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.Lg(s.c,s.d),$async$yA)
case 10:l=e
for(s=n.d,r=J.cE(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.M(l,new C.nl(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bc(r.c,r.d,l),$async$yA)
case 11:w=12
return A.b(t.l9(),$async$yA)
case 12:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$yA,v)},
a1_(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1_=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AW(),$async$a1_)
case 5:case 4:if(t.c==null){w=1
break}s=t.gyy(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dK(D.zi,new C.dd4(t),new C.dd5())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mD("Our Family",o,"",""))
for(o=J.aW(t.d);o.C();){n=o.gT(o)
p.push(new H.mD(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.h9W(o,new H.rw(s,r,"",p,new H.uN(q.d,null,null,null,null,"","","")),null),$async$a1_)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1_,v)},
O5(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$O5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AW(),$async$O5)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bV(D.afa,null,new C.dcK(t),s,!0,!0,!0,K.a8o,!1,!1,x.N),$async$O5)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cKf(r)
t.m(new C.dcL(t,q))
s=t.a
w=7
return A.b(C.S6(s.c,s.d,q),$async$O5)
case 7:case 1:return A.h(u,v)}})
return A.i($async$O5,v)},
Xs(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Xs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(D.afa,null,new C.dcQ(t),r,!0,!0,!0,K.a8o,!1,!1,x.e),$async$Xs)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dcR(t,s))
r=t.a
w=4
return A.b(C.S6(r.c,r.d,s),$async$Xs)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.Bf(0,B.dV,B.nn)
case 1:return A.h(u,v)}})
return A.i($async$Xs,v)},
bRK(d){var w=d.bU(),v=B.a.aS(B.o.u(w.gcb()),2,"0"),u=B.a.aS(B.o.u(w.gcu()),2,"0")
return""+w.gcf()+"-"+v+"-"+u},
gyy(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.bZP()
if(r.e)w=D.adW
else if(J.ct(r.d)){w=r.y
v=r.gyy(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fhr,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.D(W.ald,new C.Z9(w,v,0,q),q),q),B.bu,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kz.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bu],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aB(q,A.p(q,D.f1c,B.f,q,q,new A.o(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dG.j(0.45),B.I,18)],x.V),E.wv,B.n),q,q,q,q,B.Nz,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcGQ(),q,q,q,q,q,q,!1,B.a4))
w.push(B.W)
w.push(A.hr(D.bQ0,D.fTl,r.gaNr(),q))
B.d.v(u,w)}w=A.at(A.cg(A.x(u,B.m,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.em,q,q,B.ag),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kz.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.Q,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dR:B.AO
u=A.x(A.a([new A.D(D.bzV,w,q),A.E(A.Jm(v,new C.ddg(r),J.ad(r.d)+1,q,r.gcdk(),u,B.aM),1),r.bEg()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c7(q,D.Yg,new A.an(B.a_,q,B.b0,B.t,A.a([D.aO4,A.bl(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],v),q),q,!1,!1,q,q)},
bZP(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cL(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.Km(B.e5,"AI",h.gbC9(),!0))
if(h.a.f)f.push(new C.Km(B.nu,"Cover",h.gbMM(),!1))
if(h.a.f)f.push(new C.Km(B.yZ,"Header",h.gbHN(),!1))
if(J.cL(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.Km(B.ut,"Print",h.gcmq(),!1))
if(h.a.f&&J.cL(h.d)&&h.r>=0){v=h.w
u=v?B.hw:B.iW
t=v?"Save":"Edit"
f.push(new C.Km(u,t,v?h.gcsH():new C.dd0(h),!1))}if(h.a.f)f.push(new C.Km(B.hM,"Add page",h.gaNr(),!1))
v=C.htg(h.y.Q)
u=h.gyy(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.M)(f),++m){l=f[m]
if(l.d)k=D.dBj
else{k=new A.aP(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kb.j(0.5),1,B.r,-1)
j=A.p(g,A.X(l.a,D.kz,g,g,g,17),B.f,g,g,new A.o(g,g,new A.bK(i,i,i,i),new A.bg(k,k,k,k),g,new A.a9(B.a5,B.a8,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kz.j(0.85)
p.push(new A.bz(1,B.bb,A.aB(B.c9,A.x(A.a([k,B.bD,new A.y(l.b,g,new A.F(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,1,g,g)],q),B.m,g,B.e,B.P,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.al9(v,u,t+" \xb7 "+s+" "+r,new C.dd1(h),A.B(p,B.m,g,B.e,B.i,0,g,g),g)},
zZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$zZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.AW(),$async$zZ)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aW(t.d);r.C();){q=r.gT(r)
s.push(q.b+" "+q.c)}p=H.a2J(B.d.aH(s," "))
s=t.c
s.toString
w=6
return A.b(A.cj(null,null,!0,null,new C.dcH(t,p),s,null,!0,!0,x.N),$async$zZ)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.yA(),$async$zZ)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.DV(),$async$zZ)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.Fv("Swahili (Kiswahili)",!0),$async$zZ)
case 18:w=16
break
case 17:w=19
return A.b(t.cDr(o==="sw"?"Swahili (Kiswahili)":"English"),$async$zZ)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$zZ,v)},
Zm(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.J(E.kb.j(0.3),B.r,1),r=x.p
return new A.D(B.cv,A.aO(!1,v,!0,A.p(w,A.B(A.a([A.p(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.o(w,w,w,w,w,E.wv,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A1.K2,w,w,w),A.d(g,w,w,w,w,w,w,B.Af,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.o(u,w,s,t,w,w,B.n),w,w,w,w,B.bf,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dd2(d,h),w,w,w,w,w,w,w),w)},
DV(){return this.bRe()},
bRe(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$DV=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.dcU(r),a7,null,!0,!0,x.ei),$async$DV)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eA("Working on it\u2026",$.au())
a6.a=!0
a7=r.c
a7.toString
A.cj(null,null,!1,null,new C.dcV(o),a7,null,!0,!0,x.H).fo(new C.dcW(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.M)(d),++a1){k=d[a1]
J.cc(l,new A.z(k.b,k.c))}d=r.r
a0=r.y.ag()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zi[a1]
J.cc(j,i.a)}w=8
return A.b(C.ahp(a0,a7,new C.dcX(o),d,l,e,j),$async$DV)
case 8:m=b0
t=2
w=7
break
case 5:t=4
a8=s.pop()
h=A.ab(a8)
n=A.w(h)
w=7
break
case 4:w=2
break
case 7:l=r.c
if(l!=null&&a6.a)A.a4(l,!0).eN()
l=o
l.si4($.au())
J.aS5(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.K(x.q).f
j=n
l.U(A.b3(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.aj(0,a4)){j=J.r(p,a4)
a7=m.b.h(0,a4).a
a7=j.bdp(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.r(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bc(j.c,j.d,l),$async$DV)
case 11:w=12
return A.b(r.l9(),$async$DV)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zi[a1].a)
a5=l.cHN(j,12,a7)
l=r.a
w=15
return A.b(C.S6(l.c,l.d,a5),$async$DV)
case 15:if(r.c!=null)r.m(new C.dcY(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.Bf(0,B.dV,B.nn)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.K(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.cx4("Undo",new C.dcZ(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ep,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$DV,v)},
Fv(d,e){return this.cDs(d,e)},
cDr(d){return this.Fv(d,!1)},
cDs(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Fv=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eA("Starting\u2026",$.au())
f.a=!0
k=r.c
k.toString
A.cj(null,null,!1,null,new C.dd9(a0),k,null,!0,!0,x.H).fo(new C.dda(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.M)(k),++i){n=k[i]
J.cc(o,new A.z(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a2W(m,new C.ddb(a0)),$async$Fv)
case 10:w=8
break
case 9:w=11
return A.b(C.bEt(new C.ddc(a0),m,a2),$async$Fv)
case 11:case 8:p=a5
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=A.ab(a1)
q=A.w(l)
w=6
break
case 3:w=2
break
case 6:o=r.c
if(o!=null&&f.a)A.a4(o,!0).eN()
o=a0
o.si4($.au())
J.aS5(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.K(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.r(d,g)
j=J.r(p,g)
o.push(k.bdp(J.r(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bc(k.c,k.d,o),$async$Fv)
case 12:w=13
return A.b(r.l9(),$async$Fv)
case 13:o=r.c
if(o==null){w=1
break}o=o.K(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.cx4("Undo",new C.ddd(r,d),null),null,null,null,null,B.t,null,k,null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Fv,v)},
bEg(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dcI(v):u
r=A.aF(u,u,u,u,A.X(D.bLG,s?D.kz:B.aZ,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cL(v.d)&&!v.w&&v.r>=0)s=A.hr(A.X(B.w9,B.FK,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.FK,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbMm(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kz.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dcJ(v):u
return A.bl(!0,new A.D(D.bzJ,A.B(A.a([r,s,A.aF(u,u,u,u,A.X(B.eE,t<J.ad(v.d)?D.kz:B.aZ,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.af,!0,!1)}}
C.ZW.prototype={
R(){return new C.bg6(new A.as(B.as,$.au()))}}
C.bg6.prototype={
ga28(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
q(){var w=this.d
w.S$=$.au()
w.P$=0
this.a1()},
gbPT(){var w,v=this.ga28()
A:{if("cover"===v){w=D.d3f
break A}if("book"===v){w=D.cZG
break A}w=D.dtO
break A}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=A.m(26),o=E.kb.j(0.5),n=x.p,m=A.B(A.a([D.dBk,B.at,D.bFk,A.aF(q,q,q,q,B.lg,q,q,q,new C.df2(d),q,q,q,q,q,q)],n),B.m,q,B.e,B.i,0,q,q),l=A.a([],n),k=r.a
if(k.c)l.push(A.iO(q,q,q,A.d("This page ("+k.e+")",q,q,q,q,q,q,q,q,q,q),q,new C.df3(r),r.ga28()==="page",q,q,q,q))
if(r.a.d)l.push(A.iO(q,q,q,D.fNS,q,new C.df4(r),r.ga28()==="book",q,q,q,q))
l.push(A.iO(q,q,q,D.fAD,q,new C.df5(r),r.ga28()==="cover",q,q,q,q))
l=A.bX(B.bC,l,B.bq,q,6,8)
k=B.c.j(0.07)
k=A.aL(q,B.Y,!1,q,!0,B.t,q,A.aM(),r.d,q,q,q,q,q,2,A.br(q,new A.b5(4,A.m(16),B.a0),q,q,q,q,q,q,!0,q,q,q,q,q,q,k,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,B.jE,"Say it in your own words\u2026",q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,6,3,q,!1,"\u2022",q,q,q,q,q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,B.d9,!0,B.a3,q,B.an,q,q,q,q)
w=A.a([],n)
for(v=r.gbPT(),u=v.length,t=0;t<u;++t){s=v[t]
w.push(A.mR(q,B.c.j(0.08),new A.y(s,q,B.E5,q,q,q,q,q,q,q,q,q),B.hm,new C.df6(r,s),q,q,q,q))}return A.eS(q,E.Bl,A.cg(A.x(A.a([m,B.W,D.fRb,B.am,l,B.ad,k,B.O,A.bX(B.bC,w,B.bq,q,6,6),B.aA,A.dl(D.bPY,D.fRZ,new C.df7(r,d),A.bo(B.b6,q,q,q,q,B.oC,q,q,new A.b7(A.m(16),B.a0),q,q,q)),B.au,D.fM4],n),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.ft,q,q,B.ag),q,q,q,D.akV,B.d8,q,new A.b7(p,new A.ay(o,1.4,B.r,-1)),q)}}
C.ZU.prototype={
R(){return new C.aAU(A.a([],x.gA))},
ge1(){return this.c}}
C.af5.prototype={}
C.aAU.prototype={
Z(){this.a2()
this.l9()},
l9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$l9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.Rz(p.c,p.d),$async$l9)
case 3:o=e
n=A.a([],x.gA)
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
return A.b(C.bD_(r.c,q),$async$l9)
case 6:j=e
i=J
w=7
return A.b(C.Lg(t.a.c,q),$async$l9)
case 7:m.push(new l.af5(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.ddx(t,n))
case 1:return A.h(u,v)}})
return A.i($async$l9,v)},
b8M(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
Qu(d,e){return this.ceT(0,e)},
ceT(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qu=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a4(s,!1).cd(A.dZ(new C.ddw(u,e),!0,null,x.y)),$async$Qu)
case 2:t=g
w=3
return A.b(u.l9(),$async$Qu)
case 3:if(t===!0&&u.c!=null)u.c.K(x.q).f.U(D.aRF)
return A.h(null,v)}})
return A.i($async$Qu,v)},
Fy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Fy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.K(x.q).f.U(D.aRB)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.agJ(s.c,s.d),$async$Fy)
case 5:q=e
w=6
return A.b(t.l9(),$async$Fy)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.Qu(0,B.d.fP(t.d,new C.ddB(q))),$async$Fy)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.Rw(p,s.f,r,n,o),$async$Fy)
case 10:m=e
w=11
return A.b(t.l9(),$async$Fy)
case 11:if(m&&t.c!=null)t.c.K(x.q).f.U(D.aRF)
case 1:return A.h(u,v)}})
return A.i($async$Fy,v)},
PX(d,e){return this.cqo(0,e)},
cqo(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.ddA(t,e),s,null,!0,!0,x.y),$async$PX)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a37(s.c,s.d,e.a),$async$PX)
case 4:w=5
return A.b(t.l9(),$async$PX)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PX,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)k.push(o.bEj(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.J(E.kb.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aB(n,new A.fE(0.7142857142857143,A.p(n,A.x(A.a([D.dBl,B.ad,D.ekQ,B.au,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kz.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.b8,B.i,0,B.p),B.f,n,n,new A.o(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcGM(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.J(E.kb.j(0.85),B.r,1.6)
s=A.aB(n,A.p(n,D.bXS,B.f,n,n,new A.o(B.w.j(0.3),n,A.J(E.kb.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ddC(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.w.j(0.3)
p=A.J(E.kb.j(0.5),B.r,1)
w=A.p(n,A.B(A.a([s,B.bd,D.bFI,A.p(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fgr,n,n,n),B.f,n,n,new A.o(q,n,p,r,n,n,B.n),n,n,n,n,B.h4,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.o(n,n,v,w,n,D.c2M,B.n),n,n,n,At.Nj,D.bxL,n,n,n)
if(o.e)k=D.adW
else k=k.length===0?D.b94:A.cy(new C.ddD(k))
return A.c7(n,D.Yg,new A.an(B.a_,n,B.b0,B.t,A.a([D.aO4,A.bl(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],l),n),n,!1,!1,n,n)},
bEj(d){var w,v,u=this,t=null,s=u.b8M(d),r=d.c,q=x.p,p=A.a([A.bT(0,A.eN(B.A,new A.a6(300,420,new C.Z9(d.b,s,r,t),t),B.f,B.dw),0,0,0)],q)
if(u.a.e)p.push(A.ao(t,A.aB(t,A.p(t,D.bXb,B.f,t,t,new A.o(B.w.j(0.55),t,A.J(B.aZ,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ddu(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a1,t,t,t,D.fg1,t,t,t)
v=r===1?"page":"pages"
return A.aB(t,A.x(A.a([new A.fE(0.7142857142857143,new A.an(B.a_,t,B.aa,B.t,p,t),t),B.O,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kz.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ddv(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.Km.prototype={}
C.Z9.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dK(D.zi,new C.cLL(m),new C.cLM()),j=m.c,i=D.Da.h(0,j.e),h=A.b1(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mQ:B.b8
v=new C.cLN(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.ehw,28)],x.V)
u=x.p
t=A.a([A.bT(0,A.b4(l,l,l,new C.bdj(j.x,h,l),B.ax),0,0,0),A.ao(0,A.p(l,l,B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aP(3,3)
t.push(new A.cN(8,40+s*46,l,l,l,l,A.p(l,l,B.f,l,l,new A.o(h.j(0.7),l,l,new A.bg(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.ale,8,0.85,2.2),v.$4(D.bCD,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.ale,8,0.85,2.4))
else if(r==="corners")t.push(A.bT(0,new A.D(D.bCz,A.b4(l,l,l,new C.bda(h,l),B.ax),l),0,0,0))
r=A.X(D.azG[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a1,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.awW,l,l),B.K,l,l)
p=A.p(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aA,q,B.ad,p,B.ad,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cE,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aN,A.d(r,l,2,B.a1,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bT(0,new A.D(D.bD3,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ao(l,A.b4(l,l,l,new C.aHW(l),D.f5w),l,l,l,46,0,l))
return A.p(l,A.bx(D.acy,new A.an(B.a_,l,B.aa,B.t,t,l),B.ap),B.f,l,l,new A.o(l,l,l,D.acy,i,new A.a9(B.ay,B.aE,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bdj.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=new A.e9()
f.d4(11)
switch(this.b){case"plain":return
case"linen":$.S()
w=A.I()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=d.a,s=0;s<v;s+=4){r=w.G()
t.drawLine.apply(t,[0,s,u,s,r])
r.delete()}$.S()
q=A.I()
q.r=B.c.j(0.05).gp(0)
q.c=1
for(p=0;p<u;p+=4){r=q.G()
t.drawLine.apply(t,[p,0,p,v,r])
r.delete()}break
case"stars":for(v=e.a,u=e.b,t=this.c,o=d.a,n=0;n<70;++n){m=f.ah()
l=f.ah()
k=f.ah()
$.S()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=t.j(0.25+f.ah()*0.5).gp(0)
r=j.G()
o.drawCircle(m*v,l*u,0.6+k*1.6,r)
r.delete()}break
case"rays":v=e.a*0.55
u=e.b
t=u*0.1
for(o=d.a,m=this.c,l=x.v,n=0;n<14;++n){i=0.47123889803846897+n*0.1691626813471427
k=$.S()
j=A.a([],l)
h=new A.aG(k.r,B.ah,null,null,j)
j.push(new A.aY(v,t))
k=i-0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
k=i+0.04
j.push(new A.aq(v+Math.cos(k)*u*1.4,t+Math.sin(k)*u*1.4))
j.push(new A.bt())
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=m.j((n&1)===0?0.09:0.03).gp(0)
r=k.G()
k=h.gbw().a.snapshot()
o.drawPath((h.e=new A.cm(k)).a,r)
r.delete()}break
default:$.S()
w=A.I()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,t=d.a,n=0;n<260;++n){o=f.ah()
m=f.ah()
l=f.ah()
r=w.G()
t.drawCircle(o*v,m*u,0.8+l*1.8,r)
r.delete()}$.S()
g=A.I()
g.r=B.c.j(0.035).gp(0)
for(n=0;n<120;++n){o=f.ah()
m=f.ah()
l=f.ah()
r=g.G()
t.drawCircle(o*v,m*u,0.6+l*1.2,r)
r.delete()}}},
aw(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bda.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=$.S(),k=A.I(),j=this.b
k.r=j.j(0.9).gp(0)
k.b=B.ab
k.c=2.4
k.d=B.bE
for(w=e.a,v=e.b,v=[D.eWM,new A.cw([w,0,-1,1]),new A.cw([0,v,1,-1]),new A.cw([w,v,-1,-1])],w=d.a,u=x.v,l=l.r,t=0;t<4;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aG(l,B.ah,null,null,s)
s.push(new A.aY(r+p*34,q))
s.push(new A.aq(r,q))
s.push(new A.aq(r,q+o*34))
m=k.G()
s=n.gbw().a.snapshot()
w.drawPath((n.e=new A.cm(s)).a,m)
m.delete()
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=j.j(0.9).gp(0)
m=s.G()
w.drawCircle(r+p*9,q+o*9,3,m)
m.delete()}},
aw(d){return!d.b.A(0,this.b)}}
C.ux.prototype={}
C.Zs.prototype={
R(){return new C.bdh()}}
C.bdh.prototype={
goc(){var w=this.d
return w===$?this.d=this.a.c:w},
gyy(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.as(new A.b9(w.b,B.b2,B.aO),$.au())}return v},
gaBL(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.as(new A.b9(w.c,B.b2,B.aO),$.au())}return v},
garz(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.as(new A.b9(w.y,B.b2,B.aO),$.au())}return v},
q(){var w=this,v=w.gyy(0),u=v.S$=$.au()
v.P$=0
v=w.gaBL()
v.S$=u
v.P$=0
v=w.garz()
v.S$=u
v.P$=0
w.a1()},
asc(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.iO(s,s,s,new A.y(t==null?u:t,s,s,s,s,s,s,s,s,s,s,s),s,new C.d4A(this,f,u),e===u,s,s,s,s))}return A.bX(B.bC,r,B.bq,s,6,8)},
axR(d){var w=null,v=B.c.j(0.07)
return A.br(w,new A.b5(4,A.m(14),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lP,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goc(),a0=f.gyy(0),a1=a0.a.a,a2=f.gaBL(),a3=a2.a.a,a4=f.garz(),a5=d.bdn(a4.a.a,a3,a1)
a1=x.w
a3=A.aJ(a6,e,a1).w
a1=A.aJ(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a6(190,260,A.eN(B.A,new A.a6(270,370,new C.Z9(a5,d,f.a.e,e),e),B.f,B.dw),e),e,e,e)
a0=A.aL(e,B.Y,!1,e,!0,B.t,e,A.aM(),a0,e,e,e,e,e,2,f.axR("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d4Z(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.d9,!0,B.a3,e,B.an,e,e,e,e)
a2=A.aL(e,B.Y,!1,e,!0,B.t,e,A.aM(),a2,e,e,e,e,e,2,f.axR("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d5_(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.d9,!0,B.a3,e,B.an,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zi[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aZ
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.p(e,e,B.f,e,e,new A.o(e,e,new A.bK(o,o,o,o),e,e,new A.a9(B.ay,B.aE,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aB
v.push(A.aB(e,A.x(A.a([p,B.cL,new A.y(t.b,e,new A.F(!0,q,e,e,e,e,10.5,B.Q,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d50(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bX(B.bC,v,B.bq,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b6.j(0.35):B.c.j(0.07)
m=new A.aP(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eH:B.L,2,B.r,-1)
q.push(A.aB(e,A.p(e,A.X(D.azG[n],B.c,e,e,e,24),B.f,e,e,new A.o(p,e,new A.bK(o,o,o,o),new A.bg(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d51(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bX(B.bC,q,B.bq,e,8,8)
a4=A.aL(e,B.Y,!1,e,!0,B.t,e,A.aM(),a4,e,e,e,e,e,2,f.axR("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ai,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d52(f),e,e,e,!1,e,e,!1,e,!0,e,B.a9,e,e,e,e,e,e,e,e,e,e,e,B.d9,!0,B.a3,e,B.an,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,L.vk,e,e,e)
m=A.a([],w)
for(l=D.Da.gdS(D.Da),l=l.gaf(l);l.C();){k=l.gT(l)
j=A.b1(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eH:B.aZ
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.p(e,e,B.f,e,e,new A.o(j,e,new A.bK(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aB
m.push(A.aB(e,A.x(A.a([j,B.bD,new A.y(i,e,new A.F(!0,h,e,e,e,e,10,B.Q,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e)],w),B.m,e,B.e,B.P,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d53(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bX(B.bC,m,B.bq,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,L.vk,e,e,e)
k=f.goc()
return new A.D(new A.Q(0,0,0,a3.f.d),A.bl(!0,new A.cU(new A.aZ(0,1/0,0,a1.a.b*0.92),A.cf(A.a([D.fLx,B.ad,d,B.aN,a0,B.W,a2,B.aA,D.fRL,B.O,v,B.aA,D.fLG,B.O,q,B.aA,a4,B.aA,p,B.O,m,B.aA,l,A.kP(e,9,""+B.k.V(f.goc().f),36,18,new C.d54(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,L.vk,e,e,e),B.am,f.asc(D.a5m,f.goc().r,new C.d55(f),D.dx1),B.ad,A.d("BORDER",e,e,e,e,e,e,L.vk,e,e,e),B.am,f.asc(D.a4I,f.goc().w,new C.d56(f),D.dx7),B.ad,A.d("COVER MATERIAL",e,e,e,e,e,e,L.vk,e,e,e),B.am,f.asc(D.a4D,f.goc().x,new C.d58(f),D.dyA),B.am,A.iI(e,B.b6,e,B.af,e,new C.d59(f),e,e,e,D.fFL,f.goc().z),B.bu,A.bE(D.fKf,e,new C.d5a(f,a6),A.bo(B.b6,e,e,e,e,B.oC,e,e,new A.b7(A.m(16),B.a0),e,e,e))],w),e,Z.akL,e,e,B.ag,!0),e),!0,!1,B.af,!0,!0),e)}}
C.aHW.prototype={
a3(d,e){var w,v,u,t=new A.aG($.S().r,B.ah,null,null,A.a([],x.v))
t.D(new A.aY(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.bt())
u=A.I()
u.sam(D.c3s.aB(0,new A.a3(0,0,0+w,0+v)))
d.aG(t,u)},
aw(d){return!1}}
C.biC.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a6.a,a2=a6.b,a3=0+a1,a4=0+a2
$.S()
w=A.I()
w.sam(D.c2s.aB(0,new A.a3(0,0,a3,a4)))
a5.aP(new A.a3(0,0,a3,a4),w)
v=B.k.dd(a2/112)
u=new A.e9()
u.d4(4)
for(w=a5.a,t=x.O,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a1;){m=14+u.ah()*20
l=56+u.ah()*40
k=D.d3e[u.aq(9)]
j=u.aq(14)
J.bm(w.save())
if(j===0){j=n+m
w.translate(j,r)
w.rotate(-10.313240312354818,0,0)
w.translate(-j,o)}j=r-l
i=new A.a3(n,j,n+m,j+l)
h=A.bu(i,B.hl)
g=new A.ap(B.R,B.N,B.U,B.V,B.S)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sam(new A.a9(B.a5,B.a8,B.x,A.a([f,k,e],t),a0,a0).aB(0,i))
d=g.G()
w.drawRRect(A.el(h),d)
d.delete()
h=n+2
j+=10
g=h+(m-4)
e=new A.ap(B.R,B.N,B.U,B.V,B.S)
e.r=E.kb.j(0.55).gp(0)
d=e.G()
w.drawRect(A.bH(new A.a3(h,j,g,j+2)),d)
d.delete()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=E.kb.j(0.4).gp(0)
d=j.G()
w.drawRect(A.bH(new A.a3(h,q,g,p)),d)
d.delete()
w.restore()
j=u.aq(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.sam(D.c1P.aB(0,new A.a3(0,r,a3,q)))
d=p.G()
w.drawRect(A.bH(new A.a3(0,r,a3,q)),d)
d.delete()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.w.j(0.5).gp(0)
p.z=B.lL
d=p.G()
w.drawRect(A.bH(new A.a3(0,q,a3,q+14)),d)
d.delete()}w=A.I()
w.r=D.bcS.j(0.72).gp(0)
a5.aP(new A.a3(0,0,a3,a4),w)
w=a1*0.5
a2*=0.36
a1*=0.95
a4=A.I()
a4.sam(new A.c2(B.A,0.5,B.x,a0,0,A.a([D.bkV.j(0.22),B.L],t),a0,a0).aB(0,A.bY(new A.t(w,a2),a1)))
a5.ad(new A.t(w,a2),a1,a4)},
aw(d){return!1}}
C.bbs.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aN(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cN(14,w*2,v*2.2,v*2,o,o,new A.l_(new A.o(A.ar(D.kz,D.bpP,w/4),o,new A.bK(B.a0,new A.ay(B.w.j(0.12),1,B.r,-1),B.a0,B.a0),B.Ld,o,o,B.n),B.bg,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aJG,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aP(2,2)
t.push(A.p(o,o,B.f,o,o,new A.o(E.kb.j(0.6),o,o,new A.bg(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.p(o,A.x(t,B.m,o,B.qx,B.i,0,B.p),B.f,o,o,new A.o(o,o,o,D.b1h,u,D.c3q,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dr,18)],v)
t=A.ao(o,A.b4(o,o,o,new C.aHW(o),D.f5r),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aVz(p.y,r,I.iP,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aL(o,B.Y,!1,o,!0,B.t,o,A.aM(),p.r,o,o,o,o,o,2,A.br(o,B.eG,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,I.iP.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.fuF,!0,B.a3,o,B.an,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,I.iP.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.W,A.E(A.aL(o,B.Y,!1,o,!0,B.t,o,A.aM(),p.w,o,o,o,o,o,2,A.br(o,B.eG,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,I.iP.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ai,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,D.flk,!0,B.a3,B.A8,B.an,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fux,o,o,o),B.au,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,I.iP.j(0.5),o,o,o,o,o,o,o,o,11,B.cE,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.O,A.B(A.a([A.E(A.p(o,o,B.f,D.Fx.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fC,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.Fx.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.p(o,o,B.f,D.Fx.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aA],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,I.iP.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Yo(A.cS(A.a([A.cS(o,o,o,o,o,o,o,o,o,D.fow,B.a.ar(k,0,1)),A.cS(o,o,o,o,o,o,o,o,o,o,B.a.b7(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,I.iP.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cg(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ag)}s.push(A.E(n,1))
s.push(new A.D(B.hZ,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,I.iP.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.B(A.a([u,A.E(A.p(o,A.bx(B.Ld,new A.an(B.a_,o,B.aa,B.t,A.a([t,new A.D(D.bC5,A.x(s,B.ak,o,B.e,B.i,0,B.p),o),A.ao(0,A.c4(o,new A.o(o,o,o,o,o,new A.a9(B.a5,B.a8,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bg),o,o,0,o,0,22)],m),o),B.ap),B.f,o,o,new A.o(o,o,o,B.Ld,v,D.c3Y,B.n),o,o,o,o,o,o,o,o),1)],m),B.ak,o,B.e,B.i,0,o,o))
return new A.an(B.a_,o,B.aa,B.t,l,o)}}
C.ala.prototype={
R(){return new C.alb(new A.eA(0,$.au()),new C.bRD(),new C.alt(),D.hpq,null,null)},
gcZ(){return this.d}}
C.a19.prototype={
a5(){return"_Step."+this.b}}
C.alb.prototype={
gC4(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bCW(w.c,6,w.e,!1)
u.d!==$&&A.bI()
u.d=v
t=v}return t},
gh4(d){var w,v=this,u=v.e
if(u===$){w=C.Mz(v.a.c)
v.e!==$&&A.bI()
v.e=w
u=w}return u},
gTv(){var w=this.gh4(0)
return w.gyS()==null?"Babu":B.a.i(w.gyS().b)},
Z(){var w,v=this
v.a2()
w=v.gh4(0).gyS()
w=w==null?null:w.c
v.r.b=w===D.og
w=v.qQ(new C.bPZ(v))
w.h2(0)
v.x!==$&&A.aQ()
v.x=w
v.a25("Come closer, my children. I am "+v.gTv()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
q(){var w=this,v=w.x
v===$&&A.c()
v.q()
v=w.y
if(v!=null)v.a4(0)
v=w.z
if(v!=null)v.a4(0)
w.w.q()
v=w.f
v.S$=$.au()
v.P$=0
w.btW()},
a25(d){var w=this,v=w.y
if(v!=null)v.a4(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.df(D.ajl,new C.bPT(w))},
bqm(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a4(0)
v.m(new C.bQ1(v))},
adk(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bqf(){return this.b8i()},
b8i(){var w=this,v=w.gC4()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bPU(w))
w.a25(u)
v=w.z
if(v!=null)v.a4(0)
w.z=A.cI(B.m3,new C.bPV(w))},
cHU(){var w=this
w.m(new C.bPY(w))
w.a25(w.gC4()[w.as].a)},
KH(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.abI)return
w=p.gC4()
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
t.r=s.a+1.5}q=new A.e9()
q.d4(v*7+d)
p.m(new C.bPX(p,d,u,q))
p.a25(u?D.div[q.aq(4)]+" "+w[p.as].d:D.dfd[q.aq(3)]+" "+w[p.as].d)},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gC4()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bFc(t.at,t.ay,p)
t.m(new C.bQ_(t,s))
t.a25(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.Bx(t.a.d,s),$async$kF)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.By(r.d,r.c.a,"fire",t.at*10),$async$kF)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bQ0())
w=1
break
case 4:++t.as
t.b8i()
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c7(v,D.Xo,new A.an(B.a_,v,B.aa,B.t,A.a([A.bT(0,new A.ey(A.b4(v,v,v,new C.aVE(u,w.r,w.w,u),B.ax),v),0,0,0),A.bl(!0,A.x(A.a([w.c9g(0),B.b1,w.bP4()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0)],t),v),v,!1,!1,v,v)},
c9g(d){var w,v,u,t=this,s=null,r=A.aF(s,s,s,s,B.P4,s,s,s,new C.bPW(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gC4().length;++w){v=t.as
if(w<v||t.Q===D.aYW)v=B.cJ
else v=w===v?B.c:B.aZ
u=new A.aP(4,4)
p.push(A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bg(u,u,u,u),s,s,B.n),s,7,s,D.bxv,s,s,s,22))}p=A.E(A.x(A.a([D.fCw,A.B(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.m(14)
u=A.J(B.fr,B.r,1)
return new A.D(D.bDf,A.B(A.a([r,p,A.p(s,A.d("\ud83d\udd25 "+B.k.V(t.cy*100)+"%",s,s,s,s,s,s,B.iK,s,s,s),B.f,s,s,new A.o(B.aS,s,u,v,s,s,B.n),s,s,s,s,B.h4,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bP4(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.gh4(0).gyS()
if(h==null)w=1
else w=h.c===D.og?0:1
v=j.dx
u=j.db
t=D.q_.j(0.96)
s=A.m(22)
r=A.J(B.cJ,B.r,3)
q=A.b4(i,i,i,new C.bo6(w,i),B.ax)
p=A.d(j.Q===D.abI?j.gTv()+" asks":"Elder "+j.gTv(),i,i,i,i,i,i,D.aSP,i,i,i)
o=j.db
o=B.a.ar(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aB(B.c9,A.B(A.a([new A.a6(62,62,q,i),B.at,A.E(A.x(A.a([p,B.bD,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aT5,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbql(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.a9u("Sit down by the fire",j.gbqe()),i,i,i)
break
case 1:v=A.at(j.a9u("Ask me, Elder",j.gcHT()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gC4()[j.as].b,m<u.length;++m){q=new A.aP(14,14)
l=new A.ay(D.lv,2.5,B.r,-1)
v.push(A.aB(i,A.p(i,new A.y(u[m],i,D.aT1,i,B.K,i,i,i,i,i,i,i),B.f,i,D.ad9,new A.o(D.aik,i,new A.bK(l,l,l,l),new A.bg(q,q,q,q),i,i,B.n),i,i,i,i,U.vX,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bPQ(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bX(B.bC,v,B.bq,i,8,8)
break
case 3:v=j.fr
u=v?B.la:Ah.ao2
u=A.X(u,v?B.ed:D.lv,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.ed:D.lv,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gC4().length?"Finish":"Next story"
v=A.B(A.a([u,B.ac,q,j.a9u(v,j.gq5(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gC4().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aTk,i,i,i)],n)
u=j.cx
if(u>0){u=C.aPT(u)
q=C.aPT(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.aa9,i,i,i))}v.push(B.O)
v.push(j.a9u("Back to the games",new C.bPR(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.p(i,A.x(A.a([o,B.W,v],n),B.E,i,B.e,B.P,0,B.p),B.f,i,i,new A.o(t,i,r,s,D.aB6,i,B.n),i,i,i,B.ya,B.bf,i,i,i)},
a9u(d,e){var w=null,v=A.m(16),u=A.J(B.cJ,B.r,2)
return A.aB(w,A.p(w,A.d(d,w,w,w,w,w,w,A1.K2,w,w,w),B.f,w,w,new A.o(D.lv,w,u,v,w,w,B.n),w,w,w,w,D.bAZ,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bo6.prototype={
a3(d,e){X.fP9(d,e.ei(B.I),e.gdC()*0.45,this.b,0,0.4)},
aw(d){return d.b!==this.b}}
C.aAS.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.bRD.prototype={}
C.rZ.prototype={}
C.bo7.prototype={}
C.alt.prototype={
Me(d){var w,v=this
if(v.a==null||!J.A(v.b,d)){w=v.a
if(w!=null)w.q()
v.a=C.i3H(d)
v.b=d}w=v.a
w.toString
return w},
q(){var w=this.a
return w==null?null:w.q()}}
C.aVE.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.b.a,k=n.c,j=d.a,i=n.d.Me(e).b
i===$&&A.c()
i=i.a
i===$&&A.c()
i=i.a
i.toString
j.drawPicture(i)
i=e.a
w=e.b
v=Math.min(i/450,w/900)
J.bm(j.save())
j.translate((i-450*v)/2,(w-900*v)/2)
d.bW(0,v)
n.cxG(d,l)
n.bNG(d,l)
n.cFJ(d,l,k)
u=0.8+0.2*Math.sin(l*8)*Math.sin(l*3.7)+k.w*0.4
J.bm(j.save())
j.translate(225,580)
d.p6(0,1,0.42)
t=240*(0.6+0.5*k.w)
$.S()
s=A.I()
r=x.O
q=x.n
s.sam(A.tp(B.I,t,A.a([D.boG.j(0.55*u),G.MC.j(0.2*u),B.L],r),A.a([0,0.5,1],q),B.x,m,m,0))
d.ad(B.I,t,s)
j.restore()
p=A.a([new A.z(528,new C.bRv(n,d,l,k)),new A.z(540,new C.bRw(n,d,l,k)),new A.z(546,new C.bRx(n,d,l,k)),new A.z(574,new C.bRy(n,d,l,k)),new A.z(612,new C.bRz(n,d,l,k)),new A.z(650,new C.bRA(n,d,l,k)),new A.z(656,new C.bRB(n,d,l,k))],x.E)
B.d.aW(p,new C.bRC())
for(o=0;o<7;++o)p[o].b.$0()
n.bEC(d,l,k)
n.bRc(d,l)
j.restore()
$.S()
j=A.I()
j.sam(A.tp(new A.t(i/2,w*0.6),e.gani()*0.75,A.a([B.L,D.bcM],r),A.a([0.55,1],q),B.x,m,m,0))
d.aP(new A.a3(0,0,0+i,0+w),j)},
aw(d){return d.c!==this.c||d.d!==this.d},
cxG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e9()
g.d4(3)
for(w=d.a,v=0;v<36;++v){u=g.ah()
t=g.ah()
s=Math.sin(e*(1.5+g.ah()*2)+v)
r=g.ah()
s=B.c.j(0.25+0.7*(0.5+0.5*s))
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=s.gp(0)
p=q.G()
w.drawCircle(u*450,20+t*300,0.8+r*1.1,p)
p.delete()}o=B.k.F(e,17)/1.2
if(o<1){n=new A.t(60+o*220,70+o*90)
d.bo(n,n.aF(0,D.eh3),C.it(B.c.j((1-o)*0.9),1.6))}for(u=e*0.035,t=e*9,s=x.v,m=0;m<3;++m){l=B.k.F(u+m*0.05,1)
r=-20+l*500
q=120+Math.sin(l*9+m)*14+m*12
k=Math.sin(t+m*2)
j=$.S()
i=A.a([],s)
j=new A.aG(j.r,B.ah,null,null,i)
k=q+k*4
i.push(new A.aY(r-6,k))
h=q-3
i.push(new A.c5(r-2,h,r,q))
i.push(new A.c5(r+2,h,r+6,k))
r=new A.ap(B.R,B.N,B.U,B.V,B.S)
r.b=B.ab
r.c=1.6
r.r=D.bfs.gp(0)
r.d=B.bE
r.e=B.dT
p=r.G()
r=j.gbw().a.snapshot()
w.drawPath((j.e=new A.cm(r)).a,p)
p.delete()}},
bNG(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=0.75+0.25*Math.sin(a0*9)*Math.sin(a0*5.3)
for(w=a0*0.12,v=d.a,u=0.78*e,t=0.7*e,s=0;s<3;++s){r=D.ayd[s]
q=r.a
p=r.c
o=q+p*0.1
n=r.b
m=r.d
l=n-m*0.38
k=A.bL(new A.t(o,l),m*0.74,p*0.5)
j=O.Mv.j(u)
$.S()
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=j.gp(0)
h=i.G()
v.drawOval(A.bH(k),h)
h.delete()
p=A.bL(new A.t(o+0,l+m*0.1),m*0.4,p*0.28)
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=O.xD.j(t).gp(0)
h=l.G()
v.drawOval(A.bH(p),h)
h.delete()
for(p=q*0.01,m=n-m-r.e*0.9,g=0;g<5;++g){f=B.k.F(w+g/5+p,1)
o=Math.sin(f*6+g)
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.r=D.afR.j(0.16*(1-f)).gp(0)
h=n.G()
v.drawCircle(q+o*6+f*18,m-f*70,4+f*12,h)
h.delete()}}},
cFJ(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
C.bCk(d,D.eh_,0.9,a0,D.hlx,!1,!1,D.abG,1,!1)
w=$.S().r
v=x.v
u=new A.aG(w,B.ah,e,e,A.a([],v))
u.D(new A.aY(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bt())
t=A.I()
t.r=D.ahF.gp(0)
d.aG(u,t)
C.bCk(d,D.eh1,0.95,a0,D.hls,!1,!1,D.abH,1,!0)
t=new A.aG(w,B.ah,e,e,A.a([],v))
t.D(new A.aY(417,510))
t.D(new A.c5(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c5(431,553,421,548))
t.D(new A.bt())
u=A.I()
u.r=G.Fd.gp(0)
d.aG(t,u)
u=A.bL(D.eh0,8,28)
t=A.I()
t.r=D.bqV.gp(0)
d.dO(u,t)
C.bCk(d,new A.t(-30+B.k.F(a0/26,1)*510,492),0.82,a0,D.hly,!0,!1,D.Wk,1,!1)
t=B.k.F(a0/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.dO(A.bL(new A.t(s+q*16,r-6),16,11),C.it(D.ahx,1.8))
u=q<0
C.bCk(d,new A.t(s-q*6,r),0.62,a0,D.hlA,!1,u,D.Wk,2.2,!1)
C.bCk(d,new A.t(s-q*32,r+4),0.58,a0+1,D.hlw,!1,u,D.Wk,2.2,!1)
this.bTS(d,D.egF,a0)
for(u=d.a,t=a0*0.5,p=a0*4,o=0;o<3;++o){n=88+o*17+Math.sin(t+o)*6
m=520+B.o.F(o,2)*6
l=Math.max(0,Math.sin(p+o*2))*4
k=A.bL(new A.t(n,m),8,11)
j=o===1
i=j?D.aht:D.ai2
h=new A.ap(B.R,B.N,B.U,B.V,B.S)
h.r=i.gp(0)
g=h.G()
u.drawOval(A.bH(k),g)
g.delete()
k=j?D.aht:D.ai2
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=k.gp(0)
g=j.G()
u.drawCircle(n+5,m+(-3+l),2.6,g)
g.delete()
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.b=B.ab
j.c=1
j.r=B.aC.gp(0)
j.d=B.bE
j.e=B.dT
g=j.G()
u.drawLine.apply(u,[n+7.5,m+(-2+l),n+10,m+(-1.5+l),g])
g.delete()
n+=-1
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.b=B.ab
j.c=1
j.r=B.aC.gp(0)
j.d=B.bE
j.e=B.dT
g=j.G()
u.drawLine.apply(u,[n,m+4,n,m+8,g])
g.delete()}f=a0<a1.f
u=A.bL(D.a7i,15+Math.sin(a0*2)*0.8,40)
t=A.I()
t.r=D.agd.gp(0)
d.dO(u,t)
u=A.bL(D.a7i.a9(0,new A.t(-14,f?-9:-2)),12,15)
t=A.I()
t.r=D.bhv.gp(0)
d.dO(u,t)
t=new A.aG(w,B.ah,e,e,A.a([],v))
t.D(new A.aY(130,592-(f?16:6)))
t.D(new A.aq(134,592-(f?22:9)))
t.D(new A.aq(138,592-(f?16:6)))
t.D(new A.bt())
u=A.I()
u.r=D.bhF.gp(0)
d.aG(t,u)
u=D.a7i.a9(0,new A.t(-17,f?-9:-2))
t=A.I()
t.r=B.hX.gp(0)
d.ad(u,1.1,t)
v=new A.aG(w,B.ah,e,e,A.a([],v))
v.D(new A.aY(168,590))
w=Math.sin(a0*8)
v.D(new A.c5(180,588+w*(f?6:0),178,595))
d.aG(v,C.it(D.agd,3.5))},
bTS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=Math.max(0,Math.sin(f*0.6))*9,j=e.a9(0,new A.t(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=j.a,u=j.b,t=u+3,s=f*2,r=u+16,q=d.a,p=0;p<4;++p){o=w[p]
n=Math.sin(s+o)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.b=B.ab
m.c=2
m.r=D.Xz.gp(0)
m.d=B.bE
m.e=B.dT
l=m.G()
q.drawLine.apply(q,[v+o,t,v+(o+n*1.5),r,l])
l.delete()}w=A.bL(j,17,32)
s=$.S()
r=A.I()
r.r=D.Fb.gp(0)
d.dO(w,r)
r=A.bL(j.a9(0,D.eg5),7,26)
w=A.ar(D.Fb,B.w,0.12)
w.toString
q=A.I()
q.r=w.gp(0)
d.dO(r,q)
s=new A.aG(s.r,B.ah,null,null,A.a([],x.v))
s.D(new A.aY(v+13,u-3))
s.D(new A.aq(v+22,u-8+k))
s.D(new A.aq(v+20,u+k-0.5))
s.D(new A.aq(v+12,t))
s.D(new A.bt())
t=A.I()
t.r=D.Fb.gp(0)
d.aG(s,t)
t=A.bL(j.a9(0,new A.t(24,-7+k)),9,12)
s=A.I()
s.r=D.Fb.gp(0)
d.dO(t,s)
s=-11+k
d.bo(j.a9(0,new A.t(22,s)),j.a9(0,new A.t(21,-17+k)),C.it(D.Xz,1.6))
d.bo(j.a9(0,new A.t(26,s)),j.a9(0,new A.t(28,-16+k)),C.it(D.Xz,1.6))
s=j.a9(0,new A.t(26,-8+k))
t=A.I()
t.r=B.w.gp(0)
d.ad(s,0.9,t)
d.bo(j.a9(0,new A.t(26,-3+k)),j.a9(0,new A.t(26,1+k)),C.it(D.bkh,1.4))
d.bo(j.a9(0,D.ej3),j.a9(0,new A.t(-19,-7+Math.sin(f*7)*2)),C.it(D.Fb,2.4))},
bRa(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
for(w=a5.a,v=0;v<14;++v){u=v*3.141592653589793*2/14
t=Math.cos(u)
s=Math.sin(u)
if(Math.sin(u)<0){t=A.bL(new A.t(225+t*36,574+(s*13+6)),8,11)
$.S()
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.bpB.gp(0)
r=s.G()
w.drawOval(A.bH(t),r)
r.delete()}}t=A.bL(D.a7k.a9(0,B.cx),17,52)
$.S()
s=A.I()
s.r=D.bcn.gp(0)
a5.dO(t,s)
s=A.bL(D.a7k.a9(0,B.cx),12,44)
t=D.bfQ.j(0.6+0.3*Math.sin(a6*6))
q=A.I()
q.r=t.gp(0)
a5.dO(s,q)
for(p=0;p<3;++p){u=D.deI[p]
t=225+Math.cos(u)*3
s=Math.cos(u)
q=Math.sin(u)
o=Math.cos(u)
n=Math.sin(u)
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.b=B.ab
m.c=7
m.r=D.Fq.gp(0)
m.d=B.bE
m.e=B.dT
r=m.G()
w.drawLine.apply(w,[t+s*24,579+q*4,t-o*24,579-n*4,r])
r.delete()
n=Math.cos(u)
o=Math.sin(u)
q=Math.cos(u)
s=Math.sin(u)
m=D.B3.j(0.6)
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.b=B.ab
l.c=2
l.r=m.gp(0)
l.d=B.bE
l.e=B.dT
r=l.G()
w.drawLine.apply(w,[t+n*24,579+(o*4-2),t-q*24,579-(s*4+2),r])
r.delete()}k=46+80*a7.w
j=[D.eTG,D.eU7,D.eV_,D.eVg,D.eUY]
for(t=a6*8,s=a6*15,q=a6*3.3,o=x.v,i=0;i<3;++i){h=[1,0.72,0.42][i]
g=[D.bn5,D.bjE,D.bp4][i]
for(n=i===0,m=1-i*0.15,p=0;p<5;++p){f=j[p]
l=f.b
e=f.c
d=k*l*h*(0.9+0.12*Math.sin(t+e)+0.06*Math.sin(s+e*2))
a0=Math.sin(q+e)*5*(d/k)
a1=225+f.a*m
a2=(12+8*a7.w)*l*h
l=$.S()
e=A.a([],o)
a3=new A.aG(l.r,B.ah,null,null,e)
e.push(new A.aY(a1-a2,578))
l=a1+a0*0.6
e.push(new A.kZ(a1-a2*1.1,578-d*0.45,l-a2*0.2,578-d*0.7,a1+a0,578-d))
e.push(new A.kZ(l+a2*0.3,578-d*0.65,a1+a2*1.15,578-d*0.4,a1+a2,578))
e.push(new A.bt())
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=g.j(n?0.9:0.95).gp(0)
r=l.G()
l=a3.gbw().a.snapshot()
w.drawPath((a3.e=new A.cm(l)).a,r)
r.delete()}}for(t=a6*1.5,v=0;v<22;++v){a4=B.k.F(a6*(0.35+B.o.F(v,5)*0.06)+v/22,1)
s=Math.sin(v*1.9+t)
q=a7.w
o=B.o.F(v,3)
n=F.ai_.j((1-a4)*0.9)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=n.gp(0)
r=m.G()
w.drawCircle(225+s*(10+a4*26),564-a4*(110+80*q),1.2+o*0.6,r)
r.delete()}for(t=a6*0.1,s=574-k,v=0;v<6;++v){a4=B.k.F(t+v/6,1)
q=Math.sin(a4*5+v)
o=D.afR.j(0.1*(1-a4))
$.S()
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.r=o.gp(0)
r=n.G()
w.drawCircle(225+q*16+a4*12,s-a4*120,7+a4*20,r)
r.delete()}},
bRc(d,e){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=d.a,r=0;r<16;++r){q=B.k.F(r*83+Math.sin(w+r)*40+v,450)
p=420+B.o.F(r*37,300)+Math.sin(u+r*2)*26
o=Math.max(0,Math.sin(t+r*1.7))
n=D.br2.j(0.18*o)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=n.gp(0)
l=m.G()
s.drawCircle(q,p,5,l)
l.delete()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=D.bl_.j(0.9*o).gp(0)
l=m.G()
s.drawCircle(q,p,1.4,l)
l.delete()}},
c2P(d,e){switch(d){case 0:return e.b?D.hlt:D.aYu
case 1:return e.b?D.hlz:D.aYs
case 2:return D.aYr
case 3:return D.aYq
case 4:return D.aYt
default:return D.aYv}},
aBZ(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
QN(d,e,f,g){var w,v=this,u=D.a4Q[e],t=v.c2P(e,g),s=new C.bo7(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a4Q[e],l=e===0
m=B.k.E(((l?D.aJz:D.aJE).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a7o
s.as=D.DD
if(l){s.a=o?v.aBZ(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.t(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.t(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.DD
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.t(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.t(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.t(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.t(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.egd
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.ehA
if(e===4)s.as=new A.t(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.t(-3-m,p)
s.as=new A.t(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.ejZ
s.as=D.aJR}if(e===2&&g.x!=null&&f<g.y){s.a=v.aBZ(f,5)
s.b=0.4
s.as=new A.t(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aBZ(f,e*3)
s.b=0.5
s.c=0.4}}C.hrZ(d,u.a,u.b*1.2,t,s,f,e,null)},
bEC(d,e,f){var w=new C.bRu(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdc(d){return this.c}}
C.afe.prototype={
a5(){return"_Stand."+this.b}}
C.add.prototype={}
C.li.prototype={}
C.bQe.prototype={
bzi(d){var w,v,u,t,s=A.U(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
FP(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aW(r,new C.bQf())
return r},
aqj(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aLx(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.M)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
alM(d){var w,v,u=A.aX(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.c()
v=v.h(0,w)!=null&&u.M(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.c()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gyS(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aW(w,new C.bQg(this))
return B.d.gI(w)}}
C.atk.prototype={}
C.zh.prototype={}
C.ak8.prototype={
gaEh(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Z(w,new C.bLe(),A.T(w).k("Z<1>")).gL(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
ag(){var w=this
return A.G(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.Mk.prototype={
gaos(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
if(t.gaEh(0))s.push(t)}return s},
ag(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.M)(w),++s){r=w[s]
p.push(A.G(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.G(["id",this.a,"title",q,"qs",p],u,t)},
cYT(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gaos(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.M)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.li(B.a.i(s.a),p,B.d.cv(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.b9I.prototype={}
C.a9p.prototype={}
C.bgX.prototype={}
C.afc.prototype={}
C.ajn.prototype={
R(){return new C.ajo(B.bF,A.a([],x.cC),A.a([],x.e4),null,null)},
gcZ(){return this.d}}
C.ajo.prototype={
gMx(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bCW(w.c,8,w.e,!1)
u.d!==$&&A.bI()
u.d=v
t=v}return t},
gb8E(){var w,v=this,u=v.e
if(u===$){w=v.qQ(v.gc9i())
v.e!==$&&A.bI()
v.e=w
u=w}return u},
Z(){this.a2()
this.gb8E().h2(0)},
q(){this.gb8E().q()
this.btR()},
h2(d){this.m(new C.bJs(this))},
c9j(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.ft(0,v)
if(w.c!=null)w.m(new C.bJn())},
b70(){var w,v,u,t=this,s=t.r
B.d.a7(s)
w=t.gMx()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bgX(u,(u+0.5)/v,w[t.x].b[u]))},
ft(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bs(w,new C.bJt())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c5F()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.M)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMx()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.k.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.arL(v,0.8,B.cJ)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.arL(m.cy,0.8,F.n7)
m.aXP("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.arL(q,0.88,D.lv)
p=m.gMx()[m.x]
n=p.c
if(u===n){m.aXP("The right gourd fell! It was "+p.b[n]+".")
return}}}},
arL(d,e,f){var w,v,u,t=new A.e9()
t.d4(B.k.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ah()*3.141592653589793*2
w.push(new C.afc(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aXP(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.PY()}},
c5F(){var w=this
if(w.x+1>=w.gMx().length){w.PY()
return}++w.x
w.b70()},
PY(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$PY=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMx().length
r=C.bFc(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bJl())
w=2
return A.b(C.Bx(u.a.d,r),$async$PY)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.By(t.d,t.c.a,"catch",u.z),$async$PY)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bJm())
return A.h(null,v)}})
return A.i($async$PY,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.c9h()
else w=v.ch?v.c9k():A.at(new A.D(B.em,A.x(A.a([D.aUg,B.O,D.fE9,B.W,D.fKk,B.dS,C.ue("Play",v.geX(v),B.cJ,B.i2,D.fq)],x.p),B.m,u,B.e,B.P,0,B.p),u),u,u,u)
return new C.tn("Calabash Catch",w,B.fv,u)},
c9k(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.i0:B.GT
p.push(A.X(u,v?B.aw:B.bY,r,r,r,22))}p.push(B.b1)
v=s.x
u=s.gMx()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aSN,r,r,r))
p.push(B.bd)
v=A.m(14)
p.push(A.p(r,A.d(""+s.z,r,r,r,r,r,r,B.iK,r,r,r),B.f,r,r,new A.o(B.bz,r,r,v,r,r,B.n),r,r,r,r,B.G6,r,r,r))
p=A.B(p,B.m,r,B.e,B.i,0,r,r)
v=A.m(18)
t=A.J(B.cJ,B.r,3)
return A.x(A.a([new A.D(D.byN,p,r),A.p(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fon,B.K,r,r),B.f,r,r,new A.o(D.q_,r,t,v,r,r,B.n),r,r,r,B.eZ,B.bf,r,r,1/0),B.am,A.E(A.cy(new C.bJr(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
c9h(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pB,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMx().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.UI,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cf(A.a([D.b9P,u,t,B.aN,new C.I2(s,r,w.cx,v),B.aN,A.at(C.ue("Back to the games",new C.bJk(w),B.cJ,B.l9,D.fq),v,v,v)],x.p),v,B.a9,v,v,B.ag,!1)}}
C.bc6.prototype={
a3(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a6.a,a1=a6.b,a2=0+a0,a3=$.S(),a4=A.I()
a4.sam(A.jq(B.I,new A.t(0,a1),D.cYl,F.ayv,B.x,d))
a5.aP(new A.a3(0,0,a2,0+a1),a4)
a4=A.I()
a4.r=F.MF.gp(0)
a5.ad(new A.t(a0*0.82,a1*0.16),22,a4)
a4=x.v
w=A.a([],a4)
v=new A.aG(a3.r,B.ah,d,d,w)
a3=a1*0.7
v.D(new A.aY(0,a3))
for(u=0;u<=a0;u+=6){t=new A.aq(u,a3+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.by(s)
t=v.e
if(t!=null)t.a.delete()
v.e=null}v.D(new A.aq(a0,a1))
v.D(new A.aq(0,a1))
a3=$.S()
w=A.I()
w.r=D.bgK.gp(0)
a5.aG(v,w)
r=a0*0.12
a3=new A.aG(a3.r,B.ah,d,d,A.a([],a4))
w=a1*0.86
a3.D(new A.aY(r-26,w))
t=a1*0.5
s=a1*0.34
a3.D(new A.c5(r-14,t,r-10,s))
a3.D(new A.aq(r+10,s))
a3.D(new A.c5(r+14,t,r+26,w))
a3.D(new A.bt())
w=A.I()
w.r=D.af_.gp(0)
a5.aG(a3,w)
for(a3=a1*0.36,w=a1*0.24,t=a5.a,s=a1*0.22,q=0;q<4;++q){p=D.cjg[q]
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.af_.gp(0)
o.c=7
o.d=B.bE
n=o.G()
t.drawLine.apply(t,[r,a3,r+p*46,w,n])
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.aem.gp(0)
n=o.G()
t.drawCircle(r+p*50,s,18,n)
n.delete()}a3=a1*0.88
w=A.I()
w.r=D.bhD.gp(0)
a5.aP(new A.a3(0,a3,a2,a3+a1*0.12),w)
for(a2=a1*0.9,a3=a2-8,m=0;m<18;++m){w=a0*m/17
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.agu.gp(0)
s.c=2
n=s.G()
t.drawLine.apply(t,[w,a2,w+3,a3,n])
n.delete()}for(a2=this.b,a3=a2.r,w=a3.length,s=a1*0.89,q=0;q<a3.length;a3.length===w||(0,A.M)(a3),++q){l=a3[q]
if(l.e)continue
o=l.a
u=(l.b+Math.sin(a2.dx*1.7+o)*0.012)*a0
k=l.d
if(l.f){o=A.bL(new A.t(u,s),12,54)
$.S()
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.lv.j(0.6).gp(0)
n=k.G()
t.drawOval(A.bH(o),n)
n.delete()
continue}o=Math.sin(a2.dx*2+o)
J.bm(t.save())
t.translate(u,k*a1)
t.rotate(o*0.1*180/3.141592653589793,0,0)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.afB.gp(0)
n=o.G()
t.drawCircle(0,-34,14,n)
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.bm9.gp(0)
o.c=4
o.d=B.bE
n=o.G()
t.drawLine.apply(t,[0,-46,2,-56,n])
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.sam(A.tp(D.eiM,46,D.d5B,B.CX,B.x,d,d,0))
n=o.G()
t.drawCircle(0,0,34,n)
n.delete()
o=A.bL(D.eiS,8,12)
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=B.c.j(0.35).gp(0)
n=k.G()
t.drawOval(A.bH(o),n)
n.delete()
j=new A.jR(new A.eu(l.c,d,d,B.cQ,d,d,d,d,d,d,D.fmf),B.K,B.bZ,new A.jB(1),d,d,3,d,B.bW,d)
j.nZ(62)
o=j.b
k=Math.max(40,o.c+10)
o=o.a.c
i=A.bu(A.bL(B.cH,o.gbb(o)+8,k),B.fE)
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.q_.gp(0)
n=k.G()
t.drawRRect(A.el(i),n)
n.delete()
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.lv.gp(0)
k.b=B.ab
k.c=1.5
n=k.G()
t.drawRRect(A.el(i),n)
n.delete()
k=j.b
o=k.c
k=k.a.c
j.a3(a5,new A.t(-o/2,4-k.gbb(k)/2))
t.restore()}h=a2.cy*a0
a3=a2.dx
w=Math.sin(a3*4)
X.AZ(a5,new A.t(h,a1*0.93),a1*0.3,a3,!0,Math.abs(a2.db-a2.cy)*40*Math.abs(Math.sin(a2.dx*18)),2,B.dG,G.mC,!1,(w+1)/2)
g=A.bL(new A.t(h,a1*0.8),a1*0.07,a0*0.24)
a4=new A.aG($.S().r,B.ah,d,d,A.a([],a4))
w=g.a
a3=g.b
a4.D(new A.aY(w,a3))
s=g.c
a4.D(new A.aq(s,a3))
o=g.d
a4.D(new A.aq(s-8,o))
a4.D(new A.c5(g.gbL().a,o+8,w+8,o))
a4.D(new A.bt())
k=A.I()
k.r=D.Yl.gp(0)
a5.aG(a4,k)
for(a4=s-w,m=1;m<6;++m){s=w+a4*m/6
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=D.B3.gp(0)
k.c=1.4
n=k.G()
t.drawLine.apply(t,[s,a3,s+(m-3)*2,o,n])
n.delete()}s=a3+(o-a3)*0.35
o=A.I()
o.r=F.n7.gp(0)
a5.aP(new A.a3(w,s,w+a4,s+5),o)
w-=2
a3-=4
o=A.I()
o.r=D.bgP.gp(0)
a5.dO(new A.a3(w,a3,w+(a4+4),a3+8),o)
for(a3=a2.w,a4=a3.length,q=0;q<a3.length;a3.length===a4||(0,A.M)(a3),++q){f=a3[q]
w=f.a
s=f.b
o=f.f
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=f.e.j(B.k.E(o,0,1)).gp(0)
n=k.G()
t.drawCircle(w*a0,s*a1,3*o+1,n)
n.delete()}e=a2.dx-a2.go
if(e>=0&&e<1.2){a3=a2.fy
j=A.fv(d,d,d,d,A.cS(d,d,d,d,d,d,d,d,d,A.l(d,d,B.cJ.j(1-e/1.2),d,d,d,d,d,d,d,d,26,d,d,B.u,d,d,!0,d,d,d,d,d,K.CR,d,d),"+"+a3),B.a3,B.bZ,d,B.dA,B.bW)
j.el()
j.a3(a5,new A.t(a2.id*a0-j.b.c/2,a1*0.72-e*60))}},
aw(d){return!0}}
C.Qe.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aAQ(w.c,w.f,v),B.ax),s=A.m(10),r=A.J(B.bB,B.r,1.4)
return new A.a6(u+22,v,A.x(A.a([new A.a6(u,u,t,v),B.cL,A.p(v,A.d(w.d,v,1,B.a1,v,v,v,D.feX,v,v,v),B.f,v,v,new A.o(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mK,v,v,v)],x.p),B.m,v,B.e,B.P,0,B.p),v)},
gY(d){return this.e}}
C.aAQ.prototype={
a3(d,e){var w=e.ei(B.I),v=e.gdC(),u=this.c?0.8:0
return X.fP9(d,w,v*0.44,this.b,0,u)},
aw(d){return d.b!==this.b||d.c!==this.c}}
C.azf.prototype={}
C.au3.prototype={
R(){return new C.au4(A.U(x.S,x.cq),null,null)},
gcZ(){return this.d}}
C.au4.prototype={
gkK(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hwX(w.c,w.e)
u.d!==$&&A.bI()
u.d=v
t=v}return t},
gaE4(){var w=this.z
return w===$?this.z=this.WW(0):w},
giT(){var w,v=this.Q
if(v===$){w=this.gkK()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c1(w,-1,!1,x.S)}return v},
WW(d){var w,v,u,t,s=this.gkK()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.azf(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.azf(v[t],u[t],-1))
v=new A.e9()
v.d4(this.a.e*31+d)
B.d.dZ(s,v)
return s},
q(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.q()
v.r=null
u=v.eK$
u.b=!1
B.d.a7(u.a)
u=u.goi()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dT$.a.a7(0)
v.qm()}this.buj()},
cNV(d,e){var w,v,u,t,s,r=this
if(d>=r.giT().length||r.giT()[d]!==-1||B.d.t(r.giT(),e))return
w=r.gaE4()[e]
v=r.gkK()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cnm(r,e,w,v))
A.cI(B.l5,new C.cnn(r))
return}++r.r
u=A.bn(null,B.hs,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.q()
t.n(0,d,u)
r.m(new C.cno(r,d,e,w,v))
u.cq(0)},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkK()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cH(n,0,new C.cnp())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cnq(t,r))
w=5
return A.b(C.Bx(t.a.d,r),$async$kF)
case 5:t.x=f
o=t.a
w=6
return A.b(C.By(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kF)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cnr())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.q()
q.r=null
p=q.eK$
p.b=!1
B.d.a7(p.a)
p=p.goi()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dT$.a.a7(0)
q.qm()}o.a7(0)
t.m(new C.cns(t))
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pB,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.UI,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tn(q,A.cf(A.a([D.adU,w,v,B.aN,new C.I2(u,t,r.ch,p),B.aN,A.at(C.ue("Back to the games",new C.cni(d),B.cJ,B.l9,D.fq),p,p,p)],x.p),p,B.a9,p,p,B.ag,!1),B.fv,p)}w=r.gkK()
v=r.e
s=w[v]
return new C.tn(q,new A.D(B.u6,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aSI,B.K,p,p),A.E(A.cy(new C.cnj(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.fv,p)}}
C.bbB.prototype={
a3(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=null,b2=y.B,b3=b0.d,b4=new A.Z(b3,new C.cMP(),A.T(b3).k("Z<1>")).gL(0),b5=b0.b,b6=b5.a9(0,B.J_)
$.S()
w=A.I()
w.r=D.lw.j(0.18+0.1*b4).gp(0)
b7.ad(b6,70+b4*10,w)
w=b8.a
b6=b8.b
v=b5.a9(0,D.efk)
u=A.I()
u.r=B.o9.j(0.5).gp(0)
u.c=10
u.d=B.bE
b7.bo(new A.t(w/2,b6*0.98),v,u)
for(v=b0.c,u=b5.a,b5=b5.b,t=b5+90,s=x.v,b5+=46,r=x.dc,q=x.U,p=b7.a,o=0;o<v.length;++o){n=v[o]
m=n.a+0
l=B.dV.av(0,B.k.E(b3[o],0,1))
k=$.S().r
j=A.a([],s)
i=new A.aG(k,B.ah,b1,b1,j)
j.push(new A.aY(u,b5))
j.push(new A.c5((u+m)/2,t,m,n.b+-46))
if(l<1)for(n=new A.aG(k,B.ah,b1,b1,A.bq(j,!0,r)),m=A.a([],q),h=new A.tm(n,!1,m);h.C();){g=h.c
if(g===0||h.f)A.b8(A.jw(b2));--g
f=new A.Bv(h,g)
e=0
for(;;){h.il()
d=m[g].b
d===$&&A.c()
if(!(e<d.a.length()))break
h.il()
d=m[g].b
d===$&&A.c()
d=Math.min(d.a.length(),e+7)
d=new A.aG(k,n.b,b1,new A.cw([f,e,d,!0]),A.a([],s))
$.S()
a0=new A.ap(B.R,B.N,B.U,B.V,B.S)
a0.r=B.aZ.gp(0)
a0.b=B.ab
a0.c=3
a1=a0.G()
a0=d.gbw().a.snapshot()
p.drawPath((d.e=new A.cm(a0)).a,a1)
a1.delete()
e+=14}}if(l>0)for(n=new A.aG(k,i.b,i.c,b1,A.bq(j,!0,r)),m=A.a([],q),j=new A.tm(n,!1,m),h=l>0.4,g=9-3*l,d=11*l,a0=6*l;j.C();){a2=j.c
if(a2===0||j.f)A.b8(A.jw(b2));--a2
j.il()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
a3=new A.aG(k,n.b,b1,new A.cw([new A.Bv(j,a2),0,a3*l,!0]),A.a([],s))
$.S()
a4=new A.ap(B.R,B.N,B.U,B.V,B.S)
a4.r=D.FC.gp(0)
a4.b=B.ab
a4.c=g
a4.d=B.bE
a1=a4.G()
a4=a3.gbw().a.snapshot()
p.drawPath((a3.e=new A.cm(a4)).a,a1)
a1.delete()
j.il()
a3=m[a2].b
a3===$&&A.c()
a3=a3.a.length()
j.il()
a5=m[a2].Hb(a3*l)
if(h)for(a2=a5.a,a3=a2.a,a2=a2.b,a6=0;a6<4;++a6){a7=a6*1.6+o
a4=A.bL(new A.t(a3+Math.cos(a7)*14,a2+Math.sin(a7)*10),a0,d)
a8=new A.ap(B.R,B.N,B.U,B.V,B.S)
a8.r=B.bj.gp(0)
a1=a8.G()
p.drawOval(A.bH(a4),a1)
a1.delete()}}}if(b0.e)for(b3=b6*0.3,o=0;o<6;++o){a9=new A.jR(D.fer,B.a3,B.bZ,new A.jB(1),b1,b1,b1,b1,B.bW,b1)
a9.el()
a9.a3(b7,new A.t(w*(0.15+o*0.14),b3-B.o.F(o,3)*14))}},
aw(d){return!0}}
C.axZ.prototype={
R(){return new C.ay_(A.aX(x.S))},
gcZ(){return this.d}}
C.ay_.prototype={
gkK(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hxR(w.c,w.e)
u.d!==$&&A.bI()
u.d=v
t=v}return t},
Z(){this.a2()
this.b79()},
q(){var w=this.ch
if(w!=null)w.a4(0)
this.a1()},
b79(){var w=this.ch
if(w!=null)w.a4(0)
this.ch=A.df(B.rm,new C.cCm(this))},
bo1(d){var w,v=this
if(v.as||v.z.t(0,d))return
w=v.gkK()[v.e]
if(w.e[d]===w.b)v.m(new C.cCu(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cCv(v,d))
A.cI(B.iU,new C.cCw(v))}},
cTo(){var w=this
if(!w.as&&w.f<w.gkK()[w.e].d.length)w.m(new C.cCx(w))},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.e
q=t.gkK()
w=r+1>=q.length?3:4
break
case 3:r=t.ch
if(r!=null)r.a4(0)
r=t.w
q=r===q.length?15:0
s=r*6+q
t.m(new C.cCy(t,s))
w=5
return A.b(C.Bx(t.a.d,s),$async$kF)
case 5:t.y=f
q=t.a
w=6
return A.b(C.By(q.d,q.c.a,"who",t.r),$async$kF)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cCz())
w=1
break
case 4:t.m(new C.cCA(t))
t.b79()
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkK().length+" guessed",a2,a2,a2,a2,a2,a2,B.pB,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.UI,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tn(a1,A.cf(A.a([D.ba2,w,v,B.aN,new C.I2(u,t,a0.ax,a2),B.aN,A.at(C.ue("Back to the games",new C.cCo(a3),B.cJ,B.l9,D.fq),a2,a2,a2)],x.p),a2,B.a9,a2,a2,B.ag,!1),B.fv,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkK()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.Ka,B.K,a2,a2),B.W,A.at(A.ls(new C.cCp(a0,r),a2,B.b5,B.hs,a2,a2,new A.bp(a2,s,u),x.i),a2,a2,a2),B.aA],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aP(16,16)
l=new A.ay(B.cJ,2,B.r,-1)
k=o+1
w.push(new A.qT(new A.bp(0,1,u),new C.cCq(),A.p(a2,new A.ce(B.aM,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.p_(new A.y(""+k,a2,B.nL,a2,a2,a2,a2,a2,a2,a2,a2,a2),D.lv,a2,12,a2),B.at,new A.bz(1,B.bb,new A.y(v[n].d[o],a2,D.fqZ,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.o(D.q_,a2,new A.bK(l,l,l,l),new A.bg(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cv,B.bf,a2,a2,a2),B.b5,B.iU,a2,new A.bG("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bN(!1,D.fSa,a2,a2,!0,a2,a2,a2,a0.gcTn(),a2,a2),a2,a2,a2))
w.push(B.O)
if(a0.as){u=D.lw.j(0.2)
q=A.m(16)
p=A.J(D.lw,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fw,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.p(a2,A.x(A.a([m,B.W,C.ue(v,a0.gq5(a0),B.cJ,B.jT,D.fq)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.o(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bA,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.t(0,o)?B.dq:B.cJ.j(0.2)
g=new A.aP(16,16)
l=new A.ay(n.t(0,o)?B.f9:B.cJ,2,B.r,-1)
f=v[a0.e].e[o]
e=n.t(0,o)?B.bY:B.c
d=n.t(0,o)?B.wT:a2
t.push(new A.qT(new A.bp(0,i,u),new C.cCr(),A.aB(a2,A.p(a2,new A.y(f,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),a2,B.K,a2,a2,a2,a2,a2,a2,a2),B.f,a2,D.ad2,new A.o(h,a2,new A.bK(l,l,l,l),new A.bg(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jh,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cCs(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b5,B.mE,a2,new A.bG("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bX(B.fI,t,B.bq,a2,10,10))}return new C.tn(a1,A.cf(w,a2,B.akm,a2,a2,B.ag,!1),B.fv,a2)}}
C.az_.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.aGj.prototype={
aY(){this.b6()
this.b4()
this.dH()},
q(){var w=this,v=w.b5$
if(v!=null)v.a6(0,w.gdD())
w.b5$=null
w.a1()}}
C.af0.prototype={
apW(d){},
aqn(){var w=this,v=w.qQ(new C.f1h(w))
v.h2(0)
w.LE$!==$&&A.aQ()
w.LE$=v}}
C.aK6.prototype={
gbku(d){var w=this.c
return B.a.ar(w,0,Math.min(this.d,w.length))},
Vv(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.c=d
w.d=0
w.b=A.df(D.ajl,new C.fbl(w))},
bqk(d){var w=this,v=w.b
if(v!=null)v.a4(0)
w.d=w.c.length
w.a.$0()},
q(){var w=this.b
return w==null?null:w.a4(0)}}
C.alj.prototype={
R(){return new C.alk(new C.alt(),A.a([],x.t),new A.eA(0,$.au()),$,0,null,null)},
gcZ(){return this.d}}
C.alk.prototype={
gMv(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bCW(w.c,10,w.e,!0)
u.d!==$&&A.bI()
u.d=v
t=v}return t},
gh4(d){var w,v=this,u=v.e
if(u===$){w=C.Mz(v.a.c)
v.e!==$&&A.bI()
v.e=w
u=w}return u},
gqd(){var w=this.r
return w===$?this.r=new C.aK6(new C.bR0(this)):w},
gaoK(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMv()[v].c)u.push(1)
return u.length},
gbjL(){var w=this.gh4(0)
return w.gyS()==null?"Elder":B.a.i(w.gyS().b)},
Z(){this.a2()
this.aqn()},
q(){var w,v=this
v.gqd().q()
v.f.q()
w=v.LE$
w===$&&A.c()
w.q()
w=v.pV$
w.S$=$.au()
w.P$=0
v.btZ()},
cI3(){var w=this
w.m(new C.bQY(w))
w.gqd().Vv(w.gMv()[w.x].a)},
KH(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqd()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.pV$.a
v.ax=u
v.ay=u+1
v.m(new C.bQW())
A.cI(B.hs,new C.bQX(v))},
bnZ(){var w=this.gaoK(0)/this.gMv().length*100
if(w>=90)return D.eQK
if(w>=75)return D.eOQ
if(w>=60)return D.eFG
if(w>=45)return D.eJ2
return D.eA7},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cqS()
w=A.bT(0,new A.ey(A.b4(m,m,m,new C.bs4(n,n.pV$),B.ax),m),0,0,0)
if(!n.Q){v=D.q_.j(0.96)
u=A.m(20)
t=A.J(B.cJ,B.r,3)
u=A.p(m,A.x(A.a([A.d("Elder "+n.gbjL()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aTE,B.K,m,m),B.W,C.ue("Start the test",n.gBp(),B.cJ,B.iW,D.fq)],x.p),B.m,m,B.e,B.P,0,B.p),B.f,m,m,new A.o(v,m,t,u,m,m,B.n),m,m,m,m,B.bA,m,m,m)
v=u}else{v=n.x
u=n.gMv()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aTG,m,m,m)
if(n.Q){t=n.gqd()
t=t.d<t.c.length}else t=!1
if(t)u=D.f6Q
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aP(10,10)
o=new A.ay(D.B3,4,B.r,-1)
s.push(A.aB(m,A.p(m,new A.y(q[r],m,D.fi8,m,B.K,m,m,m,m,m,m,m),B.f,m,D.ad2,new A.o(D.bcR,m,new A.bK(o,o,o,o),new A.bg(p,p,p,p),m,m,B.n),m,m,m,m,B.Nq,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bQZ(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bX(B.fI,s,B.bq,new A.bG("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.oh(u,B.mD,A.pD(),B.b5,B.b5,A.Lc())],x.p),B.m,m,B.e,B.P,0,B.p)
v=u}return new C.tn("Village School",new A.an(B.a_,m,B.aa,B.t,A.a([w,A.ao(10,v,m,m,10,10,m,m)],x.p),m),B.fv,m)},
cqS(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bnZ(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMv()[v].c)g.push(v)
u=A.m(22)
t=A.J(B.cJ,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fmy,B.K,i,i)
r=A.d("Signed by Elder "+j.gbjL(),i,i,i,i,i,i,D.fld,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fqj,i,i,i),D.es7],q)
o=A.d(h.b,i,i,i,i,i,i,D.fs9,i,i,i)
n=j.gaoK(0)
m=j.gMv()
u=A.p(i,A.x(A.a([D.fDs,B.au,s,r,B.W,new A.an(B.A,i,B.aa,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.aa9,i,i,i),B.O,D.aqS],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(D.q_,i,t,u,i,i,B.n),i,i,i,i,B.ft,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aA,new C.I2(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aN,D.fTf,B.O],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.M)(g),++l){v=g[l]
r=new A.aP(14,14)
k=new A.ay(B.bz,1,B.r,-1)
p=m[v]
u.push(A.p(i,A.x(A.a([new A.y(p.a,i,B.fT,i,i,i,i,i,i,i,i,i),B.au,new A.y("You said: "+p.b[w[v]],i,D.fnI,i,i,i,i,i,i,i,i,i),new A.y(p.d,i,D.fpW,i,i,i,i,i,i,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.o(B.dq,i,new A.bK(k,k,k,k),new A.bg(r,r,r,r),i,i,B.n),i,i,i,B.cv,B.bf,i,i,i))}B.d.v(s,u)}s.push(B.aA)
s.push(A.at(C.ue("Back to the games",new C.bQS(j),B.cJ,B.l9,D.fq),i,i,i))
return new C.tn("Village School",A.cf(s,i,B.bQ,i,i,B.ag,!1),B.fv,i)}}
C.bs4.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=this.b,e=f.pV$.a,d=a1.a,a0=f.f.Me(a2).b
a0===$&&A.c()
a0=a0.a
a0===$&&A.c()
a0=a0.a
a0.toString
d.drawPicture(a0)
w=C.h5n(a2)
J.bm(d.save())
d.translate(w.a,w.b)
a1.bW(0,w.c)
if(f.Q){a0=f.gqd()
v=a0.d<a0.c.length}else v=!1
for(u=0;u<2;++u){a0=D.cSF[u]-6
$.S()
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=D.Fq.gp(0)
s=t.G()
d.drawRect(A.bH(new A.a3(a0,340,a0+12,450)),s)
s.delete()}a0=A.bu(D.a8h.cr(10),B.hQ)
$.S()
t=A.I()
t.r=D.B3.gp(0)
a1.az(a0,t)
t=A.bu(D.a8h,B.hB)
a0=A.I()
a0.sam(A.jq(new A.t(30,96),new A.t(420,346),D.daQ,g,B.x,g))
a1.az(t,a0)
r=new A.e9()
r.d4(2)
for(q=0;q<18;++q){a0=r.ah()
t=r.ah()
p=r.ah()
p=A.bL(new A.t(30+a0*390,96+t*250),8+r.ah()*14,30+p*60)
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=B.c.j(0.025).gp(0)
s=t.G()
d.drawOval(A.bH(p),s)
s.delete()}a0=A.I()
a0.r=K.ahf.gp(0)
a1.aP(new A.a3(30,354,420,362),a0)
a0=A.I()
a0.r=B.aP.gp(0)
a1.aP(D.eZP,a0)
a0=A.I()
a0.r=B.bL.gp(0)
a1.aP(D.eZT,a0)
a0=A.bu(D.eZJ,B.hA)
t=A.I()
t.r=D.Yl.gp(0)
a1.az(a0,t)
o=B.k.E((e-f.ax)/0.7,0,1)
if(f.Q){a0=f.gqd().gbku(0)
n=A.fv(g,g,7,g,A.cS(g,g,g,g,g,g,g,g,g,D.fup,a0+(v?"|":"")),B.a3,B.bZ,g,B.dA,B.bW)
n.nZ(346)
J.bm(d.save())
a0=A.bH(D.a8h)
t=$.ms()
d.clipRect(a0,t[1],!0)
a0=o<1
if(a0&&f.w.length>f.x)d.clipRect(A.bH(new A.a3(30+390*o,96,420,346)),t[1],!0)
n.a3(a1,new A.t(52,118))
d.restore()
if(o>0&&a0){a0=30+390*o-20
t=126+40*Math.sin(o*9)
t=A.bu(new A.a3(a0,t,a0+40,t+90),B.fE)
a0=A.I()
a0.r=D.brR.gp(0)
a1.az(t,a0)}}else{n=A.fv(g,g,g,g,D.feH,B.K,B.bZ,g,B.dA,B.bW)
n.nZ(340)
n.a3(a1,new A.t(55,176))}if(v)for(a0=e*1.2,t=e*3,q=0;q<8;++q){m=B.k.F(a0+q/8,1)
p=B.o.F(f.gqd().d*9,310)
l=Math.sin(q+t)
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=B.c.j(0.7*(1-m)).gp(0)
s=k.G()
d.drawCircle(70+p+l*6,166+m*70,1.6,s)
s.delete()}a0=f.gh4(0).gyS()
j=(a0==null?g:a0.c)===D.og?1:0
i=e<f.ay
h=A.a([new A.z(470,new C.f1i(e,a1,j,v,i,D.egp)),new A.z(520,new C.f1j(a1,e,v)),new A.z(575,new C.f1k(a1,e,v)),new A.z(585,new C.f1l(this,a1,e,v)),new A.z(615,new C.f1m(this,v,a1,e,i))],x.E)
B.d.aW(h,new C.f1n())
for(u=0;u<5;++u)h[u].b.$0()
d.restore()},
c9l(d,e){var w,v,u,t,s,r,q,p=$.S(),o=A.a([],x.v),n=new A.aG(p.r,B.ah,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aY(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new A.bt())
return n},
aw(d){return!1}}
C.alh.prototype={
R(){return new C.ali(new C.alt(),A.U(x.S,x.i),new A.eA(0,$.au()),$,0,null,null)},
gcZ(){return this.d}}
C.ali.prototype={
gkK(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hwM(w.c,w.e)
u.d!==$&&A.bI()
u.d=v
t=v}return t},
giT(){var w=this.z
return w===$?this.z=this.Fl(0):w},
gaK7(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.Fl(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.cv(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.Fl(0):r).length);++v}s.Q=w
r=w}return r},
Fl(d){var w,v,u,t,s=this.gkK()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.dY(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e9()
u.d4(this.a.e+d*7)
B.d.dZ(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.fb(u,new C.bQE())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Z(){this.a2()
this.aqn()},
q(){var w,v=this
v.e.q()
w=v.LE$
w===$&&A.c()
w.q()
w=v.pV$
w.S$=$.au()
w.P$=0
v.btY()},
apW(d){var w,v,u,t,s,r=this,q=r.giT().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.cv(u===$?r.z=r.Fl(0):u,v)
s=r.gaK7()
s[v]=s[v]+(450*(t+0.5)/q-r.gaK7()[v])*Math.min(1,w)}},
cYz(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.giT().length)return
w=v.y
if(w===-1){v.m(new C.bQP(v,d))
return}if(w===d){v.m(new C.bQQ(v))
return}v.m(new C.bQR(v,B.d.cv(v.giT(),v.y),d,B.d.cv(v.giT(),d)))},
cIJ(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.Fl(0):u).length))break
t=s.gkK()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.Fl(0):u)[v]]===v);++v}s.m(new C.bQK(s,B.d.d_(w,new C.bQL())))},
kF(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kF=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkK().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bQM(t,s))
w=5
return A.b(C.Bx(t.a.d,s),$async$kF)
case 5:t.x=f
q=t.a
w=6
return A.b(C.By(q.d,q.c.a,"lineup",t.r*10),$async$kF)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bQN())
w=1
break
case 4:t.m(new C.bQO(t))
case 1:return A.h(u,v)}})
return A.i($async$kF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkK().length+" lines right",k,k,k,k,k,k,B.pB,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tn("Line Up",A.cf(A.a([D.adU,w,B.aN,new C.I2(v,u,l.ch,k),B.aN,A.at(C.ue("Back to the games",new C.bQG(d),B.cJ,B.l9,D.fq),k,k,k)],x.p),k,B.a9,k,k,B.ag,!1),B.fv,k)}w=A.a([],x.t)
for(t=0;v=l.gkK(),t<v[l.f].d.length;++t)w.push(t)
B.d.aW(w,new C.bQH(l))
u=A.bT(0,A.cy(new C.bQI(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aTG,k,k,k)
s=v[s]
q=x.p
s=A.ao(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fmZ,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fpa,B.K,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.m(16)
n=l.ax
m=A.J(n?D.lw:F.n7,B.r,2)
r.push(A.p(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bQJ(l),x.cM).aH(0,", then ")+".",k,k,k,k,k,k,D.frk,k,k,k),B.f,k,k,new A.o(p,k,m,o,k,k,B.n),k,k,k,B.d2,B.bf,k,k,1/0))}if(!l.at)r.push(C.ue("That is my line!",l.gcII(l),B.cJ,B.hw,D.fq))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.ue(w,l.gq5(l),B.cJ,B.jT,D.fq))}return new C.tn("Line Up",new A.an(B.a_,k,B.aa,B.t,A.a([u,s,A.ao(12,A.x(r,B.m,k,B.e,B.P,0,B.p),k,k,12,12,k,k)],q),k),B.fv,k)}}
C.biK.prototype={
a3(c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.pV$.a,c6=c8.a,c7=c4.e.Me(c9).b
c7===$&&A.c()
c7=c7.a
c7===$&&A.c()
c7=c7.a
c7.toString
c6.drawPicture(c7)
w=C.h5n(c9)
J.bm(c6.save())
c6.translate(w.a,w.b)
c8.bW(0,w.c)
v=c4.giT().length
c7=$.S().r
u=x.v
t=new A.aG(c7,B.ah,c3,c3,A.a([],u))
t.D(new A.aY(10,470))
t.D(new A.c5(225,500,440,470))
s=A.I()
s.r=D.Yl.gp(0)
s.b=B.ab
s.c=4
c8.aG(t,s)
for(s=c5*3,r=0;r<12;++r){q=30+r*36
p=470+30*Math.sin(3.141592653589793*(q-10)/430)*0.95
o=Math.sin(s+r)
n=A.a([],u)
m=new A.aG(c7,B.ah,c3,c3,n)
n.push(new A.aY(q,p))
n.push(new A.aq(q+16,p+6+o*3))
n.push(new A.aq(q,p+20))
n.push(new A.bt())
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=[B.cJ,F.n7,D.lw,B.aQ][B.o.F(r,4)].gp(0)
l=o.G()
o=m.gbw().a.snapshot()
c6.drawPath((m.e=new A.cm(o)).a,l)
l.delete()}this.b_k(c8,"OLDEST",D.ehp,B.cJ)
this.b_k(c8,"YOUNGEST",D.egR,B.bj)
c7=A.bu(D.eZD,B.fE)
u=A.I()
u.r=D.Fq.gp(0)
c8.az(c7,u)
u=A.bu(D.eZC,B.hB)
c7=A.I()
c7.r=D.B3.gp(0)
c8.az(u,c7)
k=c5<c4.CW
j=c5<c4.cx
i=v>=5?0.92:1.12
c7=A.a([],x.t)
for(h=0;h<v;++h)c7.push(h)
B.d.aW(c7,new C.doa())
for(u=c7.length,s=440/v-8,o=c5*10,n=!k,m=c4.as,g=c5*9,f=c5*8,e=c5*12,d=0;d<c7.length;c7.length===u||(0,A.M)(c7),++d){h=c7[d]
a0=c4.z
a1=B.d.cv(a0===$?c4.z=c4.Fl(0):a0,h)
q=c4.gaK7()[h]
a2=c4.y===h
a3=a2?Math.abs(Math.sin(g))*10:0
a4=m.h(0,h)
if(a4!=null&&c5<a4)a3+=Math.sin((1-(a4-c5)/0.5)*3.141592653589793)*14
a5=c4.at&&c4.gkK()[c4.f].e[h]===a1
a6=c4.at&&!c4.ax&&!a5
a7=c4.gkK()
a8=a7[c4.f].c
a9=a8.length>h?a8[h]:h
if(n)b0=c4.at&&a5
else b0=!0
b1=Math.max(0,Math.sin(o+h))
if(a2){$.S()
a8=new A.ap(B.R,B.N,B.U,B.V,B.S)
a8.r=B.cJ.j(0.22+0.1*Math.sin(f)).gp(0)
l=a8.G()
c6.drawCircle(q,520,54,l)
l.delete()}a8=D.dew[B.o.F(a9,6)]
if(b0)b2=1
else b2=a6?-0.4:0.35
if(b0)b3=0.4+0.4*b1
else b3=j&&a6?0.5:0
if(j&&a6)b4=1
else b4=a2?0.6:0
b5=b0?0.5:0
b6=a6?Math.sin(e)*0.5:0
b7=b0?a3+b1*8:a3
if(b0)b8=new A.t(-3-b1*8,-56)
else b8=a2?D.ejw:c3
if(b0)b9=new A.t(3+b1*8,-56)
else if(j&&a6)b9=D.aJR
else b9=a2?new A.t(30,-104+Math.sin(f)*5):c3
C.S3(c8,new A.t(q,612),b7,b4,(225-q)/225*0.5,-0.3,b8,b9,D.J1,a8,b3,0,i,b2,b5,c5,b6)
a7=a7[c4.f].d[h]
c0=new A.jR(new A.eu(a7,c3,c3,B.cQ,c3,c3,c3,c3,c3,c3,D.fkK),B.a3,B.bZ,new A.jB(1),"\u2026",c3,1,c3,B.bW,c3)
c0.nZ(s)
c1=A.bu(A.bL(new A.t(q,650),24,c0.b.c+16),B.fE)
$.S()
a7=new A.ap(B.R,B.N,B.U,B.V,B.S)
if(a5)a8=B.iw
else a8=a6?B.rh:D.q_
a7.r=a8.gp(0)
l=a7.G()
c6.drawRRect(A.el(c1),l)
l.delete()
a7=new A.ap(B.R,B.N,B.U,B.V,B.S)
if(a5)a8=D.lw
else a8=a6?F.n7:D.lv
a7.r=a8.gp(0)
a7.b=B.ab
a7.c=2
l=a7.G()
c6.drawRRect(A.el(c1),l)
l.delete()
a7=c0.b
a8=a7.c
a7=a7.a.c
c0.a3(c8,new A.t(q-a8/2,650-a7.gbb(a7)/2))
c2=new A.jR(new A.eu(""+(a1+1),c3,c3,B.cQ,c3,c3,c3,c3,c3,c3,D.fl2),B.a3,B.bZ,new A.jB(1),c3,c3,c3,c3,B.bW,c3)
c2.el()
c2.a3(c8,new A.t(q-c2.b.c/2,668))}if(k)for(c4=c5*2,c7=c5*120,u=c5*4,r=0;r<26;++r){q=B.k.F(r*53+Math.sin(c4+r)*20,450)
s=B.k.F(c7+r*37,420)
J.bm(c6.save())
c6.translate(q,140+s)
c6.rotate((u+r)*180/3.141592653589793,0,0)
s=A.bL(B.I,4,8)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=[B.cJ,F.n7,D.lw,B.aQ,B.c][B.o.F(r,5)].gp(0)
l=o.G()
c6.drawRect(A.bH(s),l)
l.delete()
c6.restore()}c6.restore()},
b_k(d,e,f,g){var w,v,u=null,t=A.fv(u,u,u,u,A.cS(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,K.CR,u,u),e),B.a3,B.bZ,u,B.dA,B.bW)
t.el()
w=t.b
v=w.c
w=w.a.c
t.a3(d,f.aF(0,new A.t(v/2,w.gbb(w)/2)))},
aw(d){return!1}}
C.a1s.prototype={
a5(){return"_Trip."+this.b}}
C.ald.prototype={
R(){return new C.ale(D.Wp,new A.eA(0,$.au()),$,0,null,null)},
gcZ(){return this.d}}
C.ale.prototype={
gD4(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bCW(w.c,8,w.e,!1)
u.d!==$&&A.bI()
u.d=v
t=v}return t},
gh4(d){var w,v=this,u=v.e
if(u===$){w=C.Mz(v.a.c)
v.e!==$&&A.bI()
v.e=w
u=w}return u},
gqd(){var w=this.f
return w===$?this.f=new C.aK6(new C.bQq(this)):w},
gTv(){var w=this.gh4(0)
return w.gyS()==null?"Grandma":B.a.i(w.gyS().b)},
Z(){this.a2()
this.aqn()},
q(){var w,v=this
v.gqd().q()
w=v.LE$
w===$&&A.c()
w.q()
w=v.pV$
w.S$=$.au()
w.P$=0
v.btX()},
apW(d){var w,v,u,t=this
if(t.r!==D.abS)return
w=B.dx.av(0,B.k.E((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gD4()
if(v+1>=u.length){t.r=D.abT
t.Wr()}else{++t.w
t.ay=!1
t.r=D.Wq
t.gqd().Vv(u[t.w].a)}if(t.c!=null)t.m(new C.bQo())}},
Wr(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Wr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqd().Vv("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gD4().length
r=C.bFc(t,u.z,s)
u.as=r
w=2
return A.b(C.Bx(u.a.d,r),$async$Wr)
case 2:u.at=e
s=u.a
w=3
return A.b(C.By(s.d,s.c.a,"journey",u.x*10),$async$Wr)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bQi())
return A.h(null,v)}})
return A.i($async$Wr,v)},
bpe(){this.aSH()},
aSH(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.abS
if(w.c!=null)w.m(new C.bQj())},
KH(d){var w,v,u,t,s=this
if(s.r!==D.Wq)return
w=s.gD4()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bQn(s,d,v))
u=s.gqd()
t=s.w
u.Vv(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cNU(){if(this.r!==D.AA)return
this.aSH()},
B(d){var w,v,u,t=this,s=null,r=A.bT(0,new A.ey(A.b4(s,s,s,new C.bia(t,t.pV$),B.ax),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gD4().length;++w){v=t.w
if(w<v||t.r===D.abT)v=B.cJ
else v=w===v?B.c:B.aZ
u=new A.aP(4,4)
p.push(new A.bz(1,B.bb,A.p(s,s,B.f,s,s,new A.o(v,s,s,new A.bg(u,u,u,u),s,s,B.n),s,7,s,B.ym,s,s,s,s),s))}p.push(B.bm)
p.push(D.fF3)
return new C.tn("Safari Journey",new A.an(B.a_,s,B.aa,B.t,A.a([r,A.ao(s,A.B(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ao(10,t.ciz(),s,s,10,10,s,s)],q),s),B.fv,s)},
ciz(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bQm(o),l=D.q_.j(0.96),k=A.m(22),j=A.J(B.cJ,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTv()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aTE,B.K,n,n),B.W,C.ue("Start the journey",o.gbpd(),B.cJ,D.bLY,D.fq)],x.p),B.m,n,B.e,B.P,0,B.p)
break
case 3:w=D.b9z
break
case 1:w=o.w
v=o.gD4()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aP(14,14)
p=new A.ay(D.lv,2.5,B.r,-1)
t.push(A.aB(n,A.p(n,new A.y(r[s],n,D.aT1,n,B.K,n,n,n,n,n,n,n),B.f,n,D.ad9,new A.o(D.aik,n,new A.bK(p,p,p,p),new A.bg(q,q,q,q),n,n,B.n),n,n,n,n,U.vX,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bQk(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.O,A.bX(B.bC,t,B.bq,n,8,8)],u),B.E,n,B.e,B.P,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gD4().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.O,new A.bO(B.a8,n,n,C.ue(v,o.gcNT(),B.cJ,B.jT,D.fq),n)],x.p),B.E,n,B.e,B.P,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTv()),B.O,A.d(""+o.x+" of "+o.gD4().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aTk,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aPT(v)
u=C.aPT(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.aa9,n,n,n))}w.push(B.O)
w.push(A.at(C.ue("Back to the games",new C.bQl(o),B.cJ,B.l9,D.fq),n,n,n))
w=A.x(w,B.E,n,B.e,B.P,0,B.p)
break
default:w=n}return A.p(n,w,B.f,n,n,new A.o(l,n,j,k,D.aB6,n,B.n),n,n,n,n,B.bf,n,n,n)}}
C.bia.prototype={
a3(d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=this.b,c7=c6.pV$.a,c8=d6.a,c9=d6.b,d0=c6.CW,d1=c6.gD4(),d2=B.k.E(d0/(520*(d1.length+1)),0,1),d3=c6.r===D.abS,d4=c9*0.5
d0=A.ar(D.beh,D.bon,d2)
d0.toString
w=A.ar(D.XB,F.ag6,d2)
w.toString
v=A.ar(B.tC,D.bmS,d2)
v.toString
$.S()
u=A.I()
t=x.O
u.sam(A.jq(B.I,new A.t(0,d4),A.a([d0,w,v],t),F.a3l,B.x,c5))
d5.aP(new A.a3(0,0,0+c8,0+c9),u)
s=new A.t(c8*(0.15+0.7*d2),d4*(0.28+0.45*d2*d2))
u=A.I()
u.sam(A.tp(s,60,A.a([D.bne,B.L],t),c5,B.x,c5,c5,0))
d5.ad(s,60,u)
u=A.I()
u.r=B.XN.gp(0)
d5.ad(s,22,u)
for(d0=d5.a,w=c7*4,v=c8+240,u=c9*0.06,r=0;r<5;++r){q=B.k.F(r*190-c6.CW*0.06-w,v)-120
p=u+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dtp[o]
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=B.c.j(0.75).gp(0)
l=m.G()
d0.drawCircle(q+n.a,p+n.b,18,l)
l.delete()}}for(v=d2*0.7,u=d4+4,m=d4-16,k=x.v,j=0;j<2;++j){i=$.S()
h=A.a([],k)
g=new A.aG(i.r,B.ah,c5,c5,h)
h.push(new A.aY(0,u))
for(i=m-j*12,f=0.12+j*0.1,e=70+j*30,d=14-j*3,q=0;q<=c8;q+=6){a0=new A.aq(q,i+Math.sin((q+c6.CW*f)/e)*d)
h.push(a0)
a1=g.f
if(a1!=null)a0.by(a1)
a0=g.e
if(a0!=null)a0.a.delete()
g.e=null}i=new A.aq(c8,u)
h.push(i)
h=g.f
if(h!=null)i.by(h)
i=g.e
if(i!=null)i.a.delete()
g.e=null
$.S()
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=A.ar(j===0?D.bcT:D.brg,D.bhK,v).gp(0)
l=i.G()
i=g.e
d0.drawPath((i==null?g.e=new A.cm(g.gbw().a.snapshot()):i).a,l)
l.delete()}for(v=d4+2,r=0;r<8;++r)this.c9m(d5,new A.t(B.k.F(B.k.F(r*300-c6.CW*0.5,2400)+2400,2400)-150,v),(r&1)===0,d2)
$.S()
v=A.I()
u=A.ar(D.ahx,D.FC,d2)
u.toString
v.sam(A.jq(new A.t(0,d4),new A.t(0,c9),A.a([u,D.bng],t),c5,B.x,c5))
d5.aP(new A.a3(0,d4,c8,c9),v)
a2=c9*0.56
a3=c9*0.66
v=A.I()
v.r=D.bh2.gp(0)
d5.aP(new A.a3(0,a2,c8,a3),v)
v=A.I()
v.r=D.bqX.gp(0)
d5.aP(new A.a3(0,a2-3,c8,a2),v)
for(q=-B.k.F(c6.CW,70),v=(a2+a3)/2-2,u=v+4;q<c8;q+=70){t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=K.M0.gp(0)
l=t.G()
d0.drawRect(A.bH(new A.a3(q,v,q+36,u)),l)
l.delete()}for(v=a2-6,u=v-36,t=u+36,m=v-34,i=c8*0.62,h=c8+160,f=c7*3,e=c7*6,d=v+40,a0=v-20,a1=a0+20,a4=v-56,a5=a4+56,a6=v-66,a7=a6+20,a8=v-72,r=0;a9=d1.length,r<=a9;r=b0){b0=r+1
q=i+b0*520-c6.CW
if(q<-160||q>h)continue
a9=r===a9
b1=q+40
b2=b1-26
b3=$.S()
b4=new A.ap(B.R,B.N,B.U,B.V,B.S)
b4.r=D.bcA.gp(0)
l=b4.G()
d0.drawRect(A.bH(new A.a3(b2,u,b2+52,t)),l)
l.delete()
b2=A.a([],k)
b3=new A.aG(b3.r,B.ah,c5,c5,b2)
b2.push(new A.aY(b1-36,m))
b2.push(new A.aq(b1,a8))
b2.push(new A.aq(b1+36,m))
b2.push(new A.bt())
b2=new A.ap(B.R,B.N,B.U,B.V,B.S)
b2.r=D.bpd.gp(0)
l=b2.G()
b2=b3.gbw().a.snapshot()
d0.drawPath((b3.e=new A.cm(b2)).a,l)
l.delete()
b2=b1-6
b3=new A.ap(B.R,B.N,B.U,B.V,B.S)
b3.r=D.fq.gp(0)
l=b3.G()
d0.drawRect(A.bH(new A.a3(b2,a0,b2+12,a1)),l)
l.delete()
b5=q-36
b2=b5-2
b3=new A.ap(B.R,B.N,B.U,B.V,B.S)
b3.r=D.Fq.gp(0)
l=b3.G()
d0.drawRect(A.bH(new A.a3(b2,a4,b2+4,a5)),l)
l.delete()
b2=b5-30
b6=A.bu(new A.a3(b2,a6,b2+60,a7),B.i9)
b2=new A.ap(B.R,B.N,B.U,B.V,B.S)
b2.r=D.bsk.gp(0)
l=b2.G()
d0.drawRRect(A.el(b6),l)
l.delete()
b2=new A.ap(B.R,B.N,B.U,B.V,B.S)
b2.r=D.B3.gp(0)
b2.b=B.ab
b2.c=2
l=b2.G()
d0.drawRRect(A.el(b6),l)
l.delete()
b7=a9?"HOME":"STOP "+b0
b8=new A.jR(new A.eu(b7,c5,c5,B.cQ,c5,c5,c5,c5,c5,c5,D.fjd),B.a3,B.bZ,new A.jB(1),c5,c5,c5,c5,B.bW,c5)
b8.el()
b2=b8.b
b3=b2.c
b2=b2.a.c
b8.a3(d5,new A.t(b5-b3/2,a4-b2.gbb(b2)/2))
if(a9)b9=c6.r===D.abT
else if(r===c6.w){b2=c6.r
b2=b2===D.Wq||b2===D.AA
b9=b2}else b9=!1
if(a9){b2=c6.gh4(0).gyS()
c0=(b2==null?c5:b2.c)===D.og?1:0}else c0=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b2=c6.gqd()
c1=b2.d<b2.c.length&&b9
c2=b9&&c6.r===D.AA
b2=c1?C.htl(c7,r):0
if(c2)b3=c6.ax?1:-0.3
else b3=a9&&b9?1:0.4
b4=b9&&c6.r===D.Wq?0.4:0
c3=c2&&c6.ax?0.5:0
if(a9&&b9)a9=new A.t(40,-110+Math.sin(e)*10)
else a9=c1?new A.t(44+Math.sin(f)*8,-66+Math.sin(w)*10):c5
C.S3(d5,new A.t(q+4,d),0,b4,-0.8,-0.2,c5,a9,new A.t(q-200,v),c0,b2,0,0.85,b3,c3,c7+r,-0.3)}d1=c8*0.28
this.bG_(d5,new A.t(d1,a3-6),c7,d3,d6)
if(d3)for(v=c7*1.6,u=d1-90,t=a3-10,r=0;r<7;++r){c4=B.k.F(v+r/7,1)
$.S()
m=new A.ap(B.R,B.N,B.U,B.V,B.S)
m.r=D.bqs.j(0.5*(1-c4)).gp(0)
l=m.G()
d0.drawCircle(u-c4*70,t-c4*18,6+c4*16,l)
l.delete()}if(c6.ay&&c6.r!==D.Wp)for(v=c7*1.2,u=d1+62,t=a3-40,r=0;r<5;++r){c4=B.k.F(v+r/5,1)
m=Math.sin(r+w)
$.S()
k=new A.ap(B.R,B.N,B.U,B.V,B.S)
k.r=B.c.j(0.5*(1-c4)).gp(0)
l=k.G()
d0.drawCircle(u+m*5,t-c4*50,4+c4*10,l)
l.delete()}if(c6.r===D.AA&&c6.ax){b8=A.fv(c5,c5,c5,c5,A.cS(c5,c5,c5,c5,c5,c5,c5,c5,c5,A.l(c5,c5,B.cJ,c5,c5,c5,c5,c5,c5,c5,c5,24,c5,c5,B.u,c5,c5,!0,c5,c5,c5,c5,c5,A7.HY,c5,c5),"BEEP BEEP!"),B.a3,B.bZ,c5,B.dA,B.bW)
b8.el()
b8.a3(d5,new A.t(d1-b8.b.c/2+40,a2-96-Math.abs(Math.sin(c7*9))*6))}},
c9m(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=A.ar(D.bmM,D.bgl,g)
m.toString
if(f){w=new A.aG($.S().r,B.ah,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aY(v-16,u))
t=u-36
s=u-56
w.D(new A.c5(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c5(v+9,t,v+16,u))
w.D(new A.bt())
t=A.I()
t.r=D.YO.gp(0)
d.aG(w,t)
for(w=v+0,t=u+-54,s=u+-72,r=d.a,u+=-76,q=0;q<4;++q){p=D.cWE[q]
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=D.YO.gp(0)
o.c=4
o.d=B.bE
n=o.G()
r.drawLine.apply(r,[w,t,v+p*24,s,n])
n.delete()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=m.gp(0)
n=o.G()
r.drawCircle(v+p*26,u,10,n)
n.delete()}}else{w=e.a9(0,D.ejt)
$.S()
v=A.I()
v.r=D.bcC.gp(0)
v.c=4
d.bo(e,w,v)
v=A.bL(e.a9(0,D.eju),16,60)
w=A.I()
w.r=m.gp(0)
d.dO(v,w)}},
bG_(a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a6?Math.sin(a5*22)*1.6:Math.sin(a5*2)*0.4,a0=this.b,a1=a0.ay&&a0.r!==D.Wp?0.045:0,a2=a3.a
J.bm(a2.save())
a2.translate(a4.a,a4.b+d)
a3.ig(0,a1)
for(w=0;w<2;++w){v=D.dlZ[w]
u=a0.ay&&a0.r!==D.Wp&&v>0
J.bm(a2.save())
a2.translate(v,-4+(u?4:0))
t=u?15:18
$.S()
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.br8.gp(0)
r=s.G()
a2.drawCircle(0,0,t,r)
r.delete()
a2.rotate(a0.CW/18*180/3.141592653589793,0,0)
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=D.bjK.gp(0)
r=t.G()
a2.drawCircle(0,0,9,r)
r.delete()
for(q=0;q<4;++q){t=q*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.bn.gp(0)
p.c=2
r=p.G()
a2.drawLine.apply(a2,[0,0,s*9,t*9,r])
r.delete()}a2.restore()}o=A.wm(D.f__,B.fE,B.fE,B.ip,B.i8)
$.S()
t=A.I()
t.sam(A.jq(D.efy,B.a7d,D.dca,F.a3l,B.x,e))
a3.az(o,t)
for(n=0;n<20;++n){t=-100+n*10
s=new A.ap(B.R,B.N,B.U,B.V,B.S)
s.r=D.d6l[B.o.F(n,4)].gp(0)
r=s.G()
a2.drawRect(A.bH(new A.a3(t,-26,t+10,-19)),r)
r.delete()}m=a0.r===D.AA&&a0.ax
l=[2,3,4,5]
for(t=a5*10,n=0;n<4;++n){s=-88+n*38
p=s+32
k=new A.a3(s,-66,p,-36)
J.bm(a2.save())
a2.clipRRect(A.el(A.bu(k,B.mV)),$.nz(),!0)
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=D.XB.gp(0)
r=j.G()
a2.drawRect(A.bH(k),r)
r.delete()
j=l[n]
i=m?1:0.35
h=m?0.5:0
g=a0.ay&&a0.r===D.AA?1:0
f=m?Math.max(0,Math.sin(t+n))*6:0
C.S3(a3,new A.t(s+(p-s)/2,-10),f,g,0.5,-0.2,e,e,D.aJI,j,h,0,0.4,i,0,a5,0)
a2.restore()
i=A.bu(k,B.mV)
h=new A.ap(B.R,B.N,B.U,B.V,B.S)
h.r=D.aim.gp(0)
h.b=B.ab
h.c=2
r=h.G()
a2.drawRRect(A.el(i),r)
r.delete()}a0=A.bu(D.TD,B.mV)
t=A.I()
t.r=D.XB.gp(0)
a3.az(a0,t)
J.bm(a2.save())
a2.clipRRect(A.el(A.bu(D.TD,B.mV)),$.nz(),!0)
C.S3(a3,new A.t(D.TD.gbL().a,-10),0,0,0.7,-0.1,e,e,D.aJI,6,0,0,0.4,0.5,0,a5,0)
a2.restore()
t=A.bu(D.TD,B.mV)
a0=A.I()
a0.r=D.aim.gp(0)
a0.b=B.ab
a0.c=2
a3.az(t,a0)
a0=A.I()
a0.r=Ap.FD.gp(0)
a3.ad(D.ehD,4,a0)
a0=A.I()
a0.r=D.Fq.gp(0)
a3.aP(D.f08,a0)
for(w=0;w<3;++w){v=D.dm0[w]
a0=A.bu(new A.a3(v,-96,v+28,-79),B.i9)
t=new A.ap(B.R,B.N,B.U,B.V,B.S)
t.r=D.FC.gp(0)
r=t.G()
a2.drawRRect(A.el(a0),r)
r.delete()}a2.restore()},
aw(d){return!1}}
C.aAT.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.bfL.prototype={}
C.aAV.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.bfM.prototype={}
C.aAW.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.bfN.prototype={}
C.a5U.prototype={
B(d){var w=null
return new A.a6(1/0,this.c,A.b4(w,w,w,new C.bii(w),B.ax),w)}}
C.bii.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=d.a,s=e*0.15,r=f/2,q=e/2,p=f*0.8,o=e*0.85,n=x.v,f*=0.2,m=0,l=0;l<w;l+=e){k=D.djZ[B.o.F(m,6)]
j=$.S()
i=new A.ap(B.R,B.N,B.U,B.V,B.S)
i.r=k.gp(0)
h=i.G()
t.drawRect(A.bH(new A.a3(l,0,l+v,u)),h)
h.delete()
if(B.o.F(m,3)===0){i=A.a([],n)
g=new A.aG(j.r,B.ah,null,null,i)
j=l+q
i.push(new A.aY(j,f))
i.push(new A.aq(l+o,r))
i.push(new A.aq(j,p))
i.push(new A.aq(l+s,r))
i.push(new A.bt())
j=new A.ap(B.R,B.N,B.U,B.V,B.S)
j.r=B.c.j(0.85).gp(0)
h=j.G()
j=g.gbw().a.snapshot()
t.drawPath((g.e=new A.cm(j)).a,h)
h.delete()}++m}},
aw(d){return!1}}
C.tn.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aF(w,w,w,w,B.P4,w,w,w,new C.bQh(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a1,w,w,w,D.fgv,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c7(w,D.Xo,A.p(w,A.bl(!0,A.x(A.a([D.c0t,new A.D(D.bDj,A.B(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),B.f,w,w,D.b5_,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.I2.prototype={
B(d){var w=null,v=this.d,u=C.aPT(v),t=C.iak(v),s=B.c.j(0.08),r=A.m(18),q=A.J(B.cJ.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fiZ,w,w,w)],x.p)
if(this.e)p.push(D.elW)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fT,w,w,w))
if(t!=null)p.push(new A.D(B.u2,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.Af,w,w,w),w))
return A.p(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(s,w,q,r,w,w,B.n),w,w,w,w,B.bA,w,w,w)}}
C.VF.prototype={
R(){return new C.bkX(A.U(x.N,x.S),B.o.F(Date.now(),1e5))},
cUM(d){return this.f.$1(d)},
ge1(){return this.d}}
C.bkX.prototype={
gSv(){var w=this.d
return w===$?this.d=this.a.c:w},
Z(){this.a2()
this.Pd()},
Pd(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bR2(u.a.d),$async$Pd)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.daf[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bR1(p,(o===$?u.d=q.c:o).a,r),$async$Pd)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.dYk(u,n))
return A.h(null,v)}})
return A.i($async$Pd,v)},
u8(d){return this.clA(d)},
clA(d){var w=0,v=A.j(x.H),u=this,t
var $async$u8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a4(t,!1).cd(A.dZ(new C.dYl(d),!1,null,x.H)),$async$u8)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pd()
return A.h(null,v)}})
return A.i($async$u8,v)},
gb4A(){var w,v,u,t=C.Mz(this.gSv()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)s.push(B.a.i(w[u].b))
return s},
a1Z(d){return this.csM(d)},
csM(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a1Z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.M)(d),++s)r.push(d[s].ag())
w=2
return A.b(u.a.cUM(r),$async$a1Z)
case 2:if(u.c!=null)u.m(new C.dYm(u,r))
return A.h(null,v)}})
return A.i($async$a1Z,v)},
Ow(d){return this.bOB(d)},
bOB(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ow=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.h7u(t.gSv())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.Mk("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a4(s,!1).cd(A.dZ(new C.dYi(q),!1,null,r)),$async$Ow)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.M)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bg(j,new C.dYj(p))
o=s.length
B.d.c3(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a1Z(A.d1(s,0,A.dB(2,"count",x.S),r).dm(0)),$async$Ow)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ow,v)},
Xn(d,e){return this.bMd(0,e)},
bMd(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$Xn=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cj(null,null,!0,null,new C.dYh(e),o,null,!0,!0,x.y),$async$Xn)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.h7u(u.gSv()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.M)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a1Z(o),$async$Xn)
case 5:case 3:return A.h(null,v)}})
return A.i($async$Xn,v)},
a9C(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.dYe(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.J(B.aZ,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cx,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.UC,p,p,p),B.b1],s)
q=A.m(10)
r.push(A.p(p,A.d(i,p,p,p,p,p,p,D.fho,p,p,p),B.f,p,p,new A.o(B.hK,p,p,q,p,p,B.n),p,p,p,p,B.BV,p,p,p))
return A.aB(p,A.d9(A.p(p,A.x(A.a([A.B(r,B.m,p,B.e,B.i,0,p,p),B.b1,A.d(e,p,2,p,p,p,p,D.fp4,p,p,p),B.cL,A.d(f,p,3,B.a1,p,p,p,D.fi6,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(p,p,u,v,t,new A.a9(B.ay,B.aE,B.x,w,p,p),B.n),p,p,p,p,B.ye,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
WR(d,e,f,g,h,i){return this.a9C(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.Mz(s.gSv()),p=s.gSv(),o=C.aPT(s.e),n=C.h7u(p),m=s.a.e&&J.ad(p.z)<2,l=new C.dYn(s),k=C.hwM(p,1).length,j=C.hwX(p,1).length,i=C.hxR(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.J(B.cJ.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,F.aa_,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fmB,r,r,r),a0=q.b.length,a1=x.p
g=A.p(r,A.B(A.a([e,B.bd,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,F.a9X,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pB,r,r,r),D.fLj],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.o(h,r,f,g,r,r,B.n),r,r,r,r,B.bA,r,r,r)
f=s.WR("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aD,new C.dYo(s,p),l.$1("kahoot"))
h=s.WR("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lv,new C.dYp(s,p),l.$1("fire"))
a0=s.WR("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.Bq,new C.dYq(s,p),l.$1("catch"))
j=j!==0?new C.dYt(s,p):r
j=s.a9C("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hd,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.dYu(s,p):r
i=s.a9C("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.l0,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.WR("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eR,new C.dYv(s,p),l.$1("journey"))
k=k!==0?new C.dYw(s,p):r
k=A.a([g,B.aN,D.fPj,B.O,A.ki(0.98,A.a([f,h,a0,j,i,e,s.a9C("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.ed,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.WR("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.d1,new C.dYx(s,p),l.$1("school"))],a1),2,12,12,r,B.dR,!0),B.d4,A.B(A.a([D.bF3,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fhs,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.O],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.M)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aP(18,18)
u=new A.ay(B.aZ,1,B.r,-1)
g=B.a.i(v.b)
if(g.length===0)g="Untitled game"
g=A.a([D.fw_,B.bd,new A.bz(1,B.bb,A.x(A.a([new A.y(g,r,B.hE,r,r,r,r,B.a1,r,1,r,r),new A.y(""+v.gaos(0).length+" questions \xb7 Kahoot style",r,B.Af,r,r,r,r,r,r,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gaos(0).length>=2){f=D.lw.j(0.2)
t=new A.ay(D.lw,1,B.r,-1)
g.push(A.aB(r,A.p(r,A.X(B.i2,D.lw,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bK(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYy(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cJ.j(0.2)
t=new A.ay(B.cJ,1,B.r,-1)
f=A.aB(r,A.p(r,A.X(B.iW,B.cJ,r,r,r,20),B.f,r,r,new A.o(f,r,new A.bK(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYz(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.f9.j(0.2)
t=new A.ay(B.f9,1,B.r,-1)
B.d.v(g,A.a([B.bm,f,B.bm,A.aB(r,A.p(r,A.X(B.ea,B.f9,r,r,r,20),B.f,r,r,new A.o(e,r,new A.bK(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dYA(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.p(r,new A.ce(B.aM,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.o(i,r,new A.bK(u,u,u,u),new A.bg(h,h,h,h),r,r,B.n),r,r,r,B.d2,B.bf,r,r,r))}if(s.a.e){j=m?new C.dYr(s):new C.dYs(a2)
i=A.m(18)
h=A.J(m?B.cJ:B.aZ,B.r,2)
g=m?B.cJ.j(0.12):B.dq
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aB(r,A.p(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cJ:B.aB,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.o(g,r,h,i,r,r,B.n),r,r,r,r,B.Ne,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fQf)
k.push(B.aA)
k.push(D.aqS)
return new C.tn("Family Games \xb7 "+p.b,A.cf(k,r,D.bzm,r,r,B.ag,!1),B.fv,r)}}
C.a_j.prototype={
a5(){return"_KPhase."+this.b}}
C.alf.prototype={
R(){return new C.alg(D.aYl)},
gcZ(){return this.e}}
C.alg.prototype={
q(){var w=this.at
if(w!=null)w.a4(0)
w=this.ax
if(w!=null)w.a4(0)
this.a1()},
h2(d){var w,v=this
v.m(new C.bQC(v))
w=v.at
if(w!=null)w.a4(0)
v.at=A.df(B.fA,new C.bQD(v))},
aOl(){var w=this,v=w.ax
if(v!=null)v.a4(0)
w.m(new C.bQs(w))
v=w.at
if(v!=null)v.a4(0)
w.at=A.df(B.fj,new C.bQt(w))},
KH(d){var w
if(this.d!==D.abm)return
w=this.at
if(w!=null)w.a4(0)
this.b4w(d)},
b4w(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.k.V(500+500*B.k.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bQy(u,v,d))
u=v.ax
if(u!=null)u.a4(0)
v.ax=A.cI(B.rm,v.gkx(v))},
cHp(d){var w=this
if(w.d!==D.VY)return
if(w.e+1>=w.a.w.length)w.Y7()
else{w.m(new C.bQz(w))
w.aOl()}},
Y7(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Y7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a4(0)
p=u.x
t=u.a.w.length
s=C.bFc(p,u.w,t)
u.m(new C.bQv(u,s))
w=2
return A.b(C.Bx(u.a.e,s),$async$Y7)
case 2:r=e
t=u.a
w=3
return A.b(C.By(t.e,t.f,t.r,u.f),$async$Y7)
case 3:q=e
if(u.c!=null)u.m(new C.bQw(u,r,q))
return A.h(null,v)}})
return A.i($async$Y7,v)},
cIb(){var w,v,u,t,s=this,r=s.a,q=new A.e9()
q.d4(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.bk("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.dZ(r,q)
for(r=A.d1(r,0,A.dB(4,"count",x.S),A.T(r).c),u=r.$ti,r=new A.bS(r,r.gL(0),u.k("bS<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.bk(t,B.k.V(w*(0.35+q.ah()*0.5)),!1))}B.d.aW(v,new C.bQA())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.aYl===r){w=A.a([D.fLI,B.W,A.d(s,t,t,t,t,t,t,B.Ke,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fhB,t,t,t))
w.push(B.aA)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.x_,B.K,t,t))
w.push(B.dS)
w.push(C.ue("Play",u.geX(u),B.cJ,B.i2,D.fq))
w=A.at(new A.D(B.em,A.x(w,B.m,t,B.e,B.P,0,B.p),t),t,t,t)
break A}if(D.aYm===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fpA,t,t,t),t,t,t)
break A}if(D.abm===r||D.VY===r){w=u.cob()
break A}if(D.aYn===r){w=u.c9n()
break A}w=t}return new C.tn(s,w,B.fv,t)},
cob(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.VY,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aSN,j,j,j),B.b1],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.Ka,j,j,j))
g.push(B.at)
f=A.m(14)
g.push(A.p(j,A.d(""+k.f,j,j,j,j,j,j,B.iK,j,j,j),B.f,j,j,new A.o(B.bz,j,j,f,j,j,B.n),j,j,j,j,B.G6,j,j,j))
g=A.B(g,B.m,j,B.e,B.i,0,j,j)
f=A.m(6)
w=i?0:B.k.E(k.as/k.a.w[k.e].r,0,1)
f=A.bx(f,A.kx(B.bz,j,k.as<5?B.f9:B.cJ,9,j,w,j),B.ap)
w=A.m(22)
v=A.J(B.cJ,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lw:F.n7,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.O,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fgE,B.K,j,j)],h),B.m,j,B.e,B.P,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.frH,B.K,j,j)
w=A.E(A.p(j,A.at(u,j,j,j),B.f,j,j,new A.o(D.q_,j,v,w,j,j,B.n),j,j,j,j,B.ft,j,j,1/0),3)
v=A.a([],h)
for(u=k.gkx(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bQx(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aAP[o]
m=new A.aP(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([new A.y(D.aB3[o],j,D.fiB,j,j,j,j,j,j,j,j,j),B.at,new A.bz(1,B.bb,new A.y(r[t],j,D.fhx,j,j,j,j,B.a1,j,3,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.apn)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bTl)
v.push(A.aB(j,new A.Sl(A.p(j,new A.ce(B.aM,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.o(n,j,new A.bK(l,l,l,l),new A.bg(m,m,m,m),V.azg,j,B.n),j,j,j,j,B.eZ,j,j,j),p,B.b5,B.a2,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.ad,w,B.ad,A.E(A.ki(1.45,v,2,10,10,j,B.dR,!1),4)],h)
if(i)h.push(D.ela)
return new A.D(B.a_h,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
c9n(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cIb(),m=x.p,l=A.a([D.b8Q,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pB,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.UI,o,o,o),o,o,o),B.aN],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cJ.j(0.25):B.dq
u=new A.aP(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cJ:B.bz,1,B.r,-1)
q=w<3?D.dcr[w]:""+(w+1)
s=s?B.u:B.Q
l.push(A.p(o,new A.ce(B.aM,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a6(34,o,new A.y(q,o,B.n_,o,o,o,o,o,o,o,o,o),o),new A.bz(1,B.bb,new A.y(t.a,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new A.y(""+t.b,o,B.iK,o,o,o,o,o,o,o,o,o)],m),o),B.f,o,o,new A.o(v,o,new A.bK(r,r,r,r),new A.bg(u,u,u,u),o,o,B.n),o,o,o,B.cv,B.eT,o,o,o))}l.push(B.W)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.I2(m,v,p.CW,o))
l.push(B.aN)
l.push(A.at(C.ue("Back to the games",new C.bQu(p),B.cJ,B.l9,D.fq),o,o,o))
return A.cf(l,o,B.ft,o,o,B.ag,!1)}}
C.Tj.prototype={
R(){return new C.alc(A.U(x.de,x.er))}}
C.alc.prototype={
gCI(){var w,v=this,u=v.d
if(u===$){w=C.hd3(v.a.c.ag())
v.d!==$&&A.bI()
v.d=w
u=w}return u},
gl2(d){var w,v,u=this,t=u.e
if(t===$){w=u.gCI().b
v=$.au()
u.e!==$&&A.bI()
t=u.e=new A.as(new A.b9(w,B.b2,B.aO),v)}return t},
cc2(d){return this.f.c4(0,d,new C.bQ2(d))},
Z(){this.a2()
var w=this.gCI().c
if(w.length===0)w.push(C.h_d(null,0,20,""))},
q(){var w,v,u=this.gl2(0)
u.S$=$.au()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aW(u.d);w.C();){v=w.gT(w)
v.S$=$.au()
v.P$=0}this.a1()},
cHf(){if(this.gCI().c.length>=12)return
this.m(new C.bQ3(this))},
jy(d){var w,v,u=this,t=u.gCI()
t.b=B.a.i(u.gl2(0).a.a)
w=t.gaos(0)
if(t.b.length===0||w.length<2){u.c.K(x.q).f.U(D.f9x)
return}v=t.c
B.d.a7(v)
B.d.v(v,w)
v=u.c
v.toString
A.a4(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bQd(),r=x.p,q=A.a([A.bN(!1,D.fB0,t,t,!0,t,t,t,u.gbo7(u),t,t)],r),p=A.a([D.fPR,B.ad,A.aL(t,B.Y,!1,t,!0,B.t,t,A.aM(),u.gl2(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ai,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.a9,t,t,t,t,t,t,t,t,t,t,t,B.fT,!0,B.a3,t,B.an,t,t,t,t),B.aA],r)
for(w=0;v=u.gCI().c.length,w<v;++w)B.d.v(p,A.a([new A.fe(new C.bQc(u,w,s),t)],r))
if(v<12)p.push(A.at(C.ue("\uff0b Add a question",u.gcHe(),B.aZ,t,B.c),t,t,t))
return new C.tn("Make your game",A.cf(p,t,D.bzj,t,t,B.ag,!1),q,t)}}
C.aqd.prototype={
R(){return new C.aEp(A.a([],x._))},
bu(){return this.r.$0()},
q6(){return this.w.$0()},
ge1(){return this.c}}
C.aEp.prototype={
Z(){var w,v
this.a2()
this.w4()
w=this.a
v=w.c
if(v.length!==0)C.a7E(v,w.e,w.d.w)},
vV(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$vV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.ha_(r,t.e,!1,s.w,new C.e__(u),null,s),$async$vV)
case 2:w=3
return A.b(u.w4(),$async$vV)
case 3:return A.h(null,v)}})
return A.i($async$vV,v)},
a09(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a09=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.ha_(r,t.e,!0,s.w,new C.dZZ(u),null,s),$async$a09)
case 2:w=3
return A.b(u.w4(),$async$a09)
case 3:return A.h(null,v)}})
return A.i($async$a09,v)},
w4(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$w4=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.B1(q.a.c),$async$w4)
case 7:p=e
if(q.c!=null)n=q.e||J.cL(p)
else n=!1
if(n)q.m(new C.e_1(q,p))
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
return A.b(C.GV(q.a.c).d7(0,B.p3),$async$w4)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e_2(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e_3(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$w4,v)},
OS(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$OS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.K(s).f.U(D.f97)
w=3
return A.b(C.GV(t.a.c),$async$OS)
case 3:r=e
w=4
return A.b(C.fQ1(t.a.c,r),$async$OS)
case 4:q=e
w=5
return A.b(C.GV(t.a.c),$async$OS)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.dZY(t,p))
o=t.c.K(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dE:B.cW,null,B.t,null,s,null,B.mG,null,null,null,null,null,null,null,null,null,null))
t.a.q6()
case 1:return A.h(u,v)}})
return A.i($async$OS,v)},
Ib(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ib=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iix(l),$async$Ib)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hMz(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b0g(q,p.e,l,"Each family tree costs $"+B.k.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Ib)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.htr(r)
o=Date.now()
n=t.a.c
m=new C.kO(l,r.toUpperCase(),p,!0,B.Y,D.CZ,new A.V(o,0,!1),0,n,D.ub,B.ca)
w=5
return A.b(C.a3d(n,m),$async$Ib)
case 5:w=6
return A.b(t.w4(),$async$Ib)
case 6:t.a.bu()
t.a.q6()
if(t.c==null){w=1
break}t.EH(m)
case 1:return A.h(u,v)}})
return A.i($async$Ib,v)},
EH(d){return this.cgW(d)},
cgW(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$EH=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.B1(u.a.c),$async$EH)
case 2:n=l.pT(k.dH(f,new C.e_0(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hF(m,new C.aq7(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$EH)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a3d(u.a.c,o),$async$EH)
case 6:case 5:w=7
return A.b(u.w4(),$async$EH)
case 7:u.a.q6()
return A.h(null,v)}})
return A.i($async$EH,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.J,o=new C.u1(p)
if(r.e)return A.at(A.mT(q,p?B.bs:B.bn,q,q,q,q,q,q,q,q),q,q,q)
if(J.ct(r.d)){w=p?B.e3:B.c
v=A.m(15)
u=A.aH(!1,B.a2,!0,q,A.aO(!1,q,!0,A.p(q,D.bR1,B.f,q,q,new A.o(B.aW.j(0.12),q,A.J(B.aW,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cM,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcg_(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.FX(A.p(q,A.x(A.a([u,B.aN,t,B.O,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bn,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dS,A.bE(D.fT5,q,r.gaRw(),A.bo(B.bP,q,q,q,q,q,As.a_G,q,new A.b7(A.m(12),B.a0),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.o(w,q,q,v,q,q,B.n),q,q,q,q,D.bC1,q,q,1/0),15,B.af,1.05,D.ab8,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b1],v)
if(J.cL(r.d))w.push(A.aF(q,q,q,q,A.X(B.z2,B.aW,q,q,q,q),q,q,q,new C.e_5(r),q,q,q,q,"Sync family trees with database",q))
if(J.cL(r.d))w.push(A.aF(q,q,q,q,A.X(B.yX,B.aW,q,q,q,q),q,q,q,r.gagf(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dl(E.aqi,D.fyj,r.gaRw(),A.bo(B.bP,q,q,q,q,q,q,q,q,q,q,q)))
p=A.B(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.ad)
u.push(new C.FX(r.cDx(J.r(r.d,s),o),14,B.af,1,D.ab8,q))
B.d.v(w,u)}return A.x(A.a([p,B.aA,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cDx(d,e){var w=null,v=e.a,u=v?B.e3:B.c,t=A.m(14),s=A.J((v?B.e9:B.bO).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.eq,10)],x.V),q=A.m(14),p=A.p(w,D.bQ5,B.f,w,w,new A.o(B.aW.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gapm(),m=d.d?"":" \xb7 Public",l=d.y===D.kH?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bD,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.p(w,A.aH(!1,B.a2,!0,w,A.aO(!1,q,!0,new A.D(B.bA,A.B(A.a([p,B.bd,l,A.X(B.O2,v?B.bs:B.bn,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e_4(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.o(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aq7.prototype={
R(){return new C.aEm(A.a([],x._),A.aX(x.N),A.b91())},
bu(){return this.r.$0()},
ge1(){return this.c}}
C.aEm.prototype={
Z(){var w,v,u=this
u.a2()
u.d=u.a.w
u.ad0()
w=u.a
v=w.c
if(v.length!==0)C.a7E(v,w.e,w.d.w)},
q(){var w=this.w
w.S$=$.au()
w.P$=0
this.a1()},
a38(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a38=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.y_("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.dZq(r),s,null,!0,!0,x.y),$async$a38)
case 3:if(e!==!0||t.c==null){w=1
break}t.JI()
t.m(new C.dZr(t,r))
w=4
return A.b(t.u4(),$async$a38)
case 4:t.a.bu()
t.y_(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a38,v)},
ctm(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aV.x1$.push(new C.dZl(w,f,d,e))},
aTM(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ef(w,v,0,1)
u.jV(q,q,1,1)
this.w.sp(0,u)},
bb4(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eK(new Float64Array(16))
q.e6(r)
w=q.CN()
v=B.k.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ef(r,u,0,1)
t.jV(v,v,1,1)
t.ef(-r,-u,0,1)
t.iP(0,q)
s.sp(0,t)},
ad0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$ad0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.B1(u.a.c),$async$ad0)
case 2:t=s.pT(r.dH(e,new C.dYN(u)))
if(t!=null&&u.c!=null)u.m(new C.dYO(u,t))
return A.h(null,v)}})
return A.i($async$ad0,v)},
y_(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
vV(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$vV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.ha_(o,t,!1,r,new C.dZ4(u),q.a,s),$async$vV)
case 2:n=A
m=J
w=3
return A.b(C.GV(u.a.c),$async$vV)
case 3:p=n.pT(m.dH(e,new C.dZ5(u)))
if(p!=null&&u.c!=null)u.m(new C.dZ6(u,p))
return A.h(null,v)}})
return A.i($async$vV,v)},
JI(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
u4(){var w=0,v=A.j(x.H),u=this,t,s
var $async$u4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a3d(t,s),$async$u4)
case 2:return A.h(null,v)}})
return A.i($async$u4,v)},
a1E(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a1E=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uf(q,t.a.c)){t.y_("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ijH(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a1E)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JI()
t.m(new C.dZk(t,r))
w=4
return A.b(t.u4(),$async$a1E)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a1E,v)},
b1d(){var w=this.c
w.toString
A.a4(w,!1).cd(A.dZ(new C.dZ1(this),!1,null,x.H))},
a0n(){return this.cgY()},
cgY(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uf(m,t.a.c)){t.y_("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.P(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Z(s,new C.dZh(),A.T(s).k("Z<1>")).gL(0)
s=A.eD([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cs.E"))
B.d.fd(p)
s=t.c
s.toString
w=3
return A.b(A.bV(B.L,null,new C.dZi(n,t,new C.u1(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0n)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JI()
t.m(new C.dZj(t,o))
w=6
return A.b(t.u4(),$async$a0n)
case 6:case 5:if(o.a&&t.c!=null)t.b1d()
case 1:return A.h(u,v)}})
return A.i($async$a0n,v)},
We(d){return this.bBk(d)},
bBk(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$We=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uf(r,t.a.c)){t.y_("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.dYB(t,d),r,null,!0,!0,x.P),$async$We)
case 3:s=f
if(s==null){w=1
break}t.JI()
t.m(new C.dYC(t,s))
w=4
return A.b(t.u4(),$async$We)
case 4:case 1:return A.h(u,v)}})
return A.i($async$We,v)},
a3u(d){return this.cFH(d)},
cFH(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.P(s)
t=u.c
t.toString
w=2
return A.b(A.cj(null,null,!0,null,new C.dZt(u,d,new C.u1(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3u)
case 2:return A.h(null,v)}})
return A.i($async$a3u,v)},
cdf(d){var w=this,v=w.d
v===$&&A.c()
if(C.uf(v,w.a.c))w.Ox(d)
else w.a3u(d)},
aiI(d,e){return this.cxk(d,e)},
cxk(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aiI=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.P(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cj(null,null,!0,null,new C.dZn(new C.u1(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$aiI)
case 3:case 1:return A.h(u,v)}})
return A.i($async$aiI,v)},
Ig(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Ig=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kH?3:5
break
case 3:w=6
return A.b(C.fYt(t.a.c),$async$Ig)
case 6:s=e
o=t.a
r=C.hhR(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.aiI(!s,!r),$async$Ig)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQ1(o,t.a.c)){t.y_("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.ld(o,"Cancel","Remove",q.y===D.kH?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Ig)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aPY(t.a.c,t.d.a),$async$Ig)
case 11:t.a.bu()
o=t.c
if(o==null){w=1
break}A.iS(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Ig,v)},
aax(d){return this.bMu(d)},
bMu(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aax=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uf(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.b2(s,new C.dYD(p))){o=A.T(s)
p.a=A.pT(new A.cQ(new A.Z(s,new C.dYE(d),o.k("Z<1>")),new C.dYF(),o.k("cQ<1,n>")))}q=p.a
if(q==null)q=d.d
t.JI()
t.m(new C.dYG(t,s,d,q))
w=3
return A.b(t.u4(),$async$aax)
case 3:t.y_(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aax,v)},
Ox(d){return this.bOF(d)},
bOF(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ox=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uf(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3u(d),$async$Ox)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cj(null,null,!0,null,new C.dYK(t,d),r,null,!0,!0,x.P),$async$Ox)
case 6:s=f
if(s==null){w=1
break}t.JI()
t.m(new C.dYL(t,s))
w=7
return A.b(t.u4(),$async$Ox)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ox,v)},
cDW(){var w=this,v=w.d
v===$&&A.c()
if(!C.uf(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.dZs(w))
w.u4()},
Z8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Z8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQ1(n,t.a.c)){t.y_("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.P(n)
s=$.au()
r=new A.as(B.as,s)
q=t.d.e
p=A.bq(new A.N(q,t.gcbJ(),A.T(q).k("N<1,n>")).c0(0,new C.dYX()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.dYY(t,new C.u1(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Z8)
case 3:o=e
r.S$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JI()
t.m(new C.dYZ(t,p))
w=4
return A.b(t.u4(),$async$Z8)
case 4:t.y_("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Z8,v)},
cbK(d){return B.a.i(d.toLowerCase())},
cfK(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uf(v,w)
t=r.d
s=C.i8M(t)
C.iiB(q,t.b,u,C.i8L(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.J,m=new C.u1(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Z(l,new C.dZA(),A.T(l).k("Z<1>")).gL(0)
l=n?B.c0:B.iu
v=A.X(B.a0R,n?B.bs:B.bn,o,o,o,18)
u=x.p
v=A.a([new A.D(B.BL,A.aO(!1,o,!0,new A.D(B.ht,A.B(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.P,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dZB(p,d),o,o,o,o,o,o,o),o),new A.D(B.nr,p.bZQ(m),o)],u)
if(p.d.y===D.kH){t=B.rM.j(0.15)
s=A.m(12)
r=A.J(B.rM.j(0.45),B.r,1)
q=C.GT(p.d,p.a.c)
v.push(new A.D(B.yh,A.p(o,A.B(A.a([D.bVu,B.at,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(t,o,r,s,o,o,B.n),o,o,o,o,B.iB,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b1],u)
if(C.uf(p.d,p.a.c)&&p.e.length!==0)u.push(new C.G7("Undo",B.rB,p.gcDV(),m,o,o))
u.push(new C.G7("Family Book",D.bKO,p.gcfJ(),m,B.tD,o))
u.push(new C.G7("Family games",B.on,p.gcfV(),m,B.aD,o))
if(C.uf(p.d,p.a.c))u.push(new C.G7("Display settings",B.Cv,p.gcgX(),m,B.b_,o))
u.push(new C.G7("Sync",B.yX,p.gagf(),m,o,o))
t=p.d
if(t.y===D.kH||C.aQ1(t,p.a.c)){t=p.d.y===D.kH?"Remove shared tree":"Delete tree"
u.push(new C.G7(t,B.ea,p.gbME(),m,B.f9,o))}if(C.uf(p.d,p.a.c))u.push(new C.G7("Add member",B.us,new C.dZC(p),m,B.bP,o))
v.push(new A.D(Z.akn,A.B(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gapm()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cy(new C.dZD(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?N.a0V:A6.O3,o,o,o,o,o)
v.push(A.at(A.hr(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.dZE(p),o),o,o,o))}return A.c7(o,l,A.bl(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),o,!1,!1,o,o)},
bZQ(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fM.j(0.35),B.dr,18)],x.V)
u=A.m(22)
t=A.ao(-26,A.X(B.yS,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aH(!1,B.a2,!0,m,A.aO(!1,m,!0,A.p(m,D.bYD,B.f,m,m,new A.o(B.c.j(0.16),m,A.J(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cM,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagf(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a1,m,m,m,D.fjC,m,m,m)
r=r.gapm()
p=n.d.gapm()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bD,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a7,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uf(n.d,n.a.c))p.push(A.aF(m,m,m,m,D.bVH,m,m,m,n.gcqH(),m,m,m,m,"Rename",m))
s=A.B(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jU:B.nw
r=r?"Private":"Public"
r=A.E(n.avO(q,"Privacy",r,n.a.d.w?n.gcCU():m),1)
q=A.E(n.avO(B.yY,"Tree code",n.d.c,new C.dYM(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.ad,A.B(A.a([r,B.ac,q,B.ac,A.E(n.avO(D.bMw,"Collaborators",p,n.gc3u()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kH){s=B.c.j(0.15)
B.d.v(p,A.a([B.O,A.aH(!1,B.a2,!0,A.m(999),A.aO(!1,A.m(999),!0,new A.D(B.h5,A.B(A.a([A.X(B.pd,B.c,m,m,m,14),B.en,A.d("View only",m,m,m,m,m,m,B.aSU,m,m,m)],o),B.m,m,B.e,B.P,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.p(m,A.bx(u,new A.an(B.a_,m,B.aa,B.t,A.a([t,new A.D(B.G9,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.ap),B.f,m,m,new A.o(m,m,m,w,v,D.c1U,B.n),m,m,m,m,m,m,m,1/0)},
avO(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aH(!1,B.a2,!0,A.m(14),A.aO(!1,A.m(14),!0,new A.D(F.alx,A.x(A.a([A.X(d,B.c,w,w,w,18),B.au,A.d(e,w,1,B.a1,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vd,A.d(f,w,1,B.a1,w,w,w,G.Ac,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bfP.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gan(r)&&s.c.length===0)return B.bJ
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bfS(s,t),new A.av(w,v))],x.p)
r=r.gdS(r)
B.d.v(u,r.dF(r,new C.ddH(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.ddI(this),A.T(r).k("N<1,v>")))
return new A.D(B.u8,new A.a6(w,v,new A.an(B.a_,t,B.aa,B.f,u,t),t),t)}}
C.Ku.prototype={}
C.Gb.prototype={}
C.bfR.prototype={
gbjy(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aK2.prototype={}
C.bfS.prototype={
bOi(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.S()
v=A.I()
v.r=B.bB.j(0.75).gp(0)
v.c=2
v.d=B.bE
d.bo(new A.t(n,w),new A.t(m,w),v)
u=(n+m)/2
t=new A.aG(q.r,B.ah,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aY(u,q))
s=w-1.1
r=w-8.8
t.D(new A.kZ(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.kZ(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bt())
q=A.I()
q.r=B.c.gp(0)
d.ad(new A.t(u,w),9,q)
q=A.I()
q.r=B.bB.gp(0)
d.aG(t,q)},
bOg(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aW(a0,new C.de1())
w=f.b
v=w+(B.d.gI(a0).b-w)/2
u=B.d.b2(a0,new C.de2(f))
t=new A.N(a0,new C.de3(f),A.T(a0).k("N<1,K>")).c0(0,new C.de4()).cH(0,1/0,B.vB)
w=f.a
d.bo(f,new A.t(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=d.a,q=x.v,p=0;p<a0.length;a0.length===s||(0,A.M)(a0),++p){o=a0[p]
n=o.a
m=n-w
l=Math.abs(m)
if(l<0.5){k=e.G()
r.drawLine.apply(r,[n,v,n,o.b,k])
k.delete()
continue}j=J.mO(m)
i=Math.min(10,l/2)
l=$.S()
h=A.a([],q)
g=new A.aG(l.r,B.ah,null,null,h)
h.push(new A.aY(w,v-i))
l=j*i
h.push(new A.c5(w,v,w+l,v))
h.push(new A.aq(n-l,v))
h.push(new A.c5(n,v,n,v+i))
h.push(new A.aq(n,o.b))
k=e.G()
n=g.gbw().a.snapshot()
r.drawPath((g.e=new A.cm(n)).a,k)
k.delete()}},
a3(d,e){var w,v,u,t,s,r,q,p,o
$.S()
w=A.I()
w.r=B.bP.j(0.75).gp(0)
w.c=2.2
w.b=B.ab
w.d=B.bE
w.e=B.dT
for(v=this.b.b,u=v.length,t=d.a,s=0;r=v.length,s<r;v.length===u||(0,A.M)(v),++s){q=v[s]
r=q.d
if(r!=null&&r.length!==0)this.bOg(d,w,q.a,r)
else{if(!q.c){r=q.b
r=!(0===r.a&&0===r.b)}else r=!1
if(r){r=q.a
p=q.b
o=w.G()
t.drawLine.apply(t,[r.a,r.b,p.a,p.b,o])
o.delete()}}}for(s=0;s<v.length;v.length===r||(0,A.M)(v),++s){q=v[s]
if(q.c)this.bOi(d,w,q.a,q.b)}},
aw(d){return d.b!==this.b}}
C.bjy.prototype={
gc9p(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aBk
switch(w.c.a){case 0:return D.cVl
case 1:return D.d6f
case 2:return D.dnL}},
gc9s(){var w=this.c,v=C.hsK(w.w),u=C.hsK(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.J,q=t.gc9p(),p=t.c,o=M.bDM(p.f),n=t.gc9s(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gak(q).j(0.35),B.cH,10)],m),k=r?B.av:B.c,j=A.J(r?B.av:B.c,B.r,2)
if(o!=null)w=A.tr(B.A,s,B.cc,B.bU,!1,s,o,!1,s,s)
else{w=A.a([B.d.gI(q).j(0.18),B.d.gak(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.p(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gak(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(s,s,s,s,s,new A.a9(B.a5,B.a8,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.p(s,A.p(s,A.hT(w,B.ap),B.f,s,s,new A.o(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.o(s,s,s,s,l,new A.a9(B.ay,B.aE,B.x,q,s,s),B.a6),s,56,s,s,B.Gp,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.J(r?B.av:B.c,B.r,1.5)
l.push(A.ao(s,A.p(s,A.d(""+k,s,s,s,s,s,s,D.fu6,s,s,s),B.f,s,s,new A.o(B.cg,s,w,j,s,s,B.n),s,s,s,s,D.bDZ,s,s,s),s,s,s,-6,-4,s))}k=r?B.cq:B.c
j=A.m(8)
w=A.J(B.d.gI(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dB,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cq,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aR:B.bn,s,s,s,s,s,s,s,s,7.5,s,s,B.a7,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aB(s,new A.a6(84,112,A.x(A.a([new A.an(B.a_,s,B.aa,B.f,l,s),B.au,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,D.b3a,new A.o(k,s,w,j,m,s,B.n),s,s,s,s,D.bE9,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.beU.prototype={
a3(d,e){var w,v,u,t,s,r,q
$.S()
w=A.I()
v=this.b
u=v?B.c:D.bfZ
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=d.a,s=10;s<v;s+=20)for(r=10;r<u;r+=20){q=w.G()
t.drawCircle(r,s,1,q)
q.delete()}},
aw(d){return d.b!==this.b}}
C.bxo.prototype={
B(d){var w=this,v=null,u=new C.fh8(w),t=w.c,s=t?B.cq:B.c,r=A.m(12),q=u.$3(B.hM,"Zoom in",w.d),p=A.p(v,v,B.f,t?B.bz:B.f6,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.yV,"Zoom out",w.e)
return A.aH(!1,B.a2,!0,r,A.x(A.a([q,p,o,A.p(v,v,B.f,t?B.bz:B.f6,v,v,v,1,v,v,v,v,v,22),u.$3(B.anR,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.P,0,B.p),B.f,s,4,v,B.dm,v,v,v,B.aj)}}
C.bmL.prototype={
B(d){var w=this,v=null,u=B.bP.j(0.15),t=A.J(B.bP,B.r,2),s=w.e,r=x.p
t=A.aB(v,A.p(v,A.x(A.a([A.X(s?N.a0V:A6.O3,B.bP,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fqf,v,v,v)],r),B.m,v,B.b8,B.i,0,B.p),B.f,v,v,new A.o(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fo4,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eRn(w),A.T(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a6(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a_w.prototype={
R(){return new C.aCQ()},
bu(){return this.Q.$0()},
ge1(){return this.w}}
C.aCQ.prototype={
Z(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.au()
r.d!==$&&A.aQ()
r.d=new A.as(new A.b9(t,B.b2,B.aO),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.as(new A.b9(t,B.b2,B.aO),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.as(new A.b9(t,B.b2,B.aO),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.as(new A.b9(t,B.b2,B.aO),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.as(new A.b9(t,B.b2,B.aO),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.as(new A.b9(t,B.b2,B.aO),s)
t=u?q:v.c
r.y=t==null?D.yv:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ial(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.au()
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
v.a1()},
PZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$PZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hhR(p.y,p.w)
w=3
return A.b(A.lq(t.a.w,B.IV),$async$PZ)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b0g(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$PZ)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hMA(p.y,p.w)
t.a.bu()
case 5:w=7
return A.b(Au.H4(78,800),$async$PZ)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dtQ(t,q))
case 1:return A.h(u,v)}})
return A.i($async$PZ,v)},
c9r(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hU(B.o.u(1000*Date.now()),w,D.yv,null,null,null,"","","","","",1,!1,0)
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
s=v.aEJ(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a4(k,!1).O(s)},
aa8(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aa8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.dtP(r),s,null,!0,!0,x.y),$async$aa8)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a4(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aa8,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===B.J,i=new C.u1(j),h=l.a.e,g=A.T(h).k("Z<1>"),f=A.C(new A.Z(h,new C.dtZ(l),g),g.k("L.E"))
h=j?B.e3:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bCo,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ao(k,A.hc(A.aO(!1,k,!0,new A.D(B.m7,A.X(B.ea,B.p0,k,k,k,17),k),B.cM,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbJh(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jK:B.jb
t=M.bDM(l.as)
if(l.as==null)s=A.X(B.p6,j?B.bs:B.bn,k,k,k,40)
else s=k
s=A.at(A.aB(k,new A.an(B.a_,k,B.aa,B.t,A.a([A.h7(u,t,s,k,42),A.ao(0,A.h7(B.bP,k,D.bP8,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gc9o(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aCS(t,"Full name",B.mL,1,1,i,B.mm)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.W,new C.bjw(i,u,new C.du_(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bvQ],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.du0(),A.T(o).k("N<1,ev<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bvS],q)
B.d.v(q,new A.N(f,new C.du2(),A.T(f).k("N<1,ev<n?>>")))
o=A.x(A.a([t,B.am,new C.ady(i,r,"Who is their parent?",p,new C.du3(l),k,o),B.aA,n,B.am,new C.ady(i,m,"Who is their spouse / partner?",q,new C.du4(l),k,o)],v),B.ak,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aCS(q,"Birth date",D.amX,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aCS(m,"Birth place",B.a19,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aCS(n,"Date of death (if deceased)",D.ap4,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aCS(p,"Occupation",B.a2k,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.aa,B.t,w,k),B.aA,s,B.bu,new C.adz(i,"Identity",u,k),B.ad,new C.adz(i,"Family links",o,k),B.ad,new C.adz(i,"Life details",A.x(A.a([q,B.W,m,B.W,n,B.W,p,B.W,C.aCS(r,"Notes",B.lc,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.ad,new C.aCR(i,"Child order",l.chb(l.at),new C.du5(l),new C.du6(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.h7i(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.du7(l):k
B.d.v(r,A.a([B.W,new C.aCR(i,"Visible in tree",u,w,new C.du8(l),k)],v))}r.push(B.W)
w=j?B.jK:B.jb
u=A.m(14)
t=A.J(j?B.e9:B.bO,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.Q,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.p(k,A.iI(k,B.bP,k,B.af,k,new C.du9(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.o(w,k,t,u,k,k,B.n),k,k,k,k,N.ak0,k,k,k))
r.push(B.bu)
w=j?B.aP:B.av
j=j?B.e9:B.bO
r.push(A.B(A.a([A.E(A.dI(B.nM,new C.du1(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cl,k,new A.b7(A.m(14),B.a0),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bE(D.f1m,k,l.gc9q(),A.bo(B.aW,k,k,0,B.c,k,B.cl,k,new A.b7(A.m(14),B.a0),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.au)
return A.en(B.fv,k,B.af,h,new A.a6(420,k,A.cg(A.x(r,B.ak,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ag),k),D.akR,k,B.ake,new A.b7(g,B.a0),k,k)},
chb(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.adz.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jK:B.jb,s=A.m(16)
return A.x(A.a([new A.D(D.alh,u,w),A.p(w,this.e,B.f,w,w,new A.o(t,w,A.J(v?B.e9:B.bO,B.r,1),s,w,w,B.n),w,w,w,w,B.bf,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bjx.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e3:B.c,r=A.m(12),q=A.J((t?B.e9:B.bO).j(0.85),B.r,1),p=v.r
if(p==null)p=B.an
w=A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,14,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u)
return A.p(u,A.aL(u,B.Y,!1,u,!0,B.t,u,A.aM(),v.d,u,u,u,u,u,2,A.br(u,B.eG,u,B.vV,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bs:B.bn,u,u,u,u,u,u,u,u,u,u,u,B.cy,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bP,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ai,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.a9,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a3,u,p,u,u,u,u),B.f,u,u,new A.o(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ady.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e3:B.c,s=A.m(12),r=A.J((u?B.e9:B.bO).j(0.85),B.r,1),q=A.X(B.rw,u?B.bs:B.bn,v,v,v,v),p=A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,14,v,v,B.a7,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e3:B.c
return A.p(v,new A.E_(A.T9(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,v,v,v,B.cy,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.o(t,v,r,s,v,v,B.n),v,v,v,v,B.kG,v,v,v)}}
C.bjw.prototype={
B(d){var w=new C.dua(this)
return A.B(A.a([w.$3(D.w3,"Male",B.OI),B.ac,w.$3(D.og,"Female",B.Ox),B.ac,w.$3(D.yv,"Other",B.nv)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aCR.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jK:B.jb,r=A.m(14),q=A.J(t?B.e9:B.bO,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.p(v,A.B(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aJ4(u,B.yV,w.f,v),B.bm,new C.aJ4(u,B.hM,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.o(s,v,q,r,v,v,B.n),v,v,v,v,B.eB,v,v,v)}}
C.aJ4.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bP.j(0.12)
else w=s.c.a?B.e3:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bP
else t=(s.c.a?B.bs:B.bn).j(0.4)
return A.aH(!1,B.a2,!0,v,A.aO(!1,u,!0,new A.a6(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.adA.prototype={
bSl(d){switch(d.a){case 0:return B.bP
case 1:return B.bB
case 2:return B.cY}},
bSm(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aYd(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
Ak(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e3:B.c
u=A.m(12)
t=A.J((w?B.e9:B.bO).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bP,p,p,p,18),B.at],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bn,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.au,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,14,p,p,B.Q,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.p(p,A.B(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(v,p,t,u,p,p,B.n),p,p,p,B.cv,B.yd,p,p,1/0)},
aeG(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jK:B.jb,s=A.m(16),r=A.J(v?B.e9:B.bO,B.r,1)
return A.x(A.a([new A.D(D.alh,u,w),A.p(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(t,w,r,s,w,w,B.n),w,w,w,w,B.bS,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hxE(r,q),o=q.c,n=t.bSl(o),m=M.bDM(q.f),l=t.e.a,k=l?B.e3:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kH?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bs:B.bn,s,s,s,s,s,s,s,s,12,s,s,B.a7,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.J(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.at(A.p(s,A.h7(u,m,m==null?A.X(B.p6,n,s,s,s,48):s,s,52),B.f,s,s,new A.o(s,s,w,s,v,s,B.a6),s,s,s,s,B.ev,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.J(n.j(0.45),B.r,1)
v=A.at(A.p(s,A.d(t.bSm(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,B.mH,s,s,s),s,s,s)
u=x.p
i=A.a([t.Ak("Full name",i,B.mL)],u)
if(p>0)i.push(t.Ak("Child order","#"+p,B.OD))
r=A.a([h,B.au,r,B.aN,l,B.W,v,B.bu,t.aeG("Identity",i),B.ad,t.aeG("Life details",A.a([t.Ak("Birth date",q.w,D.amX),t.Ak("Birth place",q.x,B.a19),t.Ak("Date of death",q.y,D.ap4),t.Ak("Occupation",q.z,B.a2k)],u)),B.ad,t.aeG("Family links",A.a([t.Ak("1. Parent",t.aYd(q.d),B.GD),t.Ak("2. Spouse",t.aYd(q.e),B.GT)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.ad,t.aeG("Notes",A.a([t.Ak("Notes",q,B.lc)],u))],u))
r.push(B.bu)
r.push(A.bE(B.Kj,s,new C.duk(d),A.bo(B.aW,s,s,s,s,s,B.cl,s,new A.b7(A.m(14),B.a0),s,s,s)))
return A.eS(s,k,new A.cU(B.lW,A.cg(A.x(r,B.ak,s,B.e,B.P,0,B.p),B.t,s,B.y,s,B.vZ,s,s,B.ag),s),s,s,s,B.Gc,B.d8,s,new A.b7(j,B.a0),s)}}
C.G7.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bs:B.bn
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.w1,A.hc(A.aH(!1,B.a2,!0,A.m(8),A.aO(!1,A.m(8),!0,new A.a6(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.aqa.prototype={
eZ(){var w,v,u=this,t=x.N,s=A.U(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.a8().ae())
w=u.c
v=A.T(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.cd_(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jh(w,new C.cd0(),t,x.fO))
return s}}
C.aqb.prototype={
R(){return new C.aEo(A.a([],x.bF))},
gcZ(){return this.c}}
C.aEo.prototype={
Z(){this.a2()
this.JP()},
JP(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$JP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cd3(t.a.c),$async$JP)
case 3:r=e
w=4
return A.b(C.B1(t.a.c),$async$JP)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.r7(q,new C.dZN(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.dZO(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$JP,v)},
yz(d){var w=null,v=this.c
if(v==null)return
v.K(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
Kz(d,e){return this.cGm(d,e)},
cGm(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$Kz=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.dZS(q,e))
t=3
w=6
return A.b(d.$0(),$async$Kz)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.dZT(q))
$.eW.mt()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Kz,v)},
XW(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pj(r,s.c,s.e),$async$XW)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kz(new C.dZK(t),"Preparing download\u2026"),$async$XW)
case 4:case 1:return A.h(u,v)}})
return A.i($async$XW,v)},
Y_(d){return this.bQh(d)},
bQh(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Y_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pj(r,s.c,s.e),$async$Y_)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.Kz(new C.dZL(t,d),"Preparing file\u2026"),$async$Y_)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Y_,v)},
agC(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$agC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xu.ca().Mq(B.RB,B.uc,!0),$async$agC)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
o=A.jx(o,0,null)
u=o
w=1
break}t=2
w=6
break
case 4:t=3
m=s.pop()
p=A.ab(m)
$.am.$1("[family tree sync pick] file_picker: "+A.w(p))
w=6
break
case 3:w=2
break
case 6:u=A.H3()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$agC,v)},
YC(d){return this.c_L(d)},
c_L(d){var w=0,v=A.j(x.H),u=this
var $async$YC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.Kz(new C.dZM(u,d),"Restoring family trees\u2026"),$async$YC)
case 2:return A.h(null,v)}})
return A.i($async$YC,v)},
YB(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.agC(),$async$YB)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.YC(s),$async$YB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YB,v)},
a2w(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2w=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pj(r,s.c,s.e),$async$a2w)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.Kz(new C.dZR(t),"Creating QR code\u2026"),$async$a2w)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2w,v)},
a27(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a27=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Dg()){t.yz("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a4(s,!1).cd(A.dZ(new C.dZP(),!0,null,x.N)),$async$a27)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.YC(r),$async$a27)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a27,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.J,n=o?B.Ba:B.iu,m=o?D.air:B.aP,l=o?B.aJ:B.bO,k=o?B.aP:B.av,j=new C.de5(n,m,l,k,o?B.bM:B.bn)
l=A.aF(p,p,p,p,A.X(B.eK,k,p,p,p,20),p,p,p,new C.dZV(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eI(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.ddE(!0,B.jD,B.aQ,B.aQ,q.r?p:q.gcx8(),j,s,"Show restore QR"),1),B.at],u))}s=q.e
r=q.r?p:q.gcth()
t.push(A.E(C.ddE(!s,B.jj,B.b6,B.bw,r,j,"From another phone","Scan QR to restore"),1))
t=A.B(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.ddE(!1,B.hN,B.aW,B.bP,q.r?p:q.gbQa(),j,"Photos & books included","Download all trees"),1),B.at],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.ddE(!1,R.z_,B.aC,B.aU,q.r?p:q.gc_I(),j,s,"Upload backup file"),1))
l=A.a([new C.bfQ(v,l,p),B.kT,new C.acQ(j,"QR restore",p),B.W,t,B.d4,new C.acQ(j,"Backup files",p),B.W,A.B(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.kT,new C.acQ(j,"One tree",p),B.W],u)
B.d.v(v,J.b6(q.d,new C.dZW(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cf(l,p,B.a_D,p,p,B.ag,!1)],u)
if(q.r){v=A.m(18)
t=A.J(B.aW.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dr,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ao(24,A.bl(!0,A.p(p,A.B(A.a([N.aRl,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.Q,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(m,p,t,v,s,p,B.n),p,p,p,p,B.BR,p,p,p),!0,!1,B.af,!0,!1),p,p,20,20,p,p))}return A.c7(w,n,new A.an(B.a_,p,B.aa,B.t,l,p),p,!1,!1,p,p)}}
C.de5.prototype={}
C.bfQ.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aW.j(0.32),B.kp,28)],x.V)
t=A.ao(p,A.X(B.uw,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.p(p,new A.an(B.a_,p,B.aa,B.t,A.a([t,new A.D(B.a9,A.B(A.a([A.p(p,D.bY7,B.f,p,p,new A.o(s,p,A.J(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oD,A.E(A.x(A.a([D.fzm,B.O,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.o(p,p,p,v,u,D.c57,B.n),p,p,p,p,p,p,p,p)}}
C.acQ.prototype={
B(d){var w=null
return A.B(A.a([A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ac,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)}}
C.bfO.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aQ.j(0.4):m.c
k=A.J(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aQ.j(0.1),B.cH,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.J(t.j(0.35),B.r,1)
return A.aH(!1,B.a2,!0,q,A.aO(!1,o,!0,A.eJ(A.d9(new A.D(E.a_f,A.x(A.a([A.p(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.o(v,q,s,u,q,q,B.n),q,q,q,q,B.rt,q,q,q),B.ad,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bD,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cy,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.o(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bfT.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.J(s.c,B.r,1),q=B.aW.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aH(!1,B.a2,!0,v,A.aO(!1,u,!0,A.eJ(new A.D(B.eT,A.B(A.a([A.p(v,D.bXn,B.f,v,v,new A.o(q,v,A.J(B.aW.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rt,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hN,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.o(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a_R.prototype={
R(){return new C.aEn()},
gcZ(){return this.c}}
C.aEn.prototype={
Z(){this.a2()
this.a9G()},
a9G(){var w=0,v=A.j(x.H),u=this,t
var $async$a9G=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b2V(u.a.c,B.DA),$async$a9G)
case 2:t=e
if(u.c!=null)u.m(new C.dZF(u,t))
return A.h(null,v)}})
return A.i($async$a9G,v)},
ahZ(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ahZ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.dZG(q))
t=4
p=A.hjx(q.a.d,B.DA)
if(p==null){n=A.bd("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.asp(n.e,m,l,B.DA,p,n.f),$async$ahZ)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.dZH(q))
q.c.K(x.q).f.U(D.fak)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.ea(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.dZI(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahZ,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.P(d).ax.a===B.J,o=p?B.jw:B.q0,n=p?B.it:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eI(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fPL,q,q,q,1,q,!0)
w=A.m(24)
v=A.J(B.aW.j(0.35),B.r,1)
u=A.q_(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aW,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.p(q,A.x(A.a([B.O,u,B.bu,t,B.O,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aR:B.al,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.m,q,B.b8,B.i,0,B.p),B.f,q,q,new A.o(n,q,v,w,q,q,B.n),q,q,q,q,B.a9,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ae:B.br,q,q,q,q,q,q,q,q,q,q,q,B.Q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gct_()
if(u)u=B.JO
else u=A.X(r.e===!0?B.hw:B.amW,q,q,q,q,q)
w=A.a([w,B.ad,v,B.ad,new A.a6(1/0,q,A.et(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cf,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aW,q,B.h0,q,q,q,new A.ay(B.aW.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hZ,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aB:B.al,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.W)
w.push(new A.a6(1/0,q,A.bE(B.Al,q,new C.dZJ(d),A.bo(B.aW,q,q,q,q,B.h0,q,q,q,q,q,q)),q))
return A.c7(m,o,new A.D(B.a9,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a_S.prototype={
R(){return new C.bkY(A.zz(B.y2,B.nS,B.uF))}}
C.bkY.prototype={
q(){this.d.q()
this.a1()},
B(d){var w=null
return A.c7(A.eI(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fHA,w,w,w,1,w,!0),B.w,A.zy(this.d,B.bU,new C.dZX(this,d)),w,!1,!1,w,w)}}
C.aZN.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.R5,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lL.prototype={}
C.a6J.prototype={
R(){return new C.bkF(null,null)}}
C.bkF.prototype={
Z(){var w=this,v=null
w.a2()
w.d=A.bn(v,B.rm,v,1,v,w)
w.e=A.bn(v,B.q7,v,1,v,w)
w.a.toString
w.d.cM(0)
w.e.cM(0)},
bx(d){var w,v,u=this
u.bH(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cM(0)},
q(){var w=this.d
w===$&&A.c()
w.q()
w=this.e
w===$&&A.c()
w.q()
this.bwM()},
B(d){var w,v,u=this,t=B.d.dK(D.a5c,new C.dLC(u),new C.dLD())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.czY(A.cd(new A.h5(A.a([w,v],x.dS)),new C.dLE(u,t),null),!0)}}
C.bkE.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b1E(d,e)
break
case"house":p.m7(d,e,D.dbb)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdC()
$.S()
t=A.I()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.ad(new A.t(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mc(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.B2(d,e,12)
p.yb(d,e,B.l2,5,14)
break
case"grocery":p.chV(d,e)
break
case"calculator":p.chC(d,e)
break
case"lumber":p.ci2(d,e)
break
case"kitchen":p.chY(d,e)
break
case"landscape":p.m7(d,e,D.dbM)
s=new A.aG($.S().r,B.ah,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aY(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c5(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c5(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.bt())
w=A.I()
w.r=B.ed.j(0.85).gp(0)
d.aG(s,w)
p.B2(d,e,8)
p.yb(d,e,B.iw,4,18)
break
case"plumbing":p.cib(d,e)
break
case"electrical":p.m7(d,e,D.dn0)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.S()
u=A.I()
u.r=B.c.j(q*0.12).gp(0)
d.aP(new A.a3(0,0,0+e.a,0+e.b),u)
p.mc(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mc(d,e,B.m_.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.B2(d,e,10)
break
case"store":p.cil(d,e)
break
case"paint_remodel":p.ci6(d,e)
break
case"roofing":p.cid(d,e)
break
case"warehouse":p.cis(d,e)
break
case"vehicles":p.ciq(d,e)
break
case"farm":p.chP(d,e)
break
case"restaurant":p.cic(d,e)
break
case"tools":p.cio(d,e)
break
case"wallet":p.cir(d,e)
break
case"concrete":p.chI(d,e)
break
case"blueprint":p.chA(d,e)
break
default:p.b1E(d,e)}},
m7(d,e,f){var w,v=new A.a3(0,0,0+e.a,0+e.b)
$.S()
w=A.I()
w.sam(new A.a9(B.ay,B.aE,B.x,f,null,null).aB(0,v))
d.aP(v,w)},
mc(d,e,f,g,h){var w,v,u,t,s,r,q=new A.t(e.a/2,e.b/2),p=e.gdC()/2-h
$.S()
w=A.I()
w.b=B.ab
w.c=2.4
w.r=f.gp(0)
for(v=d.a,u=0;u<24;++u){t=u/24*3.141592653589793*2+g
s=A.bY(q,p)
r=w.G()
v.drawArc.apply(v,[A.bH(s),t*57.29577951308232,(t+0.1439896632895322-t)*57.29577951308232,!1,r])
r.delete()}},
yb(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=e.a/2,n=e.b/2,m=e.gdC()/2-h
for(w=this.c*3.141592653589793*2,v=d.a,u=0;u<g;++u){t=w+u/g*3.141592653589793*2
s=Math.cos(t)
r=Math.sin(t)
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=f.j(0.55+0.35*Math.sin(t*2)).gp(0)
p=q.G()
v.drawCircle(o+s*m,n+r*m,3.5,p)
p.delete()}},
B2(d,e,f){var w,v,u,t,s,r,q,p,o,n
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<f;++s){r=(Math.sin(w+s*0.8)+1)/2
q=B.k.F(s*0.17,0.9)
p=B.k.F(s*0.23,0.85)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.c.j(0.2+r*0.6).gp(0)
n=o.G()
t.drawCircle(v*(q+0.05),u*(p+0.08),1.5+r*2.5,n)
n.delete()}},
b1E(d,e){var w,v=this
v.m7(d,e,D.dln)
w=v.c
v.mc(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mc(d,e,B.bL.j(0.45),-w*3.141592653589793*1.4,22)
v.bOc(d,e,B.hU,w)
v.yb(d,e,B.c.j(0.7),6,8)},
bOc(d,e,f,g){var w,v,u,t,s,r,q,p
$.S()
w=A.I()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=d.a,r=0;r<3;++r){q=v*(0.25+r*0.22)+Math.sin(u+r)*4
p=w.G()
s.drawRect(A.bH(new A.a3(16,q,t,q+3)),p)
p.delete()}},
chV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m7(d,e,D.cqL)
for(w=j.c*3.141592653589793*2,v=e.a,u=e.b,t=d.a,s=0;s<6;++s){r=w+s*1.1
q=B.o.F(s,3)
p=Math.sin(r)
o=B.o.ao(s,3)
n=Math.cos(r*0.8)
m=B.o.F(s,2)
$.S()
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=D.d9o[B.o.F(s,4)].j(0.85).gp(0)
k=l.G()
t.drawCircle(v*(0.15+q*0.28)+p*8,u*(0.18+o*0.55)+n*10,7+m*2,k)
k.delete()}j.mc(d,e,B.c.j(0.35),w,16)
j.yb(d,e,B.iw,5,12)},
chC(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
h.m7(d,e,D.cqT)
w=h.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdC()
$.S()
q=A.I()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.ad(new A.t(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fv(g,g,g,g,g,B.a3,B.bZ,g,B.dA,B.bW)
for(o=0;o<6;++o){n=v+o*0.9
r=D.ddu[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.saX(0,new A.eu(r,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,q,g,g,g,g,14+m*4,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.el()
p.a3(d,new A.t(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ao(o,3)*0.62)+Math.cos(n)*5))}for(v=h.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cqV[o]
l=B.kx.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.saX(0,new A.eu(m,g,g,B.cQ,g,g,g,g,g,g,new A.F(!0,l,g,g,g,g,12+k*3,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)))
p.el()
p.a3(d,new A.t(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ao(o,3)*0.38)+Math.sin(n)*6))}h.mc(d,e,B.c.j(0.35),w*1.5,14)
h.mc(d,e,B.eH.j(0.55),-v*3.141592653589793*2,8)
h.mc(d,e,B.xN.j(0.4),r*2.8,22)
h.yb(d,e,B.pQ,8,10)
h.B2(d,e,14)
for(w=v*0.35,t-=12,v=d.a,o=0;o<4;++o){j=s*B.k.F(w+o*0.22,0.9)
$.S()
r=new A.ap(B.R,B.N,B.U,B.V,B.S)
r.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
r.c=1.2
i=r.G()
v.drawLine.apply(v,[12,j,t,j,i])
i.delete()}},
ci2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m7(d,e,V.ayz)
for(w=m.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=d.a,s=0;s<5;++s){r=Math.sin(w+s*0.7)
q=v+s*v
p=A.bu(new A.a3(20,q,u,q+10),B.hA)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=A.ar(B.fO,B.oV,(r+1)/2).gp(0)
n=o.G()
t.drawRRect(A.el(p),n)
n.delete()}m.mc(d,e,B.fO.j(0.35),w,15)
m.B2(d,e,8)},
chY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
j.m7(d,e,D.d9T)
for(w=j.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=d.a,r=0;r<8;++r){q=v+r*0.75
p=(Math.sin(q)+1)/2
o=B.k.F(r*0.11,0.85)
n=Math.sin(q*1.3)
m=B.k.F(r*0.13,0.7)
$.S()
l=new A.ap(B.R,B.N,B.U,B.V,B.S)
l.r=B.c.j(0.25+p*0.55).gp(0)
k=l.G()
s.drawCircle(u*(0.1+o)+n*12,t*(0.15+m),2+p*3,k)
k.delete()}j.mc(d,e,B.bL.j(0.4),-w*3.141592653589793*2.2,11)
j.yb(d,e,B.pN,4,14)},
cib(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.m7(d,e,D.cZi)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=l.c*0.08,w/=2,u*=0.55,r=d.a,q=0;q<3;++q){p=Math.min(v,t)
o=B.k.F(s,0.12)
$.S()
n=new A.ap(B.R,B.N,B.U,B.V,B.S)
n.b=B.ab
n.c=2
n.r=B.c.j(0.45-q*0.12).gp(0)
m=n.G()
r.drawCircle(w,u,p*(0.12+q*0.14+o),m)
m.delete()}l.yb(d,e,B.p_,6,12)
l.mc(d,e,B.c.j(0.3),-l.d*3.141592653589793*2,18)},
cil(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.m7(d,e,D.cEv)
for(w=n.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=d.a,s=0;s<4;++s){r=Math.sin(w+s*1.5)
q=14+s*v/4
q=A.bu(new A.a3(q,14,q+u,22),B.i9)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=A.ar(B.fc,B.bL,(r+1)/2).gp(0)
o=p.G()
t.drawRRect(A.el(q),o)
o.delete()}n.mc(d,e,B.c.j(0.3),w,16)
n.B2(d,e,8)
n.yb(d,e,B.vG,5,13)},
ci6(d,e){var w,v,u,t,s,r,q,p,o
this.m7(d,e,D.d4t)
for(w=this.c,v=e.a,u=e.b,t=d.a,s=0;s<4;++s){r=B.k.F(w+s*0.2,1)
q=v*(0.18+s*0.18)
p=u*(0.15+r*0.55)
p=A.bu(new A.a3(q,p,q+8,p+(18+r*22)),B.hB)
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=[B.ie,B.dt,B.bL,B.et][s].j(0.85).gp(0)
o=q.G()
t.drawRRect(A.el(p),o)
o.delete()}this.mc(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cid(d,e){var w,v,u,t,s,r,q,p,o
this.m7(d,e,D.d1T)
for(w=e.b,v=this.c*0.35,u=e.a,t=d.a,s=0;s<8;++s){r=w*(0.12+B.k.F(v+s*0.12,0.75))
q=B.o.F(s,4)*0.22
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.c.j(0.25).gp(0)
p.c=1.5
o=p.G()
t.drawLine.apply(t,[u*(0.1+q),r,u*(0.18+q),r+10,o])
o.delete()}this.yb(d,e,B.cs,7,11)},
cis(d,e){var w,v,u,t,s,r,q,p,o,n
this.m7(d,e,D.cHe)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=d.a,r=0;r<4;++r){q=v+r
p=22+r*16
o=u-r*14+Math.sin(q)*4
o=A.bu(new A.a3(p,o,p+(t-r*8),o+16),B.hA)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=A.ar(B.cs,B.aP,(Math.sin(q)+1)/2).gp(0)
n=p.G()
s.drawRRect(A.el(o),n)
n.delete()}this.mc(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
ciq(d,e){var w,v,u,t,s,r,q,p,o
this.m7(d,e,D.dr6)
for(w=e.a,v=this.c*0.45,u=e.b,t=d.a,s=0;s<5;++s){r=w*(B.k.F(v+s*0.18,1.1)-0.05)
q=u*(0.62+B.o.F(s,2)*0.08)
q=A.bu(new A.a3(r,q,r+28,q+8),B.hA)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=B.c.j(0.35+s*0.08).gp(0)
o=p.G()
t.drawRRect(A.el(q),o)
o.delete()}this.B2(d,e,6)},
chP(d,e){var w,v,u,t,s,r,q,p,o,n
this.m7(d,e,D.d8t)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.S()
s=A.I()
s.r=B.m_.j(0.75).gp(0)
d.ad(new A.t(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,s=d.a,r=0;r<6;++r){q=Math.sin(w+r)
p=u*(0.12+r*0.14)
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.hd.j(0.85).gp(0)
o.c=3
n=o.G()
s.drawLine.apply(s,[p,v,p+q*6,t,n])
n.delete()}this.mc(d,e,B.m_.j(0.35),w,14)},
cic(d,e){var w,v,u,t,s,r,q,p,o=this
o.m7(d,e,D.db0)
for(w=o.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=d.a,s=0;s<4;++s){r=A.bL(new A.t(v*(0.28+s*0.16),u+Math.sin(w+s*0.9)*8),18,10)
$.S()
q=new A.ap(B.R,B.N,B.U,B.V,B.S)
q.r=B.c.j(0.22).gp(0)
p=q.G()
t.drawOval(A.bH(r),p)
p.delete()}o.yb(d,e,B.pN,5,16)
o.B2(d,e,7)},
cio(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m7(d,e,D.dow)
w=m.c
v=w*3.141592653589793
m.mc(d,e,B.oV.j(0.55),v*3,10)
m.mc(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=d.a,s=0;s<3;++s){r=w+s*2.1
q=Math.cos(r)
p=Math.sin(r)
$.S()
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.oV.j(0.8).gp(0)
n=o.G()
t.drawCircle(v+q*34,u+p*22,4,n)
n.delete()}},
cir(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.m7(d,e,D.drL)
for(w=m.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=d.a,r=0;r<5;++r){q=(Math.sin(v+r*1.2)+1)/2
p=u*(0.2+r*0.03)
o=t*(0.28+q*0.08)
o=A.bu(new A.a3(p,o,p+36,o+22),B.i9)
$.S()
p=new A.ap(B.R,B.N,B.U,B.V,B.S)
p.r=A.ar(B.iw,B.m_,q).gp(0)
n=p.G()
s.drawRRect(A.el(o),n)
n.delete()}m.B2(d,e,9)
m.mc(d,e,B.c.j(0.4),w*2.2,12)},
chI(d,e){var w,v,u,t,s,r,q,p,o,n
this.m7(d,e,D.dgj)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bY(new A.t(v,u),34)
$.S()
s=A.I()
s.b=B.ab
s.c=5
s.r=B.c.j(0.45).gp(0)
d.e3(t,w,3.7699111843077517,!1,s)
for(t=d.a,r=0;r<6;++r){q=w+r*1.05
s=Math.cos(q)
p=Math.sin(q)
o=new A.ap(B.R,B.N,B.U,B.V,B.S)
o.r=B.bO.j(0.85).gp(0)
n=o.G()
t.drawCircle(v+s*34,u+p*34,3,n)
n.delete()}},
chA(d,e){var w,v,u,t,s,r,q,p
this.m7(d,e,D.dc6)
$.S()
w=A.I()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=d.a,s=0;s<v;s+=18){r=w.G()
t.drawLine.apply(t,[s,0,s,u,r])
r.delete()}for(q=0;q<u;q+=18){r=w.G()
t.drawLine.apply(t,[0,q,v,q,r])
r.delete()}t=this.c
p=u*B.k.F(t*0.85,1)
$.S()
u=A.I()
u.r=B.dt.j(0.45).gp(0)
d.aP(new A.a3(0,p,0+v,p+6),u)
this.mc(d,e,B.l2.j(0.45),-t*3.141592653589793*2,11)},
aw(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.at8.prototype={
a_L(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a_L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aQV(),$async$a_L)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a8X(s),$async$a_L)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a_L,v)},
agD(d){return this.ckJ(d)},
ckJ(d){var w=0,v=A.j(x.H),u=this,t
var $async$agD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.iiL(d),$async$agD)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$agD,v)},
B(d){var w,v,u,t=null,s=A.P(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jK:B.jb
w=x.p
v=A.a([C.aRj(!0,B.qZ,1/0,B.qi,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c4(new A.bO(B.b4,t,t,new A.D(B.vT,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.Q,t,t,!0,t,t,t,t,t,B.azw,t,t),t,t,t),t),t),new A.o(t,t,t,t,t,new A.a9(B.b4,B.b7,B.x,u,t,t),B.n),B.bg))}v.push(A.ao(8,A.B(A.a([A.E(A.dl(D.bQV,D.fvv,new C.clz(this,d),A.bo(B.aW,t,t,t,B.c,t,B.jQ,t,t,t,t,B.cb)),1),B.ac,A.E(A.et(D.bZo,D.fKI,this.gcbH(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jQ,t,t,D.b1I,t,t,t,B.cb)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fE(1.7777777777777777,A.aH(!1,B.a2,!0,B.qZ,new A.an(B.a_,t,B.b0,B.t,v,t),B.ap,s,0,t,t,t,t,t,B.aj),t)}}
C.aMs.prototype={
aY(){this.b6()
this.b4()
this.dH()},
q(){var w=this,v=w.b5$
if(v!=null)v.a6(0,w.gdD())
w.b5$=null
w.a1()}}
C.aUj.prototype={}
C.aUi.prototype={}
C.aSh.prototype={}
C.Zu.prototype={
R(){return new C.azA()}}
C.azA.prototype={
Z(){var w,v,u=this
u.a2()
u.a.toString
w=new A.b9("",B.b2,B.aO)
v=$.au()
u.d!==$&&A.aQ()
u.d=new A.as(w,v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.au()
w.P$=0
this.a1()},
Kp(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.K(x.q).f.U(D.faP)
return}t=u.c
t.toString
v=u.e
A.a4(t,!1).O(new C.aUj(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.P(d).ax.a===B.J,l=m?B.e3:B.c,k=A.m(20),j=A.p(n,D.bZ3,B.f,n,n,new A.o(B.aW.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bD,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.B(A.a([j,B.bd,i,A.aF(n,n,n,n,A.X(B.cz,m?B.bs:B.bn,n,n,n,n),n,n,n,new C.d5m(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,12,n,n,B.Q,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bs:B.bn,n,n,n,n,n,n,n,n,11,n,n,B.cy,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hjN(new C.d5n(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.av,n,n,n,n,n,n,n,n,n,n,n,B.a7,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jK:B.jb
r=A.m(12)
q=A.m(12)
p=m?B.e9:B.bO
t=A.aL(n,B.Y,!0,n,!0,B.t,n,A.aM(),u,n,n,n,n,n,2,A.br(n,new A.b5(4,r,B.dk),n,n,n,n,n,n,!0,new A.b5(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d5o(o),n,!1,n,n,!1,n,!0,n,B.a9,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a3,n,A_.JV,n,n,n,n)
u=m?B.aP:B.av
m=m?B.e9:B.bO
return A.eS(n,l,new A.cU(B.lW,A.cg(A.x(A.a([j,B.aN,i,B.au,w,B.O,v,B.aN,t,B.bu,A.B(A.a([A.E(A.dI(B.di,new C.d5p(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cl,n,new A.b7(A.m(12),B.a0),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.at,A.E(A.bE(D.fKX,n,o.ga2S(),A.bo(B.aW,n,n,n,B.c,n,B.cl,n,new A.b7(A.m(12),B.a0),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.P,0,B.p),B.t,n,B.y,n,B.BS,n,n,B.ag),n),n,n,n,A5.BT,B.d8,n,new A.b7(k,B.a0),n)}}
C.Zt.prototype={
R(){return new C.azz()}}
C.azz.prototype={
Z(){this.a2()
var w=$.au()
this.d!==$&&A.aQ()
this.d=new A.as(B.as,w)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.au()
w.P$=0
this.a1()},
Kp(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.K(x.q).f.U(D.f8s)
return}v=this.c
v.toString
A.a4(v,!1).O(new C.aUi(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.P(d).ax.a===B.J,o=p?B.e3:B.c,n=A.m(20),m=A.p(q,D.bVz,B.f,q,q,new A.o(B.bP.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bD,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bs:B.bn,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.B(A.a([m,B.bd,l,A.aF(q,q,q,q,A.X(B.cz,p?B.bs:B.bn,q,q,q,q),q,q,q,new C.d5i(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aW.j(p?0.12:0.08)
w=A.m(12)
v=A.J(B.aW.j(0.25),B.r,1)
u=A.X(B.amI,B.aW.j(0.9),q,q,q,18)
l=A.p(q,A.B(A.a([u,B.at,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.o(l,q,v,w,q,q,B.n),q,q,q,q,B.bA,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.av,q,q,q,q,q,q,q,q,q,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jK:B.jb
t=A.m(12)
s=A.m(12)
r=p?B.e9:B.bO
v=A.aL(q,B.Y,!0,q,!0,B.t,q,A.aM(),w,q,q,q,q,q,2,A.br(q,new A.b5(4,t,B.dk),q,q,q,q,q,q,!0,new A.b5(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ai,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d5j(this),q,!1,q,q,!1,q,!0,q,B.a9,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a3,q,B.kU,q,q,q,q)
w=p?B.aP:B.av
p=p?B.e9:B.bO
return A.eS(q,o,new A.cU(B.lW,A.cg(A.x(A.a([m,B.aN,l,B.aA,v,B.bu,A.B(A.a([A.E(A.dI(B.di,new C.d5k(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cl,q,new A.b7(A.m(12),B.a0),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.at,A.E(A.bE(D.fS1,q,this.ga2S(),A.bo(B.bP,q,q,q,B.c,q,B.cl,q,new A.b7(A.m(12),B.a0),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.P,0,B.p),B.t,q,B.y,q,B.BS,q,q,B.ag),q),q,q,q,A5.BT,B.d8,q,new A.b7(n,B.a0),q)}}
C.Z0.prototype={
R(){return new C.ayd()}}
C.ayd.prototype={
Z(){var w,v=this
v.a2()
w=$.au()
v.d!==$&&A.aQ()
v.d=new A.as(B.as,w)
v.e!==$&&A.aQ()
v.e=new A.as(new A.b9("1",B.b2,B.aO),w)
v.f!==$&&A.aQ()
v.f=new A.as(B.as,w)
v.r!==$&&A.aQ()
v.r=new A.as(B.as,w)},
q(){var w,v=this,u=v.d
u===$&&A.c()
w=u.S$=$.au()
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
v.a1()},
gJK(){var w,v=this.e
v===$&&A.c()
w=A.cY(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gajM(){var w=this.f
w===$&&A.c()
w=A.cY(B.a.i(w.a.a))
return w==null?0:w},
gb4r(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aPc(d){var w,v=B.k.E(this.gJK()+d,0.25,999999),u=B.k.j3(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.k.N(v))
else{u=B.k.ac(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aN(u,w,"")}t.saX(0,u)
this.m(new C.cDx())},
ayt(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aW,w,w,w,20):w,u=d.a,t=u?B.jK:B.jb,s=A.m(14),r=A.m(14)
u=u?B.e9:B.bO
return A.br(w,new A.b5(4,s,B.dk),w,B.bA,w,w,w,w,!0,new A.b5(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b5(4,A.m(14),B.acE),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cbI(d,e,f){return this.ayt(d,e,f,null)},
Kp(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gajM()<=0){s.c.K(x.q).f.U(D.fcH)
return}r=s.c
r.toString
v=s.gJK()
u=s.gajM()
t=s.gb4r()
A.a4(r,!1).O(new C.aSh(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.P(d).ax.a===B.J,m=new C.u1(n),l=n?B.e3:B.c,k=A.m(24),j=x.O,i=A.a([B.aW.j(0.22),B.bP.j(0.14)],j),h=A.m(14)
i=A.p(o,D.bOO,B.f,o,o,new A.o(o,o,A.J(B.aW.j(0.35),B.r,1),h,o,new A.a9(B.a5,B.a8,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bD,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.cy,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.B(A.a([i,B.bd,h,A.aF(o,o,o,o,A.X(B.cz,n?B.bs:B.bn,o,o,o,o),o,o,o,new C.cDD(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aL(o,B.Y,!0,o,!0,B.t,o,A.aM(),h,o,o,o,o,o,2,p.ayt(m,"Item name (optional)","Lumber, paint, labor\u2026",B.OH),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a3,o,A_.JV,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jK:B.jb
t=A.m(14)
s=A.J(n?B.e9:B.bO,B.r,1)
r=A.aF(o,o,o,o,A.X(B.yV,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDE(p),o,o,o,o,o,B.cb)
q=p.e
q===$&&A.c()
q=A.aL(o,B.Y,!1,o,!0,B.t,o,A.aM(),q,o,o,o,o,o,2,D.c_X,B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDF(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.an,o,o,o,o)
u=A.p(o,A.B(A.a([r,new A.a6(52,o,q,o),A.aF(o,o,o,o,A.X(B.hM,n?B.aP:B.av,o,o,o,20),o,o,o,new C.cDG(p),o,o,o,o,o,B.cb)],w),B.m,o,B.e,B.P,0,o,o),B.f,o,o,new A.o(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,16,o,o,B.Q,o,o,!0,o,o,o,o,o,o,o,o)
s=A.B(A.a([u,B.at,A.E(A.aL(o,B.Y,!1,o,!0,B.t,o,A.aM(),t,o,o,o,o,o,2,p.ayt(m,"Amount","0.00",B.i_),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,B.e1,o,o,o,1,o,o,!1,"\u2022",o,new C.cDH(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a3,o,B.an,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d4Y,new C.cDI(p,m),t),t.k("ak.E"))
i=A.a([i,B.bu,v,B.aA,h,B.O,s,B.ad,A.bX(B.bC,u,B.bq,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.W,A.aL(o,B.Y,!1,o,!0,B.t,o,A.aM(),h,o,o,o,o,o,2,p.cbI(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cDJ(p),o,o,o,!1,o,o,!1,o,!0,o,B.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a3,o,B.kU,o,o,o,o)],w))}i.push(B.aN)
h=B.aW.j(n?0.18:0.1)
j=A.a([h,B.bP.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.J(B.aW.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,11,o,o,B.Q,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJK()===B.k.j3(p.gJK())?B.k.N(p.gJK()):p.gJK()
s=p.gb4r()
r=A.B3(p.gajM())
i.push(A.p(o,A.B(A.a([A.E(A.x(A.a([u,B.au,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bs:B.bn,o,o,o,o,o,o,o,o,12,o,o,B.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bEz(p.gJK()*p.gajM(),B.b_,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.o(o,o,v,h,o,new A.a9(B.a5,B.a8,B.x,j,o,o),B.n),o,o,o,o,B.jh,o,o,o))
i.push(B.bu)
j=A.m(14)
h=n?B.e9:B.bO
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cl,o,new A.b7(j,B.a0),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.B(A.a([A.E(A.dI(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.av,o,o,o,o,o,o,o,o,o,o,o,B.Q,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cDK(d),h),1),B.at,A.E(A.dl(D.aq9,D.fNV,p.ga2S(),A.bo(B.aW,o,o,0,B.c,o,B.cl,o,new A.b7(A.m(14),B.a0),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eS(o,l,new A.cU(A4.ad3,A.cg(A.x(i,B.ak,o,B.e,B.P,0,B.p),B.t,o,B.y,o,Ag.rs,o,o,B.ag),o),o,o,o,B.Nt,B.d8,o,new A.b7(k,B.a0),o)}}
C.a1E.prototype={
R(){return new C.bxe()}}
C.bxe.prototype={
Z(){var w,v,u=this
u.a2()
w=u.a.e
v=$.au()
u.d!==$&&A.aQ()
u.d=new A.as(new A.b9(w,B.b2,B.aO),v)},
q(){var w=this.d
w===$&&A.c()
w.S$=$.au()
w.P$=0
this.a1()},
B(d){var w,v,u,t=this,s=null,r=A.P(d).ax.a===B.J,q=r?B.e3:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.av,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jK:B.jb
v=A.aL(s,B.Y,!0,s,!0,B.t,s,A.aM(),w,s,s,s,s,s,2,A.br(s,new A.b5(4,A.m(12),B.dk),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fgs(t,d),s,!1,s,s,!1,s,!0,s,B.a9,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a3,s,B.an,s,s,s,s)
u=A.E(A.dI(B.di,new C.fgt(d),s),1)
r=A.bo(B.bP,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eS(s,q,new A.D(B.BS,A.x(A.a([o,B.aA,v,B.aN,A.B(A.a([u,B.at,A.E(A.bE(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fgu(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.P,0,B.p),s),s,s,s,s,B.d8,s,new A.b7(p,B.a0),s)}}
C.abV.prototype={
a5(){return"WorksheetFrameStyle."+this.b}}
C.FX.prototype={
R(){return new C.bxc(null,null)}}
C.bxc.prototype={
Z(){var w,v=this
v.a2()
w=A.bn(null,D.bwp,null,1,null,v)
w.cM(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bz_()},
gbAv(){switch(this.a.r.a){case 1:return A.a([B.aW,B.bP,B.b_],x.O)
case 2:return A.a([B.bt,B.aW,B.b_],x.O)
case 3:return A.a([B.aQ,B.cg,B.kc],x.O)
case 4:return A.a([B.iQ,B.bP,B.fg],x.O)
case 0:return A.a([B.aW,B.bP,B.b_],x.O)}},
B(d){var w=A.P(d),v=this.d
v===$&&A.c()
return new A.ey(A.cd(v,new C.fgq(this,new C.u1(w.ax.a===B.J)),null),null)}}
C.ay6.prototype={
R(){return new C.bxd(null,null)}}
C.bxd.prototype={
Z(){var w,v=this
v.a2()
w=A.bn(null,B.nl,null,1,null,v)
w.cM(0)
v.d!==$&&A.aQ()
v.d=w},
q(){var w=this.d
w===$&&A.c()
w.q()
this.bz0()},
B(d){var w=this.d
w===$&&A.c()
return A.cd(w,new C.fgr(this),null)}}
C.bxb.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bu(new A.a3(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aP(w,w))
u=new A.aG($.S().r,B.ah,null,null,A.a([],x.v))
u.D(new A.iN(v))
w=A.I()
w.b=B.ab
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.az(v,w)
w=A.I()
w.b=B.ab
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.aG(u,w)
w=A.xs(u)
t=A.a([],x.U)
w=new A.tm(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.b8(A.jw(y.B));--r
q=new A.Bv(w,r)
w.il()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aSE(d,q,r,o,0,0.2,4.2,0.92)
p.aSE(d,q,r,s,0.52,0.11,3.2,0.58)}},
aSE(d,e,f,g,h,i,j,k){var w,v,u,t=B.k.F(g+h,1)*f,s=A.hFI(e.a.a,e,t,t+f*i,!0),r=A.bCV(s.gbw().a.getBounds())
$.S()
w=A.I()
w.b=B.ab
w.c=j
w.d=B.bE
w.f=!0
v=this.f
u=k*this.e
w.sam(new A.a9(B.a5,B.a8,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.HU,null).aB(0,r))
d.aG(s,w)},
aw(d){return d.b!==this.b||d.d!==this.d}}
C.aOt.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.aOu.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.u1.prototype={}
C.at7.prototype={
R(){return new C.aFQ()},
ge1(){return this.c}}
C.aFQ.prototype={
Z(){var w=this
w.a2()
w.d=w.a.d
w.ahs()},
q(){var w=this.a.c,v=this.d
v===$&&A.c()
C.LG(w,v)
this.a1()},
ahs(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ahs=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bD2(t.c,t.d.a),$async$ahs)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eOv(u,s))
return A.h(null,v)}})
return A.i($async$ahs,v)},
Qp(){var w=0,v=A.j(x.H),u=this,t,s
var $async$Qp=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eOm(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.LG(t,s),$async$Qp)
case 2:if(u.c!=null)u.m(new C.eOn(u))
return A.h(null,v)}})
return A.i($async$Qp,v)},
QW(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QW=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.P(p)
s=t.c
s.toString
w=3
return A.b(A.cj(null,null,!0,null,new C.eOt(t,new C.u1(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$QW)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a8X(q),$async$QW)
case 6:case 5:t.m(new C.eOu(t,r))
w=7
return A.b(t.Qp(),$async$QW)
case 7:case 1:return A.h(u,v)}})
return A.i($async$QW,v)},
W8(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$W8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iiw(r),$async$W8)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eOh(t,new C.rc(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.Qp(),$async$W8)
case 4:case 1:return A.h(u,v)}})
return A.i($async$W8,v)},
cgM(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hxA(t,new C.eOl(u),w,v)},
abs(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.p(w,w,B.f,w,w,new A.o(w,w,new A.bK(new A.ay(v,2.5,B.r,-1),B.a0,B.a0,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b1u,w,w,B.n),w,22,w,w,w,w,w,22)},
aaw(d){return this.bMr(d)},
bMr(d){var w=0,v=A.j(x.H),u=this
var $async$aaw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eOk(u,d))
w=2
return A.b(u.Qp(),$async$aaw)
case 2:return A.h(null,v)}})
return A.i($async$aaw,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.P(a2).ax.a===B.J,e=f?B.c0:B.iu,d=A.m(8),a0=A.X(Y.a0S,f?B.bs:B.bn,g,g,g,16),a1=x.p
a0=A.aO(!1,d,!0,new A.D(B.Gj,A.B(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bn,g,g,g,g,g,g,g,g,g,g,g,B.a7,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.P,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eOw(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a_,g,B.b0,B.t,A.a([A.bx(A.m(22),C.aRj(!0,A.m(22),1/0,B.qi,g,d,1/0),B.ap),A.ao(10,A.dl(D.bTu,D.fQj,h.gb2o(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aW.j(f?0.5:0.38),B.f2,22),new A.ac(-4,B.G,B.bP.j(0.2),B.I,32)],w)
u=A.m(17)
t=A.J(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.m(16)
r=h.d
v=A.p(g,A.p(g,A.bx(s,new A.an(B.a_,g,B.b0,B.t,A.a([C.aRj(!0,A.m(16),1/0,B.Oe,g,r.c,1/0),A.c4(g,new A.o(g,g,g,g,g,new A.a9(B.b4,B.b7,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bg),A.ao(g,h.abs(!0),g,g,8,g,8,g),A.ao(g,A.cAI(h.abs(!0),!0,!1),g,g,g,8,8,g),A.ao(8,A.cAI(h.abs(!1),!1,!0),g,g,8,g,g,g),A.ao(8,A.cAI(h.abs(!1),!0,!0),g,g,g,8,g,g),A.ao(10,A.dl(D.bPp,D.fJE,h.gb2o(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.h6,g,new A.b7(A.m(12),B.a0),g,g,g)),g,g,g,10,g,g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.o(g,g,g,d,v,D.c1E,B.n),g,g,g,g,B.m7,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bci,B.o0,B.h3],u):A.a([B.b_,B.aW,B.bP],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aW.j(f?0.45:0.35),B.f2,24)],t)
r=A.m(22)
p=A.ao(g,A.X(B.jS,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.J(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.B(A.a([A.p(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.o(o,g,m,n,g,g,B.n),g,g,g,g,B.h4,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aA,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bEz(h.d.gxb(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.O,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cy,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.J(B.hf.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aQ.j(0.28),B.cH,14)],t)
j=B.aQ.j(0.22)
i=A.m(10)
u=A.p(g,A.bx(r,new A.an(B.a_,g,B.aa,B.t,A.a([p,new A.D(D.bB9,A.B(A.a([o,B.at,A.aH(!1,B.a2,!0,g,A.aO(!1,n,!0,A.eJ(new A.D(U.vX,A.x(A.a([A.p(g,D.apK,B.f,g,g,new A.o(j,g,A.J(B.aQ.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cj,g,g,g),B.fG,D.fym],a1),B.m,g,B.e,B.P,0,B.p),g),g,new A.o(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcgL(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.ap),B.f,g,g,new A.o(g,g,g,v,s,new A.a9(B.ay,B.aE,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fE(1.7777777777777777,d,g),B.aN,w,B.O,u,B.bu,A.B(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b1,A.dl(Ar.a2G,D.fwa,h.gbAY(),A.bo(B.aW,g,g,g,B.c,g,B.iB,g,new A.b7(A.m(12),B.a0),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.ad],a1)
w=h.d.d
if(w.length===0){w=f?B.e3:B.c
v=A.m(14)
u=A.J(f?B.e9:B.bO,B.r,1)
t=A.X(B.a1c,f?B.bs:B.bn,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.av,g,g,g,g,g,g,g,g,g,g,g,B.Q,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.p(g,A.x(A.a([t,B.W,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bs:B.bn,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.o(w,g,u,v,g,g,B.n),g,g,g,g,B.qe,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eOx(h,new C.u1(f)),A.T(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.BH,A.at(A.mT(g,f?B.bs:B.bn,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c7(g,e,A.bl(!0,A.x(A.a([new A.D(B.BL,a0,g),A.E(A.cg(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yk,g,g,B.ag),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),g,!1,!1,g,g)},
bED(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e3:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cH,12)],x.V),n=A.m(16),m=A.p(u,u,B.f,u,u,D.b4f,u,u,u,u,u,u,u,5),l=B.aW.j(r?0.22:0.12),k=A.m(12)
l=A.p(u,A.X(s?B.i1:B.hj,B.b_,u,u,u,20),B.f,u,u,new A.o(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bJ
else{k=x.p
t=A.a([A.d(t,u,2,B.a1,u,u,u,A.l(u,u,r?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcWR()
v=A.B3(d.d)
B.d.v(t,A.a([B.au,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bs:B.bn,u,u,u,u,u,u,u,u,12,u,u,B.a7,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.b8,B.P,0,B.p)}t=A.E(t,1)
k=A.a([B.aW.j(0.14),B.bP.j(0.1)],x.O)
w=A.m(12)
k=A.p(u,C.bEz(d.c*d.d,B.b_,!1,B.u),B.f,u,u,new A.o(u,u,u,w,u,new A.a9(B.a5,B.a8,B.x,k,u,u),B.n),u,u,u,u,B.h6,u,u,u)
w=x.p
return A.p(u,A.bx(n,new A.Eo(A.B(A.a([m,A.E(new A.D(B.ajU,A.B(A.a([l,B.bd,t,B.ac,k,A.aF(u,u,u,u,A.X(B.cz,(r?B.bs:B.bn).j(0.75),u,u,u,20),u,u,u,new C.eOi(this,d),u,u,u,u,u,B.cb)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.ak,u,B.e,B.i,0,u,u),u),B.ap),B.f,u,D.b36,new A.o(q,u,u,p,o,u,B.n),u,u,u,B.d2,u,u,u,u)}}
C.adV.prototype={
EC(d){return this.bNP(d)},
bNP(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pj(d,o,!1),$async$EC)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
w=4
return A.b(A.bQ(Af.BF,null,x.H),$async$EC)
case 4:s=t.d
w=5
return A.b(C.fOQ(!0,o,s),$async$EC)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.GS(r,"ngmy_project_"+A.aN(s.b,q,"_"),!1),$async$EC)
case 6:p=f
w=7
return A.b(A.pi(o,!1),$async$EC)
case 7:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EC,v)},
a_N(d){return this.cx9(d)},
cx9(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a_N=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pj(d,s,!1),$async$a_N)
case 3:if(!f||d.e==null){w=1
break}A.a4(d,!1).O(null)
A.hF(d,new C.at1(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pi(s,!1),$async$a_N)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a_N,v)},
Qq(d){return this.ctc(d)},
ctc(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Qq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(A.hF(d,D.aJ7,!0,"NgmyWorksheetProjectScan",x.N),$async$Qq)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bEA(s),$async$Qq)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.K(x.q).f.U(D.fbP)
w=1
break}q=C.h9D(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dU(p,x.H),$async$Qq)
case 5:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$Qq,v)},
a_O(d){return this.cFd(d)},
cFd(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a_O=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a4(d,!1).O(null)
w=3
return A.b(C.bE6(),$async$a_O)
case 3:s=f
if(s==null){w=1
break}r=C.h9D(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dU(q,x.H),$async$a_O)
case 4:if(d.e==null){w=1
break}d.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a_O,v)},
B(d){var w=this,v=null,u=A.P(d).ax.a===B.J,t=new C.u1(u),s=w.d.d.length,r=u?B.e3:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kp,36)],x.V),o=x.p
return A.bl(!0,new A.D(B.vW,A.p(v,A.x(A.a([w.cvJ(d,t,s),new A.D(D.bAy,A.x(A.a([w.b5n(t,"QR restore"),B.W,A.B(A.a([w.b0m(t,!0,B.jD,B.aQ,B.aQ,new C.eOz(w,d),"Show to scan","QR code"),B.at,w.ayu(t,B.jj,B.b6,B.bw,new C.eOA(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d4,w.b5n(t,"Backup files"),B.W,A.B(A.a([w.ayu(t,B.hN,B.aW,B.bP,new C.eOB(w,d),"Full copy","Backup file"),B.at,w.ayu(t,R.z_,B.aC,B.aU,new C.eOC(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.P,0,B.p),B.ap,v,v,new A.o(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.af,!0,!0)},
cvJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.f7,B.cO,B.fM],k):A.a([B.b_,B.aW,B.bP],k)
w=A.ao(l,A.X(B.uw,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.p(l,l,B.f,l,l,new A.o(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kE,l,l,l,36),l,l,l)
u=A.m(14)
t=A.J(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cH,12)],x.V)
r=this.d
s=A.p(l,C.aRj(!0,A.m(13),64,D.bKH,l,r.c,64),B.ap,l,l,new A.o(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a1,l,l,l,D.aTX,l,l,l)
r=C.bEz(r.gxb(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.J(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.p(l,new A.an(B.a_,l,B.aa,B.t,A.a([w,new A.D(D.bAW,A.x(A.a([v,A.B(A.a([s,B.es,A.E(A.x(A.a([u,B.au,t,B.O,A.B(A.a([r,B.ac,A.p(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.o(q,l,o,p,l,l,B.n),l,l,l,l,B.fQ,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aF(l,l,l,l,A.X(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eOy(d),l,l,l,A.nI(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aRa,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.o(l,l,l,l,l,new A.a9(B.ay,B.aE,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b5n(d,e){var w=null,v=A.p(w,w,B.f,w,w,new A.o(B.aW,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.B(A.a([v,B.ac,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bs:B.bn,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b0m(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.air:B.aP
if(e)w=B.aQ.j(o?0.45:0.35)
else{w=o?B.e9:B.bO
w=w.j(o?0.8:1)}w=A.J(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aQ.j(0.12),B.cH,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.J(h.j(0.35),B.r,1)
t=A.p(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.o(u,r,s,t,r,r,B.n),r,r,r,r,B.rt,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aH(!1,B.a2,!0,r,A.aO(!1,q,!0,A.eJ(new A.D(E.a_f,A.x(A.a([t,B.ad,u,B.bD,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bs:B.bn,r,r,r,r,r,r,r,r,11,r,r,B.cy,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.o(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
ayu(d,e,f,g,h,i,j){return this.b0m(d,!1,e,f,g,h,i,j)}}
C.at1.prototype={
R(){return new C.bmg()}}
C.bmg.prototype={
Z(){this.a2()
this.afn()},
afn(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$afn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bEB(p.c,p.d),$async$afn)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eOc(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eOd(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afn,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.P(d).ax.a===B.J,f=g?B.Ba:B.iu,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aF(h,h,h,h,A.X(B.eK,g?B.ae:B.al,h,h,h,18),h,h,h,new C.eOe(d),h,h,h,h,h,h)
u=x.p
e=A.B(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.M,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.A6],u),B.m,h,B.e,B.i,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.f7,B.cO,B.fM],s):A.a([B.b_,B.aW,B.bP],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aW.j(g?0.4:0.3),B.f2,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.de,B.K,h,h)
p=C.bEz(p.gxb(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.p(h,A.x(A.a([o,B.am,A.B(A.a([p,B.ac,A.p(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.o(n,h,h,m,h,h,B.n),h,h,h,h,B.fQ,h,h,h)],u),B.m,h,B.b8,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(h,h,h,t,q,new A.a9(B.ay,B.aE,B.x,s,h,h),B.n),h,h,h,h,E.a_C,h,h,1/0)
t=g?D.bn9:B.c
q=A.m(24)
p=A.J(w?B.aQ.j(0.4):B.aW.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dr,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.UA,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.ele)
else{m=A.m(20)
l=A.J(B.aL,B.r,1)
o.push(A.p(h,A.q_(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.o(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aN)
n=w?B.aQ:B.aW
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.J((w?B.aQ:B.aW).j(0.35),B.r,1)
k=w?B.Os:B.OV
k=A.X(k,w?B.aQ:B.aW,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.p(h,A.B(A.a([k,B.at,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ae:B.al,h,h,h,h,h,h,h,h,12,h,h,B.a7,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.o(n,h,l,m,h,h,B.n),h,h,h,h,B.iB,h,h,h))
return A.c7(h,f,A.bl(!0,A.x(A.a([new A.D(Ac.NF,e,h),A.E(A.cg(A.x(A.a([s,B.aN,A.p(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.o(t,h,p,q,r,h,B.n),h,h,h,h,B.ua,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.al2,h,h,B.ag),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.af,!0,!0),h,!1,!1,h,h)}}
C.at6.prototype={
R(){return new C.aFP(A.zz(B.MW,B.nS,B.uF))}}
C.aFP.prototype={
q(){this.d.q()
this.a1()},
aNc(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.iS(w,d)},
ccA(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u]
s=C.igo(t)
if(s!=null){this.aNc(s)
return}r=C.hok(t)
if(r!=null)q=A.cT(r,p,0)
else q=!1
if(q){this.aNc(B.a.i(B.a.b7(r,B.a.cv(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eI(A.a([A.aF(t,t,t,t,A.X(u.f?B.ul:A9.Oz,t,t,t,t,t),t,t,t,new C.eOg(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.Ba,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fJy,t,t,t,1,t,!0),q=A.zy(u.d,B.bU,u.gccz()),p=A.m(28)
p=A.at(A.p(t,t,B.f,t,t,new A.o(t,t,A.J(B.aW,B.r,3),p,A.a([new A.ac(2,B.G,B.aW.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c7(r,B.w,new A.an(B.a_,t,B.b0,B.t,A.a([q,p,A.ao(32,A.p(t,D.fIk,B.f,t,t,new A.o(w,t,A.J(B.aW.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jh,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aKP.prototype={
a5(){return"_WorksheetTab."+this.b}}
C.Ox.prototype={
R(){return new C.aFR(D.abW,A.a([],x.D))},
bu(){return this.r.$0()},
ge1(){return this.c}}
C.aFR.prototype={
gcD5(){return J.bFK(this.e,0,new C.eOZ())},
Z(){this.a2()
$.aV.bZ$.push(this)
this.vU()},
q(){$.aV.hP(this)
this.a1()},
jd(d){if(d===B.fK)this.vU()},
vU(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$vU=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Df(q.a.c).d7(0,B.kh),$async$vU)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eOV(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eOW(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$vU,v)},
Ia(d){return this.bKz(d)},
bKy(){return this.Ia(null)},
bKz(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ia=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iiy(l,d),$async$Ia)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lt(l,r,q,D.dgx,new A.V(Date.now(),0,!1))
w=4
return A.b(C.LG(t.a.c,p),$async$Ia)
case 4:o=f
w=5
return A.b(t.vU(),$async$Ia)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.K(x.q).f.U(D.f8W)
w=1
break}n=J.aW(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gT(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.K(q).f.U(D.faJ)
else n.K(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EG(m)
case 1:return A.h(u,v)}})
return A.i($async$Ia,v)},
EG(d){return this.cgx(d)},
cgx(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hF(s,new C.at7(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EG)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.LG(u.a.c,t),$async$EG)
case 5:case 4:w=6
return A.b(u.vU(),$async$EG)
case 6:return A.h(null,v)}})
return A.i($async$EG,v)},
vG(d){return this.c_N(d)},
c_N(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$vG=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bE6(),$async$vG)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hF(r,D.aJ7,!0,"NgmyWorksheetProjectScan",x.N),$async$vG)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bEA(q),$async$vG)
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
r.U(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.h9D(s)
w=15
return A.b(C.LG(t.a.c,p),$async$vG)
case 15:o=f
w=16
return A.b(t.vU(),$async$vG)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.K(x.q).f.U(D.faO)
w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
t.EG(p)
case 1:return A.h(u,v)}})
return A.i($async$vG,v)},
O9(d){return this.bJe(d)},
bJe(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$O9=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cj(null,null,!0,null,new C.eOG(d),s,null,!0,!0,x.y),$async$O9)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.oS(t.a.c,A.a([],x.D)),$async$O9)
case 6:w=7
return A.b(t.vU(),$async$O9)
case 7:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f90)
case 4:case 1:return A.h(u,v)}})
return A.i($async$O9,v)},
cgK(d){var w=this.c
w.toString
A.bV(B.L,null,new C.eOP(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b5Z(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jK
else w=B.c
v=A.m(16)
u=A.J(p?B.e9:B.bO,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.p(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.o(t,r,r,s,r,r,B.n),r,r,r,r,B.bS,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.av,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aH(!1,B.a2,!0,r,A.aO(!1,q,!0,A.p(r,A.x(A.a([s,B.ad,t,B.bD,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bs:B.bn,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.o(w,r,u,v,r,r,B.n),r,r,r,r,B.vV,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0i(d,e){return this.cgy(d,e)},
cgy(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0i=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bV(B.L,null,new C.eOK(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0i)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hxA(r,new C.eOL(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Ob(d,e),$async$a0i)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0i,v)},
b3_(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.p(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.o(t,u,u,s,u,u,B.n),u,u,u,u,B.bS,u,u,u)
if(d)t=B.aw
else t=h.a?B.aP:B.av
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bs:B.bn,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aH(!1,B.a2,!0,u,A.aO(!1,u,!0,new A.D(B.BR,A.B(A.a([s,B.bd,t,A.X(B.eE,w?B.bs:B.bn,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cns(d,e,f,g,h,i){return this.b3_(!1,d,e,f,g,h,i)},
Ob(d,e){return this.bJo(d,e)},
bJo(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ob=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.ld(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Ob)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bCQ(t.a.c,d.a),$async$Ob)
case 6:w=7
return A.b(t.vU(),$async$Ob)
case 7:r=t.c
if(r==null){w=1
break}r.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ob,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===B.J,n=new C.u1(o),m=o?B.c0:B.iu
if(q.f)o=D.ba5
else{w=q.bDL(n)
v=q.bZR(n)
u=q.gbAS()
if(o)t=B.jK
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.ad,v,B.aN,new C.FX(A.p(p,A.B(A.a([q.aBX(P.Od,"Projects",n,D.abW),q.aBX(B.wb,"Cashier",n,D.aZj),q.aBX(B.GD,"Family Tree",n,D.hrt)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.o(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ev,0.95,u,p),B.bu],r)
w=q.d
if(w===D.abW){w=J.ad(q.e)
B.d.v(u,A.a([A.B(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.av,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b1,new C.ay6(q.gaRq(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aA,q.cnu(n)],r))}else{o=q.a
if(w===D.aZj)u.push(new C.ap5(o.c,n,p))
else{w=q.r
u.push(new C.aqd(o.c,o.d,o.e,o.f,new C.eP1(q),new C.eP2(q),new A.bG(w,x.b4)))}}o=A.cg(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Ai.Ny,p,p,B.ag)}return A.c7(p,m,A.bl(!0,o,!0,!1,B.af,!0,!0),p,!1,!1,p,p)},
bDL(d){var w=null,v=A.m(8),u=d.a,t=A.X(Y.a0S,u?B.bs:B.bn,w,w,w,16)
return A.aO(!1,v,!0,new A.D(B.kF,A.B(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bs:B.bn,w,w,w,w,w,w,w,w,14,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.P,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eOD(this),w,w,w,w,w,w,w)},
gbAS(){switch(this.d.a){case 0:return D.ab7
case 1:return D.hgW
case 2:return D.ab8}},
bZR(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aW.j(0.35),B.cx,16)],x.V),t=x.p,s=A.B(A.a([A.p(w,D.bVp,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bFq,A.aH(!1,B.a2,!0,w,A.aO(!1,A.m(12),!0,A.p(w,D.bSN,B.f,w,w,new A.o(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eOH(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b_.j(0.55),q=A.m(12)
return new C.FX(A.p(w,A.x(A.a([new A.D(E.a_l,s,w),A.p(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.au,A.d(A.B3(this.gcD5()),w,w,w,w,w,w,D.fso,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(r,w,w,q,w,w,B.n),w,w,w,B.u6,B.jh,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.o(B.aW,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.af,1,D.hgV,w)},
aBX(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aW:B.L,q=A.m(12),p=t?A.J(B.c.j(0.55),B.r,2):A.J(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aW.j(0.42),B.cH,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bs:B.bn
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bs:B.bn
return A.E(A.aH(!1,B.a2,!0,u,A.aO(!1,s,!0,A.dd(u,A.B(A.a([w,B.en,new A.ds(1,B.cn,A.d(e,u,1,B.a1,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.Q,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.b8,B.i,0,u,u),u,u,B.cu,new A.o(r,u,p,q,o,u,B.n),B.iy,u,u,u,B.Gk,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eOY(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cnu(d){var w,v,u,t,s,r,q=this,p=null
if(J.ct(q.e)){w=d.a
v=w?B.e3:B.c
u=A.m(15)
t=A.p(p,D.bST,B.f,p,p,new A.o(p,p,p,p,A.a([new A.ac(2,B.G,B.aW.j(0.5),B.f2,28)],x.V),D.c47,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.av,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.FX(A.p(p,A.x(A.a([t,B.d4,s,B.O,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bs:B.bn,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dS,A.B(A.a([A.E(q.aT_(B.jj,"Scan QR",new C.eOS(q),d),1),B.at,A.E(q.aT_(R.z_,"Upload file",new C.eOT(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aA,A.bE(D.fU1,p,q.gaRq(),A.bo(B.aW,p,p,p,B.c,B.h0,p,p,new A.b7(A.m(12),B.a0),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bC0,1.05,D.ab7,p)}w=J.b6(q.e,new C.eOU(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.FX(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bS,1,D.ab7,p)},
aT_(d,e,f,g){var w=null,v=B.aW.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.J(B.aW.j(0.45),B.r,1)
return A.aH(!1,B.a2,!0,u,A.aO(!1,t,!0,A.p(w,A.x(A.a([A.X(d,B.b_,w,w,w,26),B.O,A.d(e,w,w,w,w,w,w,D.fqI,B.K,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),B.f,w,w,new A.o(w,w,r,s,w,w,B.n),w,w,w,w,B.ajM,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cnt(d,e){var w,v,u=null,t=e.a,s=t?B.e3:B.c,r=A.m(14),q=A.J(t?B.e9:B.bO,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.eq,10)],x.V),o=A.m(14),n=t?B.bs:B.bn
n=A.bx(B.WH,new A.fE(1.7777777777777777,C.aRj(!0,B.fL,1/0,P.Od,n,d.c,1/0),u),B.ap)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.av,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.au,A.d(""+d.d.length+" budget items \xb7 "+A.B3(d.gxb()),u,u,u,u,u,u,D.foF,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.p(u,A.aH(!1,B.a2,!0,u,A.aO(!1,o,!0,A.x(A.a([n,new A.D(B.bA,A.B(A.a([v,A.aF(u,u,u,u,A.X(Aj.a1W,t?B.bs:B.bn,u,u,u,u),u,u,u,new C.eOQ(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eOR(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.o(s,u,q,r,p,u,B.n),u,u,u,B.ee,u,u,u,1/0)}}
C.byV.prototype={}
C.rc.prototype={
ag(){var w=this,v=w.c,u=w.d
return A.G(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcWR(){var w,v,u,t,s=this.c
if(s===B.k.j3(s))w=B.o.u(B.k.N(s))
else{v=B.k.ac(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aN(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lt.prototype={
gxb(){return B.d.cH(this.d,0,new C.cCX())},
ag(){var w=this,v=w.d,u=A.T(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.cCW(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ae()],x.N,x.z)},
bde(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lt(w.a,w.b,v,u,w.e)},
bcX(d){return this.bde(d,null)},
T8(d){return this.bde(null,d)}}
C.I1.prototype={
a5(){return"FamilyGender."+this.b}}
C.hU.prototype={
ag(){var w=this
return A.G(["id",w.a,"name",w.b,"gender",C.hth(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aEJ(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hU(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.all.prototype={
a5(){return"FamilyTreeAccessRole."+this.b}}
C.kO.prototype={
gapm(){var w=this.f
return new A.Z(w,new C.bR7(),A.T(w).k("Z<1>")).gL(0)},
ag(){var w=this,v=w.f,u=A.T(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.bR6(),u),u.k("ak.E"))
return A.G(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ae(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.i8K(w.y),"games",w.z],x.N,x.z)},
wy(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kO(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bdd(d,e){var w=null
return this.wy(w,w,w,d,e,w,w,w,w)},
cMi(d,e,f,g,h,i,j){return this.wy(d,e,null,f,g,h,i,j,null)},
aEO(d,e){var w=null
return this.wy(w,w,w,w,d,w,w,e,w)},
cMk(d,e,f,g,h,i,j,k){return this.wy(d,e,null,f,g,h,i,j,k)},
cKM(d){var w=null
return this.wy(w,w,w,w,w,w,w,d,w)},
cL9(d){var w=null
return this.wy(w,w,w,w,w,w,w,w,d)},
bcR(d){var w=null
return this.wy(w,w,d,w,w,w,w,w,w)},
aEz(d){var w=null
return this.wy(w,w,w,w,w,d,w,w,w)},
cLP(d,e,f){var w=null
return this.wy(w,d,w,w,e,w,w,f,w)},
cKz(d){var w=null
return this.wy(w,w,w,d,w,w,w,w,w)},
cLm(d,e){var w=null
return this.wy(d,w,w,w,w,w,e,w,w)}}
C.cCY.prototype={
a5(){return"WrapAlignment."+this.b}}
C.cCZ.prototype={
a5(){return"WrapCrossAlignment."+this.b}}
C.aI0.prototype={}
C.b9V.prototype={
by(d){this.a=d.a
this.b=d.b},
cW(d){var w=new C.b9V()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b0(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.b9U.prototype={
gwq(){return!0},
gGf(){return this.z.b<this.b.length},
aUD(d){switch(0){case 0:return d.a.c}},
aUk(d){switch(0){case 0:return d.a.d}},
bTf(d,e){switch(0){case 0:return new A.hP(d,e)}},
bSD(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
h7(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iH(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.HN(b4)
switch(0){case 0:v=b5.b
u=new A.kL(0,v,0,1/0)
t=w===B.Uq
break}s=A.a([],x.gZ)
r=A.U(x.gF,x.S)
for(b3=b1.z,q=B.d.fK(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.M)(q),++h){g=q[h]
g.h7(b4,u,!0)
f=b1.aUD(g)
f.toString
e=b1.aUk(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aI0(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aI0(k,j,i))}d=s.length
switch(0){case 0:q=b5.cz(new A.hP(m,l))
a0=q.a
a1=q.b
b1.a=new A.iH(0,0,a0,a1)
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
for(q=B.d.fK(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.M)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aUD(g)
e=b1.aUk(g)
e.toString
a9=b1.bSD(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bTf(a6,a3+a9)
b0=g.a
g.a=new A.iH(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
h1(d){var w,v,u,t,s,r=this
r.lr(d)
w=d.b
w.ih()
v=A.dr()
u=r.a
v.ef(u.a,u.b,0,1)
w.p9(0,v)
for(u=r.z,u=B.d.ds(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.M)(u),++s)u[s].h1(d)
w.nq(0)},
GJ(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
ih(){return this.z}}
C.bxf.prototype={}
var z=a.updateTypes(["aA<~>()","R(hU)","~()","R(kO)","R(nl)","a8<n,@>(kO)","H(kO,kO)","H(hU,hU)","n(hU)","kO(a8<@,@>)","R(lt)","nl(a8<@,@>)","a8<n,@>(nl)","R(ux)","ux()","H(hU)","ai<hU>()","R(zh)","a_w(Y)","n?(hU)","ev<n?>(hU)","aA<~>(lt)","R(rc)","a8<n,@>(hU)","hU(a8<@,@>)","H(lt,lt)","R(afc)","~(ba)","v(os)","H(H,a9p)","R(qw<H>)","~(qw<H>)","Tj(Y)","R(Mk)","R(uw)","~(hU)","n(n)","VF(Y)","Ti(Y)","adA(Y)","Zs(Y)","hU(hU)","cN(bA<n,Gb>)","cN(Ku)","ZW(Y)","H?(hU)","hU()","R(Ku)","D(hU)","~(I1)","ZS(Y)","v(I1,n,a0)","R(af5)","bA<n,ai<a8<n,@>>>(n,ai<nl>)","ZU(Y)","+count,id,name(H,n,n)(kO)","n(kO)","a_R(Y)","a_S(Y)","R(lL)","lL()","Z0(Y)","a1E(Y)","Zu(Y)","Zt(Y)","~(H)","~(n,li?)","v(rc)","adV(Y)","~(m9)","aA<~>([n?])","K(K,lt)","v(lt)","K(K,rc)","a8<n,@>(rc)","rc(a8<@,@>)","ai<li>()","uw()","n(V)","lt(a8<@,@>)","cu(I0)","n(lt)","a8<n,@>(lt)","H(nl,nl)","kO(a8<n,@>)","kO(kO)"])
C.fHq.prototype={
$1(d){return d.a+" "+d.b},
$S:125}
C.fHp.prototype={
bmw(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.r4(s,d,B.hO,"book",E.FZ),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.Lu(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bmw(d)},
$S:316}
C.fHr.prototype={
$1(d){return d.b},
$S:125}
C.fQV.prototype={
$1(d){var w=null
return A.eS(w,B.L,new H.PY(this.a,this.b,w),w,w,0,B.a_g,B.d8,w,w,w)},
$S:48}
C.fvu.prototype={
$1(d){return d!=null},
$S:221}
C.fvv.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:221}
C.fvA.prototype={
$1(d){if(this.a)return new A.t(d.a*520,d.b*160)
return d},
$S:174}
C.fF9.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.hb(w,B.rW,w,w,w,w,w,w,w,B.dy,w,w,10.5,w,B.ew,w,!0,w,w,w,w),w),u=f?B.ew:B.w4
return new A.nU(D.bxs,A.aac(A.a([new A.fU(130,w,v),new A.zg(1,B.Gw,A.fc(e,w,w,w,A.hb(w,g==null?D.enF:g,w,w,w,w,w,w,w,B.dy,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.xZ,B.lK))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1943}
C.fF8.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vH(999)
f=A.xj(A.lG(h,A.fc("Cashier",h,h,h,A.hb(h,D.zT,h,h,h,h,h,h,h,B.dy,h,h,10,h,B.ew,h,!0,h,h,h,h),h),h,new A.kM(D.enw,h,f,B.hR,h),h,h,D.bxX,h))
w=A.xj(A.fc("Debt receipt",h,h,h,A.hb(h,h,h,h,h,h,h,h,h,B.dy,h,h,22,h,B.ew,h,!0,h,h,h,h),h))
v=A.xj(A.fc(C.x1(new A.V(Date.now(),0,!1),!0),h,h,h,D.a9F,h))
u=A.vH(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.hb(h,h,h,h,h,h,h,h,h,B.dy,h,h,14,h,B.ew,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.a9F,h)
q=A.vH(10)
p=x.Z
u=A.lG(h,A.za(A.a([s,new A.fU(h,2,h),r,new A.fU(h,10,h),A.lG(h,A.za(A.a([A.fc("Amount owed",h,h,h,D.a9F,h),new A.fU(h,2,h),A.fc(A.B3(t.c),h,h,h,A.hb(h,D.zT,h,h,h,h,h,h,h,B.dy,h,h,20,h,B.ew,h,!0,h,h,h,h),h)],p),B.rj,B.lK),h,new A.kM(B.pp,h,q,B.hR,h),h,h,D.bx9,1/0)],p),B.rj,B.lK),h,new A.kM(E.aKs,h,u,B.hR,h),h,h,D.bz3,1/0)
q=new A.nC(D.enz,0.9,B.kY)
r=A.vH(12)
s=i.c
o=s.$2("Original due",C.x1(t.r,!1))
n=s.$2("Current due",C.x1(t.f,!1))
m=i.d
l=new A.nC(m,1.1,B.kY)
k=A.vH(8)
j=i.a
k=A.a([o,n,new A.fU(h,6,h),A.lG(h,A.xj(A.fc(t.gaLI(),h,h,h,A.hb(h,m,h,h,h,h,h,h,h,B.dy,h,h,11,h,B.ew,h,!0,0.5,h,h,h),h)),h,new A.kM(h,new A.pL(l,l,l,l),k,B.hR,h),h,h,D.by4,1/0),new A.fU(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.zT))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.zT))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.hb(h,B.rW,h,h,h,h,h,h,h,B.dy,h,h,10.5,h,B.ew,h,!0,h,h,h,h),h)
m=A.T(o).k("N<1,SR>")
o=A.C(new A.N(o,new C.fF7(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fU(h,4,h),n,new A.fU(h,6,h),new C.b9U(5,5,new C.b9V(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fU(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fU(h,8,h),w,new A.fU(h,3,h),v,new A.fU(h,16,h),u,new A.fU(h,10,h),A.lG(h,A.za(k,B.xZ,B.lK),h,new A.kM(h,new A.pL(q,q,q,q),r,B.hR,h),h,h,B.ajY,1/0)],p)
w=j.a
if(w!=null){v=new A.nC(B.J9,1,B.kY)
B.d.v(f,A.a([new A.fU(h,16,h),A.fc("Debtor signature",h,h,h,A.hb(h,B.rW,h,h,h,h,h,h,h,B.dy,h,h,10,h,B.ew,h,!0,h,h,h,h),h),new A.fU(h,6,h),A.lG(h,new A.Ij(w,B.WR,h,h),h,new A.kM(h,new A.pL(v,v,v,v),A.vH(6),B.hR,h),82,h,B.ND,1/0)],p))}f.push(new A.fU(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fh8,h))
f.push(new A.fU(h,18,h))
f.push(A.xj(A.fc("NGMY.ORG",h,h,h,A.hb(h,D.zT,h,h,h,h,h,h,h,B.dy,h,h,14,h,B.ew,h,!0,1.8,h,h,h),h)))
return f},
$S:434}
C.fF7.prototype={
$1(d){var w=null,v=new A.nC(D.Ja,0.7,B.kY),u=A.vH(999)
return A.lG(w,A.fc(C.x1(d,!1),w,w,w,A.hb(w,D.Ja,w,w,w,w,w,w,w,B.dy,w,w,9.5,w,B.ew,w,!0,w,w,w,w),w),w,new A.kM(w,new A.pL(v,v,v,v),u,B.hR,w),w,w,D.bDq,w)},
$S:1944}
C.c6l.prototype={
$1(d){var w=null,v=B.bx.j(0.08),u=A.m(999),t=A.J(B.bx.j(0.28),B.r,1)
return A.p(w,A.d(C.x1(d,!1),w,w,w,w,w,w,D.fo8,w,w,w),B.f,w,w,new A.o(v,w,t,u,w,w,B.n),w,w,w,w,B.eJ,w,w,w)},
$S:1945}
C.fRr.prototype={
$1(d){var w=null,v=A.aJ(d,B.bX,x.w).w,u=A.m(26),t=A.aF(w,w,w,w,D.bWl,w,w,w,new C.fRo(d),w,w,w,w,w,B.cb),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eS(w,B.L,new A.cU(new A.aZ(0,380,0,v.a.b*0.9),A.aH(!1,B.a2,!0,u,new A.D(B.a_5,A.x(A.a([new A.bO(B.a8,w,w,t,w),new A.ds(1,B.cn,A.cg(A.x(A.a([new A.ey(new C.aZP(r,w),s),B.W,A.B(A.a([A.E(A.et(B.z6,D.fQe,new C.fRp(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fe,w,new A.b7(A.m(14),B.a0),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ac,A.E(A.dl(B.a2x,D.fMC,new C.fRq(r,d),A.bo(B.b_,w,w,w,B.c,w,B.fe,w,new A.b7(A.m(14),B.a0),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.P,0,B.p),B.t,w,B.y,w,w,w,w,B.ag),w)],p),B.m,w,B.e,B.P,0,B.p),w),B.f,B.av,0,w,w,w,w,w,B.aj),w),w,w,0,Am.a_u,B.d8,w,w,w)},
$S:48}
C.fRo.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fRp.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aV.al$.x.h(0,t.a)
m=m==null?null:m.gbd()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.m5(2.5),$async$$0)
case 4:w=3
return A.b(e.ht(B.h9),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eR(B.dJ.gaR(s))
m=t.b
q=B.a.i(m.b)
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aN(q,p,"_")
if(o.length>32)o=B.a.ar(o,0,32)
w=5
return A.b(A.t6(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fRq.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fLL(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.K(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fRj.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eS(w,B.av,A.x(A.a([new A.D(D.byS,A.B(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.n0,w,w,w),1),A.aF(w,w,w,w,B.lg,w,w,w,new C.fRh(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.ds(1,B.cn,new A.D(B.eZ,A.bx(A.m(14),A.fG(t,B.A,w,w,B.cc,B.dw,!1,w,!1,w,w),B.ap),w),w),new A.D(B.Nh,new A.a6(1/0,w,A.dl(B.nx,D.aUp,new C.fRi(t,this.c,d),A.bo(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.a0),w,w,w)),w),w)],u),B.m,w,B.e,B.P,0,B.p),w,w,w,B.Nu,B.d8,w,new A.b7(v,B.a0),w)},
$S:48}
C.fRh.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fRi.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.t6(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fRv.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eS(w,B.av,new A.D(D.bz_,A.x(A.a([A.B(A.a([D.bEv,A.aF(w,w,w,w,B.lg,w,w,w,new C.fRt(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.O,new A.ey(A.bx(A.m(14),A.p(w,A.b4(w,w,w,new C.bc5(s.ax,w),B.ax),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.ap),t),B.ad,new A.a6(1/0,w,A.dl(B.nx,D.aUp,new C.fRu(t,s,d),A.bo(B.b_,w,w,w,B.c,w,w,w,new A.b7(A.m(14),B.a0),w,w,w)),w)],u),B.m,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d8,w,new A.b7(v,B.a0),w)},
$S:48}
C.fRt.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fRu.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aV.al$.x.h(0,t.a)
n=n==null?null:n.gbd()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.m5(2.5),$async$$0)
case 4:w=3
return A.b(e.ht(B.h9),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aN(r,q,"_")
if(p.length>32)p=B.a.ar(p,0,32)
r=J.eR(B.dJ.gaR(s))
w=5
return A.b(A.t6(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.K(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fzN.prototype={
$1(d){return d.a===this.a},
$S:242}
C.dMu.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dMf.prototype={
blK(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e3:B.c
s=u.a
w=2
return A.b(A.bV(t,null,new C.dMi(s,q,e),p,!0,!0,!1,B.Jq,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dMj(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.blK(d,e)},
$S:1946}
C.dMi.prototype={
$1(d){var w,v=null,u=this.c===B.wF,t=u?D.dng:D.diW
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.av,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bl(!0,new A.D(N.akv,A.x(A.a([u,B.au,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bs:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.ad,A.iy(!0,v,v,B.y,D.f7C,new C.dMh(this.a,w,t,d),t.length,v,B.dR,B.ag,!0)],x.p),B.ak,v,B.e,B.P,0,B.p),v),!0,!1,B.af,!0,!0)},
$S:27}
C.dMh.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cO.j(0.14)
else w=t.b.a.d.a?B.M:B.aP
v=A.m(14)
if(q)u=B.cO
else u=(t.b.a.d.a?B.bs:B.bn).j(0.16)
u=A.J(u,B.r,q?1.6:1)
return A.aO(!1,p,!0,A.p(B.A,C.aZO(r,26),B.f,s,s,new A.o(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dMg(t.d,r),s,s,s,s,s,s,s)},
$S:194}
C.dMg.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dMj.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dMd.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:94}
C.dMe.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cJ(B.cu,e,v)
return new A.d0(e,!1,A.ir(B.A,A.at(A.aH(!1,B.a2,!0,v,new A.e0(new C.dMc(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.be(t,new A.bp(0.96,1,u),u.k("be<bP.T>"))),v)},
$S:34}
C.dMc.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aJ(d,B.bX,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e3:B.c,f=A.m(14),e=A.J((h?B.bs:B.bn).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.B(A.a([w,A.aO(!1,v,!0,new A.D(B.ev,A.X(B.cz,i.a.d.a?B.bs:B.bn,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dLY(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aTw("Name")
r=l.a
q=r.d==null?k:new C.dLZ(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bo:B.m1
n=A.J(B.cO.j(0.35),B.r,1)
m=r.d
t=A.aL(k,B.Y,h,k,!0,B.t,k,A.aM(),w,k,k,k,k,k,2,s.bd6(new A.D(B.fB,A.aO(!1,p,!0,A.p(B.A,C.aZO(m==null?"\ud83d\udc64":A.fFY(r.e,m),18),B.f,k,k,new A.o(o,k,n,k,k,k,B.a6),k,34,k,B.cj,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a3,k,B.kU,k,B.a9u,k,k)
v=A.a([v,B.ad,t,B.O,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11.5,k,k,B.Q,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.B(A.a([A.E(i.aUa("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dM_(r,a0),r.d===B.wF),1),B.ac,A.E(i.aUa("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dM4(r,a0),r.d===B.a6j),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.O,new A.bO(B.a5,k,k,A.hr(D.bUD,D.fOv,new C.dM5(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cO,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cb)),k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uA(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aL(k,B.Y,!1,k,!0,B.t,k,A.aM(),l.f,k,k,k,k,k,2,i.aTx("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ai,k,k,s,k,k,B.e1,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a3,k,B.an,k,k,k,k))
v.push(B.W)
t=i.a.d.a
s=t?B.M:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.J((t?B.bs:B.bn).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.x1(r.a,!1)
v.push(A.aH(!1,B.a2,!0,q,A.aO(!1,p,!0,A.p(k,A.B(A.a([A.E(A.x(A.a([t,B.bD,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,14,k,k,B.Q,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bRk],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,n,o,k,k,B.n),k,k,k,k,B.bf,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dM6(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.O,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.W)
t=A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aL(k,B.Y,!1,k,!0,B.t,k,A.aM(),l.r,k,k,k,k,k,2,i.aTw("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ai,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.a9,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a3,k,B.an,k,k,k,k))
v.push(B.ad)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.av,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b1n(r.b.length!==0,B.mL,new C.dM7(r,i,a0),new C.dM8(r,a0),"Upload from gallery","ID photo"))
v.push(i.b1n(r.c.length!==0,D.bKF,new C.dM9(r,i,d,a0),new C.dMa(r,a0),"Camera or gallery","Selfie"))
v.push(B.O)
t=l.w
v.push(new Al.a81("Signature (optional)",t,new C.dMb(a0),new C.dM0(a0,t),new C.dM1(d,t,a0),k))
v.push(B.aA)
i=i.a.d.a
t=i?B.bs:B.bn
s=(i?B.bs:B.bn).j(0.28)
s=A.E(A.dI(E.aUi,new C.dM2(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.u0,k,new A.b7(A.m(10),B.a0),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cO,k,k,k,B.c,k,B.u0,k,new A.b7(A.m(10),B.a0),k,k,k)
v.push(A.B(A.a([s,B.ac,A.E(A.bE(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vh,k,k,k),k,new C.dM3(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.p(k,A.cg(A.x(v,B.ak,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ag),B.f,k,new A.aZ(0,1/0,0,j.a.b*0.88),new A.o(g,k,e,f,k,k,B.n),k,k,k,B.rr,B.jh,k,k,360)},
$S:162}
C.dLY.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dLZ.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dM_.prototype={
$0(){return this.b.$1(new C.dLX(this.a))},
$S:0}
C.dLX.prototype={
$0(){var w=this.a
w.d=B.wF
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dM4.prototype={
$0(){return this.b.$1(new C.dLW(this.a))},
$S:0}
C.dLW.prototype={
$0(){var w=this.a
w.d=B.a6j
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dM5.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dM6.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.vz(null,u.b,A.c3(2020,1,1,0,0,0,0,0),null,s,A.c3(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dLV(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLV.prototype={
$0(){var w=this.b
return this.a.a=A.c3(w.gcf(),w.gcb(),w.gcu(),0,0,0,0,0)},
$S:0}
C.dM7.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.PM(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dLU(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLU.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dM8.prototype={
$0(){return this.b.$1(new C.dLT(this.a))},
$S:0}
C.dLT.prototype={
$0(){return this.a.b=""},
$S:0}
C.dM9.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e3:B.c
w=3
return A.b(A.bV(q,null,new C.dLR(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.PM(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dLS(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLR.prototype={
$1(d){var w=null
return A.bl(!0,A.x(A.a([A.dy(!1,w,w,w,!0,w,w,w,!0,w,w,B.apB,w,w,w,w,new C.dLL(d),!1,w,w,w,w,w,w,w,D.fED,w,w,w),A.dy(!1,w,w,w,!0,w,w,w,!0,w,w,B.apz,w,w,w,w,new C.dLM(d),!1,w,w,w,w,w,w,w,D.fLD,w,w,w)],x.p),B.m,w,B.e,B.P,0,B.p),!0,!1,B.af,!0,!0)},
$S:27}
C.dLL.prototype={
$0(){A.a4(this.a,!1).O("camera")
return null},
$S:0}
C.dLM.prototype={
$0(){A.a4(this.a,!1).O("gallery")
return null},
$S:0}
C.dLS.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dMa.prototype={
$0(){return this.b.$1(new C.dLQ(this.a))},
$S:0}
C.dLQ.prototype={
$0(){return this.a.c=""},
$S:0}
C.dMb.prototype={
$0(){return this.a.$1(new C.dLP())},
$S:0}
C.dLP.prototype={
$0(){},
$S:0}
C.dM0.prototype={
$0(){return this.a.$1(new C.dLO(this.b))},
$S:0}
C.dLO.prototype={
$0(){return B.d.a7(this.a)},
$S:0}
C.dM1.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.ai8(u.a,null,null,new C.dLN(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dLN.prototype={
$4(d,e,f,g){this.a.$1(new C.dLK(this.b,d))},
$S:393}
C.dLK.prototype={
$0(){var w=this.a
B.d.a7(w)
B.d.v(w,this.b)},
$S:0}
C.dM2.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dM3.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.K(x.q).f.U(D.fcG)
return}if(w.a.d==null){w.c.K(x.q).f.U(D.f9z)
return}A.a4(w.c,!1).O(!0)},
$S:0}
C.dMx.prototype={
$3(d,e,f){return B.bJ},
$C:"$3",
$R:3,
$S:94}
C.dMy.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e3:B.c,n=A.m(14),m=A.J((p?B.bs:B.bn).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.av,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.B3(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bs:B.bn,r,r,r,r,r,r,r,r,13,r,r,B.a7,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zd(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zd(r).length>0?B.bx:B.cO,r,r,r,r,r,r,r,r,12,r,r,B.Q,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bs:B.bn
t=(q?B.bs:B.bn).j(0.28)
s=x.p
return new A.d0(e,!1,A.at(A.aH(!1,B.a2,!0,r,A.p(r,A.x(A.a([p,B.O,v,u,B.aA,A.B(A.a([A.E(A.dI(B.nM,new C.dMv(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jQ,r,new A.b7(A.m(10),B.a0),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ac,A.E(A.bE(D.fM2,r,new C.dMw(d),A.bo(B.cO,r,r,r,B.c,r,B.jQ,r,new A.b7(A.m(10),B.a0),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.ak,r,B.e,B.P,0,B.p),B.f,r,r,new A.o(o,r,m,n,r,r,B.n),r,r,r,B.BU,E.a_l,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dMv.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dMw.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dMr.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dMs(r),p=r.a.d.a,o=p?B.e3:B.c,n=A.m(14),m=A.J((p?B.bs:B.bn).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.B(A.a([A.E(A.d(k,s,1,B.a1,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.av,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.B3(l.c),s,s,s,s,s,s,D.fpJ,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iD((r.a.d.a?B.bs:B.bn).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a1c,"View receipt",new C.dMk(r,d,l))
u=l.x!=null
t=u?B.rB:B.qk
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.byX,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dMl(r,d,l)),q.$3$icon$label$onTap(B.C5,"Edit",new C.dMm(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mL,"View / download ID",new C.dMn(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bKE,"View / download selfie",new C.dMo(r,d,l)))
if(l.gaGq())p.push(q.$3$icon$label$onTap(Ab.a2n,"View / download signature",new C.dMp(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bx,B.ea,"Delete",new C.dMq(r,d,l)))
p.push(B.au)
return A.bl(!0,new A.D(B.u6,A.p(s,A.x(p,B.m,s,B.e,B.P,0,B.p),B.f,s,s,new A.o(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.af,!0,!0)},
$S:27}
C.dMs.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.av
else w=d
return A.aO(!1,v,!0,new A.D(B.eT,A.B(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.Q,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1947}
C.dMk.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fRn(w,this.c)},
$S:0}
C.dMl.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Su(this.c)},
$S:0}
C.dMm.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.Di(this.c)},
$S:0}
C.dMn.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bEW(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dMo.prototype={
$0(){var w,v,u
A.a4(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bEW(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dMp.prototype={
$0(){A.a4(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fRs(w,this.c)},
$S:0}
C.dMq.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.PL(0,this.c)},
$S:0}
C.dMz.prototype={
$1(d){return d.x==null},
$S:242}
C.dMA.prototype={
$1(d){return d.x!=null},
$S:242}
C.dMB.prototype={
$2(d,e){return d+e.c},
$S:1948}
C.dMC.prototype={
$0(){return this.a.bBm()},
$S:0}
C.dMt.prototype={
$0(){return this.a.afA(this.b)},
$S:0}
C.fAq.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fAr.prototype={
$0(){return B.d.gI(D.a3I)},
$S:z+77}
C.dcD.prototype={
$0(){var w=this.a
return w.m(new C.dcB(w,this.b))},
$S:0}
C.dcB.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dcC.prototype={
$0(){},
$S:0}
C.dcE.prototype={
$0(){var w=this.a.gc_B()
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.fCH.prototype={
$1(d){return C.hdR(A.a2(d,x.N,x.z))},
$S:z+11}
C.fCI.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fCJ.prototype={
$2(d,e){var w=A.cb(d.a,null),v=A.cb(e.a,null)
if(w!=null&&v!=null)return B.o.aK(w,v)
return d.d.aK(0,e.d)},
$S:z+83}
C.fQ0.prototype={
$1(d){return d.ag()},
$S:z+12}
C.fYm.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fzE.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bPP.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.f0(e,v)?v:null},
$S:1949}
C.fQz.prototype={
$1(d){var w=this
return new C.ZU(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.ddi.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ddh(w,d))},
$S:z+80}
C.ddh.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dd6.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cL(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dd3.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dcF.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dcG.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dd7.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dcO.prototype={
$1(d){var w=null,v=A.P(d).ax.a===B.J,u=v?B.e3:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.en(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dcM(d),w,w),A.bE(B.x1,w,new C.dcN(d),A.bo(B.n9,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dcM.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dcN.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dcP.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.dd4.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dd5.prototype={
$0(){return B.d.gI(D.zi)},
$S:z+14}
C.dcK.prototype={
$1(d){var w=this.a,v=w.y,u=w.gyy(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.Ti(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dcL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcQ.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.Zs(v,u,J.ad(w.d),null)},
$S:z+40}
C.dcR.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.ddg.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aB(s,new C.Z9(r.y,r.gyy(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dde(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.r(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bbs(v,e,w,u,t,r.gbRJ(),C.htg(r.y.Q),r.gyy(0),s)
w=t}return A.cd(q,new C.ddf(r,e),new A.D(B.a_m,w,s))},
$S:1950}
C.ddf.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd2(t).ay){t=this.b
u=x.cy.a(B.d.gd2(u.f.f)).gv1(0)
w=t-(u==null?t:u)}else w=0
v=B.k.E(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fG(v*3.141592653589793*0.5)
return A.fw(B.a5,A.d9(e,B.k.E(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.dde.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHw(B.q5,B.iT)},
$S:0}
C.dd0.prototype={
$0(){var w=this.a
return w.m(new C.dd_(w))},
$S:0}
C.dd_.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dd1.prototype={
$0(){var w=this.a.c
w.toString
A.a4(w,!1).O(null)
return null},
$S:0}
C.dcH.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.kb.j(0.5),r=x.p,q=A.a([D.fDc,B.ad],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.ct(p.d)?"Write this book":"Write a new book"
q.push(p.Zm(d,B.e5,w,J.ct(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.Zm(d,F.anw,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cL(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cv,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kz.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cv,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kz.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.Zm(d,W.aoz,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.Zm(d,B.qq,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.Zm(d,B.qq,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eS(u,E.Bl,A.bl(!0,new A.D(Aa.yi,A.x(q,B.E,u,B.e,B.P,0,B.p),u),!0,!1,B.af,!0,!0),u,u,u,D.akV,B.d8,u,new A.b7(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:48}
C.dd2.prototype={
$0(){A.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.dcU.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cL(w.d)
return new C.ZW(v,J.cL(w.d),w.r+1,null)},
$S:z+44}
C.dcV.prototype={
$1(d){var w=null
return A.oz(!1,A.en(w,w,w,E.Bl,new A.jS(this.a,new C.dcT(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:280}
C.dcT.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a99,B.oD,A.E(A.d(e,w,w,w,w,w,w,B.j2,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:737}
C.dcW.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dcX.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.dcY.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dcZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bc(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.S6(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dcS(s,t))
w=4
return A.b(s.l9(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcS.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dd9.prototype={
$1(d){var w=null
return A.oz(!1,A.en(w,w,w,E.Bl,new A.jS(this.a,new C.dd8(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:280}
C.dd8.prototype={
$3(d,e,f){var w=null
return A.B(A.a([E.a99,B.oD,A.E(A.d(e,w,w,w,w,w,w,B.j2,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:737}
C.dda.prototype={
$0(){return this.a.a=!1},
$S:50}
C.ddb.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.ddc.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:185}
C.ddd.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bc(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.l9(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dcI.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.biF(B.q5,A3.N4)},
$S:0}
C.dcJ.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aHw(B.q5,A3.N4)},
$S:0}
C.df2.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.df3.prototype={
$1(d){var w=this.a
return w.m(new C.df1(w))},
$S:8}
C.df1.prototype={
$0(){return this.a.e="page"},
$S:0}
C.df4.prototype={
$1(d){var w=this.a
return w.m(new C.df0(w))},
$S:8}
C.df0.prototype={
$0(){return this.a.e="book"},
$S:0}
C.df5.prototype={
$1(d){var w=this.a
return w.m(new C.df_(w))},
$S:8}
C.df_.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.df6.prototype={
$0(){var w=this.a
return w.m(new C.deZ(w,this.b))},
$S:0}
C.deZ.prototype={
$0(){var w=this.b
this.a.d.saX(0,w)
return w},
$S:0}
C.df7.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga28()
A.a4(this.b,!1).O(new A.bqb(w,v))},
$S:0}
C.ddx.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.ddw.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.ZS(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.ddB.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.ddA.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.b8M(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hm,v,v,v)
return A.en(A.a([A.bN(!1,B.di,v,v,!0,v,v,v,new C.ddy(d),v,v),A.bE(B.x1,v,new C.ddz(d),A.bo(B.n9,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.Bl,w,v,v,v,v,D.fBY,v)},
$S:18}
C.ddy.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.ddz.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ddC.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.ddD.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.cg(A.bX(B.bC,r,B.bq,t,18,14),B.t,t,B.y,t,D.bzT,t,t,B.ag)},
$S:323}
C.ddv.prototype={
$0(){return this.a.Qu(0,this.b)},
$S:0}
C.ddu.prototype={
$0(){return this.a.PX(0,this.b)},
$S:0}
C.cLL.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cLM.prototype={
$0(){return B.d.gI(D.zi)},
$S:z+14}
C.cLN.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bT(0,new A.D(d,A.c4(w,new A.o(w,w,A.J(this.a.j(f),B.r,g),v,w,w,B.n),B.bg),w),0,0,0)},
$S:1952}
C.d4A.prototype={
$1(d){return this.a.m(new C.d4z(this.b,this.c))},
$S:8}
C.d4z.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d4Z.prototype={
$1(d){return this.a.m(new C.d4M())},
$S:2}
C.d4M.prototype={
$0(){},
$S:0}
C.d5_.prototype={
$1(d){return this.a.m(new C.d4L())},
$S:2}
C.d4L.prototype={
$0(){},
$S:0}
C.d50.prototype={
$0(){var w=this.a
return w.m(new C.d4K(w,this.b))},
$S:0}
C.d4K.prototype={
$0(){var w=this.a
return w.d=w.goc().FU(this.b.a)},
$S:0}
C.d51.prototype={
$0(){var w=this.a
return w.m(new C.d4J(w,this.b))},
$S:0}
C.d4J.prototype={
$0(){var w=this.a
return w.d=w.goc().cK5(this.b)},
$S:0}
C.d52.prototype={
$1(d){return this.a.m(new C.d4I())},
$S:2}
C.d4I.prototype={
$0(){},
$S:0}
C.d53.prototype={
$0(){var w=this.a
return w.m(new C.d4H(w,this.b))},
$S:0}
C.d4H.prototype={
$0(){var w=this.a
return w.d=w.goc().cKa(this.b.a)},
$S:0}
C.d54.prototype={
$1(d){var w=this.a
return w.m(new C.d4U(w,d))},
$S:6}
C.d4U.prototype={
$0(){var w=this.a
return w.d=w.goc().cL4(this.b)},
$S:0}
C.d55.prototype={
$1(d){var w=this.a
return w.d=w.goc().aEC(d)},
$S:2}
C.d56.prototype={
$1(d){var w=this.a
return w.d=w.goc().cKd(d)},
$S:2}
C.d58.prototype={
$1(d){var w=this.a
return w.d=w.goc().cL2(d)},
$S:2}
C.d59.prototype={
$1(d){var w=this.a
return w.m(new C.d4T(w,d))},
$S:8}
C.d4T.prototype={
$0(){var w=this.a
return w.d=w.goc().cKU(this.b)},
$S:0}
C.d5a.prototype={
$0(){var w=this.a,v=w.goc(),u=B.a.i(w.gyy(0).a.a),t=B.a.i(w.gaBL().a.a)
u=v.bdn(B.a.i(w.garz().a.a),t,u)
A.a4(this.b,!1).O(u)
return null},
$S:0}
C.bPZ.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:9}
C.bPT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bPS(w,d))},
$S:11}
C.bPS.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a4(0)}},
$S:0}
C.bQ1.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bPU.prototype={
$0(){var w=this.a
w.Q=D.aYV
w.adk(1)
w.r.x=null},
$S:0}
C.bPV.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.aYV)return
w=new A.e9()
w.d4(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aq(3)
v.z=D.cZQ[w.aq(6)]
v.as=u.f.a+2.6},
$S:0}
C.bPY.prototype={
$0(){var w=this.a
w.Q=D.abI
w.adk(2)
w.r.z=null},
$S:0}
C.bPX.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hpr
t.adk(3)
w=t.r
w.d=s
w.x="I say: "+t.gC4()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aq(3)
w.z=s?D.d59[v.aq(4)]:D.dpH[v.aq(3)]
w.as=t.a+2.8},
$S:0}
C.bQ_.prototype={
$0(){var w=this.a
w.Q=D.aYW
w.CW=this.b
w.cy=1
w.adk(4)
w.r.f=w.f.a+5},
$S:0}
C.bQ0.prototype={
$0(){},
$S:0}
C.bPW.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ie()},
$S:0}
C.bPQ.prototype={
$0(){return this.a.KH(this.b)},
$S:0}
C.bPR.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ie()},
$S:0}
C.bRv.prototype={
$0(){var w=this
return w.a.QN(w.b,0,w.c,w.d)},
$S:0}
C.bRw.prototype={
$0(){var w=this
return w.a.QN(w.b,3,w.c,w.d)},
$S:0}
C.bRx.prototype={
$0(){var w=this
return w.a.QN(w.b,1,w.c,w.d)},
$S:0}
C.bRy.prototype={
$0(){var w=this
return w.a.bRa(w.b,w.c,w.d)},
$S:0}
C.bRz.prototype={
$0(){var w=this
return w.a.QN(w.b,4,w.c,w.d)},
$S:0}
C.bRA.prototype={
$0(){var w=this
return w.a.QN(w.b,2,w.c,w.d)},
$S:0}
C.bRB.prototype={
$0(){var w=this
return w.a.QN(w.b,5,w.c,w.d)},
$S:0}
C.bRC.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:734}
C.bRu.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a4Q[d],p=q.a.a9(0,new A.t(0,-q.b*1.2*124)),o=A.fv(r,r,3,r,A.cS(r,r,r,r,r,r,r,r,r,D.fgP,e),B.a3,B.bZ,r,B.dA,B.bW)
o.nZ(130)
w=o.b.a.c
w=p.aF(0,new A.t(0,w.gbb(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bu(A.bL(w,v.gbb(v)+12,u+18),B.hQ)
u=this.a
v=t.eW(B.dB)
w=$.S()
s=A.I()
s.r=B.dm.gp(0)
u.az(v,s)
s=A.I()
s.r=D.q_.gp(0)
u.az(t,s)
w=new A.aG(w.r,B.ah,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aY(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.bt())
v=A.I()
v.r=D.q_.gp(0)
u.aG(w,v)
o.a3(u,new A.t(t.a+9,t.b+6))},
$S:672}
C.bQf.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.bQg.prototype={
$2(d,e){var w=this.a,v=B.o.aK(w.alM(d),w.alM(e))
if(v!==0)return v
return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.fou.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.fYd.prototype={
$2(d,e){if(e!=null)J.cc(this.a.c4(0,d,new C.fYe()),e)},
$S:z+66}
C.fYe.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.fYf.prototype={
$1(d){return d!==this.a},
$S:3}
C.fYg.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.fYh.prototype={
$1(d){return d!==this.a&&!B.d.b2(this.b,new C.fYc(this.c,d))},
$S:3}
C.fYc.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fYi.prototype={
$1(d){return d!==this.a},
$S:3}
C.fYj.prototype={
$1(d){return d!==this.a},
$S:3}
C.fYk.prototype={
$1(d){return d!==this.a&&!B.d.b2(this.b,new C.fYb(this.c,d))},
$S:3}
C.fYb.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fAY.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fP1.prototype={
$1(d){return d.Q},
$S:z+15}
C.fP2.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fxp.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fDC.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bLe.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.fYD.prototype={
$2(d,e){return B.o.aK(C.hpG(d),C.hpG(e))},
$S:227}
C.fYE.prototype={
$1(d){return d!==this.a},
$S:3}
C.fPy.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bJs.prototype={
$0(){var w=this.a
w.ch=!0
w.b70()},
$S:0}
C.bJn.prototype={
$0(){},
$S:0}
C.bJt.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bJl.prototype={
$0(){},
$S:0}
C.bJm.prototype={
$0(){},
$S:0}
C.bJr.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bT(0,A.b4(u,u,u,new C.bc6(t,u),B.ax),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ao(u,A.p(u,A.d(t.dy,u,u,u,u,u,u,D.fok,B.K,u,u),B.f,u,u,new A.o(w,u,u,v,u,u,B.n),u,u,u,u,B.bS,u,u,u),u,u,14,14,6,u))}return A.aB(B.c9,new A.an(B.a_,u,B.aa,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bJo(t,e),u,u,u,u,u,u,u,new C.bJp(t,e),u,u,u,u,u,u,u,u,u,new C.bJq(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bJo.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:21}
C.bJq.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bJp.prototype={
$1(d){return this.a.db=B.k.E(d.b.a/this.b.b,0.08,0.92)},
$S:21}
C.bJk.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ie()},
$S:0}
C.cnm.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cnn.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cnl(w))},
$S:0}
C.cnl.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cno.prototype={
$0(){var w=this,v=w.a
v.giT()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cnp.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cnq.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cnr.prototype={
$0(){},
$S:0}
C.cns.prototype={
$0(){var w=this.a
w.z=w.WW(++w.e)
w.Q=A.c1(w.gkK()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cni.prototype={
$0(){return A.a4(this.a,!1).ie()},
$S:0}
C.cnj.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.giT().length,e=i/2,d=new C.cnk(i,f,h),a0=g.as,a1=A.a7(a0).k("bc<2>")
a0=A.C(new A.bc(a0,a1),a1.k("L.E"))
a0=A.bT(0,A.cd(new A.h5(a0),new C.cnd(g,new A.t(e,56),f,d),j),0,0,0)
a1=this.b
w=g.giT().length!==0&&!B.d.t(g.giT(),-1)
v=x.p
e=A.a([a0,A.ao(j,new C.Qe(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cN(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.Mr(new C.cne(g,u),new C.cnf(g,u),new C.cng(g,u),j,j,new A.bG("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ao(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.t(a1,"not a child")?B.f9:B.bj,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.giT().length!==0&&!B.d.t(g.giT(),-1)){a0=g.e+1>=g.gkK().length?"See my result":"Next family"
g=A.at(C.ue(a0,g.gq5(g),B.cJ,B.jT,D.fq),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.WW(0):s).length))break
if(!B.d.t(g.giT(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.WW(0)
o=s}else o=s
n=s[u]
n=A.ed(B.A,new C.Qe(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.WW(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.qT(new A.bp(0,p,t),new C.cnh(),new S.DZ(u,j,new C.Qe(l.b,k,62,!1,j),new A.kB(0.25,new C.Qe(m.b,k,62,!1,j),j),new A.jM(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a2,j,j),B.I,S.htb(),!0,!0,j,j,j,j,j,j,!1,B.jB,j,new A.bG("chip-"+r,a0),w),B.b5,B.iU,j,new A.bG("t"+r+"-"+q,a0),v))}++u}g=A.bX(B.fI,a1,B.bq,j,6,8)}e.push(A.ao(0,g,j,j,0,0,j,j))
return new A.an(B.a_,j,B.aa,B.t,e,j)},
$S:64}
C.cnk.prototype={
$1(d){return new A.t(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:521}
C.cnd.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.giT().length!==0&&!B.d.t(t.giT(),-1)
return A.b4(p,p,p,new C.bbB(q.b,o,v,w,p),B.ax)},
$S:66}
C.cnf.prototype={
$1(d){return this.a.giT()[this.b]===-1},
$S:z+30}
C.cng.prototype={
$1(d){return this.a.cNV(this.b,d.a)},
$S:z+31}
C.cne.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.giT()[t]!==-1,r=A.m(18),q=e.length!==0?B.cJ.j(0.3):B.L
if(s)w=v
else w=A.J(e.length!==0?B.cJ:B.jN,B.r,2)
u=s?A.ls(new C.cnc(),A.at(new C.Qe(u.gaE4()[u.giT()[t]].b,u.gaE4()[u.giT()[t]].a,62,!1,v),v,v,v),B.lt,B.iU,v,v,new A.bp(0.3,1,x.X),x.i):D.b8F
return A.dd(v,u,v,v,B.b5,new A.o(q,v,w,r,v,v,B.n),B.a2,v,100,v,v,v,v,88)},
$S:1955}
C.cnc.prototype={
$3(d,e,f){return A.ed(B.A,f,e,null,null)},
$S:111}
C.cnh.prototype={
$3(d,e,f){return A.dP(f,new A.t(Math.sin(e*24)*8*(1-e),0))},
$S:111}
C.cMP.prototype={
$1(d){return d>=1},
$S:113}
C.cCm.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkK()[w.e].d.length)w.m(new C.cCl(w))},
$S:11}
C.cCl.prototype={
$0(){return this.a.f++},
$S:0}
C.cCu.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cCv.prototype={
$0(){var w=this.a,v=this.b
w.z.M(0,v)
w.Q=v},
$S:0}
C.cCw.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cCt(w))},
$S:0}
C.cCt.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cCx.prototype={
$0(){return this.a.f++},
$S:0}
C.cCy.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cCz.prototype={
$0(){},
$S:0}
C.cCA.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a7(0)
w.as=!1
w.ay=0},
$S:0}
C.cCo.prototype={
$0(){return A.a4(this.a,!1).ie()},
$S:0}
C.cCp.prototype={
$3(d,e,f){var w=null
return A.ls(new C.cCn(this.a,e),w,B.b5,B.hs,w,w,new A.bp(w,this.b,x.X),x.i)},
$S:1956}
C.cCn.prototype={
$3(d,e,f){var w,v,u=null,t=this.a,s=B.cJ.j(t.as?0.6:0.15)
s=A.a([new A.ac(0,B.G,s,B.I,t.as?40:18)],x.V)
w=B.w.j(e)
v=this.b
v=A.TR(v,v,B.Vl)
return A.p(u,A.hT(new A.Bn(new A.xr(w,B.Lb,u,B.Xk),H.bVJ(A.b4(u,u,u,new C.aAQ(t.gkK()[t.e].c,t.as,u),B.ax),v),u),B.ap),B.f,u,u,new A.o(u,u,u,u,s,u,B.a6),u,190,u,u,u,u,u,190)},
$S:1957}
C.cCq.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,14*(1-e))),e)},
$S:101}
C.cCr.prototype={
$3(d,e,f){return A.dP(f,new A.t(Math.sin(e*22)*8*(1-e),0))},
$S:111}
C.cCs.prototype={
$0(){return this.a.bo1(this.b)},
$S:0}
C.f1h.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.ami$)
v.ami$=w
v.pV$.sp(0,w)
v.apW(u)},
$S:9}
C.fbl.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a4(0)
w.a.$0()},
$S:11}
C.bR0.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bR_())},
$S:0}
C.bR_.prototype={
$0(){},
$S:0}
C.bQY.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bQW.prototype={
$0(){},
$S:0}
C.bQX.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMv()
w=s+1>=r.length?3:5
break
case 3:q=C.bFc(p.gaoK(0),0,r.length)
p.m(new C.bQT(p,q))
o=p
w=6
return A.b(C.Bx(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.By(s.d,s.c.a,"school",p.gaoK(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bQU())
w=4
break
case 5:p.m(new C.bQV(p))
p.gqd().Vv(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bQT.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bQU.prototype={
$0(){},
$S:0}
C.bQV.prototype={
$0(){return this.a.x++},
$S:0}
C.bQZ.prototype={
$0(){return this.a.KH(this.b)},
$S:0}
C.bQS.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ie()},
$S:0}
C.f1i.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.t(t,s),q=v.b,p=v.d,o=p?C.htl(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.DD
C.S3(q,D.egQ,0,0.2,-0.6,-0.2,null,w,D.efB,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a9(0,new A.t(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.S()
p=A.I()
p.r=D.FC.gp(0)
p.c=3
p.d=B.bE
q.bo(new A.t(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f1j.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.S3(this.a,D.efV,0,u,0.7,-0.5,null,null,D.J1,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f1k.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.S3(this.a,D.ehC,0,0,0.8,-0.5,null,null,D.J1,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f1l.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.S3(w.b,D.egK,0,v,-0.8,-0.5,null,null,D.J1,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f1m.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.t(34,-122+Math.sin(w*5)*5)
else v=v?D.egO:D.DD
C.S3(p,D.ege,0,t,0,-0.6,null,v,D.J1,3,0,s,1.3,u,0,w,0)
q=q.c9l(new A.t(222,455),9)
$.S()
w=A.I()
w.r=B.cJ.gp(0)
p.aG(q,w)},
$S:0}
C.f1n.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:734}
C.bQE.prototype={
$2(d,e){return d+e},
$S:67}
C.bQP.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bQQ.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bQR.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.giT()[u.b]=s
t.giT()[u.d]=t.y
w=t.as
v=t.pV$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bQL.prototype={
$1(d){return d},
$S:117}
C.bQK.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.pV$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bQM.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bQN.prototype={
$0(){},
$S:0}
C.bQO.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.Fl(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.cv(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a7(0)},
$S:0}
C.bQG.prototype={
$0(){return A.a4(this.a,!1).ie()},
$S:0}
C.bQH.prototype={
$2(d,e){var w=this.a
w=w.gkK()[w.f].e
return B.o.aK(w[d],w[e])},
$S:67}
C.bQI.prototype={
$2(d,e){var w=null,v=C.h5n(new A.av(A.aR(1/0,e.a,e.b),A.aR(1/0,e.c,e.d))),u=this.a
return A.aB(B.c9,new A.ey(A.b4(w,w,w,new C.biK(u,u.pV$),B.ax),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bQF(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bQF.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.giT().length
u=B.o.E(B.k.bh((t.a-s.a)/r/450*v),0,v-1)
w.cYz(w.giT()[u])}},
$S:23}
C.bQJ.prototype={
$1(d){var w=this.a
return w.gkK()[w.f].d[d]},
$S:72}
C.doa.prototype={
$2(d,e){return 0},
$S:67}
C.bQq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bQp())},
$S:0}
C.bQp.prototype={
$0(){},
$S:0}
C.bQo.prototype={
$0(){},
$S:0}
C.bQi.prototype={
$0(){},
$S:0}
C.bQj.prototype={
$0(){},
$S:0}
C.bQn.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.AA},
$S:0}
C.bQm.prototype={
$1(d){var w=null,v=this.a.gqd(),u=A.d(d,w,w,w,w,w,w,D.aSP,w,w,w),t=v.gbku(0)
return A.aB(B.c9,A.x(A.a([u,B.bD,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aT5,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbqj(v),w,w,w,w,w,w,!1,B.a4)},
$S:138}
C.bQk.prototype={
$0(){return this.a.KH(this.b)},
$S:0}
C.bQl.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ie()},
$S:0}
C.bQh.prototype={
$0(){return A.a4(this.a,!1).ie()},
$S:0}
C.dYk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dYl.prototype={
$1(d){return this.a},
$S:40}
C.dYm.prototype={
$0(){var w=this.a
return w.d=w.gSv().bcR(this.b)},
$S:0}
C.dYi.prototype={
$1(d){return new C.Tj(this.a,null)},
$S:z+32}
C.dYj.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.dYh.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hm,w,w,w)
return A.en(A.a([A.bN(!1,E.aUs,w,w,!0,w,w,w,new C.dYf(d),w,w),A.bN(!1,D.fJx,w,w,!0,w,w,w,new C.dYg(d),w,w)],x.p),w,w,D.fq,v,w,w,w,w,D.fw3,w)},
$S:18}
C.dYf.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dYg.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dYe.prototype={
$0(){var w=null,v=this.a.c.K(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.Z,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.dYn.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.dYo.prototype={
$0(){var w=this.a,v=this.b,u=C.bCW(v,10,w.r,!1)
return w.u8(C.hdS(w.a.d,"kahoot",u,w.gb4A(),v.b,"Family Kahoot",v.a))},
$S:0}
C.dYp.prototype={
$0(){var w=this.a
return w.u8(new C.ala(this.b,w.a.d,w.r,null))},
$S:0}
C.dYq.prototype={
$0(){var w=this.a
return w.u8(new C.ajn(this.b,w.a.d,w.r,null))},
$S:0}
C.dYt.prototype={
$0(){var w=this.a
return w.u8(new C.au3(this.b,w.a.d,w.r,null))},
$S:0}
C.dYu.prototype={
$0(){var w=this.a
return w.u8(new C.axZ(this.b,w.a.d,w.r,null))},
$S:0}
C.dYv.prototype={
$0(){var w=this.a
return w.u8(new C.ald(this.b,w.a.d,w.r,null))},
$S:0}
C.dYw.prototype={
$0(){var w=this.a
return w.u8(new C.alh(this.b,w.a.d,w.r,null))},
$S:0}
C.dYx.prototype={
$0(){var w=this.a
return w.u8(new C.alj(this.b,w.a.d,w.r,null))},
$S:0}
C.dYy.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.cYT()
return v.u8(C.hdS(v.a.d,"creator_"+u.a,w,v.gb4A(),"A game by the family",t,this.c.a))},
$S:0}
C.dYz.prototype={
$0(){return this.a.Ow(this.b)},
$S:0}
C.dYA.prototype={
$0(){return this.a.Xn(0,this.b)},
$S:0}
C.dYr.prototype={
$0(){return this.a.Ow(null)},
$S:0}
C.dYs.prototype={
$0(){return this.a.K(x.q).f.U(D.f9F)},
$S:0}
C.bQC.prototype={
$0(){var w=this.a
w.d=D.aYm
w.z=3},
$S:0}
C.bQD.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a4(0)
w.aOl()}else w.m(new C.bQB(w))},
$S:11}
C.bQB.prototype={
$0(){return this.a.z--},
$S:0}
C.bQs.prototype={
$0(){var w=this.a
w.d=D.abm
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bQt.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bQr(w))
if(w.as<=0){d.a4(0)
w.b4w(-1)}},
$S:11}
C.bQr.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bQy.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.VY},
$S:0}
C.bQz.prototype={
$0(){return this.a.e++},
$S:0}
C.bQv.prototype={
$0(){var w=this.a
w.d=D.aYn
w.ay=this.b},
$S:0}
C.bQw.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bQA.prototype={
$2(d,e){return B.o.aK(e.b,d.b)},
$S:1958}
C.bQx.prototype={
$0(){return this.a.KH(this.b)},
$S:0}
C.bQu.prototype={
$0(){var w=this.a.c
w.toString
return A.a4(w,!1).ie()},
$S:0}
C.bQ2.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.au()
s=A.a([new A.as(new A.b9(s,B.b2,B.aO),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.M)(t),++v){u=t[v]
s.push(new A.as(new A.b9(u,B.b2,B.aO),r))}return s},
$S:1959}
C.bQ3.prototype={
$0(){return this.a.gCI().c.push(C.h_d(null,0,20,""))},
$S:0}
C.bQd.prototype={
$1(d){var w=null
return A.br(w,new A.b5(4,A.m(12),B.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dq,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.UR,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:238}
C.bQc.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gCI().c,m=this.b,l=n[m],k=o.cc2(l),j=B.c.j(0.06),i=A.m(18),h=A.J(B.aZ,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.Ka,p,p,p),B.b1],g)
if(n.length>1)f.push(A.aF(p,p,p,p,B.apm,p,p,p,new C.bQ7(o,m),p,p,p,p,p,p))
n=J.a5(k)
m=this.c
f=A.a([A.B(f,B.m,p,B.e,B.i,0,p,p),A.aL(p,B.Y,!1,p,!0,B.t,p,A.aM(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ai,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQ8(l),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.d9,!0,B.a3,p,B.an,p,p,p,p),B.O],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aB3[v]
t=D.aAP[v]
s=v+1
f.push(new A.D(B.eI,new A.ce(B.aM,B.e,B.i,B.m,p,B.p,p,0,A.a([new A.y(u,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p),B.ac,new A.bz(1,B.bb,A.aL(p,B.Y,!1,p,!0,B.t,p,A.aM(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ai,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bQ9(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.a9,p,p,p,p,p,p,p,p,p,p,p,B.d9,!0,B.a3,p,B.an,p,p,p,p),p),new Aq.OU(v,l.c,new C.bQa(o,l),p,!1,D.lw,p,p,p,p,p,!1,!1,p,K.aYL,p,p,p,p,p,w)],g),p),p))}f.push(D.fBD)
f.push(B.am)
n=A.a([D.fv8,B.ac],g)
for(r=0;r<3;++r){q=D.c9l[r]
n.push(new A.D(B.fB,A.iO(p,p,p,new A.y(""+q+"s",p,p,p,p,p,p,p,p,p,p,p),p,new C.bQb(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.B(n,B.m,p,B.e,B.i,0,p,p))
return A.p(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.o(j,p,h,i,p,p,B.n),p,p,p,B.kE,B.bf,p,p,p)},
$S:176}
C.bQ7.prototype={
$0(){var w=this.a
return w.m(new C.bQ6(w,this.b))},
$S:0}
C.bQ6.prototype={
$0(){return B.d.cA(this.a.gCI().c,this.b)},
$S:0}
C.bQ8.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bQ9.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bQa.prototype={
$1(d){return this.a.m(new C.bQ5(this.b,d))},
$S:171}
C.bQ5.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bQb.prototype={
$1(d){return this.a.m(new C.bQ4(this.b,this.c))},
$S:8}
C.bQ4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e__.prototype={
$0(){var w=this.a
w.w4()
w.a.bu()
w.a.q6()},
$S:0}
C.dZZ.prototype={
$0(){var w=this.a
w.w4()
w.a.bu()
w.a.q6()},
$S:0}
C.e_1.prototype={
$0(){var w=this,v=w.b
if(J.cL(v)||J.ct(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e_2.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_3.prototype={
$0(){return this.a.e=!1},
$S:0}
C.dZY.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e_0.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e_5.prototype={
$0(){this.a.OS()
return null},
$S:0}
C.e_4.prototype={
$0(){return this.a.EH(this.b)},
$S:0}
C.dZq.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.di,w,w,!0,w,w,w,new C.dZo(d),w,w),r=A.bo(B.bP,w,w,w,w,w,w,w,w,w,w,w)
return A.en(A.a([s,A.bE(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.dZp(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.dZo.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dZp.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dZr.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cKz(this.b)},
$S:0}
C.dZl.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aTM(w.b,w.c,w.d)},
$S:9}
C.dYN.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.dYO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZ4.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.GV(t.a.c),$async$$0)
case 2:s=r.pT(q.dH(e,new C.dZ2(t)))
if(s!=null&&t.c!=null)t.m(new C.dZ3(t,s))
t.a.bu()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZ2.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dZ3.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZ5.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.dZ6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dZk.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cLm(C.htr(w),w)},
$S:0}
C.dZ1.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.VF(u,w,C.aQ1(u,w),new C.dZ0(v),null)},
$S:z+37}
C.dZ0.prototype={
$1(d){return this.blR(d)},
blR(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.dZ_(s,d))
w=3
return A.b(s.u4(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:752}
C.dZ_.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bcR(this.b)},
$S:0}
C.dZh.prototype={
$1(d){return d.as},
$S:z+1}
C.dZi.prototype={
$1(d){var w=this
return new A.e0(new C.dZg(w.a,w.b,w.c,w.d,w.e),null)},
$S:19}
C.dZg.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e3:B.c,h=A.m(26),g=A.J(B.bP.j(0.5),B.r,1.5),f=A.p(k,D.bPv,B.f,k,k,new A.o(B.bP.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a1,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,12.5,k,k,B.Q,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.B(A.a([f,B.bd,a0,A.aF(k,k,k,k,A.X(B.cz,j?B.bs:B.bn,k,k,k,k),k,k,k,new C.dZa(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.M)(v),++s){r=v[s]
q=t.a===r?B.bP:B.bP.j(0.1)
p=new A.aP(20,20)
o=t.a===r
n=new A.ay(B.bP,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bP
a0.push(A.aB(k,A.dd(k,new A.y(m,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k),k,k,B.b5,new A.o(q,k,new A.bK(n,n,n,n),new A.bg(p,p,p,p),k,k,B.n),B.hr,k,k,k,B.BN,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dZb(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bX(B.bC,a0,B.bq,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c0s,new A.D(D.bAh,f,k),new A.D(D.bA8,e,k),new A.D(B.rr,a0,k),new A.D(W.akW,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bs:B.bn,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(A2.ani,j?B.bs:B.bn,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bAa,A.B(A.a([a0,B.at,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.av,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.Yk(k,B.bP,k,k,!1,B.y,k,k,k,k,k,k,new C.dZc(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aA)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aD.j(0.35),B.j0,12)],x.V)
f.push(A.aB(k,A.p(k,A.B(A.a([D.fvu,B.bd,D.bEr,D.bQc],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.o(k,k,k,j,e,D.c4a,B.n),k,k,k,B.hL,B.bA,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.dZd(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.vZ,A.B(A.a([A.E(A.dI(B.di,new C.dZe(a1),k),1),B.at,A.E(A.bE(L.aUR,k,new C.dZf(t,a1),A.bo(B.bP,k,k,k,k,k,B.cl,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bl(!0,A.p(k,A.cg(A.x(f,B.E,k,B.e,B.P,0,B.p),B.t,k,B.y,k,k,k,k,B.ag),B.ap,k,k,new A.o(i,k,g,h,k,k,B.n),k,k,k,B.ya,k,k,k,k),!0,!1,B.af,!0,!0)},
$S:85}
C.dZa.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZb.prototype={
$0(){return this.b.$1(new C.dZ9(this.a,this.c))},
$S:0}
C.dZ9.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.dZc.prototype={
$1(d){var w=this.a
w.m(new C.dZ7(w,d))
this.b.$1(new C.dZ8())},
$S:8}
C.dZ7.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dZ8.prototype={
$0(){},
$S:0}
C.dZd.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGV(!0,w))
return null},
$S:0}
C.dZe.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZf.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(new A.aGV(!1,w))
return null},
$S:0}
C.dZj.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cL9(this.b.b)
w.r.a7(0)},
$S:0}
C.dYB.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aig(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hmX(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.dYC.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aEz(w)},
$S:0}
C.dZt.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.adA(this.b,w,this.c,null)},
$S:z+39}
C.dZn.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e3:B.c,t=A.m(20),s=A.X(B.lG,B.aW,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.ad,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.m,w,B.e,B.P,0,B.p)
return A.en(A.a([A.bE(D.fNg,w,new C.dZm(d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w))],o),B.b8,w,u,v,w,s,w,new A.b7(t,B.a0),r,w)},
$S:18}
C.dZm.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dYD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dYE.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.dYF.prototype={
$1(d){return d.a},
$S:z+8}
C.dYG.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.M)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hU(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aEz(w)},
$S:0}
C.dYK.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aig(q)
w=A.T(q).k("Z<1>")
q=A.C(new A.Z(q,new C.dYI(r),w),w.k("L.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hmX(v.e,null,r,v.f,v.r,new C.dYJ(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.dYJ.prototype={
$0(){return this.a.aax(this.b)},
$S:0}
C.dYI.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.dYL.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.T(w).k("N<1,hU>")
w=A.C(new A.N(w,new C.dYH(this.b),v),v.k("ak.E"))
u.d=t.aEz(w)},
$S:0}
C.dYH.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.dZs.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.dYX.prototype={
$1(d){return d.length!==0},
$S:3}
C.dYY.prototype={
$1(d){var w=this
return new A.e0(new C.dYW(w.a,w.b,w.c,w.d),null)},
$S:19}
C.dYW.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e3:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.av,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.ad],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.dYS(u,e,o),A.T(o).k("N<1,v>")))
p.push(B.O)
u=w.d
p.push(A.aL(v,B.Y,!1,v,!0,B.t,v,A.aM(),u,v,v,v,v,v,2,A.br(v,new A.b5(4,A.m(12),B.dk),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ai,v,v,v,v,v,B.mn,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a3,v,B.an,v,v,v,v))
p=A.x(p,B.ak,v,B.e,B.P,0,B.p)
t=w.a
return A.en(A.a([A.bN(!1,B.di,v,v,!0,v,v,v,new C.dYT(d),v,v),A.bE(B.Kl,v,new C.dYU(t,u,o,e),A.bo(B.bP,v,v,v,v,v,v,v,v,v,v,v)),A.bE(D.fA0,v,new C.dYV(t,u,o,d),A.bo(B.aW,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:177}
C.dYS.prototype={
$1(d){var w=null
return A.dy(!1,B.af,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.av,w,w,w,w,w,w,w,w,w,w,w,B.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aF(w,w,w,w,D.bYi,w,w,w,new C.dYR(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1960}
C.dYR.prototype={
$0(){return this.a.$1(new C.dYP(this.b,this.c))},
$S:0}
C.dYP.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.dYT.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dYU.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.t(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.dYQ(w.c,u))
v.bK(0,B.c5)}},
$S:0}
C.dYQ.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.dYV.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.t(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a4(w.d,!1).O(!0)},
$S:0}
C.dYZ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cLP(this.b,D.ub,C.GT(v,w.a.c))},
$S:0}
C.dZA.prototype={
$1(d){return d.as},
$S:z+1}
C.dZB.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iS(this.b,w)},
$S:0}
C.dZC.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.iif(v)
return w.We(v==null?null:v.a)},
$S:0}
C.dZD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.hV3(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aR(1/0,e.a,e.b)
s=A.aR(1/0,e.c,e.d)
l.ctm(new A.av(u,t),v.gbjy(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.cXN:D.cW_
q=A.J(s?B.dq:D.bgj,B.r,1)
p=A.m(22)
o=A.bT(0,A.b4(m,m,m,new C.beU(s,m),B.ax),0,0,0)
n=Math.max(e.b,e.d)
return A.p(m,A.bx(p,new A.an(B.a_,m,B.aa,B.t,A.a([o,A.bT(0,A.tu(new A.Q(n,n,n,n),new A.a6(u,t,new C.bfP(l.d,v,l.f,w,new C.dZw(l),l.gcde(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ao(10,new C.bxo(s,new C.dZx(l,e),new C.dZy(l,e),new C.dZz(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.ap),B.f,m,m,new A.o(m,m,q,k,m,new A.a9(B.b4,B.b7,B.x,r,m,m),B.n),m,m,m,Z.ak1,m,m,m,m)},
$S:234}
C.dZw.prototype={
$1(d){var w=this.a
w.m(new C.dZu(w,d))},
$S:2}
C.dZu.prototype={
$0(){var w=this.a.r,v=this.b
if(w.t(0,v))w.W(0,v)
else w.M(0,v)},
$S:0}
C.dZx.prototype={
$0(){var w=this.b
return this.a.bb4(1.25,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dZy.prototype={
$0(){var w=this.b
return this.a.bb4(0.8,new A.av(A.aR(1/0,w.a,w.b),A.aR(1/0,w.c,w.d)))},
$S:0}
C.dZz.prototype={
$0(){var w=this,v=w.b
return w.a.aTM(new A.av(A.aR(1/0,v.a,v.b),A.aR(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbjy())},
$S:0}
C.dZE.prototype={
$0(){var w=this.a
return w.m(new C.dZv(w))},
$S:0}
C.dZv.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.dYM.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fI(new A.fC(s.c)),$async$$0)
case 2:t.y_("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.ddH.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ao(w,new C.bjy(u,C.hxE(v.c,u),new C.ddG(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.ddG.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.ddI.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ao(w,new C.bmL(d.d,d.c,u.f.t(0,d.a),new C.ddF(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.ddF.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fAu.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pT(new A.cQ(new A.Z(v,new C.fAv(d),w.k("Z<1>")),new C.fAw(),w.k("cQ<1,n>")))},
$S:z+19}
C.fAv.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fAw.prototype={
$1(d){return d.a},
$S:z+8}
C.fAs.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fAt.prototype={
$1(d){return d.b},
$S:z+8}
C.fAz.prototype={
$1(d){var w,v=d.e
if(this.a.aj(0,v))return v
v=this.b
w=A.T(v)
return A.pT(new A.cQ(new A.Z(v,new C.fAA(d),w.k("Z<1>")),new C.fAB(),w.k("cQ<1,n>")))},
$S:z+19}
C.fAA.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fAB.prototype={
$1(d){return d.a},
$S:z+8}
C.fAx.prototype={
$1(d){var w,v=A.eD([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.aj(0,w)&&v.M(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fAy.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.ddK.prototype={
$0(){return this.a},
$S:z+46}
C.de0.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.aj(0,d)},
$S:251}
C.ddT.prototype={
$2(d,e){var w=this.a.c4(0,d,new C.ddU()),v=J.a5(w)
if(!v.t(w,e))v.M(w,e)},
$S:116}
C.ddU.prototype={
$0(){return A.a([],x.s)},
$S:655}
C.ddS.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.f0(w,e)
return w===!0},
$S:282}
C.ddL.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.ddR.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.ddQ.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.M(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aW(v==null?D.CZ:v)
u=1
while(v.C())u+=s.$2(v.gT(v).a,e)
v=s.b.h(0,d)
v=J.aW(v==null?B.Y:v)
while(v.C()){t=v.gT(v)
if(e.t(0,t))continue
e.M(0,t)
t=w.h(0,t)
t=J.aW(t==null?D.CZ:t)
while(t.C())u+=s.$2(t.gT(t).a,e)}return u},
$S:1962}
C.ddM.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.ddV.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.M(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aW(u==null?B.Y:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gT(u)
if(a8.t(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.M(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aW(t==null?D.CZ:t)
while(t.C()){r=t.gT(t)
if(r.a!==a9&&!B.d.b2(w,new C.ddW(r)))w.push(r)}}B.d.bs(w,new C.ddX(a8))
B.d.aW(w,new C.ddY())
q=C.hV2(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.M)(w),++m){t=w[m].a
if(a8.t(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eNv],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.M)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.z(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.M)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gI(k)+B.d.gak(k))/2
a1=A.a([new A.z(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bpW(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.z(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.z(a5,a6))}}return a1},
$S:1963}
C.ddW.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.ddX.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
C.ddY.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.ddZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a5(n),v=o.c,u=-1/0,t=0;t<w.gL(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.bc(v,A.a7(v).k("bc<2>")).cH(0,0,B.pI)+88-w.gI(n).a}else u=0
for(w=J.a5(n),v=o.c,t=0;t<w.gL(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:753}
C.de_.prototype={
$1(d){return 16+d*156},
$S:248}
C.ddJ.prototype={
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
t.n(0,d,new C.Gb(r,new A.t(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Gb(s,new A.t(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Gb(s,new A.t(e,v)))}t=o.r.h(0,d)
t=J.aW(t==null?B.Y:t)
s=o.w
while(t.C()){r=t.gT(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.Ku(d,new A.t(e+t,w),s,s.length))}},
$S:185}
C.ddN.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aK2(new A.t(v.a,v.b+28),new A.t(w.a,w.b+28),!0,null))},
$S:116}
C.ddO.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.ddP.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:614}
C.de1.prototype={
$2(d,e){return B.k.aK(d.a,e.a)},
$S:614}
C.de2.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:381}
C.de3.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:195}
C.de4.prototype={
$1(d){return d>=0.5},
$S:113}
C.fh8.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hc(A.aO(!1,v,!0,new A.a6(38,38,A.X(d,this.a.c?B.c:B.cq,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1965}
C.eRn.prototype={
$1(d){var w=null,v=A.m(8),u=B.bP.j(0.12),t=A.m(8)
return new A.D(B.no,A.aO(!1,v,!0,A.p(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.flf,B.K,w,w),B.f,w,w,new A.o(u,w,w,t,w,w,B.n),w,w,w,w,B.NC,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eRm(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eRm.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dtQ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dtP.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nJ,B.K,w,w)
return A.en(A.a([A.bN(!1,B.di,w,w,!0,w,w,w,new C.dtN(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.my,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dtO(d),w,w)],x.p),B.b8,B.BK,w,u,D.bBb,w,D.bD8,new A.b7(v,B.a0),w,w)},
$S:18}
C.dtN.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.dtO.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.dtZ.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.du_.prototype={
$1(d){var w=this.a
return w.m(new C.dtY(w,d))},
$S:z+49}
C.dtY.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.du0.prototype={
$1(d){var w=null
return A.qx(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.du3.prototype={
$1(d){var w=this.a
return w.m(new C.dtX(w,d))},
$S:35}
C.dtX.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.du2.prototype={
$1(d){var w=null
return A.qx(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.du4.prototype={
$1(d){var w=this.a
return w.m(new C.dtW(w,d))},
$S:35}
C.dtW.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.du5.prototype={
$0(){var w=this.a
return w.m(new C.dtV(w))},
$S:0}
C.dtV.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.du6.prototype={
$0(){var w=this.a
return w.m(new C.dtU(w))},
$S:0}
C.dtU.prototype={
$0(){return++this.a.at},
$S:0}
C.du7.prototype={
$0(){var w=this.a
return w.m(new C.dtT(w))},
$S:0}
C.dtT.prototype={
$0(){return--this.a.ax},
$S:0}
C.du8.prototype={
$0(){var w=this.a
return w.m(new C.dtS(w))},
$S:0}
C.dtS.prototype={
$0(){return++this.a.ax},
$S:0}
C.du9.prototype={
$1(d){var w=this.a
return w.m(new C.dtR(w,d))},
$S:8}
C.dtR.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.du1.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dua.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bP.j(0.18)
else w=q.c.a?B.e3:B.c
v=A.m(12)
if(p)u=B.bP
else u=(q.c.a?B.e9:B.bO).j(0.85)
u=A.J(u,B.r,p?1.5:1)
if(p)t=B.bP
else t=q.c.a?B.bs:B.bn
t=A.X(f,t,r,r,r,18)
if(p)s=B.bP
else s=q.c.a?B.bs:B.bn
return A.E(A.aH(!1,B.a2,!0,r,A.aO(!1,o,!0,A.dd(r,A.x(A.a([t,B.au,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b5,new A.o(w,r,u,v,r,r,B.n),B.eO,r,r,r,B.jQ,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dub(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dub.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.duk.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.ccT.prototype={
$2(d,e){return new A.bA(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:91}
C.cd_.prototype={
$1(d){return d.ag()},
$S:z+5}
C.cd0.prototype={
$2(d,e){var w=J.b6(e,new C.ccZ(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bA(d,w,x.d2)},
$S:z+53}
C.ccZ.prototype={
$1(d){return d.ag()},
$S:z+12}
C.ccV.prototype={
$1(d){return C.alm(A.a2(d,x.N,x.z))},
$S:z+9}
C.ccW.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.ccX.prototype={
$1(d){return C.hdR(A.a2(d,x.N,x.z))},
$S:z+11}
C.ccY.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cd4.prototype={
$1(d){return new A.aH6(d.f.length,d.a,d.b)},
$S:z+55}
C.cd5.prototype={
$2(d,e){return B.a.aK(d.c,e.c)},
$S:574}
C.cd1.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cd2.prototype={
$1(d){return d.cKM(C.GT(d,this.a))},
$S:z+85}
C.dZN.prototype={
$1(d){return C.uf(d,this.a.a.c)},
$S:z+3}
C.dZO.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.dZS.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.dZT.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.dZK.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0j(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yz("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pi(r.c,r.e),$async$$0)
case 4:s.yz(p)
w=5
return A.b(s.JP(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZL.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0j(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.yz("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pi(r.c,r.e),$async$$0)
case 4:s.yz(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZM.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.VI(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.yz("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.yz("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.yz("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.JP(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.yz(B.a.ea(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.dZR.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b0i(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.yz("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a4(r,!1).cd(A.dZ(new C.dZQ(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pi(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dZQ.prototype={
$1(d){var w=this.b
return new C.a_R(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.dZP.prototype={
$1(d){return D.hmd},
$S:z+58}
C.dZV.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZW.prototype={
$1(d){var w=this.a
w=w.r?null:new C.dZU(w,d)
return new A.D(B.d2,new C.bfT(this.b,d.c,d.a,w,null),null)},
$S:1966}
C.dZU.prototype={
$0(){return this.a.Y_(this.b.b)},
$S:0}
C.dZF.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dZG.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dZH.prototype={
$0(){return this.a.e=!0},
$S:0}
C.dZI.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dZJ.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.dZX.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.M)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cT(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a4(this.b,!1).O(s)
return}},
$S:197}
C.dLC.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dLD.prototype={
$0(){return B.d.gI(D.a5c)},
$S:z+60}
C.dLE.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d3p,44),w,w,w),w,w,new C.bkE(u,t,v,w),B.ax)},
$S:66}
C.fR1.prototype={
$1(d){return A.p3(new C.fR0(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:134}
C.fR0.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e3:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.rV,24)],x.V),o=r?B.e9:B.bO
o=A.p(t,t,B.f,t,t,new A.o(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aW.j(0.25),B.bP.j(0.18)],x.O)
w=A.p(t,D.bSB,B.f,t,t,new A.o(t,t,t,A.m(12),t,new A.a9(B.a5,B.a8,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.av,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.p(t,A.x(A.a([B.W,o,new A.D(E.al0,A.B(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bs:B.bn,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.iy(!0,t,e,B.y,D.f7K,new C.fR_(this.b,s),20,B.akz,t,B.ag,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.o(q,t,t,B.kX,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:119}
C.fR_.prototype={
$2(d,e){var w=null,v=D.a5c[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.J(s?B.e9:B.bO,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.eq,8)],x.V),p=A.m(15),o=A.E(new C.a6J(v.a,!0,w),1),n=s?B.jK:B.jb,m=A.d(v.b,w,1,B.a1,w,w,w,A.l(w,w,s?B.aP:B.av,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aH(!1,B.a2,!0,w,A.aO(!1,u,!0,A.eJ(A.bx(p,A.x(A.a([o,A.p(w,A.x(A.a([m,A.d(v.c,w,1,B.a1,w,w,w,A.l(w,w,s?B.bs:B.bn,w,w,w,w,w,w,w,w,10,w,w,B.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.l8,w,w,w)],l),B.ak,w,B.e,B.i,0,B.p),B.ap),w,new A.o(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fQZ(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:78}
C.fQZ.prototype={
$0(){A.a4(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.clz.prototype={
$0(){return this.a.agD(this.b)},
$S:0}
C.fQo.prototype={
$1(d){return D.hhj},
$S:z+61}
C.fXU.prototype={
$1(d){var w=this
return new C.a1E(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fQt.prototype={
$1(d){return new C.Zu(this.a,null)},
$S:z+63}
C.fQs.prototype={
$1(d){return D.hij},
$S:z+64}
C.d5m.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d5n.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d5l(w,d))},
$S:35}
C.d5l.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d5o.prototype={
$1(d){return this.a.Kp()},
$S:2}
C.d5p.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d5i.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.d5j.prototype={
$1(d){return this.a.Kp()},
$S:2}
C.d5k.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cDx.prototype={
$0(){},
$S:0}
C.cDD.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.cDE.prototype={
$0(){return this.a.aPc(-1)},
$S:0}
C.cDF.prototype={
$1(d){return this.a.m(new C.cDC())},
$S:2}
C.cDC.prototype={
$0(){},
$S:0}
C.cDG.prototype={
$0(){return this.a.aPc(1)},
$S:0}
C.cDH.prototype={
$1(d){return this.a.m(new C.cDB())},
$S:2}
C.cDB.prototype={
$0(){},
$S:0}
C.cDI.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.Q,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aW.j(0.2)
if(s)v=B.aW
else v=this.b.a?B.e9:B.bO
return A.uz(u,u,B.b_,r,u,new C.cDA(t,d),B.ym,s,w,u,new A.ay(v,1,B.r,-1),B.cb)},
$S:1967}
C.cDA.prototype={
$1(d){var w=this.a
return w.m(new C.cDy(w,this.b))},
$S:8}
C.cDy.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cDJ.prototype={
$1(d){return this.a.m(new C.cDz())},
$S:2}
C.cDz.prototype={
$0(){},
$S:0}
C.cDK.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fgs.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a4(this.b,!1).O(w)},
$S:2}
C.fgt.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.fgu.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a4(this.b,!1).O(w)},
$S:0}
C.fgq.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbAv()
w=w.e
s=A.m(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bD7,new A.ey(A.p(r,q.a.c,B.f,r,r,new A.o(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.bxb(p,v,this.b.a,u,t,r),r,r,B.ax)},
$S:66}
C.fgr.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dx.av(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aW,B.bP,w)
s.toString
s=A.a([B.b_,s,B.aW],x.O)
return A.aH(!1,B.a2,!0,p,A.aO(!1,v,!0,A.eJ(D.elr,r,new A.o(r,r,A.J(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.dh(-1.2+t,-0.5),new A.dh(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:132}
C.fOP.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:73}
C.eOv.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eOm.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eOn.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eOt.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eOs(w,this.b),null)},
$S:19}
C.eOs.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e3:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.av,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eS(w,u,new A.D(B.akT,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bs:B.bn,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ad,C.hjN(new C.eOp(r,e),r.a),B.aA,A.B(A.a([A.E(A.dI(B.di,new C.eOq(d),w),1),B.at,A.E(A.bE(B.Ve,w,new C.eOr(r,d),A.bo(B.aW,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.ak,w,B.e,B.P,0,B.p),w),w,w,w,w,B.d8,w,new A.b7(t,B.a0),w)},
$S:100}
C.eOp.prototype={
$1(d){return this.b.$1(new C.eOo(this.a,d))},
$S:35}
C.eOo.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eOq.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eOr.prototype={
$0(){var w=this.a.a
A.a4(this.b,!1).O(w)
return null},
$S:0}
C.eOu.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.T8(this.b)},
$S:0}
C.eOh.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bcX(w)},
$S:0}
C.eOl.prototype={
$1(d){return this.bmd(d)},
bmd(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LG(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.iS(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eOk.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.T(w).k("Z<1>")
w=A.C(new A.Z(w,new C.eOj(this.b),v),v.k("L.E"))
u.d=t.bcX(w)},
$S:0}
C.eOj.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eOw.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.iS(this.b,w)},
$S:0}
C.eOx.prototype={
$1(d){return this.a.bED(d,this.b)},
$S:z+67}
C.eOi.prototype={
$0(){return this.a.aaw(this.b)},
$S:0}
C.fXK.prototype={
$1(d){return new C.adV(this.a,this.b,this.c,null)},
$S:z+68}
C.eOz.prototype={
$0(){return this.a.a_N(this.b)},
$S:0}
C.eOA.prototype={
$0(){return this.a.Qq(this.b)},
$S:0}
C.eOB.prototype={
$0(){return this.a.EC(this.b)},
$S:0}
C.eOC.prototype={
$0(){return this.a.a_O(this.b)},
$S:0}
C.eOy.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eOc.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eOd.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eOe.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
C.eOg.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qc(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eOf(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eOf.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eOZ.prototype={
$2(d,e){return d+e.gxb()},
$S:z+71}
C.eOV.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eOW.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eOG.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e3:B.c,s=A.m(24),r=A.p(v,D.bT2,B.f,v,v,new A.o(B.aw.j(u?0.18:0.08),v,A.J(B.aw.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.av,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bs:B.bn,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.av
u=u?B.e9:B.bO
w=x.p
return A.eS(v,t,new A.D(B.yl,A.x(A.a([r,B.aN,q,B.O,p,B.d4,A.B(A.a([A.E(A.dI(B.nM,new C.eOE(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fe,v,new A.b7(A.m(14),B.a0),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.at,A.E(A.bE(D.fR8,v,new C.eOF(d),A.bo(B.aw,v,v,v,v,v,B.fe,v,new A.b7(A.m(14),B.a0),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.P,0,B.p),v),v,v,v,v,B.d8,v,new A.b7(s,B.a0),v)},
$S:48}
C.eOE.prototype={
$0(){A.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eOF.prototype={
$0(){A.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eOP.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e3:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h_,28)],x.V),g=k?D.daq:B.a4w,f=x.p
g=A.p(m,A.x(A.a([A.p(m,m,B.f,m,m,new A.o(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aA,D.f1q,B.au,new A.bO(B.a5,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cy,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.o(m,m,m,m,m,new A.a9(B.ay,B.aE,B.x,g,m,m),B.n),m,m,m,m,E.akY,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.B(A.a([A.E(v.b5Z(B.b6,B.jj,new C.eOM(v,d),l,"Camera import","Scan QR"),1),B.at,A.E(v.b5Z(B.cw,R.z_,new C.eON(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.aw.j(k?0.14:0.06)
q=A.m(16)
p=A.J(B.aw.j(0.28),B.r,1)
o=A.p(m,D.bSo,B.f,m,m,new A.o(B.aw.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bS,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.av,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bs:B.bn,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bl(!0,new A.D(B.vW,A.p(m,A.x(A.a([g,new A.D(B.akU,A.x(A.a([w,B.W,u,B.bu,t,B.W,A.aH(!1,B.a2,!0,m,A.aO(!1,s,!0,A.p(m,A.B(A.a([o,B.bd,n,A.X(B.eE,k?B.bs:B.bn,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.o(r,m,p,q,m,m,B.n),m,m,m,m,B.bA,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eOO(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.P,0,B.p),B.ap,m,m,new A.o(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.af,!0,!0)},
$S:27}
C.eOM.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vG("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eON.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.vG("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eOO.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a4(u.b,!1).O(null)
w=2
return A.b(u.a.O9(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eOK.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e3:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.f2,24)],x.V),k=o?B.e9:B.bO
k=A.p(q,q,B.f,q,q,new A.o(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bs:B.bn
u=A.bx(w,new A.a6(48,48,C.aRj(!0,A.m(12),48,P.Od,u,v.c,48),q),B.ap)
w=A.d(v.b,q,1,B.a1,q,q,q,A.l(q,q,o?B.aP:B.av,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.B3(v.gxb())
s=x.p
r=this.a
return A.bl(!0,new A.D(B.vW,A.p(q,A.x(A.a([B.W,k,new A.D(D.akR,A.B(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bs:B.bn,q,q,q,q,q,q,q,q,12,q,q,B.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.BA,r.cns(B.uw,B.aW,new C.eOI(d),p,"QR code or backup file","Transfer project"),r.b3_(!0,B.ea,B.aw,new C.eOJ(d),p,"Remove from this device","Delete project"),B.W],s),B.m,q,B.e,B.P,0,B.p),B.f,q,q,new A.o(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.af,!0,!0)},
$S:27}
C.eOI.prototype={
$0(){A.a4(this.a,!1).O("transfer")
return null},
$S:0}
C.eOJ.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
C.eOL.prototype={
$1(d){return this.bme(d)},
bme(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.LG(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.vU(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eP1.prototype={
$0(){var w=this.a
w.a.bu()
w.m(new C.eP0(w))},
$S:0}
C.eP0.prototype={
$0(){return this.a.r++},
$S:0}
C.eP2.prototype={
$0(){var w=this.a
return w.m(new C.eP_(w))},
$S:0}
C.eP_.prototype={
$0(){return this.a.r++},
$S:0}
C.eOD.prototype={
$0(){var w=this.a.c
w.toString
return A.iS(w,null)},
$S:0}
C.eOH.prototype={
$0(){return this.a.cgK(this.b)},
$S:0}
C.eOY.prototype={
$0(){var w=this.a
return w.m(new C.eOX(w,this.b))},
$S:0}
C.eOX.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eOS.prototype={
$0(){return this.a.vG("scan")},
$S:0}
C.eOT.prototype={
$0(){return this.a.vG("file")},
$S:0}
C.eOU.prototype={
$1(d){return this.a.cnt(d,this.b)},
$S:z+72}
C.eOR.prototype={
$0(){return this.a.EG(this.b)},
$S:0}
C.eOQ.prototype={
$0(){return this.a.a0i(this.b,this.c)},
$S:0}
C.cCX.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cCW.prototype={
$1(d){return d.ag()},
$S:z+74}
C.cCU.prototype={
$1(d){return C.hDv(A.a2(d,x.N,x.z))},
$S:z+75}
C.cCV.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fzu.prototype={
$1(d){return d.y===D.kH},
$S:z+3}
C.fYu.prototype={
$1(d){return C.aQ1(d,this.a)},
$S:z+3}
C.fxo.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bR7.prototype={
$1(d){return!d.as},
$S:z+1}
C.bR6.prototype={
$1(d){return d.ag()},
$S:z+23}
C.bR3.prototype={
$1(d){return C.hdT(A.a2(d,x.N,x.z))},
$S:z+24}
C.bR4.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bR5.prototype={
$1(d){return J.k(d)},
$S:17}
C.fo5.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+25}
C.fjW.prototype={
$1(d){return C.h43(A.a2(d,x.N,x.z))},
$S:z+79}
C.fjX.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fjY.prototype={
$2(d,e){return e.e.aK(0,d.e)},
$S:z+25}
C.fQf.prototype={
$1(d){return J.k(d)},
$S:17}
C.fQg.prototype={
$1(d){return d.a},
$S:z+81}
C.fQh.prototype={
$1(d){return d.length!==0},
$S:3}
C.fQi.prototype={
$1(d){return B.d.t(this.a,d.a)},
$S:z+10}
C.fQj.prototype={
$1(d){return d.T8(null).ag()},
$S:z+82}
C.fYs.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fzY.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fCN.prototype={
$1(d){return C.alm(A.a2(d,x.N,x.z))},
$S:z+9}
C.fCO.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fCP.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fCQ.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fCR.prototype={
$1(d){return C.uf(d,this.a)},
$S:z+3}
C.fQ2.prototype={
$1(d){return C.uf(d,this.a)},
$S:z+3}
C.fYn.prototype={
$1(d){return C.alm(A.a2(d,x.N,x.z))},
$S:z+9}
C.fYo.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fYp.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fzF.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fzG.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fYy.prototype={
$1(d){return!d.as},
$S:z+1}
C.fz9.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fza.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fzb.prototype={
$2(d,e){return B.o.aK(d.Q,e.Q)},
$S:z+7}
C.fXV.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fDD.prototype={
$1(d){return d.Q},
$S:z+15}
C.fPW.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fCK.prototype={
$1(d){return C.alm(A.a2(d,x.N,x.z))},
$S:z+9}
C.fCL.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fCM.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.fPR.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fkt.prototype={
$1(d){return d.length!==0},
$S:3}
C.fku.prototype={
$1(d){return C.hdT(A.a2(d,x.N,x.z))},
$S:z+24}
C.fkv.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fkw.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fkx.prototype={
$1(d){return d.length!==0},
$S:3}
C.fkK.prototype={
$2(d,e){return d.eQ(new C.fkL(e))},
$S:1968}
C.fkL.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.ca},
$S:1969}
C.fkH.prototype={
$1(d){return C.hZL(d,this.a)},
$S:z+84}
C.fkI.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fkJ.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.foN.prototype={
$1(d){return d.a},
$S:z+56}
C.foO.prototype={
$1(d){return d.length!==0},
$S:3}
C.foP.prototype={
$2(d,e){return e.r.aK(0,d.r)},
$S:z+6}
C.frw.prototype={
$1(d){return d.ag()},
$S:z+5}
C.fwI.prototype={
$1(d){return C.hpj(d,C.GT(d,this.a))},
$S:z+5}
C.fwJ.prototype={
$1(d){return C.hpk(d,C.GT(d,this.a))},
$S:z+5};(function aliases(){var w=C.aAS.prototype
w.btW=w.q
w=C.az_.prototype
w.btR=w.q
w=C.aGj.prototype
w.buj=w.q
w=C.aAT.prototype
w.btX=w.q
w=C.aAV.prototype
w.btY=w.q
w=C.aAW.prototype
w.btZ=w.q
w=C.aMs.prototype
w.bwM=w.q
w=C.aOt.prototype
w.bz_=w.q
w=C.aOu.prototype
w.bz0=w.q})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aDR.prototype,"gckn","cko",28)
var r
w(r=C.aAR.prototype,"gcdk","cdl",65)
v(r,"gaNr","NI",0)
v(r,"gcsH","AW",0)
v(r,"gbMm","Om",0)
v(r,"gcGQ","yA",0)
v(r,"gcmq","a1_",0)
v(r,"gbHN","O5",0)
v(r,"gbMM","Xs",0)
w(r,"gbRJ","bRK",78)
v(r,"gbC9","zZ",0)
v(C.aAU.prototype,"gcGM","Fy",0)
v(r=C.alb.prototype,"gbql","bqm",2)
v(r,"gbqe","bqf",2)
v(r,"gcHT","cHU",2)
u(r,"gq5","kF",0)
u(r=C.ajo.prototype,"geX","h2",2)
w(r,"gc9i","c9j",27)
u(C.au4.prototype,"gq5","kF",0)
v(r=C.ay_.prototype,"gcTn","cTo",2)
u(r,"gq5","kF",0)
u(C.aK6.prototype,"gbqj","bqk",2)
v(C.alk.prototype,"gBp","cI3",2)
u(r=C.ali.prototype,"gcII","cIJ",2)
u(r,"gq5","kF",0)
v(r=C.ale.prototype,"gbpd","bpe",2)
v(r,"gcNT","cNU",2)
u(r=C.alg.prototype,"geX","h2",2)
u(r,"gkx","cHp",2)
v(r=C.alc.prototype,"gcHe","cHf",2)
u(r,"gbo7","jy",2)
v(r=C.aEp.prototype,"gagf","vV",0)
v(r,"gcg_","a09",0)
v(r,"gaRw","Ib",0)
v(r=C.aEm.prototype,"gcCU","a38",0)
v(r,"gagf","vV",0)
v(r,"gcqH","a1E",0)
v(r,"gcfV","b1d",2)
v(r,"gcgX","a0n",0)
w(r,"gcde","cdf",35)
v(r,"gbME","Ig",0)
v(r,"gcDV","cDW",2)
v(r,"gc3u","Z8",0)
w(r,"gcbJ","cbK",36)
v(r,"gcfJ","cfK",2)
v(r=C.aCQ.prototype,"gc9o","PZ",0)
v(r,"gc9q","c9r",2)
v(r,"gbJh","aa8",0)
v(r=C.aEo.prototype,"gbQa","XW",0)
v(r,"gc_I","YB",0)
v(r,"gcx8","a2w",0)
v(r,"gcth","a27",0)
v(C.aEn.prototype,"gct_","ahZ",0)
v(C.at8.prototype,"gcbH","a_L",0)
v(C.azA.prototype,"ga2S","Kp",2)
v(C.azz.prototype,"ga2S","Kp",2)
v(C.ayd.prototype,"ga2S","Kp",2)
v(r=C.aFQ.prototype,"gb2o","QW",0)
v(r,"gbAY","W8",0)
v(r,"gcgL","cgM",2)
w(C.aFP.prototype,"gccz","ccA",69)
t(C.aFR.prototype,"gaRq",0,0,null,["$1","$0"],["Ia","bKy"],70,0,0)
s(C,"hwJ","i8I",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aD,[C.aoU,C.uw,C.nl,C.I0,C.af5,C.Km,C.ux,C.bRD,C.rZ,C.bo7,C.alt,C.add,C.li,C.bQe,C.atk,C.zh,C.ak8,C.Mk,C.b9I,C.a9p,C.bgX,C.afc,C.azf,C.af0,C.aK6,C.Ku,C.Gb,C.bfR,C.aK2,C.aqa,C.de5,C.lL,C.aUj,C.aUi,C.aSh,C.u1,C.rc,C.lt,C.hU,C.kO,C.aI0])
u(A.hM,[C.fHq,C.fHp,C.fHr,C.fQV,C.fvu,C.fvv,C.fvA,C.fF9,C.fF8,C.fF7,C.c6l,C.fRr,C.fRj,C.fRv,C.fzN,C.dMi,C.dMd,C.dMe,C.dLR,C.dLN,C.dMx,C.dMy,C.dMr,C.dMs,C.dMz,C.dMA,C.fAq,C.fCH,C.fCI,C.fQ0,C.fYm,C.fzE,C.fQz,C.ddi,C.dcF,C.dcO,C.dd4,C.dcK,C.dcQ,C.dcH,C.dcU,C.dcV,C.dcT,C.dd9,C.dd8,C.df3,C.df4,C.df5,C.ddw,C.ddB,C.ddA,C.cLL,C.cLN,C.d4A,C.d4Z,C.d5_,C.d52,C.d54,C.d55,C.d56,C.d58,C.d59,C.bPZ,C.bPT,C.fou,C.fYf,C.fYg,C.fYh,C.fYc,C.fYi,C.fYj,C.fYk,C.fYb,C.fAY,C.fP1,C.fxp,C.fDC,C.bLe,C.fYE,C.fPy,C.bJt,C.bJo,C.bJq,C.bJp,C.cnk,C.cnf,C.cng,C.cne,C.cnc,C.cnh,C.cMP,C.cCm,C.cCp,C.cCn,C.cCq,C.cCr,C.f1h,C.fbl,C.bQL,C.bQF,C.bQJ,C.bQm,C.dYl,C.dYi,C.dYj,C.dYh,C.dYn,C.bQD,C.bQt,C.bQd,C.bQc,C.bQ8,C.bQ9,C.bQa,C.bQb,C.e_0,C.dZq,C.dZl,C.dYN,C.dZ2,C.dZ5,C.dZ1,C.dZ0,C.dZh,C.dZi,C.dZc,C.dYB,C.dZt,C.dZn,C.dYD,C.dYE,C.dYF,C.dYK,C.dYI,C.dYH,C.dYX,C.dYY,C.dYS,C.dZA,C.dZw,C.ddH,C.ddI,C.fAu,C.fAv,C.fAw,C.fAs,C.fAt,C.fAz,C.fAA,C.fAB,C.fAx,C.fAy,C.de0,C.ddR,C.ddM,C.ddW,C.ddX,C.de_,C.ddO,C.de2,C.de3,C.de4,C.fh8,C.eRn,C.dtP,C.dtZ,C.du_,C.du0,C.du3,C.du2,C.du4,C.du9,C.dua,C.cd_,C.ccZ,C.ccV,C.ccW,C.ccX,C.ccY,C.cd4,C.cd1,C.cd2,C.dZN,C.dZQ,C.dZP,C.dZW,C.dZX,C.dLC,C.fR1,C.fQo,C.fXU,C.fQt,C.fQs,C.d5n,C.d5o,C.d5j,C.cDF,C.cDH,C.cDI,C.cDA,C.cDJ,C.fgs,C.fOP,C.eOt,C.eOp,C.eOl,C.eOj,C.eOx,C.fXK,C.eOG,C.eOP,C.eOK,C.eOL,C.eOU,C.cCW,C.cCU,C.cCV,C.fzu,C.fYu,C.fxo,C.bR7,C.bR6,C.bR3,C.bR4,C.bR5,C.fjW,C.fjX,C.fQf,C.fQg,C.fQh,C.fQi,C.fQj,C.fYs,C.fzY,C.fCN,C.fCO,C.fCQ,C.fCR,C.fQ2,C.fYn,C.fYo,C.fYp,C.fzF,C.fzG,C.fYy,C.fz9,C.fza,C.fXV,C.fDD,C.fPW,C.fCK,C.fCL,C.fPR,C.fkt,C.fku,C.fkv,C.fkw,C.fkx,C.fkL,C.fkH,C.fkI,C.foN,C.foO,C.frw,C.fwI,C.fwJ])
u(A.ax,[C.aZP,C.al9,C.aVz,C.Z9,C.bbs,C.Qe,C.a5U,C.tn,C.I2,C.bfP,C.bjy,C.bxo,C.bmL,C.adz,C.bjx,C.ady,C.bjw,C.aCR,C.aJ4,C.adA,C.G7,C.bfQ,C.acQ,C.bfO,C.bfT,C.aZN,C.at8,C.adV])
u(A.mX,[C.bc5,C.bdj,C.bda,C.aHW,C.biC,C.bo6,C.aVE,C.bc6,C.aAQ,C.bbB,C.bs4,C.biK,C.bia,C.bii,C.bfS,C.beU,C.bkE,C.bxb])
u(A.jc,[C.fRo,C.fRp,C.fRq,C.fRh,C.fRi,C.fRt,C.fRu,C.dMu,C.dMg,C.dMj,C.dLY,C.dLZ,C.dM_,C.dLX,C.dM4,C.dLW,C.dM5,C.dM6,C.dLV,C.dM7,C.dLU,C.dM8,C.dLT,C.dM9,C.dLL,C.dLM,C.dLS,C.dMa,C.dLQ,C.dMb,C.dLP,C.dM0,C.dLO,C.dM1,C.dLK,C.dM2,C.dM3,C.dMv,C.dMw,C.dMk,C.dMl,C.dMm,C.dMn,C.dMo,C.dMp,C.dMq,C.dMC,C.dMt,C.fAr,C.dcD,C.dcB,C.dcC,C.dcE,C.ddh,C.dd6,C.dd3,C.dcG,C.dd7,C.dcM,C.dcN,C.dcP,C.dd5,C.dcL,C.dcR,C.dde,C.dd0,C.dd_,C.dd1,C.dd2,C.dcW,C.dcY,C.dcZ,C.dcS,C.dda,C.ddd,C.dcI,C.dcJ,C.df2,C.df1,C.df0,C.df_,C.df6,C.deZ,C.df7,C.ddx,C.ddy,C.ddz,C.ddC,C.ddv,C.ddu,C.cLM,C.d4z,C.d4M,C.d4L,C.d50,C.d4K,C.d51,C.d4J,C.d4I,C.d53,C.d4H,C.d4U,C.d4T,C.d5a,C.bPS,C.bQ1,C.bPU,C.bPV,C.bPY,C.bPX,C.bQ_,C.bQ0,C.bPW,C.bPQ,C.bPR,C.bRv,C.bRw,C.bRx,C.bRy,C.bRz,C.bRA,C.bRB,C.fYe,C.fP2,C.bJs,C.bJn,C.bJl,C.bJm,C.bJk,C.cnm,C.cnn,C.cnl,C.cno,C.cnq,C.cnr,C.cns,C.cni,C.cCl,C.cCu,C.cCv,C.cCw,C.cCt,C.cCx,C.cCy,C.cCz,C.cCA,C.cCo,C.cCs,C.bR0,C.bR_,C.bQY,C.bQW,C.bQX,C.bQT,C.bQU,C.bQV,C.bQZ,C.bQS,C.f1i,C.f1j,C.f1k,C.f1l,C.f1m,C.bQP,C.bQQ,C.bQR,C.bQK,C.bQM,C.bQN,C.bQO,C.bQG,C.bQq,C.bQp,C.bQo,C.bQi,C.bQj,C.bQn,C.bQk,C.bQl,C.bQh,C.dYk,C.dYm,C.dYf,C.dYg,C.dYe,C.dYo,C.dYp,C.dYq,C.dYt,C.dYu,C.dYv,C.dYw,C.dYx,C.dYy,C.dYz,C.dYA,C.dYr,C.dYs,C.bQC,C.bQB,C.bQs,C.bQr,C.bQy,C.bQz,C.bQv,C.bQw,C.bQx,C.bQu,C.bQ2,C.bQ3,C.bQ7,C.bQ6,C.bQ5,C.bQ4,C.e__,C.dZZ,C.e_1,C.e_2,C.e_3,C.dZY,C.e_5,C.e_4,C.dZo,C.dZp,C.dZr,C.dYO,C.dZ4,C.dZ3,C.dZ6,C.dZk,C.dZ_,C.dZa,C.dZb,C.dZ9,C.dZ7,C.dZ8,C.dZd,C.dZe,C.dZf,C.dZj,C.dYC,C.dZm,C.dYG,C.dYJ,C.dYL,C.dZs,C.dYR,C.dYP,C.dYT,C.dYU,C.dYQ,C.dYV,C.dYZ,C.dZB,C.dZC,C.dZu,C.dZx,C.dZy,C.dZz,C.dZE,C.dZv,C.dYM,C.ddG,C.ddF,C.ddK,C.ddU,C.ddL,C.eRm,C.dtQ,C.dtN,C.dtO,C.dtY,C.dtX,C.dtW,C.du5,C.dtV,C.du6,C.dtU,C.du7,C.dtT,C.du8,C.dtS,C.dtR,C.du1,C.dub,C.duk,C.dZO,C.dZS,C.dZT,C.dZK,C.dZL,C.dZM,C.dZR,C.dZV,C.dZU,C.dZF,C.dZG,C.dZH,C.dZI,C.dZJ,C.dLD,C.fQZ,C.clz,C.d5m,C.d5l,C.d5p,C.d5i,C.d5k,C.cDx,C.cDD,C.cDE,C.cDC,C.cDG,C.cDB,C.cDy,C.cDz,C.cDK,C.fgt,C.fgu,C.eOv,C.eOm,C.eOn,C.eOo,C.eOq,C.eOr,C.eOu,C.eOh,C.eOk,C.eOw,C.eOi,C.eOz,C.eOA,C.eOB,C.eOC,C.eOy,C.eOc,C.eOd,C.eOe,C.eOg,C.eOf,C.eOV,C.eOW,C.eOE,C.eOF,C.eOM,C.eON,C.eOO,C.eOI,C.eOJ,C.eP1,C.eP0,C.eP2,C.eP_,C.eOD,C.eOH,C.eOY,C.eOX,C.eOS,C.eOT,C.eOR,C.eOQ])
u(A.ag,[C.ap5,C.Ti,C.ZS,C.ZW,C.ZU,C.Zs,C.ala,C.ajn,C.au3,C.axZ,C.alj,C.alh,C.ald,C.VF,C.alf,C.Tj,C.aqd,C.aq7,C.a_w,C.aqb,C.a_R,C.a_S,C.a6J,C.Zu,C.Zt,C.Z0,C.a1E,C.FX,C.ay6,C.at7,C.at1,C.at6,C.Ox])
u(A.ah,[C.aDR,C.bfJ,C.aAR,C.bg6,C.aAU,C.bdh,C.aAS,C.az_,C.aGj,C.ay_,C.aAW,C.aAV,C.aAT,C.bkX,C.alg,C.alc,C.aEp,C.aEm,C.aCQ,C.aEo,C.aEn,C.bkY,C.aMs,C.azA,C.azz,C.ayd,C.bxe,C.aOt,C.aOu,C.aFQ,C.bmg,C.aFP,C.byV])
u(A.ke,[C.dMf,C.dMh,C.dMc,C.dMB,C.fCJ,C.bPP,C.ddg,C.ddf,C.dcX,C.ddb,C.ddc,C.ddD,C.bRC,C.bRu,C.bQf,C.bQg,C.fYd,C.fYD,C.bJr,C.cnp,C.cnj,C.cnd,C.f1n,C.bQE,C.bQH,C.bQI,C.doa,C.bQA,C.dZg,C.dYW,C.dZD,C.ddT,C.ddS,C.ddQ,C.ddV,C.ddY,C.ddZ,C.ddJ,C.ddN,C.ddP,C.de1,C.ccT,C.cd0,C.cd5,C.dLE,C.fR0,C.fR_,C.fgq,C.fgr,C.eOs,C.eOZ,C.cCX,C.fo5,C.fjY,C.fCP,C.fzb,C.fCM,C.fkK,C.fkJ,C.foP])
u(A.lZ,[C.a19,C.afe,C.a1s,C.a_j,C.abV,C.aKP,C.I1,C.all,C.cCY,C.cCZ])
t(C.alb,C.aAS)
t(C.ajo,C.az_)
t(C.au4,C.aGj)
t(C.bfN,C.aAW)
t(C.alk,C.bfN)
t(C.bfM,C.aAV)
t(C.ali,C.bfM)
t(C.bfL,C.aAT)
t(C.ale,C.bfL)
t(C.bkF,C.aMs)
t(C.bxc,C.aOt)
t(C.bxd,C.aOu)
t(C.aFR,C.byV)
t(C.b9V,A.b9J)
t(C.bxf,A.a6o)
t(C.b9U,C.bxf)
w(C.aAS,A.cq)
w(C.az_,A.cq)
w(C.aGj,A.eP)
w(C.aAT,A.cq)
v(C.bfL,C.af0)
w(C.aAV,A.cq)
v(C.bfM,C.af0)
w(C.aAW,A.cq)
v(C.bfN,C.af0)
w(C.aMs,A.eP)
w(C.aOt,A.cq)
w(C.aOu,A.cq)
v(C.byV,A.eE)
v(C.bxf,A.j6)})()
A.jl(b.typeUniverse,JSON.parse('{"aZP":{"ax":[],"v":[]},"bc5":{"aC":[]},"ap5":{"ag":[],"v":[]},"aDR":{"ah":["ap5"]},"Ti":{"ag":[],"v":[]},"al9":{"ax":[],"v":[]},"aVz":{"ax":[],"v":[]},"bfJ":{"ah":["Ti"]},"ZS":{"ag":[],"v":[]},"ZW":{"ag":[],"v":[]},"ZU":{"ag":[],"v":[]},"Zs":{"ag":[],"v":[]},"aAR":{"ah":["ZS"]},"bg6":{"ah":["ZW"]},"aAU":{"ah":["ZU"]},"Z9":{"ax":[],"v":[]},"bdj":{"aC":[]},"bda":{"aC":[]},"bdh":{"ah":["Zs"]},"aHW":{"aC":[]},"biC":{"aC":[]},"bbs":{"ax":[],"v":[]},"ala":{"ag":[],"v":[]},"alb":{"ah":["ala"]},"bo6":{"aC":[]},"aVE":{"aC":[]},"ajn":{"ag":[],"v":[]},"au3":{"ag":[],"v":[]},"axZ":{"ag":[],"v":[]},"ajo":{"ah":["ajn"]},"bc6":{"aC":[]},"Qe":{"ax":[],"v":[]},"aAQ":{"aC":[]},"au4":{"ah":["au3"]},"bbB":{"aC":[]},"ay_":{"ah":["axZ"]},"alj":{"ag":[],"v":[]},"alh":{"ag":[],"v":[]},"ald":{"ag":[],"v":[]},"alk":{"ah":["alj"]},"bs4":{"aC":[]},"ali":{"ah":["alh"]},"biK":{"aC":[]},"ale":{"ah":["ald"]},"bia":{"aC":[]},"VF":{"ag":[],"v":[]},"alf":{"ag":[],"v":[]},"Tj":{"ag":[],"v":[]},"a5U":{"ax":[],"v":[]},"bii":{"aC":[]},"tn":{"ax":[],"v":[]},"I2":{"ax":[],"v":[]},"bkX":{"ah":["VF"]},"alg":{"ah":["alf"]},"alc":{"ah":["Tj"]},"aqd":{"ag":[],"v":[]},"aq7":{"ag":[],"v":[]},"a_w":{"ag":[],"v":[]},"adA":{"ax":[],"v":[]},"aEp":{"ah":["aqd"]},"aEm":{"ah":["aq7"]},"bfP":{"ax":[],"v":[]},"bfS":{"aC":[]},"bjy":{"ax":[],"v":[]},"beU":{"aC":[]},"bxo":{"ax":[],"v":[]},"bmL":{"ax":[],"v":[]},"aCQ":{"ah":["a_w"]},"adz":{"ax":[],"v":[]},"bjx":{"ax":[],"v":[]},"ady":{"ax":[],"v":[]},"bjw":{"ax":[],"v":[]},"aCR":{"ax":[],"v":[]},"aJ4":{"ax":[],"v":[]},"G7":{"ax":[],"v":[]},"aqb":{"ag":[],"v":[]},"a_R":{"ag":[],"v":[]},"a_S":{"ag":[],"v":[]},"aEo":{"ah":["aqb"]},"bfQ":{"ax":[],"v":[]},"acQ":{"ax":[],"v":[]},"bfO":{"ax":[],"v":[]},"bfT":{"ax":[],"v":[]},"aEn":{"ah":["a_R"]},"bkY":{"ah":["a_S"]},"aZN":{"ax":[],"v":[]},"a6J":{"ag":[],"v":[]},"bkF":{"ah":["a6J"]},"bkE":{"aC":[]},"at8":{"ax":[],"v":[]},"Zu":{"ag":[],"v":[]},"Zt":{"ag":[],"v":[]},"Z0":{"ag":[],"v":[]},"a1E":{"ag":[],"v":[]},"azA":{"ah":["Zu"]},"azz":{"ah":["Zt"]},"ayd":{"ah":["Z0"]},"bxe":{"ah":["a1E"]},"FX":{"ag":[],"v":[]},"ay6":{"ag":[],"v":[]},"bxc":{"ah":["FX"]},"bxd":{"ah":["ay6"]},"bxb":{"aC":[]},"at7":{"ag":[],"v":[]},"aFQ":{"ah":["at7"]},"adV":{"ax":[],"v":[]},"at1":{"ag":[],"v":[]},"at6":{"ag":[],"v":[]},"bmg":{"ah":["at1"]},"aFP":{"ah":["at6"]},"Ox":{"ag":[],"v":[]},"aFR":{"ah":["Ox"],"eE":[]},"b9U":{"j6":[],"fh":[]}}'))
A.CY(b.typeUniverse,JSON.parse('{"af0":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.aw
return{e2:w("aSh"),cq:w("m7"),Q:w("rc"),r:w("bw<n,n>"),c5:w("aUi"),dY:w("aUj"),fH:w("Mk"),de:w("ak8"),dN:w("Mr<H>"),gc:w("DZ<H>"),A:w("ev<n?>"),e:w("I0"),B:w("nl"),P:w("hU"),df:w("li"),k:w("kO"),x:w("aA<~>"),U:w("O<a3A>"),V:w("O<ac>"),C:w("O<rc>"),O:w("O<u>"),c:w("O<Mk>"),b:w("O<ak8>"),ac:w("O<ev<n?>>"),I:w("O<nl>"),u:w("O<hU>"),J:w("O<li>"),_:w("O<kO>"),cl:w("O<aA<ai<a8<n,@>>>>"),R:w("O<nn>"),eU:w("O<ai<+(K,K)>>"),ez:w("O<a8<n,aD>>"),gE:w("O<a8<n,n>>"),Y:w("O<a8<n,@>>"),fD:w("O<mD>"),bp:w("O<os>"),g:w("O<t>"),ar:w("O<atk>"),v:w("O<h9>"),gy:w("O<a9p>"),L:w("O<+(n,n)>"),G:w("O<+(K,K)>"),E:w("O<+(K,~())>"),bd:w("O<+(n,H,R)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cX>"),s:w("O<n>"),cF:w("O<as>"),aS:w("O<iV>"),dT:w("O<b9I>"),p:w("O<v>"),Z:w("O<fh>"),D:w("O<lt>"),h:w("O<azf>"),cC:w("O<bgX>"),fp:w("O<Km>"),M:w("O<Ku>"),gZ:w("O<aI0>"),gA:w("O<af5>"),e4:w("O<afc>"),dE:w("O<aK2>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cB<ah<ag>>"),d:w("ai<nl>"),do:w("ai<hU>"),cg:w("ai<li>"),ax:w("ai<kO>"),fO:w("ai<a8<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<as>"),gk:w("ai<lt>"),j:w("ai<@>"),fK:w("bA<n,n>"),d2:w("bA<n,ai<a8<n,@>>>"),a:w("a8<n,@>"),f:w("a8<@,@>"),gv:w("N<n,I3>"),cM:w("N<H,n>"),w:w("iF"),g2:w("rw"),bV:w("aoU"),fL:w("cu"),K:w("aD"),dc:w("h9"),fo:w("OU<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(R,H)"),d9:w("+dx,hidden(K,ai<hU>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("jy<hU>"),ec:w("jy<n>"),gW:w("qT<K>"),X:w("bp<K>"),bW:w("dK"),W:w("bG<n>"),b4:w("bG<H>"),cI:w("jS<n>"),av:w("Z<zh>"),cc:w("Z<n>"),l:w("v"),gF:w("fh"),fA:w("lt"),dO:w("Gb"),bw:w("ady<n?>"),cy:w("Kw"),q:w("n8"),y:w("R"),i:w("K"),z:w("@"),S:w("H"),eK:w("ai<kO>?"),m:w("aqa?"),cT:w("t?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,R)?"),az:w("q8?"),T:w("n?"),aD:w("dK?"),o:w("lt?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1h=new A.bg(B.fE,B.bI,B.fE,B.bI)
D.acy=new A.bg(B.fE,B.ip,B.fE,B.ip)
D.b1u=new A.bg(B.i9,B.bI,B.bI,B.bI)
D.b1y=new A.ay(B.cO,1.4,B.r,-1)
D.b1I=new A.ay(B.ae,1,B.r,-1)
D.ad2=new A.aZ(140,1/0,0,1/0)
D.b36=new A.aZ(0,1/0,64,1/0)
D.b3a=new A.aZ(0,84,0,1/0)
D.ad9=new A.aZ(130,1/0,0,1/0)
D.aAI=w([B.m1,B.rg,B.c],x.O)
D.c3f=new A.a9(B.ay,B.aE,B.x,D.aAI,null,null)
D.b3V=new A.o(null,null,null,null,null,D.c3f,B.n)
D.d9S=w([B.aW,B.bP],x.O)
D.c5m=new A.a9(B.b4,B.b7,B.x,D.d9S,null,null)
D.b4f=new A.o(null,null,null,null,null,D.c5m,B.n)
D.Xo=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fq=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.ddJ=w([B.du,D.Xo,D.fq],x.O)
D.c2r=new A.a9(B.b4,B.b7,B.x,D.ddJ,null,null)
D.b5_=new A.o(null,null,null,null,null,D.c2r,B.n)
D.fiy=new A.F(!0,B.bY,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTG=new A.y("?",null,D.fiy,null,null,null,null,null,null,null,null,null)
D.b8F=new A.ca(B.A,null,null,D.fTG,null)
D.V4=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBK=new A.y("\ud83c\udf33",null,D.V4,null,null,null,null,null,null,null,null,null)
D.adU=new A.ca(B.A,null,null,D.fBK,null)
D.fEn=new A.y("\ud83c\udfc6",null,Ao.K0,null,null,null,null,null,null,null,null,null)
D.b8Q=new A.ca(B.A,null,null,D.fEn,null)
D.baL=new A.fj(null,null,null,null,null,E.kb,null,null,null,null)
D.adW=new A.ca(B.A,null,null,D.baL,null)
D.kz=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fj5=new A.F(!0,D.kz,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDr=new A.y("No books on the shelf yet.",null,D.fj5,null,null,null,null,null,null,null,null,null)
D.els=new A.D(B.mI,D.fDr,null)
D.b94=new A.ca(B.A,null,null,D.els,null)
D.fq1=new A.F(!0,D.fq,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUC=new A.y("\ud83d\ude8c  On the road\u2026",null,D.fq1,null,null,null,null,null,null,null,null,null)
D.em4=new A.D(B.cj,D.fUC,null)
D.b9z=new A.ca(B.A,null,null,D.em4,null)
D.aUg=new A.y("\ud83e\uddfa",null,D.V4,null,null,null,null,null,null,null,null,null)
D.b9P=new A.ca(B.A,null,null,D.aUg,null)
D.fGT=new A.y("\ud83c\udfad",null,D.V4,null,null,null,null,null,null,null,null,null)
D.ba2=new A.ca(B.A,null,null,D.fGT,null)
D.ba5=new A.ca(B.A,null,null,A8.Xe,null)
D.aeg=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.aem=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bci=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bcn=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bcy=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bcA=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bcC=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bcJ=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lv=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bcM=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bcR=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bcS=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bcT=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lw=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bds=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.B3=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bdB=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bdV=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bdY=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.be3=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.beb=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.aeX=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.beh=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Xz=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.af_=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.beu=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.XB=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.beQ=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.afa=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bfc=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bfs=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bfQ=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bfZ=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.Fb=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bgj=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bgl=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bgp=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.afy=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bgK=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bgP=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bgV=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.afB=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bh2=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bhv=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bhD=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bhF=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bhK=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.afR=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bim=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.agd=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bjg=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.agq=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bjE=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.Fq=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bjK=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bjU=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bjW=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.agu=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bkd=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bke=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bkh=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.agB=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Yg=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bkA=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bkV=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bl_=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.agO=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bl5=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Yl=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bln=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.blo=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.Fx=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bm9=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bmM=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bmS=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bmW=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.q_=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bn5=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bn9=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bne=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bng=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aht=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.ahx=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.FC=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.YE=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ahF=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.bon=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.boG=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bp4=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bpd=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ai2=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.YO=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bpl=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bpB=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.YR=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bpP=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bq5=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.YV=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.bqa=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.aik=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.aim=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bqs=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.air=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bqV=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bqX=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.br2=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.br8=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.brg=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.brR=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bsk=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fxB=new A.y("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bvQ=new A.ev(null,D.fxB,B.eY,null,x.A)
D.fGK=new A.y("None",null,null,null,null,null,null,null,null,null,null,null)
D.bvS=new A.ev(null,D.fGK,B.eY,null,x.A)
D.ajl=new A.ba(3e4)
D.bwp=new A.ba(38e5)
D.bx9=new A.ii(0,10,0,10)
D.bxi=new A.Q(0,1,0,0)
D.bxs=new A.ii(0,4,0,4)
D.bxv=new A.Q(0,4,5,0)
D.bxL=new A.Q(10,10,14,10)
D.bxX=new A.ii(10,4,10,4)
D.by4=new A.ii(10,8,10,8)
D.by5=new A.Q(10,8,8,8)
D.byx=new A.Q(12,6,12,2)
D.byN=new A.Q(14,0,14,6)
D.byS=new A.Q(14,10,6,6)
D.byT=new A.Q(14,12,14,0)
D.byX=new A.Q(14,12,14,8)
D.bz_=new A.Q(14,12,8,14)
D.bz3=new A.ii(14,14,14,14)
D.bzj=new A.Q(14,6,14,40)
D.bzm=new A.Q(14,8,14,30)
D.bzJ=new A.Q(16,2,16,10)
D.bzT=new A.Q(16,6,16,30)
D.bzV=new A.Q(16,6,16,8)
D.bA8=new A.Q(18,10,18,4)
D.bAa=new A.Q(18,12,18,0)
D.bAh=new A.Q(18,14,12,4)
D.akR=new A.Q(18,16,18,8)
D.bAy=new A.Q(18,20,18,22)
D.akV=new A.Q(18,24,18,24)
D.bAE=new A.Q(18,30,18,30)
D.bAW=new A.Q(20,10,12,20)
D.bAZ=new A.Q(20,11,20,11)
D.bB9=new A.Q(20,18,16,18)
D.bBb=new A.Q(20,18,20,6)
D.bC0=new A.Q(24,32,24,28)
D.bC1=new A.Q(24,36,24,32)
D.bC5=new A.Q(26,26,24,14)
D.bCk=new A.Q(2,4,2,8)
D.bCo=new A.Q(30,0,30,0)
D.bCz=new A.Q(38,22,22,22)
D.ale=new A.Q(40,24,24,24)
D.bCB=new A.ii(40,40,40,40)
D.bCD=new A.Q(46,30,30,30)
D.alh=new A.Q(4,0,0,8)
D.bD3=new A.Q(56,40,40,40)
D.bD7=new A.Q(1.25,1.25,1.25,1.25)
D.bD8=new A.Q(60,0,60,0)
D.bDb=new A.Q(6,14,6,16)
D.bDf=new A.Q(6,4,12,0)
D.bDj=new A.Q(6,6,10,2)
D.bDq=new A.ii(7,3,7,3)
D.bDZ=new A.Q(5,1.5,5,1.5)
D.bE9=new A.Q(6,2.5,6,2.5)
D.fOO=new A.y("Family Games",null,B.k5,null,null,null,null,null,null,null,null,null)
D.fwb=new A.y("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,F.a9X,null,null,null,null,null,null,null,null,null)
D.cEe=w([D.fOO,D.fwb],x.p)
D.btn=new A.fi(B.ag,B.e,B.i,B.E,null,B.p,null,0,D.cEe,null)
D.bEr=new A.bz(1,B.bb,D.btn,null)
D.fTb=new A.y("Signature",null,B.n0,null,null,null,null,null,null,null,null,null)
D.bEv=new A.bz(1,B.bb,D.fTb,null)
D.fLo=new A.y("MADE BY THE ONE WHO PLANTED THE TREE",null,T.t9,null,null,null,null,null,null,null,null,null)
D.bF3=new A.bz(1,B.bb,D.fLo,null)
D.fQh=new A.y("Tell the AI what to fix",null,B.de,null,null,null,null,null,null,null,null,null)
D.bFk=new A.bz(1,B.bb,D.fQh,null)
D.fqP=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSf=new A.y("Worksheets",null,D.fqP,null,null,null,null,null,null,null,null,null)
D.fr_=new A.F(!0,E.aeI,null,null,null,null,13,B.cy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR6=new A.y("Track your project spending",null,D.fr_,null,null,null,null,null,null,null,null,null)
D.d1s=w([D.fSf,B.au,D.fR6],x.p)
D.bt_=new A.fi(B.ag,B.e,B.i,B.E,null,B.p,null,0,D.d1s,null)
D.bFq=new A.bz(1,B.bb,D.bt_,null)
D.flP=new A.F(!0,E.kb,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwK=new A.y("FAMILY LIBRARY",null,D.flP,null,null,null,null,null,null,null,null,null)
D.bFI=new A.bz(1,B.bb,D.fwK,null)
D.NQ=new C.I0("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.w3=new C.I1(0,"male")
D.og=new C.I1(1,"female")
D.yv=new C.I1(2,"unknown")
D.ub=new C.all(0,"owner")
D.NR=new C.all(1,"editor")
D.kH=new C.all(2,"viewer")
D.amX=new A.a0(61199,"MaterialIcons",!1)
D.bKE=new A.a0(61504,"MaterialIcons",!1)
D.bKF=new A.a0(61505,"MaterialIcons",!1)
D.bKH=new A.a0(61587,"MaterialIcons",!1)
D.bKO=new A.a0(61890,"MaterialIcons",!1)
D.bLG=new A.a0(63034,"MaterialIcons",!0)
D.bLY=new A.a0(63153,"MaterialIcons",!1)
D.bMw=new A.a0(63429,"MaterialIcons",!1)
D.ap4=new A.a0(984520,"MaterialIcons",!1)
D.bLc=new A.a0(62776,"MaterialIcons",!1)
D.bOO=new A.ae(D.bLc,26,B.b_,null,null,null)
D.bJC=new A.a0(57648,"MaterialIcons",!1)
D.bP8=new A.ae(D.bJC,14,B.c,null,null,null)
D.bPp=new A.ae(B.GF,17,null,null,null,null)
D.bPv=new A.ae(B.a1j,null,B.bP,null,null,null)
D.bPY=new A.ae(E.a1o,null,null,null,null,null)
D.bQ0=new A.ae(B.iW,18,E.kb,null,null,null)
D.a18=new A.a0(62044,"MaterialIcons",!1)
D.bQ5=new A.ae(D.a18,null,B.aW,null,null,null)
D.bQc=new A.ae(B.yI,18,B.c,null,null,null)
D.bQV=new A.ae(B.e5,16,null,null,null,null)
D.bR1=new A.ae(D.a18,32,B.aW,null,null,null)
D.bRk=new A.ae(E.amY,18,B.cO,null,null,null)
D.bSo=new A.ae(B.GR,22,B.aw,null,null,null)
D.bSB=new A.ae(B.e5,22,B.b_,null,null,null)
D.bSN=new A.ae(Y.a1d,22,B.c,null,null,null)
D.bST=new A.ae(B.um,52,B.c,null,null,null)
D.bT2=new A.ae(B.GR,30,B.aw,null,null,null)
D.bTl=new A.ae(B.a1u,null,B.c,null,null,null)
D.apK=new A.ae(B.uw,22,B.c,null,null,null)
D.bTu=new A.ae(B.e5,17,null,null,null,null)
D.bTR=new A.ae(B.us,26,B.cO,null,null,null)
D.bUD=new A.ae(B.a1B,16,null,null,null,null)
D.bVp=new A.ae(B.um,24,B.c,null,null,null)
D.bVu=new A.ae(B.Oj,20,B.rM,null,null,null)
D.bVz=new A.ae(B.GD,null,B.bP,null,null,null)
D.bVH=new A.ae(B.iW,18,B.c,null,null,null)
D.bWl=new A.ae(B.cz,22,B.ae,null,null,null)
D.bXb=new A.ae(B.ea,16,B.ae,null,null,null)
D.bXn=new A.ae(D.a18,20,B.aW,null,null,null)
D.aq9=new A.ae(B.hw,20,null,null,null,null)
D.bXS=new A.ae(B.cz,18,D.kz,null,null,null)
D.bY7=new A.ae(B.yS,28,B.c,null,null,null)
D.bYi=new A.ae(B.O9,null,B.f9,null,null,null)
D.bYD=new A.ae(B.yS,24,B.c,null,null,null)
D.bZ3=new A.ae(B.um,null,B.aW,null,null,null)
D.bZ4=new A.ae(B.jS,20,B.cO,null,null,null)
D.bZo=new A.ae(B.GF,16,null,null,null,null)
D.c_X=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eG,!0,null,null,null,null)
D.aqS=new C.a5U(10,null)
D.c0s=new C.a5U(12,null)
D.c0t=new C.a5U(14,null)
D.dhE=w([B.bt,B.aW,B.fg,B.b_],x.O)
D.c1E=new A.a9(B.ay,B.aE,B.x,D.dhE,null,null)
D.blW=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.brX=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.cZ2=w([D.blW,D.brX],x.O)
D.c1P=new A.a9(B.b4,B.b7,B.x,D.cZ2,null,null)
D.dbP=w([B.f7,B.fM,B.fg],x.O)
D.c1U=new A.a9(B.ay,B.aE,B.x,D.dbP,null,null)
D.ahi=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bcU=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d0b=w([D.ahi,D.bcU],x.O)
D.c2s=new A.a9(B.b4,B.b7,B.x,D.d0b,null,null)
D.bgz=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aA0=w([D.bgz,D.ahi],x.O)
D.c2M=new A.a9(B.ay,B.aE,B.x,D.aA0,null,null)
D.ag8=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bj7=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.daV=w([D.ag8,D.bj7],x.O)
D.c3q=new A.a9(B.a5,B.a8,B.x,D.daV,null,null)
D.dov=w([B.bx,B.ne],x.O)
D.c3s=new A.a9(B.b4,B.b7,B.x,D.dov,null,null)
D.blR=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.dpr=w([D.blR,D.kz,D.kz,K.YD],x.O)
D.drV=w([0,0.07,0.9,1],x.n)
D.c3Y=new A.a9(B.a5,B.a8,B.x,D.dpr,D.drV,null)
D.c47=new A.a9(B.ay,B.aE,B.x,B.RN,null,null)
D.cWV=w([B.aD,D.lv],x.O)
D.c4a=new A.a9(B.a5,B.a8,B.x,D.cWV,null,null)
D.do4=w([B.b_,B.aW,B.bP],x.O)
D.c57=new A.a9(B.ay,B.aE,B.x,D.do4,null,null)
D.c9l=w([10,20,30],x.t)
D.cjg=w([-1,-0.4,0.3,1],x.n)
D.cqL=w([B.bt,B.b_,B.f7],x.O)
D.cqT=w([B.bw,B.aD,B.jt],x.O)
D.cqV=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.crB=w([30,140,262,360],x.n)
D.bkn=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cx8=w([D.bkn,E.agY],x.O)
D.eg3=new A.t(1,2)
D.f3T=new A.cX(B.aS,D.eg3,3)
D.awW=w([D.f3T],x.F)
D.cEv=w([B.hc,B.cg,B.fc],x.O)
D.cHe=w([B.bM,B.br,B.bo],x.O)
D.bGg=new C.uw("classic","Classic leather","Gold-edged brown leather",D.aA0,E.kb,E.kb,"\u2766",B.K,!0,!1,!1,!1)
D.bc2=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.bqL=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d39=w([D.bc2,D.bqL],x.O)
D.ah1=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bGb=new C.uw("ornate","Ornate gold","Double gold border and flourishes",D.d39,D.ah1,D.ah1,"\u2726",B.K,!0,!0,!0,!1)
D.bg7=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bmH=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cVO=w([D.bg7,D.bmH],x.O)
D.bGa=new C.uw("parchment","Parchment","Old paper with dark ink",D.cVO,D.Fx,I.iP,"\u2767",B.K,!0,!1,!1,!0)
D.aeo=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bp0=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dmk=w([D.aeo,D.bp0],x.O)
D.bjR=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.boi=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bGd=new C.uw("minimal","Clean paper","Plain and elegant, like a printed book",D.dmk,D.bjR,D.boi,"",B.K,!0,!0,!1,!0)
D.bGf=new C.uw("midnight","Midnight","Deep blue with silver stars",F.aAi,B.cs,B.bN,"\u2727",B.K,!0,!0,!1,!1)
D.bG9=new C.uw("emerald","Emerald library","Green cloth, title on the left",V.axj,E.kb,B.fO,"\u25c6",B.bi,!0,!1,!1,!1)
D.bpt=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dkq=w([B.ek,D.bpt],x.O)
D.bl4=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bmg=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bGe=new C.uw("rose","Rose vintage","Burgundy with rose-gold lettering",D.dkq,D.bl4,D.bmg,"\u2740",B.K,!0,!1,!0,!1)
D.dp2=w([B.cq,G.nf],x.O)
D.bGc=new C.uw("modern","Modern","Dark, bold, left-aligned",D.dp2,B.aQ,B.c,"",B.bi,!1,!0,!1,!1)
D.a3I=w([D.bGg,D.bGb,D.bGa,D.bGd,D.bGf,D.bG9,D.bGe,D.bGc],A.aw("O<uw>"))
D.cKb=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.doQ=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bGr=new C.li('What does "Ubuntu" mean?',D.doQ,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.cXz=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bGu=new C.li("In Swahili, what do we call a grandmother?",D.cXz,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.cXp=w(["Babu","Mama","Baba","Dada"],x.s)
D.bGp=new C.li("In Swahili, what do we call a grandfather?",D.cXp,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.cYE=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bGt=new C.li("What is a sister called in Swahili?",D.cYE,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d2A=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bGq=new C.li("What is a brother called in Swahili?",D.d2A,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.cXo=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bGB=new C.li("Which word means father in Swahili?",D.cXo,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dpX=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bGA=new C.li('"Umoja ni nguvu" means...',D.dpX,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dn2=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bGC=new C.li('"Haba na haba hujaza kibaba" teaches us...',D.dn2,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d0j=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bGz=new C.li('The African saying "It takes a village to raise a child" means...',D.d0j,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dqg=w(["The elders","The market","The river","The drum"],x.s)
D.bGv=new C.li("Who is the traditional keeper of the family stories?",D.dqg,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cOl=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bGs=new C.li("Why do families sit round the fire at night?",D.cOl,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dp4=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bGx=new C.li('What does "Harambee" mean?',D.dp4,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d5j=w(["An elder","A baby","A market","A cow"],x.s)
D.bGw=new C.li('"Mzee" is a respectful word for...',D.d5j,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dkh=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bGy=new C.li('What does "Shikamoo" show?',D.dkh,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.axf=w([D.bGr,D.bGu,D.bGp,D.bGt,D.bGq,D.bGB,D.bGA,D.bGC,D.bGz,D.bGv,D.bGs,D.bGx,D.bGw,D.bGy],x.J)
D.cSF=w([90,360],x.n)
D.cVl=w([B.bP,B.bk],x.O)
D.blG=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cW_=w([D.aeo,D.blG],x.O)
D.cWE=w([-1,-0.3,0.4,1],x.n)
D.cXu=w([0,0.45,0.72,0.92,1],x.n)
D.bg3=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.cXN=w([D.bg3,B.df],x.O)
D.bdQ=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.aiB=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.cYl=w([B.du,D.bdQ,D.aiB],x.O)
D.cZi=w([B.b9,B.j8,B.oW],x.O)
D.bgB=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.bo9=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bdw=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.cZn=w([D.bgB,D.bo9,D.bdw],x.O)
D.cZG=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.cZQ=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hjB=new C.add(78,424,48,44,56)
D.hjz=new C.add(214,396,34,34,42)
D.hjA=new C.add(442,452,56,50,64)
D.ayd=w([D.hjB,D.hjz,D.hjA],A.aw("O<add>"))
D.d_o=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bcO=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bil=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.drR=w([D.ag8,D.bcO,D.bil],x.O)
D.bGh=new C.ux("leather","Leather",D.drR,"vintage")
D.d6k=w([B.d7,B.M5,Q.XP],x.O)
D.bGo=new C.ux("midnight","Midnight",D.d6k,"starry")
D.cZj=w([B.ed,B.e_,B.l4],x.O)
D.bGn=new C.ux("forest","Forest",D.cZj,"story")
D.dtS=w([B.e7,B.ek,B.jM],x.O)
D.bGk=new C.ux("burgundy","Burgundy",D.dtS,"royal")
D.cGN=w([B.aD,B.nb,B.nT],x.O)
D.bGl=new C.ux("royal","Royal",D.cGN,"royal")
D.d0P=w([B.br,B.cq,G.nf],x.O)
D.bGi=new C.ux("charcoal","Charcoal",D.d0P,"geo")
D.ds_=w([B.ce,B.dG,B.xP],x.O)
D.bGm=new C.ux("sunset","Sunset",D.ds_,"sunset")
D.dsG=w([B.j8,B.Fy,B.XS],x.O)
D.bGj=new C.ux("ocean","Ocean",D.dsG,"band")
D.zi=w([D.bGh,D.bGo,D.bGn,D.bGk,D.bGl,D.bGi,D.bGm,D.bGj],A.aw("O<ux>"))
D.d1j=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d1T=w([B.al,B.aJ,B.M],x.O)
D.d3e=w([B.ek,B.e_,B.d7,B.fV,B.xS,B.cO,B.ke,B.e8,B.d1],x.O)
D.d3f=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.f3U=new A.cX(B.dm,B.dB,8)
D.d3p=w([D.f3U],x.F)
D.d4t=w([B.c2,B.dG,B.ka],x.O)
D.beJ=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.biD=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bmC=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d4I=w([D.beJ,F.ahq,D.biD,D.bmC,D.aiB],x.O)
D.d4Y=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d59=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bcd=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bi_=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d5B=w([D.bcd,D.afB,D.bi_],x.O)
D.d6f=w([B.c2,B.hp],x.O)
D.d6l=w([F.n7,B.hX,F.aez,B.cJ],x.O)
D.d7U=w([B.cJ,F.n7,B.hX,D.lw,B.cJ],x.O)
D.d8t=w([B.aU,B.vJ,B.xE],x.O)
D.aze=w(["True","False"],x.s)
D.eDd=new A.z(-0.65,0.6)
D.ePD=new A.z(-0.2,0.95)
D.eQI=new A.z(0.25,0.95)
D.eGF=new A.z(0.7,0.6)
D.eRg=new A.z(1,0.1)
D.d9e=w([An.TC,D.eDd,D.ePD,D.eQI,D.eGF,D.eRg],x.G)
D.bkB=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bqD=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bfH=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.d9k=w([D.bkB,D.bqD,D.bfH],x.O)
D.d9o=w([B.bL,B.ct,B.dt,B.aU],x.O)
D.d9T=w([B.ih,B.ce,B.tE],x.O)
D.daf=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.daq=w([B.f7,B.cO],x.O)
D.bm_=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.daQ=w([D.bm_,D.aem],x.O)
D.db0=w([B.cS,B.fr,B.hJ],x.O)
D.dbb=w([B.aQ,B.bk,B.d7],x.O)
D.dbM=w([B.et,B.cV,B.e_],x.O)
D.dc6=w([B.dF,B.d7,B.M5],x.O)
D.dca=w([B.bG,B.mv,B.d1],x.O)
D.dcr=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.blf=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bjA=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dcK=w([D.blf,D.afy,D.bjA],x.O)
D.ddu=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.dew=w([1,0,7,6,3,2],x.t)
D.a4D=w(["leather","linen","plain","stars","rays"],x.s)
D.deI=w([0.5,2,3.6],x.n)
D.dfd=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bOv=new A.a0(985219,"MaterialIcons",!1)
D.bO2=new A.a0(983781,"MaterialIcons",!1)
D.azG=w([B.a1j,B.i0,B.m9,B.il,D.bOv,B.H1,B.qj,D.bO2,F.aoS,B.Cn,B.ql,B.mM],A.aw("O<a0>"))
D.a4I=w(["double","single","corners","none"],x.s)
D.bG6=new C.zh("Little Seed","\ud83c\udf31",0)
D.bG8=new C.zh("Young Listener","\ud83d\udc42",40)
D.bG7=new C.zh("Storyteller","\ud83e\ude98",120)
D.bG5=new C.zh("Village Pride","\ud83c\udfe1",300)
D.bG3=new C.zh("Keeper of Roots","\ud83c\udf33",700)
D.bG4=new C.zh("Elder of the Fire","\ud83d\udd25",1500)
D.azI=w([D.bG6,D.bG8,D.bG7,D.bG5,D.bG3,D.bG4],A.aw("O<zh>"))
D.dgj=w([B.dv,B.bn,B.e8],x.O)
D.dgx=w([],x.C)
D.CZ=w([],x.u)
D.aJE=new A.t(225,528)
D.eET=new A.z(D.aJE,1)
D.egP=new A.t(350,548)
D.eL2=new A.z(D.egP,0.95)
D.aJz=new A.t(158,656)
D.eKX=new A.z(D.aJz,1.12)
D.ehB=new A.t(92,544)
D.eAs=new A.z(D.ehB,0.93)
D.egS=new A.t(398,614)
D.eH1=new A.z(D.egS,1.04)
D.egG=new A.t(318,662)
D.evW=new A.z(D.egG,1.1)
D.a4Q=w([D.eET,D.eL2,D.eKX,D.eAs,D.eH1,D.evW],A.aw("O<+(t,K)>"))
D.div=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.diW=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.djZ=w([B.cJ,F.n7,B.hX,D.lw,B.cJ,B.hX],x.O)
D.dln=w([B.aC,B.fr,B.fV],x.O)
D.dlF=w([-12,12],x.n)
D.dlI=w([-17,17],x.n)
D.dlZ=w([-70,58],x.n)
D.dm0=w([-70,-30,20],x.n)
D.dn0=w([B.bG,B.mv,B.YP],x.O)
D.dng=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dGK=new C.lL("construction","Construction","Jobsite & builds",B.yL)
D.dGR=new C.lL("house","Home Build","Houses & rooms",B.wf)
D.dGH=new C.lL("grocery","Grocery","Store & pantry",B.a2b)
D.dGG=new C.lL("calculator","Calculations","Math & estimates",B.GL)
D.dGP=new C.lL("lumber","Materials","Lumber & supplies",B.OG)
D.dGD=new C.lL("kitchen","Kitchen","Remodel & meals",A2.ao6)
D.bO0=new A.a0(983756,"MaterialIcons",!1)
D.dGI=new C.lL("landscape","Landscaping","Yard & garden",D.bO0)
D.dGC=new C.lL("plumbing","Plumbing","Pipes & water",B.qt)
D.dGS=new C.lL("electrical","Electrical","Wiring & power",B.hv)
D.dGA=new C.lL("store","Retail Shop","Daily business",B.le)
D.dGB=new C.lL("paint_remodel","Paint & Remodel","Colors & walls",Ae.a1H)
D.bNs=new A.a0(983311,"MaterialIcons",!1)
D.dGO=new C.lL("roofing","Roofing","Roofs & exteriors",D.bNs)
D.bOc=new A.a0(983986,"MaterialIcons",!1)
D.dGz=new C.lL("warehouse","Warehouse","Storage & stock",D.bOc)
D.dGM=new C.lL("vehicles","Vehicles","Fleet & transport",B.H2)
D.bLe=new A.a0(62785,"MaterialIcons",!1)
D.dGF=new C.lL("farm","Farm","Crops & livestock",D.bLe)
D.dGE=new C.lL("restaurant","Restaurant","Food & catering",B.wn)
D.dGL=new C.lL("tools","Tools","Workshop gear",B.GY)
D.dGQ=new C.lL("wallet","Cash & Wallet","Quick spending",B.jS)
D.bMq=new A.a0(63395,"MaterialIcons",!1)
D.dGN=new C.lL("concrete","Concrete","Foundation work",D.bMq)
D.dGJ=new C.lL("blueprint","Blueprint","Plans & design",Ak.anq)
D.a5c=w([D.dGK,D.dGR,D.dGH,D.dGG,D.dGP,D.dGD,D.dGI,D.dGC,D.dGS,D.dGA,D.dGB,D.dGO,D.dGz,D.dGM,D.dGF,D.dGE,D.dGL,D.dGQ,D.dGN,D.dGJ],A.aw("O<lL>"))
D.dnL=w([B.bs,B.bn],x.O)
D.dow=w([B.is,B.o_,B.dO],x.O)
D.agk=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.ahe=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bjV=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.bbL=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aAP=w([D.agk,D.ahe,D.bjV,D.bbL],x.O)
D.dpH=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a5m=w(["top","middle","bottom"],x.s)
D.dr6=w([B.cp,B.bk,B.d7],x.O)
D.aB3=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b5s=new A.ac(0,B.G,B.aS,B.I,14)
D.aB6=w([D.b5s],x.V)
D.biR=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.drK=w([D.aeX,D.YO,D.biR],x.O)
D.drL=w([B.bj,B.cV,B.e_],x.O)
D.ego=new A.t(24,-8)
D.eh7=new A.t(48,0)
D.egk=new A.t(24,6)
D.dtp=w([B.I,D.ego,D.eh7,D.egk],x.g)
D.dtO=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.edb={top:0,middle:1,bottom:2}
D.dx1=new A.bw(D.edb,["Top","Middle","Bottom"],x.r)
D.ecQ={double:0,single:1,corners:2,none:3}
D.dx7=new A.bw(D.ecQ,["Double line","One line","Corners","None"],x.r)
D.edU={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dyA=new A.bw(D.edU,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dyN=new A.bw(B.hP,[],A.aw("bw<H,+(n,n)>"))
D.ed4={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.Da=new A.bw(D.ed4,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.aw("bw<n,H>"))
D.dBj=new H.No(32,null)
D.dBk=new H.No(40,null)
D.dBl=new H.No(46,null)
D.aJ7=new C.at6(null)
D.efk=new A.t(0,40)
D.efl=new A.t(0,412)
D.efn=new A.t(0,900)
D.efy=new A.t(0,-74)
D.efB=new A.t(100,300)
D.efC=new A.t(10,14)
D.efF=new A.t(10,-10)
D.efJ=new A.t(10,-46)
D.efK=new A.t(10,-58)
D.efL=new A.t(116,442)
D.efM=new A.t(11,-1)
D.efN=new A.t(11,-10)
D.efO=new A.t(11,-21)
D.aJu=new A.t(11,-60)
D.efU=new A.t(14,-2)
D.efV=new A.t(150,520)
D.a7i=new A.t(150,592)
D.efY=new A.t(15,-15)
D.efZ=new A.t(16,-1)
D.eg2=new A.t(190,444)
D.eg5=new A.t(1,5)
D.egd=new A.t(21,-78)
D.ege=new A.t(222,615)
D.J1=new A.t(225,300)
D.a7k=new A.t(225,574)
D.egn=new A.t(24,-52)
D.egp=new A.t(250,210)
D.aJI=new A.t(300,0)
D.egC=new A.t(300,440)
D.egF=new A.t(318,476)
D.egI=new A.t(324,144)
D.a7n=new A.t(332,150)
D.egK=new A.t(335,585)
D.egL=new A.t(338,140)
D.egM=new A.t(340,158)
D.egO=new A.t(34,-60)
D.DD=new A.t(36,-24)
D.egQ=new A.t(372,470)
D.egR=new A.t(390,455)
D.eh_=new A.t(42,468)
D.eh0=new A.t(431,510)
D.eh1=new A.t(431,520)
D.eh2=new A.t(45,-92)
D.eh3=new A.t(46,20)
D.eh4=new A.t(46,-92)
D.eh5=new A.t(46,-94)
D.eh6=new A.t(47,-4)
D.eh8=new A.t(48,-4)
D.ehg=new A.t(4,-26)
D.ehp=new A.t(60,455)
D.ehw=new A.t(8,14)
D.ehA=new A.t(8,-76)
D.ehC=new A.t(95,575)
D.ehD=new A.t(98,-24)
D.ehF=new A.t(9,-2)
D.ehG=new A.t(9,-58)
D.aJR=new A.t(9,-79)
D.ehH=new A.t(9,-9)
D.eik=new A.t(16.5,8)
D.eim=new A.t(3.2,0)
D.eio=new A.t(-16.5,8)
D.eiv=new A.t(16.5,2)
D.eiy=new A.t(-3.2,0)
D.eiH=new A.t(9.5,6)
D.eiL=new A.t(-10,14)
D.eiM=new A.t(-10,-12)
D.eiN=new A.t(-10,-58)
D.eiO=new A.t(-11,-1)
D.eiP=new A.t(-11,-10)
D.eiR=new A.t(-11,-60)
D.eiS=new A.t(-12,-14)
D.eiT=new A.t(-12,-16)
D.ej_=new A.t(-14,-2)
D.ej2=new A.t(-15,-15)
D.ej3=new A.t(-15,-3)
D.ej5=new A.t(-16,-1)
D.ejm=new A.t(-24,-52)
D.ejt=new A.t(-2,-34)
D.eju=new A.t(-2,-38)
D.ejw=new A.t(-30,-100)
D.a7o=new A.t(-36,-24)
D.ejH=new A.t(-4,-26)
D.ejJ=new A.t(-4,-6)
D.ejS=new A.t(-8,-3)
D.ejT=new A.t(-8,-48)
D.ejW=new A.t(-9,-2)
D.ejY=new A.t(-9,-58)
D.ejZ=new A.t(-9,-79)
D.ek_=new A.t(-9,-9)
D.ek1=new A.t(-9.5,6)
D.ekf=new A.t(-16.5,2)
D.fE3=new A.y("Write a new book",null,B.hE,null,B.K,null,null,null,null,null,null,null)
D.ekQ=new A.D(B.kG,D.fE3,null)
D.fSJ=new A.y("Tap to go on",null,B.vf,null,null,null,null,null,null,null,null,null)
D.ela=new A.D(B.l6,D.fSJ,null)
D.api=new A.ae(B.hM,18,B.c,null,null,null)
D.fx6=new A.y("Add",null,B.lp,null,null,null,null,null,null,null,null,null)
D.d9C=w([D.api,B.qJ,D.fx6],x.p)
D.f1x=new A.ce(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d9C,null)
D.eld=new A.D(B.nq,D.f1x,null)
D.ele=new A.D(E.ajI,A8.Xe,null)
D.fqK=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAj=new A.y("New Project",null,D.fqK,null,null,null,null,null,null,null,null,null)
D.ddR=w([D.api,B.ac,D.fAj],x.p)
D.f1A=new A.ce(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.ddR,null)
D.elr=new A.D(B.iB,D.f1A,null)
D.fCR=new A.y("Choose your header",null,A0.t7,null,null,null,null,null,null,null,null,null)
D.elP=new A.D(B.hL,D.fCR,null)
D.bb_=new A.fj(2.2,null,null,null,null,B.cO,null,null,null,null)
D.f6K=new A.a6(22,22,D.bb_,null)
D.b90=new A.ca(B.A,null,null,D.f6K,null)
D.elU=new A.D(B.a_1,D.b90,null)
D.bzd=new A.Q(14,2,14,6)
D.fQQ=new A.y("The top of your book. Tap a design to see it.",null,O.vg,null,null,null,null,null,null,null,null,null)
D.elV=new A.D(D.bzd,D.fQQ,null)
D.fC_=new A.y("\ud83c\udfc6 A new record!",null,B.fT,null,null,null,null,null,null,null,null,null)
D.elW=new A.D(B.l6,D.fC_,null)
D.enw=new A.iT(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.enz=new A.iT(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aKr=new A.iT(1,0.9607843137254902,0.48627450980392156,0)
D.Ja=new A.iT(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.zT=new A.iT(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.enF=new A.iT(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hlq=new C.biC(null)
D.bu9=new A.mu(D.hlq,null,B.ax,null,null)
D.aO4=new A.cN(0,0,0,0,null,null,D.bu9,null)
D.fx8=new A.y("\ud83c\udfc5",null,B.a9z,null,null,null,null,null,null,null,null,null)
D.es7=new A.cN(null,0,-34,null,null,null,D.fx8,null)
D.eA7=new A.z("E","Sit by the fire again")
D.eFG=new A.z("C","Good Learner")
D.eJ2=new A.z("D","Still Growing")
D.eNv=new A.z(-42,42)
D.eOQ=new A.z("B","Faithful Listener")
D.eQK=new A.z("A","Keeper of the Family")
D.eTG=new A.bk(-17,0.7,0)
D.eU7=new A.bk(-8,0.95,1.3)
D.eUY=new A.bk(18,0.65,5.2)
D.eV_=new A.bk(0,1.15,2.6)
D.eVg=new A.bk(9,0.9,3.9)
D.eWM=new A.cw([0,0,1,1])
D.aPv=new A.a3(0,0,520,160)
D.eZC=new A.a3(10,612,440,618)
D.eZD=new A.a3(10,612,440,628)
D.eZG=new A.a3(14,-64,34,-12)
D.eZJ=new A.a3(300,336,350,348)
D.a8h=new A.a3(30,96,420,346)
D.eZK=new A.a3(30,-9,46,1)
D.eZL=new A.a3(4,2,11,14)
D.eZN=new A.a3(-8,-12.5,8,-7)
D.eZO=new A.a3(-16.5,-21,16.5,1)
D.eZP=new A.a3(60,342,88,348)
D.TD=new A.a3(66,-66,94,-36)
D.eZQ=new A.a3(6,8,10,14)
D.eZT=new A.a3(95,343,115,348)
D.eZU=new A.a3(-6.5,-74,6.5,-58)
D.f__=new A.a3(-100,-74,100,-12)
D.f_0=new A.a3(-10,8,-6,14)
D.f_1=new A.a3(-11,2,-4,14)
D.f_2=new A.a3(-11,-70,11,-56)
D.f_9=new A.a3(-13,-24,13,-4)
D.f_f=new A.a3(-15,-21,15,0)
D.f_i=new A.a3(-16,-21,16,1)
D.f_j=new A.a3(-16,-21,16,2)
D.f_m=new A.a3(-16,-26,16,-6)
D.f_w=new A.a3(-230,-26,230,26)
D.f_U=new A.a3(-38,-26,12,-6)
D.f_Y=new A.a3(-3,-70,3,-63)
D.f_Z=new A.a3(-44,-22,44,0)
D.f00=new A.a3(-46,-9,-30,1)
D.aPz=new A.a3(-80,-190,80,20)
D.f07=new A.a3(-8,-26,40,-6)
D.f08=new A.a3(-98,-80,92,-75)
D.f09=new A.a3(-9,-15,9,-9)
D.fQo=new A.y("Let the AI write it from your tree",null,B.iK,null,B.K,null,null,null,null,null,null,null)
D.bH8=new A.ds(1,B.cn,D.fQo,null)
D.d6e=w([E.a2F,B.ac,D.bH8],x.p)
D.f1c=new A.ce(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.d6e,null)
D.fwL=new A.y("Save member",null,B.cf,null,null,null,null,null,null,null,null,null)
D.dlK=w([D.aq9,B.ac,D.fwL],x.p)
D.f1m=new A.ce(B.aM,B.b8,B.i,B.m,null,B.p,null,0,D.dlK,null)
D.bSG=new A.ae(B.i1,14,B.b_,null,null,null)
D.fkp=new A.F(!0,B.b_,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAJ=new A.y("Cashier",null,D.fkp,null,null,null,null,null,null,null,null,null)
D.den=w([D.bSG,B.bm,D.fAJ],x.p)
D.f1p=new A.ce(B.aM,B.e,B.P,B.m,null,B.p,null,0,D.den,null)
D.fwM=new A.y("Transfer & settings",null,B.de,null,null,null,null,null,null,null,null,null)
D.bFa=new A.bz(1,B.bb,D.fwM,null)
D.cYN=w([D.apK,B.at,D.bFa],x.p)
D.f1q=new A.ce(B.aM,B.e,B.i,B.m,null,B.p,null,0,D.cYN,null)
D.f5r=new A.av(16,40)
D.f5w=new A.av(22,64)
D.f5D=new A.av(280,88)
D.f6q=new A.a6(30,null,null,null)
D.fvS=new A.y("The teacher is writing\u2026",null,B.Ab,null,null,null,null,null,null,null,null,null)
D.bac=new A.ca(B.A,null,null,D.fvS,null)
D.hfH=new A.bG("w",x.W)
D.f6Q=new A.a6(null,56,D.bac,D.hfH)
D.f7C=new A.hR(5,8,8,1,null)
D.f7K=new A.hR(2,12,12,1.05,null)
D.fAp=new A.y("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.f8s=new A.b2(D.fAp,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fAE=new A.y("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aRB=new A.b2(D.fAE,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fJ4=new A.y("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f8W=new A.b2(D.fJ4,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fTO=new A.y("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.f90=new A.b2(D.fTO,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fCP=new A.y("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.f97=new A.b2(D.fCP,null,null,null,null,null,null,null,null,null,null,null,null,B.fY,!1,null,null,null,B.t,null)
D.fR2=new A.y("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aRF=new A.b2(D.fR2,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fCN=new A.y("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.f9x=new A.b2(D.fCN,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fxp=new A.y("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.f9z=new A.b2(D.fxp,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fGy=new A.y("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.f9F=new A.b2(D.fGy,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fUz=new A.y("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fak=new A.b2(D.fUz,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fPh=new A.y("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.faJ=new A.b2(D.fPh,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fTS=new A.y("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.faM=new A.b2(D.fTS,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fKH=new A.y("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.faO=new A.b2(D.fKH,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fEH=new A.y("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.faP=new A.b2(D.fEH,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fEI=new A.y("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fbP=new A.b2(D.fEI,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fAr=new A.y("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fc6=new A.b2(D.fAr,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fCr=new A.y("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fcq=new A.b2(D.fCr,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fK9=new A.y("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fcG=new A.b2(D.fK9,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fFw=new A.y("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fcH=new A.b2(D.fFw,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,!1,null,null,null,B.t,null)
D.fpp=new A.F(!0,B.bB,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fer=new A.eu("\u2665",null,null,B.cQ,null,null,null,null,null,null,D.fpp)
D.fmE=new A.F(!0,B.aP,null,null,null,null,28,B.Q,B.cE,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feH=new A.eu("Today: how well do you know the family?",null,null,B.cQ,null,null,null,null,null,null,D.fmE)
D.feX=new A.F(!0,B.pM,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg1=new A.F(!0,D.kz,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgr=new A.F(!0,D.kz,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgv=new A.F(!0,B.cJ,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgE=new A.F(!0,D.fq,null,null,null,null,15,B.Q,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgP=new A.F(!0,D.fq,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh8=new A.rR(!0,B.rW,null,null,null,null,B.dy,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fho=new A.F(!0,B.cJ,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhr=new A.F(!0,D.kz,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhs=new A.F(!0,B.cJ,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhx=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhB=new A.F(!0,B.cJ,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi5=new A.F(!0,B.b_,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi6=new A.F(!0,B.ae,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi8=new A.F(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiB=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSN=new A.F(!0,B.aR,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSP=new A.F(!0,D.lv,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiZ=new A.F(!0,B.cJ,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.a9F=new A.rR(!0,B.T8,null,null,null,null,B.dy,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.UI=new A.F(!0,B.cJ,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj9=new A.F(!0,B.M,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjd=new A.F(!0,D.fq,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjC=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkK=new A.F(!0,D.fq,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aT1=new A.F(!0,D.fq,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl2=new A.F(!0,B.ae,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fld=new A.F(!0,D.fq,null,null,null,null,null,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flf=new A.F(!0,null,null,null,null,null,8,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flk=new A.F(!0,I.iP,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aT5=new A.F(!0,D.fq,null,null,null,null,14.5,B.Q,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmf=new A.F(!0,D.fq,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmy=new A.F(!0,D.fq,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmA=new A.F(!0,B.M,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmB=new A.F(!0,B.cJ,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmZ=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.HY,null,null,null)
D.aTk=new A.F(!0,D.fq,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnm=new A.F(!0,B.M,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnI=new A.F(!0,B.f9,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo4=new A.F(!0,B.bP,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo8=new A.F(!0,B.bx,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fok=new A.F(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fon=new A.F(!0,D.fq,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fow=new A.F(!0,D.Fx,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foF=new A.F(!0,B.b_,null,null,null,null,13,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp4=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpa=new A.F(!0,B.ae,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CR,null,null,null)
D.fpA=new A.F(!0,B.cJ,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpJ=new A.F(!0,B.cO,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpW=new A.F(!0,D.lw,null,null,null,null,13,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTE=new A.F(!0,D.fq,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Ka=new A.F(!0,B.cJ,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTG=new A.F(!0,B.cJ,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CR,null,null,null)
D.fqf=new A.F(!0,B.bP,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqj=new A.F(!0,F.n7,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqI=new A.F(!0,B.b_,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqZ=new A.F(!0,D.fq,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frk=new A.F(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frH=new A.F(!0,D.fq,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs9=new A.F(!0,D.fq,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsf=new A.F(!0,B.al,null,null,null,null,11.5,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fso=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTX=new A.F(!0,B.c,null,null,null,null,17,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aa7=new A.F(!0,B.al,null,null,null,null,12,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aa9=new A.F(!0,D.lv,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu6=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fup=new A.F(!0,B.aP,null,null,null,null,27,B.Q,B.cE,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fux=new A.F(!0,I.iP,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuF=new A.F(!0,I.iP,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv8=new A.y("Time:",null,B.hm,null,null,null,null,null,null,null,null,null)
D.fvu=new A.y("\ud83c\udfae",null,F.aa_,null,null,null,null,null,null,null,null,null)
D.fvv=new A.y("Themes",null,B.pw,null,null,null,null,null,null,null,null,null)
D.fw_=new A.y("\ud83c\udfb2",null,B.wY,null,null,null,null,null,null,null,null,null)
D.fw3=new A.y("Delete this game?",null,B.iK,null,null,null,null,null,null,null,null,null)
D.fwa=new A.y("Add Item",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fkY=new A.F(!0,B.M,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new A.y("Debt receipt",null,D.fkY,null,B.K,null,null,null,null,null,null,null)
D.aTT=new A.F(!0,B.al,null,null,null,null,11,B.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwT=new A.y("Person who owes",null,D.aTT,null,null,null,null,null,null,null,null,null)
D.fxT=new A.y("Notes",null,B.a9O,null,null,null,null,null,null,null,null,null)
D.fyj=new A.y("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fjT=new A.F(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fym=new A.y("Share",null,D.fjT,null,null,null,null,null,null,null,null,null)
D.fzm=new A.y("Move your family trees",null,D.aTX,null,null,null,null,null,null,null,null,null)
D.fA0=new A.y("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fAD=new A.y("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fB0=new A.y("SAVE",null,D.Ka,null,null,null,null,null,null,null,null,null)
D.fBD=new A.y("The round button is the right answer.",null,O.E7,null,null,null,null,null,null,null,null,null)
D.fBY=new A.y("Remove this book?",null,B.fT,null,null,null,null,null,null,null,null,null)
D.fqF=new A.F(!0,B.cJ,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.CR,null,null,null)
D.fCw=new A.y("Fireside Stories",null,D.fqF,null,null,null,null,null,null,null,null,null)
D.aUp=new A.y("Download",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fDc=new A.y("What should the AI do?",null,B.de,null,null,null,null,null,null,null,null,null)
D.fjx=new A.F(!0,D.lv,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDs=new A.y("REPORT CARD",null,D.fjx,null,null,null,null,null,null,null,null,null)
D.fE9=new A.y("Calabash Catch",null,B.Ke,null,null,null,null,null,null,null,null,null)
D.fED=new A.y("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fF3=new A.y("\ud83c\udfe1",null,B.E6,null,null,null,null,null,null,null,null,null)
D.fFL=new A.y("Ribbon bookmark",null,B.j2,null,null,null,null,null,null,null,null,null)
D.fs8=new A.F(!0,B.b_,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGf=new A.y("NGMY.ORG",null,D.fs8,null,B.K,null,null,null,null,null,null,null)
D.fHA=new A.y("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.foo=new A.F(!0,B.c,null,null,null,null,13,B.a7,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIk=new A.y("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.foo,null,B.K,null,null,null,null,null,null,null)
D.fJx=new A.y("Delete",null,B.UA,null,null,null,null,null,null,null,null,null)
D.fJy=new A.y("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fJE=new A.y("Thumbnail",null,B.pw,null,null,null,null,null,null,null,null,null)
D.fKf=new A.y("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fKk=new A.y("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.x_,null,B.K,null,null,null,null,null,null,null)
D.fKI=new A.y("Your photos",null,B.pw,null,null,null,null,null,null,null,null,null)
D.fKX=new A.y("Create Project",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fLj=new A.y("\u2b50 stars",null,B.UP,null,null,null,null,null,null,null,null,null)
D.fLx=new A.y("Design your cover",null,A0.t7,null,null,null,null,null,null,null,null,null)
D.fLD=new A.y("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fLG=new A.y("PICTURE",null,L.vk,null,null,null,null,null,null,null,null,null)
D.fLI=new A.y("\ud83c\udfaf",null,D.V4,null,null,null,null,null,null,null,null,null)
D.fM2=new A.y("Paid",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fM4=new A.y("You can undo it right after.",null,O.E7,null,null,null,null,null,null,null,null,null)
D.fMC=new A.y("Print",null,B.vh,null,null,null,null,null,null,null,null,null)
D.fN0=new A.y("Amount owed",null,D.aTT,null,null,null,null,null,null,null,null,null)
D.fNg=new A.y("Got it",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fNS=new A.y("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fNV=new A.y("Add to budget",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fOm=new A.y("Debtor signature",null,B.a9O,null,null,null,null,null,null,null,null,null)
D.fOv=new A.y("Change icon",null,B.a9N,null,null,null,null,null,null,null,null,null)
D.fPj=new A.y("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.t9,null,null,null,null,null,null,null,null,null)
D.fPL=new A.y("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fPR=new A.y("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.V3,null,null,null,null,null,null,null,null,null)
D.fQe=new A.y("Download",null,B.vh,null,null,null,null,null,null,null,null,null)
D.fQf=new A.y("The person who planted this tree has not made a game yet.",null,B.vl,null,null,null,null,null,null,null,null,null)
D.fQj=new A.y("Change",null,B.pw,null,null,null,null,null,null,null,null,null)
D.fR8=new A.y("Clear all",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fRb=new A.y("WHAT SHOULD IT CHANGE?",null,L.vk,null,null,null,null,null,null,null,null,null)
D.fRL=new A.y("COLOUR",null,L.vk,null,null,null,null,null,null,null,null,null)
D.fRZ=new A.y("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fS1=new A.y("Create Tree",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fSa=new A.y("Give me another clue",null,D.Ka,null,null,null,null,null,null,null,null,null)
D.fT5=new A.y("Create Family Tree",null,B.eF,null,null,null,null,null,null,null,null,null)
D.fTf=new A.y("THE TEACHER EXPLAINS THESE",null,T.t9,null,null,null,null,null,null,null,null,null)
D.feW=new A.F(!0,E.kb,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTl=new A.y("Write the first page myself",null,D.feW,null,null,null,null,null,null,null,null,null)
D.fTV=new A.y("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fU1=new A.y("Create Project",null,E.aTB,null,null,null,null,null,null,null,null,null)
D.hgV=new C.abV(1,"header")
D.ab7=new C.abV(2,"projects")
D.hgW=new C.abV(3,"cashier")
D.ab8=new C.abV(4,"familyTree")
D.htP=new C.cCY(0,"start")
D.htQ=new C.cCZ(0,"start")
D.hhj=new C.Z0(null)
D.hij=new C.Zt(null)
D.dyK=new A.bw(B.hP,[],A.aw("bw<n,Gb>"))
D.dgV=w([],x.dE)
D.dgW=w([],x.M)
D.hiQ=new C.bfR(D.dyK,D.dgV,D.dgW,0,0,null,null)
D.aYl=new C.a_j(0,"intro")
D.aYm=new C.a_j(1,"countdown")
D.abm=new C.a_j(2,"ask")
D.VY=new C.a_j(3,"reveal")
D.aYn=new C.a_j(4,"end")
D.hls=new C.rZ(G.FF,D.lw,B.cJ,G.lx,5,!1,!1,!1,0,null)
D.hlt=new C.rZ(G.FF,B.e7,B.cJ,B.bO,2,!0,!0,!1,2,B.cJ)
D.hlu=new C.rZ(B.o9,B.cO,B.cJ,G.lx,2,!0,!1,!1,2,B.aC)
D.hlv=new C.rZ(G.FF,B.dF,B.cJ,G.lx,5,!1,!1,!1,1,null)
D.hlw=new C.rZ(G.Z0,D.ahe,B.cJ,G.lx,4,!0,!1,!0,0,null)
D.aYq=new C.rZ(G.Z0,B.dG,B.cJ,G.lx,3,!0,!1,!0,2,null)
D.aYr=new C.rZ(G.mC,D.lw,B.c,G.lx,0,!1,!1,!0,0,null)
D.aYs=new C.rZ(B.o9,B.aD,B.cJ,B.bO,2,!0,!0,!1,2,B.dG)
D.aYt=new C.rZ(B.o9,F.n7,B.hX,G.lx,5,!1,!1,!0,3,null)
D.hlx=new C.rZ(B.o9,B.dG,B.cJ,G.lx,0,!0,!1,!1,0,B.aD)
D.aYu=new C.rZ(G.FF,B.e7,B.cJ,B.bO,1,!1,!0,!1,1,null)
D.aYv=new C.rZ(G.Fd,B.aC,B.aD,G.lx,4,!0,!1,!0,2,null)
D.hly=new C.rZ(G.mC,B.aC,B.e7,G.lx,3,!0,!1,!1,0,null)
D.hlz=new C.rZ(B.o9,B.dF,B.cJ,B.bO,1,!1,!0,!1,1,null)
D.hlA=new C.rZ(G.Fd,D.agk,B.c,G.lx,5,!1,!1,!0,0,null)
D.hmd=new C.a_S(null)
D.htY=new C.afe(0,"still")
D.Wk=new C.afe(1,"walk")
D.abG=new C.afe(2,"pound")
D.abH=new C.afe(3,"drum")
D.hpq=new C.a19(0,"greet")
D.aYV=new C.a19(1,"teach")
D.abI=new C.a19(2,"ask")
D.hpr=new C.a19(3,"feedback")
D.aYW=new C.a19(4,"end")
D.Wp=new C.a1s(0,"intro")
D.Wq=new C.a1s(1,"asking")
D.AA=new C.a1s(2,"reacting")
D.abS=new C.a1s(3,"driving")
D.abT=new C.a1s(4,"arrived")
D.abW=new C.aKP(0,"projects")
D.aZj=new C.aKP(1,"cashier")
D.hrt=new C.aKP(2,"familyTree")})()};
(a=>{a["hDCoGRqoo4XtYN9vu23xSYWu9wk="]=a.current})($__dart_deferred_initializers__);