((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,Q,A0,S,A9,L,H,E,P,Aa,T,Ab,U,Ac,Ad,A1,Ae,Af,R,M,A2,Ag,A3,A4,Ah,A5,Ai,Aj,Ak,A6,Al,Am,A7,An,G,Ao,Ap,Aq,A8,Ar,V,O,As,W,At,Au,X,Y,F,Av,I,K,Z,C={
bFG(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bFG=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vR(null,""),$async$bFG)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nl(b1)
s=A.c_(b3.length,null,!1,x.h5)
r=x.f,q=x.N,p=x.z,o=x.j,n=x.gE,m="Translate these book pages into "+b4+". Translate the MEANING, not the words: write what a native speaker would naturally say, never a literal copy of the other language (many phrases, like \"family tree\", have no word-for-word twin and would not be understood). Keep the warm tone, every person's name and every place name exactly as written, and keep the paragraph breaks (a blank line between paragraphs). Do not add or remove any fact. If the source is flowery or exaggerated, say it plainly and warmly. Write people's names with normal capitals (Ikungu Ele), not in ALL CAPITALS. Write natural, correct "+b4+".",l=null,k=0
case 4:if(!(j=b3.length,k<j)){w=6
break}i=k+3
h=B.d.dq(b3,k,Math.min(i,j))
j=h.length
g=b3.length
b2.$2("Translating pages "+(k+1)+" to "+(k+j)+" of "+g+"\u2026",k/g)
j=A.cQ(b4,"Swahili",0)?y.q:""
g=h.length
f=A.a([],n)
for(e=h.length,d=0;d<h.length;h.length===e||(0,A.J)(h),++d){a0=h[d]
f.push(A.I(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Y.aw(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.rf(t,a1,B.hY,"book",E.GB),$async$bFG)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Rs(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.LT(l)?y.k:y.y)
for(j=J.a5(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a3(r.a(j.h(a2,a7)),q,p):B.cD
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3B(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFG,v)},
ai3(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ai3=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vR(null,""),$async$ai3)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nl(b6)
s=x.S
r=A.cW(c1,0,A.dB(4,"count",s),A.U(c1).c)
q=H.a3o(new A.N(r,new C.fOs(),r.$ti.k("N<ak.E,n>")).aM(0," "))
r=q==="sw"
if(!r){p=A.af("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fOr(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Y.aw(b7,null)+"\nAllowed values: style one of "+B.d.aM(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ai3)
case 6:l=c5
k=H.Rs(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apE(s,D.dE1,r.b(k.h(0,"cover"))?A.a3(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a4=B.d.dq(j,a1,Math.min(a3,a2))
a2=r?"Changing the page\u2026":"Checking pages "+(a1+1)+" to "+(a1+a4.length)+" of "+j.length+"\u2026"
b9.$2(a2,a1/j.length)
a2=A.a([],e)
for(a5=a4.length,a6=0;a6<a4.length;a4.length===a5||(0,A.J)(a4),++a6){i=a4[a6]
a7=c1[i]
a2.push(A.I(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Y.aw(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ai3)
case 10:l=c5
k=l==null?null:H.Rs(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.de(a8,d),a5=J.aU(a2.a),a2=a2.$ti,a7=new A.lj(a5,a2.k("lj<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a5(a9)
b1=A.aH(b0.h(a9,"index"))
i=b1==null?null:B.i.L(b1)
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
p=A.cE(new A.b7(h,s),new C.fOt(),s.k("M.E"),p)
p=H.a3o(A.pG(p,3,A.a4(p).k("M.E")).aM(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3B(s,b9),$async$ai3)
case 13:b5=c5
for(s=J.a5(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apE(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ai3,v)},
hFf(d,e,f){return A.cf(null,B.w.j(0.65),!1,null,new C.fY0(e,f),d,null,!0,!0,x.g2)},
apE:function apE(d,e,f){this.a=d
this.b=e
this.c=f},
fOs:function fOs(){},
fOr:function fOr(d){this.a=d},
fOt:function fOt(){},
fY0:function fY0(d,e){this.a=d
this.b=e},
bDu(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bDu=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aV(b1,new C.fBz())){u=null
w=1
break}t=B.d.cD(b1,new C.fBA())
s=$.Q()
r=new A.q_(new A.pz())
q=A.zv(r,D.aRD)
p=A.K()
p.r=B.c.gp(0)
q.ar(D.aRD,p)
o=A.K()
o.r=B.T.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bw
o.e=B.dP
n=new C.fBF(t)
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
return A.b(r.o0().xD(520,160),$async$bDu)
case 4:w=3
return A.b(b3.hs(B.hh),$async$bDu)
case 3:b0=b3
u=b0==null?null:J.eT(B.dN.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDu,v)},
fM8(d){return C.ikr(d)},
ikr(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fM8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bjH()
n=d.x!=null&&d.zH(null).length===0
if(d.x!=null)t=n?D.Am:D.JJ
else t=d.gUC()?D.JJ:D.aMw
w=3
return A.b(C.bDu(d.ax),$async$fM8)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoi(s)
r=A.a5m(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aMw}else{p.c=C.xl(q,!0)
p.b=n?D.Am:D.JJ}r.a45(A.h7v(new C.fMa(p,d,new C.fMb(),t,n,o),null,D.bGe,B.x3))
u=r.hL(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fM8,v)},
fSN(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fSN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fM8(d),$async$fSN)
case 3:t=f
s=B.a.i(d.b)
r=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aC(q,0,40)
u=Af.Hs(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fSN,v)},
fBz:function fBz(){},
fBA:function fBA(){},
fBF:function fBF(d){this.a=d},
fMb:function fMb(){},
fMa:function fMa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fM9:function fM9(){},
fYt(d,e){var w=0,v=A.j(x.H)
var $async$fYt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,B.w.j(0.55),!0,null,new C.fYx(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fYt)
case 2:return A.h(null,v)}})
return A.i($async$fYt,v)},
bG6(d,e,f,g){return C.isC(d,e,f,g)},
isC(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bG6=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gan(e.split(",")):e
r=B.cI.aN(t)}catch(q){r=null}if(r==null||r.length===0){d.M(x.q).f.U(D.fkK)
w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.fYp(g,r,f),d,null,!0,!0,x.H),$async$bG6)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bG6,v)},
fYy(d,e){var w=0,v=A.j(x.H)
var $async$fYy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.cf(null,null,!0,null,new C.fYB(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fYy)
case 2:return A.h(null,v)}})
return A.i($async$fYy,v)},
b_H:function b_H(d,e){this.c=d
this.a=e},
c8m:function c8m(){},
bcU:function bcU(d,e){this.b=d
this.a=e},
fYx:function fYx(d,e){this.a=d
this.b=e},
fYu:function fYu(d){this.a=d},
fYv:function fYv(d,e,f){this.a=d
this.b=e
this.c=f},
fYw:function fYw(d,e){this.a=d
this.b=e},
fYp:function fYp(d,e,f){this.a=d
this.b=e
this.c=f},
fYn:function fYn(d){this.a=d},
fYo:function fYo(d,e,f){this.a=d
this.b=e
this.c=f},
fYB:function fYB(d,e){this.a=d
this.b=e},
fYz:function fYz(d){this.a=d},
fYA:function fYA(d,e,f){this.a=d
this.b=e
this.c=f},
fGo(d,e){var w=0,v=A.j(x.y),u,t
var $async$fGo=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a39(d),$async$fGo)
case 3:t=g
J.nR(t,new C.fGp(e))
u=A.aiI(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fGo,v)},
fGp:function fGp(d){this.a=d},
apQ:function apQ(d,e,f){this.c=d
this.d=e
this.a=f},
aEz:function aEz(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dQw:function dQw(d,e){this.a=d
this.b=e},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQk:function dQk(d,e,f){this.a=d
this.b=e
this.c=f},
dQj:function dQj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dQi:function dQi(d,e){this.a=d
this.b=e},
dQl:function dQl(d,e){this.a=d
this.b=e},
dQf:function dQf(){},
dQg:function dQg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQe:function dQe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dQ_:function dQ_(d){this.a=d},
dQ0:function dQ0(d,e,f){this.a=d
this.b=e
this.c=f},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dPZ:function dPZ(d){this.a=d},
dQ6:function dQ6(d,e){this.a=d
this.b=e},
dPY:function dPY(d){this.a=d},
dQ7:function dQ7(d,e,f){this.a=d
this.b=e
this.c=f},
dQ8:function dQ8(d,e,f){this.a=d
this.b=e
this.c=f},
dPX:function dPX(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d,e,f){this.a=d
this.b=e
this.c=f},
dPW:function dPW(d,e){this.a=d
this.b=e},
dQa:function dQa(d,e){this.a=d
this.b=e},
dPV:function dPV(d){this.a=d},
dQb:function dQb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPT:function dPT(){},
dPN:function dPN(d){this.a=d},
dPO:function dPO(d){this.a=d},
dPU:function dPU(d,e){this.a=d
this.b=e},
dQc:function dQc(d,e){this.a=d
this.b=e},
dPS:function dPS(d){this.a=d},
dQd:function dQd(d){this.a=d},
dPR:function dPR(){},
dQ2:function dQ2(d,e){this.a=d
this.b=e},
dPQ:function dPQ(d){this.a=d},
dQ3:function dQ3(d,e,f){this.a=d
this.b=e
this.c=f},
dPP:function dPP(d,e){this.a=d
this.b=e},
dPM:function dPM(d,e){this.a=d
this.b=e},
dQ4:function dQ4(d){this.a=d},
dQ5:function dQ5(d,e,f){this.a=d
this.b=e
this.c=f},
dQz:function dQz(){},
dQA:function dQA(d,e){this.a=d
this.b=e},
dQx:function dQx(d){this.a=d},
dQy:function dQy(d){this.a=d},
dQt:function dQt(d,e){this.a=d
this.b=e},
dQu:function dQu(d){this.a=d},
dQm:function dQm(d,e,f){this.a=d
this.b=e
this.c=f},
dQn:function dQn(d,e,f){this.a=d
this.b=e
this.c=f},
dQo:function dQo(d,e,f){this.a=d
this.b=e
this.c=f},
dQp:function dQp(d,e,f){this.a=d
this.b=e
this.c=f},
dQq:function dQq(d,e,f){this.a=d
this.b=e
this.c=f},
dQr:function dQr(d,e,f){this.a=d
this.b=e
this.c=f},
dQs:function dQs(d,e,f){this.a=d
this.b=e
this.c=f},
dQB:function dQB(){},
dQC:function dQC(){},
dQD:function dQD(){},
dQE:function dQE(d){this.a=d},
dQv:function dQv(d,e){this.a=d
this.b=e},
hB6(d){return B.d.dP(D.a4G,new C.fHe(d),new C.fHf())},
uQ:function uQ(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fHe:function fHe(d){this.a=d},
fHf:function fHf(){},
alT:function alT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWq:function aWq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TV:function TV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgx:function bgx(){this.d=$
this.c=this.a=null},
dgc:function dgc(d,e){this.a=d
this.b=e},
dga:function dga(d,e){this.a=d
this.b=e},
dgb:function dgb(){},
dgd:function dgd(d,e){this.a=d
this.b=e},
hlt(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nw(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LF(d,e){return C.ij2(d,e)},
ij2(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LF=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LF)
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
break}o=J.de(p,x.f)
o=A.cE(o,new C.fJJ(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fJK(),n),n.k("M.E"))
B.d.aZ(o,new C.fJL())
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
return A.i($async$LF,v)},
Bz(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bz=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bz)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b8(f,new C.fX3(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.Y.aw(r,null)),$async$Bz)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bz,v)},
aSt(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSt=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LF(d,e),$async$aSt)
case 2:u=h
t=J.cC(u)
s=t.bj(u,new C.h4u(f))
if(s===-1)t.c3(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bz(d,e,u),$async$aSt)
case 3:return A.h(null,v)}})
return A.i($async$aSt,v)},
bDX(d,e,f){var w=0,v=A.j(x.H),u
var $async$bDX=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LF(d,e),$async$bDX)
case 2:u=h
J.nR(u,new C.fGg(f))
w=3
return A.b(C.Bz(d,e,u),$async$bDX)
case 3:return A.h(null,v)}})
return A.i($async$bDX,v)},
bEb(d,e){return C.ij1(d,e)},
ij1(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bEb=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bEb)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aS(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.OI
w=1
break}p=B.Y.aQ(0,q,null)
if(x.f.b(p)){o=A.a3(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aH(o.h(0,"emblem"))
k=k==null?null:B.i.L(k)
if(k==null)k=0
if(D.DI.al(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aH(o.h(0,"titleSize"))
if(i==null)i=null
i=B.i.D(i==null?25:i,18,36)
h=B.d.q(D.a6o,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a5I,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a5E,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d5P,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Iq(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.OI
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.OI
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bEb,v)},
Sy(d,e,f){return C.is6(d,e,f)},
is6(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Sy=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Sy)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Y.aw(f.aj(),null)),$async$Sy)
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
return A.i($async$Sy,v)},
S1(d,e){return C.ij3(d,e)},
ij3(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
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
return A.b(C.LF(d,e),$async$S1)
case 8:if(!j.cI(g)){n=B.a.i(d.toLowerCase())
m=J.lJ(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
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
ahm(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S1(d,e),$async$ahm)
case 3:s=g
r=J.a5(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.J(s,t)
w=5
return A.b(A.az(),$async$ahm)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahm)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahm,v)},
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
fJJ:function fJJ(){},
fJK:function fJK(){},
fJL:function fJL(){},
fX3:function fX3(){},
h4u:function h4u(d){this.a=d},
fGg:function fGg(d){this.a=d},
Iq:function Iq(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bRj:function bRj(d){this.a=d},
isr(d,e,f,g,h,i,j){return A.a7(d,!1).ca(A.e9(new C.fXF(j,i,f,e,h,g),!0,null,x.H))},
RX(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$RX=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S1(h,g),$async$RX)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.M(x.q).f.U(D.aTX)
u=!1
w=1
break}w=4
return A.b(C.hFf(d,f,e),$async$RX)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahm(h,g),$async$RX)
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
return A.b(C.Sy(h,r,new C.Iq("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$RX)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$RX,v)},
fXF:function fXF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_w:function a_w(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBx:function aBx(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dgS:function dgS(d){this.a=d},
dgR:function dgR(d,e){this.a=d
this.b=e},
dgG:function dgG(d,e){this.a=d
this.b=e},
dgD:function dgD(d,e){this.a=d
this.b=e},
dge:function dge(d){this.a=d},
dgf:function dgf(d,e){this.a=d
this.b=e},
dgH:function dgH(d){this.a=d},
dgn:function dgn(d){this.a=d},
dgl:function dgl(d){this.a=d},
dgm:function dgm(d){this.a=d},
dgo:function dgo(d){this.a=d},
dgE:function dgE(d){this.a=d},
dgF:function dgF(){},
dgj:function dgj(d){this.a=d},
dgk:function dgk(d,e){this.a=d
this.b=e},
dgp:function dgp(d){this.a=d},
dgq:function dgq(d,e){this.a=d
this.b=e},
dgQ:function dgQ(d){this.a=d},
dgP:function dgP(d,e){this.a=d
this.b=e},
dgO:function dgO(d){this.a=d},
dgA:function dgA(d){this.a=d},
dgz:function dgz(d){this.a=d},
dgB:function dgB(d){this.a=d},
dgg:function dgg(d,e){this.a=d
this.b=e},
dgC:function dgC(d,e){this.a=d
this.b=e},
dgt:function dgt(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgs:function dgs(){},
dgv:function dgv(d){this.a=d},
dgw:function dgw(d){this.a=d},
dgx:function dgx(d,e){this.a=d
this.b=e},
dgy:function dgy(d,e,f){this.a=d
this.b=e
this.c=f},
dgr:function dgr(d,e){this.a=d
this.b=e},
dgJ:function dgJ(d){this.a=d},
dgI:function dgI(){},
dgK:function dgK(d){this.a=d},
dgL:function dgL(d){this.a=d},
dgM:function dgM(d){this.a=d},
dgN:function dgN(d,e){this.a=d
this.b=e},
dgh:function dgh(d){this.a=d},
dgi:function dgi(d){this.a=d},
a_A:function a_A(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgW:function bgW(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
diE:function diE(d){this.a=d},
diF:function diF(d){this.a=d},
diD:function diD(d){this.a=d},
diG:function diG(d){this.a=d},
diC:function diC(d){this.a=d},
diH:function diH(d){this.a=d},
diB:function diB(d){this.a=d},
diI:function diI(d,e){this.a=d
this.b=e},
diA:function diA(d,e){this.a=d
this.b=e},
diJ:function diJ(d,e){this.a=d
this.b=e},
a_y:function a_y(d,e,f,g,h,i,j){var _=this
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
aBA:function aBA(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dh6:function dh6(d,e){this.a=d
this.b=e},
dh5:function dh5(d,e){this.a=d
this.b=e},
dha:function dha(d){this.a=d},
dh9:function dh9(d,e){this.a=d
this.b=e},
dh7:function dh7(d){this.a=d},
dh8:function dh8(d){this.a=d},
dhb:function dhb(d){this.a=d},
dhc:function dhc(d){this.a=d},
dh4:function dh4(d,e){this.a=d
this.b=e},
dh3:function dh3(d,e){this.a=d
this.b=e},
KN:function KN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZO:function ZO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cPu:function cPu(d){this.a=d},
cPv:function cPv(){},
cPw:function cPw(d){this.a=d},
be8:function be8(d,e,f){this.b=d
this.c=e
this.a=f},
be_:function be_(d,e){this.b=d
this.a=e},
uR:function uR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_6:function a_6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be6:function be6(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d83:function d83(d,e,f){this.a=d
this.b=e
this.c=f},
d82:function d82(d,e){this.a=d
this.b=e},
d8s:function d8s(d){this.a=d},
d8f:function d8f(){},
d8t:function d8t(d){this.a=d},
d8e:function d8e(){},
d8u:function d8u(d,e){this.a=d
this.b=e},
d8d:function d8d(d,e){this.a=d
this.b=e},
d8v:function d8v(d,e){this.a=d
this.b=e},
d8c:function d8c(d,e){this.a=d
this.b=e},
d8w:function d8w(d){this.a=d},
d8b:function d8b(){},
d8x:function d8x(d,e){this.a=d
this.b=e},
d8a:function d8a(d,e){this.a=d
this.b=e},
d8y:function d8y(d){this.a=d},
d8n:function d8n(d,e){this.a=d
this.b=e},
d8z:function d8z(d){this.a=d},
d8A:function d8A(d){this.a=d},
d8C:function d8C(d){this.a=d},
d8D:function d8D(d){this.a=d},
d8m:function d8m(d,e){this.a=d
this.b=e},
d8E:function d8E(d,e){this.a=d
this.b=e},
aIA:function aIA(d){this.a=d},
bju:function bju(d){this.a=d},
bcg:function bcg(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
alU:function alU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1N:function a1N(d,e){this.a=d
this.b=e},
alV:function alV(d,e,f,g,h,i){var _=this
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
bRt:function bRt(d){this.a=d},
bRn:function bRn(d){this.a=d},
bRm:function bRm(d,e){this.a=d
this.b=e},
bRw:function bRw(d){this.a=d},
bRo:function bRo(d){this.a=d},
bRp:function bRp(d){this.a=d},
bRs:function bRs(d){this.a=d},
bRr:function bRr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRu:function bRu(d,e){this.a=d
this.b=e},
bRv:function bRv(){},
bRq:function bRq(d){this.a=d},
bRk:function bRk(d,e){this.a=d
this.b=e},
bRl:function bRl(d){this.a=d},
bp2:function bp2(d,e){this.b=d
this.a=e},
aBy:function aBy(){},
iw(d,e){var w
$.Q()
w=A.K()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bw
w.e=B.dP
return w},
bDw(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bp(j.save())
j.translate(e.a,e.b)
d.pj(0,a0?-f:f,f)
w=A.bs(B.ik,8,36)
v=B.w.j(0.3)
u=$.Q()
t=A.K()
t.r=v.gp(0)
d.bZ(w,t)
w=a1===D.X7
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.epU,new A.o(-4+v,-2),C.iw(q,5))
d.ah(D.enu,new A.o(4-v,-2),C.iw(q,5))}else{t=A.bs(B.Jz,14,40)
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
break}if(a1===D.b0K){n=-52+w*14
d.ah(new A.o(10,n-22),new A.o(10,n+44),C.iw(F.FO,3.4))
d.ah(D.eqb,new A.o(9,n),C.iw(q,4))
d.ah(D.enT,new A.o(10,n),C.iw(q,4))}else if(a1===D.b0L){d.ah(D.eoZ,new A.o(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.ah(D.elX,new A.o(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.ah(D.ep3,new A.o(-12-w,v),C.iw(q,4))
d.ah(D.aLy,new A.o(12+w,v),C.iw(q,4))}w=A.K()
w.r=q.gp(0)
d.ar(D.f7G,w)
m=new A.o(0,-77-r)
w=A.bs(m,22,19)
v=A.K()
v.r=q.gp(0)
d.bZ(w,v)
w=h.y
if(w!=null){v=A.bs(m.a4(0,K.vn),15,24)
u=A.K()
u.r=w.gp(0)
d.bZ(v,u)
u=m.a4(0,D.elR)
v=A.K()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bs(m.a4(0,B.to),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.cC(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a4(0,D.eq9),m.a4(0,D.eoX),C.iw(v,2.2))
d.ah(m.a4(0,D.enS),m.a4(0,D.elO),C.iw(v,2.2))}if(w===4){w=m.a4(0,D.eqd)
u=A.K()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a4(0,D.enU)
w=A.K()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a4(0,D.eoK)
v=A.K()
v.r=B.ia.gp(0)
d.N(w,0.9,v)
v=m.a4(0,D.eoy)
w=A.K()
w.r=B.ia.gp(0)
d.N(v,0.9,w)
if(i){l=m.a4(0,K.a8k)
w=A.bs(l,21,22)
v=A.K()
v.r=D.lD.gp(0)
d.bZ(w,v)
v=A.bs(l.a4(0,K.aLv),5,12)
w=A.K()
w.r=D.bfS.gp(0)
d.bZ(v,w)
d.ah(l.a4(0,D.eq5),l.a4(0,K.aLS),C.iw(B.cO,1.4))
d.ah(D.aLy,new A.o(15,-88-r),C.iw(q,3.6))}j.restore()},
hzH(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
J.bp(r.save())
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
C.i7h(d,g,h,i,j)
s=(k==null?D.a8q:k).a-w>=0?1:-1
w=A.K()
w.a=B.LP
w.sav(A.jy(new A.o(s*70,-60),new A.o(-s*70,-60),A.a([D.aic.j(0.5),D.aic.j(0.12),D.bna.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.ar(D.aRH,w)
r.restore()
r.restore()},
i7h(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
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
s=A.bl(D.f7H,B.ts)
p=$.Q()
o=A.K()
o.r=u.gp(0)
a1.am(s,o)
o=A.bl(D.f7C,B.hO)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a1.am(o,n)
n=A.bl(D.f7Q,B.hO)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a1.am(n,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f7J,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f6s,s)
s=a1.c
J.bp(s.save())
s.translate(a3.w,0)
J.bp(s.save())
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
J.bp(s.save())
a1.mQ(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dcx[j]
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bw
i.e=B.dP
a1.ah(new A.o(-34+u,-64),new A.o(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.ap(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
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
i.d=B.bw
i.e=B.dP
a1.ah(new A.o(g,-64),new A.o(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bw
i.e=B.dP
a1.ah(new A.o(-30,h),new A.o(30,h),i)}break
default:a1.ah(D.epz,D.emC,C.iw(a2.c.j(0.9),3))}a1.ah(D.eq6,D.ep5,C.iw(B.w.j(0.18),1.6))
a1.ah(D.elW,K.aLA,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.Q()
i=A.K()
i.r=u.gp(0)
a1.ar(D.f6o,i)
s.restore()
i=A.K()
i.r=a0.gp(0)
a1.ar(D.f6C,i)
n=new A.aF(k.r,B.ai,e,e,A.a([],n))
n.E(new A.aZ(-9,-66))
n.E(new A.c6(0,-57,9,-66))
n.E(new A.c6(0,-60,-9,-66))
k=A.K()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cC(D.f6L,0.1,2.941592653589793,!1,C.iw(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a8u
n=25*q
k=23*q
i=9*q
C.hvY(a1,new A.o(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.E8:o
C.hvY(a1,new A.o(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.enm,D.eni,C.iw(D.ajb,4))
a1.ah(D.enk,D.eng,C.iw(D.Gb.j(0.7),1.4))
u=A.K()
u.r=B.cO.gp(0)
a1.N(D.enj,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bp(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.hX(0,a3.f)
a1.bU(0,r)
C.i7e(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
hvY(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcJ(),q=r===0?B.ik:s.eW(0,r),p=B.i.D(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.o(o,w)
if(o*i<0)v=new A.o(-o,-w)
u=e.a4(0,q.aO(0,n)).a4(0,v.aO(0,m))
t=e.a4(0,q.aO(0,p))
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
w=t.a4(0,new A.o(i*w*0.45,w*0.1))
o=A.K()
o.r=k.gp(0)
d.N(w,l*0.28,o)},
i7e(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bs(B.vm,40,38)
$.Q()
v=A.K()
v.r=c0.gp(0)
c2.bZ(w,v)}if(c1===4){$.Q()
w=A.K()
w.r=c0.gp(0)
c2.N(D.epf,9.5,w)
w=A.K()
w.r=c0.gp(0)
c2.N(D.emc,9.5,w)}w=A.bs(D.eqt,10,6)
v=$.Q()
u=A.K()
u.r=c8.gp(0)
c2.bZ(w,u)
u=A.bs(D.eoH,10,6)
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
u.sav(A.wa(D.epW,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iw(c8.j(0.5),0.8)
c2.cC(D.f7S,3.455751918948773,2.5132741228718345,!1,s)
c2.cC(D.f6v,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.epc,D.ep0,s)
c2.ah(D.em8,D.em_,s)
c2.cC(D.f6K,2.2,1.4,!1,s)
c2.cC(D.f6t,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.r=c0.gp(0)
c2.N(new A.o(p*14.5,-3+o*17.5),4.3,n)}p=A.K()
p.r=c0.gp(0)
c2.cC(D.f6Y,3.141592653589793,3.141592653589793,!0,p)
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
c2.ah(D.ep1,D.em0,C.iw(G.np,1.4))
o=A.K()
o.r=c0.gp(0)
c2.N(D.epi,3,o)
o=A.K()
o.r=c0.gp(0)
c2.N(D.emd,3,o)
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.E(new A.aZ(-13,6))
o.E(new A.c6(-12,22,0,26))
o.E(new A.c6(12,22,13,6))
o.E(new A.c6(8,13,0,12))
o.E(new A.c6(-8,13,-13,6))
o.E(new A.bv())
p=A.K()
p.r=B.iD.gp(0)
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
c2.cC(D.f74,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cC(D.f6S,3.6,2.2,!1,C.iw(o,1.2))
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
c2.N(D.em1,3,p)
break
case 3:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f71,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.b=B.a9
o.c=0.9
o.r=p.gp(0)
o.d=B.bw
o.e=B.dP
c2.ah(new A.o(r*3.6,-19+Math.abs(r)*0.8),new A.o(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=I.aCj[l]
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.b=B.a9
o.c=4.5
o.r=c0.gp(0)
o.d=B.bw
o.e=B.dP
c2.ah(new A.o(k,0),new A.o(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.r=p.gp(0)
c2.N(new A.o(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f70,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(K.a8k,K.a8j,C.iw(p,1))
break
default:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f6w,3.267256359733385,2.8902652413026098,!0,p)}i=B.i.D(c4.b,0,1)*0.4+0.1
p=A.bs(D.eqf,5,8)
o=D.afv.j(i)
n=A.K()
n.r=o.gp(0)
c2.bZ(p,n)
n=A.bs(D.eoT,5,8)
p=D.afv.j(i)
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
g=B.i.F(c5*0.33+c6*0.37,1)>0.965?1:0
p=c4.d
o=c4.c>0.8?1.25:1
f=(1-g)*(1-p*0.6)*o
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.fJ[l]
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
J.bp(d.save())
a6=A.a([],w)
a4=new A.aF(v,B.ai,b9,b9,a6)
a6.push(new A.jP(A.bs(new A.o(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.E7(a4.glV().a.snapshot())
d.clipPath(a3.a,$.np(),!0)
a3=new A.ao(B.O,B.M,B.R,B.S,B.P)
a3.r=D.bjD.gp(0)
c2.N(new A.o(a7,a8),2.1,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.P)
a3.r=B.w.gp(0)
c2.N(new A.o(a7,a8),1.05,a3)
a3=new A.ao(B.O,B.M,B.R,B.S,B.P)
a3.r=B.c.gp(0)
c2.N(new A.o(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.Z8:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ao(B.O,B.M,B.R,B.S,B.P)
a9.b=B.a9
a9.c=a4
a9.r=a3.gp(0)
a9.d=B.bw
a9.e=B.dP
a3=p?0.8:0
c2.cC(A.bs(new A.o(a5,-3+a3),Math.max(1.2,a1),7.3500000000000005),3.2986722862692828,2.827433388230814,!1,a9)
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
b2.d=B.bw
b2.e=B.dP
c2.ah(new A.o(a5-a4,b0-a6+0.4),new A.o(a5+a4,b0-0.6-a3),b2)}b3=B.i.D(c4.a,0,1)
if(o)b4=D.btA
else{u=A.ar(c8,D.bnc,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.i.D(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aF(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.E(new A.aZ(w,11.5))
b8.E(new A.c6(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.E(new A.c6(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.E(new A.bv())
v=A.K()
v.r=D.bmw.gp(0)
c2.af(b8,v)
J.bp(d.save())
c2.mQ(0,b8)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c2.ar(new A.a1(w,11,w+b6*2,13.2),u)
u=A.bs(new A.o(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.K()
w.r=D.btF.gp(0)
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
c2.af(w,u)}}if(c4.b>0.2){c2.cC(D.f6J,-1.2,2.2,!1,C.iw(c8.j(0.5),0.8))
c2.cC(D.f6y,2.141592653589793,2.2,!1,C.iw(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.K()
w.r=c1.gp(0)
c2.N(D.eoA,1.7,w)
w=A.K()
w.r=c1.gp(0)
c2.N(D.eow,1.7,w)}},
icR(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.Q(),f=new A.q_(new A.pz()),e=A.zv(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.K()
a2.sav(A.jy(B.I,new A.o(0,a0*0.46),D.d9i,D.d0Q,B.x,h))
e.ar(new A.a1(0,0,0+d,0+a0),a2)
a2=e.c
J.bp(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bU(0,a1)
w=new A.e1()
w.cY(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.N(new A.o(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bp(a2.save())
a2.translate(200,120)
e.hX(0,-0.5)
d=A.K()
a0=x.O
d.sav(A.wa(B.I,230,A.a([D.bio,B.L],a0),h,B.x,h,h,0))
e.bZ(D.f7e,d)
a2.restore()
d=A.K()
d.sav(A.wa(D.a8t,58,A.a([D.blz,B.L],a0),h,B.x,h,h,0))
e.N(D.a8t,58,d)
d=A.K()
d.r=D.bh5.gp(0)
e.N(D.a8t,24,d)
d=A.K()
d.r=D.Zy.gp(0)
e.N(D.emW,5,d)
d=A.K()
d.r=D.Zy.gp(0)
e.N(D.en_,3.4,d)
d=A.K()
d.r=D.Zy.gp(0)
e.N(D.emZ,2.4,d)
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
g=[D.bfF,D.bhF,D.bnw][s]
u=$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cvK[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.b=B.a9
u.c=2.4
u.r=D.ZR.gp(0)
u.d=B.bw
u.e=B.dP
e.ah(new A.o(o,k),new A.o(g,d),u)
g=A.bs(new A.o(g,k-27),11,46)
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=D.ZR.gp(0)
e.bZ(g,u)
d=A.bs(new A.o(o-12,d),8,24)
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=D.ZR.gp(0)
e.bZ(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=D.bh8.j(0.8).gp(0)
e.N(new A.o(20+v*52+g*7,400+d*5),1.2,u)}g=A.K()
g.sav(A.jy(D.elv,D.elx,D.d2O,B.Dt,B.x,h))
e.ar(new A.a1(-200,412,650,1300),g)
j=new A.e1()
j.cY(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bs(new A.o(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h8()?B.c:B.w
d=new A.ao(B.O,B.M,B.R,B.S,B.P)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.bZ(u,d)}J.bp(a2.save())
a2.translate(225,590)
e.pj(0,1,0.34)
g=A.K()
g.sav(A.wa(B.I,250,A.a([D.bos,D.bi_,D.bqm],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.I,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ar(D.ahV,D.bgD,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.Q()
a0=new A.ao(B.O,B.M,B.R,B.S,B.P)
a0.b=B.a9
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bw
a0.e=B.dP
e.ah(new A.o(o+i*2,k),new A.o(o+i*5,g+Math.abs(i)*3),a0)}}C.i5n(e)
for(l=0;l<3;++l)C.i8P(e,D.aA7[l])
C.i8E(e,D.emQ)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.Q()
a0=new A.ao(B.O,B.M,B.R,B.S,B.P)
a0.b=B.a9
a0.c=2.4
a0.r=D.ZM.gp(0)
a0.d=B.bw
a0.e=B.dP
e.ah(new A.o(o,452+g),new A.o(o+1,436+d),a0)}e.ah(D.elY,D.emh,C.iw(D.bhm,1.6))
a2.restore()
return f.o0()},
i5n(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.Q().r,g=x.v,f=new A.aF(h,B.ai,i,i,A.a([],g))
f.E(new A.aZ(358,462))
f.E(new A.kR(354,422,370,382,374,332))
f.E(new A.aq(410,332))
f.E(new A.kR(416,382,432,422,428,462))
f.E(new A.bv())
w=A.K()
w.sav(A.jy(new A.o(354,0),new A.o(430,0),D.dwW,U.zO,B.x,i))
d.af(f,w)
v=new A.e1()
v.cY(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.b=B.a9
p.c=1.1
p.r=q.gp(0)
p.d=B.bw
p.e=B.dP
d.ah(new A.o(t,s),new A.o(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.ddV[o]
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
r.r=D.age.gp(0)
r.d=B.bw
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=A.ar(D.bhe,D.bnv,v.ai()).j(0.92).gp(0)
d.N(new A.o(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.b=B.a9
r.c=1.2
r.r=D.ZM.gp(0)
r.d=B.bw
r.e=B.dP
d.ah(new A.o(w,q+8),new A.o(w,q+22),r)
q=A.bs(new A.o(w,q+28),13,7)
w=new A.ao(B.O,B.M,B.R,B.S,B.P)
w.r=D.boL.gp(0)
d.bZ(q,w)}},
i8P(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bs(new A.o(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.Q(),b3=A.K()
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
u.sav(A.jy(new A.o(b0,0),new A.o(v,0),D.de0,U.zO,B.x,a4))
b4.af(w,u)
t=new A.e1()
t.cY(B.o.V(a5*7))
v=b4.c
J.bp(v.save())
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
n.d=B.bw
n.e=B.dP
b4.ah(new A.o(r,q),new A.o(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ahQ.j(0.75)
n=A.K()
n.r=o.gp(0)
b4.ar(new A.a1(b0,u,b0+p,u+7),n)
for(u=a7/5,o=b1+12,n=b1+20,m=b0+2,l=0;l<B.i.bh(u);++l){k=m+l*10
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
j.r=D.lD.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aF(b2,B.ai,a4,a4,u)
b2=a6-8
f.E(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.i.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iw(D.ahQ.j(0.7),1.6))
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
m.r=D.ai1.gp(0)
b4.af(b2,m)
m=A.K()
m.r=D.ai1.gp(0)
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
b1.sav(A.jy(new A.o(a5-n,0),new A.o(a5+n,0),D.dhv,U.zO,B.x,a4))
b4.af(e,b1)
J.bp(v.save())
b4.mQ(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h8()?B.w:D.bgM).j(0.16)
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.b=B.a9
i.c=0.9
i.r=n.gp(0)
i.d=B.bw
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
n.d=B.bw
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
v.r=D.bnW.gp(0)
v.d=B.bw
v.e=B.dP
b4.ah(new A.o(a2,a3),new A.o(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.E(new A.aZ(a5-2.5,b0))
a9.E(new A.aq(a5,u-7))
a9.E(new A.aq(a5+2.5,b0))
a9.E(new A.bv())
b0=A.K()
b0.r=D.bk8.gp(0)
b4.af(a9,b0)},
i8E(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aCg[s]
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.b=B.a9
q.c=3
q.r=D.ZM.gp(0)
q.d=B.bw
q.e=B.dP
d.ah(new A.o(r,u),new A.o(r,t),q)}u=A.bs(e.a4(0,K.aLu),24,36)
t=$.Q()
r=A.K()
r.r=D.bsP.gp(0)
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
u.r=D.agV.gp(0)
d.af(t,u)},
i7W(d){switch(B.o.F(d,8)){case 0:return D.b0i
case 1:return D.b0g
case 2:return D.b0f
case 3:return D.b0e
case 4:return D.b0h
case 5:return D.b0j
case 6:return D.hwR
default:return D.hwQ}},
Sw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.bp3()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a8u:j
w.as=k==null?D.E8:k
C.hzH(d,e,p,C.i7W(m),w,s,m,l)},
hBc(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bT7:function bT7(){var _=this
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
td:function td(d,e,f,g,h,i,j,k,l,m){var _=this
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
bp3:function bp3(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
amc:function amc(){this.b=this.a=null},
aWv:function aWv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
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
bT1:function bT1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT2:function bT2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT3:function bT3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT4:function bT4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT5:function bT5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bT6:function bT6(){},
bSZ:function bSZ(d){this.a=d},
afT:function afT(d,e){this.a=d
this.b=e},
adS:function adS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
N1(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bRJ(s)
s.bBL(d)
return s},
H1(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d4(new A.Y(g,new C.fup(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("cj.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.cW(w,0,A.dB(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lr(e,v,B.d.co(v,f),h,i,"tree",j)},
iu1(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h4l(c1),c3=x.s,c4=A.a([],c3)
for(w=c5.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)c4.push(B.a.i(w[u].b))
c4=A.jz(c4,c0)
t=A.C(c4,A.a4(c4).k("cj.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].x)
if(s.length!==0)c4.push(s)}c4=A.jz(c4,c0)
r=A.C(c4,A.a4(c4).k("cj.E"))
c4=A.a([],c3)
for(v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){s=B.a.i(w[u].z)
if(s.length!==0)c4.push(s)}c4=A.jz(c4,c0)
q=A.C(c4,A.a4(c4).k("cj.E"))
for(c4=w.length,v=A.U(t).k("Y<1>"),s=v.k("M.E"),p=A.U(w).k("Y<1>"),o=p.k("M.E"),n=x.S,u=0;u<w.length;w.length===c4||(0,A.J)(w),++u){m=w[u]
l=B.a.i(m.b)
k=m.d
j=k==null
if(j)i=b3
else{h=c5.c
h===$&&A.c()
i=h.h(0,k)}if(i!=null){h=i.c
if(h===D.wp)g="father"
else g=h===D.ot?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h4n(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H1(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h4o(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lr("True or false: "+h+" is the "+g+" of "+l+".",D.aB8,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lr("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aB8,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.G8(m)
h=a0.length
if(h!==0){a1=a0[c6.az(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h4p(l,a0,c5),v),s)
e=a1.c
if(e===D.wp)e="son"
else e=e===D.ot?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H1(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
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
c2.$2("count",C.H1(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iu<1>"),a3=new A.iu(a0,1,b3,a2),a3.n5(a0,1,b3,e.c),a3=new A.bP(a3,a3.gI(0),a2.k("bP<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H1(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.art(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h4q(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H1(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h4r(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wp
if(e)a2=b7
else a2=f===D.ot?b8:b9
if(e)f=b7
else f=f===D.ot?b8:b9
c2.$2("grand",C.H1(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aN7(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.az(k)].b)
j=A.C(new A.Y(t,new C.h4s(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H1(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cOr)
h=l+" was born in "+k
c2.$2("place",C.H1(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d3R)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H1(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.J)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H1(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.iX(b1,b3,b3)
c2.$2("year",C.H1(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bE7(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.N1(d),l=new A.e1()
l.cY(f)
w=C.iu1(m,l,g)
for(v=new A.dr(w,w.r,w.e);v.C();)J.hjx(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aV(u,new C.fHQ(n,w))))break
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
if(v<e){v=A.C(D.az9,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hzO(o,l))}}else if(!g&&v>3){o=C.hzO(D.az9[l.az(14)],l)
t[t.length-1-l.az(3)]=o}return t},
hzO(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lr(d.a,w,B.d.co(w,v),d.d,d.e,d.f,d.r)},
hEN(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.N1(a2),a1=new A.e1()
a1.cY(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a0.G8(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){n=u[r]
m=a0.G8(n)
l=A.U(m)
k=new A.iu(m,0,5,l.k("iu<1>"))
k.n5(m,0,5,l.c)
j=k.dn(0)
if(new A.N(j,new C.fW3(),A.U(j).k("N<1,G>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.J)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.J)(j),++i)g.push(C.aSe(a0,j[i]))
w.push(new C.aue("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
J.c5(e.c4(0,a0.amC(q),new C.fW4()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fi(d)
v=A.a([],v)
for(u=A.cW(d,0,A.dB(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bP(u,u.gI(0),t.k("bP<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cC(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.J)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r)s.push(C.aSe(a0,v[r]))
w.push(new C.aue("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aQJ(d){return B.d.ao4(D.aBD,new C.fDG(d))},
ijA(d){return A.nA(new A.Y(D.aBD,new C.fKE(d),x.av))},
bSx(d){return C.hOv(d)},
hOv(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSx=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bSx)
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
return A.i($async$bSx,v)},
BU(d,e){return C.hOs(d,e)},
hOs(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BU)
case 7:r=g
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BU)
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
return A.i($async$BU,v)},
bSw(d,e,f){return C.hOt(d,e,f)},
hOt(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSw=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bSw)
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
return A.i($async$bSw,v)},
BV(d,e,f,g){return C.hOu(d,e,f,g)},
hOu(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BV=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BV)
case 7:r=i
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BV)
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
return A.i($async$BV,v)},
bGm(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h6o(d,e,f,g){return new C.akO(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hMz(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aU(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.ck)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cW(w,0,A.dB(4,"count",x.S),u).dn(0)
B.d.v(w,A.c_(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aH(d.h(0,"c"))
v=v==null?null:B.i.L(v)
v=B.o.D(v==null?0:v,0,3)
u=A.aH(d.h(0,"s"))
u=u==null?null:B.i.L(u)
return C.h6o(w,v,B.o.D(u==null?20:u,5,60),t)},
hkH(d){var w,v,u,t,s,r,q=J.a5(d),p=q.h(d,"id")
p=J.k(p==null?"":p)
w=q.h(d,"title")
w=J.k(w==null?"":w)
v=A.a([],x.b)
u=x.j
q=J.aU(u.b(q.h(d,"qs"))?u.a(q.h(d,"qs")):B.ck)
u=x.f
t=x.N
s=x.z
while(q.C()){r=q.gR(q)
if(u.b(r))v.push(C.hMz(A.a3(r,t,s)))}return new C.ML(p,w,v)},
heS(d){var w,v=A.a([],x.c)
for(w=J.aU(d.z);w.C();)v.push(C.hkH(w.gR(w)))
return v},
aSe(d,e){var w=e.c===D.ot
if(d.amC(e)===0&&d.G8(e).length!==0)return w?0:1
if(d.G8(e).length!==0||d.art(e)!=null)return w?2:3
return w?4:5},
hFU(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N1(a4),a3=new A.e1()
a3.cY(a5)
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
j=i.h(0,k)}h=a2.G8(m)
g=a2.art(m)
f=a2.aN7(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.af("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wp)k="father"
else k=k===D.ot?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wp)k="father"
else k=k===D.ot?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h4L())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h4M(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iu(a0,0,3,i.k("iu<1>"))
a1.n5(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e0(k,a3)
a1=C.aSe(a2,m)
i=new A.iu(l,0,4,p)
i.n5(l,0,4,r)
w.push(new C.bav(d,a1,i.dn(0),k))
if(w.length>=5)break}return w},
hxq(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a0(d,"My ")?1:0},
hF_(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N1(a4),a3=new A.e1()
a3.cY(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a2.G8(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){l=u[r]
k=a2.G8(l)
j=A.U(k)
i=new A.iu(k,0,4,j.k("iu<1>"))
i.n5(k,0,4,j.c)
h=i.dn(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.J)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aV(h,new C.fWA(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iu(i,0,k,m)
j.n5(i,0,k,n)
f=j.dn(0)
j=B.a.i(l.b)
k=C.aSe(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.J)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.J)(h),++g)e.push(C.aSe(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.J)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.J)(f),++g)a0.push(C.aSe(a2,f[g]))
w.push(new C.a9X(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lr:function lr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bRJ:function bRJ(d){this.b=d
this.c=$},
bRK:function bRK(){},
bRL:function bRL(d){this.a=d},
fup:function fup(d){this.a=d},
h4l:function h4l(d){this.a=d},
h4m:function h4m(){},
h4n:function h4n(d){this.a=d},
h4o:function h4o(d,e){this.a=d
this.b=e},
h4p:function h4p(d,e,f){this.a=d
this.b=e
this.c=f},
h4k:function h4k(d,e){this.a=d
this.b=e},
h4q:function h4q(d){this.a=d},
h4r:function h4r(d){this.a=d},
h4s:function h4s(d,e,f){this.a=d
this.b=e
this.c=f},
h4j:function h4j(d,e){this.a=d
this.b=e},
fHQ:function fHQ(d,e){this.a=d
this.b=e},
aue:function aue(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fW3:function fW3(){},
fW4:function fW4(){},
zE:function zE(d,e,f){this.a=d
this.b=e
this.c=f},
fDG:function fDG(d){this.a=d},
fKE:function fKE(d){this.a=d},
akO:function akO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMx:function bMx(){},
ML:function ML(d,e,f){this.a=d
this.b=e
this.c=f},
bav:function bav(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h4L:function h4L(){},
h4M:function h4M(d){this.a=d},
a9X:function a9X(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWA:function fWA(d){this.a=d},
bhM:function bhM(d,e,f){var _=this
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
ak6:function ak6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ak7:function ak7(d,e,f,g,h){var _=this
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
bKI:function bKI(d){this.a=d},
bKD:function bKD(){},
bKJ:function bKJ(){},
bKB:function bKB(){},
bKC:function bKC(){},
bKH:function bKH(d){this.a=d},
bKE:function bKE(d,e){this.a=d
this.b=e},
bKG:function bKG(d,e){this.a=d
this.b=e},
bKF:function bKF(d,e){this.a=d
this.b=e},
bKA:function bKA(d){this.a=d},
bcW:function bcW(d,e){this.b=d
this.a=e},
QF:function QF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBw:function aBw(d,e,f){this.b=d
this.c=e
this.a=f},
aA0:function aA0(d,e,f){this.a=d
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
_.cR$=e
_.b9$=f
_.c=_.a=null},
cqz:function cqz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqA:function cqA(d){this.a=d},
cqy:function cqy(d){this.a=d},
cqB:function cqB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cqC:function cqC(){},
cqD:function cqD(d,e){this.a=d
this.b=e},
cqE:function cqE(){},
cqF:function cqF(d){this.a=d},
cqv:function cqv(d){this.a=d},
cqw:function cqw(d,e){this.a=d
this.b=e},
cqx:function cqx(d,e,f){this.a=d
this.b=e
this.c=f},
cqq:function cqq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqs:function cqs(d,e){this.a=d
this.b=e},
cqt:function cqt(d,e){this.a=d
this.b=e},
cqr:function cqr(d,e){this.a=d
this.b=e},
cqp:function cqp(){},
cqu:function cqu(){},
bcp:function bcp(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cQy:function cQy(){},
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
cFv:function cFv(d){this.a=d},
cFu:function cFu(d){this.a=d},
cFD:function cFD(d,e){this.a=d
this.b=e},
cFE:function cFE(d,e){this.a=d
this.b=e},
cFF:function cFF(d){this.a=d},
cFC:function cFC(d){this.a=d},
cFG:function cFG(d){this.a=d},
cFH:function cFH(d,e){this.a=d
this.b=e},
cFI:function cFI(){},
cFJ:function cFJ(d){this.a=d},
cFx:function cFx(d){this.a=d},
cFy:function cFy(d,e){this.a=d
this.b=e},
cFw:function cFw(d,e){this.a=d
this.b=e},
cFz:function cFz(){},
cFA:function cFA(){},
cFB:function cFB(d,e){this.a=d
this.b=e},
azM:function azM(){},
aGZ:function aGZ(){},
hcC(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.brp((w-450*u)/2,(v-900*u)/2,u)},
afF:function afF(){},
f6Y:function f6Y(d){this.a=d},
aKM:function aKM(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fh6:function fh6(d){this.a=d},
am2:function am2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am3:function am3(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.q8$=f
_.LU$=g
_.an8$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bSv:function bSv(d){this.a=d},
bSu:function bSu(){},
bSs:function bSs(d){this.a=d},
bSq:function bSq(){},
bSr:function bSr(d){this.a=d},
bSn:function bSn(d,e){this.a=d
this.b=e},
bSo:function bSo(){},
bSp:function bSp(d){this.a=d},
bSt:function bSt(d,e){this.a=d
this.b=e},
bSm:function bSm(d){this.a=d},
bt5:function bt5(d,e){this.b=d
this.a=e},
f6Z:function f6Z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f7_:function f7_(d,e,f){this.a=d
this.b=e
this.c=f},
f70:function f70(d,e,f){this.a=d
this.b=e
this.c=f},
f71:function f71(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f72:function f72(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f73:function f73(){},
am0:function am0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
am1:function am1(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.q8$=f
_.LU$=g
_.an8$=h
_.bx$=i
_.a9$=j
_.c=_.a=null},
bS8:function bS8(){},
bSj:function bSj(d,e){this.a=d
this.b=e},
bSk:function bSk(d){this.a=d},
bSl:function bSl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSf:function bSf(){},
bSe:function bSe(d,e){this.a=d
this.b=e},
bSg:function bSg(d,e){this.a=d
this.b=e},
bSh:function bSh(){},
bSi:function bSi(d){this.a=d},
bSa:function bSa(d){this.a=d},
bSb:function bSb(d){this.a=d},
bSc:function bSc(d){this.a=d},
bS9:function bS9(d,e){this.a=d
this.b=e},
bSd:function bSd(d){this.a=d},
bjC:function bjC(d,e){this.b=d
this.a=e},
drR:function drR(){},
a25:function a25(d,e){this.a=d
this.b=e},
alX:function alX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alY:function alY(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.q8$=e
_.LU$=f
_.an8$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
bRV:function bRV(d){this.a=d},
bRU:function bRU(){},
bRT:function bRT(){},
bRN:function bRN(){},
bRO:function bRO(){},
bRS:function bRS(d,e,f){this.a=d
this.b=e
this.c=f},
bRR:function bRR(d){this.a=d},
bRP:function bRP(d,e){this.a=d
this.b=e},
bRQ:function bRQ(d){this.a=d},
bj1:function bj1(d,e){this.b=d
this.a=e},
aBz:function aBz(){},
bgz:function bgz(){},
aBB:function aBB(){},
bgA:function bgA(){},
aBC:function aBC(){},
bgB:function bgB(){},
uv(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j9,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.q(u,A.A(v,B.l,u,B.e,B.Q,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.n),u,u,u,u,B.On,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hlu(d,e,f,g,h,i,j){return new C.alZ(i,h,d,j,e,f,g,null)},
a6v:function a6v(d,e){this.c=d
this.a=e},
bj8:function bj8(d){this.a=d},
tF:function tF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bRM:function bRM(d){this.a=d},
Is:function Is(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Wg:function Wg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blU:function blU(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e1J:function e1J(d,e){this.a=d
this.b=e},
e1K:function e1K(d){this.a=d},
e1L:function e1L(d,e){this.a=d
this.b=e},
e1H:function e1H(d){this.a=d},
e1I:function e1I(d){this.a=d},
e1G:function e1G(d){this.a=d},
e1E:function e1E(d){this.a=d},
e1F:function e1F(d){this.a=d},
e1D:function e1D(d,e){this.a=d
this.b=e},
e1M:function e1M(d){this.a=d},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1O:function e1O(d,e){this.a=d
this.b=e},
e1P:function e1P(d,e){this.a=d
this.b=e},
e1S:function e1S(d,e){this.a=d
this.b=e},
e1T:function e1T(d,e){this.a=d
this.b=e},
e1U:function e1U(d,e){this.a=d
this.b=e},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1W:function e1W(d,e){this.a=d
this.b=e},
e1X:function e1X(d,e,f){this.a=d
this.b=e
this.c=f},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e1Z:function e1Z(d,e){this.a=d
this.b=e},
e1Q:function e1Q(d){this.a=d},
e1R:function e1R(d){this.a=d},
a_Y:function a_Y(d,e){this.a=d
this.b=e},
alZ:function alZ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
am_:function am_(d){var _=this
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
bS6:function bS6(d){this.a=d},
bS7:function bS7(d){this.a=d},
bS5:function bS5(d){this.a=d},
bRX:function bRX(d){this.a=d},
bRY:function bRY(d){this.a=d},
bRW:function bRW(d){this.a=d},
bS2:function bS2(d,e,f){this.a=d
this.b=e
this.c=f},
bS3:function bS3(d){this.a=d},
bS_:function bS_(d,e){this.a=d
this.b=e},
bS0:function bS0(d,e,f){this.a=d
this.b=e
this.c=f},
bS4:function bS4(){},
bS1:function bS1(d,e){this.a=d
this.b=e},
bRZ:function bRZ(d){this.a=d},
TW:function TW(d,e){this.c=d
this.a=e},
alW:function alW(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bRx:function bRx(d){this.a=d},
bRy:function bRy(d){this.a=d},
bRI:function bRI(){},
bRH:function bRH(d,e,f){this.a=d
this.b=e
this.c=f},
bRC:function bRC(d,e){this.a=d
this.b=e},
bRB:function bRB(d,e){this.a=d
this.b=e},
bRD:function bRD(d){this.a=d},
bRE:function bRE(d,e){this.a=d
this.b=e},
bRF:function bRF(d,e){this.a=d
this.b=e},
bRA:function bRA(d,e){this.a=d
this.b=e},
bRG:function bRG(d,e,f){this.a=d
this.b=e
this.c=f},
bRz:function bRz(d,e){this.a=d
this.b=e},
ii0(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aiW(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fHi(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yX)m.push(l===D.wp?"male":"female")
l=u.w
k=A.af(a3,!0,!1,!1,!1).cE(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.af(a3,!0,!1,!1,!1).cE(k)
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fHg(u,f),p),new C.fHh(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aM(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aM(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aC(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
ii1(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aiW(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fHn(v,e)
q=new C.fHl(v)
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
d=A.d4(new A.b7(p,d),d.k("M.E"))
n=A.C(d,A.a4(d).k("cj.E"))
B.d.fi(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eG(l,new C.fHm(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.al(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aM(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i2J(d,e,f,g){var w,v,u=C.ii2(d,e)
if(u<=0||f.length<=u)return new A.afj(!1,D.Dv,f)
if(g.q(0,e.a))return new A.afj(!1,D.Dv,f)
w=A.U(f).c
v=A.cW(f,0,A.dB(u,"count",x.S),w).dn(0)
return new A.afj(!0,A.cW(f,u,null,w).dn(0),v)},
i2K(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aiW(d3),d2=d1.length
if(d2===0)return D.htW
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.c4(0,t.a,new C.dhj(t))}s=new C.dhA(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dhs(r)
for(p=new A.dr(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dhr(r)
l=A.T(w,x.do)
for(p=new A.dr(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c5(l.c4(0,k,new C.dhk()),o)}h=new C.dhq(s)
g=new C.dhp(l,r)
p=v.$ti.k("b7<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b7(v,p),new C.dhl(h),o),o.k("M.E"))
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
a9=new C.dhy(new C.dhu(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dr(v,v.r,v.e),j=a2.gam7(a2);o.C();){b0=o.d
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
b7=new C.dhi(a2,new C.dhz(),b6,a3,b4,v,a4,a5,a6,b5)
for(d2=a8.length,u=0;u<a8.length;a8.length===d2||(0,A.J)(a8),++u){b8=a8[u]
w=a7.h(0,b8)
w.toString
b7.$2(b8,w)}for(d2=new A.dr(b4,b4.r,b4.e),b9=1/0,c0=0,c1=16;d2.C();){w=d2.d.b
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
b4.n(0,b8,new C.GB(o,new A.o(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.KU(c5.a,new A.o(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dhm(c6,b4))
for(d2=new A.ch(a4,a4.$ti.k("ch<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aU(c7.b);j.C();){i=j.gR(j)
if(b6.al(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.o(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eG(j,new C.dhn(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dho())
c6.push(new C.aKH(new A.o(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bgF(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hAw(d){var w=A.af("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
huF(d,e,f,g,h,i,j,k,l,m,n){return new C.a0a(k,f,j,e,l,n,m,d,g,h,i,null)},
aDz(d,e,f,g,h,i,j){return new C.bks(i,d,e,f,j,h,g,null)},
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
e3o:function e3o(d){this.a=d},
e3n:function e3n(d){this.a=d},
e3q:function e3q(d,e){this.a=d
this.b=e},
e3r:function e3r(d,e){this.a=d
this.b=e},
e3s:function e3s(d){this.a=d},
e3m:function e3m(d,e){this.a=d
this.b=e},
e3p:function e3p(d){this.a=d},
e3u:function e3u(d){this.a=d},
e3t:function e3t(d,e){this.a=d
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
e2P:function e2P(d){this.a=d},
e2N:function e2N(d){this.a=d},
e2O:function e2O(d){this.a=d},
e2Q:function e2Q(d,e){this.a=d
this.b=e},
e2K:function e2K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2b:function e2b(d){this.a=d},
e2c:function e2c(d,e){this.a=d
this.b=e},
e2t:function e2t(d){this.a=d},
e2r:function e2r(d){this.a=d},
e2s:function e2s(d,e){this.a=d
this.b=e},
e2u:function e2u(d){this.a=d},
e2v:function e2v(d,e){this.a=d
this.b=e},
e2J:function e2J(d,e){this.a=d
this.b=e},
e2q:function e2q(d){this.a=d},
e2p:function e2p(d){this.a=d},
e2o:function e2o(d,e){this.a=d
this.b=e},
e2G:function e2G(){},
e2H:function e2H(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2F:function e2F(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2z:function e2z(d){this.a=d},
e2A:function e2A(d,e,f){this.a=d
this.b=e
this.c=f},
e2y:function e2y(d,e){this.a=d
this.b=e},
e2B:function e2B(d,e){this.a=d
this.b=e},
e2w:function e2w(d,e){this.a=d
this.b=e},
e2x:function e2x(){},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2D:function e2D(d){this.a=d},
e2E:function e2E(d,e){this.a=d
this.b=e},
e2I:function e2I(d,e){this.a=d
this.b=e},
e2_:function e2_(d,e){this.a=d
this.b=e},
e20:function e20(d,e){this.a=d
this.b=e},
e2S:function e2S(d,e,f){this.a=d
this.b=e
this.c=f},
e2M:function e2M(d,e,f){this.a=d
this.b=e
this.c=f},
e2L:function e2L(d){this.a=d},
e21:function e21(d){this.a=d},
e22:function e22(d){this.a=d},
e23:function e23(){},
e24:function e24(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e28:function e28(d,e){this.a=d
this.b=e},
e27:function e27(d,e){this.a=d
this.b=e},
e26:function e26(d){this.a=d},
e29:function e29(d,e){this.a=d
this.b=e},
e25:function e25(d){this.a=d},
e2R:function e2R(d){this.a=d},
e2l:function e2l(){},
e2m:function e2m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2k:function e2k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2g:function e2g(d,e,f){this.a=d
this.b=e
this.c=f},
e2f:function e2f(d,e,f){this.a=d
this.b=e
this.c=f},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2h:function e2h(d){this.a=d},
e2i:function e2i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2e:function e2e(d,e){this.a=d
this.b=e},
e2j:function e2j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2n:function e2n(d,e){this.a=d
this.b=e},
e2Z:function e2Z(){},
e3_:function e3_(d,e){this.a=d
this.b=e},
e30:function e30(d){this.a=d},
e31:function e31(d,e){this.a=d
this.b=e},
e2V:function e2V(d){this.a=d},
e2T:function e2T(d,e){this.a=d
this.b=e},
e2W:function e2W(d,e){this.a=d
this.b=e},
e2X:function e2X(d,e){this.a=d
this.b=e},
e2Y:function e2Y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e32:function e32(d){this.a=d},
e2U:function e2U(d){this.a=d},
e2a:function e2a(d){this.a=d},
bgD:function bgD(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dhg:function dhg(d){this.a=d},
dhf:function dhf(d,e){this.a=d
this.b=e},
dhh:function dhh(d){this.a=d},
dhe:function dhe(d,e){this.a=d
this.b=e},
fHi:function fHi(d,e){this.a=d
this.b=e},
fHj:function fHj(d){this.a=d},
fHk:function fHk(){},
fHg:function fHg(d,e){this.a=d
this.b=e},
fHh:function fHh(){},
fHn:function fHn(d,e){this.a=d
this.b=e},
fHo:function fHo(d){this.a=d},
fHp:function fHp(){},
fHl:function fHl(d){this.a=d},
fHm:function fHm(d,e){this.a=d
this.b=e},
KU:function KU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
GB:function GB(d,e){this.a=d
this.b=e},
bgF:function bgF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dhj:function dhj(d){this.a=d},
dhA:function dhA(d){this.a=d},
dhs:function dhs(d){this.a=d},
dht:function dht(){},
dhr:function dhr(d){this.a=d},
dhk:function dhk(){},
dhq:function dhq(d){this.a=d},
dhp:function dhp(d,e){this.a=d
this.b=e},
dhl:function dhl(d){this.a=d},
dhu:function dhu(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dhv:function dhv(d){this.a=d},
dhw:function dhw(d){this.a=d},
dhx:function dhx(){},
dhy:function dhy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dhz:function dhz(){},
dhi:function dhi(d,e,f,g,h,i,j,k,l,m){var _=this
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
dhm:function dhm(d,e){this.a=d
this.b=e},
dhn:function dhn(d){this.a=d},
dho:function dho(){},
aKH:function aKH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgG:function bgG(d,e){this.b=d
this.a=e},
dhB:function dhB(){},
dhC:function dhC(d){this.a=d},
dhD:function dhD(d){this.a=d},
dhE:function dhE(){},
bkt:function bkt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfI:function bfI(d,e){this.b=d
this.a=e},
byr:function byr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
fmH:function fmH(d){this.a=d},
bnM:function bnM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eXQ:function eXQ(d){this.a=d},
eXP:function eXP(d,e){this.a=d
this.b=e},
a0a:function a0a(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDx:function aDx(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dxw:function dxw(d,e){this.a=d
this.b=e},
dxv:function dxv(d){this.a=d},
dxt:function dxt(d){this.a=d},
dxu:function dxu(d){this.a=d},
dxF:function dxF(d){this.a=d},
dxG:function dxG(d){this.a=d},
dxE:function dxE(d,e){this.a=d
this.b=e},
dxH:function dxH(){},
dxK:function dxK(d){this.a=d},
dxD:function dxD(d,e){this.a=d
this.b=e},
dxJ:function dxJ(){},
dxL:function dxL(d){this.a=d},
dxC:function dxC(d,e){this.a=d
this.b=e},
dxM:function dxM(d){this.a=d},
dxB:function dxB(d){this.a=d},
dxN:function dxN(d){this.a=d},
dxA:function dxA(d){this.a=d},
dxO:function dxO(d){this.a=d},
dxz:function dxz(d){this.a=d},
dxP:function dxP(d){this.a=d},
dxy:function dxy(d){this.a=d},
dxQ:function dxQ(d){this.a=d},
dxx:function dxx(d,e){this.a=d
this.b=e},
dxI:function dxI(d){this.a=d},
aed:function aed(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bks:function bks(d,e,f,g,h,i,j,k){var _=this
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
bkr:function bkr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxR:function dxR(d){this.a=d},
dxS:function dxS(d,e){this.a=d
this.b=e},
aDy:function aDy(d,e,f,g,h,i){var _=this
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
dy0:function dy0(d){this.a=d},
Gx:function Gx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hpx(d){var w=d.T,v=x.N
return w.jr(w,new C.cfm(),v,v)},
hV7(d){var w=d.bF
if(w>=0)return w
return 5},
hpz(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hpx(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hpy(d,e){var w=C.hpz(d,e)
if(w!=null&&w.cf(new A.V(Date.now(),0,!1)))return!0
return!1},
hV8(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a3(C.hpx(d),w,w)
u=C.hpz(d,e)
t=u!=null&&u.cf(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dp(30,0,0,0,0,0).a).aa().ag())
d.T=v},
b18(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b18=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.ly(t,B.Jt),$async$b18)
case 3:if(l){u=!0
w=1
break}u=A.lc(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Jt,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b18,v)},
cfm:function cfm(){},
hV5(){var w,v=$.os(),u=J.e3(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
Jo(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jo=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$Jo)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bL),$async$Jo)
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
$.am.$1("[family tree sync codes] load: "+A.w(p))
w=7
break
case 4:w=2
break
case 7:u=A.T(x.N,x.z)
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Jo,v)},
a8b(d){return C.hV6(d)},
hV6(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a8b=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a8b)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.I(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cL,null),$async$a8b)
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
return A.i($async$a8b,v)},
cfl(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cfl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jo(),$async$cfl)
case 3:t=m.hT(f),t=t.gae(t),s=x.f
case 4:if(!t.C()){w=5
break}r=t.gR(t)
q=r.b
if(s.b(q)){p=J.a5(q)
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
return A.i($async$cfl,v)},
Oj(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Oj=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cfl(d),$async$Oj)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jo(),$async$Oj)
case 6:s=f
r=J.a5(s)
q=r.h(s,t)
w=x.f.b(q)?7:8
break
case 7:p=x.N
o=x.z
o=A.dM(A.a3(q,p,o),p,o)
o.n(0,"active",!0)
o.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,t,o)
w=9
return A.b(C.a8b(s),$async$Oj)
case 9:case 8:u=t
w=1
break
case 5:n=C.hV5()
w=10
return A.b(C.Jo(),$async$Oj)
case 10:s=f
J.aK(s,n,A.I(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a8b(s),$async$Oj)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Oj,v)},
b17(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b17=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jo(),$async$b17)
case 3:t=f
for(s=J.dm(t),r=s.gdO(t),r=r.dn(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a8b(t),$async$b17)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b17,v)},
a8c(d,e,f){var w=0,v=A.j(x.H),u
var $async$a8c=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.ar_(d,e),$async$a8c)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Oj(d),$async$a8c)
case 7:w=4
break
case 5:w=8
return A.b(C.b17(d),$async$a8c)
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
return A.b(A.c8(),$async$aqU)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jo(),$async$aqU)
case 7:q=o.t(k,t)
if(!x.f.b(q)){u=!1
w=1
break}p=J.a5(q)
if(!J.z(p.h(q,"active"),!0)){u=!1
w=1
break}p=p.h(q,"email")
u=B.a.i(J.k(p==null?"":p).toLowerCase())===s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqU,v)},
b16(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b16=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b16)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jo(),$async$b16)
case 4:t=q.t(g,r)
if(!x.f.b(t)){u=!1
w=1
break}s=J.a5(t)
if(!J.z(s.h(t,"active"),!0)){u=!1
w=1
break}s=s.h(t,"email")
u=B.a.i(J.k(s==null?"":s).toLowerCase())===B.a.i(e.toLowerCase())
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b16,v)},
hV9(){var w,v=$.os(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"FT"+B.d.he(u)},
aqX(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aqX=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aqX)
case 3:if(!g){u=null
w=1
break}t=C.hV9()
w=4
return A.b(A.Wh(),$async$aqX)
case 4:s=g
r=B.dS.aN(B.Y.aw(d.f2(),null))
r=B.cP.gcu().aN(r)
q=e?999:2
J.aK(s,t,A.I(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a8d(s),$async$aqX)
case 5:p=e?999:2
u=new A.a1l("NGMYFTSYNC2|"+t,t,p)
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
return A.b(A.Wh(),$async$aqW)
case 3:p=a0
o=J.a5(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a5(n)
l=A.aH(m.h(n,"usesRemaining"))
k=l==null?null:B.i.L(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b16(J.k(l==null?"":l),j),$async$aqW)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c9.cI(0,B.cI.aN(t))
s=C.hpA(r)}catch(f){q=A.ab(f)
$.am.$1("[family tree qr stash] decode: "+A.w(q))
u=null
w=1
break}if(s==null){u=null
w=1
break}h=k-1
if(h<=0)o.W(p,g)
else{m=x.N
l=x.z
l=A.dM(A.a3(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=5
return A.b(A.a8d(p),$async$aqW)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqW,v)},
hpA(d){var w,v,u,t,s=null
try{w=B.Y.aQ(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hVb(A.a3(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h8z(d){var w=0,v=A.j(x.m),u,t,s
var $async$h8z=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aqW(t[1])
w=1
break}u=null
w=1
break}u=C.hpA(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h8z,v)},
hVb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.de(v,x.f)
u=A.cE(u,new C.cfo(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.cfp(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.hT(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.de(l,u)
n=A.cE(n,new C.cfq(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.cfr(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqY(h,w,s,r,q)},
ar_(d,e){var w=0,v=A.j(x.y),u,t
var $async$ar_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.Oa(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bo(d),$async$ar_)
case 3:u=t.cI(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ar_,v)},
cfx(d){var w=0,v=A.j(x.bC),u,t,s
var $async$cfx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bo(d),$async$cfx)
case 3:t=s.b8(f,new C.cfy(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.cfz())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$cfx,v)},
Wi(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Wi=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.ar_(e,d),$async$Wi)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Oj(e),$async$Wi)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bo(e),$async$Wi)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.cfv(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a5(r)
if(t.gau(r)){u=null
w=1
break}t=t.dL(r,new C.cfw(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LF(e,o),$async$Wi)
case 14:n=i
if(J.cI(n))q.n(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.aqY(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wi,v)},
b1b(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b1b=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wi(d,e,f,g),$async$b1b)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.Hg(A.KQ(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1b,v)},
b1a(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b1a=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wi(d,e,f,g),$async$b1a)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aqX(r,f),$async$b1a)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aHK(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1a,v)},
Wj(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wj=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h8z(a0),$async$Wj)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aqU(g.a,d,e,f,s,r),$async$Wj)
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
return A.b(C.bDO(e,j),$async$Wj)
case 12:case 11:w=13
return A.b(C.aiG(e,j,s),$async$Wj)
case 13:h=n.h(0,i)
w=h!=null&&J.cI(h)?14:15
break
case 14:w=16
return A.b(C.Bz(e,i,h),$async$Wj)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.brv(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wj,v)},
aqY:function aqY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cft:function cft(){},
cfu:function cfu(){},
cfs:function cfs(){},
cfo:function cfo(){},
cfp:function cfp(){},
cfq:function cfq(){},
cfr:function cfr(){},
cfy:function cfy(){},
cfz:function cfz(){},
cfv:function cfv(d){this.a=d},
cfw:function cfw(d){this.a=d},
hhv(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hE(d,new C.aqZ(w,e,g,i,f,h,null),!0,null,x.H)},
dhd(d,e,f,g,h,i,j,k){return new C.bgC(i,e,k,j,g,f,h,d,null)},
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
e3b:function e3b(d){this.a=d},
e3c:function e3c(d,e,f){this.a=d
this.b=e
this.c=f},
e3g:function e3g(d,e){this.a=d
this.b=e},
e3h:function e3h(d){this.a=d},
e38:function e38(d){this.a=d},
e39:function e39(d,e){this.a=d
this.b=e},
e3a:function e3a(d,e){this.a=d
this.b=e},
e3f:function e3f(d){this.a=d},
e3e:function e3e(d,e){this.a=d
this.b=e},
e3d:function e3d(){},
e3j:function e3j(d){this.a=d},
e3k:function e3k(d,e){this.a=d
this.b=e},
e3i:function e3i(d,e){this.a=d
this.b=e},
dhF:function dhF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgE:function bgE(d,e,f){this.d=d
this.e=e
this.a=f},
adt:function adt(d,e,f){this.c=d
this.d=e
this.a=f},
bgC:function bgC(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgH:function bgH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0u:function a0u(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aF5:function aF5(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e33:function e33(d,e){this.a=d
this.b=e},
e34:function e34(d){this.a=d},
e35:function e35(d){this.a=d},
e36:function e36(d){this.a=d},
e37:function e37(d){this.a=d},
a0v:function a0v(d){this.a=d},
blV:function blV(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e3l:function e3l(d,e){this.a=d
this.b=e},
b_G(d,e){return new C.b_F(d,e,null)},
b_F:function b_F(d,e,f){this.c=d
this.d=e
this.a=f},
ikw(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
isB(d){return A.bT(B.L,null,new C.fY7(new C.ui(A.S(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hru(d,e){return new C.au2(e,d,null)},
aS7(d,e,f,g,h,i,j){var w=C.ikw(i)
if(w!=null)return A.by(e,new A.a6(j,f,new C.a7h(w,!0,null),null),B.aq)
return N.aRt(e,B.c_,f,g,h,i,j)},
lV:function lV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7h:function a7h(d,e,f){this.c=d
this.d=e
this.a=f},
blB:function blB(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
dPE:function dPE(d){this.a=d},
dPF:function dPF(){},
dPG:function dPG(d,e){this.a=d
this.b=e},
blA:function blA(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fY7:function fY7(d){this.a=d},
fY6:function fY6(d,e){this.a=d
this.b=e},
fY5:function fY5(d,e){this.a=d
this.b=e},
fY4:function fY4(d,e){this.a=d
this.b=e},
au2:function au2(d,e,f){this.c=d
this.d=e
this.a=f},
coR:function coR(d,e){this.a=d
this.b=e},
aN8:function aN8(){},
isl(d){var w=null
return A.cf(w,w,!0,w,new C.fXu(),d,w,!0,!0,x.e2)},
ity(d,e,f,g,h){var w=null
return A.cf(w,w,!0,w,new C.h42(h,g,f,e),d,w,!0,!0,x.N)},
iso(d,e){var w=null
return A.cf(w,w,!0,w,new C.fXz(e),d,w,!0,!0,x.dY)},
isn(d){var w=null
return A.cf(w,w,!0,w,new C.fXy(),d,w,!0,!0,x.c5)},
aV6:function aV6(d,e){this.a=d
this.b=e},
aV5:function aV5(d){this.a=d},
aT6:function aT6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXu:function fXu(){},
h42:function h42(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fXz:function fXz(d){this.a=d},
fXy:function fXy(){},
a_8:function a_8(d,e){this.c=d
this.a=e},
aAh:function aAh(){var _=this
_.d=$
_.c=_.a=_.e=null},
d8Q:function d8Q(d){this.a=d},
d8R:function d8R(d){this.a=d},
d8P:function d8P(d,e){this.a=d
this.b=e},
d8S:function d8S(d){this.a=d},
d8T:function d8T(d){this.a=d},
a_7:function a_7(d){this.a=d},
aAg:function aAg(){this.d=$
this.c=this.a=null},
d8M:function d8M(d){this.a=d},
d8N:function d8N(d){this.a=d},
d8O:function d8O(d){this.a=d},
ZF:function ZF(d){this.a=d},
az0:function az0(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cHb:function cHb(){},
cHh:function cHh(d){this.a=d},
cHi:function cHi(d){this.a=d},
cHj:function cHj(d){this.a=d},
cHg:function cHg(){},
cHk:function cHk(d){this.a=d},
cHl:function cHl(d){this.a=d},
cHf:function cHf(){},
cHm:function cHm(d,e){this.a=d
this.b=e},
cHe:function cHe(d,e){this.a=d
this.b=e},
cHc:function cHc(d,e){this.a=d
this.b=e},
cHn:function cHn(d){this.a=d},
cHd:function cHd(){},
cHo:function cHo(d){this.a=d},
a2h:function a2h(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
byj:function byj(){this.d=$
this.c=this.a=null},
fmc:function fmc(d,e){this.a=d
this.b=e},
fmd:function fmd(d){this.a=d},
fme:function fme(d,e){this.a=d
this.b=e},
acw:function acw(d,e){this.a=d
this.b=e},
Gl:function Gl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
byh:function byh(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fma:function fma(d,e){this.a=d
this.b=e},
ayU:function ayU(d,e){this.c=d
this.a=e},
byi:function byi(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
fmb:function fmb(d){this.a=d},
byg:function byg(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aPe:function aPe(){},
aPf:function aPf(){},
bFM(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.i.bh(u),s=B.o.D(B.i.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p4(B.o.u(t),A.af("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fVR(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.u(s),2,"0")
n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.Z2(A.cP(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aRJ(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aRJ=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hW().l8(85,1280,B.eO),$async$aRJ)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fp(),$async$aRJ)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hrt()
w=9
return A.b(C.coQ(q,r),$async$aRJ)
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
return A.i($async$aRJ,v)},
aS5(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aS5=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.coN(g)
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
return A.b(A.Hh(p,!0,null,o).dh(0,B.h2),$async$aS5)
case 9:n=a1
w=10
return A.b(n.lb(),$async$aS5)
case 10:m=a1
w=11
return A.b(m.b.hs(B.hh),$async$aS5)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eT(B.dN.gaU(l))
k="data:image/png;base64,"+B.cP.gcu().aN(i)
if(J.ad(k)<=r){u=k
w=1
break}o=B.i.V(o*0.72)
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
return A.i($async$aS5,v)},
fVR:function fVR(){},
ui:function ui(d){this.a=d},
au1:function au1(d,e,f){this.c=d
this.d=e
this.a=f},
aGA:function aGA(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eV_:function eV_(d,e){this.a=d
this.b=e},
eUR:function eUR(d){this.a=d},
eUS:function eUS(d){this.a=d},
eUY:function eUY(d,e){this.a=d
this.b=e},
eUX:function eUX(d,e){this.a=d
this.b=e},
eUU:function eUU(d,e){this.a=d
this.b=e},
eUT:function eUT(d,e){this.a=d
this.b=e},
eUV:function eUV(d){this.a=d},
eUW:function eUW(d,e){this.a=d
this.b=e},
eUZ:function eUZ(d,e){this.a=d
this.b=e},
eUM:function eUM(d,e){this.a=d
this.b=e},
eUQ:function eUQ(d){this.a=d},
eUP:function eUP(d,e){this.a=d
this.b=e},
eUO:function eUO(d){this.a=d},
eV0:function eV0(d,e){this.a=d
this.b=e},
eV1:function eV1(d,e){this.a=d
this.b=e},
eUN:function eUN(d,e){this.a=d
this.b=e},
hEB(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.I(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fVS(d,e,f){var w=0,v=A.j(x.N),u
var $async$fVS=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Y.aw(C.hEB(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVS,v)},
bFO(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bFO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fVS(!0,d,e),$async$bFO)
case 4:w=3
return A.b(r.au_(g,d,e.a),$async$bFO)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dS.aN(B.Y.aw(C.hEB(d,e,null),null))
u="NGMY_WS:"+B.kI.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFO,v)},
hw3(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hh6(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d3(s,"NGMYWSSYNC2|"))return!0
if(J.d3(s,"NGMY_WS:"))return!0
if(J.eH(s,t))return!0
if(J.d3(s,"{"))try{w=B.Y.aQ(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ipE(d){var w,v,u,t=C.hw3(d)
if(t==null)return null
if(C.hh6(t))return t
w=B.a.co(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hh6(v))return v}u=B.a.co(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hh6(v))return v}return null},
hh5(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d3(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d3(q,"NGMY_WS:")){v=B.c9.cI(0,B.cI.aN(J.nq(q,8)))
w=t.a(B.Y.aQ(0,v,r))}else w=t.a(B.Y.aQ(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.hbc(A.a3(u,x.N,x.z))
return t}catch(s){return r}},
bFN(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bFN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.atZ(t[1]),$async$bFN)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hh5(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hh5(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFN,v)},
hh4(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lC(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bFj(){var w=0,v=A.j(x.o),u,t
var $async$bFj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Ht(),$async$bFj)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hh5(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFj,v)},
hFD(d,e,f,g){return A.bT(B.L,null,new C.h3Q(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h3Q:function h3Q(d,e,f){this.a=d
this.b=e
this.c=f},
aez:function aez(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eV3:function eV3(d,e){this.a=d
this.b=e},
eV4:function eV4(d,e){this.a=d
this.b=e},
eV5:function eV5(d,e){this.a=d
this.b=e},
eV6:function eV6(d,e){this.a=d
this.b=e},
eV2:function eV2(d){this.a=d},
atW:function atW(d,e,f){this.c=d
this.d=e
this.a=f},
bnh:function bnh(){var _=this
_.c=_.a=_.e=_.d=null},
eUH:function eUH(d,e){this.a=d
this.b=e},
eUI:function eUI(d){this.a=d},
eUJ:function eUJ(d){this.a=d},
au0:function au0(d){this.a=d},
aGz:function aGz(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eUL:function eUL(d){this.a=d},
eUK:function eUK(d){this.a=d},
hYp(d,e,f,g,h){return new C.OY(h,g,d,e,f,null)},
aLt:function aLt(d,e){this.a=d
this.b=e},
OY:function OY(d,e,f,g,h,i){var _=this
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
eVt:function eVt(){},
eVp:function eVp(d,e){this.a=d
this.b=e},
eVq:function eVq(d){this.a=d},
eVa:function eVa(d){this.a=d},
eV8:function eV8(d){this.a=d},
eV9:function eV9(d){this.a=d},
eVj:function eVj(d,e){this.a=d
this.b=e},
eVg:function eVg(d,e){this.a=d
this.b=e},
eVh:function eVh(d,e){this.a=d
this.b=e},
eVi:function eVi(d,e,f){this.a=d
this.b=e
this.c=f},
eVe:function eVe(d,e,f){this.a=d
this.b=e
this.c=f},
eVc:function eVc(d){this.a=d},
eVd:function eVd(d){this.a=d},
eVf:function eVf(d){this.a=d},
eVw:function eVw(d){this.a=d},
eVv:function eVv(d){this.a=d},
eVx:function eVx(d){this.a=d},
eVu:function eVu(d){this.a=d},
eV7:function eV7(d){this.a=d},
eVb:function eVb(d,e){this.a=d
this.b=e},
eVs:function eVs(d,e){this.a=d
this.b=e},
eVr:function eVr(d,e){this.a=d
this.b=e},
eVm:function eVm(d){this.a=d},
eVn:function eVn(d){this.a=d},
eVo:function eVo(d,e){this.a=d
this.b=e},
eVl:function eVl(d,e){this.a=d
this.b=e},
eVk:function eVk(d,e,f){this.a=d
this.b=e
this.c=f},
bA4:function bA4(){},
Bc(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.af("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
ah3(d,e,f){return C.idN(d,e,f)},
idN(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
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
return A.i($async$ah3,v)},
ah2(d,e){return C.idM(d,e)},
idM(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
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
$.am.$1("[worksheets] remove failed for "+e+": "+A.w(s))
w=5
break
case 2:w=1
break
case 5:return A.h(null,v)
case 1:return A.f(t.at(-1),v)}})
return A.i($async$ah2,v)},
icC(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.TA(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bCN(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bCN=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b4o(q),$async$bCN)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aS5(q,!1),$async$bCN)
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
return A.i($async$bCN,v)},
hLP(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aH(d.h(0,"price")),o=p==null?null:p
if(o==null)o=0
w=A.aH(d.h(0,"quantity"))
if(w==null)w=null
v=A.aH(d.h(0,"unitPrice"))
if(v==null)v=null
if(w!=null&&v!=null){p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
u=J.k(u==null?"":u)
t=w<=0?1:w
s=d.h(0,r)
if(B.a.i(J.k(s==null?q:s)).length===0)s=q
else{s=d.h(0,r)
s=J.k(s==null?q:s)}return new C.rn(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rn(p,J.k(u==null?"":u),1,o,q)},
hbc(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.de(s,x.f)
w=A.cE(w,new C.cGt(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cGu(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lC(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
ihX(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wp
case"female":case"f":return D.ot
default:return D.yX}},
hB7(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hlv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.ihX(v==null?j:J.k(v))
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
m=A.aH(d.h(0,"birthOrder"))
m=m==null?j:B.i.L(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aH(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.i.L(k)
return new C.hV(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
ihZ(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.OJ
case"viewer":return D.kX
default:return D.uC}},
ii_(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hi(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQQ(d,e){return B.a.i(e.toLowerCase())===C.Hi(d,e)&&d.y!==D.kX},
uw(d,e){var w,v=d.y
if(v===D.kX)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hi(d,e))return!0
if(v===D.OJ)return!0
v=d.e
return new A.N(v,A.hhb(),A.U(v).k("N<1,n>")).q(0,w)},
ihj(d){return J.dI(d,new C.fG6()).gI(0)},
h4B(d){var w=0,v=A.j(x.y),u,t
var $async$h4B=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bo(d),$async$h4B)
case 3:u=t.ri(f,new C.h4C(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h4B,v)},
bDO(d,e){var w=0,v=A.j(x.H),u,t
var $async$bDO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bo(d),$async$bDO)
case 3:t=g
if(J.ri(t,new C.fDF(e))){w=1
break}if(C.ihj(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bDO,v)},
am5(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.de(h,x.f)
w=A.cE(w,new C.bSy(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bSz(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b8(u,new C.bSA(),x.N)
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
p=A.aH(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.i.L(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.ihZ(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aU(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.ck)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a3(i,k,j))}return new C.kT(w,v,s,!r,t,g,q,p,o,n,m)},
hBm(d){var w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aC(v,0,8)},
DA(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$DA=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sv(d),$async$DA)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$DA)
case 4:t=f
w=5
return A.b(t.a7e(0),$async$DA)
case 5:w=6
return A.b(C.fu_(t,l),$async$DA)
case 6:s=f
if(J.cI(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a5(q)
o=A.aS(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hwE(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p3(l,n),$async$DA)
case 11:u=n
w=1
break
case 10:case 8:m=A.aS(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hwE(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p3(l,n),$async$DA)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$DA,v)},
fu_(d,e){return C.i9Z(d,e)},
i9Z(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$fu_=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a5(a3)
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
break}k=C.hbc(A.a3(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aS(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.Bc(a9)+"_"+n))
i=C.icC(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4o(h),$async$fu_)
case 17:g=b1
if(g!=null){i=i.TA(g)
p=!0}case 16:J.c5(q,i)
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
case 8:J.SE(q,new C.fu0())
if(p&&J.ad(q)!==0)C.p3(a9,q)
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
return A.i($async$fu_,v)},
bEf(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bEf=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Sv(d),$async$bEf)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.DA(r),$async$bEf)
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
return A.i($async$bEf,v)},
hwE(d){var w,v,u,t
try{w=B.Y.aQ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.de(w,x.f)
v=A.cE(v,new C.fpL(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.fpM(),u),u.k("M.E"))
B.d.aZ(v,new C.fpN())
return v}catch(t){v=A.a([],x.D)
return v}},
p3(d,e){return C.isa(d,e)},
isa(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p3=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.Sv(b2),$async$p3)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$p3)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.Bc(a8)
p=A.aS(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b8(x.j.a(B.Y.aQ(0,p,null)),new C.fXi(),a2).fM(0)
a2=J.b8(b3,new C.fXj(),a2).bY(0,new C.fXk())
n=A.d4(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dZ(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eH(n,m)?17:18
break
case 17:a5=C.Bc(a8)
l=A.aS(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9u(l),$async$p3)
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
return A.b(C.a9u(a5==null?null:J.k(a5)),$async$p3)
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
return A.b(C.ah2(r,"ngmy_worksheet_item_v3_"+C.Bc(a8)+"_"+m),$async$p3)
case 29:w=30
return A.b(C.ah2(r,"ngmy_worksheet_thumb_v3_"+C.Bc(a8)+"_"+m),$async$p3)
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
return A.b(C.bCN(h),$async$p3)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.ah3(r,"ngmy_worksheet_thumb_v3_"+C.Bc(a8)+"_"+a4,f),$async$p3)
case 40:g=i.TA(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.ah2(r,"ngmy_worksheet_thumb_v3_"+C.Bc(a8)+"_"+a4),$async$p3)
case 41:g=i.TA(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.ah2(r,"ngmy_worksheet_thumb_v3_"+C.Bc(a8)+"_"+a4),$async$p3)
case 42:case 34:a4=i.a
w=43
return A.b(C.ah3(r,"ngmy_worksheet_item_v3_"+C.Bc(a8)+"_"+a4,B.Y.aw(g.aj(),null)),$async$p3)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c5(q,i.a)
w=31
break
case 32:w=44
return A.b(C.ah3(r,"ngmy_worksheets_index_v3_"+C.Bc(a8),B.Y.aw(q,null)),$async$p3)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fXl(q))
a4=a3.$ti.k("cM<1,a8<n,@>>")
a7=A.C(new A.cM(a3,new C.fXm(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.ah3(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.Y.aw(a0,null)),$async$p3)
case 45:w=46
return A.b(J.hKT(r),$async$p3)
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
return A.i($async$p3,v)},
M5(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$M5=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.DA(d),$async$M5)
case 3:t=g
s=J.cC(t)
r=s.bj(t,new C.h4A(e))
if(r===-1)s.c3(t,0,e)
else s.n(t,r,e)
u=C.p3(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$M5,v)},
bE0(d,e){var w=0,v=A.j(x.H),u
var $async$bE0=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.DA(d),$async$bE0)
case 2:u=g
J.nR(u,new C.fGA(e))
w=3
return A.b(C.p3(d,u),$async$bE0)
case 3:return A.h(null,v)}})
return A.i($async$bE0,v)},
Hk(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hk=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Hk)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aS(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Y.aQ(0,i,null)
if(x.j.b(t)){j=J.de(t,x.f)
j=A.cE(j,new C.fJP(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fJQ(),s),s.k("M.E"))
B.d.aZ(r,new C.fJR())
k=r}}catch(h){}w=4
return A.b(C.fqy(d),$async$Hk)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.iam(k,p,d)
j=A.U(o)
s=j.k("N<1,a8<n,@>>")
s=A.C(new A.N(o,new C.fJS(),s),s.k("ak.E"))
n=B.Y.aw(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RG(d,o),$async$Hk)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fJT(d),j),j.k("M.E"))
if(m.length!==0)C.aQA(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hk,v)},
fX4(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fX4=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RG(d,e),$async$fX4)
case 3:t=J.dI(e,new C.fX5(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQA(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fX4,v)},
a3U(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a3U=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a3U)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aS(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Y.aQ(0,l,null)
if(x.j.b(u)){m=J.de(u,x.f)
m=A.cE(m,new C.h4v(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h4w(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qD(o,new C.h4x(e))
if(B.a.i(e.x).length===0&&C.uw(e,d)){m=B.a.i(d.toLowerCase())
p=e.aG9(e.y===D.kX?D.kX:D.uC,m)}else p=e
if(q===-1)J.pX(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RG(d,o),$async$a3U)
case 3:w=C.uw(p,d)?4:5
break
case 4:w=6
return A.b(C.aQz(C.Hi(p,d),p),$async$a3U)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a3U,v)},
aQM(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQM=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hk(d),$async$aQM)
case 2:u=g
t=J.cC(u)
s=A.nA(t.eP(u,new C.fGh(e)))
t.bt(u,new C.fGi(e))
w=3
return A.b(C.RG(d,u),$async$aQM)
case 3:w=s!=null&&C.aQQ(s,d)?4:5
break
case 4:w=6
return A.b(C.fpP(e),$async$aQM)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQM,v)},
aiW(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h4G(),v),v.k("M.E"))
return w},
heG(d,e){var w,v=d.f,u=A.nA(new A.Y(v,new C.fFM(e),A.U(v).k("Y<1>")))
v=C.aiW(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fFN(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fFO())
return v},
ii2(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hFH(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.heG(d,u),new C.h43(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
ijB(d,e){var w
if(e==null||e.length===0)return 1
w=C.heG(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fKF(),A.U(w).k("N<1,G>")).f1(0,B.xN)+1},
is3(d){var w,v=C.aiW(d)
if(v.length===0)return null
w=new A.Y(v,new C.fWZ(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
ihY(d){return A.I(["id",d.a,"name",d.b,"gender",C.hB7(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ijv(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.yX?n:q.c
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
d=q.aG4(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cPV(a1,w,a3.d,a2.y,s,a0,v)},
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
break}p=J.de(t,x.f)
p=A.cE(p,new C.fJM(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fJN(),s),s.k("M.E"))
B.d.aZ(p,new C.fJO())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bo,v)},
aiG(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiG=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uC:D.kX
a7=C.Hi(b2,b3)
w=2
return A.b(C.Bo(b1),$async$aiG)
case 2:a8=b5
a9=J.cC(a8)
b0=a9.bj(a8,new C.fWU(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bDO(b1,b2),$async$aiG)
case 5:case 4:if(b0===-1){u=b2.aG9(a6,a7)
a9.c3(a8,0,u)}else{t=a9.h(a8,b0)
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
i=i!==D.yX?i:l.c
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
s.n(0,m,l.aG4(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b7<2>")
s=A.C(new A.b7(s,k),k.k("M.E"))
k=a5?D.uC:D.kX
u=t.cPX(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RG(b1,a8),$async$aiG)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQz(B.a.i(b3.toLowerCase()),u),$async$aiG)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiG,v)},
hx2(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a8<n,@>>"),k=A.C(new A.N(m,C.hEK(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.I(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.I(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hx3(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,C.hEK(),t),t.k("ak.E"))
return A.I(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
i7N(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a5(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.am5(A.a3(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hhb(),A.U(j).k("N<1,n>")).bY(0,new C.fql())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uC
else s=B.d.q(t,u)?D.OJ:D.kX
return w.aG9(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.am5(A.a3(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.de(q,h)
h=A.cE(h,new C.fqm(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fqn(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b8(n,new C.fqo(),x.N).bY(0,new C.fqp())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uC
else s=B.d.q(t,u)?D.OJ:D.kX
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
j=A.aH(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.i.L(j)
if(j==null)j=0
return new C.kT(h,r,p,!m,t,o,l,j,v,s,B.cd)},
fqy(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fqy=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fqC()
h=x.N
g=x.z
w=7
return A.b(A.iB(A.a([A.lH("family_trees","*",null,A.I(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bL),r.$2(A.lH("family_trees","*",A.I(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bL),"collaborator"),r.$2(A.lH("family_trees","*",null,A.I(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bL),"public")],x.cl),x.fO),$async$fqy)
case 7:q=a4
p=J.t(q,0)
o=J.t(q,1)
n=J.t(q,2)
g=x.a
m=A.T(h,g)
h=A.C(p,g)
l=h
J.h7(l,o)
J.h7(l,n)
l=l
h=l.length
f=0
for(;f<l.length;l.length===h||(0,A.J)(l),++f){k=l[f]
g=J.t(k,"id")
j=J.k(g==null?"":g)
if(J.ad(j)!==0)J.aK(m,j,k)}l=m
h=A.a4(l).k("b7<2>")
h=A.cE(new A.b7(l,h),new C.fqz(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fqA(),l),l.k("M.E"))
B.d.aZ(l,new C.fqB())
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
return A.i($async$fqy,v)},
iam(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a5(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dL(e,new C.fuI(),v).bY(0,new C.fuJ())
t=A.d4(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hi(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kX){m=q.e
m=!new A.N(m,A.hhb(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ijv(l,v)
o=C.Hi(k,w)
p=v.d
s.n(0,u,o===w?k.bfo(p,D.uC):k.bfo(p,v.y))}j=s.$ti.k("b7<2>")
j=A.C(new A.b7(s,j),j.k("M.E"))
B.d.aZ(j,new C.fuK())
return j},
RG(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RG=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$RG)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b8(e,new C.fxF(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Y.aw(s,null)),$async$RG)
case 3:return A.h(null,v)}})
return A.i($async$RG,v)},
aQz(d,e){return C.ifH(d,e)},
ifH(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQz=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mc("family_trees",A.a([C.hx2(e,d)],p),null,B.cL),$async$aQz)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mc("family_trees",A.a([C.hx3(e,d)],p),null,B.cL),$async$aQz)
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
return A.i($async$aQz,v)},
aQA(d,e){return C.ifI(d,e)},
ifI(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQA=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a8<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fCV(d),n),m)
r=l
w=7
return A.b(A.mc("family_trees",r,null,B.cL),$async$aQA)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fCW(d),n),m)
p=k
w=8
return A.b(A.mc("family_trees",p,null,B.cL),$async$aQA)
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
return A.i($async$aQA,v)},
fpP(d){return C.i70(d)},
i70(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$fpP=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.S5("family_trees",A.I(["id",d],x.N,x.z),null,B.cL),$async$fpP)
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
return A.i($async$fpP,v)},
rn:function rn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
lC:function lC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cGw:function cGw(){},
cGv:function cGv(){},
cGt:function cGt(){},
cGu:function cGu(){},
Ir:function Ir(d,e){this.a=d
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
am4:function am4(d,e){this.a=d
this.b=e},
fG6:function fG6(){},
h4C:function h4C(d){this.a=d},
fDF:function fDF(d){this.a=d},
kT:function kT(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bSC:function bSC(){},
bSB:function bSB(){},
bSy:function bSy(){},
bSz:function bSz(){},
bSA:function bSA(){},
fu0:function fu0(){},
fpL:function fpL(){},
fpM:function fpM(){},
fpN:function fpN(){},
fXi:function fXi(){},
fXj:function fXj(){},
fXk:function fXk(){},
fXl:function fXl(d){this.a=d},
fXm:function fXm(){},
h4A:function h4A(d){this.a=d},
fGA:function fGA(d){this.a=d},
fJP:function fJP(){},
fJQ:function fJQ(){},
fJR:function fJR(){},
fJS:function fJS(){},
fJT:function fJT(d){this.a=d},
fX5:function fX5(d){this.a=d},
h4v:function h4v(){},
h4w:function h4w(){},
h4x:function h4x(d){this.a=d},
fGh:function fGh(d){this.a=d},
fGi:function fGi(d){this.a=d},
h4G:function h4G(){},
fFM:function fFM(d){this.a=d},
fFN:function fFN(d,e){this.a=d
this.b=e},
fFO:function fFO(){},
h43:function h43(d){this.a=d},
fKF:function fKF(){},
fWZ:function fWZ(){},
fJM:function fJM(){},
fJN:function fJN(){},
fJO:function fJO(){},
fWU:function fWU(d){this.a=d},
fql:function fql(){},
fqm:function fqm(){},
fqn:function fqn(){},
fqo:function fqo(){},
fqp:function fqp(){},
fqC:function fqC(){},
fqD:function fqD(d){this.a=d},
fqz:function fqz(d){this.a=d},
fqA:function fqA(){},
fqB:function fqB(){},
fuI:function fuI(){},
fuJ:function fuJ(){},
fuK:function fuK(){},
fxF:function fxF(){},
fCV:function fCV(d){this.a=d},
fCW:function fCW(d){this.a=d},
cGx:function cGx(d,e){this.a=d
this.b=e},
cGy:function cGy(d,e){this.a=d
this.b=e},
aIF:function aIF(d,e,f){this.a=d
this.b=e
this.c=f},
baI:function baI(){this.b=this.a=0},
baH:function baH(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
byk:function byk(){},
xl(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcz()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.u(w.gnt()),2,"0")+":"+B.a.b_(B.o.u(w.gGL()),2,"0")},
hYm(){var w,v=$.os(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"WS"+B.d.he(u)},
atX(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atX=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atX)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bL),$async$atX)
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
$.am.$1("[worksheet qr stash] load: "+A.w(p))
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
atY(d){return C.hYn(d)},
hYn(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$atY=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atY)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.I(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cL,null),$async$atY)
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
return A.i($async$atY,v)},
au_(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$au_=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$au_)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hYm()
w=4
return A.b(C.atX(),$async$au_)
case 4:r=h
q=B.a.i(e)
p=B.dS.aN(t)
J.aK(r,s,A.I(["ownerEmail",q,"projectId",f,"payload",B.cP.gcu().aN(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.atY(r),$async$au_)
case 5:u=new A.a1l("NGMYWSSYNC2|"+s,s,25)
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
return A.b(A.c8(),$async$atZ)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.atX(),$async$atZ)
case 4:q=f
p=J.a5(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a5(o)
m=A.aH(n.h(o,"usesRemaining"))
l=m==null?null:B.i.L(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.c9.cI(0,B.cI.aN(t))}catch(h){r=A.ab(h)
$.am.$1("[worksheet qr stash] decode: "+A.w(r))
u=null
w=1
break}if(B.a.i(s).length===0){u=null
w=1
break}j=l-1
if(j<=0)p.W(q,i)
else{n=x.N
m=x.z
m=A.dM(A.a3(o,n,m),n,m)
m.n(0,"usesRemaining",j)
m.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
p.n(q,i,m)}w=5
return A.b(C.atY(q),$async$atZ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atZ,v)},
hrt(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cN.az(999999)},
hYo(d){var w,v,u,t,s,r,q
try{w=A.ahy(d)
if(w==null)return d
v=w
if(J.Mb(v)>960||J.Ma(v)>960){s=v
r=J.Mb(v)>=J.Ma(v)?960:null
v=A.ahv(s,J.Ma(v)>J.Mb(v)?960:null,B.Q6,r)}s=v
u=A.anq(82).TX(s,B.zB)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cc(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
coQ(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$coQ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hYo(e)
$.coM.n(0,s,t)
u=C.bFQ(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$coQ,v)},
b4o(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4o=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d3(l,"data:image")){u=null
w=1
break}t=4
r=J.eH(l,",")?B.d.gan(J.lL(l,",")):l
q=B.cI.aN(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hrt()
w=7
return A.b(C.coQ(p,q),$async$b4o)
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
return A.i($async$b4o,v)},
coN(d){var w=0,v=A.j(x.T),u,t,s
var $async$coN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.coP(s),$async$coN)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cP.gcu().aN(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$coN,v)},
a9u(d){var w=0,v=A.j(x.H),u,t
var $async$a9u=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hEC(d)
if(t==null){w=1
break}$.coM.W(0,t)
w=3
return A.b(C.bFP(t),$async$a9u)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9u,v)},
bFQ(d,e){return C.ipH(d,e)},
ipH(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bFQ=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPs
w=7
return A.b(n==null?$.aPs=N.hdv():n,$async$bFQ)
case 7:r=g
q=new Uint8Array(A.cc(e))
p=J.n1(r,"thumbs","readwrite")
B.j8.mx(J.n0(p,"thumbs"),q,l)
w=8
return A.b(J.pW(p),$async$bFQ)
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
return A.i($async$bFQ,v)},
bFP(d){return C.ipF(d)},
ipF(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bFP=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPs
w=7
return A.b(o==null?$.aPs=N.hdv():o,$async$bFP)
case 7:r=f
q=J.n1(r,"thumbs","readwrite")
B.j8.Gk(J.n0(q,"thumbs"),m)
w=8
return A.b(J.pW(q),$async$bFP)
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
return A.i($async$bFP,v)}},D,Aw,Ax,A_,Ay,Az,N
J=c[1]
A=c[0]
B=c[2]
Q=c[257]
A0=c[163]
S=c[60]
A9=c[232]
L=c[212]
H=c[35]
E=c[222]
P=c[119]
Aa=c[235]
T=c[132]
Ab=c[134]
U=c[228]
Ac=c[114]
Ad=c[198]
A1=c[116]
Ae=c[231]
Af=c[44]
R=c[230]
M=c[90]
A2=c[87]
Ag=c[169]
A3=c[128]
A4=c[172]
Ah=c[121]
A5=c[199]
Ai=c[251]
Aj=c[189]
Ak=c[202]
A6=c[197]
Al=c[254]
Am=c[73]
A7=c[256]
An=c[79]
G=c[255]
Ao=c[259]
Ap=c[133]
Aq=c[118]
A8=c[216]
Ar=c[34]
V=c[117]
O=c[192]
As=c[203]
W=c[258]
At=c[155]
Au=c[124]
X=c[244]
Y=c[43]
F=c[96]
Av=c[33]
I=c[104]
K=c[138]
Z=c[77]
C=a.updateHolder(c[7],C)
D=c[250]
Aw=c[78]
Ax=c[210]
A_=c[253]
Ay=c[252]
Az=c[64]
N=c[61]
C.apE.prototype={}
C.b_H.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bjH(),f=h.x!=null&&h.zH(i).length===0
if(h.x!=null)w=f?B.b1:B.bC
else w=h.gUC()?B.bC:B.dX
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.L(D.boM,B.r,1)
s=x.p
r=A.q(i,A.x(A.a([A.q(i,D.f99,B.f,i,i,new A.p(B.b1.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.hb,i,i,i),B.X,D.fEV,B.ay,A.d(C.xl(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fAC,i,i,i)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,D.b75,i,i,i,i,B.a0q,i,i,i)
q=A.m(16)
p=A.L(B.aO,B.r,1)
o=A.L(B.b1.j(0.28),B.r,1)
n=A.hfK(h.d)
o=A.q(B.A,C.b_G(A.fN_(h.e,n),30),B.f,i,i,new A.p(B.m7,i,o,i,i,i,B.a7),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fvH,B.K,i,i)
m=A.m(14)
l=A.L(B.aO,B.r,1)
q=A.q(i,A.x(A.a([o,B.U,n,B.bH,D.fFd,B.af,A.q(i,A.x(A.a([D.fVp,B.bH,A.d(A.Bq(h.c),i,i,i,i,i,i,D.fqo,i,i,i)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.n),i,i,i,i,B.fg,i,i,1/0)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.aP,i,p,q,i,i,B.n),i,i,i,i,O.alK,i,i,i)
p=A.m(16)
m=A.L(B.aO,B.r,1)
l=j.aTj("Original due",C.xl(h.r,!1))
n=j.aTj("Current due",C.xl(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.X,A.q(i,A.x(A.a([l,B.U,n,B.X,A.q(i,A.d(h.gaNj(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.n),i,i,i,i,B.Ca,i,i,1/0),B.X,j.ckJ(),B.U,j.c7v(g,f)],s),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bi,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.L(B.aO,B.r,1)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fGa,B.ay,A.d(q,i,i,i,i,i,i,D.fuU,i,i,i)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.aP,i,n,o,i,i,B.n),i,i,i,i,B.bi,i,i,1/0)],s))}if(h.gaHQ()){q=A.m(14)
o=A.L(B.cu,B.r,1.6)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fWK,B.U,A.by(A.m(12),A.e8(new A.a6(1/0,88,A.b4(i,i,i,new A.X3(h.ax,B.T,D.fdU,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.n),i,i,i,i,B.GK,i,i,i)],s))}p.push(B.aB)
p.push(D.fOx)
return A.q(i,A.x(A.a([r,new A.D(B.a0f,A.x(p,B.al,i,B.e,B.j,0,B.p),i)],s),B.al,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.p(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aTj(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.abn,w,w,w),1),A.d(e,w,w,w,w,w,w,D.frr,w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)},
ckJ(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aau(B.dX,u,"Not paid yet")
w=t.zH(null).length
v=w===0?B.b1:B.bC
return this.aau(v,u,C.xl(t.x,!0))},
c7v(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aau(B.b1,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aau(B.b1,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.abn,u,u,u)
v=A.U(d).k("N<1,h2>")
v=A.C(new A.N(d,new C.c8m(),v),v.k("ak.E"))
return A.x(A.a([w,B.am,A.bV(B.bG,v,B.bs,u,6,6)],x.p),B.E,u,B.e,B.j,0,B.p)},
aau(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.abn,w,w,w),1),new A.dq(1,B.cr,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.e_,w,w),w)],x.p),B.E,w,B.e,B.j,0,w,w)}}
C.bcU.prototype={
a5(d,e){new A.X3(this.b,B.T,e,!0,3.5,null).a5(d,e)},
aD(d){return d.b!==this.b}}
C.apQ.prototype={
S(){return new C.aEz(A.a([],x.bp))},
ge3(){return this.c}}
C.aEz.prototype={
Y(){this.a2()
this.Jg()},
Jg(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a39(t.a.c),$async$Jg)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dQw(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jg,v)},
aVg(d,e){var w,v=null,u=this.a.d.a,t=u?B.T:B.aP,s=A.l(v,v,u?B.bu:B.bq,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bu:B.bq).j(0.22)
w=A.m(10)
return A.bt(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bi,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.bq).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b4J),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aVf(d){return this.aVg(d,null)},
Q3(d){return this.com(d)},
com(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q3=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.I2:B.eO
w=7
return A.b(new A.hW().CI(72,900,900,n),$async$Q3)
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
if(n!=null)n.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
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
b3q(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.T:B.aP,o=A.m(10),n=A.L((q?B.bu:B.bq).j(0.18),B.r,1)
if(d)q=B.cG
else q=s.a.d.a?B.bu:B.bq
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aP:B.as,r,r,r,r,r,r,r,r,12.5,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cG
else u=s.a.d.a?B.bu:B.bq
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.j,0,B.p),1)
v=A.fu(r,r,r,r,r,r,r,r,r,r,r,B.cG,r,r,r,r,r,r,r,r,r,r,r,r,r,B.cf)
q=A.a([q,B.ae,u,A.bN(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aG(r,r,r,r,A.X(B.cz,s.a.d.a?B.bu:B.bq,r,r,r,18),r,r,r,g,r,r,r,r,r,B.cf))
return A.q(r,A.A(q,B.l,r,B.e,B.j,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.n),r,r,r,B.jG,D.bBF,r,r,r)},
DF(d){return this.bDU(d)},
bDT(){return this.DF(null)},
bDU(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DF=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.au(new A.ba(a4,B.b6,B.aQ),s)
if(a3)a4=""
else{a4=a5.c
q=B.i.iZ(a4)
p=a5.c
a4=a4===q?B.o.u(B.i.L(p)):B.i.ac(p,2)}o=new A.au(new A.ba(a4,B.b6,B.aQ),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b6,B.aQ),s)
if(a3){a4=new A.V(Date.now(),0,!1).bR(6048e8)
m=A.bZ(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}else{a4=a5.f
m=A.bZ(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.hfK(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wZ?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",a4,new C.dQf(),new C.dQg(a2,t,a5,r,new C.dQh(a2,t),o,n,j),B.eH,!0,x.y),$async$DF)
case 3:g=a7
f=B.a.i(r.a.a)
e=A.d1(B.a.i(o.a.a))
if(e==null)e=0
d=B.a.i(n.a.a)
r.T$=s
r.P$=0
o.T$=s
o.P$=0
n.T$=s
n.P$=0
if(g!==!0||t.c==null){w=1
break}if(f.length===0||e<=0){t.c.M(x.q).f.U(D.fkq)
w=1
break}a0=a2.d
if(a0==null){t.c.M(x.q).f.U(D.fj5)
w=1
break}a1=A.fN_(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wZ?"male":"female"
w=7
return A.b(A.aiV(a3,A.hoa(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DF)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wZ?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.bZ(a3.gcl(),a3.gcg(),a3.gcz(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.bZ(a4.gcl(),a4.gcg(),a4.gcz(),0,0,0,0,0)))a5.cSi(a2.a)
w=8
return A.b(A.aiV(t.a.c,a5),$async$DF)
case 8:case 5:w=9
return A.b(t.Jg(),$async$DF)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DF,v)},
aVW(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cG.j(0.14)
else w=this.a.d.a?B.T:B.aP
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cG
else s=(this.a.d.a?B.bu:B.bq).j(0.2)
s=A.L(s,B.r,g?1.5:1)
r=C.b_G(d,18)
if(g)q=B.cG
else q=this.a.d.a?B.aP:B.as
return A.aJ(!1,B.a3,!0,v,A.aP(!1,u,!0,A.q(p,A.A(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.l,p,B.bc,B.j,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.n),p,p,p,p,B.bV,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
SU(d){return this.cGf(d)},
cGf(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$SU=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i0(B.w.j(0.55),!0,"Dismiss",s,new C.dQz(),new C.dQA(t,d),B.h1,!0,x.y),$async$SU)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aiV(t.a.c,d),$async$SU)
case 7:w=8
return A.b(t.Jg(),$async$SU)
case 8:case 1:return A.h(u,v)}})
return A.i($async$SU,v)},
Q2(d,e){return this.bOL(0,e)},
bOL(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Q2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lo(s,"Cancel","Delete",e.b+" \xb7 "+A.Bq(e.c)+" will be removed from this device.","Delete this debt?"),$async$Q2)
case 3:if(!g){w=1
break}w=4
return A.b(C.fGo(t.a.c,e.a),$async$Q2)
case 4:w=5
return A.b(t.Jg(),$async$Q2)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Q2,v)},
agi(d){return this.ci8(d)},
ci8(d){var w=0,v=A.j(x.H),u=this,t
var $async$agi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.L,null,new C.dQt(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$agi)
case 2:return A.h(null,v)}})
return A.i($async$agi,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.es5
w=J.dI(m.d,new C.dQB())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dQC())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cF(v,0,new C.dQD())
w=A.m(18)
s=m.a.d.a
r=s?D.cBi:D.aCF
q=A.L(s?B.cG.j(0.35):B.cG.j(0.18),B.r,1)
s=A.q(l,D.c2a,B.f,l,l,new A.p(B.cG.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.au,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.as,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aJ(!1,B.a3,!0,A.m(12),A.aP(!1,A.m(12),!0,D.err,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dQE(m),l,l,l,l,l,l,l),B.f,B.cG,0,l,l,l,l,l,B.aj)],p),B.l,l,B.e,B.j,0,l,l)
o=A.E(m.cCk("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bq(t)
r=A.a([A.q(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.b9A(v.length!==0,"Owed",n),1)],p),B.l,l,B.e,B.j,0,l,l)],p),B.E,l,B.e,B.j,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a9(B.aA,B.aF,B.x,r,l,l),B.n),l,l,l,l,B.alH,l,l,l),B.aB],p)
if(J.cq(m.d)){w=m.a.d.a
s=w?B.ec:B.c
q=A.m(18)
o=A.L((w?B.bu:B.bq).j(0.12),B.r,1)
n=A.q(l,D.bXY,B.f,l,l,new A.p(B.cG.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aP:B.as,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.x(A.a([n,B.af,w,B.ay,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bq,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.l,l,B.e,B.j,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.n),l,l,l,l,D.bEh,l,l,1/0))}else{w=m.gcnD()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.am,new A.D(D.bFY,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bq,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.al,l,B.e,B.j,0,B.p)},
b9A(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.L((v.a.d.a?B.bu:B.bq).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bq,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cG
else w=v.a.d.a?B.aP:B.as
return A.q(u,A.x(A.a([q,B.bH,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.j,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.n),u,u,u,u,B.ey,u,u,u)},
cCk(d,e){return this.b9A(!1,d,e)},
cnE(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zH(j).length,h=d.biX()
if(d.x!=null){w=d.zH(j).length
v=w===0?B.cG:B.bC}else if(d.gUC())v=B.bC
else{if(h)w=B.cG
else w=k.a.d.a?B.bu:B.bq
v=w}if(d.x!=null){w=d.zH(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xl(u,!1)}else{u.toString
t="Paid "+C.xl(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xl(w,!1)+" \xb7 "+i+" missed":"Due "+C.xl(w,!1)}w=k.a.d.a?B.ec:B.c
u=A.m(18)
if(d.gUC()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bu:B.bq).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cM,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bp:B.m7
o=A.L(d.gUC()&&d.x==null?B.bC.j(0.45):B.cG.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hfK(d.d)
o=A.q(B.A,A.da(C.b_G(A.fN_(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a7),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aP:B.as
m=x.p
n=A.a([new A.dq(1,B.cr,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHQ())B.d.v(n,A.a([B.e3,A.X(B.Pa,B.cG.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.l,j,B.e,B.j,0,j,j),B.cU,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.j,0,B.p),1)
n=A.Bq(d.c)
l=k.a.d.a?B.aP:B.as
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aJ(!1,B.a3,!0,j,A.aP(!1,q,!0,new A.D(Ai.alv,A.A(A.a([o,B.be,p,B.ae,A.x(A.a([n,B.bH,A.X(B.eJ,(k.a.d.a?B.bu:B.bq).j(0.5),j,j,j,18)],m),B.dL,j,B.e,B.j,0,B.p)],m),B.l,j,B.e,B.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dQv(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.p(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
C.uQ.prototype={}
C.alT.prototype={
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
n.push(A.aA(a0,A.q(a0,A.X(B.cz,t?a1.f:B.c,a0,a0,a0,17),B.f,a0,a0,new A.p(m,a0,l,a0,a0,a0,B.a7),a0,30,a0,a0,a0,a0,a0,30),B.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,d.f,a0,a0,a0,a0,a0,a0,!1,B.a4))
m=v?B.a6:B.A
l=A.a([],o)
k=a1.r
j=k.length!==0
if(j&&!v)l.push(new A.D(B.iK,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
i=a1.f
h=a1.x
g=h?"Georgia":a0
f=a2?16:19
a2=a2?2.2:0.5
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ayQ,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.H0,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.ev(m,A.A(l,B.l,a0,B.e,B.Q,0,a0,a0),B.f,B.e2)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bAQ,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cH:B.bt,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fI,A.x(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.feI)
a2=A.a([A.A(n,B.l,a0,B.e,B.j,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.wf,A.q(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a9(B.a6,B.aa,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lN,A.x(a2,B.l,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hv,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a9(B.aA,B.aF,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bC7,a0,a0,a0,a0)}}
C.aWq.prototype={
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
o=A.a([A.A(l,B.l,q,B.e,B.j,0,q,q),B.cU,n],m)
if(p.z)o.push(new A.D(B.ut,n,q))
return new A.D(B.d3,A.x(o,B.l,q,B.e,B.Q,0,B.p),q)}}
C.TV.prototype={
S(){return new C.bgx()}}
C.bgx.prototype={
gc2j(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aI(d,n,x.w).w,l=x.p,k=A.a([D.es0,D.es6],l)
for(w=0;w<8;++w){v=D.a4G[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HO:B.zj
q=t===s
r=A.X(r,q?B.eL:B.bW,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bm,A.d(v.b,n,n,n,n,n,n,new A.H(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.bz(1,B.bd,A.d(v.c,n,1,B.a2,n,n,n,B.AK,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aN(24,24)
p=new A.ay(B.eL,2,B.r,-1)
s=new A.p(n,n,new A.bG(p,p,p,p),new A.be(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eI,A.x(A.a([new A.D(B.n0,new A.c7(B.aL,B.e,B.j,B.l,n,B.p,n,0,r,n),n),A.q(n,new A.dy(!0,new C.alT(v,q.d,q.e,new C.dgb(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.j,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgc(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bCs,A.bI(D.h1g,n,new C.dgd(o,d),A.bo(B.b9,n,n,n,n,B.oU,n,n,new A.b9(A.m(16),B.a1),n,n,n)),n))
return A.bm(!0,new A.cS(new A.aY(0,1/0,0,m.a.b*0.9),A.cd(k,n,n,D.bGQ,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nw.prototype={
aj(){var w=this
return A.I(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bfA(d,e,f){return new C.nw(this.a,e,d,f)}}
C.Iq.prototype={
wW(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Iq(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aFY(d){var w=null
return this.wW(w,w,w,w,w,d,w,w,w,w,w,w)},
cNU(d){var w=null
return this.wW(w,w,w,w,d,w,w,w,w,w,w,w)},
bfy(d,e,f){var w=null
return this.wW(d,w,w,w,w,w,w,w,e,w,f,w)},
cOy(d){var w=null
return this.wW(w,w,w,w,w,w,d,w,w,w,w,w)},
cOH(d){var w=null
return this.wW(w,w,w,w,w,w,w,w,w,d,w,w)},
cNS(d){var w=null
return this.wW(w,w,w,d,w,w,w,w,w,w,w,w)},
cOJ(d){var w=null
return this.wW(w,w,w,w,w,w,w,w,w,w,w,d)},
cNP(d){var w=null
return this.wW(w,w,d,w,w,w,w,w,w,w,w,w)},
cNK(d){var w=null
return this.wW(w,d,w,w,w,w,w,w,w,w,w,w)},
Gd(d){var w=null
return this.wW(w,w,w,w,w,w,w,d,w,w,w,w)},
cOR(d,e,f,g,h,i,j,k,l,m,n){return this.wW(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.I(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cLo(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bRj(d),k=A.aH(d.h(0,"emblem")),j=k==null?o:B.i.L(k),i=A.aH(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DI.gev(D.DI))
s=i==null?o:B.i.D(i,18,36)
r=l.$2("position",D.a6o)
q=l.$2("frame",D.a5I)
l=l.$2("texture",D.a5E)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cOR(p,u,t,q,r,A.rc(d.h(0,"ribbon"))?A.GV(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_w.prototype={
S(){return new C.aBx(A.a([],x.I),D.OI)},
ge3(){return this.c}}
C.aBx.prototype={
Y(){var w,v=this
v.a2()
v.f=A.Ah(0,1)
w=$.aw()
v.z=new A.au(B.ax,w)
v.Q=new A.au(B.ax,w)
v.lg()
w=v.a
C.bEb(w.c,w.d).bG(new C.dgS(v),x.fL)},
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
return A.b(C.LF(s.c,s.d),$async$lg)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dgG(t,r))
t.axH()
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
gaug(){var w,v=this
if(!J.cq(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axH(){var w,v,u=this.gaug(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cgz(d){this.m(new C.dgD(this,d))
this.axH()},
NX(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NX=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nw(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSt(r.c,r.d,s),$async$NX)
case 3:w=4
return A.b(t.lg(),$async$NX)
case 4:if(t.c==null||J.cq(t.d)){w=1
break}q=J.qD(t.d,new C.dge(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dgf(t,p))
t.axH()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BH(p+1,B.cw,B.kT),$async$NX)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NX,v)},
Bn(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bn=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gaug()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aSt(o.c,o.d,new C.nw(s,r,q,new A.V(p,0,!1))),$async$Bn)
case 3:w=4
return A.b(t.lg(),$async$Bn)
case 4:if(t.c==null){w=1
break}t.m(new C.dgH(t))
case 1:return A.h(u,v)}})
return A.i($async$Bn,v)},
OD(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OD=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gaug()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dgn(r),s,null,!0,!0,x.y),$async$OD)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bDX(s.c,s.d,r.a),$async$OD)
case 4:t.m(new C.dgo(t))
w=5
return A.b(t.lg(),$async$OD)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UF(B.o.D(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OD,v)},
z3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bn(),$async$z3)
case 5:case 4:if(t.c==null){w=1
break}w=J.cI(t.d)?6:7
break
case 6:s=t.c
s.toString
r=t.a
q=r.c
p=r.e
o=r.x
w=8
return A.b(C.RX(s,r.r,o,p,q),$async$z3)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a7(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hFf(s,r.x,r.r),$async$z3)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LF(s.c,s.d),$async$z3)
case 10:l=e
for(s=n.d,r=J.cC(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.nw(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bz(r.c,r.d,l),$async$z3)
case 11:w=12
return A.b(t.lg(),$async$z3)
case 12:r=t.c
if(r==null){w=1
break}r.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z3,v)},
a1t(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1t=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bn(),$async$a1t)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz1(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dP(D.zM,new C.dgE(t),new C.dgF())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mP("Our Family",o,"",""))
for(o=J.aU(t.d);o.C();){n=o.gR(o)
p.push(new H.mP(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hhr(o,new H.rL(s,r,"",p,new H.v5(q.d,null,null,null,null,"","","")),null),$async$a1t)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1t,v)},
Ol(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Ol=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bn(),$async$Ol)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.agt,null,new C.dgj(t),s,!0,!0,!0,I.a9v,!1,!1,x.N),$async$Ol)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cNU(r)
t.m(new C.dgk(t,q))
s=t.a
w=7
return A.b(C.Sy(s.c,s.d,q),$async$Ol)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Ol,v)},
XU(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XU=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.agt,null,new C.dgp(t),r,!0,!0,!0,I.a9v,!1,!1,x.e),$async$XU)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dgq(t,s))
r=t.a
w=4
return A.b(C.Sy(r.c,r.d,s),$async$XU)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BH(0,B.dH,B.mX)
case 1:return A.h(u,v)}})
return A.i($async$XU,v)},
bUu(d){var w=d.bT(),v=B.a.b_(B.o.u(w.gcg()),2,"0"),u=B.a.b_(B.o.u(w.gcz()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz1(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c1x()
if(r.e)w=D.afa
else if(J.cq(r.d)){w=r.y
v=r.gz1(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fpK,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a6(q,330,new A.D(X.amJ,new C.ZO(w,v,0,q),q),q),B.bA,t,B.am,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kO.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bA],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.q(q,D.f8W,B.f,q,q,new A.p(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dK.j(0.45),B.I,18)],x.V),E.wR,B.n),q,q,q,q,B.On,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcKp(),q,q,q,q,q,q,!1,B.a4))
w.push(B.X)
w.push(A.ho(D.bU3,D.h0I,r.gaP0(),q))
B.d.v(u,w)}w=A.at(A.ci(A.x(u,B.l,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.ez,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kO.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.V,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dW:B.Bk
u=A.x(A.a([new A.D(D.bDx,w,q),A.E(A.JP(v,new C.dgQ(r),J.ad(r.d)+1,q,r.gcgy(),u,B.aL),1),r.bGO()],x.p),B.l,q,B.e,B.j,0,B.p)
w=u}v=x.p
return A.c4(q,D.Z8,new A.an(B.a0,q,B.b2,B.t,A.a([D.aQ9,A.bm(!0,A.x(A.a([p,A.E(w,1)],v),B.l,q,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c1x(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cI(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KN(B.ed,"AI",h.gbEG(),!0))
if(h.a.f)f.push(new C.KN(B.ml,"Cover",h.gbPn(),!1))
if(h.a.f)f.push(new C.KN(B.wL,"Header",h.gbKk(),!1))
if(J.cI(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KN(B.uT,"Print",h.gcpG(),!1))
if(h.a.f&&J.cI(h.d)&&h.r>=0){v=h.w
u=v?B.hI:B.j3
t=v?"Save":"Edit"
f.push(new C.KN(u,t,v?h.gcw_():new C.dgA(h),!1))}if(h.a.f)f.push(new C.KN(B.hW,"Add page",h.gaP0(),!1))
v=C.hB6(h.y.Q)
u=h.gz1(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.dGJ
else{k=new A.aN(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.ko.j(0.5),1,B.r,-1)
j=A.q(g,A.X(l.a,D.kO,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bG(i,i,i,i),new A.be(k,k,k,k),g,new A.a9(B.a6,B.aa,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kO.j(0.85)
p.push(new A.bz(1,B.bd,A.aA(B.c5,A.x(A.a([k,B.bH,A.d(l.b,g,1,g,g,g,g,new A.H(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.l,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.alT(v,u,t+" \xb7 "+s+" "+r,new C.dgB(h),A.A(p,B.l,g,B.e,B.j,0,g,g),g)},
Am(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Am=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bn(),$async$Am)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aU(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3o(B.d.aM(s," "))
s=t.c
s.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.dgg(t,p),s,null,!0,!0,x.N),$async$Am)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z3(),$async$Am)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ef(),$async$Am)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FR("Swahili (Kiswahili)",!0),$async$Am)
case 18:w=16
break
case 17:w=19
return A.b(t.cGT(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Am)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Am,v)},
ZP(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.L(E.ko.j(0.3),B.r,1),r=x.p
return new A.D(B.cx,A.aP(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.wR,B.a7),w,42,w,w,w,w,w,42),B.be,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.KG,w,w,w),A.d(g,w,w,w,w,w,w,B.AL,w,w,w)],r),B.E,w,B.e,B.j,0,B.p),1)],r),B.l,w,B.e,B.j,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.n),w,w,w,w,B.bi,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dgC(d,h),w,w,w,w,w,w,w),w)},
Ef(){return this.bTY()},
bTY(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ef=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dgt(r),a7,null,!0,!0,x.ei),$async$Ef)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eA("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.cf(null,null,!1,null,new C.dgu(o),a7,null,!0,!0,x.H).fv(new C.dgv(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.J)(d),++a1){k=d[a1]
J.c5(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zM[a1]
J.c5(j,i.a)}w=8
return A.b(C.ai3(a0,a7,new C.dgw(o),d,l,e,j),$async$Ef)
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
if(l!=null&&a6.a)A.a7(l,!0).eO()
l=o
l.sig($.aw())
J.aSW(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.M(x.q).f
j=n
l.U(A.b3(null,null,null,null,null,B.t,null,A.d(j==null?y.A:j,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}l=m.b
a3=l.gcm(l)
w=a3?9:10
break
case 9:l=A.a([],x.I)
for(a4=0;a4<J.ad(p);++a4){if(m.b.al(0,a4)){j=J.t(p,a4)
a7=m.b.h(0,a4).a
a7=j.bfA(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bz(j.c,j.d,l),$async$Ef)
case 11:w=12
return A.b(r.lg(),$async$Ef)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zM[a1].a)
a5=l.cLo(j,12,a7)
l=r.a
w=15
return A.b(C.Sy(l.c,l.d,a5),$async$Ef)
case 15:if(r.c!=null)r.m(new C.dgx(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BH(0,B.dH,B.mX)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.M(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.cAk("Undo",new C.dgy(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.el,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ef,v)},
FR(d,e){return this.cGU(d,e)},
cGT(d){return this.FR(d,!1)},
cGU(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FR=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eA("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.cf(null,null,!1,null,new C.dgJ(a0),k,null,!0,!0,x.H).fv(new C.dgK(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.c5(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3B(m,new C.dgL(a0)),$async$FR)
case 10:w=8
break
case 9:w=11
return A.b(C.bFG(new C.dgM(a0),m,a2),$async$FR)
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
if(o!=null&&f.a)A.a7(o,!0).eO()
o=a0
o.sig($.aw())
J.aSW(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.M(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bfA(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bz(k.c,k.d,o),$async$FR)
case 12:w=13
return A.b(r.lg(),$async$FR)
case 13:o=r.c
if(o==null){w=1
break}o=o.M(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.cAk("Undo",new C.dgN(r,d),null),null,null,null,null,B.t,null,k,null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FR,v)},
bGO(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dgh(v):u
r=A.aG(u,u,u,u,A.X(D.bPL,s?D.kO:B.aT,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cI(v.d)&&!v.w&&v.r>=0)s=A.ho(A.X(B.wu,B.Gm,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Gm,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOV(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kO.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dgi(v):u
return A.bm(!0,new A.D(D.bDl,A.A(A.a([r,s,A.aG(u,u,u,u,A.X(B.eJ,t<J.ad(v.d)?D.kO:B.aT,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.l,u,B.e,B.j,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_A.prototype={
S(){return new C.bgW(new A.au(B.ax,$.aw()))}}
C.bgW.prototype={
ga2B(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a3()},
gbSz(){switch(this.ga2B()){case"cover":var w=D.d7M
break
case"book":w=D.d38
break
default:w=D.dz_
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=E.ko.j(0.5),m=x.p,l=A.A(A.a([D.dGK,B.au,D.bJ4,A.aG(p,p,p,p,B.lq,p,p,p,new C.diE(d),p,p,p,p,p,p)],m),B.l,p,B.e,B.j,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jl(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.diF(q),q.ga2B()==="page",p,p,p,p))
if(q.a.d)k.push(A.jl(p,p,p,D.fWf,p,new C.diG(q),q.ga2B()==="book",p,p,p,p))
k.push(A.jl(p,p,p,D.fIT,p,new C.diH(q),q.ga2B()==="cover",p,p,p,p))
k=A.bV(B.bG,k,B.bs,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),q.d,p,p,p,p,p,2,A.bt(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.jO,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbSz(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.KD,p,p,p)
w.push(A.n2(p,B.c.j(0.08),r,B.hj,new C.diI(q,s),p,p,p,p))}return A.eO(p,E.BP,A.ci(A.x(A.a([l,B.X,D.fZz,B.am,k,B.af,j,B.U,A.bV(B.bG,w,B.bs,p,6,6),B.aB,A.dg(D.bU0,p,D.h_m,new C.diJ(q,d),A.bo(B.b9,p,p,p,p,B.oU,p,p,new A.b9(A.m(16),B.a1),p,p,p)),B.ay,D.fUt],m),B.E,p,B.e,B.Q,0,B.p),B.t,p,B.y,p,B.fs,p,p,B.ah),p,p,p,I.a0t,B.d7,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_y.prototype={
S(){return new C.aBA(A.a([],x.gA))},
ge3(){return this.c}}
C.afK.prototype={}
C.aBA.prototype={
Y(){this.a2()
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
return A.b(C.bEb(r.c,q),$async$lg)
case 6:j=e
i=J
w=7
return A.b(C.LF(t.a.c,q),$async$lg)
case 7:m.push(new l.afK(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dh6(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
baR(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QR(d,e){return this.ci6(0,e)},
ci6(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a7(s,!1).ca(A.e9(new C.dh5(u,e),!0,null,x.y)),$async$QR)
case 2:t=g
w=3
return A.b(u.lg(),$async$QR)
case 3:if(t===!0&&u.c!=null)u.c.M(x.q).f.U(D.aU0)
return A.h(null,v)}})
return A.i($async$QR,v)},
FT(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FT=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.M(x.q).f.U(D.aTX)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahm(s.c,s.d),$async$FT)
case 5:q=e
w=6
return A.b(t.lg(),$async$FT)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QR(0,B.d.fa(t.d,new C.dha(q))),$async$FT)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.RX(p,s.f,r,n,o),$async$FT)
case 10:m=e
w=11
return A.b(t.lg(),$async$FT)
case 11:if(m&&t.c!=null)t.c.M(x.q).f.U(D.aU0)
case 1:return A.h(u,v)}})
return A.i($async$FT,v)},
Qi(d,e){return this.ctI(0,e)},
ctI(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qi=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dh9(t,e),s,null,!0,!0,x.y),$async$Qi)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3O(s.c,s.d,e.a),$async$Qi)
case 4:w=5
return A.b(t.lg(),$async$Qi)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qi,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bGR(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.L(E.ko.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fF(0.7142857142857143,A.q(n,A.x(A.a([D.dGL,B.af,D.er2,B.ay,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kO.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.l,n,B.bc,B.j,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcKl(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.L(E.ko.j(0.85),B.r,1.6)
s=A.aA(n,A.q(n,D.c0Y,B.f,n,n,new A.p(B.w.j(0.3),n,A.L(E.ko.j(0.6),B.r,1),n,n,n,B.a7),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dhb(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.w.j(0.3)
p=A.L(E.ko.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.be,D.bJs,A.q(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.foK,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.n),n,n,n,n,B.hb,n,n,n)],l),B.l,n,B.e,B.j,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.c6R,B.n),n,n,n,Ay.O5,D.bBk,n,n,n)
if(o.e)k=D.afa
else k=k.length===0?D.bce:A.ct(new C.dhc(k))
return A.c4(n,D.Z8,new A.an(B.a0,n,B.b2,B.t,A.a([D.aQ9,A.bm(!0,A.x(A.a([w,A.E(k,1)],l),B.l,n,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGR(d){var w,v,u=this,t=null,s=u.baR(d),r=d.c,q=x.p,p=A.a([A.bR(0,A.ev(B.A,new A.a6(300,420,new C.ZO(d.b,s,r,t),t),B.f,B.dB),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aA(t,A.q(t,D.c0h,B.f,t,t,new A.p(B.w.j(0.55),t,A.L(B.aT,B.r,1),t,t,t,B.a7),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dh3(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.foj,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fF(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.U,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kO.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.l,t,B.e,B.j,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dh4(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KN.prototype={}
C.ZO.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dP(D.zM,new C.cPu(m),new C.cPv()),j=m.c,i=D.DI.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mt:B.bc
v=new C.cPw(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.enJ,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b4(l,l,l,new C.be8(j.x,h,l),B.az),0,0,0),A.ap(0,A.q(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a9(B.a6,B.aa,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aN(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.be(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.amK,8,0.85,2.2),v.$4(D.bGg,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.amK,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bGc,A.b4(l,l,l,new C.be_(h,l),B.az),l),0,0,0))
r=A.X(D.aBB[B.o.D(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ayQ,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cH,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bR(0,new A.D(D.bGH,A.x(o,B.l,l,w,B.j,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aIA(l),D.fdN),l,l,l,46,0,l))
return A.q(l,A.by(D.adO,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.p(l,l,l,D.adO,i,new A.a9(B.aA,B.aF,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.be8.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e1()
g.cY(11)
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
C.be_.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.Q(),j=A.K(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.a9
j.c=2.4
j.d=B.bw
for(w=e.a,v=e.b,v=[D.f3q,new A.cu([w,0,-1,1]),new A.cu([0,v,1,-1]),new A.cu([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
C.uR.prototype={}
C.a_6.prototype={
S(){return new C.be6()}}
C.be6.prototype={
gop(){var w=this.d
return w===$?this.d=this.a.c:w},
gz1(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b6,B.aQ),$.aw())}return v},
gaD9(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b6,B.aQ),$.aw())}return v},
gasO(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b6,B.aQ),$.aw())}return v},
t(){var w=this,v=w.gz1(0),u=v.T$=$.aw()
v.P$=0
v=w.gaD9()
v.T$=u
v.P$=0
v=w.gasO()
v.T$=u
v.P$=0
w.a3()},
atr(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jl(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d83(this,f,u),e===u,s,s,s,s))}return A.bV(B.bG,r,B.bs,s,6,8)},
az9(d){var w=null,v=B.c.j(0.07)
return A.bt(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.lX,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.gop(),a0=f.gz1(0),a1=a0.a.a,a2=f.gaD9(),a3=a2.a.a,a4=f.gasO(),a5=d.bfy(a4.a.a,a3,a1)
a1=x.w
a3=A.aI(a6,e,a1).w
a1=A.aI(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a6(190,260,A.ev(B.A,new A.a6(270,370,new C.ZO(a5,d,f.a.e,e),e),B.f,B.dB),e),e,e,e)
a0=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a0,e,e,e,e,e,2,f.az9("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8s(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a2,e,e,e,e,e,2,f.az9("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8t(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zM[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aT
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.q(e,e,B.f,e,e,new A.p(e,e,new A.bG(o,o,o,o),e,e,new A.a9(B.aA,B.aF,B.x,t.c,e,e),B.a7),e,46,e,e,e,e,e,46)
q=q?B.c:B.aD
v.push(A.aA(e,A.x(A.a([p,B.cU,A.d(t.b,e,e,e,e,e,e,new A.H(!0,q,e,e,e,e,10.5,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8u(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bV(B.bG,v,B.bs,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b9.j(0.35):B.c.j(0.07)
m=new A.aN(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eL:B.L,2,B.r,-1)
q.push(A.aA(e,A.q(e,A.X(D.aBB[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bG(o,o,o,o),new A.be(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8v(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bV(B.bG,q,B.bs,e,8,8)
a4=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aO(),a4,e,e,e,e,e,2,f.az9("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d8w(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.dg,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vC,e,e,e)
m=A.a([],w)
for(l=D.DI.gdO(D.DI),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eL:B.aT
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.q(e,e,B.f,e,e,new A.p(j,e,new A.bG(o,o,o,o),e,e,e,B.a7),e,34,e,e,e,e,e,34)
h=g?B.c:B.aD
m.push(A.aA(e,A.x(A.a([j,B.bH,A.d(i,e,e,e,e,e,e,new A.H(!0,h,e,e,e,e,10,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.l,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d8x(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bV(B.bG,m,B.bs,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vC,e,e,e)
k=f.gop()
return new A.D(new A.R(0,0,0,a3.f.d),A.bm(!0,new A.cS(new A.aY(0,1/0,0,a1.a.b*0.92),A.cd(A.a([D.fTV,B.af,d,B.aR,a0,B.X,a2,B.aB,D.h_8,B.U,v,B.aB,D.fU3,B.U,q,B.aB,a4,B.aB,p,B.U,m,B.aB,l,A.kV(e,9,""+B.i.V(f.gop().f),36,18,new C.d8y(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vC,e,e,e),B.am,f.atr(D.a6o,f.gop().r,new C.d8z(f),D.dCe),B.af,A.d("BORDER",e,e,e,e,e,e,M.vC,e,e,e),B.am,f.atr(D.a5I,f.gop().w,new C.d8A(f),D.dCk),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vC,e,e,e),B.am,f.atr(D.a5E,f.gop().x,new C.d8C(f),D.dDQ),B.am,A.iQ(e,B.b9,e,B.ag,e,new C.d8D(f),e,e,e,D.fO2,f.gop().z),B.bA,A.bI(D.fSy,e,new C.d8E(f,a6),A.bo(B.b9,e,e,e,e,B.oU,e,e,new A.b9(A.m(16),B.a1),e,e,e))],w),e,e,A_.amh,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIA.prototype={
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
u.sav(D.c7w.aK(0,new A.a1(0,0,0+w,0+v)))
d.af(t,u)},
aD(d){return!1}}
C.bju.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.Q()
w=A.K()
w.sav(D.c6x.aK(0,new A.a1(0,0,a2,a3)))
a4.ar(new A.a1(0,0,a2,a3),w)
v=B.i.cL(a1/112)
u=new A.e1()
u.cY(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.d7L[u.az(9)]
j=u.az(14)
J.bp(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a1(n,j,n+m,j+l)
h=A.bl(i,B.hz)
g=new A.ao(B.O,B.M,B.R,B.S,B.P)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sav(new A.a9(B.a6,B.aa,B.x,A.a([f,k,e],w),d,d).aK(0,i))
a4.am(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ao(B.O,B.M,B.R,B.S,B.P)
e.r=E.ko.j(0.55).gp(0)
a4.ar(new A.a1(g,j,h,j+2),e)
e=new A.ao(B.O,B.M,B.R,B.S,B.P)
e.r=E.ko.j(0.4).gp(0)
a4.ar(new A.a1(g,q,h,p),e)
t.restore()
j=u.az(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.sav(D.c5V.aK(0,new A.a1(0,r,a2,q)))
a4.ar(new A.a1(0,r,a2,q),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.w.j(0.5).gp(0)
p.y=B.kW
a4.ar(new A.a1(0,q,a2,q+14),p)}t=A.K()
t.r=D.bg1.j(0.72).gp(0)
a4.ar(new A.a1(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.K()
a3.sav(new A.c0(B.A,0.5,B.x,d,0,A.a([D.bog.j(0.22),B.L],w),d,d).aK(0,A.bY(new A.o(t,a1),a0)))
a4.N(new A.o(t,a1),a0,a3)},
aD(d){return!1}}
C.bcg.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.af("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.l5(new A.p(A.ar(D.kO,D.btk,w/4),o,new A.bG(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.LR,o,o,B.n),B.bj,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aLK,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aN(2,2)
t.push(A.q(o,o,B.f,o,o,new A.p(E.ko.j(0.6),o,o,new A.be(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.q(o,A.x(t,B.l,o,B.qU,B.j,0,B.p),B.f,o,o,new A.p(o,o,o,D.b4r,u,D.c7u,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dv,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aIA(o),D.fdI),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWq(p.y,r,L.iY,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.r,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iY.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fD_,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iY.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.X,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),p.w,o,o,o,o,o,2,A.bt(o,B.eK,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iY.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.ftE,!0,B.a5,B.AE,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.j,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fCS,o,o,o),B.ay,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iY.j(0.5),o,o,o,o,o,o,o,o,11,B.cH,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.U,A.A(A.a([A.E(A.q(o,o,B.f,D.G5.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fI,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.G5.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.G5.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.l,o,B.e,B.j,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.iY.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.Z2(A.cP(A.a([A.cP(o,o,o,o,o,o,o,o,o,D.fwR,B.a.aC(k,0,1)),A.cP(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.iY.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.ci(A.x(n,B.E,o,B.e,B.j,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.hU,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.iY.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.by(B.LR,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bFJ,A.x(s,B.al,o,B.e,B.j,0,B.p),o),A.ap(0,A.c3(o,new A.p(o,o,o,o,o,new A.a9(B.a6,B.aa,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bj),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.p(o,o,o,B.LR,v,D.c80,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.j,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.alU.prototype={
S(){return new C.alV(new A.eA(0,$.aw()),new C.bT7(),new C.amc(),D.hBz,null,null)},
gd1(){return this.d}}
C.a1N.prototype={
a7(){return"_Step."+this.b}}
C.alV.prototype={
gCu(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE7(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N1(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gTW(){var w=this.ghb(0)
return w.gzm()==null?"Babu":B.a.i(w.gzm().b)},
Y(){var w,v=this
v.a2()
w=v.ghb(0).gzm()
w=w==null?null:w.c
v.r.b=w===D.ot
w=v.q_(new C.bRt(v))
w.fO(0)
v.x!==$&&A.aQ()
v.x=w
v.a2y("Come closer, my children. I am "+v.gTW()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bwe()},
a2y(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.dc(D.akV,new C.bRn(w))},
bsB(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bRw(v))},
adX(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bst(){return this.bao()},
bao(){var w=this,v=w.gCu()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bRo(w))
w.a2y(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.mb,new C.bRp(w))},
cLv(){var w=this
w.m(new C.bRs(w))
w.a2y(w.gCu()[w.as].a)},
L1(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.acZ)return
w=p.gCu()
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
t.r=s.a+1.5}q=new A.e1()
q.cY(v*7+d)
p.m(new C.bRr(p,d,u,q))
p.a2y(u?D.dnx[q.az(4)]+" "+w[p.as].d:D.dk5[q.az(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCu()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bGm(t.at,t.ay,p)
t.m(new C.bRu(t,s))
t.a2y(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BU(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BV(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bRv())
w=1
break
case 4:++t.as
t.bao()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.Ye,new A.an(B.a0,v,B.ad,B.t,A.a([A.bR(0,new A.em(A.b4(v,v,v,new C.aWv(u,w.r,w.w,u),B.az),v),0,0,0),A.bm(!0,A.x(A.a([w.cc9(0),B.b3,w.bRJ()],t),B.l,v,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cc9(d){var w,v,u,t=this,s=null,r=A.aG(s,s,s,s,B.Q2,s,s,s,new C.bRq(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCu().length;++w){v=t.as
if(w<v||t.Q===D.b0N)v=B.cO
else v=w===v?B.c:B.aT
u=new A.aN(4,4)
p.push(A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,D.bB3,s,s,s,22))}p=A.E(A.x(A.a([D.fKN,A.A(p,B.l,s,B.e,B.j,0,s,s)],q),B.E,s,B.e,B.j,0,B.p),1)
v=A.m(14)
u=A.L(B.fp,B.r,1)
return new A.D(D.bGU,A.A(A.a([r,p,A.q(s,A.d("\ud83d\udd25 "+B.i.V(t.cy*100)+"%",s,s,s,s,s,s,B.iz,s,s,s),B.f,s,s,new A.p(B.aU,s,u,v,s,s,B.n),s,s,s,s,B.hb,s,s,s)],q),B.l,s,B.e,B.j,0,s,s),s)},
bRJ(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzm()
if(h==null)w=1
else w=h.c===D.ot?0:1
v=j.dx
u=j.db
t=D.qi.j(0.96)
s=A.m(22)
r=A.L(B.cO,B.r,3)
q=A.b4(i,i,i,new C.bp2(w,i),B.az)
p=A.d(j.Q===D.acZ?j.gTW()+" asks":"Elder "+j.gTW(),i,i,i,i,i,i,D.aVc,i,i,i)
o=j.db
o=B.a.aC(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c5,A.A(A.a([new A.a6(62,62,q,i),B.au,A.E(A.x(A.a([p,B.bH,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aVq,i,i,i)],n),B.E,i,B.e,B.j,0,B.p),1)],n),B.E,i,B.e,B.j,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbsA(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.aa1("Sit down by the fire",j.gbss()),i,i,i)
break
case 1:v=A.at(j.aa1("Ask me, Elder",j.gcLu()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCu()[j.as].b,m<u.length;++m){q=new A.aN(14,14)
l=new A.ay(D.lD,2.5,B.r,-1)
v.push(A.aA(i,A.q(i,A.d(u[m],i,i,i,i,i,i,D.aVm,B.K,i,i),B.f,i,D.aep,new A.p(D.ajT,i,new A.bG(l,l,l,l),new A.be(q,q,q,q),i,i,B.n),i,i,i,i,V.wi,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bRk(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bV(B.bG,v,B.bs,i,8,8)
break
case 3:v=j.fr
u=v?B.kv:Al.apO
u=A.X(u,v?B.eq:D.lD,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.eq:D.lD,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCu().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.aa1(v,j.gqm(j))],n),B.l,i,B.e,B.j,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCu().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aVG,i,i,i)],n)
u=j.cx
if(u>0){u=C.aQJ(u)
q=C.aQJ(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.abp,i,i,i))}v.push(B.U)
v.push(j.aa1("Back to the games",new C.bRl(j)))
v=A.x(v,B.l,i,B.e,B.j,0,B.p)
break
default:v=i}return A.q(i,A.x(A.a([o,B.X,v],n),B.E,i,B.e,B.Q,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aD9,i,B.n),i,i,i,B.yB,B.bi,i,i,i)},
aa1(d,e){var w=null,v=A.m(16),u=A.L(B.cO,B.r,2)
return A.aA(w,A.q(w,A.d(d,w,w,w,w,w,w,A2.KG,w,w,w),B.f,w,w,new A.p(D.lD,w,u,v,w,w,B.n),w,w,w,w,D.bEC,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.bp2.prototype={
a5(d,e){Y.fWb(d,e.el(B.I),e.gdA()*0.45,this.b,0,0.4)},
aD(d){return d.b!==this.b}}
C.aBy.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bT7.prototype={}
C.td.prototype={}
C.bp3.prototype={}
C.amc.prototype={
Mu(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.icR(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWv.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zl(l.d.Mu(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bp(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bU(0,u)
l.cAY(d,j)
l.bQh(d,j)
l.cJg(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bp(t.save())
t.translate(225,580)
d.pj(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.Q()
q=A.K()
p=x.O
o=x.n
q.sav(A.wa(B.I,r,A.a([D.bs8.j(0.55*s),F.Nk.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.I,r,q)
t.restore()
n=A.a([new A.y(528,new C.bT_(l,d,j,i)),new A.y(540,new C.bT0(l,d,j,i)),new A.y(546,new C.bT1(l,d,j,i)),new A.y(574,new C.bT2(l,d,j,i)),new A.y(612,new C.bT3(l,d,j,i)),new A.y(650,new C.bT4(l,d,j,i)),new A.y(656,new C.bT5(l,d,j,i))],x.E)
B.d.aZ(n,new C.bT6())
for(m=0;m<7;++m)n[m].b.$0()
l.bH9(d,j,i)
l.bTW(d,j)
t.restore()
$.Q()
t=A.K()
t.sav(A.wa(new A.o(w/2,v*0.6),e.gaod()*0.75,A.a([B.L,D.bfW],p),A.a([0.55,1],o),B.x,k,k,0))
d.ar(new A.a1(0,0,0+w,0+v),t)},
aD(d){return d.c!==this.c||d.d!==this.d},
cAY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e1()
h.cY(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=t.gp(0)
d.N(new A.o(v*450,20+u*300),0.8+s*1.1,r)}q=B.i.F(e,17)/1.2
if(q<1){p=new A.o(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.enh),C.iw(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.i.F(v+o*0.05,1)
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
s.r=D.biE.gp(0)
s.d=B.bw
s.e=B.dP
d.af(l,s)}},
bQh(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.aA7[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bs(new A.o(p,m),n*0.74,q*0.5)
k=Ab.yk.j(v)
$.Q()
j=new A.ao(B.O,B.M,B.R,B.S,B.P)
j.r=k.gp(0)
d.bZ(l,j)
q=A.bs(new A.o(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=T.xY.j(u).gp(0)
d.bZ(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.i.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.r=D.ahe.j(0.16*(1-h)).gp(0)
d.N(new A.o(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cJg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDw(d,D.end,0.9,e,D.hwT,!1,!1,D.b0K,1,!1)
w=$.Q().r
v=x.v
u=new A.aF(w,B.ai,g,g,A.a([],v))
u.E(new A.aZ(52,470))
u.E(new A.aq(50,486))
u.E(new A.aq(66,486))
u.E(new A.aq(64,470))
u.E(new A.bv())
t=A.K()
t.r=D.ajb.gp(0)
d.af(u,t)
C.bDw(d,D.enf,0.95,e,D.hwO,!1,!1,D.b0L,1,!0)
t=new A.aF(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(417,510))
t.E(new A.c6(431,532,445,510))
t.E(new A.aq(441,548))
t.E(new A.c6(431,553,421,548))
t.E(new A.bv())
u=A.K()
u.r=F.FO.gp(0)
d.af(t,u)
u=A.bs(D.ene,8,28)
t=A.K()
t.r=D.bup.gp(0)
d.bZ(u,t)
C.bDw(d,new A.o(-30+B.i.F(e/26,1)*510,492),0.82,e,D.hwU,!0,!1,D.X7,1,!1)
t=B.i.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bZ(A.bs(new A.o(s+q*16,r-6),16,11),C.iw(D.aj2,1.8))
u=q<0
C.bDw(d,new A.o(s-q*6,r),0.62,e,D.hwW,!1,u,D.X7,2.2,!1)
C.bDw(d,new A.o(s-q*32,r+4),0.58,e+1,D.hwS,!1,u,D.X7,2.2,!1)
this.bWF(d,D.emT,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bs(new A.o(o,n),8,11)
k=p===1
j=k?D.aiZ:D.ajB
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.r=j.gp(0)
d.bZ(l,i)
l=k?D.aiZ:D.ajB
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.r=l.gp(0)
d.N(new A.o(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.b=B.a9
k.c=1
k.r=B.aw.gp(0)
k.d=B.bw
k.e=B.dP
d.ah(new A.o(o+7.5,n+(-2+m)),new A.o(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.b=B.a9
k.c=1
k.r=B.aw.gp(0)
k.d=B.bw
k.e=B.dP
d.ah(new A.o(o,n+4),new A.o(o,n+8),k)}h=e<f.f
u=A.bs(D.a8n,15+Math.sin(e*2)*0.8,40)
t=A.K()
t.r=D.ahD.gp(0)
d.bZ(u,t)
u=A.bs(D.a8n.a4(0,new A.o(-14,h?-9:-2)),12,15)
t=A.K()
t.r=D.bkI.gp(0)
d.bZ(u,t)
t=new A.aF(w,B.ai,g,g,A.a([],v))
t.E(new A.aZ(130,592-(h?16:6)))
t.E(new A.aq(134,592-(h?22:9)))
t.E(new A.aq(138,592-(h?16:6)))
t.E(new A.bv())
u=A.K()
u.r=D.bkS.gp(0)
d.af(t,u)
u=D.a8n.a4(0,new A.o(-17,h?-9:-2))
t=A.K()
t.r=B.ia.gp(0)
d.N(u,1.1,t)
v=new A.aF(w,B.ai,g,g,A.a([],v))
v.E(new A.aZ(168,590))
w=Math.sin(e*8)
v.E(new A.c6(180,588+w*(h?6:0),178,595))
d.af(v,C.iw(D.ahD,3.5))},
bWF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a4(0,new A.o(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.b=B.a9
m.c=2
m.r=D.Yq.gp(0)
m.d=B.bw
m.e=B.dP
d.ah(new A.o(u+o,s),new A.o(u+(o+n*1.5),q),m)}w=A.bs(k,17,32)
v=$.Q()
r=A.K()
r.r=D.FM.gp(0)
d.bZ(w,r)
r=A.bs(k.a4(0,D.emk),7,26)
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
s=A.bs(k.a4(0,new A.o(24,-7+l)),9,12)
v=A.K()
v.r=D.FM.gp(0)
d.bZ(s,v)
v=-11+l
d.ah(k.a4(0,new A.o(22,v)),k.a4(0,new A.o(21,-17+l)),C.iw(D.Yq,1.6))
d.ah(k.a4(0,new A.o(26,v)),k.a4(0,new A.o(28,-16+l)),C.iw(D.Yq,1.6))
v=k.a4(0,new A.o(26,-8+l))
s=A.K()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a4(0,new A.o(26,-3+l)),k.a4(0,new A.o(26,1+l)),C.iw(D.bnz,1.4))
d.ah(k.a4(0,D.epg),k.a4(0,new A.o(-19,-7+Math.sin(f*7)*2)),C.iw(D.FM,2.4))},
bTU(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bs(new A.o(225+u*36,574+(t*13+6)),8,11)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=D.bt6.gp(0)
a6.bZ(u,t)}}u=A.bs(D.a8q.a4(0,B.cA),17,52)
$.Q()
t=A.K()
t.r=D.bft.gp(0)
a6.bZ(u,t)
t=A.bs(D.a8q.a4(0,B.cA),12,44)
u=D.bj1.j(0.6+0.3*Math.sin(a7*6))
s=A.K()
s.r=u.gp(0)
a6.bZ(t,s)
for(r=0;r<3;++r){v=D.djy[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.b=B.a9
o.c=7
o.r=D.FZ.gp(0)
o.d=B.bw
o.e=B.dP
a6.ah(new A.o(u+t*24,579+s*4),new A.o(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Bx.j(0.6)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.b=B.a9
n.c=2
n.r=t.gp(0)
n.d=B.bw
n.e=B.dP
a6.ah(new A.o(u+o*24,579+(p*4-2)),new A.o(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.f_B,D.f0a,D.f1f,D.f1z,D.f1d]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bqx,D.bmV,D.bsx][k]
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
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.i.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.ajz.j((1-a5)*0.9)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.r=p.gp(0)
a6.N(new A.o(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.i.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ahe.j(0.1*(1-a5))
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=q.gp(0)
a6.N(new A.o(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTW(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.i.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.buz.j(0.18*p)
$.Q()
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.r=o.gp(0)
d.N(new A.o(r,q),5,n)
n=new A.ao(B.O,B.M,B.R,B.S,B.P)
n.r=D.bol.j(0.9*p).gp(0)
d.N(new A.o(r,q),1.4,n)}},
c5F(d,e){switch(d){case 0:return e.b?D.hwP:D.b0i
case 1:return e.b?D.hwV:D.b0g
case 2:return D.b0f
case 3:return D.b0e
case 4:return D.b0h
default:return D.b0j}},
aDn(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
Ra(d,e,f,g){var w,v=this,u=D.a5Q[e],t=v.c5F(e,g),s=new C.bp3(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a5Q[e],l=e===0
m=B.i.D(((l?D.aLD:D.aLI).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a8u
s.as=D.E8
if(l){s.a=o?v.aDn(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.o(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.o(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.E8
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.ems
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.enN
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
s.Q=D.eqc
s.as=D.aLV}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDn(f,5)
s.b=0.4
s.as=new A.o(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDn(f,e*3)
s.b=0.5
s.c=0.4}}C.hzH(d,u.a,u.b*1.2,t,s,f,e,null)},
bH9(d,e,f){var w=new C.bSZ(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gdf(d){return this.c}}
C.afT.prototype={
a7(){return"_Stand."+this.b}}
C.adS.prototype={}
C.lr.prototype={}
C.bRJ.prototype={
bBL(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
G8(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bRK())
return r},
art(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aN7(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amC(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzm(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bRL(this))
return B.d.gH(w)}}
C.aue.prototype={}
C.zE.prototype={}
C.akO.prototype={
gC0(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bMx(),A.U(w).k("Y<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.I(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.ML.prototype={
gapv(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(t.gC0(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
p.push(A.I(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.I(["id",this.a,"title",q,"qs",p],u,t)},
d1L(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapv(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.J)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lr(B.a.i(s.a),p,B.d.co(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bav.prototype={}
C.a9X.prototype={}
C.bhM.prototype={}
C.afR.prototype={}
C.ak6.prototype={
S(){return new C.ak7(B.bE,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.ak7.prototype={
gMM(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE7(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbaK(){var w,v=this,u=v.e
if(u===$){w=v.q_(v.gccb())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Y(){this.a2()
this.gbaK().fO(0)},
t(){this.gbaK().t()
this.bw9()},
fO(d){this.m(new C.bKI(this))},
ccc(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bKD())},
b95(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMM()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bhM(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bt(w,new C.bKJ())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c8v()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMM()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.i.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.at0(v,0.8,B.cO)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.at0(m.cy,0.8,G.np)
m.aZG("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.at0(q,0.88,D.lD)
p=m.gMM()[m.x]
n=p.c
if(u===n){m.aZG("The right gourd fell! It was "+p.b[n]+".")
return}}}},
at0(d,e,f){var w,v,u,t=new A.e1()
t.cY(B.i.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.afR(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZG(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qj()}},
c8v(){var w=this
if(w.x+1>=w.gMM().length){w.Qj()
return}++w.x
w.b95()},
Qj(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMM().length
r=C.bGm(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bKB())
w=2
return A.b(C.BU(u.a.d,r),$async$Qj)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BV(t.d,t.c.a,"catch",u.z),$async$Qj)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bKC())
return A.h(null,v)}})
return A.i($async$Qj,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cca()
else w=v.ch?v.ccd():A.at(new A.D(B.ez,A.x(A.a([D.aWD,B.U,D.fMr,B.X,D.fSD,B.dY,C.uv("Play",v.geY(v),B.cO,B.hx,D.fy)],x.p),B.l,u,B.e,B.Q,0,B.p),u),u,u,u)
return new C.tF("Calabash Catch",w,B.f6,u)},
ccd(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hJ:B.Hx
p.push(A.X(u,v?B.av:B.bW,r,r,r,22))}p.push(B.b3)
v=s.x
u=s.gMM()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aVa,r,r,r))
p.push(B.be)
v=A.m(14)
p.push(A.q(r,A.d(""+s.z,r,r,r,r,r,r,B.iz,r,r,r),B.f,r,r,new A.p(B.by,r,r,v,r,r,B.n),r,r,r,r,B.GL,r,r,r))
p=A.A(p,B.l,r,B.e,B.j,0,r,r)
v=A.m(18)
t=A.L(B.cO,B.r,3)
return A.x(A.a([new A.D(D.bCn,p,r),A.q(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fwJ,B.K,r,r),B.f,r,r,new A.p(D.qi,r,t,v,r,r,B.n),r,r,r,B.f3,B.bi,r,r,1/0),B.am,A.E(A.ct(new C.bKH(s)),1)],q),B.l,r,B.e,B.j,0,B.p)},
cca(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pV,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMM().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Vy,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cd(A.a([D.bcW,u,t,B.aR,new C.Is(s,r,w.cx,v),B.aR,A.at(C.uv("Back to the games",new C.bKA(w),B.cO,B.k6,D.fy),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bcW.prototype={
a5(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.Q(),a3=A.K()
a3.sav(A.jy(B.I,new A.o(0,a0),D.d1G,G.aAp,B.x,e))
a4.ar(new A.a1(0,0,a1,0+a0),a3)
a3=A.K()
a3.r=G.No.gp(0)
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
w.r=D.bjX.gp(0)
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
w.r=D.agh.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cno[q]
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.agh.gp(0)
s.c=7
s.d=B.bw
a4.ah(new A.o(r,a2),new A.o(r+p*46,w),s)
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.afD.gp(0)
a4.N(new A.o(r+p*50,t),18,s)}a2=a0*0.88
w=A.K()
w.r=D.bkQ.gp(0)
a4.ar(new A.a1(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=D.ahV.gp(0)
t.c=2
a4.ah(new A.o(w,a1),new A.o(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.J)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bs(new A.o(u,s),12,54)
$.Q()
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=D.lD.j(0.6).gp(0)
a4.bZ(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bp(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=D.agZ.gp(0)
a4.N(D.elH,14,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=D.bpy.gp(0)
m.c=4
m.d=B.bw
a4.ah(D.elI,D.emP,m)
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.sav(new A.alF(D.eoY,46,D.dad,B.Dr,B.x,e,e,0))
a4.N(B.I,34,m)
m=A.bs(D.ep4,8,12)
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=B.c.j(0.35).gp(0)
a4.bZ(m,l)
k=new A.iH(new A.en(n.c,e,e,B.cJ,e,e,e,e,e,e,D.fuz),B.K,B.bX,new A.jg(1),e,e,3,e,B.bY,e,B.cs)
k.o5(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bl(A.bs(B.cM,m.gba(m)+8,l),B.fL)
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=D.qi.gp(0)
a4.am(j,l)
l=new A.ao(B.O,B.M,B.R,B.S,B.P)
l.r=D.lD.gp(0)
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
Y.Bl(a4,new A.o(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dK,F.mV,!1,(w+1)/2)
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
m.r=D.Zf.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=D.Bx.gp(0)
m.c=1.4
a4.ah(new A.o(t,a2),new A.o(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.K()
s.r=G.np.gp(0)
a4.ar(new A.a1(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.K()
s.r=D.bk2.gp(0)
a4.bZ(new A.a1(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.J)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=g.e.j(B.i.D(s,0,1)).gp(0)
a4.N(new A.o(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fq(e,B.cs,e,e,e,A.cP(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cO.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Dl,e,e),"+"+a2),B.a5,B.bX,e,B.dz,B.bY)
k.e5()
k.a5(a4,new A.o(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aD(d){return!0}}
C.QF.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aBw(w.c,w.f,v),B.az),s=A.m(10),r=A.L(B.bD,B.r,1.4)
return new A.a6(u+22,v,A.x(A.a([new A.a6(u,u,t,v),B.cU,A.q(v,A.d(w.d,v,1,B.a2,v,v,v,D.fnc,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.n),v,v,v,v,B.n1,v,v,v)],x.p),B.l,v,B.e,B.Q,0,B.p),v)},
gZ(d){return this.e}}
C.aBw.prototype={
a5(d,e){var w=e.el(B.I),v=e.gdA(),u=this.c?0.8:0
return Y.fWb(d,w,v*0.44,this.b,0,u)},
aD(d){return d.b!==this.b||d.c!==this.c}}
C.aA0.prototype={}
C.auQ.prototype={
S(){return new C.auR(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.auR.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hF_(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaFq(){var w=this.z
return w===$?this.z=this.Xn(0):w},
gj2(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.c_(w,-1,!1,x.S)}return v},
Xn(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.aA0(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.aA0(v[t],u[t],-1))
v=new A.e1()
v.cY(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dr(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.gow()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qD()}this.bwD()},
cRC(d,e){var w,v,u,t,s,r=this
if(d>=r.gj2().length||r.gj2()[d]!==-1||B.d.q(r.gj2(),e))return
w=r.gaFq()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cqz(r,e,w,v))
A.cy(B.lJ,new C.cqA(r))
return}++r.r
u=A.bn(null,B.hF,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cqB(r,d,e,w,v))
u.cr(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cF(n,0,new C.cqC())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cqD(t,r))
w=5
return A.b(C.BU(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BV(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cqE())
w=1
break
case 4:for(o=t.as,n=new A.dr(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.gow()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qD()}o.a8(0)
t.m(new C.cqF(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pV,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Vy,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tF(q,A.cd(A.a([D.af8,w,v,B.aR,new C.Is(u,t,r.ch,p),B.aR,A.at(C.uv("Back to the games",new C.cqv(d),B.cO,B.k6,D.fy),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f6,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tF(q,new A.D(B.uw,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aV5,B.K,p,p),A.E(A.ct(new C.cqw(r,s)),1)],x.p),B.l,p,B.e,B.j,0,B.p),p),B.f6,p)}}
C.bcp.prototype={
a5(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cQy(),A.U(b2).k("Y<1>")).gI(0),b4=a9.b,b5=b4.a4(0,B.Jy)
$.Q()
w=A.K()
w.r=D.lE.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a4(0,D.elu)
u=A.K()
u.r=B.ok.j(0.5).gp(0)
u.c=10
u.d=B.bw
b6.ah(new A.o(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.dH.aA(0,B.i.D(b2[p],0,1))
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
if(m<1)for(o=new A.aF(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),i=new A.rv(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jG(b1));--h
g=new A.BS(i,h)
f=0
for(;;){i.iz()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.iz()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.Q()
a1=new A.ao(B.O,B.M,B.R,B.S,B.P)
a1.r=B.aT.gp(0)
a1.b=B.a9
a1.c=3
b6.af(new A.aF(l,d,b0,new A.cu([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aF(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),k=new A.rv(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jG(b1));--a0
k.iz()
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
a4.d=B.bw
b6.af(new A.aF(l,a2,b0,new A.cu([new A.BS(k,a0),0,a1*m,!0]),a3),a4)
k.iz()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.iz()
a5=n[a0].Df(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bs(new A.o(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.O,B.M,B.R,B.S,B.P)
a3.r=B.b5.gp(0)
b6.bZ(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iH(D.fmF,B.a5,B.bX,new A.jg(1),b0,b0,b0,b0,B.bY,b0,B.cs)
a8.e5()
a8.a5(b6,new A.o(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aD(d){return!0}}
C.ayN.prototype={
S(){return new C.ayO(A.aR(x.S))},
gd1(){return this.d}}
C.ayO.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hFU(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Y(){this.a2()
this.b9e()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
b9e(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.dc(B.rP,new C.cFv(this))},
bqa(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cFD(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cFE(v,d))
A.cy(B.iu,new C.cFF(v))}},
cX4(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cFG(w))},
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
t.m(new C.cFH(t,s))
w=5
return A.b(C.BU(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BV(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cFI())
w=1
break
case 4:t.m(new C.cFJ(t))
t.b9e()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.pV,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Vy,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tF(a1,A.cd(A.a([D.bd7,w,v,B.aR,new C.Is(u,t,a0.ax,a2),B.aR,A.at(C.uv("Back to the games",new C.cFx(a3),B.cO,B.k6,D.fy),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f6,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KP,B.K,a2,a2),B.X,A.at(A.lB(new C.cFy(a0,r),a2,B.b4,B.hF,a2,a2,new A.br(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aN(16,16)
l=new A.ay(B.cO,2,B.r,-1)
k=o+1
w.push(new A.r3(new A.br(0,1,u),new C.cFz(),A.q(a2,new A.c7(B.aL,B.e,B.j,B.l,a2,B.p,a2,0,A.a([new A.qE(A.d(""+k,a2,a2,a2,a2,a2,a2,B.nZ,a2,a2,a2),D.lD,a2,12,a2),B.au,new A.bz(1,B.bd,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fzj,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.qi,a2,new A.bG(l,l,l,l),new A.be(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cx,B.bi,a2,a2,a2),B.b4,B.iu,a2,new A.bJ("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bN(!1,D.h_y,a2,a2,!0,a2,a2,a2,a0.gcX3(),a2,a2),a2,a2,a2))
w.push(B.U)
if(a0.as){u=D.lE.j(0.2)
q=A.m(16)
p=A.L(D.lE,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fE,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.x(A.a([m,B.X,C.uv(v,a0.gqm(a0),B.cO,B.jq,D.fy)],t),B.l,a2,B.e,B.j,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bF,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dk:B.cO.j(0.2)
g=new A.aN(16,16)
l=new A.ay(n.q(0,o)?B.fh:B.cO,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bW:B.c
d=n.q(0,o)?B.xe:a2
t.push(new A.r3(new A.br(0,i,u),new C.cFA(),A.aA(a2,A.q(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.H(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.aei,new A.p(h,a2,new A.bG(l,l,l,l),new A.be(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jo,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cFB(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b4,B.md,a2,new A.bJ("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bV(B.fO,t,B.bs,a2,10,10))}return new C.tF(a1,A.cd(w,a2,a2,B.alT,a2,a2,B.ah,!1),B.f6,a2)}}
C.azM.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aGZ.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a3()}}
C.afF.prototype={
ar0(d){},
arx(){var w=this,v=w.q_(new C.f6Y(w))
v.fO(0)
w.LU$!==$&&A.aQ()
w.LU$=v}}
C.aKM.prototype={
gbmB(d){var w=this.c
return B.a.aC(w,0,Math.min(this.d,w.length))},
VW(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.dc(D.akV,new C.fh6(w))},
bsz(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.am2.prototype={
S(){return new C.am3(new C.amc(),A.a([],x.t),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am3.prototype={
gMK(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE7(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N1(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqu(){var w=this.r
return w===$?this.r=new C.aKM(new C.bSv(this)):w},
gapR(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMK()[v].c)u.push(1)
return u.length},
gblV(){var w=this.ghb(0)
return w.gzm()==null?"Elder":B.a.i(w.gzm().b)},
Y(){this.a2()
this.arx()},
t(){var w,v=this
v.gqu().t()
v.f.t()
w=v.LU$
w===$&&A.c()
w.t()
w=v.q8$
w.T$=$.aw()
w.P$=0
v.bwh()},
cLH(){var w=this
w.m(new C.bSs(w))
w.gqu().VW(w.gMK()[w.x].a)},
L1(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqu()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.q8$.a
v.ax=u
v.ay=u+1
v.m(new C.bSq())
A.cy(B.hF,new C.bSr(v))},
bq6(){var w=this.gapR(0)/this.gMK().length*100
if(w>=90)return D.eXr
if(w>=75)return D.eVt
if(w>=60)return D.eM6
if(w>=45)return D.ePx
return D.eGu},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.cub()
w=A.bR(0,new A.em(A.b4(m,m,m,new C.bt5(n,n.q8$),B.az),m),0,0,0)
if(!n.Q){v=D.qi.j(0.96)
u=A.m(20)
t=A.L(B.cO,B.r,3)
u=A.q(m,A.x(A.a([A.d("Elder "+n.gblV()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aW_,B.K,m,m),B.X,C.uv("Start the test",n.gBR(),B.cO,B.j3,D.fy)],x.p),B.l,m,B.e,B.Q,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.n),m,m,m,m,B.bF,m,m,m)
v=u}else{v=n.x
u=n.gMK()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aW1,m,m,m)
if(n.Q){t=n.gqu()
t=t.d<t.c.length}else t=!1
if(t)u=D.ff7
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aN(10,10)
o=new A.ay(D.Bx,4,B.r,-1)
s.push(A.aA(m,A.q(m,A.d(q[r],m,m,m,m,m,m,D.fqr,B.K,m,m),B.f,m,D.aei,new A.p(D.bg0,m,new A.bG(o,o,o,o),new A.be(p,p,p,p),m,m,B.n),m,m,m,m,B.Od,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bSt(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bV(B.fO,s,B.bs,new A.bJ("o"+t,x.W),8,8)}u=A.x(A.a([v,B.am,A.p8(u,B.mW,A.qy(),B.b4,B.b4,A.LC())],x.p),B.l,m,B.e,B.Q,0,B.p)
v=u}return new C.tF("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f6,m)},
cub(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bq6(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMK()[v].c)g.push(v)
u=A.m(22)
t=A.L(B.cO,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.fuS,B.K,i,i)
r=A.d("Signed by Elder "+j.gblV(),i,i,i,i,i,i,D.ftw,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fyF,i,i,i),D.eyo],q)
o=A.d(h.b,i,i,i,i,i,i,D.fAx,i,i,i)
n=j.gapR(0)
m=j.gMK()
u=A.q(i,A.x(A.a([D.fLI,B.ay,s,r,B.X,new A.an(B.A,i,B.ad,B.t,p,i),o,B.am,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.abp,i,i,i),B.U,D.asH],q),B.l,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(D.qi,i,t,u,i,i,B.n),i,i,i,i,B.fs,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Is(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aR,D.h0C,B.U],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.J)(g),++l){v=g[l]
r=new A.aN(14,14)
k=new A.ay(B.by,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.fY,i,i,i),B.ay,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fw2,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fyh,i,i,i)],q),B.E,i,B.e,B.j,0,B.p),B.f,i,i,new A.p(B.dk,i,new A.bG(k,k,k,k),new A.be(r,r,r,r),i,i,B.n),i,i,i,B.cx,B.bi,i,i,i))}B.d.v(s,u)}s.push(B.aB)
s.push(A.at(C.uv("Back to the games",new C.bSm(j),B.cO,B.k6,D.fy),i,i,i))
return new C.tF("Village School",A.cd(s,i,i,B.bQ,i,i,B.ah,!1),B.f6,i)}}
C.bt5.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.q8$.a
a0.zl(e.f.Mu(a1))
w=C.hcC(a1)
v=a0.c
J.bp(v.save())
v.translate(w.a,w.b)
a0.bU(0,w.c)
if(e.Q){u=e.gqu()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cX_[s]-6
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=D.FZ.gp(0)
a0.ar(new A.a1(u,340,u+12,450),r)}u=A.bl(D.a9o.cn(10),B.i_)
$.Q()
r=A.K()
r.r=D.Bx.gp(0)
a0.am(u,r)
r=A.bl(D.a9o,B.hQ)
u=A.K()
u.sav(A.jy(new A.o(30,96),new A.o(420,346),D.dfy,f,B.x,f))
a0.am(r,u)
q=new A.e1()
q.cY(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bs(new A.o(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=B.c.j(0.025).gp(0)
a0.bZ(o,r)}u=A.K()
u.r=I.aiJ.gp(0)
a0.ar(new A.a1(30,354,420,362),u)
u=A.K()
u.r=B.aP.gp(0)
a0.ar(D.f6x,u)
u=A.K()
u.r=B.bN.gp(0)
a0.ar(D.f6B,u)
u=A.bl(D.f6r,B.hP)
r=A.K()
r.r=D.Zf.gp(0)
a0.am(u,r)
n=B.i.D((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqu().gbmB(0)
m=A.fq(f,B.cs,f,7,f,A.cP(f,f,f,f,f,f,f,f,f,D.fCK,u+(t?"|":"")),B.a5,B.bX,f,B.dz,B.bY)
m.o5(346)
J.bp(v.save())
u=A.hS(D.a9o)
r=$.mf()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hS(new A.a1(30+390*n,96,420,346)),r[1],!0)
m.a5(a0,new A.o(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bl(new A.a1(u,r,u+40,r+90),B.fL)
u=A.K()
u.r=D.bvl.gp(0)
a0.am(r,u)}}else{m=A.fq(f,B.cs,f,f,f,D.fmV,B.K,B.bX,f,B.dz,B.bY)
m.o5(340)
m.a5(a0,new A.o(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.i.F(u+p/8,1)
o=B.o.F(e.gqu().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.O,B.M,B.R,B.S,B.P)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.o(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzm()
i=(u==null?f:u.c)===D.ot?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f6Z(d,a0,i,t,h,D.emE)),new A.y(520,new C.f7_(a0,d,t)),new A.y(575,new C.f70(a0,d,t)),new A.y(585,new C.f71(this,a0,d,t)),new A.y(615,new C.f72(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f73())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cce(d,e){var w,v,u,t,s,r,q,p=$.Q(),o=A.a([],x.v),n=new A.aF(p.r,B.ai,null,null,o)
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
C.am0.prototype={
S(){return new C.am1(new C.amc(),A.T(x.S,x.i),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.am1.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hEN(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj2(){var w=this.z
return w===$?this.z=this.FH(0):w},
gaLH(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FH(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.co(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FH(0):r).length);++v}s.Q=w
r=w}return r},
FH(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e3(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e1()
u.cY(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bS8())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a2()
this.arx()},
t(){var w,v=this
v.e.t()
w=v.LU$
w===$&&A.c()
w.t()
w=v.q8$
w.T$=$.aw()
w.P$=0
v.bwg()},
ar0(d){var w,v,u,t,s,r=this,q=r.gj2().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.co(u===$?r.z=r.FH(0):u,v)
s=r.gaLH()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLH()[v])*Math.min(1,w)}},
d1q(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj2().length)return
w=v.y
if(w===-1){v.m(new C.bSj(v,d))
return}if(w===d){v.m(new C.bSk(v))
return}v.m(new C.bSl(v,B.d.co(v.gj2(),v.y),d,B.d.co(v.gj2(),d)))},
cMo(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FH(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FH(0):u)[v]]===v);++v}s.m(new C.bSe(s,B.d.cD(w,new C.bSf())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bSg(t,s))
w=5
return A.b(C.BU(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BV(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bSh())
w=1
break
case 4:t.m(new C.bSi(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.pV,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tF("Line Up",A.cd(A.a([D.af8,w,B.aR,new C.Is(v,u,l.ch,k),B.aR,A.at(C.uv("Back to the games",new C.bSa(d),B.cO,B.k6,D.fy),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f6,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bSb(l))
u=A.bR(0,A.ct(new C.bSc(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aW1,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fvj,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fxw,B.K,k,k)],q),B.l,k,B.e,B.j,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.m(16)
n=l.ax
m=A.L(n?D.lE:G.np,B.r,2)
r.push(A.q(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bSd(l),x.cM).aM(0,", then ")+".",k,k,k,k,k,k,D.fzG,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.n),k,k,k,B.d3,B.bi,k,k,1/0))}if(!l.at)r.push(C.uv("That is my line!",l.gcMn(l),B.cO,B.hI,D.fy))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.uv(w,l.gqm(l),B.cO,B.jq,D.fy))}return new C.tF("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ap(12,A.x(r,B.l,k,B.e,B.Q,0,B.p),k,k,12,12,k,k)],q),k),B.f6,k)}}
C.bjC.prototype={
a5(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.q8$.a
c7.zl(c5.e.Mu(c8))
w=C.hcC(c8)
v=c7.c
J.bp(v.save())
v.translate(w.a,w.b)
c7.bU(0,w.c)
u=c5.gj2().length
t=$.Q().r
s=x.v
r=new A.aF(t,B.ai,c4,c4,A.a([],s))
r.E(new A.aZ(10,470))
r.E(new A.c6(225,500,440,470))
q=A.K()
q.r=D.Zf.gp(0)
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
m.r=[B.cO,G.np,D.lE,B.aH][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b1k(c7,"OLDEST",D.enC,B.cO)
this.b1k(c7,"YOUNGEST",D.en4,B.b5)
t=A.bl(D.f6l,B.fL)
s=A.K()
s.r=D.FZ.gp(0)
c7.am(t,s)
s=A.bl(D.f6k,B.hQ)
t=A.K()
t.r=D.Bx.gp(0)
c7.am(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.drR())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.J)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.co(a1===$?c5.z=c5.FH(0):a1,f)
o=c5.gaLH()[f]
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
c7.N(new A.o(o,520),54,a9)}a9=D.djm[B.o.F(b0,6)]
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
else b9=a3?D.epJ:c4
if(b1)c0=new A.o(3+b2*8,-56)
else if(h&&a7)c0=D.aLV
else c0=a3?new A.o(30,-104+Math.sin(e)*5):c4
C.Sw(c7,new A.o(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.JA,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iH(new A.en(a8,c4,c4,B.cJ,c4,c4,c4,c4,c4,c4,D.ft2),B.a5,B.bX,new A.jg(1),"\u2026",c4,1,c4,B.bY,c4,B.cs)
c1.o5(q)
c2=A.bl(A.bs(new A.o(o,650),24,c1.b.c+16),B.fL)
$.Q()
a8=new A.ao(B.O,B.M,B.R,B.S,B.P)
if(a6)a9=B.i8
else a9=a7?B.rJ:D.qi
a8.r=a9.gp(0)
c7.am(c2,a8)
a8=new A.ao(B.O,B.M,B.R,B.S,B.P)
if(a6)a9=D.lE
else a9=a7?G.np:D.lD
a8.r=a9.gp(0)
a8.b=B.a9
a8.c=2
c7.am(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a5(c7,new A.o(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iH(new A.en(""+(a2+1),c4,c4,B.cJ,c4,c4,c4,c4,c4,c4,D.ftl),B.a5,B.bX,new A.jg(1),c4,c4,c4,c4,B.bY,c4,B.cs)
c3.e5()
c3.a5(c7,new A.o(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.i.F(p*53+Math.sin(c5+p)*20,450)
q=B.i.F(t+p*37,420)
J.bp(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bs(B.I,4,8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=[B.cO,G.np,D.lE,B.aH,B.c][B.o.F(p,5)].gp(0)
c7.ar(q,m)
v.restore()}v.restore()},
b1k(d,e,f,g){var w,v,u=null,t=A.fq(u,B.cs,u,u,u,A.cP(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Dl,u,u),e),B.a5,B.bX,u,B.dz,B.bY)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a5(d,f.aJ(0,new A.o(v/2,w.gba(w)/2)))},
aD(d){return!1}}
C.a25.prototype={
a7(){return"_Trip."+this.b}}
C.alX.prototype={
S(){return new C.alY(D.Xc,new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alY.prototype={
gDs(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bE7(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N1(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqu(){var w=this.f
return w===$?this.f=new C.aKM(new C.bRV(this)):w},
gTW(){var w=this.ghb(0)
return w.gzm()==null?"Grandma":B.a.i(w.gzm().b)},
Y(){this.a2()
this.arx()},
t(){var w,v=this
v.gqu().t()
w=v.LU$
w===$&&A.c()
w.t()
w=v.q8$
w.T$=$.aw()
w.P$=0
v.bwf()},
ar0(d){var w,v,u,t=this
if(t.r!==D.ad8)return
w=B.dC.aA(0,B.i.D((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDs()
if(v+1>=u.length){t.r=D.ad9
t.WS()}else{++t.w
t.ay=!1
t.r=D.Xd
t.gqu().VW(u[t.w].a)}if(t.c!=null)t.m(new C.bRT())}},
WS(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WS=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqu().VW("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDs().length
r=C.bGm(t,u.z,s)
u.as=r
w=2
return A.b(C.BU(u.a.d,r),$async$WS)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BV(s.d,s.c.a,"journey",u.x*10),$async$WS)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bRN())
return A.h(null,v)}})
return A.i($async$WS,v)},
brq(){this.aUr()},
aUr(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.ad8
if(w.c!=null)w.m(new C.bRO())},
L1(d){var w,v,u,t,s=this
if(s.r!==D.Xd)return
w=s.gDs()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bRS(s,d,v))
u=s.gqu()
t=s.w
u.VW(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cRB(){if(this.r!==D.B5)return
this.aUr()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.em(A.b4(s,s,s,new C.bj1(t,t.q8$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDs().length;++w){v=t.w
if(w<v||t.r===D.ad9)v=B.cO
else v=w===v?B.c:B.aT
u=new A.aN(4,4)
p.push(new A.bz(1,B.bd,A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.be(u,u,u,u),s,s,B.n),s,7,s,B.wm,s,s,s,s),s))}p.push(B.bm)
p.push(D.fNl)
return new C.tF("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ap(s,A.A(p,B.l,s,B.e,B.j,0,s,s),s,s,12,12,2,s),A.ap(10,t.clO(),s,s,10,10,s,s)],q),s),B.f6,s)},
clO(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bRR(o),l=D.qi.j(0.96),k=A.m(22),j=A.L(B.cO,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTW()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aW_,B.K,n,n),B.X,C.uv("Start the journey",o.gbrp(),B.cO,D.bQ2,D.fy)],x.p),B.l,n,B.e,B.Q,0,B.p)
break
case 3:w=D.bcH
break
case 1:w=o.w
v=o.gDs()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aN(14,14)
p=new A.ay(D.lD,2.5,B.r,-1)
t.push(A.aA(n,A.q(n,A.d(r[s],n,n,n,n,n,n,D.aVm,B.K,n,n),B.f,n,D.aep,new A.p(D.ajT,n,new A.bG(p,p,p,p),new A.be(q,q,q,q),n,n,B.n),n,n,n,n,V.wi,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bRP(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.U,A.bV(B.bG,t,B.bs,n,8,8)],u),B.E,n,B.e,B.Q,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDs().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.U,new A.bM(B.aa,n,n,C.uv(v,o.gcRA(),B.cO,B.jq,D.fy),n)],x.p),B.E,n,B.e,B.Q,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTW()),B.U,A.d(""+o.x+" of "+o.gDs().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aVG,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aQJ(v)
u=C.aQJ(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.abp,n,n,n))}w.push(B.U)
w.push(A.at(C.uv("Back to the games",new C.bRQ(o),B.cO,B.k6,D.fy),n,n,n))
w=A.x(w,B.E,n,B.e,B.Q,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.p(l,n,j,k,D.aD9,n,B.n),n,n,n,n,B.bi,n,n,n)}}
C.bj1.prototype={
a5(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.q8$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDs(),d0=B.i.D(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.ad8,d2=c7*0.5
c8=A.ar(D.bht,D.brQ,d0)
c8.toString
w=A.ar(D.Ys,G.ahv,d0)
w.toString
v=A.ar(B.u6,D.bqi,d0)
v.toString
$.Q()
u=A.K()
t=x.O
u.sav(A.jy(B.I,new A.o(0,d2),A.a([c8,w,v],t),G.a4j,B.x,c3))
d3.ar(new A.a1(0,0,0+c6,0+c7),u)
s=new A.o(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.K()
u.sav(A.wa(s,60,A.a([D.bqH,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.K()
u.r=B.YE.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.i.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dyB[o]
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
k.r=A.ar(l===0?D.bg2:D.buN,D.bkX,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.ccf(d3,new A.o(B.i.F(B.i.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.Q()
w=A.K()
v=A.ar(D.aj2,D.Gb,d0)
v.toString
w.sav(A.jy(new A.o(0,d2),new A.o(0,c7),A.a([v,D.bqJ],t),c3,B.x,c3))
d3.ar(new A.a1(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.K()
w.r=D.bkg.gp(0)
d3.ar(new A.a1(0,a0,c6,a1),w)
w=A.K()
w.r=D.but.gp(0)
d3.ar(new A.a1(0,a0-3,c6,a0),w)
for(q=-B.i.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.O,B.M,B.R,B.S,B.P)
u.r=I.MH.gp(0)
d3.ar(new A.a1(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.Q()
b2=new A.ao(B.O,B.M,B.R,B.S,B.P)
b2.r=D.bfI.gp(0)
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
b0.r=D.bsG.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ao(B.O,B.M,B.R,B.S,B.P)
b1.r=D.fy.gp(0)
d3.ar(new A.a1(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ao(B.O,B.M,B.R,B.S,B.P)
b0.r=D.FZ.gp(0)
d3.ar(new A.a1(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bl(new A.a1(b0,a4,b0+60,a5),B.iy)
b0=new A.ao(B.O,B.M,B.R,B.S,B.P)
b0.r=D.bvR.gp(0)
d3.am(b5,b0)
b0=new A.ao(B.O,B.M,B.R,B.S,B.P)
b0.r=D.Bx.gp(0)
b0.b=B.a9
b0.c=2
d3.am(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iH(new A.en(b6,c3,c3,B.cJ,c3,c3,c3,c3,c3,c3,D.frw),B.a5,B.bX,new A.jg(1),c3,c3,c3,c3,B.bY,c3,B.cs)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a5(d3,new A.o(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.ad9
else if(r===c4.w){b0=c4.r
b0=b0===D.Xd||b0===D.B5
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzm()
b9=(b0==null?c3:b0.c)===D.ot?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqu()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.B5
b0=c0?C.hBc(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.Xd?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.o(40,-110+Math.sin(g)*10)
else a7=c0?new A.o(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Sw(d3,new A.o(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.o(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIx(d3,new A.o(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.i.F(w+r/7,1)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=D.btY.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.Xc)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.i.F(w+r/5,1)
t=Math.sin(r+c8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.B5&&c4.ax){b7=A.fq(c3,B.cs,c3,c3,c3,A.cP(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cO,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A7.Iz,c3,c3),"BEEP BEEP!"),B.a5,B.bX,c3,B.dz,B.bY)
b7.e5()
b7.a5(d3,new A.o(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
ccf(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.bqc,D.bjz,g)
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
t.r=D.ZI.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d_Y[r]
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=D.ZI.gp(0)
p.c=4
p.d=B.bw
d.ah(new A.o(w,t),new A.o(v+q*24,s),p)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=o.gp(0)
d.N(new A.o(v+q*26,u),10,p)}}else{w=e.a4(0,D.epG)
$.Q()
v=A.K()
v.r=D.bfK.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bs(e.a4(0,D.epH),16,60)
w=A.K()
w.r=o.gp(0)
d.bZ(v,w)}},
bIx(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.Xc?0.045:0,a1=a2.c
J.bp(a1.save())
a1.translate(a3.a,a3.b+e)
a2.hX(0,a0)
for(w=0;w<2;++w){v=D.dr2[w]
u=d.ay&&d.r!==D.Xc&&v>0
J.bp(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.Q()
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.buF.gp(0)
a2.N(B.I,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.bn0.gp(0)
a2.N(B.I,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=B.bq.gp(0)
q.c=2
a2.ah(B.I,new A.o(s*9,t*9),q)}a1.restore()}p=A.u2(D.f6I,B.fL,B.fL,B.il,B.hO)
$.Q()
t=A.K()
t.sav(A.jy(D.elK,B.a8i,D.dgU,G.a4j,B.x,f))
a2.am(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.O,B.M,B.R,B.S,B.P)
s.r=D.daY[B.o.F(o,4)].gp(0)
a2.ar(new A.a1(t,-26,t+10,-19),s)}n=d.r===D.B5&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a1(s,-66,q,-36)
J.bp(a1.save())
a1.clipRRect(A.nP(A.bl(l,B.mx)),$.np(),!0)
k=new A.ao(B.O,B.M,B.R,B.S,B.P)
k.r=D.Ys.gp(0)
a2.ar(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.B5?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Sw(a2,new A.o(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aLM,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bl(l,B.mx)
i=new A.ao(B.O,B.M,B.R,B.S,B.P)
i.r=D.ajV.gp(0)
i.b=B.a9
i.c=2
a2.am(j,i)}d=A.bl(D.UE,B.mx)
t=A.K()
t.r=D.Ys.gp(0)
a2.am(d,t)
J.bp(a1.save())
a1.clipRRect(A.nP(A.bl(D.UE,B.mx)),$.np(),!0)
C.Sw(a2,new A.o(D.UE.gbw().a,-10),0,0,0.7,-0.1,f,f,D.aLM,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bl(D.UE,B.mx)
d=A.K()
d.r=D.ajV.gp(0)
d.b=B.a9
d.c=2
a2.am(t,d)
d=A.K()
d.r=Ap.Gc.gp(0)
a2.N(D.enQ,4,d)
d=A.K()
d.r=D.FZ.gp(0)
a2.ar(D.f7R,d)
for(w=0;w<3;++w){v=D.dr4[w]
d=A.bl(new A.a1(v,-96,v+28,-79),B.iy)
t=new A.ao(B.O,B.M,B.R,B.S,B.P)
t.r=D.Gb.gp(0)
a2.am(d,t)}a1.restore()},
aD(d){return!1}}
C.aBz.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bgz.prototype={}
C.aBB.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bgA.prototype={}
C.aBC.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bgB.prototype={}
C.a6v.prototype={
B(d){var w=null
return new A.a6(1/0,this.c,A.b4(w,w,w,new C.bj8(w),B.az),w)}}
C.bj8.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dp0[B.o.F(n,6)]
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
C.tF.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aG(w,w,w,w,B.Q2,w,w,w,new C.bRM(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.foO,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c4(w,D.Ye,A.q(w,A.bm(!0,A.x(A.a([D.c4z,new A.D(D.bGY,A.A(u,B.l,w,B.e,B.j,0,w,w),w),A.E(this.d,1)],v),B.l,w,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b8a,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Is.prototype={
B(d){var w=null,v=this.d,u=C.aQJ(v),t=C.ijA(v),s=B.c.j(0.08),r=A.m(18),q=A.L(B.cO.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.frh,w,w,w)],x.p)
if(this.e)p.push(D.es8)
p.push(B.am)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fY,w,w,w))
if(t!=null)p.push(new A.D(B.uu,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AL,w,w,w),w))
return A.q(w,A.x(p,B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.n),w,w,w,w,B.bF,w,w,w)}}
C.Wg.prototype={
S(){return new C.blU(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cYt(d){return this.f.$1(d)},
ge3(){return this.d}}
C.blU.prototype={
gSV(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a2()
this.Pu()},
Pu(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bSx(u.a.d),$async$Pu)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.deX[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bSw(p,(o===$?u.d=q.c:o).a,r),$async$Pu)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e1J(u,n))
return A.h(null,v)}})
return A.i($async$Pu,v)},
ux(d){return this.coR(d)},
coR(d){var w=0,v=A.j(x.H),u=this,t
var $async$ux=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a7(t,!1).ca(A.e9(new C.e1K(d),!1,null,x.H)),$async$ux)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pu()
return A.h(null,v)}})
return A.i($async$ux,v)},
gb6D(){var w,v,u,t=C.N1(this.gSV()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2r(d){return this.cw4(d)},
cw4(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2r=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.J)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cYt(r),$async$a2r)
case 2:if(u.c!=null)u.m(new C.e1L(u,r))
return A.h(null,v)}})
return A.i($async$a2r,v)},
OO(d){return this.bRf(d)},
bRf(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OO=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.heS(t.gSV())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.ML("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a7(s,!1).ca(A.e9(new C.e1H(q),!1,null,r)),$async$OO)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.J)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e1I(p))
o=s.length
B.d.c3(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2r(A.cW(s,0,A.dB(2,"count",x.S),r).dn(0)),$async$OO)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OO,v)},
XP(d,e){return this.bOM(0,e)},
bOM(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XP=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.cf(null,null,!0,null,new C.e1G(e),o,null,!0,!0,x.y),$async$XP)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.heS(u.gSV()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.J)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2r(o),$async$XP)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XP,v)},
aa9(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e1D(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.L(B.aT,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cA,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Vt,p,p,p),B.b3],s)
q=A.m(10)
r.push(A.q(p,A.d(i,p,p,p,p,p,p,D.fpH,p,p,p),B.f,p,p,new A.p(B.hu,p,p,q,p,p,B.n),p,p,p,p,B.Cm,p,p,p))
return A.aA(p,A.da(A.q(p,A.x(A.a([A.A(r,B.l,p,B.e,B.j,0,p,p),B.b3,A.d(e,p,2,p,p,p,p,D.fxp,p,p,p),B.cU,A.d(f,p,3,B.a2,p,p,p,D.fqp,p,p,p)],s),B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a9(B.aA,B.aF,B.x,w,p,p),B.n),p,p,p,p,B.yG,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xh(d,e,f,g,h,i){return this.aa9(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.N1(s.gSV()),p=s.gSV(),o=C.aQJ(s.e),n=C.heS(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e1M(s),k=C.hEN(p,1).length,j=C.hF_(p,1).length,i=C.hFU(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.L(B.cO.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.abe,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.fuW,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.be,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,K.aba,r,r,r)],a1),B.E,r,B.e,B.j,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pV,r,r,r),D.fTH],a1),B.l,r,B.e,B.j,0,B.p)],a1),B.l,r,B.e,B.j,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.n),r,r,r,r,B.bF,r,r,r)
f=s.Xh("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aE,new C.e1N(s,p),l.$1("kahoot"))
h=s.Xh("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lD,new C.e1O(s,p),l.$1("fire"))
a0=s.Xh("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.BV,new C.e1P(s,p),l.$1("catch"))
j=j!==0?new C.e1S(s,p):r
j=s.aa9("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hq,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e1T(s,p):r
i=s.aa9("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kL,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xh("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eX,new C.e1U(s,p),l.$1("journey"))
k=k!==0?new C.e1V(s,p):r
k=A.a([g,B.aR,D.fXH,B.U,A.kU(0.98,A.a([f,h,a0,j,i,e,s.aa9("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eq,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xh("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.cZ,new C.e1W(s,p),l.$1("school"))],a1),2,12,12,r,B.dW,!0),B.d8,A.A(A.a([D.bIO,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fpL,r,r,r)],a1),B.l,r,B.e,B.j,0,r,r),B.U],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.J)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aN(18,18)
u=new A.ay(B.aT,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fEj,B.be,new A.bz(1,B.bd,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hl,r,r,r),A.d(""+v.gapv(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AL,r,r,r)],a1),B.E,r,B.e,B.j,0,B.p),r)],a1)
if(v.gapv(0).length>=2){f=D.lE.j(0.2)
t=new A.ay(D.lE,1,B.r,-1)
g.push(A.aA(r,A.q(r,A.X(B.hx,D.lE,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1X(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cO.j(0.2)
t=new A.ay(B.cO,1,B.r,-1)
f=A.aA(r,A.q(r,A.X(B.j3,B.cO,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1Y(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fh.j(0.2)
t=new A.ay(B.fh,1,B.r,-1)
B.d.v(g,A.a([B.bm,f,B.bm,A.aA(r,A.q(r,A.X(B.ei,B.fh,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bG(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1Z(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.c7(B.aL,B.e,B.j,B.l,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bG(u,u,u,u),new A.be(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bi,r,r,r))}if(s.a.e){j=m?new C.e1Q(s):new C.e1R(a2)
i=A.m(18)
h=A.L(m?B.cO:B.aT,B.r,2)
g=m?B.cO.j(0.12):B.dk
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.q(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cO:B.aD,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.n),r,r,r,r,B.O_,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fYD)
k.push(B.aB)
k.push(D.asH)
return new C.tF("Family Games \xb7 "+p.b,A.cd(k,r,r,D.bCY,r,r,B.ah,!1),B.f6,r)}}
C.a_Y.prototype={
a7(){return"_KPhase."+this.b}}
C.alZ.prototype={
S(){return new C.am_(D.b09)},
gd1(){return this.e}}
C.am_.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fO(d){var w,v=this
v.m(new C.bS6(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.dc(B.fA,new C.bS7(v))},
aPX(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bRX(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.dc(B.ff,new C.bRY(w))},
L1(d){var w
if(this.d!==D.acF)return
w=this.at
if(w!=null)w.a1(0)
this.b6z(d)},
b6z(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.i.V(500+500*B.i.D(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bS2(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.rP,v.giy(v))},
cL0(d){var w=this
if(w.d!==D.WL)return
if(w.e+1>=w.a.w.length)w.YA()
else{w.m(new C.bS3(w))
w.aPX()}},
YA(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$YA=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bGm(p,u.w,t)
u.m(new C.bS_(u,s))
w=2
return A.b(C.BU(u.a.e,s),$async$YA)
case 2:r=e
t=u.a
w=3
return A.b(C.BV(t.e,t.f,t.r,u.f),$async$YA)
case 3:q=e
if(u.c!=null)u.m(new C.bS0(u,r,q))
return A.h(null,v)}})
return A.i($async$YA,v)},
cLQ(){var w,v,u,t,s=this,r=s.a,q=new A.e1()
q.cY(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cW(r,0,A.dB(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bP(r,r.gI(0),u.k("bP<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.i.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bS4())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b09===r){w=A.a([D.fU5,B.X,A.d(s,t,t,t,t,t,t,B.KS,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.fpT,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.xm,B.K,t,t))
w.push(B.dY)
w.push(C.uv("Play",u.geY(u),B.cO,B.hx,D.fy))
w=A.at(new A.D(B.ez,A.x(w,B.l,t,B.e,B.Q,0,B.p),t),t,t,t)
break A}if(D.b0a===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fxW,t,t,t),t,t,t)
break A}if(D.acF===r||D.WL===r){w=u.crs()
break A}if(D.b0b===r){w=u.ccg()
break A}w=t}return new C.tF(s,w,B.f6,t)},
crs(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.WL,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aVa,j,j,j),B.b3],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KP,j,j,j))
g.push(B.au)
f=A.m(14)
g.push(A.q(j,A.d(""+k.f,j,j,j,j,j,j,B.iz,j,j,j),B.f,j,j,new A.p(B.by,j,j,f,j,j,B.n),j,j,j,j,B.GL,j,j,j))
g=A.A(g,B.l,j,B.e,B.j,0,j,j)
f=A.m(6)
w=i?0:B.i.D(k.as/k.a.w[k.e].r,0,1)
f=A.by(f,A.k9(B.by,j,k.as<5?B.fh:B.cO,9,j,w,j),B.aq)
w=A.m(22)
v=A.L(B.cO,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lE:G.np,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.U,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.foX,B.K,j,j)],h),B.l,j,B.e,B.Q,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fA3,B.K,j,j)
w=A.E(A.q(j,A.at(u,j,j,j),B.f,j,j,new A.p(D.qi,j,v,w,j,j,B.n),j,j,j,j,B.fs,j,j,1/0),3)
v=A.a([],h)
for(u=k.giy(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bS1(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aCN[o]
m=new A.aN(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aD6[o],j,j,j,j,j,j,D.fqT,j,j,j),B.au,new A.bz(1,B.bd,A.d(r[t],j,3,B.a2,j,j,j,D.fpQ,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(Q.arc)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bXs)
v.push(A.aA(j,new A.SM(A.q(j,new A.c7(B.aL,B.e,B.j,B.l,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bG(l,l,l,l),new A.be(m,m,m,m),W.aBa,j,B.n),j,j,j,j,B.f3,j,j,j),p,B.b4,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.am,f,B.af,w,B.af,A.E(A.kU(1.45,v,2,10,10,j,B.dW,!1),4)],h)
if(i)h.push(D.ero)
return new A.D(B.a0f,A.x(h,B.l,j,B.e,B.j,0,B.p),j)},
ccg(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cLQ(),m=x.p,l=A.a([D.bbZ,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pV,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Vy,o,o,o),o,o,o),B.aR],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cO.j(0.25):B.dk
u=new A.aN(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cO:B.by,1,B.r,-1)
q=A.d(w<3?D.dhb[w]:""+(w+1),o,o,o,o,o,o,B.nf,o,o,o)
s=s?B.u:B.V
l.push(A.q(o,new A.c7(B.aL,B.e,B.j,B.l,o,B.p,o,0,A.a([new A.a6(34,o,q,o),new A.bz(1,B.bd,A.d(t.a,o,o,o,o,o,o,new A.H(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.iz,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bG(r,r,r,r),new A.be(u,u,u,u),o,o,B.n),o,o,o,B.cx,B.eY,o,o,o))}l.push(B.X)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Is(m,v,p.CW,o))
l.push(B.aR)
l.push(A.at(C.uv("Back to the games",new C.bRZ(p),B.cO,B.k6,D.fy),o,o,o))
return A.cd(l,o,o,B.fs,o,o,B.ah,!1)}}
C.TW.prototype={
S(){return new C.alW(A.T(x.de,x.er))}}
C.alW.prototype={
gD4(){var w,v=this,u=v.d
if(u===$){w=C.hkH(v.a.c.aj())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glR(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD4().b
v=$.aw()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.ba(w,B.b6,B.aQ),v)}return t},
cfg(d){return this.f.c4(0,d,new C.bRx(d))},
Y(){this.a2()
var w=this.gD4().c
if(w.length===0)w.push(C.h6o(null,0,20,""))},
t(){var w,v,u=this.glR(0)
u.T$=$.aw()
u.P$=0
for(u=this.f,u=new A.dr(u,u.r,u.e);u.C();)for(w=J.aU(u.d);w.C();){v=w.gR(w)
v.T$=$.aw()
v.P$=0}this.a3()},
cKR(){if(this.gD4().c.length>=12)return
this.m(new C.bRy(this))},
hL(d){var w,v,u=this,t=u.gD4()
t.b=B.a.i(u.glR(0).a.a)
w=t.gapv(0)
if(t.b.length===0||w.length<2){u.c.M(x.q).f.U(D.fhR)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a7(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bRI(),r=x.p,q=A.a([A.bN(!1,D.fJg,t,t,!0,t,t,t,u.gbqh(u),t,t)],r),p=A.a([D.fYe,B.af,A.aM(t,B.Z,!1,t,!0,B.t,t,A.aO(),u.glR(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.fY,!0,B.a5,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gD4().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bRH(u,w,s),t)],r))
if(v<12)p.push(A.at(C.uv("\uff0b Add a question",u.gcKQ(),B.aT,t,B.c),t,t,t))
return new C.tF("Make your game",A.cd(p,t,t,D.bCV,t,t,B.ah,!1),q,t)}}
C.ar0.prototype={
S(){return new C.aF7(A.a([],x._))},
bv(){return this.r.$0()},
qn(){return this.w.$0()},
ge3(){return this.c}}
C.aF7.prototype={
Y(){var w,v
this.a2()
this.wt()
w=this.a
v=w.c
if(v.length!==0)C.a8c(v,w.e,w.d.w)},
wj(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hhv(r,t.e,!1,s.w,new C.e3o(u),null,s),$async$wj)
case 2:w=3
return A.b(u.wt(),$async$wj)
case 3:return A.h(null,v)}})
return A.i($async$wj,v)},
a0D(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0D=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hhv(r,t.e,!0,s.w,new C.e3n(u),null,s),$async$a0D)
case 2:w=3
return A.b(u.wt(),$async$a0D)
case 3:return A.h(null,v)}})
return A.i($async$a0D,v)},
wt(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$wt=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bo(q.a.c),$async$wt)
case 7:p=e
if(q.c!=null)n=q.e||J.cI(p)
else n=!1
if(n)q.m(new C.e3q(q,p))
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
return A.b(C.Hk(q.a.c).dh(0,B.qu),$async$wt)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e3r(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e3s(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wt,v)},
P9(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$P9=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.M(s).f.U(D.fhr)
w=3
return A.b(C.Hk(t.a.c),$async$P9)
case 3:r=e
w=4
return A.b(C.fX4(t.a.c,r),$async$P9)
case 4:q=e
w=5
return A.b(C.Hk(t.a.c),$async$P9)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e3m(t,p))
o=t.c.M(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dI:B.cY,null,B.t,null,s,null,B.mZ,null,null,null,null,null,null,null,null,null,null))
t.a.qn()
case 1:return A.h(u,v)}})
return A.i($async$P9,v)},
It(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$It=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.isn(l),$async$It)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hV7(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b18(q,p.e,l,"Each family tree costs $"+B.i.ac(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$It)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hBm(r)
o=Date.now()
n=t.a.c
m=new C.kT(l,r.toUpperCase(),p,!0,B.Z,D.Dv,new A.V(o,0,!1),0,n,D.uC,B.cd)
w=5
return A.b(C.a3U(n,m),$async$It)
case 5:w=6
return A.b(t.wt(),$async$It)
case 6:t.a.bv()
t.a.qn()
if(t.c==null){w=1
break}t.F1(m)
case 1:return A.h(u,v)}})
return A.i($async$It,v)},
F1(d){return this.cka(d)},
cka(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bo(u.a.c),$async$F1)
case 2:n=l.nA(k.dI(f,new C.e3p(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.aqV(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F1)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a3U(u.a.c,o),$async$F1)
case 6:case 5:w=7
return A.b(u.wt(),$async$F1)
case 7:u.a.qn()
return A.h(null,v)}})
return A.i($async$F1,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=new C.ui(p)
if(r.e)return A.at(A.n4(q,p?B.bu:B.bq,q,q,q,q,q,q,q,q),q,q,q)
if(J.cq(r.d)){w=p?B.ec:B.c
v=A.m(15)
u=A.aJ(!1,B.a3,!0,q,A.aP(!1,q,!0,A.q(q,D.bV6,B.f,q,q,new A.p(B.aY.j(0.12),q,A.L(B.aY,B.r,2),q,q,q,B.a7),q,52,q,q,q,q,q,52),B.cR,!0,q,q,q,q,q,q,q,q,q,q,q,r.gcje(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gl(A.q(q,A.x(A.a([u,B.aR,t,B.U,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bq,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dY,A.bI(D.h0s,q,r.gaTe(),A.bo(B.bR,q,q,q,q,q,Ax.a0E,q,new A.b9(A.m(12),B.a1),q,q,q))],x.p),B.l,q,B.e,B.j,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.n),q,q,q,q,D.bFF,q,q,1/0),15,B.ag,1.05,D.acr,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b3],v)
if(J.cI(r.d))w.push(A.aG(q,q,q,q,A.X(B.zt,B.aY,q,q,q,q),q,q,q,new C.e3u(r),q,q,q,q,"Sync family trees with database",q))
if(J.cI(r.d))w.push(A.aG(q,q,q,q,A.X(B.zn,B.aY,q,q,q,q),q,q,q,r.gagY(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dg(E.as6,q,D.fGB,r.gaTe(),A.bo(B.bR,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.l,q,B.e,B.j,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gl(r.cH_(J.t(r.d,s),o),14,B.ag,1,D.acr,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.l,q,B.e,B.j,0,B.p)],v),B.E,q,B.e,B.j,0,B.p)},
cH_(d,e){var w=null,v=e.a,u=v?B.ec:B.c,t=A.m(14),s=A.L((v?B.eg:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.et,10)],x.V),q=A.m(14),p=A.q(w,D.bU8,B.f,w,w,new A.p(B.aY.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqv(),m=d.d?"":" \xb7 Public",l=d.y===D.kX?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bH,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.j,0,B.p),1)
return A.q(w,A.aJ(!1,B.a3,!0,w,A.aP(!1,q,!0,new A.D(B.bF,A.A(A.a([p,B.be,l,A.X(B.OV,v?B.bu:B.bq,w,w,w,w)],k),B.l,w,B.e,B.j,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e3t(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.p(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aqV.prototype={
S(){return new C.aF4(A.a([],x._),A.aR(x.N),A.b9T())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aF4.prototype={
Y(){var w,v,u=this
u.a2()
u.d=u.a.w
u.adE()
w=u.a
v=w.c
if(v.length!==0)C.a8c(v,w.e,w.d.w)},
t(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a3()},
a3C(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3C=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.yu("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e2P(r),s,null,!0,!0,x.y),$async$a3C)
case 3:if(e!==!0||t.c==null){w=1
break}t.K_()
t.m(new C.e2Q(t,r))
w=4
return A.b(t.ut(),$async$a3C)
case 4:t.a.bv()
t.yu(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3C,v)},
cwE(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.e2K(w,f,d,e))},
aVw(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.ds()
u.ej(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bdb(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eK(new Float64Array(16))
q.e7(r)
w=q.D9()
v=B.i.D(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.ds()
t.ej(r,u,0,1)
t.k5(v,v,1,1)
t.ej(-r,-u,0,1)
t.iX(0,q)
s.sp(0,t)},
adE(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adE=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bo(u.a.c),$async$adE)
case 2:t=s.nA(r.dI(e,new C.e2b(u)))
if(t!=null&&u.c!=null)u.m(new C.e2c(u,t))
return A.h(null,v)}})
return A.i($async$adE,v)},
yu(d){var w=null,v=this.c
if(v==null)return
v.M(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
wj(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hhv(o,t,!1,r,new C.e2t(u),q.a,s),$async$wj)
case 2:n=A
m=J
w=3
return A.b(C.Hk(u.a.c),$async$wj)
case 3:p=n.nA(m.dI(e,new C.e2u(u)))
if(p!=null&&u.c!=null)u.m(new C.e2v(u,p))
return A.h(null,v)}})
return A.i($async$wj,v)},
K_(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cB(w,0)},
ut(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ut=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a3U(t,s),$async$ut)
case 2:return A.h(null,v)}})
return A.i($async$ut,v)},
a27(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a27=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.uw(q,t.a.c)){t.yu("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.ity(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a27)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.K_()
t.m(new C.e2J(t,r))
w=4
return A.b(t.ut(),$async$a27)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a27,v)},
b3g(){var w=this.c
w.toString
A.a7(w,!1).ca(A.e9(new C.e2q(this),!1,null,x.H))},
a0R(){return this.ckc()},
ckc(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0R=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.uw(m,t.a.c)){t.yu("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.S(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e2G(),A.U(s).k("Y<1>")).gI(0)
s=A.ez([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("cj.E"))
B.d.fi(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.L,null,new C.e2H(n,t,new C.ui(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0R)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.K_()
t.m(new C.e2I(t,o))
w=6
return A.b(t.ut(),$async$a0R)
case 6:case 5:if(o.a&&t.c!=null)t.b3g()
case 1:return A.h(u,v)}})
return A.i($async$a0R,v)},
WC(d){return this.bDR(d)},
bDR(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$WC=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.uw(r,t.a.c)){t.yu("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e2_(t,d),r,null,!0,!0,x.P),$async$WC)
case 3:s=f
if(s==null){w=1
break}t.K_()
t.m(new C.e20(t,s))
w=4
return A.b(t.ut(),$async$WC)
case 4:case 1:return A.h(u,v)}})
return A.i($async$WC,v)},
a3Y(d){return this.cJe(d)},
cJe(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3Y=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.S(s)
t=u.c
t.toString
w=2
return A.b(A.cf(null,null,!0,null,new C.e2S(u,d,new C.ui(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3Y)
case 2:return A.h(null,v)}})
return A.i($async$a3Y,v)},
cgt(d){var w=this,v=w.d
v===$&&A.c()
if(C.uw(v,w.a.c))w.OP(d)
else w.a3Y(d)},
ajt(d,e){return this.cAB(d,e)},
cAB(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajt=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.S(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.cf(null,null,!0,null,new C.e2M(new C.ui(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$ajt)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajt,v)},
Iy(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Iy=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kX?3:5
break
case 3:w=6
return A.b(C.h4B(t.a.c),$async$Iy)
case 6:s=e
o=t.a
r=C.hpy(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajt(!s,!r),$async$Iy)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQQ(o,t.a.c)){t.yu("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lo(o,"Cancel","Remove",q.y===D.kX?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Iy)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQM(t.a.c,t.d.a),$async$Iy)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j_(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Iy,v)},
ab6(d){return this.bP2(d)},
bP2(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$ab6=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.uw(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aV(s,new C.e21(p))){o=A.U(s)
p.a=A.nA(new A.cM(new A.Y(s,new C.e22(d),o.k("Y<1>")),new C.e23(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.K_()
t.m(new C.e24(t,s,d,q))
w=3
return A.b(t.ut(),$async$ab6)
case 3:t.yu(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$ab6,v)},
OP(d){return this.bRj(d)},
bRj(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OP=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.uw(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3Y(d),$async$OP)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.cf(null,null,!0,null,new C.e28(t,d),r,null,!0,!0,x.P),$async$OP)
case 6:s=f
if(s==null){w=1
break}t.K_()
t.m(new C.e29(t,s))
w=7
return A.b(t.ut(),$async$OP)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OP,v)},
cHp(){var w=this,v=w.d
v===$&&A.c()
if(!C.uw(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e2R(w))
w.ut()},
ZB(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$ZB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQQ(n,t.a.c)){t.yu("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.S(n)
s=$.aw()
r=new A.au(B.ax,s)
q=t.d.e
p=A.bq(new A.N(q,t.gceX(),A.U(q).k("N<1,n>")).bY(0,new C.e2l()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.e2m(t,new C.ui(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$ZB)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.K_()
t.m(new C.e2n(t,p))
w=4
return A.b(t.ut(),$async$ZB)
case 4:t.yu("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$ZB,v)},
ceY(d){return B.a.i(d.toLowerCase())},
ciZ(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.uw(v,w)
t=r.d
s=C.ii1(t)
C.isr(q,t.b,u,C.ii0(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.ui(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e2Z(),A.U(l).k("Y<1>")).gI(0)
l=n?B.c3:B.iD
v=A.X(B.a1O,n?B.bu:B.bq,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Cc,A.aP(!1,o,!0,new A.D(B.hG,A.A(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.l,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e3_(p,d),o,o,o,o,o,o,o),o),new A.D(B.nF,p.c1y(m),o)],u)
if(p.d.y===D.kX){t=B.tg.j(0.15)
s=A.m(12)
r=A.L(B.tg.j(0.45),B.r,1)
q=C.Hi(p.d,p.a.c)
v.push(new A.D(B.yJ,A.q(o,A.A(A.a([D.bZz,B.au,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.n),o,o,o,o,B.iv,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b3],u)
if(C.uw(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Gx("Undo",B.pw,p.gcHo(),m,o,o))
u.push(new C.Gx("Family Book",D.bOT,p.gciY(),m,B.u7,o))
u.push(new C.Gx("Family games",B.oz,p.gcj9(),m,B.aE,o))
if(C.uw(p.d,p.a.c))u.push(new C.Gx("Display settings",B.D2,p.gckb(),m,B.b1,o))
u.push(new C.Gx("Sync",B.zn,p.gagY(),m,o,o))
t=p.d
if(t.y===D.kX||C.aQQ(t,p.a.c)){t=p.d.y===D.kX?"Remove shared tree":"Delete tree"
u.push(new C.Gx(t,B.ei,p.gbPc(),m,B.fh,o))}if(C.uw(p.d,p.a.c))u.push(new C.Gx("Add member",B.wF,new C.e30(p),m,B.bR,o))
v.push(new A.D(A_.alU,A.A(u,B.l,o,B.e,B.j,0,o,o),o))
if(p.d.gaqv()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.ct(new C.e31(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a1S:A6.OW,o,o,o,o,o)
v.push(A.at(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e32(p),o),o,o,o))}return A.c4(o,l,A.bm(!0,A.x(v,B.E,o,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c1y(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fR.j(0.35),B.dv,18)],x.V)
u=A.m(22)
t=A.ap(-26,A.X(B.zg,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aJ(!1,B.a3,!0,m,A.aP(!1,m,!0,A.q(m,D.c1I,B.f,m,m,new A.p(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a7),m,46,m,m,m,m,m,46),B.cR,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagY(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.frU,m,m,m)
r=r.gaqv()
p=n.d.gaqv()===1?"member":"members"
o=x.p
p=A.a([s,B.be,A.E(A.x(A.a([q,B.bH,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.j,0,B.p),1)],o)
if(C.uw(n.d,n.a.c))p.push(A.aG(m,m,m,m,D.bZM,m,m,m,n.gcu0(),m,m,m,m,"Rename",m))
s=A.A(p,B.l,m,B.e,B.j,0,m,m)
r=n.d.d
q=r?B.j4:B.n4
r=r?"Private":"Public"
r=A.E(n.ax2(q,"Privacy",r,n.a.d.w?n.gcGj():m),1)
q=A.E(n.ax2(B.zo,"Tree code",n.d.c,new C.e2a(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.ax2(D.bQz,"Collaborators",p,n.gc6k()),1)],o),B.l,m,B.e,B.j,0,m,m)],o)
if(n.d.y===D.kX){s=B.c.j(0.15)
B.d.v(p,A.a([B.U,A.aJ(!1,B.a3,!0,A.m(999),A.aP(!1,A.m(999),!0,new A.D(B.hc,A.A(A.a([A.X(B.oB,B.c,m,m,m,14),B.e3,A.d("View only",m,m,m,m,m,m,B.aVg,m,m,m)],o),B.l,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.q(m,A.by(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.GO,A.x(p,B.E,m,B.e,B.j,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.p(m,m,m,w,v,D.c6_,B.n),m,m,m,m,m,m,m,1/0)},
ax2(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aJ(!1,B.a3,!0,A.m(14),A.aP(!1,A.m(14),!0,new A.D(K.an2,A.x(A.a([A.X(d,B.c,w,w,w,18),B.ay,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vw,A.d(f,w,1,B.a2,w,w,w,Aq.AI,w,w,w)],x.p),B.l,w,B.e,B.j,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bgD.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bgG(s,t),new A.av(w,v))],x.p)
r=r.gdO(r)
B.d.v(u,r.dL(r,new C.dhg(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dhh(this),A.U(r).k("N<1,v>")))
return new A.D(B.uy,new A.a6(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.KU.prototype={}
C.GB.prototype={}
C.bgF.prototype={
gblH(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKH.prototype={}
C.bgG.prototype={
bQV(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.Q()
v=A.K()
v.r=B.bD.j(0.75).gp(0)
v.c=2
v.d=B.bw
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
bQS(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dhB())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aV(a0,new C.dhC(f))
t=new A.N(a0,new C.dhD(f),A.U(a0).k("N<1,F>")).bY(0,new C.dhE()).cF(0,1/0,B.tT)
w=f.a
d.ah(f,new A.o(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.J)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.o(o,v),p,e)
continue}l=J.n_(n)
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
w.d=B.bw
w.e=B.dP
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.J)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bQS(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.J)(v),++t){r=v[t]
if(r.c)this.bQV(d,w,r.a,r.b)}},
aD(d){return d.b!==this.b}}
C.bkt.prototype={
gcci(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aDm
switch(w.c.a){case 0:return D.cZH
case 1:return D.daS
case 2:return D.dsT}},
gccl(){var w=this.c,v=C.hAw(w.w),u=C.hAw(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=t.gcci(),p=t.c,o=N.bEZ(p.f),n=t.gccl(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gan(q).j(0.35),B.cM,10)],m),k=r?B.as:B.c,j=A.L(r?B.as:B.c,B.r,2)
if(o!=null)w=A.tJ(B.A,s,B.cj,B.c_,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gan(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gan(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a9(B.a6,B.aa,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.hU(w,B.aq),B.f,s,s,new A.p(k,s,j,s,s,s,B.a7),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a9(B.aA,B.aF,B.x,q,s,s),B.a7),s,56,s,s,B.H3,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.L(r?B.as:B.c,B.r,1.5)
l.push(A.ap(s,A.q(s,A.d(""+k,s,s,s,s,s,s,D.fCs,s,s,s),B.f,s,s,new A.p(B.ch,s,w,j,s,s,B.n),s,s,s,s,D.bHD,s,s,s),s,s,s,-6,-4,s))}k=r?B.cq:B.c
j=A.m(8)
w=A.L(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dG,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cq,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bq,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a6(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.ay,A.q(s,A.x(p,B.l,s,B.e,B.Q,0,B.p),B.f,s,D.b6l,new A.p(k,s,w,j,m,s,B.n),s,s,s,s,D.bHO,s,s,s)],v),B.l,s,B.e,B.j,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bfI.prototype={
a5(d,e){var w,v,u,t,s
$.Q()
w=A.K()
v=this.b
u=v?B.c:D.bjb
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.o(s,t),1,w)},
aD(d){return d.b!==this.b}}
C.byr.prototype={
B(d){var w=this,v=null,u=new C.fmH(w),t=w.c,s=t?B.cq:B.c,r=A.m(12),q=u.$3(B.hW,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.by:B.fq,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wH,"Zoom out",w.e)
return A.aJ(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.q(v,v,B.f,t?B.by:B.fq,v,v,v,1,v,v,v,v,v,22),u.$3(B.apC,"Fit the whole tree",w.f)],x.p),B.l,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.ds,v,v,v,B.aj)}}
C.bnM.prototype={
B(d){var w=this,v=null,u=B.bR.j(0.15),t=A.L(B.bR,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.q(v,A.x(A.a([A.X(s?O.a1S:A6.OW,B.bR,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fyB,v,v,v)],r),B.l,v,B.bc,B.j,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a7),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.am,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fwq,B.K,v,v)],r)
if(s){t=A.a([B.am],r)
s=w.d
B.d.v(t,new A.N(s,new C.eXQ(w),A.U(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a6(84,v,A.x(u,B.l,v,B.e,B.j,0,B.p),v)}}
C.a0a.prototype={
S(){return new C.aDx()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDx.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b6,B.aQ),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b6,B.aQ),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b6,B.aQ),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b6,B.aQ),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b6,B.aQ),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b6,B.aQ),s)
t=u?q:v.c
r.y=t==null?D.yX:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.ijB(w.r,w.f)
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
Qk(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qk=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hpy(p.y,p.w)
w=3
return A.b(A.ly(t.a.w,B.Jt),$async$Qk)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b18(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qk)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hV8(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Az.Hu(78,800),$async$Qk)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dxw(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qk,v)},
cck(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hV(B.o.u(1000*Date.now()),w,D.yX,null,null,null,"","","","","",1,!1,0)
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
s=v.aG4(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a7(k,!1).O(s)},
aaI(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aaI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.dxv(r),s,null,!0,!0,x.y),$async$aaI)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a7(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aaI,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===B.J,i=new C.ui(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dxF(l),g),g.k("M.E"))
h=j?B.ec:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bG1,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.hb(A.aP(!1,k,!0,new A.D(B.mg,A.X(B.ei,B.pg,k,k,k,17),k),B.cR,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLP(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jV:B.jl
t=N.bEZ(l.as)
if(l.as==null)s=A.X(B.pn,j?B.bu:B.bq,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.h8(u,t,s,k,42),A.ap(0,A.h8(B.bR,k,D.bTd,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcch(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDz(t,"Full name",B.n2,1,1,i,B.mA)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.X,new C.bkr(i,u,new C.dxG(l),k)],v),B.l,k,B.e,B.j,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.bzn],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dxH(),A.U(o).k("N<1,eI<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.bzp],q)
B.d.v(q,new A.N(f,new C.dxJ(),A.U(f).k("N<1,eI<n?>>")))
o=A.x(A.a([t,B.am,new C.aec(i,r,"Who is their parent?",p,new C.dxK(l),k,o),B.aB,n,B.am,new C.aec(i,m,"Who is their spouse / partner?",q,new C.dxL(l),k,o)],v),B.al,k,B.e,B.j,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDz(q,"Birth date",D.aoH,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDz(m,"Birth place",B.a26,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDz(n,"Date of death (if deceased)",D.aqS,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDz(p,"Occupation",B.a3i,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ad,B.t,w,k),B.aB,s,B.bA,new C.aed(i,"Identity",u,k),B.af,new C.aed(i,"Family links",o,k),B.af,new C.aed(i,"Life details",A.x(A.a([q,B.X,m,B.X,n,B.X,p,B.X,C.aDz(r,"Notes",B.lm,5,3,i,k)],v),B.l,k,B.e,B.j,0,B.p),k),B.af,new C.aDy(i,"Child order",l.ckq(l.at),new C.dxM(l),new C.dxN(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.heG(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dxO(l):k
B.d.v(r,A.a([B.X,new C.aDy(i,"Visible in tree",u,w,new C.dxP(l),k)],v))}r.push(B.X)
w=j?B.jV:B.jl
u=A.m(14)
t=A.L(j?B.eg:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.iQ(k,B.bR,k,B.ag,k,new C.dxQ(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.n),k,k,k,k,O.alz,k,k,k))
r.push(B.bA)
w=j?B.aP:B.as
j=j?B.eg:B.bP
r.push(A.A(A.a([A.E(A.dU(B.o_,new C.dxI(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.cp,k,new A.b9(A.m(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.be,A.E(A.bI(D.f95,k,l.gccj(),A.bo(B.aY,k,k,0,B.c,k,B.cp,k,new A.b9(A.m(14),B.a1),k,k,k)),2)],v),B.l,k,B.e,B.j,0,k,k))
r.push(B.ay)
return A.eg(B.f6,k,B.ag,h,new A.a6(420,k,A.ci(A.x(r,B.al,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.amn,k,B.alL,new A.b9(g,B.a1),k,k)},
ckq(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.aed.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jV:B.jl,s=A.m(16)
return A.x(A.a([new A.D(D.amN,u,w),A.q(w,this.e,B.f,w,w,new A.p(t,w,A.L(v?B.eg:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bi,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)}}
C.bks.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.ec:B.c,r=A.m(12),q=A.L((t?B.eg:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aP:B.as,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aM(u,B.Z,!1,u,!0,B.t,u,A.aO(),v.d,u,u,u,u,u,2,A.bt(u,B.eK,u,B.wg,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bq,u,u,u,u,u,u,u,u,u,u,u,B.cC,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bR,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.aec.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.ec:B.c,s=A.m(12),r=A.L((u?B.eg:B.bP).j(0.85),B.r,1),q=A.X(B.t0,u?B.bu:B.bq,v,v,v,v),p=A.l(v,v,u?B.aP:B.as,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.ec:B.c
return A.q(v,new A.En(A.a5p(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bq,v,v,v,v,v,v,v,v,v,v,v,B.cC,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.n),v,v,v,v,B.kt,v,v,v)}}
C.bkr.prototype={
B(d){var w=new C.dxR(this)
return A.A(A.a([w.$3(D.wp,"Male",B.PG),B.ae,w.$3(D.ot,"Female",B.Pq),B.ae,w.$3(D.yX,"Other",B.nK)],x.p),B.l,null,B.e,B.j,0,null,null)}}
C.aDy.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jV:B.jl,r=A.m(14),q=A.L(t?B.eg:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aP:B.as,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bq,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.j,0,B.p),1),new C.aJJ(u,B.wH,w.f,v),B.bm,new C.aJJ(u,B.hW,w.r,v)],o),B.l,v,B.e,B.j,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.n),v,v,v,v,B.ey,v,v,v)}}
C.aJJ.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bR.j(0.12)
else w=s.c.a?B.ec:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bR
else t=(s.c.a?B.bu:B.bq).j(0.4)
return A.aJ(!1,B.a3,!0,v,A.aP(!1,u,!0,new A.a6(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.aee.prototype={
bV6(d){switch(d.a){case 0:return B.bR
case 1:return B.bD
case 2:return B.d0}},
bV7(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
b_3(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AJ(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.ec:B.c
u=A.m(12)
t=A.L((w?B.eg:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bR,p,p,p,18),B.au],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bq,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.ay,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aP:B.as,p,p,p,p,p,p,p,p,14,p,p,B.V,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.j,0,B.p),1))
return A.q(p,A.A(r,B.E,p,B.e,B.j,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.n),p,p,p,B.cx,B.yF,p,p,1/0)},
afk(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jV:B.jl,s=A.m(16),r=A.L(v?B.eg:B.bP,B.r,1)
return A.x(A.a([new A.D(D.amN,u,w),A.q(w,A.x(e,B.l,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.n),w,w,w,w,B.bV,w,w,1/0)],x.p),B.E,w,B.e,B.j,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hFH(r,q),o=q.c,n=t.bV6(o),m=N.bEZ(q.f),l=t.e.a,k=l?B.ec:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aP:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kX?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bq,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.at(A.q(s,A.h8(u,m,m==null?A.X(B.pn,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a7),s,s,s,s,B.eA,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.L(n.j(0.45),B.r,1)
v=A.at(A.q(s,A.d(t.bV7(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,B.me,s,s,s),s,s,s)
u=x.p
i=A.a([t.AJ("Full name",i,B.n2)],u)
if(p>0)i.push(t.AJ("Child order","#"+p,B.Pw))
r=A.a([h,B.ay,r,B.aR,l,B.X,v,B.bA,t.afk("Identity",i),B.af,t.afk("Life details",A.a([t.AJ("Birth date",q.w,D.aoH),t.AJ("Birth place",q.x,B.a26),t.AJ("Date of death",q.y,D.aqS),t.AJ("Occupation",q.z,B.a3i)],u)),B.af,t.afk("Family links",A.a([t.AJ("1. Parent",t.b_3(q.d),B.Hj),t.AJ("2. Spouse",t.b_3(q.e),B.Hx)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.af,t.afk("Notes",A.a([t.AJ("Notes",q,B.lm)],u))],u))
r.push(B.bA)
r.push(A.bI(B.KZ,s,new C.dy0(d),A.bo(B.aY,s,s,s,s,s,B.cp,s,new A.b9(A.m(14),B.a1),s,s,s)))
return A.eO(s,k,new A.cS(B.m2,A.ci(A.x(r,B.al,s,B.e,B.Q,0,B.p),B.t,s,B.y,s,B.yM,s,s,B.ah),s),s,s,s,B.GR,B.d7,s,new A.b9(j,B.a1),s)}}
C.Gx.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bq
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uA,A.hb(A.aJ(!1,B.a3,!0,A.m(8),A.aP(!1,A.m(8),!0,new A.a6(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.aqY.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.cft(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jr(w,new C.cfu(),t,x.fO))
return s}}
C.aqZ.prototype={
S(){return new C.aF6(A.a([],x.bF))},
gd1(){return this.c}}
C.aF6.prototype={
Y(){this.a2()
this.K6()},
K6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$K6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.cfx(t.a.c),$async$K6)
case 3:r=e
w=4
return A.b(C.Bo(t.a.c),$async$K6)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.ri(q,new C.e3b(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e3c(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$K6,v)},
z2(d){var w=null,v=this.c
if(v==null)return
v.M(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
KU(d,e){return this.cJV(d,e)},
cJV(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KU=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e3g(q,e))
t=3
w=6
return A.b(d.$0(),$async$KU)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e3h(q))
$.eX.mC()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KU,v)},
Yo(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pv(r,s.c,s.e),$async$Yo)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KU(new C.e38(t),"Preparing download\u2026"),$async$Yo)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yo,v)},
Ys(d){return this.bSZ(d)},
bSZ(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ys=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pv(r,s.c,s.e),$async$Ys)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KU(new C.e39(t,d),"Preparing file\u2026"),$async$Ys)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ys,v)},
ahk(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$ahk=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xN.cq().MF(B.SD,B.uD,!0),$async$ahk)
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
o=A.jI(o,0,null)
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
case 6:u=A.Ht()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ahk,v)},
Z4(d){return this.c2t(d)},
c2t(d){var w=0,v=A.j(x.H),u=this
var $async$Z4=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KU(new C.e3a(u,d),"Restoring family trees\u2026"),$async$Z4)
case 2:return A.h(null,v)}})
return A.i($async$Z4,v)},
Z3(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Z3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.ahk(),$async$Z3)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Z4(s),$async$Z3)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Z3,v)},
a2Z(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2Z=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pv(r,s.c,s.e),$async$a2Z)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KU(new C.e3f(t),"Creating QR code\u2026"),$async$a2Z)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2Z,v)},
a2A(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2A=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.DB()){t.z2("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a7(s,!1).ca(A.e9(new C.e3d(),!0,null,x.N)),$async$a2A)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Z4(r),$async$a2A)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2A,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===B.J,n=o?B.BF:B.iD,m=o?D.ak0:B.aP,l=o?B.aM:B.bP,k=o?B.aP:B.as,j=new C.dhF(n,m,l,k,o?B.bK:B.bq)
l=A.aG(p,p,p,p,A.X(B.eN,k,p,p,p,20),p,p,p,new C.e3j(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eE(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dhd(!0,B.jI,B.aH,B.aH,q.r?p:q.gcAp(),j,s,"Show restore QR"),1),B.au],u))}s=q.e
r=q.r?p:q.gcwz()
t.push(A.E(C.dhd(!s,B.jr,B.b9,B.br,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.l,p,B.e,B.j,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dhd(!1,B.hX,B.aY,B.bR,q.r?p:q.gbSS(),j,"Photos & books included","Download all trees"),1),B.au],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dhd(!1,R.zp,B.aw,B.aV,q.r?p:q.gc2q(),j,s,"Upload backup file"),1))
l=A.a([new C.bgE(v,l,p),B.l5,new C.adt(j,"QR restore",p),B.X,t,B.d8,new C.adt(j,"Backup files",p),B.X,A.A(r,B.l,p,B.e,B.j,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l5,new C.adt(j,"One tree",p),B.X],u)
B.d.v(v,J.b8(q.d,new C.e3k(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cd(l,p,p,B.a0B,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.L(B.aY.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bm(!0,A.q(p,A.A(A.a([O.aTH,B.be,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.l,p,B.e,B.j,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.n),p,p,p,p,B.Ci,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dhF.prototype={}
C.bgE.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aY.j(0.32),B.kB,28)],x.V)
t=A.ap(p,A.X(B.uV,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.q(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.q(p,D.c1e,B.f,p,p,new A.p(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oV,A.E(A.x(A.a([D.fHA,B.U,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.j,0,B.p),1)],q),B.E,p,B.e,B.j,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.c99,B.n),p,p,p,p,p,p,p,p)}}
C.adt.prototype={
B(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.p(B.aY,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)}}
C.bgC.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aH.j(0.4):m.c
k=A.L(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aH.j(0.1),B.cM,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.L(t.j(0.35),B.r,1)
return A.aJ(!1,B.a3,!0,q,A.aP(!1,o,!0,A.eJ(A.da(new A.D(E.a0d,A.x(A.a([A.q(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.n),q,q,q,q,B.rX,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bH,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cC,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.j,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bgH.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aY.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aJ(!1,B.a3,!0,v,A.aP(!1,u,!0,A.eJ(new A.D(B.eY,A.A(A.a([A.q(v,D.c0t,B.f,v,v,new A.p(q,v,A.L(B.aY.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rX,v,v,v),B.be,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.j,0,B.p),1),A.X(B.hX,o,v,v,v,20)],n),B.l,v,B.e,B.j,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0u.prototype={
S(){return new C.aF5()},
gd1(){return this.c}}
C.aF5.prototype={
Y(){this.a2()
this.aaf()},
aaf(){var w=0,v=A.j(x.H),u=this,t
var $async$aaf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b3N(u.a.c,B.E5),$async$aaf)
case 2:t=e
if(u.c!=null)u.m(new C.e33(u,t))
return A.h(null,v)}})
return A.i($async$aaf,v)},
aiM(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aiM=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e34(q))
t=4
p=A.hre(q.a.d,B.E5)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.ath(n.e,m,l,B.E5,p,n.f),$async$aiM)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e35(q))
q.c.M(x.q).f.U(D.fiE)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.ei(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e36(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiM,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=p?B.jC:B.qj,n=p?B.iC:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eE(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fY8,q,q,q,1,q,!0)
w=A.m(24)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.qb(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aY,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.x(A.a([B.U,u,B.bA,t,B.U,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.an,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.l,q,B.bc,B.j,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcwi()
if(u)u=B.Kp
else u=A.X(r.e===!0?B.hI:B.aoG,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a6(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cg,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aY,q,B.h5,q,q,q,new A.ay(B.aY.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.hU,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aD:B.an,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.X)
w.push(new A.a6(1/0,q,A.bI(B.AR,q,new C.e37(d),A.bo(B.aY,q,q,q,q,B.h5,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ac,A.x(w,B.l,q,B.e,B.j,0,B.p),q),q,!1,!1,q,q)}}
C.a0v.prototype={
S(){return new C.blV(A.zW(B.yt,B.o5,B.v2))}}
C.blV.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eE(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fPQ,w,w,w,1,w,!0),B.w,A.zV(this.d,B.c_,new C.e3l(this,d)),w,!1,!1,w,w)}}
C.b_F.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.S7,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lV.prototype={}
C.a7h.prototype={
S(){return new C.blB(null,null)}}
C.blB.prototype={
Y(){var w=this,v=null
w.a2()
w.d=A.bn(v,B.rP,v,1,v,w)
w.e=A.bn(v,B.qt,v,1,v,w)
w.a.toString
w.d.cP(0)
w.e.cP(0)},
bz(d){var w,v,u=this
u.bJ(d)
u.a.toString
w=u.d
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cP(0)
w=u.e
w===$&&A.c()
v=w.r
if(!(v!=null&&v.a!=null))w.cP(0)},
t(){var w=this.d
w===$&&A.c()
w.t()
w=this.e
w===$&&A.c()
w.t()
this.bz6()},
B(d){var w,v,u=this,t=B.d.dP(D.a6d,new C.dPE(u),new C.dPF())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cD4(A.c9(new A.h6(A.a([w,v],x.dS)),new C.dPG(u,t),null),!0)}}
C.blA.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3H(d,e)
break
case"house":p.mg(d,e,D.dfU)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdA()
$.Q()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.o(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mm(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Bu(d,e,12)
p.yE(d,e,B.lf,5,14)
break
case"grocery":p.cl9(d,e)
break
case"calculator":p.ckR(d,e)
break
case"lumber":p.clh(d,e)
break
case"kitchen":p.clc(d,e)
break
case"landscape":p.mg(d,e,D.dgw)
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
p.Bu(d,e,8)
p.yE(d,e,B.i8,4,18)
break
case"plumbing":p.clq(d,e)
break
case"electrical":p.mg(d,e,D.ds5)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.Q()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.ar(new A.a1(0,0,0+e.a,0+e.b),u)
p.mm(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mm(d,e,B.m5.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Bu(d,e,10)
break
case"store":p.clA(d,e)
break
case"paint_remodel":p.cll(d,e)
break
case"roofing":p.cls(d,e)
break
case"warehouse":p.clH(d,e)
break
case"vehicles":p.clF(d,e)
break
case"farm":p.cl3(d,e)
break
case"restaurant":p.clr(d,e)
break
case"tools":p.clD(d,e)
break
case"wallet":p.clG(d,e)
break
case"concrete":p.ckX(d,e)
break
case"blueprint":p.ckP(d,e)
break
default:p.b3H(d,e)}},
mg(d,e,f){var w,v=new A.a1(0,0,0+e.a,0+e.b)
$.Q()
w=A.K()
w.sav(new A.a9(B.aA,B.aF,B.x,f,null,null).aK(0,v))
d.ar(v,w)},
mm(d,e,f,g,h){var w,v,u,t=new A.o(e.a/2,e.b/2),s=e.gdA()/2-h
$.Q()
w=A.K()
w.b=B.a9
w.c=2.4
w.r=f.gp(0)
for(v=0;v<24;++v){u=v/24*3.141592653589793*2+g
d.cC(A.bY(t,s),u,u+0.1439896632895322-u,!1,w)}},
yE(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdA()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.o(q+t*o,p+s*o),3.5,r)}},
Bu(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.i.F(t*0.17,0.9)
q=B.i.F(t*0.23,0.85)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.o(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3H(d,e){var w,v=this
v.mg(d,e,D.dqr)
w=v.c
v.mm(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mm(d,e,B.bN.j(0.45),-w*3.141592653589793*1.4,22)
v.bQO(d,e,B.i5,w)
v.yE(d,e,B.c.j(0.7),6,8)},
bQO(d,e,f,g){var w,v,u,t,s,r
$.Q()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.ar(new A.a1(16,r,t,r+3),w)}},
cl9(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.cuR)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.ap(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=D.de4[B.o.F(t,4)].j(0.85).gp(0)
d.N(new A.o(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mm(d,e,B.c.j(0.35),w,16)
l.yE(d,e,B.i8,5,12)},
ckR(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mg(d,e,D.cv_)
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
r=D.dij[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.en(r,h,h,B.cJ,h,h,h,h,h,h,new A.H(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.o(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.ap(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cv1[o]
l=B.kM.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.en(m,h,h,B.cJ,h,h,h,h,h,h,new A.H(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a5(d,new A.o(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.ap(o,3)*0.38)+Math.sin(n)*6))}i.mm(d,e,B.c.j(0.35),w*1.5,14)
i.mm(d,e,B.eL.j(0.55),-v*3.141592653589793*2,8)
i.mm(d,e,B.y7.j(0.4),r*2.8,22)
i.yE(d,e,B.qa,8,10)
i.Bu(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.i.F(w+o*0.22,0.9)
$.Q()
v=new A.ao(B.O,B.M,B.R,B.S,B.P)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.o(12,j),new A.o(t,j),v)}},
clh(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,W.aAu)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bl(new A.a1(20,r,u,r+10),B.hP)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=A.ar(B.h_,B.oa,(s+1)/2).gp(0)
d.am(q,p)}o.mm(d,e,B.h_.j(0.35),w,15)
o.Bu(d,e,8)},
clc(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.dez)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.i.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.i.F(s*0.13,0.7)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.S,B.P)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.o(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mm(d,e,B.bN.j(0.4),-w*3.141592653589793*2.2,11)
l.yE(d,e,B.q7,4,14)},
clq(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mg(d,e,D.d2J)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.i.F(s,0.12)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.S,B.P)
o.b=B.a9
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.o(w,u),q*(0.12+r*0.14+p),o)}n.yE(d,e,B.pf,6,12)
n.mm(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
clA(d,e){var w,v,u,t,s,r,q,p=this
p.mg(d,e,D.cIK)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bl(new A.a1(r,14,r+u,22),B.iy)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=A.ar(B.fn,B.bN,(s+1)/2).gp(0)
d.am(r,q)}p.mm(d,e,B.c.j(0.3),w,16)
p.Bu(d,e,8)
p.yE(d,e,B.w0,5,13)},
cll(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d92)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.i.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bl(new A.a1(r,q,r+8,q+(18+s*22)),B.hQ)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=[B.ir,B.dl,B.bN,B.ev][t].j(0.85).gp(0)
d.am(q,r)}this.mm(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
cls(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d6q)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.i.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.o(u*(0.1+r),s),new A.o(u*(0.18+r),s+10),q)}this.yE(d,e,B.cu,7,11)},
clH(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.cLu)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bl(new A.a1(q,p,q+(t-s*8),p+16),B.hP)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=A.ar(B.cu,B.aP,(Math.sin(r)+1)/2).gp(0)
d.am(p,q)}this.mm(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
clF(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dwh)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.i.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bl(new A.a1(s,r,s+28,r+8),B.hP)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.am(r,q)}this.Bu(d,e,6)},
cl3(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dd8)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.Q()
s=A.K()
s.r=B.m5.j(0.75).gp(0)
d.N(new A.o(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.hq.j(0.85).gp(0)
p.c=3
d.ah(new A.o(q,v),new A.o(q+s*6,t),p)}this.mm(d,e,B.m5.j(0.35),w,14)},
clr(d,e){var w,v,u,t,s,r,q=this
q.mg(d,e,D.dfJ)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bs(new A.o(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.S,B.P)
r.r=B.c.j(0.22).gp(0)
d.bZ(s,r)}q.yE(d,e,B.q7,5,16)
q.Bu(d,e,7)},
clD(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dtF)
w=o.c
v=w*3.141592653589793
o.mm(d,e,B.oa.j(0.55),v*3,10)
o.mm(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.oa.j(0.8).gp(0)
d.N(new A.o(v+r*34,u+q*22),4,p)}},
clG(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dwX)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bl(new A.a1(q,p,q+36,p+22),B.iy)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.S,B.P)
q.r=A.ar(B.i8,B.m5,r).gp(0)
d.am(p,q)}o.Bu(d,e,9)
o.mm(d,e,B.c.j(0.4),w*2.2,12)},
ckX(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dle)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bY(new A.o(v,u),34)
$.Q()
s=A.K()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cC(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ao(B.O,B.M,B.R,B.S,B.P)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.o(v+t*34,u+s*34),3,p)}},
ckP(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dgQ)
$.Q()
w=A.K()
w.r=B.c.j(0.12).gp(0)
w.c=1
for(v=e.a,u=e.b,t=0;t<v;t+=18)d.ah(new A.o(t,0),new A.o(t,u),w)
for(s=0;s<u;s+=18)d.ah(new A.o(0,s),new A.o(v,s),w)
r=this.c
q=u*B.i.F(r*0.85,1)
$.Q()
u=A.K()
u.r=B.dl.j(0.45).gp(0)
d.ar(new A.a1(0,q,0+v,q+6),u)
this.mm(d,e,B.lf.j(0.45),-r*3.141592653589793*2,11)},
aD(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.au2.prototype={
a0e(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0e=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aRJ(),$async$a0e)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9u(s),$async$a0e)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a0e,v)},
ahl(d){return this.cnZ(d)},
cnZ(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.isB(d),$async$ahl)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahl,v)},
B(d){var w,v,u,t=null,s=A.S(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jV:B.jl
w=x.p
v=A.a([C.aS7(!0,B.rl,1/0,B.qF,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c3(new A.bM(B.b7,t,t,new A.D(B.us,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.V,t,t,!0,t,t,t,t,t,B.aBr,t,t),t,t,t),t),t),new A.p(t,t,t,t,t,new A.a9(B.b7,B.ba,B.x,u,t,t),B.n),B.bj))}v.push(A.ap(8,A.A(A.a([A.E(A.dg(D.bUZ,t,D.fDQ,new C.coR(this,d),A.bo(B.aY,t,t,t,B.c,t,B.k1,t,t,t,t,B.cf)),1),B.ae,A.E(A.es(D.c2u,D.fT2,this.gceV(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.k1,t,t,D.b4T,t,t,t,B.cf)),1)],w),B.l,t,B.e,B.j,0,t,t),t,t,8,8,t,t))
return new A.fF(1.7777777777777777,A.aJ(!1,B.a3,!0,B.rl,new A.an(B.a0,t,B.b2,B.t,v,t),B.aq,s,0,t,t,t,t,t,B.aj),t)}}
C.aN8.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a3()}}
C.aV6.prototype={}
C.aV5.prototype={}
C.aT6.prototype={}
C.a_8.prototype={
S(){return new C.aAh()}}
C.aAh.prototype={
Y(){var w,v,u=this
u.a2()
u.a.toString
w=new A.ba("",B.b6,B.aQ)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
KK(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.M(x.q).f.U(D.fj8)
return}t=u.c
t.toString
v=u.e
A.a7(t,!1).O(new C.aV6(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.S(d).ax.a===B.J,l=m?B.ec:B.c,k=A.m(20),j=A.q(n,D.c29,B.f,n,n,new A.p(B.aY.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aP:B.as,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bH,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bq,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.j,0,B.p),1)
j=A.A(A.a([j,B.be,i,A.aG(n,n,n,n,A.X(B.cz,m?B.bu:B.bq,n,n,n,n),n,n,n,new C.d8Q(d),n,n,n,n,n,n)],h),B.l,n,B.e,B.j,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bq,n,n,n,n,n,n,n,n,12,n,n,B.V,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bq,n,n,n,n,n,n,n,n,11,n,n,B.cC,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hru(new C.d8R(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aP:B.as,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jV:B.jl
r=A.m(12)
q=A.m(12)
p=m?B.eg:B.bP
t=A.aM(n,B.Z,!0,n,!0,B.t,n,A.aO(),u,n,n,n,n,n,2,A.bt(n,new A.b6(4,r,B.dq),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d8S(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A0.Kw,n,n,n,n)
u=m?B.aP:B.as
m=m?B.eg:B.bP
return A.eO(n,l,new A.cS(B.m2,A.ci(A.x(A.a([j,B.aR,i,B.ay,w,B.U,v,B.aR,t,B.bA,A.A(A.a([A.E(A.dU(B.dn,new C.d8T(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.cp,n,new A.b9(A.m(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.au,A.E(A.bI(D.fTi,n,o.ga3l(),A.bo(B.aY,n,n,n,B.c,n,B.cp,n,new A.b9(A.m(12),B.a1),n,n,n)),1)],h),B.l,n,B.e,B.j,0,n,n)],h),B.E,n,B.e,B.Q,0,B.p),B.t,n,B.y,n,B.Cj,n,n,B.ah),n),n,n,n,A5.Ck,B.d7,n,new A.b9(k,B.a1),n)}}
C.a_7.prototype={
S(){return new C.aAg()}}
C.aAg.prototype={
Y(){this.a2()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.au(B.ax,w)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
KK(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.M(x.q).f.U(D.fgM)
return}v=this.c
v.toString
A.a7(v,!1).O(new C.aV5(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.S(d).ax.a===B.J,o=p?B.ec:B.c,n=A.m(20),m=A.q(q,D.bZE,B.f,q,q,new A.p(B.bR.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bH,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bq,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.j,0,B.p),1)
m=A.A(A.a([m,B.be,l,A.aG(q,q,q,q,A.X(B.cz,p?B.bu:B.bq,q,q,q,q),q,q,q,new C.d8M(d),q,q,q,q,q,q)],k),B.l,q,B.e,B.j,0,q,q)
l=B.aY.j(p?0.12:0.08)
w=A.m(12)
v=A.L(B.aY.j(0.25),B.r,1)
u=A.X(B.aos,B.aY.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.au,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.l,q,B.e,B.j,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.n),q,q,q,q,B.bF,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aP:B.as,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jV:B.jl
t=A.m(12)
s=A.m(12)
r=p?B.eg:B.bP
v=A.aM(q,B.Z,!0,q,!0,B.t,q,A.aO(),w,q,q,q,q,q,2,A.bt(q,new A.b6(4,t,B.dq),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d8N(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l6,q,q,q,q)
w=p?B.aP:B.as
p=p?B.eg:B.bP
return A.eO(q,o,new A.cS(B.m2,A.ci(A.x(A.a([m,B.aR,l,B.aB,v,B.bA,A.A(A.a([A.E(A.dU(B.dn,new C.d8O(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.cp,q,new A.b9(A.m(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.au,A.E(A.bI(D.h_p,q,this.ga3l(),A.bo(B.bR,q,q,q,B.c,q,B.cp,q,new A.b9(A.m(12),B.a1),q,q,q)),1)],k),B.l,q,B.e,B.j,0,q,q)],k),B.E,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.Cj,q,q,B.ah),q),q,q,q,A5.Ck,B.d7,q,new A.b9(n,B.a1),q)}}
C.ZF.prototype={
S(){return new C.az0()}}
C.az0.prototype={
Y(){var w,v=this
v.a2()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.au(B.ax,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b6,B.aQ),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.ax,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.ax,w)},
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
gK1(){var w,v=this.e
v===$&&A.c()
w=A.d1(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakx(){var w=this.f
w===$&&A.c()
w=A.d1(B.a.i(w.a.a))
return w==null?0:w},
gb6u(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQR(d){var w,v=B.i.D(this.gK1()+d,0.25,999999),u=B.i.iZ(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.i.L(v))
else{u=B.i.ac(v,2)
w=A.af("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cHb())},
azM(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aY,w,w,w,20):w,u=d.a,t=u?B.jV:B.jl,s=A.m(14),r=A.m(14)
u=u?B.eg:B.bP
return A.bt(w,new A.b6(4,s,B.dq),w,B.bF,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.adU),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
ceW(d,e,f){return this.azM(d,e,f,null)},
KK(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakx()<=0){s.c.M(x.q).f.U(D.fl0)
return}r=s.c
r.toString
v=s.gK1()
u=s.gakx()
t=s.gb6u()
A.a7(r,!1).O(new C.aT6(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.ui(n),l=n?B.ec:B.c,k=A.m(24),j=x.O,i=A.a([B.aY.j(0.22),B.bR.j(0.14)],j),h=A.m(14)
i=A.q(o,D.bSU,B.f,o,o,new A.p(o,o,A.L(B.aY.j(0.35),B.r,1),h,o,new A.a9(B.a6,B.aa,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bH,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,12,o,o,B.cC,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1)
i=A.A(A.a([i,B.be,h,A.aG(o,o,o,o,A.X(B.cz,n?B.bu:B.bq,o,o,o,o),o,o,o,new C.cHh(d),o,o,o,o,o,o)],w),B.l,o,B.e,B.j,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Z,!0,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.azM(m,"Item name (optional)","Lumber, paint, labor\u2026",B.PE),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A0.Kw,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jV:B.jl
t=A.m(14)
s=A.L(n?B.eg:B.bP,B.r,1)
r=A.aG(o,o,o,o,A.X(B.wH,n?B.aP:B.as,o,o,o,20),o,o,o,new C.cHi(p),o,o,o,o,o,B.cf)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),q,o,o,o,o,o,2,D.c42,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e9,o,o,o,1,o,o,!1,"\u2022",o,new C.cHj(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a6(52,o,q,o),A.aG(o,o,o,o,A.X(B.hW,n?B.aP:B.as,o,o,o,20),o,o,o,new C.cHk(p),o,o,o,o,o,B.cf)],w),B.l,o,B.e,B.Q,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,16,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.au,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),t,o,o,o,o,o,2,p.azM(m,"Amount","0.00",B.ic),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e9,o,o,o,1,o,o,!1,"\u2022",o,new C.cHl(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.j,0,o,o)
t=x.gv
u=A.C(new A.N(D.d9z,new C.cHm(p,m),t),t.k("ak.E"))
i=A.a([i,B.bA,v,B.aB,h,B.U,s,B.af,A.bV(B.bG,u,B.bs,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.X,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aO(),h,o,o,o,o,o,2,p.ceW(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cHn(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l6,o,o,o,o)],w))}i.push(B.aR)
h=B.aY.j(n?0.18:0.1)
j=A.a([h,B.bR.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,11,o,o,B.V,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gK1()===B.i.iZ(p.gK1())?B.i.L(p.gK1()):p.gK1()
s=p.gb6u()
r=A.Bq(p.gakx())
i.push(A.q(o,A.A(A.a([A.E(A.x(A.a([u,B.ay,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.j,0,B.p),1),C.bFM(p.gK1()*p.gakx(),B.b1,!1,B.u)],w),B.l,o,B.e,B.j,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a9(B.a6,B.aa,B.x,j,o,o),B.n),o,o,o,o,B.jo,o,o,o))
i.push(B.bA)
j=A.m(14)
h=n?B.eg:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.cp,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aP:B.as,o,o,o,o,o,o,o,o,o,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cHo(d),h),1),B.au,A.E(A.dg(D.arZ,o,D.fWi,p.ga3l(),A.bo(B.aY,o,o,0,B.c,o,B.cp,o,new A.b9(A.m(14),B.a1),o,o,o)),2)],w),B.l,o,B.e,B.j,0,o,o))
return A.eO(o,l,new A.cS(Ah.XA,A.ci(A.x(i,B.al,o,B.e,B.Q,0,B.p),B.t,o,B.y,o,Ak.rV,o,o,B.ah),o),o,o,o,B.Oh,B.d7,o,new A.b9(k,B.a1),o)}}
C.a2h.prototype={
S(){return new C.byj()}}
C.byj.prototype={
Y(){var w,v,u=this
u.a2()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b6,B.aQ),v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=r?B.ec:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aP:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aP:B.as,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jV:B.jl
v=A.aM(s,B.Z,!0,s,!0,B.t,s,A.aO(),w,s,s,s,s,s,2,A.bt(s,new A.b6(4,A.m(12),B.dq),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.fmc(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dn,new C.fmd(d),s),1)
r=A.bo(B.bR,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eO(s,q,new A.D(B.Cj,A.x(A.a([o,B.aB,v,B.aR,A.A(A.a([u,B.au,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.fme(t,d),r),1)],w),B.l,s,B.e,B.j,0,s,s)],w),B.l,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d7,s,new A.b9(p,B.a1),s)}}
C.acw.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gl.prototype={
S(){return new C.byh(null,null)}}
C.byh.prototype={
Y(){var w,v=this
v.a2()
w=A.bn(null,D.bzX,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBp()},
gbD0(){switch(this.a.r.a){case 1:return A.a([B.aY,B.bR,B.b1],x.O)
case 2:return A.a([B.bx,B.aY,B.b1],x.O)
case 3:return A.a([B.aH,B.ch,B.jW],x.O)
case 4:return A.a([B.hr,B.bR,B.fo],x.O)
case 0:return A.a([B.aY,B.bR,B.b1],x.O)}},
B(d){var w=A.S(d),v=this.d
v===$&&A.c()
return new A.em(A.c9(v,new C.fma(this,new C.ui(w.ax.a===B.J)),null),null)}}
C.ayU.prototype={
S(){return new C.byi(null,null)}}
C.byi.prototype={
Y(){var w,v=this
v.a2()
w=A.bn(null,B.nC,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bBq()},
B(d){var w=this.d
w===$&&A.c()
return A.c9(w,new C.fmb(this),null)}}
C.byg.prototype={
a5(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bl(new A.a1(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aN(w,w))
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
w=A.xK(u)
t=A.a([],x.U)
w=new A.rv(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jG(y.B));--r
q=new A.BS(w,r)
w.iz()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aUo(d,q,r,o,0,0.2,4.2,0.92)
p.aUo(d,q,r,s,0.52,0.11,3.2,0.58)}},
aUo(d,e,f,g,h,i,j,k){var w,v,u,t=B.i.F(g+h,1)*f,s=A.hO8(e.a.a,e,t,t+f*i,!0),r=A.bE6(s.glV().a.getBounds())
$.Q()
w=A.K()
w.b=B.a9
w.c=j
w.d=B.bw
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a9(B.a6,B.aa,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Iv,null).aK(0,r))
d.af(s,w)},
aD(d){return d.b!==this.b||d.d!==this.d}}
C.aPe.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aPf.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.ui.prototype={}
C.au1.prototype={
S(){return new C.aGA()},
ge3(){return this.c}}
C.aGA.prototype={
Y(){var w=this
w.a2()
w.d=w.a.d
w.aib()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.M5(w,v)
this.a3()},
aib(){var w=0,v=A.j(x.H),u=this,t,s
var $async$aib=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bEf(t.c,t.d.a),$async$aib)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eV_(u,s))
return A.h(null,v)}})
return A.i($async$aib,v)},
QM(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QM=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eUR(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.M5(t,s),$async$QM)
case 2:if(u.c!=null)u.m(new C.eUS(u))
return A.h(null,v)}})
return A.i($async$QM,v)},
Rj(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.S(p)
s=t.c
s.toString
w=3
return A.b(A.cf(null,null,!0,null,new C.eUY(t,new C.ui(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$Rj)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9u(q),$async$Rj)
case 6:case 5:t.m(new C.eUZ(t,r))
w=7
return A.b(t.QM(),$async$Rj)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Rj,v)},
Ww(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ww=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.isl(r),$async$Ww)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eUM(t,new C.rn(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QM(),$async$Ww)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ww,v)},
ck0(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hFD(t,new C.eUQ(u),w,v)},
ac3(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.p(w,w,new A.bG(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b4F,w,w,B.n),w,22,w,w,w,w,w,22)},
ab5(d){return this.bP_(d)},
bP_(d){var w=0,v=A.j(x.H),u=this
var $async$ab5=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eUP(u,d))
w=2
return A.b(u.QM(),$async$ab5)
case 2:return A.h(null,v)}})
return A.i($async$ab5,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.S(a2).ax.a===B.J,e=f?B.c3:B.iD,d=A.m(8),a0=A.X(Z.a1P,f?B.bu:B.bq,g,g,g,16),a1=x.p
a0=A.aP(!1,d,!0,new A.D(B.GY,A.A(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bq,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.l,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eV0(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b2,B.t,A.a([A.by(A.m(22),C.aS7(!0,A.m(22),1/0,B.qF,g,d,1/0),B.aq),A.ap(10,A.dg(D.bXB,g,D.fYH,h.gb4q(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hd,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aY.j(f?0.5:0.38),B.f_,22),new A.ac(-4,B.G,B.bR.j(0.2),B.I,32)],w)
u=A.m(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.m(16)
r=h.d
v=A.q(g,A.q(g,A.by(s,new A.an(B.a0,g,B.b2,B.t,A.a([C.aS7(!0,A.m(16),1/0,B.P6,g,r.c,1/0),A.c3(g,new A.p(g,g,g,g,g,new A.a9(B.b7,B.ba,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bj),A.ap(g,h.ac3(!0),g,g,8,g,8,g),A.ap(g,A.cDP(h.ac3(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cDP(h.ac3(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cDP(h.ac3(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dg(D.bTu,g,D.fRY,h.gb4q(),A.bo(B.w.j(0.45),g,g,g,B.c,g,B.hd,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.c5K,B.n),g,g,g,g,B.mg,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bfo,B.oe,B.ha],u):A.a([B.b1,B.aY,B.bR],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aY.j(f?0.45:0.35),B.f_,24)],t)
r=A.m(22)
p=A.ap(g,A.X(B.k5,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.n),g,g,g,g,B.hb,g,g,g)],a1),B.l,g,B.e,B.j,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.am,C.bFM(h.d.gxF(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.U,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cC,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.j,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.L(B.ht.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aH.j(0.28),B.cM,14)],t)
j=B.aH.j(0.22)
i=A.m(10)
u=A.q(g,A.by(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bEN,A.A(A.a([o,B.au,A.aJ(!1,B.a3,!0,g,A.aP(!1,n,!0,A.eJ(new A.D(V.wi,A.x(A.a([A.q(g,D.arz,B.f,g,g,new A.p(j,g,A.L(B.aH.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cm,g,g,g),B.fM,D.fGE],a1),B.l,g,B.e,B.Q,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gck_(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.l,g,B.e,B.j,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,g,v,s,new A.a9(B.aA,B.aF,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aR,w,B.U,u,B.bA,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b3,A.dg(Aw.a3G,g,D.fEu,h.gbDu(),A.bo(B.aY,g,g,g,B.c,g,B.iv,g,new A.b9(A.m(12),B.a1),g,g,g))],a1),B.l,g,B.e,B.j,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.ec:B.c
v=A.m(14)
u=A.L(f?B.eg:B.bP,B.r,1)
t=A.X(B.a29,f?B.bu:B.bq,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aP:B.as,g,g,g,g,g,g,g,g,g,g,g,B.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.x(A.a([t,B.X,s,B.am,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bq,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.l,g,B.e,B.j,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.n),g,g,g,g,B.qB,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eV1(h,new C.ui(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.C9,A.at(A.n4(g,f?B.bu:B.bq,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bm(!0,A.x(A.a([new A.D(B.Cc,a0,g),A.E(A.ci(A.x(d,B.E,g,B.e,B.j,0,B.p),B.t,g,B.y,g,E.yN,g,g,B.ah),1)],a1),B.E,g,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bHa(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.ec:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cM,12)],x.V),n=A.m(16),m=A.q(u,u,B.f,u,u,D.b7q,u,u,u,u,u,u,u,5),l=B.aY.j(r?0.22:0.12),k=A.m(12)
l=A.q(u,A.X(s?B.id:B.hf,B.b1,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aP:B.as,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gd_A()
v=A.Bq(d.d)
B.d.v(t,A.a([B.ay,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bq,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.bc,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aY.j(0.14),B.bR.j(0.1)],x.O)
w=A.m(12)
k=A.q(u,C.bFM(d.c*d.d,B.b1,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a9(B.a6,B.aa,B.x,k,u,u),B.n),u,u,u,u,B.hd,u,u,u)
w=x.p
return A.q(u,A.by(n,new A.EL(A.A(A.a([m,A.E(new A.D(B.als,A.A(A.a([l,B.be,t,B.ae,k,A.aG(u,u,u,u,A.X(B.cz,(r?B.bu:B.bq).j(0.75),u,u,u,20),u,u,u,new C.eUN(this,d),u,u,u,u,u,B.cf)],w),B.l,u,B.e,B.j,0,u,u),u),1)],w),B.al,u,B.e,B.j,0,u,u),u),B.aq),B.f,u,D.b6h,new A.p(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.aez.prototype={
EX(d){return this.bQq(d)},
bQq(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pv(d,o,!1),$async$EX)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).O(null)
w=4
return A.b(A.bQ(Aj.C7,null,x.H),$async$EX)
case 4:s=t.d
w=5
return A.b(C.fVS(!0,o,s),$async$EX)
case 5:r=f
q=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.Hg(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EX)
case 6:p=f
w=7
return A.b(A.pu(o,!1),$async$EX)
case 7:if(d.e==null){w=1
break}d.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EX,v)},
a0g(d){return this.cAq(d)},
cAq(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0g=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pv(d,s,!1),$async$a0g)
case 3:if(!f||d.e==null){w=1
break}A.a7(d,!1).O(null)
A.hE(d,new C.atW(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pu(s,!1),$async$a0g)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0g,v)},
QN(d){return this.cwu(d)},
cwu(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aLa,!0,"NgmyWorksheetProjectScan",x.N),$async$QN)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bFN(s),$async$QN)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.M(x.q).f.U(D.fk8)
w=1
break}q=C.hh4(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$QN)
case 5:if(d.e==null){w=1
break}d.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QN,v)},
a0h(d){return this.cIL(d)},
cIL(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0h=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a7(d,!1).O(null)
w=3
return A.b(C.bFj(),$async$a0h)
case 3:s=f
if(s==null){w=1
break}r=C.hh4(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$a0h)
case 4:if(d.e==null){w=1
break}d.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0h,v)},
B(d){var w=this,v=null,u=A.S(d).ax.a===B.J,t=new C.ui(u),s=w.d.d.length,r=u?B.ec:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kB,36)],x.V),o=x.p
return A.bm(!0,new A.D(B.wh,A.q(v,A.x(A.a([w.cz_(d,t,s),new A.D(D.bEb,A.x(A.a([w.b7p(t,"QR restore"),B.X,A.A(A.a([w.b2p(t,!0,B.jI,B.aH,B.aH,new C.eV3(w,d),"Show to scan","QR code"),B.au,w.azN(t,B.jr,B.b9,B.br,new C.eV4(w,d),"From camera","Scan QR")],o),B.l,v,B.e,B.j,0,v,v),B.d8,w.b7p(t,"Backup files"),B.X,A.A(A.a([w.azN(t,B.hX,B.aY,B.bR,new C.eV5(w,d),"Full copy","Backup file"),B.au,w.azN(t,R.zp,B.aw,B.aV,new C.eV6(w,d),".json backup","Upload file")],o),B.l,v,B.e,B.j,0,v,v)],o),B.E,v,B.e,B.j,0,B.p),v)],o),B.l,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.p(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cz_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eV,B.cG,B.fR],k):A.a([B.b1,B.aY,B.bR],k)
w=A.ap(l,A.X(B.uV,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.q(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kU,l,l,l,36),l,l,l)
u=A.m(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cM,12)],x.V)
r=this.d
s=A.q(l,C.aS7(!0,A.m(13),64,D.bOM,l,r.c,64),B.aq,l,l,new A.p(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.abl,l,l,l)
r=C.bFM(r.gxF(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bEz,A.x(A.a([v,A.A(A.a([s,B.ex,A.E(A.x(A.a([u,B.ay,t,B.U,A.A(A.a([r,B.ae,A.q(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.n),l,l,l,l,B.fV,l,l,l)],m),B.l,l,B.e,B.j,0,l,l)],m),B.E,l,B.e,B.j,0,B.p),1),A.aG(l,l,l,l,A.X(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eV2(d),l,l,l,A.o_(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aTv,l,l,l,l),l,l)],m),B.E,l,B.e,B.j,0,l,l)],m),B.l,l,B.e,B.j,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a9(B.aA,B.aF,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b7p(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.p(B.aY,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bq,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.j,0,w,w)},
b2p(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ak0:B.aP
if(e)w=B.aH.j(o?0.45:0.35)
else{w=o?B.eg:B.bP
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aH.j(0.12),B.cM,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.L(h.j(0.35),B.r,1)
t=A.q(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.n),r,r,r,r,B.rX,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aP:B.as,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aJ(!1,B.a3,!0,r,A.aP(!1,q,!0,A.eJ(new A.D(E.a0d,A.x(A.a([t,B.af,u,B.bH,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bq,r,r,r,r,r,r,r,r,11,r,r,B.cC,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azN(d,e,f,g,h,i,j){return this.b2p(d,!1,e,f,g,h,i,j)}}
C.atW.prototype={
S(){return new C.bnh()}}
C.bnh.prototype={
Y(){this.a2()
this.ag5()},
ag5(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$ag5=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bFO(p.c,p.d),$async$ag5)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eUH(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eUI(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ag5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.S(d).ax.a===B.J,f=g?B.BF:B.iD,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aG(h,h,h,h,A.X(B.eN,g?B.ab:B.an,h,h,h,18),h,h,h,new C.eUJ(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.T,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.x9],u),B.l,h,B.e,B.j,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eV,B.cG,B.fR],s):A.a([B.b1,B.aY,B.bR],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aY.j(g?0.4:0.3),B.f_,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.di,B.K,h,h)
p=C.bFM(p.gxF(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.q(h,A.x(A.a([o,B.am,A.A(A.a([p,B.ae,A.q(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.n),h,h,h,h,B.fV,h,h,h)],u),B.l,h,B.bc,B.j,0,h,h)],u),B.l,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a9(B.aA,B.aF,B.x,s,h,h),B.n),h,h,h,h,E.a0A,h,h,1/0)
t=g?D.bqB:B.c
q=A.m(24)
p=A.L(w?B.aH.j(0.4):B.aY.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Vs,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.ers)
else{m=A.m(20)
l=A.L(B.aO,B.r,1)
o.push(A.q(h,A.qb(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bQ,h,h,h))}}o.push(B.aR)
n=w?B.aH:B.aY
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.L((w?B.aH:B.aY).j(0.35),B.r,1)
k=w?B.Pk:B.PS
k=A.X(k,w?B.aH:B.aY,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.au,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.an,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.l,h,B.e,B.j,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.n),h,h,h,h,B.iv,h,h,h))
return A.c4(h,f,A.bm(!0,A.x(A.a([new A.D(Ae.Ot,e,h),A.E(A.ci(A.x(A.a([s,B.aR,A.q(h,A.x(o,B.l,h,B.e,B.j,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.n),h,h,h,h,B.uz,h,h,1/0)],u),B.l,h,B.e,B.j,0,B.p),B.t,h,B.y,h,E.amy,h,h,B.ah),1)],u),B.l,h,B.e,B.j,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.au0.prototype={
S(){return new C.aGz(A.zW(B.NH,B.o5,B.v2))}}
C.aGz.prototype={
t(){this.d.t()
this.a3()},
aOM(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j_(w,d)},
cfO(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.ipE(t)
if(s!=null){this.aOM(s)
return}r=C.hw3(t)
if(r!=null)q=A.cQ(r,p,0)
else q=!1
if(q){this.aOM(B.a.i(B.a.b2(r,B.a.co(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eE(A.a([A.aG(t,t,t,t,A.X(u.f?B.uM:A9.Ps,t,t,t,t,t),t,t,t,new C.eUL(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.BF,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fRR,t,t,t,1,t,!0),q=A.zV(u.d,B.c_,u.gcfN()),p=A.m(28)
p=A.at(A.q(t,t,B.f,t,t,new A.p(t,t,A.L(B.aY,B.r,3),p,A.a([new A.ac(2,B.G,B.aY.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b2,B.t,A.a([q,p,A.ap(32,A.q(t,D.fQC,B.f,t,t,new A.p(w,t,A.L(B.aY.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jo,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLt.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.OY.prototype={
S(){return new C.aGB(D.adc,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGB.prototype={
gcGx(){return J.bGV(this.e,0,new C.eVt())},
Y(){this.a2()
$.aW.c1$.push(this)
this.wi()},
t(){$.aW.hW(this)
this.a3()},
jm(d){if(d===B.fQ)this.wi()},
wi(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wi=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.DA(q.a.c).dh(0,B.k0),$async$wi)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eVp(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eVq(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wi,v)},
Is(d){return this.bN7(d)},
bN6(){return this.Is(null)},
bN7(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Is=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iso(l,d),$async$Is)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lC(l,r,q,D.dlu,new A.V(Date.now(),0,!1))
w=4
return A.b(C.M5(t.a.c,p),$async$Is)
case 4:o=f
w=5
return A.b(t.wi(),$async$Is)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.M(x.q).f.U(D.fhf)
w=1
break}n=J.aU(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.M(q).f.U(D.fj2)
else n.M(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.F0(m)
case 1:return A.h(u,v)}})
return A.i($async$Is,v)},
F0(d){return this.cjM(d)},
cjM(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$F0=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.au1(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$F0)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.M5(u.a.c,t),$async$F0)
case 5:case 4:w=6
return A.b(u.wi(),$async$F0)
case 6:return A.h(null,v)}})
return A.i($async$F0,v)},
w3(d){return this.c2v(d)},
c2v(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w3=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bFj(),$async$w3)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aLa,!0,"NgmyWorksheetProjectScan",x.N),$async$w3)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bFN(q),$async$w3)
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
r.U(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hh4(s)
w=15
return A.b(C.M5(t.a.c,p),$async$w3)
case 15:o=f
w=16
return A.b(t.wi(),$async$w3)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.M(x.q).f.U(D.fj7)
w=1
break}r.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.F0(p)
case 1:return A.h(u,v)}})
return A.i($async$w3,v)},
Op(d){return this.bLM(d)},
bLM(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$Op=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.cf(null,null,!0,null,new C.eVa(d),s,null,!0,!0,x.y),$async$Op)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p3(t.a.c,A.a([],x.D)),$async$Op)
case 6:w=7
return A.b(t.wi(),$async$Op)
case 7:s=t.c
if(s==null){w=1
break}s.M(x.q).f.U(D.fhk)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Op,v)},
cjZ(d){var w=this.c
w.toString
A.bT(B.L,null,new C.eVj(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b81(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jV
else w=B.c
v=A.m(16)
u=A.L(p?B.eg:B.bP,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.q(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.n),r,r,r,r,B.bV,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aP:B.as,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aJ(!1,B.a3,!0,r,A.aP(!1,q,!0,A.q(r,A.x(A.a([s,B.af,t,B.bH,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bq,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.j,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.n),r,r,r,r,B.wg,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0M(d,e){return this.cjN(d,e)},
cjN(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0M=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.L,null,new C.eVe(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0M)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hFD(r,new C.eVf(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Or(d,e),$async$a0M)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0M,v)},
b52(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.q(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.n),u,u,u,u,B.bV,u,u,u)
if(d)t=B.av
else t=h.a?B.aP:B.as
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bq,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.j,0,B.p),1)
return A.aJ(!1,B.a3,!0,u,A.aP(!1,u,!0,new A.D(B.Ci,A.A(A.a([s,B.be,t,A.X(B.eJ,w?B.bu:B.bq,u,u,u,u)],v),B.l,u,B.e,B.j,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cqI(d,e,f,g,h,i){return this.b52(!1,d,e,f,g,h,i)},
Or(d,e){return this.bLW(d,e)},
bLW(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Or=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lo(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Or)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bE0(t.a.c,d.a),$async$Or)
case 6:w=7
return A.b(t.wi(),$async$Or)
case 7:r=t.c
if(r==null){w=1
break}r.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Or,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===B.J,n=new C.ui(o),m=o?B.c3:B.iD
if(q.f)o=D.bda
else{w=q.bGh(n)
v=q.c1z(n)
u=q.gbDn()
if(o)t=B.jV
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.af,v,B.aR,new C.Gl(A.q(p,A.A(A.a([q.aDl(Q.P5,"Projects",n,D.adc),q.aDl(B.ww,"Cashier",n,D.b1a),q.aDl(B.Hj,"Family Tree",n,D.hDB)],r),B.l,p,B.e,B.j,0,p,p),B.f,p,p,new A.p(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.eA,0.95,u,p),B.bA],r)
w=q.d
if(w===D.adc){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aP:B.as,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b3,new C.ayU(q.gaT9(),p)],r),B.l,p,B.e,B.j,0,p,p),B.aB,q.cqK(n)],r))}else{o=q.a
if(w===D.b1a)u.push(new C.apQ(o.c,n,p))
else{w=q.r
u.push(new C.ar0(o.c,o.d,o.e,o.f,new C.eVw(q),new C.eVx(q),new A.bJ(w,x.b4)))}}o=A.ci(A.x(u,B.E,p,B.e,B.j,0,B.p),B.t,p,B.y,p,Am.Om,p,p,B.ah)}return A.c4(p,m,A.bm(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bGh(d){var w=null,v=A.m(8),u=d.a,t=A.X(Z.a1P,u?B.bu:B.bq,w,w,w,16)
return A.aP(!1,v,!0,new A.D(B.kV,A.A(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bq,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.l,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eV7(this),w,w,w,w,w,w,w)},
gbDn(){switch(this.d.a){case 0:return D.acq
case 1:return D.hs0
case 2:return D.acr}},
c1z(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aY.j(0.35),B.cA,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.bZu,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.be,D.bJa,A.aJ(!1,B.a3,!0,w,A.aP(!1,A.m(12),!0,A.q(w,D.bWU,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eVb(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.j,0,w,w),r=B.b1.j(0.55),q=A.m(12)
return new C.Gl(A.q(w,A.x(A.a([new A.D(P.Of,s,w),A.q(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ay,A.d(A.Bq(this.gcGx()),w,w,w,w,w,w,D.fAL,w,w,w)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.n),w,w,w,B.uw,B.jo,w,w,1/0)],t),B.E,w,B.e,B.j,0,B.p),B.f,w,w,new A.p(B.aY,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hs_,w)},
aDl(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aY:B.L,q=A.m(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aY.j(0.42),B.cM,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bq
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bq
return A.E(A.aJ(!1,B.a3,!0,u,A.aP(!1,s,!0,A.cT(u,A.A(A.a([w,B.e3,new A.dq(1,B.cr,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.l,u,B.bc,B.j,0,u,u),u,u,B.cw,new A.p(r,u,p,q,o,u,B.n),B.iI,u,u,u,u,B.GZ,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eVs(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cqK(d){var w,v,u,t,s,r,q=this,p=null
if(J.cq(q.e)){w=d.a
v=w?B.ec:B.c
u=A.m(15)
t=A.q(p,D.bX_,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.G,B.aY.j(0.5),B.f_,28)],x.V),D.c89,B.a7),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aP:B.as,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gl(A.q(p,A.x(A.a([t,B.d8,s,B.U,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bq,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dY,A.A(A.a([A.E(q.aUK(B.jr,"Scan QR",new C.eVm(q),d),1),B.au,A.E(q.aUK(R.zp,"Upload file",new C.eVn(q),d),1)],r),B.l,p,B.e,B.j,0,p,p),B.aB,A.bI(D.h1n,p,q.gaT9(),A.bo(B.aY,p,p,p,B.c,B.h5,p,p,new A.b9(A.m(12),B.a1),p,p,p))],r),B.l,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bFE,1.05,D.acq,p)}w=J.b8(q.e,new C.eVo(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gl(A.x(w,B.l,p,B.e,B.j,0,B.p),16,B.bV,1,D.acq,p)},
aUK(d,e,f,g){var w=null,v=B.aY.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.L(B.aY.j(0.45),B.r,1)
return A.aJ(!1,B.a3,!0,u,A.aP(!1,t,!0,A.q(w,A.x(A.a([A.X(d,B.b1,w,w,w,26),B.U,A.d(e,w,w,w,w,w,w,D.fz2,B.K,w,w)],x.p),B.l,w,B.e,B.Q,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.n),w,w,w,w,B.all,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cqJ(d,e){var w,v,u=null,t=e.a,s=t?B.ec:B.c,r=A.m(14),q=A.L(t?B.eg:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.et,10)],x.V),o=A.m(14),n=t?B.bu:B.bq
n=A.by(B.Xu,new A.fF(1.7777777777777777,C.aS7(!0,B.fj,1/0,Q.P5,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aP:B.as,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.ay,A.d(""+d.d.length+" budget items \xb7 "+A.Bq(d.gxF()),u,u,u,u,u,u,D.fx_,u,u,u)],w),B.E,u,B.e,B.j,0,B.p),1)
return A.q(u,A.aJ(!1,B.a3,!0,u,A.aP(!1,o,!0,A.x(A.a([n,new A.D(B.bF,A.A(A.a([v,A.aG(u,u,u,u,A.X(An.a2S,t?B.bu:B.bq,u,u,u,u),u,u,u,new C.eVk(this,d,e),u,u,u,u,"Project options",u)],w),B.l,u,B.e,B.j,0,u,u),u)],w),B.E,u,B.e,B.j,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eVl(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.p(s,u,q,r,p,u,B.n),u,u,u,B.eh,u,u,u,1/0)}}
C.bA4.prototype={}
C.rn.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.I(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gd_A(){var w,v,u,t,s=this.c
if(s===B.i.iZ(s))w=B.o.u(B.i.L(s))
else{v=B.i.ac(s,2)
u=A.af("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lC.prototype={
gxF(){return B.d.cF(this.d,0,new C.cGw())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.cGv(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bfp(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lC(w.a,w.b,v,u,w.e)},
bf7(d){return this.bfp(d,null)},
TA(d){return this.bfp(null,d)}}
C.Ir.prototype={
a7(){return"FamilyGender."+this.b}}
C.hV.prototype={
aj(){var w=this
return A.I(["id",w.a,"name",w.b,"gender",C.hB7(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aG4(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hV(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.am4.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kT.prototype={
gaqv(){var w=this.f
return new A.Y(w,new C.bSC(),A.U(w).k("Y<1>")).gI(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.bSB(),u),u.k("ak.E"))
return A.I(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.ii_(w.y),"games",w.z],x.N,x.z)},
wY(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kT(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bfo(d,e){var w=null
return this.wY(w,w,w,d,e,w,w,w,w)},
cPV(d,e,f,g,h,i,j){return this.wY(d,e,null,f,g,h,i,j,null)},
aG9(d,e){var w=null
return this.wY(w,w,w,w,d,w,w,e,w)},
cPX(d,e,f,g,h,i,j,k){return this.wY(d,e,null,f,g,h,i,j,k)},
cOq(d){var w=null
return this.wY(w,w,w,w,w,w,w,d,w)},
cOO(d){var w=null
return this.wY(w,w,w,w,w,w,w,w,d)},
bf1(d){var w=null
return this.wY(w,w,d,w,w,w,w,w,w)},
aFV(d){var w=null
return this.wY(w,w,w,w,w,d,w,w,w)},
cPs(d,e,f){var w=null
return this.wY(w,d,w,w,e,w,w,f,w)},
cOd(d){var w=null
return this.wY(w,w,w,d,w,w,w,w,w)},
cP_(d,e){var w=null
return this.wY(d,w,w,w,w,w,e,w,w)}}
C.cGx.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cGy.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aIF.prototype={}
C.baI.prototype={
ak(d){this.a=d.a
this.b=d.b},
cZ(d){var w=new C.baI()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b2(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.baH.prototype={
gwQ(){return!0},
gGx(){return this.z.b<this.b.length},
aWp(d){switch(0){case 0:return d.a.c}},
aW5(d){switch(0){case 0:return d.a.d}},
bW0(d,e){switch(0){case 0:return new A.hO(d,e)}},
bVo(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hf(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iO(0,0,B.o.D(0,b5.a,b5.b),B.o.D(0,b5.c,b5.d))
return}w=A.Ib(b4)
switch(0){case 0:v=b5.b
u=new A.kP(0,v,0,1/0)
t=w===B.Vj
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fP(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.J)(q),++h){g=q[h]
g.hf(b4,u,!0)
f=b1.aWp(g)
f.toString
e=b1.aW5(g)
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
switch(0){case 0:q=b5.cA(new A.hO(m,l))
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
for(q=B.d.fP(b2,a2),f=q.length,h=0;h<q.length;q.length===f||(0,A.J)(q),++h){g=q[h]
if(r.h(0,g)!==a4)break;++a2
a8=b1.aWp(g)
e=b1.aW5(g)
e.toString
a9=b1.bVo(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bW0(a6,a3+a9)
b0=g.a
g.a=new A.iO(e.a,e.b,b0.c,b0.d)
if(t)a6-=o
else{a8.toString
a6+=a8+o}}a3-=n
a3=a3
b3.b=a2}},
fW(d){var w,v,u,t,s,r=this
r.lA(d)
w=d.b
w.it()
v=A.ds()
u=r.a
v.ej(u.a,u.b,0,1)
w.pm(0,v)
for(u=r.z,u=B.d.dq(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fW(d)
w.ny(0)},
H1(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
it(){return this.z}}
C.byk.prototype={}
var z=a.updateTypes(["aB<~>()","P(hV)","~()","P(kT)","P(nw)","a8<n,@>(kT)","G(kT,kT)","G(hV,hV)","n(hV)","kT(a8<@,@>)","P(lC)","nw(a8<@,@>)","a8<n,@>(nw)","P(uR)","uR()","G(hV)","ai<hV>()","P(zE)","a0a(Z)","n?(hV)","eI<n?>(hV)","aB<~>(lC)","P(rn)","a8<n,@>(hV)","hV(a8<@,@>)","G(lC,lC)","P(afR)","~(bd)","v(oG)","G(G,a9X)","P(qG<G>)","~(qG<G>)","TW(Z)","P(ML)","P(uQ)","~(hV)","n(n)","Wg(Z)","TV(Z)","aee(Z)","a_6(Z)","hV(hV)","cL(bB<n,GB>)","cL(KU)","a_A(Z)","G?(hV)","hV()","P(KU)","D(hV)","~(Ir)","a_w(Z)","v(Ir,n,a_)","P(afK)","bB<n,ai<a8<n,@>>>(n,ai<nw>)","a_y(Z)","+count,id,name(G,n,n)(kT)","n(kT)","a0u(Z)","a0v(Z)","P(lV)","lV()","ZF(Z)","a2h(Z)","a_8(Z)","a_7(Z)","~(G)","~(n,lr?)","v(rn)","aez(Z)","~(mi)","aB<~>([n?])","F(F,lC)","v(lC)","F(F,rn)","a8<n,@>(rn)","rn(a8<@,@>)","ai<lr>()","uQ()","n(V)","lC(a8<@,@>)","cr(Iq)","n(lC)","a8<n,@>(lC)","G(nw,nw)","kT(a8<n,@>)","kT(kT)"])
C.fOs.prototype={
$1(d){return d.a+" "+d.b},
$S:129}
C.fOr.prototype={
boG(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.rf(s,d,B.hY,"book",E.GB),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.LT(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.boG(d)},
$S:303}
C.fOt.prototype={
$1(d){return d.b},
$S:129}
C.fY0.prototype={
$1(d){var w=null
return A.eO(w,B.L,new H.Qn(this.a,this.b,w),w,w,0,B.a0e,B.d7,w,w,w)},
$S:48}
C.fBz.prototype={
$1(d){return d!=null},
$S:216}
C.fBA.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:216}
C.fBF.prototype={
$1(d){if(this.a)return new A.o(d.a*520,d.b*160)
return d},
$S:170}
C.fMb.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.ha(w,B.tq,w,w,w,w,w,w,w,B.dD,w,w,10.5,w,B.eB,w,!0,w,w,w,w),w),u=f?B.eB:B.wq
return new A.oa(D.bB0,A.aaL(A.a([new A.fV(130,w,v),new A.zD(1,B.Hc,A.fc(e,w,w,w,A.ha(w,g==null?D.eu_:g,w,w,w,w,w,w,w,B.dD,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.yp,B.lT))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1961}
C.fMa.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vZ(999)
f=A.xC(A.lQ(h,A.fc("Cashier",h,h,h,A.ha(h,D.Am,h,h,h,h,h,h,h,B.dD,h,h,10,h,B.eB,h,!0,h,h,h,h),h),h,new A.kQ(D.etR,h,f,B.i1,h),h,h,D.bBw,h))
w=A.xC(A.fc("Debt receipt",h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dD,h,h,22,h,B.eB,h,!0,h,h,h,h),h))
v=A.xC(A.fc(C.xl(new A.V(Date.now(),0,!1),!0),h,h,h,D.aaT,h))
u=A.vZ(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dD,h,h,14,h,B.eB,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.aaT,h)
q=A.vZ(10)
p=x.Z
u=A.lQ(h,A.zw(A.a([s,new A.fV(h,2,h),r,new A.fV(h,10,h),A.lQ(h,A.zw(A.a([A.fc("Amount owed",h,h,h,D.aaT,h),new A.fV(h,2,h),A.fc(A.Bq(t.c),h,h,h,A.ha(h,D.Am,h,h,h,h,h,h,h,B.dD,h,h,20,h,B.eB,h,!0,h,h,h,h),h)],p),B.rL,B.lT),h,new A.kQ(B.pJ,h,q,B.i1,h),h,h,D.bAH,1/0)],p),B.rL,B.lT),h,new A.kQ(E.aMx,h,u,B.i1,h),h,h,D.bCD,1/0)
q=new A.nT(D.etU,0.9,B.la)
r=A.vZ(12)
s=i.c
o=s.$2("Original due",C.xl(t.r,!1))
n=s.$2("Current due",C.xl(t.f,!1))
m=i.d
l=new A.nT(m,1.1,B.la)
k=A.vZ(8)
j=i.a
k=A.a([o,n,new A.fV(h,6,h),A.lQ(h,A.xC(A.fc(t.gaNj(),h,h,h,A.ha(h,m,h,h,h,h,h,h,h,B.dD,h,h,11,h,B.eB,h,!0,0.5,h,h,h),h)),h,new A.kQ(h,new A.pZ(l,l,l,l),k,B.i1,h),h,h,D.bBE,1/0),new A.fV(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Am))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Am))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.ha(h,B.tq,h,h,h,h,h,h,h,B.dD,h,h,10.5,h,B.eB,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,Tu>")
o=A.C(new A.N(o,new C.fM9(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fV(h,4,h),n,new A.fV(h,6,h),new C.baH(5,5,new C.baI(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fV(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fV(h,8,h),w,new A.fV(h,3,h),v,new A.fV(h,16,h),u,new A.fV(h,10,h),A.lQ(h,A.zw(k,B.yp,B.lT),h,new A.kQ(h,new A.pZ(q,q,q,q),r,B.i1,h),h,h,B.alw,1/0)],p)
w=j.a
if(w!=null){v=new A.nT(B.JI,1,B.la)
B.d.v(f,A.a([new A.fV(h,16,h),A.fc("Debtor signature",h,h,h,A.ha(h,B.tq,h,h,h,h,h,h,h,B.dD,h,h,10,h,B.eB,h,!0,h,h,h,h),h),new A.fV(h,6,h),A.lQ(h,new A.IL(w,B.XF,h,h),h,new A.kQ(h,new A.pZ(v,v,v,v),A.vZ(6),B.i1,h),82,h,B.Or,1/0)],p))}f.push(new A.fV(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fpr,h))
f.push(new A.fV(h,18,h))
f.push(A.xC(A.fc("NGMY.ORG",h,h,h,A.ha(h,D.Am,h,h,h,h,h,h,h,B.dD,h,h,14,h,B.eB,h,!0,1.8,h,h,h),h)))
return f},
$S:408}
C.fM9.prototype={
$1(d){var w=null,v=new A.nT(D.JJ,0.7,B.la),u=A.vZ(999)
return A.lQ(w,A.fc(C.xl(d,!1),w,w,w,A.ha(w,D.JJ,w,w,w,w,w,w,w,B.dD,w,w,9.5,w,B.eB,w,!0,w,w,w,w),w),w,new A.kQ(w,new A.pZ(v,v,v,v),u,B.i1,w),w,w,D.bH4,w)},
$S:1962}
C.c8m.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.m(999),t=A.L(B.bC.j(0.28),B.r,1)
return A.q(w,A.d(C.xl(d,!1),w,w,w,w,w,w,D.fwu,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.eI,w,w,w)},
$S:1963}
C.fYx.prototype={
$1(d){var w=null,v=A.aI(d,B.c1,x.w).w,u=A.m(26),t=A.aG(w,w,w,w,D.c_r,w,w,w,new C.fYu(d),w,w,w,w,w,B.cf),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eO(w,B.L,new A.cS(new A.aY(0,380,0,v.a.b*0.9),A.aJ(!1,B.a3,!0,u,new A.D(B.a02,A.x(A.a([new A.bM(B.aa,w,w,t,w),new A.dq(1,B.cr,A.ci(A.x(A.a([new A.em(new C.b_H(r,w),s),B.X,A.A(A.a([A.E(A.es(B.zy,D.fYC,new C.fYv(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.fg,w,new A.b9(A.m(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dg(B.a3w,w,D.fV_,new C.fYw(r,d),A.bo(B.b1,w,w,w,B.c,w,B.fg,w,new A.b9(A.m(14),B.a1),w,w,w)),1)],p),B.l,w,B.e,B.j,0,w,w)],p),B.l,w,B.e,B.Q,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.l,w,B.e,B.Q,0,B.p),w),B.f,B.as,0,w,w,w,w,w,B.aj),w),w,w,0,As.a0r,B.d7,w,w,w)},
$S:48}
C.fYu.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.fYv.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.aq$.x.h(0,t.a)
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
p=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aC(o,0,32)
w=5
return A.b(A.to(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYw.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fSN(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.M(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYp.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eO(w,B.as,A.x(A.a([new A.D(D.bCr,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.nh,w,w,w),1),A.aG(w,w,w,w,B.lq,w,w,w,new C.fYn(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.j,0,w,w),w),new A.dq(1,B.cr,new A.D(B.f3,A.by(A.m(14),A.fR(t,B.A,w,w,B.cj,B.dB,!1,w,!1,w,w),B.aq),w),w),new A.D(B.O3,new A.a6(1/0,w,A.dg(B.oE,w,D.aWM,new C.fYo(t,this.c,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w),w)],u),B.l,w,B.e,B.Q,0,B.p),w,w,w,B.Oi,B.d7,w,new A.b9(v,B.a1),w)},
$S:48}
C.fYn.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.fYo.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.to(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fYB.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eO(w,B.as,new A.D(D.bCz,A.x(A.a([A.A(A.a([D.bIg,A.aG(w,w,w,w,B.lq,w,w,w,new C.fYz(d),w,w,w,w,w,w)],u),B.l,w,B.e,B.j,0,w,w),B.U,new A.em(A.by(A.m(14),A.q(w,A.b4(w,w,w,new C.bcU(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a6(1/0,w,A.dg(B.oE,w,D.aWM,new C.fYA(t,s,d),A.bo(B.b1,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],u),B.l,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(v,B.a1),w)},
$S:48}
C.fYz.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.fYA.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.aq$.x.h(0,t.a)
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
q=A.af("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aC(p,0,32)
r=J.eT(B.dN.gaU(s))
w=5
return A.b(A.to(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.M(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fGp.prototype={
$1(d){return d.a===this.a},
$S:243}
C.dQw.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dQh.prototype={
bnU(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.ec:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dQk(s,q,e),p,!0,!0,!1,B.K_,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dQl(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnU(d,e)},
$S:1964}
C.dQk.prototype={
$1(d){var w,v=null,u=this.c===B.wZ,t=u?D.dsm:D.dnZ
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aP:B.as,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bm(!0,new A.D(O.am1,A.x(A.a([u,B.ay,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bq,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.im(!0,v,v,B.y,D.ffW,new C.dQj(this.a,w,t,d),t.length,v,B.dW,B.ah,!0)],x.p),B.al,v,B.e,B.Q,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQj.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cG.j(0.14)
else w=t.b.a.d.a?B.T:B.aP
v=A.m(14)
if(q)u=B.cG
else u=(t.b.a.d.a?B.bu:B.bq).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aP(!1,p,!0,A.q(B.A,C.b_G(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dQi(t.d,r),s,s,s,s,s,s,s)},
$S:179}
C.dQi.prototype={
$0(){A.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.dQl.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dQf.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:92}
C.dQg.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cJ(B.cw,e,v)
return new A.d0(e,!1,A.it(B.A,A.at(A.aJ(!1,B.a3,!0,v,new A.dY(new C.dQe(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bg(t,new A.br(0.96,1,u),u.k("bg<bO.T>"))),v)},
$S:34}
C.dQe.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aI(d,B.c1,x.w).w,i=l.b,h=i.a.d.a,g=h?B.ec:B.c,f=A.m(14),e=A.L((h?B.bu:B.bq).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aP(!1,v,!0,new A.D(B.eA,A.X(B.cz,i.a.d.a?B.bu:B.bq,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQ_(d),k,k,k,k,k,k,k)],u),B.l,k,B.e,B.j,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aVf("Name")
r=l.a
q=r.d==null?k:new C.dQ0(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bp:B.m7
n=A.L(B.cG.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Z,h,k,!0,B.t,k,A.aO(),w,k,k,k,k,k,2,s.bfh(new A.D(B.fB,A.aP(!1,p,!0,A.q(B.A,C.b_G(m==null?"\ud83d\udc64":A.fN_(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a7),k,34,k,B.cm,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l6,k,B.aaH,k,k)
v=A.a([v,B.af,t,B.U,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bq,k,k,k,k,k,k,k,k,11.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.am,A.A(A.a([A.E(i.aVW("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dQ1(r,a0),r.d===B.wZ),1),B.ae,A.E(i.aVW("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dQ6(r,a0),r.d===B.a7n),1)],u),B.l,k,B.e,B.j,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.U,new A.bM(B.a6,k,k,A.ho(D.bYJ,D.fWU,new C.dQ7(r,l.e,a0),A.fu(k,k,k,k,k,k,k,k,k,k,k,B.cG,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cf)),k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uU(A.af("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.f,k,k,k,k,k,2,i.aVg("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.e9,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.X)
t=i.a.d.a
s=t?B.T:B.aP
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.L((t?B.bu:B.bq).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xl(r.a,!1)
v.push(A.aJ(!1,B.a3,!0,q,A.aP(!1,p,!0,A.q(k,A.A(A.a([A.E(A.x(A.a([t,B.bH,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.j,0,B.p),1),D.bVq],u),B.l,k,B.e,B.j,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.n),k,k,k,k,B.bi,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dQ8(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.U,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aO(),l.r,k,k,k,k,k,2,i.aVf("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aP:B.as,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b3q(r.b.length!==0,B.n2,new C.dQ9(r,i,a0),new C.dQa(r,a0),"Upload from gallery","ID photo"))
v.push(i.b3q(r.c.length!==0,D.bOK,new C.dQb(r,i,d,a0),new C.dQc(r,a0),"Camera or gallery","Selfie"))
v.push(B.U)
t=l.w
v.push(new Ar.a8A("Signature (optional)",t,new C.dQd(a0),new C.dQ2(a0,t),new C.dQ3(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bq
s=(i?B.bu:B.bq).j(0.28)
s=A.E(A.dU(E.aWF,new C.dQ4(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.qz,k,new A.b9(A.m(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bo(B.cG,k,k,k,B.c,k,B.qz,k,new A.b9(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vz,k,k,k),k,new C.dQ5(r,w,d),t),1)],u),B.l,k,B.e,B.j,0,k,k))
return A.q(k,A.ci(A.x(v,B.al,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.n),k,k,k,B.rU,B.jo,k,k,360)},
$S:172}
C.dQ_.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.dQ0.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQ1.prototype={
$0(){return this.b.$1(new C.dPZ(this.a))},
$S:0}
C.dPZ.prototype={
$0(){var w=this.a
w.d=B.wZ
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQ6.prototype={
$0(){return this.b.$1(new C.dPY(this.a))},
$S:0}
C.dPY.prototype={
$0(){var w=this.a
w.d=B.a7n
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dQ7.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dQ8.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xp(null,u.b,A.bZ(2020,1,1,0,0,0,0,0),null,s,A.bZ(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dPX(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPX.prototype={
$0(){var w=this.b
return this.a.a=A.bZ(w.gcl(),w.gcg(),w.gcz(),0,0,0,0,0)},
$S:0}
C.dQ9.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q3(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dPW(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPW.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dQa.prototype={
$0(){return this.b.$1(new C.dPV(this.a))},
$S:0}
C.dPV.prototype={
$0(){return this.a.b=""},
$S:0}
C.dQb.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.ec:B.c
w=3
return A.b(A.bT(q,null,new C.dPT(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q3(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dPU(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPT.prototype={
$1(d){var w=null
return A.bm(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.arq,w,w,w,w,new C.dPN(d),!1,w,w,w,w,w,w,w,D.fMU,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.aro,w,w,w,w,new C.dPO(d),!1,w,w,w,w,w,w,w,D.fU0,w,w,w)],x.p),B.l,w,B.e,B.Q,0,B.p),!0,!1,B.ag,!0,!0)},
$S:25}
C.dPN.prototype={
$0(){A.a7(this.a,!1).O("camera")
return null},
$S:0}
C.dPO.prototype={
$0(){A.a7(this.a,!1).O("gallery")
return null},
$S:0}
C.dPU.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dQc.prototype={
$0(){return this.b.$1(new C.dPS(this.a))},
$S:0}
C.dPS.prototype={
$0(){return this.a.c=""},
$S:0}
C.dQd.prototype={
$0(){return this.a.$1(new C.dPR())},
$S:0}
C.dPR.prototype={
$0(){},
$S:0}
C.dQ2.prototype={
$0(){return this.a.$1(new C.dPQ(this.b))},
$S:0}
C.dPQ.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dQ3.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aiN(u.a,null,null,new C.dPP(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dPP.prototype={
$4(d,e,f,g){this.a.$1(new C.dPM(this.b,d))},
$S:460}
C.dPM.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dQ4.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.dQ5.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.M(x.q).f.U(D.fl_)
return}if(w.a.d==null){w.c.M(x.q).f.U(D.fhT)
return}A.a7(w.c,!1).O(!0)},
$S:0}
C.dQz.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:92}
C.dQA.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.ec:B.c,n=A.m(14),m=A.L((p?B.bu:B.bq).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aP:B.as,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bq(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bq,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zH(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zH(r).length>0?B.bC:B.cG,r,r,r,r,r,r,r,r,12,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bq
t=(q?B.bu:B.bq).j(0.28)
s=x.p
return new A.d0(e,!1,A.at(A.aJ(!1,B.a3,!0,r,A.q(r,A.x(A.a([p,B.U,v,u,B.aB,A.A(A.a([A.E(A.dU(B.o_,new C.dQx(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.k1,r,new A.b9(A.m(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bI(D.fUr,r,new C.dQy(d),A.bo(B.cG,r,r,r,B.c,r,B.k1,r,new A.b9(A.m(10),B.a1),r,r,r)),1)],s),B.l,r,B.e,B.j,0,r,r)],s),B.al,r,B.e,B.Q,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.n),r,r,r,B.Cl,P.Of,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dQx.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.dQy.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.dQt.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dQu(r),p=r.a.d.a,o=p?B.ec:B.c,n=A.m(14),m=A.L((p?B.bu:B.bq).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aP:B.as,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bq(l.c),s,s,s,s,s,s,D.fy4,s,s,s)],p),B.l,s,B.e,B.j,0,s,s)
w=A.iK((r.a.d.a?B.bu:B.bq).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a29,"View receipt",new C.dQm(r,d,l))
u=l.x!=null
t=u?B.pw:B.qI
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bCw,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dQn(r,d,l)),q.$3$icon$label$onTap(B.Cy,"Edit",new C.dQo(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.n2,"View / download ID",new C.dQp(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bOJ,"View / download selfie",new C.dQq(r,d,l)))
if(l.gaHQ())p.push(q.$3$icon$label$onTap(Ad.a3m,"View / download signature",new C.dQr(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.ei,"Delete",new C.dQs(r,d,l)))
p.push(B.ay)
return A.bm(!0,new A.D(B.uw,A.q(s,A.x(p,B.l,s,B.e,B.Q,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:25}
C.dQu.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aP:B.as
else w=d
return A.aP(!1,v,!0,new A.D(B.eY,A.A(A.a([A.X(e,w,v,v,v,20),B.be,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.l,v,B.e,B.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1965}
C.dQm.prototype={
$0(){A.a7(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fYt(w,this.c)},
$S:0}
C.dQn.prototype={
$0(){A.a7(this.b,!1).O(null)
this.a.SU(this.c)},
$S:0}
C.dQo.prototype={
$0(){A.a7(this.b,!1).O(null)
this.a.DF(this.c)},
$S:0}
C.dQp.prototype={
$0(){var w,v,u
A.a7(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bG6(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dQq.prototype={
$0(){var w,v,u
A.a7(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bG6(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dQr.prototype={
$0(){A.a7(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fYy(w,this.c)},
$S:0}
C.dQs.prototype={
$0(){A.a7(this.b,!1).O(null)
this.a.Q2(0,this.c)},
$S:0}
C.dQB.prototype={
$1(d){return d.x==null},
$S:243}
C.dQC.prototype={
$1(d){return d.x!=null},
$S:243}
C.dQD.prototype={
$2(d,e){return d+e.c},
$S:1966}
C.dQE.prototype={
$0(){return this.a.bDT()},
$S:0}
C.dQv.prototype={
$0(){return this.a.agi(this.b)},
$S:0}
C.fHe.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fHf.prototype={
$0(){return B.d.gH(D.a4G)},
$S:z+77}
C.dgc.prototype={
$0(){var w=this.a
return w.m(new C.dga(w,this.b))},
$S:0}
C.dga.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dgb.prototype={
$0(){},
$S:0}
C.dgd.prototype={
$0(){var w=this.a.gc2j()
A.a7(this.b,!1).O(w)
return null},
$S:0}
C.fJJ.prototype={
$1(d){return C.hlt(A.a3(d,x.N,x.z))},
$S:z+11}
C.fJK.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fJL.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fX3.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h4u.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fGg.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bRj.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eH(e,v)?v:null},
$S:1967}
C.fXF.prototype={
$1(d){var w=this
return new C.a_y(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dgS.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dgR(w,d))},
$S:z+80}
C.dgR.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgG.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cI(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dgD.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dge.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dgf.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dgH.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dgn.prototype={
$1(d){var w=null,v=A.S(d).ax.a===B.J,u=v?B.ec:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eg(A.a([A.bN(!1,B.dn,w,w,!0,w,w,w,new C.dgl(d),w,w),A.bI(B.xn,w,new C.dgm(d),A.bo(B.nr,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dgl.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.dgm.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.dgo.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.D(w.r-1,-1,999)},
$S:0}
C.dgE.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dgF.prototype={
$0(){return B.d.gH(D.zM)},
$S:z+14}
C.dgj.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz1(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.TV(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dgk.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgp.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_6(v,u,J.ad(w.d),null)},
$S:z+40}
C.dgq.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgQ.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aA(s,new C.ZO(r.y,r.gz1(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dgO(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bcg(v,e,w,u,t,r.gbUt(),C.hB6(r.y.Q),r.gz1(0),s)
w=t}return A.c9(q,new C.dgP(r,e),new A.D(B.a0j,w,s))},
$S:1968}
C.dgP.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvm(0)
w=t-(u==null?t:u)}else w=0
v=B.i.D(w,-1,0)
u=A.ds()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fL(v*3.141592653589793*0.5)
return A.fx(B.a6,A.da(e,B.i.D(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.dgO.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ0(B.qr,B.j1)},
$S:0}
C.dgA.prototype={
$0(){var w=this.a
return w.m(new C.dgz(w))},
$S:0}
C.dgz.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dgB.prototype={
$0(){var w=this.a.c
w.toString
A.a7(w,!1).O(null)
return null},
$S:0}
C.dgg.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.ko.j(0.5),r=x.p,q=A.a([D.fLt,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cq(p.d)?"Write this book":"Write a new book"
q.push(p.ZP(d,B.ed,w,J.cq(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZP(d,K.api,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cI(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cx,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kO.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cx,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kO.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZP(d,X.aqn,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZP(d,B.qP,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZP(d,B.qP,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eO(u,E.BP,A.bm(!0,new A.D(Ac.yK,A.x(q,B.E,u,B.e,B.Q,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,I.a0t,B.d7,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:48}
C.dgC.prototype={
$0(){A.a7(this.a,!1).O(this.b)
return null},
$S:0}
C.dgt.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cI(w.d)
return new C.a_A(v,J.cI(w.d),w.r+1,null)},
$S:z+44}
C.dgu.prototype={
$1(d){var w=null
return A.oL(!1,A.eg(w,w,w,E.BP,new A.k1(this.a,new C.dgs(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:337}
C.dgs.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aam,B.oV,A.E(A.d(e,w,w,w,w,w,w,B.jx,w,w,w),1)],x.p),B.l,w,B.e,B.j,0,w,w)},
$S:752}
C.dgv.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dgw.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:189}
C.dgx.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgy.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bz(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Sy(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dgr(s,t))
w=4
return A.b(s.lg(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgr.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dgJ.prototype={
$1(d){var w=null
return A.oL(!1,A.eg(w,w,w,E.BP,new A.k1(this.a,new C.dgI(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:337}
C.dgI.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aam,B.oV,A.E(A.d(e,w,w,w,w,w,w,B.jx,w,w,w),1)],x.p),B.l,w,B.e,B.j,0,w,w)},
$S:752}
C.dgK.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dgL.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:189}
C.dgM.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:189}
C.dgN.prototype={
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
C.dgh.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bkQ(B.qr,A4.NQ)},
$S:0}
C.dgi.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aJ0(B.qr,A4.NQ)},
$S:0}
C.diE.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.diF.prototype={
$1(d){var w=this.a
return w.m(new C.diD(w))},
$S:9}
C.diD.prototype={
$0(){return this.a.e="page"},
$S:0}
C.diG.prototype={
$1(d){var w=this.a
return w.m(new C.diC(w))},
$S:9}
C.diC.prototype={
$0(){return this.a.e="book"},
$S:0}
C.diH.prototype={
$1(d){var w=this.a
return w.m(new C.diB(w))},
$S:9}
C.diB.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.diI.prototype={
$0(){var w=this.a
return w.m(new C.diA(w,this.b))},
$S:0}
C.diA.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.diJ.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2B()
A.a7(this.b,!1).O(new A.br8(w,v))},
$S:0}
C.dh6.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dh5.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_w(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dha.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dh9.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.baR(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hj,v,v,v)
return A.eg(A.a([A.bN(!1,B.dn,v,v,!0,v,v,v,new C.dh7(d),v,v),A.bI(B.xn,v,new C.dh8(d),A.bo(B.nr,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.BP,w,v,v,v,v,D.fKe,v)},
$S:18}
C.dh7.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.dh8.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.dhb.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.dhc.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a6(s,t,w[u],t))
return A.ci(A.bV(B.bG,r,B.bs,t,18,14),B.t,t,B.y,t,D.bDv,t,t,B.ah)},
$S:314}
C.dh4.prototype={
$0(){return this.a.QR(0,this.b)},
$S:0}
C.dh3.prototype={
$0(){return this.a.Qi(0,this.b)},
$S:0}
C.cPu.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cPv.prototype={
$0(){return B.d.gH(D.zM)},
$S:z+14}
C.cPw.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bR(0,new A.D(d,A.c3(w,new A.p(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bj),w),0,0,0)},
$S:1970}
C.d83.prototype={
$1(d){return this.a.m(new C.d82(this.b,this.c))},
$S:9}
C.d82.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d8s.prototype={
$1(d){return this.a.m(new C.d8f())},
$S:2}
C.d8f.prototype={
$0(){},
$S:0}
C.d8t.prototype={
$1(d){return this.a.m(new C.d8e())},
$S:2}
C.d8e.prototype={
$0(){},
$S:0}
C.d8u.prototype={
$0(){var w=this.a
return w.m(new C.d8d(w,this.b))},
$S:0}
C.d8d.prototype={
$0(){var w=this.a
return w.d=w.gop().Gd(this.b.a)},
$S:0}
C.d8v.prototype={
$0(){var w=this.a
return w.m(new C.d8c(w,this.b))},
$S:0}
C.d8c.prototype={
$0(){var w=this.a
return w.d=w.gop().cNK(this.b)},
$S:0}
C.d8w.prototype={
$1(d){return this.a.m(new C.d8b())},
$S:2}
C.d8b.prototype={
$0(){},
$S:0}
C.d8x.prototype={
$0(){var w=this.a
return w.m(new C.d8a(w,this.b))},
$S:0}
C.d8a.prototype={
$0(){var w=this.a
return w.d=w.gop().cNP(this.b.a)},
$S:0}
C.d8y.prototype={
$1(d){var w=this.a
return w.m(new C.d8n(w,d))},
$S:6}
C.d8n.prototype={
$0(){var w=this.a
return w.d=w.gop().cOJ(this.b)},
$S:0}
C.d8z.prototype={
$1(d){var w=this.a
return w.d=w.gop().aFY(d)},
$S:2}
C.d8A.prototype={
$1(d){var w=this.a
return w.d=w.gop().cNS(d)},
$S:2}
C.d8C.prototype={
$1(d){var w=this.a
return w.d=w.gop().cOH(d)},
$S:2}
C.d8D.prototype={
$1(d){var w=this.a
return w.m(new C.d8m(w,d))},
$S:9}
C.d8m.prototype={
$0(){var w=this.a
return w.d=w.gop().cOy(this.b)},
$S:0}
C.d8E.prototype={
$0(){var w=this.a,v=w.gop(),u=B.a.i(w.gz1(0).a.a),t=B.a.i(w.gaD9().a.a)
u=v.bfy(B.a.i(w.gasO().a.a),t,u)
A.a7(this.b,!1).O(u)
return null},
$S:0}
C.bRt.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bRn.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRm(w,d))},
$S:11}
C.bRm.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bRw.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bRo.prototype={
$0(){var w=this.a
w.Q=D.b0M
w.adX(1)
w.r.x=null},
$S:0}
C.bRp.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b0M)return
w=new A.e1()
w.cY(u.as*13+u.a.e)
v=u.r
v.Q=3+w.az(3)
v.z=D.d3i[w.az(6)]
v.as=u.f.a+2.6},
$S:0}
C.bRs.prototype={
$0(){var w=this.a
w.Q=D.acZ
w.adX(2)
w.r.z=null},
$S:0}
C.bRr.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hBA
t.adX(3)
w=t.r
w.d=s
w.x="I say: "+t.gCu()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.az(3)
w.z=s?D.d9L[v.az(4)]:D.duS[v.az(3)]
w.as=t.a+2.8},
$S:0}
C.bRu.prototype={
$0(){var w=this.a
w.Q=D.b0N
w.CW=this.b
w.cy=1
w.adX(4)
w.r.f=w.f.a+5},
$S:0}
C.bRv.prototype={
$0(){},
$S:0}
C.bRq.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hV()},
$S:0}
C.bRk.prototype={
$0(){return this.a.L1(this.b)},
$S:0}
C.bRl.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hV()},
$S:0}
C.bT_.prototype={
$0(){var w=this
return w.a.Ra(w.b,0,w.c,w.d)},
$S:0}
C.bT0.prototype={
$0(){var w=this
return w.a.Ra(w.b,3,w.c,w.d)},
$S:0}
C.bT1.prototype={
$0(){var w=this
return w.a.Ra(w.b,1,w.c,w.d)},
$S:0}
C.bT2.prototype={
$0(){var w=this
return w.a.bTU(w.b,w.c,w.d)},
$S:0}
C.bT3.prototype={
$0(){var w=this
return w.a.Ra(w.b,4,w.c,w.d)},
$S:0}
C.bT4.prototype={
$0(){var w=this
return w.a.Ra(w.b,2,w.c,w.d)},
$S:0}
C.bT5.prototype={
$0(){var w=this
return w.a.Ra(w.b,5,w.c,w.d)},
$S:0}
C.bT6.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:753}
C.bSZ.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a5Q[d],p=q.a.a4(0,new A.o(0,-q.b*1.2*124)),o=A.fq(r,B.cs,r,3,r,A.cP(r,r,r,r,r,r,r,r,r,D.fp7,e),B.a5,B.bX,r,B.dz,B.bY)
o.o5(130)
w=o.b.a.c
w=p.aJ(0,new A.o(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bl(A.bs(w,v.gba(v)+12,u+18),B.i_)
u=this.a
v=t.eQ(B.dG)
w=$.Q()
s=A.K()
s.r=B.ds.gp(0)
u.am(v,s)
s=A.K()
s.r=D.qi.gp(0)
u.am(t,s)
w=new A.aF(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.E(new A.aZ(s-5,v))
w.E(new A.aq(s+1,p.b+1))
w.E(new A.aq(s+6,v))
w.E(new A.bv())
v=A.K()
v.r=D.qi.gp(0)
u.af(w,v)
o.a5(u,new A.o(t.a+9,t.b+6))},
$S:754}
C.bRK.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bRL.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amC(d),w.amC(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.fup.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h4l.prototype={
$2(d,e){if(e!=null)J.c5(this.a.c4(0,d,new C.h4m()),e)},
$S:z+66}
C.h4m.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h4n.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4o.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h4p.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h4k(this.c,d))},
$S:3}
C.h4k.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h4q.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4r.prototype={
$1(d){return d!==this.a},
$S:3}
C.h4s.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h4j(this.c,d))},
$S:3}
C.h4j.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fHQ.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fW3.prototype={
$1(d){return d.Q},
$S:z+15}
C.fW4.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fDG.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fKE.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bMx.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h4L.prototype={
$2(d,e){return B.o.aS(C.hxq(d),C.hxq(e))},
$S:208}
C.h4M.prototype={
$1(d){return d!==this.a},
$S:3}
C.fWA.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bKI.prototype={
$0(){var w=this.a
w.ch=!0
w.b95()},
$S:0}
C.bKD.prototype={
$0(){},
$S:0}
C.bKJ.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bKB.prototype={
$0(){},
$S:0}
C.bKC.prototype={
$0(){},
$S:0}
C.bKH.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b4(u,u,u,new C.bcW(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ap(u,A.q(u,A.d(t.dy,u,u,u,u,u,u,D.fwG,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.n),u,u,u,u,B.bV,u,u,u),u,u,14,14,6,u))}return A.aA(B.c5,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bKE(t,e),u,u,u,u,u,u,u,new C.bKF(t,e),u,u,u,u,u,u,u,u,u,new C.bKG(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bKE.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKG.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:24}
C.bKF.prototype={
$1(d){return this.a.db=B.i.D(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKA.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hV()},
$S:0}
C.cqz.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cqA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cqy(w))},
$S:0}
C.cqy.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cqB.prototype={
$0(){var w=this,v=w.a
v.gj2()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cqC.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cqD.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cqE.prototype={
$0(){},
$S:0}
C.cqF.prototype={
$0(){var w=this.a
w.z=w.Xn(++w.e)
w.Q=A.c_(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cqv.prototype={
$0(){return A.a7(this.a,!1).hV()},
$S:0}
C.cqw.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj2().length,e=i/2,d=new C.cqx(i,f,h),a0=g.as,a1=A.a4(a0).k("b7<2>")
a0=A.C(new A.b7(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c9(new A.h6(a0),new C.cqq(g,new A.o(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj2().length!==0&&!B.d.q(g.gj2(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.QF(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cL(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new S.MT(new C.cqr(g,u),new C.cqs(g,u),new C.cqt(g,u),j,j,new A.bJ("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fh:B.b5,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj2().length!==0&&!B.d.q(g.gj2(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.at(C.uv(a0,g.gqm(g),B.cO,B.jq,D.fy),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xn(0):s).length))break
if(!B.d.q(g.gj2(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xn(0)
o=s}else o=s
n=s[u]
n=A.ed(B.A,new C.QF(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xn(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r3(new A.br(0,p,t),new C.cqu(),new S.Em(u,j,new C.QF(l.b,k,62,!1,j),new A.kH(0.25,new C.QF(m.b,k,62,!1,j),j),new A.ka(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.I,S.hAZ(),!0,!0,j,j,j,j,j,j,!1,B.iL,j,new A.bJ("chip-"+r,a0),w),B.b4,B.iu,j,new A.bJ("t"+r+"-"+q,a0),v))}++u}g=A.bV(B.fO,a1,B.bs,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:65}
C.cqx.prototype={
$1(d){return new A.o(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:741}
C.cqq.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj2().length!==0&&!B.d.q(t.gj2(),-1)
return A.b4(p,p,p,new C.bcp(q.b,o,v,w,p),B.az)},
$S:59}
C.cqs.prototype={
$1(d){return this.a.gj2()[this.b]===-1},
$S:z+30}
C.cqt.prototype={
$1(d){return this.a.cRC(this.b,d.a)},
$S:z+31}
C.cqr.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj2()[t]!==-1,r=A.m(18),q=e.length!==0?B.cO.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cO:B.jY,B.r,2)
u=s?A.lB(new C.cqp(),A.at(new C.QF(u.gaFq()[u.gj2()[t]].b,u.gaFq()[u.gj2()[t]].a,62,!1,v),v,v,v),B.lb,B.iu,v,v,new A.br(0.3,1,x.X),x.i):D.bbO
return A.cT(v,u,v,v,B.b4,new A.p(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1973}
C.cqp.prototype={
$3(d,e,f){return A.ed(B.A,f,e,null,null)},
$S:114}
C.cqu.prototype={
$3(d,e,f){return A.dP(f,new A.o(Math.sin(e*24)*8*(1-e),0))},
$S:114}
C.cQy.prototype={
$1(d){return d>=1},
$S:117}
C.cFv.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cFu(w))},
$S:11}
C.cFu.prototype={
$0(){return this.a.f++},
$S:0}
C.cFD.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cFE.prototype={
$0(){var w=this.a,v=this.b
w.z.J(0,v)
w.Q=v},
$S:0}
C.cFF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFC(w))},
$S:0}
C.cFC.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cFG.prototype={
$0(){return this.a.f++},
$S:0}
C.cFH.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cFI.prototype={
$0(){},
$S:0}
C.cFJ.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cFx.prototype={
$0(){return A.a7(this.a,!1).hV()},
$S:0}
C.cFy.prototype={
$3(d,e,f){var w=null
return A.lB(new C.cFw(this.a,e),w,B.b4,B.hF,w,w,new A.br(w,this.b,x.X),x.i)},
$S:1974}
C.cFw.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cO.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.I,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.hU(new A.BJ(new A.uP(B.w.j(e),B.LP,v,B.Y8),H.bXb(A.b4(v,v,v,new C.aBw(u.gkS()[u.e].c,u.as,v),B.az),new A.Er(w,w,B.W6)),v),B.aq),B.f,v,v,new A.p(v,v,v,v,t,v,B.a7),v,190,v,v,v,v,v,190)},
$S:1975}
C.cFz.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,14*(1-e))),e)},
$S:100}
C.cFA.prototype={
$3(d,e,f){return A.dP(f,new A.o(Math.sin(e*22)*8*(1-e),0))},
$S:114}
C.cFB.prototype={
$0(){return this.a.bqa(this.b)},
$S:0}
C.f6Y.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.an8$)
v.an8$=w
v.q8$.sp(0,w)
v.ar0(u)},
$S:7}
C.fh6.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bSv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSu())},
$S:0}
C.bSu.prototype={
$0(){},
$S:0}
C.bSs.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bSq.prototype={
$0(){},
$S:0}
C.bSr.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMK()
w=s+1>=r.length?3:5
break
case 3:q=C.bGm(p.gapR(0),0,r.length)
p.m(new C.bSn(p,q))
o=p
w=6
return A.b(C.BU(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BV(s.d,s.c.a,"school",p.gapR(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bSo())
w=4
break
case 5:p.m(new C.bSp(p))
p.gqu().VW(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bSn.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bSo.prototype={
$0(){},
$S:0}
C.bSp.prototype={
$0(){return this.a.x++},
$S:0}
C.bSt.prototype={
$0(){return this.a.L1(this.b)},
$S:0}
C.bSm.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hV()},
$S:0}
C.f6Z.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.o(t,s),q=v.b,p=v.d,o=p?C.hBc(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.E8
C.Sw(q,D.en3,0,0.2,-0.6,-0.2,null,w,D.elN,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a4(0,new A.o(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.Q()
p=A.K()
p.r=D.Gb.gp(0)
p.c=3
p.d=B.bw
q.ah(new A.o(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f7_.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Sw(this.a,D.em9,0,u,0.7,-0.5,null,null,D.JA,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f70.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Sw(this.a,D.enP,0,0,0.8,-0.5,null,null,D.JA,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f71.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Sw(w.b,D.emY,0,v,-0.8,-0.5,null,null,D.JA,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f72.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.o(34,-122+Math.sin(w*5)*5)
else v=v?D.en1:D.E8
C.Sw(p,D.emt,0,t,0,-0.6,null,v,D.JA,3,0,s,1.3,u,0,w,0)
q=q.cce(new A.o(222,455),9)
$.Q()
w=A.K()
w.r=B.cO.gp(0)
p.af(q,w)},
$S:0}
C.f73.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:753}
C.bS8.prototype={
$2(d,e){return d+e},
$S:61}
C.bSj.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bSk.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bSl.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj2()[u.b]=s
t.gj2()[u.d]=t.y
w=t.as
v=t.q8$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bSf.prototype={
$1(d){return d},
$S:94}
C.bSe.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.q8$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bSg.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bSh.prototype={
$0(){},
$S:0}
C.bSi.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FH(++s.f)
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
C.bSa.prototype={
$0(){return A.a7(this.a,!1).hV()},
$S:0}
C.bSb.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aS(w[d],w[e])},
$S:61}
C.bSc.prototype={
$2(d,e){var w=null,v=C.hcC(new A.av(A.aT(1/0,e.a,e.b),A.aT(1/0,e.c,e.d))),u=this.a
return A.aA(B.c5,new A.em(A.b4(w,w,w,new C.bjC(u,u.q8$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bS9(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bS9.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj2().length
u=B.o.D(B.i.bh((t.a-s.a)/r/450*v),0,v-1)
w.d1q(w.gj2()[u])}},
$S:24}
C.bSd.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:76}
C.drR.prototype={
$2(d,e){return 0},
$S:61}
C.bRV.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRU())},
$S:0}
C.bRU.prototype={
$0(){},
$S:0}
C.bRT.prototype={
$0(){},
$S:0}
C.bRN.prototype={
$0(){},
$S:0}
C.bRO.prototype={
$0(){},
$S:0}
C.bRS.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.B5},
$S:0}
C.bRR.prototype={
$1(d){var w=null,v=this.a.gqu(),u=A.d(d,w,w,w,w,w,w,D.aVc,w,w,w),t=v.gbmB(0)
return A.aA(B.c5,A.x(A.a([u,B.bH,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aVq,w,w,w)],x.p),B.E,w,B.e,B.j,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbsy(v),w,w,w,w,w,w,!1,B.a4)},
$S:139}
C.bRP.prototype={
$0(){return this.a.L1(this.b)},
$S:0}
C.bRQ.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hV()},
$S:0}
C.bRM.prototype={
$0(){return A.a7(this.a,!1).hV()},
$S:0}
C.e1J.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e1K.prototype={
$1(d){return this.a},
$S:39}
C.e1L.prototype={
$0(){var w=this.a
return w.d=w.gSV().bf1(this.b)},
$S:0}
C.e1H.prototype={
$1(d){return new C.TW(this.a,null)},
$S:z+32}
C.e1I.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e1G.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hj,w,w,w)
return A.eg(A.a([A.bN(!1,E.aWP,w,w,!0,w,w,w,new C.e1E(d),w,w),A.bN(!1,D.fRQ,w,w,!0,w,w,w,new C.e1F(d),w,w)],x.p),w,w,D.fy,v,w,w,w,w,D.fEn,w)},
$S:18}
C.e1E.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.e1F.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.e1D.prototype={
$0(){var w=null,v=this.a.c.M(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e1M.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.e1N.prototype={
$0(){var w=this.a,v=this.b,u=C.bE7(v,10,w.r,!1)
return w.ux(C.hlu(w.a.d,"kahoot",u,w.gb6D(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e1O.prototype={
$0(){var w=this.a
return w.ux(new C.alU(this.b,w.a.d,w.r,null))},
$S:0}
C.e1P.prototype={
$0(){var w=this.a
return w.ux(new C.ak6(this.b,w.a.d,w.r,null))},
$S:0}
C.e1S.prototype={
$0(){var w=this.a
return w.ux(new C.auQ(this.b,w.a.d,w.r,null))},
$S:0}
C.e1T.prototype={
$0(){var w=this.a
return w.ux(new C.ayN(this.b,w.a.d,w.r,null))},
$S:0}
C.e1U.prototype={
$0(){var w=this.a
return w.ux(new C.alX(this.b,w.a.d,w.r,null))},
$S:0}
C.e1V.prototype={
$0(){var w=this.a
return w.ux(new C.am0(this.b,w.a.d,w.r,null))},
$S:0}
C.e1W.prototype={
$0(){var w=this.a
return w.ux(new C.am2(this.b,w.a.d,w.r,null))},
$S:0}
C.e1X.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d1L()
return v.ux(C.hlu(v.a.d,"creator_"+u.a,w,v.gb6D(),"A game by the family",t,this.c.a))},
$S:0}
C.e1Y.prototype={
$0(){return this.a.OO(this.b)},
$S:0}
C.e1Z.prototype={
$0(){return this.a.XP(0,this.b)},
$S:0}
C.e1Q.prototype={
$0(){return this.a.OO(null)},
$S:0}
C.e1R.prototype={
$0(){return this.a.M(x.q).f.U(D.fhZ)},
$S:0}
C.bS6.prototype={
$0(){var w=this.a
w.d=D.b0a
w.z=3},
$S:0}
C.bS7.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPX()}else w.m(new C.bS5(w))},
$S:11}
C.bS5.prototype={
$0(){return this.a.z--},
$S:0}
C.bRX.prototype={
$0(){var w=this.a
w.d=D.acF
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bRY.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRW(w))
if(w.as<=0){d.a1(0)
w.b6z(-1)}},
$S:11}
C.bRW.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bS2.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.WL},
$S:0}
C.bS3.prototype={
$0(){return this.a.e++},
$S:0}
C.bS_.prototype={
$0(){var w=this.a
w.d=D.b0b
w.ay=this.b},
$S:0}
C.bS0.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bS4.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1976}
C.bS1.prototype={
$0(){return this.a.L1(this.b)},
$S:0}
C.bRZ.prototype={
$0(){var w=this.a.c
w.toString
return A.a7(w,!1).hV()},
$S:0}
C.bRx.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.au(new A.ba(s,B.b6,B.aQ),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.J)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b6,B.aQ),r))}return s},
$S:1977}
C.bRy.prototype={
$0(){return this.a.gD4().c.push(C.h6o(null,0,20,""))},
$S:0}
C.bRI.prototype={
$1(d){var w=null
return A.bt(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dk,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.VG,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:267}
C.bRH.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD4().c,m=this.b,l=n[m],k=o.cfg(l),j=B.c.j(0.06),i=A.m(18),h=A.L(B.aT,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KP,p,p,p),B.b3],g)
if(n.length>1)f.push(A.aG(p,p,p,p,B.arb,p,p,p,new C.bRC(o,m),p,p,p,p,p,p))
n=J.a5(k)
m=this.c
f=A.a([A.A(f,B.l,p,B.e,B.j,0,p,p),A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRD(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),B.U],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aD6[v]
t=D.aCN[v]
s=v+1
f.push(new A.D(B.eM,new A.c7(B.aL,B.e,B.j,B.l,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.H(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bd,A.aM(p,B.Z,!1,p,!0,B.t,p,A.aO(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRE(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.dg,!0,B.a5,p,B.ao,p,p,p,p),p),new Av.Pj(v,l.c,new C.bRF(o,l),p,!1,D.lE,p,p,p,p,p,!1,!1,p,I.b0A,p,p,p,p,p,w)],g),p),p))}f.push(D.fJT)
f.push(B.am)
n=A.a([D.fDt,B.ae],g)
for(r=0;r<3;++r){q=D.cdr[r]
n.push(new A.D(B.fB,A.jl(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bRG(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.l,p,B.e,B.j,0,p,p))
return A.q(p,A.x(f,B.E,p,B.e,B.j,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.n),p,p,p,B.kU,B.bi,p,p,p)},
$S:150}
C.bRC.prototype={
$0(){var w=this.a
return w.m(new C.bRB(w,this.b))},
$S:0}
C.bRB.prototype={
$0(){return B.d.cB(this.a.gD4().c,this.b)},
$S:0}
C.bRD.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bRE.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bRF.prototype={
$1(d){return this.a.m(new C.bRA(this.b,d))},
$S:157}
C.bRA.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bRG.prototype={
$1(d){return this.a.m(new C.bRz(this.b,this.c))},
$S:9}
C.bRz.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3o.prototype={
$0(){var w=this.a
w.wt()
w.a.bv()
w.a.qn()},
$S:0}
C.e3n.prototype={
$0(){var w=this.a
w.wt()
w.a.bv()
w.a.qn()},
$S:0}
C.e3q.prototype={
$0(){var w=this,v=w.b
if(J.cI(v)||J.cq(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e3r.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e3s.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e3m.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e3p.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e3u.prototype={
$0(){this.a.P9()
return null},
$S:0}
C.e3t.prototype={
$0(){return this.a.F1(this.b)},
$S:0}
C.e2P.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bN(!1,B.dn,w,w,!0,w,w,w,new C.e2N(d),w,w),r=A.bo(B.bR,w,w,w,w,w,w,w,w,w,w,w)
return A.eg(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e2O(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e2N.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.e2O.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.e2Q.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cOd(this.b)},
$S:0}
C.e2K.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVw(w.b,w.c,w.d)},
$S:7}
C.e2b.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e2c.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2t.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hk(t.a.c),$async$$0)
case 2:s=r.nA(q.dI(e,new C.e2r(t)))
if(s!=null&&t.c!=null)t.m(new C.e2s(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2r.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e2s.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2u.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e2v.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2J.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cP_(C.hBm(w),w)},
$S:0}
C.e2q.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wg(u,w,C.aQQ(u,w),new C.e2p(v),null)},
$S:z+37}
C.e2p.prototype={
$1(d){return this.bo0(d)},
bo0(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e2o(s,d))
w=3
return A.b(s.ut(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:486}
C.e2o.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.bf1(this.b)},
$S:0}
C.e2G.prototype={
$1(d){return d.as},
$S:z+1}
C.e2H.prototype={
$1(d){var w=this
return new A.dY(new C.e2F(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e2F.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.ec:B.c,h=A.m(26),g=A.L(B.bR.j(0.5),B.r,1.5),f=A.q(k,D.bTA,B.f,k,k,new A.p(B.bR.j(0.18),k,k,k,k,k,B.a7),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,12.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.j,0,B.p),1)
f=A.A(A.a([f,B.be,a0,A.aG(k,k,k,k,A.X(B.cz,j?B.bu:B.bq,k,k,k,k),k,k,k,new C.e2z(a1),k,k,k,k,k,k)],w),B.l,k,B.e,B.j,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.J)(v),++s){r=v[s]
q=t.a===r?B.bR:B.bR.j(0.1)
p=new A.aN(20,20)
o=t.a===r
n=new A.ay(B.bR,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bR
a0.push(A.aA(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.H(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b4,new A.p(q,k,new A.bG(n,n,n,n),new A.be(p,p,p,p),k,k,B.n),B.h1,k,k,k,k,B.Ce,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e2A(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bV(B.bG,a0,B.bs,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c4y,new A.D(D.bDV,f,k),new A.D(D.bDM,e,k),new A.D(B.rU,a0,k),new A.D(X.amr,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Ag.ap2,j?B.bu:B.bq,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bDO,A.A(A.a([a0,B.au,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aP:B.as,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b91(k,B.bR,k,k,!1,B.y,k,k,k,k,k,k,new C.e2B(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.l,k,B.e,B.j,0,k,k),k))}f.push(B.aB)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aE.j(0.35),B.j9,12)],x.V)
f.push(A.aA(k,A.q(k,A.A(A.a([D.fDP,B.be,D.bId,D.bUf],w),B.l,k,B.e,B.j,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.c8c,B.n),k,k,k,B.hV,B.bF,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e2C(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.yM,A.A(A.a([A.E(A.dU(B.dn,new C.e2D(a1),k),1),B.au,A.E(A.bI(M.aXg,k,new C.e2E(t,a1),A.bo(B.bR,k,k,k,k,k,B.cp,k,k,k,k,k)),1)],w),B.l,k,B.e,B.j,0,k,k),k))
return A.bm(!0,A.q(k,A.ci(A.x(f,B.E,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.p(i,k,g,h,k,k,B.n),k,k,k,B.yB,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:88}
C.e2z.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.e2A.prototype={
$0(){return this.b.$1(new C.e2y(this.a,this.c))},
$S:0}
C.e2y.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e2B.prototype={
$1(d){var w=this.a
w.m(new C.e2w(w,d))
this.b.$1(new C.e2x())},
$S:9}
C.e2w.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e2x.prototype={
$0(){},
$S:0}
C.e2C.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).O(new A.aHA(!0,w))
return null},
$S:0}
C.e2D.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.e2E.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).O(new A.aHA(!1,w))
return null},
$S:0}
C.e2I.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOO(this.b.b)
w.r.a8(0)},
$S:0}
C.e2_.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aiW(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.huF(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e20.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFV(w)},
$S:0}
C.e2S.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.aee(this.b,w,this.c,null)},
$S:z+39}
C.e2M.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.ec:B.c,t=A.m(20),s=A.X(B.lQ,B.aY,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.l,w,B.e,B.Q,0,B.p)
return A.eg(A.a([A.bI(D.fVE,w,new C.e2L(d),A.bo(B.aY,w,w,w,w,w,w,w,w,w,w,w))],o),B.bc,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e2L.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.e21.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e22.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e23.prototype={
$1(d){return d.a},
$S:z+8}
C.e24.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hV(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFV(w)},
$S:0}
C.e28.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aiW(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e26(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.huF(v.e,null,r,v.f,v.r,new C.e27(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e27.prototype={
$0(){return this.a.ab6(this.b)},
$S:0}
C.e26.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e29.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hV>")
w=A.C(new A.N(w,new C.e25(this.b),v),v.k("ak.E"))
u.d=t.aFV(w)},
$S:0}
C.e25.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e2R.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e2l.prototype={
$1(d){return d.length!==0},
$S:3}
C.e2m.prototype={
$1(d){var w=this
return new A.dY(new C.e2k(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e2k.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.ec:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aP:B.as,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bq,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bq,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.e2g(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.U)
u=w.d
p.push(A.aM(v,B.Z,!1,v,!0,B.t,v,A.aO(),u,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(12),B.dq),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.mB,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.Q,0,B.p)
t=w.a
return A.eg(A.a([A.bN(!1,B.dn,v,v,!0,v,v,v,new C.e2h(d),v,v),A.bI(B.L0,v,new C.e2i(t,u,o,e),A.bo(B.bR,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fIf,v,new C.e2j(t,u,o,d),A.bo(B.aY,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a6(360,v,p,v),v,v,v,v,r,v)},
$S:187}
C.e2g.prototype={
$1(d){var w=null
return A.dG(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aP:B.as,w,w,w,w,w,w,w,w,w,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aG(w,w,w,w,D.c1o,w,w,w,new C.e2f(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1978}
C.e2f.prototype={
$0(){return this.a.$1(new C.e2d(this.b,this.c))},
$S:0}
C.e2d.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e2h.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.e2i.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e2e(w.c,u))
v.bP(0,B.ce)}},
$S:0}
C.e2e.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e2j.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a7(w.d,!1).O(!0)},
$S:0}
C.e2n.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cPs(this.b,D.uC,C.Hi(v,w.a.c))},
$S:0}
C.e2Z.prototype={
$1(d){return d.as},
$S:z+1}
C.e3_.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j_(this.b,w)},
$S:0}
C.e30.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.is3(v)
return w.WC(v==null?null:v.a)},
$S:0}
C.e31.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i2K(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aT(1/0,e.a,e.b)
s=A.aT(1/0,e.c,e.d)
l.cwE(new A.av(u,t),v.gblH(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d17:D.d_l
q=A.L(s?B.dk:D.bjx,B.r,1)
p=A.m(22)
o=A.bR(0,A.b4(m,m,m,new C.bfI(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.by(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bR(0,A.v_(new A.R(n,n,n,n),new A.a6(u,t,new C.bgD(l.d,v,l.f,w,new C.e2V(l),l.gcgs(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.byr(s,new C.e2W(l,e),new C.e2X(l,e),new C.e2Y(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.p(m,m,q,k,m,new A.a9(B.b7,B.ba,B.x,r,m,m),B.n),m,m,m,A_.alA,m,m,m,m)},
$S:235}
C.e2V.prototype={
$1(d){var w=this.a
w.m(new C.e2T(w,d))},
$S:2}
C.e2T.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.e2W.prototype={
$0(){var w=this.b
return this.a.bdb(1.25,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e2X.prototype={
$0(){var w=this.b
return this.a.bdb(0.8,new A.av(A.aT(1/0,w.a,w.b),A.aT(1/0,w.c,w.d)))},
$S:0}
C.e2Y.prototype={
$0(){var w=this,v=w.b
return w.a.aVw(new A.av(A.aT(1/0,v.a,v.b),A.aT(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gblH())},
$S:0}
C.e32.prototype={
$0(){var w=this.a
return w.m(new C.e2U(w))},
$S:0}
C.e2U.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e2a.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fG(new A.fA(s.c)),$async$$0)
case 2:t.yu("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dhg.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bkt(u,C.hFH(v.c,u),new C.dhf(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dhf.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dhh.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bnM(d.d,d.c,u.f.q(0,d.a),new C.dhe(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dhe.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fHi.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fHj(d),w.k("Y<1>")),new C.fHk(),w.k("cM<1,n>")))},
$S:z+19}
C.fHj.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fHk.prototype={
$1(d){return d.a},
$S:z+8}
C.fHg.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fHh.prototype={
$1(d){return d.b},
$S:z+8}
C.fHn.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nA(new A.cM(new A.Y(v,new C.fHo(d),w.k("Y<1>")),new C.fHp(),w.k("cM<1,n>")))},
$S:z+19}
C.fHo.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fHp.prototype={
$1(d){return d.a},
$S:z+8}
C.fHl.prototype={
$1(d){var w,v=A.ez([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.al(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fHm.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dhj.prototype={
$0(){return this.a},
$S:z+46}
C.dhA.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.al(0,d)},
$S:260}
C.dhs.prototype={
$2(d,e){var w=this.a.c4(0,d,new C.dht()),v=J.a5(w)
if(!v.q(w,e))v.J(w,e)},
$S:115}
C.dht.prototype={
$0(){return A.a([],x.s)},
$S:755}
C.dhr.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eH(w,e)
return w===!0},
$S:281}
C.dhk.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dhq.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dhp.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aU(v==null?D.Dv:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aU(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aU(t==null?D.Dv:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1980}
C.dhl.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dhu.prototype={
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
t=J.aU(t==null?D.Dv:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aV(w,new C.dhv(r)))w.push(r)}}B.d.bt(w,new C.dhw(a8))
B.d.aZ(w,new C.dhx())
q=C.i2J(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eU8],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bqT(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1981}
C.dhv.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dhw.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dhx.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dhy.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a5(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b7(v,A.a4(v).k("b7<2>")).cF(0,0,B.q2)+88-w.gH(n).a}else u=0
for(w=J.a5(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:666}
C.dhz.prototype={
$1(d){return 16+d*156},
$S:145}
C.dhi.prototype={
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
t.n(0,d,new C.GB(r,new A.o(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.GB(s,new A.o(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.GB(s,new A.o(e,v)))}t=o.r.h(0,d)
t=J.aU(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.KU(d,new A.o(e+t,w),s,s.length))}},
$S:189}
C.dhm.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKH(new A.o(v.a,v.b+28),new A.o(w.a,w.b+28),!0,null))},
$S:115}
C.dhn.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dho.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:756}
C.dhB.prototype={
$2(d,e){return B.i.aS(d.a,e.a)},
$S:756}
C.dhC.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:473}
C.dhD.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:201}
C.dhE.prototype={
$1(d){return d>=0.5},
$S:117}
C.fmH.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hb(A.aP(!1,v,!0,new A.a6(38,38,A.X(d,this.a.c?B.c:B.cq,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1983}
C.eXQ.prototype={
$1(d){var w=null,v=A.m(8),u=B.bR.j(0.12),t=A.m(8)
return new A.D(B.n_,A.aP(!1,v,!0,A.q(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fty,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.n),w,w,w,w,B.Oq,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXP(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eXP.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dxw.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dxv.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nY,B.K,w,w)
return A.eg(A.a([A.bN(!1,B.dn,w,w,!0,w,w,w,new C.dxt(d),w,w),A.bN(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mP,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dxu(d),w,w)],x.p),B.bc,B.Cb,w,u,D.bEP,w,D.bGM,new A.b9(v,B.a1),w,w)},
$S:18}
C.dxt.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.dxu.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.dxF.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dxG.prototype={
$1(d){var w=this.a
return w.m(new C.dxE(w,d))},
$S:z+49}
C.dxE.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dxH.prototype={
$1(d){var w=null
return A.qH(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dxK.prototype={
$1(d){var w=this.a
return w.m(new C.dxD(w,d))},
$S:35}
C.dxD.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dxJ.prototype={
$1(d){var w=null
return A.qH(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dxL.prototype={
$1(d){var w=this.a
return w.m(new C.dxC(w,d))},
$S:35}
C.dxC.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dxM.prototype={
$0(){var w=this.a
return w.m(new C.dxB(w))},
$S:0}
C.dxB.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dxN.prototype={
$0(){var w=this.a
return w.m(new C.dxA(w))},
$S:0}
C.dxA.prototype={
$0(){return++this.a.at},
$S:0}
C.dxO.prototype={
$0(){var w=this.a
return w.m(new C.dxz(w))},
$S:0}
C.dxz.prototype={
$0(){return--this.a.ax},
$S:0}
C.dxP.prototype={
$0(){var w=this.a
return w.m(new C.dxy(w))},
$S:0}
C.dxy.prototype={
$0(){return++this.a.ax},
$S:0}
C.dxQ.prototype={
$1(d){var w=this.a
return w.m(new C.dxx(w,d))},
$S:9}
C.dxx.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dxI.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.dxR.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bR.j(0.18)
else w=q.c.a?B.ec:B.c
v=A.m(12)
if(p)u=B.bR
else u=(q.c.a?B.eg:B.bP).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bR
else t=q.c.a?B.bu:B.bq
t=A.X(f,t,r,r,r,18)
if(p)s=B.bR
else s=q.c.a?B.bu:B.bq
return A.E(A.aJ(!1,B.a3,!0,r,A.aP(!1,o,!0,A.cT(r,A.x(A.a([t,B.ay,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.l,r,B.e,B.j,0,B.p),r,r,B.b4,new A.p(w,r,u,v,r,r,B.n),B.eH,r,r,r,r,B.k1,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dxS(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dxS.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dy0.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.cfm.prototype={
$2(d,e){return new A.bB(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:97}
C.cft.prototype={
$1(d){return d.aj()},
$S:z+5}
C.cfu.prototype={
$2(d,e){var w=J.b8(e,new C.cfs(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bB(d,w,x.d2)},
$S:z+53}
C.cfs.prototype={
$1(d){return d.aj()},
$S:z+12}
C.cfo.prototype={
$1(d){return C.am5(A.a3(d,x.N,x.z))},
$S:z+9}
C.cfp.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.cfq.prototype={
$1(d){return C.hlt(A.a3(d,x.N,x.z))},
$S:z+11}
C.cfr.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.cfy.prototype={
$1(d){return new A.aHM(d.f.length,d.a,d.b)},
$S:z+55}
C.cfz.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:573}
C.cfv.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.cfw.prototype={
$1(d){return d.cOq(C.Hi(d,this.a))},
$S:z+85}
C.e3b.prototype={
$1(d){return C.uw(d,this.a.a.c)},
$S:z+3}
C.e3c.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e3g.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e3h.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e38.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1b(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z2("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pu(r.c,r.e),$async$$0)
case 4:s.z2(p)
w=5
return A.b(s.K6(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e39.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1b(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z2("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pu(r.c,r.e),$async$$0)
case 4:s.z2(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3a.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Wj(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z2("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z2("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z2("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.K6(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.z2(B.a.ei(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e3f.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1a(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z2("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a7(r,!1).ca(A.e9(new C.e3e(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pu(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e3e.prototype={
$1(d){var w=this.b
return new C.a0u(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e3d.prototype={
$1(d){return D.hxz},
$S:z+58}
C.e3j.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.e3k.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e3i(w,d)
return new A.D(B.d3,new C.bgH(this.b,d.c,d.a,w,null),null)},
$S:1984}
C.e3i.prototype={
$0(){return this.a.Ys(this.b.b)},
$S:0}
C.e33.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e34.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e35.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e36.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e37.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.e3l.prototype={
$1(d){var w,v,u,t,s,r=this.a
if(r.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u].z
s=t==null?null:B.a.i(t)
if(s==null||s.length===0)continue
if(!B.a.a0(s,"NGMYFTSYNC2"))t=!A.cQ(s,"ngmyFamilyTreeSync",0)
else t=!1
if(t)continue
r.e=!0
A.a7(this.b,!1).O(s)
return}},
$S:185}
C.dPE.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dPF.prototype={
$0(){return B.d.gH(D.a6d)},
$S:z+60}
C.dPG.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d7X,44),w,w,w),w,w,new C.blA(u,t,v,w),B.az)},
$S:59}
C.fY7.prototype={
$1(d){return A.pe(new C.fY6(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:142}
C.fY6.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.ec:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.tp,24)],x.V),o=r?B.eg:B.bP
o=A.q(t,t,B.f,t,t,new A.p(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aY.j(0.25),B.bR.j(0.18)],x.O)
w=A.q(t,D.bWH,B.f,t,t,new A.p(t,t,t,A.m(12),t,new A.a9(B.a6,B.aa,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aP:B.as,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.x(A.a([B.X,o,new A.D(E.amw,A.A(A.a([w,B.be,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bq,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.j,0,B.p),1)],u),B.l,t,B.e,B.j,0,t,t),t),A.E(A.im(!0,t,e,B.y,D.fg3,new C.fY5(this.b,s),20,B.am5,t,B.ah,!1),1)],u),B.l,t,B.e,B.j,0,B.p),B.f,t,t,new A.p(q,t,t,B.l9,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:118}
C.fY5.prototype={
$2(d,e){var w=null,v=D.a6d[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.L(s?B.eg:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.et,8)],x.V),p=A.m(15),o=A.E(new C.a7h(v.a,!0,w),1),n=s?B.jV:B.jl,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aP:B.as,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aJ(!1,B.a3,!0,w,A.aP(!1,u,!0,A.eJ(A.by(p,A.x(A.a([o,A.q(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bu:B.bq,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.j,0,B.p),B.f,n,w,w,w,w,w,w,B.k2,w,w,w)],l),B.al,w,B.e,B.j,0,B.p),B.aq),w,new A.p(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fY4(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:80}
C.fY4.prototype={
$0(){A.a7(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.coR.prototype={
$0(){return this.a.ahl(this.b)},
$S:0}
C.fXu.prototype={
$1(d){return D.hso},
$S:z+61}
C.h42.prototype={
$1(d){var w=this
return new C.a2h(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fXz.prototype={
$1(d){return new C.a_8(this.a,null)},
$S:z+63}
C.fXy.prototype={
$1(d){return D.htp},
$S:z+64}
C.d8Q.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.d8R.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d8P(w,d))},
$S:35}
C.d8P.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d8S.prototype={
$1(d){return this.a.KK()},
$S:2}
C.d8T.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.d8M.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.d8N.prototype={
$1(d){return this.a.KK()},
$S:2}
C.d8O.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.cHb.prototype={
$0(){},
$S:0}
C.cHh.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.cHi.prototype={
$0(){return this.a.aQR(-1)},
$S:0}
C.cHj.prototype={
$1(d){return this.a.m(new C.cHg())},
$S:2}
C.cHg.prototype={
$0(){},
$S:0}
C.cHk.prototype={
$0(){return this.a.aQR(1)},
$S:0}
C.cHl.prototype={
$1(d){return this.a.m(new C.cHf())},
$S:2}
C.cHf.prototype={
$0(){},
$S:0}
C.cHm.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aY.j(0.2)
if(s)v=B.aY
else v=this.b.a?B.eg:B.bP
return A.uT(u,u,B.b1,r,u,new C.cHe(t,d),B.wm,s,w,u,new A.ay(v,1,B.r,-1),B.cf)},
$S:1985}
C.cHe.prototype={
$1(d){var w=this.a
return w.m(new C.cHc(w,this.b))},
$S:9}
C.cHc.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cHn.prototype={
$1(d){return this.a.m(new C.cHd())},
$S:2}
C.cHd.prototype={
$0(){},
$S:0}
C.cHo.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.fmc.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a7(this.b,!1).O(w)},
$S:2}
C.fmd.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.fme.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a7(this.b,!1).O(w)},
$S:0}
C.fma.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbD0()
w=w.e
s=A.m(B.o.D(v-1,0,v))
return A.b4(new A.D(D.bGL,new A.em(A.q(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.byg(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:59}
C.fmb.prototype={
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
s=A.a([B.b1,s,B.aY],x.O)
return A.aJ(!1,B.a3,!0,p,A.aP(!1,v,!0,A.eJ(D.erG,r,new A.p(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.d9(-1.2+t,-0.5),new A.d9(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:132}
C.fVR.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:60}
C.eV_.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUR.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eUS.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eUY.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.dY(new C.eUX(w,this.b),null)},
$S:20}
C.eUX.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.ec:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aP:B.as,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eO(w,u,new A.D(B.amp,A.x(A.a([s,B.am,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hru(new C.eUU(r,e),r.a),B.aB,A.A(A.a([A.E(A.dU(B.dn,new C.eUV(d),w),1),B.au,A.E(A.bI(B.W_,w,new C.eUW(r,d),A.bo(B.aY,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.l,w,B.e,B.j,0,w,w)],q),B.al,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(t,B.a1),w)},
$S:103}
C.eUU.prototype={
$1(d){return this.b.$1(new C.eUT(this.a,d))},
$S:35}
C.eUT.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eUV.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.eUW.prototype={
$0(){var w=this.a.a
A.a7(this.b,!1).O(w)
return null},
$S:0}
C.eUZ.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.TA(this.b)},
$S:0}
C.eUM.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.bf7(w)},
$S:0}
C.eUQ.prototype={
$1(d){return this.bon(d)},
bon(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.M5(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j_(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eUP.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eUO(this.b),v),v.k("M.E"))
u.d=t.bf7(w)},
$S:0}
C.eUO.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eV0.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j_(this.b,w)},
$S:0}
C.eV1.prototype={
$1(d){return this.a.bHa(d,this.b)},
$S:z+67}
C.eUN.prototype={
$0(){return this.a.ab5(this.b)},
$S:0}
C.h3Q.prototype={
$1(d){return new C.aez(this.a,this.b,this.c,null)},
$S:z+68}
C.eV3.prototype={
$0(){return this.a.a0g(this.b)},
$S:0}
C.eV4.prototype={
$0(){return this.a.QN(this.b)},
$S:0}
C.eV5.prototype={
$0(){return this.a.EX(this.b)},
$S:0}
C.eV6.prototype={
$0(){return this.a.a0h(this.b)},
$S:0}
C.eV2.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.eUH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUI.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eUJ.prototype={
$0(){A.a7(this.a,!1).O(null)
return null},
$S:0}
C.eUL.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qt(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eUK(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUK.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eVt.prototype={
$2(d,e){return d+e.gxF()},
$S:z+71}
C.eVp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eVq.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eVa.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.ec:B.c,s=A.m(24),r=A.q(v,D.bX9,B.f,v,v,new A.p(B.av.j(u?0.18:0.08),v,A.L(B.av.j(0.28),B.r,1),v,v,v,B.a7),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aP:B.as,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bq,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aP:B.as
u=u?B.eg:B.bP
w=x.p
return A.eO(v,t,new A.D(B.yO,A.x(A.a([r,B.aR,q,B.U,p,B.d8,A.A(A.a([A.E(A.dU(B.o_,new C.eV8(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.fg,v,new A.b9(A.m(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.au,A.E(A.bI(D.fZw,v,new C.eV9(d),A.bo(B.av,v,v,v,v,v,B.fg,v,new A.b9(A.m(14),B.a1),v,v,v)),1)],w),B.l,v,B.e,B.j,0,v,v)],w),B.l,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d7,v,new A.b9(s,B.a1),v)},
$S:48}
C.eV8.prototype={
$0(){A.a7(this.a,!1).O(!1)
return null},
$S:0}
C.eV9.prototype={
$0(){A.a7(this.a,!1).O(!0)
return null},
$S:0}
C.eVj.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.ec:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h4,28)],x.V),g=k?D.df8:B.a5x,f=x.p
g=A.q(m,A.x(A.a([A.q(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.f9a,B.ay,new A.bM(B.a6,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cC,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.l,m,B.e,B.j,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a9(B.aA,B.aF,B.x,g,m,m),B.n),m,m,m,m,E.amt,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bq,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b81(B.b9,B.jr,new C.eVg(v,d),l,"Camera import","Scan QR"),1),B.au,A.E(v.b81(B.cy,R.zp,new C.eVh(v,d),l,".json backup","Upload file"),1)],f),B.l,m,B.e,B.j,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bq,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.av.j(k?0.14:0.06)
q=A.m(16)
p=A.L(B.av.j(0.28),B.r,1)
o=A.q(m,D.bWv,B.f,m,m,new A.p(B.av.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bV,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aP:B.as,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bq,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.j,0,B.p),1)
return A.bm(!0,new A.D(B.wh,A.q(m,A.x(A.a([g,new A.D(B.amq,A.x(A.a([w,B.X,u,B.bA,t,B.X,A.aJ(!1,B.a3,!0,m,A.aP(!1,s,!0,A.q(m,A.A(A.a([o,B.be,n,A.X(B.eJ,k?B.bu:B.bq,m,m,m,m)],f),B.l,m,B.e,B.j,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.n),m,m,m,m,B.bF,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eVi(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.j,0,B.p),m)],f),B.l,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.p(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:25}
C.eVg.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).O(null)
w=2
return A.b(u.a.w3("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVh.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).O(null)
w=2
return A.b(u.a.w3("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVi.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a7(u.b,!1).O(null)
w=2
return A.b(u.a.Op(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eVe.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.ec:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.f_,24)],x.V),k=o?B.eg:B.bP
k=A.q(q,q,B.f,q,q,new A.p(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bu:B.bq
u=A.by(w,new A.a6(48,48,C.aS7(!0,A.m(12),48,Q.P5,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aP:B.as,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bq(v.gxF())
s=x.p
r=this.a
return A.bm(!0,new A.D(B.wh,A.q(q,A.x(A.a([B.X,k,new A.D(D.amn,A.A(A.a([u,B.be,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bq,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.j,0,B.p),1)],s),B.l,q,B.e,B.j,0,q,q),q),B.C2,r.cqI(B.uV,B.aY,new C.eVc(d),p,"QR code or backup file","Transfer project"),r.b52(!0,B.ei,B.av,new C.eVd(d),p,"Remove from this device","Delete project"),B.X],s),B.l,q,B.e,B.Q,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:25}
C.eVc.prototype={
$0(){A.a7(this.a,!1).O("transfer")
return null},
$S:0}
C.eVd.prototype={
$0(){A.a7(this.a,!1).O("delete")
return null},
$S:0}
C.eVf.prototype={
$1(d){return this.boo(d)},
boo(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.M5(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wi(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eVw.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eVv(w))},
$S:0}
C.eVv.prototype={
$0(){return this.a.r++},
$S:0}
C.eVx.prototype={
$0(){var w=this.a
return w.m(new C.eVu(w))},
$S:0}
C.eVu.prototype={
$0(){return this.a.r++},
$S:0}
C.eV7.prototype={
$0(){var w=this.a.c
w.toString
return A.j_(w,null)},
$S:0}
C.eVb.prototype={
$0(){return this.a.cjZ(this.b)},
$S:0}
C.eVs.prototype={
$0(){var w=this.a
return w.m(new C.eVr(w,this.b))},
$S:0}
C.eVr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eVm.prototype={
$0(){return this.a.w3("scan")},
$S:0}
C.eVn.prototype={
$0(){return this.a.w3("file")},
$S:0}
C.eVo.prototype={
$1(d){return this.a.cqJ(d,this.b)},
$S:z+72}
C.eVl.prototype={
$0(){return this.a.F0(this.b)},
$S:0}
C.eVk.prototype={
$0(){return this.a.a0M(this.b,this.c)},
$S:0}
C.cGw.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cGv.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cGt.prototype={
$1(d){return C.hLP(A.a3(d,x.N,x.z))},
$S:z+75}
C.cGu.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fG6.prototype={
$1(d){return d.y===D.kX},
$S:z+3}
C.h4C.prototype={
$1(d){return C.aQQ(d,this.a)},
$S:z+3}
C.fDF.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bSC.prototype={
$1(d){return!d.as},
$S:z+1}
C.bSB.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bSy.prototype={
$1(d){return C.hlv(A.a3(d,x.N,x.z))},
$S:z+24}
C.bSz.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bSA.prototype={
$1(d){return J.k(d)},
$S:17}
C.fu0.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fpL.prototype={
$1(d){return C.hbc(A.a3(d,x.N,x.z))},
$S:z+79}
C.fpM.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.fpN.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fXi.prototype={
$1(d){return J.k(d)},
$S:17}
C.fXj.prototype={
$1(d){return d.a},
$S:z+81}
C.fXk.prototype={
$1(d){return d.length!==0},
$S:3}
C.fXl.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fXm.prototype={
$1(d){return d.TA(null).aj()},
$S:z+82}
C.h4A.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fGA.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fJP.prototype={
$1(d){return C.am5(A.a3(d,x.N,x.z))},
$S:z+9}
C.fJQ.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fJR.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fJS.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fJT.prototype={
$1(d){return C.uw(d,this.a)},
$S:z+3}
C.fX5.prototype={
$1(d){return C.uw(d,this.a)},
$S:z+3}
C.h4v.prototype={
$1(d){return C.am5(A.a3(d,x.N,x.z))},
$S:z+9}
C.h4w.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h4x.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fGh.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fGi.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h4G.prototype={
$1(d){return!d.as},
$S:z+1}
C.fFM.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fFN.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fFO.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h43.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fKF.prototype={
$1(d){return d.Q},
$S:z+15}
C.fWZ.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fJM.prototype={
$1(d){return C.am5(A.a3(d,x.N,x.z))},
$S:z+9}
C.fJN.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fJO.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fWU.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fql.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqm.prototype={
$1(d){return C.hlv(A.a3(d,x.N,x.z))},
$S:z+24}
C.fqn.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fqo.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fqp.prototype={
$1(d){return d.length!==0},
$S:3}
C.fqC.prototype={
$2(d,e){return d.eM(new C.fqD(e))},
$S:1986}
C.fqD.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cd},
$S:1987}
C.fqz.prototype={
$1(d){return C.i7N(d,this.a)},
$S:z+84}
C.fqA.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fqB.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fuI.prototype={
$1(d){return d.a},
$S:z+56}
C.fuJ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fuK.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fxF.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fCV.prototype={
$1(d){return C.hx2(d,C.Hi(d,this.a))},
$S:z+5}
C.fCW.prototype={
$1(d){return C.hx3(d,C.Hi(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBy.prototype
w.bwe=w.t
w=C.azM.prototype
w.bw9=w.t
w=C.aGZ.prototype
w.bwD=w.t
w=C.aBz.prototype
w.bwf=w.t
w=C.aBB.prototype
w.bwg=w.t
w=C.aBC.prototype
w.bwh=w.t
w=C.aN8.prototype
w.bz6=w.t
w=C.aPe.prototype
w.bBp=w.t
w=C.aPf.prototype
w.bBq=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEz.prototype,"gcnD","cnE",28)
var r
w(r=C.aBx.prototype,"gcgy","cgz",65)
v(r,"gaP0","NX",0)
v(r,"gcw_","Bn",0)
v(r,"gbOV","OD",0)
v(r,"gcKp","z3",0)
v(r,"gcpG","a1t",0)
v(r,"gbKk","Ol",0)
v(r,"gbPn","XU",0)
w(r,"gbUt","bUu",78)
v(r,"gbEG","Am",0)
v(C.aBA.prototype,"gcKl","FT",0)
v(r=C.alV.prototype,"gbsA","bsB",2)
v(r,"gbss","bst",2)
v(r,"gcLu","cLv",2)
u(r,"gqm","kN",0)
u(r=C.ak7.prototype,"geY","fO",2)
w(r,"gccb","ccc",27)
u(C.auR.prototype,"gqm","kN",0)
v(r=C.ayO.prototype,"gcX3","cX4",2)
u(r,"gqm","kN",0)
u(C.aKM.prototype,"gbsy","bsz",2)
v(C.am3.prototype,"gBR","cLH",2)
u(r=C.am1.prototype,"gcMn","cMo",2)
u(r,"gqm","kN",0)
v(r=C.alY.prototype,"gbrp","brq",2)
v(r,"gcRA","cRB",2)
u(r=C.am_.prototype,"geY","fO",2)
u(r,"giy","cL0",2)
v(r=C.alW.prototype,"gcKQ","cKR",2)
u(r,"gbqh","hL",2)
v(r=C.aF7.prototype,"gagY","wj",0)
v(r,"gcje","a0D",0)
v(r,"gaTe","It",0)
v(r=C.aF4.prototype,"gcGj","a3C",0)
v(r,"gagY","wj",0)
v(r,"gcu0","a27",0)
v(r,"gcj9","b3g",2)
v(r,"gckb","a0R",0)
w(r,"gcgs","cgt",35)
v(r,"gbPc","Iy",0)
v(r,"gcHo","cHp",2)
v(r,"gc6k","ZB",0)
w(r,"gceX","ceY",36)
v(r,"gciY","ciZ",2)
v(r=C.aDx.prototype,"gcch","Qk",0)
v(r,"gccj","cck",2)
v(r,"gbLP","aaI",0)
v(r=C.aF6.prototype,"gbSS","Yo",0)
v(r,"gc2q","Z3",0)
v(r,"gcAp","a2Z",0)
v(r,"gcwz","a2A",0)
v(C.aF5.prototype,"gcwi","aiM",0)
v(C.au2.prototype,"gceV","a0e",0)
v(C.aAh.prototype,"ga3l","KK",2)
v(C.aAg.prototype,"ga3l","KK",2)
v(C.az0.prototype,"ga3l","KK",2)
v(r=C.aGA.prototype,"gb4q","Rj",0)
v(r,"gbDu","Ww",0)
v(r,"gck_","ck0",2)
w(C.aGz.prototype,"gcfN","cfO",69)
t(C.aGB.prototype,"gaT9",0,0,null,["$1","$0"],["Is","bN6"],70,0,0)
s(C,"hEK","ihY",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.apE,C.uQ,C.nw,C.Iq,C.afK,C.KN,C.uR,C.bT7,C.td,C.bp3,C.amc,C.adS,C.lr,C.bRJ,C.aue,C.zE,C.akO,C.ML,C.bav,C.a9X,C.bhM,C.afR,C.aA0,C.afF,C.aKM,C.KU,C.GB,C.bgF,C.aKH,C.aqY,C.dhF,C.lV,C.aV6,C.aV5,C.aT6,C.ui,C.rn,C.lC,C.hV,C.kT,C.aIF])
u(A.ht,[C.fOs,C.fOr,C.fOt,C.fY0,C.fBz,C.fBA,C.fBF,C.fMb,C.fMa,C.fM9,C.c8m,C.fYx,C.fYp,C.fYB,C.fGp,C.dQk,C.dQf,C.dQg,C.dPT,C.dPP,C.dQz,C.dQA,C.dQt,C.dQu,C.dQB,C.dQC,C.fHe,C.fJJ,C.fJK,C.fX3,C.h4u,C.fGg,C.fXF,C.dgS,C.dge,C.dgn,C.dgE,C.dgj,C.dgp,C.dgg,C.dgt,C.dgu,C.dgs,C.dgJ,C.dgI,C.diF,C.diG,C.diH,C.dh5,C.dha,C.dh9,C.cPu,C.cPw,C.d83,C.d8s,C.d8t,C.d8w,C.d8y,C.d8z,C.d8A,C.d8C,C.d8D,C.bRt,C.bRn,C.fup,C.h4n,C.h4o,C.h4p,C.h4k,C.h4q,C.h4r,C.h4s,C.h4j,C.fHQ,C.fW3,C.fDG,C.fKE,C.bMx,C.h4M,C.fWA,C.bKJ,C.bKE,C.bKG,C.bKF,C.cqx,C.cqs,C.cqt,C.cqr,C.cqp,C.cqu,C.cQy,C.cFv,C.cFy,C.cFw,C.cFz,C.cFA,C.f6Y,C.fh6,C.bSf,C.bS9,C.bSd,C.bRR,C.e1K,C.e1H,C.e1I,C.e1G,C.e1M,C.bS7,C.bRY,C.bRI,C.bRH,C.bRD,C.bRE,C.bRF,C.bRG,C.e3p,C.e2P,C.e2K,C.e2b,C.e2r,C.e2u,C.e2q,C.e2p,C.e2G,C.e2H,C.e2B,C.e2_,C.e2S,C.e2M,C.e21,C.e22,C.e23,C.e28,C.e26,C.e25,C.e2l,C.e2m,C.e2g,C.e2Z,C.e2V,C.dhg,C.dhh,C.fHi,C.fHj,C.fHk,C.fHg,C.fHh,C.fHn,C.fHo,C.fHp,C.fHl,C.fHm,C.dhA,C.dhq,C.dhl,C.dhv,C.dhw,C.dhz,C.dhn,C.dhC,C.dhD,C.dhE,C.fmH,C.eXQ,C.dxv,C.dxF,C.dxG,C.dxH,C.dxK,C.dxJ,C.dxL,C.dxQ,C.dxR,C.cft,C.cfs,C.cfo,C.cfp,C.cfq,C.cfr,C.cfy,C.cfv,C.cfw,C.e3b,C.e3e,C.e3d,C.e3k,C.e3l,C.dPE,C.fY7,C.fXu,C.h42,C.fXz,C.fXy,C.d8R,C.d8S,C.d8N,C.cHj,C.cHl,C.cHm,C.cHe,C.cHn,C.fmc,C.fVR,C.eUY,C.eUU,C.eUQ,C.eUO,C.eV1,C.h3Q,C.eVa,C.eVj,C.eVe,C.eVf,C.eVo,C.cGv,C.cGt,C.cGu,C.fG6,C.h4C,C.fDF,C.bSC,C.bSB,C.bSy,C.bSz,C.bSA,C.fpL,C.fpM,C.fXi,C.fXj,C.fXk,C.fXl,C.fXm,C.h4A,C.fGA,C.fJP,C.fJQ,C.fJS,C.fJT,C.fX5,C.h4v,C.h4w,C.h4x,C.fGh,C.fGi,C.h4G,C.fFM,C.fFN,C.h43,C.fKF,C.fWZ,C.fJM,C.fJN,C.fWU,C.fql,C.fqm,C.fqn,C.fqo,C.fqp,C.fqD,C.fqz,C.fqA,C.fuI,C.fuJ,C.fxF,C.fCV,C.fCW])
u(A.ax,[C.b_H,C.alT,C.aWq,C.ZO,C.bcg,C.QF,C.a6v,C.tF,C.Is,C.bgD,C.bkt,C.byr,C.bnM,C.aed,C.bks,C.aec,C.bkr,C.aDy,C.aJJ,C.aee,C.Gx,C.bgE,C.adt,C.bgC,C.bgH,C.b_F,C.au2,C.aez])
u(A.mk,[C.bcU,C.be8,C.be_,C.aIA,C.bju,C.bp2,C.aWv,C.bcW,C.aBw,C.bcp,C.bt5,C.bjC,C.bj1,C.bj8,C.bgG,C.bfI,C.blA,C.byg])
u(A.iJ,[C.fYu,C.fYv,C.fYw,C.fYn,C.fYo,C.fYz,C.fYA,C.dQw,C.dQi,C.dQl,C.dQ_,C.dQ0,C.dQ1,C.dPZ,C.dQ6,C.dPY,C.dQ7,C.dQ8,C.dPX,C.dQ9,C.dPW,C.dQa,C.dPV,C.dQb,C.dPN,C.dPO,C.dPU,C.dQc,C.dPS,C.dQd,C.dPR,C.dQ2,C.dPQ,C.dQ3,C.dPM,C.dQ4,C.dQ5,C.dQx,C.dQy,C.dQm,C.dQn,C.dQo,C.dQp,C.dQq,C.dQr,C.dQs,C.dQE,C.dQv,C.fHf,C.dgc,C.dga,C.dgb,C.dgd,C.dgR,C.dgG,C.dgD,C.dgf,C.dgH,C.dgl,C.dgm,C.dgo,C.dgF,C.dgk,C.dgq,C.dgO,C.dgA,C.dgz,C.dgB,C.dgC,C.dgv,C.dgx,C.dgy,C.dgr,C.dgK,C.dgN,C.dgh,C.dgi,C.diE,C.diD,C.diC,C.diB,C.diI,C.diA,C.diJ,C.dh6,C.dh7,C.dh8,C.dhb,C.dh4,C.dh3,C.cPv,C.d82,C.d8f,C.d8e,C.d8u,C.d8d,C.d8v,C.d8c,C.d8b,C.d8x,C.d8a,C.d8n,C.d8m,C.d8E,C.bRm,C.bRw,C.bRo,C.bRp,C.bRs,C.bRr,C.bRu,C.bRv,C.bRq,C.bRk,C.bRl,C.bT_,C.bT0,C.bT1,C.bT2,C.bT3,C.bT4,C.bT5,C.h4m,C.fW4,C.bKI,C.bKD,C.bKB,C.bKC,C.bKA,C.cqz,C.cqA,C.cqy,C.cqB,C.cqD,C.cqE,C.cqF,C.cqv,C.cFu,C.cFD,C.cFE,C.cFF,C.cFC,C.cFG,C.cFH,C.cFI,C.cFJ,C.cFx,C.cFB,C.bSv,C.bSu,C.bSs,C.bSq,C.bSr,C.bSn,C.bSo,C.bSp,C.bSt,C.bSm,C.f6Z,C.f7_,C.f70,C.f71,C.f72,C.bSj,C.bSk,C.bSl,C.bSe,C.bSg,C.bSh,C.bSi,C.bSa,C.bRV,C.bRU,C.bRT,C.bRN,C.bRO,C.bRS,C.bRP,C.bRQ,C.bRM,C.e1J,C.e1L,C.e1E,C.e1F,C.e1D,C.e1N,C.e1O,C.e1P,C.e1S,C.e1T,C.e1U,C.e1V,C.e1W,C.e1X,C.e1Y,C.e1Z,C.e1Q,C.e1R,C.bS6,C.bS5,C.bRX,C.bRW,C.bS2,C.bS3,C.bS_,C.bS0,C.bS1,C.bRZ,C.bRx,C.bRy,C.bRC,C.bRB,C.bRA,C.bRz,C.e3o,C.e3n,C.e3q,C.e3r,C.e3s,C.e3m,C.e3u,C.e3t,C.e2N,C.e2O,C.e2Q,C.e2c,C.e2t,C.e2s,C.e2v,C.e2J,C.e2o,C.e2z,C.e2A,C.e2y,C.e2w,C.e2x,C.e2C,C.e2D,C.e2E,C.e2I,C.e20,C.e2L,C.e24,C.e27,C.e29,C.e2R,C.e2f,C.e2d,C.e2h,C.e2i,C.e2e,C.e2j,C.e2n,C.e3_,C.e30,C.e2T,C.e2W,C.e2X,C.e2Y,C.e32,C.e2U,C.e2a,C.dhf,C.dhe,C.dhj,C.dht,C.dhk,C.eXP,C.dxw,C.dxt,C.dxu,C.dxE,C.dxD,C.dxC,C.dxM,C.dxB,C.dxN,C.dxA,C.dxO,C.dxz,C.dxP,C.dxy,C.dxx,C.dxI,C.dxS,C.dy0,C.e3c,C.e3g,C.e3h,C.e38,C.e39,C.e3a,C.e3f,C.e3j,C.e3i,C.e33,C.e34,C.e35,C.e36,C.e37,C.dPF,C.fY4,C.coR,C.d8Q,C.d8P,C.d8T,C.d8M,C.d8O,C.cHb,C.cHh,C.cHi,C.cHg,C.cHk,C.cHf,C.cHc,C.cHd,C.cHo,C.fmd,C.fme,C.eV_,C.eUR,C.eUS,C.eUT,C.eUV,C.eUW,C.eUZ,C.eUM,C.eUP,C.eV0,C.eUN,C.eV3,C.eV4,C.eV5,C.eV6,C.eV2,C.eUH,C.eUI,C.eUJ,C.eUL,C.eUK,C.eVp,C.eVq,C.eV8,C.eV9,C.eVg,C.eVh,C.eVi,C.eVc,C.eVd,C.eVw,C.eVv,C.eVx,C.eVu,C.eV7,C.eVb,C.eVs,C.eVr,C.eVm,C.eVn,C.eVl,C.eVk])
u(A.ag,[C.apQ,C.TV,C.a_w,C.a_A,C.a_y,C.a_6,C.alU,C.ak6,C.auQ,C.ayN,C.am2,C.am0,C.alX,C.Wg,C.alZ,C.TW,C.ar0,C.aqV,C.a0a,C.aqZ,C.a0u,C.a0v,C.a7h,C.a_8,C.a_7,C.ZF,C.a2h,C.Gl,C.ayU,C.au1,C.atW,C.au0,C.OY])
u(A.ah,[C.aEz,C.bgx,C.aBx,C.bgW,C.aBA,C.be6,C.aBy,C.azM,C.aGZ,C.ayO,C.aBC,C.aBB,C.aBz,C.blU,C.am_,C.alW,C.aF7,C.aF4,C.aDx,C.aF6,C.aF5,C.blV,C.aN8,C.aAh,C.aAg,C.az0,C.byj,C.aPe,C.aPf,C.aGA,C.bnh,C.aGz,C.bA4])
u(A.jw,[C.dQh,C.dQj,C.dQe,C.dQD,C.fJL,C.bRj,C.dgQ,C.dgP,C.dgw,C.dgL,C.dgM,C.dhc,C.bT6,C.bSZ,C.bRK,C.bRL,C.h4l,C.h4L,C.bKH,C.cqC,C.cqw,C.cqq,C.f73,C.bS8,C.bSb,C.bSc,C.drR,C.bS4,C.e2F,C.e2k,C.e31,C.dhs,C.dhr,C.dhp,C.dhu,C.dhx,C.dhy,C.dhi,C.dhm,C.dho,C.dhB,C.cfm,C.cfu,C.cfz,C.dPG,C.fY6,C.fY5,C.fma,C.fmb,C.eUX,C.eVt,C.cGw,C.fu0,C.fpN,C.fJR,C.fFO,C.fJO,C.fqC,C.fqB,C.fuK])
u(A.lD,[C.a1N,C.afT,C.a25,C.a_Y,C.acw,C.aLt,C.Ir,C.am4,C.cGx,C.cGy])
t(C.alV,C.aBy)
t(C.ak7,C.azM)
t(C.auR,C.aGZ)
t(C.bgB,C.aBC)
t(C.am3,C.bgB)
t(C.bgA,C.aBB)
t(C.am1,C.bgA)
t(C.bgz,C.aBz)
t(C.alY,C.bgz)
t(C.blB,C.aN8)
t(C.byh,C.aPe)
t(C.byi,C.aPf)
t(C.aGB,C.bA4)
t(C.baI,A.baw)
t(C.byk,A.a6X)
t(C.baH,C.byk)
w(C.aBy,A.cb)
w(C.azM,A.cb)
w(C.aGZ,A.eQ)
w(C.aBz,A.cb)
v(C.bgz,C.afF)
w(C.aBB,A.cb)
v(C.bgA,C.afF)
w(C.aBC,A.cb)
v(C.bgB,C.afF)
w(C.aN8,A.eQ)
w(C.aPe,A.cb)
w(C.aPf,A.cb)
v(C.bA4,A.eB)
v(C.byk,A.jf)})()
A.iT(b.typeUniverse,JSON.parse('{"b_H":{"ax":[],"v":[]},"bcU":{"aC":[]},"apQ":{"ag":[],"v":[]},"aEz":{"ah":["apQ"]},"TV":{"ag":[],"v":[]},"alT":{"ax":[],"v":[]},"aWq":{"ax":[],"v":[]},"bgx":{"ah":["TV"]},"a_w":{"ag":[],"v":[]},"a_A":{"ag":[],"v":[]},"a_y":{"ag":[],"v":[]},"a_6":{"ag":[],"v":[]},"aBx":{"ah":["a_w"]},"bgW":{"ah":["a_A"]},"aBA":{"ah":["a_y"]},"ZO":{"ax":[],"v":[]},"be8":{"aC":[]},"be_":{"aC":[]},"be6":{"ah":["a_6"]},"aIA":{"aC":[]},"bju":{"aC":[]},"bcg":{"ax":[],"v":[]},"alU":{"ag":[],"v":[]},"alV":{"ah":["alU"]},"bp2":{"aC":[]},"aWv":{"aC":[]},"ak6":{"ag":[],"v":[]},"auQ":{"ag":[],"v":[]},"ayN":{"ag":[],"v":[]},"ak7":{"ah":["ak6"]},"bcW":{"aC":[]},"QF":{"ax":[],"v":[]},"aBw":{"aC":[]},"auR":{"ah":["auQ"]},"bcp":{"aC":[]},"ayO":{"ah":["ayN"]},"am2":{"ag":[],"v":[]},"am0":{"ag":[],"v":[]},"alX":{"ag":[],"v":[]},"am3":{"ah":["am2"]},"bt5":{"aC":[]},"am1":{"ah":["am0"]},"bjC":{"aC":[]},"alY":{"ah":["alX"]},"bj1":{"aC":[]},"Wg":{"ag":[],"v":[]},"alZ":{"ag":[],"v":[]},"TW":{"ag":[],"v":[]},"a6v":{"ax":[],"v":[]},"bj8":{"aC":[]},"tF":{"ax":[],"v":[]},"Is":{"ax":[],"v":[]},"blU":{"ah":["Wg"]},"am_":{"ah":["alZ"]},"alW":{"ah":["TW"]},"ar0":{"ag":[],"v":[]},"aqV":{"ag":[],"v":[]},"a0a":{"ag":[],"v":[]},"aee":{"ax":[],"v":[]},"aF7":{"ah":["ar0"]},"aF4":{"ah":["aqV"]},"bgD":{"ax":[],"v":[]},"bgG":{"aC":[]},"bkt":{"ax":[],"v":[]},"bfI":{"aC":[]},"byr":{"ax":[],"v":[]},"bnM":{"ax":[],"v":[]},"aDx":{"ah":["a0a"]},"aed":{"ax":[],"v":[]},"bks":{"ax":[],"v":[]},"aec":{"ax":[],"v":[]},"bkr":{"ax":[],"v":[]},"aDy":{"ax":[],"v":[]},"aJJ":{"ax":[],"v":[]},"Gx":{"ax":[],"v":[]},"aqZ":{"ag":[],"v":[]},"a0u":{"ag":[],"v":[]},"a0v":{"ag":[],"v":[]},"aF6":{"ah":["aqZ"]},"bgE":{"ax":[],"v":[]},"adt":{"ax":[],"v":[]},"bgC":{"ax":[],"v":[]},"bgH":{"ax":[],"v":[]},"aF5":{"ah":["a0u"]},"blV":{"ah":["a0v"]},"b_F":{"ax":[],"v":[]},"a7h":{"ag":[],"v":[]},"blB":{"ah":["a7h"]},"blA":{"aC":[]},"au2":{"ax":[],"v":[]},"a_8":{"ag":[],"v":[]},"a_7":{"ag":[],"v":[]},"ZF":{"ag":[],"v":[]},"a2h":{"ag":[],"v":[]},"aAh":{"ah":["a_8"]},"aAg":{"ah":["a_7"]},"az0":{"ah":["ZF"]},"byj":{"ah":["a2h"]},"Gl":{"ag":[],"v":[]},"ayU":{"ag":[],"v":[]},"byh":{"ah":["Gl"]},"byi":{"ah":["ayU"]},"byg":{"aC":[]},"au1":{"ag":[],"v":[]},"aGA":{"ah":["au1"]},"aez":{"ax":[],"v":[]},"atW":{"ag":[],"v":[]},"au0":{"ag":[],"v":[]},"bnh":{"ah":["atW"]},"aGz":{"ah":["au0"]},"OY":{"ag":[],"v":[]},"aGB":{"ah":["OY"],"eB":[]},"baH":{"jf":[],"fi":[]}}'))
A.Di(b.typeUniverse,JSON.parse('{"afF":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aT6"),cq:w("mg"),Q:w("rn"),r:w("bu<n,n>"),c5:w("aV5"),dY:w("aV6"),fH:w("ML"),de:w("akO"),dN:w("MT<G>"),gc:w("Em<G>"),A:w("eI<n?>"),e:w("Iq"),B:w("nw"),P:w("hV"),df:w("lr"),k:w("kT"),x:w("aB<~>"),U:w("O<SS>"),V:w("O<ac>"),C:w("O<rn>"),O:w("O<u>"),c:w("O<ML>"),b:w("O<akO>"),ac:w("O<eI<n?>>"),I:w("O<nw>"),u:w("O<hV>"),J:w("O<lr>"),_:w("O<kT>"),cl:w("O<aB<ai<a8<n,@>>>>"),R:w("O<nz>"),eU:w("O<ai<+(F,F)>>"),ez:w("O<a8<n,aE>>"),gE:w("O<a8<n,n>>"),Y:w("O<a8<n,@>>"),fD:w("O<mP>"),bp:w("O<oG>"),g:w("O<o>"),ar:w("O<aue>"),v:w("O<fT>"),gy:w("O<a9X>"),L:w("O<+(n,n)>"),G:w("O<+(F,F)>"),E:w("O<+(F,~())>"),bd:w("O<+(n,G,P)>"),bF:w("O<+count,id,name(G,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j2>"),dT:w("O<bav>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<lC>"),h:w("O<aA0>"),cC:w("O<bhM>"),fp:w("O<KN>"),M:w("O<KU>"),gZ:w("O<aIF>"),gA:w("O<afK>"),e4:w("O<afR>"),dE:w("O<aKH>"),f7:w("O<P>"),n:w("O<F>"),t:w("O<G>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cw<ah<ag>>"),d:w("ai<nw>"),do:w("ai<hV>"),cg:w("ai<lr>"),ax:w("ai<kT>"),fO:w("ai<a8<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(G,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lC>"),j:w("ai<@>"),fK:w("bB<n,n>"),d2:w("bB<n,ai<a8<n,@>>>"),a:w("a8<n,@>"),f:w("a8<@,@>"),gv:w("N<n,It>"),cM:w("N<G,n>"),w:w("iC"),g2:w("rL"),bV:w("apE"),fL:w("cr"),K:w("aE"),dc:w("fT"),fo:w("Pj<G>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(P,G)"),d9:w("+dx,hidden(F,ai<hV>)"),cs:w("+count,id,name(G,n,n)"),N:w("n"),fT:w("iu<hV>"),ec:w("iu<n>"),gW:w("r3<F>"),X:w("br<F>"),bW:w("dK"),W:w("bJ<n>"),b4:w("bJ<G>"),cI:w("k1<n>"),av:w("Y<zE>"),cc:w("Y<n>"),l:w("v"),gF:w("fi"),fA:w("lC"),dO:w("GB"),bw:w("aec<n?>"),cy:w("KW"),q:w("mz"),y:w("P"),i:w("F"),z:w("@"),S:w("G"),eK:w("ai<kT>?"),m:w("aqY?"),cT:w("o?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,G)?"),he:w("+qrPayload,token,usesRemaining(n,n,G)?"),gG:w("+members,trees,viewOnly(G,G,P)?"),az:w("qj?"),T:w("n?"),aD:w("dK?"),o:w("lC?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b4r=new A.be(B.fL,B.bI,B.fL,B.bI)
D.adO=new A.be(B.fL,B.il,B.fL,B.il)
D.b4F=new A.be(B.iy,B.bI,B.bI,B.bI)
D.b4J=new A.ay(B.cG,1.4,B.r,-1)
D.b4T=new A.ay(B.ab,1,B.r,-1)
D.aei=new A.aY(140,1/0,0,1/0)
D.b6h=new A.aY(0,1/0,64,1/0)
D.b6l=new A.aY(0,84,0,1/0)
D.aep=new A.aY(130,1/0,0,1/0)
D.aCF=w([B.m7,B.rI,B.c],x.O)
D.c7j=new A.a9(B.aA,B.aF,B.x,D.aCF,null,null)
D.b75=new A.p(null,null,null,null,null,D.c7j,B.n)
D.dey=w([B.aY,B.bR],x.O)
D.c9o=new A.a9(B.b7,B.ba,B.x,D.dey,null,null)
D.b7q=new A.p(null,null,null,null,null,D.c9o,B.n)
D.Ye=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fy=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.diy=w([B.dx,D.Ye,D.fy],x.O)
D.c6w=new A.a9(B.b7,B.ba,B.x,D.diy,null,null)
D.b8a=new A.p(null,null,null,null,null,D.c6w,B.n)
D.fqQ=new A.H(!0,B.bW,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h11=new A.B("?",null,D.fqQ,null,null,null,null,null,null,null,null,null)
D.bbO=new A.cg(B.A,null,null,D.h11,null)
D.VS=new A.H(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK0=new A.B("\ud83c\udf33",null,D.VS,null,null,null,null,null,null,null,null,null)
D.af8=new A.cg(B.A,null,null,D.fK0,null)
D.fME=new A.B("\ud83c\udfc6",null,At.KE,null,null,null,null,null,null,null,null,null)
D.bbZ=new A.cg(B.A,null,null,D.fME,null)
D.bdP=new A.fk(null,null,null,null,null,E.ko,null,null,null,null)
D.afa=new A.cg(B.A,null,null,D.bdP,null)
D.kO=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fro=new A.H(!0,D.kO,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLH=new A.B("No books on the shelf yet.",null,D.fro,null,null,null,null,null,null,null,null,null)
D.erH=new A.D(B.nH,D.fLH,null)
D.bce=new A.cg(B.A,null,null,D.erH,null)
D.fyn=new A.H(!0,D.fy,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1W=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fyn,null,null,null,null,null,null,null,null,null)
D.esh=new A.D(B.cm,D.h1W,null)
D.bcH=new A.cg(B.A,null,null,D.esh,null)
D.aWD=new A.B("\ud83e\uddfa",null,D.VS,null,null,null,null,null,null,null,null,null)
D.bcW=new A.cg(B.A,null,null,D.aWD,null)
D.fP8=new A.B("\ud83c\udfad",null,D.VS,null,null,null,null,null,null,null,null,null)
D.bd7=new A.cg(B.A,null,null,D.fP8,null)
D.bda=new A.cg(B.A,null,null,A8.Y2,null)
D.afv=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.afD=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bfo=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bft=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bfF=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bfI=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bfK=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bfS=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lD=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bfW=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bg0=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bg1=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bg2=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lE=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bgD=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Bx=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bgM=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bh5=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bh8=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bhe=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bhm=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.age=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bht=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Yq=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.agh=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bhF=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Ys=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bi_=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.agt=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bio=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.biE=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.bj1=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.bjb=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FM=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bjx=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bjz=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bjD=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.agV=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bjX=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bk2=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bk8=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.agZ=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bkg=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bkI=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bkQ=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bkS=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bkX=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ahe=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.blz=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ahD=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bmw=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ahQ=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bmV=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.FZ=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bn0=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bna=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bnc=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ahV=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bnv=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bnw=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bnz=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ai1=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Z8=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bnW=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bog=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bol=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.aic=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bos=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Zf=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.boL=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.boM=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.G5=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bpy=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bqc=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bqi=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bqm=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qi=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bqx=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bqB=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bqH=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bqJ=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aiZ=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aj2=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.Gb=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.Zy=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.ajb=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.brQ=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.bs8=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bsx=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bsG=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ajB=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.ZI=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bsP=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bt6=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.ZM=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.btk=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.btA=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.ZR=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.btF=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ajT=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ajV=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.btY=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ak0=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.bup=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.but=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.buz=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.buF=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.buN=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.bvl=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bvR=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fFT=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.bzn=new A.eI(null,D.fFT,B.fc,null,x.A)
D.fP_=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.bzp=new A.eI(null,D.fP_,B.fc,null,x.A)
D.akV=new A.bd(3e4)
D.bzX=new A.bd(38e5)
D.bAH=new A.ik(0,10,0,10)
D.bAQ=new A.R(0,1,0,0)
D.bB0=new A.ik(0,4,0,4)
D.bB3=new A.R(0,4,5,0)
D.bBk=new A.R(10,10,14,10)
D.bBw=new A.ik(10,4,10,4)
D.bBE=new A.ik(10,8,10,8)
D.bBF=new A.R(10,8,8,8)
D.bC7=new A.R(12,6,12,2)
D.bCn=new A.R(14,0,14,6)
D.bCr=new A.R(14,10,6,6)
D.bCs=new A.R(14,12,14,0)
D.bCw=new A.R(14,12,14,8)
D.bCz=new A.R(14,12,8,14)
D.bCD=new A.ik(14,14,14,14)
D.bCV=new A.R(14,6,14,40)
D.bCY=new A.R(14,8,14,30)
D.bDl=new A.R(16,2,16,10)
D.bDv=new A.R(16,6,16,30)
D.bDx=new A.R(16,6,16,8)
D.bDM=new A.R(18,10,18,4)
D.bDO=new A.R(18,12,18,0)
D.bDV=new A.R(18,14,12,4)
D.amn=new A.R(18,16,18,8)
D.bEb=new A.R(18,20,18,22)
D.bEh=new A.R(18,30,18,30)
D.bEz=new A.R(20,10,12,20)
D.bEC=new A.R(20,11,20,11)
D.bEN=new A.R(20,18,16,18)
D.bEP=new A.R(20,18,20,6)
D.bFE=new A.R(24,32,24,28)
D.bFF=new A.R(24,36,24,32)
D.bFJ=new A.R(26,26,24,14)
D.bFY=new A.R(2,4,2,8)
D.bG1=new A.R(30,0,30,0)
D.bGc=new A.R(38,22,22,22)
D.amK=new A.R(40,24,24,24)
D.bGe=new A.ik(40,40,40,40)
D.bGg=new A.R(46,30,30,30)
D.amN=new A.R(4,0,0,8)
D.bGH=new A.R(56,40,40,40)
D.bGL=new A.R(1.25,1.25,1.25,1.25)
D.bGM=new A.R(60,0,60,0)
D.bGQ=new A.R(6,14,6,16)
D.bGU=new A.R(6,4,12,0)
D.bGY=new A.R(6,6,10,2)
D.bH4=new A.ik(7,3,7,3)
D.bHD=new A.R(5,1.5,5,1.5)
D.bHO=new A.R(6,2.5,6,2.5)
D.fXc=new A.B("Family Games",null,B.jN,null,null,null,null,null,null,null,null,null)
D.fEv=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,K.aba,null,null,null,null,null,null,null,null,null)
D.cIs=w([D.fXc,D.fEv],x.p)
D.bwT=new A.fj(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.cIs,null)
D.bId=new A.bz(1,B.bd,D.bwT,null)
D.h0y=new A.B("Signature",null,B.nh,null,null,null,null,null,null,null,null,null)
D.bIg=new A.bz(1,B.bd,D.h0y,null)
D.fTM=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,P.tF,null,null,null,null,null,null,null,null,null)
D.bIO=new A.bz(1,B.bd,D.fTM,null)
D.fYF=new A.B("Tell the AI what to fix",null,B.di,null,null,null,null,null,null,null,null,null)
D.bJ4=new A.bz(1,B.bd,D.fYF,null)
D.fz9=new A.H(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_D=new A.B("Worksheets",null,D.fz9,null,null,null,null,null,null,null,null,null)
D.fzk=new A.H(!0,E.afZ,null,null,null,null,13,B.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZu=new A.B("Track your project spending",null,D.fzk,null,null,null,null,null,null,null,null,null)
D.d5Z=w([D.h_D,B.ay,D.fZu],x.p)
D.bww=new A.fj(B.ah,B.e,B.j,B.E,null,B.p,null,0,D.d5Z,null)
D.bJa=new A.bz(1,B.bd,D.bww,null)
D.fu8=new A.H(!0,E.ko,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF4=new A.B("FAMILY LIBRARY",null,D.fu8,null,null,null,null,null,null,null,null,null)
D.bJs=new A.bz(1,B.bd,D.fF4,null)
D.OI=new C.Iq("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wp=new C.Ir(0,"male")
D.ot=new C.Ir(1,"female")
D.yX=new C.Ir(2,"unknown")
D.uC=new C.am4(0,"owner")
D.OJ=new C.am4(1,"editor")
D.kX=new C.am4(2,"viewer")
D.aoH=new A.a_(61199,"MaterialIcons",!1)
D.bOJ=new A.a_(61504,"MaterialIcons",!1)
D.bOK=new A.a_(61505,"MaterialIcons",!1)
D.bOM=new A.a_(61587,"MaterialIcons",!1)
D.bOT=new A.a_(61890,"MaterialIcons",!1)
D.bPL=new A.a_(63034,"MaterialIcons",!0)
D.bQ2=new A.a_(63153,"MaterialIcons",!1)
D.bQz=new A.a_(63429,"MaterialIcons",!1)
D.aqS=new A.a_(984520,"MaterialIcons",!1)
D.bPh=new A.a_(62776,"MaterialIcons",!1)
D.bSU=new A.ae(D.bPh,26,B.b1,null,null,null)
D.bNH=new A.a_(57648,"MaterialIcons",!1)
D.bTd=new A.ae(D.bNH,14,B.c,null,null,null)
D.bTu=new A.ae(B.Hl,17,null,null,null,null)
D.bTA=new A.ae(B.a2f,null,B.bR,null,null,null)
D.bU0=new A.ae(E.a2n,null,null,null,null,null)
D.bU3=new A.ae(B.j3,18,E.ko,null,null,null)
D.a25=new A.a_(62044,"MaterialIcons",!1)
D.bU8=new A.ae(D.a25,null,B.aY,null,null,null)
D.bUf=new A.ae(B.z9,18,B.c,null,null,null)
D.bUZ=new A.ae(B.ed,16,null,null,null,null)
D.bV6=new A.ae(D.a25,32,B.aY,null,null,null)
D.bVq=new A.ae(E.aoI,18,B.cG,null,null,null)
D.bWv=new A.ae(B.Hv,22,B.av,null,null,null)
D.bWH=new A.ae(B.ed,22,B.b1,null,null,null)
D.bWU=new A.ae(Z.a2a,22,B.c,null,null,null)
D.bX_=new A.ae(B.uN,52,B.c,null,null,null)
D.bX9=new A.ae(B.Hv,30,B.av,null,null,null)
D.bXs=new A.ae(B.a2s,null,B.c,null,null,null)
D.arz=new A.ae(B.uV,22,B.c,null,null,null)
D.bXB=new A.ae(B.ed,17,null,null,null,null)
D.bXY=new A.ae(B.wF,26,B.cG,null,null,null)
D.bYJ=new A.ae(B.a2A,16,null,null,null,null)
D.bZu=new A.ae(B.uN,24,B.c,null,null,null)
D.bZz=new A.ae(B.Pb,20,B.tg,null,null,null)
D.bZE=new A.ae(B.Hj,null,B.bR,null,null,null)
D.bZM=new A.ae(B.j3,18,B.c,null,null,null)
D.c_r=new A.ae(B.cz,22,B.ab,null,null,null)
D.c0h=new A.ae(B.ei,16,B.ab,null,null,null)
D.c0t=new A.ae(D.a25,20,B.aY,null,null,null)
D.arZ=new A.ae(B.hI,20,null,null,null,null)
D.c0Y=new A.ae(B.cz,18,D.kO,null,null,null)
D.c1e=new A.ae(B.zg,28,B.c,null,null,null)
D.c1o=new A.ae(B.P1,null,B.fh,null,null,null)
D.c1I=new A.ae(B.zg,24,B.c,null,null,null)
D.c29=new A.ae(B.uN,null,B.aY,null,null,null)
D.c2a=new A.ae(B.k5,20,B.cG,null,null,null)
D.c2u=new A.ae(B.Hl,16,null,null,null,null)
D.c42=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.k1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eK,!0,null,null,null,null)
D.asH=new C.a6v(10,null)
D.c4y=new C.a6v(12,null)
D.c4z=new C.a6v(14,null)
D.dmG=w([B.bx,B.aY,B.fo,B.b1],x.O)
D.c5K=new A.a9(B.aA,B.aF,B.x,D.dmG,null,null)
D.bpk=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bvs=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d2s=w([D.bpk,D.bvs],x.O)
D.c5V=new A.a9(B.b7,B.ba,B.x,D.d2s,null,null)
D.dgz=w([B.eV,B.fR,B.fo],x.O)
D.c6_=new A.a9(B.aA,B.aF,B.x,D.dgz,null,null)
D.aiN=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bg3=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d4H=w([D.aiN,D.bg3],x.O)
D.c6x=new A.a9(B.b7,B.ba,B.x,D.d4H,null,null)
D.bjN=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aBV=w([D.bjN,D.aiN],x.O)
D.c6R=new A.a9(B.aA,B.aF,B.x,D.aBV,null,null)
D.ahw=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.bmn=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.dfD=w([D.ahw,D.bmn],x.O)
D.c7u=new A.a9(B.a6,B.aa,B.x,D.dfD,null,null)
D.dtE=w([B.bC,B.mQ],x.O)
D.c7w=new A.a9(B.b7,B.ba,B.x,D.dtE,null,null)
D.bpf=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.duB=w([D.bpf,D.kO,D.kO,I.N8],x.O)
D.dx6=w([0,0.07,0.9,1],x.n)
D.c80=new A.a9(B.a6,B.aa,B.x,D.duB,D.dx6,null)
D.c89=new A.a9(B.aA,B.aF,B.x,B.SQ,null,null)
D.d0e=w([B.aE,D.lD],x.O)
D.c8c=new A.a9(B.a6,B.aa,B.x,D.d0e,null,null)
D.dtc=w([B.b1,B.aY,B.bR],x.O)
D.c99=new A.a9(B.aA,B.aF,B.x,D.dtc,null,null)
D.cdr=w([10,20,30],x.t)
D.cno=w([-1,-0.4,0.3,1],x.n)
D.cuR=w([B.bx,B.b1,B.eV],x.O)
D.cv_=w([B.br,B.aE,B.kn],x.O)
D.cv1=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cvK=w([30,140,262,360],x.n)
D.bnF=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cBi=w([D.bnF,E.ail],x.O)
D.emi=new A.o(1,2)
D.fc9=new A.cU(B.aU,D.emi,3)
D.ayQ=w([D.fc9],x.F)
D.cIK=w([B.hp,B.ch,B.fn],x.O)
D.cLu=w([B.bK,B.bv,B.bp],x.O)
D.bKi=new C.uQ("classic","Classic leather","Gold-edged brown leather",D.aBV,E.ko,E.ko,"\u2766",B.K,!0,!1,!1,!1)
D.bf8=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.buf=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d7G=w([D.bf8,D.buf],x.O)
D.aiq=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bKd=new C.uQ("ornate","Ornate gold","Double gold border and flourishes",D.d7G,D.aiq,D.aiq,"\u2726",B.K,!0,!0,!0,!1)
D.bjl=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bq6=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.d_9=w([D.bjl,D.bq6],x.O)
D.bKc=new C.uQ("parchment","Parchment","Old paper with dark ink",D.d_9,D.G5,L.iY,"\u2767",B.K,!0,!1,!1,!0)
D.afF=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bsu=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.drr=w([D.afF,D.bsu],x.O)
D.bn7=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.brL=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bKf=new C.uQ("minimal","Clean paper","Plain and elegant, like a printed book",D.drr,D.bn7,D.brL,"",B.K,!0,!0,!1,!0)
D.bKh=new C.uQ("midnight","Midnight","Deep blue with silver stars",K.aCe,B.cu,B.bO,"\u2727",B.K,!0,!0,!1,!1)
D.bKb=new C.uQ("emerald","Emerald library","Green cloth, title on the left",W.aze,E.ko,B.h_,"\u25c6",B.bn,!0,!1,!1,!1)
D.bsZ=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.dps=w([B.ek,D.bsZ],x.O)
D.bor=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bpF=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bKg=new C.uQ("rose","Rose vintage","Burgundy with rose-gold lettering",D.dps,D.bor,D.bpF,"\u2740",B.K,!0,!1,!0,!1)
D.dub=w([B.cq,B.m8],x.O)
D.bKe=new C.uQ("modern","Modern","Dark, bold, left-aligned",D.dub,B.aH,B.c,"",B.bn,!1,!0,!1,!1)
D.a4G=w([D.bKi,D.bKd,D.bKc,D.bKf,D.bKh,D.bKb,D.bKg,D.bKe],A.as("O<uQ>"))
D.cOr=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dtZ=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bKt=new C.lr('What does "Ubuntu" mean?',D.dtZ,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d0U=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bKw=new C.lr("In Swahili, what do we call a grandmother?",D.d0U,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d0L=w(["Babu","Mama","Baba","Dada"],x.s)
D.bKr=new C.lr("In Swahili, what do we call a grandfather?",D.d0L,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d22=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bKv=new C.lr("What is a sister called in Swahili?",D.d22,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d77=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bKs=new C.lr("What is a brother called in Swahili?",D.d77,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d0K=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bKD=new C.lr("Which word means father in Swahili?",D.d0K,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.dva=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bKC=new C.lr('"Umoja ni nguvu" means...',D.dva,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.ds7=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bKE=new C.lr('"Haba na haba hujaza kibaba" teaches us...',D.ds7,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d4P=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bKB=new C.lr('The African saying "It takes a village to raise a child" means...',D.d4P,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.dvu=w(["The elders","The market","The river","The drum"],x.s)
D.bKx=new C.lr("Who is the traditional keeper of the family stories?",D.dvu,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cSC=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bKu=new C.lr("Why do families sit round the fire at night?",D.cSC,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dud=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bKz=new C.lr('What does "Harambee" mean?',D.dud,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d9W=w(["An elder","A baby","A market","A cow"],x.s)
D.bKy=new C.lr('"Mzee" is a respectful word for...',D.d9W,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.dpj=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bKA=new C.lr('What does "Shikamoo" show?',D.dpj,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.az9=w([D.bKt,D.bKw,D.bKr,D.bKv,D.bKs,D.bKD,D.bKC,D.bKE,D.bKB,D.bKx,D.bKu,D.bKz,D.bKy,D.bKA],x.J)
D.cX_=w([90,360],x.n)
D.cZH=w([B.bR,B.bl],x.O)
D.bp3=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.d_l=w([D.afF,D.bp3],x.O)
D.d_Y=w([-1,-0.3,0.4,1],x.n)
D.d0Q=w([0,0.45,0.72,0.92,1],x.n)
D.bjh=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d17=w([D.bjh,B.dh],x.O)
D.bh0=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ak9=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d1G=w([B.dx,D.bh0,D.ak9],x.O)
D.d2J=w([B.bb,B.ji,B.p9],x.O)
D.bjP=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.brC=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bgH=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d2O=w([D.bjP,D.brC,D.bgH],x.O)
D.d38=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d3i=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.huD=new C.adS(78,424,48,44,56)
D.huB=new C.adS(214,396,34,34,42)
D.huC=new C.adS(442,452,56,50,64)
D.aA7=w([D.huD,D.huB,D.huC],A.as("O<adS>"))
D.d3R=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bfY=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bly=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dx2=w([D.ahw,D.bfY,D.bly],x.O)
D.bKj=new C.uR("leather","Leather",D.dx2,"vintage")
D.daX=w([B.d6,B.FX,Aa.YG],x.O)
D.bKq=new C.uR("midnight","Midnight",D.daX,"starry")
D.d2K=w([B.eq,B.e5,B.lh],x.O)
D.bKp=new C.uR("forest","Forest",D.d2K,"story")
D.dz3=w([B.er,B.ek,B.kq],x.O)
D.bKm=new C.uR("burgundy","Burgundy",D.dz3,"royal")
D.cL2=w([B.aE,B.oi,B.o6],x.O)
D.bKn=new C.uR("royal","Royal",D.cL2,"royal")
D.d5k=w([B.bv,B.cq,B.m8],x.O)
D.bKk=new C.uR("charcoal","Charcoal",D.d5k,"geo")
D.dxb=w([B.ca,B.dK,B.ya],x.O)
D.bKo=new C.uR("sunset","Sunset",D.dxb,"sunset")
D.dxT=w([B.ji,B.G6,B.YJ],x.O)
D.bKl=new C.uR("ocean","Ocean",D.dxT,"band")
D.zM=w([D.bKj,D.bKq,D.bKp,D.bKm,D.bKn,D.bKk,D.bKo,D.bKl],A.as("O<uR>"))
D.d5P=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d6q=w([B.an,B.aM,B.T],x.O)
D.d7L=w([B.ek,B.e5,B.d6,B.h9,B.ye,B.cG,B.kr,B.e6,B.cZ],x.O)
D.d7M=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.fca=new A.cU(B.ds,B.dG,8)
D.d7X=w([D.fca],x.F)
D.d92=w([B.bT,B.dK,B.km],x.O)
D.bhT=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.blQ=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bq1=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d9i=w([D.bhT,G.aiW,D.blQ,D.bq1,D.ak9],x.O)
D.d9z=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d9L=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.bfj=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.blc=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.dad=w([D.bfj,D.agZ,D.blc],x.O)
D.daS=w([B.bT,B.hD],x.O)
D.daY=w([G.np,B.ia,G.afQ,B.cO],x.O)
D.dcx=w([B.cO,G.np,B.ia,D.lE,B.cO],x.O)
D.dd8=w([B.aV,B.w3,B.xZ],x.O)
D.aB8=w(["True","False"],x.s)
D.eJC=new A.y(-0.65,0.6)
D.eWk=new A.y(-0.2,0.95)
D.eXp=new A.y(0.25,0.95)
D.eN6=new A.y(0.7,0.6)
D.eXZ=new A.y(1,0.1)
D.ddV=w([Au.UD,D.eJC,D.eWk,D.eXp,D.eN6,D.eXZ],x.G)
D.bnX=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.bu7=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.biT=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.de0=w([D.bnX,D.bu7,D.biT],x.O)
D.de4=w([B.bN,B.c0,B.dl,B.aV],x.O)
D.dez=w([B.hT,B.ca,B.rz],x.O)
D.deX=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.df8=w([B.eV,B.cG],x.O)
D.bpo=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.dfy=w([D.bpo,D.afD],x.O)
D.dfJ=w([B.cF,B.fp,B.hE],x.O)
D.dfU=w([B.aH,B.bl,B.d6],x.O)
D.dgw=w([B.ev,B.cX,B.e5],x.O)
D.dgQ=w([B.dJ,B.d6,B.FX],x.O)
D.dgU=w([B.bh,B.mL,B.cZ],x.O)
D.dhb=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.boC=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bmR=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dhv=w([D.boC,D.agV,D.bmR],x.O)
D.dij=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.djm=w([1,0,7,6,3,2],x.t)
D.a5E=w(["leather","linen","plain","stars","rays"],x.s)
D.djy=w([0.5,2,3.6],x.n)
D.dk5=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bSA=new A.a_(985219,"MaterialIcons",!1)
D.bS7=new A.a_(983781,"MaterialIcons",!1)
D.aBB=w([B.a2f,B.hJ,B.lP,B.ie,D.bSA,B.HG,B.qH,D.bS7,K.aqG,B.CU,B.qJ,B.mj],A.as("O<a_>"))
D.a5I=w(["double","single","corners","none"],x.s)
D.bK8=new C.zE("Little Seed","\ud83c\udf31",0)
D.bKa=new C.zE("Young Listener","\ud83d\udc42",40)
D.bK9=new C.zE("Storyteller","\ud83e\ude98",120)
D.bK7=new C.zE("Village Pride","\ud83c\udfe1",300)
D.bK5=new C.zE("Keeper of Roots","\ud83c\udf33",700)
D.bK6=new C.zE("Elder of the Fire","\ud83d\udd25",1500)
D.aBD=w([D.bK8,D.bKa,D.bK9,D.bK7,D.bK5,D.bK6],A.as("O<zE>"))
D.dle=w([B.db,B.bq,B.e6],x.O)
D.dlu=w([],x.C)
D.Dv=w([],x.u)
D.aLI=new A.o(225,528)
D.eLi=new A.y(D.aLI,1)
D.en2=new A.o(350,548)
D.eRC=new A.y(D.en2,0.95)
D.aLD=new A.o(158,656)
D.eRv=new A.y(D.aLD,1.12)
D.enO=new A.o(92,544)
D.eGP=new A.y(D.enO,0.93)
D.en5=new A.o(398,614)
D.eNt=new A.y(D.en5,1.04)
D.emU=new A.o(318,662)
D.eCg=new A.y(D.emU,1.1)
D.a5Q=w([D.eLi,D.eRC,D.eRv,D.eGP,D.eNt,D.eCg],A.as("O<+(o,F)>"))
D.dnx=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dnZ=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dp0=w([B.cO,G.np,B.ia,D.lE,B.cO,B.ia],x.O)
D.dqr=w([B.aw,B.fp,B.h9],x.O)
D.dr2=w([-70,58],x.n)
D.dr4=w([-70,-30,20],x.n)
D.ds5=w([B.bh,B.mL,B.Gh],x.O)
D.dsm=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dMk=new C.lV("construction","Construction","Jobsite & builds",B.uK)
D.dMr=new C.lV("house","Home Build","Houses & rooms",B.wA)
D.dMh=new C.lV("grocery","Grocery","Store & pantry",B.a39)
D.dMg=new C.lV("calculator","Calculations","Math & estimates",B.Pi)
D.dMp=new C.lV("lumber","Materials","Lumber & supplies",B.PC)
D.dMd=new C.lV("kitchen","Kitchen","Remodel & meals",A3.PD)
D.bS5=new A.a_(983756,"MaterialIcons",!1)
D.dMi=new C.lV("landscape","Landscaping","Yard & garden",D.bS5)
D.dMc=new C.lV("plumbing","Plumbing","Pipes & water",B.pz)
D.dMs=new C.lV("electrical","Electrical","Wiring & power",B.hw)
D.dMa=new C.lV("store","Retail Shop","Daily business",B.ln)
D.dMb=new C.lV("paint_remodel","Paint & Remodel","Colors & walls",A3.Px)
D.bRw=new A.a_(983311,"MaterialIcons",!1)
D.dMo=new C.lV("roofing","Roofing","Roofs & exteriors",D.bRw)
D.bSi=new A.a_(983986,"MaterialIcons",!1)
D.dM9=new C.lV("warehouse","Warehouse","Storage & stock",D.bSi)
D.dMm=new C.lV("vehicles","Vehicles","Fleet & transport",B.HH)
D.bPj=new A.a_(62785,"MaterialIcons",!1)
D.dMf=new C.lV("farm","Farm","Crops & livestock",D.bPj)
D.dMe=new C.lV("restaurant","Restaurant","Food & catering",B.wJ)
D.dMl=new C.lV("tools","Tools","Workshop gear",B.HC)
D.dMq=new C.lV("wallet","Cash & Wallet","Quick spending",B.k5)
D.bQu=new A.a_(63395,"MaterialIcons",!1)
D.dMn=new C.lV("concrete","Concrete","Foundation work",D.bQu)
D.dMj=new C.lV("blueprint","Blueprint","Plans & design",Ao.apb)
D.a6d=w([D.dMk,D.dMr,D.dMh,D.dMg,D.dMp,D.dMd,D.dMi,D.dMc,D.dMs,D.dMa,D.dMb,D.dMo,D.dM9,D.dMm,D.dMf,D.dMe,D.dMl,D.dMq,D.dMn,D.dMj],A.as("O<lV>"))
D.dsT=w([B.bu,B.bq],x.O)
D.dtF=w([B.iB,B.od,B.dT],x.O)
D.ahK=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aiI=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bnb=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.beQ=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aCN=w([D.ahK,D.aiI,D.bnb,D.beQ],x.O)
D.duS=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a6o=w(["top","middle","bottom"],x.s)
D.dwh=w([B.co,B.bl,B.d6],x.O)
D.aD6=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b8D=new A.ac(0,B.G,B.aU,B.I,14)
D.aD9=w([D.b8D],x.V)
D.bm5=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dwW=w([D.age,D.ZI,D.bm5],x.O)
D.dwX=w([B.b5,B.cX,B.e5],x.O)
D.emD=new A.o(24,-8)
D.enl=new A.o(48,0)
D.emz=new A.o(24,6)
D.dyB=w([B.I,D.emD,D.enl,D.emz],x.g)
D.dz_=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.ej8={top:0,middle:1,bottom:2}
D.dCe=new A.bu(D.ej8,["Top","Middle","Bottom"],x.r)
D.eiJ={double:0,single:1,corners:2,none:3}
D.dCk=new A.bu(D.eiJ,["Double line","One line","Corners","None"],x.r)
D.ejZ={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dDQ=new A.bu(D.ejZ,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dE1=new A.bu(B.hZ,[],A.as("bu<G,+(n,n)>"))
D.ej0={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DI=new A.bu(D.ej0,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bu<n,G>"))
D.dGJ=new H.NP(32,null)
D.dGK=new H.NP(40,null)
D.dGL=new H.NP(46,null)
D.aLa=new C.au0(null)
D.elu=new A.o(0,40)
D.elv=new A.o(0,412)
D.elx=new A.o(0,900)
D.elH=new A.o(0,-34)
D.elI=new A.o(0,-46)
D.elK=new A.o(0,-74)
D.elN=new A.o(100,300)
D.elO=new A.o(10,14)
D.elR=new A.o(10,-10)
D.elW=new A.o(10,-46)
D.elX=new A.o(10,-58)
D.elY=new A.o(116,442)
D.em_=new A.o(11,-1)
D.em0=new A.o(11,-10)
D.em1=new A.o(11,-21)
D.aLy=new A.o(11,-60)
D.em8=new A.o(14,-2)
D.em9=new A.o(150,520)
D.a8n=new A.o(150,592)
D.emc=new A.o(15,-15)
D.emd=new A.o(16,-1)
D.emh=new A.o(190,444)
D.emk=new A.o(1,5)
D.ems=new A.o(21,-78)
D.emt=new A.o(222,615)
D.JA=new A.o(225,300)
D.a8q=new A.o(225,574)
D.emC=new A.o(24,-52)
D.emE=new A.o(250,210)
D.emP=new A.o(2,-56)
D.aLM=new A.o(300,0)
D.emQ=new A.o(300,440)
D.emT=new A.o(318,476)
D.emW=new A.o(324,144)
D.a8t=new A.o(332,150)
D.emY=new A.o(335,585)
D.emZ=new A.o(338,140)
D.en_=new A.o(340,158)
D.en1=new A.o(34,-60)
D.E8=new A.o(36,-24)
D.en3=new A.o(372,470)
D.en4=new A.o(390,455)
D.end=new A.o(42,468)
D.ene=new A.o(431,510)
D.enf=new A.o(431,520)
D.eng=new A.o(45,-92)
D.enh=new A.o(46,20)
D.eni=new A.o(46,-92)
D.enj=new A.o(46,-94)
D.enk=new A.o(47,-4)
D.enm=new A.o(48,-4)
D.enu=new A.o(4,-26)
D.enC=new A.o(60,455)
D.enJ=new A.o(8,14)
D.enN=new A.o(8,-76)
D.enP=new A.o(95,575)
D.enQ=new A.o(98,-24)
D.enS=new A.o(9,-2)
D.enT=new A.o(9,-58)
D.aLV=new A.o(9,-79)
D.enU=new A.o(9,-9)
D.eow=new A.o(16.5,8)
D.eoy=new A.o(3.2,0)
D.eoA=new A.o(-16.5,8)
D.eoH=new A.o(16.5,2)
D.eoK=new A.o(-3.2,0)
D.eoT=new A.o(9.5,6)
D.eoX=new A.o(-10,14)
D.eoY=new A.o(-10,-12)
D.eoZ=new A.o(-10,-58)
D.ep0=new A.o(-11,-1)
D.ep1=new A.o(-11,-10)
D.ep3=new A.o(-11,-60)
D.ep4=new A.o(-12,-14)
D.ep5=new A.o(-12,-16)
D.epc=new A.o(-14,-2)
D.epf=new A.o(-15,-15)
D.epg=new A.o(-15,-3)
D.epi=new A.o(-16,-1)
D.epz=new A.o(-24,-52)
D.epG=new A.o(-2,-34)
D.epH=new A.o(-2,-38)
D.epJ=new A.o(-30,-100)
D.a8u=new A.o(-36,-24)
D.epU=new A.o(-4,-26)
D.epW=new A.o(-4,-6)
D.eq5=new A.o(-8,-3)
D.eq6=new A.o(-8,-48)
D.eq9=new A.o(-9,-2)
D.eqb=new A.o(-9,-58)
D.eqc=new A.o(-9,-79)
D.eqd=new A.o(-9,-9)
D.eqf=new A.o(-9.5,6)
D.eqt=new A.o(-16.5,2)
D.fMk=new A.B("Write a new book",null,B.hl,null,B.K,null,null,null,null,null,null,null)
D.er2=new A.D(B.kt,D.fMk,null)
D.h06=new A.B("Tap to go on",null,B.vy,null,null,null,null,null,null,null,null,null)
D.ero=new A.D(B.li,D.h06,null)
D.ar7=new A.ae(B.hW,18,B.c,null,null,null)
D.fFp=new A.B("Add",null,B.kE,null,null,null,null,null,null,null,null,null)
D.dei=w([D.ar7,B.r6,D.fFp],x.p)
D.f9h=new A.c7(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.dei,null)
D.err=new A.D(B.nE,D.f9h,null)
D.ers=new A.D(E.alh,A8.Y2,null)
D.fz4=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIz=new A.B("New Project",null,D.fz4,null,null,null,null,null,null,null,null,null)
D.diG=w([D.ar7,B.ae,D.fIz],x.p)
D.f9k=new A.c7(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.diG,null)
D.erG=new A.D(B.iv,D.f9k,null)
D.fL7=new A.B("Choose your header",null,A1.vx,null,null,null,null,null,null,null,null,null)
D.es0=new A.D(B.hV,D.fL7,null)
D.be3=new A.fk(2.2,null,null,null,null,B.cG,null,null,null,null)
D.ff1=new A.a6(22,22,D.be3,null)
D.bc9=new A.cg(B.A,null,null,D.ff1,null)
D.es5=new A.D(B.a0_,D.bc9,null)
D.bCN=new A.R(14,2,14,6)
D.fZd=new A.B("The top of your book. Tap a design to see it.",null,B.pQ,null,null,null,null,null,null,null,null,null)
D.es6=new A.D(D.bCN,D.fZd,null)
D.fKf=new A.B("\ud83c\udfc6 A new record!",null,B.fY,null,null,null,null,null,null,null,null,null)
D.es8=new A.D(B.li,D.fKf,null)
D.etR=new A.j0(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.etU=new A.j0(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aMw=new A.j0(1,0.9607843137254902,0.48627450980392156,0)
D.JJ=new A.j0(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Am=new A.j0(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.eu_=new A.j0(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hwM=new C.bju(null)
D.bxF=new A.mF(D.hwM,null,B.az,null,null)
D.aQ9=new A.cL(0,0,0,0,null,null,D.bxF,null)
D.fFr=new A.B("\ud83c\udfc5",null,B.aaO,null,null,null,null,null,null,null,null,null)
D.eyo=new A.cL(null,0,-34,null,null,null,D.fFr,null)
D.eGu=new A.y("E","Sit by the fire again")
D.eM6=new A.y("C","Good Learner")
D.ePx=new A.y("D","Still Growing")
D.eU8=new A.y(-42,42)
D.eVt=new A.y("B","Faithful Listener")
D.eXr=new A.y("A","Keeper of the Family")
D.f_B=new A.b5(-17,0.7,0)
D.f0a=new A.b5(-8,0.95,1.3)
D.f1d=new A.b5(18,0.65,5.2)
D.f1f=new A.b5(0,1.15,2.6)
D.f1z=new A.b5(9,0.9,3.9)
D.f3q=new A.cu([0,0,1,1])
D.aRD=new A.a1(0,0,520,160)
D.f6k=new A.a1(10,612,440,618)
D.f6l=new A.a1(10,612,440,628)
D.f6o=new A.a1(14,-64,34,-12)
D.f6r=new A.a1(300,336,350,348)
D.a9o=new A.a1(30,96,420,346)
D.f6s=new A.a1(30,-9,46,1)
D.f6t=new A.a1(4,2,11,14)
D.f6v=new A.a1(-8,-12.5,8,-7)
D.f6w=new A.a1(-16.5,-21,16.5,1)
D.f6x=new A.a1(60,342,88,348)
D.UE=new A.a1(66,-66,94,-36)
D.f6y=new A.a1(6,8,10,14)
D.f6B=new A.a1(95,343,115,348)
D.f6C=new A.a1(-6.5,-74,6.5,-58)
D.f6I=new A.a1(-100,-74,100,-12)
D.f6J=new A.a1(-10,8,-6,14)
D.f6K=new A.a1(-11,2,-4,14)
D.f6L=new A.a1(-11,-70,11,-56)
D.f6S=new A.a1(-13,-24,13,-4)
D.f6Y=new A.a1(-15,-21,15,0)
D.f70=new A.a1(-16,-21,16,1)
D.f71=new A.a1(-16,-21,16,2)
D.f74=new A.a1(-16,-26,16,-6)
D.f7e=new A.a1(-230,-26,230,26)
D.f7C=new A.a1(-38,-26,12,-6)
D.f7G=new A.a1(-3,-70,3,-63)
D.f7H=new A.a1(-44,-22,44,0)
D.f7J=new A.a1(-46,-9,-30,1)
D.aRH=new A.a1(-80,-190,80,20)
D.f7Q=new A.a1(-8,-26,40,-6)
D.f7R=new A.a1(-98,-80,92,-75)
D.f7S=new A.a1(-9,-15,9,-9)
D.fYM=new A.B("Let the AI write it from your tree",null,B.iz,null,B.K,null,null,null,null,null,null,null)
D.bLa=new A.dq(1,B.cr,D.fYM,null)
D.daR=w([E.a3E,B.ae,D.bLa],x.p)
D.f8W=new A.c7(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.daR,null)
D.fF5=new A.B("Save member",null,B.cg,null,null,null,null,null,null,null,null,null)
D.dqN=w([D.arZ,B.ae,D.fF5],x.p)
D.f95=new A.c7(B.aL,B.bc,B.j,B.l,null,B.p,null,0,D.dqN,null)
D.bWN=new A.ae(B.id,14,B.b1,null,null,null)
D.fsH=new A.H(!0,B.b1,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIZ=new A.B("Cashier",null,D.fsH,null,null,null,null,null,null,null,null,null)
D.djc=w([D.bWN,B.bm,D.fIZ],x.p)
D.f99=new A.c7(B.aL,B.e,B.Q,B.l,null,B.p,null,0,D.djc,null)
D.fF6=new A.B("Transfer & settings",null,B.di,null,null,null,null,null,null,null,null,null)
D.bIV=new A.bz(1,B.bd,D.fF6,null)
D.d2b=w([D.arz,B.au,D.bIV],x.p)
D.f9a=new A.c7(B.aL,B.e,B.j,B.l,null,B.p,null,0,D.d2b,null)
D.fdI=new A.av(16,40)
D.fdN=new A.av(22,64)
D.fdU=new A.av(280,88)
D.feI=new A.a6(30,null,null,null)
D.fEb=new A.B("The teacher is writing\u2026",null,B.AH,null,null,null,null,null,null,null,null,null)
D.bdh=new A.cg(B.A,null,null,D.fEb,null)
D.hqG=new A.bJ("w",x.W)
D.ff7=new A.a6(null,56,D.bdh,D.hqG)
D.ffW=new A.hG(5,8,8,1,null)
D.fg3=new A.hG(2,12,12,1.05,null)
D.fIF=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.fgM=new A.b1(D.fIF,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fIU=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aTX=new A.b1(D.fIU,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fRm=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhf=new A.b1(D.fRm,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h19=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fhk=new A.b1(D.h19,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fL5=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fhr=new A.b1(D.fL5,null,null,null,null,null,null,null,null,null,null,null,null,B.h2,!1,null,null,null,B.t,null)
D.fZq=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aU0=new A.b1(D.fZq,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fL3=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fhR=new A.b1(D.fL3,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fFI=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fhT=new A.b1(D.fFI,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fOO=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fhZ=new A.b1(D.fOO,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h1T=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fiE=new A.b1(D.h1T,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fXG=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fj2=new A.b1(D.fXG,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h1d=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fj5=new A.b1(D.h1d,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fT1=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fj7=new A.b1(D.fT1,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fMY=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fj8=new A.b1(D.fMY,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fMZ=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fk8=new A.b1(D.fMZ,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fIH=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fkq=new A.b1(D.fIH,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fKI=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fkK=new A.b1(D.fKI,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fSs=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fl_=new A.b1(D.fSs,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fNO=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fl0=new A.b1(D.fNO,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fxM=new A.H(!0,B.bD,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmF=new A.en("\u2665",null,null,B.cJ,null,null,null,null,null,null,D.fxM)
D.fuZ=new A.H(!0,B.aP,null,null,null,null,28,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmV=new A.en("Today: how well do you know the family?",null,null,B.cJ,null,null,null,null,null,null,D.fuZ)
D.fnc=new A.H(!0,B.q6,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foj=new A.H(!0,D.kO,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foK=new A.H(!0,D.kO,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foO=new A.H(!0,B.cO,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foX=new A.H(!0,D.fy,null,null,null,null,15,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp7=new A.H(!0,D.fy,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpr=new A.t5(!0,B.tq,null,null,null,null,B.dD,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpH=new A.H(!0,B.cO,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpK=new A.H(!0,D.kO,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpL=new A.H(!0,B.cO,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpQ=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpT=new A.H(!0,B.cO,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqo=new A.H(!0,B.b1,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqp=new A.H(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqr=new A.H(!0,B.aP,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqT=new A.H(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVa=new A.H(!0,B.aS,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVc=new A.H(!0,D.lD,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frh=new A.H(!0,B.cO,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaT=new A.t5(!0,B.U9,null,null,null,null,B.dD,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vy=new A.H(!0,B.cO,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frr=new A.H(!0,B.T,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frw=new A.H(!0,D.fy,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frU=new A.H(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft2=new A.H(!0,D.fy,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVm=new A.H(!0,D.fy,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftl=new A.H(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftw=new A.H(!0,D.fy,null,null,null,null,null,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fty=new A.H(!0,null,null,null,null,null,8,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftE=new A.H(!0,L.iY,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVq=new A.H(!0,D.fy,null,null,null,null,14.5,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuz=new A.H(!0,D.fy,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuS=new A.H(!0,D.fy,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuU=new A.H(!0,B.T,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuW=new A.H(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvj=new A.H(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.Iz,null,null,null)
D.aVG=new A.H(!0,D.fy,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvH=new A.H(!0,B.T,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw2=new A.H(!0,B.fh,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwq=new A.H(!0,B.bR,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwu=new A.H(!0,B.bC,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwG=new A.H(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwJ=new A.H(!0,D.fy,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwR=new A.H(!0,D.G5,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx_=new A.H(!0,B.b1,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxp=new A.H(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxw=new A.H(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dl,null,null,null)
D.fxW=new A.H(!0,B.cO,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy4=new A.H(!0,B.cG,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyh=new A.H(!0,D.lE,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW_=new A.H(!0,D.fy,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KP=new A.H(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aW1=new A.H(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dl,null,null,null)
D.fyB=new A.H(!0,B.bR,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyF=new A.H(!0,G.np,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz2=new A.H(!0,B.b1,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzj=new A.H(!0,D.fy,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzG=new A.H(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA3=new A.H(!0,D.fy,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAx=new A.H(!0,D.fy,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAC=new A.H(!0,B.an,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAL=new A.H(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abn=new A.H(!0,B.an,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abp=new A.H(!0,D.lD,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCs=new A.H(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCK=new A.H(!0,B.aP,null,null,null,null,27,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCS=new A.H(!0,L.iY,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD_=new A.H(!0,L.iY,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDt=new A.B("Time:",null,B.hj,null,null,null,null,null,null,null,null,null)
D.fDP=new A.B("\ud83c\udfae",null,K.abe,null,null,null,null,null,null,null,null,null)
D.fDQ=new A.B("Themes",null,B.pO,null,null,null,null,null,null,null,null,null)
D.fEj=new A.B("\ud83c\udfb2",null,B.xk,null,null,null,null,null,null,null,null,null)
D.fEn=new A.B("Delete this game?",null,B.iz,null,null,null,null,null,null,null,null,null)
D.fEu=new A.B("Add Item",null,B.cg,null,null,null,null,null,null,null,null,null)
D.ftg=new A.H(!0,B.T,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEV=new A.B("Debt receipt",null,D.ftg,null,B.K,null,null,null,null,null,null,null)
D.aWf=new A.H(!0,B.an,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFd=new A.B("Person who owes",null,D.aWf,null,null,null,null,null,null,null,null,null)
D.fGa=new A.B("Notes",null,B.ab1,null,null,null,null,null,null,null,null,null)
D.fGB=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fsa=new A.H(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGE=new A.B("Share",null,D.fsa,null,null,null,null,null,null,null,null,null)
D.fHA=new A.B("Move your family trees",null,I.abl,null,null,null,null,null,null,null,null,null)
D.fIf=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fIT=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fJg=new A.B("SAVE",null,D.KP,null,null,null,null,null,null,null,null,null)
D.fJT=new A.B("The round button is the right answer.",null,T.xh,null,null,null,null,null,null,null,null,null)
D.fKe=new A.B("Remove this book?",null,B.fY,null,null,null,null,null,null,null,null,null)
D.fz_=new A.H(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dl,null,null,null)
D.fKN=new A.B("Fireside Stories",null,D.fz_,null,null,null,null,null,null,null,null,null)
D.aWM=new A.B("Download",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fLt=new A.B("What should the AI do?",null,B.di,null,null,null,null,null,null,null,null,null)
D.frP=new A.H(!0,D.lD,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLI=new A.B("REPORT CARD",null,D.frP,null,null,null,null,null,null,null,null,null)
D.fMr=new A.B("Calabash Catch",null,B.KS,null,null,null,null,null,null,null,null,null)
D.fMU=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fNl=new A.B("\ud83c\udfe1",null,B.EG,null,null,null,null,null,null,null,null,null)
D.fO2=new A.B("Ribbon bookmark",null,B.jx,null,null,null,null,null,null,null,null,null)
D.fAw=new A.H(!0,B.b1,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOx=new A.B("NGMY.ORG",null,D.fAw,null,B.K,null,null,null,null,null,null,null)
D.fPQ=new A.B("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fwK=new A.H(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQC=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fwK,null,B.K,null,null,null,null,null,null,null)
D.fRQ=new A.B("Delete",null,B.Vs,null,null,null,null,null,null,null,null,null)
D.fRR=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRY=new A.B("Thumbnail",null,B.pO,null,null,null,null,null,null,null,null,null)
D.fSy=new A.B("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fSD=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.xm,null,B.K,null,null,null,null,null,null,null)
D.fT2=new A.B("Your photos",null,B.pO,null,null,null,null,null,null,null,null,null)
D.fTi=new A.B("Create Project",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fTH=new A.B("\u2b50 stars",null,B.VE,null,null,null,null,null,null,null,null,null)
D.fTV=new A.B("Design your cover",null,A1.vx,null,null,null,null,null,null,null,null,null)
D.fU0=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fU3=new A.B("PICTURE",null,M.vC,null,null,null,null,null,null,null,null,null)
D.fU5=new A.B("\ud83c\udfaf",null,D.VS,null,null,null,null,null,null,null,null,null)
D.fUr=new A.B("Paid",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fUt=new A.B("You can undo it right after.",null,T.xh,null,null,null,null,null,null,null,null,null)
D.fV_=new A.B("Print",null,B.vz,null,null,null,null,null,null,null,null,null)
D.fVp=new A.B("Amount owed",null,D.aWf,null,null,null,null,null,null,null,null,null)
D.fVE=new A.B("Got it",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fWf=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fWi=new A.B("Add to budget",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fWK=new A.B("Debtor signature",null,B.ab1,null,null,null,null,null,null,null,null,null)
D.fWU=new A.B("Change icon",null,B.ab0,null,null,null,null,null,null,null,null,null)
D.fXH=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,P.tF,null,null,null,null,null,null,null,null,null)
D.fY8=new A.B("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fYe=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.VR,null,null,null,null,null,null,null,null,null)
D.fYC=new A.B("Download",null,B.vz,null,null,null,null,null,null,null,null,null)
D.fYD=new A.B("The person who planted this tree has not made a game yet.",null,B.AQ,null,null,null,null,null,null,null,null,null)
D.fYH=new A.B("Change",null,B.pO,null,null,null,null,null,null,null,null,null)
D.fZw=new A.B("Clear all",null,B.cg,null,null,null,null,null,null,null,null,null)
D.fZz=new A.B("WHAT SHOULD IT CHANGE?",null,M.vC,null,null,null,null,null,null,null,null,null)
D.h_8=new A.B("COLOUR",null,M.vC,null,null,null,null,null,null,null,null,null)
D.h_m=new A.B("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.h_p=new A.B("Create Tree",null,B.cg,null,null,null,null,null,null,null,null,null)
D.h_y=new A.B("Give me another clue",null,D.KP,null,null,null,null,null,null,null,null,null)
D.h0s=new A.B("Create Family Tree",null,B.fa,null,null,null,null,null,null,null,null,null)
D.h0C=new A.B("THE TEACHER EXPLAINS THESE",null,P.tF,null,null,null,null,null,null,null,null,null)
D.fnb=new A.H(!0,E.ko,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0I=new A.B("Write the first page myself",null,D.fnb,null,null,null,null,null,null,null,null,null)
D.h1g=new A.B("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.h1n=new A.B("Create Project",null,E.aVX,null,null,null,null,null,null,null,null,null)
D.hs_=new C.acw(1,"header")
D.acq=new C.acw(2,"projects")
D.hs0=new C.acw(3,"cashier")
D.acr=new C.acw(4,"familyTree")
D.hFI=new C.cGx(0,"start")
D.hFJ=new C.cGy(0,"start")
D.hso=new C.ZF(null)
D.htp=new C.a_7(null)
D.dDZ=new A.bu(B.hZ,[],A.as("bu<n,GB>"))
D.dlU=w([],x.dE)
D.dlV=w([],x.M)
D.htW=new C.bgF(D.dDZ,D.dlU,D.dlV,0,0,null,null)
D.b09=new C.a_Y(0,"intro")
D.b0a=new C.a_Y(1,"countdown")
D.acF=new C.a_Y(2,"ask")
D.WL=new C.a_Y(3,"reveal")
D.b0b=new C.a_Y(4,"end")
D.hwO=new C.td(F.Ge,D.lE,B.cO,F.lF,5,!1,!1,!1,0,null)
D.hwP=new C.td(F.Ge,B.er,B.cO,B.bP,2,!0,!0,!1,2,B.cO)
D.hwQ=new C.td(B.ok,B.cG,B.cO,F.lF,2,!0,!1,!1,2,B.aw)
D.hwR=new C.td(F.Ge,B.dJ,B.cO,F.lF,5,!1,!1,!1,1,null)
D.hwS=new C.td(F.ZY,D.aiI,B.cO,F.lF,4,!0,!1,!0,0,null)
D.b0e=new C.td(F.ZY,B.dK,B.cO,F.lF,3,!0,!1,!0,2,null)
D.b0f=new C.td(F.mV,D.lE,B.c,F.lF,0,!1,!1,!0,0,null)
D.b0g=new C.td(B.ok,B.aE,B.cO,B.bP,2,!0,!0,!1,2,B.dK)
D.b0h=new C.td(B.ok,G.np,B.ia,F.lF,5,!1,!1,!0,3,null)
D.hwT=new C.td(B.ok,B.dK,B.cO,F.lF,0,!0,!1,!1,0,B.aE)
D.b0i=new C.td(F.Ge,B.er,B.cO,B.bP,1,!1,!0,!1,1,null)
D.b0j=new C.td(F.FO,B.aw,B.aE,F.lF,4,!0,!1,!0,2,null)
D.hwU=new C.td(F.mV,B.aw,B.er,F.lF,3,!0,!1,!1,0,null)
D.hwV=new C.td(B.ok,B.dJ,B.cO,B.bP,1,!1,!0,!1,1,null)
D.hwW=new C.td(F.FO,D.ahK,B.c,F.lF,5,!1,!1,!0,0,null)
D.hxz=new C.a0v(null)
D.hFR=new C.afT(0,"still")
D.X7=new C.afT(1,"walk")
D.b0K=new C.afT(2,"pound")
D.b0L=new C.afT(3,"drum")
D.hBz=new C.a1N(0,"greet")
D.b0M=new C.a1N(1,"teach")
D.acZ=new C.a1N(2,"ask")
D.hBA=new C.a1N(3,"feedback")
D.b0N=new C.a1N(4,"end")
D.Xc=new C.a25(0,"intro")
D.Xd=new C.a25(1,"asking")
D.B5=new C.a25(2,"reacting")
D.ad8=new C.a25(3,"driving")
D.ad9=new C.a25(4,"arrived")
D.adc=new C.aLt(0,"projects")
D.b1a=new C.aLt(1,"cashier")
D.hDB=new C.aLt(2,"familyTree")})()};
(a=>{a["/qgnxTdwF5e80/l6WTA0iVJmE+8="]=a.current})($__dart_deferred_initializers__);