((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,P,A_,S,A8,L,H,E,T,A9,Q,Aa,Ab,Ac,A0,Ad,Ae,R,Af,A1,Ag,Ah,Ai,M,A2,Aj,A3,A4,A5,Ak,Al,A6,Am,G,An,Ao,Ap,A7,Aq,U,O,Ar,V,As,At,W,X,F,Au,I,K,Y,C={
bFD(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bFD=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vT(null,""),$async$bFD)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nm(b1)
s=A.c_(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dt(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cS(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.J)(h),++d){a0=h[d]
f.push(A.I(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Y.az(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rg(t,a1,B.i0,"book",E.GB),$async$bFD)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Rs(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.LS(l)?y.k:y.y)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a3(r.a(j.h(a2,a7)),q,p):B.cB
g=a8.h(0,"title")
a9=B.a.i(A.w(g==null?"":g))
g=a8.h(0,"body")
b0=B.a.i(A.w(g==null?"":g))
g=a9.length===0?h[a7].a:a9
f=b0.length===0?h[a7].b:b0
s[k+a7]=new A.y(g,f)}case 5:k=i
w=4
break
case 6:r=A.a([],x.L)
for(a7=0;a7<b3.length;++a7){q=s[a7]
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3A(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFD,v)},
ai2(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ai2=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vT(null,""),$async$ai2)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nm(b6)
s=x.S
r=A.cW(c1,0,A.dA(4,"count",s),A.U(c1).c)
q=H.a3n(new A.N(r,new C.fO8(),r.$ti.k("N<ak.E,n>")).aO(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fO7(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Y.az(b7,null)+"\nAllowed values: style one of "+B.d.aO(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ai2)
case 6:l=c5
k=H.Rs(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apC(s,D.dE9,r.b(k.h(0,"cover"))?A.a3(r.a(k.h(0,"cover")),x.N,x.z):null)
w=1
break
case 5:r=c2==="page"
p=x.t
if(r){p=A.a([],p)
if(c0>=0&&c0<c1.length)p.push(c0)
j=p}else{p=A.a([],p)
for(i=0;i<c1.length;++i)p.push(i)
j=p}if(j.length===0)throw A.W("There is no page to change.")
h=A.T(s,x.fz)
s=x.j,p=x.N,g=x.K,f='You edit a family book. The person asked: """'+b8+'"""\nRules: change ONLY what they asked for and keep everything else word for word. Keep every person\'s name, date and fact exactly (a name may be written with normal capitals, not ALL CAPITALS). Keep the paragraph breaks (a blank line between paragraphs). If they ask to correct or replace a word, change it everywhere it appears in these pages, including in the titles. If they ask to rewrite, shorten, add to or improve a page, do it properly with good, natural writing.\n'+n+"\nPages: ",e=x.ez,d=x.f,a0="",a1=0
case 7:if(!(a2=j.length,a1<a2)){w=9
break}a3=a1+5
a4=B.d.dt(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.J)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.I(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Y.az(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ai2)
case 10:l=c5
k=l==null?null:H.Rs(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dd(a8,d),a5=J.aU(a2.a),a2=a2.$ti,a7=new A.lj(a5,a2.k("lj<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a7(a9)
b1=A.aJ(b0.h(a9,"index"))
i=b1==null?null:B.j.M(b1)
if(i==null||!B.d.q(a4,i))continue
b1=b0.h(a9,"title")
b2=B.a.i(A.w(b1==null?"":b1))
a9=b0.h(a9,"body")
b3=B.a.i(A.w(a9==null?"":a9))
a9=b2.length===0
if(a9&&b3.length===0)continue
a9=a9?c1[i].a:b2
h.n(0,i,new A.y(a9,b3.length===0?c1[i].b:b3))}case 8:a1=a3
w=7
break
case 9:if(h.a!==0){s=h.$ti.k("b7<2>")
p=A.cF(new A.b7(h,s),new C.fO9(),s.k("M.E"),p)
p=H.a3n(A.pH(p,3,A.a4(p).k("M.E")).aO(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3A(s,b9),$async$ai2)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apC(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ai2,v)},
hF1(d,e,f){return A.cf(null,B.w.j(0.65),!1,null,new C.fXI(e,f),d,null,!0,!0,x.g2)},
apC:function apC(d,e,f){this.a=d
this.b=e
this.c=f},
fO8:function fO8(){},
fO7:function fO7(d){this.a=d},
fO9:function fO9(){},
fXI:function fXI(d,e){this.a=d
this.b=e},
bDr(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bDr=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aV(b1,new C.fBj())){u=null
w=1
break}t=B.d.cE(b1,new C.fBk())
s=$.Q()
r=new A.q1(new A.pA())
q=A.zv(r,D.aRD)
p=A.K()
p.r=B.c.gp(0)
q.ar(D.aRD,p)
o=A.K()
o.r=B.T.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bu
o.e=B.dP
n=new C.fBp(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.j.D(k-m,1,1e4)
d=B.j.D(j-l,1,1e4)
a0=B.j.D(478.40000000000003/e,0,147.20000000000002/d)
a1=(520-e*a0)/2
a2=(160-d*a0)/2
s=$.Q()
p=A.a([],x.v)
a3=new A.aF(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.J)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a5=a1+(h.a-m)*a0
a6=a2+(h.b-l)*a0
if(!a4){a7=new A.aZ(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()
a4=!0}else{a7=new A.aq(a5,a6)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()}}q.af(a3,o)}else{p=A.a([],x.v)
a3=new A.aF(s.r,B.ai,null,null,p)
for(s=b1.length,a4=!1,i=0;i<b1.length;b1.length===s||(0,A.J)(b1),++i){h=b1[i]
if(h==null){a4=!1
continue}a9=n.$1(h)
a7=a9.a
a8=a9.b
if(!a4){a7=new A.aZ(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()
a4=!0}else{a7=new A.aq(a7,a8)
p.push(a7)
a8=a3.f
if(a8!=null)a7.ak(a8)
a3.ab()}}q.af(a3,o)}w=4
return A.b(r.o0().xE(520,160),$async$bDr)
case 4:w=3
return A.b(b3.hs(B.hh),$async$bDr)
case 3:b0=b3
u=b0==null?null:J.eT(B.dN.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDr,v)},
fLP(d){return C.ikb(d)},
ikb(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fLP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bjz()
n=d.x!=null&&d.zI(null).length===0
if(d.x!=null)t=n?D.An:D.JH
else t=d.gUB()?D.JH:D.aMv
w=3
return A.b(C.bDr(d.ax),$async$fLP)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoh(s)
r=A.a5m(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aMv}else{p.c=C.xl(q,!0)
p.b=n?D.An:D.JH}r.a43(A.h7k(new C.fLR(p,d,new C.fLS(),t,n,o),null,D.bGj,B.x5))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fLP,v)},
fSw(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fSw=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fLP(d),$async$fSw)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aC(q,0,40)
u=Ae.Hr(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSw,v)},
fBj:function fBj(){},
fBk:function fBk(){},
fBp:function fBp(d){this.a=d},
fLS:function fLS(){},
fLR:function fLR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fLQ:function fLQ(){},
fYa(d,e){var w=0,v=A.j(x.H)
var $async$fYa=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.w.j(0.55),!0,null,new C.fYe(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fYa)
case 2:return A.h(null,v)}})
return A.i($async$fYa,v)},
bG3(d,e,f,g){return C.ism(d,e,f,g)},
ism(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bG3=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gan(e.split(",")):e
r=B.cI.aN(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.U(D.fkG)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.fY6(g,r,f),d,null,!0,!0,x.H),$async$bG3)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bG3,v)},
fYf(d,e){var w=0,v=A.j(x.H)
var $async$fYf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.fYi(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fYf)
case 2:return A.h(null,v)}})
return A.i($async$fYf,v)},
b_G:function b_G(d,e){this.c=d
this.a=e},
c7M:function c7M(){},
bcR:function bcR(d,e){this.b=d
this.a=e},
fYe:function fYe(d,e){this.a=d
this.b=e},
fYb:function fYb(d){this.a=d},
fYc:function fYc(d,e,f){this.a=d
this.b=e
this.c=f},
fYd:function fYd(d,e){this.a=d
this.b=e},
fY6:function fY6(d,e,f){this.a=d
this.b=e
this.c=f},
fY4:function fY4(d){this.a=d},
fY5:function fY5(d,e,f){this.a=d
this.b=e
this.c=f},
fYi:function fYi(d,e){this.a=d
this.b=e},
fYg:function fYg(d){this.a=d},
fYh:function fYh(d,e,f){this.a=d
this.b=e
this.c=f},
fG8(d,e){var w=0,v=A.j(x.y),u,t
var $async$fG8=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a38(d),$async$fG8)
case 3:t=g
J.nR(t,new C.fG9(e))
u=A.aiG(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fG8,v)},
fG9:function fG9(d){this.a=d},
apO:function apO(d,e,f){this.c=d
this.d=e
this.a=f},
aEz:function aEz(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dPX:function dPX(d,e){this.a=d
this.b=e},
dPI:function dPI(d,e){this.a=d
this.b=e},
dPL:function dPL(d,e,f){this.a=d
this.b=e
this.c=f},
dPK:function dPK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPJ:function dPJ(d,e){this.a=d
this.b=e},
dPM:function dPM(d,e){this.a=d
this.b=e},
dPG:function dPG(){},
dPH:function dPH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPF:function dPF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPq:function dPq(d){this.a=d},
dPr:function dPr(d,e,f){this.a=d
this.b=e
this.c=f},
dPs:function dPs(d,e){this.a=d
this.b=e},
dPp:function dPp(d){this.a=d},
dPx:function dPx(d,e){this.a=d
this.b=e},
dPo:function dPo(d){this.a=d},
dPy:function dPy(d,e,f){this.a=d
this.b=e
this.c=f},
dPz:function dPz(d,e,f){this.a=d
this.b=e
this.c=f},
dPn:function dPn(d,e){this.a=d
this.b=e},
dPA:function dPA(d,e,f){this.a=d
this.b=e
this.c=f},
dPm:function dPm(d,e){this.a=d
this.b=e},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dPC:function dPC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPj:function dPj(){},
dPd:function dPd(d){this.a=d},
dPe:function dPe(d){this.a=d},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPi:function dPi(d){this.a=d},
dPE:function dPE(d){this.a=d},
dPh:function dPh(){},
dPt:function dPt(d,e){this.a=d
this.b=e},
dPg:function dPg(d){this.a=d},
dPu:function dPu(d,e,f){this.a=d
this.b=e
this.c=f},
dPf:function dPf(d,e){this.a=d
this.b=e},
dPc:function dPc(d,e){this.a=d
this.b=e},
dPv:function dPv(d){this.a=d},
dPw:function dPw(d,e,f){this.a=d
this.b=e
this.c=f},
dQ_:function dQ_(){},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dPY:function dPY(d){this.a=d},
dPZ:function dPZ(d){this.a=d},
dPU:function dPU(d,e){this.a=d
this.b=e},
dPV:function dPV(d){this.a=d},
dPN:function dPN(d,e,f){this.a=d
this.b=e
this.c=f},
dPO:function dPO(d,e,f){this.a=d
this.b=e
this.c=f},
dPP:function dPP(d,e,f){this.a=d
this.b=e
this.c=f},
dPQ:function dPQ(d,e,f){this.a=d
this.b=e
this.c=f},
dPR:function dPR(d,e,f){this.a=d
this.b=e
this.c=f},
dPS:function dPS(d,e,f){this.a=d
this.b=e
this.c=f},
dPT:function dPT(d,e,f){this.a=d
this.b=e
this.c=f},
dQ1:function dQ1(){},
dQ2:function dQ2(){},
dQ3:function dQ3(){},
dQ4:function dQ4(d){this.a=d},
dPW:function dPW(d,e){this.a=d
this.b=e},
hAT(d){return B.d.dP(D.a4K,new C.fGV(d),new C.fGW())},
uR:function uR(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fGV:function fGV(d){this.a=d},
fGW:function fGW(){},
alS:function alS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWp:function aWp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TX:function TX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgt:function bgt(){this.d=$
this.c=this.a=null},
dfD:function dfD(d,e){this.a=d
this.b=e},
dfB:function dfB(d,e){this.a=d
this.b=e},
dfC:function dfC(){},
dfE:function dfE(d,e){this.a=d
this.b=e},
hlg(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nw(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LE(d,e){return C.iiN(d,e)},
iiN(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LE=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LE)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aS(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Y.aQ(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dd(p,x.f)
o=A.cF(o,new C.fJp(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fJq(),n),n.k("M.E"))
B.d.aZ(o,new C.fJr())
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
return A.i($async$LE,v)},
Bz(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bz=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bz)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.fWM(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.Y.az(r,null)),$async$Bz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bz,v)},
aSu(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSu=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LE(d,e),$async$aSu)
case 2:u=h
t=J.cC(u)
s=t.bj(u,new C.h4i(f))
if(s===-1)t.c4(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bz(d,e,u),$async$aSu)
case 3:return A.h(null,v)}})
return A.i($async$aSu,v)},
bDU(d,e,f){var w=0,v=A.j(x.H),u
var $async$bDU=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LE(d,e),$async$bDU)
case 2:u=h
J.nR(u,new C.fG0(f))
w=3
return A.b(C.Bz(d,e,u),$async$bDU)
case 3:return A.h(null,v)}})
return A.i($async$bDU,v)},
bE8(d,e){return C.iiM(d,e)},
iiM(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bE8=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bE8)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aS(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.OC
w=1
break}p=B.Y.aQ(0,q,null)
if(x.f.b(p)){o=A.a3(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aJ(o.h(0,"emblem"))
k=k==null?null:B.j.M(k)
if(k==null)k=0
if(D.DK.al(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aJ(o.h(0,"titleSize"))
if(i==null)i=null
i=B.j.D(i==null?25:i,18,36)
h=B.d.q(D.a6q,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a5L,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a5H,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d5Y,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Ip(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.OC
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.OC
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bE8,v)},
Sz(d,e,f){return C.irS(d,e,f)},
irS(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Sz=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Sz)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Y.az(f.aj(),null)),$async$Sz)
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
return A.i($async$Sz,v)},
S1(d,e){return C.iiO(d,e)},
iiO(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$S1=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$S1)
case 7:r=g
q=r.tS("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LE(d,e),$async$S1)
case 8:if(!j.cJ(g)){n=B.a.i(d.toLowerCase())
m=J.lK(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$S1)
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
return A.i($async$S1,v)},
ahl(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahl=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S1(d,e),$async$ahl)
case 3:s=g
r=J.a7(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.J(s,t)
w=5
return A.b(A.az(),$async$ahl)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahl)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahl,v)},
a3O(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a3O=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.S1(d,e),$async$a3O)
case 2:s=h
J.hk(s,f)
w=3
return A.b(A.az(),$async$a3O)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a3O)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3O)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3O)
case 6:return A.h(null,v)}})
return A.i($async$a3O,v)},
nw:function nw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJp:function fJp(){},
fJq:function fJq(){},
fJr:function fJr(){},
fWM:function fWM(){},
h4i:function h4i(d){this.a=d},
fG0:function fG0(d){this.a=d},
Ip:function Ip(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bRe:function bRe(d){this.a=d},
isb(d,e,f,g,h,i,j){return A.a6(d,!1).cd(A.ec(new C.fXm(j,i,f,e,h,g),!0,null,x.H))},
RX(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$RX=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S1(h,g),$async$RX)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.U(D.aTY)
u=!1
w=1
break}w=4
return A.b(C.hF1(d,f,e),$async$RX)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahl(h,g),$async$RX)
case 5:s=j
if(s==null){u=!1
w=1
break}r=s==="main"?g:g+"~"+s
q=1000*Date.now()
p=A.a([],x.I)
for(o=t.d,n=0;n<o.length;++n){m=o[n]
l=B.a.i(m.a)
if(l.length===0)l="Page "+(n+1)
p.push(new C.nw(""+(q+n),l,B.a.i(m.b),new A.V(Date.now(),0,!1)))}w=6
return A.b(C.Bz(h,r,p),$async$RX)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Sz(h,r,new C.Ip("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$RX)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$RX,v)},
fXm:function fXm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_v:function a_v(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBy:function aBy(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dgi:function dgi(d){this.a=d},
dgh:function dgh(d,e){this.a=d
this.b=e},
dg6:function dg6(d,e){this.a=d
this.b=e},
dg3:function dg3(d,e){this.a=d
this.b=e},
dfF:function dfF(d){this.a=d},
dfG:function dfG(d,e){this.a=d
this.b=e},
dg7:function dg7(d){this.a=d},
dfO:function dfO(d){this.a=d},
dfM:function dfM(d){this.a=d},
dfN:function dfN(d){this.a=d},
dfP:function dfP(d){this.a=d},
dg4:function dg4(d){this.a=d},
dg5:function dg5(){},
dfK:function dfK(d){this.a=d},
dfL:function dfL(d,e){this.a=d
this.b=e},
dfQ:function dfQ(d){this.a=d},
dfR:function dfR(d,e){this.a=d
this.b=e},
dgg:function dgg(d){this.a=d},
dgf:function dgf(d,e){this.a=d
this.b=e},
dge:function dge(d){this.a=d},
dg0:function dg0(d){this.a=d},
dg_:function dg_(d){this.a=d},
dg1:function dg1(d){this.a=d},
dfH:function dfH(d,e){this.a=d
this.b=e},
dg2:function dg2(d,e){this.a=d
this.b=e},
dfU:function dfU(d){this.a=d},
dfV:function dfV(d){this.a=d},
dfT:function dfT(){},
dfW:function dfW(d){this.a=d},
dfX:function dfX(d){this.a=d},
dfY:function dfY(d,e){this.a=d
this.b=e},
dfZ:function dfZ(d,e,f){this.a=d
this.b=e
this.c=f},
dfS:function dfS(d,e){this.a=d
this.b=e},
dg9:function dg9(d){this.a=d},
dg8:function dg8(){},
dga:function dga(d){this.a=d},
dgb:function dgb(d){this.a=d},
dgc:function dgc(d){this.a=d},
dgd:function dgd(d,e){this.a=d
this.b=e},
dfI:function dfI(d){this.a=d},
dfJ:function dfJ(d){this.a=d},
a_z:function a_z(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgS:function bgS(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
di4:function di4(d){this.a=d},
di5:function di5(d){this.a=d},
di3:function di3(d){this.a=d},
di6:function di6(d){this.a=d},
di2:function di2(d){this.a=d},
di7:function di7(d){this.a=d},
di1:function di1(d){this.a=d},
di8:function di8(d,e){this.a=d
this.b=e},
di0:function di0(d,e){this.a=d
this.b=e},
di9:function di9(d,e){this.a=d
this.b=e},
a_x:function a_x(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afK:function afK(d,e,f){this.a=d
this.b=e
this.c=f},
aBB:function aBB(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dgx:function dgx(d,e){this.a=d
this.b=e},
dgw:function dgw(d,e){this.a=d
this.b=e},
dgB:function dgB(d){this.a=d},
dgA:function dgA(d,e){this.a=d
this.b=e},
dgy:function dgy(d){this.a=d},
dgz:function dgz(d){this.a=d},
dgC:function dgC(d){this.a=d},
dgD:function dgD(d){this.a=d},
dgv:function dgv(d,e){this.a=d
this.b=e},
dgu:function dgu(d,e){this.a=d
this.b=e},
KM:function KM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZN:function ZN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cOW:function cOW(d){this.a=d},
cOX:function cOX(){},
cOY:function cOY(d){this.a=d},
be4:function be4(d,e,f){this.b=d
this.c=e
this.a=f},
bdW:function bdW(d,e){this.b=d
this.a=e},
uS:function uS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_5:function a_5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be2:function be2(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d7u:function d7u(d,e,f){this.a=d
this.b=e
this.c=f},
d7t:function d7t(d,e){this.a=d
this.b=e},
d7T:function d7T(d){this.a=d},
d7G:function d7G(){},
d7U:function d7U(d){this.a=d},
d7F:function d7F(){},
d7V:function d7V(d,e){this.a=d
this.b=e},
d7E:function d7E(d,e){this.a=d
this.b=e},
d7W:function d7W(d,e){this.a=d
this.b=e},
d7D:function d7D(d,e){this.a=d
this.b=e},
d7X:function d7X(d){this.a=d},
d7C:function d7C(){},
d7Y:function d7Y(d,e){this.a=d
this.b=e},
d7B:function d7B(d,e){this.a=d
this.b=e},
d7Z:function d7Z(d){this.a=d},
d7O:function d7O(d,e){this.a=d
this.b=e},
d8_:function d8_(d){this.a=d},
d80:function d80(d){this.a=d},
d82:function d82(d){this.a=d},
d83:function d83(d){this.a=d},
d7N:function d7N(d,e){this.a=d
this.b=e},
d84:function d84(d,e){this.a=d
this.b=e},
aIz:function aIz(d){this.a=d},
bjp:function bjp(d){this.a=d},
bcd:function bcd(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
alT:function alT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1M:function a1M(d,e){this.a=d
this.b=e},
alU:function alU(d,e,f,g,h,i){var _=this
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
_.a9$=i
_.c=_.a=null},
bRo:function bRo(d){this.a=d},
bRi:function bRi(d){this.a=d},
bRh:function bRh(d,e){this.a=d
this.b=e},
bRr:function bRr(d){this.a=d},
bRj:function bRj(d){this.a=d},
bRk:function bRk(d){this.a=d},
bRn:function bRn(d){this.a=d},
bRm:function bRm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRp:function bRp(d,e){this.a=d
this.b=e},
bRq:function bRq(){},
bRl:function bRl(d){this.a=d},
bRf:function bRf(d,e){this.a=d
this.b=e},
bRg:function bRg(d){this.a=d},
bp_:function bp_(d,e){this.b=d
this.a=e},
aBz:function aBz(){},
iw(d,e){var w
$.Q()
w=A.K()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bu
w.e=B.dP
return w},
bDt(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bo(j.save())
j.translate(e.a,e.b)
d.pj(0,a0?-f:f,f)
w=A.bs(B.ik,8,36)
v=B.w.j(0.3)
u=$.Q()
t=A.K()
t.r=v.gp(0)
d.bZ(w,t)
w=a1===D.X4
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eq1,new A.o(-4+v,-2),C.iw(q,5))
d.ah(D.enC,new A.o(4-v,-2),C.iw(q,5))}else{t=A.bs(B.Jx,14,40)
p=A.K()
p.r=v.gp(0)
d.bZ(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ai,k,k,A.a([],u))
t=-64-r
o.E(new A.aZ(-11,t))
o.E(new A.c6(-15,-40,-14,a3?-12:-18))
o.E(new A.aq(14,a3?-12:-18))
o.E(new A.c6(15,-40,11,t))
o.E(new A.bv())
t=A.K()
t.r=w.gp(0)
d.af(o,t)
u=new A.aF(v,B.ai,k,k,A.a([],u))
u.E(new A.aZ(-12,-50-r))
v=-46-r
u.E(new A.aq(12,v))
u.E(new A.aq(12.5,-42-r))
u.E(new A.aq(-12.5,v))
u.E(new A.bv())
v=A.K()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b0N){n=-52+w*14
d.ah(new A.o(10,n-22),new A.o(10,n+44),C.iw(F.FO,3.4))
d.ah(D.eqj,new A.o(9,n),C.iw(q,4))
d.ah(D.eo0,new A.o(10,n),C.iw(q,4))}else if(a1===D.b0O){d.ah(D.ep6,new A.o(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.ah(D.em4,new A.o(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.ah(D.epb,new A.o(-12-w,v),C.iw(q,4))
d.ah(D.aLx,new A.o(12+w,v),C.iw(q,4))}w=A.K()
w.r=q.gp(0)
d.ar(D.f7C,w)
m=new A.o(0,-77-r)
w=A.bs(m,22,19)
v=A.K()
v.r=q.gp(0)
d.bZ(w,v)
w=h.y
if(w!=null){v=A.bs(m.a2(0,K.vn),15,24)
u=A.K()
u.r=w.gp(0)
d.bZ(v,u)
u=m.a2(0,D.elZ)
v=A.K()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bs(m.a2(0,B.to),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.cB(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a2(0,D.eqh),m.a2(0,D.ep4),C.iw(v,2.2))
d.ah(m.a2(0,D.eo_),m.a2(0,D.elW),C.iw(v,2.2))}if(w===4){w=m.a2(0,D.eql)
u=A.K()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a2(0,D.eo1)
w=A.K()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a2(0,D.eoS)
v=A.K()
v.r=B.ib.gp(0)
d.N(w,0.9,v)
v=m.a2(0,D.eoG)
w=A.K()
w.r=B.ib.gp(0)
d.N(v,0.9,w)
if(i){l=m.a2(0,K.a8m)
w=A.bs(l,21,22)
v=A.K()
v.r=D.lB.gp(0)
d.bZ(w,v)
v=A.bs(l.a2(0,K.aLu),5,12)
w=A.K()
w.r=D.bfW.gp(0)
d.bZ(v,w)
d.ah(l.a2(0,D.eqd),l.a2(0,K.aLR),C.iw(B.cO,1.4))
d.ah(D.aLx,new A.o(15,-88-r),C.iw(q,3.6))}j.restore()},
hzu(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bo(r.save())
w=e.a
r.translate(w,e.b-h.x*f)
d.bU(0,f)
v=A.bs(B.dG,18,96)
u=B.w.j(0.28)
$.Q()
t=A.K()
t.r=u.gp(0)
d.bZ(v,t)
t=A.bs(B.dG,11,70)
v=B.w.j(0.2)
u=A.K()
u.r=v.gp(0)
d.bZ(t,u)
d.lx(D.aRH,A.K())
C.i72(d,g,h,i,j)
s=(k==null?D.a8s:k).a-w>=0?1:-1
w=A.K()
w.a=B.LN
w.sav(A.jy(new A.o(s*70,-60),new A.o(-s*70,-60),A.a([D.aib.j(0.5),D.aib.j(0.12),D.bne.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.ar(D.aRH,w)
r.restore()
r.restore()},
i72(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
a0.toString
w=A.ar(d,B.c,0.16)
w.toString
v=a2.b
u=A.ar(v,B.w,0.32)
u.toString
t=Math.sin(a4*1.9+a5)*0.8
s=a2.w
r=s?1.06:1
q=s?0.86:1
s=A.bn(D.f7D,B.ts)
p=$.Q()
o=A.K()
o.r=u.gp(0)
a1.am(s,o)
o=A.bn(D.f7y,B.hP)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a1.am(o,n)
n=A.bn(D.f7M,B.hP)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a1.am(n,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f7F,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f6o,s)
s=a1.c
J.bo(s.save())
s.translate(a3.w,0)
J.bo(s.save())
a1.pj(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aF(p.r,B.ai,e,e,A.a([],n))
p=-m
k=p+2
l.E(new A.aZ(k,-58))
l.E(new A.c6(p-3,-62,p,-52))
l.E(new A.aq(p+4,-14))
l.E(new A.aq(m-4,-14))
l.E(new A.aq(m,-52))
l.E(new A.c6(m+3,-62,m-2,-58))
l.E(new A.c6(0,-70,k,-58))
l.E(new A.bv())
k=A.K()
k.r=v.gp(0)
a1.af(l,k)
J.bo(s.save())
a1.mQ(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dcH[j]
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bu
i.e=B.dP
a1.ah(new A.o(-34+u,-64),new A.o(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.aq(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.Q()
f=new A.ao(B.O,B.M,B.R,B.S,B.P)
f.r=i.gp(0)
a1.N(new A.o(g,h),3.6,f)
f=new A.ao(B.O,B.M,B.R,B.S,B.P)
f.r=u.gp(0)
a1.N(new A.o(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bu
i.e=B.dP
a1.ah(new A.o(g,-64),new A.o(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bu
i.e=B.dP
a1.ah(new A.o(-30,h),new A.o(30,h),i)}break
default:a1.ah(D.epH,D.emK,C.iw(a2.c.j(0.9),3))}a1.ah(D.eqe,D.epd,C.iw(B.w.j(0.18),1.6))
a1.ah(D.em3,K.aLz,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.Q()
i=A.K()
i.r=u.gp(0)
a1.ar(D.f6k,i)
s.restore()
i=A.K()
i.r=a0.gp(0)
a1.ar(D.f6y,i)
n=new A.aF(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.c6(0,-57,9,-66))
n.E(new A.c6(0,-60,-9,-66))
k=A.K()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cB(D.f6H,0.1,2.941592653589793,!1,C.iw(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a8w
n=25*q
k=23*q
i=9*q
C.hvL(a1,new A.o(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.Ea:o
C.hvL(a1,new A.o(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.enu,D.enq,C.iw(D.aja,4))
a1.ah(D.ens,D.eno,C.iw(D.Gb.j(0.7),1.4))
u=A.K()
u.r=B.cO.gp(0)
a1.N(D.enr,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bo(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.hW(0,a3.f)
a1.bU(0,r)
C.i7_(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hvL(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.ik:s.eW(0,r),p=B.j.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.o(o,w)
if(o*i<0)v=new A.o(-o,-w)
u=e.a2(0,q.aM(0,n)).a2(0,v.aM(0,m))
t=e.a2(0,q.aM(0,p))
d.ah(e,u,C.iw(j,l))
o=A.ar(j,B.w,0.2)
o.toString
d.ah(e,u,C.iw(o,l*0.35))
d.ah(u,t,C.iw(k,l*0.78))
o=A.ar(k,B.w,0.22)
o.toString
d.ah(u,t,C.iw(o,l*0.22))
$.Q()
o=A.K()
o.r=j.gp(0)
d.N(u,l*0.55,o)
o=A.bs(t,l*1.15,l)
w=A.K()
w.r=k.gp(0)
d.bZ(o,w)
w=-l
w=t.a2(0,new A.o(i*w*0.45,w*0.1))
o=A.K()
o.r=k.gp(0)
d.N(w,l*0.28,o)},
i7_(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bs(B.vm,40,38)
$.Q()
v=A.K()
v.r=c0.gp(0)
c2.bZ(w,v)}if(c1===4){$.Q()
w=A.K()
w.r=c0.gp(0)
c2.N(D.epn,9.5,w)
w=A.K()
w.r=c0.gp(0)
c2.N(D.emk,9.5,w)}w=A.bs(D.eqB,10,6)
v=$.Q()
u=A.K()
u.r=c8.gp(0)
c2.bZ(w,u)
u=A.bs(D.eoP,10,6)
w=A.K()
w.r=c8.gp(0)
c2.bZ(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ai,b9,b9,A.a([],w))
t.E(new A.aZ(0,-20))
t.E(new A.kR(13,-20,17,-9,16,2))
t.E(new A.kR(15,13,8,20,0,20))
t.E(new A.kR(-8,20,-15,13,-16,2))
t.E(new A.kR(-17,-9,-13,-20,0,-20))
t.E(new A.bv())
u=A.K()
u.sav(A.wc(D.eq3,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iw(c8.j(0.5),0.8)
c2.cB(D.f7O,3.455751918948773,2.5132741228718345,!1,s)
c2.cB(D.f6r,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.epk,D.ep8,s)
c2.ah(D.emg,D.em7,s)
c2.cB(D.f6G,2.2,1.4,!1,s)
c2.cB(D.f6p,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.r=c0.gp(0)
c2.N(new A.o(p*14.5,-3+o*17.5),4.3,n)}p=A.K()
p.r=c0.gp(0)
c2.cB(D.f6U,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-15,-11))
p.E(new A.c6(0,-30,15,-11))
p.E(new A.aq(13,-6))
p.E(new A.c6(0,-12,-13,-6))
p.E(new A.bv())
o=A.K()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.ep9,D.em8,C.iw(G.no,1.4))
o=A.K()
o.r=c0.gp(0)
c2.N(D.epq,3,o)
o=A.K()
o.r=c0.gp(0)
c2.N(D.eml,3,o)
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.c6(-12,22,0,26))
o.E(new A.c6(12,22,13,6))
o.E(new A.c6(8,13,0,12))
o.E(new A.c6(-8,13,-13,6))
o.E(new A.bv())
p=A.K()
p.r=B.iF.gp(0)
c2.af(o,p)
p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-7,8))
p.E(new A.c6(0,6,7,8))
p.E(new A.c6(0,10.5,-7,8))
o=A.K()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.E(new A.aZ(-17,-4))
p.E(new A.c6(-20,-27,0,-29))
p.E(new A.c6(20,-27,17,-4))
p.E(new A.c6(0,-14,-17,-4))
p.E(new A.bv())
o=A.K()
o.r=m.gp(0)
c2.af(p,o)
o=A.ar(m,B.w,0.3)
o.toString
c2.cB(D.f70,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cB(D.f6O,3.6,2.2,!1,C.iw(o,1.2))
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(11,-22))
o.E(new A.c6(27,-34,25,-19))
o.E(new A.c6(18,-18,11,-22))
p=A.ar(m,B.c,0.1)
p.toString
n=A.K()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aF(v,B.ai,b9,b9,A.a([],w))
n.E(new A.aZ(11,-22))
n.E(new A.c6(24,-12,27,-26))
n.E(new A.c6(18,-22,11,-22))
o=A.ar(m,B.w,0.2)
o.toString
p=A.K()
p.r=o.gp(0)
c2.af(n,p)
p=A.K()
p.r=c3.c.gp(0)
c2.N(D.em9,3,p)
break
case 3:p=A.K()
p.r=c0.gp(0)
c2.cB(D.f6Y,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.b=B.a9
o.c=0.9
o.r=p.gp(0)
o.d=B.bu
o.e=B.dP
c2.ah(new A.o(r*3.6,-19+Math.abs(r)*0.8),new A.o(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aCh[l]
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.b=B.a9
o.c=4.5
o.r=c0.gp(0)
o.d=B.bu
o.e=B.dP
c2.ah(new A.o(k,0),new A.o(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.r=p.gp(0)
c2.N(new A.o(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.K()
p.r=c0.gp(0)
c2.cB(D.f6X,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(K.a8m,K.a8l,C.iw(p,1))
break
default:p=A.K()
p.r=c0.gp(0)
c2.cB(D.f6s,3.267256359733385,2.8902652413026098,!0,p)}i=B.j.D(c4.b,0,1)*0.4+0.1
p=A.bs(D.eqn,5,8)
o=D.afu.j(i)
n=A.K()
n.r=o.gp(0)
c2.bZ(p,n)
n=A.bs(D.ep0,5,8)
p=D.afu.j(i)
o=A.K()
o.r=p.gp(0)
c2.bZ(n,o)
h=c4.e*2.4
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(h-0.6,-2))
o.E(new A.c6(h-3.4,6,h-2.6,7.4))
o.E(new A.c6(h,8.8,h+2.6,7.4))
c2.af(o,C.iw(c8.j(0.75),1.1))
o=A.K()
o.r=c8.gp(0)
c2.N(new A.o(h-1.5,7.2),0.7,o)
o=A.K()
o.r=c8.gp(0)
c2.N(new A.o(h+1.5,7.2),0.7,o)
g=B.j.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fL[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bs(new A.o(a5,-3),a3,7)
a6=new A.ao(B.O,B.M,B.R,B.S,B.P)
a6.r=B.c.j(0.96).gp(0)
c2.bZ(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bo(d.save())
a6=A.a([],w)
a4=new A.aF(v,B.ai,b9,b9,a6)
a6.push(new A.jR(A.bs(new A.o(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.E6(a4.glV().a.snapshot())
d.clipPath(a3.a,$.np(),!0)
a3=new A.ao(B.O,B.M,B.R,B.S,B.P)
a3.r=D.bjH.gp(0)
c2.N(new A.o(a7,a8),2.1,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.P)
a3.r=B.w.gp(0)
c2.N(new A.o(a7,a8),1.05,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.P)
a3.r=B.c.gp(0)
c2.N(new A.o(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.Z6:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ao(B.O,B.M,B.R,B.S,B.P)
a9.b=B.a9
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bu
a9.e=B.dP
a3=p?0.8:0
c2.cB(A.bs(new A.o(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
a3=c4.c
b0=-9.2-a3*2.2
a4=a2*3.6
a6=a3<0?-a3*1.6:0
a3=a3>0?a3*0.6:0
if(u)b1=B.ea
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ao(B.O,B.M,B.R,B.S,B.P)
b2.b=B.a9
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bu
b2.e=B.dP
c2.ah(new A.o(a5-a4,b0-a6+0.4),new A.o(a5+a4,b0-0.6-a3),b2)}b3=B.j.D(c4.a,0,1)
if(o)b4=D.btE
else{u=A.ar(c8,D.bng,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.j.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aF(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.c6(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.c6(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bv())
v=A.K()
v.r=D.bmA.gp(0)
c2.af(b8,v)
J.bo(d.save())
c2.mQ(0,b8)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c2.ar(new A.a1(w,11,w+b6*2,13.2),u)
u=A.bs(new A.o(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.K()
w.r=D.btJ.gp(0)
c2.bZ(u,w)
d.restore()
c2.af(b8,C.iw(b4,1.1))}else{u=new A.aF(v,B.ai,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.E(new A.aZ(-5.2,p))
u.E(new A.c6(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iw(b4,1.5))
if(b5>0.6){w=new A.aF(v,B.ai,b9,b9,A.a([],w))
w.E(new A.aZ(-4.6,11.8))
w.E(new A.c6(0,15.1+b5*1.4,4.6,11.8))
w.E(new A.c6(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.K()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cB(D.f6F,-1.2,2.2,!1,C.iw(c8.j(0.5),0.8))
c2.cB(D.f6u,2.141592653589793,2.2,!1,C.iw(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.K()
w.r=c1.gp(0)
c2.N(D.eoI,1.7,w)
w=A.K()
w.r=c1.gp(0)
c2.N(D.eoE,1.7,w)}},
icC(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.Q(),f=new A.q1(new A.pA()),e=A.zv(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.K()
a2.sav(A.jy(B.H,new A.o(0,a0*0.46),D.d9s,D.d0Z,B.x,h))
e.ar(new A.a1(0,0,0+d,0+a0),a2)
a2=e.c
J.bo(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bU(0,a1)
w=new A.e5()
w.d_(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.N(new A.o(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bo(a2.save())
a2.translate(200,120)
e.hW(0,-0.5)
d=A.K()
a0=x.O
d.sav(A.wc(B.H,230,A.a([D.bis,B.L],a0),h,B.x,h,h,0))
e.bZ(D.f7a,d)
a2.restore()
d=A.K()
d.sav(A.wc(D.a8v,58,A.a([D.blD,B.L],a0),h,B.x,h,h,0))
e.N(D.a8v,58,d)
d=A.K()
d.r=D.bh9.gp(0)
e.N(D.a8v,24,d)
d=A.K()
d.r=D.Zw.gp(0)
e.N(D.en3,5,d)
d=A.K()
d.r=D.Zw.gp(0)
e.N(D.en7,3.4,d)
d=A.K()
d.r=D.Zw.gp(0)
e.N(D.en6,2.4,d)
for(d=x.v,s=0;s<3;++s,g=u){u=A.a([],d)
r=new A.aF(g.r,B.ai,h,h,u)
u.push(new A.aZ(-60,420))
r.ab()
for(g=372+s*12,t=60+s*20,q=s*2,p=14-s*3,o=-60;o<=510;o+=8){n=new A.aq(o,g+Math.sin(o/t+q)*p+Math.sin(o/23+s)*3)
u.push(n)
m=r.f
if(m!=null)n.ak(m)
r.ab()}g=new A.aq(510,470)
u.push(g)
t=r.f
if(t!=null)g.ak(t)
r.ab()
g=new A.aq(-60,470)
u.push(g)
t=r.f
if(t!=null)g.ak(t)
r.ab()
g=new A.bv()
u.push(g)
u=r.f
if(u!=null)g.ak(u)
r.ab()
g=[D.bfJ,D.bhJ,D.bnA][s]
u=$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cvT[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.b=B.a9
u.c=2.4
u.r=D.ZP.gp(0)
u.d=B.bu
u.e=B.dP
e.ah(new A.o(o,k),new A.o(g,d),u)
g=A.bs(new A.o(g,k-27),11,46)
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=D.ZP.gp(0)
e.bZ(g,u)
d=A.bs(new A.o(o-12,d),8,24)
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=D.ZP.gp(0)
e.bZ(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=D.bhc.j(0.8).gp(0)
e.N(new A.o(20+v*52+g*7,400+d*5),1.2,u)}g=A.K()
g.sav(A.jy(D.elD,D.elF,D.d2W,B.Dv,B.x,h))
e.ar(new A.a1(-200,412,650,1300),g)
j=new A.e5()
j.d_(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bs(new A.o(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h8()?B.c:B.w
d=new A.ao(B.O,B.M,B.R,B.S,B.P)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.bZ(u,d)}J.bo(a2.save())
a2.translate(225,590)
e.pj(0,1,0.34)
g=A.K()
g.sav(A.wc(B.H,250,A.a([D.bow,D.bi3,D.bqq],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.H,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ar(D.ahT,D.bgH,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.Q()
a0=new A.ao(B.O,B.M,B.R,B.S,B.P)
a0.b=B.a9
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bu
a0.e=B.dP
e.ah(new A.o(o+i*2,k),new A.o(o+i*5,g+Math.abs(i)*3),a0)}}C.i57(e)
for(l=0;l<3;++l)C.i8A(e,D.aA5[l])
C.i8p(e,D.emY)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.Q()
a0=new A.ao(B.O,B.M,B.R,B.S,B.P)
a0.b=B.a9
a0.c=2.4
a0.r=D.ZK.gp(0)
a0.d=B.bu
a0.e=B.dP
e.ah(new A.o(o,452+g),new A.o(o+1,436+d),a0)}e.ah(D.em5,D.emp,C.iw(D.bhq,1.6))
a2.restore()
return f.o0()},
i57(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.Q().r,g=x.v,f=new A.aF(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.kR(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.kR(416,382,432,422,428,462))
f.E(new A.bv())
w=A.K()
w.sav(A.jy(new A.o(354,0),new A.o(430,0),D.dx3,B.nK,B.x,i))
d.af(f,w)
v=new A.e5()
v.d_(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.b=B.a9
p.c=1.1
p.r=q.gp(0)
p.d=B.bu
p.e=B.dP
d.ah(new A.o(t,s),new A.o(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.de3[o]
w=n.a
r=392+w*12
q=-n.b
p=r+w*52
m=336+(q*46-8)
w=p+w*42
q=m+(q*34+4)
l=A.a([],g)
k=new A.aF(h,B.ai,i,i,l)
l.push(new A.aZ(r,336))
k.ab()
r=new A.c6(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.b=B.a9
r.c=8
r.r=D.agc.gp(0)
r.d=B.bu
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=A.ar(D.bhi,D.bnz,v.ai()).j(0.92).gp(0)
d.N(new A.o(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.b=B.a9
r.c=1.2
r.r=D.ZK.gp(0)
r.d=B.bu
r.e=B.dP
d.ah(new A.o(w,q+8),new A.o(w,q+22),r)
q=A.bs(new A.o(w,q+28),13,7)
w=new A.ao(B.O,B.M,B.R,B.S,B.P)
w.r=D.boP.gp(0)
d.bZ(q,w)}},
i8A(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bs(new A.o(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.Q(),b3=A.K()
b3.r=b1.gp(0)
b4.bZ(b0,b3)
b2=b2.r
b3=x.v
w=new A.aF(b2,B.ai,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.E(new A.aZ(b0,b1))
w.E(new A.aq(b0,a6))
v=a5+a7
w.E(new A.c6(a5,a6+a7*0.22,v,a6))
w.E(new A.aq(v,b1))
w.E(new A.bv())
u=A.K()
u.sav(A.jy(new A.o(b0,0),new A.o(v,0),D.de9,B.nK,B.x,a4))
b4.af(w,u)
t=new A.e5()
t.d_(B.o.V(a5*7))
v=b4.c
J.bo(v.save())
b4.mQ(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.bu
n.e=B.dP
b4.ah(new A.o(r,q),new A.o(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ahO.j(0.75)
n=A.K()
n.r=o.gp(0)
b4.ar(new A.a1(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.j.bh(u);++l){k=m+l*10
j=A.a([],b3)
i=new A.aF(b2,B.ai,a4,a4,j)
j.push(new A.aZ(k,o))
i.ab()
h=new A.aq(k+5,n)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
h=new A.aq(k+10,o)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
h=new A.bv()
j.push(h)
j=i.f
if(j!=null)h.ak(j)
i.ab()
j=new A.ao(B.O,B.M,B.R,B.S,B.P)
j.r=D.lB.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aF(b2,B.ai,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.j.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iw(D.ahO.j(0.7),1.6))
v.restore()
b0=$.Q().r
b2=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.E(new A.aZ(n,m))
j=a6-a8*0.55
b2.E(new A.aq(n,j))
o=p+o
b2.E(new A.c6(p,a6-a8*0.82,o,j))
b2.E(new A.aq(o,m))
b2.E(new A.bv())
m=A.K()
m.r=D.ai0.gp(0)
b4.af(b2,m)
m=A.K()
m.r=D.ai0.gp(0)
b4.N(new A.o(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
e.E(new A.aZ(o,j))
n=b1-m*0.55
e.E(new A.c6(a5-a9,n,a5,u))
e.E(new A.c6(a5+a9,n,p,j))
e.E(new A.c6(a5,b1+a7*0.34,o,j))
e.E(new A.bv())
b1=A.K()
n=a7*1.4
b1.sav(A.jy(new A.o(a5-n,0),new A.o(a5+n,0),D.dhE,B.nK,B.x,a4))
b4.af(e,b1)
J.bo(v.save())
b4.mQ(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h8()?B.w:D.bgQ).j(0.16)
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.b=B.a9
i.c=0.9
i.r=n.gp(0)
i.d=B.bu
i.e=B.dP
b4.ah(new A.o(a5+(p-0.5)*3,u),new A.o(o+a9*d,j+b1*a7*0.3),i)}for(l=1;l<5;++l){a0=u+m*l/4.6
a1=b2*l/4.6
b1=A.a([],b3)
p=new A.aF(b0,B.ai,a4,a4,b1)
n=a0+2
b1.push(new A.aZ(a5-a1,n))
p.ab()
n=new A.c6(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.b=B.a9
n.c=1.2
n.r=b1.gp(0)
n.d=B.bu
n.e=B.dP
b4.af(p,n)}v.restore()
for(s=0;s<46;++s){d=s/45
a2=o+a9*d
a3=j+Math.sin(d*3.141592653589793)*a7*0.3
b1=t.ai()
b2=t.ai()
v=new A.ao(B.O,B.M,B.R,B.S,B.P)
v.b=B.a9
v.c=1.1
v.r=D.bo_.gp(0)
v.d=B.bu
v.e=B.dP
b4.ah(new A.o(a2,a3),new A.o(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bv())
b0=A.K()
b0.r=D.bkc.gp(0)
b4.af(a9,b0)},
i8p(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aCe[s]
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.b=B.a9
q.c=3
q.r=D.ZK.gp(0)
q.d=B.bu
q.e=B.dP
d.ah(new A.o(r,u),new A.o(r,t),q)}u=A.bs(e.a2(0,K.aLt),24,36)
t=$.Q()
r=A.K()
r.r=D.bsT.gp(0)
d.bZ(u,r)
t=new A.aF(t.r,B.ai,null,null,A.a([],x.v))
r=w-24
u=v-30
t.E(new A.aZ(r,u))
t.E(new A.aq(w,v-54))
t.E(new A.aq(w+24,u))
t.E(new A.c6(w,v-24,r,u))
t.E(new A.bv())
u=A.K()
u.r=D.agT.gp(0)
d.af(t,u)},
i7H(d){switch(B.o.F(d,8)){case 0:return D.b0l
case 1:return D.b0j
case 2:return D.b0i
case 3:return D.b0h
case 4:return D.b0k
case 5:return D.b0m
case 6:return D.hwP
default:return D.hwO}},
Sx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bp0()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a8w:j
w.as=k==null?D.Ea:k
C.hzu(d,e,p,C.i7H(m),w,s,m,l)},
hAZ(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bT2:function bT2(){var _=this
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
te:function te(d,e,f,g,h,i,j,k,l,m){var _=this
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
bp0:function bp0(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amb:function amb(){this.b=this.a=null},
aWu:function aWu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bSV:function bSV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSW:function bSW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSX:function bSX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSY:function bSY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSZ:function bSZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT_:function bT_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT0:function bT0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT1:function bT1(){},
bSU:function bSU(d){this.a=d},
afT:function afT(d,e){this.a=d
this.b=e},
adS:function adS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
N0(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bRE(s)
s.bBC(d)
return s},
H0(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d2(new A.Y(g,new C.fu9(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("ch.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.cW(w,0,A.dA(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.ls(e,v,B.d.co(v,f),h,i,"tree",j)},
itO(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h49(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jz(c4,c0)
t=A.C(c4,A.a4(c4).k("ch.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jz(c4,c0)
r=A.C(c4,A.a4(c4).k("ch.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jz(c4,c0)
q=A.C(c4,A.a4(c4).k("ch.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.J)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wr)g="father"
else g=h===D.ot?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h4b(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H0(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h4c(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.ls("True or false: "+h+" is the "+g+" of "+l+".",D.aB6,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.ls("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aB6,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.G9(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h4d(l,a0,c5),v),s)
e=a1.c
if(e===D.wr)e="son"
else e=e===D.ot?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H0(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ez([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mx(a5,a5.r,f.k("mx<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H0(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iu<1>"),a3=new A.iu(a0,1,b3,a2),a3.n5(a0,1,b3,e.c),a3=new A.bQ(a3,a3.gI(0),a2.k("bQ<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H0(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.aro(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h4e(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H0(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h4f(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wr
if(e)a2=b7
else a2=f===D.ot?b8:b9
if(e)f=b7
else f=f===D.ot?b8:b9
c2.$2("grand",C.H0(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aN2(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.C(new A.Y(t,new C.h4g(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H0(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cOA)
h=l+" was born in "+k
c2.$2("place",C.H0(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d3Z)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H0(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.J)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H0(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.iX(b1,b3,b3)
c2.$2("year",C.H0(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bE4(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.N0(d),l=new A.e5()
l.d_(f)
w=C.itO(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hjl(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aV(u,new C.fHw(n,w))))break
for(v=u.length,r=0;r<u.length;u.length===v||(0,A.J)(u),++r){q=u[r]
if(t.length>=e)break
p=w.h(0,q)
p.toString
if(J.ad(p)>n.a){p=w.h(0,q)
p.toString
p=s.J(0,J.t(p,n.a).a)}else p=!1
if(p){p=w.h(0,q)
p.toString
t.push(J.t(p,n.a))}}++n.a}v=t.length
if(v<e){v=A.C(D.az7,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hzB(o,l))}}else if(!g&&v>3){o=C.hzB(D.az7[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hzB(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.ls(d.a,w,B.d.co(w,v),d.d,d.e,d.f,d.r)},
hEA(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.N0(a2),a1=new A.e5()
a1.d_(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a0.G9(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){n=u[r]
m=a0.G9(n)
l=A.U(m)
k=new A.iu(m,0,5,l.k("iu<1>"))
k.n5(m,0,5,l.c)
j=k.dn(0)
if(new A.N(j,new C.fVN(),A.U(j).k("N<1,H>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.J)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.J)(j),++i)g.push(C.aSf(a0,j[i]))
w.push(new C.aue("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
J.c8(e.c3(0,a0.amx(q),new C.fVO()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fi(d)
v=A.a([],v)
for(u=A.cW(d,0,A.dA(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bQ(u,u.gI(0),t.k("bQ<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cC(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.J)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r)s.push(C.aSf(a0,v[r]))
w.push(new C.aue("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aQL(d){return B.d.ao_(D.aBB,new C.fDq(d))},
ijk(d){return A.nA(new A.Y(D.aBB,new C.fKk(d),x.av))},
bSs(d){return C.hOf(d)},
hOf(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSs=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bSs)
case 7:r=f
q=B.a.i(d)
q=A.eo(J.t(r.a,"ngmy_family_stars_v1_"+q.toLowerCase()))
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
return A.i($async$bSs,v)},
BS(d,e){return C.hOc(d,e)},
hOc(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BS=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BS)
case 7:r=g
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BS)
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
return A.i($async$BS,v)},
bSr(d,e,f){return C.hOd(d,e,f)},
hOd(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSr=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bSr)
case 7:r=h
q=B.a.i(d)
q=A.eo(J.t(r.a,"ngmy_family_best_v1_"+q.toLowerCase()+"_"+e+"_"+f))
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
return A.i($async$bSr,v)},
BT(d,e,f,g){return C.hOe(d,e,f,g)},
hOe(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BT=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BT)
case 7:r=i
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BT)
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
return A.i($async$BT,v)},
bGj(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h6d(d,e,f,g){return new C.akN(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hMj(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aU(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cq)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cW(w,0,A.dA(4,"count",x.S),u).dn(0)
B.d.v(w,A.c_(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aJ(d.h(0,"c"))
v=v==null?null:B.j.M(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aJ(d.h(0,"s"))
u=u==null?null:B.j.M(u)
return C.h6d(w,v,B.o.D(u==null?20:u,5,60),t)},
hku(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aU(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.cq)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hMj(A.a3(r,t,s)))}return new C.MK(p,w,v)},
heH(d){var w,v=A.a([],x.c)
for(w=J.aU(d.z);w.C();)v.push(C.hku(w.gR(w)))
return v},
aSf(d,e){var w=e.c===D.ot
if(d.amx(e)===0&&d.G9(e).length!==0)return w?0:1
if(d.G9(e).length!==0||d.aro(e)!=null)return w?2:3
return w?4:5},
hFG(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N0(a4),a3=new A.e5()
a3.d_(a5)
w=A.a([],x.dT)
v=a2.b
u=A.C(v,x.P)
B.d.e0(u,a3)
t=x.s
s=A.a([],t)
for(r=v.length,q=0;q<v.length;v.length===r||(0,A.J)(v),++q)s.push(B.a.i(v[q].b))
for(v=u.length,r=x.N,p=x.ec,o=x.cc,n=o.k("M.E"),q=0;q<u.length;u.length===v||(0,A.J)(u),++q){m=u[q]
l=A.a([],t)
k=m.d
if(k==null)j=null
else{i=a2.c
i===$&&A.c()
j=i.h(0,k)}h=a2.G9(m)
g=a2.aro(m)
f=a2.aN2(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wr)k="father"
else k=k===D.ot?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wr)k="father"
else k=k===D.ot?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h4z())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h4A(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iu(a0,0,3,i.k("iu<1>"))
a1.n5(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e0(k,a3)
a1=C.aSf(a2,m)
i=new A.iu(l,0,4,p)
i.n5(l,0,4,r)
w.push(new C.bas(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hxd(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a0(d,"My ")?1:0},
hEM(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N0(a4),a3=new A.e5()
a3.d_(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a2.G9(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){l=u[r]
k=a2.G9(l)
j=A.U(k)
i=new A.iu(k,0,4,j.k("iu<1>"))
i.n5(k,0,4,j.c)
h=i.dn(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.J)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aV(h,new C.fWi(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iu(i,0,k,m)
j.n5(i,0,k,n)
f=j.dn(0)
j=B.a.i(l.b)
k=C.aSf(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.J)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.J)(h),++g)e.push(C.aSf(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.J)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.J)(f),++g)a0.push(C.aSf(a2,f[g]))
w.push(new C.a9X(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
ls:function ls(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bRE:function bRE(d){this.b=d
this.c=$},
bRF:function bRF(){},
bRG:function bRG(d){this.a=d},
fu9:function fu9(d){this.a=d},
h49:function h49(d){this.a=d},
h4a:function h4a(){},
h4b:function h4b(d){this.a=d},
h4c:function h4c(d,e){this.a=d
this.b=e},
h4d:function h4d(d,e,f){this.a=d
this.b=e
this.c=f},
h48:function h48(d,e){this.a=d
this.b=e},
h4e:function h4e(d){this.a=d},
h4f:function h4f(d){this.a=d},
h4g:function h4g(d,e,f){this.a=d
this.b=e
this.c=f},
h47:function h47(d,e){this.a=d
this.b=e},
fHw:function fHw(d,e){this.a=d
this.b=e},
aue:function aue(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fVN:function fVN(){},
fVO:function fVO(){},
zE:function zE(d,e,f){this.a=d
this.b=e
this.c=f},
fDq:function fDq(d){this.a=d},
fKk:function fKk(d){this.a=d},
akN:function akN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMs:function bMs(){},
MK:function MK(d,e,f){this.a=d
this.b=e
this.c=f},
bas:function bas(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h4z:function h4z(){},
h4A:function h4A(d){this.a=d},
a9X:function a9X(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWi:function fWi(d){this.a=d},
bhI:function bhI(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
afR:function afR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ak5:function ak5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ak6:function ak6(d,e,f,g,h){var _=this
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
_.a9$=h
_.c=_.a=null},
bKC:function bKC(d){this.a=d},
bKx:function bKx(){},
bKD:function bKD(){},
bKv:function bKv(){},
bKw:function bKw(){},
bKB:function bKB(d){this.a=d},
bKy:function bKy(d,e){this.a=d
this.b=e},
bKA:function bKA(d,e){this.a=d
this.b=e},
bKz:function bKz(d,e){this.a=d
this.b=e},
bKu:function bKu(d){this.a=d},
bcT:function bcT(d,e){this.b=d
this.a=e},
QE:function QE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBx:function aBx(d,e,f){this.b=d
this.c=e
this.a=f},
aA1:function aA1(d,e,f){this.a=d
this.b=e
this.c=f},
auQ:function auQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
auR:function auR(d,e,f){var _=this
_.d=$
_.y=_.x=_.w=_.r=_.f=_.e=0
_.Q=_.z=$
_.as=d
_.at=""
_.ax=-1
_.ch=_.ay=!1
_.cQ$=e
_.b7$=f
_.c=_.a=null},
cpZ:function cpZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cq_:function cq_(d){this.a=d},
cpY:function cpY(d){this.a=d},
cq0:function cq0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cq1:function cq1(){},
cq2:function cq2(d,e){this.a=d
this.b=e},
cq3:function cq3(){},
cq4:function cq4(d){this.a=d},
cpV:function cpV(d){this.a=d},
cpW:function cpW(d,e){this.a=d
this.b=e},
cpX:function cpX(d,e,f){this.a=d
this.b=e
this.c=f},
cpQ:function cpQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpS:function cpS(d,e){this.a=d
this.b=e},
cpT:function cpT(d,e){this.a=d
this.b=e},
cpR:function cpR(d,e){this.a=d
this.b=e},
cpP:function cpP(){},
cpU:function cpU(){},
bcm:function bcm(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cQ_:function cQ_(){},
ayN:function ayN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ayO:function ayO(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cEX:function cEX(d){this.a=d},
cEW:function cEW(d){this.a=d},
cF4:function cF4(d,e){this.a=d
this.b=e},
cF5:function cF5(d,e){this.a=d
this.b=e},
cF6:function cF6(d){this.a=d},
cF3:function cF3(d){this.a=d},
cF7:function cF7(d){this.a=d},
cF8:function cF8(d,e){this.a=d
this.b=e},
cF9:function cF9(){},
cFa:function cFa(d){this.a=d},
cEZ:function cEZ(d){this.a=d},
cF_:function cF_(d,e){this.a=d
this.b=e},
cEY:function cEY(d,e){this.a=d
this.b=e},
cF0:function cF0(){},
cF1:function cF1(){},
cF2:function cF2(d,e){this.a=d
this.b=e},
azN:function azN(){},
aGZ:function aGZ(){},
hcr(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.brm((w-450*u)/2,(v-900*u)/2,u)},
afF:function afF(){},
f6I:function f6I(d){this.a=d},
aKM:function aKM(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fgR:function fgR(d){this.a=d},
am1:function am1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am2:function am2(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.q8$=f
_.LW$=g
_.an3$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bSq:function bSq(d){this.a=d},
bSp:function bSp(){},
bSn:function bSn(d){this.a=d},
bSl:function bSl(){},
bSm:function bSm(d){this.a=d},
bSi:function bSi(d,e){this.a=d
this.b=e},
bSj:function bSj(){},
bSk:function bSk(d){this.a=d},
bSo:function bSo(d,e){this.a=d
this.b=e},
bSh:function bSh(d){this.a=d},
bt2:function bt2(d,e){this.b=d
this.a=e},
f6J:function f6J(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f6K:function f6K(d,e,f){this.a=d
this.b=e
this.c=f},
f6L:function f6L(d,e,f){this.a=d
this.b=e
this.c=f},
f6M:function f6M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6N:function f6N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f6O:function f6O(){},
am_:function am_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am0:function am0(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.q8$=f
_.LW$=g
_.an3$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bS3:function bS3(){},
bSe:function bSe(d,e){this.a=d
this.b=e},
bSf:function bSf(d){this.a=d},
bSg:function bSg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSa:function bSa(){},
bS9:function bS9(d,e){this.a=d
this.b=e},
bSb:function bSb(d,e){this.a=d
this.b=e},
bSc:function bSc(){},
bSd:function bSd(d){this.a=d},
bS5:function bS5(d){this.a=d},
bS6:function bS6(d){this.a=d},
bS7:function bS7(d){this.a=d},
bS4:function bS4(d,e){this.a=d
this.b=e},
bS8:function bS8(d){this.a=d},
bjx:function bjx(d,e){this.b=d
this.a=e},
drf:function drf(){},
a24:function a24(d,e){this.a=d
this.b=e},
alW:function alW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alX:function alX(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.q8$=e
_.LW$=f
_.an3$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
bRQ:function bRQ(d){this.a=d},
bRP:function bRP(){},
bRO:function bRO(){},
bRI:function bRI(){},
bRJ:function bRJ(){},
bRN:function bRN(d,e,f){this.a=d
this.b=e
this.c=f},
bRM:function bRM(d){this.a=d},
bRK:function bRK(d,e){this.a=d
this.b=e},
bRL:function bRL(d){this.a=d},
biY:function biY(d,e){this.b=d
this.a=e},
aBA:function aBA(){},
bgv:function bgv(){},
aBC:function aBC(){},
bgw:function bgw(){},
aBD:function aBD(){},
bgx:function bgx(){},
uv(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j7,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.q(u,A.A(v,B.l,u,B.e,B.Q,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.n),u,u,u,u,B.Oh,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hlh(d,e,f,g,h,i,j){return new C.alY(i,h,d,j,e,f,g,null)},
a6v:function a6v(d,e){this.c=d
this.a=e},
bj4:function bj4(d){this.a=d},
tG:function tG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bRH:function bRH(d){this.a=d},
Ir:function Ir(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Wh:function Wh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blR:function blR(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e1n:function e1n(d,e){this.a=d
this.b=e},
e1o:function e1o(d){this.a=d},
e1p:function e1p(d,e){this.a=d
this.b=e},
e1l:function e1l(d){this.a=d},
e1m:function e1m(d){this.a=d},
e1k:function e1k(d){this.a=d},
e1i:function e1i(d){this.a=d},
e1j:function e1j(d){this.a=d},
e1h:function e1h(d,e){this.a=d
this.b=e},
e1q:function e1q(d){this.a=d},
e1r:function e1r(d,e){this.a=d
this.b=e},
e1s:function e1s(d,e){this.a=d
this.b=e},
e1t:function e1t(d,e){this.a=d
this.b=e},
e1w:function e1w(d,e){this.a=d
this.b=e},
e1x:function e1x(d,e){this.a=d
this.b=e},
e1y:function e1y(d,e){this.a=d
this.b=e},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1A:function e1A(d,e){this.a=d
this.b=e},
e1B:function e1B(d,e,f){this.a=d
this.b=e
this.c=f},
e1C:function e1C(d,e){this.a=d
this.b=e},
e1D:function e1D(d,e){this.a=d
this.b=e},
e1u:function e1u(d){this.a=d},
e1v:function e1v(d){this.a=d},
a_X:function a_X(d,e){this.a=d
this.b=e},
alY:function alY(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
alZ:function alZ(d){var _=this
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
bS1:function bS1(d){this.a=d},
bS2:function bS2(d){this.a=d},
bS0:function bS0(d){this.a=d},
bRS:function bRS(d){this.a=d},
bRT:function bRT(d){this.a=d},
bRR:function bRR(d){this.a=d},
bRY:function bRY(d,e,f){this.a=d
this.b=e
this.c=f},
bRZ:function bRZ(d){this.a=d},
bRV:function bRV(d,e){this.a=d
this.b=e},
bRW:function bRW(d,e,f){this.a=d
this.b=e
this.c=f},
bS_:function bS_(){},
bRX:function bRX(d,e){this.a=d
this.b=e},
bRU:function bRU(d){this.a=d},
TY:function TY(d,e){this.c=d
this.a=e},
alV:function alV(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bRs:function bRs(d){this.a=d},
bRt:function bRt(d){this.a=d},
bRD:function bRD(){},
bRC:function bRC(d,e,f){this.a=d
this.b=e
this.c=f},
bRx:function bRx(d,e){this.a=d
this.b=e},
bRw:function bRw(d,e){this.a=d
this.b=e},
bRy:function bRy(d){this.a=d},
bRz:function bRz(d,e){this.a=d
this.b=e},
bRA:function bRA(d,e){this.a=d
this.b=e},
bRv:function bRv(d,e){this.a=d
this.b=e},
bRB:function bRB(d,e,f){this.a=d
this.b=e
this.c=f},
bRu:function bRu(d,e){this.a=d
this.b=e},
ihL(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aiU(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fGZ(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yZ)m.push(l===D.wr?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cF(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cF(k)
h=i==null?a2:i.b[1]
l=B.a.i(l)
i=l.length===0
if(!i){g=B.a.i(u.x)
g=g.length!==0?" in "+g:""
m.push("born "+l+g)}if(i&&B.a.i(u.x).length!==0)m.push("from "+B.a.i(u.x))
l=B.a.i(k)
if(l.length!==0)m.push("died "+l)
l=j!=null
if(l&&h==null)m.push("about "+(t-A.iX(j,a2,a2))+" years old")
if(l&&h!=null)m.push("lived about "+(A.iX(h,a2,a2)-A.iX(j,a2,a2))+" years")
l=B.a.i(u.z)
if(l.length!==0)m.push("work: "+l)
f=s.$1(u)
if(f!=null)m.push("married to "+w.h(0,f).b)
e=u.d
if(e!=null&&w.al(0,e)&&e!==f){l=w.h(0,e)
l.toString
d=s.$1(l)
l=w.h(0,e).b
k=d!=null&&d!==u.a?" and "+w.h(0,d).b:""
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fGX(u,f),p),new C.fGY(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aO(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aO(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aC(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ihM(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aiU(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fH3(v,e)
q=new C.fH1(v)
p=A.T(w,x.S)
for(u=0;d=e.length,u<d;e.length===t||(0,A.J)(e),++u){s=e[u]
d=q.$1(s)
d.toString
p.n(0,s.a,d)}for(u=0;w=e.length,u<w;e.length===d||(0,A.J)(e),++u){s=e[u]
o=r.$1(s)
if(o!=null&&s.d===o){w=p.h(0,o)
w.toString
p.n(0,s.a,w)}}for(u=0;u<e.length;e.length===w||(0,A.J)(e),++u){s=e[u]
d=s.d
if(d!=null&&v.al(0,d))continue
o=r.$1(s)
if(o==null)continue
d=v.h(0,o).d
if(d!=null&&v.al(0,d)&&d!==s.a){d=p.h(0,o)
d.toString
p.n(0,s.a,d)}}d=p.$ti.k("b7<2>")
d=A.d2(new A.b7(p,d),d.k("M.E"))
n=A.C(d,A.a4(d).k("ch.E"))
B.d.fi(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eF(l,new C.fH2(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.al(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aO(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i2t(d,e,f,g){var w,v,u=C.ihN(d,e)
if(u<=0||f.length<=u)return new A.afj(!1,D.Dx,f)
if(g.q(0,e.a))return new A.afj(!1,D.Dx,f)
w=A.U(f).c
v=A.cW(f,0,A.dA(u,"count",x.S),w).dn(0)
return new A.afj(!0,A.cW(f,u,null,w).dn(0),v)},
i2u(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aiU(d3),d2=d1.length
if(d2===0)return D.htU
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dgK(t))}s=new C.dh0(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dgT(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dgS(r)
l=A.T(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c8(l.c3(0,k,new C.dgL()),o)}h=new C.dgR(s)
g=new C.dgQ(l,r)
p=v.$ti.k("b7<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b7(v,p),new C.dgM(h),o),o.k("M.E"))
e=f.length===0?new A.b7(v,p).gH(0):B.d.gH(f)
p=f.length
if(p>1)for(d=-1,u=0;u<f.length;f.length===p||(0,A.J)(f),++u){t=f[u]
a0=g.$2(t.a,A.aR(w))
if(a0>d){d=a0
e=t}}a1=A.aR(w)
p=x.S
a2=A.T(w,p)
a3=A.T(w,w)
a4=A.T(w,d2)
d2=x.i
a5=A.T(w,d2)
a6=A.T(w,x.d9)
a7=A.T(w,d2)
a8=A.a([],x.s)
a9=new C.dgZ(new C.dgV(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.gam2(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ez([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.al(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nA(J.dI(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dgJ(a2,new C.dh_(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.J)(a8),++u){b8=a8[u]
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
d2=b4.$ti.k("cx<1>")
d2=A.C(new A.cx(b4,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
c3=b4.h(0,b8)
o=c3.a
j=c3.b
b4.n(0,b8,new C.GA(o,new A.o(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.KT(c5.a,new A.o(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dgN(c6,b4))
for(d2=new A.ck(a4,a4.$ti.k("ck<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aU(c7.b);j.C();){i=j.gR(j)
if(b6.al(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.o(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eF(j,new C.dgO(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dgP())
c6.push(new C.aKH(new A.o(c9,b4.h(0,c8).b.b+112),B.H,!1,o))}return new C.bgB(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hAj(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cF(d)
return w==null?null:w.b[1]},
hus(d,e,f,g,h,i,j,k,l,m,n){return new C.a09(k,f,j,e,l,n,m,d,g,h,i,null)},
aDA(d,e,f,g,h,i,j){return new C.bkn(i,d,e,f,j,h,g,null)},
ar0:function ar0(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF7:function aF7(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e32:function e32(d){this.a=d},
e31:function e31(d){this.a=d},
e34:function e34(d,e){this.a=d
this.b=e},
e35:function e35(d,e){this.a=d
this.b=e},
e36:function e36(d){this.a=d},
e30:function e30(d,e){this.a=d
this.b=e},
e33:function e33(d){this.a=d},
e38:function e38(d){this.a=d},
e37:function e37(d,e){this.a=d
this.b=e},
aqV:function aqV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF4:function aF4(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e2t:function e2t(d){this.a=d},
e2r:function e2r(d){this.a=d},
e2s:function e2s(d){this.a=d},
e2u:function e2u(d,e){this.a=d
this.b=e},
e2o:function e2o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1Q:function e1Q(d){this.a=d},
e1R:function e1R(d,e){this.a=d
this.b=e},
e27:function e27(d){this.a=d},
e25:function e25(d){this.a=d},
e26:function e26(d,e){this.a=d
this.b=e},
e28:function e28(d){this.a=d},
e29:function e29(d,e){this.a=d
this.b=e},
e2n:function e2n(d,e){this.a=d
this.b=e},
e24:function e24(d){this.a=d},
e23:function e23(d){this.a=d},
e22:function e22(d,e){this.a=d
this.b=e},
e2k:function e2k(){},
e2l:function e2l(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2j:function e2j(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2d:function e2d(d){this.a=d},
e2e:function e2e(d,e,f){this.a=d
this.b=e
this.c=f},
e2c:function e2c(d,e){this.a=d
this.b=e},
e2f:function e2f(d,e){this.a=d
this.b=e},
e2a:function e2a(d,e){this.a=d
this.b=e},
e2b:function e2b(){},
e2g:function e2g(d,e){this.a=d
this.b=e},
e2h:function e2h(d){this.a=d},
e2i:function e2i(d,e){this.a=d
this.b=e},
e2m:function e2m(d,e){this.a=d
this.b=e},
e1E:function e1E(d,e){this.a=d
this.b=e},
e1F:function e1F(d,e){this.a=d
this.b=e},
e2w:function e2w(d,e,f){this.a=d
this.b=e
this.c=f},
e2q:function e2q(d,e,f){this.a=d
this.b=e
this.c=f},
e2p:function e2p(d){this.a=d},
e1G:function e1G(d){this.a=d},
e1H:function e1H(d){this.a=d},
e1I:function e1I(){},
e1J:function e1J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1M:function e1M(d,e){this.a=d
this.b=e},
e1L:function e1L(d){this.a=d},
e1O:function e1O(d,e){this.a=d
this.b=e},
e1K:function e1K(d){this.a=d},
e2v:function e2v(d){this.a=d},
e2_:function e2_(){},
e20:function e20(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1Z:function e1Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1V:function e1V(d,e,f){this.a=d
this.b=e
this.c=f},
e1U:function e1U(d,e,f){this.a=d
this.b=e
this.c=f},
e1S:function e1S(d,e){this.a=d
this.b=e},
e1W:function e1W(d){this.a=d},
e1X:function e1X(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1T:function e1T(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e21:function e21(d,e){this.a=d
this.b=e},
e2D:function e2D(){},
e2E:function e2E(d,e){this.a=d
this.b=e},
e2F:function e2F(d){this.a=d},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2z:function e2z(d){this.a=d},
e2x:function e2x(d,e){this.a=d
this.b=e},
e2A:function e2A(d,e){this.a=d
this.b=e},
e2B:function e2B(d,e){this.a=d
this.b=e},
e2C:function e2C(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2H:function e2H(d){this.a=d},
e2y:function e2y(d){this.a=d},
e1P:function e1P(d){this.a=d},
bgz:function bgz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dgH:function dgH(d){this.a=d},
dgG:function dgG(d,e){this.a=d
this.b=e},
dgI:function dgI(d){this.a=d},
dgF:function dgF(d,e){this.a=d
this.b=e},
fGZ:function fGZ(d,e){this.a=d
this.b=e},
fH_:function fH_(d){this.a=d},
fH0:function fH0(){},
fGX:function fGX(d,e){this.a=d
this.b=e},
fGY:function fGY(){},
fH3:function fH3(d,e){this.a=d
this.b=e},
fH4:function fH4(d){this.a=d},
fH5:function fH5(){},
fH1:function fH1(d){this.a=d},
fH2:function fH2(d,e){this.a=d
this.b=e},
KT:function KT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GA:function GA(d,e){this.a=d
this.b=e},
bgB:function bgB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dgK:function dgK(d){this.a=d},
dh0:function dh0(d){this.a=d},
dgT:function dgT(d){this.a=d},
dgU:function dgU(){},
dgS:function dgS(d){this.a=d},
dgL:function dgL(){},
dgR:function dgR(d){this.a=d},
dgQ:function dgQ(d,e){this.a=d
this.b=e},
dgM:function dgM(d){this.a=d},
dgV:function dgV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dgW:function dgW(d){this.a=d},
dgX:function dgX(d){this.a=d},
dgY:function dgY(){},
dgZ:function dgZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dh_:function dh_(){},
dgJ:function dgJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
dgN:function dgN(d,e){this.a=d
this.b=e},
dgO:function dgO(d){this.a=d},
dgP:function dgP(){},
aKH:function aKH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgC:function bgC(d,e){this.b=d
this.a=e},
dh1:function dh1(){},
dh2:function dh2(d){this.a=d},
dh3:function dh3(d){this.a=d},
dh4:function dh4(){},
bko:function bko(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfE:function bfE(d,e){this.b=d
this.a=e},
byo:function byo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fmr:function fmr(d){this.a=d},
bnJ:function bnJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eXu:function eXu(d){this.a=d},
eXt:function eXt(d,e){this.a=d
this.b=e},
a09:function a09(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDy:function aDy(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dwY:function dwY(d,e){this.a=d
this.b=e},
dwX:function dwX(d){this.a=d},
dwV:function dwV(d){this.a=d},
dwW:function dwW(d){this.a=d},
dx6:function dx6(d){this.a=d},
dx7:function dx7(d){this.a=d},
dx5:function dx5(d,e){this.a=d
this.b=e},
dx8:function dx8(){},
dxb:function dxb(d){this.a=d},
dx4:function dx4(d,e){this.a=d
this.b=e},
dxa:function dxa(){},
dxc:function dxc(d){this.a=d},
dx3:function dx3(d,e){this.a=d
this.b=e},
dxd:function dxd(d){this.a=d},
dx2:function dx2(d){this.a=d},
dxe:function dxe(d){this.a=d},
dx1:function dx1(d){this.a=d},
dxf:function dxf(d){this.a=d},
dx0:function dx0(d){this.a=d},
dxg:function dxg(d){this.a=d},
dx_:function dx_(d){this.a=d},
dxh:function dxh(d){this.a=d},
dwZ:function dwZ(d,e){this.a=d
this.b=e},
dx9:function dx9(d){this.a=d},
aed:function aed(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkn:function bkn(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aec:function aec(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bkm:function bkm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxi:function dxi(d){this.a=d},
dxj:function dxj(d,e){this.a=d
this.b=e},
aDz:function aDz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJJ:function aJJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aee:function aee(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxs:function dxs(d){this.a=d},
Gw:function Gw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hpk(d){var w=d.T,v=x.N
return w.jq(w,new C.ceM(),v,v)},
hUS(d){var w=d.bF
if(w>=0)return w
return 5},
hpm(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hpk(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hpl(d,e){var w=C.hpm(d,e)
if(w!=null&&w.cf(new A.V(Date.now(),0,!1)))return!0
return!1},
hUT(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a3(C.hpk(d),w,w)
u=C.hpm(d,e)
t=u!=null&&u.cf(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dw(30,0,0,0,0,0).a).aa().ag())
d.T=v},
b17(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b17=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.lz(t,B.Jr),$async$b17)
case 3:if(l){u=!0
w=1
break}u=A.lc(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Jr,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b17,v)},
ceM:function ceM(){},
hUQ(){var w,v=$.os(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.he(u)},
Jn(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jn=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$Jn)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bN),$async$Jn)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"codes")
if(x.f.b(q)){o=A.a3(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ab(m)
$.an.$1("[family tree sync codes] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jn,v)},
a8b(d){return C.hUR(d)},
hUR(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8b=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$a8b)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.I(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cM,null),$async$a8b)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.an.$1("[family tree sync codes] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$a8b,v)},
ceL(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$ceL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jn(),$async$ceL)
case 3:t=m.i8(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
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
return A.i($async$ceL,v)},
Oi(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Oi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.ceL(d),$async$Oi)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jn(),$async$Oi)
case 6:s=f
r=J.a7(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dO(A.a3(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8b(s),$async$Oi)
case 9:case 8:u=t
w=1
break
case 5:n=C.hUQ()
w=10
return A.b(C.Jn(),$async$Oi)
case 10:s=f
J.aK(s,n,A.I(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8b(s),$async$Oi)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Oi,v)},
b16(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b16=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jn(),$async$b16)
case 3:t=f
for(s=J.dn(t),r=s.gdO(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8b(t),$async$b16)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b16,v)},
a8c(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8c=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ar_(d,e),$async$a8c)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Oi(d),$async$a8c)
case 7:w=4
break
case 5:w=8
return A.b(C.b16(d),$async$a8c)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a8c,v)},
aqU(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aqU=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.ar_(f,e),$async$aqU)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c9(),$async$aqU)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jn(),$async$aqU)
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
return A.i($async$aqU,v)},
b15(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b15=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c9(),$async$b15)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jn(),$async$b15)
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
return A.i($async$b15,v)},
hUU(){var w,v=$.os(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.he(u)},
aqX(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aqX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$aqX)
case 3:if(!g){u=null
w=1
break}t=C.hUU()
w=4
return A.b(A.Wi(),$async$aqX)
case 4:s=g
r=B.dS.aN(B.Y.az(d.f2(),null))
r=B.cP.gcu().aN(r)
q=e?999:2
J.aK(s,t,A.I(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8d(s),$async$aqX)
case 5:p=e?999:2
u=new A.a1k("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqX,v)},
aqW(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqW=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.Wi(),$async$aqW)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aJ(m.h(n,"usesRemaining"))
k=l==null?null:B.j.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b15(J.k(l==null?"":l),j),$async$aqW)
case 4:if(!a0)$.an.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.ca.cI(0,B.cI.aN(t))
s=C.hpn(r)}catch(f){q=A.ab(f)
$.an.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dO(A.a3(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8d(p),$async$aqW)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqW,v)},
hpn(d){var w,v,u,t,s=null
try{w=B.Y.aQ(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hUW(A.a3(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.an.$1("[family tree sync] parse: "+A.w(v))
return s}},
h8o(d){var w=0,v=A.j(x.m),u,t,s
var $async$h8o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aqW(t[1])
w=1
break}u=null
w=1
break}u=C.hpn(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h8o,v)},
hUW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dd(v,x.f)
u=A.cF(u,new C.ceO(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.ceP(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i8(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dd(l,u)
n=A.cF(n,new C.ceQ(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.ceR(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqY(h,w,s,r,q)},
ar_(d,e){var w=0,v=A.j(x.y),u,t
var $async$ar_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.O9(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bo(d),$async$ar_)
case 3:u=t.cJ(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar_,v)},
ceX(d){var w=0,v=A.j(x.bC),u,t,s
var $async$ceX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bo(d),$async$ceX)
case 3:t=s.b8(f,new C.ceY(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.ceZ())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ceX,v)},
Wj(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Wj=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ar_(e,d),$async$Wj)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Oi(e),$async$Wj)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bo(e),$async$Wj)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.ceV(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gau(r)){u=null
w=1
break}t=t.dM(r,new C.ceW(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LE(e,o),$async$Wj)
case 14:n=i
if(J.cJ(n))q.n(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.aqY(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wj,v)},
b1a(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1a=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wj(d,e,f,g),$async$b1a)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hf(A.KP(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1a,v)},
b19(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b19=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wj(d,e,f,g),$async$b19)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aqX(r,f),$async$b19)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aHJ(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b19,v)},
Wk(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wk=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h8o(a0),$async$Wk)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aqU(g.a,d,e,f,s,r),$async$Wk)
case 6:if(!a2){if(r)throw A.W(A.bc("This backup expired or the sender's tree is no longer available."))
throw A.W(A.bc("Backup code is locked. Create a family tree or renew your advisor pass to restore."))}case 5:q=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
p=g.c,o=p.length,n=g.e,m=0,l=0,k=0
case 7:if(!(k<p.length)){w=9
break}j=p[k]
i=j.a
if(i.length===0){w=8
break}w=q?10:11
break
case 10:w=12
return A.b(C.bDL(e,j),$async$Wk)
case 12:case 11:w=13
return A.b(C.aiE(e,j,s),$async$Wk)
case 13:h=n.h(0,i)
w=h!=null&&J.cJ(h)?14:15
break
case 14:w=16
return A.b(C.Bz(e,i,h),$async$Wk)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.brs(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wk,v)},
aqY:function aqY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ceT:function ceT(){},
ceU:function ceU(){},
ceS:function ceS(){},
ceO:function ceO(){},
ceP:function ceP(){},
ceQ:function ceQ(){},
ceR:function ceR(){},
ceY:function ceY(){},
ceZ:function ceZ(){},
ceV:function ceV(d){this.a=d},
ceW:function ceW(d){this.a=d},
hhj(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hy(d,new C.aqZ(w,e,g,i,f,h,null),!0,null,x.H)},
dgE(d,e,f,g,h,i,j,k){return new C.bgy(i,e,k,j,g,f,h,d,null)},
aqZ:function aqZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aF6:function aF6(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e2Q:function e2Q(d){this.a=d},
e2R:function e2R(d,e,f){this.a=d
this.b=e
this.c=f},
e2V:function e2V(d,e){this.a=d
this.b=e},
e2W:function e2W(d){this.a=d},
e2N:function e2N(d){this.a=d},
e2O:function e2O(d,e){this.a=d
this.b=e},
e2P:function e2P(d,e){this.a=d
this.b=e},
e2U:function e2U(d){this.a=d},
e2T:function e2T(d,e){this.a=d
this.b=e},
e2S:function e2S(){},
e2Y:function e2Y(d){this.a=d},
e2Z:function e2Z(d,e){this.a=d
this.b=e},
e2X:function e2X(d,e){this.a=d
this.b=e},
dh5:function dh5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgA:function bgA(d,e,f){this.d=d
this.e=e
this.a=f},
adt:function adt(d,e,f){this.c=d
this.d=e
this.a=f},
bgy:function bgy(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgD:function bgD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0t:function a0t(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aF5:function aF5(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e2I:function e2I(d,e){this.a=d
this.b=e},
e2J:function e2J(d){this.a=d},
e2K:function e2K(d){this.a=d},
e2L:function e2L(d){this.a=d},
e2M:function e2M(d){this.a=d},
a0u:function a0u(d){this.a=d},
blS:function blS(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e3_:function e3_(d,e){this.a=d
this.b=e},
b_F(d,e){return new C.b_E(d,e,null)},
b_E:function b_E(d,e,f){this.c=d
this.d=e
this.a=f},
ikg(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
isl(d){return A.bT(B.L,null,new C.fXP(new C.ui(A.S(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hrh(d,e){return new C.au2(e,d,null)},
aS8(d,e,f,g,h,i,j){var w=C.ikg(i)
if(w!=null)return A.by(e,new A.a5(j,f,new C.a7h(w,!0,null),null),B.aq)
return N.aRv(e,B.c_,f,g,h,i,j)},
lW:function lW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7h:function a7h(d,e,f){this.c=d
this.d=e
this.a=f},
blw:function blw(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
dP4:function dP4(d){this.a=d},
dP5:function dP5(){},
dP6:function dP6(d,e){this.a=d
this.b=e},
blv:function blv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fXP:function fXP(d){this.a=d},
fXO:function fXO(d,e){this.a=d
this.b=e},
fXN:function fXN(d,e){this.a=d
this.b=e},
fXM:function fXM(d,e){this.a=d
this.b=e},
au2:function au2(d,e,f){this.c=d
this.d=e
this.a=f},
cog:function cog(d,e){this.a=d
this.b=e},
aN8:function aN8(){},
is6(d){var w=null
return A.cf(w,w,!0,w,new C.fXc(),d,w,!0,!0,x.e2)},
itk(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.h3R(h,g,f,e),d,w,!0,!0,x.N)},
is8(d,e){var w=null
return A.cf(w,w,!0,w,new C.fXg(e),d,w,!0,!0,x.dY)},
is7(d){var w=null
return A.cf(w,w,!0,w,new C.fXf(),d,w,!0,!0,x.c5)},
aV5:function aV5(d,e){this.a=d
this.b=e},
aV4:function aV4(d){this.a=d},
aT7:function aT7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXc:function fXc(){},
h3R:function h3R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXg:function fXg(d){this.a=d},
fXf:function fXf(){},
a_7:function a_7(d,e){this.c=d
this.a=e},
aAi:function aAi(){var _=this
_.d=$
_.c=_.a=_.e=null},
d8g:function d8g(d){this.a=d},
d8h:function d8h(d){this.a=d},
d8f:function d8f(d,e){this.a=d
this.b=e},
d8i:function d8i(d){this.a=d},
d8j:function d8j(d){this.a=d},
a_6:function a_6(d){this.a=d},
aAh:function aAh(){this.d=$
this.c=this.a=null},
d8c:function d8c(d){this.a=d},
d8d:function d8d(d){this.a=d},
d8e:function d8e(d){this.a=d},
ZE:function ZE(d){this.a=d},
az0:function az0(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cGD:function cGD(){},
cGJ:function cGJ(d){this.a=d},
cGK:function cGK(d){this.a=d},
cGL:function cGL(d){this.a=d},
cGI:function cGI(){},
cGM:function cGM(d){this.a=d},
cGN:function cGN(d){this.a=d},
cGH:function cGH(){},
cGO:function cGO(d,e){this.a=d
this.b=e},
cGG:function cGG(d,e){this.a=d
this.b=e},
cGE:function cGE(d,e){this.a=d
this.b=e},
cGP:function cGP(d){this.a=d},
cGF:function cGF(){},
cGQ:function cGQ(d){this.a=d},
a2g:function a2g(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
byg:function byg(){this.d=$
this.c=this.a=null},
flX:function flX(d,e){this.a=d
this.b=e},
flY:function flY(d){this.a=d},
flZ:function flZ(d,e){this.a=d
this.b=e},
acw:function acw(d,e){this.a=d
this.b=e},
Gk:function Gk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bye:function bye(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
flV:function flV(d,e){this.a=d
this.b=e},
ayU:function ayU(d,e){this.c=d
this.a=e},
byf:function byf(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
flW:function flW(d){this.a=d},
byd:function byd(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPg:function aPg(){},
aPh:function aPh(){},
bFJ(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.j.bh(u),s=B.o.D(B.j.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p5(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fVA(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.u(s),2,"0")
n.push(A.cQ(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Z1(A.cQ(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aRL(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aRL=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l8(85,1280,B.eO),$async$aRL)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fp(),$async$aRL)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hrg()
w=9
return A.b(C.cof(q,r),$async$aRL)
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
$.an.$1("[worksheets] pick photo failed: "+A.w(o))
u=null
w=1
break
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aRL,v)},
aS6(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aS6=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.coc(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gan(g.split(",")):g
p=B.cI.aN(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hg(p,!0,null,o).dh(0,B.h3),$async$aS6)
case 9:n=a1
w=10
return A.b(n.lb(),$async$aS6)
case 10:m=a1
w=11
return A.b(m.b.hs(B.hh),$async$aS6)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eT(B.dN.gaU(l))
k="data:image/png;base64,"+B.cP.gcu().aN(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.j.V(o*0.72)
w=7
break
case 8:t=2
w=6
break
case 4:t=3
f=s.pop()
j=A.ab(f)
$.an.$1("[worksheets] thumbnail shrink failed: "+A.w(j))
w=6
break
case 3:w=2
break
case 6:u=g
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aS6,v)},
fVA:function fVA(){},
ui:function ui(d){this.a=d},
au1:function au1(d,e,f){this.c=d
this.d=e
this.a=f},
aGA:function aGA(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eUE:function eUE(d,e){this.a=d
this.b=e},
eUv:function eUv(d){this.a=d},
eUw:function eUw(d){this.a=d},
eUC:function eUC(d,e){this.a=d
this.b=e},
eUB:function eUB(d,e){this.a=d
this.b=e},
eUy:function eUy(d,e){this.a=d
this.b=e},
eUx:function eUx(d,e){this.a=d
this.b=e},
eUz:function eUz(d){this.a=d},
eUA:function eUA(d,e){this.a=d
this.b=e},
eUD:function eUD(d,e){this.a=d
this.b=e},
eUq:function eUq(d,e){this.a=d
this.b=e},
eUu:function eUu(d){this.a=d},
eUt:function eUt(d,e){this.a=d
this.b=e},
eUs:function eUs(d){this.a=d},
eUF:function eUF(d,e){this.a=d
this.b=e},
eUG:function eUG(d,e){this.a=d
this.b=e},
eUr:function eUr(d,e){this.a=d
this.b=e},
hEo(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.I(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fVB(d,e,f){var w=0,v=A.j(x.N),u
var $async$fVB=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Y.az(C.hEo(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVB,v)},
bFL(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bFL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fVB(!0,d,e),$async$bFL)
case 4:w=3
return A.b(r.au_(g,d,e.a),$async$bFL)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dS.aN(B.Y.az(C.hEo(d,e,null),null))
u="NGMY_WS:"+B.kH.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFL,v)},
hvR(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hgV(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d5(s,"NGMYWSSYNC2|"))return!0
if(J.d5(s,"NGMY_WS:"))return!0
if(J.eG(s,t))return!0
if(J.d5(s,"{"))try{w=B.Y.aQ(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ipq(d){var w,v,u,t=C.hvR(d)
if(t==null)return null
if(C.hgV(t))return t
w=B.a.co(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hgV(v))return v}u=B.a.co(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hgV(v))return v}return null},
hgU(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d5(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d5(q,"NGMY_WS:")){v=B.ca.cI(0,B.cI.aN(J.nq(q,8)))
w=t.a(B.Y.aQ(0,v,r))}else w=t.a(B.Y.aQ(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hb1(A.a3(u,x.N,x.z))
return t}catch(s){return r}},
bFK(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bFK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.atZ(t[1]),$async$bFK)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hgU(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hgU(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFK,v)},
hgT(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lD(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bFg(){var w=0,v=A.j(x.o),u,t
var $async$bFg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hs(),$async$bFg)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hgU(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFg,v)},
hFp(d,e,f,g){return A.bT(B.L,null,new C.h3E(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h3E:function h3E(d,e,f){this.a=d
this.b=e
this.c=f},
aez:function aez(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eUI:function eUI(d,e){this.a=d
this.b=e},
eUJ:function eUJ(d,e){this.a=d
this.b=e},
eUK:function eUK(d,e){this.a=d
this.b=e},
eUL:function eUL(d,e){this.a=d
this.b=e},
eUH:function eUH(d){this.a=d},
atW:function atW(d,e,f){this.c=d
this.d=e
this.a=f},
bne:function bne(){var _=this
_.c=_.a=_.e=_.d=null},
eUl:function eUl(d,e){this.a=d
this.b=e},
eUm:function eUm(d){this.a=d},
eUn:function eUn(d){this.a=d},
au0:function au0(d){this.a=d},
aGz:function aGz(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eUp:function eUp(d){this.a=d},
eUo:function eUo(d){this.a=d},
hY9(d,e,f,g,h){return new C.OX(h,g,d,e,f,null)},
aLt:function aLt(d,e){this.a=d
this.b=e},
OX:function OX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGB:function aGB(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eV7:function eV7(){},
eV3:function eV3(d,e){this.a=d
this.b=e},
eV4:function eV4(d){this.a=d},
eUP:function eUP(d){this.a=d},
eUN:function eUN(d){this.a=d},
eUO:function eUO(d){this.a=d},
eUY:function eUY(d,e){this.a=d
this.b=e},
eUV:function eUV(d,e){this.a=d
this.b=e},
eUW:function eUW(d,e){this.a=d
this.b=e},
eUX:function eUX(d,e,f){this.a=d
this.b=e
this.c=f},
eUT:function eUT(d,e,f){this.a=d
this.b=e
this.c=f},
eUR:function eUR(d){this.a=d},
eUS:function eUS(d){this.a=d},
eUU:function eUU(d){this.a=d},
eVa:function eVa(d){this.a=d},
eV9:function eV9(d){this.a=d},
eVb:function eVb(d){this.a=d},
eV8:function eV8(d){this.a=d},
eUM:function eUM(d){this.a=d},
eUQ:function eUQ(d,e){this.a=d
this.b=e},
eV6:function eV6(d,e){this.a=d
this.b=e},
eV5:function eV5(d,e){this.a=d
this.b=e},
eV0:function eV0(d){this.a=d},
eV1:function eV1(d){this.a=d},
eV2:function eV2(d,e){this.a=d
this.b=e},
eV_:function eV_(d,e){this.a=d
this.b=e},
eUZ:function eUZ(d,e,f){this.a=d
this.b=e
this.c=f},
bA1:function bA1(){},
Bc(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ah3(d,e,f){return C.idy(d,e,f)},
idy(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$ah3=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$ah3)
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
$.an.$1("[worksheets] setString failed for "+e+": "+A.w(r))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ah3,v)},
ah2(d,e){return C.idx(d,e)},
idx(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$ah2=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$ah2)
case 6:u=1
w=5
break
case 3:u=2
q=t.pop()
s=A.ab(q)
$.an.$1("[worksheets] remove failed for "+e+": "+A.w(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ah2,v)},
icn(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Tz(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bCK(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bCK=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b4n(q),$async$bCK)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aS6(q,!1),$async$bCK)
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
return A.i($async$bCK,v)},
hLz(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aJ(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.ro(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.ro(p,J.k(u==null?"":u),1,o,q)},
hb1(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dd(s,x.f)
w=A.cF(w,new C.cFV(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cFW(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lD(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ihH(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wr
case"female":case"f":return D.ot
default:return D.yZ}},
hAU(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hli(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ihH(v==null?j:J.k(v))
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
m=m==null?j:B.j.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aJ(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.j.M(k)
return new C.hV(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ihJ(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.OD
case"viewer":return D.kV
default:return D.uA}},
ihK(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hh(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQS(d,e){return B.a.i(e.toLowerCase())===C.Hh(d,e)&&d.y!==D.kV},
uw(d,e){var w,v=d.y
if(v===D.kV)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hh(d,e))return!0
if(v===D.OD)return!0
v=d.e
return new A.N(v,A.hh_(),A.U(v).k("N<1,n>")).q(0,w)},
ih3(d){return J.dI(d,new C.fFR()).gI(0)},
h4p(d){var w=0,v=A.j(x.y),u,t
var $async$h4p=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bo(d),$async$h4p)
case 3:u=t.rj(f,new C.h4q(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h4p,v)},
bDL(d,e){var w=0,v=A.j(x.H),u,t
var $async$bDL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bo(d),$async$bDL)
case 3:t=g
if(J.rj(t,new C.fDp(e))){w=1
break}if(C.ih3(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bDL,v)},
am4(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dd(h,x.f)
w=A.cF(w,new C.bSt(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bSu(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bSv(),x.N)
t=A.C(w,w.$ti.k("ak.E"))}else t=A.a([],x.s)
w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
s=d.h(0,"code")
s=J.k(s==null?"":s)
r=J.z(d.h(0,"isPrivate"),!1)
q=d.h(0,"createdAt")
q=A.bj(J.k(q==null?"":q))
if(q==null)q=new A.V(Date.now(),0,!1)
p=A.aJ(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.j.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ihJ(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aU(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cq)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a3(i,k,j))}return new C.kU(w,v,s,!r,t,g,q,p,o,n,m)},
hB8(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aC(v,0,8)},
Dz(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Dz=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sw(d),$async$Dz)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Dz)
case 4:t=f
w=5
return A.b(t.a7b(0),$async$Dz)
case 5:w=6
return A.b(C.ftK(t,l),$async$Dz)
case 6:s=f
if(J.cJ(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aS(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hwr(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p4(l,n),$async$Dz)
case 11:u=n
w=1
break
case 10:case 8:m=A.aS(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hwr(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p4(l,n),$async$Dz)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Dz,v)},
ftK(d,e){return C.i9K(d,e)},
i9K(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ftK=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aS(a4.h(a3,"ngmy_worksheets_index_v3_"+C.Bc(a9)))
if(a5==null||B.a.i(a5).length===0){u=A.a([],x.D)
w=1
break}t=4
r=B.Y.aQ(0,a5,null)
if(!x.j.b(r)){a3=A.a([],x.D)
u=a3
w=1
break}q=A.a([],x.D)
p=!1
f=J.aU(r),e=x.N,d=x.z,a0=x.f
case 7:if(!f.C()){w=8
break}o=f.gR(f)
n=B.a.i(J.k(o))
if(J.ad(n)===0){w=7
break}m=A.aS(a4.h(a3,"ngmy_worksheet_item_v3_"+C.Bc(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Y.aQ(0,m,null)
if(!a0.b(l)){w=7
break}k=C.hb1(A.a3(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aS(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bc(a9)+"_"+n))
i=C.icn(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4n(h),$async$ftK)
case 17:g=b1
if(g!=null){i=i.Tz(g)
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
case 8:J.SF(q,new C.ftL())
if(p&&J.ad(q)!==0)C.p4(a9,q)
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
return A.i($async$ftK,v)},
bEc(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bEc=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sw(d),$async$bEc)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Dz(r),$async$bEc)
case 4:t=p.aU(g)
case 5:if(!t.C()){w=6
break}s=t.gR(t)
if(s.a===q){u=s
w=1
break}w=5
break
case 6:u=null
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bEc,v)},
hwr(d){var w,v,u,t
try{w=B.Y.aQ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dd(w,x.f)
v=A.cF(v,new C.fpv(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fpw(),u),u.k("M.E"))
B.d.aZ(v,new C.fpx())
return v}catch(t){v=A.a([],x.D)
return v}},
p4(d,e){return C.irW(d,e)},
irW(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p4=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Sw(b2),$async$p4)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$p4)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bc(a8)
p=A.aS(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.Y.aQ(0,p,null)),new C.fX0(),a2).fM(0)
a2=J.b8(b3,new C.fX1(),a2).bY(0,new C.fX2())
n=A.d2(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eG(n,m)?17:18
break
case 17:a5=C.Bc(a8)
l=A.aS(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9u(l),$async$p4)
case 19:t=21
a5=C.Bc(a8)
k=A.aS(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Y.aQ(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9u(a5==null?null:J.k(a5)),$async$p4)
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
return A.b(C.ah2(r,"ngmy_worksheet_item_v3_"+C.Bc(a8)+"_"+m),$async$p4)
case 29:w=30
return A.b(C.ah2(r,"ngmy_worksheet_thumb_v3_"+C.Bc(a8)+"_"+m),$async$p4)
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
case 14:case 10:a2=J.cC(b3),a3=a2.gae(b3)
case 31:if(!a3.C()){w=32
break}i=a3.gR(a3)
if(i.a.length===0||B.a.i(i.b).length===0){w=31
break}a4=i.c
h=a4==null?null:B.a.i(a4)
g=i
w=h!=null&&h.length!==0?33:35
break
case 33:w=36
return A.b(C.bCK(h),$async$p4)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ah3(r,"ngmy_worksheet_thumb_v3_"+C.Bc(a8)+"_"+a4,f),$async$p4)
case 40:g=i.Tz(f)
w=38
break
case 39:$.an.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ah2(r,"ngmy_worksheet_thumb_v3_"+C.Bc(a8)+"_"+a4),$async$p4)
case 41:g=i.Tz(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ah2(r,"ngmy_worksheet_thumb_v3_"+C.Bc(a8)+"_"+a4),$async$p4)
case 42:case 34:a4=i.a
w=43
return A.b(C.ah3(r,"ngmy_worksheet_item_v3_"+C.Bc(a8)+"_"+a4,B.Y.az(g.aj(),null)),$async$p4)
case 43:e=b5
if(!e){$.an.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c8(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ah3(r,"ngmy_worksheets_index_v3_"+C.Bc(a8),B.Y.az(q,null)),$async$p4)
case 44:d=b5
if(!d){$.an.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fX3(q))
a4=a3.$ti.k("cM<1,a8<n,@>>")
a7=A.C(new A.cM(a3,new C.fX4(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ah3(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.Y.az(a0,null)),$async$p4)
case 45:w=46
return A.b(J.hKF(r),$async$p4)
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
$.an.$1("[worksheets] saveWorksheetProjects error: "+A.w(a1))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$p4,v)},
M4(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$M4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Dz(d),$async$M4)
case 3:t=g
s=J.cC(t)
r=s.bj(t,new C.h4o(e))
if(r===-1)s.c4(t,0,e)
else s.n(t,r,e)
u=C.p4(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$M4,v)},
bDY(d,e){var w=0,v=A.j(x.H),u
var $async$bDY=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Dz(d),$async$bDY)
case 2:u=g
J.nR(u,new C.fGk(e))
w=3
return A.b(C.p4(d,u),$async$bDY)
case 3:return A.h(null,v)}})
return A.i($async$bDY,v)},
Hj(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Hj)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aS(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Y.aQ(0,i,null)
if(x.j.b(t)){j=J.dd(t,x.f)
j=A.cF(j,new C.fJv(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fJw(),s),s.k("M.E"))
B.d.aZ(r,new C.fJx())
k=r}}catch(h){}w=4
return A.b(C.fqi(d),$async$Hj)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.ia7(k,p,d)
j=A.U(o)
s=j.k("N<1,a8<n,@>>")
s=A.C(new A.N(o,new C.fJy(),s),s.k("ak.E"))
n=B.Y.az(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RG(d,o),$async$Hj)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fJz(d),j),j.k("M.E"))
if(m.length!==0)C.aQC(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hj,v)},
fWN(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fWN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RG(d,e),$async$fWN)
case 3:t=J.dI(e,new C.fWO(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQC(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fWN,v)},
a3U(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a3U=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a3U)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aS(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Y.aQ(0,l,null)
if(x.j.b(u)){m=J.dd(u,x.f)
m=A.cF(m,new C.h4j(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h4k(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qE(o,new C.h4l(e))
if(B.a.i(e.x).length===0&&C.uw(e,d)){m=B.a.i(d.toLowerCase())
p=e.aG6(e.y===D.kV?D.kV:D.uA,m)}else p=e
if(q===-1)J.pZ(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RG(d,o),$async$a3U)
case 3:w=C.uw(p,d)?4:5
break
case 4:w=6
return A.b(C.aQB(C.Hh(p,d),p),$async$a3U)
case 6:if(!g)$.an.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a3U,v)},
aQO(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hj(d),$async$aQO)
case 2:u=g
t=J.cC(u)
s=A.nA(t.eP(u,new C.fG1(e)))
t.bt(u,new C.fG2(e))
w=3
return A.b(C.RG(d,u),$async$aQO)
case 3:w=s!=null&&C.aQS(s,d)?4:5
break
case 4:w=6
return A.b(C.fpz(e),$async$aQO)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQO,v)},
aiU(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h4u(),v),v.k("M.E"))
return w},
hev(d,e){var w,v=d.f,u=A.nA(new A.Y(v,new C.fFw(e),A.U(v).k("Y<1>")))
v=C.aiU(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fFx(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fFy())
return v},
ihN(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hFt(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.hev(d,u),new C.h3S(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ijl(d,e){var w
if(e==null||e.length===0)return 1
w=C.hev(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fKl(),A.U(w).k("N<1,H>")).f1(0,B.xP)+1},
irP(d){var w,v=C.aiU(d)
if(v.length===0)return null
w=new A.Y(v,new C.fWH(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ihI(d){return A.I(["id",d.a,"name",d.b,"gender",C.hAU(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ijf(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
for(w=a3.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
a1.n(0,t.a,t)}s=A.a([],x.u)
r=A.aR(a0)
for(a0=a2.f,v=a0.length,u=0;u<a0.length;a0.length===v||(0,A.J)(a0),++u){q=a0[u]
p=q.a
r.J(0,p)
o=a1.h(0,p)
if(o==null)p=q
else{p=o.b
p=p.length!==0?p:q.b
n=o.c
n=n!==D.yZ?n:q.c
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
d=q.aG1(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cPG(a1,w,a3.d,a2.y,s,a0,v)},
Bo(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bo=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Bo)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aS(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Y.aQ(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dd(t,x.f)
p=A.cF(p,new C.fJs(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fJt(),s),s.k("M.E"))
B.d.aZ(p,new C.fJu())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bo,v)},
aiE(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiE=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uA:D.kV
a7=C.Hh(b2,b3)
w=2
return A.b(C.Bo(b1),$async$aiE)
case 2:a8=b5
a9=J.cC(a8)
b0=a9.bj(a8,new C.fWC(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bDL(b1,b2),$async$aiE)
case 5:case 4:if(b0===-1){u=b2.aG6(a6,a7)
a9.c4(a8,0,u)}else{t=a9.h(a8,b0)
s=A.T(x.N,x.P)
for(r=t.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.J)(r),++p){o=r[p]
s.n(0,o.a,o)}for(r=b2.f,q=r.length,p=0;p<r.length;r.length===q||(0,A.J)(r),++p){n=r[p]
m=n.a
l=s.h(0,m)
if(l==null)s.n(0,m,n)
else{k=n.f
j=k==null?null:B.a.i(k)
k=n.b
k=k.length!==0?k:l.b
i=n.c
i=i!==D.yZ?i:l.c
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
s.n(0,m,l.aG1(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b7<2>")
s=A.C(new A.b7(s,k),k.k("M.E"))
k=a5?D.uA:D.kV
u=t.cPI(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RG(b1,a8),$async$aiE)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQB(B.a.i(b3.toLowerCase()),u),$async$aiE)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiE,v)},
hwQ(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a8<n,@>>"),k=A.C(new A.N(m,C.hEx(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.I(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.I(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hwR(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,C.hEx(),t),t.k("ak.E"))
return A.I(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
i7y(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.am4(A.a3(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hh_(),A.U(j).k("N<1,n>")).bY(0,new C.fq5())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uA
else s=B.d.q(t,u)?D.OD:D.kV
return w.aG6(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.am4(A.a3(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dd(q,h)
h=A.cF(h,new C.fq6(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fq7(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fq8(),x.N).bY(0,new C.fq9())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uA
else s=B.d.q(t,u)?D.OD:D.kV
h=j.h(d,"id")
h=J.k(h==null?"":h)
r=j.h(d,"name")
r=J.k(r==null?"":r)
p=j.h(d,"code")
p=J.k(p==null?"":p)
m=J.z(j.h(d,"isPrivate"),!1)
l=j.h(d,"createdAt")
l=A.bj(J.k(l==null?"":l))
if(l==null)l=new A.V(Date.now(),0,!1)
j=A.aJ(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.j.M(j)
if(j==null)j=0
return new C.kU(h,r,p,!m,t,o,l,j,v,s,B.cd)},
fqi(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fqi=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fqm()
h=x.N
g=x.z
w=7
return A.b(A.iB(A.a([A.lI("family_trees","*",null,A.I(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bN),r.$2(A.lI("family_trees","*",A.I(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bN),"collaborator"),r.$2(A.lI("family_trees","*",null,A.I(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bN),"public")],x.cl),x.fO),$async$fqi)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.fW(l,o)
J.fW(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.J)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a4(l).k("b7<2>")
h=A.cF(new A.b7(l,h),new C.fqj(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fqk(),l),l.k("M.E"))
B.d.aZ(l,new C.fql())
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
h=$.an
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
return A.i($async$fqi,v)},
ia7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dM(e,new C.fus(),v).bY(0,new C.fut())
t=A.d2(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hh(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kV){m=q.e
m=!new A.N(m,A.hh_(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ijf(l,v)
o=C.Hh(k,w)
p=v.d
s.n(0,u,o===w?k.bff(p,D.uA):k.bff(p,v.y))}j=s.$ti.k("b7<2>")
j=A.C(new A.b7(s,j),j.k("M.E"))
B.d.aZ(j,new C.fuu())
return j},
RG(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$RG)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fxp(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Y.az(s,null)),$async$RG)
case 3:return A.h(null,v)}})
return A.i($async$RG,v)},
aQB(d,e){return C.ifs(d,e)},
ifs(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQB=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.md("family_trees",A.a([C.hwQ(e,d)],p),null,B.cM),$async$aQB)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.md("family_trees",A.a([C.hwR(e,d)],p),null,B.cM),$async$aQB)
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
$.an.$1("[family_trees] upsert error: "+A.w(q))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aQB,v)},
aQC(d,e){return C.ift(d,e)},
ift(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQC=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a8<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fCF(d),n),m)
r=l
w=7
return A.b(A.md("family_trees",r,null,B.cM),$async$aQC)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fCG(d),n),m)
p=k
w=8
return A.b(A.md("family_trees",p,null,B.cM),$async$aQC)
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
$.an.$1("[family_trees] bulk upsert error: "+A.w(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aQC,v)},
fpz(d){return C.i6M(d)},
i6M(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fpz=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.S5("family_trees",A.I(["id",d],x.N,x.z),null,B.cM),$async$fpz)
case 7:t=2
w=6
break
case 4:t=3
p=s.pop()
r=A.ab(p)
$.an.$1("[family_trees] delete error: "+A.w(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$fpz,v)},
ro:function ro(d,e,f,g,h){var _=this
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
cFY:function cFY(){},
cFX:function cFX(){},
cFV:function cFV(){},
cFW:function cFW(){},
Iq:function Iq(d,e){this.a=d
this.b=e},
hV:function hV(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
am3:function am3(d,e){this.a=d
this.b=e},
fFR:function fFR(){},
h4q:function h4q(d){this.a=d},
fDp:function fDp(d){this.a=d},
kU:function kU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bSx:function bSx(){},
bSw:function bSw(){},
bSt:function bSt(){},
bSu:function bSu(){},
bSv:function bSv(){},
ftL:function ftL(){},
fpv:function fpv(){},
fpw:function fpw(){},
fpx:function fpx(){},
fX0:function fX0(){},
fX1:function fX1(){},
fX2:function fX2(){},
fX3:function fX3(d){this.a=d},
fX4:function fX4(){},
h4o:function h4o(d){this.a=d},
fGk:function fGk(d){this.a=d},
fJv:function fJv(){},
fJw:function fJw(){},
fJx:function fJx(){},
fJy:function fJy(){},
fJz:function fJz(d){this.a=d},
fWO:function fWO(d){this.a=d},
h4j:function h4j(){},
h4k:function h4k(){},
h4l:function h4l(d){this.a=d},
fG1:function fG1(d){this.a=d},
fG2:function fG2(d){this.a=d},
h4u:function h4u(){},
fFw:function fFw(d){this.a=d},
fFx:function fFx(d,e){this.a=d
this.b=e},
fFy:function fFy(){},
h3S:function h3S(d){this.a=d},
fKl:function fKl(){},
fWH:function fWH(){},
fJs:function fJs(){},
fJt:function fJt(){},
fJu:function fJu(){},
fWC:function fWC(d){this.a=d},
fq5:function fq5(){},
fq6:function fq6(){},
fq7:function fq7(){},
fq8:function fq8(){},
fq9:function fq9(){},
fqm:function fqm(){},
fqn:function fqn(d){this.a=d},
fqj:function fqj(d){this.a=d},
fqk:function fqk(){},
fql:function fql(){},
fus:function fus(){},
fut:function fut(){},
fuu:function fuu(){},
fxp:function fxp(){},
fCF:function fCF(d){this.a=d},
fCG:function fCG(d){this.a=d},
cFZ:function cFZ(d,e){this.a=d
this.b=e},
cG_:function cG_(d,e){this.a=d
this.b=e},
aIF:function aIF(d,e,f){this.a=d
this.b=e
this.c=f},
baF:function baF(){this.b=this.a=0},
baE:function baE(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
byh:function byh(){},
xl(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.u(w.gnt()),2,"0")+":"+B.a.b_(B.o.u(w.gGL()),2,"0")},
hY6(){var w,v=$.os(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.he(u)},
atX(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$atX)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bN),$async$atX)
case 8:r=e
if(r==null){u=A.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=A.a3(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=A.ab(m)
$.an.$1("[worksheet qr stash] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$atX,v)},
atY(d){return C.hY7(d)},
hY7(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$atY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$atY)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.I(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cM,null),$async$atY)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=A.ab(p)
$.an.$1("[worksheet qr stash] save: "+A.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$atY,v)},
au_(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$au_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c9(),$async$au_)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hY6()
w=4
return A.b(C.atX(),$async$au_)
case 4:r=h
q=B.a.i(e)
p=B.dS.aN(t)
J.aK(r,s,A.I(["ownerEmail",q,"projectId",f,"payload",B.cP.gcu().aN(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.atY(r),$async$au_)
case 5:u=new A.a1k("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$au_,v)},
atZ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$atZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c9(),$async$atZ)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.atX(),$async$atZ)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aJ(n.h(o,"usesRemaining"))
l=m==null?null:B.j.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.ca.cI(0,B.cI.aN(t))}catch(h){r=A.ab(h)
$.an.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dO(A.a3(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.atY(q),$async$atZ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atZ,v)},
hrg(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cN.aw(999999)},
hY8(d){var w,v,u,t,s,r,q
try{w=A.ahx(d)
if(w==null)return d
v=w
if(J.Ma(v)>960||J.M9(v)>960){s=v
r=J.Ma(v)>=J.M9(v)?960:null
v=A.ahu(s,J.M9(v)>J.Ma(v)?960:null,B.Q0,r)}s=v
u=A.anp(82).TW(s,B.zD)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cc(u))
return s}catch(q){t=A.ab(q)
$.an.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
cof(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$cof=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hY8(e)
$.cob.n(0,s,t)
u=C.bFN(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cof,v)},
b4n(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4n=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d5(l,"data:image")){u=null
w=1
break}t=4
r=J.eG(l,",")?B.d.gan(J.lM(l,",")):l
q=B.cI.aN(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hrg()
w=7
return A.b(C.cof(p,q),$async$b4n)
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
$.an.$1("[worksheet-thumb] persistDataUrl failed: "+A.w(n))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$b4n,v)},
coc(d){var w=0,v=A.j(x.T),u,t,s
var $async$coc=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.coe(s),$async$coc)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cP.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$coc,v)},
a9u(d){var w=0,v=A.j(x.H),u,t
var $async$a9u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hEp(d)
if(t==null){w=1
break}$.cob.W(0,t)
w=3
return A.b(C.bFM(t),$async$a9u)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9u,v)},
bFN(d,e){return C.ipt(d,e)},
ipt(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bFN=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPu
w=7
return A.b(n==null?$.aPu=N.hdk():n,$async$bFN)
case 7:r=g
q=new Uint8Array(A.cc(e))
p=J.n2(r,"thumbs","readwrite")
B.j6.mx(J.n1(p,"thumbs"),q,l)
w=8
return A.b(J.pY(p),$async$bFN)
case 8:u=!0
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=A.ab(k)
$.an.$1("[worksheet-thumb idb put] "+A.w(o))
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bFN,v)},
bFM(d){return C.ipr(d)},
ipr(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bFM=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPu
w=7
return A.b(o==null?$.aPu=N.hdk():o,$async$bFM)
case 7:r=f
q=J.n2(r,"thumbs","readwrite")
B.j6.Gl(J.n1(q,"thumbs"),m)
w=8
return A.b(J.pY(q),$async$bFM)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=A.ab(l)
$.an.$1("[worksheet-thumb idb delete] "+A.w(p))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bFM,v)}},D,Av,Aw,Z,Ax,Ay
J=c[1]
A=c[0]
B=c[2]
N=c[61]
P=c[259]
A_=c[166]
S=c[60]
A8=c[234]
L=c[215]
H=c[35]
E=c[225]
T=c[122]
A9=c[237]
Q=c[106]
Aa=c[137]
Ab=c[117]
Ac=c[201]
A0=c[119]
Ad=c[233]
Ae=c[44]
R=c[232]
Af=c[125]
A1=c[202]
Ag=c[253]
Ah=c[192]
Ai=c[205]
M=c[91]
A2=c[87]
Aj=c[172]
A3=c[132]
A4=c[175]
A5=c[200]
Ak=c[256]
Al=c[73]
A6=c[258]
Am=c[79]
G=c[257]
An=c[136]
Ao=c[261]
Ap=c[121]
A7=c[219]
Aq=c[34]
U=c[120]
O=c[195]
Ar=c[206]
V=c[260]
As=c[158]
At=c[128]
W=c[246]
X=c[43]
F=c[97]
Au=c[33]
I=c[105]
K=c[141]
Y=c[77]
C=a.updateHolder(c[7],C)
D=c[252]
Av=c[78]
Aw=c[213]
Z=c[255]
Ax=c[254]
Ay=c[64]
C.apC.prototype={}
C.b_G.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bjz(),f=h.x!=null&&h.zI(i).length===0
if(h.x!=null)w=f?B.b2:B.bC
else w=h.gUB()?B.bC:B.dX
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.L(D.boQ,B.r,1)
s=x.p
r=A.q(i,A.x(A.a([A.q(i,D.f96,B.f,i,i,new A.p(B.b2.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.hc,i,i,i),B.X,D.fEU,B.ax,A.d(C.xl(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fAB,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,D.b79,i,i,i,i,B.a0t,i,i,i)
q=A.m(16)
p=A.L(B.aO,B.r,1)
o=A.L(B.b2.j(0.28),B.r,1)
n=A.hfy(h.d)
o=A.q(B.A,C.b_F(A.fMG(h.e,n),30),B.f,i,i,new A.p(B.m6,i,o,i,i,i,B.a6),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fvC,B.K,i,i)
m=A.m(14)
l=A.L(B.aO,B.r,1)
q=A.q(i,A.x(A.a([o,B.U,n,B.bH,D.fFc,B.af,A.q(i,A.x(A.a([D.fVo,B.bH,A.d(A.Bq(h.c),i,i,i,i,i,i,D.fqh,i,i,i)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fg,i,i,1/0)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aP,i,p,q,i,i,B.n),i,i,i,i,O.alJ,i,i,i)
p=A.m(16)
m=A.L(B.aO,B.r,1)
l=j.aTb("Original due",C.xl(h.r,!1))
n=j.aTb("Current due",C.xl(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.X,A.q(i,A.x(A.a([l,B.U,n,B.X,A.q(i,A.d(h.gaNd(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.n),i,i,i,i,B.Cb,i,i,1/0),B.X,j.ckx(),B.U,j.c7j(g,f)],s),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bh,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.L(B.aO,B.r,1)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fG9,B.ax,A.d(q,i,i,i,i,i,i,D.fuQ,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bh,i,i,1/0)],s))}if(h.gaHN()){q=A.m(14)
o=A.L(B.cu,B.r,1.6)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fWJ,B.U,A.by(A.m(12),A.e9(new A.a5(1/0,88,A.b3(i,i,i,new A.X4(h.ax,B.T,D.fdR,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.n),i,i,i,i,B.GJ,i,i,i)],s))}p.push(B.aB)
p.push(D.fOw)
return A.q(i,A.x(A.a([r,new A.D(B.a0i,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.p(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTb(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.abl,w,w,w),1),A.d(e,w,w,w,w,w,w,D.frk,w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
ckx(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aaq(B.dX,u,"Not paid yet")
w=t.zI(null).length
v=w===0?B.b2:B.bC
return this.aaq(v,u,C.xl(t.x,!0))},
c7j(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aaq(B.b2,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aaq(B.b2,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.abl,u,u,u)
v=A.U(d).k("N<1,h2>")
v=A.C(new A.N(d,new C.c7M(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bV(B.bG,v,B.bs,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aaq(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.abl,w,w,w),1),new A.dl(1,B.cm,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e0,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bcR.prototype={
a5(d,e){new A.X4(this.b,B.T,e,!0,3.5,null).a5(d,e)},
aD(d){return d.b!==this.b}}
C.apO.prototype={
S(){return new C.aEz(A.a([],x.bp))},
ge3(){return this.c}}
C.aEz.prototype={
Y(){this.a4()
this.Jh()},
Jh(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jh=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a38(t.a.c),$async$Jh)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dPX(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jh,v)},
aV9(d,e){var w,v=null,u=this.a.d.a,t=u?B.T:B.aP,s=A.l(v,v,u?B.bv:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bv:B.br).j(0.22)
w=A.m(10)
return A.bt(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bh,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bv:B.br).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b4N),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aV8(d){return this.aV9(d,null)},
Q3(d){return this.coa(d)},
coa(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q3=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.I0:B.eO
w=7
return A.b(new A.hW().CJ(72,900,900,n),$async$Q3)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fp(),$async$Q3)
case 8:p=f
n=B.cP.gcu().aN(p)
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
if(n!=null)n.L(x.q).f.U(A.b4(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Q3,v)},
b3h(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.T:B.aP,o=A.m(10),n=A.L((q?B.bv:B.br).j(0.18),B.r,1)
if(d)q=B.cG
else q=s.a.d.a?B.bv:B.br
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.as,r,r,r,r,r,r,r,r,12.5,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cG
else u=s.a.d.a?B.bv:B.br
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cG,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cf)
q=A.a([q,B.ae,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aG(r,r,r,r,A.X(B.cy,s.a.d.a?B.bv:B.br,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cf))
return A.q(r,A.A(q,B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.n),r,r,r,B.jF,D.bBJ,r,r,r)},
DG(d){return this.bDL(d)},
bDK(){return this.DG(null)},
bDL(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DG=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.au(new A.ba(a4,B.b6,B.aR),s)
if(a3)a4=""
else{a4=a5.c
q=B.j.iH(a4)
p=a5.c
a4=a4===q?B.o.u(B.j.M(p)):B.j.ad(p,2)}o=new A.au(new A.ba(a4,B.b6,B.aR),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b6,B.aR),s)
if(a3){a4=new A.V(Date.now(),0,!1).bR(6048e8)
m=A.c1(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.hfy(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.x0?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.hK(B.w.j(0.55),!0,"Dismiss",a4,new C.dPG(),new C.dPH(a2,t,a5,r,new C.dPI(a2,t),o,n,j),B.eH,!0,x.y),$async$DG)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d_(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.T$=s
r.P$=0
o.T$=s
o.P$=0
n.T$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.L(x.q).f.U(D.fkm)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.U(D.fj1)
w=1
break}a1=A.fMG(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.x0?"male":"female"
w=7
return A.b(A.aiT(a3,A.hnY(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DG)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.x0?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcl(),a3.gcg(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)))a5.cS2(a2.a)
w=8
return A.b(A.aiT(t.a.c,a5),$async$DG)
case 8:case 5:w=9
return A.b(t.Jh(),$async$DG)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DG,v)},
aVP(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cG.j(0.14)
else w=this.a.d.a?B.T:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cG
else s=(this.a.d.a?B.bv:B.br).j(0.2)
s=A.L(s,B.r,g?1.5:1)
r=C.b_F(d,18)
if(g)q=B.cG
else q=this.a.d.a?B.aP:B.as
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,A.q(p,A.A(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bb,B.i,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.n),p,p,p,p,B.bV,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
ST(d){return this.cG0(d)},
cG0(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$ST=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.hK(B.w.j(0.55),!0,"Dismiss",s,new C.dQ_(),new C.dQ0(t,d),B.h2,!0,x.y),$async$ST)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aiT(t.a.c,d),$async$ST)
case 7:w=8
return A.b(t.Jh(),$async$ST)
case 8:case 1:return A.h(u,v)}})
return A.i($async$ST,v)},
Q2(d,e){return this.bOE(0,e)},
bOE(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lo(s,"Cancel","Delete",e.b+" \xb7 "+A.Bq(e.c)+" will be removed from this device.","Delete this debt?"),$async$Q2)
case 3:if(!g){w=1
break}w=4
return A.b(C.fG8(t.a.c,e.a),$async$Q2)
case 4:w=5
return A.b(t.Jh(),$async$Q2)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q2,v)},
age(d){return this.chX(d)},
chX(d){var w=0,v=A.j(x.H),u=this,t
var $async$age=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.L,null,new C.dPU(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$age)
case 2:return A.h(null,v)}})
return A.i($async$age,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.ese
w=J.dI(m.d,new C.dQ1())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dQ2())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cG(v,0,new C.dQ3())
w=A.m(18)
s=m.a.d.a
r=s?D.cBr:D.aCD
q=A.L(s?B.cG.j(0.35):B.cG.j(0.18),B.r,1)
s=A.q(l,D.c2j,B.f,l,l,new A.p(B.cG.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.au,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.as,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aI(!1,B.a3,!0,A.m(12),A.aP(!1,A.m(12),!0,D.erz,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dQ4(m),l,l,l,l,l,l,l),B.f,B.cG,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.i,0,l,l)
o=A.E(m.cC6("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bq(t)
r=A.a([A.q(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.b9r(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a9(B.aA,B.aE,B.x,r,l,l),B.n),l,l,l,l,B.alG,l,l,l),B.aB],p)
if(J.cr(m.d)){w=m.a.d.a
s=w?B.ed:B.c
q=A.m(18)
o=A.L((w?B.bv:B.br).j(0.12),B.r,1)
n=A.q(l,D.bY3,B.f,l,l,new A.p(B.cG.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.as,l,l,l,l,l,l,l,l,15,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.x(A.a([n,B.af,w,B.ax,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.br,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.n),l,l,l,l,D.bEm,l,l,1/0))}else{w=m.gcnr()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bG2,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bv:B.br,l,l,l,l,l,l,l,l,12,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
b9r(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.L((v.a.d.a?B.bv:B.br).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bv:B.br,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cG
else w=v.a.d.a?B.aP:B.as
return A.q(u,A.x(A.a([q,B.bH,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.n),u,u,u,u,B.ey,u,u,u)},
cC6(d,e){return this.b9r(!1,d,e)},
cns(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zI(j).length,h=d.biP()
if(d.x!=null){w=d.zI(j).length
v=w===0?B.cG:B.bC}else if(d.gUB())v=B.bC
else{if(h)w=B.cG
else w=k.a.d.a?B.bv:B.br
v=w}if(d.x!=null){w=d.zI(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xl(u,!1)}else{u.toString
t="Paid "+C.xl(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xl(w,!1)+" \xb7 "+i+" missed":"Due "+C.xl(w,!1)}w=k.a.d.a?B.ed:B.c
u=A.m(18)
if(d.gUB()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bv:B.br).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cL,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bq:B.m6
o=A.L(d.gUB()&&d.x==null?B.bC.j(0.45):B.cG.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hfy(d.d)
o=A.q(B.A,A.d3(C.b_F(A.fMG(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a6),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.as
m=x.p
n=A.a([new A.dl(1,B.cm,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHN())B.d.v(n,A.a([B.e4,A.X(B.P4,B.cG.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.i,0,j,j),B.cU,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bq(d.c)
l=k.a.d.a?B.aP:B.as
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aI(!1,B.a3,!0,j,A.aP(!1,q,!0,new A.D(Ag.alu,A.A(A.a([o,B.bd,p,B.ae,A.x(A.a([n,B.bH,A.X(B.eJ,(k.a.d.a?B.bv:B.br).j(0.5),j,j,j,18)],m),B.dL,j,B.e,B.i,0,B.p)],m),B.l,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dPW(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.p(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
C.uR.prototype={}
C.alS.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bn
u=v?B.E:B.l
t=a1.as
s=A.m(t?12:22)
r=a1.e
q=r.j(t?0.6:0.85)
q=A.L(q,B.r,t?1.2:1.6)
p=A.a([new A.ac(0,B.G,B.w.j(0.45),B.cA,16)],x.V)
o=x.p
n=A.a([],o)
m=B.w.j(t?0.07:0.3)
l=A.L(r.j(0.6),B.r,1)
n.push(A.aA(a0,A.q(a0,A.X(B.cy,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.p(m,a0,l,a0,a0,a0,B.a6),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a7:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iM,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ayO,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.H0,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.ev(m,A.A(l,B.l,a0,B.e,B.Q,0,a0,a0),B.f,B.e3)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bAU,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cH:B.bt,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fJ,A.x(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.feF)
a2=A.a([A.A(n,B.l,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.wh,A.q(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a9(B.a7,B.aa,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lL,A.x(a2,B.l,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hv,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a9(B.aA,B.aE,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bCc,a0,a0,a0,a0)}}
C.aWp.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.q(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bn?B.bn:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bt:B.cH,q,B.V,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.l,q,B.e,B.i,0,q,q),B.cU,n],m)
if(p.z)o.push(new A.D(B.ur,n,q))
return new A.D(B.d3,A.x(o,B.l,q,B.e,B.Q,0,B.p),q)}}
C.TX.prototype={
S(){return new C.bgt()}}
C.bgt.prototype={
gc29(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.es9,D.esf],l)
for(w=0;w<8;++w){v=D.a4K[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HN:B.zl
q=t===s
r=A.X(r,q?B.eL:B.bW,n,n,n,17)
q=q?B.c:B.ac
r=A.a([r,B.bm,A.d(v.b,n,n,n,n,n,n,new A.F(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.bz(1,B.bc,A.d(v.c,n,1,B.a2,n,n,n,B.AM,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aN(24,24)
p=new A.ay(B.eL,2,B.r,-1)
s=new A.p(n,n,new A.bG(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eI,A.x(A.a([new A.D(B.n_,new A.c7(B.aL,B.e,B.i,B.l,n,B.p,n,0,r,n),n),A.q(n,new A.du(!0,new C.alS(v,q.d,q.e,new C.dfC(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dfD(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bCy,A.bJ(D.h1f,n,new C.dfE(o,d),A.bp(B.b9,n,n,n,n,B.oV,n,n,new A.b9(A.m(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cP(new A.aY(0,1/0,0,m.a.b*0.9),A.cl(k,n,n,D.bGV,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nw.prototype={
aj(){var w=this
return A.I(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bfr(d,e,f){return new C.nw(this.a,e,d,f)}}
C.Ip.prototype={
wX(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Ip(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aFV(d){var w=null
return this.wX(w,w,w,w,w,d,w,w,w,w,w,w)},
cNF(d){var w=null
return this.wX(w,w,w,w,d,w,w,w,w,w,w,w)},
bfp(d,e,f){var w=null
return this.wX(d,w,w,w,w,w,w,w,e,w,f,w)},
cOj(d){var w=null
return this.wX(w,w,w,w,w,w,d,w,w,w,w,w)},
cOs(d){var w=null
return this.wX(w,w,w,w,w,w,w,w,w,d,w,w)},
cND(d){var w=null
return this.wX(w,w,w,d,w,w,w,w,w,w,w,w)},
cOu(d){var w=null
return this.wX(w,w,w,w,w,w,w,w,w,w,w,d)},
cNA(d){var w=null
return this.wX(w,w,d,w,w,w,w,w,w,w,w,w)},
cNv(d){var w=null
return this.wX(w,d,w,w,w,w,w,w,w,w,w,w)},
Ge(d){var w=null
return this.wX(w,w,w,w,w,w,w,d,w,w,w,w)},
cOC(d,e,f,g,h,i,j,k,l,m,n){return this.wX(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.I(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cL9(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bRe(d),k=A.aJ(d.h(0,"emblem")),j=k==null?o:B.j.M(k),i=A.aJ(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DK.gev(D.DK))
s=i==null?o:B.j.D(i,18,36)
r=l.$2("position",D.a6q)
q=l.$2("frame",D.a5L)
l=l.$2("texture",D.a5H)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cOC(p,u,t,q,r,A.rd(d.h(0,"ribbon"))?A.GU(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_v.prototype={
S(){return new C.aBy(A.a([],x.I),D.OC)},
ge3(){return this.c}}
C.aBy.prototype={
Y(){var w,v=this
v.a4()
v.f=A.Ah(0,1)
w=$.aw()
v.z=new A.au(B.aw,w)
v.Q=new A.au(B.aw,w)
v.lg()
w=v.a
C.bE8(w.c,w.d).bG(new C.dgi(v),x.fL)},
t(){var w,v=this,u=v.f
u===$&&A.c()
u.t()
u=v.z
u===$&&A.c()
w=$.aw()
u.T$=w
u.P$=0
u=v.Q
u===$&&A.c()
u.T$=w
u.P$=0
v.a3()},
lg(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$lg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.LE(s.c,s.d),$async$lg)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dg6(t,r))
t.axC()
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
gaub(){var w,v=this
if(!J.cr(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axC(){var w,v,u=this.gaub(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cgm(d){this.m(new C.dg3(this,d))
this.axC()},
NZ(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nw(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSu(r.c,r.d,s),$async$NZ)
case 3:w=4
return A.b(t.lg(),$async$NZ)
case 4:if(t.c==null||J.cr(t.d)){w=1
break}q=J.qE(t.d,new C.dfF(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dfG(t,p))
t.axC()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BI(p+1,B.cw,B.kR),$async$NZ)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NZ,v)},
Bo(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaub()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aSu(o.c,o.d,new C.nw(s,r,q,new A.V(p,0,!1))),$async$Bo)
case 3:w=4
return A.b(t.lg(),$async$Bo)
case 4:if(t.c==null){w=1
break}t.m(new C.dg7(t))
case 1:return A.h(u,v)}})
return A.i($async$Bo,v)},
OF(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OF=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaub()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dfO(r),s,null,!0,!0,x.y),$async$OF)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bDU(s.c,s.d,r.a),$async$OF)
case 4:t.m(new C.dfP(t))
w=5
return A.b(t.lg(),$async$OF)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UE(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OF,v)},
z4(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z4=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bo(),$async$z4)
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
return A.b(C.RX(s,r.r,o,p,q),$async$z4)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hF1(s,r.x,r.r),$async$z4)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LE(s.c,s.d),$async$z4)
case 10:l=e
for(s=n.d,r=J.cC(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.nw(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bz(r.c,r.d,l),$async$z4)
case 11:w=12
return A.b(t.lg(),$async$z4)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b4(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z4,v)},
a1s(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1s=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bo(),$async$a1s)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz2(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dP(D.zO,new C.dg4(t),new C.dg5())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mQ("Our Family",o,"",""))
for(o=J.aU(t.d);o.C();){n=o.gR(o)
p.push(new H.mQ(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hhf(o,new H.rM(s,r,"",p,new H.v6(q.d,null,null,null,null,"","","")),null),$async$a1s)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1s,v)},
On(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$On=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bo(),$async$On)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.agr,null,new C.dfK(t),s,!0,!0,!0,I.a9x,!1,!1,x.N),$async$On)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cNF(r)
t.m(new C.dfL(t,q))
s=t.a
w=7
return A.b(C.Sz(s.c,s.d,q),$async$On)
case 7:case 1:return A.h(u,v)}})
return A.i($async$On,v)},
XS(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.agr,null,new C.dfQ(t),r,!0,!0,!0,I.a9x,!1,!1,x.e),$async$XS)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dfR(t,s))
r=t.a
w=4
return A.b(C.Sz(r.c,r.d,s),$async$XS)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BI(0,B.dH,B.mW)
case 1:return A.h(u,v)}})
return A.i($async$XS,v)},
bUk(d){var w=d.bT(),v=B.a.b_(B.o.u(w.gcg()),2,"0"),u=B.a.b_(B.o.u(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz2(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c1n()
if(r.e)w=D.af9
else if(J.cr(r.d)){w=r.y
v=r.gz2(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fpD,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(W.amL,new C.ZN(w,v,0,q),q),q),B.bz,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bz],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.q(q,D.f8S,B.f,q,q,new A.p(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dK.j(0.45),B.H,18)],x.V),E.wT,B.n),q,q,q,q,B.Oh,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcKa(),q,q,q,q,q,q,!1,B.a4))
w.push(B.X)
w.push(A.ho(D.bUa,D.h0H,r.gaOU(),q))
B.d.v(u,w)}w=A.as(A.cd(A.x(u,B.l,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.ez,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.V,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dW:B.Bm
u=A.x(A.a([new A.D(D.bDD,w,q),A.E(A.JO(v,new C.dgg(r),J.ad(r.d)+1,q,r.gcgl(),u,B.aL),1),r.bGF()],x.p),B.l,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c4(q,D.Z6,new A.am(B.a0,q,B.b3,B.t,A.a([D.aQ8,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c1n(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cJ(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KM(B.ee,"AI",h.gbEx(),!0))
if(h.a.f)f.push(new C.KM(B.mi,"Cover",h.gbPd(),!1))
if(h.a.f)f.push(new C.KM(B.wN,"Header",h.gbKc(),!1))
if(J.cJ(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KM(B.uR,"Print",h.gcpu(),!1))
if(h.a.f&&J.cJ(h.d)&&h.r>=0){v=h.w
u=v?B.hJ:B.j2
t=v?"Save":"Edit"
f.push(new C.KM(u,t,v?h.gcvN():new C.dg0(h),!1))}if(h.a.f)f.push(new C.KM(B.hY,"Add page",h.gaOU(),!1))
v=C.hAT(h.y.Q)
u=h.gz2(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.dGR
else{k=new A.aN(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.kp.j(0.5),1,B.r,-1)
j=A.q(g,A.X(l.a,D.kM,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bG(i,i,i,i),new A.be(k,k,k,k),g,new A.a9(B.a7,B.aa,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kM.j(0.85)
p.push(new A.bz(1,B.bc,A.aA(B.c6,A.x(A.a([k,B.bH,A.d(l.b,g,1,g,g,g,g,new A.F(!0,j,g,g,g,g,9.5,B.I,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.alS(v,u,t+" \xb7 "+s+" "+r,new C.dg1(h),A.A(p,B.l,g,B.e,B.i,0,g,g),g)},
An(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$An=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bo(),$async$An)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aU(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3n(B.d.aO(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dfH(t,p),s,null,!0,!0,x.N),$async$An)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z4(),$async$An)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Eg(),$async$An)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FS("Swahili (Kiswahili)",!0),$async$An)
case 18:w=16
break
case 17:w=19
return A.b(t.cGE(o==="sw"?"Swahili (Kiswahili)":"English"),$async$An)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$An,v)},
ZN(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.L(E.kp.j(0.3),B.r,1),r=x.p
return new A.D(B.cx,A.aP(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.wT,B.a6),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.KG,w,w,w),A.d(g,w,w,w,w,w,w,B.AN,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.l,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.n),w,w,w,w,B.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dg2(d,h),w,w,w,w,w,w,w),w)},
Eg(){return this.bTO()},
bTO(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Eg=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dfU(r),a7,null,!0,!0,x.ei),$async$Eg)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eA("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dfV(o),a7,null,!0,!0,x.H).fv(new C.dfW(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.J)(d),++a1){k=d[a1]
J.c8(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zO[a1]
J.c8(j,i.a)}w=8
return A.b(C.ai2(a0,a7,new C.dfX(o),d,l,e,j),$async$Eg)
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
if(l!=null&&a6.a)A.a6(l,!0).eA()
l=o
l.sic($.aw())
J.aSX(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
j=n
l.U(A.b4(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.al(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bfr(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bz(j.c,j.d,l),$async$Eg)
case 11:w=12
return A.b(r.lg(),$async$Eg)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zO[a1].a)
a5=l.cL9(j,12,a7)
l=r.a
w=15
return A.b(C.Sz(l.c,l.d,a5),$async$Eg)
case 15:if(r.c!=null)r.m(new C.dfY(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BI(0,B.dH,B.mW)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b4(a3?A.czK("Undo",new C.dfZ(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ek,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Eg,v)},
FS(d,e){return this.cGF(d,e)},
cGE(d){return this.FS(d,!1)},
cGF(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FS=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eA("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dg9(a0),k,null,!0,!0,x.H).fv(new C.dga(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.c8(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3A(m,new C.dgb(a0)),$async$FS)
case 10:w=8
break
case 9:w=11
return A.b(C.bFD(new C.dgc(a0),m,a2),$async$FS)
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
if(o!=null&&f.a)A.a6(o,!0).eA()
o=a0
o.sic($.aw())
J.aSX(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.U(A.b4(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bfr(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bz(k.c,k.d,o),$async$FS)
case 12:w=13
return A.b(r.lg(),$async$FS)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b4(A.czK("Undo",new C.dgd(r,d),null),null,null,null,null,B.t,null,k,null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FS,v)},
bGF(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dfI(v):u
r=A.aG(u,u,u,u,A.X(D.bPS,s?D.kM:B.aU,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cJ(v.d)&&!v.w&&v.r>=0)s=A.ho(A.X(B.ww,B.Gm,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Gm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOO(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kM.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.as(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dfJ(v):u
return A.bm(!0,new A.D(D.bDr,A.A(A.a([r,s,A.aG(u,u,u,u,A.X(B.eJ,t<J.ad(v.d)?D.kM:B.aU,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_z.prototype={
S(){return new C.bgS(new A.au(B.aw,$.aw()))}}
C.bgS.prototype={
ga2A(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a3()},
gbSp(){switch(this.ga2A()){case"cover":var w=D.d7V
break
case"book":w=D.d3g
break
default:w=D.dz7
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=E.kp.j(0.5),m=x.p,l=A.A(A.a([D.dGS,B.au,D.bJ9,A.aG(p,p,p,p,B.lp,p,p,p,new C.di4(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jv(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.di5(q),q.ga2A()==="page",p,p,p,p))
if(q.a.d)k.push(A.jv(p,p,p,D.fWe,p,new C.di6(q),q.ga2A()==="book",p,p,p,p))
k.push(A.jv(p,p,p,D.fIR,p,new C.di7(q),q.ga2A()==="cover",p,p,p,p))
k=A.bV(B.bG,k,B.bs,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bt(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.ki,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbSp(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KD,p,p,p)
w.push(A.n3(p,B.c.j(0.08),r,B.hj,new C.di8(q,s),p,p,p,p))}return A.eP(p,E.BR,A.cd(A.x(A.a([l,B.X,D.fZy,B.am,k,B.af,j,B.U,A.bV(B.bG,w,B.bs,p,6,6),B.aB,A.dh(D.bU7,D.h_l,new C.di9(q,d),A.bp(B.b9,p,p,p,p,B.oV,p,p,new A.b9(A.m(16),B.a1),p,p,p)),B.ax,D.fUs],m),B.E,p,B.e,B.Q,0,B.p),B.t,p,B.y,p,B.fs,p,p,B.ah),p,p,p,I.a0w,B.d7,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_x.prototype={
S(){return new C.aBB(A.a([],x.gA))},
ge3(){return this.c}}
C.afK.prototype={}
C.aBB.prototype={
Y(){this.a4()
this.lg()},
lg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.S1(p.c,p.d),$async$lg)
case 3:o=e
n=A.a([],x.gA)
p=J.aU(o)
case 4:if(!p.C()){w=5
break}s=p.gR(p)
r=t.a
q=r.d
q=s==="main"?q:q+"~"+s
m=n
l=C
k=s
w=6
return A.b(C.bE8(r.c,q),$async$lg)
case 6:j=e
i=J
w=7
return A.b(C.LE(t.a.c,q),$async$lg)
case 7:m.push(new l.afK(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dgx(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
baI(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QQ(d,e){return this.chU(0,e)},
chU(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cd(A.ec(new C.dgw(u,e),!0,null,x.y)),$async$QQ)
case 2:t=g
w=3
return A.b(u.lg(),$async$QQ)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.U(D.aU1)
return A.h(null,v)}})
return A.i($async$QQ,v)},
FU(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.U(D.aTY)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahl(s.c,s.d),$async$FU)
case 5:q=e
w=6
return A.b(t.lg(),$async$FU)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QQ(0,B.d.fe(t.d,new C.dgB(q))),$async$FU)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.RX(p,s.f,r,n,o),$async$FU)
case 10:m=e
w=11
return A.b(t.lg(),$async$FU)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.U(D.aU1)
case 1:return A.h(u,v)}})
return A.i($async$FU,v)},
Qh(d,e){return this.ctv(0,e)},
ctv(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dgA(t,e),s,null,!0,!0,x.y),$async$Qh)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3O(s.c,s.d,e.a),$async$Qh)
case 4:w=5
return A.b(t.lg(),$async$Qh)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qh,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bGI(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.L(E.kp.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fH(0.7142857142857143,A.q(n,A.x(A.a([D.dGT,B.af,D.era,B.ax,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kM.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bb,B.i,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcK6(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.L(E.kp.j(0.85),B.r,1.6)
s=A.aA(n,A.q(n,D.c15,B.f,n,n,new A.p(B.w.j(0.3),n,A.L(E.kp.j(0.6),B.r,1),n,n,n,B.a6),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgC(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.w.j(0.3)
p=A.L(E.kp.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.bd,D.bJx,A.q(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.foD,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.n),n,n,n,n,B.hc,n,n,n)],l),B.l,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.c7_,B.n),n,n,n,Ax.O1,D.bBo,n,n,n)
if(o.e)k=D.af9
else k=k.length===0?D.bci:A.cs(new C.dgD(k))
return A.c4(n,D.Z6,new A.am(B.a0,n,B.b3,B.t,A.a([D.aQ8,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGI(d){var w,v,u=this,t=null,s=u.baI(d),r=d.c,q=x.p,p=A.a([A.bR(0,A.ev(B.A,new A.a5(300,420,new C.ZN(d.b,s,r,t),t),B.f,B.dB),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aA(t,A.q(t,D.c0o,B.f,t,t,new A.p(B.w.j(0.55),t,A.L(B.aU,B.r,1),t,t,t,B.a6),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgu(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.foc,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fH(0.7142857142857143,new A.am(B.a0,t,B.ab,B.t,p,t),t),B.U,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kM.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgv(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KM.prototype={}
C.ZN.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dP(D.zO,new C.cOW(m),new C.cOX()),j=m.c,i=D.DK.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mr:B.bb
v=new C.cOY(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.enR,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b3(l,l,l,new C.be4(j.x,h,l),B.az),0,0,0),A.ap(0,A.q(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a9(B.a7,B.aa,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aN(3,3)
t.push(new A.cK(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.amM,8,0.85,2.2),v.$4(D.bGl,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.amM,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bGh,A.b3(l,l,l,new C.bdW(h,l),B.az),l),0,0,0))
r=A.X(D.aBz[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ayO,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cH,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aQ,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.I,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bR(0,new A.D(D.bGM,A.x(o,B.l,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b3(l,l,l,new C.aIz(l),D.fdK),l,l,l,46,0,l))
return A.q(l,A.by(D.adN,new A.am(B.a0,l,B.ab,B.t,t,l),B.aq),B.f,l,l,new A.p(l,l,l,D.adN,i,new A.a9(B.aA,B.aE,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.be4.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e5()
g.d_(11)
switch(this.b){case"plain":return
case"linen":$.Q()
w=A.K()
w.r=B.w.j(0.07).gp(0)
w.c=1
for(v=e.b,u=e.a,t=0;t<v;t+=4)d.ah(new A.o(0,t),new A.o(u,t),w)
$.Q()
s=A.K()
s.r=B.c.j(0.05).gp(0)
s.c=1
for(r=0;r<u;r+=4)d.ah(new A.o(r,0),new A.o(r,v),s)
break
case"stars":for(v=e.a,u=e.b,q=this.c,p=0;p<70;++p){o=g.ai()
n=g.ai()
m=g.ai()
$.Q()
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=q.j(0.25+g.ai()*0.5).gp(0)
d.N(new A.o(o*v,n*u),0.6+m*1.6,l)}break
case"rays":v=e.a*0.55
u=e.b
q=u*0.1
for(o=this.c,n=x.v,p=0;p<14;++p){k=0.47123889803846897+p*0.1691626813471427
m=$.Q()
l=A.a([],n)
j=new A.aF(m.r,B.ai,null,null,l)
l.push(new A.aZ(v,q))
j.ab()
m=k-0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.ak(i)
j.ab()
m=k+0.04
m=new A.aq(v+Math.cos(m)*u*1.4,q+Math.sin(m)*u*1.4)
l.push(m)
i=j.f
if(i!=null)m.ak(i)
j.ab()
m=new A.bv()
l.push(m)
l=j.f
if(l!=null)m.ak(l)
j.ab()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=o.j((p&1)===0?0.09:0.03).gp(0)
d.af(j,m)}break
default:$.Q()
w=A.K()
w.r=B.w.j(0.07).gp(0)
for(v=e.a,u=e.b,p=0;p<260;++p)d.N(new A.o(g.ai()*v,g.ai()*u),0.8+g.ai()*1.8,w)
$.Q()
h=A.K()
h.r=B.c.j(0.035).gp(0)
for(p=0;p<120;++p)d.N(new A.o(g.ai()*v,g.ai()*u),0.6+g.ai()*1.2,h)}},
aD(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bdW.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.Q(),j=A.K(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.a9
j.c=2.4
j.d=B.bu
for(w=e.a,v=e.b,v=[D.f3m,new A.cu([w,0,-1,1]),new A.cu([0,v,1,-1]),new A.cu([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
r=s[0]
q=s[1]
p=s[2]
o=s[3]
s=A.a([],u)
n=new A.aF(k,B.ai,null,null,s)
s.push(new A.aZ(r+p*34,q))
n.ab()
m=new A.aq(r,q)
s.push(m)
l=n.f
if(l!=null)m.ak(l)
n.ab()
m=new A.aq(r,q+o*34)
s.push(m)
s=n.f
if(s!=null)m.ak(s)
n.ab()
d.af(n,j)
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=i.j(0.9).gp(0)
d.N(new A.o(r+p*9,q+o*9),3,s)}},
aD(d){return!d.b.A(0,this.b)}}
C.uS.prototype={}
C.a_5.prototype={
S(){return new C.be2()}}
C.be2.prototype={
gop(){var w=this.d
return w===$?this.d=this.a.c:w},
gz2(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b6,B.aR),$.aw())}return v},
gaD6(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b6,B.aR),$.aw())}return v},
gasJ(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b6,B.aR),$.aw())}return v},
t(){var w=this,v=w.gz2(0),u=v.T$=$.aw()
v.P$=0
v=w.gaD6()
v.T$=u
v.P$=0
v=w.gasJ()
v.T$=u
v.P$=0
w.a3()},
atm(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jv(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d7u(this,f,u),e===u,s,s,s,s))}return A.bV(B.bG,r,B.bs,s,6,8)},
az6(d){var w=null,v=B.c.j(0.07)
return A.bt(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lV,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gop(),a0=f.gz2(0),a1=a0.a.a,a2=f.gaD6(),a3=a2.a.a,a4=f.gasJ(),a5=d.bfp(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.as(new A.a5(190,260,A.ev(B.A,new A.a5(270,370,new C.ZN(a5,d,f.a.e,e),e),B.f,B.dB),e),e,e,e)
a0=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.az6("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7T(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.az6("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7U(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zO[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aU
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.q(e,e,B.f,e,e,new A.p(e,e,new A.bG(o,o,o,o),e,e,new A.a9(B.aA,B.aE,B.x,t.c,e,e),B.a6),e,46,e,e,e,e,e,46)
q=q?B.c:B.aD
v.push(A.aA(e,A.x(A.a([p,B.cU,A.d(t.b,e,e,e,e,e,e,new A.F(!0,q,e,e,e,e,10.5,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7V(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bV(B.bG,v,B.bs,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b9.j(0.35):B.c.j(0.07)
m=new A.aN(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eL:B.L,2,B.r,-1)
q.push(A.aA(e,A.q(e,A.X(D.aBz[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bG(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7W(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bV(B.bG,q,B.bs,e,8,8)
a4=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.az6("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7X(f),e,e,e,!1,e,e,!1,e,!0,e,B.ad,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vC,e,e,e)
m=A.a([],w)
for(l=D.DK.gdO(D.DK),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eL:B.aU
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.q(e,e,B.f,e,e,new A.p(j,e,new A.bG(o,o,o,o),e,e,e,B.a6),e,34,e,e,e,e,e,34)
h=g?B.c:B.aD
m.push(A.aA(e,A.x(A.a([j,B.bH,A.d(i,e,e,e,e,e,e,new A.F(!0,h,e,e,e,e,10,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7Y(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bV(B.bG,m,B.bs,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vC,e,e,e)
k=f.gop()
return new A.D(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cP(new A.aY(0,1/0,0,a1.a.b*0.92),A.cl(A.a([D.fTU,B.af,d,B.aQ,a0,B.X,a2,B.aB,D.h_7,B.U,v,B.aB,D.fU2,B.U,q,B.aB,a4,B.aB,p,B.U,m,B.aB,l,A.kW(e,9,""+B.j.V(f.gop().f),36,18,new C.d7Z(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vC,e,e,e),B.am,f.atm(D.a6q,f.gop().r,new C.d8_(f),D.dCm),B.af,A.d("BORDER",e,e,e,e,e,e,M.vC,e,e,e),B.am,f.atm(D.a5L,f.gop().w,new C.d80(f),D.dCs),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vC,e,e,e),B.am,f.atm(D.a5H,f.gop().x,new C.d82(f),D.dDY),B.am,A.iQ(e,B.b9,e,B.ag,e,new C.d83(f),e,e,e,D.fO1,f.gop().z),B.bz,A.bJ(D.fSy,e,new C.d84(f,a6),A.bp(B.b9,e,e,e,e,B.oV,e,e,new A.b9(A.m(16),B.a1),e,e,e))],w),e,e,Z.amh,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIz.prototype={
a5(d,e){var w,v,u,t=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
t.E(new A.aZ(0,0))
w=e.a
t.E(new A.aq(w,0))
v=e.b
t.E(new A.aq(w,v))
t.E(new A.aq(w/2,v-12))
t.E(new A.aq(0,v))
t.E(new A.bv())
u=A.K()
u.sav(D.c7F.aK(0,new A.a1(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bjp.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.Q()
w=A.K()
w.sav(D.c6G.aK(0,new A.a1(0,0,a2,a3)))
a4.ar(new A.a1(0,0,a2,a3),w)
v=B.j.cL(a1/112)
u=new A.e5()
u.d_(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.d7U[u.aw(9)]
j=u.aw(14)
J.bo(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a1(n,j,n+m,j+l)
h=A.bn(i,B.hA)
g=new A.ao(B.O,B.M,B.R,B.S,B.P)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sav(new A.a9(B.a7,B.aa,B.x,A.a([f,k,e],w),d,d).aK(0,i))
a4.am(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ao(B.O,B.M,B.R,B.S,B.P)
e.r=E.kp.j(0.55).gp(0)
a4.ar(new A.a1(g,j,h,j+2),e)
e=new A.ao(B.O,B.M,B.R,B.S,B.P)
e.r=E.kp.j(0.4).gp(0)
a4.ar(new A.a1(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.sav(D.c63.aK(0,new A.a1(0,r,a2,q)))
a4.ar(new A.a1(0,r,a2,q),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.w.j(0.5).gp(0)
p.y=B.kU
a4.ar(new A.a1(0,q,a2,q+14),p)}t=A.K()
t.r=D.bg5.j(0.72).gp(0)
a4.ar(new A.a1(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.K()
a3.sav(new A.bY(B.A,0.5,B.x,d,0,A.a([D.bok.j(0.22),B.L],w),d,d).aK(0,A.bX(new A.o(t,a1),a0)))
a4.N(new A.o(t,a1),a0,a3)},
aD(d){return!1}}
C.bcd.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cK(14,w*2,v*2.2,v*2,o,o,new A.kS(new A.p(A.ar(D.kM,D.bto,w/4),o,new A.bG(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.LP,o,o,B.n),B.bj,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aLJ,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aN(2,2)
t.push(A.q(o,o,B.f,o,o,new A.p(E.kp.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.q(o,A.x(t,B.l,o,B.qV,B.i,0,B.p),B.f,o,o,new A.p(o,o,o,D.b4v,u,D.c7D,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dv,18)],v)
t=A.ap(o,A.b3(o,o,o,new C.aIz(o),D.fdF),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWp(p.y,r,L.iZ,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.fCZ,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.X,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,D.ftA,!0,B.a5,B.AG,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fCR,o,o,o),B.ax,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.5),o,o,o,o,o,o,o,o,11,B.cH,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.U,A.A(A.a([A.E(A.q(o,o,B.f,D.G5.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fJ,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.G5.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.G5.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Z1(A.cQ(A.a([A.cQ(o,o,o,o,o,o,o,o,o,D.fwM,B.a.aC(k,0,1)),A.cQ(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.iZ.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cd(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hW,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.iZ.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.by(B.LP,new A.am(B.a0,o,B.ab,B.t,A.a([t,new A.D(D.bFO,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ap(0,A.c2(o,new A.p(o,o,o,o,o,new A.a9(B.a7,B.aa,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bj),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.p(o,o,o,B.LP,v,D.c89,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.am(B.a0,o,B.ab,B.t,l,o)}}
C.alT.prototype={
S(){return new C.alU(new A.eA(0,$.aw()),new C.bT2(),new C.amb(),D.hBx,null,null)},
gd1(){return this.d}}
C.a1M.prototype={
a7(){return"_Step."+this.b}}
C.alU.prototype={
gCv(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE4(w.c,6,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N0(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gTV(){var w=this.ghb(0)
return w.gzn()==null?"Babu":B.a.i(w.gzn().b)},
Y(){var w,v=this
v.a4()
w=v.ghb(0).gzn()
w=w==null?null:w.c
v.r.b=w===D.ot
w=v.q_(new C.bRo(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2x("Come closer, my children. I am "+v.gTV()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
t(){var w=this,v=w.x
v===$&&A.c()
v.t()
v=w.y
if(v!=null)v.a1(0)
v=w.z
if(v!=null)v.a1(0)
w.w.t()
v=w.f
v.T$=$.aw()
v.P$=0
w.bw4()},
a2x(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.df(D.akT,new C.bRi(w))},
bsr(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bRr(v))},
adT(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bsj(){return this.baf()},
baf(){var w=this,v=w.gCv()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bRj(w))
w.a2x(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.m9,new C.bRk(w))},
cLg(){var w=this
w.m(new C.bRn(w))
w.a2x(w.gCv()[w.as].a)},
L3(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.acY)return
w=p.gCv()
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
t.r=s.a+1.5}q=new A.e5()
q.d_(v*7+d)
p.m(new C.bRm(p,d,u,q))
p.a2x(u?D.dnF[q.aw(4)]+" "+w[p.as].d:D.dke[q.aw(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCv()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bGj(t.at,t.ay,p)
t.m(new C.bRp(t,s))
t.a2x(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BS(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BT(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bRq())
w=1
break
case 4:++t.as
t.baf()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.Yc,new A.am(B.a0,v,B.ab,B.t,A.a([A.bR(0,new A.em(A.b3(v,v,v,new C.aWu(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cbX(0),B.b5,w.bRz()],t),B.l,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cbX(d){var w,v,u,t=this,s=null,r=A.aG(s,s,s,s,B.PX,s,s,s,new C.bRl(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCv().length;++w){v=t.as
if(w<v||t.Q===D.b0Q)v=B.cO
else v=w===v?B.c:B.aU
u=new A.aN(4,4)
p.push(A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bB7,s,s,s,22))}p=A.E(A.x(A.a([D.fKK,A.A(p,B.l,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.m(14)
u=A.L(B.fp,B.r,1)
return new A.D(D.bGZ,A.A(A.a([r,p,A.q(s,A.d("\ud83d\udd25 "+B.j.V(t.cy*100)+"%",s,s,s,s,s,s,B.iB,s,s,s),B.f,s,s,new A.p(B.aV,s,u,v,s,s,B.n),s,s,s,s,B.hc,s,s,s)],q),B.l,s,B.e,B.i,0,s,s),s)},
bRz(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzn()
if(h==null)w=1
else w=h.c===D.ot?0:1
v=j.dx
u=j.db
t=D.qj.j(0.96)
s=A.m(22)
r=A.L(B.cO,B.r,3)
q=A.b3(i,i,i,new C.bp_(w,i),B.az)
p=A.d(j.Q===D.acY?j.gTV()+" asks":"Elder "+j.gTV(),i,i,i,i,i,i,D.aVg,i,i,i)
o=j.db
o=B.a.aC(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c6,A.A(A.a([new A.a5(62,62,q,i),B.au,A.E(A.x(A.a([p,B.bH,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aVu,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbsq(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.as(j.a9Z("Sit down by the fire",j.gbsi()),i,i,i)
break
case 1:v=A.as(j.a9Z("Ask me, Elder",j.gcLf()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCv()[j.as].b,m<u.length;++m){q=new A.aN(14,14)
l=new A.ay(D.lB,2.5,B.r,-1)
v.push(A.aA(i,A.q(i,A.d(u[m],i,i,i,i,i,i,D.aVq,B.K,i,i),B.f,i,D.aeo,new A.p(D.ajS,i,new A.bG(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,U.wk,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bRf(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bV(B.bG,v,B.bs,i,8,8)
break
case 3:v=j.fr
u=v?B.k7:Ak.apO
u=A.X(u,v?B.eq:D.lB,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.eq:D.lB,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCv().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.a9Z(v,j.gqm(j))],n),B.l,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCv().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aVJ,i,i,i)],n)
u=j.cx
if(u>0){u=C.aQL(u)
q=C.aQL(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.abn,i,i,i))}v.push(B.U)
v.push(j.a9Z("Back to the games",new C.bRg(j)))
v=A.x(v,B.l,i,B.e,B.i,0,B.p)
break
default:v=i}return A.q(i,A.x(A.a([o,B.X,v],n),B.E,i,B.e,B.Q,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aD8,i,B.n),i,i,i,B.yD,B.bh,i,i,i)},
a9Z(d,e){var w=null,v=A.m(16),u=A.L(B.cO,B.r,2)
return A.aA(w,A.q(w,A.d(d,w,w,w,w,w,w,A2.KG,w,w,w),B.f,w,w,new A.p(D.lB,w,u,v,w,w,B.n),w,w,w,w,D.bEH,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bp_.prototype={
a5(d,e){X.fVV(d,e.ei(B.H),e.gdA()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aBz.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bT2.prototype={}
C.te.prototype={}
C.bp0.prototype={}
C.amb.prototype={
Mw(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.icC(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWu.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zm(l.d.Mw(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bo(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bU(0,u)
l.cAK(d,j)
l.bQ7(d,j)
l.cJ1(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bo(t.save())
t.translate(225,580)
d.pj(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.Q()
q=A.K()
p=x.O
o=x.n
q.sav(A.wc(B.H,r,A.a([D.bsc.j(0.55*s),F.Ni.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.H,r,q)
t.restore()
n=A.a([new A.y(528,new C.bSV(l,d,j,i)),new A.y(540,new C.bSW(l,d,j,i)),new A.y(546,new C.bSX(l,d,j,i)),new A.y(574,new C.bSY(l,d,j,i)),new A.y(612,new C.bSZ(l,d,j,i)),new A.y(650,new C.bT_(l,d,j,i)),new A.y(656,new C.bT0(l,d,j,i))],x.E)
B.d.aZ(n,new C.bT1())
for(m=0;m<7;++m)n[m].b.$0()
l.bH0(d,j,i)
l.bTM(d,j)
t.restore()
$.Q()
t=A.K()
t.sav(A.wc(new A.o(w/2,v*0.6),e.gao8()*0.75,A.a([B.L,D.bg_],p),A.a([0.55,1],o),B.x,k,k,0))
d.ar(new A.a1(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cAK(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e5()
h.d_(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=t.gp(0)
d.N(new A.o(v*450,20+u*300),0.8+s*1.1,r)}q=B.j.F(e,17)/1.2
if(q<1){p=new A.o(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.enp),C.iw(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.j.F(v+o*0.05,1)
s=-20+n*500
r=120+Math.sin(n*9+o)*14+o*12
m=Math.sin(u+o*2)
l=$.Q()
k=A.a([],t)
l=new A.aF(l.r,B.ai,null,null,k)
m=r+m*4
k.push(new A.aZ(s-6,m))
l.ab()
j=r-3
r=new A.c6(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ak(i)
l.ab()
s=new A.c6(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ak(r)
l.ab()
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.b=B.a9
s.c=1.6
s.r=D.biI.gp(0)
s.d=B.bu
s.e=B.dP
d.af(l,s)}},
bQ7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aA5[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bs(new A.o(p,m),n*0.74,q*0.5)
k=Aa.ym.j(v)
$.Q()
j=new A.ao(B.O,B.M,B.R,B.S,B.P)
j.r=k.gp(0)
d.bZ(l,j)
q=A.bs(new A.o(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=Q.y_.j(u).gp(0)
d.bZ(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.j.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.r=D.ahc.j(0.16*(1-h)).gp(0)
d.N(new A.o(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cJ1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDt(d,D.enl,0.9,e,D.hwR,!1,!1,D.b0N,1,!1)
w=$.Q().r
v=x.v
u=new A.aF(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bv())
t=A.K()
t.r=D.aja.gp(0)
d.af(u,t)
C.bDt(d,D.enn,0.95,e,D.hwM,!1,!1,D.b0O,1,!0)
t=new A.aF(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.c6(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.c6(431,553,421,548))
t.E(new A.bv())
u=A.K()
u.r=F.FO.gp(0)
d.af(t,u)
u=A.bs(D.enm,8,28)
t=A.K()
t.r=D.but.gp(0)
d.bZ(u,t)
C.bDt(d,new A.o(-30+B.j.F(e/26,1)*510,492),0.82,e,D.hwS,!0,!1,D.X4,1,!1)
t=B.j.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bZ(A.bs(new A.o(s+q*16,r-6),16,11),C.iw(D.aj1,1.8))
u=q<0
C.bDt(d,new A.o(s-q*6,r),0.62,e,D.hwU,!1,u,D.X4,2.2,!1)
C.bDt(d,new A.o(s-q*32,r+4),0.58,e+1,D.hwQ,!1,u,D.X4,2.2,!1)
this.bWv(d,D.en0,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bs(new A.o(o,n),8,11)
k=p===1
j=k?D.aiY:D.ajA
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.r=j.gp(0)
d.bZ(l,i)
l=k?D.aiY:D.ajA
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.r=l.gp(0)
d.N(new A.o(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.b=B.a9
k.c=1
k.r=B.av.gp(0)
k.d=B.bu
k.e=B.dP
d.ah(new A.o(o+7.5,n+(-2+m)),new A.o(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.b=B.a9
k.c=1
k.r=B.av.gp(0)
k.d=B.bu
k.e=B.dP
d.ah(new A.o(o,n+4),new A.o(o,n+8),k)}h=e<f.f
u=A.bs(D.a8p,15+Math.sin(e*2)*0.8,40)
t=A.K()
t.r=D.ahB.gp(0)
d.bZ(u,t)
u=A.bs(D.a8p.a2(0,new A.o(-14,h?-9:-2)),12,15)
t=A.K()
t.r=D.bkM.gp(0)
d.bZ(u,t)
t=new A.aF(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bv())
u=A.K()
u.r=D.bkW.gp(0)
d.af(t,u)
u=D.a8p.a2(0,new A.o(-17,h?-9:-2))
t=A.K()
t.r=B.ib.gp(0)
d.N(u,1.1,t)
v=new A.aF(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.c6(180,588+w*(h?6:0),178,595))
d.af(v,C.iw(D.ahB,3.5))},
bWv(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a2(0,new A.o(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.b=B.a9
m.c=2
m.r=D.Yo.gp(0)
m.d=B.bu
m.e=B.dP
d.ah(new A.o(u+o,s),new A.o(u+(o+n*1.5),q),m)}w=A.bs(k,17,32)
v=$.Q()
r=A.K()
r.r=D.FM.gp(0)
d.bZ(w,r)
r=A.bs(k.a2(0,D.ems),7,26)
w=A.ar(D.FM,B.w,0.12)
w.toString
q=A.K()
q.r=w.gp(0)
d.bZ(r,q)
v=new A.aF(v.r,B.ai,null,null,A.a([],x.v))
v.E(new A.aZ(u+13,t-3))
v.E(new A.aq(u+22,t-8+l))
v.E(new A.aq(u+20,t+l-0.5))
v.E(new A.aq(u+12,s))
v.E(new A.bv())
s=A.K()
s.r=D.FM.gp(0)
d.af(v,s)
s=A.bs(k.a2(0,new A.o(24,-7+l)),9,12)
v=A.K()
v.r=D.FM.gp(0)
d.bZ(s,v)
v=-11+l
d.ah(k.a2(0,new A.o(22,v)),k.a2(0,new A.o(21,-17+l)),C.iw(D.Yo,1.6))
d.ah(k.a2(0,new A.o(26,v)),k.a2(0,new A.o(28,-16+l)),C.iw(D.Yo,1.6))
v=k.a2(0,new A.o(26,-8+l))
s=A.K()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a2(0,new A.o(26,-3+l)),k.a2(0,new A.o(26,1+l)),C.iw(D.bnD,1.4))
d.ah(k.a2(0,D.epo),k.a2(0,new A.o(-19,-7+Math.sin(f*7)*2)),C.iw(D.FM,2.4))},
bTK(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bs(new A.o(225+u*36,574+(t*13+6)),8,11)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=D.bta.gp(0)
a6.bZ(u,t)}}u=A.bs(D.a8s.a2(0,B.cA),17,52)
$.Q()
t=A.K()
t.r=D.bfx.gp(0)
a6.bZ(u,t)
t=A.bs(D.a8s.a2(0,B.cA),12,44)
u=D.bj5.j(0.6+0.3*Math.sin(a7*6))
s=A.K()
s.r=u.gp(0)
a6.bZ(t,s)
for(r=0;r<3;++r){v=D.djH[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.b=B.a9
o.c=7
o.r=D.FZ.gp(0)
o.d=B.bu
o.e=B.dP
a6.ah(new A.o(u+t*24,579+s*4),new A.o(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Bz.j(0.6)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.b=B.a9
n.c=2
n.r=t.gp(0)
n.d=B.bu
n.e=B.dP
a6.ah(new A.o(u+o*24,579+(p*4-2)),new A.o(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f_x,D.f06,D.f1b,D.f1v,D.f19]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bqB,D.bmZ,D.bsB][k]
for(p=l.length,o=k===0,n=1-k*0.15,r=0;r<p;++r){h=l[r]
g=h.b
f=h.c
e=m*g*j*(0.9+0.12*Math.sin(u+f)+0.06*Math.sin(t+f*2))
d=Math.sin(s+f)*5*(e/m)
a0=225+h.a*n
a1=(12+8*a8.w)*g*j
g=$.Q()
f=A.a([],q)
a2=new A.aF(g.r,B.ai,null,null,f)
f.push(new A.aZ(a0-a1,578))
a2.ab()
g=a0+d*0.6
a3=new A.kR(a0-a1*1.1,578-e*0.45,g-a1*0.2,578-e*0.7,a0+d,578-e)
f.push(a3)
a4=a2.f
if(a4!=null)a3.ak(a4)
a2.ab()
g=new A.kR(g+a1*0.3,578-e*0.65,a0+a1*1.15,578-e*0.4,a0+a1,578)
f.push(g)
a3=a2.f
if(a3!=null)g.ak(a3)
a2.ab()
g=new A.bv()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ao(B.O,B.M,B.R,B.S,B.P)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.j.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.ajy.j((1-a5)*0.9)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.r=p.gp(0)
a6.N(new A.o(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.j.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ahc.j(0.1*(1-a5))
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=q.gp(0)
a6.N(new A.o(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTM(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.j.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.buD.j(0.18*p)
$.Q()
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.r=o.gp(0)
d.N(new A.o(r,q),5,n)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.r=D.bop.j(0.9*p).gp(0)
d.N(new A.o(r,q),1.4,n)}},
c5t(d,e){switch(d){case 0:return e.b?D.hwN:D.b0l
case 1:return e.b?D.hwT:D.b0j
case 2:return D.b0i
case 3:return D.b0h
case 4:return D.b0k
default:return D.b0m}},
aDk(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
R9(d,e,f,g){var w,v=this,u=D.a5T[e],t=v.c5t(e,g),s=new C.bp0(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a5T[e],l=e===0
m=B.j.D(((l?D.aLC:D.aLH).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a8w
s.as=D.Ea
if(l){s.a=o?v.aDk(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.o(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.o(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.Ea
if(g.a===3&&!g.d)s.e=m+Math.sin(r*6)*0.35*Math.max(0,1-r/1.8)
if(q){s.a=0.5
s.b=1
p=f*9
s.Q=new A.o(-4-Math.max(0,Math.sin(p))*7,-58)
p=s.as=new A.o(4+Math.max(0,Math.sin(p))*7,-58)}if(!q)p=!(o&&p.b<-50)
else p=!1
s.at=p}else if(e===1){s.b=0.35
if(o)s.r=Math.sin(f*2.4+1)*1.6
if(q){s.b=1
s.a=0.35+0.35*Math.max(0,Math.sin(f*13))
s.d=0.7
p=f*8
s.Q=new A.o(-4-Math.max(0,Math.sin(p))*7,-56)
s.as=new A.o(4+Math.max(0,Math.sin(p))*7,-56)
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.emA
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.enV
if(e===4)s.as=new A.o(36,-128+Math.sin(f*5)*4)}if(q){s.b=1
s.a=0.45+0.4*Math.max(0,Math.sin(f*12+e))
s.d=0.5
p=Math.max(0,Math.sin(f*9+e*1.3))*9
s.x=p
m=Math.max(0,Math.sin(f*10+e))*8
p=-56-p*0.3
s.Q=new A.o(-3-m,p)
s.as=new A.o(3+m,p)}else if(f<p){s.a=0.55
s.b=-0.1
s.c=1
s.Q=D.eqk
s.as=D.aLU}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDk(f,5)
s.b=0.4
s.as=new A.o(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDk(f,e*3)
s.b=0.5
s.c=0.4}}C.hzu(d,u.a,u.b*1.2,t,s,f,e,null)},
bH0(d,e,f){var w=new C.bSU(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gd6(d){return this.c}}
C.afT.prototype={
a7(){return"_Stand."+this.b}}
C.adS.prototype={}
C.ls.prototype={}
C.bRE.prototype={
bBC(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
G9(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bRF())
return r},
aro(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aN2(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amx(d){var w,v,u=A.aR(x.N),t=d,s=0
for(;;){w=t.d
if(w!=null){v=this.c
v===$&&A.c()
v=v.h(0,w)!=null&&u.J(0,t.a)}else v=!1
if(!v)break
v=this.c
v===$&&A.c()
w=v.h(0,w)
w.toString;++s
t=w}return s},
gzn(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bRG(this))
return B.d.gH(w)}}
C.aue.prototype={}
C.zE.prototype={}
C.akN.prototype={
gC1(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bMs(),A.U(w).k("Y<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.I(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MK.prototype={
gapq(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(t.gC1(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
p.push(A.I(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.I(["id",this.a,"title",q,"qs",p],u,t)},
d1v(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapq(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.J)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.ls(B.a.i(s.a),p,B.d.co(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bas.prototype={}
C.a9X.prototype={}
C.bhI.prototype={}
C.afR.prototype={}
C.ak5.prototype={
S(){return new C.ak6(B.bE,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.ak6.prototype={
gMO(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE4(w.c,8,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gbaB(){var w,v=this,u=v.e
if(u===$){w=v.q_(v.gcbZ())
v.e!==$&&A.bD()
v.e=w
u=w}return u},
Y(){this.a4()
this.gbaB().fX(0)},
t(){this.gbaB().t()
this.bw_()},
fX(d){this.m(new C.bKC(this))},
cc_(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bKx())},
b8X(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMO()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bhI(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bt(w,new C.bKD())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c8j()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMO()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.j.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.asV(v,0.8,B.cO)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.asV(m.cy,0.8,G.no)
m.aZz("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.asV(q,0.88,D.lB)
p=m.gMO()[m.x]
n=p.c
if(u===n){m.aZz("The right gourd fell! It was "+p.b[n]+".")
return}}}},
asV(d,e,f){var w,v,u,t=new A.e5()
t.d_(B.j.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.afR(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZz(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qi()}},
c8j(){var w=this
if(w.x+1>=w.gMO().length){w.Qi()
return}++w.x
w.b8X()},
Qi(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMO().length
r=C.bGj(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bKv())
w=2
return A.b(C.BS(u.a.d,r),$async$Qi)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BT(t.d,t.c.a,"catch",u.z),$async$Qi)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bKw())
return A.h(null,v)}})
return A.i($async$Qi,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cbY()
else w=v.ch?v.cc0():A.as(new A.D(B.ez,A.x(A.a([D.aWG,B.U,D.fMq,B.X,D.fSD,B.dY,C.uv("Play",v.geY(v),B.cO,B.hx,D.fz)],x.p),B.l,u,B.e,B.Q,0,B.p),u),u,u,u)
return new C.tG("Calabash Catch",w,B.f6,u)},
cc0(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hK:B.Hx
p.push(A.X(u,v?B.ay:B.bW,r,r,r,22))}p.push(B.b5)
v=s.x
u=s.gMO()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aVe,r,r,r))
p.push(B.bd)
v=A.m(14)
p.push(A.q(r,A.d(""+s.z,r,r,r,r,r,r,B.iB,r,r,r),B.f,r,r,new A.p(B.bA,r,r,v,r,r,B.n),r,r,r,r,B.GK,r,r,r))
p=A.A(p,B.l,r,B.e,B.i,0,r,r)
v=A.m(18)
t=A.L(B.cO,B.r,3)
return A.x(A.a([new A.D(D.bCt,p,r),A.q(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fwE,B.K,r,r),B.f,r,r,new A.p(D.qj,r,t,v,r,r,B.n),r,r,r,B.f3,B.bh,r,r,1/0),B.am,A.E(A.cs(new C.bKB(s)),1)],q),B.l,r,B.e,B.i,0,B.p)},
cbY(){var w=this,v=null,u=A.as(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pW,v,v,v),v,v,v),t=A.as(A.d(""+w.Q+" of "+w.gMO().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Vs,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cl(A.a([D.bd_,u,t,B.aQ,new C.Ir(s,r,w.cx,v),B.aQ,A.as(C.uv("Back to the games",new C.bKu(w),B.cO,B.k6,D.fz),v,v,v)],x.p),v,v,B.ad,v,v,B.ah,!1)}}
C.bcT.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.Q(),a3=A.K()
a3.sav(A.jy(B.H,new A.o(0,a0),D.d1P,G.aAn,B.x,e))
a4.ar(new A.a1(0,0,a1,0+a0),a3)
a3=A.K()
a3.r=G.Nm.gp(0)
a4.N(new A.o(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aF(a2.r,B.ai,e,e,w)
a2=a0*0.7
v.E(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.ak(s)
v.ab()}v.E(new A.aq(d,a0))
v.E(new A.aq(0,a0))
a2=$.Q()
w=A.K()
w.r=D.bk0.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aF(a2.r,B.ai,e,e,A.a([],a3))
w=a0*0.86
a2.E(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.E(new A.c6(r-14,t,r-10,s))
a2.E(new A.aq(r+10,s))
a2.E(new A.c6(r+14,t,r+26,w))
a2.E(new A.bv())
w=A.K()
w.r=D.agf.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cny[q]
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.agf.gp(0)
s.c=7
s.d=B.bu
a4.ah(new A.o(r,a2),new A.o(r+p*46,w),s)
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.afB.gp(0)
a4.N(new A.o(r+p*50,t),18,s)}a2=a0*0.88
w=A.K()
w.r=D.bkU.gp(0)
a4.ar(new A.a1(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=D.ahT.gp(0)
t.c=2
a4.ah(new A.o(w,a1),new A.o(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.J)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bs(new A.o(u,s),12,54)
$.Q()
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=D.lB.j(0.6).gp(0)
a4.bZ(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bo(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=D.agX.gp(0)
a4.N(D.elP,14,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=D.bpC.gp(0)
m.c=4
m.d=B.bu
a4.ah(D.elQ,D.emX,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.sav(new A.alE(D.ep5,46,D.dan,B.Dt,B.x,e,e,0))
a4.N(B.H,34,m)
m=A.bs(D.epc,8,12)
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=B.c.j(0.35).gp(0)
a4.bZ(m,l)
k=new A.iH(new A.en(n.c,e,e,B.cJ,e,e,e,e,e,e,D.fuv),B.K,B.bX,new A.jg(1),e,e,3,e,B.bY,e,B.cs)
k.o5(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bn(A.bs(B.cL,m.gba(m)+8,l),B.fN)
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=D.qj.gp(0)
a4.am(j,l)
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=D.lB.gp(0)
l.b=B.a9
l.c=1.5
a4.am(j,l)
l=k.b
m=l.c
l=l.a.c
k.a5(a4,new A.o(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
X.Bl(a4,new A.o(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dK,F.mU,!1,(w+1)/2)
h=A.bs(new A.o(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aF($.Q().r,B.ai,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.E(new A.aZ(w,a2))
t=h.c
a3.E(new A.aq(t,a2))
s=h.d
a3.E(new A.aq(t-8,s))
a3.E(new A.c6(h.gbw().a,s+8,w+8,s))
a3.E(new A.bv())
m=A.K()
m.r=D.Zd.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=D.Bz.gp(0)
m.c=1.4
a4.ah(new A.o(t,a2),new A.o(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.K()
s.r=G.no.gp(0)
a4.ar(new A.a1(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.K()
s.r=D.bk6.gp(0)
a4.bZ(new A.a1(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.J)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=g.e.j(B.j.D(s,0,1)).gp(0)
a4.N(new A.o(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fq(e,B.cs,e,e,e,A.cQ(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cO.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Dn,e,e),"+"+a2),B.a5,B.bX,e,B.dz,B.bY)
k.e5()
k.a5(a4,new A.o(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.QE.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b3(v,v,v,new C.aBx(w.c,w.f,v),B.az),s=A.m(10),r=A.L(B.bD,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cU,A.q(v,A.d(w.d,v,1,B.a2,v,v,v,D.fn4,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n0,v,v,v)],x.p),B.l,v,B.e,B.Q,0,B.p),v)},
gZ(d){return this.e}}
C.aBx.prototype={
a5(d,e){var w=e.ei(B.H),v=e.gdA(),u=this.c?0.8:0
return X.fVV(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aA1.prototype={}
C.auQ.prototype={
S(){return new C.auR(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.auR.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hEM(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gaFn(){var w=this.z
return w===$?this.z=this.Xl(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c_(w,-1,!1,x.S)}return v},
Xl(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aA1(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aA1(v[t],u[t],-1))
v=new A.e5()
v.d_(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eO$
u.b=!1
B.d.a8(u.a)
u=u.gow()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qD()}this.bws()},
cRm(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaFn()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cpZ(r,e,w,v))
A.cy(B.lH,new C.cq_(r))
return}++r.r
u=A.bl(null,B.hG,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cq0(r,d,e,w,v))
u.cr(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cG(n,0,new C.cq1())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cq2(t,r))
w=5
return A.b(C.BS(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BT(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cq3())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eO$
p.b=!1
B.d.a8(p.a)
p=p.gow()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qD()}o.a8(0)
t.m(new C.cq4(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.as(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pW,p,p,p),p,p,p)
v=r.f
v=A.as(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Vs,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tG(q,A.cl(A.a([D.af7,w,v,B.aQ,new C.Ir(u,t,r.ch,p),B.aQ,A.as(C.uv("Back to the games",new C.cpV(d),B.cO,B.k6,D.fz),p,p,p)],x.p),p,p,B.ad,p,p,B.ah,!1),B.f6,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tG(q,new A.D(B.uu,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aV9,B.K,p,p),A.E(A.cs(new C.cpW(r,s)),1)],x.p),B.l,p,B.e,B.i,0,B.p),p),B.f6,p)}}
C.bcm.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cQ_(),A.U(b2).k("Y<1>")).gI(0),b4=a9.b,b5=b4.a2(0,B.Jw)
$.Q()
w=A.K()
w.r=D.lC.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a2(0,D.elC)
u=A.K()
u.r=B.oj.j(0.5).gp(0)
u.c=10
u.d=B.bu
b6.ah(new A.o(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.dH.aA(0,B.j.D(b2[p],0,1))
l=$.Q().r
k=A.a([],s)
j=new A.aF(l,B.ai,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.c6((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aF(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),i=new A.rw(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jH(b1));--h
g=new A.BQ(i,h)
f=0
for(;;){i.iy()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.iy()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.Q()
a1=new A.ao(B.O,B.M,B.R,B.S,B.P)
a1.r=B.aU.gp(0)
a1.b=B.a9
a1.c=3
b6.af(new A.aF(l,d,b0,new A.cu([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aF(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),k=new A.rw(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jH(b1));--a0
k.iy()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.Q()
a4=new A.ao(B.O,B.M,B.R,B.S,B.P)
a4.r=D.Gb.gp(0)
a4.b=B.a9
a4.c=h
a4.d=B.bu
b6.af(new A.aF(l,a2,b0,new A.cu([new A.BQ(k,a0),0,a1*m,!0]),a3),a4)
k.iy()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.iy()
a5=n[a0].Dg(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bs(new A.o(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.O,B.M,B.R,B.S,B.P)
a3.r=B.b4.gp(0)
b6.bZ(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iH(D.fmy,B.a5,B.bX,new A.jg(1),b0,b0,b0,b0,B.bY,b0,B.cs)
a8.e5()
a8.a5(b6,new A.o(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.ayN.prototype={
S(){return new C.ayO(A.aR(x.S))},
gd1(){return this.d}}
C.ayO.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hFG(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
Y(){this.a4()
this.b95()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
b95(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.df(B.rR,new C.cEX(this))},
bq1(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cF4(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cF5(v,d))
A.cy(B.iL,new C.cF6(v))}},
cWP(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cF7(w))},
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
t.m(new C.cF8(t,s))
w=5
return A.b(C.BS(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BT(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cF9())
w=1
break
case 4:t.m(new C.cFa(t))
t.b95()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.as(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.pW,a2,a2,a2),a2,a2,a2)
v=A.as(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Vs,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tG(a1,A.cl(A.a([D.bdb,w,v,B.aQ,new C.Ir(u,t,a0.ax,a2),B.aQ,A.as(C.uv("Back to the games",new C.cEZ(a3),B.cO,B.k6,D.fz),a2,a2,a2)],x.p),a2,a2,B.ad,a2,a2,B.ah,!1),B.f6,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KO,B.K,a2,a2),B.X,A.as(A.lC(new C.cF_(a0,r),a2,B.b1,B.hG,a2,a2,new A.br(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aN(16,16)
l=new A.ay(B.cO,2,B.r,-1)
k=o+1
w.push(new A.r4(new A.br(0,1,u),new C.cF0(),A.q(a2,new A.c7(B.aL,B.e,B.i,B.l,a2,B.p,a2,0,A.a([new A.qF(A.d(""+k,a2,a2,a2,a2,a2,a2,B.nY,a2,a2,a2),D.lB,a2,12,a2),B.au,new A.bz(1,B.bc,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fzf,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.qj,a2,new A.bG(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cx,B.bh,a2,a2,a2),B.b1,B.iL,a2,new A.bI("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.as(A.bN(!1,D.h_x,a2,a2,!0,a2,a2,a2,a0.gcWO(),a2,a2),a2,a2,a2))
w.push(B.U)
if(a0.as){u=D.lC.j(0.2)
q=A.m(16)
p=A.L(D.lC,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fC,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.x(A.a([m,B.X,C.uv(v,a0.gqm(a0),B.cO,B.jH,D.fz)],t),B.l,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bF,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dl:B.cO.j(0.2)
g=new A.aN(16,16)
l=new A.ay(n.q(0,o)?B.fh:B.cO,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bW:B.c
d=n.q(0,o)?B.xf:a2
t.push(new A.r4(new A.br(0,i,u),new C.cF1(),A.aA(a2,A.q(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.F(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.aeh,new A.p(h,a2,new A.bG(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jn,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cF2(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b1,B.mb,a2,new A.bI("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bV(B.fR,t,B.bs,a2,10,10))}return new C.tG(a1,A.cl(w,a2,a2,B.alS,a2,a2,B.ah,!1),B.f6,a2)}}
C.azN.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aGZ.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.afF.prototype={
aqW(d){},
ars(){var w=this,v=w.q_(new C.f6I(w))
v.fX(0)
w.LW$!==$&&A.aQ()
w.LW$=v}}
C.aKM.prototype={
gbmt(d){var w=this.c
return B.a.aC(w,0,Math.min(this.d,w.length))},
VV(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.df(D.akT,new C.fgR(w))},
bsp(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.am1.prototype={
S(){return new C.am2(new C.amb(),A.a([],x.t),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am2.prototype={
gMM(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE4(w.c,10,w.e,!0)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N0(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gqu(){var w=this.r
return w===$?this.r=new C.aKM(new C.bSq(this)):w},
gapM(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMM()[v].c)u.push(1)
return u.length},
gblN(){var w=this.ghb(0)
return w.gzn()==null?"Elder":B.a.i(w.gzn().b)},
Y(){this.a4()
this.ars()},
t(){var w,v=this
v.gqu().t()
v.f.t()
w=v.LW$
w===$&&A.c()
w.t()
w=v.q8$
w.T$=$.aw()
w.P$=0
v.bw7()},
cLs(){var w=this
w.m(new C.bSn(w))
w.gqu().VV(w.gMM()[w.x].a)},
L3(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqu()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.q8$.a
v.ax=u
v.ay=u+1
v.m(new C.bSl())
A.cy(B.hG,new C.bSm(v))},
bpY(){var w=this.gapM(0)/this.gMM().length*100
if(w>=90)return D.eXn
if(w>=75)return D.eVp
if(w>=60)return D.eM4
if(w>=45)return D.ePv
return D.eGu},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.ctZ()
w=A.bR(0,new A.em(A.b3(m,m,m,new C.bt2(n,n.q8$),B.az),m),0,0,0)
if(!n.Q){v=D.qj.j(0.96)
u=A.m(20)
t=A.L(B.cO,B.r,3)
u=A.q(m,A.x(A.a([A.d("Elder "+n.gblN()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aW3,B.K,m,m),B.X,C.uv("Start the test",n.gBS(),B.cO,B.j2,D.fz)],x.p),B.l,m,B.e,B.Q,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.n),m,m,m,m,B.bF,m,m,m)
v=u}else{v=n.x
u=n.gMM()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aW5,m,m,m)
if(n.Q){t=n.gqu()
t=t.d<t.c.length}else t=!1
if(t)u=D.ff4
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aN(10,10)
o=new A.ay(D.Bz,4,B.r,-1)
s.push(A.aA(m,A.q(m,A.d(q[r],m,m,m,m,m,m,D.fqk,B.K,m,m),B.f,m,D.aeh,new A.p(D.bg4,m,new A.bG(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.O8,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bSo(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bV(B.fR,s,B.bs,new A.bI("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.ow(u,B.mV,A.pS(),B.b1,B.b1,A.LB())],x.p),B.l,m,B.e,B.Q,0,B.p)
v=u}return new C.tG("Village School",new A.am(B.a0,m,B.ab,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f6,m)},
ctZ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bpY(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMM()[v].c)g.push(v)
u=A.m(22)
t=A.L(B.cO,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fuO,B.K,i,i)
r=A.d("Signed by Elder "+j.gblN(),i,i,i,i,i,i,D.fts,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fyA,i,i,i),D.eyp],q)
o=A.d(h.b,i,i,i,i,i,i,D.fAw,i,i,i)
n=j.gapM(0)
m=j.gMM()
u=A.q(i,A.x(A.a([D.fLG,B.ax,s,r,B.X,new A.am(B.A,i,B.ab,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.abn,i,i,i),B.U,D.asF],q),B.l,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(D.qj,i,t,u,i,i,B.n),i,i,i,i,B.fs,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Ir(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aQ,D.h0B,B.U],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.J)(g),++l){v=g[l]
r=new A.aN(14,14)
k=new A.ay(B.bA,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.h_,i,i,i),B.ax,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fvY,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fyc,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.dl,i,new A.bG(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cx,B.bh,i,i,i))}B.d.v(s,u)}s.push(B.aB)
s.push(A.as(C.uv("Back to the games",new C.bSh(j),B.cO,B.k6,D.fz),i,i,i))
return new C.tG("Village School",A.cl(s,i,i,B.bQ,i,i,B.ah,!1),B.f6,i)}}
C.bt2.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.q8$.a
a0.zm(e.f.Mw(a1))
w=C.hcr(a1)
v=a0.c
J.bo(v.save())
v.translate(w.a,w.b)
a0.bU(0,w.c)
if(e.Q){u=e.gqu()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cX8[s]-6
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=D.FZ.gp(0)
a0.ar(new A.a1(u,340,u+12,450),r)}u=A.bn(D.a9q.cn(10),B.i2)
$.Q()
r=A.K()
r.r=D.Bz.gp(0)
a0.am(u,r)
r=A.bn(D.a9q,B.hR)
u=A.K()
u.sav(A.jy(new A.o(30,96),new A.o(420,346),D.dfH,f,B.x,f))
a0.am(r,u)
q=new A.e5()
q.d_(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bs(new A.o(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=B.c.j(0.025).gp(0)
a0.bZ(o,r)}u=A.K()
u.r=I.aiI.gp(0)
a0.ar(new A.a1(30,354,420,362),u)
u=A.K()
u.r=B.aP.gp(0)
a0.ar(D.f6t,u)
u=A.K()
u.r=B.bM.gp(0)
a0.ar(D.f6x,u)
u=A.bn(D.f6n,B.hQ)
r=A.K()
r.r=D.Zd.gp(0)
a0.am(u,r)
n=B.j.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqu().gbmt(0)
m=A.fq(f,B.cs,f,7,f,A.cQ(f,f,f,f,f,f,f,f,f,D.fCJ,u+(t?"|":"")),B.a5,B.bX,f,B.dz,B.bY)
m.o5(346)
J.bo(v.save())
u=A.hT(D.a9q)
r=$.mg()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hT(new A.a1(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.o(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bn(new A.a1(u,r,u+40,r+90),B.fN)
u=A.K()
u.r=D.bvp.gp(0)
a0.am(r,u)}}else{m=A.fq(f,B.cs,f,f,f,D.fmO,B.K,B.bX,f,B.dz,B.bY)
m.o5(340)
m.a5(a0,new A.o(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.j.F(u+p/8,1)
o=B.o.F(e.gqu().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.O,B.M,B.R,B.S,B.P)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.o(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzn()
i=(u==null?f:u.c)===D.ot?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f6J(d,a0,i,t,h,D.emM)),new A.y(520,new C.f6K(a0,d,t)),new A.y(575,new C.f6L(a0,d,t)),new A.y(585,new C.f6M(this,a0,d,t)),new A.y(615,new C.f6N(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f6O())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cc1(d,e){var w,v,u,t,s,r,q,p=$.Q(),o=A.a([],x.v),n=new A.aF(p.r,B.ai,null,null,o)
for(p=d.a,w=d.b,v=e*0.45,u=0;u<10;++u){t=-1.5707963267948966+u*3.141592653589793/5
s=(u&1)===0?e:v
r=p+Math.cos(t)*s
q=w+Math.sin(t)*s
if(u===0){r=new A.aZ(r,q)
o.push(r)
q=n.f
if(q!=null)r.ak(q)
n.ab()}else{r=new A.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.ak(q)
n.ab()}}n.E(new A.bv())
return n},
aD(d){return!1}}
C.am_.prototype={
S(){return new C.am0(new C.amb(),A.T(x.S,x.i),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am0.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hEA(w.c,w.e)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FI(0):w},
gaLD(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FI(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.co(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FI(0):r).length);++v}s.Q=w
r=w}return r},
FI(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e5()
u.d_(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bS3())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a4()
this.ars()},
t(){var w,v=this
v.e.t()
w=v.LW$
w===$&&A.c()
w.t()
w=v.q8$
w.T$=$.aw()
w.P$=0
v.bw6()},
aqW(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.co(u===$?r.z=r.FI(0):u,v)
s=r.gaLD()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLD()[v])*Math.min(1,w)}},
d1a(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bSe(v,d))
return}if(w===d){v.m(new C.bSf(v))
return}v.m(new C.bSg(v,B.d.co(v.gj1(),v.y),d,B.d.co(v.gj1(),d)))},
cM9(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FI(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FI(0):u)[v]]===v);++v}s.m(new C.bS9(s,B.d.cE(w,new C.bSa())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bSb(t,s))
w=5
return A.b(C.BS(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BT(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bSc())
w=1
break
case 4:t.m(new C.bSd(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.as(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.pW,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tG("Line Up",A.cl(A.a([D.af7,w,B.aQ,new C.Ir(v,u,l.ch,k),B.aQ,A.as(C.uv("Back to the games",new C.bS5(d),B.cO,B.k6,D.fz),k,k,k)],x.p),k,k,B.ad,k,k,B.ah,!1),B.f6,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bS6(l))
u=A.bR(0,A.cs(new C.bS7(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aW5,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fve,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fxq,B.K,k,k)],q),B.l,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.m(16)
n=l.ax
m=A.L(n?D.lC:G.no,B.r,2)
r.push(A.q(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bS8(l),x.cM).aO(0,", then ")+".",k,k,k,k,k,k,D.fzC,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.n),k,k,k,B.d3,B.bh,k,k,1/0))}if(!l.at)r.push(C.uv("That is my line!",l.gcM8(l),B.cO,B.hJ,D.fz))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uv(w,l.gqm(l),B.cO,B.jH,D.fz))}return new C.tG("Line Up",new A.am(B.a0,k,B.ab,B.t,A.a([u,s,A.ap(12,A.x(r,B.l,k,B.e,B.Q,0,B.p),k,k,12,12,k,k)],q),k),B.f6,k)}}
C.bjx.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.q8$.a
c7.zm(c5.e.Mw(c8))
w=C.hcr(c8)
v=c7.c
J.bo(v.save())
v.translate(w.a,w.b)
c7.bU(0,w.c)
u=c5.gj1().length
t=$.Q().r
s=x.v
r=new A.aF(t,B.ai,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.c6(225,500,440,470))
q=A.K()
q.r=D.Zd.gp(0)
q.b=B.a9
q.c=4
c7.af(r,q)
for(q=c6*3,p=0;p<12;++p){o=30+p*36
n=470+30*Math.sin(3.141592653589793*(o-10)/430)*0.95
m=Math.sin(q+p)
l=A.a([],s)
k=new A.aF(t,B.ai,c4,c4,l)
l.push(new A.aZ(o,n))
k.ab()
m=new A.aq(o+16,n+6+m*3)
l.push(m)
j=k.f
if(j!=null)m.ak(j)
k.ab()
m=new A.aq(o,n+20)
l.push(m)
j=k.f
if(j!=null)m.ak(j)
k.ab()
m=new A.bv()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=[B.cO,G.no,D.lC,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1b(c7,"OLDEST",D.enK,B.cO)
this.b1b(c7,"YOUNGEST",D.enc,B.b4)
t=A.bn(D.f6h,B.fN)
s=A.K()
s.r=D.FZ.gp(0)
c7.am(t,s)
s=A.bn(D.f6g,B.hR)
t=A.K()
t.r=D.Bz.gp(0)
c7.am(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.drf())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.J)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.co(a1===$?c5.z=c5.FI(0):a1,f)
o=c5.gaLD()[f]
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
if(a3){$.Q()
a9=new A.ao(B.O,B.M,B.R,B.S,B.P)
a9.r=B.cO.j(0.22+0.1*Math.sin(e)).gp(0)
c7.N(new A.o(o,520),54,a9)}a9=D.djv[B.o.F(b0,6)]
if(b1)b3=1
else b3=a7?-0.4:0.35
if(b1)b4=0.4+0.4*b2
else b4=h&&a7?0.5:0
if(h&&a7)b5=1
else b5=a3?0.6:0
b6=b1?0.5:0
b7=a7?Math.sin(d)*0.5:0
b8=b1?a4+b2*8:a4
if(b1)b9=new A.o(-3-b2*8,-56)
else b9=a3?D.epR:c4
if(b1)c0=new A.o(3+b2*8,-56)
else if(h&&a7)c0=D.aLU
else c0=a3?new A.o(30,-104+Math.sin(e)*5):c4
C.Sx(c7,new A.o(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Jy,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iH(new A.en(a8,c4,c4,B.cJ,c4,c4,c4,c4,c4,c4,D.fsY),B.a5,B.bX,new A.jg(1),"\u2026",c4,1,c4,B.bY,c4,B.cs)
c1.o5(q)
c2=A.bn(A.bs(new A.o(o,650),24,c1.b.c+16),B.fN)
$.Q()
a8=new A.ao(B.O,B.M,B.R,B.S,B.P)
if(a6)a9=B.i9
else a9=a7?B.rL:D.qj
a8.r=a9.gp(0)
c7.am(c2,a8)
a8=new A.ao(B.O,B.M,B.R,B.S,B.P)
if(a6)a9=D.lC
else a9=a7?G.no:D.lB
a8.r=a9.gp(0)
a8.b=B.a9
a8.c=2
c7.am(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.o(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iH(new A.en(""+(a2+1),c4,c4,B.cJ,c4,c4,c4,c4,c4,c4,D.fth),B.a5,B.bX,new A.jg(1),c4,c4,c4,c4,B.bY,c4,B.cs)
c3.e5()
c3.a5(c7,new A.o(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.j.F(p*53+Math.sin(c5+p)*20,450)
q=B.j.F(t+p*37,420)
J.bo(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bs(B.H,4,8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=[B.cO,G.no,D.lC,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.ar(q,m)
v.restore()}v.restore()},
b1b(d,e,f,g){var w,v,u=null,t=A.fq(u,B.cs,u,u,u,A.cQ(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Dn,u,u),e),B.a5,B.bX,u,B.dz,B.bY)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aJ(0,new A.o(v/2,w.gba(w)/2)))},
aD(d){return!1}}
C.a24.prototype={
a7(){return"_Trip."+this.b}}
C.alW.prototype={
S(){return new C.alX(D.X9,new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alX.prototype={
gDt(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE4(w.c,8,w.e,!1)
u.d!==$&&A.bD()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N0(v.a.c)
v.e!==$&&A.bD()
v.e=w
u=w}return u},
gqu(){var w=this.f
return w===$?this.f=new C.aKM(new C.bRQ(this)):w},
gTV(){var w=this.ghb(0)
return w.gzn()==null?"Grandma":B.a.i(w.gzn().b)},
Y(){this.a4()
this.ars()},
t(){var w,v=this
v.gqu().t()
w=v.LW$
w===$&&A.c()
w.t()
w=v.q8$
w.T$=$.aw()
w.P$=0
v.bw5()},
aqW(d){var w,v,u,t=this
if(t.r!==D.ad7)return
w=B.dC.aA(0,B.j.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDt()
if(v+1>=u.length){t.r=D.ad8
t.WR()}else{++t.w
t.ay=!1
t.r=D.Xa
t.gqu().VV(u[t.w].a)}if(t.c!=null)t.m(new C.bRO())}},
WR(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqu().VV("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDt().length
r=C.bGj(t,u.z,s)
u.as=r
w=2
return A.b(C.BS(u.a.d,r),$async$WR)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BT(s.d,s.c.a,"journey",u.x*10),$async$WR)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bRI())
return A.h(null,v)}})
return A.i($async$WR,v)},
brh(){this.aUj()},
aUj(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.ad7
if(w.c!=null)w.m(new C.bRJ())},
L3(d){var w,v,u,t,s=this
if(s.r!==D.Xa)return
w=s.gDt()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bRN(s,d,v))
u=s.gqu()
t=s.w
u.VV(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cRl(){if(this.r!==D.B7)return
this.aUj()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.em(A.b3(s,s,s,new C.biY(t,t.q8$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDt().length;++w){v=t.w
if(w<v||t.r===D.ad8)v=B.cO
else v=w===v?B.c:B.aU
u=new A.aN(4,4)
p.push(new A.bz(1,B.bc,A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wo,s,s,s,s),s))}p.push(B.bm)
p.push(D.fNk)
return new C.tG("Safari Journey",new A.am(B.a0,s,B.ab,B.t,A.a([r,A.ap(s,A.A(p,B.l,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.clC(),s,s,10,10,s,s)],q),s),B.f6,s)},
clC(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bRM(o),l=D.qj.j(0.96),k=A.m(22),j=A.L(B.cO,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTV()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aW3,B.K,n,n),B.X,C.uv("Start the journey",o.gbrg(),B.cO,D.bQ9,D.fz)],x.p),B.l,n,B.e,B.Q,0,B.p)
break
case 3:w=D.bcL
break
case 1:w=o.w
v=o.gDt()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aN(14,14)
p=new A.ay(D.lB,2.5,B.r,-1)
t.push(A.aA(n,A.q(n,A.d(r[s],n,n,n,n,n,n,D.aVq,B.K,n,n),B.f,n,D.aeo,new A.p(D.ajS,n,new A.bG(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,U.wk,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bRK(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.U,A.bV(B.bG,t,B.bs,n,8,8)],u),B.E,n,B.e,B.Q,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDt().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.U,new A.bM(B.aa,n,n,C.uv(v,o.gcRk(),B.cO,B.jH,D.fz),n)],x.p),B.E,n,B.e,B.Q,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTV()),B.U,A.d(""+o.x+" of "+o.gDt().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aVJ,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aQL(v)
u=C.aQL(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.abn,n,n,n))}w.push(B.U)
w.push(A.as(C.uv("Back to the games",new C.bRL(o),B.cO,B.k6,D.fz),n,n,n))
w=A.x(w,B.E,n,B.e,B.Q,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.p(l,n,j,k,D.aD8,n,B.n),n,n,n,n,B.bh,n,n,n)}}
C.biY.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.q8$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDt(),d0=B.j.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.ad7,d2=c7*0.5
c8=A.ar(D.bhx,D.brU,d0)
c8.toString
w=A.ar(D.Yq,G.aht,d0)
w.toString
v=A.ar(B.u6,D.bqm,d0)
v.toString
$.Q()
u=A.K()
t=x.O
u.sav(A.jy(B.H,new A.o(0,d2),A.a([c8,w,v],t),G.a4n,B.x,c3))
d3.ar(new A.a1(0,0,0+c6,0+c7),u)
s=new A.o(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.K()
u.sav(A.wc(s,60,A.a([D.bqL,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.K()
u.r=B.YC.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.j.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dyJ[o]
$.Q()
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=B.c.j(0.75).gp(0)
d3.N(new A.o(q+n.a,p+n.b),18,u)}}for(w=d0*0.7,v=d2+4,u=d2-16,m=x.v,l=0;l<2;++l){k=$.Q()
j=A.a([],m)
i=new A.aF(k.r,B.ai,c3,c3,j)
j.push(new A.aZ(0,v))
i.ab()
for(k=u-l*12,h=0.12+l*0.1,g=70+l*30,f=14-l*3,q=0;q<=c6;q+=6){e=new A.aq(q,k+Math.sin((q+c4.CW*h)/g)*f)
j.push(e)
d=i.f
if(d!=null)e.ak(d)
i.ab()}k=new A.aq(c6,v)
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
$.Q()
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.r=A.ar(l===0?D.bg6:D.buR,D.bl0,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cc2(d3,new A.o(B.j.F(B.j.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.Q()
w=A.K()
v=A.ar(D.aj1,D.Gb,d0)
v.toString
w.sav(A.jy(new A.o(0,d2),new A.o(0,c7),A.a([v,D.bqN],t),c3,B.x,c3))
d3.ar(new A.a1(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.K()
w.r=D.bkk.gp(0)
d3.ar(new A.a1(0,a0,c6,a1),w)
w=A.K()
w.r=D.bux.gp(0)
d3.ar(new A.a1(0,a0-3,c6,a0),w)
for(q=-B.j.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=I.MF.gp(0)
d3.ar(new A.a1(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.Q()
b2=new A.ao(B.O,B.M,B.R,B.S,B.P)
b2.r=D.bfM.gp(0)
d3.ar(new A.a1(b0,v,b0+52,u),b2)
b2=A.a([],m)
b1=new A.aF(b1.r,B.ai,c3,c3,b2)
b2.push(new A.aZ(a9-36,t))
b1.ab()
b0=new A.aq(a9,a6)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.ak(b3)
b1.ab()
b0=new A.aq(a9+36,t)
b2.push(b0)
b3=b1.f
if(b3!=null)b0.ak(b3)
b1.ab()
b0=new A.bv()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ak(b2)
b1.ab()
b0=new A.ao(B.O,B.M,B.R,B.S,B.P)
b0.r=D.bsK.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ao(B.O,B.M,B.R,B.S,B.P)
b1.r=D.fz.gp(0)
d3.ar(new A.a1(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ao(B.O,B.M,B.R,B.S,B.P)
b0.r=D.FZ.gp(0)
d3.ar(new A.a1(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bn(new A.a1(b0,a4,b0+60,a5),B.iA)
b0=new A.ao(B.O,B.M,B.R,B.S,B.P)
b0.r=D.bvV.gp(0)
d3.am(b5,b0)
b0=new A.ao(B.O,B.M,B.R,B.S,B.P)
b0.r=D.Bz.gp(0)
b0.b=B.a9
b0.c=2
d3.am(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iH(new A.en(b6,c3,c3,B.cJ,c3,c3,c3,c3,c3,c3,D.frp),B.a5,B.bX,new A.jg(1),c3,c3,c3,c3,B.bY,c3,B.cs)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.o(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.ad8
else if(r===c4.w){b0=c4.r
b0=b0===D.Xa||b0===D.B7
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzn()
b9=(b0==null?c3:b0.c)===D.ot?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqu()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.B7
b0=c0?C.hAZ(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Xa?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.o(40,-110+Math.sin(g)*10)
else a7=c0?new A.o(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Sx(d3,new A.o(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.o(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIo(d3,new A.o(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.j.F(w+r/7,1)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=D.bu1.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.X9)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.j.F(w+r/5,1)
t=Math.sin(r+c8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.B7&&c4.ax){b7=A.fq(c3,B.cs,c3,c3,c3,A.cQ(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cO,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A6.Iy,c3,c3),"BEEP BEEP!"),B.a5,B.bX,c3,B.dz,B.bY)
b7.e5()
b7.a5(d3,new A.o(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cc2(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.bqg,D.bjD,g)
o.toString
if(f){w=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
v=e.a
u=e.b
w.E(new A.aZ(v-16,u))
t=u-36
s=u-56
w.E(new A.c6(v-9,t,v-7,s))
w.E(new A.aq(v+7,s))
w.E(new A.c6(v+9,t,v+16,u))
w.E(new A.bv())
t=A.K()
t.r=D.ZG.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d06[r]
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=D.ZG.gp(0)
p.c=4
p.d=B.bu
d.ah(new A.o(w,t),new A.o(v+q*24,s),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=o.gp(0)
d.N(new A.o(v+q*26,u),10,p)}}else{w=e.a2(0,D.epO)
$.Q()
v=A.K()
v.r=D.bfO.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bs(e.a2(0,D.epP),16,60)
w=A.K()
w.r=o.gp(0)
d.bZ(v,w)}},
bIo(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.X9?0.045:0,a1=a2.c
J.bo(a1.save())
a1.translate(a3.a,a3.b+e)
a2.hW(0,a0)
for(w=0;w<2;++w){v=D.dra[w]
u=d.ay&&d.r!==D.X9&&v>0
J.bo(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.Q()
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.buJ.gp(0)
a2.N(B.H,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.bn4.gp(0)
a2.N(B.H,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=B.br.gp(0)
q.c=2
a2.ah(B.H,new A.o(s*9,t*9),q)}a1.restore()}p=A.u3(D.f6E,B.fN,B.fN,B.il,B.hP)
$.Q()
t=A.K()
t.sav(A.jy(D.elS,B.a8k,D.dh2,G.a4n,B.x,f))
a2.am(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.db7[B.o.F(o,4)].gp(0)
a2.ar(new A.a1(t,-26,t+10,-19),s)}n=d.r===D.B7&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a1(s,-66,q,-36)
J.bo(a1.save())
a1.clipRRect(A.nP(A.bn(l,B.mw)),$.np(),!0)
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.r=D.Yq.gp(0)
a2.ar(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.B7?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Sx(a2,new A.o(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aLL,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bn(l,B.mw)
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.r=D.ajU.gp(0)
i.b=B.a9
i.c=2
a2.am(j,i)}d=A.bn(D.Uy,B.mw)
t=A.K()
t.r=D.Yq.gp(0)
a2.am(d,t)
J.bo(a1.save())
a1.clipRRect(A.nP(A.bn(D.Uy,B.mw)),$.np(),!0)
C.Sx(a2,new A.o(D.Uy.gbw().a,-10),0,0,0.7,-0.1,f,f,D.aLL,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bn(D.Uy,B.mw)
d=A.K()
d.r=D.ajU.gp(0)
d.b=B.a9
d.c=2
a2.am(t,d)
d=A.K()
d.r=An.Gc.gp(0)
a2.N(D.enY,4,d)
d=A.K()
d.r=D.FZ.gp(0)
a2.ar(D.f7N,d)
for(w=0;w<3;++w){v=D.drc[w]
d=A.bn(new A.a1(v,-96,v+28,-79),B.iA)
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=D.Gb.gp(0)
a2.am(d,t)}a1.restore()},
aD(d){return!1}}
C.aBA.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgv.prototype={}
C.aBC.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgw.prototype={}
C.aBD.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bgx.prototype={}
C.a6v.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b3(w,w,w,new C.bj4(w),B.az),w)}}
C.bj4.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dp8[B.o.F(n,6)]
k=$.Q()
j=new A.ao(B.O,B.M,B.R,B.S,B.P)
j.r=l.gp(0)
d.ar(new A.a1(m,0,m+v,u),j)
if(B.o.F(n,3)===0){j=A.a([],o)
i=new A.aF(k.r,B.ai,null,null,j)
k=m+r
j.push(new A.aZ(k,f))
i.ab()
h=new A.aq(m+p,s)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
k=new A.aq(k,q)
j.push(k)
h=i.f
if(h!=null)k.ak(h)
i.ab()
k=new A.aq(m+t,s)
j.push(k)
h=i.f
if(h!=null)k.ak(h)
i.ab()
k=new A.bv()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aD(d){return!1}}
C.tG.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aG(w,w,w,w,B.PX,w,w,w,new C.bRH(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.foH,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c4(w,D.Yc,A.q(w,A.bm(!0,A.x(A.a([D.c4I,new A.D(D.bH2,A.A(u,B.l,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b8e,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Ir.prototype={
B(d){var w=null,v=this.d,u=C.aQL(v),t=C.ijk(v),s=B.c.j(0.08),r=A.m(18),q=A.L(B.cO.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fra,w,w,w)],x.p)
if(this.e)p.push(D.esh)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.h_,w,w,w))
if(t!=null)p.push(new A.D(B.us,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AN,w,w,w),w))
return A.q(w,A.x(p,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.n),w,w,w,w,B.bF,w,w,w)}}
C.Wh.prototype={
S(){return new C.blR(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cYd(d){return this.f.$1(d)},
ge3(){return this.d}}
C.blR.prototype={
gSU(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a4()
this.Pv()},
Pv(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bSs(u.a.d),$async$Pv)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.df5[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bSr(p,(o===$?u.d=q.c:o).a,r),$async$Pv)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e1n(u,n))
return A.h(null,v)}})
return A.i($async$Pv,v)},
uy(d){return this.coF(d)},
coF(d){var w=0,v=A.j(x.H),u=this,t
var $async$uy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).cd(A.ec(new C.e1o(d),!1,null,x.H)),$async$uy)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pv()
return A.h(null,v)}})
return A.i($async$uy,v)},
gb6u(){var w,v,u,t=C.N0(this.gSU()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2q(d){return this.cvS(d)},
cvS(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2q=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.J)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cYd(r),$async$a2q)
case 2:if(u.c!=null)u.m(new C.e1p(u,r))
return A.h(null,v)}})
return A.i($async$a2q,v)},
OP(d){return this.bR5(d)},
bR5(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.heH(t.gSU())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MK("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).cd(A.ec(new C.e1l(q),!1,null,r)),$async$OP)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.J)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e1m(p))
o=s.length
B.d.c4(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2q(A.cW(s,0,A.dA(2,"count",x.S),r).dn(0)),$async$OP)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
XN(d,e){return this.bOF(0,e)},
bOF(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e1k(e),o,null,!0,!0,x.y),$async$XN)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.heH(u.gSU()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.J)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2q(o),$async$XN)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XN,v)},
aa6(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e1h(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.L(B.aU,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cA,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Vn,p,p,p),B.b5],s)
q=A.m(10)
r.push(A.q(p,A.d(i,p,p,p,p,p,p,D.fpA,p,p,p),B.f,p,p,new A.p(B.hu,p,p,q,p,p,B.n),p,p,p,p,B.Cn,p,p,p))
return A.aA(p,A.d3(A.q(p,A.x(A.a([A.A(r,B.l,p,B.e,B.i,0,p,p),B.b5,A.d(e,p,2,p,p,p,p,D.fxj,p,p,p),B.cU,A.d(f,p,3,B.a2,p,p,p,D.fqi,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a9(B.aA,B.aE,B.x,w,p,p),B.n),p,p,p,p,B.yI,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xg(d,e,f,g,h,i){return this.aa6(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.N0(s.gSU()),p=s.gSU(),o=C.aQL(s.e),n=C.heH(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e1q(s),k=C.hEA(p,1).length,j=C.hEM(p,1).length,i=C.hFG(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.L(B.cO.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.abc,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fuS,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.bd,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,B.VF,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pW,r,r,r),D.fTG],a1),B.l,r,B.e,B.i,0,B.p)],a1),B.l,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.n),r,r,r,r,B.bF,r,r,r)
f=s.Xg("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aF,new C.e1r(s,p),l.$1("kahoot"))
h=s.Xg("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lB,new C.e1s(s,p),l.$1("fire"))
a0=s.Xg("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.w9,new C.e1t(s,p),l.$1("catch"))
j=j!==0?new C.e1w(s,p):r
j=s.aa6("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hq,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e1x(s,p):r
i=s.aa6("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kJ,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xg("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eX,new C.e1y(s,p),l.$1("journey"))
k=k!==0?new C.e1z(s,p):r
k=A.a([g,B.aQ,D.fXG,B.U,A.kV(0.98,A.a([f,h,a0,j,i,e,s.aa6("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eq,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xg("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.cZ,new C.e1A(s,p),l.$1("school"))],a1),2,12,12,r,B.dW,!0),B.d8,A.A(A.a([D.bIT,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fpE,r,r,r)],a1),B.l,r,B.e,B.i,0,r,r),B.U],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.J)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aN(18,18)
u=new A.ay(B.aU,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fEi,B.bd,new A.bz(1,B.bc,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hl,r,r,r),A.d(""+v.gapq(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AN,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gapq(0).length>=2){f=D.lC.j(0.2)
t=new A.ay(D.lC,1,B.r,-1)
g.push(A.aA(r,A.q(r,A.X(B.hx,D.lC,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1B(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cO.j(0.2)
t=new A.ay(B.cO,1,B.r,-1)
f=A.aA(r,A.q(r,A.X(B.j2,B.cO,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1C(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fh.j(0.2)
t=new A.ay(B.fh,1,B.r,-1)
B.d.v(g,A.a([B.bm,f,B.bm,A.aA(r,A.q(r,A.X(B.eh,B.fh,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bG(t,t,t,t),r,r,r,B.a6),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1D(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.c7(B.aL,B.e,B.i,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bG(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bh,r,r,r))}if(s.a.e){j=m?new C.e1u(s):new C.e1v(a2)
i=A.m(18)
h=A.L(m?B.cO:B.aU,B.r,2)
g=m?B.cO.j(0.12):B.dl
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.q(r,A.as(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cO:B.aD,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.n),r,r,r,r,B.NX,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fYC)
k.push(B.aB)
k.push(D.asF)
return new C.tG("Family Games \xb7 "+p.b,A.cl(k,r,r,D.bD3,r,r,B.ah,!1),B.f6,r)}}
C.a_X.prototype={
a7(){return"_KPhase."+this.b}}
C.alY.prototype={
S(){return new C.alZ(D.b0c)},
gd1(){return this.e}}
C.alZ.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fX(d){var w,v=this
v.m(new C.bS1(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.df(B.fI,new C.bS2(v))},
aPQ(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bRS(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.df(B.ff,new C.bRT(w))},
L3(d){var w
if(this.d!==D.acE)return
w=this.at
if(w!=null)w.a1(0)
this.b6q(d)},
b6q(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.j.V(500+500*B.j.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bRY(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.rR,v.gix(v))},
cKM(d){var w=this
if(w.d!==D.WI)return
if(w.e+1>=w.a.w.length)w.Yy()
else{w.m(new C.bRZ(w))
w.aPQ()}},
Yy(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bGj(p,u.w,t)
u.m(new C.bRV(u,s))
w=2
return A.b(C.BS(u.a.e,s),$async$Yy)
case 2:r=e
t=u.a
w=3
return A.b(C.BT(t.e,t.f,t.r,u.f),$async$Yy)
case 3:q=e
if(u.c!=null)u.m(new C.bRW(u,r,q))
return A.h(null,v)}})
return A.i($async$Yy,v)},
cLB(){var w,v,u,t,s=this,r=s.a,q=new A.e5()
q.d_(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cW(r,0,A.dA(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bQ(r,r.gI(0),u.k("bQ<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.j.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bS_())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b0c===r){w=A.a([D.fU4,B.X,A.d(s,t,t,t,t,t,t,B.KR,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fpM,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.xn,B.K,t,t))
w.push(B.dY)
w.push(C.uv("Play",u.geY(u),B.cO,B.hx,D.fz))
w=A.as(new A.D(B.ez,A.x(w,B.l,t,B.e,B.Q,0,B.p),t),t,t,t)
break A}if(D.b0d===r){w=A.as(A.d(""+u.z,t,t,t,t,t,t,D.fxR,t,t,t),t,t,t)
break A}if(D.acE===r||D.WI===r){w=u.crg()
break A}if(D.b0e===r){w=u.cc3()
break A}w=t}return new C.tG(s,w,B.f6,t)},
crg(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.WI,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aVe,j,j,j),B.b5],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KO,j,j,j))
g.push(B.au)
f=A.m(14)
g.push(A.q(j,A.d(""+k.f,j,j,j,j,j,j,B.iB,j,j,j),B.f,j,j,new A.p(B.bA,j,j,f,j,j,B.n),j,j,j,j,B.GK,j,j,j))
g=A.A(g,B.l,j,B.e,B.i,0,j,j)
f=A.m(6)
w=i?0:B.j.D(k.as/k.a.w[k.e].r,0,1)
f=A.by(f,A.kp(B.bA,j,k.as<5?B.fh:B.cO,9,j,w,j),B.aq)
w=A.m(22)
v=A.L(B.cO,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lC:G.no,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.U,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.foQ,B.K,j,j)],h),B.l,j,B.e,B.Q,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fA0,B.K,j,j)
w=A.E(A.q(j,A.as(u,j,j,j),B.f,j,j,new A.p(D.qj,j,v,w,j,j,B.n),j,j,j,j,B.fs,j,j,1/0),3)
v=A.a([],h)
for(u=k.gix(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bRX(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aCL[o]
m=new A.aN(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aD5[o],j,j,j,j,j,j,D.fqM,j,j,j),B.au,new A.bz(1,B.bc,A.d(r[t],j,3,B.a2,j,j,j,D.fpJ,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(P.ara)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bXw)
v.push(A.aA(j,new A.SN(A.q(j,new A.c7(B.aL,B.e,B.i,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bG(l,l,l,l),new A.be(m,m,m,m),V.aB8,j,B.n),j,j,j,j,B.f3,j,j,j),p,B.b1,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.kV(1.45,v,2,10,10,j,B.dW,!1),4)],h)
if(i)h.push(D.erw)
return new A.D(B.a0i,A.x(h,B.l,j,B.e,B.i,0,B.p),j)},
cc3(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cLB(),m=x.p,l=A.a([D.bc2,A.as(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pW,o,o,o),o,o,o),A.as(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Vs,o,o,o),o,o,o),B.aQ],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cO.j(0.25):B.dl
u=new A.aN(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cO:B.bA,1,B.r,-1)
q=A.d(w<3?D.dhk[w]:""+(w+1),o,o,o,o,o,o,B.ne,o,o,o)
s=s?B.u:B.V
l.push(A.q(o,new A.c7(B.aL,B.e,B.i,B.l,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bc,A.d(t.a,o,o,o,o,o,o,new A.F(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iB,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bG(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cx,B.eY,o,o,o))}l.push(B.X)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Ir(m,v,p.CW,o))
l.push(B.aQ)
l.push(A.as(C.uv("Back to the games",new C.bRU(p),B.cO,B.k6,D.fz),o,o,o))
return A.cl(l,o,o,B.fs,o,o,B.ah,!1)}}
C.TY.prototype={
S(){return new C.alV(A.T(x.de,x.er))}}
C.alV.prototype={
gD5(){var w,v=this,u=v.d
if(u===$){w=C.hku(v.a.c.aj())
v.d!==$&&A.bD()
v.d=w
u=w}return u},
glR(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD5().b
v=$.aw()
u.e!==$&&A.bD()
t=u.e=new A.au(new A.ba(w,B.b6,B.aR),v)}return t},
cf3(d){return this.f.c3(0,d,new C.bRs(d))},
Y(){this.a4()
var w=this.gD5().c
if(w.length===0)w.push(C.h6d(null,0,20,""))},
t(){var w,v,u=this.glR(0)
u.T$=$.aw()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aU(u.d);w.C();){v=w.gR(w)
v.T$=$.aw()
v.P$=0}this.a3()},
cKC(){if(this.gD5().c.length>=12)return
this.m(new C.bRt(this))},
jH(d){var w,v,u=this,t=u.gD5()
t.b=B.a.i(u.glR(0).a.a)
w=t.gapq(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.U(D.fhN)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a6(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bRD(),r=x.p,q=A.a([A.bN(!1,D.fJe,t,t,!0,t,t,t,u.gbq8(u),t,t)],r),p=A.a([D.fYd,B.af,A.aM(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glR(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ad,t,t,t,t,t,t,t,t,t,t,t,B.h_,!0,B.a5,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gD5().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bRC(u,w,s),t)],r))
if(v<12)p.push(A.as(C.uv("\uff0b Add a question",u.gcKB(),B.aU,t,B.c),t,t,t))
return new C.tG("Make your game",A.cl(p,t,t,D.bD0,t,t,B.ah,!1),q,t)}}
C.ar0.prototype={
S(){return new C.aF7(A.a([],x._))},
bv(){return this.r.$0()},
qn(){return this.w.$0()},
ge3(){return this.c}}
C.aF7.prototype={
Y(){var w,v
this.a4()
this.wu()
w=this.a
v=w.c
if(v.length!==0)C.a8c(v,w.e,w.d.w)},
wk(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hhj(r,t.e,!1,s.w,new C.e32(u),null,s),$async$wk)
case 2:w=3
return A.b(u.wu(),$async$wk)
case 3:return A.h(null,v)}})
return A.i($async$wk,v)},
a0C(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hhj(r,t.e,!0,s.w,new C.e31(u),null,s),$async$a0C)
case 2:w=3
return A.b(u.wu(),$async$a0C)
case 3:return A.h(null,v)}})
return A.i($async$a0C,v)},
wu(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wu=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bo(q.a.c),$async$wu)
case 7:p=e
if(q.c!=null)n=q.e||J.cJ(p)
else n=!1
if(n)q.m(new C.e34(q,p))
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
return A.b(C.Hj(q.a.c).dh(0,B.qv),$async$wu)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e35(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e36(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wu,v)},
Pa(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Pa=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.U(D.fhn)
w=3
return A.b(C.Hj(t.a.c),$async$Pa)
case 3:r=e
w=4
return A.b(C.fWN(t.a.c,r),$async$Pa)
case 4:q=e
w=5
return A.b(C.Hj(t.a.c),$async$Pa)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e30(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b4(null,null,null,q?B.dI:B.cY,null,B.t,null,s,null,B.mY,null,null,null,null,null,null,null,null,null,null))
t.a.qn()
case 1:return A.h(u,v)}})
return A.i($async$Pa,v)},
It(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$It=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.is7(l),$async$It)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hUS(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b17(q,p.e,l,"Each family tree costs $"+B.j.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$It)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hB8(r)
o=Date.now()
n=t.a.c
m=new C.kU(l,r.toUpperCase(),p,!0,B.Z,D.Dx,new A.V(o,0,!1),0,n,D.uA,B.cd)
w=5
return A.b(C.a3U(n,m),$async$It)
case 5:w=6
return A.b(t.wu(),$async$It)
case 6:t.a.bv()
t.a.qn()
if(t.c==null){w=1
break}t.F2(m)
case 1:return A.h(u,v)}})
return A.i($async$It,v)},
F2(d){return this.cjZ(d)},
cjZ(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bo(u.a.c),$async$F2)
case 2:n=l.nA(k.dI(f,new C.e33(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hy(m,new C.aqV(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F2)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a3U(u.a.c,o),$async$F2)
case 6:case 5:w=7
return A.b(u.wu(),$async$F2)
case 7:u.a.qn()
return A.h(null,v)}})
return A.i($async$F2,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=new C.ui(p)
if(r.e)return A.as(A.n5(q,p?B.bv:B.br,q,q,q,q,q,q,q,q),q,q,q)
if(J.cr(r.d)){w=p?B.ed:B.c
v=A.m(15)
u=A.aI(!1,B.a3,!0,q,A.aP(!1,q,!0,A.q(q,D.bVb,B.f,q,q,new A.p(B.aY.j(0.12),q,A.L(B.aY,B.r,2),q,q,q,B.a6),q,52,q,q,q,q,q,52),B.cR,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcj2(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,18,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gk(A.q(q,A.x(A.a([u,B.aQ,t,B.U,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.br,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dY,A.bJ(D.h0r,q,r.gaT6(),A.bp(B.bR,q,q,q,q,q,Aw.a0H,q,new A.b9(A.m(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.i,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.n),q,q,q,q,D.bFK,q,q,1/0),15,B.ag,1.05,D.acq,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,16,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b5],v)
if(J.cJ(r.d))w.push(A.aG(q,q,q,q,A.X(B.zv,B.aY,q,q,q,q),q,q,q,new C.e38(r),q,q,q,q,"Sync family trees with database",q))
if(J.cJ(r.d))w.push(A.aG(q,q,q,q,A.X(B.zp,B.aY,q,q,q,q),q,q,q,r.gagU(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.as4,D.fGA,r.gaT6(),A.bp(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gk(r.cGL(J.t(r.d,s),o),14,B.ag,1,D.acq,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cGL(d,e){var w=null,v=e.a,u=v?B.ed:B.c,t=A.m(14),s=A.L((v?B.eg:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.eu,10)],x.V),q=A.m(14),p=A.q(w,D.bUf,B.f,w,w,new A.p(B.aY.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqq(),m=d.d?"":" \xb7 Public",l=d.y===D.kV?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bH,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.q(w,A.aI(!1,B.a3,!0,w,A.aP(!1,q,!0,new A.D(B.bF,A.A(A.a([p,B.bd,l,A.X(B.OP,v?B.bv:B.br,w,w,w,w)],k),B.l,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e37(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.p(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aqV.prototype={
S(){return new C.aF4(A.a([],x._),A.aR(x.N),A.b9Q())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aF4.prototype={
Y(){var w,v,u=this
u.a4()
u.d=u.a.w
u.adA()
w=u.a
v=w.c
if(v.length!==0)C.a8c(v,w.e,w.d.w)},
t(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a3()},
a3A(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yv("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e2t(r),s,null,!0,!0,x.y),$async$a3A)
case 3:if(e!==!0||t.c==null){w=1
break}t.K1()
t.m(new C.e2u(t,r))
w=4
return A.b(t.uu(),$async$a3A)
case 4:t.a.bv()
t.yv(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3A,v)},
cwr(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.e2o(w,f,d,e))},
aVp(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.ej(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bd2(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eK(new Float64Array(16))
q.e7(r)
w=q.Da()
v=B.j.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.ej(r,u,0,1)
t.k5(v,v,1,1)
t.ej(-r,-u,0,1)
t.iY(0,q)
s.sp(0,t)},
adA(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bo(u.a.c),$async$adA)
case 2:t=s.nA(r.dI(e,new C.e1Q(u)))
if(t!=null&&u.c!=null)u.m(new C.e1R(u,t))
return A.h(null,v)}})
return A.i($async$adA,v)},
yv(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b4(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
wk(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hhj(o,t,!1,r,new C.e27(u),q.a,s),$async$wk)
case 2:n=A
m=J
w=3
return A.b(C.Hj(u.a.c),$async$wk)
case 3:p=n.nA(m.dI(e,new C.e28(u)))
if(p!=null&&u.c!=null)u.m(new C.e29(u,p))
return A.h(null,v)}})
return A.i($async$wk,v)},
K1(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cD(w,0)},
uu(){var w=0,v=A.j(x.H),u=this,t,s
var $async$uu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a3U(t,s),$async$uu)
case 2:return A.h(null,v)}})
return A.i($async$uu,v)},
a26(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a26=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uw(q,t.a.c)){t.yv("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.itk(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a26)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.K1()
t.m(new C.e2n(t,r))
w=4
return A.b(t.uu(),$async$a26)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a26,v)},
b37(){var w=this.c
w.toString
A.a6(w,!1).cd(A.ec(new C.e24(this),!1,null,x.H))},
a0Q(){return this.ck0()},
ck0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0Q=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uw(m,t.a.c)){t.yv("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.S(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e2k(),A.U(s).k("Y<1>")).gI(0)
s=A.ez([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ch.E"))
B.d.fi(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.L,null,new C.e2l(n,t,new C.ui(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0Q)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.K1()
t.m(new C.e2m(t,o))
w=6
return A.b(t.uu(),$async$a0Q)
case 6:case 5:if(o.a&&t.c!=null)t.b37()
case 1:return A.h(u,v)}})
return A.i($async$a0Q,v)},
WB(d){return this.bDI(d)},
bDI(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WB=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uw(r,t.a.c)){t.yv("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e1E(t,d),r,null,!0,!0,x.P),$async$WB)
case 3:s=f
if(s==null){w=1
break}t.K1()
t.m(new C.e1F(t,s))
w=4
return A.b(t.uu(),$async$WB)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WB,v)},
a3W(d){return this.cJ_(d)},
cJ_(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3W=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.S(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e2w(u,d,new C.ui(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3W)
case 2:return A.h(null,v)}})
return A.i($async$a3W,v)},
cgg(d){var w=this,v=w.d
v===$&&A.c()
if(C.uw(v,w.a.c))w.OQ(d)
else w.a3W(d)},
ajp(d,e){return this.cAo(d,e)},
cAo(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajp=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.S(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e2q(new C.ui(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$ajp)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajp,v)},
Iy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Iy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kV?3:5
break
case 3:w=6
return A.b(C.h4p(t.a.c),$async$Iy)
case 6:s=e
o=t.a
r=C.hpl(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajp(!s,!r),$async$Iy)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQS(o,t.a.c)){t.yv("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lo(o,"Cancel","Remove",q.y===D.kV?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Iy)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQO(t.a.c,t.d.a),$async$Iy)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j1(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Iy,v)},
ab2(d){return this.bOW(d)},
bOW(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ab2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uw(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aV(s,new C.e1G(p))){o=A.U(s)
p.a=A.nA(new A.cM(new A.Y(s,new C.e1H(d),o.k("Y<1>")),new C.e1I(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.K1()
t.m(new C.e1J(t,s,d,q))
w=3
return A.b(t.uu(),$async$ab2)
case 3:t.yv(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ab2,v)},
OQ(d){return this.bR9(d)},
bR9(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uw(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3W(d),$async$OQ)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e1N(t,d),r,null,!0,!0,x.P),$async$OQ)
case 6:s=f
if(s==null){w=1
break}t.K1()
t.m(new C.e1O(t,s))
w=7
return A.b(t.uu(),$async$OQ)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OQ,v)},
cHa(){var w=this,v=w.d
v===$&&A.c()
if(!C.uw(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e2v(w))
w.uu()},
Zz(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zz=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQS(n,t.a.c)){t.yv("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.S(n)
s=$.aw()
r=new A.au(B.aw,s)
q=t.d.e
p=A.bq(new A.N(q,t.gceK(),A.U(q).k("N<1,n>")).bY(0,new C.e2_()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e20(t,new C.ui(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Zz)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.K1()
t.m(new C.e21(t,p))
w=4
return A.b(t.uu(),$async$Zz)
case 4:t.yv("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Zz,v)},
ceL(d){return B.a.i(d.toLowerCase())},
ciN(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uw(v,w)
t=r.d
s=C.ihM(t)
C.isb(q,t.b,u,C.ihL(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.ui(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e2D(),A.U(l).k("Y<1>")).gI(0)
l=n?B.c3:B.iF
v=A.X(B.a1S,n?B.bv:B.br,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Cd,A.aP(!1,o,!0,new A.D(B.hH,A.A(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.br,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e2E(p,d),o,o,o,o,o,o,o),o),new A.D(B.nF,p.c1o(m),o)],u)
if(p.d.y===D.kV){t=B.tg.j(0.15)
s=A.m(12)
r=A.L(B.tg.j(0.45),B.r,1)
q=C.Hh(p.d,p.a.c)
v.push(new A.D(B.yL,A.q(o,A.A(A.a([D.bZF,B.au,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.n),o,o,o,o,B.iw,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,15,o,o,B.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b5],u)
if(C.uw(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Gw("Undo",B.px,p.gcH9(),m,o,o))
u.push(new C.Gw("Family Book",D.bP_,p.gciM(),m,B.u7,o))
u.push(new C.Gw("Family games",B.oB,p.gciY(),m,B.aF,o))
if(C.uw(p.d,p.a.c))u.push(new C.Gw("Display settings",B.D4,p.gck_(),m,B.b2,o))
u.push(new C.Gw("Sync",B.zp,p.gagU(),m,o,o))
t=p.d
if(t.y===D.kV||C.aQS(t,p.a.c)){t=p.d.y===D.kV?"Remove shared tree":"Delete tree"
u.push(new C.Gw(t,B.eh,p.gbP5(),m,B.fh,o))}if(C.uw(p.d,p.a.c))u.push(new C.Gw("Add member",B.wH,new C.e2F(p),m,B.bR,o))
v.push(new A.D(Z.alT,A.A(u,B.l,o,B.e,B.i,0,o,o),o))
if(p.d.gaqq()===0){u=A.as(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.br,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cs(new C.e2G(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a1W:A5.OQ,o,o,o,o,o)
v.push(A.as(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e2H(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c1o(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fU.j(0.35),B.dv,18)],x.V)
u=A.m(22)
t=A.ap(-26,A.X(B.zi,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aI(!1,B.a3,!0,m,A.aP(!1,m,!0,A.q(m,D.c1R,B.f,m,m,new A.p(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a6),m,46,m,m,m,m,m,46),B.cR,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagU(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.frN,m,m,m)
r=r.gaqq()
p=n.d.gaqq()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bH,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.uw(n.d,n.a.c))p.push(A.aG(m,m,m,m,D.bZT,m,m,m,n.gctO(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jI:B.n4
r=r?"Private":"Public"
r=A.E(n.awY(q,"Privacy",r,n.a.d.w?n.gcG4():m),1)
q=A.E(n.awY(B.zq,"Tree code",n.d.c,new C.e1P(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.awY(D.bQG,"Collaborators",p,n.gc68()),1)],o),B.l,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kV){s=B.c.j(0.15)
B.d.v(p,A.a([B.U,A.aI(!1,B.a3,!0,A.m(999),A.aP(!1,A.m(999),!0,new A.D(B.hd,A.A(A.a([A.X(B.py,B.c,m,m,m,14),B.e4,A.d("View only",m,m,m,m,m,m,B.aVk,m,m,m)],o),B.l,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.q(m,A.by(u,new A.am(B.a0,m,B.ab,B.t,A.a([t,new A.D(B.GN,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.p(m,m,m,w,v,D.c68,B.n),m,m,m,m,m,m,m,1/0)},
awY(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aI(!1,B.a3,!0,A.m(14),A.aP(!1,A.m(14),!0,new A.D(K.an3,A.x(A.a([A.X(d,B.c,w,w,w,18),B.ax,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vw,A.d(f,w,1,B.a2,w,w,w,Ap.AK,w,w,w)],x.p),B.l,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bgz.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bL
w=s.d
v=s.e
u=A.a([A.b3(t,t,t,new C.bgC(s,t),new A.av(w,v))],x.p)
r=r.gdO(r)
B.d.v(u,r.dM(r,new C.dgH(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dgI(this),A.U(r).k("N<1,v>")))
return new A.D(B.uw,new A.a5(w,v,new A.am(B.a0,t,B.ab,B.f,u,t),t),t)}}
C.KT.prototype={}
C.GA.prototype={}
C.bgB.prototype={
gblz(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKH.prototype={}
C.bgC.prototype={
bQL(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.Q()
v=A.K()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bu
d.ah(new A.o(n,w),new A.o(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ai,null,null,A.a([],x.v))
q=w+5.5
t.E(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.E(new A.kR(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.E(new A.kR(u+4.95,r,u+9.9,s,u,q))
t.E(new A.bv())
q=A.K()
q.r=B.c.gp(0)
d.N(new A.o(u,w),9,q)
q=A.K()
q.r=B.bD.gp(0)
d.af(t,q)},
bQI(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dh1())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aV(a0,new C.dh2(f))
t=new A.N(a0,new C.dh3(f),A.U(a0).k("N<1,G>")).bY(0,new C.dh4()).cG(0,1/0,B.rp)
w=f.a
d.ah(f,new A.o(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.J)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.o(o,v),p,e)
continue}l=J.n0(n)
k=Math.min(10,m/2)
m=$.Q()
j=A.a([],r)
i=new A.aF(m.r,B.ai,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.c6(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
m=new A.c6(o,v,o,v+k)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
o=new A.aq(o,p.b)
j.push(o)
m=i.f
if(m!=null)o.ak(m)
i.ab()
d.af(i,e)}},
a5(d,e){var w,v,u,t,s,r
$.Q()
w=A.K()
w.r=B.bR.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.bu
w.e=B.dP
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.J)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bQI(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.J)(v),++t){r=v[t]
if(r.c)this.bQL(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bko.prototype={
gcc5(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aDl
switch(w.c.a){case 0:return D.cZQ
case 1:return D.db1
case 2:return D.dt0}},
gcc8(){var w=this.c,v=C.hAj(w.w),u=C.hAj(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=t.gcc5(),p=t.c,o=N.bEW(p.f),n=t.gcc8(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gan(q).j(0.35),B.cL,10)],m),k=r?B.as:B.c,j=A.L(r?B.as:B.c,B.r,2)
if(o!=null)w=A.tK(B.A,s,B.cj,B.c_,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gan(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gan(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a9(B.a7,B.aa,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.hU(w,B.aq),B.f,s,s,new A.p(k,s,j,s,s,s,B.a6),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a9(B.aA,B.aE,B.x,q,s,s),B.a6),s,56,s,s,B.H3,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.L(r?B.as:B.c,B.r,1.5)
l.push(A.ap(s,A.q(s,A.d(""+k,s,s,s,s,s,s,D.fCr,s,s,s),B.f,s,s,new A.p(B.ch,s,w,j,s,s,B.n),s,s,s,s,D.bHI,s,s,s),s,s,s,-6,-4,s))}k=r?B.cr:B.c
j=A.m(8)
w=A.L(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dG,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cr,s,s,s,s,s,s,s,s,u,s,s,B.I,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aT:B.br,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a5(84,112,A.x(A.a([new A.am(B.a0,s,B.ab,B.f,l,s),B.ax,A.q(s,A.x(p,B.l,s,B.e,B.Q,0,B.p),B.f,s,D.b6p,new A.p(k,s,w,j,m,s,B.n),s,s,s,s,D.bHT,s,s,s)],v),B.l,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bfE.prototype={
a5(d,e){var w,v,u,t,s
$.Q()
w=A.K()
v=this.b
u=v?B.c:D.bjf
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.o(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.byo.prototype={
B(d){var w=this,v=null,u=new C.fmr(w),t=w.c,s=t?B.cr:B.c,r=A.m(12),q=u.$3(B.hY,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.bA:B.fq,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wJ,"Zoom out",w.e)
return A.aI(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.q(v,v,B.f,t?B.bA:B.fq,v,v,v,1,v,v,v,v,v,22),u.$3(B.apC,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.ds,v,v,v,B.aj)}}
C.bnJ.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.L(B.bR,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.q(v,A.x(A.a([A.X(s?O.a1W:A5.OQ,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fyw,v,v,v)],r),B.l,v,B.bb,B.i,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a6),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fwl,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eXu(w),A.U(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a5(84,v,A.x(u,B.l,v,B.e,B.i,0,B.p),v)}}
C.a09.prototype={
S(){return new C.aDy()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDy.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a4()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b6,B.aR),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b6,B.aR),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b6,B.aR),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b6,B.aR),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b6,B.aR),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b6,B.aR),s)
t=u?q:v.c
r.y=t==null?D.yZ:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ijl(w.r,w.f)
else w=t
r.at=w
w=u?q:v.at
r.ax=w==null?0:w
w=u?q:v.as
r.ay=w===!0},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.T$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.T$=w
u.P$=0
u=v.f
u===$&&A.c()
u.T$=w
u.P$=0
u=v.r
u===$&&A.c()
u.T$=w
u.P$=0
u=v.w
u===$&&A.c()
u.T$=w
u.P$=0
u=v.x
u===$&&A.c()
u.T$=w
u.P$=0
v.a3()},
Qj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hpl(p.y,p.w)
w=3
return A.b(A.lz(t.a.w,B.Jr),$async$Qj)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b17(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qj)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hUT(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Ay.Ht(78,800),$async$Qj)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dwY(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qj,v)},
cc7(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hV(B.o.u(1000*Date.now()),w,D.yZ,null,null,null,"","","","","",1,!1,0)
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
s=v.aG1(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
aaE(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dwX(r),s,null,!0,!0,x.y),$async$aaE)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===B.J,i=new C.ui(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dx6(l),g),g.k("M.E"))
h=j?B.ed:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bG6,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.hb(A.aP(!1,k,!0,new A.D(B.me,A.X(B.eh,B.ph,k,k,k,17),k),B.cR,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLH(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jW:B.jj
t=N.bEW(l.as)
if(l.as==null)s=A.X(B.po,j?B.bv:B.br,k,k,k,40)
else s=k
s=A.as(A.aA(k,new A.am(B.a0,k,B.ab,B.t,A.a([A.h8(u,t,s,k,42),A.ap(0,A.h8(B.bR,k,D.bTk,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcc4(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDA(t,"Full name",B.n1,1,1,i,B.mz)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.X,new C.bkm(i,u,new C.dx7(l),k)],v),B.l,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bzs],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dx8(),A.U(o).k("N<1,eI<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,B.I,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bzu],q)
B.d.v(q,new A.N(f,new C.dxa(),A.U(f).k("N<1,eI<n?>>")))
o=A.x(A.a([t,B.am,new C.aec(i,r,"Who is their parent?",p,new C.dxb(l),k,o),B.aB,n,B.am,new C.aec(i,m,"Who is their spouse / partner?",q,new C.dxc(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDA(q,"Birth date",D.aoI,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDA(m,"Birth place",B.a2a,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDA(n,"Date of death (if deceased)",D.aqQ,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDA(p,"Occupation",B.a3m,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.am(B.A,k,B.ab,B.t,w,k),B.aB,s,B.bz,new C.aed(i,"Identity",u,k),B.af,new C.aed(i,"Family links",o,k),B.af,new C.aed(i,"Life details",A.x(A.a([q,B.X,m,B.X,n,B.X,p,B.X,C.aDA(r,"Notes",B.lk,5,3,i,k)],v),B.l,k,B.e,B.i,0,B.p),k),B.af,new C.aDz(i,"Child order",l.cke(l.at),new C.dxd(l),new C.dxe(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hev(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dxf(l):k
B.d.v(r,A.a([B.X,new C.aDz(i,"Visible in tree",u,w,new C.dxg(l),k)],v))}r.push(B.X)
w=j?B.jW:B.jj
u=A.m(14)
t=A.L(j?B.eg:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.iQ(k,B.bR,k,B.ag,k,new C.dxh(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.n),k,k,k,k,O.aly,k,k,k))
r.push(B.bz)
w=j?B.aP:B.as
j=j?B.eg:B.bP
r.push(A.A(A.a([A.E(A.dU(B.nZ,new C.dx9(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cp,k,new A.b9(A.m(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bJ(D.f92,k,l.gcc6(),A.bp(B.aY,k,k,0,B.c,k,B.cp,k,new A.b9(A.m(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.i,0,k,k))
r.push(B.ax)
return A.eg(B.f6,k,B.ag,h,new A.a5(420,k,A.cd(A.x(r,B.al,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.amo,k,B.alK,new A.b9(g,B.a1),k,k)},
cke(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aed.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jW:B.jj,s=A.m(16)
return A.x(A.a([new A.D(B.a0M,u,w),A.q(w,this.e,B.f,w,w,new A.p(t,w,A.L(v?B.eg:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bh,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bkn.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ed:B.c,r=A.m(12),q=A.L((t?B.eg:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aP:B.as,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aM(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bt(u,B.eK,u,B.wi,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bv:B.br,u,u,u,u,u,u,u,u,u,u,u,B.cD,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ad,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aec.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ed:B.c,s=A.m(12),r=A.L((u?B.eg:B.bP).j(0.85),B.r,1),q=A.X(B.t1,u?B.bv:B.br,v,v,v,v),p=A.l(v,v,u?B.aP:B.as,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ed:B.c
return A.q(v,new A.Em(A.a5p(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bv:B.br,v,v,v,v,v,v,v,v,v,v,v,B.cD,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.n),v,v,v,v,B.ku,v,v,v)}}
C.bkm.prototype={
B(d){var w=new C.dxi(this)
return A.A(A.a([w.$3(D.wr,"Male",B.PA),B.ae,w.$3(D.ot,"Female",B.Pk),B.ae,w.$3(D.yZ,"Other",B.nJ)],x.p),B.l,null,B.e,B.i,0,null,null)}}
C.aDz.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jW:B.jj,r=A.m(14),q=A.L(t?B.eg:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.as,v,v,v,v,v,v,v,v,13,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bv:B.br,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aJJ(u,B.wJ,w.f,v),B.bm,new C.aJJ(u,B.hY,w.r,v)],o),B.l,v,B.e,B.i,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.n),v,v,v,v,B.ey,v,v,v)}}
C.aJJ.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.ed:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bR
else t=(s.c.a?B.bv:B.br).j(0.4)
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.aee.prototype={
bUX(d){switch(d.a){case 0:return B.bR
case 1:return B.bD
case 2:return B.d0}},
bUY(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aZX(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AK(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ed:B.c
u=A.m(12)
t=A.L((w?B.eg:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bR,p,p,p,18),B.au],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bv:B.br,p,p,p,p,p,p,p,p,9,p,p,B.I,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.ax,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.as,p,p,p,p,p,p,p,p,14,p,p,B.V,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.q(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.n),p,p,p,B.cx,B.yH,p,p,1/0)},
afg(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,10,w,w,B.I,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jW:B.jj,s=A.m(16),r=A.L(v?B.eg:B.bP,B.r,1)
return A.x(A.a([new A.D(B.a0M,u,w),A.q(w,A.x(e,B.l,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.n),w,w,w,w,B.bV,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hFt(r,q),o=q.c,n=t.bUX(o),m=N.bEW(q.f),l=t.e.a,k=l?B.ed:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kV?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bv:B.br,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.H,12)],x.V)
u=n.j(0.12)
l=A.as(A.q(s,A.h8(u,m,m==null?A.X(B.po,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a6),s,s,s,s,B.eA,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.L(n.j(0.45),B.r,1)
v=A.as(A.q(s,A.d(t.bUY(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,B.mc,s,s,s),s,s,s)
u=x.p
i=A.a([t.AK("Full name",i,B.n1)],u)
if(p>0)i.push(t.AK("Child order","#"+p,B.Pq))
r=A.a([h,B.ax,r,B.aQ,l,B.X,v,B.bz,t.afg("Identity",i),B.af,t.afg("Life details",A.a([t.AK("Birth date",q.w,D.aoI),t.AK("Birth place",q.x,B.a2a),t.AK("Date of death",q.y,D.aqQ),t.AK("Occupation",q.z,B.a3m)],u)),B.af,t.afg("Family links",A.a([t.AK("1. Parent",t.aZX(q.d),B.Hj),t.AK("2. Spouse",t.aZX(q.e),B.Hx)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.af,t.afg("Notes",A.a([t.AK("Notes",q,B.lk)],u))],u))
r.push(B.bz)
r.push(A.bJ(B.KX,s,new C.dxs(d),A.bp(B.aY,s,s,s,s,s,B.cp,s,new A.b9(A.m(14),B.a1),s,s,s)))
return A.eP(s,k,new A.cP(B.m0,A.cd(A.x(r,B.al,s,B.e,B.Q,0,B.p),B.t,s,B.y,s,B.yO,s,s,B.ah),s),s,s,s,B.GR,B.d7,s,new A.b9(j,B.a1),s)}}
C.Gw.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bv:B.br
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uy,A.hb(A.aI(!1,B.a3,!0,A.m(8),A.aP(!1,A.m(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.aqY.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.ceT(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jq(w,new C.ceU(),t,x.fO))
return s}}
C.aqZ.prototype={
S(){return new C.aF6(A.a([],x.bF))},
gd1(){return this.c}}
C.aF6.prototype={
Y(){this.a4()
this.K8()},
K8(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$K8=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ceX(t.a.c),$async$K8)
case 3:r=e
w=4
return A.b(C.Bo(t.a.c),$async$K8)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rj(q,new C.e2Q(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e2R(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$K8,v)},
z3(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b4(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
KW(d,e){return this.cJG(d,e)},
cJG(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KW=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e2V(q,e))
t=3
w=6
return A.b(d.$0(),$async$KW)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e2W(q))
$.eX.mC()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KW,v)},
Ym(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ym=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pw(r,s.c,s.e),$async$Ym)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KW(new C.e2N(t),"Preparing download\u2026"),$async$Ym)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ym,v)},
Yq(d){return this.bSP(d)},
bSP(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yq=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pw(r,s.c,s.e),$async$Yq)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KW(new C.e2O(t,d),"Preparing file\u2026"),$async$Yq)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yq,v)},
ahg(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahg=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xO.cq().MH(B.Sx,B.uB,!0),$async$ahg)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
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
p=A.ab(m)
$.an.$1("[family tree sync pick] file_picker: "+A.w(p))
w=6
break
case 3:w=2
break
case 6:u=A.Hs()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahg,v)},
Z2(d){return this.c2j(d)},
c2j(d){var w=0,v=A.j(x.H),u=this
var $async$Z2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KW(new C.e2P(u,d),"Restoring family trees\u2026"),$async$Z2)
case 2:return A.h(null,v)}})
return A.i($async$Z2,v)},
Z1(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahg(),$async$Z1)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Z2(s),$async$Z1)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z1,v)},
a2Y(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2Y=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pw(r,s.c,s.e),$async$a2Y)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KW(new C.e2U(t),"Creating QR code\u2026"),$async$a2Y)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2Y,v)},
a2z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DA()){t.z3("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cd(A.ec(new C.e2S(),!0,null,x.N)),$async$a2z)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Z2(r),$async$a2z)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2z,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===B.J,n=o?B.BH:B.iF,m=o?D.ak_:B.aP,l=o?B.aM:B.bP,k=o?B.aP:B.as,j=new C.dh5(n,m,l,k,o?B.bK:B.br)
l=A.aG(p,p,p,p,A.X(B.eN,k,p,p,p,20),p,p,p,new C.e2Y(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eH(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dgE(!0,B.jK,B.aH,B.aH,q.r?p:q.gcAc(),j,s,"Show restore QR"),1),B.au],u))}s=q.e
r=q.r?p:q.gcwm()
t.push(A.E(C.dgE(!s,B.jp,B.b9,B.bp,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dgE(!1,B.i_,B.aY,B.bR,q.r?p:q.gbSI(),j,"Photos & books included","Download all trees"),1),B.au],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dgE(!1,R.zr,B.av,B.aS,q.r?p:q.gc2g(),j,s,"Upload backup file"),1))
l=A.a([new C.bgA(v,l,p),B.l2,new C.adt(j,"QR restore",p),B.X,t,B.d8,new C.adt(j,"Backup files",p),B.X,A.A(r,B.l,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l2,new C.adt(j,"One tree",p),B.X],u)
B.d.v(v,J.b8(q.d,new C.e2Z(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cl(l,p,p,B.a0E,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.L(B.aY.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.q(p,A.A(A.a([O.aTH,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.n),p,p,p,p,B.Cj,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.am(B.a0,p,B.ab,B.t,l,p),p,!1,!1,p,p)}}
C.dh5.prototype={}
C.bgA.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aY.j(0.32),B.kB,28)],x.V)
t=A.ap(p,A.X(B.uV,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.q(p,new A.am(B.a0,p,B.ab,B.t,A.a([t,new A.D(B.ad,A.A(A.a([A.q(p,D.c1m,B.f,p,p,new A.p(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oW,A.E(A.x(A.a([D.fHz,B.U,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.c9j,B.n),p,p,p,p,p,p,p,p)}}
C.adt.prototype={
B(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.p(B.aY,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)}}
C.bgy.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.L(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cL,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.L(t.j(0.35),B.r,1)
return A.aI(!1,B.a3,!0,q,A.aP(!1,o,!0,A.eJ(A.d3(new A.D(E.a0g,A.x(A.a([A.q(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.n),q,q,q,q,B.rY,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bH,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cD,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bgD.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aY.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aI(!1,B.a3,!0,v,A.aP(!1,u,!0,A.eJ(new A.D(B.eY,A.A(A.a([A.q(v,D.c0A,B.f,v,v,new A.p(q,v,A.L(B.aY.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rY,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.i_,o,v,v,v,20)],n),B.l,v,B.e,B.i,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0t.prototype={
S(){return new C.aF5()},
gd1(){return this.c}}
C.aF5.prototype={
Y(){this.a4()
this.aab()},
aab(){var w=0,v=A.j(x.H),u=this,t
var $async$aab=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b3M(u.a.c,B.E7),$async$aab)
case 2:t=e
if(u.c!=null)u.m(new C.e2I(u,t))
return A.h(null,v)}})
return A.i($async$aab,v)},
aiI(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aiI=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e2J(q))
t=4
p=A.hr1(q.a.d,B.E7)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ath(n.e,m,l,B.E7,p,n.f),$async$aiI)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e2K(q))
q.c.L(x.q).f.U(D.fiA)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.U(A.b4(null,null,null,null,null,B.t,null,A.d(B.a.en(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e2L(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiI,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=p?B.jB:B.qk,n=p?B.iE:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eH(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fY7,q,q,q,1,q,!0)
w=A.m(24)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.qd(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aY,q,q,q,q,q,q,q,q,q,q,q,B.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.x(A.a([B.U,u,B.bz,t,B.U,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aT:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bb,B.i,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.n),q,q,q,q,B.ad,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ac:B.bw,q,q,q,q,q,q,q,q,q,q,q,B.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcw5()
if(u)u=B.Kn
else u=A.X(r.e===!0?B.hJ:B.aoH,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cg,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aY,q,B.h6,q,q,q,new A.ay(B.aY.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hW,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aD:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.X)
w.push(new A.a5(1/0,q,A.bJ(B.AT,q,new C.e2M(d),A.bp(B.aY,q,q,q,q,B.h6,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ad,A.x(w,B.l,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0u.prototype={
S(){return new C.blS(A.zW(B.yv,B.o4,B.v2))}}
C.blS.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eH(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fPP,w,w,w,1,w,!0),B.w,A.zV(this.d,B.c_,new C.e3_(this,d)),w,!1,!1,w,w)}}
C.b_E.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.S1,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lW.prototype={}
C.a7h.prototype={
S(){return new C.blw(null,null)}}
C.blw.prototype={
Y(){var w=this,v=null
w.a4()
w.d=A.bl(v,B.rR,v,1,v,w)
w.e=A.bl(v,B.on,v,1,v,w)
w.a.toString
w.d.cO(0)
w.e.cO(0)},
bz(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cO(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cO(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.byW()},
B(d){var w,v,u=this,t=B.d.dP(D.a6f,new C.dP4(u),new C.dP5())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cCw(A.c5(new A.h6(A.a([w,v],x.dS)),new C.dP6(u,t),null),!0)}}
C.blv.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3y(d,e)
break
case"house":p.mg(d,e,D.dg2)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdA()
$.Q()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.o(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mm(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Bv(d,e,12)
p.yF(d,e,B.ld,5,14)
break
case"grocery":p.ckY(d,e)
break
case"calculator":p.ckF(d,e)
break
case"lumber":p.cl5(d,e)
break
case"kitchen":p.cl0(d,e)
break
case"landscape":p.mg(d,e,D.dgF)
s=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.E(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.E(new A.c6(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.E(new A.c6(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.E(new A.aq(t,w))
s.E(new A.aq(0,w))
s.E(new A.bv())
w=A.K()
w.r=B.eq.j(0.85).gp(0)
d.af(s,w)
p.Bv(d,e,8)
p.yF(d,e,B.i9,4,18)
break
case"plumbing":p.cle(d,e)
break
case"electrical":p.mg(d,e,D.dsd)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.Q()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.ar(new A.a1(0,0,0+e.a,0+e.b),u)
p.mm(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mm(d,e,B.m4.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Bv(d,e,10)
break
case"store":p.clo(d,e)
break
case"paint_remodel":p.cl9(d,e)
break
case"roofing":p.clg(d,e)
break
case"warehouse":p.clv(d,e)
break
case"vehicles":p.clt(d,e)
break
case"farm":p.ckS(d,e)
break
case"restaurant":p.clf(d,e)
break
case"tools":p.clr(d,e)
break
case"wallet":p.clu(d,e)
break
case"concrete":p.ckL(d,e)
break
case"blueprint":p.ckD(d,e)
break
default:p.b3y(d,e)}},
mg(d,e,f){var w,v=new A.a1(0,0,0+e.a,0+e.b)
$.Q()
w=A.K()
w.sav(new A.a9(B.aA,B.aE,B.x,f,null,null).aK(0,v))
d.ar(v,w)},
mm(d,e,f,g,h){var w,v,u,t=new A.o(e.a/2,e.b/2),s=e.gdA()/2-h
$.Q()
w=A.K()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cB(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yF(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdA()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.o(q+t*o,p+s*o),3.5,r)}},
Bv(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.j.F(t*0.17,0.9)
q=B.j.F(t*0.23,0.85)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.o(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3y(d,e){var w,v=this
v.mg(d,e,D.dqz)
w=v.c
v.mm(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mm(d,e,B.bM.j(0.45),-w*3.141592653589793*1.4,22)
v.bQE(d,e,B.hF,w)
v.yF(d,e,B.c.j(0.7),6,8)},
bQE(d,e,f,g){var w,v,u,t,s,r
$.Q()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.ar(new A.a1(16,r,t,r+3),w)}},
ckY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.cv0)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.aq(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=D.ded[B.o.F(t,4)].j(0.85).gp(0)
d.N(new A.o(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mm(d,e,B.c.j(0.35),w,16)
l.yF(d,e,B.i9,5,12)},
ckF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mg(d,e,D.cv9)
w=i.c*3.141592653589793
v=w*2
u=0.5+0.5*Math.sin(v)
t=e.a
s=e.b
r=e.gdA()
$.Q()
q=A.K()
q.r=B.c.j(0.1+u*0.12).gp(0)
d.N(new A.o(t/2,s/2),r*(0.18+u*0.08),q)
p=A.fq(h,B.cs,h,h,h,h,B.a5,B.bX,h,B.dz,B.bY)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dis[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.en(r,h,h,B.cJ,h,h,h,h,h,h,new A.F(!0,q,h,h,h,h,14+m*4,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.o(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aq(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cvb[o]
l=B.kK.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.en(m,h,h,B.cJ,h,h,h,h,h,h,new A.F(!0,l,h,h,h,h,12+k*3,B.I,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.o(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aq(o,3)*0.38)+Math.sin(n)*6))}i.mm(d,e,B.c.j(0.35),w*1.5,14)
i.mm(d,e,B.eL.j(0.55),-v*3.141592653589793*2,8)
i.mm(d,e,B.y9.j(0.4),r*2.8,22)
i.yF(d,e,B.qb,8,10)
i.Bv(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.j.F(w+o*0.22,0.9)
$.Q()
v=new A.ao(B.O,B.M,B.R,B.S,B.P)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.o(12,j),new A.o(t,j),v)}},
cl5(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,V.aAs)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bn(new A.a1(20,r,u,r+10),B.hQ)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=A.ar(B.fy,B.o9,(s+1)/2).gp(0)
d.am(q,p)}o.mm(d,e,B.fy.j(0.35),w,15)
o.Bv(d,e,8)},
cl0(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.deI)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.j.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.j.F(s*0.13,0.7)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.o(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mm(d,e,B.bM.j(0.4),-w*3.141592653589793*2.2,11)
l.yF(d,e,B.q8,4,14)},
cle(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mg(d,e,D.d2R)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.j.F(s,0.12)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.b=B.a9
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.o(w,u),q*(0.12+r*0.14+p),o)}n.yF(d,e,B.pg,6,12)
n.mm(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
clo(d,e){var w,v,u,t,s,r,q,p=this
p.mg(d,e,D.cIT)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bn(new A.a1(r,14,r+u,22),B.iA)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=A.ar(B.fn,B.bM,(s+1)/2).gp(0)
d.am(r,q)}p.mm(d,e,B.c.j(0.3),w,16)
p.Bv(d,e,8)
p.yF(d,e,B.w0,5,13)},
cl9(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d9c)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.j.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bn(new A.a1(r,q,r+8,q+(18+s*22)),B.hR)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=[B.ir,B.dk,B.bM,B.er][t].j(0.85).gp(0)
d.am(q,r)}this.mm(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
clg(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d6z)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.j.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.o(u*(0.1+r),s),new A.o(u*(0.18+r),s+10),q)}this.yF(d,e,B.cu,7,11)},
clv(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.cLD)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bn(new A.a1(q,p,q+(t-s*8),p+16),B.hQ)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=A.ar(B.cu,B.aP,(Math.sin(r)+1)/2).gp(0)
d.am(p,q)}this.mm(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
clt(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dwo)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.j.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bn(new A.a1(s,r,s+28,r+8),B.hQ)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.am(r,q)}this.Bv(d,e,6)},
ckS(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.ddi)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.Q()
s=A.K()
s.r=B.m4.j(0.75).gp(0)
d.N(new A.o(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.hq.j(0.85).gp(0)
p.c=3
d.ah(new A.o(q,v),new A.o(q+s*6,t),p)}this.mm(d,e,B.m4.j(0.35),w,14)},
clf(d,e){var w,v,u,t,s,r,q=this
q.mg(d,e,D.dfS)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bs(new A.o(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=B.c.j(0.22).gp(0)
d.bZ(s,r)}q.yF(d,e,B.q8,5,16)
q.Bv(d,e,7)},
clr(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dtN)
w=o.c
v=w*3.141592653589793
o.mm(d,e,B.o9.j(0.55),v*3,10)
o.mm(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.o9.j(0.8).gp(0)
d.N(new A.o(v+r*34,u+q*22),4,p)}},
clu(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dx4)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bn(new A.a1(q,p,q+36,p+22),B.iA)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=A.ar(B.i9,B.m4,r).gp(0)
d.am(p,q)}o.Bv(d,e,9)
o.mm(d,e,B.c.j(0.4),w*2.2,12)},
ckL(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dln)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.o(v,u),34)
$.Q()
s=A.K()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cB(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.o(v+t*34,u+s*34),3,p)}},
ckD(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dgZ)
$.Q()
w=A.K()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.o(t,0),new A.o(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.o(0,s),new A.o(v,s),w)
r=this.c
q=u*B.j.F(r*0.85,1)
$.Q()
u=A.K()
u.r=B.dk.j(0.45).gp(0)
d.ar(new A.a1(0,q,0+v,q+6),u)
this.mm(d,e,B.ld.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.au2.prototype={
a0d(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0d=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aRL(),$async$a0d)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9u(s),$async$a0d)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0d,v)},
ahh(d){return this.cnN(d)},
cnN(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.isl(d),$async$ahh)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahh,v)},
B(d){var w,v,u,t=null,s=A.S(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jW:B.jj
w=x.p
v=A.a([C.aS8(!0,B.rm,1/0,B.qH,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c2(new A.bM(B.b7,t,t,new A.D(B.uq,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.V,t,t,!0,t,t,t,t,t,B.aBp,t,t),t,t,t),t),t),new A.p(t,t,t,t,t,new A.a9(B.b7,B.b8,B.x,u,t,t),B.n),B.bj))}v.push(A.ap(8,A.A(A.a([A.E(A.dh(D.bV4,D.fDP,new C.cog(this,d),A.bp(B.aY,t,t,t,B.c,t,B.k2,t,t,t,t,B.cf)),1),B.ae,A.E(A.es(D.c2D,D.fT2,this.gceI(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.k2,t,t,D.b4X,t,t,t,B.cf)),1)],w),B.l,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fH(1.7777777777777777,A.aI(!1,B.a3,!0,B.rm,new A.am(B.a0,t,B.b3,B.t,v,t),B.aq,s,0,t,t,t,t,t,B.aj),t)}}
C.aN8.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.aV5.prototype={}
C.aV4.prototype={}
C.aT7.prototype={}
C.a_7.prototype={
S(){return new C.aAi()}}
C.aAi.prototype={
Y(){var w,v,u=this
u.a4()
u.a.toString
w=new A.ba("",B.b6,B.aR)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
KM(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.U(D.fj4)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aV5(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.S(d).ax.a===B.J,l=m?B.ed:B.c,k=A.m(20),j=A.q(n,D.c2i,B.f,n,n,new A.p(B.aY.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.as,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bH,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.br,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aG(n,n,n,n,A.X(B.cy,m?B.bv:B.br,n,n,n,n),n,n,n,new C.d8g(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.br,n,n,n,n,n,n,n,n,12,n,n,B.V,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bv:B.br,n,n,n,n,n,n,n,n,11,n,n,B.cD,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hrh(new C.d8h(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.as,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jW:B.jj
r=A.m(12)
q=A.m(12)
p=m?B.eg:B.bP
t=A.aM(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bt(n,new A.b6(4,r,B.dq),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d8i(o),n,!1,n,n,!1,n,!0,n,B.ad,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A_.Kv,n,n,n,n)
u=m?B.aP:B.as
m=m?B.eg:B.bP
return A.eP(n,l,new A.cP(B.m0,A.cd(A.x(A.a([j,B.aQ,i,B.ax,w,B.U,v,B.aQ,t,B.bz,A.A(A.a([A.E(A.dU(B.dn,new C.d8j(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cp,n,new A.b9(A.m(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.au,A.E(A.bJ(D.fTi,n,o.ga3j(),A.bp(B.aY,n,n,n,B.c,n,B.cp,n,new A.b9(A.m(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.Q,0,B.p),B.t,n,B.y,n,B.Ck,n,n,B.ah),n),n,n,n,A1.Cl,B.d7,n,new A.b9(k,B.a1),n)}}
C.a_6.prototype={
S(){return new C.aAh()}}
C.aAh.prototype={
Y(){this.a4()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.au(B.aw,w)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
KM(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.U(D.fgI)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aV4(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.S(d).ax.a===B.J,o=p?B.ed:B.c,n=A.m(20),m=A.q(q,D.bZK,B.f,q,q,new A.p(B.bR.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bH,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bv:B.br,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aG(q,q,q,q,A.X(B.cy,p?B.bv:B.br,q,q,q,q),q,q,q,new C.d8c(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.i,0,q,q)
l=B.aY.j(p?0.12:0.08)
w=A.m(12)
v=A.L(B.aY.j(0.25),B.r,1)
u=A.X(B.aot,B.aY.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.au,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.i,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.n),q,q,q,q,B.bF,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jW:B.jj
t=A.m(12)
s=A.m(12)
r=p?B.eg:B.bP
v=A.aM(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bt(q,new A.b6(4,t,B.dq),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d8d(this),q,!1,q,q,!1,q,!0,q,B.ad,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l3,q,q,q,q)
w=p?B.aP:B.as
p=p?B.eg:B.bP
return A.eP(q,o,new A.cP(B.m0,A.cd(A.x(A.a([m,B.aQ,l,B.aB,v,B.bz,A.A(A.a([A.E(A.dU(B.dn,new C.d8e(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cp,q,new A.b9(A.m(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.au,A.E(A.bJ(D.h_o,q,this.ga3j(),A.bp(B.bR,q,q,q,B.c,q,B.cp,q,new A.b9(A.m(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.Ck,q,q,B.ah),q),q,q,q,A1.Cl,B.d7,q,new A.b9(n,B.a1),q)}}
C.ZE.prototype={
S(){return new C.az0()}}
C.az0.prototype={
Y(){var w,v=this
v.a4()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.au(B.aw,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b6,B.aR),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.aw,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.aw,w)},
t(){var w,v=this,u=v.d
u===$&&A.c()
w=u.T$=$.aw()
u.P$=0
u=v.e
u===$&&A.c()
u.T$=w
u.P$=0
u=v.f
u===$&&A.c()
u.T$=w
u.P$=0
u=v.r
u===$&&A.c()
u.T$=w
u.P$=0
v.a3()},
gK3(){var w,v=this.e
v===$&&A.c()
w=A.d_(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gaks(){var w=this.f
w===$&&A.c()
w=A.d_(B.a.i(w.a.a))
return w==null?0:w},
gb6l(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQI(d){var w,v=B.j.D(this.gK3()+d,0.25,999999),u=B.j.iH(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.j.M(v))
else{u=B.j.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cGD())},
azJ(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aY,w,w,w,20):w,u=d.a,t=u?B.jW:B.jj,s=A.m(14),r=A.m(14)
u=u?B.eg:B.bP
return A.bt(w,new A.b6(4,s,B.dq),w,B.bF,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.adT),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ceJ(d,e,f){return this.azJ(d,e,f,null)},
KM(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gaks()<=0){s.c.L(x.q).f.U(D.fkX)
return}r=s.c
r.toString
v=s.gK3()
u=s.gaks()
t=s.gb6l()
A.a6(r,!1).O(new C.aT7(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.ui(n),l=n?B.ed:B.c,k=A.m(24),j=x.O,i=A.a([B.aY.j(0.22),B.bR.j(0.14)],j),h=A.m(14)
i=A.q(o,D.bT0,B.f,o,o,new A.p(o,o,A.L(B.aY.j(0.35),B.r,1),h,o,new A.a9(B.a7,B.aa,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bH,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.br,o,o,o,o,o,o,o,o,12,o,o,B.cD,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aG(o,o,o,o,A.X(B.cy,n?B.bv:B.br,o,o,o,o),o,o,o,new C.cGJ(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.azJ(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Py),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A_.Kv,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.br,o,o,o,o,o,o,o,o,12,o,o,B.I,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jW:B.jj
t=A.m(14)
s=A.L(n?B.eg:B.bP,B.r,1)
r=A.aG(o,o,o,o,A.X(B.wJ,n?B.aP:B.as,o,o,o,20),o,o,o,new C.cGK(p),o,o,o,o,o,B.cf)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c4b,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e9,o,o,o,1,o,o,!1,"\u2022",o,new C.cGL(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aG(o,o,o,o,A.X(B.hY,n?B.aP:B.as,o,o,o,20),o,o,o,new C.cGM(p),o,o,o,o,o,B.cf)],w),B.l,o,B.e,B.Q,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,16,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.au,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.azJ(m,"Amount","0.00",B.hZ),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e9,o,o,o,1,o,o,!1,"\u2022",o,new C.cGN(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d9J,new C.cGO(p,m),t),t.k("ak.E"))
i=A.a([i,B.bz,v,B.aB,h,B.U,s,B.af,A.bV(B.bG,u,B.bs,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.X,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ceJ(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cGP(p),o,o,o,!1,o,o,!1,o,!0,o,B.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l3,o,o,o,o)],w))}i.push(B.aQ)
h=B.aY.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bv:B.br,o,o,o,o,o,o,o,o,11,o,o,B.V,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gK3()===B.j.iH(p.gK3())?B.j.M(p.gK3()):p.gK3()
s=p.gb6l()
r=A.Bq(p.gaks())
i.push(A.q(o,A.A(A.a([A.E(A.x(A.a([u,B.ax,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bv:B.br,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bFJ(p.gK3()*p.gaks(),B.b2,!1,B.u)],w),B.l,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a9(B.a7,B.aa,B.x,j,o,o),B.n),o,o,o,o,B.jn,o,o,o))
i.push(B.bz)
j=A.m(14)
h=n?B.eg:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cp,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cGQ(d),h),1),B.au,A.E(A.dh(D.arX,D.fWh,p.ga3j(),A.bp(B.aY,o,o,0,B.c,o,B.cp,o,new A.b9(A.m(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.i,0,o,o))
return A.eP(o,l,new A.cP(Af.Xx,A.cd(A.x(i,B.al,o,B.e,B.Q,0,B.p),B.t,o,B.y,o,Ai.rW,o,o,B.ah),o),o,o,o,B.Ob,B.d7,o,new A.b9(k,B.a1),o)}}
C.a2g.prototype={
S(){return new C.byg()}}
C.byg.prototype={
Y(){var w,v,u=this
u.a4()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b6,B.aR),v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=r?B.ed:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.as,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jW:B.jj
v=A.aM(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bt(s,new A.b6(4,A.m(12),B.dq),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.flX(t,d),s,!1,s,s,!1,s,!0,s,B.ad,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dn,new C.flY(d),s),1)
r=A.bp(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eP(s,q,new A.D(B.Ck,A.x(A.a([o,B.aB,v,B.aQ,A.A(A.a([u,B.au,A.E(A.bJ(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.flZ(t,d),r),1)],w),B.l,s,B.e,B.i,0,s,s)],w),B.l,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d7,s,new A.b9(p,B.a1),s)}}
C.acw.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gk.prototype={
S(){return new C.bye(null,null)}}
C.bye.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,D.bA1,null,1,null,v)
w.cO(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBg()},
gbCS(){switch(this.a.r.a){case 1:return A.a([B.aY,B.bR,B.b2],x.O)
case 2:return A.a([B.bx,B.aY,B.b2],x.O)
case 3:return A.a([B.aH,B.ch,B.jX],x.O)
case 4:return A.a([B.hr,B.bR,B.fo],x.O)
case 0:return A.a([B.aY,B.bR,B.b2],x.O)}},
B(d){var w=A.S(d),v=this.d
v===$&&A.c()
return new A.em(A.c5(v,new C.flV(this,new C.ui(w.ax.a===B.J)),null),null)}}
C.ayU.prototype={
S(){return new C.byf(null,null)}}
C.byf.prototype={
Y(){var w,v=this
v.a4()
w=A.bl(null,B.nC,null,1,null,v)
w.cO(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBh()},
B(d){var w=this.d
w===$&&A.c()
return A.c5(w,new C.flW(this),null)}}
C.byd.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bn(new A.a1(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aN(w,w))
u=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
u.E(new A.j8(v))
w=A.K()
w.b=B.a9
w.c=5
o=p.f
t=p.e
w.r=o[1].j(0.14*t).gp(0)
d.am(v,w)
w=A.K()
w.b=B.a9
w.c=2.8
o=p.d?o[0]:o[2]
w.r=o.j(0.55*t).gp(0)
d.af(u,w)
w=A.xL(u)
t=A.a([],x.U)
w=new A.rw(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jH(y.B));--r
q=new A.BQ(w,r)
w.iy()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUg(d,q,r,o,0,0.2,4.2,0.92)
p.aUg(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUg(d,e,f,g,h,i,j,k){var w,v,u,t=B.j.F(g+h,1)*f,s=A.hNT(e.a.a,e,t,t+f*i,!0),r=A.bE3(s.glV().a.getBounds())
$.Q()
w=A.K()
w.b=B.a9
w.c=j
w.d=B.bu
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a9(B.a7,B.aa,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Iu,null).aK(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aPg.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aPh.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.ui.prototype={}
C.au1.prototype={
S(){return new C.aGA()},
ge3(){return this.c}}
C.aGA.prototype={
Y(){var w=this
w.a4()
w.d=w.a.d
w.ai7()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.M4(w,v)
this.a3()},
ai7(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ai7=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bEc(t.c,t.d.a),$async$ai7)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eUE(u,s))
return A.h(null,v)}})
return A.i($async$ai7,v)},
QL(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QL=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eUv(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.M4(t,s),$async$QL)
case 2:if(u.c!=null)u.m(new C.eUw(u))
return A.h(null,v)}})
return A.i($async$QL,v)},
Ri(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Ri=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.S(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.eUC(t,new C.ui(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$Ri)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9u(q),$async$Ri)
case 6:case 5:t.m(new C.eUD(t,r))
w=7
return A.b(t.QL(),$async$Ri)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ri,v)},
Wv(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.is6(r),$async$Wv)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eUq(t,new C.ro(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QL(),$async$Wv)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wv,v)},
cjP(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hFp(t,new C.eUu(u),w,v)},
ac_(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.p(w,w,new A.bG(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b4J,w,w,B.n),w,22,w,w,w,w,w,22)},
ab1(d){return this.bOT(d)},
bOT(d){var w=0,v=A.j(x.H),u=this
var $async$ab1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eUt(u,d))
w=2
return A.b(u.QL(),$async$ab1)
case 2:return A.h(null,v)}})
return A.i($async$ab1,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.S(a2).ax.a===B.J,e=f?B.c3:B.iF,d=A.m(8),a0=A.X(Y.a1T,f?B.bv:B.br,g,g,g,16),a1=x.p
a0=A.aP(!1,d,!0,new A.D(B.GY,A.A(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.br,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eUF(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.am(B.a0,g,B.b3,B.t,A.a([A.by(A.m(22),C.aS8(!0,A.m(22),1/0,B.qH,g,d,1/0),B.aq),A.ap(10,A.dh(D.bXF,D.fYG,h.gb4h(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.he,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aY.j(f?0.5:0.38),B.f_,22),new A.ac(-4,B.G,B.bR.j(0.2),B.H,32)],w)
u=A.m(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.H,10)],w)
s=A.m(16)
r=h.d
v=A.q(g,A.q(g,A.by(s,new A.am(B.a0,g,B.b3,B.t,A.a([C.aS8(!0,A.m(16),1/0,B.P0,g,r.c,1/0),A.c2(g,new A.p(g,g,g,g,g,new A.a9(B.b7,B.b8,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bj),A.ap(g,h.ac_(!0),g,g,8,g,8,g),A.ap(g,A.cDg(h.ac_(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cDg(h.ac_(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cDg(h.ac_(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dh(D.bTB,D.fRY,h.gb4h(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.he,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.c5T,B.n),g,g,g,g,B.me,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bfs,B.od,B.hb],u):A.a([B.b2,B.aY,B.bR],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aY.j(f?0.45:0.35),B.f_,24)],t)
r=A.m(22)
p=A.ap(g,A.X(B.jG,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.n),g,g,g,g,B.hc,g,g,g)],a1),B.l,g,B.e,B.i,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.I,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bFJ(h.d.gxG(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.U,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cD,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.L(B.ht.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cL,14)],t)
j=B.aH.j(0.22)
i=A.m(10)
u=A.q(g,A.by(r,new A.am(B.a0,g,B.ab,B.t,A.a([p,new A.D(D.bES,A.A(A.a([o,B.au,A.aI(!1,B.a3,!0,g,A.aP(!1,n,!0,A.eJ(new A.D(U.wk,A.x(A.a([A.q(g,D.arx,B.f,g,g,new A.p(j,g,A.L(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cl,g,g,g),B.fP,D.fGD],a1),B.l,g,B.e,B.Q,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcjO(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,g,v,s,new A.a9(B.aA,B.aE,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fH(1.7777777777777777,d,g),B.aQ,w,B.U,u,B.bz,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,16,g,g,B.I,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b5,A.dh(Av.a3K,D.fEt,h.gbDl(),A.bp(B.aY,g,g,g,B.c,g,B.iw,g,new A.b9(A.m(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ed:B.c
v=A.m(14)
u=A.L(f?B.eg:B.bP,B.r,1)
t=A.X(B.a2d,f?B.bv:B.br,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,g,g,g,B.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.x(A.a([t,B.X,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bv:B.br,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.i,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.n),g,g,g,g,B.qD,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eUG(h,new C.ui(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.Ca,A.as(A.n5(g,f?B.bv:B.br,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.Cd,a0,g),A.E(A.cd(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yP,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bH1(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ed:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cL,12)],x.V),n=A.m(16),m=A.q(u,u,B.f,u,u,D.b7u,u,u,u,u,u,u,u,5),l=B.aY.j(r?0.22:0.12),k=A.m(12)
l=A.q(u,A.X(s?B.id:B.hy,B.b2,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bL
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.as,u,u,u,u,u,u,u,u,15,u,u,B.I,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd_k()
v=A.Bq(d.d)
B.d.v(t,A.a([B.ax,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bv:B.br,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.bb,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aY.j(0.14),B.bR.j(0.1)],x.O)
w=A.m(12)
k=A.q(u,C.bFJ(d.c*d.d,B.b2,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a9(B.a7,B.aa,B.x,k,u,u),B.n),u,u,u,u,B.he,u,u,u)
w=x.p
return A.q(u,A.by(n,new A.EK(A.A(A.a([m,A.E(new A.D(B.alr,A.A(A.a([l,B.bd,t,B.ae,k,A.aG(u,u,u,u,A.X(B.cy,(r?B.bv:B.br).j(0.75),u,u,u,20),u,u,u,new C.eUr(this,d),u,u,u,u,u,B.cf)],w),B.l,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b6l,new A.p(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.aez.prototype={
EY(d){return this.bQg(d)},
bQg(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EY=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pw(d,o,!1),$async$EY)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bP(Ah.C8,null,x.H),$async$EY)
case 4:s=t.d
w=5
return A.b(C.fVB(!0,o,s),$async$EY)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hf(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EY)
case 6:p=f
w=7
return A.b(A.pv(o,!1),$async$EY)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b4(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EY,v)},
a0f(d){return this.cAd(d)},
cAd(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0f=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pw(d,s,!1),$async$a0f)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hy(d,new C.atW(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pv(s,!1),$async$a0f)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0f,v)},
QM(d){return this.cwh(d)},
cwh(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hy(d,D.aL9,!0,"NgmyWorksheetProjectScan",x.N),$async$QM)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bFK(s),$async$QM)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.U(D.fk4)
w=1
break}q=C.hgT(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dL(p,x.H),$async$QM)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b4(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QM,v)},
a0g(d){return this.cIw(d)},
cIw(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0g=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bFg(),$async$a0g)
case 3:s=f
if(s==null){w=1
break}r=C.hgT(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dL(q,x.H),$async$a0g)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b4(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0g,v)},
B(d){var w=this,v=null,u=A.S(d).ax.a===B.J,t=new C.ui(u),s=w.d.d.length,r=u?B.ed:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kB,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wj,A.q(v,A.x(A.a([w.cyN(d,t,s),new A.D(D.bEg,A.x(A.a([w.b7g(t,"QR restore"),B.X,A.A(A.a([w.b2g(t,!0,B.jK,B.aH,B.aH,new C.eUI(w,d),"Show to scan","QR code"),B.au,w.azK(t,B.jp,B.b9,B.bp,new C.eUJ(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.i,0,v,v),B.d8,w.b7g(t,"Backup files"),B.X,A.A(A.a([w.azK(t,B.i_,B.aY,B.bR,new C.eUK(w,d),"Full copy","Backup file"),B.au,w.azK(t,R.zr,B.av,B.aS,new C.eUL(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.l,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.p(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cyN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eV,B.cG,B.fU],k):A.a([B.b2,B.aY,B.bR],k)
w=A.ap(l,A.X(B.uV,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.as(A.q(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kS,l,l,l,36),l,l,l)
u=A.m(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cL,12)],x.V)
r=this.d
s=A.q(l,C.aS8(!0,A.m(13),64,D.bOT,l,r.c,64),B.aq,l,l,new A.p(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.I,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.abj,l,l,l)
r=C.bFJ(r.gxG(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.am(B.a0,l,B.ab,B.t,A.a([w,new A.D(D.bEE,A.x(A.a([v,A.A(A.a([s,B.ex,A.E(A.x(A.a([u,B.ax,t,B.U,A.A(A.a([r,B.ae,A.q(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.n),l,l,l,l,B.fY,l,l,l)],m),B.l,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aG(l,l,l,l,A.X(B.cy,B.c.j(0.85),l,l,l,l),l,l,l,new C.eUH(d),l,l,l,A.o_(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aTv,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.l,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a9(B.aA,B.aE,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7g(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.p(B.aY,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bv:B.br,w,w,w,w,w,w,w,w,11,w,w,B.I,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.i,0,w,w)},
b2g(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ak_:B.aP
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eg:B.bP
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cL,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.L(h.j(0.35),B.r,1)
t=A.q(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.n),r,r,r,r,B.rY,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.as,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aI(!1,B.a3,!0,r,A.aP(!1,q,!0,A.eJ(new A.D(E.a0g,A.x(A.a([t,B.af,u,B.bH,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bv:B.br,r,r,r,r,r,r,r,r,11,r,r,B.cD,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azK(d,e,f,g,h,i,j){return this.b2g(d,!1,e,f,g,h,i,j)}}
C.atW.prototype={
S(){return new C.bne()}}
C.bne.prototype={
Y(){this.a4()
this.ag1()},
ag1(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ag1=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bFL(p.c,p.d),$async$ag1)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eUl(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eUm(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ag1,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.S(d).ax.a===B.J,f=g?B.BH:B.iF,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aG(h,h,h,h,A.X(B.eN,g?B.ac:B.an,h,h,h,18),h,h,h,new C.eUn(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.T,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.xb],u),B.l,h,B.e,B.i,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eV,B.cG,B.fU],s):A.a([B.b2,B.aY,B.bR],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aY.j(g?0.4:0.3),B.f_,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.di,B.K,h,h)
p=C.bFJ(p.gxG(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.q(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.q(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.n),h,h,h,h,B.fY,h,h,h)],u),B.l,h,B.bb,B.i,0,h,h)],u),B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a9(B.aA,B.aE,B.x,s,h,h),B.n),h,h,h,h,E.a0D,h,h,1/0)
t=g?D.bqF:B.c
q=A.m(24)
p=A.L(w?B.aH.j(0.4):B.aY.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Vm,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.erA)
else{m=A.m(20)
l=A.L(B.aO,B.r,1)
o.push(A.q(h,A.qd(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aQ)
n=w?B.aH:B.aY
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.L((w?B.aH:B.aY).j(0.35),B.r,1)
k=w?B.Pe:B.PN
k=A.X(k,w?B.aH:B.aY,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.au,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ac:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.n),h,h,h,h,B.iw,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ad.On,e,h),A.E(A.cd(A.x(A.a([s,B.aQ,A.q(h,A.x(o,B.l,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.n),h,h,h,h,B.ux,h,h,1/0)],u),B.l,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.amz,h,h,B.ah),1)],u),B.l,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.au0.prototype={
S(){return new C.aGz(A.zW(B.NF,B.o4,B.v2))}}
C.aGz.prototype={
t(){this.d.t()
this.a3()},
aOF(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j1(w,d)},
cfB(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.ipq(t)
if(s!=null){this.aOF(s)
return}r=C.hvR(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOF(B.a.i(B.a.b2(r,B.a.co(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eH(A.a([A.aG(t,t,t,t,A.X(u.f?B.uK:A8.Pm,t,t,t,t,t),t,t,t,new C.eUp(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.BH,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fRQ,t,t,t,1,t,!0),q=A.zV(u.d,B.c_,u.gcfA()),p=A.m(28)
p=A.as(A.q(t,t,B.f,t,t,new A.p(t,t,A.L(B.aY,B.r,3),p,A.a([new A.ac(2,B.G,B.aY.j(0.35),B.H,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c4(r,B.w,new A.am(B.a0,t,B.b3,B.t,A.a([q,p,A.ap(32,A.q(t,D.fQB,B.f,t,t,new A.p(w,t,A.L(B.aY.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jn,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLt.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.OX.prototype={
S(){return new C.aGB(D.adb,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGB.prototype={
gcGi(){return J.bGS(this.e,0,new C.eV7())},
Y(){this.a4()
$.aW.c1$.push(this)
this.wj()},
t(){$.aW.hV(this)
this.a3()},
jl(d){if(d===B.fT)this.wj()},
wj(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wj=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Dz(q.a.c).dh(0,B.k1),$async$wj)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eV3(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eV4(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wj,v)},
Is(d){return this.bN0(d)},
bN_(){return this.Is(null)},
bN0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Is=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.is8(l,d),$async$Is)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lD(l,r,q,D.dlD,new A.V(Date.now(),0,!1))
w=4
return A.b(C.M4(t.a.c,p),$async$Is)
case 4:o=f
w=5
return A.b(t.wj(),$async$Is)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.U(D.fhb)
w=1
break}n=J.aU(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.U(D.fiZ)
else n.L(q).f.U(A.b4(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.F1(m)
case 1:return A.h(u,v)}})
return A.i($async$Is,v)},
F1(d){return this.cjA(d)},
cjA(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hy(s,new C.au1(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F1)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.M4(u.a.c,t),$async$F1)
case 5:case 4:w=6
return A.b(u.wj(),$async$F1)
case 6:return A.h(null,v)}})
return A.i($async$F1,v)},
w4(d){return this.c2l(d)},
c2l(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bFg(),$async$w4)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hy(r,D.aL9,!0,"NgmyWorksheetProjectScan",x.N),$async$w4)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bFK(q),$async$w4)
case 14:w=12
break
case 13:f=null
case 12:s=f
w=8
break
case 9:s=null
case 8:case 4:if(s==null){r=t.c
if(r==null){w=1
break}r=r.L(x.q).f
r.U(A.b4(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hgT(s)
w=15
return A.b(C.M4(t.a.c,p),$async$w4)
case 15:o=f
w=16
return A.b(t.wj(),$async$w4)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.U(D.fj3)
w=1
break}r.L(x.q).f.U(A.b4(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.F1(p)
case 1:return A.h(u,v)}})
return A.i($async$w4,v)},
Or(d){return this.bLE(d)},
bLE(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Or=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.eUP(d),s,null,!0,!0,x.y),$async$Or)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p4(t.a.c,A.a([],x.D)),$async$Or)
case 6:w=7
return A.b(t.wj(),$async$Or)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fhg)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Or,v)},
cjN(d){var w=this.c
w.toString
A.bT(B.L,null,new C.eUY(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b7T(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jW
else w=B.c
v=A.m(16)
u=A.L(p?B.eg:B.bP,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.q(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.n),r,r,r,r,B.bV,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.as,r,r,r,r,r,r,r,r,14,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aI(!1,B.a3,!0,r,A.aP(!1,q,!0,A.q(r,A.x(A.a([s,B.af,t,B.bH,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bv:B.br,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.n),r,r,r,r,B.wi,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0L(d,e){return this.cjB(d,e)},
cjB(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0L=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.L,null,new C.eUT(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0L)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hFp(r,new C.eUU(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Ot(d,e),$async$a0L)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0L,v)},
b4U(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.q(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.n),u,u,u,u,B.bV,u,u,u)
if(d)t=B.ay
else t=h.a?B.aP:B.as
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bv:B.br,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aI(!1,B.a3,!0,u,A.aP(!1,u,!0,new A.D(B.Cj,A.A(A.a([s,B.bd,t,A.X(B.eJ,w?B.bv:B.br,u,u,u,u)],v),B.l,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cqw(d,e,f,g,h,i){return this.b4U(!1,d,e,f,g,h,i)},
Ot(d,e){return this.bLO(d,e)},
bLO(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ot=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lo(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Ot)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bDY(t.a.c,d.a),$async$Ot)
case 6:w=7
return A.b(t.wj(),$async$Ot)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b4(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ot,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===B.J,n=new C.ui(o),m=o?B.c3:B.iF
if(q.f)o=D.bde
else{w=q.bG8(n)
v=q.c1p(n)
u=q.gbDe()
if(o)t=B.jW
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.af,v,B.aQ,new C.Gk(A.q(p,A.A(A.a([q.aDi(P.P_,"Projects",n,D.adb),q.aDi(B.wy,"Cashier",n,D.b1d),q.aDi(B.Hj,"Family Tree",n,D.hDz)],r),B.l,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eA,0.95,u,p),B.bz],r)
w=q.d
if(w===D.adb){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.as,p,p,p,p,p,p,p,p,16,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b5,new C.ayU(q.gaT1(),p)],r),B.l,p,B.e,B.i,0,p,p),B.aB,q.cqy(n)],r))}else{o=q.a
if(w===D.b1d)u.push(new C.apO(o.c,n,p))
else{w=q.r
u.push(new C.ar0(o.c,o.d,o.e,o.f,new C.eVa(q),new C.eVb(q),new A.bI(w,x.b4)))}}o=A.cd(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Al.Og,p,p,B.ah)}return A.c4(p,m,A.bm(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bG8(d){var w=null,v=A.m(8),u=d.a,t=A.X(Y.a1T,u?B.bv:B.br,w,w,w,16)
return A.aP(!1,v,!0,new A.D(B.kT,A.A(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bv:B.br,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eUM(this),w,w,w,w,w,w,w)},
gbDe(){switch(this.d.a){case 0:return D.acp
case 1:return D.hrZ
case 2:return D.acq}},
c1p(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aY.j(0.35),B.cA,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.bZA,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bJf,A.aI(!1,B.a3,!0,w,A.aP(!1,A.m(12),!0,A.q(w,D.bWY,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eUQ(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b2.j(0.55),q=A.m(12)
return new C.Gk(A.q(w,A.x(A.a([new A.D(B.GP,s,w),A.q(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ax,A.d(A.Bq(this.gcGi()),w,w,w,w,w,w,D.fAK,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.n),w,w,w,B.uu,B.jn,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(B.aY,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hrY,w)},
aDi(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aY:B.L,q=A.m(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aY.j(0.42),B.cL,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bv:B.br
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bv:B.br
return A.E(A.aI(!1,B.a3,!0,u,A.aP(!1,s,!0,A.cT(u,A.A(A.a([w,B.e4,new A.dl(1,B.cm,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bb,B.i,0,u,u),u,u,B.cw,new A.p(r,u,p,q,o,u,B.n),B.iK,u,u,u,u,B.GZ,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eV6(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cqy(d){var w,v,u,t,s,r,q=this,p=null
if(J.cr(q.e)){w=d.a
v=w?B.ed:B.c
u=A.m(15)
t=A.q(p,D.bX3,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.G,B.aY.j(0.5),B.f_,28)],x.V),D.c8i,B.a6),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.as,p,p,p,p,p,p,p,p,18,p,p,B.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gk(A.q(p,A.x(A.a([t,B.d8,s,B.U,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bv:B.br,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dY,A.A(A.a([A.E(q.aUC(B.jp,"Scan QR",new C.eV0(q),d),1),B.au,A.E(q.aUC(R.zr,"Upload file",new C.eV1(q),d),1)],r),B.l,p,B.e,B.i,0,p,p),B.aB,A.bJ(D.h1m,p,q.gaT1(),A.bp(B.aY,p,p,p,B.c,B.h6,p,p,new A.b9(A.m(12),B.a1),p,p,p))],r),B.l,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bFJ,1.05,D.acp,p)}w=J.b8(q.e,new C.eV2(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gk(A.x(w,B.l,p,B.e,B.i,0,B.p),16,B.bV,1,D.acp,p)},
aUC(d,e,f,g){var w=null,v=B.aY.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.L(B.aY.j(0.45),B.r,1)
return A.aI(!1,B.a3,!0,u,A.aP(!1,t,!0,A.q(w,A.x(A.a([A.X(d,B.b2,w,w,w,26),B.U,A.d(e,w,w,w,w,w,w,D.fyY,B.K,w,w)],x.p),B.l,w,B.e,B.Q,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.n),w,w,w,w,B.alk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cqx(d,e){var w,v,u=null,t=e.a,s=t?B.ed:B.c,r=A.m(14),q=A.L(t?B.eg:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.eu,10)],x.V),o=A.m(14),n=t?B.bv:B.br
n=A.by(B.Xr,new A.fH(1.7777777777777777,C.aS8(!0,B.fj,1/0,P.P_,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.as,u,u,u,u,u,u,u,u,15,u,u,B.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.ax,A.d(""+d.d.length+" budget items \xb7 "+A.Bq(d.gxG()),u,u,u,u,u,u,D.fwV,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.q(u,A.aI(!1,B.a3,!0,u,A.aP(!1,o,!0,A.x(A.a([n,new A.D(B.bF,A.A(A.a([v,A.aG(u,u,u,u,A.X(Am.a2W,t?B.bv:B.br,u,u,u,u),u,u,u,new C.eUZ(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eV_(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.p(s,u,q,r,p,u,B.n),u,u,u,B.el,u,u,u,1/0)}}
C.bA1.prototype={}
C.ro.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.I(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd_k(){var w,v,u,t,s=this.c
if(s===B.j.iH(s))w=B.o.u(B.j.M(s))
else{v=B.j.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lD.prototype={
gxG(){return B.d.cG(this.d,0,new C.cFY())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.cFX(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfg(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lD(w.a,w.b,v,u,w.e)},
beZ(d){return this.bfg(d,null)},
Tz(d){return this.bfg(null,d)}}
C.Iq.prototype={
a7(){return"FamilyGender."+this.b}}
C.hV.prototype={
aj(){var w=this
return A.I(["id",w.a,"name",w.b,"gender",C.hAU(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aG1(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.am3.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kU.prototype={
gaqq(){var w=this.f
return new A.Y(w,new C.bSx(),A.U(w).k("Y<1>")).gI(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.bSw(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ihK(w.y),"games",w.z],x.N,x.z)},
wZ(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kU(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bff(d,e){var w=null
return this.wZ(w,w,w,d,e,w,w,w,w)},
cPG(d,e,f,g,h,i,j){return this.wZ(d,e,null,f,g,h,i,j,null)},
aG6(d,e){var w=null
return this.wZ(w,w,w,w,d,w,w,e,w)},
cPI(d,e,f,g,h,i,j,k){return this.wZ(d,e,null,f,g,h,i,j,k)},
cOb(d){var w=null
return this.wZ(w,w,w,w,w,w,w,d,w)},
cOz(d){var w=null
return this.wZ(w,w,w,w,w,w,w,w,d)},
beT(d){var w=null
return this.wZ(w,w,d,w,w,w,w,w,w)},
aFS(d){var w=null
return this.wZ(w,w,w,w,w,d,w,w,w)},
cPd(d,e,f){var w=null
return this.wZ(w,d,w,w,e,w,w,f,w)},
cNZ(d){var w=null
return this.wZ(w,w,w,d,w,w,w,w,w)},
cOL(d,e){var w=null
return this.wZ(d,w,w,w,w,w,e,w,w)}}
C.cFZ.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cG_.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aIF.prototype={}
C.baF.prototype={
ak(d){this.a=d.a
this.b=d.b},
cY(d){var w=new C.baF()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b2(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.baE.prototype={
gwR(){return!0},
gGx(){return this.z.b<this.b.length},
aWi(d){switch(0){case 0:return d.a.c}},
aVZ(d){switch(0){case 0:return d.a.d}},
bVR(d,e){switch(0){case 0:return new A.hQ(d,e)}},
bVe(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hf(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iO(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ia(b4)
switch(0){case 0:v=b5.b
u=new A.kP(0,v,0,1/0)
t=w===B.Vd
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.J)(q),++h){g=q[h]
g.hf(b4,u,!0)
f=b1.aWi(g)
f.toString
e=b1.aVZ(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIF(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIF(k,j,i))}d=s.length
switch(0){case 0:q=b5.cA(new A.hQ(m,l))
a0=q.a
a1=q.b
b1.a=new A.iO(0,0,a0,a1)
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
for(q=B.d.fO(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.J)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWi(g)
e=b1.aVZ(g)
e.toString
a9=b1.bVe(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bVR(a6,a3+a9)
b0=g.a
g.a=new A.iO(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fV(d){var w,v,u,t,s,r=this
r.lA(d)
w=d.b
w.is()
v=A.dr()
u=r.a
v.ej(u.a,u.b,0,1)
w.pm(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fV(d)
w.ny(0)},
H1(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
is(){return this.z}}
C.byh.prototype={}
var z=a.updateTypes(["aB<~>()","P(hV)","~()","P(kU)","P(nw)","a8<n,@>(kU)","H(kU,kU)","H(hV,hV)","n(hV)","kU(a8<@,@>)","P(lD)","nw(a8<@,@>)","a8<n,@>(nw)","P(uS)","uS()","H(hV)","ai<hV>()","P(zE)","a09(Z)","n?(hV)","eI<n?>(hV)","aB<~>(lD)","P(ro)","a8<n,@>(hV)","hV(a8<@,@>)","H(lD,lD)","P(afR)","~(bd)","v(oH)","H(H,a9X)","P(qH<H>)","~(qH<H>)","TY(Z)","P(MK)","P(uR)","~(hV)","n(n)","Wh(Z)","TX(Z)","aee(Z)","a_5(Z)","hV(hV)","cK(bB<n,GA>)","cK(KT)","a_z(Z)","H?(hV)","hV()","P(KT)","D(hV)","~(Iq)","a_v(Z)","v(Iq,n,a0)","P(afK)","bB<n,ai<a8<n,@>>>(n,ai<nw>)","a_x(Z)","+count,id,name(H,n,n)(kU)","n(kU)","a0t(Z)","a0u(Z)","P(lW)","lW()","ZE(Z)","a2g(Z)","a_7(Z)","a_6(Z)","~(H)","~(n,ls?)","v(ro)","aez(Z)","~(mi)","aB<~>([n?])","G(G,lD)","v(lD)","G(G,ro)","a8<n,@>(ro)","ro(a8<@,@>)","ai<ls>()","uR()","n(V)","lD(a8<@,@>)","ct(Ip)","n(lD)","a8<n,@>(lD)","H(nw,nw)","kU(a8<n,@>)","kU(kU)"])
C.fO8.prototype={
$1(d){return d.a+" "+d.b},
$S:123}
C.fO7.prototype={
box(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rg(s,d,B.i0,"book",E.GB),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.LS(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.box(d)},
$S:310}
C.fO9.prototype={
$1(d){return d.b},
$S:123}
C.fXI.prototype={
$1(d){var w=null
return A.eP(w,B.L,new H.Qm(this.a,this.b,w),w,w,0,B.a0h,B.d7,w,w,w)},
$S:47}
C.fBj.prototype={
$1(d){return d!=null},
$S:219}
C.fBk.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:219}
C.fBp.prototype={
$1(d){if(this.a)return new A.o(d.a*520,d.b*160)
return d},
$S:172}
C.fLS.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.ha(w,B.tq,w,w,w,w,w,w,w,B.dD,w,w,10.5,w,B.eB,w,!0,w,w,w,w),w),u=f?B.eB:B.ws
return new A.oa(D.bB4,A.aaM(A.a([new A.fV(130,w,v),new A.zD(1,B.Hc,A.fc(e,w,w,w,A.ha(w,g==null?D.eu_:g,w,w,w,w,w,w,w,B.dD,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yr,B.lR))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1956}
C.fLR.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.w0(999)
f=A.xD(A.lR(h,A.fc("Cashier",h,h,h,A.ha(h,D.An,h,h,h,h,h,h,h,B.dD,h,h,10,h,B.eB,h,!0,h,h,h,h),h),h,new A.kQ(D.etR,h,f,B.i4,h),h,h,D.bBA,h))
w=A.xD(A.fc("Debt receipt",h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dD,h,h,22,h,B.eB,h,!0,h,h,h,h),h))
v=A.xD(A.fc(C.xl(new A.V(Date.now(),0,!1),!0),h,h,h,D.aaT,h))
u=A.w0(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dD,h,h,14,h,B.eB,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.aaT,h)
q=A.w0(10)
p=x.Z
u=A.lR(h,A.zw(A.a([s,new A.fV(h,2,h),r,new A.fV(h,10,h),A.lR(h,A.zw(A.a([A.fc("Amount owed",h,h,h,D.aaT,h),new A.fV(h,2,h),A.fc(A.Bq(t.c),h,h,h,A.ha(h,D.An,h,h,h,h,h,h,h,B.dD,h,h,20,h,B.eB,h,!0,h,h,h,h),h)],p),B.rN,B.lR),h,new A.kQ(B.pL,h,q,B.i4,h),h,h,D.bAL,1/0)],p),B.rN,B.lR),h,new A.kQ(E.aMw,h,u,B.i4,h),h,h,D.bCJ,1/0)
q=new A.nT(D.etU,0.9,B.l8)
r=A.w0(12)
s=i.c
o=s.$2("Original due",C.xl(t.r,!1))
n=s.$2("Current due",C.xl(t.f,!1))
m=i.d
l=new A.nT(m,1.1,B.l8)
k=A.w0(8)
j=i.a
k=A.a([o,n,new A.fV(h,6,h),A.lR(h,A.xD(A.fc(t.gaNd(),h,h,h,A.ha(h,m,h,h,h,h,h,h,h,B.dD,h,h,11,h,B.eB,h,!0,0.5,h,h,h),h)),h,new A.kQ(h,new A.q0(l,l,l,l),k,B.i4,h),h,h,D.bBI,1/0),new A.fV(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.An))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.An))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.ha(h,B.tq,h,h,h,h,h,h,h,B.dD,h,h,10.5,h,B.eB,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,Tw>")
o=A.C(new A.N(o,new C.fLQ(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fV(h,4,h),n,new A.fV(h,6,h),new C.baE(5,5,new C.baF(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fV(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fV(h,8,h),w,new A.fV(h,3,h),v,new A.fV(h,16,h),u,new A.fV(h,10,h),A.lR(h,A.zw(k,B.yr,B.lR),h,new A.kQ(h,new A.q0(q,q,q,q),r,B.i4,h),h,h,B.alv,1/0)],p)
w=j.a
if(w!=null){v=new A.nT(B.JG,1,B.l8)
B.d.v(f,A.a([new A.fV(h,16,h),A.fc("Debtor signature",h,h,h,A.ha(h,B.tq,h,h,h,h,h,h,h,B.dD,h,h,10,h,B.eB,h,!0,h,h,h,h),h),new A.fV(h,6,h),A.lR(h,new A.IK(w,B.XD,h,h),h,new A.kQ(h,new A.q0(v,v,v,v),A.w0(6),B.i4,h),82,h,B.Ol,1/0)],p))}f.push(new A.fV(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fpk,h))
f.push(new A.fV(h,18,h))
f.push(A.xD(A.fc("NGMY.ORG",h,h,h,A.ha(h,D.An,h,h,h,h,h,h,h,B.dD,h,h,14,h,B.eB,h,!0,1.8,h,h,h),h)))
return f},
$S:424}
C.fLQ.prototype={
$1(d){var w=null,v=new A.nT(D.JH,0.7,B.l8),u=A.w0(999)
return A.lR(w,A.fc(C.xl(d,!1),w,w,w,A.ha(w,D.JH,w,w,w,w,w,w,w,B.dD,w,w,9.5,w,B.eB,w,!0,w,w,w,w),w),w,new A.kQ(w,new A.q0(v,v,v,v),u,B.i4,w),w,w,D.bH9,w)},
$S:1957}
C.c7M.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.m(999),t=A.L(B.bC.j(0.28),B.r,1)
return A.q(w,A.d(C.xl(d,!1),w,w,w,w,w,w,D.fwp,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.eI,w,w,w)},
$S:1958}
C.fYe.prototype={
$1(d){var w=null,v=A.aH(d,B.c1,x.w).w,u=A.m(26),t=A.aG(w,w,w,w,D.c_y,w,w,w,new C.fYb(d),w,w,w,w,w,B.cf),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eP(w,B.L,new A.cP(new A.aY(0,380,0,v.a.b*0.9),A.aI(!1,B.a3,!0,u,new A.D(B.a04,A.x(A.a([new A.bM(B.aa,w,w,t,w),new A.dl(1,B.cm,A.cd(A.x(A.a([new A.em(new C.b_G(r,w),s),B.X,A.A(A.a([A.E(A.es(B.zA,D.fYB,new C.fYc(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fg,w,new A.b9(A.m(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a3A,D.fV_,new C.fYd(r,d),A.bp(B.b2,w,w,w,B.c,w,B.fg,w,new A.b9(A.m(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.i,0,w,w)],p),B.l,w,B.e,B.Q,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.Q,0,B.p),w),B.f,B.as,0,w,w,w,w,w,B.aj),w),w,w,0,Ar.a0u,B.d7,w,w,w)},
$S:47}
C.fYb.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fYc.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.md(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hh),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eT(B.dN.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aC(o,0,32)
w=5
return A.b(A.tp(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.U(A.b4(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYd.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fSw(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.U(A.b4(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fY6.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eP(w,B.as,A.x(A.a([new A.D(D.bCx,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.ng,w,w,w),1),A.aG(w,w,w,w,B.lp,w,w,w,new C.fY4(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),w),new A.dl(1,B.cm,new A.D(B.f3,A.by(A.m(14),A.fR(t,B.A,w,w,B.cj,B.dB,!1,w,!1,w,w),B.aq),w),w),new A.D(B.O_,new A.a5(1/0,w,A.dh(B.oF,D.aWP,new C.fY5(t,this.c,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.Q,0,B.p),w,w,w,B.Oc,B.d7,w,new A.b9(v,B.a1),w)},
$S:47}
C.fY4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fY5.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.tp(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.U(A.b4(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYi.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eP(w,B.as,new A.D(D.bCF,A.x(A.a([A.A(A.a([D.bIl,A.aG(w,w,w,w,B.lp,w,w,w,new C.fYg(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.i,0,w,w),B.U,new A.em(A.by(A.m(14),A.q(w,A.b3(w,w,w,new C.bcR(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.dh(B.oF,D.aWP,new C.fYh(t,s,d),A.bp(B.b2,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(v,B.a1),w)},
$S:47}
C.fYg.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fYh.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.md(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.hh),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aC(p,0,32)
r=J.eT(B.dN.gaU(s))
w=5
return A.b(A.tp(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.U(A.b4(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fG9.prototype={
$1(d){return d.a===this.a},
$S:252}
C.dPX.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dPI.prototype={
bnL(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ed:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dPL(s,q,e),p,!0,!0,!1,B.JY,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dPM(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnL(d,e)},
$S:1959}
C.dPL.prototype={
$1(d){var w,v=null,u=this.c===B.x0,t=u?D.dsu:D.do6
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.as,v,v,v,v,v,v,v,v,15,v,v,B.I,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.am1,A.x(A.a([u,B.ax,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bv:B.br,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.ip(!0,v,v,B.y,D.ffS,new C.dPK(this.a,w,t,d),t.length,v,B.dW,B.ah,!0)],x.p),B.al,v,B.e,B.Q,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:25}
C.dPK.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cG.j(0.14)
else w=t.b.a.d.a?B.T:B.aP
v=A.m(14)
if(q)u=B.cG
else u=(t.b.a.d.a?B.bv:B.br).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aP(!1,p,!0,A.q(B.A,C.b_F(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dPJ(t.d,r),s,s,s,s,s,s,s)},
$S:192}
C.dPJ.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dPM.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dPG.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:90}
C.dPH.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cG(B.cw,e,v)
return new A.d1(e,!1,A.ig(B.A,A.as(A.aI(!1,B.a3,!0,v,new A.dY(new C.dPF(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bg(t,new A.br(0.96,1,u),u.k("bg<bO.T>"))),v)},
$S:34}
C.dPF.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.c1,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ed:B.c,f=A.m(14),e=A.L((h?B.bv:B.br).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,16,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aP(!1,v,!0,new A.D(B.eA,A.X(B.cy,i.a.d.a?B.bv:B.br,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPq(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aV8("Name")
r=l.a
q=r.d==null?k:new C.dPr(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bq:B.m6
n=A.L(B.cG.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bf8(new A.D(B.fB,A.aP(!1,p,!0,A.q(B.A,C.b_F(m==null?"\ud83d\udc64":A.fMG(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a6),k,34,k,B.cl,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l3,k,B.aaI,k,k)
v=A.a([v,B.af,t,B.U,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.br,k,k,k,k,k,k,k,k,11.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aVP("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dPs(r,a0),r.d===B.x0),1),B.ae,A.E(i.aVP("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dPx(r,a0),r.d===B.a7p),1)],u),B.l,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.U,new A.bM(B.a7,k,k,A.ho(D.bYP,D.fWT,new C.dPy(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cG,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cf)),k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uV(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aV9("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.e9,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.X)
t=i.a.d.a
s=t?B.T:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.L((t?B.bv:B.br).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xl(r.a,!1)
v.push(A.aI(!1,B.a3,!0,q,A.aP(!1,p,!0,A.q(k,A.A(A.a([A.E(A.x(A.a([t,B.bH,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bVu],u),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.n),k,k,k,k,B.bh,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPz(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.U,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aV8("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ad,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,12.5,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3h(r.b.length!==0,B.n1,new C.dPA(r,i,a0),new C.dPB(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3h(r.c.length!==0,D.bOR,new C.dPC(r,i,d,a0),new C.dPD(r,a0),"Camera or gallery","Selfie"))
v.push(B.U)
t=l.w
v.push(new Aq.a8A("Signature (optional)",t,new C.dPE(a0),new C.dPt(a0,t),new C.dPu(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bv:B.br
s=(i?B.bv:B.br).j(0.28)
s=A.E(A.dU(E.aWI,new C.dPv(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.qB,k,new A.b9(A.m(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cG,k,k,k,B.c,k,B.qB,k,new A.b9(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bJ(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vz,k,k,k),k,new C.dPw(r,w,d),t),1)],u),B.l,k,B.e,B.i,0,k,k))
return A.q(k,A.cd(A.x(v,B.al,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.n),k,k,k,B.rV,B.jn,k,k,360)},
$S:170}
C.dPq.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPr.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPs.prototype={
$0(){return this.b.$1(new C.dPp(this.a))},
$S:0}
C.dPp.prototype={
$0(){var w=this.a
w.d=B.x0
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPx.prototype={
$0(){return this.b.$1(new C.dPo(this.a))},
$S:0}
C.dPo.prototype={
$0(){var w=this.a
w.d=B.a7p
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPy.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPz.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xq(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dPn(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPn.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcl(),w.gcg(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dPA.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q3(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dPm(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPm.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dPB.prototype={
$0(){return this.b.$1(new C.dPl(this.a))},
$S:0}
C.dPl.prototype={
$0(){return this.a.b=""},
$S:0}
C.dPC.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ed:B.c
w=3
return A.b(A.bT(q,null,new C.dPj(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q3(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dPk(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPj.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.aro,w,w,w,w,new C.dPd(d),!1,w,w,w,w,w,w,w,D.fMT,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.arm,w,w,w,w,new C.dPe(d),!1,w,w,w,w,w,w,w,D.fU_,w,w,w)],x.p),B.l,w,B.e,B.Q,0,B.p),!0,!1,B.ag,!0,!0)},
$S:25}
C.dPd.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dPe.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dPk.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dPD.prototype={
$0(){return this.b.$1(new C.dPi(this.a))},
$S:0}
C.dPi.prototype={
$0(){return this.a.c=""},
$S:0}
C.dPE.prototype={
$0(){return this.a.$1(new C.dPh())},
$S:0}
C.dPh.prototype={
$0(){},
$S:0}
C.dPt.prototype={
$0(){return this.a.$1(new C.dPg(this.b))},
$S:0}
C.dPg.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dPu.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aiL(u.a,null,null,new C.dPf(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPf.prototype={
$4(d,e,f,g){this.a.$1(new C.dPc(this.b,d))},
$S:465}
C.dPc.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dPv.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPw.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.U(D.fkW)
return}if(w.a.d==null){w.c.L(x.q).f.U(D.fhP)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dQ_.prototype={
$3(d,e,f){return B.bL},
$C:"$3",
$R:3,
$S:90}
C.dQ0.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ed:B.c,n=A.m(14),m=A.L((p?B.bv:B.br).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.as,r,r,r,r,r,r,r,r,16,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bq(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bv:B.br,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zI(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zI(r).length>0?B.bC:B.cG,r,r,r,r,r,r,r,r,12,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bv:B.br
t=(q?B.bv:B.br).j(0.28)
s=x.p
return new A.d1(e,!1,A.as(A.aI(!1,B.a3,!0,r,A.q(r,A.x(A.a([p,B.U,v,u,B.aB,A.A(A.a([A.E(A.dU(B.nZ,new C.dPY(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.k2,r,new A.b9(A.m(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bJ(D.fUq,r,new C.dPZ(d),A.bp(B.cG,r,r,r,B.c,r,B.k2,r,new A.b9(A.m(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.Q,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.n),r,r,r,B.Cm,B.GP,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dPY.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPZ.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dPU.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dPV(r),p=r.a.d.a,o=p?B.ed:B.c,n=A.m(14),m=A.L((p?B.bv:B.br).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.as,s,s,s,s,s,s,s,s,14,s,s,B.I,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bq(l.c),s,s,s,s,s,s,D.fy_,s,s,s)],p),B.l,s,B.e,B.i,0,s,s)
w=A.iK((r.a.d.a?B.bv:B.br).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a2d,"View receipt",new C.dPN(r,d,l))
u=l.x!=null
t=u?B.px:B.qK
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bCC,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dPO(r,d,l)),q.$3$icon$label$onTap(B.Cz,"Edit",new C.dPP(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.n1,"View / download ID",new C.dPQ(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bOQ,"View / download selfie",new C.dPR(r,d,l)))
if(l.gaHN())p.push(q.$3$icon$label$onTap(Ac.a3q,"View / download signature",new C.dPS(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.eh,"Delete",new C.dPT(r,d,l)))
p.push(B.ax)
return A.bm(!0,new A.D(B.uu,A.q(s,A.x(p,B.l,s,B.e,B.Q,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:25}
C.dPV.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.as
else w=d
return A.aP(!1,v,!0,new A.D(B.eY,A.A(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1960}
C.dPN.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fYa(w,this.c)},
$S:0}
C.dPO.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.ST(this.c)},
$S:0}
C.dPP.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.DG(this.c)},
$S:0}
C.dPQ.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bG3(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dPR.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bG3(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dPS.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fYf(w,this.c)},
$S:0}
C.dPT.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.Q2(0,this.c)},
$S:0}
C.dQ1.prototype={
$1(d){return d.x==null},
$S:252}
C.dQ2.prototype={
$1(d){return d.x!=null},
$S:252}
C.dQ3.prototype={
$2(d,e){return d+e.c},
$S:1961}
C.dQ4.prototype={
$0(){return this.a.bDK()},
$S:0}
C.dPW.prototype={
$0(){return this.a.age(this.b)},
$S:0}
C.fGV.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fGW.prototype={
$0(){return B.d.gH(D.a4K)},
$S:z+77}
C.dfD.prototype={
$0(){var w=this.a
return w.m(new C.dfB(w,this.b))},
$S:0}
C.dfB.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dfC.prototype={
$0(){},
$S:0}
C.dfE.prototype={
$0(){var w=this.a.gc29()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fJp.prototype={
$1(d){return C.hlg(A.a3(d,x.N,x.z))},
$S:z+11}
C.fJq.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fJr.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fWM.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h4i.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fG0.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bRe.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eG(e,v)?v:null},
$S:1962}
C.fXm.prototype={
$1(d){var w=this
return new C.a_x(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dgi.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dgh(w,d))},
$S:z+80}
C.dgh.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dg6.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cJ(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dg3.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dfF.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dfG.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dg7.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dfO.prototype={
$1(d){var w=null,v=A.S(d).ax.a===B.J,u=v?B.ed:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eg(A.a([A.bN(!1,B.dn,w,w,!0,w,w,w,new C.dfM(d),w,w),A.bJ(B.xo,w,new C.dfN(d),A.bp(B.nq,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dfM.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dfN.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dfP.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dg4.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dg5.prototype={
$0(){return B.d.gH(D.zO)},
$S:z+14}
C.dfK.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz2(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.TX(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dfL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfQ.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_5(v,u,J.ad(w.d),null)},
$S:z+40}
C.dfR.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgg.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aA(s,new C.ZN(r.y,r.gz2(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dge(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bcd(v,e,w,u,t,r.gbUj(),C.hAT(r.y.Q),r.gz2(0),s)
w=t}return A.c5(q,new C.dgf(r,e),new A.D(B.a0m,w,s))},
$S:1963}
C.dgf.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvn(0)
w=t-(u==null?t:u)}else w=0
v=B.j.D(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fL(v*3.141592653589793*0.5)
return A.fz(B.a7,A.d3(e,B.j.D(1+v*0.5,0,1)),null,u,!0)},
$S:45}
C.dge.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aIZ(B.qs,B.iv)},
$S:0}
C.dg0.prototype={
$0(){var w=this.a
return w.m(new C.dg_(w))},
$S:0}
C.dg_.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dg1.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.dfH.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.kp.j(0.5),r=x.p,q=A.a([D.fLr,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cr(p.d)?"Write this book":"Write a new book"
q.push(p.ZN(d,B.ee,w,J.cr(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZN(d,K.apj,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cJ(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cx,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cx,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZN(d,W.aqm,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZN(d,B.qP,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZN(d,B.qP,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eP(u,E.BR,A.bm(!0,new A.D(Ab.yM,A.x(q,B.E,u,B.e,B.Q,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,I.a0w,B.d7,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:47}
C.dg2.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dfU.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cJ(w.d)
return new C.a_z(v,J.cJ(w.d),w.r+1,null)},
$S:z+44}
C.dfV.prototype={
$1(d){var w=null
return A.oM(!1,A.eg(w,w,w,E.BR,new A.k3(this.a,new C.dfT(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:337}
C.dfT.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aan,B.oW,A.E(A.d(e,w,w,w,w,w,w,B.jw,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:615}
C.dfW.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dfX.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:203}
C.dfY.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfZ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bz(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Sz(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dfS(s,t))
w=4
return A.b(s.lg(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfS.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dg9.prototype={
$1(d){var w=null
return A.oM(!1,A.eg(w,w,w,E.BR,new A.k3(this.a,new C.dg8(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:337}
C.dg8.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aan,B.oW,A.E(A.d(e,w,w,w,w,w,w,B.jw,w,w,w),1)],x.p),B.l,w,B.e,B.i,0,w,w)},
$S:615}
C.dga.prototype={
$0(){return this.a.a=!1},
$S:50}
C.dgb.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:203}
C.dgc.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:203}
C.dgd.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bz(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lg(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfI.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bkI(B.qs,A4.NO)},
$S:0}
C.dfJ.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aIZ(B.qs,A4.NO)},
$S:0}
C.di4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.di5.prototype={
$1(d){var w=this.a
return w.m(new C.di3(w))},
$S:9}
C.di3.prototype={
$0(){return this.a.e="page"},
$S:0}
C.di6.prototype={
$1(d){var w=this.a
return w.m(new C.di2(w))},
$S:9}
C.di2.prototype={
$0(){return this.a.e="book"},
$S:0}
C.di7.prototype={
$1(d){var w=this.a
return w.m(new C.di1(w))},
$S:9}
C.di1.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.di8.prototype={
$0(){var w=this.a
return w.m(new C.di0(w,this.b))},
$S:0}
C.di0.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.di9.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2A()
A.a6(this.b,!1).O(new A.br6(w,v))},
$S:0}
C.dgx.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dgw.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_v(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dgB.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dgA.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.baI(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hj,v,v,v)
return A.eg(A.a([A.bN(!1,B.dn,v,v,!0,v,v,v,new C.dgy(d),v,v),A.bJ(B.xo,v,new C.dgz(d),A.bp(B.nq,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.BR,w,v,v,v,v,D.fKc,v)},
$S:18}
C.dgy.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dgz.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dgC.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dgD.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cd(A.bV(B.bG,r,B.bs,t,18,14),B.t,t,B.y,t,D.bDB,t,t,B.ah)},
$S:319}
C.dgv.prototype={
$0(){return this.a.QQ(0,this.b)},
$S:0}
C.dgu.prototype={
$0(){return this.a.Qh(0,this.b)},
$S:0}
C.cOW.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cOX.prototype={
$0(){return B.d.gH(D.zO)},
$S:z+14}
C.cOY.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bR(0,new A.D(d,A.c2(w,new A.p(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bj),w),0,0,0)},
$S:1965}
C.d7u.prototype={
$1(d){return this.a.m(new C.d7t(this.b,this.c))},
$S:9}
C.d7t.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d7T.prototype={
$1(d){return this.a.m(new C.d7G())},
$S:2}
C.d7G.prototype={
$0(){},
$S:0}
C.d7U.prototype={
$1(d){return this.a.m(new C.d7F())},
$S:2}
C.d7F.prototype={
$0(){},
$S:0}
C.d7V.prototype={
$0(){var w=this.a
return w.m(new C.d7E(w,this.b))},
$S:0}
C.d7E.prototype={
$0(){var w=this.a
return w.d=w.gop().Ge(this.b.a)},
$S:0}
C.d7W.prototype={
$0(){var w=this.a
return w.m(new C.d7D(w,this.b))},
$S:0}
C.d7D.prototype={
$0(){var w=this.a
return w.d=w.gop().cNv(this.b)},
$S:0}
C.d7X.prototype={
$1(d){return this.a.m(new C.d7C())},
$S:2}
C.d7C.prototype={
$0(){},
$S:0}
C.d7Y.prototype={
$0(){var w=this.a
return w.m(new C.d7B(w,this.b))},
$S:0}
C.d7B.prototype={
$0(){var w=this.a
return w.d=w.gop().cNA(this.b.a)},
$S:0}
C.d7Z.prototype={
$1(d){var w=this.a
return w.m(new C.d7O(w,d))},
$S:6}
C.d7O.prototype={
$0(){var w=this.a
return w.d=w.gop().cOu(this.b)},
$S:0}
C.d8_.prototype={
$1(d){var w=this.a
return w.d=w.gop().aFV(d)},
$S:2}
C.d80.prototype={
$1(d){var w=this.a
return w.d=w.gop().cND(d)},
$S:2}
C.d82.prototype={
$1(d){var w=this.a
return w.d=w.gop().cOs(d)},
$S:2}
C.d83.prototype={
$1(d){var w=this.a
return w.m(new C.d7N(w,d))},
$S:9}
C.d7N.prototype={
$0(){var w=this.a
return w.d=w.gop().cOj(this.b)},
$S:0}
C.d84.prototype={
$0(){var w=this.a,v=w.gop(),u=B.a.i(w.gz2(0).a.a),t=B.a.i(w.gaD6().a.a)
u=v.bfp(B.a.i(w.gasJ().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.bRo.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bRi.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRh(w,d))},
$S:11}
C.bRh.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bRr.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bRj.prototype={
$0(){var w=this.a
w.Q=D.b0P
w.adT(1)
w.r.x=null},
$S:0}
C.bRk.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b0P)return
w=new A.e5()
w.d_(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d3q[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bRn.prototype={
$0(){var w=this.a
w.Q=D.acY
w.adT(2)
w.r.z=null},
$S:0}
C.bRm.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hBy
t.adT(3)
w=t.r
w.d=s
w.x="I say: "+t.gCv()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.d9V[v.aw(4)]:D.duZ[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bRp.prototype={
$0(){var w=this.a
w.Q=D.b0Q
w.CW=this.b
w.cy=1
w.adT(4)
w.r.f=w.f.a+5},
$S:0}
C.bRq.prototype={
$0(){},
$S:0}
C.bRl.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRf.prototype={
$0(){return this.a.L3(this.b)},
$S:0}
C.bRg.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bSV.prototype={
$0(){var w=this
return w.a.R9(w.b,0,w.c,w.d)},
$S:0}
C.bSW.prototype={
$0(){var w=this
return w.a.R9(w.b,3,w.c,w.d)},
$S:0}
C.bSX.prototype={
$0(){var w=this
return w.a.R9(w.b,1,w.c,w.d)},
$S:0}
C.bSY.prototype={
$0(){var w=this
return w.a.bTK(w.b,w.c,w.d)},
$S:0}
C.bSZ.prototype={
$0(){var w=this
return w.a.R9(w.b,4,w.c,w.d)},
$S:0}
C.bT_.prototype={
$0(){var w=this
return w.a.R9(w.b,2,w.c,w.d)},
$S:0}
C.bT0.prototype={
$0(){var w=this
return w.a.R9(w.b,5,w.c,w.d)},
$S:0}
C.bT1.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:614}
C.bSU.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a5T[d],p=q.a.a2(0,new A.o(0,-q.b*1.2*124)),o=A.fq(r,B.cs,r,3,r,A.cQ(r,r,r,r,r,r,r,r,r,D.fp0,e),B.a5,B.bX,r,B.dz,B.bY)
o.o5(130)
w=o.b.a.c
w=p.aJ(0,new A.o(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bn(A.bs(w,v.gba(v)+12,u+18),B.i2)
u=this.a
v=t.eQ(B.dG)
w=$.Q()
s=A.K()
s.r=B.ds.gp(0)
u.am(v,s)
s=A.K()
s.r=D.qj.gp(0)
u.am(t,s)
w=new A.aF(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bv())
v=A.K()
v.r=D.qj.gp(0)
u.af(w,v)
o.a5(u,new A.o(t.a+9,t.b+6))},
$S:604}
C.bRF.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bRG.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amx(d),w.amx(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.fu9.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h49.prototype={
$2(d,e){if(e!=null)J.c8(this.a.c3(0,d,new C.h4a()),e)},
$S:z+66}
C.h4a.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h4b.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4c.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h4d.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h48(this.c,d))},
$S:3}
C.h48.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h4e.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4f.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4g.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h47(this.c,d))},
$S:3}
C.h47.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fHw.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fVN.prototype={
$1(d){return d.Q},
$S:z+15}
C.fVO.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fDq.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fKk.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bMs.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h4z.prototype={
$2(d,e){return B.o.aS(C.hxd(d),C.hxd(e))},
$S:209}
C.h4A.prototype={
$1(d){return d!==this.a},
$S:3}
C.fWi.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bKC.prototype={
$0(){var w=this.a
w.ch=!0
w.b8X()},
$S:0}
C.bKx.prototype={
$0(){},
$S:0}
C.bKD.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bKv.prototype={
$0(){},
$S:0}
C.bKw.prototype={
$0(){},
$S:0}
C.bKB.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b3(u,u,u,new C.bcT(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ap(u,A.q(u,A.d(t.dy,u,u,u,u,u,u,D.fwB,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.n),u,u,u,u,B.bV,u,u,u),u,u,14,14,6,u))}return A.aA(B.c6,new A.am(B.a0,u,B.ab,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bKy(t,e),u,u,u,u,u,u,u,new C.bKz(t,e),u,u,u,u,u,u,u,u,u,new C.bKA(t,e),u,u,u,u,!1,B.a4)},
$S:37}
C.bKy.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKA.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:22}
C.bKz.prototype={
$1(d){return this.a.db=B.j.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKu.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.cpZ.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cq_.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cpY(w))},
$S:0}
C.cpY.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cq0.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cq1.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cq2.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cq3.prototype={
$0(){},
$S:0}
C.cq4.prototype={
$0(){var w=this.a
w.z=w.Xl(++w.e)
w.Q=A.c_(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cpV.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cpW.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cpX(i,f,h),a0=g.as,a1=A.a4(a0).k("b7<2>")
a0=A.C(new A.b7(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c5(new A.h6(a0),new C.cpQ(g,new A.o(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.QE(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cK(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.MS(new C.cpR(g,u),new C.cpS(g,u),new C.cpT(g,u),j,j,new A.bI("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fh:B.b4,j,j,j,j,j,j,j,j,13,j,j,B.I,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.as(C.uv(a0,g.gqm(g),B.cO,B.jH,D.fz),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xl(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xl(0)
o=s}else o=s
n=s[u]
n=A.e1(B.A,new C.QE(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xl(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r4(new A.br(0,p,t),new C.cpU(),new S.El(u,j,new C.QE(l.b,k,62,!1,j),new A.kG(0.25,new C.QE(m.b,k,62,!1,j),j),new A.ka(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.H,S.hAL(),!0,!0,j,j,j,j,j,j,!1,B.iN,j,new A.bI("chip-"+r,a0),w),B.b1,B.iL,j,new A.bI("t"+r+"-"+q,a0),v))}++u}g=A.bV(B.fR,a1,B.bs,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.am(B.a0,j,B.ab,B.t,e,j)},
$S:67}
C.cpX.prototype={
$1(d){return new A.o(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:653}
C.cpQ.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b3(p,p,p,new C.bcm(q.b,o,v,w,p),B.az)},
$S:55}
C.cpS.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cpT.prototype={
$1(d){return this.a.cRm(this.b,d.a)},
$S:z+31}
C.cpR.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.m(18),q=e.length!==0?B.cO.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cO:B.jZ,B.r,2)
u=s?A.lC(new C.cpP(),A.as(new C.QE(u.gaFn()[u.gj1()[t]].b,u.gaFn()[u.gj1()[t]].a,62,!1,v),v,v,v),B.l9,B.iL,v,v,new A.br(0.3,1,x.X),x.i):D.bbS
return A.cT(v,u,v,v,B.b1,new A.p(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1968}
C.cpP.prototype={
$3(d,e,f){return A.e1(B.A,f,e,null,null)},
$S:111}
C.cpU.prototype={
$3(d,e,f){return A.dN(f,new A.o(Math.sin(e*24)*8*(1-e),0))},
$S:111}
C.cQ_.prototype={
$1(d){return d>=1},
$S:120}
C.cEX.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cEW(w))},
$S:11}
C.cEW.prototype={
$0(){return this.a.f++},
$S:0}
C.cF4.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cF5.prototype={
$0(){var w=this.a,v=this.b
w.z.J(0,v)
w.Q=v},
$S:0}
C.cF6.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cF3(w))},
$S:0}
C.cF3.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cF7.prototype={
$0(){return this.a.f++},
$S:0}
C.cF8.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cF9.prototype={
$0(){},
$S:0}
C.cFa.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cEZ.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cF_.prototype={
$3(d,e,f){var w=null
return A.lC(new C.cEY(this.a,e),w,B.b1,B.hG,w,w,new A.br(w,this.b,x.X),x.i)},
$S:1969}
C.cEY.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cO.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.H,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.hU(new A.BH(new A.uQ(B.w.j(e),B.LN,v,B.Y6),H.bX6(A.b3(v,v,v,new C.aBx(u.gkS()[u.e].c,u.as,v),B.az),new A.Eq(w,w,B.W3)),v),B.aq),B.f,v,v,new A.p(v,v,v,v,t,v,B.a6),v,190,v,v,v,v,v,190)},
$S:1970}
C.cF0.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,14*(1-e))),e)},
$S:101}
C.cF1.prototype={
$3(d,e,f){return A.dN(f,new A.o(Math.sin(e*22)*8*(1-e),0))},
$S:111}
C.cF2.prototype={
$0(){return this.a.bq1(this.b)},
$S:0}
C.f6I.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.an3$)
v.an3$=w
v.q8$.sp(0,w)
v.aqW(u)},
$S:7}
C.fgR.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bSq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSp())},
$S:0}
C.bSp.prototype={
$0(){},
$S:0}
C.bSn.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bSl.prototype={
$0(){},
$S:0}
C.bSm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMM()
w=s+1>=r.length?3:5
break
case 3:q=C.bGj(p.gapM(0),0,r.length)
p.m(new C.bSi(p,q))
o=p
w=6
return A.b(C.BS(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BT(s.d,s.c.a,"school",p.gapM(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bSj())
w=4
break
case 5:p.m(new C.bSk(p))
p.gqu().VV(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bSi.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bSj.prototype={
$0(){},
$S:0}
C.bSk.prototype={
$0(){return this.a.x++},
$S:0}
C.bSo.prototype={
$0(){return this.a.L3(this.b)},
$S:0}
C.bSh.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.f6J.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.o(t,s),q=v.b,p=v.d,o=p?C.hAZ(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.Ea
C.Sx(q,D.enb,0,0.2,-0.6,-0.2,null,w,D.elV,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a2(0,new A.o(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.Q()
p=A.K()
p.r=D.Gb.gp(0)
p.c=3
p.d=B.bu
q.ah(new A.o(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f6K.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Sx(this.a,D.emh,0,u,0.7,-0.5,null,null,D.Jy,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f6L.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Sx(this.a,D.enX,0,0,0.8,-0.5,null,null,D.Jy,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f6M.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Sx(w.b,D.en5,0,v,-0.8,-0.5,null,null,D.Jy,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f6N.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.o(34,-122+Math.sin(w*5)*5)
else v=v?D.en9:D.Ea
C.Sx(p,D.emB,0,t,0,-0.6,null,v,D.Jy,3,0,s,1.3,u,0,w,0)
q=q.cc1(new A.o(222,455),9)
$.Q()
w=A.K()
w.r=B.cO.gp(0)
p.af(q,w)},
$S:0}
C.f6O.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:614}
C.bS3.prototype={
$2(d,e){return d+e},
$S:61}
C.bSe.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bSf.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bSg.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.q8$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bSa.prototype={
$1(d){return d},
$S:98}
C.bS9.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.q8$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bSb.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bSc.prototype={
$0(){},
$S:0}
C.bSd.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FI(++s.f)
w=A.a([],x.n)
v=0
for(;;){u=s.z
if(!(v<u.length))break
t=B.d.co(u,v)
u=s.z
w.push(450*(t+0.5)/u.length);++v}s.Q=w
s.y=-1
s.at=!1
s.as.a8(0)},
$S:0}
C.bS5.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.bS6.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aS(w[d],w[e])},
$S:61}
C.bS7.prototype={
$2(d,e){var w=null,v=C.hcr(new A.av(A.aT(1/0,e.a,e.b),A.aT(1/0,e.c,e.d))),u=this.a
return A.aA(B.c6,new A.em(A.b3(w,w,w,new C.bjx(u,u.q8$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bS4(u,v),w,w,w,w,!1,B.a4)},
$S:37}
C.bS4.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.D(B.j.bh((t.a-s.a)/r/450*v),0,v-1)
w.d1a(w.gj1()[u])}},
$S:22}
C.bS8.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:78}
C.drf.prototype={
$2(d,e){return 0},
$S:61}
C.bRQ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRP())},
$S:0}
C.bRP.prototype={
$0(){},
$S:0}
C.bRO.prototype={
$0(){},
$S:0}
C.bRI.prototype={
$0(){},
$S:0}
C.bRJ.prototype={
$0(){},
$S:0}
C.bRN.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.B7},
$S:0}
C.bRM.prototype={
$1(d){var w=null,v=this.a.gqu(),u=A.d(d,w,w,w,w,w,w,D.aVg,w,w,w),t=v.gbmt(0)
return A.aA(B.c6,A.x(A.a([u,B.bH,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aVu,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbso(v),w,w,w,w,w,w,!1,B.a4)},
$S:139}
C.bRK.prototype={
$0(){return this.a.L3(this.b)},
$S:0}
C.bRL.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRH.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.e1n.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e1o.prototype={
$1(d){return this.a},
$S:39}
C.e1p.prototype={
$0(){var w=this.a
return w.d=w.gSU().beT(this.b)},
$S:0}
C.e1l.prototype={
$1(d){return new C.TY(this.a,null)},
$S:z+32}
C.e1m.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e1k.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hj,w,w,w)
return A.eg(A.a([A.bN(!1,E.aWS,w,w,!0,w,w,w,new C.e1i(d),w,w),A.bN(!1,D.fRP,w,w,!0,w,w,w,new C.e1j(d),w,w)],x.p),w,w,D.fz,v,w,w,w,w,D.fEm,w)},
$S:18}
C.e1i.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e1j.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e1h.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.U(A.b4(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e1q.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.e1r.prototype={
$0(){var w=this.a,v=this.b,u=C.bE4(v,10,w.r,!1)
return w.uy(C.hlh(w.a.d,"kahoot",u,w.gb6u(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e1s.prototype={
$0(){var w=this.a
return w.uy(new C.alT(this.b,w.a.d,w.r,null))},
$S:0}
C.e1t.prototype={
$0(){var w=this.a
return w.uy(new C.ak5(this.b,w.a.d,w.r,null))},
$S:0}
C.e1w.prototype={
$0(){var w=this.a
return w.uy(new C.auQ(this.b,w.a.d,w.r,null))},
$S:0}
C.e1x.prototype={
$0(){var w=this.a
return w.uy(new C.ayN(this.b,w.a.d,w.r,null))},
$S:0}
C.e1y.prototype={
$0(){var w=this.a
return w.uy(new C.alW(this.b,w.a.d,w.r,null))},
$S:0}
C.e1z.prototype={
$0(){var w=this.a
return w.uy(new C.am_(this.b,w.a.d,w.r,null))},
$S:0}
C.e1A.prototype={
$0(){var w=this.a
return w.uy(new C.am1(this.b,w.a.d,w.r,null))},
$S:0}
C.e1B.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d1v()
return v.uy(C.hlh(v.a.d,"creator_"+u.a,w,v.gb6u(),"A game by the family",t,this.c.a))},
$S:0}
C.e1C.prototype={
$0(){return this.a.OP(this.b)},
$S:0}
C.e1D.prototype={
$0(){return this.a.XN(0,this.b)},
$S:0}
C.e1u.prototype={
$0(){return this.a.OP(null)},
$S:0}
C.e1v.prototype={
$0(){return this.a.L(x.q).f.U(D.fhV)},
$S:0}
C.bS1.prototype={
$0(){var w=this.a
w.d=D.b0d
w.z=3},
$S:0}
C.bS2.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPQ()}else w.m(new C.bS0(w))},
$S:11}
C.bS0.prototype={
$0(){return this.a.z--},
$S:0}
C.bRS.prototype={
$0(){var w=this.a
w.d=D.acE
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bRT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRR(w))
if(w.as<=0){d.a1(0)
w.b6q(-1)}},
$S:11}
C.bRR.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bRY.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.WI},
$S:0}
C.bRZ.prototype={
$0(){return this.a.e++},
$S:0}
C.bRV.prototype={
$0(){var w=this.a
w.d=D.b0e
w.ay=this.b},
$S:0}
C.bRW.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bS_.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1971}
C.bRX.prototype={
$0(){return this.a.L3(this.b)},
$S:0}
C.bRU.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRs.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.au(new A.ba(s,B.b6,B.aR),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.J)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b6,B.aR),r))}return s},
$S:1972}
C.bRt.prototype={
$0(){return this.a.gD5().c.push(C.h6d(null,0,20,""))},
$S:0}
C.bRD.prototype={
$1(d){var w=null
return A.bt(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dl,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.VC,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:268}
C.bRC.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD5().c,m=this.b,l=n[m],k=o.cf3(l),j=B.c.j(0.06),i=A.m(18),h=A.L(B.aU,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KO,p,p,p),B.b5],g)
if(n.length>1)f.push(A.aG(p,p,p,p,B.ar9,p,p,p,new C.bRx(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.i,0,p,p),A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRy(l),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),B.U],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aD5[v]
t=D.aCL[v]
s=v+1
f.push(new A.D(B.eM,new A.c7(B.aL,B.e,B.i,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.F(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bc,A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRz(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ad,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),p),new Au.Pi(v,l.c,new C.bRA(o,l),p,!1,D.lC,p,p,p,p,p,!1,!1,p,I.b0D,p,p,p,p,p,w)],g),p),p))}f.push(D.fJS)
f.push(B.am)
n=A.a([D.fDs,B.ae],g)
for(r=0;r<3;++r){q=D.cdC[r]
n.push(new A.D(B.fB,A.jv(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bRB(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.i,0,p,p))
return A.q(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.n),p,p,p,B.kS,B.bh,p,p,p)},
$S:156}
C.bRx.prototype={
$0(){var w=this.a
return w.m(new C.bRw(w,this.b))},
$S:0}
C.bRw.prototype={
$0(){return B.d.cD(this.a.gD5().c,this.b)},
$S:0}
C.bRy.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bRz.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bRA.prototype={
$1(d){return this.a.m(new C.bRv(this.b,d))},
$S:148}
C.bRv.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bRB.prototype={
$1(d){return this.a.m(new C.bRu(this.b,this.c))},
$S:9}
C.bRu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e32.prototype={
$0(){var w=this.a
w.wu()
w.a.bv()
w.a.qn()},
$S:0}
C.e31.prototype={
$0(){var w=this.a
w.wu()
w.a.bv()
w.a.qn()},
$S:0}
C.e34.prototype={
$0(){var w=this,v=w.b
if(J.cJ(v)||J.cr(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e35.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e36.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e30.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e33.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e38.prototype={
$0(){this.a.Pa()
return null},
$S:0}
C.e37.prototype={
$0(){return this.a.F2(this.b)},
$S:0}
C.e2t.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.dn,w,w,!0,w,w,w,new C.e2r(d),w,w),r=A.bp(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eg(A.a([s,A.bJ(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e2s(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e2r.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e2s.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e2u.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cNZ(this.b)},
$S:0}
C.e2o.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVp(w.b,w.c,w.d)},
$S:7}
C.e1Q.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e1R.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e27.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hj(t.a.c),$async$$0)
case 2:s=r.nA(q.dI(e,new C.e25(t)))
if(s!=null&&t.c!=null)t.m(new C.e26(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e25.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e26.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e28.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e29.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2n.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cOL(C.hB8(w),w)},
$S:0}
C.e24.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wh(u,w,C.aQS(u,w),new C.e23(v),null)},
$S:z+37}
C.e23.prototype={
$1(d){return this.bnS(d)},
bnS(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e22(s,d))
w=3
return A.b(s.uu(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:768}
C.e22.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.beT(this.b)},
$S:0}
C.e2k.prototype={
$1(d){return d.as},
$S:z+1}
C.e2l.prototype={
$1(d){var w=this
return new A.dY(new C.e2j(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e2j.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ed:B.c,h=A.m(26),g=A.L(B.bR.j(0.5),B.r,1.5),f=A.q(k,D.bTH,B.f,k,k,new A.p(B.bR.j(0.18),k,k,k,k,k,B.a6),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bv:B.br,k,k,k,k,k,k,k,k,12.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bd,a0,A.aG(k,k,k,k,A.X(B.cy,j?B.bv:B.br,k,k,k,k),k,k,k,new C.e2d(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bv:B.br,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.J)(v),++s){r=v[s]
q=t.a===r?B.bR:B.bR.j(0.1)
p=new A.aN(20,20)
o=t.a===r
n=new A.ay(B.bR,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bR
a0.push(A.aA(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.F(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b1,new A.p(q,k,new A.bG(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.h2,k,k,k,k,B.Cf,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e2e(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bV(B.bG,a0,B.bs,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c4H,new A.D(D.bE0,f,k),new A.D(D.bDS,e,k),new A.D(B.rV,a0,k),new A.D(W.ams,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bv:B.br,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Aj.ap3,j?B.bv:B.br,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bDU,A.A(A.a([a0,B.au,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,k,k,k,B.I,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b90(k,B.bR,k,k,!1,B.y,k,k,k,k,k,k,new C.e2f(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aF.j(0.35),B.j7,12)],x.V)
f.push(A.aA(k,A.q(k,A.A(A.a([D.fDO,B.bd,D.bIi,D.bUm],w),B.l,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.c8l,B.n),k,k,k,B.hX,B.bF,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e2g(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.yO,A.A(A.a([A.E(A.dU(B.dn,new C.e2h(a1),k),1),B.au,A.E(A.bJ(M.aXj,k,new C.e2i(t,a1),A.bp(B.bR,k,k,k,k,k,B.cp,k,k,k,k,k)),1)],w),B.l,k,B.e,B.i,0,k,k),k))
return A.bm(!0,A.q(k,A.cd(A.x(f,B.E,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.p(i,k,g,h,k,k,B.n),k,k,k,B.yD,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:88}
C.e2d.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2e.prototype={
$0(){return this.b.$1(new C.e2c(this.a,this.c))},
$S:0}
C.e2c.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e2f.prototype={
$1(d){var w=this.a
w.m(new C.e2a(w,d))
this.b.$1(new C.e2b())},
$S:9}
C.e2a.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e2b.prototype={
$0(){},
$S:0}
C.e2g.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHz(!0,w))
return null},
$S:0}
C.e2h.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2i.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHz(!1,w))
return null},
$S:0}
C.e2m.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOz(this.b.b)
w.r.a8(0)},
$S:0}
C.e1E.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aiU(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.hus(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e1F.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFS(w)},
$S:0}
C.e2w.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aee(this.b,w,this.c,null)},
$S:z+39}
C.e2q.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ed:B.c,t=A.m(20),s=A.X(B.lO,B.aY,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.Q,0,B.p)
return A.eg(A.a([A.bJ(D.fVD,w,new C.e2p(d),A.bp(B.aY,w,w,w,w,w,w,w,w,w,w,w))],o),B.bb,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e2p.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e1G.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e1H.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e1I.prototype={
$1(d){return d.a},
$S:z+8}
C.e1J.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFS(w)},
$S:0}
C.e1N.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aiU(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e1L(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.hus(v.e,null,r,v.f,v.r,new C.e1M(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e1M.prototype={
$0(){return this.a.ab2(this.b)},
$S:0}
C.e1L.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e1O.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hV>")
w=A.C(new A.N(w,new C.e1K(this.b),v),v.k("ak.E"))
u.d=t.aFS(w)},
$S:0}
C.e1K.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e2v.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e2_.prototype={
$1(d){return d.length!==0},
$S:3}
C.e20.prototype={
$1(d){var w=this
return new A.dY(new C.e1Z(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e1Z.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ed:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.as,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.br,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bv:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.e1V(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.U)
u=w.d
p.push(A.aM(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(12),B.dq),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mA,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.Q,0,B.p)
t=w.a
return A.eg(A.a([A.bN(!1,B.dn,v,v,!0,v,v,v,new C.e1W(d),v,v),A.bJ(B.KZ,v,new C.e1X(t,u,o,e),A.bp(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bJ(D.fIe,v,new C.e1Y(t,u,o,d),A.bp(B.aY,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:190}
C.e1V.prototype={
$1(d){var w=null
return A.dG(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aG(w,w,w,w,D.c1x,w,w,w,new C.e1U(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1973}
C.e1U.prototype={
$0(){return this.a.$1(new C.e1S(this.b,this.c))},
$S:0}
C.e1S.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e1W.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e1X.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e1T(w.c,u))
v.bP(0,B.ce)}},
$S:0}
C.e1T.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e1Y.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.e21.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPd(this.b,D.uA,C.Hh(v,w.a.c))},
$S:0}
C.e2D.prototype={
$1(d){return d.as},
$S:z+1}
C.e2E.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j1(this.b,w)},
$S:0}
C.e2F.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.irP(v)
return w.WB(v==null?null:v.a)},
$S:0}
C.e2G.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i2u(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aT(1/0,e.a,e.b)
s=A.aT(1/0,e.c,e.d)
l.cwr(new A.av(u,t),v.gblz(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d1g:D.d_u
q=A.L(s?B.dl:D.bjB,B.r,1)
p=A.m(22)
o=A.bR(0,A.b3(m,m,m,new C.bfE(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.by(p,new A.am(B.a0,m,B.ab,B.t,A.a([o,A.bR(0,A.v0(new A.R(n,n,n,n),new A.a5(u,t,new C.bgz(l.d,v,l.f,w,new C.e2z(l),l.gcgf(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.byo(s,new C.e2A(l,e),new C.e2B(l,e),new C.e2C(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.p(m,m,q,k,m,new A.a9(B.b7,B.b8,B.x,r,m,m),B.n),m,m,m,Z.alz,m,m,m,m)},
$S:235}
C.e2z.prototype={
$1(d){var w=this.a
w.m(new C.e2x(w,d))},
$S:2}
C.e2x.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.e2A.prototype={
$0(){var w=this.b
return this.a.bd2(1.25,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e2B.prototype={
$0(){var w=this.b
return this.a.bd2(0.8,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e2C.prototype={
$0(){var w=this,v=w.b
return w.a.aVp(new A.av(A.aT(1/0,v.a,v.b),A.aT(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gblz())},
$S:0}
C.e2H.prototype={
$0(){var w=this.a
return w.m(new C.e2y(w))},
$S:0}
C.e2y.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e1P.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fF(new A.fw(s.c)),$async$$0)
case 2:t.yv("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgH.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bko(u,C.hFt(v.c,u),new C.dgG(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dgG.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dgI.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bnJ(d.d,d.c,u.f.q(0,d.a),new C.dgF(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dgF.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fGZ.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fH_(d),w.k("Y<1>")),new C.fH0(),w.k("cM<1,n>")))},
$S:z+19}
C.fH_.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fH0.prototype={
$1(d){return d.a},
$S:z+8}
C.fGX.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fGY.prototype={
$1(d){return d.b},
$S:z+8}
C.fH3.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fH4(d),w.k("Y<1>")),new C.fH5(),w.k("cM<1,n>")))},
$S:z+19}
C.fH4.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fH5.prototype={
$1(d){return d.a},
$S:z+8}
C.fH1.prototype={
$1(d){var w,v=A.ez([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.al(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fH2.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dgK.prototype={
$0(){return this.a},
$S:z+46}
C.dh0.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.al(0,d)},
$S:262}
C.dgT.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dgU()),v=J.a7(w)
if(!v.q(w,e))v.J(w,e)},
$S:117}
C.dgU.prototype={
$0(){return A.a([],x.s)},
$S:603}
C.dgS.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eG(w,e)
return w===!0},
$S:299}
C.dgL.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dgR.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dgQ.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aU(v==null?D.Dx:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aU(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aU(t==null?D.Dx:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1975}
C.dgM.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dgV.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=a7.a
a8.J(0,a9)
w=a7.b
w.n(0,a9,b0)
v=a7.c.h(0,a9)
v.toString
u=a7.d.h(0,a9)
u=J.aU(u==null?B.Z:u)
t=v.d
for(;;){if(!u.C()){s=null
break}A:{s=u.gR(u)
if(a8.q(0,s)||t===s)break A
break}}u=s!=null
if(u){a8.J(0,s)
w.n(0,s,b0)
a7.e.n(0,a9,s)}w=A.a([],x.u)
t=a7.f
r=t.h(0,a9)
if(r!=null)B.d.v(w,r)
if(u){t=t.h(0,s)
t=J.aU(t==null?D.Dx:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aV(w,new C.dgW(r)))w.push(r)}}B.d.bt(w,new C.dgX(a8))
B.d.aZ(w,new C.dgY())
q=C.i2t(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eU4],x.G))}a8=A.a([],x.s)
for(w=o.length,m=0;m<o.length;o.length===w||(0,A.J)(o),++m){l=o[m]
if(l!=null)a8.push(l)}a7.x.n(0,a9,a8)
if(o.length===0)return A.a([new A.y(-p,p)],x.G)
a8=x.n
k=A.a([],a8)
j=A.a([],a8)
for(a8=n.length,m=0;m<n.length;n.length===a8||(0,A.J)(n),++m){i=n[m]
if(k.length!==0){h=Math.min(j.length,i.length)
for(g=-1/0,f=0;f<h;++f){e=f===0?22:44
g=Math.max(g,j[f]+e-i[f].a)}}else g=0
k.push(g)
for(f=0;f<i.length;++f){d=g+i[f].b
if(f<j.length)j[f]=Math.max(j[f],d)
else j.push(d)}}a0=(B.d.gH(k)+B.d.gan(k))/2
a1=A.a([new A.y(-p,p)],x.G)
for(a8=a7.z,w=q.b,v=a7.y,a2=0;a2<n.length;++a2){a3=k[a2]-a0
a4=o[a2]
if(a4!=null)v.n(0,a4,a3)
else a8.n(0,a9,new A.bqR(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1976}
C.dgW.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dgX.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dgY.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dgZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b7(v,A.a4(v).k("b7<2>")).cG(0,0,B.q3)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:579}
C.dh_.prototype={
$1(d){return 16+d*156},
$S:174}
C.dgJ.prototype={
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
t.n(0,d,new C.GA(r,new A.o(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GA(s,new A.o(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GA(s,new A.o(e,v)))}t=o.r.h(0,d)
t=J.aU(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.KT(d,new A.o(e+t,w),s,s.length))}},
$S:203}
C.dgN.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKH(new A.o(v.a,v.b+28),new A.o(w.a,w.b+28),!0,null))},
$S:117}
C.dgO.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dgP.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:602}
C.dh1.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:602}
C.dh2.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:474}
C.dh3.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:185}
C.dh4.prototype={
$1(d){return d>=0.5},
$S:120}
C.fmr.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hb(A.aP(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cr,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1978}
C.eXu.prototype={
$1(d){var w=null,v=A.m(8),u=B.bR.j(0.12),t=A.m(8)
return new A.D(B.mZ,A.aP(!1,v,!0,A.q(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.ftu,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.n),w,w,w,w,B.Ok,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXt(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eXt.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dwY.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dwX.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nX,B.K,w,w)
return A.eg(A.a([A.bN(!1,B.dn,w,w,!0,w,w,w,new C.dwV(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mO,w,w,w,w,w,w,w,w,w,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dwW(d),w,w)],x.p),B.bb,B.Cc,w,u,D.bEU,w,D.bGR,new A.b9(v,B.a1),w,w)},
$S:18}
C.dwV.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dwW.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dx6.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dx7.prototype={
$1(d){var w=this.a
return w.m(new C.dx5(w,d))},
$S:z+49}
C.dx5.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dx8.prototype={
$1(d){var w=null
return A.qI(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dxb.prototype={
$1(d){var w=this.a
return w.m(new C.dx4(w,d))},
$S:35}
C.dx4.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dxa.prototype={
$1(d){var w=null
return A.qI(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dxc.prototype={
$1(d){var w=this.a
return w.m(new C.dx3(w,d))},
$S:35}
C.dx3.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dxd.prototype={
$0(){var w=this.a
return w.m(new C.dx2(w))},
$S:0}
C.dx2.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dxe.prototype={
$0(){var w=this.a
return w.m(new C.dx1(w))},
$S:0}
C.dx1.prototype={
$0(){return++this.a.at},
$S:0}
C.dxf.prototype={
$0(){var w=this.a
return w.m(new C.dx0(w))},
$S:0}
C.dx0.prototype={
$0(){return--this.a.ax},
$S:0}
C.dxg.prototype={
$0(){var w=this.a
return w.m(new C.dx_(w))},
$S:0}
C.dx_.prototype={
$0(){return++this.a.ax},
$S:0}
C.dxh.prototype={
$1(d){var w=this.a
return w.m(new C.dwZ(w,d))},
$S:9}
C.dwZ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dx9.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dxi.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.ed:B.c
v=A.m(12)
if(p)u=B.bR
else u=(q.c.a?B.eg:B.bP).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bv:B.br
t=A.X(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bv:B.br
return A.E(A.aI(!1,B.a3,!0,r,A.aP(!1,o,!0,A.cT(r,A.x(A.a([t,B.ax,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.i,0,B.p),r,r,B.b1,new A.p(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k2,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dxj(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dxj.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dxs.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.ceM.prototype={
$2(d,e){return new A.bB(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:96}
C.ceT.prototype={
$1(d){return d.aj()},
$S:z+5}
C.ceU.prototype={
$2(d,e){var w=J.b8(e,new C.ceS(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bB(d,w,x.d2)},
$S:z+53}
C.ceS.prototype={
$1(d){return d.aj()},
$S:z+12}
C.ceO.prototype={
$1(d){return C.am4(A.a3(d,x.N,x.z))},
$S:z+9}
C.ceP.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.ceQ.prototype={
$1(d){return C.hlg(A.a3(d,x.N,x.z))},
$S:z+11}
C.ceR.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ceY.prototype={
$1(d){return new A.aHL(d.f.length,d.a,d.b)},
$S:z+55}
C.ceZ.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:650}
C.ceV.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.ceW.prototype={
$1(d){return d.cOb(C.Hh(d,this.a))},
$S:z+85}
C.e2Q.prototype={
$1(d){return C.uw(d,this.a.a.c)},
$S:z+3}
C.e2R.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e2V.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e2W.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e2N.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1a(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z3("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pv(r.c,r.e),$async$$0)
case 4:s.z3(p)
w=5
return A.b(s.K8(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2O.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1a(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z3("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pv(r.c,r.e),$async$$0)
case 4:s.z3(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2P.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Wk(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z3("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z3("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z3("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.K8(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.z3(B.a.en(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e2U.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b19(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z3("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cd(A.ec(new C.e2T(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pv(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2T.prototype={
$1(d){var w=this.b
return new C.a0t(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e2S.prototype={
$1(d){return D.hxx},
$S:z+58}
C.e2Y.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2Z.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e2X(w,d)
return new A.D(B.d3,new C.bgD(this.b,d.c,d.a,w,null),null)},
$S:1979}
C.e2X.prototype={
$0(){return this.a.Yq(this.b.b)},
$S:0}
C.e2I.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e2J.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e2K.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e2L.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e2M.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e3_.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cS(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a6(this.b,!1).O(s)
return}},
$S:189}
C.dP4.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dP5.prototype={
$0(){return B.d.gH(D.a6f)},
$S:z+60}
C.dP6.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b3(A.as(A.X(this.b.d,B.c.j(0.95),w,w,D.d85,44),w,w,w),w,w,new C.blv(u,t,v,w),B.az)},
$S:55}
C.fXP.prototype={
$1(d){return A.pf(new C.fXO(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:137}
C.fXO.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ed:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.tp,24)],x.V),o=r?B.eg:B.bP
o=A.q(t,t,B.f,t,t,new A.p(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aY.j(0.25),B.bR.j(0.18)],x.O)
w=A.q(t,D.bWL,B.f,t,t,new A.p(t,t,t,A.m(12),t,new A.a9(B.a7,B.aa,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.as,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.x(A.a([B.X,o,new A.D(E.amx,A.A(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bv:B.br,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.l,t,B.e,B.i,0,t,t),t),A.E(A.ip(!0,t,e,B.y,D.fg_,new C.fXN(this.b,s),20,B.am5,t,B.ah,!1),1)],u),B.l,t,B.e,B.i,0,B.p),B.f,t,t,new A.p(q,t,t,B.l7,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:119}
C.fXN.prototype={
$2(d,e){var w=null,v=D.a6f[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.L(s?B.eg:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.eu,8)],x.V),p=A.m(15),o=A.E(new C.a7h(v.a,!0,w),1),n=s?B.jW:B.jj,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.as,w,w,w,w,w,w,w,w,13,w,w,B.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aI(!1,B.a3,!0,w,A.aP(!1,u,!0,A.eJ(A.by(p,A.x(A.a([o,A.q(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bv:B.br,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k3,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.p(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fXM(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:81}
C.fXM.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.cog.prototype={
$0(){return this.a.ahh(this.b)},
$S:0}
C.fXc.prototype={
$1(d){return D.hsm},
$S:z+61}
C.h3R.prototype={
$1(d){var w=this
return new C.a2g(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fXg.prototype={
$1(d){return new C.a_7(this.a,null)},
$S:z+63}
C.fXf.prototype={
$1(d){return D.htn},
$S:z+64}
C.d8g.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8h.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d8f(w,d))},
$S:35}
C.d8f.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8i.prototype={
$1(d){return this.a.KM()},
$S:2}
C.d8j.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8c.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8d.prototype={
$1(d){return this.a.KM()},
$S:2}
C.d8e.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGD.prototype={
$0(){},
$S:0}
C.cGJ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGK.prototype={
$0(){return this.a.aQI(-1)},
$S:0}
C.cGL.prototype={
$1(d){return this.a.m(new C.cGI())},
$S:2}
C.cGI.prototype={
$0(){},
$S:0}
C.cGM.prototype={
$0(){return this.a.aQI(1)},
$S:0}
C.cGN.prototype={
$1(d){return this.a.m(new C.cGH())},
$S:2}
C.cGH.prototype={
$0(){},
$S:0}
C.cGO.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aY.j(0.2)
if(s)v=B.aY
else v=this.b.a?B.eg:B.bP
return A.uU(u,u,B.b2,r,u,new C.cGG(t,d),B.wo,s,w,u,new A.ay(v,1,B.r,-1),B.cf)},
$S:1980}
C.cGG.prototype={
$1(d){var w=this.a
return w.m(new C.cGE(w,this.b))},
$S:9}
C.cGE.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cGP.prototype={
$1(d){return this.a.m(new C.cGF())},
$S:2}
C.cGF.prototype={
$0(){},
$S:0}
C.cGQ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.flX.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.flY.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.flZ.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.flV.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbCS()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b3(new A.D(D.bGQ,new A.em(A.q(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.byd(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:55}
C.flW.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=B.dC.aA(0,p)
p=A.m(12)
q=q.a.c
v=A.m(12)
u=A.m(12)
t=w*2.4
s=A.ar(B.aY,B.bR,w)
s.toString
s=A.a([B.b2,s,B.aY],x.O)
return A.aI(!1,B.a3,!0,p,A.aP(!1,v,!0,A.eJ(D.erO,r,new A.p(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.da(-1.2+t,-0.5),new A.da(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:142}
C.fVA.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:59}
C.eUE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUv.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eUw.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eUC.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eUB(w,this.b),null)},
$S:20}
C.eUB.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ed:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eP(w,u,new A.D(B.amq,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bv:B.br,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hrh(new C.eUy(r,e),r.a),B.aB,A.A(A.a([A.E(A.dU(B.dn,new C.eUz(d),w),1),B.au,A.E(A.bJ(B.VX,w,new C.eUA(r,d),A.bp(B.aY,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(t,B.a1),w)},
$S:102}
C.eUy.prototype={
$1(d){return this.b.$1(new C.eUx(this.a,d))},
$S:35}
C.eUx.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eUz.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eUA.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eUD.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Tz(this.b)},
$S:0}
C.eUq.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.beZ(w)},
$S:0}
C.eUu.prototype={
$1(d){return this.boe(d)},
boe(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.M4(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j1(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eUt.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eUs(this.b),v),v.k("M.E"))
u.d=t.beZ(w)},
$S:0}
C.eUs.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eUF.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j1(this.b,w)},
$S:0}
C.eUG.prototype={
$1(d){return this.a.bH1(d,this.b)},
$S:z+67}
C.eUr.prototype={
$0(){return this.a.ab1(this.b)},
$S:0}
C.h3E.prototype={
$1(d){return new C.aez(this.a,this.b,this.c,null)},
$S:z+68}
C.eUI.prototype={
$0(){return this.a.a0f(this.b)},
$S:0}
C.eUJ.prototype={
$0(){return this.a.QM(this.b)},
$S:0}
C.eUK.prototype={
$0(){return this.a.EY(this.b)},
$S:0}
C.eUL.prototype={
$0(){return this.a.a0g(this.b)},
$S:0}
C.eUH.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eUl.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUm.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eUn.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eUp.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qt(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eUo(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUo.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eV7.prototype={
$2(d,e){return d+e.gxG()},
$S:z+71}
C.eV3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eV4.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eUP.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ed:B.c,s=A.m(24),r=A.q(v,D.bXd,B.f,v,v,new A.p(B.ay.j(u?0.18:0.08),v,A.L(B.ay.j(0.28),B.r,1),v,v,v,B.a6),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.as,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bv:B.br,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.as
u=u?B.eg:B.bP
w=x.p
return A.eP(v,t,new A.D(B.yQ,A.x(A.a([r,B.aQ,q,B.U,p,B.d8,A.A(A.a([A.E(A.dU(B.nZ,new C.eUN(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fg,v,new A.b9(A.m(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.au,A.E(A.bJ(D.fZv,v,new C.eUO(d),A.bp(B.ay,v,v,v,v,v,B.fg,v,new A.b9(A.m(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.i,0,v,v)],w),B.l,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d7,v,new A.b9(s,B.a1),v)},
$S:47}
C.eUN.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eUO.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eUY.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ed:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h5,28)],x.V),g=k?D.dfh:B.a5A,f=x.p
g=A.q(m,A.x(A.a([A.q(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.f97,B.ax,new A.bM(B.a7,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cD,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.i,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a9(B.aA,B.aE,B.x,g,m,m),B.n),m,m,m,m,E.amu,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.br,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b7T(B.b9,B.jp,new C.eUV(v,d),l,"Camera import","Scan QR"),1),B.au,A.E(v.b7T(B.cz,R.zr,new C.eUW(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.br,m,m,m,m,m,m,m,m,11,m,m,B.I,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.L(B.ay.j(0.28),B.r,1)
o=A.q(m,D.bWz,B.f,m,m,new A.p(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bV,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.as,m,m,m,m,m,m,m,m,m,m,m,B.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bv:B.br,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bm(!0,new A.D(B.wj,A.q(m,A.x(A.a([g,new A.D(B.amr,A.x(A.a([w,B.X,u,B.bz,t,B.X,A.aI(!1,B.a3,!0,m,A.aP(!1,s,!0,A.q(m,A.A(A.a([o,B.bd,n,A.X(B.eJ,k?B.bv:B.br,m,m,m,m)],f),B.l,m,B.e,B.i,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.n),m,m,m,m,B.bF,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eUX(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.l,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.p(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:25}
C.eUV.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w4("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUW.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w4("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUX.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.Or(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUT.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ed:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.f_,24)],x.V),k=o?B.eg:B.bP
k=A.q(q,q,B.f,q,q,new A.p(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bv:B.br
u=A.by(w,new A.a5(48,48,C.aS8(!0,A.m(12),48,P.P_,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.as,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bq(v.gxG())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wj,A.q(q,A.x(A.a([B.X,k,new A.D(D.amo,A.A(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bv:B.br,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.l,q,B.e,B.i,0,q,q),q),B.C3,r.cqw(B.uV,B.aY,new C.eUR(d),p,"QR code or backup file","Transfer project"),r.b4U(!0,B.eh,B.ay,new C.eUS(d),p,"Remove from this device","Delete project"),B.X],s),B.l,q,B.e,B.Q,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:25}
C.eUR.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eUS.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eUU.prototype={
$1(d){return this.bof(d)},
bof(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.M4(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wj(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eVa.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eV9(w))},
$S:0}
C.eV9.prototype={
$0(){return this.a.r++},
$S:0}
C.eVb.prototype={
$0(){var w=this.a
return w.m(new C.eV8(w))},
$S:0}
C.eV8.prototype={
$0(){return this.a.r++},
$S:0}
C.eUM.prototype={
$0(){var w=this.a.c
w.toString
return A.j1(w,null)},
$S:0}
C.eUQ.prototype={
$0(){return this.a.cjN(this.b)},
$S:0}
C.eV6.prototype={
$0(){var w=this.a
return w.m(new C.eV5(w,this.b))},
$S:0}
C.eV5.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eV0.prototype={
$0(){return this.a.w4("scan")},
$S:0}
C.eV1.prototype={
$0(){return this.a.w4("file")},
$S:0}
C.eV2.prototype={
$1(d){return this.a.cqx(d,this.b)},
$S:z+72}
C.eV_.prototype={
$0(){return this.a.F1(this.b)},
$S:0}
C.eUZ.prototype={
$0(){return this.a.a0L(this.b,this.c)},
$S:0}
C.cFY.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cFX.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cFV.prototype={
$1(d){return C.hLz(A.a3(d,x.N,x.z))},
$S:z+75}
C.cFW.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fFR.prototype={
$1(d){return d.y===D.kV},
$S:z+3}
C.h4q.prototype={
$1(d){return C.aQS(d,this.a)},
$S:z+3}
C.fDp.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bSx.prototype={
$1(d){return!d.as},
$S:z+1}
C.bSw.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bSt.prototype={
$1(d){return C.hli(A.a3(d,x.N,x.z))},
$S:z+24}
C.bSu.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bSv.prototype={
$1(d){return J.k(d)},
$S:17}
C.ftL.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fpv.prototype={
$1(d){return C.hb1(A.a3(d,x.N,x.z))},
$S:z+79}
C.fpw.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fpx.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fX0.prototype={
$1(d){return J.k(d)},
$S:17}
C.fX1.prototype={
$1(d){return d.a},
$S:z+81}
C.fX2.prototype={
$1(d){return d.length!==0},
$S:3}
C.fX3.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fX4.prototype={
$1(d){return d.Tz(null).aj()},
$S:z+82}
C.h4o.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fGk.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fJv.prototype={
$1(d){return C.am4(A.a3(d,x.N,x.z))},
$S:z+9}
C.fJw.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fJx.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fJy.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fJz.prototype={
$1(d){return C.uw(d,this.a)},
$S:z+3}
C.fWO.prototype={
$1(d){return C.uw(d,this.a)},
$S:z+3}
C.h4j.prototype={
$1(d){return C.am4(A.a3(d,x.N,x.z))},
$S:z+9}
C.h4k.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h4l.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fG1.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fG2.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h4u.prototype={
$1(d){return!d.as},
$S:z+1}
C.fFw.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fFx.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fFy.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h3S.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fKl.prototype={
$1(d){return d.Q},
$S:z+15}
C.fWH.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fJs.prototype={
$1(d){return C.am4(A.a3(d,x.N,x.z))},
$S:z+9}
C.fJt.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fJu.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fWC.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fq5.prototype={
$1(d){return d.length!==0},
$S:3}
C.fq6.prototype={
$1(d){return C.hli(A.a3(d,x.N,x.z))},
$S:z+24}
C.fq7.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fq8.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fq9.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqm.prototype={
$2(d,e){return d.eN(new C.fqn(e))},
$S:1981}
C.fqn.prototype={
$1(d){$.an.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cd},
$S:1982}
C.fqj.prototype={
$1(d){return C.i7y(d,this.a)},
$S:z+84}
C.fqk.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fql.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fus.prototype={
$1(d){return d.a},
$S:z+56}
C.fut.prototype={
$1(d){return d.length!==0},
$S:3}
C.fuu.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fxp.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fCF.prototype={
$1(d){return C.hwQ(d,C.Hh(d,this.a))},
$S:z+5}
C.fCG.prototype={
$1(d){return C.hwR(d,C.Hh(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBz.prototype
w.bw4=w.t
w=C.azN.prototype
w.bw_=w.t
w=C.aGZ.prototype
w.bws=w.t
w=C.aBA.prototype
w.bw5=w.t
w=C.aBC.prototype
w.bw6=w.t
w=C.aBD.prototype
w.bw7=w.t
w=C.aN8.prototype
w.byW=w.t
w=C.aPg.prototype
w.bBg=w.t
w=C.aPh.prototype
w.bBh=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEz.prototype,"gcnr","cns",28)
var r
w(r=C.aBy.prototype,"gcgl","cgm",65)
v(r,"gaOU","NZ",0)
v(r,"gcvN","Bo",0)
v(r,"gbOO","OF",0)
v(r,"gcKa","z4",0)
v(r,"gcpu","a1s",0)
v(r,"gbKc","On",0)
v(r,"gbPd","XS",0)
w(r,"gbUj","bUk",78)
v(r,"gbEx","An",0)
v(C.aBB.prototype,"gcK6","FU",0)
v(r=C.alU.prototype,"gbsq","bsr",2)
v(r,"gbsi","bsj",2)
v(r,"gcLf","cLg",2)
u(r,"gqm","kN",0)
u(r=C.ak6.prototype,"geY","fX",2)
w(r,"gcbZ","cc_",27)
u(C.auR.prototype,"gqm","kN",0)
v(r=C.ayO.prototype,"gcWO","cWP",2)
u(r,"gqm","kN",0)
u(C.aKM.prototype,"gbso","bsp",2)
v(C.am2.prototype,"gBS","cLs",2)
u(r=C.am0.prototype,"gcM8","cM9",2)
u(r,"gqm","kN",0)
v(r=C.alX.prototype,"gbrg","brh",2)
v(r,"gcRk","cRl",2)
u(r=C.alZ.prototype,"geY","fX",2)
u(r,"gix","cKM",2)
v(r=C.alV.prototype,"gcKB","cKC",2)
u(r,"gbq8","jH",2)
v(r=C.aF7.prototype,"gagU","wk",0)
v(r,"gcj2","a0C",0)
v(r,"gaT6","It",0)
v(r=C.aF4.prototype,"gcG4","a3A",0)
v(r,"gagU","wk",0)
v(r,"gctO","a26",0)
v(r,"gciY","b37",2)
v(r,"gck_","a0Q",0)
w(r,"gcgf","cgg",35)
v(r,"gbP5","Iy",0)
v(r,"gcH9","cHa",2)
v(r,"gc68","Zz",0)
w(r,"gceK","ceL",36)
v(r,"gciM","ciN",2)
v(r=C.aDy.prototype,"gcc4","Qj",0)
v(r,"gcc6","cc7",2)
v(r,"gbLH","aaE",0)
v(r=C.aF6.prototype,"gbSI","Ym",0)
v(r,"gc2g","Z1",0)
v(r,"gcAc","a2Y",0)
v(r,"gcwm","a2z",0)
v(C.aF5.prototype,"gcw5","aiI",0)
v(C.au2.prototype,"gceI","a0d",0)
v(C.aAi.prototype,"ga3j","KM",2)
v(C.aAh.prototype,"ga3j","KM",2)
v(C.az0.prototype,"ga3j","KM",2)
v(r=C.aGA.prototype,"gb4h","Ri",0)
v(r,"gbDl","Wv",0)
v(r,"gcjO","cjP",2)
w(C.aGz.prototype,"gcfA","cfB",69)
t(C.aGB.prototype,"gaT1",0,0,null,["$1","$0"],["Is","bN_"],70,0,0)
s(C,"hEx","ihI",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.apC,C.uR,C.nw,C.Ip,C.afK,C.KM,C.uS,C.bT2,C.te,C.bp0,C.amb,C.adS,C.ls,C.bRE,C.aue,C.zE,C.akN,C.MK,C.bas,C.a9X,C.bhI,C.afR,C.aA1,C.afF,C.aKM,C.KT,C.GA,C.bgB,C.aKH,C.aqY,C.dh5,C.lW,C.aV5,C.aV4,C.aT7,C.ui,C.ro,C.lD,C.hV,C.kU,C.aIF])
u(A.ht,[C.fO8,C.fO7,C.fO9,C.fXI,C.fBj,C.fBk,C.fBp,C.fLS,C.fLR,C.fLQ,C.c7M,C.fYe,C.fY6,C.fYi,C.fG9,C.dPL,C.dPG,C.dPH,C.dPj,C.dPf,C.dQ_,C.dQ0,C.dPU,C.dPV,C.dQ1,C.dQ2,C.fGV,C.fJp,C.fJq,C.fWM,C.h4i,C.fG0,C.fXm,C.dgi,C.dfF,C.dfO,C.dg4,C.dfK,C.dfQ,C.dfH,C.dfU,C.dfV,C.dfT,C.dg9,C.dg8,C.di5,C.di6,C.di7,C.dgw,C.dgB,C.dgA,C.cOW,C.cOY,C.d7u,C.d7T,C.d7U,C.d7X,C.d7Z,C.d8_,C.d80,C.d82,C.d83,C.bRo,C.bRi,C.fu9,C.h4b,C.h4c,C.h4d,C.h48,C.h4e,C.h4f,C.h4g,C.h47,C.fHw,C.fVN,C.fDq,C.fKk,C.bMs,C.h4A,C.fWi,C.bKD,C.bKy,C.bKA,C.bKz,C.cpX,C.cpS,C.cpT,C.cpR,C.cpP,C.cpU,C.cQ_,C.cEX,C.cF_,C.cEY,C.cF0,C.cF1,C.f6I,C.fgR,C.bSa,C.bS4,C.bS8,C.bRM,C.e1o,C.e1l,C.e1m,C.e1k,C.e1q,C.bS2,C.bRT,C.bRD,C.bRC,C.bRy,C.bRz,C.bRA,C.bRB,C.e33,C.e2t,C.e2o,C.e1Q,C.e25,C.e28,C.e24,C.e23,C.e2k,C.e2l,C.e2f,C.e1E,C.e2w,C.e2q,C.e1G,C.e1H,C.e1I,C.e1N,C.e1L,C.e1K,C.e2_,C.e20,C.e1V,C.e2D,C.e2z,C.dgH,C.dgI,C.fGZ,C.fH_,C.fH0,C.fGX,C.fGY,C.fH3,C.fH4,C.fH5,C.fH1,C.fH2,C.dh0,C.dgR,C.dgM,C.dgW,C.dgX,C.dh_,C.dgO,C.dh2,C.dh3,C.dh4,C.fmr,C.eXu,C.dwX,C.dx6,C.dx7,C.dx8,C.dxb,C.dxa,C.dxc,C.dxh,C.dxi,C.ceT,C.ceS,C.ceO,C.ceP,C.ceQ,C.ceR,C.ceY,C.ceV,C.ceW,C.e2Q,C.e2T,C.e2S,C.e2Z,C.e3_,C.dP4,C.fXP,C.fXc,C.h3R,C.fXg,C.fXf,C.d8h,C.d8i,C.d8d,C.cGL,C.cGN,C.cGO,C.cGG,C.cGP,C.flX,C.fVA,C.eUC,C.eUy,C.eUu,C.eUs,C.eUG,C.h3E,C.eUP,C.eUY,C.eUT,C.eUU,C.eV2,C.cFX,C.cFV,C.cFW,C.fFR,C.h4q,C.fDp,C.bSx,C.bSw,C.bSt,C.bSu,C.bSv,C.fpv,C.fpw,C.fX0,C.fX1,C.fX2,C.fX3,C.fX4,C.h4o,C.fGk,C.fJv,C.fJw,C.fJy,C.fJz,C.fWO,C.h4j,C.h4k,C.h4l,C.fG1,C.fG2,C.h4u,C.fFw,C.fFx,C.h3S,C.fKl,C.fWH,C.fJs,C.fJt,C.fWC,C.fq5,C.fq6,C.fq7,C.fq8,C.fq9,C.fqn,C.fqj,C.fqk,C.fus,C.fut,C.fxp,C.fCF,C.fCG])
u(A.ax,[C.b_G,C.alS,C.aWp,C.ZN,C.bcd,C.QE,C.a6v,C.tG,C.Ir,C.bgz,C.bko,C.byo,C.bnJ,C.aed,C.bkn,C.aec,C.bkm,C.aDz,C.aJJ,C.aee,C.Gw,C.bgA,C.adt,C.bgy,C.bgD,C.b_E,C.au2,C.aez])
u(A.mk,[C.bcR,C.be4,C.bdW,C.aIz,C.bjp,C.bp_,C.aWu,C.bcT,C.aBx,C.bcm,C.bt2,C.bjx,C.biY,C.bj4,C.bgC,C.bfE,C.blv,C.byd])
u(A.iJ,[C.fYb,C.fYc,C.fYd,C.fY4,C.fY5,C.fYg,C.fYh,C.dPX,C.dPJ,C.dPM,C.dPq,C.dPr,C.dPs,C.dPp,C.dPx,C.dPo,C.dPy,C.dPz,C.dPn,C.dPA,C.dPm,C.dPB,C.dPl,C.dPC,C.dPd,C.dPe,C.dPk,C.dPD,C.dPi,C.dPE,C.dPh,C.dPt,C.dPg,C.dPu,C.dPc,C.dPv,C.dPw,C.dPY,C.dPZ,C.dPN,C.dPO,C.dPP,C.dPQ,C.dPR,C.dPS,C.dPT,C.dQ4,C.dPW,C.fGW,C.dfD,C.dfB,C.dfC,C.dfE,C.dgh,C.dg6,C.dg3,C.dfG,C.dg7,C.dfM,C.dfN,C.dfP,C.dg5,C.dfL,C.dfR,C.dge,C.dg0,C.dg_,C.dg1,C.dg2,C.dfW,C.dfY,C.dfZ,C.dfS,C.dga,C.dgd,C.dfI,C.dfJ,C.di4,C.di3,C.di2,C.di1,C.di8,C.di0,C.di9,C.dgx,C.dgy,C.dgz,C.dgC,C.dgv,C.dgu,C.cOX,C.d7t,C.d7G,C.d7F,C.d7V,C.d7E,C.d7W,C.d7D,C.d7C,C.d7Y,C.d7B,C.d7O,C.d7N,C.d84,C.bRh,C.bRr,C.bRj,C.bRk,C.bRn,C.bRm,C.bRp,C.bRq,C.bRl,C.bRf,C.bRg,C.bSV,C.bSW,C.bSX,C.bSY,C.bSZ,C.bT_,C.bT0,C.h4a,C.fVO,C.bKC,C.bKx,C.bKv,C.bKw,C.bKu,C.cpZ,C.cq_,C.cpY,C.cq0,C.cq2,C.cq3,C.cq4,C.cpV,C.cEW,C.cF4,C.cF5,C.cF6,C.cF3,C.cF7,C.cF8,C.cF9,C.cFa,C.cEZ,C.cF2,C.bSq,C.bSp,C.bSn,C.bSl,C.bSm,C.bSi,C.bSj,C.bSk,C.bSo,C.bSh,C.f6J,C.f6K,C.f6L,C.f6M,C.f6N,C.bSe,C.bSf,C.bSg,C.bS9,C.bSb,C.bSc,C.bSd,C.bS5,C.bRQ,C.bRP,C.bRO,C.bRI,C.bRJ,C.bRN,C.bRK,C.bRL,C.bRH,C.e1n,C.e1p,C.e1i,C.e1j,C.e1h,C.e1r,C.e1s,C.e1t,C.e1w,C.e1x,C.e1y,C.e1z,C.e1A,C.e1B,C.e1C,C.e1D,C.e1u,C.e1v,C.bS1,C.bS0,C.bRS,C.bRR,C.bRY,C.bRZ,C.bRV,C.bRW,C.bRX,C.bRU,C.bRs,C.bRt,C.bRx,C.bRw,C.bRv,C.bRu,C.e32,C.e31,C.e34,C.e35,C.e36,C.e30,C.e38,C.e37,C.e2r,C.e2s,C.e2u,C.e1R,C.e27,C.e26,C.e29,C.e2n,C.e22,C.e2d,C.e2e,C.e2c,C.e2a,C.e2b,C.e2g,C.e2h,C.e2i,C.e2m,C.e1F,C.e2p,C.e1J,C.e1M,C.e1O,C.e2v,C.e1U,C.e1S,C.e1W,C.e1X,C.e1T,C.e1Y,C.e21,C.e2E,C.e2F,C.e2x,C.e2A,C.e2B,C.e2C,C.e2H,C.e2y,C.e1P,C.dgG,C.dgF,C.dgK,C.dgU,C.dgL,C.eXt,C.dwY,C.dwV,C.dwW,C.dx5,C.dx4,C.dx3,C.dxd,C.dx2,C.dxe,C.dx1,C.dxf,C.dx0,C.dxg,C.dx_,C.dwZ,C.dx9,C.dxj,C.dxs,C.e2R,C.e2V,C.e2W,C.e2N,C.e2O,C.e2P,C.e2U,C.e2Y,C.e2X,C.e2I,C.e2J,C.e2K,C.e2L,C.e2M,C.dP5,C.fXM,C.cog,C.d8g,C.d8f,C.d8j,C.d8c,C.d8e,C.cGD,C.cGJ,C.cGK,C.cGI,C.cGM,C.cGH,C.cGE,C.cGF,C.cGQ,C.flY,C.flZ,C.eUE,C.eUv,C.eUw,C.eUx,C.eUz,C.eUA,C.eUD,C.eUq,C.eUt,C.eUF,C.eUr,C.eUI,C.eUJ,C.eUK,C.eUL,C.eUH,C.eUl,C.eUm,C.eUn,C.eUp,C.eUo,C.eV3,C.eV4,C.eUN,C.eUO,C.eUV,C.eUW,C.eUX,C.eUR,C.eUS,C.eVa,C.eV9,C.eVb,C.eV8,C.eUM,C.eUQ,C.eV6,C.eV5,C.eV0,C.eV1,C.eV_,C.eUZ])
u(A.af,[C.apO,C.TX,C.a_v,C.a_z,C.a_x,C.a_5,C.alT,C.ak5,C.auQ,C.ayN,C.am1,C.am_,C.alW,C.Wh,C.alY,C.TY,C.ar0,C.aqV,C.a09,C.aqZ,C.a0t,C.a0u,C.a7h,C.a_7,C.a_6,C.ZE,C.a2g,C.Gk,C.ayU,C.au1,C.atW,C.au0,C.OX])
u(A.ah,[C.aEz,C.bgt,C.aBy,C.bgS,C.aBB,C.be2,C.aBz,C.azN,C.aGZ,C.ayO,C.aBD,C.aBC,C.aBA,C.blR,C.alZ,C.alV,C.aF7,C.aF4,C.aDy,C.aF6,C.aF5,C.blS,C.aN8,C.aAi,C.aAh,C.az0,C.byg,C.aPg,C.aPh,C.aGA,C.bne,C.aGz,C.bA1])
u(A.jw,[C.dPI,C.dPK,C.dPF,C.dQ3,C.fJr,C.bRe,C.dgg,C.dgf,C.dfX,C.dgb,C.dgc,C.dgD,C.bT1,C.bSU,C.bRF,C.bRG,C.h49,C.h4z,C.bKB,C.cq1,C.cpW,C.cpQ,C.f6O,C.bS3,C.bS6,C.bS7,C.drf,C.bS_,C.e2j,C.e1Z,C.e2G,C.dgT,C.dgS,C.dgQ,C.dgV,C.dgY,C.dgZ,C.dgJ,C.dgN,C.dgP,C.dh1,C.ceM,C.ceU,C.ceZ,C.dP6,C.fXO,C.fXN,C.flV,C.flW,C.eUB,C.eV7,C.cFY,C.ftL,C.fpx,C.fJx,C.fFy,C.fJu,C.fqm,C.fql,C.fuu])
u(A.lE,[C.a1M,C.afT,C.a24,C.a_X,C.acw,C.aLt,C.Iq,C.am3,C.cFZ,C.cG_])
t(C.alU,C.aBz)
t(C.ak6,C.azN)
t(C.auR,C.aGZ)
t(C.bgx,C.aBD)
t(C.am2,C.bgx)
t(C.bgw,C.aBC)
t(C.am0,C.bgw)
t(C.bgv,C.aBA)
t(C.alX,C.bgv)
t(C.blw,C.aN8)
t(C.bye,C.aPg)
t(C.byf,C.aPh)
t(C.aGB,C.bA1)
t(C.baF,A.bat)
t(C.byh,A.a6X)
t(C.baE,C.byh)
w(C.aBz,A.cb)
w(C.azN,A.cb)
w(C.aGZ,A.eM)
w(C.aBA,A.cb)
v(C.bgv,C.afF)
w(C.aBC,A.cb)
v(C.bgw,C.afF)
w(C.aBD,A.cb)
v(C.bgx,C.afF)
w(C.aN8,A.eM)
w(C.aPg,A.cb)
w(C.aPh,A.cb)
v(C.bA1,A.eB)
v(C.byh,A.jf)})()
A.iT(b.typeUniverse,JSON.parse('{"b_G":{"ax":[],"v":[]},"bcR":{"aC":[]},"apO":{"af":[],"v":[]},"aEz":{"ah":["apO"]},"TX":{"af":[],"v":[]},"alS":{"ax":[],"v":[]},"aWp":{"ax":[],"v":[]},"bgt":{"ah":["TX"]},"a_v":{"af":[],"v":[]},"a_z":{"af":[],"v":[]},"a_x":{"af":[],"v":[]},"a_5":{"af":[],"v":[]},"aBy":{"ah":["a_v"]},"bgS":{"ah":["a_z"]},"aBB":{"ah":["a_x"]},"ZN":{"ax":[],"v":[]},"be4":{"aC":[]},"bdW":{"aC":[]},"be2":{"ah":["a_5"]},"aIz":{"aC":[]},"bjp":{"aC":[]},"bcd":{"ax":[],"v":[]},"alT":{"af":[],"v":[]},"alU":{"ah":["alT"]},"bp_":{"aC":[]},"aWu":{"aC":[]},"ak5":{"af":[],"v":[]},"auQ":{"af":[],"v":[]},"ayN":{"af":[],"v":[]},"ak6":{"ah":["ak5"]},"bcT":{"aC":[]},"QE":{"ax":[],"v":[]},"aBx":{"aC":[]},"auR":{"ah":["auQ"]},"bcm":{"aC":[]},"ayO":{"ah":["ayN"]},"am1":{"af":[],"v":[]},"am_":{"af":[],"v":[]},"alW":{"af":[],"v":[]},"am2":{"ah":["am1"]},"bt2":{"aC":[]},"am0":{"ah":["am_"]},"bjx":{"aC":[]},"alX":{"ah":["alW"]},"biY":{"aC":[]},"Wh":{"af":[],"v":[]},"alY":{"af":[],"v":[]},"TY":{"af":[],"v":[]},"a6v":{"ax":[],"v":[]},"bj4":{"aC":[]},"tG":{"ax":[],"v":[]},"Ir":{"ax":[],"v":[]},"blR":{"ah":["Wh"]},"alZ":{"ah":["alY"]},"alV":{"ah":["TY"]},"ar0":{"af":[],"v":[]},"aqV":{"af":[],"v":[]},"a09":{"af":[],"v":[]},"aee":{"ax":[],"v":[]},"aF7":{"ah":["ar0"]},"aF4":{"ah":["aqV"]},"bgz":{"ax":[],"v":[]},"bgC":{"aC":[]},"bko":{"ax":[],"v":[]},"bfE":{"aC":[]},"byo":{"ax":[],"v":[]},"bnJ":{"ax":[],"v":[]},"aDy":{"ah":["a09"]},"aed":{"ax":[],"v":[]},"bkn":{"ax":[],"v":[]},"aec":{"ax":[],"v":[]},"bkm":{"ax":[],"v":[]},"aDz":{"ax":[],"v":[]},"aJJ":{"ax":[],"v":[]},"Gw":{"ax":[],"v":[]},"aqZ":{"af":[],"v":[]},"a0t":{"af":[],"v":[]},"a0u":{"af":[],"v":[]},"aF6":{"ah":["aqZ"]},"bgA":{"ax":[],"v":[]},"adt":{"ax":[],"v":[]},"bgy":{"ax":[],"v":[]},"bgD":{"ax":[],"v":[]},"aF5":{"ah":["a0t"]},"blS":{"ah":["a0u"]},"b_E":{"ax":[],"v":[]},"a7h":{"af":[],"v":[]},"blw":{"ah":["a7h"]},"blv":{"aC":[]},"au2":{"ax":[],"v":[]},"a_7":{"af":[],"v":[]},"a_6":{"af":[],"v":[]},"ZE":{"af":[],"v":[]},"a2g":{"af":[],"v":[]},"aAi":{"ah":["a_7"]},"aAh":{"ah":["a_6"]},"az0":{"ah":["ZE"]},"byg":{"ah":["a2g"]},"Gk":{"af":[],"v":[]},"ayU":{"af":[],"v":[]},"bye":{"ah":["Gk"]},"byf":{"ah":["ayU"]},"byd":{"aC":[]},"au1":{"af":[],"v":[]},"aGA":{"ah":["au1"]},"aez":{"ax":[],"v":[]},"atW":{"af":[],"v":[]},"au0":{"af":[],"v":[]},"bne":{"ah":["atW"]},"aGz":{"ah":["au0"]},"OX":{"af":[],"v":[]},"aGB":{"ah":["OX"],"eB":[]},"baE":{"jf":[],"fi":[]}}'))
A.Dh(b.typeUniverse,JSON.parse('{"afF":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.at
return{e2:w("aT7"),cq:w("mh"),Q:w("ro"),r:w("bu<n,n>"),c5:w("aV4"),dY:w("aV5"),fH:w("MK"),de:w("akN"),dN:w("MS<H>"),gc:w("El<H>"),A:w("eI<n?>"),e:w("Ip"),B:w("nw"),P:w("hV"),df:w("ls"),k:w("kU"),x:w("aB<~>"),U:w("O<SU>"),V:w("O<ac>"),C:w("O<ro>"),O:w("O<u>"),c:w("O<MK>"),b:w("O<akN>"),ac:w("O<eI<n?>>"),I:w("O<nw>"),u:w("O<hV>"),J:w("O<ls>"),_:w("O<kU>"),cl:w("O<aB<ai<a8<n,@>>>>"),R:w("O<nz>"),eU:w("O<ai<+(G,G)>>"),ez:w("O<a8<n,aE>>"),gE:w("O<a8<n,n>>"),Y:w("O<a8<n,@>>"),fD:w("O<mQ>"),bp:w("O<oH>"),g:w("O<o>"),ar:w("O<aue>"),v:w("O<fT>"),gy:w("O<a9X>"),L:w("O<+(n,n)>"),G:w("O<+(G,G)>"),E:w("O<+(G,~())>"),bd:w("O<+(n,H,P)>"),bF:w("O<+count,id,name(H,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j4>"),dT:w("O<bas>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<lD>"),h:w("O<aA1>"),cC:w("O<bhI>"),fp:w("O<KM>"),M:w("O<KT>"),gZ:w("O<aIF>"),gA:w("O<afK>"),e4:w("O<afR>"),dE:w("O<aKH>"),f7:w("O<P>"),n:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cw<ah<af>>"),d:w("ai<nw>"),do:w("ai<hV>"),cg:w("ai<ls>"),ax:w("ai<kU>"),fO:w("ai<a8<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(H,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lD>"),j:w("ai<@>"),fK:w("bB<n,n>"),d2:w("bB<n,ai<a8<n,@>>>"),a:w("a8<n,@>"),f:w("a8<@,@>"),gv:w("N<n,Is>"),cM:w("N<H,n>"),w:w("iC"),g2:w("rM"),bV:w("apC"),fL:w("ct"),K:w("aE"),dc:w("fT"),fo:w("Pi<H>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(P,H)"),d9:w("+dx,hidden(G,ai<hV>)"),cs:w("+count,id,name(H,n,n)"),N:w("n"),fT:w("iu<hV>"),ec:w("iu<n>"),gW:w("r4<G>"),X:w("br<G>"),bW:w("dK"),W:w("bI<n>"),b4:w("bI<H>"),cI:w("k3<n>"),av:w("Y<zE>"),cc:w("Y<n>"),l:w("v"),gF:w("fi"),fA:w("lD"),dO:w("GA"),bw:w("aec<n?>"),cy:w("KV"),q:w("mz"),y:w("P"),i:w("G"),z:w("@"),S:w("H"),eK:w("ai<kU>?"),m:w("aqY?"),cT:w("o?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,H)?"),he:w("+qrPayload,token,usesRemaining(n,n,H)?"),gG:w("+members,trees,viewOnly(H,H,P)?"),az:w("ql?"),T:w("n?"),aD:w("dK?"),o:w("lD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b4v=new A.be(B.fN,B.bI,B.fN,B.bI)
D.adN=new A.be(B.fN,B.il,B.fN,B.il)
D.b4J=new A.be(B.iA,B.bI,B.bI,B.bI)
D.b4N=new A.ay(B.cG,1.4,B.r,-1)
D.b4X=new A.ay(B.ac,1,B.r,-1)
D.aeh=new A.aY(140,1/0,0,1/0)
D.b6l=new A.aY(0,1/0,64,1/0)
D.b6p=new A.aY(0,84,0,1/0)
D.aeo=new A.aY(130,1/0,0,1/0)
D.aCD=w([B.m6,B.rK,B.c],x.O)
D.c7s=new A.a9(B.aA,B.aE,B.x,D.aCD,null,null)
D.b79=new A.p(null,null,null,null,null,D.c7s,B.n)
D.deH=w([B.aY,B.bR],x.O)
D.c9y=new A.a9(B.b7,B.b8,B.x,D.deH,null,null)
D.b7u=new A.p(null,null,null,null,null,D.c9y,B.n)
D.Yc=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fz=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.diH=w([B.dx,D.Yc,D.fz],x.O)
D.c6F=new A.a9(B.b7,B.b8,B.x,D.diH,null,null)
D.b8e=new A.p(null,null,null,null,null,D.c6F,B.n)
D.fqJ=new A.F(!0,B.bW,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h10=new A.B("?",null,D.fqJ,null,null,null,null,null,null,null,null,null)
D.bbS=new A.cg(B.A,null,null,D.h10,null)
D.VP=new A.F(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJZ=new A.B("\ud83c\udf33",null,D.VP,null,null,null,null,null,null,null,null,null)
D.af7=new A.cg(B.A,null,null,D.fJZ,null)
D.fMD=new A.B("\ud83c\udfc6",null,As.KE,null,null,null,null,null,null,null,null,null)
D.bc2=new A.cg(B.A,null,null,D.fMD,null)
D.bdT=new A.fk(null,null,null,null,null,E.kp,null,null,null,null)
D.af9=new A.cg(B.A,null,null,D.bdT,null)
D.kM=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.frh=new A.F(!0,D.kM,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLF=new A.B("No books on the shelf yet.",null,D.frh,null,null,null,null,null,null,null,null,null)
D.erP=new A.D(B.nH,D.fLF,null)
D.bci=new A.cg(B.A,null,null,D.erP,null)
D.fyi=new A.F(!0,D.fz,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1W=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fyi,null,null,null,null,null,null,null,null,null)
D.esq=new A.D(B.cl,D.h1W,null)
D.bcL=new A.cg(B.A,null,null,D.esq,null)
D.aWG=new A.B("\ud83e\uddfa",null,D.VP,null,null,null,null,null,null,null,null,null)
D.bd_=new A.cg(B.A,null,null,D.aWG,null)
D.fP7=new A.B("\ud83c\udfad",null,D.VP,null,null,null,null,null,null,null,null,null)
D.bdb=new A.cg(B.A,null,null,D.fP7,null)
D.bde=new A.cg(B.A,null,null,A7.Y0,null)
D.afu=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.afB=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bfs=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bfx=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bfJ=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bfM=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bfO=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bfW=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lB=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bg_=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bg4=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bg5=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bg6=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lC=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bgH=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Bz=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bgQ=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bh9=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bhc=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bhi=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bhq=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.agc=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bhx=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Yo=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.agf=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bhJ=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Yq=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bi3=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.agr=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bis=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.biI=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bj5=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bjf=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FM=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bjB=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bjD=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bjH=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.agT=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bk0=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bk6=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bkc=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.agX=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bkk=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bkM=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bkU=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bkW=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bl0=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ahc=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.blD=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ahB=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bmA=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ahO=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bmZ=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.FZ=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bn4=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bne=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bng=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ahT=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bnz=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bnA=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bnD=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ai0=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Z6=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bo_=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bok=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bop=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aib=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bow=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Zd=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.boP=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.boQ=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.G5=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bpC=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bqg=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bqm=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bqq=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qj=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bqB=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bqF=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bqL=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bqN=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aiY=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aj1=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gb=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.Zw=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.aja=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.brU=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bsc=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bsB=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bsK=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ajA=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.ZG=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bsT=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bta=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.ZK=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bto=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.btE=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.ZP=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.btJ=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ajS=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ajU=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.bu1=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ak_=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.but=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bux=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.buD=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.buJ=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.buR=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bvp=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bvV=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fFS=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bzs=new A.eI(null,D.fFS,B.fc,null,x.A)
D.fOZ=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bzu=new A.eI(null,D.fOZ,B.fc,null,x.A)
D.akT=new A.bd(3e4)
D.bA1=new A.bd(38e5)
D.bAL=new A.im(0,10,0,10)
D.bAU=new A.R(0,1,0,0)
D.bB4=new A.im(0,4,0,4)
D.bB7=new A.R(0,4,5,0)
D.bBo=new A.R(10,10,14,10)
D.bBA=new A.im(10,4,10,4)
D.bBI=new A.im(10,8,10,8)
D.bBJ=new A.R(10,8,8,8)
D.bCc=new A.R(12,6,12,2)
D.bCt=new A.R(14,0,14,6)
D.bCx=new A.R(14,10,6,6)
D.bCy=new A.R(14,12,14,0)
D.bCC=new A.R(14,12,14,8)
D.bCF=new A.R(14,12,8,14)
D.bCJ=new A.im(14,14,14,14)
D.bD0=new A.R(14,6,14,40)
D.bD3=new A.R(14,8,14,30)
D.bDr=new A.R(16,2,16,10)
D.bDB=new A.R(16,6,16,30)
D.bDD=new A.R(16,6,16,8)
D.bDS=new A.R(18,10,18,4)
D.bDU=new A.R(18,12,18,0)
D.bE0=new A.R(18,14,12,4)
D.amo=new A.R(18,16,18,8)
D.bEg=new A.R(18,20,18,22)
D.bEm=new A.R(18,30,18,30)
D.bEE=new A.R(20,10,12,20)
D.bEH=new A.R(20,11,20,11)
D.bES=new A.R(20,18,16,18)
D.bEU=new A.R(20,18,20,6)
D.bFJ=new A.R(24,32,24,28)
D.bFK=new A.R(24,36,24,32)
D.bFO=new A.R(26,26,24,14)
D.bG2=new A.R(2,4,2,8)
D.bG6=new A.R(30,0,30,0)
D.bGh=new A.R(38,22,22,22)
D.amM=new A.R(40,24,24,24)
D.bGj=new A.im(40,40,40,40)
D.bGl=new A.R(46,30,30,30)
D.bGM=new A.R(56,40,40,40)
D.bGQ=new A.R(1.25,1.25,1.25,1.25)
D.bGR=new A.R(60,0,60,0)
D.bGV=new A.R(6,14,6,16)
D.bGZ=new A.R(6,4,12,0)
D.bH2=new A.R(6,6,10,2)
D.bH9=new A.im(7,3,7,3)
D.bHI=new A.R(5,1.5,5,1.5)
D.bHT=new A.R(6,2.5,6,2.5)
D.fXb=new A.B("Family Games",null,B.jP,null,null,null,null,null,null,null,null,null)
D.fEu=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,B.VF,null,null,null,null,null,null,null,null,null)
D.cIB=w([D.fXb,D.fEu],x.p)
D.bwX=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cIB,null)
D.bIi=new A.bz(1,B.bc,D.bwX,null)
D.h0x=new A.B("Signature",null,B.ng,null,null,null,null,null,null,null,null,null)
D.bIl=new A.bz(1,B.bc,D.h0x,null)
D.fTL=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,T.tG,null,null,null,null,null,null,null,null,null)
D.bIT=new A.bz(1,B.bc,D.fTL,null)
D.fYE=new A.B("Tell the AI what to fix",null,B.di,null,null,null,null,null,null,null,null,null)
D.bJ9=new A.bz(1,B.bc,D.fYE,null)
D.fz4=new A.F(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_C=new A.B("Worksheets",null,D.fz4,null,null,null,null,null,null,null,null,null)
D.fzg=new A.F(!0,E.afX,null,null,null,null,13,B.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZt=new A.B("Track your project spending",null,D.fzg,null,null,null,null,null,null,null,null,null)
D.d67=w([D.h_C,B.ax,D.fZt],x.p)
D.bwA=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d67,null)
D.bJf=new A.bz(1,B.bc,D.bwA,null)
D.fu4=new A.F(!0,E.kp,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF3=new A.B("FAMILY LIBRARY",null,D.fu4,null,null,null,null,null,null,null,null,null)
D.bJx=new A.bz(1,B.bc,D.fF3,null)
D.OC=new C.Ip("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wr=new C.Iq(0,"male")
D.ot=new C.Iq(1,"female")
D.yZ=new C.Iq(2,"unknown")
D.uA=new C.am3(0,"owner")
D.OD=new C.am3(1,"editor")
D.kV=new C.am3(2,"viewer")
D.aoI=new A.a0(61199,"MaterialIcons",!1)
D.bOQ=new A.a0(61504,"MaterialIcons",!1)
D.bOR=new A.a0(61505,"MaterialIcons",!1)
D.bOT=new A.a0(61587,"MaterialIcons",!1)
D.bP_=new A.a0(61890,"MaterialIcons",!1)
D.bPS=new A.a0(63034,"MaterialIcons",!0)
D.bQ9=new A.a0(63153,"MaterialIcons",!1)
D.bQG=new A.a0(63429,"MaterialIcons",!1)
D.aqQ=new A.a0(984520,"MaterialIcons",!1)
D.bPo=new A.a0(62776,"MaterialIcons",!1)
D.bT0=new A.ae(D.bPo,26,B.b2,null,null,null)
D.bNO=new A.a0(57648,"MaterialIcons",!1)
D.bTk=new A.ae(D.bNO,14,B.c,null,null,null)
D.bTB=new A.ae(B.Hl,17,null,null,null,null)
D.bTH=new A.ae(B.a2j,null,B.bR,null,null,null)
D.bU7=new A.ae(E.a2r,null,null,null,null,null)
D.bUa=new A.ae(B.j2,18,E.kp,null,null,null)
D.a29=new A.a0(62044,"MaterialIcons",!1)
D.bUf=new A.ae(D.a29,null,B.aY,null,null,null)
D.bUm=new A.ae(B.zb,18,B.c,null,null,null)
D.bV4=new A.ae(B.ee,16,null,null,null,null)
D.bVb=new A.ae(D.a29,32,B.aY,null,null,null)
D.bVu=new A.ae(E.aoJ,18,B.cG,null,null,null)
D.bWz=new A.ae(B.Hv,22,B.ay,null,null,null)
D.bWL=new A.ae(B.ee,22,B.b2,null,null,null)
D.bWY=new A.ae(Y.a2e,22,B.c,null,null,null)
D.bX3=new A.ae(B.uL,52,B.c,null,null,null)
D.bXd=new A.ae(B.Hv,30,B.ay,null,null,null)
D.bXw=new A.ae(B.a2w,null,B.c,null,null,null)
D.arx=new A.ae(B.uV,22,B.c,null,null,null)
D.bXF=new A.ae(B.ee,17,null,null,null,null)
D.bY3=new A.ae(B.wH,26,B.cG,null,null,null)
D.bYP=new A.ae(B.a2E,16,null,null,null,null)
D.bZA=new A.ae(B.uL,24,B.c,null,null,null)
D.bZF=new A.ae(B.P5,20,B.tg,null,null,null)
D.bZK=new A.ae(B.Hj,null,B.bR,null,null,null)
D.bZT=new A.ae(B.j2,18,B.c,null,null,null)
D.c_y=new A.ae(B.cy,22,B.ac,null,null,null)
D.c0o=new A.ae(B.eh,16,B.ac,null,null,null)
D.c0A=new A.ae(D.a29,20,B.aY,null,null,null)
D.arX=new A.ae(B.hJ,20,null,null,null,null)
D.c15=new A.ae(B.cy,18,D.kM,null,null,null)
D.c1m=new A.ae(B.zi,28,B.c,null,null,null)
D.c1x=new A.ae(B.OW,null,B.fh,null,null,null)
D.c1R=new A.ae(B.zi,24,B.c,null,null,null)
D.c2i=new A.ae(B.uL,null,B.aY,null,null,null)
D.c2j=new A.ae(B.jG,20,B.cG,null,null,null)
D.c2D=new A.ae(B.Hl,16,null,null,null,null)
D.c4b=new A.e6(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eK,!0,null,null,null,null)
D.asF=new C.a6v(10,null)
D.c4H=new C.a6v(12,null)
D.c4I=new C.a6v(14,null)
D.dmO=w([B.bx,B.aY,B.fo,B.b2],x.O)
D.c5T=new A.a9(B.aA,B.aE,B.x,D.dmO,null,null)
D.bpo=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bvw=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d2B=w([D.bpo,D.bvw],x.O)
D.c63=new A.a9(B.b7,B.b8,B.x,D.d2B,null,null)
D.dgI=w([B.eV,B.fU,B.fo],x.O)
D.c68=new A.a9(B.aA,B.aE,B.x,D.dgI,null,null)
D.aiM=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bg7=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d4P=w([D.aiM,D.bg7],x.O)
D.c6G=new A.a9(B.b7,B.b8,B.x,D.d4P,null,null)
D.bjR=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aBT=w([D.bjR,D.aiM],x.O)
D.c7_=new A.a9(B.aA,B.aE,B.x,D.aBT,null,null)
D.ahu=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bmr=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dfM=w([D.ahu,D.bmr],x.O)
D.c7D=new A.a9(B.a7,B.aa,B.x,D.dfM,null,null)
D.dtM=w([B.bC,B.mP],x.O)
D.c7F=new A.a9(B.b7,B.b8,B.x,D.dtM,null,null)
D.bpj=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.duI=w([D.bpj,D.kM,D.kM,I.N6],x.O)
D.dxe=w([0,0.07,0.9,1],x.n)
D.c89=new A.a9(B.a7,B.aa,B.x,D.duI,D.dxe,null)
D.c8i=new A.a9(B.aA,B.aE,B.x,B.SK,null,null)
D.d0n=w([B.aF,D.lB],x.O)
D.c8l=new A.a9(B.a7,B.aa,B.x,D.d0n,null,null)
D.dtk=w([B.b2,B.aY,B.bR],x.O)
D.c9j=new A.a9(B.aA,B.aE,B.x,D.dtk,null,null)
D.cdC=w([10,20,30],x.t)
D.cny=w([-1,-0.4,0.3,1],x.n)
D.cv0=w([B.bx,B.b2,B.eV],x.O)
D.cv9=w([B.bp,B.aF,B.ko],x.O)
D.cvb=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cvT=w([30,140,262,360],x.n)
D.bnJ=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cBr=w([D.bnJ,E.aik],x.O)
D.emq=new A.o(1,2)
D.fc6=new A.cU(B.aV,D.emq,3)
D.ayO=w([D.fc6],x.F)
D.cIT=w([B.hp,B.ch,B.fn],x.O)
D.cLD=w([B.bK,B.bw,B.bq],x.O)
D.bKn=new C.uR("classic","Classic leather","Gold-edged brown leather",D.aBT,E.kp,E.kp,"\u2766",B.K,!0,!1,!1,!1)
D.bfc=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.buj=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d7P=w([D.bfc,D.buj],x.O)
D.aip=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bKi=new C.uR("ornate","Ornate gold","Double gold border and flourishes",D.d7P,D.aip,D.aip,"\u2726",B.K,!0,!0,!0,!1)
D.bjp=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bqa=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d_i=w([D.bjp,D.bqa],x.O)
D.bKh=new C.uR("parchment","Parchment","Old paper with dark ink",D.d_i,D.G5,L.iZ,"\u2767",B.K,!0,!1,!1,!0)
D.afD=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bsy=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.drz=w([D.afD,D.bsy],x.O)
D.bnb=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.brP=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bKk=new C.uR("minimal","Clean paper","Plain and elegant, like a printed book",D.drz,D.bnb,D.brP,"",B.K,!0,!0,!1,!0)
D.bKm=new C.uR("midnight","Midnight","Deep blue with silver stars",K.aCc,B.cu,B.bO,"\u2727",B.K,!0,!0,!1,!1)
D.bKg=new C.uR("emerald","Emerald library","Green cloth, title on the left",V.azc,E.kp,B.fy,"\u25c6",B.bn,!0,!1,!1,!1)
D.bt2=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dpA=w([B.ej,D.bt2],x.O)
D.bov=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bpJ=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bKl=new C.uR("rose","Rose vintage","Burgundy with rose-gold lettering",D.dpA,D.bov,D.bpJ,"\u2740",B.K,!0,!1,!0,!1)
D.dui=w([B.cr,F.nx],x.O)
D.bKj=new C.uR("modern","Modern","Dark, bold, left-aligned",D.dui,B.aH,B.c,"",B.bn,!1,!0,!1,!1)
D.a4K=w([D.bKn,D.bKi,D.bKh,D.bKk,D.bKm,D.bKg,D.bKl,D.bKj],A.at("O<uR>"))
D.cOA=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.du6=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bKy=new C.ls('What does "Ubuntu" mean?',D.du6,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d12=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bKB=new C.ls("In Swahili, what do we call a grandmother?",D.d12,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d0U=w(["Babu","Mama","Baba","Dada"],x.s)
D.bKw=new C.ls("In Swahili, what do we call a grandfather?",D.d0U,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d2b=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bKA=new C.ls("What is a sister called in Swahili?",D.d2b,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d7g=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bKx=new C.ls("What is a brother called in Swahili?",D.d7g,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d0T=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bKI=new C.ls("Which word means father in Swahili?",D.d0T,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dvh=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bKH=new C.ls('"Umoja ni nguvu" means...',D.dvh,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.dsf=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bKJ=new C.ls('"Haba na haba hujaza kibaba" teaches us...',D.dsf,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d4X=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bKG=new C.ls('The African saying "It takes a village to raise a child" means...',D.d4X,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dvB=w(["The elders","The market","The river","The drum"],x.s)
D.bKC=new C.ls("Who is the traditional keeper of the family stories?",D.dvB,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cSL=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bKz=new C.ls("Why do families sit round the fire at night?",D.cSL,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.duk=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bKE=new C.ls('What does "Harambee" mean?',D.duk,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.da5=w(["An elder","A baby","A market","A cow"],x.s)
D.bKD=new C.ls('"Mzee" is a respectful word for...',D.da5,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dpr=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bKF=new C.ls('What does "Shikamoo" show?',D.dpr,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.az7=w([D.bKy,D.bKB,D.bKw,D.bKA,D.bKx,D.bKI,D.bKH,D.bKJ,D.bKG,D.bKC,D.bKz,D.bKE,D.bKD,D.bKF],x.J)
D.cX8=w([90,360],x.n)
D.cZQ=w([B.bR,B.bl],x.O)
D.bp7=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d_u=w([D.afD,D.bp7],x.O)
D.d06=w([-1,-0.3,0.4,1],x.n)
D.d0Z=w([0,0.45,0.72,0.92,1],x.n)
D.bjl=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d1g=w([D.bjl,B.dh],x.O)
D.bh4=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ak8=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d1P=w([B.dx,D.bh4,D.ak8],x.O)
D.d2R=w([B.ba,B.jg,B.pa],x.O)
D.bjT=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.brG=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bgL=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d2W=w([D.bjT,D.brG,D.bgL],x.O)
D.d3g=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d3q=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.huB=new C.adS(78,424,48,44,56)
D.huz=new C.adS(214,396,34,34,42)
D.huA=new C.adS(442,452,56,50,64)
D.aA5=w([D.huB,D.huz,D.huA],A.at("O<adS>"))
D.d3Z=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bg1=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.blC=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dxa=w([D.ahu,D.bg1,D.blC],x.O)
D.bKo=new C.uS("leather","Leather",D.dxa,"vintage")
D.db6=w([B.d6,B.FX,A9.YE],x.O)
D.bKv=new C.uS("midnight","Midnight",D.db6,"starry")
D.d2S=w([B.eq,B.e6,B.lf],x.O)
D.bKu=new C.uS("forest","Forest",D.d2S,"story")
D.dzb=w([B.es,B.ej,B.kr],x.O)
D.bKr=new C.uS("burgundy","Burgundy",D.dzb,"royal")
D.cLb=w([B.aF,B.oh,B.o5],x.O)
D.bKs=new C.uS("royal","Royal",D.cLb,"royal")
D.d5s=w([B.bw,B.cr,F.nx],x.O)
D.bKp=new C.uS("charcoal","Charcoal",D.d5s,"geo")
D.dxj=w([B.c5,B.dK,B.yc],x.O)
D.bKt=new C.uS("sunset","Sunset",D.dxj,"sunset")
D.dy0=w([B.jg,B.G6,B.YH],x.O)
D.bKq=new C.uS("ocean","Ocean",D.dy0,"band")
D.zO=w([D.bKo,D.bKv,D.bKu,D.bKr,D.bKs,D.bKp,D.bKt,D.bKq],A.at("O<uS>"))
D.d5Y=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d6z=w([B.an,B.aM,B.T],x.O)
D.d7U=w([B.ej,B.e6,B.d6,B.ha,B.yg,B.cG,B.ks,B.e7,B.cZ],x.O)
D.d7V=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fc7=new A.cU(B.ds,B.dG,8)
D.d85=w([D.fc7],x.F)
D.d9c=w([B.bT,B.dK,B.kn],x.O)
D.bhX=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.blU=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bq5=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d9s=w([D.bhX,G.aiV,D.blU,D.bq5,D.ak8],x.O)
D.d9J=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d9V=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bfn=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.blg=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dan=w([D.bfn,D.agX,D.blg],x.O)
D.db1=w([B.bT,B.hE],x.O)
D.db7=w([G.no,B.ib,G.afO,B.cO],x.O)
D.dcH=w([B.cO,G.no,B.ib,D.lC,B.cO],x.O)
D.ddi=w([B.aS,B.w3,B.y0],x.O)
D.aB6=w(["True","False"],x.s)
D.eJB=new A.y(-0.65,0.6)
D.eWg=new A.y(-0.2,0.95)
D.eXl=new A.y(0.25,0.95)
D.eN4=new A.y(0.7,0.6)
D.eXV=new A.y(1,0.1)
D.de3=w([At.Ux,D.eJB,D.eWg,D.eXl,D.eN4,D.eXV],x.G)
D.bo0=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bub=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.biX=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.de9=w([D.bo0,D.bub,D.biX],x.O)
D.ded=w([B.bM,B.c0,B.dk,B.aS],x.O)
D.deI=w([B.hV,B.c5,B.rB],x.O)
D.df5=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dfh=w([B.eV,B.cG],x.O)
D.bps=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dfH=w([D.bps,D.afB],x.O)
D.dfS=w([B.cF,B.fp,B.fG],x.O)
D.dg2=w([B.aH,B.bl,B.d6],x.O)
D.dgF=w([B.er,B.cX,B.e6],x.O)
D.dgZ=w([B.dJ,B.d6,B.FX],x.O)
D.dh2=w([B.bi,B.mK,B.cZ],x.O)
D.dhk=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.boG=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bmV=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dhE=w([D.boG,D.agT,D.bmV],x.O)
D.dis=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.djv=w([1,0,7,6,3,2],x.t)
D.a5H=w(["leather","linen","plain","stars","rays"],x.s)
D.djH=w([0.5,2,3.6],x.n)
D.dke=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bSI=new A.a0(985219,"MaterialIcons",!1)
D.bSf=new A.a0(983781,"MaterialIcons",!1)
D.aBz=w([B.a2j,B.hK,B.lN,B.ie,D.bSI,B.HF,B.qJ,D.bSf,K.aqE,B.CW,B.qL,B.n2],A.at("O<a0>"))
D.a5L=w(["double","single","corners","none"],x.s)
D.bKd=new C.zE("Little Seed","\ud83c\udf31",0)
D.bKf=new C.zE("Young Listener","\ud83d\udc42",40)
D.bKe=new C.zE("Storyteller","\ud83e\ude98",120)
D.bKc=new C.zE("Village Pride","\ud83c\udfe1",300)
D.bKa=new C.zE("Keeper of Roots","\ud83c\udf33",700)
D.bKb=new C.zE("Elder of the Fire","\ud83d\udd25",1500)
D.aBB=w([D.bKd,D.bKf,D.bKe,D.bKc,D.bKa,D.bKb],A.at("O<zE>"))
D.dln=w([B.db,B.br,B.e7],x.O)
D.dlD=w([],x.C)
D.Dx=w([],x.u)
D.aLH=new A.o(225,528)
D.eLg=new A.y(D.aLH,1)
D.ena=new A.o(350,548)
D.eRy=new A.y(D.ena,0.95)
D.aLC=new A.o(158,656)
D.eRr=new A.y(D.aLC,1.12)
D.enW=new A.o(92,544)
D.eGP=new A.y(D.enW,0.93)
D.end=new A.o(398,614)
D.eNr=new A.y(D.end,1.04)
D.en1=new A.o(318,662)
D.eCh=new A.y(D.en1,1.1)
D.a5T=w([D.eLg,D.eRy,D.eRr,D.eGP,D.eNr,D.eCh],A.at("O<+(o,G)>"))
D.dnF=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.do6=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dp8=w([B.cO,G.no,B.ib,D.lC,B.cO,B.ib],x.O)
D.dqz=w([B.av,B.fp,B.ha],x.O)
D.dra=w([-70,58],x.n)
D.drc=w([-70,-30,20],x.n)
D.dsd=w([B.bi,B.mK,B.Gh],x.O)
D.dsu=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dMs=new C.lW("construction","Construction","Jobsite & builds",B.uI)
D.dMz=new C.lW("house","Home Build","Houses & rooms",B.wC)
D.dMp=new C.lW("grocery","Grocery","Store & pantry",B.a3d)
D.dMo=new C.lW("calculator","Calculations","Math & estimates",B.Pc)
D.dMx=new C.lW("lumber","Materials","Lumber & supplies",B.Pw)
D.dMl=new C.lW("kitchen","Kitchen","Remodel & meals",A3.Px)
D.bSd=new A.a0(983756,"MaterialIcons",!1)
D.dMq=new C.lW("landscape","Landscaping","Yard & garden",D.bSd)
D.dMk=new C.lW("plumbing","Plumbing","Pipes & water",B.pB)
D.dMA=new C.lW("electrical","Electrical","Wiring & power",B.hw)
D.dMi=new C.lW("store","Retail Shop","Daily business",B.ll)
D.dMj=new C.lW("paint_remodel","Paint & Remodel","Colors & walls",A3.Pr)
D.bRD=new A.a0(983311,"MaterialIcons",!1)
D.dMw=new C.lW("roofing","Roofing","Roofs & exteriors",D.bRD)
D.bSq=new A.a0(983986,"MaterialIcons",!1)
D.dMh=new C.lW("warehouse","Warehouse","Storage & stock",D.bSq)
D.dMu=new C.lW("vehicles","Vehicles","Fleet & transport",B.HG)
D.bPq=new A.a0(62785,"MaterialIcons",!1)
D.dMn=new C.lW("farm","Farm","Crops & livestock",D.bPq)
D.dMm=new C.lW("restaurant","Restaurant","Food & catering",B.wL)
D.dMt=new C.lW("tools","Tools","Workshop gear",B.HC)
D.dMy=new C.lW("wallet","Cash & Wallet","Quick spending",B.jG)
D.bQB=new A.a0(63395,"MaterialIcons",!1)
D.dMv=new C.lW("concrete","Concrete","Foundation work",D.bQB)
D.dMr=new C.lW("blueprint","Blueprint","Plans & design",Ao.apc)
D.a6f=w([D.dMs,D.dMz,D.dMp,D.dMo,D.dMx,D.dMl,D.dMq,D.dMk,D.dMA,D.dMi,D.dMj,D.dMw,D.dMh,D.dMu,D.dMn,D.dMm,D.dMt,D.dMy,D.dMv,D.dMr],A.at("O<lW>"))
D.dt0=w([B.bv,B.br],x.O)
D.dtN=w([B.iD,B.oc,B.dT],x.O)
D.ahI=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aiH=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bnf=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.beU=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aCL=w([D.ahI,D.aiH,D.bnf,D.beU],x.O)
D.duZ=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a6q=w(["top","middle","bottom"],x.s)
D.dwo=w([B.co,B.bl,B.d6],x.O)
D.aD5=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b8H=new A.ac(0,B.G,B.aV,B.H,14)
D.aD8=w([D.b8H],x.V)
D.bm9=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dx3=w([D.agc,D.ZG,D.bm9],x.O)
D.dx4=w([B.b4,B.cX,B.e6],x.O)
D.emL=new A.o(24,-8)
D.ent=new A.o(48,0)
D.emH=new A.o(24,6)
D.dyJ=w([B.H,D.emL,D.ent,D.emH],x.g)
D.dz7=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ejg={top:0,middle:1,bottom:2}
D.dCm=new A.bu(D.ejg,["Top","Middle","Bottom"],x.r)
D.eiR={double:0,single:1,corners:2,none:3}
D.dCs=new A.bu(D.eiR,["Double line","One line","Corners","None"],x.r)
D.ek6={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dDY=new A.bu(D.ek6,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dE9=new A.bu(B.i1,[],A.at("bu<H,+(n,n)>"))
D.ej8={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DK=new A.bu(D.ej8,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.at("bu<n,H>"))
D.dGR=new H.NO(32,null)
D.dGS=new H.NO(40,null)
D.dGT=new H.NO(46,null)
D.aL9=new C.au0(null)
D.elC=new A.o(0,40)
D.elD=new A.o(0,412)
D.elF=new A.o(0,900)
D.elP=new A.o(0,-34)
D.elQ=new A.o(0,-46)
D.elS=new A.o(0,-74)
D.elV=new A.o(100,300)
D.elW=new A.o(10,14)
D.elZ=new A.o(10,-10)
D.em3=new A.o(10,-46)
D.em4=new A.o(10,-58)
D.em5=new A.o(116,442)
D.em7=new A.o(11,-1)
D.em8=new A.o(11,-10)
D.em9=new A.o(11,-21)
D.aLx=new A.o(11,-60)
D.emg=new A.o(14,-2)
D.emh=new A.o(150,520)
D.a8p=new A.o(150,592)
D.emk=new A.o(15,-15)
D.eml=new A.o(16,-1)
D.emp=new A.o(190,444)
D.ems=new A.o(1,5)
D.emA=new A.o(21,-78)
D.emB=new A.o(222,615)
D.Jy=new A.o(225,300)
D.a8s=new A.o(225,574)
D.emK=new A.o(24,-52)
D.emM=new A.o(250,210)
D.emX=new A.o(2,-56)
D.aLL=new A.o(300,0)
D.emY=new A.o(300,440)
D.en0=new A.o(318,476)
D.en3=new A.o(324,144)
D.a8v=new A.o(332,150)
D.en5=new A.o(335,585)
D.en6=new A.o(338,140)
D.en7=new A.o(340,158)
D.en9=new A.o(34,-60)
D.Ea=new A.o(36,-24)
D.enb=new A.o(372,470)
D.enc=new A.o(390,455)
D.enl=new A.o(42,468)
D.enm=new A.o(431,510)
D.enn=new A.o(431,520)
D.eno=new A.o(45,-92)
D.enp=new A.o(46,20)
D.enq=new A.o(46,-92)
D.enr=new A.o(46,-94)
D.ens=new A.o(47,-4)
D.enu=new A.o(48,-4)
D.enC=new A.o(4,-26)
D.enK=new A.o(60,455)
D.enR=new A.o(8,14)
D.enV=new A.o(8,-76)
D.enX=new A.o(95,575)
D.enY=new A.o(98,-24)
D.eo_=new A.o(9,-2)
D.eo0=new A.o(9,-58)
D.aLU=new A.o(9,-79)
D.eo1=new A.o(9,-9)
D.eoE=new A.o(16.5,8)
D.eoG=new A.o(3.2,0)
D.eoI=new A.o(-16.5,8)
D.eoP=new A.o(16.5,2)
D.eoS=new A.o(-3.2,0)
D.ep0=new A.o(9.5,6)
D.ep4=new A.o(-10,14)
D.ep5=new A.o(-10,-12)
D.ep6=new A.o(-10,-58)
D.ep8=new A.o(-11,-1)
D.ep9=new A.o(-11,-10)
D.epb=new A.o(-11,-60)
D.epc=new A.o(-12,-14)
D.epd=new A.o(-12,-16)
D.epk=new A.o(-14,-2)
D.epn=new A.o(-15,-15)
D.epo=new A.o(-15,-3)
D.epq=new A.o(-16,-1)
D.epH=new A.o(-24,-52)
D.epO=new A.o(-2,-34)
D.epP=new A.o(-2,-38)
D.epR=new A.o(-30,-100)
D.a8w=new A.o(-36,-24)
D.eq1=new A.o(-4,-26)
D.eq3=new A.o(-4,-6)
D.eqd=new A.o(-8,-3)
D.eqe=new A.o(-8,-48)
D.eqh=new A.o(-9,-2)
D.eqj=new A.o(-9,-58)
D.eqk=new A.o(-9,-79)
D.eql=new A.o(-9,-9)
D.eqn=new A.o(-9.5,6)
D.eqB=new A.o(-16.5,2)
D.fMj=new A.B("Write a new book",null,B.hl,null,B.K,null,null,null,null,null,null,null)
D.era=new A.D(B.ku,D.fMj,null)
D.h05=new A.B("Tap to go on",null,B.vy,null,null,null,null,null,null,null,null,null)
D.erw=new A.D(B.lg,D.h05,null)
D.ar5=new A.ae(B.hY,18,B.c,null,null,null)
D.fFo=new A.B("Add",null,B.l4,null,null,null,null,null,null,null,null,null)
D.der=w([D.ar5,B.r7,D.fFo],x.p)
D.f9e=new A.c7(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.der,null)
D.erz=new A.D(B.nE,D.f9e,null)
D.erA=new A.D(E.alg,A7.Y0,null)
D.fz_=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIx=new A.B("New Project",null,D.fz_,null,null,null,null,null,null,null,null,null)
D.diP=w([D.ar5,B.ae,D.fIx],x.p)
D.f9h=new A.c7(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.diP,null)
D.erO=new A.D(B.iw,D.f9h,null)
D.fL4=new A.B("Choose your header",null,A0.vx,null,null,null,null,null,null,null,null,null)
D.es9=new A.D(B.hX,D.fL4,null)
D.be7=new A.fk(2.2,null,null,null,null,B.cG,null,null,null,null)
D.feZ=new A.a5(22,22,D.be7,null)
D.bcd=new A.cg(B.A,null,null,D.feZ,null)
D.ese=new A.D(B.a00,D.bcd,null)
D.bCT=new A.R(14,2,14,6)
D.fZc=new A.B("The top of your book. Tap a design to see it.",null,Q.tE,null,null,null,null,null,null,null,null,null)
D.esf=new A.D(D.bCT,D.fZc,null)
D.fKd=new A.B("\ud83c\udfc6 A new record!",null,B.h_,null,null,null,null,null,null,null,null,null)
D.esh=new A.D(B.lg,D.fKd,null)
D.etR=new A.j2(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.etU=new A.j2(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aMv=new A.j2(1,0.9607843137254902,0.48627450980392156,0)
D.JH=new A.j2(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.An=new A.j2(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eu_=new A.j2(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hwK=new C.bjp(null)
D.bxJ=new A.mG(D.hwK,null,B.az,null,null)
D.aQ8=new A.cK(0,0,0,0,null,null,D.bxJ,null)
D.fFq=new A.B("\ud83c\udfc5",null,B.aaO,null,null,null,null,null,null,null,null,null)
D.eyp=new A.cK(null,0,-34,null,null,null,D.fFq,null)
D.eGu=new A.y("E","Sit by the fire again")
D.eM4=new A.y("C","Good Learner")
D.ePv=new A.y("D","Still Growing")
D.eU4=new A.y(-42,42)
D.eVp=new A.y("B","Faithful Listener")
D.eXn=new A.y("A","Keeper of the Family")
D.f_x=new A.b5(-17,0.7,0)
D.f06=new A.b5(-8,0.95,1.3)
D.f19=new A.b5(18,0.65,5.2)
D.f1b=new A.b5(0,1.15,2.6)
D.f1v=new A.b5(9,0.9,3.9)
D.f3m=new A.cu([0,0,1,1])
D.aRD=new A.a1(0,0,520,160)
D.f6g=new A.a1(10,612,440,618)
D.f6h=new A.a1(10,612,440,628)
D.f6k=new A.a1(14,-64,34,-12)
D.f6n=new A.a1(300,336,350,348)
D.a9q=new A.a1(30,96,420,346)
D.f6o=new A.a1(30,-9,46,1)
D.f6p=new A.a1(4,2,11,14)
D.f6r=new A.a1(-8,-12.5,8,-7)
D.f6s=new A.a1(-16.5,-21,16.5,1)
D.f6t=new A.a1(60,342,88,348)
D.Uy=new A.a1(66,-66,94,-36)
D.f6u=new A.a1(6,8,10,14)
D.f6x=new A.a1(95,343,115,348)
D.f6y=new A.a1(-6.5,-74,6.5,-58)
D.f6E=new A.a1(-100,-74,100,-12)
D.f6F=new A.a1(-10,8,-6,14)
D.f6G=new A.a1(-11,2,-4,14)
D.f6H=new A.a1(-11,-70,11,-56)
D.f6O=new A.a1(-13,-24,13,-4)
D.f6U=new A.a1(-15,-21,15,0)
D.f6X=new A.a1(-16,-21,16,1)
D.f6Y=new A.a1(-16,-21,16,2)
D.f70=new A.a1(-16,-26,16,-6)
D.f7a=new A.a1(-230,-26,230,26)
D.f7y=new A.a1(-38,-26,12,-6)
D.f7C=new A.a1(-3,-70,3,-63)
D.f7D=new A.a1(-44,-22,44,0)
D.f7F=new A.a1(-46,-9,-30,1)
D.aRH=new A.a1(-80,-190,80,20)
D.f7M=new A.a1(-8,-26,40,-6)
D.f7N=new A.a1(-98,-80,92,-75)
D.f7O=new A.a1(-9,-15,9,-9)
D.fYL=new A.B("Let the AI write it from your tree",null,B.iB,null,B.K,null,null,null,null,null,null,null)
D.bLg=new A.dl(1,B.cm,D.fYL,null)
D.db0=w([E.a3I,B.ae,D.bLg],x.p)
D.f8S=new A.c7(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.db0,null)
D.fF4=new A.B("Save member",null,B.cg,null,null,null,null,null,null,null,null,null)
D.dqV=w([D.arX,B.ae,D.fF4],x.p)
D.f92=new A.c7(B.aL,B.bb,B.i,B.l,null,B.p,null,0,D.dqV,null)
D.bWR=new A.ae(B.id,14,B.b2,null,null,null)
D.fsC=new A.F(!0,B.b2,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIX=new A.B("Cashier",null,D.fsC,null,null,null,null,null,null,null,null,null)
D.djl=w([D.bWR,B.bm,D.fIX],x.p)
D.f96=new A.c7(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.djl,null)
D.fF5=new A.B("Transfer & settings",null,B.di,null,null,null,null,null,null,null,null,null)
D.bJ_=new A.bz(1,B.bc,D.fF5,null)
D.d2k=w([D.arx,B.au,D.bJ_],x.p)
D.f97=new A.c7(B.aL,B.e,B.i,B.l,null,B.p,null,0,D.d2k,null)
D.fdF=new A.av(16,40)
D.fdK=new A.av(22,64)
D.fdR=new A.av(280,88)
D.feF=new A.a5(30,null,null,null)
D.fEa=new A.B("The teacher is writing\u2026",null,B.AJ,null,null,null,null,null,null,null,null,null)
D.bdl=new A.cg(B.A,null,null,D.fEa,null)
D.hqD=new A.bI("w",x.W)
D.ff4=new A.a5(null,56,D.bdl,D.hqD)
D.ffS=new A.hG(5,8,8,1,null)
D.fg_=new A.hG(2,12,12,1.05,null)
D.fID=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fgI=new A.b1(D.fID,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fIS=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aTY=new A.b1(D.fIS,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fRl=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhb=new A.b1(D.fRl,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h18=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fhg=new A.b1(D.h18,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fL2=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fhn=new A.b1(D.fL2,null,null,null,null,null,null,null,null,null,null,null,null,B.h3,!1,null,null,null,B.t,null)
D.fZp=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aU1=new A.b1(D.fZp,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fL0=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fhN=new A.b1(D.fL0,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fFH=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fhP=new A.b1(D.fFH,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fON=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fhV=new A.b1(D.fON,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h1T=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fiA=new A.b1(D.h1T,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fXF=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fiZ=new A.b1(D.fXF,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h1c=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fj1=new A.b1(D.h1c,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fT1=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fj3=new A.b1(D.fT1,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fMX=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new A.b1(D.fMX,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fMY=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fk4=new A.b1(D.fMY,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fIF=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fkm=new A.b1(D.fIF,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fKF=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fkG=new A.b1(D.fKF,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fSs=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fkW=new A.b1(D.fSs,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fNN=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fkX=new A.b1(D.fNN,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fxG=new A.F(!0,B.bD,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmy=new A.en("\u2665",null,null,B.cJ,null,null,null,null,null,null,D.fxG)
D.fuV=new A.F(!0,B.aP,null,null,null,null,28,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmO=new A.en("Today: how well do you know the family?",null,null,B.cJ,null,null,null,null,null,null,D.fuV)
D.fn4=new A.F(!0,B.q7,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foc=new A.F(!0,D.kM,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foD=new A.F(!0,D.kM,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foH=new A.F(!0,B.cO,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foQ=new A.F(!0,D.fz,null,null,null,null,15,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp0=new A.F(!0,D.fz,null,null,null,null,13,B.I,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpk=new A.t6(!0,B.tq,null,null,null,null,B.dD,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpA=new A.F(!0,B.cO,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpD=new A.F(!0,D.kM,null,null,null,null,18,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpE=new A.F(!0,B.cO,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpJ=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpM=new A.F(!0,B.cO,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqh=new A.F(!0,B.b2,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqi=new A.F(!0,B.ac,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqk=new A.F(!0,B.aP,null,null,null,null,15.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqM=new A.F(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVe=new A.F(!0,B.aT,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVg=new A.F(!0,D.lB,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fra=new A.F(!0,B.cO,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaT=new A.t6(!0,B.U3,null,null,null,null,B.dD,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vs=new A.F(!0,B.cO,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frk=new A.F(!0,B.T,null,null,null,null,12.5,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frp=new A.F(!0,D.fz,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frN=new A.F(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsY=new A.F(!0,D.fz,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVq=new A.F(!0,D.fz,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fth=new A.F(!0,B.ac,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fts=new A.F(!0,D.fz,null,null,null,null,null,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftu=new A.F(!0,null,null,null,null,null,8,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftA=new A.F(!0,L.iZ,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVu=new A.F(!0,D.fz,null,null,null,null,14.5,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuv=new A.F(!0,D.fz,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuO=new A.F(!0,D.fz,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuQ=new A.F(!0,B.T,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuS=new A.F(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fve=new A.F(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A6.Iy,null,null,null)
D.aVJ=new A.F(!0,D.fz,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvC=new A.F(!0,B.T,null,null,null,null,17,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvY=new A.F(!0,B.fh,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwl=new A.F(!0,B.bR,null,null,null,null,8,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwp=new A.F(!0,B.bC,null,null,null,null,11,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new A.F(!0,B.c,null,null,null,null,13.5,B.I,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwE=new A.F(!0,D.fz,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwM=new A.F(!0,D.G5,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwV=new A.F(!0,B.b2,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxj=new A.F(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxq=new A.F(!0,B.ac,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dn,null,null,null)
D.fxR=new A.F(!0,B.cO,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy_=new A.F(!0,B.cG,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyc=new A.F(!0,D.lC,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW3=new A.F(!0,D.fz,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KO=new A.F(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW5=new A.F(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dn,null,null,null)
D.fyw=new A.F(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyA=new A.F(!0,G.no,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyY=new A.F(!0,B.b2,null,null,null,null,13,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzf=new A.F(!0,D.fz,null,null,null,null,15,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzC=new A.F(!0,B.c,null,null,null,null,null,B.I,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA0=new A.F(!0,D.fz,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAw=new A.F(!0,D.fz,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAB=new A.F(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAK=new A.F(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abl=new A.F(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abn=new A.F(!0,D.lB,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCr=new A.F(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCJ=new A.F(!0,B.aP,null,null,null,null,27,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCR=new A.F(!0,L.iZ,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCZ=new A.F(!0,L.iZ,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDs=new A.B("Time:",null,B.hj,null,null,null,null,null,null,null,null,null)
D.fDO=new A.B("\ud83c\udfae",null,K.abc,null,null,null,null,null,null,null,null,null)
D.fDP=new A.B("Themes",null,B.pQ,null,null,null,null,null,null,null,null,null)
D.fEi=new A.B("\ud83c\udfb2",null,B.xl,null,null,null,null,null,null,null,null,null)
D.fEm=new A.B("Delete this game?",null,B.iB,null,null,null,null,null,null,null,null,null)
D.fEt=new A.B("Add Item",null,B.cg,null,null,null,null,null,null,null,null,null)
D.ftb=new A.F(!0,B.T,null,null,null,null,22,B.I,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEU=new A.B("Debt receipt",null,D.ftb,null,B.K,null,null,null,null,null,null,null)
D.aWj=new A.F(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFc=new A.B("Person who owes",null,D.aWj,null,null,null,null,null,null,null,null,null)
D.fG9=new A.B("Notes",null,B.ab0,null,null,null,null,null,null,null,null,null)
D.fGA=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fs3=new A.F(!0,B.c,null,null,null,null,11,B.I,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGD=new A.B("Share",null,D.fs3,null,null,null,null,null,null,null,null,null)
D.fHz=new A.B("Move your family trees",null,I.abj,null,null,null,null,null,null,null,null,null)
D.fIe=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fIR=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fJe=new A.B("SAVE",null,D.KO,null,null,null,null,null,null,null,null,null)
D.fJS=new A.B("The round button is the right answer.",null,Q.xi,null,null,null,null,null,null,null,null,null)
D.fKc=new A.B("Remove this book?",null,B.h_,null,null,null,null,null,null,null,null,null)
D.fyV=new A.F(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dn,null,null,null)
D.fKK=new A.B("Fireside Stories",null,D.fyV,null,null,null,null,null,null,null,null,null)
D.aWP=new A.B("Download",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fLr=new A.B("What should the AI do?",null,B.di,null,null,null,null,null,null,null,null,null)
D.frI=new A.F(!0,D.lB,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLG=new A.B("REPORT CARD",null,D.frI,null,null,null,null,null,null,null,null,null)
D.fMq=new A.B("Calabash Catch",null,B.KR,null,null,null,null,null,null,null,null,null)
D.fMT=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fNk=new A.B("\ud83c\udfe1",null,B.EH,null,null,null,null,null,null,null,null,null)
D.fO1=new A.B("Ribbon bookmark",null,B.jw,null,null,null,null,null,null,null,null,null)
D.fAv=new A.F(!0,B.b2,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOw=new A.B("NGMY.ORG",null,D.fAv,null,B.K,null,null,null,null,null,null,null)
D.fPP=new A.B("Scan family tree QR",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fwF=new A.F(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQB=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fwF,null,B.K,null,null,null,null,null,null,null)
D.fRP=new A.B("Delete",null,B.Vm,null,null,null,null,null,null,null,null,null)
D.fRQ=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRY=new A.B("Thumbnail",null,B.pQ,null,null,null,null,null,null,null,null,null)
D.fSy=new A.B("Save the cover",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fSD=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.xn,null,B.K,null,null,null,null,null,null,null)
D.fT2=new A.B("Your photos",null,B.pQ,null,null,null,null,null,null,null,null,null)
D.fTi=new A.B("Create Project",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fTG=new A.B("\u2b50 stars",null,B.VA,null,null,null,null,null,null,null,null,null)
D.fTU=new A.B("Design your cover",null,A0.vx,null,null,null,null,null,null,null,null,null)
D.fU_=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fU2=new A.B("PICTURE",null,M.vC,null,null,null,null,null,null,null,null,null)
D.fU4=new A.B("\ud83c\udfaf",null,D.VP,null,null,null,null,null,null,null,null,null)
D.fUq=new A.B("Paid",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fUs=new A.B("You can undo it right after.",null,Q.xi,null,null,null,null,null,null,null,null,null)
D.fV_=new A.B("Print",null,B.vz,null,null,null,null,null,null,null,null,null)
D.fVo=new A.B("Amount owed",null,D.aWj,null,null,null,null,null,null,null,null,null)
D.fVD=new A.B("Got it",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fWe=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fWh=new A.B("Add to budget",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fWJ=new A.B("Debtor signature",null,B.ab0,null,null,null,null,null,null,null,null,null)
D.fWT=new A.B("Change icon",null,B.ab_,null,null,null,null,null,null,null,null,null)
D.fXG=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,T.tG,null,null,null,null,null,null,null,null,null)
D.fY7=new A.B("Family tree QR",null,B.cC,null,null,null,null,null,null,null,null,null)
D.fYd=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.VO,null,null,null,null,null,null,null,null,null)
D.fYB=new A.B("Download",null,B.vz,null,null,null,null,null,null,null,null,null)
D.fYC=new A.B("The person who planted this tree has not made a game yet.",null,B.AS,null,null,null,null,null,null,null,null,null)
D.fYG=new A.B("Change",null,B.pQ,null,null,null,null,null,null,null,null,null)
D.fZv=new A.B("Clear all",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fZy=new A.B("WHAT SHOULD IT CHANGE?",null,M.vC,null,null,null,null,null,null,null,null,null)
D.h_7=new A.B("COLOUR",null,M.vC,null,null,null,null,null,null,null,null,null)
D.h_l=new A.B("Do it",null,B.cC,null,null,null,null,null,null,null,null,null)
D.h_o=new A.B("Create Tree",null,B.cg,null,null,null,null,null,null,null,null,null)
D.h_x=new A.B("Give me another clue",null,D.KO,null,null,null,null,null,null,null,null,null)
D.h0r=new A.B("Create Family Tree",null,B.fa,null,null,null,null,null,null,null,null,null)
D.h0B=new A.B("THE TEACHER EXPLAINS THESE",null,T.tG,null,null,null,null,null,null,null,null,null)
D.fn3=new A.F(!0,E.kp,null,null,null,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0H=new A.B("Write the first page myself",null,D.fn3,null,null,null,null,null,null,null,null,null)
D.h1f=new A.B("Use this header",null,B.cC,null,null,null,null,null,null,null,null,null)
D.h1m=new A.B("Create Project",null,E.aW0,null,null,null,null,null,null,null,null,null)
D.hrY=new C.acw(1,"header")
D.acp=new C.acw(2,"projects")
D.hrZ=new C.acw(3,"cashier")
D.acq=new C.acw(4,"familyTree")
D.hFG=new C.cFZ(0,"start")
D.hFH=new C.cG_(0,"start")
D.hsm=new C.ZE(null)
D.htn=new C.a_6(null)
D.dE6=new A.bu(B.i1,[],A.at("bu<n,GA>"))
D.dm1=w([],x.dE)
D.dm2=w([],x.M)
D.htU=new C.bgB(D.dE6,D.dm1,D.dm2,0,0,null,null)
D.b0c=new C.a_X(0,"intro")
D.b0d=new C.a_X(1,"countdown")
D.acE=new C.a_X(2,"ask")
D.WI=new C.a_X(3,"reveal")
D.b0e=new C.a_X(4,"end")
D.hwM=new C.te(F.Ge,D.lC,B.cO,F.lD,5,!1,!1,!1,0,null)
D.hwN=new C.te(F.Ge,B.es,B.cO,B.bP,2,!0,!0,!1,2,B.cO)
D.hwO=new C.te(B.oj,B.cG,B.cO,F.lD,2,!0,!1,!1,2,B.av)
D.hwP=new C.te(F.Ge,B.dJ,B.cO,F.lD,5,!1,!1,!1,1,null)
D.hwQ=new C.te(F.ZW,D.aiH,B.cO,F.lD,4,!0,!1,!0,0,null)
D.b0h=new C.te(F.ZW,B.dK,B.cO,F.lD,3,!0,!1,!0,2,null)
D.b0i=new C.te(F.mU,D.lC,B.c,F.lD,0,!1,!1,!0,0,null)
D.b0j=new C.te(B.oj,B.aF,B.cO,B.bP,2,!0,!0,!1,2,B.dK)
D.b0k=new C.te(B.oj,G.no,B.ib,F.lD,5,!1,!1,!0,3,null)
D.hwR=new C.te(B.oj,B.dK,B.cO,F.lD,0,!0,!1,!1,0,B.aF)
D.b0l=new C.te(F.Ge,B.es,B.cO,B.bP,1,!1,!0,!1,1,null)
D.b0m=new C.te(F.FO,B.av,B.aF,F.lD,4,!0,!1,!0,2,null)
D.hwS=new C.te(F.mU,B.av,B.es,F.lD,3,!0,!1,!1,0,null)
D.hwT=new C.te(B.oj,B.dJ,B.cO,B.bP,1,!1,!0,!1,1,null)
D.hwU=new C.te(F.FO,D.ahI,B.c,F.lD,5,!1,!1,!0,0,null)
D.hxx=new C.a0u(null)
D.hFP=new C.afT(0,"still")
D.X4=new C.afT(1,"walk")
D.b0N=new C.afT(2,"pound")
D.b0O=new C.afT(3,"drum")
D.hBx=new C.a1M(0,"greet")
D.b0P=new C.a1M(1,"teach")
D.acY=new C.a1M(2,"ask")
D.hBy=new C.a1M(3,"feedback")
D.b0Q=new C.a1M(4,"end")
D.X9=new C.a24(0,"intro")
D.Xa=new C.a24(1,"asking")
D.B7=new C.a24(2,"reacting")
D.ad7=new C.a24(3,"driving")
D.ad8=new C.a24(4,"arrived")
D.adb=new C.aLt(0,"projects")
D.b1d=new C.aLt(1,"cashier")
D.hDz=new C.aLt(2,"familyTree")})()};
(a=>{a["pT52CrghR8t9G76h0isGM3B7D+g="]=a.current})($__dart_deferred_initializers__);