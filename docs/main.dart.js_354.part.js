((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,N,Q,A0,T,A9,L,H,E,P,Aa,R,Ab,U,Ac,Ad,A1,Ae,Af,S,M,A2,Ag,A3,A4,Ah,A5,Ai,Aj,Ak,A6,Al,Am,A7,An,G,Ao,Ap,Aq,A8,Ar,V,O,As,W,At,Au,X,Y,F,Av,I,K,Z,C={
bFq(b2,b3,b4){var w=0,v=A.j(x.cz),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$bFq=A.e(function(b5,b6){if(b5===1)return A.f(b6,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vO(null,""),$async$bFq)
case 3:b1=b6
if(B.a.i(b1).length===0)throw A.W(y.z)
t=A.nk(b1)
s=A.bZ(b3.length,null,!1,x.h5)
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
f.push(A.H(["title",a0.a,"body",a0.b],q,q))}a1=m+j+"\nReply with JSON only, with exactly "+g+' pages in the same order: {"pages":[{"title":"...","body":"..."}]}\nPages:\n'+B.Y.az(f,null)+"\n"
a2=null
a3=0
case 7:if(!(a3<2&&a2==null)){w=8
break}w=10
return A.b(A.re(t,a1,B.hX,"book",E.Gz),$async$bFq)
case 10:a4=b6
l=a4.a
a5=a4.b
if(a5==null){w=9
break}a6=H.Rq(a5)
if(a6!=null&&o.b(a6.h(0,"pages"))&&J.ad(o.a(a6.h(0,"pages")))>=h.length)a2=o.a(a6.h(0,"pages"))
case 9:++a3
w=7
break
case 8:if(a2==null)throw A.W(l!=null&&A.LR(l)?y.k:y.y)
for(j=J.a7(a2),a7=0;a7<h.length;++a7){a8=r.b(j.h(a2,a7))?A.a3(r.a(j.h(a2,a7)),q,p):B.cD
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
r.push(q==null?b3[a7]:q)}if(B.a.q(b4,"Swahili")){u=H.a3w(r,b2)
w=1
break}b2.$2("Done",1)
u=r
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFq,v)},
ahW(b7,b8,b9,c0,c1,c2,c3){var w=0,v=A.j(x.bV),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6
var $async$ahW=A.e(function(c4,c5){if(c4===1)return A.f(c5,v)
for(;;)switch(w){case 0:w=3
return A.b(A.vO(null,""),$async$ahW)
case 3:b6=c5
if(B.a.i(b6).length===0)throw A.W(y.z)
t=A.nk(b6)
s=x.S
r=A.cW(c1,0,A.dA(4,"count",s),A.U(c1).c)
q=H.a3j(new A.N(r,new C.fNi(),r.$ti.k("N<ak.E,n>")).aN(0," "))
r=q==="sw"
if(!r){p=A.ag("swahili|kiswahili",!1,!1,!1,!1)
o=p.b.test(b8)}else o=!0
if(r)r="The book is written in Swahili: keep it in Swahili unless they ask for another language."
else r=q==="en"?"The book is written in English: keep it in English unless they ask for another language.":"Keep the language the book is already written in unless they ask for another."
n=r+(o?y.q:"")
m=new C.fNh(t)
w=c2==="cover"?4:5
break
case 4:b9.$2("Designing the cover\u2026",0.3)
w=6
return A.b(m.$1('You design the cover of a family book. The person asked: """'+b8+'"""\nCurrent cover settings: '+B.Y.az(b7,null)+"\nAllowed values: style one of "+B.d.aN(c3,", ")+"; emblem a number 0 to 11 (0 family tree, 1 heart, 2 home, 3 star, 4 people, 5 flower, 6 open book, 7 castle, 8 church, 9 paw, 10 leaf, 11 trophy); titleSize 18 to 36; position top, middle or bottom; frame double, single, corners or none; texture leather, linen, plain, stars or rays; foil gold, silver, rose, white, copper or black; ribbon true or false.\nAlso allowed: title and subtitle (the words on the cover) and author (a name line). Change ONLY what they asked for; leave the other settings out.\n"+n+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","cover":{...only the settings you change...}}\n'),$async$ahW)
case 6:l=c5
k=H.Rq(l==null?"":l)
if(k==null)throw A.W("The AI could not design the cover just now. Nothing was changed.")
s=k.h(0,"message")
s=A.w(s==null?"I updated the cover.":s)
r=x.f
u=new C.apv(s,D.dDn,r.b(k.h(0,"cover"))?A.a3(r.a(k.h(0,"cover")),x.N,x.z):null)
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
a2.push(A.H(["index",i,"title",a7.a,"body",a7.b],p,g))}w=10
return A.b(m.$1(f+B.Y.az(a2,null)+'\nReply with JSON only: {"message":"one or two friendly sentences saying what you changed","pages":[{"index":0,"title":"...","body":"..."}]}\nInclude ONLY the pages you changed, each with its full new text. If nothing needs changing in these pages, use "pages":[].\n'),$async$ahW)
case 10:l=c5
k=l==null?null:H.Rq(l)
if(k==null)throw A.W(y.A)
if(a0.length===0){a2=k.h(0,"message")
a2=B.a.i(A.w(a2==null?"":a2)).length!==0}else a2=!1
if(a2)a0=B.a.i(A.w(k.h(0,"message")))
a8=k.h(0,"pages")
if(s.b(a8))for(a2=J.dd(a8,d),a5=J.aU(a2.a),a2=a2.$ti,a7=new A.lj(a5,a2.k("lj<1>")),a2=a2.c;a7.C();){a9=a2.a(a5.gR(a5))
b0=J.a7(a9)
b1=A.aI(b0.h(a9,"index"))
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
case 9:if(h.a!==0){s=h.$ti.k("b8<2>")
p=A.cE(new A.b8(h,s),new C.fNj(),s.k("M.E"),p)
p=H.a3j(A.pF(p,3,A.a4(p).k("M.E")).aN(0," "))==="sw"
s=p}else s=!1
w=s?11:12
break
case 11:s=h.$ti.k("cx<1>")
b4=A.C(new A.cx(h,s),s.k("M.E"))
s=A.a([],x.L)
for(r=b4.length,a6=0;a6<b4.length;b4.length===r||(0,A.J)(b4),++a6){p=h.h(0,b4[a6])
p.toString
s.push(p)}w=13
return A.b(H.a3w(s,b9),$async$ahW)
case 13:b5=c5
for(s=J.a7(b5),i=0;i<b4.length;++i)h.n(0,b4[i],s.h(b5,i))
case 12:b9.$2("Done",1)
if(a0.length===0){s=h.a
if(s===0)s="I looked, and nothing needed changing."
else{r=s===1?"page":"pages"
r="Done. I updated "+s+" "+r+"."
s=r}}else s=a0
u=new C.apv(s,h,null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahW,v)},
hDY(d,e,f){return A.ce(null,B.w.j(0.65),!1,null,new C.fWP(e,f),d,null,!0,!0,x.g2)},
apv:function apv(d,e,f){this.a=d
this.b=e
this.c=f},
fNi:function fNi(){},
fNh:function fNh(d){this.a=d},
fNj:function fNj(){},
fWP:function fWP(d,e){this.a=d
this.b=e},
bDe(b1){var w=0,v=A.j(x.aD),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$bDe=A.e(function(b2,b3){if(b2===1)return A.f(b3,v)
for(;;)switch(w){case 0:if(!B.d.aV(b1,new C.fAA())){u=null
w=1
break}t=B.d.cD(b1,new C.fAB())
s=$.Q()
r=new A.pZ(new A.py())
q=A.zs(r,D.aRj)
p=A.K()
p.r=B.c.gp(0)
q.ar(D.aRj,p)
o=A.K()
o.r=B.S.gp(0)
o.c=3.6
o.b=B.a9
o.d=B.bw
o.e=B.dP
n=new C.fAG(t)
if(!t){for(s=b1.length,m=1/0,l=1/0,k=0,j=0,i=0;i<s;++i){h=b1[i]
if(h==null)continue
g=h.a
if(g<m)m=g
f=h.b
if(f<l)l=f
if(g>k)k=g
if(f>j)j=f}e=B.j.E(k-m,1,1e4)
d=B.j.E(j-l,1,1e4)
a0=B.j.E(478.40000000000003/e,0,147.20000000000002/d)
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
return A.b(r.o0().xC(520,160),$async$bDe)
case 4:w=3
return A.b(b3.hs(B.he),$async$bDe)
case 3:b0=b3
u=b0==null?null:J.eS(B.dN.gaU(b0))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bDe,v)},
fKZ(d){return C.ij1(d)},
ij1(d){var w=0,v=A.j(x.bW),u,t,s,r,q,p,o,n
var $async$fKZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=d.bjn()
n=d.x!=null&&d.zG(null).length===0
if(d.x!=null)t=n?D.Aj:D.JC
else t=d.gUy()?D.JC:D.aMc
w=3
return A.b(C.bDe(d.ax),$async$fKZ)
case 3:s=f
p.a=null
if(s!=null)p.a=A.aoa(s)
r=A.a5g(null,"NGMY Cashier","Payment receipt \u2014 "+d.b)
p.b=p.c=null
q=d.x
if(q==null){p.c="Not paid yet"
p.b=D.aMc}else{p.c=C.xi(q,!0)
p.b=n?D.Aj:D.JC}r.a3Z(A.h6j(new C.fL0(p,d,new C.fL1(),t,n,o),null,D.bFN,B.x2))
u=r.jH(0)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fKZ,v)},
fRD(d){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$fRD=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(C.fKZ(d),$async$fRD)
case 3:t=f
s=B.a.i(d.b)
r=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
q=A.aL(s,r,"_")
if(q.length>40)q=B.a.aC(q,0,40)
u=Af.Hq(t,"ngmy_cashier_receipt_"+(q.length===0?d.a:q)+".pdf",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fRD,v)},
fAA:function fAA(){},
fAB:function fAB(){},
fAG:function fAG(d){this.a=d},
fL1:function fL1(){},
fL0:function fL0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fL_:function fL_(){},
fXh(d,e){var w=0,v=A.j(x.H)
var $async$fXh=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,B.w.j(0.55),!0,null,new C.fXl(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fXh)
case 2:return A.h(null,v)}})
return A.i($async$fXh,v)},
bFQ(d,e,f,g){return C.ira(d,e,f,g)},
ira(d,e,f,g){var w=0,v=A.j(x.H),u,t,s,r
var $async$bFQ=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:r=null
try{t=B.a.q(e,",")?B.d.gan(e.split(",")):e
r=B.cI.aM(t)}catch(q){r=null}if(r==null||r.length===0){d.L(x.q).f.U(D.fjy)
w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.fXd(g,r,f),d,null,!0,!0,x.H),$async$bFQ)
case 3:case 1:return A.h(u,v)}})
return A.i($async$bFQ,v)},
fXm(d,e){var w=0,v=A.j(x.H)
var $async$fXm=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.ce(null,null,!0,null,new C.fXp(new A.cw(null,x.eF),e),d,null,!0,!0,x.H),$async$fXm)
case 2:return A.h(null,v)}})
return A.i($async$fXm,v)},
b_w:function b_w(d,e){this.c=d
this.a=e},
c7z:function c7z(){},
bcH:function bcH(d,e){this.b=d
this.a=e},
fXl:function fXl(d,e){this.a=d
this.b=e},
fXi:function fXi(d){this.a=d},
fXj:function fXj(d,e,f){this.a=d
this.b=e
this.c=f},
fXk:function fXk(d,e){this.a=d
this.b=e},
fXd:function fXd(d,e,f){this.a=d
this.b=e
this.c=f},
fXb:function fXb(d){this.a=d},
fXc:function fXc(d,e,f){this.a=d
this.b=e
this.c=f},
fXp:function fXp(d,e){this.a=d
this.b=e},
fXn:function fXn(d){this.a=d},
fXo:function fXo(d,e,f){this.a=d
this.b=e
this.c=f},
fFk(d,e){var w=0,v=A.j(x.y),u,t
var $async$fFk=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a34(d),$async$fFk)
case 3:t=g
J.nQ(t,new C.fFl(e))
u=A.aiA(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fFk,v)},
fFl:function fFl(d){this.a=d},
apH:function apH(d,e,f){this.c=d
this.d=e
this.a=f},
aEp:function aEp(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dPH:function dPH(d,e){this.a=d
this.b=e},
dPs:function dPs(d,e){this.a=d
this.b=e},
dPv:function dPv(d,e,f){this.a=d
this.b=e
this.c=f},
dPu:function dPu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dPt:function dPt(d,e){this.a=d
this.b=e},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPq:function dPq(){},
dPr:function dPr(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPp:function dPp(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
dPa:function dPa(d){this.a=d},
dPb:function dPb(d,e,f){this.a=d
this.b=e
this.c=f},
dPc:function dPc(d,e){this.a=d
this.b=e},
dP9:function dP9(d){this.a=d},
dPh:function dPh(d,e){this.a=d
this.b=e},
dP8:function dP8(d){this.a=d},
dPi:function dPi(d,e,f){this.a=d
this.b=e
this.c=f},
dPj:function dPj(d,e,f){this.a=d
this.b=e
this.c=f},
dP7:function dP7(d,e){this.a=d
this.b=e},
dPk:function dPk(d,e,f){this.a=d
this.b=e
this.c=f},
dP6:function dP6(d,e){this.a=d
this.b=e},
dPl:function dPl(d,e){this.a=d
this.b=e},
dP5:function dP5(d){this.a=d},
dPm:function dPm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dP3:function dP3(){},
dOY:function dOY(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dP4:function dP4(d,e){this.a=d
this.b=e},
dPn:function dPn(d,e){this.a=d
this.b=e},
dP2:function dP2(d){this.a=d},
dPo:function dPo(d){this.a=d},
dP1:function dP1(){},
dPd:function dPd(d,e){this.a=d
this.b=e},
dP0:function dP0(d){this.a=d},
dPe:function dPe(d,e,f){this.a=d
this.b=e
this.c=f},
dP_:function dP_(d,e){this.a=d
this.b=e},
dOX:function dOX(d,e){this.a=d
this.b=e},
dPf:function dPf(d){this.a=d},
dPg:function dPg(d,e,f){this.a=d
this.b=e
this.c=f},
dPK:function dPK(){},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPI:function dPI(d){this.a=d},
dPJ:function dPJ(d){this.a=d},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPF:function dPF(d){this.a=d},
dPx:function dPx(d,e,f){this.a=d
this.b=e
this.c=f},
dPy:function dPy(d,e,f){this.a=d
this.b=e
this.c=f},
dPz:function dPz(d,e,f){this.a=d
this.b=e
this.c=f},
dPA:function dPA(d,e,f){this.a=d
this.b=e
this.c=f},
dPB:function dPB(d,e,f){this.a=d
this.b=e
this.c=f},
dPC:function dPC(d,e,f){this.a=d
this.b=e
this.c=f},
dPD:function dPD(d,e,f){this.a=d
this.b=e
this.c=f},
dPM:function dPM(){},
dPN:function dPN(){},
dPO:function dPO(){},
dPP:function dPP(d){this.a=d},
dPG:function dPG(d,e){this.a=d
this.b=e},
hzQ(d){return B.d.dP(D.a4y,new C.fG5(d),new C.fG6())},
uM:function uM(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
fG5:function fG5(d){this.a=d},
fG6:function fG6(){},
alL:function alL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aWg:function aWg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
TT:function TT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgj:function bgj(){this.d=$
this.c=this.a=null},
dfq:function dfq(d,e){this.a=d
this.b=e},
dfo:function dfo(d,e){this.a=d
this.b=e},
dfp:function dfp(){},
dfr:function dfr(d,e){this.a=d
this.b=e},
hkf(d){var w,v,u,t=d.h(0,"id")
t=J.k(t==null?"":t)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"body")
v=J.k(v==null?"":v)
u=d.h(0,"updatedAt")
u=A.bj(J.k(u==null?"":u))
return new C.nv(t,w,v,u==null?new A.V(Date.now(),0,!1):u)},
LD(d,e){return C.ihE(d,e)},
ihE(d,e){var w=0,v=A.j(x.d),u,t=2,s=[],r,q,p,o,n,m,l
var $async$LD=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.I)
w=1
break}t=4
w=7
return A.b(A.az(),$async$LD)
case 7:r=g
o=B.a.i(d.toLowerCase())
q=A.aT(J.t(r.a,"ngmy_family_book_v1_"+o+"_"+e))
if(q==null||q.length===0){o=A.a([],x.I)
u=o
w=1
break}p=B.Y.aQ(0,q,null)
if(!x.j.b(p)){o=A.a([],x.I)
u=o
w=1
break}o=J.dd(p,x.f)
o=A.cE(o,new C.fIA(),o.$ti.k("M.E"),x.B)
n=A.a4(o).k("Y<M.E>")
o=A.C(new A.Y(o,new C.fIB(),n),n.k("M.E"))
B.d.aZ(o,new C.fIC())
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
return A.i($async$LD,v)},
Bw(d,e,f){var w=0,v=A.j(x.H),u,t,s,r
var $async$Bw=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}w=3
return A.b(A.az(),$async$Bw)
case 3:t=h
s=B.a.i(d.toLowerCase())
r=J.b7(f,new C.fVT(),x.a)
r=A.C(r,r.$ti.k("ak.E"))
w=4
return A.b(t.aB("String","ngmy_family_book_v1_"+s+"_"+e,B.Y.az(r,null)),$async$Bw)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Bw,v)},
aSj(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$aSj=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LD(d,e),$async$aSj)
case 2:u=h
t=J.cC(u)
s=t.bj(u,new C.h3i(f))
if(s===-1)t.c4(u,0,f)
else t.n(u,s,f)
w=3
return A.b(C.Bw(d,e,u),$async$aSj)
case 3:return A.h(null,v)}})
return A.i($async$aSj,v)},
bDH(d,e,f){var w=0,v=A.j(x.H),u
var $async$bDH=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.LD(d,e),$async$bDH)
case 2:u=h
J.nQ(u,new C.fFc(f))
w=3
return A.b(C.Bw(d,e,u),$async$bDH)
case 3:return A.h(null,v)}})
return A.i($async$bDH,v)},
bDW(d,e){return C.ihD(d,e)},
ihD(a2,a3){var w=0,v=A.j(x.e),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$bDW=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bDW)
case 7:r=a5
o=B.a.i(a2.toLowerCase())
q=A.aT(J.t(r.a,"ngmy_family_book_cover_v1_"+o+"_"+a3))
if(q==null||q.length===0){u=D.Ox
w=1
break}p=B.Y.aQ(0,q,null)
if(x.f.b(p)){o=A.a3(p,x.N,x.z)
n=o.h(0,"style")
n=J.k(n==null?"leather":n)
m=o.h(0,"title")
m=J.k(m==null?"":m)
l=o.h(0,"subtitle")
l=J.k(l==null?"":l)
k=A.aI(o.h(0,"emblem"))
k=k==null?null:B.j.M(k)
if(k==null)k=0
if(D.DG.al(0,o.h(0,"foil")))j=A.cO(o.h(0,"foil"))
else j=J.z(o.h(0,"silver"),!0)?"silver":"gold"
i=A.aI(o.h(0,"titleSize"))
if(i==null)i=null
i=B.j.E(i==null?25:i,18,36)
h=B.d.q(D.a6f,o.h(0,"position"))?A.cO(o.h(0,"position")):"middle"
g=B.d.q(D.a5A,o.h(0,"frame"))?A.cO(o.h(0,"frame")):"double"
f=B.d.q(D.a5w,o.h(0,"texture"))?A.cO(o.h(0,"texture")):"leather"
e=o.h(0,"author")
e=J.k(e==null?"":e)
d=J.z(o.h(0,"ribbon"),!1)
o=B.d.q(D.d5f,o.h(0,"header"))?A.cO(o.h(0,"header")):"classic"
o=new C.Io(n,m,l,k,j,i,h,g,f,e,!d,o)}else o=D.Ox
u=o
w=1
break
t=2
w=6
break
case 4:t=3
a1=s.pop()
u=D.Ox
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$bDW,v)},
Sw(d,e,f){return C.iqG(d,e,f)},
iqG(d,e,f){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$Sw=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){w=1
break}t=4
w=7
return A.b(A.az(),$async$Sw)
case 7:r=h
w=8
return A.b(r.aB("String","ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+e,B.Y.az(f.aj(),null)),$async$Sw)
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
return A.i($async$Sw,v)},
S_(d,e){return C.ihF(d,e)},
ihF(d,e){var w=0,v=A.j(x.dy),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$S_=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(B.a.i(d).length===0||e.length===0){u=A.a([],x.s)
w=1
break}t=4
w=7
return A.b(A.az(),$async$S_)
case 7:r=g
q=r.tQ("ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e)
if(q!=null){n=A.C(q,x.N)
u=n
w=1
break}j=J
w=8
return A.b(C.LD(d,e),$async$S_)
case 8:if(!j.cI(g)){n=B.a.i(d.toLowerCase())
m=J.lJ(r.a,"ngmy_family_book_cover_v1_"+n+"_"+e)}else m=!0
p=m
n=x.s
o=p?A.a(["main"],n):A.a([],n)
w=9
return A.b(r.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,o),$async$S_)
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
return A.i($async$S_,v)},
ahe(d,e){var w=0,v=A.j(x.T),u,t,s,r
var $async$ahe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S_(d,e),$async$ahe)
case 3:s=g
r=J.a7(s)
if(r.gI(s)>=6){u=null
w=1
break}t=r.q(s,"main")?""+1000*Date.now()+"_"+r.gI(s):"main"
r.J(s,t)
w=5
return A.b(A.az(),$async$ahe)
case 5:w=4
return A.b(g.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$ahe)
case 4:u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ahe,v)},
a3J(d,e,f){var w=0,v=A.j(x.H),u,t,s
var $async$a3J=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=2
return A.b(C.S_(d,e),$async$a3J)
case 2:s=h
J.hk(s,f)
w=3
return A.b(A.az(),$async$a3J)
case 3:u=h
w=4
return A.b(u.aB("StringList","ngmy_family_book_slots_v1_"+B.a.i(d.toLowerCase())+"_"+e,s),$async$a3J)
case 4:t=f==="main"?e:e+"~"+f
w=5
return A.b(u.W(0,"ngmy_family_book_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3J)
case 5:w=6
return A.b(u.W(0,"ngmy_family_book_cover_v1_"+B.a.i(d.toLowerCase())+"_"+t),$async$a3J)
case 6:return A.h(null,v)}})
return A.i($async$a3J,v)},
nv:function nv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fIA:function fIA(){},
fIB:function fIB(){},
fIC:function fIC(){},
fVT:function fVT(){},
h3i:function h3i(d){this.a=d},
fFc:function fFc(d){this.a=d},
Io:function Io(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
bR0:function bR0(d){this.a=d},
ir_(d,e,f,g,h,i,j){return A.a6(d,!1).cd(A.eb(new C.fWt(j,i,f,e,h,g),!0,null,x.H))},
RV(d,e,f,g,h){var w=0,v=A.j(x.y),u,t,s,r,q,p,o,n,m,l,k
var $async$RV=A.e(function(i,j){if(i===1)return A.f(j,v)
for(;;)switch(w){case 0:w=3
return A.b(C.S_(h,g),$async$RV)
case 3:k=j
if(d.e==null){u=!1
w=1
break}if(J.ad(k)>=6){d.L(x.q).f.U(D.aTA)
u=!1
w=1
break}w=4
return A.b(C.hDY(d,f,e),$async$RV)
case 4:t=j
if(t==null||d.e==null){u=!1
w=1
break}w=5
return A.b(C.ahe(h,g),$async$RV)
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
return A.b(C.Bw(h,r,p),$async$RV)
case 6:p=B.a.i(t.a)
w=p.length!==0?7:8
break
case 7:w=9
return A.b(C.Sw(h,r,new C.Io("leather",p,"",0,"gold",25,"middle","double","leather","",!0,"classic")),$async$RV)
case 9:case 8:u=!0
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$RV,v)},
fWt:function fWt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a_r:function a_r(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBo:function aBo(d,e){var _=this
_.d=d
_.e=!0
_.f=$
_.r=-1
_.x=_.w=!1
_.y=e
_.Q=_.z=$
_.c=_.a=null},
dg5:function dg5(d){this.a=d},
dg4:function dg4(d,e){this.a=d
this.b=e},
dfU:function dfU(d,e){this.a=d
this.b=e},
dfR:function dfR(d,e){this.a=d
this.b=e},
dfs:function dfs(d){this.a=d},
dft:function dft(d,e){this.a=d
this.b=e},
dfV:function dfV(d){this.a=d},
dfB:function dfB(d){this.a=d},
dfz:function dfz(d){this.a=d},
dfA:function dfA(d){this.a=d},
dfC:function dfC(d){this.a=d},
dfS:function dfS(d){this.a=d},
dfT:function dfT(){},
dfx:function dfx(d){this.a=d},
dfy:function dfy(d,e){this.a=d
this.b=e},
dfD:function dfD(d){this.a=d},
dfE:function dfE(d,e){this.a=d
this.b=e},
dg3:function dg3(d){this.a=d},
dg2:function dg2(d,e){this.a=d
this.b=e},
dg1:function dg1(d){this.a=d},
dfO:function dfO(d){this.a=d},
dfN:function dfN(d){this.a=d},
dfP:function dfP(d){this.a=d},
dfu:function dfu(d,e){this.a=d
this.b=e},
dfQ:function dfQ(d,e){this.a=d
this.b=e},
dfH:function dfH(d){this.a=d},
dfI:function dfI(d){this.a=d},
dfG:function dfG(){},
dfJ:function dfJ(d){this.a=d},
dfK:function dfK(d){this.a=d},
dfL:function dfL(d,e){this.a=d
this.b=e},
dfM:function dfM(d,e,f){this.a=d
this.b=e
this.c=f},
dfF:function dfF(d,e){this.a=d
this.b=e},
dfX:function dfX(d){this.a=d},
dfW:function dfW(){},
dfY:function dfY(d){this.a=d},
dfZ:function dfZ(d){this.a=d},
dg_:function dg_(d){this.a=d},
dg0:function dg0(d,e){this.a=d
this.b=e},
dfv:function dfv(d){this.a=d},
dfw:function dfw(d){this.a=d},
a_v:function a_v(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bgI:function bgI(d){var _=this
_.d=d
_.e=$
_.c=_.a=null},
dhS:function dhS(d){this.a=d},
dhT:function dhT(d){this.a=d},
dhR:function dhR(d){this.a=d},
dhU:function dhU(d){this.a=d},
dhQ:function dhQ(d){this.a=d},
dhV:function dhV(d){this.a=d},
dhP:function dhP(d){this.a=d},
dhW:function dhW(d,e){this.a=d
this.b=e},
dhO:function dhO(d,e){this.a=d
this.b=e},
dhX:function dhX(d,e){this.a=d
this.b=e},
a_t:function a_t(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
afE:function afE(d,e,f){this.a=d
this.b=e
this.c=f},
aBr:function aBr(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
dgk:function dgk(d,e){this.a=d
this.b=e},
dgj:function dgj(d,e){this.a=d
this.b=e},
dgo:function dgo(d){this.a=d},
dgn:function dgn(d,e){this.a=d
this.b=e},
dgl:function dgl(d){this.a=d},
dgm:function dgm(d){this.a=d},
dgp:function dgp(d){this.a=d},
dgq:function dgq(d){this.a=d},
dgi:function dgi(d,e){this.a=d
this.b=e},
dgh:function dgh(d,e){this.a=d
this.b=e},
KL:function KL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ZJ:function ZJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cOJ:function cOJ(d){this.a=d},
cOK:function cOK(){},
cOL:function cOL(d){this.a=d},
bdV:function bdV(d,e,f){this.b=d
this.c=e
this.a=f},
bdM:function bdM(d,e){this.b=d
this.a=e},
uN:function uN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a_1:function a_1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdT:function bdT(){var _=this
_.r=_.f=_.e=_.d=$
_.c=_.a=null},
d7h:function d7h(d,e,f){this.a=d
this.b=e
this.c=f},
d7g:function d7g(d,e){this.a=d
this.b=e},
d7G:function d7G(d){this.a=d},
d7t:function d7t(){},
d7H:function d7H(d){this.a=d},
d7s:function d7s(){},
d7I:function d7I(d,e){this.a=d
this.b=e},
d7r:function d7r(d,e){this.a=d
this.b=e},
d7J:function d7J(d,e){this.a=d
this.b=e},
d7q:function d7q(d,e){this.a=d
this.b=e},
d7K:function d7K(d){this.a=d},
d7p:function d7p(){},
d7L:function d7L(d,e){this.a=d
this.b=e},
d7o:function d7o(d,e){this.a=d
this.b=e},
d7M:function d7M(d){this.a=d},
d7B:function d7B(d,e){this.a=d
this.b=e},
d7N:function d7N(d){this.a=d},
d7O:function d7O(d){this.a=d},
d7Q:function d7Q(d){this.a=d},
d7R:function d7R(d){this.a=d},
d7A:function d7A(d,e){this.a=d
this.b=e},
d7S:function d7S(d,e){this.a=d
this.b=e},
aIp:function aIp(d){this.a=d},
bjf:function bjf(d){this.a=d},
bc3:function bc3(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},
alM:function alM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
a1I:function a1I(d,e){this.a=d
this.b=e},
alN:function alN(d,e,f,g,h,i){var _=this
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
_.by$=h
_.a9$=i
_.c=_.a=null},
bRa:function bRa(d){this.a=d},
bR4:function bR4(d){this.a=d},
bR3:function bR3(d,e){this.a=d
this.b=e},
bRd:function bRd(d){this.a=d},
bR5:function bR5(d){this.a=d},
bR6:function bR6(d){this.a=d},
bR9:function bR9(d){this.a=d},
bR8:function bR8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRb:function bRb(d,e){this.a=d
this.b=e},
bRc:function bRc(){},
bR7:function bR7(d){this.a=d},
bR1:function bR1(d,e){this.a=d
this.b=e},
bR2:function bR2(d){this.a=d},
boO:function boO(d,e){this.b=d
this.a=e},
aBp:function aBp(){},
iw(d,e){var w
$.Q()
w=A.K()
w.b=B.a9
w.c=e
w.r=d.gp(0)
w.d=B.bw
w.e=B.dP
return w},
bDg(d,e,f,g,h,i,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=d.c
J.bo(j.save())
j.translate(e.a,e.b)
d.pi(0,a0?-f:f,f)
w=A.bs(B.ij,8,36)
v=B.w.j(0.3)
u=$.Q()
t=A.K()
t.r=v.gp(0)
d.bZ(w,t)
w=a1===D.WZ
s=w?Math.sin(g*5*a2):0
r=w?Math.abs(Math.sin(g*10*a2))*1.6:0
q=h.a
w=h.b
v=A.ar(w,B.w,0.3)
v.toString
if(!a3){v=s*7
d.ah(D.eoU,new A.o(-4+v,-2),C.iw(q,5))
d.ah(D.emu,new A.o(4-v,-2),C.iw(q,5))}else{t=A.bs(B.Js,14,40)
p=A.K()
p.r=v.gp(0)
d.bZ(t,p)}v=u.r
u=x.v
o=new A.aF(v,B.ai,k,k,A.a([],u))
t=-64-r
o.D(new A.aZ(-11,t))
o.D(new A.c5(-15,-40,-14,a3?-12:-18))
o.D(new A.aq(14,a3?-12:-18))
o.D(new A.c5(15,-40,11,t))
o.D(new A.bu())
t=A.K()
t.r=w.gp(0)
d.af(o,t)
u=new A.aF(v,B.ai,k,k,A.a([],u))
u.D(new A.aZ(-12,-50-r))
v=-46-r
u.D(new A.aq(12,v))
u.D(new A.aq(12.5,-42-r))
u.D(new A.aq(-12.5,v))
u.D(new A.bu())
v=A.K()
v.r=h.c.gp(0)
d.af(u,v)
switch(a1.a){case 2:w=Math.sin(g*3.4)
break
case 3:w=Math.sin(g*7.5)
break
default:w=s
break}if(a1===D.b0l){n=-52+w*14
d.ah(new A.o(10,n-22),new A.o(10,n+44),C.iw(F.FL,3.4))
d.ah(D.epb,new A.o(9,n),C.iw(q,4))
d.ah(D.emT,new A.o(10,n),C.iw(q,4))}else if(a1===D.b0m){d.ah(D.enZ,new A.o(-8,-26-Math.max(0,w)*6),C.iw(q,4))
d.ah(D.ekX,new A.o(8,-26-Math.max(0,-w)*6),C.iw(q,4))}else{w=s*3
v=-38-r
d.ah(D.eo3,new A.o(-12-w,v),C.iw(q,4))
d.ah(D.aLe,new A.o(12+w,v),C.iw(q,4))}w=A.K()
w.r=q.gp(0)
d.ar(D.f6s,w)
m=new A.o(0,-77-r)
w=A.bs(m,22,19)
v=A.K()
v.r=q.gp(0)
d.bZ(w,v)
w=h.y
if(w!=null){v=A.bs(m.a5(0,K.vl),15,24)
u=A.K()
u.r=w.gp(0)
d.bZ(v,u)
u=m.a5(0,D.ekR)
v=A.K()
v.r=w.gp(0)
d.N(u,4,v)}else{w=A.bs(m.a5(0,B.ti),23,20)
v=h.d
u=A.K()
u.r=v.gp(0)
d.cC(w,3.2986722862692828,2.827433388230814,!0,u)
w=h.e
if(w===3){d.ah(m.a5(0,D.ep9),m.a5(0,D.enX),C.iw(v,2.2))
d.ah(m.a5(0,D.emS),m.a5(0,D.ekO),C.iw(v,2.2))}if(w===4){w=m.a5(0,D.epd)
u=A.K()
u.r=v.gp(0)
d.N(w,6,u)
u=m.a5(0,D.emU)
w=A.K()
w.r=v.gp(0)
d.N(u,6,w)}}w=m.a5(0,D.enK)
v=A.K()
v.r=B.i9.gp(0)
d.N(w,0.9,v)
v=m.a5(0,D.eny)
w=A.K()
w.r=B.i9.gp(0)
d.N(v,0.9,w)
if(i){l=m.a5(0,K.a8b)
w=A.bs(l,21,22)
v=A.K()
v.r=D.lB.gp(0)
d.bZ(w,v)
v=A.bs(l.a5(0,K.aLb),5,12)
w=A.K()
w.r=D.bft.gp(0)
d.bZ(v,w)
d.ah(l.a5(0,D.ep5),l.a5(0,K.aLy),C.iw(B.cO,1.4))
d.ah(D.aLe,new A.o(15,-88-r),C.iw(q,3.6))}j.restore()},
hys(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.c
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
d.lx(D.aRn,A.K())
C.i5X(d,g,h,i,j)
s=(k==null?D.a8h:k).a-w>=0?1:-1
w=A.K()
w.a=B.LH
w.sav(A.jy(new A.o(s*70,-60),new A.o(-s*70,-60),A.a([D.ai_.j(0.5),D.ai_.j(0.12),D.bmL.j(0.22)],x.O),A.a([0,0.55,1],x.n),B.x,null))
d.ar(D.aRn,w)
r.restore()
r.restore()},
i5X(a1,a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a2.a,a0=A.ar(d,B.w,0.28)
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
s=A.bl(D.f6t,B.tm)
p=$.Q()
o=A.K()
o.r=u.gp(0)
a1.am(s,o)
o=A.bl(D.f6o,B.hN)
s=A.ar(v,B.w,0.18)
s.toString
n=A.K()
n.r=s.gp(0)
a1.am(o,n)
n=A.bl(D.f6C,B.hN)
o=A.ar(v,B.w,0.1)
o.toString
s=A.K()
s.r=o.gp(0)
a1.am(n,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f6v,s)
s=A.K()
s.r=d.gp(0)
a1.bZ(D.f5e,s)
s=a1.c
J.bo(s.save())
s.translate(a3.w,0)
J.bo(s.save())
a1.pi(0,q,q*(1+t*0.012))
o=a2.f
m=o&&!a2.r?25:28
n=x.v
l=new A.aF(p.r,B.ai,e,e,A.a([],n))
p=-m
k=p+2
l.D(new A.aZ(k,-58))
l.D(new A.c5(p-3,-62,p,-52))
l.D(new A.aq(p+4,-14))
l.D(new A.aq(m-4,-14))
l.D(new A.aq(m,-52))
l.D(new A.c5(m+3,-62,m-2,-58))
l.D(new A.c5(0,-70,k,-58))
l.D(new A.bu())
k=A.K()
k.r=v.gp(0)
a1.af(l,k)
J.bo(s.save())
a1.mQ(0,l)
switch(a2.x){case 1:for(j=0;j<5;++j){u=j*5
k=D.dbX[j]
i=new A.ao(B.O,B.M,B.R,B.T,B.P)
i.b=B.a9
i.c=5
i.r=k.gp(0)
i.d=B.bw
i.e=B.dP
a1.ah(new A.o(-34+u,-64),new A.o(14+u,-14),i)}break
case 2:for(k=a2.c,h=-56;h<-14;h+=11)for(g=-26+B.o.F(B.o.aq(h,11),2)*6;g<28;g+=12){i=k.j(0.85)
$.Q()
f=new A.ao(B.O,B.M,B.R,B.T,B.P)
f.r=i.gp(0)
a1.N(new A.o(g,h),3.6,f)
f=new A.ao(B.O,B.M,B.R,B.T,B.P)
f.r=u.gp(0)
a1.N(new A.o(g,h),1.6,f)}break
case 3:for(u=a2.c,g=-28;g<30;g+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.T,B.P)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bw
i.e=B.dP
a1.ah(new A.o(g,-64),new A.o(g,-14),i)}for(h=-60;h<-14;h+=8){k=u.j(0.7)
i=new A.ao(B.O,B.M,B.R,B.T,B.P)
i.b=B.a9
i.c=1.6
i.r=k.gp(0)
i.d=B.bw
i.e=B.dP
a1.ah(new A.o(-30,h),new A.o(30,h),i)}break
default:a1.ah(D.eoz,D.elC,C.iw(a2.c.j(0.9),3))}a1.ah(D.ep6,D.eo5,C.iw(B.w.j(0.18),1.6))
a1.ah(D.ekW,K.aLg,C.iw(B.w.j(0.18),1.6))
u=B.w.j(0.12)
k=$.Q()
i=A.K()
i.r=u.gp(0)
a1.ar(D.f5a,i)
s.restore()
i=A.K()
i.r=a0.gp(0)
a1.ar(D.f5o,i)
n=new A.aF(k.r,B.ai,e,e,A.a([],n))
n.D(new A.aZ(-9,-66))
n.D(new A.c5(0,-57,9,-66))
n.D(new A.c5(0,-60,-9,-66))
k=A.K()
k.r=d.gp(0)
a1.af(n,k)
if(a2.e!==1)u=a2.r&&!o
else u=!0
if(u)a1.cC(D.f5x,0.1,2.941592653589793,!1,C.iw(a2.c,2.2))
s.restore()
u=-56*q
o=a3.Q
if(o==null)o=D.a8l
n=25*q
k=23*q
i=9*q
C.huJ(a1,new A.o(p*q+2,u),o,n,k,-1,v,d,i)
o=a3.as
p=o==null?D.E6:o
C.huJ(a1,new A.o(m*q-2,u),p,n,k,1,v,d,i)
if(a3.at){a1.ah(D.emm,D.emi,C.iw(D.aj_,4))
a1.ah(D.emk,D.emg,C.iw(D.G9.j(0.7),1.4))
u=A.K()
u.r=B.cO.gp(0)
a1.N(D.emj,5,u)}s.restore()
u=a3.w
p=a3.e
o=a3.r
J.bo(s.save())
s.translate(u*1.2+p*4,-88+o-t*0.4)
a1.hW(0,a3.f)
a1.bU(0,r)
C.i5U(a1,a2,a3,a4,a5,d,a0,w)
s.restore()},
huJ(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=f.aJ(0,e),r=s.gcI(),q=r===0?B.ij:s.eW(0,r),p=B.j.E(r,Math.abs(g-h)+0.5,g+h-0.5),o=g*g,n=(o-h*h+p*p)/(2*p),m=Math.sqrt(Math.max(0,o-n*n))
o=-q.b
w=q.a
v=new A.o(o,w)
if(o*i<0)v=new A.o(-o,-w)
u=e.a5(0,q.aO(0,n)).a5(0,v.aO(0,m))
t=e.a5(0,q.aO(0,p))
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
w=t.a5(0,new A.o(i*w*0.45,w*0.1))
o=A.K()
o.r=k.gp(0)
d.N(w,l*0.28,o)},
i5U(c2,c3,c4,c5,c6,c7,c8,c9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9=null,c0=c3.d,c1=c3.e
if(c1===3||c1===4){w=A.bs(B.vk,40,38)
$.Q()
v=A.K()
v.r=c0.gp(0)
c2.bZ(w,v)}if(c1===4){$.Q()
w=A.K()
w.r=c0.gp(0)
c2.N(D.eof,9.5,w)
w=A.K()
w.r=c0.gp(0)
c2.N(D.elc,9.5,w)}w=A.bs(D.ept,10,6)
v=$.Q()
u=A.K()
u.r=c8.gp(0)
c2.bZ(w,u)
u=A.bs(D.enH,10,6)
w=A.K()
w.r=c8.gp(0)
c2.bZ(u,w)
v=v.r
w=x.v
t=new A.aF(v,B.ai,b9,b9,A.a([],w))
t.D(new A.aZ(0,-20))
t.D(new A.kR(13,-20,17,-9,16,2))
t.D(new A.kR(15,13,8,20,0,20))
t.D(new A.kR(-8,20,-15,13,-16,2))
t.D(new A.kR(-17,-9,-13,-20,0,-20))
t.D(new A.bu())
u=A.K()
u.sav(A.w8(D.eoW,28,A.a([c9,c7,c8],x.O),A.a([0,0.55,1],x.n),B.x,b9,b9,0))
c2.af(t,u)
u=c3.r
if(u){s=C.iw(c8.j(0.5),0.8)
c2.cC(D.f6E,3.455751918948773,2.5132741228718345,!1,s)
c2.cC(D.f5h,3.455751918948773,2.5132741228718345,!1,s)
c2.ah(D.eoc,D.eo0,s)
c2.ah(D.el8,D.el_,s)
c2.cC(D.f5w,2.2,1.4,!1,s)
c2.cC(D.f5f,-0.4,1.4,!1,s)}switch(c1){case 0:for(r=0;r<16;++r){q=3.141592653589793*(1.02+0.96*r/15)
p=Math.cos(q)
o=Math.sin(q)
n=new A.ao(B.O,B.M,B.R,B.T,B.P)
n.r=c0.gp(0)
c2.N(new A.o(p*14.5,-3+o*17.5),4.3,n)}p=A.K()
p.r=c0.gp(0)
c2.cC(D.f5K,3.141592653589793,3.141592653589793,!0,p)
break
case 1:p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.D(new A.aZ(-15,-11))
p.D(new A.c5(0,-30,15,-11))
p.D(new A.aq(13,-6))
p.D(new A.c5(0,-12,-13,-6))
p.D(new A.bu())
o=A.K()
o.r=c3.c.gp(0)
c2.af(p,o)
c2.ah(D.eo1,D.el0,C.iw(G.nm,1.4))
o=A.K()
o.r=c0.gp(0)
c2.N(D.eoi,3,o)
o=A.K()
o.r=c0.gp(0)
c2.N(D.eld,3,o)
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.D(new A.aZ(-13,6))
o.D(new A.c5(-12,22,0,26))
o.D(new A.c5(12,22,13,6))
o.D(new A.c5(8,13,0,12))
o.D(new A.c5(-8,13,-13,6))
o.D(new A.bu())
p=A.K()
p.r=B.iB.gp(0)
c2.af(o,p)
p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.D(new A.aZ(-7,8))
p.D(new A.c5(0,6,7,8))
p.D(new A.c5(0,10.5,-7,8))
o=A.K()
o.r=B.bP.gp(0)
c2.af(p,o)
break
case 2:m=c3.y
if(m==null)m=c3.b
p=new A.aF(v,B.ai,b9,b9,A.a([],w))
p.D(new A.aZ(-17,-4))
p.D(new A.c5(-20,-27,0,-29))
p.D(new A.c5(20,-27,17,-4))
p.D(new A.c5(0,-14,-17,-4))
p.D(new A.bu())
o=A.K()
o.r=m.gp(0)
c2.af(p,o)
o=A.ar(m,B.w,0.3)
o.toString
c2.cC(D.f5R,3.4,2.5,!1,C.iw(o,1.4))
o=A.ar(m,B.c,0.3)
o.toString
c2.cC(D.f5E,3.6,2.2,!1,C.iw(o,1.2))
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.D(new A.aZ(11,-22))
o.D(new A.c5(27,-34,25,-19))
o.D(new A.c5(18,-18,11,-22))
p=A.ar(m,B.c,0.1)
p.toString
n=A.K()
n.r=p.gp(0)
c2.af(o,n)
n=new A.aF(v,B.ai,b9,b9,A.a([],w))
n.D(new A.aZ(11,-22))
n.D(new A.c5(24,-12,27,-26))
n.D(new A.c5(18,-22,11,-22))
o=A.ar(m,B.w,0.2)
o.toString
p=A.K()
p.r=o.gp(0)
c2.af(n,p)
p=A.K()
p.r=c3.c.gp(0)
c2.N(D.el1,3,p)
break
case 3:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f5O,3.204424506661589,3.015928947446201,!0,p)
for(r=-3;r<=3;++r){p=A.ar(c0,B.c,0.18)
p.toString
o=new A.ao(B.O,B.M,B.R,B.T,B.P)
o.b=B.a9
o.c=0.9
o.r=p.gp(0)
o.d=B.bw
o.e=B.dP
c2.ah(new A.o(r*3.6,-19+Math.abs(r)*0.8),new A.o(r*4.6,-4),o)}for(p=c3.c,l=0;l<2;++l){k=D.dq9[l]
o=new A.ao(B.O,B.M,B.R,B.T,B.P)
o.b=B.a9
o.c=4.5
o.r=c0.gp(0)
o.d=B.bw
o.e=B.dP
c2.ah(new A.o(k,0),new A.o(k*1.12,22),o)
for(j=0;j<3;++j){o=new A.ao(B.O,B.M,B.R,B.T,B.P)
o.r=p.gp(0)
c2.N(new A.o(k*(1+j*0.04),7+j*6.5),1.8,o)}}break
case 4:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f5N,3.204424506661589,3.015928947446201,!0,p)
p=A.ar(c0,B.c,0.25)
p.toString
c2.ah(K.a8b,K.a8a,C.iw(p,1))
break
default:p=A.K()
p.r=c0.gp(0)
c2.cC(D.f5i,3.267256359733385,2.8902652413026098,!0,p)}i=B.j.E(c4.b,0,1)*0.4+0.1
p=A.bs(D.epf,5,8)
o=D.afk.j(i)
n=A.K()
n.r=o.gp(0)
c2.bZ(p,n)
n=A.bs(D.enT,5,8)
p=D.afk.j(i)
o=A.K()
o.r=p.gp(0)
c2.bZ(n,o)
h=c4.e*2.4
o=new A.aF(v,B.ai,b9,b9,A.a([],w))
o.D(new A.aZ(h-0.6,-2))
o.D(new A.c5(h-3.4,6,h-2.6,7.4))
o.D(new A.c5(h,8.8,h+2.6,7.4))
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
for(p=f<0.15,o=c3.f,n=f>0.12,e=2.5*f,d=c2.c,a0=e*2,a1=e*2.2,l=0;l<2;++l){a2=F.hK[l]
a3=c4.e
a4=a2>0?0.7:1
a5=a2*6.4+a3*2*a4
if(n){a3=Math.max(0.6,a0)
a4=A.bs(new A.o(a5,-3),a3,7)
a6=new A.ao(B.O,B.M,B.R,B.T,B.P)
a6.r=B.c.j(0.96).gp(0)
c2.bZ(a4,a6)
a7=a5+c4.y*1.5
a8=-3+c4.z*0.7
J.bo(d.save())
a6=A.a([],w)
a4=new A.aF(v,B.ai,b9,b9,a6)
a6.push(new A.jP(A.bs(new A.o(a5,-3),a3,7)))
a4.ab()
a3=a4.e
if(a3==null)a3=a4.e=new A.E5(a4.glV().a.snapshot())
d.clipPath(a3.a,$.no(),!0)
a3=new A.ao(B.O,B.M,B.R,B.T,B.P)
a3.r=D.bjd.gp(0)
c2.N(new A.o(a7,a8),2.1,a3)
a3=new A.ao(B.O,B.M,B.R,B.T,B.P)
a3.r=B.w.gp(0)
c2.N(new A.o(a7,a8),1.05,a3)
a3=new A.ao(B.O,B.M,B.R,B.T,B.P)
a3.r=B.c.gp(0)
c2.N(new A.o(a7-0.7,a8-0.7),0.55,a3)
d.restore()}a3=o?D.Z0:c8.j(0.9)
a4=o?1.5:1.1
a9=new A.ao(B.O,B.M,B.R,B.T,B.P)
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
if(u)b1=B.e7
else{b1=A.ar(c0,B.w,0.2)
b1.toString}b2=new A.ao(B.O,B.M,B.R,B.T,B.P)
b2.b=B.a9
b2.c=1.7
b2.r=b1.gp(0)
b2.d=B.bw
b2.e=B.dP
c2.ah(new A.o(a5-a4,b0-a6+0.4),new A.o(a5+a4,b0-0.6-a3),b2)}b3=B.j.E(c4.a,0,1)
if(o)b4=D.bt8
else{u=A.ar(c8,D.bmN,0.6)
u.toString
b4=u}b5=c4.b
if(b3>0.06){b6=5+B.j.E(b5,0,1)*2.2
b7=1.2+b3*6.5
b8=new A.aF(v,B.ai,b9,b9,A.a([],w))
w=-b6
b8.D(new A.aZ(w,11.5))
b8.D(new A.c5(0,11.5+b7*0.2-c4.b*1.5,b6,11.5))
b8.D(new A.c5(0,11.5+b7*1.5+c4.b*1.5,w,11.5))
b8.D(new A.bu())
v=A.K()
v.r=D.bm6.gp(0)
c2.af(b8,v)
J.bo(d.save())
c2.mQ(0,b8)
v=B.c.j(0.95)
u=A.K()
u.r=v.gp(0)
c2.ar(new A.a1(w,11,w+b6*2,13.2),u)
u=A.bs(new A.o(0,11.5+b7*1.1),b7*0.9,b6*1.4)
w=A.K()
w.r=D.btd.gp(0)
c2.bZ(u,w)
d.restore()
c2.af(b8,C.iw(b4,1.1))}else{u=new A.aF(v,B.ai,b9,b9,A.a([],w))
p=11.5-b5*0.8
u.D(new A.aZ(-5.2,p))
u.D(new A.c5(0,13.1+b5*2.8,5.2,p))
c2.af(u,C.iw(b4,1.5))
if(b5>0.6){w=new A.aF(v,B.ai,b9,b9,A.a([],w))
w.D(new A.aZ(-4.6,11.8))
w.D(new A.c5(0,15.1+b5*1.4,4.6,11.8))
w.D(new A.c5(0,13.5,-4.6,11.8))
v=B.c.j(0.9)
u=A.K()
u.r=v.gp(0)
c2.af(w,u)}}if(c4.b>0.2){c2.cC(D.f5v,-1.2,2.2,!1,C.iw(c8.j(0.5),0.8))
c2.cC(D.f5k,2.141592653589793,2.2,!1,C.iw(c8.j(0.5),0.8))}if(o&&c1!==2){c1=c3.c
w=A.K()
w.r=c1.gp(0)
c2.N(D.enA,1.7,w)
w=A.K()
w.r=c1.gp(0)
c2.N(D.enw,1.7,w)}},
ibv(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=$.Q(),f=new A.pZ(new A.py()),e=A.zs(f,h),d=a3.a,a0=a3.b,a1=Math.min(d/450,a0/900),a2=A.K()
a2.sav(A.jy(B.I,new A.o(0,a0*0.46),D.d8J,D.d0i,B.x,h))
e.ar(new A.a1(0,0,0+d,0+a0),a2)
a2=e.c
J.bo(a2.save())
a2.translate((d-450*a1)/2,(a0-900*a1)/2)
e.bU(0,a1)
w=new A.e4()
w.d_(8)
for(v=0;v<120;++v){d=w.ai()
a0=w.ai()
u=w.ai()
t=new A.ao(B.O,B.M,B.R,B.T,B.P)
t.r=B.c.j(0.2+w.ai()*0.5).gp(0)
e.N(new A.o(d*450*1.4-90,a0*330-40),0.5+u*0.9,t)}J.bo(a2.save())
a2.translate(200,120)
e.hW(0,-0.5)
d=A.K()
a0=x.O
d.sav(A.w8(B.I,230,A.a([D.bhZ,B.L],a0),h,B.x,h,h,0))
e.bZ(D.f60,d)
a2.restore()
d=A.K()
d.sav(A.w8(D.a8k,58,A.a([D.bl9,B.L],a0),h,B.x,h,h,0))
e.N(D.a8k,58,d)
d=A.K()
d.r=D.bgH.gp(0)
e.N(D.a8k,24,d)
d=A.K()
d.r=D.Zp.gp(0)
e.N(D.elW,5,d)
d=A.K()
d.r=D.Zp.gp(0)
e.N(D.em_,3.4,d)
d=A.K()
d.r=D.Zp.gp(0)
e.N(D.elZ,2.4,d)
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
g=new A.bu()
u.push(g)
u=r.f
if(u!=null)g.ak(u)
r.ab()
g=[D.bfg,D.bhg,D.bn6][s]
u=$.Q()
t=new A.ao(B.O,B.M,B.R,B.T,B.P)
t.r=g.gp(0)
e.af(r,t)}for(l=0;l<4;++l){o=D.cvd[l]
k=384+B.o.F(o,11)
g=o-2
d=k-24
u=new A.ao(B.O,B.M,B.R,B.T,B.P)
u.b=B.a9
u.c=2.4
u.r=D.ZG.gp(0)
u.d=B.bw
u.e=B.dP
e.ah(new A.o(o,k),new A.o(g,d),u)
g=A.bs(new A.o(g,k-27),11,46)
u=new A.ao(B.O,B.M,B.R,B.T,B.P)
u.r=D.ZG.gp(0)
e.bZ(g,u)
d=A.bs(new A.o(o-12,d),8,24)
u=new A.ao(B.O,B.M,B.R,B.T,B.P)
u.r=D.ZG.gp(0)
e.bZ(d,u)}for(v=0;v<9;++v){g=B.o.F(v,3)
d=B.o.F(v,4)
u=new A.ao(B.O,B.M,B.R,B.T,B.P)
u.r=D.bgK.j(0.8).gp(0)
e.N(new A.o(20+v*52+g*7,400+d*5),1.2,u)}g=A.K()
g.sav(A.jy(D.ekv,D.ekx,D.d2e,B.Dr,B.x,h))
e.ar(new A.a1(-200,412,650,1300),g)
j=new A.e4()
j.d_(21)
for(v=0;v<260;++v){g=j.ai()
k=420+j.ai()*480
d=j.ai()
u=k/900+0.4
u=A.bs(new A.o(g*450,k),1+j.ai()*2*u,1.5+d*4*u)
g=j.h8()?B.c:B.w
d=new A.ao(B.O,B.M,B.R,B.T,B.P)
d.r=g.j(0.06+j.ai()*0.06).gp(0)
e.bZ(u,d)}J.bo(a2.save())
a2.translate(225,590)
e.pi(0,1,0.34)
g=A.K()
g.sav(A.w8(B.I,250,A.a([D.bo1,D.bhB,D.bpV],a0),A.a([0,0.8,1],x.n),B.x,h,h,0))
e.N(B.I,250,g)
a2.restore()
for(v=0;v<40;++v){o=j.ai()*450
k=640+j.ai()*260
g=j.ai()
d=A.ar(D.ahI,D.bge,j.ai())
d.toString
for(g=k-(6+g*10),i=-1;i<=1;++i){$.Q()
a0=new A.ao(B.O,B.M,B.R,B.T,B.P)
a0.b=B.a9
a0.c=1.3
a0.r=d.gp(0)
a0.d=B.bw
a0.e=B.dP
e.ah(new A.o(o+i*2,k),new A.o(o+i*5,g+Math.abs(i)*3),a0)}}C.i42(e)
for(l=0;l<3;++l)C.i7u(e,D.azS[l])
C.i7j(e,D.elQ)
for(o=118;o<190;o+=11){g=B.o.F(o,3)
d=B.o.F(o,4)
$.Q()
a0=new A.ao(B.O,B.M,B.R,B.T,B.P)
a0.b=B.a9
a0.c=2.4
a0.r=D.ZC.gp(0)
a0.d=B.bw
a0.e=B.dP
e.ah(new A.o(o,452+g),new A.o(o+1,436+d),a0)}e.ah(D.ekY,D.elh,C.iw(D.bgY,1.6))
a2.restore()
return f.o0()},
i42(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.Q().r,g=x.v,f=new A.aF(h,B.ai,i,i,A.a([],g))
f.D(new A.aZ(358,462))
f.D(new A.kR(354,422,370,382,374,332))
f.D(new A.aq(410,332))
f.D(new A.kR(416,382,432,422,428,462))
f.D(new A.bu())
w=A.K()
w.sav(A.jy(new A.o(354,0),new A.o(430,0),D.dwj,U.zL,B.x,i))
d.af(f,w)
v=new A.e4()
v.d_(4)
for(u=0;u<30;++u){t=364+v.ai()*56
s=462-v.ai()*126
w=v.ai()
r=v.ai()
q=B.w.j(0.18)
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.b=B.a9
p.c=1.1
p.r=q.gp(0)
p.d=B.bw
p.e=B.dP
d.ah(new A.o(t,s),new A.o(t+w*3-1.5,s+8+r*12),p)}for(o=0;o<6;++o){n=D.ddj[o]
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
r=new A.c5(p,m,w,q)
l.push(r)
p=k.f
if(p!=null)r.ak(p)
k.ab()
r=new A.ao(B.O,B.M,B.R,B.T,B.P)
r.b=B.a9
r.c=8
r.r=D.ag2.gp(0)
r.d=B.bw
r.e=B.dP
d.af(k,r)
for(j=0;j<6;++j){r=v.ai()
p=v.ai()
m=v.ai()
l=new A.ao(B.O,B.M,B.R,B.T,B.P)
l.r=A.ar(D.bgQ,D.bn5,v.ai()).j(0.92).gp(0)
d.N(new A.o(w+(r*36-18),q+(p*18-14)),8+m*7,l)}w+=0
r=new A.ao(B.O,B.M,B.R,B.T,B.P)
r.b=B.a9
r.c=1.2
r.r=D.ZC.gp(0)
r.d=B.bw
r.e=B.dP
d.ah(new A.o(w,q+8),new A.o(w,q+22),r)
q=A.bs(new A.o(w,q+28),13,7)
w=new A.ao(B.O,B.M,B.R,B.T,B.P)
w.r=D.bok.gp(0)
d.bZ(q,w)}},
i7u(b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b5.a,a6=b5.b,a7=b5.c,a8=b5.d,a9=a7*0.5,b0=A.bs(new A.o(a5,a6+2),a9,a7*2.8),b1=B.w.j(0.3),b2=$.Q(),b3=A.K()
b3.r=b1.gp(0)
b4.bZ(b0,b3)
b2=b2.r
b3=x.v
w=new A.aF(b2,B.ai,a4,a4,A.a([],b3))
b0=a5-a7
b1=a6-a8
w.D(new A.aZ(b0,b1))
w.D(new A.aq(b0,a6))
v=a5+a7
w.D(new A.c5(a5,a6+a7*0.22,v,a6))
w.D(new A.aq(v,b1))
w.D(new A.bu())
u=A.K()
u.sav(A.jy(new A.o(b0,0),new A.o(v,0),D.ddp,U.zL,B.x,a4))
b4.af(w,u)
t=new A.e4()
t.d_(B.o.V(a5*7))
v=b4.c
J.bo(v.save())
b4.mQ(0,w)
for(s=0;s<40;++s){r=b0+t.ai()*a7*2
q=b1+t.ai()*a8
u=t.ai()
p=t.ai()
o=B.w.j(0.14)
n=new A.ao(B.O,B.M,B.R,B.T,B.P)
n.b=B.a9
n.c=1
n.r=o.gp(0)
n.d=B.bw
n.e=B.dP
b4.ah(new A.o(r,q),new A.o(r+4+u*5,q+p*2-1),n)}u=b1+5
p=a7*2
o=D.ahD.j(0.75)
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
h=new A.bu()
j.push(h)
j=i.f
if(j!=null)h.ak(j)
i.ab()
j=new A.ao(B.O,B.M,B.R,B.T,B.P)
j.r=D.lB.j(0.85).gp(0)
b4.af(i,j)}u=A.a([],b3)
f=new A.aF(b2,B.ai,a4,a4,u)
b2=a6-8
f.D(new A.aZ(b0,b2))
for(p/=6,l=0;l<=B.j.bh(p);++l){o=(l&1)===0?0:-5
o=new A.aq(b0+l*6,b2+o)
u.push(o)
n=f.f
if(n!=null)o.ak(n)
f.ab()}b4.af(f,C.iw(D.ahD.j(0.7),1.6))
v.restore()
b0=$.Q().r
b2=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
u=a7*0.1
p=a5+u
o=a7*0.28
n=p-o
m=a6+1
b2.D(new A.aZ(n,m))
j=a6-a8*0.55
b2.D(new A.aq(n,j))
o=p+o
b2.D(new A.c5(p,a6-a8*0.82,o,j))
b2.D(new A.aq(o,m))
b2.D(new A.bu())
m=A.K()
m.r=D.ahP.gp(0)
b4.af(b2,m)
m=A.K()
m.r=D.ahP.gp(0)
b4.N(new A.o(a5-a7*0.62,a6-a8*0.5),u,m)
m=b5.e
u=b1-m
b2=a7*1.38
o=a5-b2
j=b1+4
p=a5+b2
e=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
e.D(new A.aZ(o,j))
n=b1-m*0.55
e.D(new A.c5(a5-a9,n,a5,u))
e.D(new A.c5(a5+a9,n,p,j))
e.D(new A.c5(a5,b1+a7*0.34,o,j))
e.D(new A.bu())
b1=A.K()
n=a7*1.4
b1.sav(A.jy(new A.o(a5-n,0),new A.o(a5+n,0),D.dgU,U.zL,B.x,a4))
b4.af(e,b1)
J.bo(v.save())
b4.mQ(0,e)
for(a9=p-o,s=0;s<70;++s){d=s/69
b1=Math.sin(d*3.141592653589793)
p=t.ai()
n=(t.h8()?B.w:D.bgn).j(0.16)
i=new A.ao(B.O,B.M,B.R,B.T,B.P)
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
n=new A.c5(a5,a0+7+l*1.5,a5+a1,n)
b1.push(n)
b1=p.f
if(b1!=null)n.ak(b1)
p.ab()
b1=B.w.j(0.22)
n=new A.ao(B.O,B.M,B.R,B.T,B.P)
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
v=new A.ao(B.O,B.M,B.R,B.T,B.P)
v.b=B.a9
v.c=1.1
v.r=D.bnv.gp(0)
v.d=B.bw
v.e=B.dP
b4.ah(new A.o(a2,a3),new A.o(a2+(b1-0.5)*2,a3+3+b2*4),v)}a9=new A.aF(b0,B.ai,a4,a4,A.a([],b3))
b0=u+4
a9.D(new A.aZ(a5-2.5,b0))
a9.D(new A.aq(a5,u-7))
a9.D(new A.aq(a5+2.5,b0))
a9.D(new A.bu())
b0=A.K()
b0.r=D.bjJ.gp(0)
b4.af(a9,b0)},
i7j(d,e){var w,v,u,t,s,r,q
for(w=e.a,v=e.b,u=v+0,t=v+-16,s=0;s<2;++s){r=w+I.aC1[s]
$.Q()
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.b=B.a9
q.c=3
q.r=D.ZC.gp(0)
q.d=B.bw
q.e=B.dP
d.ah(new A.o(r,u),new A.o(r,t),q)}u=A.bs(e.a5(0,K.aLa),24,36)
t=$.Q()
r=A.K()
r.r=D.bso.gp(0)
d.bZ(u,r)
t=new A.aF(t.r,B.ai,null,null,A.a([],x.v))
r=w-24
u=v-30
t.D(new A.aZ(r,u))
t.D(new A.aq(w,v-54))
t.D(new A.aq(w+24,u))
t.D(new A.c5(w,v-24,r,u))
t.D(new A.bu())
u=A.K()
u.r=D.agJ.gp(0)
d.af(t,u)},
i6B(d){switch(B.o.F(d,8)){case 0:return D.b_U
case 1:return D.b_S
case 2:return D.b_R
case 3:return D.b_Q
case 4:return D.b_T
case 5:return D.b_V
case 6:return D.hv8
default:return D.hv7}},
Su(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=new C.boP()
w.a=n
w.b=q
w.c=g
w.d=r
w.y=h
w.z=i
w.e=t
w.r=o
w.x=f
w.Q=j==null?D.a8l:j
w.as=k==null?D.E6:k
C.hys(d,e,p,C.i6B(m),w,s,m,l)},
hzW(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
bSP:function bSP(){var _=this
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
tc:function tc(d,e,f,g,h,i,j,k,l,m){var _=this
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
boP:function boP(){var _=this
_.a=0
_.b=0.25
_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=0
_.as=_.Q=null
_.at=!1},
am4:function am4(){this.b=this.a=null},
aWl:function aWl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bSH:function bSH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSI:function bSI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSJ:function bSJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSK:function bSK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSL:function bSL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSM:function bSM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSN:function bSN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSO:function bSO(){},
bSG:function bSG(d){this.a=d},
afN:function afN(d,e){this.a=d
this.b=e},
adM:function adM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
N_(d){var w,v,u,t,s=A.a([],x.u)
for(w=d.f,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(!t.as&&B.a.i(t.b).length!==0)s.push(t)}s=new C.bRq(s)
s.bBo(d)
return s},
H_(d,e,f,g,h,i,j){var w,v=A.U(g).k("Y<1>")
v=A.d4(new A.Y(g,new C.ftu(f),v),v.k("M.E"))
w=A.C(v,A.a4(v).k("ch.E"))
B.d.e0(w,d)
if(w.length===0)return null
v=A.a([f],x.s)
B.d.v(v,A.cW(w,0,A.dA(3,"count",x.S),A.U(w).c))
B.d.e0(v,d)
return new C.lr(e,v,B.d.co(v,f),h,i,"tree",j)},
isA(c5,c6,c7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null,b4="tf",b5="child",b6="children",b7="grandfather",b8="grandmother",b9="grandparent",c0=x.N,c1=A.T(c0,x.cg),c2=new C.h39(c1),c3=x.s,c4=A.a([],c3)
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
if(h===D.wo)g="father"
else g=h===D.oq?"mother":"parent"
h=B.a.i(i.b)
f=A.C(new A.Y(t,new C.h3b(l),v),s)
e=h+" is the "+g+" of "+l
c2.$2("parent",C.H_(c6,"Who is the "+g+" of "+l+"?",h,f,e+".",e+". A family is a chain, and each person is a link.",20))
if(c7){d=A.C(new A.Y(w,new C.h3c(i,m),p),o)
B.d.e0(d,c6)
c2.$2(b4,new C.lr("True or false: "+h+" is the "+g+" of "+l+".",D.aAU,0,"Yes, "+h+" is the "+g+" of "+l+".","",b4,15))
if(d.length!==0)c2.$2(b4,new C.lr("True or false: "+B.a.i(B.d.gH(d).b)+" is the "+g+" of "+l+".",D.aAU,1,"No, the "+g+" of "+l+" is "+h+".","",b4,15))}}a0=c5.G6(m)
h=a0.length
if(h!==0){a1=a0[c6.aw(h)]
h=B.a.i(a1.b)
f=A.C(new A.Y(t,new C.h3d(l,a0,c5),v),s)
e=a1.c
if(e===D.wo)e="son"
else e=e===D.oq?"daughter":b5
a2=l+" has "
a3=a0.length
a4=a3===1?b5:b6
c2.$2(b5,C.H_(c6,"Which of these people is a child of "+l+"?",h,f,h+" is the "+e+" of "+l+".",a2+a3+" "+a4+", and "+h+" is one of them.",20))
h=a0.length
a5=A.ez([h+1,h+2,Math.max(0,h-1)],n)
a5.W(0,a0.length)
h=a0.length
a4=A.a([],c3)
for(f=a5.$ti,e=new A.mw(a5,a5.r,f.k("mw<1>")),e.c=a5.e,f=f.c;e.C();){a3=e.d
a4.push(A.w(a3==null?f.a(a3):a3))}f=a0.length
e=""+f
f=f===1
a3=f?b5:b6
f=f?b5:b6
c2.$2("count",C.H_(c6,"How many children does "+l+" have?",""+h,a4,a2+e+" "+a3+".","Count them with me: "+l+" has "+e+" "+f+".",15))
if(a0.length>=2&&a0[0].Q!==a0[1].Q){h=B.a.i(B.d.gH(a0).b)
f=A.a([],c3)
for(e=A.U(a0),a2=e.k("iu<1>"),a3=new A.iu(a0,1,b3,a2),a3.n5(a0,1,b3,e.c),a3=new A.bP(a3,a3.gI(0),a2.k("bP<ak.E>")),a2=a2.k("ak.E");a3.C();){e=a3.d
f.push(B.a.i((e==null?a2.a(e):e).b))}c2.$2("oldest",C.H_(c6,"Who is the oldest child of "+l+"?",h,f,B.a.i(B.d.gH(a0).b)+" was born first.","The first born of "+l+" is "+B.a.i(B.d.gH(a0).b)+". The eldest child often helps to guide the younger ones.",20))}}a6=c5.arg(m)
if(a6!=null){h=B.a.i(a6.b)
f=A.C(new A.Y(t,new C.h3e(l),v),s)
e=l+" is married to "+h
c2.$2("spouse",C.H_(c6,"Who is "+l+" married to?",h,f,e+".",e+". When two people marry, two families become one.",20))}if(j)i=b3
else{j=c5.c
j===$&&A.c()
i=j.h(0,k)}a7=b3
if(!(i==null)){k=i.d
if(!(k==null)){j=c5.c
j===$&&A.c()
k=j.h(0,k)
a7=k}}if(a7!=null){k=B.a.i(a7.b)
j=A.C(new A.Y(t,new C.h3f(l),v),s)
h=k+" is the "
f=a7.c
e=f===D.wo
if(e)a2=b7
else a2=f===D.oq?b8:b9
if(e)f=b7
else f=f===D.oq?b8:b9
c2.$2("grand",C.H_(c6,"Who is the grandparent of "+l+"?",k,j,h+a2+" of "+l+".",h+f+" of "+l+", two steps up the tree.",20))}a8=c5.aMT(m)
k=a8.length
if(k!==0){k=B.a.i(a8[c6.aw(k)].b)
j=A.C(new A.Y(t,new C.h3g(l,a8,c5),v),s)
h=k+" and "+l
c2.$2("sibling",C.H_(c6,"Who is a brother or sister of "+l+"?",k,j,h+" share the same parent.",h+" are brother and sister: the same roots, two branches.",20))}k=B.a.i(m.x)
if(k.length!==0){j=A.C(r,c0)
B.d.v(j,D.cNU)
h=l+" was born in "+k
c2.$2("place",C.H_(c6,"Where was "+l+" born?",k,j,h+".",h+". Every one of us comes from a place.",20))}k=B.a.i(m.z)
if(k.length!==0){j=A.C(q,c0)
B.d.v(j,D.d3h)
h=l+" works as "+k
f=h+"."
c2.$2("job",C.H_(c6,"What work does "+l+" do?",k,j,f,h+". Work is how we serve the family and the village.",20))
h=A.a([],c3)
for(j=w.length,a9=0;a9<w.length;w.length===j||(0,A.J)(w),++a9){b0=w[a9]
if(B.a.i(b0.z).toLowerCase()!==k.toLowerCase())h.push(B.a.i(b0.b))}c2.$2("who",C.H_(c6,"Who works as "+k+"?",l,h,f,"Remember: "+l+" works as "+k+".",20))}k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
b1=k==null?b3:k.b[1]
if(b1!=null){b2=A.iX(b1,b3,b3)
c2.$2("year",C.H_(c6,"In which year was "+l+" born?",b1,A.a([""+(b2+2),""+(b2-3),""+(b2+5),""+(b2-1)],c3),l+" was born in "+b1+".",l+" was born in the year "+b1+".",25))}}return c1},
bDS(d,e,f,g){var w,v,u,t,s,r,q,p,o,n={},m=C.N_(d),l=new A.e4()
l.d_(f)
w=C.isA(m,l,g)
for(v=new A.dq(w,w.r,w.e);v.C();)J.hij(v.d,l)
v=A.a4(w).k("cx<1>")
u=A.C(new A.cx(w,v),v.k("M.E"))
B.d.e0(u,l)
t=A.a([],x.J)
s=A.aR(x.N)
n.a=0
for(;;){if(!(t.length<e&&B.d.aV(u,new C.fGH(n,w))))break
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
if(v<e){v=A.C(D.ayU,x.df)
B.d.e0(v,l)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r){o=v[r]
if(t.length>=e)break
t.push(C.hyz(o,l))}}else if(!g&&v>3){o=C.hyz(D.ayU[l.aw(14)],l)
t[t.length-1-l.aw(3)]=o}return t},
hyz(d,e){var w=d.b,v=w[d.c]
w=A.C(w,x.N)
B.d.e0(w,e)
return new C.lr(d.a,w,B.d.co(w,v),d.d,d.e,d.f,d.r)},
hDw(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=C.N_(a2),a1=new A.e4()
a1.d_(a3)
w=A.a([],x.ar)
v=x.u
u=A.a([],v)
for(t=a0.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a0.G6(q).length>=2)u.push(q)}B.d.e0(u,a1)
for(s=u.length,p=x.t,o=x.s,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){n=u[r]
m=a0.G6(n)
l=A.U(m)
k=new A.iu(m,0,5,l.k("iu<1>"))
k.n5(m,0,5,l.c)
j=k.dm(0)
if(new A.N(j,new C.fUU(),A.U(j).k("N<1,F>")).fM(0).a<j.length)continue
m=B.a.i(n.b)
l=A.a([],o)
for(k=j.length,i=0;i<j.length;j.length===k||(0,A.J)(j),++i)l.push(B.a.i(j[i].b))
k=A.a([],p)
for(h=0;h<j.length;++h)k.push(h)
g=A.a([],p)
for(f=j.length,i=0;i<j.length;j.length===f||(0,A.J)(j),++i)g.push(C.aS4(a0,j[i]))
w.push(new C.au5("The children of "+m,"Tap two people to swap them. Put them in a line from the oldest to the youngest.",g,l,k))
if(w.length>=4)return w}u=x.S
e=A.T(u,x.do)
for(s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
J.c6(e.c3(0,a0.amr(q),new C.fUV()),q)}if(e.a>=2&&w.length<4){t=e.$ti.k("cx<1>")
d=A.C(new A.cx(e,t),t.k("M.E"))
B.d.fi(d)
v=A.a([],v)
for(u=A.cW(d,0,A.dA(5,"count",u),A.U(d).c),t=u.$ti,u=new A.bP(u,u.gI(0),t.k("bP<ak.E>")),t=t.k("ak.E");u.C();){s=u.d
s=e.h(0,s==null?t.a(s):s)
s.toString
m=J.cC(s)
m.e0(s,a1)
v.push(m.gH(s))}u=A.a([],o)
for(t=v.length,r=0;r<v.length;v.length===t||(0,A.J)(v),++r)u.push(B.a.i(v[r].b))
t=A.a([],p)
for(h=0;h<v.length;++h)t.push(h)
s=A.a([],p)
for(p=v.length,r=0;r<v.length;v.length===p||(0,A.J)(v),++r)s.push(C.aS4(a0,v[r]))
w.push(new C.au5("Which generation comes first?","Tap two people to swap them. Put the eldest generation first and the youngest last.",s,u,t))}return w},
aQz(d){return B.d.anU(D.aBo,new C.fCH(d))},
iia(d){return A.nz(new A.Y(D.aBo,new C.fJu(d),x.av))},
bSe(d){return C.hNb(d)},
hNb(d){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSe=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bSe)
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
return A.i($async$bSe,v)},
BR(d,e){return C.hN8(d,e)},
hN8(d,e){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o,n,m
var $async$BR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BR)
case 7:r=g
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_stars_v1_"+p.toLowerCase()))
if(o==null)o=0
q=o+(e<0?0:e)
w=8
return A.b(r.aB("Int","ngmy_family_stars_v1_"+p.toLowerCase(),q),$async$BR)
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
return A.i($async$BR,v)},
bSd(d,e,f){return C.hN9(d,e,f)},
hN9(d,e,f){var w=0,v=A.j(x.S),u,t=2,s=[],r,q,p,o
var $async$bSd=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$bSd)
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
return A.i($async$bSd,v)},
BS(d,e,f,g){return C.hNa(d,e,f,g)},
hNa(d,e,f,g){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m
var $async$BS=A.e(function(h,i){if(h===1){s.push(i)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(A.az(),$async$BS)
case 7:r=i
p=B.a.i(d)
o=A.eo(J.t(r.a,"ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f))
q=o==null?0:o
w=g>q?8:9
break
case 8:w=10
return A.b(r.aB("Int","ngmy_family_best_v1_"+p.toLowerCase()+"_"+e+"_"+f,g),$async$BS)
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
return A.i($async$BS,v)},
bG5(d,e,f){var w
if(f<=0)return 0
w=d===f?20:0
return d*5+w+Math.min(e,8)},
h5c(d,e,f,g){return new C.akG(g,d==null?A.a(["","","",""],x.s):d,e,f)},
hLf(d){var w,v,u,t=d.h(0,"q")
t=J.k(t==null?"":t)
w=A.a([],x.s)
v=x.j
u=J.aU(v.b(d.h(0,"a"))?v.a(d.h(0,"a")):B.cq)
while(u.C())w.push(J.k(u.gR(u)))
u=x.N
w=A.cW(w,0,A.dA(4,"count",x.S),u).dm(0)
B.d.v(w,A.bZ(Math.max(0,4-(v.b(d.h(0,"a"))?J.ad(v.a(d.h(0,"a"))):0)),"",!1,u))
v=A.aI(d.h(0,"c"))
v=v==null?null:B.j.M(v)
v=B.o.E(v==null?0:v,0,3)
u=A.aI(d.h(0,"s"))
u=u==null?null:B.j.M(u)
return C.h5c(w,v,B.o.E(u==null?20:u,5,60),t)},
hjt(d){var w,v,u,t,s,r,q=J.a7(d),p=q.h(d,"id")
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
if(u.b(r))v.push(C.hLf(A.a3(r,t,s)))}return new C.MJ(p,w,v)},
hdG(d){var w,v=A.a([],x.c)
for(w=J.aU(d.z);w.C();)v.push(C.hjt(w.gR(w)))
return v},
aS4(d,e){var w=e.c===D.oq
if(d.amr(e)===0&&d.G6(e).length!==0)return w?0:1
if(d.G6(e).length!==0||d.arg(e)!=null)return w?2:3
return w?4:5},
hEC(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N_(a4),a3=new A.e4()
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
j=i.h(0,k)}h=a2.G6(m)
g=a2.arg(m)
f=a2.aMT(m)
k=B.a.i(m.x)
if(k.length!==0)l.push("I was born in "+k+".")
k=B.a.i(m.z)
if(k.length!==0)l.push("I work as "+k+".")
k=A.ag("(1[6-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(m.w)
e=k==null?null:k.b[1]
if(e!=null)l.push("I was born in the year "+e+".")
k=f.length
if(k!==0){i=k===1?"brother or sister":"brothers and sisters"
l.push("I have "+k+" "+i+".")}k=h.length
if(k!==0){i=k===1?"child":"children"
l.push("I have "+k+" "+i+".")}if(g!=null)l.push("I am married to "+B.a.i(g.b)+".")
if(h.length!==0){k=m.c
if(k===D.wo)k="father"
else k=k===D.oq?"mother":"parent"
l.push("I am the "+k+" of "+B.a.i(B.d.gH(h).b)+".")}if(j!=null){k=j.c
if(k===D.wo)k="father"
else k=k===D.oq?"mother":"parent"
l.push("My "+k+" is "+B.a.i(j.b)+".")}if(l.length<3)continue
B.d.e0(l,a3)
B.d.aZ(l,new C.h3z())
d=B.a.i(m.b)
a0=A.C(new A.Y(s,new C.h3A(d),o),n)
B.d.e0(a0,a3)
k=A.a([d],t)
i=A.U(a0)
a1=new A.iu(a0,0,3,i.k("iu<1>"))
a1.n5(a0,0,3,i.c)
B.d.v(k,a1)
B.d.e0(k,a3)
a1=C.aS4(a2,m)
i=new A.iu(l,0,4,p)
i.n5(l,0,4,r)
w.push(new C.bai(d,a1,i.dm(0),k))
if(w.length>=5)break}return w},
hwb(d){return B.a.q(d,"married to")||B.a.q(d," of ")||B.a.a0(d,"My ")?1:0},
hDI(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=C.N_(a4),a3=new A.e4()
a3.d_(a5)
w=A.a([],x.gy)
v=x.u
u=A.a([],v)
for(t=a2.b,s=t.length,r=0;r<t.length;t.length===s||(0,A.J)(t),++r){q=t[r]
if(a2.G6(q).length>=2)u.push(q)}B.d.e0(u,a3)
for(s=u.length,p=x.t,o=x.s,n=x.P,m=x.fT,r=0;r<u.length;u.length===s||(0,A.J)(u),++r){l=u[r]
k=a2.G6(l)
j=A.U(k)
i=new A.iu(k,0,4,j.k("iu<1>"))
i.n5(k,0,4,j.c)
h=i.dm(0)
i=A.a([],v)
for(k=t.length,j=l.a,g=0;g<t.length;t.length===k||(0,A.J)(t),++g){q=t[g]
if(q.a!==j&&!B.d.aV(h,new C.fVp(q))&&q.d!==j)i.push(q)}B.d.e0(i,a3)
k=i.length
if(k===0)continue
k=Math.min(2,k)
j=new A.iu(i,0,k,m)
j.n5(i,0,k,n)
f=j.dm(0)
j=B.a.i(l.b)
k=C.aS4(a2,l)
i=A.a([],o)
for(e=h.length,g=0;g<h.length;h.length===e||(0,A.J)(h),++g)i.push(B.a.i(h[g].b))
e=A.a([],p)
for(d=h.length,g=0;g<h.length;h.length===d||(0,A.J)(h),++g)e.push(C.aS4(a2,h[g]))
d=A.a([],o)
for(a0=f.length,g=0;g<f.length;f.length===a0||(0,A.J)(f),++g)d.push(B.a.i(f[g].b))
a0=A.a([],p)
for(a1=f.length,g=0;g<f.length;f.length===a1||(0,A.J)(f),++g)a0.push(C.aS4(a2,f[g]))
w.push(new C.a9R(j,k,i,e,d,a0))
if(w.length>=3)break}return w},
lr:function lr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bRq:function bRq(d){this.b=d
this.c=$},
bRr:function bRr(){},
bRs:function bRs(d){this.a=d},
ftu:function ftu(d){this.a=d},
h39:function h39(d){this.a=d},
h3a:function h3a(){},
h3b:function h3b(d){this.a=d},
h3c:function h3c(d,e){this.a=d
this.b=e},
h3d:function h3d(d,e,f){this.a=d
this.b=e
this.c=f},
h38:function h38(d,e){this.a=d
this.b=e},
h3e:function h3e(d){this.a=d},
h3f:function h3f(d){this.a=d},
h3g:function h3g(d,e,f){this.a=d
this.b=e
this.c=f},
h37:function h37(d,e){this.a=d
this.b=e},
fGH:function fGH(d,e){this.a=d
this.b=e},
au5:function au5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fUU:function fUU(){},
fUV:function fUV(){},
zB:function zB(d,e,f){this.a=d
this.b=e
this.c=f},
fCH:function fCH(d){this.a=d},
fJu:function fJu(d){this.a=d},
akG:function akG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bMe:function bMe(){},
MJ:function MJ(d,e,f){this.a=d
this.b=e
this.c=f},
bai:function bai(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
h3z:function h3z(){},
h3A:function h3A(d){this.a=d},
a9R:function a9R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fVp:function fVp(d){this.a=d},
bhy:function bhy(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=-0.05
_.f=_.e=!1
_.r=0},
afL:function afL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=1},
ajZ:function ajZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ak_:function ak_(d,e,f,g,h){var _=this
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
_.by$=g
_.a9$=h
_.c=_.a=null},
bKp:function bKp(d){this.a=d},
bKk:function bKk(){},
bKq:function bKq(){},
bKi:function bKi(){},
bKj:function bKj(){},
bKo:function bKo(d){this.a=d},
bKl:function bKl(d,e){this.a=d
this.b=e},
bKn:function bKn(d,e){this.a=d
this.b=e},
bKm:function bKm(d,e){this.a=d
this.b=e},
bKh:function bKh(d){this.a=d},
bcJ:function bcJ(d,e){this.b=d
this.a=e},
QD:function QD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBn:function aBn(d,e,f){this.b=d
this.c=e
this.a=f},
azS:function azS(d,e,f){this.a=d
this.b=e
this.c=f},
auH:function auH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
auI:function auI(d,e,f){var _=this
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
cpM:function cpM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpN:function cpN(d){this.a=d},
cpL:function cpL(d){this.a=d},
cpO:function cpO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpP:function cpP(){},
cpQ:function cpQ(d,e){this.a=d
this.b=e},
cpR:function cpR(){},
cpS:function cpS(d){this.a=d},
cpI:function cpI(d){this.a=d},
cpJ:function cpJ(d,e){this.a=d
this.b=e},
cpK:function cpK(d,e,f){this.a=d
this.b=e
this.c=f},
cpD:function cpD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpF:function cpF(d,e){this.a=d
this.b=e},
cpG:function cpG(d,e){this.a=d
this.b=e},
cpE:function cpE(d,e){this.a=d
this.b=e},
cpC:function cpC(){},
cpH:function cpH(){},
bcc:function bcc(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
cPN:function cPN(){},
ayE:function ayE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ayF:function ayF(d){var _=this
_.d=$
_.e=0
_.f=1
_.y=_.x=_.w=_.r=0
_.z=d
_.Q=-1
_.ax=_.at=_.as=!1
_.ay=0
_.c=_.a=_.ch=null},
cEK:function cEK(d){this.a=d},
cEJ:function cEJ(d){this.a=d},
cES:function cES(d,e){this.a=d
this.b=e},
cET:function cET(d,e){this.a=d
this.b=e},
cEU:function cEU(d){this.a=d},
cER:function cER(d){this.a=d},
cEV:function cEV(d){this.a=d},
cEW:function cEW(d,e){this.a=d
this.b=e},
cEX:function cEX(){},
cEY:function cEY(d){this.a=d},
cEM:function cEM(d){this.a=d},
cEN:function cEN(d,e){this.a=d
this.b=e},
cEL:function cEL(d,e){this.a=d
this.b=e},
cEO:function cEO(){},
cEP:function cEP(){},
cEQ:function cEQ(d,e){this.a=d
this.b=e},
azD:function azD(){},
aGP:function aGP(){},
hbq(d){var w=d.a,v=d.b,u=Math.min(w/450,v/900)
return new A.br9((w-450*u)/2,(v-900*u)/2,u)},
afz:function afz(){},
f62:function f62(d){this.a=d},
aKB:function aKB(d){var _=this
_.a=d
_.b=null
_.c=""
_.d=0},
fgb:function fgb(d){this.a=d},
alV:function alV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alW:function alW(d,e,f,g,h,i,j){var _=this
_.e=_.d=$
_.f=d
_.r=$
_.w=e
_.z=_.y=_.x=0
_.at=_.as=_.Q=!1
_.ay=_.ax=-9
_.q7$=f
_.LS$=g
_.amY$=h
_.by$=i
_.a9$=j
_.c=_.a=null},
bSc:function bSc(d){this.a=d},
bSb:function bSb(){},
bS9:function bS9(d){this.a=d},
bS7:function bS7(){},
bS8:function bS8(d){this.a=d},
bS4:function bS4(d,e){this.a=d
this.b=e},
bS5:function bS5(){},
bS6:function bS6(d){this.a=d},
bSa:function bSa(d,e){this.a=d
this.b=e},
bS3:function bS3(d){this.a=d},
bsQ:function bsQ(d,e){this.b=d
this.a=e},
f63:function f63(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f64:function f64(d,e,f){this.a=d
this.b=e
this.c=f},
f65:function f65(d,e,f){this.a=d
this.b=e
this.c=f},
f66:function f66(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f67:function f67(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f68:function f68(){},
alT:function alT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alU:function alU(d,e,f,g,h,i,j){var _=this
_.d=$
_.e=d
_.x=_.w=_.r=_.f=0
_.y=-1
_.Q=_.z=$
_.as=e
_.ch=_.ay=_.ax=_.at=!1
_.cx=_.CW=-9
_.q7$=f
_.LS$=g
_.amY$=h
_.by$=i
_.a9$=j
_.c=_.a=null},
bRQ:function bRQ(){},
bS0:function bS0(d,e){this.a=d
this.b=e},
bS1:function bS1(d){this.a=d},
bS2:function bS2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bRX:function bRX(){},
bRW:function bRW(d,e){this.a=d
this.b=e},
bRY:function bRY(d,e){this.a=d
this.b=e},
bRZ:function bRZ(){},
bS_:function bS_(d){this.a=d},
bRS:function bRS(d){this.a=d},
bRT:function bRT(d){this.a=d},
bRU:function bRU(d){this.a=d},
bRR:function bRR(d,e){this.a=d
this.b=e},
bRV:function bRV(d){this.a=d},
bjn:function bjn(d,e){this.b=d
this.a=e},
dr2:function dr2(){},
a20:function a20(d,e){this.a=d
this.b=e},
alP:function alP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
alQ:function alQ(d,e,f,g,h,i){var _=this
_.f=_.e=_.d=$
_.r=d
_.w=-1
_.at=_.as=_.z=_.y=_.x=0
_.ch=_.ay=_.ax=!1
_.cy=_.cx=_.CW=0
_.db=2.6
_.q7$=e
_.LS$=f
_.amY$=g
_.by$=h
_.a9$=i
_.c=_.a=null},
bRC:function bRC(d){this.a=d},
bRB:function bRB(){},
bRA:function bRA(){},
bRu:function bRu(){},
bRv:function bRv(){},
bRz:function bRz(d,e,f){this.a=d
this.b=e
this.c=f},
bRy:function bRy(d){this.a=d},
bRw:function bRw(d,e){this.a=d
this.b=e},
bRx:function bRx(d){this.a=d},
biO:function biO(d,e){this.b=d
this.a=e},
aBq:function aBq(){},
bgl:function bgl(){},
aBs:function aBs(){},
bgm:function bgm(){},
aBt:function aBt(){},
bgn:function bgn(){},
us(d,e,f,g,h){var w,v,u=null,t=A.m(18),s=A.a([],x.V)
s.push(new A.ac(0,B.G,f.j(0.4),B.j7,14))
w=x.p
v=A.a([],w)
if(g!=null)B.d.v(v,A.a([A.X(g,h,u,u,u,20),B.ae],w))
v.push(A.d(d,u,u,u,u,u,u,A.l(u,u,h,u,u,u,u,u,u,u,u,15,u,u,B.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u))
return A.aA(u,A.q(u,A.A(v,B.m,u,B.e,B.Q,0,u,u),B.f,u,u,new A.p(f,u,u,t,s,u,B.n),u,u,u,u,B.Oc,u,u,u),B.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,e,u,u,u,u,u,u,!1,B.a4)},
hkg(d,e,f,g,h,i,j){return new C.alR(i,h,d,j,e,f,g,null)},
a6p:function a6p(d,e){this.c=d
this.a=e},
biV:function biV(d){this.a=d},
tE:function tE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bRt:function bRt(d){this.a=d},
Iq:function Iq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Wd:function Wd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blF:function blF(d,e){var _=this
_.d=$
_.e=0
_.f=d
_.r=e
_.c=_.a=null},
e0U:function e0U(d,e){this.a=d
this.b=e},
e0V:function e0V(d){this.a=d},
e0W:function e0W(d,e){this.a=d
this.b=e},
e0S:function e0S(d){this.a=d},
e0T:function e0T(d){this.a=d},
e0R:function e0R(d){this.a=d},
e0P:function e0P(d){this.a=d},
e0Q:function e0Q(d){this.a=d},
e0O:function e0O(d,e){this.a=d
this.b=e},
e0X:function e0X(d){this.a=d},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d,e){this.a=d
this.b=e},
e1_:function e1_(d,e){this.a=d
this.b=e},
e12:function e12(d,e){this.a=d
this.b=e},
e13:function e13(d,e){this.a=d
this.b=e},
e14:function e14(d,e){this.a=d
this.b=e},
e15:function e15(d,e){this.a=d
this.b=e},
e16:function e16(d,e){this.a=d
this.b=e},
e17:function e17(d,e,f){this.a=d
this.b=e
this.c=f},
e18:function e18(d,e){this.a=d
this.b=e},
e19:function e19(d,e){this.a=d
this.b=e},
e10:function e10(d){this.a=d},
e11:function e11(d){this.a=d},
a_T:function a_T(d,e){this.a=d
this.b=e},
alR:function alR(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
alS:function alS(d){var _=this
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
bRO:function bRO(d){this.a=d},
bRP:function bRP(d){this.a=d},
bRN:function bRN(d){this.a=d},
bRE:function bRE(d){this.a=d},
bRF:function bRF(d){this.a=d},
bRD:function bRD(d){this.a=d},
bRK:function bRK(d,e,f){this.a=d
this.b=e
this.c=f},
bRL:function bRL(d){this.a=d},
bRH:function bRH(d,e){this.a=d
this.b=e},
bRI:function bRI(d,e,f){this.a=d
this.b=e
this.c=f},
bRM:function bRM(){},
bRJ:function bRJ(d,e){this.a=d
this.b=e},
bRG:function bRG(d){this.a=d},
TU:function TU(d,e){this.c=d
this.a=e},
alO:function alO(d){var _=this
_.e=_.d=$
_.f=d
_.c=_.a=null},
bRe:function bRe(d){this.a=d},
bRf:function bRf(d){this.a=d},
bRp:function bRp(){},
bRo:function bRo(d,e,f){this.a=d
this.b=e
this.c=f},
bRj:function bRj(d,e){this.a=d
this.b=e},
bRi:function bRi(d,e){this.a=d
this.b=e},
bRk:function bRk(d){this.a=d},
bRl:function bRl(d,e){this.a=d
this.b=e},
bRm:function bRm(d,e){this.a=d
this.b=e},
bRh:function bRh(d,e){this.a=d
this.b=e},
bRn:function bRn(d,e,f){this.a=d
this.b=e
this.c=f},
bRg:function bRg(d,e){this.a=d
this.b=e},
igC(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3="(1[5-9]\\d\\d|20\\d\\d)",a4=C.aiO(a6),a5=a4.length
if(a5===0)return""
w=A.T(x.N,x.P)
for(v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
w.n(0,u.a,u)}t=A.bC(new A.V(Date.now(),0,!1))
s=new C.fG9(w,a4)
a5=a4.length
r='Family tree "'+a6.b+'" ('+a5+" people):\n"
for(q=A.U(a4),p=q.k("Y<1>"),q=q.k("cM<1,n>"),o=q.k("M.E"),n=x.s,v=0;v<a4.length;a4.length===a5||(0,A.J)(a4),++v){u=a4[v]
m=A.a([],n)
l=u.c
if(l!==D.yU)m.push(l===D.wo?"male":"female")
l=u.w
k=A.ag(a3,!0,!1,!1,!1).cE(l)
j=k==null?a2:k.b[1]
k=u.y
i=A.ag(a3,!0,!1,!1,!1).cE(k)
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
m.push("child of "+l+k)}a0=A.C(new A.cM(new A.Y(a4,new C.fG7(u,f),p),new C.fG8(),q),o)
if(a0.length!==0)m.push("children: "+B.d.aN(a0,", "))
l=m.length===0?"":" \u2014 "+B.d.aN(m,"; ")
l=r+("- "+u.b+l)
a1=B.a.i(u.r)
r=a1.length
if(r!==0){l+=". Notes: "+(r>600?B.a.aC(a1,0,600)+"\u2026":a1)
r=l}else r=l
r+="\n"}return B.a.i(r.charCodeAt(0)==0?r:r)},
igD(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.aiO(a0),d=e.length
if(d===0)return""
w=x.N
v=A.T(w,x.P)
for(u=0;t=e.length,u<t;e.length===d||(0,A.J)(e),++u){s=e[u]
v.n(0,s.a,s)}r=new C.fGe(v,e)
q=new C.fGc(v)
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
p.n(0,s.a,d)}}d=p.$ti.k("b8<2>")
d=A.d4(new A.b8(p,d),d.k("M.E"))
n=A.C(d,A.a4(d).k("ch.E"))
B.d.fi(n)
for(d=n.length,w=x.s,u=0,t="";u<n.length;n.length===d||(0,A.J)(n),++u){m=n[u]
t+="Generation "+(m+1)+"\n"
for(l=B.d.gae(e),k=new A.eB(l,new C.fGd(p,m));k.C();t=f){j=l.gR(0)
i=A.a([],w)
h=r.$1(j)
if(h!=null)i.push("married to "+v.h(0,h).b)
g=j.d
if(g!=null&&v.al(0,g)&&h!==g)i.push("child of "+v.h(0,g).b)
j=j.b
f=i.length===0?"":" \u2014 "+B.d.aN(i,", ")
f=t+("\u2022 "+j+f+"\n")}t+="\n"}return B.a.i(t.charCodeAt(0)==0?t:t)},
i1o(d,e,f,g){var w,v,u=C.igE(d,e)
if(u<=0||f.length<=u)return new A.afd(!1,D.Dt,f)
if(g.q(0,e.a))return new A.afd(!1,D.Dt,f)
w=A.U(f).c
v=A.cW(f,0,A.dA(u,"count",x.S),w).dm(0)
return new A.afd(!0,A.cW(f,u,null,w).dm(0),v)},
i1p(d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1=d5?d3.f:C.aiO(d3),d2=d1.length
if(d2===0)return D.hsd
w=x.N
v=A.T(w,x.P)
for(u=0;u<d1.length;d1.length===d2||(0,A.J)(d1),++u){t=d1[u]
v.c3(0,t.a,new C.dgx(t))}s=new C.dgO(v)
d2=x.dy
r=A.T(w,d2)
q=new C.dgG(r)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
n=o.e
if(!s.$1(n)||n===o.a)continue
o=o.a
n.toString
q.$2(o,n)
q.$2(n,o)}m=new C.dgF(r)
l=A.T(w,x.do)
for(p=new A.dq(v,v.r,v.e);p.C();){o=p.d
k=o.d
j=!0
if(s.$1(k)){i=o.a
if(k!==i){k.toString
j=m.$2(k,i)}}if(j)continue
J.c6(l.c3(0,k,new C.dgy()),o)}h=new C.dgE(s)
g=new C.dgD(l,r)
p=v.$ti.k("b8<2>")
o=p.k("Y<M.E>")
f=A.C(new A.Y(new A.b8(v,p),new C.dgz(h),o),o.k("M.E"))
e=f.length===0?new A.b8(v,p).gH(0):B.d.gH(f)
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
a9=new C.dgM(new C.dgI(a1,a2,v,r,a3,l,d3,d4,a4,a5,a6),a8,A.T(p,d2),a7)
p=e.a
a9.$2(p,0)
for(o=new A.dq(v,v.r,v.e),j=a2.galX(a2);o.C();){b0=o.d
i=b0.a
if(a1.q(0,i))continue
b1=A.ez([i],w)
for(;h.$1(b0);b0=k){k=v.h(0,b0.d)
i=k.a
if(a1.q(0,i)||!b1.J(0,i))break}if(h.$1(b0)&&a2.al(0,b0.d)){i=a2.h(0,b0.d)
i.toString
b2=i+1}else{i=r.h(0,b0.a)
b3=A.nz(J.dI(i==null?B.Z:i,j))
if(b3!=null){i=a2.h(0,b3)
i.toString
b2=i}else b2=0}a9.$2(b0.a,b2)}b4=A.T(w,x.dO)
b5=A.a([],x.M)
b6=A.T(w,d2)
b7=new C.dgw(a2,new C.dgN(),b6,a3,b4,v,a4,a5,a6,b5)
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
b4.n(0,b8,new C.Gz(o,new A.o(j.a+c2,j.b)))}for(d2=b5.length,c4=0;c4<d2;++c4){c5=b5[c4]
w=c5.b
b5[c4]=new C.KS(c5.a,new A.o(w.a+c2,w.b),c5.c,c5.d)}d2=b6.$ti.k("cx<1>")
d2=A.C(new A.cx(b6,d2),d2.k("M.E"))
w=d2.length
u=0
for(;u<d2.length;d2.length===w||(0,A.J)(d2),++u){b8=d2[u]
o=b6.h(0,b8)
o.toString
b6.n(0,b8,o+c2)}c6=A.a([],x.dE)
a3.bO(0,new C.dgA(c6,b4))
for(d2=new A.ck(a4,a4.$ti.k("ck<1,2>")).gae(0),w=x.g;d2.C();){c7=d2.d
c8=c7.a
c9=b6.h(0,c8)
if(c9==null)continue
o=A.a([],w)
for(j=J.aU(c7.b);j.C();){i=j.gR(j)
if(b6.al(0,i)){d0=b6.h(0,i)
d0.toString
o.push(new A.o(d0,b4.h(0,i).b.b))}}for(j=B.d.gae(b5),i=new A.eB(j,new C.dgB(c8));i.C();)o.push(j.gR(0).b)
if(o.length===0)continue
B.d.aZ(o,new C.dgC())
c6.push(new C.aKw(new A.o(c9,b4.h(0,c8).b.b+112),B.I,!1,o))}return new C.bgr(b4,c6,b5,c0+c2+24,c1+24,p,b6.h(0,p))},
hzg(d){var w=A.ag("(1[5-9]\\d\\d|20\\d\\d)",!0,!1,!1,!1).cE(d)
return w==null?null:w.b[1]},
htq(d,e,f,g,h,i,j,k,l,m,n){return new C.a05(k,f,j,e,l,n,m,d,g,h,i,null)},
aDq(d,e,f,g,h,i,j){return new C.bkd(i,d,e,f,j,h,g,null)},
aqS:function aqS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEY:function aEY(d){var _=this
_.d=d
_.e=!0
_.c=_.a=null},
e2z:function e2z(d){this.a=d},
e2y:function e2y(d){this.a=d},
e2B:function e2B(d,e){this.a=d
this.b=e},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2D:function e2D(d){this.a=d},
e2x:function e2x(d,e){this.a=d
this.b=e},
e2A:function e2A(d){this.a=d},
e2F:function e2F(d){this.a=d},
e2E:function e2E(d,e){this.a=d
this.b=e},
aqM:function aqM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEV:function aEV(d,e,f){var _=this
_.d=$
_.e=d
_.f=!1
_.r=e
_.w=f
_.x=!1
_.c=_.a=_.y=null},
e2_:function e2_(d){this.a=d},
e1Y:function e1Y(d){this.a=d},
e1Z:function e1Z(d){this.a=d},
e20:function e20(d,e){this.a=d
this.b=e},
e1V:function e1V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1m:function e1m(d){this.a=d},
e1n:function e1n(d,e){this.a=d
this.b=e},
e1E:function e1E(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1D:function e1D(d,e){this.a=d
this.b=e},
e1F:function e1F(d){this.a=d},
e1G:function e1G(d,e){this.a=d
this.b=e},
e1U:function e1U(d,e){this.a=d
this.b=e},
e1B:function e1B(d){this.a=d},
e1A:function e1A(d){this.a=d},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1R:function e1R(){},
e1S:function e1S(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1Q:function e1Q(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1K:function e1K(d){this.a=d},
e1L:function e1L(d,e,f){this.a=d
this.b=e
this.c=f},
e1J:function e1J(d,e){this.a=d
this.b=e},
e1M:function e1M(d,e){this.a=d
this.b=e},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1I:function e1I(){},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1O:function e1O(d){this.a=d},
e1P:function e1P(d,e){this.a=d
this.b=e},
e1T:function e1T(d,e){this.a=d
this.b=e},
e1a:function e1a(d,e){this.a=d
this.b=e},
e1b:function e1b(d,e){this.a=d
this.b=e},
e22:function e22(d,e,f){this.a=d
this.b=e
this.c=f},
e1X:function e1X(d,e,f){this.a=d
this.b=e
this.c=f},
e1W:function e1W(d){this.a=d},
e1c:function e1c(d){this.a=d},
e1d:function e1d(d){this.a=d},
e1e:function e1e(){},
e1f:function e1f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1j:function e1j(d,e){this.a=d
this.b=e},
e1i:function e1i(d,e){this.a=d
this.b=e},
e1h:function e1h(d){this.a=d},
e1k:function e1k(d,e){this.a=d
this.b=e},
e1g:function e1g(d){this.a=d},
e21:function e21(d){this.a=d},
e1w:function e1w(){},
e1x:function e1x(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1v:function e1v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1r:function e1r(d,e,f){this.a=d
this.b=e
this.c=f},
e1q:function e1q(d,e,f){this.a=d
this.b=e
this.c=f},
e1o:function e1o(d,e){this.a=d
this.b=e},
e1s:function e1s(d){this.a=d},
e1t:function e1t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1p:function e1p(d,e){this.a=d
this.b=e},
e1u:function e1u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1y:function e1y(d,e){this.a=d
this.b=e},
e29:function e29(){},
e2a:function e2a(d,e){this.a=d
this.b=e},
e2b:function e2b(d){this.a=d},
e2c:function e2c(d,e){this.a=d
this.b=e},
e25:function e25(d){this.a=d},
e23:function e23(d,e){this.a=d
this.b=e},
e26:function e26(d,e){this.a=d
this.b=e},
e27:function e27(d,e){this.a=d
this.b=e},
e28:function e28(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2d:function e2d(d){this.a=d},
e24:function e24(d){this.a=d},
e1l:function e1l(d){this.a=d},
bgp:function bgp(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
dgu:function dgu(d){this.a=d},
dgt:function dgt(d,e){this.a=d
this.b=e},
dgv:function dgv(d){this.a=d},
dgs:function dgs(d,e){this.a=d
this.b=e},
fG9:function fG9(d,e){this.a=d
this.b=e},
fGa:function fGa(d){this.a=d},
fGb:function fGb(){},
fG7:function fG7(d,e){this.a=d
this.b=e},
fG8:function fG8(){},
fGe:function fGe(d,e){this.a=d
this.b=e},
fGf:function fGf(d){this.a=d},
fGg:function fGg(){},
fGc:function fGc(d){this.a=d},
fGd:function fGd(d,e){this.a=d
this.b=e},
KS:function KS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Gz:function Gz(d,e){this.a=d
this.b=e},
bgr:function bgr(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
dgx:function dgx(d){this.a=d},
dgO:function dgO(d){this.a=d},
dgG:function dgG(d){this.a=d},
dgH:function dgH(){},
dgF:function dgF(d){this.a=d},
dgy:function dgy(){},
dgE:function dgE(d){this.a=d},
dgD:function dgD(d,e){this.a=d
this.b=e},
dgz:function dgz(d){this.a=d},
dgI:function dgI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dgJ:function dgJ(d){this.a=d},
dgK:function dgK(d){this.a=d},
dgL:function dgL(){},
dgM:function dgM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dgN:function dgN(){},
dgw:function dgw(d,e,f,g,h,i,j,k,l,m){var _=this
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
dgA:function dgA(d,e){this.a=d
this.b=e},
dgB:function dgB(d){this.a=d},
dgC:function dgC(){},
aKw:function aKw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bgs:function bgs(d,e){this.b=d
this.a=e},
dgP:function dgP(){},
dgQ:function dgQ(d){this.a=d},
dgR:function dgR(d){this.a=d},
dgS:function dgS(){},
bke:function bke(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bfu:function bfu(d,e){this.b=d
this.a=e},
byb:function byb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
flM:function flM(d){this.a=d},
bnx:function bnx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
eWV:function eWV(d){this.a=d},
eWU:function eWU(d,e){this.a=d
this.b=e},
a05:function a05(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
aDo:function aDo(){var _=this
_.y=_.x=_.w=_.r=_.f=_.e=_.d=$
_.as=_.Q=_.z=null
_.at=1
_.ax=0
_.ay=!1
_.c=_.a=null},
dwI:function dwI(d,e){this.a=d
this.b=e},
dwH:function dwH(d){this.a=d},
dwF:function dwF(d){this.a=d},
dwG:function dwG(d){this.a=d},
dwR:function dwR(d){this.a=d},
dwS:function dwS(d){this.a=d},
dwQ:function dwQ(d,e){this.a=d
this.b=e},
dwT:function dwT(){},
dwW:function dwW(d){this.a=d},
dwP:function dwP(d,e){this.a=d
this.b=e},
dwV:function dwV(){},
dwX:function dwX(d){this.a=d},
dwO:function dwO(d,e){this.a=d
this.b=e},
dwY:function dwY(d){this.a=d},
dwN:function dwN(d){this.a=d},
dwZ:function dwZ(d){this.a=d},
dwM:function dwM(d){this.a=d},
dx_:function dx_(d){this.a=d},
dwL:function dwL(d){this.a=d},
dx0:function dx0(d){this.a=d},
dwK:function dwK(d){this.a=d},
dx1:function dx1(d){this.a=d},
dwJ:function dwJ(d,e){this.a=d
this.b=e},
dwU:function dwU(d){this.a=d},
ae7:function ae7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkd:function bkd(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ae6:function ae6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.f=f
_.r=g
_.w=h
_.a=i
_.$ti=j},
bkc:function bkc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dx2:function dx2(d){this.a=d},
dx3:function dx3(d,e){this.a=d
this.b=e},
aDp:function aDp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aJy:function aJy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ae8:function ae8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
dxc:function dxc(d){this.a=d},
Gv:function Gv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hoi(d){var w=d.T,v=x.N
return w.jq(w,new C.cez(),v,v)},
hTN(d){var w=d.bF
if(w>=0)return w
return 5},
hok(d,e){var w,v=B.a.i(e.toLowerCase())
if(v.length===0)return null
w=C.hoi(d).h(0,v)
if(w==null||w.length===0)return null
return A.bj(w)},
hoj(d,e){var w=C.hok(d,e)
if(w!=null&&w.cf(new A.V(Date.now(),0,!1)))return!0
return!1},
hTO(d,e){var w,v,u,t,s=B.a.i(e.toLowerCase())
if(s.length===0)return
w=x.N
v=A.a3(C.hoi(d),w,w)
u=C.hok(d,e)
t=u!=null&&u.cf(new A.V(Date.now(),0,!1))?u:new A.V(Date.now(),0,!1)
v.n(0,s,t.bR(A.dv(30,0,0,0,0,0).a).aa().ag())
d.T=v},
b0Y(d,e,f,g,h,i,j){var w=0,v=A.j(x.y),u,t
var $async$b0Y=A.e(function(k,l){if(k===1)return A.f(l,v)
for(;;)switch(w){case 0:if(j.w){u=!0
w=1
break}t=j.a
w=3
return A.b(A.ly(t,B.Jm),$async$b0Y)
case 3:if(l){u=!0
w=1
break}u=A.lc(!1,f,t,!1,g.length!==0?g:"Subscribe for Family Tree access \u2014 create trees and upload photos (30 days).",B.Jm,i)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b0Y,v)},
cez:function cez(){},
hTL(){var w,v=$.or(),u=J.e2(8,x.N)
for(w=0;w<8;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.he(u)},
Jm(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$Jm=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$Jm)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_family_tree_backup_codes_v1",null,!1,B.bL),$async$Jm)
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
return A.i($async$Jm,v)},
a85(d){return C.hTM(d)},
hTM(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$a85=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$a85)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_family_tree_backup_codes_v1",A.H(["codes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cL,null),$async$a85)
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
return A.i($async$a85,v)},
cey(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m
var $async$cey=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:n=B.a.i(d.toLowerCase())
if(n.length===0){u=null
w=1
break}m=J
w=3
return A.b(C.Jm(),$async$cey)
case 3:t=m.i7(f),t=t.gae(t),s=x.f
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
return A.i($async$cey,v)},
Oh(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n
var $async$Oh=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=null
w=1
break}w=3
return A.b(C.cey(d),$async$Oh)
case 3:t=f
w=t!=null?4:5
break
case 4:w=6
return A.b(C.Jm(),$async$Oh)
case 6:s=f
r=J.a7(s)
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
return A.b(C.a85(s),$async$Oh)
case 9:case 8:u=t
w=1
break
case 5:n=C.hTL()
w=10
return A.b(C.Jm(),$async$Oh)
case 10:s=f
J.aK(s,n,A.H(["email",B.a.i(d.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=11
return A.b(C.a85(s),$async$Oh)
case 11:u=n
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Oh,v)},
b0X(d){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j
var $async$b0X=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=B.a.i(d.toLowerCase())
if(j.length===0){w=1
break}w=3
return A.b(C.Jm(),$async$b0X)
case 3:t=f
for(s=J.dm(t),r=s.gdO(t),r=r.dm(r),q=r.length,p=x.f,o=!1,n=0;n<r.length;r.length===q||(0,A.J)(r),++n){m=r[n]
l=m.b
if(p.b(l)){k=J.t(l,"email")
k=B.a.i(J.k(k==null?"":k).toLowerCase())===j}else k=!1
if(k){s.W(t,m.a)
o=!0}}w=o?4:5
break
case 4:w=6
return A.b(C.a85(t),$async$b0X)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$b0X,v)},
a86(d,e,f){var w=0,v=A.j(x.H),u
var $async$a86=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:if(f||B.a.i(d).length===0){w=1
break}w=6
return A.b(C.aqR(d,e),$async$a86)
case 6:w=h?3:5
break
case 3:w=7
return A.b(C.Oh(d),$async$a86)
case 7:w=4
break
case 5:w=8
return A.b(C.b0X(d),$async$a86)
case 8:case 4:case 1:return A.h(u,v)}})
return A.i($async$a86,v)},
aqL(d,e,f,g,h,i){var w=0,v=A.j(x.y),u,t,s,r,q,p,o
var $async$aqL=A.e(function(j,k){if(j===1)return A.f(k,v)
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
return A.b(C.aqR(f,e),$async$aqL)
case 5:k=!k
case 4:if(k){u=!1
w=1
break}w=6
return A.b(A.c8(),$async$aqL)
case 6:if(!k){u=!1
w=1
break}o=J
w=7
return A.b(C.Jm(),$async$aqL)
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
return A.i($async$aqL,v)},
b0W(d,e){var w=0,v=A.j(x.y),u,t,s,r,q
var $async$b0W=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=B.a.i(d).toUpperCase()
if(r.length===0||r==="ADMIN-LOCAL"){u=!0
w=1
break}w=3
return A.b(A.c8(),$async$b0W)
case 3:if(!g){u=!1
w=1
break}q=J
w=4
return A.b(C.Jm(),$async$b0W)
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
return A.i($async$b0W,v)},
hTP(){var w,v=$.or(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"FT"+B.d.he(u)},
aqO(d,e){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$aqO=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$aqO)
case 3:if(!g){u=null
w=1
break}t=C.hTP()
w=4
return A.b(A.We(),$async$aqO)
case 4:s=g
r=B.dS.aM(B.Y.az(d.f2(),null))
r=B.cP.gcu().aM(r)
q=e?999:2
J.aK(s,t,A.H(["ownerEmail",d.b,"code",d.a,"payload",r,"usesRemaining",q,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(A.a87(s),$async$aqO)
case 5:p=e?999:2
u=new A.a1g("NGMYFTSYNC2|"+t,t,p)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqO,v)},
aqN(d){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqN=A.e(function(e,a0){if(e===1)return A.f(a0,v)
for(;;)switch(w){case 0:g=B.a.i(d)
if(g.length===0){u=null
w=1
break}w=3
return A.b(A.We(),$async$aqN)
case 3:p=a0
o=J.a7(p)
n=o.h(p,g)
if(!x.f.b(n)){u=null
w=1
break}m=J.a7(n)
l=A.aI(m.h(n,"usesRemaining"))
k=l==null?null:B.j.M(l)
if(k==null)k=0
if(k<=0){u=null
w=1
break}l=m.h(n,"ownerEmail")
j=J.k(l==null?"":l)
l=m.h(n,"code")
w=4
return A.b(C.b0W(J.k(l==null?"":l),j),$async$aqN)
case 4:if(!a0)$.am.$1("[family tree qr stash] owner code inactive; allowing stash restore")
m=m.h(n,"payload")
t=J.k(m==null?"":m)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{r=B.c9.cH(0,B.cI.aM(t))
s=C.hol(r)}catch(f){q=A.ab(f)
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
return A.b(A.a87(p),$async$aqN)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqN,v)},
hol(d){var w,v,u,t,s=null
try{w=B.Y.aQ(0,d,s)
if(!x.f.b(w))return s
u=J.t(w,"marker")
if(J.k(u==null?"":u)!=="ngmyFamilyTreeSync")return s
u=C.hTR(A.a3(w,x.N,x.z))
return u}catch(t){v=A.ab(t)
$.am.$1("[family tree sync] parse: "+A.w(v))
return s}},
h7n(d){var w=0,v=A.j(x.m),u,t,s
var $async$h7n=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(B.a.a0(s,"NGMYFTSYNC2|")){t=s.split("|")
if(t.length>=2){u=C.aqN(t[1])
w=1
break}u=null
w=1
break}u=C.hol(s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h7n,v)},
hTR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=d.h(0,"code"),h=J.k(i==null?"":i)
i=d.h(0,"ownerEmail")
w=J.k(i==null?"":i)
if(h.length===0||w.length===0)return null
v=d.h(0,"trees")
i=x.j
if(i.b(v)){u=J.dd(v,x.f)
u=A.cE(u,new C.ceB(),u.$ti.k("M.E"),x.k)
t=A.a4(u).k("Y<M.E>")
s=A.C(new A.Y(u,new C.ceC(),t),t.k("M.E"))}else s=A.a([],x._)
u=d.h(0,"exportedAt")
r=A.bj(J.k(u==null?"":u))
if(r==null)r=new A.V(Date.now(),0,!1)
q=A.T(x.N,x.d)
p=d.h(0,"familyBooks")
u=x.f
if(u.b(p))for(t=J.i7(p),t=t.gae(t),o=x.B;t.C();){n=t.gR(t)
m=J.k(n.a)
l=n.b
if(!i.b(l))continue
n=J.dd(l,u)
n=A.cE(n,new C.ceD(),n.$ti.k("M.E"),o)
k=A.a4(n).k("Y<M.E>")
j=A.C(new A.Y(n,new C.ceE(),k),k.k("M.E"))
if(j.length!==0)q.n(0,m,j)}return new C.aqP(h,w,s,r,q)},
aqR(d,e){var w=0,v=A.j(x.y),u,t
var $async$aqR=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:if(B.a.i(d).length===0){u=!1
w=1
break}if(A.O8(e,d)){u=!0
w=1
break}t=J
w=3
return A.b(C.Bl(d),$async$aqR)
case 3:u=t.cI(g)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$aqR,v)},
ceK(d){var w=0,v=A.j(x.bC),u,t,s
var $async$ceK=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=J
w=3
return A.b(C.Bl(d),$async$ceK)
case 3:t=s.b7(f,new C.ceL(),x.cs)
t=A.C(t,t.$ti.k("ak.E"))
B.d.aZ(t,new C.ceM())
u=t
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$ceK,v)},
Wf(d,e,f,g){var w=0,v=A.j(x.m),u,t,s,r,q,p,o,n,m
var $async$Wf=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:if(B.a.i(e).length===0){u=null
w=1
break}t=!f
m=t
if(m){w=3
break}else i=m
w=4
break
case 3:w=5
return A.b(C.aqR(e,d),$async$Wf)
case 5:i=!i
case 4:if(i){u=null
w=1
break}w=t?6:8
break
case 6:w=9
return A.b(C.Oh(e),$async$Wf)
case 9:s=i
if(s==null){u=null
w=1
break}w=7
break
case 8:s="ADMIN-LOCAL"
case 7:w=10
return A.b(C.Bl(e),$async$Wf)
case 10:r=i
if(g!=null&&B.a.i(g).length!==0){t=J.dI(r,new C.ceI(g))
r=A.C(t,t.$ti.k("M.E"))}t=J.a7(r)
if(t.gau(r)){u=null
w=1
break}t=t.dL(r,new C.ceJ(e),x.k)
r=A.C(t,t.$ti.k("ak.E"))
q=A.T(x.N,x.d)
t=r.length,p=0
case 11:if(!(p<r.length)){w=13
break}o=r[p].a
w=14
return A.b(C.LD(e,o),$async$Wf)
case 14:n=i
if(J.cI(n))q.n(0,o,n)
case 12:r.length===t||(0,A.J)(r),++p
w=11
break
case 13:u=new C.aqP(s,B.a.i(e.toLowerCase()),r,new A.V(Date.now(),0,!1),q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wf,v)},
b10(d,e,f,g){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$b10=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wf(d,e,f,g),$async$b10)
case 3:q=i
if(q==null){u=null
w=1
break}t=g!=null&&q.c.length!==0?B.d.gH(q.c).b:"all-family-trees"
s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
s=A.aL(t,s,"_")
r=q.a
u=A.He(A.KO(q.f2(),null,"  "),"ngmy-family-trees-"+s.toLowerCase()+"-"+r+".ngmy.json",!1)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b10,v)},
b1_(d,e,f,g){var w=0,v=A.j(x.eo),u,t,s,r
var $async$b1_=A.e(function(h,i){if(h===1)return A.f(i,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Wf(d,e,f,g),$async$b1_)
case 3:r=i
if(r==null){u=null
w=1
break}w=4
return A.b(C.aqO(r,f),$async$b1_)
case 4:t=i
if(t==null){u=null
w=1
break}s=t.a
u=new A.aHz(r.a,s,t.c)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$b1_,v)},
Wg(d,e,f,a0){var w=0,v=A.j(x.gG),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wg=A.e(function(a1,a2){if(a1===1)return A.f(a2,v)
for(;;)switch(w){case 0:w=3
return A.b(C.h7n(a0),$async$Wg)
case 3:g=a2
if(g==null){u=null
w=1
break}t=B.a.a0(B.a.i(a0),"NGMYFTSYNC2|")
s=g.b
r=B.a.i(s.toLowerCase())!==B.a.i(e.toLowerCase())
w=!t?4:5
break
case 4:w=6
return A.b(C.aqL(g.a,d,e,f,s,r),$async$Wg)
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
return A.b(C.bDy(e,j),$async$Wg)
case 12:case 11:w=13
return A.b(C.aiy(e,j,s),$async$Wg)
case 13:h=n.h(0,i)
w=h!=null&&J.cI(h)?14:15
break
case 14:w=16
return A.b(C.Bw(e,i,h),$async$Wg)
case 16:case 15:++m
l+=j.f.length
case 8:p.length===o||(0,A.J)(p),++k
w=7
break
case 9:if(m===0){u=null
w=1
break}u=new A.brf(l,m,q)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Wg,v)},
aqP:function aqP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ceG:function ceG(){},
ceH:function ceH(){},
ceF:function ceF(){},
ceB:function ceB(){},
ceC:function ceC(){},
ceD:function ceD(){},
ceE:function ceE(){},
ceL:function ceL(){},
ceM:function ceM(){},
ceI:function ceI(d){this.a=d},
ceJ:function ceJ(d){this.a=d},
hgh(d,e,f,g,h,i,j){var w=j.a
if(w.length===0)return A.f3(null,x.H)
return A.hE(d,new C.aqQ(w,e,g,i,f,h,null),!0,null,x.H)},
dgr(d,e,f,g,h,i,j,k){return new C.bgo(i,e,k,j,g,f,h,d,null)},
aqQ:function aqQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aEX:function aEX(d){var _=this
_.d=d
_.e=!1
_.f=null
_.r=!1
_.c=_.a=null},
e2m:function e2m(d){this.a=d},
e2n:function e2n(d,e,f){this.a=d
this.b=e
this.c=f},
e2r:function e2r(d,e){this.a=d
this.b=e},
e2s:function e2s(d){this.a=d},
e2j:function e2j(d){this.a=d},
e2k:function e2k(d,e){this.a=d
this.b=e},
e2l:function e2l(d,e){this.a=d
this.b=e},
e2q:function e2q(d){this.a=d},
e2p:function e2p(d,e){this.a=d
this.b=e},
e2o:function e2o(){},
e2u:function e2u(d){this.a=d},
e2v:function e2v(d,e){this.a=d
this.b=e},
e2t:function e2t(d,e){this.a=d
this.b=e},
dgT:function dgT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bgq:function bgq(d,e,f){this.d=d
this.e=e
this.a=f},
adn:function adn(d,e,f){this.c=d
this.d=e
this.a=f},
bgo:function bgo(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.a=l},
bgt:function bgt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
a0p:function a0p(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEW:function aEW(){var _=this
_.d=!1
_.c=_.a=_.e=null},
e2e:function e2e(d,e){this.a=d
this.b=e},
e2f:function e2f(d){this.a=d},
e2g:function e2g(d){this.a=d},
e2h:function e2h(d){this.a=d},
e2i:function e2i(d){this.a=d},
a0q:function a0q(d){this.a=d},
blG:function blG(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
e2w:function e2w(d,e){this.a=d
this.b=e},
b_v(d,e){return new C.b_u(d,e,null)},
b_u:function b_u(d,e,f){this.c=d
this.d=e
this.a=f},
ij6(d){if(!(d!=null&&B.a.a0(d,"ngmy:thumb:")))return null
return B.a.b2(d,11)},
ir9(d){return A.bT(B.L,null,new C.fWW(new C.ug(A.S(d).ax.a===B.J)),d,!0,!0,!0,null,!1,!1,x.N)},
hqf(d,e){return new C.atU(e,d,null)},
aRY(d,e,f,g,h,i,j){var w=C.ij6(i)
if(w!=null)return A.by(e,new A.a5(j,f,new C.a7b(w,!0,null),null),B.aq)
return N.aRj(e,B.c_,f,g,h,i,j)},
lV:function lV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a7b:function a7b(d,e,f){this.c=d
this.d=e
this.a=f},
blm:function blm(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b9$=e
_.c=_.a=null},
dOP:function dOP(d){this.a=d},
dOQ:function dOQ(){},
dOR:function dOR(d,e){this.a=d
this.b=e},
bll:function bll(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
fWW:function fWW(d){this.a=d},
fWV:function fWV(d,e){this.a=d
this.b=e},
fWU:function fWU(d,e){this.a=d
this.b=e},
fWT:function fWT(d,e){this.a=d
this.b=e},
atU:function atU(d,e,f){this.c=d
this.d=e
this.a=f},
co3:function co3(d,e){this.a=d
this.b=e},
aMY:function aMY(){},
iqV(d){var w=null
return A.ce(w,w,!0,w,new C.fWj(),d,w,!0,!0,x.e2)},
is6(d,e,f,g,h){var w=null
return A.ce(w,w,!0,w,new C.h2R(h,g,f,e),d,w,!0,!0,x.N)},
iqX(d,e){var w=null
return A.ce(w,w,!0,w,new C.fWn(e),d,w,!0,!0,x.dY)},
iqW(d){var w=null
return A.ce(w,w,!0,w,new C.fWm(),d,w,!0,!0,x.c5)},
aUX:function aUX(d,e){this.a=d
this.b=e},
aUW:function aUW(d){this.a=d},
aSX:function aSX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fWj:function fWj(){},
h2R:function h2R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fWn:function fWn(d){this.a=d},
fWm:function fWm(){},
a_3:function a_3(d,e){this.c=d
this.a=e},
aA8:function aA8(){var _=this
_.d=$
_.c=_.a=_.e=null},
d83:function d83(d){this.a=d},
d84:function d84(d){this.a=d},
d82:function d82(d,e){this.a=d
this.b=e},
d85:function d85(d){this.a=d},
d86:function d86(d){this.a=d},
a_2:function a_2(d){this.a=d},
aA7:function aA7(){this.d=$
this.c=this.a=null},
d8_:function d8_(d){this.a=d},
d80:function d80(d){this.a=d},
d81:function d81(d){this.a=d},
ZA:function ZA(d){this.a=d},
ayS:function ayS(){var _=this
_.r=_.f=_.e=_.d=$
_.w="each"
_.c=_.a=null},
cGq:function cGq(){},
cGw:function cGw(d){this.a=d},
cGx:function cGx(d){this.a=d},
cGy:function cGy(d){this.a=d},
cGv:function cGv(){},
cGz:function cGz(d){this.a=d},
cGA:function cGA(d){this.a=d},
cGu:function cGu(){},
cGB:function cGB(d,e){this.a=d
this.b=e},
cGt:function cGt(d,e){this.a=d
this.b=e},
cGr:function cGr(d,e){this.a=d
this.b=e},
cGC:function cGC(d){this.a=d},
cGs:function cGs(){},
cGD:function cGD(d){this.a=d},
a2c:function a2c(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
by3:function by3(){this.d=$
this.c=this.a=null},
flh:function flh(d,e){this.a=d
this.b=e},
fli:function fli(d){this.a=d},
flj:function flj(d,e){this.a=d
this.b=e},
acq:function acq(d,e){this.a=d
this.b=e},
Gj:function Gj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
by1:function by1(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
flf:function flf(d,e){this.a=d
this.b=e},
ayL:function ayL(d,e){this.c=d
this.a=e},
by2:function by2(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
flg:function flg(d){this.a=d},
by0:function by0(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
aP3:function aP3(){},
aP4:function aP4(){},
bFw(d,e,f,g){var w,v=null,u=Math.abs(d),t=B.j.bh(u),s=B.o.E(B.j.V((u-t)*100),0,99),r=d<0?"-":"",q=A.p3(B.o.u(t),A.ag("(\\d{1,3})(?=(\\d{3})+(?!\\d))",!0,!1,!1,!1),new C.fUH(),v),p=f?34:16,o=f?18:12,n=A.a([],x.R)
if(r.length!==0)n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p*0.7,v,v,g,v,v,!0,v,v,v,v,v,v,v,v),r))
n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.82),v,v,v,v,v,v,v,v,o,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),"$"))
n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e,v,v,v,v,v,v,v,v,p,v,v,g,v,1.05,!0,v,-0.6,v,v,v,v,v,v),q))
w=B.a.b_(B.o.u(s),2,"0")
n.push(A.cP(v,v,v,v,v,v,v,v,v,A.l(v,v,e.j(0.88),v,v,v,v,v,v,v,v,o,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),"."+w))
return A.YY(A.cP(n,v,v,v,v,v,v,v,v,v,v),v,v,v,v)},
aRz(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aRz=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(new A.hU().l8(85,1280,B.eN),$async$aRz)
case 3:m=e
if(m==null){u=null
w=1
break}t=5
w=8
return A.b(m.fp(),$async$aRz)
case 8:r=e
if(J.ad(r)===0){u=null
w=1
break}q=C.hqe()
w=9
return A.b(C.co2(q,r),$async$aRz)
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
return A.i($async$aRz,v)},
aRW(d,e){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aRW=A.e(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:g=d==null?null:B.a.i(d)
if(g==null||g.length===0){u=null
w=1
break}i=B.a.a0(g,"ngmy:ws-thumb:")
if(i){u=C.co_(g)
w=1
break}if(!B.a.a0(g,"data:image")){u=g
w=1
break}r=5e5
if(g.length<=r){u=g
w=1
break}t=4
q=B.a.q(g,",")?B.d.gan(g.split(",")):g
p=B.cI.aM(q)
o=960
case 7:if(!(o>=96)){w=8
break}w=9
return A.b(A.Hf(p,!0,null,o).dg(0,B.h0),$async$aRW)
case 9:n=a1
w=10
return A.b(n.lb(),$async$aRW)
case 10:m=a1
w=11
return A.b(m.b.hs(B.he),$async$aRW)
case 11:l=a1
m.b.t()
if(l==null){w=8
break}i=J.eS(B.dN.gaU(l))
k="data:image/png;base64,"+B.cP.gcu().aM(i)
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
return A.i($async$aRW,v)},
fUH:function fUH(){},
ug:function ug(d){this.a=d},
atT:function atT(d,e,f){this.c=d
this.d=e
this.a=f},
aGq:function aGq(){var _=this
_.d=$
_.e=!1
_.c=_.a=null},
eU4:function eU4(d,e){this.a=d
this.b=e},
eTW:function eTW(d){this.a=d},
eTX:function eTX(d){this.a=d},
eU2:function eU2(d,e){this.a=d
this.b=e},
eU1:function eU1(d,e){this.a=d
this.b=e},
eTZ:function eTZ(d,e){this.a=d
this.b=e},
eTY:function eTY(d,e){this.a=d
this.b=e},
eU_:function eU_(d){this.a=d},
eU0:function eU0(d,e){this.a=d
this.b=e},
eU3:function eU3(d,e){this.a=d
this.b=e},
eTR:function eTR(d,e){this.a=d
this.b=e},
eTV:function eTV(d){this.a=d},
eTU:function eTU(d,e){this.a=d
this.b=e},
eTT:function eTT(d){this.a=d},
eU5:function eU5(d,e){this.a=d
this.b=e},
eU6:function eU6(d,e){this.a=d
this.b=e},
eTS:function eTS(d,e){this.a=d
this.b=e},
hDk(d,e,f){var w="thumbnailPath",v=e.aj()
if(f!=null&&f.length!==0)v.n(0,w,f)
else v.W(0,w)
return A.H(["type","ngmy_worksheet_project_v1","ownerEmail",B.a.i(d),"exportedAt",new A.V(Date.now(),0,!1).aa().ag(),"project",v],x.N,x.z)},
fUI(d,e,f){var w=0,v=A.j(x.N),u
var $async$fUI=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:u=B.Y.az(C.hDk(e,f,f.c),null)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fUI,v)},
bFy(d,e){var w=0,v=A.j(x.N),u,t,s,r
var $async$bFy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=C
w=4
return A.b(C.fUI(!0,d,e),$async$bFy)
case 4:w=3
return A.b(r.atR(g,d,e.a),$async$bFy)
case 3:s=g
if(s!=null){u=s.a
w=1
break}t=B.dS.aM(B.Y.az(C.hDk(d,e,null),null))
u="NGMY_WS:"+B.kH.gcu().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFy,v)},
huP(d){var w,v=d.z,u=v==null?null:B.a.i(v)
if(u!=null&&u.length!==0)return u
v=d.d
w=v==null?null:B.a.i(v)
if(w!=null&&w.length!==0)return w
return null},
hfT(d){var w,v,u,t="ngmy_worksheet_project_v1",s=B.a.i(d)
if(J.ad(s)===0)return!1
if(J.d3(s,"NGMYWSSYNC2|"))return!0
if(J.d3(s,"NGMY_WS:"))return!0
if(J.eG(s,t))return!0
if(J.d3(s,"{"))try{w=B.Y.aQ(0,s,null)
if(x.f.b(w)){v=J.t(w,"type")
v=J.k(v==null?"":v)===t}else v=!1
if(v)return!0}catch(u){}return!1},
ioe(d){var w,v,u,t=C.huP(d)
if(t==null)return null
if(C.hfT(t))return t
w=B.a.co(t,"NGMYWSSYNC2|")
if(w>=0){v=B.a.i(B.a.b2(t,w))
if(C.hfT(v))return v}u=B.a.co(t,"NGMY_WS:")
if(u>=0){v=B.a.i(B.a.b2(t,u))
if(C.hfT(v))return v}return null},
hfS(d){var w,v,u,t,s,r=null,q=B.a.i(d)
if(J.ad(q)===0)return r
if(J.d3(q,"NGMYWSSYNC2|"))return r
try{w=null
t=x.a
if(J.d3(q,"NGMY_WS:")){v=B.c9.cH(0,B.cI.aM(J.np(q,8)))
w=t.a(B.Y.aQ(0,v,r))}else w=t.a(B.Y.aQ(0,q,r))
t=J.t(w,"type")
if(J.k(t==null?"":t)!=="ngmy_worksheet_project_v1")return r
u=J.t(w,"project")
if(!x.f.b(u))return r
t=C.ha0(A.a3(u,x.N,x.z))
return t}catch(s){return r}},
bFx(d){var w=0,v=A.j(x.o),u,t,s,r
var $async$bFx=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=B.a.i(d)
w=B.a.a0(r,"NGMYWSSYNC2|")?3:4
break
case 3:t=r.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return A.b(C.atQ(t[1]),$async$bFx)
case 7:s=f
if(s!=null&&B.a.i(s).length!==0){u=C.hfS(s)
w=1
break}case 6:u=null
w=1
break
case 4:u=C.hfS(r)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bFx,v)},
hfR(d){var w=B.o.u(1000*Date.now()),v=d.b
if(B.a.i(v).length===0)v="Shared project"
return new C.lC(w,v,d.c,d.d,new A.V(Date.now(),0,!1))},
bF3(){var w=0,v=A.j(x.o),u,t
var $async$bF3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.Hr(),$async$bF3)
case 3:t=e
if(t==null||B.a.i(t).length===0){u=null
w=1
break}u=C.hfS(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$bF3,v)},
hEl(d,e,f,g){return A.bT(B.L,null,new C.h2E(f,g,e),d,!0,!0,!0,null,!1,!1,x.H)},
h2E:function h2E(d,e,f){this.a=d
this.b=e
this.c=f},
aet:function aet(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eU8:function eU8(d,e){this.a=d
this.b=e},
eU9:function eU9(d,e){this.a=d
this.b=e},
eUa:function eUa(d,e){this.a=d
this.b=e},
eUb:function eUb(d,e){this.a=d
this.b=e},
eU7:function eU7(d){this.a=d},
atN:function atN(d,e,f){this.c=d
this.d=e
this.a=f},
bn2:function bn2(){var _=this
_.c=_.a=_.e=_.d=null},
eTM:function eTM(d,e){this.a=d
this.b=e},
eTN:function eTN(d){this.a=d},
eTO:function eTO(d){this.a=d},
atS:function atS(d){this.a=d},
aGp:function aGp(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eTQ:function eTQ(d){this.a=d},
eTP:function eTP(d){this.a=d},
hX4(d,e,f,g,h){return new C.OW(h,g,d,e,f,null)},
aLi:function aLi(d,e){this.a=d
this.b=e},
OW:function OW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aGr:function aGr(d,e){var _=this
_.d=d
_.e=e
_.f=!0
_.r=0
_.c=_.a=null},
eUy:function eUy(){},
eUu:function eUu(d,e){this.a=d
this.b=e},
eUv:function eUv(d){this.a=d},
eUf:function eUf(d){this.a=d},
eUd:function eUd(d){this.a=d},
eUe:function eUe(d){this.a=d},
eUo:function eUo(d,e){this.a=d
this.b=e},
eUl:function eUl(d,e){this.a=d
this.b=e},
eUm:function eUm(d,e){this.a=d
this.b=e},
eUn:function eUn(d,e,f){this.a=d
this.b=e
this.c=f},
eUj:function eUj(d,e,f){this.a=d
this.b=e
this.c=f},
eUh:function eUh(d){this.a=d},
eUi:function eUi(d){this.a=d},
eUk:function eUk(d){this.a=d},
eUB:function eUB(d){this.a=d},
eUA:function eUA(d){this.a=d},
eUC:function eUC(d){this.a=d},
eUz:function eUz(d){this.a=d},
eUc:function eUc(d){this.a=d},
eUg:function eUg(d,e){this.a=d
this.b=e},
eUx:function eUx(d,e){this.a=d
this.b=e},
eUw:function eUw(d,e){this.a=d
this.b=e},
eUr:function eUr(d){this.a=d},
eUs:function eUs(d){this.a=d},
eUt:function eUt(d,e){this.a=d
this.b=e},
eUq:function eUq(d,e){this.a=d
this.b=e},
eUp:function eUp(d,e,f){this.a=d
this.b=e
this.c=f},
bzP:function bzP(){},
B9(d){var w,v=B.a.i(d.toLowerCase())
if(v.length===0)return""
w=A.ag("[^a-z0-9@._+-]",!0,!1,!1,!1)
return A.aL(v,w,"_")},
agX(d,e,f){return C.icr(d,e,f)},
icr(d,e,f){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o
var $async$agX=A.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(d.aB("String",e,f),$async$agX)
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
return A.i($async$agX,v)},
agW(d,e){return C.icq(d,e)},
icq(d,e){var w=0,v=A.j(x.H),u=1,t=[],s,r,q
var $async$agW=A.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return A.b(d.W(0,e),$async$agW)
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
return A.i($async$agW,v)},
ibg(d,e){var w,v,u=e==null?null:B.a.i(e)
if(u!=null&&u.length!==0)return d.Tw(u)
w=d.c
v=w==null?null:B.a.i(w)
if(v!=null&&v.length!==0)return d
return d},
bCx(d){var w=0,v=A.j(x.T),u,t,s,r,q
var $async$bCx=A.e(function(e,f){if(e===1)return A.f(f,v)
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
return A.b(C.b4d(q),$async$bCx)
case 5:s=f
if(s!=null){u=s
w=1
break}w=6
return A.b(C.aRW(q,!1),$async$bCx)
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
return A.i($async$bCx,v)},
hKv(d){var w,v,u,t,s,r="unitLabel",q="each",p=A.aI(d.h(0,"price")),o=p==null?null:p
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
s=J.k(s==null?q:s)}return new C.rm(p,u,t,v,s)}p=d.h(0,"id")
p=J.k(p==null?"":p)
u=d.h(0,"name")
return new C.rm(p,J.k(u==null?"":u),1,o,q)},
ha0(d){var w,v,u,t,s=d.h(0,"items"),r=A.a([],x.C)
if(x.j.b(s)){w=J.dd(s,x.f)
w=A.cE(w,new C.cFI(),w.$ti.k("M.E"),x.Q)
v=A.a4(w).k("Y<M.E>")
r=A.C(new A.Y(w,new C.cFJ(),v),v.k("M.E"))}w=d.h(0,"id")
w=J.k(w==null?"":w)
v=d.h(0,"name")
v=J.k(v==null?"":v)
u=d.h(0,"thumbnailPath")
u=u==null?null:J.k(u)
t=d.h(0,"createdAt")
t=A.bj(J.k(t==null?"":t))
return new C.lC(w,v,u,r,t==null?new A.V(Date.now(),0,!1):t)},
igy(d){var w=d==null?"":d
switch(w.toLowerCase()){case"male":case"m":return D.wo
case"female":case"f":return D.oq
default:return D.yU}},
hzR(d){switch(d.a){case 0:return"male"
case 1:return"female"
case 2:return"unknown"}},
hkh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.h(0,"id")
i=J.k(i==null?"":i)
w=d.h(0,"name")
w=J.k(w==null?"":w)
v=d.h(0,"gender")
v=C.igy(v==null?j:J.k(v))
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
m=m==null?j:B.j.M(m)
if(m==null)m=1
l=J.z(d.h(0,"hidden"),!0)
k=A.aI(d.h(0,"visibleChildrenCap"))
k=k==null?j:B.j.M(k)
return new C.hT(i,w,v,u,t,s,r,q,p,o,n,m,l,k==null?0:k)},
igA(d){var w=d==null?"":d
switch(w.toLowerCase()){case"editor":return D.Oy
case"viewer":return D.kV
default:return D.uy}},
igB(d){switch(d.a){case 1:return"editor"
case 2:return"viewer"
case 0:return"owner"}},
Hg(d,e){var w=B.a.i(d.x)
if(w.length!==0)return B.a.i(w.toLowerCase())
return B.a.i(e.toLowerCase())},
aQG(d,e){return B.a.i(e.toLowerCase())===C.Hg(d,e)&&d.y!==D.kV},
ut(d,e){var w,v=d.y
if(v===D.kV)return!1
w=B.a.i(e.toLowerCase())
if(w===C.Hg(d,e))return!0
if(v===D.Oy)return!0
v=d.e
return new A.N(v,A.hfY(),A.U(v).k("N<1,n>")).q(0,w)},
ifV(d){return J.dI(d,new C.fF2()).gI(0)},
h3p(d){var w=0,v=A.j(x.y),u,t
var $async$h3p=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=J
w=3
return A.b(C.Bl(d),$async$h3p)
case 3:u=t.rh(f,new C.h3q(d))
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$h3p,v)},
bDy(d,e){var w=0,v=A.j(x.H),u,t
var $async$bDy=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Bl(d),$async$bDy)
case 3:t=g
if(J.rh(t,new C.fCG(e))){w=1
break}if(C.ifV(t)>=2)throw A.W(A.bc("You can only keep 2 shared family trees. Remove one before importing another."))
case 1:return A.h(u,v)}})
return A.i($async$bDy,v)},
alY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=d.h(0,"members"),g=A.a([],x.u),f=x.j
if(f.b(h)){w=J.dd(h,x.f)
w=A.cE(w,new C.bSf(),w.$ti.k("M.E"),x.P)
v=A.a4(w).k("Y<M.E>")
g=A.C(new A.Y(w,new C.bSg(),v),v.k("M.E"))}u=d.h(0,"collaboratorEmails")
if(f.b(u)){w=J.b7(u,new C.bSh(),x.N)
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
p=A.aI(d.h(0,"visibleChildrenPerParent"))
p=p==null?null:B.j.M(p)
if(p==null)p=0
o=d.h(0,"ownerEmail")
o=J.k(o==null?"":o)
n=d.h(0,"localRole")
n=C.igA(n==null?null:J.k(n))
m=A.a([],x.Y)
f=J.aU(f.b(d.h(0,"games"))?f.a(d.h(0,"games")):B.cq)
l=x.f
k=x.N
j=x.z
while(f.C()){i=f.gR(f)
if(l.b(i))m.push(A.a3(i,k,j))}return new C.kT(w,v,s,!r,t,g,q,p,o,n,m)},
hA5(d){var w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(d.toUpperCase(),w,"")
w=v.length
if(w===0)return"TREE"
return w<=8?v:B.a.aC(v,0,8)},
Dy(d){var w=0,v=A.j(x.gk),u,t,s,r,q,p,o,n,m,l
var $async$Dy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.St(d),$async$Dy)
case 3:l=f
if(l.length===0){u=A.a([],x.D)
w=1
break}w=4
return A.b(A.az(),$async$Dy)
case 4:t=f
w=5
return A.b(t.a76(0),$async$Dy)
case 5:w=6
return A.b(C.ft4(t,l),$async$Dy)
case 6:s=f
if(J.cI(s)){u=s
w=1
break}r=B.a.gX(B.a.i(l.toLowerCase()))
q=t.a
p=J.a7(q)
o=A.aT(p.h(q,"ngmy_worksheets_projects_v2_"+Math.abs(r)))
w=o!=null&&o.length!==0?7:8
break
case 7:n=C.hvp(o)
w=n.length!==0?9:10
break
case 9:w=11
return A.b(C.p2(l,n),$async$Dy)
case 11:u=n
w=1
break
case 10:case 8:m=A.aT(p.h(q,"ngmy_worksheets_projects_v1_"+Math.abs(B.a.gX(l))))
w=m!=null&&m.length!==0?12:13
break
case 12:n=C.hvp(m)
w=n.length!==0?14:15
break
case 14:w=16
return A.b(C.p2(l,n),$async$Dy)
case 16:u=n
w=1
break
case 15:case 13:u=A.a([],x.D)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Dy,v)},
ft4(d,e){return C.i8E(d,e)},
i8E(a8,a9){var w=0,v=A.j(x.gk),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ft4=A.e(function(b0,b1){if(b0===1){s.push(b1)
w=t}for(;;)switch(w){case 0:a3=a8.a
a4=J.a7(a3)
a5=A.aT(a4.h(a3,"ngmy_worksheets_index_v3_"+C.B9(a9)))
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
break}m=A.aT(a4.h(a3,"ngmy_worksheet_item_v3_"+C.B9(a9)+"_"+n))
if(m==null||m.length===0){w=7
break}t=10
l=B.Y.aQ(0,m,null)
if(!a0.b(l)){w=7
break}k=C.ha0(A.a3(l,e,d))
w=k.a.length!==0&&k.b.length!==0?13:14
break
case 13:j=A.aT(a4.h(a3,"ngmy_worksheet_thumb_v3_"+C.B9(a9)+"_"+n))
i=C.ibg(k,j)
a1=i.c
h=a1==null?null:B.a.i(a1)
w=h!=null&&B.a.a0(h,"data:image")?15:16
break
case 15:w=17
return A.b(C.b4d(h),$async$ft4)
case 17:g=b1
if(g!=null){i=i.Tw(g)
p=!0}case 16:J.c6(q,i)
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
case 8:J.SC(q,new C.ft5())
if(p&&J.ad(q)!==0)C.p2(a9,q)
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
return A.i($async$ft4,v)},
bE_(d,e){var w=0,v=A.j(x.o),u,t,s,r,q,p
var $async$bE_=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(A.St(d),$async$bE_)
case 3:r=g
q=B.a.i(e)
if(r.length===0||q.length===0){u=null
w=1
break}p=J
w=4
return A.b(C.Dy(r),$async$bE_)
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
return A.i($async$bE_,v)},
hvp(d){var w,v,u,t
try{w=B.Y.aQ(0,d,null)
if(!x.j.b(w)){v=A.a([],x.D)
return v}v=J.dd(w,x.f)
v=A.cE(v,new C.foQ(),v.$ti.k("M.E"),x.fA)
u=A.a4(v).k("Y<M.E>")
v=A.C(new A.Y(v,new C.foR(),u),u.k("M.E"))
B.d.aZ(v,new C.foS())
return v}catch(t){v=A.a([],x.D)
return v}},
p2(d,e){return C.iqK(d,e)},
iqK(b2,b3){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
var $async$p2=A.e(function(b4,b5){if(b4===1){s.push(b5)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.St(b2),$async$p2)
case 3:a8=b5
if(J.ad(a8)===0){u=!1
w=1
break}w=4
return A.b(A.az(),$async$p2)
case 4:r=b5
q=A.a([],x.s)
t=6
a2=C.B9(a8)
p=A.aT(J.t(r.a,"ngmy_worksheets_index_v3_"+a2))
w=p!=null&&p.length!==0?9:10
break
case 9:t=12
a2=x.N
o=J.b7(x.j.a(B.Y.aQ(0,p,null)),new C.fW7(),a2).fM(0)
a2=J.b7(b3,new C.fW8(),a2).bY(0,new C.fW9())
n=A.d4(a2,a2.$ti.k("M.E"))
a2=o,a2=A.dY(a2,a2.r,A.a4(a2).c),a3=a2.$ti.c,a4=x.f
case 15:if(!a2.C()){w=16
break}a5=a2.d
m=a5==null?a3.a(a5):a5
w=!J.eG(n,m)?17:18
break
case 17:a5=C.B9(a8)
l=A.aT(J.t(r.a,"ngmy_worksheet_thumb_v3_"+a5+"_"+m))
w=19
return A.b(C.a9o(l),$async$p2)
case 19:t=21
a5=C.B9(a8)
k=A.aT(J.t(r.a,"ngmy_worksheet_item_v3_"+a5+"_"+m))
w=k!=null&&k.length!==0?24:25
break
case 24:j=B.Y.aQ(0,k,null)
w=a4.b(j)?26:27
break
case 26:a5=J.t(j,"thumbnailPath")
w=28
return A.b(C.a9o(a5==null?null:J.k(a5)),$async$p2)
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
return A.b(C.agW(r,"ngmy_worksheet_item_v3_"+C.B9(a8)+"_"+m),$async$p2)
case 29:w=30
return A.b(C.agW(r,"ngmy_worksheet_thumb_v3_"+C.B9(a8)+"_"+m),$async$p2)
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
return A.b(C.bCx(h),$async$p2)
case 36:f=b5
w=f!=null&&f.length!==0?37:39
break
case 37:a4=i.a
w=40
return A.b(C.agX(r,"ngmy_worksheet_thumb_v3_"+C.B9(a8)+"_"+a4,f),$async$p2)
case 40:g=i.Tw(f)
w=38
break
case 39:$.am.$1("[worksheets] photo not saved for "+i.a+" \u2014 saving project without thumbnail")
a4=i.a
w=41
return A.b(C.agW(r,"ngmy_worksheet_thumb_v3_"+C.B9(a8)+"_"+a4),$async$p2)
case 41:g=i.Tw(null)
case 38:w=34
break
case 35:a4=i.a
w=42
return A.b(C.agW(r,"ngmy_worksheet_thumb_v3_"+C.B9(a8)+"_"+a4),$async$p2)
case 42:case 34:a4=i.a
w=43
return A.b(C.agX(r,"ngmy_worksheet_item_v3_"+C.B9(a8)+"_"+a4,B.Y.az(g.aj(),null)),$async$p2)
case 43:e=b5
if(!e){$.am.$1("[worksheets] failed to save project "+i.a+" for "+A.w(a8))
w=31
break}J.c6(q,i.a)
w=31
break
case 32:w=44
return A.b(C.agX(r,"ngmy_worksheets_index_v3_"+C.B9(a8),B.Y.az(q,null)),$async$p2)
case 44:d=b5
if(!d){$.am.$1("[worksheets] failed to save project index for "+A.w(a8))
u=!1
w=1
break}a3=a2.eP(b3,new C.fWa(q))
a4=a3.$ti.k("cM<1,a8<n,@>>")
a7=A.C(new A.cM(a3,new C.fWb(),a4),a4.k("M.E"))
a0=a7
w=45
return A.b(C.agX(r,"ngmy_worksheets_projects_v2_"+Math.abs(B.a.gX(B.a.i(a8.toLowerCase()))),B.Y.az(a0,null)),$async$p2)
case 45:w=46
return A.b(J.hJB(r),$async$p2)
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
return A.i($async$p2,v)},
M3(d,e){var w=0,v=A.j(x.y),u,t,s,r
var $async$M3=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.Dy(d),$async$M3)
case 3:t=g
s=J.cC(t)
r=s.bj(t,new C.h3o(e))
if(r===-1)s.c4(t,0,e)
else s.n(t,r,e)
u=C.p2(d,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$M3,v)},
bDL(d,e){var w=0,v=A.j(x.H),u
var $async$bDL=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Dy(d),$async$bDL)
case 2:u=g
J.nQ(u,new C.fFw(e))
w=3
return A.b(C.p2(d,u),$async$bDL)
case 3:return A.h(null,v)}})
return A.i($async$bDL,v)},
Hi(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Hi=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Hi)
case 3:l=f
k=A.a([],x._)
j=B.a.gX(B.a.i(d.toLowerCase()))
i=A.aT(J.t(l.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(j)))
if(i!=null&&i.length!==0)try{t=B.Y.aQ(0,i,null)
if(x.j.b(t)){j=J.dd(t,x.f)
j=A.cE(j,new C.fIG(),j.$ti.k("M.E"),x.k)
s=A.a4(j).k("Y<M.E>")
r=A.C(new A.Y(j,new C.fIH(),s),s.k("M.E"))
B.d.aZ(r,new C.fII())
k=r}}catch(h){}w=4
return A.b(C.fpD(d),$async$Hi)
case 4:p=f
if(p==null){u=k
w=1
break}o=C.i91(k,p,d)
j=A.U(o)
s=j.k("N<1,a8<n,@>>")
s=A.C(new A.N(o,new C.fIJ(),s),s.k("ak.E"))
n=B.Y.az(s,null)
s=i
w=n!==(s==null?"":s)?5:6
break
case 5:w=7
return A.b(C.RE(d,o),$async$Hi)
case 7:case 6:j=j.k("Y<1>")
m=A.C(new A.Y(o,new C.fIK(d),j),j.k("M.E"))
if(m.length!==0)C.aQq(d,m)
u=o
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$Hi,v)},
fVU(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$fVU=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=3
return A.b(C.RE(d,e),$async$fVU)
case 3:t=J.dI(e,new C.fVV(d))
s=A.C(t,t.$ti.k("M.E"))
if(s.length===0){u=!0
w=1
break}u=C.aQq(d,s)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$fVU,v)},
a3P(d,e){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l
var $async$a3P=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=A.a([],x._)
w=2
return A.b(A.az(),$async$a3P)
case 2:n=g
m=B.a.gX(B.a.i(d.toLowerCase()))
l=A.aT(J.t(n.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(m)))
if(l!=null&&l.length!==0)try{u=B.Y.aQ(0,l,null)
if(x.j.b(u)){m=J.dd(u,x.f)
m=A.cE(m,new C.h3j(),m.$ti.k("M.E"),x.k)
t=A.a4(m).k("Y<M.E>")
s=A.C(new A.Y(m,new C.h3k(),t),t.k("M.E"))
o=s}}catch(k){}q=J.qC(o,new C.h3l(e))
if(B.a.i(e.x).length===0&&C.ut(e,d)){m=B.a.i(d.toLowerCase())
p=e.aFX(e.y===D.kV?D.kV:D.uy,m)}else p=e
if(q===-1)J.pW(o,0,p)
else J.aK(o,q,p)
w=3
return A.b(C.RE(d,o),$async$a3P)
case 3:w=C.ut(p,d)?4:5
break
case 4:w=6
return A.b(C.aQp(C.Hg(p,d),p),$async$a3P)
case 6:if(!g)$.am.$1("[family_trees] cloud save failed for "+p.a+" \u2014 run supabase/family_trees_table.sql if table is missing")
case 5:return A.h(null,v)}})
return A.i($async$a3P,v)},
aQC(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$aQC=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(C.Hi(d),$async$aQC)
case 2:u=g
t=J.cC(u)
s=A.nz(t.eP(u,new C.fFd(e)))
t.bt(u,new C.fFe(e))
w=3
return A.b(C.RE(d,u),$async$aQC)
case 3:w=s!=null&&C.aQG(s,d)?4:5
break
case 4:w=6
return A.b(C.foU(e),$async$aQC)
case 6:case 5:return A.h(null,v)}})
return A.i($async$aQC,v)},
aiO(d){var w=d.f,v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.h3u(),v),v.k("M.E"))
return w},
hdu(d,e){var w,v=d.f,u=A.nz(new A.Y(v,new C.fEI(e),A.U(v).k("Y<1>")))
v=C.aiO(d)
w=A.U(v).k("Y<1>")
v=A.C(new A.Y(v,new C.fEJ(e,u),w),w.k("M.E"))
B.d.aZ(v,new C.fEK())
return v},
igE(d,e){var w=e.at
if(w>0)return w
w=d.w
if(w>0)return w
return 0},
hEp(d,e){var w,v,u=e.d
if(u==null||u.length===0)return 0
w=B.d.bj(C.hdu(d,u),new C.h2S(e))
if(w>=0)return w+1
v=e.Q
return v>0?v:0},
iib(d,e){var w
if(e==null||e.length===0)return 1
w=C.hdu(d,e)
if(w.length===0)return 1
return new A.N(w,new C.fJv(),A.U(w).k("N<1,F>")).f1(0,B.xK)+1},
iqD(d){var w,v=C.aiO(d)
if(v.length===0)return null
w=new A.Y(v,new C.fVO(),A.U(v).k("Y<1>"))
if(!w.gau(0))return w.gH(0)
return B.d.gH(v)},
igz(d){return A.H(["id",d.a,"name",d.b,"gender",C.hzR(d.c),"birthDate",d.w,"birthPlace",d.x,"deathDate",d.y,"occupation",d.z,"notes",d.r,"parentId",d.d,"spouseId",d.e,"birthOrder",d.Q,"hidden",d.as,"visibleChildrenCap",d.at],x.N,x.z)},
ii6(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=A.T(a0,x.P)
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
n=n!==D.yU?n:q.c
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
d=q.aFS(m,f,l,k,n,e,p,i,j,h,q.f,g,d)
p=d}s.push(p)}for(a0=w.length,u=0;u<w.length;w.length===a0||(0,A.J)(w),++u){o=w[u]
if(!r.q(0,o.a))s.push(o)}a0=a3.b
a0=a0.length!==0?a0:a2.b
a1=a3.c
a1=a1.length!==0?a1:a2.c
w=a3.e
w=w.length!==0?w:a2.e
v=a2.x
v=v.length!==0?v:a3.x
return a2.cPl(a1,w,a3.d,a2.y,s,a0,v)},
Bl(d){var w=0,v=A.j(x.ax),u,t,s,r,q,p,o
var $async$Bl=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=3
return A.b(A.az(),$async$Bl)
case 3:q=f
p=B.a.gX(B.a.i(d.toLowerCase()))
o=A.aT(J.t(q.a,"ngmy_worksheets_family_trees_v1_"+Math.abs(p)))
if(o==null||o.length===0){u=A.a([],x._)
w=1
break}try{t=B.Y.aQ(0,o,null)
if(!x.j.b(t)){p=A.a([],x._)
u=p
w=1
break}p=J.dd(t,x.f)
p=A.cE(p,new C.fID(),p.$ti.k("M.E"),x.k)
s=A.a4(p).k("Y<M.E>")
p=A.C(new A.Y(p,new C.fIE(),s),s.k("M.E"))
B.d.aZ(p,new C.fIF())
u=p
w=1
break}catch(n){p=A.a([],x._)
u=p
w=1
break}case 1:return A.h(u,v)}})
return A.i($async$Bl,v)},
aiy(b1,b2,b3){var w=0,v=A.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
var $async$aiy=A.e(function(b4,b5){if(b4===1)return A.f(b5,v)
for(;;)switch(w){case 0:a5=B.a.i(b3.toLowerCase())===B.a.i(b1.toLowerCase())
a6=a5?D.uy:D.kV
a7=C.Hg(b2,b3)
w=2
return A.b(C.Bl(b1),$async$aiy)
case 2:a8=b5
a9=J.cC(a8)
b0=a9.bj(a8,new C.fVJ(b2))
w=!a5&&b0===-1?3:4
break
case 3:w=5
return A.b(C.bDy(b1,b2),$async$aiy)
case 5:case 4:if(b0===-1){u=b2.aFX(a6,a7)
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
i=i!==D.yU?i:l.c
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
s.n(0,m,l.aFS(d,a3,a0,a1,i,n.as,k,e,a2,h,f,g,a4))}}r=b2.b
r=r.length!==0?r:t.b
q=b2.c
q=q.length!==0?q:t.c
m=b2.e
m=m.length!==0?m:t.e
k=s.$ti.k("b8<2>")
s=A.C(new A.b8(s,k),k.k("M.E"))
k=a5?D.uy:D.kV
u=t.cPn(q,m,b2.d,k,s,r,a7,b2.w)
a9.n(a8,b0,u)}w=6
return A.b(C.RE(b1,a8),$async$aiy)
case 6:w=a5?7:8
break
case 7:w=9
return A.b(C.aQp(B.a.i(b3.toLowerCase()),u),$async$aiy)
case 9:case 8:return A.h(null,v)}})
return A.i($async$aiy,v)},
hvO(d,e){var w,v,u,t,s,r,q="collaboratorEmails",p="visibleChildrenPerParent",o=new A.V(Date.now(),0,!1).aa().ag(),n=B.a.i(e.toLowerCase()),m=d.f,l=A.U(m).k("N<1,a8<n,@>>"),k=A.C(new A.N(m,C.hDt(),l),l.k("ak.E"))
m=d.a
l=d.b
w=d.c
v=d.d
u=d.e
t=d.w
s=d.r
r=x.N
return A.H(["id",m,"userEmail",n,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"payload",A.H(["id",m,"name",l,"code",w,"isPrivate",v,q,u,"members",k,p,t,"ownerEmail",n,"createdAt",s.aa().ag(),"updatedAt",o],r,x.K),"createdAt",s.aa().ag(),"updatedAt",o],r,x.z)},
hvP(d,e){var w=new A.V(Date.now(),0,!1).aa().ag(),v=B.a.i(e.toLowerCase()),u=d.f,t=A.U(u).k("N<1,a8<n,@>>")
u=A.C(new A.N(u,C.hDt(),t),t.k("ak.E"))
return A.H(["id",d.a,"userEmail",v,"name",d.b,"code",d.c,"isPrivate",d.d,"collaboratorEmails",d.e,"members",u,"createdAt",d.r.aa().ag(),"updatedAt",w],x.N,x.z)},
i6s(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k="userEmail",j=J.a7(d),i=j.h(d,"payload"),h=x.f
if(h.b(i)){w=C.alY(A.a3(i,x.N,x.z))
if(w.a.length!==0&&w.f.length!==0){j=j.h(d,k)
v=B.a.i(J.k(j==null?w.x:j).toLowerCase())
u=B.a.i(e.toLowerCase())
j=w.e
j=new A.N(j,A.hfY(),A.U(j).k("N<1,n>")).bY(0,new C.fpq())
t=A.C(j,j.$ti.k("M.E"))
if(u===v)s=D.uy
else s=B.d.q(t,u)?D.Oy:D.kV
return w.aFX(s,v)}}r=x.j
if(!r.b(j.h(d,"members"))&&h.b(j.h(d,"data")))return C.alY(A.a3(h.a(j.h(d,"data")),x.N,x.z))
q=j.h(d,"members")
if(r.b(q)){h=J.dd(q,h)
h=A.cE(h,new C.fpr(),h.$ti.k("M.E"),x.P)
p=A.a4(h).k("Y<M.E>")
o=A.C(new A.Y(h,new C.fps(),p),p.k("M.E"))}else o=A.a([],x.u)
n=j.h(d,"collaboratorEmails")
if(r.b(n)){h=J.b7(n,new C.fpt(),x.N).bY(0,new C.fpu())
t=A.C(h,h.$ti.k("M.E"))}else t=A.a([],x.s)
h=j.h(d,k)
v=B.a.i(J.k(h==null?"":h).toLowerCase())
u=B.a.i(e.toLowerCase())
if(u===v)s=D.uy
else s=B.d.q(t,u)?D.Oy:D.kV
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
j=A.aI(j.h(d,"visibleChildrenPerParent"))
j=j==null?null:B.j.M(j)
if(j==null)j=0
return new C.kT(h,r,p,!m,t,o,l,j,v,s,B.cc)},
fpD(a2){var w=0,v=A.j(x.eK),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$fpD=A.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:a0=B.a.i(a2.toLowerCase())
if(J.ad(a0)===0){u=null
w=1
break}t=4
r=new C.fpH()
h=x.N
g=x.z
w=7
return A.b(A.iB(A.a([A.lH("family_trees","*",null,A.H(["userEmail",a0],h,g),null,null,null,!0,null,null,!1,B.bL),r.$2(A.lH("family_trees","*",A.H(["collaboratorEmails",A.a([a0],x.s)],h,g),null,null,null,null,!0,null,null,!1,B.bL),"collaborator"),r.$2(A.lH("family_trees","*",null,A.H(["isPrivate",!1],h,g),null,null,null,!0,null,null,!1,B.bL),"public")],x.cl),x.fO),$async$fpD)
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
h=A.a4(l).k("b8<2>")
h=A.cE(new A.b8(l,h),new C.fpE(a0),h.k("M.E"),x.k)
l=A.a4(h).k("Y<M.E>")
l=A.C(new A.Y(h,new C.fpF(),l),l.k("M.E"))
B.d.aZ(l,new C.fpG())
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
return A.i($async$fpD,v)},
i91(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=J.a7(e)
if(j.gau(e))return d
w=B.a.i(f.toLowerCase())
v=x.N
u=j.dL(e,new C.ftN(),v).bY(0,new C.ftO())
t=A.d4(u,u.$ti.k("M.E"))
s=A.T(v,x.k)
for(v=d.length,u=w.length!==0,r=0;r<d.length;d.length===v||(0,A.J)(d),++r){q=d[r]
p=q.a
if(p.length===0)continue
o=C.Hg(q,w)
n=!1
if(u)if(o!==w){if(q.y===D.kV){m=q.e
m=!new A.N(m,A.hfY(),A.U(m).k("N<1,n>")).q(0,w)}else m=n
n=m}if(n&&!t.q(0,p))continue
s.n(0,p,q)}for(j=j.gae(e);j.C();){v=j.gR(j)
u=v.a
if(u.length===0)continue
l=s.h(0,u)
if(l==null){s.n(0,u,v)
continue}k=C.ii6(l,v)
o=C.Hg(k,w)
p=v.d
s.n(0,u,o===w?k.bf3(p,D.uy):k.bf3(p,v.y))}j=s.$ti.k("b8<2>")
j=A.C(new A.b8(s,j),j.k("M.E"))
B.d.aZ(j,new C.ftP())
return j},
RE(d,e){var w=0,v=A.j(x.H),u,t,s
var $async$RE=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:w=2
return A.b(A.az(),$async$RE)
case 2:u=g
t=B.a.gX(B.a.i(d.toLowerCase()))
s=J.b7(e,new C.fwG(),x.a)
s=A.C(s,s.$ti.k("ak.E"))
w=3
return A.b(u.aB("String","ngmy_worksheets_family_trees_v1_"+Math.abs(t),B.Y.az(s,null)),$async$RE)
case 3:return A.h(null,v)}})
return A.i($async$RE,v)},
aQp(d,e){return C.iel(d,e)},
iel(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n
var $async$aQp=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
p=x.Y
w=7
return A.b(A.mc("family_trees",A.a([C.hvO(e,d)],p),null,B.cL),$async$aQp)
case 7:r=g
if(r){u=!0
w=1
break}w=8
return A.b(A.mc("family_trees",A.a([C.hvP(e,d)],p),null,B.cL),$async$aQp)
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
return A.i($async$aQp,v)},
aQq(d,e){return C.iem(d,e)},
iem(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i
var $async$aQq=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(e.length===0){u=!1
w=1
break}t=4
n=A.U(e).k("N<1,a8<n,@>>")
m=n.k("ak.E")
l=A.C(new A.N(e,new C.fBW(d),n),m)
r=l
w=7
return A.b(A.mc("family_trees",r,null,B.cL),$async$aQq)
case 7:q=g
if(q){u=!0
w=1
break}k=A.C(new A.N(e,new C.fBX(d),n),m)
p=k
w=8
return A.b(A.mc("family_trees",p,null,B.cL),$async$aQq)
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
return A.i($async$aQq,v)},
foU(d){return C.i5G(d)},
i5G(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$foU=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:if(d.length===0){w=1
break}t=4
w=7
return A.b(A.S3("family_trees",A.H(["id",d],x.N,x.z),null,B.cL),$async$foU)
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
return A.i($async$foU,v)},
rm:function rm(d,e,f,g,h){var _=this
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
cFL:function cFL(){},
cFK:function cFK(){},
cFI:function cFI(){},
cFJ:function cFJ(){},
Ip:function Ip(d,e){this.a=d
this.b=e},
hT:function hT(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
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
alX:function alX(d,e){this.a=d
this.b=e},
fF2:function fF2(){},
h3q:function h3q(d){this.a=d},
fCG:function fCG(d){this.a=d},
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
bSj:function bSj(){},
bSi:function bSi(){},
bSf:function bSf(){},
bSg:function bSg(){},
bSh:function bSh(){},
ft5:function ft5(){},
foQ:function foQ(){},
foR:function foR(){},
foS:function foS(){},
fW7:function fW7(){},
fW8:function fW8(){},
fW9:function fW9(){},
fWa:function fWa(d){this.a=d},
fWb:function fWb(){},
h3o:function h3o(d){this.a=d},
fFw:function fFw(d){this.a=d},
fIG:function fIG(){},
fIH:function fIH(){},
fII:function fII(){},
fIJ:function fIJ(){},
fIK:function fIK(d){this.a=d},
fVV:function fVV(d){this.a=d},
h3j:function h3j(){},
h3k:function h3k(){},
h3l:function h3l(d){this.a=d},
fFd:function fFd(d){this.a=d},
fFe:function fFe(d){this.a=d},
h3u:function h3u(){},
fEI:function fEI(d){this.a=d},
fEJ:function fEJ(d,e){this.a=d
this.b=e},
fEK:function fEK(){},
h2S:function h2S(d){this.a=d},
fJv:function fJv(){},
fVO:function fVO(){},
fID:function fID(){},
fIE:function fIE(){},
fIF:function fIF(){},
fVJ:function fVJ(d){this.a=d},
fpq:function fpq(){},
fpr:function fpr(){},
fps:function fps(){},
fpt:function fpt(){},
fpu:function fpu(){},
fpH:function fpH(){},
fpI:function fpI(d){this.a=d},
fpE:function fpE(d){this.a=d},
fpF:function fpF(){},
fpG:function fpG(){},
ftN:function ftN(){},
ftO:function ftO(){},
ftP:function ftP(){},
fwG:function fwG(){},
fBW:function fBW(d){this.a=d},
fBX:function fBX(d){this.a=d},
cFM:function cFM(d,e){this.a=d
this.b=e},
cFN:function cFN(d,e){this.a=d
this.b=e},
aIu:function aIu(d,e,f){this.a=d
this.b=e
this.c=f},
bav:function bav(){this.b=this.a=0},
bau:function bau(d,e,f,g){var _=this
_.f=d
_.w=e
_.z=f
_.b=g
_.a=null},
by4:function by4(){},
xi(d,e){var w,v
if(d==null)return""
w=d.bT()
v=""+w.gcg()+"/"+w.gcw()+"/"+w.gcl()
if(!e)return v
return v+" "+B.a.b_(B.o.u(w.gnt()),2,"0")+":"+B.a.b_(B.o.u(w.gGI()),2,"0")},
hX1(){var w,v=$.or(),u=J.e2(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"WS"+B.d.he(u)},
atO(){var w=0,v=A.j(x.a),u,t=2,s=[],r,q,p,o,n,m
var $async$atO=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atO)
case 3:if(!e){u=A.T(x.N,x.z)
w=1
break}t=5
w=8
return A.b(A.f4("ngmy_worksheet_project_qr_stashes_v1",null,!1,B.bL),$async$atO)
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
return A.i($async$atO,v)},
atP(d){return C.hX2(d)},
hX2(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p
var $async$atP=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atP)
case 3:if(!f){w=1
break}t=5
w=8
return A.b(A.hJ("ngmy_worksheet_project_qr_stashes_v1",A.H(["stashes",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,B.cL,null),$async$atP)
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
return A.i($async$atP,v)},
atR(d,e,f){var w=0,v=A.j(x.he),u,t,s,r,q,p
var $async$atR=A.e(function(g,h){if(g===1)return A.f(h,v)
for(;;)switch(w){case 0:w=3
return A.b(A.c8(),$async$atR)
case 3:if(!h){u=null
w=1
break}t=B.a.i(d)
if(t.length===0){u=null
w=1
break}s=C.hX1()
w=4
return A.b(C.atO(),$async$atR)
case 4:r=h
q=B.a.i(e)
p=B.dS.aM(t)
J.aK(r,s,A.H(["ownerEmail",q,"projectId",f,"payload",B.cP.gcu().aM(p),"usesRemaining",25,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],x.N,x.K))
w=5
return A.b(C.atP(r),$async$atR)
case 5:u=new A.a1g("NGMYWSSYNC2|"+s,s,25)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atR,v)},
atQ(d){var w=0,v=A.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$atQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:i=B.a.i(d)
if(i.length===0){u=null
w=1
break}w=3
return A.b(A.c8(),$async$atQ)
case 3:if(!f){u=null
w=1
break}w=4
return A.b(C.atO(),$async$atQ)
case 4:q=f
p=J.a7(q)
o=p.h(q,i)
if(!x.f.b(o)){u=null
w=1
break}n=J.a7(o)
m=A.aI(n.h(o,"usesRemaining"))
l=m==null?null:B.j.M(m)
if(l==null)l=0
if(l<=0){u=null
w=1
break}n=n.h(o,"payload")
t=J.k(n==null?"":n)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=B.c9.cH(0,B.cI.aM(t))}catch(h){r=A.ab(h)
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
return A.b(C.atP(q),$async$atQ)
case 5:u=s
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$atQ,v)},
hqe(){var w=new A.V(Date.now(),0,!1).aa()
return"wst_"+(1000*w.a+w.b)+"_"+B.cN.aw(999999)},
hX3(d){var w,v,u,t,s,r,q
try{w=A.ahq(d)
if(w==null)return d
v=w
if(J.M9(v)>960||J.M8(v)>960){s=v
r=J.M9(v)>=J.M8(v)?960:null
v=A.ahn(s,J.M8(v)>J.M9(v)?960:null,B.PW,r)}s=v
u=A.ani(82).TT(s,B.zy)
if(J.ad(u)===0)return d
s=new Uint8Array(A.cb(u))
return s}catch(q){t=A.ab(q)
$.am.$1("[worksheet-thumb] compress failed: "+A.w(t))
return d}},
co2(d,e){var w=0,v=A.j(x.y),u,t,s
var $async$co2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0||e.length===0){u=!1
w=1
break}t=C.hX3(e)
$.cnZ.n(0,s,t)
u=C.bFA(s,t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$co2,v)},
b4d(d){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b4d=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(!J.d3(l,"data:image")){u=null
w=1
break}t=4
r=J.eG(l,",")?B.d.gan(J.lL(l,",")):l
q=B.cI.aM(r)
if(J.ad(q)===0){u=null
w=1
break}p=C.hqe()
w=7
return A.b(C.co2(p,q),$async$b4d)
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
return A.i($async$b4d,v)},
co_(d){var w=0,v=A.j(x.T),u,t,s
var $async$co_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=B.a.i(d)
if(s.length===0){u=null
w=1
break}if(B.a.a0(s,"data:image")){u=s
w=1
break}w=3
return A.b(N.co1(s),$async$co_)
case 3:t=f
if(t==null||t.length===0){u=null
w=1
break}u="data:image/jpeg;base64,"+B.cP.gcu().aM(t)
w=1
break
case 1:return A.h(u,v)}})
return A.i($async$co_,v)},
a9o(d){var w=0,v=A.j(x.H),u,t
var $async$a9o=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=N.hDl(d)
if(t==null){w=1
break}$.cnZ.W(0,t)
w=3
return A.b(C.bFz(t),$async$a9o)
case 3:case 1:return A.h(u,v)}})
return A.i($async$a9o,v)},
bFA(d,e){return C.ioh(d,e)},
ioh(d,e){var w=0,v=A.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$bFA=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:l=B.a.i(d)
if(l.length===0||e.length===0){u=!1
w=1
break}t=4
n=$.aPh
w=7
return A.b(n==null?$.aPh=N.hcj():n,$async$bFA)
case 7:r=g
q=new Uint8Array(A.cb(e))
p=J.n0(r,"thumbs","readwrite")
B.j6.mx(J.n_(p,"thumbs"),q,l)
w=8
return A.b(J.pV(p),$async$bFA)
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
return A.i($async$bFA,v)},
bFz(d){return C.iof(d)},
iof(d){var w=0,v=A.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bFz=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=B.a.i(d)
if(m.length===0){w=1
break}t=4
o=$.aPh
w=7
return A.b(o==null?$.aPh=N.hcj():o,$async$bFz)
case 7:r=f
q=J.n0(r,"thumbs","readwrite")
B.j6.Gi(J.n_(q,"thumbs"),m)
w=8
return A.b(J.pV(q),$async$bFz)
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
return A.i($async$bFz,v)}},D,Aw,Ax,A_,Ay,Az
J=c[1]
A=c[0]
B=c[2]
N=c[61]
Q=c[260]
A0=c[166]
T=c[60]
A9=c[235]
L=c[215]
H=c[35]
E=c[225]
P=c[122]
Aa=c[238]
R=c[106]
Ab=c[137]
U=c[231]
Ac=c[117]
Ad=c[201]
A1=c[119]
Ae=c[234]
Af=c[44]
S=c[233]
M=c[91]
A2=c[87]
Ag=c[172]
A3=c[132]
A4=c[175]
Ah=c[125]
A5=c[202]
Ai=c[254]
Aj=c[192]
Ak=c[205]
A6=c[200]
Al=c[257]
Am=c[73]
A7=c[259]
An=c[79]
G=c[258]
Ao=c[136]
Ap=c[262]
Aq=c[121]
A8=c[219]
Ar=c[34]
V=c[120]
O=c[195]
As=c[206]
W=c[261]
At=c[158]
Au=c[128]
X=c[247]
Y=c[43]
F=c[97]
Av=c[33]
I=c[105]
K=c[141]
Z=c[77]
C=a.updateHolder(c[7],C)
D=c[253]
Aw=c[78]
Ax=c[213]
A_=c[256]
Ay=c[255]
Az=c[64]
C.apv.prototype={}
C.b_w.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.c,g=h.bjn(),f=h.x!=null&&h.zG(i).length===0
if(h.x!=null)w=f?B.b1:B.bC
else w=h.gUy()?B.bC:B.dW
v=B.a.i(h.b)
if(v.length===0)v="\u2014"
u=A.m(22)
t=A.L(D.bol,B.r,1)
s=x.p
r=A.q(i,A.x(A.a([A.q(i,D.f7W,B.f,i,i,new A.p(B.b1.j(0.12),i,i,A.m(999),i,i,B.n),i,i,i,i,B.h9,i,i,i),B.X,D.fDE,B.ax,A.d(C.xi(new A.V(Date.now(),0,!1),!0),i,i,i,i,i,i,D.fzl,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,D.b6H,i,i,i,i,B.a0i,i,i,i)
q=A.m(16)
p=A.L(B.aO,B.r,1)
o=A.L(B.b1.j(0.28),B.r,1)
n=A.hew(h.d)
o=A.q(B.A,C.b_v(A.fLQ(h.e,n),30),B.f,i,i,new A.p(B.m4,i,o,i,i,i,B.a7),i,56,i,i,i,i,i,56)
n=A.d(v,i,i,i,i,i,i,D.fur,B.K,i,i)
m=A.m(14)
l=A.L(B.aO,B.r,1)
q=A.q(i,A.x(A.a([o,B.U,n,B.bG,D.fDX,B.af,A.q(i,A.x(A.a([D.fU1,B.bG,A.d(A.Bn(h.c),i,i,i,i,i,i,D.fp9,i,i,i)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,l,m,i,i,B.n),i,i,i,i,B.ff,i,i,1/0)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aQ,i,p,q,i,i,B.n),i,i,i,i,O.alz,i,i,i)
p=A.m(16)
m=A.L(B.aO,B.r,1)
l=j.aT0("Original due",C.xi(h.r,!1))
n=j.aT0("Current due",C.xi(h.f,!1))
o=w.j(0.1)
k=A.m(12)
p=A.a([q,B.X,A.q(i,A.x(A.a([l,B.U,n,B.X,A.q(i,A.d(h.gaN3(),i,i,i,i,i,i,A.l(i,i,w,i,i,i,i,i,i,i,i,12.5,i,i,B.u,i,i,!0,i,0.4,i,i,i,i,i,i),B.K,i,i),B.f,i,i,new A.p(o,i,i,k,i,i,B.n),i,i,i,i,B.C8,i,i,1/0),B.X,j.ckc(),B.U,j.c70(g,f)],s),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,m,p,i,i,B.n),i,i,i,i,B.bh,i,i,i)],s)
q=B.a.i(h.y)
if(q.length!==0){o=A.m(14)
n=A.L(B.aO,B.r,1)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fEU,B.ax,A.d(q,i,i,i,i,i,i,D.ftF,i,i,i)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.aQ,i,n,o,i,i,B.n),i,i,i,i,B.bh,i,i,1/0)],s))}if(h.gaHD()){q=A.m(14)
o=A.L(B.ct,B.r,1.6)
B.d.v(p,A.a([B.X,A.q(i,A.x(A.a([D.fVm,B.U,A.by(A.m(12),A.e8(new A.a5(1/0,88,A.b4(i,i,i,new A.X0(h.ax,B.S,D.fcI,!0,3.5,i),B.az),i),B.c,!0),B.aq)],s),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.c,i,o,q,i,i,B.n),i,i,i,i,B.GH,i,i,i)],s))}p.push(B.aB)
p.push(D.fNc)
return A.q(i,A.x(A.a([r,new A.D(B.a07,A.x(p,B.al,i,B.e,B.i,0,B.p),i)],s),B.al,i,B.e,B.Q,0,B.p),B.aq,i,i,new A.p(B.c,i,t,u,i,i,B.n),i,i,i,i,i,i,i,1/0)},
aT0(d,e){var w=null
return A.A(A.a([A.E(A.d(d,w,w,w,w,w,w,D.abc,w,w,w),1),A.d(e,w,w,w,w,w,w,D.fqc,w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
ckc(){var w,v,u="Date paid",t=this.c
if(t.x==null)return this.aak(B.dW,u,"Not paid yet")
w=t.zG(null).length
v=w===0?B.b1:B.bC
return this.aak(v,u,C.xi(t.x,!0))},
c70(d,e){var w,v,u=null,t="Missed days"
if(this.c.x!=null&&e)return this.aak(B.b1,t,"None \u2014 paid on time")
w=d.length
if(w===0)return this.aak(B.b1,t,"None yet")
w=A.d("Missed days ("+w+")",u,u,u,u,u,u,D.abc,u,u,u)
v=A.U(d).k("N<1,h1>")
v=A.C(new A.N(d,new C.c7z(),v),v.k("ak.E"))
return A.x(A.a([w,B.an,A.bW(B.bH,v,B.bt,u,6,6)],x.p),B.E,u,B.e,B.i,0,B.p)},
aak(d,e,f){var w=null
return A.A(A.a([A.E(A.d(e,w,w,w,w,w,w,D.abc,w,w,w),1),new A.dn(1,B.cp,A.d(f,w,w,w,w,w,w,A.l(w,w,d,w,w,w,w,w,w,w,w,12.5,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.dY,w,w),w)],x.p),B.E,w,B.e,B.i,0,w,w)}}
C.bcH.prototype={
a4(d,e){new A.X0(this.b,B.S,e,!0,3.5,null).a4(d,e)},
aE(d){return d.b!==this.b}}
C.apH.prototype={
S(){return new C.aEp(A.a([],x.bp))},
ge3(){return this.c}}
C.aEp.prototype={
Y(){this.a2()
this.Jd()},
Jd(){var w=0,v=A.j(x.H),u,t=this,s
var $async$Jd=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(A.a34(t.a.c),$async$Jd)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.dPH(t,s))
case 1:return A.h(u,v)}})
return A.i($async$Jd,v)},
aUY(d,e){var w,v=null,u=this.a.d.a,t=u?B.S:B.aQ,s=A.l(v,v,u?B.bu:B.bq,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),r=A.m(10)
u=(this.a.d.a?B.bu:B.bq).j(0.22)
w=A.m(10)
return A.bt(v,new A.b6(4,r,new A.ay(u,1,B.r,-1)),v,B.bh,v,v,v,v,!0,new A.b6(4,w,new A.ay((this.a.d.a?B.bu:B.bq).j(0.22),1,B.r,-1)),v,v,v,v,v,t,!0,v,v,v,v,new A.b6(4,A.m(10),D.b4k),v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,s,d,!0,!0,!1,v,v,v,v,v,e,v,v,v,v,v,v,v,v)},
aUX(d){return this.aUY(d,null)},
Q_(d){return this.cnQ(d)},
cnQ(d){var w=0,v=A.j(x.T),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q_=A.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
n=d?B.HZ:B.eN
w=7
return A.b(new A.hU().CG(72,900,900,n),$async$Q_)
case 7:q=f
if(q==null){u=null
w=1
break}w=8
return A.b(q.fp(),$async$Q_)
case 8:p=f
n=B.cP.gcu().aM(p)
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
if(n!=null)n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Could not pick photo: "+A.w(o),null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Q_,v)},
b36(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.a.d.a,p=q?B.S:B.aQ,o=A.m(10),n=A.L((q?B.bu:B.bq).j(0.18),B.r,1)
if(d)q=B.cG
else q=s.a.d.a?B.bu:B.bq
q=A.X(e,q,r,r,r,18)
w=A.d(i,r,r,r,r,r,r,A.l(r,r,s.a.d.a?B.aQ:B.as,r,r,r,r,r,r,r,r,12.5,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
v=d?"Added \xb7 optional":h
if(d)u=B.cG
else u=s.a.d.a?B.bu:B.bq
t=x.p
u=A.E(A.x(A.a([w,A.d(v,r,r,r,r,r,r,A.l(r,r,u,r,r,r,r,r,r,r,r,10.5,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],t),B.E,r,B.e,B.i,0,B.p),1)
v=A.ft(r,r,r,r,r,r,r,r,r,r,r,B.cG,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ce)
q=A.a([q,B.ae,u,A.bM(!1,A.d(d?"Change":"Add",r,r,r,r,r,r,r,r,r,r),r,r,!0,r,r,r,f,r,v)],t)
if(d)q.push(A.aG(r,r,r,r,A.X(B.cz,s.a.d.a?B.bu:B.bq,r,r,r,18),r,r,r,g,r,r,r,r,r,B.ce))
return A.q(r,A.A(q,B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(p,r,n,o,r,r,B.n),r,r,r,B.jD,D.bBd,r,r,r)},
DD(d){return this.bDx(d)},
bDw(){return this.DD(null)},
bDx(a5){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DD=A.e(function(a6,a7){if(a6===1)return A.f(a7,v)
for(;;)switch(w){case 0:a2={}
a3=a5==null
a4=a3?null:a5.b
if(a4==null)a4=""
s=$.aw()
r=new A.au(new A.ba(a4,B.b6,B.aP),s)
if(a3)a4=""
else{a4=a5.c
q=B.j.iY(a4)
p=a5.c
a4=a4===q?B.o.u(B.j.M(p)):B.j.ad(p,2)}o=new A.au(new A.ba(a4,B.b6,B.aP),s)
a4=a3?null:a5.y
if(a4==null)a4=""
n=new A.au(new A.ba(a4,B.b6,B.aP),s)
if(a3){a4=new A.V(Date.now(),0,!1).bR(6048e8)
m=A.c1(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)}else{a4=a5.f
m=A.c1(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)}a2.a=m
l=a3?null:a5.as
a2.b=l==null?"":l
k=a3?null:a5.at
a2.c=k==null?"":k
a4=a3?null:a5.ax
if(a4==null)a4=[]
j=A.bq(a4,!0,x.cT)
i=a3?null:A.hew(a5.d)
a2.d=i
h=a3?null:B.a.i(a5.e)
if(h==null)h=""
a2.e=h
if(h.length===0&&i!=null)a2.e=i===B.wY?"\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1":"\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"
a4=t.c
a4.toString
w=3
return A.b(A.i_(B.w.j(0.55),!0,"Dismiss",a4,new C.dPq(),new C.dPr(a2,t,a5,r,new C.dPs(a2,t),o,n,j),B.eG,!0,x.y),$async$DD)
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
break}if(f.length===0||e<=0){t.c.L(x.q).f.U(D.fje)
w=1
break}a0=a2.d
if(a0==null){t.c.L(x.q).f.U(D.fhU)
w=1
break}a1=A.fLQ(a2.e,a0)
w=a3?4:6
break
case 4:a3=t.a.c
a4=Date.now()
s=a2.a
q=a2.b
a2=a2.c
p=a0===B.wY?"male":"female"
w=7
return A.b(A.aiN(a3,A.hmW(0,e,a1,null,"",s,p,"iou_"+1000*a4,q,d,null,null,f,a2,j)),$async$DD)
case 7:w=5
break
case 6:a5.b=f
a5.c=e
a5.y=d
a5.as=a2.b
a5.at=a2.c
a5.d=a0===B.wY?"male":"female"
a5.e=a1
a3=a5.ax
B.d.a8(a3)
B.d.v(a3,j)
a3=a2.a
a3=A.c1(a3.gcl(),a3.gcg(),a3.gcw(),0,0,0,0,0)
a4=a5.f
if(!a3.A(0,A.c1(a4.gcl(),a4.gcg(),a4.gcw(),0,0,0,0,0)))a5.cRI(a2.a)
w=8
return A.b(A.aiN(t.a.c,a5),$async$DD)
case 8:case 5:w=9
return A.b(t.Jd(),$async$DD)
case 9:case 1:return A.h(u,v)}})
return A.i($async$DD,v)},
aVD(d,e,f,g){var w,v,u,t,s,r,q,p=null
if(g)w=B.cG.j(0.14)
else w=this.a.d.a?B.S:B.aQ
v=A.m(12)
u=A.m(12)
t=A.m(12)
if(g)s=B.cG
else s=(this.a.d.a?B.bu:B.bq).j(0.2)
s=A.L(s,B.r,g?1.5:1)
r=C.b_v(d,18)
if(g)q=B.cG
else q=this.a.d.a?B.aQ:B.as
return A.aJ(!1,B.a3,!0,v,A.aP(!1,u,!0,A.q(p,A.A(A.a([r,B.bm,A.d(e,p,p,p,p,p,p,A.l(p,p,q,p,p,p,p,p,p,p,p,13,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],x.p),B.m,p,B.ba,B.i,0,p,p),B.f,p,p,new A.p(p,p,s,t,p,p,B.n),p,p,p,p,B.bV,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,p),B.f,w,0,p,p,p,p,p,B.aj)},
SQ(d){return this.cFG(d)},
cFG(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$SQ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d.x!=null?3:5
break
case 3:d.x=null
w=4
break
case 5:s=t.c
s.toString
w=6
return A.b(A.i_(B.w.j(0.55),!0,"Dismiss",s,new C.dPK(),new C.dPL(t,d),B.h_,!0,x.y),$async$SQ)
case 6:if(f!==!0){w=1
break}s=Date.now()
d.x=new A.V(s,0,!1)
case 4:w=7
return A.b(A.aiN(t.a.c,d),$async$SQ)
case 7:w=8
return A.b(t.Jd(),$async$SQ)
case 8:case 1:return A.h(u,v)}})
return A.i($async$SQ,v)},
PZ(d,e){return this.bOo(0,e)},
bOo(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$PZ=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.lo(s,"Cancel","Delete",e.b+" \xb7 "+A.Bn(e.c)+" will be removed from this device.","Delete this debt?"),$async$PZ)
case 3:if(!g){w=1
break}w=4
return A.b(C.fFk(t.a.c,e.a),$async$PZ)
case 4:w=5
return A.b(t.Jd(),$async$PZ)
case 5:case 1:return A.h(u,v)}})
return A.i($async$PZ,v)},
ag8(d){return this.chC(d)},
chC(d){var w=0,v=A.j(x.H),u=this,t
var $async$ag8=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.bT(B.L,null,new C.dPE(u,d),t,!0,!0,!1,null,!1,!1,x.H),$async$ag8)
case 2:return A.h(null,v)}})
return A.i($async$ag8,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null
if(m.e)return D.er5
w=J.dI(m.d,new C.dPM())
v=A.C(w,w.$ti.k("M.E"))
w=J.dI(m.d,new C.dPN())
u=A.C(w,w.$ti.k("M.E"))
t=B.d.cJ(v,0,new C.dPO())
w=A.m(18)
s=m.a.d.a
r=s?D.cAM:D.aCq
q=A.L(s?B.cG.j(0.35):B.cG.j(0.18),B.r,1)
s=A.q(l,D.c1F,B.f,l,l,new A.p(B.cG.j(m.a.d.a?0.28:0.14),l,l,A.m(12),l,l,B.n),l,38,l,l,l,l,l,38)
p=x.p
s=A.A(A.a([s,B.au,A.E(A.d("Cashier",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.as,l,l,l,l,l,l,l,l,18,l,l,B.u,l,l,!0,l,-0.2,l,l,l,l,l,l),l,l,l),1),A.aJ(!1,B.a3,!0,A.m(12),A.aP(!1,A.m(12),!0,D.eqr,l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.dPP(m),l,l,l,l,l,l,l),B.f,B.cG,0,l,l,l,l,l,B.aj)],p),B.m,l,B.e,B.i,0,l,l)
o=A.E(m.cBM("Open",""+v.length),1)
n=v.length===0?"$0.00":A.Bn(t)
r=A.a([A.q(l,A.x(A.a([s,B.af,A.A(A.a([o,B.ae,A.E(m.b9f(v.length!==0,"Owed",n),1)],p),B.m,l,B.e,B.i,0,l,l)],p),B.E,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(l,l,q,w,l,new A.a9(B.aA,B.aF,B.x,r,l,l),B.n),l,l,l,l,B.alw,l,l,l),B.aB],p)
if(J.cr(m.d)){w=m.a.d.a
s=w?B.e9:B.c
q=A.m(18)
o=A.L((w?B.bu:B.bq).j(0.12),B.r,1)
n=A.q(l,D.bXt,B.f,l,l,new A.p(B.cG.j(0.12),l,l,A.m(16),l,l,B.n),l,52,l,l,l,l,l,52)
w=A.d("Nobody owes you yet",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.aQ:B.as,l,l,l,l,l,l,l,l,15,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)
r.push(A.q(l,A.x(A.a([n,B.af,w,B.ax,A.d("Add a name, amount, and pay-by date.",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bq,l,l,l,l,l,l,l,l,12.5,l,l,l,l,1.35,!0,l,l,l,l,l,l,l,l),B.K,l,l)],p),B.m,l,B.e,B.i,0,B.p),B.f,l,l,new A.p(s,l,o,q,l,l,B.n),l,l,l,l,D.bDQ,l,l,1/0))}else{w=m.gcn6()
s=A.C(new A.N(v,w,A.U(v).k("N<1,v>")),x.l)
if(u.length!==0){q=A.a([B.an,new A.D(D.bFw,A.d("Paid",l,l,l,l,l,l,A.l(l,l,m.a.d.a?B.bu:B.bq,l,l,l,l,l,l,l,l,12,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),l)],p)
B.d.v(q,new A.N(u,w,A.U(u).k("N<1,v>")))
B.d.v(s,q)}B.d.v(r,s)}return A.x(r,B.al,l,B.e,B.i,0,B.p)},
b9f(d,e,f){var w,v=this,u=null,t=v.a.d.a?B.w.j(0.22):B.c.j(0.85),s=A.m(14),r=A.L((v.a.d.a?B.bu:B.bq).j(0.12),B.r,1),q=A.d(e,u,u,u,u,u,u,A.l(u,u,v.a.d.a?B.bu:B.bq,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
if(d)w=B.cG
else w=v.a.d.a?B.aQ:B.as
return A.q(u,A.x(A.a([q,B.bG,A.d(f,u,1,B.a2,u,u,u,A.l(u,u,w,u,u,u,u,u,u,u,u,16,u,u,B.u,u,u,!0,u,-0.2,u,u,u,u,u,u),u,u,u)],x.p),B.E,u,B.e,B.i,0,B.p),B.f,u,u,new A.p(t,u,r,s,u,u,B.n),u,u,u,u,B.eD,u,u,u)},
cBM(d,e){return this.b9f(!1,d,e)},
cn7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=d.zG(j).length,h=d.biD()
if(d.x!=null){w=d.zG(j).length
v=w===0?B.cG:B.bC}else if(d.gUy())v=B.bC
else{if(h)w=B.cG
else w=k.a.d.a?B.bu:B.bq
v=w}if(d.x!=null){w=d.zG(j).length
u=d.x
if(w===0){u.toString
t="Paid on time \xb7 "+C.xi(u,!1)}else{u.toString
t="Paid "+C.xi(u,!1)+" \xb7 "+i+" missed"}}else if(h)t="Pays tomorrow"
else{w=d.f
t=i>0?"Due "+C.xi(w,!1)+" \xb7 "+i+" missed":"Due "+C.xi(w,!1)}w=k.a.d.a?B.e9:B.c
u=A.m(18)
if(d.gUy()&&d.x==null)s=B.bC.j(0.35)
else s=(k.a.d.a?B.bu:B.bq).j(0.12)
s=A.L(s,B.r,1)
r=k.a.d.a?j:A.a([new A.ac(0,B.G,B.w.j(0.04),B.cM,12)],x.V)
q=A.m(18)
p=k.a.d.a?B.bp:B.m4
o=A.L(d.gUy()&&d.x==null?B.bC.j(0.45):B.cG.j(0.28),B.r,1.4)
n=d.x!=null?0.55:1
m=A.hew(d.d)
o=A.q(B.A,A.da(C.b_v(A.fLQ(d.e,m),24),n),B.f,j,j,new A.p(p,j,o,j,j,j,B.a7),j,46,j,j,j,j,j,46)
p=d.b
n=k.a.d.a?B.aQ:B.as
m=x.p
n=A.a([new A.dn(1,B.cp,A.d(p,j,1,B.a2,j,j,j,A.l(j,j,n.j(d.x!=null?0.6:1),j,j,j,j,j,j,j,j,14.5,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),j)],m)
if(B.a.i(d.as).length!==0||B.a.i(d.at).length!==0||d.gaHD())B.d.v(n,A.a([B.e1,A.X(B.P_,B.cG.j(0.8),j,j,j,14)],m))
p=A.E(A.x(A.a([A.A(n,B.m,j,B.e,B.i,0,j,j),B.cU,A.d(t,j,1,B.a2,j,j,j,A.l(j,j,v,j,j,j,j,j,j,j,j,11.5,j,j,B.V,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],m),B.E,j,B.e,B.i,0,B.p),1)
n=A.Bn(d.c)
l=k.a.d.a?B.aQ:B.as
n=A.d(n,j,j,j,j,j,j,A.l(j,j,l.j(d.x!=null?0.55:1),j,j,j,j,j,j,j,j,14,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
return A.q(j,A.aJ(!1,B.a3,!0,j,A.aP(!1,q,!0,new A.D(Ai.alk,A.A(A.a([o,B.bd,p,B.ae,A.x(A.a([n,B.bG,A.X(B.eI,(k.a.d.a?B.bu:B.bq).j(0.5),j,j,j,18)],m),B.dL,j,B.e,B.i,0,B.p)],m),B.m,j,B.e,B.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,j,new C.dPG(k,d),j,j,j,j,j,j,j),B.f,B.L,0,j,j,j,j,j,B.aj),B.f,j,j,new A.p(w,j,s,u,r,j,B.n),j,j,j,B.d3,j,j,j,j)}}
C.uM.prototype={}
C.alL.prototype={
B(a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=d.c,a2=a1.y,a3=d.d
if(a2)a3=a3.toUpperCase()
w=a1.w
v=w===B.bn
u=v?B.E:B.m
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
l.push(A.d(a3,a0,1,a0,a0,!1,a0,A.l(a0,a0,i,a0,a0,a0,a0,a0,g,a0,a0,f,a0,a0,B.u,a0,a0,!0,a0,a2,a0,a0,a0,t?a0:D.ayA,a0,a0),a0,a0,a0))
if(j&&!v)l.push(new A.D(B.GY,A.d(k,a0,a0,a0,a0,a0,a0,A.l(a0,a0,r,a0,a0,a0,a0,a0,a0,a0,a0,15,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0),a0))
a2=A.a([A.ev(m,A.A(l,B.m,a0,B.e,B.Q,0,a0,a0),B.f,B.e0)],o)
v=d.e
m=B.a.i(v)
if(m.length!==0){m=i.j(0.65)
a2.push(new A.D(D.bAo,A.d(v,a0,1,B.a2,a0,a0,a0,A.l(a0,a0,m,a0,a0,a0,a0,a0,a0,a0,a0,10,h?B.cH:B.bs,a0,a0,a0,a0,!0,a0,0.8,a0,a0,a0,a0,a0,a0),w,a0,a0),a0))}n.push(A.E(new A.D(B.fG,A.x(a2,u,a0,B.e,B.Q,0,B.p),a0),1))
n.push(D.fdw)
a2=A.a([A.A(n,B.m,a0,B.e,B.i,0,a0,a0)],o)
w=d.r
if(w!=null)B.d.v(a2,A.a([new A.D(B.we,A.q(a0,a0,B.f,a0,a0,new A.p(a0,a0,a0,a0,a0,new A.a9(B.a6,B.aa,B.x,A.a([B.L,r.j(0.75),B.L],x.O),a0,a0),B.n),a0,1,a0,a0,a0,a0,a0,a0),a0),w],o))
e=new A.D(B.lK,A.x(a2,B.m,a0,B.e,B.Q,0,B.p),a0)
if(a1.z){a2=A.m(t?9:19)
e=A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,A.L(r.j(0.45),B.r,1),a2,a0,a0,B.n),a0,a0,a0,B.hs,a0,a0,a0,a0)}return A.q(a0,e,B.f,a0,a0,new A.p(a0,a0,q,s,p,new A.a9(B.aA,B.aF,B.x,a1.d,a0,a0),B.n),a0,a0,a0,D.bBG,a0,a0,a0,a0)}}
C.aWg.prototype={
B(d){var w,v,u,t,s,r,q=null,p=this.c,o=this.e,n=A.q(q,q,B.f,o.j(0.28),q,q,q,1,q,q,q,q,q,q),m=x.p,l=A.a([],m),k=p.r,j=k.length!==0
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
w=p.y
v=this.d
if(w)v=v.toUpperCase()
u=p.w===B.bn?B.bn:B.K
t=o.j(0.6)
s=p.x?"Georgia":q
r=w?1.6:0.6
l.push(A.E(A.d(v,q,1,B.a2,q,q,q,A.l(q,q,t,q,q,q,q,q,s,q,q,10.5,w?B.bs:B.cH,q,B.V,q,q,!0,q,r,q,q,q,q,q,q),u,q,q),1))
if(j)l.push(A.d(k,q,q,q,q,q,q,A.l(q,q,o.j(0.55),q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q))
o=A.a([A.A(l,B.m,q,B.e,B.i,0,q,q),B.cU,n],m)
if(p.z)o.push(new A.D(B.up,n,q))
return new A.D(B.d3,A.x(o,B.m,q,B.e,B.Q,0,B.p),q)}}
C.TT.prototype={
S(){return new C.bgj()}}
C.bgj.prototype={
gc1R(){var w=this.d
return w===$?this.d=this.a.c:w},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.aH(d,n,x.w).w,l=x.p,k=A.a([D.er0,D.er6],l)
for(w=0;w<8;++w){v=D.a4y[w]
u=o.d
if(u===$){u=o.d=o.a.c
t=u}else t=u
s=v.a
r=u===s?B.HL:B.zg
q=t===s
r=A.X(r,q?B.eK:B.bW,n,n,n,17)
q=q?B.c:B.ab
r=A.a([r,B.bm,A.d(v.b,n,n,n,n,n,n,new A.G(!0,q,n,n,n,n,13.5,B.u,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n),B.ae,new A.bz(1,B.bc,A.d(v.c,n,1,B.a2,n,n,n,B.AI,n,n,n),n)],l)
u=o.d
if((u===$?o.d=o.a.c:u)===s){s=new A.aO(24,24)
p=new A.ay(B.eK,2,B.r,-1)
s=new A.p(n,n,new A.bH(p,p,p,p),new A.bf(s,s,s,s),n,n,B.n)}else s=n
q=o.a
k.push(A.aA(n,new A.D(B.eH,A.x(A.a([new A.D(B.mX,new A.c7(B.aL,B.e,B.i,B.m,n,B.p,n,0,r,n),n),A.q(n,new A.dx(!0,new C.alL(v,q.d,q.e,new C.dfp(),n,n),n),B.f,n,n,s,n,n,n,n,n,n,n,n)],l),B.E,n,B.e,B.i,0,B.p),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dfq(o,v),n,n,n,n,n,n,!1,B.a4))}k.push(new A.D(D.bC0,A.bI(D.h_T,n,new C.dfr(o,d),A.bp(B.b8,n,n,n,n,B.oS,n,n,new A.b9(A.m(16),B.a1),n,n,n)),n))
return A.bn(!0,new A.cR(new A.aY(0,1/0,0,m.a.b*0.9),A.cl(k,n,n,D.bGo,n,n,B.ah,!0),n),!0,!1,B.ag,!0,!0)}}
C.nv.prototype={
aj(){var w=this
return A.H(["id",w.a,"title",w.b,"body",w.c,"updatedAt",w.d.aa().ag()],x.N,x.z)},
bff(d,e,f){return new C.nv(this.a,e,d,f)}}
C.Io.prototype={
wV(d,e,f,g,h,i,j,k,a0,a1,a2,a3){var w=this,v=k==null?w.a:k,u=a2==null?w.b:a2,t=a0==null?w.c:a0,s=e==null?w.d:e,r=f==null?w.e:f,q=a3==null?w.f:a3,p=i==null?w.r:i,o=g==null?w.w:g,n=a1==null?w.x:a1,m=d==null?w.y:d,l=j==null?w.z:j
return new C.Io(v,u,t,s,r,q,p,o,n,m,l,h==null?w.Q:h)},
aFL(d){var w=null
return this.wV(w,w,w,w,w,d,w,w,w,w,w,w)},
cNk(d){var w=null
return this.wV(w,w,w,w,d,w,w,w,w,w,w,w)},
bfd(d,e,f){var w=null
return this.wV(d,w,w,w,w,w,w,w,e,w,f,w)},
cNZ(d){var w=null
return this.wV(w,w,w,w,w,w,d,w,w,w,w,w)},
cO7(d){var w=null
return this.wV(w,w,w,w,w,w,w,w,w,d,w,w)},
cNi(d){var w=null
return this.wV(w,w,w,d,w,w,w,w,w,w,w,w)},
cO9(d){var w=null
return this.wV(w,w,w,w,w,w,w,w,w,w,w,d)},
cNf(d){var w=null
return this.wV(w,w,d,w,w,w,w,w,w,w,w,w)},
cNa(d){var w=null
return this.wV(w,d,w,w,w,w,w,w,w,w,w,w)},
Gb(d){var w=null
return this.wV(w,w,w,w,w,w,w,d,w,w,w,w)},
cOh(d,e,f,g,h,i,j,k,l,m,n){return this.wV(d,e,f,g,null,h,i,j,k,l,m,n)},
aj(){var w=this
return A.H(["style",w.a,"title",w.b,"subtitle",w.c,"emblem",w.d,"foil",w.e,"titleSize",w.f,"position",w.r,"frame",w.w,"texture",w.x,"author",w.y,"ribbon",w.z,"header",w.Q],x.N,x.z)},
cKP(d,e,f){var w,v,u,t,s,r,q,p,o=null,n="title",m="subtitle",l=new C.bR0(d),k=A.aI(d.h(0,"emblem")),j=k==null?o:B.j.M(k),i=A.aI(d.h(0,"titleSize"))
if(i==null)i=o
k=l.$2("style",f)
w=typeof d.h(0,n)=="string"&&B.a.i(A.cO(d.h(0,n))).length!==0?B.a.i(A.cO(d.h(0,n))):o
v=typeof d.h(0,m)=="string"?B.a.i(A.cO(d.h(0,m))):o
u=j!=null&&j>=0&&j<e?j:o
t=l.$2("foil",D.DG.geu(D.DG))
s=i==null?o:B.j.E(i,18,36)
r=l.$2("position",D.a6f)
q=l.$2("frame",D.a5A)
l=l.$2("texture",D.a5w)
p=typeof d.h(0,"author")=="string"?B.a.i(A.cO(d.h(0,"author"))):o
return this.cOh(p,u,t,q,r,A.rb(d.h(0,"ribbon"))?A.GT(d.h(0,"ribbon")):o,k,v,l,w,s)}}
C.a_r.prototype={
S(){return new C.aBo(A.a([],x.I),D.Ox)},
ge3(){return this.c}}
C.aBo.prototype={
Y(){var w,v=this
v.a2()
v.f=A.Ae(0,1)
w=$.aw()
v.z=new A.au(B.av,w)
v.Q=new A.au(B.av,w)
v.lg()
w=v.a
C.bDW(w.c,w.d).bG(new C.dg5(v),x.fL)},
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
return A.b(C.LD(s.c,s.d),$async$lg)
case 3:r=e
if(t.c==null){w=1
break}t.m(new C.dfU(t,r))
t.axu()
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
gau3(){var w,v=this
if(!J.cr(v.d)){w=v.r
w=w<0||w>=J.ad(v.d)}else w=!0
return w?null:J.t(v.d,v.r)},
axu(){var w,v,u=this.gau3(),t=this.z
t===$&&A.c()
w=u==null
v=w?null:u.b
t.sb1(0,v==null?"":v)
t=this.Q
t===$&&A.c()
w=w?null:u.c
t.sb1(0,w==null?"":w)},
cg2(d){this.m(new C.dfR(this,d))
this.axu()},
NV(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$NV=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=new C.nv(B.o.u(1000*Date.now()),"Untitled page","",new A.V(Date.now(),0,!1))
r=t.a
w=3
return A.b(C.aSj(r.c,r.d,s),$async$NV)
case 3:w=4
return A.b(t.lg(),$async$NV)
case 4:if(t.c==null||J.cr(t.d)){w=1
break}q=J.qC(t.d,new C.dfs(s))
p=q>=0?q:J.ad(t.d)-1
t.m(new C.dft(t,p))
t.axu()
r=t.f
r===$&&A.c()
w=r.f.length!==0?5:6
break
case 5:w=7
return A.b(r.BG(p+1,B.cw,B.kR),$async$NV)
case 7:case 6:case 1:return A.h(u,v)}})
return A.i($async$NV,v)},
Bm(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Bm=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.f){w=1
break}s=t.z
s===$&&A.c()
r=B.a.i(s.a.a)
s=t.Q
s===$&&A.c()
q=B.a.i(s.a.a)
if(r.length===0){w=1
break}s=t.gau3()
s=s==null?null:s.a
if(s==null)s=B.o.u(1000*Date.now())
p=Date.now()
o=t.a
w=3
return A.b(C.aSj(o.c,o.d,new C.nv(s,r,q,new A.V(p,0,!1))),$async$Bm)
case 3:w=4
return A.b(t.lg(),$async$Bm)
case 4:if(t.c==null){w=1
break}t.m(new C.dfV(t))
case 1:return A.h(u,v)}})
return A.i($async$Bm,v)},
OB(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OB=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.gau3()
if(!t.a.f||r==null){w=1
break}s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dfB(r),s,null,!0,!0,x.y),$async$OB)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.a
w=4
return A.b(C.bDH(s.c,s.d,r.a),$async$OB)
case 4:t.m(new C.dfC(t))
w=5
return A.b(t.lg(),$async$OB)
case 5:if(t.c!=null){s=t.f
s===$&&A.c()
s=s.f.length!==0}else s=!1
if(s){s=t.f
s===$&&A.c()
s.UB(B.o.E(t.r+1,0,J.ad(t.d)))}case 1:return A.h(u,v)}})
return A.i($async$OB,v)},
z1(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$z1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bm(),$async$z1)
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
return A.b(C.RV(s,r.r,o,p,q),$async$z1)
case 8:if(e&&t.c!=null){s=t.c
s.toString
A.a6(s,!1).O(!0)}w=1
break
case 7:s=t.c
s.toString
r=t.a
w=9
return A.b(C.hDY(s,r.x,r.r),$async$z1)
case 9:n=e
if(n==null||t.c==null){w=1
break}m=1000*Date.now()
s=t.a
w=10
return A.b(C.LD(s.c,s.d),$async$z1)
case 10:l=e
for(s=n.d,r=J.cC(l),k=0;k<s.length;++k){j=s[k]
q=B.a.i(j.a)
if(q.length===0)q="Page "+(k+1)
r.J(l,new C.nv(""+(m+k),q,B.a.i(j.b),new A.V(Date.now(),0,!1)))}r=t.a
w=11
return A.b(C.Bw(r.c,r.d,l),$async$z1)
case 11:w=12
return A.b(t.lg(),$async$z1)
case 12:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("The AI wrote your book: "+s.length+" pages.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$z1,v)},
a1n(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1n=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bm(),$async$a1n)
case 5:case 4:if(t.c==null){w=1
break}s=t.gz_(0)
r=B.a.i(t.y.c)
if(r.length===0)r="Family Book"
q=B.d.dP(D.zJ,new C.dfS(t),new C.dfT())
p=A.a([],x.fD)
o=t.a.w
if(B.a.i(o).length!==0)p.push(new H.mO("Our Family",o,"",""))
for(o=J.aU(t.d);o.C();){n=o.gR(o)
p.push(new H.mO(n.b,n.c,"",""))}o=t.c
o.toString
w=6
return A.b(H.hgd(o,new H.rK(s,r,"",p,new H.v1(q.d,null,null,null,null,"","","")),null),$async$a1n)
case 6:case 1:return A.h(u,v)}})
return A.i($async$a1n,v)},
Oj(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$Oj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bm(),$async$Oj)
case 5:case 4:s=t.c
if(s==null){w=1
break}w=6
return A.b(A.bT(D.agh,null,new C.dfx(t),s,!0,!0,!0,I.a9m,!1,!1,x.N),$async$Oj)
case 6:r=e
if(r==null||t.c==null){w=1
break}q=t.y.cNk(r)
t.m(new C.dfy(t,q))
s=t.a
w=7
return A.b(C.Sw(s.c,s.d,q),$async$Oj)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Oj,v)},
XP(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$XP=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(D.agh,null,new C.dfD(t),r,!0,!0,!0,I.a9m,!1,!1,x.e),$async$XP)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.dfE(t,s))
r=t.a
w=4
return A.b(C.Sw(r.c,r.d,s),$async$XP)
case 4:r=t.f
r===$&&A.c()
if(r.f.length!==0)r.BG(0,B.dH,B.mT)
case 1:return A.h(u,v)}})
return A.i($async$XP,v)},
bU1(d){var w=d.bT(),v=B.a.b_(B.o.u(w.gcg()),2,"0"),u=B.a.b_(B.o.u(w.gcw()),2,"0")
return""+w.gcl()+"-"+v+"-"+u},
gz_(d){var w=B.a.i(this.y.b)
if(!(w.length!==0)){w=B.a.i(this.a.r)
if(w.length===0)w="Our Family Book"}return w},
B(d){var w,v,u,t,s,r=this,q=null,p=r.c14()
if(r.e)w=D.af_
else if(J.cr(r.d)){w=r.y
v=r.gz_(0)
u=r.a.f
t=A.d(u?"Your book is waiting for its first page":"No pages yet",q,q,q,q,q,q,D.fov,q,q,q)
u=u?"Add pages and turn them like a real book: stories, memories and notes about your family.":"The tree owner has not written any pages on this device."
s=x.p
u=A.a([new A.a5(q,330,new A.D(X.amy,new C.ZJ(w,v,0,q),q),q),B.bz,t,B.an,A.d(u,q,q,q,q,q,q,A.l(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,q,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s)
if(r.a.f){w=A.a([B.bz],s)
if(B.a.i(r.a.x).length!==0)w.push(A.aA(q,A.q(q,D.f7I,B.f,q,q,new A.p(q,q,q,A.m(18),A.a([new A.ac(0,B.G,B.dK.j(0.45),B.I,18)],x.V),E.wQ,B.n),q,q,q,q,B.Oc,q,q,q),B.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gcJQ(),q,q,q,q,q,q,!1,B.a4))
w.push(B.X)
w.push(A.ho(D.bTD,D.h_k,r.gaOK(),q))
B.d.v(u,w)}w=A.at(A.cg(A.x(u,B.m,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.ex,q,q,B.ah),q,q,q)}else{w=r.r
w=w<0?"Tap the cover to open the book":"Page "+(w+1)+" of "+J.ad(r.d)
w=A.d(w,q,q,q,q,q,q,A.l(q,q,D.kM.j(0.8),q,q,q,q,q,q,q,q,12,q,q,B.V,q,q,!0,q,0.4,q,q,q,q,q,q),q,q,q)
v=r.f
v===$&&A.c()
u=r.w?B.dV:B.Bj
u=A.x(A.a([new A.D(D.bD5,w,q),A.E(A.JN(v,new C.dg3(r),J.ad(r.d)+1,q,r.gcg1(),u,B.aL),1),r.bGr()],x.p),B.m,q,B.e,B.i,0,B.p)
w=u}v=x.p
return A.c4(q,D.Z0,new A.an(B.a0,q,B.b2,B.t,A.a([D.aPQ,A.bn(!0,A.x(A.a([p,A.E(w,1)],v),B.m,q,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],v),q),q,!1,!1,q,q)},
c14(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.a
if(f.f)w=B.a.i(f.x).length!==0||J.cI(h.d)
else w=!1
f=A.a([],x.fp)
if(w)f.push(new C.KL(B.ea,"AI",h.gbEj(),!0))
if(h.a.f)f.push(new C.KL(B.mh,"Cover",h.gbOY(),!1))
if(h.a.f)f.push(new C.KL(B.wK,"Header",h.gbJY(),!1))
if(J.cI(h.d)||B.a.i(h.a.w).length!==0)f.push(new C.KL(B.uP,"Print",h.gcp9(),!1))
if(h.a.f&&J.cI(h.d)&&h.r>=0){v=h.w
u=v?B.hG:B.j2
t=v?"Save":"Edit"
f.push(new C.KL(u,t,v?h.gcvs():new C.dfO(h),!1))}if(h.a.f)f.push(new C.KL(B.hV,"Add page",h.gaOK(),!1))
v=C.hzQ(h.y.Q)
u=h.gz_(0)
t=B.a.i(h.y.c)
if(t.length===0)t="Family Book"
s=J.ad(h.d)
r=J.ad(h.d)===1?"page":"pages"
q=x.p
p=A.a([],q)
for(o=f.length,n=x.O,m=0;m<f.length;f.length===o||(0,A.J)(f),++m){l=f[m]
if(l.d)k=D.dFO
else{k=new A.aO(10,10)
j=A.a([B.c.j(0.14),B.c.j(0.05)],n)
i=new A.ay(E.km.j(0.5),1,B.r,-1)
j=A.q(g,A.X(l.a,D.kM,g,g,g,17),B.f,g,g,new A.p(g,g,new A.bH(i,i,i,i),new A.bf(k,k,k,k),g,new A.a9(B.a6,B.aa,B.x,j,g,g),B.n),g,32,g,g,g,g,g,32)
k=j}j=D.kM.j(0.85)
p.push(new A.bz(1,B.bc,A.aA(B.c5,A.x(A.a([k,B.bG,A.d(l.b,g,1,g,g,g,g,new A.G(!0,j,g,g,g,g,9.5,B.H,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g)],q),B.m,g,B.e,B.Q,0,B.p),B.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,l.c,g,g,g,g,g,g,!1,B.a4),g))}return new C.alL(v,u,t+" \xb7 "+s+" "+r,new C.dfP(h),A.A(p,B.m,g,B.e,B.i,0,g,g),g)},
Al(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Al=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=t.w?3:4
break
case 3:w=5
return A.b(t.Bm(),$async$Al)
case 5:case 4:if(t.c==null){w=1
break}s=A.a([],x.s)
for(r=J.aU(t.d);r.C();){q=r.gR(r)
s.push(q.b+" "+q.c)}p=H.a3j(B.d.aN(s," "))
s=t.c
s.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.dfu(t,p),s,null,!0,!0,x.N),$async$Al)
case 6:o=e
if(o==null||t.c==null){w=1
break}w=o==="write"?7:9
break
case 7:w=10
return A.b(t.z1(),$async$Al)
case 10:w=8
break
case 9:w=o==="fix"?11:13
break
case 11:w=14
return A.b(t.Ed(),$async$Al)
case 14:w=12
break
case 13:w=o==="polish"?15:17
break
case 15:w=18
return A.b(t.FP("Swahili (Kiswahili)",!0),$async$Al)
case 18:w=16
break
case 17:w=19
return A.b(t.cGj(o==="sw"?"Swahili (Kiswahili)":"English"),$async$Al)
case 19:case 16:case 12:case 8:case 1:return A.h(u,v)}})
return A.i($async$Al,v)},
ZK(d,e,f,g,h){var w=null,v=A.m(16),u=B.c.j(0.07),t=A.m(16),s=A.L(E.km.j(0.3),B.r,1),r=x.p
return new A.D(B.cx,A.aP(!1,v,!0,A.q(w,A.A(A.a([A.q(w,A.X(e,B.c,w,w,w,21),B.f,w,w,new A.p(w,w,w,w,w,E.wQ,B.a7),w,42,w,w,w,w,w,42),B.bd,A.E(A.x(A.a([A.d(f,w,w,w,w,w,w,A2.KA,w,w,w),A.d(g,w,w,w,w,w,w,B.AJ,w,w,w)],r),B.E,w,B.e,B.i,0,B.p),1)],r),B.m,w,B.e,B.i,0,w,w),B.f,w,w,new A.p(u,w,s,t,w,w,B.n),w,w,w,w,B.bh,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.dfQ(d,h),w,w,w,w,w,w,w),w)},
Ed(){return this.bTv()},
bTv(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$Ed=A.e(function(a9,b0){if(a9===1){s.push(b0)
w=t}for(;;)switch(w){case 0:a6={}
a7=r.c
a7.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dfH(r),a7,null,!0,!0,x.ei),$async$Ed)
case 3:q=b0
if(q==null||r.c==null){w=1
break}g=A.C(r.d,x.B)
p=g
f=r.y
o=new A.eA("Working on it\u2026",$.aw())
a6.a=!0
a7=r.c
a7.toString
A.ce(null,null,!1,null,new C.dfI(o),a7,null,!0,!0,x.H).fv(new C.dfJ(a6))
n=null
m=null
t=5
a7=q.b
e=q.a
l=A.a([],x.L)
for(d=p,a0=d.length,a1=0;a1<d.length;d.length===a0||(0,A.J)(d),++a1){k=d[a1]
J.c6(l,new A.y(k.b,k.c))}d=r.r
a0=r.y.aj()
j=A.a([],x.s)
for(a1=0;a1<8;++a1){i=D.zJ[a1]
J.c6(j,i.a)}w=8
return A.b(C.ahW(a0,a7,new C.dfK(o),d,l,e,j),$async$Ed)
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
if(l!=null&&a6.a)A.a6(l,!0).eO()
l=o
l.sic($.aw())
J.aSM(l,0)
l=r.c
if(l==null){w=1
break}if(m==null){l=l.L(x.q).f
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
a7=j.bff(m.b.h(0,a4).b,a7,new A.V(Date.now(),0,!1))
j=a7}else j=J.t(p,a4)
l.push(j)}j=r.a
w=11
return A.b(C.Bw(j.c,j.d,l),$async$Ed)
case 11:w=12
return A.b(r.lg(),$async$Ed)
case 12:case 10:w=m.c!=null&&m.c.a!==0?13:14
break
case 13:l=r.y
j=m.c
j.toString
a7=A.a([],x.s)
for(a1=0;a1<8;++a1)a7.push(D.zJ[a1].a)
a5=l.cKP(j,12,a7)
l=r.a
w=15
return A.b(C.Sw(l.c,l.d,a5),$async$Ed)
case 15:if(r.c!=null)r.m(new C.dfL(r,a5))
l=r.f
l===$&&A.c()
if(l.f.length!==0&&q.a==="cover")l.BG(0,B.dH,B.mT)
a3=!0
case 14:l=r.c
if(l==null){w=1
break}l=l.L(x.q).f
j=A.d(m.a,null,null,null,null,null,null,null,null,null,null)
l.U(A.b3(a3?A.czx("Undo",new C.dfM(r,p,f),null):null,null,null,null,null,B.t,null,j,null,B.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$Ed,v)},
FP(d,e){return this.cGk(d,e)},
cGj(d){return this.FP(d,!1)},
cGk(a2,a3){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$FP=A.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:f={}
e=A.C(r.d,x.B)
d=e
a0=new A.eA("Starting\u2026",$.aw())
f.a=!0
k=r.c
k.toString
A.ce(null,null,!1,null,new C.dfX(a0),k,null,!0,!0,x.H).fv(new C.dfY(f))
q=null
p=null
t=4
o=A.a([],x.L)
for(k=d,j=k.length,i=0;i<k.length;k.length===j||(0,A.J)(k),++i){n=k[i]
J.c6(o,new A.y(n.b,n.c))}m=o
w=a3?7:9
break
case 7:w=10
return A.b(H.a3w(m,new C.dfZ(a0)),$async$FP)
case 10:w=8
break
case 9:w=11
return A.b(C.bFq(new C.dg_(a0),m,a2),$async$FP)
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
if(o!=null&&f.a)A.a6(o,!0).eO()
o=a0
o.sic($.aw())
J.aSM(o,0)
o=r.c
if(o==null){w=1
break}if(p==null){o=o.L(x.q).f
k=q
o.U(A.b3(null,null,null,null,null,B.t,null,A.d(k==null?y.y:k,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}o=A.a([],x.I)
for(g=0;g<J.ad(d);++g){k=J.t(d,g)
j=J.t(p,g)
o.push(k.bff(J.t(p,g).b,j.a,new A.V(Date.now(),0,!1)))}k=r.a
w=12
return A.b(C.Bw(k.c,k.d,o),$async$FP)
case 12:w=13
return A.b(r.lg(),$async$FP)
case 13:o=r.c
if(o==null){w=1
break}o=o.L(x.q).f
if(a3)k="I rewrote your Swahili so it reads naturally."
else k="Your book is now in "+(B.a.a0(a2,"Swahili")?"Swahili":"English")+"."
k=A.d(k,null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(A.czx("Undo",new C.dg0(r,d),null),null,null,null,null,B.t,null,k,null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$FP,v)},
bGr(){var w,v=this,u=null,t=v.r+1,s=t>0,r=s?new C.dfv(v):u
r=A.aG(u,u,u,u,A.X(D.bPk,s?D.kM:B.aV,u,u,u,30),u,u,u,r,u,u,u,u,"Previous page",u)
if(v.a.f&&J.cI(v.d)&&!v.w&&v.r>=0)s=A.ho(A.X(B.wt,B.Gk,u,u,u,16),A.d("Delete page",u,u,u,u,u,u,A.l(u,u,B.Gk,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),v.gbOy(),u)
else{s=v.w?"Writing\u2026 swiping is off while you edit":"Swipe to turn the page"
s=A.d(s,u,u,u,u,u,u,A.l(u,u,D.kM.j(0.65),u,u,u,u,u,u,u,u,11.5,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)}s=A.E(A.at(s,u,u,u),1)
w=t<J.ad(v.d)?new C.dfw(v):u
return A.bn(!0,new A.D(D.bCU,A.A(A.a([r,s,A.aG(u,u,u,u,A.X(B.eI,t<J.ad(v.d)?D.kM:B.aV,u,u,u,30),u,u,u,w,u,u,u,u,"Next page",u)],x.p),B.m,u,B.e,B.i,0,u,u),u),!0,!1,B.ag,!0,!1)}}
C.a_v.prototype={
S(){return new C.bgI(new A.au(B.av,$.aw()))}}
C.bgI.prototype={
ga2v(){var w,v=this.e
if(v===$){w=this.a
if(w.c)v="page"
else v=w.d?"book":"cover"
v=this.e=v}return v},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a3()},
gbS8(){switch(this.ga2v()){case"cover":var w=D.d7c
break
case"book":w=D.d2z
break
default:w=D.dym
break}return w},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.m(26),n=E.km.j(0.5),m=x.p,l=A.A(A.a([D.dFP,B.au,D.bIE,A.aG(p,p,p,p,B.lo,p,p,p,new C.dhS(d),p,p,p,p,p,p)],m),B.m,p,B.e,B.i,0,p,p),k=A.a([],m),j=q.a
if(j.c)k.push(A.jv(p,p,p,A.d("This page ("+j.e+")",p,p,p,p,p,p,p,p,p,p),p,new C.dhT(q),q.ga2v()==="page",p,p,p,p))
if(q.a.d)k.push(A.jv(p,p,p,D.fUS,p,new C.dhU(q),q.ga2v()==="book",p,p,p,p))
k.push(A.jv(p,p,p,D.fHB,p,new C.dhV(q),q.ga2v()==="cover",p,p,p,p))
k=A.bW(B.bH,k,B.bt,p,6,8)
j=B.c.j(0.07)
j=A.aM(p,B.Z,!1,p,!0,B.t,p,A.aN(),q.d,p,p,p,p,p,2,A.bt(p,new A.b6(4,A.m(16),B.a1),p,p,p,p,p,p,!0,p,p,p,p,p,p,j,!0,p,p,p,p,p,p,p,p,p,p,p,p,p,B.kD,"Say it in your own words\u2026",p,p,p,p,p,p,p,p,p,!0,!0,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,6,3,p,!1,"\u2022",p,p,p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.di,!0,B.a5,p,B.ao,p,p,p,p)
w=A.a([],m)
for(v=q.gbS8(),u=v.length,t=0;t<u;++t){s=v[t]
r=A.d(s,p,p,p,p,p,p,B.Kx,p,p,p)
w.push(A.n1(p,B.c.j(0.08),r,B.hg,new C.dhW(q,s),p,p,p,p))}return A.eN(p,E.BO,A.cg(A.x(A.a([l,B.X,D.fYb,B.an,k,B.af,j,B.U,A.bW(B.bH,w,B.bt,p,6,6),B.aB,A.dh(D.bTA,D.fYZ,new C.dhX(q,d),A.bp(B.b8,p,p,p,p,B.oS,p,p,new A.b9(A.m(16),B.a1),p,p,p)),B.ax,D.fT6],m),B.E,p,B.e,B.Q,0,B.p),B.t,p,B.y,p,B.fr,p,p,B.ah),p,p,p,I.a0l,B.d7,p,new A.b9(o,new A.ay(n,1.4,B.r,-1)),p)}}
C.a_t.prototype={
S(){return new C.aBr(A.a([],x.gA))},
ge3(){return this.c}}
C.afE.prototype={}
C.aBr.prototype={
Y(){this.a2()
this.lg()},
lg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i
var $async$lg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
w=3
return A.b(C.S_(p.c,p.d),$async$lg)
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
return A.b(C.bDW(r.c,q),$async$lg)
case 6:j=e
i=J
w=7
return A.b(C.LD(t.a.c,q),$async$lg)
case 7:m.push(new l.afE(k,j,i.ad(e)))
w=4
break
case 5:if(t.c==null){w=1
break}t.m(new C.dgk(t,n))
case 1:return A.h(u,v)}})
return A.i($async$lg,v)},
baw(d){var w=B.a.i(d.b.b)
if(!(w.length!==0)){w=B.a.i(this.a.f)
if(w.length===0)w="Our Family Book"}return w},
QN(d,e){return this.chA(0,e)},
chA(d,e){var w=0,v=A.j(x.H),u=this,t,s
var $async$QN=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.a6(s,!1).cd(A.eb(new C.dgj(u,e),!0,null,x.y)),$async$QN)
case 2:t=g
w=3
return A.b(u.lg(),$async$QN)
case 3:if(t===!0&&u.c!=null)u.c.L(x.q).f.U(D.aTE)
return A.h(null,v)}})
return A.i($async$QN,v)},
FR(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$FR=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(t.d.length>=6){t.c.L(x.q).f.U(D.aTA)
w=1
break}s=t.a
r=s.w
w=B.a.i(r).length===0?3:4
break
case 3:w=5
return A.b(C.ahe(s.c,s.d),$async$FR)
case 5:q=e
w=6
return A.b(t.lg(),$async$FR)
case 6:w=q!=null&&t.c!=null?7:8
break
case 7:w=9
return A.b(t.QN(0,B.d.fe(t.d,new C.dgo(q))),$async$FR)
case 9:case 8:w=1
break
case 4:p=t.c
p.toString
o=s.c
n=s.d
w=10
return A.b(C.RV(p,s.f,r,n,o),$async$FR)
case 10:m=e
w=11
return A.b(t.lg(),$async$FR)
case 11:if(m&&t.c!=null)t.c.L(x.q).f.U(D.aTE)
case 1:return A.h(u,v)}})
return A.i($async$FR,v)},
Qe(d,e){return this.ct9(0,e)},
ct9(d,e){var w=0,v=A.j(x.H),u,t=this,s
var $async$Qe=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dgn(t,e),s,null,!0,!0,x.y),$async$Qe)
case 3:if(g!==!0){w=1
break}s=t.a
w=4
return A.b(C.a3J(s.c,s.d,e.a),$async$Qe)
case 4:w=5
return A.b(t.lg(),$async$Qe)
case 5:case 1:return A.h(u,v)}})
return A.i($async$Qe,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.e&&o.d.length<6,l=x.p,k=A.a([],l)
for(w=o.d,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)k.push(o.bGu(w[u]))
if(m){t=6-o.d.length
w=A.m(18)
v=B.c.j(0.05)
s=A.L(E.km.j(0.6),B.r,1.6)
r=t===1?"space":"spaces"
k.push(A.aA(n,new A.fF(0.7142857142857143,A.q(n,A.x(A.a([D.dFQ,B.af,D.eq2,B.ax,A.d(""+t+" "+r+" left",n,n,n,n,n,n,A.l(n,n,D.kM.j(0.65),n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],l),B.m,n,B.ba,B.i,0,B.p),B.f,n,n,new A.p(v,n,s,w,n,n,B.n),n,n,n,n,n,n,n,n),n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcJM(),n,n,n,n,n,n,!1,B.a4))}w=A.m(22)
v=A.L(E.km.j(0.85),B.r,1.6)
s=A.aA(n,A.q(n,D.c0s,B.f,n,n,new A.p(B.w.j(0.3),n,A.L(E.km.j(0.6),B.r,1),n,n,n,B.a7),n,32,n,n,n,n,n,32),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dgp(d),n,n,n,n,n,n,!1,B.a4)
r=A.m(14)
q=B.w.j(0.3)
p=A.L(E.km.j(0.5),B.r,1)
w=A.q(n,A.A(A.a([s,B.bd,D.bJ1,A.q(n,A.d(""+o.d.length+" of 6",n,n,n,n,n,n,D.fnu,n,n,n),B.f,n,n,new A.p(q,n,p,r,n,n,B.n),n,n,n,n,B.h9,n,n,n)],l),B.m,n,B.e,B.i,0,n,n),B.f,n,n,new A.p(n,n,v,w,n,D.c6m,B.n),n,n,n,Ay.NW,D.bAT,n,n,n)
if(o.e)k=D.af_
else k=k.length===0?D.bbQ:A.cs(new C.dgq(k))
return A.c4(n,D.Z0,new A.an(B.a0,n,B.b2,B.t,A.a([D.aPQ,A.bn(!0,A.x(A.a([w,A.E(k,1)],l),B.m,n,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],l),n),n,!1,!1,n,n)},
bGu(d){var w,v,u=this,t=null,s=u.baw(d),r=d.c,q=x.p,p=A.a([A.bR(0,A.ev(B.A,new A.a5(300,420,new C.ZJ(d.b,s,r,t),t),B.f,B.dB),0,0,0)],q)
if(u.a.e)p.push(A.ap(t,A.aA(t,A.q(t,D.c_M,B.f,t,t,new A.p(B.w.j(0.55),t,A.L(B.aV,B.r,1),t,t,t,B.a7),t,28,t,t,t,t,t,28),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgh(u,d),t,t,t,t,t,t,!1,B.a4),t,t,t,6,6,t))
w=A.d(s,t,1,B.a2,t,t,t,D.fn4,t,t,t)
v=r===1?"page":"pages"
return A.aA(t,A.x(A.a([new A.fF(0.7142857142857143,new A.an(B.a0,t,B.ad,B.t,p,t),t),B.U,w,A.d(""+r+" "+v,t,t,t,t,t,t,A.l(t,t,D.kM.j(0.6),t,t,t,t,t,t,t,t,11,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],q),B.m,t,B.e,B.i,0,B.p),B.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.dgi(u,d),t,t,t,t,t,t,!1,B.a4)}}
C.KL.prototype={}
C.ZJ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=B.d.dP(D.zJ,new C.cOJ(m),new C.cOK()),j=m.c,i=D.DG.h(0,j.e),h=A.b0(i==null?4293444714:i)
i=j.r
if(i==="top")w=B.e
else w=i==="bottom"?B.mp:B.ba
v=new C.cOL(h)
i=A.a([new A.ac(0,B.G,B.w.j(0.6),D.emJ,28)],x.V)
u=x.p
t=A.a([A.bR(0,A.b4(l,l,l,new C.bdV(j.x,h,l),B.az),0,0,0),A.ap(0,A.q(l,l,B.f,l,l,new A.p(l,l,l,l,l,new A.a9(B.a6,B.aa,B.x,A.a([B.w.j(0.45),B.L],x.O),l,l),B.n),l,l,l,l,l,l,l,l),l,l,0,l,0,26)],u)
for(s=0;s<6;++s){r=new A.aO(3,3)
t.push(new A.cL(8,40+s*46,l,l,l,l,A.q(l,l,B.f,l,l,new A.p(h.j(0.7),l,l,new A.bf(r,r,r,r),l,l,B.n),l,22,l,l,l,l,l,6),l))}r=j.w
if(r==="double")B.d.v(t,A.a([v.$4(D.amz,8,0.85,2.2),v.$4(D.bFP,5,0.45,1)],u))
else if(r==="single")t.push(v.$4(D.amz,8,0.85,2.4))
else if(r==="corners")t.push(A.bR(0,new A.D(D.bFL,A.b4(l,l,l,new C.bdM(h,l),B.az),l),0,0,0))
r=A.X(D.aBm[B.o.E(j.d,0,11)],h.j(0.95),l,l,l,44)
q=A.d(m.d,l,4,B.a2,l,l,l,A.l(l,l,h,l,l,l,l,l,l,l,l,j.f,l,l,B.u,l,1.2,!0,l,0.5,l,l,l,D.ayA,l,l),B.K,l,l)
p=A.q(l,l,B.f,h.j(0.7),l,l,l,2,l,l,l,l,l,90)
o=B.a.i(j.c)
if(!(o.length!==0)){o=m.e
if(o===0)o="A family story"
else{n=o===1?"page":"pages"
n=""+o+" "+n+" of our story"
o=n}}o=A.a([r,B.aB,q,B.af,p,B.af,A.d(o,l,l,l,l,l,l,A.l(l,l,h.j(0.85),l,l,l,l,l,l,l,l,14,B.cH,l,l,l,l,!0,l,l,l,l,l,l,l,l),B.K,l,l)],u)
r=B.a.i(j.y)
if(r.length!==0)B.d.v(o,A.a([B.aR,A.d(r,l,2,B.a2,l,l,l,A.l(l,l,h.j(0.9),l,l,l,l,l,l,l,l,13,l,l,B.H,l,l,!0,l,1.2,l,l,l,l,l,l),B.K,l,l)],u))
t.push(A.bR(0,new A.D(D.bGf,A.x(o,B.m,l,w,B.i,0,B.p),l),0,0,0))
if(j.z)t.push(A.ap(l,A.b4(l,l,l,new C.aIp(l),D.fcB),l,l,l,46,0,l))
return A.q(l,A.by(D.adD,new A.an(B.a0,l,B.ad,B.t,t,l),B.aq),B.f,l,l,new A.p(l,l,l,D.adD,i,new A.a9(B.aA,B.aF,B.x,k.c,l,l),B.n),l,l,l,l,l,l,l,l)}}
C.bdV.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new A.e4()
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
l=new A.ao(B.O,B.M,B.R,B.T,B.P)
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
m=new A.bu()
l.push(m)
l=j.f
if(l!=null)m.ak(l)
j.ab()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
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
aE(d){return d.b!==this.b||!d.c.A(0,this.c)}}
C.bdM.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=$.Q(),j=A.K(),i=this.b
j.r=i.j(0.9).gp(0)
j.b=B.a9
j.c=2.4
j.d=B.bw
for(w=e.a,v=e.b,v=[D.f2c,new A.cu([w,0,-1,1]),new A.cu([0,v,1,-1]),new A.cu([w,v,-1,-1])],w=v.length,u=x.v,k=k.r,t=0;t<w;++t){s=v[t].a
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
s=new A.ao(B.O,B.M,B.R,B.T,B.P)
s.r=i.j(0.9).gp(0)
d.N(new A.o(r+p*9,q+o*9),3,s)}},
aE(d){return!d.b.A(0,this.b)}}
C.uN.prototype={}
C.a_1.prototype={
S(){return new C.bdT()}}
C.bdT.prototype={
goo(){var w=this.d
return w===$?this.d=this.a.c:w},
gz_(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new A.au(new A.ba(w.b,B.b6,B.aP),$.aw())}return v},
gaCX(){var w,v=this.f
if(v===$){w=this.a.c
v=this.f=new A.au(new A.ba(w.c,B.b6,B.aP),$.aw())}return v},
gasB(){var w,v=this.r
if(v===$){w=this.a.c
v=this.r=new A.au(new A.ba(w.y,B.b6,B.aP),$.aw())}return v},
t(){var w=this,v=w.gz_(0),u=v.T$=$.aw()
v.P$=0
v=w.gaCX()
v.T$=u
v.P$=0
v=w.gasB()
v.T$=u
v.P$=0
w.a3()},
ate(d,e,f,g){var w,v,u,t,s=null,r=A.a([],x.p)
for(w=d.length,v=0;v<w;++v){u=d[v]
t=g.h(0,u)
r.push(A.jv(s,s,s,A.d(t==null?u:t,s,s,s,s,s,s,s,s,s,s),s,new C.d7h(this,f,u),e===u,s,s,s,s))}return A.bW(B.bH,r,B.bt,s,6,8)},
ayX(d){var w=null,v=B.c.j(0.07)
return A.bt(w,new A.b6(4,A.m(14),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.mA,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null,d=f.goo(),a0=f.gz_(0),a1=a0.a.a,a2=f.gaCX(),a3=a2.a.a,a4=f.gasB(),a5=d.bfd(a4.a.a,a3,a1)
a1=x.w
a3=A.aH(a6,e,a1).w
a1=A.aH(a6,e,a1).w
d=B.a.i(a5.b)
if(d.length===0)d=f.a.d
d=A.at(new A.a5(190,260,A.ev(B.A,new A.a5(270,370,new C.ZJ(a5,d,f.a.e,e),e),B.f,B.dB),e),e,e,e)
a0=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aN(),a0,e,e,e,e,e,2,f.ayX("Title on the cover"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7G(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.ao,e,e,e,e)
a2=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aN(),a2,e,e,e,e,e,2,f.ayX("Small line under it (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7H(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.ao,e,e,e,e)
w=x.p
v=A.a([],w)
for(u=0;u<8;++u){t=D.zJ[u]
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
q=t.a
p=s.a===q?B.c:B.aV
q=r.a===q
o=new A.ay(p,q?3:1,B.r,-1)
p=A.q(e,e,B.f,e,e,new A.p(e,e,new A.bH(o,o,o,o),e,e,new A.a9(B.aA,B.aF,B.x,t.c,e,e),B.a7),e,46,e,e,e,e,e,46)
q=q?B.c:B.aD
v.push(A.aA(e,A.x(A.a([p,B.cU,A.d(t.b,e,e,e,e,e,e,new A.G(!0,q,e,e,e,e,10.5,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7I(f,t),e,e,e,e,e,e,!1,B.a4))}v=A.bW(B.bH,v,B.bt,e,10,10)
q=A.a([],w)
for(n=0;n<12;++n){s=f.d
p=(s===$?f.d=f.a.c:s).d===n?B.b8.j(0.35):B.c.j(0.07)
m=new A.aO(14,14)
s=f.d
o=new A.ay((s===$?f.d=f.a.c:s).d===n?B.eK:B.L,2,B.r,-1)
q.push(A.aA(e,A.q(e,A.X(D.aBm[n],B.c,e,e,e,24),B.f,e,e,new A.p(p,e,new A.bH(o,o,o,o),new A.bf(m,m,m,m),e,e,B.n),e,46,e,e,e,e,e,46),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7J(f,n),e,e,e,e,e,e,!1,B.a4))}q=A.bW(B.bH,q,B.bt,e,8,8)
a4=A.aM(e,B.Z,!1,e,!0,B.t,e,A.aN(),a4,e,e,e,e,e,2,f.ayX("Author or family name line (optional)"),B.y,!0,e,!0,e,!1,e,B.ak,e,e,e,e,e,e,e,e,e,1,e,e,!1,"\u2022",e,new C.d7K(f),e,e,e,!1,e,e,!1,e,!0,e,B.ac,e,e,e,e,e,e,e,e,e,e,e,B.di,!0,B.a5,e,B.ao,e,e,e,e)
p=A.d("LETTERING COLOUR",e,e,e,e,e,e,M.vA,e,e,e)
m=A.a([],w)
for(l=D.DG.gdO(D.DG),l=l.gae(l);l.C();){k=l.gR(l)
j=A.b0(k.b)
s=f.d
if(s===$){s=f.d=f.a.c
r=s}else r=s
i=k.a
h=s.e===i?B.eK:B.aV
g=r.e===i
o=new A.ay(h,g?3:1,B.r,-1)
j=A.q(e,e,B.f,e,e,new A.p(j,e,new A.bH(o,o,o,o),e,e,e,B.a7),e,34,e,e,e,e,e,34)
h=g?B.c:B.aD
m.push(A.aA(e,A.x(A.a([j,B.bG,A.d(i,e,e,e,e,e,e,new A.G(!0,h,e,e,e,e,10,B.V,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e)],w),B.m,e,B.e,B.Q,0,B.p),B.y,!1,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new C.d7L(f,k),e,e,e,e,e,e,!1,B.a4))}m=A.bW(B.bH,m,B.bt,e,8,10)
l=A.d("TITLE SIZE",e,e,e,e,e,e,M.vA,e,e,e)
k=f.goo()
return new A.D(new A.R(0,0,0,a3.f.d),A.bn(!0,new A.cR(new A.aY(0,1/0,0,a1.a.b*0.92),A.cl(A.a([D.fSy,B.af,d,B.aR,a0,B.X,a2,B.aB,D.fYL,B.U,v,B.aB,D.fSH,B.U,q,B.aB,a4,B.aB,p,B.U,m,B.aB,l,A.kV(e,9,""+B.j.V(f.goo().f),36,18,new C.d7M(f),k.f),A.d("WHERE THE WORDS SIT",e,e,e,e,e,e,M.vA,e,e,e),B.an,f.ate(D.a6f,f.goo().r,new C.d7N(f),D.dBA),B.af,A.d("BORDER",e,e,e,e,e,e,M.vA,e,e,e),B.an,f.ate(D.a5A,f.goo().w,new C.d7O(f),D.dBG),B.af,A.d("COVER MATERIAL",e,e,e,e,e,e,M.vA,e,e,e),B.an,f.ate(D.a5w,f.goo().x,new C.d7Q(f),D.dDb),B.an,A.iQ(e,B.b8,e,B.ag,e,new C.d7R(f),e,e,e,D.fMI,f.goo().z),B.bz,A.bI(D.fRd,e,new C.d7S(f,a6),A.bp(B.b8,e,e,e,e,B.oS,e,e,new A.b9(A.m(16),B.a1),e,e,e))],w),e,e,A_.am6,e,e,B.ah,!0),e),!0,!1,B.ag,!0,!0),e)}}
C.aIp.prototype={
a4(d,e){var w,v,u,t=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
t.D(new A.aZ(0,0))
w=e.a
t.D(new A.aq(w,0))
v=e.b
t.D(new A.aq(w,v))
t.D(new A.aq(w/2,v-12))
t.D(new A.aq(0,v))
t.D(new A.bu())
u=A.K()
u.sav(D.c71.aK(0,new A.a1(0,0,0+w,0+v)))
d.af(t,u)},
aE(d){return!1}}
C.bjf.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a5.a,a1=a5.b,a2=0+a0,a3=0+a1
$.Q()
w=A.K()
w.sav(D.c62.aK(0,new A.a1(0,0,a2,a3)))
a4.ar(new A.a1(0,0,a2,a3),w)
v=B.j.cL(a1/112)
u=new A.e4()
u.d_(4)
for(w=x.O,t=a4.c,s=0;s<v;){++s
r=s*112
for(q=r-14,p=q+2,o=-r,n=6;n<a0;){m=14+u.ai()*20
l=56+u.ai()*40
k=D.d7b[u.aw(9)]
j=u.aw(14)
J.bo(t.save())
if(j===0){j=n+m
t.translate(j,r)
t.rotate(-10.313240312354818,0,0)
t.translate(-j,o)}j=r-l
i=new A.a1(n,j,n+m,j+l)
h=A.bl(i,B.hx)
g=new A.ao(B.O,B.M,B.R,B.T,B.P)
f=A.ar(k,B.c,0.12)
f.toString
e=A.ar(k,B.w,0.45)
e.toString
g.sav(new A.a9(B.a6,B.aa,B.x,A.a([f,k,e],w),d,d).aK(0,i))
a4.am(h,g)
g=n+2
j+=10
h=g+(m-4)
e=new A.ao(B.O,B.M,B.R,B.T,B.P)
e.r=E.km.j(0.55).gp(0)
a4.ar(new A.a1(g,j,h,j+2),e)
e=new A.ao(B.O,B.M,B.R,B.T,B.P)
e.r=E.km.j(0.4).gp(0)
a4.ar(new A.a1(g,q,h,p),e)
t.restore()
j=u.aw(9)===0?18:0
n+=m+1+j}q=r+10
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.sav(D.c5q.aK(0,new A.a1(0,r,a2,q)))
a4.ar(new A.a1(0,r,a2,q),p)
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=B.w.j(0.5).gp(0)
p.y=B.kU
a4.ar(new A.a1(0,q,a2,q+14),p)}t=A.K()
t.r=D.bfD.j(0.72).gp(0)
a4.ar(new A.a1(0,0,a2,a3),t)
t=a0*0.5
a1*=0.36
a0*=0.95
a3=A.K()
a3.sav(new A.c_(B.A,0.5,B.x,d,0,A.a([D.bnQ.j(0.22),B.L],w),d,d).aK(0,A.bX(new A.o(t,a1),a0)))
a4.N(new A.o(t,a1),a0,a3)},
aE(d){return!1}}
C.bc3.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.c,m=B.a.i(n.c),l=A.ag("[ \t]{2,}",!0,!1,!1,!1),k=A.aL(m,l," ")
m=x.p
l=A.a([],m)
for(w=3;w>=1;--w){v=-w
l.push(new A.cL(14,w*2,v*2.2,v*2,o,o,new A.l5(new A.p(A.ar(D.kM,D.bsT,w/4),o,new A.bH(B.a1,new A.ay(B.w.j(0.12),1,B.r,-1),B.a1,B.a1),B.LJ,o,o,B.n),B.bi,o,o),o))}v=x.V
u=A.a([new A.ac(0,B.G,B.w.j(0.35),B.aLq,8)],v)
t=A.a([],m)
for(w=0;w<5;++w){s=new A.aO(2,2)
t.push(A.q(o,o,B.f,o,o,new A.p(E.km.j(0.6),o,o,new A.bf(s,s,s,s),o,o,B.n),o,14,o,o,o,o,o,3))}u=A.q(o,A.x(t,B.m,o,B.qQ,B.i,0,B.p),B.f,o,o,new A.p(o,o,o,D.b42,u,D.c7_,B.n),o,o,o,o,o,o,o,14)
v=A.a([new A.ac(0,B.G,B.w.j(0.4),B.dv,18)],v)
t=A.ap(o,A.b4(o,o,o,new C.aIp(o),D.fcw),o,o,o,26,-2,o)
s=A.a([],m)
r=p.z
q=B.a.i(r)
if(q.length!==0)s.push(new C.aWg(p.y,r,L.iY,o))
r=n.d
q=p.x
if(p.f)n=A.x(A.a([A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),p.r,o,o,o,o,o,2,A.bt(o,B.eJ,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iY.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Page title",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fBJ,!0,B.a5,o,B.ao,o,o,o,o),A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iY.j(0.45),o,o,o,o,o,o,o,o,11,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.X,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),p.w,o,o,o,o,o,2,A.bt(o,B.eJ,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,L.iY.j(0.35),o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),"Write your family story here\u2026",o,o,o,o,o,o,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),B.y,!0,o,!0,o,!0,o,B.ak,o,o,o,o,o,o,o,o,o,o,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,D.fsp,!0,B.a5,B.AC,B.ao,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,B.p)
else{n=A.a([A.d(n.b,o,o,o,o,o,o,D.fBB,o,o,o),B.ax,A.d(q.$1(r),o,o,o,o,o,o,A.l(o,o,L.iY.j(0.5),o,o,o,o,o,o,o,o,11,B.cH,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.U,A.A(A.a([A.E(A.q(o,o,B.f,D.G3.j(0.35),o,o,o,1,o,o,o,o,o,o),1),new A.D(B.fG,A.d("\u2766",o,o,o,o,o,o,A.l(o,o,D.G3.j(0.7),o,o,o,o,o,o,o,o,16,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o),A.E(A.q(o,o,B.f,D.G3.j(0.35),o,o,o,1,o,o,o,o,o,o),1)],m),B.m,o,B.e,B.i,0,o,o),B.aB],m)
if(k.length===0)n.push(A.d("This page is blank. Tap the pencil to write.",o,o,o,o,o,o,A.l(o,o,L.iY.j(0.4),o,o,o,o,o,o,o,o,16,o,o,o,o,1.7,!0,o,o,o,o,o,o,o,o),o,o,o))
else n.push(A.YY(A.cP(A.a([A.cP(o,o,o,o,o,o,o,o,o,D.fvB,B.a.aC(k,0,1)),A.cP(o,o,o,o,o,o,o,o,o,o,B.a.b2(k,1))],x.R),o,o,o,o,o,o,o,o,o,o),o,o,A.l(o,o,L.iY.j(0.93),o,o,o,o,o,o,o,o,16.5,o,o,o,o,1.72,!0,o,o,o,o,o,o,o,o),o))
n=A.cg(A.x(n,B.E,o,B.e,B.i,0,B.p),B.t,o,B.y,o,o,o,o,B.ah)}s.push(A.E(n,1))
s.push(new A.D(B.ib,A.d("\u2014 "+p.d+" \u2014",o,o,o,o,o,o,A.l(o,o,L.iY.j(0.5),o,o,o,o,o,o,o,o,12,o,o,o,o,o,!0,o,1,o,o,o,o,o,o),B.K,o,o),o))
l.push(A.A(A.a([u,A.E(A.q(o,A.by(B.LJ,new A.an(B.a0,o,B.ad,B.t,A.a([t,new A.D(D.bFh,A.x(s,B.al,o,B.e,B.i,0,B.p),o),A.ap(0,A.c3(o,new A.p(o,o,o,o,o,new A.a9(B.a6,B.aa,B.x,A.a([B.w.j(0.16),B.L],x.O),o,o),B.n),B.bi),o,o,0,o,0,22)],m),o),B.aq),B.f,o,o,new A.p(o,o,o,B.LJ,v,D.c7w,B.n),o,o,o,o,o,o,o,o),1)],m),B.al,o,B.e,B.i,0,o,o))
return new A.an(B.a0,o,B.ad,B.t,l,o)}}
C.alM.prototype={
S(){return new C.alN(new A.eA(0,$.aw()),new C.bSP(),new C.am4(),D.hzR,null,null)},
gd1(){return this.d}}
C.a1I.prototype={
a7(){return"_Step."+this.b}}
C.alN.prototype={
gCs(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDS(w.c,6,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N_(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gTS(){var w=this.ghb(0)
return w.gzk()==null?"Babu":B.a.i(w.gzk().b)},
Y(){var w,v=this
v.a2()
w=v.ghb(0).gzk()
w=w==null?null:w.c
v.r.b=w===D.oq
w=v.pZ(new C.bRa(v))
w.fX(0)
v.x!==$&&A.aQ()
v.x=w
v.a2s("Come closer, my children. I am "+v.gTS()+", elder of the "+v.a.c.b+" family. Tonight, by this fire, we remember who we are.")},
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
w.bvU()},
a2s(d){var w=this,v=w.y
if(v!=null)v.a1(0)
w.db=d
w.dx=0
w.r.c=!0
w.y=A.de(D.akK,new C.bR4(w))},
bsg(){var w,v=this
if(v.dx>=v.db.length)return
w=v.y
if(w!=null)w.a1(0)
v.m(new C.bRd(v))},
adN(d){var w=this.r
w.a=d
w.e=this.f.a
w.w=this.cy},
bs8(){return this.ba3()},
ba3(){var w=this,v=w.gCs()[w.as],u=v.e
u=u.length!==0?u:v.d
w.m(new C.bR5(w))
w.a2s(u)
v=w.z
if(v!=null)v.a1(0)
w.z=A.cy(B.m7,new C.bR6(w))},
cKW(){var w=this
w.m(new C.bR9(w))
w.a2s(w.gCs()[w.as].a)},
KZ(d){var w,v,u,t,s,r,q,p=this
if(p.Q!==D.acO)return
w=p.gCs()
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
q.d_(v*7+d)
p.m(new C.bR8(p,d,u,q))
p.a2s(u?D.dmX[q.aw(4)]+" "+w[p.as].d:D.dju[q.aw(3)]+" "+w[p.as].d)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.as
q=t.gCs()
p=q.length
w=r+1>=p?3:4
break
case 3:s=C.bG5(t.at,t.ay,p)
t.m(new C.bRb(t,s))
t.a2s(t.at>=q.length-1?"You carry the family now. Never let the fire go out.":"You listened well tonight. Come again, and the fire will burn higher.")
w=5
return A.b(C.BR(t.a.d,s),$async$kN)
case 5:t.cx=f
r=t.a
w=6
return A.b(C.BS(r.d,r.c.a,"fire",t.at*10),$async$kN)
case 6:t.dy=f
if(t.c!=null)t.m(new C.bRc())
w=1
break
case 4:++t.as
t.ba3()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w=this,v=null,u=w.f,t=x.p
return A.c4(v,D.Y5,new A.an(B.a0,v,B.ad,B.t,A.a([A.bR(0,new A.em(A.b4(v,v,v,new C.aWl(u,w.r,w.w,u),B.az),v),0,0,0),A.bn(!0,A.x(A.a([w.cbD(0),B.b4,w.bRj()],t),B.m,v,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0)],t),v),v,!1,!1,v,v)},
cbD(d){var w,v,u,t=this,s=null,r=A.aG(s,s,s,s,B.PS,s,s,s,new C.bR7(t),s,s,s,s,s,s),q=x.p,p=A.a([],q)
for(w=0;w<t.gCs().length;++w){v=t.as
if(w<v||t.Q===D.b0o)v=B.cO
else v=w===v?B.c:B.aV
u=new A.aO(4,4)
p.push(A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bf(u,u,u,u),s,s,B.n),s,7,s,D.bAC,s,s,s,22))}p=A.E(A.x(A.a([D.fJt,A.A(p,B.m,s,B.e,B.i,0,s,s)],q),B.E,s,B.e,B.i,0,B.p),1)
v=A.m(14)
u=A.L(B.fo,B.r,1)
return new A.D(D.bGs,A.A(A.a([r,p,A.q(s,A.d("\ud83d\udd25 "+B.j.V(t.cy*100)+"%",s,s,s,s,s,s,B.ix,s,s,s),B.f,s,s,new A.p(B.aT,s,u,v,s,s,B.n),s,s,s,s,B.h9,s,s,s)],q),B.m,s,B.e,B.i,0,s,s),s)},
bRj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.ghb(0).gzk()
if(h==null)w=1
else w=h.c===D.oq?0:1
v=j.dx
u=j.db
t=D.qe.j(0.96)
s=A.m(22)
r=A.L(B.cO,B.r,3)
q=A.b4(i,i,i,new C.boO(w,i),B.az)
p=A.d(j.Q===D.acO?j.gTS()+" asks":"Elder "+j.gTS(),i,i,i,i,i,i,D.aUR,i,i,i)
o=j.db
o=B.a.aC(o,0,Math.min(j.dx,o.length))
n=x.p
o=A.aA(B.c5,A.A(A.a([new A.a5(62,62,q,i),B.au,A.E(A.x(A.a([p,B.bG,A.d(o+(v<u.length?"\u258d":""),i,i,i,i,i,i,D.aV5,i,i,i)],n),B.E,i,B.e,B.i,0,B.p),1)],n),B.E,i,B.e,B.i,0,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,j.gbsf(),i,i,i,i,i,i,!1,B.a4)
switch(j.Q.a){case 0:v=A.at(j.a9T("Sit down by the fire",j.gbs7()),i,i,i)
break
case 1:v=A.at(j.a9T("Ask me, Elder",j.gcKV()),i,i,i)
break
case 2:v=A.a([],n)
for(m=0;u=j.gCs()[j.as].b,m<u.length;++m){q=new A.aO(14,14)
l=new A.ay(D.lB,2.5,B.r,-1)
v.push(A.aA(i,A.q(i,A.d(u[m],i,i,i,i,i,i,D.aV1,B.K,i,i),B.f,i,D.aee,new A.p(D.ajH,i,new A.bH(l,l,l,l),new A.bf(q,q,q,q),i,i,B.n),i,i,i,i,V.wh,i,i,i),B.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.bR1(j,m),i,i,i,i,i,i,!1,B.a4))}v=A.bW(B.bH,v,B.bt,i,8,8)
break
case 3:v=j.fr
u=v?B.kt:Al.apB
u=A.X(u,v?B.eo:D.lB,i,i,i,i)
q=v?"The fire grows!":"Listen and learn."
q=A.E(A.d(q,i,i,i,i,i,i,A.l(i,i,v?B.eo:D.lB,i,i,i,i,i,i,i,i,i,i,i,B.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),1)
v=j.as+1>=j.gCs().length?"Finish":"Next story"
v=A.A(A.a([u,B.ae,q,j.a9T(v,j.gql(j))],n),B.m,i,B.e,B.i,0,i,i)
break
case 4:v=A.a([A.d(""+j.at+" of "+j.gCs().length+" right  \xb7  +"+j.CW+" \u2b50",i,i,i,i,i,i,D.aVk,i,i,i)],n)
u=j.cx
if(u>0){u=C.aQz(u)
q=C.aQz(j.cx)
p=j.cx
k=j.dy?" \xb7 \ud83c\udfc6 new record!":""
v.push(A.d(u.b+" "+q.a+" \xb7 "+p+" stars"+k,i,i,i,i,i,i,D.abe,i,i,i))}v.push(B.U)
v.push(j.a9T("Back to the games",new C.bR2(j)))
v=A.x(v,B.m,i,B.e,B.i,0,B.p)
break
default:v=i}return A.q(i,A.x(A.a([o,B.X,v],n),B.E,i,B.e,B.Q,0,B.p),B.f,i,i,new A.p(t,i,r,s,D.aCV,i,B.n),i,i,i,B.yy,B.bh,i,i,i)},
a9T(d,e){var w=null,v=A.m(16),u=A.L(B.cO,B.r,2)
return A.aA(w,A.q(w,A.d(d,w,w,w,w,w,w,A2.KA,w,w,w),B.f,w,w,new A.p(D.lB,w,u,v,w,w,B.n),w,w,w,w,D.bEa,w,w,w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,!1,B.a4)}}
C.boO.prototype={
a4(d,e){Y.fV1(d,e.ej(B.I),e.gdA()*0.45,this.b,0,0.4)},
aE(d){return d.b!==this.b}}
C.aBp.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bSP.prototype={}
C.tc.prototype={}
C.boP.prototype={}
C.am4.prototype={
Ms(d){var w,v=this
if(v.a==null||!J.z(v.b,d)){w=v.a
if(w!=null)w.t()
v.a=C.ibv(d)
v.b=d}w=v.a
w.toString
return w},
t(){var w=this.a
return w==null?null:w.t()}}
C.aWl.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.b.a,i=l.c
d.zj(l.d.Ms(e))
w=e.a
v=e.b
u=Math.min(w/450,v/900)
t=d.c
J.bo(t.save())
t.translate((w-450*u)/2,(v-900*u)/2)
d.bU(0,u)
l.cAp(d,j)
l.bPS(d,j)
l.cIH(d,j,i)
s=0.8+0.2*Math.sin(j*8)*Math.sin(j*3.7)+i.w*0.4
J.bo(t.save())
t.translate(225,580)
d.pi(0,1,0.42)
r=240*(0.6+0.5*i.w)
$.Q()
q=A.K()
p=x.O
o=x.n
q.sav(A.w8(B.I,r,A.a([D.brI.j(0.55*s),F.Nc.j(0.2*s),B.L],p),A.a([0,0.5,1],o),B.x,k,k,0))
d.N(B.I,r,q)
t.restore()
n=A.a([new A.y(528,new C.bSH(l,d,j,i)),new A.y(540,new C.bSI(l,d,j,i)),new A.y(546,new C.bSJ(l,d,j,i)),new A.y(574,new C.bSK(l,d,j,i)),new A.y(612,new C.bSL(l,d,j,i)),new A.y(650,new C.bSM(l,d,j,i)),new A.y(656,new C.bSN(l,d,j,i))],x.E)
B.d.aZ(n,new C.bSO())
for(m=0;m<7;++m)n[m].b.$0()
l.bGN(d,j,i)
l.bTt(d,j)
t.restore()
$.Q()
t=A.K()
t.sav(A.w8(new A.o(w/2,v*0.6),e.gao2()*0.75,A.a([B.L,D.bfx],p),A.a([0.55,1],o),B.x,k,k,0))
d.ar(new A.a1(0,0,0+w,0+v),t)},
aE(d){return d.c!==this.c||d.d!==this.d},
cAp(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new A.e4()
h.d_(3)
for(w=0;w<36;++w){v=h.ai()
u=h.ai()
t=Math.sin(e*(1.5+h.ai()*2)+w)
s=h.ai()
t=B.c.j(0.25+0.7*(0.5+0.5*t))
$.Q()
r=new A.ao(B.O,B.M,B.R,B.T,B.P)
r.r=t.gp(0)
d.N(new A.o(v*450,20+u*300),0.8+s*1.1,r)}q=B.j.F(e,17)/1.2
if(q<1){p=new A.o(60+q*220,70+q*90)
d.ah(p,p.aJ(0,D.emh),C.iw(B.c.j((1-q)*0.9),1.6))}for(v=e*0.035,u=e*9,t=x.v,o=0;o<3;++o){n=B.j.F(v+o*0.05,1)
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
r=new A.c5(s-2,j,s,r)
k.push(r)
i=l.f
if(i!=null)r.ak(i)
l.ab()
s=new A.c5(s+2,j,s+6,m)
k.push(s)
r=l.f
if(r!=null)s.ak(r)
l.ab()
s=new A.ao(B.O,B.M,B.R,B.T,B.P)
s.b=B.a9
s.c=1.6
s.r=D.bie.gp(0)
s.d=B.bw
s.e=B.dP
d.af(l,s)}},
bPS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=0.75+0.25*Math.sin(e*9)*Math.sin(e*5.3)
for(w=e*0.12,v=0.78*g,u=0.7*g,t=0;t<3;++t){s=D.azS[t]
r=s.a
q=s.c
p=r+q*0.1
o=s.b
n=s.d
m=o-n*0.38
l=A.bs(new A.o(p,m),n*0.74,q*0.5)
k=Ab.yh.j(v)
$.Q()
j=new A.ao(B.O,B.M,B.R,B.T,B.P)
j.r=k.gp(0)
d.bZ(l,j)
q=A.bs(new A.o(p+0,m+n*0.1),n*0.4,q*0.28)
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=R.xV.j(u).gp(0)
d.bZ(q,m)
for(q=r*0.01,n=o-n-s.e*0.9,i=0;i<5;++i){h=B.j.F(w+i/5+q,1)
p=Math.sin(h*6+i)
o=new A.ao(B.O,B.M,B.R,B.T,B.P)
o.r=D.ah2.j(0.16*(1-h)).gp(0)
d.N(new A.o(r+p*6+h*18,n-h*70),4+h*12,o)}}},
cIH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
C.bDg(d,D.emd,0.9,e,D.hva,!1,!1,D.b0l,1,!1)
w=$.Q().r
v=x.v
u=new A.aF(w,B.ai,g,g,A.a([],v))
u.D(new A.aZ(52,470))
u.D(new A.aq(50,486))
u.D(new A.aq(66,486))
u.D(new A.aq(64,470))
u.D(new A.bu())
t=A.K()
t.r=D.aj_.gp(0)
d.af(u,t)
C.bDg(d,D.emf,0.95,e,D.hv5,!1,!1,D.b0m,1,!0)
t=new A.aF(w,B.ai,g,g,A.a([],v))
t.D(new A.aZ(417,510))
t.D(new A.c5(431,532,445,510))
t.D(new A.aq(441,548))
t.D(new A.c5(431,553,421,548))
t.D(new A.bu())
u=A.K()
u.r=F.FL.gp(0)
d.af(t,u)
u=A.bs(D.eme,8,28)
t=A.K()
t.r=D.btY.gp(0)
d.bZ(u,t)
C.bDg(d,new A.o(-30+B.j.F(e/26,1)*510,492),0.82,e,D.hvb,!0,!1,D.WZ,1,!1)
t=B.j.F(e/11,1)*3.141592653589793*2
s=150+Math.sin(t)*110
r=507+Math.cos(t)*7
q=Math.cos(t)>=0?1:-1
d.bZ(A.bs(new A.o(s+q*16,r-6),16,11),C.iw(D.aiQ,1.8))
u=q<0
C.bDg(d,new A.o(s-q*6,r),0.62,e,D.hvd,!1,u,D.WZ,2.2,!1)
C.bDg(d,new A.o(s-q*32,r+4),0.58,e+1,D.hv9,!1,u,D.WZ,2.2,!1)
this.bWc(d,D.elT,e)
for(u=e*0.5,t=e*4,p=0;p<3;++p){o=88+p*17+Math.sin(u+p)*6
n=520+B.o.F(p,2)*6
m=Math.max(0,Math.sin(t+p*2))*4
l=A.bs(new A.o(o,n),8,11)
k=p===1
j=k?D.aiM:D.ajp
i=new A.ao(B.O,B.M,B.R,B.T,B.P)
i.r=j.gp(0)
d.bZ(l,i)
l=k?D.aiM:D.ajp
k=new A.ao(B.O,B.M,B.R,B.T,B.P)
k.r=l.gp(0)
d.N(new A.o(o+5,n+(-3+m)),2.6,k)
k=new A.ao(B.O,B.M,B.R,B.T,B.P)
k.b=B.a9
k.c=1
k.r=B.aw.gp(0)
k.d=B.bw
k.e=B.dP
d.ah(new A.o(o+7.5,n+(-2+m)),new A.o(o+10,n+(-1.5+m)),k)
o+=-1
k=new A.ao(B.O,B.M,B.R,B.T,B.P)
k.b=B.a9
k.c=1
k.r=B.aw.gp(0)
k.d=B.bw
k.e=B.dP
d.ah(new A.o(o,n+4),new A.o(o,n+8),k)}h=e<f.f
u=A.bs(D.a8e,15+Math.sin(e*2)*0.8,40)
t=A.K()
t.r=D.ahq.gp(0)
d.bZ(u,t)
u=A.bs(D.a8e.a5(0,new A.o(-14,h?-9:-2)),12,15)
t=A.K()
t.r=D.bki.gp(0)
d.bZ(u,t)
t=new A.aF(w,B.ai,g,g,A.a([],v))
t.D(new A.aZ(130,592-(h?16:6)))
t.D(new A.aq(134,592-(h?22:9)))
t.D(new A.aq(138,592-(h?16:6)))
t.D(new A.bu())
u=A.K()
u.r=D.bks.gp(0)
d.af(t,u)
u=D.a8e.a5(0,new A.o(-17,h?-9:-2))
t=A.K()
t.r=B.i9.gp(0)
d.N(u,1.1,t)
v=new A.aF(w,B.ai,g,g,A.a([],v))
v.D(new A.aZ(168,590))
w=Math.sin(e*8)
v.D(new A.c5(180,588+w*(h?6:0),178,595))
d.af(v,C.iw(D.ahq,3.5))},
bWc(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=Math.max(0,Math.sin(f*0.6))*9,k=e.a5(0,new A.o(Math.sin(f*0.25)*10,0))
for(w=[-9,-4,6,11],v=w.length,u=k.a,t=k.b,s=t+3,r=f*2,q=t+16,p=0;p<v;++p){o=w[p]
n=Math.sin(r+o)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.b=B.a9
m.c=2
m.r=D.Yi.gp(0)
m.d=B.bw
m.e=B.dP
d.ah(new A.o(u+o,s),new A.o(u+(o+n*1.5),q),m)}w=A.bs(k,17,32)
v=$.Q()
r=A.K()
r.r=D.FJ.gp(0)
d.bZ(w,r)
r=A.bs(k.a5(0,D.elk),7,26)
w=A.ar(D.FJ,B.w,0.12)
w.toString
q=A.K()
q.r=w.gp(0)
d.bZ(r,q)
v=new A.aF(v.r,B.ai,null,null,A.a([],x.v))
v.D(new A.aZ(u+13,t-3))
v.D(new A.aq(u+22,t-8+l))
v.D(new A.aq(u+20,t+l-0.5))
v.D(new A.aq(u+12,s))
v.D(new A.bu())
s=A.K()
s.r=D.FJ.gp(0)
d.af(v,s)
s=A.bs(k.a5(0,new A.o(24,-7+l)),9,12)
v=A.K()
v.r=D.FJ.gp(0)
d.bZ(s,v)
v=-11+l
d.ah(k.a5(0,new A.o(22,v)),k.a5(0,new A.o(21,-17+l)),C.iw(D.Yi,1.6))
d.ah(k.a5(0,new A.o(26,v)),k.a5(0,new A.o(28,-16+l)),C.iw(D.Yi,1.6))
v=k.a5(0,new A.o(26,-8+l))
s=A.K()
s.r=B.w.gp(0)
d.N(v,0.9,s)
d.ah(k.a5(0,new A.o(26,-3+l)),k.a5(0,new A.o(26,1+l)),C.iw(D.bn9,1.4))
d.ah(k.a5(0,D.eog),k.a5(0,new A.o(-19,-7+Math.sin(f*7)*2)),C.iw(D.FJ,2.4))},
bTr(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5
for(w=0;w<14;++w){v=w*3.141592653589793*2/14
u=Math.cos(v)
t=Math.sin(v)
if(Math.sin(v)<0){u=A.bs(new A.o(225+u*36,574+(t*13+6)),8,11)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.T,B.P)
t.r=D.bsF.gp(0)
a6.bZ(u,t)}}u=A.bs(D.a8h.a5(0,B.cA),17,52)
$.Q()
t=A.K()
t.r=D.bf4.gp(0)
a6.bZ(u,t)
t=A.bs(D.a8h.a5(0,B.cA),12,44)
u=D.biC.j(0.6+0.3*Math.sin(a7*6))
s=A.K()
s.r=u.gp(0)
a6.bZ(t,s)
for(r=0;r<3;++r){v=D.diX[r]
u=225+Math.cos(v)*3
t=Math.cos(v)
s=Math.sin(v)
q=Math.cos(v)
p=Math.sin(v)
o=new A.ao(B.O,B.M,B.R,B.T,B.P)
o.b=B.a9
o.c=7
o.r=D.FX.gp(0)
o.d=B.bw
o.e=B.dP
a6.ah(new A.o(u+t*24,579+s*4),new A.o(u-q*24,579-p*4),o)
o=Math.cos(v)
p=Math.sin(v)
q=Math.cos(v)
s=Math.sin(v)
t=D.Bw.j(0.6)
n=new A.ao(B.O,B.M,B.R,B.T,B.P)
n.b=B.a9
n.c=2
n.r=t.gp(0)
n.d=B.bw
n.e=B.dP
a6.ah(new A.o(u+o*24,579+(p*4-2)),new A.o(u-q*24,579-(s*4+2)),n)}m=46+80*a8.w
l=[D.eZn,D.eZX,D.f01,D.f0l,D.f0_]
for(u=a7*8,t=a7*15,s=a7*3.3,q=x.v,k=0;k<3;++k){j=[1,0.72,0.42][k]
i=[D.bq5,D.bmv,D.bs6][k]
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
g=new A.bu()
f.push(g)
f=a2.f
if(f!=null)g.ak(f)
a2.ab()
g=new A.ao(B.O,B.M,B.R,B.T,B.P)
g.r=i.j(o?0.9:0.95).gp(0)
a6.af(a2,g)}}for(u=a7*1.5,w=0;w<22;++w){a5=B.j.F(a7*(0.35+B.o.F(w,5)*0.06)+w/22,1)
t=Math.sin(w*1.9+u)
s=a8.w
q=B.o.F(w,3)
p=G.ajn.j((1-a5)*0.9)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.T,B.P)
o.r=p.gp(0)
a6.N(new A.o(225+t*(10+a5*26),564-a5*(110+80*s)),1.2+q*0.6,o)}for(u=a7*0.1,t=574-m,w=0;w<6;++w){a5=B.j.F(u+w/6,1)
s=Math.sin(a5*5+w)
q=D.ah2.j(0.1*(1-a5))
$.Q()
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=q.gp(0)
a6.N(new A.o(225+s*16+a5*12,t-a5*120),7+a5*20,p)}},
bTt(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=e*0.3,v=e*3,u=e*0.7,t=e*1.4,s=0;s<16;++s){r=B.j.F(s*83+Math.sin(w+s)*40+v,450)
q=420+B.o.F(s*37,300)+Math.sin(u+s*2)*26
p=Math.max(0,Math.sin(t+s*1.7))
o=D.bu7.j(0.18*p)
$.Q()
n=new A.ao(B.O,B.M,B.R,B.T,B.P)
n.r=o.gp(0)
d.N(new A.o(r,q),5,n)
n=new A.ao(B.O,B.M,B.R,B.T,B.P)
n.r=D.bnV.j(0.9*p).gp(0)
d.N(new A.o(r,q),1.4,n)}},
c5a(d,e){switch(d){case 0:return e.b?D.hv6:D.b_U
case 1:return e.b?D.hvc:D.b_S
case 2:return D.b_R
case 3:return D.b_Q
case 4:return D.b_T
default:return D.b_V}},
aDa(d,e){return(0.2+0.8*Math.abs(Math.sin(d*10+e)))*(0.55+0.45*Math.sin(d*3.1+e*2))},
R5(d,e,f,g){var w,v=this,u=D.a5I[e],t=v.c5a(e,g),s=new C.boP(),r=f-g.e,q=f<g.f,p=g.r,o=g.c,n=(Math.sin(f*1.3+e*7.1)+Math.sin(f*2.1+e*3.7)*0.6+Math.sin(f*0.7+e*11.3)*0.4)/2,m=D.a5I[e],l=e===0
m=B.j.E(((l?D.aLj:D.aLo).a-m.a.a)/160,-1,1)*0.8+n*0.25
s.y=m
s.z=l?0.35:-0.3+n*0.2
m=s.e=m*0.55
s.Q=D.a8l
s.as=D.E6
if(l){s.a=o?v.aDa(f,0):0
p=g.a
l=p===3&&g.d?0.7:0
w=p===4?0.8:0
s.b=0.3+l+w
s.c=p===2?0.5:0.1
s.f=n*0.05
if(o){s.r=Math.sin(f*4.2)*1.4
p=new A.o(46+Math.sin(f*3.1)*10,-64+Math.sin(f*4.3)*13)
s.as=p
s.Q=new A.o(-40+Math.sin(f*2.2+1)*4,-40+Math.sin(f*3.4)*6)}else p=D.E6
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
s.x=Math.max(0,Math.sin(p))*3}else if(g.a===3&&!g.d){s.as=D.els
s.e=m+Math.sin(r*5)*0.2*Math.max(0,1-r/2)
s.b=-0.2}}else{s.b=0.3+0.1*Math.sin(f*0.5+e)
s.w=2+(o?Math.sin(f*1.6+e)*1.6:0)
if(o)s.r=Math.max(0,Math.sin(f*1.9+e*2))*2.2
if(g.a===2){s.c=0.6
s.w=4
if(e===2)s.as=D.emN
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
s.Q=D.epc
s.as=D.aLB}if(e===2&&g.x!=null&&f<g.y){s.a=v.aDa(f,5)
s.b=0.4
s.as=new A.o(34+Math.sin(f*3)*6,-70+Math.sin(f*4)*8)}if(e===g.Q&&g.z!=null&&f<g.as){s.a=v.aDa(f,e*3)
s.b=0.5
s.c=0.4}}C.hys(d,u.a,u.b*1.2,t,s,f,e,null)},
bGN(d,e,f){var w=new C.bSG(d),v=f.z
if(v!=null&&e<f.as)w.$2(f.Q,v)
v=f.x
if(v!=null&&e<f.y)w.$2(2,v)},
gde(d){return this.c}}
C.afN.prototype={
a7(){return"_Stand."+this.b}}
C.adM.prototype={}
C.lr.prototype={}
C.bRq.prototype={
bBo(d){var w,v,u,t,s=A.T(x.N,x.P)
for(w=this.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s.n(0,t.a,t)}this.c!==$&&A.aQ()
this.c=s},
G6(d){var w,v,u,t,s,r=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
if(s.d===u)r.push(s)}B.d.aZ(r,new C.bRr())
return r},
arg(d){var w,v,u,t,s,r=d.e
if(r==null)w=null
else{v=this.c
v===$&&A.c()
w=v.h(0,r)}if(w!=null)return w
for(r=this.b,v=r.length,u=d.a,t=0;t<v;++t){s=r[t]
if(s.e===u)return s}return null},
aMT(d){var w,v,u,t,s,r,q,p=A.a([],x.u)
for(w=this.b,v=w.length,u=d.a,t=d.d,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
if(r.a!==u){q=r.d
q=q!=null&&q===t}else q=!1
if(q)p.push(r)}return p},
amr(d){var w,v,u=A.aR(x.N),t=d,s=0
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
gzk(){var w=this.b
if(w.length===0)return null
w=A.C(w,x.P)
B.d.aZ(w,new C.bRs(this))
return B.d.gH(w)}}
C.au5.prototype={}
C.zB.prototype={}
C.akG.prototype={
gC_(d){var w
if(B.a.i(this.a).length!==0){w=this.b
w=new A.Y(w,new C.bMe(),A.U(w).k("Y<1>")).gI(0)>=2&&B.a.i(w[this.c]).length!==0}else w=!1
return w},
aj(){var w=this
return A.H(["q",w.a,"a",w.b,"c",w.c,"s",w.d],x.N,x.z)}}
C.MJ.prototype={
gapi(d){var w,v,u,t,s=A.a([],x.b)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
if(t.gC_(0))s.push(t)}return s},
aj(){var w,v,u,t,s,r,q=this.b,p=A.a([],x.Y)
for(w=this.c,v=w.length,u=x.N,t=x.z,s=0;s<w.length;w.length===v||(0,A.J)(w),++s){r=w[s]
p.push(A.H(["q",r.a,"a",r.b,"c",r.c,"s",r.d],u,t))}return A.H(["id",this.a,"title",q,"qs",p],u,t)},
d19(){var w,v,u,t,s,r,q,p,o,n,m,l=A.a([],x.J)
for(w=this.gapi(0),v=w.length,u=x.s,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){s=w[t]
r=s.b
q=B.a.i(r[s.c])
p=A.a([],u)
for(o=r.length,n=0;n<r.length;r.length===o||(0,A.J)(r),++n){m=B.a.i(r[n])
if(m.length!==0)p.push(m)}l.push(new C.lr(B.a.i(s.a),p,B.d.co(p,q),"The right answer is "+q+".","","creator",s.d))}return l}}
C.bai.prototype={}
C.a9R.prototype={}
C.bhy.prototype={}
C.afL.prototype={}
C.ajZ.prototype={
S(){return new C.ak_(B.bD,A.a([],x.cC),A.a([],x.e4),null,null)},
gd1(){return this.d}}
C.ak_.prototype={
gMK(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDS(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gbap(){var w,v=this,u=v.e
if(u===$){w=v.pZ(v.gcbF())
v.e!==$&&A.bF()
v.e=w
u=w}return u},
Y(){this.a2()
this.gbap().fX(0)},
t(){this.gbap().t()
this.bvP()},
fX(d){this.m(new C.bKp(this))},
cbG(d){var w=this,v=Math.min(0.05,(d.a-w.f.a)/1e6)
w.f=d
w.fH(0,v)
if(w.c!=null)w.m(new C.bKk())},
b8L(){var w,v,u,t=this,s=t.r
B.d.a8(s)
w=t.gMK()
v=w[t.x].b.length
for(u=0;u<v;++u)s.push(new C.bhy(u,(u+0.5)/v,w[t.x].b[u]))},
fH(d,e){var w,v,u,t,s,r,q,p,o,n,m=this
m.dx+=e
if(!m.ch||m.CW)return
w=m.cy
m.cy=w+(m.db-w)*Math.min(1,e*9)
for(w=m.w,v=w.length,u=e*1.4,t=0;t<v;++t){s=w[t]
s.a=s.a+s.c*e
s.b=s.b+s.d*e
s.f-=u}B.d.bt(w,new C.bKq())
w=m.fx
if(w>0){m.fx=w-e
for(w=m.r,v=w.length,t=0;t<v;++t)w[t].r+=e
if(m.fx<=0)m.c80()
return}for(w=m.r,v=w.length,t=0;t<w.length;w.length===v||(0,A.J)(w),++t){r=w[t]
if(r.e||r.f)continue
r.d=r.d+e/(9.5-Math.min(m.x,6)*0.6)
r.r+=e
u=r.a
q=r.b+Math.sin(m.dx*1.7+u)*0.012
p=r.d
if(p>=0.74&&p<=0.86&&Math.abs(q-m.cy)<0.12){r.e=!0
w=m.gMK()
if(u===w[m.x].c){v=++m.as
m.at=Math.max(m.at,v);++m.Q
o=100+B.j.V((1-r.d)*100)+20*Math.min(v-1,4)
m.z+=o
m.fy=o
m.go=m.dx
v=m.cy
m.id=v
m.asN(v,0.8,B.cO)
m.dy="Yes! "+w[m.x].d
m.fr=m.dx+2
m.fx=1.8}else{m.asN(m.cy,0.8,G.nm)
m.aZn("That was not it. "+w[m.x].d)}return}if(p>0.9){r.f=!0
m.asN(q,0.88,D.lB)
p=m.gMK()[m.x]
n=p.c
if(u===n){m.aZn("The right gourd fell! It was "+p.b[n]+".")
return}}}},
asN(d,e,f){var w,v,u,t=new A.e4()
t.d_(B.j.V(this.dx*1000))
for(w=this.w,v=0;v<14;++v){u=t.ai()*3.141592653589793*2
w.push(new C.afL(d,e,Math.cos(u)*0.25,-0.1-Math.abs(Math.sin(u))*0.35,f))}},
aZn(d){var w,v=this
v.as=0
w=--v.y
v.dy=d
v.fr=v.dx+2.4
v.fx=2.2
if(w<=0){v.fx=0
v.Qf()}},
c80(){var w=this
if(w.x+1>=w.gMK().length){w.Qf()
return}++w.x
w.b8L()},
Qf(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$Qf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.CW=!0
t=u.Q
s=u.gMK().length
r=C.bG5(t,u.at,s)
u.ax=r
if(u.c!=null)u.m(new C.bKi())
w=2
return A.b(C.BR(u.a.d,r),$async$Qf)
case 2:u.ay=e
t=u.a
w=3
return A.b(C.BS(t.d,t.c.a,"catch",u.z),$async$Qf)
case 3:u.cx=e
if(u.c!=null)u.m(new C.bKj())
return A.h(null,v)}})
return A.i($async$Qf,v)},
B(d){var w,v=this,u=null
if(v.CW)w=v.cbE()
else w=v.ch?v.cbH():A.at(new A.D(B.ex,A.x(A.a([D.aWh,B.U,D.fL6,B.X,D.fRi,B.dX,C.us("Play",v.geY(v),B.cO,B.hu,D.fw)],x.p),B.m,u,B.e,B.Q,0,B.p),u),u,u,u)
return new C.tE("Calabash Catch",w,B.f5,u)},
cbH(){var w,v,u,t,s=this,r=null,q=x.p,p=A.a([],q)
for(w=0;w<3;++w){v=w<s.y
u=v?B.hH:B.Hu
p.push(A.X(u,v?B.ay:B.bW,r,r,r,22))}p.push(B.b4)
v=s.x
u=s.gMK()
p.push(A.d(""+(v+1)+"/"+u.length,r,r,r,r,r,r,D.aUP,r,r,r))
p.push(B.bd)
v=A.m(14)
p.push(A.q(r,A.d(""+s.z,r,r,r,r,r,r,B.ix,r,r,r),B.f,r,r,new A.p(B.bA,r,r,v,r,r,B.n),r,r,r,r,B.GI,r,r,r))
p=A.A(p,B.m,r,B.e,B.i,0,r,r)
v=A.m(18)
t=A.L(B.cO,B.r,3)
return A.x(A.a([new A.D(D.bBW,p,r),A.q(r,A.d(u[s.x].a,r,r,r,r,r,r,D.fvt,B.K,r,r),B.f,r,r,new A.p(D.qe,r,t,v,r,r,B.n),r,r,r,B.f2,B.bh,r,r,1/0),B.an,A.E(A.cs(new C.bKo(s)),1)],q),B.m,r,B.e,B.i,0,B.p)},
cbE(){var w=this,v=null,u=A.at(A.d(w.y<=0?"The gourds are all gone":"The basket is full!",v,v,v,v,v,v,B.pR,v,v,v),v,v,v),t=A.at(A.d(""+w.Q+" of "+w.gMK().length+" caught \xb7 "+w.z+" points",v,v,v,v,v,v,D.Vo,v,v,v),v,v,v),s=w.ax,r=w.ay
if(r===0)r=s
return A.cl(A.a([D.bcx,u,t,B.aR,new C.Iq(s,r,w.cx,v),B.aR,A.at(C.us("Back to the games",new C.bKh(w),B.cO,B.k3,D.fw),v,v,v)],x.p),v,v,B.ac,v,v,B.ah,!1)}}
C.bcJ.prototype={
a4(a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a5.a,a0=a5.b,a1=0+d,a2=$.Q(),a3=A.K()
a3.sav(A.jy(B.I,new A.o(0,a0),D.d17,G.aA9,B.x,e))
a4.ar(new A.a1(0,0,a1,0+a0),a3)
a3=A.K()
a3.r=G.Ng.gp(0)
a4.N(new A.o(d*0.82,a0*0.16),22,a3)
a3=x.v
w=A.a([],a3)
v=new A.aF(a2.r,B.ai,e,e,w)
a2=a0*0.7
v.D(new A.aZ(0,a2))
for(u=0;u<=d;u+=6){t=new A.aq(u,a2+Math.sin(u/55)*10)
w.push(t)
s=v.f
if(s!=null)t.ak(s)
v.ab()}v.D(new A.aq(d,a0))
v.D(new A.aq(0,a0))
a2=$.Q()
w=A.K()
w.r=D.bjx.gp(0)
a4.af(v,w)
r=d*0.12
a2=new A.aF(a2.r,B.ai,e,e,A.a([],a3))
w=a0*0.86
a2.D(new A.aZ(r-26,w))
t=a0*0.5
s=a0*0.34
a2.D(new A.c5(r-14,t,r-10,s))
a2.D(new A.aq(r+10,s))
a2.D(new A.c5(r+14,t,r+26,w))
a2.D(new A.bu())
w=A.K()
w.r=D.ag5.gp(0)
a4.af(a2,w)
for(a2=a0*0.36,w=a0*0.24,t=a0*0.22,q=0;q<4;++q){p=D.cmU[q]
s=new A.ao(B.O,B.M,B.R,B.T,B.P)
s.r=D.ag5.gp(0)
s.c=7
s.d=B.bw
a4.ah(new A.o(r,a2),new A.o(r+p*46,w),s)
s=new A.ao(B.O,B.M,B.R,B.T,B.P)
s.r=D.afr.gp(0)
a4.N(new A.o(r+p*50,t),18,s)}a2=a0*0.88
w=A.K()
w.r=D.bkq.gp(0)
a4.ar(new A.a1(0,a2,a1,a2+a0*0.12),w)
for(a1=a0*0.9,a2=a1-8,o=0;o<18;++o){w=d*o/17
t=new A.ao(B.O,B.M,B.R,B.T,B.P)
t.r=D.ahI.gp(0)
t.c=2
a4.ah(new A.o(w,a1),new A.o(w+3,a2),t)}for(a1=this.b,a2=a1.r,w=a2.length,t=a4.c,s=a0*0.89,q=0;q<a2.length;a2.length===w||(0,A.J)(a2),++q){n=a2[q]
if(n.e)continue
m=n.a
u=(n.b+Math.sin(a1.dx*1.7+m)*0.012)*d
l=n.d
if(n.f){m=A.bs(new A.o(u,s),12,54)
$.Q()
l=new A.ao(B.O,B.M,B.R,B.T,B.P)
l.r=D.lB.j(0.6).gp(0)
a4.bZ(m,l)
continue}m=Math.sin(a1.dx*2+m)
J.bo(t.save())
t.translate(u,l*a0)
t.rotate(m*0.1*180/3.141592653589793,0,0)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=D.agN.gp(0)
a4.N(D.ekH,14,m)
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=D.bp6.gp(0)
m.c=4
m.d=B.bw
a4.ah(D.ekI,D.elP,m)
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.sav(new A.alx(D.enY,46,D.d9E,B.Dp,B.x,e,e,0))
a4.N(B.I,34,m)
m=A.bs(D.eo4,8,12)
l=new A.ao(B.O,B.M,B.R,B.T,B.P)
l.r=B.c.j(0.35).gp(0)
a4.bZ(m,l)
k=new A.iH(new A.en(n.c,e,e,B.cJ,e,e,e,e,e,e,D.ftk),B.K,B.bX,new A.jg(1),e,e,3,e,B.bY,e,B.cr)
k.o5(62)
m=k.b
l=Math.max(40,m.c+10)
m=m.a.c
j=A.bl(A.bs(B.cM,m.gba(m)+8,l),B.fI)
l=new A.ao(B.O,B.M,B.R,B.T,B.P)
l.r=D.qe.gp(0)
a4.am(j,l)
l=new A.ao(B.O,B.M,B.R,B.T,B.P)
l.r=D.lB.gp(0)
l.b=B.a9
l.c=1.5
a4.am(j,l)
l=k.b
m=l.c
l=l.a.c
k.a4(a4,new A.o(-m/2,4-l.gba(l)/2))
t.restore()}i=a1.cy*d
a2=a1.dx
w=Math.sin(a2*4)
Y.Bi(a4,new A.o(i,a0*0.93),a0*0.3,a2,!0,Math.abs(a1.db-a1.cy)*40*Math.abs(Math.sin(a1.dx*18)),2,B.dK,F.mR,!1,(w+1)/2)
h=A.bs(new A.o(i,a0*0.8),a0*0.07,d*0.24)
a3=new A.aF($.Q().r,B.ai,e,e,A.a([],a3))
w=h.a
a2=h.b
a3.D(new A.aZ(w,a2))
t=h.c
a3.D(new A.aq(t,a2))
s=h.d
a3.D(new A.aq(t-8,s))
a3.D(new A.c5(h.gbw().a,s+8,w+8,s))
a3.D(new A.bu())
m=A.K()
m.r=D.Z7.gp(0)
a4.af(a3,m)
for(a3=t-w,o=1;o<6;++o){t=w+a3*o/6
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=D.Bw.gp(0)
m.c=1.4
a4.ah(new A.o(t,a2),new A.o(t+(o-3)*2,s),m)}t=a2+(s-a2)*0.35
s=A.K()
s.r=G.nm.gp(0)
a4.ar(new A.a1(w,t,w+a3,t+5),s)
w-=2
a2-=4
s=A.K()
s.r=D.bjD.gp(0)
a4.bZ(new A.a1(w,a2,w+(a3+4),a2+8),s)
for(a2=a1.w,a3=a2.length,q=0;q<a2.length;a2.length===a3||(0,A.J)(a2),++q){g=a2[q]
w=g.a
t=g.b
s=g.f
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=g.e.j(B.j.E(s,0,1)).gp(0)
a4.N(new A.o(w*d,t*a0),3*s+1,m)}f=a1.dx-a1.go
if(f>=0&&f<1.2){a2=a1.fy
k=A.fq(e,B.cr,e,e,e,A.cP(e,e,e,e,e,e,e,e,e,A.l(e,e,B.cO.j(1-f/1.2),e,e,e,e,e,e,e,e,26,e,e,B.u,e,e,!0,e,e,e,e,e,I.Dj,e,e),"+"+a2),B.a5,B.bX,e,B.dz,B.bY)
k.e5()
k.a4(a4,new A.o(a1.id*d-k.b.c/2,a0*0.72-f*60))}},
aE(d){return!0}}
C.QD.prototype={
B(d){var w=this,v=null,u=w.e,t=A.b4(v,v,v,new C.aBn(w.c,w.f,v),B.az),s=A.m(10),r=A.L(B.bF,B.r,1.4)
return new A.a5(u+22,v,A.x(A.a([new A.a5(u,u,t,v),B.cU,A.q(v,A.d(w.d,v,1,B.a2,v,v,v,D.flY,v,v,v),B.f,v,v,new A.p(B.c,v,r,s,v,v,B.n),v,v,v,v,B.mY,v,v,v)],x.p),B.m,v,B.e,B.Q,0,B.p),v)},
gZ(d){return this.e}}
C.aBn.prototype={
a4(d,e){var w=e.ej(B.I),v=e.gdA(),u=this.c?0.8:0
return Y.fV1(d,w,v*0.44,this.b,0,u)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.azS.prototype={}
C.auH.prototype={
S(){return new C.auI(A.T(x.S,x.cq),null,null)},
gd1(){return this.d}}
C.auI.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hDI(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gaFd(){var w=this.z
return w===$?this.z=this.Xi(0):w},
gj1(){var w,v=this.Q
if(v===$){w=this.gkS()
w=w.length===0?0:w[0].c.length
v=this.Q=A.bZ(w,-1,!1,x.S)}return v},
Xi(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.h)
w=s[d]
s=A.a([],x.h)
for(v=w.c,u=w.d,t=0;t<v.length;++t)s.push(new C.azS(v[t],u[t],t))
for(v=w.e,u=w.f,t=0;t<v.length;++t)s.push(new C.azS(v[t],u[t],-1))
v=new A.e4()
v.d_(this.a.e*31+d)
B.d.e0(s,v)
return s},
t(){var w,v,u
for(w=this.as,w=new A.dq(w,w.r,w.e);w.C();){v=w.d
v.r.t()
v.r=null
u=v.eN$
u.b=!1
B.d.a8(u.a)
u=u.gov()
if(u.a>0){u.b=u.c=u.d=u.e=null
u.a=0}v.dV$.a.a8(0)
v.qC()}this.bwh()},
cR1(d,e){var w,v,u,t,s,r=this
if(d>=r.gj1().length||r.gj1()[d]!==-1||B.d.q(r.gj1(),e))return
w=r.gaFd()[e]
v=r.gkS()[r.e].a
if(w.c<0){++r.f;++r.y
r.m(new C.cpM(r,e,w,v))
A.cy(B.lH,new C.cpN(r))
return}++r.r
u=A.bm(null,B.hD,null,1,null,r)
t=r.as
s=t.h(0,d)
if(s!=null)s.t()
t.n(0,d,u)
r.m(new C.cpO(r,d,e,w,v))
u.cr(0)},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.e
n=t.gkS()
w=o+1>=n.length?3:4
break
case 3:s=B.d.cJ(n,0,new C.cpP())
o=t.r
n=t.f
o=Math.max(0,o*4-n)
r=o+(n===0?12:0)
t.m(new C.cpQ(t,r))
w=5
return A.b(C.BR(t.a.d,r),$async$kN)
case 5:t.x=f
o=t.a
w=6
return A.b(C.BS(o.d,o.c.a,"plant",Math.max(1,s*10-t.f*5)),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.cpR())
w=1
break
case 4:for(o=t.as,n=new A.dq(o,o.r,o.e);n.C();){q=n.d
q.r.t()
q.r=null
p=q.eN$
p.b=!1
B.d.a8(p.a)
p=p.gov()
if(p.a>0){p.b=p.c=p.d=p.e=null
p.a=0}q.dV$.a.a8(0)
q.qC()}o.a8(0)
t.m(new C.cpS(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r=this,q="Plant the Tree",p=null
if(r.ay){w=A.at(A.d(""+r.r+" branches grown",p,p,p,p,p,p,B.pR,p,p,p),p,p,p)
v=r.f
v=A.at(A.d(v===0?"Not one mistake!":""+v+" mistakes",p,p,p,p,p,p,D.Vo,p,p,p),p,p,p)
u=r.w
t=r.x
if(t===0)t=u
return new C.tE(q,A.cl(A.a([D.aeY,w,v,B.aR,new C.Iq(u,t,r.ch,p),B.aR,A.at(C.us("Back to the games",new C.cpI(d),B.cO,B.k3,D.fw),p,p,p)],x.p),p,p,B.ac,p,p,B.ah,!1),B.f5,p)}w=r.gkS()
v=r.e
s=w[v]
return new C.tE(q,new A.D(B.us,A.x(A.a([A.d("Round "+(v+1)+" of "+w.length+" \xb7 drag the children of "+s.a+" onto the branches",p,p,p,p,p,p,E.aUK,B.K,p,p),A.E(A.cs(new C.cpJ(r,s)),1)],x.p),B.m,p,B.e,B.i,0,B.p),p),B.f5,p)}}
C.bcc.prototype={
a4(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=null,b1=y.B,b2=a9.d,b3=new A.Y(b2,new C.cPN(),A.U(b2).k("Y<1>")).gI(0),b4=a9.b,b5=b4.a5(0,B.Jr)
$.Q()
w=A.K()
w.r=D.lC.j(0.18+0.1*b3).gp(0)
b6.N(b5,70+b3*10,w)
w=b7.a
b5=b7.b
v=b4.a5(0,D.eku)
u=A.K()
u.r=B.oh.j(0.5).gp(0)
u.c=10
u.d=B.bw
b6.ah(new A.o(w/2,b5*0.98),v,u)
for(v=a9.c,u=b4.a,b4=b4.b,t=b4+90,s=x.v,b4+=46,r=x.dc,q=x.U,p=0;p<v.length;++p){o=v[p]
n=o.a+0
m=B.dH.aA(0,B.j.E(b2[p],0,1))
l=$.Q().r
k=A.a([],s)
j=new A.aF(l,B.ai,b0,b0,k)
k.push(new A.aZ(u,b4))
j.ab()
o=new A.c5((u+n)/2,t,n,o.b+-46)
k.push(o)
n=j.f
if(n!=null)o.ak(n)
j.ab()
if(m<1)for(o=new A.aF(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),i=new A.ru(o,!1,n);i.C();){h=i.c
if(h===0||i.f)A.bi(A.jG(b1));--h
g=new A.BP(i,h)
f=0
for(;;){i.iw()
e=n[h].b
e===$&&A.c()
if(!(f<e.a.length()))break
i.iw()
e=n[h].b
e===$&&A.c()
e=Math.min(e.a.length(),f+7)
d=o.b
a0=A.a([],s)
$.Q()
a1=new A.ao(B.O,B.M,B.R,B.T,B.P)
a1.r=B.aV.gp(0)
a1.b=B.a9
a1.c=3
b6.af(new A.aF(l,d,b0,new A.cu([g,f,e,!0]),a0),a1)
f+=14}}if(m>0)for(o=new A.aF(l,j.b,j.c,b0,A.bq(k,!0,r)),n=A.a([],q),k=new A.ru(o,!1,n),i=m>0.4,h=9-3*m,e=11*m,d=6*m;k.C();){a0=k.c
if(a0===0||k.f)A.bi(A.jG(b1));--a0
k.iw()
a1=n[a0].b
a1===$&&A.c()
a1=a1.a.length()
a2=o.b
a3=A.a([],s)
$.Q()
a4=new A.ao(B.O,B.M,B.R,B.T,B.P)
a4.r=D.G9.gp(0)
a4.b=B.a9
a4.c=h
a4.d=B.bw
b6.af(new A.aF(l,a2,b0,new A.cu([new A.BP(k,a0),0,a1*m,!0]),a3),a4)
k.iw()
a4=n[a0].b
a4===$&&A.c()
a4=a4.a.length()
k.iw()
a5=n[a0].Dd(a4*m)
if(i)for(a0=a5.a,a1=a0.a,a0=a0.b,a6=0;a6<4;++a6){a7=a6*1.6+p
a2=A.bs(new A.o(a1+Math.cos(a7)*14,a0+Math.sin(a7)*10),d,e)
a3=new A.ao(B.O,B.M,B.R,B.T,B.P)
a3.r=B.b5.gp(0)
b6.bZ(a2,a3)}}}if(a9.e)for(b2=b5*0.3,p=0;p<6;++p){a8=new A.iH(D.flq,B.a5,B.bX,new A.jg(1),b0,b0,b0,b0,B.bY,b0,B.cr)
a8.e5()
a8.a4(b6,new A.o(w*(0.15+p*0.14),b2-B.o.F(p,3)*14))}},
aE(d){return!0}}
C.ayE.prototype={
S(){return new C.ayF(A.aR(x.S))},
gd1(){return this.d}}
C.ayF.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hEC(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
Y(){this.a2()
this.b8U()},
t(){var w=this.ch
if(w!=null)w.a1(0)
this.a3()},
b8U(){var w=this.ch
if(w!=null)w.a1(0)
this.ch=A.de(B.rL,new C.cEK(this))},
bpR(d){var w,v=this
if(v.as||v.z.q(0,d))return
w=v.gkS()[v.e]
if(w.e[d]===w.b)v.m(new C.cES(v,Math.max(10,100-25*(v.f-1)-15*v.z.a)))
else{v.m(new C.cET(v,d))
A.cy(B.iJ,new C.cEU(v))}},
cWu(){var w=this
if(!w.as&&w.f<w.gkS()[w.e].d.length)w.m(new C.cEV(w))},
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
t.m(new C.cEW(t,s))
w=5
return A.b(C.BR(t.a.d,s),$async$kN)
case 5:t.y=f
q=t.a
w=6
return A.b(C.BS(q.d,q.c.a,"who",t.r),$async$kN)
case 6:t.ax=f
if(t.c!=null)t.m(new C.cEX())
w=1
break
case 4:t.m(new C.cEY(t))
t.b8U()
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1="Who Am I?",a2=null
if(a0.at){w=A.at(A.d(""+a0.w+" of "+a0.gkS().length+" guessed",a2,a2,a2,a2,a2,a2,B.pR,a2,a2,a2),a2,a2,a2)
v=A.at(A.d(""+a0.r+" points",a2,a2,a2,a2,a2,a2,D.Vo,a2,a2,a2),a2,a2,a2)
u=a0.x
t=a0.y
if(t===0)t=u
return new C.tE(a1,A.cl(A.a([D.bcJ,w,v,B.aR,new C.Iq(u,t,a0.ax,a2),B.aR,A.at(C.us("Back to the games",new C.cEM(a3),B.cO,B.k3,D.fw),a2,a2,a2)],x.p),a2,a2,B.ac,a2,a2,B.ah,!1),B.f5,a2)}w=a0.as
s=w?0:Math.max(1,13-3.5*(a0.f-1))
r=w?0:Math.max(0.1,0.92-0.25*(a0.f-1))
w=a0.e
v=a0.gkS()
u=x.X
t=x.p
w=A.a([A.d("Person "+(w+1)+" of "+v.length,a2,a2,a2,a2,a2,a2,D.KI,B.K,a2,a2),B.X,A.at(A.lB(new C.cEN(a0,r),a2,B.b3,B.hD,a2,a2,new A.br(a2,s,u),x.i),a2,a2,a2),B.aB],t)
for(q=x.W,p=x.gW,o=0;n=a0.f,o<n;o=k){n=a0.e
m=new A.aO(16,16)
l=new A.ay(B.cO,2,B.r,-1)
k=o+1
w.push(new A.r2(new A.br(0,1,u),new C.cEO(),A.q(a2,new A.c7(B.aL,B.e,B.i,B.m,a2,B.p,a2,0,A.a([new A.qD(A.d(""+k,a2,a2,a2,a2,a2,a2,B.nW,a2,a2,a2),D.lB,a2,12,a2),B.au,new A.bz(1,B.bc,A.d(v[n].d[o],a2,a2,a2,a2,a2,a2,D.fy3,a2,a2,a2),a2)],t),a2),B.f,a2,a2,new A.p(D.qe,a2,new A.bH(l,l,l,l),new A.bf(m,m,m,m),a2,a2,B.n),a2,a2,a2,B.cx,B.bh,a2,a2,a2),B.b3,B.iJ,a2,new A.bO("clue-"+n+"-"+o,q),p))}if(!a0.as&&n<v[a0.e].d.length)w.push(A.at(A.bM(!1,D.fZa,a2,a2,!0,a2,a2,a2,a0.gcWt(),a2,a2),a2,a2,a2))
w.push(B.U)
if(a0.as){u=D.lC.j(0.2)
q=A.m(16)
p=A.L(D.lC,B.r,1)
n=a0.e
m=A.d("It is "+v[n].b+"!  +"+a0.ay,a2,a2,a2,a2,a2,a2,B.fA,a2,a2,a2)
v=n+1>=v.length?"See my result":"Next person"
w.push(A.q(a2,A.x(A.a([m,B.X,C.us(v,a0.gql(a0),B.cO,B.jE,D.fw)],t),B.m,a2,B.e,B.i,0,B.p),B.f,a2,a2,new A.p(u,a2,p,q,a2,a2,B.n),a2,a2,a2,a2,B.bE,a2,a2,a2))}else{t=A.a([],t)
for(n=a0.z,o=0;m=a0.e,o<v[m].e.length;++o){j=a0.Q===o
i=j?1:0
h=n.q(0,o)?B.dr:B.cO.j(0.2)
g=new A.aO(16,16)
l=new A.ay(n.q(0,o)?B.fg:B.cO,2,B.r,-1)
f=v[a0.e].e[o]
e=n.q(0,o)?B.bW:B.c
d=n.q(0,o)?B.xc:a2
t.push(new A.r2(new A.br(0,i,u),new C.cEP(),A.aA(a2,A.q(a2,A.d(f,a2,a2,a2,a2,a2,a2,new A.G(!0,e,a2,a2,a2,a2,16,B.u,a2,a2,a2,a2,a2,a2,a2,a2,a2,d,a2,a2,a2,a2,a2,a2,a2,a2),B.K,a2,a2),B.f,a2,D.ae7,new A.p(h,a2,new A.bH(l,l,l,l),new A.bf(g,g,g,g),a2,a2,B.n),a2,a2,a2,a2,B.jm,a2,a2,a2),B.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,new C.cEQ(a0,o),a2,a2,a2,a2,a2,a2,!1,B.a4),B.b3,B.m9,a2,new A.bO("opt-"+m+"-"+o+"-"+j,q),p))}w.push(A.bW(B.fM,t,B.bt,a2,10,10))}return new C.tE(a1,A.cl(w,a2,a2,B.alI,a2,a2,B.ah,!1),B.f5,a2)}}
C.azD.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aGP.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a3()}}
C.afz.prototype={
aqO(d){},
ark(){var w=this,v=w.pZ(new C.f62(w))
v.fX(0)
w.LS$!==$&&A.aQ()
w.LS$=v}}
C.aKB.prototype={
gbmi(d){var w=this.c
return B.a.aC(w,0,Math.min(this.d,w.length))},
VS(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.c=d
w.d=0
w.b=A.de(D.akK,new C.fgb(w))},
bse(d){var w=this,v=w.b
if(v!=null)v.a1(0)
w.d=w.c.length
w.a.$0()},
t(){var w=this.b
return w==null?null:w.a1(0)}}
C.alV.prototype={
S(){return new C.alW(new C.am4(),A.a([],x.t),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alW.prototype={
gMI(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDS(w.c,10,w.e,!0)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N_(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqt(){var w=this.r
return w===$?this.r=new C.aKB(new C.bSc(this)):w},
gapE(d){var w,v,u=A.a([],x.t)
for(w=this.w,v=0;v<w.length;++v)if(w[v]===this.gMI()[v].c)u.push(1)
return u.length},
gblB(){var w=this.ghb(0)
return w.gzk()==null?"Elder":B.a.i(w.gzk().b)},
Y(){this.a2()
this.ark()},
t(){var w,v=this
v.gqt().t()
v.f.t()
w=v.LS$
w===$&&A.c()
w.t()
w=v.q7$
w.T$=$.aw()
w.P$=0
v.bvX()},
cL7(){var w=this
w.m(new C.bS9(w))
w.gqt().VS(w.gMI()[w.x].a)},
KZ(d){var w,v=this,u=!0
if(v.Q)if(!v.as){u=v.gqt()
w=u.d
u=u.c
u=w<u.length||v.w.length>v.x}if(u)return
v.w.push(d)
u=v.q7$.a
v.ax=u
v.ay=u+1
v.m(new C.bS7())
A.cy(B.hD,new C.bS8(v))},
bpN(){var w=this.gapE(0)/this.gMI().length*100
if(w>=90)return D.eWc
if(w>=75)return D.eUe
if(w>=60)return D.eKV
if(w>=45)return D.eOj
return D.eFk},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.as)return n.ctE()
w=A.bR(0,new A.em(A.b4(m,m,m,new C.bsQ(n,n.q7$),B.az),m),0,0,0)
if(!n.Q){v=D.qe.j(0.96)
u=A.m(20)
t=A.L(B.cO,B.r,3)
u=A.q(m,A.x(A.a([A.d("Elder "+n.gblB()+" is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.",m,m,m,m,m,m,D.aVE,B.K,m,m),B.X,C.us("Start the test",n.gBQ(),B.cO,B.j2,D.fw)],x.p),B.m,m,B.e,B.Q,0,B.p),B.f,m,m,new A.p(v,m,t,u,m,m,B.n),m,m,m,m,B.bE,m,m,m)
v=u}else{v=n.x
u=n.gMI()
v=A.d("Question "+(v+1)+" of "+u.length,m,m,m,m,m,m,D.aVG,m,m,m)
if(n.Q){t=n.gqt()
t=t.d<t.c.length}else t=!1
if(t)u=D.fdW
else{t=n.x
s=A.a([],x.p)
for(r=0;q=u[n.x].b,r<q.length;++r){p=new A.aO(10,10)
o=new A.ay(D.Bw,4,B.r,-1)
s.push(A.aA(m,A.q(m,A.d(q[r],m,m,m,m,m,m,D.fpc,B.K,m,m),B.f,m,D.ae7,new A.p(D.bfC,m,new A.bH(o,o,o,o),new A.bf(p,p,p,p),m,m,B.n),m,m,m,m,B.O2,m,m,m),B.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.bSa(n,r),m,m,m,m,m,m,!1,B.a4))}u=A.bW(B.fM,s,B.bt,new A.bO("o"+t,x.W),8,8)}u=A.x(A.a([v,B.an,A.p7(u,B.mS,A.qx(),B.b3,B.b3,A.LA())],x.p),B.m,m,B.e,B.Q,0,B.p)
v=u}return new C.tE("Village School",new A.an(B.a0,m,B.ad,B.t,A.a([w,A.ap(10,v,m,m,10,10,m,m)],x.p),m),B.f5,m)},
ctE(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.bpN(),g=A.a([],x.t)
for(w=j.w,v=0;v<w.length;++v)if(w[v]!==j.gMI()[v].c)g.push(v)
u=A.m(22)
t=A.L(B.cO,B.r,4)
s=A.d(j.a.c.b,i,i,i,i,i,i,D.ftD,B.K,i,i)
r=A.d("Signed by Elder "+j.gblB(),i,i,i,i,i,i,D.fsh,i,i,i)
q=x.p
p=A.a([A.d(h.a,i,i,i,i,i,i,D.fxp,i,i,i),D.exf],q)
o=A.d(h.b,i,i,i,i,i,i,D.fzg,i,i,i)
n=j.gapE(0)
m=j.gMI()
u=A.q(i,A.x(A.a([D.fKo,B.ax,s,r,B.X,new A.an(B.A,i,B.ad,B.t,p,i),o,B.an,A.d(""+n+" of "+m.length+" right",i,i,i,i,i,i,D.abe,i,i,i),B.U,D.asr],q),B.m,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(D.qe,i,t,u,i,i,B.n),i,i,i,i,B.fr,i,i,i)
t=j.y
s=j.z
if(s===0)s=t
s=A.a([u,B.aB,new C.Iq(t,s,j.at,i)],q)
if(g.length!==0){u=A.a([B.aR,D.h_e,B.U],q)
for(t=g.length,l=0;l<g.length;g.length===t||(0,A.J)(g),++l){v=g[l]
r=new A.aO(14,14)
k=new A.ay(B.bA,1,B.r,-1)
p=m[v]
u.push(A.q(i,A.x(A.a([A.d(p.a,i,i,i,i,i,i,B.fW,i,i,i),B.ax,A.d("You said: "+p.b[w[v]],i,i,i,i,i,i,D.fuN,i,i,i),A.d(p.d,i,i,i,i,i,i,D.fx1,i,i,i)],q),B.E,i,B.e,B.i,0,B.p),B.f,i,i,new A.p(B.dr,i,new A.bH(k,k,k,k),new A.bf(r,r,r,r),i,i,B.n),i,i,i,B.cx,B.bh,i,i,i))}B.d.v(s,u)}s.push(B.aB)
s.push(A.at(C.us("Back to the games",new C.bS3(j),B.cO,B.k3,D.fw),i,i,i))
return new C.tE("Village School",A.cl(s,i,i,B.bR,i,i,B.ah,!1),B.f5,i)}}
C.bsQ.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=this.b,d=e.q7$.a
a0.zj(e.f.Ms(a1))
w=C.hbq(a1)
v=a0.c
J.bo(v.save())
v.translate(w.a,w.b)
a0.bU(0,w.c)
if(e.Q){u=e.gqt()
t=u.d<u.c.length}else t=!1
for(s=0;s<2;++s){u=D.cWs[s]-6
$.Q()
r=new A.ao(B.O,B.M,B.R,B.T,B.P)
r.r=D.FX.gp(0)
a0.ar(new A.a1(u,340,u+12,450),r)}u=A.bl(D.a9f.cn(10),B.hZ)
$.Q()
r=A.K()
r.r=D.Bw.gp(0)
a0.am(u,r)
r=A.bl(D.a9f,B.hP)
u=A.K()
u.sav(A.jy(new A.o(30,96),new A.o(420,346),D.deX,f,B.x,f))
a0.am(r,u)
q=new A.e4()
q.d_(2)
for(p=0;p<18;++p){u=q.ai()
r=q.ai()
o=q.ai()
o=A.bs(new A.o(30+u*390,96+r*250),8+q.ai()*14,30+o*60)
r=new A.ao(B.O,B.M,B.R,B.T,B.P)
r.r=B.c.j(0.025).gp(0)
a0.bZ(o,r)}u=A.K()
u.r=I.aiw.gp(0)
a0.ar(new A.a1(30,354,420,362),u)
u=A.K()
u.r=B.aQ.gp(0)
a0.ar(D.f5j,u)
u=A.K()
u.r=B.bN.gp(0)
a0.ar(D.f5n,u)
u=A.bl(D.f5d,B.hO)
r=A.K()
r.r=D.Z7.gp(0)
a0.am(u,r)
n=B.j.E((d-e.ax)/0.7,0,1)
if(e.Q){u=e.gqt().gbmi(0)
m=A.fq(f,B.cr,f,7,f,A.cP(f,f,f,f,f,f,f,f,f,D.fBt,u+(t?"|":"")),B.a5,B.bX,f,B.dz,B.bY)
m.o5(346)
J.bo(v.save())
u=A.hR(D.a9f)
r=$.mf()
v.clipRect(u,r[1],!0)
u=n<1
if(u&&e.w.length>e.x)v.clipRect(A.hR(new A.a1(30+390*n,96,420,346)),r[1],!0)
m.a4(a0,new A.o(52,118))
v.restore()
if(n>0&&u){u=30+390*n-20
r=126+40*Math.sin(n*9)
r=A.bl(new A.a1(u,r,u+40,r+90),B.fI)
u=A.K()
u.r=D.buU.gp(0)
a0.am(r,u)}}else{m=A.fq(f,B.cr,f,f,f,D.flG,B.K,B.bX,f,B.dz,B.bY)
m.o5(340)
m.a4(a0,new A.o(55,176))}if(t)for(u=d*1.2,r=d*3,p=0;p<8;++p){l=B.j.F(u+p/8,1)
o=B.o.F(e.gqt().d*9,310)
k=Math.sin(p+r)
j=new A.ao(B.O,B.M,B.R,B.T,B.P)
j.r=B.c.j(0.7*(1-l)).gp(0)
a0.N(new A.o(70+o+k*6,166+l*70),1.6,j)}u=e.ghb(0).gzk()
i=(u==null?f:u.c)===D.oq?1:0
h=d<e.ay
g=A.a([new A.y(470,new C.f63(d,a0,i,t,h,D.elE)),new A.y(520,new C.f64(a0,d,t)),new A.y(575,new C.f65(a0,d,t)),new A.y(585,new C.f66(this,a0,d,t)),new A.y(615,new C.f67(this,t,a0,d,h))],x.E)
B.d.aZ(g,new C.f68())
for(s=0;s<5;++s)g[s].b.$0()
v.restore()},
cbI(d,e){var w,v,u,t,s,r,q,p=$.Q(),o=A.a([],x.v),n=new A.aF(p.r,B.ai,null,null,o)
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
n.ab()}}n.D(new A.bu())
return n},
aE(d){return!1}}
C.alT.prototype={
S(){return new C.alU(new C.am4(),A.T(x.S,x.i),new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alU.prototype={
gkS(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.hDw(w.c,w.e)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
gj1(){var w=this.z
return w===$?this.z=this.FF(0):w},
gaLt(){var w,v,u,t,s=this,r=s.Q
if(r===$){w=A.a([],x.n)
v=0
for(;;){r=s.z
if(r===$){r=s.z=s.FF(0)
u=r}else u=r
if(!(v<r.length))break
t=B.d.co(u,v)
r=s.z
w.push(450*(t+0.5)/(r===$?s.z=s.FF(0):r).length);++v}s.Q=w
r=w}return r},
FF(d){var w,v,u,t,s=this.gkS()
if(d>=s.length)return A.a([],x.t)
w=s[d].d.length
s=J.e2(w,x.S)
for(v=0;v<w;++v)s[v]=v
u=new A.e4()
u.d_(this.a.e+d*7)
B.d.e0(s,u)
if(w>1){u=A.a([],x.t)
for(v=0;v<w;++v)u.push(s[v]===v?1:0)
u=B.d.f1(u,new C.bRQ())===w}else u=!1
if(u){t=s[0]
s[0]=s[1]
s[1]=t}return s},
Y(){this.a2()
this.ark()},
t(){var w,v=this
v.e.t()
w=v.LS$
w===$&&A.c()
w.t()
w=v.q7$
w.T$=$.aw()
w.P$=0
v.bvW()},
aqO(d){var w,v,u,t,s,r=this,q=r.gj1().length
for(w=d*9,v=0;v<q;++v){u=r.z
t=B.d.co(u===$?r.z=r.FF(0):u,v)
s=r.gaLt()
s[v]=s[v]+(450*(t+0.5)/q-r.gaLt()[v])*Math.min(1,w)}},
d0P(d){var w,v=this
if(v.at||v.ay||d<0||d>=v.gj1().length)return
w=v.y
if(w===-1){v.m(new C.bS0(v,d))
return}if(w===d){v.m(new C.bS1(v))
return}v.m(new C.bS2(v,B.d.co(v.gj1(),v.y),d,B.d.co(v.gj1(),d)))},
cLP(d){var w,v,u,t,s=this
if(s.at||s.ay)return
w=A.a([],x.f7)
v=0
for(;;){u=s.z
if(!(v<(u===$?s.z=s.FF(0):u).length))break
t=s.gkS()[s.f]
u=s.z
w.push(t.e[(u===$?s.z=s.FF(0):u)[v]]===v);++v}s.m(new C.bRW(s,B.d.cD(w,new C.bRX())))},
kN(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$kN=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.f
q=t.gkS().length
w=r+1>=q?3:4
break
case 3:r=t.r
q=r===q?15:0
s=r*10+q
t.m(new C.bRY(t,s))
w=5
return A.b(C.BR(t.a.d,s),$async$kN)
case 5:t.x=f
q=t.a
w=6
return A.b(C.BS(q.d,q.c.a,"lineup",t.r*10),$async$kN)
case 6:t.ch=f
if(t.c!=null)t.m(new C.bRZ())
w=1
break
case 4:t.m(new C.bS_(t))
case 1:return A.h(u,v)}})
return A.i($async$kN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null
if(l.ay){w=A.at(A.d(""+l.r+" of "+l.gkS().length+" lines right",k,k,k,k,k,k,B.pR,k,k,k),k,k,k)
v=l.w
u=l.x
if(u===0)u=v
return new C.tE("Line Up",A.cl(A.a([D.aeY,w,B.aR,new C.Iq(v,u,l.ch,k),B.aR,A.at(C.us("Back to the games",new C.bRS(d),B.cO,B.k3,D.fw),k,k,k)],x.p),k,k,B.ac,k,k,B.ah,!1),B.f5,k)}w=A.a([],x.t)
for(t=0;v=l.gkS(),t<v[l.f].d.length;++t)w.push(t)
B.d.aZ(w,new C.bRT(l))
u=A.bR(0,A.cs(new C.bRU(l)),0,0,0)
s=l.f
r=A.d("Round "+(s+1)+" of "+v.length,k,k,k,k,k,k,D.aVG,k,k,k)
s=v[s]
q=x.p
s=A.ap(k,A.x(A.a([r,A.d(s.a,k,k,k,k,k,k,D.fu3,B.K,k,k),A.d(s.b,k,k,k,k,k,k,D.fwg,B.K,k,k)],q),B.m,k,B.e,B.i,0,B.p),k,k,12,12,4,k)
r=A.a([],q)
if(l.at){p=B.w.j(0.7)
o=A.m(16)
n=l.ax
m=A.L(n?D.lC:G.nm,B.r,2)
r.push(A.q(k,A.d(n?"Yes! That is the right line. The whole village cheers.":"Not quite. The right line is: "+new A.N(w,new C.bRV(l),x.cM).aN(0,", then ")+".",k,k,k,k,k,k,D.fyq,k,k,k),B.f,k,k,new A.p(p,k,m,o,k,k,B.n),k,k,k,B.d3,B.bh,k,k,1/0))}if(!l.at)r.push(C.us("That is my line!",l.gcLO(l),B.cO,B.hG,D.fw))
else{w=l.f+1>=v.length?"See my result":"Next family"
r.push(C.us(w,l.gql(l),B.cO,B.jE,D.fw))}return new C.tE("Line Up",new A.an(B.a0,k,B.ad,B.t,A.a([u,s,A.ap(12,A.x(r,B.m,k,B.e,B.Q,0,B.p),k,k,12,12,k,k)],q),k),B.f5,k)}}
C.bjn.prototype={
a4(c7,c8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4=null,c5=this.b,c6=c5.q7$.a
c7.zj(c5.e.Ms(c8))
w=C.hbq(c8)
v=c7.c
J.bo(v.save())
v.translate(w.a,w.b)
c7.bU(0,w.c)
u=c5.gj1().length
t=$.Q().r
s=x.v
r=new A.aF(t,B.ai,c4,c4,A.a([],s))
r.D(new A.aZ(10,470))
r.D(new A.c5(225,500,440,470))
q=A.K()
q.r=D.Z7.gp(0)
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
m=new A.bu()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=[B.cO,G.nm,D.lC,B.aI][B.o.F(p,4)].gp(0)
c7.af(k,m)}this.b10(c7,"OLDEST",D.emC,B.cO)
this.b10(c7,"YOUNGEST",D.em4,B.b5)
t=A.bl(D.f57,B.fI)
s=A.K()
s.r=D.FX.gp(0)
c7.am(t,s)
s=A.bl(D.f56,B.hP)
t=A.K()
t.r=D.Bw.gp(0)
c7.am(s,t)
i=c6<c5.CW
h=c6<c5.cx
g=u>=5?0.92:1.12
t=A.a([],x.t)
for(f=0;f<u;++f)t.push(f)
B.d.aZ(t,new C.dr2())
for(s=t.length,q=440/u-8,m=c6*10,l=!i,k=c5.as,j=c6*9,e=c6*8,d=c6*12,a0=0;a0<t.length;t.length===s||(0,A.J)(t),++a0){f=t[a0]
a1=c5.z
a2=B.d.co(a1===$?c5.z=c5.FF(0):a1,f)
o=c5.gaLt()[f]
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
a9=new A.ao(B.O,B.M,B.R,B.T,B.P)
a9.r=B.cO.j(0.22+0.1*Math.sin(e)).gp(0)
c7.N(new A.o(o,520),54,a9)}a9=D.diL[B.o.F(b0,6)]
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
else b9=a3?D.eoJ:c4
if(b1)c0=new A.o(3+b2*8,-56)
else if(h&&a7)c0=D.aLB
else c0=a3?new A.o(30,-104+Math.sin(e)*5):c4
C.Su(c7,new A.o(o,612),b8,b5,(225-o)/225*0.5,-0.3,b9,c0,D.Jt,a9,b4,0,g,b3,b6,c6,b7)
a8=a8[c5.f].d[f]
c1=new A.iH(new A.en(a8,c4,c4,B.cJ,c4,c4,c4,c4,c4,c4,D.frO),B.a5,B.bX,new A.jg(1),"\u2026",c4,1,c4,B.bY,c4,B.cr)
c1.o5(q)
c2=A.bl(A.bs(new A.o(o,650),24,c1.b.c+16),B.fI)
$.Q()
a8=new A.ao(B.O,B.M,B.R,B.T,B.P)
if(a6)a9=B.i7
else a9=a7?B.rF:D.qe
a8.r=a9.gp(0)
c7.am(c2,a8)
a8=new A.ao(B.O,B.M,B.R,B.T,B.P)
if(a6)a9=D.lC
else a9=a7?G.nm:D.lB
a8.r=a9.gp(0)
a8.b=B.a9
a8.c=2
c7.am(c2,a8)
a8=c1.b
a9=a8.c
a8=a8.a.c
c1.a4(c7,new A.o(o-a9/2,650-a8.gba(a8)/2))
c3=new A.iH(new A.en(""+(a2+1),c4,c4,B.cJ,c4,c4,c4,c4,c4,c4,D.fs6),B.a5,B.bX,new A.jg(1),c4,c4,c4,c4,B.bY,c4,B.cr)
c3.e5()
c3.a4(c7,new A.o(o-c3.b.c/2,668))}if(i)for(c5=c6*2,t=c6*120,s=c6*4,p=0;p<26;++p){o=B.j.F(p*53+Math.sin(c5+p)*20,450)
q=B.j.F(t+p*37,420)
J.bo(v.save())
v.translate(o,140+q)
v.rotate((s+p)*180/3.141592653589793,0,0)
q=A.bs(B.I,4,8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=[B.cO,G.nm,D.lC,B.aI,B.c][B.o.F(p,5)].gp(0)
c7.ar(q,m)
v.restore()}v.restore()},
b10(d,e,f,g){var w,v,u=null,t=A.fq(u,B.cr,u,u,u,A.cP(u,u,u,u,u,u,u,u,u,A.l(u,u,g,u,u,u,u,u,u,u,u,13,u,u,B.u,u,u,!0,u,2,u,u,u,I.Dj,u,u),e),B.a5,B.bX,u,B.dz,B.bY)
t.e5()
w=t.b
v=w.c
w=w.a.c
t.a4(d,f.aJ(0,new A.o(v/2,w.gba(w)/2)))},
aE(d){return!1}}
C.a20.prototype={
a7(){return"_Trip."+this.b}}
C.alP.prototype={
S(){return new C.alQ(D.X3,new A.eA(0,$.aw()),$,0,null,null)},
gd1(){return this.d}}
C.alQ.prototype={
gDq(){var w,v,u=this,t=u.d
if(t===$){w=u.a
v=C.bDS(w.c,8,w.e,!1)
u.d!==$&&A.bF()
u.d=v
t=v}return t},
ghb(d){var w,v=this,u=v.e
if(u===$){w=C.N_(v.a.c)
v.e!==$&&A.bF()
v.e=w
u=w}return u},
gqt(){var w=this.f
return w===$?this.f=new C.aKB(new C.bRC(this)):w},
gTS(){var w=this.ghb(0)
return w.gzk()==null?"Grandma":B.a.i(w.gzk().b)},
Y(){this.a2()
this.ark()},
t(){var w,v=this
v.gqt().t()
w=v.LS$
w===$&&A.c()
w.t()
w=v.q7$
w.T$=$.aw()
w.P$=0
v.bvV()},
aqO(d){var w,v,u,t=this
if(t.r!==D.acY)return
w=B.dC.aA(0,B.j.E((t.cy+=d)/t.db,0,1))
v=t.cx
t.CW=v+520*w
if(t.cy>=t.db){t.CW=v+520
v=t.w
u=t.gDq()
if(v+1>=u.length){t.r=D.acZ
t.WO()}else{++t.w
t.ay=!1
t.r=D.X4
t.gqt().VS(u[t.w].a)}if(t.c!=null)t.m(new C.bRA())}},
WO(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$WO=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.gqt().VS("Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.")
t=u.x
s=u.gDq().length
r=C.bG5(t,u.z,s)
u.as=r
w=2
return A.b(C.BR(u.a.d,r),$async$WO)
case 2:u.at=e
s=u.a
w=3
return A.b(C.BS(s.d,s.c.a,"journey",u.x*10),$async$WO)
case 3:u.ch=e
if(u.c!=null)u.m(new C.bRu())
return A.h(null,v)}})
return A.i($async$WO,v)},
br6(){this.aU8()},
aU8(){var w=this
w.cx=w.CW
w.cy=0
w.db=w.ay?3.4:2.6
w.r=D.acY
if(w.c!=null)w.m(new C.bRv())},
KZ(d){var w,v,u,t,s=this
if(s.r!==D.X4)return
w=s.gDq()
v=d===w[s.w].c
if(v){++s.x
u=++s.y
s.z=Math.max(s.z,u)}else{s.y=0
s.ay=!0}s.m(new C.bRz(s,d,v))
u=s.gqt()
t=s.w
u.VS(v?"Hongera! "+w[t].d+" Beep beep, off you go!":"Pole, the tyre is flat! Listen: "+w[t].d+" We will limp on slowly.")},
cR0(){if(this.r!==D.B4)return
this.aU8()},
B(d){var w,v,u,t=this,s=null,r=A.bR(0,new A.em(A.b4(s,s,s,new C.biO(t,t.q7$),B.az),s),0,0,0),q=x.p,p=A.a([],q)
for(w=0;w<=t.gDq().length;++w){v=t.w
if(w<v||t.r===D.acZ)v=B.cO
else v=w===v?B.c:B.aV
u=new A.aO(4,4)
p.push(new A.bz(1,B.bc,A.q(s,s,B.f,s,s,new A.p(v,s,s,new A.bf(u,u,u,u),s,s,B.n),s,7,s,B.wl,s,s,s,s),s))}p.push(B.bm)
p.push(D.fM0)
return new C.tE("Safari Journey",new A.an(B.a0,s,B.ad,B.t,A.a([r,A.ap(s,A.A(p,B.m,s,B.e,B.i,0,s,s),s,s,12,12,2,s),A.ap(10,t.clh(),s,s,10,10,s,s)],q),s),B.f5,s)},
clh(){var w,v,u,t,s,r,q,p,o=this,n=null,m=new C.bRy(o),l=D.qe.j(0.96),k=A.m(22),j=A.L(B.cO,B.r,3)
switch(o.r.a){case 0:w=A.x(A.a([A.d("A long drive to the village of Elder "+o.gTS()+". At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!",n,n,n,n,n,n,D.aVE,B.K,n,n),B.X,C.us("Start the journey",o.gbr5(),B.cO,D.bPC,D.fw)],x.p),B.m,n,B.e,B.Q,0,B.p)
break
case 3:w=D.bci
break
case 1:w=o.w
v=o.gDq()
w=m.$1("Stop "+(w+1)+" of "+v.length+" \xb7 a villager asks")
u=x.p
t=A.a([],u)
for(s=0;r=v[o.w].b,s<r.length;++s){q=new A.aO(14,14)
p=new A.ay(D.lB,2.5,B.r,-1)
t.push(A.aA(n,A.q(n,A.d(r[s],n,n,n,n,n,n,D.aV1,B.K,n,n),B.f,n,D.aee,new A.p(D.ajH,n,new A.bH(p,p,p,p),new A.bf(q,q,q,q),n,n,B.n),n,n,n,n,V.wh,n,n,n),B.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.bRw(o,s),n,n,n,n,n,n,!1,B.a4))}w=A.x(A.a([w,B.U,A.bW(B.bH,t,B.bt,n,8,8)],u),B.E,n,B.e,B.Q,0,B.p)
break
case 2:w=m.$1(o.ax?"The villager cheers":"A flat tyre!")
v=o.w+1>=o.gDq().length?"Drive home":"Drive on"
v=A.x(A.a([w,B.U,new A.bL(B.aa,n,n,C.us(v,o.gcR_(),B.cO,B.jE,D.fw),n)],x.p),B.E,n,B.e,B.Q,0,B.p)
w=v
break
case 4:w=A.a([m.$1("Elder "+o.gTS()),B.U,A.d(""+o.x+" of "+o.gDq().length+" right  \xb7  +"+o.as+" \u2b50",n,n,n,n,n,n,D.aVk,n,n,n)],x.p)
v=o.at
if(v>0){v=C.aQz(v)
u=C.aQz(o.at)
t=o.at
r=o.ch?" \xb7 \ud83c\udfc6 new record!":""
w.push(A.d(v.b+" "+u.a+" \xb7 "+t+" stars"+r,n,n,n,n,n,n,D.abe,n,n,n))}w.push(B.U)
w.push(A.at(C.us("Back to the games",new C.bRx(o),B.cO,B.k3,D.fw),n,n,n))
w=A.x(w,B.E,n,B.e,B.Q,0,B.p)
break
default:w=n}return A.q(n,w,B.f,n,n,new A.p(l,n,j,k,D.aCV,n,B.n),n,n,n,n,B.bh,n,n,n)}}
C.biO.prototype={
a4(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=null,c4=this.b,c5=c4.q7$.a,c6=d4.a,c7=d4.b,c8=c4.CW,c9=c4.gDq(),d0=B.j.E(c8/(520*(c9.length+1)),0,1),d1=c4.r===D.acY,d2=c7*0.5
c8=A.ar(D.bh4,D.brp,d0)
c8.toString
w=A.ar(D.Yk,G.ahi,d0)
w.toString
v=A.ar(B.u1,D.bpR,d0)
v.toString
$.Q()
u=A.K()
t=x.O
u.sav(A.jy(B.I,new A.o(0,d2),A.a([c8,w,v],t),G.a4b,B.x,c3))
d3.ar(new A.a1(0,0,0+c6,0+c7),u)
s=new A.o(c6*(0.15+0.7*d0),d2*(0.28+0.45*d0*d0))
u=A.K()
u.sav(A.w8(s,60,A.a([D.bqf,B.L],t),c3,B.x,c3,c3,0))
d3.N(s,60,u)
u=A.K()
u.r=B.Yw.gp(0)
d3.N(s,22,u)
for(c8=c5*4,w=c6+240,v=c7*0.06,r=0;r<5;++r){q=B.j.F(r*190-c4.CW*0.06-c8,w)-120
p=v+B.o.F(r,3)*22
for(o=0;o<4;++o){n=D.dxY[o]
$.Q()
u=new A.ao(B.O,B.M,B.R,B.T,B.P)
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
k=new A.ao(B.O,B.M,B.R,B.T,B.P)
k.r=A.ar(l===0?D.bfE:D.bul,D.bkx,w).gp(0)
d3.af(i,k)}for(w=d2+2,r=0;r<8;++r)this.cbJ(d3,new A.o(B.j.F(B.j.F(r*300-c4.CW*0.5,2400)+2400,2400)-150,w),(r&1)===0,d0)
$.Q()
w=A.K()
v=A.ar(D.aiQ,D.G9,d0)
v.toString
w.sav(A.jy(new A.o(0,d2),new A.o(0,c7),A.a([v,D.bqh],t),c3,B.x,c3))
d3.ar(new A.a1(0,d2,c6,c7),w)
a0=c7*0.56
a1=c7*0.66
w=A.K()
w.r=D.bjR.gp(0)
d3.ar(new A.a1(0,a0,c6,a1),w)
w=A.K()
w.r=D.bu1.gp(0)
d3.ar(new A.a1(0,a0-3,c6,a0),w)
for(q=-B.j.F(c4.CW,70),w=(a0+a1)/2-2,v=w+4;q<c6;q+=70){u=new A.ao(B.O,B.M,B.R,B.T,B.P)
u.r=I.My.gp(0)
d3.ar(new A.a1(q,w,q+36,v),u)}for(w=a0-6,v=w-36,u=v+36,t=w-34,k=c6*0.62,j=c6+160,h=c5*3,g=c5*6,f=w+40,e=w-20,d=e+20,a2=w-56,a3=a2+56,a4=w-66,a5=a4+20,a6=w-72,r=0;a7=c9.length,r<=a7;r=a8){a8=r+1
q=k+a8*520-c4.CW
if(q<-160||q>j)continue
a7=r===a7
a9=q+40
b0=a9-26
b1=$.Q()
b2=new A.ao(B.O,B.M,B.R,B.T,B.P)
b2.r=D.bfj.gp(0)
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
b0=new A.bu()
b2.push(b0)
b2=b1.f
if(b2!=null)b0.ak(b2)
b1.ab()
b0=new A.ao(B.O,B.M,B.R,B.T,B.P)
b0.r=D.bsf.gp(0)
d3.af(b1,b0)
b0=a9-6
b1=new A.ao(B.O,B.M,B.R,B.T,B.P)
b1.r=D.fw.gp(0)
d3.ar(new A.a1(b0,e,b0+12,d),b1)
b4=q-36
b1=b4-2
b0=new A.ao(B.O,B.M,B.R,B.T,B.P)
b0.r=D.FX.gp(0)
d3.ar(new A.a1(b1,a2,b1+4,a3),b0)
b0=b4-30
b5=A.bl(new A.a1(b0,a4,b0+60,a5),B.iw)
b0=new A.ao(B.O,B.M,B.R,B.T,B.P)
b0.r=D.bvp.gp(0)
d3.am(b5,b0)
b0=new A.ao(B.O,B.M,B.R,B.T,B.P)
b0.r=D.Bw.gp(0)
b0.b=B.a9
b0.c=2
d3.am(b5,b0)
b6=a7?"HOME":"STOP "+a8
b7=new A.iH(new A.en(b6,c3,c3,B.cJ,c3,c3,c3,c3,c3,c3,D.fqh),B.a5,B.bX,new A.jg(1),c3,c3,c3,c3,B.bY,c3,B.cr)
b7.e5()
b0=b7.b
b1=b0.c
b0=b0.a.c
b7.a4(d3,new A.o(b4-b1/2,a2-b0.gba(b0)/2))
if(a7)b8=c4.r===D.acZ
else if(r===c4.w){b0=c4.r
b0=b0===D.X4||b0===D.B4
b8=b0}else b8=!1
if(a7){b0=c4.ghb(0).gzk()
b9=(b0==null?c3:b0.c)===D.oq?1:0}else b9=[0,3,6,7,2,1,4,5][B.o.F(r,8)]
b0=c4.gqt()
c0=b0.d<b0.c.length&&b8
c1=b8&&c4.r===D.B4
b0=c0?C.hzW(c5,r):0
if(c1)b1=c4.ax?1:-0.3
else b1=a7&&b8?1:0.4
b2=b8&&c4.r===D.X4?0.4:0
b3=c1&&c4.ax?0.5:0
if(a7&&b8)a7=new A.o(40,-110+Math.sin(g)*10)
else a7=c0?new A.o(44+Math.sin(h)*8,-66+Math.sin(c8)*10):c3
C.Su(d3,new A.o(q+4,f),0,b2,-0.8,-0.2,c3,a7,new A.o(q-200,w),b9,b0,0,0.85,b1,b3,c5+r,-0.3)}c9=c6*0.28
this.bIa(d3,new A.o(c9,a1-6),c5,d1,d4)
if(d1)for(w=c5*1.6,v=c9-90,u=a1-10,r=0;r<7;++r){c2=B.j.F(w+r/7,1)
$.Q()
t=new A.ao(B.O,B.M,B.R,B.T,B.P)
t.r=D.btw.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v-c2*70,u-c2*18),6+c2*16,t)}if(c4.ay&&c4.r!==D.X3)for(w=c5*1.2,v=c9+62,u=a1-40,r=0;r<5;++r){c2=B.j.F(w+r/5,1)
t=Math.sin(r+c8)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=B.c.j(0.5*(1-c2)).gp(0)
d3.N(new A.o(v+t*5,u-c2*50),4+c2*10,m)}if(c4.r===D.B4&&c4.ax){b7=A.fq(c3,B.cr,c3,c3,c3,A.cP(c3,c3,c3,c3,c3,c3,c3,c3,c3,A.l(c3,c3,B.cO,c3,c3,c3,c3,c3,c3,c3,c3,24,c3,c3,B.u,c3,c3,!0,c3,c3,c3,c3,c3,A7.Iv,c3,c3),"BEEP BEEP!"),B.a5,B.bX,c3,B.dz,B.bY)
b7.e5()
b7.a4(d3,new A.o(c9-b7.b.c/2+40,a0-96-Math.abs(Math.sin(c5*9))*6))}},
cbJ(d,e,f,g){var w,v,u,t,s,r,q,p,o=A.ar(D.bpL,D.bj9,g)
o.toString
if(f){w=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
v=e.a
u=e.b
w.D(new A.aZ(v-16,u))
t=u-36
s=u-56
w.D(new A.c5(v-9,t,v-7,s))
w.D(new A.aq(v+7,s))
w.D(new A.c5(v+9,t,v+16,u))
w.D(new A.bu())
t=A.K()
t.r=D.Zy.gp(0)
d.af(w,t)
for(w=v+0,t=u+-54,s=u+-72,u+=-76,r=0;r<4;++r){q=D.d_q[r]
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=D.Zy.gp(0)
p.c=4
p.d=B.bw
d.ah(new A.o(w,t),new A.o(v+q*24,s),p)
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=o.gp(0)
d.N(new A.o(v+q*26,u),10,p)}}else{w=e.a5(0,D.eoG)
$.Q()
v=A.K()
v.r=D.bfl.gp(0)
v.c=4
d.ah(e,w,v)
v=A.bs(e.a5(0,D.eoH),16,60)
w=A.K()
w.r=o.gp(0)
d.bZ(v,w)}},
bIa(a2,a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5?Math.sin(a4*22)*1.6:Math.sin(a4*2)*0.4,d=this.b,a0=d.ay&&d.r!==D.X3?0.045:0,a1=a2.c
J.bo(a1.save())
a1.translate(a3.a,a3.b+e)
a2.hW(0,a0)
for(w=0;w<2;++w){v=D.dqr[w]
u=d.ay&&d.r!==D.X3&&v>0
J.bo(a1.save())
a1.translate(v,-4+(u?4:0))
t=u?15:18
$.Q()
s=new A.ao(B.O,B.M,B.R,B.T,B.P)
s.r=D.bud.gp(0)
a2.N(B.I,t,s)
a1.rotate(d.CW/18*180/3.141592653589793,0,0)
s=new A.ao(B.O,B.M,B.R,B.T,B.P)
s.r=D.bmB.gp(0)
a2.N(B.I,9,s)
for(r=0;r<4;++r){t=r*3.141592653589793/2
s=Math.cos(t)
t=Math.sin(t)
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.r=B.bq.gp(0)
q.c=2
a2.ah(B.I,new A.o(s*9,t*9),q)}a1.restore()}p=A.u1(D.f5u,B.fI,B.fI,B.ik,B.hN)
$.Q()
t=A.K()
t.sav(A.jy(D.ekK,B.a89,D.dgi,G.a4b,B.x,f))
a2.am(p,t)
for(o=0;o<20;++o){t=-100+o*10
s=new A.ao(B.O,B.M,B.R,B.T,B.P)
s.r=D.dao[B.o.F(o,4)].gp(0)
a2.ar(new A.a1(t,-26,t+10,-19),s)}n=d.r===D.B4&&d.ax
m=[2,3,4,5]
for(t=a4*10,o=0;o<4;++o){s=-88+o*38
q=s+32
l=new A.a1(s,-66,q,-36)
J.bo(a1.save())
a1.clipRRect(A.nO(A.bl(l,B.mu)),$.no(),!0)
k=new A.ao(B.O,B.M,B.R,B.T,B.P)
k.r=D.Yk.gp(0)
a2.ar(l,k)
k=m[o]
j=n?1:0.35
i=n?0.5:0
h=d.ay&&d.r===D.B4?1:0
g=n?Math.max(0,Math.sin(t+o))*6:0
C.Su(a2,new A.o(s+(q-s)/2,-10),g,h,0.5,-0.2,f,f,D.aLs,k,i,0,0.4,j,0,a4,0)
a1.restore()
j=A.bl(l,B.mu)
i=new A.ao(B.O,B.M,B.R,B.T,B.P)
i.r=D.ajJ.gp(0)
i.b=B.a9
i.c=2
a2.am(j,i)}d=A.bl(D.Uu,B.mu)
t=A.K()
t.r=D.Yk.gp(0)
a2.am(d,t)
J.bo(a1.save())
a1.clipRRect(A.nO(A.bl(D.Uu,B.mu)),$.no(),!0)
C.Su(a2,new A.o(D.Uu.gbw().a,-10),0,0,0.7,-0.1,f,f,D.aLs,6,0,0,0.4,0.5,0,a4,0)
a1.restore()
t=A.bl(D.Uu,B.mu)
d=A.K()
d.r=D.ajJ.gp(0)
d.b=B.a9
d.c=2
a2.am(t,d)
d=A.K()
d.r=Ao.Ga.gp(0)
a2.N(D.emQ,4,d)
d=A.K()
d.r=D.FX.gp(0)
a2.ar(D.f6D,d)
for(w=0;w<3;++w){v=D.dqt[w]
d=A.bl(new A.a1(v,-96,v+28,-79),B.iw)
t=new A.ao(B.O,B.M,B.R,B.T,B.P)
t.r=D.G9.gp(0)
a2.am(d,t)}a1.restore()},
aE(d){return!1}}
C.aBq.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bgl.prototype={}
C.aBs.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bgm.prototype={}
C.aBt.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bgn.prototype={}
C.a6p.prototype={
B(d){var w=null
return new A.a5(1/0,this.c,A.b4(w,w,w,new C.biV(w),B.az),w)}}
C.biV.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=a0.b,e=f*1.1
for(w=a0.a,v=e+0.5,u=0+f,t=e*0.15,s=f/2,r=e/2,q=f*0.8,p=e*0.85,o=x.v,f*=0.2,n=0,m=0;m<w;m+=e){l=D.dop[B.o.F(n,6)]
k=$.Q()
j=new A.ao(B.O,B.M,B.R,B.T,B.P)
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
k=new A.bu()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new A.ao(B.O,B.M,B.R,B.T,B.P)
k.r=B.c.j(0.85).gp(0)
d.af(i,k)}++n}},
aE(d){return!1}}
C.tE.prototype={
B(d){var w=null,v=x.p,u=A.a([A.aG(w,w,w,w,B.PS,w,w,w,new C.bRt(d),w,w,w,w,w,w),A.E(A.d(this.c,w,1,B.a2,w,w,w,D.fny,w,w,w),1)],v)
B.d.v(u,this.e)
return A.c4(w,D.Y5,A.q(w,A.bn(!0,A.x(A.a([D.c44,new A.D(D.bGw,A.A(u,B.m,w,B.e,B.i,0,w,w),w),A.E(this.d,1)],v),B.m,w,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),B.f,w,w,D.b7M,w,w,w,w,w,w,w,w),w,!1,!1,w,w)}}
C.Iq.prototype={
B(d){var w=null,v=this.d,u=C.aQz(v),t=C.iia(v),s=B.c.j(0.08),r=A.m(18),q=A.L(B.cO.j(0.6),B.r,1.5),p=A.a([A.d("+"+this.c+" \u2b50 Family Stars",w,w,w,w,w,w,D.fq2,w,w,w)],x.p)
if(this.e)p.push(D.er8)
p.push(B.an)
p.push(A.d(u.b+" "+u.a+"  \xb7  "+v+" stars",w,w,w,w,w,w,B.fW,w,w,w))
if(t!=null)p.push(new A.D(B.uq,A.d(""+(t.c-v)+" more stars for "+t.b+" "+t.a,w,w,w,w,w,w,B.AJ,w,w,w),w))
return A.q(w,A.x(p,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(s,w,q,r,w,w,B.n),w,w,w,w,B.bE,w,w,w)}}
C.Wd.prototype={
S(){return new C.blF(A.T(x.N,x.S),B.o.F(Date.now(),1e5))},
cXT(d){return this.f.$1(d)},
ge3(){return this.d}}
C.blF.prototype={
gSR(){var w=this.d
return w===$?this.d=this.a.c:w},
Y(){this.a2()
this.Pr()},
Pr(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$Pr=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.bSe(u.a.d),$async$Pr)
case 2:n=e
t=u.f,s=0
case 3:if(!(s<8)){w=5
break}r=D.del[s]
q=u.a
p=q.d
o=u.d
m=t
l=r
w=6
return A.b(C.bSd(p,(o===$?u.d=q.c:o).a,r),$async$Pr)
case 6:m.n(0,l,e)
case 4:++s
w=3
break
case 5:if(u.c!=null)u.m(new C.e0U(u,n))
return A.h(null,v)}})
return A.i($async$Pr,v)},
uv(d){return this.cok(d)},
cok(d){var w=0,v=A.j(x.H),u=this,t
var $async$uv=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return A.b(A.a6(t,!1).cd(A.eb(new C.e0V(d),!1,null,x.H)),$async$uv)
case 2:u.r=B.o.F(Date.now(),1e5)
if(u.c!=null)u.Pr()
return A.h(null,v)}})
return A.i($async$uv,v)},
gb6i(){var w,v,u,t=C.N_(this.gSR()),s=A.a([],x.s)
for(w=t.b,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)s.push(B.a.i(w[u].b))
return s},
a2l(d){return this.cvx(d)},
cvx(d){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a2l=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=A.a([],x.Y)
for(t=d.length,s=0;s<d.length;d.length===t||(0,A.J)(d),++s)r.push(d[s].aj())
w=2
return A.b(u.a.cXT(r),$async$a2l)
case 2:if(u.c!=null)u.m(new C.e0W(u,r))
return A.h(null,v)}})
return A.i($async$a2l,v)},
OL(d){return this.bQQ(d)},
bQQ(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$OL=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:j=C.hdG(t.gSR())
if(d==null){s=Date.now()
r=A.a([],x.b)
q=new C.MJ("g"+s,"",r)}else q=d
s=t.c
s.toString
r=x.fH
w=3
return A.b(A.a6(s,!1).cd(A.eb(new C.e0S(q),!1,null,r)),$async$OL)
case 3:p=f
if(p==null){w=1
break}s=A.a([],x.c)
for(o=j.length,n=p.a,m=0;m<j.length;j.length===o||(0,A.J)(j),++m){l=j[m]
if(l.a!==n)s.push(l)}k=B.d.bj(j,new C.e0T(p))
o=s.length
B.d.c4(s,k<0?o:Math.min(k,o),p)
w=4
return A.b(t.a2l(A.cW(s,0,A.dA(2,"count",x.S),r).dm(0)),$async$OL)
case 4:case 1:return A.h(u,v)}})
return A.i($async$OL,v)},
XK(d,e){return this.bOp(0,e)},
bOp(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o
var $async$XK=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:o=u.c
o.toString
w=4
return A.b(A.ce(null,null,!0,null,new C.e0R(e),o,null,!0,!0,x.y),$async$XK)
case 4:w=g===!0?2:3
break
case 2:o=A.a([],x.c)
for(t=C.hdG(u.gSR()),s=t.length,r=e.a,q=0;q<t.length;t.length===s||(0,A.J)(t),++q){p=t[q]
if(p.a!==r)o.push(p)}w=5
return A.b(u.a2l(o),$async$XK)
case 5:case 3:return A.h(null,v)}})
return A.i($async$XK,v)},
aa0(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p=null,o=h==null,n=o?new C.e0O(this,j):h
o=o?0.55:1
w=A.ar(g,B.w,0.45)
w.toString
w=A.a([g,w],x.O)
v=A.m(20)
u=A.L(B.aV,B.r,1)
t=A.a([new A.ac(0,B.G,g.j(0.35),B.cA,12)],x.V)
s=x.p
r=A.a([A.d(d,p,p,p,p,p,p,B.Vj,p,p,p),B.b4],s)
q=A.m(10)
r.push(A.q(p,A.d(i,p,p,p,p,p,p,D.fos,p,p,p),B.f,p,p,new A.p(B.hq,p,p,q,p,p,B.n),p,p,p,p,B.Ck,p,p,p))
return A.aA(p,A.da(A.q(p,A.x(A.a([A.A(r,B.m,p,B.e,B.i,0,p,p),B.b4,A.d(e,p,2,p,p,p,p,D.fw9,p,p,p),B.cU,A.d(f,p,3,B.a2,p,p,p,D.fpa,p,p,p)],s),B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(p,p,u,v,t,new A.a9(B.aA,B.aF,B.x,w,p,p),B.n),p,p,p,p,B.yD,p,p,p),o),B.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,n,p,p,p,p,p,p,!1,B.a4)},
Xd(d,e,f,g,h,i){return this.aa0(d,e,f,g,h,i,null)},
B(a2){var w,v,u,t,s=this,r=null,q=C.N_(s.gSR()),p=s.gSR(),o=C.aQz(s.e),n=C.hdG(p),m=s.a.e&&J.ad(p.z)<2,l=new C.e0X(s),k=C.hDw(p,1).length,j=C.hDI(p,1).length,i=C.hEC(p,1).length,h=B.c.j(0.07),g=A.m(20),f=A.L(B.cO.j(0.5),B.r,1),e=A.d(o.b,r,r,r,r,r,r,K.ab3,r,r,r),d=A.d(o.a,r,r,r,r,r,r,D.ftH,r,r,r),a0=q.b.length,a1=x.p
g=A.q(r,A.A(A.a([e,B.bd,A.E(A.x(A.a([d,A.d(a0>=3?"The games are made from the "+a0+" people in this tree.":"Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.",r,r,r,r,r,r,K.ab_,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),1),A.x(A.a([A.d(""+s.e,r,r,r,r,r,r,B.pR,r,r,r),D.fSk],a1),B.m,r,B.e,B.i,0,B.p)],a1),B.m,r,B.e,B.i,0,r,r),B.f,r,r,new A.p(h,r,f,g,r,r,B.n),r,r,r,r,B.bE,r,r,r)
f=s.Xd("\ud83c\udfaf","Family Kahoot","Race the clock. Answer fast, keep a streak, climb the podium against your family.",B.aE,new C.e0Y(s,p),l.$1("kahoot"))
h=s.Xd("\ud83d\udd25","Fireside Stories","Sit by the fire in the village. The elder teaches, the children answer.",D.lB,new C.e0Z(s,p),l.$1("fire"))
a0=s.Xd("\ud83e\uddfa","Calabash Catch","Gourds with the answers fall from the baobab. Slide the basket under the right one!",B.BT,new C.e1_(s,p),l.$1("catch"))
j=j!==0?new C.e12(s,p):r
j=s.aa0("\ud83c\udf31","Plant the Tree","Drag the children onto the branches under their parent and watch the tree grow.",B.hm,j,l.$1("plant"),"Add a parent with two children, and one more person.")
i=i!==0?new C.e13(s,p):r
i=s.aa0("\ud83c\udfad","Who Am I?","A shadow turns into a face as the clues come. Who is hiding in it?",B.kJ,i,l.$1("who"),"Add at least 3 people with some facts about them (parents, jobs, birthplaces).")
e=s.Xd("\ud83d\ude8c","Safari Journey","Ride a bus across the savanna to the elder village. A villager asks a question at every stop. A wrong answer is a flat tyre!",B.eV,new C.e14(s,p),l.$1("journey"))
k=k!==0?new C.e15(s,p):r
k=A.a([g,B.aR,D.fWj,B.U,A.kU(0.98,A.a([f,h,a0,j,i,e,s.aa0("\ud83c\udf33","Line Up","The family stands under the baobab. Swap them into a line, oldest to youngest.",B.eo,k,l.$1("lineup"),"Add a parent with two children, or a family with more than one generation."),s.Xd("\ud83c\udfeb","Village School","Sit with the children while the elder writes the questions on the chalkboard. A real test with a report card.",B.cZ,new C.e16(s,p),l.$1("school"))],a1),2,12,12,r,B.dV,!0),B.d8,A.A(A.a([D.bIn,A.d(""+n.length+" of 2",r,r,r,r,r,r,D.fow,r,r,r)],a1),B.m,r,B.e,B.i,0,r,r),B.U],a1)
for(j=n.length,w=0;i=n.length,w<i;n.length===j||(0,A.J)(n),++w){v=n[w]
i=B.c.j(0.07)
h=new A.aO(18,18)
u=new A.ay(B.aV,1,B.r,-1)
g=B.a.i(v.b)
g=A.a([D.fD2,B.bd,new A.bz(1,B.bc,A.x(A.a([A.d(g.length===0?"Untitled game":g,r,1,B.a2,r,r,r,B.hi,r,r,r),A.d(""+v.gapi(0).length+" questions \xb7 Kahoot style",r,r,r,r,r,r,B.AJ,r,r,r)],a1),B.E,r,B.e,B.i,0,B.p),r)],a1)
if(v.gapi(0).length>=2){f=D.lC.j(0.2)
t=new A.ay(D.lC,1,B.r,-1)
g.push(A.aA(r,A.q(r,A.X(B.hu,D.lC,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bH(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e17(s,v,p),r,r,r,r,r,r,!1,B.a4))}if(s.a.e){f=B.cO.j(0.2)
t=new A.ay(B.cO,1,B.r,-1)
f=A.aA(r,A.q(r,A.X(B.j2,B.cO,r,r,r,20),B.f,r,r,new A.p(f,r,new A.bH(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e18(s,v),r,r,r,r,r,r,!1,B.a4)
e=B.fg.j(0.2)
t=new A.ay(B.fg,1,B.r,-1)
B.d.v(g,A.a([B.bm,f,B.bm,A.aA(r,A.q(r,A.X(B.eg,B.fg,r,r,r,20),B.f,r,r,new A.p(e,r,new A.bH(t,t,t,t),r,r,r,B.a7),r,38,r,r,r,r,r,38),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e19(s,v),r,r,r,r,r,r,!1,B.a4)],a1))}k.push(A.q(r,new A.c7(B.aL,B.e,B.i,B.m,r,B.p,r,0,g,r),B.f,r,r,new A.p(i,r,new A.bH(u,u,u,u),new A.bf(h,h,h,h),r,r,B.n),r,r,r,B.d3,B.bh,r,r,r))}if(s.a.e){j=m?new C.e10(s):new C.e11(a2)
i=A.m(18)
h=A.L(m?B.cO:B.aV,B.r,2)
g=m?B.cO.j(0.12):B.dr
f=m?"\uff0b Make your own game  ("+(2-n.length)+" left)":"Both games are made"
k.push(A.aA(r,A.q(r,A.at(A.d(f,r,r,r,r,r,r,A.l(r,r,m?B.cO:B.aD,r,r,r,r,r,r,r,r,15,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),r,r,r),B.f,r,r,new A.p(g,r,h,i,r,r,B.n),r,r,r,r,B.NR,r,r,r),B.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,j,r,r,r,r,r,r,!1,B.a4))}else if(i===0)k.push(D.fXf)
k.push(B.aB)
k.push(D.asr)
return new C.tE("Family Games \xb7 "+p.b,A.cl(k,r,r,D.bCw,r,r,B.ah,!1),B.f5,r)}}
C.a_T.prototype={
a7(){return"_KPhase."+this.b}}
C.alR.prototype={
S(){return new C.alS(D.b_L)},
gd1(){return this.e}}
C.alS.prototype={
t(){var w=this.at
if(w!=null)w.a1(0)
w=this.ax
if(w!=null)w.a1(0)
this.a3()},
fX(d){var w,v=this
v.m(new C.bRO(v))
w=v.at
if(w!=null)w.a1(0)
v.at=A.de(B.fF,new C.bRP(v))},
aPG(){var w=this,v=w.ax
if(v!=null)v.a1(0)
w.m(new C.bRE(w))
v=w.at
if(v!=null)v.a1(0)
w.at=A.de(B.fe,new C.bRF(w))},
KZ(d){var w
if(this.d!==D.acu)return
w=this.at
if(w!=null)w.a1(0)
this.b6e(d)},
b6e(d){var w,v=this,u={},t=v.a.w[v.e]
u.a=0
if(d===t.c){w=++v.r
v.w=Math.max(v.w,w);++v.x
w=B.j.V(500+500*B.j.E(v.as/t.r,0,1))+100*Math.min(w-1,5)
u.a=w
v.f+=w}else v.r=0
v.m(new C.bRK(u,v,d))
u=v.ax
if(u!=null)u.a1(0)
v.ax=A.cy(B.rL,v.giv(v))},
cKr(d){var w=this
if(w.d!==D.WC)return
if(w.e+1>=w.a.w.length)w.Yv()
else{w.m(new C.bRL(w))
w.aPG()}},
Yv(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$Yv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=u.ax
if(p!=null)p.a1(0)
p=u.x
t=u.a.w.length
s=C.bG5(p,u.w,t)
u.m(new C.bRH(u,s))
w=2
return A.b(C.BR(u.a.e,s),$async$Yv)
case 2:r=e
t=u.a
w=3
return A.b(C.BS(t.e,t.f,t.r,u.f),$async$Yv)
case 3:q=e
if(u.c!=null)u.m(new C.bRI(u,r,q))
return A.h(null,v)}})
return A.i($async$Yv,v)},
cLg(){var w,v,u,t,s=this,r=s.a,q=new A.e4()
q.d_(r.w.length*31+B.a.gX(r.f))
w=s.a.w.length*900
v=A.a([new A.b5("You",s.f,!0)],x.bd)
r=A.C(s.a.x,x.N)
B.d.e0(r,q)
for(r=A.cW(r,0,A.dA(4,"count",x.S),A.U(r).c),u=r.$ti,r=new A.bP(r,r.gI(0),u.k("bP<ak.E>")),u=u.k("ak.E");r.C();){t=r.d
if(t==null)t=u.a(t)
v.push(new A.b5(t,B.j.V(w*(0.35+q.ai()*0.5)),!1))}B.d.aZ(v,new C.bRM())
return v},
B(d){var w,v,u=this,t=null,s=u.a.c,r=u.d
A:{if(D.b_L===r){w=A.a([D.fSJ,B.X,A.d(s,t,t,t,t,t,t,B.KL,B.K,t,t)],x.p)
v=u.a.d
if(v.length!==0)w.push(A.d(v,t,t,t,t,t,t,D.foE,t,t,t))
w.push(B.aB)
w.push(A.d(""+u.a.w.length+" questions. The faster you answer, the more points you win. Keep a streak for a bonus.",t,t,t,t,t,t,B.xj,B.K,t,t))
w.push(B.dX)
w.push(C.us("Play",u.geY(u),B.cO,B.hu,D.fw))
w=A.at(new A.D(B.ex,A.x(w,B.m,t,B.e,B.Q,0,B.p),t),t,t,t)
break A}if(D.b_M===r){w=A.at(A.d(""+u.z,t,t,t,t,t,t,D.fwG,t,t,t),t,t,t)
break A}if(D.acu===r||D.WC===r){w=u.cqW()
break A}if(D.b_N===r){w=u.cbK()
break A}w=t}return new C.tE(s,w,B.f5,t)},
cqW(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d===D.WC,h=k.y,g=k.a.w,f=k.e,e=h===g[f].c
h=x.p
g=A.a([A.d(""+(f+1)+"/"+g.length,j,j,j,j,j,j,D.aUP,j,j,j),B.b4],h)
f=k.r
if(f>=2)g.push(A.d("\ud83d\udd25 "+f+" in a row",j,j,j,j,j,j,D.KI,j,j,j))
g.push(B.au)
f=A.m(14)
g.push(A.q(j,A.d(""+k.f,j,j,j,j,j,j,B.ix,j,j,j),B.f,j,j,new A.p(B.bA,j,j,f,j,j,B.n),j,j,j,j,B.GI,j,j,j))
g=A.A(g,B.m,j,B.e,B.i,0,j,j)
f=A.m(6)
w=i?0:B.j.E(k.as/k.a.w[k.e].r,0,1)
f=A.by(f,A.kn(B.bA,j,k.as<5?B.fg:B.cO,9,j,w,j),B.aq)
w=A.m(22)
v=A.L(B.cO,B.r,3)
if(i){if(k.y<0)u="Time's up!"
else u=e?"Correct! +"+k.Q:"Not this time"
u=A.x(A.a([A.d(u,j,j,j,j,j,j,A.l(j,j,e?D.lC:G.nm,j,j,j,j,j,j,j,j,24,j,j,B.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),B.U,A.d(k.a.w[k.e].d,j,j,j,j,j,j,D.fnH,B.K,j,j)],h),B.m,j,B.e,B.Q,0,B.p)}else u=A.d(k.a.w[k.e].a,j,j,j,j,j,j,D.fyO,B.K,j,j)
w=A.E(A.q(j,A.at(u,j,j,j),B.f,j,j,new A.p(D.qe,j,v,w,j,j,B.n),j,j,j,j,B.fr,j,j,1/0),3)
v=A.a([],h)
for(u=k.giv(k),t=0;s=k.a.w[k.e],r=s.b,t<r.length;++t){q=i?u:new C.bRJ(k,t)
p=i&&t!==s.c&&t!==k.y?0.3:1
o=B.o.F(t,4)
n=D.aCy[o]
m=new A.aO(16,16)
l=new A.ay(i&&t===s.c?B.c:B.L,4,B.r,-1)
r=A.a([A.d(D.aCS[o],j,j,j,j,j,j,D.fpE,j,j,j),B.au,new A.bz(1,B.bc,A.d(r[t],j,3,B.a2,j,j,j,D.foB,j,j,j),j)],h)
if(i&&t===k.a.w[k.e].c)r.push(Q.aqY)
if(i&&t===k.y&&t!==k.a.w[k.e].c)r.push(D.bWY)
v.push(A.aA(j,new A.SK(A.q(j,new A.c7(B.aL,B.e,B.i,B.m,j,B.p,j,0,r,j),B.f,j,j,new A.p(n,j,new A.bH(l,l,l,l),new A.bf(m,m,m,m),W.aAW,j,B.n),j,j,j,j,B.f2,j,j,j),p,B.b3,B.a3,j,j),B.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,!1,B.a4))}h=A.a([g,B.an,f,B.af,w,B.af,A.E(A.kU(1.45,v,2,10,10,j,B.dV,!1),4)],h)
if(i)h.push(D.eqo)
return new A.D(B.a07,A.x(h,B.m,j,B.e,B.i,0,B.p),j)},
cbK(){var w,v,u,t,s,r,q,p=this,o=null,n=p.cLg(),m=x.p,l=A.a([D.bbA,A.at(A.d(""+p.x+" of "+p.a.w.length+" right",o,o,o,o,o,o,B.pR,o,o,o),o,o,o),A.at(A.d(""+p.f+" points \xb7 best streak "+p.w,o,o,o,o,o,o,D.Vo,o,o,o),o,o,o),B.aR],m)
for(w=0;w<n.length;++w){v=n[w].c?B.cO.j(0.25):B.dr
u=new A.aO(14,14)
t=n[w]
s=t.c
r=new A.ay(s?B.cO:B.bA,1,B.r,-1)
q=A.d(w<3?D.dgA[w]:""+(w+1),o,o,o,o,o,o,B.nc,o,o,o)
s=s?B.u:B.V
l.push(A.q(o,new A.c7(B.aL,B.e,B.i,B.m,o,B.p,o,0,A.a([new A.a5(34,o,q,o),new A.bz(1,B.bc,A.d(t.a,o,o,o,o,o,o,new A.G(!0,B.c,o,o,o,o,16,s,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o),o),A.d(""+t.b,o,o,o,o,o,o,B.ix,o,o,o)],m),o),B.f,o,o,new A.p(v,o,new A.bH(r,r,r,r),new A.bf(u,u,u,u),o,o,B.n),o,o,o,B.cx,B.eW,o,o,o))}l.push(B.X)
m=p.ay
v=p.ch
if(v===0)v=m
l.push(new C.Iq(m,v,p.CW,o))
l.push(B.aR)
l.push(A.at(C.us("Back to the games",new C.bRG(p),B.cO,B.k3,D.fw),o,o,o))
return A.cl(l,o,o,B.fr,o,o,B.ah,!1)}}
C.TU.prototype={
S(){return new C.alO(A.T(x.de,x.er))}}
C.alO.prototype={
gD2(){var w,v=this,u=v.d
if(u===$){w=C.hjt(v.a.c.aj())
v.d!==$&&A.bF()
v.d=w
u=w}return u},
glR(d){var w,v,u=this,t=u.e
if(t===$){w=u.gD2().b
v=$.aw()
u.e!==$&&A.bF()
t=u.e=new A.au(new A.ba(w,B.b6,B.aP),v)}return t},
ceK(d){return this.f.c3(0,d,new C.bRe(d))},
Y(){this.a2()
var w=this.gD2().c
if(w.length===0)w.push(C.h5c(null,0,20,""))},
t(){var w,v,u=this.glR(0)
u.T$=$.aw()
u.P$=0
for(u=this.f,u=new A.dq(u,u.r,u.e);u.C();)for(w=J.aU(u.d);w.C();){v=w.gR(w)
v.T$=$.aw()
v.P$=0}this.a3()},
cKh(){if(this.gD2().c.length>=12)return
this.m(new C.bRf(this))},
jH(d){var w,v,u=this,t=u.gD2()
t.b=B.a.i(u.glR(0).a.a)
w=t.gapi(0)
if(t.b.length===0||w.length<2){u.c.L(x.q).f.U(D.fgF)
return}v=t.c
B.d.a8(v)
B.d.v(v,w)
v=u.c
v.toString
A.a6(v,!1).O(t)},
B(d){var w,v,u=this,t=null,s=new C.bRp(),r=x.p,q=A.a([A.bM(!1,D.fHZ,t,t,!0,t,t,t,u.gbpY(u),t,t)],r),p=A.a([D.fWR,B.af,A.aM(t,B.Z,!1,t,!0,B.t,t,A.aN(),u.glR(0),t,t,t,t,t,2,s.$1("Name of the game"),B.y,!0,t,!0,t,!1,t,B.ak,t,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.ac,t,t,t,t,t,t,t,t,t,t,t,B.fW,!0,B.a5,t,B.ao,t,t,t,t),B.aB],r)
for(w=0;v=u.gD2().c.length,w<v;++w)B.d.v(p,A.a([new A.ff(new C.bRo(u,w,s),t)],r))
if(v<12)p.push(A.at(C.us("\uff0b Add a question",u.gcKg(),B.aV,t,B.c),t,t,t))
return new C.tE("Make your game",A.cl(p,t,t,D.bCt,t,t,B.ah,!1),q,t)}}
C.aqS.prototype={
S(){return new C.aEY(A.a([],x._))},
bv(){return this.r.$0()},
qm(){return this.w.$0()},
ge3(){return this.c}}
C.aEY.prototype={
Y(){var w,v
this.a2()
this.ws()
w=this.a
v=w.c
if(v.length!==0)C.a86(v,w.e,w.d.w)},
wi(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$wi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hgh(r,t.e,!1,s.w,new C.e2z(u),null,s),$async$wi)
case 2:w=3
return A.b(u.ws(),$async$wi)
case 3:return A.h(null,v)}})
return A.i($async$wi,v)},
a0x(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$a0x=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=u.c
r.toString
t=u.a
s=t.d
w=2
return A.b(C.hgh(r,t.e,!0,s.w,new C.e2y(u),null,s),$async$a0x)
case 2:w=3
return A.b(u.ws(),$async$a0x)
case 3:return A.h(null,v)}})
return A.i($async$a0x,v)},
ws(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k
var $async$ws=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Bl(q.a.c),$async$ws)
case 7:p=e
if(q.c!=null)n=q.e||J.cI(p)
else n=!1
if(n)q.m(new C.e2B(q,p))
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
return A.b(C.Hi(q.a.c).dg(0,B.qq),$async$ws)
case 12:o=e
if(q.c==null){r=[1]
w=10
break}q.m(new C.e2C(q,o))
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
if(q.c!=null&&q.e)q.m(new C.e2D(q))
w=r.pop()
break
case 11:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$ws,v)},
P6(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$P6=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.c
if(o==null){w=1
break}s=x.q
o.L(s).f.U(D.fgf)
w=3
return A.b(C.Hi(t.a.c),$async$P6)
case 3:r=e
w=4
return A.b(C.fVU(t.a.c,r),$async$P6)
case 4:q=e
w=5
return A.b(C.Hi(t.a.c),$async$P6)
case 5:p=e
if(t.c==null){w=1
break}t.m(new C.e2x(t,p))
o=t.c.L(s).f
s=A.d(q?"Family trees synced \u2014 "+J.ad(t.d)+" tree(s) on this phone and in the database.":"Could not sync to database. Run supabase/family_trees_table.sql in Supabase, then try again.",null,null,null,null,null,null,null,null,null,null)
o.U(A.b3(null,null,null,q?B.dI:B.cY,null,B.t,null,s,null,B.mV,null,null,null,null,null,null,null,null,null,null))
t.a.qm()
case 1:return A.h(u,v)}})
return A.i($async$P6,v)},
Iq(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Iq=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iqW(l),$async$Iq)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s.a)
if(r.length===0){w=1
break}q=C.hTN(t.a.e)
l=t.c
l.toString
p=t.a
o=p.d
w=4
return A.b(C.b0Y(q,p.e,l,"Each family tree costs $"+B.j.ad(q,2)+" (one-time per tree).",t.a.f,"Create Family Tree",o),$async$Iq)
case 4:if(!e||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
p=C.hA5(r)
o=Date.now()
n=t.a.c
m=new C.kT(l,r.toUpperCase(),p,!0,B.Z,D.Dt,new A.V(o,0,!1),0,n,D.uy,B.cc)
w=5
return A.b(C.a3P(n,m),$async$Iq)
case 5:w=6
return A.b(t.ws(),$async$Iq)
case 6:t.a.bv()
t.a.qm()
if(t.c==null){w=1
break}t.F_(m)
case 1:return A.h(u,v)}})
return A.i($async$Iq,v)},
F_(d){return this.cjE(d)},
cjE(d){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m,l,k
var $async$F_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=A
k=J
w=2
return A.b(C.Bl(u.a.c),$async$F_)
case 2:n=l.nz(k.dI(f,new C.e2A(d)))
m=u.c
m.toString
t=u.a
s=t.c
r=t.d
q=t.e
p=t.f
t=t.r
w=3
return A.b(A.hE(m,new C.aqM(s,r,q,p,t,n==null?d:n,null),!1,"NgmyFamilyTreeDetailScreen",x.k),$async$F_)
case 3:o=f
w=o!=null?4:5
break
case 4:w=6
return A.b(C.a3P(u.a.c,o),$async$F_)
case 6:case 5:w=7
return A.b(u.ws(),$async$F_)
case 7:u.a.qm()
return A.h(null,v)}})
return A.i($async$F_,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=new C.ug(p)
if(r.e)return A.at(A.n3(q,p?B.bu:B.bq,q,q,q,q,q,q,q,q),q,q,q)
if(J.cr(r.d)){w=p?B.e9:B.c
v=A.m(15)
u=A.aJ(!1,B.a3,!0,q,A.aP(!1,q,!0,A.q(q,D.bUE,B.f,q,q,new A.p(B.aY.j(0.12),q,A.L(B.aY,B.r,2),q,q,q,B.a7),q,52,q,q,q,q,q,52),B.cR,!0,q,q,q,q,q,q,q,q,q,q,q,r.gciI(),q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)
t=A.d("No Family Trees Yet",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.as,q,q,q,q,q,q,q,q,18,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
return new C.Gj(A.q(q,A.x(A.a([u,B.aR,t,B.U,A.d("Create a family tree with names, photos, notes, and generations.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bq,q,q,q,q,q,q,q,q,14,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q),B.dX,A.bI(D.h_4,q,r.gaSW(),A.bp(B.bQ,q,q,q,q,q,Ax.a0w,q,new A.b9(A.m(12),B.a1),q,q,q))],x.p),B.m,q,B.e,B.i,0,B.p),B.f,q,q,new A.p(w,q,q,v,q,q,B.n),q,q,q,q,D.bFd,q,q,1/0),15,B.ag,1.05,D.acg,q)}w=J.ad(r.d)
v=x.p
w=A.a([A.d("Family Trees ("+w+")",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.as,q,q,q,q,q,q,q,q,16,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.b4],v)
if(J.cI(r.d))w.push(A.aG(q,q,q,q,A.X(B.zq,B.aY,q,q,q,q),q,q,q,new C.e2F(r),q,q,q,q,"Sync family trees with database",q))
if(J.cI(r.d))w.push(A.aG(q,q,q,q,A.X(B.zk,B.aY,q,q,q,q),q,q,q,r.gagO(),q,q,q,q,"Transfer / backup file",q))
w.push(A.dh(E.arS,D.fFk,r.gaSW(),A.bp(B.bQ,q,q,q,q,q,q,q,q,q,q,q)))
p=A.A(w,B.m,q,B.e,B.i,0,q,q)
w=A.a([],v)
for(s=0;s<J.ad(r.d);++s){u=A.a([],v)
if(s>0)u.push(B.af)
u.push(new C.Gj(r.cGq(J.t(r.d,s),o),14,B.ag,1,D.acg,q))
B.d.v(w,u)}return A.x(A.a([p,B.aB,A.x(w,B.m,q,B.e,B.i,0,B.p)],v),B.E,q,B.e,B.i,0,B.p)},
cGq(d,e){var w=null,v=e.a,u=v?B.e9:B.c,t=A.m(14),s=A.L((v?B.ef:B.bP).j(0.55),B.r,1),r=A.a([new A.ac(0,B.G,B.w.j(v?0.35:0.08),B.er,10)],x.V),q=A.m(14),p=A.q(w,D.bTI,B.f,w,w,new A.p(B.aY.j(0.15),w,w,A.m(12),w,w,B.n),w,48,w,w,w,w,w,48),o=A.d(d.b,w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.as,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),n=d.gaqi(),m=d.d?"":" \xb7 Public",l=d.y===D.kV?" \xb7 View only":"",k=x.p
l=A.E(A.x(A.a([o,B.bG,A.d(""+n+" members \xb7 Code: "+d.c+m+l,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],k),B.E,w,B.e,B.i,0,B.p),1)
return A.q(w,A.aJ(!1,B.a3,!0,w,A.aP(!1,q,!0,new A.D(B.bE,A.A(A.a([p,B.bd,l,A.X(B.OK,v?B.bu:B.bq,w,w,w,w)],k),B.m,w,B.e,B.i,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.e2E(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj),B.f,w,w,new A.p(u,w,s,t,r,w,B.n),w,w,w,w,w,w,w,1/0)}}
C.aqM.prototype={
S(){return new C.aEV(A.a([],x._),A.aR(x.N),A.b9G())},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aEV.prototype={
Y(){var w,v,u=this
u.a2()
u.d=u.a.w
u.adu()
w=u.a
v=w.c
if(v.length!==0)C.a86(v,w.e,w.d.w)},
t(){var w=this.w
w.T$=$.aw()
w.P$=0
this.a3()},
a3v(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a3v=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!t.a.d.w){t.ys("Only an admin can make a family tree public or private.")
w=1
break}s=t.d
s===$&&A.c()
r=!s.d
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e2_(r),s,null,!0,!0,x.y),$async$a3v)
case 3:if(e!==!0||t.c==null){w=1
break}t.JX()
t.m(new C.e20(t,r))
w=4
return A.b(t.ur(),$async$a3v)
case 4:t.a.bv()
t.ys(r?"Family tree is now private.":"Family tree is now public for all users.")
case 1:return A.h(u,v)}})
return A.i($async$a3v,v)},
cw6(d,e,f){var w=this,v=w.y,u=w.d
u===$&&A.c()
u=u.a
if(v===u&&w.x)return
w.x=!0
w.y=u
$.aW.x1$.push(new C.e1V(w,f,d,e))},
aVd(d,e,f){var w,v,u=d.a,t=e.a,s=d.b,r=e.b,q=Math.min(1,Math.max(0.45,Math.min(u/t,s/r)))
t*=q
w=t<=u?(u-t)/2:u/2-f*q
u=r*q
v=u<=s?(s-u)/2:8
u=A.dr()
u.eg(w,v,0,1)
u.k5(q,q,1,1)
this.w.sp(0,u)},
bcR(d,e){var w,v,u,t,s=this.w,r=s.a,q=new A.eK(new Float64Array(16))
q.e7(r)
w=q.D7()
v=B.j.E(w*d,0.2,3)/w
r=e.a/2
u=e.b/2
t=A.dr()
t.eg(r,u,0,1)
t.k5(v,v,1,1)
t.eg(-r,-u,0,1)
t.iW(0,q)
s.sp(0,t)},
adu(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$adu=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=A
r=J
w=2
return A.b(C.Bl(u.a.c),$async$adu)
case 2:t=s.nz(r.dI(e,new C.e1m(u)))
if(t!=null&&u.c!=null)u.m(new C.e1n(u,t))
return A.h(null,v)}})
return A.i($async$adu,v)},
ys(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
wi(){var w=0,v=A.j(x.H),u=this,t,s,r,q,p,o,n,m
var $async$wi=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=u.c
o.toString
t=u.a
s=t.d
t=t.e
r=s.w
q=u.d
q===$&&A.c()
w=2
return A.b(C.hgh(o,t,!1,r,new C.e1E(u),q.a,s),$async$wi)
case 2:n=A
m=J
w=3
return A.b(C.Hi(u.a.c),$async$wi)
case 3:p=n.nz(m.dI(e,new C.e1F(u)))
if(p!=null&&u.c!=null)u.m(new C.e1G(u,p))
return A.h(null,v)}})
return A.i($async$wi,v)},
JX(){var w=this.e,v=this.d
v===$&&A.c()
w.push(v)
if(w.length>25)B.d.cA(w,0)},
ur(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ur=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.a3P(t,s),$async$ur)
case 2:return A.h(null,v)}})
return A.i($async$ur,v)},
a21(){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a21=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:q=t.d
q===$&&A.c()
if(!C.ut(q,t.a.c)){t.ys("View only \u2014 you cannot rename this shared tree.")
w=1
break}q=t.c
q.toString
w=3
return A.b(C.is6(q,"Save",t.d.b,"Family tree name","Edit family tree name"),$async$a21)
case 3:s=e
if(s==null||t.c==null){w=1
break}r=B.a.i(s).toUpperCase()
if(r.length===0){w=1
break}t.JX()
t.m(new C.e1U(t,r))
w=4
return A.b(t.ur(),$async$a21)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a21,v)},
b2X(){var w=this.c
w.toString
A.a6(w,!1).cd(A.eb(new C.e1B(this),!1,null,x.H))},
a0L(){return this.cjG()},
cjG(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a0L=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n={}
m=t.d
m===$&&A.c()
if(!C.ut(m,t.a.c)){t.ys("View only \u2014 display settings are locked.")
w=1
break}m=t.c
m.toString
m=A.S(m)
s=t.d
r=s.w
n.a=r
s=s.f
q=new A.Y(s,new C.e1R(),A.U(s).k("Y<1>")).gI(0)
s=A.ez([0,2,3,4,5,6,8,r],x.S)
p=A.C(s,s.$ti.k("ch.E"))
B.d.fi(p)
s=t.c
s.toString
w=3
return A.b(A.bT(B.L,null,new C.e1S(n,t,new C.ug(m.ax.a===B.J),p,q),s,!0,!0,!0,null,!1,!1,x.bn),$async$a0L)
case 3:o=e
if(o==null||t.c==null){w=1
break}w=o.b!==t.d.w?4:5
break
case 4:t.JX()
t.m(new C.e1T(t,o))
w=6
return A.b(t.ur(),$async$a0L)
case 6:case 5:if(o.a&&t.c!=null)t.b2X()
case 1:return A.h(u,v)}})
return A.i($async$a0L,v)},
Wy(d){return this.bDu(d)},
bDu(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Wy=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
if(!C.ut(r,t.a.c)){t.ys("View only \u2014 you cannot add members to this shared tree.")
w=1
break}r=t.c
r.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e1a(t,d),r,null,!0,!0,x.P),$async$Wy)
case 3:s=f
if(s==null){w=1
break}t.JX()
t.m(new C.e1b(t,s))
w=4
return A.b(t.ur(),$async$Wy)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Wy,v)},
a3R(d){return this.cIF(d)},
cIF(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$a3R=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
s=A.S(s)
t=u.c
t.toString
w=2
return A.b(A.ce(null,null,!0,null,new C.e22(u,d,new C.ug(s.ax.a===B.J)),t,null,!0,!0,x.H),$async$a3R)
case 2:return A.h(null,v)}})
return A.i($async$a3R,v)},
cfX(d){var w=this,v=w.d
v===$&&A.c()
if(C.ut(v,w.a.c))w.OM(d)
else w.a3R(d)},
ajj(d,e){return this.cA3(d,e)},
cA3(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$ajj=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
r=A.S(r)
s=t.c
if(s==null){w=1
break}w=3
return A.b(A.ce(null,null,!0,null,new C.e1X(new C.ug(r.ax.a===B.J),d,e),s,null,!0,!0,x.H),$async$ajj)
case 3:case 1:return A.h(u,v)}})
return A.i($async$ajj,v)},
Iv(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$Iv=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:o=t.d
o===$&&A.c()
w=o.y===D.kV?3:5
break
case 3:w=6
return A.b(C.h3p(t.a.c),$async$Iv)
case 6:s=e
o=t.a
r=C.hoj(o.e,o.c)
w=!s||!r?7:8
break
case 7:w=9
return A.b(t.ajj(!s,!r),$async$Iv)
case 9:w=1
break
case 8:w=4
break
case 5:if(!C.aQG(o,t.a.c)){t.ys("Only the tree creator can delete this family tree.")
w=1
break}case 4:o=t.c
if(o==null){w=1
break}q=t.d
p=q.b
w=10
return A.b(A.lo(o,"Cancel","Remove",q.y===D.kV?'This removes "'+p+"\" from this phone only. The creator's copy is not affected.":'Delete "'+p+'" permanently? This cannot be undone.',"Remove family tree?"),$async$Iv)
case 10:if(!e||t.c==null){w=1
break}w=11
return A.b(C.aQC(t.a.c,t.d.a),$async$Iv)
case 11:t.a.bv()
o=t.c
if(o==null){w=1
break}A.j_(o,null)
case 1:return A.h(u,v)}})
return A.i($async$Iv,v)},
aaX(d){return this.bOG(d)},
bOG(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$aaX=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:p={}
o=t.d
o===$&&A.c()
if(!C.ut(o,t.a.c)){w=1
break}s=t.d.f
r=d.e
p.a=r
if(r==null||!B.d.aV(s,new C.e1c(p))){o=A.U(s)
p.a=A.nz(new A.cM(new A.Y(s,new C.e1d(d),o.k("Y<1>")),new C.e1e(),o.k("cM<1,n>")))}q=p.a
if(q==null)q=d.d
t.JX()
t.m(new C.e1f(t,s,d,q))
w=3
return A.b(t.ur(),$async$aaX)
case 3:t.ys(d.b+" was removed. Tap Undo to bring them back.")
case 1:return A.h(u,v)}})
return A.i($async$aaX,v)},
OM(d){return this.bQU(d)},
bQU(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$OM=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.d
r===$&&A.c()
w=!C.ut(r,t.a.c)?3:4
break
case 3:w=5
return A.b(t.a3R(d),$async$OM)
case 5:w=1
break
case 4:r=t.c
r.toString
w=6
return A.b(A.ce(null,null,!0,null,new C.e1j(t,d),r,null,!0,!0,x.P),$async$OM)
case 6:s=f
if(s==null){w=1
break}t.JX()
t.m(new C.e1k(t,s))
w=7
return A.b(t.ur(),$async$OM)
case 7:case 1:return A.h(u,v)}})
return A.i($async$OM,v)},
cGQ(){var w=this,v=w.d
v===$&&A.c()
if(!C.ut(v,w.a.c))return
if(w.e.length===0)return
w.m(new C.e21(w))
w.ur()},
Zw(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Zw=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=t.d
n===$&&A.c()
if(!C.aQG(n,t.a.c)){t.ys("Only the tree creator can invite collaborators.")
w=1
break}n=t.c
n.toString
n=A.S(n)
s=$.aw()
r=new A.au(B.av,s)
q=t.d.e
p=A.bq(new A.N(q,t.gceq(),A.U(q).k("N<1,n>")).bY(0,new C.e1w()),!0,x.N)
q=t.c
q.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.e1x(t,new C.ug(n.ax.a===B.J),p,r),q,null,!0,!0,x.y),$async$Zw)
case 3:o=e
r.T$=s
r.P$=0
if(o!==!0||t.c==null){w=1
break}t.JX()
t.m(new C.e1y(t,p))
w=4
return A.b(t.ur(),$async$Zw)
case 4:t.ys("Collaborators updated.")
case 1:return A.h(u,v)}})
return A.i($async$Zw,v)},
cer(d){return B.a.i(d.toLowerCase())},
cis(){var w,v,u,t,s,r=this,q=r.c
q.toString
w=r.a.c
v=r.d
v===$&&A.c()
u=C.ut(v,w)
t=r.d
s=C.igD(t)
C.ir_(q,t.b,u,C.igC(r.d),s,v.a,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.ug(n),l=p.d
l===$&&A.c()
l=l.f
w=new A.Y(l,new C.e29(),A.U(l).k("Y<1>")).gI(0)
l=n?B.c3:B.iB
v=A.X(B.a1G,n?B.bu:B.bq,o,o,o,18)
u=x.p
v=A.a([new A.D(B.Ca,A.aP(!1,o,!0,new A.D(B.hE,A.A(A.a([v,B.bm,A.d("Back to Family Trees",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],u),B.m,o,B.e,B.Q,0,o,o),o),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.e2a(p,d),o,o,o,o,o,o,o),o),new A.D(B.nE,p.c15(m),o)],u)
if(p.d.y===D.kV){t=B.ta.j(0.15)
s=A.m(12)
r=A.L(B.ta.j(0.45),B.r,1)
q=C.Hg(p.d,p.a.c)
v.push(new A.D(B.yG,A.q(o,A.A(A.a([D.bZ4,B.au,A.E(A.d("View only \u2014 shared by "+q+". You can keep up to 2 shared trees. Tap a member to view details.",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.as,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,1.35,!0,o,o,o,o,o,o,o,o),o,o,o),1)],u),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(t,o,r,s,o,o,B.n),o,o,o,o,B.it,o,o,1/0),o))}u=A.a([A.d("Family Tree",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.as,o,o,o,o,o,o,o,o,15,o,o,B.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),B.b4],u)
if(C.ut(p.d,p.a.c)&&p.e.length!==0)u.push(new C.Gv("Undo",B.ps,p.gcGP(),m,o,o))
u.push(new C.Gv("Family Book",D.bOs,p.gcir(),m,B.u2,o))
u.push(new C.Gv("Family games",B.oy,p.gciD(),m,B.aE,o))
if(C.ut(p.d,p.a.c))u.push(new C.Gv("Display settings",B.D0,p.gcjF(),m,B.b1,o))
u.push(new C.Gv("Sync",B.zk,p.gagO(),m,o,o))
t=p.d
if(t.y===D.kV||C.aQG(t,p.a.c)){t=p.d.y===D.kV?"Remove shared tree":"Delete tree"
u.push(new C.Gv(t,B.eg,p.gbOQ(),m,B.fg,o))}if(C.ut(p.d,p.a.c))u.push(new C.Gv("Add member",B.wE,new C.e2b(p),m,B.bQ,o))
v.push(new A.D(A_.alJ,A.A(u,B.m,o,B.e,B.i,0,o,o),o))
if(p.d.gaqi()===0){u=A.at(A.d("Add your first member to build the tree.",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o)
n=u}else n=A.cs(new C.e2c(p,m))
v.push(A.E(n,1))
if(w>0){n=p.f
u=A.X(n?O.a1K:A6.OL,o,o,o,o,o)
v.push(A.at(A.ho(u,A.d(n?"Hide hidden members":""+w+" hidden",o,o,o,o,o,o,o,o,o,o),new C.e2d(p),o),o,o,o))}return A.c4(o,l,A.bn(!0,A.x(v,B.E,o,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),o,!1,!1,o,o)},
c15(d){var w,v,u,t,s,r,q,p,o,n=this,m=null
n.d===$&&A.c()
w=A.m(22)
v=A.a([new A.ac(0,B.G,B.fP.j(0.35),B.dv,18)],x.V)
u=A.m(22)
t=A.ap(-26,A.X(B.zd,B.c.j(0.08),m,m,m,130),m,m,m,-18,m,m)
s=A.aJ(!1,B.a3,!0,m,A.aP(!1,m,!0,A.q(m,D.c1c,B.f,m,m,new A.p(B.c.j(0.16),m,A.L(B.c.j(0.45),B.r,1.5),m,m,m,B.a7),m,46,m,m,m,m,m,46),B.cR,!0,m,m,m,m,m,m,m,m,m,m,m,n.gagO(),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)
r=n.d
q=A.d(r.b,m,1,B.a2,m,m,m,D.fqF,m,m,m)
r=r.gaqi()
p=n.d.gaqi()===1?"member":"members"
o=x.p
p=A.a([s,B.bd,A.E(A.x(A.a([q,B.bG,A.d(""+r+" "+p,m,m,m,m,m,m,A.l(m,m,B.c.j(0.8),m,m,m,m,m,m,m,m,12.5,m,m,B.a8,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],o),B.E,m,B.e,B.i,0,B.p),1)],o)
if(C.ut(n.d,n.a.c))p.push(A.aG(m,m,m,m,D.bZh,m,m,m,n.gctt(),m,m,m,m,"Rename",m))
s=A.A(p,B.m,m,B.e,B.i,0,m,m)
r=n.d.d
q=r?B.jF:B.n1
r=r?"Private":"Public"
r=A.E(n.awQ(q,"Privacy",r,n.a.d.w?n.gcFK():m),1)
q=A.E(n.awQ(B.zl,"Tree code",n.d.c,new C.e1l(n)),1)
p=n.d.e.length
p=p===0?"Invite":""+p+" \xb7 Manage"
p=A.a([s,B.af,A.A(A.a([r,B.ae,q,B.ae,A.E(n.awQ(D.bQ8,"Collaborators",p,n.gc5Q()),1)],o),B.m,m,B.e,B.i,0,m,m)],o)
if(n.d.y===D.kV){s=B.c.j(0.15)
B.d.v(p,A.a([B.U,A.aJ(!1,B.a3,!0,A.m(999),A.aP(!1,A.m(999),!0,new A.D(B.ha,A.A(A.a([A.X(B.pt,B.c,m,m,m,14),B.e1,A.d("View only",m,m,m,m,m,m,B.aUV,m,m,m)],o),B.m,m,B.e,B.Q,0,m,m),m),m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.f,s,0,m,m,m,m,m,B.aj)],o))}return A.q(m,A.by(u,new A.an(B.a0,m,B.ad,B.t,A.a([t,new A.D(B.GL,A.x(p,B.E,m,B.e,B.i,0,B.p),m)],o),m),B.aq),B.f,m,m,new A.p(m,m,m,w,v,D.c5v,B.n),m,m,m,m,m,m,m,1/0)},
awQ(d,e,f,g){var w=null,v=B.c.j(0.14)
return A.aJ(!1,B.a3,!0,A.m(14),A.aP(!1,A.m(14),!0,new A.D(K.amS,A.x(A.a([A.X(d,B.c,w,w,w,18),B.ax,A.d(e,w,1,B.a2,w,w,w,A.l(w,w,B.c.j(0.75),w,w,w,w,w,w,w,w,10.5,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.vu,A.d(f,w,1,B.a2,w,w,w,Aq.AG,w,w,w)],x.p),B.m,w,B.e,B.i,0,B.p),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)}}
C.bgp.prototype={
B(d){var w,v,u,t=null,s=this.d,r=s.a
if(r.gau(r)&&s.c.length===0)return B.bM
w=s.d
v=s.e
u=A.a([A.b4(t,t,t,new C.bgs(s,t),new A.av(w,v))],x.p)
r=r.gdO(r)
B.d.v(u,r.dL(r,new C.dgu(this),x.l))
r=s.c
B.d.v(u,new A.N(r,new C.dgv(this),A.U(r).k("N<1,v>")))
return new A.D(B.uu,new A.a5(w,v,new A.an(B.a0,t,B.ad,B.f,u,t),t),t)}}
C.KS.prototype={}
C.Gz.prototype={}
C.bgr.prototype={
gbln(){var w,v=this,u=v.r
if(u!=null)return u+16
u=v.f
if(u==null)return v.d/2
w=v.a.h(0,u)
if(w==null)return v.d/2
return w.b.a+16}}
C.aKw.prototype={}
C.bgs.prototype={
bQv(d,e,f,g){var w,v,u,t,s,r,q=f.a<=g.a,p=q?f:g,o=q?g:f,n=p.a+28+3,m=o.a-28-3
if(m<=n+2)return
w=(p.b+o.b)/2
q=$.Q()
v=A.K()
v.r=B.bF.j(0.75).gp(0)
v.c=2
v.d=B.bw
d.ah(new A.o(n,w),new A.o(m,w),v)
u=(n+m)/2
t=new A.aF(q.r,B.ai,null,null,A.a([],x.v))
q=w+5.5
t.D(new A.aZ(u,q))
s=w-1.1
r=w-8.8
t.D(new A.kR(u-9.9,s,u-4.95,r,u,w-3.0250000000000004))
t.D(new A.kR(u+4.95,r,u+9.9,s,u,q))
t.D(new A.bu())
q=A.K()
q.r=B.c.gp(0)
d.N(new A.o(u,w),9,q)
q=A.K()
q.r=B.bF.gp(0)
d.af(t,q)},
bQs(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(a0.length===0)return
B.d.aZ(a0,new C.dgP())
w=f.b
v=w+(B.d.gH(a0).b-w)/2
u=B.d.aV(a0,new C.dgQ(f))
t=new A.N(a0,new C.dgR(f),A.U(a0).k("N<1,I>")).bY(0,new C.dgS()).cJ(0,1/0,B.tO)
w=f.a
d.ah(f,new A.o(w,u?v:v-Math.min(10,t/2)),e)
for(s=a0.length,r=x.v,q=0;q<a0.length;a0.length===s||(0,A.J)(a0),++q){p=a0[q]
o=p.a
n=o-w
m=Math.abs(n)
if(m<0.5){d.ah(new A.o(o,v),p,e)
continue}l=J.mZ(n)
k=Math.min(10,m/2)
m=$.Q()
j=A.a([],r)
i=new A.aF(m.r,B.ai,null,null,j)
j.push(new A.aZ(w,v-k))
i.ab()
m=l*k
h=new A.c5(w,v,w+m,v)
j.push(h)
g=i.f
if(g!=null)h.ak(g)
i.ab()
m=new A.aq(o-m,v)
j.push(m)
h=i.f
if(h!=null)m.ak(h)
i.ab()
m=new A.c5(o,v,o,v+k)
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
a4(d,e){var w,v,u,t,s,r
$.Q()
w=A.K()
w.r=B.bQ.j(0.75).gp(0)
w.c=2.2
w.b=B.a9
w.d=B.bw
w.e=B.dP
for(v=this.b.b,u=v.length,t=0;s=v.length,t<s;v.length===u||(0,A.J)(v),++t){r=v[t]
s=r.d
if(s!=null&&s.length!==0)this.bQs(d,w,r.a,s)
else{if(!r.c){s=r.b
s=!(0===s.a&&0===s.b)}else s=!1
if(s)d.ah(r.a,r.b,w)}}for(t=0;t<v.length;v.length===s||(0,A.J)(v),++t){r=v[t]
if(r.c)this.bQv(d,w,r.a,r.b)}},
aE(d){return d.b!==this.b}}
C.bke.prototype={
gcbM(){var w=this.c
if(B.a.i(w.y).length!==0)return B.aD7
switch(w.c.a){case 0:return D.cZ9
case 1:return D.dai
case 2:return D.dsh}},
gcbP(){var w=this.c,v=C.hzg(w.w),u=C.hzg(w.y)
w=v!=null
if(w&&u!=null)return v+" \u2013 "+u
if(w)return"b. "+v
if(u!=null)return"\u2020 "+u
return""},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=t.gcbM(),p=t.c,o=N.bEJ(p.f),n=t.gcbP(),m=x.V,l=A.a([new A.ac(0,B.G,B.d.gan(q).j(0.35),B.cM,10)],m),k=r?B.as:B.c,j=A.L(r?B.as:B.c,B.r,2)
if(o!=null)w=A.tI(B.A,s,B.cj,B.c_,!1,s,o,!1,s,s)
else{w=A.a([B.d.gH(q).j(0.18),B.d.gan(q).j(0.28)],x.O)
v=B.a.i(p.b)
v=v.length===0?"?":v[0].toUpperCase()
w=A.q(B.A,A.d(v,s,s,s,s,s,s,A.l(s,s,B.d.gan(q),s,s,s,s,s,s,s,s,20,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(s,s,s,s,s,new A.a9(B.a6,B.aa,B.x,w,s,s),B.n),s,s,s,s,s,s,s,s)}v=x.p
l=A.a([A.q(s,A.q(s,A.hS(w,B.aq),B.f,s,s,new A.p(k,s,j,s,s,s,B.a7),s,s,s,s,s,s,s,s),B.f,s,s,new A.p(s,s,s,s,l,new A.a9(B.aA,B.aF,B.x,q,s,s),B.a7),s,56,s,s,B.H0,s,s,56)],v)
k=t.d
if(k>0){j=A.m(10)
w=A.L(r?B.as:B.c,B.r,1.5)
l.push(A.ap(s,A.q(s,A.d(""+k,s,s,s,s,s,s,D.fBb,s,s,s),B.f,s,s,new A.p(B.cg,s,w,j,s,s,B.n),s,s,s,s,D.bHc,s,s,s),s,s,s,-6,-4,s))}k=r?B.cu:B.c
j=A.m(8)
w=A.L(B.d.gH(q).j(0.35),B.r,1)
m=A.a([new A.ac(0,B.G,B.w.j(r?0.3:0.06),B.dG,6)],m)
p=B.a.i(p.b)
u=p.length
if(u<=24)u=9.5
else u=u<=32?8.2:7.2
p=A.a([A.d(p,s,4,s,s,s,s,A.l(s,s,r?B.c:B.cu,s,s,s,s,s,s,s,s,u,s,s,B.H,s,1.15,!0,s,s,s,s,s,s,s,s),B.K,s,s)],v)
if(n.length!==0)p.push(A.d(n,s,1,s,s,s,s,A.l(s,s,r?B.aS:B.bq,s,s,s,s,s,s,s,s,7.5,s,s,B.a8,s,1.1,!0,s,s,s,s,s,s,s,s),s,s,s))
return A.aA(s,new A.a5(84,112,A.x(A.a([new A.an(B.a0,s,B.ad,B.f,l,s),B.ax,A.q(s,A.x(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,D.b5X,new A.p(k,s,w,j,m,s,B.n),s,s,s,s,D.bHn,s,s,s)],v),B.m,s,B.e,B.i,0,B.p),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.e,s,s,s,s,s,s,!1,B.a4)}}
C.bfu.prototype={
a4(d,e){var w,v,u,t,s
$.Q()
w=A.K()
v=this.b
u=v?B.c:D.biM
w.r=u.j(v?0.05:0.09).gp(0)
for(v=e.b,u=e.a,t=10;t<v;t+=20)for(s=10;s<u;s+=20)d.N(new A.o(s,t),1,w)},
aE(d){return d.b!==this.b}}
C.byb.prototype={
B(d){var w=this,v=null,u=new C.flM(w),t=w.c,s=t?B.cu:B.c,r=A.m(12),q=u.$3(B.hV,"Zoom in",w.d),p=A.q(v,v,B.f,t?B.bA:B.fp,v,v,v,1,v,v,v,v,v,22),o=u.$3(B.wG,"Zoom out",w.e)
return A.aJ(!1,B.a3,!0,r,A.x(A.a([q,p,o,A.q(v,v,B.f,t?B.bA:B.fp,v,v,v,1,v,v,v,v,v,22),u.$3(B.app,"Fit the whole tree",w.f)],x.p),B.m,v,B.e,B.Q,0,B.p),B.f,s,4,v,B.dq,v,v,v,B.aj)}}
C.bnx.prototype={
B(d){var w=this,v=null,u=B.bQ.j(0.15),t=A.L(B.bQ,B.r,2),s=w.e,r=x.p
t=A.aA(v,A.q(v,A.x(A.a([A.X(s?O.a1K:A6.OL,B.bQ,v,v,v,22),A.d("+"+w.c,v,v,v,v,v,v,D.fxl,v,v,v)],r),B.m,v,B.ba,B.i,0,B.p),B.f,v,v,new A.p(u,v,t,v,v,v,B.a7),v,56,v,v,v,v,v,56),B.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,!1,B.a4)
u=A.a([t,B.an,A.d(s?"SHOW LESS":"MORE KIDS",v,v,v,v,v,v,D.fva,B.K,v,v)],r)
if(s){t=A.a([B.an],r)
s=w.d
B.d.v(t,new A.N(s,new C.eWV(w),A.U(s).k("N<1,v>")))
B.d.v(u,t)}return new A.a5(84,v,A.x(u,B.m,v,B.e,B.i,0,B.p),v)}}
C.a05.prototype={
S(){return new C.aDo()},
bv(){return this.Q.$0()},
ge3(){return this.w}}
C.aDo.prototype={
Y(){var w,v,u,t,s,r=this,q=null
r.a2()
w=r.a
v=w.d
u=v==null
t=u?q:v.b
if(t==null)t=""
s=$.aw()
r.d!==$&&A.aQ()
r.d=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.r
if(t==null)t=""
r.e!==$&&A.aQ()
r.e=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.w
if(t==null)t=""
r.f!==$&&A.aQ()
r.f=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.x
if(t==null)t=""
r.r!==$&&A.aQ()
r.r=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.y
if(t==null)t=""
r.w!==$&&A.aQ()
r.w=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.z
if(t==null)t=""
r.x!==$&&A.aQ()
r.x=new A.au(new A.ba(t,B.b6,B.aP),s)
t=u?q:v.c
r.y=t==null?D.yU:t
t=u?q:v.d
r.z=t==null?w.f:t
r.Q=u?q:v.e
r.as=u?q:v.f
t=u?q:v.Q
if(t==null)w=C.iib(w.r,w.f)
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
Qg(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Qg=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
o=C.hoj(p.y,p.w)
w=3
return A.b(A.ly(t.a.w,B.Jm),$async$Qg)
case 3:n=e
w=!o&&!n&&!t.a.x.w?4:5
break
case 4:p=t.c
p.toString
s=t.a
r=s.x
w=6
return A.b(C.b0Y(0,s.y,p,"Subscribe to upload family photos (30 days).",s.z,"Family Tree Photos",r),$async$Qg)
case 6:if(!e||t.c==null){w=1
break}p=t.a
C.hTO(p.y,p.w)
t.a.bv()
case 5:w=7
return A.b(Az.Hs(78,800),$async$Qg)
case 7:q=e
if(q!=null&&t.c!=null)t.m(new C.dwI(t,q))
case 1:return A.h(u,v)}})
return A.i($async$Qg,v)},
cbO(){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.d
k===$&&A.c()
w=B.a.i(k.a.a).toUpperCase()
if(w.length===0)return
k=l.c
k.toString
v=l.a.d
if(v==null)v=new C.hT(B.o.u(1000*Date.now()),w,D.yU,null,null,null,"","","","","",1,!1,0)
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
s=v.aFS(p,l.at,o,n,u,l.ay,w,q,m,t,r,s,l.ax)
A.a6(k,!1).O(s)},
aay(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$aay=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a.d
r=s==null?null:B.a.i(s.b)
if(r==null)r=""
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.dwH(r),s,null,!0,!0,x.y),$async$aay)
case 3:if(e!==!0||t.c==null){w=1
break}s=t.c
s.toString
A.a6(s,!1).O(null)
s=t.a.as
if(s!=null)s.$0()
case 1:return A.h(u,v)}})
return A.i($async$aay,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===B.J,i=new C.ug(j),h=l.a.e,g=A.U(h).k("Y<1>"),f=A.C(new A.Y(h,new C.dwR(l),g),g.k("M.E"))
h=j?B.e9:B.c
g=A.m(22)
w=l.a.c
v=x.p
w=A.a([new A.D(D.bFA,A.d(w,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.as,k,k,k,k,k,k,k,k,17,k,k,B.u,k,k,!0,k,0.3,k,k,k,k,k,k),B.K,k,k),k)],v)
u=l.a
if(u.as!=null&&u.d!=null)w.push(A.ap(k,A.hb(A.aP(!1,k,!0,new A.D(B.md,A.X(B.eg,B.pd,k,k,k,17),k),B.cR,!0,k,k,k,k,k,k,k,k,k,k,k,l.gbLs(),k,k,k,k,k,k,k),k,"Delete member",k,k),k,k,k,0,k,k))
u=j?B.jS:B.jj
t=N.bEJ(l.as)
if(l.as==null)s=A.X(B.pk,j?B.bu:B.bq,k,k,k,40)
else s=k
s=A.at(A.aA(k,new A.an(B.a0,k,B.ad,B.t,A.a([A.h8(u,t,s,k,42),A.ap(0,A.h8(B.bQ,k,D.bSN,k,14),k,k,k,0,k,k)],v),k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,l.gcbL(),k,k,k,k,k,k,!1,B.a4),k,k,k)
t=l.d
t===$&&A.c()
t=C.aDq(t,"Full name",B.mZ,1,1,i,B.mx)
u=l.y
u===$&&A.c()
u=A.x(A.a([t,B.X,new C.bkc(i,u,new C.dwS(l),k)],v),B.m,k,B.e,B.i,0,B.p)
t=A.d("1. Parent",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
r=l.z
q=x.ac
p=A.a([D.byW],q)
o=l.a.e
B.d.v(p,new A.N(o,new C.dwT(),A.U(o).k("N<1,eI<n?>>")))
o=x.bw
n=A.d("2. Spouse",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,B.H,k,k,!0,k,0.3,k,k,k,k,k,k),k,k,k)
m=l.Q
q=A.a([D.byY],q)
B.d.v(q,new A.N(f,new C.dwV(),A.U(f).k("N<1,eI<n?>>")))
o=A.x(A.a([t,B.an,new C.ae6(i,r,"Who is their parent?",p,new C.dwW(l),k,o),B.aB,n,B.an,new C.ae6(i,m,"Who is their spouse / partner?",q,new C.dwX(l),k,o)],v),B.al,k,B.e,B.i,0,B.p)
q=l.f
q===$&&A.c()
q=C.aDq(q,"Birth date",D.aov,1,1,i,k)
m=l.r
m===$&&A.c()
m=C.aDq(m,"Birth place",B.a1Z,1,1,i,k)
n=l.w
n===$&&A.c()
n=C.aDq(n,"Date of death (if deceased)",D.aqD,1,1,i,k)
p=l.x
p===$&&A.c()
p=C.aDq(p,"Occupation",B.a3a,1,1,i,k)
r=l.e
r===$&&A.c()
r=A.a([new A.an(B.A,k,B.ad,B.t,w,k),B.aB,s,B.bz,new C.ae7(i,"Identity",u,k),B.af,new C.ae7(i,"Family links",o,k),B.af,new C.ae7(i,"Life details",A.x(A.a([q,B.X,m,B.X,n,B.X,p,B.X,C.aDq(r,"Notes",B.lj,5,3,i,k)],v),B.m,k,B.e,B.i,0,B.p),k),B.af,new C.aDp(i,"Child order",l.cjU(l.at),new C.dwY(l),new C.dwZ(l),k)],v)
w=l.a
u=w.d
if(u!=null)w=C.hdu(w.r,u.a).length!==0
else w=!1
if(w){w=l.ax
u=w===0?"Uses tree default":"Show "+w+", rest in menu"
w=w>0?new C.dx_(l):k
B.d.v(r,A.a([B.X,new C.aDp(i,"Visible in tree",u,w,new C.dx0(l),k)],v))}r.push(B.X)
w=j?B.jS:B.jj
u=A.m(14)
t=A.L(j?B.ef:B.bP,B.r,1)
s=A.d("Hidden member",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.as,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
r.push(A.q(k,A.iQ(k,B.bQ,k,B.ag,k,new C.dx1(l),k,A.d("Hide from the tree canvas",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,s,l.ay),B.f,k,k,new A.p(w,k,t,u,k,k,B.n),k,k,k,k,O.alo,k,k,k))
r.push(B.bz)
w=j?B.aQ:B.as
j=j?B.ef:B.bP
r.push(A.A(A.a([A.E(A.dU(B.nX,new C.dwU(d),A.di(k,k,k,k,k,k,k,k,k,w,k,k,B.co,k,new A.b9(A.m(14),B.a1),new A.ay(j,1,B.r,-1),k,k,k,k)),1),B.bd,A.E(A.bI(D.f7S,k,l.gcbN(),A.bp(B.aY,k,k,0,B.c,k,B.co,k,new A.b9(A.m(14),B.a1),k,k,k)),2)],v),B.m,k,B.e,B.i,0,k,k))
r.push(B.ax)
return A.eg(B.f5,k,B.ag,h,new A.a5(420,k,A.cg(A.x(r,B.al,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),k),D.amc,k,B.alA,new A.b9(g,B.a1),k,k)},
cjU(d){var w=B.o.F(d,100)
if(w>=11&&w<=13)return""+d+"th child"
w=""+d
switch(B.o.F(d,10)){case 1:return w+"st child"
case 2:return w+"nd child"
case 3:return w+"rd child"
default:return w+"th child"}}}
C.ae7.prototype={
B(d){var w=null,v=this.c.a,u=A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jS:B.jj,s=A.m(16)
return A.x(A.a([new A.D(D.amC,u,w),A.q(w,this.e,B.f,w,w,new A.p(t,w,A.L(v?B.ef:B.bP,B.r,1),s,w,w,B.n),w,w,w,w,B.bh,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)}}
C.bkd.prototype={
B(d){var w,v=this,u=null,t=v.c.a,s=t?B.e9:B.c,r=A.m(12),q=A.L((t?B.ef:B.bP).j(0.85),B.r,1),p=v.r
if(p==null)p=B.ao
w=A.l(u,u,t?B.aQ:B.as,u,u,u,u,u,u,u,u,14,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u)
return A.q(u,A.aM(u,B.Z,!1,u,!0,B.t,u,A.aN(),v.d,u,u,u,u,u,2,A.bt(u,B.eJ,u,B.wf,u,u,u,u,!0,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,A.l(u,u,t?B.bu:B.bq,u,u,u,u,u,u,u,u,u,u,u,B.cC,u,u,!0,u,u,u,u,u,u,u,u),v.e,u,u,u,u,u,u,u,u,u,!0,!0,!1,u,A.X(v.f,B.bQ,u,u,u,20),u,u,u,u,u,u,u,u,u,u,u,u),B.y,!0,u,!0,u,!1,u,B.ak,u,u,u,u,u,u,u,u,u,v.x,v.w,u,!1,"\u2022",u,u,u,u,u,!1,u,u,!1,u,!0,u,B.ac,u,u,u,u,u,u,u,u,u,u,u,w,!0,B.a5,u,p,u,u,u,u),B.f,u,u,new A.p(s,u,q,r,u,u,B.n),u,u,u,u,u,u,u,u)}}
C.ae6.prototype={
B(d){var w=this,v=null,u=w.c.a,t=u?B.e9:B.c,s=A.m(12),r=A.L((u?B.ef:B.bP).j(0.85),B.r,1),q=A.X(B.rW,u?B.bu:B.bq,v,v,v,v),p=A.l(v,v,u?B.aQ:B.as,v,v,v,v,v,v,v,v,14,v,v,B.a8,v,v,!0,v,v,v,v,v,v,v,v),o=u?B.e9:B.c
return A.q(v,new A.El(A.a5j(v,o,A.d(w.f,v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bq,v,v,v,v,v,v,v,v,v,v,v,B.cC,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q,!1,!0,w.r,w.w,p,v,w.d,w.$ti.c),v),B.f,v,v,new A.p(t,v,r,s,v,v,B.n),v,v,v,v,B.kr,v,v,v)}}
C.bkc.prototype={
B(d){var w=new C.dx2(this)
return A.A(A.a([w.$3(D.wo,"Male",B.Pv),B.ae,w.$3(D.oq,"Female",B.Pf),B.ae,w.$3(D.yU,"Other",B.nI)],x.p),B.m,null,B.e,B.i,0,null,null)}}
C.aDp.prototype={
B(d){var w=this,v=null,u=w.c,t=u.a,s=t?B.jS:B.jj,r=A.m(14),q=A.L(t?B.ef:B.bP,B.r,1),p=A.d(w.d,v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.as,v,v,v,v,v,v,v,v,13,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),o=x.p
return A.q(v,A.A(A.a([A.E(A.x(A.a([p,A.d(w.e,v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bq,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],o),B.E,v,B.e,B.i,0,B.p),1),new C.aJy(u,B.wG,w.f,v),B.bm,new C.aJy(u,B.hV,w.r,v)],o),B.m,v,B.e,B.i,0,v,v),B.f,v,v,new A.p(s,v,q,r,v,v,B.n),v,v,v,v,B.eD,v,v,v)}}
C.aJy.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.e,p=q!=null
if(p)w=B.bQ.j(0.12)
else w=s.c.a?B.e9:B.c
v=A.m(10)
u=A.m(10)
if(p)t=B.bQ
else t=(s.c.a?B.bu:B.bq).j(0.4)
return A.aJ(!1,B.a3,!0,v,A.aP(!1,u,!0,new A.a5(36,36,A.X(s.d,t,r,r,r,20),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,w,0,r,r,r,r,r,B.aj)}}
C.ae8.prototype={
bUE(d){switch(d.a){case 0:return B.bQ
case 1:return B.bF
case 2:return B.d0}},
bUF(d){switch(d.a){case 0:return"Male"
case 1:return"Female"
case 2:return"Not specified"}},
aZL(d){var w,v,u,t
if(d==null||d.length===0)return"\u2014"
for(w=this.d.f,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t.b}return"\u2014"},
AI(d,e,f){var w,v,u,t,s,r,q,p=null,o=B.a.i(e)
if(o.length===0)o="\u2014"
w=this.e.a
v=w?B.e9:B.c
u=A.m(12)
t=A.L((w?B.ef:B.bP).j(0.85),B.r,1)
s=x.p
r=A.a([],s)
B.d.v(r,A.a([A.X(f,B.bQ,p,p,p,18),B.au],s))
q=A.d(d.toUpperCase(),p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bq,p,p,p,p,p,p,p,p,9,p,p,B.H,p,p,!0,p,0.8,p,p,p,p,p,p),p,p,p)
r.push(A.E(A.x(A.a([q,B.ax,A.d(o,p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.as,p,p,p,p,p,p,p,p,14,p,p,B.V,p,1.35,!0,p,p,p,p,p,p,p,p),p,p,p)],s),B.E,p,B.e,B.i,0,B.p),1))
return A.q(p,A.A(r,B.E,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(v,p,t,u,p,p,B.n),p,p,p,B.cx,B.yC,p,p,1/0)},
afa(d,e){var w=null,v=this.e.a,u=A.d(d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,10,w,w,B.H,w,w,!0,w,1.1,w,w,w,w,w,w),w,w,w),t=v?B.jS:B.jj,s=A.m(16),r=A.L(v?B.ef:B.bP,B.r,1)
return A.x(A.a([new A.D(D.amC,u,w),A.q(w,A.x(e,B.m,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(t,w,r,s,w,w,B.n),w,w,w,w,B.bV,w,w,1/0)],x.p),B.E,w,B.e,B.i,0,B.p)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=t.c,p=C.hEp(r,q),o=q.c,n=t.bUE(o),m=N.bEJ(q.f),l=t.e.a,k=l?B.e9:B.c,j=A.m(22),i=q.b,h=A.d(i,s,s,s,s,s,s,A.l(s,s,l?B.aQ:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
r=r.y===D.kV?"Shared family tree \xb7 view only":"Member profile"
r=A.d(r,s,s,s,s,s,s,A.l(s,s,l?B.bu:B.bq,s,s,s,s,s,s,s,s,12,s,s,B.a8,s,s,!0,s,s,s,s,s,s,s,s),B.K,s,s)
w=A.L(n,B.r,3)
v=A.a([new A.ac(0,B.G,n.j(0.25),B.I,12)],x.V)
u=n.j(0.12)
l=A.at(A.q(s,A.h8(u,m,m==null?A.X(B.pk,n,s,s,s,48):s,s,52),B.f,s,s,new A.p(s,s,w,s,v,s,B.a7),s,s,s,s,B.ey,s,s,s),s,s,s)
w=n.j(0.14)
v=A.m(20)
u=A.L(n.j(0.45),B.r,1)
v=A.at(A.q(s,A.d(t.bUF(o),s,s,s,s,s,s,A.l(s,s,n,s,s,s,s,s,s,s,s,12,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,B.mb,s,s,s),s,s,s)
u=x.p
i=A.a([t.AI("Full name",i,B.mZ)],u)
if(p>0)i.push(t.AI("Child order","#"+p,B.Pl))
r=A.a([h,B.ax,r,B.aR,l,B.X,v,B.bz,t.afa("Identity",i),B.af,t.afa("Life details",A.a([t.AI("Birth date",q.w,D.aov),t.AI("Birth place",q.x,B.a1Z),t.AI("Date of death",q.y,D.aqD),t.AI("Occupation",q.z,B.a3a)],u)),B.af,t.afa("Family links",A.a([t.AI("1. Parent",t.aZL(q.d),B.Hg),t.AI("2. Spouse",t.aZL(q.e),B.Hu)],u))],u)
q=q.r
if(B.a.i(q).length!==0)B.d.v(r,A.a([B.af,t.afa("Notes",A.a([t.AI("Notes",q,B.lj)],u))],u))
r.push(B.bz)
r.push(A.bI(B.KR,s,new C.dxc(d),A.bp(B.aY,s,s,s,s,s,B.co,s,new A.b9(A.m(14),B.a1),s,s,s)))
return A.eN(s,k,new A.cR(B.lZ,A.cg(A.x(r,B.al,s,B.e,B.Q,0,B.p),B.t,s,B.y,s,B.yJ,s,s,B.ah),s),s,s,s,B.GO,B.d7,s,new A.b9(j,B.a1),s)}}
C.Gv.prototype={
B(d){var w,v=this,u=null,t=v.r
if(t==null)t=v.f.a?B.bu:B.bq
w=t.j(v.f.a?0.14:0.08)
return new A.D(B.uw,A.hb(A.aJ(!1,B.a3,!0,A.m(8),A.aP(!1,A.m(8),!0,new A.a5(30,30,A.X(v.d,t,u,u,u,16),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,v.e,u,u,u,u,u,u,u),B.f,w,0,u,u,u,u,u,B.aj),u,v.c,u,u),u)}}
C.aqP.prototype={
f2(){var w,v,u=this,t=x.N,s=A.T(t,x.z)
s.n(0,"marker","ngmyFamilyTreeSync")
s.n(0,"version",1)
s.n(0,"code",u.a)
s.n(0,"ownerEmail",u.b)
s.n(0,"exportedAt",u.d.aa().ag())
w=u.c
v=A.U(w).k("N<1,a8<n,@>>")
w=A.C(new A.N(w,new C.ceG(),v),v.k("ak.E"))
s.n(0,"trees",w)
w=u.e
if(w.a!==0)s.n(0,"familyBooks",w.jq(w,new C.ceH(),t,x.fO))
return s}}
C.aqQ.prototype={
S(){return new C.aEX(A.a([],x.bF))},
gd1(){return this.c}}
C.aEX.prototype={
Y(){this.a2()
this.K3()},
K3(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$K3=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.ceK(t.a.c),$async$K3)
case 3:r=e
w=4
return A.b(C.Bl(t.a.c),$async$K3)
case 4:q=e
p=t.a
if(!p.r)s=p.e||J.rh(q,new C.e2m(t))
else s=!1
if(t.c==null){w=1
break}t.m(new C.e2n(t,r,s))
case 1:return A.h(u,v)}})
return A.i($async$K3,v)},
z0(d){var w=null,v=this.c
if(v==null)return
v.L(x.q).f.U(A.b3(w,w,w,w,w,B.t,w,A.d(d,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
KR(d,e){return this.cJl(d,e)},
cJl(d,e){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this
var $async$KR=A.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:if(q.r){w=1
break}q.m(new C.e2r(q,e))
t=3
w=6
return A.b(d.$0(),$async$KR)
case 6:r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
if(q.c!=null){q.m(new C.e2s(q))
$.eW.mC()}w=r.pop()
break
case 5:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$KR,v)},
Yj(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yj=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pu(r,s.c,s.e),$async$Yj)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KR(new C.e2j(t),"Preparing download\u2026"),$async$Yj)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yj,v)},
Yn(d){return this.bSy(d)},
bSy(d){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Yn=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pu(r,s.c,s.e),$async$Yn)
case 3:if(!f||t.c==null){w=1
break}w=4
return A.b(t.KR(new C.e2k(t,d),"Preparing file\u2026"),$async$Yn)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Yn,v)},
aha(){var w=0,v=A.j(x.T),u,t=2,s=[],r,q,p,o,n,m
var $async$aha=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b($.xK.cq().MD(B.Ss,B.uz,!0),$async$aha)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
if(q==null){u=null
w=1
break}if(q.c!=null){o=q.c
o.toString
o=!B.aH.gau(o)}else o=!1
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
case 6:u=A.Hr()
w=1
break
case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aha,v)},
Z_(d){return this.c20(d)},
c20(d){var w=0,v=A.j(x.H),u=this
var $async$Z_=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(u.KR(new C.e2l(u,d),"Restoring family trees\u2026"),$async$Z_)
case 2:return A.h(null,v)}})
return A.i($async$Z_,v)},
YZ(){var w=0,v=A.j(x.H),u,t=this,s
var $async$YZ=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(t.aha(),$async$YZ)
case 3:s=e
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(t.Z_(s),$async$YZ)
case 4:case 1:return A.h(u,v)}})
return A.i($async$YZ,v)},
a2T(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2T=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=t.a
w=3
return A.b(A.pu(r,s.c,s.e),$async$a2T)
case 3:if(!e||t.c==null){w=1
break}w=4
return A.b(t.KR(new C.e2q(t),"Creating QR code\u2026"),$async$a2T)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a2T,v)},
a2u(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a2u=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:if(!A.Dz()){t.z0("Use a phone camera to scan, or upload the backup file on desktop.")
w=1
break}s=t.c
s.toString
w=3
return A.b(A.a6(s,!1).cd(A.eb(new C.e2o(),!0,null,x.N)),$async$a2u)
case 3:r=e
w=r!=null&&B.a.i(r).length!==0?4:5
break
case 4:w=6
return A.b(t.Z_(r),$async$a2u)
case 6:case 5:case 1:return A.h(u,v)}})
return A.i($async$a2u,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===B.J,n=o?B.BE:B.iB,m=o?D.ajP:B.aQ,l=o?B.aM:B.bP,k=o?B.aQ:B.as,j=new C.dgT(n,m,l,k,o?B.bK:B.bq)
l=A.aG(p,p,p,p,A.X(B.eM,k,p,p,p,20),p,p,p,new C.e2u(d),p,p,p,p,p,p)
w=q.a.r?"Restore family tree":"Family tree sync"
w=A.eH(p,p,p,!0,!0,n,p,1,!0,p,0,!1,p,!1,p,p,l,p,!0,0,p,p,p,p,A.d(w,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,17,p,p,B.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
l=q.a
v=l.r
l=l.e
u=x.p
t=A.a([],u)
if(q.e){s=q.a.e?"Scannable backup":"2 scans max"
B.d.v(t,A.a([A.E(C.dgr(!0,B.jH,B.aI,B.aI,q.r?p:q.gczS(),j,s,"Show restore QR"),1),B.au],u))}s=q.e
r=q.r?p:q.gcw1()
t.push(A.E(C.dgr(!s,B.jo,B.b8,B.br,r,j,"From another phone","Scan QR to restore"),1))
t=A.A(t,B.m,p,B.e,B.i,0,p,p)
r=A.a([],u)
if(q.e)B.d.v(r,A.a([A.E(C.dgr(!1,B.hW,B.aY,B.bQ,q.r?p:q.gbSr(),j,"Photos & books included","Download all trees"),1),B.au],u))
s=q.a.r?"Restore shared file":"From saved file"
r.push(A.E(C.dgr(!1,S.zm,B.aw,B.aU,q.r?p:q.gc1Y(),j,s,"Upload backup file"),1))
l=A.a([new C.bgq(v,l,p),B.l2,new C.adn(j,"QR restore",p),B.X,t,B.d8,new C.adn(j,"Backup files",p),B.X,A.A(r,B.m,p,B.e,B.i,0,p,p)],u)
if(q.e&&J.ad(q.d)>1&&q.a.f==null){v=A.a([B.l2,new C.adn(j,"One tree",p),B.X],u)
B.d.v(v,J.b7(q.d,new C.e2v(q,j),x.l))
B.d.v(l,v)}l=A.a([A.cl(l,p,p,B.a0t,p,p,B.ah,!1)],u)
if(q.r){v=A.m(18)
t=A.L(B.aY.j(0.35),B.r,1)
s=A.a([new A.ac(0,B.G,B.w.j(o?0.3:0.1),B.dv,20)],x.V)
r=q.f
if(r==null)r="Working\u2026"
l.push(A.ap(24,A.bn(!0,A.q(p,A.A(A.a([O.aTk,B.bd,A.E(A.d(r,p,p,p,p,p,p,A.l(p,p,k,p,p,p,p,p,p,p,p,13,p,p,B.V,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1)],u),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(m,p,t,v,s,p,B.n),p,p,p,p,B.Cg,p,p,p),!0,!1,B.ag,!0,!1),p,p,20,20,p,p))}return A.c4(w,n,new A.an(B.a0,p,B.ad,B.t,l,p),p,!1,!1,p,p)}}
C.dgT.prototype={}
C.bgq.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w="Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree."
else w=this.e?"Photos and family books stay on this device. Admin skips cloud codes.":"Full trees stay local. QR works 2 times \u2014 names & dates sync to cloud only."
v=A.m(24)
u=A.a([new A.ac(0,B.G,B.aY.j(0.32),B.kz,28)],x.V)
t=A.ap(p,A.X(B.uT,B.c.j(0.07),p,p,p,110),p,p,p,-20,-10,p)
s=B.c.j(0.16)
r=A.m(18)
q=x.p
return A.q(p,new A.an(B.a0,p,B.ad,B.t,A.a([t,new A.D(B.ac,A.A(A.a([A.q(p,D.c0J,B.f,p,p,new A.p(s,p,A.L(B.c.j(0.35),B.r,1.5),r,p,p,B.n),p,56,p,p,p,p,p,56),B.oT,A.E(A.x(A.a([D.fGj,B.U,A.d(w,p,p,p,p,p,p,A.l(p,p,B.c.j(0.9),p,p,p,p,p,p,p,p,13,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),p,p,p)],q),B.E,p,B.e,B.i,0,B.p),1)],q),B.E,p,B.e,B.i,0,p,p),p)],q),p),B.f,p,p,new A.p(p,p,p,v,u,D.c8F,B.n),p,p,p,p,p,p,p,p)}}
C.adn.prototype={
B(d){var w=null
return A.A(A.a([A.q(w,w,B.f,w,w,new A.p(B.aY,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3),B.ae,A.d(this.d.toUpperCase(),w,w,w,w,w,w,A.l(w,w,this.c.e,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)}}
C.bgo.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.x,o=A.m(18),n=A.m(18),m=r.c,l=r.y,k=l?B.aI.j(0.4):m.c
k=A.L(k,B.r,l?1.5:1)
l=l?A.a([new A.ac(0,B.G,B.aI.j(0.1),B.cM,12)],x.V):q
w=p==null?0.45:1
v=r.w.j(0.14)
u=A.m(12)
t=r.r
s=A.L(t.j(0.35),B.r,1)
return A.aJ(!1,B.a3,!0,q,A.aP(!1,o,!0,A.eJ(A.da(new A.D(E.a05,A.x(A.a([A.q(q,A.X(r.d,t,q,q,q,22),B.f,q,q,new A.p(v,q,s,u,q,q,B.n),q,q,q,q,B.rS,q,q,q),B.af,A.d(r.e,q,q,q,q,q,q,A.l(q,q,m.d,q,q,q,q,q,q,q,q,13,q,q,B.u,q,1.2,!0,q,q,q,q,q,q,q,q),q,q,q),B.bG,A.d(r.f,q,q,q,q,q,q,A.l(q,q,m.e,q,q,q,q,q,q,q,q,11,q,q,B.cC,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],x.p),B.E,q,B.e,B.i,0,B.p),q),w),q,new A.p(m.b,q,k,n,l,q,B.n),q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,p,q,q,q,q,q,q,q),B.f,B.L,0,q,q,q,q,q,B.aj)}}
C.bgt.prototype={
B(d){var w=this,v=null,u=A.m(18),t=A.m(18),s=w.c,r=A.L(s.c,B.r,1),q=B.aY.j(0.14),p=A.m(12),o=s.e,n=x.p
return A.aJ(!1,B.a3,!0,v,A.aP(!1,u,!0,A.eJ(new A.D(B.eW,A.A(A.a([A.q(v,D.c_Y,B.f,v,v,new A.p(q,v,A.L(B.aY.j(0.35),B.r,1),p,v,v,B.n),v,v,v,v,B.rS,v,v,v),B.bd,A.E(A.x(A.a([A.d(w.d,v,v,v,v,v,v,A.l(v,v,s.d,v,v,v,v,v,v,v,v,v,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(""+w.e+" members",v,v,v,v,v,v,A.l(v,v,o,v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],n),B.E,v,B.e,B.i,0,B.p),1),A.X(B.hW,o,v,v,v,20)],n),B.m,v,B.e,B.i,0,v,v),v),v,new A.p(s.b,v,r,t,v,v,B.n),v,v,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),B.f,B.L,0,v,v,v,v,v,B.aj)}}
C.a0p.prototype={
S(){return new C.aEW()},
gd1(){return this.c}}
C.aEW.prototype={
Y(){this.a2()
this.aa5()},
aa5(){var w=0,v=A.j(x.H),u=this,t
var $async$aa5=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.b3C(u.a.c,B.E3),$async$aa5)
case 2:t=e
if(u.c!=null)u.m(new C.e2e(u,t))
return A.h(null,v)}})
return A.i($async$aa5,v)},
aiC(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aiC=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.d){w=1
break}q.m(new C.e2f(q))
t=4
p=A.hq_(q.a.d,B.E3)
if(p==null){n=A.bc("Could not read this QR code.")
throw A.W(n)}n=q.a
m=n.c
l=n.d
w=7
return A.b(A.at8(n.e,m,l,B.E3,p,n.f),$async$aiC)
case 7:if(q.c==null){r=[1]
w=5
break}q.m(new C.e2g(q))
q.c.L(x.q).f.U(D.fhs)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
o=A.ab(j)
n=q.c
if(n==null){r=[1]
w=5
break}n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(B.a.em(J.k(o),"StateError: ",""),null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.e2h(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$aiC,v)},
B(d){var w,v,u,t,s,r=this,q=null,p=A.S(d).ax.a===B.J,o=p?B.jz:B.qf,n=p?B.iA:B.c,m=r.a.f,l=m>=999?"Unlimited (admin)":""+m+" scans left"
m=A.eH(q,q,q,!0,!0,o,q,1,!0,q,0,!1,q,!1,q,q,q,q,!0,q,q,q,q,q,D.fWL,q,q,q,1,q,!0)
w=A.m(24)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.qa(q,q,!1,r.a.d,q,!0,!0,q,!1,B.c)
t=A.d(l,q,q,q,q,q,q,A.l(q,q,B.aY,q,q,q,q,q,q,q,q,q,q,q,B.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
s=x.p
w=A.E(A.q(q,A.x(A.a([B.U,u,B.bz,t,B.U,A.d("Scan on another phone to restore photos, family book, and all tree details. Works only 2 times total.",q,q,q,q,q,q,A.l(q,q,p?B.aS:B.am,q,q,q,q,q,q,q,q,13,q,q,q,q,1.4,!0,q,q,q,q,q,q,q,q),B.K,q,q)],s),B.m,q,B.ba,B.i,0,B.p),B.f,q,q,new A.p(n,q,v,w,q,q,B.n),q,q,q,q,B.ac,q,q,1/0),1)
v=r.a.e
v=A.d("Code: "+v,q,q,q,q,q,q,A.l(q,q,p?B.ab:B.bv,q,q,q,q,q,q,q,q,q,q,q,B.V,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
u=r.d
t=u||r.e===!0?q:r.gcvL()
if(u)u=B.Ki
else u=A.X(r.e===!0?B.hG:B.aou,q,q,q,q,q)
w=A.a([w,B.af,v,B.af,new A.a5(1/0,q,A.es(u,A.d(r.e===!0?"Saved in QR Generator":"Save to QR Generator",q,q,q,q,q,q,B.cf,q,q,q),t,A.di(q,q,q,q,q,q,q,q,q,B.aY,q,B.h3,q,q,q,new A.ay(B.aY.j(0.55),1,B.r,-1),q,q,q,q)),q)],s)
if(r.e===!0)w.push(new A.D(B.ib,A.d("Labeled \u201cNGMY Family Tree\u201d in Hub \u2192 QR Code Generator \u2192 Saved. Delete it there to save a new one.",q,q,q,q,q,q,A.l(q,q,p?B.aD:B.am,q,q,q,q,q,q,q,q,11,q,q,q,q,1.35,!0,q,q,q,q,q,q,q,q),B.K,q,q),q))
w.push(B.X)
w.push(new A.a5(1/0,q,A.bI(B.AQ,q,new C.e2i(d),A.bp(B.aY,q,q,q,q,B.h3,q,q,q,q,q,q)),q))
return A.c4(m,o,new A.D(B.ac,A.x(w,B.m,q,B.e,B.i,0,B.p),q),q,!1,!1,q,q)}}
C.a0q.prototype={
S(){return new C.blG(A.zT(B.yq,B.o2,B.v0))}}
C.blG.prototype={
t(){this.d.t()
this.a3()},
B(d){var w=null
return A.c4(A.eH(w,w,w,!0,!0,B.w,w,1,!0,w,w,!1,w,!1,w,w,w,w,!0,w,w,w,w,w,D.fOv,w,w,w,1,w,!0),B.w,A.zS(this.d,B.c_,new C.e2w(this,d)),w,!1,!1,w,w)}}
C.b_u.prototype={
B(d){var w=null
return A.d(this.c,w,w,w,w,w,w,A.l(w,w,w,w,w,w,w,w,"Noto Color Emoji",B.RX,w,this.d,w,w,w,w,1,!0,w,w,w,w,w,w,w,w),w,w,w)}}
C.lV.prototype={}
C.a7b.prototype={
S(){return new C.blm(null,null)}}
C.blm.prototype={
Y(){var w=this,v=null
w.a2()
w.d=A.bm(v,B.rL,v,1,v,w)
w.e=A.bm(v,B.qp,v,1,v,w)
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
this.byL()},
B(d){var w,v,u=this,t=B.d.dP(D.a64,new C.dOP(u),new C.dOQ())
u.a.toString
w=u.d
w===$&&A.c()
v=u.e
v===$&&A.c()
return A.cCj(A.c9(new A.h5(A.a([w,v],x.dS)),new C.dOR(u,t),null),!0)}}
C.bll.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this
switch(p.b){case"construction":p.b3n(d,e)
break
case"house":p.mg(d,e,D.dfi)
w=p.c
v=0.5+0.5*Math.sin(w*3.141592653589793*2)
u=e.gdA()
$.Q()
t=A.K()
t.r=B.c.j(0.18+v*0.12).gp(0)
d.N(new A.o(e.a*0.5,e.b*0.38),u*(0.22+v*0.06),t)
p.mm(d,e,B.c.j(0.4),-w*3.141592653589793*2,20)
p.Bt(d,e,12)
p.yC(d,e,B.lc,5,14)
break
case"grocery":p.ckD(d,e)
break
case"calculator":p.ckk(d,e)
break
case"lumber":p.ckL(d,e)
break
case"kitchen":p.ckG(d,e)
break
case"landscape":p.mg(d,e,D.dfV)
s=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
w=e.b
u=w*0.72
s.D(new A.aZ(0,u))
t=e.a
r=p.c*3.141592653589793*2
s.D(new A.c5(t*0.25,w*(0.62+Math.sin(r)*0.04),t*0.5,u))
s.D(new A.c5(t*0.75,w*(0.82+Math.cos(r)*0.04),t,w*0.68))
s.D(new A.aq(t,w))
s.D(new A.aq(0,w))
s.D(new A.bu())
w=A.K()
w.r=B.eo.j(0.85).gp(0)
d.af(s,w)
p.Bt(d,e,8)
p.yC(d,e,B.i7,4,18)
break
case"plumbing":p.ckU(d,e)
break
case"electrical":p.mg(d,e,D.dru)
w=p.c
q=(Math.sin(w*3.141592653589793*4)+1)/2
$.Q()
u=A.K()
u.r=B.c.j(q*0.12).gp(0)
d.ar(new A.a1(0,0,0+e.a,0+e.b),u)
p.mm(d,e,B.c.j(0.5+q*0.3),-w*3.141592653589793*3,10)
p.mm(d,e,B.m2.j(0.35+q*0.2),p.d*3.141592653589793*4,18)
p.Bt(d,e,10)
break
case"store":p.cl3(d,e)
break
case"paint_remodel":p.ckP(d,e)
break
case"roofing":p.ckW(d,e)
break
case"warehouse":p.cla(d,e)
break
case"vehicles":p.cl8(d,e)
break
case"farm":p.ckx(d,e)
break
case"restaurant":p.ckV(d,e)
break
case"tools":p.cl6(d,e)
break
case"wallet":p.cl9(d,e)
break
case"concrete":p.ckq(d,e)
break
case"blueprint":p.cki(d,e)
break
default:p.b3n(d,e)}},
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
d.cC(A.bX(t,s),u,u+0.1439896632895322-u,!1,w)}},
yC(d,e,f,g,h){var w,v,u,t,s,r,q=e.a/2,p=e.b/2,o=e.gdA()/2-h
for(w=this.c*3.141592653589793*2,v=0;v<g;++v){u=w+v/g*3.141592653589793*2
t=Math.cos(u)
s=Math.sin(u)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.T,B.P)
r.r=f.j(0.55+0.35*Math.sin(u*2)).gp(0)
d.N(new A.o(q+t*o,p+s*o),3.5,r)}},
Bt(d,e,f){var w,v,u,t,s,r,q,p
for(w=this.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<f;++t){s=(Math.sin(w+t*0.8)+1)/2
r=B.j.F(t*0.17,0.9)
q=B.j.F(t*0.23,0.85)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=B.c.j(0.2+s*0.6).gp(0)
d.N(new A.o(v*(r+0.05),u*(q+0.08)),1.5+s*2.5,p)}},
b3n(d,e){var w,v=this
v.mg(d,e,D.dpQ)
w=v.c
v.mm(d,e,B.c.j(0.55),w*3.141592653589793*2,12)
v.mm(d,e,B.bN.j(0.45),-w*3.141592653589793*1.4,22)
v.bQo(d,e,B.i4,w)
v.yC(d,e,B.c.j(0.7),6,8)},
bQo(d,e,f,g){var w,v,u,t,s,r
$.Q()
w=A.K()
w.r=f.j(0.35).gp(0)
for(v=e.b,u=g*3.141592653589793*2,t=16+(e.a-32),s=0;s<3;++s){r=v*(0.25+s*0.22)+Math.sin(u+s)*4
d.ar(new A.a1(16,r,t,r+3),w)}},
ckD(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.cum)
for(w=l.c*3.141592653589793*2,v=e.a,u=e.b,t=0;t<6;++t){s=w+t*1.1
r=B.o.F(t,3)
q=Math.sin(s)
p=B.o.aq(t,3)
o=Math.cos(s*0.8)
n=B.o.F(t,2)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=D.ddt[B.o.F(t,4)].j(0.85).gp(0)
d.N(new A.o(v*(0.15+r*0.28)+q*8,u*(0.18+p*0.55)+o*10),7+n*2,m)}l.mm(d,e,B.c.j(0.35),w,16)
l.yC(d,e,B.i7,5,12)},
ckk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null
i.mg(d,e,D.cuu)
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
p=A.fq(h,B.cr,h,h,h,h,B.a5,B.bX,h,B.dz,B.bY)
for(o=0;o<6;++o){n=v+o*0.9
r=D.dhI[o]
q=B.c.j(0.35+0.25*Math.sin(n))
m=B.o.F(o,2)
p.sb1(0,new A.en(r,h,h,B.cJ,h,h,h,h,h,h,new A.G(!0,q,h,h,h,h,14+m*4,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a4(d,new A.o(t*(0.08+B.o.F(o,3)*0.3)+Math.sin(n)*6,s*(0.12+B.o.aq(o,3)*0.62)+Math.cos(n)*5))}for(v=i.d,r=v*3.141592653589793,q=r*2,o=0;o<6;++o){n=q+o*0.85
m=D.cuw[o]
l=B.kK.j(0.28+0.3*Math.sin(n))
k=B.o.F(o,2)
p.sb1(0,new A.en(m,h,h,B.cJ,h,h,h,h,h,h,new A.G(!0,l,h,h,h,h,12+k*3,B.H,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)))
p.e5()
p.a4(d,new A.o(t*(0.55+B.o.F(o,3)*0.12)+Math.cos(n)*7,s*(0.08+B.o.aq(o,3)*0.38)+Math.sin(n)*6))}i.mm(d,e,B.c.j(0.35),w*1.5,14)
i.mm(d,e,B.eK.j(0.55),-v*3.141592653589793*2,8)
i.mm(d,e,B.y4.j(0.4),r*2.8,22)
i.yC(d,e,B.q6,8,10)
i.Bt(d,e,14)
for(w=v*0.35,t-=12,o=0;o<4;++o){j=s*B.j.F(w+o*0.22,0.9)
$.Q()
v=new A.ao(B.O,B.M,B.R,B.T,B.P)
v.r=B.c.j(0.08+0.06*Math.sin(q+o)).gp(0)
v.c=1.2
d.ah(new A.o(12,j),new A.o(t,j),v)}},
ckL(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,W.aAe)
for(w=o.c*3.141592653589793*2,v=e.b*0.14,u=20+(e.a-40),t=0;t<5;++t){s=Math.sin(w+t*0.7)
r=v+t*v
q=A.bl(new A.a1(20,r,u,r+10),B.hO)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=A.ar(B.fY,B.o7,(s+1)/2).gp(0)
d.am(q,p)}o.mm(d,e,B.fY.j(0.35),w,15)
o.Bt(d,e,8)},
ckG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.mg(d,e,D.ddY)
for(w=l.c,v=w*3.141592653589793*2,u=e.a,t=e.b,s=0;s<8;++s){r=v+s*0.75
q=(Math.sin(r)+1)/2
p=B.j.F(s*0.11,0.85)
o=Math.sin(r*1.3)
n=B.j.F(s*0.13,0.7)
$.Q()
m=new A.ao(B.O,B.M,B.R,B.T,B.P)
m.r=B.c.j(0.25+q*0.55).gp(0)
d.N(new A.o(u*(0.1+p)+o*12,t*(0.15+n)),2+q*3,m)}l.mm(d,e,B.bN.j(0.4),-w*3.141592653589793*2.2,11)
l.yC(d,e,B.q3,4,14)},
ckU(d,e){var w,v,u,t,s,r,q,p,o,n=this
n.mg(d,e,D.d29)
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=n.c*0.08,w/=2,u*=0.55,r=0;r<3;++r){q=Math.min(v,t)
p=B.j.F(s,0.12)
$.Q()
o=new A.ao(B.O,B.M,B.R,B.T,B.P)
o.b=B.a9
o.c=2
o.r=B.c.j(0.45-r*0.12).gp(0)
d.N(new A.o(w,u),q*(0.12+r*0.14+p),o)}n.yC(d,e,B.pc,6,12)
n.mm(d,e,B.c.j(0.3),-n.d*3.141592653589793*2,18)},
cl3(d,e){var w,v,u,t,s,r,q,p=this
p.mg(d,e,D.cIc)
for(w=p.c*3.141592653589793*2,v=e.a-28,u=v/4-4,t=0;t<4;++t){s=Math.sin(w+t*1.5)
r=14+t*v/4
r=A.bl(new A.a1(r,14,r+u,22),B.iw)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.r=A.ar(B.fm,B.bN,(s+1)/2).gp(0)
d.am(r,q)}p.mm(d,e,B.c.j(0.3),w,16)
p.Bt(d,e,8)
p.yC(d,e,B.vZ,5,13)},
ckP(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d8t)
for(w=this.c,v=e.a,u=e.b,t=0;t<4;++t){s=B.j.F(w+t*0.2,1)
r=v*(0.18+t*0.18)
q=u*(0.15+s*0.55)
q=A.bl(new A.a1(r,q,r+8,q+(18+s*22)),B.hP)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.T,B.P)
r.r=[B.iq,B.du,B.bN,B.eu][t].j(0.85).gp(0)
d.am(q,r)}this.mm(d,e,B.c.j(0.45),w*3.141592653589793*2.5,13)},
ckW(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.d5R)
for(w=e.b,v=this.c*0.35,u=e.a,t=0;t<8;++t){s=w*(0.12+B.j.F(v+t*0.12,0.75))
r=B.o.F(t,4)*0.22
$.Q()
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.r=B.c.j(0.25).gp(0)
q.c=1.5
d.ah(new A.o(u*(0.1+r),s),new A.o(u*(0.18+r),s+10),q)}this.yC(d,e,B.ct,7,11)},
cla(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.cKX)
for(w=this.c,v=w*3.141592653589793*2,u=e.b*0.55,t=e.a-44,s=0;s<4;++s){r=v+s
q=22+s*16
p=u-s*14+Math.sin(r)*4
p=A.bl(new A.a1(q,p,q+(t-s*8),p+16),B.hO)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.r=A.ar(B.ct,B.aQ,(Math.sin(r)+1)/2).gp(0)
d.am(p,q)}this.mm(d,e,B.c.j(0.35),-w*3.141592653589793*1.8,15)},
cl8(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dvF)
for(w=e.a,v=this.c*0.45,u=e.b,t=0;t<5;++t){s=w*(B.j.F(v+t*0.18,1.1)-0.05)
r=u*(0.62+B.o.F(t,2)*0.08)
r=A.bl(new A.a1(s,r,s+28,r+8),B.hO)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.r=B.c.j(0.35+t*0.08).gp(0)
d.am(r,q)}this.Bt(d,e,6)},
ckx(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dcy)
w=this.c*3.141592653589793*2
v=Math.sin(w)
u=e.a
t=e.b
$.Q()
s=A.K()
s.r=B.m2.j(0.75).gp(0)
d.N(new A.o(u*0.82,t*0.18),14+(0.5+0.5*v)*4,s)
for(v=t*0.72,t*=0.52,r=0;r<6;++r){s=Math.sin(w+r)
q=u*(0.12+r*0.14)
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=B.hm.j(0.85).gp(0)
p.c=3
d.ah(new A.o(q,v),new A.o(q+s*6,t),p)}this.mm(d,e,B.m2.j(0.35),w,14)},
ckV(d,e){var w,v,u,t,s,r,q=this
q.mg(d,e,D.df7)
for(w=q.c*3.141592653589793*2,v=e.a,u=e.b*0.42,t=0;t<4;++t){s=A.bs(new A.o(v*(0.28+t*0.16),u+Math.sin(w+t*0.9)*8),18,10)
$.Q()
r=new A.ao(B.O,B.M,B.R,B.T,B.P)
r.r=B.c.j(0.22).gp(0)
d.bZ(s,r)}q.yC(d,e,B.q3,5,16)
q.Bt(d,e,7)},
cl6(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dt3)
w=o.c
v=w*3.141592653589793
o.mm(d,e,B.o7.j(0.55),v*3,10)
o.mm(d,e,B.c.j(0.25),-w*3.141592653589793*2,24)
for(w=v*2,v=e.a/2,u=e.b/2,t=0;t<3;++t){s=w+t*2.1
r=Math.cos(s)
q=Math.sin(s)
$.Q()
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=B.o7.j(0.8).gp(0)
d.N(new A.o(v+r*34,u+q*22),4,p)}},
cl9(d,e){var w,v,u,t,s,r,q,p,o=this
o.mg(d,e,D.dwk)
for(w=o.c*3.141592653589793,v=w*2,u=e.a,t=e.b,s=0;s<5;++s){r=(Math.sin(v+s*1.2)+1)/2
q=u*(0.2+s*0.03)
p=t*(0.28+r*0.08)
p=A.bl(new A.a1(q,p,q+36,p+22),B.iw)
$.Q()
q=new A.ao(B.O,B.M,B.R,B.T,B.P)
q.r=A.ar(B.i7,B.m2,r).gp(0)
d.am(p,q)}o.Bt(d,e,9)
o.mm(d,e,B.c.j(0.4),w*2.2,12)},
ckq(d,e){var w,v,u,t,s,r,q,p
this.mg(d,e,D.dkE)
w=this.c*3.141592653589793*2
v=e.a/2
u=e.b*0.55
t=A.bX(new A.o(v,u),34)
$.Q()
s=A.K()
s.b=B.a9
s.c=5
s.r=B.c.j(0.45).gp(0)
d.cC(t,w,3.7699111843077517,!1,s)
for(r=0;r<6;++r){q=w+r*1.05
t=Math.cos(q)
s=Math.sin(q)
p=new A.ao(B.O,B.M,B.R,B.T,B.P)
p.r=B.bP.j(0.85).gp(0)
d.N(new A.o(v+t*34,u+s*34),3,p)}},
cki(d,e){var w,v,u,t,s,r,q
this.mg(d,e,D.dge)
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
u.r=B.du.j(0.45).gp(0)
d.ar(new A.a1(0,q,0+v,q+6),u)
this.mm(d,e,B.lc.j(0.45),-r*3.141592653589793*2,11)},
aE(d){return d.c!==this.c||d.d!==this.d||d.b!==this.b}}
C.atU.prototype={
a08(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a08=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=3
return A.b(C.aRz(),$async$a08)
case 3:r=e
if(r==null){w=1
break}s=t.c
w=s!=null&&s!==r?4:5
break
case 4:w=6
return A.b(C.a9o(s),$async$a08)
case 6:case 5:t.d.$1(r)
case 1:return A.h(u,v)}})
return A.i($async$a08,v)},
ahb(d){return this.cns(d)},
cns(d){var w=0,v=A.j(x.H),u=this,t
var $async$ahb=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=2
return A.b(C.ir9(d),$async$ahb)
case 2:t=f
if(t!=null)u.d.$1(t)
return A.h(null,v)}})
return A.i($async$ahb,v)},
B(d){var w,v,u,t=null,s=A.S(d),r=this.c,q=r!=null&&B.a.i(r).length!==0
r=q?r:"ngmy:thumb:construction"
s=s.ax.a===B.J?B.jS:B.jj
w=x.p
v=A.a([C.aRY(!0,B.rh,1/0,B.qB,t,r,1/0)],w)
if(!q){u=A.a([B.L,B.w.j(0.35)],x.O)
v.push(A.c3(new A.bL(B.b7,t,t,new A.D(B.uo,A.d("Pick a theme or your own photo",t,t,t,t,t,t,A.l(t,t,B.c.j(0.92),t,t,t,t,t,t,t,t,11,t,t,B.V,t,t,!0,t,t,t,t,t,B.aBc,t,t),t,t,t),t),t),new A.p(t,t,t,t,t,new A.a9(B.b7,B.b9,B.x,u,t,t),B.n),B.bi))}v.push(A.ap(8,A.A(A.a([A.E(A.dh(D.bUx,D.fCz,new C.co3(this,d),A.bp(B.aY,t,t,t,B.c,t,B.jZ,t,t,t,t,B.ce)),1),B.ae,A.E(A.es(D.c1Z,D.fRH,this.gceo(),A.di(t,t,B.w.j(0.35),t,t,t,t,t,t,B.c,t,t,B.jZ,t,t,D.b4u,t,t,t,B.ce)),1)],w),B.m,t,B.e,B.i,0,t,t),t,t,8,8,t,t))
return new A.fF(1.7777777777777777,A.aJ(!1,B.a3,!0,B.rh,new A.an(B.a0,t,B.b2,B.t,v,t),B.aq,s,0,t,t,t,t,t,B.aj),t)}}
C.aMY.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a3()}}
C.aUX.prototype={}
C.aUW.prototype={}
C.aSX.prototype={}
C.a_3.prototype={
S(){return new C.aA8()}}
C.aA8.prototype={
Y(){var w,v,u=this
u.a2()
u.a.toString
w=new A.ba("",B.b6,B.aP)
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(w,v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
KH(){var w,v,u=this,t=u.d
t===$&&A.c()
w=B.a.i(t.a.a)
if(w.length===0){u.c.L(x.q).f.U(D.fhX)
return}t=u.c
t.toString
v=u.e
A.a6(t,!1).O(new C.aUX(w,v))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=A.S(d).ax.a===B.J,l=m?B.e9:B.c,k=A.m(20),j=A.q(n,D.c1E,B.f,n,n,new A.p(B.aY.j(0.15),n,n,A.m(12),n,n,B.n),n,44,n,n,n,n,n,44),i=A.d("Create Project",n,n,n,n,n,n,A.l(n,n,m?B.aQ:B.as,n,n,n,n,n,n,n,n,18,n,n,B.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),h=x.p
i=A.E(A.x(A.a([i,B.bG,A.d("Add a thumbnail and budget items after creating.",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bq,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],h),B.E,n,B.e,B.i,0,B.p),1)
j=A.A(A.a([j,B.bd,i,A.aG(n,n,n,n,A.X(B.cz,m?B.bu:B.bq,n,n,n,n),n,n,n,new C.d83(d),n,n,n,n,n,n)],h),B.m,n,B.e,B.i,0,n,n)
i=A.d("Project thumbnail (16:9)",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bq,n,n,n,n,n,n,n,n,12,n,n,B.V,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
w=A.d("Full animated preview \u2014 use Themes or Your photos below",n,n,n,n,n,n,A.l(n,n,m?B.bu:B.bq,n,n,n,n,n,n,n,n,11,n,n,B.cC,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
v=C.hqf(new C.d84(o),o.e)
u=o.d
u===$&&A.c()
t=A.l(n,n,m?B.aQ:B.as,n,n,n,n,n,n,n,n,n,n,n,B.a8,n,n,!0,n,n,n,n,n,n,n,n)
s=m?B.jS:B.jj
r=A.m(12)
q=A.m(12)
p=m?B.ef:B.bP
t=A.aM(n,B.Z,!0,n,!0,B.t,n,A.aN(),u,n,n,n,n,n,2,A.bt(n,new A.b6(4,r,B.dn),n,n,n,n,n,n,!0,new A.b6(4,q,new A.ay(p,1,B.r,-1)),n,n,n,n,n,s,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,"Kitchen remodel, Wedding, etc.",n,n,n,n,n,n,n,n,"Project name",!0,!0,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.y,!0,n,!0,n,!1,n,B.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,n,n,new C.d85(o),n,!1,n,n,!1,n,!0,n,B.ac,n,n,n,n,n,n,n,n,n,n,n,t,!0,B.a5,n,A0.Kp,n,n,n,n)
u=m?B.aQ:B.as
m=m?B.ef:B.bP
return A.eN(n,l,new A.cR(B.lZ,A.cg(A.x(A.a([j,B.aR,i,B.ax,w,B.U,v,B.aR,t,B.bz,A.A(A.a([A.E(A.dU(B.dl,new C.d86(d),A.di(n,n,n,n,n,n,n,n,n,u,n,n,B.co,n,new A.b9(A.m(12),B.a1),new A.ay(m,1,B.r,-1),n,n,n,n)),1),B.au,A.E(A.bI(D.fRX,n,o.ga3e(),A.bp(B.aY,n,n,n,B.c,n,B.co,n,new A.b9(A.m(12),B.a1),n,n,n)),1)],h),B.m,n,B.e,B.i,0,n,n)],h),B.E,n,B.e,B.Q,0,B.p),B.t,n,B.y,n,B.Ch,n,n,B.ah),n),n,n,n,A5.Ci,B.d7,n,new A.b9(k,B.a1),n)}}
C.a_2.prototype={
S(){return new C.aA7()}}
C.aA7.prototype={
Y(){this.a2()
var w=$.aw()
this.d!==$&&A.aQ()
this.d=new A.au(B.av,w)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
KH(){var w,v=this.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0){this.c.L(x.q).f.U(D.ffA)
return}v=this.c
v.toString
A.a6(v,!1).O(new C.aUW(w))},
B(d){var w,v,u,t,s,r,q=null,p=A.S(d).ax.a===B.J,o=p?B.e9:B.c,n=A.m(20),m=A.q(q,D.bZ9,B.f,q,q,new A.p(B.bQ.j(0.15),q,q,A.m(12),q,q,B.n),q,44,q,q,q,q,q,44),l=A.d("Create Family Tree",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.as,q,q,q,q,q,q,q,q,18,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),k=x.p
l=A.E(A.x(A.a([l,B.bG,A.d("Build generations with photos, notes, and profiles.",q,q,q,q,q,q,A.l(q,q,p?B.bu:B.bq,q,q,q,q,q,q,q,q,12,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],k),B.E,q,B.e,B.i,0,B.p),1)
m=A.A(A.a([m,B.bd,l,A.aG(q,q,q,q,A.X(B.cz,p?B.bu:B.bq,q,q,q,q),q,q,q,new C.d8_(d),q,q,q,q,q,q)],k),B.m,q,B.e,B.i,0,q,q)
l=B.aY.j(p?0.12:0.08)
w=A.m(12)
v=A.L(B.aY.j(0.25),B.r,1)
u=A.X(B.aog,B.aY.j(0.9),q,q,q,18)
l=A.q(q,A.A(A.a([u,B.au,A.E(A.d("Example: Historia ya M'Bembe",q,q,q,q,q,q,A.l(q,q,p?B.aQ:B.as,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),1)],k),B.m,q,B.e,B.i,0,q,q),B.f,q,q,new A.p(l,q,v,w,q,q,B.n),q,q,q,q,B.bE,q,q,1/0)
w=this.d
w===$&&A.c()
v=A.l(q,q,p?B.aQ:B.as,q,q,q,q,q,q,q,q,q,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q)
u=p?B.jS:B.jj
t=A.m(12)
s=A.m(12)
r=p?B.ef:B.bP
v=A.aM(q,B.Z,!0,q,!0,B.t,q,A.aN(),w,q,q,q,q,q,2,A.bt(q,new A.b6(4,t,B.dn),q,q,q,q,q,q,!0,new A.b6(4,s,new A.ay(r,1,B.r,-1)),q,q,q,q,q,u,!0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"Enter your family name or title",q,q,q,q,q,q,q,q,"Family tree name",!0,!0,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q),B.y,!0,q,!0,q,!1,q,B.ak,q,q,q,q,q,q,q,q,q,1,q,q,!1,"\u2022",q,q,q,new C.d80(this),q,!1,q,q,!1,q,!0,q,B.ac,q,q,q,q,q,q,q,q,q,q,q,v,!0,B.a5,q,B.l3,q,q,q,q)
w=p?B.aQ:B.as
p=p?B.ef:B.bP
return A.eN(q,o,new A.cR(B.lZ,A.cg(A.x(A.a([m,B.aR,l,B.aB,v,B.bz,A.A(A.a([A.E(A.dU(B.dl,new C.d81(d),A.di(q,q,q,q,q,q,q,q,q,w,q,q,B.co,q,new A.b9(A.m(12),B.a1),new A.ay(p,1,B.r,-1),q,q,q,q)),1),B.au,A.E(A.bI(D.fZ1,q,this.ga3e(),A.bp(B.bQ,q,q,q,B.c,q,B.co,q,new A.b9(A.m(12),B.a1),q,q,q)),1)],k),B.m,q,B.e,B.i,0,q,q)],k),B.E,q,B.e,B.Q,0,B.p),B.t,q,B.y,q,B.Ch,q,q,B.ah),q),q,q,q,A5.Ci,B.d7,q,new A.b9(n,B.a1),q)}}
C.ZA.prototype={
S(){return new C.ayS()}}
C.ayS.prototype={
Y(){var w,v=this
v.a2()
w=$.aw()
v.d!==$&&A.aQ()
v.d=new A.au(B.av,w)
v.e!==$&&A.aQ()
v.e=new A.au(new A.ba("1",B.b6,B.aP),w)
v.f!==$&&A.aQ()
v.f=new A.au(B.av,w)
v.r!==$&&A.aQ()
v.r=new A.au(B.av,w)},
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
gJZ(){var w,v=this.e
v===$&&A.c()
w=A.d1(B.a.i(v.a.a))
if(w==null||w<=0)return 1
return w},
gakm(){var w=this.f
w===$&&A.c()
w=A.d1(B.a.i(w.a.a))
return w==null?0:w},
gb69(){var w,v=this.w
if(v==="other"){v=this.r
v===$&&A.c()
w=B.a.i(v.a.a)
return w.length===0?"units":w}return v},
aQy(d){var w,v=B.j.E(this.gJZ()+d,0.25,999999),u=B.j.iY(v),t=this.e
t===$&&A.c()
if(v===u)u=B.o.u(B.j.M(v))
else{u=B.j.ad(v,2)
w=A.ag("\\.?0+$",!0,!1,!1,!1)
u=A.aL(u,w,"")}t.sb1(0,u)
this.m(new C.cGq())},
azz(d,e,f,g){var w=null,v=g!=null?A.X(g,B.aY,w,w,w,20):w,u=d.a,t=u?B.jS:B.jj,s=A.m(14),r=A.m(14)
u=u?B.ef:B.bP
return A.bt(w,new A.b6(4,s,B.dn),w,B.bE,w,w,w,w,!0,new A.b6(4,r,new A.ay(u,1,B.r,-1)),w,w,w,w,w,t,!0,w,w,w,w,new A.b6(4,A.m(14),B.adJ),w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w,w,e,!0,!0,!1,w,v,w,w,w,w,w,w,w,w,w,w,w,w)},
cep(d,e,f){return this.azz(d,e,f,null)},
KH(){var w,v,u,t,s=this,r=s.d
r===$&&A.c()
w=B.a.i(r.a.a)
if(s.gakm()<=0){s.c.L(x.q).f.U(D.fjP)
return}r=s.c
r.toString
v=s.gJZ()
u=s.gakm()
t=s.gb69()
A.a6(r,!1).O(new C.aSX(w,v,u,t))},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=A.S(d).ax.a===B.J,m=new C.ug(n),l=n?B.e9:B.c,k=A.m(24),j=x.O,i=A.a([B.aY.j(0.22),B.bQ.j(0.14)],j),h=A.m(14)
i=A.q(o,D.bSt,B.f,o,o,new A.p(o,o,A.L(B.aY.j(0.35),B.r,1),h,o,new A.a9(B.a6,B.aa,B.x,i,o,o),B.n),o,48,o,o,o,o,o,48)
h=A.d("Add Budget Item",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.as,o,o,o,o,o,o,o,o,19,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
w=x.p
h=A.E(A.x(A.a([h,B.bG,A.d("Amount required \xb7 name optional",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,12,o,o,B.cC,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1)
i=A.A(A.a([i,B.bd,h,A.aG(o,o,o,o,A.X(B.cz,n?B.bu:B.bq,o,o,o,o),o,o,o,new C.cGw(d),o,o,o,o,o,o)],w),B.m,o,B.e,B.i,0,o,o)
h=p.d
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.as,o,o,o,o,o,o,o,o,o,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o)
v=A.aM(o,B.Z,!0,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.azz(m,"Item name (optional)","Lumber, paint, labor\u2026",B.Pt),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,A0.Kp,o,o,o,o)
h=A.d("Units",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,12,o,o,B.H,o,o,!0,o,0.3,o,o,o,o,o,o),o,o,o)
u=n?B.jS:B.jj
t=A.m(14)
s=A.L(n?B.ef:B.bP,B.r,1)
r=A.aG(o,o,o,o,A.X(B.wG,n?B.aQ:B.as,o,o,o,20),o,o,o,new C.cGx(p),o,o,o,o,o,B.ce)
q=p.e
q===$&&A.c()
q=A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),q,o,o,o,o,o,2,D.c3y,B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e6,o,o,o,1,o,o,!1,"\u2022",o,new C.cGy(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.as,o,o,o,o,o,o,o,o,16,o,o,B.u,o,o,!0,o,o,o,o,o,o,o,o),!0,B.K,o,B.ao,o,o,o,o)
u=A.q(o,A.A(A.a([r,new A.a5(52,o,q,o),A.aG(o,o,o,o,A.X(B.hV,n?B.aQ:B.as,o,o,o,20),o,o,o,new C.cGz(p),o,o,o,o,o,B.ce)],w),B.m,o,B.e,B.Q,0,o,o),B.f,o,o,new A.p(u,o,s,t,o,o,B.n),o,o,o,o,o,o,o,o)
t=p.f
t===$&&A.c()
s=A.l(o,o,n?B.aQ:B.as,o,o,o,o,o,o,o,o,16,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o)
s=A.A(A.a([u,B.au,A.E(A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),t,o,o,o,o,o,2,p.azz(m,"Amount","0.00",B.ic),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,B.e6,o,o,o,1,o,o,!1,"\u2022",o,new C.cGA(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,s,!0,B.a5,o,B.ao,o,o,o,o),1)],w),B.E,o,B.e,B.i,0,o,o)
t=x.gv
u=A.C(new A.N(D.d9_,new C.cGB(p,m),t),t.k("ak.E"))
i=A.a([i,B.bz,v,B.aB,h,B.U,s,B.af,A.bW(B.bH,u,B.bt,o,6,6)],w)
if(p.w==="other"){h=p.r
h===$&&A.c()
v=A.l(o,o,n?B.aQ:B.as,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
B.d.v(i,A.a([B.X,A.aM(o,B.Z,!1,o,!0,B.t,o,A.aN(),h,o,o,o,o,o,2,p.cep(m,"Custom unit","rolls, sheets, trips\u2026"),B.y,!0,o,!0,o,!1,o,B.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.cGC(p),o,o,o,!1,o,o,!1,o,!0,o,B.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,B.a5,o,B.l3,o,o,o,o)],w))}i.push(B.aR)
h=B.aY.j(n?0.18:0.1)
j=A.a([h,B.bQ.j(n?0.12:0.06)],j)
h=A.m(16)
v=A.L(B.aY.j(0.35),B.r,1)
u=A.d("Line total",o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,11,o,o,B.V,o,o,!0,o,0.4,o,o,o,o,o,o),o,o,o)
t=p.gJZ()===B.j.iY(p.gJZ())?B.j.M(p.gJZ()):p.gJZ()
s=p.gb69()
r=A.Bn(p.gakm())
i.push(A.q(o,A.A(A.a([A.E(A.x(A.a([u,B.ax,A.d(A.w(t)+" "+s+" \xd7 "+r,o,o,o,o,o,o,A.l(o,o,n?B.bu:B.bq,o,o,o,o,o,o,o,o,12,o,o,B.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],w),B.E,o,B.e,B.i,0,B.p),1),C.bFw(p.gJZ()*p.gakm(),B.b1,!1,B.u)],w),B.m,o,B.e,B.i,0,o,o),B.f,o,o,new A.p(o,o,v,h,o,new A.a9(B.a6,B.aa,B.x,j,o,o),B.n),o,o,o,o,B.jm,o,o,o))
i.push(B.bz)
j=A.m(14)
h=n?B.ef:B.bP
h=A.di(o,o,o,o,o,o,o,o,o,o,o,o,B.co,o,new A.b9(j,B.a1),new A.ay(h,1,B.r,-1),o,o,o,o)
i.push(A.A(A.a([A.E(A.dU(A.d("Cancel",o,o,o,o,o,o,A.l(o,o,n?B.aQ:B.as,o,o,o,o,o,o,o,o,o,o,o,B.V,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),new C.cGD(d),h),1),B.au,A.E(A.dh(D.arK,D.fUV,p.ga3e(),A.bp(B.aY,o,o,0,B.c,o,B.co,o,new A.b9(A.m(14),B.a1),o,o,o)),2)],w),B.m,o,B.e,B.i,0,o,o))
return A.eN(o,l,new A.cR(Ah.Xr,A.cg(A.x(i,B.al,o,B.e,B.Q,0,B.p),B.t,o,B.y,o,Ak.rQ,o,o,B.ah),o),o,o,o,B.O6,B.d7,o,new A.b9(k,B.a1),o)}}
C.a2c.prototype={
S(){return new C.by3()}}
C.by3.prototype={
Y(){var w,v,u=this
u.a2()
w=u.a.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,B.b6,B.aP),v)},
t(){var w=this.d
w===$&&A.c()
w.T$=$.aw()
w.P$=0
this.a3()},
B(d){var w,v,u,t=this,s=null,r=A.S(d).ax.a===B.J,q=r?B.e9:B.c,p=A.m(20),o=t.a.c
o=A.d(o,s,s,s,s,s,s,A.l(s,s,r?B.aQ:B.as,s,s,s,s,s,s,s,s,18,s,s,B.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
w=t.d
w===$&&A.c()
v=A.l(s,s,r?B.aQ:B.as,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s)
u=t.a.d
r=r?B.jS:B.jj
v=A.aM(s,B.Z,!0,s,!0,B.t,s,A.aN(),w,s,s,s,s,s,2,A.bt(s,new A.b6(4,A.m(12),B.dn),s,s,s,s,s,s,!0,s,s,s,s,s,s,r,!0,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,u,!0,!0,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.y,!0,s,!0,s,!1,s,B.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,new C.flh(t,d),s,!1,s,s,!1,s,!0,s,B.ac,s,s,s,s,s,s,s,s,s,s,s,v,!0,B.a5,s,B.ao,s,s,s,s)
u=A.E(A.dU(B.dl,new C.fli(d),s),1)
r=A.bp(B.bQ,s,s,s,s,s,s,s,s,s,s,s)
w=x.p
return A.eN(s,q,new A.D(B.Ch,A.x(A.a([o,B.aB,v,B.aR,A.A(A.a([u,B.au,A.E(A.bI(A.d(t.a.f,s,s,s,s,s,s,s,s,s,s),s,new C.flj(t,d),r),1)],w),B.m,s,B.e,B.i,0,s,s)],w),B.m,s,B.e,B.Q,0,B.p),s),s,s,s,s,B.d7,s,new A.b9(p,B.a1),s)}}
C.acq.prototype={
a7(){return"WorksheetFrameStyle."+this.b}}
C.Gj.prototype={
S(){return new C.by1(null,null)}}
C.by1.prototype={
Y(){var w,v=this
v.a2()
w=A.bm(null,D.bzv,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bB3()},
gbCE(){switch(this.a.r.a){case 1:return A.a([B.aY,B.bQ,B.b1],x.O)
case 2:return A.a([B.bx,B.aY,B.b1],x.O)
case 3:return A.a([B.aI,B.cg,B.jT],x.O)
case 4:return A.a([B.hn,B.bQ,B.fn],x.O)
case 0:return A.a([B.aY,B.bQ,B.b1],x.O)}},
B(d){var w=A.S(d),v=this.d
v===$&&A.c()
return new A.em(A.c9(v,new C.flf(this,new C.ug(w.ax.a===B.J)),null),null)}}
C.ayL.prototype={
S(){return new C.by2(null,null)}}
C.by2.prototype={
Y(){var w,v=this
v.a2()
w=A.bm(null,B.nB,null,1,null,v)
w.cP(0)
v.d!==$&&A.aQ()
v.d=w},
t(){var w=this.d
w===$&&A.c()
w.t()
this.bB4()},
B(d){var w=this.d
w===$&&A.c()
return A.c9(w,new C.flg(this),null)}}
C.by0.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=this,o=e.a
if(o<8||e.b<8)return
w=p.c
v=A.bl(new A.a1(1.5,1.5,1.5+(o-3),1.5+(e.b-3)),new A.aO(w,w))
u=new A.aF($.Q().r,B.ai,null,null,A.a([],x.v))
u.D(new A.j8(v))
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
w=A.xH(u)
t=A.a([],x.U)
w=new A.ru(w,!1,t)
for(o=p.b,s=-o*0.85;w.C();){r=w.c
if(r===0||w.f)A.bi(A.jG(y.B));--r
q=new A.BP(w,r)
w.iw()
r=t[r].b
r===$&&A.c()
r=r.a.length()
p.aU5(d,q,r,o,0,0.2,4.2,0.92)
p.aU5(d,q,r,s,0.52,0.11,3.2,0.58)}},
aU5(d,e,f,g,h,i,j,k){var w,v,u,t=B.j.F(g+h,1)*f,s=A.hMP(e.a.a,e,t,t+f*i,!0),r=A.bDR(s.glV().a.getBounds())
$.Q()
w=A.K()
w.b=B.a9
w.c=j
w.d=B.bw
w.f=!0
v=this.f
u=k*this.e
w.sav(new A.a9(B.a6,B.aa,B.x,A.a([v[0].j(0),v[0].j(u),v[1].j(u),v[0].j(0)],x.O),B.Ir,null).aK(0,r))
d.af(s,w)},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.aP3.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aP4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b4()
this.bC()}}
C.ug.prototype={}
C.atT.prototype={
S(){return new C.aGq()},
ge3(){return this.c}}
C.aGq.prototype={
Y(){var w=this
w.a2()
w.d=w.a.d
w.ai1()},
t(){var w=this.a.c,v=this.d
v===$&&A.c()
C.M3(w,v)
this.a3()},
ai1(){var w=0,v=A.j(x.H),u=this,t,s
var $async$ai1=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.bE_(t.c,t.d.a),$async$ai1)
case 2:s=e
if(s!=null&&u.c!=null)u.m(new C.eU4(u,s))
return A.h(null,v)}})
return A.i($async$ai1,v)},
QI(){var w=0,v=A.j(x.H),u=this,t,s
var $async$QI=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:u.m(new C.eTW(u))
t=u.a.c
s=u.d
s===$&&A.c()
w=2
return A.b(C.M3(t,s),$async$QI)
case 2:if(u.c!=null)u.m(new C.eTX(u))
return A.h(null,v)}})
return A.i($async$QI,v)},
Rf(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$Rf=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.c
p.toString
p=A.S(p)
s=t.c
s.toString
w=3
return A.b(A.ce(null,null,!0,null,new C.eU2(t,new C.ug(p.ax.a===B.J)),s,null,!0,!0,x.T),$async$Rf)
case 3:r=e
if(r==null||t.c==null){w=1
break}p=t.d
p===$&&A.c()
q=p.c
w=q!=null&&q!==r?4:5
break
case 4:w=6
return A.b(C.a9o(q),$async$Rf)
case 6:case 5:t.m(new C.eU3(t,r))
w=7
return A.b(t.QI(),$async$Rf)
case 7:case 1:return A.h(u,v)}})
return A.i($async$Rf,v)},
Ws(){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Ws=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(C.iqV(r),$async$Ws)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eTR(t,new C.rm(B.o.u(1000*Date.now()),s.a,s.b,s.c,s.d)))
w=4
return A.b(t.QI(),$async$Ws)
case 4:case 1:return A.h(u,v)}})
return A.i($async$Ws,v)},
cju(){var w,v,u=this,t=u.c
t.toString
w=u.a.c
v=u.d
v===$&&A.c()
C.hEl(t,new C.eTV(u),w,v)},
abU(d){var w=null,v=B.c.j(d?0.85:0.55)
return A.q(w,w,B.f,w,w,new A.p(w,w,new A.bH(new A.ay(v,2.5,B.r,-1),B.a1,B.a1,new A.ay(B.c.j(d?0.85:0.55),2.5,B.r,-1)),D.b4g,w,w,B.n),w,22,w,w,w,w,w,22)},
aaW(d){return this.bOD(d)},
bOD(d){var w=0,v=A.j(x.H),u=this
var $async$aaW=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:u.m(new C.eTU(u,d))
w=2
return A.b(u.QI(),$async$aaW)
case 2:return A.h(null,v)}})
return A.i($async$aaW,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=A.S(a2).ax.a===B.J,e=f?B.c3:B.iB,d=A.m(8),a0=A.X(Z.a1H,f?B.bu:B.bq,g,g,g,16),a1=x.p
a0=A.aP(!1,d,!0,new A.D(B.GV,A.A(A.a([a0,B.bm,A.d("Back to Projects",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bq,g,g,g,g,g,g,g,g,g,g,g,B.a8,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1),B.m,g,B.e,B.Q,0,g,g),g),g,!0,g,g,g,g,g,g,g,g,g,g,g,new C.eU5(h,a2),g,g,g,g,g,g,g)
d=h.d
d===$&&A.c()
d=d.c
if(d!=null&&B.a.a0(d,"ngmy:thumb:"))d=new A.an(B.a0,g,B.b2,B.t,A.a([A.by(A.m(22),C.aRY(!0,A.m(22),1/0,B.qB,g,d,1/0),B.aq),A.ap(10,A.dh(D.bX6,D.fXj,h.gb46(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hb,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g)
else{d=A.m(22)
w=x.V
v=A.a([new A.ac(0,B.G,B.aY.j(f?0.5:0.38),B.eZ,22),new A.ac(-4,B.G,B.bQ.j(0.2),B.I,32)],w)
u=A.m(17)
t=A.L(B.c.j(0.45),B.r,1.2)
w=A.a([new A.ac(-2,B.G,B.c.j(0.18),B.I,10)],w)
s=A.m(16)
r=h.d
v=A.q(g,A.q(g,A.by(s,new A.an(B.a0,g,B.b2,B.t,A.a([C.aRY(!0,A.m(16),1/0,B.OW,g,r.c,1/0),A.c3(g,new A.p(g,g,g,g,g,new A.a9(B.b7,B.b9,B.x,A.a([B.c.j(0.06),B.L,B.w.j(0.22)],x.O),g,g),B.n),B.bi),A.ap(g,h.abU(!0),g,g,8,g,8,g),A.ap(g,A.cD3(h.abU(!0),!0,!1),g,g,g,8,8,g),A.ap(8,A.cD3(h.abU(!1),!1,!0),g,g,8,g,g,g),A.ap(8,A.cD3(h.abU(!1),!0,!0),g,g,g,8,g,g),A.ap(10,A.dh(D.bT3,D.fQD,h.gb46(),A.bp(B.w.j(0.45),g,g,g,B.c,g,B.hb,g,new A.b9(A.m(12),B.a1),g,g,g)),g,g,g,10,g,g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,t,u,w,g,B.n),g,g,g,g,g,g,g,g),B.f,g,g,new A.p(g,g,g,d,v,D.c5f,B.n),g,g,g,g,B.md,g,g,g)
d=v}w=h.d
w=A.d(w.b,g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.as,g,g,g,g,g,g,g,g,22,g,g,B.u,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
q=h.d.d.length
v=A.m(22)
u=x.O
u=f?A.a([D.bf_,B.ob,B.h8],u):A.a([B.b1,B.aY,B.bQ],u)
t=x.V
s=A.a([new A.ac(0,B.G,B.aY.j(f?0.45:0.35),B.eZ,24)],t)
r=A.m(22)
p=A.ap(g,A.X(B.k2,B.c.j(0.08),g,g,g,120),g,g,g,-24,-24,g)
o=B.c.j(0.16)
n=A.m(20)
m=A.L(B.c.j(0.22),B.r,1)
l=q===1?"item":"items"
n=A.a([A.A(A.a([A.q(g,A.d(""+q+" "+l,g,g,g,g,g,g,A.l(g,g,B.c.j(0.92),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,0.3,g,g,g,g,g,g),g,g,g),B.f,g,g,new A.p(o,g,m,n,g,g,B.n),g,g,g,g,B.h9,g,g,g)],a1),B.m,g,B.e,B.i,0,g,g),B.aB,A.d("PROJECT TOTAL",g,g,g,g,g,g,A.l(g,g,B.c.j(0.75),g,g,g,g,g,g,g,g,11,g,g,B.H,g,g,!0,g,1.4,g,g,g,g,g,g),g,g,g),B.an,C.bFw(h.d.gxE(),B.c,!0,B.u)],a1)
if(q>0)B.d.v(n,A.a([B.U,A.d("Sum of all budget line items",g,g,g,g,g,g,A.l(g,g,B.c.j(0.65),g,g,g,g,g,g,g,g,11,g,g,B.cC,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)],a1))
o=A.E(A.x(n,B.E,g,B.e,B.i,0,B.p),1)
n=A.m(14)
m=A.m(14)
l=B.c.j(0.12)
k=A.L(B.hp.j(0.75),B.r,1.6)
t=A.a([new A.ac(0,B.G,B.aI.j(0.28),B.cM,14)],t)
j=B.aI.j(0.22)
i=A.m(10)
u=A.q(g,A.by(r,new A.an(B.a0,g,B.ad,B.t,A.a([p,new A.D(D.bEl,A.A(A.a([o,B.au,A.aJ(!1,B.a3,!0,g,A.aP(!1,n,!0,A.eJ(new A.D(V.wh,A.x(A.a([A.q(g,D.ark,B.f,g,g,new A.p(j,g,A.L(B.aI.j(0.5),B.r,1),i,g,g,B.n),g,g,g,g,B.cl,g,g,g),B.fK,D.fFn],a1),B.m,g,B.e,B.Q,0,B.p),g),g,new A.p(l,g,k,m,t,g,B.n),g,g,g),g,!0,g,g,g,g,g,g,g,g,g,g,g,h.gcjt(),g,g,g,g,g,g,g),B.f,B.L,0,g,g,g,g,g,B.aj)],a1),B.m,g,B.e,B.i,0,g,g),g)],a1),g),B.aq),B.f,g,g,new A.p(g,g,g,v,s,new A.a9(B.aA,B.aF,B.x,u,g,g),B.n),g,g,g,g,g,g,g,g)
s=h.d.d.length
d=A.a([new A.fF(1.7777777777777777,d,g),B.aR,w,B.U,u,B.bz,A.A(A.a([A.d("Budget Items ("+s+")",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.as,g,g,g,g,g,g,g,g,16,g,g,B.H,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),B.b4,A.dh(Aw.a3y,D.fDd,h.gbD7(),A.bp(B.aY,g,g,g,B.c,g,B.it,g,new A.b9(A.m(12),B.a1),g,g,g))],a1),B.m,g,B.e,B.i,0,g,g),B.af],a1)
w=h.d.d
if(w.length===0){w=f?B.e9:B.c
v=A.m(14)
u=A.L(f?B.ef:B.bP,B.r,1)
t=A.X(B.a21,f?B.bu:B.bq,g,g,g,48)
s=A.d("No budget items yet",g,g,g,g,g,g,A.l(g,g,f?B.aQ:B.as,g,g,g,g,g,g,g,g,g,g,g,B.V,g,g,!0,g,g,g,g,g,g,g,g),g,g,g)
d.push(A.q(g,A.x(A.a([t,B.X,s,B.an,A.d("Add item names, units, and prices to track spending.",g,g,g,g,g,g,A.l(g,g,f?B.bu:B.bq,g,g,g,g,g,g,g,g,g,g,g,g,g,g,!0,g,g,g,g,g,g,g,g),B.K,g,g)],a1),B.m,g,B.e,B.i,0,B.p),B.f,g,g,new A.p(w,g,u,v,g,g,B.n),g,g,g,g,B.qx,g,g,1/0))}else B.d.v(d,new A.N(w,new C.eU6(h,new C.ug(f)),A.U(w).k("N<1,v>")))
if(h.e)d.push(new A.D(B.C7,A.at(A.n3(g,f?B.bu:B.bq,g,g,g,g,g,g,g,g),g,g,g),g))
return A.c4(g,e,A.bn(!0,A.x(A.a([new A.D(B.Ca,a0,g),A.E(A.cg(A.x(d,B.E,g,B.e,B.i,0,B.p),B.t,g,B.y,g,E.yK,g,g,B.ah),1)],a1),B.E,g,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),g,!1,!1,g,g)},
bGO(d,e){var w,v,u=null,t=d.b,s=B.a.i(t).length===0,r=e.a,q=r?B.e9:B.c,p=A.m(16),o=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.cM,12)],x.V),n=A.m(16),m=A.q(u,u,B.f,u,u,D.b71,u,u,u,u,u,u,u,5),l=B.aY.j(r?0.22:0.12),k=A.m(12)
l=A.q(u,A.X(s?B.id:B.hv,B.b1,u,u,u,20),B.f,u,u,new A.p(l,u,u,k,u,u,B.n),u,40,u,u,u,u,u,40)
if(s)t=B.bM
else{k=x.p
t=A.a([A.d(t,u,2,B.a2,u,u,u,A.l(u,u,r?B.aQ:B.as,u,u,u,u,u,u,u,u,15,u,u,B.H,u,1.25,!0,u,u,u,u,u,u,u,u),u,u,u)],k)
if(d.c!==1||d.e!=="each"){w=d.gcZZ()
v=A.Bn(d.d)
B.d.v(t,A.a([B.ax,A.d(w+" "+v,u,u,u,u,u,u,A.l(u,u,r?B.bu:B.bq,u,u,u,u,u,u,u,u,12,u,u,B.a8,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],k))}t=A.x(t,B.E,u,B.ba,B.Q,0,B.p)}t=A.E(t,1)
k=A.a([B.aY.j(0.14),B.bQ.j(0.1)],x.O)
w=A.m(12)
k=A.q(u,C.bFw(d.c*d.d,B.b1,!1,B.u),B.f,u,u,new A.p(u,u,u,w,u,new A.a9(B.a6,B.aa,B.x,k,u,u),B.n),u,u,u,u,B.hb,u,u,u)
w=x.p
return A.q(u,A.by(n,new A.EJ(A.A(A.a([m,A.E(new A.D(B.alh,A.A(A.a([l,B.bd,t,B.ae,k,A.aG(u,u,u,u,A.X(B.cz,(r?B.bu:B.bq).j(0.75),u,u,u,20),u,u,u,new C.eTS(this,d),u,u,u,u,u,B.ce)],w),B.m,u,B.e,B.i,0,u,u),u),1)],w),B.al,u,B.e,B.i,0,u,u),u),B.aq),B.f,u,D.b5T,new A.p(q,u,u,p,o,u,B.n),u,u,u,B.d3,u,u,u,u)}}
C.aet.prototype={
EV(d){return this.bQ0(d)},
bQ0(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$EV=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:o=t.c
w=3
return A.b(A.pu(d,o,!1),$async$EV)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
w=4
return A.b(A.bQ(Aj.C5,null,x.H),$async$EV)
case 4:s=t.d
w=5
return A.b(C.fUI(!0,o,s),$async$EV)
case 5:r=f
q=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
w=6
return A.b(A.He(r,"ngmy_project_"+A.aL(s.b,q,"_"),!1),$async$EV)
case 6:p=f
w=7
return A.b(A.pt(o,!1),$async$EV)
case 7:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(p,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$EV,v)},
a0a(d){return this.czT(d)},
czT(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$a0a=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
w=3
return A.b(A.pu(d,s,!1),$async$a0a)
case 3:if(!f||d.e==null){w=1
break}A.a6(d,!1).O(null)
A.hE(d,new C.atN(s,t.d,null),!1,"NgmyWorksheetProjectQr",x.H)
w=4
return A.b(A.pt(s,!1),$async$a0a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$a0a,v)},
QJ(d){return this.cvX(d)},
cvX(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$QJ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(A.hE(d,D.aKR,!0,"NgmyWorksheetProjectScan",x.N),$async$QJ)
case 3:s=f
if(s==null||B.a.i(s).length===0){w=1
break}w=4
return A.b(C.bFx(s),$async$QJ)
case 4:r=f
if(r==null){if(d.e==null){w=1
break}d.L(x.q).f.U(D.fiX)
w=1
break}q=C.hfR(r)
p=t.e.$1(q)
w=5
return A.b(x.x.b(p)?p:A.dQ(p,x.H),$async$QJ)
case 5:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+q.b+'" from QR',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$QJ,v)},
a0b(d){return this.cIb(d)},
cIb(d){var w=0,v=A.j(x.H),u,t=this,s,r,q
var $async$a0b=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:A.a6(d,!1).O(null)
w=3
return A.b(C.bF3(),$async$a0b)
case 3:s=f
if(s==null){w=1
break}r=C.hfR(s)
q=t.e.$1(r)
w=4
return A.b(x.x.b(q)?q:A.dQ(q,x.H),$async$a0b)
case 4:if(d.e==null){w=1
break}d.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+r.b+'" from file',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$a0b,v)},
B(d){var w=this,v=null,u=A.S(d).ax.a===B.J,t=new C.ug(u),s=w.d.d.length,r=u?B.e9:B.c,q=A.m(28),p=A.a([new A.ac(0,B.G,B.w.j(u?0.35:0.08),B.kz,36)],x.V),o=x.p
return A.bn(!0,new A.D(B.wg,A.q(v,A.x(A.a([w.cys(d,t,s),new A.D(D.bDK,A.x(A.a([w.b74(t,"QR restore"),B.X,A.A(A.a([w.b25(t,!0,B.jH,B.aI,B.aI,new C.eU8(w,d),"Show to scan","QR code"),B.au,w.azA(t,B.jo,B.b8,B.br,new C.eU9(w,d),"From camera","Scan QR")],o),B.m,v,B.e,B.i,0,v,v),B.d8,w.b74(t,"Backup files"),B.X,A.A(A.a([w.azA(t,B.hW,B.aY,B.bQ,new C.eUa(w,d),"Full copy","Backup file"),B.au,w.azA(t,S.zm,B.aw,B.aU,new C.eUb(w,d),".json backup","Upload file")],o),B.m,v,B.e,B.i,0,v,v)],o),B.E,v,B.e,B.i,0,B.p),v)],o),B.m,v,B.e,B.Q,0,B.p),B.aq,v,v,new A.p(r,v,v,q,p,v,B.n),v,v,v,v,v,v,v,v),v),!0,!1,B.ag,!0,!0)},
cys(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=x.O
k=e.a?A.a([B.eT,B.cG,B.fP],k):A.a([B.b1,B.aY,B.bQ],k)
w=A.ap(l,A.X(B.uT,B.c.j(0.07),l,l,l,110),l,l,l,-20,-10,l)
v=A.at(A.q(l,l,B.f,l,l,new A.p(B.c.j(0.35),l,l,A.m(4),l,l,B.n),l,4,l,B.kS,l,l,l,36),l,l,l)
u=A.m(14)
t=A.L(B.c.j(0.45),B.r,1.5)
s=A.a([new A.ac(0,B.G,B.w.j(0.2),B.cM,12)],x.V)
r=this.d
s=A.q(l,C.aRY(!0,A.m(13),64,D.bOl,l,r.c,64),B.aq,l,l,new A.p(l,l,t,u,s,l,B.n),l,64,l,l,l,l,l,64)
u=A.d("Share project",l,l,l,l,l,l,A.l(l,l,B.c.j(0.78),l,l,l,l,l,l,l,l,11,l,l,B.H,l,l,!0,l,1.1,l,l,l,l,l,l),l,l,l)
t=A.d(r.b,l,2,B.a2,l,l,l,I.aba,l,l,l)
r=C.bFw(r.gxE(),B.c,!1,B.u)
q=B.c.j(0.16)
p=A.m(20)
o=A.L(B.c.j(0.22),B.r,1)
n=f===1?"item":"items"
m=x.p
return A.q(l,new A.an(B.a0,l,B.ad,B.t,A.a([w,new A.D(D.bE7,A.x(A.a([v,A.A(A.a([s,B.ew,A.E(A.x(A.a([u,B.ax,t,B.U,A.A(A.a([r,B.ae,A.q(l,A.d(""+f+" "+n,l,l,l,l,l,l,A.l(l,l,B.c.j(0.9),l,l,l,l,l,l,l,l,10,l,l,B.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),B.f,l,l,new A.p(q,l,o,p,l,l,B.n),l,l,l,l,B.fT,l,l,l)],m),B.m,l,B.e,B.i,0,l,l)],m),B.E,l,B.e,B.i,0,B.p),1),A.aG(l,l,l,l,A.X(B.cz,B.c.j(0.85),l,l,l,l),l,l,l,new C.eU7(d),l,l,l,A.nZ(l,B.c.j(0.12),l,l,l,l,l,l,l,l,l,l,E.aT8,l,l,l,l),l,l)],m),B.E,l,B.e,B.i,0,l,l)],m),B.m,l,B.e,B.i,0,B.p),l)],m),l),B.f,l,l,new A.p(l,l,l,l,l,new A.a9(B.aA,B.aF,B.x,k,l,l),B.n),l,l,l,l,l,l,l,1/0)},
b74(d,e){var w=null,v=A.q(w,w,B.f,w,w,new A.p(B.aY,w,w,A.m(2),w,w,B.n),w,14,w,w,w,w,w,3)
return A.A(A.a([v,B.ae,A.d(e.toUpperCase(),w,w,w,w,w,w,A.l(w,w,d.a?B.bu:B.bq,w,w,w,w,w,w,w,w,11,w,w,B.H,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.i,0,w,w)},
b25(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=null,q=A.m(18),p=A.m(18),o=d.a,n=o?D.ajP:B.aQ
if(e)w=B.aI.j(o?0.45:0.35)
else{w=o?B.ef:B.bP
w=w.j(o?0.8:1)}w=A.L(w,B.r,e?1.5:1)
v=e?A.a([new A.ac(0,B.G,B.aI.j(0.12),B.cM,14)],x.V):r
u=g.j(o?0.22:0.14)
t=A.m(12)
s=A.L(h.j(0.35),B.r,1)
t=A.q(r,A.X(f,h,r,r,r,22),B.f,r,r,new A.p(u,r,s,t,r,r,B.n),r,r,r,r,B.rS,r,r,r)
u=A.d(k,r,r,r,r,r,r,A.l(r,r,o?B.aQ:B.as,r,r,r,r,r,r,r,r,14,r,r,B.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.E(A.aJ(!1,B.a3,!0,r,A.aP(!1,q,!0,A.eJ(new A.D(E.a05,A.x(A.a([t,B.af,u,B.bG,A.d(j,r,r,r,r,r,r,A.l(r,r,o?B.bu:B.bq,r,r,r,r,r,r,r,r,11,r,r,B.cC,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),r),r,new A.p(n,r,w,p,v,r,B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,i,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
azA(d,e,f,g,h,i,j){return this.b25(d,!1,e,f,g,h,i,j)}}
C.atN.prototype={
S(){return new C.bn2()}}
C.bn2.prototype={
Y(){this.a2()
this.afW()},
afW(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$afW=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
p=r.a
w=7
return A.b(C.bFy(p.c,p.d),$async$afW)
case 7:q=e
if(r.c==null){w=1
break}r.m(new C.eTM(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
if(r.c==null){w=1
break}r.m(new C.eTN(r))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$afW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=A.S(d).ax.a===B.J,f=g?B.BE:B.iB,e=i.d
e=e==null?h:B.a.a0(e,"NGMYWSSYNC2|")
w=e===!0
v=i.a.d.d.length
e=A.aG(h,h,h,h,A.X(B.eM,g?B.ab:B.am,h,h,h,18),h,h,h,new C.eTO(d),h,h,h,h,h,h)
u=x.p
e=A.A(A.a([e,A.E(A.d("Project QR",h,h,h,h,h,h,A.l(h,h,g?B.c:B.S,h,h,h,h,h,h,h,h,17,h,h,B.u,h,h,!0,h,h,h,h,h,h,h,h),B.K,h,h),1),B.x8],u),B.m,h,B.e,B.i,0,h,h)
t=A.m(24)
s=x.O
s=g?A.a([B.eT,B.cG,B.fP],s):A.a([B.b1,B.aY,B.bQ],s)
r=x.V
q=A.a([new A.ac(0,B.G,B.aY.j(g?0.4:0.3),B.eZ,24)],r)
p=i.a.d
o=A.d(p.b,h,h,h,h,h,h,B.dh,B.K,h,h)
p=C.bFw(p.gxE(),B.c,!1,B.u)
n=B.c.j(0.16)
m=A.m(20)
l=v===1?"item":"items"
s=A.q(h,A.x(A.a([o,B.an,A.A(A.a([p,B.ae,A.q(h,A.d(""+v+" "+l,h,h,h,h,h,h,A.l(h,h,B.c.j(0.9),h,h,h,h,h,h,h,h,10,h,h,B.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),B.f,h,h,new A.p(n,h,h,m,h,h,B.n),h,h,h,h,B.fT,h,h,h)],u),B.m,h,B.ba,B.i,0,h,h)],u),B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(h,h,h,t,q,new A.a9(B.aA,B.aF,B.x,s,h,h),B.n),h,h,h,h,E.a0s,h,h,1/0)
t=g?D.bq9:B.c
q=A.m(24)
p=A.L(w?B.aI.j(0.4):B.aY.j(0.3),B.r,1)
r=A.a([new A.ac(0,B.G,B.w.j(g?0.25:0.06),B.dv,20)],r)
o=A.a([],u)
n=i.e
if(n!=null)o.push(A.d(n,h,h,h,h,h,h,B.Vi,B.K,h,h))
else{n=i.d
if(n==null)o.push(D.eqs)
else{m=A.m(20)
l=A.L(B.aO,B.r,1)
o.push(A.q(h,A.qa(h,h,!1,n,h,!0,!0,h,!1,B.c),B.f,h,h,new A.p(B.c,h,l,m,h,h,B.n),h,h,h,h,B.bR,h,h,h))}}o.push(B.aR)
n=w?B.aI:B.aY
n=n.j(g?0.15:0.1)
m=A.m(12)
l=A.L((w?B.aI:B.aY).j(0.35),B.r,1)
k=w?B.P9:B.PI
k=A.X(k,w?B.aI:B.aY,h,h,h,18)
j=w?"Cloud QR \u2014 includes thumbnail and all budget items.":"Offline QR \u2014 use backup file for the full project copy."
o.push(A.q(h,A.A(A.a([k,B.au,A.E(A.d(j,h,h,h,h,h,h,A.l(h,h,g?B.ab:B.am,h,h,h,h,h,h,h,h,12,h,h,B.a8,h,1.35,!0,h,h,h,h,h,h,h,h),h,h,h),1)],u),B.m,h,B.e,B.i,0,h,h),B.f,h,h,new A.p(n,h,l,m,h,h,B.n),h,h,h,h,B.it,h,h,h))
return A.c4(h,f,A.bn(!0,A.x(A.a([new A.D(Ae.Oi,e,h),A.E(A.cg(A.x(A.a([s,B.aR,A.q(h,A.x(o,B.m,h,B.e,B.i,0,B.p),B.f,h,h,new A.p(t,h,p,q,r,h,B.n),h,h,h,h,B.uv,h,h,1/0)],u),B.m,h,B.e,B.i,0,B.p),B.t,h,B.y,h,E.amn,h,h,B.ah),1)],u),B.m,h,B.e,B.i,0,B.p),!0,!1,B.ag,!0,!0),h,!1,!1,h,h)}}
C.atS.prototype={
S(){return new C.aGp(A.zT(B.Nz,B.o2,B.v0))}}
C.aGp.prototype={
t(){this.d.t()
this.a3()},
aOv(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
A.j_(w,d)},
cfh(d){var w,v,u,t,s,r,q,p="NGMYWSSYNC2|"
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u){t=w[u]
s=C.ioe(t)
if(s!=null){this.aOv(s)
return}r=C.huP(t)
if(r!=null)q=A.cS(r,p,0)
else q=!1
if(q){this.aOv(B.a.i(B.a.b2(r,B.a.co(r,p))))
return}}},
B(d){var w,v,u=this,t=null,s=x.p,r=A.eH(A.a([A.aG(t,t,t,t,A.X(u.f?B.uI:A9.Ph,t,t,t,t,t),t,t,t,new C.eTQ(u),t,t,t,t,t,t)],s),t,t,!0,!0,B.BE,t,1,t,t,t,!1,t,!1,B.c,t,t,t,!0,t,t,t,t,t,D.fQw,t,t,t,1,t,!0),q=A.zS(u.d,B.c_,u.gcfg()),p=A.m(28)
p=A.at(A.q(t,t,B.f,t,t,new A.p(t,t,A.L(B.aY,B.r,3),p,A.a([new A.ac(2,B.G,B.aY.j(0.35),B.I,24)],x.V),t,B.n),t,260,t,t,t,t,t,260),t,t,t)
w=B.w.j(0.72)
v=A.m(16)
return A.c4(r,B.w,new A.an(B.a0,t,B.b2,B.t,A.a([q,p,A.ap(32,A.q(t,D.fPh,B.f,t,t,new A.p(w,t,A.L(B.aY.j(0.45),B.r,1),v,t,t,B.n),t,t,t,t,B.jm,t,t,t),t,t,20,20,t,t)],s),t),t,!1,!1,t,t)}}
C.aLi.prototype={
a7(){return"_WorksheetTab."+this.b}}
C.OW.prototype={
S(){return new C.aGr(D.ad1,A.a([],x.D))},
bv(){return this.r.$0()},
ge3(){return this.c}}
C.aGr.prototype={
gcFY(){return J.bGE(this.e,0,new C.eUy())},
Y(){this.a2()
$.aW.c1$.push(this)
this.wh()},
t(){$.aW.hV(this)
this.a3()},
jl(d){if(d===B.fO)this.wh()},
wh(){var w=0,v=A.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n
var $async$wh=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return A.b(C.Dy(q.a.c).dg(0,B.jY),$async$wh)
case 7:p=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eUu(q,p))
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
if(q.c!=null&&q.f)q.m(new C.eUv(q))
w=r.pop()
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$wh,v)},
Ip(d){return this.bML(d)},
bMK(){return this.Ip(null)},
bML(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Ip=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:l=t.c
l.toString
w=3
return A.b(C.iqX(l,d),$async$Ip)
case 3:s=f
if(s==null||t.c==null){w=1
break}l=B.o.u(1000*Date.now())
r=s.a
q=s.b
p=new C.lC(l,r,q,D.dkU,new A.V(Date.now(),0,!1))
w=4
return A.b(C.M3(t.a.c,p),$async$Ip)
case 4:o=f
w=5
return A.b(t.wh(),$async$Ip)
case 5:n=t.c
if(n==null){w=1
break}if(!o){n.L(x.q).f.U(D.fg3)
w=1
break}n=J.aU(t.e)
for(;;){if(!n.C()){m=p
break}m=n.gR(n)
if(m.a===l)break}l=!1
if(q!=null)if(B.a.i(q).length!==0){l=m.c
l=l==null||B.a.i(l).length===0}q=x.q
n=t.c
if(l)n.L(q).f.U(D.fhR)
else n.L(q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Project "'+r+'" saved on this device.',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.EZ(m)
case 1:return A.h(u,v)}})
return A.i($async$Ip,v)},
EZ(d){return this.cjf(d)},
cjf(d){var w=0,v=A.j(x.H),u=this,t,s
var $async$EZ=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return A.b(A.hE(s,new C.atT(u.a.c,d,null),!1,"NgmyWorksheetProjectScreen",x.fA),$async$EZ)
case 2:t=f
w=t!=null?3:4
break
case 3:w=5
return A.b(C.M3(u.a.c,t),$async$EZ)
case 5:case 4:w=6
return A.b(u.wh(),$async$EZ)
case 6:return A.h(null,v)}})
return A.i($async$EZ,v)},
w2(d){return this.c22(d)},
c22(d){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$w2=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:w=d==="file"?3:5
break
case 3:w=6
return A.b(C.bF3(),$async$w2)
case 6:s=f
w=4
break
case 5:w=d==="scan"?7:9
break
case 7:r=t.c
r.toString
w=10
return A.b(A.hE(r,D.aKR,!0,"NgmyWorksheetProjectScan",x.N),$async$w2)
case 10:q=f
w=q!=null&&B.a.i(q).length!==0?11:13
break
case 11:w=14
return A.b(C.bFx(q),$async$w2)
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
r.U(A.b3(null,null,null,null,null,B.t,null,A.d(d==="scan"?"Could not read that QR. Stay online for cloud project codes, or try Upload file.":"Could not read that project backup.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
w=1
break}p=C.hfR(s)
w=15
return A.b(C.M3(t.a.c,p),$async$w2)
case 15:o=f
w=16
return A.b(t.wh(),$async$w2)
case 16:r=t.c
if(r==null){w=1
break}if(!o){r.L(x.q).f.U(D.fhW)
w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d('Imported "'+p.b+'"',null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
t.EZ(p)
case 1:return A.h(u,v)}})
return A.i($async$w2,v)},
On(d){return this.bLp(d)},
bLp(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$On=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=5
return A.b(A.ce(null,null,!0,null,new C.eUf(d),s,null,!0,!0,x.y),$async$On)
case 5:w=f===!0?3:4
break
case 3:w=6
return A.b(C.p2(t.a.c,A.a([],x.D)),$async$On)
case 6:w=7
return A.b(t.wh(),$async$On)
case 7:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fg8)
case 4:case 1:return A.h(u,v)}})
return A.i($async$On,v)},
cjs(d){var w=this.c
w.toString
A.bT(B.L,null,new C.eUo(this,d),w,!0,!0,!0,null,!1,!1,x.z)},
b7H(d,e,f,g,h,i){var w,v,u,t,s,r=null,q=A.m(16),p=g.a
if(p)w=B.jS
else w=B.c
v=A.m(16)
u=A.L(p?B.ef:B.bP,B.r,1)
t=d.j(0.14)
s=A.m(12)
s=A.q(r,A.X(e,d,r,r,r,22),B.f,r,r,new A.p(t,r,r,s,r,r,B.n),r,r,r,r,B.bV,r,r,r)
t=A.d(i,r,r,r,r,r,r,A.l(r,r,p?B.aQ:B.as,r,r,r,r,r,r,r,r,14,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.aJ(!1,B.a3,!0,r,A.aP(!1,q,!0,A.q(r,A.x(A.a([s,B.af,t,B.bG,A.d(h,r,r,r,r,r,r,A.l(r,r,p?B.bu:B.bq,r,r,r,r,r,r,r,r,11,r,r,r,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.E,r,B.e,B.i,0,B.p),B.f,r,r,new A.p(w,r,u,v,r,r,B.n),r,r,r,r,B.wf,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,f,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
a0G(d,e){return this.cjg(d,e)},
cjg(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$a0G=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return A.b(A.bT(B.L,null,new C.eUj(t,e,d),r,!0,!0,!1,null,!1,!1,x.N),$async$a0G)
case 3:s=g
r=t.c
if(r==null||s==null){w=1
break}w=s==="transfer"?4:6
break
case 4:C.hEl(r,new C.eUk(t),t.a.c,d)
w=5
break
case 6:w=s==="delete"?7:8
break
case 7:w=9
return A.b(t.Op(d,e),$async$a0G)
case 9:case 8:case 5:case 1:return A.h(u,v)}})
return A.i($async$a0G,v)},
b4I(d,e,f,g,h,i,j){var w,v,u=null,t=f.j(0.12),s=A.m(12)
s=A.q(u,A.X(e,f,u,u,u,22),B.f,u,u,new A.p(t,u,u,s,u,u,B.n),u,u,u,u,B.bV,u,u,u)
if(d)t=B.ay
else t=h.a?B.aQ:B.as
t=A.d(j,u,u,u,u,u,u,A.l(u,u,t,u,u,u,u,u,u,u,u,u,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=h.a
v=x.p
t=A.E(A.x(A.a([t,A.d(i,u,u,u,u,u,u,A.l(u,u,w?B.bu:B.bq,u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],v),B.E,u,B.e,B.i,0,B.p),1)
return A.aJ(!1,B.a3,!0,u,A.aP(!1,u,!0,new A.D(B.Cg,A.A(A.a([s,B.bd,t,A.X(B.eI,w?B.bu:B.bq,u,u,u,u)],v),B.m,u,B.e,B.i,0,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj)},
cqb(d,e,f,g,h,i){return this.b4I(!1,d,e,f,g,h,i)},
Op(d,e){return this.bLz(d,e)},
bLz(d,e){var w=0,v=A.j(x.H),u,t=this,s,r
var $async$Op=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:r=t.c
r.toString
s=d.b
w=5
return A.b(A.lo(r,"Cancel","Delete","Remove \u201c"+s+"\u201d and all of its budget items from this device?","Delete project?"),$async$Op)
case 5:w=g?3:4
break
case 3:w=6
return A.b(C.bDL(t.a.c,d.a),$async$Op)
case 6:w=7
return A.b(t.wh(),$async$Op)
case 7:r=t.c
if(r==null){w=1
break}r.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d("Deleted \u201c"+s+"\u201d",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 4:case 1:return A.h(u,v)}})
return A.i($async$Op,v)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===B.J,n=new C.ug(o),m=o?B.c3:B.iB
if(q.f)o=D.bcM
else{w=q.bFV(n)
v=q.c16(n)
u=q.gbD0()
if(o)t=B.jS
else t=B.c
s=A.m(13)
r=x.p
u=A.a([w,B.af,v,B.aR,new C.Gj(A.q(p,A.A(A.a([q.aD8(Q.OV,"Projects",n,D.ad1),q.aD8(B.wv,"Cashier",n,D.b0M),q.aD8(B.Hg,"Family Tree",n,D.hBT)],r),B.m,p,B.e,B.i,0,p,p),B.f,p,p,new A.p(t,p,p,s,p,p,B.n),p,p,p,p,p,p,p,p),14,B.ey,0.95,u,p),B.bz],r)
w=q.d
if(w===D.ad1){w=J.ad(q.e)
B.d.v(u,A.a([A.A(A.a([A.d("Projects ("+w+")",p,p,p,p,p,p,A.l(p,p,o?B.aQ:B.as,p,p,p,p,p,p,p,p,16,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),B.b4,new C.ayL(q.gaSR(),p)],r),B.m,p,B.e,B.i,0,p,p),B.aB,q.cqd(n)],r))}else{o=q.a
if(w===D.b0M)u.push(new C.apH(o.c,n,p))
else{w=q.r
u.push(new C.aqS(o.c,o.d,o.e,o.f,new C.eUB(q),new C.eUC(q),new A.bO(w,x.b4)))}}o=A.cg(A.x(u,B.E,p,B.e,B.i,0,B.p),B.t,p,B.y,p,Am.Ob,p,p,B.ah)}return A.c4(p,m,A.bn(!0,o,!0,!1,B.ag,!0,!0),p,!1,!1,p,p)},
bFV(d){var w=null,v=A.m(8),u=d.a,t=A.X(Z.a1H,u?B.bu:B.bq,w,w,w,16)
return A.aP(!1,v,!0,new A.D(B.kT,A.A(A.a([t,B.bm,A.d("Back to Profile",w,w,w,w,w,w,A.l(w,w,u?B.bu:B.bq,w,w,w,w,w,w,w,w,14,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),B.m,w,B.e,B.Q,0,w,w),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eUc(this),w,w,w,w,w,w,w)},
gbD0(){switch(this.d.a){case 0:return D.acf
case 1:return D.hqi
case 2:return D.acg}},
c16(d){var w=null,v=A.m(15),u=A.a([new A.ac(0,B.G,B.aY.j(0.35),B.cA,16)],x.V),t=x.p,s=A.A(A.a([A.q(w,D.bZ_,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,44,w,w,w,w,w,44),B.bd,D.bIK,A.aJ(!1,B.a3,!0,w,A.aP(!1,A.m(12),!0,A.q(w,D.bWp,B.f,w,w,new A.p(B.c.j(0.22),w,w,A.m(12),w,w,B.n),w,40,w,w,w,w,w,40),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eUg(this,d),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)],t),B.E,w,B.e,B.i,0,w,w),r=B.b1.j(0.55),q=A.m(12)
return new C.Gj(A.q(w,A.x(A.a([new A.D(P.O4,s,w),A.q(w,A.x(A.a([A.d("Total All Projects",w,w,w,w,w,w,A.l(w,w,B.c.j(0.85),w,w,w,w,w,w,w,w,12,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.ax,A.d(A.Bn(this.gcFY()),w,w,w,w,w,w,D.fzu,w,w,w)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(r,w,w,q,w,w,B.n),w,w,w,B.us,B.jm,w,w,1/0)],t),B.E,w,B.e,B.i,0,B.p),B.f,w,w,new A.p(B.aY,w,w,v,u,w,B.n),w,w,w,w,w,w,w,1/0),16,B.ag,1,D.hqh,w)},
aD8(d,e,f,g){var w,v,u=null,t=this.d===g,s=A.m(12),r=t?B.aY:B.L,q=A.m(12),p=t?A.L(B.c.j(0.55),B.r,2):A.L(B.L,B.r,2),o=t?A.a([new A.ac(0.5,B.G,B.aY.j(0.42),B.cM,14)],x.V):u
if(t)w=B.c
else w=f.a?B.bu:B.bq
w=A.X(d,w,u,u,u,16)
if(t)v=B.c
else v=f.a?B.bu:B.bq
return A.E(A.aJ(!1,B.a3,!0,u,A.aP(!1,s,!0,A.cT(u,A.A(A.a([w,B.e1,new A.dn(1,B.cp,A.d(e,u,1,B.a2,u,u,u,A.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u)],x.p),B.m,u,B.ba,B.i,0,u,u),u,u,B.cw,new A.p(r,u,p,q,o,u,B.n),B.iH,u,u,u,u,B.GW,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eUx(this,g),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),1)},
cqd(d){var w,v,u,t,s,r,q=this,p=null
if(J.cr(q.e)){w=d.a
v=w?B.e9:B.c
u=A.m(15)
t=A.q(p,D.bWv,B.f,p,p,new A.p(p,p,p,p,A.a([new A.ac(2,B.G,B.aY.j(0.5),B.eZ,28)],x.V),D.c7F,B.a7),p,108,p,p,p,p,p,108)
s=A.d("No Projects Yet",p,p,p,p,p,p,A.l(p,p,w?B.aQ:B.as,p,p,p,p,p,p,p,p,18,p,p,B.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
r=x.p
return new C.Gj(A.q(p,A.x(A.a([t,B.d8,s,B.U,A.d("Create a new project, or import one someone shared with you.",p,p,p,p,p,p,A.l(p,p,w?B.bu:B.bq,p,p,p,p,p,p,p,p,14,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),B.K,p,p),B.dX,A.A(A.a([A.E(q.aUr(B.jo,"Scan QR",new C.eUr(q),d),1),B.au,A.E(q.aUr(S.zm,"Upload file",new C.eUs(q),d),1)],r),B.m,p,B.e,B.i,0,p,p),B.aB,A.bI(D.h0_,p,q.gaSR(),A.bp(B.aY,p,p,p,B.c,B.h3,p,p,new A.b9(A.m(12),B.a1),p,p,p))],r),B.m,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(v,p,p,u,p,p,B.n),p,p,p,p,p,p,p,1/0),16,D.bFc,1.05,D.acf,p)}w=J.b7(q.e,new C.eUt(q,d),x.l)
w=A.C(w,w.$ti.k("ak.E"))
return new C.Gj(A.x(w,B.m,p,B.e,B.i,0,B.p),16,B.bV,1,D.acf,p)},
aUr(d,e,f,g){var w=null,v=B.aY.j(g.a?0.18:0.1),u=A.m(12),t=A.m(12),s=A.m(12),r=A.L(B.aY.j(0.45),B.r,1)
return A.aJ(!1,B.a3,!0,u,A.aP(!1,t,!0,A.q(w,A.x(A.a([A.X(d,B.b1,w,w,w,26),B.U,A.d(e,w,w,w,w,w,w,D.fxN,B.K,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),B.f,w,w,new A.p(w,w,r,s,w,w,B.n),w,w,w,w,B.ala,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),B.f,v,0,w,w,w,w,w,B.aj)},
cqc(d,e){var w,v,u=null,t=e.a,s=t?B.e9:B.c,r=A.m(14),q=A.L(t?B.ef:B.bP,B.r,1),p=A.a([new A.ac(0,B.G,B.w.j(t?0.35:0.08),B.er,10)],x.V),o=A.m(14),n=t?B.bu:B.bq
n=A.by(B.Xl,new A.fF(1.7777777777777777,C.aRY(!0,B.fi,1/0,Q.OV,n,d.c,1/0),u),B.aq)
w=x.p
v=A.E(A.x(A.a([A.d(d.b,u,u,u,u,u,u,A.l(u,u,t?B.aQ:B.as,u,u,u,u,u,u,u,u,15,u,u,B.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),B.ax,A.d(""+d.d.length+" budget items \xb7 "+A.Bn(d.gxE()),u,u,u,u,u,u,D.fvK,u,u,u)],w),B.E,u,B.e,B.i,0,B.p),1)
return A.q(u,A.aJ(!1,B.a3,!0,u,A.aP(!1,o,!0,A.x(A.a([n,new A.D(B.bE,A.A(A.a([v,A.aG(u,u,u,u,A.X(An.a2K,t?B.bu:B.bq,u,u,u,u),u,u,u,new C.eUp(this,d,e),u,u,u,u,"Project options",u)],w),B.m,u,B.e,B.i,0,u,u),u)],w),B.E,u,B.e,B.i,0,B.p),u,!0,u,u,u,u,u,u,u,u,u,u,u,new C.eUq(this,d),u,u,u,u,u,u,u),B.f,B.L,0,u,u,u,u,u,B.aj),B.f,u,u,new A.p(s,u,q,r,p,u,B.n),u,u,u,B.ej,u,u,u,1/0)}}
C.bzP.prototype={}
C.rm.prototype={
aj(){var w=this,v=w.c,u=w.d
return A.H(["id",w.a,"name",w.b,"quantity",v,"unitPrice",u,"unitLabel",w.e,"price",v*u],x.N,x.z)},
gcZZ(){var w,v,u,t,s=this.c
if(s===B.j.iY(s))w=B.o.u(B.j.M(s))
else{v=B.j.ad(s,2)
u=A.ag("\\.?0+$",!0,!1,!1,!1)
w=A.aL(v,u,"")}t=B.a.i(this.e)
if(t.length===0)t="each"
if(t==="each"||t==="pcs")return w+" \xd7"
return w+" "+t+" \xd7"}}
C.lC.prototype={
gxE(){return B.d.cJ(this.d,0,new C.cFL())},
aj(){var w=this,v=w.d,u=A.U(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.cFK(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"thumbnailPath",w.c,"items",v,"createdAt",w.e.ag()],x.N,x.z)},
bf4(d,e){var w=this,v=e==null?w.c:e,u=d==null?w.d:d
return new C.lC(w.a,w.b,v,u,w.e)},
beN(d){return this.bf4(d,null)},
Tw(d){return this.bf4(null,d)}}
C.Ip.prototype={
a7(){return"FamilyGender."+this.b}}
C.hT.prototype={
aj(){var w=this
return A.H(["id",w.a,"name",w.b,"gender",C.hzR(w.c),"parentId",w.d,"spouseId",w.e,"photoPath",w.f,"notes",w.r,"birthDate",w.w,"birthPlace",w.x,"deathDate",w.y,"occupation",w.z,"birthOrder",w.Q,"hidden",w.as,"visibleChildrenCap",w.at],x.N,x.z)},
aFS(d,e,f,g,h,i,j,k,l,m,n,o,p){var w=this,v=m==null?w.d:m,u=o==null?w.e:o,t=n==null?w.f:n
return new C.hT(w.a,j,h,v,u,t,k,d,f,g,l,e,i,p)}}
C.alX.prototype={
a7(){return"FamilyTreeAccessRole."+this.b}}
C.kT.prototype={
gaqi(){var w=this.f
return new A.Y(w,new C.bSj(),A.U(w).k("Y<1>")).gI(0)},
aj(){var w=this,v=w.f,u=A.U(v).k("N<1,a8<n,@>>")
v=A.C(new A.N(v,new C.bSi(),u),u.k("ak.E"))
return A.H(["id",w.a,"name",w.b,"code",w.c,"isPrivate",w.d,"collaboratorEmails",w.e,"members",v,"createdAt",w.r.ag(),"visibleChildrenPerParent",w.w,"ownerEmail",w.x,"localRole",C.igB(w.y),"games",w.z],x.N,x.z)},
wX(d,e,f,g,h,i,j,k,l){var w=this,v=j==null?w.b:j,u=d==null?w.c:d,t=g==null?w.d:g,s=e==null?w.e:e,r=i==null?w.f:i,q=l==null?w.w:l,p=k==null?w.x:k,o=h==null?w.y:h,n=f==null?w.z:f
return new C.kT(w.a,v,u,t,s,r,w.r,q,p,o,n)},
bf3(d,e){var w=null
return this.wX(w,w,w,d,e,w,w,w,w)},
cPl(d,e,f,g,h,i,j){return this.wX(d,e,null,f,g,h,i,j,null)},
aFX(d,e){var w=null
return this.wX(w,w,w,w,d,w,w,e,w)},
cPn(d,e,f,g,h,i,j,k){return this.wX(d,e,null,f,g,h,i,j,k)},
cNR(d){var w=null
return this.wX(w,w,w,w,w,w,w,d,w)},
cOe(d){var w=null
return this.wX(w,w,w,w,w,w,w,w,d)},
beH(d){var w=null
return this.wX(w,w,d,w,w,w,w,w,w)},
aFI(d){var w=null
return this.wX(w,w,w,w,w,d,w,w,w)},
cOT(d,e,f){var w=null
return this.wX(w,d,w,w,e,w,w,f,w)},
cNE(d){var w=null
return this.wX(w,w,w,d,w,w,w,w,w)},
cOq(d,e){var w=null
return this.wX(d,w,w,w,w,w,e,w,w)}}
C.cFM.prototype={
a7(){return"WrapAlignment."+this.b}}
C.cFN.prototype={
a7(){return"WrapCrossAlignment."+this.b}}
C.aIu.prototype={}
C.bav.prototype={
ak(d){this.a=d.a
this.b=d.b},
cY(d){var w=new C.bav()
w.a=this.a
w.b=this.b
return w},
u(d){return A.b2(this).u(0)+" first:"+this.a+" last:"+this.b}}
C.bau.prototype={
gwP(){return!0},
gGu(){return this.z.b<this.b.length},
aW6(d){switch(0){case 0:return d.a.c}},
aVN(d){switch(0){case 0:return d.a.d}},
bVy(d,e){switch(0){case 0:return new A.hO(d,e)}},
bUW(d,e,f){var w=e-f
switch(0){case 0:return d?w:0}},
hf(b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=b1.b,b3=b2.length
if(b3===0||b1.z.a>=b3){b1.a=new A.iO(0,0,B.o.E(0,b5.a,b5.b),B.o.E(0,b5.c,b5.d))
return}w=A.I9(b4)
switch(0){case 0:v=b5.b
u=new A.kP(0,v,0,1/0)
t=w===B.V9
break}s=A.a([],x.gZ)
r=A.T(x.gF,x.S)
for(b3=b1.z,q=B.d.fO(b2,b3.a),p=q.length,o=b1.f,n=b1.w,m=0,l=0,k=0,j=0,i=0,h=0;h<q.length;q.length===p||(0,A.J)(q),++h){g=q[h]
g.hf(b4,u,!0)
f=b1.aW6(g)
f.toString
e=b1.aVN(g)
e.toString
if(i>0&&k+o+f>v){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIu(k,j,i))
k=0
j=0
i=0}k+=f
if(i>0)k+=o
j=Math.max(j,e);++i
r.n(0,g,s.length)}if(i>0){m=Math.max(m,k)
l+=j
if(s.length!==0)l+=n
s.push(new C.aIu(k,j,i))}d=s.length
switch(0){case 0:q=b5.cz(new A.hO(m,l))
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
a8=b1.aW6(g)
e=b1.aVN(g)
e.toString
a9=b1.bUW(!0,j,e)
if(t){a8.toString
a6-=a8}e=b1.bVy(a6,a3+a9)
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
v.eg(u.a,u.b,0,1)
w.pl(0,v)
for(u=r.z,u=B.d.dt(r.b,u.a,u.b),t=u.length,s=0;s<u.length;u.length===t||(0,A.J)(u),++s)u[s].fV(d)
w.ny(0)},
GZ(d,e){var w=this.z
w.a=e.a
w.b=e.b
w.a=e.b},
is(){return this.z}}
C.by4.prototype={}
var z=a.updateTypes(["aB<~>()","P(hT)","~()","P(kT)","P(nv)","a8<n,@>(kT)","F(kT,kT)","F(hT,hT)","n(hT)","kT(a8<@,@>)","P(lC)","nv(a8<@,@>)","a8<n,@>(nv)","P(uN)","uN()","F(hT)","ai<hT>()","P(zB)","a05(Z)","n?(hT)","eI<n?>(hT)","aB<~>(lC)","P(rm)","a8<n,@>(hT)","hT(a8<@,@>)","F(lC,lC)","P(afL)","~(bd)","v(oF)","F(F,a9R)","P(qF<F>)","~(qF<F>)","TU(Z)","P(MJ)","P(uM)","~(hT)","n(n)","Wd(Z)","TT(Z)","ae8(Z)","a_1(Z)","hT(hT)","cL(bB<n,Gz>)","cL(KS)","a_v(Z)","F?(hT)","hT()","P(KS)","D(hT)","~(Ip)","a_r(Z)","v(Ip,n,a0)","P(afE)","bB<n,ai<a8<n,@>>>(n,ai<nv>)","a_t(Z)","+count,id,name(F,n,n)(kT)","n(kT)","a0p(Z)","a0q(Z)","P(lV)","lV()","ZA(Z)","a2c(Z)","a_3(Z)","a_2(Z)","~(F)","~(n,lr?)","v(rm)","aet(Z)","~(mi)","aB<~>([n?])","I(I,lC)","v(lC)","I(I,rm)","a8<n,@>(rm)","rm(a8<@,@>)","ai<lr>()","uM()","n(V)","lC(a8<@,@>)","ct(Io)","n(lC)","a8<n,@>(lC)","F(nv,nv)","kT(a8<n,@>)","kT(kT)"])
C.fNi.prototype={
$1(d){return d.a+" "+d.b},
$S:131}
C.fNh.prototype={
bom(d){var w=0,v=A.j(x.T),u,t=this,s,r,q,p,o
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a,r=null,q=0
case 3:if(!(q<2)){w=5
break}w=6
return A.b(A.re(s,d,B.hX,"book",E.Gz),$async$$1)
case 6:p=f
o=p.b
if(o!=null&&B.a.i(o).length!==0){u=o
w=1
break}r=p.a
case 4:++q
w=3
break
case 5:throw A.W(r!=null&&A.LR(r)?y.k:y.A)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$1(d){return this.bom(d)},
$S:278}
C.fNj.prototype={
$1(d){return d.b},
$S:131}
C.fWP.prototype={
$1(d){var w=null
return A.eN(w,B.L,new H.Ql(this.a,this.b,w),w,w,0,B.a06,B.d7,w,w,w)},
$S:48}
C.fAA.prototype={
$1(d){return d!=null},
$S:208}
C.fAB.prototype={
$1(d){var w
if(d!=null)w=Math.abs(d.a)<=1.5&&Math.abs(d.b)<=1.5
else w=!0
return w},
$S:208}
C.fAG.prototype={
$1(d){if(this.a)return new A.o(d.a*520,d.b*160)
return d},
$S:172}
C.fL1.prototype={
$4$bold$valueColor(d,e,f,g){var w=null,v=A.fc(d,w,w,w,A.ha(w,B.tk,w,w,w,w,w,w,w,B.dD,w,w,10.5,w,B.ez,w,!0,w,w,w,w),w),u=f?B.ez:B.wp
return new A.o9(D.bAz,A.aaG(A.a([new A.fV(130,w,v),new A.zA(1,B.H9,A.fc(e,w,w,w,A.ha(w,g==null?D.esR:g,w,w,w,w,w,w,w,B.dD,w,w,11,w,u,w,!0,w,w,w,w),w))],x.Z),B.ym,B.lQ))},
$2(d,e){return this.$4$bold$valueColor(d,e,!1,null)},
$3$bold(d,e,f){return this.$4$bold$valueColor(d,e,f,null)},
$S:1952}
C.fL0.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g="Missed days",f=A.vX(999)
f=A.xz(A.lQ(h,A.fc("Cashier",h,h,h,A.ha(h,D.Aj,h,h,h,h,h,h,h,B.dD,h,h,10,h,B.ez,h,!0,h,h,h,h),h),h,new A.kQ(D.esI,h,f,B.i0,h),h,h,D.bB4,h))
w=A.xz(A.fc("Debt receipt",h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dD,h,h,22,h,B.ez,h,!0,h,h,h,h),h))
v=A.xz(A.fc(C.xi(new A.V(Date.now(),0,!1),!0),h,h,h,D.aaJ,h))
u=A.vX(12)
t=i.b
s=B.a.i(t.b)
if(s.length===0)s="\u2014"
s=A.fc(s,h,h,h,A.ha(h,h,h,h,h,h,h,h,h,B.dD,h,h,14,h,B.ez,h,!0,h,h,h,h),h)
r=A.fc("Person who owes",h,h,h,D.aaJ,h)
q=A.vX(10)
p=x.Z
u=A.lQ(h,A.zt(A.a([s,new A.fV(h,2,h),r,new A.fV(h,10,h),A.lQ(h,A.zt(A.a([A.fc("Amount owed",h,h,h,D.aaJ,h),new A.fV(h,2,h),A.fc(A.Bn(t.c),h,h,h,A.ha(h,D.Aj,h,h,h,h,h,h,h,B.dD,h,h,20,h,B.ez,h,!0,h,h,h,h),h)],p),B.rH,B.lQ),h,new A.kQ(B.pG,h,q,B.i0,h),h,h,D.bAf,1/0)],p),B.rH,B.lQ),h,new A.kQ(E.aMd,h,u,B.i0,h),h,h,D.bCb,1/0)
q=new A.nS(D.esL,0.9,B.l7)
r=A.vX(12)
s=i.c
o=s.$2("Original due",C.xi(t.r,!1))
n=s.$2("Current due",C.xi(t.f,!1))
m=i.d
l=new A.nS(m,1.1,B.l7)
k=A.vX(8)
j=i.a
k=A.a([o,n,new A.fV(h,6,h),A.lQ(h,A.xz(A.fc(t.gaN3(),h,h,h,A.ha(h,m,h,h,h,h,h,h,h,B.dD,h,h,11,h,B.ez,h,!0,0.5,h,h,h),h)),h,new A.kQ(h,new A.pY(l,l,l,l),k,B.i0,h),h,h,D.bBc,1/0),new A.fV(h,10,h),s.$4$bold$valueColor("Date paid",j.c,!0,j.b)],p)
if(t.x!=null&&i.e)k.push(s.$4$bold$valueColor(g,"None \u2014 paid on time",!0,D.Aj))
else{o=i.f
n=o.length
if(n===0)k.push(s.$4$bold$valueColor(g,"None yet",!0,D.Aj))
else{n=A.fc("Missed days ("+n+")",h,h,h,A.ha(h,B.tk,h,h,h,h,h,h,h,B.dD,h,h,10.5,h,B.ez,h,!0,h,h,h,h),h)
m=A.U(o).k("N<1,Ts>")
o=A.C(new A.N(o,new C.fL_(),m),m.k("ak.E"))
B.d.v(k,A.a([new A.fV(h,4,h),n,new A.fV(h,6,h),new C.bau(5,5,new C.bav(),o)],p))}}o=B.a.i(t.y)
if(o.length!==0)B.d.v(k,A.a([new A.fV(h,8,h),s.$2("Notes",o)],p))
f=A.a([f,new A.fV(h,8,h),w,new A.fV(h,3,h),v,new A.fV(h,16,h),u,new A.fV(h,10,h),A.lQ(h,A.zt(k,B.ym,B.lQ),h,new A.kQ(h,new A.pY(q,q,q,q),r,B.i0,h),h,h,B.all,1/0)],p)
w=j.a
if(w!=null){v=new A.nS(B.JB,1,B.l7)
B.d.v(f,A.a([new A.fV(h,16,h),A.fc("Debtor signature",h,h,h,A.ha(h,B.tk,h,h,h,h,h,h,h,B.dD,h,h,10,h,B.ez,h,!0,h,h,h,h),h),new A.fV(h,6,h),A.lQ(h,new A.IJ(w,B.Xw,h,h),h,new A.kQ(h,new A.pY(v,v,v,v),A.vX(6),B.i0,h),82,h,B.Og,1/0)],p))}f.push(new A.fV(h,18,h))
if(t.x!=null)w=i.e?"Payment was received on time.":"Payment was received after one or more missed days (shown in red)."
else w="This debt is still unpaid. Missed days appear in red when the due date has passed."
f.push(A.fc(w,h,h,h,D.fob,h))
f.push(new A.fV(h,18,h))
f.push(A.xz(A.fc("NGMY.ORG",h,h,h,A.ha(h,D.Aj,h,h,h,h,h,h,h,B.dD,h,h,14,h,B.ez,h,!0,1.8,h,h,h),h)))
return f},
$S:362}
C.fL_.prototype={
$1(d){var w=null,v=new A.nS(D.JC,0.7,B.l7),u=A.vX(999)
return A.lQ(w,A.fc(C.xi(d,!1),w,w,w,A.ha(w,D.JC,w,w,w,w,w,w,w,B.dD,w,w,9.5,w,B.ez,w,!0,w,w,w,w),w),w,new A.kQ(w,new A.pY(v,v,v,v),u,B.i0,w),w,w,D.bGD,w)},
$S:1953}
C.c7z.prototype={
$1(d){var w=null,v=B.bC.j(0.08),u=A.m(999),t=A.L(B.bC.j(0.28),B.r,1)
return A.q(w,A.d(C.xi(d,!1),w,w,w,w,w,w,D.fve,w,w,w),B.f,w,w,new A.p(v,w,t,u,w,w,B.n),w,w,w,w,B.eH,w,w,w)},
$S:1954}
C.fXl.prototype={
$1(d){var w=null,v=A.aH(d,B.c1,x.w).w,u=A.m(26),t=A.aG(w,w,w,w,D.bZX,w,w,w,new C.fXi(d),w,w,w,w,w,B.ce),s=this.a,r=this.b,q=B.c.j(0.28),p=x.p
return A.eN(w,B.L,new A.cR(new A.aY(0,380,0,v.a.b*0.9),A.aJ(!1,B.a3,!0,u,new A.D(B.a_U,A.x(A.a([new A.bL(B.aa,w,w,t,w),new A.dn(1,B.cp,A.cg(A.x(A.a([new A.em(new C.b_w(r,w),s),B.X,A.A(A.a([A.E(A.es(B.zv,D.fXe,new C.fXj(s,r,d),A.di(w,w,w,w,w,w,w,w,w,B.c,w,w,B.ff,w,new A.b9(A.m(14),B.a1),new A.ay(q,1,B.r,-1),w,w,w,w)),1),B.ae,A.E(A.dh(B.a3o,D.fTD,new C.fXk(r,d),A.bp(B.b1,w,w,w,B.c,w,B.ff,w,new A.b9(A.m(14),B.a1),w,w,w)),1)],p),B.m,w,B.e,B.i,0,w,w)],p),B.m,w,B.e,B.Q,0,B.p),B.t,w,B.y,w,w,w,w,B.ah),w)],p),B.m,w,B.e,B.Q,0,B.p),w),B.f,B.as,0,w,w,w,w,w,B.aj),w),w,w,0,As.a0j,B.d7,w,w,w)},
$S:48}
C.fXi.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fXj.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:m=$.aW.ap$.x.h(0,t.a)
m=m==null?null:m.gbg()
x.az.a(m)
if(m==null){w=1
break}w=4
return A.b(m.md(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.he),$async$$0)
case 3:s=e
if(s==null){w=1
break}r=J.eS(B.dN.gaU(s))
m=t.b
q=B.a.i(m.b)
p=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
o=A.aL(q,p,"_")
if(o.length>32)o=B.a.aC(o,0,32)
w=5
return A.b(A.tn(r,"ngmy_cashier_receipt_"+(o.length===0?m.a:o)+".png"),$async$$0)
case 5:n=e
m=t.c
if(m.e!=null)m.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(n,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fXk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(C.fRD(u.a),$async$$0)
case 2:t=e
s=u.b
if(s.e!=null){s=s.L(x.q).f
s.U(A.b3(null,null,null,null,null,B.t,null,A.d(t?"Print dialog opened.":"Could not print receipt.",null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))}return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fXd.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.b
return A.eN(w,B.as,A.x(A.a([new A.D(D.bC_,A.A(A.a([A.E(A.d(this.a,w,w,w,w,w,w,B.ne,w,w,w),1),A.aG(w,w,w,w,B.lo,w,w,w,new C.fXb(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),w),new A.dn(1,B.cp,new A.D(B.f2,A.by(A.m(14),A.fR(t,B.A,w,w,B.cj,B.dB,!1,w,!1,w,w),B.aq),w),w),new A.D(B.NU,new A.a5(1/0,w,A.dh(B.oC,D.aWq,new C.fXc(t,this.c,d),A.bp(B.b1,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w),w)],u),B.m,w,B.e,B.Q,0,B.p),w,w,w,B.O7,B.d7,w,new A.b9(v,B.a1),w)},
$S:48}
C.fXb.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fXc.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(A.tn(u.a,u.b),$async$$0)
case 2:t=e
s=u.c
if(s.e!=null)s.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.fXp.prototype={
$1(d){var w=null,v=A.m(20),u=x.p,t=this.a,s=this.b
return A.eN(w,B.as,new A.D(D.bC7,A.x(A.a([A.A(A.a([D.bHQ,A.aG(w,w,w,w,B.lo,w,w,w,new C.fXn(d),w,w,w,w,w,w)],u),B.m,w,B.e,B.i,0,w,w),B.U,new A.em(A.by(A.m(14),A.q(w,A.b4(w,w,w,new C.bcH(s.ax,w),B.az),B.f,B.c,w,w,w,200,w,w,w,w,w,1/0),B.aq),t),B.af,new A.a5(1/0,w,A.dh(B.oC,D.aWq,new C.fXo(t,s,d),A.bp(B.b1,w,w,w,B.c,w,w,w,new A.b9(A.m(14),B.a1),w,w,w)),w)],u),B.m,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(v,B.a1),w)},
$S:48}
C.fXn.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.fXo.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:n=$.aW.ap$.x.h(0,t.a)
n=n==null?null:n.gbg()
x.az.a(n)
if(n==null){w=1
break}w=4
return A.b(n.md(2.5),$async$$0)
case 4:w=3
return A.b(e.hs(B.he),$async$$0)
case 3:s=e
if(s==null){w=1
break}n=t.b
r=B.a.i(n.b)
q=A.ag("[^a-zA-Z0-9_-]+",!0,!1,!1,!1)
p=A.aL(r,q,"_")
if(p.length>32)p=B.a.aC(p,0,32)
r=J.eS(B.dN.gaU(s))
w=5
return A.b(A.tn(r,"ngmy_cashier_signature_"+(p.length===0?n.a:p)+".png"),$async$$0)
case 5:o=e
n=t.c
if(n.e!=null)n.L(x.q).f.U(A.b3(null,null,null,null,null,B.t,null,A.d(o,null,null,null,null,null,null,null,null,null,null),null,B.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.fFl.prototype={
$1(d){return d.a===this.a},
$S:262}
C.dPH.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dPs.prototype={
bnA(d,e){var w=0,v=A.j(x.H),u=this,t,s,r,q,p
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,v)
for(;;)switch(w){case 0:q=u.b
p=q.c
p.toString
t=q.a.d.a?B.e9:B.c
s=u.a
w=2
return A.b(A.bT(t,null,new C.dPv(s,q,e),p,!0,!0,!1,B.JT,!1,!1,x.N),$async$$2)
case 2:r=g
if(r!=null)d.$1(new C.dPw(s,r))
return A.h(null,v)}})
return A.i($async$$2,v)},
$2(d,e){return this.bnA(d,e)},
$S:1955}
C.dPv.prototype={
$1(d){var w,v=null,u=this.c===B.wY,t=u?D.drL:D.dnn
u=u?"Male":"Female"
w=this.b
u=A.d("Choose "+u.toLowerCase()+" icon",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.aQ:B.as,v,v,v,v,v,v,v,v,15,v,v,B.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
return A.bn(!0,new A.D(O.alR,A.x(A.a([u,B.ax,A.d("Default is already set \u2014 pick another if you want.",v,v,v,v,v,v,A.l(v,v,w.a.d.a?B.bu:B.bq,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.af,A.im(!0,v,v,B.y,D.feK,new C.dPu(this.a,w,t,d),t.length,v,B.dV,B.ah,!0)],x.p),B.al,v,B.e,B.Q,0,B.p),v),!0,!1,B.ag,!0,!0)},
$S:27}
C.dPu.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=t.c[e],q=r===t.a.e,p=A.m(14)
if(q)w=B.cG.j(0.14)
else w=t.b.a.d.a?B.S:B.aQ
v=A.m(14)
if(q)u=B.cG
else u=(t.b.a.d.a?B.bu:B.bq).j(0.16)
u=A.L(u,B.r,q?1.6:1)
return A.aP(!1,p,!0,A.q(B.A,C.b_v(r,26),B.f,s,s,new A.p(w,s,u,v,s,s,B.n),s,s,s,s,s,s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,new C.dPt(t.d,r),s,s,s,s,s,s,s)},
$S:183}
C.dPt.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dPw.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.dPq.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:97}
C.dPr.prototype={
$4(d,e,f,g){var w=this,v=null,u=x.X,t=A.cJ(B.cw,e,v)
return new A.d0(e,!1,A.it(B.A,A.at(A.aJ(!1,B.a3,!0,v,new A.e0(new C.dPp(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w),v),B.f,B.L,0,v,v,v,v,v,B.aj),v,v,v),v,new A.bg(t,new A.br(0.96,1,u),u.k("bg<bN.T>"))),v)},
$S:34}
C.dPp.prototype={
$2(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.aH(d,B.c1,x.w).w,i=l.b,h=i.a.d.a,g=h?B.e9:B.c,f=A.m(14),e=A.L((h?B.bu:B.bq).j(0.16),B.r,1)
h=l.c==null
w=h?"Add person":"Edit"
w=A.E(A.d(w,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.as,k,k,k,k,k,k,k,k,16,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1)
v=A.m(8)
u=x.p
v=A.A(A.a([w,A.aP(!1,v,!0,new A.D(B.ey,A.X(B.cz,i.a.d.a?B.bu:B.bq,k,k,k,20),k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPa(d),k,k,k,k,k,k,k)],u),B.m,k,B.e,B.i,0,k,k)
w=l.d
t=A.l(k,k,i.a.d.a?B.aQ:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=i.aUX("Name")
r=l.a
q=r.d==null?k:new C.dPb(r,l.e,a0)
p=A.m(20)
o=i.a.d.a?B.bp:B.m4
n=A.L(B.cG.j(0.35),B.r,1)
m=r.d
t=A.aM(k,B.Z,h,k,!0,B.t,k,A.aN(),w,k,k,k,k,k,2,s.beX(new A.D(B.fy,A.aP(!1,p,!0,A.q(B.A,C.b_v(m==null?"\ud83d\udc64":A.fLQ(r.e,m),18),B.f,k,k,new A.p(o,k,n,k,k,k,B.a7),k,34,k,B.cl,k,k,k,34),k,!0,k,k,k,k,k,k,k,k,k,k,k,q,k,k,k,k,k,k,k),k)),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.l3,k,B.aay,k,k)
v=A.a([v,B.af,t,B.U,A.d("Gender (required)",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bq,k,k,k,k,k,k,k,k,11.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),B.an,A.A(A.a([A.E(i.aVD("\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","Male",new C.dPc(r,a0),r.d===B.wY),1),B.ae,A.E(i.aVD("\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","Female",new C.dPh(r,a0),r.d===B.a7e),1)],u),B.m,k,B.e,B.i,0,k,k)],u)
if(r.d!=null)B.d.v(v,A.a([B.U,new A.bL(B.a6,k,k,A.ho(D.bYe,D.fVw,new C.dPi(r,l.e,a0),A.ft(k,k,k,k,k,k,k,k,k,k,k,B.cG,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ce)),k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aQ:B.as,k,k,k,k,k,k,k,k,14,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k)
s=A.a([new A.uQ(A.ag("[0-9.]",!0,!1,!1,!1),!0,"")],x.aS)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aN(),l.f,k,k,k,k,k,2,i.aUY("Amount","$ "),B.y,!0,k,!0,k,!1,k,B.ak,k,k,s,k,k,B.e6,k,k,k,1,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.X)
t=i.a.d.a
s=t?B.S:B.aQ
q=A.m(10)
p=A.m(10)
o=A.m(10)
n=A.L((t?B.bu:B.bq).j(0.22),B.r,1)
t=A.d("Pay by",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,B.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)
m=C.xi(r.a,!1)
v.push(A.aJ(!1,B.a3,!0,q,A.aP(!1,p,!0,A.q(k,A.A(A.a([A.E(A.x(A.a([t,B.bG,A.d(m,k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.as,k,k,k,k,k,k,k,k,14,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],u),B.E,k,B.e,B.i,0,B.p),1),D.bUX],u),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,n,o,k,k,B.n),k,k,k,k,B.bh,k,k,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,new C.dPj(r,d,a0),k,k,k,k,k,k,k),B.f,s,0,k,k,k,k,k,B.aj))
if(!h)B.d.v(v,A.a([B.U,A.d("Extending keeps missed days already counted.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k)],u))
v.push(B.X)
t=A.l(k,k,i.a.d.a?B.aQ:B.as,k,k,k,k,k,k,k,k,13,k,k,k,k,k,!0,k,k,k,k,k,k,k,k)
v.push(A.aM(k,B.Z,!1,k,!0,B.t,k,A.aN(),l.r,k,k,k,k,k,2,i.aUX("Note (optional)"),B.y,!0,k,!0,k,!1,k,B.ak,k,k,k,k,k,k,k,k,k,2,k,k,!1,"\u2022",k,k,k,k,k,!1,k,k,!1,k,!0,k,B.ac,k,k,k,k,k,k,k,k,k,k,k,t,!0,B.a5,k,B.ao,k,k,k,k))
v.push(B.af)
v.push(A.d("Optional verification",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.aQ:B.as,k,k,k,k,k,k,k,k,12.5,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(A.d("ID photo, selfie, and signature from the person who owes you \u2014 all optional.",k,k,k,k,k,k,A.l(k,k,i.a.d.a?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,k,k,1.3,!0,k,k,k,k,k,k,k,k),k,k,k))
v.push(i.b36(r.b.length!==0,B.mZ,new C.dPk(r,i,a0),new C.dPl(r,a0),"Upload from gallery","ID photo"))
v.push(i.b36(r.c.length!==0,D.bOj,new C.dPm(r,i,d,a0),new C.dPn(r,a0),"Camera or gallery","Selfie"))
v.push(B.U)
t=l.w
v.push(new Ar.a8u("Signature (optional)",t,new C.dPo(a0),new C.dPd(a0,t),new C.dPe(d,t,a0),k))
v.push(B.aB)
i=i.a.d.a
t=i?B.bu:B.bq
s=(i?B.bu:B.bq).j(0.28)
s=A.E(A.dU(E.aWj,new C.dPf(d),A.di(k,k,k,k,k,k,k,k,k,t,k,k,B.qv,k,new A.b9(A.m(10),B.a1),new A.ay(s,1,B.r,-1),k,k,k,k)),1)
t=A.bp(B.cG,k,k,k,B.c,k,B.qv,k,new A.b9(A.m(10),B.a1),k,k,k)
v.push(A.A(A.a([s,B.ae,A.E(A.bI(A.d(h?"Save":"Update",k,k,k,k,k,k,B.vx,k,k,k),k,new C.dPg(r,w,d),t),1)],u),B.m,k,B.e,B.i,0,k,k))
return A.q(k,A.cg(A.x(v,B.al,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.f,k,new A.aY(0,1/0,0,j.a.b*0.88),new A.p(g,k,e,f,k,k,B.n),k,k,k,B.rP,B.jm,k,k,360)},
$S:176}
C.dPa.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPb.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPc.prototype={
$0(){return this.b.$1(new C.dP9(this.a))},
$S:0}
C.dP9.prototype={
$0(){var w=this.a
w.d=B.wY
w.e="\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPh.prototype={
$0(){return this.b.$1(new C.dP8(this.a))},
$S:0}
C.dP8.prototype={
$0(){var w=this.a
w.d=B.a7e
w.e="\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1"},
$S:0}
C.dPi.prototype={
$0(){var w=this.a.d
w.toString
return this.b.$2(this.c,w)},
$S:0}
C.dPj.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(A.xm(null,u.b,A.c1(2020,1,1,0,0,0,0,0),null,s,A.c1(2100,1,1,0,0,0,0,0)),$async$$0)
case 2:r=e
if(r!=null)u.c.$1(new C.dP7(t,r))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dP7.prototype={
$0(){var w=this.b
return this.a.a=A.c1(w.gcl(),w.gcg(),w.gcw(),0,0,0,0,0)},
$S:0}
C.dPk.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:w=2
return A.b(u.b.Q_(!1),$async$$0)
case 2:t=e
if(t!=null)u.c.$1(new C.dP6(u.a,t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dP6.prototype={
$0(){return this.a.b=this.b},
$S:0}
C.dPl.prototype={
$0(){return this.b.$1(new C.dP5(this.a))},
$S:0}
C.dP5.prototype={
$0(){return this.a.b=""},
$S:0}
C.dPm.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:r=t.b
q=r.a.d.a?B.e9:B.c
w=3
return A.b(A.bT(q,null,new C.dP3(),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:p=e
if(p==null){w=1
break}w=4
return A.b(r.Q_(p==="camera"),$async$$0)
case 4:s=e
if(s!=null)t.d.$1(new C.dP4(t.a,s))
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.dP3.prototype={
$1(d){var w=null
return A.bn(!0,A.x(A.a([A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.arb,w,w,w,w,new C.dOY(d),!1,w,w,w,w,w,w,w,D.fLz,w,w,w),A.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.ar9,w,w,w,w,new C.dOZ(d),!1,w,w,w,w,w,w,w,D.fSE,w,w,w)],x.p),B.m,w,B.e,B.Q,0,B.p),!0,!1,B.ag,!0,!0)},
$S:27}
C.dOY.prototype={
$0(){A.a6(this.a,!1).O("camera")
return null},
$S:0}
C.dOZ.prototype={
$0(){A.a6(this.a,!1).O("gallery")
return null},
$S:0}
C.dP4.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.dPn.prototype={
$0(){return this.b.$1(new C.dP2(this.a))},
$S:0}
C.dP2.prototype={
$0(){return this.a.c=""},
$S:0}
C.dPo.prototype={
$0(){return this.a.$1(new C.dP1())},
$S:0}
C.dP1.prototype={
$0(){},
$S:0}
C.dPd.prototype={
$0(){return this.a.$1(new C.dP0(this.b))},
$S:0}
C.dP0.prototype={
$0(){return B.d.a8(this.a)},
$S:0}
C.dPe.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.b
w=2
return A.b(A.aiF(u.a,null,null,new C.dP_(u.c,t),t,"Debtor signature"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dP_.prototype={
$4(d,e,f,g){this.a.$1(new C.dOX(this.b,d))},
$S:404}
C.dOX.prototype={
$0(){var w=this.a
B.d.a8(w)
B.d.v(w,this.b)},
$S:0}
C.dPf.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPg.prototype={
$0(){var w=this
if(B.a.i(w.b.a.a).length===0){w.c.L(x.q).f.U(D.fjO)
return}if(w.a.d==null){w.c.L(x.q).f.U(D.fgH)
return}A.a6(w.c,!1).O(!0)},
$S:0}
C.dPK.prototype={
$3(d,e,f){return B.bM},
$C:"$3",
$R:3,
$S:97}
C.dPL.prototype={
$4(d,e,f,g){var w,v,u,t,s,r=null,q=this.a,p=q.a.d.a,o=p?B.e9:B.c,n=A.m(14),m=A.L((p?B.bu:B.bq).j(0.16),B.r,1)
p=A.d("Mark paid?",r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.aQ:B.as,r,r,r,r,r,r,r,r,16,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
w=this.b
v=w.b
u=A.Bn(w.c)
v=A.d(v+" \xb7 "+u,r,r,r,r,r,r,A.l(r,r,q.a.d.a?B.bu:B.bq,r,r,r,r,r,r,r,r,13,r,r,B.a8,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
u=w.zG(r).length
u=A.d("Missed days: "+u,r,r,r,r,r,r,A.l(r,r,w.zG(r).length>0?B.bC:B.cG,r,r,r,r,r,r,r,r,12,r,r,B.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
q=q.a.d.a
w=q?B.bu:B.bq
t=(q?B.bu:B.bq).j(0.28)
s=x.p
return new A.d0(e,!1,A.at(A.aJ(!1,B.a3,!0,r,A.q(r,A.x(A.a([p,B.U,v,u,B.aB,A.A(A.a([A.E(A.dU(B.nX,new C.dPI(d),A.di(r,r,r,r,r,r,r,r,r,w,r,r,B.jZ,r,new A.b9(A.m(10),B.a1),new A.ay(t,1,B.r,-1),r,r,r,r)),1),B.ae,A.E(A.bI(D.fT4,r,new C.dPJ(d),A.bp(B.cG,r,r,r,B.c,r,B.jZ,r,new A.b9(A.m(10),B.a1),r,r,r)),1)],s),B.m,r,B.e,B.i,0,r,r)],s),B.al,r,B.e,B.Q,0,B.p),B.f,r,r,new A.p(o,r,m,n,r,r,B.n),r,r,r,B.Cj,P.O4,r,r,300),B.f,B.L,0,r,r,r,r,r,B.aj),r,r,r),r)},
$S:34}
C.dPI.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dPJ.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dPE.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=new C.dPF(r),p=r.a.d.a,o=p?B.e9:B.c,n=A.m(14),m=A.L((p?B.bu:B.bq).j(0.14),B.r,1),l=this.b,k=l.b
p=x.p
k=A.A(A.a([A.E(A.d(k,s,1,B.a2,s,s,s,A.l(s,s,r.a.d.a?B.aQ:B.as,s,s,s,s,s,s,s,s,14,s,s,B.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s),1),A.d(A.Bn(l.c),s,s,s,s,s,s,D.fwP,s,s,s)],p),B.m,s,B.e,B.i,0,s,s)
w=A.iK((r.a.d.a?B.bu:B.bq).j(0.12),s,1,s,s,s)
v=q.$3$icon$label$onTap(B.a21,"View receipt",new C.dPx(r,d,l))
u=l.x!=null
t=u?B.ps:B.qE
u=u?"Mark unpaid":"Mark paid"
p=A.a([new A.D(D.bC4,k,s),w,v,q.$3$icon$label$onTap(t,u,new C.dPy(r,d,l)),q.$3$icon$label$onTap(B.Cw,"Edit",new C.dPz(r,d,l))],p)
if(B.a.i(l.as).length!==0)p.push(q.$3$icon$label$onTap(B.mZ,"View / download ID",new C.dPA(r,d,l)))
if(B.a.i(l.at).length!==0)p.push(q.$3$icon$label$onTap(D.bOi,"View / download selfie",new C.dPB(r,d,l)))
if(l.gaHD())p.push(q.$3$icon$label$onTap(Ad.a3e,"View / download signature",new C.dPC(r,d,l)))
p.push(q.$4$color$icon$label$onTap(B.bC,B.eg,"Delete",new C.dPD(r,d,l)))
p.push(B.ax)
return A.bn(!0,new A.D(B.us,A.q(s,A.x(p,B.m,s,B.e,B.Q,0,B.p),B.f,s,s,new A.p(o,s,m,n,s,s,B.n),s,s,s,s,s,s,s,s),s),!0,!1,B.ag,!0,!0)},
$S:27}
C.dPF.prototype={
$4$color$icon$label$onTap(d,e,f,g){var w,v=null
if(d==null)w=this.a.a.d.a?B.aQ:B.as
else w=d
return A.aP(!1,v,!0,new A.D(B.eW,A.A(A.a([A.X(e,w,v,v,v,20),B.bd,A.d(f,v,v,v,v,v,v,A.l(v,v,w,v,v,v,v,v,v,v,v,14,v,v,B.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),B.m,v,B.e,B.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,g,v,v,v,v,v,v,v)},
$3$icon$label$onTap(d,e,f){return this.$4$color$icon$label$onTap(null,d,e,f)},
$S:1956}
C.dPx.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fXh(w,this.c)},
$S:0}
C.dPy.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.SQ(this.c)},
$S:0}
C.dPz.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.DD(this.c)},
$S:0}
C.dPA.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFQ(w,v.as,"ngmy_cashier_id_"+v.a+".jpg","ID photo \xb7 "+u)},
$S:0}
C.dPB.prototype={
$0(){var w,v,u
A.a6(this.b,!1).O(null)
w=this.a.c
w.toString
v=this.c
u=v.b
C.bFQ(w,v.at,"ngmy_cashier_selfie_"+v.a+".jpg","Selfie \xb7 "+u)},
$S:0}
C.dPC.prototype={
$0(){A.a6(this.b,!1).O(null)
var w=this.a.c
w.toString
C.fXm(w,this.c)},
$S:0}
C.dPD.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.PZ(0,this.c)},
$S:0}
C.dPM.prototype={
$1(d){return d.x==null},
$S:262}
C.dPN.prototype={
$1(d){return d.x!=null},
$S:262}
C.dPO.prototype={
$2(d,e){return d+e.c},
$S:1957}
C.dPP.prototype={
$0(){return this.a.bDw()},
$S:0}
C.dPG.prototype={
$0(){return this.a.ag8(this.b)},
$S:0}
C.fG5.prototype={
$1(d){return d.a===this.a},
$S:z+34}
C.fG6.prototype={
$0(){return B.d.gH(D.a4y)},
$S:z+77}
C.dfq.prototype={
$0(){var w=this.a
return w.m(new C.dfo(w,this.b))},
$S:0}
C.dfo.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dfp.prototype={
$0(){},
$S:0}
C.dfr.prototype={
$0(){var w=this.a.gc1R()
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.fIA.prototype={
$1(d){return C.hkf(A.a3(d,x.N,x.z))},
$S:z+11}
C.fIB.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.fIC.prototype={
$2(d,e){var w=A.ca(d.a,null),v=A.ca(e.a,null)
if(w!=null&&v!=null)return B.o.aS(w,v)
return d.d.aS(0,e.d)},
$S:z+83}
C.fVT.prototype={
$1(d){return d.aj()},
$S:z+12}
C.h3i.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.fFc.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.bR0.prototype={
$2(d,e){var w=this.a.h(0,d),v=w==null?null:B.a.i(J.k(w)).toLowerCase()
return v!=null&&J.eG(e,v)?v:null},
$S:1958}
C.fWt.prototype={
$1(d){var w=this
return new C.a_t(w.a,w.b,w.c,w.d,w.e,w.f,null)},
$S:z+54}
C.dg5.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.dg4(w,d))},
$S:z+80}
C.dg4.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfU.prototype={
$0(){var w,v=this.a,u=this.b
v.d=u
w=v.e=!1
if(J.cI(u)?v.r>=J.ad(v.d):w)v.r=J.ad(v.d)-1},
$S:0}
C.dfR.prototype={
$0(){var w=this.a
w.r=this.b-1
w.w=w.x
w.x=!1},
$S:0}
C.dfs.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.dft.prototype={
$0(){var w=this.a
w.r=this.b
w.x=w.w=!0},
$S:0}
C.dfV.prototype={
$0(){return this.a.w=!1},
$S:0}
C.dfB.prototype={
$1(d){var w=null,v=A.S(d).ax.a===B.J,u=v?B.e9:B.c,t=A.d("Remove this page?",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.as,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),s=A.d("\u201c"+this.a.b+"\u201d will be deleted from this device.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return A.eg(A.a([A.bM(!1,B.dl,w,w,!0,w,w,w,new C.dfz(d),w,w),A.bI(B.xk,w,new C.dfA(d),A.bp(B.no,w,w,w,w,w,w,w,w,w,w,w))],x.p),w,w,u,s,w,w,w,w,t,w)},
$S:18}
C.dfz.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dfA.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dfC.prototype={
$0(){var w=this.a
w.w=!1
w.r=B.o.E(w.r-1,-1,999)},
$S:0}
C.dfS.prototype={
$1(d){return d.a===this.a.y.a},
$S:z+13}
C.dfT.prototype={
$0(){return B.d.gH(D.zJ)},
$S:z+14}
C.dfx.prototype={
$1(d){var w=this.a,v=w.y,u=w.gz_(0),t=J.ad(w.d)
w=J.ad(w.d)===1?"page":"pages"
return new C.TT(v.Q,u,"Family Book \xb7 "+t+" "+w,null)},
$S:z+38}
C.dfy.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfD.prototype={
$1(d){var w=this.a,v=w.y,u=B.a.i(w.a.r)
if(u.length===0)u="Our Family Book"
return new C.a_1(v,u,J.ad(w.d),null)},
$S:z+40}
C.dfE.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dg3.prototype={
$2(d,e){var w,v,u,t,s=null,r=this.a,q=r.f
q===$&&A.c()
if(e===0)w=A.aA(s,new C.ZJ(r.y,r.gz_(0),J.ad(r.d),s),B.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dg1(r),s,s,s,s,s,s,!1,B.a4)
else{w=e-1
v=J.t(r.d,w)
J.ad(r.d)
w=w===r.r&&r.w&&r.a.f
u=r.z
u===$&&A.c()
t=r.Q
t===$&&A.c()
t=new C.bc3(v,e,w,u,t,r.gbU0(),C.hzQ(r.y.Q),r.gz_(0),s)
w=t}return A.c9(q,new C.dg2(r,e),new A.D(B.a0b,w,s))},
$S:1959}
C.dg2.prototype={
$2(d,e){var w,v,u=this.a,t=u.f
t===$&&A.c()
t=t.f
if(t.length!==0&&B.d.gd5(t).ay){t=this.b
u=x.cy.a(B.d.gd5(u.f.f)).gvl(0)
w=t-(u==null?t:u)}else w=0
v=B.j.E(w,-1,0)
u=A.dr()
t=u.a
t.$flags&2&&A.aj(t)
t[11]=0.0013
u.fL(v*3.141592653589793*0.5)
return A.fw(B.a6,A.da(e,B.j.E(1+v*0.5,0,1)),null,u,!0)},
$S:46}
C.dg1.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aIP(B.qn,B.j0)},
$S:0}
C.dfO.prototype={
$0(){var w=this.a
return w.m(new C.dfN(w))},
$S:0}
C.dfN.prototype={
$0(){return this.a.w=!0},
$S:0}
C.dfP.prototype={
$0(){var w=this.a.c
w.toString
A.a6(w,!1).O(null)
return null},
$S:0}
C.dfu.prototype={
$1(d){var w,v,u=null,t=A.m(26),s=E.km.j(0.5),r=x.p,q=A.a([D.fK9,B.af],r),p=this.a
if(B.a.i(p.a.x).length!==0){w=J.cr(p.d)?"Write this book":"Write a new book"
q.push(p.ZK(d,B.ea,w,J.cr(p.d)?"Choose English or Swahili, then describe the book":"A brand new book for your shelf. Choose English or Swahili, then describe it","write"))}if(p.a.f)q.push(p.ZK(d,K.ap6,"Fix or change something","Correct a word, rewrite a page, add to it, or redesign the cover","fix"))
if(J.cI(p.d)){r=A.a([],r)
w=this.b
v=w==="en"
if(v)r.push(new A.D(B.cx,A.d("Your book is in English.",u,u,u,u,u,u,A.l(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
w=w==="sw"
if(w)r.push(new A.D(B.cx,A.d("Your book is in Swahili.",u,u,u,u,u,u,A.l(u,u,D.kM.j(0.7),u,u,u,u,u,u,u,u,12,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u))
if(w)r.push(p.ZK(d,X.aq9,"Make my Swahili sound natural","A native-speaker editor rewrites every page so it reads like real Swahili","polish"))
if(!w)r.push(p.ZK(d,B.qK,"Translate my book to Swahili","Every page, from English into Kiswahili","sw"))
if(!v)r.push(p.ZK(d,B.qK,"Translate my book to English","Every page, from Swahili into English","en"))
B.d.v(q,r)}return A.eN(u,E.BO,A.bn(!0,new A.D(Ac.yH,A.x(q,B.E,u,B.e,B.Q,0,B.p),u),!0,!1,B.ag,!0,!0),u,u,u,I.a0l,B.d7,u,new A.b9(t,new A.ay(s,1.4,B.r,-1)),u)},
$S:48}
C.dfQ.prototype={
$0(){A.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.dfH.prototype={
$1(d){var w=this.a,v=w.r>=0&&J.cI(w.d)
return new C.a_v(v,J.cI(w.d),w.r+1,null)},
$S:z+44}
C.dfI.prototype={
$1(d){var w=null
return A.oK(!1,A.eg(w,w,w,E.BO,new A.k1(this.a,new C.dfG(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:287}
C.dfG.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aad,B.oT,A.E(A.d(e,w,w,w,w,w,w,B.ju,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:751}
C.dfJ.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dfK.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:186}
C.dfL.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfM.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=u.a
r=s.a
w=2
return A.b(C.Bw(r.c,r.d,u.b),$async$$0)
case 2:r=s.a
t=u.c
w=3
return A.b(C.Sw(r.c,r.d,t),$async$$0)
case 3:if(s.c!=null)s.m(new C.dfF(s,t))
w=4
return A.b(s.lg(),$async$$0)
case 4:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfF.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dfX.prototype={
$1(d){var w=null
return A.oK(!1,A.eg(w,w,w,E.BO,new A.k1(this.a,new C.dfW(),w,w,x.cI),w,w,w,w,w,w),w,x.z)},
$S:287}
C.dfW.prototype={
$3(d,e,f){var w=null
return A.A(A.a([E.aad,B.oT,A.E(A.d(e,w,w,w,w,w,w,B.ju,w,w,w),1)],x.p),B.m,w,B.e,B.i,0,w,w)},
$S:751}
C.dfY.prototype={
$0(){return this.a.a=!1},
$S:51}
C.dfZ.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:186}
C.dg_.prototype={
$2(d,e){this.a.sp(0,d)
return d},
$S:186}
C.dg0.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.a
w=2
return A.b(C.Bw(s.c,s.d,u.b),$async$$0)
case 2:w=3
return A.b(t.lg(),$async$$0)
case 3:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dfv.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.bkv(B.qn,A4.NI)},
$S:0}
C.dfw.prototype={
$0(){var w=this.a.f
w===$&&A.c()
return w.aIP(B.qn,A4.NI)},
$S:0}
C.dhS.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dhT.prototype={
$1(d){var w=this.a
return w.m(new C.dhR(w))},
$S:9}
C.dhR.prototype={
$0(){return this.a.e="page"},
$S:0}
C.dhU.prototype={
$1(d){var w=this.a
return w.m(new C.dhQ(w))},
$S:9}
C.dhQ.prototype={
$0(){return this.a.e="book"},
$S:0}
C.dhV.prototype={
$1(d){var w=this.a
return w.m(new C.dhP(w))},
$S:9}
C.dhP.prototype={
$0(){return this.a.e="cover"},
$S:0}
C.dhW.prototype={
$0(){var w=this.a
return w.m(new C.dhO(w,this.b))},
$S:0}
C.dhO.prototype={
$0(){var w=this.b
this.a.d.sb1(0,w)
return w},
$S:0}
C.dhX.prototype={
$0(){var w=this.a,v=B.a.i(w.d.a.a)
if(v.length===0)return
w=w.ga2v()
A.a6(this.b,!1).O(new A.bqU(w,v))},
$S:0}
C.dgk.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.dgj.prototype={
$1(d){var w=this.a.a,v=w.c,u=w.d,t=this.b.a
t=t==="main"?u:u+"~"+t
return new C.a_r(v,t,u,w.e,w.f,w.r,w.w,null)},
$S:z+50}
C.dgo.prototype={
$1(d){return d.a===this.a},
$S:z+52}
C.dgn.prototype={
$1(d){var w,v=null,u=this.b,t=this.a.baw(u)
u=u.c
w=u===1?"page":"pages"
w=A.d("\u201c"+t+"\u201d and its "+u+" "+w+" will be deleted from this device.",v,v,v,v,v,v,B.hg,v,v,v)
return A.eg(A.a([A.bM(!1,B.dl,v,v,!0,v,v,v,new C.dgl(d),v,v),A.bI(B.xk,v,new C.dgm(d),A.bp(B.no,v,v,v,v,v,v,v,v,v,v,v))],x.p),v,v,E.BO,w,v,v,v,v,D.fIW,v)},
$S:18}
C.dgl.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dgm.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dgp.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dgq.prototype={
$2(d,e){var w,v,u,t=null,s=(e.b-32-14)/2,r=A.a([],x.p)
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,A.J)(w),++u)r.push(new A.a5(s,t,w[u],t))
return A.cg(A.bW(B.bH,r,B.bt,t,18,14),B.t,t,B.y,t,D.bD3,t,t,B.ah)},
$S:314}
C.dgi.prototype={
$0(){return this.a.QN(0,this.b)},
$S:0}
C.dgh.prototype={
$0(){return this.a.Qe(0,this.b)},
$S:0}
C.cOJ.prototype={
$1(d){return d.a===this.a.c.a},
$S:z+13}
C.cOK.prototype={
$0(){return B.d.gH(D.zJ)},
$S:z+14}
C.cOL.prototype={
$4(d,e,f,g){var w=null,v=A.m(e)
return A.bR(0,new A.D(d,A.c3(w,new A.p(w,w,A.L(this.a.j(f),B.r,g),v,w,w,B.n),B.bi),w),0,0,0)},
$S:1961}
C.d7h.prototype={
$1(d){return this.a.m(new C.d7g(this.b,this.c))},
$S:9}
C.d7g.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.d7G.prototype={
$1(d){return this.a.m(new C.d7t())},
$S:2}
C.d7t.prototype={
$0(){},
$S:0}
C.d7H.prototype={
$1(d){return this.a.m(new C.d7s())},
$S:2}
C.d7s.prototype={
$0(){},
$S:0}
C.d7I.prototype={
$0(){var w=this.a
return w.m(new C.d7r(w,this.b))},
$S:0}
C.d7r.prototype={
$0(){var w=this.a
return w.d=w.goo().Gb(this.b.a)},
$S:0}
C.d7J.prototype={
$0(){var w=this.a
return w.m(new C.d7q(w,this.b))},
$S:0}
C.d7q.prototype={
$0(){var w=this.a
return w.d=w.goo().cNa(this.b)},
$S:0}
C.d7K.prototype={
$1(d){return this.a.m(new C.d7p())},
$S:2}
C.d7p.prototype={
$0(){},
$S:0}
C.d7L.prototype={
$0(){var w=this.a
return w.m(new C.d7o(w,this.b))},
$S:0}
C.d7o.prototype={
$0(){var w=this.a
return w.d=w.goo().cNf(this.b.a)},
$S:0}
C.d7M.prototype={
$1(d){var w=this.a
return w.m(new C.d7B(w,d))},
$S:6}
C.d7B.prototype={
$0(){var w=this.a
return w.d=w.goo().cO9(this.b)},
$S:0}
C.d7N.prototype={
$1(d){var w=this.a
return w.d=w.goo().aFL(d)},
$S:2}
C.d7O.prototype={
$1(d){var w=this.a
return w.d=w.goo().cNi(d)},
$S:2}
C.d7Q.prototype={
$1(d){var w=this.a
return w.d=w.goo().cO7(d)},
$S:2}
C.d7R.prototype={
$1(d){var w=this.a
return w.m(new C.d7A(w,d))},
$S:9}
C.d7A.prototype={
$0(){var w=this.a
return w.d=w.goo().cNZ(this.b)},
$S:0}
C.d7S.prototype={
$0(){var w=this.a,v=w.goo(),u=B.a.i(w.gz_(0).a.a),t=B.a.i(w.gaCX().a.a)
u=v.bfd(B.a.i(w.gasB().a.a),t,u)
A.a6(this.b,!1).O(u)
return null},
$S:0}
C.bRa.prototype={
$1(d){this.a.f.sp(0,d.a/1e6)},
$S:7}
C.bR4.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bR3(w,d))},
$S:11}
C.bR3.prototype={
$0(){var w=this.a,v=w.db.length,u=Math.min(v,w.dx+2)
w.dx=u
if(u>=v){w.r.c=!1
this.b.a1(0)}},
$S:0}
C.bRd.prototype={
$0(){var w=this.a
w.dx=w.db.length
w.r.c=!1},
$S:0}
C.bR5.prototype={
$0(){var w=this.a
w.Q=D.b0n
w.adN(1)
w.r.x=null},
$S:0}
C.bR6.prototype={
$0(){var w,v,u=this.a
if(u.c==null||u.Q!==D.b0n)return
w=new A.e4()
w.d_(u.as*13+u.a.e)
v=u.r
v.Q=3+w.aw(3)
v.z=D.d2J[w.aw(6)]
v.as=u.f.a+2.6},
$S:0}
C.bR9.prototype={
$0(){var w=this.a
w.Q=D.acO
w.adN(2)
w.r.z=null},
$S:0}
C.bR8.prototype={
$0(){var w,v,u=this,t=u.a,s=t.fr=u.c
t.Q=D.hzS
t.adN(3)
w=t.r
w.d=s
w.x="I say: "+t.gCs()[t.as].b[u.b]
t=t.f
w.y=t.a+2.2
v=u.d
w.Q=3+v.aw(3)
w.z=s?D.d9b[v.aw(4)]:D.duf[v.aw(3)]
w.as=t.a+2.8},
$S:0}
C.bRb.prototype={
$0(){var w=this.a
w.Q=D.b0o
w.CW=this.b
w.cy=1
w.adN(4)
w.r.f=w.f.a+5},
$S:0}
C.bRc.prototype={
$0(){},
$S:0}
C.bR7.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bR1.prototype={
$0(){return this.a.KZ(this.b)},
$S:0}
C.bR2.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bSH.prototype={
$0(){var w=this
return w.a.R5(w.b,0,w.c,w.d)},
$S:0}
C.bSI.prototype={
$0(){var w=this
return w.a.R5(w.b,3,w.c,w.d)},
$S:0}
C.bSJ.prototype={
$0(){var w=this
return w.a.R5(w.b,1,w.c,w.d)},
$S:0}
C.bSK.prototype={
$0(){var w=this
return w.a.bTr(w.b,w.c,w.d)},
$S:0}
C.bSL.prototype={
$0(){var w=this
return w.a.R5(w.b,4,w.c,w.d)},
$S:0}
C.bSM.prototype={
$0(){var w=this
return w.a.R5(w.b,2,w.c,w.d)},
$S:0}
C.bSN.prototype={
$0(){var w=this
return w.a.R5(w.b,5,w.c,w.d)},
$S:0}
C.bSO.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:752}
C.bSG.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=D.a5I[d],p=q.a.a5(0,new A.o(0,-q.b*1.2*124)),o=A.fq(r,B.cr,r,3,r,A.cP(r,r,r,r,r,r,r,r,r,D.fnS,e),B.a5,B.bX,r,B.dz,B.bY)
o.o5(130)
w=o.b.a.c
w=p.aJ(0,new A.o(0,w.gba(w)/2+8))
v=o.b
u=v.c
v=v.a.c
t=A.bl(A.bs(w,v.gba(v)+12,u+18),B.hZ)
u=this.a
v=t.eQ(B.dG)
w=$.Q()
s=A.K()
s.r=B.dq.gp(0)
u.am(v,s)
s=A.K()
s.r=D.qe.gp(0)
u.am(t,s)
w=new A.aF(w.r,B.ai,r,r,A.a([],x.v))
s=p.a
v=t.d-1
w.D(new A.aZ(s-5,v))
w.D(new A.aq(s+1,p.b+1))
w.D(new A.aq(s+6,v))
w.D(new A.bu())
v=A.K()
v.r=D.qe.gp(0)
u.af(w,v)
o.a4(u,new A.o(t.a+9,t.b+6))},
$S:753}
C.bRr.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.bRs.prototype={
$2(d,e){var w=this.a,v=B.o.aS(w.amr(d),w.amr(e))
if(v!==0)return v
return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.ftu.prototype={
$1(d){return d!==this.a&&B.a.i(d).length!==0},
$S:3}
C.h39.prototype={
$2(d,e){if(e!=null)J.c6(this.a.c3(0,d,new C.h3a()),e)},
$S:z+66}
C.h3a.prototype={
$0(){return A.a([],x.J)},
$S:z+76}
C.h3b.prototype={
$1(d){return d!==this.a},
$S:3}
C.h3c.prototype={
$1(d){var w=d.a,v=this.a
return w!==v.a&&w!==this.b.a&&d.c===v.c},
$S:z+1}
C.h3d.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h38(this.c,d))},
$S:3}
C.h38.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.h3e.prototype={
$1(d){return d!==this.a},
$S:3}
C.h3f.prototype={
$1(d){return d!==this.a},
$S:3}
C.h3g.prototype={
$1(d){return d!==this.a&&!B.d.aV(this.b,new C.h37(this.c,d))},
$S:3}
C.h37.prototype={
$1(d){return B.a.i(d.b)===this.b},
$S:z+1}
C.fGH.prototype={
$1(d){var w=this.b.h(0,d)
w.toString
return J.ad(w)>this.a.a},
$S:3}
C.fUU.prototype={
$1(d){return d.Q},
$S:z+15}
C.fUV.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.fCH.prototype={
$1(d){return this.a>=d.c},
$S:z+17}
C.fJu.prototype={
$1(d){return d.c>this.a},
$S:z+17}
C.bMe.prototype={
$1(d){return B.a.i(d).length!==0},
$S:3}
C.h3z.prototype={
$2(d,e){return B.o.aS(C.hwb(d),C.hwb(e))},
$S:215}
C.h3A.prototype={
$1(d){return d!==this.a},
$S:3}
C.fVp.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.bKp.prototype={
$0(){var w=this.a
w.ch=!0
w.b8L()},
$S:0}
C.bKk.prototype={
$0(){},
$S:0}
C.bKq.prototype={
$1(d){return d.f<=0},
$S:z+26}
C.bKi.prototype={
$0(){},
$S:0}
C.bKj.prototype={
$0(){},
$S:0}
C.bKo.prototype={
$2(d,e){var w,v,u=null,t=this.a,s=A.a([A.bR(0,A.b4(u,u,u,new C.bcJ(t,u),B.az),0,0,0)],x.p)
if(t.dy.length!==0&&t.dx<t.fr){w=B.w.j(0.7)
v=A.m(14)
s.push(A.ap(u,A.q(u,A.d(t.dy,u,u,u,u,u,u,D.fvq,B.K,u,u),B.f,u,u,new A.p(w,u,u,v,u,u,B.n),u,u,u,u,B.bV,u,u,u),u,u,14,14,6,u))}return A.aA(B.c5,new A.an(B.a0,u,B.ad,B.t,s,u),B.y,!1,u,u,u,u,u,u,u,new C.bKl(t,e),u,u,u,u,u,u,u,new C.bKm(t,e),u,u,u,u,u,u,u,u,u,new C.bKn(t,e),u,u,u,u,!1,B.a4)},
$S:36}
C.bKl.prototype={
$1(d){return this.a.db=B.j.E(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKn.prototype={
$1(d){return this.a.db=B.j.E(d.b.a/this.b.b,0.08,0.92)},
$S:23}
C.bKm.prototype={
$1(d){return this.a.db=B.j.E(d.b.a/this.b.b,0.08,0.92)},
$S:19}
C.bKh.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.cpM.prototype={
$0(){var w=this,v=w.a
v.ax=w.b
v.at=w.c.a+" is not a child of "+w.d+". Try someone else."},
$S:0}
C.cpN.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cpL(w))},
$S:0}
C.cpL.prototype={
$0(){return this.a.ax=-1},
$S:0}
C.cpO.prototype={
$0(){var w=this,v=w.a
v.gj1()[w.b]=w.c
v.at=w.d.a+" is a child of "+w.e+". The branch grows!"},
$S:0}
C.cpP.prototype={
$2(d,e){return d+e.c.length},
$S:z+29}
C.cpQ.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.cpR.prototype={
$0(){},
$S:0}
C.cpS.prototype={
$0(){var w=this.a
w.z=w.Xi(++w.e)
w.Q=A.bZ(w.gkS()[w.e].c.length,-1,!1,x.S)
w.y=0
w.at=""},
$S:0}
C.cpI.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cpJ.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=a3.b,h=a3.d,g=this.a,f=g.gj1().length,e=i/2,d=new C.cpK(i,f,h),a0=g.as,a1=A.a4(a0).k("b8<2>")
a0=A.C(new A.b8(a0,a1),a1.k("M.E"))
a0=A.bR(0,A.c9(new A.h5(a0),new C.cpD(g,new A.o(e,56),f,d),j),0,0,0)
a1=this.b
w=g.gj1().length!==0&&!B.d.q(g.gj1(),-1)
v=x.p
e=A.a([a0,A.ap(j,new C.QD(a1.b,a1.a,76,w,j),j,j,e-50,j,4,j)],v)
for(a0=x.W,a1=x.dN,u=0;u<f;++u)e.push(new A.cL(d.$1(u).a-44,d.$1(u).b-48,j,j,j,j,new T.MR(new C.cpE(g,u),new C.cpF(g,u),new C.cpG(g,u),j,j,new A.bO("slot-"+u,a0),a1),j))
a1=g.at
if(a1.length!==0)e.push(A.ap(j,A.d(a1,j,j,j,j,j,j,A.l(j,j,B.a.q(a1,"not a child")?B.fg:B.b5,j,j,j,j,j,j,j,j,13,j,j,B.H,j,j,!0,j,j,j,j,j,j,j,j),B.K,j,j),j,j,0,0,h*0.76-6,j))
if(g.gj1().length!==0&&!B.d.q(g.gj1(),-1)){a0=g.e+1>=g.gkS().length?"See my result":"Next family"
g=A.at(C.us(a0,g.gql(g),B.cO,B.jE,D.fw),j,j,j)}else{a1=A.a([],v)
w=x.gc
v=x.gW
t=x.X
u=0
for(;;){s=g.z
if(!(u<(s===$?g.z=g.Xi(0):s).length))break
if(!B.d.q(g.gj1(),u)){r=""+u
q=g.e
p=g.ax===u?1:0
s=g.z
if(s===$){s=g.z=g.Xi(0)
o=s}else o=s
n=s[u]
n=A.ed(B.A,new C.QD(n.b,o[u].a,62,!0,j),1.15,j,j)
s=g.z
if(s===$){s=g.z=g.Xi(0)
o=s}else o=s
m=s[u]
l=o[u]
k=l.a
a1.push(new A.r2(new A.br(0,p,t),new C.cpH(),new T.Ek(u,j,new C.QD(l.b,k,62,!1,j),new A.kG(0.25,new C.QD(m.b,k,62,!1,j),j),new A.k9(n,B.aj,!1,0,B.L,j,j,j,j,!0,B.f,B.a3,j,j),B.I,T.hzI(),!0,!0,j,j,j,j,j,j,!1,B.iL,j,new A.bO("chip-"+r,a0),w),B.b3,B.iJ,j,new A.bO("t"+r+"-"+q,a0),v))}++u}g=A.bW(B.fM,a1,B.bt,j,6,8)}e.push(A.ap(0,g,j,j,0,0,j,j))
return new A.an(B.a0,j,B.ad,B.t,e,j)},
$S:67}
C.cpK.prototype={
$1(d){return new A.o(this.a*(d+0.5)/this.b,this.c*0.62)},
$S:740}
C.cpD.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=A.a([],x.g)
for(w=q.c,v=q.d,u=0;u<w;++u)o.push(v.$1(u))
v=A.a([],x.n)
for(t=q.a,s=t.as,u=0;u<w;++u){r=s.h(0,u)
if(r==null)r=p
else{r=r.x
r===$&&A.c()}v.push(r==null?0:r)}w=t.gj1().length!==0&&!B.d.q(t.gj1(),-1)
return A.b4(p,p,p,new C.bcc(q.b,o,v,w,p),B.az)},
$S:59}
C.cpF.prototype={
$1(d){return this.a.gj1()[this.b]===-1},
$S:z+30}
C.cpG.prototype={
$1(d){return this.a.cR1(this.b,d.a)},
$S:z+31}
C.cpE.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=this.b,s=u.gj1()[t]!==-1,r=A.m(18),q=e.length!==0?B.cO.j(0.3):B.L
if(s)w=v
else w=A.L(e.length!==0?B.cO:B.jV,B.r,2)
u=s?A.lB(new C.cpC(),A.at(new C.QD(u.gaFd()[u.gj1()[t]].b,u.gaFd()[u.gj1()[t]].a,62,!1,v),v,v,v),B.l8,B.iJ,v,v,new A.br(0.3,1,x.X),x.i):D.bbp
return A.cT(v,u,v,v,B.b3,new A.p(q,v,w,r,v,v,B.n),B.a3,v,100,v,v,v,v,v,88)},
$S:1964}
C.cpC.prototype={
$3(d,e,f){return A.ed(B.A,f,e,null,null)},
$S:112}
C.cpH.prototype={
$3(d,e,f){return A.dP(f,new A.o(Math.sin(e*24)*8*(1-e),0))},
$S:112}
C.cPN.prototype={
$1(d){return d>=1},
$S:119}
C.cEK.prototype={
$1(d){var w=this.a
if(w.c==null||w.as)return
if(w.f<w.gkS()[w.e].d.length)w.m(new C.cEJ(w))},
$S:11}
C.cEJ.prototype={
$0(){return this.a.f++},
$S:0}
C.cES.prototype={
$0(){var w,v=this.a
v.as=!0
w=this.b
v.ay=w
v.r+=w;++v.w},
$S:0}
C.cET.prototype={
$0(){var w=this.a,v=this.b
w.z.J(0,v)
w.Q=v},
$S:0}
C.cEU.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cER(w))},
$S:0}
C.cER.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.cEV.prototype={
$0(){return this.a.f++},
$S:0}
C.cEW.prototype={
$0(){var w=this.a
w.at=!0
w.x=this.b},
$S:0}
C.cEX.prototype={
$0(){},
$S:0}
C.cEY.prototype={
$0(){var w=this.a;++w.e
w.f=1
w.z.a8(0)
w.as=!1
w.ay=0},
$S:0}
C.cEM.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.cEN.prototype={
$3(d,e,f){var w=null
return A.lB(new C.cEL(this.a,e),w,B.b3,B.hD,w,w,new A.br(w,this.b,x.X),x.i)},
$S:1965}
C.cEL.prototype={
$3(d,e,f){var w,v=null,u=this.a,t=B.cO.j(u.as?0.6:0.15)
t=A.a([new A.ac(0,B.G,t,B.I,u.as?40:18)],x.V)
w=this.b
return A.q(v,A.hS(new A.BG(new A.uL(B.w.j(e),B.LH,v,B.Y_),H.bWU(A.b4(v,v,v,new C.aBn(u.gkS()[u.e].c,u.as,v),B.az),new A.Ep(w,w,B.VY)),v),B.aq),B.f,v,v,new A.p(v,v,v,v,t,v,B.a7),v,190,v,v,v,v,v,190)},
$S:1966}
C.cEO.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,14*(1-e))),e)},
$S:100}
C.cEP.prototype={
$3(d,e,f){return A.dP(f,new A.o(Math.sin(e*22)*8*(1-e),0))},
$S:112}
C.cEQ.prototype={
$0(){return this.a.bpR(this.b)},
$S:0}
C.f62.prototype={
$1(d){var w=d.a/1e6,v=this.a,u=Math.min(0.05,w-v.amY$)
v.amY$=w
v.q7$.sp(0,w)
v.aqO(u)},
$S:7}
C.fgb.prototype={
$1(d){var w=this.a,v=w.c.length,u=Math.min(v,w.d+2)
w.d=u
if(u>=v)d.a1(0)
w.a.$0()},
$S:11}
C.bSc.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bSb())},
$S:0}
C.bSb.prototype={
$0(){},
$S:0}
C.bS9.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.bS7.prototype={
$0(){},
$S:0}
C.bS8.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:p=t.a
if(p.c==null){w=1
break}s=p.x
r=p.gMI()
w=s+1>=r.length?3:5
break
case 3:q=C.bG5(p.gapE(0),0,r.length)
p.m(new C.bS4(p,q))
o=p
w=6
return A.b(C.BR(p.a.d,q),$async$$0)
case 6:o.z=e
s=p.a
o=p
w=7
return A.b(C.BS(s.d,s.c.a,"school",p.gapE(0)*10),$async$$0)
case 7:o.at=e
if(p.c!=null)p.m(new C.bS5())
w=4
break
case 5:p.m(new C.bS6(p))
p.gqt().VS(r[p.x].a)
case 4:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.bS4.prototype={
$0(){var w=this.a
w.as=!0
w.y=this.b},
$S:0}
C.bS5.prototype={
$0(){},
$S:0}
C.bS6.prototype={
$0(){return this.a.x++},
$S:0}
C.bSa.prototype={
$0(){return this.a.KZ(this.b)},
$S:0}
C.bS3.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.f63.prototype={
$0(){var w,v=this,u=v.a,t=46+Math.sin(u*3.1)*8,s=-90+Math.sin(u*4.3)*10,r=new A.o(t,s),q=v.b,p=v.d,o=p?C.hzW(u,1):0,n=v.e,m=n?0.9:0.3
if(n)n=Math.sin(u*9)*2
else n=p?Math.sin(u*4):0
w=p?r:D.E6
C.Su(q,D.em3,0,0.2,-0.6,-0.2,null,w,D.ekN,v.c,o,n,1.2,m,0,u,-0.3)
if(p){u=v.f.a5(0,new A.o(Math.sin(u*3)*14,Math.sin(u*2)*6))
$.Q()
p=A.K()
p.r=D.G9.gp(0)
p.c=3
p.d=B.bw
q.ah(new A.o(372+1.2*t,470+1.2*s),u,p)}},
$S:0}
C.f64.prototype={
$0(){var w=this.b,v=this.c,u=v?0.3:0
v=v?Math.max(0,Math.sin(w*1.7))*2:0
return C.Su(this.a,D.el9,0,u,0.7,-0.5,null,null,D.Jt,5,0,v,1.05,0.3,0,w,0.3)},
$S:0}
C.f65.prototype={
$0(){var w=this.b,v=this.c?Math.max(0,Math.sin(w*1.9+1))*2.4:0
return C.Su(this.a,D.emP,0,0,0.8,-0.5,null,null,D.Jt,2,0,v,1.2,0.3,0,w,0.35)},
$S:0}
C.f66.prototype={
$0(){var w=this,v=w.a.b.Q&&!w.d?0.5:0.1
return C.Su(w.b,D.elY,0,v,-0.8,-0.5,null,null,D.Jt,4,0,0,1.2,0.25,0,w.c,-0.35)},
$S:0}
C.f67.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a,p=q.b,o=p.Q&&!r.b&&p.w.length<=p.x
p=r.c
w=r.d
v=r.e
u=v?0.9:0.3
t=o?0.5:0
s=v?Math.sin(w*9)*2.4:0
if(o)v=new A.o(34,-122+Math.sin(w*5)*5)
else v=v?D.em1:D.E6
C.Su(p,D.elt,0,t,0,-0.6,null,v,D.Jt,3,0,s,1.3,u,0,w,0)
q=q.cbI(new A.o(222,455),9)
$.Q()
w=A.K()
w.r=B.cO.gp(0)
p.af(q,w)},
$S:0}
C.f68.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:752}
C.bRQ.prototype={
$2(d,e){return d+e},
$S:64}
C.bS0.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.bS1.prototype={
$0(){return this.a.y=-1},
$S:0}
C.bS2.prototype={
$0(){var w,v,u=this,t=u.a,s=u.c
t.gj1()[u.b]=s
t.gj1()[u.d]=t.y
w=t.as
v=t.q7$
w.n(0,s,v.a+0.5)
w.n(0,t.y,v.a+0.5)
t.y=-1},
$S:0}
C.bRX.prototype={
$1(d){return d},
$S:93}
C.bRW.prototype={
$0(){var w,v,u=this.a
u.at=!0
w=this.b
u.ax=w
u.y=-1
v=u.q7$
if(w){++u.r
u.CW=v.a+3}else u.cx=v.a+1.6},
$S:0}
C.bRY.prototype={
$0(){var w=this.a
w.ay=!0
w.w=this.b},
$S:0}
C.bRZ.prototype={
$0(){},
$S:0}
C.bS_.prototype={
$0(){var w,v,u,t,s=this.a
s.z=s.FF(++s.f)
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
C.bRS.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.bRT.prototype={
$2(d,e){var w=this.a
w=w.gkS()[w.f].e
return B.o.aS(w[d],w[e])},
$S:64}
C.bRU.prototype={
$2(d,e){var w=null,v=C.hbq(new A.av(A.aS(1/0,e.a,e.b),A.aS(1/0,e.c,e.d))),u=this.a
return A.aA(B.c5,new A.em(A.b4(w,w,w,new C.bjn(u,u.q7$),B.az),w),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.bRR(u,v),w,w,w,w,!1,B.a4)},
$S:36}
C.bRR.prototype={
$1(d){var w,v,u,t=d.b,s=this.b,r=s.c,q=(t.b-s.b)/r
if(q>380&&q<760){w=this.a
v=w.gj1().length
u=B.o.E(B.j.bh((t.a-s.a)/r/450*v),0,v-1)
w.d0P(w.gj1()[u])}},
$S:23}
C.bRV.prototype={
$1(d){var w=this.a
return w.gkS()[w.f].d[d]},
$S:78}
C.dr2.prototype={
$2(d,e){return 0},
$S:64}
C.bRC.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bRB())},
$S:0}
C.bRB.prototype={
$0(){},
$S:0}
C.bRA.prototype={
$0(){},
$S:0}
C.bRu.prototype={
$0(){},
$S:0}
C.bRv.prototype={
$0(){},
$S:0}
C.bRz.prototype={
$0(){var w=this.a
w.ax=this.c
w.r=D.B4},
$S:0}
C.bRy.prototype={
$1(d){var w=null,v=this.a.gqt(),u=A.d(d,w,w,w,w,w,w,D.aUR,w,w,w),t=v.gbmi(0)
return A.aA(B.c5,A.x(A.a([u,B.bG,A.d(t+(v.d<v.c.length?"\u258d":""),w,w,w,w,w,w,D.aV5,w,w,w)],x.p),B.E,w,B.e,B.i,0,B.p),B.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v.gbsd(v),w,w,w,w,w,w,!1,B.a4)},
$S:132}
C.bRw.prototype={
$0(){return this.a.KZ(this.b)},
$S:0}
C.bRx.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRt.prototype={
$0(){return A.a6(this.a,!1).hU()},
$S:0}
C.e0U.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e0V.prototype={
$1(d){return this.a},
$S:39}
C.e0W.prototype={
$0(){var w=this.a
return w.d=w.gSR().beH(this.b)},
$S:0}
C.e0S.prototype={
$1(d){return new C.TU(this.a,null)},
$S:z+32}
C.e0T.prototype={
$1(d){return d.a===this.a.a},
$S:z+33}
C.e0R.prototype={
$1(d){var w=null,v=this.a.b
v=A.d('"'+(v.length===0?"Untitled":v)+'" will be removed for everyone in the family.',w,w,w,w,w,w,B.hg,w,w,w)
return A.eg(A.a([A.bM(!1,E.aWt,w,w,!0,w,w,w,new C.e0P(d),w,w),A.bM(!1,D.fQv,w,w,!0,w,w,w,new C.e0Q(d),w,w)],x.p),w,w,D.fw,v,w,w,w,w,D.fD6,w)},
$S:18}
C.e0P.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e0Q.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e0O.prototype={
$0(){var w=null,v=this.a.c.L(x.q).f,u=this.b
return v.U(A.b3(w,w,w,w,w,B.t,w,A.d(u==null?"Not ready yet.":u,w,w,w,w,w,w,w,w,w,w),w,B.a_,w,w,w,w,w,w,w,w,w,w))},
$S:0}
C.e0X.prototype={
$1(d){var w=this.a.f,v=w.h(0,d)
return(v==null?0:v)>0?"Best "+A.w(w.h(0,d)):"NEW"},
$S:14}
C.e0Y.prototype={
$0(){var w=this.a,v=this.b,u=C.bDS(v,10,w.r,!1)
return w.uv(C.hkg(w.a.d,"kahoot",u,w.gb6i(),v.b,"Family Kahoot",v.a))},
$S:0}
C.e0Z.prototype={
$0(){var w=this.a
return w.uv(new C.alM(this.b,w.a.d,w.r,null))},
$S:0}
C.e1_.prototype={
$0(){var w=this.a
return w.uv(new C.ajZ(this.b,w.a.d,w.r,null))},
$S:0}
C.e12.prototype={
$0(){var w=this.a
return w.uv(new C.auH(this.b,w.a.d,w.r,null))},
$S:0}
C.e13.prototype={
$0(){var w=this.a
return w.uv(new C.ayE(this.b,w.a.d,w.r,null))},
$S:0}
C.e14.prototype={
$0(){var w=this.a
return w.uv(new C.alP(this.b,w.a.d,w.r,null))},
$S:0}
C.e15.prototype={
$0(){var w=this.a
return w.uv(new C.alT(this.b,w.a.d,w.r,null))},
$S:0}
C.e16.prototype={
$0(){var w=this.a
return w.uv(new C.alV(this.b,w.a.d,w.r,null))},
$S:0}
C.e17.prototype={
$0(){var w,v=this.a,u=this.b,t=B.a.i(u.b)
if(t.length===0)t="Family game"
w=u.d19()
return v.uv(C.hkg(v.a.d,"creator_"+u.a,w,v.gb6i(),"A game by the family",t,this.c.a))},
$S:0}
C.e18.prototype={
$0(){return this.a.OL(this.b)},
$S:0}
C.e19.prototype={
$0(){return this.a.XK(0,this.b)},
$S:0}
C.e10.prototype={
$0(){return this.a.OL(null)},
$S:0}
C.e11.prototype={
$0(){return this.a.L(x.q).f.U(D.fgN)},
$S:0}
C.bRO.prototype={
$0(){var w=this.a
w.d=D.b_M
w.z=3},
$S:0}
C.bRP.prototype={
$1(d){var w=this.a
if(w.z<=1){d.a1(0)
w.aPG()}else w.m(new C.bRN(w))},
$S:11}
C.bRN.prototype={
$0(){return this.a.z--},
$S:0}
C.bRE.prototype={
$0(){var w=this.a
w.d=D.acu
w.y=-1
w.as=w.a.w[w.e].r},
$S:0}
C.bRF.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.bRD(w))
if(w.as<=0){d.a1(0)
w.b6e(-1)}},
$S:11}
C.bRD.prototype={
$0(){var w=this.a
return w.as=Math.max(0,w.as-0.1)},
$S:0}
C.bRK.prototype={
$0(){var w=this.b
w.y=this.c
w.Q=this.a.a
w.d=D.WC},
$S:0}
C.bRL.prototype={
$0(){return this.a.e++},
$S:0}
C.bRH.prototype={
$0(){var w=this.a
w.d=D.b_N
w.ay=this.b},
$S:0}
C.bRI.prototype={
$0(){var w=this.a
w.ch=this.b
w.CW=this.c},
$S:0}
C.bRM.prototype={
$2(d,e){return B.o.aS(e.b,d.b)},
$S:1967}
C.bRJ.prototype={
$0(){return this.a.KZ(this.b)},
$S:0}
C.bRG.prototype={
$0(){var w=this.a.c
w.toString
return A.a6(w,!1).hU()},
$S:0}
C.bRe.prototype={
$0(){var w,v,u,t=this.a,s=t.a,r=$.aw()
s=A.a([new A.au(new A.ba(s,B.b6,B.aP),r)],x.cF)
for(t=t.b,w=t.length,v=0;v<t.length;t.length===w||(0,A.J)(t),++v){u=t[v]
s.push(new A.au(new A.ba(u,B.b6,B.aP),r))}return s},
$S:1968}
C.bRf.prototype={
$0(){return this.a.gD2().c.push(C.h5c(null,0,20,""))},
$S:0}
C.bRp.prototype={
$1(d){var w=null
return A.bt(w,new A.b6(4,A.m(12),B.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,B.dr,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,B.Vx,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
$S:254}
C.bRo.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=this.a,n=o.gD2().c,m=this.b,l=n[m],k=o.ceK(l),j=B.c.j(0.06),i=A.m(18),h=A.L(B.aV,B.r,1),g=x.p,f=A.a([A.d("Question "+(m+1),p,p,p,p,p,p,D.KI,p,p,p),B.b4],g)
if(n.length>1)f.push(A.aG(p,p,p,p,B.aqX,p,p,p,new C.bRj(o,m),p,p,p,p,p,p))
n=J.a7(k)
m=this.c
f=A.a([A.A(f,B.m,p,B.e,B.i,0,p,p),A.aM(p,B.Z,!1,p,!0,B.t,p,A.aN(),n.h(k,0),p,p,p,p,p,2,m.$1("The question"),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRk(l),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.di,!0,B.a5,p,B.ao,p,p,p,p),B.U],g)
for(w=x.fo,v=0;v<4;v=s){u=D.aCS[v]
t=D.aCy[v]
s=v+1
f.push(new A.D(B.eL,new A.c7(B.aL,B.e,B.i,B.m,p,B.p,p,0,A.a([A.d(u,p,p,p,p,p,p,new A.G(!0,t,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p),B.ae,new A.bz(1,B.bc,A.aM(p,B.Z,!1,p,!0,B.t,p,A.aN(),n.h(k,s),p,p,p,p,p,2,m.$1("Answer "+s),B.y,!0,p,!0,p,!1,p,B.ak,p,p,p,p,p,p,p,p,p,1,p,p,!1,"\u2022",p,new C.bRl(l,v),p,p,p,!1,p,p,!1,p,!0,p,B.ac,p,p,p,p,p,p,p,p,p,p,p,B.di,!0,B.a5,p,B.ao,p,p,p,p),p),new Av.Ph(v,l.c,new C.bRm(o,l),p,!1,D.lC,p,p,p,p,p,!1,!1,p,I.b0b,p,p,p,p,p,w)],g),p),p))}f.push(D.fIB)
f.push(B.an)
n=A.a([D.fCc,B.ae],g)
for(r=0;r<3;++r){q=D.ccY[r]
n.push(new A.D(B.fy,A.jv(p,p,p,A.d(""+q+"s",p,p,p,p,p,p,p,p,p,p),p,new C.bRn(o,l,q),l.d===q,p,p,p,p),p))}f.push(A.A(n,B.m,p,B.e,B.i,0,p,p))
return A.q(p,A.x(f,B.E,p,B.e,B.i,0,B.p),B.f,p,p,new A.p(j,p,h,i,p,p,B.n),p,p,p,B.kS,B.bh,p,p,p)},
$S:148}
C.bRj.prototype={
$0(){var w=this.a
return w.m(new C.bRi(w,this.b))},
$S:0}
C.bRi.prototype={
$0(){return B.d.cA(this.a.gD2().c,this.b)},
$S:0}
C.bRk.prototype={
$1(d){return this.a.a=d},
$S:2}
C.bRl.prototype={
$1(d){this.a.b[this.b]=d
return d},
$S:2}
C.bRm.prototype={
$1(d){return this.a.m(new C.bRh(this.b,d))},
$S:151}
C.bRh.prototype={
$0(){var w=this.b
if(w==null)w=0
return this.a.c=w},
$S:0}
C.bRn.prototype={
$1(d){return this.a.m(new C.bRg(this.b,this.c))},
$S:9}
C.bRg.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2z.prototype={
$0(){var w=this.a
w.ws()
w.a.bv()
w.a.qm()},
$S:0}
C.e2y.prototype={
$0(){var w=this.a
w.ws()
w.a.bv()
w.a.qm()},
$S:0}
C.e2B.prototype={
$0(){var w=this,v=w.b
if(J.cI(v)||J.cr(w.a.d))w.a.d=v
w.a.e=!1},
$S:0}
C.e2C.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2D.prototype={
$0(){return this.a.e=!1},
$S:0}
C.e2x.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.e2A.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.e2F.prototype={
$0(){this.a.P6()
return null},
$S:0}
C.e2E.prototype={
$0(){return this.a.F_(this.b)},
$S:0}
C.e2_.prototype={
$1(d){var w=null,v=this.a,u=A.d(v?"Make private?":"Make public?",w,w,w,w,w,w,w,w,w,w),t=A.d(v?"Private trees are only visible to the owner and invited collaborators.":"Public trees appear in Family Trees for every NGMY user (view only for others).",w,w,w,w,w,w,w,w,w,w),s=A.bM(!1,B.dl,w,w,!0,w,w,w,new C.e1Y(d),w,w),r=A.bp(B.bQ,w,w,w,w,w,w,w,w,w,w,w)
return A.eg(A.a([s,A.bI(A.d(v?"Make private":"Make public",w,w,w,w,w,w,w,w,w,w),w,new C.e1Z(d),r)],x.p),w,w,w,t,w,w,w,w,u,w)},
$S:18}
C.e1Y.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e1Z.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e20.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.cNE(this.b)},
$S:0}
C.e1V.prototype={
$1(d){var w=this,v=w.a
if(v.c!=null)v.aVd(w.b,w.c,w.d)},
$S:7}
C.e1m.prototype={
$1(d){return d.a===this.a.a.w.a},
$S:z+3}
C.e1n.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1E.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
r=A
q=J
w=2
return A.b(C.Hi(t.a.c),$async$$0)
case 2:s=r.nz(q.dI(e,new C.e1C(t)))
if(s!=null&&t.c!=null)t.m(new C.e1D(t,s))
t.a.bv()
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.e1C.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e1D.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1F.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return d.a===w.a},
$S:z+3}
C.e1G.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1U.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=this.b
v.d=u.cOq(C.hA5(w),w)},
$S:0}
C.e1B.prototype={
$1(d){var w,v=this.a,u=v.d
u===$&&A.c()
w=v.a.c
return new C.Wd(u,w,C.aQG(u,w),new C.e1A(v),null)},
$S:z+37}
C.e1A.prototype={
$1(d){return this.bnH(d)},
bnH(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
if(s.c==null){w=1
break}s.m(new C.e1z(s,d))
w=3
return A.b(s.ur(),$async$$1)
case 3:case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:539}
C.e1z.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.beH(this.b)},
$S:0}
C.e1R.prototype={
$1(d){return d.as},
$S:z+1}
C.e1S.prototype={
$1(d){var w=this
return new A.e0(new C.e1Q(w.a,w.b,w.c,w.d,w.e),null)},
$S:20}
C.e1Q.prototype={
$2(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.c.a,i=j?B.e9:B.c,h=A.m(26),g=A.L(B.bQ.j(0.5),B.r,1.5),f=A.q(k,D.bT9,B.f,k,k,new A.p(B.bQ.j(0.18),k,k,k,k,k,B.a7),k,42,k,k,k,k,k,42),e=A.d("Tree display settings",k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.as,k,k,k,k,k,k,k,k,18,k,k,B.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),d=l.b,a0=d.d
a0===$&&A.c()
w=x.p
a0=A.E(A.x(A.a([e,A.d(a0.b,k,1,B.a2,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,12.5,k,k,B.V,k,k,!0,k,k,k,k,k,k,k,k),k,k,k)],w),B.E,k,B.e,B.i,0,B.p),1)
f=A.A(A.a([f,B.bd,a0,A.aG(k,k,k,k,A.X(B.cz,j?B.bu:B.bq,k,k,k,k),k,k,k,new C.e1K(a1),k,k,k,k,k,k)],w),B.m,k,B.e,B.i,0,k,k)
e=A.d("CHILDREN SHOWN UNDER EACH PARENT",k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,11,k,k,B.u,k,k,!0,k,1,k,k,k,k,k,k),k,k,k)
a0=A.a([],w)
for(v=l.d,u=v.length,t=l.a,s=0;s<v.length;v.length===u||(0,A.J)(v),++s){r=v[s]
q=t.a===r?B.bQ:B.bQ.j(0.1)
p=new A.aO(20,20)
o=t.a===r
n=new A.ay(B.bQ,o?2:1,B.r,-1)
m=r===0?"Show all":""+r
o=o?B.c:B.bQ
a0.push(A.aA(k,A.cT(k,A.d(m,k,k,k,k,k,k,new A.G(!0,o,k,k,k,k,14,B.u,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k),k,k,B.b3,new A.p(q,k,new A.bH(n,n,n,n),new A.bf(p,p,p,p),k,k,B.n),B.h_,k,k,k,k,B.Cc,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e1L(t,a2,r),k,k,k,k,k,k,!1,B.a4))}a0=A.bW(B.bH,a0,B.bt,k,8,8)
v=t.a
v=v===0?"Every child shows in the tree.":"Only "+v+' children show under a parent. The rest wait in a "+ more" dropdown.'
f=A.a([D.c43,new A.D(D.bDt,f,k),new A.D(D.bDk,e,k),new A.D(B.rP,a0,k),new A.D(X.amg,A.d(v,k,k,k,k,k,k,A.l(k,k,j?B.bu:B.bq,k,k,k,k,k,k,k,k,12.5,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),k)],w)
e=l.e
if(e>0){a0=A.X(Ag.aoR,j?B.bu:B.bq,k,k,k,20)
v=e===1?"person":"people"
f.push(new A.D(D.bDm,A.A(A.a([a0,B.au,A.E(A.d(""+e+" hidden "+v,k,k,k,k,k,k,A.l(k,k,j?B.aQ:B.as,k,k,k,k,k,k,k,k,k,k,k,B.H,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),1),A.b8R(k,B.bQ,k,k,!1,B.y,k,k,k,k,k,k,new C.e1M(d,a2),k,k,k,k,k,k,k,k,d.f)],w),B.m,k,B.e,B.i,0,k,k),k))}f.push(B.aB)
j=A.m(20)
e=A.a([new A.ac(0,B.G,B.aE.j(0.35),B.j7,12)],x.V)
f.push(A.aA(k,A.q(k,A.A(A.a([D.fCy,B.bd,D.bHN,D.bTP],w),B.m,k,B.e,B.i,0,k,k),B.f,k,k,new A.p(k,k,k,j,e,D.c7I,B.n),k,k,k,B.hU,B.bE,k,k,k),B.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.e1N(t,a1),k,k,k,k,k,k,!1,B.a4))
f.push(new A.D(B.yJ,A.A(A.a([A.E(A.dU(B.dl,new C.e1O(a1),k),1),B.au,A.E(A.bI(M.aWV,k,new C.e1P(t,a1),A.bp(B.bQ,k,k,k,k,k,B.co,k,k,k,k,k)),1)],w),B.m,k,B.e,B.i,0,k,k),k))
return A.bn(!0,A.q(k,A.cg(A.x(f,B.E,k,B.e,B.Q,0,B.p),B.t,k,B.y,k,k,k,k,B.ah),B.aq,k,k,new A.p(i,k,g,h,k,k,B.n),k,k,k,B.yy,k,k,k,k),!0,!1,B.ag,!0,!0)},
$S:87}
C.e1K.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e1L.prototype={
$0(){return this.b.$1(new C.e1J(this.a,this.c))},
$S:0}
C.e1J.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.e1M.prototype={
$1(d){var w=this.a
w.m(new C.e1H(w,d))
this.b.$1(new C.e1I())},
$S:9}
C.e1H.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e1I.prototype={
$0(){},
$S:0}
C.e1N.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHp(!0,w))
return null},
$S:0}
C.e1O.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e1P.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(new A.aHp(!1,w))
return null},
$S:0}
C.e1T.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOe(this.b.b)
w.r.a8(0)},
$S:0}
C.e1a.prototype={
$1(d){var w,v,u,t=this.a,s=t.d
s===$&&A.c()
s=C.aiO(s)
w=t.d
t=t.a
v=t.c
u=t.d
return C.htq(t.e,this.b,null,t.f,t.r,null,s,"Add Member",w,u,v)},
$S:z+18}
C.e1b.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.f,x.P)
w.push(this.b)
v.d=u.aFI(w)},
$S:0}
C.e22.prototype={
$1(d){var w=this.a.d
w===$&&A.c()
return new C.ae8(this.b,w,this.c,null)},
$S:z+39}
C.e1X.prototype={
$1(d){var w=null,v=this.a.a,u=v?B.e9:B.c,t=A.m(20),s=A.X(B.lN,B.aY,w,w,w,36),r=A.d("Almost there",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.as,w,w,w,w,w,w,w,w,w,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),B.K,w,w),q=this.b,p=q?"To remove a shared family tree from this phone, first create your own family tree in NGMY.":"To remove a shared family tree, you also need an active Family Tree photo pass.",o=x.p
p=A.a([A.d(p,w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,14,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o)
if(this.c&&!q)B.d.v(p,A.a([B.af,A.d("Photo access lets you upload member photos on trees you create. You can get it from any member profile when adding a photo.",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,12,w,w,w,w,1.4,!0,w,w,w,w,w,w,w,w),B.K,w,w)],o))
v=A.x(p,B.m,w,B.e,B.Q,0,B.p)
return A.eg(A.a([A.bI(D.fUg,w,new C.e1W(d),A.bp(B.aY,w,w,w,w,w,w,w,w,w,w,w))],o),B.ba,w,u,v,w,s,w,new A.b9(t,B.a1),r,w)},
$S:18}
C.e1W.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e1c.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.e1d.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.e1e.prototype={
$1(d){return d.a},
$S:z+8}
C.e1f.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.a,k=l.d
k===$&&A.c()
w=A.a([],x.u)
for(v=m.b,u=v.length,t=m.c.a,s=m.d,r=0;r<v.length;v.length===u||(0,A.J)(v),++r){q=v[r]
p=q.a
if(p!==t){o=q.d
if(o===t)o=s
n=q.e
if(n===t)n=null
w.push(new C.hT(p,q.b,q.c,o,n,q.f,q.r,q.w,q.x,q.y,q.z,q.Q,q.as,q.at))}}l.d=k.aFI(w)},
$S:0}
C.e1j.prototype={
$1(d){var w,v,u,t,s=this.a,r=this.b,q=s.d
q===$&&A.c()
q=C.aiO(q)
w=A.U(q).k("Y<1>")
q=A.C(new A.Y(q,new C.e1h(r),w),w.k("M.E"))
w=s.d
v=s.a
u=v.c
t=v.d
return C.htq(v.e,null,r,v.f,v.r,new C.e1i(s,r),q,"Member Profile",w,t,u)},
$S:z+18}
C.e1i.prototype={
$0(){return this.a.aaX(this.b)},
$S:0}
C.e1h.prototype={
$1(d){return d.a!==this.a.a},
$S:z+1}
C.e1k.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.f
v=A.U(w).k("N<1,hT>")
w=A.C(new A.N(w,new C.e1g(this.b),v),v.k("ak.E"))
u.d=t.aFI(w)},
$S:0}
C.e1g.prototype={
$1(d){var w=this.a
return d.a===w.a?w:d},
$S:z+41}
C.e21.prototype={
$0(){var w=this.a
return w.d=w.e.pop()},
$S:0}
C.e1w.prototype={
$1(d){return d.length!==0},
$S:3}
C.e1x.prototype={
$1(d){var w=this
return new A.e0(new C.e1v(w.a,w.b,w.c,w.d),null)},
$S:20}
C.e1v.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u.a,s=t?B.e9:B.c,r=A.d("Collaborators",v,v,v,v,v,v,A.l(v,v,t?B.aQ:B.as,v,v,v,v,v,v,v,v,v,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),q=x.p,p=A.a([A.d("Invited users can edit this tree and add members. QR/file recipients stay view-only.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bq,v,v,v,v,v,v,v,v,12,v,v,v,v,1.35,!0,v,v,v,v,v,v,v,v),v,v,v),B.af],q),o=w.c
if(o.length===0)p.push(A.d("No collaborators yet.",v,v,v,v,v,v,A.l(v,v,t?B.bu:B.bq,v,v,v,v,v,v,v,v,13,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v))
else B.d.v(p,new A.N(o,new C.e1r(u,e,o),A.U(o).k("N<1,v>")))
p.push(B.U)
u=w.d
p.push(A.aM(v,B.Z,!1,v,!0,B.t,v,A.aN(),u,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(12),B.dn),v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"friend@email.com",v,v,v,v,v,v,v,v,"Invite by email",!0,!0,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v),B.y,!0,v,!0,v,!1,v,B.ak,v,v,v,v,v,B.my,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,B.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,B.a5,v,B.ao,v,v,v,v))
p=A.x(p,B.al,v,B.e,B.Q,0,B.p)
t=w.a
return A.eg(A.a([A.bM(!1,B.dl,v,v,!0,v,v,v,new C.e1s(d),v,v),A.bI(B.KT,v,new C.e1t(t,u,o,e),A.bp(B.bQ,v,v,v,v,v,v,v,v,v,v,v)),A.bI(D.fGZ,v,new C.e1u(t,u,o,d),A.bp(B.aY,v,v,v,v,v,v,v,v,v,v,v))],q),v,v,s,new A.a5(360,v,p,v),v,v,v,v,r,v)},
$S:198}
C.e1r.prototype={
$1(d){var w=null
return A.dG(!1,B.ag,w,w,!0,w,w,w,!0,w,w,w,w,w,w,w,w,!1,w,w,w,w,w,w,w,A.d(d,w,w,w,w,w,w,A.l(w,w,this.a.a?B.aQ:B.as,w,w,w,w,w,w,w,w,w,w,w,B.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,A.aG(w,w,w,w,D.c0T,w,w,w,new C.e1q(this.b,this.c,d),w,w,w,w,w,w),w)},
$S:1969}
C.e1q.prototype={
$0(){return this.a.$1(new C.e1o(this.b,this.c))},
$S:0}
C.e1o.prototype={
$0(){return B.d.W(this.a,this.b)},
$S:0}
C.e1s.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.e1t.prototype={
$0(){var w=this,v=w.b,u=B.a.i(v.a.a.toLowerCase())
if(u.length!==0&&!B.d.q(w.c,u)&&u!==B.a.i(w.a.a.c.toLowerCase())){w.d.$1(new C.e1p(w.c,u))
v.bP(0,B.cd)}},
$S:0}
C.e1p.prototype={
$0(){return this.a.push(this.b)},
$S:0}
C.e1u.prototype={
$0(){var w=this,v=B.a.i(w.b.a.a.toLowerCase())
if(v.length!==0&&!B.d.q(w.c,v)&&v!==B.a.i(w.a.a.c.toLowerCase()))w.c.push(v)
A.a6(w.d,!1).O(!0)},
$S:0}
C.e1y.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
w.d=v.cOT(this.b,D.uy,C.Hg(v,w.a.c))},
$S:0}
C.e29.prototype={
$1(d){return d.as},
$S:z+1}
C.e2a.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j_(this.b,w)},
$S:0}
C.e2b.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
v=C.iqD(v)
return w.Wy(v==null?null:v.a)},
$S:0}
C.e2c.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.d
k===$&&A.c()
w=l.r
v=C.i1p(k,w,l.f)
u=v.d+32
t=v.e+32
k=v.a
if(k.gcm(k)){k=A.aS(1/0,e.a,e.b)
s=A.aS(1/0,e.c,e.d)
l.cw6(new A.av(u,t),v.gbln(),new A.av(k,s))}k=A.m(22)
s=this.b.a
r=s?D.d0A:D.cZO
q=A.L(s?B.dr:D.bj7,B.r,1)
p=A.m(22)
o=A.bR(0,A.b4(m,m,m,new C.bfu(s,m),B.az),0,0,0)
n=Math.max(e.b,e.d)
return A.q(m,A.by(p,new A.an(B.a0,m,B.ad,B.t,A.a([o,A.bR(0,A.uW(new A.R(n,n,n,n),new A.a5(u,t,new C.bgp(l.d,v,l.f,w,new C.e25(l),l.gcfW(),m),m),!1,3,0.2,!0,!0,l.w),0,0,0),A.ap(10,new C.byb(s,new C.e26(l,e),new C.e27(l,e),new C.e28(l,e,u,t,v),m),m,m,m,10,m,m)],x.p),m),B.aq),B.f,m,m,new A.p(m,m,q,k,m,new A.a9(B.b7,B.b9,B.x,r,m,m),B.n),m,m,m,A_.alp,m,m,m,m)},
$S:228}
C.e25.prototype={
$1(d){var w=this.a
w.m(new C.e23(w,d))},
$S:2}
C.e23.prototype={
$0(){var w=this.a.r,v=this.b
if(w.q(0,v))w.W(0,v)
else w.J(0,v)},
$S:0}
C.e26.prototype={
$0(){var w=this.b
return this.a.bcR(1.25,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e27.prototype={
$0(){var w=this.b
return this.a.bcR(0.8,new A.av(A.aS(1/0,w.a,w.b),A.aS(1/0,w.c,w.d)))},
$S:0}
C.e28.prototype={
$0(){var w=this,v=w.b
return w.a.aVd(new A.av(A.aS(1/0,v.a,v.b),A.aS(1/0,v.c,v.d)),new A.av(w.c,w.d),w.e.gbln())},
$S:0}
C.e2d.prototype={
$0(){var w=this.a
return w.m(new C.e24(w))},
$S:0}
C.e24.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.e1l.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t,s
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
s=t.d
s===$&&A.c()
w=2
return A.b(A.fG(new A.fA(s.c)),$async$$0)
case 2:t.ys("Tree code copied.")
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.dgu.prototype={
$1(d){var w=null,v=d.b,u=v.a,t=v.b
v=this.a
return A.ap(w,new C.bke(u,C.hEp(v.c,u),new C.dgt(v,u),w),w,w,t.a-42,w,t.b,w)},
$S:z+42}
C.dgt.prototype={
$0(){return this.a.w.$1(this.b)},
$S:0}
C.dgv.prototype={
$1(d){var w=null,v=d.b,u=this.a
return A.ap(w,new C.bnx(d.d,d.c,u.f.q(0,d.a),new C.dgs(u,d),u.w,w),w,w,v.a-42,w,v.b,w)},
$S:z+43}
C.dgs.prototype={
$0(){return this.a.r.$1(this.b.a)},
$S:0}
C.fG9.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nz(new A.cM(new A.Y(v,new C.fGa(d),w.k("Y<1>")),new C.fGb(),w.k("cM<1,n>")))},
$S:z+19}
C.fGa.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fGb.prototype={
$1(d){return d.a},
$S:z+8}
C.fG7.prototype={
$1(d){return d.d===this.a.a&&d.a!==this.b},
$S:z+1}
C.fG8.prototype={
$1(d){return d.b},
$S:z+8}
C.fGe.prototype={
$1(d){var w,v=d.e
if(this.a.al(0,v))return v
v=this.b
w=A.U(v)
return A.nz(new A.cM(new A.Y(v,new C.fGf(d),w.k("Y<1>")),new C.fGg(),w.k("cM<1,n>")))},
$S:z+19}
C.fGf.prototype={
$1(d){return d.e===this.a.a},
$S:z+1}
C.fGg.prototype={
$1(d){return d.a},
$S:z+8}
C.fGc.prototype={
$1(d){var w,v=A.ez([d.a],x.N),u=this.a,t=d,s=0
for(;;){w=t.d
if(!(w!=null&&u.al(0,w)&&v.J(0,w)))break
w=u.h(0,w)
w.toString;++s
t=w}return s},
$S:z+45}
C.fGd.prototype={
$1(d){return this.a.h(0,d.a)===this.b},
$S:z+1}
C.dgx.prototype={
$0(){return this.a},
$S:z+46}
C.dgO.prototype={
$1(d){return d!=null&&d.length!==0&&this.a.al(0,d)},
$S:257}
C.dgG.prototype={
$2(d,e){var w=this.a.c3(0,d,new C.dgH()),v=J.a7(w)
if(!v.q(w,e))v.J(w,e)},
$S:118}
C.dgH.prototype={
$0(){return A.a([],x.s)},
$S:754}
C.dgF.prototype={
$2(d,e){var w=this.a.h(0,d)
w=w==null?null:J.eG(w,e)
return w===!0},
$S:307}
C.dgy.prototype={
$0(){return A.a([],x.u)},
$S:z+16}
C.dgE.prototype={
$1(d){var w=d.d
return this.a.$1(w)&&w!==d.a},
$S:z+1}
C.dgD.prototype={
$2(d,e){var w,v,u,t,s=this
if(!e.J(0,d))return 0
w=s.a
v=w.h(0,d)
v=J.aU(v==null?D.Dt:v)
u=1
while(v.C())u+=s.$2(v.gR(v).a,e)
v=s.b.h(0,d)
v=J.aU(v==null?B.Z:v)
while(v.C()){t=v.gR(v)
if(e.q(0,t))continue
e.J(0,t)
t=w.h(0,t)
t=J.aU(t==null?D.Dt:t)
while(t.C())u+=s.$2(t.gR(t).a,e)}return u},
$S:1971}
C.dgz.prototype={
$1(d){return!this.a.$1(d)},
$S:z+1}
C.dgI.prototype={
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
t=J.aU(t==null?D.Dt:t)
while(t.C()){r=t.gR(t)
if(r.a!==a9&&!B.d.aV(w,new C.dgJ(r)))w.push(r)}}B.d.bt(w,new C.dgK(a8))
B.d.aZ(w,new C.dgL())
q=C.i1o(a7.r,v,w,a7.w)
p=u?95:42
o=A.a([],x.d4)
n=A.a([],x.eU)
for(w=q.c,v=w.length,u=b0+1,m=0;m<w.length;w.length===v||(0,A.J)(w),++m){t=w[m].a
if(a8.q(0,t))continue
o.push(t)
n.push(a7.$2(t,u))}if(q.a){o.push(null)
n.push(A.a([D.eSU],x.G))}a8=A.a([],x.s)
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
else a8.n(0,a9,new A.bqE(a3,w))
i=n[a2]
for(f=0;f<i.length;){u=i[f]
a5=a3+u.a
a6=a3+u.b;++f
if(f<a1.length){u=a1[f]
a1[f]=new A.y(Math.min(u.a,a5),Math.max(u.b,a6))}else a1.push(new A.y(a5,a6))}}return a1},
$S:1972}
C.dgJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.dgK.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
C.dgL.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.dgM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=o.a.$2(d,e),m=o.b
if(m.length!==0){for(w=J.a7(n),v=o.c,u=-1/0,t=0;t<w.gI(n);++t){s=v.h(0,e+t)
if(s==null)continue
u=Math.max(u,s+88-w.h(n,t).a)}if(u===-1/0)u=new A.b8(v,A.a4(v).k("b8<2>")).cJ(0,0,B.pZ)+88-w.gH(n).a}else u=0
for(w=J.a7(n),v=o.c,t=0;t<w.gI(n);++t){r=w.h(n,t)
q=e+t
p=v.h(0,q)
if(p==null)p=-1/0
v.n(0,q,Math.max(p,u+r.b))}m.push(d)
o.d.n(0,d,u)},
$S:666}
C.dgN.prototype={
$1(d){return 16+d*156},
$S:171}
C.dgw.prototype={
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
t.n(0,d,new C.Gz(r,new A.o(e-53,v)))
s=s.h(0,u)
s.toString
t.n(0,u,new C.Gz(s,new A.o(e+53,v)))}else{s=s.h(0,d)
s.toString
t.n(0,d,new C.Gz(s,new A.o(e,v)))}t=o.r.h(0,d)
t=J.aU(t==null?B.Z:t)
s=o.w
while(t.C()){r=t.gR(t)
q=s.h(0,r)
o.$2(r,e+(q==null?0:q))}p=o.x.h(0,d)
if(p!=null){t=p.a
w=w.$1(n+1)
s=p.b
o.y.push(new C.KS(d,new A.o(e+t,w),s,s.length))}},
$S:186}
C.dgA.prototype={
$2(d,e){var w=this.b,v=w.h(0,d).b
w=w.h(0,e).b
this.a.push(new C.aKw(new A.o(v.a,v.b+28),new A.o(w.a,w.b+28),!0,null))},
$S:118}
C.dgB.prototype={
$1(d){return d.a===this.a},
$S:z+47}
C.dgC.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:755}
C.dgP.prototype={
$2(d,e){return B.j.aS(d.a,e.a)},
$S:755}
C.dgQ.prototype={
$1(d){return Math.abs(d.a-this.a.a)<0.5},
$S:369}
C.dgR.prototype={
$1(d){return Math.abs(d.a-this.a.a)},
$S:189}
C.dgS.prototype={
$1(d){return d>=0.5},
$S:119}
C.flM.prototype={
$3(d,e,f){var w=null,v=A.m(10)
return A.hb(A.aP(!1,v,!0,new A.a5(38,38,A.X(d,this.a.c?B.c:B.cu,w,w,w,20),w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),w,e,w,w)},
$S:1974}
C.eWV.prototype={
$1(d){var w=null,v=A.m(8),u=B.bQ.j(0.12),t=A.m(8)
return new A.D(B.mW,A.aP(!1,v,!0,A.q(w,A.d("#"+d.Q+" "+d.b,w,4,w,w,w,w,D.fsj,B.K,w,w),B.f,w,w,new A.p(u,w,w,t,w,w,B.n),w,w,w,w,B.Of,w,w,1/0),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWU(this.a,d),w,w,w,w,w,w,w),w)},
$S:z+48}
C.eWU.prototype={
$0(){return this.a.r.$1(this.b)},
$S:0}
C.dwI.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.dwH.prototype={
$1(d){var w=null,v=A.m(18),u=this.a
u=A.d("Delete "+(u.length===0?"this member":u)+"?",w,w,w,w,w,w,B.nV,B.K,w,w)
return A.eg(A.a([A.bM(!1,B.dl,w,w,!0,w,w,w,new C.dwF(d),w,w),A.bM(!1,A.d("Delete",w,w,w,w,w,w,A.l(w,w,B.mM,w,w,w,w,w,w,w,w,w,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,!0,w,w,w,new C.dwG(d),w,w)],x.p),B.ba,B.C9,w,u,D.bEn,w,D.bGk,new A.b9(v,B.a1),w,w)},
$S:18}
C.dwF.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.dwG.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.dwR.prototype={
$1(d){var w=this.a.a.d
w=w==null?null:w.a
return d.a!==w},
$S:z+1}
C.dwS.prototype={
$1(d){var w=this.a
return w.m(new C.dwQ(w,d))},
$S:z+49}
C.dwQ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.dwT.prototype={
$1(d){var w=null
return A.qG(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dwW.prototype={
$1(d){var w=this.a
return w.m(new C.dwP(w,d))},
$S:35}
C.dwP.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.dwV.prototype={
$1(d){var w=null
return A.qG(A.d(d.b,w,w,w,w,w,w,w,w,w,w),d.a,x.T)},
$S:z+20}
C.dwX.prototype={
$1(d){var w=this.a
return w.m(new C.dwO(w,d))},
$S:35}
C.dwO.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.dwY.prototype={
$0(){var w=this.a
return w.m(new C.dwN(w))},
$S:0}
C.dwN.prototype={
$0(){var w=this.a
return w.at=Math.max(1,w.at-1)},
$S:0}
C.dwZ.prototype={
$0(){var w=this.a
return w.m(new C.dwM(w))},
$S:0}
C.dwM.prototype={
$0(){return++this.a.at},
$S:0}
C.dx_.prototype={
$0(){var w=this.a
return w.m(new C.dwL(w))},
$S:0}
C.dwL.prototype={
$0(){return--this.a.ax},
$S:0}
C.dx0.prototype={
$0(){var w=this.a
return w.m(new C.dwK(w))},
$S:0}
C.dwK.prototype={
$0(){return++this.a.ax},
$S:0}
C.dx1.prototype={
$1(d){var w=this.a
return w.m(new C.dwJ(w,d))},
$S:9}
C.dwJ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.dwU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.dx2.prototype={
$3(d,e,f){var w,v,u,t,s,r=null,q=this.a,p=q.d===d,o=A.m(12)
if(p)w=B.bQ.j(0.18)
else w=q.c.a?B.e9:B.c
v=A.m(12)
if(p)u=B.bQ
else u=(q.c.a?B.ef:B.bP).j(0.85)
u=A.L(u,B.r,p?1.5:1)
if(p)t=B.bQ
else t=q.c.a?B.bu:B.bq
t=A.X(f,t,r,r,r,18)
if(p)s=B.bQ
else s=q.c.a?B.bu:B.bq
return A.E(A.aJ(!1,B.a3,!0,r,A.aP(!1,o,!0,A.cT(r,A.x(A.a([t,B.ax,A.d(e,r,r,r,r,r,r,A.l(r,r,s,r,r,r,r,r,r,r,r,11,r,r,B.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),B.m,r,B.e,B.i,0,B.p),r,r,B.b3,new A.p(w,r,u,v,r,r,B.n),B.eG,r,r,r,r,B.jZ,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,new C.dx3(q,d),r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj),1)},
$S:z+51}
C.dx3.prototype={
$0(){return this.a.e.$1(this.b)},
$S:0}
C.dxc.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cez.prototype={
$2(d,e){return new A.bB(B.a.i(J.k(d).toLowerCase()),J.k(e),x.fK)},
$S:92}
C.ceG.prototype={
$1(d){return d.aj()},
$S:z+5}
C.ceH.prototype={
$2(d,e){var w=J.b7(e,new C.ceF(),x.a)
w=A.C(w,w.$ti.k("ak.E"))
return new A.bB(d,w,x.d2)},
$S:z+53}
C.ceF.prototype={
$1(d){return d.aj()},
$S:z+12}
C.ceB.prototype={
$1(d){return C.alY(A.a3(d,x.N,x.z))},
$S:z+9}
C.ceC.prototype={
$1(d){return d.a.length!==0},
$S:z+3}
C.ceD.prototype={
$1(d){return C.hkf(A.a3(d,x.N,x.z))},
$S:z+11}
C.ceE.prototype={
$1(d){return d.a.length!==0},
$S:z+4}
C.ceL.prototype={
$1(d){return new A.aHB(d.f.length,d.a,d.b)},
$S:z+55}
C.ceM.prototype={
$2(d,e){return B.a.aS(d.c,e.c)},
$S:573}
C.ceI.prototype={
$1(d){return d.a===B.a.i(this.a)},
$S:z+3}
C.ceJ.prototype={
$1(d){return d.cNR(C.Hg(d,this.a))},
$S:z+85}
C.e2m.prototype={
$1(d){return C.ut(d,this.a.a.c)},
$S:z+3}
C.e2n.prototype={
$0(){var w=this.a
w.d=this.b
w.e=this.c},
$S:0}
C.e2r.prototype={
$0(){var w=this.a
w.r=!0
w.f=this.b},
$S:0}
C.e2s.prototype={
$0(){var w=this.a
w.r=!1
w.f=null},
$S:0}
C.e2j.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b10(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z0("No family trees to export yet.")
w=1
break}r=s.a
w=4
return A.b(A.pt(r.c,r.e),$async$$0)
case 4:s.z0(p)
w=5
return A.b(s.K3(),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2k.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b10(r.d,q,r.e,t.b),$async$$0)
case 3:p=e
if(s.c==null){w=1
break}if(p==null){s.z0("Could not export this tree.")
w=1
break}r=s.a
w=4
return A.b(A.pt(r.c,r.e),$async$$0)
case 4:s.z0(p)
case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2l.prototype={
$0(){var w=0,v=A.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=r.a
n=o.a
m=n.c
w=7
return A.b(C.Wg(n.d,m,n.e,r.b),$async$$0)
case 7:q=e
if(o.c==null){w=1
break}if(q==null){o.z0("No family trees found in that backup.")
w=1
break}o.a.w.$0()
if(q.c)o.z0("Restored "+q.a+" members on this phone (view only). Creator cloud data was not duplicated.")
else{n=q.a
m=q.b
l=q.b===1?"":"s"
o.z0("Restored "+n+" members across "+m+" tree"+l+".")}w=8
return A.b(o.K3(),$async$$0)
case 8:t=2
w=6
break
case 4:t=3
j=s.pop()
p=A.ab(j)
o=r.a
if(o.c==null){w=1
break}o.z0(B.a.em(J.k(p),"StateError: ",""))
w=6
break
case 3:w=2
break
case 6:case 1:return A.h(u,v)
case 2:return A.f(s.at(-1),v)}})
return A.i($async$$0,v)},
$S:1}
C.e2q.prototype={
$0(){var w=0,v=A.j(x.H),u,t=this,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.a
q=r.c
w=3
return A.b(C.b1_(r.d,q,r.e,r.f),$async$$0)
case 3:p=e
r=s.c
if(r==null){w=1
break}if(p==null){s.z0("No family trees to share yet, or cloud is unavailable.")
w=1
break}w=4
return A.b(A.a6(r,!1).cd(A.eb(new C.e2p(s,p),!0,null,x.H)),$async$$0)
case 4:s=s.a
w=5
return A.b(A.pt(s.c,s.e),$async$$0)
case 5:case 1:return A.h(u,v)}})
return A.i($async$$0,v)},
$S:1}
C.e2p.prototype={
$1(d){var w=this.b
return new C.a0p(this.a.a.c,w.b,w.a,w.c,null)},
$S:z+57}
C.e2o.prototype={
$1(d){return D.hvR},
$S:z+58}
C.e2u.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2v.prototype={
$1(d){var w=this.a
w=w.r?null:new C.e2t(w,d)
return new A.D(B.d3,new C.bgt(this.b,d.c,d.a,w,null),null)},
$S:1975}
C.e2t.prototype={
$0(){return this.a.Yn(this.b.b)},
$S:0}
C.e2e.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.e2f.prototype={
$0(){return this.a.d=!0},
$S:0}
C.e2g.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e2h.prototype={
$0(){return this.a.d=!1},
$S:0}
C.e2i.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.e2w.prototype={
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
$S:199}
C.dOP.prototype={
$1(d){return d.a===this.a.a.c},
$S:z+59}
C.dOQ.prototype={
$0(){return B.d.gH(D.a64)},
$S:z+60}
C.dOR.prototype={
$2(d,e){var w=null,v=this.a,u=v.a.c,t=v.d
t===$&&A.c()
t=t.x
t===$&&A.c()
v=v.e
v===$&&A.c()
v=v.x
v===$&&A.c()
return A.b4(A.at(A.X(this.b.d,B.c.j(0.95),w,w,D.d7n,44),w,w,w),w,w,new C.bll(u,t,v,w),B.az)},
$S:59}
C.fWW.prototype={
$1(d){return A.pd(new C.fWV(this.a,d),!1,0.72,0.92,0.45,!1,null)},
$S:133}
C.fWV.prototype={
$2(d,e){var w,v,u,t=null,s=this.a,r=s.a,q=r?B.e9:B.c,p=A.a([new A.ac(0,B.G,B.w.j(r?0.35:0.08),B.tj,24)],x.V),o=r?B.ef:B.bP
o=A.q(t,t,B.f,t,t,new A.p(o,t,t,A.m(99),t,t,B.n),t,4,t,t,t,t,t,40)
w=A.a([B.aY.j(0.25),B.bQ.j(0.18)],x.O)
w=A.q(t,D.bWc,B.f,t,t,new A.p(t,t,t,A.m(12),t,new A.a9(B.a6,B.aa,B.x,w,t,t),B.n),t,40,t,t,t,t,t,40)
v=A.d("Choose a theme",t,t,t,t,t,t,A.l(t,t,r?B.aQ:B.as,t,t,t,t,t,t,t,t,17,t,t,B.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)
u=x.p
return A.q(t,A.x(A.a([B.X,o,new A.D(E.aml,A.A(A.a([w,B.bd,A.E(A.x(A.a([v,A.d("Animated thumbnails for construction, grocery, and more.",t,t,t,t,t,t,A.l(t,t,r?B.bu:B.bq,t,t,t,t,t,t,t,t,12,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],u),B.E,t,B.e,B.i,0,B.p),1)],u),B.m,t,B.e,B.i,0,t,t),t),A.E(A.im(!0,t,e,B.y,D.feS,new C.fWU(this.b,s),20,B.alV,t,B.ah,!1),1)],u),B.m,t,B.e,B.i,0,B.p),B.f,t,t,new A.p(q,t,t,B.l6,p,t,B.n),t,t,t,t,t,t,t,t)},
$S:116}
C.fWU.prototype={
$2(d,e){var w=null,v=D.a64[e],u=A.m(16),t=A.m(16),s=this.b.a,r=A.L(s?B.ef:B.bP,B.r,1),q=A.a([new A.ac(0,B.G,B.w.j(s?0.35:0.08),B.er,8)],x.V),p=A.m(15),o=A.E(new C.a7b(v.a,!0,w),1),n=s?B.jS:B.jj,m=A.d(v.b,w,1,B.a2,w,w,w,A.l(w,w,s?B.aQ:B.as,w,w,w,w,w,w,w,w,13,w,w,B.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),l=x.p
return A.aJ(!1,B.a3,!0,w,A.aP(!1,u,!0,A.eJ(A.by(p,A.x(A.a([o,A.q(w,A.x(A.a([m,A.d(v.c,w,1,B.a2,w,w,w,A.l(w,w,s?B.bu:B.bq,w,w,w,w,w,w,w,w,10,w,w,B.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],l),B.E,w,B.e,B.i,0,B.p),B.f,n,w,w,w,w,w,w,B.k_,w,w,w)],l),B.al,w,B.e,B.i,0,B.p),B.aq),w,new A.p(w,w,r,t,q,w,B.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fWT(this.a,v),w,w,w,w,w,w,w),B.f,B.L,0,w,w,w,w,w,B.aj)},
$S:79}
C.fWT.prototype={
$0(){A.a6(this.a,!1).O("ngmy:thumb:"+this.b.a)
return null},
$S:0}
C.co3.prototype={
$0(){return this.a.ahb(this.b)},
$S:0}
C.fWj.prototype={
$1(d){return D.hqG},
$S:z+61}
C.h2R.prototype={
$1(d){var w=this
return new C.a2c(w.a,w.b,w.c,w.d,null)},
$S:z+62}
C.fWn.prototype={
$1(d){return new C.a_3(this.a,null)},
$S:z+63}
C.fWm.prototype={
$1(d){return D.hrH},
$S:z+64}
C.d83.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d84.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.d82(w,d))},
$S:35}
C.d82.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.d85.prototype={
$1(d){return this.a.KH()},
$S:2}
C.d86.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8_.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.d80.prototype={
$1(d){return this.a.KH()},
$S:2}
C.d81.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGq.prototype={
$0(){},
$S:0}
C.cGw.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.cGx.prototype={
$0(){return this.a.aQy(-1)},
$S:0}
C.cGy.prototype={
$1(d){return this.a.m(new C.cGv())},
$S:2}
C.cGv.prototype={
$0(){},
$S:0}
C.cGz.prototype={
$0(){return this.a.aQy(1)},
$S:0}
C.cGA.prototype={
$1(d){return this.a.m(new C.cGu())},
$S:2}
C.cGu.prototype={
$0(){},
$S:0}
C.cGB.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.w===d,r=d==="other"?"Other":d
r=A.d(r,u,u,u,u,u,u,A.l(u,u,u,u,u,u,u,u,u,u,u,11,u,u,B.V,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)
w=B.aY.j(0.2)
if(s)v=B.aY
else v=this.b.a?B.ef:B.bP
return A.uP(u,u,B.b1,r,u,new C.cGt(t,d),B.wl,s,w,u,new A.ay(v,1,B.r,-1),B.ce)},
$S:1976}
C.cGt.prototype={
$1(d){var w=this.a
return w.m(new C.cGr(w,this.b))},
$S:9}
C.cGr.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cGC.prototype={
$1(d){return this.a.m(new C.cGs())},
$S:2}
C.cGs.prototype={
$0(){},
$S:0}
C.cGD.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.flh.prototype={
$1(d){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length!==0)A.a6(this.b,!1).O(w)},
$S:2}
C.fli.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.flj.prototype={
$0(){var w,v=this.a.d
v===$&&A.c()
w=B.a.i(v.a.a)
if(w.length===0)return
A.a6(this.b,!1).O(w)},
$S:0}
C.flf.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=this.a,p=q.d
p===$&&A.c()
p=p.x
p===$&&A.c()
w=q.a
v=w.d
u=w.f
t=q.gbCE()
w=w.e
s=A.m(B.o.E(v-1,0,v))
return A.b4(new A.D(D.bGj,new A.em(A.q(r,q.a.c,B.f,r,r,new A.p(r,r,r,s,r,r,B.n),r,r,r,r,w,r,r,r),r),r),new C.by0(p,v,this.b.a,u,t,r),r,r,B.az)},
$S:59}
C.flg.prototype={
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
s=A.ar(B.aY,B.bQ,w)
s.toString
s=A.a([B.b1,s,B.aY],x.O)
return A.aJ(!1,B.a3,!0,p,A.aP(!1,v,!0,A.eJ(D.eqG,r,new A.p(r,r,A.L(B.c.j(0.4),B.r,1.5),u,r,new A.a9(new A.d9(-1.2+t,-0.5),new A.d9(1.2-t,0.8),B.x,s,r,r),B.n),r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r),B.f,B.L,0,r,r,r,r,r,B.aj)},
$S:142}
C.fUH.prototype={
$1(d){return A.w(d.h(0,1))+","},
$S:60}
C.eU4.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eTW.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eTX.prototype={
$0(){return this.a.e=!1},
$S:0}
C.eU2.prototype={
$1(d){var w={},v=this.a.d
v===$&&A.c()
w.a=v.c
return new A.e0(new C.eU1(w,this.b),null)},
$S:20}
C.eU1.prototype={
$2(d,e){var w=null,v=this.b.a,u=v?B.e9:B.c,t=A.m(20),s=A.d("Project thumbnail",w,w,w,w,w,w,A.l(w,w,v?B.aQ:B.as,w,w,w,w,w,w,w,w,17,w,w,B.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),r=this.a,q=x.p
return A.eN(w,u,new A.D(B.ame,A.x(A.a([s,B.an,A.d("Tap circle for themes \xb7 tap frame for gallery",w,w,w,w,w,w,A.l(w,w,v?B.bu:B.bq,w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.af,C.hqf(new C.eTZ(r,e),r.a),B.aB,A.A(A.a([A.E(A.dU(B.dl,new C.eU_(d),w),1),B.au,A.E(A.bI(B.VR,w,new C.eU0(r,d),A.bp(B.aY,w,w,w,w,w,w,w,w,w,w,w)),1)],q),B.m,w,B.e,B.i,0,w,w)],q),B.al,w,B.e,B.Q,0,B.p),w),w,w,w,w,B.d7,w,new A.b9(t,B.a1),w)},
$S:101}
C.eTZ.prototype={
$1(d){return this.b.$1(new C.eTY(this.a,d))},
$S:35}
C.eTY.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.eU_.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eU0.prototype={
$0(){var w=this.a.a
A.a6(this.b,!1).O(w)
return null},
$S:0}
C.eU3.prototype={
$0(){var w=this.a,v=w.d
v===$&&A.c()
return w.d=v.Tw(this.b)},
$S:0}
C.eTR.prototype={
$0(){var w,v=this.a,u=v.d
u===$&&A.c()
w=A.C(u.d,x.Q)
w.push(this.b)
v.d=u.beN(w)},
$S:0}
C.eTV.prototype={
$1(d){return this.bo3(d)},
bo3(d){var w=0,v=A.j(x.H),u,t=this,s
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:s=t.a
w=3
return A.b(C.M3(s.a.c,d),$async$$1)
case 3:s=s.c
if(s.e==null){w=1
break}A.j_(s,d)
case 1:return A.h(u,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eTU.prototype={
$0(){var w,v,u=this.a,t=u.d
t===$&&A.c()
w=t.d
v=A.U(w).k("Y<1>")
w=A.C(new A.Y(w,new C.eTT(this.b),v),v.k("M.E"))
u.d=t.beN(w)},
$S:0}
C.eTT.prototype={
$1(d){return d.a!==this.a.a},
$S:z+22}
C.eU5.prototype={
$0(){var w=this.a.d
w===$&&A.c()
return A.j_(this.b,w)},
$S:0}
C.eU6.prototype={
$1(d){return this.a.bGO(d,this.b)},
$S:z+67}
C.eTS.prototype={
$0(){return this.a.aaW(this.b)},
$S:0}
C.h2E.prototype={
$1(d){return new C.aet(this.a,this.b,this.c,null)},
$S:z+68}
C.eU8.prototype={
$0(){return this.a.a0a(this.b)},
$S:0}
C.eU9.prototype={
$0(){return this.a.QJ(this.b)},
$S:0}
C.eUa.prototype={
$0(){return this.a.EV(this.b)},
$S:0}
C.eUb.prototype={
$0(){return this.a.a0b(this.b)},
$S:0}
C.eU7.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eTM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eTN.prototype={
$0(){return this.a.e="Could not create QR. Check your connection and try again."},
$S:0}
C.eTO.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
C.eTQ.prototype={
$0(){var w=0,v=A.j(x.H),u=this,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(t.d.qs(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eTP(t))
return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eTP.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.eUy.prototype={
$2(d,e){return d+e.gxE()},
$S:z+71}
C.eUu.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eUv.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eUf.prototype={
$1(d){var w,v=null,u=this.a.a,t=u?B.e9:B.c,s=A.m(24),r=A.q(v,D.bWF,B.f,v,v,new A.p(B.ay.j(u?0.18:0.08),v,A.L(B.ay.j(0.28),B.r,1),v,v,v,B.a7),v,64,v,v,v,v,v,64),q=A.d("Clear all projects?",v,v,v,v,v,v,A.l(v,v,u?B.aQ:B.as,v,v,v,v,v,v,v,v,18,v,v,B.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),p=A.d("This permanently removes every worksheet project on this device. This cannot be undone.",v,v,v,v,v,v,A.l(v,v,u?B.bu:B.bq,v,v,v,v,v,v,v,v,13,v,v,v,v,1.4,!0,v,v,v,v,v,v,v,v),B.K,v,v),o=u?B.aQ:B.as
u=u?B.ef:B.bP
w=x.p
return A.eN(v,t,new A.D(B.yL,A.x(A.a([r,B.aR,q,B.U,p,B.d8,A.A(A.a([A.E(A.dU(B.nX,new C.eUd(d),A.di(v,v,v,v,v,v,v,v,v,o,v,v,B.ff,v,new A.b9(A.m(14),B.a1),new A.ay(u,1,B.r,-1),v,v,v,v)),1),B.au,A.E(A.bI(D.fY8,v,new C.eUe(d),A.bp(B.ay,v,v,v,v,v,B.ff,v,new A.b9(A.m(14),B.a1),v,v,v)),1)],w),B.m,v,B.e,B.i,0,v,v)],w),B.m,v,B.e,B.Q,0,B.p),v),v,v,v,v,B.d7,v,new A.b9(s,B.a1),v)},
$S:48}
C.eUd.prototype={
$0(){A.a6(this.a,!1).O(!1)
return null},
$S:0}
C.eUe.prototype={
$0(){A.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eUo.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.b,k=l.a,j=k?B.e9:B.c,i=A.m(28),h=A.a([new A.ac(0,B.G,B.w.j(k?0.35:0.08),B.h2,28)],x.V),g=k?D.dex:B.a5p,f=x.p
g=A.q(m,A.x(A.a([A.q(m,m,B.f,m,m,new A.p(B.c.j(0.45),m,m,A.m(99),m,m,B.n),m,4,m,m,m,m,m,40),B.aB,D.f7X,B.ax,new A.bL(B.a6,m,m,A.d("Move worksheet projects between phones",m,m,m,m,m,m,A.l(m,m,B.c.j(0.82),m,m,m,m,m,m,m,m,12,m,m,B.cC,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m)],f),B.m,m,B.e,B.i,0,B.p),B.f,m,m,new A.p(m,m,m,m,m,new A.a9(B.aA,B.aF,B.x,g,m,m),B.n),m,m,m,m,E.ami,m,m,1/0)
w=A.d("IMPORT PROJECT",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bq,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
v=this.a
u=A.A(A.a([A.E(v.b7H(B.b8,B.jo,new C.eUl(v,d),l,"Camera import","Scan QR"),1),B.au,A.E(v.b7H(B.cy,S.zm,new C.eUm(v,d),l,".json backup","Upload file"),1)],f),B.m,m,B.e,B.i,0,m,m)
t=A.d("DANGER ZONE",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bq,m,m,m,m,m,m,m,m,11,m,m,B.H,m,m,!0,m,1.1,m,m,m,m,m,m),m,m,m)
s=A.m(16)
r=B.ay.j(k?0.14:0.06)
q=A.m(16)
p=A.L(B.ay.j(0.28),B.r,1)
o=A.q(m,D.bW0,B.f,m,m,new A.p(B.ay.j(0.12),m,m,A.m(12),m,m,B.n),m,m,m,m,B.bV,m,m,m)
n=A.d("Clear all projects",m,m,m,m,m,m,A.l(m,m,k?B.aQ:B.as,m,m,m,m,m,m,m,m,m,m,m,B.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)
n=A.E(A.x(A.a([n,A.d("Remove every project on this device",m,m,m,m,m,m,A.l(m,m,k?B.bu:B.bq,m,m,m,m,m,m,m,m,12,m,m,m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],f),B.E,m,B.e,B.i,0,B.p),1)
return A.bn(!0,new A.D(B.wg,A.q(m,A.x(A.a([g,new A.D(B.amf,A.x(A.a([w,B.X,u,B.bz,t,B.X,A.aJ(!1,B.a3,!0,m,A.aP(!1,s,!0,A.q(m,A.A(A.a([o,B.bd,n,A.X(B.eI,k?B.bu:B.bq,m,m,m,m)],f),B.m,m,B.e,B.i,0,m,m),B.f,m,m,new A.p(r,m,p,q,m,m,B.n),m,m,m,m,B.bE,m,m,1/0),m,!0,m,m,m,m,m,m,m,m,m,m,m,new C.eUn(v,d,l),m,m,m,m,m,m,m),B.f,B.L,0,m,m,m,m,m,B.aj)],f),B.E,m,B.e,B.i,0,B.p),m)],f),B.m,m,B.e,B.Q,0,B.p),B.aq,m,m,new A.p(j,m,m,i,h,m,B.n),m,m,m,m,m,m,m,m),m),!0,!1,B.ag,!0,!0)},
$S:27}
C.eUl.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w2("scan"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUm.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.w2("file"),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUn.prototype={
$0(){var w=0,v=A.j(x.H),u=this
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,v)
for(;;)switch(w){case 0:A.a6(u.b,!1).O(null)
w=2
return A.b(u.a.On(u.c),$async$$0)
case 2:return A.h(null,v)}})
return A.i($async$$0,v)},
$S:1}
C.eUj.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=this.b,o=p.a,n=o?B.e9:B.c,m=A.m(24),l=A.a([new A.ac(0,B.G,B.w.j(o?0.35:0.08),B.eZ,24)],x.V),k=o?B.ef:B.bP
k=A.q(q,q,B.f,q,q,new A.p(k,q,q,A.m(99),q,q,B.n),q,4,q,q,q,q,q,40)
w=A.m(12)
v=this.c
u=o?B.bu:B.bq
u=A.by(w,new A.a5(48,48,C.aRY(!0,A.m(12),48,Q.OV,u,v.c,48),q),B.aq)
w=A.d(v.b,q,1,B.a2,q,q,q,A.l(q,q,o?B.aQ:B.as,q,q,q,q,q,q,q,q,16,q,q,B.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=v.d.length
v=A.Bn(v.gxE())
s=x.p
r=this.a
return A.bn(!0,new A.D(B.wg,A.q(q,A.x(A.a([B.X,k,new A.D(D.amc,A.A(A.a([u,B.bd,A.E(A.x(A.a([w,A.d(""+t+" items \xb7 "+v,q,q,q,q,q,q,A.l(q,q,o?B.bu:B.bq,q,q,q,q,q,q,q,q,12,q,q,B.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),B.E,q,B.e,B.i,0,B.p),1)],s),B.m,q,B.e,B.i,0,q,q),q),B.C0,r.cqb(B.uT,B.aY,new C.eUh(d),p,"QR code or backup file","Transfer project"),r.b4I(!0,B.eg,B.ay,new C.eUi(d),p,"Remove from this device","Delete project"),B.X],s),B.m,q,B.e,B.Q,0,B.p),B.f,q,q,new A.p(n,q,q,m,l,q,B.n),q,q,q,q,q,q,q,q),q),!0,!1,B.ag,!0,!0)},
$S:27}
C.eUh.prototype={
$0(){A.a6(this.a,!1).O("transfer")
return null},
$S:0}
C.eUi.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
C.eUk.prototype={
$1(d){return this.bo4(d)},
bo4(d){var w=0,v=A.j(x.H),u=this,t
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return A.b(C.M3(t.a.c,d),$async$$1)
case 2:w=3
return A.b(t.wh(),$async$$1)
case 3:return A.h(null,v)}})
return A.i($async$$1,v)},
$S:z+21}
C.eUB.prototype={
$0(){var w=this.a
w.a.bv()
w.m(new C.eUA(w))},
$S:0}
C.eUA.prototype={
$0(){return this.a.r++},
$S:0}
C.eUC.prototype={
$0(){var w=this.a
return w.m(new C.eUz(w))},
$S:0}
C.eUz.prototype={
$0(){return this.a.r++},
$S:0}
C.eUc.prototype={
$0(){var w=this.a.c
w.toString
return A.j_(w,null)},
$S:0}
C.eUg.prototype={
$0(){return this.a.cjs(this.b)},
$S:0}
C.eUx.prototype={
$0(){var w=this.a
return w.m(new C.eUw(w,this.b))},
$S:0}
C.eUw.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eUr.prototype={
$0(){return this.a.w2("scan")},
$S:0}
C.eUs.prototype={
$0(){return this.a.w2("file")},
$S:0}
C.eUt.prototype={
$1(d){return this.a.cqc(d,this.b)},
$S:z+72}
C.eUq.prototype={
$0(){return this.a.EZ(this.b)},
$S:0}
C.eUp.prototype={
$0(){return this.a.a0G(this.b,this.c)},
$S:0}
C.cFL.prototype={
$2(d,e){return d+e.c*e.d},
$S:z+73}
C.cFK.prototype={
$1(d){return d.aj()},
$S:z+74}
C.cFI.prototype={
$1(d){return C.hKv(A.a3(d,x.N,x.z))},
$S:z+75}
C.cFJ.prototype={
$1(d){return d.a.length!==0},
$S:z+22}
C.fF2.prototype={
$1(d){return d.y===D.kV},
$S:z+3}
C.h3q.prototype={
$1(d){return C.aQG(d,this.a)},
$S:z+3}
C.fCG.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.bSj.prototype={
$1(d){return!d.as},
$S:z+1}
C.bSi.prototype={
$1(d){return d.aj()},
$S:z+23}
C.bSf.prototype={
$1(d){return C.hkh(A.a3(d,x.N,x.z))},
$S:z+24}
C.bSg.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.bSh.prototype={
$1(d){return J.k(d)},
$S:17}
C.ft5.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.foQ.prototype={
$1(d){return C.ha0(A.a3(d,x.N,x.z))},
$S:z+79}
C.foR.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+10}
C.foS.prototype={
$2(d,e){return e.e.aS(0,d.e)},
$S:z+25}
C.fW7.prototype={
$1(d){return J.k(d)},
$S:17}
C.fW8.prototype={
$1(d){return d.a},
$S:z+81}
C.fW9.prototype={
$1(d){return d.length!==0},
$S:3}
C.fWa.prototype={
$1(d){return B.d.q(this.a,d.a)},
$S:z+10}
C.fWb.prototype={
$1(d){return d.Tw(null).aj()},
$S:z+82}
C.h3o.prototype={
$1(d){return d.a===this.a.a},
$S:z+10}
C.fFw.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fIG.prototype={
$1(d){return C.alY(A.a3(d,x.N,x.z))},
$S:z+9}
C.fIH.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fII.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fIJ.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fIK.prototype={
$1(d){return C.ut(d,this.a)},
$S:z+3}
C.fVV.prototype={
$1(d){return C.ut(d,this.a)},
$S:z+3}
C.h3j.prototype={
$1(d){return C.alY(A.a3(d,x.N,x.z))},
$S:z+9}
C.h3k.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.h3l.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fFd.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.fFe.prototype={
$1(d){return d.a===this.a},
$S:z+3}
C.h3u.prototype={
$1(d){return!d.as},
$S:z+1}
C.fEI.prototype={
$1(d){return d.a===this.a},
$S:z+1}
C.fEJ.prototype={
$1(d){var w,v=this.a
if(d.d!==v)return!1
w=this.b
if(w!=null)if(w.e===d.a||d.e===v)return!1
return!0},
$S:z+1}
C.fEK.prototype={
$2(d,e){return B.o.aS(d.Q,e.Q)},
$S:z+7}
C.h2S.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
C.fJv.prototype={
$1(d){return d.Q},
$S:z+15}
C.fVO.prototype={
$1(d){var w=d.d
return w==null||w.length===0},
$S:z+1}
C.fID.prototype={
$1(d){return C.alY(A.a3(d,x.N,x.z))},
$S:z+9}
C.fIE.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fIF.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fVJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+3}
C.fpq.prototype={
$1(d){return d.length!==0},
$S:3}
C.fpr.prototype={
$1(d){return C.hkh(A.a3(d,x.N,x.z))},
$S:z+24}
C.fps.prototype={
$1(d){return d.a.length!==0},
$S:z+1}
C.fpt.prototype={
$1(d){return B.a.i(J.k(d).toLowerCase())},
$S:17}
C.fpu.prototype={
$1(d){return d.length!==0},
$S:3}
C.fpH.prototype={
$2(d,e){return d.eM(new C.fpI(e))},
$S:1977}
C.fpI.prototype={
$1(d){$.am.$1("[family_trees] "+this.a+" fetch: "+A.w(d))
return B.cc},
$S:1978}
C.fpE.prototype={
$1(d){return C.i6s(d,this.a)},
$S:z+84}
C.fpF.prototype={
$1(d){return d.a.length!==0&&d.b.length!==0},
$S:z+3}
C.fpG.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.ftN.prototype={
$1(d){return d.a},
$S:z+56}
C.ftO.prototype={
$1(d){return d.length!==0},
$S:3}
C.ftP.prototype={
$2(d,e){return e.r.aS(0,d.r)},
$S:z+6}
C.fwG.prototype={
$1(d){return d.aj()},
$S:z+5}
C.fBW.prototype={
$1(d){return C.hvO(d,C.Hg(d,this.a))},
$S:z+5}
C.fBX.prototype={
$1(d){return C.hvP(d,C.Hg(d,this.a))},
$S:z+5};(function aliases(){var w=C.aBp.prototype
w.bvU=w.t
w=C.azD.prototype
w.bvP=w.t
w=C.aGP.prototype
w.bwh=w.t
w=C.aBq.prototype
w.bvV=w.t
w=C.aBs.prototype
w.bvW=w.t
w=C.aBt.prototype
w.bvX=w.t
w=C.aMY.prototype
w.byL=w.t
w=C.aP3.prototype
w.bB3=w.t
w=C.aP4.prototype
w.bB4=w.t})();(function installTearOffs(){var w=a._instance_1u,v=a._instance_0u,u=a._instance_0i,t=a.installInstanceTearOff,s=a._static_1
w(C.aEp.prototype,"gcn6","cn7",28)
var r
w(r=C.aBo.prototype,"gcg1","cg2",65)
v(r,"gaOK","NV",0)
v(r,"gcvs","Bm",0)
v(r,"gbOy","OB",0)
v(r,"gcJQ","z1",0)
v(r,"gcp9","a1n",0)
v(r,"gbJY","Oj",0)
v(r,"gbOY","XP",0)
w(r,"gbU0","bU1",78)
v(r,"gbEj","Al",0)
v(C.aBr.prototype,"gcJM","FR",0)
v(r=C.alN.prototype,"gbsf","bsg",2)
v(r,"gbs7","bs8",2)
v(r,"gcKV","cKW",2)
u(r,"gql","kN",0)
u(r=C.ak_.prototype,"geY","fX",2)
w(r,"gcbF","cbG",27)
u(C.auI.prototype,"gql","kN",0)
v(r=C.ayF.prototype,"gcWt","cWu",2)
u(r,"gql","kN",0)
u(C.aKB.prototype,"gbsd","bse",2)
v(C.alW.prototype,"gBQ","cL7",2)
u(r=C.alU.prototype,"gcLO","cLP",2)
u(r,"gql","kN",0)
v(r=C.alQ.prototype,"gbr5","br6",2)
v(r,"gcR_","cR0",2)
u(r=C.alS.prototype,"geY","fX",2)
u(r,"giv","cKr",2)
v(r=C.alO.prototype,"gcKg","cKh",2)
u(r,"gbpY","jH",2)
v(r=C.aEY.prototype,"gagO","wi",0)
v(r,"gciI","a0x",0)
v(r,"gaSW","Iq",0)
v(r=C.aEV.prototype,"gcFK","a3v",0)
v(r,"gagO","wi",0)
v(r,"gctt","a21",0)
v(r,"gciD","b2X",2)
v(r,"gcjF","a0L",0)
w(r,"gcfW","cfX",35)
v(r,"gbOQ","Iv",0)
v(r,"gcGP","cGQ",2)
v(r,"gc5Q","Zw",0)
w(r,"gceq","cer",36)
v(r,"gcir","cis",2)
v(r=C.aDo.prototype,"gcbL","Qg",0)
v(r,"gcbN","cbO",2)
v(r,"gbLs","aay",0)
v(r=C.aEX.prototype,"gbSr","Yj",0)
v(r,"gc1Y","YZ",0)
v(r,"gczS","a2T",0)
v(r,"gcw1","a2u",0)
v(C.aEW.prototype,"gcvL","aiC",0)
v(C.atU.prototype,"gceo","a08",0)
v(C.aA8.prototype,"ga3e","KH",2)
v(C.aA7.prototype,"ga3e","KH",2)
v(C.ayS.prototype,"ga3e","KH",2)
v(r=C.aGq.prototype,"gb46","Rf",0)
v(r,"gbD7","Ws",0)
v(r,"gcjt","cju",2)
w(C.aGp.prototype,"gcfg","cfh",69)
t(C.aGr.prototype,"gaSR",0,0,null,["$1","$0"],["Ip","bMK"],70,0,0)
s(C,"hDt","igz",23)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(A.aE,[C.apv,C.uM,C.nv,C.Io,C.afE,C.KL,C.uN,C.bSP,C.tc,C.boP,C.am4,C.adM,C.lr,C.bRq,C.au5,C.zB,C.akG,C.MJ,C.bai,C.a9R,C.bhy,C.afL,C.azS,C.afz,C.aKB,C.KS,C.Gz,C.bgr,C.aKw,C.aqP,C.dgT,C.lV,C.aUX,C.aUW,C.aSX,C.ug,C.rm,C.lC,C.hT,C.kT,C.aIu])
u(A.ht,[C.fNi,C.fNh,C.fNj,C.fWP,C.fAA,C.fAB,C.fAG,C.fL1,C.fL0,C.fL_,C.c7z,C.fXl,C.fXd,C.fXp,C.fFl,C.dPv,C.dPq,C.dPr,C.dP3,C.dP_,C.dPK,C.dPL,C.dPE,C.dPF,C.dPM,C.dPN,C.fG5,C.fIA,C.fIB,C.fVT,C.h3i,C.fFc,C.fWt,C.dg5,C.dfs,C.dfB,C.dfS,C.dfx,C.dfD,C.dfu,C.dfH,C.dfI,C.dfG,C.dfX,C.dfW,C.dhT,C.dhU,C.dhV,C.dgj,C.dgo,C.dgn,C.cOJ,C.cOL,C.d7h,C.d7G,C.d7H,C.d7K,C.d7M,C.d7N,C.d7O,C.d7Q,C.d7R,C.bRa,C.bR4,C.ftu,C.h3b,C.h3c,C.h3d,C.h38,C.h3e,C.h3f,C.h3g,C.h37,C.fGH,C.fUU,C.fCH,C.fJu,C.bMe,C.h3A,C.fVp,C.bKq,C.bKl,C.bKn,C.bKm,C.cpK,C.cpF,C.cpG,C.cpE,C.cpC,C.cpH,C.cPN,C.cEK,C.cEN,C.cEL,C.cEO,C.cEP,C.f62,C.fgb,C.bRX,C.bRR,C.bRV,C.bRy,C.e0V,C.e0S,C.e0T,C.e0R,C.e0X,C.bRP,C.bRF,C.bRp,C.bRo,C.bRk,C.bRl,C.bRm,C.bRn,C.e2A,C.e2_,C.e1V,C.e1m,C.e1C,C.e1F,C.e1B,C.e1A,C.e1R,C.e1S,C.e1M,C.e1a,C.e22,C.e1X,C.e1c,C.e1d,C.e1e,C.e1j,C.e1h,C.e1g,C.e1w,C.e1x,C.e1r,C.e29,C.e25,C.dgu,C.dgv,C.fG9,C.fGa,C.fGb,C.fG7,C.fG8,C.fGe,C.fGf,C.fGg,C.fGc,C.fGd,C.dgO,C.dgE,C.dgz,C.dgJ,C.dgK,C.dgN,C.dgB,C.dgQ,C.dgR,C.dgS,C.flM,C.eWV,C.dwH,C.dwR,C.dwS,C.dwT,C.dwW,C.dwV,C.dwX,C.dx1,C.dx2,C.ceG,C.ceF,C.ceB,C.ceC,C.ceD,C.ceE,C.ceL,C.ceI,C.ceJ,C.e2m,C.e2p,C.e2o,C.e2v,C.e2w,C.dOP,C.fWW,C.fWj,C.h2R,C.fWn,C.fWm,C.d84,C.d85,C.d80,C.cGy,C.cGA,C.cGB,C.cGt,C.cGC,C.flh,C.fUH,C.eU2,C.eTZ,C.eTV,C.eTT,C.eU6,C.h2E,C.eUf,C.eUo,C.eUj,C.eUk,C.eUt,C.cFK,C.cFI,C.cFJ,C.fF2,C.h3q,C.fCG,C.bSj,C.bSi,C.bSf,C.bSg,C.bSh,C.foQ,C.foR,C.fW7,C.fW8,C.fW9,C.fWa,C.fWb,C.h3o,C.fFw,C.fIG,C.fIH,C.fIJ,C.fIK,C.fVV,C.h3j,C.h3k,C.h3l,C.fFd,C.fFe,C.h3u,C.fEI,C.fEJ,C.h2S,C.fJv,C.fVO,C.fID,C.fIE,C.fVJ,C.fpq,C.fpr,C.fps,C.fpt,C.fpu,C.fpI,C.fpE,C.fpF,C.ftN,C.ftO,C.fwG,C.fBW,C.fBX])
u(A.ax,[C.b_w,C.alL,C.aWg,C.ZJ,C.bc3,C.QD,C.a6p,C.tE,C.Iq,C.bgp,C.bke,C.byb,C.bnx,C.ae7,C.bkd,C.ae6,C.bkc,C.aDp,C.aJy,C.ae8,C.Gv,C.bgq,C.adn,C.bgo,C.bgt,C.b_u,C.atU,C.aet])
u(A.mk,[C.bcH,C.bdV,C.bdM,C.aIp,C.bjf,C.boO,C.aWl,C.bcJ,C.aBn,C.bcc,C.bsQ,C.bjn,C.biO,C.biV,C.bgs,C.bfu,C.bll,C.by0])
u(A.iJ,[C.fXi,C.fXj,C.fXk,C.fXb,C.fXc,C.fXn,C.fXo,C.dPH,C.dPt,C.dPw,C.dPa,C.dPb,C.dPc,C.dP9,C.dPh,C.dP8,C.dPi,C.dPj,C.dP7,C.dPk,C.dP6,C.dPl,C.dP5,C.dPm,C.dOY,C.dOZ,C.dP4,C.dPn,C.dP2,C.dPo,C.dP1,C.dPd,C.dP0,C.dPe,C.dOX,C.dPf,C.dPg,C.dPI,C.dPJ,C.dPx,C.dPy,C.dPz,C.dPA,C.dPB,C.dPC,C.dPD,C.dPP,C.dPG,C.fG6,C.dfq,C.dfo,C.dfp,C.dfr,C.dg4,C.dfU,C.dfR,C.dft,C.dfV,C.dfz,C.dfA,C.dfC,C.dfT,C.dfy,C.dfE,C.dg1,C.dfO,C.dfN,C.dfP,C.dfQ,C.dfJ,C.dfL,C.dfM,C.dfF,C.dfY,C.dg0,C.dfv,C.dfw,C.dhS,C.dhR,C.dhQ,C.dhP,C.dhW,C.dhO,C.dhX,C.dgk,C.dgl,C.dgm,C.dgp,C.dgi,C.dgh,C.cOK,C.d7g,C.d7t,C.d7s,C.d7I,C.d7r,C.d7J,C.d7q,C.d7p,C.d7L,C.d7o,C.d7B,C.d7A,C.d7S,C.bR3,C.bRd,C.bR5,C.bR6,C.bR9,C.bR8,C.bRb,C.bRc,C.bR7,C.bR1,C.bR2,C.bSH,C.bSI,C.bSJ,C.bSK,C.bSL,C.bSM,C.bSN,C.h3a,C.fUV,C.bKp,C.bKk,C.bKi,C.bKj,C.bKh,C.cpM,C.cpN,C.cpL,C.cpO,C.cpQ,C.cpR,C.cpS,C.cpI,C.cEJ,C.cES,C.cET,C.cEU,C.cER,C.cEV,C.cEW,C.cEX,C.cEY,C.cEM,C.cEQ,C.bSc,C.bSb,C.bS9,C.bS7,C.bS8,C.bS4,C.bS5,C.bS6,C.bSa,C.bS3,C.f63,C.f64,C.f65,C.f66,C.f67,C.bS0,C.bS1,C.bS2,C.bRW,C.bRY,C.bRZ,C.bS_,C.bRS,C.bRC,C.bRB,C.bRA,C.bRu,C.bRv,C.bRz,C.bRw,C.bRx,C.bRt,C.e0U,C.e0W,C.e0P,C.e0Q,C.e0O,C.e0Y,C.e0Z,C.e1_,C.e12,C.e13,C.e14,C.e15,C.e16,C.e17,C.e18,C.e19,C.e10,C.e11,C.bRO,C.bRN,C.bRE,C.bRD,C.bRK,C.bRL,C.bRH,C.bRI,C.bRJ,C.bRG,C.bRe,C.bRf,C.bRj,C.bRi,C.bRh,C.bRg,C.e2z,C.e2y,C.e2B,C.e2C,C.e2D,C.e2x,C.e2F,C.e2E,C.e1Y,C.e1Z,C.e20,C.e1n,C.e1E,C.e1D,C.e1G,C.e1U,C.e1z,C.e1K,C.e1L,C.e1J,C.e1H,C.e1I,C.e1N,C.e1O,C.e1P,C.e1T,C.e1b,C.e1W,C.e1f,C.e1i,C.e1k,C.e21,C.e1q,C.e1o,C.e1s,C.e1t,C.e1p,C.e1u,C.e1y,C.e2a,C.e2b,C.e23,C.e26,C.e27,C.e28,C.e2d,C.e24,C.e1l,C.dgt,C.dgs,C.dgx,C.dgH,C.dgy,C.eWU,C.dwI,C.dwF,C.dwG,C.dwQ,C.dwP,C.dwO,C.dwY,C.dwN,C.dwZ,C.dwM,C.dx_,C.dwL,C.dx0,C.dwK,C.dwJ,C.dwU,C.dx3,C.dxc,C.e2n,C.e2r,C.e2s,C.e2j,C.e2k,C.e2l,C.e2q,C.e2u,C.e2t,C.e2e,C.e2f,C.e2g,C.e2h,C.e2i,C.dOQ,C.fWT,C.co3,C.d83,C.d82,C.d86,C.d8_,C.d81,C.cGq,C.cGw,C.cGx,C.cGv,C.cGz,C.cGu,C.cGr,C.cGs,C.cGD,C.fli,C.flj,C.eU4,C.eTW,C.eTX,C.eTY,C.eU_,C.eU0,C.eU3,C.eTR,C.eTU,C.eU5,C.eTS,C.eU8,C.eU9,C.eUa,C.eUb,C.eU7,C.eTM,C.eTN,C.eTO,C.eTQ,C.eTP,C.eUu,C.eUv,C.eUd,C.eUe,C.eUl,C.eUm,C.eUn,C.eUh,C.eUi,C.eUB,C.eUA,C.eUC,C.eUz,C.eUc,C.eUg,C.eUx,C.eUw,C.eUr,C.eUs,C.eUq,C.eUp])
u(A.af,[C.apH,C.TT,C.a_r,C.a_v,C.a_t,C.a_1,C.alM,C.ajZ,C.auH,C.ayE,C.alV,C.alT,C.alP,C.Wd,C.alR,C.TU,C.aqS,C.aqM,C.a05,C.aqQ,C.a0p,C.a0q,C.a7b,C.a_3,C.a_2,C.ZA,C.a2c,C.Gj,C.ayL,C.atT,C.atN,C.atS,C.OW])
u(A.ah,[C.aEp,C.bgj,C.aBo,C.bgI,C.aBr,C.bdT,C.aBp,C.azD,C.aGP,C.ayF,C.aBt,C.aBs,C.aBq,C.blF,C.alS,C.alO,C.aEY,C.aEV,C.aDo,C.aEX,C.aEW,C.blG,C.aMY,C.aA8,C.aA7,C.ayS,C.by3,C.aP3,C.aP4,C.aGq,C.bn2,C.aGp,C.bzP])
u(A.jw,[C.dPs,C.dPu,C.dPp,C.dPO,C.fIC,C.bR0,C.dg3,C.dg2,C.dfK,C.dfZ,C.dg_,C.dgq,C.bSO,C.bSG,C.bRr,C.bRs,C.h39,C.h3z,C.bKo,C.cpP,C.cpJ,C.cpD,C.f68,C.bRQ,C.bRT,C.bRU,C.dr2,C.bRM,C.e1Q,C.e1v,C.e2c,C.dgG,C.dgF,C.dgD,C.dgI,C.dgL,C.dgM,C.dgw,C.dgA,C.dgC,C.dgP,C.cez,C.ceH,C.ceM,C.dOR,C.fWV,C.fWU,C.flf,C.flg,C.eU1,C.eUy,C.cFL,C.ft5,C.foS,C.fII,C.fEK,C.fIF,C.fpH,C.fpG,C.ftP])
u(A.lD,[C.a1I,C.afN,C.a20,C.a_T,C.acq,C.aLi,C.Ip,C.alX,C.cFM,C.cFN])
t(C.alN,C.aBp)
t(C.ak_,C.azD)
t(C.auI,C.aGP)
t(C.bgn,C.aBt)
t(C.alW,C.bgn)
t(C.bgm,C.aBs)
t(C.alU,C.bgm)
t(C.bgl,C.aBq)
t(C.alQ,C.bgl)
t(C.blm,C.aMY)
t(C.by1,C.aP3)
t(C.by2,C.aP4)
t(C.aGr,C.bzP)
t(C.bav,A.baj)
t(C.by4,A.a6R)
t(C.bau,C.by4)
w(C.aBp,A.cc)
w(C.azD,A.cc)
w(C.aGP,A.eQ)
w(C.aBq,A.cc)
v(C.bgl,C.afz)
w(C.aBs,A.cc)
v(C.bgm,C.afz)
w(C.aBt,A.cc)
v(C.bgn,C.afz)
w(C.aMY,A.eQ)
w(C.aP3,A.cc)
w(C.aP4,A.cc)
v(C.bzP,A.eC)
v(C.by4,A.jf)})()
A.iT(b.typeUniverse,JSON.parse('{"b_w":{"ax":[],"v":[]},"bcH":{"aC":[]},"apH":{"af":[],"v":[]},"aEp":{"ah":["apH"]},"TT":{"af":[],"v":[]},"alL":{"ax":[],"v":[]},"aWg":{"ax":[],"v":[]},"bgj":{"ah":["TT"]},"a_r":{"af":[],"v":[]},"a_v":{"af":[],"v":[]},"a_t":{"af":[],"v":[]},"a_1":{"af":[],"v":[]},"aBo":{"ah":["a_r"]},"bgI":{"ah":["a_v"]},"aBr":{"ah":["a_t"]},"ZJ":{"ax":[],"v":[]},"bdV":{"aC":[]},"bdM":{"aC":[]},"bdT":{"ah":["a_1"]},"aIp":{"aC":[]},"bjf":{"aC":[]},"bc3":{"ax":[],"v":[]},"alM":{"af":[],"v":[]},"alN":{"ah":["alM"]},"boO":{"aC":[]},"aWl":{"aC":[]},"ajZ":{"af":[],"v":[]},"auH":{"af":[],"v":[]},"ayE":{"af":[],"v":[]},"ak_":{"ah":["ajZ"]},"bcJ":{"aC":[]},"QD":{"ax":[],"v":[]},"aBn":{"aC":[]},"auI":{"ah":["auH"]},"bcc":{"aC":[]},"ayF":{"ah":["ayE"]},"alV":{"af":[],"v":[]},"alT":{"af":[],"v":[]},"alP":{"af":[],"v":[]},"alW":{"ah":["alV"]},"bsQ":{"aC":[]},"alU":{"ah":["alT"]},"bjn":{"aC":[]},"alQ":{"ah":["alP"]},"biO":{"aC":[]},"Wd":{"af":[],"v":[]},"alR":{"af":[],"v":[]},"TU":{"af":[],"v":[]},"a6p":{"ax":[],"v":[]},"biV":{"aC":[]},"tE":{"ax":[],"v":[]},"Iq":{"ax":[],"v":[]},"blF":{"ah":["Wd"]},"alS":{"ah":["alR"]},"alO":{"ah":["TU"]},"aqS":{"af":[],"v":[]},"aqM":{"af":[],"v":[]},"a05":{"af":[],"v":[]},"ae8":{"ax":[],"v":[]},"aEY":{"ah":["aqS"]},"aEV":{"ah":["aqM"]},"bgp":{"ax":[],"v":[]},"bgs":{"aC":[]},"bke":{"ax":[],"v":[]},"bfu":{"aC":[]},"byb":{"ax":[],"v":[]},"bnx":{"ax":[],"v":[]},"aDo":{"ah":["a05"]},"ae7":{"ax":[],"v":[]},"bkd":{"ax":[],"v":[]},"ae6":{"ax":[],"v":[]},"bkc":{"ax":[],"v":[]},"aDp":{"ax":[],"v":[]},"aJy":{"ax":[],"v":[]},"Gv":{"ax":[],"v":[]},"aqQ":{"af":[],"v":[]},"a0p":{"af":[],"v":[]},"a0q":{"af":[],"v":[]},"aEX":{"ah":["aqQ"]},"bgq":{"ax":[],"v":[]},"adn":{"ax":[],"v":[]},"bgo":{"ax":[],"v":[]},"bgt":{"ax":[],"v":[]},"aEW":{"ah":["a0p"]},"blG":{"ah":["a0q"]},"b_u":{"ax":[],"v":[]},"a7b":{"af":[],"v":[]},"blm":{"ah":["a7b"]},"bll":{"aC":[]},"atU":{"ax":[],"v":[]},"a_3":{"af":[],"v":[]},"a_2":{"af":[],"v":[]},"ZA":{"af":[],"v":[]},"a2c":{"af":[],"v":[]},"aA8":{"ah":["a_3"]},"aA7":{"ah":["a_2"]},"ayS":{"ah":["ZA"]},"by3":{"ah":["a2c"]},"Gj":{"af":[],"v":[]},"ayL":{"af":[],"v":[]},"by1":{"ah":["Gj"]},"by2":{"ah":["ayL"]},"by0":{"aC":[]},"atT":{"af":[],"v":[]},"aGq":{"ah":["atT"]},"aet":{"ax":[],"v":[]},"atN":{"af":[],"v":[]},"atS":{"af":[],"v":[]},"bn2":{"ah":["atN"]},"aGp":{"ah":["atS"]},"OW":{"af":[],"v":[]},"aGr":{"ah":["OW"],"eC":[]},"bau":{"jf":[],"fi":[]}}'))
A.Dg(b.typeUniverse,JSON.parse('{"afz":1}'))
var y={q:'\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n',z:"AI is not available right now. Please try again later.",k:"No internet connection. Try again when you are online.",B:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',A:"The AI could not do that just now. Nothing was changed.",y:"The AI could not translate the book. Nothing was changed."}
var x=(function rtii(){var w=A.as
return{e2:w("aSX"),cq:w("mg"),Q:w("rm"),r:w("bw<n,n>"),c5:w("aUW"),dY:w("aUX"),fH:w("MJ"),de:w("akG"),dN:w("MR<F>"),gc:w("Ek<F>"),A:w("eI<n?>"),e:w("Io"),B:w("nv"),P:w("hT"),df:w("lr"),k:w("kT"),x:w("aB<~>"),U:w("O<SQ>"),V:w("O<ac>"),C:w("O<rm>"),O:w("O<u>"),c:w("O<MJ>"),b:w("O<akG>"),ac:w("O<eI<n?>>"),I:w("O<nv>"),u:w("O<hT>"),J:w("O<lr>"),_:w("O<kT>"),cl:w("O<aB<ai<a8<n,@>>>>"),R:w("O<ny>"),eU:w("O<ai<+(I,I)>>"),ez:w("O<a8<n,aE>>"),gE:w("O<a8<n,n>>"),Y:w("O<a8<n,@>>"),fD:w("O<mO>"),bp:w("O<oF>"),g:w("O<o>"),ar:w("O<au5>"),v:w("O<fT>"),gy:w("O<a9R>"),L:w("O<+(n,n)>"),G:w("O<+(I,I)>"),E:w("O<+(I,~())>"),bd:w("O<+(n,F,P)>"),bF:w("O<+count,id,name(F,n,n)>"),F:w("O<cU>"),s:w("O<n>"),cF:w("O<au>"),aS:w("O<j2>"),dT:w("O<bai>"),p:w("O<v>"),Z:w("O<fi>"),D:w("O<lC>"),h:w("O<azS>"),cC:w("O<bhy>"),fp:w("O<KL>"),M:w("O<KS>"),gZ:w("O<aIu>"),gA:w("O<afE>"),e4:w("O<afL>"),dE:w("O<aKw>"),f7:w("O<P>"),n:w("O<I>"),t:w("O<F>"),dS:w("O<aC?>"),d4:w("O<n?>"),eF:w("cw<ah<af>>"),d:w("ai<nv>"),do:w("ai<hT>"),cg:w("ai<lr>"),ax:w("ai<kT>"),fO:w("ai<a8<n,@>>"),cz:w("ai<+(n,n)>"),bC:w("ai<+count,id,name(F,n,n)>"),dy:w("ai<n>"),er:w("ai<au>"),gk:w("ai<lC>"),j:w("ai<@>"),fK:w("bB<n,n>"),d2:w("bB<n,ai<a8<n,@>>>"),a:w("a8<n,@>"),f:w("a8<@,@>"),gv:w("N<n,Ir>"),cM:w("N<F,n>"),w:w("iC"),g2:w("rK"),bV:w("apv"),fL:w("ct"),K:w("aE"),dc:w("fT"),fo:w("Ph<F>"),fz:w("+(n,n)"),ei:w("+scope,text(n,n)"),bn:w("+games,limit(P,F)"),d9:w("+dx,hidden(I,ai<hT>)"),cs:w("+count,id,name(F,n,n)"),N:w("n"),fT:w("iu<hT>"),ec:w("iu<n>"),gW:w("r2<I>"),X:w("br<I>"),bW:w("dK"),W:w("bO<n>"),b4:w("bO<F>"),cI:w("k1<n>"),av:w("Y<zB>"),cc:w("Y<n>"),l:w("v"),gF:w("fi"),fA:w("lC"),dO:w("Gz"),bw:w("ae6<n?>"),cy:w("KU"),q:w("my"),y:w("P"),i:w("I"),z:w("@"),S:w("F"),eK:w("ai<kT>?"),m:w("aqP?"),cT:w("o?"),h5:w("+(n,n)?"),eo:w("+code,qrPayload,usesRemaining(n,n,F)?"),he:w("+qrPayload,token,usesRemaining(n,n,F)?"),gG:w("+members,trees,viewOnly(F,F,P)?"),az:w("qi?"),T:w("n?"),aD:w("dK?"),o:w("lC?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b42=new A.bf(B.fI,B.bI,B.fI,B.bI)
D.adD=new A.bf(B.fI,B.ik,B.fI,B.ik)
D.b4g=new A.bf(B.iw,B.bI,B.bI,B.bI)
D.b4k=new A.ay(B.cG,1.4,B.r,-1)
D.b4u=new A.ay(B.ab,1,B.r,-1)
D.ae7=new A.aY(140,1/0,0,1/0)
D.b5T=new A.aY(0,1/0,64,1/0)
D.b5X=new A.aY(0,84,0,1/0)
D.aee=new A.aY(130,1/0,0,1/0)
D.aCq=w([B.m4,B.rE,B.c],x.O)
D.c6P=new A.a9(B.aA,B.aF,B.x,D.aCq,null,null)
D.b6H=new A.p(null,null,null,null,null,D.c6P,B.n)
D.ddX=w([B.aY,B.bQ],x.O)
D.c8U=new A.a9(B.b7,B.b9,B.x,D.ddX,null,null)
D.b71=new A.p(null,null,null,null,null,D.c8U,B.n)
D.Y5=new A.u(1,0.0784313725490196,0.0784313725490196,0.16862745098039217,B.q)
D.fw=new A.u(1,0.16470588235294117,0.08235294117647059,0.0392156862745098,B.q)
D.dhX=w([B.dx,D.Y5,D.fw],x.O)
D.c61=new A.a9(B.b7,B.b9,B.x,D.dhX,null,null)
D.b7M=new A.p(null,null,null,null,null,D.c61,B.n)
D.fpB=new A.G(!0,B.bW,null,null,null,null,34,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_E=new A.B("?",null,D.fpB,null,null,null,null,null,null,null,null,null)
D.bbp=new A.cf(B.A,null,null,D.h_E,null)
D.VJ=new A.G(!0,null,null,null,null,null,70,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fII=new A.B("\ud83c\udf33",null,D.VJ,null,null,null,null,null,null,null,null,null)
D.aeY=new A.cf(B.A,null,null,D.fII,null)
D.fLj=new A.B("\ud83c\udfc6",null,At.Ky,null,null,null,null,null,null,null,null,null)
D.bbA=new A.cf(B.A,null,null,D.fLj,null)
D.bdq=new A.fk(null,null,null,null,null,E.km,null,null,null,null)
D.af_=new A.cf(B.A,null,null,D.bdq,null)
D.kM=new A.u(1,0.984313725490196,0.9529411764705882,0.8784313725490196,B.q)
D.fq9=new A.G(!0,D.kM,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKn=new A.B("No books on the shelf yet.",null,D.fq9,null,null,null,null,null,null,null,null,null)
D.eqH=new A.D(B.nG,D.fKn,null)
D.bbQ=new A.cf(B.A,null,null,D.eqH,null)
D.fx7=new A.G(!0,D.fw,null,null,null,null,16,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0y=new A.B("\ud83d\ude8c  On the road\u2026",null,D.fx7,null,null,null,null,null,null,null,null,null)
D.erh=new A.D(B.cl,D.h0y,null)
D.bci=new A.cf(B.A,null,null,D.erh,null)
D.aWh=new A.B("\ud83e\uddfa",null,D.VJ,null,null,null,null,null,null,null,null,null)
D.bcx=new A.cf(B.A,null,null,D.aWh,null)
D.fNO=new A.B("\ud83c\udfad",null,D.VJ,null,null,null,null,null,null,null,null,null)
D.bcJ=new A.cf(B.A,null,null,D.fNO,null)
D.bcM=new A.cf(B.A,null,null,A8.XU,null)
D.afk=new A.u(1,0.8980392156862745,0.39215686274509803,0.3568627450980392,B.q)
D.afr=new A.u(1,0.08627450980392157,0.18823529411764706,0.12156862745098039,B.q)
D.bf_=new A.u(1,0.058823529411764705,0.1607843137254902,0.13333333333333333,B.q)
D.bf4=new A.u(1,0.16862745098039217,0.08627450980392157,0.03137254901960784,B.q)
D.bfg=new A.u(1,0.16862745098039217,0.14901960784313725,0.34509803921568627,B.q)
D.bfj=new A.u(1,0.7098039215686275,0.40784313725490196,0.22745098039215686,B.q)
D.bfl=new A.u(1,0.2901960784313726,0.22745098039215686,0.16470588235294117,B.q)
D.bft=new A.u(1,0.47843137254901963,0.22745098039215686,0.09411764705882353,B.q)
D.lB=new A.u(1,0.7058823529411765,0.3254901960784314,0.16470588235294117,B.q)
D.bfx=new A.u(0.6666666666666666,0,0,0.06274509803921569,B.q)
D.bfC=new A.u(1,0.12156862745098039,0.23921568627450981,0.16862745098039217,B.q)
D.bfD=new A.u(1,0.07058823529411765,0.03137254901960784,0.01568627450980392,B.q)
D.bfE=new A.u(1,0.3568627450980392,0.4823529411764706,0.6509803921568628,B.q)
D.lC=new A.u(1,0.1803921568627451,0.6078431372549019,0.30980392156862746,B.q)
D.bge=new A.u(1,0.12156862745098039,0.2,0.12549019607843137,B.q)
D.Bw=new A.u(1,0.47843137254901963,0.2901960784313726,0.1411764705882353,B.q)
D.bgn=new A.u(1,0.8862745098039215,0.7529411764705882,0.4392156862745098,B.q)
D.bgH=new A.u(1,1,0.9568627450980393,0.8235294117647058,B.q)
D.bgK=new A.u(1,1,0.7764705882352941,0.4196078431372549,B.q)
D.bgQ=new A.u(1,0.16470588235294117,0.35294117647058826,0.22745098039215686,B.q)
D.bgY=new A.u(1,0.2901960784313726,0.20784313725490197,0.1568627450980392,B.q)
D.ag2=new A.u(1,0.2901960784313726,0.24705882352941178,0.2901960784313726,B.q)
D.bh4=new A.u(1,0.30980392156862746,0.6392156862745098,0.8901960784313725,B.q)
D.Yi=new A.u(1,0.5411764705882353,0.48627450980392156,0.4,B.q)
D.ag5=new A.u(1,0.10196078431372549,0.0784313725490196,0.19607843137254902,B.q)
D.bhg=new A.u(1,0.12941176470588237,0.11764705882352941,0.2901960784313726,B.q)
D.Yk=new A.u(1,0.7490196078431373,0.9019607843137255,1,B.q)
D.bhB=new A.u(1,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.agh=new A.u(1,0.12156862745098039,0.07450980392156863,0.043137254901960784,B.q)
D.bhZ=new A.u(0.13333333333333333,0.7215686274509804,0.6901960784313725,1,B.q)
D.bie=new A.u(1,0.043137254901960784,0.043137254901960784,0.12549019607843137,B.q)
D.biC=new A.u(1,1,0.47843137254901963,0.10196078431372549,B.q)
D.biM=new A.u(1,0.48627450980392156,0.41568627450980394,0.27450980392156865,B.q)
D.FJ=new A.u(1,0.8509803921568627,0.8235294117647058,0.7529411764705882,B.q)
D.bj7=new A.u(1,0.8980392156862745,0.8627450980392157,0.7843137254901961,B.q)
D.bj9=new A.u(1,0.10196078431372549,0.16470588235294117,0.22745098039215686,B.q)
D.bjd=new A.u(1,0.23137254901960785,0.13725490196078433,0.0784313725490196,B.q)
D.agJ=new A.u(1,0.47843137254901963,0.35294117647058826,0.1803921568627451,B.q)
D.bjx=new A.u(1,0.1411764705882353,0.10588235294117647,0.24705882352941178,B.q)
D.bjD=new A.u(1,0.5411764705882353,0.35294117647058826,0.16470588235294117,B.q)
D.bjJ=new A.u(1,0.35294117647058826,0.26666666666666666,0.1411764705882353,B.q)
D.agN=new A.u(1,0.788235294117647,0.5215686274509804,0.16862745098039217,B.q)
D.bjR=new A.u(1,0.2901960784313726,0.2627450980392157,0.3137254901960784,B.q)
D.bki=new A.u(1,0.6039215686274509,0.47843137254901963,0.33725490196078434,B.q)
D.bkq=new A.u(1,0.16470588235294117,0.11372549019607843,0.10588235294117647,B.q)
D.bks=new A.u(1,0.4196078431372549,0.30980392156862746,0.2,B.q)
D.bkx=new A.u(1,0.22745098039215686,0.16862745098039217,0.3607843137254902,B.q)
D.ah2=new A.u(1,0.7215686274509804,0.7372549019607844,0.8470588235294118,B.q)
D.bl9=new A.u(0.3333333333333333,1,0.9529411764705882,0.7686274509803922,B.q)
D.ahq=new A.u(1,0.5411764705882353,0.41568627450980394,0.2823529411764706,B.q)
D.bm6=new A.u(1,0.22745098039215686,0.058823529411764705,0.06274509803921569,B.q)
D.ahD=new A.u(1,0.9137254901960784,0.8470588235294118,0.7058823529411765,B.q)
D.bmv=new A.u(1,1,0.6039215686274509,0.12156862745098039,B.q)
D.FX=new A.u(1,0.2901960784313726,0.17254901960784313,0.0784313725490196,B.q)
D.bmB=new A.u(1,0.7215686274509804,0.7372549019607844,0.7843137254901961,B.q)
D.bmL=new A.u(1,0.16470588235294117,0.17254901960784313,0.41568627450980394,B.q)
D.bmN=new A.u(1,0.35294117647058826,0.12156862745098039,0.12156862745098039,B.q)
D.ahI=new A.u(1,0.22745098039215686,0.35294117647058826,0.20392156862745098,B.q)
D.bn5=new A.u(1,0.08627450980392157,0.2196078431372549,0.12156862745098039,B.q)
D.bn6=new A.u(1,0.09411764705882353,0.08627450980392157,0.2196078431372549,B.q)
D.bn9=new A.u(1,0.9607843137254902,0.9411764705882353,0.8784313725490196,B.q)
D.ahP=new A.u(1,0.10196078431372549,0.06274509803921569,0.09411764705882353,B.q)
D.Z0=new A.u(1,0.10196078431372549,0.058823529411764705,0.03137254901960784,B.q)
D.bnv=new A.u(1,0.5411764705882353,0.41568627450980394,0.2196078431372549,B.q)
D.bnQ=new A.u(1,1,0.7058823529411765,0.32941176470588235,B.q)
D.bnV=new A.u(1,0.9568627450980393,1,0.6901960784313725,B.q)
D.ai_=new A.u(1,1,0.5411764705882353,0.11764705882352941,B.q)
D.bo1=new A.u(1,0.4196078431372549,0.2901960784313726,0.22745098039215686,B.q)
D.Z7=new A.u(1,0.7058823529411765,0.47058823529411764,0.22745098039215686,B.q)
D.bok=new A.u(1,0.4196078431372549,0.35294117647058826,0.22745098039215686,B.q)
D.bol=new A.u(1,0.9098039215686274,0.9333333333333333,0.9607843137254902,B.q)
D.G3=new A.u(1,0.47843137254901963,0.24313725490196078,0.11372549019607843,B.q)
D.bp6=new A.u(1,0.2901960784313726,0.22745098039215686,0.11764705882352941,B.q)
D.bpL=new A.u(1,0.1843137254901961,0.36470588235294116,0.22745098039215686,B.q)
D.bpR=new A.u(1,1,0.7686274509803922,0.4196078431372549,B.q)
D.bpV=new A.u(0,0.3333333333333333,0.2196078431372549,0.1803921568627451,B.q)
D.qe=new A.u(1,1,0.9529411764705882,0.8627450980392157,B.q)
D.bq5=new A.u(1,0.8980392156862745,0.25882352941176473,0.10588235294117647,B.q)
D.bq9=new A.u(1,0.08235294117647059,0.11372549019607843,0.16862745098039217,B.q)
D.bqf=new A.u(0.4,1,0.9450980392156862,0.7215686274509804,B.q)
D.bqh=new A.u(1,0.4196078431372549,0.2901960784313726,0.16470588235294117,B.q)
D.aiM=new A.u(1,0.7098039215686275,0.396078431372549,0.11372549019607843,B.q)
D.aiQ=new A.u(1,0.8509803921568627,0.6980392156862745,0.4196078431372549,B.q)
D.G9=new A.u(1,0.5411764705882353,0.35294117647058826,0.2,B.q)
D.Zp=new A.u(0.13333333333333333,0.7215686274509804,0.6039215686274509,0.35294117647058826,B.q)
D.aj_=new A.u(1,0.3568627450980392,0.22745098039215686,0.13333333333333333,B.q)
D.brp=new A.u(1,0.23137254901960785,0.16470588235294117,0.4196078431372549,B.q)
D.brI=new A.u(1,1,0.6039215686274509,0.1803921568627451,B.q)
D.bs6=new A.u(1,1,0.9411764705882353,0.6274509803921569,B.q)
D.bsf=new A.u(1,0.788235294117647,0.6274509803921569,0.30980392156862746,B.q)
D.ajp=new A.u(1,0.8470588235294118,0.796078431372549,0.6901960784313725,B.q)
D.Zy=new A.u(1,0.4196078431372549,0.35294117647058826,0.34509803921568627,B.q)
D.bso=new A.u(1,0.4196078431372549,0.2901960784313726,0.2196078431372549,B.q)
D.bsF=new A.u(1,0.34509803921568627,0.3764705882352941,0.43137254901960786,B.q)
D.ZC=new A.u(1,0.22745098039215686,0.16470588235294117,0.13333333333333333,B.q)
D.bsT=new A.u(1,0.8509803921568627,0.7843137254901961,0.6274509803921569,B.q)
D.bt8=new A.u(1,0.5450980392156862,0.17254901960784313,0.23137254901960785,B.q)
D.ZG=new A.u(1,0.06666666666666667,0.058823529411764705,0.16470588235294117,B.q)
D.btd=new A.u(1,0.8509803921568627,0.3843137254901961,0.3568627450980392,B.q)
D.ajH=new A.u(1,1,0.9098039215686274,0.6901960784313725,B.q)
D.ajJ=new A.u(1,0.3568627450980392,0.22745098039215686,0.07058823529411765,B.q)
D.btw=new A.u(1,0.8509803921568627,0.7607843137254902,0.611764705882353,B.q)
D.ajP=new A.u(1,0.10196078431372549,0.1411764705882353,0.2,B.q)
D.btY=new A.u(1,0.9019607843137255,0.8117647058823529,0.6274509803921569,B.q)
D.bu1=new A.u(1,0.5411764705882353,0.47843137254901963,0.4,B.q)
D.bu7=new A.u(1,0.8509803921568627,1,0.41568627450980394,B.q)
D.bud=new A.u(1,0.10196078431372549,0.10196078431372549,0.12156862745098039,B.q)
D.bul=new A.u(1,0.29411764705882354,0.4196078431372549,0.47843137254901963,B.q)
D.buU=new A.u(1,0.8980392156862745,0.7529411764705882,0.47843137254901963,B.q)
D.bvp=new A.u(1,0.9607843137254902,0.8705882352941177,0.7019607843137254,B.q)
D.fEC=new A.B("None \u2014 root ancestor",null,null,null,null,null,null,null,null,null,null,null)
D.byW=new A.eI(null,D.fEC,B.fb,null,x.A)
D.fNF=new A.B("None",null,null,null,null,null,null,null,null,null,null,null)
D.byY=new A.eI(null,D.fNF,B.fb,null,x.A)
D.akK=new A.bd(3e4)
D.bzv=new A.bd(38e5)
D.bAf=new A.ik(0,10,0,10)
D.bAo=new A.R(0,1,0,0)
D.bAz=new A.ik(0,4,0,4)
D.bAC=new A.R(0,4,5,0)
D.bAT=new A.R(10,10,14,10)
D.bB4=new A.ik(10,4,10,4)
D.bBc=new A.ik(10,8,10,8)
D.bBd=new A.R(10,8,8,8)
D.bBG=new A.R(12,6,12,2)
D.bBW=new A.R(14,0,14,6)
D.bC_=new A.R(14,10,6,6)
D.bC0=new A.R(14,12,14,0)
D.bC4=new A.R(14,12,14,8)
D.bC7=new A.R(14,12,8,14)
D.bCb=new A.ik(14,14,14,14)
D.bCt=new A.R(14,6,14,40)
D.bCw=new A.R(14,8,14,30)
D.bCU=new A.R(16,2,16,10)
D.bD3=new A.R(16,6,16,30)
D.bD5=new A.R(16,6,16,8)
D.bDk=new A.R(18,10,18,4)
D.bDm=new A.R(18,12,18,0)
D.bDt=new A.R(18,14,12,4)
D.amc=new A.R(18,16,18,8)
D.bDK=new A.R(18,20,18,22)
D.bDQ=new A.R(18,30,18,30)
D.bE7=new A.R(20,10,12,20)
D.bEa=new A.R(20,11,20,11)
D.bEl=new A.R(20,18,16,18)
D.bEn=new A.R(20,18,20,6)
D.bFc=new A.R(24,32,24,28)
D.bFd=new A.R(24,36,24,32)
D.bFh=new A.R(26,26,24,14)
D.bFw=new A.R(2,4,2,8)
D.bFA=new A.R(30,0,30,0)
D.bFL=new A.R(38,22,22,22)
D.amz=new A.R(40,24,24,24)
D.bFN=new A.ik(40,40,40,40)
D.bFP=new A.R(46,30,30,30)
D.amC=new A.R(4,0,0,8)
D.bGf=new A.R(56,40,40,40)
D.bGj=new A.R(1.25,1.25,1.25,1.25)
D.bGk=new A.R(60,0,60,0)
D.bGo=new A.R(6,14,6,16)
D.bGs=new A.R(6,4,12,0)
D.bGw=new A.R(6,6,10,2)
D.bGD=new A.ik(7,3,7,3)
D.bHc=new A.R(5,1.5,5,1.5)
D.bHn=new A.R(6,2.5,6,2.5)
D.fVP=new A.B("Family Games",null,B.kf,null,null,null,null,null,null,null,null,null)
D.fDe=new A.B("Quizzes, stories by the fire and tests made from the people in this tree. Win Family Stars.",null,K.ab_,null,null,null,null,null,null,null,null,null)
D.cHV=w([D.fVP,D.fDe],x.p)
D.bwr=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.cHV,null)
D.bHN=new A.bz(1,B.bc,D.bwr,null)
D.h_a=new A.B("Signature",null,B.ne,null,null,null,null,null,null,null,null,null)
D.bHQ=new A.bz(1,B.bc,D.h_a,null)
D.fSp=new A.B("MADE BY THE ONE WHO PLANTED THE TREE",null,P.tA,null,null,null,null,null,null,null,null,null)
D.bIn=new A.bz(1,B.bc,D.fSp,null)
D.fXh=new A.B("Tell the AI what to fix",null,B.dh,null,null,null,null,null,null,null,null,null)
D.bIE=new A.bz(1,B.bc,D.fXh,null)
D.fxU=new A.G(!0,B.c,null,null,null,null,22,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZf=new A.B("Worksheets",null,D.fxU,null,null,null,null,null,null,null,null,null)
D.fy4=new A.G(!0,E.afN,null,null,null,null,13,B.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fY6=new A.B("Track your project spending",null,D.fy4,null,null,null,null,null,null,null,null,null)
D.d5p=w([D.fZf,B.ax,D.fY6],x.p)
D.bw4=new A.fj(B.ah,B.e,B.i,B.E,null,B.p,null,0,D.d5p,null)
D.bIK=new A.bz(1,B.bc,D.bw4,null)
D.fsU=new A.G(!0,E.km,null,null,null,null,18,B.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDO=new A.B("FAMILY LIBRARY",null,D.fsU,null,null,null,null,null,null,null,null,null)
D.bJ1=new A.bz(1,B.bc,D.fDO,null)
D.Ox=new C.Io("leather","","",0,"gold",25,"middle","double","leather","",!0,"classic")
D.wo=new C.Ip(0,"male")
D.oq=new C.Ip(1,"female")
D.yU=new C.Ip(2,"unknown")
D.uy=new C.alX(0,"owner")
D.Oy=new C.alX(1,"editor")
D.kV=new C.alX(2,"viewer")
D.aov=new A.a0(61199,"MaterialIcons",!1)
D.bOi=new A.a0(61504,"MaterialIcons",!1)
D.bOj=new A.a0(61505,"MaterialIcons",!1)
D.bOl=new A.a0(61587,"MaterialIcons",!1)
D.bOs=new A.a0(61890,"MaterialIcons",!1)
D.bPk=new A.a0(63034,"MaterialIcons",!0)
D.bPC=new A.a0(63153,"MaterialIcons",!1)
D.bQ8=new A.a0(63429,"MaterialIcons",!1)
D.aqD=new A.a0(984520,"MaterialIcons",!1)
D.bOR=new A.a0(62776,"MaterialIcons",!1)
D.bSt=new A.ae(D.bOR,26,B.b1,null,null,null)
D.bNg=new A.a0(57648,"MaterialIcons",!1)
D.bSN=new A.ae(D.bNg,14,B.c,null,null,null)
D.bT3=new A.ae(B.Hi,17,null,null,null,null)
D.bT9=new A.ae(B.a27,null,B.bQ,null,null,null)
D.bTA=new A.ae(E.a2f,null,null,null,null,null)
D.bTD=new A.ae(B.j2,18,E.km,null,null,null)
D.a1Y=new A.a0(62044,"MaterialIcons",!1)
D.bTI=new A.ae(D.a1Y,null,B.aY,null,null,null)
D.bTP=new A.ae(B.z6,18,B.c,null,null,null)
D.bUx=new A.ae(B.ea,16,null,null,null,null)
D.bUE=new A.ae(D.a1Y,32,B.aY,null,null,null)
D.bUX=new A.ae(E.aow,18,B.cG,null,null,null)
D.bW0=new A.ae(B.Hs,22,B.ay,null,null,null)
D.bWc=new A.ae(B.ea,22,B.b1,null,null,null)
D.bWp=new A.ae(Z.a22,22,B.c,null,null,null)
D.bWv=new A.ae(B.uJ,52,B.c,null,null,null)
D.bWF=new A.ae(B.Hs,30,B.ay,null,null,null)
D.bWY=new A.ae(B.a2k,null,B.c,null,null,null)
D.ark=new A.ae(B.uT,22,B.c,null,null,null)
D.bX6=new A.ae(B.ea,17,null,null,null,null)
D.bXt=new A.ae(B.wE,26,B.cG,null,null,null)
D.bYe=new A.ae(B.a2s,16,null,null,null,null)
D.bZ_=new A.ae(B.uJ,24,B.c,null,null,null)
D.bZ4=new A.ae(B.P0,20,B.ta,null,null,null)
D.bZ9=new A.ae(B.Hg,null,B.bQ,null,null,null)
D.bZh=new A.ae(B.j2,18,B.c,null,null,null)
D.bZX=new A.ae(B.cz,22,B.ab,null,null,null)
D.c_M=new A.ae(B.eg,16,B.ab,null,null,null)
D.c_Y=new A.ae(D.a1Y,20,B.aY,null,null,null)
D.arK=new A.ae(B.hG,20,null,null,null,null)
D.c0s=new A.ae(B.cz,18,D.kM,null,null,null)
D.c0J=new A.ae(B.zd,28,B.c,null,null,null)
D.c0T=new A.ae(B.OR,null,B.fg,null,null,null)
D.c1c=new A.ae(B.zd,24,B.c,null,null,null)
D.c1E=new A.ae(B.uJ,null,B.aY,null,null,null)
D.c1F=new A.ae(B.k2,20,B.cG,null,null,null)
D.c1Z=new A.ae(B.Hi,16,null,null,null,null)
D.c3y=new A.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,B.jZ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eJ,!0,null,null,null,null)
D.asr=new C.a6p(10,null)
D.c43=new C.a6p(12,null)
D.c44=new C.a6p(14,null)
D.dm4=w([B.bx,B.aY,B.fn,B.b1],x.O)
D.c5f=new A.a9(B.aA,B.aF,B.x,D.dm4,null,null)
D.boS=new A.u(1,0.5411764705882353,0.35294117647058826,0.16862745098039217,B.q)
D.bv0=new A.u(1,0.23137254901960785,0.13725490196078433,0.07058823529411765,B.q)
D.d1U=w([D.boS,D.bv0],x.O)
D.c5q=new A.a9(B.b7,B.b9,B.x,D.d1U,null,null)
D.dfY=w([B.eT,B.fP,B.fn],x.O)
D.c5v=new A.a9(B.aA,B.aF,B.x,D.dfY,null,null)
D.aiA=new A.u(1,0.16470588235294117,0.09019607843137255,0.047058823529411764,B.q)
D.bfF=new A.u(1,0.08627450980392157,0.043137254901960784,0.0196078431372549,B.q)
D.d47=w([D.aiA,D.bfF],x.O)
D.c62=new A.a9(B.b7,B.b9,B.x,D.d47,null,null)
D.bjn=new A.u(1,0.2901960784313726,0.16470588235294117,0.08235294117647059,B.q)
D.aBG=w([D.bjn,D.aiA],x.O)
D.c6m=new A.a9(B.aA,B.aF,B.x,D.aBG,null,null)
D.ahj=new A.u(1,0.6039215686274509,0.3176470588235294,0.1568627450980392,B.q)
D.blY=new A.u(1,0.35294117647058826,0.16470588235294117,0.07058823529411765,B.q)
D.df1=w([D.ahj,D.blY],x.O)
D.c7_=new A.a9(B.a6,B.aa,B.x,D.df1,null,null)
D.dt2=w([B.bC,B.mN],x.O)
D.c71=new A.a9(B.b7,B.b9,B.x,D.dt2,null,null)
D.boN=new A.u(1,0.9137254901960784,0.8509803921568627,0.7019607843137254,B.q)
D.du_=w([D.boN,D.kM,D.kM,I.N_],x.O)
D.dwu=w([0,0.07,0.9,1],x.n)
D.c7w=new A.a9(B.a6,B.aa,B.x,D.du_,D.dwu,null)
D.c7F=new A.a9(B.aA,B.aF,B.x,B.SF,null,null)
D.d_H=w([B.aE,D.lB],x.O)
D.c7I=new A.a9(B.a6,B.aa,B.x,D.d_H,null,null)
D.dsB=w([B.b1,B.aY,B.bQ],x.O)
D.c8F=new A.a9(B.aA,B.aF,B.x,D.dsB,null,null)
D.ccY=w([10,20,30],x.t)
D.cmU=w([-1,-0.4,0.3,1],x.n)
D.cum=w([B.bx,B.b1,B.eT],x.O)
D.cuu=w([B.br,B.aE,B.kl],x.O)
D.cuw=w(["\xd7","\xf7","100","0","\u221e","%"],x.s)
D.cvd=w([30,140,262,360],x.n)
D.bnf=new A.u(1,0.07058823529411765,0.20784313725490197,0.1803921568627451,B.q)
D.cAM=w([D.bnf,E.ai9],x.O)
D.eli=new A.o(1,2)
D.faY=new A.cU(B.aT,D.eli,3)
D.ayA=w([D.faY],x.F)
D.cIc=w([B.hl,B.cg,B.fm],x.O)
D.cKX=w([B.bK,B.bv,B.bp],x.O)
D.bJS=new C.uM("classic","Classic leather","Gold-edged brown leather",D.aBG,E.km,E.km,"\u2766",B.K,!0,!1,!1,!1)
D.beK=new A.u(1,0.23137254901960785,0.12156862745098039,0.054901960784313725,B.q)
D.btO=new A.u(1,0.10980392156862745,0.058823529411764705,0.027450980392156862,B.q)
D.d76=w([D.beK,D.btO],x.O)
D.aie=new A.u(1,0.9490196078431372,0.8235294117647058,0.47843137254901963,B.q)
D.bJN=new C.uM("ornate","Ornate gold","Double gold border and flourishes",D.d76,D.aie,D.aie,"\u2726",B.K,!0,!0,!0,!1)
D.biW=new A.u(1,0.9647058823529412,0.9137254901960784,0.7843137254901961,B.q)
D.bpF=new A.u(1,0.9019607843137255,0.8274509803921568,0.6392156862745098,B.q)
D.cZC=w([D.biW,D.bpF],x.O)
D.bJM=new C.uM("parchment","Parchment","Old paper with dark ink",D.cZC,D.G3,L.iY,"\u2767",B.K,!0,!1,!1,!0)
D.aft=new A.u(1,0.984313725490196,0.9686274509803922,0.9333333333333333,B.q)
D.bs3=new A.u(1,0.9450980392156862,0.9176470588235294,0.8588235294117647,B.q)
D.dqQ=w([D.aft,D.bs3],x.O)
D.bmI=new A.u(1,0.6039215686274509,0.5607843137254902,0.47058823529411764,B.q)
D.brk=new A.u(1,0.16862745098039217,0.16862745098039217,0.16862745098039217,B.q)
D.bJP=new C.uM("minimal","Clean paper","Plain and elegant, like a printed book",D.dqQ,D.bmI,D.brk,"",B.K,!0,!0,!1,!0)
D.bJR=new C.uM("midnight","Midnight","Deep blue with silver stars",K.aC_,B.ct,B.bO,"\u2727",B.K,!0,!0,!1,!1)
D.bJL=new C.uM("emerald","Emerald library","Green cloth, title on the left",W.ayZ,E.km,B.fY,"\u25c6",B.bn,!0,!1,!1,!1)
D.bsx=new A.u(1,0.24705882352941178,0.0392156862745098,0.0392156862745098,B.q)
D.doR=w([B.et,D.bsx],x.O)
D.bo0=new A.u(1,0.9411764705882353,0.6588235294117647,0.7215686274509804,B.q)
D.bpd=new A.u(1,0.9882352941176471,0.9058823529411765,0.9254901960784314,B.q)
D.bJQ=new C.uM("rose","Rose vintage","Burgundy with rose-gold lettering",D.doR,D.bo0,D.bpd,"\u2740",B.K,!0,!1,!0,!1)
D.dtA=w([B.cu,F.nw],x.O)
D.bJO=new C.uM("modern","Modern","Dark, bold, left-aligned",D.dtA,B.aI,B.c,"",B.bn,!1,!0,!1,!1)
D.a4y=w([D.bJS,D.bJN,D.bJM,D.bJP,D.bJR,D.bJL,D.bJQ,D.bJO],A.as("O<uM>"))
D.cNU=w(["Nairobi","Lagos","Accra","Kampala","Dar es Salaam","Kigali","Addis Ababa","Dakar"],x.s)
D.dtn=w(["I am because we are","Good morning","Big river","Come and eat"],x.s)
D.bK2=new C.lr('What does "Ubuntu" mean?',D.dtn,0,"Ubuntu means a person is a person through other people.","Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.","culture",20)
D.d0m=w(["Bibi","Babu","Dada","Kaka"],x.s)
D.bK5=new C.lr("In Swahili, what do we call a grandmother?",D.d0m,0,"Bibi is grandmother. Babu is grandfather.","Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.","culture",20)
D.d0d=w(["Babu","Mama","Baba","Dada"],x.s)
D.bK0=new C.lr("In Swahili, what do we call a grandfather?",D.d0d,0,"Babu is grandfather.","Babu is the grandfather, the one who keeps the old stories.","culture",20)
D.d1u=w(["Dada","Kaka","Bibi","Mtoto"],x.s)
D.bK4=new C.lr("What is a sister called in Swahili?",D.d1u,0,"Dada is sister. Kaka is brother.","A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.","culture",20)
D.d6y=w(["Kaka","Dada","Babu","Mzee"],x.s)
D.bK1=new C.lr("What is a brother called in Swahili?",D.d6y,0,"Kaka is brother.","A brother is Kaka. Look after your Kaka and your Dada.","culture",20)
D.d0c=w(["Baba","Mama","Bibi","Kaka"],x.s)
D.bKc=new C.lr("Which word means father in Swahili?",D.d0c,0,"Baba is father and Mama is mother.","Baba is father and Mama is mother. They are the roots of the home.","culture",20)
D.duy=w(["Unity is strength","Rain is coming","The market is open","The night is long"],x.s)
D.bKb=new C.lr('"Umoja ni nguvu" means...',D.duy,0,"Together we are strong.","Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.","culture",20)
D.drw=w(["Little by little fills the measure","Big rivers need bridges","Cows love green grass","Fire needs wood"],x.s)
D.bKd=new C.lr('"Haba na haba hujaza kibaba" teaches us...',D.drw,0,"Small steps add up to great things.","Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.","culture",20)
D.d4f=w(["Everyone helps to raise the children","Villages must be big","Children build houses","Only parents teach"],x.s)
D.bKa=new C.lr('The African saying "It takes a village to raise a child" means...',D.d4f,0,"Aunts, uncles, elders and neighbours all help.","It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.","culture",20)
D.duS=w(["The elders","The market","The river","The drum"],x.s)
D.bK6=new C.lr("Who is the traditional keeper of the family stories?",D.duS,0,"Elders hold the memory of the family.","The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.","culture",20)
D.cS4=w(["To share stories and wisdom","To race each other","To hide from the sun","To count cows"],x.s)
D.bK3=new C.lr("Why do families sit round the fire at night?",D.cS4,0,"The fire is where the old teach the young.","At night we sit round the fire. The flames are warm, and the stories are warmer.","culture",20)
D.dtC=w(["Let us all pull together","A kind of fish","A long road","A rain dance"],x.s)
D.bK8=new C.lr('What does "Harambee" mean?',D.dtC,0,"Harambee: everyone pulls together.","Harambee! It means let us all pull together, like many hands on one rope.","culture",20)
D.d9m=w(["An elder","A baby","A market","A cow"],x.s)
D.bK7=new C.lr('"Mzee" is a respectful word for...',D.d9m,0,"We honour our Mzee.","Mzee is how we greet an elder with honour. We bow our heads and listen.","culture",20)
D.doI=w(["Respect for an elder","Hunger","Sleepiness","A race"],x.s)
D.bK9=new C.lr('What does "Shikamoo" show?',D.doI,0,"Children greet elders with Shikamoo, and the elder answers Marahaba.","Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.","culture",20)
D.ayU=w([D.bK2,D.bK5,D.bK0,D.bK4,D.bK1,D.bKc,D.bKb,D.bKd,D.bKa,D.bK6,D.bK3,D.bK8,D.bK7,D.bK9],x.J)
D.cWs=w([90,360],x.n)
D.cZ9=w([B.bQ,B.bl],x.O)
D.boC=new A.u(1,0.9372549019607843,0.9647058823529412,0.9372549019607843,B.q)
D.cZO=w([D.aft,D.boC],x.O)
D.d_q=w([-1,-0.3,0.4,1],x.n)
D.d0i=w([0,0.45,0.72,0.92,1],x.n)
D.biS=new A.u(1,0.054901960784313725,0.10196078431372549,0.09019607843137255,B.q)
D.d0A=w([D.biS,B.dg],x.O)
D.bgC=new A.u(1,0.4196078431372549,0.1803921568627451,0.37254901960784315,B.q)
D.ajZ=new A.u(1,0.8784313725490196,0.5411764705882353,0.27058823529411763,B.q)
D.d17=w([B.dx,D.bgC,D.ajZ],x.O)
D.d29=w([B.bb,B.jg,B.p7],x.O)
D.bjp=new A.u(1,0.23137254901960785,0.16862745098039217,0.20392156862745098,B.q)
D.brb=new A.u(1,0.22745098039215686,0.1568627450980392,0.1411764705882353,B.q)
D.bgi=new A.u(1,0.1411764705882353,0.09019607843137255,0.0784313725490196,B.q)
D.d2e=w([D.bjp,D.brb,D.bgi],x.O)
D.d2z=w(["Rewrite the whole book in natural, professional Swahili","Correct the spelling in the whole book",'Change the word "tree" to the right Swahili word',"Use simple words everyone understands","Make every page a little shorter"],x.s)
D.d2J=w(["Really, Babu?","Eh! I did not know that.","Tell us more!","Wow...","Mmm, I see.","Ooh, that is a good one."],x.s)
D.hsV=new C.adM(78,424,48,44,56)
D.hsT=new C.adM(214,396,34,34,42)
D.hsU=new C.adM(442,452,56,50,64)
D.azS=w([D.hsV,D.hsT,D.hsU],A.as("O<adM>"))
D.d3h=w(["Farmer","Teacher","Nurse","Driver","Builder","Trader","Doctor","Tailor"],x.s)
D.bfz=new A.u(1,0.4196078431372549,0.19607843137254902,0.08627450980392157,B.q)
D.bl8=new A.u(1,0.2901960784313726,0.13333333333333333,0.06274509803921569,B.q)
D.dwq=w([D.ahj,D.bfz,D.bl8],x.O)
D.bJT=new C.uN("leather","Leather",D.dwq,"vintage")
D.dan=w([B.d6,B.FV,Aa.Yy],x.O)
D.bK_=new C.uN("midnight","Midnight",D.dan,"starry")
D.d2a=w([B.eo,B.e3,B.le],x.O)
D.bJZ=new C.uN("forest","Forest",D.d2a,"story")
D.dyq=w([B.ep,B.et,B.ko],x.O)
D.bJW=new C.uN("burgundy","Burgundy",D.dyq,"royal")
D.cKv=w([B.aE,B.of,B.o3],x.O)
D.bJX=new C.uN("royal","Royal",D.cKv,"royal")
D.d4L=w([B.bv,B.cu,F.nw],x.O)
D.bJU=new C.uN("charcoal","Charcoal",D.d4L,"geo")
D.dwz=w([B.ch,B.dK,B.y7],x.O)
D.bJY=new C.uN("sunset","Sunset",D.dwz,"sunset")
D.dxf=w([B.jg,B.G4,B.YB],x.O)
D.bJV=new C.uN("ocean","Ocean",D.dxf,"band")
D.zJ=w([D.bJT,D.bK_,D.bJZ,D.bJW,D.bJX,D.bJU,D.bJY,D.bJV],A.as("O<uN>"))
D.d5f=w(["classic","ornate","parchment","minimal","midnight","emerald","rose","modern"],x.s)
D.d5R=w([B.am,B.aM,B.S],x.O)
D.d7b=w([B.et,B.e3,B.d6,B.h7,B.yb,B.cG,B.kp,B.ee,B.cZ],x.O)
D.d7c=w(["Make the cover dark blue with silver letters","Put the title at the top and make it bigger","Use a star sky and a heart picture","Add our family name under the title"],x.s)
D.faZ=new A.cU(B.dq,B.dG,8)
D.d7n=w([D.faZ],x.F)
D.d8t=w([B.bU,B.dK,B.kk],x.O)
D.bhu=new A.u(1,0.0196078431372549,0.03137254901960784,0.12156862745098039,B.q)
D.blq=new A.u(1,0.22745098039215686,0.16470588235294117,0.3843137254901961,B.q)
D.bpA=new A.u(1,0.5411764705882353,0.2901960784313726,0.3686274509803922,B.q)
D.d8J=w([D.bhu,G.aiJ,D.blq,D.bpA,D.ajZ],x.O)
D.d9_=w(["each","pcs","boxes","bags","hours","days","sq ft","gallons","lbs","ft","other"],x.s)
D.d9b=w(["Yes! \ud83c\udf89","Hongera!","We did it!","Eeh, well done!"],x.s)
D.beV=new A.u(1,0.8509803921568627,0.6431372549019608,0.2549019607843137,B.q)
D.bkN=new A.u(1,0.5411764705882353,0.35294117647058826,0.11764705882352941,B.q)
D.d9E=w([D.beV,D.agN,D.bkN],x.O)
D.dai=w([B.bU,B.hB],x.O)
D.dao=w([G.nm,B.i9,G.afE,B.cO],x.O)
D.dbX=w([B.cO,G.nm,B.i9,D.lC,B.cO],x.O)
D.dcy=w([B.aU,B.w1,B.xW],x.O)
D.aAU=w(["True","False"],x.s)
D.eIr=new A.y(-0.65,0.6)
D.eV5=new A.y(-0.2,0.95)
D.eWa=new A.y(0.25,0.95)
D.eLV=new A.y(0.7,0.6)
D.eWK=new A.y(1,0.1)
D.ddj=w([Au.Ut,D.eIr,D.eV5,D.eWa,D.eLV,D.eWK],x.G)
D.bnw=new A.u(1,0.5411764705882353,0.35294117647058826,0.2823529411764706,B.q)
D.btG=new A.u(1,0.4196078431372549,0.25098039215686274,0.20392156862745098,B.q)
D.bit=new A.u(1,0.24705882352941178,0.1450980392156863,0.18823529411764706,B.q)
D.ddp=w([D.bnw,D.btG,D.bit],x.O)
D.ddt=w([B.bN,B.c0,B.du,B.aU],x.O)
D.ddY=w([B.hT,B.ch,B.rv],x.O)
D.del=w(["kahoot","fire","catch","plant","who","journey","lineup","school"],x.s)
D.dex=w([B.eT,B.cG],x.O)
D.boW=new A.u(1,0.1411764705882353,0.2980392156862745,0.21176470588235294,B.q)
D.deX=w([D.boW,D.afr],x.O)
D.df7=w([B.cF,B.fo,B.hC],x.O)
D.dfi=w([B.aI,B.bl,B.d6],x.O)
D.dfV=w([B.eu,B.cX,B.e3],x.O)
D.dge=w([B.dJ,B.d6,B.FV],x.O)
D.dgi=w([B.bk,B.mJ,B.cZ],x.O)
D.dgA=w(["\ud83e\udd47","\ud83e\udd48","\ud83e\udd49"],x.s)
D.bob=new A.u(1,0.6352941176470588,0.4745098039215686,0.24313725490196078,B.q)
D.bmr=new A.u(1,0.27450980392156865,0.20392156862745098,0.12156862745098039,B.q)
D.dgU=w([D.bob,D.agJ,D.bmr],x.O)
D.dhI=w(["7","3","+","42","\u03c0","\u2211"],x.s)
D.diL=w([1,0,7,6,3,2],x.t)
D.a5w=w(["leather","linen","plain","stars","rays"],x.s)
D.diX=w([0.5,2,3.6],x.n)
D.dju=w(["Pole, child. Listen again:","Do not worry. Even elders learn twice:","Eh, so close! Remember:"],x.s)
D.bSa=new A.a0(985219,"MaterialIcons",!1)
D.bRI=new A.a0(983781,"MaterialIcons",!1)
D.aBm=w([B.a27,B.hH,B.lM,B.ie,D.bSa,B.HD,B.qD,D.bRI,K.aqr,B.CS,B.qF,B.n_],A.as("O<a0>"))
D.a5A=w(["double","single","corners","none"],x.s)
D.bJI=new C.zB("Little Seed","\ud83c\udf31",0)
D.bJK=new C.zB("Young Listener","\ud83d\udc42",40)
D.bJJ=new C.zB("Storyteller","\ud83e\ude98",120)
D.bJH=new C.zB("Village Pride","\ud83c\udfe1",300)
D.bJF=new C.zB("Keeper of Roots","\ud83c\udf33",700)
D.bJG=new C.zB("Elder of the Fire","\ud83d\udd25",1500)
D.aBo=w([D.bJI,D.bJK,D.bJJ,D.bJH,D.bJF,D.bJG],A.as("O<zB>"))
D.dkE=w([B.df,B.bq,B.ee],x.O)
D.dkU=w([],x.C)
D.Dt=w([],x.u)
D.aLo=new A.o(225,528)
D.eK6=new A.y(D.aLo,1)
D.em2=new A.o(350,548)
D.eQn=new A.y(D.em2,0.95)
D.aLj=new A.o(158,656)
D.eQf=new A.y(D.aLj,1.12)
D.emO=new A.o(92,544)
D.eFF=new A.y(D.emO,0.93)
D.em5=new A.o(398,614)
D.eMh=new A.y(D.em5,1.04)
D.elU=new A.o(318,662)
D.eB7=new A.y(D.elU,1.1)
D.a5I=w([D.eK6,D.eQn,D.eQf,D.eFF,D.eMh,D.eB7],A.as("O<+(o,I)>"))
D.dmX=w(["Vizuri sana! That is very good.","Hongera! Congratulations, my child.","Safi! You listened well.","Asante, child. The fire is proud of you."],x.s)
D.dnn=w(["\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe","\ud83d\udc69\ud83c\udfff","\ud83d\udc69\ud83c\udffd","\ud83d\udc69\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc69\ud83c\udffe\u200d\ud83e\uddb3","\ud83d\udc69\ud83c\udfff\u200d\ud83e\uddb3","\ud83e\uddd5","\ud83d\udc69\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc69\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc69\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dop=w([B.cO,G.nm,B.i9,D.lC,B.cO,B.i9],x.O)
D.dpQ=w([B.aw,B.fo,B.h7],x.O)
D.dq9=w([-17,17],x.n)
D.dqr=w([-70,58],x.n)
D.dqt=w([-70,-30,20],x.n)
D.dru=w([B.bk,B.mJ,B.Gf],x.O)
D.drL=w(["\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffd\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe","\ud83d\udc68\ud83c\udfff","\ud83d\udc68\ud83c\udffd","\ud83e\uddd4\u200d\u2642\ufe0f","\ud83d\udc68\ud83c\udffe\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udfff\u200d\ud83e\uddb2","\ud83d\udc68\ud83c\udffb\u200d\ud83e\uddb1","\ud83d\udc68\ud83c\udffe\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffd\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udfff\u200d\ud83d\udcbc","\ud83d\udc68\ud83c\udffe\u200d\ud83c\udf93","\ud83d\udc68\ud83c\udffd\u200d\ud83c\udf93"],x.s)
D.dLp=new C.lV("construction","Construction","Jobsite & builds",B.uG)
D.dLw=new C.lV("house","Home Build","Houses & rooms",B.wz)
D.dLm=new C.lV("grocery","Grocery","Store & pantry",B.a31)
D.dLl=new C.lV("calculator","Calculations","Math & estimates",B.P7)
D.dLu=new C.lV("lumber","Materials","Lumber & supplies",B.Pr)
D.dLi=new C.lV("kitchen","Kitchen","Remodel & meals",A3.Ps)
D.bRG=new A.a0(983756,"MaterialIcons",!1)
D.dLn=new C.lV("landscape","Landscaping","Yard & garden",D.bRG)
D.dLh=new C.lV("plumbing","Plumbing","Pipes & water",B.pw)
D.dLx=new C.lV("electrical","Electrical","Wiring & power",B.ht)
D.dLf=new C.lV("store","Retail Shop","Daily business",B.lk)
D.dLg=new C.lV("paint_remodel","Paint & Remodel","Colors & walls",A3.Pm)
D.bR5=new A.a0(983311,"MaterialIcons",!1)
D.dLt=new C.lV("roofing","Roofing","Roofs & exteriors",D.bR5)
D.bRT=new A.a0(983986,"MaterialIcons",!1)
D.dLe=new C.lV("warehouse","Warehouse","Storage & stock",D.bRT)
D.dLr=new C.lV("vehicles","Vehicles","Fleet & transport",B.HE)
D.bOT=new A.a0(62785,"MaterialIcons",!1)
D.dLk=new C.lV("farm","Farm","Crops & livestock",D.bOT)
D.dLj=new C.lV("restaurant","Restaurant","Food & catering",B.wI)
D.dLq=new C.lV("tools","Tools","Workshop gear",B.Hz)
D.dLv=new C.lV("wallet","Cash & Wallet","Quick spending",B.k2)
D.bQ3=new A.a0(63395,"MaterialIcons",!1)
D.dLs=new C.lV("concrete","Concrete","Foundation work",D.bQ3)
D.dLo=new C.lV("blueprint","Blueprint","Plans & design",Ap.ap_)
D.a64=w([D.dLp,D.dLw,D.dLm,D.dLl,D.dLu,D.dLi,D.dLn,D.dLh,D.dLx,D.dLf,D.dLg,D.dLt,D.dLe,D.dLr,D.dLk,D.dLj,D.dLq,D.dLv,D.dLs,D.dLo],A.as("O<lV>"))
D.dsh=w([B.bu,B.bq],x.O)
D.dt3=w([B.iz,B.oa,B.dT],x.O)
D.ahx=new A.u(1,0.8862745098039215,0.10588235294117647,0.23529411764705882,B.q)
D.aiv=new A.u(1,0.07450980392156863,0.40784313725490196,0.807843137254902,B.q)
D.bmM=new A.u(1,0.8470588235294118,0.6196078431372549,0,B.q)
D.ber=new A.u(1,0.14901960784313725,0.5372549019607843,0.047058823529411764,B.q)
D.aCy=w([D.ahx,D.aiv,D.bmM,D.ber],x.O)
D.duf=w(["Oooh!","Pole!","Eh, so close!"],x.s)
D.a6f=w(["top","middle","bottom"],x.s)
D.dvF=w([B.cn,B.bl,B.d6],x.O)
D.aCS=w(["\u25b2","\u25c6","\u25cf","\u25a0"],x.s)
D.b8e=new A.ac(0,B.G,B.aT,B.I,14)
D.aCV=w([D.b8e],x.V)
D.blG=new A.u(1,0.22745098039215686,0.18823529411764706,0.25098039215686274,B.q)
D.dwj=w([D.ag2,D.Zy,D.blG],x.O)
D.dwk=w([B.b5,B.cX,B.e3],x.O)
D.elD=new A.o(24,-8)
D.eml=new A.o(48,0)
D.elz=new A.o(24,6)
D.dxY=w([B.I,D.elD,D.eml,D.elz],x.g)
D.dym=w(["Rewrite this page in natural, professional Swahili","Correct the spelling","Rewrite this page in simpler words","Add a paragraph about the family farm","Make this page shorter"],x.s)
D.eic={top:0,middle:1,bottom:2}
D.dBA=new A.bw(D.eic,["Top","Middle","Bottom"],x.r)
D.ehO={double:0,single:1,corners:2,none:3}
D.dBG=new A.bw(D.ehO,["Double line","One line","Corners","None"],x.r)
D.eiZ={leather:0,linen:1,plain:2,stars:3,rays:4}
D.dDb=new A.bw(D.eiZ,["Leather","Linen","Smooth","Stars","Light rays"],x.r)
D.dDn=new A.bw(B.hY,[],A.as("bw<F,+(n,n)>"))
D.ei4={gold:0,silver:1,rose:2,white:3,copper:4,black:5}
D.DG=new A.bw(D.ei4,[4293444714,4293257195,4293961912,4294967295,4292905548,4279310375],A.as("bw<n,F>"))
D.dFO=new H.NN(32,null)
D.dFP=new H.NN(40,null)
D.dFQ=new H.NN(46,null)
D.aKR=new C.atS(null)
D.eku=new A.o(0,40)
D.ekv=new A.o(0,412)
D.ekx=new A.o(0,900)
D.ekH=new A.o(0,-34)
D.ekI=new A.o(0,-46)
D.ekK=new A.o(0,-74)
D.ekN=new A.o(100,300)
D.ekO=new A.o(10,14)
D.ekR=new A.o(10,-10)
D.ekW=new A.o(10,-46)
D.ekX=new A.o(10,-58)
D.ekY=new A.o(116,442)
D.el_=new A.o(11,-1)
D.el0=new A.o(11,-10)
D.el1=new A.o(11,-21)
D.aLe=new A.o(11,-60)
D.el8=new A.o(14,-2)
D.el9=new A.o(150,520)
D.a8e=new A.o(150,592)
D.elc=new A.o(15,-15)
D.eld=new A.o(16,-1)
D.elh=new A.o(190,444)
D.elk=new A.o(1,5)
D.els=new A.o(21,-78)
D.elt=new A.o(222,615)
D.Jt=new A.o(225,300)
D.a8h=new A.o(225,574)
D.elC=new A.o(24,-52)
D.elE=new A.o(250,210)
D.elP=new A.o(2,-56)
D.aLs=new A.o(300,0)
D.elQ=new A.o(300,440)
D.elT=new A.o(318,476)
D.elW=new A.o(324,144)
D.a8k=new A.o(332,150)
D.elY=new A.o(335,585)
D.elZ=new A.o(338,140)
D.em_=new A.o(340,158)
D.em1=new A.o(34,-60)
D.E6=new A.o(36,-24)
D.em3=new A.o(372,470)
D.em4=new A.o(390,455)
D.emd=new A.o(42,468)
D.eme=new A.o(431,510)
D.emf=new A.o(431,520)
D.emg=new A.o(45,-92)
D.emh=new A.o(46,20)
D.emi=new A.o(46,-92)
D.emj=new A.o(46,-94)
D.emk=new A.o(47,-4)
D.emm=new A.o(48,-4)
D.emu=new A.o(4,-26)
D.emC=new A.o(60,455)
D.emJ=new A.o(8,14)
D.emN=new A.o(8,-76)
D.emP=new A.o(95,575)
D.emQ=new A.o(98,-24)
D.emS=new A.o(9,-2)
D.emT=new A.o(9,-58)
D.aLB=new A.o(9,-79)
D.emU=new A.o(9,-9)
D.enw=new A.o(16.5,8)
D.eny=new A.o(3.2,0)
D.enA=new A.o(-16.5,8)
D.enH=new A.o(16.5,2)
D.enK=new A.o(-3.2,0)
D.enT=new A.o(9.5,6)
D.enX=new A.o(-10,14)
D.enY=new A.o(-10,-12)
D.enZ=new A.o(-10,-58)
D.eo0=new A.o(-11,-1)
D.eo1=new A.o(-11,-10)
D.eo3=new A.o(-11,-60)
D.eo4=new A.o(-12,-14)
D.eo5=new A.o(-12,-16)
D.eoc=new A.o(-14,-2)
D.eof=new A.o(-15,-15)
D.eog=new A.o(-15,-3)
D.eoi=new A.o(-16,-1)
D.eoz=new A.o(-24,-52)
D.eoG=new A.o(-2,-34)
D.eoH=new A.o(-2,-38)
D.eoJ=new A.o(-30,-100)
D.a8l=new A.o(-36,-24)
D.eoU=new A.o(-4,-26)
D.eoW=new A.o(-4,-6)
D.ep5=new A.o(-8,-3)
D.ep6=new A.o(-8,-48)
D.ep9=new A.o(-9,-2)
D.epb=new A.o(-9,-58)
D.epc=new A.o(-9,-79)
D.epd=new A.o(-9,-9)
D.epf=new A.o(-9.5,6)
D.ept=new A.o(-16.5,2)
D.fL_=new A.B("Write a new book",null,B.hi,null,B.K,null,null,null,null,null,null,null)
D.eq2=new A.D(B.kr,D.fL_,null)
D.fZJ=new A.B("Tap to go on",null,B.vw,null,null,null,null,null,null,null,null,null)
D.eqo=new A.D(B.lf,D.fZJ,null)
D.aqT=new A.ae(B.hV,18,B.c,null,null,null)
D.fE8=new A.B("Add",null,B.lv,null,null,null,null,null,null,null,null,null)
D.ddH=w([D.aqT,B.r2,D.fE8],x.p)
D.f83=new A.c7(B.aL,B.e,B.Q,B.m,null,B.p,null,0,D.ddH,null)
D.eqr=new A.D(B.nD,D.f83,null)
D.eqs=new A.D(E.al6,A8.XU,null)
D.fxP=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHh=new A.B("New Project",null,D.fxP,null,null,null,null,null,null,null,null,null)
D.di4=w([D.aqT,B.ae,D.fHh],x.p)
D.f86=new A.c7(B.aL,B.e,B.Q,B.m,null,B.p,null,0,D.di4,null)
D.eqG=new A.D(B.it,D.f86,null)
D.fJO=new A.B("Choose your header",null,A1.vv,null,null,null,null,null,null,null,null,null)
D.er0=new A.D(B.hU,D.fJO,null)
D.bdF=new A.fk(2.2,null,null,null,null,B.cG,null,null,null,null)
D.fdQ=new A.a5(22,22,D.bdF,null)
D.bbL=new A.cf(B.A,null,null,D.fdQ,null)
D.er5=new A.D(B.a_Q,D.bbL,null)
D.bCl=new A.R(14,2,14,6)
D.fXQ=new A.B("The top of your book. Tap a design to see it.",null,R.ty,null,null,null,null,null,null,null,null,null)
D.er6=new A.D(D.bCl,D.fXQ,null)
D.fIX=new A.B("\ud83c\udfc6 A new record!",null,B.fW,null,null,null,null,null,null,null,null,null)
D.er8=new A.D(B.lf,D.fIX,null)
D.esI=new A.j0(1,0.9098039215686274,0.9607843137254902,0.9137254901960784)
D.esL=new A.j0(1,0.8784313725490196,0.8784313725490196,0.8784313725490196)
D.aMc=new A.j0(1,0.9607843137254902,0.48627450980392156,0)
D.JC=new A.j0(1,0.8274509803921568,0.1843137254901961,0.1843137254901961)
D.Aj=new A.j0(1,0.1803921568627451,0.49019607843137253,0.19607843137254902)
D.esR=new A.j0(1,0.12941176470588237,0.12941176470588237,0.12941176470588237)
D.hv3=new C.bjf(null)
D.bxd=new A.mE(D.hv3,null,B.az,null,null)
D.aPQ=new A.cL(0,0,0,0,null,null,D.bxd,null)
D.fEa=new A.B("\ud83c\udfc5",null,B.aaE,null,null,null,null,null,null,null,null,null)
D.exf=new A.cL(null,0,-34,null,null,null,D.fEa,null)
D.eFk=new A.y("E","Sit by the fire again")
D.eKV=new A.y("C","Good Learner")
D.eOj=new A.y("D","Still Growing")
D.eSU=new A.y(-42,42)
D.eUe=new A.y("B","Faithful Listener")
D.eWc=new A.y("A","Keeper of the Family")
D.eZn=new A.b5(-17,0.7,0)
D.eZX=new A.b5(-8,0.95,1.3)
D.f0_=new A.b5(18,0.65,5.2)
D.f01=new A.b5(0,1.15,2.6)
D.f0l=new A.b5(9,0.9,3.9)
D.f2c=new A.cu([0,0,1,1])
D.aRj=new A.a1(0,0,520,160)
D.f56=new A.a1(10,612,440,618)
D.f57=new A.a1(10,612,440,628)
D.f5a=new A.a1(14,-64,34,-12)
D.f5d=new A.a1(300,336,350,348)
D.a9f=new A.a1(30,96,420,346)
D.f5e=new A.a1(30,-9,46,1)
D.f5f=new A.a1(4,2,11,14)
D.f5h=new A.a1(-8,-12.5,8,-7)
D.f5i=new A.a1(-16.5,-21,16.5,1)
D.f5j=new A.a1(60,342,88,348)
D.Uu=new A.a1(66,-66,94,-36)
D.f5k=new A.a1(6,8,10,14)
D.f5n=new A.a1(95,343,115,348)
D.f5o=new A.a1(-6.5,-74,6.5,-58)
D.f5u=new A.a1(-100,-74,100,-12)
D.f5v=new A.a1(-10,8,-6,14)
D.f5w=new A.a1(-11,2,-4,14)
D.f5x=new A.a1(-11,-70,11,-56)
D.f5E=new A.a1(-13,-24,13,-4)
D.f5K=new A.a1(-15,-21,15,0)
D.f5N=new A.a1(-16,-21,16,1)
D.f5O=new A.a1(-16,-21,16,2)
D.f5R=new A.a1(-16,-26,16,-6)
D.f60=new A.a1(-230,-26,230,26)
D.f6o=new A.a1(-38,-26,12,-6)
D.f6s=new A.a1(-3,-70,3,-63)
D.f6t=new A.a1(-44,-22,44,0)
D.f6v=new A.a1(-46,-9,-30,1)
D.aRn=new A.a1(-80,-190,80,20)
D.f6C=new A.a1(-8,-26,40,-6)
D.f6D=new A.a1(-98,-80,92,-75)
D.f6E=new A.a1(-9,-15,9,-9)
D.fXo=new A.B("Let the AI write it from your tree",null,B.ix,null,B.K,null,null,null,null,null,null,null)
D.bKK=new A.dn(1,B.cp,D.fXo,null)
D.dah=w([E.a3w,B.ae,D.bKK],x.p)
D.f7I=new A.c7(B.aL,B.e,B.Q,B.m,null,B.p,null,0,D.dah,null)
D.fDP=new A.B("Save member",null,B.cf,null,null,null,null,null,null,null,null,null)
D.dqb=w([D.arK,B.ae,D.fDP],x.p)
D.f7S=new A.c7(B.aL,B.ba,B.i,B.m,null,B.p,null,0,D.dqb,null)
D.bWi=new A.ae(B.id,14,B.b1,null,null,null)
D.frs=new A.G(!0,B.b1,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHH=new A.B("Cashier",null,D.frs,null,null,null,null,null,null,null,null,null)
D.diB=w([D.bWi,B.bm,D.fHH],x.p)
D.f7W=new A.c7(B.aL,B.e,B.Q,B.m,null,B.p,null,0,D.diB,null)
D.fDQ=new A.B("Transfer & settings",null,B.dh,null,null,null,null,null,null,null,null,null)
D.bIu=new A.bz(1,B.bc,D.fDQ,null)
D.d1D=w([D.ark,B.au,D.bIu],x.p)
D.f7X=new A.c7(B.aL,B.e,B.i,B.m,null,B.p,null,0,D.d1D,null)
D.fcw=new A.av(16,40)
D.fcB=new A.av(22,64)
D.fcI=new A.av(280,88)
D.fdw=new A.a5(30,null,null,null)
D.fCV=new A.B("The teacher is writing\u2026",null,B.AF,null,null,null,null,null,null,null,null,null)
D.bcT=new A.cf(B.A,null,null,D.fCV,null)
D.hoZ=new A.bO("w",x.W)
D.fdW=new A.a5(null,56,D.bcT,D.hoZ)
D.feK=new A.hG(5,8,8,1,null)
D.feS=new A.hG(2,12,12,1.05,null)
D.fHn=new A.B("Please enter a family tree name.",null,null,null,null,null,null,null,null,null,null,null)
D.ffA=new A.b1(D.fHn,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fHC=new A.B("Your shelf is full: six books is the most. Remove one to write another.",null,null,null,null,null,null,null,null,null,null,null)
D.aTA=new A.b1(D.fHC,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fQ1=new A.B("Could not save project on this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fg3=new A.b1(D.fQ1,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h_M=new A.B("All projects cleared",null,null,null,null,null,null,null,null,null,null,null)
D.fg8=new A.b1(D.h_M,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fJM=new A.B("Syncing family trees with the database\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.fgf=new A.b1(D.fJM,null,null,null,null,null,null,null,null,null,null,null,null,B.h0,!1,null,null,null,B.t,null)
D.fY2=new A.B("Your new book is on the shelf.",null,null,null,null,null,null,null,null,null,null,null)
D.aTE=new A.b1(D.fY2,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fJK=new A.B("Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).",null,null,null,null,null,null,null,null,null,null,null)
D.fgF=new A.b1(D.fJK,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fEr=new A.B("Choose male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fgH=new A.b1(D.fEr,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fNt=new A.B("You can make two games at most. Delete one to make another.",null,null,null,null,null,null,null,null,null,null,null)
D.fgN=new A.b1(D.fNt,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h0v=new A.B("Saved to QR Code Generator \u2192 Saved (NGMY Family Tree).",null,null,null,null,null,null,null,null,null,null,null)
D.fhs=new A.b1(D.h0v,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fWi=new A.B("Project saved, but the photo could not be stored. Try choosing the photo again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhR=new A.b1(D.fWi,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.h_Q=new A.B("Choose whether this person is male or female.",null,null,null,null,null,null,null,null,null,null,null)
D.fhU=new A.b1(D.h_Q,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fRG=new A.B("Could not save imported project to this device. Please try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fhW=new A.b1(D.fRG,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fLD=new A.B("Please enter a project name.",null,null,null,null,null,null,null,null,null,null,null)
D.fhX=new A.b1(D.fLD,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fLE=new A.B("Could not read that project QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fiX=new A.b1(D.fLE,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fHp=new A.B("Enter a name and an amount greater than 0.",null,null,null,null,null,null,null,null,null,null,null)
D.fje=new A.b1(D.fHp,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fJo=new A.B("Could not open that file.",null,null,null,null,null,null,null,null,null,null,null)
D.fjy=new A.b1(D.fJo,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fR7=new A.B("Enter a name.",null,null,null,null,null,null,null,null,null,null,null)
D.fjO=new A.b1(D.fR7,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fMt=new A.B("Enter an amount greater than zero.",null,null,null,null,null,null,null,null,null,null,null)
D.fjP=new A.b1(D.fMt,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,!1,null,null,null,B.t,null)
D.fww=new A.G(!0,B.bF,null,null,null,null,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flq=new A.en("\u2665",null,null,B.cJ,null,null,null,null,null,null,D.fww)
D.ftK=new A.G(!0,B.aQ,null,null,null,null,28,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flG=new A.en("Today: how well do you know the family?",null,null,B.cJ,null,null,null,null,null,null,D.ftK)
D.flY=new A.G(!0,B.q2,null,null,null,null,11.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn4=new A.G(!0,D.kM,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnu=new A.G(!0,D.kM,null,null,null,null,12,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fny=new A.G(!0,B.cO,null,null,null,null,17,B.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnH=new A.G(!0,D.fw,null,null,null,null,15,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnS=new A.G(!0,D.fw,null,null,null,null,13,B.H,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fob=new A.t4(!0,B.tk,null,null,null,null,B.dD,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.fos=new A.G(!0,B.cO,null,null,null,null,10.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fov=new A.G(!0,D.kM,null,null,null,null,18,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fow=new A.G(!0,B.cO,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foB=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foE=new A.G(!0,B.cO,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp9=new A.G(!0,B.b1,null,null,null,null,26,B.u,null,-0.4,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpa=new A.G(!0,B.ab,null,null,null,null,11.5,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpc=new A.G(!0,B.aQ,null,null,null,null,15.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpE=new A.G(!0,B.c,null,null,null,null,24,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUP=new A.G(!0,B.aS,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUR=new A.G(!0,D.lB,null,null,null,null,12.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq2=new A.G(!0,B.cO,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaJ=new A.t4(!0,B.U_,null,null,null,null,B.dD,9.5,null,null,null,null,null,null,null,null,null,null,null,null)
D.Vo=new A.G(!0,B.cO,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqc=new A.G(!0,B.S,null,null,null,null,12.5,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqh=new A.G(!0,D.fw,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqF=new A.G(!0,B.c,null,null,null,null,20,B.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frO=new A.G(!0,D.fw,null,null,null,null,13,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV1=new A.G(!0,D.fw,null,null,null,null,14.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs6=new A.G(!0,B.ab,null,null,null,null,12,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsh=new A.G(!0,D.fw,null,null,null,null,null,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsj=new A.G(!0,null,null,null,null,null,8,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsp=new A.G(!0,L.iY,null,null,null,null,16.5,null,null,null,null,null,1.65,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV5=new A.G(!0,D.fw,null,null,null,null,14.5,B.V,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftk=new A.G(!0,D.fw,null,null,null,null,13,B.u,null,null,null,null,1.05,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftD=new A.G(!0,D.fw,null,null,null,null,22,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftF=new A.G(!0,B.S,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftH=new A.G(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new A.G(!0,B.c,null,null,null,null,20,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A7.Iv,null,null,null)
D.aVk=new A.G(!0,D.fw,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fur=new A.G(!0,B.S,null,null,null,null,17,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuN=new A.G(!0,B.fg,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fva=new A.G(!0,B.bQ,null,null,null,null,8,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fve=new A.G(!0,B.bC,null,null,null,null,11,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvq=new A.G(!0,B.c,null,null,null,null,13.5,B.H,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvt=new A.G(!0,D.fw,null,null,null,null,17,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvB=new A.G(!0,D.G3,null,null,null,null,40,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvK=new A.G(!0,B.b1,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw9=new A.G(!0,B.c,null,null,null,null,15.5,B.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwg=new A.G(!0,B.ab,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dj,null,null,null)
D.fwG=new A.G(!0,B.cO,null,null,null,null,130,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwP=new A.G(!0,B.cG,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx1=new A.G(!0,D.lC,null,null,null,null,13,B.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVE=new A.G(!0,D.fw,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.KI=new A.G(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVG=new A.G(!0,B.cO,null,null,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dj,null,null,null)
D.fxl=new A.G(!0,B.bQ,null,null,null,null,11,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxp=new A.G(!0,G.nm,null,null,null,null,84,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxN=new A.G(!0,B.b1,null,null,null,null,13,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy3=new A.G(!0,D.fw,null,null,null,null,15,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyq=new A.G(!0,B.c,null,null,null,null,null,B.H,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyO=new A.G(!0,D.fw,null,null,null,null,22,B.u,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzg=new A.G(!0,D.fw,null,null,null,null,18,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzl=new A.G(!0,B.am,null,null,null,null,11.5,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzu=new A.G(!0,B.c,null,null,null,null,28,B.u,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abc=new A.G(!0,B.am,null,null,null,null,12,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.abe=new A.G(!0,D.lB,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBb=new A.G(!0,B.c,null,null,null,null,8.5,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBt=new A.G(!0,B.aQ,null,null,null,null,27,B.V,B.cH,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBB=new A.G(!0,L.iY,null,null,null,null,23,B.u,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBJ=new A.G(!0,L.iY,null,null,null,null,21,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCc=new A.B("Time:",null,B.hg,null,null,null,null,null,null,null,null,null)
D.fCy=new A.B("\ud83c\udfae",null,K.ab3,null,null,null,null,null,null,null,null,null)
D.fCz=new A.B("Themes",null,B.pL,null,null,null,null,null,null,null,null,null)
D.fD2=new A.B("\ud83c\udfb2",null,B.xh,null,null,null,null,null,null,null,null,null)
D.fD6=new A.B("Delete this game?",null,B.ix,null,null,null,null,null,null,null,null,null)
D.fDd=new A.B("Add Item",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fs1=new A.G(!0,B.S,null,null,null,null,22,B.H,null,-0.3,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDE=new A.B("Debt receipt",null,D.fs1,null,B.K,null,null,null,null,null,null,null)
D.aVU=new A.G(!0,B.am,null,null,null,null,11,B.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDX=new A.B("Person who owes",null,D.aVU,null,null,null,null,null,null,null,null,null)
D.fEU=new A.B("Notes",null,B.aaR,null,null,null,null,null,null,null,null,null)
D.fFk=new A.B("New Tree",null,null,null,null,null,null,null,null,null,null,null)
D.fqW=new A.G(!0,B.c,null,null,null,null,11,B.H,null,0.25,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFn=new A.B("Share",null,D.fqW,null,null,null,null,null,null,null,null,null)
D.fGj=new A.B("Move your family trees",null,I.aba,null,null,null,null,null,null,null,null,null)
D.fGZ=new A.B("Save invites",null,null,null,null,null,null,null,null,null,null,null)
D.fHB=new A.B("The cover design",null,null,null,null,null,null,null,null,null,null,null)
D.fHZ=new A.B("SAVE",null,D.KI,null,null,null,null,null,null,null,null,null)
D.fIB=new A.B("The round button is the right answer.",null,R.AM,null,null,null,null,null,null,null,null,null)
D.fIW=new A.B("Remove this book?",null,B.fW,null,null,null,null,null,null,null,null,null)
D.fxK=new A.G(!0,B.cO,null,null,null,null,17,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.Dj,null,null,null)
D.fJt=new A.B("Fireside Stories",null,D.fxK,null,null,null,null,null,null,null,null,null)
D.aWq=new A.B("Download",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fK9=new A.B("What should the AI do?",null,B.dh,null,null,null,null,null,null,null,null,null)
D.fqA=new A.G(!0,D.lB,null,null,null,null,13,B.u,null,4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKo=new A.B("REPORT CARD",null,D.fqA,null,null,null,null,null,null,null,null,null)
D.fL6=new A.B("Calabash Catch",null,B.KL,null,null,null,null,null,null,null,null,null)
D.fLz=new A.B("Take photo",null,null,null,null,null,null,null,null,null,null,null)
D.fM0=new A.B("\ud83c\udfe1",null,B.ED,null,null,null,null,null,null,null,null,null)
D.fMI=new A.B("Ribbon bookmark",null,B.ju,null,null,null,null,null,null,null,null,null)
D.fzf=new A.G(!0,B.b1,null,null,null,null,15,B.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNc=new A.B("NGMY.ORG",null,D.fzf,null,B.K,null,null,null,null,null,null,null)
D.fOv=new A.B("Scan family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fvu=new A.G(!0,B.c,null,null,null,null,13,B.a8,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPh=new A.B("Hold steady \u2014 worksheet QR scans instantly when in frame.",null,D.fvu,null,B.K,null,null,null,null,null,null,null)
D.fQv=new A.B("Delete",null,B.Vi,null,null,null,null,null,null,null,null,null)
D.fQw=new A.B("Scan project QR",null,null,null,null,null,null,null,null,null,null,null)
D.fQD=new A.B("Thumbnail",null,B.pL,null,null,null,null,null,null,null,null,null)
D.fRd=new A.B("Save the cover",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fRi=new A.B("A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.",null,B.xj,null,B.K,null,null,null,null,null,null,null)
D.fRH=new A.B("Your photos",null,B.pL,null,null,null,null,null,null,null,null,null)
D.fRX=new A.B("Create Project",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fSk=new A.B("\u2b50 stars",null,B.Vv,null,null,null,null,null,null,null,null,null)
D.fSy=new A.B("Design your cover",null,A1.vv,null,null,null,null,null,null,null,null,null)
D.fSE=new A.B("Gallery",null,null,null,null,null,null,null,null,null,null,null)
D.fSH=new A.B("PICTURE",null,M.vA,null,null,null,null,null,null,null,null,null)
D.fSJ=new A.B("\ud83c\udfaf",null,D.VJ,null,null,null,null,null,null,null,null,null)
D.fT4=new A.B("Paid",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fT6=new A.B("You can undo it right after.",null,R.AM,null,null,null,null,null,null,null,null,null)
D.fTD=new A.B("Print",null,B.vx,null,null,null,null,null,null,null,null,null)
D.fU1=new A.B("Amount owed",null,D.aVU,null,null,null,null,null,null,null,null,null)
D.fUg=new A.B("Got it",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fUS=new A.B("The whole book",null,null,null,null,null,null,null,null,null,null,null)
D.fUV=new A.B("Add to budget",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fVm=new A.B("Debtor signature",null,B.aaR,null,null,null,null,null,null,null,null,null)
D.fVw=new A.B("Change icon",null,B.aaQ,null,null,null,null,null,null,null,null,null)
D.fWj=new A.B("MADE BY THE SYSTEM, FROM YOUR TREE",null,P.tA,null,null,null,null,null,null,null,null,null)
D.fWL=new A.B("Family tree QR",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fWR=new A.B("Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.",null,B.VI,null,null,null,null,null,null,null,null,null)
D.fXe=new A.B("Download",null,B.vx,null,null,null,null,null,null,null,null,null)
D.fXf=new A.B("The person who planted this tree has not made a game yet.",null,B.AP,null,null,null,null,null,null,null,null,null)
D.fXj=new A.B("Change",null,B.pL,null,null,null,null,null,null,null,null,null)
D.fY8=new A.B("Clear all",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fYb=new A.B("WHAT SHOULD IT CHANGE?",null,M.vA,null,null,null,null,null,null,null,null,null)
D.fYL=new A.B("COLOUR",null,M.vA,null,null,null,null,null,null,null,null,null)
D.fYZ=new A.B("Do it",null,B.cB,null,null,null,null,null,null,null,null,null)
D.fZ1=new A.B("Create Tree",null,B.cf,null,null,null,null,null,null,null,null,null)
D.fZa=new A.B("Give me another clue",null,D.KI,null,null,null,null,null,null,null,null,null)
D.h_4=new A.B("Create Family Tree",null,B.f9,null,null,null,null,null,null,null,null,null)
D.h_e=new A.B("THE TEACHER EXPLAINS THESE",null,P.tA,null,null,null,null,null,null,null,null,null)
D.flX=new A.G(!0,E.km,null,null,null,null,null,B.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_k=new A.B("Write the first page myself",null,D.flX,null,null,null,null,null,null,null,null,null)
D.h_T=new A.B("Use this header",null,B.cB,null,null,null,null,null,null,null,null,null)
D.h0_=new A.B("Create Project",null,E.aVB,null,null,null,null,null,null,null,null,null)
D.hqh=new C.acq(1,"header")
D.acf=new C.acq(2,"projects")
D.hqi=new C.acq(3,"cashier")
D.acg=new C.acq(4,"familyTree")
D.hE_=new C.cFM(0,"start")
D.hE0=new C.cFN(0,"start")
D.hqG=new C.ZA(null)
D.hrH=new C.a_2(null)
D.dDk=new A.bw(B.hY,[],A.as("bw<n,Gz>"))
D.dli=w([],x.dE)
D.dlj=w([],x.M)
D.hsd=new C.bgr(D.dDk,D.dli,D.dlj,0,0,null,null)
D.b_L=new C.a_T(0,"intro")
D.b_M=new C.a_T(1,"countdown")
D.acu=new C.a_T(2,"ask")
D.WC=new C.a_T(3,"reveal")
D.b_N=new C.a_T(4,"end")
D.hv5=new C.tc(F.Gc,D.lC,B.cO,F.lD,5,!1,!1,!1,0,null)
D.hv6=new C.tc(F.Gc,B.ep,B.cO,B.bP,2,!0,!0,!1,2,B.cO)
D.hv7=new C.tc(B.oh,B.cG,B.cO,F.lD,2,!0,!1,!1,2,B.aw)
D.hv8=new C.tc(F.Gc,B.dJ,B.cO,F.lD,5,!1,!1,!1,1,null)
D.hv9=new C.tc(F.ZN,D.aiv,B.cO,F.lD,4,!0,!1,!0,0,null)
D.b_Q=new C.tc(F.ZN,B.dK,B.cO,F.lD,3,!0,!1,!0,2,null)
D.b_R=new C.tc(F.mR,D.lC,B.c,F.lD,0,!1,!1,!0,0,null)
D.b_S=new C.tc(B.oh,B.aE,B.cO,B.bP,2,!0,!0,!1,2,B.dK)
D.b_T=new C.tc(B.oh,G.nm,B.i9,F.lD,5,!1,!1,!0,3,null)
D.hva=new C.tc(B.oh,B.dK,B.cO,F.lD,0,!0,!1,!1,0,B.aE)
D.b_U=new C.tc(F.Gc,B.ep,B.cO,B.bP,1,!1,!0,!1,1,null)
D.b_V=new C.tc(F.FL,B.aw,B.aE,F.lD,4,!0,!1,!0,2,null)
D.hvb=new C.tc(F.mR,B.aw,B.ep,F.lD,3,!0,!1,!1,0,null)
D.hvc=new C.tc(B.oh,B.dJ,B.cO,B.bP,1,!1,!0,!1,1,null)
D.hvd=new C.tc(F.FL,D.ahx,B.c,F.lD,5,!1,!1,!0,0,null)
D.hvR=new C.a0q(null)
D.hE8=new C.afN(0,"still")
D.WZ=new C.afN(1,"walk")
D.b0l=new C.afN(2,"pound")
D.b0m=new C.afN(3,"drum")
D.hzR=new C.a1I(0,"greet")
D.b0n=new C.a1I(1,"teach")
D.acO=new C.a1I(2,"ask")
D.hzS=new C.a1I(3,"feedback")
D.b0o=new C.a1I(4,"end")
D.X3=new C.a20(0,"intro")
D.X4=new C.a20(1,"asking")
D.B4=new C.a20(2,"reacting")
D.acY=new C.a20(3,"driving")
D.acZ=new C.a20(4,"arrived")
D.ad1=new C.aLi(0,"projects")
D.b0M=new C.aLi(1,"cashier")
D.hBT=new C.aLi(2,"familyTree")})()};
(a=>{a["JZf7SVH05aC+V14ADGepih+XiG8="]=a.current})($__dart_deferred_initializers__);